import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { registerHooks } from "node:module";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import { createMockD1 } from "./mock-d1.ts";
import { seedControlPlane } from "../src/control-plane/schema.ts";
import { ControlPlaneDb } from "../src/control-plane/db.ts";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { setSheetCell } from "../src/plugins/univer-snapshot.ts";
import {
  fileKeyOf,
  handleUniverFileHttp,
  spaceIdFromFileKey
} from "../src/integrations/univer-file-http.ts";

const ORIGIN = "https://workspace.edge";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DEMO_FILE = "workspace.univer";
const DEMO_UNIT_ID = "unit_welcome_sheet";
const FORMULA = "=SUM(B2:D2)";
const FILE_HTTP_SRC = join(ROOT, "src/integrations/univer-file-http.ts");

function dataModule(source: string) {
  return {
    url: "data:text/javascript," + encodeURIComponent(source),
    shortCircuit: true
  };
}

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("cloudflare:")) {
      return dataModule(`
        export default {};
        export class DurableObject {
          constructor(ctx, env) {
            this.ctx = ctx;
            this.env = env;
          }
        };
        export class WorkerEntrypoint {};
      `);
    }
    return nextResolve(specifier, context);
  }
});

async function seededHost(currentUser: Awaited<ReturnType<ControlPlaneDb["getUserById"]>> | null) {
  const d1 = createMockD1();
  await seedControlPlane(d1);
  const db = new ControlPlaneDb(d1);
  return { d1, db, currentUser };
}

function ufUrl(key: string, rest = ""): string {
  return `${ORIGIN}/uf/${key}${rest}`;
}

describe("Univer File /uf gateway skeleton", () => {
  test("spaceIdFromFileKey maps workspace.univer to the 24-hex Space id", () => {
    const key = fileKeyOf(DEMO_FILE);
    assert.equal(spaceIdFromFileKey(key), "space_uf_776f726b73706163652e756e");
  });

  test("unauthenticated POST /uf/:key returns 401", async () => {
    const { db } = await seededHost(null);
    const key = fileKeyOf(DEMO_FILE);
    const res = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), {
      db,
      currentUser: null
    });
    assert.ok(res, "POST /uf/:key must be handled");
    assert.equal(res.status, 401);
  });

  test("POST /uf/:key then GET /uf/:key/units lists unit_welcome_sheet", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const host = { db: admin.db, currentUser: user };
    const key = fileKeyOf(DEMO_FILE);

    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.ok(created);
    assert.equal(created.status, 200);

    const listed = await handleUniverFileHttp(new Request(ufUrl(key, "/units")), host);
    assert.ok(listed);
    assert.equal(listed.status, 200);
    const body = (await listed.json()) as {
      units?: Array<{ id?: string; name?: string; type?: number }>;
    };
    assert.ok(Array.isArray(body.units));
    const welcome = body.units?.find((unit) => unit.id === DEMO_UNIT_ID);
    assert.ok(welcome, "demo workspace.univer must list unit_welcome_sheet after POST");
    assert.equal(welcome?.type, 2);
  });

  test("unknown file key GET /units returns 404", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const key = fileKeyOf("missing.univer");
    const res = await handleUniverFileHttp(new Request(ufUrl(key, "/units")), {
      db: admin.db,
      currentUser: user
    });
    assert.ok(res);
    assert.equal(res.status, 404);
  });

  test("CLI Bearer token can POST /uf/:key on the Worker", async () => {
    const { default: worker } = await import("../src/server.ts");
    const env = createForwardEnv();
    await seedControlPlane(env.DB);
    const login = await worker.fetch(
      new Request(`${ORIGIN}/api/auth/password/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "admin", password: "password123" })
      }),
      env as any,
      {} as any
    );
    assert.equal(login.status, 200);
    const loginBody = (await login.json()) as { sessionToken?: string };
    assert.equal(typeof loginBody.sessionToken, "string");

    const key = fileKeyOf(DEMO_FILE);
    const res = await worker.fetch(
      new Request(ufUrl(key), {
        method: "POST",
        headers: { Authorization: `Bearer ${loginBody.sessionToken}` }
      }),
      env as any,
      {} as any
    );
    assert.equal(res.status, 200);
    assert.ok(env.ChatAgent.fetches.some((entry: string) => entry.startsWith("POST /uf/")));
  });

  test("aliases worktree product APIs under /uf/:key/worktrees", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const host = { db: admin.db, currentUser: user };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const posted = await handleUniverFileHttp(
      new Request(ufUrl(key, "/worktrees"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Agent draft" })
      }),
      host
    );
    assert.ok(posted);
    assert.ok(posted.status === 200 || posted.status === 201);
    const createdWt = (await posted.json()) as { id?: string; worktree?: { id?: string } };
    const worktreeId = createdWt.worktree?.id || createdWt.id;
    assert.ok(worktreeId);

    const listed = await handleUniverFileHttp(new Request(ufUrl(key, "/worktrees")), host);
    assert.ok(listed);
    assert.equal(listed.status, 200);
    const listBody = (await listed.json()) as {
      items?: Array<{ id?: string }>;
      worktrees?: Array<{ id?: string }>;
    };
    const items = listBody.items ?? listBody.worktrees ?? [];
    assert.ok(items.some((item) => item.id === worktreeId));

    const ready = await handleUniverFileHttp(
      new Request(ufUrl(key, `/worktrees/${worktreeId}/ready`), { method: "POST" }),
      host
    );
    assert.ok(ready);
    assert.equal(ready.status, 200);
  });

  test("authenticated user cannot GET another worktree's units via /uf/:key/worktrees/:otherId/units", async () => {
    const seeded = await seededHost(null);
    const admin = await seeded.db.getUserById("user_admin");
    const jordan = await seeded.db.getUserById("user_jordan");
    assert.ok(admin);
    assert.ok(jordan);
    const adminHost = { db: seeded.db, currentUser: admin };
    const jordanHost = { db: seeded.db, currentUser: jordan };
    const adminKey = fileKeyOf(DEMO_FILE);
    const jordanKey = fileKeyOf("jordan.univer");

    const adminPosted = await handleUniverFileHttp(new Request(ufUrl(adminKey), { method: "POST" }), adminHost);
    assert.equal(adminPosted?.status, 200);

    const created = await handleUniverFileHttp(
      new Request(ufUrl(adminKey, "/worktrees"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Secret draft" })
      }),
      adminHost
    );
    assert.ok(created);
    assert.ok(created.status === 200 || created.status === 201);
    const createdWt = (await created.json()) as { id?: string; worktree?: { id?: string } };
    const worktreeId = createdWt.worktree?.id || createdWt.id;
    assert.ok(worktreeId);

    const jordanPosted = await handleUniverFileHttp(
      new Request(ufUrl(jordanKey), { method: "POST" }),
      jordanHost
    );
    assert.equal(jordanPosted?.status, 200);

    const leaked = await handleUniverFileHttp(
      new Request(ufUrl(jordanKey, `/worktrees/${worktreeId}/units`)),
      jordanHost
    );
    assert.ok(leaked);
    assert.ok(
      leaked.status === 403 || leaked.status === 404,
      `expected 403 or 404 like product GET /api/worktrees/:id, got ${leaked.status}`
    );
    const leakedBody = (await leaked.json()) as {
      units?: unknown[];
      worktree?: { units?: unknown[] };
    };
    const leakedUnits = leakedBody.units ?? leakedBody.worktree?.units ?? [];
    assert.equal(leakedUnits.length, 0);

    const own = await handleUniverFileHttp(
      new Request(ufUrl(adminKey, `/worktrees/${worktreeId}/units`)),
      adminHost
    );
    assert.ok(own);
    assert.equal(own.status, 200);
  });

  test("Worker 401s unauthenticated POST /uf and never serves SPA assets", async () => {
    const { default: worker } = await import("../src/server.ts");
    const env = createForwardEnv();
    let assetsHits = 0;
    env.ASSETS = {
      fetch: async () => {
        assetsHits += 1;
        return new Response("spa", { status: 200 });
      }
    };
    const key = fileKeyOf(DEMO_FILE);
    const res = await worker.fetch(new Request(ufUrl(key), { method: "POST" }), env as any, {} as any);
    assert.equal(res.status, 401);
    assert.equal(env.ChatAgent.fetches.length, 0);
    assert.equal(assetsHits, 0);
  });

  test("dsh-host and server forward /uf; 404 guard includes /uf", () => {
    const serverSrc = readFileSync(join(ROOT, "src/server.ts"), "utf8");
    const hostSrc = readFileSync(join(ROOT, "src/project/dsh-host.ts"), "utf8");
    assert.match(serverSrc, /pathname\.startsWith\("\/uf\/?"\)/);
    assert.match(hostSrc, /handleUniverFileHttp/);
    assert.match(hostSrc, /\/uf/);
    const guard = serverSrc.slice(serverSrc.indexOf("API / Backend 404 guard"));
    assert.match(guard, /\/uf/);
  });
});

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("ALTER") || trimmed.startsWith("DROP")) {
        db.exec(query);
        return { toArray: () => [] };
      }
      const stmt = db.prepare(query);
      if (trimmed.startsWith("INSERT") || trimmed.startsWith("UPDATE") || trimmed.startsWith("DELETE")) {
        stmt.run(...(binds as any[]));
        return { toArray: () => [] };
      }
      return { toArray: () => stmt.all(...(binds as any[])) as Record<string, unknown>[] };
    }
  };
}

function createCollab() {
  return new UniverCollabService(new Context(), createSqliteAdapter());
}

describe("Univer File /uf inspect", () => {
  test("inspect reads collaborative snapshots via getSheetRange, not formula execution", () => {
    const src = readFileSync(FILE_HTTP_SRC, "utf8");
    assert.match(src, /getSheetRange/);
    assert.doesNotMatch(src, /executeCalculation/);
  });

  test("GET inspect?range=A1 returns seeded { v } for unit_welcome_sheet on workspace.univer", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    setSheetCell(snapshot, "A1", { v: "seeded-a1" });
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);

    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=A1`)),
      host
    );
    assert.ok(res, "GET inspect must be handled");
    assert.equal(res.status, 200);
    const body = (await res.json()) as { v?: unknown; cells?: Array<Array<{ v?: unknown } | null>> };
    assert.equal(body.v, "seeded-a1");
  });

  test("inspect returns stored formula f without inventing v until { f, v } is persisted", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    setSheetCell(snapshot, "E2", { f: FORMULA });
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const pending = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(pending?.status, 200);
    const pendingBody = (await pending!.json()) as { f?: unknown; v?: unknown };
    assert.equal(pendingBody.f, FORMULA);
    assert.equal(pendingBody.v, undefined);

    setSheetCell(snapshot, "E2", { f: FORMULA, v: 420 });
    collab.saveSnapshot(DEMO_UNIT_ID, 2, snapshot);

    const executed = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(executed?.status, 200);
    const executedBody = (await executed!.json()) as { f?: unknown; v?: unknown };
    assert.equal(executedBody.f, FORMULA);
    assert.equal(executedBody.v, 420);
  });

  test("inspect?worktreeId= reads the draft snapshot when present", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const trunk = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    setSheetCell(trunk, "A1", { v: "trunk-a1" });
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", trunk);
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const posted = await handleUniverFileHttp(
      new Request(ufUrl(key, "/worktrees"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Inspect draft" })
      }),
      host
    );
    assert.ok(posted);
    assert.ok(posted.status === 200 || posted.status === 201);
    const createdWt = (await posted.json()) as { id?: string; worktree?: { id?: string } };
    const worktreeId = createdWt.worktree?.id || createdWt.id;
    assert.ok(worktreeId);

    const draftId = "unit_wt_inspect_draft";
    const draft = generateDefaultSnapshot(draftId, 2, "Draft") as Record<string, unknown>;
    setSheetCell(draft, "A1", { v: "draft-a1" });
    collab.createUnit(draftId, 2, "Draft", draft);
    collab.bindWorktreeUnit(worktreeId, draftId, { trunkUnitId: DEMO_UNIT_ID, type: 2, name: "Draft" });

    const trunkRes = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=A1`)),
      host
    );
    assert.equal(trunkRes?.status, 200);
    const trunkBody = (await trunkRes!.json()) as { v?: unknown };
    assert.equal(trunkBody.v, "trunk-a1");

    const draftRes = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=A1&worktreeId=${encodeURIComponent(worktreeId)}`)),
      host
    );
    assert.equal(draftRes?.status, 200);
    const draftBody = (await draftRes!.json()) as { v?: unknown };
    assert.equal(draftBody.v, "draft-a1");
  });
});

function createForwardEnv() {
  const d1 = createMockD1();
  const chatAgentFetches: string[] = [];
  const mockChatAgent: {
    fetches: string[];
    idFromName: (name: string) => { toString: () => string; name: string };
    get: (id: unknown) => { fetch: (req: Request) => Promise<Response> };
  } = {
    fetches: chatAgentFetches,
    idFromName: (name: string) => ({ toString: () => `id_${name}`, name }),
    get: () => ({
      fetch: async (req: Request) => {
        const url = new URL(req.url);
        chatAgentFetches.push(`${req.method} ${url.pathname}`);
        return new Response(JSON.stringify({ ok: true, forwarded: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
    })
  };
  const mockWorkspaceDO = {
    idFromName: (name: string) => ({ toString: () => `ws_${name}`, name }),
    get: () => ({
      fetch: async () => new Response(JSON.stringify({ status: "connected" }))
    })
  };
  return {
    DB: d1,
    ChatAgent: mockChatAgent,
    WorkspaceDO: mockWorkspaceDO,
    ASSETS: undefined as { fetch: (req: Request) => Promise<Response> } | undefined
  };
}
