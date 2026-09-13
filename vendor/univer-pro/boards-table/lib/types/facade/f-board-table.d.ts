import type { BoardDiagramTablePreset } from '@univerjs-pro/boards-table';
import type { ISlideTableBorder, ISlideTableCellRange, ISlideTableCellStyle, ISlideTableSnapshot, SlideTableBorderPresetEnum, SlideTableMovePosition } from '@univerjs-pro/slides-table';
import type { IDocumentData, RichTextValue } from '@univerjs/core';
import { FBoard } from '@univerjs-pro/boards/facade';
import { SlideTableResourceService } from '@univerjs-pro/slides-table';
import { ICommandService } from '@univerjs/core';
/**
 * Options for creating a Board table with a generated element id.
 *
 */
export interface IBoardTableFacadeInsertOptions {
    /** Horizontal position in board units. */
    left: number;
    /** Vertical position in board units. */
    top: number;
    /** Optional generated board table element id. Facade callers should omit this. */
    elementId?: string;
    /** Optional parent container element id for low-level integrations. */
    parentId?: string;
    /** Optional target swimlane lane id. */
    laneId?: string;
    /** Initial row count. Defaults to the Board table default. */
    rows?: number;
    /** Initial column count. Defaults to the Board table default. */
    columns?: number;
    /** Optional element width in board units. */
    width?: number;
    /** Optional element height in board units. */
    height?: number;
    /**
     * Optional Board diagram-table preset.
     *
     * Use `univerAPI.Enum.BoardTableDiagramPreset` instead of a raw string. Presets provide a meaningful starting
     * structure for UML and ER diagrams; agents can then set the table's values explicitly. A preset defines the
     * resource row/column structure, so `rows` and `columns` do not reshape it; `width` and `height` still control the
     * Board host bounds.
     */
    diagramPreset?: BoardDiagramTablePreset;
}
/**
 * Detached structural summary of a Board table.
 *
 * This is the recommended structure read for agents. It avoids generated resource ids and mutable table snapshots while
 * preserving the dimensions needed to plan row, column, resize, and merge operations.
 *
 */
export interface IBoardTableFacadeStructure {
    /** Current number of rows. */
    rowCount: number;
    /** Current number of columns. */
    columnCount: number;
    /** Explicit row heights; `null` means the table default height. */
    rowHeights: Array<number | null>;
    /** Current column widths in Board table units. */
    columnWidths: number[];
    /** Detached merged ranges, each using inclusive zero-based coordinates. */
    mergedRanges: ISlideTableCellRange[];
}
/**
 * Agent-friendly information for one Board table cell.
 *
 * The value combines the reads most agents need before editing. Rich text and style are detached; modifying them does
 * not mutate the Board until a corresponding setter is called.
 *
 */
export interface IBoardTableFacadeCellInfo {
    /** Zero-based row index. */
    row: number;
    /** Zero-based column index. */
    column: number;
    /** Plain-text cell content. */
    text: string;
    /** Detached rich-text cell content. */
    richText: RichTextValue;
    /** Detached explicit cell style, or `null` when no style is stored. */
    style: ISlideTableCellStyle | null;
    /** Merged range containing this cell, or `null` when the cell is not merged. */
    mergeRange: ISlideTableCellRange | null;
    /** Whether this cell is the top-left anchor of its merged range. */
    isMergeAnchor: boolean;
}
/**
 * Board table APIs mixed into `FBoard` by importing `@univerjs-pro/boards-table/facade`.
 *
 * Tables are addressed by the stable Board element id stored on their host element. The returned `FBoardTable` owns
 * table-resource mutations and dispatches the existing Board table commands, so edits remain collaborative and undoable.
 *
 */
export interface IFBoardTableMixin {
    /**
     * Inserts a Board table.
     *
     * @param options Position, size, dimensions, and optional diagram preset.
     * @returns Table facade, or `null` when insertion fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * ```
     */
    insertTable(options: IBoardTableFacadeInsertOptions): FBoardTable | null;
    /**
     * Gets a Board table by its generated host element id.
     *
     * @param elementId Board table host element id.
     * @returns Table facade, or `null` when it is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const inserted = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!inserted) throw new Error('Cannot insert table');
     * console.log(board.getTable(inserted.getId()));
     * ```
     */
    getTable(elementId: string): FBoardTable | null;
    /**
     * Gets all table facades in Board z-order.
     *
     * @returns Board table facades.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getTables().map((table) => table.getId()));
     * ```
     */
    getTables(): FBoardTable[];
}
/**
 * Facade for one Board table element and its table resource.
 *
 * Instances are returned by `FBoard` table mixin methods. Do not construct this class directly because it needs the
 * active Board model, table resource service, and command service.
 *
 */
export declare class FBoardTable {
    private readonly _board;
    private readonly _pageId;
    private readonly _elementId;
    private readonly _commandService;
    private readonly _resourceService;
    constructor(_board: FBoard, _pageId: string, _elementId: string, _commandService: ICommandService, _resourceService: SlideTableResourceService);
    /**
     * Gets the generated Board element id.
     *
     * Prefer `getId()` for agent references; this id is only useful for integration event payloads.
     *
     * @returns Generated table host element id.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getId());
     * ```
     */
    getId(): string;
    /**
     * Gets the table resource id.
     *
     * @returns Generated table resource id, or `null` when the host table no longer exists.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getTableId());
     * ```
     */
    getTableId(): string | null;
    /**
     * Gets a clone of the raw table resource snapshot.
     *
     * Agent scripts normally prefer `getValues()` and explicit mutation methods rather than depending on table internals.
     *
     * @returns Table resource data, or `null` when it is unavailable.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getData());
     * ```
     */
    getData(): ISlideTableSnapshot | null;
    /**
     * Gets a detached structural summary of this table.
     *
     * @returns Row/column counts, sizes, and merged ranges, or `null` when the table resource is unavailable.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getStructure());
     * ```
     */
    getStructure(): IBoardTableFacadeStructure | null;
    /**
     * Gets the current plain-text values in row and column order.
     *
     * @returns A rectangular matrix. Empty cells are returned as empty strings.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getValues());
     * ```
     */
    getValues(): string[][];
    /**
     * Gets plain text, rich text, style, and merge information for one cell.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @returns Detached cell information, or `null` when the coordinates or table resource are invalid.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getCellInfo(0, 0));
     * ```
     */
    getCellInfo(row: number, column: number): IBoardTableFacadeCellInfo | null;
    /**
     * Gets one cell as a detached rich-text value.
     *
     * The returned value can be copied or transformed safely before calling `setCellRichText()`. It never exposes the
     * mutable table resource snapshot.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @returns Detached rich-text value, or `null` when the table or cell does not exist.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getCellRichText(0, 0)?.getData());
     * ```
     */
    getCellRichText(row: number, column: number): RichTextValue | null;
    /**
     * Gets a rectangular matrix of detached rich-text cell values.
     *
     * Omit `range` to read the complete table. The returned values are independent of the resource snapshot and can be
     * transformed before being written with `setRichTextValues()`.
     *
     * @param range Optional inclusive zero-based range.
     * @returns A rectangular rich-text matrix, or an empty array when the table or range is invalid.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getRichTextValues({ startRow: 0, endRow: 1, startColumn: 0, endColumn: 1 }));
     * ```
     */
    getRichTextValues(range?: ISlideTableCellRange): RichTextValue[][];
    /**
     * Gets a detached style snapshot for one cell.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @returns A cloned style object, or `null` when the cell has no explicit style or does not exist.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table) throw new Error('Cannot insert table');
     * console.log(table.getCellStyle(0, 0));
     * ```
     */
    getCellStyle(row: number, column: number): ISlideTableCellStyle | null;
    /**
     * Replaces a rectangular range of cells with plain text in one table update command.
     *
     * Unchanged cells do not generate a mutation. The values matrix must fit inside the current table bounds; use row or
     * column insertion methods first when an agent needs to grow the table.
     *
     * @param values Plain-text matrix to write.
     * @param startRow Zero-based start row. Defaults to `0`.
     * @param startColumn Zero-based start column. Defaults to `0`.
     * @returns `true` when the update succeeds or the requested values are already present.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.setValues([['Task', 'Owner'], ['Review', 'Alex']])) throw new Error('Cannot set values');
     * ```
     */
    setValues(values: string[][], startRow?: number, startColumn?: number): boolean;
    /**
     * Replaces a rectangular range with rich text in one table update command.
     *
     * The matrix must be rectangular and fit inside the current table. Every builder is cloned before dispatch, and an
     * unchanged matrix succeeds without creating undo or collaboration traffic.
     *
     * @param values Rich-text matrix built with `univerAPI.newRichText()`.
     * @param startRow Zero-based start row. Defaults to `0`.
     * @param startColumn Zero-based start column. Defaults to `0`.
     * @returns `true` when the batch succeeds or all requested cells are already current.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 2, columns: 2 });
     * const title = univerAPI.newRichText().bold('Status');
     * const value = univerAPI.newRichText().text('Approved');
     * if (!table || !table.setRichTextValues([[title, value]])) throw new Error('Cannot set rich text');
     * ```
     */
    setRichTextValues(values: RichTextValue[][], startRow?: number, startColumn?: number): boolean;
    /**
     * Replaces one cell with plain text.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @param text New plain text.
     * @returns `true` when the command succeeds or the text is unchanged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.setCellText(0, 0, 'Approved')) throw new Error('Cannot set cell text');
     * ```
     */
    setCellText(row: number, column: number, text: string): boolean;
    /**
     * Replaces one cell with raw Univer document data.
     *
     * This is an advanced integration escape hatch. Application and agent code should prefer `setCellRichText()`.
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @param textData Document data, or `null` to clear the cell.
     * @returns `true` when the command succeeds or the requested data is unchanged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 2, columns: 2 });
     * if (!table || !table.setCellRichText(0, 0, univerAPI.newRichText().bold('Risk'))) {
     *   throw new Error('Cannot prepare source cell');
     * }
     * const importedTextData = table.getCellRichText(0, 0)?.getData();
     * if (!importedTextData) throw new Error('Source cell is empty');
     * if (!table.setCellTextData(1, 0, importedTextData)) throw new Error('Cannot restore raw cell data');
     * ```
     * @advanced
     */
    setCellTextData(row: number, column: number, textData: IDocumentData | null): boolean;
    /**
     * Replaces one cell with rich text built by `univerAPI.newRichText()`.
     *
     * The builder data is cloned before dispatch, so later changes to the builder do not mutate the table snapshot.
     * Use `setCellText()` for plain strings. Raw document data is reserved for advanced integrations.
     *
     * @param row Zero-based row index.
     * @param column Zero-based column index.
     * @param richText Rich text value returned by `univerAPI.newRichText()`.
     * @returns `true` when the command succeeds or the requested rich text is unchanged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * const value = univerAPI.newRichText().bold('Approved');
     * if (!table || !table.setCellRichText(0, 0, value)) throw new Error('Cannot set rich text');
     * ```
     */
    setCellRichText(row: number, column: number, richText: RichTextValue): boolean;
    /**
     * Merges a style patch into a cell range.
     *
     * @param range Inclusive zero-based target range.
     * @param style Cell style patch.
     * @returns `true` when the command succeeds or the style is unchanged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.setCellStyle(
     *   { startRow: 0, endRow: 0, startColumn: 0, endColumn: 2 },
     *   { fill: { type: univerAPI.Enum.BoardTableFillTypeEnum.Solid, color: '#e0e7ff', alpha: 1 } }
     * )) throw new Error('Cannot style cells');
     * ```
     */
    setCellStyle(range: ISlideTableCellRange, style: ISlideTableCellStyle): boolean;
    /**
     * Applies a border preset to a cell range.
     *
     * @param range Inclusive zero-based target range.
     * @param preset Border preset enum value.
     * @param border Optional border appearance.
     * @returns `true` when the command succeeds or the border is unchanged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.setBorderPreset(
     *   { startRow: 0, endRow: 2, startColumn: 0, endColumn: 2 },
     *   univerAPI.Enum.BoardTableBorderPresetEnum.All,
     *   { color: '#64748b', width: 1 }
     * )) throw new Error('Cannot set borders');
     * ```
     */
    setBorderPreset(range: ISlideTableCellRange, preset: SlideTableBorderPresetEnum, border?: ISlideTableBorder): boolean;
    /**
     * Inserts rows and grows the Board host element in the same undoable command.
     *
     * @param rowIndex Zero-based insertion index.
     * @param count Number of rows to insert. Defaults to `1`.
     * @param height Optional height in board units for each new row.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.insertRows(1, 2)) throw new Error('Cannot insert rows');
     * ```
     */
    insertRows(rowIndex: number, count?: number, height?: number): boolean;
    /**
     * Inserts columns and grows the Board host element in the same undoable command.
     *
     * @param columnIndex Zero-based insertion index.
     * @param count Number of columns to insert. Defaults to `1`.
     * @param width Optional width in board units for each new column.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.insertColumns(1, 2)) throw new Error('Cannot insert columns');
     * ```
     */
    insertColumns(columnIndex: number, count?: number, width?: number): boolean;
    /**
     * Deletes an inclusive row range.
     *
     * @param startRow First zero-based row to delete.
     * @param endRow Last zero-based row to delete.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 4, columns: 3 });
     * if (!table || !table.deleteRows(1, 2)) throw new Error('Cannot delete rows');
     * ```
     */
    deleteRows(startRow: number, endRow: number): boolean;
    /**
     * Deletes an inclusive column range.
     *
     * @param startColumn First zero-based column to delete.
     * @param endColumn Last zero-based column to delete.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 4 });
     * if (!table || !table.deleteColumns(1, 2)) throw new Error('Cannot delete columns');
     * ```
     */
    deleteColumns(startColumn: number, endColumn: number): boolean;
    /**
     * Resizes an inclusive row range.
     *
     * @param startRow First zero-based row to resize.
     * @param endRow Last zero-based row to resize.
     * @param height New row height in board units.
     * @returns `true` when the command succeeds or the rows already have this height.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.resizeRows(0, 1, 48)) throw new Error('Cannot resize rows');
     * ```
     */
    resizeRows(startRow: number, endRow: number, height: number): boolean;
    /**
     * Resizes an inclusive column range.
     *
     * @param startColumn First zero-based column to resize.
     * @param endColumn Last zero-based column to resize.
     * @param width New column width in board units.
     * @returns `true` when the command succeeds or the columns already have this width.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.resizeColumns(0, 1, 160)) throw new Error('Cannot resize columns');
     * ```
     */
    resizeColumns(startColumn: number, endColumn: number, width: number): boolean;
    /**
     * Moves an inclusive row range before or after a target row.
     *
     * Cell content, rich text, style, merges, and row height move together. Invalid overlaps are rejected by the shared
     * table layout command, while an equivalent update returns `true` without creating history.
     *
     * @param startRow First zero-based row to move.
     * @param endRow Last zero-based row to move.
     * @param targetRow Zero-based reference row.
     * @param position Insert the moved rows `before` or `after` the reference row.
     * @returns `true` when the move succeeds or is already in the requested position.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 4, columns: 3 });
     * if (!table || !table.moveRows(0, 0, 2, 'after')) throw new Error('Cannot move row');
     * ```
     */
    moveRows(startRow: number, endRow: number, targetRow: number, position: SlideTableMovePosition): boolean;
    /**
     * Moves an inclusive column range before or after a target column.
     *
     * Cell content, rich text, style, merges, and column width move together through the shared table command.
     *
     * @param startColumn First zero-based column to move.
     * @param endColumn Last zero-based column to move.
     * @param targetColumn Zero-based reference column.
     * @param position Insert the moved columns `before` or `after` the reference column.
     * @returns `true` when the move succeeds or is already in the requested position.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 4 });
     * if (!table || !table.moveColumns(0, 0, 2, 'after')) throw new Error('Cannot move column');
     * ```
     */
    moveColumns(startColumn: number, endColumn: number, targetColumn: number, position: SlideTableMovePosition): boolean;
    /**
     * Merges a supplied inclusive cell range.
     *
     * @param range Inclusive zero-based range to merge.
     * @returns `true` when the command succeeds or the range is already merged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.mergeCells({ startRow: 0, endRow: 0, startColumn: 0, endColumn: 1 })) {
     *   throw new Error('Cannot merge cells');
     * }
     * ```
     */
    mergeCells(range: ISlideTableCellRange): boolean;
    /**
     * Unmerges the merged range containing one cell.
     *
     * @param row Zero-based row inside the merged range.
     * @param column Zero-based column inside the merged range.
     * @returns `true` when the command succeeds or the cell is already unmerged.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.mergeCells({ startRow: 0, endRow: 0, startColumn: 0, endColumn: 1 }) ||
     *   !table.unmergeCell(0, 0)) throw new Error('Cannot unmerge cells');
     * ```
     */
    unmergeCell(row: number, column: number): boolean;
    /**
     * Removes the Board table host element and its table resource.
     *
     * @returns `true` when the removal command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const table = board.insertTable({ left: 80, top: 80, rows: 3, columns: 3 });
     * if (!table || !table.remove()) throw new Error('Cannot remove table');
     * ```
     */
    remove(): boolean;
    private _getElement;
    private _executeWithElement;
    private _execute;
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard extends IFBoardTableMixin {
    }
}
