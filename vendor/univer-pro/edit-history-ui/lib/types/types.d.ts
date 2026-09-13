import type { IHistoryComparison, IHistoryVersion } from '@univerjs-pro/edit-history';
import type { UniverInstanceType } from '@univerjs/core';
export interface IHistoryRenderAdapter {
    readonly type: UniverInstanceType;
    loadRevision(unitId: string, version: IHistoryVersion): Promise<void>;
    loadChanges(unitId: string, comparison: IHistoryComparison): Promise<void>;
    close(): void;
}
