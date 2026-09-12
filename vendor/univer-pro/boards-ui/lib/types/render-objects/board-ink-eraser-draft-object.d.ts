import type { IInkPoint } from '@univerjs-pro/ink';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardInkEraserDraftObjectState {
    points: IInkPoint[];
    radius: number;
    color: string;
    visible: boolean;
}
export declare const BOARD_INK_ERASER_DRAFT_OBJECT_KEY = "board-ink-eraser-draft-object";
export declare const BOARD_INK_ERASER_DRAFT_OBJECT_LAYER_INDEX: number;
export declare class BoardInkEraserDraftObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardInkEraserDraftObjectState>);
    updateState(state?: Partial<IBoardInkEraserDraftObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
