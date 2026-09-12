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
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { registerFacadeActions } from "../src/plugins/univer-facade-actions.ts";
import { isQ3FillToolResult, runAgentTurn, type AgentEvent } from "../src/plugins/univer-agent.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DEMO_FILE = "workspace.univer";
const DEMO_UNIT_ID = "unit_welcome_sheet";
const FILL_PROMPT = "Fill E2:E4 with SUM of Jul–Sep";
const FILL_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('E2:E4').setValue({ f: '=SUM(B2:D2)' });";
const INSPECT_E2_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('E2').getValue();";
const PNG_1x1 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

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

async function fillHarness(opts: { browser?: { fetch: typeof fetch } } = {}) {
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
  const fileHost: {
    db: ControlPlaneDb;
    currentUser: typeof user;
    collab: UniverCollabService;
    browser?: { fetch: typeof fetch };
  } = {
    db,
    currentUser: user,
    collab
  };
  if (opts.browser) fileHost.browser = opts.browser;
  ctx.provide("univerFileHttpHost", fileHost);
  registerFacadeActions(ctx);
  const fileMod = await import("../src/plugins/univer-file.ts");
  fileMod.apply(ctx);
  void action;
  return { ctx, fileHost };
}

function toolAi(toolName: string, args: Record<string, unknown>, response = "ok") {
  return {
    run: async (_model: string, input: unknown) => {
      const tools = (input as { tools?: Array<{ function?: { name?: string } }> }).tools;
      if (Array.isArray(tools)) {
        return {
          tool_calls: [
            {
              function: {
                name: toolName,
                arguments: JSON.stringify({
                  file: DEMO_FILE,
                  unitId: DEMO_UNIT_ID,
                  ...args
                })
              }
            }
          ]
        };
      }
      return { response };
    }
  };
}

function fillAi() {
  return toolAi("univer_execute", { code: FILL_CODE }, "Filled E2:E4 with SUM of Jul–Sep.");
}

function createFakeBrowser(opts: { png: string; delay?: Promise<void> }) {
  const cdpMethods: string[] = [];

  function createSocket() {
    const listeners = new Map<string, Array<(event: { data?: string }) => void>>();
    const emit = (id: number, result: Record<string, unknown>) => {
      for (const listener of listeners.get("message") ?? []) {
        listener({ data: JSON.stringify({ id, result }) });
      }
    };
    return {
      accept() {},
      addEventListener(type: string, listener: (event: { data?: string }) => void) {
        const list = listeners.get(type) ?? [];
        list.push(listener);
        listeners.set(type, list);
      },
      send(raw: string) {
        const msg = JSON.parse(raw) as {
          id?: number;
          method?: string;
          params?: Record<string, unknown>;
        };
        const method = msg.method ?? "";
        cdpMethods.push(method);
        const id = msg.id ?? 0;
        if (method === "Target.attachToTarget") {
          queueMicrotask(() => emit(id, { sessionId: "cdp-page" }));
          return;
        }
        if (method === "Page.captureScreenshot") {
          void Promise.resolve(opts.delay).then(() => emit(id, { data: opts.png }));
          return;
        }
        if (method === "Runtime.evaluate") {
          queueMicrotask(() => emit(id, { result: { value: true } }));
          return;
        }
        queueMicrotask(() => emit(id, {}));
      },
      close() {}
    };
  }

  const browser = {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/v1/sessions") && method === "POST") {
        return new Response(
          JSON.stringify({
            sessionId: "mock-session",
            targets: [{ id: "mock-target", type: "page", url: "about:blank" }]
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (url.includes("/cdp")) {
        return { ok: true, webSocket: createSocket() } as unknown as Response;
      }
      if (url.includes("/targets")) {
        return new Response(JSON.stringify([{ id: "mock-target", type: "page" }]), {
          headers: { "Content-Type": "application/json" }
        });
      }
      if (method === "DELETE") return new Response(null, { status: 204 });
      return new Response("not found", { status: 404 });
    }
  };

  return { browser, cdpMethods };
}

function waitFor(
  events: AgentEvent[],
  predicate: (events: AgentEvent[]) => boolean,
  timeoutMs = 2000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      if (predicate(events)) {
        resolve();
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error("timed out waiting for agent events"));
        return;
      }
      setTimeout(tick, 5);
    };
    tick();
  });
}

describe("T17 CF screenshot card after Q3 fill", () => {
  test("schedules waitUntil A1:F12 screenshot via /uf and does not rewrite T13e", () => {
    const agentSrc = readFileSync(join(ROOT, "src/plugins/univer-agent.ts"), "utf8");
    const fileHttpSrc = readFileSync(join(ROOT, "src/integrations/univer-file-http.ts"), "utf8");
    assert.match(agentSrc, /waitUntil/);
    assert.match(agentSrc, /A1:F12/);
    assert.match(agentSrc, /univer\.screenshot/);
    assert.match(fileHttpSrc, /rest === "screenshot"/);
  });

  test("fake BROWSER PNG on Fill E2:E4 attaches screenshot on agent.done without blocking tokens", async () => {
    let release!: () => void;
    const delay = new Promise<void>((resolve) => {
      release = resolve;
    });
    const fake = createFakeBrowser({ png: PNG_1x1, delay });
    const { ctx } = await fillHarness({ browser: fake.browser });
    const waited: Promise<unknown>[] = [];
    const events: AgentEvent[] = [];

    const turnP = runAgentTurn(
      {
        kernel: ctx,
        env: { AI: fillAi() },
        waitUntil: (promise) => {
          waited.push(promise);
        }
      },
      { unitId: DEMO_UNIT_ID, prompt: FILL_PROMPT },
      (event) => events.push(event)
    );

    await waitFor(events, (seen) => seen.some((event) => event.type === "agent.token"));
    assert.ok(
      events.some((event) => event.type === "agent.token"),
      "tokens must stream before the PNG resolves"
    );
    assert.equal(
      events.some((event) => {
        const shot = event.data.screenshot as { data?: string } | undefined;
        return typeof shot?.data === "string" && shot.data.length > 0;
      }),
      false,
      "must not await PNG before streaming tokens"
    );
    assert.ok(waited.length >= 1, "ctx.waitUntil must receive the screenshot job");

    release();
    const turn = await turnP;
    const done = events.filter((event) => event.type === "agent.done").at(-1);
    const screenshot = (turn.screenshot ?? done?.data.screenshot) as
      | { mediaType?: string; data?: string }
      | undefined;
    assert.equal(screenshot?.mediaType, "image/png");
    assert.equal(screenshot?.data, PNG_1x1);
    assert.ok((screenshot?.data?.length ?? 0) > 0);
    assert.ok(fake.cdpMethods.includes("Page.captureScreenshot"));
    assert.ok(
      events.some((event) => event.type === "agent.tool_call_result"),
      "screenshot is scheduled after Fill E2:E4 tool_call_result"
    );
  });

  test("missing BROWSER does not invent PNG pixels and leaves screenshot unavailable", async () => {
    const { ctx } = await fillHarness();
    const waited: Promise<unknown>[] = [];
    const turn = await runAgentTurn(
      {
        kernel: ctx,
        env: { AI: fillAi() },
        waitUntil: (promise) => {
          waited.push(promise);
        }
      },
      { unitId: DEMO_UNIT_ID, prompt: FILL_PROMPT }
    );
    assert.equal(turn.screenshot, null);
    assert.equal(waited.length >= 1, true);
    assert.doesNotMatch(JSON.stringify(turn), /iVBORw0KGgo/);
    const done = turn.events.filter((event) => event.type === "agent.done").at(-1);
    assert.equal(done?.data.screenshot, null);
  });

  test("E2 inspect / single-cell E2 setRange does not schedule A1:F12 screenshot", async () => {
    assert.equal(
      isQ3FillToolResult("univer.execute", { code: INSPECT_E2_CODE }),
      false,
      "inspect getRange('E2') is not Fill E2:E4"
    );
    assert.equal(
      isQ3FillToolResult("univer.sheet.setRange", {
        range: "E2",
        cells: [{ a1: "E2", value: "1" }]
      }),
      false,
      "single-cell E2 setRange is not Fill E2:E4"
    );
    assert.equal(isQ3FillToolResult("univer.execute", { code: FILL_CODE }), true);
    assert.equal(isQ3FillToolResult("univer.sheet.setRange", { range: "E2:E4" }), true);
    assert.equal(
      isQ3FillToolResult("univer.sheet.setRange", {
        cells: [{ a1: "E2" }, { a1: "E3" }, { a1: "E4" }]
      }),
      true,
      "E2+E3+E4 together is Fill E2:E4"
    );

    const { ctx } = await fillHarness();

    const inspectWaited: Promise<unknown>[] = [];
    const inspectTurn = await runAgentTurn(
      {
        kernel: ctx,
        env: { AI: toolAi("univer_execute", { code: INSPECT_E2_CODE }, "E2 is empty.") },
        waitUntil: (promise) => {
          inspectWaited.push(promise);
        }
      },
      { unitId: DEMO_UNIT_ID, prompt: "What is in E2?" }
    );
    assert.ok(
      inspectTurn.toolCalls.some(
        (call) =>
          (call.tool === "univer_execute" || call.tool === "univer.execute") &&
          String((call.args as { code?: unknown }).code ?? "").includes("getRange('E2')")
      ),
      "inspect turn must run univer.execute getRange('E2')"
    );
    assert.equal(inspectWaited.length, 0, "E2 inspect must not schedule A1:F12 screenshot");
    assert.equal(inspectTurn.screenshot, undefined);

    const setWaited: Promise<unknown>[] = [];
    const setTurn = await runAgentTurn(
      {
        kernel: ctx,
        waitUntil: (promise) => {
          setWaited.push(promise);
        }
      },
      { unitId: DEMO_UNIT_ID, prompt: "Set E2 to 1" }
    );
    assert.ok(
      setTurn.toolCalls.some((call) => call.tool === "univer.sheet.setRange"),
      "single-cell turn must run univer.sheet.setRange"
    );
    assert.equal(setWaited.length, 0, "single-cell E2 setRange must not schedule A1:F12 screenshot");
    assert.equal(setTurn.screenshot, undefined);
  });
});
