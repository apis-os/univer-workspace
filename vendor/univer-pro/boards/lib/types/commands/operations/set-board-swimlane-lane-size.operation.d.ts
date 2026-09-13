import type { IOperation } from '@univerjs/core';
export interface ISetBoardSwimlaneLaneSizeOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    laneId: string;
    size: number;
}
export declare const SetBoardSwimlaneLaneSizeOperation: IOperation<ISetBoardSwimlaneLaneSizeOperationParams>;
