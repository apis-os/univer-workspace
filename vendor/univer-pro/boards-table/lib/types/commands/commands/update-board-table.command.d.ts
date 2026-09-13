import type { IUpdateSlideTablePatch } from '@univerjs-pro/slides-table';
import type { ICommand } from '@univerjs/core';
export interface IUpdateBoardTableCommandParams {
    unitId: string;
    tableId: string;
    patch: IUpdateSlideTablePatch;
}
export declare const UpdateBoardTableCommand: ICommand<IUpdateBoardTableCommandParams>;
