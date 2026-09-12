import type { ISlideBackgroundData } from '@univerjs-pro/slides';
import type { IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { IImageIoService } from '@univerjs/core';
import { Rect } from '@univerjs/engine-render';
interface ISlidePageBackgroundObjectProps {
    left: number;
    top: number;
    width: number;
    height: number;
    background?: ISlideBackgroundData;
    evented?: boolean;
    zIndex?: number;
    requestRender?: () => void;
}
export declare class SlidePageBackgroundObject extends Rect<ISlidePageBackgroundObjectProps> {
    private readonly _imageIoService;
    private static readonly _imageNativeCache;
    private static readonly _imageLoadingCache;
    private _background?;
    private _native?;
    private readonly _requestRender?;
    constructor(key: string, props: ISlidePageBackgroundObjectProps, _imageIoService: IImageIoService);
    updateBackground(background?: ISlideBackgroundData): void;
    protected _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawFivePercentPattern;
    private _prepareImage;
    private _markImageReady;
    private _createImagePromise;
    private _drawImage;
    private _drawRepeatedImage;
    private _createGradient;
    private _drawShapePathGradient;
    private _addGradientStops;
    private _resolveGradientStops;
    private _interpolateGradientStopSegment;
    private _createPattern;
    private _withAlpha;
    private _normalizeColor;
}
export {};
