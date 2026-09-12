import type { ICommand } from '@univerjs/core';
export interface IInsertBoardTableRowsCommandParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
    rowIndex: number;
    count?: number;
    height?: number;
}
export declare const InsertBoardTableRowsCommand: ICommand<IInsertBoardTableRowsCommandParams>;
