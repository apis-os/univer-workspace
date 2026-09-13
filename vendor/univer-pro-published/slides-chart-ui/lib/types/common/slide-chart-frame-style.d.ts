import type { ChartStyle } from '@univerjs-pro/engine-chart';
import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
export declare function isVisibleSlideChartStroke(stroke: IShapeLineStyle | undefined): stroke is IShapeLineStyle & {
    color: string;
    width: number;
};
/** Resolves a non-destructive chart-style override without rewriting the persisted Slide stroke. */
export declare function resolveSlideChartStroke(chartStyle: ChartStyle | null | undefined, hostStroke?: IShapeLineStyle): IShapeLineStyle | undefined;
