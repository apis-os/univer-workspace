import type { IInkPoint } from '@univerjs-pro/ink';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardInkToolCursorObjectState {
    point: IInkPoint | null;
    radius: number;
    color: string;
    visible: boolean;
    solid: boolean;
}
export declare const BOARD_INK_TOOL_CURSOR_OBJECT_KEY = "board-ink-tool-cursor-object";
export declare const BOARD_INK_TOOL_CURSOR_OBJECT_LAYER_INDEX: number;
export declare class BoardInkToolCursorObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardInkToolCursorObjectState>);
    updateState(state?: Partial<IBoardInkToolCursorObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
