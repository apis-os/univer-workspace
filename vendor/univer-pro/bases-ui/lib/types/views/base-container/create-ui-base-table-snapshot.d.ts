import type { ITableSnapshot } from '@univerjs/core';
export interface ICreateUIBaseTableSnapshotOptions {
    id: string;
    name: string;
    primaryFieldId: string;
    gridViewId: string;
}
export declare function createUIBaseTableSnapshot(options: ICreateUIBaseTableSnapshotOptions): ITableSnapshot;
