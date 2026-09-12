import { Disposable } from '@univerjs/core';
export interface IBoardMindMapPreviewRefreshEvent {
    nodeId: string;
    scopeId: string;
    subUnitId: string;
    unitId: string;
}
export declare class BoardMindMapPreviewRefreshService extends Disposable {
    private readonly _refresh$;
    readonly refresh$: import("rxjs").Observable<IBoardMindMapPreviewRefreshEvent>;
    notify(event: IBoardMindMapPreviewRefreshEvent): void;
    dispose(): void;
}
