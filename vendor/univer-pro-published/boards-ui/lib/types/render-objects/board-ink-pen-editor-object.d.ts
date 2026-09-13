import type { IInkPenHandleRef, IInkPenModel, IInkPenPathHit, IInkPoint, IInkStyle } from '@univerjs-pro/ink';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardInkPenEditorObjectState {
    model: IInkPenModel | null;
    style: IInkStyle;
    previewPoint?: IInkPoint | null;
    activeHandle?: IInkPenHandleRef | null;
    hoverHandle?: IInkPenHandleRef | null;
    hoverInsert?: IInkPenPathHit | null;
    closeAnchorId?: string | null;
    exitButtonVisible?: boolean;
    exitButtonHovered?: boolean;
    exitButtonLabel?: string;
}
export declare const BOARD_INK_PEN_EDITOR_OBJECT_KEY = "board-ink-pen-editor-object";
export declare const BOARD_INK_PEN_EDITOR_OBJECT_LAYER_INDEX: number;
export interface IBoardInkPenEditorExitButtonRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function getBoardInkPenEditorExitButtonRect(model: IInkPenModel, label: string): IBoardInkPenEditorExitButtonRect;
export declare function isPointInBoardInkPenEditorExitButton(model: IInkPenModel, label: string, point: IInkPoint): boolean;
export declare class BoardInkPenEditorObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardInkPenEditorObjectState>);
    updateState(state?: Partial<IBoardInkPenEditorObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _renderPath;
    private _renderControlLines;
    private _renderHandles;
    private _renderAnchor;
    private _renderControlHandle;
    private _renderInsertPreview;
    private _renderExitButton;
}
