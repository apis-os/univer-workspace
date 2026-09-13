import type { ChartPendingConfig, ChartTypeBits, DeepNullish, IChartChordMappingSpec, IChartChordSpec, IChartGaugeSpec, IChartHeatmapSpec, IChartSeriesDescription, IChartSunburstSpec } from '@univerjs-pro/engine-chart';
import type { Observable } from 'rxjs';
import type { IChartHostAdapter } from './chart-host-adapter';
export interface IChartEditorOption {
    label: string;
    value: string;
}
export interface IChartChordFieldOptions {
    categoryFields: IChartEditorOption[];
    valueFields: IChartEditorOption[];
}
export interface IChartEditorSeriesState {
    dataPointOptions: IChartEditorOption[];
    name: string;
    selector: number;
    style: DeepNullish<Omit<IChartSeriesDescription, 'name'>>;
}
/**
 * Stable in-process identities used by the chart editor state registry.
 *
 * These values identify editor view state only. They are not command IDs,
 * persisted values, or collaborative wire contracts.
 */
export declare enum ChartViewStateKey {
    /** Authored style shared by all series. */
    AllSeriesStyle = "allSeriesStyle",
    Appearance = "appearance",
    Aggregation = "aggregation",
    Area = "area",
    AutoGradientFill = "autoGradientFill",
    Bar = "bar",
    Axes = "axes",
    AxisPointer = "axisPointer",
    Candlestick = "candlestick",
    ChartType = "chartType",
    ChordFields = "chordFields",
    ChordMapping = "chordMapping",
    ChordStyle = "chordStyle",
    Funnel = "funnel",
    GaugeFields = "gaugeFields",
    GaugeLabelIndex = "gaugeLabelIndex",
    GaugeStyle = "gaugeStyle",
    GaugeValueIndex = "gaugeValueIndex",
    Heatmap = "heatmap",
    Histogram = "histogram",
    InvalidValueStrategy = "invalidValueStrategy",
    Legend = "legend",
    /** Authored category, series, hierarchy, and relation field mapping. */
    Mapping = "mapping",
    MappingFields = "mappingFields",
    Pareto = "pareto",
    ParetoDataPointOptions = "paretoDataPointOptions",
    Pie = "pie",
    PlotArea = "plotArea",
    Radar = "radar",
    Relation = "relation",
    Series = "series",
    Subtitle = "subtitle",
    SunburstFields = "sunburstFields",
    SunburstHierarchyIndexes = "sunburstHierarchyIndexes",
    SunburstStyle = "sunburstStyle",
    SunburstValueIndex = "sunburstValueIndex",
    Theme = "theme",
    Title = "title",
    Treemap = "treemap",
    Trendlines = "trendlines",
    Waterfall = "waterfall",
    WordCloud = "wordCloud"
}
export interface IChartViewStateMap {
    [ChartViewStateKey.AllSeriesStyle]: ChartPendingConfig['allSeriesStyle'];
    [ChartViewStateKey.Appearance]: ChartPendingConfig['appearance'];
    [ChartViewStateKey.Aggregation]: ChartPendingConfig['aggregation'];
    [ChartViewStateKey.Area]: ChartPendingConfig['area'];
    [ChartViewStateKey.AutoGradientFill]: ChartPendingConfig['autoGradientFill'];
    [ChartViewStateKey.Bar]: ChartPendingConfig['bar'];
    [ChartViewStateKey.Axes]: ChartPendingConfig['axes'];
    [ChartViewStateKey.AxisPointer]: ChartPendingConfig['axisPointer'];
    [ChartViewStateKey.Candlestick]: ChartPendingConfig['candlestick'];
    [ChartViewStateKey.ChartType]: ChartTypeBits;
    [ChartViewStateKey.ChordFields]: IChartChordFieldOptions;
    [ChartViewStateKey.ChordMapping]: IChartChordMappingSpec | undefined;
    [ChartViewStateKey.ChordStyle]: DeepNullish<IChartChordSpec> | undefined;
    [ChartViewStateKey.Funnel]: ChartPendingConfig['funnel'];
    [ChartViewStateKey.GaugeFields]: IChartEditorOption[];
    [ChartViewStateKey.GaugeLabelIndex]: number | undefined;
    [ChartViewStateKey.GaugeStyle]: DeepNullish<IChartGaugeSpec> | undefined;
    [ChartViewStateKey.GaugeValueIndex]: number | undefined;
    [ChartViewStateKey.Heatmap]: DeepNullish<IChartHeatmapSpec> | undefined;
    [ChartViewStateKey.Histogram]: ChartPendingConfig['histogram'];
    [ChartViewStateKey.InvalidValueStrategy]: ChartPendingConfig['invalidValueStrategy'];
    [ChartViewStateKey.Legend]: ChartPendingConfig['legend'];
    [ChartViewStateKey.Mapping]: ChartPendingConfig['mapping'];
    [ChartViewStateKey.MappingFields]: IChartEditorOption[];
    [ChartViewStateKey.Pareto]: ChartPendingConfig['pareto'];
    [ChartViewStateKey.ParetoDataPointOptions]: IChartEditorOption[];
    [ChartViewStateKey.Pie]: ChartPendingConfig['pie'];
    [ChartViewStateKey.PlotArea]: ChartPendingConfig['plotArea'];
    [ChartViewStateKey.Radar]: ChartPendingConfig['radar'];
    [ChartViewStateKey.Relation]: ChartPendingConfig['relation'];
    [ChartViewStateKey.Series]: IChartEditorSeriesState[];
    [ChartViewStateKey.Subtitle]: ChartPendingConfig['subtitle'];
    [ChartViewStateKey.SunburstFields]: IChartEditorOption[];
    [ChartViewStateKey.SunburstHierarchyIndexes]: number[];
    [ChartViewStateKey.SunburstStyle]: DeepNullish<IChartSunburstSpec> | undefined;
    [ChartViewStateKey.SunburstValueIndex]: number | undefined;
    [ChartViewStateKey.Theme]: ChartPendingConfig['theme'];
    [ChartViewStateKey.Title]: ChartPendingConfig['title'];
    [ChartViewStateKey.Treemap]: ChartPendingConfig['treemap'];
    [ChartViewStateKey.Trendlines]: ChartPendingConfig['trendlines'];
    [ChartViewStateKey.Waterfall]: ChartPendingConfig['waterfall'];
    [ChartViewStateKey.WordCloud]: ChartPendingConfig['wordCloud'];
}
export type ChartViewStateName = keyof IChartViewStateMap;
export interface IChartViewStateDefinition<T> {
    get(hostAdapter: IChartHostAdapter): Observable<T>;
    set?(hostAdapter: IChartHostAdapter, value: T): void;
}
