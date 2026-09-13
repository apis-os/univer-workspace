import type { IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
export interface IEmbedChildProductCurrentUnitLeaseOptions {
    instanceService: IUniverInstanceService;
    childUnitId: string;
    childType: UniverInstanceType;
    restoreUnitId?: string;
    shouldRestore?: () => boolean;
    /**
     * Product plugin registration may schedule already-started plugin lifecycle work on a short timer.
     * Keep the child current/focused until that lifecycle queue has had a chance to observe it.
     */
    settleDelayMs?: number;
    deferredRestoreDelaysMs?: readonly number[];
}
export declare function runWithEmbedChildProductCurrentUnit<T>(options: IEmbedChildProductCurrentUnitLeaseOptions, runner: () => T | Promise<T>): Promise<T>;
