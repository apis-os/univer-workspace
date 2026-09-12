import { IBoardData } from "@univerjs-pro/boards";
import { ISlideData } from "@univerjs-pro/slides";
import { IBaseSnapshot, IDocumentData, IWorkbookData, Univer, UniverInstanceType } from "@univerjs/core";
import { IChangeset, IFetchMissingChangesetsResponse, IGetSheetBlockResponse, IGetUnitOnRevResponse, IMutation } from "@univerjs/protocol";
import { ISnapshotServerService, SnapshotService } from "@univerjs-pro/collaboration";
//#region src/backend.d.ts
type CollaborationConnectionState = "online" | "reconnecting" | "offline" | "closed";
interface CollaborationRuntimeTarget {
  readonly unitId: string;
  readonly unitType: UniverInstanceType;
}
interface CollaborationChangesetDraft {
  readonly baseRev: number;
  readonly mutations: readonly IMutation[];
  readonly sid: string;
  readonly reqId: number;
  readonly additionalFields?: string;
}
type CollaborationBackendSubmitResult = {
  readonly status: "confirmed";
  readonly precedingChangesets: readonly IChangeset[];
  readonly acceptedChangeset: IChangeset;
} | {
  readonly status: "retry";
} | {
  readonly status: "unknown";
} | {
  readonly status: "rejected";
  readonly reason: "invalid-revision" | "permission-denied" | "invalid-changeset";
  readonly message: string;
};
interface CollaborationBackendHandleBase {
  getConnectionState(): CollaborationConnectionState;
  fetchChangesets(fromRevision: number, toRevision?: number): Promise<IFetchMissingChangesetsResponse>;
  submitChangeset(draft: CollaborationChangesetDraft): Promise<CollaborationBackendSubmitResult>;
  close(): Promise<void>;
}
type CollaborationUnitDataCheckpoint = {
  readonly unitType: UniverInstanceType.UNIVER_SHEET;
  readonly unitData: IWorkbookData;
  readonly changesets: readonly IChangeset[];
} | {
  readonly unitType: UniverInstanceType.UNIVER_DOC;
  readonly unitData: IDocumentData;
  readonly changesets: readonly IChangeset[];
} | {
  readonly unitType: UniverInstanceType.UNIVER_SLIDE;
  readonly unitData: ISlideData;
  readonly changesets: readonly IChangeset[];
} | {
  readonly unitType: UniverInstanceType.UNIVER_BASE;
  readonly unitData: IBaseSnapshot;
  readonly changesets: readonly IChangeset[];
} | {
  readonly unitType: UniverInstanceType.UNIVER_BOARD;
  readonly unitData: IBoardData;
  readonly changesets: readonly IChangeset[];
};
interface CollaborationUnitDataBackendHandle extends CollaborationBackendHandleBase {
  readonly format: "unit-data";
  getUnitData(): Promise<CollaborationUnitDataCheckpoint>;
}
interface CollaborationSnapshotBackendHandle extends CollaborationBackendHandleBase {
  readonly format: "snapshot";
  getUnitOnRev(revision?: number): Promise<IGetUnitOnRevResponse>;
  getSheetBlock(blockID: string): Promise<IGetSheetBlockResponse>;
}
type CollaborationRuntimeBackendHandle = CollaborationUnitDataBackendHandle | CollaborationSnapshotBackendHandle;
interface CollaborationRuntimeBackend {
  open(target: CollaborationRuntimeTarget): Promise<CollaborationRuntimeBackendHandle>;
}
//#endregion
//#region src/errors.d.ts
type CollaborationRuntimeErrorCode = "COLLABORATION_INVALID_INPUT" | "COLLABORATION_LOAD_FAILED" | "COLLABORATION_UNAVAILABLE" | "COLLABORATION_PROTOCOL_ERROR" | "COLLABORATION_CLOSED";
interface CollaborationRuntimeErrorOptions extends ErrorOptions {
  readonly retryable?: boolean;
}
declare class CollaborationRuntimeError extends Error {
  readonly code: CollaborationRuntimeErrorCode;
  readonly retryable: boolean;
  constructor(code: CollaborationRuntimeErrorCode, message: string, options?: CollaborationRuntimeErrorOptions);
}
//#endregion
//#region src/types.d.ts
type CollaborationRuntimeValue = null | boolean | number | string | CollaborationRuntimeValue[] | {
  readonly [key: string]: CollaborationRuntimeValue;
};
interface CollaborationRuntimeReadExecution {
  readonly code: string;
  readonly mode: "read";
}
interface CollaborationRuntimeWriteExecution {
  readonly code: string;
  readonly mode: "write";
}
interface CollaborationRuntimeReadResult {
  readonly value: CollaborationRuntimeValue;
  readonly state: CollaborationRuntimeState;
}
interface CollaborationRuntimeWriteResult {
  readonly value: CollaborationRuntimeValue;
  readonly mutations: readonly IMutation[];
  readonly state: CollaborationRuntimeState;
}
interface CollaborationReplaceMutationsResult {
  readonly previousMutationCount: number;
  readonly pendingMutationCount: number;
  readonly state: CollaborationRuntimeState;
}
type CollaborationFetchResult = {
  readonly status: "unchanged";
  readonly knownHeadRevision: number;
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "fetched";
  readonly fromRevision: number;
  readonly toRevision: number;
  readonly changesets: readonly CollaborationChangesetSummary[];
  readonly state: CollaborationRuntimeState;
};
type CollaborationPullResult = {
  readonly status: "up-to-date";
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "pulled";
  readonly fromRevision: number;
  readonly toRevision: number;
  readonly appliedChangesets: readonly CollaborationChangesetSummary[];
  readonly transformedPendingMutationCount: number;
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "conflict";
  readonly conflict: CollaborationConflict;
  readonly state: CollaborationRuntimeState;
};
type CollaborationCommitResult = {
  readonly status: "nothing-to-commit";
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "pull-required";
  readonly baseRevision: number;
  readonly knownHeadRevision: number;
  readonly confirmedChangesets: readonly CollaborationChangesetSummary[];
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "confirmed";
  readonly confirmedChangesets: readonly CollaborationChangesetSummary[];
  readonly reconciledChangesets: readonly CollaborationChangesetSummary[];
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "retry" | "unknown";
  readonly changeset: CollaborationChangesetSummary;
  readonly confirmedChangesets: readonly CollaborationChangesetSummary[];
  readonly state: CollaborationRuntimeState;
} | {
  readonly status: "conflict";
  readonly conflict: CollaborationConflict;
  readonly confirmedChangesets: readonly CollaborationChangesetSummary[];
  readonly state: CollaborationRuntimeState;
};
interface CollaborationChangesetSummary {
  readonly baseRevision: number;
  readonly revision: number;
  readonly mutationCount: number;
  readonly sid?: string;
  readonly reqId?: number;
}
type CollaborationConflictReason = "transform-failed" | "changeset-rejected" | "permission-rejected";
interface CollaborationConflict {
  readonly operation: "pull" | "commit";
  readonly reason: CollaborationConflictReason;
  readonly message: string;
}
interface CollaborationRuntimeState {
  readonly connection: CollaborationConnectionState;
  readonly baseRevision: number;
  readonly knownHeadRevision: number;
  readonly pendingMutationCount: number;
  readonly bufferedChangesetCount: number;
  readonly awaitingChangeset: CollaborationChangesetSummary | null;
  readonly conflict: CollaborationConflict | null;
}
type CollaborationUnitData = IWorkbookData | IDocumentData | ISlideData | IBaseSnapshot | IBoardData;
interface UniverCollaborationRuntime {
  readonly unitId: string;
  readonly unitType: UniverInstanceType;
  getState(): CollaborationRuntimeState;
  getPendingMutations(): readonly IMutation[];
  execute(input: CollaborationRuntimeReadExecution): Promise<CollaborationRuntimeReadResult>;
  execute(input: CollaborationRuntimeWriteExecution): Promise<CollaborationRuntimeWriteResult>;
  replacePendingMutations(mutations: readonly IMutation[]): Promise<CollaborationReplaceMutationsResult>;
  fetch(): Promise<CollaborationFetchResult>;
  pull(): Promise<CollaborationPullResult>;
  commit(): Promise<CollaborationCommitResult>;
  exportUnitData(): Promise<CollaborationUnitData>;
  close(): Promise<void>;
}
//#endregion
//#region src/factory.d.ts
interface UniverFactoryContext {
  /** Resolves the per-Univer SnapshotService after the factory has returned. */
  readonly resolveSnapshotService?: () => SnapshotService;
  readonly unitId: string;
  readonly unitType: UniverInstanceType;
}
type UniverFactory = (context: UniverFactoryContext) => Univer | Promise<Univer>;
interface UniverCollaborationRuntimeFactoryOptions {
  readonly backend: CollaborationRuntimeBackend;
  readonly createUniver: UniverFactory;
  readonly maxCodeLength?: number;
  readonly snapshotServerService?: ISnapshotServerService;
}
interface UniverCollaborationRuntimeFactory {
  load(unitId: string, unitType: UniverInstanceType): Promise<UniverCollaborationRuntime>;
}
declare function createUniverCollaborationRuntimeFactory(options: UniverCollaborationRuntimeFactoryOptions): UniverCollaborationRuntimeFactory;
//#endregion
//#region src/server/index.d.ts
type CollaborationHttpRequest = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
interface CollaborationServerConfig {
  readonly snapshotServerUrl: string;
  readonly collabSubmitChangesetUrl: string;
  readonly collabWebSocketUrl: string;
  readonly wsSessionTicketUrl: string;
  readonly httpRequest?: CollaborationHttpRequest;
  readonly commitTimeoutMs?: number;
}
declare function createCollaborationServerAdapter(serverConfig: CollaborationServerConfig): CollaborationRuntimeBackend;
//#endregion
export { type CollaborationBackendHandleBase, type CollaborationBackendSubmitResult, type CollaborationChangesetDraft, type CollaborationChangesetSummary, type CollaborationCommitResult, type CollaborationConflict, type CollaborationConflictReason, type CollaborationConnectionState, type CollaborationFetchResult, type CollaborationHttpRequest, type CollaborationPullResult, type CollaborationReplaceMutationsResult, type CollaborationRuntimeBackend, type CollaborationRuntimeBackendHandle, CollaborationRuntimeError, type CollaborationRuntimeErrorCode, type CollaborationRuntimeErrorOptions, type CollaborationRuntimeReadExecution, type CollaborationRuntimeReadResult, type CollaborationRuntimeState, type CollaborationRuntimeTarget, type CollaborationRuntimeValue, type CollaborationRuntimeWriteExecution, type CollaborationRuntimeWriteResult, type CollaborationServerConfig, type CollaborationSnapshotBackendHandle, type CollaborationUnitData, type CollaborationUnitDataBackendHandle, type CollaborationUnitDataCheckpoint, type UniverCollaborationRuntime, type UniverCollaborationRuntimeFactory, type UniverCollaborationRuntimeFactoryOptions, type UniverFactory, type UniverFactoryContext, createCollaborationServerAdapter, createUniverCollaborationRuntimeFactory };