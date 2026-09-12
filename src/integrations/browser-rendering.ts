/**
 * Cloudflare Browser Rendering CDP connector (agent-think-cordis browser-runtime pattern).
 * Used by `/uf` screenshot, print-pdf, and lint. Never synthesizes PNG pixels.
 */
export type BrowserBinding = {
  fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
};

export type BrowserTargetInfo = {
  id?: string;
  type?: string;
  title?: string;
  url?: string;
  pageUrl?: string;
  webSocketDebuggerUrl?: string;
};

export type CdpClient = {
  attachToTarget(targetId: string): Promise<string>;
  send(
    method: string,
    params?: Record<string, unknown>,
    opts?: { sessionId?: string }
  ): Promise<unknown>;
  disconnect(): void;
};

type CdpSocket = {
  accept?: () => void;
  addEventListener(type: string, listener: (event: { data?: unknown; message?: string }) => void): void;
  send(data: string): void;
  close(): void;
};

const BROWSER_UNBOUND = "BROWSER unbound";
/** Binding fetch host used by @cloudflare/puppeteer@1.4.0. The BROWSER binding ignores the hostname. */
const FAKE_HOST = "https://fake.host";

export function browserUnboundResponse(): Response {
  return new Response(JSON.stringify({ error: BROWSER_UNBOUND }), {
    status: 503,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export function isBrowserBound(browser: BrowserBinding | undefined): browser is BrowserBinding {
  return typeof browser?.fetch === "function";
}

export function renderPageUrl(
  requestUrl: string,
  query: { unitId: string; worktreeId?: string; theme?: string }
): string {
  const url = new URL("/render", requestUrl);
  url.searchParams.set("unitId", query.unitId);
  if (query.worktreeId) url.searchParams.set("worktreeId", query.worktreeId);
  if (query.theme) url.searchParams.set("theme", query.theme);
  return url.toString();
}

export async function createBrowserSession(
  browser: BrowserBinding,
  options?: { keep_alive?: number }
): Promise<{ sessionId: string; targets?: BrowserTargetInfo[] }> {
  const searchParams = new URLSearchParams();
  if (options?.keep_alive) searchParams.set("keep_alive", `${options.keep_alive}`);
  const query = searchParams.toString();
  const acquireUrl = `${FAKE_HOST}/v1/devtools/browser${query ? `?${query}` : ""}`;
  const res = await browser.fetch?.(acquireUrl, { method: "POST" });
  if (!res || !res.ok) {
    const text = await res?.text().catch(() => "");
    throw new Error(`Failed to create browser session: ${res?.status ?? "no-response"} ${text}`);
  }
  return (await res.json()) as { sessionId: string; targets?: BrowserTargetInfo[] };
}

export async function connectBrowserSession(
  browser: BrowserBinding,
  sessionId: string
): Promise<CdpClient> {
  const res = (await browser.fetch?.(`${FAKE_HOST}/v1/devtools/browser/${sessionId}`, {
    headers: { Upgrade: "websocket" }
  })) as (Response & { webSocket?: CdpSocket }) | undefined;

  const ws = res?.webSocket;
  if (!ws) {
    throw new Error(`Failed to establish CDP connection for session: ${sessionId}`);
  }
  ws.accept?.();

  let idCounter = 1;
  const pending = new Map<number, { resolve: (val: unknown) => void; reject: (err: Error) => void }>();

  const rejectAllPending = (err: Error) => {
    for (const { reject } of pending.values()) reject(err);
    pending.clear();
  };

  ws.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(String(event.data)) as {
        id?: number;
        error?: unknown;
        result?: unknown;
      };
      if (typeof data.id === "number" && pending.has(data.id)) {
        const { resolve, reject } = pending.get(data.id)!;
        pending.delete(data.id);
        if (data.error) {
          const message =
            typeof data.error === "object" && data.error !== null
              ? (data.error as { message?: string; code?: number }).message ||
                `CDP error ${(data.error as { code?: number }).code ?? ""}`
              : String(data.error);
          reject(new Error(message));
        } else {
          resolve(data.result);
        }
      }
    } catch {
      // ignore malformed CDP frames
    }
  });

  ws.addEventListener("close", () => {
    rejectAllPending(new Error("CDP WebSocket closed"));
  });
  ws.addEventListener("error", (event) => {
    rejectAllPending(new Error(event.message ?? "CDP WebSocket error"));
  });

  return {
    async attachToTarget(targetId: string) {
      const attachRes = (await this.send("Target.attachToTarget", {
        targetId,
        flatten: true
      })) as { sessionId?: string };
      return attachRes?.sessionId ?? targetId;
    },
    async send(method, params, opts) {
      const id = idCounter++;
      const p = new Promise<unknown>((resolve, reject) => pending.set(id, { resolve, reject }));
      ws.send(JSON.stringify({ id, method, params, sessionId: opts?.sessionId }));
      return p;
    },
    disconnect() {
      rejectAllPending(new Error("CDP client disconnected"));
      try {
        ws.close();
      } catch {
        // ignore
      }
    }
  };
}

export async function listBrowserTargets(
  browser: BrowserBinding,
  sessionId: string
): Promise<BrowserTargetInfo[]> {
  const res = await browser.fetch?.(`${FAKE_HOST}/v1/devtools/browser/${sessionId}/json/list`);
  if (!res || !res.ok) return [];
  const body = (await res.json()) as unknown;
  if (Array.isArray(body)) return body as BrowserTargetInfo[];
  if (body && typeof body === "object" && Array.isArray((body as { value?: unknown }).value)) {
    return (body as { value: BrowserTargetInfo[] }).value;
  }
  return [];
}

export async function closeBrowserSession(browser: BrowserBinding, sessionId: string): Promise<void> {
  try {
    await browser.fetch?.(`${FAKE_HOST}/v1/sessions/${sessionId}`, { method: "DELETE" });
  } catch {
    // ignore
  }
}

function cdpValue(payload: unknown): unknown {
  if (payload == null || typeof payload !== "object") return payload;
  const record = payload as { result?: { value?: unknown }; value?: unknown };
  if (record.result && typeof record.result === "object" && "value" in record.result) {
    return record.result.value;
  }
  if ("value" in record) return record.value;
  return payload;
}

const RENDER_READY_EXPRESSION =
  "document.readyState === 'complete' && Boolean(window.univerAPI) && document.documentElement.dataset.univerReady === '1'";
const RENDER_DIAGNOSTIC_EXPRESSION =
  "({ href: location.href, readyState: document.readyState, ready: document.documentElement.dataset.univerReady || null, hasApi: Boolean(window.univerAPI), err: document.documentElement.dataset.univerError || null, title: document.title })";
const RENDER_READY_TIMEOUT_MS = 90_000;
const RENDER_READY_POLL_MS = 100;
const BROWSER_KEEP_ALIVE_MS = 180_000;

export type OpenRenderPageOptions = {
  snapshot?: unknown;
};

async function waitForRenderReady(cdp: CdpClient, pageSessionId: string): Promise<boolean> {
  const deadline = Date.now() + RENDER_READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const evaluated = await cdp.send(
        "Runtime.evaluate",
        { expression: RENDER_READY_EXPRESSION, returnByValue: true },
        { sessionId: pageSessionId }
      );
      if (cdpValue(evaluated) === true) return true;
    } catch {
      // Execution context is destroyed during navigation; keep polling until timeout.
    }
    const remaining = deadline - Date.now();
    if (remaining <= 0) break;
    await new Promise((resolve) => setTimeout(resolve, Math.min(RENDER_READY_POLL_MS, remaining)));
  }
  return false;
}

async function renderReadyDiagnostic(cdp: CdpClient, pageSessionId: string): Promise<string> {
  try {
    const evaluated = await cdp.send(
      "Runtime.evaluate",
      { expression: RENDER_DIAGNOSTIC_EXPRESSION, returnByValue: true },
      { sessionId: pageSessionId }
    );
    return JSON.stringify(cdpValue(evaluated));
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}

export async function openRenderPage(
  browser: BrowserBinding,
  pageUrl: string,
  options?: OpenRenderPageOptions
): Promise<{ cdp: CdpClient; pageSessionId: string; close: () => Promise<void> }> {
  const created = await createBrowserSession(browser, { keep_alive: BROWSER_KEEP_ALIVE_MS });
  const sessionId = created.sessionId;
  const cdp = await connectBrowserSession(browser, sessionId);
  const close = async () => {
    cdp.disconnect();
    await closeBrowserSession(browser, sessionId);
  };
  try {
    const listedHttp = created.targets?.length ? created.targets : await listBrowserTargets(browser, sessionId);
    let targetId =
      listedHttp.find((target) => target.type === "page" && target.id)?.id ??
      listedHttp.find((target) => target.id)?.id;
    if (!targetId) {
      const listed = (await cdp.send("Target.getTargets").catch(() => null)) as
        | { targetInfos?: Array<{ targetId?: string; type?: string }> }
        | null;
      const infos = Array.isArray(listed?.targetInfos) ? listed.targetInfos : [];
      targetId =
        infos.find((info) => info.type === "page" && info.targetId)?.targetId ??
        infos.find((info) => info.targetId)?.targetId;
    }
    if (!targetId) throw new Error("Browser session has no page target");
    const pageSessionId = await cdp.attachToTarget(targetId);
    await cdp.send("Page.enable", {}, { sessionId: pageSessionId });
    await cdp.send("Runtime.enable", {}, { sessionId: pageSessionId }).catch(() => undefined);
    if (options?.snapshot !== undefined) {
      await cdp.send(
        "Page.addScriptToEvaluateOnNewDocument",
        { source: `window.__UNIVER_SNAPSHOT = ${JSON.stringify(options.snapshot)};` },
        { sessionId: pageSessionId }
      );
    }
    await cdp.send("Page.navigate", { url: pageUrl }, { sessionId: pageSessionId });
    const ready = await waitForRenderReady(cdp, pageSessionId);
    if (!ready) {
      const diag = await renderReadyDiagnostic(cdp, pageSessionId);
      throw new Error(`window.univerAPI was not ready on /render ${diag}`);
    }
    return { cdp, pageSessionId, close };
  } catch (err) {
    await close();
    throw err;
  }
}

export async function capturePng(
  browser: BrowserBinding,
  pageUrl: string,
  params?: Record<string, unknown>
): Promise<{ data: string; width: number; height: number }> {
  const page = await openRenderPage(browser, pageUrl, { snapshot: params?.snapshot });
  try {
    const clip = screenshotClip(params);
    const captured = (await page.cdp.send(
      "Page.captureScreenshot",
      {
        format: "png",
        fromSurface: true,
        ...(clip ? { clip } : {})
      },
      { sessionId: page.pageSessionId }
    )) as { data?: string };
    const data = typeof captured?.data === "string" ? captured.data : "";
    if (!data) throw new Error("Page.captureScreenshot returned no data");
    const { width, height } = pngDimensions(base64Bytes(data));
    return { data, width, height };
  } finally {
    await page.close();
  }
}

export async function printPdf(
  browser: BrowserBinding,
  pageUrl: string,
  options?: OpenRenderPageOptions
): Promise<{ data: string }> {
  const page = await openRenderPage(browser, pageUrl, options);
  try {
    const printed = (await page.cdp.send(
      "Page.printToPDF",
      { printBackground: true, preferCSSPageSize: true },
      { sessionId: page.pageSessionId }
    )) as { data?: string };
    const data = typeof printed?.data === "string" ? printed.data : "";
    if (!data) throw new Error("Page.printToPDF returned no data");
    return { data };
  } finally {
    await page.close();
  }
}

export async function lintRenderPage(
  browser: BrowserBinding,
  pageUrl: string,
  options?: OpenRenderPageOptions
): Promise<{ findings: unknown[] }> {
  const page = await openRenderPage(browser, pageUrl, options);
  try {
    const evaluated = await page.cdp.send(
      "Runtime.evaluate",
      {
        expression:
          "(() => { const lint = window.__univerLint; return typeof lint === 'function' ? lint() : { findings: [] }; })()",
        returnByValue: true
      },
      { sessionId: page.pageSessionId }
    );
    const value = cdpValue(evaluated);
    if (value && typeof value === "object" && Array.isArray((value as { findings?: unknown }).findings)) {
      return { findings: (value as { findings: unknown[] }).findings };
    }
    return { findings: [] };
  } finally {
    await page.close();
  }
}

export async function evaluateOnRenderPage(
  browser: BrowserBinding,
  pageUrl: string,
  expression: string,
  options?: OpenRenderPageOptions
): Promise<unknown> {
  const page = await openRenderPage(browser, pageUrl, options);
  try {
    const evaluated = await page.cdp.send(
      "Runtime.evaluate",
      { expression, returnByValue: true, awaitPromise: true },
      { sessionId: page.pageSessionId }
    );
    return cdpValue(evaluated);
  } finally {
    await page.close();
  }
}

function screenshotClip(params?: Record<string, unknown>): Record<string, unknown> | undefined {
  const clip = params?.clip;
  if (!clip || typeof clip !== "object") return undefined;
  const record = clip as Record<string, unknown>;
  const x = Number(record.x);
  const y = Number(record.y);
  const width = Number(record.width);
  const height = Number(record.height);
  if (![x, y, width, height].every(Number.isFinite)) return undefined;
  return { x, y, width, height, scale: 1 };
}

export function base64Bytes(data: string): Uint8Array {
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export function pngDimensions(bytes: Uint8Array): { width: number; height: number } {
  if (bytes.byteLength < 24) return { width: 0, height: 0 };
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return { width: view.getUint32(16), height: view.getUint32(20) };
}
