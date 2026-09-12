import type { IOperation } from '@univerjs/core';
export interface IActivateBaseTableOperationParams {
    unitId?: string;
    tableId: string;
}
export declare const ActivateBaseTableOperation: IOperation<IActivateBaseTableOperationParams>;
