import type { ICommand } from '@univerjs/core';
import type { IUpdateBoardElementsCommandItem } from './update-board-elements.command';
export interface IUpdateBoardElementCommandParams extends IUpdateBoardElementsCommandItem {
    unitId: string;
    subUnitId: string;
    historyId?: string;
}
export declare const UpdateBoardElementCommand: ICommand<IUpdateBoardElementCommandParams>;
