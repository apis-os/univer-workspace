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
