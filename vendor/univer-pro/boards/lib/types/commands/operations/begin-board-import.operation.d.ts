import type { IOperation } from '@univerjs/core';
export interface IBeginBoardImportOperationParams {
    unitId: string;
    subUnitId: string;
    sourceType?: string;
}
export declare const BeginBoardImportOperation: IOperation<IBeginBoardImportOperationParams>;
