import type { DocsTableColumnInsertPosition, DocsTableRowInsertPosition, DocsTableSortDirection, IDocsTableCellRange, IDocsTableColumnTypeConfig, IDocsTableMetadata, IDocsTableOffsetRange } from '@univerjs-pro/docs-table';
import type { ITable, ITableCellMargin, ITableRowSize, Nullable } from '@univerjs/core';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsTableBorderOptions, IDocsTableCellContentRange, IDocsTableDescription, IDocsTableInfo, IDocsTableStyle } from './types';
import { DocsTableSelectionKind } from '@univerjs-pro/docs-table';
import { ICommandService, Injector, TableRowHeightRule } from '@univerjs/core';
import { FDocumentTableCell } from './f-document-table-cell';
/**
 * Facade object for a single enhanced docs table.
 *
 * All mutating methods execute synchronously through the Univer command service and return
 * `true` when the underlying document mutation succeeds.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const table = fDocument?.findTableByText('Status');
 * console.log(table?.describe());
 *
 * table?.setCellText(1, 1, 'Done');
 * table?.setTableBorder({ color: '#3367D6', width: 1 });
 * ```
 */
export declare class FDocumentTable {
    private readonly _document;
    private readonly _tableId;
    private readonly _segmentId;
    private readonly _commandService;
    private readonly _injector;
    private readonly _unitId;
    constructor(_document: FDocument, _tableId: string, _segmentId: string, _commandService: ICommandService, _injector: Injector);
    /**
     * Returns the table id.
     * @returns {string} The table id stored in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getId()); // e.g. 'table-12345'
     * ```
     */
    getId(): string;
    /**
     * Get the segment id of this table.
     * The main body tables have an empty string segment id.
     * The header and footer tables have a non-empty string segment id.
     * @returns {string} The segment id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getSegmentId());
     * ```
     */
    getSegmentId(): string;
    /**
     * Returns compact table metadata for agents.
     * @returns {IDocsTableInfo} The id, row count, column count, metadata, and raw table source.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getInfo());
     * ```
     */
    getInfo(): IDocsTableInfo;
    /**
     * Returns a human-readable table summary with sample rows.
     * @returns {IDocsTableDescription} A compact description suitable for agents or logs.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.describe());
     * ```
     */
    describe(): IDocsTableDescription;
    /**
     * Gets the number of rows in the table.
     * @returns {number} The row count, or `0` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getRowCount());
     * ```
     */
    getRowCount(): number;
    /**
     * Gets the number of columns in the table.
     * @returns {number} The column count, or `0` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getColumnCount());
     * ```
     */
    getColumnCount(): number;
    /**
     * Gets a FDocumentTableCell instance for the specified cell coordinates.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {FDocumentTableCell | null} The FDocumentTableCell instance, or `null` if the cell does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table?.getCell(0, 0);
     * console.log(cell?.getText()); // e.g. 'Status'
     * ```
     */
    getCell(row: number, column: number): FDocumentTableCell | null;
    /**
     * Gets the plain text content of a cell.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {string} The cell text, or an empty string if the cell does not exist or has no text.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cellText = table?.getCellText(0, 0);
     * console.log(cellText); // e.g. 'Status'
     * ```
     */
    getCellText(row: number, column: number): string;
    /**
     * Returns the effective margin used to lay out a cell.
     * The cell override takes precedence over the table default and the built-in fallback.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {ITableCellMargin | null} The effective margin, or `null` if the cell does not exist.
     */
    getCellMargin(row: number, column: number): ITableCellMargin | null;
    /**
     * Returns a cell's explicit margin override.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {ITableCellMargin | null} The explicit override, or `null` if the cell inherits its margin.
     */
    getCellMarginOverride(row: number, column: number): ITableCellMargin | null;
    /** Returns the effective table-level default cell margin. */
    getDefaultCellMargin(): ITableCellMargin;
    /** Returns the explicit table-level default cell margin, or `null` when the built-in fallback is used. */
    getDefaultCellMarginOverride(): ITableCellMargin | null;
    /**
     * Gets the table metadata stored in the document snapshot, including header row count, title row, and column type configs.
     * @returns {IDocsTableMetadata | undefined} The table metadata, or `undefined` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getMetadata());
     * ```
     */
    getMetadata(): IDocsTableMetadata | undefined;
    /**
     * Gets the raw table source from the document snapshot, including all table rows, cells, and columns.
     * @returns {ITable | undefined} The table source, or `undefined` if the table is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getSource());
     * ```
     */
    getSource(): ITable | undefined;
    /**
     * Gets the table range with offsets for all cells in the table.
     * @returns {IDocsTableOffsetRange | null} The table range with offsets, or `null` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getRange());
     * ```
     */
    getRange(): IDocsTableOffsetRange | null;
    /**
     * Gets the table cell range covering all cells in the table.
     * @returns {IDocsTableCellRange} The table cell range covering all cells in the table, or `null` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * console.log(table?.getTableRange());
     * ```
     */
    getTableRange(): IDocsTableCellRange;
    /**
     * Gets the table cell range for the specified cell coordinates.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {IDocsTableCellRange} The cell range, or `null` if the cell does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cellRange = table?.getCellRange(1, 1);
     * console.log(cellRange); // e.g. { startRow: 1, endRow: 1, startColumn: 1, endColumn: 1 }
     * ```
     */
    getCellRange(row: number, column: number): IDocsTableCellRange;
    /**
     * Returns the editable document range inside a table cell.
     * The range excludes the table cell tokens and the final section break, so block/list facades
     * can use it as their `startOffset`/`endOffset` target.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {IDocsTableCellContentRange | null} The cell content range, or `null` if the cell does not exist.
     * @example
     * ```
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const contentRange = table?.getCellContentRange(1, 1);
     * console.log(contentRange); // e.g. { startOffset: 123, endOffset: 130, segmentId: 'segment-1' }
     * ```
     */
    getCellContentRange(row: number, column: number): IDocsTableCellContentRange | null;
    /**
     * Returns the offset before the cell's final paragraph and section break.
     * Use this offset to insert an empty callout, quote, code block, or paragraph in the cell.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {number | null} The insertion offset, or `null` if the cell does not exist.
     * @example
     * ```
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const insertOffset = table?.getCellInsertOffset(1, 1);
     * console.log(insertOffset); // e.g. 129
     * ```
     */
    getCellInsertOffset(row: number, column: number): number | null;
    /**
     * Gets the cell range for the specified row index, covering all columns in the row.
     * @param {number} row The zero-based row index.
     * @returns {IDocsTableCellRange} The cell range for the specified row, or `null` if the row does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const rowRange = table?.getRowRange(1);
     * console.log(rowRange); // e.g. { startRow: 1, endRow: 1, startColumn: 0, endColumn: 4 }
     * ```
     */
    getRowRange(row: number): IDocsTableCellRange;
    /**
     * Gets the cell range for the specified row index and row count, covering all columns in the rows.
     * @param {number} startRow The zero-based starting row index.
     * @param {number} [count] The number of rows to include in the range.
     * @returns {IDocsTableCellRange} The cell range for the specified rows, or `null` if the starting row does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const rowsRange = table?.getRowsRange(1, 2);
     * console.log(rowsRange); // e.g. { startRow: 1, endRow: 2, startColumn: 0, endColumn: 4 }
     * ```
     */
    getRowsRange(startRow: number, count?: number): IDocsTableCellRange;
    /**
     * Gets the cell range for the specified column index, covering all rows in the column.
     * @param {number} column The zero-based column index.
     * @returns {IDocsTableCellRange} The cell range for the specified column, or `null` if the column does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const columnRange = table?.getColumnRange(1);
     * console.log(columnRange); // e.g. { startRow: 0, endRow: 4, startColumn: 1, endColumn: 1 }
     * ```
     */
    getColumnRange(column: number): IDocsTableCellRange;
    /**
     * Gets the cell range for the specified column index and column count, covering all rows in the columns.
     * @param {number} startColumn The zero-based starting column index.
     * @param {number} [count] The number of columns to include in the range.
     * @returns {IDocsTableCellRange} The cell range for the specified columns, or `null` if the starting column does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const columnsRange = table?.getColumnsRange(1, 2);
     * console.log(columnsRange); // e.g. { startRow: 0, endRow: 4, startColumn: 1, endColumn: 2 }
     * ```
     */
    getColumnsRange(startColumn: number, count?: number): IDocsTableCellRange;
    /**
     * Selects the entire table.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectTable();
     * ```
     */
    selectTable(): boolean;
    /**
     * Selects a single row in the table.
     * @param {number} row The zero-based row index to select.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectRow(1);
     * ```
     */
    selectRow(row: number): boolean;
    /**
     * Selects multiple rows in the table.
     * @param {number} startRow The zero-based starting row index to select.
     * @param {number} [count] The number of rows to select.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectRows(1, 2); // Selects rows 1 and 2
     * ```
     */
    selectRows(startRow: number, count?: number): boolean;
    /**
     * Selects a single column in the table.
     * @param {number} column The zero-based column index to select.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectColumn(1);
     * ```
     */
    selectColumn(column: number): boolean;
    /**
     * Selects multiple columns in the table.
     * @param {number} startColumn The zero-based starting column index to select.
     * @param {number} [count] The number of columns to select.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectColumns(1, 2); // Selects columns 1 and 2
     * ```
     */
    selectColumns(startColumn: number, count?: number): boolean;
    /**
     * Selects a single cell in the table.
     * @param {number} row The zero-based row index of the cell to select.
     * @param {number} column The zero-based column index of the cell to select.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.selectCell(1, 1); // Selects the cell at row 1, column 1
     * ```
     */
    selectCell(row: number, column: number): boolean;
    /**
     * Selects a range of cells in the table with the specified selection kind.
     * @param {IDocsTableCellRange} range The cell range to select.
     * @param {DocsTableSelectionKind} [kind] The selection kind, which determines the selection behavior and UI. Defaults to `Range`.
     * @returns {boolean} `true` if the selection was successfully set, or `false` if the table source is not found in the document snapshot.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Select a range of cells from row 1 to 2 and column 1 to 2 with the 'Range' selection kind
     * table.selectRange({
     *   startRow: 1,
     *   endRow: 2,
     *   startColumn: 1,
     *   endColumn: 2,
     * });
     * ```
     */
    selectRange(range: IDocsTableCellRange, kind?: Exclude<DocsTableSelectionKind, DocsTableSelectionKind.None | DocsTableSelectionKind.Text>): boolean;
    /**
     * Inserts a new row before the specified row index.
     * @param {number} row The zero-based row index to insert before.
     * @returns {boolean} `true` if the row was successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertRowBefore(1); // Inserts a new row before row 1
     * ```
     */
    insertRowBefore(row: number): boolean;
    /**
     * Inserts a new row after the specified row index.
     * @param {number} row The zero-based row index to insert after.
     * @returns {boolean} `true` if the row was successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertRowAfter(1); // Inserts a new row after row 1
     * ```
     */
    insertRowAfter(row: number): boolean;
    /**
     * Inserts multiple rows before the specified row index.
     * @param {number} row The zero-based row index to insert before.
     * @param {number} count The number of rows to insert.
     * @returns {boolean} `true` if the rows were successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertRowsBefore(1, 2); // Inserts 2 new rows before row 1
     * ```
     */
    insertRowsBefore(row: number, count: number): boolean;
    /**
     * Inserts multiple rows after the specified row index.
     * @param {number} row The zero-based row index to insert after.
     * @param {number} count The number of rows to insert.
     * @returns {boolean} `true` if the rows were successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertRowsAfter(1, 2); // Inserts 2 new rows after row 1
     * ```
     */
    insertRowsAfter(row: number, count: number): boolean;
    /**
     * Appends a new row at the end of the table.
     * @returns {boolean} `true` if the row was successfully appended.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.appendRow(); // Appends a new row at the end of the table
     * ```
     */
    appendRow(): boolean;
    /**
     * Inserts a new column before the specified column index.
     * @param {number} column The zero-based column index to insert before.
     * @returns {boolean} `true` if the column was successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertColumnBefore(1); // Inserts a new column before column 1
     * ```
     */
    insertColumnBefore(column: number): boolean;
    /**
     * Inserts a new column after the specified column index.
     * @param {number} column The zero-based column index to insert after.
     * @returns {boolean} `true` if the column was successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertColumnAfter(1); // Inserts a new column after column 1
     * ```
     */
    insertColumnAfter(column: number): boolean;
    /**
     * Inserts multiple columns before the specified column index.
     * @param {number} column The zero-based column index to insert before.
     * @param {number} count The number of columns to insert.
     * @returns {boolean} `true` if the columns were successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertColumnsBefore(1, 2); // Inserts 2 new columns before column 1
     * ```
     */
    insertColumnsBefore(column: number, count: number): boolean;
    /**
     * Inserts multiple columns after the specified column index.
     * @param {number} column The zero-based column index to insert after.
     * @param {number} count The number of columns to insert.
     * @returns {boolean} `true` if the columns were successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertColumnsAfter(1, 2); // Inserts 2 new columns after column 1
     * ```
     */
    insertColumnsAfter(column: number, count: number): boolean;
    /**
     * Appends a new column at the end of the table.
     * @returns {boolean} `true` if the column was successfully appended.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.appendColumn(); // Appends a new column at the end of the table
     * ```
     */
    appendColumn(): boolean;
    /**
     * Deletes a single row at the specified row index.
     * @param {number} row The zero-based row index to delete.
     * @returns {boolean} `true` if the row was successfully deleted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.deleteRow(1); // Deletes row 1
     * ```
     */
    deleteRow(row: number): boolean;
    /**
     * Deletes multiple rows starting from the specified row index.
     * @param {number} startRow The zero-based starting row index to delete.
     * @param {number} [count] The number of rows to delete.
     * @returns {boolean} `true` if the rows were successfully deleted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.deleteRows(1, 2); // Deletes rows 1 and 2
     * ```
     */
    deleteRows(startRow: number, count?: number): boolean;
    /**
     * Deletes a single column at the specified column index.
     * @param {number} column The zero-based column index to delete.
     * @returns {boolean} `true` if the column was successfully deleted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.deleteColumn(1); // Deletes column 1
     * ```
     */
    deleteColumn(column: number): boolean;
    /**
     * Deletes multiple columns starting from the specified column index.
     * @param {number} startColumn The zero-based starting column index to delete.
     * @param {number} [count] The number of columns to delete.
     * @returns {boolean} `true` if the columns were successfully deleted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.deleteColumns(1, 2); // Deletes columns 1 and 2
     * ```
     */
    deleteColumns(startColumn: number, count?: number): boolean;
    /**
     * Deletes the entire table.
     * @returns {boolean} `true` if the table was successfully deleted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.deleteTable(); // Deletes the entire table
     * ```
     */
    deleteTable(): boolean;
    /**
     * Moves the entire table by the specified horizontal and vertical offsets.
     * @param {number} deltaX Horizontal offset delta applied to the table's floating position
     * @param {number} deltaY Vertical offset delta applied to the table's floating position
     * @returns {boolean} `true` if the table was successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveTableBy(50, 100); // Moves the table 50 units to the right and 100 units down
     * ```
     */
    moveTableBy(deltaX: number, deltaY: number): boolean;
    /**
     * Moves the entire table to the specified offset in the document's data stream.
     * @param {number} offset The target offset to move the table to.
     * @returns {boolean} `true` if the table was successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveTableToOffset(500); // Moves the table to offset 500 in the document's data stream
     * ```
     */
    moveTableToOffset(offset: number): boolean;
    /**
     * Moves a single row to a target row index with the specified insert position relative to the target row.
     * @param {number} row The zero-based row index to move.
     * @param {number} targetRow The zero-based target row index to move to.
     * @param {DocsTableRowInsertPosition} [position] The position to insert the moved row relative to the target row. Defaults to `Above`.
     * @returns {boolean} `true` if the row was successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveRow(1, 3, univerAPI.Enum.DocsTableRowInsertPosition.Below); // Moves row 1 to below row 3
     * ```
     */
    moveRow(row: number, targetRow: number, position?: DocsTableRowInsertPosition): boolean;
    /**
     * Moves multiple rows to a target row index with the specified insert position relative to the target row.
     * @param {number} startRow The zero-based starting row index to move.
     * @param {number} count The number of rows to move.
     * @param {number} targetRow The zero-based target row index to move to.
     * @param {DocsTableRowInsertPosition} [position] The position to insert the moved rows relative to the target row. Defaults to `Above`.
     * @returns {boolean} `true` if the rows were successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveRows(1, 2, 4, univerAPI.Enum.DocsTableRowInsertPosition.Below); // Moves rows 1 and 2 to below row 4
     * ```
     */
    moveRows(startRow: number, count: number, targetRow: number, position?: DocsTableRowInsertPosition): boolean;
    /**
     * Moves a single column to a target column index with the specified insert position relative to the target column.
     * @param {number} column The zero-based column index to move.
     * @param {number} targetColumn The zero-based target column index to move to.
     * @param {DocsTableColumnInsertPosition} [position] The position to insert the moved column relative to the target column. Defaults to `Left`.
     * @returns {boolean} `true` if the column was successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveColumn(1, 3, univerAPI.Enum.DocsTableColumnInsertPosition.Right); // Moves column 1 to right of column 3
     * ```
     */
    moveColumn(column: number, targetColumn: number, position?: DocsTableColumnInsertPosition): boolean;
    /**
     * Moves multiple columns to a target column index with the specified insert position relative to the target column.
     * @param {number} startColumn The zero-based starting column index to move.
     * @param {number} count The number of columns to move.
     * @param {number} targetColumn The zero-based target column index to move to.
     * @param {DocsTableColumnInsertPosition} [position] The position to insert the moved columns relative to the target column. Defaults to `Left`.
     * @returns {boolean} `true` if the columns were successfully moved.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.moveColumns(1, 2, 4, univerAPI.Enum.DocsTableColumnInsertPosition.Right); // Moves columns 1 and 2 to right of column 4
     * ```
     */
    moveColumns(startColumn: number, count: number, targetColumn: number, position?: DocsTableColumnInsertPosition): boolean;
    /**
     * Merges a range of cells in the table into a single cell. The content of the merged cell will be taken from the top-left cell in the range.
     * @param {IDocsTableCellRange} range The range of cells to merge.
     * @returns {boolean} `true` if the cells were successfully merged.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Merges the cells in the range from row 1 to 2 and column 1 to 2 into a single cell
     * table?.mergeCells({
     *   startRow: 1,
     *   endRow: 2,
     *   startColumn: 1,
     *   endColumn: 2,
     * });
     * ```
     */
    mergeCells(range: IDocsTableCellRange): boolean;
    /**
     * Unmerges a previously merged cell back into individual cells based on the specified range.
     * @param {IDocsTableCellRange} range The range of the merged cell to unmerge, which should match the original merge range.
     * @returns {boolean} `true` if the cells were successfully unmerged.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Unmerges the previously merged cell in the range from row 1 to 2 and column 1 to 2 back into individual cells
     * table?.unmergeCells({
     *   startRow: 1,
     *   endRow: 2,
     *   startColumn: 1,
     *   endColumn: 2,
     * });
     * ```
     */
    unmergeCells(range: IDocsTableCellRange): boolean;
    /**
     * Sets the text content of a specific cell in the table. If the cell is merged, the text will be set for the entire merged cell range.
     * @param {number} row The zero-based row index of the cell to set text for.
     * @param {number} column The zero-based column index of the cell to set text for.
     * @param {text} text The text content to set in the cell.
     * @returns {boolean} `true` if the cell text was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.setCellText(1, 1, 'In Progress'); // Sets the text of the cell at row 1, column 1 to 'In Progress'
     * ```
     */
    setCellText(row: number, column: number, text: string): boolean;
    /**
     * Sets the background color of a range of cells in the table.
     * @param {IDocsTableCellRange} range The range of cells to set the background color for.
     * @param {string} color The background color to set, specified as a hex string (e.g., `#ff0000` for red).
     * @returns {boolean} `true` if the cell background color was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sets the background color of the cells in the range from row 1 to 2 and column 1 to 2 to red
     * table?.setCellBackground({
     *   startRow: 1,
     *   endRow: 2,
     *   startColumn: 1,
     *   endColumn: 2,
     * }, '#ff0000');
     * ```
     */
    setCellBackground(range: IDocsTableCellRange, color: string): boolean;
    /**
     * Sets or clears the explicit margin override for a range of cells.
     * Pass `null` to make the cells inherit the table default.
     * @param {IDocsTableCellRange} range The target cell range.
     * @param {ITableCellMargin | null} margin The margin override, or `null` to clear it.
     * @returns {boolean} Whether the mutation succeeded.
     */
    setCellMargin(range: IDocsTableCellRange, margin: Nullable<ITableCellMargin>): boolean;
    /**
     * Sets or clears the table-level default cell margin.
     * Pass `null` to restore the built-in fallback.
     * @param {ITableCellMargin | null} margin The table default, or `null` to clear it.
     * @returns {boolean} Whether the mutation succeeded.
     */
    setDefaultCellMargin(margin: Nullable<ITableCellMargin>): boolean;
    /**
     * Sets the border properties for a range of cells in the table.
     * @param {IDocsTableCellRange} range The range of cells to set the border for.
     * @param {IDocsTableBorderOptions} options The border options, including color, width, dash style, and presets for which sides to apply the border to.
     * @returns {boolean} `true` if the cell border was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sets a solid red border with a width of 2 for the cells in the range from row 1 to 2 and column 1 to 2
     * table?.setBorder({
     *   startRow: 1,
     *   endRow: 2,
     *   startColumn: 1,
     *   endColumn: 2,
     * }, {
     *   preset: univerAPI.Enum.DocsTableBorderPreset.All,
     *   color: '#ff0000',
     *   width: 2,
     * });
     *
     * // Sets a dashed blue border with a width of 1 for the cells in the range from row 0 to 0 and column 0 to 2, applying only to the bottom side
     * table?.setBorder({
     *   startRow: 0,
     *   endRow: 0,
     *   startColumn: 0,
     *   endColumn: 2,
     * }, {
     *   preset: univerAPI.Enum.DocsTableBorderPreset.Bottom,
     *   border: {
     *     color: { rgb: '#0000ff' },
     *     width: { v: 1 },
     *     dashStyle: univerAPI.Enum.DashStyleType.DASHED,
     *   },
     * });
     * ```
     */
    setBorder(range: IDocsTableCellRange, options: IDocsTableBorderOptions): boolean;
    /**
     * Sets the background color for the entire table.
     * @param {string} color The background color to set for the table, specified as a hex string (e.g., `#ff0000` for red).
     * @returns {boolean} `true` if the table background color was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.setTableBackground('#ff0000'); // Sets the background color of the entire table to red
     * ```
     */
    setTableBackground(color: string): boolean;
    /**
     * Sets the border properties for the entire table.
     * @param {IDocsTableBorderOptions} border The border options, including color, width, dash style, and presets for which sides to apply the border to.
     * @returns {boolean} `true` if the table border was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sets a solid red border with a width of 2 for the entire table
     * table?.setTableBorder({
     *   preset: univerAPI.Enum.DocsTableBorderPreset.All,
     *   color: '#ff0000',
     *   width: 2,
     * });
     *
     * // Sets a dashed blue border with a width of 1 for the entire table, applying only to the bottom side
     * table?.setTableBorder({
     *   preset: univerAPI.Enum.DocsTableBorderPreset.Bottom,
     *   border: {
     *     color: { rgb: '#0000ff' },
     *     width: { v: 1 },
     *     dashStyle: univerAPI.Enum.DashStyleType.DASHED,
     *   },
     * });
     * ```
     */
    setTableBorder(border: IDocsTableBorderOptions): boolean;
    /**
     * Sets the overall style for the entire table, including background color and border properties.
     * @param {IDocsTableStyle} style The table style options, including background color and border properties.
     * @returns {boolean} `true` if the table style was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sets the background color of the entire table to light gray and applies a solid black border with a width of 1
     * table?.setTableStyle({
     *   backgroundColor: '#f0f0f0',
     *   border: {
     *     preset: univerAPI.Enum.DocsTableBorderPreset.All,
     *     color: '#000000',
     *     width: 1,
     *   },
     * });
     * ```
     */
    setTableStyle(style: IDocsTableStyle): boolean;
    /**
     * Sets the height of a specific row in the table.
     * @param {number} row The zero-based row index to set the height for.
     * @param {number} height The height value to set for the row.
     * @returns {boolean} `true` if the row height was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.setRowHeight(1, 30); // Sets the height of row 1 to 30 units
     * ```
     */
    setRowHeight(row: number, height: number, hRule?: TableRowHeightRule): boolean;
    /** Returns the row height value and its OOXML height rule. */
    getRowHeight(row: number): ITableRowSize | null;
    /**
     * Sets the width of a specific column in the table.
     * @param {number} column The zero-based column index to set the width for.
     * @param {number} width The width value to set for the column.
     * @returns {boolean} `true` if the column width was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.setColumnWidth(1, 100); // Sets the width of column 1 to 100 units
     * ```
     */
    setColumnWidth(column: number, width: number): boolean;
    /**
     * Distributes the height of rows evenly across a specified range of rows in the table.
     * @param {number} startRow The zero-based starting row index to distribute from.
     * @param {number} [count] The number of rows to distribute. If not provided, it will distribute all rows starting from the `startRow` to the end of the table.
     * @returns {boolean} `true` if the row heights were successfully distributed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.distributeRows(1, 3); // Distributes the height of rows 1 to 3 evenly
     * ```
     */
    distributeRows(startRow?: number, count?: number): boolean;
    /**
     * Distributes the width of columns evenly across a specified range of columns in the table.
     * @param {number} startColumn The zero-based starting column index to distribute from.
     * @param {number} [count] The number of columns to distribute. If not provided, it will distribute all columns starting from the `startColumn` to the end of the table.
     * @returns {boolean} `true` if the column widths were successfully distributed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.distributeColumns(1, 3); // Distributes the width of columns 1 to 3 evenly
     * ```
     */
    distributeColumns(startColumn?: number, count?: number): boolean;
    /**
     * Gets the number of header rows in the table.
     * @returns {number} The number of header rows in the table.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const headerRowCount = table?.getHeaderRowCount();
     * ```
     */
    getHeaderRowCount(): number;
    /**
     * Sets the number of header rows in the table.
     * Header rows are typically styled differently and repeated on each page when the table spans multiple pages.
     * @param {number} count The number of header rows to set for the table.
     * @returns {boolean} `true` if the header row count was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.setHeaderRowCount(2); // Sets the first 2 rows of the table as header rows
     * ```
     */
    setHeaderRowCount(count: number): boolean;
    /**
     * Pins the specified number of rows at the top of the table as header rows, which will be repeated on each page when the table spans multiple pages.
     * @param {number} count The number of rows to pin as header rows.
     * @returns {boolean} `true` if the header rows were successfully pinned.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.pinHeaderRows(2); // Pins the first 2 rows of the table as header rows
     * ```
     */
    pinHeaderRows(count: number): boolean;
    /**
     * Checks if the table has a title row.
     * @returns {boolean} `true` if the table has a title row, otherwise `false`.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const hasTitle = table?.hasTitleRow();
     * ```
     */
    hasTitleRow(): boolean;
    /**
     * Inserts a title row at the top of the table.
     * @returns {boolean} `true` if the title row was successfully inserted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.insertTitleRow(); // Inserts a title row at the top of the table
     * ```
     */
    insertTitleRow(): boolean;
    /**
     * Sets the metadata type of a specific column in the table.
     *
     * The column type is used as the value parsing hint for table features such as sorting.
     * It does not enable dedicated cell editors or rendering for date, checkbox, or dropdown columns.
     * @param {number} column The zero-based column index to set the type for.
     * @param {IDocsTableColumnTypeConfig} config The column type configuration, including the type and any additional options specific to the column type.
     * @returns {boolean} `true` if the column type metadata was successfully set.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sorts column 2 as date values when table sorting is applied.
     * table?.setColumnType(2, {
     *   type: univerAPI.Enum.DocsTableColumnType.Date,
     * });
     * ```
     */
    setColumnType(column: number, config: IDocsTableColumnTypeConfig): boolean;
    /**
     * Sort the table by a specific column in either ascending or descending order.
     * @param {number} column The zero-based column index to sort by.
     * @param {DocsTableSortDirection} direction The direction to sort the column, either ascending or descending.
     * @returns {boolean} `true` if the table was successfully sorted.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * table?.sortByColumn(1, univerAPI.Enum.DocsTableSortDirection.Asc); // Sorts the table by column 1 in ascending order
     * ```
     */
    sortByColumn(column: number, direction: DocsTableSortDirection): boolean;
    private _getDocumentData;
    private _serializeModel;
    private _getBodyPath;
    private _mutateActions;
}
