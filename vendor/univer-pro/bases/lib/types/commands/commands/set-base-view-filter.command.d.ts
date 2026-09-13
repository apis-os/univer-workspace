import type { ICommand, IFilterConfig } from '@univerjs/core';
export interface ISetBaseViewFilterCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    filter: IFilterConfig | null;
}
export declare const SetBaseViewFilterCommand: ICommand<ISetBaseViewFilterCommandParams>;
