import { Disposable } from '@univerjs/core';
export declare const IBaseDragService: import("@wendellhu/redi").IdentifierDecorator<BaseDragService>;
export type BaseDragState = {
    type: 'record';
    recordId: string;
} | {
    type: 'field';
    fieldId: string;
} | {
    type: 'view';
    viewId: string;
} | null;
export declare class BaseDragService extends Disposable {
    private _state;
    startDrag(state: Exclude<BaseDragState, null>): void;
    updateDrag(state: BaseDragState): void;
    endDrag(): void;
    getDragState(): BaseDragState;
}
