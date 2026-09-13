import type { IOperation } from '@univerjs/core';
export interface IBeginBoardPenOperationParams {
    unitId: string;
    subUnitId: string;
    tool?: 'pen' | 'brush' | string;
}
export declare const BeginBoardPenOperation: IOperation<IBeginBoardPenOperationParams>;
