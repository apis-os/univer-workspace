import type { ISlideImageElement } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
import { SlideDrawingBase } from './slide-drawing-base';
/**
 * Runtime drawing wrapper for image elements ({@link ISlideImageElement}).
 *
 * NOTE: Image rendering will be reimplemented in a dedicated layer.
 * This class provides the data-model interface only.
 */
export declare class SlideImageDrawing extends SlideDrawingBase<ISlideImageElement> {
    readonly elementType = PageElementTypeEnum.Image;
    getSource(): string;
    getSourceType(): ISlideImageElement['imageSourceType'];
    setSource(source: string, imageSourceType?: ISlideImageElement['imageSourceType']): void;
    getCrop(): ISlideImageElement['crop'];
    setCrop(crop: ISlideImageElement['crop']): void;
}
