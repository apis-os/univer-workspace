import type { ICreateSlideTableOptions } from '@univerjs-pro/slides-table';
import type { ISlideTableBuilderInfo } from './f-slide-table-builder';
import { FSlide } from '@univerjs-pro/slides/facade';
import { FSlideTable } from './f-slide-table';
import { FSlideTableBuilder } from './f-slide-table-builder';
export interface IFSlideTableMixin {
    /**
     * Return a builder for a new slide table.
     * @param {FSlideTable | string} [existing] An existing table facade or table resource/element id to initialize the builder with for updating. If not specified, the builder will create a new table.
     * @returns {FSlideTableBuilder} A table builder.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const tableInfo = fSlide.newTable()
     *   .setValues([
     *     ['Name', 'Owner', 'Status'],
     *     ['Facade', 'API', 'Ready'],
     *   ])
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    newTable(existing?: FSlideTable | string): FSlideTableBuilder;
    /**
     * Insert a table from builder info.
     *
     * @param {ISlideTableBuilderInfo} tableInfo The table builder info.
     * @param {number} [index] The slide element insert index.
     * @returns {FSlideTable | null} The inserted table facade, or `null` if the insert failed.
     *
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
    insertTable(tableInfo: ISlideTableBuilderInfo, index?: number): FSlideTable | null;
    /**
     * Insert a table and fill it with plain text data.
     *
     * @param {string[][]} values Two-dimensional plain text values.
     * @param {ICreateSlideTableOptions} [options] Optional ids, layout, and style settings.
     * @returns {FSlideTable | null} The inserted table facade, or `null` if the insert failed.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.insertTableFromData(
     *   [
     *     ['Name', 'Status'],
     *     ['Facade', 'Ready'],
     *   ],
     *   {
     *     tableId: 'status-table'
     *   }
     * );
     * console.log(table);
     * ```
     */
    insertTableFromData(values: string[][], options?: ICreateSlideTableOptions): FSlideTable | null;
    /**
     * Return all slide tables on this slide.
     *
     * @returns {FSlideTable[]} All table facades in element order.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getTables());
     * ```
     */
    getTables(): FSlideTable[];
    /**
     * Return a slide table by table resource id or element id.
     *
     * @param {string} tableIdOrElementId The table resource id or table element id.
     * @returns {FSlideTable | null} The table facade, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const table = fSlide.getTableById('status-table');
     * console.log(table);
     * ```
     */
    getTableById(tableIdOrElementId: string): FSlideTable | null;
    /**
     * Return a slide table by its order on the slide.
     *
     * @param {number} index The zero-based table index.
     * @returns {FSlideTable | null} The table facade, or `null` when the index is out of range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const firstTable = fSlide.getTableAt(0);
     * console.log(firstTable);
     * ```
     */
    getTableAt(index: number): FSlideTable | null;
    /**
     * Update a slide table by builder info.
     * @param {ISlideTableBuilderInfo} tableInfo The table builder info with updated properties. The `table.id` and `element.id` must be provided to identify which table to update.
     * @returns {FSlideTable} The updated table facade.
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
    updateTable(tableInfo: ISlideTableBuilderInfo): FSlideTable;
    /**
     * Remove a slide table by facade, table id, or element id.
     *
     * @param {FSlideTable | string} table The table to remove.
     * @returns {boolean} Whether the command succeeded.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * if (table) {
     *   fSlide.removeTable(table);
     * }
     * ```
     */
    removeTable(table: FSlideTable): boolean;
}
export declare class FSlideTableMixin extends FSlide implements IFSlideTableMixin {
    newTable(existing?: FSlideTable | string): FSlideTableBuilder;
    insertTable(tableInfo: ISlideTableBuilderInfo, index?: number): FSlideTable | null;
    insertTableFromData(values: string[][], options?: ICreateSlideTableOptions): FSlideTable | null;
    getTables(): FSlideTable[];
    getTableById(tableIdOrElementId: string): FSlideTable | null;
    getTableAt(index: number): FSlideTable | null;
    updateTable(tableInfo: ISlideTableBuilderInfo): FSlideTable;
    removeTable(table: FSlideTable): boolean;
}
declare module '@univerjs-pro/slides/facade' {
    interface FSlide extends IFSlideTableMixin {
    }
}
