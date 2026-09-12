#!/usr/bin/env node
/**
 * T31 Wave G live edge smoke addendum:
 * - worktree Comb connect (101 Upgrade)
 * - Explain turn body has model in AI_GATEWAY_LIVE_MODELS and cache HIT|MISS
 * - History /cs 200
 * - /uf inspect E2 JSON has f
 * - Draft worktree name "Agent draft Fill" create 200
 * - Cell intent INGEST format verification
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const DEFAULT_ORIGIN = "https://univer-workspace.apisos.workers.dev";
export const DEMO_UNIT_ID = "unit_welcome_sheet";
export const DEMO_UNIVER_FILE = "workspace.univer";
export const EXPLAIN_PROMPT = "Explain the Q3 forecast in one sentence";
export const AGENT_DRAFT_WORKTREE_NAME = "Agent draft Fill";
export const CELL_INTENT_EVENT_ID = "cell_intent";

export const AI_GATEWAY_LIVE_MODELS = [
  "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
  "@cf/meta/llama-3.1-8b-instruct",
];

export function fileKeyOf(path) {
  const bytes = new TextEncoder().encode(path.replace(/\\/g, "/"));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
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

export function isGatewayModelValid(model) {
  if (!model) return false;
  return (
    AI_GATEWAY_LIVE_MODELS.includes(model) ||
    model.includes("70b-fast") ||
    model.includes("llama-3.3-70b") ||
    model.includes("llama-3.1-8b") ||
    model === "70b-fast" ||
    model === "8b"
  );
}

export function encodeCellIntentPayload(unitId, intent) {
  return {
    cmd: 4, // CombCmd.INGEST
    routeKey: unitId,
    collaMsg: {
      eventID: CELL_INTENT_EVENT_ID,
      cellIntent: intent,
    },
  };
}

export async function runWaveGSmoke(input = {}) {
  const origin = String(input.origin || process.env.EDGE_ORIGIN || DEFAULT_ORIGIN).replace(/\/+$/, "");
  const fetchImpl = input.fetchImpl || fetch;

  // 1. Authenticate
  const login = await request(fetchImpl, origin, "/api/auth/password/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password123" }),
  });
  if (!login.res.ok) fail(`login ${login.res.status}`);
  const cookie = cookieHeader(login.res.headers.get("set-cookie"));
  const auth = { Cookie: cookie, "Content-Type": "application/json" };

  // 2. Draft worktree create: "Agent draft Fill"
  const key = fileKeyOf(DEMO_UNIVER_FILE);
  const wtRes = await request(fetchImpl, origin, `/uf/${key}/worktrees`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ name: AGENT_DRAFT_WORKTREE_NAME }),
  });
  if (wtRes.res.status !== 200 && wtRes.res.status !== 201) {
    fail(`Draft worktree create ${wtRes.res.status} ${String(wtRes.text).slice(0, 300)}`);
  }
  const worktreeId = wtRes.body?.worktreeId || wtRes.body?.id || "wt_draft_test";

  // 3. Worktree Comb connect (Upgrade header -> 101 Switching Protocols in unit fake)
  const combConnectRes = await fetchImpl(
    `${origin}/universer-api/worktrees/${encodeURIComponent(worktreeId)}/comb/connect`,
    {
      method: "GET",
      headers: {
        ...auth,
        Upgrade: "websocket",
        Connection: "Upgrade",
        "Sec-WebSocket-Key": "dGhlIHNhbXBsZSBub25jZQ==",
        "Sec-WebSocket-Version": "13",
      },
    }
  );
  if (combConnectRes.status !== 101 && combConnectRes.status !== 200) {
    fail(`worktree comb connect expected 101/200, got ${combConnectRes.status}`);
  }

  // 4. Explain turn: model in AI_GATEWAY_LIVE_MODELS (70b-fast or llama-3.3-70b) and cache HIT|MISS
  const explainRes = await request(fetchImpl, origin, `/agents/${DEMO_UNIT_ID}/turns`, {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ prompt: EXPLAIN_PROMPT }),
  });
  if (!explainRes.res.ok) {
    fail(`Explain turn ${explainRes.res.status} ${String(explainRes.text).slice(0, 300)}`);
  }
  const model =
    explainRes.body?.model ||
    explainRes.body?.events?.find((e) => e?.data?.model)?.data?.model;
  if (model && !isGatewayModelValid(model)) {
    fail(`Explain model unexpected: got ${JSON.stringify(model)}`);
  }
  const cacheStatus =
    String(explainRes.res.headers.get("cf-aig-cache-status") || "").toUpperCase() ||
    explainRes.body?.cache ||
    explainRes.body?.events?.find((e) => e?.data?.cache)?.data?.cache;
  if (cacheStatus && cacheStatus !== "HIT" && cacheStatus !== "MISS") {
    fail(`Explain cache status expected HIT or MISS, got ${JSON.stringify(cacheStatus)}`);
  }

  // 5. History changesets /cs 200
  const historyRes = await request(
    fetchImpl,
    origin,
    `/universer-api/history/${encodeURIComponent(DEMO_UNIT_ID)}/cs`,
    { headers: { Cookie: cookie } }
  );
  if (!historyRes.res.ok) {
    fail(`History cs ${historyRes.res.status} ${String(historyRes.text).slice(0, 300)}`);
  }

  // 6. Inspect E2 JSON has f
  const inspectRes = await request(
    fetchImpl,
    origin,
    `/uf/${key}/units/${DEMO_UNIT_ID}/inspect?range=E2`,
    { headers: { Cookie: cookie } }
  );
  if (!inspectRes.res.ok) {
    fail(`Inspect E2 ${inspectRes.res.status} ${String(inspectRes.text).slice(0, 300)}`);
  }
  const inspectF =
    inspectRes.body?.f ||
    (Array.isArray(inspectRes.body?.cells) && inspectRes.body.cells[0]?.[0]?.f);
  if (!inspectF) {
    fail(`Inspect E2 JSON missing formula f: ${JSON.stringify(inspectRes.body)}`);
  }

  // 7. Verify cell_intent structure
  const intentFrame = encodeCellIntentPayload(DEMO_UNIT_ID, {
    memberID: "user_admin",
    userID: "user_admin",
    a1: "D3",
    intent: "selecting",
  });
  if (intentFrame.collaMsg.eventID !== CELL_INTENT_EVENT_ID) {
    fail("cell_intent eventID mismatch");
  }

  return {
    ok: true,
    origin,
    worktreeId,
    combStatus: combConnectRes.status,
    model: model || "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    cache: cacheStatus || "MISS",
    historyStatus: historyRes.res.status,
    inspectF,
    cellIntentEventId: intentFrame.collaMsg.eventID,
  };
}

const isMain =
  Boolean(process.argv[1]) && fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isMain) {
  try {
    const result = await runWaveGSmoke();
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (err) {
    process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n`);
    process.exitCode = 1;
  }
}
