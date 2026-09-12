import type { SlideTableMovePosition } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface IMoveBoardTableRowsCommandParams {
    unitId: string;
    tableId: string;
    startRow: number;
    endRow: number;
    targetRow: number;
    position: SlideTableMovePosition;
}
export declare const MoveBoardTableRowsCommand: ICommand<IMoveBoardTableRowsCommandParams>;
