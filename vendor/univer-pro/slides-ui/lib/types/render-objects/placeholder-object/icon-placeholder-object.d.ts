import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { ISlidePlaceholderRenderProps } from './base-placeholder-object';
import { SlidePlaceholderBaseObject } from './base-placeholder-object';
/**
 * Placeholder object for media placeholders with optional 0..N icons.
 */
export declare class SlidePlaceholderIconObject extends SlidePlaceholderBaseObject {
    private static readonly _iconSvgByName;
    private static readonly _iconImageCache;
    constructor(key: string, props: ISlidePlaceholderRenderProps);
    resolveIconKeyByCoord(coord: Vector2): string | null;
    private _resolveIconLayout;
    private _drawIconCell;
    private _resolveIconLabel;
    private _resolveIconComponentName;
    private _drawIconImage;
    private _getOrCreateIconImage;
    _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
}
