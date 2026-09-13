import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { bootKernel } from "../src/kernel/boot.ts";
import type { ActionService } from "../src/kernel/action.ts";
import { getSeedTreeRows } from "../src/kernel/catalog.ts";
import {
  listEnabledPluginTree,
  migratePluginTree,
  seedPluginTree
} from "../src/kernel/tree.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { UniverToolsService } from "../src/plugins/univer-tools.ts";
import { handleAgentHttp } from "../src/plugins/univer-agent.ts";

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("DROP")) {
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

describe("Cordis Microkernel & Cloudflare Durable Object Kernel Boot", () => {
  test("boots Cordis Context from SQLite plugin_tree with active fibers", async () => {
    const sql = createSqliteAdapter();
    const host = {
      name: "test-doc-123",
      env: {},
      sql,
      broadcast: () => {}
    };

    const ctx = await bootKernel({
      sql,
      host,
      env: {}
    });

    assert.ok(ctx, "Context should be created");
    
    // Verify services registered on context
    const collab = ctx.get("collab") as UniverCollabService | undefined;
    assert.ok(collab, "univer-collab service should be available on ctx");

    const worktrees = ctx.get("worktrees") as UniverToolsService | undefined;
    assert.ok(worktrees, "univer-tools (worktrees) service should be available on ctx");

    const action = ctx.get("action");
    assert.ok(action, "action service should be available on ctx");

    // Test Univer Collab operations inside SQLite
    const unit = collab.createUnit("doc_sheet_1", 1, "Financial Model", {
      sheets: { sheet1: { name: "Q1 Projections" } }
    });
    assert.equal(unit.unitId, "doc_sheet_1");
    assert.equal(unit.type, 1);

    const snapshot = collab.getLatestSnapshot("doc_sheet_1");
    assert.ok(snapshot);
    assert.equal(snapshot.data.sheets.sheet1.name, "Q1 Projections");

    // Test Changeset persistence and retrieval
    const changeRes = await collab.applyChangeset({
      id: "cs_1",
      unitId: "doc_sheet_1",
      rev: 1,
      clientId: "client_user_a",
      mutation: { cell: "A1", value: 1000 },
      inverseMutation: { cell: "A1", value: 0 }
    });
    assert.equal(changeRes.success, true);
    assert.equal(changeRes.rev, 1);

    const changes = collab.getChangesetsSince("doc_sheet_1", 0);
    assert.equal(changes.length, 1);
    assert.equal(changes[0].mutation.cell, "A1");
    assert.equal(changes[0].inverseMutation.value, 0);

    // Test Worktree creation and isolated drafting
    const wt = worktrees.createWorktree("wt_draft_1", "Agent Forecast Update", 1, "agent_1");
    assert.equal(wt.id, "wt_draft_1");
    assert.equal(wt.status, "draft");

    worktrees.recordWorktreeChange(
      "chg_1",
      "wt_draft_1",
      "doc_sheet_1",
      { cell: "B2", value: "=SUM(A1:A10)" },
      { cell: "B2", value: null }
    );

    const wtChanges = worktrees.getWorktreeChanges("wt_draft_1");
    assert.equal(wtChanges.length, 1);
    assert.equal(wtChanges[0].mutation.value, "=SUM(A1:A10)");

    await (ctx as any).dispose?.();
  });

  test("backfills univer-file onto a nonempty plugin_tree so getLlmTools and GET /agents see univer_execute", async () => {
    const sql = createSqliteAdapter();
    migratePluginTree(sql);
    const preexisting = getSeedTreeRows().filter(
      (row) => row.id !== "univer-file" && row.name !== "univer-file"
    );
    assert.ok(preexisting.length > 0, "live ChatAgent tree must already have rows");
    seedPluginTree(sql, preexisting);
    assert.equal(
      listEnabledPluginTree(sql).some((row) => row.name === "univer-file"),
      false,
      "preexisting plugin_tree must omit univer-file"
    );

    const ctx = await bootKernel({
      sql,
      host: { name: "univer_collab", env: {}, sql, broadcast: () => {} },
      env: {}
    });

    assert.ok(
      listEnabledPluginTree(sql).some((row) => row.name === "univer-file"),
      "boot must insert missing univer-file seed row"
    );
    const action = ctx.get("action") as ActionService | undefined;
    assert.ok(action, "action service should be available on ctx");
    const toolNames = action.getLlmTools().map((tool) => tool.name);
    assert.ok(toolNames.includes("univer_execute"), "getLlmTools must include univer_execute");

    const res = await handleAgentHttp(new Request("https://workspace.test/agents"), {
      kernel: ctx
    });
    assert.ok(res);
    const body = (await res.json()) as { tools?: Array<{ name?: string }> };
    assert.ok(
      (body.tools ?? []).some((tool) => tool.name === "univer_execute"),
      "GET /agents must list univer_execute after backfill"
    );

    await (ctx as any).dispose?.();
  });
});
