/**
 * Baked Q3 Forecast IWorkbookData for the demo canvas.
 * Chart, CF, sparklines, named range, and validation live in decoded originalMeta
 * (and workbook.resources), not in live Facade after load.
 */
import {
  a1ToRowCol,
  decodeOriginalMeta,
  encodeOriginalMeta,
  getSheetRange,
  type SheetCellValue
} from "./univer-snapshot.ts";

export const DEMO_WELCOME_UNIT_ID = "unit_welcome_sheet";
export const DEMO_SHEET_ID = "sheet_1";

const APP_VERSION = "1.0.0-insiders.20260907-70fc579";

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

  const sparklines = {
    [unitId]: {
      [DEMO_SHEET_ID]: {
        spark_q3: {
          config: {
            type: 1,
            sourceA1: ["B2:D2", "B3:D3", "B4:D4"]
          },
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
    [unitId]: {
      [DEMO_SHEET_ID]: {
        data: {
          chart_q3: {
            unitId,
            subUnitId: DEMO_SHEET_ID,
            drawingId: "chart_q3",
            drawingType: 2,
            title: "Q3 Forecast",
            sheetTransform: {
              from: { row: 6, column: 0, rowOffset: 0, columnOffset: 0 },
              to: { row: 20, column: 6, rowOffset: 0, columnOffset: 0 }
            }
          }
        },
        order: ["chart_q3"]
      }
    }
  };

  const charts = {
    version: 2,
    dataSources: {
      ds_q3: {
        id: "ds_q3",
        name: "A1:D4",
        values: [
          ["Metric", "Jul", "Aug", "Sep"],
          ["Revenue", 120, 140, 160],
          ["Cost", 72, 78, 85],
          ["Pipeline", 48, 61, 90]
        ]
      }
    },
    charts: {
      chart_q3: {
        id: "chart_q3",
        dataSourceId: "ds_q3",
        chartType: 4,
        context: { headerRow: 0, orient: "column", rangeA1: "A1:D4" }
      }
    }
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

function workbookData(unitId: string, cellData: CellMatrix, resources: Array<{ name: string; data: string }>) {
  return {
    id: unitId,
    name: "Q3 Forecast",
    appVersion: APP_VERSION,
    locale: "enUS",
    dateSystem: "date1900",
    styles: {},
    sheetOrder: [DEMO_SHEET_ID],
    sheets: {
      [DEMO_SHEET_ID]: {
        id: DEMO_SHEET_ID,
        name: "Forecast",
        rowCount: 1000,
        columnCount: 20,
        cellData,
        ...WORKSHEET_META
      }
    },
    resources
  };
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

export function buildQ3ForecastSnapshot(unitId: string): Record<string, unknown> {
  const cellData = buildCellData();
  const resources = pluginResources(unitId);
  const data = workbookData(unitId, cellData, resources);

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
      originalMeta: encodeOriginalMeta(data)
    }
  };
}
