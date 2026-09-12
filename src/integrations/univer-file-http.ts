/**
 * Univer File `/uf` gateway: fileKey → Space, unit list, and worktree aliases.
 */
import type { ControlPlaneDb } from "../control-plane/db.ts";
import { handleControlPlaneRoutes, type GatewayContext } from "../control-plane/gateway.ts";
import type { User } from "../control-plane/types.ts";

export const DEMO_UNIVER_FILE = "workspace.univer";
export const DEMO_UNIT_ID = "unit_welcome_sheet";

export interface UniverFileHttpHost {
  db: ControlPlaneDb;
  currentUser: User | null;
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

  if (rest === "worktrees" || rest.startsWith("worktrees/")) {
    return aliasWorktreeRoutes(request, host, rest, spaceId);
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
    const rows = await host.db.listWorktreeUnits(unitsMatch[1]);
    return jsonFile({
      units: rows.map((row) => ({
        id: row.unit_id,
        name: row.name,
        type: unitTypeNumber(row.unit_type)
      }))
    });
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
