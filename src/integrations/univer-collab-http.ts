/**
 * Universer HTTP protocol for ChatAgent: snapshot, comb, history, identity,
 * and Worktree-prefixed aliases used by collaboration-worktree-client.
 */
import type { UniverCollabService } from "../plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../plugins/univer-default-snapshots.ts";
import { DEMO_WELCOME_UNIT_ID, resolveWelcomeUnitSnapshot } from "../plugins/univer-demo-snapshot.ts";
import { getSheetBlockFromSnapshot, projectSheetBlocks } from "../plugins/univer-snapshot.ts";
import {
  buildHistoryChangesetsBody,
  buildHistoryCreatorsBody,
  buildHistoryListBody,
  parsePositiveInt
} from "./univer-history.ts";
import {
  UNIVERSER_INVALID_ARGUMENT,
  UNIVERSER_NOT_FOUND,
  UNIVERSER_OK,
  rewriteWorktreeUniverserPath,
  type CollaboratorIdentity
} from "./univer-protocol.ts";
import { compareSnapshots } from "./univer-snapshot-comparison.ts";

export interface UniverserHttpHost {
  readonly collab: UniverCollabService | null | undefined;
  readonly identity: CollaboratorIdentity;
  mintSessionTicket(identity: CollaboratorIdentity): string;
  onNewChanges?(unitID: string, changeset: unknown, memberID?: string): void;
}

export async function handleUniverserHttp(
  request: Request,
  host: UniverserHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith("/universer-api/")) return null;

  const parsed = rewriteWorktreeUniverserPath(url.pathname);
  const pathname = parsed.pathname;
  const collab = host.collab;
  const identity = host.identity;

  if (parsed.worktreeId && parsed.worktreeRest === "" && request.method === "GET") {
    return jsonUniverser({
      error: UNIVERSER_OK,
      worktree: collab?.getWorktreeProtocolData(parsed.worktreeId) ?? {
        worktreeID: parsed.worktreeId,
        status: "editing",
        units: []
      }
    });
  }

  const mergePreviewMatch = url.pathname.match(
    /^\/universer-api\/worktrees\/([^/]+)\/units\/([^/]+)\/merge-preview$/
  );
  if (mergePreviewMatch && request.method === "GET") {
    return jsonUniverser(buildMergePreviewBody(collab, decodeURIComponent(mergePreviewMatch[1]), mergePreviewMatch[2]));
  }

  const comparisonMatch = url.pathname.match(
    /^\/universer-api\/worktrees\/([^/]+)\/units\/([^/]+)\/comparison$/
  );
  if (comparisonMatch && request.method === "GET") {
    return jsonUniverser(
      buildComparisonBody(collab, decodeURIComponent(comparisonMatch[1]), comparisonMatch[2])
    );
  }

  const protocolRemovalMatch = url.pathname.match(
    /^\/universer-api\/worktrees\/([^/]+)\/units\/([^/]+)\/removal$/
  );
  if (protocolRemovalMatch && request.method === "POST") {
    const worktreeId = decodeURIComponent(protocolRemovalMatch[1]);
    const unitId = protocolRemovalMatch[2];
    const body = (await request.json().catch(() => ({}))) as { removed?: boolean };
    collab?.bindWorktreeUnit(worktreeId, unitId, { removed: Boolean(body.removed) });
    return jsonUniverser({
      error: UNIVERSER_OK,
      worktree: collab?.getWorktreeProtocolData(worktreeId)
    });
  }

  if (pathname === "/universer-api/user" && request.method === "GET") {
    return jsonUniverser({
      error: UNIVERSER_OK,
      user: {
        id: identity.userID,
        name: identity.name,
        avatar: identity.avatar
      }
    });
  }

  if (pathname === "/universer-api/user/session-ticket" && request.method === "GET") {
    const ticket = host.mintSessionTicket(identity);
    return jsonUniverser({
      error: UNIVERSER_OK,
      ticket
    });
  }

  if (pathname === "/universer-api/authz/-/object/-/batch_allowed" && request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { requests?: unknown[] };
    const requests = Array.isArray(body.requests) ? body.requests : [];
    return jsonUniverser({
      error: UNIVERSER_OK,
      objectActions: requests.map(() => [1, 2, 3, 4])
    });
  }

  if (pathname.includes("/allowed") && request.method === "POST") {
    return jsonUniverser({
      error: UNIVERSER_OK,
      actions: [1, 2, 3, 4]
    });
  }

  const snapshotRevMatch = pathname.match(
    /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)(?:\/rev\/([^/]+))?$/
  );
  if (snapshotRevMatch && request.method === "GET") {
    const typeNum = parseInt(snapshotRevMatch[1], 10) || 2;
    const unitID = snapshotRevMatch[2];
    const rev = parseInt(snapshotRevMatch[3] || "0", 10);

    let snapshot = collab?.getLatestSnapshot(unitID);
    if (!snapshot) {
      const defaultSnap = generateDefaultSnapshot(unitID, typeNum);
      collab?.createUnit(
        unitID,
        typeNum,
        (defaultSnap as any).workbook?.name || (defaultSnap as any).doc?.name || "Document",
        defaultSnap
      );
      snapshot = { rev: 1, data: defaultSnap };
    } else if (unitID === DEMO_WELCOME_UNIT_ID) {
      const resolved = resolveWelcomeUnitSnapshot(unitID, snapshot.data);
      if (resolved !== snapshot.data) {
        const rev = snapshot.rev || 1;
        collab?.saveSnapshot(unitID, rev, resolved);
        snapshot = { rev, data: resolved };
      }
    }
    if (parsed.worktreeId) {
      collab?.bindWorktreeUnit(parsed.worktreeId, unitID, { type: typeNum });
    }

    const changesets = collab?.getChangesetsSince(unitID, rev || snapshot.rev) ?? [];
    return jsonUniverser({
      error: UNIVERSER_OK,
      snapshot: projectSheetBlocks(snapshot.data).snapshot,
      changesets
    });
  }

  const deserializedBlockMatch = pathname.match(
    /^\/universer-api\/snapshot\/block\/([^/]+)\/unit\/([^/]+)\/block\/([^/]+)$/
  );
  if (deserializedBlockMatch && request.method === "GET") {
    return sheetBlockResponse(collab, deserializedBlockMatch[2], deserializedBlockMatch[3]);
  }

  const sheetBlockMatch = pathname.match(
    /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)\/block\/([^/]+)$/
  );
  if (sheetBlockMatch && request.method === "GET") {
    return sheetBlockResponse(collab, sheetBlockMatch[2], sheetBlockMatch[3]);
  }

  const fetchMissingMatch = pathname.match(
    /^\/universer-api\/snapshot\/([^/]+)\/unit\/([^/]+)\/fetchmissing$/
  );
  if (fetchMissingMatch && request.method === "GET") {
    const unitID = fetchMissingMatch[2];
    const from = parseInt(url.searchParams.get("from") || "0", 10);
    const to = url.searchParams.get("to") ? parseInt(url.searchParams.get("to")!, 10) : undefined;
    const changesets = collab?.getChangesetsSince(unitID, from, to) ?? [];
    const unit = collab?.getUnit(unitID);
    return jsonUniverser({
      error: UNIVERSER_OK,
      changesets,
      latestRevision: unit?.rev ?? 1
    });
  }

  const newChangesMatch = pathname.match(/^\/universer-api\/comb\/([^/]+)\/unit\/([^/]+)\/new_changes$/);
  if (newChangesMatch && request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as any;
    const unitID = newChangesMatch[2];
    const changeset = body.changeset || body;
    if (parsed.worktreeId) {
      collab?.bindWorktreeUnit(parsed.worktreeId, unitID);
    }
    if (collab) {
      collab.applyChangeset(changeset, body.memberID, identity.userID);
    }
    host.onNewChanges?.(unitID, changeset, body.memberID);
    return jsonUniverser({ error: UNIVERSER_OK });
  }

  if (pathname === "/universer-api/snapshot/-/units" && request.method === "DELETE") {
    return jsonUniverser({ error: UNIVERSER_OK });
  }

  if (pathname === "/universer-api/snapshot/-/units/recover" && request.method === "POST") {
    return jsonUniverser({ error: UNIVERSER_OK });
  }

  if (pathname.includes("/sign-url") || pathname.includes("/upload")) {
    return jsonUniverser({
      error: UNIVERSER_OK,
      url: "",
      fileID: "file_default"
    });
  }

  const historyMatch = pathname.match(/^\/universer-api\/history\/([^/]+)\/(list|creators|cs)$/);
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
        return jsonUniverser({ error: { ...UNIVERSER_INVALID_ARGUMENT, message: "length must be a positive integer" } }, 400);
      }
      const lastLabel = url.searchParams.get("lastLabel") ?? undefined;
      return jsonUniverser(
        buildHistoryListBody(unitID, unitInfo, entries, {
          length,
          lastLabel: lastLabel || undefined
        })
      );
    }

    if (action === "creators") {
      return jsonUniverser(buildHistoryCreatorsBody(unitInfo, entries));
    }

    const startRevision = parsePositiveInt(url.searchParams.get("startRevision"));
    const endRevision = parsePositiveInt(url.searchParams.get("endRevision"));
    if (startRevision === null || endRevision === null) {
      return jsonUniverser(
        {
          error: {
            ...UNIVERSER_INVALID_ARGUMENT,
            message: "startRevision and endRevision must be positive integers"
          }
        },
        400
      );
    }
    return jsonUniverser(buildHistoryChangesetsBody(unitID, entries, startRevision, endRevision));
  }

  if (request.method === "GET" && pathname === "/universer-api/collab/snapshot") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const unitId = url.searchParams.get("unitId") || "default";
    const snapshot = collab.getLatestSnapshot(unitId);
    return jsonUniverser(snapshot ?? {});
  }

  if (request.method === "POST" && pathname === "/universer-api/collab/snapshot") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const body = (await request.json()) as any;
    const unitId = body.unitId || url.searchParams.get("unitId") || "default";
    collab.saveSnapshot(unitId, body.rev || 0, body.data || body);
    return jsonUniverser({ success: true, rev: body.rev || 0 });
  }

  if (request.method === "POST" && pathname === "/universer-api/collab/changeset") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const body = (await request.json()) as any;
    const result = collab.applyChangeset(body, body.memberID, identity.userID);
    return jsonUniverser(result);
  }

  if (request.method === "GET" && pathname === "/universer-api/collab/changesets") {
    if (!collab) return jsonUniverser({ error: "Collab service unavailable" }, 503);
    const unitId = url.searchParams.get("unitId") || "default";
    const since = parseInt(url.searchParams.get("since") || "0", 10);
    return jsonUniverser({ changesets: collab.getChangesetsSince(unitId, since) });
  }

  return null;
}

function buildMergePreviewBody(
  collab: UniverCollabService | null | undefined,
  worktreeId: string,
  unitID: string
): Record<string, unknown> {
  const snapshot = collab?.getLatestSnapshot(unitID);
  const binding = collab?.getWorktreeBinding(worktreeId, unitID);
  const type = binding?.type ?? collab?.getUnit(unitID)?.type ?? 2;
  if (!snapshot) {
    return {
      error: UNIVERSER_OK,
      evaluation: { status: "not-behind", worktreeID: worktreeId, unitID }
    };
  }
  return {
    error: UNIVERSER_OK,
    evaluation: {
      status: "preview",
      worktreeID: worktreeId,
      unitID,
      preview: {
        unitID,
        type,
        snapshot: projectSheetBlocks(snapshot.data).snapshot
      }
    }
  };
}

function buildComparisonBody(
  collab: UniverCollabService | null | undefined,
  worktreeId: string,
  unitID: string
): Record<string, unknown> {
  const binding = collab?.getWorktreeBinding(worktreeId, unitID);
  const draft = collab?.getLatestSnapshot(unitID);
  const unit = collab?.getUnit(unitID);
  const type = binding?.type ?? unit?.type ?? 2;
  const trunkId = binding?.trunk_unit_id ?? null;
  const trunk = trunkId ? collab?.getLatestSnapshot(trunkId) : null;
  const compared = compareSnapshots(trunk?.data ?? null, draft?.data ?? null, {
    comparisonId: `workspace-comparison-${worktreeId}-${unitID}`,
    unitId: unitID,
    type,
    name: unit?.name || binding?.name || unitID
  });
  return {
    result: compared.result,
    left: {
      revision: trunk?.rev,
      unitData: compared.leftUnitData
    },
    right: {
      revision: draft?.rev ?? unit?.rev,
      unitData: compared.rightUnitData
    }
  };
}

function sheetBlockResponse(
  collab: UniverCollabService | null | undefined,
  unitID: string,
  blockID: string
): Response {
  const snapshot = collab?.getLatestSnapshot(unitID);
  const block = snapshot ? getSheetBlockFromSnapshot(snapshot.data, decodeURIComponent(blockID)) : null;
  if (!block) {
    return jsonUniverser({ error: UNIVERSER_NOT_FOUND }, 404);
  }
  return jsonUniverser({
    error: UNIVERSER_OK,
    block: {
      id: block.id,
      startRow: block.startRow,
      endRow: block.endRow,
      data: block.data
    }
  });
}

function jsonUniverser(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
