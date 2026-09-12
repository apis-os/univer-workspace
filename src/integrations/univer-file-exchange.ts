/**
 * `/uf` import/export via decoded exchange-client in BROWSER + R2, and DO compile-svg.
 * Conversion runs in Browser Rendering. Bytes go through R2. No Node exchange bindings in workerd.
 */
import { R2BlobStore } from "./r2-blob-store.ts";
import {
  evaluateOnRenderPage,
  isBrowserBound,
  type BrowserBinding
} from "./browser-rendering.ts";
import { bumpSnapshotRevision, cloneSnapshot } from "../plugins/univer-snapshot.ts";

export const SHEET_DRAWING_PLUGIN = "SHEET_DRAWING_PLUGIN";

export type ExchangeCollab = {
  getLatestSnapshot(unitId: string): { rev: number; data: Record<string, unknown> } | null;
  saveSnapshot(unitId: string, rev: number, data: Record<string, unknown>): void;
  createUnit?(unitId: string, type: number, name: string, initialSnapshot?: Record<string, unknown>): unknown;
  bindWorktreeUnit?(
    worktreeId: string,
    unitId: string,
    options?: { trunkUnitId?: string | null; type?: number; name?: string }
  ): void;
};

export function exchangeRenderUrl(requestUrl: string): string {
  return new URL("/render", requestUrl).toString();
}

export function decodeImportBytes(content: string): Uint8Array {
  if (content.includes(",") || content.includes("\t") || content.includes("\n")) {
    return new TextEncoder().encode(content);
  }
  try {
    const binary = atob(content.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  } catch {
    return new TextEncoder().encode(content);
  }
}

export async function importViaBrowser(
  browser: BrowserBinding,
  requestUrl: string,
  payload: { format: string; content: string; unitId: string }
): Promise<{ snapshot: Record<string, unknown>; unitId: string; name: string }> {
  if (!isBrowserBound(browser)) {
    throw new Error("BROWSER unbound");
  }
  const value = await evaluateOnRenderPage(
    browser,
    exchangeRenderUrl(requestUrl),
    `window.__univerImport(${JSON.stringify(payload)})`
  );
  if (!value || typeof value !== "object") {
    throw new Error("Import did not return a workbook snapshot");
  }
  const record = value as { snapshot?: Record<string, unknown>; unitId?: string; name?: string };
  if (!record.snapshot || typeof record.snapshot !== "object") {
    throw new Error("Import did not return a workbook snapshot");
  }
  return {
    snapshot: record.snapshot,
    unitId: typeof record.unitId === "string" && record.unitId ? record.unitId : payload.unitId,
    name: typeof record.name === "string" && record.name ? record.name : "Imported CSV"
  };
}

export async function exportViaBrowser(
  browser: BrowserBinding,
  requestUrl: string,
  payload: { format: string; snapshot: Record<string, unknown>; unitId: string }
): Promise<{ mediaType: string; data: string; byteSize: number }> {
  if (!isBrowserBound(browser)) {
    throw new Error("BROWSER unbound");
  }
  const renderUrl = new URL("/render", requestUrl);
  renderUrl.searchParams.set("unitId", payload.unitId);
  const value = await evaluateOnRenderPage(
    browser,
    renderUrl.toString(),
    `window.__univerExport(${JSON.stringify({ format: payload.format, snapshot: payload.snapshot })})`
  );
  if (!value || typeof value !== "object") {
    throw new Error("Export did not return bytes");
  }
  const record = value as { mediaType?: string; data?: string; byteSize?: number };
  if (typeof record.data !== "string" || !record.data) {
    throw new Error("Export did not return bytes");
  }
  return {
    mediaType: typeof record.mediaType === "string" && record.mediaType ? record.mediaType : "application/octet-stream",
    data: record.data,
    byteSize: typeof record.byteSize === "number" ? record.byteSize : new TextEncoder().encode(record.data).byteLength
  };
}

export async function putExchangeBlob(
  blobStore: R2BlobStore | undefined,
  objectKey: string,
  body: Uint8Array,
  contentType: string
): Promise<void> {
  if (!blobStore) {
    throw new Error("R2 blob store unavailable");
  }
  await blobStore.put({
    objectKey,
    body,
    contentType,
    detectMediaType: false
  });
}

export function compileSvgIntoSnapshot(
  snapshot: Record<string, unknown>,
  svg: string
): Record<string, unknown> {
  const next = cloneSnapshot(snapshot);
  const workbook = ((next as { workbook?: Record<string, unknown> }).workbook ?? next) as {
    unitID?: string;
    sheetOrder?: string[];
    sheets?: Record<string, { id?: string }>;
    resources?: Array<{ name?: string; data?: string }>;
    drawings?: Record<string, unknown>;
    drawingsOrder?: string[];
  };
  const unitId = String((next as { unitID?: string }).unitID ?? workbook.unitID ?? "unit");
  const sheetId = workbook.sheetOrder?.[0] || Object.keys(workbook.sheets ?? {})[0] || "sheet_1";
  const drawingId = `svg_${crypto.randomUUID()}`;
  const drawing = {
    unitId,
    subUnitId: sheetId,
    drawingId,
    drawingType: 1,
    sourceType: "svg",
    source: svg,
    svg,
    sheetTransform: {
      from: { row: 0, column: 0, rowOffset: 0, columnOffset: 0 },
      to: { row: 8, column: 4, rowOffset: 0, columnOffset: 0 }
    }
  };

  const resources = Array.isArray(workbook.resources) ? workbook.resources : [];
  workbook.resources = resources;
  const pluginIndex = resources.findIndex((row) => row?.name === SHEET_DRAWING_PLUGIN);
  let plugin: Record<string, { data?: Record<string, unknown>; order?: string[] }> = {};
  if (pluginIndex >= 0) {
    try {
      plugin = JSON.parse(String(resources[pluginIndex].data ?? "{}")) as typeof plugin;
    } catch {
      plugin = {};
    }
  }
  if (!plugin[sheetId]) plugin[sheetId] = { data: {}, order: [] };
  const sheetDrawings = plugin[sheetId];
  sheetDrawings.data = { ...(sheetDrawings.data ?? {}), [drawingId]: drawing };
  sheetDrawings.order = [...(sheetDrawings.order ?? []), drawingId];
  const encoded = JSON.stringify(plugin);
  if (pluginIndex >= 0) {
    resources[pluginIndex] = { name: SHEET_DRAWING_PLUGIN, data: encoded };
  } else {
    resources.push({ name: SHEET_DRAWING_PLUGIN, data: encoded });
  }

  workbook.drawings = { ...(workbook.drawings ?? {}), [drawingId]: drawing };
  workbook.drawingsOrder = [...(workbook.drawingsOrder ?? []), drawingId];
  return next;
}

export function persistCompiledSvg(
  collab: ExchangeCollab,
  unitId: string,
  svg: string
): { rev: number } {
  const current = collab.getLatestSnapshot(unitId);
  if (!current) {
    throw new Error("Snapshot not found");
  }
  const mutated = compileSvgIntoSnapshot(current.data, svg);
  const rev = Math.max(current.rev, 1) + 1;
  collab.saveSnapshot(unitId, rev, bumpSnapshotRevision(mutated, rev));
  return { rev };
}
