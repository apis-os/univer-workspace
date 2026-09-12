import type { ISlideTableCellRange } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface IMergeBoardTableCellsCommandParams {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
}
export declare const MergeBoardTableCellsCommand: ICommand<IMergeBoardTableCellsCommandParams>;
