import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { ActionService } from "../src/kernel/action.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { applySheetCells, registerFacadeActions } from "../src/plugins/univer-facade-actions.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { getSheetCell, a1ToRowCol } from "../src/plugins/univer-snapshot.ts";
import {
  handleAgentHttp,
  handleAgentMuxPrompt,
  muxFrame,
  runAgentTurn
} from "../src/plugins/univer-agent.ts";
import { getAgentSkill, listAgentSkills } from "../src/plugins/univer-skills.ts";
import { ACTOR_HEADER_ID, ACTOR_HEADER_NAME, ACTOR_HEADER_USERNAME } from "../src/control-plane/actor.ts";

const HUMAN_ACTOR = { userId: "user_admin", name: "Avery Chen", username: "admin" };

type AiCall = { model: string; input: any; options?: any };

function encodeSseData(token: string): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify({ response: token })}\n\n`);
}

function mockSseHelLo(): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encodeSseData("Hel"));
      controller.enqueue(encodeSseData("lo"));
      controller.close();
    }
  });
}

function createHarness() {
  const sql = createSqliteAdapter();
  const ctx = new Context();
  ctx.provide("host", { sql });
  const action = new ActionService(ctx, sql);
  const collab = new UniverCollabService(ctx, sql);
  ctx.provide("collab", collab);
  void action;
  registerFacadeActions(ctx);
  return { ctx, collab };
}

function gatewayId(options: any): unknown {
  return options?.gateway?.id;
}

function runHasStream(input: any, options: any): boolean {
  return input?.stream === true || options?.stream === true;
}

function runHasTools(input: any): boolean {
  return Array.isArray(input?.tools);
}

function runMetadata(options: any): Record<string, unknown> {
  return (options?.metadata ?? options?.gateway?.metadata ?? {}) as Record<string, unknown>;
}

function runSkipCache(options: any): unknown {
  return options?.skipCache ?? options?.gateway?.skipCache;
}

function runCacheKey(options: any): unknown {
  return options?.cacheKey ?? options?.gateway?.cacheKey;
}

function runCacheTtl(options: any): unknown {
  return options?.cacheTtl ?? options?.gateway?.cacheTtl;
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

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

describe("Workspace AI collaboration (sdk-skills Facade + Worktree model)", () => {
  test("maps A1 addresses and lists operational Skills from univer-sdk-skills", () => {
    assert.deepEqual(a1ToRowCol("A1"), { row: 0, col: 0 });
    assert.deepEqual(a1ToRowCol("B2"), { row: 1, col: 1 });
    assert.ok(listAgentSkills().some((skill) => skill.id === "sheet"));
    assert.equal(getAgentSkill("collaboration")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("core")?.source, "univer-workspace-cli");
  });

  test("agent turn writes A1 through collab snapshot + changeset + history", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    const result = await runAgentTurn(
      { kernel: ctx },
      { unitId: "unit_welcome_sheet", prompt: "Set A1 to Hello from AI" }
    );

    assert.equal(result.unitId, "unit_welcome_sheet");
    assert.ok(result.rev && result.rev >= 2);
    assert.ok(result.toolCalls.some((call) => call.tool === "univer.sheet.setRange"));
    const snap = collab.getLatestSnapshot("unit_welcome_sheet");
    assert.ok(snap);
    const cell = getSheetCell(snap.data, "A1");
    assert.equal(cell?.v, "Hello from AI");
    const history = collab.listChangesetEntries("unit_welcome_sheet");
    assert.ok(history.length >= 1);
    assert.match(result.text, /Wrote A1=/);
  });

  test("worktree clone isolates a draft snapshot until merge copies it back", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const collab = new UniverCollabService(ctx, sql);
    collab.createUnit("unit_trunk", 2, "Welcome", generateDefaultSnapshot("unit_trunk", 2, "Welcome"));
    applySheetCells(collab, "unit_trunk", [{ a1: "A1", value: "trunk" }]);
    collab.cloneUnit("unit_trunk", "unit_draft", "Draft");
    applySheetCells(collab, "unit_draft", [{ a1: "A1", value: "draft" }]);
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_trunk")!.data, "A1")?.v, "trunk");
    const copied = await collab.copySnapshotTo("unit_draft", "unit_trunk");
    assert.equal(copied.copied, true);
    const trunk = collab.getLatestSnapshot("unit_trunk");
    assert.equal(getSheetCell(trunk!.data, "A1")?.v, "draft");
  });

  test("Workers AI tool_calls record args and Channel 2 frames use ch:2", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    const broadcasts: Array<{ unitId: string; changeset: Record<string, unknown> }> = [];
    const host = {
      kernel: ctx,
      broadcastCollab: (unitId: string, changeset: Record<string, unknown>) => {
        broadcasts.push({ unitId, changeset });
      },
      env: {
        AI: {
          run: async () => ({
            tool_calls: [
              {
                function: {
                  name: "univer_sheet_setRange",
                  arguments: JSON.stringify({
                    unitId: "unit_ai",
                    cells: [{ a1: "B2", value: "from-llm" }]
                  })
                }
              }
            ]
          })
        }
      }
    };

    const result = await runAgentTurn(host, { unitId: "unit_ai", prompt: "Fill the forecast please" });
    assert.ok(result.toolCalls.some((c) => c.tool === "univer.sheet.setRange" || c.tool === "univer_sheet_setRange"));
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_ai")!.data, "B2")?.v, "from-llm");
    assert.ok(broadcasts.some((row) => row.unitId === "unit_ai"));
    const start = result.events.find((e) => e.type === "agent.tool_call_start");
    assert.equal((start?.data.args as any)?.cells?.[0]?.a1, "B2");
    const recorded = result.toolCalls.find(
      (c) => c.tool === "univer.sheet.setRange" || c.tool === "univer_sheet_setRange"
    );
    assert.equal((recorded?.args as any)?.cells?.[0]?.a1, "B2");
    const resultEvent = result.events.find((e) => e.type === "agent.tool_call_result");
    assert.equal((resultEvent?.data.args as any)?.cells?.[0]?.a1, "B2");
    const frame = muxFrame("agent.thinking", { delta: "x" });
    assert.equal(frame.ch, 2);
    assert.equal(frame.channel, 2);
  });

  test("GET /agents/:unitId/turns returns turns actually run in this isolate", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);
    collab.createUnit(
      "unit_turn_log",
      2,
      "Logged",
      generateDefaultSnapshot("unit_turn_log", 2, "Logged")
    );

    const post = await handleAgentHttp(
      new Request("https://workspace.test/agents/unit_turn_log/turns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "Set A1 to logged-turn" })
      }),
      { kernel: ctx }
    );
    assert.ok(post);
    assert.equal(post.status, 200);
    const body = (await post.json()) as { turnId: string; rev: number | null };
    assert.ok(body.turnId);

    const get = await handleAgentHttp(
      new Request("https://workspace.test/agents/unit_turn_log/turns"),
      { kernel: ctx }
    );
    assert.ok(get);
    const listed = (await get.json()) as { items: Array<{ turnId: string; prompt: string }>; nextCursor: null; unitId: string };
    assert.equal(listed.unitId, "unit_turn_log");
    assert.equal(listed.nextCursor, null);
    assert.ok(listed.items.some((item) => item.turnId === body.turnId));
    assert.ok(listed.items.some((item) => item.prompt === "Set A1 to logged-turn"));
  });

  test("POST /agents/:unitId/turns does not createUnit for a missing server unit", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    const res = await handleAgentHttp(
      new Request("https://workspace.test/agents/unit_missing_server/turns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "Set A1 to should-not-create" })
      }),
      { kernel: ctx }
    );
    assert.ok(res);
    assert.equal(res.status, 404);
    assert.equal(collab.getUnit("unit_missing_server"), null);
  });

  test("handleAgentMuxPrompt emits locked Channel 2 types with ch:2", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);
    collab.createUnit("unit_mux", 2, "Mux", generateDefaultSnapshot("unit_mux", 2, "Mux"));

    const sent: string[] = [];
    const ws = { send: (value: string) => sent.push(value) } as unknown as WebSocket;
    await handleAgentMuxPrompt(
      { kernel: ctx },
      ws,
      { type: "agent.prompt", data: { unitId: "unit_mux", prompt: "Set A1 to mux-ok" } },
      "unit_mux"
    );
    assert.ok(sent.length > 0);
    const frames = sent.map((row) => JSON.parse(row) as { ch?: number; channel?: number; type: string });
    assert.ok(frames.every((frame) => frame.ch === 2));
    assert.ok(frames.some((frame) => frame.type === "agent.thinking"));
    assert.ok(frames.some((frame) => frame.type === "agent.tool_call_start"));
    assert.ok(frames.some((frame) => frame.type === "agent.tool_call_result"));
    assert.ok(frames.some((frame) => frame.type === "agent.token"));
    assert.ok(frames.some((frame) => frame.type === "agent.done"));
    assert.ok(!frames.some((frame) => frame.type === "agent.thought"));
  });

  test("ChatAgent fetch mounts handleAgentHttp and Channel 2 mux prompt", () => {
    const src = readFileSync(join(ROOT, "src/project/dsh-host.ts"), "utf8");
    assert.match(src, /handleAgentHttp/);
    assert.match(src, /handleAgentMuxPrompt/);
    assert.match(src, /pathname === "\/agents"/);
    assert.doesNotMatch(src, /type: "agent\.thought"/);
    assert.match(src, /WebSocket upgrade required for Channel 2 agent\.prompt/);
  });

  test("ChatAgent /agents and mux wire broadcastCollab to broadcastAgentCollab", () => {
    const src = readFileSync(join(ROOT, "src/project/dsh-host.ts"), "utf8");
    assert.match(src, /handleAgentHttp/);
    assert.match(src, /handleAgentMuxPrompt/);
    const wires = src.match(
      /broadcastCollab:\s*\(unitId,\s*changeset\)\s*=>\s*this\.broadcastAgentCollab/g
    );
    assert.equal(wires?.length, 2);
  });

  test("gateway forwards GET /agents to the ChatAgent singleton", () => {
    const src = readFileSync(join(ROOT, "src/server.ts"), "utf8");
    assert.match(src, /pathname === "\/agents"/);
    assert.match(src, /idFromName\("univer_collab"\)/);
  });

  test("exports AI Gateway default id and live models without gpt-oss-120b", async () => {
    const agent = await import("../src/plugins/univer-agent.ts");
    assert.equal(agent.AI_GATEWAY_ID, "default");
    assert.deepEqual([...agent.AI_GATEWAY_LIVE_MODELS], [
      "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      "@cf/meta/llama-3.1-8b-instruct"
    ]);
    assert.ok(!agent.AI_GATEWAY_LIVE_MODELS.includes("@cf/openai/gpt-oss-120b" as never));
    const src = readFileSync(join(ROOT, "src/plugins/univer-agent.ts"), "utf8");
    assert.doesNotMatch(src, /gpt-oss-120b/);
  });

  test("Workers AI runs through gateway default; tools write; final stream has no tools", async () => {
    const { ctx, collab } = createHarness();
    const calls: AiCall[] = [];
    const broadcasts: Array<{ unitId: string; changeset: Record<string, unknown> }> = [];
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      broadcastCollab: (unitId: string, changeset: Record<string, unknown>) => {
        broadcasts.push({ unitId, changeset });
      },
      env: {
        AI: {
          aiGatewayLogId: null as string | null,
          run: async (model: string, input: unknown, options?: any) => {
            calls.push({ model, input, options });
            (host.env.AI as any).aiGatewayLogId = "aig_tool_turn";
            if (runHasStream(input, options)) {
              assert.equal(runHasTools(input), false);
              return mockSseHelLo();
            }
            return {
              tool_calls: [
                {
                  function: {
                    name: "univer_sheet_setRange",
                    arguments: JSON.stringify({
                      unitId: "unit_gateway",
                      cells: [{ a1: "B2", value: "from-llm" }]
                    })
                  }
                }
              ]
            };
          }
        }
      }
    };

    const result = await runAgentTurn(host, { unitId: "unit_gateway", prompt: "Fill the forecast please" });
    assert.ok(calls.length >= 2, "tool loop then final text run");
    for (const call of calls) {
      assert.equal(gatewayId(call.options), "default");
      assert.ok(!call.model.includes("gpt-oss-120b"));
      const meta = runMetadata(call.options);
      assert.equal(Object.keys(meta).length <= 5, true);
      assert.deepEqual(Object.keys(meta).sort(), ["actorUserId", "product", "step", "turnId", "unitId"]);
      assert.equal(meta.product, "univer-workspace");
      assert.equal(meta.unitId, "unit_gateway");
      assert.equal(meta.actorUserId, HUMAN_ACTOR.userId);
      assert.notEqual(meta.actorUserId, "agent_workspace");
      if (runHasStream(call.input, call.options) && runHasTools(call.input)) {
        assert.fail("never stream:true and tools in the same run");
      }
    }

    const toolRun = calls.find((call) => runHasTools(call.input) && !runHasStream(call.input, call.options));
    assert.ok(toolRun, "tools loop must send tools without stream");
    assert.equal(runSkipCache(toolRun.options), true);
    assert.equal(runMetadata(toolRun.options).step, "tool");
    assert.equal(toolRun.options.stream, false);

    const finalRun = calls.find((call) => runHasStream(call.input, call.options));
    assert.ok(finalRun, "final run must stream");
    assert.equal(finalRun.options.stream, true);
    assert.equal(runHasTools(finalRun.input), false);
    assert.equal(runMetadata(finalRun.options).step, "text");

    assert.ok(result.toolCalls.some((c) => c.tool === "univer.sheet.setRange" || c.tool === "univer_sheet_setRange"));
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_gateway")!.data, "B2")?.v, "from-llm");
    assert.ok(broadcasts.some((row) => row.unitId === "unit_gateway"));
    const tokens = result.events.filter((e) => e.type === "agent.token").map((e) => e.data.delta);
    assert.deepEqual(tokens, ["Hel", "lo"]);
    const done = result.events.find((e) => e.type === "agent.done");
    assert.equal(done?.data.aiGatewayLogId, "aig_tool_turn");
  });

  test("explain Q3 uses skipCache false and cacheKey demo:explain-q3", async () => {
    const { ctx } = createHarness();
    const calls: AiCall[] = [];
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      env: {
        AI: {
          aiGatewayLogId: null as string | null,
          run: async (model: string, input: unknown, options?: any) => {
            calls.push({ model, input, options });
            (host.env.AI as any).aiGatewayLogId = "aig_explain";
            if (runHasTools(input)) {
              return { response: "" };
            }
            return { response: "Hello" };
          }
        }
      }
    };

    const result = await runAgentTurn(host, {
      unitId: "unit_explain",
      prompt: "Explain the Q3 forecast in one sentence"
    });
    assert.ok(calls.every((call) => !runHasTools(call.input)), "cached explain must skip the tool loop");
    const finalRun = calls[0];
    assert.ok(finalRun);
    assert.equal(calls.length, 1);
    assert.equal(runHasStream(finalRun.input, finalRun.options), false);
    assert.equal(runSkipCache(finalRun.options), false);
    assert.equal(runCacheKey(finalRun.options), "demo:explain-q3:t9-ready");
    assert.equal(runCacheTtl(finalRun.options), 3600);
    assert.equal(finalRun.options.extraHeaders?.["cf-aig-cache-key"], "demo:explain-q3:t9-ready");
    assert.equal(finalRun.options.gateway?.collectLog, true);
    assert.equal(finalRun.options.extraHeaders?.["cf-aig-skip-cache"], undefined);
    assert.equal(runMetadata(finalRun.options).step, "explain");
    assert.equal(result.text, "Hello");
    assert.equal(result.events.find((e) => e.type === "agent.done")?.data.aiGatewayLogId, "aig_explain");

    calls.length = 0;
    await runAgentTurn(host, { unitId: "unit_explain", prompt: "Explain the full sheet in one sentence" });
    assert.ok(calls.every((call) => !runHasTools(call.input)), "canned explain must skip the tool loop");
    const canned = calls[0];
    assert.ok(canned);
    assert.equal(calls.length, 1);
    assert.equal(runHasStream(canned.input, canned.options), false);
    assert.equal(runSkipCache(canned.options), false);
    assert.equal(runCacheKey(canned.options), "demo:explain-q3:t9-ready");
    assert.equal(runMetadata(canned.options).step, "explain");
  });

  test("explain turn forwards cf-aig-cache-status onto the JSON body", async () => {
    const { ctx } = createHarness();
    let explainCalls = 0;
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      env: {
        AI: {
          aiGatewayLogId: "aig_explain_cache",
          run: async (_model: string, input: unknown, options?: any) => {
            if (runHasTools(input)) return { response: "" };
            explainCalls += 1;
            const cache = explainCalls === 1 ? "MISS" : "HIT";
            return new Response(JSON.stringify({ response: "Q3 holds." }), {
              headers: {
                "content-type": "application/json",
                "cf-aig-cache-status": cache
              }
            });
          }
        }
      }
    };
    const first = await runAgentTurn(host, {
      unitId: "unit_explain_cache",
      prompt: "Explain the Q3 forecast in one sentence"
    });
    assert.equal(first.cache, "MISS");
    const firstDone = first.events.find((e) => e.type === "agent.done")?.data;
    assert.equal(firstDone?.cache, "MISS");
    assert.equal(firstDone?.model, "@cf/meta/llama-3.3-70b-instruct-fp8-fast");
    assert.equal(firstDone?.aiGatewayLogId, "aig_explain_cache");
    assert.equal(firstDone?.cacheKey, "demo:explain-q3:t9-ready");
    assert.equal(typeof firstDone?.elapsedMs, "number");
    const second = await runAgentTurn(host, {
      unitId: "unit_explain_cache",
      prompt: "Explain the Q3 forecast in one sentence"
    });
    assert.equal(second.cache, "HIT");
    assert.equal(second.events.find((e) => e.type === "agent.done")?.data.cache, "HIT");
  });

  test("Accept text/event-stream writes immediately; JSON remains the default", async () => {
    const { ctx, collab } = createHarness();
    collab.createUnit("unit_sse", 2, "SSE", generateDefaultSnapshot("unit_sse", 2, "SSE"));
    let release!: (value: ReadableStream<Uint8Array>) => void;
    const blocked = new Promise<ReadableStream<Uint8Array>>((resolve) => {
      release = resolve;
    });
    let runStarted = false;
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      env: {
        AI: {
          run: async (_model: string, input: unknown, options?: any) => {
            runStarted = true;
            if (runHasStream(input, options)) {
              return blocked;
            }
            return { response: "" };
          }
        }
      }
    };

    const ssePromise = handleAgentHttp(
      new Request("https://workspace.test/agents/unit_sse/turns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          [ACTOR_HEADER_ID]: HUMAN_ACTOR.userId,
          [ACTOR_HEADER_NAME]: HUMAN_ACTOR.name,
          [ACTOR_HEADER_USERNAME]: HUMAN_ACTOR.username
        },
        body: JSON.stringify({ prompt: "Fill the forecast please" })
      }),
      host
    );

    const raced = await Promise.race([
      ssePromise.then((res) => ({ kind: "response" as const, res })),
      new Promise<{ kind: "timeout" }>((resolve) => {
        setTimeout(() => resolve({ kind: "timeout" }), 150);
      })
    ]);
    assert.equal(raced.kind, "response");
    if (raced.kind !== "response" || !raced.res) {
      throw new Error("SSE response was not returned immediately");
    }
    assert.match(String(raced.res.headers.get("content-type")), /text\/event-stream/);
    const reader = raced.res.body!.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    const deadline = Date.now() + 500;
    while (Date.now() < deadline && !buf.includes("agent.thinking")) {
      const next = await Promise.race([
        reader.read(),
        new Promise<{ done: true; value: undefined }>((resolve) => {
          setTimeout(() => resolve({ done: true, value: undefined }), 50);
        })
      ]);
      if (next.value) buf += decoder.decode(next.value, { stream: true });
    }
    assert.match(buf, /agent\.thinking/);
    assert.equal(runStarted, true);
    release(mockSseHelLo());
    while (true) {
      const next = await reader.read();
      if (next.done) break;
    }

    const jsonRes = await handleAgentHttp(
      new Request("https://workspace.test/agents/unit_sse/turns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          [ACTOR_HEADER_ID]: HUMAN_ACTOR.userId,
          [ACTOR_HEADER_NAME]: HUMAN_ACTOR.name
        },
        body: JSON.stringify({ prompt: "Set A1 to json-default" })
      }),
      { kernel: ctx, actor: HUMAN_ACTOR }
    );
    assert.ok(jsonRes);
    assert.match(String(jsonRes.headers.get("content-type")), /application\/json/);
    const body = (await jsonRes.json()) as { text: string; events: Array<{ type: string }> };
    assert.match(body.text, /Wrote A1=/);
    assert.ok(Array.isArray(body.events));
  });

  test("muxFrame is sent per emit while the turn is still running", async () => {
    const { ctx, collab } = createHarness();
    collab.createUnit("unit_live_mux", 2, "Mux", generateDefaultSnapshot("unit_live_mux", 2, "Mux"));
    const sent: string[] = [];
    const ws = { send: (value: string) => sent.push(value) } as unknown as WebSocket;
    let framesDuringRun: Array<{ ch?: number; channel?: number; type: string }> = [];
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      env: {
        AI: {
          run: async (_model: string, input: unknown, options?: any) => {
            framesDuringRun = sent.map((row) => JSON.parse(row));
            if (runHasStream(input, options)) return mockSseHelLo();
            return { response: "Hello" };
          }
        }
      }
    };

    await handleAgentMuxPrompt(
      host,
      ws,
      { type: "agent.prompt", data: { unitId: "unit_live_mux", prompt: "Explain the Q3 forecast in one sentence" } },
      "unit_live_mux"
    );
    assert.ok(
      framesDuringRun.some((frame) => frame.type === "agent.thinking"),
      "thinking must be mux-sent before AI.run returns"
    );
    assert.ok(framesDuringRun.every((frame) => frame.ch === 2 && frame.channel === 2));
    const frames = sent.map((row) => JSON.parse(row) as { ch?: number; channel?: number; type: string; data?: unknown });
    assert.ok(frames.every((frame) => frame.ch === 2 && frame.channel === 2));
    assert.ok(frames.some((frame) => frame.type === "agent.token"));
    assert.ok(frames.some((frame) => frame.type === "agent.done"));
    const tokenDeltas = frames.filter((frame) => frame.type === "agent.token").map((frame) => (frame as any).data?.delta);
    assert.deepEqual(tokenDeltas, ["Hello"]);
  });

  test("one in-flight turn per unitId emits Agent is busy", async () => {
    const { ctx } = createHarness();
    let release!: () => void;
    const blocked = new Promise<ReadableStream<Uint8Array>>((resolve) => {
      release = () => resolve(mockSseHelLo());
    });
    let firstEntered = false;
    const host = {
      kernel: ctx,
      actor: HUMAN_ACTOR,
      env: {
        AI: {
          run: async (_model: string, input: unknown, options?: any) => {
            firstEntered = true;
            if (runHasStream(input, options)) return blocked;
            return { response: "" };
          }
        }
      }
    };

    const first = runAgentTurn(host, { unitId: "unit_busy", prompt: "Explain the Q3 forecast in one sentence" });
    const waitStart = Date.now();
    while (!firstEntered && Date.now() - waitStart < 500) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    assert.equal(firstEntered, true);
    const busy = await runAgentTurn(host, { unitId: "unit_busy", prompt: "Explain the Q3 forecast in one sentence" });
    const error = busy.events.find((e) => e.type === "agent.error");
    assert.equal(error?.data.message, "Agent is busy");
    release();
    const completed = await first;
    assert.ok(completed.events.some((e) => e.type === "agent.done"));
  });
});
