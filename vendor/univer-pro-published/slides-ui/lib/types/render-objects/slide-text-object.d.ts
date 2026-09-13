import type { LocaleService } from '@univerjs/core';
import type { ITextProps, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { Text } from '@univerjs/engine-render';
export interface ISlideTextObjectProps extends ITextProps {
    localeService?: LocaleService;
}
/**
 * Slide text runtime object.
 *
 * External geometry keeps engine default semantics (`left/top` = top-left),
 * while actual text drawing is done in a center-origin local coordinate system
 * so all slide drawing objects share the same render-origin strategy.
 */
export declare class SlideTextObject extends Text {
    isDrawingObject: boolean;
    constructor(key: string, props: ISlideTextObjectProps);
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    protected _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
}
