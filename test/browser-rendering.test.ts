import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  connectBrowserSession,
  createBrowserSession,
  listBrowserTargets,
  openRenderPage
} from "../src/integrations/browser-rendering.ts";

const SESSION_ID = "sess-devtools-1";
const TARGET_ID = "target-page-1";

type RecordedCall = {
  method: string;
  url: string;
  headers: Record<string, string>;
};

function headerMap(init?: RequestInit): Record<string, string> {
  const headers = new Headers(init?.headers);
  const out: Record<string, string> = {};
  headers.forEach((value, key) => {
    out[key.toLowerCase()] = value;
  });
  return out;
}

function pathnameOf(url: string): string {
  return new URL(url).pathname;
}

function createCdpSocket(cdpCalls: Array<{ method: string; params?: Record<string, unknown> }>) {
  const listeners = new Map<string, Array<(event: { data?: string }) => void>>();
  return {
    accept() {},
    addEventListener(type: string, listener: (event: { data?: string }) => void) {
      const list = listeners.get(type) ?? [];
      list.push(listener);
      listeners.set(type, list);
    },
    send(raw: string) {
      const msg = JSON.parse(raw) as { id?: number; method?: string; params?: Record<string, unknown> };
      if (msg.method) cdpCalls.push({ method: msg.method, params: msg.params });
      const result =
        msg.method === "Target.attachToTarget"
          ? { sessionId: "cdp-page" }
          : msg.method === "Runtime.evaluate"
            ? { result: { value: true } }
            : {};
      queueMicrotask(() => {
        for (const listener of listeners.get("message") ?? []) {
          listener({ data: JSON.stringify({ id: msg.id, result }) });
        }
      });
    },
    close() {}
  };
}

function recordBrowser() {
  const calls: RecordedCall[] = [];
  const cdpCalls: Array<{ method: string; params?: Record<string, unknown> }> = [];
  const browser = {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      const headers = headerMap(init);
      calls.push({ method, url, headers });
      const path = pathnameOf(url);
      if (method === "POST" && path === "/v1/devtools/browser") {
        return new Response(JSON.stringify({ sessionId: SESSION_ID }), {
          headers: { "content-type": "application/json" }
        });
      }
      if (method === "GET" && path === `/v1/devtools/browser/${SESSION_ID}/json/list`) {
        return new Response(
          JSON.stringify([{ id: TARGET_ID, type: "page", url: "about:blank" }]),
          { headers: { "content-type": "application/json" } }
        );
      }
      if (method === "GET" && path === `/v1/devtools/browser/${SESSION_ID}` && headers.upgrade === "websocket") {
        return { ok: true, webSocket: createCdpSocket(cdpCalls) } as unknown as Response;
      }
      if (method === "DELETE" && path === `/v1/sessions/${SESSION_ID}`) {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({ error: `unmocked ${method} ${path}` }), { status: 404 });
    }
  };
  return { browser, calls, cdpCalls };
}

describe("BROWSER session acquire (puppeteer 1.4.0)", () => {
  test("createBrowserSession POSTs /v1/devtools/browser, not POST /v1/sessions", async () => {
    const { browser, calls } = recordBrowser();
    const created = await createBrowserSession(browser);
    assert.equal(created.sessionId, SESSION_ID);
    const postCalls = calls.filter((call) => call.method === "POST");
    assert.equal(postCalls.length, 1);
    assert.equal(pathnameOf(postCalls[0]!.url), "/v1/devtools/browser");
    assert.ok(!calls.some((call) => call.method === "POST" && pathnameOf(call.url) === "/v1/sessions"));
  });

  test("connectBrowserSession GETs /v1/devtools/browser/:id with Upgrade websocket", async () => {
    const { browser, calls } = recordBrowser();
    const cdp = await connectBrowserSession(browser, SESSION_ID);
    assert.ok(cdp);
    const upgrade = calls.find((call) => call.headers.upgrade === "websocket");
    assert.ok(upgrade);
    assert.equal(upgrade.method, "GET");
    assert.equal(pathnameOf(upgrade.url), `/v1/devtools/browser/${SESSION_ID}`);
    assert.ok(!calls.some((call) => pathnameOf(call.url).includes("/cdp")));
    cdp.disconnect();
  });

  test("listBrowserTargets GETs /v1/devtools/browser/:id/json/list", async () => {
    const { browser, calls } = recordBrowser();
    const targets = await listBrowserTargets(browser, SESSION_ID);
    assert.equal(targets[0]?.id, TARGET_ID);
    assert.ok(
      calls.some(
        (call) =>
          call.method === "GET" && pathnameOf(call.url) === `/v1/devtools/browser/${SESSION_ID}/json/list`
      )
    );
    assert.ok(!calls.some((call) => pathnameOf(call.url).endsWith("/targets")));
  });

  test("openRenderPage records acquire POST /v1/devtools/browser, not POST /v1/sessions", async () => {
    const { browser, calls } = recordBrowser();
    const page = await openRenderPage(browser, "https://workspace.edge/render?unitId=unit_welcome_sheet");
    try {
      const posts = calls.filter((call) => call.method === "POST");
      assert.ok(posts.some((call) => pathnameOf(call.url) === "/v1/devtools/browser"));
      assert.ok(!calls.some((call) => call.method === "POST" && pathnameOf(call.url) === "/v1/sessions"));
      assert.ok(
        calls.some(
          (call) =>
            call.method === "GET" &&
            pathnameOf(call.url) === `/v1/devtools/browser/${SESSION_ID}` &&
            call.headers.upgrade === "websocket"
        )
      );
      assert.ok(
        calls.some(
          (call) =>
            call.method === "GET" && pathnameOf(call.url) === `/v1/devtools/browser/${SESSION_ID}/json/list`
        )
      );
    } finally {
      await page.close();
    }
  });

  test("openRenderPage injects snapshot before navigate so /render does not refetch the DO", async () => {
    const { browser, cdpCalls } = recordBrowser();
    const snapshot = {
      unitID: "unit_welcome_sheet",
      workbook: { unitID: "unit_welcome_sheet", id: "unit_welcome_sheet", sheets: {} }
    };
    const page = await openRenderPage(browser, "https://workspace.edge/render?unitId=unit_welcome_sheet", {
      snapshot
    });
    try {
      const methods = cdpCalls.map((call) => call.method);
      const injectAt = methods.indexOf("Page.addScriptToEvaluateOnNewDocument");
      const navigateAt = methods.indexOf("Page.navigate");
      assert.ok(injectAt >= 0, "must inject snapshot via CDP");
      assert.ok(navigateAt > injectAt, "inject must run before Page.navigate");
      const source = String(cdpCalls[injectAt]?.params?.source ?? "");
      assert.match(source, /__UNIVER_SNAPSHOT/);
      assert.match(source, /unit_welcome_sheet/);
    } finally {
      await page.close();
    }
  });
});
