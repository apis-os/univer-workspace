import type { DocumentDataModel, ICommandService, IDocumentData, ITableRow, JSONXActions } from '@univerjs/core';
import type { IRectRangeWithStyle } from '@univerjs/engine-render';
import type { DocsTableColumnInsertPosition, DocsTableRowInsertPosition } from '../common/actions';
import type { DocsTableSortDirection } from '../common/sort';
import type { IDocsTableCellRange, IDocsTableMetadataResource } from '../common/type';
import { TableRowHeightRule } from '@univerjs/core';
export interface IDocsTableMutationSelection extends IDocsTableCellRange {
    tableId: string;
    segmentId?: string;
}
export declare function getTableCommandSegmentId(params?: {
    segmentId?: string;
} | null | void, selection?: {
    segmentId?: string;
} | null | void): string;
export declare function getTableCommandRange(params?: Partial<IDocsTableCellRange> | null | void, selection?: Partial<IDocsTableCellRange> | null | void): IDocsTableCellRange | null;
export declare function getTableActionDocumentData(doc: DocumentDataModel, segmentId?: string): IDocumentData | null;
export declare function buildMoveFloatingTableActions(previousDocumentData: IDocumentData, nextDocumentData: IDocumentData, tableId: string): JSONXActions | null;
export declare function buildResizeTableColumnActions(previousDocumentData: IDocumentData, nextDocumentData: IDocumentData, tableId: string, column: number): JSONXActions | null;
export declare function buildResizeTableColumnActionsFromWidth(documentData: IDocumentData, tableId: string, column: number, width: number): JSONXActions | null;
export declare function buildResizeTableRowActions(previousDocumentData: IDocumentData, nextDocumentData: IDocumentData, tableId: string, row: number): JSONXActions | null;
export declare function buildMoveFloatingTableMutationActions(documentData: IDocumentData, tableId: string, deltaX: number, deltaY: number): JSONXActions | null;
export declare function buildMoveTableToOffsetMutationActions(documentData: IDocumentData, tableId: string, requestedTargetOffset: number, bodyPath?: string[]): JSONXActions | null;
export declare function buildResizeTableRowActionsFromHeight(documentData: IDocumentData, tableId: string, row: number, height: number, hRule?: TableRowHeightRule): JSONXActions | null;
export declare function buildDistributeTableRowsMutationActions(documentData: IDocumentData, tableId: string, startRow: number, endRow: number): JSONXActions | null;
export declare function buildDistributeTableColumnsMutationActions(documentData: IDocumentData, tableId: string, startColumn: number, endColumn: number): JSONXActions | null;
export declare function buildSetTableHeaderRowCountMutationActions(documentData: IDocumentData, tableId: string, requestedHeaderRowCount: number): {
    actions: JSONXActions | null;
    headerRowCount: number;
} | null;
export interface IDocsTableRowsMutationActionResult {
    actions: JSONXActions | null;
    cursorRow: number;
    deleteTable?: boolean;
}
export interface IDocsTableColumnsMutationActionResult {
    actions: JSONXActions | null;
    cursorColumn: number;
    deleteTable?: boolean;
}
export declare function buildInsertTableColumnsMutationActions(documentData: IDocumentData, tableId: string, column: number, count: number, position: DocsTableColumnInsertPosition, options?: {
    bodyPath?: string[];
    insertedColumnWidth?: number;
    preserveTotalWidth?: boolean;
}): IDocsTableColumnsMutationActionResult | null;
export declare function buildDeleteTableColumnsMutationActions(documentData: IDocumentData, tableId: string, startColumn: number, endColumn: number, bodyPath?: string[]): IDocsTableColumnsMutationActionResult | null;
export declare function buildMoveTableRowsMutationActions(documentData: IDocumentData, tableId: string, fromRow: number, toRow: number, count: number, position: DocsTableRowInsertPosition, bodyPath?: string[]): IDocsTableRowsMutationActionResult | null;
export declare function buildMoveTableColumnsMutationActions(documentData: IDocumentData, tableId: string, fromColumn: number, toColumn: number, count: number, position: DocsTableColumnInsertPosition, bodyPath?: string[]): IDocsTableColumnsMutationActionResult | null;
export declare function buildSortTableMutationActions(documentData: IDocumentData, metadata: IDocsTableMetadataResource | undefined, tableId: string, column: number, direction: DocsTableSortDirection, bodyPath?: string[]): JSONXActions | null;
export declare function buildInsertTableRowsMutationActions(documentData: IDocumentData, tableId: string, row: number, count: number, position: DocsTableRowInsertPosition, bodyPath?: string[], configureInsertedRow?: (row: ITableRow, index: number) => void): IDocsTableRowsMutationActionResult | null;
export declare function buildInsertTableTitleRowMutationActions(documentData: IDocumentData, tableId: string, bodyPath?: string[]): IDocsTableRowsMutationActionResult | null;
export declare function buildDeleteTableRowsMutationActions(documentData: IDocumentData, tableId: string, startRow: number, endRow: number, bodyPath?: string[]): IDocsTableRowsMutationActionResult | null;
export declare function buildDeleteTableMutationActions(documentData: IDocumentData, tableId: string, bodyPath: string[]): IDocsTableRowsMutationActionResult | null;
export declare function executeRichTextTableActions(commandService: ICommandService, unitId: string, documentData: IDocumentData, actions: JSONXActions | null, selection?: IDocsTableMutationSelection, cursorOffset?: number, trigger?: string, historyAction?: string): boolean;
export declare function getTableActionBodyPath(documentData: IDocumentData, segmentId?: string): string[];
export declare function buildTableRectMutationRanges(documentData: IDocumentData, selection: IDocsTableMutationSelection): IRectRangeWithStyle[];
