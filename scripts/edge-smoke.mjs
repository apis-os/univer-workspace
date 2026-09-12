#!/usr/bin/env node
/**
 * T9 live edge smoke: Gateway, BROWSER, Avery turn rev, Explain MISS then HIT, /uf 200.
 *
 *   EDGE_ORIGIN=https://univer-workspace.apisos.workers.dev node scripts/edge-smoke.mjs
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const DEFAULT_ORIGIN = "https://univer-workspace.apisos.workers.dev";
export const DEMO_UNIT_ID = "unit_welcome_sheet";
export const DEMO_UNIVER_FILE = "workspace.univer";
export const EXPLAIN_PROMPT = "Explain the Q3 forecast in one sentence";
export const AVERY_TURN_PROMPT = "Set A1 to Hello from AI";
export const ACCOUNT_ID = "e4a1e871f7728c7d65d6da135db01658";
export const AI_GATEWAY_ID = "default";

export function fileKeyOf(path) {
  const bytes = new TextEncoder().encode(path.replace(/\\/g, "/"));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function cacheStatusFromTurn(res, body) {
  const header = String(
    res.headers.get("cf-aig-cache-status") || res.headers.get("cf-cache-status") || ""
  ).toUpperCase();
  if (header === "HIT" || header === "MISS") return header;
  if (body?.cache === "HIT" || body?.cache === "MISS") return body.cache;
  if (body?.cached === true) return "HIT";
  if (body?.cached === false) return "MISS";
  const events = Array.isArray(body?.events) ? body.events : [];
  for (const event of events) {
    const data = event?.data && typeof event.data === "object" ? event.data : {};
    if (data.cache === "HIT" || data.cache === "MISS") return data.cache;
    if (data.cached === true) return "HIT";
    if (data.cached === false) return "MISS";
  }
  return null;
}

export function aiGatewayLogIdFromTurn(body) {
  if (typeof body?.aiGatewayLogId === "string" && body.aiGatewayLogId) return body.aiGatewayLogId;
  const events = Array.isArray(body?.events) ? body.events : [];
  for (const event of events) {
    const id = event?.data?.aiGatewayLogId;
    if (typeof id === "string" && id) return id;
  }
  return null;
}

function jsonBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function request(fetchImpl, origin, path, init = {}) {
  const res = await fetchImpl(origin + path, init);
  const text = await res.text();
  const body = jsonBody(text);
  return { res, body, text };
}

function fail(message) {
  throw new Error(message);
}

function cookieHeader(setCookie) {
  const first = (setCookie || "").split(",")[0] || "";
  const pair = first.split(";")[0].trim();
  if (!/^workspace_session=/.test(pair)) fail("login cookie missing");
  return pair;
}

function wranglerOauthToken() {
  const token = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;
  if (token) return token;
  try {
    const raw = readFileSync(join(homedir(), ".wrangler/config/default.toml"), "utf8");
    const match = raw.match(/^oauth_token\s*=\s*"([^"]+)"/m);
    return match?.[1] || null;
  } catch {
    return null;
  }
}

export function cacheFlag(value) {
  if (value === true || value === 1 || value === "HIT" || String(value).toUpperCase() === "HIT") return "HIT";
  if (value === false || value === 0 || value === "MISS" || String(value).toUpperCase() === "MISS") return "MISS";
  return null;
}

export const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47];
/** Reject license/empty-workbook stubs (live 2932-byte captures). */
export const MIN_SCREENSHOT_BYTES = 4000;

export function screenshotBytesFromBody(body, text) {
  const data = body?.images?.[0]?.data;
  if (typeof data === "string" && data) {
    return Buffer.from(data, "base64");
  }
  if (typeof text === "string" && text) {
    return Buffer.from(text);
  }
  return Buffer.alloc(0);
}

export function isSheetPng(bytes) {
  if (!bytes || bytes.length < MIN_SCREENSHOT_BYTES) return false;
  return (
    bytes[0] === PNG_MAGIC[0] &&
    bytes[1] === PNG_MAGIC[1] &&
    bytes[2] === PNG_MAGIC[2] &&
    bytes[3] === PNG_MAGIC[3]
  );
}

/** Cold path only. Warm HIT then HIT is not a pass. Do not invent HIT. */
export function explainCacheOk(first, second) {
  return first === "MISS" && second === "HIT";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function lookupGatewayCache(logId, fetchImpl = fetch) {
  if (!logId) return null;
  const token = wranglerOauthToken();
  if (!token) {
    process.stderr.write("edge-smoke: no Cloudflare token for AI Gateway logs\n");
    return null;
  }
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai-gateway/gateways/${AI_GATEWAY_ID}/logs/${encodeURIComponent(logId)}`;
  const attempts = [0, 1500, 2500, 4000, 5000];
  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i]) await sleep(attempts[i]);
    const res = await fetchImpl(url, { headers: { Authorization: `Bearer ${token}` } });
    const body = jsonBody(await res.text());
    const cached = body?.result?.cached ?? body?.cached;
    const status = cacheFlag(cached);
    const errors = Array.isArray(body?.errors) ? body.errors.map((e) => e?.code || e?.message).join(",") : "";
    process.stderr.write(
      `edge-smoke: gateway log ${logId} attempt=${i + 1} http=${res.status} success=${body?.success} cached=${JSON.stringify(cached)} errors=${errors}\n`
    );
    if (status) return status;
    if (res.status === 401 || res.status === 403) return null;
  }
  return null;
}

async function resolveCache(res, body, lookup) {
  const fromTurn = cacheStatusFromTurn(res, body);
  if (fromTurn) return fromTurn;
  const logId = aiGatewayLogIdFromTurn(body);
  if (!lookup) return null;
  return lookup(logId);
}

export async function runEdgeSmoke(input = {}) {
  const origin = String(input.origin || process.env.EDGE_ORIGIN || DEFAULT_ORIGIN).replace(/\/+$/, "");
  const fetchImpl = input.fetchImpl || fetch;
  const lookup = input.lookupGatewayCache === undefined ? lookupGatewayCache : input.lookupGatewayCache;

  const healthz = await request(fetchImpl, origin, "/healthz");
  if (!healthz.res.ok) fail(`GET /healthz -> ${healthz.res.status}`);
  if (healthz.body?.status !== "ok") fail("healthz status");
  if (healthz.body?.browser !== "ok") {
    fail(`healthz.browser bound expected ok, got ${JSON.stringify(healthz.body?.browser)}`);
  }

  const healthzAi = await request(fetchImpl, origin, "/healthz.ai");
  if (!healthzAi.res.ok) fail(`GET /healthz.ai -> ${healthzAi.res.status} ${String(healthzAi.text).slice(0, 200)}`);
  if (healthzAi.body?.gateway !== AI_GATEWAY_ID) {
    fail(`healthz.ai.gateway === "default" expected, got ${JSON.stringify(healthzAi.body?.gateway)}`);
  }

  const login = await request(fetchImpl, origin, "/api/auth/password/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password123" })
  });
  if (!login.res.ok) fail(`login ${login.res.status}`);
  const cookie = cookieHeader(login.res.headers.get("set-cookie"));
  const auth = { Cookie: cookie, "Content-Type": "application/json" };

  const turnRes = await request(fetchImpl, origin, `/agents/${DEMO_UNIT_ID}/turns`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ prompt: AVERY_TURN_PROMPT })
  });
  if (turnRes.res.status === 401) fail("authenticated turn rejected");
  if (!turnRes.res.ok) fail(`Avery turn ${turnRes.res.status} ${String(turnRes.text).slice(0, 400)}`);
  if (!turnRes.body?.rev) fail("Avery turn missing rev");

  const explainMiss = await request(fetchImpl, origin, `/agents/${DEMO_UNIT_ID}/turns`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ prompt: EXPLAIN_PROMPT })
  });
  if (!explainMiss.res.ok) fail(`Explain MISS ${explainMiss.res.status} ${String(explainMiss.text).slice(0, 400)}`);
  const miss = await resolveCache(explainMiss.res, explainMiss.body, lookup);

  const explainHit = await request(fetchImpl, origin, `/agents/${DEMO_UNIT_ID}/turns`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ prompt: EXPLAIN_PROMPT })
  });
  if (!explainHit.res.ok) fail(`Explain HIT ${explainHit.res.status} ${String(explainHit.text).slice(0, 400)}`);
  const hit = await resolveCache(explainHit.res, explainHit.body, lookup);

  const key = fileKeyOf(DEMO_UNIVER_FILE);
  const ensurePath = `/uf/${key}`;
  const ensure = await request(fetchImpl, origin, ensurePath, { method: "POST", headers: auth });
  if (ensure.res.status !== 200) {
    fail(`/uf ensure ${ensure.res.status} ${String(ensure.text).slice(0, 400)}`);
  }

  const inspectPath = `/uf/${key}/units/${DEMO_UNIT_ID}/inspect?range=E2`;
  const inspect = await request(fetchImpl, origin, inspectPath, { headers: { Cookie: cookie } });
  if (inspect.res.status !== 200) {
    fail(`/uf inspect ${inspect.res.status} ${String(inspect.text).slice(0, 400)}`);
  }

  const screenshotPath = `/uf/${key}/screenshot`;
  const screenshot = await request(fetchImpl, origin, screenshotPath, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ unitId: DEMO_UNIT_ID })
  });
  if (screenshot.res.status !== 200) {
    fail(`/uf screenshot ${screenshot.res.status} ${String(screenshot.text).slice(0, 400)}`);
  }
  const png = screenshotBytesFromBody(screenshot.body, screenshot.text);
  if (!isSheetPng(png)) {
    fail(
      `/uf screenshot is not a sheet PNG (magic+min ${MIN_SCREENSHOT_BYTES}B), got length=${png.length} prefix=${png.subarray(0, 8).toString("hex")}`
    );
  }

  const result = {
    ok: explainCacheOk(miss, hit),
    origin,
    healthz: healthz.body,
    healthzAi: healthzAi.body,
    turn: { turnId: turnRes.body.turnId, rev: turnRes.body.rev },
    explain: { miss, hit },
    inspect: { status: inspect.res.status, path: inspectPath },
    screenshot: { status: screenshot.res.status, path: screenshotPath, pngLength: png.length }
  };
  if (!result.ok) {
    const err = new Error(
      `Explain cache expected MISS then HIT, got miss=${JSON.stringify(miss)} hit=${JSON.stringify(hit)}`
    );
    err.result = result;
    throw err;
  }
  return result;
}

const isMain =
  Boolean(process.argv[1]) && fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isMain) {
  try {
    const result = await runEdgeSmoke();
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (err) {
    if (err && typeof err === "object" && "result" in err && err.result) {
      process.stdout.write(`${JSON.stringify(err.result, null, 2)}\n`);
    }
    process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n`);
    process.exitCode = 1;
  }
}
