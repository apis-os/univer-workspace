import type { ISlideTableBorder, ISlideTableCell, ISlideTableCellStyle, ISlideTableFill } from '@univerjs-pro/slides-table';
import type { IDocumentData, RichTextValue } from '@univerjs/core';
import type { FSlideTable } from './f-slide-table';
/**
 * Facade object for a single slide table cell.
 *
 * @example
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const table = fSlide.getTableById('status-table');
 *
 * const cell = table.getCell(0, 0);
 * cell?.setText('Ready');
 * cell?.setBackgroundColor('#E8F1FF');
 * ```
 */
export declare class FSlideTableCell {
    private readonly _table;
    private readonly _row;
    private readonly _column;
    constructor(_table: FSlideTable, _row: number, _column: number);
    /**
     * Return the parent table facade.
     *
     * @returns {FSlideTable} The parent table.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * console.log(cell?.getTable());
     * ```
     */
    getTable(): FSlideTable;
    /**
     * Return the zero-based row index.
     *
     * @returns {number} The row index.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(1, 0);
     * console.log(cell?.getRowIndex());
     * ```
     */
    getRowIndex(): number;
    /**
     * Return the zero-based column index.
     *
     * @returns {number} The column index.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 1);
     * console.log(cell?.getColumnIndex());
     * ```
     */
    getColumnIndex(): number;
    /**
     * Return the raw cell snapshot.
     *
     * @returns {ISlideTableCell | null} The cell snapshot, or `null` when the cell does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * console.log(cell?.getData());
     * ```
     */
    getData(): ISlideTableCell | null;
    /**
     * Return the plain text in this cell.
     *
     * @returns {string} The plain cell text.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * console.log(cell?.getText());
     * ```
     */
    getText(): string;
    /**
     * Return the raw Univer document data in this cell.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `getRichText()`.
     * @returns {IDocumentData | undefined} The cell rich text data.
     * @example
     * ```ts
     * // Advanced: export the exact document model for lossless storage or migration.
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const table = slide.getTableById('status-table');
     * const cell = table?.getCell(0, 0);
     * const textData = cell?.getTextData();
     * if (textData) console.log(JSON.stringify(textData));
     * ```
     * @advanced
     */
    getTextData(): IDocumentData | undefined;
    /**
     * Returns this cell as a detached rich-text value.
     *
     * @returns A detached value suitable for `.copy()` and `setRichText()`, or `null` for an empty cell.
     */
    getRichText(): RichTextValue | null;
    /**
     * Return the cell style.
     *
     * @returns {ISlideTableCellStyle | undefined} The cell style.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * console.log(cell?.getStyle());
     * ```
     */
    getStyle(): ISlideTableCellStyle | undefined;
    /**
     * Replace this cell with plain text.
     *
     * @param {string} text The new plain text.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.setText('Ready');
     * ```
     */
    setText(text: string): boolean;
    /**
     * Replace this cell with raw Univer document data.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `setRichText()`.
     * @param {IDocumentData} textData The rich text document data.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * // Advanced: copy exact imported document data without rebuilding its runs and ranges.
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const table = slide.getTableById('status-table');
     * const importedTextData = table?.getCell(0, 0)?.getTextData();
     * if (!importedTextData) throw new Error('Imported cell data is unavailable');
     * const targetCell = table?.getCell(0, 1);
     * if (!targetCell?.setTextData(importedTextData)) throw new Error('Cannot restore raw cell data');
     * ```
     * @advanced
     */
    setTextData(textData: IDocumentData): boolean;
    /**
     * Replaces this cell with a detached value returned by `univerAPI.newRichText()`.
     *
     * @param richText Rich-text value to store in the cell.
     * @returns Whether the command succeeded.
     * @example
     * ```ts
     * const text = univerAPI.newRichText()
     *   .align({ horizontal: univerAPI.Enum.HorizontalAlign.CENTER })
     *   .text('Ready');
     * cell.setRichText(text);
     * ```
     */
    setRichText(richText: RichTextValue): boolean;
    /**
     * Merge supported style fields into this cell.
     *
     * @param {ISlideTableCellStyle} style The style patch.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.setStyle({
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
    setStyle(style: ISlideTableCellStyle): boolean;
    /**
     * Set the cell fill.
     *
     * @param {ISlideTableFill | undefined} fill The fill, or `undefined` to clear it.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.setFill({
     *   type: univerAPI.Enum.SlideTableFillTypeEnum.Solid,
     *   color: '#E8F1FF',
     *   alpha: 1
     * });
     * ```
     */
    setFill(fill?: ISlideTableFill): boolean;
    /**
     * Set a solid background color for this cell.
     *
     * @param {string} color The background color.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.setBackgroundColor('#E8F1FF');
     * ```
     */
    setBackgroundColor(color: string): boolean;
    /**
     * Clear this cell's fill.
     *
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.clearBackground();
     * ```
     */
    clearBackground(): boolean;
    /**
     * Apply borders to this cell.
     *
     * @param {ISlideTableBorder} border The border style.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.setBorder({
     *   color: '#111827',
     *   width: 1,
     *   dash: univerAPI.Enum.SlideTableBorderDashEnum.Solid,
     * });
     * ```
     */
    setBorder(border: ISlideTableBorder): boolean;
    /**
     * Merge this cell with a rectangular span starting at this cell.
     *
     * @param {number} rowSpan The number of rows to include.
     * @param {number} columnSpan The number of columns to include.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.mergeTo(2, 2);
     * ```
     */
    mergeTo(rowSpan: number, columnSpan: number): boolean;
    /**
     * Unmerge the merged range containing this cell.
     *
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     *
     * const cell = table.getCell(0, 0);
     * cell?.unmerge();
     * ```
     */
    unmerge(): boolean;
}
