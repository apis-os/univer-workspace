import type { IOperation } from '@univerjs/core';
export interface IReorderBoardObjectListElementOperationParams {
    unitId: string;
    subUnitId: string;
    sourceElementId: string;
    targetElementId: string;
}
export declare const ReorderBoardObjectListElementOperation: IOperation<IReorderBoardObjectListElementOperationParams>;
