import type { ITableSnapshot } from '@univerjs/core';
export interface ICopyBaseTableSnapshotOptions {
    id: string;
    name: string;
    /** Whether records and record resources should be copied. Defaults to false. */
    includeRecords?: boolean;
    regenerateViewIds?: boolean;
    createViewId?: () => string;
}
export declare function copyBaseTableSnapshot(source: ITableSnapshot, options: ICopyBaseTableSnapshotOptions): ITableSnapshot;
