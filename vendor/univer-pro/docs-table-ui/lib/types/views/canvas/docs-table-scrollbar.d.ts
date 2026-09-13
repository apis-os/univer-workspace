import type { UniverRenderingContext } from '@univerjs/engine-render';
import type { IDocsTableTriggerRect } from './docs-table-trigger-model';
export interface IDocsTableScrollbarInput {
    appearance?: 'active' | 'hover' | 'idle';
    contentWidth: number;
    leadingInsetLeft?: number;
    overflowWidthThreshold?: number;
    scrollLeft: number;
    tableRect: IDocsTableTriggerRect;
    trailingInsetRight?: number;
    viewportLeft?: number;
    viewportWidth: number;
    zoom?: number;
}
export interface IDocsTableScrollbarGeometry {
    appearance: 'active' | 'hover' | 'idle';
    contentWidth: number;
    leadingInsetLeft: number;
    maxScrollLeft: number;
    thumb: IDocsTableTriggerRect;
    track: IDocsTableTriggerRect;
    viewportLeft: number;
    viewportWidth: number;
}
export declare function getDocsTableScrollbarGeometry(input: IDocsTableScrollbarInput): IDocsTableScrollbarGeometry | null;
export declare function hitTestDocsTableScrollbar(geometry: IDocsTableScrollbarGeometry, x: number, y: number): 'thumb' | 'track' | null;
export declare function isPointInDocsTableScrollbarInteractionZone(geometry: IDocsTableScrollbarGeometry, tableBottom: number, x: number, y: number): boolean;
export declare function drawDocsTableScrollbar(ctx: UniverRenderingContext, geometry: IDocsTableScrollbarGeometry): void;
