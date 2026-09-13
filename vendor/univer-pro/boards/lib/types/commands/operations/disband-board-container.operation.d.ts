import type { IOperation } from '@univerjs/core';
export interface IDisbandBoardContainerOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
}
export declare const DisbandBoardContainerOperation: IOperation<IDisbandBoardContainerOperationParams>;
