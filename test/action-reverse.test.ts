import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import { ActionService } from "../src/kernel/action.ts";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import {
  AGENT_USER_ID,
  applySheetCells,
  registerFacadeActions
} from "../src/plugins/univer-facade-actions.ts";
import { handleAgentHttp, runAgentTurn } from "../src/plugins/univer-agent.ts";
import { getSheetCell } from "../src/plugins/univer-snapshot.ts";

const UNIT_ID = "unit_undo_sheet";

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

function harness() {
  const sql = createSqliteAdapter();
  const ctx = new Context();
  ctx.provide("host", { sql });
  const action = new ActionService(ctx, sql);
  const collab = new UniverCollabService(ctx, sql);
  ctx.provide("collab", collab);
  registerFacadeActions(ctx);
  return { ctx, action, collab };
}

describe("Undo last Workspace Agent turn", () => {
  test("setRange then reverse restores prior v", async () => {
    const { action, collab } = harness();
    applySheetCells(collab, UNIT_ID, [{ a1: "A1", value: "prior" }], "user_admin");
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "prior");

    await action.execute(
      "univer.sheet.setRange",
      { unitId: UNIT_ID, cells: [{ a1: "A1", value: "agent-write" }] },
      { unitId: UNIT_ID, userId: AGENT_USER_ID, clientId: AGENT_USER_ID }
    );
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "agent-write");

    const reversed = await action.reverseLast();
    assert.equal(reversed, true);
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "prior");
  });

  test("does not reverse when the last journal actor is human", async () => {
    const { action, collab } = harness();
    applySheetCells(collab, UNIT_ID, [{ a1: "A1", value: "prior" }], "user_admin");
    await action.execute(
      "univer.sheet.setRange",
      { unitId: UNIT_ID, cells: [{ a1: "A1", value: "human-write" }] },
      { unitId: UNIT_ID, userId: "user_admin" }
    );
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "human-write");
    const reversed = await action.reverseLast();
    assert.equal(reversed, false);
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "human-write");
  });

  test("POST undo broadcasts the inverse Comb changeset", async () => {
    const { ctx, action, collab } = harness();
    applySheetCells(collab, UNIT_ID, [{ a1: "A1", value: "prior" }], "user_admin");
    await action.execute(
      "univer.sheet.setRange",
      { unitId: UNIT_ID, cells: [{ a1: "A1", value: "agent-write" }] },
      { unitId: UNIT_ID, userId: AGENT_USER_ID, clientId: AGENT_USER_ID }
    );
    const broadcasts: Array<{ unitId: string; changeset: Record<string, unknown> }> = [];
    const res = await handleAgentHttp(
      new Request(`https://workspace.test/agents/${UNIT_ID}/undo`, { method: "POST" }),
      {
        kernel: ctx,
        broadcastCollab: (unitId, changeset) => {
          broadcasts.push({ unitId, changeset });
        }
      }
    );
    assert.ok(res);
    assert.equal(res.status, 200);
    const body = (await res.json()) as { reversed?: boolean };
    assert.equal(body.reversed, true);
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "prior");
    assert.equal(broadcasts.length, 1);
    assert.equal(broadcasts[0]?.unitId, UNIT_ID);
    const cellValue = (broadcasts[0]?.changeset.mutations as Array<{ params?: { cellValue?: Record<string, Record<string, { v?: unknown }>> } }>)?.[0]
      ?.params?.cellValue;
    const restored = Object.values(cellValue ?? {}).flatMap((row) => Object.values(row ?? {}));
    assert.ok(restored.some((cell) => cell?.v === "prior"));
  });

  test("POST undo for unit B does not reverse unit A or broadcast B last row", async () => {
    const UNIT_A = "unit_undo_a";
    const UNIT_B = "unit_undo_b";
    const { ctx, action, collab } = harness();
    applySheetCells(collab, UNIT_A, [{ a1: "A1", value: "prior-a" }], "user_admin");
    applySheetCells(collab, UNIT_B, [{ a1: "B1", value: "prior-b" }], "user_admin");
    await action.execute(
      "univer.sheet.setRange",
      { unitId: UNIT_B, cells: [{ a1: "B1", value: "agent-b" }] },
      { unitId: UNIT_B, userId: AGENT_USER_ID, clientId: AGENT_USER_ID }
    );
    await action.execute(
      "univer.sheet.setRange",
      { unitId: UNIT_A, cells: [{ a1: "A1", value: "agent-a" }] },
      { unitId: UNIT_A, userId: AGENT_USER_ID, clientId: AGENT_USER_ID }
    );
    const bLastBefore = collab.listChangesetEntries(UNIT_B).at(-1);
    assert.ok(bLastBefore);
    const broadcasts: Array<{ unitId: string; changeset: Record<string, unknown> }> = [];
    const res = await handleAgentHttp(
      new Request(`https://workspace.test/agents/${UNIT_B}/undo`, { method: "POST" }),
      {
        kernel: ctx,
        broadcastCollab: (unitId, changeset) => {
          broadcasts.push({ unitId, changeset });
        }
      }
    );
    assert.ok(res);
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_A)!.data, "A1")?.v, "agent-a");
    const broadcastBLastRow = broadcasts.some((item) => {
      if (item.unitId !== UNIT_B) return false;
      return item.changeset.id === bLastBefore!.id || item.changeset.id === bLastBefore!.changeset.id;
    });
    assert.equal(broadcastBLastRow, false);
  });

  test("undo is disabled when last mutating journal entry has no reverse", async () => {
    const DOC_ID = "unit_undo_doc";
    const { ctx, action } = harness();
    await action.execute(
      "univer.doc.appendText",
      { unitId: DOC_ID, text: "hello from agent" },
      { unitId: DOC_ID, userId: AGENT_USER_ID, clientId: AGENT_USER_ID }
    );
    const getRes = await handleAgentHttp(
      new Request(`https://workspace.test/agents/${DOC_ID}/undo`),
      { kernel: ctx }
    );
    assert.ok(getRes);
    const getBody = (await getRes.json()) as { enabled?: boolean };
    assert.equal(getBody.enabled, false);
    const broadcasts: unknown[] = [];
    const postRes = await handleAgentHttp(
      new Request(`https://workspace.test/agents/${DOC_ID}/undo`, { method: "POST" }),
      {
        kernel: ctx,
        broadcastCollab: (...args: unknown[]) => {
          broadcasts.push(args);
        }
      }
    );
    assert.ok(postRes);
    assert.equal(postRes.status, 409);
    assert.equal(broadcasts.length, 0);
  });

  test("regex agent turn then reverseLast restores prior v", async () => {
    const { ctx, action, collab } = harness();
    applySheetCells(collab, UNIT_ID, [{ a1: "A1", value: "prior" }], "user_admin");
    const turn = await runAgentTurn(
      { kernel: ctx },
      { unitId: UNIT_ID, prompt: "Set A1 to agent-write" }
    );
    assert.ok(turn.toolCalls.some((call) => call.tool === "univer.sheet.setRange"));
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "agent-write");
    const reversed = await action.reverseLast();
    assert.equal(reversed, true);
    assert.equal(getSheetCell(collab.getLatestSnapshot(UNIT_ID)!.data, "A1")?.v, "prior");
  });
});
