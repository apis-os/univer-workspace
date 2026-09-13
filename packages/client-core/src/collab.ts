/**
 * Live Univer Pro collaboration client over Workspace Universer HTTP.
 *
 * This is the Node-hosted equivalent of univer-sdk-skills `loadServerUnit`:
 * snapshot, comb/new_changes, history, session-ticket, and comb/connect.
 * It does not create a local unit with the server unitId.
 */

import { workspaceError } from "./errors.js";
import { isWorkspaceRecord, WorkspaceHttp } from "./http.js";
import {
  workspaceSnapshotPrefix,
  type WorkspaceRuntimeScope,
  type WorkspaceUnitType,
} from "./runtime-target.js";
import { univerTypeNumber } from "./sheet-mutations.js";

export interface LiveCollaborationEndpoints {
  readonly snapshotServerUrl: string;
  readonly collabSubmitChangesetUrl: string;
  readonly collabWebSocketUrl: string;
}

export interface LiveUnitSnapshot {
  readonly unitId: string;
  readonly unitType: WorkspaceUnitType;
  readonly rev: number;
  readonly snapshot: Record<string, unknown>;
  readonly changesets: readonly Record<string, unknown>[];
  readonly scope: WorkspaceRuntimeScope;
}

export interface LiveHistoryEntry {
  readonly id: string | null;
  readonly rev: number | null;
  readonly createdAt: string | null;
  readonly userId: string | null;
}

export interface LiveCollaborator {
  readonly id: string | null;
  readonly name: string | null;
}

export function liveCollaborationEndpoints(
  origin: string,
  scope: WorkspaceRuntimeScope = { kind: "trunk" },
): LiveCollaborationEndpoints {
  const base = new URL(origin).origin;
  const prefix =
    scope.kind === "trunk"
      ? "/universer-api"
      : `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}`;
  const ws = base.replace(/^http/u, "ws");
  return {
    snapshotServerUrl: `${base}${prefix}/snapshot`,
    collabSubmitChangesetUrl: `${base}${prefix}/comb`,
    collabWebSocketUrl: `${ws}${prefix}/comb/connect`,
  };
}

export function universerPrefix(scope: WorkspaceRuntimeScope = { kind: "trunk" }): string {
  return scope.kind === "trunk"
    ? "/universer-api"
    : `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}`;
}

export class LiveUniverserClient {
  public constructor(private readonly http: WorkspaceHttp) {}

  public endpoints(scope: WorkspaceRuntimeScope = { kind: "trunk" }): LiveCollaborationEndpoints {
    return liveCollaborationEndpoints(this.http.origin, scope);
  }

  /**
   * Load the persisted server unit (`loadServerUnit`). Never `createUnit`
   * with that unitId on the client.
   */
  public async openUnit(input: {
    readonly unitId: string;
    readonly unitType?: WorkspaceUnitType;
    readonly scope?: WorkspaceRuntimeScope;
    readonly revision?: number;
  }): Promise<LiveUnitSnapshot> {
    const unitType = input.unitType ?? "sheet";
    const scope = input.scope ?? { kind: "trunk" };
    const type = univerTypeNumber(unitType);
    const revPath =
      input.revision !== undefined && input.revision >= 0 ? `/rev/${String(input.revision)}` : "";
    const body = await this.http.json(
      `${workspaceSnapshotPrefix(scope)}/${type}/unit/${encodeURIComponent(input.unitId)}${revPath}`,
    );
    const snapshot = asRecord(body["snapshot"]) ?? {};
    const changesets = Array.isArray(body["changesets"])
      ? body["changesets"].filter(isWorkspaceRecord)
      : [];
    const rev =
      typeof (snapshot as { rev?: unknown }).rev === "number"
        ? ((snapshot as { rev: number }).rev)
        : changesets.length > 0
          ? Number((changesets.at(-1) as { revision?: unknown; rev?: unknown } | undefined)?.revision ??
              (changesets.at(-1) as { rev?: unknown } | undefined)?.rev ??
              1)
          : 1;
    return {
      unitId: input.unitId,
      unitType,
      rev: Number.isFinite(rev) ? rev : 1,
      snapshot,
      changesets,
      scope,
    };
  }

  public async submitChangeset(input: {
    readonly unitId: string;
    readonly unitType?: WorkspaceUnitType;
    readonly scope?: WorkspaceRuntimeScope;
    readonly changeset: Record<string, unknown>;
    readonly memberID: string;
  }): Promise<{ readonly ok: true; readonly unitId: string }> {
    const unitType = input.unitType ?? "sheet";
    const scope = input.scope ?? { kind: "trunk" };
    const type = univerTypeNumber(unitType);
    await this.http.json(`${universerPrefix(scope)}/comb/${type}/unit/${encodeURIComponent(input.unitId)}/new_changes`, {
      method: "POST",
      body: {
        changeset: input.changeset,
        memberID: input.memberID,
      },
    });
    return { ok: true, unitId: input.unitId };
  }

  public async listHistory(
    unitId: string,
    scope: WorkspaceRuntimeScope = { kind: "trunk" },
  ): Promise<readonly LiveHistoryEntry[]> {
    const prefix =
      scope.kind === "trunk"
        ? "/universer-api/history"
        : `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/history`;
    const body = await this.http.json(`${prefix}/${encodeURIComponent(unitId)}/list`);
    return parseHistory(body);
  }

  public async listCollaborators(
    unitId: string,
    scope: WorkspaceRuntimeScope = { kind: "trunk" },
  ): Promise<readonly LiveCollaborator[]> {
    const prefix =
      scope.kind === "trunk"
        ? "/universer-api/history"
        : `/universer-api/worktrees/${encodeURIComponent(scope.worktreeId)}/history`;
    const body = await this.http.json(`${prefix}/${encodeURIComponent(unitId)}/creators`);
    return parseCollaborators(body);
  }

  public async sessionTicket(): Promise<string> {
    const body = await this.http.json("/universer-api/user/session-ticket");
    const ticket = body["ticket"];
    if (typeof ticket !== "string" || ticket.trim() === "") {
      throw workspaceError(
        "workspace-invalid-response",
        "Universer session-ticket response did not include a ticket.",
      );
    }
    return ticket;
  }

  /** WebSocket URL for `FCollaboration` connect after minting a session ticket. */
  public async collaborationSocketUrl(
    scope: WorkspaceRuntimeScope = { kind: "trunk" },
  ): Promise<string> {
    const ticket = await this.sessionTicket();
    const endpoints = this.endpoints(scope);
    const url = new URL(endpoints.collabWebSocketUrl);
    url.searchParams.set("sessionTicket", ticket);
    return url.href;
  }
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return isWorkspaceRecord(value) ? value : undefined;
}

function parseHistory(raw: Record<string, unknown>): readonly LiveHistoryEntry[] {
  const ids = raw["historyIds"];
  const entities = asRecord(raw["entities"]);
  const datas = entities !== undefined ? asRecord(entities["datas"]) : asRecord(raw["datas"]);
  if (Array.isArray(ids) && datas !== undefined) {
    return ids.flatMap((id) => {
      const key = typeof id === "string" || typeof id === "number" ? String(id) : "";
      const row = asRecord(datas[key]);
      if (key === "" || row === undefined) return [];
      return [
        {
          id: key,
          rev: numberish(row["endRevision"] ?? row["startRevision"] ?? row["rev"]),
          createdAt: stringish(row["createTime"] ?? row["createdAt"]),
          userId: stringish(row["userId"] ?? row["userID"]),
        },
      ];
    });
  }
  const items = Array.isArray(raw["items"])
    ? raw["items"]
    : Array.isArray(raw["list"])
      ? raw["list"]
      : Array.isArray(raw["changesets"])
        ? raw["changesets"]
        : [];
  return items.flatMap((item) => {
    if (!isWorkspaceRecord(item)) return [];
    return [
      {
        id: stringish(item["id"] ?? item["csID"] ?? item["changesetId"]),
        rev: numberish(item["rev"] ?? item["revision"] ?? item["csID"]),
        createdAt: stringish(item["createdAt"] ?? item["createTime"] ?? item["t"]),
        userId: stringish(item["userId"] ?? item["userID"] ?? item["memberID"]),
      },
    ];
  });
}

function parseCollaborators(raw: Record<string, unknown>): readonly LiveCollaborator[] {
  const items = Array.isArray(raw["creators"])
    ? raw["creators"]
    : Array.isArray(raw["members"])
      ? raw["members"]
      : Array.isArray(raw["items"])
        ? raw["items"]
        : [];
  return items.flatMap((item) => {
    if (typeof item === "string") return [{ id: item, name: item }];
    if (!isWorkspaceRecord(item)) return [];
    return [
      {
        id: stringish(item["id"] ?? item["userID"] ?? item["userId"] ?? item["memberID"]),
        name: stringish(item["name"] ?? item["displayName"] ?? item["username"]),
      },
    ];
  });
}

function stringish(value: unknown): string | null {
  return typeof value === "string" && value.trim() !== "" ? value : null;
}

function numberish(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
