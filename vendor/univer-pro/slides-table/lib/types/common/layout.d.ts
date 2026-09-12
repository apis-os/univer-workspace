import type { ISlideTableSnapshot } from '../types';
export type SlideTableMovePosition = 'before' | 'after';
export interface ISlideTableRowMoveRange {
    startRow: number;
    endRow: number;
}
export interface ISlideTableColumnMoveRange {
    startColumn: number;
    endColumn: number;
}
export interface ISlideTableRowMoveTarget {
    row: number;
    position: SlideTableMovePosition;
}
export interface ISlideTableColumnMoveTarget {
    column: number;
    position: SlideTableMovePosition;
}
export declare function insertSlideTableRows(table: ISlideTableSnapshot, rowIndex: number, count: number, height?: number): ISlideTableSnapshot;
export declare function insertSlideTableColumns(table: ISlideTableSnapshot, columnIndex: number, count: number, width?: number): ISlideTableSnapshot;
export declare function deleteSlideTableRows(table: ISlideTableSnapshot, startRow: number, endRow: number): ISlideTableSnapshot;
export declare function deleteSlideTableColumns(table: ISlideTableSnapshot, startColumn: number, endColumn: number): ISlideTableSnapshot;
export declare function canMoveSlideTableRows(table: ISlideTableSnapshot, range: ISlideTableRowMoveRange, target: ISlideTableRowMoveTarget): boolean;
export declare function canMoveSlideTableColumns(table: ISlideTableSnapshot, range: ISlideTableColumnMoveRange, target: ISlideTableColumnMoveTarget): boolean;
export declare function moveSlideTableRows(table: ISlideTableSnapshot, startRow: number, endRow: number, targetRow: number, position: SlideTableMovePosition): ISlideTableSnapshot;
export declare function moveSlideTableColumns(table: ISlideTableSnapshot, startColumn: number, endColumn: number, targetColumn: number, position: SlideTableMovePosition): ISlideTableSnapshot;
export declare function resizeSlideTableRows(table: ISlideTableSnapshot, startRow: number, endRow: number, height: number): ISlideTableSnapshot;
export declare function resizeSlideTableColumns(table: ISlideTableSnapshot, startColumn: number, endColumn: number, width: number): ISlideTableSnapshot;
export declare function resizeSlideTableRowBoundary(table: ISlideTableSnapshot, boundaryRow: number, delta: number, minHeight?: number): ISlideTableSnapshot;
export declare function resizeSlideTableColumnBoundary(table: ISlideTableSnapshot, boundaryColumn: number, delta: number, minWidth?: number): ISlideTableSnapshot;
export declare function resizeSlideTableGrid(table: ISlideTableSnapshot, rowCount: number, columnCount: number): ISlideTableSnapshot;
export declare function getSlideTableColumnLefts(table: ISlideTableSnapshot): number[];
export declare function getSlideTableTotalWidth(table: ISlideTableSnapshot): number;
export declare function getSlideTableTotalHeight(table: ISlideTableSnapshot): number;
export declare function resolveSlideTableScaledInsertSizeDelta(beforeTable: ISlideTableSnapshot, afterTable: ISlideTableSnapshot, renderedSize: number | undefined, axis: 'row' | 'column'): number;
export declare function getSlideTableRowTops(table: ISlideTableSnapshot): number[];
