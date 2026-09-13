import type { ICommand } from '@univerjs/core';
export interface IDeleteBoardTableRowsCommandParams {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
}
export declare const DeleteBoardTableRowsCommand: ICommand<IDeleteBoardTableRowsCommandParams>;
