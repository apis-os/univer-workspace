/**
 * `/uf` import/export via decoded exchange-client in BROWSER + R2, and DO compile-svg.
 * Conversion runs in Browser Rendering. Bytes go through R2. No Node exchange bindings in workerd.
 * compile-svg uses DSH compileSvgToFacade from `@univer-cli/svg-facade` (no node:fs).
 */
import { createRequire } from "node:module";
import { join } from "node:path";
import { R2BlobStore } from "./r2-blob-store.ts";
import {
  evaluateOnRenderPage,
  isBrowserBound,
  type BrowserBinding
} from "./browser-rendering.ts";
import { bumpSnapshotRevision, cloneSnapshot } from "../plugins/univer-snapshot.ts";

export const SVG_FACADE_PLUGIN = "SVG_FACADE";

function svgFacadeRequire(): NodeRequire {
  try {
    const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
    if (cwd) {
      return createRequire(join(cwd, "packages/client-core/package.json"));
    }
  } catch {
    // workerd bundle has no client-core package.json path
  }
  return createRequire("/packages/client-core/package.json");
}

const requireSvgFacade = svgFacadeRequire();

type CompileSvgToFacade = (
  svg: string
) => Promise<{
  code: string;
  warnings: string[];
  lints: string[];
  viewport: { width: number; height: number };
  textMeasure: string;
}>;

function loadCompileSvgToFacade(): CompileSvgToFacade {
  const mod = requireSvgFacade("@univer-cli/svg-facade") as {
    compileSvgToFacade: CompileSvgToFacade;
  };
  if (typeof mod.compileSvgToFacade !== "function") {
    throw new Error("compileSvgToFacade unavailable");
  }
  return mod.compileSvgToFacade;
}

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
    `window.__univerExport(${JSON.stringify({ format: payload.format, snapshot: payload.snapshot })})`,
    { snapshot: payload.snapshot }
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

export async function compileSvgIntoSnapshot(
  snapshot: Record<string, unknown>,
  svg: string
): Promise<Record<string, unknown>> {
  const compileSvgToFacade = loadCompileSvgToFacade();
  const compiled = await compileSvgToFacade(svg);
  const next = cloneSnapshot(snapshot);
  const workbook = ((next as { workbook?: Record<string, unknown> }).workbook ?? next) as {
    resources?: Array<{ name?: string; data?: string }>;
    drawings?: Record<string, unknown>;
    drawingsOrder?: string[];
  };
  const shapes = applyCompiledFacade(compiled.code);
  const drawingId = `svg_${crypto.randomUUID()}`;
  const resources = Array.isArray(workbook.resources) ? workbook.resources : [];
  workbook.resources = resources;
  const facadePayload = {
    code: compiled.code,
    viewport: compiled.viewport,
    warnings: compiled.warnings,
    lints: compiled.lints,
    textMeasure: compiled.textMeasure,
    shapes
  };
  const existing = resources.findIndex((row) => row?.name === SVG_FACADE_PLUGIN);
  const encoded = JSON.stringify(facadePayload);
  if (existing >= 0) {
    resources[existing] = { name: SVG_FACADE_PLUGIN, data: encoded };
  } else {
    resources.push({ name: SVG_FACADE_PLUGIN, data: encoded });
  }
  const shape = shapes[0] ?? {};
  workbook.drawings = {
    ...(workbook.drawings ?? {}),
    [drawingId]: {
      drawingId,
      drawingType: 1,
      shapeType: shape.shapeType ?? "Rect",
      fill: shape.fill,
      width: shape.width,
      height: shape.height,
      x: shape.x,
      y: shape.y
    }
  };
  workbook.drawingsOrder = [...(workbook.drawingsOrder ?? []), drawingId];
  return next;
}

export async function persistCompiledSvg(
  collab: ExchangeCollab,
  unitId: string,
  svg: string
): Promise<{ rev: number }> {
  const current = collab.getLatestSnapshot(unitId);
  if (!current) {
    throw new Error("Snapshot not found");
  }
  const mutated = await compileSvgIntoSnapshot(current.data, svg);
  const rev = Math.max(current.rev, 1) + 1;
  collab.saveSnapshot(unitId, rev, bumpSnapshotRevision(mutated, rev));
  return { rev };
}

function applyCompiledFacade(code: string): Array<Record<string, unknown>> {
  const shapes: Array<Record<string, unknown>> = [];
  const slide = {
    insertShape(opts: { shapeType?: unknown }) {
      const shape: Record<string, unknown> = {
        shapeType: opts?.shapeType,
        fill: null,
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const handle = {
        setSize(width: number, height: number) {
          shape.width = width;
          shape.height = height;
          return handle;
        },
        setAbsolutePosition(x: number, y: number) {
          shape.x = x;
          shape.y = y;
          return handle;
        },
        setSolidFill(color: string) {
          shape.fill = color;
          return handle;
        },
        setStrokeLineType() {
          return handle;
        }
      };
      shapes.push(shape);
      return handle;
    }
  };
  const univerAPI = {
    Enum: {
      ShapeTypeEnum: { Rect: "Rect" },
      ShapeLineTypeEnum: { NoLine: "NoLine" }
    }
  };
  const run = new Function("slide", "univerAPI", code);
  run(slide, univerAPI);
  return shapes;
}
