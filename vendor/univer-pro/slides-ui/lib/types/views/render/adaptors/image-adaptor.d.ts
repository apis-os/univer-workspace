import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { IImageIoService } from '@univerjs/core';
import { SlideImageShapeClipService } from '../../../services/slide-image-shape-clip.service';
import { ObjectAdaptor } from '../adaptor';
/**
 * Image rendering adaptor.
 */
export declare class ImageObjectAdaptor extends ObjectAdaptor {
    private readonly _imageClipService;
    private readonly _imageIoService;
    zIndex: number;
    private static readonly _globalImageNativeCache;
    private static readonly _globalImageLoadingCache;
    constructor(_imageClipService: SlideImageShapeClipService, _imageIoService: IImageIoService);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
    private _getOrCreateImageLoadingPromise;
}
