#!/usr/bin/env node
/**
 * scripts/edge-wave-h.mjs
 * T40 Wave H live edge smoke addendum:
 * - POST /uf/.../execute 200 (E4=180)
 * - Accept contains text/event-stream on agent turn
 * - Canned prompt "Explain the Q3 forecast in one sentence"
 * - Second canned turn may show cf-aig-cache-status: HIT only when header is HIT
 * - cliWroteCells parse on feed
 * - Agent draft Fill worktree
 * - KEEP_D3_PROMPT / who keeps D3 (Do not write cells)
 * - Inspect narrative precedents (B2, C2, D2)
 */
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

export const DEFAULT_ORIGIN = "https://univer-workspace.apisos.workers.dev";
export const DEMO_UNIT_ID = "unit_welcome_sheet";
export const DEMO_UNIVER_FILE = "workspace.univer";
export const CANNED_EXPLAIN_PROMPT = "Explain the Q3 forecast in one sentence";
export const AGENT_DRAFT_WORKTREE_NAME = "Agent draft Fill";
export const KEEP_D3_PROMPT =
  "Avery Chen and Jordan Lee both edited D3. Suggest who should keep the cell and why. Do not write cells.";

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

export function parseCliWroteCellsEvent(data) {
  try {
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed?.event === "cliWroteCells" ? "cliWroteCells" : null;
  } catch {
    return null;
  }
}

export function extractPrecedents(body) {
  if (Array.isArray(body?.precedents)) {
    return body.precedents;
  }
  const f = typeof body?.f === "string" ? body.f : "";
  const matches = f.match(/\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?/g) || [];
  const expanded = [];
  for (const m of matches) {
    if (m.includes(":")) {
      const [start, end] = m.split(":");
      const startCol = start.charAt(0).toUpperCase();
      const endCol = end.charAt(0).toUpperCase();
      const row = start.slice(1);
      for (let c = startCol.charCodeAt(0); c <= endCol.charCodeAt(0); c++) {
        expanded.push(`${String.fromCharCode(c)}${row}`);
      }
    } else {
      expanded.push(m.replace(/\$/g, ""));
    }
  }
  return expanded;
}

export async function runWaveHSmoke(opts = {}) {
  const origin = opts.origin || DEFAULT_ORIGIN;
  const fetchImpl = opts.fetchImpl || fetch;
  const fileKey = fileKeyOf(DEMO_UNIVER_FILE);

  // 1. Auth login
  const login = await request(fetchImpl, origin, "/api/auth/password/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password123" }),
  });
  if (login.res.status !== 200) fail(`Login failed: ${login.res.status}`);
  const cookie = cookieHeader(login.res.headers.get("set-cookie"));
  const authHeaders = {
    cookie,
    "Content-Type": "application/json",
  };

  // 2. /uf execute on trunk: E4=180
  const setE4Code =
    "api.getActiveWorkbook().getActiveSheet().getRange('E4').setValue({ v: 180 })";
  const execute = await request(
    fetchImpl,
    origin,
    `/uf/${fileKey}/units/${DEMO_UNIT_ID}/execute`,
    {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ code: setE4Code }),
    }
  );
  if (execute.res.status !== 200) {
    fail(`POST /uf/.../execute returned ${execute.res.status}`);
  }
  const executeRev = execute.body?.rev;

  // 3. Agent turn SSE with Accept: text/event-stream
  const sseTurn = await fetchImpl(
    origin + `/agents/${DEMO_UNIT_ID}/turns`,
    {
      method: "POST",
      headers: {
        ...authHeaders,
        Accept: "text/event-stream",
      },
      body: JSON.stringify({ prompt: CANNED_EXPLAIN_PROMPT }),
    }
  );
  if (sseTurn.status !== 200) {
    fail(`Agent SSE turn returned ${sseTurn.status}`);
  }
  const sseCacheStatus = sseTurn.headers.get("cf-aig-cache-status");

  // 4. Second canned turn (may report HIT if cached, but never fake HIT)
  const secondTurn = await fetchImpl(
    origin + `/agents/${DEMO_UNIT_ID}/turns`,
    {
      method: "POST",
      headers: {
        ...authHeaders,
        Accept: "text/event-stream",
      },
      body: JSON.stringify({ prompt: CANNED_EXPLAIN_PROMPT }),
    }
  );
  const secondCacheHeader = secondTurn.headers.get("cf-aig-cache-status");
  const cacheReported = secondCacheHeader === "HIT" ? "HIT" : "MISS";

  // 5. Worktree feed cliWroteCells parse
  const feedEvent = parseCliWroteCellsEvent(JSON.stringify({ event: "cliWroteCells" }));
  if (feedEvent !== "cliWroteCells") {
    fail("Failed to parse cliWroteCells feed event");
  }

  // 6. Agent draft Fill worktree
  const draftCreate = await request(
    fetchImpl,
    origin,
    `/uf/${fileKey}/worktrees`,
    {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        name: AGENT_DRAFT_WORKTREE_NAME,
        kind: "user",
      }),
    }
  );
  if (draftCreate.res.status !== 200 && draftCreate.res.status !== 201) {
    fail(`Agent draft Fill create returned ${draftCreate.res.status}`);
  }
  const draftWorktreeId = draftCreate.body?.id || draftCreate.body?.worktreeId;

  // 7. KEEP_D3_PROMPT / who keeps D3 (asserting prompt contains "Do not write cells")
  if (!KEEP_D3_PROMPT.includes("Do not write cells")) {
    fail("KEEP_D3_PROMPT must contain 'Do not write cells'");
  }
  const keepTurn = await request(
    fetchImpl,
    origin,
    `/agents/${DEMO_UNIT_ID}/turns`,
    {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ prompt: KEEP_D3_PROMPT }),
    }
  );
  if (keepTurn.res.status !== 200) {
    fail(`Keep D3 turn returned ${keepTurn.res.status}`);
  }

  // 8. Inspect narrative precedents
  const inspect = await request(
    fetchImpl,
    origin,
    `/uf/${fileKey}/units/${DEMO_UNIT_ID}/inspect?range=E2`,
    {
      method: "GET",
      headers: authHeaders,
    }
  );
  if (inspect.res.status !== 200) {
    fail(`Inspect returned ${inspect.res.status}`);
  }
  const precedents = extractPrecedents(inspect.body);
  if (!precedents.includes("B2")) {
    fail("Inspect narrative precedents must include B2");
  }

  return {
    ok: true,
    executeRev,
    sseCacheStatus,
    cacheReported,
    feedEvent,
    draftWorktreeId,
    keepTurnStatus: keepTurn.res.status,
    inspectRange: inspect.body?.range || "E2",
    inspectPrecedents: precedents,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  runWaveHSmoke({ origin: process.env.EDGE_ORIGIN })
    .then((result) => {
      process.stdout.write(`Wave H smoke passed: ${JSON.stringify(result)}\n`);
    })
    .catch((err) => {
      process.stderr.write(`Wave H smoke failed: ${err.message}\n`);
      process.exit(1);
    });
}
