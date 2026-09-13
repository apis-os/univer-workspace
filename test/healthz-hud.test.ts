import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("cloudflare:")) {
      return {
        url: "data:text/javascript," + encodeURIComponent(`
          export default {};
          export class DurableObject {
            constructor(ctx, env) {
              this.ctx = ctx;
              this.env = env;
            }
          };
          export class WorkerEntrypoint {};
        `),
        shortCircuit: true
      };
    }
    return nextResolve(specifier, context);
  }
});

function stubEnv(extra: Record<string, unknown> = {}) {
  return {
    ChatAgent: {
      idFromName: () => ({}),
      get: () => ({ fetch: async () => new Response() })
    },
    WorkspaceDO: {
      idFromName: () => ({}),
      get: () => ({ fetch: async () => new Response() })
    },
    ...extra
  };
}

describe("GET /healthz ai + browser for the edge HUD", () => {
  test("reports ai and browser ok|off from Worker bindings", async () => {
    const { default: edge } = await import("../src/server.ts");
    const bound = await edge.fetch(
      new Request("https://workspace.edge/healthz"),
      stubEnv({
        AI: { run: async () => ({}) },
        BROWSER: { fetch: async () => new Response("ok") }
      }) as any,
      {} as any
    );
    assert.equal(bound.status, 200);
    const okBody = (await bound.json()) as {
      status?: string;
      ai?: string;
      browser?: string;
    };
    assert.equal(okBody.status, "ok");
    assert.equal(okBody.ai, "ok");
    assert.equal(okBody.browser, "ok");

    const unbound = await edge.fetch(
      new Request("https://workspace.edge/healthz"),
      stubEnv() as any,
      {} as any
    );
    assert.equal(unbound.status, 200);
    const offBody = (await unbound.json()) as { ai?: string; browser?: string };
    assert.equal(offBody.ai, "off");
    assert.equal(offBody.browser, "off");
  });
});
