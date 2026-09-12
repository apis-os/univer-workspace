import type { IOperation } from '@univerjs/core';
export interface ISetBaseScrollOperationParams {
    viewId: string;
    x?: number;
    y?: number;
}
export declare const SetBaseScrollOperation: IOperation<ISetBaseScrollOperationParams>;
