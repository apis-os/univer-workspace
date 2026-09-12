import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import { createMockD1 } from "./mock-d1.ts";
import { seedControlPlane } from "../src/control-plane/schema.ts";
import { ControlPlaneDb } from "../src/control-plane/db.ts";
import type { SqlExec } from "../src/kernel/sql.ts";
import { ActionService } from "../src/kernel/action.ts";
import { getSeedTreeRows, PLUGIN_CATALOG } from "../src/kernel/catalog.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { registerFacadeActions } from "../src/plugins/univer-facade-actions.ts";
import { handleAgentHttp, runAgentTurn } from "../src/plugins/univer-agent.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DEMO_FILE = "workspace.univer";
const DEMO_UNIT_ID = "unit_welcome_sheet";
const EXECUTE_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('E2').setValue({ f: '=SUM(B2:D2)' });";

const OFFICE_TOOL_NAMES = [
  "univer_execute",
  "univer_inspect",
  "univer_screenshot",
  "univer_import",
  "univer_export",
  "univer_lint",
  "univer_print_pdf",
  "univer_compile_svg",
  "univer_worktree",
  "univer_unit"
] as const;

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

function createFakeLoader() {
  const loader = {
    get(_name: string | null, getCode: () => unknown) {
      const spec = getCode() as { modules?: Record<string, string> };
      const source = spec?.modules?.["execute.js"] ?? "";
      return {
        fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
          const url = "data:text/javascript," + encodeURIComponent(source);
          const mod = (await import(url)) as { default: { fetch: (request: Request) => Promise<Response> } };
          const req = input instanceof Request ? input : new Request(input, init);
          return mod.default.fetch(req);
        }
      };
    }
  };
  return { loader };
}

async function officeHarness(opts: { loader?: boolean } = {}) {
  const d1 = createMockD1();
  await seedControlPlane(d1);
  const db = new ControlPlaneDb(d1);
  const user = await db.getUserById("user_admin");
  assert.ok(user);
  const sql = createSqliteAdapter();
  const ctx = new Context();
  ctx.provide("host", { sql, env: {} });
  const action = new ActionService(ctx, sql);
  const collab = new UniverCollabService(ctx, sql);
  ctx.provide("collab", collab);
  const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
  collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
  const fileHost = {
    db,
    currentUser: user,
    collab,
    loader: opts.loader === false ? undefined : createFakeLoader().loader
  };
  ctx.provide("univerFileHttpHost", fileHost);
  void action;
  return { ctx, action, collab, db, user, fileHost };
}

async function applyOfficeTools(ctx: Context): Promise<void> {
  const mod = await import("../src/plugins/univer-file.ts");
  mod.apply(ctx);
}

describe("Cordis univer-file catalog plugin", () => {
  test("seeds univer-file and loads src/plugins/univer-file.ts", () => {
    const row = PLUGIN_CATALOG.find((entry) => entry.id === "univer-file" || entry.name === "univer-file");
    assert.ok(row, "catalog must include univer-file");
    assert.equal(row?.isSeed, true);
    assert.equal(row?.category, "tools");
    assert.ok(getSeedTreeRows().some((seed) => seed.name === "univer-file"));
    const catalogSrc = readFileSync(join(ROOT, "src/kernel/catalog.ts"), "utf8");
    assert.match(catalogSrc, /id:\s*"univer-file"/);
    assert.match(catalogSrc, /import\(["']\.\.\/plugins\/univer-file\.ts["']\)/);
  });
});

describe("Cordis univer_* office tools", () => {
  test("registers the wax-office univer_* names the model sees", async () => {
    const { ctx, action } = await officeHarness();
    await applyOfficeTools(ctx);
    const names = action.getLlmTools().map((tool) => tool.name);
    for (const name of OFFICE_TOOL_NAMES) {
      assert.ok(names.includes(name), `missing LLM tool ${name}`);
    }
  });

  test("univer_execute sets executeAsAgent so OT memberId is agent_workspace", async () => {
    const { ctx, action, collab, fileHost } = await officeHarness();
    await applyOfficeTools(ctx);
    assert.notEqual(fileHost.executeAsAgent, true);

    const result = (await action.execute(
      "univer.execute",
      {
        file: DEMO_FILE,
        unitId: DEMO_UNIT_ID,
        code: EXECUTE_CODE
      },
      { userId: "user_admin", unitId: DEMO_UNIT_ID }
    )) as { success?: boolean; error?: unknown };

    assert.equal((result as { error?: unknown }).error, undefined, JSON.stringify(result));
    assert.equal((result as { success?: boolean }).success, true);
    const entries = collab.listChangesetEntries(DEMO_UNIT_ID);
    assert.ok(entries.length > 0);
    const last = entries[entries.length - 1];
    assert.equal(last.changeset.memberID, "agent_workspace");
  });

  test("univer_inspect wraps /uf inspect for workspace.univer", async () => {
    const { ctx, action } = await officeHarness({ loader: false });
    await applyOfficeTools(ctx);
    const result = (await action.execute("univer.inspect", {
      file: DEMO_FILE,
      unitId: DEMO_UNIT_ID,
      range: "A1"
    })) as { range?: string; cells?: unknown };
    assert.equal(result.range, "A1");
    assert.ok(Array.isArray(result.cells));
  });

  test("univer_worktree create aliases /uf worktrees", async () => {
    const { ctx, action } = await officeHarness({ loader: false });
    await applyOfficeTools(ctx);
    const result = (await action.execute("univer.worktree", {
      action: "create",
      file: DEMO_FILE,
      name: "Agent draft"
    })) as { id?: string; worktree?: { id?: string } };
    const worktreeId = result.worktree?.id || result.id;
    assert.ok(worktreeId);
  });

  test("plugin wraps /uf handlers and does not steal screenshot or Node exchange bindings", () => {
    const src = readFileSync(join(ROOT, "src/plugins/univer-file.ts"), "utf8");
    assert.match(src, /handleUniverFileHttp/);
    assert.match(src, /fileKeyOf\(\s*["']workspace\.univer["']\s*\)/);
    assert.match(src, /executeAsAgent:\s*true/);
    assert.doesNotMatch(src, /x-univer-invoker/);
    assert.doesNotMatch(src, /exchange-node-binding/);
    assert.doesNotMatch(src, /collaboration-transport-node/);
    assert.doesNotMatch(src, /capturePng/);
  });
});

describe("Agent turns may call univer_execute", () => {
  test("gateway tool loop can emit univer_execute; Set A1 regex remains fallback", async () => {
    const { ctx, collab } = await officeHarness();
    registerFacadeActions(ctx);
    await applyOfficeTools(ctx);

    const toolTurn = await runAgentTurn(
      {
        kernel: ctx,
        env: {
          AI: {
            run: async (_model: string, input: unknown) => {
              const tools = (input as { tools?: Array<{ function?: { name?: string } }> }).tools;
              if (Array.isArray(tools)) {
                assert.ok(
                  tools.some((tool) => tool.function?.name === "univer_execute"),
                  "gateway tool loop must offer univer_execute"
                );
                return {
                  tool_calls: [
                    {
                      function: {
                        name: "univer_execute",
                        arguments: JSON.stringify({
                          file: DEMO_FILE,
                          unitId: DEMO_UNIT_ID,
                          code: EXECUTE_CODE
                        })
                      }
                    }
                  ]
                };
              }
              return { response: "Filled E2 via univer_execute." };
            }
          }
        }
      },
      { unitId: DEMO_UNIT_ID, prompt: "Fill the Q3 forecast SUM in E2" }
    );
    assert.ok(
      toolTurn.toolCalls.some((call) => call.tool === "univer_execute" || call.tool === "univer.execute")
    );
    const executed = collab.listChangesetEntries(DEMO_UNIT_ID).at(-1);
    assert.equal(executed?.changeset.memberID, "agent_workspace");

    const regexTurn = await runAgentTurn(
      { kernel: ctx },
      { unitId: DEMO_UNIT_ID, prompt: "Set A1 to Hello from AI" }
    );
    assert.ok(regexTurn.toolCalls.some((call) => call.tool === "univer.sheet.setRange"));
    assert.match(regexTurn.text, /Wrote A1=/);
  });

  test("GET /agents lists univer_execute for the model", async () => {
    const { ctx } = await officeHarness({ loader: false });
    registerFacadeActions(ctx);
    await applyOfficeTools(ctx);
    const res = await handleAgentHttp(new Request("https://workspace.test/agents"), {
      kernel: ctx
    });
    assert.ok(res);
    const body = (await res.json()) as { tools?: Array<{ name?: string }> };
    const names = (body.tools ?? []).map((tool) => tool.name);
    assert.ok(names.includes("univer_execute"));
  });
});
