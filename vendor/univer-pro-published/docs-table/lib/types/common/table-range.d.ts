import type { IDocumentData, ITable } from '@univerjs/core';
export interface IDocsTableCellOffsetRange {
    row: number;
    column: number;
    /** Inclusive offset of `TABLE_CELL_START`. */
    startOffset: number;
    /** Inclusive offset of the matching `TABLE_CELL_END`. */
    endOffset: number;
}
export interface IDocsTableRowOffsetRange {
    row: number;
    /** Inclusive offset of `TABLE_ROW_START`. */
    startOffset: number;
    /** Inclusive offset of the matching `TABLE_ROW_END`. */
    endOffset: number;
    cells: IDocsTableCellOffsetRange[];
}
export interface IDocsTableColumnOffsetRange {
    column: number;
    startOffset: number;
    endOffset: number;
    cells: IDocsTableCellOffsetRange[];
}
export interface IDocsTableOffsetRange {
    tableId: string;
    /** Inclusive offset of `TABLE_START`. */
    startOffset: number;
    /** Exclusive offset immediately after `TABLE_END`. */
    endOffset: number;
    rowCount: number;
    columnCount: number;
    tableSource: ITable;
    rows: IDocsTableRowOffsetRange[];
}
export declare function getTableRangeById(documentData: IDocumentData, tableId: string): IDocsTableOffsetRange | null;
export declare function getRowRange(table: IDocsTableOffsetRange, row: number): IDocsTableRowOffsetRange;
export declare function getColumnRange(table: IDocsTableOffsetRange, column: number): IDocsTableColumnOffsetRange;
