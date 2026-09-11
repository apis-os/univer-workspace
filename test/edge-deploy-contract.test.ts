import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { registerHooks } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

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

function loadWrangler(): any {
  const raw = readFileSync(join(ROOT, "wrangler.jsonc"), "utf8");
  const json = raw.replace(/\/\/.*$/gm, "").replace(/,(\s*[}\]])/g, "$1");
  return JSON.parse(json);
}

describe("Cloudflare edge deploy contract", () => {
  test("wrangler.jsonc keeps D1, R2, AI, DO, and agent routes", () => {
    const cfg = loadWrangler();
    assert.equal(cfg.name, "univer-workspace");
    assert.equal(cfg.main, "src/server.ts");
    assert.equal(cfg.compatibility_date, "2026-07-29");
    assert.deepEqual(cfg.compatibility_flags, ["nodejs_compat"]);
    assert.equal(cfg.assets.directory, "./apps/workspace/dist/public");
    assert.equal(cfg.assets.not_found_handling, "single-page-application");
    for (const path of ["/agents", "/agents/*", "/api", "/api/*", "/universer-api/*", "/auth/*", "/healthz", "/spaces/*"]) {
      assert.ok(cfg.assets.run_worker_first.includes(path), path);
    }
    assert.equal(cfg.d1_databases[0].binding, "DB");
    assert.equal(cfg.d1_databases[0].database_id, "6dafe15b-fb54-4ef1-99ad-6b4c09be3d19");
    assert.equal(cfg.r2_buckets[0].binding, "BLOB_BUCKET");
    assert.equal(cfg.r2_buckets[0].bucket_name, "univer-workspace-blobs");
    assert.equal(cfg.ai.binding, "AI");
    assert.equal(cfg.durable_objects.bindings[0].class_name, "ChatAgent");
    assert.equal(cfg.durable_objects.bindings[1].class_name, "WorkspaceDO");
  });

  test("GET /healthz.ai.gateway is default and Env.AI is 3-arg", async () => {
    const serverSrc = readFileSync(join(ROOT, "src/server.ts"), "utf8");
    assert.match(serverSrc, /\/healthz\.ai/);
    assert.match(
      serverSrc,
      /run:\s*\(\s*model:\s*string,\s*input:\s*unknown,\s*\w+\?:/
    );
    const agentSrc = readFileSync(join(ROOT, "src/plugins/univer-agent.ts"), "utf8");
    assert.match(agentSrc, /AI_GATEWAY_ID = "default"/);
    assert.doesNotMatch(agentSrc, /gpt-oss-120b/);

    const { default: worker } = await import("../src/server.ts");
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
    const res = await worker.fetch(new Request("https://workspace.edge/healthz.ai"), env as any, {} as any);
    assert.equal(res.status, 200);
    const body = (await res.json()) as { gateway?: string };
    assert.equal(body.gateway, "default");
  });
});
