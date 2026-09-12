import type { ICommand } from '@univerjs/core';
export interface IDeleteBoardTableColumnsCommandParams {
    unitId: string;
    tableId: string;
    startColumn: number;
    endColumn: number;
}
export declare const DeleteBoardTableColumnsCommand: ICommand<IDeleteBoardTableColumnsCommandParams>;
