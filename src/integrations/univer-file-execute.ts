/**
 * `/uf` execute: run Facade snippets on LOADER or BROWSER `/render`, then persist OT.
 * Formula calculation lives here (not in inspect).
 */
import {
  buildSetRangeChangeset,
  bumpSnapshotRevision,
  cloneSnapshot,
  setSheetCell,
  type SheetCellValue
} from "../plugins/univer-snapshot.ts";
import {
  evaluateOnRenderPage,
  isBrowserBound,
  renderPageUrl,
  type BrowserBinding
} from "./browser-rendering.ts";

export const AGENT_EXECUTE_MEMBER_ID = "agent_workspace";
export const FACADE_UNBOUND = "BROWSER and LOADER unbound";

export type LoaderBinding = {
  get?: (
    name: string | null,
    getCode: () => unknown
  ) => { fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> };
  load?: (code: unknown) => { fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> };
};

export type FacadeCellWrite = {
  a1: string;
  value: SheetCellValue;
  sheetId: string;
};

export type FacadeExecuteResult = {
  cells: FacadeCellWrite[];
  saved?: Record<string, unknown> | null;
};

export type ExecuteCollab = {
  getLatestSnapshot(unitId: string): { rev: number; data: Record<string, unknown> } | null;
  applyChangeset(
    payload: Record<string, unknown>,
    clientId?: string,
    userID?: string
  ): Promise<unknown> | unknown;
  saveSnapshot(unitId: string, rev: number, data: Record<string, unknown>): void;
};

export function isLoaderBound(loader: LoaderBinding | undefined): loader is LoaderBinding {
  return typeof loader?.get === "function" || typeof loader?.load === "function";
}

export function isFacadeRuntimeBound(browser: BrowserBinding | undefined, loader: LoaderBinding | undefined): boolean {
  return isBrowserBound(browser) || isLoaderBound(loader);
}

export function facadeUnboundResponse(): Response {
  return new Response(JSON.stringify({ error: FACADE_UNBOUND }), {
    status: 503,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export function executeMemberId(request: Request, userId: string): string {
  const invoker =
    request.headers.get("x-univer-invoker")?.trim() ||
    request.headers.get("x-workspace-invoker")?.trim() ||
    "";
  if (invoker === "agent" || userId === AGENT_EXECUTE_MEMBER_ID) {
    return AGENT_EXECUTE_MEMBER_ID;
  }
  return userId;
}

export const FACADE_EXECUTE_WORKER_CODE = {
  compatibilityDate: "2024-09-02",
  compatibilityFlags: ["nodejs_compat"],
  mainModule: "execute.js",
  modules: {
    "execute.js": `export default {
  async fetch(request) {
    const body = await request.json();
    const code = typeof body.code === "string" ? body.code : "";
    const snapshot = body.snapshot && typeof body.snapshot === "object" ? body.snapshot : {};
    const workbook = JSON.parse(JSON.stringify(snapshot));
    const inner = workbook.workbook ?? workbook;
    const sheets = inner.sheets || {};
    const firstSheetId = (inner.sheetOrder && inner.sheetOrder[0]) || Object.keys(sheets)[0] || "sheet_1";
    const writes = [];
    const a1ToRowCol = (a1) => {
      const match = /^([A-Za-z]+)(\\d+)$/.exec(String(a1).trim());
      if (!match) throw new Error("Invalid A1 address: " + a1);
      const letters = match[1].toUpperCase();
      let col = 0;
      for (let i = 0; i < letters.length; i++) col = col * 26 + (letters.charCodeAt(i) - 64);
      return { row: Number(match[2]) - 1, col: col - 1 };
    };
    const setCell = (a1, value) => {
      const sheet = (inner.sheets || {})[firstSheetId];
      if (!sheet) return;
      if (!sheet.cellData) sheet.cellData = {};
      const { row, col } = a1ToRowCol(a1);
      const rowKey = String(row);
      if (!sheet.cellData[rowKey]) sheet.cellData[rowKey] = {};
      sheet.cellData[rowKey][String(col)] = value;
    };
    const getCell = (a1) => {
      const sheet = (inner.sheets || {})[firstSheetId];
      if (!sheet || !sheet.cellData) return null;
      const { row, col } = a1ToRowCol(a1);
      return sheet.cellData[String(row)]?.[String(col)] ?? null;
    };
    const api = {
      getActiveWorkbook() {
        return {
          getActiveSheet() {
            return {
              getRange(a1) {
                return {
                  setValue(value) {
                    const next = value && typeof value === "object" ? { ...value } : String(value).startsWith("=") ? { f: String(value) } : { v: value };
                    writes.push({ a1, value: next, sheetId: firstSheetId });
                    setCell(a1, next);
                  }
                };
              }
            };
          }
        };
      },
      getFormula() {
        return {
          executeCalculation() {
            for (const write of writes) {
              const formula = typeof write.value.f === "string" ? write.value.f.trim() : "";
              const sum = /^=SUM\\(([A-Za-z]+\\d+):([A-Za-z]+\\d+)\\)$/i.exec(formula);
              if (!sum) continue;
              const start = a1ToRowCol(sum[1]);
              const end = a1ToRowCol(sum[2]);
              let total = 0;
              for (let r = Math.min(start.row, end.row); r <= Math.max(start.row, end.row); r++) {
                for (let c = Math.min(start.col, end.col); c <= Math.max(start.col, end.col); c++) {
                  let n = c + 1;
                  let letters = "";
                  while (n > 0) {
                    const rem = (n - 1) % 26;
                    letters = String.fromCharCode(65 + rem) + letters;
                    n = Math.floor((n - 1) / 26);
                  }
                  const cell = getCell(letters + (r + 1));
                  if (typeof cell?.v === "number") total += cell.v;
                }
              }
              write.value = { ...write.value, v: total };
              setCell(write.a1, write.value);
            }
          }
        };
      }
    };
    const runner = new Function("api", "return (async () => { " + code + "\\n })()");
    await runner(api);
    await api.getFormula().executeCalculation();
    return new Response(JSON.stringify({ cells: writes, saved: inner }), {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
};
`
  }
};

export async function evaluateFacadeOnLoader(
  loader: LoaderBinding,
  code: string,
  snapshot: Record<string, unknown>
): Promise<FacadeExecuteResult> {
  const stub =
    typeof loader.get === "function"
      ? loader.get("uf-execute", () => FACADE_EXECUTE_WORKER_CODE)
      : loader.load?.(FACADE_EXECUTE_WORKER_CODE);
  if (typeof stub?.fetch !== "function") {
    throw new Error("LOADER unbound");
  }
  const res = await stub.fetch("https://uf-execute/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, snapshot })
  });
  if (!res.ok) {
    throw new Error(`LOADER execute failed: ${res.status}`);
  }
  const body = (await res.json()) as FacadeExecuteResult;
  if (Array.isArray(body?.cells)) return body;
  return { cells: [] };
}

export async function evaluateFacadeOnBrowser(
  browser: BrowserBinding,
  requestUrl: string,
  unitId: string,
  worktreeId: string,
  code: string
): Promise<FacadeExecuteResult> {
  const renderUrl = renderPageUrl(requestUrl, { unitId, worktreeId });
  const value = await evaluateOnRenderPage(
    browser,
    renderUrl,
    `window.__univerRunExecute(${JSON.stringify(code)})`
  );
  return normalizeFacadeResult(value);
}

export function normalizeFacadeResult(value: unknown): FacadeExecuteResult {
  if (!value || typeof value !== "object") return { cells: [] };
  const record = value as { cells?: unknown; saved?: Record<string, unknown> | null };
  const cells = Array.isArray(record.cells) ? record.cells : [];
  const writes: FacadeCellWrite[] = [];
  for (const cell of cells) {
    if (!cell || typeof cell !== "object") continue;
    const row = cell as { a1?: unknown; value?: unknown; sheetId?: unknown };
    if (typeof row.a1 !== "string" || !row.a1) continue;
    const valueCell =
      row.value !== null && typeof row.value === "object"
        ? (row.value as SheetCellValue)
        : { v: row.value as SheetCellValue["v"] };
    writes.push({
      a1: row.a1,
      value: valueCell,
      sheetId: typeof row.sheetId === "string" && row.sheetId ? row.sheetId : "sheet_1"
    });
  }
  return { cells: writes, saved: record.saved ?? null };
}

export async function persistFacadeWrites(
  collab: ExecuteCollab,
  unitId: string,
  cells: FacadeCellWrite[],
  memberId: string
): Promise<{ rev: number }> {
  const current = collab.getLatestSnapshot(unitId);
  if (!current) {
    throw new Error("Snapshot not found");
  }
  if (cells.length === 0) {
    return { rev: current.rev };
  }
  let snapshot = cloneSnapshot(current.data);
  const cellValue: Record<string, Record<string, SheetCellValue>> = {};
  let sheetId = "";
  for (const cell of cells) {
    const result = setSheetCell(snapshot, cell.a1, cell.value, cell.sheetId);
    sheetId = result.sheetId;
    const rowKey = String(result.row);
    const colKey = String(result.col);
    if (!cellValue[rowKey]) cellValue[rowKey] = {};
    cellValue[rowKey][colKey] = result.next;
  }
  const rev = Math.max(current.rev, 1) + 1;
  snapshot = bumpSnapshotRevision(snapshot, rev);
  const changeset = buildSetRangeChangeset({
    unitId,
    rev,
    sheetId,
    cellValue,
    memberId
  });
  collab.saveSnapshot(unitId, rev, snapshot);
  await collab.applyChangeset(changeset, memberId, memberId);
  return { rev };
}

export async function runFacadeAndPersist(input: {
  request: Request;
  browser?: BrowserBinding;
  loader?: LoaderBinding;
  collab: ExecuteCollab;
  unitId: string;
  snapshotUnitId: string;
  worktreeId: string;
  code: string;
  memberId: string;
}): Promise<{ rev: number }> {
  const snapshot = input.collab.getLatestSnapshot(input.snapshotUnitId);
  if (!snapshot) {
    throw new Error("Snapshot not found");
  }
  let result: FacadeExecuteResult;
  if (isLoaderBound(input.loader)) {
    result = await evaluateFacadeOnLoader(input.loader, input.code, snapshot.data);
  } else if (isBrowserBound(input.browser)) {
    result = await evaluateFacadeOnBrowser(
      input.browser,
      input.request.url,
      input.snapshotUnitId,
      input.worktreeId,
      input.code
    );
  } else {
    throw new Error(FACADE_UNBOUND);
  }
  return persistFacadeWrites(input.collab, input.snapshotUnitId, result.cells, input.memberId);
}
