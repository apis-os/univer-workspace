import type { ICommand } from '@univerjs/core';
export interface IDeleteSlideTableRowsCommandParams {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
}
export declare const DeleteSlideTableRowsCommand: ICommand<IDeleteSlideTableRowsCommandParams>;
