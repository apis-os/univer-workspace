import { historyDisplayName } from "../editor/history-names";
import {
  blameFromChangesets,
  type BlameCell,
} from "../editor/ot-blame-heat";
import {
  presenceRingToken,
  type PresenceRingToken,
} from "../editor/presence-roster";
import { formatRingColor } from "../editor/sheet-range-highlight";
import { DEMO_UNIVER_FILE, fileKeyOf } from "./demo-what-if";

export const FORMULA_INSPECT_UNIT_ID = "unit_welcome_sheet";
export const FORMULA_INSPECT_RANGE = "E2";
export const Q3_SUM_FORMULA = "=SUM(B2:D2)";
export const Q3_SUM_PRECEDENT = "B2:D2";

const A1_IN_FORMULA =
  /\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?/g;

export type FormulaInspectSource = "inspect" | "snapshot";

export interface PrecedentProvenance {
  readonly a1: string;
  readonly v?: unknown;
  readonly userID: string | null;
  readonly name: string;
  readonly ringToken: PresenceRingToken;
}

export interface FormulaInspectPayload {
  readonly range: string;
  readonly f?: unknown;
  readonly v?: unknown;
  readonly precedents: readonly string[];
  readonly provenance: readonly PrecedentProvenance[];
  readonly source: FormulaInspectSource;
}

export interface FormulaInspectorHost {
  readonly getActiveWorkbook?: () => unknown;
  readonly unitId?: string;
  readonly worktreeId?: string;
}

export interface FormulaInspectLoadInput {
  readonly range?: string;
  readonly unitId?: string;
  readonly worktreeId?: string;
  readonly fetch?: typeof fetch;
  readonly snapshot?: () => { readonly f?: unknown; readonly v?: unknown } | null;
  readonly host?: FormulaInspectorHost;
  readonly blame?: readonly BlameCell[];
  readonly getCellValue?: (a1: string) => unknown;
}

let inspectorHost: FormulaInspectorHost | undefined;

export function bindFormulaInspectorHost(
  host: FormulaInspectorHost | undefined
): void {
  inspectorHost = host;
}

export function formulaInspectorHost(): FormulaInspectorHost | undefined {
  return inspectorHost;
}

export function precedentsFromFormula(f: unknown): string[] {
  if (typeof f !== "string" || !f.trim()) return [];
  const seen = new Set<string>();
  const ranges: string[] = [];
  const matches = f.match(A1_IN_FORMULA) ?? [];
  for (const match of matches) {
    const a1 = match.replaceAll("$", "").toUpperCase();
    if (!a1 || seen.has(a1)) continue;
    seen.add(a1);
    ranges.push(a1);
  }
  return ranges;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function cellFromInspectBody(
  body: Record<string, unknown>
): { f?: unknown; v?: unknown } {
  const cells = body.cells;
  const first =
    Array.isArray(cells) && Array.isArray(cells[0])
      ? asRecord(cells[0][0])
      : null;
  return {
    ...("f" in body || first?.f !== undefined ? { f: body.f ?? first?.f } : {}),
    ...("v" in body || first?.v !== undefined ? { v: body.v ?? first?.v } : {}),
  };
}

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

export function expandPrecedentCells(precedents: readonly string[]): string[] {
  const result: string[] = [];
  const seen = new Set<string>();

  for (const prec of precedents) {
    const trimmed = prec.trim();
    if (!trimmed) continue;
    const [start, end] = trimmed.split(":");
    if (!end || start.trim().toUpperCase() === end.trim().toUpperCase()) {
      const a1 = start.trim().toUpperCase();
      if (!seen.has(a1)) {
        seen.add(a1);
        result.push(a1);
      }
      continue;
    }
    const startMatch = /^([A-Za-z]+)(\d+)$/.exec(start.trim());
    const endMatch = /^([A-Za-z]+)(\d+)$/.exec(end.trim());
    if (!startMatch || !endMatch) {
      const a1 = trimmed.toUpperCase();
      if (!seen.has(a1)) {
        seen.add(a1);
        result.push(a1);
      }
      continue;
    }

    const minCol = Math.min(colIndex(startMatch[1].toUpperCase()), colIndex(endMatch[1].toUpperCase()));
    const maxCol = Math.max(colIndex(startMatch[1].toUpperCase()), colIndex(endMatch[1].toUpperCase()));
    const minRow = Math.min(parseInt(startMatch[2], 10), parseInt(endMatch[2], 10));
    const maxRow = Math.max(parseInt(startMatch[2], 10), parseInt(endMatch[2], 10));

    for (let r = minRow; r <= maxRow; r += 1) {
      for (let c = minCol; c <= maxCol; c += 1) {
        const a1 = `${colName(c)}${r}`;
        if (!seen.has(a1)) {
          seen.add(a1);
          result.push(a1);
        }
      }
    }
  }

  return result;
}

export function computeProvenance(
  precedents: readonly string[],
  blame: readonly BlameCell[] = [],
  host?: FormulaInspectorHost,
  getCellValue?: (a1: string) => unknown
): PrecedentProvenance[] {
  const cells = expandPrecedentCells(precedents);
  const blameMap = new Map<string, BlameCell>();
  for (const b of blame) {
    blameMap.set(b.a1.toUpperCase(), b);
  }

  return cells.map((a1) => {
    const b = blameMap.get(a1.toUpperCase());
    const userID = b?.userID ?? null;
    const name = userID ? historyDisplayName(userID) : "—";
    const ringToken = userID ? presenceRingToken({ userID }) : "brand-600";
    const v = getCellValue?.(a1) ?? readFacadeSnapshotCell(host, a1)?.v;
    return {
      a1,
      v,
      userID,
      name,
      ringToken,
    };
  });
}

export function formulaInspectFromInspectBody(
  range: string,
  body: Record<string, unknown>,
  blame?: readonly BlameCell[],
  host?: FormulaInspectorHost,
  getCellValue?: (a1: string) => unknown
): FormulaInspectPayload {
  const cell = cellFromInspectBody(body);
  const f = cell.f;
  const precedents = Array.isArray(body.precedents)
    ? body.precedents.map((item) => String(item))
    : precedentsFromFormula(f);
  const provenance = computeProvenance(precedents, blame, host, getCellValue);
  return {
    range,
    f,
    v: cell.v,
    precedents,
    provenance,
    source: "inspect",
  };
}

export function inspectFormulaUrl(
  unitId: string,
  range: string,
  worktreeId?: string
): string {
  const query = new URLSearchParams({ range });
  if (worktreeId) query.set("worktreeId", worktreeId);
  return `/uf/${fileKeyOf(DEMO_UNIVER_FILE)}/units/${encodeURIComponent(unitId)}/inspect?${query.toString()}`;
}

export function isAltInspectClick(event: {
  readonly altKey: boolean;
  readonly button?: number;
  readonly metaKey?: boolean;
  readonly ctrlKey?: boolean;
}): boolean {
  if (!event.altKey) return false;
  if (event.metaKey || event.ctrlKey) return false;
  return (event.button ?? 0) === 0;
}

export function readFacadeSnapshotCell(
  host: FormulaInspectorHost | undefined = inspectorHost,
  a1: string = FORMULA_INSPECT_RANGE
): { f?: unknown; v?: unknown } | null {
  const workbook = host?.getActiveWorkbook?.();
  const wb = asRecord(workbook);
  if (!wb || typeof wb.getActiveSheet !== "function") return null;
  const sheet = (wb.getActiveSheet as () => unknown).call(workbook);
  const sh = asRecord(sheet);
  if (!sh || typeof sh.getRange !== "function") return null;
  const range = (sh.getRange as (address: string) => unknown).call(sheet, a1);
  const rec = asRecord(range);
  if (!rec) return null;
  if (typeof rec.getCellData === "function") {
    const data = asRecord((rec.getCellData as () => unknown).call(range));
    if (data) {
      return {
        ...("f" in data ? { f: data.f } : {}),
        ...("v" in data ? { v: data.v } : {}),
      };
    }
  }
  const f =
    typeof rec.getFormula === "function"
      ? (rec.getFormula as () => unknown).call(range)
      : undefined;
  const v =
    typeof rec.getValue === "function"
      ? (rec.getValue as () => unknown).call(range)
      : undefined;
  if (f == null && v == null) return null;
  return { f, v };
}

export function readInspectorRangeA1(
  host: FormulaInspectorHost | undefined = inspectorHost
): string | null {
  const workbook = host?.getActiveWorkbook?.();
  const wb = asRecord(workbook);
  if (!wb) return null;
  if (typeof wb.getActiveRange === "function") {
    const range = (wb.getActiveRange as () => unknown).call(workbook);
    const a1 = a1FromRange(range);
    if (a1) return a1;
  }
  if (typeof wb.getActiveSheet !== "function") return null;
  const sheet = (wb.getActiveSheet as () => unknown).call(workbook);
  const sh = asRecord(sheet);
  if (!sh) return null;
  if (typeof sh.getActiveRange === "function") {
    return a1FromRange((sh.getActiveRange as () => unknown).call(sheet));
  }
  if (typeof sh.getSelection !== "function") return null;
  const selection = asRecord((sh.getSelection as () => unknown).call(sheet));
  if (!selection || typeof selection.getActiveRange !== "function") return null;
  return a1FromRange((selection.getActiveRange as () => unknown).call(selection));
}

function a1FromRange(range: unknown): string | null {
  if (typeof range === "string") {
    const trimmed = range.trim();
    return trimmed || null;
  }
  const rec = asRecord(range);
  if (!rec) return null;
  if (typeof rec.getA1Notation === "function") {
    const a1 = String((rec.getA1Notation as () => unknown).call(range) ?? "").trim();
    return a1 || null;
  }
  return null;
}

export async function loadFormulaInspect(
  input: FormulaInspectLoadInput = {}
): Promise<FormulaInspectPayload> {
  const host = input.host ?? inspectorHost;
  const range = input.range?.trim() || FORMULA_INSPECT_RANGE;
  const unitId = input.unitId ?? host?.unitId ?? FORMULA_INSPECT_UNIT_ID;
  const worktreeId = input.worktreeId ?? host?.worktreeId;
  const fetchImpl = input.fetch ?? globalThis.fetch.bind(globalThis);
  const url = inspectFormulaUrl(unitId, range, worktreeId);

  let blame = input.blame;
  if (!blame && fetchImpl) {
    try {
      const csUrl = `/universer-api/history/${encodeURIComponent(unitId)}/cs`;
      const csRes = await fetchImpl(csUrl, { credentials: "include" });
      if (csRes.ok) {
        const csBody = (await csRes.json()) as { changesets?: readonly any[] };
        if (Array.isArray(csBody?.changesets)) {
          blame = blameFromChangesets(csBody.changesets);
        }
      }
    } catch {
      // History not available or offline
    }
  }

  try {
    const response = await fetchImpl(url, { credentials: "include" });
    if (response.ok) {
      const body = (await response.json()) as Record<string, unknown>;
      return formulaInspectFromInspectBody(
        range,
        body,
        blame,
        host,
        input.getCellValue
      );
    }
  } catch {
    // Prefer inspect; snapshot is the fallback when the route is down.
  }
  const cell = input.snapshot?.() ?? readFacadeSnapshotCell(host, range);
  const precedents = precedentsFromFormula(cell?.f);
  return {
    range,
    f: cell?.f,
    v: cell?.v,
    precedents,
    provenance: computeProvenance(
      precedents,
      blame,
      host,
      input.getCellValue
    ),
    source: "snapshot",
  };
}

export function highlightPrecedentRangesOnce(
  host: FormulaInspectorHost | undefined,
  ranges: readonly string[],
  provenance?: readonly PrecedentProvenance[],
  options?: { reducedMotion?: boolean }
): { readonly highlighted: readonly string[] } {
  const highlighted = [...ranges];
  const workbook = host?.getActiveWorkbook?.();
  const wb = asRecord(workbook);
  if (!wb || typeof wb.getActiveSheet !== "function") {
    return { highlighted };
  }
  const sheet = (wb.getActiveSheet as () => unknown).call(workbook);
  const sh = asRecord(sheet);
  if (!sh) return { highlighted };
  const getRange = sh.getRange;
  const highlightRanges = sh.highlightRanges;
  if (typeof getRange !== "function" || typeof highlightRanges !== "function") {
    return { highlighted };
  }

  const provMap = new Map<string, PrecedentProvenance>();
  if (provenance) {
    for (const p of provenance) {
      provMap.set(p.a1.toUpperCase(), p);
    }
  }

  if (provMap.size > 0) {
    const reducedMotion = options?.reducedMotion ?? false;
    for (const a1 of ranges) {
      const p = provMap.get(a1.toUpperCase());
      const ringToken = p?.ringToken ?? "brand-600";
      const facadeRange = (getRange as (address: string) => unknown).call(sheet, a1);
      const stroke = formatRingColor(ringToken, 0.86);
      const fill = reducedMotion ? "rgba(0,0,0,0)" : formatRingColor(ringToken, 0.12);
      (highlightRanges as (next: readonly unknown[], style?: object) => unknown).call(
        sheet,
        [facadeRange],
        {
          fill,
          stroke,
          strokeWidth: 2,
          widgetSize: 0,
        }
      );
    }
  } else {
    const facadeRanges = ranges.map((a1) =>
      (getRange as (address: string) => unknown).call(sheet, a1)
    );
    (highlightRanges as (next: readonly unknown[], style?: object) => unknown).call(
      sheet,
      facadeRanges,
      {
        fill: "rgba(59,130,246,0.28)",
        stroke: "rgba(37,99,235,0.86)",
        strokeWidth: 2,
        widgetSize: 0,
      }
    );
  }
  return { highlighted };
}

export async function runFormulaInspect(
  range: string = FORMULA_INSPECT_RANGE,
  input: FormulaInspectLoadInput = {}
): Promise<FormulaInspectPayload> {
  const host = input.host ?? inspectorHost;
  const payload = await loadFormulaInspect({ ...input, range, host });
  const highlightTargets =
    payload.provenance.length > 0
      ? payload.provenance.map((p) => p.a1)
      : payload.precedents;
  highlightPrecedentRangesOnce(host, highlightTargets, payload.provenance);
  return payload;
}
