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
  options?: unknown
): Promise<{ sessionId: string; targets?: BrowserTargetInfo[] }> {
  const res = await browser.fetch?.("http://localhost/v1/sessions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(options ?? {})
  });
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
  const res = (await browser.fetch?.(`http://localhost/v1/sessions/${sessionId}/cdp`, {
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
  const res = await browser.fetch?.(`http://localhost/v1/sessions/${sessionId}/targets`);
  if (!res || !res.ok) return [];
  return (await res.json()) as BrowserTargetInfo[];
}

export async function closeBrowserSession(browser: BrowserBinding, sessionId: string): Promise<void> {
  try {
    await browser.fetch?.(`http://localhost/v1/sessions/${sessionId}`, { method: "DELETE" });
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

export async function openRenderPage(
  browser: BrowserBinding,
  pageUrl: string
): Promise<{ cdp: CdpClient; pageSessionId: string; close: () => Promise<void> }> {
  const created = await createBrowserSession(browser);
  const sessionId = created.sessionId;
  const cdp = await connectBrowserSession(browser, sessionId);
  const close = async () => {
    cdp.disconnect();
    await closeBrowserSession(browser, sessionId);
  };
  try {
    const targetId =
      created.targets?.find((target) => target.id)?.id ??
      (await listBrowserTargets(browser, sessionId)).find((target) => target.id)?.id;
    if (!targetId) throw new Error("Browser session has no page target");
    const pageSessionId = await cdp.attachToTarget(targetId);
    await cdp.send("Page.enable", {}, { sessionId: pageSessionId });
    await cdp.send("Page.navigate", { url: pageUrl }, { sessionId: pageSessionId });
    let ready = false;
    for (let i = 0; i < 40; i++) {
      const evaluated = await cdp.send(
        "Runtime.evaluate",
        {
          expression: "Boolean(window.univerAPI) && document.documentElement.dataset.univerReady === '1'",
          returnByValue: true
        },
        { sessionId: pageSessionId }
      );
      if (cdpValue(evaluated) === true) {
        ready = true;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    if (!ready) {
      // Still capture: /render may expose univerAPI without dataset in older stubs.
      const evaluated = await cdp.send(
        "Runtime.evaluate",
        { expression: "Boolean(window.univerAPI)", returnByValue: true },
        { sessionId: pageSessionId }
      );
      if (cdpValue(evaluated) !== true) {
        throw new Error("window.univerAPI was not ready on /render");
      }
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
  const page = await openRenderPage(browser, pageUrl);
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

export async function printPdf(browser: BrowserBinding, pageUrl: string): Promise<{ data: string }> {
  const page = await openRenderPage(browser, pageUrl);
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
  pageUrl: string
): Promise<{ findings: unknown[] }> {
  const page = await openRenderPage(browser, pageUrl);
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
