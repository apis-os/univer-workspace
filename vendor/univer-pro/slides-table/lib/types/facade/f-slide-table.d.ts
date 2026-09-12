import type { ISlideTableElement, SlideModel } from '@univerjs-pro/slides';
import type { ISlideTableBorder, ISlideTableCell, ISlideTableCellRange, ISlideTableCellStyle, ISlideTableFill, ISlideTableSnapshot, ISlideTableStyleOptions, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum } from '@univerjs-pro/slides-table';
import type { HorizontalAlign, IDocTextFill, IDocumentData, Injector, ITextStyle } from '@univerjs/core';
import { SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
import { FPageElement } from '@univerjs-pro/slides/facade';
import { ICommandService, IPermissionService, RichTextValue } from '@univerjs/core';
import { FSlideTableBuilder } from './f-slide-table-builder';
import { FSlideTableCell } from './f-slide-table-cell';
export interface ISlideTableInfo {
    id: string;
    elementId: string;
    rowCount: number;
    columnCount: number;
    name?: string;
    description?: string;
    styleId?: string;
    options: ISlideTableStyleOptions;
}
export interface ISlideTableDescription extends ISlideTableInfo {
    sampleRows: string[][];
    columns: Array<{
        index: number;
        width: number;
    }>;
    rows: Array<{
        index: number;
        height?: number;
    }>;
}
export interface ISlideTableFacadeStyle {
    fill?: ISlideTableFill;
    border?: ISlideTableBorder;
    options?: ISlideTableStyleOptions;
}
/**
 * Facade object for a slide table element and its table resource.
 *
 * @example
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 *
 * const tableInfo = fSlide.newTable()
 *   .setValues([
 *     ['Quarter', 'Owner', 'Status'],
 *     ['Q1', 'Sales', 'Done'],
 *   ])
 *   .setRows(3)
 *   .setColumns(4)
 *   .setColumnWidth(105)
 *   .setRowHeight(60)
 *   .setAbsolutePosition(80, 100)
 *   .setSize(420, 180)
 *   .build();
 * const table = fSlide.insertTable(tableInfo);
 *
 * table?.setCellText(0, 0, 'Name');
 * table?.setCellText(0, 1, 'Status');
 * ```
 */
export declare class FSlideTable extends FPageElement<ISlideTableElement> {
    protected readonly slideModel: SlideModel;
    protected readonly injector: Injector;
    constructor(unitId: string, subUnitId: string, elementId: string, slideModel: SlideModel, injector: Injector, commandService: ICommandService, permissionService: IPermissionService);
    /**
     * Return the table resource id.
     *
     * @returns {string} The table resource id.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getTableId());
     * ```
     */
    getTableId(): string;
    /**
     * Return the raw table resource snapshot.
     *
     * @returns {ISlideTableSnapshot} The table resource snapshot.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getTableData());
     * ```
     */
    getTableData(): ISlideTableSnapshot;
    /**
     * Return a human-readable table description with sample rows.
     *
     * @returns {ISlideTableDescription} The table description.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.describe());
     * ```
     */
    describe(): ISlideTableDescription;
    /**
     * Return the number of rows.
     *
     * @returns {number} The row count.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getRowCount());
     * ```
     */
    getRowCount(): number;
    /**
     * Return the number of columns.
     *
     * @returns {number} The column count.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getColumnCount());
     * ```
     */
    getColumnCount(): number;
    /**
     * Return a cell facade by row and column.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {FSlideTableCell | null} The cell facade, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTables()[0];
     * if (table) {
     *   const cell = table.getCell(0, 0);
     *   console.log(cell);
     * }
     * ```
     */
    getCell(row: number, column: number): FSlideTableCell | null;
    /**
     * Return raw cell data by row and column.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {ISlideTableCell | null} The cell data, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTables()[0];
     * if (table) {
     *   const cellData = table.getCellData(0, 0);
     *   console.log(cellData);
     * }
     * ```
     */
    getCellData(row: number, column: number): ISlideTableCell | null;
    /**
     * Return plain text in a cell.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {string} The cell plain text.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTables()[0];
     * if (table) {
     *   const cellText = table.getCellText(0, 0);
     *   console.log(cellText);
     * }
     * ```
     */
    getCellText(row: number, column: number): string;
    /**
     * Return the raw Univer document data in a cell.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `getCellRichText()`.
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {IDocumentData | undefined} The rich text document data.
     * @example
     * ```ts
     * // Advanced: export the exact document model for lossless storage or migration.
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const table = slide.getTableById('status-table');
     * const textData = table?.getCellTextData(0, 0);
     * if (textData) console.log(JSON.stringify(textData));
     * ```
     * @advanced
     */
    getCellTextData(row: number, column: number): IDocumentData | undefined;
    /**
     * Returns one cell as a detached rich-text value.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @returns A detached rich-text value, or `null` when the cell is empty.
     */
    getCellRichText(row: number, column: number): RichTextValue | null;
    /**
     * Return cell style by row and column.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {ISlideTableCellStyle | undefined} The cell style.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTables()[0];
     * if (table) {
     *   const cellStyle = table.getCellStyle(0, 0);
     *   console.log(cellStyle);
     * }
     * ```
     */
    getCellStyle(row: number, column: number): ISlideTableCellStyle | undefined;
    /**
     * Return a range covering the whole table.
     *
     * @returns {ISlideTableCellRange} The table range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getTableRange());
     * ```
     */
    getTableRange(): ISlideTableCellRange;
    /**
     * Return a one-cell range.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {ISlideTableCellRange} The cell range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTables()[0];
     * if (table) {
     *   const cellRange = table.getCellRange(0, 0);
     *   console.log(cellRange);
     * }
     * ```
     */
    getCellRange(row: number, column: number): ISlideTableCellRange;
    /**
     * Return a row range.
     *
     * @param {number} startRow The first row.
     * @param {number} [count] The number of rows.
     * @returns {ISlideTableCellRange} The row range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getRowsRange());
     * ```
     */
    getRowsRange(startRow: number, count?: number): ISlideTableCellRange;
    /**
     * Return a column range.
     *
     * @param {number} startColumn The first column.
     * @param {number} [count] The number of columns.
     * @returns {ISlideTableCellRange} The column range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const tables = fSlide.getTables();
     * console.log(tables[0]?.getColumnsRange());
     * ```
     */
    getColumnsRange(startColumn: number, count?: number): ISlideTableCellRange;
    /**
     * Return a builder initialized from this table.
     *
     * @returns {FSlideTableBuilder} A table builder.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * const tableInfo = table.toBuilder()
     *   .setValues([
     *     ['Quarter', 'Owner', 'Status'],
     *     ['Q1', 'Sales', 'Done'],
     *   ])
     *   .setRows(3)
     *   .setColumns(4)
     *   .setColumnWidth(105)
     *   .setRowHeight(60)
     *   .setAbsolutePosition(80, 120)
     *   .setSize(420, 180)
     *   .build();
     * fSlide.updateTable(tableInfo);
     * ```
     */
    toBuilder(): FSlideTableBuilder;
    /**
     * Insert rows before a row.
     *
     * @param {number} row The row index to insert before.
     * @param {number} [count] The number of rows to insert.
     * @param {number} [height] Optional height for new rows.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.insertRowsBefore(1, 2, 32);
     * ```
     */
    insertRowsBefore(row: number, count?: number, height?: number): boolean;
    /**
     * Insert rows after a row.
     *
     * @param {number} row The row index to insert after.
     * @param {number} [count] The number of rows to insert.
     * @param {number} [height] Optional height for new rows.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.insertRowsAfter(0, 1);
     * ```
     */
    insertRowsAfter(row: number, count?: number, height?: number): boolean;
    /**
     * Append rows to the table.
     *
     * @param {number} [count] The number of rows to append.
     * @param {number} [height] Optional height for new rows.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.appendRows(2);
     * ```
     */
    appendRows(count?: number, height?: number): boolean;
    /**
     * Delete rows from the table.
     *
     * @param {number} startRow The first row to delete.
     * @param {number} [count] The number of rows to delete.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.deleteRows(1, 2);
     * ```
     */
    deleteRows(startRow: number, count?: number): boolean;
    /**
     * Insert columns before a column.
     *
     * @param {number} column The column index to insert before.
     * @param {number} [count] The number of columns to insert.
     * @param {number} [width] Optional width for new columns.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.insertColumnsBefore(1, 2, 96);
     * ```
     */
    insertColumnsBefore(column: number, count?: number, width?: number): boolean;
    /**
     * Insert columns after a column.
     *
     * @param {number} column The column index to insert after.
     * @param {number} [count] The number of columns to insert.
     * @param {number} [width] Optional width for new columns.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.insertColumnsAfter(0, 1);
     * ```
     */
    insertColumnsAfter(column: number, count?: number, width?: number): boolean;
    /**
     * Append columns to the table.
     *
     * @param {number} [count] The number of columns to append.
     * @param {number} [width] Optional width for new columns.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.appendColumns(2);
     * ```
     */
    appendColumns(count?: number, width?: number): boolean;
    /**
     * Delete columns from the table.
     *
     * @param {number} startColumn The first column to delete.
     * @param {number} [count] The number of columns to delete.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.deleteColumns(1, 2);
     * ```
     */
    deleteColumns(startColumn: number, count?: number): boolean;
    /**
     * Merge a rectangular cell range.
     *
     * @param {ISlideTableCellRange} range The range to merge.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.mergeCells({
     *   startRow: 0,
     *   endRow: 1,
     *   startColumn: 0,
     *   endColumn: 1
     * });
     * ```
     */
    mergeCells(range: ISlideTableCellRange): boolean;
    /**
     * Unmerge the merged range containing a cell.
     *
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.unmergeCell(0, 0);
     * ```
     */
    unmergeCell(row: number, column: number): boolean;
    /**
     * Remove this table element and resource.
     *
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.remove();
     * ```
     */
    remove(): boolean;
    /**
     * Replace a cell with plain text.
     *
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {string} text The new text.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellText(0, 0, 'Ready');
     * ```
     */
    setCellText(row: number, column: number, text: string): boolean;
    /**
     * Replace a cell with raw Univer document data.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `setCellRichText()`.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {IDocumentData} textData The rich text document data.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * // Advanced: copy exact imported document data without rebuilding its runs and ranges.
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const table = slide.getTableById('status-table');
     * if (!table) throw new Error('Cannot find status table');
     * const importedTextData = table.getCellTextData(0, 0);
     * if (!importedTextData) throw new Error('Imported cell data is unavailable');
     * if (!table.setCellTextData(0, 1, importedTextData)) throw new Error('Cannot restore raw cell data');
     * ```
     * @advanced
     */
    setCellTextData(row: number, column: number, textData: IDocumentData): boolean;
    /**
     * Replaces one cell with a detached value returned by `univerAPI.newRichText()`.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @param richText Rich-text value to store.
     * @returns Whether the command succeeded.
     * @example
     * ```ts
     * const text = univerAPI.newRichText()
     *   .align({
     *     horizontal: univerAPI.Enum.HorizontalAlign.CENTER,
     *     vertical: univerAPI.Enum.VerticalAlign.MIDDLE,
     *   })
     *   .text('Ready');
     * table.setCellRichText(0, 0, text);
     * ```
     */
    setCellRichText(row: number, column: number, richText: RichTextValue): boolean;
    /**
     * Merge style fields into a cell range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {ISlideTableCellStyle} style The style patch.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   fill: {
     *     type: univerAPI.Enum.SlideTableFillTypeEnum.Solid,
     *     color: '#E8F1FF',
     *     alpha: 1,
     *   },
     *   borders: {
     *     left: {
     *       color: '#111827',
     *       width: 1,
     *       dash: univerAPI.Enum.SlideTableBorderDashEnum.Dash,
     *     },
     *   },
     *   margins: {
     *     left: 8,
     *     right: 8
     *   },
     *   verticalAlign: univerAPI.Enum.SlideTableVerticalAlignEnum.Middle,
     *   textDirection: univerAPI.Enum.SlideTableTextDirectionEnum.Horizontal,
     * });
     * ```
     */
    setCellStyle(range: ISlideTableCellRange, style: ISlideTableCellStyle): boolean;
    /**
     * Set cell fill for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {ISlideTableFill | undefined} fill The fill, or `undefined` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellFill(table.getCellRange(0, 0), {
     *   type: univerAPI.Enum.SlideTableFillTypeEnum.Solid,
     *   color: '#E8F1FF',
     *   alpha: 1
     * });
     * ```
     */
    setCellFill(range: ISlideTableCellRange, fill?: ISlideTableFill): boolean;
    /**
     * Set solid background color for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {string} color The background color.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellBackground(table.getTableRange(), '#F8FAFC');
     * ```
     */
    setCellBackground(range: ISlideTableCellRange, color: string): boolean;
    /**
     * Clear cell background for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.clearCellBackground(table.getTableRange());
     * ```
     */
    clearCellBackground(range: ISlideTableCellRange): boolean;
    /**
     * Set table background color.
     *
     * @param {string} color The background color.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setTableBackground('#F8FAFC');
     * ```
     */
    setTableBackground(color: string): boolean;
    /**
     * Apply borders to a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {ISlideTableBorder} border The border style.
     * @param {SlideTableBorderPresetEnum} [preset] Which borders to apply.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setBorder(
     *   table.getTableRange(),
     *   {
     *     color: '#111827',
     *     width: 1,
     *     dash: univerAPI.Enum.SlideTableBorderDashEnum.Dash
     *   },
     *   univerAPI.Enum.SlideTableBorderPresetEnum.Outer
     * );
     * ```
     */
    setBorder(range: ISlideTableCellRange, border: ISlideTableBorder, preset?: SlideTableBorderPresetEnum): boolean;
    /**
     * Apply borders to the whole table.
     *
     * @param {ISlideTableBorder} border The border style.
     * @param {SlideTableBorderPresetEnum} [preset] Which borders to apply.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setTableBorder(
     *   {
     *     color: '#111827',
     *     width: 1,
     *     dash: univerAPI.Enum.SlideTableBorderDashEnum.Solid
     *   },
     *   univerAPI.Enum.SlideTableBorderPresetEnum.All
     * );
     * ```
     */
    setTableBorder(border: ISlideTableBorder, preset?: SlideTableBorderPresetEnum): boolean;
    /**
     * Set horizontal text alignment for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {HorizontalAlign} horizontalAlign The horizontal alignment.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellHorizontalAlign(table.getTableRange(), univerAPI.Enum.HorizontalAlign.CENTER);
     * ```
     */
    setCellHorizontalAlign(range: ISlideTableCellRange, horizontalAlign: HorizontalAlign): boolean;
    /**
     * Set vertical text alignment for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {'top' | 'middle' | 'bottom'} verticalAlign The vertical alignment.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellVerticalAlign(table.getTableRange(), univerAPI.Enum.SlideTableVerticalAlignEnum.Middle);
     * ```
     */
    setCellVerticalAlign(range: ISlideTableCellRange, verticalAlign: SlideTableVerticalAlignEnum | undefined): boolean;
    /**
     * Set text direction for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {'horizontal' | 'vertical' | 'vertical270'} textDirection The text direction.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellTextDirection(table.getTableRange(), univerAPI.Enum.SlideTableTextDirectionEnum.Horizontal);
     * ```
     */
    setCellTextDirection(range: ISlideTableCellRange, textDirection: SlideTableTextDirectionEnum | undefined): boolean;
    /**
     * Apply document text style to a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {ITextStyle} textStyle The document text style patch.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellTextStyle(table.getTableRange(), { fs: 14, bl: 1 });
     * ```
     */
    setCellTextStyle(range: ISlideTableCellRange, textStyle: ITextStyle): boolean;
    /**
     * Set text color for a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {string} color The text color.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellTextColor(table.getTableRange(), '#111827');
     * ```
     */
    setCellTextColor(range: ISlideTableCellRange, color: string): boolean;
    /**
     * Apply rich text fill to a range.
     *
     * @param {ISlideTableCellRange} range The target range.
     * @param {IDocTextFill | undefined} fill The rich text fill, or `undefined` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellTextFill(table.getTableRange(), { type: 'solid', color: '#111827', opacity: 1 });
     * ```
     */
    setCellTextFill(range: ISlideTableCellRange, fill?: IDocTextFill): boolean;
    /**
     * Set one row's height.
     *
     * @param {number} row The row index.
     * @param {number} height The row height.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setRowHeight(0, 40);
     * ```
     */
    setRowHeight(row: number, height: number): boolean;
    /**
     * Set one column's width.
     *
     * @param {number} column The column index.
     * @param {number} width The column width.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setColumnWidth(1, 160);
     * ```
     */
    setColumnWidth(column: number, width: number): boolean;
    /**
     * Resize the table grid.
     *
     * @param {number} rows The target row count.
     * @param {number} columns The target column count.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.resize(5, 4);
     * ```
     */
    resize(rows: number, columns: number): boolean;
    /**
     * Distribute row heights evenly.
     *
     * @param {number} [startRow] The first row.
     * @param {number} [count] The number of rows.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.distributeRows();
     * ```
     */
    distributeRows(startRow?: number, count?: number): boolean;
    /**
     * Distribute column widths evenly.
     *
     * @param {number} [startColumn] The first column.
     * @param {number} [count] The number of columns.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.distributeColumns();
     * ```
     */
    distributeColumns(startColumn?: number, count?: number): boolean;
    /**
     * Set table style options.
     *
     * @param {ISlideTableStyleOptions} options The table style options.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setOptions({ firstRow: true, bandRow: true });
     * ```
     */
    setOptions(options: ISlideTableStyleOptions): boolean;
    /**
     * Apply table-level style settings.
     *
     * @param {ISlideTableFacadeStyle} style Table style settings.
     * @returns {boolean} Whether every command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setTableStyle({
     *   fill: {
     *     type: univerAPI.Enum.SlideTableFillTypeEnum.Solid,
     *     color: '#F8FAFC',
     *     alpha: 1
     *   },
     *   border: {
     *     color: '#111827',
     *     width: 1,
     *     dash: univerAPI.Enum.SlideTableBorderDashEnum.Solid
     *   },
     *   options: {
     *     firstRow: true
     *   },
     * });
     * ```
     */
    setTableStyle(style: ISlideTableFacadeStyle): boolean;
    /**
     * Set the table name.
     *
     * @param {string | null} name The table name, or `null` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setTableName('Status table');
     * ```
     */
    setTableName(name: string | null): boolean;
    /**
     * Set the table description.
     *
     * @param {string | null} description The description, or `null` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setTableDescription('Quarterly status table');
     * ```
     */
    setTableDescription(description: string | null): boolean;
    /**
     * Set the table theme style id. Built-in ids include:
     * `univerPrimaryPlainGrid`, `univerPrimaryHeader`, `univerPrimaryHeaderBandedRows`,
     * `univerNeutralPlainGrid`, `univerGreenHeaderBandedRows`, `univerPurpleStrongHeader`;
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}LightPlainGrid`,
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}LightHeader`,
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}LightHeaderBandedRows`;
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}MediumStrongHeader`,
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}MediumFirstColumn`,
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}MediumHeaderFirstColumn`;
     * `univer{Neutral|Primary|Blue|Cyan|Green|Orange|Purple|Pink}HorizontalLines`,
     * `univerPrimarySoftGrid`, and `univerNeutralSoftGrid`.
     *
     * @param {string | null} styleId The style id, or `null` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setStyleId('univerGreenMediumHeaderFirstColumn');
     * table.setOptions({
     *   firstRow: true,
     *   firstCol: true,
     *   bandRow: true
     * });
     * ```
     */
    setStyleId(styleId: string | null): boolean;
    /**
     * Set custom table metadata.
     *
     * @param {Record<string, unknown> | null} custom Custom metadata, or `null` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCustom({ source: 'agent' });
     * ```
     */
    setCustom(custom: Record<string, unknown> | null): boolean;
    private _updateTable;
    private _updateRows;
}
