import type { IDocumentData } from '@univerjs/core';
export interface IDocsColumnMoveRange {
    startOffset: number;
    endOffset: number;
}
export interface IDocsColumnNormalizeEmptyColumnsOptions {
    documentData: IDocumentData;
    movedRange: IDocsColumnMoveRange;
}
export interface IDocsColumnNormalizeEmptyColumnsResult {
    nextDocumentData: IDocumentData;
    movedRange: IDocsColumnMoveRange;
    changed: boolean;
}
export declare function normalizeEmptyColumnsAfterMove(options: IDocsColumnNormalizeEmptyColumnsOptions): IDocsColumnNormalizeEmptyColumnsResult;
