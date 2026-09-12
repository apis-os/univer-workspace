import type { ISlideTableCellRange, ISlideTableCellStyle } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface ISetBoardTableCellStyleCommandParams {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
    style: ISlideTableCellStyle;
}
export declare const SetBoardTableCellStyleCommand: ICommand<ISetBoardTableCellStyleCommandParams>;
