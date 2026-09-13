import type { ISlideTableCellRange } from '@univerjs-pro/slides-table';
import { Disposable } from '@univerjs/core';
export type SlideTableSelectionKind = 'none' | 'table' | 'cell' | 'range' | 'row' | 'column' | 'text';
export interface ISlideTableSelectionBase {
    unitId: string;
    subUnitId: string;
    elementId: string;
    tableId: string;
}
export interface ISlideTableSelection extends ISlideTableSelectionBase {
    kind: SlideTableSelectionKind;
    anchor?: {
        row: number;
        column: number;
    };
    focus?: {
        row: number;
        column: number;
    };
    ranges: ISlideTableCellRange[];
}
export interface ISelectSlideTableCellParams extends ISlideTableSelectionBase {
    row: number;
    column: number;
}
export interface ISelectSlideTableRangeParams extends ISlideTableSelectionBase, ISlideTableCellRange {
}
export interface ISelectSlideTableRowsParams extends ISlideTableSelectionBase {
    startRow: number;
    endRow: number;
    columnCount: number;
}
export interface ISelectSlideTableColumnsParams extends ISlideTableSelectionBase {
    startColumn: number;
    endColumn: number;
    rowCount: number;
}
export interface ISelectSlideTableParams extends ISlideTableSelectionBase {
    rowCount: number;
    columnCount: number;
}
export declare class SlideTableSelectionService extends Disposable {
    private readonly _selection$;
    readonly selection$: import("rxjs").Observable<ISlideTableSelection | null>;
    private _selection;
    private _tableInternalInteractionUntil;
    markTableInternalInteraction(durationMs?: number, now?: number): void;
    isTableInternalInteractionActive(now?: number): boolean;
    getSelection(): ISlideTableSelection | null;
    clear(): void;
    selectCell(params: ISelectSlideTableCellParams): ISlideTableSelection;
    selectRange(params: ISelectSlideTableRangeParams): ISlideTableSelection;
    selectRows(params: ISelectSlideTableRowsParams): ISlideTableSelection;
    selectColumns(params: ISelectSlideTableColumnsParams): ISlideTableSelection;
    selectTable(params: ISelectSlideTableParams): ISlideTableSelection;
    enterTextMode(params: ISelectSlideTableCellParams): ISlideTableSelection;
    dispose(): void;
    private _buildSelection;
}
