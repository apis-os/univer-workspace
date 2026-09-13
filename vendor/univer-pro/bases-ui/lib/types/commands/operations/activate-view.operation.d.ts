import type { IOperation } from '@univerjs/core';
export interface IActivateBaseViewOperationParams {
    tableId?: string;
    unitId?: string;
    viewId: string;
}
export declare const ActivateBaseViewOperation: IOperation<IActivateBaseViewOperationParams>;
