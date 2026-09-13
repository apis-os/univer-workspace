import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface ISlideAlignmentGuideLine {
    orientation: 'horizontal' | 'vertical';
    position: number;
    start: number;
    end: number;
}
export declare const SLIDE_ALIGNMENT_GUIDE_OBJECT_KEY = "slide-alignment-guide-object";
export declare const SLIDE_ALIGNMENT_GUIDE_LAYER_INDEX = 10000;
export declare class SlideAlignmentGuideObject extends BaseObject {
    private _guides;
    private _zoomRatio;
    private _stroke;
    constructor();
    updateState(guides: readonly ISlideAlignmentGuideLine[], zoomRatio: number, stroke: string): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
