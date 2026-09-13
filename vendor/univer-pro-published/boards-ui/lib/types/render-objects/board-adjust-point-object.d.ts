import type { IObjectFullState, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
export declare const BOARD_ADJ_HANDLE_SIZE = 4;
export interface IBoardAdjustPointObjectProps extends IObjectFullState {
    adjName: string;
    fill?: string;
    handleShape?: 'diamond' | 'circle';
    stroke?: string;
    strokeWidth?: number;
}
export declare class BoardAdjustPointObject extends Rect {
    readonly adjName: string;
    private readonly _handleShape;
    private _handleStyle;
    constructor(key: string, props: IBoardAdjustPointObjectProps);
    updateStyle(style: {
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    }): void;
    getHandleStyle(): {
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    };
    render(ctx: UniverRenderingContext, bounds: IViewportInfo): this;
}
