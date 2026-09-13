import type { IOperation } from '@univerjs/core';
export interface IBeginBoardExportOperationParams {
    unitId: string;
    subUnitId: string;
    targetType?: 'image' | 'pdf' | string;
}
export declare const BeginBoardExportOperation: IOperation<IBeginBoardExportOperationParams>;
