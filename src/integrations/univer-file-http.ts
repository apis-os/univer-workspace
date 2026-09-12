/**
 * Univer File `/uf` gateway: fileKey → Space, unit list, worktree aliases, and inspect.
 */
import type { ControlPlaneDb } from "../control-plane/db.ts";
import { handleControlPlaneRoutes, type GatewayContext } from "../control-plane/gateway.ts";
import type { User } from "../control-plane/types.ts";
import { getSheetRange, type SheetCellValue } from "../plugins/univer-snapshot.ts";
import {
  browserUnboundResponse,
  capturePng,
  isBrowserBound,
  lintRenderPage,
  printPdf,
  renderPageUrl,
  type BrowserBinding
} from "./browser-rendering.ts";
import {
  executeMemberId,
  facadeUnboundResponse,
  isFacadeRuntimeBound,
  runFacadeAndPersist,
  type LoaderBinding
} from "./univer-file-execute.ts";
import { R2BlobStore } from "./r2-blob-store.ts";
import {
  decodeImportBytes,
  exportViaBrowser,
  importViaBrowser,
  persistCompiledSvg,
  putExchangeBlob
} from "./univer-file-exchange.ts";

export const DEMO_UNIVER_FILE = "workspace.univer";
export const DEMO_UNIT_ID = "unit_welcome_sheet";

export interface UniverFileCollab {
  getLatestSnapshot(unitId: string): { rev: number; data: Record<string, unknown> } | null;
  getWorktreeBinding(
    worktreeId: string,
    unitId: string
  ): { unit_id: string; trunk_unit_id: string | null } | null;
  listWorktreeBindings(worktreeId: string): Array<{ unit_id: string; trunk_unit_id: string | null }>;
  saveSnapshot(unitId: string, rev: number, data: Record<string, unknown>): void;
  applyChangeset(
    payload: Record<string, unknown>,
    clientId?: string,
    userID?: string
  ): Promise<unknown> | unknown;
  createUnit?(unitId: string, type: number, name: string, initialSnapshot?: Record<string, unknown>): unknown;
  bindWorktreeUnit?(
    worktreeId: string,
    unitId: string,
    options?: { trunkUnitId?: string | null; type?: number; name?: string }
  ): void;
}

export interface UniverFileHttpHost {
  db: ControlPlaneDb;
  currentUser: User | null;
  collab?: UniverFileCollab;
  browser?: BrowserBinding;
  loader?: LoaderBinding;
  executeAsAgent?: boolean;
  blobStore?: R2BlobStore;
  notifyCliWroteCells?: () => void;
}

/** Encode a file path as base64url for `/uf/:key` URLs. */
export function fileKeyOf(path: string): string {
  const bytes = new TextEncoder().encode(path.replace(/\\/g, "/"));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function spaceIdFromFileKey(key: string): string {
  const path = atob(key.replace(/-/g, "+").replace(/_/g, "/"));
  return `space_uf_${[...new Uint8Array(new TextEncoder().encode(path))]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 24)}`;
}

export async function handleUniverFileHttp(
  request: Request,
  host: UniverFileHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  if (url.pathname !== "/uf" && !url.pathname.startsWith("/uf/")) return null;

  if (!host.currentUser) {
    return jsonFile({ error: { message: "Authentication required" } }, 401);
  }

  const match = url.pathname.match(/^\/uf\/([^/]+)(?:\/(.*))?$/);
  if (!match) {
    return jsonFile({ error: { message: `Not found: ${request.method} ${url.pathname}` } }, 404);
  }

  const key = match[1];
  const rest = match[2] ?? "";
  let filePath: string;
  try {
    filePath = atob(key.replace(/-/g, "+").replace(/_/g, "/"));
  } catch {
    return jsonFile({ error: { message: "Unknown file key" } }, 404);
  }

  const spaceId = spaceIdFromFileKey(key);
  const method = request.method.toUpperCase();

  if (!rest && method === "POST") {
    return ensureFileSpace(host, key, filePath, spaceId);
  }

  const space = await host.db.getSpaceById(spaceId);
  if (!space) {
    return jsonFile({ error: { message: "Unknown file key" } }, 404);
  }

  if (rest === "units" && method === "GET") {
    return listFileUnits(host, filePath, spaceId);
  }

  const executeWorktree = rest.match(/^worktrees\/([^/]+)\/units\/([^/]+)\/execute$/);
  if (executeWorktree && method === "POST") {
    return executeFileUnit(request, host, filePath, spaceId, executeWorktree[2], executeWorktree[1]);
  }

  if (rest === "worktrees" || rest.startsWith("worktrees/")) {
    return aliasWorktreeRoutes(request, host, rest, spaceId);
  }

  const inspectMatch = rest.match(/^units\/([^/]+)\/inspect$/);
  if (inspectMatch && method === "GET") {
    return inspectFileUnit(request, host, filePath, spaceId, inspectMatch[1]);
  }

  const executeTrunk = rest.match(/^units\/([^/]+)\/execute$/);
  if (executeTrunk && method === "POST") {
    return executeFileUnit(request, host, filePath, spaceId, executeTrunk[1], "");
  }

  if (rest === "screenshot" && method === "POST") {
    return screenshotFileUnit(request, host, filePath, spaceId);
  }
  if (rest === "print-pdf" && method === "POST") {
    return printPdfFileUnit(request, host, filePath, spaceId);
  }
  if (rest === "lint" && method === "POST") {
    return lintFileUnit(request, host, filePath, spaceId);
  }
  if (rest === "import" && method === "POST") {
    return importFileUnit(request, host, filePath, spaceId);
  }
  if (rest === "export" && method === "POST") {
    return exportFileUnit(request, host, filePath, spaceId);
  }
  if (rest === "compile-svg" && method === "POST") {
    return compileSvgFileUnit(request, host, filePath, spaceId);
  }

  return jsonFile({ error: { message: `Not found: ${method} ${url.pathname}` } }, 404);
}

async function ensureFileSpace(
  host: UniverFileHttpHost,
  key: string,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const user = host.currentUser!;
  let space = await host.db.getSpaceById(spaceId);
  if (!space) {
    space = await host.db.createSpace({
      id: spaceId,
      type: "team",
      name: filePath,
      ownerUserId: user.id
    });
  } else if (space.owner_user_id !== user.id) {
    await host.db.addSpaceMember(spaceId, user.id, "editor", user.id);
  }
  return jsonFile({
    success: true,
    fileKey: key,
    space: { id: space.id, name: space.name }
  });
}

async function listFileUnits(
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const nodes = await host.db.listSpaceRootNodes(spaceId);
  const units: Array<{ id: string; name: string; type: number }> = [];
  for (const node of nodes) {
    const resource = await host.db.getResourceByNodeId(node.id);
    if (!resource?.univer) continue;
    units.push({
      id: resource.univer.unit_id,
      name: node.name,
      type: unitTypeNumber(resource.univer.unit_type)
    });
  }

  if (filePath === DEMO_UNIVER_FILE && !units.some((unit) => unit.id === DEMO_UNIT_ID)) {
    const welcome = await host.db.getResourceByUnitId(DEMO_UNIT_ID);
    if (welcome?.univer) {
      units.push({
        id: welcome.univer.unit_id,
        name: welcome.node?.name ?? "Q3 Forecast",
        type: unitTypeNumber(welcome.univer.unit_type)
      });
    }
  }

  return jsonFile({ units });
}

async function aliasWorktreeRoutes(
  request: Request,
  host: UniverFileHttpHost,
  rest: string,
  spaceId: string
): Promise<Response> {
  const method = request.method.toUpperCase();
  const unitsMatch = rest.match(/^worktrees\/([^/]+)\/units$/);
  if (unitsMatch && method === "GET") {
    return listScopedWorktreeUnits(host, unitsMatch[1], spaceId);
  }
  let productPath = `/api/${rest.replace(/\/units\/([^/]+)\/remove$/, "/units/$1/removal")}`;
  if (productPath.endsWith("/preview")) {
    productPath = productPath.slice(0, -"/preview".length);
  }

  const url = new URL(request.url);
  url.pathname = productPath;
  if (productPath === "/api/worktrees" && method === "GET") {
    url.searchParams.set("spaceId", spaceId);
  }

  const headers = new Headers(request.headers);
  let body: string | undefined;
  if (method !== "GET" && method !== "HEAD") {
    const raw = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    body = JSON.stringify(mapWorktreeBody(raw, rest, method, spaceId));
    headers.set("Content-Type", "application/json");
  }

  const aliased = new Request(url, { method, headers, body });
  const gwCtx: GatewayContext = {
    db: host.db,
    currentUser: host.currentUser,
    rawSessionToken: null
  };
  const res = await handleControlPlaneRoutes(aliased, gwCtx, url);
  return (
    res ??
    jsonFile({ error: { message: `Not found: ${method} ${new URL(request.url).pathname}` } }, 404)
  );
}

async function listScopedWorktreeUnits(
  host: UniverFileHttpHost,
  worktreeId: string,
  spaceId: string
): Promise<Response> {
  if (!(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  const rows = await host.db.listWorktreeUnits(worktreeId);
  return jsonFile({
    units: rows.map((row) => ({
      id: row.unit_id,
      name: row.name,
      type: unitTypeNumber(row.unit_type)
    }))
  });
}

async function inspectFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string,
  unitId: string
): Promise<Response> {
  const url = new URL(request.url);
  const rangeParam = url.searchParams.get("range")?.trim() ?? "";
  const worktreeId = url.searchParams.get("worktreeId")?.trim() ?? "";

  if (!rangeParam) {
    return jsonFile({ error: { message: "range is required" } }, 400);
  }
  if (worktreeId && !(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  if (!(await canInspectUnit(host, filePath, spaceId, unitId, worktreeId))) {
    return jsonFile({ error: { message: "Unit not found" } }, 404);
  }
  if (!host.collab) {
    return jsonFile({ error: { message: "Collab service unavailable" } }, 503);
  }

  let parsed: { start: string; end?: string; sheetName?: string };
  try {
    parsed = parseInspectRange(rangeParam);
  } catch (err) {
    return jsonFile({ error: { message: err instanceof Error ? err.message : "Invalid range" } }, 400);
  }

  const snapshotUnitId = resolveSnapshotUnitId(host.collab, unitId, worktreeId);
  const snapshot =
    host.collab.getLatestSnapshot(snapshotUnitId) ??
    (snapshotUnitId !== unitId ? host.collab.getLatestSnapshot(unitId) : null);
  if (!snapshot) {
    return jsonFile({ error: { message: "Snapshot not found" } }, 404);
  }

  let cells: Array<Array<SheetCellValue | null>>;
  try {
    const sheetId = sheetIdForRange(snapshot.data, parsed.sheetName);
    cells = getSheetRange(snapshot.data, parsed.start, parsed.end, sheetId);
  } catch (err) {
    return jsonFile({ error: { message: err instanceof Error ? err.message : "Invalid range" } }, 400);
  }

  return jsonFile(inspectPayload(rangeParam, cells));
}

async function executeFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string,
  unitId: string,
  worktreeId: string
): Promise<Response> {
  if (!isFacadeRuntimeBound(host.browser, host.loader)) {
    return facadeUnboundResponse();
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const code = typeof body.code === "string" ? body.code : "";
  if (!code.trim()) {
    return jsonFile({ error: { message: "code is required" } }, 400);
  }
  if (worktreeId && !(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  if (!(await canInspectUnit(host, filePath, spaceId, unitId, worktreeId))) {
    return jsonFile({ error: { message: "Unit not found" } }, 404);
  }
  if (!host.collab) {
    return jsonFile({ error: { message: "Collab service unavailable" } }, 503);
  }

  const snapshotUnitId = resolveSnapshotUnitId(host.collab, unitId, worktreeId);
  try {
    const persisted = await runFacadeAndPersist({
      request,
      browser: host.browser,
      loader: host.loader,
      collab: host.collab,
      unitId,
      snapshotUnitId,
      worktreeId,
      code,
      memberId: executeMemberId(host.currentUser!.id, host.executeAsAgent === true)
    });
    host.notifyCliWroteCells?.();
    return jsonFile({ success: true, unitId, worktreeId: worktreeId || undefined, rev: persisted.rev });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Execute failed";
    if (message === "Snapshot not found") {
      return jsonFile({ error: { message } }, 404);
    }
    return jsonFile({ error: { message } }, 502);
  }
}

async function screenshotFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const opened = await openRenderRequest(request, host, filePath, spaceId);
  if (opened instanceof Response) return opened;
  try {
    const image = await capturePng(host.browser!, opened.renderUrl, {
      ...opened.params,
      snapshot: opened.snapshot
    });
    return jsonFile({
      images: [{ mediaType: "image/png", data: image.data, width: image.width, height: image.height }]
    });
  } catch (err) {
    return jsonFile({ error: { message: err instanceof Error ? err.message : "Screenshot failed" } }, 502);
  }
}

async function printPdfFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const opened = await openRenderRequest(request, host, filePath, spaceId);
  if (opened instanceof Response) return opened;
  try {
    const pdf = await printPdf(host.browser!, opened.renderUrl, { snapshot: opened.snapshot });
    return jsonFile({ mediaType: "application/pdf", data: pdf.data });
  } catch (err) {
    return jsonFile({ error: { message: err instanceof Error ? err.message : "Print PDF failed" } }, 502);
  }
}

async function lintFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const opened = await openRenderRequest(request, host, filePath, spaceId);
  if (opened instanceof Response) return opened;
  try {
    return jsonFile(await lintRenderPage(host.browser!, opened.renderUrl, { snapshot: opened.snapshot }));
  } catch (err) {
    return jsonFile({ error: { message: err instanceof Error ? err.message : "Lint failed" } }, 502);
  }
}

async function importFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  if (!isBrowserBound(host.browser)) {
    return browserUnboundResponse();
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const format = typeof body.format === "string" ? body.format.trim() : "";
  const content = typeof body.content === "string" ? body.content : "";
  const worktreeId = typeof body.worktreeId === "string" ? body.worktreeId.trim() : "";
  if (!format) {
    return jsonFile({ error: { message: "format is required" } }, 400);
  }
  if (!content) {
    return jsonFile({ error: { message: "content is required" } }, 400);
  }
  if (worktreeId && !(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  if (!host.collab?.createUnit) {
    return jsonFile({ error: { message: "Collab service unavailable" } }, 503);
  }

  const unitId = `unit_${crypto.randomUUID()}`;
  try {
    const imported = await importViaBrowser(host.browser, request.url, { format, content, unitId });
    const snapshot = imported.snapshot;
    (snapshot as { unitID?: string }).unitID = unitId;
    if ((snapshot as { workbook?: { unitID?: string } }).workbook) {
      (snapshot as { workbook: { unitID?: string } }).workbook.unitID = unitId;
    }
    await putExchangeBlob(
      host.blobStore,
      `uf/${spaceId}/${unitId}/import.${format.toLowerCase()}`,
      decodeImportBytes(content),
      format.toLowerCase() === "csv" ? "text/csv" : "application/octet-stream"
    );
    const name = imported.name || `Imported ${format.toUpperCase()}`;
    const node = await host.db.createNode({
      spaceId,
      name,
      createdBy: host.currentUser!.id
    });
    const resource = await host.db.createResource({ nodeId: node.id, kind: "univer" });
    await host.db.createUniverResource(resource.id, unitId, "sheet");
    host.collab.createUnit(unitId, 2, name, snapshot);
    if (worktreeId) {
      await host.db.addWorktreeUnit({
        worktreeId,
        unitId,
        trunkUnitId: null,
        resourceId: resource.id,
        nodeId: node.id,
        name,
        unitType: "sheet",
        source: "worktree",
        draftHeadRevision: 1,
        baselineTrunkRevision: 0
      });
      host.collab.bindWorktreeUnit?.(worktreeId, unitId, { type: 2, name });
    }
    return jsonFile({ success: true, unitId, name, type: 2 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Import failed";
    if (message === "BROWSER unbound") {
      return browserUnboundResponse();
    }
    return jsonFile({ error: { message } }, 502);
  }
}

async function exportFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  if (!isBrowserBound(host.browser)) {
    return browserUnboundResponse();
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const unitId = typeof body.unitId === "string" ? body.unitId.trim() : "";
  const format = typeof body.format === "string" ? body.format.trim() : "";
  const worktreeId = typeof body.worktreeId === "string" ? body.worktreeId.trim() : "";
  if (!unitId) {
    return jsonFile({ error: { message: "unitId is required" } }, 400);
  }
  if (!format) {
    return jsonFile({ error: { message: "format is required" } }, 400);
  }
  if (worktreeId && !(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  if (!(await canInspectUnit(host, filePath, spaceId, unitId, worktreeId))) {
    return jsonFile({ error: { message: "Unit not found" } }, 404);
  }
  if (!host.collab) {
    return jsonFile({ error: { message: "Collab service unavailable" } }, 503);
  }

  const snapshotUnitId = resolveSnapshotUnitId(host.collab, unitId, worktreeId);
  const snapshot = host.collab.getLatestSnapshot(snapshotUnitId);
  if (!snapshot) {
    return jsonFile({ error: { message: "Snapshot not found" } }, 404);
  }

  try {
    const exported = await exportViaBrowser(host.browser, request.url, {
      format,
      snapshot: snapshot.data,
      unitId: snapshotUnitId
    });
    await putExchangeBlob(
      host.blobStore,
      `uf/${spaceId}/${snapshotUnitId}/export.${format.toLowerCase()}`,
      new TextEncoder().encode(exported.data),
      exported.mediaType
    );
    return jsonFile({
      mediaType: exported.mediaType,
      data: exported.data,
      byteSize: exported.byteSize
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Export failed";
    if (message === "BROWSER unbound") {
      return browserUnboundResponse();
    }
    return jsonFile({ error: { message } }, 502);
  }
}

async function compileSvgFileUnit(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response> {
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const unitId = typeof body.unitId === "string" ? body.unitId.trim() : "";
  const svg = typeof body.svg === "string" ? body.svg : "";
  if (!unitId) {
    return jsonFile({ error: { message: "unitId is required" } }, 400);
  }
  if (!svg.trim()) {
    return jsonFile({ error: { message: "svg is required" } }, 400);
  }
  if (!(await canInspectUnit(host, filePath, spaceId, unitId, ""))) {
    return jsonFile({ error: { message: "Unit not found" } }, 404);
  }
  if (!host.collab) {
    return jsonFile({ error: { message: "Collab service unavailable" } }, 503);
  }

  try {
    const persisted = await persistCompiledSvg(host.collab, unitId, svg);
    return jsonFile({ success: true, unitId, rev: persisted.rev });
  } catch (err) {
    const message = err instanceof Error ? err.message : "compile-svg failed";
    if (message === "Snapshot not found") {
      return jsonFile({ error: { message } }, 404);
    }
    return jsonFile({ error: { message } }, 502);
  }
}

async function openRenderRequest(
  request: Request,
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string
): Promise<Response | { renderUrl: string; params?: Record<string, unknown>; snapshot?: unknown }> {
  if (!isBrowserBound(host.browser)) {
    return browserUnboundResponse();
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const unitId = typeof body.unitId === "string" ? body.unitId.trim() : "";
  const worktreeId = typeof body.worktreeId === "string" ? body.worktreeId.trim() : "";
  const params = body.params && typeof body.params === "object" && !Array.isArray(body.params)
    ? (body.params as Record<string, unknown>)
    : undefined;
  const theme = typeof params?.theme === "string" ? params.theme : "";

  if (!unitId) {
    return jsonFile({ error: { message: "unitId is required" } }, 400);
  }
  if (worktreeId && !(await canReviewFileWorktree(host, worktreeId, spaceId))) {
    return jsonFile({ error: { message: "Worktree not found" } }, 404);
  }
  if (!(await canInspectUnit(host, filePath, spaceId, unitId, worktreeId))) {
    return jsonFile({ error: { message: "Unit not found" } }, 404);
  }

  const snapshotUnitId = host.collab ? resolveSnapshotUnitId(host.collab, unitId, worktreeId) : unitId;
  return {
    renderUrl: renderPageUrl(request.url, {
      unitId: snapshotUnitId,
      worktreeId,
      theme
    }),
    params,
    snapshot: host.collab?.getLatestSnapshot(snapshotUnitId)?.data
  };
}

async function canReviewFileWorktree(
  host: UniverFileHttpHost,
  worktreeId: string,
  spaceId: string
): Promise<boolean> {
  const wt = await host.db.getWorktree(worktreeId);
  const user = host.currentUser;
  return (
    !!wt &&
    !!user &&
    (wt.creator_user_id === user.id || (wt.kind === "team" && wt.visibility === "space")) &&
    wt.team_space_id === spaceId
  );
}

async function canInspectUnit(
  host: UniverFileHttpHost,
  filePath: string,
  spaceId: string,
  unitId: string,
  worktreeId: string
): Promise<boolean> {
  if (filePath === DEMO_UNIVER_FILE && unitId === DEMO_UNIT_ID) {
    const welcome = await host.db.getResourceByUnitId(DEMO_UNIT_ID);
    if (welcome?.univer) return true;
  }
  const resource = await host.db.getResourceByUnitId(unitId);
  if (resource?.univer && resource.node?.space_id === spaceId) return true;
  if (worktreeId && host.collab) {
    const direct = host.collab.getWorktreeBinding(worktreeId, unitId);
    if (direct) return true;
    return host.collab
      .listWorktreeBindings(worktreeId)
      .some((binding) => binding.unit_id === unitId || binding.trunk_unit_id === unitId);
  }
  return false;
}

function resolveSnapshotUnitId(
  collab: UniverFileCollab,
  unitId: string,
  worktreeId: string
): string {
  if (!worktreeId) return unitId;
  const direct = collab.getWorktreeBinding(worktreeId, unitId);
  if (direct) return unitId;
  const draft = collab.listWorktreeBindings(worktreeId).find((binding) => binding.trunk_unit_id === unitId);
  return draft?.unit_id ?? unitId;
}

function parseInspectRange(range: string): { start: string; end?: string; sheetName?: string } {
  const bang = range.lastIndexOf("!");
  const sheetName = bang >= 0 ? range.slice(0, bang).replace(/^'+|'+$/g, "") : undefined;
  const cells = bang >= 0 ? range.slice(bang + 1) : range;
  const [start, end] = cells.split(":");
  if (!start) throw new Error("Invalid range");
  return { start, end, sheetName };
}

function sheetIdForRange(snapshot: Record<string, unknown>, sheetName?: string): string | undefined {
  if (!sheetName) return undefined;
  const workbook = (snapshot as { workbook?: { sheets?: Record<string, { name?: string }> } }).workbook ?? snapshot;
  const sheets = (workbook as { sheets?: Record<string, { name?: string }> }).sheets;
  if (!sheets) return sheetName;
  if (sheets[sheetName]) return sheetName;
  for (const [id, sheet] of Object.entries(sheets)) {
    if (sheet?.name === sheetName) return id;
  }
  return sheetName;
}

function inspectPayload(
  range: string,
  cells: Array<Array<SheetCellValue | null>>
): Record<string, unknown> {
  const payload: Record<string, unknown> = { range, cells };
  if (cells.length === 1 && cells[0]?.length === 1) {
    const cell = cells[0][0];
    if (cell) {
      if ("v" in cell) payload.v = cell.v;
      if ("f" in cell) payload.f = cell.f;
      if ("t" in cell) payload.t = cell.t;
    } else {
      payload.v = null;
    }
  }
  return payload;
}

function mapWorktreeBody(
  body: Record<string, unknown>,
  rest: string,
  method: string,
  spaceId: string
): Record<string, unknown> {
  const mapped = { ...body };
  if (rest === "worktrees" && method === "POST") {
    if (mapped.teamSpaceId == null) mapped.teamSpaceId = spaceId;
  }
  if (rest.match(/^worktrees\/[^/]+\/units$/) && method === "POST") {
    if (typeof mapped.type === "number" && mapped.unitType == null) {
      mapped.unitType = kindFromUnitType(mapped.type);
    }
    if (mapped.targetSpaceId == null) mapped.targetSpaceId = spaceId;
    if (!mapped.source && (mapped.unitType || mapped.name || mapped.type != null)) {
      mapped.source = "worktree";
    }
  }
  return mapped;
}

function unitTypeNumber(unitType: string): number {
  switch (unitType) {
    case "doc":
      return 1;
    case "slide":
      return 3;
    case "board":
      return 5;
    case "base":
      return 6;
    default:
      return 2;
  }
}

function kindFromUnitType(type: unknown): string {
  switch (type) {
    case 1:
      return "doc";
    case 3:
      return "slide";
    case 5:
      return "board";
    case 6:
      return "base";
    default:
      return "sheet";
  }
}

function jsonFile(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
