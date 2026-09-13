import type { ICommand } from '@univerjs/core';
export interface IInsertBoardTableColumnsCommandParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
    columnIndex: number;
    count?: number;
    width?: number;
}
export declare const InsertBoardTableColumnsCommand: ICommand<IInsertBoardTableColumnsCommandParams>;
