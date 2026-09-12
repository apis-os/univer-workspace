import type { IOperation } from '@univerjs/core';
export interface IReparentBoardElementsOperationParams {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
    parentId?: string;
    laneId?: string;
}
export declare const ReparentBoardElementsOperation: IOperation<IReparentBoardElementsOperationParams>;
