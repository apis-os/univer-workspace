import type { IInkPoint } from '@univerjs-pro/ink';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardInkStageActionButtonRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardInkStageActionBoundsRect extends IBoardInkStageActionButtonRect {
    rotation?: number;
}
export interface IBoardInkStageActionButtonObjectState {
    rect: IBoardInkStageActionButtonRect | null;
    boundsRect: IBoardInkStageActionBoundsRect | null;
    label: string;
    hovered: boolean;
    visible: boolean;
}
export declare const BOARD_INK_STAGE_ACTION_BUTTON_OBJECT_KEY = "board-ink-stage-action-button-object";
export declare const BOARD_INK_STAGE_ACTION_BUTTON_OBJECT_LAYER_INDEX: number;
export declare function getBoardInkStageActionButtonRect(bounds: IBoardInkStageActionBoundsRect, label: string): IBoardInkStageActionButtonRect;
export declare function isPointInBoardInkStageActionButton(rect: IBoardInkStageActionButtonRect | null, point: IInkPoint): boolean;
export declare class BoardInkStageActionButtonObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardInkStageActionButtonObjectState>);
    updateState(state?: Partial<IBoardInkStageActionButtonObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _renderBounds;
    private _renderButton;
}
