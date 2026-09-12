import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { registerHooks } from "node:module";
import { DatabaseSync } from "node:sqlite";
import { Context } from "@deepseek-ai/cordis";
import { createMockD1 } from "./mock-d1.ts";
import { generateSessionToken } from "../src/control-plane/auth.ts";
import { seedControlPlane } from "../src/control-plane/schema.ts";
import { ControlPlaneDb } from "../src/control-plane/db.ts";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { getSheetCell, setSheetCell } from "../src/plugins/univer-snapshot.ts";
import {
  fileKeyOf,
  handleUniverFileHttp,
  spaceIdFromFileKey
} from "../src/integrations/univer-file-http.ts";
import { runUniverExecutePersist } from "../apps/workspace/web/src/render-execute.ts";
import {
  FACADE_EXECUTE_WORKER_CODE,
  persistFacadeWrites
} from "../src/integrations/univer-file-execute.ts";

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
    const marked = await host.db.getWorktree(worktreeId);
    assert.ok(marked, "ready must persist the worktree");
    assert.equal(
      marked.status ?? (marked as { state?: string }).state,
      "ready",
      "POST /uf/.../ready must call setWorktreeStatus, not return a constant 200 stub"
    );
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

  test("ChatAgent /uf inspect reads a snapshot without injecting collab on the handler", async () => {
    const { DshHost } = await import("../src/project/dsh-host.ts");
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const token = generateSessionToken();
    await admin.db.createSession(user.id, token);

    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    setSheetCell(snapshot, "A1", { v: "seeded-a1" });
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);

    class KernelHost extends DshHost {
      override async ensureKernel() {
        return { get: (name: string) => (name === "collab" ? collab : undefined) } as never;
      }
    }

    const agent = new KernelHost(
      {
        id: { toString: () => "id_inspect", name: "univer_collab" },
        storage: { sql: { exec: () => ({ toArray: () => [] }) } },
        getWebSockets: () => [],
        acceptWebSocket: () => {}
      } as never,
      { DB: admin.d1 }
    );

    const key = fileKeyOf(DEMO_FILE);
    const auth = { Authorization: `Bearer ${token}` };
    const created = await agent.fetch(new Request(ufUrl(key), { method: "POST", headers: auth }));
    assert.equal(created.status, 200);

    const res = await agent.fetch(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=A1`), { headers: auth })
    );
    assert.equal(res.status, 200);
    const body = (await res.json()) as { v?: unknown };
    assert.equal(body.v, "seeded-a1");
  });
});

const EXECUTE_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('E2').setValue({ f: '=SUM(B2:D2)' });";
const COMMA_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('Z2').setValue({ f: '=SUM(B2:D2)', t: 2 });";
const EXECUTE_SRC = join(ROOT, "src/integrations/univer-file-execute.ts");

describe("Univer File /uf execute", () => {
  test("missing BROWSER and LOADER returns 503 and does not invent cell values", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.ok(res, "POST execute must be handled");
    assert.equal(res.status, 503);
    const err = (await res.json()) as { error?: unknown };
    assert.equal(err.error, "BROWSER and LOADER unbound");

    const inspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(inspect?.status, 200);
    const inspectBody = (await inspect!.json()) as { f?: unknown; v?: unknown };
    assert.notEqual(inspectBody.f, FORMULA);
    assert.ok(inspectBody.f == null, "missing runtime must not invent formula f");
  });

  test("POST execute Facade snippet then inspect shows f and/or v", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const host = { db: admin.db, currentUser: user, collab, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.ok(res, "POST execute must be handled");
    assert.equal(res.status, 200);
    assert.ok(
      fake.cdpMethods.includes("Runtime.evaluate"),
      "BROWSER must page.evaluate the Facade snippet on /render"
    );
    assert.ok(
      fake.navigated.some((url) => url.includes("/render") && url.includes(`unitId=${DEMO_UNIT_ID}`)),
      "BROWSER must load /render?unitId="
    );

    const inspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(inspect?.status, 200);
    const inspectBody = (await inspect!.json()) as { f?: unknown; v?: unknown };
    assert.ok(
      inspectBody.f === FORMULA || inspectBody.v != null,
      `inspect after execute must show f and/or v, got ${JSON.stringify(inspectBody)}`
    );
  });

  test("POST execute notifies cliWroteCells when the commit succeeds", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    let notified = 0;
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fake.browser,
      notifyCliWroteCells: () => {
        notified += 1;
      }
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    assert.equal(notified, 1, "successful /uf execute must notify cliWroteCells");

    const missingRuntime = await seededHost(null);
    const missingUser = await missingRuntime.db.getUserById("user_admin");
    assert.ok(missingUser);
    let unboundNotified = 0;
    const unboundHost = {
      db: missingRuntime.db,
      currentUser: missingUser,
      collab,
      notifyCliWroteCells: () => {
        unboundNotified += 1;
      }
    };
    await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), unboundHost);
    const unbound = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      unboundHost
    );
    assert.equal(unbound?.status, 503);
    assert.equal(unboundNotified, 0, "unbound execute must not toast CLI writes");
  });

  test("worktree execute persists on the draft so inspect?worktreeId= shows f and/or v", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const trunk = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", trunk);
    const hostBase = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), hostBase);
    assert.equal(created?.status, 200);

    const posted = await handleUniverFileHttp(
      new Request(ufUrl(key, "/worktrees"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Execute draft" })
      }),
      hostBase
    );
    assert.ok(posted);
    assert.ok(posted.status === 200 || posted.status === 201);
    const createdWt = (await posted.json()) as { id?: string; worktree?: { id?: string } };
    const worktreeId = createdWt.worktree?.id || createdWt.id;
    assert.ok(worktreeId);

    const draftId = "unit_wt_execute_draft";
    const draft = generateDefaultSnapshot(draftId, 2, "Draft") as Record<string, unknown>;
    collab.createUnit(draftId, 2, "Draft", draft);
    collab.bindWorktreeUnit(worktreeId, draftId, { trunkUnitId: DEMO_UNIT_ID, type: 2, name: "Draft" });

    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot: draft });
    const host = { ...hostBase, browser: fake.browser };

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/worktrees/${worktreeId}/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.ok(res, "POST worktree execute must be handled");
    assert.equal(res.status, 200);

    const trunkInspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(trunkInspect?.status, 200);
    const trunkBody = (await trunkInspect!.json()) as { f?: unknown };
    assert.equal(trunkBody.f, undefined);

    const draftInspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2&worktreeId=${encodeURIComponent(worktreeId)}`)),
      host
    );
    assert.equal(draftInspect?.status, 200);
    const draftBody = (await draftInspect!.json()) as { f?: unknown; v?: unknown };
    assert.ok(
      draftBody.f === FORMULA || draftBody.v != null,
      `draft inspect after execute must show f and/or v, got ${JSON.stringify(draftBody)}`
    );
  });

  test("prefers BROWSER /render over stub LOADER when both are bound", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fakeBrowser = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const fakeLoader = createFakeLoader();
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fakeBrowser.browser,
      loader: fakeLoader.loader
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    assert.ok(
      fakeBrowser.cdpMethods.includes("Runtime.evaluate"),
      "deploy must page.evaluate Facade on /render when BROWSER is bound"
    );
    assert.equal(fakeLoader.got.length, 0, "stub LOADER must not run when BROWSER is bound");
  });

  test("empty BROWSER execute falls back to LOADER so E2 still gets f and/or v", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fakeBrowser = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot, emptyExecute: true });
    const fakeLoader = createFakeLoader();
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fakeBrowser.browser,
      loader: fakeLoader.loader
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);
    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    assert.ok(fakeLoader.got.length > 0, "LOADER must run when BROWSER returns no cell writes");
    const inspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    const inspectBody = (await inspect!.json()) as { f?: unknown; v?: unknown };
    assert.ok(inspectBody.f != null || inspectBody.v != null, JSON.stringify(inspectBody));
  });

  test("BROWSER execute runs posted Facade code with commas via __univerRunExecute persist", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const host = { db: admin.db, currentUser: user, collab, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: COMMA_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    assert.ok(fake.evaluatedExpressions.some((expression) => expression.includes("__univerRunExecute")));

    const posted = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=Z2`)),
      host
    );
    assert.equal(posted?.status, 200);
    const postedBody = (await posted!.json()) as { f?: unknown; v?: unknown };
    assert.ok(
      postedBody.f === FORMULA || postedBody.v != null,
      `posted comma-containing snippet must persist Z2, got ${JSON.stringify(postedBody)}`
    );

    const fallback = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    const fallbackBody = (await fallback!.json()) as { f?: unknown };
    assert.notEqual(fallbackBody.f, FORMULA, "must not fall back to EXECUTE_CODE E2 when posted code writes Z2");
  });

  test("CLI execute persists changeset with caller memberId, not agent_workspace", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const host = { db: admin.db, currentUser: user, collab, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    const entries = collab.listChangesetEntries(DEMO_UNIT_ID);
    assert.ok(entries.length > 0, "execute must persist a changeset");
    const last = entries[entries.length - 1];
    assert.equal(last.changeset.memberID, user.id);
    assert.notEqual(last.changeset.memberID, "agent_workspace");
  });

  test("HTTP execute ignores spoofed invoker headers and uses the session memberId", async () => {
    const src = readFileSync(EXECUTE_SRC, "utf8");
    const httpSrc = readFileSync(FILE_HTTP_SRC, "utf8");
    assert.doesNotMatch(src, /x-univer-invoker|x-workspace-invoker/);
    assert.doesNotMatch(httpSrc, /x-univer-invoker|x-workspace-invoker/);

    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const host = { db: admin.db, currentUser: user, collab, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-univer-invoker": "agent",
          "x-workspace-invoker": "agent"
        },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    const entries = collab.listChangesetEntries(DEMO_UNIT_ID);
    assert.ok(entries.length > 0);
    const last = entries[entries.length - 1];
    assert.equal(last.changeset.memberID, user.id);
    assert.notEqual(last.changeset.memberID, "agent_workspace");
  });

  test("internal executeAsAgent persists with agent_workspace", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fake.browser,
      executeAsAgent: true
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    const entries = collab.listChangesetEntries(DEMO_UNIT_ID);
    assert.ok(entries.length > 0);
    const last = entries[entries.length - 1];
    assert.equal(last.changeset.memberID, "agent_workspace");
  });

  test("FACADE_EXECUTE_WORKER_CODE execute.js runs the posted Facade snippet", async () => {
    const source = FACADE_EXECUTE_WORKER_CODE.modules["execute.js"];
    assert.equal(typeof source, "string");
    assert.equal(source.includes("new Function"), false, "Dynamic Workers disallow new Function");
    assert.equal(source.includes("eval("), false, "Dynamic Workers disallow eval");
    const mod = (await import("data:text/javascript," + encodeURIComponent(source))) as {
      default: { fetch: (request: Request) => Promise<Response> };
    };
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    const res = await mod.default.fetch(
      new Request("https://uf-execute/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE, snapshot })
      })
    );
    assert.equal(res.ok, true);
    const body = (await res.json()) as { cells?: Array<{ a1?: string; value?: { f?: unknown } }> };
    assert.ok(body.cells?.some((cell) => cell.a1 === "E2" && cell.value?.f === FORMULA));

    const comma = await mod.default.fetch(
      new Request("https://uf-execute/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: COMMA_CODE, snapshot })
      })
    );
    assert.equal(comma.ok, true);
    const commaBody = (await comma.json()) as { cells?: Array<{ a1?: string; value?: { f?: unknown; t?: unknown } }> };
    assert.ok(commaBody.cells?.some((cell) => cell.a1 === "Z2" && cell.value?.f === FORMULA && cell.value?.t === 2));
  });

  test("persist emits per-sheet changesets and applies OT before snapshot save", async () => {
    const collab = createCollab();
    const unitId = "unit_persist_sheets";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Sheets") as Record<string, unknown>;
    const workbook = ((snapshot as { workbook?: Record<string, unknown> }).workbook ?? snapshot) as {
      sheetOrder?: string[];
      sheets?: Record<string, Record<string, unknown>>;
    };
    workbook.sheetOrder = ["sheet_1", "sheet_2"];
    workbook.sheets = workbook.sheets ?? {};
    workbook.sheets.sheet_2 = {
      id: "sheet_2",
      name: "Sheet 2",
      cellData: {},
      type: 0
    };
    collab.createUnit(unitId, 2, "Sheets", snapshot);

    const applyAt: Array<{ snapshotRev: number; changesetRev: number; subUnitId: string }> = [];
    const origApply = collab.applyChangeset.bind(collab);
    const origGet = collab.getLatestSnapshot.bind(collab);
    collab.applyChangeset = async (payload, clientId, userID) => {
      const latest = origGet(unitId);
      const record = payload as {
        rev?: number;
        revision?: number;
        mutations?: Array<{ params?: { subUnitId?: string } }>;
      };
      applyAt.push({
        snapshotRev: latest?.rev ?? 0,
        changesetRev: record.rev ?? record.revision ?? 0,
        subUnitId: String(record.mutations?.[0]?.params?.subUnitId ?? "")
      });
      return origApply(payload, clientId, userID);
    };

    await persistFacadeWrites(
      collab,
      unitId,
      [
        { a1: "A1", value: { v: "one" }, sheetId: "sheet_1" },
        { a1: "B1", value: { v: "two" }, sheetId: "sheet_2" }
      ],
      "user_admin"
    );

    const subUnitIds = applyAt.map((entry) => entry.subUnitId).sort();
    assert.deepEqual(subUnitIds, ["sheet_1", "sheet_2"]);
    assert.ok(
      applyAt.every((entry) => entry.snapshotRev < entry.changesetRev),
      `T12 materialize must not be skipped by a prior saveSnapshot, got ${JSON.stringify(applyAt)}`
    );
    const latest = collab.getLatestSnapshot(unitId);
    assert.equal(getSheetCell(latest?.data ?? {}, "A1", "sheet_1")?.v, "one");
    assert.equal(getSheetCell(latest?.data ?? {}, "B1", "sheet_2")?.v, "two");
  });

  test("fake LOADER worker runs Facade when BROWSER is absent", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeLoader();
    const host = { db: admin.db, currentUser: user, collab, loader: fake.loader };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.ok(res, "POST execute via LOADER must be handled");
    assert.equal(res.status, 200);
    assert.ok(fake.got.length > 0, "must call LOADER.get or LOADER.load");

    const inspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    assert.equal(inspect?.status, 200);
    const inspectBody = (await inspect!.json()) as { f?: unknown; v?: unknown };
    assert.ok(
      inspectBody.f === FORMULA || inspectBody.v != null,
      `inspect after LOADER execute must show f and/or v, got ${JSON.stringify(inspectBody)}`
    );
  });

  test("LOADER WorkerStub getEntrypoint.fetch is used when stub.fetch is absent", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeLoader();
    const loader = {
      get(name: string | null, getCode: () => unknown) {
        const stub = fake.loader.get(name, getCode);
        return { getEntrypoint: () => stub };
      }
    };
    const host = { db: admin.db, currentUser: user, collab, loader };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);
    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: EXECUTE_CODE })
      }),
      host
    );
    assert.equal(res?.status, 200);
    const inspect = await handleUniverFileHttp(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`)),
      host
    );
    const inspectBody = (await inspect!.json()) as { f?: unknown; v?: unknown };
    assert.ok(inspectBody.f != null || inspectBody.v != null, JSON.stringify(inspectBody));
  });

  test("ChatAgent /uf execute uses env.BROWSER without injecting it on the handler", async () => {
    const { DshHost } = await import("../src/project/dsh-host.ts");
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const token = generateSessionToken();
    await admin.db.createSession(user.id, token);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, snapshot });

    class KernelHost extends DshHost {
      override async ensureKernel() {
        return { get: (name: string) => (name === "collab" ? collab : undefined) } as never;
      }
    }

    const agent = new KernelHost(
      {
        id: { toString: () => "id_execute", name: "univer_collab" },
        storage: { sql: { exec: () => ({ toArray: () => [] }) } },
        getWebSockets: () => [],
        acceptWebSocket: () => {}
      } as never,
      { DB: admin.d1, BROWSER: fake.browser }
    );

    const key = fileKeyOf(DEMO_FILE);
    const auth = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const created = await agent.fetch(new Request(ufUrl(key), { method: "POST", headers: auth }));
    assert.equal(created.status, 200);

    const res = await agent.fetch(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/execute`), {
        method: "POST",
        headers: auth,
        body: JSON.stringify({ code: EXECUTE_CODE })
      })
    );
    assert.equal(res.status, 200);
    const inspect = await agent.fetch(
      new Request(ufUrl(key, `/units/${DEMO_UNIT_ID}/inspect?range=E2`), { headers: auth })
    );
    assert.equal(inspect.status, 200);
    const inspectBody = (await inspect.json()) as { f?: unknown; v?: unknown };
    assert.ok(
      inspectBody.f === FORMULA || inspectBody.v != null,
      `ChatAgent inspect after execute must show f and/or v, got ${JSON.stringify(inspectBody)}`
    );
  });
});

const PNG_1x1 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const PDF_STUB = Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF\n").toString(
  "base64"
);
const RENDER_MAIN = join(ROOT, "apps/workspace/web/src/render-main.tsx");
const RENDER_HTML = join(ROOT, "apps/workspace/web/render.html");
const VITE_CONFIG = join(ROOT, "apps/workspace/vite.config.ts");

describe("Univer File /uf screenshot, print-pdf, lint", () => {
  test("chrome-less /render hydrates snapshot query params and exposes window.univerAPI", () => {
    const renderMain = readFileSync(RENDER_MAIN, "utf8");
    const renderHtml = readFileSync(RENDER_HTML, "utf8");
    const viteConfig = readFileSync(VITE_CONFIG, "utf8");
    assert.match(renderHtml, /render-main/);
    assert.match(viteConfig, /render\.html/);
    assert.match(renderMain, /window\.univerAPI/);
    assert.match(renderMain, /runUniverExecutePersist/);
    assert.match(renderMain, /__univerRunExecute/);
    assert.match(renderMain, /unitId/);
    assert.match(renderMain, /worktreeId/);
    assert.match(renderMain, /theme/);
    assert.match(renderMain, /createUniver/);
    assert.match(renderMain, /plugins:\s*\[\s*\]/);
    assert.doesNotMatch(renderMain, /workspace-layout|Live Share|command palette/i);
  });

  test("missing BROWSER returns 503 { error: \"BROWSER unbound\" } and never fakes PNG pixels", async () => {
    const src = readFileSync(FILE_HTTP_SRC, "utf8");
    assert.doesNotMatch(src, /iVBORw0KGgo/);

    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const host = { db: admin.db, currentUser: user };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    for (const rest of ["/screenshot", "/print-pdf", "/lint"] as const) {
      const res = await handleUniverFileHttp(
        new Request(ufUrl(key, rest), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ unitId: DEMO_UNIT_ID })
        }),
        host
      );
      assert.ok(res, `POST ${rest} must be handled`);
      assert.equal(res.status, 503);
      assert.deepEqual(await res.json(), { error: "BROWSER unbound" });
    }
  });

  test("fake BROWSER Page.captureScreenshot returns PNG length > 0", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });
    const host = { db: admin.db, currentUser: user, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, "/screenshot"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID, params: { theme: "light" } })
      }),
      host
    );
    assert.ok(res);
    assert.equal(res.status, 200);
    const body = (await res.json()) as {
      images?: Array<{ mediaType?: string; data?: string; width?: number; height?: number }>;
    };
    assert.ok(Array.isArray(body.images));
    assert.equal(body.images?.length, 1);
    const image = body.images![0];
    assert.equal(image.mediaType, "image/png");
    assert.equal(typeof image.data, "string");
    assert.ok((image.data?.length ?? 0) > 0);
    assert.equal(Buffer.from(image.data ?? "", "base64").length > 0, true);
    assert.equal(image.width, 1);
    assert.equal(image.height, 1);
    assert.ok(
      fake.cdpMethods.includes("Page.captureScreenshot"),
      "must call Page.captureScreenshot on BROWSER CDP"
    );
    assert.ok(
      fake.navigated.some((url) => url.includes("/render") && url.includes(`unitId=${DEMO_UNIT_ID}`)),
      "BROWSER must load /render?unitId="
    );
  });

  test("fake BROWSER screenshot survives early Runtime.evaluate errors", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB, evaluateFailures: 3 });
    const host = { db: admin.db, currentUser: user, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const res = await handleUniverFileHttp(
      new Request(ufUrl(key, "/screenshot"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID })
      }),
      host
    );
    assert.ok(res);
    assert.equal(res.status, 200);
    const body = (await res.json()) as {
      images?: Array<{ mediaType?: string; data?: string; width?: number; height?: number }>;
    };
    assert.equal(body.images?.[0]?.mediaType, "image/png");
    assert.ok((body.images?.[0]?.data?.length ?? 0) > 0);
    assert.equal(Buffer.from(body.images?.[0]?.data ?? "", "base64").length > 0, true);
    assert.ok(fake.evaluateAttempts() > 3, "must keep polling Runtime.evaluate after early failures");
    assert.ok(fake.cdpMethods.includes("Page.captureScreenshot"));
  });

  test("/render hydrate requires a snapshot body before ready and createWorkbook", async () => {
    const { hydrateRenderWorkbook } = await import("../apps/workspace/web/src/render-hydrate.ts");
    const created: Record<string, unknown>[] = [];
    const createWorkbook = (data: Record<string, unknown>) => {
      created.push(data);
    };

    const missing = hydrateRenderWorkbook({ snapshot: null, createWorkbook });
    assert.equal(missing.ready, false);
    assert.equal(created.length, 0);

    const failedLoad = hydrateRenderWorkbook({ snapshot: undefined, createWorkbook });
    assert.equal(failedLoad.ready, false);
    assert.equal(created.length, 0);

    const snapshot = {
      id: DEMO_UNIT_ID,
      name: "Q3 Forecast",
      sheetOrder: ["sheet-1"],
      sheets: { "sheet-1": { id: "sheet-1", name: "Sheet1" } }
    };
    const applied = hydrateRenderWorkbook({ snapshot, createWorkbook });
    assert.equal(applied.ready, true);
    assert.equal(created.length, 1);
    assert.deepEqual(created[0], snapshot);

    created.length = 0;
    const universer = {
      unitID: DEMO_UNIT_ID,
      rev: 1,
      type: 2,
      workbook: {
        unitID: DEMO_UNIT_ID,
        name: "Q3 Forecast",
        sheetOrder: ["sheet_1"],
        sheets: { sheet_1: { id: "sheet_1", name: "Sheet 1" } }
      }
    };
    const fromEnvelope = hydrateRenderWorkbook({ snapshot: universer, createWorkbook });
    assert.equal(fromEnvelope.ready, true);
    assert.equal(created[0]?.id, DEMO_UNIT_ID);
    assert.equal(created[0]?.unitID, DEMO_UNIT_ID);

    const renderMain = readFileSync(RENDER_MAIN, "utf8");
    assert.match(renderMain, /hydrateRenderWorkbook/);
    assert.match(renderMain, /injectedRenderSnapshot/);
  });

  test("fake BROWSER print-pdf and lint load /render", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });
    const host = { db: admin.db, currentUser: user, browser: fake.browser };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const pdfRes = await handleUniverFileHttp(
      new Request(ufUrl(key, "/print-pdf"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID, worktreeId: "" })
      }),
      host
    );
    assert.ok(pdfRes);
    assert.equal(pdfRes.status, 200);
    const pdfBody = (await pdfRes.json()) as { mediaType?: string; data?: string };
    assert.equal(pdfBody.mediaType, "application/pdf");
    assert.ok((pdfBody.data?.length ?? 0) > 0);
    assert.ok(fake.cdpMethods.includes("Page.printToPDF"));

    const lintRes = await handleUniverFileHttp(
      new Request(ufUrl(key, "/lint"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID })
      }),
      host
    );
    assert.ok(lintRes);
    assert.equal(lintRes.status, 200);
    const lintBody = (await lintRes.json()) as { findings?: unknown };
    assert.ok(Array.isArray(lintBody.findings));
    assert.ok(fake.cdpMethods.includes("Runtime.evaluate"));
  });

  test("ChatAgent /uf screenshot uses env.BROWSER without injecting it on the handler", async () => {
    const { DshHost } = await import("../src/project/dsh-host.ts");
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const token = generateSessionToken();
    await admin.db.createSession(user.id, token);
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });

    class KernelHost extends DshHost {
      override async ensureKernel() {
        return { get: () => undefined } as never;
      }
    }

    const agent = new KernelHost(
      {
        id: { toString: () => "id_screenshot", name: "univer_collab" },
        storage: { sql: { exec: () => ({ toArray: () => [] }) } },
        getWebSockets: () => [],
        acceptWebSocket: () => {}
      } as never,
      { DB: admin.d1, BROWSER: fake.browser }
    );

    const key = fileKeyOf(DEMO_FILE);
    const auth = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const created = await agent.fetch(new Request(ufUrl(key), { method: "POST", headers: auth }));
    assert.equal(created.status, 200);

    const res = await agent.fetch(
      new Request(ufUrl(key, "/screenshot"), {
        method: "POST",
        headers: auth,
        body: JSON.stringify({ unitId: DEMO_UNIT_ID })
      })
    );
    assert.equal(res.status, 200);
    const body = (await res.json()) as { images?: Array<{ data?: string; mediaType?: string }> };
    assert.equal(body.images?.[0]?.mediaType, "image/png");
    assert.ok((body.images?.[0]?.data?.length ?? 0) > 0);
    assert.ok(fake.cdpMethods.includes("Page.captureScreenshot"));
  });
});

const TINY_CSV = "hello,qty\nalpha,1\nbeta,2";
const TINY_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20"><rect width="40" height="20" fill="#4472c4"/></svg>';
const EXCHANGE_SRC = join(ROOT, "src/integrations/univer-file-exchange.ts");
const DSH_HOST_SRC = join(ROOT, "src/project/dsh-host.ts");

describe("Univer File /uf import, export, compile-svg", () => {
  test("decoded exchange-client runs in BROWSER /render, not exchange-node-binding", () => {
    const renderMain = readFileSync(RENDER_MAIN, "utf8");
    assert.match(renderMain, /@univerjs-pro\/exchange-client/);
    assert.match(renderMain, /IExchangeService/);
    assert.match(renderMain, /importFileToJson/);
    assert.match(renderMain, /exportFileBySnapshot/);
    assert.match(renderMain, /__univerImport/);
    assert.match(renderMain, /__univerExport/);
    assert.doesNotMatch(renderMain, /runUniverImport/);
    assert.doesNotMatch(renderMain, /runUniverExport/);
    const exchangeSrc = readFileSync(EXCHANGE_SRC, "utf8");
    assert.match(exchangeSrc, /BLOB_BUCKET|R2BlobStore|blobStore/);
    assert.match(exchangeSrc, /compileSvgToFacade/);
    assert.match(exchangeSrc, /@univer-cli\/svg-facade/);
    assert.doesNotMatch(exchangeSrc, /from ["']node:fs["']/);
    assert.doesNotMatch(exchangeSrc, /exchange-node-binding/);
    assert.doesNotMatch(exchangeSrc, /collaboration-transport-node/);
    const httpSrc = readFileSync(FILE_HTTP_SRC, "utf8");
    assert.doesNotMatch(httpSrc, /exchange-node-binding/);
    assert.doesNotMatch(httpSrc, /collaboration-transport-node/);
    const hostSrc = readFileSync(DSH_HOST_SRC, "utf8");
    assert.match(hostSrc, /BLOB_BUCKET/);
    assert.match(hostSrc, /blobStore/);
  });

  test("missing BROWSER returns 503 for import/export and never invents workbook bytes", async () => {
    const src = readFileSync(FILE_HTTP_SRC, "utf8");
    assert.doesNotMatch(src, /hello,qty/);

    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const imported = await handleUniverFileHttp(
      new Request(ufUrl(key, "/import"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format: "csv", content: TINY_CSV })
      }),
      host
    );
    assert.ok(imported, "POST /import must be handled");
    assert.equal(imported.status, 503);
    assert.deepEqual(await imported.json(), { error: "BROWSER unbound" });

    const listed = await handleUniverFileHttp(new Request(ufUrl(key, "/units")), host);
    assert.equal(listed?.status, 200);
    const listedBody = (await listed!.json()) as { units?: Array<{ id?: string }> };
    assert.equal(
      listedBody.units?.some((unit) => unit.id && unit.id !== DEMO_UNIT_ID),
      false,
      "missing BROWSER must not invent an imported unit"
    );

    const exported = await handleUniverFileHttp(
      new Request(ufUrl(key, "/export"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID, format: "csv" })
      }),
      host
    );
    assert.ok(exported, "POST /export must be handled");
    assert.equal(exported.status, 503);
    assert.deepEqual(await exported.json(), { error: "BROWSER unbound" });
  });

  test("import tiny csv creates a unit that GET /units lists", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });
    const r2 = createFakeR2();
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fake.browser,
      blobStore: new (await import("../src/integrations/r2-blob-store.ts")).R2BlobStore(r2.bucket)
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const imported = await handleUniverFileHttp(
      new Request(ufUrl(key, "/import"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format: "csv", content: TINY_CSV })
      }),
      host
    );
    assert.ok(imported);
    assert.equal(imported.status, 200);
    const importBody = (await imported.json()) as { unitId?: string; id?: string };
    const unitId = importBody.unitId || importBody.id;
    assert.ok(unitId, "import must return a unit id");

    const listed = await handleUniverFileHttp(new Request(ufUrl(key, "/units")), host);
    assert.equal(listed?.status, 200);
    const listedBody = (await listed!.json()) as { units?: Array<{ id?: string }> };
    assert.ok(
      listedBody.units?.some((unit) => unit.id === unitId),
      `GET /units must include imported unit ${unitId}`
    );
    const importedSnap = collab.getLatestSnapshot(String(unitId));
    assert.ok(importedSnap, "import must persist a collaborative snapshot");
    assert.equal(getSheetCell(importedSnap.data, "A1")?.v, "hello");
    assert.equal(getSheetCell(importedSnap.data, "B1")?.v, "qty");
    assert.equal(getSheetCell(importedSnap.data, "A2")?.v, "alpha");
    assert.equal(getSheetCell(importedSnap.data, "B2")?.v, 1);
    assert.ok(r2.objects.size > 0, "import bytes must go through R2");
    assert.ok(
      fake.evaluatedExpressions.some((expression) => expression.includes("__univerImport")),
      "BROWSER must evaluate exchange-client import on /render"
    );
  });

  test("export csv returns bytes", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });
    const r2 = createFakeR2();
    const host = {
      db: admin.db,
      currentUser: user,
      collab,
      browser: fake.browser,
      blobStore: new (await import("../src/integrations/r2-blob-store.ts")).R2BlobStore(r2.bucket)
    };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const imported = await handleUniverFileHttp(
      new Request(ufUrl(key, "/import"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format: "csv", content: TINY_CSV })
      }),
      host
    );
    assert.equal(imported?.status, 200);
    const importBody = (await imported!.json()) as { unitId?: string; id?: string };
    const unitId = importBody.unitId || importBody.id;
    assert.ok(unitId);
    const importedSnap = collab.getLatestSnapshot(unitId);
    fake.snapshot = importedSnap?.data;

    const exported = await handleUniverFileHttp(
      new Request(ufUrl(key, "/export"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, format: "csv" })
      }),
      host
    );
    assert.ok(exported);
    assert.equal(exported.status, 200);
    const body = (await exported.json()) as { mediaType?: string; data?: string; byteSize?: number };
    assert.equal(typeof body.data, "string");
    assert.ok((body.data?.length ?? 0) > 0, "export csv must return bytes");
    assert.match(body.data ?? "", /hello/);
    assert.match(body.data ?? "", /qty/);
    assert.match(body.data ?? "", /alpha/);
    assert.match(body.data ?? "", /1/);
    assert.ok(Buffer.from(body.data ?? "").length > 0);
    assert.ok((body.byteSize ?? Buffer.from(body.data ?? "").length) > 0);
    assert.ok(
      fake.evaluatedExpressions.some((expression) => expression.includes("__univerExport")),
      "BROWSER must evaluate exchange-client export on /render"
    );
    assert.ok(r2.objects.size > 0, "export bytes must go through R2");
  });

  test("compile-svg mutates the collaborative snapshot without Chromium", async () => {
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const collab = createCollab();
    const snapshot = generateDefaultSnapshot(DEMO_UNIT_ID, 2, "Q3 Forecast") as Record<string, unknown>;
    collab.createUnit(DEMO_UNIT_ID, 2, "Q3 Forecast", snapshot);
    const before = JSON.stringify(collab.getLatestSnapshot(DEMO_UNIT_ID)?.data);
    const host = { db: admin.db, currentUser: user, collab };
    const key = fileKeyOf(DEMO_FILE);
    const created = await handleUniverFileHttp(new Request(ufUrl(key), { method: "POST" }), host);
    assert.equal(created?.status, 200);

    const compiled = await handleUniverFileHttp(
      new Request(ufUrl(key, "/compile-svg"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: DEMO_UNIT_ID, svg: TINY_SVG })
      }),
      host
    );
    assert.ok(compiled, "POST /compile-svg must be handled");
    assert.equal(compiled.status, 200);
    const afterSnap = collab.getLatestSnapshot(DEMO_UNIT_ID);
    assert.ok(afterSnap, "compile-svg must keep a snapshot");
    const after = JSON.stringify(afterSnap?.data);
    assert.notEqual(after, before, "compile-svg must mutate the collaborative snapshot");
    assert.match(after, /insertShape|setSolidFill/);
    assert.match(after, /4472c4|#4472c4/i);
    const exchangeSrc = readFileSync(EXCHANGE_SRC, "utf8");
    assert.match(exchangeSrc, /compileSvgToFacade/);
    assert.doesNotMatch(exchangeSrc, /from ["']node:fs["']/);
  });

  test("ChatAgent /uf import uses env.BROWSER and BLOB_BUCKET without injecting them on the handler", async () => {
    const { DshHost } = await import("../src/project/dsh-host.ts");
    const admin = await seededHost(null);
    const user = await admin.db.getUserById("user_admin");
    assert.ok(user);
    const token = generateSessionToken();
    await admin.db.createSession(user.id, token);
    const collab = createCollab();
    const fake = createFakeBrowser({ png: PNG_1x1, pdf: PDF_STUB });
    const r2 = createFakeR2();

    class KernelHost extends DshHost {
      override async ensureKernel() {
        return { get: (name: string) => (name === "collab" ? collab : undefined) } as never;
      }
    }

    const agent = new KernelHost(
      {
        id: { toString: () => "id_import", name: "univer_collab" },
        storage: { sql: { exec: () => ({ toArray: () => [] }) } },
        getWebSockets: () => [],
        acceptWebSocket: () => {}
      } as never,
      { DB: admin.d1, BROWSER: fake.browser, BLOB_BUCKET: r2.bucket }
    );

    const key = fileKeyOf(DEMO_FILE);
    const auth = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const created = await agent.fetch(new Request(ufUrl(key), { method: "POST", headers: auth }));
    assert.equal(created.status, 200);

    const imported = await agent.fetch(
      new Request(ufUrl(key, "/import"), {
        method: "POST",
        headers: auth,
        body: JSON.stringify({ format: "csv", content: TINY_CSV })
      })
    );
    assert.equal(imported.status, 200);
    const importBody = (await imported.json()) as { unitId?: string; id?: string };
    const unitId = importBody.unitId || importBody.id;
    assert.ok(unitId);
    const listed = await agent.fetch(new Request(ufUrl(key, "/units"), { headers: auth }));
    assert.equal(listed.status, 200);
    const listedBody = (await listed.json()) as { units?: Array<{ id?: string }> };
    assert.ok(listedBody.units?.some((unit) => unit.id === unitId));
    assert.ok(fake.evaluatedExpressions.some((expression) => expression.includes("__univerImport")));
    assert.ok(r2.objects.size > 0);
  });
});

function parseUniverRunExecuteArg(expression: string): string {
  const match = /window\.__univerRunExecute\(([\s\S]*)\)\s*$/.exec(expression.trim());
  if (!match) throw new Error("missing __univerRunExecute");
  return JSON.parse(match[1]);
}

function parseUniverExchangeArg(expression: string): Record<string, unknown> {
  const match = /window\.__univer(?:Import|Export)\(([\s\S]*)\)\s*$/.exec(expression.trim());
  if (!match) throw new Error("missing __univerImport/__univerExport");
  return JSON.parse(match[1]) as Record<string, unknown>;
}

function createFakeR2() {
  const objects = new Map<string, Uint8Array>();
  const bucket = {
    async put(key: string, value: ArrayBuffer | ArrayBufferView | string) {
      const bytes =
        typeof value === "string"
          ? new TextEncoder().encode(value)
          : value instanceof Uint8Array
            ? value
            : new Uint8Array(value as ArrayBuffer);
      objects.set(key, bytes);
      return {
        key,
        size: bytes.byteLength,
        etag: "etag",
        httpEtag: '"etag"',
        uploaded: new Date(),
        checksums: {},
        httpMetadata: {},
        customMetadata: {},
        writeHttpMetadata() {}
      };
    },
    async get(key: string) {
      const body = objects.get(key);
      if (!body) return null;
      return {
        body: body,
        size: body.byteLength,
        httpEtag: '"etag"',
        writeHttpMetadata() {}
      };
    },
    async head(key: string) {
      const body = objects.get(key);
      if (!body) return null;
      return { size: body.byteLength, httpEtag: '"etag"' };
    },
    async delete(key: string) {
      objects.delete(key);
    }
  };
  return { bucket: bucket as never, objects };
}

function createSnapshotFacade(snapshot: Record<string, unknown>) {
  const cloned = JSON.parse(JSON.stringify(snapshot || {})) as Record<string, unknown>;
  const workbook = ((cloned as { workbook?: Record<string, unknown> }).workbook ?? cloned) as {
    sheets?: Record<
      string,
      { id?: string; name?: string; cellData?: Record<string, Record<string, { v?: unknown; f?: string; t?: number }>> }
    >;
    sheetOrder?: string[];
  };
  const sheets = workbook.sheets ?? {};
  workbook.sheets = sheets;
  const activeSheetId = workbook.sheetOrder?.[0] || Object.keys(sheets)[0] || "sheet_1";
  if (!sheets[activeSheetId]) sheets[activeSheetId] = { id: activeSheetId, cellData: {} };
  const cellOf = (a1: string) => {
    const match = /^([A-Za-z]+)(\d+)$/.exec(String(a1).trim());
    if (!match) return { row: 0, col: 0 };
    const letters = match[1].toUpperCase();
    let col = 0;
    for (let i = 0; i < letters.length; i++) col = col * 26 + (letters.charCodeAt(i) - 64);
    return { row: Number(match[2]) - 1, col: col - 1 };
  };
  const cellAt = (a1: string) => {
    const sheet = sheets[activeSheetId];
    if (!sheet.cellData) sheet.cellData = {};
    const { row, col } = cellOf(a1);
    return { sheet, row, col };
  };
  return {
    getActiveWorkbook() {
      return {
        save: () => workbook,
        getSnapshot: () => workbook,
        getActiveSheet() {
          return {
            getSheetId: () => activeSheetId,
            getSheetName: () => String(sheets[activeSheetId]?.name ?? activeSheetId),
            getRange(a1: string) {
              return {
                setValue(value: unknown) {
                  const next =
                    value !== null && typeof value === "object"
                      ? { ...(value as Record<string, unknown>) }
                      : String(value).startsWith("=")
                        ? { f: String(value) }
                        : { v: value };
                  const { sheet, row, col } = cellAt(a1);
                  const rowKey = String(row);
                  if (!sheet.cellData) sheet.cellData = {};
                  if (!sheet.cellData[rowKey]) sheet.cellData[rowKey] = {};
                  sheet.cellData[rowKey][String(col)] = next as { v?: unknown; f?: string; t?: number };
                },
                getValue() {
                  const { sheet, row, col } = cellAt(a1);
                  return sheet.cellData?.[String(row)]?.[String(col)] ?? null;
                },
                getCellData() {
                  const { sheet, row, col } = cellAt(a1);
                  return sheet.cellData?.[String(row)]?.[String(col)] ?? null;
                }
              };
            }
          };
        }
      };
    },
    getFormula() {
      return {
        executeCalculation() {
          const sheet = sheets[activeSheetId];
          const cellData = sheet?.cellData ?? {};
          for (const cols of Object.values(cellData)) {
            if (!cols) continue;
            for (const [colKey, cell] of Object.entries(cols)) {
              const formula = typeof cell?.f === "string" ? cell.f.trim() : "";
              const sum = /^=SUM\(([A-Za-z]+\d+):([A-Za-z]+\d+)\)$/.exec(formula);
              if (!sum) continue;
              const start = cellOf(sum[1]);
              const end = cellOf(sum[2]);
              let total = 0;
              for (let r = Math.min(start.row, end.row); r <= Math.max(start.row, end.row); r++) {
                for (let c = Math.min(start.col, end.col); c <= Math.max(start.col, end.col); c++) {
                  const v = sheet.cellData?.[String(r)]?.[String(c)]?.v;
                  if (typeof v === "number") total += v;
                }
              }
              cols[colKey] = { ...cell, v: total };
            }
          }
        }
      };
    }
  };
}

function createFakeLoader() {
  const got: string[] = [];
  const loader = {
    get(name: string | null, getCode: () => unknown) {
      got.push(String(name));
      const spec = getCode() as { modules?: Record<string, string> };
      const source = spec?.modules?.["execute.js"] ?? "";
      return {
        fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
          const url = "data:text/javascript," + encodeURIComponent(source);
          const mod = (await import(url)) as { default: { fetch: (request: Request) => Promise<Response> } };
          const req = input instanceof Request ? input : new Request(input, init);
          return mod.default.fetch(req);
        }
      };
    }
  };
  return { loader, got };
}

function createFakeBrowser(opts: {
  png: string;
  pdf: string;
  evaluateFailures?: number;
  snapshot?: Record<string, unknown>;
  emptyExecute?: boolean;
}) {
  const cdpMethods: string[] = [];
  const navigated: string[] = [];
  const evaluatedExpressions: string[] = [];
  let evaluateAttempts = 0;
  let remainingEvaluateFailures = opts.evaluateFailures ?? 0;
  const fake = {
    browser: null as unknown as { fetch: typeof fetch },
    cdpMethods,
    navigated,
    evaluatedExpressions,
    evaluateAttempts: () => evaluateAttempts,
    get snapshot() {
      return opts.snapshot;
    },
    set snapshot(next: Record<string, unknown> | undefined) {
      opts.snapshot = next;
    }
  };

  function createSocket() {
    const listeners = new Map<string, Array<(event: { data?: string }) => void>>();
    return {
      accept() {},
      addEventListener(type: string, listener: (event: { data?: string }) => void) {
        const list = listeners.get(type) ?? [];
        list.push(listener);
        listeners.set(type, list);
      },
      send(raw: string) {
        const msg = JSON.parse(raw) as {
          id?: number;
          method?: string;
          params?: Record<string, unknown>;
        };
        const method = msg.method ?? "";
        cdpMethods.push(method);
        let result: Record<string, unknown> = {};
        if (method === "Target.attachToTarget") {
          result = { sessionId: "cdp-page" };
        } else if (method === "Page.navigate") {
          const url = typeof msg.params?.url === "string" ? msg.params.url : "";
          navigated.push(url);
        } else if (method === "Page.captureScreenshot") {
          result = { data: opts.png };
        } else if (method === "Page.printToPDF") {
          result = { data: opts.pdf };
        } else if (method === "Runtime.evaluate") {
          evaluateAttempts += 1;
          const expression = String(msg.params?.expression ?? "");
          evaluatedExpressions.push(expression);
          if (remainingEvaluateFailures > 0) {
            remainingEvaluateFailures -= 1;
            queueMicrotask(() => {
              for (const listener of listeners.get("message") ?? []) {
                listener({
                  data: JSON.stringify({
                    id: msg.id,
                    error: { message: "execution context destroyed" }
                  })
                });
              }
            });
            return;
          }
          if (expression.includes("__univerRunExecute")) {
            if (opts.emptyExecute) {
              result = { result: { value: { cells: [] } } };
            } else {
              const code = parseUniverRunExecuteArg(expression);
              void runUniverExecutePersist(createSnapshotFacade(opts.snapshot ?? {}), code).then(
                (value) => {
                  for (const listener of listeners.get("message") ?? []) {
                    listener({ data: JSON.stringify({ id: msg.id, result: { result: { value } } }) });
                  }
                },
                (err) => {
                  for (const listener of listeners.get("message") ?? []) {
                    listener({
                      data: JSON.stringify({
                        id: msg.id,
                        error: { message: err instanceof Error ? err.message : String(err) }
                      })
                    });
                  }
                }
              );
              return;
            }
          } else if (expression.includes("__univerImport") || expression.includes("__univerExport")) {
            void (async () => {
              const { runUniverImport, runUniverExport } = await import(
                "../apps/workspace/web/src/render-exchange-csv.ts"
              );
              if (expression.includes("__univerImport")) {
                return runUniverImport(parseUniverExchangeArg(expression));
              }
              return runUniverExport(parseUniverExchangeArg(expression));
            })().then(
              (value) => {
                for (const listener of listeners.get("message") ?? []) {
                  listener({ data: JSON.stringify({ id: msg.id, result: { result: { value } } }) });
                }
              },
              (err) => {
                for (const listener of listeners.get("message") ?? []) {
                  listener({
                    data: JSON.stringify({
                      id: msg.id,
                      error: { message: err instanceof Error ? err.message : String(err) }
                    })
                  });
                }
              }
            );
            return;
          } else if (expression.includes("univerAPI")) {
            result = { result: { value: true } };
          } else {
            result = { result: { value: { findings: [] } } };
          }
        }
        queueMicrotask(() => {
          for (const listener of listeners.get("message") ?? []) {
            listener({ data: JSON.stringify({ id: msg.id, result }) });
          }
        });
      },
      close() {}
    };
  }

  const browser = {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      const path = (() => {
        try {
          return new URL(url).pathname;
        } catch {
          return url;
        }
      })();
      const upgrade = new Headers(init?.headers).get("Upgrade");
      if (method === "POST" && path === "/v1/devtools/browser") {
        return new Response(
          JSON.stringify({
            sessionId: "mock-session",
            targets: [{ id: "mock-target", type: "page", url: "about:blank" }]
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (path.endsWith("/json/list")) {
        return new Response(JSON.stringify([{ id: "mock-target", type: "page" }]), {
          headers: { "Content-Type": "application/json" }
        });
      }
      if (upgrade === "websocket" || (method === "GET" && /\/v1\/devtools\/browser\/[^/]+$/.test(path))) {
        return { ok: true, webSocket: createSocket() } as unknown as Response;
      }
      if (method === "DELETE") {
        return new Response(null, { status: 204 });
      }
      return new Response("not found", { status: 404 });
    }
  };

  fake.browser = browser as never;
  return fake;
}

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
