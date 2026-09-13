import type { IDocsTableTrigger, IDocsTableTriggerRect } from './docs-table-trigger-model';
export interface IDocsTableMoveDragState {
    trigger: IDocsTableTrigger;
    startX: number;
    startY: number;
    tableRect: IDocsTableTriggerRect;
}
export interface IDocsTableMoveDragPreview {
    deltaX: number;
    deltaY: number;
    rect: IDocsTableTriggerRect;
}
export declare function buildMoveDragState(trigger: IDocsTableTrigger, startX: number, startY: number, tableRect: IDocsTableTriggerRect): IDocsTableMoveDragState;
export declare function buildMoveDragPreview(state: IDocsTableMoveDragState, x: number, y: number): IDocsTableMoveDragPreview;
