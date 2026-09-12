import type { IOperation } from '@univerjs/core';
import type { IBoardSwimlaneData } from '../../board.type';
export interface IBeginBoardSwimlaneOperationParams {
    unitId: string;
    subUnitId: string;
    orientation?: IBoardSwimlaneData['orientation'];
}
export declare const BeginBoardSwimlaneOperation: IOperation<IBeginBoardSwimlaneOperationParams>;
