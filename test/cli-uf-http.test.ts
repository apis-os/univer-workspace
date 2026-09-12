import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { WorkspaceHttp } from "../packages/client-core/src/http.ts";
import {
  DEMO_UNIT_ID,
  DEMO_UNIVER_FILE,
  SUM_E2_CODE,
  WorkspaceUniverFileClient,
  fileKeyOf,
  runCliEdgeProof,
} from "../packages/client-core/src/univer-file.ts";
import { fileKeyOf as serverFileKeyOf } from "../src/integrations/univer-file-http.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://workspace.edge.test";
const COOKIE = "workspace_session=tok";

describe("CLI /uf HTTP (execute inspect screenshot import export)", () => {
  test("every execute/inspect/screenshot/import/export request URL contains /uf/", async () => {
    const urls: string[] = [];
    const http = new WorkspaceHttp({
      cookie: COOKIE,
      origin: ORIGIN,
      role: "client",
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        urls.push(request.url);
        const path = new URL(request.url).pathname;
        if (
          path.endsWith("/screenshot") ||
          path.endsWith("/import") ||
          path.endsWith("/export")
        ) {
          return json({ error: "BROWSER unbound" }, 503);
        }
        return json({
          success: true,
          range: "E2",
          f: "=SUM(B2:D2)",
          v: 600,
          images: [{ mediaType: "image/png", data: "iVBORw0KGgo", width: 1, height: 1 }],
          mediaType: "text/csv",
          data: "a,b",
        });
      },
    });
    const client = new WorkspaceUniverFileClient(http);
    const key = fileKeyOf(DEMO_UNIVER_FILE);
    assert.equal(key, serverFileKeyOf(DEMO_UNIVER_FILE));
    assert.match(client.path("units"), /\/uf\//);

    await client.execute({
      unitId: DEMO_UNIT_ID,
      code: SUM_E2_CODE,
    });
    await client.inspect({ unitId: DEMO_UNIT_ID, range: "E2" });
    await client.screenshot({ unitId: DEMO_UNIT_ID }).then(
      () => {
        throw new Error("screenshot must fail-closed when BROWSER is unbound");
      },
      (error: unknown) => {
        assertUfHttpError(error, "/screenshot");
      },
    );
    await client.importFile({ format: "csv", content: "a,b\n1,2" }).then(
      () => {
        throw new Error("import must fail-closed when BROWSER is unbound");
      },
      (error: unknown) => {
        assertUfHttpError(error, "/import");
      },
    );
    await client.exportFile({ unitId: DEMO_UNIT_ID, format: "csv" }).then(
      () => {
        throw new Error("export must fail-closed when BROWSER is unbound");
      },
      (error: unknown) => {
        assertUfHttpError(error, "/export");
      },
    );

    const ops = urls.filter((url) =>
      /\/(execute|inspect|screenshot|import|export)(?:\?|$)/.test(url),
    );
    assert.equal(ops.length, 5, `expected 5 office URLs, got ${urls.join("\n")}`);
    for (const url of ops) {
      assert.match(url, /\/uf\//, url);
      assert.equal(new URL(url).origin, ORIGIN);
    }
    assert.ok(urls.some((url) => url.includes(`/uf/${key}/units/${DEMO_UNIT_ID}/execute`)));
    assert.ok(urls.some((url) => url.includes(`/uf/${key}/units/${DEMO_UNIT_ID}/inspect`)));
    assert.ok(urls.some((url) => url.includes(`/uf/${key}/screenshot`)));
    assert.ok(urls.some((url) => url.includes(`/uf/${key}/import`)));
    assert.ok(urls.some((url) => url.includes(`/uf/${key}/export`)));
  });

  test("proof script exits 0 without Chromium: fake fetch / missing BROWSER is a /uf 503", async () => {
    const urls: string[] = [];
    const result = await runCliEdgeProof({
      origin: ORIGIN,
      fetcher: fakeEdgeFetch(urls),
    });
    assert.equal(result.ok, true);
    assert.equal(result.live, false);
    assert.equal(result.screenshot.status, 503);
    assert.match(result.screenshot.path, /\/uf\//);
    assert.match(result.screenshot.path, /\/screenshot$/);
    assert.equal(result.screenshot.localChromium, false);
    assert.ok(result.whoami.subject.id.length > 0);
    assert.ok(result.spaces.length >= 0);
    assert.ok(result.inspect.f != null || result.inspect.v != null);
    assert.match(result.curlUf.path, /\/uf\//);
    assert.equal(result.curlUf.cookieSent, true);

    const office = urls.filter((url) =>
      /\/(execute|inspect|screenshot|import|export)(?:\?|$)/.test(url),
    );
    for (const url of office) assert.match(url, /\/uf\//);
    assert.ok(urls.some((url) => url.includes("/uf/") && url.includes("/execute")));
    assert.ok(urls.some((url) => url.includes("/uf/") && url.includes("/inspect")));
    assert.ok(urls.some((url) => url.includes("/uf/") && url.includes("/screenshot")));
    assert.ok(
      urls.some((url) => url.includes("/uf/") && /\/worktrees\/[^/]+\/ready$/.test(new URL(url).pathname)),
    );
    assert.doesNotMatch(urls.join("\n"), /puppeteer|chromium/i);
  });

  test("CLI DEFAULT_ORIGIN stays workspace.univer.plus; Edge Quick Start wires /uf proof and live-edit E4", () => {
    const config = readFileSync(join(ROOT, "apps/cli/src/config.ts"), "utf8");
    assert.match(config, /export const DEFAULT_ORIGIN = "https:\/\/workspace\.univer\.plus\/"/);

    const readme = readFileSync(join(ROOT, "README.md"), "utf8");
    assert.match(readme, /### Edge Quick Start/);
    assert.match(readme, /cli-edge-proof\.mjs/);
    assert.match(readme, /https:\/\/univer-workspace\.apisos\.workers\.dev/);
    assert.match(readme, /live-edit/);
    assert.match(readme, /--origin/);
    assert.match(readme, /--set E4=180/);

    const proof = readFileSync(join(ROOT, "scripts/cli-edge-proof.mjs"), "utf8");
    assert.match(proof, /\/uf/);
    assert.doesNotMatch(proof, /puppeteer|createUniverRenderRuntime|PUPPETEER/i);

    const client = readFileSync(join(ROOT, "packages/client-core/src/univer-file.ts"), "utf8");
    assert.doesNotMatch(client, /puppeteer|createUniverRenderRuntime|PUPPETEER/i);
  });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function assertUfHttpError(error: unknown, suffix: string): void {
  assert.ok(error instanceof Error);
  const detail = (error as { detail?: { path?: string; status?: number } }).detail;
  assert.equal(detail?.status, 503);
  assert.equal(typeof detail?.path, "string");
  assert.match(detail!.path!, /\/uf\//);
  assert.ok(detail!.path!.endsWith(suffix), detail!.path);
}

function fakeEdgeFetch(urls: string[]): typeof fetch {
  return async (input, init) => {
    const request = new Request(input, init);
    urls.push(request.url);
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === "/api/auth/password/login") {
      return new Response(
        JSON.stringify({
          authenticated: true,
          user: { id: "user_admin", displayName: "Avery Chen" },
          sessionToken: "tok",
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
            "set-cookie": "workspace_session=tok; Path=/",
          },
        },
      );
    }
    if (path === "/api/session") {
      return json({
        authenticated: true,
        user: { id: "user_admin", displayName: "Avery Chen" },
      });
    }
    if (path === "/api/spaces") {
      return json({ spaces: [{ id: "space_personal", name: "Personal", type: "personal" }] });
    }
    if (path.endsWith("/screenshot") || path.endsWith("/import") || path.endsWith("/export")) {
      return json({ error: "BROWSER unbound" }, 503);
    }
    if (path.endsWith("/inspect")) {
      return json({ range: "E2", f: "=SUM(B2:D2)", v: 600, cells: [[{ f: "=SUM(B2:D2)", v: 600 }]] });
    }
    if (path.endsWith("/execute")) {
      return json({ success: true, unitId: DEMO_UNIT_ID, rev: 2 });
    }
    if (path.endsWith("/worktrees") && request.method === "POST") {
      return json({ id: "wt_cli_proof", name: "CLI proof", state: "draft" });
    }
    if (/\/worktrees\/[^/]+\/ready$/.test(path)) {
      return json({ worktree: { id: "wt_cli_proof", name: "CLI proof", state: "ready" } });
    }
    if (path.startsWith("/uf/")) {
      return json({ success: true, fileKey: path.slice("/uf/".length).split("/")[0] });
    }
    return json({ error: { message: `unexpected ${request.method} ${path}` } }, 404);
  };
}
