import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import { createMockD1 } from "./mock-d1.ts";
import { seedControlPlane } from "../src/control-plane/schema.ts";
import { ControlPlaneDb } from "../src/control-plane/db.ts";
import { handleControlPlaneRoutes, resolveGatewayContext } from "../src/control-plane/gateway.ts";
import { attachActorHeaders, requiresWorkspaceAuth } from "../src/control-plane/actor.ts";
import { ActionService } from "../src/kernel/action.ts";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { registerFacadeActions } from "../src/plugins/univer-facade-actions.ts";
import { handleAgentHttp } from "../src/plugins/univer-agent.ts";
import { handleUniverserHttp } from "../src/integrations/univer-collab-http.ts";
import { readCollaboratorIdentity } from "../src/integrations/univer-protocol.ts";
import { getSheetCell } from "../src/plugins/univer-snapshot.ts";
import {
  LiveWorkspaceUnit,
  WorkspaceHttp,
  loginWithPassword,
} from "../packages/client-core/src/live.ts";

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
      const rows = stmt.all(...(binds as any[]));
      return { toArray: () => rows as Record<string, unknown>[] };
    }
  };
}

describe("Live AI collaboration (auth + Universer OT + agent turn)", () => {
  test("admin logs in, opens the welcome unit, writes A1, and appears in history", async () => {
    const d1 = createMockD1();
    await seedControlPlane(d1);
    const db = new ControlPlaneDb(d1);
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    const tickets = new Map<string, { userID: string; name: string; avatar?: string; expiresAt: number }>();
    const origin = "https://workspace.test";

    const fetcher: typeof fetch = async (input, init) => {
      const request = new Request(input, init);
      const url = new URL(request.url);
      const gwCtx = await resolveGatewayContext(request, db);
      if (url.pathname.startsWith("/api/") && !url.pathname.startsWith("/api/actions")) {
        const routed = await handleControlPlaneRoutes(request, gwCtx, url);
        if (routed) return routed;
      }
      if (requiresWorkspaceAuth(request.method, url.pathname) && !gwCtx.currentUser) {
        return Response.json({ error: { message: "Authentication required" } }, { status: 401 });
      }
      let forwarded = request;
      if (gwCtx.currentUser) {
        forwarded = attachActorHeaders(request, gwCtx.currentUser);
      }
      const identity = readCollaboratorIdentity(forwarded);
      if (url.pathname.startsWith("/universer-api/")) {
        return (
          (await handleUniverserHttp(forwarded, {
            collab,
            identity,
            mintSessionTicket(issued) {
              const ticket = `ticket_${tickets.size + 1}`;
              tickets.set(ticket, { ...issued, expiresAt: Date.now() + 60_000 });
              return ticket;
            }
          })) ?? Response.json({ error: { message: "not found" } }, { status: 404 })
        );
      }
      if (url.pathname.startsWith("/agents")) {
        return (
          (await handleAgentHttp(forwarded, { kernel: ctx, actor: gwCtx.currentUser
            ? { userId: gwCtx.currentUser.id, name: gwCtx.currentUser.display_name, username: gwCtx.currentUser.username }
            : null })) ?? Response.json({ error: { message: "not found" } }, { status: 404 })
        );
      }
      return Response.json({ error: { message: `Not found: ${url.pathname}` } }, { status: 404 });
    };

    const anonymous = new WorkspaceHttp({ origin, role: "client", fetcher });
    const auth = await loginWithPassword(anonymous, { username: "admin", password: "password123" });
    assert.equal(auth.subject.id, "user_admin");
    assert.equal(auth.subject.name, "Avery Chen");
    assert.match(auth.cookie, /^workspace_session=/);

    const http = new WorkspaceHttp({ origin, cookie: auth.cookie, role: "client", fetcher });
    const unit = new LiveWorkspaceUnit(http, { subject: auth.subject });
    const opened = await unit.open({ unitId: "unit_welcome_sheet", unitType: "sheet" });
    assert.ok(opened.rev >= 1);

    const written = await unit.setRange({
      unitId: "unit_welcome_sheet",
      cells: [{ a1: "A1", value: "Hello from AI" }]
    });
    assert.equal(written.committed, true);
    assert.ok(written.revision >= 2);
    assert.equal(written.cells[0]?.[0]?.v, "Hello from AI");

    const stored = collab.getLatestSnapshot("unit_welcome_sheet");
    assert.ok(stored);
    assert.equal(getSheetCell(stored.data, "A1")?.v, "Hello from AI");

    const history = await unit.history("unit_welcome_sheet");
    assert.ok(history.length >= 1);
    assert.ok(history.some((entry) => entry.userId === "user_admin" || entry.rev === written.revision));

    const turn = await unit.runAgentTurn({
      unitId: "unit_welcome_sheet",
      prompt: "Set B1 to Live collab"
    });
    assert.match(turn.text, /Wrote B1=/);
    assert.equal(turn.actor?.userId, "user_admin");
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_welcome_sheet")!.data, "B1")?.v, "Live collab");

    const ticket = await unit.client().sessionTicket();
    assert.ok(ticket.startsWith("ticket_"));
  });
});
