import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { createMockD1 } from "./mock-d1.ts";

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

function createMockEnv() {
  const d1 = createMockD1();
  const chatAgentFetches: string[] = [];

  const mockChatAgent: any = {
    fetches: chatAgentFetches,
    lastHeaders: {} as Record<string, string>,
    lastNotifyBody: null as unknown,
    unitRevs: {} as Record<string, number>,
    comparisonTotals: {} as Record<string, number>,
    idFromName: (name: string) => ({ toString: () => `id_${name}`, name }),
    get: (id: any) => ({
      fetch: async (req: Request) => {
        const url = new URL(req.url);
        chatAgentFetches.push(`${req.method} ${url.pathname}`);
        mockChatAgent.lastHeaders = {
          userId: req.headers.get("x-workspace-user-id") || "",
          actorId: req.headers.get("x-workspace-actor-id") || ""
        };
        if (url.pathname === "/api/health") {
          return new Response(JSON.stringify({ status: "healthy", id: id.toString() }), {
            headers: { "Content-Type": "application/json" }
          });
        }
        if (url.pathname === "/internal/worktrees-changed") {
          mockChatAgent.lastNotifyBody = await req.json().catch(() => ({}));
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" }
          });
        }
        if (
          url.pathname === "/internal/collab/clone" ||
          url.pathname === "/internal/collab/copy-snapshot" ||
          url.pathname === "/internal/collab/ensure"
        ) {
          const body = (await req.json().catch(() => ({}))) as any;
          return new Response(
            JSON.stringify({
              copied: true,
              fromUnitId: body.fromUnitId,
              toUnitId: body.toUnitId,
              unitId: body.unitId || body.toUnitId,
              rev: 1,
              type: body.type ?? 2
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        }
        if (url.pathname === "/internal/collab/unit") {
          const unitId = url.searchParams.get("unitId") || "";
          return new Response(
            JSON.stringify({
              unitId,
              rev: mockChatAgent.unitRevs[unitId] ?? 1,
              type: 2
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        }
        const comparisonMatch = url.pathname.match(
          /^\/universer-api\/worktrees\/[^/]+\/units\/([^/]+)\/comparison$/
        );
        if (comparisonMatch) {
          const unitId = decodeURIComponent(comparisonMatch[1]);
          const total = mockChatAgent.comparisonTotals[unitId] ?? 0;
          return new Response(
            JSON.stringify({
              result: {
                summary: { total, insert: 0, delete: 0, update: total, moved: 0 },
                items: total
                  ? [{ id: `${unitId}:A1`, kind: "update", entityType: "cell", title: "A1" }]
                  : []
              },
              left: { revision: 1 },
              right: { revision: mockChatAgent.unitRevs[unitId] ?? 1 }
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        }
        if (url.pathname.startsWith("/universer-api/")) {
          return new Response(JSON.stringify({ error: { code: 1, message: "" }, snapshot: {} }), {
            headers: { "Content-Type": "application/json" }
          });
        }
        return new Response("ChatAgent response", { status: 200 });
      }
    })
  };

  const mockWorkspaceDO: any = {
    idFromName: (name: string) => ({ toString: () => `ws_${name}`, name }),
    get: (_id: any) => ({
      fetch: async (req: Request) => {
        const url = new URL(req.url);
        if (url.pathname.includes("/live") || url.pathname.includes("/presence")) {
          return new Response(JSON.stringify({ status: "connected", activeUsers: [] }), {
            headers: { "Content-Type": "application/json" }
          });
        }
        return new Response("WorkspaceDO response", { status: 200 });
      }
    })
  };

  return {
    DB: d1,
    ChatAgent: mockChatAgent,
    WorkspaceDO: mockWorkspaceDO
  };
}

function sessionCookie(res: Response): string {
  const raw = res.headers.get("Set-Cookie") ?? "";
  const match = raw.match(/workspace_session=([^;]+)/);
  assert.ok(match, "workspace_session cookie must be present");
  return `workspace_session=${match[1]}`;
}

describe("Worktree product gateway (clone, ready, merge)", async () => {
  const { default: worker } = await import("../src/server.ts");

  test("clone stays isolated until Ready merge; merge without Ready is 403", async () => {
    const env = createMockEnv();
    const register = (username: string, displayName: string) =>
      worker.fetch(
        new Request("https://workspace.edge/api/auth/password/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, displayName, password: "supersecret123" })
        }),
        env as any,
        {} as any
      );

    const ownerRes = await register("dana", "Dana Owner");
    const ownerCookie = sessionCookie(ownerRes);
    const ownerSession = await (
      await worker.fetch(new Request("https://workspace.edge/api/session", { headers: { Cookie: ownerCookie } }), env as any, {} as any)
    ).json();

    const spaces = await (
      await worker.fetch(new Request("https://workspace.edge/api/spaces", { headers: { Cookie: ownerCookie } }), env as any, {} as any)
    ).json();
    const spaceId = spaces.spaces[0].id;
    const created = await (
      await worker.fetch(
        new Request("https://workspace.edge/api/resources", {
          method: "POST",
          headers: { "Content-Type": "application/json", Cookie: ownerCookie },
          body: JSON.stringify({ spaceId, name: "Shared Forecast", unitType: "sheet" })
        }),
        env as any,
        {} as any
      )
    ).json();

    const waitUntilTasks: Promise<unknown>[] = [];
    const ctx = {
      waitUntil(task: Promise<unknown>) {
        waitUntilTasks.push(task);
      }
    } as any;
    const wtRes = await worker.fetch(
      new Request("https://workspace.edge/api/worktrees", {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: ownerCookie },
        body: JSON.stringify({ name: "Review draft" })
      }),
      env as any,
      ctx
    );
    assert.equal(wtRes.status, 201);
    const createdWt = await wtRes.json();
    assert.equal(createdWt.capabilities.markReady, true);
    assert.equal(createdWt.capabilities.merge, false);
    assert.equal(createdWt.state, "draft");

    const addUnit = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/units`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: ownerCookie },
        body: JSON.stringify({ source: "trunk", resourceId: created.resource.id })
      }),
      env as any,
      ctx
    );
    assert.equal(addUnit.status, 201);
    const added = await addUnit.json();
    assert.equal(added.unit.change, "unchanged");
    assert.equal(added.unit.mergeResult, "pending");
    assert.ok(env.ChatAgent.fetches.includes("POST /internal/collab/clone"));

    const prematureMerge = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/merge`, {
        method: "POST",
        headers: { Cookie: ownerCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(prematureMerge.status, 403);
    assert.ok(!env.ChatAgent.fetches.includes("POST /internal/collab/copy-snapshot"));

    const ready = await (
      await worker.fetch(
        new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/ready`, {
          method: "POST",
          headers: { Cookie: ownerCookie }
        }),
        env as any,
        {} as any
      )
    ).json();
    assert.equal(ready.worktree.state, "ready");
    assert.equal(ready.worktree.capabilities.merge, true);

    const merged = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/merge`, {
        method: "POST",
        headers: { Cookie: ownerCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(merged.status, 200);
    const mergedBody = await merged.json();
    assert.equal(mergedBody.worktree.state, "merged");
    assert.ok(env.ChatAgent.fetches.includes("POST /internal/collab/copy-snapshot"));

    const snapRes = await worker.fetch(
      new Request(
        `https://workspace.edge/universer-api/worktrees/${createdWt.id}/snapshot/2/unit/${added.unit.unitId}/rev/0`,
        { headers: { Cookie: ownerCookie } }
      ),
      env as any,
      {} as any
    );
    assert.equal(snapRes.status, 200);
    assert.equal(env.ChatAgent.lastHeaders.userId, ownerSession.user.id);
    assert.equal(env.ChatAgent.lastHeaders.actorId, ownerSession.user.id);

    await Promise.all(waitUntilTasks);
    assert.equal(
      (env.ChatAgent.lastNotifyBody as { audienceUserIds?: string[] } | null)?.audienceUserIds?.[0],
      ownerSession.user.id
    );
  });

  test("non-creator cannot Ready / Reopen / Discard / add-unit / PATCH; GET requires review", async () => {
    const env = createMockEnv();
    const register = (username: string, displayName: string) =>
      worker.fetch(
        new Request("https://workspace.edge/api/auth/password/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, displayName, password: "supersecret123" })
        }),
        env as any,
        {} as any
      );

    const ownerRes = await register("owner-caps", "Dana Owner");
    const ownerCookie = sessionCookie(ownerRes);
    const otherRes = await register("other-caps", "Pat Other");
    const otherCookie = sessionCookie(otherRes);

    const spaces = await (
      await worker.fetch(new Request("https://workspace.edge/api/spaces", { headers: { Cookie: ownerCookie } }), env as any, {} as any)
    ).json();
    const spaceId = spaces.spaces[0].id;
    const created = await (
      await worker.fetch(
        new Request("https://workspace.edge/api/resources", {
          method: "POST",
          headers: { "Content-Type": "application/json", Cookie: ownerCookie },
          body: JSON.stringify({ spaceId, name: "Forecast", unitType: "sheet" })
        }),
        env as any,
        {} as any
      )
    ).json();

    const wtRes = await worker.fetch(
      new Request("https://workspace.edge/api/worktrees", {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: ownerCookie },
        body: JSON.stringify({ name: "Owner draft" })
      }),
      env as any,
      {} as any
    );
    assert.equal(wtRes.status, 201);
    const createdWt = await wtRes.json();
    assert.equal(createdWt.capabilities.review, true);
    assert.equal(createdWt.capabilities.editDraft, true);
    assert.equal(createdWt.capabilities.addUnit, true);
    assert.equal(createdWt.capabilities.markReady, true);
    assert.equal(createdWt.capabilities.discard, true);
    assert.equal(createdWt.capabilities.reopen, false);

    const ownerGet = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, { headers: { Cookie: ownerCookie } }),
      env as any,
      {} as any
    );
    assert.equal(ownerGet.status, 200);

    const otherGet = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, { headers: { Cookie: otherCookie } }),
      env as any,
      {} as any
    );
    assert.equal(otherGet.status, 404);

    const otherPatch = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Cookie: otherCookie },
        body: JSON.stringify({ name: "Hijacked draft" })
      }),
      env as any,
      {} as any
    );
    assert.equal(otherPatch.status, 403);

    const otherAdd = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/units`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: otherCookie },
        body: JSON.stringify({ source: "trunk", resourceId: created.resource.id })
      }),
      env as any,
      {} as any
    );
    assert.equal(otherAdd.status, 403);

    const otherReady = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/ready`, {
        method: "POST",
        headers: { Cookie: otherCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(otherReady.status, 403);

    const stillDraft = await (
      await worker.fetch(
        new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, { headers: { Cookie: ownerCookie } }),
        env as any,
        {} as any
      )
    ).json();
    assert.equal(stillDraft.worktree.state, "draft");
    assert.equal(stillDraft.worktree.name, "Owner draft");
    assert.equal(stillDraft.worktree.unitCount, 0);

    const ownerPatch = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Cookie: ownerCookie },
        body: JSON.stringify({ name: "Owner draft renamed" })
      }),
      env as any,
      {} as any
    );
    assert.equal(ownerPatch.status, 200);

    const ownerAdd = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/units`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: ownerCookie },
        body: JSON.stringify({ source: "trunk", resourceId: created.resource.id })
      }),
      env as any,
      {} as any
    );
    assert.equal(ownerAdd.status, 201);

    const ownerReady = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/ready`, {
        method: "POST",
        headers: { Cookie: ownerCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(ownerReady.status, 200);
    const readyBody = await ownerReady.json();
    assert.equal(readyBody.worktree.state, "ready");
    assert.equal(readyBody.worktree.capabilities.merge, true);
    assert.equal(readyBody.worktree.capabilities.reopen, true);
    assert.equal(readyBody.worktree.capabilities.editDraft, false);
    assert.equal(readyBody.worktree.capabilities.markReady, false);

    const otherReopen = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/reopen`, {
        method: "POST",
        headers: { Cookie: otherCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(otherReopen.status, 403);

    const otherDiscard = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/discard`, {
        method: "POST",
        headers: { Cookie: otherCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(otherDiscard.status, 403);

    const otherMerge = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/merge`, {
        method: "POST",
        headers: { Cookie: otherCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(otherMerge.status, 403);

    const stillReady = await (
      await worker.fetch(
        new Request(`https://workspace.edge/api/worktrees/${createdWt.id}`, { headers: { Cookie: ownerCookie } }),
        env as any,
        {} as any
      )
    ).json();
    assert.equal(stillReady.worktree.state, "ready");

    const ownerReopen = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/reopen`, {
        method: "POST",
        headers: { Cookie: ownerCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(ownerReopen.status, 200);
    const reopened = await ownerReopen.json();
    assert.equal(reopened.worktree.state, "draft");

    const ownerDiscard = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${createdWt.id}/discard`, {
        method: "POST",
        headers: { Cookie: ownerCookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(ownerDiscard.status, 200);
    const discarded = await ownerDiscard.json();
    assert.equal(discarded.worktree.state, "discarded");
    assert.equal(discarded.worktree.capabilities.discard, false);
  });

  test("unit badge is modified when collab draft head is ahead of clone baseline", async () => {
    const env = createMockEnv();
    const setup = await createClonedWorktree(worker, env);
    env.ChatAgent.unitRevs[setup.draftUnitId] = 4;

    const detailRes = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${setup.worktreeId}`, {
        headers: { Cookie: setup.cookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(detailRes.status, 200);
    const detail = await detailRes.json();
    assert.equal(detail.worktree.units[0].change, "modified");
    assert.equal(detail.worktree.units[0].draftHeadRevision, 4);
  });

  test("unit badge is modified when snapshot comparison has diffs even if D1 revision is stale", async () => {
    const env = createMockEnv();
    const setup = await createClonedWorktree(worker, env);
    env.ChatAgent.comparisonTotals[setup.draftUnitId] = 1;

    const detailRes = await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${setup.worktreeId}`, {
        headers: { Cookie: setup.cookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(detailRes.status, 200);
    const detail = await detailRes.json();
    assert.equal(detail.worktree.units[0].change, "modified");
  });
});

async function createClonedWorktree(worker: { fetch: (...args: any[]) => Promise<Response> }, env: ReturnType<typeof createMockEnv>) {
  const ownerRes = await worker.fetch(
    new Request("https://workspace.edge/api/auth/password/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: `badge-${crypto.randomUUID().slice(0, 8)}`, displayName: "Badge", password: "supersecret123" })
    }),
    env as any,
    {} as any
  );
  const cookie = sessionCookie(ownerRes);
  const spaces = await (
    await worker.fetch(new Request("https://workspace.edge/api/spaces", { headers: { Cookie: cookie } }), env as any, {} as any)
  ).json();
  const created = await (
    await worker.fetch(
      new Request("https://workspace.edge/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: cookie },
        body: JSON.stringify({ spaceId: spaces.spaces[0].id, name: "Welcome Sheet", unitType: "sheet" })
      }),
      env as any,
      {} as any
    )
  ).json();
  const wt = await (
    await worker.fetch(
      new Request("https://workspace.edge/api/worktrees", {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: cookie },
        body: JSON.stringify({ name: "Agent draft" })
      }),
      env as any,
      {} as any
    )
  ).json();
  const added = await (
    await worker.fetch(
      new Request(`https://workspace.edge/api/worktrees/${wt.id}/units`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Cookie: cookie },
        body: JSON.stringify({ source: "trunk", resourceId: created.resource.id })
      }),
      env as any,
      {} as any
    )
  ).json();
  assert.equal(added.unit.change, "unchanged");
  return { cookie, worktreeId: wt.id as string, draftUnitId: added.unit.unitId as string };
}
