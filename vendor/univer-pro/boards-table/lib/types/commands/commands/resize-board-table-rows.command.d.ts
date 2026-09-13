import type { ICommand } from '@univerjs/core';
export interface IResizeBoardTableRowsCommandParams {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
    height: number;
}
export declare const ResizeBoardTableRowsCommand: ICommand<IResizeBoardTableRowsCommandParams>;
