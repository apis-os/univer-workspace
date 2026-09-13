import type { ICommand } from '@univerjs/core';
export interface IUnmergeBoardTableCellsCommandParams {
    unitId: string;
    tableId: string;
    row: number;
    column: number;
}
export declare const UnmergeBoardTableCellsCommand: ICommand<IUnmergeBoardTableCellsCommandParams>;
