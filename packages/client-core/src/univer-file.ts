/**
 * Thin Workspace HTTP client for Cloudflare `/uf` office routes.
 * Execute/inspect/screenshot/import/export never launch local Chromium.
 */
import { loginWithPassword, whoami, type WorkspaceSubject } from "./auth.js";
import { WorkspaceApplicationError, workspaceError } from "./errors.js";
import { WorkspaceHttp } from "./http.js";
import { WorkspaceSpaceFeature } from "./space.js";

export const DEMO_UNIVER_FILE = "workspace.univer";
export const DEMO_UNIT_ID = "unit_welcome_sheet";
export const SUM_E2_CODE =
  "api.getActiveWorkbook().getActiveSheet().getRange('E2').setValue({ f: '=SUM(B2:D2)' })";

export interface UniverFileExecuteInput {
  readonly code: string;
  readonly unitId: string;
  readonly worktreeId?: string;
}

export interface UniverFileInspectInput {
  readonly range: string;
  readonly unitId: string;
  readonly worktreeId?: string;
}

export interface UniverFileScreenshotInput {
  readonly params?: Record<string, unknown>;
  readonly unitId: string;
  readonly worktreeId?: string;
}

export interface UniverFileImportInput {
  readonly content: string;
  readonly format: string;
  readonly worktreeId?: string;
}

export interface UniverFileExportInput {
  readonly format: string;
  readonly unitId: string;
  readonly worktreeId?: string;
}

export interface CliEdgeProofInput {
  readonly fetcher?: typeof fetch;
  readonly origin?: string;
  readonly password?: string;
  readonly username?: string;
}

export interface CliEdgeProofScreenshot {
  readonly localChromium: false;
  readonly path: string;
  readonly pngLength?: number;
  readonly status: number;
}

export interface CliEdgeProofResult {
  readonly curlUf: { readonly cookieSent: true; readonly path: string; readonly status: number };
  readonly inspect: { readonly f?: unknown; readonly v?: unknown };
  readonly live: boolean;
  readonly ok: true;
  readonly origin: string;
  readonly screenshot: CliEdgeProofScreenshot;
  readonly spaces: readonly { readonly id: string; readonly name: string }[];
  readonly whoami: { readonly origin: string; readonly subject: WorkspaceSubject };
  readonly worktreeId?: string;
}

/** Encode a file path as base64url for `/uf/:key` URLs (same as the Worker). */
export function fileKeyOf(path: string): string {
  const bytes = new TextEncoder().encode(path.replace(/\\/g, "/"));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export class WorkspaceUniverFileClient {
  public constructor(
    private readonly http: WorkspaceHttp,
    private readonly filePath: string = DEMO_UNIVER_FILE,
  ) {}

  public fileKey(): string {
    return fileKeyOf(this.filePath);
  }

  public path(rest = ""): string {
    const key = this.fileKey();
    const suffix = rest.replace(/^\//u, "");
    return suffix === "" ? `/uf/${key}` : `/uf/${key}/${suffix}`;
  }

  public async ensureSpace(): Promise<Record<string, unknown>> {
    return await this.http.json(this.path(), { method: "POST" });
  }

  public async listUnits(): Promise<Record<string, unknown>> {
    return await this.http.json(this.path("units"));
  }

  public async execute(input: UniverFileExecuteInput): Promise<Record<string, unknown>> {
    const rest =
      input.worktreeId !== undefined && input.worktreeId !== ""
        ? `worktrees/${encodeURIComponent(input.worktreeId)}/units/${encodeURIComponent(input.unitId)}/execute`
        : `units/${encodeURIComponent(input.unitId)}/execute`;
    return await this.http.json(this.path(rest), { method: "POST", body: { code: input.code } });
  }

  public async inspect(input: UniverFileInspectInput): Promise<Record<string, unknown>> {
    const query = new URLSearchParams({ range: input.range });
    if (input.worktreeId !== undefined && input.worktreeId !== "") {
      query.set("worktreeId", input.worktreeId);
    }
    return await this.http.json(
      this.path(`units/${encodeURIComponent(input.unitId)}/inspect?${query.toString()}`),
    );
  }

  public async screenshot(input: UniverFileScreenshotInput): Promise<Record<string, unknown>> {
    return await this.http.json(this.path("screenshot"), {
      method: "POST",
      body: {
        unitId: input.unitId,
        ...(input.worktreeId === undefined ? {} : { worktreeId: input.worktreeId }),
        ...(input.params === undefined ? {} : { params: input.params }),
      },
    });
  }

  public async importFile(input: UniverFileImportInput): Promise<Record<string, unknown>> {
    return await this.http.json(this.path("import"), {
      method: "POST",
      body: {
        format: input.format,
        content: input.content,
        ...(input.worktreeId === undefined ? {} : { worktreeId: input.worktreeId }),
      },
    });
  }

  public async exportFile(input: UniverFileExportInput): Promise<Record<string, unknown>> {
    return await this.http.json(this.path("export"), {
      method: "POST",
      body: {
        unitId: input.unitId,
        format: input.format,
        ...(input.worktreeId === undefined ? {} : { worktreeId: input.worktreeId }),
      },
    });
  }

  public async createWorktree(body: Record<string, unknown>): Promise<Record<string, unknown>> {
    return await this.http.json(this.path("worktrees"), { method: "POST", body });
  }

  public async readyWorktree(worktreeId: string): Promise<Record<string, unknown>> {
    return await this.http.json(this.path(`worktrees/${encodeURIComponent(worktreeId)}/ready`), {
      method: "POST",
    });
  }
}

export async function runCliEdgeProof(input: CliEdgeProofInput = {}): Promise<CliEdgeProofResult> {
  const configured = (input.origin ?? process.env["EDGE_ORIGIN"] ?? "").replace(/\/+$/u, "");
  const live = configured !== "" && input.fetcher === undefined;
  const origin = configured || "https://workspace.edge.test";
  const fetcher = input.fetcher ?? (live ? fetch : offlineEdgeFetch);
  const username = input.username ?? process.env["EDGE_USERNAME"] ?? "admin";
  const password = input.password ?? process.env["EDGE_PASSWORD"] ?? "password123";

  const login = await loginWithPassword(
    new WorkspaceHttp({
      origin,
      role: "client",
      fetcher,
    }),
    { username, password },
  );
  const http = new WorkspaceHttp({
    cookie: login.cookie,
    origin: login.origin,
    role: "client",
    fetcher,
  });
  const client = new WorkspaceUniverFileClient(http);
  const identity = await whoami(http);
  let spaces: readonly { id: string; name: string }[] = [];
  try {
    spaces = (await new WorkspaceSpaceFeature(async () => http).list()).map((space) => ({
      id: space.id,
      name: space.name,
    }));
  } catch (error) {
    if (live) throw error;
  }

  await client.ensureSpace();
  await client.execute({ unitId: DEMO_UNIT_ID, code: SUM_E2_CODE });
  const inspect = await client.inspect({ unitId: DEMO_UNIT_ID, range: "E2" });
  if (inspect["f"] == null && inspect["v"] == null) {
    throw workspaceError(
      "workspace-invalid-response",
      "Inspect E2 did not return f and/or v.",
      { inspect },
    );
  }

  const screenshot = await captureScreenshot(client, live);
  const created = await client.createWorktree({ name: "CLI proof", kind: "team" });
  const worktreeId = worktreeIdFrom(created);
  await client.readyWorktree(worktreeId);
  const curlPath = client.path();
  const curl = await http.request(curlPath, { method: "POST" });

  return {
    curlUf: { cookieSent: true, path: curlPath, status: curl.status },
    inspect: { f: inspect["f"], v: inspect["v"] },
    live,
    ok: true,
    origin: login.origin,
    screenshot,
    spaces,
    whoami: identity,
    worktreeId,
  };
}

async function captureScreenshot(
  client: WorkspaceUniverFileClient,
  live: boolean,
): Promise<CliEdgeProofScreenshot> {
  const path = client.path("screenshot");
  try {
    const body = await client.screenshot({ unitId: DEMO_UNIT_ID });
    const images = body["images"];
    const data =
      Array.isArray(images) && isRecord(images[0]) && typeof images[0]["data"] === "string"
        ? images[0]["data"]
        : "";
    if (data.length === 0) {
      throw workspaceError(
        "workspace-invalid-response",
        "Screenshot PNG length was 0.",
        { path, status: 200 },
      );
    }
    return { localChromium: false, path, pngLength: data.length, status: 200 };
  } catch (error) {
    const detail = httpDetail(error);
    if (detail.status === 503 && /\/uf\//u.test(detail.path) && detail.path.endsWith("/screenshot")) {
      if (live) throw error;
      return { localChromium: false, path: detail.path, status: 503 };
    }
    throw error;
  }
}

function worktreeIdFrom(body: Record<string, unknown>): string {
  if (typeof body["id"] === "string" && body["id"].length > 0) return body["id"];
  const nested = body["worktree"];
  if (isRecord(nested) && typeof nested["id"] === "string" && nested["id"].length > 0) {
    return nested["id"];
  }
  throw workspaceError("workspace-invalid-response", "Worktree create response is missing id.");
}

function httpDetail(error: unknown): { path: string; status: number } {
  if (
    error instanceof WorkspaceApplicationError &&
    isRecord(error.detail) &&
    typeof error.detail["path"] === "string" &&
    typeof error.detail["status"] === "number"
  ) {
    return { path: error.detail["path"], status: error.detail["status"] };
  }
  return { path: "", status: 0 };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

const offlineEdgeFetch: typeof fetch = async (input, init) => {
  const request = new Request(input, init);
  const url = new URL(request.url);
  const path = url.pathname;
  if (path === "/api/auth/password/login") {
    return new Response(
      JSON.stringify({
        authenticated: true,
        user: { id: "user_admin", displayName: "Avery Chen" },
        sessionToken: "tok",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "set-cookie": "workspace_session=tok; Path=/",
        },
      },
    );
  }
  if (path === "/api/session") {
    return jsonResponse({
      authenticated: true,
      user: { id: "user_admin", displayName: "Avery Chen" },
    });
  }
  if (path === "/api/spaces") {
    return jsonResponse({ spaces: [{ id: "space_personal", name: "Personal", type: "personal" }] });
  }
  if (path.endsWith("/screenshot") || path.endsWith("/import") || path.endsWith("/export")) {
    return jsonResponse({ error: "BROWSER unbound" }, 503);
  }
  if (path.endsWith("/inspect")) {
    return jsonResponse({
      range: "E2",
      f: "=SUM(B2:D2)",
      v: 600,
      cells: [[{ f: "=SUM(B2:D2)", v: 600 }]],
    });
  }
  if (path.endsWith("/execute")) {
    return jsonResponse({ success: true, unitId: DEMO_UNIT_ID, rev: 2 });
  }
  if (path.endsWith("/worktrees") && request.method === "POST") {
    return jsonResponse({ id: "wt_cli_proof", name: "CLI proof", state: "draft" }, 201);
  }
  if (/\/worktrees\/[^/]+\/ready$/u.test(path)) {
    return jsonResponse({ worktree: { id: "wt_cli_proof", name: "CLI proof", state: "ready" } });
  }
  if (path.startsWith("/uf/")) {
    return jsonResponse({ success: true, fileKey: path.slice("/uf/".length).split("/")[0] });
  }
  return jsonResponse({ error: { message: `unexpected ${request.method} ${path}` } }, 404);
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
