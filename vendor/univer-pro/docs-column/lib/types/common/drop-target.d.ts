import type { IDocumentData } from '@univerjs/core';
import type { IDocsColumnGroupOffsetRange } from './column-range';
export declare function isOffsetInsideColumnContent(group: IDocsColumnGroupOffsetRange, offset: number): boolean;
export declare function isColumnStructuralOffset(documentData: IDocumentData, offset: number): boolean;
export interface IDocsColumnMoveRange {
    startOffset: number;
    endOffset: number;
}
export declare function canMoveRangeToColumnContent(documentData: IDocumentData, sourceRange: IDocsColumnMoveRange, targetOffset: number): boolean;
