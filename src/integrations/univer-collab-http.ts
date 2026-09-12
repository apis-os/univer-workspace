/**
 * Universer HTTP dispatcher: comments plus snapshot/comb/history/session-ticket.
 * T26 removed these routes from dsh-host; the collab client still calls them
 * to mount unit_welcome_sheet.
 */
import type { Context } from "@deepseek-ai/cordis";
import type { SqlExec } from "../kernel/sql.ts";
import { handleUniverserCommentRoutes } from "./univer-comment-http.ts";
import {
  UNIVERSER_NOT_FOUND,
  UNIVERSER_OK,
  rewriteWorktreeUniverserPath,
  type CollaboratorIdentity
} from "./univer-protocol.ts";
import type { UniverCollabService } from "../plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../plugins/univer-default-snapshots.ts";
import { getSheetBlockFromSnapshot, projectSheetBlocks } from "../plugins/univer-snapshot.ts";
import {
  buildHistoryChangesetsBody,
  buildHistoryCreatorsBody,
  buildHistoryListBody,
  parsePositiveInt
} from "./univer-history.ts";

export type { CollaboratorIdentity };

export interface UniverserHttpHost {
  readonly identity: CollaboratorIdentity;
  readonly sql?: SqlExec;
  readonly collab?: unknown;
  readonly kernel?: Context;
  mintSessionTicket?(identity: CollaboratorIdentity): string;
  onNewChanges?(unitID: string, changeset: unknown, memberID?: string): void;
}

const SNAPSHOT_REV =
  /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)(?:\/rev\/([^/]+))?$/;
const SNAPSHOT_FETCH_MISSING =
  /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)\/fetchmissing$/;
const SNAPSHOT_BLOCK =
  /^\/universer-api\/snapshot(?:\/block)?\/([^/]+)\/unit\/([^/]+)\/block\/([^/]+)$/;
const COMB_NEW_CHANGES = /^\/universer-api\/comb\/([^/]+)\/unit\/([^/]+)\/new_changes$/;
const HISTORY_ACTION = /^\/universer-api\/history\/([^/]+)\/(list|creators|cs)$/;

export async function handleUniverserHttp(
  request: Request,
  host: UniverserHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith("/universer-api/")) return null;

  const comments = await handleUniverserCommentRoutes(request, {
    sql: host.sql,
    userID: host.identity.userID,
    name: host.identity.name,
    avatar: host.identity.avatar,
    kernel: host.kernel,
    collab: host.collab,
    onNewChanges: host.onNewChanges
  });
  if (comments) return comments;

  const pathname = rewriteWorktreeUniverserPath(url.pathname).pathname;
  const collab = host.collab as UniverCollabService | undefined;
  const method = request.method.toUpperCase();

  if (pathname === "/universer-api/user" && method === "GET") {
    return jsonUniverser({
      error: { code: 0, message: "" },
      user: {
        id: host.identity.userID,
        name: host.identity.name,
        avatar: host.identity.avatar
      }
    });
  }

  if (pathname === "/universer-api/user/session-ticket" && method === "GET") {
    const ticket = host.mintSessionTicket?.(host.identity);
    if (!ticket) {
      return jsonUniverser({ error: { code: 16, message: "unauthenticated" } }, 401);
    }
    return jsonUniverser({ error: { code: 0, message: "" }, ticket });
  }

  if (pathname === "/universer-api/authz/-/object/-/batch_allowed" && method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { requests?: unknown };
    const requests = Array.isArray(body.requests) ? body.requests : [];
    return jsonUniverser({
      error: { code: 0, message: "" },
      objectActions: requests.map(() => [1, 2, 3, 4])
    });
  }

  if (pathname.includes("/allowed") && method === "POST") {
    return jsonUniverser({ error: { code: 0, message: "" }, actions: [1, 2, 3, 4] });
  }

  const fetchMissing = pathname.match(SNAPSHOT_FETCH_MISSING);
  if (fetchMissing && method === "GET") {
    const unitID = decodeURIComponent(fetchMissing[2]);
    ensureSnapshotUnit(collab, unitID, 2);
    const from = parseInt(url.searchParams.get("from") || "0", 10);
    const to = url.searchParams.get("to") ? parseInt(url.searchParams.get("to")!, 10) : undefined;
    const unit = collab?.getUnit(unitID);
    return jsonUniverser({
      error: UNIVERSER_OK,
      changesets: collab?.getChangesetsSince(unitID, from, to) ?? [],
      latestRevision: unit?.rev ?? 1
    });
  }

  const blockMatch = pathname.match(SNAPSHOT_BLOCK);
  if (blockMatch && method === "GET") {
    const unitID = decodeURIComponent(blockMatch[2]);
    const blockId = decodeURIComponent(blockMatch[3]);
    ensureSnapshotUnit(collab, unitID, 2);
    const snapshot = collab?.getLatestSnapshot(unitID)?.data;
    const block = snapshot ? getSheetBlockFromSnapshot(snapshot, blockId) : null;
    if (!block) {
      return jsonUniverser({ error: UNIVERSER_NOT_FOUND }, 404);
    }
    return jsonUniverser({ error: UNIVERSER_OK, block });
  }

  const snapshotMatch = pathname.match(SNAPSHOT_REV);
  if (snapshotMatch && method === "GET") {
    const typeNum = parseInt(snapshotMatch[1], 10) || 2;
    const unitID = decodeURIComponent(snapshotMatch[2]);
    const rev = parseInt(snapshotMatch[3] || "0", 10);
    const ensured = ensureSnapshotUnit(collab, unitID, typeNum);
    const snapshot = collab?.getLatestSnapshot(unitID) ?? ensured;
    if (!snapshot) {
      return jsonUniverser({ error: UNIVERSER_NOT_FOUND }, 404);
    }
    const projected = projectSheetBlocks(snapshot.data);
    return jsonUniverser({
      error: UNIVERSER_OK,
      snapshot: projected.snapshot,
      changesets: collab?.getChangesetsSince(unitID, rev || snapshot.rev) ?? []
    });
  }

  const newChanges = pathname.match(COMB_NEW_CHANGES);
  if (newChanges && method === "POST") {
    const unitID = decodeURIComponent(newChanges[2]);
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const changeset = (body.changeset && typeof body.changeset === "object"
      ? body.changeset
      : body) as Record<string, unknown>;
    const memberID =
      (typeof body.memberID === "string" && body.memberID) ||
      (typeof changeset.memberID === "string" ? changeset.memberID : undefined);
    if (collab) {
      await collab.applyChangeset(changeset, typeof memberID === "string" ? memberID : "");
    }
    host.onNewChanges?.(unitID, changeset, memberID);
    return jsonUniverser({ error: UNIVERSER_OK });
  }

  if (pathname === "/universer-api/snapshot/-/units" && method === "DELETE") {
    return jsonUniverser({ error: UNIVERSER_OK });
  }
  if (pathname === "/universer-api/snapshot/-/units/recover" && method === "POST") {
    return jsonUniverser({ error: UNIVERSER_OK });
  }

  if ((pathname.includes("/sign-url") || pathname.includes("/upload")) && method !== "GET") {
    return jsonUniverser({ error: { code: 0, message: "" }, url: "", fileID: "file_default" });
  }

  const historyMatch = pathname.match(HISTORY_ACTION);
  if (historyMatch && method === "GET") {
    const unitID = decodeURIComponent(historyMatch[1]);
    const action = historyMatch[2];
    const unit = collab?.getUnit(unitID);
    const entries = collab?.listChangesetEntries(unitID) ?? [];
    const unitInfo = unit
      ? { unitId: unit.unit_id, rev: unit.rev, createdAt: unit.created_at }
      : null;
    if (action === "list") {
      const length = parsePositiveInt(url.searchParams.get("length"), 20);
      if (length === null) {
        return jsonUniverser({ error: { code: 7, message: "length must be a positive integer" } }, 400);
      }
      const lastLabel = url.searchParams.get("lastLabel") ?? undefined;
      return jsonUniverser(
        buildHistoryListBody(unitID, unitInfo, entries, { length, lastLabel: lastLabel || undefined })
      );
    }
    if (action === "creators") {
      return jsonUniverser(buildHistoryCreatorsBody(unitInfo, entries));
    }
    const startRevision = parsePositiveInt(url.searchParams.get("startRevision"));
    const endRevision = parsePositiveInt(url.searchParams.get("endRevision"));
    if (startRevision === null || endRevision === null) {
      return jsonUniverser(
        { error: { code: 7, message: "startRevision and endRevision must be positive integers" } },
        400
      );
    }
    return jsonUniverser(buildHistoryChangesetsBody(unitID, entries, startRevision, endRevision));
  }

  if (pathname === "/universer-api/collab/snapshot" && method === "GET") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const unitId = url.searchParams.get("unitId") || "default";
    return jsonUniverser(collab.getLatestSnapshot(unitId) ?? {});
  }

  if (pathname === "/universer-api/collab/snapshot" && method === "POST") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const unitId = String(body.unitId || url.searchParams.get("unitId") || "default");
    const rev = Number(body.rev || 0);
    const data = (body.data && typeof body.data === "object" ? body.data : body) as Record<string, unknown>;
    collab.saveSnapshot(unitId, rev, data);
    return jsonUniverser({ success: true, rev });
  }

  return null;
}

function ensureSnapshotUnit(
  collab: UniverCollabService | undefined,
  unitID: string,
  typeNum: number
): { rev: number; data: Record<string, unknown> } | null {
  if (!collab) return null;
  const name = unitID === "unit_welcome_sheet" ? "Q3 Forecast" : "Document";
  collab.ensureUnit(unitID, typeNum, name);
  const latest = collab.getLatestSnapshot(unitID);
  if (latest) return latest;
  const snapshot = generateDefaultSnapshot(unitID, typeNum, name) as Record<string, unknown>;
  collab.createUnit(unitID, typeNum, name, snapshot);
  return { rev: 1, data: snapshot };
}

function jsonUniverser(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
