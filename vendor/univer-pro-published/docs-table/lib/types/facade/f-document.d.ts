import type { IDocsTableInsertOptions } from '@univerjs-pro/docs-table';
import type { IDocsTableFindQuery } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentTable } from './f-document-table';
export interface IFDocumentTableMixin {
    /**
     * Returns all enhanced docs tables in this document body or header/footer body by the segment id.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentTable[]} An array of FDocumentTable instances, or an empty array if the document contains no tables.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const tables = fDocument.getTables();
     * console.log(tables);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerTables = fDocument.getTables(headerSegmentId);
     * console.log(headerTables);
     * ```
     */
    getTables(segmentId?: string): FDocumentTable[];
    /**
     * Returns a table by table id in this document body or header/footer body by the segment id.
     * @param {string} tableId The table id stored in the document snapshot.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentTable | null} The FDocumentTable instance, or `null` if no table with the given id exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument.getTable('table-1');
     * console.log(table);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerTable = fDocument.getTable('table-1', headerSegmentId);
     * console.log(headerTable);
     * ```
     */
    getTable(tableId: string, segmentId?: string): FDocumentTable | null;
    /**
     * Returns a table by its order in this document body or header/footer body by the segment id.
     * @param {number} index The zero-based table index.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentTable | null} The FDocumentTable instance, or `null` if the index is out of bounds.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const firstTable = fDocument.getTableAt(0);
     * console.log(firstTable);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const firstFooterTable = fDocument.getTableAt(0, footerSegmentId);
     * console.log(firstFooterTable);
     * ```
     */
    getTableAt(index: number, segmentId?: string): FDocumentTable | null;
    /**
     * Returns the table currently selected by the docs table selection service.
     * @returns {FDocumentTable | null} The FDocumentTable instance, or `null` if there is no current table selection.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const selectedTable = fDocument.getTableAtSelection();
     * console.log(selectedTable);
     * console.log(selectedTable?.getSegmentId());
     * ```
     */
    getTableAtSelection(): FDocumentTable | null;
    /**
     * Finds the first table whose data stream contains the given text in this document body or header/footer body by the segment id.
     * @param {string} text Text to search inside table cells.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentTable | null} The first FDocumentTable instance matching the query, or `null` if no matches are found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument.findTableByText('Revenue');
     * console.log(table);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerTable = fDocument.findTableByText('Revenue', headerSegmentId);
     * console.log(headerTable);
     * ```
     */
    findTableByText(text: string, segmentId?: string): FDocumentTable | null;
    /**
     * Finds tables by text, id, header text, or title text in this document body or header/footer body by the segment id.
     * @param {string | IDocsTableFindQuery} query A plain text query or a structured table query.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentTable[]} An array of FDocumentTable instances matching the query, or an empty array if no matches are found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const tablesWithText = fDocument.findTables('Revenue');
     * console.log(tablesWithText);
     *
     * const tablesWithId = fDocument.findTables({ tableId: 'table-1' });
     * console.log(tablesWithId);
     *
     * const tablesWithHeader = fDocument.findTables({ headerText: 'Q1' });
     * console.log(tablesWithHeader);
     *
     * const tablesWithTitle = fDocument.findTables({ titleText: 'Sales Data' });
     * console.log(tablesWithTitle);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerTablesWithText = fDocument.findTables('Revenue', footerSegmentId);
     * console.log(footerTablesWithText);
     * ```
     */
    findTables(query: string | IDocsTableFindQuery, segmentId?: string): FDocumentTable[];
    /**
     * Inserts an empty table at the current document selection or at the position provided in options.
     * @param {number} rows The row count.
     * @param {number} columns The column count.
     * @param {IDocsTableInsertOptions} [options] Optional table id, position, metadata, and layout options.
     * @returns {FDocumentTable | null} The inserted FDocumentTable instance, or `null` if the insert table failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Insert a 3x4 table at the default position (document end)
     * const table = fDocument.insertTable(3, 4);
     *
     * // Insert a 3x4 table at the current selection
     * const table2 = fDocument.insertTable(3, 4, {
     *   position: univerAPI.Enum.DocsTableInsertTablePosition.Selection,
     * });
     *
     * // Insert a 3x4 table with cell values at a specific offset
     * const table3 = fDocument.insertTable(3, 4, {
     *   position: univerAPI.Enum.DocsTableInsertTablePosition.Offset,
     *   offset: 1000,
     *   values: [
     *     ['A1', 'B1', 'C1', 'D1'],
     *     ['A2', 'B2', 'C2', 'D2'],
     *     ['A3', 'B3', 'C3', 'D3'],
     *   ],
     * });
     *
     * // Insert a 2x2 table into the page header
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerTable = fDocument.insertTable(2, 2, {
     *   segmentId: headerSegmentId,
     * });
     * ```
     */
    insertTable(rows: number, columns: number, options?: IDocsTableInsertOptions): FDocumentTable | null;
    /**
     * Inserts a table and fills it with plain text cell data.
     * @param {string[][]} data Two-dimensional cell text data.
     * @param {IDocsTableInsertOptions} [options] Optional table id, position, metadata, and layout options.
     * @returns {FDocumentTable | null} The inserted FDocumentTable instance, or `null` if the insert table failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Insert a table with 2 rows and 3 columns, and fill it with data
     * const table = fDocument.insertTableFromData([
     *   ['Name', 'Status', 'Version'],
     *   ['Facade', 'Ready', '0.26.0'],
     * ], {
     *   headerRowCount: 1,
     * });
     *
     * // Insert a table with data into the page footer
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerTable = fDocument.insertTableFromData([
     *   ['Reviewed by', 'Date'],
     *   ['Docs Team', '2026-07-03'],
     * ], {
     *   segmentId: footerSegmentId,
     * });
     * ```
     */
    insertTableFromData(data: string[][], options?: IDocsTableInsertOptions): FDocumentTable | null;
}
export declare class FDocumentTableMixin extends FDocument implements IFDocumentTableMixin {
    getTables(segmentId?: string): FDocumentTable[];
    getTable(tableId: string, segmentId?: string): FDocumentTable | null;
    getTableAt(index: number, segmentId?: string): FDocumentTable | null;
    getTableAtSelection(): FDocumentTable | null;
    findTableByText(text: string, segmentId?: string): FDocumentTable | null;
    findTables(query: string | IDocsTableFindQuery, segmentId?: string): FDocumentTable[];
    insertTable(rows: number, columns: number, options?: IDocsTableInsertOptions): FDocumentTable | null;
    insertTableFromData(data: string[][], options?: IDocsTableInsertOptions): FDocumentTable | null;
    private _getTables;
    private _getTableDocumentData;
    private _createFDocumentTable;
    private _tableContainsText;
    private _rowContainsText;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentTableMixin {
    }
}
