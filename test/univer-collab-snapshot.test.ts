import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { handleUniverserHttp } from "../src/integrations/univer-collab-http.ts";
import { UNIVERSER_OK } from "../src/integrations/univer-protocol.ts";
import { getSheetBlockFromSnapshot } from "../src/plugins/univer-snapshot.ts";

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
      return { toArray: () => rows as Record<string, unknown>[] };
    }
  };
}

function hostFor(collab: UniverCollabService) {
  const tickets = new Map<string, { userID: string; name: string; avatar?: string; expiresAt: number }>();
  return {
    collab,
    identity: { userID: "user_admin", name: "Avery Chen", avatar: "" },
    mintSessionTicket(identity: { userID: string; name: string; avatar: string }) {
      const ticket = `ticket_${tickets.size + 1}`;
      tickets.set(ticket, { ...identity, expiresAt: Date.now() + 60_000 });
      return ticket;
    }
  };
}

describe("Universer snapshot HTTP for unit_welcome_sheet", () => {
  test("GET snapshot/2/unit/unit_welcome_sheet hydrates Q3 and projects sheet blocks", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    const host = hostFor(collab);

    const res = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/snapshot/2/unit/unit_welcome_sheet/rev/0"),
      host
    );
    assert.ok(res, "snapshot HTTP must be handled (T26 dropped it from dsh-host)");
    assert.equal(res.status, 200);
    const body = (await res.json()) as any;
    assert.equal(body.error.code, UNIVERSER_OK.code);
    assert.equal(body.snapshot?.workbook?.name, "Q3 Forecast");
    assert.equal(body.snapshot?.workbook?.sheets?.sheet_1?.cellData?.["0"]?.["0"]?.v, "Metric");
    const blockIds = body.snapshot?.workbook?.blockMeta?.sheet_1?.blocks;
    assert.ok(Array.isArray(blockIds) && blockIds.length >= 1, "Pro loadSheet ignores sheet.cellData without blocks");
    const blockId = String(blockIds[0]);
    const projected = getSheetBlockFromSnapshot(body.snapshot, blockId);
    assert.equal(projected?.data["0"]["0"].v, "Metric");

    const blockRes = await handleUniverserHttp(
      new Request(
        `https://workspace.edge/universer-api/snapshot/block/2/unit/unit_welcome_sheet/block/${encodeURIComponent(blockId)}`
      ),
      host
    );
    assert.ok(blockRes);
    assert.equal(blockRes.status, 200);
    const blockBody = (await blockRes.json()) as any;
    assert.equal(blockBody.error.code, UNIVERSER_OK.code);
    assert.equal(blockBody.block.data["0"]["0"].v, "Metric");
  });

  test("session-ticket mints from host identity", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    const host = hostFor(collab);
    const res = await handleUniverserHttp(
      new Request("https://workspace.edge/universer-api/user/session-ticket"),
      host
    );
    assert.ok(res);
    const body = (await res.json()) as any;
    assert.equal(typeof body.ticket, "string");
    assert.match(String(body.ticket), /^ticket_/);
  });
});
