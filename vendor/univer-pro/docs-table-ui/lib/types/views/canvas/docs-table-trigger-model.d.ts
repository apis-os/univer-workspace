export type DocsTableStructuralTriggerKind = 'row-header' | 'column-header' | 'row-insert-dot' | 'column-insert-dot';
export type DocsTableTriggerKind = 'table-select' | DocsTableStructuralTriggerKind | 'resize-row' | 'resize-column';
export type DocsTableInsertPosition = 'above' | 'below' | 'left' | 'right';
export interface IDocsTableTriggerRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IDocsTableTrigger {
    kind: DocsTableTriggerKind;
    rect: IDocsTableTriggerRect;
    tableId?: string;
    row?: number;
    column?: number;
    position?: DocsTableInsertPosition;
}
export interface IDocsTableMergedCellRange {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export interface IDocsTableViewportProjection {
    contentWidth: number;
    leadingInsetLeft?: number;
    scrollLeft: number;
    viewportLeft?: number;
    viewportWidth: number;
}
export interface IDocsTableTriggerModelInput {
    tableId?: string;
    tableRect: IDocsTableTriggerRect;
    rowHeights: number[];
    rowIndices?: number[];
    columnWidths: number[];
    columnIndices?: number[];
    hoverColumn?: number | null;
    hoverRow?: number | null;
    hoverCell?: {
        column: number;
        row: number;
    } | null;
    mergedCells?: IDocsTableMergedCellRange[];
    viewport?: IDocsTableViewportProjection;
    zoom?: number;
}
export declare const DOCS_TABLE_HEADER_LANE_THICKNESS = 10;
export declare const DOCS_TABLE_INSERT_LANE_THICKNESS = 6;
export declare const DOCS_TABLE_ROW_CONTROL_GUTTER: number;
export declare const DOCS_TABLE_COLUMN_CONTROL_GUTTER: number;
export declare function buildDocsTableTriggers(input: IDocsTableTriggerModelInput): IDocsTableTrigger[];
export declare function isDocsTableInsertTriggerKind(kind: DocsTableTriggerKind): boolean;
export declare function hitTestDocsTableTrigger(triggers: IDocsTableTrigger[], x: number, y: number): IDocsTableTrigger | null;
export declare function hitTestDocsTableFloatingControl(triggers: IDocsTableTrigger[], x: number, y: number): IDocsTableTrigger | null;
export declare function hitTestDocsTableInsertTrigger(triggers: IDocsTableTrigger[], x: number, y: number): IDocsTableTrigger | null;
export declare function isPointInDocsTableFloatingControl(triggers: IDocsTableTrigger[], x: number, y: number): boolean;
