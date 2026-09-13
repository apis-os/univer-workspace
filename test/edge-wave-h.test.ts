import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SMOKE_H = join(ROOT, "scripts/edge-wave-h.mjs");
const SRC = readFileSync(SMOKE_H, "utf8");

const FILE_KEY = "d29ya3NwYWNlLnVuaXZlcg";

function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

describe("edge-wave-h source contract", () => {
  test("asserts /uf execute route", () => {
    assert.match(SRC, /\/uf\/.*\/execute/);
  });

  test("asserts text/event-stream on agent turn", () => {
    assert.match(SRC, /text\/event-stream/);
  });

  test("asserts cliWroteCells parse", () => {
    assert.match(SRC, /cliWroteCells/);
  });

  test("asserts canned explain prompt", () => {
    assert.match(SRC, /Explain the Q3 forecast in one sentence/);
  });

  test("asserts Agent draft Fill worktree", () => {
    assert.match(SRC, /Agent draft Fill/);
  });

  test("asserts KEEP_D3_PROMPT forbids writing cells", () => {
    assert.match(SRC, /Do not write cells/);
  });

  test("asserts edge-wave-h identifier", () => {
    assert.match(SRC, /edge-wave-h/);
  });
});


describe("edge-wave-h smoke assertions", () => {
  test("passes when execute, SSE turn, feed, draft worktree, and inspect succeed", async () => {
    const { runWaveHSmoke } = await import("../scripts/edge-wave-h.mjs");
    const result = await runWaveHSmoke({
      origin: "https://workspace.edge.test",
      fetchImpl: async (input: RequestInfo | URL, init: RequestInit = {}) => {
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
        if (path.includes("/execute") && method === "POST") {
          return json({ success: true, rev: 5 });
        }
        if (path === "/agents/unit_welcome_sheet/turns" && method === "POST") {
          const body = (await request.json().catch(() => ({}))) as { prompt?: string };
          const accept = request.headers.get("Accept") || "";
          if (body.prompt?.includes("Do not write cells")) {
            return json({ turnId: "turn_keep", text: "Avery Chen should keep D3." });
          }
          if (accept.includes("text/event-stream")) {
            return new Response("event: agent.token\ndata: {\"delta\":\"Q3\"}\n\n", {
              status: 200,
              headers: {
                "Content-Type": "text/event-stream",
                "cf-aig-cache-status": "MISS",
              },
            });
          }
          return json({ turnId: "turn_1", text: "Forecast summary" });
        }
        if (path === `/uf/${FILE_KEY}/worktrees` && method === "POST") {
          return json({ id: "wt_draft_wave_h", name: "Agent draft Fill" }, 200);
        }
        if (path === `/uf/${FILE_KEY}/units/unit_welcome_sheet/inspect` && method === "GET") {
          return json({ range: "E2", f: "=SUM(B2:D2)", v: 600, precedents: ["B2", "C2", "D2"] }, 200);
        }
        return json({ error: { message: `unmocked ${method} ${path}` } }, 404);
      },
    });

    assert.equal(result.ok, true);
    assert.equal(result.executeRev, 5);
    assert.equal(result.feedEvent, "cliWroteCells");
    assert.equal(result.draftWorktreeId, "wt_draft_wave_h");
    assert.equal(result.keepTurnStatus, 200);
    assert.ok(result.inspectPrecedents.includes("B2"));
  });

  test("fails when execute fails", async () => {
    const { runWaveHSmoke } = await import("../scripts/edge-wave-h.mjs");
    await assert.rejects(
      () =>
        runWaveHSmoke({
          origin: "https://workspace.edge.test",
          fetchImpl: async (input: RequestInfo | URL, init: RequestInit = {}) => {
            const request = new Request(input, init);
            const path = new URL(request.url).pathname;
            if (path === "/api/auth/password/login") {
              return json(
                { ok: true },
                200,
                { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" }
              );
            }
            return json({ error: "failed" }, 500);
          },
        }),
      /execute returned 500/
    );
  });
});
