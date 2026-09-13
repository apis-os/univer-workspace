import type { ISlidePlaceholderData, ISlideTableElement } from '@univerjs-pro/slides';
import type { ICreateSlideTableOptions, ISlideTableCellStyle, ISlideTableSnapshot, ISlideTableStyleOptions } from '@univerjs-pro/slides-table';
import type { IDocumentData, Injector, RichTextValue } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
export interface ISlideTableBuilderInfo {
    unitId: string;
    subUnitId: string;
    createOptions: ICreateSlideTableOptions;
    table: ISlideTableSnapshot;
    element: ISlideTableElement;
}
/**
 * Builder for creating slide tables through the facade.
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
 * fSlide.insertTable(tableInfo);
 * ```
 */
export declare class FSlideTableBuilder extends FBase {
    readonly unitId: string;
    readonly subUnitId: string;
    protected readonly _injector: Injector;
    /**
     * The table snapshot data.
     */
    table: Partial<ISlideTableSnapshot>;
    /**
     * The table element data. It is optional when building a table snapshot, but required when building a table element.
     */
    element: Partial<ISlideTableElement>;
    private _values;
    private _textData;
    private _rows;
    private _columns;
    private _rowHeight;
    private _columnWidth;
    private _cellStyles;
    constructor(unitId: string, subUnitId: string, _injector: Injector, initData?: {
        table?: Partial<ISlideTableSnapshot>;
        element?: Partial<ISlideTableElement>;
    });
    /**
     * Set plain text values for the table cells.
     *
     * @param {string[][]} values Two-dimensional plain text values.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setValues([
     *     ['Name', 'Status'],
     *     ['Facade', 'Ready'],
     *   ])
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setValues(values: string[][]): this;
    /**
     * Set raw Univer document data for the table cells.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `setRichTextValues()`.
     * @param {IDocumentData[][]} textData Two-dimensional rich text document data.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     * @example
     * ```ts
     * // Advanced: preserve the exact document model while cloning imported table content.
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const sourceTable = slide.getTableById('imported-table');
     * const importedTextData = sourceTable?.getCellTextData(0, 0);
     * if (!importedTextData) throw new Error('Imported cell data is unavailable');
     * const tableInfo = slide.newTable()
     *   .setTextData([[importedTextData]])
     *   .build();
     * slide.insertTable(tableInfo);
     * ```
     * @advanced
     */
    setTextData(textData: IDocumentData[][]): this;
    /**
     * Sets initial table cells from values returned by `univerAPI.newRichText()`.
     *
     * @param values Two-dimensional rich-text values.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     * const slide = presentation.getSlideByIndex(0);
     * const richText = univerAPI.newRichText()
     *   .align({
     *     horizontal: univerAPI.Enum.HorizontalAlign.CENTER,
     *     vertical: univerAPI.Enum.VerticalAlign.MIDDLE,
     *   })
     *   .text('Status: ')
     *   .bold('Ready');
     * const table = slide.insertTable(slide.newTable().setRichTextValues([[richText]]).build());
     * if (!table) throw new Error('Cannot insert rich-text slide table');
     * ```
     */
    setRichTextValues(values: RichTextValue[][]): this;
    /**
     * Set the number of rows for the table. Default is 2.
     * If the table already has values or text data, their maximum will be used as the row count instead.
     * @param {number} rows The number of rows.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setRows(rows: number): this;
    /**
     * Set the number of columns for the table. Default is 2.
     * If the table already has values or text data, their maximum will be used as the column count instead.
     * @param {number} columns The number of columns.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setColumns(columns: number): this;
    /**
     * Set the table position by slide coordinates.
     *
     * @param {number} left The x-coordinate of the table.
     * @param {number} top The y-coordinate of the table.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setAbsolutePosition(80, 120)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setAbsolutePosition(left: number, top: number): this;
    /**
     * Set the table size.
     *
     * @param {number} width The table width.
     * @param {number} height The table height.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setSize(480, 220)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Set the table rotation.
     *
     * @param {number} rotation The rotation in degrees.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setRotation(90)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setRotation(rotation: number): this;
    /**
     * Set placeholder metadata on the table element.
     *
     * @param {ISlidePlaceholderData} placeholder The placeholder metadata.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setPlaceholder({
     *     id: 'body-1',
     *     type: univerAPI.Enum.SlidePlaceholderTypeEnum.Table
     *   })
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setPlaceholder(placeholder: ISlidePlaceholderData): this;
    /**
     * Set default row height for all created rows.
     *
     * @param {number} height The row height.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setRowHeight(32)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setRowHeight(height: number): this;
    /**
     * Set default column width for all created columns.
     *
     * @param {number} width The column width.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setColumnWidth(120)
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setColumnWidth(width: number): this;
    /**
     * Set style for one cell in the initial table snapshot.
     *
     * @param {Array<{ row: number; column: number; style: ISlideTableCellStyle }>} styles An array of cell styles with their corresponding row and column indexes.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setValues([
     *     ['Name', 'Status'],
     *     ['Facade', 'Ready'],
     *   ])
     *   .setCellStyles([
     *     { row: 0, column: 0, style: { fill: { color: '#E8F1FF', alpha: 1 } } },
     *   ])
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setCellStyles(styles: Array<{
        row: number;
        column: number;
        style: ISlideTableCellStyle;
    }>): this;
    /**
     * Set table style options such as first row or banded rows.
     *
     * @param {ISlideTableStyleOptions} options The table style options.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(4)
     *   .setColumns(2)
     *   .setOptions({
     *     firstRow: true,
     *     bandRow: true
     *   })
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setOptions(options: ISlideTableStyleOptions): this;
    /**
     * Set the table name.
     *
     * @param {string} name The table name.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setName('Status table')
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setName(name: string): this;
    /**
     * Set the table description.
     *
     * @param {string} description The table description.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setDescription('Quarterly status table')
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setDescription(description: string): this;
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
     * @param {string} styleId The table style id.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setStyleId('univerGreenMediumHeaderFirstColumn')
     *   .setOptions({
     *     firstRow: true,
     *     firstCol: true,
     *     bandRow: true
     *   })
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setStyleId(styleId: string): this;
    /**
     * Set custom table metadata.
     *
     * @param {Record<string, unknown> | null} custom The custom metadata.
     * @returns {FSlideTableBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setCustom({ source: 'agent' })
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    setCustom(custom: Record<string, unknown> | null): this;
    /**
     * Build the table info used by `fSlide.insertTable()`.
     *
     * @returns {ISlideTableBuilderInfo} The table resource and element data.
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
     * fSlide.insertTable(tableInfo);
     * ```
     */
    build(): ISlideTableBuilderInfo;
    private _resolveElementTransform;
    private _handleMaxRowsColumns;
}
