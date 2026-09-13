import type { IOperation } from '@univerjs/core';
export interface IBeginBoardTranslateOperationParams {
    unitId: string;
    subUnitId: string;
    targetLanguage?: string;
}
export declare const BeginBoardTranslateOperation: IOperation<IBeginBoardTranslateOperationParams>;
