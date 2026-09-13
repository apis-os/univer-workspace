import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { ActionService } from "../src/kernel/action.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { applySheetCells, registerFacadeActions } from "../src/plugins/univer-facade-actions.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { getSheetCell } from "../src/plugins/univer-snapshot.ts";
import { buildHistoryListBody, buildHistoryChangesetsBody } from "../src/integrations/univer-history.ts";
import { consumeIssuedTicket } from "../src/integrations/univer-protocol.ts";
import { runAgentTurn } from "../src/plugins/univer-agent.ts";

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
      return { toArray: () => stmt.all(...(binds as any[])) as Record<string, unknown>[] };
    }
  };
}

describe("collab clone, merge, and history", () => {
  test("draft edits stay off trunk until copySnapshotTo", () => {
    const ctx = new Context();
    const collab = new UniverCollabService(ctx, createSqliteAdapter());
    collab.createUnit("unit_trunk", 2, "Welcome", generateDefaultSnapshot("unit_trunk", 2, "Welcome"));
    applySheetCells(collab, "unit_trunk", [{ a1: "A1", value: "trunk" }]);
    collab.cloneUnit("unit_trunk", "unit_wt_draft", "Draft");
    const draftData = collab.getLatestSnapshot("unit_wt_draft")!.data as any;
    assert.equal(draftData.unitID, "unit_wt_draft");
    assert.equal(draftData.workbook.unitID, "unit_wt_draft");
    applySheetCells(collab, "unit_wt_draft", [{ a1: "A1", value: "draft" }]);
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_trunk")!.data, "A1")?.v, "trunk");
    const copied = collab.copySnapshotTo("unit_wt_draft", "unit_trunk");
    assert.equal(copied.copied, true);
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_trunk")!.data, "A1")?.v, "draft");
    const trunkData = collab.getLatestSnapshot("unit_trunk")!.data as any;
    assert.equal(trunkData.unitID, "unit_trunk");
    assert.equal(trunkData.workbook.unitID, "unit_trunk");
  });

  test("clone rewrites nested doc and slide unit ids", () => {
    const ctx = new Context();
    const collab = new UniverCollabService(ctx, createSqliteAdapter());
    collab.createUnit("unit_doc", 1, "Doc", generateDefaultSnapshot("unit_doc", 1, "Doc"));
    collab.cloneUnit("unit_doc", "unit_wt_doc", "Doc draft");
    const docDraft = collab.getLatestSnapshot("unit_wt_doc")!.data as any;
    assert.equal(docDraft.unitID, "unit_wt_doc");
    assert.equal(docDraft.doc.unitID, "unit_wt_doc");

    collab.createUnit("unit_slide", 3, "Slide", generateDefaultSnapshot("unit_slide", 3, "Slide"));
    collab.cloneUnit("unit_slide", "unit_wt_slide", "Slide draft");
    const slideDraft = collab.getLatestSnapshot("unit_wt_slide")!.data as any;
    assert.equal(slideDraft.unitID, "unit_wt_slide");
    assert.equal(slideDraft.slide.unitID, "unit_wt_slide");
  });

  test("agent set-range changeset appears in history list and cs", () => {
    const ctx = new Context();
    const collab = new UniverCollabService(ctx, createSqliteAdapter());
    applySheetCells(collab, "unit_welcome_sheet", [{ a1: "A1", value: "Hello from AI" }]);
    const unit = collab.getUnit("unit_welcome_sheet");
    const entries = collab.listChangesetEntries("unit_welcome_sheet");
    assert.ok(unit && unit.rev >= 2);
    assert.ok(entries.length >= 1);
    assert.equal(
      (entries.at(-1)?.changeset as any)?.mutations?.[0]?.id,
      "sheet.mutation.set-range-values"
    );
    const list = buildHistoryListBody(
      "unit_welcome_sheet",
      { unitId: unit!.unit_id, rev: unit!.rev, createdAt: unit!.created_at },
      entries,
      { length: 20 }
    ) as any;
    assert.equal(list.error.code, 1);
    assert.ok(list.historyIds.length >= 1);
    const cs = buildHistoryChangesetsBody(
      "unit_welcome_sheet",
      entries,
      entries[0].rev,
      entries[entries.length - 1].rev
    ) as any;
    assert.equal(cs.error.code, 1);
    assert.ok(cs.changesets.length >= 1);
  });

  test("agent set-range clientId is agent_workspace not the prompting human", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    await runAgentTurn(
      { kernel: ctx, actor: { userId: "user_admin", name: "Avery Chen", username: "admin" } },
      { unitId: "unit_welcome_sheet", prompt: "Set A1 to Hello from AI" }
    );

    const entries = collab.listChangesetEntries("unit_welcome_sheet");
    assert.ok(entries.length >= 1);
    assert.equal(entries.at(-1)?.clientId, "agent_workspace");
    assert.equal((entries.at(-1)?.changeset as { memberID?: string })?.memberID, "agent_workspace");
    assert.notEqual(entries.at(-1)?.clientId, "agent:user_admin");
    assert.notEqual(entries.at(-1)?.clientId, "user_admin");
  });

  test("comb tickets never silently become admin", () => {
    const tickets = new Map();
    assert.equal(consumeIssuedTicket(tickets, ""), null);
    assert.equal(consumeIssuedTicket(tickets, "missing"), null);
    tickets.set("ticket_ok", {
      userID: "user_carol",
      name: "Carol",
      expiresAt: Date.now() + 10_000
    });
    const minted = consumeIssuedTicket(tickets, "ticket_ok");
    assert.equal(minted?.userID, "user_carol");
    assert.notEqual(minted?.userID, "user_admin");
    assert.equal(consumeIssuedTicket(tickets, "ticket_ok"), null);
  });
});
