import type { ITableSnapshot } from '@univerjs/core';
export interface ICreateDefaultBaseTableSnapshotOptions {
    id: string;
    name: string;
    primaryFieldId?: string;
    primaryFieldName?: string;
    gridViewId?: string;
    recordCount?: number;
    recordNamePrefix?: string;
    now?: number;
}
export declare function createDefaultBaseTableSnapshot(options: ICreateDefaultBaseTableSnapshotOptions): ITableSnapshot;
