Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade");
function r(var_core_value_sigC6E5) {
  return var_core_value_sigC6E5.forEach(var_core_value_sig3D7D => (0, e.setCategoryField)(var_core_value_sig3D7D)), {
    mapping: {
      categoryIndexes: [...var_core_value_sigC6E5]
    }
  };
}
function i() {
  return {
    mapping: {
      categoryIndexes: null
    }
  };
}
function a(var_core_value_sigCEFB) {
  "@babel/helpers - typeof";

  return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig27E5) {
    return typeof var_core_value_sig27E5;
  } : function (var_core_value_sig8061) {
    return var_core_value_sig8061 && typeof Symbol == "function" && var_core_value_sig8061.constructor === Symbol && var_core_value_sig8061 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8061;
  }, a(var_core_value_sigCEFB);
}
function o(var_core_value_sig1537, var_core_value_sigE4C6) {
  if (a(var_core_value_sig1537) != "object" || !var_core_value_sig1537) return var_core_value_sig1537;
  var var_core_value_sig4313 = var_core_value_sig1537[Symbol.toPrimitive];
  if (var_core_value_sig4313 !== undefined) {
    var var_core_value_sigFC87 = var_core_value_sig4313.call(var_core_value_sig1537, var_core_value_sigE4C6 || "default");
    if (a(var_core_value_sigFC87) != "object") return var_core_value_sigFC87;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigE4C6 === "string" ? String : Number)(var_core_value_sig1537);
}
function s(var_core_value_sig156F) {
  var var_core_value_sigDD51 = o(var_core_value_sig156F, "string");
  return a(var_core_value_sigDD51) == "symbol" ? var_core_value_sigDD51 : var_core_value_sigDD51 + "";
}
function c(var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA) {
  return (var_core_value_sig72F6 = s(var_core_value_sig72F6)) in var_core_value_sigF057 ? Object.defineProperty(var_core_value_sigF057, var_core_value_sig72F6, {
    value: var_core_value_sig9FBA,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigF057[var_core_value_sig72F6] = var_core_value_sig9FBA, var_core_value_sigF057;
}
var l = class {
    constructor(var_core_value_sig4D4C) {
      this._context = var_core_value_sig4D4C, c(this, "_builder", undefined), c(this, "_info", undefined), this._builder = var_core_value_sig4D4C.builder, this._info = var_core_value_sig4D4C.info;
    }
    setSource(var_core_value_sigC9E0) {
      return this._info["dataSource"] = t.Tools["deepClone"](this._context["normalizeSource"](var_core_value_sigC9E0)), this;
    }
    setAbsolutePosition(var_core_value_sig76BA, var_core_value_sigFBFA) {
      return this._info["position"] = {
        x: var_core_value_sig76BA,
        y: var_core_value_sigFBFA
      }, this;
    }
    setSize(var_core_value_sigF602, var_core_value_sig1BBD) {
      return this._info["size"] = {
        width: var_core_value_sigF602,
        height: var_core_value_sig1BBD
      }, this;
    }
    build() {
      if (this._context["requireSource"] && this._info["dataSource"] === undefined) throw Error("Chart data source is required. Please call setSource() before build().");
      let var_core_value_sigF704 = t.Tools["deepClone"](this._info);
      return var_core_value_sigF704.config = this._context["createConfig"](this._builder), var_core_value_sigF704;
    }
    _record(var_core_value_sig2BCF) {
      return this._builder["mergePending"](var_core_value_sig2BCF), this;
    }
    _describe() {
      return this._builder["describe"]();
    }
    setTitle(var_core_value_sig0D69) {
      return this._builder["apply"]((0, e.setTitle)(var_core_value_sig0D69)), this;
    }
    clearTitle() {
      return this._builder["apply"]((0, e.clearTitle)()), this;
    }
    setSubtitle(var_core_value_sig480E) {
      return this._builder["apply"]((0, e.setSubtitle)(var_core_value_sig480E)), this;
    }
    clearSubtitle() {
      return this._builder["apply"]((0, e.clearSubtitle)()), this;
    }
    setLegend(var_core_value_sig26DB) {
      return this._builder["apply"]((0, e.setLegend)(var_core_value_sig26DB)), this;
    }
    clearLegend() {
      return this._builder["apply"]((0, e.clearLegend)()), this;
    }
    setTheme(var_core_value_sigF0F9) {
      return this._builder["apply"]((0, e.setTheme)(var_core_value_sigF0F9)), this;
    }
    clearTheme() {
      return this._builder["apply"]((0, e.clearTheme)()), this;
    }
    setPalette(var_core_value_sig1A0F) {
      return this._builder["apply"]((0, e.setPalette)(var_core_value_sig1A0F)), this;
    }
    clearPalette() {
      return this._builder["apply"]((0, e.clearPalette)()), this;
    }
    setAppearance(var_core_value_sigFBA4) {
      return this._builder["apply"]((0, e.setAppearance)(var_core_value_sigFBA4)), this;
    }
    clearAppearance(var_core_value_sig4383) {
      return this._builder["apply"]((0, e.clearAppearance)(var_core_value_sig4383)), this;
    }
    setAutoGradientFill(var_core_value_sig186C) {
      return this._builder["apply"]((0, e.setAutoGradientFill)(var_core_value_sig186C)), this;
    }
    resetAutoGradientFill() {
      return this._builder["apply"]((0, e.resetAutoGradientFill)()), this;
    }
    setInvalidValueStrategy(var_core_value_sigD955) {
      return this._builder["apply"]((0, e.setInvalidValueStrategy)(var_core_value_sigD955)), this;
    }
    resetInvalidValueStrategy() {
      return this._builder["apply"]((0, e.resetInvalidValueStrategy)()), this;
    }
    setCategoryField(var_core_value_sig48BD) {
      return this._builder["apply"]((0, e.setCategoryField)(var_core_value_sig48BD)), this;
    }
    setCategoryFields(var_core_value_sig429F) {
      return this._builder["mergePending"](r(var_core_value_sig429F)), this;
    }
    clearCategoryFields() {
      return this._builder["mergePending"](i()), this;
    }
    setMultiLevelCategoryAxis(var_core_value_sigF62A) {
      return this._builder["mergePending"]({
        mapping: {
          multiLevelCategoryAxis: var_core_value_sigF62A
        }
      }), this;
    }
    clearCategoryField() {
      return this._builder["apply"]((0, e.clearCategoryField)()), this;
    }
    setValueFields(var_core_value_sig8178) {
      return this._builder["apply"]((0, e.setValueFields)(var_core_value_sig8178)), this;
    }
    clearValueFields() {
      return this._builder["apply"]((0, e.clearValueFields)()), this;
    }
    setAggregation(var_core_value_sigE9ED) {
      return this._builder["apply"]((0, e.setAggregation)(var_core_value_sigE9ED)), this;
    }
    clearAggregation(var_core_value_sigB577) {
      return this._builder["apply"]((0, e.clearAggregation)(var_core_value_sigB577)), this;
    }
  },
  u = class extends l {
    setMarkLines(var_core_value_sig9572) {
      return this._builder["apply"]((0, e.setMarkLines)(var_core_value_sig9572)), this;
    }
    clearMarkLines() {
      return this._builder["apply"]((0, e.clearMarkLines)()), this;
    }
    setXAxis(var_core_value_sigD873) {
      return this._builder["apply"]((0, e.setXAxis)(var_core_value_sigD873)), this;
    }
    clearXAxis(var_core_value_sigA12B) {
      return this._builder["apply"]((0, e.clearXAxis)(var_core_value_sigA12B)), this;
    }
    setYAxis(var_core_value_sigF230) {
      return this._builder["apply"]((0, e.setYAxis)(var_core_value_sigF230)), this;
    }
    clearYAxis(var_core_value_sig09B8) {
      return this._builder["apply"]((0, e.clearYAxis)(var_core_value_sig09B8)), this;
    }
    setRightYAxis(var_core_value_sig6F91) {
      return this._builder["apply"]((0, e.setRightYAxis)(var_core_value_sig6F91)), this;
    }
    clearRightYAxis(var_core_value_sigF9C7) {
      return this._builder["apply"]((0, e.clearRightYAxis)(var_core_value_sigF9C7)), this;
    }
    setXAxisTitle(var_core_value_sig8895) {
      return this._builder["apply"]((0, e.setAxisTitle)(e.ChartAxisName["X"], var_core_value_sig8895)), this;
    }
    clearXAxisTitle() {
      return this._builder["apply"]((0, e.clearAxisTitle)(e.ChartAxisName["X"])), this;
    }
    setYAxisTitle(var_core_value_sigC80B) {
      return this._builder["apply"]((0, e.setAxisTitle)(e.ChartAxisName["Y"], var_core_value_sigC80B)), this;
    }
    clearYAxisTitle() {
      return this._builder["apply"]((0, e.clearAxisTitle)(e.ChartAxisName["Y"])), this;
    }
    setRightYAxisTitle(var_core_value_sig284F) {
      return this._builder["apply"]((0, e.setAxisTitle)(e.ChartAxisName["RightY"], var_core_value_sig284F)), this;
    }
    clearRightYAxisTitle() {
      return this._builder["apply"]((0, e.clearAxisTitle)(e.ChartAxisName["RightY"])), this;
    }
    setUseDateAxis(var_core_value_sigE154) {
      return this._builder["apply"]((0, e.setUseDateAxis)(var_core_value_sigE154)), this;
    }
    resetUseDateAxis() {
      return this._builder["apply"]((0, e.resetUseDateAxis)()), this;
    }
  },
  d = class extends u {
    setBar(var_core_value_sig4632) {
      return this._builder["apply"]((0, e.setBar)(var_core_value_sig4632)), this;
    }
    clearBar() {
      return this._builder["apply"]((0, e.clearBar)()), this;
    }
    setSeries(var_core_value_sig12F2, var_core_value_sig2259) {
      return this._builder["apply"]((0, e.setSeries)(var_core_value_sig12F2, var_core_value_sig2259)), this;
    }
    clearSeries(var_core_value_sig9E2F, var_core_value_sigD082) {
      return this._builder["apply"]((0, e.clearSeries)(var_core_value_sig9E2F, var_core_value_sigD082)), this;
    }
    clearAllSeriesOverrides() {
      return this._builder["apply"]((0, e.clearAllSeriesOverrides)()), this;
    }
    setAllSeriesStyle(var_core_value_sigDBB7) {
      return this._builder["apply"]((0, e.setAllSeriesStyle)(var_core_value_sigDBB7)), this;
    }
    clearAllSeriesStyle(var_core_value_sigD0A8) {
      return this._builder["apply"]((0, e.clearAllSeriesStyle)(var_core_value_sigD0A8)), this;
    }
    setTrendline(var_core_value_sigF4B9, var_core_value_sig5CEE) {
      return this._builder["apply"]((0, e.setTrendline)(var_core_value_sigF4B9, var_core_value_sig5CEE)), this;
    }
    removeTrendline(var_core_value_sigE92A, var_core_value_sig362B) {
      return this._builder["apply"]((0, e.removeTrendline)(this._builder["describe"](), var_core_value_sigE92A, var_core_value_sig362B)), this;
    }
    clearTrendlines(var_core_value_sig5CA5) {
      return this._builder["apply"]((0, e.clearTrendlines)(this._builder["describe"](), var_core_value_sig5CA5)), this;
    }
    setAxisPointer(var_core_value_sigE90F) {
      return this._builder["apply"]((0, e.setAxisPointer)(var_core_value_sigE90F)), this;
    }
    clearAxisPointer(var_core_value_sigEFD4) {
      return this._builder["apply"]((0, e.clearAxisPointer)(var_core_value_sigEFD4)), this;
    }
  },
  f = class extends d {
    setAreaLineStyle(var_core_value_sig861B) {
      return this._builder["apply"]((0, e.setAreaLineStyle)(var_core_value_sig861B)), this;
    }
    clearAreaLineStyle() {
      return this._builder["apply"]((0, e.clearAreaLineStyle)()), this;
    }
  },
  p = class extends d {},
  m = class extends d {
    setBubbleMapping(var_core_value_sig5237) {
      return this._builder["apply"]((0, e.setBubbleMapping)(var_core_value_sig5237)), this;
    }
    clearBubbleMapping() {
      return this._builder["apply"]((0, e.clearBubbleMapping)()), this;
    }
  },
  h = class extends u {
    setCandlestickFields(var_core_value_sigBB00) {
      return this._builder["apply"]((0, e.setCandlestickFields)(var_core_value_sigBB00)), this;
    }
    clearCandlestickFields() {
      return this._builder["apply"]((0, e.clearCandlestickFields)()), this;
    }
    setRisingStyle(var_core_value_sig7E54) {
      return this._builder["apply"]((0, e.setRisingStyle)(var_core_value_sig7E54)), this;
    }
    clearRisingStyle() {
      return this._builder["apply"]((0, e.clearRisingStyle)()), this;
    }
    setFallingStyle(var_core_value_sig9A8D) {
      return this._builder["apply"]((0, e.setFallingStyle)(var_core_value_sig9A8D)), this;
    }
    clearFallingStyle() {
      return this._builder["apply"]((0, e.clearFallingStyle)()), this;
    }
    setDojiStyle(var_core_value_sigC259) {
      return this._builder["apply"]((0, e.setDojiStyle)(var_core_value_sigC259)), this;
    }
    clearDojiStyle() {
      return this._builder["apply"]((0, e.clearDojiStyle)()), this;
    }
    setCandleWidth(var_core_value_sig9C9F) {
      return this._builder["apply"]((0, e.setCandleWidth)(var_core_value_sig9C9F)), this;
    }
    resetCandleWidth() {
      return this._builder["apply"]((0, e.resetCandleWidth)()), this;
    }
  },
  g = class extends l {
    setChordMapping(var_core_value_sigFDEA) {
      return this._builder["apply"]((0, e.setChordMapping)(var_core_value_sigFDEA)), this;
    }
    setChordLayout(var_core_value_sig86D0) {
      return this._builder["apply"]((0, e.setChordLayout)(var_core_value_sig86D0)), this;
    }
    resetChordLayout() {
      return this._builder["apply"]((0, e.resetChordLayout)()), this;
    }
    setChordNode(var_core_value_sig4CD2) {
      return this._builder["apply"]((0, e.setChordNode)(var_core_value_sig4CD2)), this;
    }
    resetChordNode() {
      return this._builder["apply"]((0, e.resetChordNode)()), this;
    }
    setChordLabel(var_core_value_sig48CA) {
      return this._builder["apply"]((0, e.setChordLabel)(var_core_value_sig48CA)), this;
    }
    resetChordLabel() {
      return this._builder["apply"]((0, e.resetChordLabel)()), this;
    }
    setChordRibbon(var_core_value_sig50AF) {
      return this._builder["apply"]((0, e.setChordRibbon)(var_core_value_sig50AF)), this;
    }
    resetChordRibbon() {
      return this._builder["apply"]((0, e.resetChordRibbon)()), this;
    }
    setChordEmphasis(var_core_value_sigA942) {
      return this._builder["apply"]((0, e.setChordEmphasis)(var_core_value_sigA942)), this;
    }
    resetChordEmphasis() {
      return this._builder["apply"]((0, e.resetChordEmphasis)()), this;
    }
  },
  _ = class extends d {
    setSeriesType(var_core_value_sigA621, var_core_value_sigBBFF) {
      return this._builder["apply"]((0, e.setCombinationSeriesType)(var_core_value_sigA621, var_core_value_sigBBFF)), this;
    }
    resetSeriesType(var_core_value_sig8889) {
      return this._builder["apply"]((0, e.resetCombinationSeriesType)(var_core_value_sig8889)), this;
    }
    setSeriesAxis(var_core_value_sig32F8, var_core_value_sig5B67) {
      return this._builder["apply"]((0, e.setCombinationSeriesAxis)(var_core_value_sig32F8, var_core_value_sig5B67)), this;
    }
    resetSeriesAxis(var_core_value_sig1758) {
      return this._builder["apply"]((0, e.resetCombinationSeriesAxis)(var_core_value_sig1758)), this;
    }
  },
  v = class extends l {
    setGap(var_core_value_sig4805) {
      return this._builder["apply"]((0, e.setFunnelGap)(var_core_value_sig4805)), this;
    }
    resetGap() {
      return this._builder["apply"]((0, e.resetFunnelGap)()), this;
    }
    setUseAbsoluteValue(var_core_value_sigE67E) {
      return this._builder["apply"]((0, e.setUseAbsoluteValue)(var_core_value_sigE67E)), this;
    }
    resetUseAbsoluteValue() {
      return this._builder["apply"]((0, e.resetUseAbsoluteValue)()), this;
    }
  },
  y = class extends l {
    setGaugeValueField(var_core_value_sig2902) {
      return this._builder["apply"]((0, e.setGaugeValueField)(var_core_value_sig2902)), this;
    }
    setGaugeMode(var_core_value_sig9989) {
      return this._builder["apply"]((0, e.setGaugeMode)(var_core_value_sig9989)), this;
    }
    resetGaugeMode() {
      return this._builder["apply"]((0, e.resetGaugeMode)()), this;
    }
    setGaugeScale(var_core_value_sig698E) {
      return this._builder["apply"]((0, e.setGaugeScale)(var_core_value_sig698E)), this;
    }
    resetGaugeScale() {
      return this._builder["apply"]((0, e.resetGaugeScale)()), this;
    }
    setGaugeTicks(var_core_value_sig2809) {
      return this._builder["apply"]((0, e.setGaugeTicks)(var_core_value_sig2809)), this;
    }
    setGaugeAngles(var_core_value_sig2DAB) {
      return this._builder["apply"]((0, e.setGaugeAngles)(var_core_value_sig2DAB)), this;
    }
    resetGaugeAngles() {
      return this._builder["apply"]((0, e.resetGaugeAngles)()), this;
    }
    setGaugeRanges(var_core_value_sig877E) {
      return this._builder["apply"]((0, e.setGaugeRanges)(var_core_value_sig877E)), this;
    }
    resetGaugeRanges() {
      return this._builder["apply"]((0, e.resetGaugeRanges)()), this;
    }
    setGaugeAxisLine(var_core_value_sig20C8) {
      return this._builder["apply"]((0, e.setGaugeAxisLine)(var_core_value_sig20C8)), this;
    }
    resetGaugeAxisLine() {
      return this._builder["apply"]((0, e.resetGaugeAxisLine)()), this;
    }
    setGaugeAxisTick(var_core_value_sigE9A7) {
      return this._builder["apply"]((0, e.setGaugeAxisTick)(var_core_value_sigE9A7)), this;
    }
    resetGaugeAxisTick() {
      return this._builder["apply"]((0, e.resetGaugeAxisTick)()), this;
    }
    setGaugeSplitLine(var_core_value_sigBECE) {
      return this._builder["apply"]((0, e.setGaugeSplitLine)(var_core_value_sigBECE)), this;
    }
    resetGaugeSplitLine() {
      return this._builder["apply"]((0, e.resetGaugeSplitLine)()), this;
    }
    setGaugeAxisLabel(var_core_value_sig1B22) {
      return this._builder["apply"]((0, e.setGaugeAxisLabel)(var_core_value_sig1B22)), this;
    }
    resetGaugeAxisLabel() {
      return this._builder["apply"]((0, e.resetGaugeAxisLabel)()), this;
    }
    setGaugePointer(var_core_value_sig7F72) {
      return this._builder["apply"]((0, e.setGaugePointer)(var_core_value_sig7F72)), this;
    }
    resetGaugePointer() {
      return this._builder["apply"]((0, e.resetGaugePointer)()), this;
    }
    setGaugeAnchor(var_core_value_sig7B2A) {
      return this._builder["apply"]((0, e.setGaugeAnchor)(var_core_value_sig7B2A)), this;
    }
    resetGaugeAnchor() {
      return this._builder["apply"]((0, e.resetGaugeAnchor)()), this;
    }
    setGaugeProgress(var_core_value_sig06CD) {
      return this._builder["apply"]((0, e.setGaugeProgress)(var_core_value_sig06CD)), this;
    }
    resetGaugeProgress() {
      return this._builder["apply"]((0, e.resetGaugeProgress)()), this;
    }
    setGaugeTitle(var_core_value_sigA5F1) {
      return this._builder["apply"]((0, e.setGaugeTitle)(var_core_value_sigA5F1)), this;
    }
    resetGaugeTitle() {
      return this._builder["apply"]((0, e.resetGaugeTitle)()), this;
    }
    setGaugeDetail(var_core_value_sig97A2) {
      return this._builder["apply"]((0, e.setGaugeDetail)(var_core_value_sig97A2)), this;
    }
    resetGaugeDetail() {
      return this._builder["apply"]((0, e.resetGaugeDetail)()), this;
    }
  },
  b = class extends u {
    setVisualMapType(var_core_value_sig07E9) {
      return this._builder["apply"]((0, e.setVisualMapType)(var_core_value_sig07E9)), this;
    }
    resetVisualMapType() {
      return this._builder["apply"]((0, e.resetVisualMapType)()), this;
    }
    setValueRange(var_core_value_sig4F59, var_core_value_sigF564) {
      return this._builder["apply"]((0, e.setValueRange)(var_core_value_sig4F59, var_core_value_sigF564)), this;
    }
    clearValueRange() {
      return this._builder["apply"]((0, e.clearValueRange)()), this;
    }
    setCellLabel(var_core_value_sig8CFA) {
      return this._builder["apply"]((0, e.setCellLabel)(var_core_value_sig8CFA)), this;
    }
    clearCellLabel() {
      return this._builder["apply"]((0, e.clearCellLabel)()), this;
    }
    setValueUnit(var_core_value_sig2E11) {
      return this._builder["apply"]((0, e.setValueUnit)(var_core_value_sig2E11)), this;
    }
    clearValueUnit() {
      return this._builder["apply"]((0, e.clearValueUnit)()), this;
    }
  },
  x = class extends d {
    setHistogramField(var_core_value_sig5B69) {
      return this._builder["apply"]((0, e.setHistogramField)(var_core_value_sig5B69)), this;
    }
    clearHistogramField() {
      return this._builder["apply"]((0, e.clearHistogramField)()), this;
    }
    setBinCount(var_core_value_sigB098) {
      return Number.isFinite(var_core_value_sigB098) && this._builder["apply"]((0, e.setHistogramBinCount)(var_core_value_sigB098)), this;
    }
    setBinWidth(var_core_value_sigCE71) {
      return Number.isFinite(var_core_value_sigCE71) && this._builder["apply"]((0, e.setHistogramBinWidth)(var_core_value_sigCE71)), this;
    }
    resetBinning() {
      return this._builder["apply"]((0, e.resetHistogramBinning)()), this;
    }
    setUnderflowThreshold(var_core_value_sig21D8) {
      return Number.isFinite(var_core_value_sig21D8) && this._builder["apply"]((0, e.setHistogramUnderflowThreshold)(var_core_value_sig21D8)), this;
    }
    clearUnderflowThreshold() {
      return this._builder["apply"]((0, e.clearHistogramUnderflowThreshold)()), this;
    }
    setOverflowThreshold(var_core_value_sig2B65) {
      return Number.isFinite(var_core_value_sig2B65) && this._builder["apply"]((0, e.setHistogramOverflowThreshold)(var_core_value_sig2B65)), this;
    }
    clearOverflowThreshold() {
      return this._builder["apply"]((0, e.clearHistogramOverflowThreshold)()), this;
    }
    setBinGap(var_core_value_sigD7EA) {
      return Number.isFinite(var_core_value_sigD7EA) && this._builder["apply"]((0, e.setHistogramBinGap)(var_core_value_sigD7EA)), this;
    }
    resetBinGap() {
      return this._builder["apply"]((0, e.resetHistogramBinGap)()), this;
    }
  },
  S = class extends d {
    setLineStyle(var_core_value_sigB33B) {
      return this._builder["apply"]((0, e.setLineStyle)(var_core_value_sigB33B)), this;
    }
    clearLineStyle() {
      return this._builder["apply"]((0, e.clearLineStyle)()), this;
    }
  },
  C = class extends d {
    setBarStyle(var_core_value_sig24B9) {
      return this._builder["apply"]((0, e.setParetoBarStyle)(var_core_value_sig24B9)), this;
    }
    clearBarStyle() {
      return this._builder["apply"]((0, e.clearParetoBarStyle)()), this;
    }
    setCumulativeLineStyle(var_core_value_sigE627) {
      return this._builder["apply"]((0, e.setCumulativeLineStyle)(var_core_value_sigE627)), this;
    }
    clearCumulativeLineStyle() {
      return this._builder["apply"]((0, e.clearCumulativeLineStyle)()), this;
    }
    setIncludeZeroValues(var_core_value_sigEF3E) {
      return this._builder["apply"]((0, e.setIncludeZeroValues)(var_core_value_sigEF3E)), this;
    }
    resetIncludeZeroValues() {
      return this._builder["apply"]((0, e.resetIncludeZeroValues)()), this;
    }
  },
  w = class extends l {
    setPieComposite(var_core_value_sig273D) {
      return this._builder["apply"]((0, e.setPieComposite)(var_core_value_sig273D)), this;
    }
    clearPieComposite() {
      return this._builder["apply"]((0, e.clearPieComposite)()), this;
    }
    setSliceStyle(var_core_value_sig9A0D, var_core_value_sigA319) {
      return this._builder["apply"]((0, e.setSliceStyle)(var_core_value_sig9A0D, var_core_value_sigA319)), this;
    }
    clearSliceStyle(var_core_value_sig2D58) {
      return this._builder["apply"]((0, e.clearSliceStyle)(var_core_value_sig2D58)), this;
    }
    setDoughnutHole(var_core_value_sig223F) {
      return this._builder["apply"]((0, e.setDoughnutHole)(var_core_value_sig223F)), this;
    }
    clearDoughnutHole() {
      return this._builder["apply"]((0, e.clearDoughnutHole)()), this;
    }
    setExplosion(var_core_value_sigD749) {
      return this._builder["apply"]((0, e.setExplosion)(var_core_value_sigD749)), this;
    }
    resetExplosion() {
      return this._builder["apply"]((0, e.resetExplosion)()), this;
    }
    setSliceBorderColor(var_core_value_sigCFFA) {
      return this._builder["apply"]((0, e.setSliceBorderColor)(var_core_value_sigCFFA)), this;
    }
    clearSliceBorderColor() {
      return this._builder["apply"]((0, e.clearSliceBorderColor)()), this;
    }
    setPaddingAngleEnabled(var_core_value_sig58C1) {
      return this._builder["apply"]((0, e.setPaddingAngleEnabled)(var_core_value_sig58C1)), this;
    }
    resetPaddingAngleEnabled() {
      return this._builder["apply"]((0, e.resetPaddingAngleEnabled)()), this;
    }
    setHalfPie(var_core_value_sig5090) {
      return this._builder["apply"]((0, e.setHalfPie)(var_core_value_sig5090)), this;
    }
    resetHalfPie() {
      return this._builder["apply"]((0, e.resetHalfPie)()), this;
    }
    setRosePie(var_core_value_sigC368) {
      return this._builder["apply"]((0, e.setRosePie)(var_core_value_sigC368)), this;
    }
    resetRosePie() {
      return this._builder["apply"]((0, e.resetRosePie)()), this;
    }
    setLabelLineVisible(var_core_value_sigAD56) {
      return this._builder["apply"]((0, e.setLabelLineVisible)(var_core_value_sigAD56)), this;
    }
    resetLabelLineVisible() {
      return this._builder["apply"]((0, e.resetLabelLineVisible)()), this;
    }
    setValueScale(var_core_value_sigDB4A) {
      return this._builder["apply"]((0, e.setValueScale)(var_core_value_sigDB4A)), this;
    }
    resetValueScale() {
      return this._builder["apply"]((0, e.resetValueScale)()), this;
    }
    setPieLabel(var_core_value_sig6418) {
      return this._builder["apply"]((0, e.setPieLabel)(var_core_value_sig6418)), this;
    }
    clearPieLabel() {
      return this._builder["apply"]((0, e.clearPieLabel)()), this;
    }
  },
  T = class extends l {
    setShape(var_core_value_sig1896) {
      return this._builder["apply"]((0, e.setRadarShape)(var_core_value_sig1896)), this;
    }
    resetShape() {
      return this._builder["apply"]((0, e.resetRadarShape)()), this;
    }
    setFill(var_core_value_sig0285) {
      return this._builder["apply"]((0, e.setRadarFill)(var_core_value_sig0285)), this;
    }
    resetFill() {
      return this._builder["apply"]((0, e.resetRadarFill)()), this;
    }
  },
  E = class extends l {
    setLayout(var_core_value_sig777D) {
      return this._builder["apply"]((0, e.setRelationLayout)(var_core_value_sig777D)), this;
    }
    resetLayout() {
      return this._builder["apply"]((0, e.resetRelationLayout)()), this;
    }
    setUseValueAsSymbolSize(var_core_value_sig3F4C) {
      return this._builder["apply"]((0, e.setUseValueAsSymbolSize)(var_core_value_sig3F4C)), this;
    }
    resetUseValueAsSymbolSize() {
      return this._builder["apply"]((0, e.resetUseValueAsSymbolSize)()), this;
    }
    setEmphasisEnabled(var_core_value_sigD65A) {
      return this._builder["apply"]((0, e.setEmphasisEnabled)(var_core_value_sigD65A)), this;
    }
    resetEmphasisEnabled() {
      return this._builder["apply"]((0, e.resetEmphasisEnabled)()), this;
    }
    setForce(var_core_value_sig5A13) {
      return this._builder["apply"]((0, e.setRelationForce)(var_core_value_sig5A13)), this;
    }
    clearForce() {
      return this._builder["apply"]((0, e.clearRelationForce)()), this;
    }
    setCircularLabelRotation(var_core_value_sigF593) {
      return this._builder["apply"]((0, e.setCircularLabelRotation)(var_core_value_sigF593)), this;
    }
    resetCircularLabelRotation() {
      return this._builder["apply"]((0, e.resetCircularLabelRotation)()), this;
    }
    setNodeShape(var_core_value_sig3607) {
      return this._builder["apply"]((0, e.setRelationNodeShape)(var_core_value_sig3607)), this;
    }
    resetNodeShape() {
      return this._builder["apply"]((0, e.resetRelationNodeShape)()), this;
    }
  },
  D = class extends d {},
  O = class extends l {
    setHierarchyFields(var_core_value_sigB512) {
      return this._builder["apply"]((0, e.setSunburstHierarchyFields)(var_core_value_sigB512)), this;
    }
    setValueField(var_core_value_sigF2E6) {
      return this._builder["apply"]((0, e.setSunburstValueField)(var_core_value_sigF2E6)), this;
    }
    setSunburstLabel(var_core_value_sig34C8) {
      return this._builder["apply"]((0, e.setSunburstLabel)(var_core_value_sig34C8)), this;
    }
    resetSunburstLabel() {
      return this._builder["apply"]((0, e.resetSunburstLabel)()), this;
    }
    setCenterLabel(var_core_value_sigB744) {
      return this._builder["apply"]((0, e.setSunburstCenterLabel)(var_core_value_sigB744)), this;
    }
    resetCenterLabel() {
      return this._builder["apply"]((0, e.resetSunburstCenterLabel)()), this;
    }
  },
  k = class extends l {
    setHierarchyFields(var_core_value_sigEAE2) {
      return this._builder["apply"]((0, e.setTreemapHierarchyFields)(var_core_value_sigEAE2)), this;
    }
    setValueField(var_core_value_sigE68A) {
      return this._builder["apply"]((0, e.setTreemapValueField)(var_core_value_sigE68A)), this;
    }
    setParentLabelLayout(var_core_value_sig3E68) {
      return this._builder["apply"]((0, e.setTreemapParentLabelLayout)(var_core_value_sig3E68)), this;
    }
    resetParentLabelLayout() {
      return this._builder["apply"]((0, e.resetTreemapParentLabelLayout)()), this;
    }
    setTreemapLabel(var_core_value_sigF4C5) {
      return this._builder["apply"]((0, e.setTreemapLabel)(var_core_value_sigF4C5)), this;
    }
    resetTreemapLabel() {
      return this._builder["apply"]((0, e.resetTreemapLabel)()), this;
    }
  },
  A = class extends d {
    setPointRoles(var_core_value_sig5410) {
      let var_core_value_sig492F = this._describe().series,
        var_core_value_sig8EA0 = new Map();
      var_core_value_sig5410.forEach((var_core_value_sig7524, var_core_value_sig2AD8) => {
        if (!Number.isInteger(var_core_value_sig7524.dataPointIndex) || var_core_value_sig7524.dataPointIndex < 0) throw Error("pointRoles." + var_core_value_sig2AD8 + "\x20has\x20an\x20invalid\x20data-point\x20index.");
        let var_core_value_sig2AD0 = typeof var_core_value_sig7524.series == "number" ? j(var_core_value_sig7524.series, var_core_value_sig2AD8) : M(var_core_value_sig7524.series["name"], var_core_value_sig492F, var_core_value_sig2AD8);
        var_core_value_sig8EA0.set(var_core_value_sig2AD0 + ":" + var_core_value_sig7524.dataPointIndex, {
          ...var_core_value_sig7524,
          series: var_core_value_sig2AD0
        });
      });
      let var_core_value_sigA6F6 = [...var_core_value_sig8EA0.values()].sort((var_core_value_sig3EEE, var_core_value_sigBC46) => var_core_value_sig3EEE.series - var_core_value_sigBC46.series || var_core_value_sig3EEE.dataPointIndex - var_core_value_sigBC46.dataPointIndex);
      return this._builder["apply"]((0, e.setWaterfallPointRoles)(var_core_value_sigA6F6)), this;
    }
    setConnector(var_core_value_sigCDDA) {
      return this._builder["apply"]((0, e.setWaterfallConnector)(var_core_value_sigCDDA)), this;
    }
    clearConnector() {
      return this._builder["apply"]((0, e.clearWaterfallConnector)()), this;
    }
    setStackType(var_core_value_sigE243) {
      return this._builder["apply"]((0, e.setWaterfallStackType)(var_core_value_sigE243)), this;
    }
    resetStackType() {
      return this._builder["apply"]((0, e.resetWaterfallStackType)()), this;
    }
    setUseSubtotal(var_core_value_sig74A8) {
      return this._builder["apply"]((0, e.setUseSubtotal)(var_core_value_sig74A8)), this;
    }
    resetUseSubtotal() {
      return this._builder["apply"]((0, e.resetUseSubtotal)()), this;
    }
    setPositiveStyle(var_core_value_sig21B2, var_core_value_sigDE08) {
      return this._builder["apply"]((0, e.setWaterfallStyle)(var_core_value_sig21B2, e.ChartWaterfallStyleTarget["Positive"], var_core_value_sigDE08)), this;
    }
    clearPositiveStyle(var_core_value_sigACCB) {
      return this._builder["apply"]((0, e.clearWaterfallStyle)(var_core_value_sigACCB, e.ChartWaterfallStyleTarget["Positive"])), this;
    }
    setNegativeStyle(var_core_value_sig7F33, var_core_value_sig0C53) {
      return this._builder["apply"]((0, e.setWaterfallStyle)(var_core_value_sig7F33, e.ChartWaterfallStyleTarget["Negative"], var_core_value_sig0C53)), this;
    }
    clearNegativeStyle(var_core_value_sigEA04) {
      return this._builder["apply"]((0, e.clearWaterfallStyle)(var_core_value_sigEA04, e.ChartWaterfallStyleTarget["Negative"])), this;
    }
    setSubtotalStyle(var_core_value_sig7A62, var_core_value_sig8109) {
      return this._builder["apply"]((0, e.setWaterfallStyle)(var_core_value_sig7A62, e.ChartWaterfallStyleTarget["Subtotal"], var_core_value_sig8109)), this;
    }
    clearSubtotalStyle(var_core_value_sig7565) {
      return this._builder["apply"]((0, e.clearWaterfallStyle)(var_core_value_sig7565, e.ChartWaterfallStyleTarget["Subtotal"])), this;
    }
  };
function j(var_core_value_sigFE01, var_core_value_sigA2CE) {
  if (!Number.isInteger(var_core_value_sigFE01) || var_core_value_sigFE01 < 0) throw Error("pointRoles." + var_core_value_sigA2CE + " has an invalid series index.");
  return var_core_value_sigFE01;
}
function M(var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig029F) {
  let var_core_value_sig3767 = Object.entries(var_core_value_sig6EA1).filter(([, var_core_value_sigD4FB]) => (var_core_value_sigD4FB == null ? undefined : var_core_value_sigD4FB.name) === var_core_value_sig1975);
  if (var_core_value_sig3767.length !== 1) throw Error("pointRoles." + var_core_value_sig029F + ' must resolve to exactly one series named "' + var_core_value_sig1975 + "\x22.");
  return Number(var_core_value_sig3767[0][0]);
}
var N = class extends l {
  setShape(var_core_value_sig3E71) {
    return this._builder["apply"]((0, e.setWordCloudShape)(var_core_value_sig3E71)), this;
  }
  resetShape() {
    return this._builder["apply"]((0, e.resetWordCloudShape)()), this;
  }
  setMaskImage(var_core_value_sig01B3) {
    return this._builder["apply"]((0, e.setMaskImage)(var_core_value_sig01B3)), this;
  }
  clearMaskImage() {
    return this._builder["apply"]((0, e.clearMaskImage)()), this;
  }
  setRepeat(var_core_value_sig7442) {
    return this._builder["apply"]((0, e.setWordCloudRepeat)(var_core_value_sig7442)), this;
  }
  resetRepeat() {
    return this._builder["apply"]((0, e.resetWordCloudRepeat)()), this;
  }
};
const P = new Map();
function F(var_core_value_sig670B, var_core_value_sig6912) {
  P.set(var_core_value_sig670B, var_core_value_sig6912);
}
function I(var_core_value_sigE235) {
  let var_core_value_sig7664 = P.get(var_core_value_sigE235);
  if (!var_core_value_sig7664) throw Error("Chart builder is not registered: " + String(var_core_value_sigE235));
  return var_core_value_sig7664;
}
const L = {
  [e.ChartTypeString["Line"]]: S,
  [e.ChartTypeString["Column"]]: d,
  [e.ChartTypeString["ColumnStacked"]]: d,
  [e.ChartTypeString["ColumnPercentStacked"]]: d,
  [e.ChartTypeString["Bar"]]: d,
  [e.ChartTypeString["BarStacked"]]: d,
  [e.ChartTypeString["BarPercentStacked"]]: d,
  [e.ChartTypeString["Pie"]]: w,
  [e.ChartTypeString["Donut"]]: w,
  [e.ChartTypeString["Area"]]: f,
  [e.ChartTypeString["AreaStacked"]]: f,
  [e.ChartTypeString["AreaPercentStacked"]]: f,
  [e.ChartTypeString["Radar"]]: T,
  [e.ChartTypeString["Scatter"]]: D,
  [e.ChartTypeString["Combination"]]: _,
  [e.ChartTypeString["WordCloud"]]: N,
  [e.ChartTypeString["Funnel"]]: v,
  [e.ChartTypeString["Bubble"]]: m,
  [e.ChartTypeString["Relation"]]: E,
  [e.ChartTypeString["Waterfall"]]: A,
  [e.ChartTypeString["Pareto"]]: C,
  [e.ChartTypeString["Sankey"]]: l,
  [e.ChartTypeString["Heatmap"]]: b,
  [e.ChartTypeString["Boxplot"]]: p,
  [e.ChartTypeString["Candlestick"]]: h,
  [e.ChartTypeString["Histogram"]]: x,
  [e.ChartTypeString["Treemap"]]: k,
  [e.ChartTypeString["Sunburst"]]: O,
  [e.ChartTypeString["Gauge"]]: y,
  [e.ChartTypeString["Chord"]]: g
};
for (let e of Object.keys(L)) F(e, L[e]);
var R = function (var_core_value_sig2281) {
    return var_core_value_sig2281.Default = "default", var_core_value_sig2281.Univer1 = "univer1", var_core_value_sig2281.Univer2 = "univer2", var_core_value_sig2281.Univer3 = "univer3", var_core_value_sig2281.Univer4 = "univer4", var_core_value_sig2281.Univer5 = "univer5", var_core_value_sig2281.Univer6 = "univer6", var_core_value_sig2281.UniverGradient1 = "univer gradient1", var_core_value_sig2281.UniverGradient2 = "univer gradient2", var_core_value_sig2281.UniverGradient3 = "univer gradient3", var_core_value_sig2281.UniverGradient4 = "univer gradient4", var_core_value_sig2281.UniverGradient5 = "univer gradient5", var_core_value_sig2281.UniverGradient6 = "univer gradient6", var_core_value_sig2281;
  }(R || {}),
  z = class extends n.FEnum {
    get ChartAggregationTarget() {
      return e.ChartAggregationTarget;
    }
    get ChartTrendlineType() {
      return e.ChartTrendlineType;
    }
    get ChartAppearanceTarget() {
      return e.ChartAppearanceTarget;
    }
    get ChartAxisName() {
      return e.ChartAxisName;
    }
    get ChartAxisPointerTarget() {
      return e.ChartAxisPointerTarget;
    }
    get ChartAxisTarget() {
      return e.ChartAxisTarget;
    }
    get ChartAxisTickPosition() {
      return e.ChartAxisTickPosition;
    }
    get ChartMarkLineLabelPosition() {
      return e.ChartMarkLineLabelPosition;
    }
    get ChartSemanticAxis() {
      return e.ChartSemanticAxis;
    }
    get ChartChordFocusMode() {
      return e.ChartChordFocusMode;
    }
    get ChartChordLabelPosition() {
      return e.ChartChordLabelPosition;
    }
    get ChartChordRibbonColorMode() {
      return e.ChartChordRibbonColorMode;
    }
    get ChartGaugeMode() {
      return e.ChartGaugeMode;
    }
    get ChartGaugePointerShape() {
      return e.ChartGaugePointerShape;
    }
    get ChartSeriesAxis() {
      return e.ChartSeriesAxis;
    }
    get ChartSeriesClearTarget() {
      return e.ChartSeriesClearTarget;
    }
    get ChartAllSeriesStyleTarget() {
      return e.ChartAllSeriesStyleTarget;
    }
    get ChartSeriesTypeString() {
      return e.ChartSeriesTypeString;
    }
    get ChartSunburstLabelPosition() {
      return e.ChartSunburstLabelPosition;
    }
    get ChartTypeString() {
      return e.ChartTypeString;
    }
    get ChartThemeName() {
      return R;
    }
    get ChartVisualMapType() {
      return e.ChartVisualMapType;
    }
    get ChartWaterfallStyleTarget() {
      return e.ChartWaterfallStyleTarget;
    }
    get ChartWaterfallPointRole() {
      return e.ChartWaterfallPointRole;
    }
    get ChartAreaLineStyle() {
      return e.AreaLineStyle;
    }
    get ChartInvalidValueType() {
      return e.InvalidValueType;
    }
    get ChartLabelAlignEnum() {
      return e.LabelAlignEnum;
    }
    get ChartLegendPositionEnum() {
      return e.LegendPositionEnum;
    }
    get ChartLinePointShape() {
      return e.LinePointShape;
    }
    get ChartPieLabelPosition() {
      return e.PieLabelPosition;
    }
    get ChartPieSecondaryPlotType() {
      return e.PieSecondaryPlotType;
    }
    get ChartRadarShape() {
      return e.RadarShape;
    }
    get ChartRelationChartLayoutEnum() {
      return e.RelationChartLayoutEnum;
    }
    get ChartSelectModeEnum() {
      return e.SelectModeEnum;
    }
    get ChartSeriesLabelPosition() {
      return e.SeriesLabelPosition;
    }
    get ChartTitlePositionEnum() {
      return e.TitlePositionEnum;
    }
    get ChartTreemapParentLabelLayout() {
      return e.TreemapParentLabelLayout;
    }
    get ChartWaterfallStackTypeEnum() {
      return e.WaterfallStackTypeEnum;
    }
    get ChartWordCloudShapeEnum() {
      return e.WordCloudShapeEnum;
    }
  };
n.FEnum["extend"](z);
var B = class extends n.FUniver {
  registerTheme(var_core_value_sigDF87, var_core_value_sig9EE0) {
    this._injector["get"](e.ChartThemeService).registerTheme(var_core_value_sigDF87, var_core_value_sig9EE0);
  }
};
n.FUniver["extend"](B);
function V(var_core_value_sig5E86, var_core_value_sig6998, var_core_value_sigF639 = U(var_core_value_sig5E86)) {
  return new var_core_value_sig6998({
    builder: var_core_value_sig5E86,
    ...var_core_value_sigF639
  });
}
function H(var_core_value_sigEAE5, var_core_value_sigE94C, var_core_value_sig6D47 = U(var_core_value_sigEAE5)) {
  return V(var_core_value_sigEAE5, I(var_core_value_sigE94C), var_core_value_sig6D47);
}
function U(var_core_value_sigCB82) {
  return {
    info: {
      dataSource: []
    },
    normalizeSource: var_core_value_sigF051 => var_core_value_sigF051,
    createConfig: () => (0, e.toChartCreateConfig)(var_core_value_sigCB82.describe(), var_core_value_sigCB82.getPendingConfig()),
    requireSource: false
  };
}
function W(var_core_value_sigCF4E) {
  let var_core_value_sig6CAD = "info" in var_core_value_sigCF4E,
    var_core_value_sig8CF5 = var_core_value_sig6CAD ? var_core_value_sigCF4E.description["id"] : (0, t.generateRandomId)(),
    var_core_value_sigDDD7 = var_core_value_sig6CAD ? {
      ...t.Tools["deepClone"](var_core_value_sigCF4E.description),
      type: var_core_value_sigCF4E.type
    } : {
      id: var_core_value_sig8CF5,
      type: var_core_value_sigCF4E.type,
      autoGradientFill: e.AREA_CHART_TYPES["has"](var_core_value_sigCF4E.type),
      series: {}
    },
    var_core_value_sigB2CE = new e["ChartBuilder"](var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sig6CAD ? G(var_core_value_sigDDD7) : new e.DetachedChartBuilderAdapter(var_core_value_sigDDD7, var_core_value_sigCF4E.commitError, var_core_value_sigCF4E.injector)),
    var_core_value_sig443C = t.Tools["deepClone"](var_core_value_sig6CAD ? var_core_value_sigCF4E.info : {
      position: undefined,
      size: undefined,
      ...var_core_value_sigCF4E.createInfo()
    }),
    var_core_value_sig39B1 = H(var_core_value_sigB2CE, var_core_value_sigCF4E.type, {
      info: var_core_value_sig443C,
      normalizeSource: var_core_value_sigCF4E.normalizeSource,
      createConfig: var_core_value_sig6CAD ? () => (0, e.toChartCreateConfigSnapshot)(var_core_value_sigB2CE.describe(), var_core_value_sigB2CE.getPendingConfig()) : () => (0, e.toChartCreateConfig)(var_core_value_sigB2CE.describe(), var_core_value_sigB2CE.getPendingConfig()),
      requireSource: !var_core_value_sig6CAD
    });
  return Object.assign(var_core_value_sig39B1, var_core_value_sigCF4E.extension({
    getInfo: var_core_value_sig0B45 => t.Tools["deepClone"](var_core_value_sig443C[var_core_value_sig0B45]),
    setInfo: (var_core_value_sig36F8, var_core_value_sig03E1) => {
      var_core_value_sig443C[var_core_value_sig36F8] = t.Tools["deepClone"](var_core_value_sig03E1);
    },
    setAbsolutePosition: (var_core_value_sigBB57, var_core_value_sig7C4A) => {
      var_core_value_sig39B1.setAbsolutePosition(var_core_value_sigBB57, var_core_value_sig7C4A);
    },
    setSize: (var_core_value_sigE799, var_core_value_sigB601) => {
      var_core_value_sig39B1.setSize(var_core_value_sigE799, var_core_value_sigB601);
    }
  }));
}
function G(var_core_value_sig210D) {
  return {
    describe: () => t.Tools["deepClone"](var_core_value_sig210D),
    commit: () => {
      throw Error("A detached Chart Builder cannot update an existing Chart.");
    },
    resolveData: () => {
      throw Error("Chart data is unavailable from a detached Chart Builder.");
    }
  };
}
var K = class extends n.FBase {
  constructor(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigCF89) {
    super(), this._id = var_core_value_sig8B71, this._createAdapter = var_core_value_sigAEFB, this._createBuilder = var_core_value_sig826B, this._injector = var_core_value_sigCF89;
  }
  getId() {
    return this._id;
  }
  getType() {
    return this._createAdapter().getInfo().config["type"];
  }
  getInfo() {
    return t.Tools["deepClone"](this._createAdapter().getInfo());
  }
  toBuilder(var_core_value_sig00CB) {
    let var_core_value_sig77EE = this._createAdapter(),
      var_core_value_sig9F76 = var_core_value_sig77EE.describe(),
      var_core_value_sigB008 = var_core_value_sig00CB ?? var_core_value_sig9F76.type;
    return this._createBuilder(var_core_value_sig77EE.getInfo(), var_core_value_sig9F76, var_core_value_sigB008);
  }
  async update(var_core_value_sig8721) {
    return await this._createAdapter().update(t.Tools["deepClone"](var_core_value_sig8721)), this;
  }
  setType(var_core_value_sig08BA) {
    return this._commit({
      type: var_core_value_sig08BA
    });
  }
  setTitle(var_core_value_sigDBB5) {
    return this._apply((0, e.setTitle)(var_core_value_sigDBB5));
  }
  clearTitle() {
    return this._apply((0, e.clearTitle)());
  }
  setSubtitle(var_core_value_sigCFAC) {
    return this._apply((0, e.setSubtitle)(var_core_value_sigCFAC));
  }
  clearSubtitle() {
    return this._apply((0, e.clearSubtitle)());
  }
  setLegend(var_core_value_sig237B) {
    return this._apply((0, e.setLegend)(var_core_value_sig237B));
  }
  clearLegend() {
    return this._apply((0, e.clearLegend)());
  }
  setTheme(var_core_value_sigFEAB) {
    return this._apply((0, e.setTheme)(var_core_value_sigFEAB));
  }
  clearTheme() {
    return this._apply((0, e.clearTheme)());
  }
  setPalette(var_core_value_sigE347) {
    return this._apply((0, e.setPalette)(var_core_value_sigE347));
  }
  clearPalette() {
    return this._apply((0, e.clearPalette)());
  }
  setAppearance(var_core_value_sig3C5B) {
    return this._apply((0, e.setAppearance)(var_core_value_sig3C5B));
  }
  clearAppearance(var_core_value_sig200B) {
    return this._apply((0, e.clearAppearance)(var_core_value_sig200B));
  }
  setAutoGradientFill(var_core_value_sig3863) {
    return this._apply((0, e.setAutoGradientFill)(var_core_value_sig3863));
  }
  resetAutoGradientFill() {
    return this._apply((0, e.resetAutoGradientFill)());
  }
  setInvalidValueStrategy(var_core_value_sigC97C) {
    return this._apply((0, e.setInvalidValueStrategy)(var_core_value_sigC97C));
  }
  resetInvalidValueStrategy() {
    return this._apply((0, e.resetInvalidValueStrategy)());
  }
  setCategoryField(var_core_value_sigC4B1) {
    return this._apply((0, e.setCategoryField)(var_core_value_sigC4B1));
  }
  setCategoryFields(var_core_value_sig1BD9) {
    return this._commit(r(var_core_value_sig1BD9));
  }
  clearCategoryFields() {
    return this._commit(i());
  }
  setMultiLevelCategoryAxis(var_core_value_sigE43E) {
    return this._commit({
      mapping: {
        multiLevelCategoryAxis: var_core_value_sigE43E
      }
    });
  }
  clearCategoryField() {
    return this._apply((0, e.clearCategoryField)());
  }
  setValueFields(var_core_value_sigA937) {
    return this._apply((0, e.setValueFields)(var_core_value_sigA937));
  }
  clearValueFields() {
    return this._apply((0, e.clearValueFields)());
  }
  setAggregation(var_core_value_sigCAD5) {
    return this._apply((0, e.setAggregation)(var_core_value_sigCAD5));
  }
  clearAggregation(var_core_value_sigE503) {
    return this._apply((0, e.clearAggregation)(var_core_value_sigE503));
  }
  async setDataSource(var_core_value_sig48DD) {
    return await this._createAdapter().setDataSource(var_core_value_sig48DD), this;
  }
  setAbsolutePosition(var_core_value_sig5E6A, var_core_value_sigB7FC) {
    return this._createAdapter().setAbsolutePosition(var_core_value_sig5E6A, var_core_value_sigB7FC), this;
  }
  setSize(var_core_value_sig9CD9, var_core_value_sigFD0C) {
    return this._createAdapter().setSize(var_core_value_sig9CD9, var_core_value_sigFD0C), this;
  }
  bringToFront() {
    return this._arrange(t.ArrangeTypeEnum["front"]);
  }
  bringForward() {
    return this._arrange(t.ArrangeTypeEnum["forward"]);
  }
  sendBackward() {
    return this._arrange(t.ArrangeTypeEnum["backward"]);
  }
  sendToBack() {
    return this._arrange(t.ArrangeTypeEnum["back"]);
  }
  setZOrder(var_core_value_sig849B) {
    return this._createAdapter().setZOrder(var_core_value_sig849B), this;
  }
  async remove() {
    return this._createAdapter().remove();
  }
  _arrange(var_core_value_sig5F1A) {
    return this._createAdapter().arrange(var_core_value_sig5F1A), this;
  }
  _apply(var_core_value_sigB455) {
    return this._commit(var_core_value_sigB455.patch);
  }
  _commit(var_core_value_sig5241) {
    return this._createAdapter().commit(var_core_value_sig5241), this;
  }
};
exports.CHART_FACADE_RANDOM_ID_LENGTH = 6, exports.FAreaChartBuilder = f, exports.FAxisChartBuilder = u, exports.FBoxplotChartBuilder = p, exports.FBubbleChartBuilder = m, exports.FCandlestickChartBuilder = h, exports.FCartesianChartBuilder = d, exports.FChart = K, exports.FChartBuilderBase = l, exports.FChordChartBuilder = g, exports.FCombinationChartBuilder = _, exports.FFunnelChartBuilder = v, exports.FGaugeChartBuilder = y, exports.FHeatmapChartBuilder = b, exports.FHistogramChartBuilder = x, exports.FLineChartBuilder = S, exports.FParetoChartBuilder = C, exports.FPieChartBuilder = w, exports.FRadarChartBuilder = T, exports.FRelationChartBuilder = E, exports.FScatterChartBuilder = D, exports.FSunburstChartBuilder = O, exports.FTreemapChartBuilder = k, exports.FWaterfallChartBuilder = A, exports.FWordCloudChartBuilder = N, exports.createChartBuilder = W;
