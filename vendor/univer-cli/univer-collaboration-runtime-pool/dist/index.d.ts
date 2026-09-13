import { InstancePoolCacheOptions } from "@univer-cli/generic-keyed-instance-pool";
import { CollaborationCommitResult, CollaborationCommitResult as CollaborationCommitResult$1, CollaborationFetchResult, CollaborationFetchResult as CollaborationFetchResult$1, CollaborationPullResult, CollaborationPullResult as CollaborationPullResult$1, CollaborationReplaceMutationsResult, CollaborationReplaceMutationsResult as CollaborationReplaceMutationsResult$1, CollaborationRuntimeReadExecution, CollaborationRuntimeReadExecution as CollaborationRuntimeReadExecution$1, CollaborationRuntimeReadResult, CollaborationRuntimeReadResult as CollaborationRuntimeReadResult$1, CollaborationRuntimeState, CollaborationRuntimeState as CollaborationRuntimeState$1, CollaborationRuntimeWriteExecution, CollaborationRuntimeWriteExecution as CollaborationRuntimeWriteExecution$1, CollaborationRuntimeWriteResult, CollaborationRuntimeWriteResult as CollaborationRuntimeWriteResult$1, CollaborationUnitData, CollaborationUnitData as CollaborationUnitData$1, UniverCollaborationRuntime } from "@univer-cli/univer-collaboration-runtime";
import { IMutation } from "@univerjs/protocol";
//#region src/errors.d.ts
type UniverCollaborationRuntimePoolErrorCode = "COLLABORATION_POOL_INVALID_INPUT" | "COLLABORATION_POOL_CLOSED" | "COLLABORATION_POOL_CAPACITY_EXCEEDED" | "COLLABORATION_LEASE_CLOSED" | "COLLABORATION_WORKER_OPEN_TIMEOUT" | "COLLABORATION_WORKER_OPERATION_TIMEOUT" | "COLLABORATION_WORKER_CRASHED" | "COLLABORATION_WORKER_PROTOCOL_ERROR" | "COLLABORATION_WORKER_CLOSED";
interface UniverCollaborationRuntimePoolErrorOptions extends ErrorOptions {
  readonly invalidatesInstance?: boolean;
}
declare class UniverCollaborationRuntimePoolError extends Error {
  readonly code: UniverCollaborationRuntimePoolErrorCode;
  readonly invalidatesInstance: boolean;
  constructor(code: UniverCollaborationRuntimePoolErrorCode, message: string, options?: UniverCollaborationRuntimePoolErrorOptions);
}
//#endregion
//#region src/types.d.ts
interface UniverCollaborationRuntimeAcquireInput<TInit> {
  /** Stable opaque target identity owned by the application. */
  readonly key: string;
  /** Sent to the worker only when it creates or reloads a runtime. */
  readonly init: TInit;
}
interface UniverCollaborationRuntimeLease {
  readonly key: string;
  readonly unitId: string;
  readonly unitType: UniverCollaborationRuntime["unitType"];
  getState(): Promise<CollaborationRuntimeState$1>;
  getPendingMutations(): Promise<readonly IMutation[]>;
  execute(input: CollaborationRuntimeReadExecution$1): Promise<CollaborationRuntimeReadResult$1>;
  execute(input: CollaborationRuntimeWriteExecution$1): Promise<CollaborationRuntimeWriteResult$1>;
  replacePendingMutations(mutations: readonly IMutation[]): Promise<CollaborationReplaceMutationsResult$1>;
  fetch(): Promise<CollaborationFetchResult$1>;
  pull(): Promise<CollaborationPullResult$1>;
  commit(): Promise<CollaborationCommitResult$1>;
  exportUnitData(): Promise<CollaborationUnitData$1>;
  /** Releases the current runtime for reuse. */
  release(): Promise<void>;
  /** Permanently removes this runtime and its worker from the pool. */
  invalidate(): Promise<void>;
}
interface UniverCollaborationRuntimePool<TInit = unknown> {
  acquire(input: UniverCollaborationRuntimeAcquireInput<TInit>): Promise<UniverCollaborationRuntimeLease>;
  close(): Promise<void>;
}
type UniverCollaborationRuntimePoolOperation = "state" | "pending-mutations" | "read" | "write" | "replace-mutations" | "fetch" | "pull" | "commit" | "export";
type UniverCollaborationRuntimePoolEvent = {
  readonly key: string;
  readonly type: "create-start";
} | {
  readonly durationMs: number;
  readonly key: string;
  readonly type: "create-complete";
} | {
  readonly key: string;
  readonly type: "cache-hit";
} | {
  readonly key: string;
  readonly reason: "invalidate" | "lru" | "ttl";
  readonly type: "destroy-start";
} | {
  readonly key: string;
  readonly reason: "invalidate" | "lru" | "ttl";
  readonly type: "evicted";
} | {
  readonly durationMs: number;
  readonly key: string;
  readonly operation: UniverCollaborationRuntimePoolOperation;
  readonly type: "operation-complete";
} | {
  readonly errorCode: string;
  readonly key: string;
  readonly type: "instance-failed";
};
interface UniverCollaborationRuntimePoolOptions {
  readonly cache?: InstancePoolCacheOptions;
  readonly entry: string | URL;
  readonly env?: NodeJS.ProcessEnv;
  readonly onEvent?: (event: UniverCollaborationRuntimePoolEvent) => void;
  readonly openTimeoutMs?: number;
  readonly operationTimeoutMs?: number;
}
interface UniverCollaborationRuntimeWorkerDefinition<TInit = unknown> {
  createRuntime(init: TInit): Promise<UniverCollaborationRuntime> | UniverCollaborationRuntime;
}
//#endregion
//#region src/runtime-pool.d.ts
declare function createUniverCollaborationRuntimePool<TInit = unknown>(options: UniverCollaborationRuntimePoolOptions): UniverCollaborationRuntimePool<TInit>;
//#endregion
//#region src/worker-definition.d.ts
declare function defineUniverCollaborationRuntimeWorker<TInit>(definition: UniverCollaborationRuntimeWorkerDefinition<TInit>): UniverCollaborationRuntimeWorkerDefinition<TInit>;
//#endregion
export { type CollaborationCommitResult, type CollaborationFetchResult, type CollaborationPullResult, type CollaborationReplaceMutationsResult, type CollaborationRuntimeReadExecution, type CollaborationRuntimeReadResult, type CollaborationRuntimeState, type CollaborationRuntimeWriteExecution, type CollaborationRuntimeWriteResult, type CollaborationUnitData, type UniverCollaborationRuntimeAcquireInput, type UniverCollaborationRuntimeLease, type UniverCollaborationRuntimePool, UniverCollaborationRuntimePoolError, type UniverCollaborationRuntimePoolErrorCode, type UniverCollaborationRuntimePoolErrorOptions, type UniverCollaborationRuntimePoolEvent, type UniverCollaborationRuntimePoolOperation, type UniverCollaborationRuntimePoolOptions, type UniverCollaborationRuntimeWorkerDefinition, createUniverCollaborationRuntimePool, defineUniverCollaborationRuntimeWorker };