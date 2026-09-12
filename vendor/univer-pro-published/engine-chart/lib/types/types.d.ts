import type { IDisposable, Nullable } from '@univerjs/core';
import type { BarSeriesOption, EChartsOption } from 'echarts';
import type { Observable } from 'rxjs';
import type { ChartColor, IChartLinearGradient } from './chart-builder/chart-color';
import type { IChartPieCompositeSpec, PieCompositeMarkRole, PieCompositePlot } from './chart-builder/chart-types';
import type { IChartDataAggregation } from './chart-data-aggregation';
import type { AreaLineStyle, AxisAlignEnum, AxisValueType, BarShape, CategoryType, ChartAxisDimension, ChartBorderDashType, ChartChordFocusMode, ChartChordLabelPosition, ChartChordRibbonColorMode, ChartGaugeMode, ChartGaugePointerShape, ChartHistogramBinKind, ChartMarkLineLabelPosition, ChartSemanticAxis, ChartSourceDataTypeEnum, ChartSunburstLabelPosition, ChartTrendlineType, ChartTypeBits, ChartWaterfallPointRole, DataOrientation, HistogramBinningMode, InvalidValueType, IRuntimeAxisPosition, IRuntimeAxisPriority, LabelAlignEnum, LabelContentType, LegendPositionEnum, LinePointShape, PieLabelPosition, RadarShape, RelationChartLayoutEnum, SelectModeEnum, SeriesLabelPosition, TitlePositionEnum, TreemapParentLabelLayout, WaterfallSeriesTypeEnum, WaterfallStackTypeEnum, WordCloudShapeEnum } from './enum';
import type { ICartesianPointData } from './models/chart-data/internal/cartesian-point-data';
import type { IChartRuntimeAdaptiveSize } from './models/common/adaptive-size/chart-runtime-adaptive-size';
import type { IChartLocaleTexts } from './models/common/chart-locale-texts';
import type { IEchartTheme } from './models/common/theme/build-in-theme/types';
import type { IWordCloudRenderConfig } from './wordcloud-chart/word-cloud-render-config';
export type DeepPartial<T> = T extends IChartLinearGradient ? T : T extends Record<string, any> ? T extends any[] ? T : {
    [key in keyof T]+?: DeepPartial<T[key]>;
} : T;
/** Recursive patch shape that permits `null` at every field and treats arrays as atomic values. */
export type DeepNullish<T> = T extends (...args: never[]) => unknown ? T : T extends readonly unknown[] ? T : T extends object ? {
    [K in keyof T]?: DeepNullish<T[K]> | null;
} : T;
export type ChartDirection = 'ltr' | 'rtl';
export interface IChartDataSource {
    readonly data$: Observable<IUniverDataSet>;
    getDataSet(): IUniverDataSet;
}
export interface IDimensionDefinition {
    type?: 'number' | 'ordinal' | 'time' | 'float' | 'int';
    name?: string;
    displayName?: string;
}
export type DimensionDefinitionLoose = IDimensionDefinition['name'] | IDimensionDefinition;
export type OptionDataValue = string | number | Date | null | undefined;
export type ChartDataSourceValues = OptionDataValue[][];
export interface IUniverDataSetCategorySpan {
    fieldIndex: number;
    startIndex: number;
    endIndex: number;
}
/**
 * Canonical chart dataset used by chart context operators and chart-data builders.
 *
 * Adapters must normalize their raw input before exposing this shape:
 * - `dimensions[index]` is the optional header label for `source[index]`.
 * - `source[index]` is one logical data vector, already oriented by the adapter.
 * - `sourceType` and `sourceLabels`, when present, have the same vector shape as `source`.
 *
 * Category detection reads from `source` vectors only. `dimensions` must not be
 * used as a fallback category vector.
 */
export interface IUniverDataSet {
    source: OptionDataValue[][];
    dimensions: Array<DimensionDefinitionLoose>;
    sourceType?: ChartSourceDataTypeEnum[][];
    sourceLabels?: string[][];
    /** Runtime indexes of hidden `source` fields; omission means every field is visible. */
    hiddenFieldIndexes?: number[];
    /**
     * Explicit category grouping topology. Absence enables adjacent path-prefix inference;
     * an empty array explicitly keeps repeated adjacent values as separate groups.
     */
    categorySpans?: IUniverDataSetCategorySpan[];
}
/** Ordered field names that define the persisted Candlestick OHLC mapping contract. */
export declare const CHART_CANDLESTICK_MAPPING_FIELDS: readonly ["openIndex", "highIndex", "lowIndex", "closeIndex"];
/** Required semantic OHLC source fields for one Candlestick series. */
export interface IChartCandlestickMappingSpec {
    openIndex: number;
    highIndex: number;
    lowIndex: number;
    closeIndex: number;
}
/** Semantic body and wick appearance for one Candlestick state. */
export interface IChartCandlestickStateStyleSpec {
    color?: string;
    fillOpacity?: number;
    border?: {
        color?: string;
        width?: number;
        opacity?: number;
    };
    hollow?: boolean;
}
/** Semantic Candlestick style overrides persisted by the chart model. */
export interface IChartCandlestickSpec {
    rising?: IChartCandlestickStateStyleSpec;
    falling?: IChartCandlestickStateStyleSpec;
    doji?: IChartCandlestickStateStyleSpec;
    candleWidth?: number;
}
/** Histogram bin sizing configuration persisted by the semantic chart model. */
export type IChartHistogramBinningSpec = {
    mode: typeof HistogramBinningMode.Count;
    count: number;
} | {
    mode: typeof HistogramBinningMode.Width;
    width: number;
};
/** Persisted Histogram data-processing options. Omission selects Scott Auto binning. */
export interface IChartHistogramDataSpec {
    binning?: IChartHistogramBinningSpec;
    underflowThreshold?: number;
    overflowThreshold?: number;
}
/** Persisted Histogram appearance options. */
export interface IChartHistogramStyleSpec {
    /** Gap ratio between adjacent bins. Effective values are from 0 through 0.9. */
    binGap?: number;
}
/** Public Histogram semantic configuration. */
export interface IChartHistogramSpec extends IChartHistogramDataSpec, IChartHistogramStyleSpec {
}
/** Shared authored number format for chart labels that display a numeric Value fragment. */
export interface IChartValueLabelSpec {
    format?: string;
}
/** Persisted leaf-label style supported by Treemap charts. */
export interface IChartTreemapLabelSpec extends IChartValueLabelSpec {
    visible?: boolean;
    contentType?: LabelContentType;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
/** Public Treemap semantic style configuration. */
export interface IChartTreemapSpec {
    parentLabelLayout?: TreemapParentLabelLayout;
    label?: IChartTreemapLabelSpec;
}
/** Persisted semantic label style supported by Sunburst charts. */
export interface IChartSunburstLabelSpec extends IChartValueLabelSpec {
    visible?: boolean;
    contentType?: LabelContentType;
    position?: ChartSunburstLabelPosition;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
/** Persisted style for the aggregate value rendered in the Sunburst center. */
export interface IChartSunburstCenterLabelSpec extends IChartValueLabelSpec {
    visible?: boolean;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
/** Public Sunburst semantic style configuration. */
export interface IChartSunburstSpec {
    centerLabel?: IChartSunburstCenterLabelSpec;
    label?: IChartSunburstLabelSpec;
}
export interface IChartGaugeFontSpec {
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
/** Values are semantic degrees; ratios are represented from 0 through 1. */
export interface IChartGaugeScaleSpec {
    min?: number;
    max?: number;
    splitNumber?: number;
}
export interface IChartGaugeAnglesSpec {
    startAngle?: number;
    endAngle?: number;
}
export interface IChartGaugeRangeSpec {
    from: number;
    to: number;
    color: string;
}
export interface IChartGaugeAxisLineSpec {
    visible?: boolean;
    width?: number;
    color?: string;
}
export interface IChartGaugeAxisTickSpec {
    visible?: boolean;
    splitNumber?: number;
    length?: number;
    width?: number;
    color?: string;
}
export interface IChartGaugeSplitLineSpec {
    visible?: boolean;
    length?: number;
    width?: number;
    color?: string;
}
export interface IChartGaugeAxisLabelSpec extends IChartGaugeFontSpec, IChartValueLabelSpec {
    visible?: boolean;
    distance?: number;
}
export interface IChartGaugePointerSpec {
    visible?: boolean;
    length?: number;
    width?: number;
    color?: string;
    shape?: ChartGaugePointerShape;
}
export interface IChartGaugeAnchorSpec {
    visible?: boolean;
    size?: number;
    color?: string;
    borderColor?: string;
    borderWidth?: number;
}
export interface IChartGaugeProgressSpec {
    visible?: boolean;
    width?: number;
    color?: string;
    rounded?: boolean;
}
export interface IChartGaugeTitleSpec extends IChartGaugeFontSpec {
    visible?: boolean;
    offsetY?: number;
}
export interface IChartGaugeDetailSpec extends IChartGaugeFontSpec, IChartValueLabelSpec {
    visible?: boolean;
    offsetY?: number;
}
/** Persisted renderer-independent Gauge appearance shared by every rendered gauge item. */
export interface IChartGaugeSpec {
    mode?: ChartGaugeMode;
    scale?: IChartGaugeScaleSpec;
    angles?: IChartGaugeAnglesSpec;
    ranges?: IChartGaugeRangeSpec[];
    axisLine?: IChartGaugeAxisLineSpec;
    axisTick?: IChartGaugeAxisTickSpec;
    splitLine?: IChartGaugeSplitLineSpec;
    axisLabel?: IChartGaugeAxisLabelSpec;
    pointer?: IChartGaugePointerSpec;
    anchor?: IChartGaugeAnchorSpec;
    progress?: IChartGaugeProgressSpec;
    title?: IChartGaugeTitleSpec;
    detail?: IChartGaugeDetailSpec;
}
export interface IChartGaugeItem {
    id: string;
    name: string;
    value: number;
    formattedValue: string;
}
export interface IChartGaugeData {
    items: IChartGaugeItem[];
    diagnostic?: string;
}
/** Persisted Source/Target/optional-Value roles for an undirected Chord edge list. */
export interface IChartChordMappingSpec {
    sourceIndex: number;
    targetIndex: number;
    valueIndex?: number;
}
export interface IChartChordLayoutSpec {
    startAngle?: number;
    clockwise?: boolean;
    padAngle?: number;
    minAngle?: number;
    innerRadiusRatio?: number;
    outerRadiusRatio?: number;
}
export interface IChartChordNodeStyleSpec {
    color?: string;
    opacity?: number;
    borderColor?: string;
    borderWidth?: number;
    borderType?: ChartBorderDashType;
}
export interface IChartChordLabelSpec {
    visible?: boolean;
    position?: ChartChordLabelPosition;
    rotation?: number;
    distance?: number;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    family?: string;
}
export interface IChartChordRibbonStyleSpec {
    color?: ChartChordRibbonColorMode;
    opacity?: number;
    width?: number;
    type?: ChartBorderDashType;
}
export interface IChartChordEmphasisSpec {
    focus?: ChartChordFocusMode;
}
export interface IChartChordSpec {
    layout?: IChartChordLayoutSpec;
    node?: IChartChordNodeStyleSpec;
    label?: IChartChordLabelSpec;
    ribbon?: IChartChordRibbonStyleSpec;
    emphasis?: IChartChordEmphasisSpec;
}
export interface IChartChordNode {
    id: string;
    name: string;
    value: number;
    formattedValue: string;
}
export interface IChartChordLink {
    id: string;
    endpointAId: string;
    endpointBId: string;
    endpointAName: string;
    endpointBName: string;
    value: number;
    formattedValue: string;
}
export interface IChartChordData {
    valueFieldName?: string;
    weightMode: 'value' | 'count';
    nodes: IChartChordNode[];
    links: IChartChordLink[];
    diagnostic?: string;
}
/** Runtime-only renderer-independent Treemap node. */
export interface IChartTreemapNode {
    id: string;
    name: string;
    path: string[];
    value: number;
    selfValue: number;
    formattedValue?: string;
    formattedSelfValue?: string;
    children?: IChartTreemapNode[];
}
/** Runtime-only Treemap data prepared from the canonical flat mapping. */
export interface IChartTreemapData {
    valueFieldName: string;
    nodes: IChartTreemapNode[];
    /** Runtime-only top-level first-source order used for stable palette assignment. */
    paletteOrder?: string[];
    diagnostic?: string;
}
/** Runtime-only renderer-independent Sunburst node. */
export interface IChartSunburstNode {
    id: string;
    name: string;
    path: string[];
    value: number;
    selfValue: number;
    formattedValue?: string;
    formattedSelfValue?: string;
    children?: IChartSunburstNode[];
}
/** Runtime-only Sunburst data prepared from the canonical flat mapping. */
export interface IChartSunburstData {
    valueFieldName: string;
    nodes: IChartSunburstNode[];
    /** Runtime-only top-level first-source order used for stable palette assignment. */
    paletteOrder?: string[];
    diagnostic?: string;
}
export interface IChartContext {
    headers?: string[];
    categoryType?: CategoryType;
    /** Ordered selected Label field indexes. */
    categoryIndexes?: number[];
    /** Whether ordered category indexes should render as one root-to-leaf category axis. */
    multiLevelCategoryAxis?: boolean;
    /**
     * the flag to indicate whether the chart use date axis, only all category data is date type, the chart will use date axis, if there are some string type data, the chart will use category axis even the flag is true.
     */
    useDateAxis?: boolean;
    categoryResourceIndexes?: number[];
    seriesIndexes?: number[];
    seriesResourceIndexes?: number[];
    histogram?: IChartHistogramDataSpec;
}
export interface IRelationNodes {
    id: string;
    category?: string;
    name: string;
    value: number;
    symbolSize?: number;
}
export interface IRelationLink {
    source: string;
    target: string;
    value: number;
}
export interface IHeatmapAxisData {
    data: IChartDataItem[];
}
export interface IChartData {
    category?: IChartDataCategory;
    headers?: string[];
    series: IChartDataSeries[];
    maxValue: number;
    minValue: number;
    /**
     * the dataset of the chart, it should match echart dataset option
     */
    dataset?: IUniverDataSet;
    cartesianPoint?: ICartesianPointData;
    candlestickData?: IChartCandlestickData;
    histogramData?: IChartHistogramData;
    treemapData?: IChartTreemapData;
    sunburstData?: IChartSunburstData;
    gaugeData?: IChartGaugeData;
    chordData?: IChartChordData;
    fieldDiagnostic?: import('./models/common/chart-field-diagnostic').IChartFieldDiagnostic;
    heatmapData?: {
        xData: string[];
        yData: string[];
        values: number[][];
        formattedValues: string[][];
        isValidateHeatmapSource: boolean;
    };
    relationData?: {
        links: IRelationLink[];
        nodes: IRelationNodes[];
        categories: string[];
        max: number;
        min: number;
        isValidateRelationSource: boolean;
    };
    sankeyData?: {
        links: ISankeyLink[];
        nodes: ISankeyNode[];
        categories: string[];
        max: number;
        min: number;
        isValidateSankeySource: boolean;
        isCircular: boolean;
    };
}
/** One semantic OHLC point. Renderer tuple order is intentionally absent. */
export interface IChartCandlestickPoint {
    open: number;
    high: number;
    low: number;
    close: number;
    labels: {
        open: string;
        high: string;
        low: string;
        close: string;
    };
}
/** One aligned semantic Candlestick series. */
export interface IChartCandlestickData {
    name: string;
    items: Array<IChartCandlestickPoint | null>;
}
/** Numeric semantic Histogram bin. Renderer labels are intentionally absent. */
export interface IChartHistogramBin {
    kind: ChartHistogramBinKind;
    lowerBound?: number;
    upperBound?: number;
    count: number;
}
/** Derived runtime-only Histogram data. */
export interface IChartHistogramData {
    sourceIndex: number;
    name: string;
    validSampleCount: number;
    bins: IChartHistogramBin[];
}
export interface ISankeyNode {
    name: string;
}
export interface ISankeyLink {
    source: string;
    target: string;
    value: number;
}
export interface IChartDataCategory {
    index: number;
    name: string;
    type: CategoryType;
    useDateAxis: boolean;
    items: IChartDataItem[];
    keys: string[];
    hierarchy?: IChartDataCategoryHierarchy;
}
export interface IChartDataCategoryLevel {
    index: number;
    name: string;
}
export interface IChartDataCategoryHierarchy {
    levels: IChartDataCategoryLevel[];
    roots: IChartDataCategoryGroup[];
}
export interface IChartDataCategoryGroup {
    label: string;
    startIndex: number;
    endIndex: number;
    children?: IChartDataCategoryGroup[];
}
export interface IChartDataCategorySegment {
    level: number;
    label: string;
    path: string[];
    startIndex: number;
    endIndex: number;
}
export interface IChartDataSeries {
    index: number;
    name: string;
    items: IChartDataItem[];
}
export interface IChartDataItem {
    value: OptionDataValue;
    label: string;
}
export interface IRuntimeAxis {
    priority: IRuntimeAxisPriority;
    position: IRuntimeAxisPosition;
    type: AxisValueType;
}
export interface IChartRuntimeContext {
    adaptiveSize?: IChartRuntimeAdaptiveSize;
    /** Runtime-only host policy that opts chart rendering into width-based adaptive sizing. */
    enableAdaptiveSize?: boolean;
    themeColors?: string[];
    axes: IRuntimeAxis[];
    themeInfo: IEchartTheme;
    wordCloudRenderConfig?: IWordCloudRenderConfig;
    /** Runtime-only host policy for rendering a chart watermark. */
    addWatermark?: boolean;
    /** Runtime-only extra inset reserved by host adapters around chart content. */
    layoutInset?: number;
    /**
     * The function to transform the color to the render color with considering the system theme is dark mode or not.
     * @param {string} color - The color to be rendered.
     * @returns {string} - The color to be rendered.
     */
    getRenderColor(color: string): string;
    /**
     * The current theme is dark mode or not.
     */
    isDarkMode: boolean;
    hasSecondaryAxis: boolean;
    localeTexts: IChartLocaleTexts;
    updateAdaptiveSizeFromDomRender?(chartWidth: number): void;
}
export interface ILabelStyle {
    visible: boolean;
    content: string;
    fontSize: number;
    color: string;
    align: LabelAlignEnum;
    bold: boolean;
    family: string;
    strikethrough: boolean;
    italic: boolean;
    underline: boolean;
    padAngle: boolean;
    axisTitleAlign?: AxisAlignEnum | undefined;
    showMaxLabel?: boolean;
    showMinLabel?: boolean;
    rotate?: number;
}
export interface IChartTitleStyle extends Omit<ILabelStyle, 'visible'> {
    /** PowerPoint manual title anchor, as chart-relative edge coordinates. */
    manualLayout?: {
        left: number;
        top: number;
    };
}
export interface ILegendStyle {
    position?: LegendPositionEnum;
    label?: Omit<ILabelStyle, 'visible' | 'align' | 'content'>;
    selectMode?: SelectModeEnum;
    /** Allow a horizontal legend to flow onto multiple rows instead of using pagination. */
    wrap?: boolean;
}
export interface IGridLineStyle {
    visible: boolean;
    color: string;
    width: number;
    dashType?: ChartBorderDashType;
}
export interface IAxisOptions {
    lineVisible: boolean;
    label: Omit<ILabelStyle, 'align' | 'content'>;
    lineStyle: IGridLineStyle;
    gridLine: IGridLineStyle;
    tick: {
        visible: boolean;
        lineWidth: number;
        lineColor: string;
        length: number;
        position: PieLabelPosition;
    };
    reverse?: boolean;
    min?: number | null;
    max?: number | null;
    format?: string;
}
export interface ISeriesLabelStyle extends ILabelStyle {
    contentType: number;
    position: SeriesLabelPosition;
    format?: string;
    /** Per-category text imported from OOXML data-label ranges. */
    customValues?: Record<number, string>;
}
export interface IPieLabelStyle extends Omit<ILabelStyle, 'align' | 'content'> {
    contentType: number;
    position: PieLabelPosition;
    format?: string;
}
export interface IPointStyle {
    shape: LinePointShape;
    size: number;
    color: Nullable<string>;
}
export interface IDataPointStyle extends Omit<IPointStyle, 'color'> {
    color: Nullable<ChartColor>;
    /** Fill opacity for this data point, from 0 (transparent) to 1 (opaque). */
    fillOpacity?: number;
}
export interface ISeriesStyle {
    chartType?: ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked;
    /** Compatibility switch for placing this series on the secondary vertical axis. It does not change the yAxis/rightYAxis option bucket semantics. */
    rightYAxis?: boolean;
    color: Nullable<ChartColor>;
    /** Fill opacity for this series, from 0 (transparent) to 1 (opaque). */
    fillOpacity: number;
    border: {
        opacity: number;
        color: Nullable<string>;
        width: number;
        dashType: ChartBorderDashType;
    };
    label: ISeriesLabelStyle;
    point: IPointStyle;
    dataPoints: {
        [index: number]: IDataPointStyle;
    };
    waterfall: {
        positive: ISeriesStyle & {
            name: string;
        };
        negative: ISeriesStyle & {
            name: string;
        };
        subtotal: ISeriesStyle & {
            name: string;
        };
    };
}
export type RightYAxisOptions = Omit<IAxisOptions, 'reverse'>;
export interface IAllSeriesStyle extends Pick<ISeriesStyle, 'border' | 'label' | 'rightYAxis' | 'point' | 'color' | 'fillOpacity' | 'waterfall'> {
}
export interface ITrendLine {
    seriesIndex: number;
    type: ChartTrendlineType;
    name: string;
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
    order?: number;
    period?: number;
    showFormula?: boolean;
    showR2?: boolean;
    r2Color?: string;
    formulaColor?: string;
}
export interface IWaterfallPointRole {
    seriesIndex: number;
    dataPointIndex: number;
    role: ChartWaterfallPointRole;
}
export interface IWaterfallConnectorStyle {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
}
export interface IChartAxisBinding {
    dimension: ChartAxisDimension;
    position: IRuntimeAxisPosition;
}
export interface IChartMarkLineLabel {
    visible?: boolean;
    text?: string;
    position?: ChartMarkLineLabelPosition;
    color?: string;
    fontSize?: number;
    bold?: boolean;
}
export type IChartMarkLine = {
    label?: IChartMarkLineLabel;
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: ChartBorderDashType;
} & ({
    axis: ChartSemanticAxis.Category | ChartSemanticAxis.SecondaryCategory;
    categoryIndex: number;
} | {
    axis: ChartSemanticAxis.PrimaryValue | ChartSemanticAxis.SecondaryValue;
    value: number;
});
export interface IBarStyle {
    /** Gap between category clusters, as a percentage of one bar width. */
    gapWidth?: number;
    /** Series overlap from -100 (separated) through 100 (fully overlapped). */
    overlap?: number;
    /** Exchange metadata. Renderers without 3D support may ignore these fields. */
    is3D: boolean;
    shape: BarShape;
    /** OOXML view rotation around the horizontal axis, in degrees. */
    rotX: number;
    /** OOXML view rotation around the vertical axis, in degrees. */
    rotY: number;
}
export interface IChartBubbleStyle {
    /** Maximum bubble size as an OOXML-compatible percentage. */
    scale?: number;
    /** Whether the authored bubble value represents its area or width. */
    sizeRepresents?: 'area' | 'width';
}
/** Manual inner plot rectangle, normalized against the whole chart frame. */
export interface IChartPlotArea {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IChartStyle {
    width: number;
    height: number;
    theme: string;
    /** Persisted absolute series colors. A non-empty value overrides theme colors. */
    palette?: string[];
    invalidValueType: InvalidValueType;
    gradientFill: boolean;
    backgroundColor: Nullable<string>;
    titleFontSize: number;
    fontSize: number;
    fontColor: string;
    fontFamily: string;
    borderColor: Nullable<string>;
    borderWidth: number;
    /** Omission keeps renderer-owned automatic layout. */
    plotArea?: IChartPlotArea;
    titles: {
        title: IChartTitleStyle;
        subtitle: IChartTitleStyle;
        xAxisTitle: Omit<ILabelStyle, 'visible'>;
        /** Primary vertical axis title. RTL may render it on the physical right, but it is still persisted here. */
        yAxisTitle: Omit<ILabelStyle, 'visible'>;
        /** Secondary vertical axis title. */
        rightYAxisTitle: Omit<ILabelStyle, 'visible'>;
        titlePosition: TitlePositionEnum;
    };
    legend: ILegendStyle;
    xAxis: IAxisOptions;
    /** Primary vertical axis options. This is a semantic bucket, not the physical left-axis bucket. */
    yAxis: IAxisOptions;
    /** Secondary vertical axis options. Do not store RTL primary vertical axis edits here. */
    rightYAxis: RightYAxisOptions;
    allSeriesStyle: IAllSeriesStyle;
    seriesStyleMap: {
        [id: string]: ISeriesStyle;
    };
    bar: IBarStyle;
    bubble: IChartBubbleStyle;
    trendlines: ITrendLine[];
    pie: {
        composite?: IChartPieCompositeSpec;
        /** Clockwise degrees from 12 o'clock, matching the authored chart semantic. */
        startAngle?: number;
        doughnutHole: Nullable<number>;
        /** Slice offset as a ratio of the pie radius. */
        explosion?: number;
        labelStyle: IPieLabelStyle;
        borderColor: string;
        hasPaddingAngle: boolean;
        /** Exchange metadata. Renderers without 3D support may ignore this field. */
        is3D: boolean;
        isHalfPie: boolean;
        rosePie: boolean;
        showLabelLine: boolean;
        valueScale: number;
        /** Persisted sparse slice overrides. Slice data remains owned by the chart data source. */
        sliceStyles: {
            [index: number]: {
                color: Nullable<ChartColor>;
                fillOpacity?: number;
            };
        };
    };
    area: {
        lineStyle: AreaLineStyle;
    };
    radar: {
        shape: RadarShape;
        fill: boolean;
    };
    funnel: {
        gap: number;
        useAbsValue: boolean;
    };
    wordCloud: {
        maskImage?: string;
        shape?: WordCloudShapeEnum;
        repeat: boolean;
    };
    relation: {
        layout: RelationChartLayoutEnum;
        useValueAsSymbolSize: boolean;
        useEmphasis: boolean;
        force: IRelationForceOptions;
        circular: {
            rotateLabel: boolean;
        };
        nodeShape: LinePointShape;
    };
    waterfall: {
        stackType: WaterfallStackTypeEnum;
        useSubtotal: boolean;
        pointRoles: IWaterfallPointRole[];
        connector: boolean | IWaterfallConnectorStyle;
    };
    markLines: IChartMarkLine[];
    tooltip: {
        indicatorLabelColor: string;
        indicatorLineType: ChartBorderDashType;
        indicatorLineColor: string;
        indicatorLabelTextColor: string;
    };
    pareto: {
        lineStyle: ISeriesStyle;
        barStyle: ISeriesStyle;
        includeZeroValues?: boolean;
    };
    heatmap: {
        visualMapType: 'continuous' | 'piecewise';
        max?: number;
        min?: number;
        unit?: string;
        label?: ISeriesLabelStyle;
    };
    candlestick: IChartCandlestickSpec;
    histogram: IChartHistogramStyleSpec;
    treemap: IChartTreemapSpec;
    sunburst: IChartSunburstSpec;
    gauge: IChartGaugeSpec;
    chord: IChartChordSpec;
}
export interface IRelationForceOptions {
    repulsion?: number;
    edgeLength?: number;
    gravity?: number;
}
export type ChartStyle = DeepPartial<IChartStyle>;
export type ChartRenderRuntimeContext = Omit<DeepPartial<IChartRuntimeContext>, 'adaptiveSize' | 'localeTexts' | 'updateAdaptiveSizeFromDomRender'> & Pick<IChartRuntimeContext, 'localeTexts'> & Partial<Pick<IChartRuntimeContext, 'adaptiveSize' | 'updateAdaptiveSizeFromDomRender'>>;
export type ChartRuntimeStyle = ChartStyle & {
    direction: ChartDirection;
    runtime: ChartRenderRuntimeContext;
};
export interface IChartConfig extends IChartData {
    type: ChartTypeBits;
}
export interface IChartSnapshot {
    id: string;
    chartType: ChartTypeBits;
    orient?: DataOrientation;
    context?: IChartSnapshotContext;
    style?: ChartStyle;
    dataAggregation?: IChartDataAggregation;
}
/** Persisted chart field selection accepted by the snapshot reader. */
export interface IChartSnapshotContext extends Pick<IChartContext, 'categoryIndexes' | 'multiLevelCategoryAxis' | 'seriesIndexes' | 'useDateAxis' | 'histogram'> {
    /** Historical snapshot field decoded only when `categoryIndexes` is absent. */
    categoryIndex?: number;
}
export interface IWaterfallLegendData {
    name: string;
    color: ChartColor;
}
export interface IChartRenderSpecConverter<ChartRenderSpec = Record<string, any>> {
    canConvert: (config: IChartConfig) => boolean;
    convert: (config: IChartConfig, style: ChartRuntimeStyle) => ChartRenderSpec;
}
export type ChartConfigInterceptor = (config: IChartConfig) => IChartConfig;
export type RenderSpecOperator<ChartRenderSpec> = (spec: ChartRenderSpec, style: ChartRuntimeStyle, config: IChartConfig, instance: IChartInstance) => void;
export declare enum ChartRenderMode {
    Image = "image",
    Dom = "dom"
}
export interface IChartHostBorderStyle {
    color?: string;
    width?: number;
}
export interface IChartHostStyle {
    stroke?: string;
    fill?: string;
    border?: IChartHostBorderStyle;
    radius?: number;
    [key: string]: any;
}
export interface IChartHostLease extends IDisposable {
    readonly mountNode: HTMLElement;
}
export interface IChartHost extends IDisposable {
    readonly chartId: string;
    readonly mode: ChartRenderMode;
    getRect(): IChartHostRect | null;
    setStyle(style: IChartHostStyle): void;
}
export interface IImageChartHost extends IChartHost {
    readonly mode: ChartRenderMode.Image;
    nextVersion(): number;
    commitSnapshot(image: ChartImageSource, version: number): boolean;
    requestPaint(): void;
    invalidateSnapshot(): void;
    acquireOffscreenHost(rect: IChartHostRect): IChartHostLease;
}
export interface IDomChartHost extends IChartHost {
    readonly mode: ChartRenderMode.Dom;
    ensureMount(): Promise<HTMLElement | null>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
}
export interface IChartRenderInput {
    chartId: string;
    config: IChartConfig;
    style: ChartRuntimeStyle;
}
export declare const CHART_DATA_UPDATE_ANIMATION_DURATION = 1000;
export interface IChartRenderTransitionOptions {
    duration: number;
}
export interface IChartRenderModelImageExportInput extends IChartRenderInput {
    width: number;
    height: number;
}
export declare const ChartImageExportFormat: {
    readonly PNG: "png";
    readonly SVG: "svg";
};
export type ChartImageExportFormat = (typeof ChartImageExportFormat)[keyof typeof ChartImageExportFormat];
export interface IChartRenderModelImageExportOptions {
    format?: ChartImageExportFormat;
    pixelRatio?: number;
    backgroundColor?: string | null;
}
export interface IChartRenderModelImageExportResult {
    dataUrl: string;
    width: number;
    height: number;
    /** Explicit raster pixel ratio. Omitted when the renderer owns the default and for vector exports. */
    pixelRatio?: number;
}
export interface IChartRenderInstance extends IDisposable {
    readonly mode: ChartRenderMode;
    bind(host: IChartHost): void;
    render(input: IChartRenderInput): Promise<void>;
    renderTransition?(previousInput: IChartRenderInput, input: IChartRenderInput, options: IChartRenderTransitionOptions): Promise<void>;
    exportImg(): Promise<string | undefined>;
    resize(): void;
    on(type: ChartElementEventType, handler: ChartElementEventHandler): IDisposable;
    setElementEditMode(enabled: boolean): void;
}
export interface IChartRenderInstanceStyleInput<Spec = Record<string, any>> extends IChartRenderInput {
    mode: ChartRenderMode;
    spec?: Spec;
}
export interface IChartRenderInstanceSpecInput<Spec = Record<string, any>> extends IChartRenderInput {
    mode: ChartRenderMode;
    spec: Spec;
}
export interface IChartRenderInstanceCreateContext<Spec = Record<string, any>> {
    resolveHostStyle?: (input: IChartRenderInstanceStyleInput<Spec>) => IChartHostStyle;
    resolveRenderBackgroundColor?: (input: IChartRenderInstanceStyleInput<Spec> & {
        hostStyle: IChartHostStyle;
    }) => string | undefined;
    prepareSpec?: (input: IChartRenderInstanceSpecInput<Spec>) => Spec;
}
export interface IChartRenderModelStylizeInit<Spec> {
    chartStyle: ChartRuntimeStyle;
    chartConfig: IChartConfig;
    chartInstance?: IChartInstance<Spec>;
}
export interface IChartRenderModel<Spec extends Record<string, any> = Record<string, any>> extends IDisposable {
    toSpec(chartConfig: IChartConfig, style: ChartRuntimeStyle): Spec;
    stylizeSpec(spec: Spec, stylizeInit: IChartRenderModelStylizeInit<Spec>, rect: IChartHostRect): Spec;
    exportImage(input: IChartRenderModelImageExportInput, options?: IChartRenderModelImageExportOptions): Promise<IChartRenderModelImageExportResult>;
    updateWatermark(addWatermark: boolean): void;
    createChartInstance(): IChartInstance<Spec>;
    createChartInstance(mode: ChartRenderMode, context?: IChartRenderInstanceCreateContext<Spec>): IChartRenderInstance;
    clearRuntimeCache?(chartId: string): void;
    clearAllRuntimeCache?(): void;
    dispose(): void;
}
export interface IChartThemeOptions {
    colors: string[];
}
export declare enum ChartImageSourceType {
    Url = "url",
    Canvas = "canvas",
    ImageBitmap = "imageBitmap"
}
export type ChartImageSource = {
    type: ChartImageSourceType.Url;
    url: string;
} | {
    type: ChartImageSourceType.Canvas;
    canvas: HTMLCanvasElement;
} | {
    type: ChartImageSourceType.ImageBitmap;
    imageBitmap: ImageBitmap;
};
export interface IChartRenderAsImageOptions {
    width: number;
    height: number;
    format?: ChartImageExportFormat;
    pixelRatio?: number;
    backgroundColor?: string;
    echartsProvider?: any;
    chartId?: string;
    host: HTMLElement;
}
export interface IChartRenderRuntimeOptions {
    echartsProvider?: any;
    chartId?: string;
    width?: number;
    height?: number;
}
export type ChartElementKind = 'blank' | 'chartArea' | 'title' | 'subtitle' | 'xAxisTitle' | 'yAxisTitle' | 'rightYAxisTitle' | 'xAxisLabel' | 'yAxisLabel' | 'rightYAxisLabel' | 'xAxisLine' | 'yAxisLine' | 'rightYAxisLine' | 'gridLine' | 'tick' | 'legend' | 'legendItem' | 'mark' | 'series' | 'dataPoint' | 'dataLabel';
export interface IChartElementBounds {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface IChartElementOverlay {
    type: 'rect' | 'circle' | 'polyline' | 'polygon' | 'sector';
    bounds: IChartElementBounds;
    shape?: Record<string, any>;
    padding?: number;
    items?: IChartElementOverlay[];
}
export interface IChartElementHit {
    kind: ChartElementKind;
    bounds?: IChartElementBounds;
    overlay?: IChartElementOverlay;
    axisId?: 'xAxis' | 'yAxis' | 'rightYAxis';
    axisIndex?: number;
    axisPosition?: 'top' | 'right' | 'bottom' | 'left';
    legendIndex?: number;
    legendName?: string;
    seriesIndex?: number;
    seriesId?: string;
    seriesName?: string;
    dataIndex?: number;
    /** Stable runtime identity for an aggregated semantic mark. Renderer indexes are intentionally omitted. */
    semanticId?: string;
    semanticKind?: 'node' | 'link';
    semanticValue?: number;
    semanticFormattedValue?: string;
    semanticEndpointAName?: string;
    semanticEndpointBName?: string;
    pieCompositeRole?: PieCompositeMarkRole;
    pieCompositePlot?: PieCompositePlot;
    pieSourcePointIndex?: number;
    pieAggregateMemberSourcePointIndexes?: readonly number[];
    baseSeriesIndex?: string;
    waterfallSeriesType?: WaterfallSeriesTypeEnum;
}
export type ChartElementEventType = 'click' | 'dblclick' | 'pointerdown' | 'pointerup' | 'pointermove' | 'pointerenter' | 'pointerleave';
export interface IChartElementEvent {
    type: ChartElementEventType;
    hit: IChartElementHit;
    localPoint: {
        x: number;
        y: number;
    };
    button?: number;
    nativeEvent?: Event;
    preventDefault?(): void;
}
export type ChartElementEventHandler = (event: IChartElementEvent) => void;
export interface IChartInstance<Spec = Record<string, any>> extends IDisposable {
    container: HTMLElement | string;
    mount(id: string | HTMLElement): void;
    render(spec: Spec, echartsProvider?: any): void;
    render(spec: Spec, options?: IChartRenderRuntimeOptions): void;
    renderAsImage(spec: Spec, options: IChartRenderAsImageOptions): Promise<ChartImageSource>;
    on(type: ChartElementEventType, handler: ChartElementEventHandler): IDisposable;
    setElementEditMode(enabled: boolean): void;
    exportImg(): Promise<string>;
    resize(): void;
}
export interface IChartInstanceConstructor<Spec> {
    new (container: HTMLElement | string): IChartInstance<Spec>;
}
export type OptionalDataValue = number | string | null | undefined;
export type ExtractArrayItem<T> = T extends Array<infer U> ? U : never;
export type EChartSpec = EChartsOption;
export type EChartSeriesItem = ExtractArrayItem<EChartSpec['series']> & {
    formattedData?: string[];
    rawData?: number[];
    seriesId: string;
};
export type EChartInstance = IChartInstance<EChartSpec>;
export type EChartRenderSpecOperator = RenderSpecOperator<EChartSpec>;
export interface IChartHostRect {
    width: number;
    height: number;
}
export type WaterfallBarSeriesOptionType = BarSeriesOption & {
    baseSeriesIndex: string;
    waterfallSeriesType: WaterfallSeriesTypeEnum;
};
