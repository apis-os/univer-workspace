import { DEMO_UNIVER_FILE, fileKeyOf } from "./demo-what-if";

export const FORMULA_INSPECT_UNIT_ID = "unit_welcome_sheet";
export const FORMULA_INSPECT_RANGE = "E2";
export const Q3_SUM_FORMULA = "=SUM(B2:D2)";
export const Q3_SUM_PRECEDENT = "B2:D2";

const A1_IN_FORMULA =
  /\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?/g;

export type FormulaInspectSource = "inspect" | "snapshot";

export interface FormulaInspectPayload {
  readonly range: string;
  readonly f?: unknown;
  readonly v?: unknown;
  readonly precedents: readonly string[];
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

export function formulaInspectFromInspectBody(
  range: string,
  body: Record<string, unknown>
): FormulaInspectPayload {
  const cell = cellFromInspectBody(body);
  const f = cell.f;
  const precedents = Array.isArray(body.precedents)
    ? body.precedents.map((item) => String(item))
    : precedentsFromFormula(f);
  return {
    range,
    f,
    v: cell.v,
    precedents,
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
  try {
    const response = await fetchImpl(url, { credentials: "include" });
    if (response.ok) {
      const body = (await response.json()) as Record<string, unknown>;
      return formulaInspectFromInspectBody(range, body);
    }
  } catch {
    // Prefer inspect; snapshot is the fallback when the route is down.
  }
  const cell = input.snapshot?.() ?? readFacadeSnapshotCell(host, range);
  return {
    range,
    f: cell?.f,
    v: cell?.v,
    precedents: precedentsFromFormula(cell?.f),
    source: "snapshot",
  };
}

export function highlightPrecedentRangesOnce(
  host: FormulaInspectorHost | undefined,
  ranges: readonly string[]
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
  return { highlighted };
}

export async function runFormulaInspect(
  range: string = FORMULA_INSPECT_RANGE,
  input: FormulaInspectLoadInput = {}
): Promise<FormulaInspectPayload> {
  const host = input.host ?? inspectorHost;
  const payload = await loadFormulaInspect({ ...input, range, host });
  highlightPrecedentRangesOnce(host, payload.precedents);
  return payload;
}
