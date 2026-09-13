import type { BaseSelection, IOperation } from '@univerjs/core';
export interface ISetBaseSelectionOperationParams {
    selection: BaseSelection | null;
}
export declare const SetBaseSelectionOperation: IOperation<ISetBaseSelectionOperationParams>;
