/**
 * Baked Q3 Forecast snapshot for the demo canvas.
 * Cells live on wrapper sheet.cellData; chart/CF/sparkline/named-range/validation
 * blobs live on workbook.resources. Workbook originalMeta stays thin.
 * Cell/meta helpers live here so T4 stays loadable without untracked snapshot modules.
 */

export const DEMO_WELCOME_UNIT_ID = "unit_welcome_sheet";
export const DEMO_SHEET_ID = "sheet_1";

const APP_VERSION = "1.0.0-insiders.20260907-70fc579";

const THIN_WORKBOOK_ORIGINAL_META = {
  appVersion: APP_VERSION,
  locale: "enUS",
  dateSystem: "date1900",
  styles: {}
};

const HEADERS = ["Metric", "Jul", "Aug", "Sep", "Q3"] as const;
const METRIC_ROWS: Array<[string, number, number, number]> = [
  ["Revenue", 120, 140, 160],
  ["Cost", 72, 78, 85],
  ["Pipeline", 48, 61, 90]
];

const WORKSHEET_META = {
  tabColor: "",
  hidden: 0,
  zoomRatio: 1,
  freeze: { xSplit: 0, ySplit: 0, startRow: -1, startColumn: -1 },
  scrollTop: 0,
  scrollLeft: 0,
  defaultColumnWidth: 88,
  defaultRowHeight: 24,
  mergeData: [] as unknown[],
  rowData: {},
  columnData: {
    "0": { w: 120 },
    "5": { w: 96 }
  },
  showGridlines: 1,
  rowHeader: { width: 46, hidden: 0 },
  columnHeader: { height: 20, hidden: 0 },
  rightToLeft: 0
};

export interface SheetCellValue {
  v?: string | number | boolean | null;
  f?: string;
  t?: number;
}

export function a1ToRowCol(a1: string): { row: number; col: number } {
  const match = /^([A-Za-z]+)(\d+)$/.exec(String(a1).trim());
  if (!match) {
    throw new Error(`Invalid A1 address: ${a1}`);
  }
  const letters = match[1].toUpperCase();
  let col = 0;
  for (let i = 0; i < letters.length; i++) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return { row: Number(match[2]) - 1, col: col - 1 };
}

export function encodeOriginalMeta(data: Record<string, unknown>): string {
  return btoa(JSON.stringify(data));
}

export function decodeOriginalMeta(encoded: unknown): Record<string, unknown> | null {
  if (typeof encoded !== "string" || !encoded) return null;
  try {
    return JSON.parse(atob(encoded)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function workbookOfSnapshot(snapshot: Record<string, unknown>): any {
  const workbook = (snapshot as any).workbook ?? snapshot;
  if (!workbook?.sheets) {
    throw new Error("Snapshot is not a sheet workbook");
  }
  return workbook;
}

function sheetOf(snapshot: Record<string, unknown>, sheetId?: string): any {
  const workbook = workbookOfSnapshot(snapshot);
  const id = sheetId || workbook.sheetOrder?.[0];
  const sheet = workbook.sheets?.[id];
  if (!sheet) {
    throw new Error(`Sheet not found: ${id || "(none)"}`);
  }
  if (!sheet.cellData || typeof sheet.cellData !== "object") {
    sheet.cellData = {};
  }
  return sheet;
}

export function getSheetCell(
  snapshot: Record<string, unknown>,
  a1: string,
  sheetId?: string
): SheetCellValue | null {
  const { row, col } = a1ToRowCol(a1);
  const sheet = sheetOf(snapshot, sheetId);
  const cell = sheet.cellData?.[String(row)]?.[String(col)] ?? sheet.cellData?.[row]?.[col];
  return cell ? { ...cell } : null;
}

export function getSheetRange(
  snapshot: Record<string, unknown>,
  startA1: string,
  endA1?: string,
  sheetId?: string
): Array<Array<SheetCellValue | null>> {
  const start = a1ToRowCol(startA1);
  const end = endA1 ? a1ToRowCol(endA1) : start;
  const sheet = sheetOf(snapshot, sheetId);
  const rows: Array<Array<SheetCellValue | null>> = [];
  for (let r = Math.min(start.row, end.row); r <= Math.max(start.row, end.row); r++) {
    const row: Array<SheetCellValue | null> = [];
    for (let c = Math.min(start.col, end.col); c <= Math.max(start.col, end.col); c++) {
      const cell = sheet.cellData?.[String(r)]?.[String(c)] ?? sheet.cellData?.[r]?.[c];
      row.push(cell ? { ...cell } : null);
    }
    rows.push(row);
  }
  return rows;
}

type CellMatrix = Record<string, Record<string, SheetCellValue>>;

function buildCellData(): CellMatrix {
  const cellData: CellMatrix = {};
  const put = (a1: string, cell: SheetCellValue) => {
    const { row, col } = a1ToRowCol(a1);
    const rowKey = String(row);
    if (!cellData[rowKey]) cellData[rowKey] = {};
    cellData[rowKey][String(col)] = cell;
  };

  HEADERS.forEach((value, col) => {
    put(`${String.fromCharCode(65 + col)}1`, { v: value, t: 1 });
  });
  METRIC_ROWS.forEach((row, index) => {
    const r = index + 2;
    put(`A${r}`, { v: row[0], t: 1 });
    put(`B${r}`, { v: row[1], t: 2 });
    put(`C${r}`, { v: row[2], t: 2 });
    put(`D${r}`, { v: row[3], t: 2 });
  });
  return cellData;
}

function range(startRow: number, startColumn: number, endRow: number, endColumn: number) {
  return { startRow, startColumn, endRow, endColumn };
}

function pluginResources(unitId: string): Array<{ name: string; data: string }> {
  const cf = {
    [DEMO_SHEET_ID]: [
      {
        cfId: "cf_q3_scale",
        stopIfTrue: false,
        ranges: [range(1, 4, 3, 4)],
        rule: {
          type: "colorScale",
          config: [
            { index: 0, color: "#F8696B", value: { type: "min" } },
            { index: 1, color: "#FFEB84", value: { type: "percentile", value: 50 } },
            { index: 2, color: "#63BE7B", value: { type: "max" } }
          ]
        }
      }
    ]
  };

  const definedNames = {
    dn_sep: {
      id: "dn_sep",
      name: "Sep",
      formulaOrRefString: "Forecast!D2:D4",
      comment: "September values",
      localSheetId: "AllDefaultWorkbook"
    }
  };

  const sheetTransform = {
    from: { row: 6, column: 0, rowOffset: 0, columnOffset: 0 },
    to: { row: 20, column: 6, rowOffset: 0, columnOffset: 0 }
  };

  const sparklines = {
    [unitId]: {
      [DEMO_SHEET_ID]: {
        spark_q3: {
          config: { type: 1 },
          sparklines: {
            "1": { "5": range(1, 1, 1, 3) },
            "2": { "5": range(2, 1, 2, 3) },
            "3": { "5": range(3, 1, 3, 3) }
          }
        }
      }
    }
  };

  const drawings = {
    [DEMO_SHEET_ID]: {
      data: {
        chart_q3: {
          unitId,
          subUnitId: DEMO_SHEET_ID,
          drawingId: "chart_q3",
          drawingType: 2,
          sheetTransform,
          axisAlignSheetTransform: sheetTransform
        }
      },
      order: ["chart_q3"]
    }
  };

  const charts = {
    [DEMO_SHEET_ID]: [
      {
        id: "chart_q3",
        chartType: 4,
        rangeInfo: {
          rangeInfo: {
            range: range(0, 0, 3, 3),
            subUnitId: DEMO_SHEET_ID,
            unitId
          },
          headerRow: 0
        }
      }
    ]
  };

  const validation = {
    [DEMO_SHEET_ID]: [
      {
        uid: "dv_sep",
        type: "decimal",
        operator: "between",
        formula1: "0",
        formula2: "999",
        allowBlank: true,
        ranges: [range(1, 3, 3, 3)]
      }
    ]
  };

  return [
    { name: "SHEET_CONDITIONAL_FORMATTING_PLUGIN", data: JSON.stringify(cf) },
    { name: "SHEET_DEFINED_NAME_PLUGIN", data: JSON.stringify(definedNames) },
    { name: "SHEET_SPARKLINE_PLUGIN", data: JSON.stringify(sparklines) },
    { name: "SHEET_DRAWING_PLUGIN", data: JSON.stringify(drawings) },
    { name: "SHEET_CHART_PLUGIN", data: JSON.stringify(charts) },
    { name: "SHEET_DATA_VALIDATION_PLUGIN", data: JSON.stringify(validation) }
  ];
}

function cellHasValue(cell: SheetCellValue | null | undefined): boolean {
  if (!cell) return false;
  if (typeof cell.f === "string" && cell.f.trim() !== "") return true;
  if (cell.v === null || cell.v === undefined) return false;
  if (typeof cell.v === "string") return cell.v.trim() !== "";
  return true;
}

function rangeHasFilledCells(cellData: unknown): boolean {
  if (!cellData || typeof cellData !== "object") return false;
  const matrix = cellData as CellMatrix;
  for (let row = 0; row <= 3; row++) {
    const cols = matrix[String(row)] ?? matrix[row as unknown as string];
    if (!cols || typeof cols !== "object") continue;
    for (let col = 0; col <= 4; col++) {
      const cell = cols[String(col)] ?? cols[col as unknown as string];
      if (cellHasValue(cell)) return true;
    }
  }
  return false;
}

/**
 * Skip replacing the demo snapshot when any A1:E4 cell already has a value or formula.
 * First create of an empty unit is not a skip.
 */
export function shouldSkipDemoSnapshot(snapshot: unknown): boolean {
  if (!snapshot || typeof snapshot !== "object") return false;
  const rec = snapshot as Record<string, unknown>;

  try {
    const grid = getSheetRange(rec, "A1", "E4");
    if (grid.some((row) => row.some((cell) => cellHasValue(cell)))) return true;
  } catch {
    // Snapshot may only carry cells in originalMeta.
  }

  const workbook = ((rec as { workbook?: Record<string, unknown> }).workbook ?? rec) as Record<string, unknown>;
  const sheets = (workbook.sheets ?? {}) as Record<string, { cellData?: unknown }>;
  for (const sheet of Object.values(sheets)) {
    if (rangeHasFilledCells(sheet?.cellData)) return true;
  }

  const meta = decodeOriginalMeta(workbook.originalMeta);
  const metaSheets = (meta?.sheets ?? {}) as Record<string, { cellData?: unknown }>;
  for (const sheet of Object.values(metaSheets)) {
    if (rangeHasFilledCells(sheet?.cellData)) return true;
  }
  return false;
}

export function resolveWelcomeUnitSnapshot(unitId: string, existing?: unknown): Record<string, unknown> {
  if (existing != null && shouldSkipDemoSnapshot(existing)) {
    return existing as Record<string, unknown>;
  }
  return buildQ3ForecastSnapshot(unitId);
}

export function buildQ3ForecastSnapshot(unitId: string): Record<string, unknown> {
  const cellData = buildCellData();
  const resources = pluginResources(unitId);

  return {
    unitID: unitId,
    rev: 1,
    type: 2,
    workbook: {
      unitID: unitId,
      rev: 1,
      creator: "",
      name: "Q3 Forecast",
      sheetOrder: [DEMO_SHEET_ID],
      sheets: {
        [DEMO_SHEET_ID]: {
          id: DEMO_SHEET_ID,
          type: 0,
          name: "Forecast",
          rowCount: 1000,
          columnCount: 20,
          cellData,
          originalMeta: encodeOriginalMeta(WORKSHEET_META)
        }
      },
      blockMeta: {
        [DEMO_SHEET_ID]: {
          sheetID: DEMO_SHEET_ID,
          blocks: []
        }
      },
      resources,
      originalMeta: encodeOriginalMeta(THIN_WORKBOOK_ORIGINAL_META)
    }
  };
}
