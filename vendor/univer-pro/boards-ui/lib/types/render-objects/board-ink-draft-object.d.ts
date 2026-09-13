import type { IInkSourceModel, IInkStyle } from '@univerjs-pro/ink';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardInkDraftObjectState {
    model: IInkSourceModel | null;
    style: IInkStyle;
}
export declare const BOARD_INK_DRAFT_OBJECT_KEY = "board-ink-draft-object";
export declare const BOARD_INK_DRAFT_OBJECT_LAYER_INDEX: 3;
export declare class BoardInkDraftObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardInkDraftObjectState>);
    updateState(state?: Partial<IBoardInkDraftObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
