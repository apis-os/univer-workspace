import { AREA_CHART_TYPES, AreaLineStyle, ChartAggregationTarget, ChartAllSeriesStyleTarget, ChartAppearanceTarget, ChartAxisName, ChartAxisPointerTarget, ChartAxisTarget, ChartAxisTickPosition, ChartBuilder, ChartChordFocusMode, ChartChordLabelPosition, ChartChordRibbonColorMode, ChartGaugeMode, ChartGaugePointerShape, ChartMarkLineLabelPosition, ChartSemanticAxis, ChartSeriesAxis, ChartSeriesClearTarget, ChartSeriesTypeString, ChartSunburstLabelPosition, ChartThemeService, ChartTrendlineType, ChartTypeString, ChartVisualMapType, ChartWaterfallPointRole, ChartWaterfallStyleTarget, DetachedChartBuilderAdapter, InvalidValueType, LabelAlignEnum, LegendPositionEnum, LinePointShape, PieLabelPosition, PieSecondaryPlotType, RadarShape, RelationChartLayoutEnum, SelectModeEnum, SeriesLabelPosition, TitlePositionEnum, TreemapParentLabelLayout, WaterfallStackTypeEnum, WordCloudShapeEnum, clearAggregation, clearAllSeriesOverrides, clearAllSeriesStyle, clearAppearance, clearAreaLineStyle, clearAxisPointer, clearAxisTitle, clearBar, clearBubbleMapping, clearCandlestickFields, clearCategoryField, clearCellLabel, clearCumulativeLineStyle, clearDojiStyle, clearDoughnutHole, clearFallingStyle, clearHistogramField, clearHistogramOverflowThreshold, clearHistogramUnderflowThreshold, clearLegend, clearLineStyle, clearMarkLines, clearMaskImage, clearPalette, clearParetoBarStyle, clearPieComposite, clearPieLabel, clearRelationForce, clearRightYAxis, clearRisingStyle, clearSeries, clearSliceBorderColor, clearSliceStyle, clearSubtitle, clearTheme, clearTitle, clearTrendlines, clearValueFields, clearValueRange, clearValueUnit, clearWaterfallConnector, clearWaterfallStyle, clearXAxis, clearYAxis, removeTrendline, resetAutoGradientFill, resetCandleWidth, resetChordEmphasis, resetChordLabel, resetChordLayout, resetChordNode, resetChordRibbon, resetCircularLabelRotation, resetCombinationSeriesAxis, resetCombinationSeriesType, resetEmphasisEnabled, resetExplosion, resetFunnelGap, resetGaugeAnchor, resetGaugeAngles, resetGaugeAxisLabel, resetGaugeAxisLine, resetGaugeAxisTick, resetGaugeDetail, resetGaugeMode, resetGaugePointer, resetGaugeProgress, resetGaugeRanges, resetGaugeScale, resetGaugeSplitLine, resetGaugeTitle, resetHalfPie, resetHistogramBinGap, resetHistogramBinning, resetIncludeZeroValues, resetInvalidValueStrategy, resetLabelLineVisible, resetPaddingAngleEnabled, resetRadarFill, resetRadarShape, resetRelationLayout, resetRelationNodeShape, resetRosePie, resetSunburstCenterLabel, resetSunburstLabel, resetTreemapLabel, resetTreemapParentLabelLayout, resetUseAbsoluteValue, resetUseDateAxis, resetUseSubtotal, resetUseValueAsSymbolSize, resetValueScale, resetVisualMapType, resetWaterfallStackType, resetWordCloudRepeat, resetWordCloudShape, setAggregation, setAllSeriesStyle, setAppearance, setAreaLineStyle, setAutoGradientFill, setAxisPointer, setAxisTitle, setBar, setBubbleMapping, setCandleWidth, setCandlestickFields, setCategoryField, setCellLabel, setChordEmphasis, setChordLabel, setChordLayout, setChordMapping, setChordNode, setChordRibbon, setCircularLabelRotation, setCombinationSeriesAxis, setCombinationSeriesType, setCumulativeLineStyle, setDojiStyle, setDoughnutHole, setEmphasisEnabled, setExplosion, setFallingStyle, setFunnelGap, setGaugeAnchor, setGaugeAngles, setGaugeAxisLabel, setGaugeAxisLine, setGaugeAxisTick, setGaugeDetail, setGaugeMode, setGaugePointer, setGaugeProgress, setGaugeRanges, setGaugeScale, setGaugeSplitLine, setGaugeTicks, setGaugeTitle, setGaugeValueField, setHalfPie, setHistogramBinCount, setHistogramBinGap, setHistogramBinWidth, setHistogramField, setHistogramOverflowThreshold, setHistogramUnderflowThreshold, setIncludeZeroValues, setInvalidValueStrategy, setLabelLineVisible, setLegend, setLineStyle, setMarkLines, setMaskImage, setPaddingAngleEnabled, setPalette, setParetoBarStyle, setPieComposite, setPieLabel, setRadarFill, setRadarShape, setRelationForce, setRelationLayout, setRelationNodeShape, setRightYAxis, setRisingStyle, setRosePie, setSeries, setSliceBorderColor, setSliceStyle, setSubtitle, setSunburstCenterLabel, setSunburstHierarchyFields, setSunburstLabel, setSunburstValueField, setTheme, setTitle, setTreemapHierarchyFields, setTreemapLabel, setTreemapParentLabelLayout, setTreemapValueField, setTrendline, setUseAbsoluteValue, setUseDateAxis, setUseSubtotal, setUseValueAsSymbolSize, setValueFields, setValueRange, setValueScale, setValueUnit, setVisualMapType, setWaterfallConnector, setWaterfallPointRoles, setWaterfallStackType, setWaterfallStyle, setWordCloudRepeat, setWordCloudShape, setXAxis, setYAxis, toChartCreateConfig, toChartCreateConfigSnapshot } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, Tools, generateRandomId } from "@univerjs/core";
import { FBase, FEnum, FUniver } from "@univerjs/core/facade";
import { di } from "./facade-engine-chart-chart-builder.js";
import { G, H, J, K, Q, Qr, W, X, Y, Z, ai, ci, ei, ii, ni, oi, q, ri, si, ti, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 } from "./facade-engine-chart-fchart-builder.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 } from "./facade-engine-chart-fword-cloud-chart-builder.js";
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => setCategoryField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)), {
    mapping: {
      categoryIndexes: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392]
    }
  };
}
function z() {
  return {
    mapping: {
      categoryIndexes: null
    }
  };
}
function fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425) {
  di.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425);
}
const mi = {
  [ChartTypeString.Line]: ti,
  [ChartTypeString.Column]: W,
  [ChartTypeString.ColumnStacked]: W,
  [ChartTypeString.ColumnPercentStacked]: W,
  [ChartTypeString.Bar]: W,
  [ChartTypeString.BarStacked]: W,
  [ChartTypeString.BarPercentStacked]: W,
  [ChartTypeString.Pie]: Q,
  [ChartTypeString.Donut]: Q,
  [ChartTypeString.Area]: G,
  [ChartTypeString.AreaStacked]: G,
  [ChartTypeString.AreaPercentStacked]: G,
  [ChartTypeString.Radar]: ri,
  [ChartTypeString.Scatter]: ai,
  [ChartTypeString.Combination]: X,
  [ChartTypeString.WordCloud]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461,
  [ChartTypeString.Funnel]: Z,
  [ChartTypeString.Bubble]: q,
  [ChartTypeString.Relation]: ii,
  [ChartTypeString.Waterfall]: ci,
  [ChartTypeString.Pareto]: ni,
  [ChartTypeString.Sankey]: H,
  [ChartTypeString.Heatmap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460,
  [ChartTypeString.Boxplot]: K,
  [ChartTypeString.Candlestick]: J,
  [ChartTypeString.Histogram]: ei,
  [ChartTypeString.Treemap]: si,
  [ChartTypeString.Sunburst]: oi,
  [ChartTypeString.Gauge]: Qr,
  [ChartTypeString.Chord]: Y
};
for (let e of Object.keys(mi)) fi(e, mi[e]);
var hi = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Default = "default", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer1 = "univer1", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer2 = "univer2", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer3 = "univer3", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer4 = "univer4", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer5 = "univer5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.Univer6 = "univer6", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient1 = "univer\x20gradient1", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient2 = "univer gradient2", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient3 = "univer\x20gradient3", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient4 = "univer gradient4", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient5 = "univer\x20gradient5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.UniverGradient6 = "univer\x20gradient6", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432;
  }(hi || {}),
  gi = class extends FEnum {
    get ChartAggregationTarget() {
      return ChartAggregationTarget;
    }
    get ChartTrendlineType() {
      return ChartTrendlineType;
    }
    get ChartAppearanceTarget() {
      return ChartAppearanceTarget;
    }
    get ChartAxisName() {
      return ChartAxisName;
    }
    get ChartAxisPointerTarget() {
      return ChartAxisPointerTarget;
    }
    get ChartAxisTarget() {
      return ChartAxisTarget;
    }
    get ChartAxisTickPosition() {
      return ChartAxisTickPosition;
    }
    get ChartMarkLineLabelPosition() {
      return ChartMarkLineLabelPosition;
    }
    get ChartSemanticAxis() {
      return ChartSemanticAxis;
    }
    get ChartChordFocusMode() {
      return ChartChordFocusMode;
    }
    get ChartChordLabelPosition() {
      return ChartChordLabelPosition;
    }
    get ChartChordRibbonColorMode() {
      return ChartChordRibbonColorMode;
    }
    get ChartGaugeMode() {
      return ChartGaugeMode;
    }
    get ChartGaugePointerShape() {
      return ChartGaugePointerShape;
    }
    get ChartSeriesAxis() {
      return ChartSeriesAxis;
    }
    get ChartSeriesClearTarget() {
      return ChartSeriesClearTarget;
    }
    get ChartAllSeriesStyleTarget() {
      return ChartAllSeriesStyleTarget;
    }
    get ChartSeriesTypeString() {
      return ChartSeriesTypeString;
    }
    get ChartSunburstLabelPosition() {
      return ChartSunburstLabelPosition;
    }
    get ChartTypeString() {
      return ChartTypeString;
    }
    get ChartThemeName() {
      return hi;
    }
    get ChartVisualMapType() {
      return ChartVisualMapType;
    }
    get ChartWaterfallStyleTarget() {
      return ChartWaterfallStyleTarget;
    }
    get ChartWaterfallPointRole() {
      return ChartWaterfallPointRole;
    }
    get ChartAreaLineStyle() {
      return AreaLineStyle;
    }
    get ChartInvalidValueType() {
      return InvalidValueType;
    }
    get ChartLabelAlignEnum() {
      return LabelAlignEnum;
    }
    get ChartLegendPositionEnum() {
      return LegendPositionEnum;
    }
    get ChartLinePointShape() {
      return LinePointShape;
    }
    get ChartPieLabelPosition() {
      return PieLabelPosition;
    }
    get ChartPieSecondaryPlotType() {
      return PieSecondaryPlotType;
    }
    get ChartRadarShape() {
      return RadarShape;
    }
    get ChartRelationChartLayoutEnum() {
      return RelationChartLayoutEnum;
    }
    get ChartSelectModeEnum() {
      return SelectModeEnum;
    }
    get ChartSeriesLabelPosition() {
      return SeriesLabelPosition;
    }
    get ChartTitlePositionEnum() {
      return TitlePositionEnum;
    }
    get ChartTreemapParentLabelLayout() {
      return TreemapParentLabelLayout;
    }
    get ChartWaterfallStackTypeEnum() {
      return WaterfallStackTypeEnum;
    }
    get ChartWordCloudShapeEnum() {
      return WordCloudShapeEnum;
    }
  };
FEnum.extend(gi);
var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 = class extends FUniver {
  registerTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307) {
    this._injector["get"](ChartThemeService).registerTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307);
  }
};
FUniver.extend(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462);
export { R, z };
