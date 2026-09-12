/**
 * Chrome-less Univer boot for Browser Rendering (`/render?unitId=&worktreeId=&theme=`).
 */
import { LocaleType, LogLevel } from "@univerjs/core";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import { createUniver } from "@univerjs/presets";
import { greenTheme } from "@univerjs/themes";
import { resolveUniverLicense } from "./features/editor/univer-license";
import { hydrateRenderWorkbook } from "./render-hydrate";

import "@univerjs/preset-sheets-core/lib/index.css";

(UniverLicensePlugin.prototype as { onRendered?: () => void }).onRendered = function () {};

declare global {
  interface Window {
    univerAPI?: unknown;
    __univerLint?: () => { findings: unknown[] };
    __univerRunExecute?: (code: string) => Promise<{
      cells: Array<{ a1: string; value: unknown; sheetId: string }>;
      saved: unknown;
    }>;
  }
}

type UniverFacade = {
  createWorkbook?: (data?: Record<string, unknown>) => unknown;
};

async function boot(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("unitId")?.trim() ?? "";
  const worktreeId = params.get("worktreeId")?.trim() ?? "";
  const theme = params.get("theme")?.trim() ?? "";
  const darkMode = theme === "dark";
  document.documentElement.classList.toggle("dark", darkMode);
  document.documentElement.style.colorScheme = darkMode ? "dark" : "light";

  const container = document.getElementById("app");
  if (!container) throw new Error("Render root #app is missing");
  container.id = "app";

  const { univerAPI } = createUniver({
    locale: LocaleType.EN_US,
    theme: greenTheme,
    darkMode,
    logLevel: LogLevel.ERROR,
    presets: [
      UniverSheetsCorePreset({
        container,
        header: false,
        toolbar: false,
        formulaBar: false,
        footer: false,
        contextMenu: false,
        disableAutoFocus: true,
      }),
    ],
    plugins: [[UniverLicensePlugin, { license: resolveUniverLicense() }]],
  });

  const api = univerAPI as UniverFacade;
  const snapshot = unitId ? await loadSnapshot(unitId, worktreeId) : null;
  const hydrated = hydrateRenderWorkbook({
    snapshot,
    createWorkbook: typeof api.createWorkbook === "function" ? api.createWorkbook.bind(api) : undefined
  });
  if (!hydrated.ready) return;

  window.univerAPI = univerAPI;
  window.__univerLint = () => ({ findings: [] });
  window.__univerRunExecute = async (code: string) => {
    const api = univerAPI as {
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
    const saved =
      (typeof wb?.save === "function" ? wb.save() : null) ??
      (typeof wb?.getSnapshot === "function" ? wb.getSnapshot() : null);
    if (saved && typeof saved === "object") {
      const sheets = (saved as { sheets?: Record<string, { cellData?: Record<string, Record<string, unknown>> } } })
        .sheets;
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
              let n = col + 1;
              let letters = "";
              while (n > 0) {
                const rem = (n - 1) % 26;
                letters = String.fromCharCode(65 + rem) + letters;
                n = Math.floor((n - 1) / 26);
              }
              cells.push({ a1: `${letters}${row + 1}`, value: nextCell, sheetId: id });
            }
          }
        }
      }
    }
    return { cells, saved };
  };
  document.documentElement.dataset.univerReady = "1";
}

async function loadSnapshot(
  unitId: string,
  worktreeId: string
): Promise<Record<string, unknown> | null> {
  const url = new URL(`/universer-api/snapshot/2/unit/${encodeURIComponent(unitId)}`, window.location.origin);
  if (worktreeId) url.searchParams.set("worktreeId", worktreeId);
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const body = (await res.json()) as Record<string, unknown>;
    const snapshot = body.snapshot ?? body.data ?? body;
    return snapshot && typeof snapshot === "object" ? (snapshot as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

void boot();
