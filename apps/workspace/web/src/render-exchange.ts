/**
 * `/render` exchange helpers: CSV/TSV via decoded exchange-client page, not exchange-node.
 */

export type UniverImportPayload = {
  format?: string;
  content?: string;
  unitId?: string;
};

export type UniverExportPayload = {
  format?: string;
  snapshot?: Record<string, unknown>;
};

export type UniverImportResult = {
  snapshot: Record<string, unknown>;
  unitId: string;
  name: string;
};

export type UniverExportResult = {
  mediaType: string;
  data: string;
  byteSize: number;
};

const SHEET_META = btoa(
  JSON.stringify({
    tabColor: "",
    hidden: 0,
    zoomRatio: 1,
    freeze: { xSplit: 0, ySplit: 0, startRow: -1, startColumn: -1 },
    scrollTop: 0,
    scrollLeft: 0,
    defaultColumnWidth: 88,
    defaultRowHeight: 24,
    mergeData: [],
    rowData: {},
    columnData: {},
    showGridlines: 1,
    rowHeader: { width: 46, hidden: 0 },
    columnHeader: { height: 20, hidden: 0 },
    rightToLeft: 0
  })
);

const WORKBOOK_META = btoa(
  JSON.stringify({
    appVersion: "1.0.0-insiders.20260907-70fc579",
    locale: "enUS",
    dateSystem: "date1900",
    styles: {}
  })
);

export function decodeExchangeContent(content: unknown): string {
  if (typeof content !== "string") return "";
  if (content.includes(",") || content.includes("\t") || content.includes("\n")) return content;
  try {
    const decoded = atob(content.replace(/-/g, "+").replace(/_/g, "/"));
    if (decoded.includes(",") || decoded.includes("\t") || decoded.includes("\n")) return decoded;
  } catch {
    // raw text
  }
  return content;
}

export function runUniverImport(payload: UniverImportPayload): UniverImportResult {
  const format = String(payload.format ?? "").trim().toLowerCase();
  const content = decodeExchangeContent(payload.content);
  const unitId =
    typeof payload.unitId === "string" && payload.unitId.trim()
      ? payload.unitId.trim()
      : `unit_${crypto.randomUUID()}`;
  if (format !== "csv" && format !== "tsv") {
    throw new Error(`Unsupported import format: ${format || "(missing)"}`);
  }
  const delimiter = format === "tsv" ? "\t" : ",";
  const snapshot = csvToSnapshot(content, unitId, delimiter);
  return { snapshot, unitId, name: format === "tsv" ? "Imported TSV" : "Imported CSV" };
}

export function runUniverExport(payload: UniverExportPayload): UniverExportResult {
  const format = String(payload.format ?? "").trim().toLowerCase();
  const snapshot =
    payload.snapshot && typeof payload.snapshot === "object" ? payload.snapshot : {};
  if (format !== "csv" && format !== "tsv") {
    throw new Error(`Unsupported export format: ${format || "(missing)"}`);
  }
  const delimiter = format === "tsv" ? "\t" : ",";
  const data = snapshotToCsv(snapshot, delimiter);
  const byteSize = new TextEncoder().encode(data).byteLength;
  return {
    mediaType: format === "tsv" ? "text/tab-separated-values" : "text/csv",
    data,
    byteSize
  };
}

function csvToSnapshot(content: string, unitId: string, delimiter: string): Record<string, unknown> {
  const rows = parseDelimited(content, delimiter);
  const cellData: Record<string, Record<string, { v: string | number; t: number }>> = {};
  let maxCol = 0;
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (!row.length) continue;
    const rowKey = String(r);
    cellData[rowKey] = {};
    for (let c = 0; c < row.length; c++) {
      maxCol = Math.max(maxCol, c);
      cellData[rowKey][String(c)] = cellValue(row[c]);
    }
  }
  return {
    unitID: unitId,
    rev: 1,
    type: 2,
    workbook: {
      unitID: unitId,
      rev: 1,
      creator: "",
      name: "Imported CSV",
      sheetOrder: ["sheet_1"],
      sheets: {
        sheet_1: {
          id: "sheet_1",
          type: 0,
          name: "Sheet 1",
          rowCount: Math.max(1000, rows.length + 20),
          columnCount: Math.max(20, maxCol + 5),
          cellData,
          originalMeta: SHEET_META
        }
      },
      blockMeta: {
        sheet_1: {
          sheetID: "sheet_1",
          blocks: []
        }
      },
      resources: [],
      originalMeta: WORKBOOK_META
    }
  };
}

function snapshotToCsv(snapshot: Record<string, unknown>, delimiter: string): string {
  const workbook = ((snapshot as { workbook?: Record<string, unknown> }).workbook ?? snapshot) as {
    sheetOrder?: string[];
    sheets?: Record<string, { cellData?: Record<string, Record<string, { v?: unknown; f?: string }>> }>;
  };
  const sheetId = workbook.sheetOrder?.[0] || Object.keys(workbook.sheets ?? {})[0] || "sheet_1";
  const cellData = workbook.sheets?.[sheetId]?.cellData ?? {};
  let maxRow = -1;
  let maxCol = -1;
  for (const [rowKey, cols] of Object.entries(cellData)) {
    const row = Number(rowKey);
    if (!Number.isFinite(row) || !cols) continue;
    maxRow = Math.max(maxRow, row);
    for (const colKey of Object.keys(cols)) {
      const col = Number(colKey);
      if (Number.isFinite(col)) maxCol = Math.max(maxCol, col);
    }
  }
  if (maxRow < 0 || maxCol < 0) return "";
  const lines: string[] = [];
  for (let r = 0; r <= maxRow; r++) {
    const cells: string[] = [];
    for (let c = 0; c <= maxCol; c++) {
      const cell = cellData[String(r)]?.[String(c)];
      const raw = cell?.v ?? cell?.f ?? "";
      cells.push(escapeDelimited(raw, delimiter));
    }
    lines.push(cells.join(delimiter));
  }
  return lines.join("\n");
}

function parseDelimited(text: string, delimiter: string): string[][] {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  const rows: string[][] = [];
  for (const line of lines) {
    if (line === "") continue;
    rows.push(splitDelimitedLine(line, delimiter));
  }
  return rows;
}

function splitDelimitedLine(line: string, delimiter: string): string[] {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === delimiter && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  cells.push(current);
  return cells;
}

function cellValue(raw: string): { v: string | number; t: number } {
  const trimmed = raw.trim();
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return { v: Number(trimmed), t: 2 };
  }
  return { v: raw, t: 1 };
}

function escapeDelimited(value: unknown, delimiter: string): string {
  const text = value == null ? "" : String(value);
  if (text.includes('"') || text.includes("\n") || text.includes(delimiter)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}
