import { IUniverCollaborationClientConfig } from "@univerjs-pro/collaboration-client";
import { DependencyOverride } from "@univerjs/core";
import { CreateUnitFromDataInput, CreateUnitFromSnapshotInput, SaveSnapshotInput } from "@univerjs-pro/collaboration-service";
import { CreateWorktreeInput, WorktreeData, WorktreeUnitMergeEvaluation } from "@univerjs-pro/collaboration-worktree-service";
import { ILogContext, ISnapshotServerService } from "@univerjs-pro/collaboration";
import { IFetchMissingChangesetsRequest, IFetchMissingChangesetsResponse, IGetDeserializedSheetBlockResponse, IGetResourcesRequest, IGetResourcesResponse, IGetSheetBlockRequest, IGetSheetBlockResponse, IGetUnitOnRevRequest, IGetUnitOnRevResponse } from "@univerjs/protocol";

//#region src/config.d.ts
interface CreateWorktreeCollaborationConfigOptions {
  readonly origin: string;
  readonly worktreeID: string;
  readonly override?: DependencyOverride;
}
type WorktreeCollaborationConfig = Pick<IUniverCollaborationClientConfig, "snapshotServerUrl" | "collabSubmitChangesetUrl" | "collabWebSocketUrl" | "wsSessionTicketUrl" | "override">;
interface CreateWorktreeMergePreviewConfigOptions {
  readonly origin: string;
  readonly worktreeID: string;
  readonly preview: SaveSnapshotInput;
  readonly override?: DependencyOverride;
}
type WorktreeMergePreviewConfig = Pick<IUniverCollaborationClientConfig, "enableCollaboration" | "snapshotServerUrl" | "override">;
declare function createWorktreeCollaborationConfig(options: CreateWorktreeCollaborationConfigOptions): WorktreeCollaborationConfig;
declare function createWorktreeMergePreviewConfig(options: CreateWorktreeMergePreviewConfigOptions): WorktreeMergePreviewConfig;
//#endregion
//#region src/http.d.ts
type WorktreeFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
interface WorktreeHttpOptions {
  readonly fetch?: WorktreeFetch;
}
declare class WorktreeClientError extends Error {
  readonly status: number;
  readonly code: string | number;
  readonly retryable?: boolean | undefined;
  constructor(status: number, code: string | number, message: string, retryable?: boolean | undefined);
}
//#endregion
//#region src/worktree-client.d.ts
interface WorktreeClientOptions extends WorktreeHttpOptions {
  readonly origin: string;
}
declare class WorktreeClient {
  private readonly _origin;
  private readonly _fetch;
  constructor(options: WorktreeClientOptions);
  createWorktree(input: CreateWorktreeInput): Promise<WorktreeData>;
  getWorktree(worktreeID: string): Promise<WorktreeData>;
  evaluateUnitMerge(worktreeID: string, unitID: string): Promise<WorktreeUnitMergeEvaluation>;
  addUnit(worktreeID: string, unitID: string): Promise<WorktreeData>;
  setUnitRemoved(worktreeID: string, unitID: string, removed: boolean): Promise<WorktreeData>;
  createUnitFromSnapshot(worktreeID: string, input: CreateUnitFromSnapshotInput): Promise<WorktreeData>;
  createUnitFromData(worktreeID: string, input: CreateUnitFromDataInput): Promise<WorktreeData>;
  markReady(worktreeID: string): Promise<WorktreeData>;
  reopenWorktree(worktreeID: string): Promise<WorktreeData>;
  discardWorktree(worktreeID: string): Promise<WorktreeData>;
  mergeWorktree(worktreeID: string): Promise<WorktreeData>;
  private _post;
}
//#endregion
//#region src/worktree-event-client.d.ts
interface WorktreeEventClientOptions extends WorktreeHttpOptions {
  readonly origin: string;
  readonly worktreeID: string;
  readonly reconnectDelayMs?: number;
  readonly createWebSocket?: (url: string) => WebSocket;
}
interface WorktreeEventSubscription {
  dispose(): void;
}
declare class WorktreeEventClient {
  private readonly _origin;
  private readonly _worktreeID;
  private readonly _fetch;
  private readonly _reconnectDelayMs;
  private readonly _createWebSocket;
  private readonly _listeners;
  private _socket;
  private _reconnectTimer;
  private _current;
  private _disposed;
  private _connectedOnce;
  constructor(options: WorktreeEventClientOptions);
  get current(): WorktreeData | undefined;
  onChange(listener: (worktree: WorktreeData) => void): WorktreeEventSubscription;
  connect(): Promise<WorktreeData>;
  dispose(): void;
  private _open;
  private _scheduleReconnect;
}
//#endregion
//#region src/merge-preview-snapshot-server.d.ts
interface WorktreeMergePreviewSnapshotServiceOptions {
  readonly preview: SaveSnapshotInput;
}
declare class WorktreeMergePreviewSnapshotService implements ISnapshotServerService {
  private readonly _preview;
  constructor(options: WorktreeMergePreviewSnapshotServiceOptions);
  getUnitOnRev(_context: ILogContext, params: IGetUnitOnRevRequest): Promise<IGetUnitOnRevResponse>;
  getSheetBlock(_context: ILogContext, params: IGetSheetBlockRequest): Promise<IGetSheetBlockResponse>;
  getDeserializedSheetBlock(context: ILogContext, params: IGetSheetBlockRequest): Promise<IGetDeserializedSheetBlockResponse | IGetSheetBlockResponse>;
  fetchMissingChangesets(_context: ILogContext, params: IFetchMissingChangesetsRequest): Promise<IFetchMissingChangesetsResponse>;
  getResourcesRequest(_context: ILogContext, params: IGetResourcesRequest): Promise<IGetResourcesResponse>;
  saveSnapshot(): Promise<never>;
  updateSnapshot(): Promise<never>;
  saveSheetBlock(): Promise<never>;
  saveChangeset(): Promise<never>;
  copyFileMeta(): Promise<never>;
  getLatestCsReqIdBySid(): Promise<never>;
  private _validateIdentity;
}
//#endregion
export { type CreateWorktreeCollaborationConfigOptions, type CreateWorktreeMergePreviewConfigOptions, WorktreeClient, WorktreeClientError, type WorktreeClientOptions, type WorktreeCollaborationConfig, WorktreeEventClient, type WorktreeEventClientOptions, type WorktreeEventSubscription, type WorktreeFetch, type WorktreeMergePreviewConfig, WorktreeMergePreviewSnapshotService, type WorktreeMergePreviewSnapshotServiceOptions, createWorktreeCollaborationConfig, createWorktreeMergePreviewConfig };