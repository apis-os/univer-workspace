import type { IOperation } from '@univerjs/core';
export interface ISetBoardContainerAutoResizeOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    autoResize: boolean;
}
export declare const SetBoardContainerAutoResizeOperation: IOperation<ISetBoardContainerAutoResizeOperationParams>;
