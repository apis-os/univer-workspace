import type { IDocsColumnResizeHandle } from './resize-handle';
export interface IDocsColumnResizePoint {
    x: number;
    y: number;
}
export interface IDocsColumnResizeDragState {
    handle: IDocsColumnResizeHandle;
    startX: number;
}
export declare function hitTestColumnResizeHandle(handles: IDocsColumnResizeHandle[], x: number, y: number, hitWidth?: number): IDocsColumnResizeHandle | null;
export declare function createColumnResizeDragState(handle: IDocsColumnResizeHandle, point: IDocsColumnResizePoint): IDocsColumnResizeDragState;
export declare function getColumnResizeDragDelta(state: IDocsColumnResizeDragState, point: IDocsColumnResizePoint): number;
