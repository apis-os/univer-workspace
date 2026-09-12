import type { ITableCellMargin } from '@univerjs/core';
import type { FDocumentTable } from './f-document-table';
import type { IDocsTableBorderOptions, IDocsTableCellContentRange } from './types';
/**
 * Facade object for a single docs table cell.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const table = fDocument?.findTableByText('Status');
 * const cell = table.getCell(0, 0);
 * cell?.setText('Owner');
 * cell?.setBackgroundColor('#E8F1FF');
 * ```
 */
export declare class FDocumentTableCell {
    private readonly _table;
    private readonly _row;
    private readonly _column;
    constructor(_table: FDocumentTable, _row: number, _column: number);
    /**
     * Returns the parent table facade.
     * @returns {FDocumentTable} The parent table.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * const parentTable = cell?.getTable(); // Returns the same table as `table`
     * ```
     */
    getTable(): FDocumentTable;
    /**
     * Returns the zero-based row index.
     * @returns {number} The row index.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(2, 3);
     * const rowIndex = cell?.getRowIndex(); // Returns 2
     * ```
     */
    getRowIndex(): number;
    /**
     * Returns the zero-based column index.
     * @returns {number} The column index.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(2, 3);
     * const columnIndex = cell?.getColumnIndex(); // Returns 3
     * ```
     */
    getColumnIndex(): number;
    /**
     * Returns plain text in this cell.
     * @returns {string} The cell text.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * const text = cell?.getText(); // Returns the text content of the cell
     * ```
     */
    getText(): string;
    /**
     * Returns the editable document range inside this cell.
     * @returns {IDocsTableCellContentRange | null} The cell content range, or `null` if the cell does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * const contentRange = cell?.getContentRange(); // Returns the content range of the cell
     * ```
     */
    getContentRange(): IDocsTableCellContentRange | null;
    /**
     * Returns the offset before this cell's final paragraph and section break.
     * @returns {number | null} The insertion offset, or `null` if the cell does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * const insertOffset = cell?.getInsertOffset(); // Returns the offset for inserting new content into the cell
     * ```
     */
    getInsertOffset(): number | null;
    /**
     * Returns the effective margin used to lay out this cell.
     * Cell overrides take precedence over the table default and the built-in fallback.
     */
    getMargin(): ITableCellMargin | null;
    /** Returns this cell's explicit margin override, or `null` when it inherits. */
    getMarginOverride(): ITableCellMargin | null;
    /** Sets this cell's explicit margin override. */
    setMargin(margin: ITableCellMargin): boolean;
    /** Removes this cell's explicit margin override so it inherits from the table. */
    clearMarginOverride(): boolean;
    /**
     * Replaces the cell text.
     * @param {string} text The new cell text.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * cell?.setText('Owner'); // Sets the cell text to "Owner"
     * ```
     */
    setText(text: string): boolean;
    /**
     * Sets the cell background color.
     * @param {string} color CSS color string, for example `#E8F1FF`.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * cell?.setBackgroundColor('#E8F1FF'); // Sets the cell background color to a light blue
     * ```
     */
    setBackgroundColor(color: string): boolean;
    /**
     * Applies border options to this cell.
     * @param {IDocsTableBorderOptions} border Border preset and style options.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     *
     * // Sets a light gray border around the cell
     * const cell = table.getCell(0, 0);
     * cell?.setBorder({
     *   preset: univerAPI.Enum.DocsTableBorderPreset.Outer,
     *   color: '#CCCCCC',
     *   width: 1
     * });
     * ```
     */
    setBorder(border: IDocsTableBorderOptions): boolean;
    /**
     * Merges this cell with a rectangular span starting from this cell.
     * @param {number} rowSpan Number of rows to include.
     * @param {number} columnSpan Number of columns to include.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * cell?.mergeTo(2, 3); // Merges a 2-row-by-3-column range starting from this cell
     * ```
     */
    mergeTo(rowSpan: number, columnSpan: number): boolean;
    /**
     * Unmerges the merged range containing this cell.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument?.findTableByText('Status');
     * const cell = table.getCell(0, 0);
     * cell?.unmerge(); // Unmerges the merged range containing this cell
     * ```
     */
    unmerge(): boolean;
}
