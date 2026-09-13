import type { ICommand } from '@univerjs/core';
import type { ISlideTableCellRange } from '../../types';
export interface IMergeSlideTableCellsCommandParams {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
}
export declare const MergeSlideTableCellsCommand: ICommand<IMergeSlideTableCellsCommandParams>;
