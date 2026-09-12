/**
 * `/render` execute persist: run a Facade snippet, calculate formulas, dump cells + save().
 */

export type UniverExecuteApi = {
  getActiveWorkbook?: () => {
    save?: () => Record<string, unknown>;
    getSnapshot?: () => Record<string, unknown>;
    getActiveSheet?: () => {
      getSheetId?: () => string;
      getSheetName?: () => string;
      getRange?: (a1: string) => {
        getValue?: () => unknown;
        getCellData?: () => unknown;
      };
    };
  };
  getFormula?: () => { executeCalculation?: () => Promise<unknown> | unknown };
};

export type UniverExecutePersistResult = {
  cells: Array<{ a1: string; value: unknown; sheetId: string }>;
  saved: Record<string, unknown> | null;
};

function cellA1(row: number, col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return `${letters}${row + 1}`;
}

export async function runUniverExecutePersist(
  api: UniverExecuteApi,
  code: string
): Promise<UniverExecutePersistResult> {
  const runner = new Function("api", `return (async () => { ${code}\n })()`);
  await runner(api);
  const formula = api.getFormula?.();
  if (formula && typeof formula.executeCalculation === "function") {
    await formula.executeCalculation();
  }
  const wb = api.getActiveWorkbook?.();
  const sheet = wb?.getActiveSheet?.();
  const sheetId = String(sheet?.getSheetId?.() ?? sheet?.getSheetName?.() ?? "sheet_1");
  const cells: Array<{ a1: string; value: unknown; sheetId: string }> = [];
  const range = sheet?.getRange?.("E2");
  const cell = range?.getCellData?.() ?? range?.getValue?.();
  if (cell != null) {
    cells.push({
      a1: "E2",
      value: typeof cell === "object" ? cell : { v: cell },
      sheetId
    });
  }
  const savedRaw =
    (typeof wb?.save === "function" ? wb.save() : null) ??
    (typeof wb?.getSnapshot === "function" ? wb.getSnapshot() : null);
  const saved = savedRaw && typeof savedRaw === "object" ? savedRaw : null;
  if (saved) {
    const sheets = (saved as { workbook?: { sheets?: unknown }; sheets?: Record<string, { cellData?: Record<string, Record<string, unknown>> }> })
      .sheets
      ?? (saved as { workbook?: { sheets?: Record<string, { cellData?: Record<string, Record<string, unknown>> }> } }).workbook?.sheets;
    if (sheets) {
      for (const [id, nextSheet] of Object.entries(sheets)) {
        const cellData = nextSheet?.cellData ?? {};
        for (const [rowKey, cols] of Object.entries(cellData)) {
          if (!cols || typeof cols !== "object") continue;
          for (const [colKey, nextCell] of Object.entries(cols)) {
            if (!nextCell || typeof nextCell !== "object") continue;
            const row = Number(rowKey);
            const col = Number(colKey);
            if (!Number.isFinite(row) || !Number.isFinite(col)) continue;
            cells.push({ a1: cellA1(row, col), value: nextCell, sheetId: id });
          }
        }
      }
    }
  }
  return { cells, saved };
}
