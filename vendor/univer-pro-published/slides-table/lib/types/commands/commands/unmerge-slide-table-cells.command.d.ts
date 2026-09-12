import type { ICommand } from '@univerjs/core';
import type { ISlideTableCellRange } from '../../types';
export interface IUnmergeSlideTableCellsCommandParams {
    unitId: string;
    tableId: string;
    row?: number;
    column?: number;
    range?: ISlideTableCellRange;
}
export declare const UnmergeSlideTableCellsCommand: ICommand<IUnmergeSlideTableCellsCommandParams>;
