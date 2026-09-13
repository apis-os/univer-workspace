import type { IOperation } from '@univerjs/core';
export interface IBeginBoardContainerOperationParams {
    unitId: string;
    subUnitId: string;
    width?: number;
    height?: number;
}
export declare const BeginBoardContainerOperation: IOperation<IBeginBoardContainerOperationParams>;
