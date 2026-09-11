import type { SlideModel, SlidePage } from '@univerjs-pro/slides';
import type { IDisposable } from '@univerjs/core';
import type { ISlidePrintDrawingMap } from '../views/slide-print-drawing-map';
export interface ISlidePrintDrawingTransformContext {
    slideModel: SlideModel;
    slidePage: SlidePage;
}
export type SlidePrintDrawingTransformer = (drawingMap: ISlidePrintDrawingMap, context: ISlidePrintDrawingTransformContext) => ISlidePrintDrawingMap;
export declare class SlidePrintDrawingTransformService {
    private readonly _transformers;
    register(transformer: SlidePrintDrawingTransformer): IDisposable;
    transform(drawingMap: ISlidePrintDrawingMap, context: ISlidePrintDrawingTransformContext): ISlidePrintDrawingMap;
}
