/**
 * ChatAgent Durable Object (DshHost) — Cloudflare Durable Object hosting Cordis Microkernel.
 * Manages Hibernatable WebSockets, 4-Channel Mux Protocol, Official Univer OT Collaboration Protocol,
 * and Reversible Agent Actions.
 */
import { HostBase } from "./host/host-base.ts";
import type { UniverCollabService } from "../plugins/univer-collab.ts";
import type { ActionService } from "../kernel/action.ts";
import { generateDefaultSnapshot } from "../plugins/univer-default-snapshots.ts";
import {
  CLI_WROTE_CELLS,
  WORKTREE_CHANGE_FEED_PATH,
  WORKTREE_CHANGE_FEED_READY,
  WORKTREE_CHANGE_FEED_TAG,
  WORKTREE_CHANGE_NOTIFY_PATH,
  isUfExecuteCommit,
  worktreeFeedNotifyPayload
} from "../integrations/worktree-change-feed.ts";
import {
  buildHistoryChangesetsBody,
  buildHistoryCreatorsBody,
  buildHistoryListBody,
  parsePositiveInt
} from "../integrations/univer-history.ts";
import {
  CombCmd,
  CmdRspCode,
  decodeCombFrame,
  encodeCombFrame,
  encodeCombJson,
  type CombFrame
} from "../integrations/univer-comb-codec.ts";
import { ControlPlaneDb } from "../control-plane/db.ts";
import { resolveGatewayContext } from "../control-plane/gateway.ts";
import { handleUniverserHttp } from "../integrations/univer-collab-http.ts";
import { handleUniverFileHttp } from "../integrations/univer-file-http.ts";
import { R2BlobStore } from "../integrations/r2-blob-store.ts";
import { AGENT_MEMBER_ID, AGENT_USER_ID, AGENT_USER_NAME } from "../plugins/univer-facade-actions.ts";
import { actorFromRequest, type WorkspaceActor } from "../control-plane/actor.ts";
import {
  handleAgentHttp,
  handleAgentMuxPrompt,
  muxFrame
} from "../plugins/univer-agent.ts";

export interface CollabMemberAttachment {
  kind?: "comb";
  memberID: string;
  userID: string;
  name: string;
  rooms: string[];
  wire?: "protobuf" | "json";
}

export interface WorktreeFeedAttachment {
  kind: "worktree-feed";
  userID: string;
}

function agentPeerMember(): { memberID: string; userID: string; name: string; avatar: string } {
  return {
    memberID: AGENT_MEMBER_ID,
    userID: AGENT_USER_ID,
    name: AGENT_USER_NAME,
    avatar: ""
  };
}

function isAgentPeer(member: { memberID?: string; userID?: string } | null | undefined): boolean {
  return member?.memberID === AGENT_MEMBER_ID || member?.userID === AGENT_USER_ID;
}

function agentUsersEnter(roomID: string): CombFrame {
  return {
    cmd: CombCmd.RECV,
    code: CmdRspCode.OK,
    reason: "success",
    routeKey: roomID,
    collaMsg: {
      eventID: "users_enter",
      joinEvent: agentPeerMember()
    }
  };
}

function cursorSelectionFromChangeset(
  changeset: Record<string, unknown>
): { startRow: number; startColumn: number; endRow: number; endColumn: number } | null {
  const mutations = changeset.mutations;
  if (!Array.isArray(mutations)) return null;
  for (const mutation of mutations) {
    if (!mutation || typeof mutation !== "object") continue;
    const id = (mutation as { id?: unknown }).id;
    if (id !== "sheet.mutation.set-range-values") continue;
    const params = (mutation as { params?: { cellValue?: Record<string, Record<string, unknown>> } }).params;
    const cellValue = params?.cellValue;
    if (!cellValue || typeof cellValue !== "object") continue;
    for (const [rowKey, cols] of Object.entries(cellValue)) {
      const row = Number(rowKey);
      if (!Number.isFinite(row) || !cols || typeof cols !== "object") continue;
      const colKey = Object.keys(cols)[0];
      if (colKey == null) continue;
      const col = Number(colKey);
      if (!Number.isFinite(col)) continue;
      return { startRow: row, startColumn: col, endRow: row, endColumn: col };
    }
  }
  return null;
}

export class DshHost extends HostBase<any> {
  private sessionTickets = new Map<string, { userID: string; name: string; expiresAt: number }>();

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // 1. WebSocket Upgrade handling for /universer-api/comb/connect or /api/remote.mux
    if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      if (url.pathname === "/universer-api/comb/connect") {
        const ticket = this.consumeSessionTicket(url.searchParams.get("sessionTicket") || "");
        const memberID = crypto.randomUUID();

        const attachment: CollabMemberAttachment = {
          kind: "comb",
          memberID,
          userID: ticket.userID,
          name: ticket.name,
          rooms: []
        };
        server.serializeAttachment(attachment);

        this.acceptWebSocket(server, ["comb", `member:${memberID}`]);

        return new Response(null, {
          status: 101,
          webSocket: client
        });
      }

      if (url.pathname === WORKTREE_CHANGE_FEED_PATH) {
        const ticket = this.consumeSessionTicket(url.searchParams.get("sessionTicket") || "");
        const attachment: WorktreeFeedAttachment = {
          kind: "worktree-feed",
          userID: ticket.userID
        };
        server.serializeAttachment(attachment);
        this.acceptWebSocket(server, [WORKTREE_CHANGE_FEED_TAG, `user:${ticket.userID}`]);
        try {
          server.send(JSON.stringify(WORKTREE_CHANGE_FEED_READY));
        } catch {}

        return new Response(null, {
          status: 101,
          webSocket: client
        });
      }

      // Default Mux WebSocket upgrade
      const tags = ["mux"];
      const unitId = url.searchParams.get("unitId") || url.searchParams.get("docId");
      if (unitId) tags.push(`unit:${unitId}`);

      this.acceptWebSocket(server, tags);

      try {
        const kernel = await this.ensureKernel();
        await kernel.emit("client/connect", { ws: server, tags });
      } catch (err) {
        console.error("Failed to notify kernel of connect:", err);
      }

      return new Response(null, {
        status: 101,
        webSocket: client
      });
    }

    // 2. Health & Diagnostic endpoint
    if (url.pathname === "/api/health" || url.pathname === "/api/status") {
      try {
        const kernel = await this.ensureKernel();
        return new Response(
          JSON.stringify({
            status: "healthy",
            durableObject: (this.ctx as any).id?.toString(),
            name: (this.ctx as any).id?.name ?? "default",
            timestamp: Date.now()
          }),
          {
            headers: { "Content-Type": "application/json" }
          }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({
            status: "degraded",
            error: err instanceof Error ? err.message : String(err)
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }

    // 3. Univer Collaboration & Protocol Endpoints (/universer-api/*)
    if (url.pathname.startsWith("/universer-api/")) {
      const kernel = await this.ensureKernel();
      const collab = kernel.get("collab") as UniverCollabService | undefined;

      const commentIdentity = {
        userID:
          request.headers.get("x-workspace-user-id")?.trim() ||
          request.headers.get("x-workspace-actor-id")?.trim() ||
          "user_admin",
        name:
          request.headers.get("x-workspace-user-name")?.trim() ||
          request.headers.get("x-workspace-actor-name")?.trim() ||
          "Avery Chen",
        avatar: request.headers.get("x-workspace-user-avatar")?.trim() || ""
      };
      const commentRes = await handleUniverserHttp(request, {
        kernel,
        collab,
        identity: commentIdentity,
        sql: this.getSqlExec()
      });
      if (commentRes) return commentRes;

      // GET /universer-api/user
      if (url.pathname === "/universer-api/user" && request.method === "GET") {
        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            user: {
              id: "user_admin",
              name: "Administrator",
              avatar: ""
            }
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // GET /universer-api/user/session-ticket
      if (url.pathname === "/universer-api/user/session-ticket" && request.method === "GET") {
        const ticket = `ticket_${crypto.randomUUID()}`;
        this.sessionTickets.set(ticket, {
          userID: "user_admin",
          name: "Administrator",
          expiresAt: Date.now() + 300_000
        });

        // Purge expired tickets
        const now = Date.now();
        for (const [k, v] of this.sessionTickets.entries()) {
          if (v.expiresAt <= now) this.sessionTickets.delete(k);
        }

        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            ticket
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // POST /universer-api/authz/-/object/-/batch_allowed
      if (url.pathname === "/universer-api/authz/-/object/-/batch_allowed" && request.method === "POST") {
        const body = (await request.json().catch(() => ({}))) as any;
        const requests = Array.isArray(body.requests) ? body.requests : [];
        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            objectActions: requests.map(() => [1, 2, 3, 4])
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // POST /universer-api/authz/:objectType/object/:objectId/allowed
      if (url.pathname.includes("/allowed") && request.method === "POST") {
        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            actions: [1, 2, 3, 4]
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // GET /universer-api/snapshot/:type/unit/:unitID[/rev/:revision]
      const snapshotRevMatch = url.pathname.match(
        /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)(?:\/rev\/([^/]+))?$/
      );
      if (snapshotRevMatch && request.method === "GET") {
        const typeNum = parseInt(snapshotRevMatch[1], 10) || 2;
        const unitID = snapshotRevMatch[2];
        const rev = parseInt(snapshotRevMatch[3] || "0", 10);

        let snapshot = collab?.getLatestSnapshot(unitID);
        if (!snapshot) {
          const defaultSnap = generateDefaultSnapshot(unitID, typeNum);
          collab?.createUnit(unitID, typeNum, (defaultSnap as any).workbook?.name || (defaultSnap as any).doc?.name || "Document", defaultSnap);
          snapshot = { rev: 1, data: defaultSnap };
        }

        const changesets = collab?.getChangesetsSince(unitID, rev || snapshot.rev) ?? [];

        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            snapshot: snapshot.data,
            changesets
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // GET /universer-api/snapshot/:type/unit/:unitID/fetchmissing
      const fetchMissingMatch = url.pathname.match(/^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)\/fetchmissing$/);
      if (fetchMissingMatch && request.method === "GET") {
        const unitID = fetchMissingMatch[2];
        const from = parseInt(url.searchParams.get("from") || "0", 10);
        const to = url.searchParams.get("to") ? parseInt(url.searchParams.get("to")!, 10) : undefined;
        const changesets = collab?.getChangesetsSince(unitID, from, to) ?? [];
        const unit = collab?.getUnit(unitID);

        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            changesets,
            latestRevision: unit?.rev ?? 1
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // Block endpoints: GET /universer-api/snapshot/:type/unit/:unitID/block/:blockID
      // and /universer-api/snapshot/block/:type/unit/:unitID/block/:blockID
      if (url.pathname.includes("/block/") && request.method === "GET") {
        return new Response(
          JSON.stringify({
            error: { code: 4, message: "Sheet block was not found" }
          }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      // POST /universer-api/comb/:type/unit/:unitID/new_changes
      const newChangesMatch = url.pathname.match(/^\/universer-api\/comb\/([^/]+)\/unit\/([^/]+)\/new_changes$/);
      if (newChangesMatch && request.method === "POST") {
        const body = (await request.json().catch(() => ({}))) as any;
        const unitID = newChangesMatch[2];
        const changeset = body.changeset || body;

        if (collab) {
          collab.applyChangeset(changeset, body.memberID);
        }

        // 1. Send ACK back to the author
        if (body.memberID) {
          this.sendToMember(body.memberID, {
            cmd: CombCmd.RECV,
            code: CmdRspCode.OK,
            reason: "success",
            routeKey: unitID,
            collaMsg: {
              eventID: "changeset_ack",
              csAckEvent: {
                cs: changeset
              }
            }
          });
        }

        // 2. Broadcast new changesets to other peers in room
        this.broadcastToRoom(
          unitID,
          {
            cmd: CombCmd.RECV,
            code: CmdRspCode.OK,
            reason: "success",
            routeKey: unitID,
            collaMsg: {
              eventID: "new_changesets",
              newCsEvent: {
                cs: changeset
              }
            }
          },
          body.memberID
        );

        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" }
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // DELETE /universer-api/snapshot/-/units
      if (url.pathname === "/universer-api/snapshot/-/units" && request.method === "DELETE") {
        return new Response(JSON.stringify({ error: { code: 0, message: "" } }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      // POST /universer-api/snapshot/-/units/recover
      if (url.pathname === "/universer-api/snapshot/-/units/recover" && request.method === "POST") {
        return new Response(JSON.stringify({ error: { code: 0, message: "" } }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      // File endpoints
      if (url.pathname.includes("/sign-url") || url.pathname.includes("/upload")) {
        return new Response(
          JSON.stringify({
            error: { code: 0, message: "" },
            url: "",
            fileID: "file_default"
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      // GET /universer-api/history/:unitID/list|creators|cs
      const historyMatch = url.pathname.match(/^\/universer-api\/history\/([^/]+)\/(list|creators|cs)$/);
      if (historyMatch && request.method === "GET") {
        const unitID = historyMatch[1];
        const action = historyMatch[2];
        const unit = collab?.getUnit(unitID);
        const entries = collab?.listChangesetEntries(unitID) ?? [];
        const unitInfo = unit
          ? { unitId: unit.unit_id, rev: unit.rev, createdAt: unit.created_at }
          : null;

        if (action === "list") {
          const length = parsePositiveInt(url.searchParams.get("length"), 20);
          if (length === null) {
            return jsonHistoryError(400, 7, "length must be a positive integer");
          }
          const lastLabel = url.searchParams.get("lastLabel") ?? undefined;
          return jsonHistory(
            buildHistoryListBody(unitID, unitInfo, entries, {
              length,
              lastLabel: lastLabel || undefined
            })
          );
        }

        if (action === "creators") {
          return jsonHistory(buildHistoryCreatorsBody(unitInfo, entries));
        }

        const startRevision = parsePositiveInt(url.searchParams.get("startRevision"));
        const endRevision = parsePositiveInt(url.searchParams.get("endRevision"));
        if (startRevision === null || endRevision === null) {
          return jsonHistoryError(400, 7, "startRevision and endRevision must be positive integers");
        }
        return jsonHistory(buildHistoryChangesetsBody(unitID, entries, startRevision, endRevision));
      }

      // Legacy / fallback Collab Endpoints
      if (request.method === "GET" && url.pathname === "/universer-api/collab/snapshot") {
        if (!collab) return new Response(JSON.stringify({ error: "Collab service unavailable" }), { status: 503 });
        const unitId = url.searchParams.get("unitId") || "default";
        const snapshot = collab.getLatestSnapshot(unitId);
        return new Response(JSON.stringify(snapshot ?? {}), {
          headers: { "Content-Type": "application/json" }
        });
      }

      if (request.method === "POST" && url.pathname === "/universer-api/collab/snapshot") {
        if (!collab) return new Response(JSON.stringify({ error: "Collab service unavailable" }), { status: 503 });
        const body = (await request.json()) as any;
        const unitId = body.unitId || url.searchParams.get("unitId") || "default";
        collab.saveSnapshot(unitId, body.rev || 0, body.data || body);
        return new Response(JSON.stringify({ success: true, rev: body.rev || 0 }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      if (request.method === "POST" && url.pathname === "/universer-api/collab/changeset") {
        if (!collab) return new Response(JSON.stringify({ error: "Collab service unavailable" }), { status: 503 });
        const body = (await request.json()) as any;
        const unitId = body.unitId || url.searchParams.get("unitId") || "default";
        const result = collab.applyChangeset(body);
        this.broadcast(
          { channel: 1, type: "collab.changeset", payload: body },
          `unit:${unitId}`
        );
        return new Response(JSON.stringify(result), {
          headers: { "Content-Type": "application/json" }
        });
      }

      if (request.method === "GET" && url.pathname === "/universer-api/collab/changesets") {
        if (!collab) return new Response(JSON.stringify({ error: "Collab service unavailable" }), { status: 503 });
        const unitId = url.searchParams.get("unitId") || "default";
        const since = parseInt(url.searchParams.get("since") || "0", 10);
        const changesets = collab.getChangesetsSince(unitId, since);
        return new Response(JSON.stringify({ changesets }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    if (url.pathname === WORKTREE_CHANGE_NOTIFY_PATH && request.method === "POST") {
      const body = (await request.json().catch(() => ({}))) as { event?: unknown };
      const payload = worktreeFeedNotifyPayload(body);
      this.broadcast(JSON.stringify(payload), WORKTREE_CHANGE_FEED_TAG);
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // 4. Universal Action Execution Endpoints
    if (url.pathname === "/api/actions/list" && request.method === "GET") {
      const kernel = await this.ensureKernel();
      const actionService = kernel.get("action") as ActionService | undefined;
      return new Response(JSON.stringify({ actions: actionService?.listActions() ?? [] }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    if (url.pathname === "/api/actions/execute" && request.method === "POST") {
      const kernel = await this.ensureKernel();
      const actionService = kernel.get("action") as ActionService | undefined;
      if (!actionService) {
        return new Response(JSON.stringify({ error: "Action service unavailable" }), { status: 503 });
      }
      try {
        const body = (await request.json()) as any;
        const result = await actionService.execute(body.actionId, body.input, body.meta ?? {});
        return new Response(JSON.stringify({ success: true, result }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 400 });
      }
    }

    if (url.pathname === "/agents" || url.pathname.startsWith("/agents/")) {
      const kernel = await this.ensureKernel();
      const agentRes = await handleAgentHttp(request, {
        kernel,
        env: this.env,
        actor: actorFromRequest(request),
        broadcastCollab: (unitId, changeset) => this.broadcastAgentCollab(unitId, changeset)
      });
      if (agentRes) return agentRes;
    }

    if (url.pathname === "/uf" || url.pathname.startsWith("/uf/")) {
      const dbBinding = (this.env as { DB?: D1Database }).DB;
      if (!dbBinding) {
        return new Response(JSON.stringify({ error: { message: "Control plane unavailable" } }), {
          status: 503,
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
      }
      const db = new ControlPlaneDb(dbBinding);
      const session = await resolveGatewayContext(request, db);
      const kernel = await this.ensureKernel();
      const collab = kernel.get("collab") as UniverCollabService | undefined;
      const fileRes = await handleUniverFileHttp(request, {
        db,
        currentUser: session.currentUser,
        collab,
        browser: (this.env as { BROWSER?: { fetch?: typeof fetch } }).BROWSER,
        loader: (this.env as { LOADER?: import("../integrations/univer-file-execute.ts").LoaderBinding }).LOADER,
        blobStore: new R2BlobStore((this.env as { BLOB_BUCKET?: R2Bucket }).BLOB_BUCKET),
        notifyCliWroteCells: () => {
          if (!isUfExecuteCommit(url.pathname, request.method)) return;
          this.broadcast(JSON.stringify(CLI_WROTE_CELLS), WORKTREE_CHANGE_FEED_TAG);
        }
      });
      if (fileRes) return fileRes;
    }

    if (url.pathname === "/api/remote.mux") {
      return new Response(
        JSON.stringify({
          error: { message: "WebSocket upgrade required for Channel 2 agent.prompt" },
          protocol: { mux: "channel 2 agent.prompt on /api/remote.mux" }
        }),
        {
          status: 426,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Upgrade: "websocket"
          }
        }
      );
    }

    return new Response("Not found", { status: 404 });
  }

  private muxActor(attachment: CollabMemberAttachment | WorktreeFeedAttachment | null): WorkspaceActor | null {
    if (!attachment || !("userID" in attachment) || !attachment.userID) return null;
    if ("kind" in attachment && attachment.kind === "worktree-feed") {
      return { userId: attachment.userID, name: attachment.userID, username: "" };
    }
    const member = attachment as CollabMemberAttachment;
    return { userId: member.userID, name: member.name || member.userID, username: "" };
  }

  private consumeSessionTicket(ticketParam: string): { userID: string; name: string } {
    if (!ticketParam) {
      return { userID: "user_admin", name: "Administrator" };
    }
    const ticketData = this.sessionTickets.get(ticketParam);
    this.sessionTickets.delete(ticketParam);
    if (ticketData && ticketData.expiresAt > Date.now()) {
      return { userID: ticketData.userID, name: ticketData.name };
    }
    return { userID: "user_admin", name: "Administrator" };
  }

  private broadcastAgentCollab(unitId: string, changeset: Record<string, unknown>): void {
    const selection = cursorSelectionFromChangeset(changeset);
    if (selection) {
      this.broadcastToRoom(unitId, {
        cmd: CombCmd.RECV,
        code: CmdRspCode.OK,
        reason: "success",
        routeKey: unitId,
        collaMsg: {
          eventID: "update_cursor",
          updateCursorEvent: {
            unitID: unitId,
            memberID: AGENT_MEMBER_ID,
            selection
          }
        }
      });
    }
    this.broadcastToRoom(unitId, {
      cmd: CombCmd.RECV,
      code: CmdRspCode.OK,
      reason: "success",
      routeKey: unitId,
      collaMsg: {
        eventID: "new_changesets",
        newCsEvent: { cs: changeset }
      }
    });
  }

  /**
   * Helper to retrieve active room members.
   */
  getRoomMembers(roomID: string): Array<{ memberID: string; userID: string; name: string; avatar: string }> {
    const list: Array<{ memberID: string; userID: string; name: string; avatar: string }> = [];
    for (const s of this.ctx.getWebSockets()) {
      try {
        const att = s.deserializeAttachment() as CollabMemberAttachment | null;
        if (att && Array.isArray(att.rooms) && att.rooms.includes(roomID) && !isAgentPeer(att)) {
          list.push({
            memberID: att.memberID,
            userID: att.userID,
            name: att.name,
            avatar: ""
          });
        }
      } catch {}
    }
    if (list.length >= 1) {
      list.push(agentPeerMember());
    }
    return list;
  }

  /**
   * Broadcasts a Comb message to all members in a given room, encoded per socket wire.
   */
  broadcastToRoom(roomID: string, msg: any, excludeMemberID?: string): void {
    for (const s of this.ctx.getWebSockets()) {
      try {
        const att = s.deserializeAttachment() as CollabMemberAttachment | null;
        if (att && Array.isArray(att.rooms) && att.rooms.includes(roomID)) {
          if (excludeMemberID && att.memberID === excludeMemberID) continue;
          this.sendComb(s, att, msg);
        }
      } catch {}
    }
  }

  /**
   * Sends a Comb message to a specific member by memberID, encoded per socket wire.
   */
  sendToMember(memberID: string, msg: any): boolean {
    for (const s of this.ctx.getWebSockets()) {
      try {
        const att = s.deserializeAttachment() as CollabMemberAttachment | null;
        if (att && att.memberID === memberID) {
          this.sendComb(s, att, msg);
          return true;
        }
      } catch {}
    }
    return false;
  }

  private sendComb(ws: WebSocket, att: CollabMemberAttachment | null | undefined, msg: unknown): void {
    if (typeof msg === "string") {
      ws.send(msg);
      return;
    }
    if (att?.wire === "protobuf") {
      ws.send(encodeCombFrame(msg as CombFrame));
      return;
    }
    ws.send(encodeCombJson(msg as CombFrame));
  }

  /**
   * Hibernation WebSocket message handler with Univer Collaboration Protocol
   * and 4-Channel Multiplexing.
   */
  async webSocketMessage(
    ws: WebSocket,
    message: string | ArrayBuffer | ArrayBufferView
  ): Promise<void> {
    try {
      let attachment: WorktreeFeedAttachment | CollabMemberAttachment | null = null;
      try {
        attachment = ws.deserializeAttachment() as WorktreeFeedAttachment | CollabMemberAttachment | null;
      } catch {
        attachment = null;
      }
      if (attachment?.kind === "worktree-feed") {
        return;
      }

      const kernel = await this.ensureKernel();
      let parsed: any;
      const binaryFrame = typeof message !== "string";
      if (typeof message === "string") {
        try {
          parsed = JSON.parse(message);
        } catch {
          parsed = { raw: message };
        }
      } else {
        try {
          parsed = decodeCombFrame(message);
        } catch {
          parsed = undefined;
        }
      }

      // 1. Fast-path Univer Collaboration Protocol (CombCmd)
      if (typeof parsed?.cmd === "number") {
        const att = attachment as CollabMemberAttachment | null;
        if (binaryFrame && att) {
          att.wire = "protobuf";
          ws.serializeAttachment(att);
        }
        const memberID = att?.memberID || "unknown";
        const userID = att?.userID || "user_admin";
        const userName = att?.name || "Administrator";
        const routeKey = typeof parsed.routeKey === "string" ? parsed.routeKey : "";

        switch (parsed.cmd) {
          case CombCmd.HELLO:
          case CombCmd.HEARTBEAT:
            this.sendComb(ws, att, {
              cmd: parsed.cmd,
              code: CmdRspCode.OK,
              reason: "success",
              routeKey,
              infoRsp: { memberID }
            });
            return;

          case CombCmd.JOIN: {
            const rooms: string[] = parsed.joinReq?.rooms
              ? parsed.joinReq.rooms.map((r: any) => r.roomID)
              : routeKey
              ? [routeKey]
              : [];

            if (att && Array.isArray(att.rooms)) {
              for (const r of rooms) {
                if (!att.rooms.includes(r)) {
                  att.rooms.push(r);
                }
              }
              ws.serializeAttachment(att);
            }

            const roomInfos: Record<string, any> = {};
            for (const roomID of rooms) {
              const membersInRoom = this.getRoomMembers(roomID);
              roomInfos[roomID] = {
                roomID,
                members: membersInRoom
              };

              const humans = membersInRoom.filter((member) => !isAgentPeer(member));
              if (humans.length === 1) {
                this.broadcastToRoom(roomID, agentUsersEnter(roomID));
              } else if (humans.length > 1) {
                this.sendComb(ws, att, agentUsersEnter(roomID));
              }

              this.broadcastToRoom(
                roomID,
                {
                  cmd: CombCmd.RECV,
                  code: CmdRspCode.OK,
                  reason: "success",
                  routeKey: roomID,
                  collaMsg: {
                    eventID: "users_enter",
                    joinEvent: {
                      memberID,
                      userID,
                      name: userName,
                      avatar: ""
                    }
                  }
                },
                memberID
              );
            }

            this.sendComb(ws, att, {
              cmd: CombCmd.JOIN,
              code: CmdRspCode.OK,
              reason: "success",
              routeKey: routeKey || rooms[0] || "",
              joinRsp: { roomInfos }
            });
            return;
          }

          case CombCmd.LEAVE: {
            const roomID = parsed.leaveReq?.roomID || routeKey;
            if (roomID && att && Array.isArray(att.rooms) && !isAgentPeer(att)) {
              att.rooms = att.rooms.filter((r) => r !== roomID);
              ws.serializeAttachment(att);
              this.broadcastToRoom(
                roomID,
                {
                  cmd: CombCmd.RECV,
                  code: CmdRspCode.OK,
                  reason: "success",
                  routeKey: roomID,
                  collaMsg: {
                    eventID: "users_leave",
                    leaveEvent: {
                      memberID,
                      name: userName
                    }
                  }
                },
                memberID
              );
            }
            return;
          }

          case CombCmd.INGEST: { // cursor / presence / opaque collab events
            if (!routeKey || !parsed.collaMsg?.eventID) {
              return;
            }
            if (parsed.collaMsg.eventID === "update_cursor") {
              this.broadcastToRoom(
                routeKey,
                {
                  cmd: CombCmd.RECV,
                  code: CmdRspCode.OK,
                  reason: "success",
                  routeKey,
                  collaMsg: {
                    eventID: "update_cursor",
                    updateCursorEvent: {
                      unitID: routeKey,
                      memberID,
                      selection: parsed.collaMsg.updateCursorEvent?.selection
                    }
                  }
                },
                memberID
              );
            } else {
              this.broadcastToRoom(
                routeKey,
                {
                  cmd: CombCmd.RECV,
                  code: CmdRspCode.OK,
                  reason: "success",
                  routeKey,
                  collaMsg: parsed.collaMsg
                },
                memberID
              );
            }
            return;
          }

          default:
            return;
        }
      }

      // Fast-path ping/pong
      if (parsed?.type === "ping") {
        ws.send(JSON.stringify({ type: "pong", timestamp: Date.now() }));
        return;
      }

      // Channel 0: Control & Host RPC
      if (parsed?.channel === 0 || !parsed?.channel) {
        if (parsed?.type === "session.init") {
          ws.send(
            JSON.stringify({
              channel: 0,
              type: "session.init",
              sessionId: (this.ctx as any).id?.toString(),
              timestamp: Date.now()
            })
          );
          return;
        }

        if (parsed?.type === "client-request") {
          const actionService = kernel.get("action") as ActionService | undefined;
          if (parsed.method === "actions.list") {
            ws.send(
              JSON.stringify({
                channel: 0,
                id: parsed.id,
                result: actionService?.listActions() ?? []
              })
            );
            return;
          }
          if (parsed.method === "actions.execute" && actionService) {
            try {
              const res = await actionService.execute(parsed.params.actionId, parsed.params.input, parsed.params.meta);
              ws.send(JSON.stringify({ channel: 0, id: parsed.id, result: res }));
            } catch (err: any) {
              ws.send(JSON.stringify({ channel: 0, id: parsed.id, error: err.message }));
            }
            return;
          }
        }
      }

      // Channel 1: Univer OT Collab Changeset dispatch
      if (parsed?.channel === 1) {
        const collab = kernel.get("collab") as UniverCollabService | undefined;
        if (collab && parsed.type === "collab.submitChangeset" && parsed.payload) {
          const res = collab.applyChangeset(parsed.payload);
          const unitTag = `unit:${parsed.payload.unitId}`;
          const sockets = this.ctx.getWebSockets(unitTag);
          const broadcastMsg = JSON.stringify({
            channel: 1,
            type: "collab.changeset",
            payload: parsed.payload
          });
          for (const s of sockets) {
            if (s !== ws) {
              try { s.send(broadcastMsg); } catch {}
            }
          }
          ws.send(JSON.stringify({ channel: 1, id: parsed.id, result: res }));
          return;
        }

        if (parsed.type === "collab.cursorSync" && parsed.payload) {
          const unitTag = `unit:${parsed.payload.unitId}`;
          const sockets = this.ctx.getWebSockets(unitTag);
          const msg = JSON.stringify({
            channel: 1,
            type: "collab.cursorSync",
            payload: parsed.payload
          });
          for (const s of sockets) {
            if (s !== ws) {
              try { s.send(msg); } catch {}
            }
          }
          return;
        }
      }

      // Channel 2: Agent Streaming
      if (parsed?.channel === 2 || parsed?.ch === 2 || parsed?.type === "agent.prompt") {
        if (parsed.type === "agent.prompt") {
          let fallbackUnitId = "";
          try {
            const tags =
              typeof (this.ctx as { getTags?: (socket: WebSocket) => string[] }).getTags === "function"
                ? (this.ctx as { getTags: (socket: WebSocket) => string[] }).getTags(ws)
                : [];
            const unitTag = tags.find((tag) => tag.startsWith("unit:"));
            if (unitTag) fallbackUnitId = unitTag.slice("unit:".length);
          } catch {}
          try {
            await handleAgentMuxPrompt(
              {
                kernel,
                env: this.env,
                actor: this.muxActor(attachment),
                broadcastCollab: (unitId, changeset) => this.broadcastAgentCollab(unitId, changeset)
              },
              ws,
              parsed,
              fallbackUnitId
            );
          } catch (err: any) {
            try {
              ws.send(JSON.stringify(muxFrame("agent.error", { message: err?.message || String(err) })));
            } catch {}
          }
          return;
        }
      }

      // Channel 3: AST CRDT Co-Editing
      if (parsed?.channel === 3 && parsed.payload) {
        if (this.sql) {
          try {
            this.sql.exec(
              `INSERT INTO ast_crdt_journal (id, node_path, operation, payload, inverse_payload, lamport_clock, applied_at)
               VALUES (?, ?, ?, ?, ?, ?, ?)`,
              `ast_${crypto.randomUUID()}`,
              parsed.payload.nodePath || "",
              parsed.payload.operation || "replace",
              JSON.stringify(parsed.payload),
              JSON.stringify(parsed.payload.inverse || {}),
              Date.now(),
              Date.now()
            );
          } catch {}
        }
        // Broadcast to peers
        const sockets = this.ctx.getWebSockets("mux");
        const msg = JSON.stringify({ channel: 3, type: "ast.mutation", payload: parsed.payload });
        for (const s of sockets) {
          if (s !== ws) {
            try { s.send(msg); } catch {}
          }
        }
        return;
      }

      // Dispatch general event to Cordis context
      await kernel.emit("websocket/message", { ws, message: parsed ?? message });
    } catch (err) {
      console.error("Error processing webSocketMessage in DshHost:", err);
    }
  }

  /**
   * Hibernation WebSocket close handler.
   */
  async webSocketClose(
    ws: WebSocket,
    code?: number,
    reason?: string,
    wasClean?: boolean
  ): Promise<void> {
    try {
      const att = ws.deserializeAttachment() as CollabMemberAttachment | null;
      if (att && Array.isArray(att.rooms) && !isAgentPeer(att)) {
        for (const roomID of att.rooms) {
          this.broadcastToRoom(
            roomID,
            {
              cmd: CombCmd.RECV,
              code: CmdRspCode.OK,
              reason: "success",
              routeKey: roomID,
              collaMsg: {
                eventID: "users_leave",
                leaveEvent: {
                  memberID: att.memberID,
                  name: att.name
                }
              }
            },
            att.memberID
          );
        }
      }

      if (this.kernel) {
        await this.kernel.emit("websocket/close", { ws, code, reason, wasClean });
      }
    } catch (err) {
      console.error("Error handling webSocketClose:", err);
    }
  }
}

function jsonHistory(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

function jsonHistoryError(status: number, code: number, message: string): Response {
  return jsonHistory({ error: { code, message } }, status);
}

export { DshHost as ChatAgent };
