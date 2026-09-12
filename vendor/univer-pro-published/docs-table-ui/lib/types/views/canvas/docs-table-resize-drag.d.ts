import type { IDocsTableTrigger } from './docs-table-trigger-model';
export interface IDocsTableResizeDragState {
    trigger: IDocsTableTrigger;
    startX: number;
    startY: number;
    initialSize: number;
    minSize: number;
}
export interface IDocsTableResizeDragPreview {
    row?: number;
    column?: number;
    height?: number;
    width?: number;
}
export declare function buildResizeDragState(trigger: IDocsTableTrigger, startX: number, startY: number, initialSize: number, minSize?: number): IDocsTableResizeDragState;
export declare function buildResizeDragPreview(state: IDocsTableResizeDragState, x: number, y: number): IDocsTableResizeDragPreview;
export declare function buildResizeDragReleasePreview(state: IDocsTableResizeDragState, preview: IDocsTableResizeDragPreview | null, point: {
    x: number;
    y: number;
} | null): IDocsTableResizeDragPreview | null;
