import type { IPdfTableCellStyle, IPdfTableObject, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfTableCellStyleOptions, IPdfTableTheme } from './types';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for one editable structured PDF table.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const table = page.insertTable({
 *   rowCount: 2,
 *   columnCount: 3,
 *   cellTexts: ['A', 'B', 'C']
 * });
 * console.log(table.getRowCount()); // 2
 * console.log(table.getColumnCount()); // 3
 *
 * table.resize(3, 4);
 * ```
 */
export declare class FPdfTable extends FPdfPageElement<IPdfTableObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return the current table row count.
     *
     * @returns {number} The row count.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * console.log(table?.getRowCount());
     * ```
     */
    getRowCount(): number;
    /**
     * Return the current table column count.
     *
     * @returns {number} The column count.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * console.log(table?.getColumnCount());
     * ```
     */
    getColumnCount(): number;
    /**
     * Return a live table-cell Facade by zero-based coordinates.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @returns {FPdfTableCell} The live cell Facade.
     * @throws {RangeError} If either coordinate is outside the current table.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * console.log(cell?.getText());
     * ```
     */
    getCell(row: number, column: number): FPdfTableCell;
    /**
     * Resize the table grid while preserving overlapping cells by position.
     *
     * @param {number} rowCount The positive new row count.
     * @param {number} columnCount The positive new column count.
     * @returns {this} This table Facade for chaining.
     * @throws {RangeError} If either count is invalid or the table would exceed 10,000 cells.
     * @throws {Error} If the table is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * if (table) {
     *   table.resize(3, 4);
     * }
     * ```
     */
    resize(rowCount: number, columnCount: number): this;
    /**
     * Return a detached table-theme descriptor.
     *
     * @returns {Readonly<IPdfTableTheme>} The current theme snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * console.log(table?.getTheme());
     * ```
     */
    getTheme(): Readonly<IPdfTableTheme>;
    /**
     * Replace the table theme and conditional style regions.
     *
     * @param {IPdfTableTheme} theme The new table theme.
     * @returns {this} This table Facade for chaining.
     * @throws {Error} If the table is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * if (table) {
     *   const preset = univerAPI.getPdfTableThemePresets()[3];
     *   table.setTheme({
     *     styleId: preset.id,
     *     options: {
     *       firstRow: true
     *     }
     *   });
     * }
     * ```
     */
    setTheme(theme: IPdfTableTheme): this;
}
/**
 * Live Facade for one stable cell owned by an {@link FPdfTable}.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const table = page.insertTable({
 *   rowCount: 2,
 *   columnCount: 3,
 *   cellTexts: ['A', 'B', 'C']
 * });
 * const cell = table.getCell(0, 0);
 * console.log(cell.getText());
 *
 * cell
 *   .setText('Ready')
 *   .setStyle({
 *     fill: { color: '#eef3ff' },
 *     fontColor: '#dc2626',
 *     horizontalAlignment: univerAPI.Enum.HorizontalAlign.CENTER
 *   });
 * ```
 */
export declare class FPdfTableCell {
    private readonly _model;
    private readonly _pageId;
    private readonly _tableId;
    private readonly _cellId;
    private readonly _injector;
    constructor(_model: PdfDocumentModel, _pageId: string, _tableId: string, _cellId: string, _injector: Injector);
    /**
     * Return the current cell text.
     *
     * @returns {string} The current cell text.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * console.log(cell?.getText());
     * ```
     */
    getText(): string;
    /**
     * Replace the text in a generated single-run table cell.
     *
     * @param {string} text The replacement cell text.
     * @returns {this} This cell Facade for chaining.
     * @throws {Error} If the cell is stale, unsupported, or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * if (cell) {
     *   cell.setText('Ready');
     * }
     * ```
     */
    setText(text: string): this;
    /**
     * Return a detached cell-style snapshot.
     *
     * @returns {Readonly<IPdfTableCellStyle>} The current cell-style snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * console.log(cell?.getStyle());
     * ```
     */
    getStyle(): Readonly<IPdfTableCellStyle>;
    /**
     * Update cell container and whole-cell text styles.
     *
     * @param {IPdfTableCellStyleOptions} style The cell-style patch.
     * @returns {this} This cell Facade for chaining.
     * @throws {Error} If the cell is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * if (cell) {
     *   cell.setStyle({
     *     fill: { color: '#eef3ff' },
     *     fontColor: '#dc2626',
     *     horizontalAlignment: univerAPI.Enum.HorizontalAlign.CENTER,
     *     verticalAlign: univerAPI.Enum.PdfTableCellVerticalAlign.MIDDLE
     *   });
     * }
     * ```
     */
    setStyle(style: IPdfTableCellStyleOptions): this;
    private _resolveCell;
    private _getTextStory;
}
