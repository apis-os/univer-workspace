import type { IDocumentData } from '@univerjs/core';
import type { IDocsTableMetadataResource } from './type';
export interface IDocsTableLayoutActionResult {
    nextDocumentData: IDocumentData;
    nextMetadata?: IDocsTableMetadataResource;
}
export interface IInsertTitleRowActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
}
export interface ISetHeaderRowCountActionParams {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    tableId: string;
    headerRowCount: number;
}
export interface IDistributeRowsActionParams {
    documentData: IDocumentData;
    tableId: string;
    startRow: number;
    endRow: number;
}
export interface IDistributeColumnsActionParams {
    documentData: IDocumentData;
    tableId: string;
    startColumn: number;
    endColumn: number;
}
export interface IResizeRowActionParams {
    documentData: IDocumentData;
    tableId: string;
    row: number;
    height: number;
}
export interface IResizeColumnActionParams {
    documentData: IDocumentData;
    tableId: string;
    column: number;
    width: number;
}
export interface IMoveTableActionParams {
    /**
     * Document snapshot that contains the table to move.
     */
    documentData: IDocumentData;
    /**
     * Id of the table to move.
     */
    tableId: string;
    /**
     * Horizontal offset delta applied to the table's floating position.
     * Used only when `targetOffset` is not provided.
     */
    deltaX?: number;
    /**
     * Vertical offset delta applied to the table's floating position.
     * Used only when `targetOffset` is not provided.
     */
    deltaY?: number;
    /**
     * Target character offset in the document body data stream. When provided,
     * the table block is moved in the document flow and its floating offsets are reset.
     */
    targetOffset?: number;
}
export declare function buildInsertTitleRowActions(params: IInsertTitleRowActionParams): IDocsTableLayoutActionResult;
export declare function buildSetHeaderRowCountActions(params: ISetHeaderRowCountActionParams): IDocsTableLayoutActionResult;
export declare function buildDistributeRowsActions(params: IDistributeRowsActionParams): IDocsTableLayoutActionResult;
export declare function buildDistributeColumnsActions(params: IDistributeColumnsActionParams): IDocsTableLayoutActionResult;
export declare function buildResizeRowActions(params: IResizeRowActionParams): IDocsTableLayoutActionResult;
export declare function buildResizeColumnActions(params: IResizeColumnActionParams): IDocsTableLayoutActionResult;
export declare function buildMoveTableActions(params: IMoveTableActionParams): IDocsTableLayoutActionResult;
export declare function getPinnedHeaderRowCount(metadata: IDocsTableMetadataResource | undefined, tableId: string): number;
