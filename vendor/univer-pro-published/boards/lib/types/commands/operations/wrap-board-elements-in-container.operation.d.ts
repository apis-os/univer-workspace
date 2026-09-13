import type { IOperation } from '@univerjs/core';
export interface IWrapBoardElementsInContainerOperationParams {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
    containerId?: string;
    title?: string;
}
export declare const WrapBoardElementsInContainerOperation: IOperation<IWrapBoardElementsInContainerOperationParams>;
