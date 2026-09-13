import type { IAccessor, ICommand } from '@univerjs/core';
import type { IUpdateBoardElementMutationParams } from '../mutations/update-board-element.mutation';
export type IUpdateBoardElementsCommandItem = Omit<IUpdateBoardElementMutationParams, 'unitId' | 'subUnitId' | 'elementId'> & {
    elementId: string;
};
export interface IUpdateBoardElementsCommandParams {
    unitId: string;
    subUnitId: string;
    updates: IUpdateBoardElementsCommandItem[];
    historyId?: string;
}
export declare function executeUpdateBoardElements(accessor: IAccessor, params?: IUpdateBoardElementsCommandParams): boolean;
export declare const UpdateBoardElementsCommand: ICommand<IUpdateBoardElementsCommandParams>;
