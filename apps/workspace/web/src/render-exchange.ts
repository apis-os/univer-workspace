/**
 * `/render` exchange: decoded `@univerjs-pro/exchange-client` IExchangeService
 * in the Browser Rendering page. CSV/TSV conversion is the in-page Universer
 * stand-in (no exchange-node-binding in workerd).
 */
import {
  ExchangeFormat,
  IExchangeService
} from "@univerjs-pro/exchange-client";
import { UniverInstanceType } from "@univerjs/core";
import {
  HTTPHeaders,
  HTTPResponse,
  HTTPService,
  type HTTPRequest
} from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { from } from "rxjs";
import {
  decodeExchangeContent,
  runUniverExport,
  runUniverImport,
  type UniverExportPayload,
  type UniverExportResult,
  type UniverImportPayload,
  type UniverImportResult
} from "./render-exchange-csv";

export {
  decodeExchangeContent,
  runUniverExport,
  runUniverImport,
  type UniverExportPayload,
  type UniverExportResult,
  type UniverImportPayload,
  type UniverImportResult
};

type UniverInjectorHost = {
  __getInjector?: () => { get: (token: unknown) => unknown };
};

const OK = { code: ErrorCode.OK, message: "success" };
const files = new Map<string, { name: string; type: string; bytes: Uint8Array; text: string }>();
const tasks = new Map<string, Record<string, unknown>>();

export function installBrowserExchangeInterceptor(host: UniverInjectorHost): void {
  const injector = host.__getInjector?.();
  const http = injector?.get(HTTPService) as HTTPService | undefined;
  if (!http || typeof http.registerHTTPInterceptor !== "function") return;
  http.registerHTTPInterceptor({
    priority: 1000,
    interceptor: (request, next) => {
      if (!isExchangeUrl(request.getUrlWithParams())) return next(request);
      return from(handleExchangeRequest(request));
    }
  });
}

export async function importWithExchangeService(
  host: UniverInjectorHost,
  payload: UniverImportPayload
): Promise<UniverImportResult> {
  const exchange = getExchangeService(host);
  const format = String(payload.format ?? "csv").trim().toLowerCase() || "csv";
  const content = decodeExchangeContent(payload.content);
  const unitId =
    typeof payload.unitId === "string" && payload.unitId.trim()
      ? payload.unitId.trim()
      : `unit_${crypto.randomUUID()}`;
  const mime =
    format === "tsv" ? "text/tab-separated-values" : format === "csv" ? "text/csv" : "application/octet-stream";
  const file = new File([content], `import.${format}`, { type: mime });
  const json = await exchange.importFileToJson(file, UniverInstanceType.UNIVER_SHEET);
  const snapshot = snapshotFromExchangeJson(json, unitId);
  if (!snapshot) {
    throw new Error("Import did not return a workbook snapshot");
  }
  return {
    snapshot,
    unitId: String((snapshot as { unitID?: string }).unitID ?? unitId),
    name: format === "tsv" ? "Imported TSV" : "Imported CSV"
  };
}

export async function exportWithExchangeService(
  host: UniverInjectorHost,
  payload: UniverExportPayload
): Promise<UniverExportResult> {
  const exchange = getExchangeService(host);
  const format = String(payload.format ?? "csv").trim().toLowerCase() || "csv";
  const snapshot =
    payload.snapshot && typeof payload.snapshot === "object" ? payload.snapshot : {};
  const exchangeFormat = format === "tsv" ? ExchangeFormat.TSV : ExchangeFormat.CSV;
  const file = await exchange.exportFileBySnapshot(
    { snapshot: snapshot as never, sheetBlocks: {} },
    UniverInstanceType.UNIVER_SHEET,
    exchangeFormat
  );
  if (!file) {
    throw new Error("Export did not return bytes");
  }
  const data = await file.text();
  const byteSize = new TextEncoder().encode(data).byteLength;
  return {
    mediaType: file.type || (format === "tsv" ? "text/tab-separated-values" : "text/csv"),
    data,
    byteSize
  };
}

function getExchangeService(host: UniverInjectorHost): IExchangeService {
  const injector = host.__getInjector?.();
  const exchange = injector?.get(IExchangeService) as IExchangeService | undefined;
  if (!exchange || typeof exchange.importFileToJson !== "function") {
    throw new Error("IExchangeService unavailable");
  }
  return exchange;
}

function snapshotFromExchangeJson(json: unknown, unitId: string): Record<string, unknown> | null {
  if (!json || typeof json !== "object") return null;
  const record = json as Record<string, unknown>;
  const snapshot =
    record.snapshot && typeof record.snapshot === "object"
      ? (record.snapshot as Record<string, unknown>)
      : record;
  if (!snapshot.workbook && !(snapshot as { sheets?: unknown }).sheets) return null;
  if (typeof snapshot.unitID !== "string" || !snapshot.unitID) {
    snapshot.unitID = unitId;
  }
  return snapshot;
}

function isExchangeUrl(url: string): boolean {
  return (
    url.includes("/universer-api/stream/file/upload") ||
    url.includes("/universer-api/exchange/") ||
    url.includes("/universer-api/file/") ||
    url.includes("/__render-exchange__/file/")
  );
}

async function handleExchangeRequest(request: HTTPRequest): Promise<HTTPResponse<unknown>> {
  const url = request.getUrlWithParams();
  const method = request.method.toUpperCase();
  if (url.includes("/universer-api/stream/file/upload") && method === "POST") {
    return jsonResponse(await handleUpload(request));
  }
  if (/\/universer-api\/exchange\/[^/]+\/import/.test(url) && method === "POST") {
    return jsonResponse(handleImport(request));
  }
  if (/\/universer-api\/exchange\/[^/]+\/export/.test(url) && method === "POST") {
    return jsonResponse(handleExport(request));
  }
  const taskMatch = /\/universer-api\/exchange\/task\/([^/?]+)/.exec(url);
  if (taskMatch && method === "GET") {
    return jsonResponse(tasks.get(taskMatch[1]) ?? { error: OK, taskID: taskMatch[1], status: "done" });
  }
  const signMatch = /\/universer-api\/file\/([^/?]+)\/sign-url/.exec(url);
  if (signMatch && method === "GET") {
    return jsonResponse({ error: OK, url: `/__render-exchange__/file/${signMatch[1]}` });
  }
  const fileMatch = /\/__render-exchange__\/file\/([^/?]+)/.exec(url);
  if (fileMatch && method === "GET") {
    const stored = files.get(decodeURIComponent(fileMatch[1]));
    if (!stored) {
      return jsonResponse({ error: { code: ErrorCode.NOT_FOUND, message: "missing file" } }, 404);
    }
    if (request.responseType === "text") {
      return textResponse(stored.text);
    }
    return blobResponse(stored.bytes, stored.type || "application/octet-stream", stored.name);
  }
  return jsonResponse({ error: { code: ErrorCode.NOT_FOUND, message: "unhandled exchange url" } }, 404);
}

async function handleUpload(request: HTTPRequest): Promise<Record<string, unknown>> {
  const stored = await readUpload(request);
  const id = `file_${crypto.randomUUID()}`;
  files.set(id, stored);
  return { FileId: id, error: OK };
}

async function readUpload(
  request: HTTPRequest
): Promise<{ name: string; type: string; bytes: Uint8Array; text: string }> {
  const body = request.getBody();
  const flate = /[?&]flate=true/.test(request.getUrlWithParams());
  if (body instanceof FormData) {
    const file = body.get("file");
    if (file && typeof File !== "undefined" && file instanceof File) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      return { name: file.name, type: file.type, bytes, text: await decodeUploadText(bytes, flate) };
    }
    if (typeof file === "string") {
      const bytes = new TextEncoder().encode(file);
      return { name: "upload.txt", type: "text/plain", bytes, text: file };
    }
  }
  if (typeof body === "string") {
    const bytes = new TextEncoder().encode(body);
    return { name: "upload.json", type: "application/json", bytes, text: await decodeUploadText(bytes, flate) };
  }
  return { name: "empty", type: "application/octet-stream", bytes: new Uint8Array(), text: "" };
}

async function decodeUploadText(bytes: Uint8Array, flate: boolean): Promise<string> {
  const raw = new TextDecoder().decode(bytes);
  if (!flate) return raw;
  try {
    JSON.parse(raw);
    return raw;
  } catch {
    try {
      const { inflateSync } = await import("fflate");
      return new TextDecoder().decode(inflateSync(bytes));
    } catch {
      return raw;
    }
  }
}

function handleImport(request: HTTPRequest): Record<string, unknown> {
  const body = parseJsonBody(request);
  const fileID = String(body.fileID ?? "");
  const stored = files.get(fileID);
  if (!stored) {
    return { error: { code: ErrorCode.NOT_FOUND, message: "upload missing" }, taskID: "" };
  }
  const format = formatFromName(stored.name, stored.type);
  const imported = runUniverImport({ format, content: stored.text, unitId: `unit_${crypto.randomUUID()}` });
  const jsonID = `json_${crypto.randomUUID()}`;
  const envelope = JSON.stringify({ snapshot: imported.snapshot, sheetBlocks: {} });
  files.set(jsonID, {
    name: "file.json",
    type: "application/json",
    bytes: new TextEncoder().encode(envelope),
    text: envelope
  });
  const taskID = `task_${crypto.randomUUID()}`;
  tasks.set(taskID, {
    error: OK,
    taskID,
    status: "done",
    import: { outputType: 2, unitID: imported.unitId, jsonID }
  });
  return { taskID, error: OK };
}

function handleExport(request: HTTPRequest): Record<string, unknown> {
  const body = parseJsonBody(request);
  const jsonID = String(body.jsonID ?? "");
  const format = String(body.format ?? "csv").toLowerCase();
  const stored = files.get(jsonID);
  let snapshot: Record<string, unknown> = {};
  if (stored?.text) {
    try {
      const parsed = JSON.parse(stored.text) as Record<string, unknown>;
      snapshot =
        parsed.snapshot && typeof parsed.snapshot === "object"
          ? (parsed.snapshot as Record<string, unknown>)
          : parsed;
    } catch {
      snapshot = {};
    }
  }
  const exported = runUniverExport({ format, snapshot });
  const fileID = `export_${crypto.randomUUID()}`;
  files.set(fileID, {
    name: `export.${format}`,
    type: exported.mediaType,
    bytes: new TextEncoder().encode(exported.data),
    text: exported.data
  });
  const taskID = `task_${crypto.randomUUID()}`;
  tasks.set(taskID, {
    error: OK,
    taskID,
    status: "done",
    export: { fileID, fileUrl: `/__render-exchange__/file/${fileID}` }
  });
  return { taskID, error: OK };
}

function parseJsonBody(request: HTTPRequest): Record<string, unknown> {
  const body = request.getBody();
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  return {};
}

function formatFromName(name: string, type: string): string {
  if (name.endsWith(".tsv") || type.includes("tab-separated")) return "tsv";
  return "csv";
}

function jsonResponse(body: unknown, status = 200) {
  return new HTTPResponse({
    body,
    headers: new HTTPHeaders({ "Content-Type": "application/json" }),
    status,
    statusText: status === 200 ? "OK" : "Error"
  });
}

function textResponse(body: string) {
  return new HTTPResponse({
    body,
    headers: new HTTPHeaders({ "Content-Type": "text/plain" }),
    status: 200,
    statusText: "OK"
  });
}

function blobResponse(bytes: Uint8Array, type: string, name: string) {
  return new HTTPResponse({
    body: new Blob([bytes], { type }),
    headers: new HTTPHeaders({
      "Content-Type": type,
      "content-disposition": `attachment; filename=${name}`
    }),
    status: 200,
    statusText: "OK"
  });
}
