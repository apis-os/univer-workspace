import type { IDocumentData } from '@univerjs/core';
import type { ICustomColumnGroup } from './column-types';
export interface IDocsColumnOffsetRange {
    column: number;
    columnId: string;
    /** Inclusive offset of `COLUMN_START`. */
    startOffset: number;
    /** Inclusive offset of the matching `COLUMN_END`. */
    endOffset: number;
}
export interface IDocsColumnGroupOffsetRange {
    columnGroupId: string;
    /** Inclusive offset of `COLUMN_GROUP_START`. */
    startOffset: number;
    /** Exclusive offset immediately after `COLUMN_GROUP_END`. */
    endOffset: number;
    columns: IDocsColumnOffsetRange[];
    source: ICustomColumnGroup;
}
export declare function getColumnGroupRangeById(documentData: IDocumentData, columnGroupId: string): IDocsColumnGroupOffsetRange | null;
export declare function getColumnRange(group: IDocsColumnGroupOffsetRange, column: number): IDocsColumnOffsetRange;
