import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SMOKE = join(ROOT, "scripts/edge-smoke.mjs");
const SRC = readFileSync(SMOKE, "utf8");

const EXPLAIN = "Explain the Q3 forecast in one sentence";
const FILE_KEY = "d29ya3NwYWNlLnVuaXZlcg";

describe("edge-smoke T9 source contract", () => {
  test("asserts healthz.ai.gateway === default", () => {
    assert.match(SRC, /\/healthz\.ai/);
    assert.match(SRC, /gateway/);
    assert.match(SRC, /["']default["']/);
  });

  test("asserts healthz.browser is bound", () => {
    assert.match(SRC, /\/healthz(?!\.ai)/);
    assert.match(SRC, /\.browser/);
  });

  test("asserts Avery turn rev", () => {
    assert.match(SRC, /unit_welcome_sheet/);
    assert.match(SRC, /\/agents\/\$\{DEMO_UNIT_ID\}\/turns/);
    assert.match(SRC, /\.rev/);
    assert.match(SRC, /admin/);
  });

  test("asserts Explain MISS then HIT", () => {
    assert.match(SRC, new RegExp(EXPLAIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(SRC, /MISS/);
    assert.match(SRC, /HIT/);
    assert.match(SRC, /explainCacheOk/);
  });

  test("asserts /uf inspect and screenshot 200", () => {
    assert.match(SRC, /\/uf\//);
    assert.match(SRC, /inspect/);
    assert.match(SRC, /screenshot/);
  });
});

describe("edge-smoke T9 cache lookup", () => {
  test("maps AI Gateway cached booleans and 0/1", async () => {
    const { cacheFlag } = await import("../scripts/edge-smoke.mjs");
    assert.equal(cacheFlag(true), "HIT");
    assert.equal(cacheFlag(false), "MISS");
    assert.equal(cacheFlag(1), "HIT");
    assert.equal(cacheFlag(0), "MISS");
  });

  test("accepts MISS then HIT or warm HIT then HIT", async () => {
    const { explainCacheOk } = await import("../scripts/edge-smoke.mjs");
    assert.equal(explainCacheOk("MISS", "HIT"), true);
    assert.equal(explainCacheOk("HIT", "HIT"), true);
    assert.equal(explainCacheOk("MISS", "MISS"), false);
    assert.equal(explainCacheOk(null, "HIT"), false);
  });

  test("looks up MISS then HIT from aiGatewayLogId when turn omits cache headers", async () => {
    const { runEdgeSmoke } = await import("../scripts/edge-smoke.mjs");
    let explainCalls = 0;
    const result = await runEdgeSmoke({
      origin: "https://workspace.edge.test",
      lookupGatewayCache: async (logId) => (String(logId).includes("miss") ? "MISS" : "HIT"),
      fetchImpl: async (input, init = {}) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;
        if (path === "/healthz") {
          return json({ status: "ok", edge: "cloudflare-workers", ai: "ok", browser: "ok" });
        }
        if (path === "/healthz.ai") {
          return json({ status: "ok", gateway: "default" });
        }
        if (path === "/api/auth/password/login" && method === "POST") {
          return json({ ok: true }, 200, { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" });
        }
        if (path === "/agents/unit_welcome_sheet/turns" && method === "POST") {
          const body = (await request.json()) as { prompt?: string };
          if (body.prompt === EXPLAIN) {
            explainCalls += 1;
            const logId = explainCalls === 1 ? "log_miss" : "log_hit";
            return json({
              turnId: `turn_explain_${explainCalls}`,
              rev: 12,
              events: [{ type: "agent.done", data: { aiGatewayLogId: logId } }]
            });
          }
          return json({ turnId: "turn_avery", rev: 11, prompt: body.prompt });
        }
        if (path === `/uf/${FILE_KEY}` && method === "POST") {
          return json({ success: true, fileKey: FILE_KEY });
        }
        if (path === `/uf/${FILE_KEY}/units/unit_welcome_sheet/inspect` && method === "GET") {
          return json({ range: "E2", f: "=SUM(B2:D2)", v: 600 });
        }
        if (path === `/uf/${FILE_KEY}/screenshot` && method === "POST") {
          return json({ images: [{ mediaType: "image/png", data: "iVBORw0KGgo", width: 1, height: 1 }] });
        }
        return json({ error: { message: `unmocked ${method} ${path}` } }, 404);
      }
    });
    assert.deepEqual(result.explain, { miss: "MISS", hit: "HIT" });
  });
});

describe("edge-smoke T9 assertions", () => {
  test("fails when gateway, browser, rev, cache, or /uf are missing", async () => {
    const { runEdgeSmoke } = await import("../scripts/edge-smoke.mjs");
    await assert.rejects(
      () =>
        runEdgeSmoke({
          origin: "https://workspace.edge.test",
          fetchImpl: async (input) => {
            const url = String(input);
            return json(url.includes("healthz") ? { status: "ok" } : {});
          }
        }),
      /healthz\.ai|gateway|browser/
    );
  });

  test("passes when gateway, browser, Avery rev, Explain MISS then HIT, and /uf 200", async () => {
    const { runEdgeSmoke } = await import("../scripts/edge-smoke.mjs");
    let explainCalls = 0;
    const result = await runEdgeSmoke({
      origin: "https://workspace.edge.test",
      fetchImpl: async (input, init = {}) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;
        if (path === "/healthz") {
          return json({ status: "ok", edge: "cloudflare-workers", ai: "ok", browser: "ok" });
        }
        if (path === "/healthz.ai") {
          return json({ status: "ok", gateway: "default" });
        }
        if (path === "/api/auth/password/login" && method === "POST") {
          return json(
            { ok: true },
            200,
            { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" }
          );
        }
        if (path === "/agents/unit_welcome_sheet/turns" && method === "POST") {
          const body = (await request.json()) as { prompt?: string };
          if (body.prompt === EXPLAIN) {
            explainCalls += 1;
            const cache = explainCalls === 1 ? "MISS" : "HIT";
            return json(
              { turnId: `turn_explain_${explainCalls}`, rev: 12, cache, prompt: body.prompt },
              200,
              { "cf-aig-cache-status": cache }
            );
          }
          return json({ turnId: "turn_avery", rev: 11, prompt: body.prompt });
        }
        if (path === `/uf/${FILE_KEY}` && method === "POST") {
          return json({ success: true, fileKey: FILE_KEY });
        }
        if (path === `/uf/${FILE_KEY}/units/unit_welcome_sheet/inspect` && method === "GET") {
          return json({ range: "E2", f: "=SUM(B2:D2)", v: 600 });
        }
        if (path === `/uf/${FILE_KEY}/screenshot` && method === "POST") {
          return json({ images: [{ mediaType: "image/png", data: "iVBORw0KGgo", width: 1, height: 1 }] });
        }
        return json({ error: { message: `unmocked ${method} ${path}` } }, 404);
      }
    });
    assert.equal(result.ok, true);
    assert.equal(result.healthzAi.gateway, "default");
    assert.equal(result.healthz.browser, "ok");
    assert.ok(result.turn.rev);
    assert.deepEqual(result.explain, { miss: "MISS", hit: "HIT" });
    assert.equal(result.inspect.status, 200);
    assert.equal(result.screenshot.status, 200);
  });

  test("passes when first Explain is already HIT and second is HIT", async () => {
    const { runEdgeSmoke } = await import("../scripts/edge-smoke.mjs");
    let explainCalls = 0;
    const result = await runEdgeSmoke({
      origin: "https://workspace.edge.test",
      fetchImpl: async (input, init = {}) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;
        if (path === "/healthz") {
          return json({ status: "ok", edge: "cloudflare-workers", ai: "ok", browser: "ok" });
        }
        if (path === "/healthz.ai") {
          return json({ status: "ok", gateway: "default" });
        }
        if (path === "/api/auth/password/login" && method === "POST") {
          return json({ ok: true }, 200, { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" });
        }
        if (path === "/agents/unit_welcome_sheet/turns" && method === "POST") {
          const body = (await request.json()) as { prompt?: string };
          if (body.prompt === EXPLAIN) {
            explainCalls += 1;
            return json(
              { turnId: `turn_explain_${explainCalls}`, rev: 12, cache: "HIT", prompt: body.prompt },
              200,
              { "cf-aig-cache-status": "HIT" }
            );
          }
          return json({ turnId: "turn_avery", rev: 11, prompt: body.prompt });
        }
        if (path === `/uf/${FILE_KEY}` && method === "POST") {
          return json({ success: true, fileKey: FILE_KEY });
        }
        if (path === `/uf/${FILE_KEY}/units/unit_welcome_sheet/inspect` && method === "GET") {
          return json({ range: "E2", f: "=SUM(B2:D2)", v: 600 });
        }
        if (path === `/uf/${FILE_KEY}/screenshot` && method === "POST") {
          return json({ images: [{ mediaType: "image/png", data: "iVBORw0KGgo", width: 1, height: 1 }] });
        }
        return json({ error: { message: `unmocked ${method} ${path}` } }, 404);
      }
    });
    assert.equal(result.ok, true);
    assert.deepEqual(result.explain, { miss: "HIT", hit: "HIT" });
  });
});

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers }
  });
}
