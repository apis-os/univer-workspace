import { AreaLineStyle, ChartAggregationTarget, ChartAllSeriesStyleTarget, ChartAppearanceTarget, ChartAxisName, ChartAxisPointerTarget, ChartAxisTarget, ChartAxisTickPosition, ChartChordFocusMode, ChartChordLabelPosition, ChartChordRibbonColorMode, ChartGaugeMode, ChartGaugePointerShape, ChartMarkLineLabelPosition, ChartSemanticAxis, ChartSeriesAxis, ChartSeriesClearTarget, ChartSeriesTypeString, ChartSunburstLabelPosition, ChartTrendlineType, ChartTypeString, ChartVisualMapType, ChartWaterfallPointRole, ChartWaterfallStyleTarget, InvalidValueType, LabelAlignEnum, LegendPositionEnum, LinePointShape, PieLabelPosition, PieSecondaryPlotType, RadarShape, RelationChartLayoutEnum, SelectModeEnum, SeriesLabelPosition, TitlePositionEnum, TreemapParentLabelLayout, WaterfallStackTypeEnum, WordCloudShapeEnum } from '@univerjs-pro/engine-chart';
import { FEnum } from '@univerjs/core/facade';
/** Built-in Chart theme names exposed through `univerAPI.Enum.ChartThemeName`. */
declare enum ChartThemeName {
    /** Balanced Univer palette with blue, cyan, pink, orange, purple, and light blue. */
    Default = "default",
    /** Bright blue-and-cyan palette accented with coral and yellow. */
    Univer1 = "univer1",
    /** High-contrast palette combining blue, coral, cyan, yellow, green, and orange. */
    Univer2 = "univer2",
    /** Softer pastel palette led by light blue and cyan with warm coral and orange accents. */
    Univer3 = "univer3",
    /** Blue-and-coral palette softened with lavender, pink, light blue, and peach. */
    Univer4 = "univer4",
    /** Light, low-saturation pastel palette with blue, cyan, lavender, pink, and peach. */
    Univer5 = "univer5",
    /** Vivid mixed palette with strong blue, coral, yellow, cyan, and orange contrast. */
    Univer6 = "univer6",
    /** Monochromatic blue palette progressing from deep navy blue to pale periwinkle. */
    UniverGradient1 = "univer gradient1",
    /** Monochromatic purple palette progressing from deep violet to pale lavender. */
    UniverGradient2 = "univer gradient2",
    /** Monochromatic red palette progressing from dark crimson to soft coral pink. */
    UniverGradient3 = "univer gradient3",
    /** Monochromatic azure palette progressing from deep blue to pale sky blue. */
    UniverGradient4 = "univer gradient4",
    /** Monochromatic magenta palette progressing from deep berry to pale pink. */
    UniverGradient5 = "univer gradient5",
    /** Monochromatic teal palette progressing from deep teal to pale cyan. */
    UniverGradient6 = "univer gradient6"
}
/** @ignore */
export interface IFChartEnumMixin {
    /**
     * Targets used when clearing selected Chart aggregation settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setAggregation({ topN: { count: 5 } })
     *   .clearAggregation(univerAPI.Enum.ChartAggregationTarget.TopN)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAggregationTarget: typeof ChartAggregationTarget;
    /**
     * Trendline algorithms accepted by Cartesian series builders.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setTrendline(0, { type: univerAPI.Enum.ChartTrendlineType.linear })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartTrendlineType: typeof ChartTrendlineType;
    /**
     * Targets used when clearing selected Chart appearance settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setAppearance({ background: { color: '#ffffff' } })
     *   .clearAppearance(univerAPI.Enum.ChartAppearanceTarget.Background)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAppearanceTarget: typeof ChartAppearanceTarget;
    /**
     * Semantic names for the category, primary value, and secondary value axes.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .build();
     * const fChart = await fWorksheet.insertChart(chartInfo);
     *
     * const updatedInfo = fChart.toBuilder().build();
     * await fChart.update({
     *   ...updatedInfo,
     *   config: {
     *     ...updatedInfo.config,
     *     axes: {
     *       ...updatedInfo.config.axes,
     *       [univerAPI.Enum.ChartAxisName.Y]: {
     *         title: 'Revenue',
     *       },
     *     },
     *   },
     * });
     * ```
     */
    ChartAxisName: typeof ChartAxisName;
    /**
     * Targets used when clearing selected axis-pointer settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setAxisPointer({ indicatorLineColor: '#2563eb' })
     *   .clearAxisPointer(univerAPI.Enum.ChartAxisPointerTarget.IndicatorLineColor)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAxisPointerTarget: typeof ChartAxisPointerTarget;
    /**
     * Targets used when clearing selected axis settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setYAxis({ gridLine: { visible: true } })
     *   .clearYAxis(univerAPI.Enum.ChartAxisTarget.GridLine)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAxisTarget: typeof ChartAxisTarget;
    /**
     * Positions for rendering axis ticks inside or outside the axis.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setXAxis({ tick: { position: univerAPI.Enum.ChartAxisTickPosition.Outside } })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAxisTickPosition: typeof ChartAxisTickPosition;
    /**
     * Label positions supported by semantic Chart mark lines.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setMarkLines([{
     *     axis: univerAPI.Enum.ChartSemanticAxis.PrimaryValue,
     *     value: 80,
     *     label: { position: univerAPI.Enum.ChartMarkLineLabelPosition.End },
     *   }])
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartMarkLineLabelPosition: typeof ChartMarkLineLabelPosition;
    /**
     * Semantic axes referenced by mark lines and other cross-axis settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setMarkLines([{
     *     axis: univerAPI.Enum.ChartSemanticAxis.PrimaryValue,
     *     value: 80,
     *   }])
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSemanticAxis: typeof ChartSemanticAxis;
    /**
     * Focus behavior used when emphasizing a Chord node or ribbon.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
     *   .setSource('A1:C8')
     *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
     *   .setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartChordFocusMode: typeof ChartChordFocusMode;
    /**
     * Positions supported by Chord node labels.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
     *   .setSource('A1:C8')
     *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
     *   .setChordLabel({ position: univerAPI.Enum.ChartChordLabelPosition.Outside })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartChordLabelPosition: typeof ChartChordLabelPosition;
    /**
     * Color sources supported by Chord ribbons.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
     *   .setSource('A1:C8')
     *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
     *   .setChordRibbon({ color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartChordRibbonColorMode: typeof ChartChordRibbonColorMode;
    /**
     * Visual-language presets supported by Gauge Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
     *   .setSource('A1:B8')
     *   .setCategoryField(0)
     *   .setGaugeValueField(1)
     *   .setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartGaugeMode: typeof ChartGaugeMode;
    /**
     * Pointer shapes supported by Gauge Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
     *   .setSource('A1:B8')
     *   .setCategoryField(0)
     *   .setGaugeValueField(1)
     *   .setGaugePointer({ shape: univerAPI.Enum.ChartGaugePointerShape.Needle })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartGaugePointerShape: typeof ChartGaugePointerShape;
    /**
     * Primary and secondary value-axis assignments for combination series.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
     *   .setSource('A1:D8')
     *   .setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSeriesAxis: typeof ChartSeriesAxis;
    /**
     * Targets used when clearing selected per-series style settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setSeries(0, { color: '#2563eb' })
     *   .clearSeries(0, univerAPI.Enum.ChartSeriesClearTarget.Color)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSeriesClearTarget: typeof ChartSeriesClearTarget;
    /**
     * Targets used when clearing selected all-series style settings.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setAllSeriesStyle({ color: '#2563eb' })
     *   .clearAllSeriesStyle(univerAPI.Enum.ChartAllSeriesStyleTarget.Color)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAllSeriesStyleTarget: typeof ChartAllSeriesStyleTarget;
    /**
     * Series types available inside a Combination Chart.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
     *   .setSource('A1:D8')
     *   .setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.ColumnStacked)
     *   .setSeriesType(1, univerAPI.Enum.ChartSeriesTypeString.AreaStacked)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSeriesTypeString: typeof ChartSeriesTypeString;
    /**
     * Label positions supported by Sunburst Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Sunburst)
     *   .setSource('A1:D8')
     *   .setHierarchyFields([0, 1, 2])
     *   .setValueField(3)
     *   .setSunburstLabel({ position: univerAPI.Enum.ChartSunburstLabelPosition.Outside })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSunburstLabelPosition: typeof ChartSunburstLabelPosition;
    /**
     * Canonical Chart types accepted by `newChart()` and `toBuilder(type)`.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
     *   .setSource('A1:B8')
     *   .setCategoryField(0)
     *   .setGaugeValueField(1)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartTypeString: typeof ChartTypeString;
    /**
     * Stable names of the built-in Chart themes.
     *
     * Custom themes registered through `univerAPI.registerTheme()` continue to use their
     * registered string names directly.
     *
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:B8')
     *   .setTheme(univerAPI.Enum.ChartThemeName.UniverGradient1)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartThemeName: typeof ChartThemeName;
    /**
     * Continuous and piecewise visual-map modes for Heatmap Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Heatmap)
     *   .setSource('A1:D8')
     *   .setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartVisualMapType: typeof ChartVisualMapType;
    /**
     * Targets used when clearing selected Waterfall point styles.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
     *   .setSource('A1:B8')
     *   .build();
     * const fChart = await fWorksheet.insertChart(chartInfo);
     *
     * const updatedInfo = fChart.toBuilder().build();
     * await fChart.update({
     *   ...updatedInfo,
     *   config: {
     *     ...updatedInfo.config,
     *     series: [{
     *       selector: { index: 0 },
     *       waterfallStyles: {
     *         [univerAPI.Enum.ChartWaterfallStyleTarget.Positive]: {
     *           color: '#16a34a',
     *         },
     *       },
     *     }],
     *   },
     * });
     * ```
     */
    ChartWaterfallStyleTarget: typeof ChartWaterfallStyleTarget;
    /**
     * Semantic point roles used to mark Waterfall totals and subtotals.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
     *   .setSource('A1:B8')
     *   .setPointRoles([{
     *     series: 0,
     *     dataPointIndex: 3,
     *     role: univerAPI.Enum.ChartWaterfallPointRole.Total,
     *   }])
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartWaterfallPointRole: typeof ChartWaterfallPointRole;
    /**
     * Straight and smooth line styles for Area Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Area)
     *   .setSource('A1:D8')
     *   .setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartAreaLineStyle: typeof AreaLineStyle;
    /**
     * Strategies for handling invalid or missing Chart values.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartInvalidValueType: typeof InvalidValueType;
    /**
     * Horizontal label-alignment values used by Chart label specifications.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setTitle({ text: 'Sales', alignment: univerAPI.Enum.ChartLabelAlignEnum.Center })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartLabelAlignEnum: typeof LabelAlignEnum;
    /**
     * Placement values for Chart legends.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartLegendPositionEnum: typeof LegendPositionEnum;
    /**
     * Point-symbol shapes used by Line and Relation Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
     *   .setSource('A1:C8')
     *   .setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartLinePointShape: typeof LinePointShape;
    /**
     * Label positions supported by Pie and Donut Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
     *   .setSource('A1:B8')
     *   .setPieLabel({ position: univerAPI.Enum.ChartPieLabelPosition.Outside })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartPieLabelPosition: typeof PieLabelPosition;
    /**
     * Secondary plot types supported by composite Pie Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
     *   .setSource('A1:B8')
     *   .setPieComposite({
     *     enabled: true,
     *     secondaryPlot: { type: univerAPI.Enum.ChartPieSecondaryPlotType.Pie },
     *   })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartPieSecondaryPlotType: typeof PieSecondaryPlotType;
    /**
     * Polygon and circle layouts for Radar Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Radar)
     *   .setSource('A1:D8')
     *   .setShape(univerAPI.Enum.ChartRadarShape.Circle)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartRadarShape: typeof RadarShape;
    /**
     * Force, circular, and other layouts supported by Relation Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
     *   .setSource('A1:C8')
     *   .setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartRelationChartLayoutEnum: typeof RelationChartLayoutEnum;
    /**
     * Legend selection behaviors.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setLegend({ selectMode: univerAPI.Enum.ChartSelectModeEnum.Multiple })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSelectModeEnum: typeof SelectModeEnum;
    /**
     * Label positions shared by supported Chart series.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource('A1:D8')
     *   .setSeries(0, { label: { position: univerAPI.Enum.ChartSeriesLabelPosition.Inside } })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSeriesLabelPosition: typeof SeriesLabelPosition;
    /**
     * Placement values for Chart titles.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setTitle({ text: 'Sales', position: univerAPI.Enum.ChartTitlePositionEnum.Top })
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartTitlePositionEnum: typeof TitlePositionEnum;
    /**
     * Layout modes supported by Treemap parent labels.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Treemap)
     *   .setSource('A1:D8')
     *   .setHierarchyFields([0, 1, 2])
     *   .setValueField(3)
     *   .setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartTreemapParentLabelLayout: typeof TreemapParentLabelLayout;
    /**
     * Stacking modes supported by Waterfall Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
     *   .setSource('A1:B8')
     *   .setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartWaterfallStackTypeEnum: typeof WaterfallStackTypeEnum;
    /**
     * Built-in outline shapes for Word Cloud Charts.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.WordCloud)
     *   .setSource('A1:B8')
     *   .setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Cloud)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartWordCloudShapeEnum: typeof WordCloudShapeEnum;
}
/** @ignore */
export declare class FChartEnumMixin extends FEnum implements IFChartEnumMixin {
    get ChartAggregationTarget(): typeof ChartAggregationTarget;
    get ChartTrendlineType(): typeof ChartTrendlineType;
    get ChartAppearanceTarget(): typeof ChartAppearanceTarget;
    get ChartAxisName(): typeof ChartAxisName;
    get ChartAxisPointerTarget(): typeof ChartAxisPointerTarget;
    get ChartAxisTarget(): typeof ChartAxisTarget;
    get ChartAxisTickPosition(): typeof ChartAxisTickPosition;
    get ChartMarkLineLabelPosition(): typeof ChartMarkLineLabelPosition;
    get ChartSemanticAxis(): typeof ChartSemanticAxis;
    get ChartChordFocusMode(): typeof ChartChordFocusMode;
    get ChartChordLabelPosition(): typeof ChartChordLabelPosition;
    get ChartChordRibbonColorMode(): typeof ChartChordRibbonColorMode;
    get ChartGaugeMode(): typeof ChartGaugeMode;
    get ChartGaugePointerShape(): typeof ChartGaugePointerShape;
    get ChartSeriesAxis(): typeof ChartSeriesAxis;
    get ChartSeriesClearTarget(): typeof ChartSeriesClearTarget;
    get ChartAllSeriesStyleTarget(): typeof ChartAllSeriesStyleTarget;
    get ChartSeriesTypeString(): typeof ChartSeriesTypeString;
    get ChartSunburstLabelPosition(): typeof ChartSunburstLabelPosition;
    get ChartTypeString(): typeof ChartTypeString;
    get ChartThemeName(): typeof ChartThemeName;
    get ChartVisualMapType(): typeof ChartVisualMapType;
    get ChartWaterfallStyleTarget(): typeof ChartWaterfallStyleTarget;
    get ChartWaterfallPointRole(): typeof ChartWaterfallPointRole;
    get ChartAreaLineStyle(): typeof AreaLineStyle;
    get ChartInvalidValueType(): typeof InvalidValueType;
    get ChartLabelAlignEnum(): typeof LabelAlignEnum;
    get ChartLegendPositionEnum(): typeof LegendPositionEnum;
    get ChartLinePointShape(): typeof LinePointShape;
    get ChartPieLabelPosition(): typeof PieLabelPosition;
    get ChartPieSecondaryPlotType(): typeof PieSecondaryPlotType;
    get ChartRadarShape(): typeof RadarShape;
    get ChartRelationChartLayoutEnum(): typeof RelationChartLayoutEnum;
    get ChartSelectModeEnum(): typeof SelectModeEnum;
    get ChartSeriesLabelPosition(): typeof SeriesLabelPosition;
    get ChartTitlePositionEnum(): typeof TitlePositionEnum;
    get ChartTreemapParentLabelLayout(): typeof TreemapParentLabelLayout;
    get ChartWaterfallStackTypeEnum(): typeof WaterfallStackTypeEnum;
    get ChartWordCloudShapeEnum(): typeof WordCloudShapeEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFChartEnumMixin {
    }
}
export {};
