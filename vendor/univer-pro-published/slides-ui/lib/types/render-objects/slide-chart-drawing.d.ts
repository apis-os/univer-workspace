import type { ISlideChartElement } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
import { SlideDrawingBase } from './slide-drawing-base';
/**
 * Runtime drawing wrapper for chart elements ({@link ISlideChartElement}).
 *
 * The actual chart data lives in a separate chart model referenced by `chartId`.
 * This drawing only owns the frame (transform, visibility, lock) and the chart ID.
 */
export declare class SlideChartDrawing extends SlideDrawingBase<ISlideChartElement> {
    readonly elementType = PageElementTypeEnum.Chart;
    getChartId(): string;
}
