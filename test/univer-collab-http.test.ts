import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { handleUniverserHttp } from "../src/integrations/univer-collab-http.ts";
import {
  consumeIssuedTicket,
  readCollaboratorIdentity,
  rewriteWorktreeUniverserPath,
  UNIVERSER_OK
} from "../src/integrations/univer-protocol.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { applyDocAppend, applySheetCells } from "../src/plugins/univer-facade-actions.ts";
import { getSheetBlockFromSnapshot, projectSheetBlocks } from "../src/plugins/univer-snapshot.ts";

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("ALTER") || trimmed.startsWith("DROP")) {
        db.exec(query);
        return { toArray: () => [] };
      }
      const stmt = db.prepare(query);
      if (trimmed.startsWith("INSERT") || trimmed.startsWith("UPDATE") || trimmed.startsWith("DELETE")) {
        stmt.run(...(binds as any[]));
        return { toArray: () => [] };
      }
      const rows = stmt.all(...(binds as any[]));
      return {
        toArray: () => rows as Record<string, unknown>[]
      };
    }
  };
}

function hostFor(collab: UniverCollabService, userID = "user_carol") {
  const tickets = new Map<string, { userID: string; name: string; avatar?: string; expiresAt: number }>();
  return {
    collab,
    identity: { userID, name: "Carol Designer", avatar: "" },
    mintSessionTicket(identity: { userID: string; name: string; avatar: string }) {
      const ticket = `ticket_${tickets.size + 1}`;
      tickets.set(ticket, { ...identity, expiresAt: Date.now() + 60_000 });
      return ticket;
    },
    tickets
  };
}

describe("Universer collab HTTP protocol", () => {
  test("rewrites Worktree snapshot/comb/history onto trunk Universer paths", () => {
    const rewritten = rewriteWorktreeUniverserPath(
      "/universer-api/worktrees/wt_review/snapshot/2/unit/unit_draft/rev/0"
    );
    assert.equal(rewritten.worktreeId, "wt_review");
    assert.equal(rewritten.pathname, "/universer-api/snapshot/2/unit/unit_draft/rev/0");
    const comb = rewriteWorktreeUniverserPath(
      "/universer-api/worktrees/wt_review/comb/2/unit/unit_draft/new_changes"
    );
    assert.equal(comb.pathname, "/universer-api/comb/2/unit/unit_draft/new_changes");
  });

  test("snapshot and worktree snapshot return ErrorCode.OK = 1", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    const host = hostFor(collab);

    const trunk = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/snapshot/2/unit/unit_sheet/rev/0"),
      host
    );
    assert.ok(trunk);
    const trunkBody = (await trunk.json()) as any;
    assert.equal(trunkBody.error.code, UNIVERSER_OK.code);
    assert.ok(trunkBody.snapshot);

    const worktree = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/worktrees/wt_1/snapshot/2/unit/unit_wt_draft/rev/0"),
      host
    );
    assert.ok(worktree);
    const worktreeBody = (await worktree.json()) as any;
    assert.equal(worktreeBody.error.code, 1);
    assert.ok(collab.getWorktreeBinding("wt_1", "unit_wt_draft"));
  });

  test("history after changeset stamps unix-second createTime and the author", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    collab.createUnit("unit_sheet", 2, "Sheet", generateDefaultSnapshot("unit_sheet", 2, "Sheet"));
    const host = hostFor(collab, "user_carol");

    const write = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/comb/2/unit/unit_sheet/new_changes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitID: "unit_sheet",
          memberID: "member_live",
          changeset: {
            unitID: "unit_sheet",
            revision: 2,
            mutations: [{ id: "sheet.mutation.set-range-values" }]
          }
        })
      }),
      host
    );
    assert.equal(write?.status, 200);
    assert.equal(((await write!.json()) as any).error.code, 1);

    const history = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/history/unit_sheet/cs?startRevision=2&endRevision=2"),
      host
    );
    const body = (await history!.json()) as any;
    assert.equal(body.error.code, 1);
    assert.equal(body.changesets.length, 1);
    assert.equal(typeof body.changesets[0].createTime, "number");
    assert.ok(body.changesets[0].createTime < 1_000_000_000_000);
    assert.equal(body.changesets[0].userID, "user_carol");
  });

  test("merge-preview returns a preview evaluation when a draft snapshot exists", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    collab.createUnit("unit_draft", 2, "Draft", generateDefaultSnapshot("unit_draft", 2, "Draft"));
    collab.bindWorktreeUnit("wt_1", "unit_draft", { type: 2, trunkUnitId: "unit_trunk" });
    const host = hostFor(collab);

    const res = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/worktrees/wt_1/units/unit_draft/merge-preview"),
      host
    );
    const body = (await res!.json()) as any;
    assert.equal(body.error.code, 1);
    assert.equal(body.evaluation.status, "preview");
    assert.equal(body.evaluation.worktreeID, "wt_1");
    assert.ok(body.evaluation.preview.snapshot);

    const comparison = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/worktrees/wt_1/units/unit_draft/comparison"),
      host
    );
    const compared = (await comparison!.json()) as any;
    assert.equal(compared.result.unit.unitId, "unit_draft");
    assert.ok(compared.right.unitData);
  });

  test("worktree comparison diffs trunk vs draft sheet cells", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    collab.createUnit("unit_trunk", 2, "Welcome", generateDefaultSnapshot("unit_trunk", 2, "Welcome"));
    applySheetCells(collab, "unit_trunk", [
      { a1: "A1", value: "trunk" },
      { a1: "C1", value: "keep" }
    ]);
    collab.cloneUnit("unit_trunk", "unit_wt_draft", "Draft", "wt_cmp");
    applySheetCells(collab, "unit_wt_draft", [
      { a1: "A1", value: "draft" },
      { a1: "B1", value: "only-draft" }
    ]);
    const host = hostFor(collab);

    const comparison = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/worktrees/wt_cmp/units/unit_wt_draft/comparison"),
      host
    );
    assert.ok(comparison);
    const body = (await comparison.json()) as any;
    assert.equal(body.result.fidelity, "snapshot");
    assert.equal(body.result.unit.type, 2);
    assert.equal(body.result.unit.unitId, "unit_wt_draft");
    assert.ok(Array.isArray(body.result.items));
    assert.ok(
      body.result.items.length >= 2,
      `expected cell diffs, got ${JSON.stringify(body.result.items)}`
    );

    const cellItems = body.result.items.filter((item: any) => item.entityType === "cell");
    const a1 = cellItems.find(
      (item: any) => item.stableId === "A1" || item.locations?.right?.stableId === "A1"
    );
    assert.ok(a1, "missing A1 update");
    assert.equal(a1.kind, "update");
    assert.equal(a1.changes?.[0]?.before, "trunk");
    assert.equal(a1.changes?.[0]?.after, "draft");

    const b1 = cellItems.find(
      (item: any) => item.stableId === "B1" || item.locations?.right?.stableId === "B1"
    );
    assert.ok(b1, "missing B1 insert");
    assert.equal(b1.kind, "insert");
    assert.equal(b1.changes?.[0]?.after, "only-draft");

    assert.equal(body.left.unitData?.sheets?.sheet_1?.cellData?.["0"]?.["0"]?.v, "trunk");
    assert.equal(body.right.unitData?.sheets?.sheet_1?.cellData?.["0"]?.["0"]?.v, "draft");
    assert.equal(body.right.unitData?.sheets?.sheet_1?.cellData?.["0"]?.["1"]?.v, "only-draft");
    assert.equal(typeof body.left.unitData.id, "string");
    assert.equal(body.result.summary.update, 1);
    assert.equal(body.result.summary.insert, 1);
    assert.equal(body.result.productContext.kind, "sheet");
    assert.ok(body.result.productContext.sheets.some((sheet: any) => sheet.changeCount >= 2));
  });

  test("worktree comparison diffs document body text", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    collab.createUnit("unit_doc", 1, "Brief", generateDefaultSnapshot("unit_doc", 1, "Brief"));
    collab.cloneUnit("unit_doc", "unit_wt_doc", "Brief draft", "wt_doc");
    applyDocAppend(collab, "unit_wt_doc", "Agent draft paragraph");
    const host = hostFor(collab);

    const comparison = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/worktrees/wt_doc/units/unit_wt_doc/comparison"),
      host
    );
    const body = (await comparison!.json()) as any;
    assert.equal(body.result.productContext.kind, "doc");
    const textItem = body.result.items.find(
      (item: any) => item.entityType === "paragraph" || item.entityType === "text" || item.entityType === "body"
    );
    assert.ok(textItem, `expected a document text diff, got ${JSON.stringify(body.result.items)}`);
    assert.equal(textItem.kind, "insert");
    assert.match(String(textItem.changes?.[0]?.after ?? textItem.details?.[0]?.after ?? ""), /Agent draft paragraph/);
    assert.ok(body.right.unitData?.body || body.right.unitData?.id);
  });

  test("snapshot GET projects cellData into Pro sheet blocks so loadSheet can hydrate A1", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    applySheetCells(collab, "unit_welcome_sheet", [
      { a1: "A1", value: "Hello from UI" },
      { a1: "C1", value: "mux-live" },
      { a1: "D1", value: "client-core-live" }
    ]);
    const host = hostFor(collab);

    const snapRes = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/snapshot/2/unit/unit_welcome_sheet/rev/0"),
      host
    );
    assert.ok(snapRes);
    const snapBody = (await snapRes.json()) as any;
    assert.equal(snapBody.error.code, UNIVERSER_OK.code);
    const blockIds = snapBody.snapshot?.workbook?.blockMeta?.sheet_1?.blocks;
    assert.ok(Array.isArray(blockIds) && blockIds.length >= 1, "Pro client ignores sheet.cellData; blocks must be listed");
    const blockId = String(blockIds[0]);
    assert.equal(snapBody.snapshot.workbook.sheets.sheet_1.cellData["0"]["0"].v, "Hello from UI");

    const deserialized = await handleUniverserHttp(
      new Request(
        `https://workspace.edge/universer-api/snapshot/block/2/unit/unit_welcome_sheet/block/${encodeURIComponent(blockId)}`
      ),
      host
    );
    assert.ok(deserialized);
    assert.equal(deserialized.status, 200);
    const deserializedBody = (await deserialized.json()) as any;
    assert.equal(deserializedBody.error.code, UNIVERSER_OK.code);
    assert.equal(deserializedBody.block.id, blockId);
    assert.equal(deserializedBody.block.data["0"]["0"].v, "Hello from UI");
    assert.equal(deserializedBody.block.data["0"]["2"].v, "mux-live");
    assert.equal(deserializedBody.block.data["0"]["3"].v, "client-core-live");

    const compressed = await handleUniverserHttp(
      new Request(
        `https://workspace.edge/universer-api/snapshot/2/unit/unit_welcome_sheet/block/${encodeURIComponent(blockId)}`
      ),
      host
    );
    assert.ok(compressed);
    assert.equal(compressed.status, 200);
    const compressedBody = (await compressed.json()) as any;
    assert.equal(compressedBody.error.code, UNIVERSER_OK.code);
    assert.equal(compressedBody.block.data["0"]["2"].v, "mux-live");

    const missing = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/snapshot/block/2/unit/unit_welcome_sheet/block/nope"),
      host
    );
    assert.equal(missing?.status, 404);
  });

  test("projectSheetBlocks lists one block per sheet that already has cellData", () => {
    const projected = projectSheetBlocks({
      unitID: "unit_welcome_sheet",
      rev: 18,
      type: 2,
      workbook: {
        unitID: "unit_welcome_sheet",
        sheetOrder: ["sheet_1"],
        sheets: {
          sheet_1: {
            id: "sheet_1",
            cellData: { "0": { "0": { v: "Hello from UI" } } }
          }
        },
        blockMeta: { sheet_1: { sheetID: "sheet_1", blocks: [] } }
      }
    });
    assert.deepEqual(projected.snapshot.workbook.blockMeta.sheet_1.blocks, ["blk_sheet_1"]);
    assert.equal(getSheetBlockFromSnapshot(projected.snapshot, "blk_sheet_1")?.data["0"]["0"].v, "Hello from UI");
  });

  test("session tickets mint the request identity and reject missing tickets", () => {
    const tickets = new Map();
    assert.equal(consumeIssuedTicket(tickets, ""), null);
    tickets.set("ticket_ok", {
      userID: "user_carol",
      name: "Carol",
      expiresAt: Date.now() + 10_000
    });
    assert.equal(consumeIssuedTicket(tickets, "ticket_ok")?.userID, "user_carol");
    assert.equal(consumeIssuedTicket(tickets, "ticket_ok"), null);

    const identity = readCollaboratorIdentity(
      new Request("https://workspace.edge/universer-api/user", {
        headers: {
          "x-workspace-user-id": "user_carol",
          "x-workspace-user-name": "Carol Designer"
        }
      })
    );
    assert.equal(identity.userID, "user_carol");
    assert.equal(identity.name, "Carol Designer");
  });

  test("Comb session tickets survive a Durable Object memory reset", async () => {
    const { persistIssuedTicket, loadIssuedTicket } = await import(
      "../src/integrations/univer-protocol.ts"
    );
    const sql = createSqliteAdapter();
    persistIssuedTicket(
      sql,
      "ticket_hibernate",
      { userID: "user_jordan", name: "Jordan Lee", avatar: "" },
      Date.now() + 60_000
    );
    const loaded = loadIssuedTicket(sql, "ticket_hibernate");
    assert.equal(loaded?.userID, "user_jordan");
    assert.equal(loaded?.name, "Jordan Lee");
    assert.equal(loadIssuedTicket(sql, "ticket_hibernate"), null, "tickets are one-use after load");
  });
});
