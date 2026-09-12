import type { ICommand, ISortConfig } from '@univerjs/core';
export interface ISetBaseViewSortCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    sort: ISortConfig[];
}
export declare const SetBaseViewSortCommand: ICommand<ISetBaseViewSortCommandParams>;
