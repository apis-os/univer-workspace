import type { IOperation } from '@univerjs/core';
export interface ISlidePlaceholderActionOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    iconKey: string;
}
export declare const SlidePlaceholderActionOperation: IOperation<ISlidePlaceholderActionOperationParams>;
