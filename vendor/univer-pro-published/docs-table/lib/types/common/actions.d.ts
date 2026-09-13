import type { IDocumentData } from '@univerjs/core';
import type { IDocsTableMetadataResource } from './type';
export declare enum DocsTableInsertPosition {
    Above = "above",
    Below = "below",
    Left = "left",
    Right = "right"
}
export declare const DocsTableRowInsertPosition: {
    readonly Above: DocsTableInsertPosition.Above;
    readonly Below: DocsTableInsertPosition.Below;
};
export declare const DocsTableColumnInsertPosition: {
    readonly Left: DocsTableInsertPosition.Left;
    readonly Right: DocsTableInsertPosition.Right;
};
export type DocsTableRowInsertPosition = typeof DocsTableRowInsertPosition[keyof typeof DocsTableRowInsertPosition];
export type DocsTableColumnInsertPosition = typeof DocsTableColumnInsertPosition[keyof typeof DocsTableColumnInsertPosition];
export interface IDocsTableActionCursor {
    row: number;
    column: number;
}
export interface IDocsTableActionBuildResult {
    nextDocumentData: IDocumentData;
    nextMetadata?: IDocsTableMetadataResource;
    cursor: IDocsTableActionCursor;
    deleteTable?: boolean;
}
export interface IInsertRowsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    row: number;
    count: number;
    position: DocsTableRowInsertPosition;
}
export interface IInsertColumnsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    column: number;
    count: number;
    insertedColumnWidth?: number;
    position: DocsTableColumnInsertPosition;
    preserveTotalWidth?: boolean;
}
export interface IDeleteRowsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    startRow: number;
    endRow: number;
}
export interface IDeleteColumnsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    startColumn: number;
    endColumn: number;
}
export interface IDeleteTableActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
}
export interface IMoveRowsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    fromRow: number;
    toRow: number;
    count?: number;
    position: DocsTableRowInsertPosition;
}
export interface IMoveColumnsActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    fromColumn: number;
    toColumn: number;
    count?: number;
    position: DocsTableColumnInsertPosition;
}
export declare function buildInsertRowsActions(params: IInsertRowsActionParams): IDocsTableActionBuildResult;
export declare function buildInsertColumnsActions(params: IInsertColumnsActionParams): IDocsTableActionBuildResult;
export declare function buildDeleteRowsActions(params: IDeleteRowsActionParams): IDocsTableActionBuildResult;
export declare function buildDeleteColumnsActions(params: IDeleteColumnsActionParams): IDocsTableActionBuildResult;
export declare function buildDeleteTableActions(params: IDeleteTableActionParams): IDocsTableActionBuildResult;
export declare function buildMoveRowsActions(params: IMoveRowsActionParams): IDocsTableActionBuildResult;
export declare function buildMoveColumnsActions(params: IMoveColumnsActionParams): IDocsTableActionBuildResult;
