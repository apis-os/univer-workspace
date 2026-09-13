import type { IChartDataSeries, IWaterfallPointRole } from '../../../../types';
import { ChartWaterfallPointRole } from '../../../../enum';
export declare enum WaterfallPointClassification {
    Increase = "increase",
    Decrease = "decrease",
    Total = "total"
}
export interface IResolvedWaterfallPoint {
    seriesIndex: number;
    dataPointIndex: number;
    categoryIndex: number;
    role: ChartWaterfallPointRole;
    classification: WaterfallPointClassification;
    value: number;
    start: number;
    end: number;
}
export interface IResolvedWaterfallConnector {
    from: {
        categoryIndex: number;
        value: number;
    };
    to: {
        categoryIndex: number;
        value: number;
    };
}
export interface IResolvedWaterfallLayout {
    points: IResolvedWaterfallPoint[];
    connectors: IResolvedWaterfallConnector[];
    cumulative: number;
}
/** Resolves persisted Waterfall semantics without renderer or theme concerns. */
export declare function resolveArrangementWaterfallLayout(series: IChartDataSeries[], roles?: readonly IWaterfallPointRole[]): IResolvedWaterfallLayout;
