import type { PieSecondaryPlotType as PieSecondaryPlotTypeValue } from '@univerjs-pro/engine-chart';
import type { ReactNode } from 'react';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface IChartTypeOption<TLabel = ReactNode> {
    icon?: ReactNode;
    id?: string;
    label: TLabel;
    pieSecondaryPlotType?: PieSecondaryPlotTypeValue;
    value: ChartTypeBits;
}
export interface IChartSelectOption {
    chartType?: ChartTypeBits;
    label: ReactNode;
    pieSecondaryPlotType?: PieSecondaryPlotTypeValue;
    value: string;
}
export declare const CompositePieChartTypeOptionId: {
    readonly PieOfPie: "pieOfPie";
    readonly BarOfPie: "barOfPie";
};
export declare const CHART_TYPE_CATALOG: readonly [{
    readonly labelId: "line";
    readonly value: ChartTypeBits.Line;
    readonly iconName: "LineChartIcon";
}, {
    readonly labelId: "column";
    readonly value: ChartTypeBits.Column;
    readonly iconName: "ColumnChartIcon";
}, {
    readonly labelId: "columnStacked";
    readonly value: ChartTypeBits.ColumnStacked;
    readonly iconName: "ColumnChartIcon";
}, {
    readonly labelId: "columnPercentStacked";
    readonly value: ChartTypeBits.ColumnPercentStacked;
    readonly iconName: "ColumnChartIcon";
}, {
    readonly labelId: "bar";
    readonly value: ChartTypeBits.Bar;
    readonly iconName: "BarChartIcon";
}, {
    readonly labelId: "barStacked";
    readonly value: ChartTypeBits.BarStacked;
    readonly iconName: "BarChartIcon";
}, {
    readonly labelId: "barPercentStacked";
    readonly value: ChartTypeBits.BarPercentStacked;
    readonly iconName: "BarChartIcon";
}, {
    readonly labelId: "pie";
    readonly value: ChartTypeBits.Pie;
    readonly iconName: "PieChartIcon";
}, {
    readonly labelId: "donut";
    readonly value: ChartTypeBits.Doughnut;
    readonly iconName: "PieChartIcon";
}, {
    readonly id: "pieOfPie";
    readonly labelId: "pieOfPie";
    readonly value: ChartTypeBits.Pie;
    readonly pieSecondaryPlotType: "pie";
    readonly iconName: "PieChartIcon";
}, {
    readonly id: "barOfPie";
    readonly labelId: "barOfPie";
    readonly value: ChartTypeBits.Pie;
    readonly pieSecondaryPlotType: "bar";
    readonly iconName: "PieChartIcon";
}, {
    readonly labelId: "area";
    readonly value: ChartTypeBits.Area;
    readonly iconName: "AreaChartIcon";
}, {
    readonly labelId: "areaStacked";
    readonly value: ChartTypeBits.AreaStacked;
    readonly iconName: "AreaChartIcon";
}, {
    readonly labelId: "areaPercentStacked";
    readonly value: ChartTypeBits.AreaPercentStacked;
    readonly iconName: "AreaChartIcon";
}, {
    readonly labelId: "radar";
    readonly value: ChartTypeBits.Radar;
    readonly iconName: "RadarChartIcon";
}, {
    readonly labelId: "scatter";
    readonly value: ChartTypeBits.Scatter;
    readonly iconName: "ScatterChartIcon";
}, {
    readonly labelId: "combination";
    readonly value: ChartTypeBits.Combination;
    readonly iconName: "ComboChartIcon";
}, {
    readonly labelId: "wordCloud";
    readonly value: ChartTypeBits.WordCloud;
    readonly iconName: "CloudOutlineIcon";
}, {
    readonly labelId: "funnel";
    readonly value: ChartTypeBits.Funnel;
    readonly iconName: "FunnelIcon";
}, {
    readonly labelId: "bubble";
    readonly value: ChartTypeBits.Bubble;
    readonly iconName: "BubbleIcon";
}, {
    readonly labelId: "relation";
    readonly value: ChartTypeBits.Relation;
    readonly iconName: "RelationshipIcon";
}, {
    readonly labelId: "waterfall";
    readonly value: ChartTypeBits.Waterfall;
    readonly iconName: "WaterfallChartIcon";
}, {
    readonly labelId: "pareto";
    readonly value: ChartTypeBits.Pareto;
    readonly iconName: "ComboChartIcon";
}, {
    readonly labelId: "sankey";
    readonly value: ChartTypeBits.Sankey;
    readonly iconName: "SankeyIcon";
}, {
    readonly labelId: "heatmap";
    readonly value: ChartTypeBits.Heatmap;
    readonly iconName: "HeatmapIcon";
}, {
    readonly labelId: "boxplot";
    readonly value: ChartTypeBits.Boxplot;
    readonly iconName: "BoxplotIcon";
}, {
    readonly labelId: "candlestick";
    readonly value: ChartTypeBits.Candlestick;
    readonly iconName: "CandlestickChartIcon";
}, {
    readonly labelId: "histogram";
    readonly value: ChartTypeBits.Histogram;
    readonly iconName: "HistogramChartIcon";
}, {
    readonly labelId: "treemap";
    readonly value: ChartTypeBits.Treemap;
    readonly iconName: "TreemapChartIcon";
}, {
    readonly labelId: "sunburst";
    readonly value: ChartTypeBits.Sunburst;
    readonly iconName: "SunburstChartIcon";
}, {
    readonly labelId: "gauge";
    readonly value: ChartTypeBits.Gauge;
    readonly iconName: "GaugeChartIcon";
}, {
    readonly labelId: "chord";
    readonly value: ChartTypeBits.Chord;
    readonly iconName: "ChordChartIcon";
}];
export type ChartTypeLabelId = typeof CHART_TYPE_CATALOG[number]['labelId'];
export type IChartTypeCatalogEntry = typeof CHART_TYPE_CATALOG[number];
export declare const chartTypeToIcon: Partial<Record<ChartTypeBits, ReactNode>>;
export declare function buildChartTypeSelectOptions<TLabel>(options: readonly IChartTypeOption<TLabel>[], resolveLabel?: (label: TLabel) => ReactNode): IChartSelectOption[];
export declare function buildChartThemeSelectOptions(themes: readonly string[], getColors: (theme: string) => string[]): IChartSelectOption[];
export interface IChartPrimitiveOption<T extends string = string> {
    label: string;
    value: T;
}
export declare const chartOpacityValues: readonly [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0];
export declare const chartBorderWidthValues: readonly [0, 1, 2, 4, 8];
export declare const chartLinePointSizeValues: readonly [0, 2, 5, 7, 10, 14];
export declare const chartTickLengthValues: readonly [6, 12, 18, 24];
export declare const chartTickWidthValues: readonly [1, 2, 4, 8];
export declare function createPercentOptions(values?: readonly number[]): IChartPrimitiveOption[];
export declare function createPxOptions(values: readonly number[]): IChartPrimitiveOption[];
