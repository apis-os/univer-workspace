import type { BaseCellValue, IBaseCellData, Injector, IRange } from '@univerjs/core';
import type { FBase } from './f-base';
import type { FBaseTable } from './f-table';
import { ICommandService } from '@univerjs/core';
/**
 * Facade API object bound to a rectangular Base table range.
 *
 * A Base range is addressed by row and column indexes over records and fields,
 * similar to a spreadsheet range over worksheet cells.
 *
 * Row indexes resolve through the table's current `recordOrder`; column indexes
 * resolve through `fieldOrder`. Writes are converted to Base cell updates under
 * the hood, so the persisted snapshot still stores values by record id and
 * field id.
 *
 * @example Read and write a rectangular block
 * ```ts
 * const fBase = univerAPI.getActiveBase();
 * const fBaseTable = fBase.getTableById('table-1');
 *
 * const range = fBaseTable.getRange(0, 0, 2, 2);
 * console.log(range.getValues());
 *
 * range.setValues([
 *   ['Task A', 'todo'],
 *   ['Task B', 'done'],
 * ]);
 *
 * const statusColumn = range.offset(0, 1, range.getNumRows(), 1);
 * statusColumn.clear();
 * ```
 */
export declare class FBaseTableRange {
    private readonly _base;
    private readonly _table;
    private readonly _range;
    private readonly _inject;
    private readonly _commandService;
    constructor(_base: FBase, _table: FBaseTable, _range: IRange, _inject: Injector, _commandService: ICommandService);
    /**
     * Get the Base id.
     * @returns {string} The Base id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getBaseId());
     * ```
     */
    getBaseId(): string;
    /**
     * Get the table id.
     * @returns {string} The table id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getTableId());
     * ```
     */
    getTableId(): string;
    /**
     * Get the raw range position.
     * @returns {IRange} The range position.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getRange());
     * ```
     */
    getRange(): IRange;
    /**
     * Get the first row index of this range.
     * @returns {number} The zero-based row index.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getRow());
     * ```
     */
    getRow(): number;
    /**
     * Get the first column index of this range.
     * @returns {number} The zero-based column index.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getColumn());
     * ```
     */
    getColumn(): number;
    /**
     * Get the number of rows in this range.
     * @returns {number} The row count.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getNumRows());
     * ```
     */
    getNumRows(): number;
    /**
     * Get the number of columns in this range.
     * @returns {number} The column count.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getNumColumns());
     * ```
     */
    getNumColumns(): number;
    /**
     * Get all values in this range.
     *
     * The outer array is rows and the inner array is columns. Empty cells are
     * returned as `null`.
     *
     * @returns {BaseCellValue[][]} A two-dimensional array matching the range size.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getValues());
     * ```
     */
    getValues(): BaseCellValue[][];
    /**
     * Get the first value in this range.
     * @returns {BaseCellValue} The top-left value.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * console.log(range.getValue());
     * ```
     */
    getValue(): BaseCellValue;
    /**
     * Set the top-left value in this range.
     * @param {BaseCellValue | IBaseCellData} value The value to write. It may be a raw Base cell value, a full
     * `IBaseCellData` object, or `null` to clear the cell.
     * @returns {boolean} `true` if set value successfully, `false` if failed.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getRange(0, 0, 2, 3);
     * const success = range.setValue('Task title');
     * console.log(success ? 'Value set successfully' : 'Failed to set value');
     * ```
     */
    setValue(value: BaseCellValue | IBaseCellData): boolean;
    /**
     * Set all values in this range.
     *
     * The provided matrix must match `getNumRows()` by `getNumColumns()`.
     * Passing the wrong shape throws before any command is executed.
     *
     * @param {Array<Array<BaseCellValue | IBaseCellData>>} values A two-dimensional array matching the range size. Each cell
     * may be a raw Base cell value, an `IBaseCellData` object, or `null`.
     * @returns {boolean} `true` if set values successfully, `false` if failed.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getRange(0, 1, 2, 2);
     * const success = range.setValues([
     *   ['todo', 10],
     *   ['done', 20],
     * ]);
     * console.log(success ? 'Values set successfully' : 'Failed to set values');
     * ```
     */
    setValues(values: Array<Array<BaseCellValue | IBaseCellData>>): boolean;
    /**
     * Clear all values in this range.
     * @returns {boolean} `true` if cleared successfully, `false` if failed.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getDataRange();
     * const success = range.clear();
     * console.log(success ? 'Range cleared successfully' : 'Failed to clear range');
     * ```
     */
    clear(): boolean;
    /**
     * Create a new range offset from this range.
     *
     * Offsets are validated against the table's current row and column bounds.
     *
     * @param {number} rowOffset Number of rows to move. Positive values move down.
     * @param {number} columnOffset Number of columns to move. Positive values move right.
     * @param {number} numRows Number of rows in the returned range. Defaults to the current row count.
     * @param {number} numColumns Number of columns in the returned range. Defaults to the current column count.
     * @returns {FBaseTableRange} A new range offset from this range.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const range = fBaseTable.getRange(0, 0);
     * const nextColumn = range.offset(0, 1);
     * console.log(nextColumn);
     * ```
     */
    offset(rowOffset: number, columnOffset: number, numRows?: number, numColumns?: number): FBaseTableRange;
    private _getTable;
    private _assertInBounds;
    private _getFieldIds;
}
