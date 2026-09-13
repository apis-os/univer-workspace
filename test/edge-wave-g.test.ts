import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SMOKE_G = join(ROOT, "scripts/edge-wave-g.mjs");
const SRC = readFileSync(SMOKE_G, "utf8");

const EXPLAIN = "Explain the Q3 forecast in one sentence";
const FILE_KEY = "d29ya3NwYWNlLnVuaXZlcg";

describe("edge-wave-g source contract", () => {
  test("asserts worktree comb connect upgrade", () => {
    assert.match(SRC, /worktrees\/.*\/comb\/connect/);
    assert.match(SRC, /Upgrade/);
    assert.match(SRC, /101/);
  });

  test("asserts model 70b-fast or llama-3.3-70b", () => {
    assert.match(SRC, /70b-fast|llama-3\.3-70b/);
    assert.match(SRC, /AI_GATEWAY_LIVE_MODELS/);
  });

  test("asserts Agent draft Fill worktree", () => {
    assert.match(SRC, /Agent draft Fill/);
  });

  test("asserts cell_intent eventID", () => {
    assert.match(SRC, /cell_intent/);
    assert.match(SRC, /encodeCellIntentPayload/);
  });
});

describe("edge-wave-g smoke assertions", () => {
  test("passes when worktree comb, Gateway explain, history, and inspect succeed", async () => {
    const { runWaveGSmoke } = await import("../scripts/edge-wave-g.mjs");
    const result = await runWaveGSmoke({
      origin: "https://workspace.edge.test",
      fetchImpl: async (input, init = {}) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;

        if (path === "/api/auth/password/login" && method === "POST") {
          return json(
            { ok: true },
            200,
            { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" }
          );
        }
        if (path === `/uf/${FILE_KEY}/worktrees` && method === "POST") {
          return json({ worktreeId: "wt_draft_test", name: "Agent draft Fill" }, 200);
        }
        if (path === "/universer-api/worktrees/wt_draft_test/comb/connect") {
          return new Response(null, { status: 101, statusText: "Switching Protocols" });
        }
        if (path === "/agents/unit_welcome_sheet/turns" && method === "POST") {
          return json(
            {
              turnId: "turn_explain_wave_g",
              rev: 14,
              model: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
              cache: "MISS",
            },
            200,
            { "cf-aig-cache-status": "MISS" }
          );
        }
        if (path === "/universer-api/history/unit_welcome_sheet/cs" && method === "GET") {
          return json({ changesets: [] }, 200);
        }
        if (path === `/uf/${FILE_KEY}/units/unit_welcome_sheet/inspect` && method === "GET") {
          return json({ range: "E2", f: "=SUM(B2:D2)", v: 600 }, 200);
        }
        return json({ error: { message: `unmocked ${method} ${path}` } }, 404);
      },
    });

    assert.equal(result.ok, true);
    assert.equal(result.combStatus, 101);
    assert.equal(result.model, "@cf/meta/llama-3.3-70b-instruct-fp8-fast");
    assert.equal(result.cache, "MISS");
    assert.equal(result.historyStatus, 200);
    assert.equal(result.inspectF, "=SUM(B2:D2)");
    assert.equal(result.cellIntentEventId, "cell_intent");
  });

  test("fails when draft worktree creation fails", async () => {
    const { runWaveGSmoke } = await import("../scripts/edge-wave-g.mjs");
    await assert.rejects(
      () =>
        runWaveGSmoke({
          origin: "https://workspace.edge.test",
          fetchImpl: async (input, init = {}) => {
            const request = new Request(input, init);
            const path = new URL(request.url).pathname;
            if (path === "/api/auth/password/login") {
              return json({ ok: true }, 200, { "set-cookie": "workspace_session=tok" });
            }
            if (path.includes("/worktrees")) {
              return json({ error: "failed" }, 500);
            }
            return json({}, 200);
          },
        }),
      /Draft worktree create 500/
    );
  });
});

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}
