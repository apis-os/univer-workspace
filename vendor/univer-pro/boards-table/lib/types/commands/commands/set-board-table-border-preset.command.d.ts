import type { ISlideTableBorder, ISlideTableCellRange, SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface ISetBoardTableBorderPresetCommandParams {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
    preset: SlideTableBorderPresetEnum;
    border?: ISlideTableBorder;
}
export declare const SetBoardTableBorderPresetCommand: ICommand<ISetBoardTableBorderPresetCommandParams>;
