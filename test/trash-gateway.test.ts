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
  const stub = {
    idFromName: (name: string) => ({ toString: () => `id_${name}`, name }),
    get: () => ({
      fetch: async () =>
        new Response(JSON.stringify({ ok: true }), {
          headers: { "Content-Type": "application/json" }
        })
    })
  };
  return {
    DB: d1,
    ChatAgent: stub,
    WorkspaceDO: stub
  };
}

function sessionCookie(res: Response): string {
  const raw = res.headers.get("Set-Cookie") ?? "";
  const match = raw.match(/workspace_session=([^;]+)/);
  assert.ok(match, "workspace_session cookie must be present");
  return `workspace_session=${match[1]}`;
}

describe("Trash list OpenAPI contract", async () => {
  const { default: worker } = await import("../src/server.ts");

  async function signedIn() {
    const env = createMockEnv();
    const register = await worker.fetch(
      new Request("https://workspace.edge/api/auth/password/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "trash-owner",
          displayName: "Trash Owner",
          password: "supersecret123"
        })
      }),
      env as any,
      {} as any
    );
    const cookie = sessionCookie(register);
    const spaces = await (
      await worker.fetch(
        new Request("https://workspace.edge/api/spaces", { headers: { Cookie: cookie } }),
        env as any,
        {} as any
      )
    ).json();
    return { env, cookie, spaceId: spaces.spaces[0].id as string };
  }

  test("empty trash lists items not trashBatches", async () => {
    const { env, cookie, spaceId } = await signedIn();
    const res = await worker.fetch(
      new Request(`https://workspace.edge/api/spaces/${spaceId}/trash`, {
        headers: { Cookie: cookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.trashBatches, undefined);
    assert.ok(Array.isArray(body.items));
    assert.equal(body.items.length, 0);
    assert.equal(body.nextCursor, null);
  });

  test("trashed sheet appears as a TrashBatchView item", async () => {
    const { env, cookie, spaceId } = await signedIn();
    const created = await (
      await worker.fetch(
        new Request("https://workspace.edge/api/resources", {
          method: "POST",
          headers: { "Content-Type": "application/json", Cookie: cookie },
          body: JSON.stringify({ spaceId, name: "Old Forecast", unitType: "sheet" })
        }),
        env as any,
        {} as any
      )
    ).json();
    const nodeId = created.node.id as string;
    const trashed = await worker.fetch(
      new Request(`https://workspace.edge/api/nodes/${nodeId}/trash`, {
        method: "POST",
        headers: { Cookie: cookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(trashed.status, 200);

    const res = await worker.fetch(
      new Request(`https://workspace.edge/api/spaces/${spaceId}/trash`, {
        headers: { Cookie: cookie }
      }),
      env as any,
      {} as any
    );
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.items.length, 1);
    const item = body.items[0];
    assert.equal(item.root.id, nodeId);
    assert.equal(item.root.name, "Old Forecast");
    assert.equal(item.root.resource.kind, "univer");
    assert.equal(item.root.resource.unitType, "sheet");
    assert.equal(item.spaceId, spaceId);
    assert.equal(item.nodeCount, 1);
    assert.equal(item.capabilities.restore, true);
    assert.equal(item.capabilities.removePermanently, true);
    assert.equal(item.restoreBlockedBy, null);
    assert.equal(item.removeBlockedBy, null);
    assert.equal(item.trashedBy.username, "trash-owner");
    assert.ok(typeof item.trashedAt === "string");
    assert.ok(Array.isArray(item.originalLocation.breadcrumbs));
  });
});
