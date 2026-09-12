import type { IOperation } from '@univerjs/core';
import type { IBoardPageElement } from '../../board.type';
export interface IAddBoardElementOperationParams {
    unitId: string;
    subUnitId: string;
    element: IBoardPageElement;
    insertIndex?: number;
    fitContainerId?: string;
}
export declare const AddBoardElementOperation: IOperation<IAddBoardElementOperationParams>;
