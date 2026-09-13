import type { IDocumentData, ITable, JSONXActions } from '@univerjs/core';
import type { IDocsTableCellRange } from './type';
export interface IDocsTableMergeActionParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
}
export interface IDocsTableMergeActionResult {
    nextDocumentData: IDocumentData;
    range: IDocsTableCellRange;
}
export interface IDocsTableMergeMutationActionResult {
    actions: JSONXActions | null;
    range: IDocsTableCellRange;
}
export declare function canMergeCells(documentData: IDocumentData, tableId: string, range: IDocsTableCellRange): boolean;
export declare function canUnmergeCells(documentData: IDocumentData, tableId: string, range: IDocsTableCellRange): boolean;
export declare function buildMergeCellsActions(params: IDocsTableMergeActionParams): IDocsTableMergeActionResult;
export declare function buildMergeCellsMutationActions(params: IDocsTableMergeActionParams): IDocsTableMergeMutationActionResult | null;
export declare function buildUnmergeCellsActions(params: IDocsTableMergeActionParams): IDocsTableMergeActionResult;
export declare function buildUnmergeCellsMutationActions(params: IDocsTableMergeActionParams): IDocsTableMergeMutationActionResult | null;
export declare function findMergeRange(table: ITable, row: number, column: number): IDocsTableCellRange | null;
export declare function expandRangeByMergedCells(table: ITable, range: IDocsTableCellRange): IDocsTableCellRange;
export declare function updateMergedCellsForInsertRows(table: ITable, insertIndex: number, count: number, ranges?: IDocsTableCellRange[]): void;
export declare function updateMergedCellsForInsertColumns(table: ITable, insertIndex: number, count: number, ranges?: IDocsTableCellRange[]): void;
export declare function updateMergedCellsForDeleteRows(table: ITable, startRow: number, endRow: number, ranges?: IDocsTableCellRange[]): void;
export declare function updateMergedCellsForDeleteColumns(table: ITable, startColumn: number, endColumn: number, ranges?: IDocsTableCellRange[]): void;
export declare function collectMergedCellRanges(table: ITable): IDocsTableCellRange[];
