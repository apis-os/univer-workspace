import type { IDocumentData } from '@univerjs/core';
import type { IDocsTableMetadataResource } from './type';
export declare enum DocsTableSortDirection {
    Asc = "asc",
    Desc = "desc"
}
export interface ISortTableActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    column: number;
    direction: DocsTableSortDirection;
}
export interface ISortTableActionResult {
    nextDocumentData: IDocumentData;
}
export interface IDocsTableSortPlan {
    sortStartRow: number;
    sortedRowIndexes: number[];
}
export declare function buildSortTableActions(params: ISortTableActionParams): ISortTableActionResult;
export declare function buildTableSortPlan(params: ISortTableActionParams): IDocsTableSortPlan;
