import { Disposable } from '@univerjs/core';
export interface IDocsTableViewportState {
    contentWidth: number;
    isDraggingScrollbar: boolean;
    leadingInsetLeft: number;
    overflowWidthThreshold: number;
    scrollLeft: number;
    trailingInsetRight: number;
    viewportLeft: number;
    viewportWidth: number;
}
export interface IDocsTableWheelInput {
    ctrlKey?: boolean;
    deltaX: number;
    deltaY: number;
    metaKey?: boolean;
    shiftKey: boolean;
    zoom?: number;
}
export declare class DocsTableViewportService extends Disposable {
    private readonly _states;
    getState(unitId: string, tableId: string): IDocsTableViewportState | undefined;
    setViewport(unitId: string, tableId: string, viewport: Pick<IDocsTableViewportState, 'contentWidth' | 'viewportWidth'> & Partial<Pick<IDocsTableViewportState, 'leadingInsetLeft' | 'overflowWidthThreshold' | 'trailingInsetRight' | 'viewportLeft'>>): IDocsTableViewportState;
    setScrollLeft(unitId: string, tableId: string, scrollLeft: number): number;
    toContentX(unitId: string, tableId: string, viewportX: number): number;
    toViewportX(unitId: string, tableId: string, contentX: number): number;
    ensureContentRangeVisible(unitId: string, tableId: string, left: number, right: number): number;
    ensureColumnRangeVisible(unitId: string, tableId: string, columnLeft: number, columnRight: number): number;
    applyWheel(unitId: string, tableId: string, wheel: IDocsTableWheelInput): boolean;
    scrollByScrollbarTravel(unitId: string, tableId: string, travelDelta: number, availableTravel: number): number;
    scrollByDragEdge(unitId: string, tableId: string, viewportX: number, edgeSize: number, maxStep: number): boolean;
    clear(unitId: string, tableId: string): void;
    private _clamp;
    private _getVirtualContentWidth;
    private _getMaxScrollLeft;
    private _canScrollHorizontally;
    private _key;
}
