//#region src/errors.d.ts
type InstancePoolErrorCode = "INSTANCE_POOL_CAPACITY_EXCEEDED" | "INSTANCE_POOL_CLOSED" | "INSTANCE_POOL_INVALID_INPUT";
declare class InstancePoolError extends Error {
  readonly code: string;
  constructor(code: InstancePoolErrorCode | string, message: string, options?: ErrorOptions);
}
//#endregion
//#region src/types.d.ts
interface InstanceAcquireInput<TInit> {
  /** Opaque cache identity owned by the application. */
  readonly key: string;
  /** Used only when the pool must create a new instance. */
  readonly init: TInit;
}
interface ManagedInstanceInput<TInstance> {
  readonly instance: TInstance;
  readonly key: string;
}
interface ManagedInstanceFactory<TInstance, TInit> {
  create(input: InstanceAcquireInput<TInit>): Promise<TInstance>;
  destroy(input: ManagedInstanceInput<TInstance>): Promise<void>;
}
interface InstanceLease<TInstance> {
  readonly instance: TInstance;
  readonly key: string;
  /** Ends the exclusive lease and allows the instance to be reused. */
  release(): Promise<void>;
  /** Ends the exclusive lease and permanently removes the instance from the pool. */
  invalidate(): Promise<void>;
}
interface KeyedInstancePool<TInstance, TInit> {
  acquire(input: InstanceAcquireInput<TInit>): Promise<InstanceLease<TInstance>>;
  close(): Promise<void>;
}
interface InstancePoolCacheOptions {
  readonly idleTtlMs?: number;
  readonly maxEntries?: number;
}
type InstancePoolEvent = {
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
};
interface GenericKeyedInstancePoolOptions<TInstance, TInit> {
  readonly cache?: InstancePoolCacheOptions;
  readonly factory: ManagedInstanceFactory<TInstance, TInit>;
  readonly onEvent?: (event: InstancePoolEvent) => void;
}
//#endregion
//#region src/keyed-instance-pool.d.ts
declare function createGenericKeyedInstancePool<TInstance, TInit>(options: GenericKeyedInstancePoolOptions<TInstance, TInit>): KeyedInstancePool<TInstance, TInit>;
//#endregion
export { type GenericKeyedInstancePoolOptions, type InstanceAcquireInput, type InstanceLease, type InstancePoolCacheOptions, InstancePoolError, type InstancePoolErrorCode, type InstancePoolEvent, type KeyedInstancePool, type ManagedInstanceFactory, type ManagedInstanceInput, createGenericKeyedInstancePool };