import type { IChartElementHit, ParetoSeriesPart, WaterfallSeriesTypeEnum } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { ChartViewStateName } from '../services/chart-view-state';
export declare enum ChartMarkDirectEditKind {
    SeriesStyle = "seriesStyle",
    PieStyle = "pieStyle",
    PieSliceStyle = "pieSliceStyle",
    PieAggregateStyle = "pieAggregateStyle",
    PieConnectorStyle = "pieConnectorStyle",
    ParetoStyle = "paretoStyle",
    WaterfallStyle = "waterfallStyle"
}
export declare enum ChartMarkPanel {
    PieStyle = "pieStyle",
    ParetoBarSeries = "paretoBarSeries",
    ParetoLineSeries = "paretoLineSeries",
    WaterfallSeries = "waterfallSeries",
    Relation = "relation",
    WordCloud = "wordCloud",
    Data = "data"
}
export type ChartMarkDirectEditTarget = {
    kind: `${ChartMarkDirectEditKind.SeriesStyle}`;
    seriesId: string;
    seriesIndex: number;
} | {
    kind: `${ChartMarkDirectEditKind.PieStyle}`;
} | {
    kind: `${ChartMarkDirectEditKind.PieSliceStyle}`;
    sourcePointIndex: number;
} | {
    kind: `${ChartMarkDirectEditKind.PieAggregateStyle}`;
} | {
    kind: `${ChartMarkDirectEditKind.PieConnectorStyle}`;
} | {
    kind: `${ChartMarkDirectEditKind.ParetoStyle}`;
    part: `${ParetoSeriesPart}`;
} | {
    kind: `${ChartMarkDirectEditKind.WaterfallStyle}`;
    seriesId: string;
    seriesIndex?: number;
    part: Exclude<keyof typeof WaterfallSeriesTypeEnum, 'base'>;
};
export type ChartMarkPanelTarget = `${ChartMarkPanel}`;
export declare enum ChartEditPanelTab {
    Style = "style",
    Data = "data"
}
export declare enum ChartEditPanelSection {
    ChartStyle = "chartStyle",
    ChartAndAxisTitles = "chartAndAxisTitles",
    Legend = "legend",
    HorizontalAxis = "horizontalAxis",
    VerticalAxis = "verticalAxis",
    RightVerticalAxis = "rightVerticalAxis",
    Series = "series",
    PieStyle = "pieStyle",
    ParetoBarSeries = "paretoBarSeries",
    ParetoLineSeries = "paretoLineSeries",
    WaterfallSeries = "waterfallSeries",
    Relation = "relation",
    WordCloud = "wordCloud",
    Radar = "radar",
    Funnel = "funnel",
    Heatmap = "heatmap",
    LineAndArea = "lineAndArea",
    GridlinesAndTicks = "gridlinesAndTicks",
    IndicatorLine = "indicatorLine",
    Trendline = "trendline",
    Candlestick = "candlestick",
    Histogram = "histogram",
    Treemap = "treemap",
    Sunburst = "sunburst",
    Gauge = "gauge",
    Chord = "chord"
}
export declare const ChartTitleKey: {
    readonly Title: "title";
    readonly Subtitle: "subtitle";
    readonly XAxisTitle: "xAxisTitle";
    readonly YAxisTitle: "yAxisTitle";
    readonly RightYAxisTitle: "rightYAxisTitle";
};
export type ChartTitleKey = typeof ChartTitleKey[keyof typeof ChartTitleKey];
export declare const ChartAxisId: {
    readonly XAxis: "xAxis";
    readonly YAxis: "yAxis";
    readonly RightYAxis: "rightYAxis";
};
export type ChartAxisId = typeof ChartAxisId[keyof typeof ChartAxisId];
export type ChartElementConfigTarget = {
    scope: 'chartArea';
} | {
    scope: 'title';
    titleKey: typeof ChartTitleKey.Title | typeof ChartTitleKey.Subtitle;
} | {
    scope: 'axisTitle';
    axisId: ChartAxisId;
    titleKey: typeof ChartTitleKey.XAxisTitle | typeof ChartTitleKey.YAxisTitle | typeof ChartTitleKey.RightYAxisTitle;
} | {
    scope: 'axis';
    axisId: ChartAxisId;
} | {
    scope: 'gridLine';
    axisId: ChartAxisId;
} | {
    scope: 'tick';
    axisId: ChartAxisId;
} | {
    scope: 'legend';
    legendIndex?: number;
    legendName?: string;
} | {
    scope: 'mark';
    seriesId?: string;
    seriesIndex?: number;
    dataIndex?: number;
    directEdit?: ChartMarkDirectEditTarget;
    panel?: ChartMarkPanelTarget;
} | {
    scope: 'series';
    seriesId: string;
    seriesIndex: number;
} | {
    scope: 'dataPoint';
    seriesId: string;
    seriesIndex: number;
    dataIndex: number;
} | {
    scope: 'dataLabel';
    seriesId?: string;
    seriesIndex?: number;
    dataIndex?: number;
};
export interface IChartElementFloatMenuContext {
    unitId: string;
    subUnitId?: string;
    chartId: string;
    drawingId?: string;
    element: IChartElementHit;
    target: ChartElementConfigTarget;
    adapterKey: string;
}
export interface IChartElementFloatMenuObservable<T> {
    subscribe(next: (value: T) => void): {
        unsubscribe(): void;
    };
}
export interface IChartElementFloatMenuAdapter {
    getState<T>(context: IChartElementFloatMenuContext, key: ChartViewStateName): IChartElementFloatMenuObservable<T | undefined> | undefined;
    setState<T>(context: IChartElementFloatMenuContext, key: ChartViewStateName, patch: T): void;
    observeSizeOptions?(context: IChartElementFloatMenuContext, baseOptions: readonly number[]): Observable<readonly number[]>;
    close?(): void;
    openFullPanel?(context: IChartElementFloatMenuContext): void;
}
export interface IChartElementFloatMenuAdapterRegistry {
    register(adapterKey: string, adapter: IChartElementFloatMenuAdapter): IDisposable;
    get(adapterKey: string): IChartElementFloatMenuAdapter | undefined;
}
export declare function resolveChartElementConfigTarget(hit: IChartElementHit): ChartElementConfigTarget | undefined;
