import { isBotCollaborator, presenceRingToken, type PresenceRingToken } from "./presence-roster";
import { highlightSheetRanges, type SheetHighlightHandle } from "./sheet-range-highlight";

export interface BlameCell {
  readonly a1: string;
  readonly userID: string;
  readonly rev: number;
}

export const BLAME_HEAT_EVENT = "workspace-blame-heat";

function colIndex(letters: string): number {
  let col = 0;
  for (let i = 0; i < letters.length; i += 1) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return col - 1;
}

function colName(col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

function expandA1RangeString(rangeStr: string): string[] {
  const trimmed = rangeStr.trim();
  const [start, end] = trimmed.split(":");
  if (!end || start.trim().toUpperCase() === end.trim().toUpperCase()) {
    return [start.trim().toUpperCase()];
  }
  const startMatch = /^([A-Za-z]+)(\d+)$/.exec(start.trim());
  const endMatch = /^([A-Za-z]+)(\d+)$/.exec(end.trim());
  if (!startMatch || !endMatch) return [trimmed.toUpperCase()];

  const minCol = Math.min(colIndex(startMatch[1].toUpperCase()), colIndex(endMatch[1].toUpperCase()));
  const maxCol = Math.max(colIndex(startMatch[1].toUpperCase()), colIndex(endMatch[1].toUpperCase()));
  const minRow = Math.min(parseInt(startMatch[2], 10), parseInt(endMatch[2], 10));
  const maxRow = Math.max(parseInt(startMatch[2], 10), parseInt(endMatch[2], 10));

  const results: string[] = [];
  for (let r = minRow; r <= maxRow; r += 1) {
    for (let c = minCol; c <= maxCol; c += 1) {
      results.push(`${colName(c)}${r}`);
    }
  }
  return results;
}

function expandRangeObject(range: Record<string, unknown>): string[] {
  const startRow = Number(range.startRow);
  const startColumn = Number(range.startColumn ?? range.startCol);
  const endRow = Number(range.endRow ?? startRow);
  const endColumn = Number(range.endColumn ?? range.endCol ?? startColumn);
  if (
    !Number.isFinite(startRow) ||
    !Number.isFinite(startColumn) ||
    !Number.isFinite(endRow) ||
    !Number.isFinite(endColumn)
  ) {
    return [];
  }
  const minRow = Math.min(startRow, endRow);
  const maxRow = Math.max(startRow, endRow);
  const minCol = Math.min(startColumn, endColumn);
  const maxCol = Math.max(startColumn, endColumn);

  const results: string[] = [];
  for (let r = minRow; r <= maxRow; r += 1) {
    for (let c = minCol; c <= maxCol; c += 1) {
      results.push(`${colName(c)}${r + 1}`);
    }
  }
  return results;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

export function a1FromSetRangeMutation(mutation: Record<string, unknown>): string[] {
  const id = String(mutation.id ?? "");
  if (!id.includes("set-range-values")) return [];

  const params = asRecord(mutation.params) ?? mutation;
  const rawRange = params.range ?? mutation.range;

  if (typeof rawRange === "string" && rawRange.trim()) {
    return expandA1RangeString(rawRange);
  }
  if (Array.isArray(rawRange)) {
    const results: string[] = [];
    for (const item of rawRange) {
      if (typeof item === "string" && item.trim()) {
        results.push(...expandA1RangeString(item));
        continue;
      }
      const rangeObj = asRecord(item);
      if (rangeObj) results.push(...expandRangeObject(rangeObj));
    }
    if (results.length) return results;
  }
  const rangeObj = asRecord(rawRange);
  if (rangeObj) {
    return expandRangeObject(rangeObj);
  }

  const cellValue = asRecord(params.cellValue) ?? asRecord(mutation.cellValue);
  if (cellValue) {
    const results: string[] = [];
    for (const [rStr, cols] of Object.entries(cellValue)) {
      const r = parseInt(rStr, 10);
      const colsObj = asRecord(cols);
      if (Number.isFinite(r) && colsObj) {
        for (const cStr of Object.keys(colsObj)) {
          const c = parseInt(cStr, 10);
          if (Number.isFinite(c)) {
            results.push(`${colName(c)}${r + 1}`);
          }
        }
      }
    }
    return results;
  }

  return [];
}

export function a1sFromCommandExecuted(command: unknown): string[] {
  const rec = asRecord(command);
  if (!rec) return [];
  const nested = asRecord(rec.command);
  if (nested) {
    const nestedA1s = a1sFromCommandExecuted(nested);
    if (nestedA1s.length) return nestedA1s;
  }
  const params = asRecord(rec.params) ?? rec;
  const id = String(rec.id ?? params.id ?? "");
  const mutationId =
    /set-range/i.test(id) || asRecord(params.cellValue) || params.range
      ? id || "sheet.mutation.set-range-values"
      : id;
  return a1FromSetRangeMutation({
    id: mutationId,
    params,
    range: params.range ?? rec.range,
    cellValue: params.cellValue ?? rec.cellValue ?? params.value ?? rec.value,
  });
}

export function commandFromCollab(command: unknown, options?: unknown): boolean {
  const rec = asRecord(command);
  const nested = rec ? asRecord(rec.command) : null;
  const opts =
    asRecord(options) ??
    asRecord(rec?.options) ??
    asRecord(nested?.options);
  return opts?.fromCollab === true;
}

export function blameFromChangesets(
  entries: readonly {
    clientId: string;
    rev: number;
    changeset: Record<string, unknown>;
  }[]
): readonly BlameCell[] {
  const cells = new Map<string, BlameCell>();
  for (const entry of entries) {
    const cs = asRecord(entry.changeset) ?? {};
    const userID =
      (typeof entry.clientId === "string" && entry.clientId.trim()) ||
      (typeof cs.userID === "string" && cs.userID.trim()) ||
      (typeof cs.memberID === "string" && cs.memberID.trim()) ||
      "user_admin";
    const rev = entry.rev;
    const mutations = Array.isArray(cs.mutations)
      ? cs.mutations
      : Array.isArray(cs.actions)
        ? cs.actions
        : Array.isArray(asRecord(cs.cs)?.mutations)
          ? (asRecord(cs.cs) as { mutations: unknown[] }).mutations
          : [];
    let wrote = false;
    for (const mut of mutations) {
      const mutationObj = asRecord(mut);
      if (!mutationObj) continue;
      const a1s = a1FromSetRangeMutation(mutationObj);
      for (const a1 of a1s) {
        cells.set(a1, { a1, userID, rev });
        wrote = true;
      }
    }
    if (!wrote) {
      for (const a1 of a1sFromCommandExecuted(cs)) {
        cells.set(a1, { a1, userID, rev });
      }
    }
  }
  return Array.from(cells.values());
}

export function calculateBlameHeatAlpha(input: {
  userID: string;
  rev: number;
  maxRev: number;
  writerRevs?: readonly number[];
  reducedMotion?: boolean;
}): number {
  if (input.reducedMotion) return 0.0;
  if (isBotCollaborator(input.userID)) return 0.4;
  if (
    input.writerRevs &&
    input.writerRevs.length > 1 &&
    input.writerRevs.some((r) => input.maxRev - r <= 3)
  ) {
    return 0.24;
  }
  return 0.12;
}

export function applyBlameHeat(
  host: { getActiveWorkbook?: () => unknown } | undefined,
  cells: readonly BlameCell[],
  reducedMotion: boolean,
  enabled = false
): SheetHighlightHandle {
  if (!enabled || cells.length === 0) {
    return { dispose() {} };
  }

  const maxRev = cells.reduce((acc, c) => Math.max(acc, c.rev), 0);
  const revsByWriter = new Map<string, number[]>();
  for (const cell of cells) {
    const list = revsByWriter.get(cell.userID) ?? [];
    list.push(cell.rev);
    revsByWriter.set(cell.userID, list);
  }

  const handles: SheetHighlightHandle[] = [];

  for (const cell of cells) {
    const ringToken = presenceRingToken({ userID: cell.userID });
    const writerRevs = revsByWriter.get(cell.userID) ?? [];
    const fillAlpha = calculateBlameHeatAlpha({
      userID: cell.userID,
      rev: cell.rev,
      maxRev,
      writerRevs,
      reducedMotion,
    });
    const handle = highlightSheetRanges(host, [cell.a1], {
      ringToken,
      fillAlpha,
      strokeAlpha: 0.86,
      strokeWidth: 1,
      reducedMotion,
    });
    handles.push(handle);
  }

  return {
    dispose() {
      for (const h of handles) {
        h.dispose();
      }
    },
  };
}
