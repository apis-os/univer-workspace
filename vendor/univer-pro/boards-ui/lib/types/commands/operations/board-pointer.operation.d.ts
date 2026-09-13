import type { IOperation } from '@univerjs/core';
import type { IBoardViewportPoint } from '../../utils/board-viewport.util';
export interface ISetBoardPointerOperationParams {
    unitId: string;
    subUnitId: string;
    pointer: IBoardViewportPoint | null;
}
export declare const SetBoardPointerOperation: IOperation<ISetBoardPointerOperationParams>;
