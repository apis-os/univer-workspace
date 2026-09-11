import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { registerHooks } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadWrangler(): {
  browser?: { binding?: string; remote?: boolean };
  worker_loaders?: Array<{ binding?: string }>;
  assets?: { run_worker_first?: string[] };
} {
  const raw = readFileSync(join(ROOT, "wrangler.jsonc"), "utf8");
  const json = raw.replace(/\/\/.*$/gm, "").replace(/,(\s*[}\]])/g, "$1");
  return JSON.parse(json);
}

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

describe("Cloudflare edge deploy contract", () => {
  test("wrangler binds BROWSER and LOADER and keeps /uf plus /healthz.ai on the Worker", () => {
    const cfg = loadWrangler();
    assert.equal(cfg.browser?.binding, "BROWSER");
    assert.equal(cfg.browser?.remote, true);
    assert.equal(cfg.worker_loaders?.[0]?.binding, "LOADER");
    const runWorkerFirst = cfg.assets?.run_worker_first ?? [];
    for (const path of ["/healthz.ai", "/uf", "/uf/*"]) {
      assert.ok(runWorkerFirst.includes(path), path);
    }

    const serverSrc = readFileSync(join(ROOT, "src/server.ts"), "utf8");
    assert.match(serverSrc, /BROWSER\??:\s*Fetcher/);
    assert.match(serverSrc, /LOADER\??:\s*WorkerLoader/);
  });

  test("GET /healthz.ai.gateway is default and Env.AI is 3-arg", async () => {
    const serverSrc = readFileSync(join(ROOT, "src/server.ts"), "utf8");
    assert.match(serverSrc, /\/healthz\.ai/);
    assert.match(serverSrc, /AI_GATEWAY_ID/);
    assert.match(serverSrc, /from ["']\.\/plugins\/univer-agent\.ts["']/);
    assert.match(
      serverSrc,
      /run:\s*\(\s*model:\s*string,\s*input:\s*unknown,\s*\w+\?:/
    );
    const agentSrc = readFileSync(join(ROOT, "src/plugins/univer-agent.ts"), "utf8");
    assert.match(agentSrc, /AI_GATEWAY_ID = "default"/);
    assert.match(agentSrc, /env\.AI\.run\(\s*model,\s*\{[\s\S]*?},\s*gatewayOptions\(/);
    assert.doesNotMatch(agentSrc, /gpt-oss-120b/);

    const { AI_GATEWAY_ID } = await import("../src/plugins/univer-agent.ts");
    const { default: edge } = await import("../src/server.ts");
    const env = {
      ChatAgent: {
        idFromName: () => ({}),
        get: () => ({ fetch: async () => new Response() })
      },
      WorkspaceDO: {
        idFromName: () => ({}),
        get: () => ({ fetch: async () => new Response() })
      }
    };
    const res = await edge.fetch(new Request("https://workspace.edge/healthz.ai"), env as any, {} as any);
    assert.equal(res.status, 200);
    const body = (await res.json()) as { gateway?: string };
    assert.equal(body.gateway, "default");
    assert.equal(body.gateway, AI_GATEWAY_ID);
  });
});
