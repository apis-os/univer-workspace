import type { IOperation } from '@univerjs/core';
export interface IRemoveBoardElementOperationParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
}
export declare const RemoveBoardElementOperation: IOperation<IRemoveBoardElementOperationParams>;
