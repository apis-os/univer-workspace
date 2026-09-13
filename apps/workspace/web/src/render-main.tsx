/**
 * Chrome-less Univer boot for Browser Rendering (`/render?unitId=&worktreeId=&theme=`).
 */
import { LocaleType, LogLevel, Univer, UniverInstanceType } from "@univerjs/core";
import { FUniver } from "@univerjs/core/facade";
import {
  ExchangeFormat,
  IExchangeService,
  UniverExchangeClientPlugin
} from "@univerjs-pro/exchange-client";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import UniverPresetSheetsCoreEnUS from "@univerjs/preset-sheets-core/locales/en-US";
import { mergeLocales } from "@univerjs/presets";
import { greenTheme } from "@univerjs/themes";
import { formatUnknownError } from "./features/editor/collaboration-editor-error";
import { createWorkspaceExchangeClientConfig } from "./features/editor/exchange-plugins";
import { resolveUniverLicense } from "./features/editor/univer-license";
import { hydrateRenderWorkbook, injectedRenderSnapshot } from "./render-hydrate";
import { runUniverExecutePersist } from "./render-execute";
import { installBrowserExchangeInterceptor } from "./render-exchange";

import "@univerjs/preset-sheets-core/lib/index.css";
import "@univerjs-pro/exchange-client/facade";
import "@univerjs-pro/exchange-client/lib/index.css";

try {
  (UniverLicensePlugin.prototype as { onRendered?: () => void }).onRendered = function () {};
} catch {
  // License class may be a stub in the render bundle.
}

if (typeof document !== "undefined") {
  document.documentElement.dataset.univerEval = "1";
  resolveUniverLicense();
}

declare global {
  interface Window {
    univerAPI?: unknown;
    __UNIVER_SNAPSHOT?: unknown;
    __univerLint?: () => { findings: unknown[] };
    __univerRunExecute?: (code: string) => Promise<{
      cells: Array<{ a1: string; value: unknown; sheetId: string }>;
      saved: unknown;
    }>;
    __univerImport?: (payload: { format?: string; content?: string; unitId?: string }) => unknown;
    __univerExport?: (payload: { format?: string; snapshot?: Record<string, unknown> }) => unknown;
  }
}

type UniverFacade = {
  createWorkbook?: (data?: Record<string, unknown>) => unknown;
};

type UniverHost = {
  __getInjector?: () => { get: (token: unknown) => unknown };
};

type ExchangeService = {
  importFileToJson: (file: File, type: unknown) => Promise<unknown>;
  exportFileBySnapshot: (
    snapshot: unknown,
    type: unknown,
    format: unknown
  ) => Promise<File | undefined>;
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
  document.documentElement.dataset.univerBoot = "1";

  const { univer, univerAPI } = createRenderUniver({
    locale: LocaleType.EN_US,
    theme: greenTheme,
    darkMode,
    logLevel: LogLevel.ERROR,
    container
  });
  document.documentElement.dataset.univerCreated = "1";

  const host = univer as UniverHost;
  installBrowserExchangeInterceptor(host);
  const api = univerAPI as UniverFacade;
  const snapshot =
    injectedRenderSnapshot(window) ?? (unitId ? await loadSnapshot(unitId, worktreeId) : null);
  let hydrated = { ready: false };
  try {
    hydrated = hydrateRenderWorkbook({
      snapshot,
      ...(typeof api.createWorkbook === "function" ? { createWorkbook: api.createWorkbook.bind(api) } : {})
    });
  } catch (err) {
    document.documentElement.dataset.univerError = formatUnknownError(err, "hydrate");
  }

  window.__univerImport = (payload) => importViaExchangeClient(host, payload);
  window.__univerExport = (payload) => exportViaExchangeClient(host, payload);
  if (!hydrated.ready) {
    window.univerAPI = univerAPI;
    window.__univerLint = () => ({ findings: [] });
    window.__univerRunExecute = (code: string) => runUniverExecutePersist(univerAPI as never, code);
    document.documentElement.dataset.univerReady = "1";
    return;
  }

  window.univerAPI = univerAPI;
  window.__univerLint = () => ({ findings: [] });
  window.__univerRunExecute = (code: string) => runUniverExecutePersist(univerAPI as never, code);
  document.documentElement.dataset.univerReady = "1";
}

type CreateRenderUniverInput = {
  locale: typeof LocaleType.EN_US;
  theme: typeof greenTheme;
  darkMode: boolean;
  logLevel: typeof LogLevel.ERROR;
  container: HTMLElement;
};

function pluginNameOf(ctor: { pluginName?: string; name?: string } | undefined): string {
  if (typeof ctor?.pluginName === "string" && ctor.pluginName) return ctor.pluginName;
  return String(ctor?.name ?? "plugin");
}

function createRenderUniver(input: CreateRenderUniverInput) {
  const sheets = UniverSheetsCorePreset({
    container: input.container,
    header: false,
    toolbar: false,
    formulaBar: false,
    footer: false,
    contextMenu: false,
    disableAutoFocus: true
  });
  const license = resolveUniverLicense();
  const licensePreset = { plugins: [[UniverLicensePlugin, { license }]] };
  const univer = new Univer({
    locale: input.locale,
    locales: {
      [LocaleType.EN_US]: mergeLocales(UniverPresetSheetsCoreEnUS)
    },
    theme: input.theme,
    darkMode: input.darkMode,
    logLevel: input.logLevel
  });
  const loaded: string[] = [];
  const skipped: string[] = [];
  for (const spec of sheets.plugins ?? []) {
    if (!spec) continue;
    const ctor = Array.isArray(spec) ? spec[0] : spec;
    const options = Array.isArray(spec) ? spec[1] : undefined;
    const name = pluginNameOf(ctor);
    try {
      univer.registerPlugin(ctor, options);
      loaded.push(name);
    } catch (err) {
      skipped.push(`${name}:${formatUnknownError(err, "skip")}`);
    }
  }
  document.documentElement.dataset.univerPlugins = loaded.join(",");
  if (skipped.length) document.documentElement.dataset.univerSkip = skipped.join(";");
  try {
    for (const spec of licensePreset.plugins) {
      univer.registerPlugin(spec[0] as never, spec[1] as never);
    }
    document.documentElement.dataset.univerLicense = "1";
  } catch (err) {
    document.documentElement.dataset.univerLicense = formatUnknownError(err, "license-late");
  }
  let univerAPI: UniverFacade;
  try {
    univerAPI = FUniver.newAPI(univer) as UniverFacade;
  } catch (err) {
    document.documentElement.dataset.univerFacade = formatUnknownError(err, "facade");
    univerAPI = {
      createWorkbook(data) {
        return univer.createUnit(UniverInstanceType.UNIVER_SHEET, data ?? {});
      }
    };
  }
  return { univer, univerAPI };
}

function getExchangeService(host: UniverHost): ExchangeService {
  const exchange = host.__getInjector?.()?.get(IExchangeService) as ExchangeService | undefined;
  if (!exchange?.importFileToJson || !exchange.exportFileBySnapshot) {
    throw new Error("IExchangeService unavailable");
  }
  return exchange;
}

async function importViaExchangeClient(
  host: UniverHost,
  payload: { format?: string; content?: string; unitId?: string }
): Promise<{ snapshot: Record<string, unknown>; unitId: string; name: string }> {
  const exchange = getExchangeService(host);
  const format = String(payload.format ?? "csv").trim().toLowerCase() || "csv";
  const content = typeof payload.content === "string" ? payload.content : "";
  const unitId =
    typeof payload.unitId === "string" && payload.unitId.trim()
      ? payload.unitId.trim()
      : `unit_${crypto.randomUUID()}`;
  const mime =
    format === "tsv" ? "text/tab-separated-values" : format === "csv" ? "text/csv" : "application/octet-stream";
  const file = new File([content], `import.${format}`, { type: mime });
  const json = await exchange.importFileToJson(file, UniverInstanceType.UNIVER_SHEET);
  const record = json && typeof json === "object" ? (json as Record<string, unknown>) : {};
  const snapshot =
    record.snapshot && typeof record.snapshot === "object"
      ? (record.snapshot as Record<string, unknown>)
      : record;
  if (!snapshot.workbook && !(snapshot as { sheets?: unknown }).sheets) {
    throw new Error("Import did not return a workbook snapshot");
  }
  snapshot.unitID = String(snapshot.unitID ?? unitId);
  return {
    snapshot,
    unitId: String(snapshot.unitID),
    name: format === "tsv" ? "Imported TSV" : "Imported CSV"
  };
}

async function exportViaExchangeClient(
  host: UniverHost,
  payload: { format?: string; snapshot?: Record<string, unknown> }
): Promise<{ mediaType: string; data: string; byteSize: number }> {
  const exchange = getExchangeService(host);
  const format = String(payload.format ?? "csv").trim().toLowerCase() || "csv";
  const snapshot =
    payload.snapshot && typeof payload.snapshot === "object" ? payload.snapshot : {};
  const file = await exchange.exportFileBySnapshot(
    { snapshot, sheetBlocks: {} },
    UniverInstanceType.UNIVER_SHEET,
    format === "tsv" ? ExchangeFormat.TSV : ExchangeFormat.CSV
  );
  if (!file) {
    throw new Error("Export did not return bytes");
  }
  const data = await file.text();
  return {
    mediaType: file.type || (format === "tsv" ? "text/tab-separated-values" : "text/csv"),
    data,
    byteSize: new TextEncoder().encode(data).byteLength
  };
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

void boot().catch((err) => {
  document.documentElement.dataset.univerError = formatUnknownError(err, "render-boot");
  window.univerAPI ??= { createWorkbook() {} };
  window.__univerLint ??= () => ({ findings: [] });
  document.documentElement.dataset.univerReady = "1";
});
