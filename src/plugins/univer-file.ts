/**
 * Cordis univer_* office tools on ChatAgent.
 * Thin wrappers around `/uf` handlers (same names as wax-office).
 */
import type { Context } from "@deepseek-ai/cordis";
import type { ActionMeta, ActionService } from "../kernel/action.ts";
import { ControlPlaneDb } from "../control-plane/db.ts";
import type { User } from "../control-plane/types.ts";
import { R2BlobStore } from "../integrations/r2-blob-store.ts";
import type { BrowserBinding } from "../integrations/browser-rendering.ts";
import type { LoaderBinding } from "../integrations/univer-file-execute.ts";
import {
  fileKeyOf,
  handleUniverFileHttp,
  type UniverFileCollab,
  type UniverFileHttpHost
} from "../integrations/univer-file-http.ts";

export const name = "univer-file";

export const OFFICE_TOOL_NAMES = [
  "univer_execute",
  "univer_inspect",
  "univer_screenshot",
  "univer_import",
  "univer_export",
  "univer_lint",
  "univer_print_pdf",
  "univer_compile_svg",
  "univer_worktree",
  "univer_unit"
] as const;

type OfficeArgs = Record<string, any>;

function safeGet(ctx: Context, key: string): unknown {
  try {
    return ctx.get(key);
  } catch {
    return undefined;
  }
}

function fileKeyFor(file?: string): string {
  const path = typeof file === "string" && file.trim() ? file.trim() : "workspace.univer";
  return path === "workspace.univer" ? fileKeyOf("workspace.univer") : fileKeyOf(path);
}

function syntheticUser(userId: string): User {
  const now = Date.now();
  return {
    id: userId,
    username: userId,
    display_name: userId,
    avatar_url: null,
    created_at: now,
    updated_at: now
  };
}

function resolveFileHost(ctx: Context, executeAsAgent: boolean): UniverFileHttpHost {
  const injected = safeGet(ctx, "univerFileHttpHost") as UniverFileHttpHost | undefined;
  if (injected) {
    return { ...injected, executeAsAgent };
  }

  const cordisHost = safeGet(ctx, "host") as
    | {
        env?: {
          DB?: D1Database;
          BROWSER?: BrowserBinding;
          LOADER?: LoaderBinding;
          BLOB_BUCKET?: R2Bucket;
        };
        currentUser?: User | null;
      }
    | undefined;
  const env =
    ((safeGet(ctx, "env") as typeof cordisHost.env) ?? cordisHost?.env) ?? undefined;
  if (!env?.DB) {
    throw new Error("Control plane unavailable");
  }
  return {
    db: new ControlPlaneDb(env.DB),
    currentUser: cordisHost?.currentUser ?? null,
    collab: safeGet(ctx, "collab") as UniverFileCollab | undefined,
    browser: env.BROWSER,
    loader: env.LOADER,
    blobStore: new R2BlobStore(env.BLOB_BUCKET),
    executeAsAgent
  };
}

async function withCurrentUser(host: UniverFileHttpHost, meta: ActionMeta): Promise<UniverFileHttpHost> {
  if (host.currentUser) return host;
  const userId = meta.userId?.trim() || "";
  if (!userId) return host;
  const found = await host.db.getUserById(userId);
  return { ...host, currentUser: found ?? syntheticUser(userId) };
}

async function invokeUf(
  ctx: Context,
  meta: ActionMeta,
  input: {
    file?: string;
    method: string;
    rest: string;
    query?: Record<string, string>;
    body?: unknown;
    executeAsAgent?: boolean;
  }
): Promise<unknown> {
  const host = await withCurrentUser(resolveFileHost(ctx, input.executeAsAgent === true), meta);
  const key = fileKeyFor(input.file);
  await handleUniverFileHttp(
    new Request(`https://univer-workspace.internal/uf/${key}`, { method: "POST" }),
    host
  );

  const url = new URL(`https://univer-workspace.internal/uf/${key}/${input.rest}`);
  for (const [name, value] of Object.entries(input.query ?? {})) {
    if (value) url.searchParams.set(name, value);
  }
  const method = input.method.toUpperCase();
  const init: RequestInit = { method };
  if (method !== "GET" && method !== "HEAD") {
    init.headers = { "Content-Type": "application/json" };
    init.body = JSON.stringify(input.body ?? {});
  }
  const res = await handleUniverFileHttp(new Request(url, init), host);
  const text = await (res?.text() ?? Promise.resolve(""));
  try {
    return text ? JSON.parse(text) : { status: res?.status };
  } catch {
    return { status: res?.status, body: text };
  }
}

function worktreeRequest(args: OfficeArgs): { method: string; rest: string; body?: unknown } {
  const action = String(args.action ?? "");
  const worktreeId = String(args.worktreeId ?? "");
  switch (action) {
    case "create":
      return { method: "POST", rest: "worktrees", body: { name: args.name } };
    case "ready":
      return { method: "POST", rest: `worktrees/${encodeURIComponent(worktreeId)}/ready` };
    case "reopen":
      return { method: "POST", rest: `worktrees/${encodeURIComponent(worktreeId)}/reopen` };
    case "merge":
      return { method: "POST", rest: `worktrees/${encodeURIComponent(worktreeId)}/merge` };
    case "discard":
      return { method: "POST", rest: `worktrees/${encodeURIComponent(worktreeId)}/discard` };
    default:
      throw new Error(`Unknown worktree action: ${action || "(missing)"}`);
  }
}

function unitRequest(args: OfficeArgs): { method: string; rest: string; body?: unknown } {
  const action = String(args.action ?? "");
  const worktreeId = String(args.worktreeId ?? "");
  if (action === "create") {
    const kind = typeof args.kind === "string" ? args.kind : "sheet";
    return {
      method: "POST",
      rest: `worktrees/${encodeURIComponent(worktreeId)}/units`,
      body: { name: args.name, unitType: kind, kind, source: "worktree" }
    };
  }
  if (action === "remove") {
    return {
      method: "POST",
      rest: `worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(String(args.unitId ?? ""))}/remove`
    };
  }
  throw new Error(`Unknown unit action: ${action || "(missing)"}`);
}

export function registerUniverFileTools(ctx: Context): void {
  const action = safeGet(ctx, "action") as ActionService | undefined;
  if (!action) return;
  if (action.getAction("univer.execute")) return;

  action.register({
    id: "univer.execute",
    name: "univer_execute",
    description:
      "Execute Univer Facade JavaScript to write data, set formatting, add formulas, or mutate documents in a draft worktree.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        worktreeId: { type: "string", description: "Target draft worktree ID." },
        unitId: { type: "string" },
        code: { type: "string" }
      },
      required: ["unitId", "code"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) => {
      const unitId = String(args.unitId || meta.unitId || "");
      const worktreeId = typeof args.worktreeId === "string" ? args.worktreeId.trim() : "";
      const rest = worktreeId
        ? `worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/execute`
        : `units/${encodeURIComponent(unitId)}/execute`;
      return invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest,
        body: { code: args.code },
        executeAsAgent: true
      });
    }
  });

  action.register({
    id: "univer.inspect",
    name: "univer_inspect",
    description:
      "Inspect structured cell values, formulas, ranges, or slide/doc hierarchy in an office file.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" },
        range: { type: "string", description: "Optional range for sheets (e.g. 'Sheet1!A1:D20')." },
        worktreeId: { type: "string" }
      },
      required: ["unitId"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) => {
      const unitId = String(args.unitId || meta.unitId || "");
      return invokeUf(ctx, meta, {
        file: args.file,
        method: "GET",
        rest: `units/${encodeURIComponent(unitId)}/inspect`,
        query: {
          range: String(args.range ?? ""),
          worktreeId: String(args.worktreeId ?? "")
        }
      });
    }
  });

  action.register({
    id: "univer.screenshot",
    name: "univer_screenshot",
    description: "Capture a visual snapshot of a unit, sheet range, or slide page.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" },
        worktreeId: { type: "string" }
      },
      required: ["unitId"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "screenshot",
        body: { unitId: args.unitId || meta.unitId, worktreeId: args.worktreeId, params: args.params }
      })
  });

  action.register({
    id: "univer.import",
    name: "univer_import",
    description:
      "Import external office files (Excel .xlsx, Word .docx, PowerPoint .pptx, or .csv) into the office workspace.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        format: { type: "string" },
        content: { type: "string" },
        worktreeId: { type: "string" }
      },
      required: ["format", "content"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "import",
        body: { format: args.format, content: args.content, worktreeId: args.worktreeId }
      })
  });

  action.register({
    id: "univer.export",
    name: "univer_export",
    description: "Export sheets to .xlsx/.csv, documents to .docx, or presentations to .pptx.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" },
        format: { type: "string" },
        worktreeId: { type: "string" }
      },
      required: ["unitId", "format"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "export",
        body: { unitId: args.unitId || meta.unitId, format: args.format, worktreeId: args.worktreeId }
      })
  });

  action.register({
    id: "univer.lint",
    name: "univer_lint",
    description:
      "Verify slide and doc layout, detecting overlapping elements, overflowing text, or off-canvas objects.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" },
        worktreeId: { type: "string" }
      },
      required: ["unitId"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "lint",
        body: { unitId: args.unitId || meta.unitId, worktreeId: args.worktreeId }
      })
  });

  action.register({
    id: "univer.print.pdf",
    name: "univer_print_pdf",
    description: "Render and print an office unit to high-quality PDF.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" }
      },
      required: ["unitId"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "print-pdf",
        body: { unitId: args.unitId || meta.unitId }
      })
  });

  action.register({
    id: "univer.compile.svg",
    name: "univer_compile_svg",
    description: "Compile and embed SVG illustrations into a document, slide, or sheet.",
    schema: {
      type: "object",
      properties: {
        file: { type: "string", description: "Office file path." },
        unitId: { type: "string" },
        svg: { type: "string" }
      },
      required: ["unitId", "svg"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) =>
      invokeUf(ctx, meta, {
        file: args.file,
        method: "POST",
        rest: "compile-svg",
        body: { unitId: args.unitId || meta.unitId, svg: args.svg }
      })
  });

  action.register({
    id: "univer.worktree",
    name: "univer_worktree",
    description:
      "Create or transition an isolated draft worktree for safe editing. Actions: 'create', 'ready', 'reopen', 'merge', 'discard'.",
    schema: {
      type: "object",
      properties: {
        action: { type: "string", enum: ["create", "ready", "reopen", "merge", "discard"] },
        file: { type: "string", description: "Office file path." },
        worktreeId: { type: "string" },
        name: { type: "string" }
      },
      required: ["action"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) => {
      const req = worktreeRequest(args);
      return invokeUf(ctx, meta, { file: args.file, method: req.method, rest: req.rest, body: req.body });
    }
  });

  action.register({
    id: "univer.unit",
    name: "univer_unit",
    description:
      "Create or remove a top-level Sheet, Doc, Slide, Base, or Board Unit inside an explicit draft worktree.",
    schema: {
      type: "object",
      properties: {
        action: { type: "string", enum: ["create", "remove"] },
        file: { type: "string", description: "Office file path." },
        worktreeId: { type: "string" },
        kind: { type: "string" },
        name: { type: "string" },
        unitId: { type: "string" }
      },
      required: ["action", "worktreeId"]
    },
    exposeAsTool: true,
    execute: async (args: OfficeArgs, meta) => {
      const req = unitRequest(args);
      return invokeUf(ctx, meta, { file: args.file, method: req.method, rest: req.rest, body: req.body });
    }
  });
}

export function apply(ctx: Context): void {
  registerUniverFileTools(ctx);
}
