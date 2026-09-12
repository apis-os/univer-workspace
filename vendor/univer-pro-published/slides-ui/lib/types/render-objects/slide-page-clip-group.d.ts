import type { IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { Group } from '@univerjs/engine-render';
export interface ISlidePageClipRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
/**
 * Runtime-only marker for the visible slide page clip rect.
 *
 * Slide drawings are intentionally not added as children of this object. Keeping
 * them as top-level scene objects preserves transformer selection geometry.
 */
export declare class SlidePageClipGroup extends Group {
    private _clipRect;
    constructor(key: string, clipRect: ISlidePageClipRect);
    getClipRect(): ISlidePageClipRect;
    updateClipRect(clipRect: ISlidePageClipRect): void;
    render(_ctx: UniverRenderingContext, _bounds: IViewportInfo): void;
}
