import type { ISlideDrawing, ISlideDrawingService, SlideModel, SlidePage } from '@univerjs-pro/slides';
export interface ISlidePrintDrawingMap {
    data: Record<string, ISlideDrawing>;
    order: string[];
}
export declare function resolveSlidePrintDrawingMap(slideDrawingService: ISlideDrawingService, slideModel: SlideModel, slidePage: SlidePage): ISlidePrintDrawingMap;
