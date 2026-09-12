export type SlideTableTriggerKind = 'table-handle' | 'row-header' | 'column-header' | 'row-insert-dot' | 'column-insert-dot' | 'resize-row' | 'resize-column';
export interface ISlideTableTriggerRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ISlideTableTrigger {
    kind: SlideTableTriggerKind;
    rect: ISlideTableTriggerRect;
    tableId?: string;
    row?: number;
    column?: number;
    insertIndex?: number;
}
export interface ISlideTableMergedCellRange {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export interface ISlideTableTriggerModelInput {
    tableId?: string;
    tableWidth: number;
    tableHeight: number;
    rowHeights: number[];
    rowIndices?: number[];
    columnWidths: number[];
    columnIndices?: number[];
    mergedCells?: ISlideTableMergedCellRange[];
    zoom?: number;
}
export declare function buildSlideTableTriggers(input: ISlideTableTriggerModelInput): ISlideTableTrigger[];
export declare function hitTestSlideTableTrigger(triggers: ISlideTableTrigger[], x: number, y: number): ISlideTableTrigger | null;
export declare function hitTestSlideTableFloatingControl(triggers: ISlideTableTrigger[], x: number, y: number, zoom?: number): ISlideTableTrigger | null;
export declare function isSlideTableInsertTriggerKind(kind: SlideTableTriggerKind): boolean;
