import type { ISlideConnectionSite } from '@univerjs-pro/slides';
import type { IGlowEffect, IImageIoService, IShadowEffect } from '@univerjs/core';
import type { IImageProps, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { SlidePresentationBackgroundGraphicFitEnum } from '@univerjs-pro/slides';
import { ImageSourceType } from '@univerjs/core';
import { Image } from '@univerjs/engine-render';
export interface ISlideImageObjectProps extends IImageProps {
    backgroundImageFit?: SlidePresentationBackgroundGraphicFitEnum;
    outerShadow?: IShadowEffect;
    glow?: IGlowEffect;
}
/**
 * Slide image runtime object.
 *
 * Kept as a dedicated class so all slide drawing element kinds use explicit
 * slide-layer objects. Engine `Image` already uses center-origin internal draw
 * with top-left external geometry, which matches slide shape/text strategy.
 */
export declare class SlideImageObject extends Image {
    private readonly _backgroundImageFit?;
    private readonly _outerShadow?;
    private readonly _glow?;
    constructor(key: string, props: ISlideImageObjectProps);
    /** Rectangle-like default connection sites: top/right/bottom/left. */
    getConnectionSites(): ISlideConnectionSite[];
    loadSource(source: string, imageSourceType: ImageSourceType, imageIoService: IImageIoService, onReady?: () => void): Promise<void>;
    setNativeImage(native: HTMLImageElement): void;
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawPictureContent;
    private _drawPictureStroke;
    private _drawPictureEffects;
    private _createPictureEffectSource;
    private _tracePicturePath;
    private _applyResolvedSource;
}
