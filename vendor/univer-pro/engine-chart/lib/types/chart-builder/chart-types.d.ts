import type { IChartTopNSpec } from '../chart-data-aggregation';
import type { AreaLineStyle, AxisAlignEnum, BarShape, ChartAxisDimension, ChartBorderDashType, ChartMarkLineLabelPosition, ChartSemanticAxis, ChartTrendlineType, ChartWaterfallPointRole, InvalidValueType, IRuntimeAxisPosition, LabelAlignEnum, LabelContentType, LegendPositionEnum, LinePointShape, PieLabelPosition, RadarShape, RelationChartLayoutEnum, SelectModeEnum, SeriesLabelPosition, TitlePositionEnum, WaterfallStackTypeEnum, WordCloudShapeEnum } from '../enum';
import type { DeepNullish, IChartCandlestickMappingSpec, IChartCandlestickSpec, IChartChordMappingSpec, IChartChordSpec, IChartGaugeSpec, IChartHistogramSpec, IChartSunburstSpec, IChartTreemapSpec, IChartValueLabelSpec } from '../types';
import type { ChartColor } from './chart-color';
/** Canonical semantic chart type names exposed by the chart facade. */
export declare enum ChartTypeString {
    Line = "line",
    Column = "column",
    ColumnStacked = "columnStacked",
    ColumnPercentStacked = "columnPercentStacked",
    Bar = "bar",
    BarStacked = "barStacked",
    BarPercentStacked = "barPercentStacked",
    Pie = "pie",
    Donut = "donut",
    Area = "area",
    AreaStacked = "areaStacked",
    AreaPercentStacked = "areaPercentStacked",
    Radar = "radar",
    Scatter = "scatter",
    Combination = "combination",
    WordCloud = "wordCloud",
    Funnel = "funnel",
    Bubble = "bubble",
    Relation = "relation",
    Waterfall = "waterfall",
    Pareto = "pareto",
    Sankey = "sankey",
    Heatmap = "heatmap",
    Boxplot = "boxplot",
    Candlestick = "candlestick",
    Histogram = "histogram",
    Treemap = "treemap",
    Sunburst = "sunburst",
    Gauge = "gauge",
    Chord = "chord"
}
export declare enum ChartSeriesTypeString {
    Column = "column",
    ColumnStacked = "columnStacked",
    Line = "line",
    Area = "area",
    AreaStacked = "areaStacked"
}
export declare enum ChartVisualMapType {
    Continuous = "continuous",
    Piecewise = "piecewise"
}
export declare enum ChartAxisTickPosition {
    Inside = "inside",
    Outside = "outside"
}
export declare enum ChartWordCloudShapeSource {
    Shape = "shape",
    MaskImage = "maskImage"
}
export declare enum ChartWaterfallStyleTarget {
    Positive = "positive",
    Negative = "negative",
    Subtotal = "subtotal"
}
export declare const DEFAULT_CHART_TYPE = ChartTypeString.Line;
export declare const CARTESIAN_CHART_TYPES: ReadonlySet<ChartTypeString>;
export declare const AXIS_CHART_TYPES: ReadonlySet<ChartTypeString>;
export declare const AREA_CHART_TYPES: ReadonlySet<ChartTypeString>;
export interface IChartFontSpec {
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
/** Facade-only semantic patch for the regular divisions of a Gauge scale. */
export interface IChartGaugeTicksPatch {
    majorDivisions?: number | null;
    minorDivisionsPerMajor?: number | null;
}
export interface IChartTitleOptions extends IChartFontSpec {
    text?: string;
    visible?: boolean;
    position?: TitlePositionEnum;
    alignment?: LabelAlignEnum;
}
export type ChartTitleSpec = string | IChartTitleOptions;
export interface IChartSubtitleOptions extends IChartFontSpec {
    text?: string;
    alignment?: LabelAlignEnum;
}
export type ChartSubtitleSpec = string | IChartSubtitleOptions;
export interface IChartLegendOptions extends IChartFontSpec {
    visible?: boolean;
    position?: LegendPositionEnum;
    selectMode?: SelectModeEnum;
    wrap?: boolean;
}
export type ChartLegendSpec = boolean | IChartLegendOptions;
export interface IChartAxisLabelSpec extends IChartFontSpec {
    visible?: boolean;
    rotate?: number;
}
export interface IChartAxisSpec {
    title?: string;
    titleAlignment?: AxisAlignEnum;
    min?: number;
    max?: number;
    reverse?: boolean;
    line?: {
        visible?: boolean;
        color?: string;
        width?: number;
    };
    tick?: {
        visible?: boolean;
        color?: string;
        width?: number;
        length?: number;
        position?: ChartAxisTickPosition;
    };
    format?: string;
    titleStyle?: IChartFontSpec;
    label?: IChartAxisLabelSpec;
    gridLine?: {
        visible?: boolean;
        color?: string;
        width?: number;
        dashType?: ChartBorderDashType;
    };
}
export interface IChartAxesSpec {
    x?: IChartAxisSpec;
    y?: IChartAxisSpec;
    rightY?: Omit<IChartAxisSpec, 'reverse'>;
}
/** Physical location resolved for one semantic axis. */
export interface IChartAxisBindingDescription {
    /** Canvas dimension occupied by the axis. */
    dimension: ChartAxisDimension;
    /** Physical edge where the axis is drawn. */
    position: IRuntimeAxisPosition;
}
/** Optional label appearance for a fixed-axis mark line. */
export interface IChartMarkLineLabelSpec {
    /** Whether the label is visible. */
    visible?: boolean;
    /** Explicit label text; omission uses the formatted axis coordinate. */
    text?: string;
    /** Physical label placement along the line. */
    position?: ChartMarkLineLabelPosition;
    /** Label text color. */
    color?: string;
    /** Label font size in pixels. */
    fontSize?: number;
    /** Whether the label is bold. */
    bold?: boolean;
}
interface IChartMarkLineStyleSpec {
    label?: IChartMarkLineLabelSpec;
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
}
/** A fixed line addressed by semantic axis and an axis-appropriate coordinate. */
export type IChartMarkLineSpec = IChartMarkLineStyleSpec & ({
    axis: ChartSemanticAxis.Category | ChartSemanticAxis.SecondaryCategory;
    categoryIndex: number;
} | {
    axis: ChartSemanticAxis.PrimaryValue | ChartSemanticAxis.SecondaryValue;
    value: number;
});
export type ChartSeriesSelector = {
    index: number;
} | {
    name: string;
};
export interface IChartSeriesBorderSpec {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
}
export interface IChartLineStyleSpec extends IChartSeriesBorderSpec {
}
export interface IChartSeriesPointSpec {
    shape?: LinePointShape;
    size?: number;
    color?: string;
}
export interface IChartSeriesLabelSpec extends IChartFontSpec, IChartValueLabelSpec {
    visible?: boolean;
    position?: SeriesLabelPosition;
    contentType?: LabelContentType;
}
export interface IChartHeatmapLabelSpec extends IChartFontSpec, IChartValueLabelSpec {
    visible?: boolean;
    position?: SeriesLabelPosition;
}
export interface IChartSeriesStyleSpec {
    color?: ChartColor;
    fillOpacity?: number;
    border?: IChartSeriesBorderSpec;
    point?: IChartSeriesPointSpec;
    rightAxis?: boolean;
    label?: IChartSeriesLabelSpec;
}
/** Style fields accepted by fill-capable chart data points. */
export interface IChartSeriesDataPointStyleSpec {
    shape?: LinePointShape;
    size?: number;
    color?: ChartColor;
    fillOpacity?: number;
}
/** Style fields accepted by symbol data points, whose color remains solid-only. */
export interface IChartSymbolDataPointStyleSpec extends Omit<IChartSeriesDataPointStyleSpec, 'color'> {
    color?: string;
}
export interface IChartSeriesPatch extends IChartSeriesStyleSpec {
    selector: ChartSeriesSelector;
    type?: ChartSeriesTypeString;
    dataPoints?: Record<number, IChartSeriesDataPointStyleSpec>;
    waterfallStyles?: Partial<Record<ChartWaterfallStyleTarget, IChartWaterfallSeriesStyleSpec>>;
}
export interface IChartWaterfallSeriesStyleSpec extends Omit<IChartSeriesPatch, 'selector' | 'waterfallStyles'> {
    name?: string;
}
/** Series patch for line-like marks whose data points are symbols. */
export interface IChartLineSeriesPatch extends Omit<IChartSeriesPatch, 'dataPoints'> {
    dataPoints?: Record<number, IChartSymbolDataPointStyleSpec>;
}
/** Series style for chart types that do not accept explicit gradients in the first release. */
export interface IChartSolidSeriesStyleSpec extends Omit<IChartSeriesStyleSpec, 'color'> {
    color?: string;
}
/** Series patch for chart marks that expose only solid colors. */
export interface IChartSolidSeriesPatch extends Omit<IChartLineSeriesPatch, keyof IChartSeriesStyleSpec>, IChartSolidSeriesStyleSpec {
}
export interface IChartTrendlineSpec {
    selector: ChartSeriesSelector;
    type: ChartTrendlineType;
    name?: string;
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
    order?: number;
    period?: number;
    showFormula?: boolean;
    showR2?: boolean;
    formulaColor?: string;
    r2Color?: string;
}
export interface IChartHeatmapSpec {
    visualMapType?: ChartVisualMapType;
    min?: number;
    max?: number;
    /** Unit appended to the minimum and maximum visual-map labels. */
    unit?: string;
    /** Style for the value rendered inside each Heatmap cell. */
    label?: IChartHeatmapLabelSpec;
}
export interface IChartWordCloudSpec {
    shape?: WordCloudShapeEnum;
    maskImageId?: string;
    repeat?: boolean;
}
export interface IChartWordCloudDescription {
    shape?: WordCloudShapeEnum;
    maskImageId?: string;
    repeat?: boolean;
    effectiveShapeSource: ChartWordCloudShapeSource;
}
export interface IChartAppearanceSpec {
    background?: {
        /** CSS background color. Use `'transparent'` for an explicit transparent chart and host background. */
        color?: string;
    };
    border?: {
        color?: string;
        /** Persisted host-border width. Use `0` to hide the host border without changing host-owned stroke state. */
        width?: number;
    };
    font?: {
        color?: string;
        size?: number;
        family?: string;
    };
}
export interface IChartBubbleMappingSpec {
    xIndex: number;
    yIndex: number;
    labelIndex?: number;
    sizeIndex?: number;
    seriesIndex?: number;
}
export interface IChartEdgeMappingSpec {
    sourceIndex: number;
    targetIndex: number;
    valueIndex?: number;
}
export interface IChartMappingSpec {
    categoryIndex?: number;
    /** Ordered category fields used by a multi-level category axis. */
    categoryIndexes?: number[];
    /** Whether the selected category fields render as one root-to-leaf multi-level category axis. */
    multiLevelCategoryAxis?: boolean;
    /** Ordered root-to-leaf hierarchy fields for hierarchy charts. */
    hierarchyIndexes?: number[];
    seriesIndexes?: number[];
    useDateAxis?: boolean;
    bubble?: IChartBubbleMappingSpec;
    candlestick?: IChartCandlestickMappingSpec;
    chord?: IChartChordMappingSpec;
    edge?: IChartEdgeMappingSpec;
}
export interface IChartAggregationSpec {
    aggregate?: boolean;
    topN?: IChartTopNSpec;
}
export interface IChartPieLabelSpec extends IChartFontSpec, IChartValueLabelSpec {
    visible?: boolean;
    position?: PieLabelPosition;
    contentType?: LabelContentType;
}
/** Authored style for one materialized Pie or Donut slice. */
export interface IChartSliceStyleSpec {
    color?: ChartColor;
    fillOpacity?: number;
}
export declare const PieSecondaryPlotType: {
    readonly Pie: "pie";
    readonly Bar: "bar";
};
export type PieSecondaryPlotType = typeof PieSecondaryPlotType[keyof typeof PieSecondaryPlotType];
export declare const PieCompositePlot: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
};
export type PieCompositePlot = typeof PieCompositePlot[keyof typeof PieCompositePlot];
export declare const PieCompositeMarkRole: {
    readonly Source: "source";
    readonly Aggregate: "aggregate";
    readonly Connector: "connector";
};
export type PieCompositeMarkRole = typeof PieCompositeMarkRole[keyof typeof PieCompositeMarkRole];
export declare const PieSecondarySplitType: {
    readonly Auto: "auto";
    readonly Position: "position";
    readonly Value: "value";
    readonly Percentage: "percentage";
    readonly Custom: "custom";
};
export type PieSecondarySplitSpec = {
    type: typeof PieSecondarySplitType.Auto;
} | {
    type: typeof PieSecondarySplitType.Position;
    count: number;
} | {
    type: typeof PieSecondarySplitType.Value;
    lessThan: number;
} | {
    type: typeof PieSecondarySplitType.Percentage;
    lessThan: number;
} | {
    type: typeof PieSecondarySplitType.Custom;
    pointIndexes: number[];
};
export interface IChartPieConnectorSpec extends IChartLineStyleSpec {
    visible?: boolean;
}
export interface IChartPieSecondaryPlotSpec {
    type: PieSecondaryPlotType;
    split?: PieSecondarySplitSpec;
    size?: number;
    gapWidth?: number;
    connector?: IChartPieConnectorSpec;
}
export interface IChartPieAggregateSpec {
    label?: string;
    style?: IChartSliceStyleSpec;
}
export interface IChartPieCompositeSpec {
    enabled?: boolean;
    secondaryPlot: IChartPieSecondaryPlotSpec;
    aggregate?: IChartPieAggregateSpec;
}
export interface IChartPieSpec {
    composite?: IChartPieCompositeSpec;
    /** Clockwise degrees from 12 o'clock. */
    startAngle?: number;
    doughnutHole?: number;
    explosion?: number;
    borderColor?: string;
    hasPaddingAngle?: boolean;
    isHalfPie?: boolean;
    rosePie?: boolean;
    showLabelLine?: boolean;
    valueScale?: number;
    label?: IChartPieLabelSpec;
    /** Sparse authored slice styles keyed by materialized slice index. */
    sliceStyles?: Partial<Record<number, IChartSliceStyleSpec>>;
}
export interface IChartRadarSpec {
    shape?: RadarShape;
    fill?: boolean;
}
/** Supported Pareto bar-border appearance. */
export interface IChartParetoBorderStyleSpec {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
}
/** Supported point appearance for the Pareto cumulative line. */
export interface IChartParetoPointStyleSpec {
    shape?: LinePointShape;
    size?: number;
    color?: string;
}
interface IChartParetoLabelStyleBase extends Omit<IChartSeriesLabelSpec, 'contentType' | 'position'> {
    contentType?: LabelContentType;
}
/** Pareto bar-label appearance. */
export interface IChartParetoBarLabelStyleSpec extends IChartParetoLabelStyleBase {
    position?: SeriesLabelPosition;
}
/** Pareto cumulative-line label appearance. */
export interface IChartParetoLineLabelStyleSpec extends IChartParetoLabelStyleBase {
    position?: Exclude<SeriesLabelPosition, SeriesLabelPosition.Outside>;
}
/** Supported appearance for the Pareto business bars. */
export interface IChartParetoBarStyleSpec {
    color?: ChartColor;
    opacity?: number;
    border?: IChartParetoBorderStyleSpec;
    label?: IChartParetoBarLabelStyleSpec;
    dataPoints?: Record<number, IChartSeriesDataPointStyleSpec>;
}
/** Supported appearance for the derived Pareto cumulative line. */
export interface IChartParetoLineStyleSpec {
    color?: ChartColor;
    opacity?: number;
    width?: number;
    dashType?: ChartBorderDashType;
    point?: IChartParetoPointStyleSpec;
    label?: IChartParetoLineLabelStyleSpec;
    dataPoints?: Record<number, IChartSeriesDataPointStyleSpec>;
}
/** Pareto semantic configuration exposed through the Facade. */
export interface IChartParetoSpec {
    barStyle?: IChartParetoBarStyleSpec;
    cumulativeLineStyle?: IChartParetoLineStyleSpec;
    includeZeroValues?: boolean;
}
export interface IChartAxisPointerSpec {
    indicatorLabelColor?: string;
    indicatorLineType?: ChartBorderDashType;
    indicatorLineColor?: string;
    indicatorLabelTextColor?: string;
}
export interface IChartAreaSpec {
    lineStyle?: AreaLineStyle;
}
export interface IChartBarSpec {
    gapWidth?: number;
    overlap?: number;
    is3D?: boolean;
    shape?: BarShape;
    rotX?: number;
    rotY?: number;
}
export interface IChartBubbleSpec {
    scale?: number;
    sizeRepresents?: 'area' | 'width';
}
export interface IChartPlotAreaSpec {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IChartFunnelSpec {
    gap?: number;
    useAbsoluteValue?: boolean;
}
export interface IChartRelationForceSpec {
    gravity?: number;
    repulsion?: number;
    edgeLength?: number;
}
export interface IChartRelationSpec {
    layout?: RelationChartLayoutEnum;
    useValueAsSymbolSize?: boolean;
    emphasisEnabled?: boolean;
    force?: IChartRelationForceSpec;
    circularLabelRotation?: boolean;
    nodeShape?: LinePointShape;
}
/** Waterfall semantic configuration exposed through the Facade. */
export interface IChartWaterfallSpec {
    stackType?: WaterfallStackTypeEnum;
    useSubtotal?: boolean;
    pointRoles?: IChartWaterfallPointRoleSpec[];
    connector?: boolean | IChartWaterfallConnectorStyleSpec;
    styles?: Partial<Record<ChartWaterfallStyleTarget, IChartWaterfallSeriesStyleSpec>>;
}
/** Public Waterfall series selector; numbers are stable source-series indexes. */
export type ChartWaterfallSeriesSelector = number | {
    name: string;
};
/** Assigns a semantic role to one Waterfall source data point. */
export interface IChartWaterfallPointRoleSpec {
    series: ChartWaterfallSeriesSelector;
    dataPointIndex: number;
    role: ChartWaterfallPointRole;
}
/** Optional appearance overrides for derived Waterfall connectors. */
export interface IChartWaterfallConnectorStyleSpec {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
}
interface IChartSemanticConfig {
    type?: ChartTypeString;
    autoGradientFill?: boolean;
    title?: ChartTitleSpec;
    subtitle?: ChartSubtitleSpec;
    trendlines?: IChartTrendlineSpec[];
    heatmap?: IChartHeatmapSpec;
    invalidValueStrategy?: InvalidValueType;
    legend?: ChartLegendSpec;
    axes?: IChartAxesSpec;
    allSeriesStyle?: IChartSeriesStyleSpec;
    series?: IChartSeriesPatch[];
    wordCloud?: IChartWordCloudSpec;
    appearance?: IChartAppearanceSpec;
    mapping?: IChartMappingSpec;
    aggregation?: IChartAggregationSpec;
    pie?: IChartPieSpec;
    radar?: IChartRadarSpec;
    pareto?: IChartParetoSpec;
    axisPointer?: IChartAxisPointerSpec;
    area?: IChartAreaSpec;
    bar?: IChartBarSpec;
    bubble?: IChartBubbleSpec;
    plotArea?: IChartPlotAreaSpec;
    funnel?: IChartFunnelSpec;
    relation?: IChartRelationSpec;
    waterfall?: IChartWaterfallSpec;
    candlestick?: IChartCandlestickSpec;
    histogram?: IChartHistogramSpec;
    treemap?: IChartTreemapSpec;
    sunburst?: IChartSunburstSpec;
    gauge?: IChartGaugeSpec;
    chord?: IChartChordSpec;
    markLines?: IChartMarkLineSpec[];
    theme?: string;
    /** Persisted absolute series colors. A non-empty value overrides theme colors. */
    palette?: string[];
}
/** Absolute Chart position in host coordinates. */
export interface IChartPosition {
    x: number;
    y: number;
}
/** Chart frame size in host coordinates. */
export interface IChartSize {
    width: number;
    height: number;
}
/** Detached information shared by host-specific Chart insertion APIs. */
export interface IChartInfo<TSource> {
    config: IChartCreateConfig;
    dataSource: TSource;
    position?: IChartPosition;
    size?: IChartSize;
}
/** Pending chart edits; `null` is a runtime-only delete marker consumed before persistence. */
export type ChartPendingConfig = Pick<IChartSemanticConfig, 'type'> & DeepNullish<Omit<IChartSemanticConfig, 'type' | 'series'>> & {
    series?: Array<{
        selector: ChartSeriesSelector;
    } & DeepNullish<Omit<IChartSeriesPatch, 'selector'>>> | null;
};
/** Data-free metadata and semantic styling for one source series. */
export interface IChartSeriesDescription extends IChartSeriesStyleSpec {
    name: string;
    type?: ChartSeriesTypeString;
    dataPoints?: IChartSeriesPatch['dataPoints'];
    waterfallStyles?: IChartSeriesPatch['waterfallStyles'];
}
/** Data-free metadata for the configured category field. */
export interface IChartCategoryDescription {
    name: string;
}
export interface IChartDescription extends Omit<IChartSemanticConfig, 'autoGradientFill' | 'series'> {
    id: string;
    type: ChartTypeString;
    /** Effective automatic-gradient state after applying chart-type defaults. */
    autoGradientFill: boolean;
    /** Series metadata keyed by source field index; materialized values are available from `resolveData()`. */
    series: Partial<Record<number, IChartSeriesDescription>>;
    /** Category metadata only; materialized category values are available from `resolveData()`. */
    category?: IChartCategoryDescription;
    /**
     * Resolved semantic-axis locations for axis charts. Non-axis charts omit this field.
     * Use these bindings when choosing the semantic `axis` passed to `setMarkLines()`;
     * for example, `description.axisBindings.category.position` identifies where the
     * category axis is currently drawn. `secondaryValue` is omitted when absent.
     *
     * @example
     * ```ts
     * const description = builder.describe();
     * const categoryAxis = description.axisBindings!.category!;
     * console.log(categoryAxis.dimension, categoryAxis.position);
     * ```
     */
    axisBindings?: Partial<Record<ChartSemanticAxis, IChartAxisBindingDescription>>;
}
export {};
