import type { ICommand, IDocumentData } from '@univerjs/core';
export interface ISetBoardTableCellTextCommandParams {
    unitId: string;
    tableId: string;
    row: number;
    column: number;
    textData: IDocumentData | null;
}
export declare const SetBoardTableCellTextCommand: ICommand<ISetBoardTableCellTextCommandParams>;
