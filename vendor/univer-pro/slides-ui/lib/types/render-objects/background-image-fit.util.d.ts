import type { SlidePresentationBackgroundGraphicFitWithoutRepeatEnum } from '@univerjs-pro/slides';
export interface IBackgroundImageDrawRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBackgroundImageEdgeRect {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
export interface IBackgroundImageSourceRect extends IBackgroundImageDrawRect {
}
export declare function resolveBackgroundImageSourceRect(imageWidth: number, imageHeight: number, srcRect?: IBackgroundImageEdgeRect): IBackgroundImageSourceRect;
export declare function resolveBackgroundImageDrawRect(frameWidth: number, frameHeight: number, imageWidth: number, imageHeight: number, fit: SlidePresentationBackgroundGraphicFitWithoutRepeatEnum, stretchFillRect?: IBackgroundImageEdgeRect): IBackgroundImageDrawRect;
