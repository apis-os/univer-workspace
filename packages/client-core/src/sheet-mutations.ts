/**
 * Facade-shaped Sheet mutations for live Universer OT.
 *
 * Cell addressing follows univer-sdk-skills `getRange` / `setValues` recipes.
 * The resulting changeset uses `sheet.mutation.set-range-values`, the same
 * command the edge ChatAgent materializes onto stored snapshots.
 */

export interface SheetCellValue {
  v?: string | number | boolean | null;
  f?: string;
  t?: number;
  [key: string]: unknown;
}

export interface SheetRangeCell {
  readonly a1: string;
  readonly value: unknown;
}

export function univerTypeNumber(unitType: string): number {
  switch (unitType) {
    case "doc":
      return 1;
    case "slide":
      return 3;
    case "board":
      return 5;
    case "base":
      return 6;
    default:
      return 2;
  }
}

export function a1ToRowCol(a1: string): { row: number; col: number } {
  const match = /^\$?([A-Za-z]{1,3})\$?(\d+)$/u.exec(String(a1).trim());
  if (match === null) {
    throw new Error(`Invalid A1 address: ${a1}`);
  }
  const letters = match[1]!.toUpperCase();
  let col = 0;
  for (const letter of letters) col = col * 26 + (letter.charCodeAt(0) - 64);
  return { row: Number(match[2]) - 1, col: col - 1 };
}

export function rowColToA1(row: number, col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return `${letters}${row + 1}`;
}

export function encodeSheetCell(value: unknown): SheetCellValue {
  if (value === null || value === undefined) {
    return { v: null };
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return { ...(value as SheetCellValue) };
  }
  if (typeof value === "string" && value.startsWith("=")) return { f: value };
  if (typeof value === "string") return { v: value, t: 1 };
  if (typeof value === "number") return { v: value, t: 2 };
  if (typeof value === "boolean") return { v: value ? 1 : 0, t: 3 };
  throw new Error("Sheet cell values must be JSON scalars or ICellData.");
}

export function parseA1Range(range: string): { start: { row: number; col: number }; end: { row: number; col: number } } {
  const [startRaw, endRaw] = range.split(":");
  const start = a1ToRowCol(startRaw!);
  const end = endRaw ? a1ToRowCol(endRaw) : start;
  return {
    start: { row: Math.min(start.row, end.row), col: Math.min(start.col, end.col) },
    end: { row: Math.max(start.row, end.row), col: Math.max(start.col, end.col) },
  };
}

export function cellsFromGrid(range: string, values: unknown): SheetRangeCell[] {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error("Sheet values must be a non-empty 2D array.");
  }
  const { start } = parseA1Range(range);
  const cells: SheetRangeCell[] = [];
  for (let r = 0; r < values.length; r += 1) {
    const row = values[r];
    if (!Array.isArray(row) || row.length === 0) {
      throw new Error(`Sheet values[${String(r)}] must be a non-empty row.`);
    }
    for (let c = 0; c < row.length; c += 1) {
      cells.push({ a1: rowColToA1(start.row + r, start.col + c), value: row[c] });
    }
  }
  return cells;
}

export function cellValueMap(
  cells: readonly SheetRangeCell[],
): Record<string, Record<string, SheetCellValue>> {
  const cellValue: Record<string, Record<string, SheetCellValue>> = {};
  for (const cell of cells) {
    const { row, col } = a1ToRowCol(cell.a1);
    const rowKey = String(row);
    const colKey = String(col);
    if (cellValue[rowKey] === undefined) cellValue[rowKey] = {};
    cellValue[rowKey][colKey] = encodeSheetCell(cell.value);
  }
  return cellValue;
}

export function buildSetRangeChangeset(input: {
  unitId: string;
  rev: number;
  sheetId: string;
  cells: readonly SheetRangeCell[];
  memberId: string;
  userID?: string;
}): Record<string, unknown> {
  const changeset: Record<string, unknown> = {
    id: `cs_agent_${crypto.randomUUID()}`,
    unitID: input.unitId,
    revision: input.rev,
    rev: input.rev,
    memberID: input.memberId,
    mutations: [
      {
        id: "sheet.mutation.set-range-values",
        params: {
          unitId: input.unitId,
          subUnitId: input.sheetId,
          cellValue: cellValueMap(input.cells),
        },
      },
    ],
  };
  if (input.userID !== undefined) changeset.userID = input.userID;
  return changeset;
}

function workbookOf(snapshot: Record<string, unknown>): Record<string, any> {
  const workbook = ((snapshot as { workbook?: Record<string, any> }).workbook ?? snapshot) as Record<
    string,
    any
  >;
  if (workbook?.sheets === undefined) {
    throw new Error("Snapshot is not a sheet workbook");
  }
  return workbook;
}

export function activeSheetId(snapshot: Record<string, unknown>, sheetId?: string): string {
  const workbook = workbookOf(snapshot);
  if (sheetId !== undefined && sheetId !== "") return sheetId;
  const order = workbook.sheetOrder;
  if (Array.isArray(order) && typeof order[0] === "string") return order[0];
  const ids = Object.keys(workbook.sheets ?? {});
  if (ids[0] === undefined) throw new Error("Workbook has no worksheets");
  return ids[0];
}

export function sheetIdByName(snapshot: Record<string, unknown>, sheetName: string): string | undefined {
  const workbook = workbookOf(snapshot);
  for (const [id, sheet] of Object.entries(workbook.sheets ?? {})) {
    if (sheet && typeof sheet === "object" && (sheet as { name?: unknown }).name === sheetName) {
      return id;
    }
  }
  return undefined;
}

export function getSheetCell(
  snapshot: Record<string, unknown>,
  a1: string,
  sheetId?: string,
): SheetCellValue | null {
  const { row, col } = a1ToRowCol(a1);
  const workbook = workbookOf(snapshot);
  const id = activeSheetId(snapshot, sheetId);
  const sheet = workbook.sheets?.[id];
  const cell = sheet?.cellData?.[String(row)]?.[String(col)] ?? sheet?.cellData?.[row]?.[col];
  return cell ? { ...cell } : null;
}

export function getSheetRange(
  snapshot: Record<string, unknown>,
  range: string,
  sheetId?: string,
): Array<Array<SheetCellValue | null>> {
  const { start, end } = parseA1Range(range);
  const rows: Array<Array<SheetCellValue | null>> = [];
  for (let r = start.row; r <= end.row; r += 1) {
    const row: Array<SheetCellValue | null> = [];
    for (let c = start.col; c <= end.col; c += 1) {
      row.push(getSheetCell(snapshot, rowColToA1(r, c), sheetId));
    }
    rows.push(row);
  }
  return rows;
}

export function snapshotRevision(snapshot: Record<string, unknown>): number {
  const rev = (snapshot as { rev?: unknown }).rev;
  if (typeof rev === "number" && Number.isFinite(rev)) return rev;
  const workbookRev = (snapshot as { workbook?: { rev?: unknown } }).workbook?.rev;
  if (typeof workbookRev === "number" && Number.isFinite(workbookRev)) return workbookRev;
  return 0;
}
