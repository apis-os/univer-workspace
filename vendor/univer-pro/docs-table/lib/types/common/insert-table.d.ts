import type { IDocumentData, ITableCellMargin, JSONXActions } from '@univerjs/core';
import type { IDocsTableColumnTypeConfig, IDocsTableMetadataResource } from './type';
export declare enum DocsTableInsertTablePosition {
    Selection = "selection",
    DocumentEnd = "documentEnd",
    Offset = "offset"
}
export declare class InvalidInsertTableRangeError extends Error {
    constructor();
}
export interface IDocsTableInsertOptions {
    /**
     * Custom table id for the inserted table. When omitted by command/facade callers,
     * a random id is generated before the table is inserted.
     */
    tableId?: string;
    /**
     * Requested insertion position. When `offset` is provided it takes priority.
     * Otherwise `DocumentEnd` appends before the trailing section break, while
     * `Offset` and `Selection` are resolved from the current cursor by the command.
     */
    position?: DocsTableInsertTablePosition;
    /**
     * Character offset in the document body data stream where the table should be inserted.
     * The value is clamped to the current data stream bounds and is honored whenever
     * it is provided.
     */
    offset?: number;
    /**
     * Header/footer segment id where the table should be inserted. Defaults to the
     * main document body when omitted.
     */
    segmentId?: string;
    /**
     * Total table width. Also acts as the fallback source for column widths
     * by distributing `width / columnCount` when `columnWidths` is not provided.
     */
    width?: number;
    /**
     * Per-column widths for the created table. Missing entries fall back to
     * `width / columnCount`, or `100` when `width` is not provided.
     */
    columnWidths?: number[];
    /**
     * Per-row heights for the created table. Missing entries fall back to `30`
     * and rows use the `AT_LEAST` height rule.
     */
    rowHeights?: number[];
    /**
     * Default margin inherited by cells that do not define their own margin override.
     */
    cellMargin?: ITableCellMargin;
    /**
     * Whether the first row is a title row. A title row spans the first cell across
     * all columns and stores the flag in docs table metadata.
     */
    titleRow?: boolean;
    /**
     * Number of leading rows to mark as repeating header rows. The count is also
     * stored in docs table metadata for layout and sorting helpers.
     */
    headerRowCount?: number;
    /**
     * Plain text cell values to insert. The matrix determines row/column count
     * unless explicit action `rows` or `columns` are provided; missing cells are filled with empty strings.
     */
    values?: string[][];
    /**
     * Per-column metadata describing logical column types such as text, number,
     * date, checkbox, or dropdown.
     */
    columnTypes?: Record<number, IDocsTableColumnTypeConfig>;
}
export interface IDocsTableInsertActionParams extends IDocsTableInsertOptions {
    documentData: IDocumentData;
    metadata?: IDocsTableMetadataResource;
    rows?: number;
    columns?: number;
    tableId: string;
}
export interface IDocsTableInsertActionResult {
    nextDocumentData: IDocumentData;
    nextMetadata: IDocsTableMetadataResource;
    tableId: string;
}
export interface IDocsTableInsertMutationActionResult {
    actions: JSONXActions;
    cursorOffset: number;
    nextMetadata: IDocsTableMetadataResource;
    tableId: string;
}
export declare function buildInsertTableActions(params: IDocsTableInsertActionParams): IDocsTableInsertActionResult;
export declare function buildInsertTableMutationActionsDirect(params: IDocsTableInsertActionParams, bodyPath?: string[]): IDocsTableInsertMutationActionResult;
