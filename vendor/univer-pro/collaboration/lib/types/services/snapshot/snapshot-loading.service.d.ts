import type { UniverInstanceType } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export declare enum SnapshotLoadStage {
    LOADING_SNAPSHOT = "loading-snapshot",
    LOADING_BLOCKS = "loading-blocks",
    COMPLETE = "complete",
    ERROR = "error"
}
export interface ISnapshotLoadState {
    unitId: string;
    type: UniverInstanceType;
    stage: SnapshotLoadStage;
    totalBlocks: number;
    loadedBlocks: number;
    error?: Error;
}
/** Sheet snapshot loading state consumed by loading UI. */
export declare class SnapshotLoadingService extends Disposable {
    private readonly _stateByUnit;
    private readonly _state$;
    readonly state$: import("rxjs").Observable<ReadonlyMap<string, ISnapshotLoadState>>;
    begin(unitId: string, type: UniverInstanceType): void;
    setSnapshot(unitId: string, totalBlocks: number): void;
    addBlock(unitId: string): void;
    complete(unitId: string): void;
    fail(unitId: string, error: Error): void;
    getState(unitId: string): ISnapshotLoadState | undefined;
    dispose(): void;
    private _setState;
}
