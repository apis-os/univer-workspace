//#region src/errors.d.ts
type ResourceLibraryErrorCode = "resource-cache-root-invalid" | "resource-download-failed" | "resource-download-http" | "resource-download-insecure" | "resource-download-insecure-redirect" | "resource-download-invalid-redirect" | "resource-download-invalid-svg" | "resource-download-invalid-utf8" | "resource-download-timeout" | "resource-download-too-large" | "resource-download-too-many-redirects" | "resource-export-failed" | "resource-export-filename-too-long" | "resource-invalid-handle" | "resource-invalid-registry-id" | "resource-invalid-resource-id" | "resource-invalid-svg" | "resource-limit-invalid" | "resource-manifest-invalid" | "resource-manifest-read-failed" | "resource-not-found" | "resource-query-empty" | "resource-registry-not-found";
declare class ResourceLibraryError extends Error {
  readonly code: ResourceLibraryErrorCode;
  readonly handle?: string | undefined;
  constructor(code: ResourceLibraryErrorCode, message: string, handle?: string | undefined, options?: ErrorOptions);
}
declare function isResourceLibraryError(error: unknown): error is ResourceLibraryError;
//#endregion
//#region src/types.d.ts
interface ResourceTextValue {
  readonly id: string;
  readonly label: string;
}
interface ResourceIntrinsicSize {
  readonly width: number;
  readonly height: number;
}
interface ResourceSummary {
  readonly handle: string;
  readonly registryId: string;
  readonly id: string;
  readonly name: string;
  readonly group: ResourceTextValue | null;
  readonly tags: readonly ResourceTextValue[];
  readonly keywords: readonly string[];
  readonly order: number | null;
  readonly intrinsicSize: ResourceIntrinsicSize;
  readonly colorEditable: boolean;
}
interface ResourceRegistrySummary {
  readonly id: string;
  readonly resourceCount: number;
  readonly groupCount: number;
  readonly tagCount: number;
  readonly colorEditableCount: number;
}
interface FindResourcesInput {
  readonly queries: readonly string[];
  readonly registries?: readonly string[];
  readonly limit?: number;
}
interface ResourceFindResult {
  readonly resources: readonly ResourceSummary[];
  readonly total: number;
}
interface ReadResourceInput {
  readonly handle: string;
}
interface ReadResourceResult {
  readonly handle: string;
  readonly svg: string;
}
interface ExportResourcesInput {
  readonly handles: readonly string[];
  readonly destination: string;
}
interface ResourceExportSuccess {
  readonly handle: string;
  readonly path: string;
}
interface ResourceExportFailure {
  readonly handle: string;
  readonly code: string;
  readonly message: string;
}
interface ResourceExportResult {
  readonly exported: readonly ResourceExportSuccess[];
  readonly failed: readonly ResourceExportFailure[];
}
interface ResourceCacheClearResult {
  readonly path: string;
  readonly resourceCount: number;
  readonly byteCount: number;
}
interface ResourceDownloader {
  download(url: string): Promise<string>;
}
interface ResourceCache {
  readonly location: string;
  read(handle: string): Promise<string | undefined>;
  write(handle: string, svg: string): Promise<void>;
  clear(): Promise<ResourceCacheClearResult>;
}
interface ResourceOutput {
  write(destination: string, filename: string, svg: string): Promise<string>;
}
interface ResourceLibrary {
  readonly cacheLocation: string;
  listRegistries(): readonly ResourceRegistrySummary[];
  find(input: FindResourcesInput): ResourceFindResult;
  read(input: ReadResourceInput): Promise<ReadResourceResult>;
  export(input: ExportResourcesInput): Promise<ResourceExportResult>;
  clearCache(): Promise<ResourceCacheClearResult>;
}
interface CreateResourceLibraryOptions {
  readonly manifest: unknown;
  readonly cache: ResourceCache;
  readonly downloader: ResourceDownloader;
  readonly output: ResourceOutput;
}
//#endregion
//#region src/resource-library.d.ts
declare function createResourceLibrary(options: CreateResourceLibraryOptions): ResourceLibrary;
//#endregion
//#region src/node/https-downloader.d.ts
interface HttpsResourceDownloaderOptions {
  readonly fetch?: typeof fetch;
  readonly timeoutMs?: number;
  readonly maxBytes?: number;
  readonly maxRedirects?: number;
}
declare class HttpsResourceDownloader implements ResourceDownloader {
  private readonly fetchImpl;
  private readonly timeoutMs;
  private readonly maxBytes;
  private readonly maxRedirects;
  constructor(options?: HttpsResourceDownloaderOptions);
  download(value: string): Promise<string>;
}
//#endregion
//#region src/node/filesystem-cache.d.ts
declare function validateResourceCacheRoot(value: string): string;
declare class FilesystemResourceCache implements ResourceCache {
  readonly location: string;
  constructor(root: string);
  private path;
  read(handle: string): Promise<string | undefined>;
  write(handle: string, svg: string): Promise<void>;
  clear(): Promise<ResourceCacheClearResult>;
}
//#endregion
//#region src/node/filesystem-output.d.ts
declare class FilesystemResourceOutput implements ResourceOutput {
  write(destination: string, filename: string, svg: string): Promise<string>;
}
//#endregion
//#region src/node/manifest.d.ts
declare function loadResourceManifestFromPath(path: string): unknown;
//#endregion
//#region src/node.d.ts
interface CreateNodeResourceLibraryFactoryOptions {
  readonly manifestPath: string;
  readonly cacheRoot: string;
  readonly downloader?: HttpsResourceDownloaderOptions;
}
declare function createNodeResourceLibraryFactory(options: CreateNodeResourceLibraryFactoryOptions): () => ResourceLibrary;
//#endregion
export { type CreateNodeResourceLibraryFactoryOptions, type CreateResourceLibraryOptions, type ExportResourcesInput, FilesystemResourceCache, FilesystemResourceOutput, type FindResourcesInput, HttpsResourceDownloader, type HttpsResourceDownloaderOptions, type ReadResourceInput, type ReadResourceResult, type ResourceCache, type ResourceCacheClearResult, type ResourceDownloader, type ResourceExportFailure, type ResourceExportResult, type ResourceExportSuccess, type ResourceFindResult, type ResourceIntrinsicSize, type ResourceLibrary, ResourceLibraryError, type ResourceLibraryErrorCode, type ResourceOutput, type ResourceRegistrySummary, type ResourceSummary, type ResourceTextValue, createNodeResourceLibraryFactory, createResourceLibrary, isResourceLibraryError, loadResourceManifestFromPath, validateResourceCacheRoot };