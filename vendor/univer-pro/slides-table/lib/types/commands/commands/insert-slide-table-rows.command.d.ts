import type { ICommand } from '@univerjs/core';
export interface IInsertSlideTableRowsCommandParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
    rowIndex: number;
    count?: number;
    height?: number;
}
export declare const InsertSlideTableRowsCommand: ICommand<IInsertSlideTableRowsCommandParams>;
