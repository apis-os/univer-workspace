/**
 * Authenticated live Unit operations: open, range get/set, history, agent turns.
 *
 * Writes commit one OT changeset against the remote Universer unit instead of
 * editing a local createUnit snapshot.
 */

import type { WorkspaceSubject } from "./auth.js";
import { LiveUniverserClient } from "./collab.js";
import { workspaceError } from "./errors.js";
import { WorkspaceHttp } from "./http.js";
import type { WorkspaceRuntimeScope, WorkspaceUnitType } from "./runtime-target.js";
import {
  a1ToRowCol,
  activeSheetId,
  buildSetRangeChangeset,
  cellsFromGrid,
  getSheetRange,
  rowColToA1,
  sheetIdByName,
  snapshotRevision,
  type SheetCellValue,
  type SheetRangeCell,
} from "./sheet-mutations.js";

export interface LiveSheetRangeResult {
  readonly ok: true;
  readonly operation: "range";
  readonly mode: "get" | "set";
  readonly unitId: string;
  readonly committed: boolean;
  readonly revision: number;
  readonly cells: Array<Array<SheetCellValue | null>>;
  readonly changesetId?: string;
}

export interface LiveAgentTurnResult {
  readonly turnId: string;
  readonly unitId: string;
  readonly prompt: string;
  readonly text: string;
  readonly rev: number | null;
  readonly actor?: { userId: string; name: string };
  readonly toolCalls: Array<{ tool: string; args: Record<string, unknown>; result: unknown }>;
}

export function actorMemberId(userId: string): string {
  return `agent:${userId}`;
}

export class LiveWorkspaceUnit {
  private readonly collab: LiveUniverserClient;

  public constructor(
    private readonly http: WorkspaceHttp,
    private readonly options: { readonly subject?: WorkspaceSubject } = {},
  ) {
    this.collab = new LiveUniverserClient(http);
  }

  public client(): LiveUniverserClient {
    return this.collab;
  }

  public async open(input: {
    readonly unitId: string;
    readonly unitType?: WorkspaceUnitType;
    readonly scope?: WorkspaceRuntimeScope;
    readonly revision?: number;
  }) {
    return await this.collab.openUnit(input);
  }

  public async getRange(input: {
    readonly unitId: string;
    readonly range: string;
    readonly unitType?: WorkspaceUnitType;
    readonly scope?: WorkspaceRuntimeScope;
    readonly sheetName?: string;
    readonly sheetId?: string;
  }): Promise<LiveSheetRangeResult> {
    const opened = await this.collab.openUnit({
      unitId: input.unitId,
      unitType: input.unitType ?? "sheet",
      ...(input.scope !== undefined ? { scope: input.scope } : {}),
    });
    const sheetId = resolveSheetId(opened.snapshot, input.sheetId, input.sheetName);
    return {
      ok: true,
      operation: "range",
      mode: "get",
      unitId: input.unitId,
      committed: false,
      revision: opened.rev,
      cells: getSheetRange(opened.snapshot, input.range, sheetId),
    };
  }

  public async setRange(input: {
    readonly unitId: string;
    readonly unitType?: WorkspaceUnitType;
    readonly scope?: WorkspaceRuntimeScope;
    readonly range?: string;
    readonly values?: unknown;
    readonly cells?: readonly SheetRangeCell[];
    readonly sheetName?: string;
    readonly sheetId?: string;
  }): Promise<LiveSheetRangeResult> {
    const unitType = input.unitType ?? "sheet";
    if (unitType !== "sheet") {
      throw workspaceError("workspace-argument-invalid", "Live setRange only supports Sheet Units.");
    }
    const cells = resolveWriteCells(input);
    const opened = await this.collab.openUnit({
      unitId: input.unitId,
      unitType,
      ...(input.scope !== undefined ? { scope: input.scope } : {}),
    });
    const sheetId = resolveSheetId(opened.snapshot, input.sheetId, input.sheetName);
    const userID = this.options.subject?.id;
    const memberID = userID !== undefined ? actorMemberId(userID) : `agent:${crypto.randomUUID()}`;
    const rev = Math.max(snapshotRevision(opened.snapshot), opened.rev, 1) + 1;
    const changeset = buildSetRangeChangeset({
      unitId: input.unitId,
      rev,
      sheetId,
      cells,
      memberId: memberID,
      ...(userID !== undefined ? { userID } : {}),
    });
    await this.collab.submitChangeset({
      unitId: input.unitId,
      unitType,
      ...(input.scope !== undefined ? { scope: input.scope } : {}),
      changeset,
      memberID,
    });
    const verified = await this.collab.openUnit({
      unitId: input.unitId,
      unitType,
      ...(input.scope !== undefined ? { scope: input.scope } : {}),
    });
    const readRange = input.range?.trim() || boundingRange(cells);
    return {
      ok: true,
      operation: "range",
      mode: "set",
      unitId: input.unitId,
      committed: true,
      revision: verified.rev,
      cells: getSheetRange(verified.snapshot, readRange, sheetId),
      ...(typeof changeset.id === "string" ? { changesetId: changeset.id } : {}),
    };
  }

  public async history(unitId: string, scope?: WorkspaceRuntimeScope) {
    return await this.collab.listHistory(unitId, scope ?? { kind: "trunk" });
  }

  public async collaborators(unitId: string, scope?: WorkspaceRuntimeScope) {
    return await this.collab.listCollaborators(unitId, scope ?? { kind: "trunk" });
  }

  public async runAgentTurn(input: {
    readonly unitId: string;
    readonly prompt: string;
  }): Promise<LiveAgentTurnResult> {
    const body = await this.http.json(`/agents/${encodeURIComponent(input.unitId)}/turns`, {
      method: "POST",
      body: { prompt: input.prompt },
    });
    const parsedActor = parseActor(body["actor"]);
    return {
      turnId: typeof body["turnId"] === "string" ? body["turnId"] : "",
      unitId: typeof body["unitId"] === "string" ? body["unitId"] : input.unitId,
      prompt: typeof body["prompt"] === "string" ? body["prompt"] : input.prompt,
      text: typeof body["text"] === "string" ? body["text"] : "",
      rev: typeof body["rev"] === "number" ? body["rev"] : null,
      ...(parsedActor !== undefined ? { actor: parsedActor } : {}),
      toolCalls: Array.isArray(body["toolCalls"]) ? (body["toolCalls"] as LiveAgentTurnResult["toolCalls"]) : [],
    };
  }
}

function resolveSheetId(
  snapshot: Record<string, unknown>,
  sheetId?: string,
  sheetName?: string,
): string {
  if (sheetId !== undefined && sheetId !== "") return sheetId;
  if (sheetName !== undefined && sheetName !== "") {
    const named = sheetIdByName(snapshot, sheetName);
    if (named === undefined) throw new Error(`worksheet not found: ${sheetName}`);
    return named;
  }
  return activeSheetId(snapshot);
}

function resolveWriteCells(input: {
  readonly range?: string;
  readonly values?: unknown;
  readonly cells?: readonly SheetRangeCell[];
}): SheetRangeCell[] {
  if (input.cells !== undefined && input.cells.length > 0) {
    return input.cells.map((cell) => ({ a1: cell.a1.toUpperCase(), value: cell.value }));
  }
  const range = input.range?.trim();
  if (range !== undefined && range !== "" && input.values !== undefined) {
    return cellsFromGrid(range.toUpperCase(), input.values);
  }
  throw workspaceError("workspace-argument-invalid", "Live setRange requires values or cells.");
}

function boundingRange(cells: readonly SheetRangeCell[]): string {
  if (cells.length === 0) return "A1";
  if (cells.length === 1) return cells[0]!.a1.toUpperCase();
  let minRow = Number.POSITIVE_INFINITY;
  let minCol = Number.POSITIVE_INFINITY;
  let maxRow = 0;
  let maxCol = 0;
  for (const cell of cells) {
    const parsed = a1ToRowCol(cell.a1);
    minRow = Math.min(minRow, parsed.row);
    minCol = Math.min(minCol, parsed.col);
    maxRow = Math.max(maxRow, parsed.row);
    maxCol = Math.max(maxCol, parsed.col);
  }
  return `${rowColToA1(minRow, minCol)}:${rowColToA1(maxRow, maxCol)}`;
}

function parseActor(value: unknown): LiveAgentTurnResult["actor"] {
  if (value === null || typeof value !== "object") return undefined;
  const record = value as Record<string, unknown>;
  if (typeof record["userId"] !== "string" || typeof record["name"] !== "string") return undefined;
  return { userId: record["userId"], name: record["name"] };
}
