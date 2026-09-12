Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade");
function r(_0x1d4298) {
  return (
    _0x1d4298.forEach((_0x28b996) => (0, e.setCategoryField)(_0x28b996)),
    { mapping: { categoryIndexes: [..._0x1d4298] } }
  );
}
function i() {
  return { mapping: { categoryIndexes: null } };
}
function a(_0x316800) {
  "@babel/helpers - typeof";
  return (
    (a =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1945f9) {
            return typeof _0x1945f9;
          }
        : function (_0x154862) {
            return _0x154862 &&
              typeof Symbol == "function" &&
              _0x154862.constructor === Symbol &&
              _0x154862 !== Symbol.prototype
              ? "symbol"
              : typeof _0x154862;
          }),
    a(_0x316800)
  );
}
function o(_0x1de422, _0x1fe534) {
  if (a(_0x1de422) != "object" || !_0x1de422) return _0x1de422;
  var _0x2e3461 = _0x1de422[Symbol.toPrimitive];
  if (_0x2e3461 !== undefined) {
    var _0x5ee2e8 = _0x2e3461.call(_0x1de422, _0x1fe534 || "default");
    if (a(_0x5ee2e8) != "object") return _0x5ee2e8;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1fe534 === "string" ? String : Number)(_0x1de422);
}
function s(_0x13dd39) {
  var _0x9b91f0 = o(_0x13dd39, "string");
  return a(_0x9b91f0) == "symbol" ? _0x9b91f0 : _0x9b91f0 + "";
}
function c(_0xc5cc18, _0x800ef2, _0x4ce00f) {
  return (
    (_0x800ef2 = s(_0x800ef2)) in _0xc5cc18
      ? Object.defineProperty(_0xc5cc18, _0x800ef2, {
          value: _0x4ce00f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xc5cc18[_0x800ef2] = _0x4ce00f),
    _0xc5cc18
  );
}
var l = class {
    constructor(_0x5af733) {
      ((this._context = _0x5af733),
        c(this, "_builder", undefined),
        c(this, "_info", undefined),
        (this._builder = _0x5af733.builder),
        (this._info = _0x5af733.info));
    }
    setSource(_0x5629e6) {
      return (
        (this._info["dataSource"] = t.Tools["deepClone"](
          this._context["normalizeSource"](_0x5629e6),
        )),
        this
      );
    }
    setAbsolutePosition(_0x15f81e, _0x1ae87e) {
      return ((this._info["position"] = { x: _0x15f81e, y: _0x1ae87e }), this);
    }
    setSize(_0x2cab24, _0x469c82) {
      return (
        (this._info["size"] = { width: _0x2cab24, height: _0x469c82 }),
        this
      );
    }
    build() {
      if (
        this._context["requireSource"] &&
        this._info["dataSource"] === undefined
      )
        throw Error(
          "Chart data source is required. Please call setSource() before build().",
        );
      let _0x1f651d = t.Tools["deepClone"](this._info);
      return (
        (_0x1f651d.config = this._context["createConfig"](this._builder)),
        _0x1f651d
      );
    }
    _record(_0x2a75e6) {
      return (this._builder["mergePending"](_0x2a75e6), this);
    }
    _describe() {
      return this._builder["describe"]();
    }
    setTitle(_0x1d4ce4) {
      return (this._builder["apply"]((0, e.setTitle)(_0x1d4ce4)), this);
    }
    clearTitle() {
      return (this._builder["apply"]((0, e.clearTitle)()), this);
    }
    setSubtitle(_0x10f536) {
      return (this._builder["apply"]((0, e.setSubtitle)(_0x10f536)), this);
    }
    clearSubtitle() {
      return (this._builder["apply"]((0, e.clearSubtitle)()), this);
    }
    setLegend(_0x32ae25) {
      return (this._builder["apply"]((0, e.setLegend)(_0x32ae25)), this);
    }
    clearLegend() {
      return (this._builder["apply"]((0, e.clearLegend)()), this);
    }
    setTheme(_0x347e00) {
      return (this._builder["apply"]((0, e.setTheme)(_0x347e00)), this);
    }
    clearTheme() {
      return (this._builder["apply"]((0, e.clearTheme)()), this);
    }
    setPalette(_0x2d42a5) {
      return (this._builder["apply"]((0, e.setPalette)(_0x2d42a5)), this);
    }
    clearPalette() {
      return (this._builder["apply"]((0, e.clearPalette)()), this);
    }
    setAppearance(_0x50a5c7) {
      return (this._builder["apply"]((0, e.setAppearance)(_0x50a5c7)), this);
    }
    clearAppearance(_0x1e75b8) {
      return (this._builder["apply"]((0, e.clearAppearance)(_0x1e75b8)), this);
    }
    setAutoGradientFill(_0x505c1d) {
      return (
        this._builder["apply"]((0, e.setAutoGradientFill)(_0x505c1d)),
        this
      );
    }
    resetAutoGradientFill() {
      return (this._builder["apply"]((0, e.resetAutoGradientFill)()), this);
    }
    setInvalidValueStrategy(_0x58c8ed) {
      return (
        this._builder["apply"]((0, e.setInvalidValueStrategy)(_0x58c8ed)),
        this
      );
    }
    resetInvalidValueStrategy() {
      return (this._builder["apply"]((0, e.resetInvalidValueStrategy)()), this);
    }
    setCategoryField(_0x273edf) {
      return (this._builder["apply"]((0, e.setCategoryField)(_0x273edf)), this);
    }
    setCategoryFields(_0x7dad2d) {
      return (this._builder["mergePending"](r(_0x7dad2d)), this);
    }
    clearCategoryFields() {
      return (this._builder["mergePending"](i()), this);
    }
    setMultiLevelCategoryAxis(_0x4b85be) {
      return (
        this._builder["mergePending"]({
          mapping: { multiLevelCategoryAxis: _0x4b85be },
        }),
        this
      );
    }
    clearCategoryField() {
      return (this._builder["apply"]((0, e.clearCategoryField)()), this);
    }
    setValueFields(_0x163ead) {
      return (this._builder["apply"]((0, e.setValueFields)(_0x163ead)), this);
    }
    clearValueFields() {
      return (this._builder["apply"]((0, e.clearValueFields)()), this);
    }
    setAggregation(_0xf2a11a) {
      return (this._builder["apply"]((0, e.setAggregation)(_0xf2a11a)), this);
    }
    clearAggregation(_0x3b7cb6) {
      return (this._builder["apply"]((0, e.clearAggregation)(_0x3b7cb6)), this);
    }
  },
  u = class extends l {
    setMarkLines(_0x575290) {
      return (this._builder["apply"]((0, e.setMarkLines)(_0x575290)), this);
    }
    clearMarkLines() {
      return (this._builder["apply"]((0, e.clearMarkLines)()), this);
    }
    setXAxis(_0xa63053) {
      return (this._builder["apply"]((0, e.setXAxis)(_0xa63053)), this);
    }
    clearXAxis(_0x3e08c5) {
      return (this._builder["apply"]((0, e.clearXAxis)(_0x3e08c5)), this);
    }
    setYAxis(_0x4b7a82) {
      return (this._builder["apply"]((0, e.setYAxis)(_0x4b7a82)), this);
    }
    clearYAxis(_0x2c6f45) {
      return (this._builder["apply"]((0, e.clearYAxis)(_0x2c6f45)), this);
    }
    setRightYAxis(_0x1cea90) {
      return (this._builder["apply"]((0, e.setRightYAxis)(_0x1cea90)), this);
    }
    clearRightYAxis(_0x1e8c71) {
      return (this._builder["apply"]((0, e.clearRightYAxis)(_0x1e8c71)), this);
    }
    setXAxisTitle(_0x1aaf29) {
      return (
        this._builder["apply"](
          (0, e.setAxisTitle)(e.ChartAxisName["X"], _0x1aaf29),
        ),
        this
      );
    }
    clearXAxisTitle() {
      return (
        this._builder["apply"]((0, e.clearAxisTitle)(e.ChartAxisName["X"])),
        this
      );
    }
    setYAxisTitle(_0x311f7d) {
      return (
        this._builder["apply"](
          (0, e.setAxisTitle)(e.ChartAxisName["Y"], _0x311f7d),
        ),
        this
      );
    }
    clearYAxisTitle() {
      return (
        this._builder["apply"]((0, e.clearAxisTitle)(e.ChartAxisName["Y"])),
        this
      );
    }
    setRightYAxisTitle(_0x17e07a) {
      return (
        this._builder["apply"](
          (0, e.setAxisTitle)(e.ChartAxisName["RightY"], _0x17e07a),
        ),
        this
      );
    }
    clearRightYAxisTitle() {
      return (
        this._builder["apply"](
          (0, e.clearAxisTitle)(e.ChartAxisName["RightY"]),
        ),
        this
      );
    }
    setUseDateAxis(_0x10baca) {
      return (this._builder["apply"]((0, e.setUseDateAxis)(_0x10baca)), this);
    }
    resetUseDateAxis() {
      return (this._builder["apply"]((0, e.resetUseDateAxis)()), this);
    }
  },
  d = class extends u {
    setBar(_0x2f659b) {
      return (this._builder["apply"]((0, e.setBar)(_0x2f659b)), this);
    }
    clearBar() {
      return (this._builder["apply"]((0, e.clearBar)()), this);
    }
    setSeries(_0x38b2d4, _0x256ea9) {
      return (
        this._builder["apply"]((0, e.setSeries)(_0x38b2d4, _0x256ea9)),
        this
      );
    }
    clearSeries(_0x429712, _0x2cab75) {
      return (
        this._builder["apply"]((0, e.clearSeries)(_0x429712, _0x2cab75)),
        this
      );
    }
    clearAllSeriesOverrides() {
      return (this._builder["apply"]((0, e.clearAllSeriesOverrides)()), this);
    }
    setAllSeriesStyle(_0x6463cc) {
      return (
        this._builder["apply"]((0, e.setAllSeriesStyle)(_0x6463cc)),
        this
      );
    }
    clearAllSeriesStyle(_0xb33e04) {
      return (
        this._builder["apply"]((0, e.clearAllSeriesStyle)(_0xb33e04)),
        this
      );
    }
    setTrendline(_0x564ebe, _0x32ef30) {
      return (
        this._builder["apply"]((0, e.setTrendline)(_0x564ebe, _0x32ef30)),
        this
      );
    }
    removeTrendline(_0x5446f2, _0xb5f24a) {
      return (
        this._builder["apply"](
          (0, e.removeTrendline)(
            this._builder["describe"](),
            _0x5446f2,
            _0xb5f24a,
          ),
        ),
        this
      );
    }
    clearTrendlines(_0x267ace) {
      return (
        this._builder["apply"](
          (0, e.clearTrendlines)(this._builder["describe"](), _0x267ace),
        ),
        this
      );
    }
    setAxisPointer(_0x376892) {
      return (this._builder["apply"]((0, e.setAxisPointer)(_0x376892)), this);
    }
    clearAxisPointer(_0xf3b2d) {
      return (this._builder["apply"]((0, e.clearAxisPointer)(_0xf3b2d)), this);
    }
  },
  f = class extends d {
    setAreaLineStyle(_0x5060eb) {
      return (this._builder["apply"]((0, e.setAreaLineStyle)(_0x5060eb)), this);
    }
    clearAreaLineStyle() {
      return (this._builder["apply"]((0, e.clearAreaLineStyle)()), this);
    }
  },
  p = class extends d {},
  m = class extends d {
    setBubbleMapping(_0x2539ab) {
      return (this._builder["apply"]((0, e.setBubbleMapping)(_0x2539ab)), this);
    }
    clearBubbleMapping() {
      return (this._builder["apply"]((0, e.clearBubbleMapping)()), this);
    }
  },
  h = class extends u {
    setCandlestickFields(_0xe991f3) {
      return (
        this._builder["apply"]((0, e.setCandlestickFields)(_0xe991f3)),
        this
      );
    }
    clearCandlestickFields() {
      return (this._builder["apply"]((0, e.clearCandlestickFields)()), this);
    }
    setRisingStyle(_0x5de0d0) {
      return (this._builder["apply"]((0, e.setRisingStyle)(_0x5de0d0)), this);
    }
    clearRisingStyle() {
      return (this._builder["apply"]((0, e.clearRisingStyle)()), this);
    }
    setFallingStyle(_0x5f0e40) {
      return (this._builder["apply"]((0, e.setFallingStyle)(_0x5f0e40)), this);
    }
    clearFallingStyle() {
      return (this._builder["apply"]((0, e.clearFallingStyle)()), this);
    }
    setDojiStyle(_0x13a62b) {
      return (this._builder["apply"]((0, e.setDojiStyle)(_0x13a62b)), this);
    }
    clearDojiStyle() {
      return (this._builder["apply"]((0, e.clearDojiStyle)()), this);
    }
    setCandleWidth(_0x586dc2) {
      return (this._builder["apply"]((0, e.setCandleWidth)(_0x586dc2)), this);
    }
    resetCandleWidth() {
      return (this._builder["apply"]((0, e.resetCandleWidth)()), this);
    }
  },
  g = class extends l {
    setChordMapping(_0x49633b) {
      return (this._builder["apply"]((0, e.setChordMapping)(_0x49633b)), this);
    }
    setChordLayout(_0xeedac7) {
      return (this._builder["apply"]((0, e.setChordLayout)(_0xeedac7)), this);
    }
    resetChordLayout() {
      return (this._builder["apply"]((0, e.resetChordLayout)()), this);
    }
    setChordNode(_0x51944e) {
      return (this._builder["apply"]((0, e.setChordNode)(_0x51944e)), this);
    }
    resetChordNode() {
      return (this._builder["apply"]((0, e.resetChordNode)()), this);
    }
    setChordLabel(_0x5a0c09) {
      return (this._builder["apply"]((0, e.setChordLabel)(_0x5a0c09)), this);
    }
    resetChordLabel() {
      return (this._builder["apply"]((0, e.resetChordLabel)()), this);
    }
    setChordRibbon(_0x17509b) {
      return (this._builder["apply"]((0, e.setChordRibbon)(_0x17509b)), this);
    }
    resetChordRibbon() {
      return (this._builder["apply"]((0, e.resetChordRibbon)()), this);
    }
    setChordEmphasis(_0x40c0de) {
      return (this._builder["apply"]((0, e.setChordEmphasis)(_0x40c0de)), this);
    }
    resetChordEmphasis() {
      return (this._builder["apply"]((0, e.resetChordEmphasis)()), this);
    }
  },
  _ = class extends d {
    setSeriesType(_0x2bc0cd, _0x3d65e3) {
      return (
        this._builder["apply"](
          (0, e.setCombinationSeriesType)(_0x2bc0cd, _0x3d65e3),
        ),
        this
      );
    }
    resetSeriesType(_0x925687) {
      return (
        this._builder["apply"]((0, e.resetCombinationSeriesType)(_0x925687)),
        this
      );
    }
    setSeriesAxis(_0x5861b8, _0x369057) {
      return (
        this._builder["apply"](
          (0, e.setCombinationSeriesAxis)(_0x5861b8, _0x369057),
        ),
        this
      );
    }
    resetSeriesAxis(_0x4f4b4f) {
      return (
        this._builder["apply"]((0, e.resetCombinationSeriesAxis)(_0x4f4b4f)),
        this
      );
    }
  },
  v = class extends l {
    setGap(_0x55c4b2) {
      return (this._builder["apply"]((0, e.setFunnelGap)(_0x55c4b2)), this);
    }
    resetGap() {
      return (this._builder["apply"]((0, e.resetFunnelGap)()), this);
    }
    setUseAbsoluteValue(_0x52f6b6) {
      return (
        this._builder["apply"]((0, e.setUseAbsoluteValue)(_0x52f6b6)),
        this
      );
    }
    resetUseAbsoluteValue() {
      return (this._builder["apply"]((0, e.resetUseAbsoluteValue)()), this);
    }
  },
  y = class extends l {
    setGaugeValueField(_0x109dd3) {
      return (
        this._builder["apply"]((0, e.setGaugeValueField)(_0x109dd3)),
        this
      );
    }
    setGaugeMode(_0xa3325b) {
      return (this._builder["apply"]((0, e.setGaugeMode)(_0xa3325b)), this);
    }
    resetGaugeMode() {
      return (this._builder["apply"]((0, e.resetGaugeMode)()), this);
    }
    setGaugeScale(_0x2a219c) {
      return (this._builder["apply"]((0, e.setGaugeScale)(_0x2a219c)), this);
    }
    resetGaugeScale() {
      return (this._builder["apply"]((0, e.resetGaugeScale)()), this);
    }
    setGaugeTicks(_0x30061e) {
      return (this._builder["apply"]((0, e.setGaugeTicks)(_0x30061e)), this);
    }
    setGaugeAngles(_0x57e6ec) {
      return (this._builder["apply"]((0, e.setGaugeAngles)(_0x57e6ec)), this);
    }
    resetGaugeAngles() {
      return (this._builder["apply"]((0, e.resetGaugeAngles)()), this);
    }
    setGaugeRanges(_0x457860) {
      return (this._builder["apply"]((0, e.setGaugeRanges)(_0x457860)), this);
    }
    resetGaugeRanges() {
      return (this._builder["apply"]((0, e.resetGaugeRanges)()), this);
    }
    setGaugeAxisLine(_0x59e377) {
      return (this._builder["apply"]((0, e.setGaugeAxisLine)(_0x59e377)), this);
    }
    resetGaugeAxisLine() {
      return (this._builder["apply"]((0, e.resetGaugeAxisLine)()), this);
    }
    setGaugeAxisTick(_0x54337c) {
      return (this._builder["apply"]((0, e.setGaugeAxisTick)(_0x54337c)), this);
    }
    resetGaugeAxisTick() {
      return (this._builder["apply"]((0, e.resetGaugeAxisTick)()), this);
    }
    setGaugeSplitLine(_0x37a88c) {
      return (
        this._builder["apply"]((0, e.setGaugeSplitLine)(_0x37a88c)),
        this
      );
    }
    resetGaugeSplitLine() {
      return (this._builder["apply"]((0, e.resetGaugeSplitLine)()), this);
    }
    setGaugeAxisLabel(_0x5ce154) {
      return (
        this._builder["apply"]((0, e.setGaugeAxisLabel)(_0x5ce154)),
        this
      );
    }
    resetGaugeAxisLabel() {
      return (this._builder["apply"]((0, e.resetGaugeAxisLabel)()), this);
    }
    setGaugePointer(_0x1f2245) {
      return (this._builder["apply"]((0, e.setGaugePointer)(_0x1f2245)), this);
    }
    resetGaugePointer() {
      return (this._builder["apply"]((0, e.resetGaugePointer)()), this);
    }
    setGaugeAnchor(_0x49f130) {
      return (this._builder["apply"]((0, e.setGaugeAnchor)(_0x49f130)), this);
    }
    resetGaugeAnchor() {
      return (this._builder["apply"]((0, e.resetGaugeAnchor)()), this);
    }
    setGaugeProgress(_0x1a80c9) {
      return (this._builder["apply"]((0, e.setGaugeProgress)(_0x1a80c9)), this);
    }
    resetGaugeProgress() {
      return (this._builder["apply"]((0, e.resetGaugeProgress)()), this);
    }
    setGaugeTitle(_0x153438) {
      return (this._builder["apply"]((0, e.setGaugeTitle)(_0x153438)), this);
    }
    resetGaugeTitle() {
      return (this._builder["apply"]((0, e.resetGaugeTitle)()), this);
    }
    setGaugeDetail(_0x3f6b48) {
      return (this._builder["apply"]((0, e.setGaugeDetail)(_0x3f6b48)), this);
    }
    resetGaugeDetail() {
      return (this._builder["apply"]((0, e.resetGaugeDetail)()), this);
    }
  },
  b = class extends u {
    setVisualMapType(_0x2f0b55) {
      return (this._builder["apply"]((0, e.setVisualMapType)(_0x2f0b55)), this);
    }
    resetVisualMapType() {
      return (this._builder["apply"]((0, e.resetVisualMapType)()), this);
    }
    setValueRange(_0x2a22c4, _0x2b0cdb) {
      return (
        this._builder["apply"]((0, e.setValueRange)(_0x2a22c4, _0x2b0cdb)),
        this
      );
    }
    clearValueRange() {
      return (this._builder["apply"]((0, e.clearValueRange)()), this);
    }
    setCellLabel(_0x4169bd) {
      return (this._builder["apply"]((0, e.setCellLabel)(_0x4169bd)), this);
    }
    clearCellLabel() {
      return (this._builder["apply"]((0, e.clearCellLabel)()), this);
    }
    setValueUnit(_0xb337d2) {
      return (this._builder["apply"]((0, e.setValueUnit)(_0xb337d2)), this);
    }
    clearValueUnit() {
      return (this._builder["apply"]((0, e.clearValueUnit)()), this);
    }
  },
  x = class extends d {
    setHistogramField(_0x2028d4) {
      return (
        this._builder["apply"]((0, e.setHistogramField)(_0x2028d4)),
        this
      );
    }
    clearHistogramField() {
      return (this._builder["apply"]((0, e.clearHistogramField)()), this);
    }
    setBinCount(_0x133fe6) {
      return (
        Number.isFinite(_0x133fe6) &&
          this._builder["apply"]((0, e.setHistogramBinCount)(_0x133fe6)),
        this
      );
    }
    setBinWidth(_0x582897) {
      return (
        Number.isFinite(_0x582897) &&
          this._builder["apply"]((0, e.setHistogramBinWidth)(_0x582897)),
        this
      );
    }
    resetBinning() {
      return (this._builder["apply"]((0, e.resetHistogramBinning)()), this);
    }
    setUnderflowThreshold(_0x86a3e7) {
      return (
        Number.isFinite(_0x86a3e7) &&
          this._builder["apply"](
            (0, e.setHistogramUnderflowThreshold)(_0x86a3e7),
          ),
        this
      );
    }
    clearUnderflowThreshold() {
      return (
        this._builder["apply"]((0, e.clearHistogramUnderflowThreshold)()),
        this
      );
    }
    setOverflowThreshold(_0x155b2d) {
      return (
        Number.isFinite(_0x155b2d) &&
          this._builder["apply"](
            (0, e.setHistogramOverflowThreshold)(_0x155b2d),
          ),
        this
      );
    }
    clearOverflowThreshold() {
      return (
        this._builder["apply"]((0, e.clearHistogramOverflowThreshold)()),
        this
      );
    }
    setBinGap(_0x4ae1e3) {
      return (
        Number.isFinite(_0x4ae1e3) &&
          this._builder["apply"]((0, e.setHistogramBinGap)(_0x4ae1e3)),
        this
      );
    }
    resetBinGap() {
      return (this._builder["apply"]((0, e.resetHistogramBinGap)()), this);
    }
  },
  S = class extends d {
    setLineStyle(_0x7a7001) {
      return (this._builder["apply"]((0, e.setLineStyle)(_0x7a7001)), this);
    }
    clearLineStyle() {
      return (this._builder["apply"]((0, e.clearLineStyle)()), this);
    }
  },
  C = class extends d {
    setBarStyle(_0x37f7c4) {
      return (
        this._builder["apply"]((0, e.setParetoBarStyle)(_0x37f7c4)),
        this
      );
    }
    clearBarStyle() {
      return (this._builder["apply"]((0, e.clearParetoBarStyle)()), this);
    }
    setCumulativeLineStyle(_0x38f1d6) {
      return (
        this._builder["apply"]((0, e.setCumulativeLineStyle)(_0x38f1d6)),
        this
      );
    }
    clearCumulativeLineStyle() {
      return (this._builder["apply"]((0, e.clearCumulativeLineStyle)()), this);
    }
    setIncludeZeroValues(_0x23b2b3) {
      return (
        this._builder["apply"]((0, e.setIncludeZeroValues)(_0x23b2b3)),
        this
      );
    }
    resetIncludeZeroValues() {
      return (this._builder["apply"]((0, e.resetIncludeZeroValues)()), this);
    }
  },
  w = class extends l {
    setPieComposite(_0x4e74c0) {
      return (this._builder["apply"]((0, e.setPieComposite)(_0x4e74c0)), this);
    }
    clearPieComposite() {
      return (this._builder["apply"]((0, e.clearPieComposite)()), this);
    }
    setSliceStyle(_0x8efaa5, _0x59f4f9) {
      return (
        this._builder["apply"]((0, e.setSliceStyle)(_0x8efaa5, _0x59f4f9)),
        this
      );
    }
    clearSliceStyle(_0x11cb88) {
      return (this._builder["apply"]((0, e.clearSliceStyle)(_0x11cb88)), this);
    }
    setDoughnutHole(_0x5d6780) {
      return (this._builder["apply"]((0, e.setDoughnutHole)(_0x5d6780)), this);
    }
    clearDoughnutHole() {
      return (this._builder["apply"]((0, e.clearDoughnutHole)()), this);
    }
    setExplosion(_0x13b210) {
      return (this._builder["apply"]((0, e.setExplosion)(_0x13b210)), this);
    }
    resetExplosion() {
      return (this._builder["apply"]((0, e.resetExplosion)()), this);
    }
    setSliceBorderColor(_0x55ab94) {
      return (
        this._builder["apply"]((0, e.setSliceBorderColor)(_0x55ab94)),
        this
      );
    }
    clearSliceBorderColor() {
      return (this._builder["apply"]((0, e.clearSliceBorderColor)()), this);
    }
    setPaddingAngleEnabled(_0x237cec) {
      return (
        this._builder["apply"]((0, e.setPaddingAngleEnabled)(_0x237cec)),
        this
      );
    }
    resetPaddingAngleEnabled() {
      return (this._builder["apply"]((0, e.resetPaddingAngleEnabled)()), this);
    }
    setHalfPie(_0x54102f) {
      return (this._builder["apply"]((0, e.setHalfPie)(_0x54102f)), this);
    }
    resetHalfPie() {
      return (this._builder["apply"]((0, e.resetHalfPie)()), this);
    }
    setRosePie(_0xc838f3) {
      return (this._builder["apply"]((0, e.setRosePie)(_0xc838f3)), this);
    }
    resetRosePie() {
      return (this._builder["apply"]((0, e.resetRosePie)()), this);
    }
    setLabelLineVisible(_0x4c7132) {
      return (
        this._builder["apply"]((0, e.setLabelLineVisible)(_0x4c7132)),
        this
      );
    }
    resetLabelLineVisible() {
      return (this._builder["apply"]((0, e.resetLabelLineVisible)()), this);
    }
    setValueScale(_0x28d952) {
      return (this._builder["apply"]((0, e.setValueScale)(_0x28d952)), this);
    }
    resetValueScale() {
      return (this._builder["apply"]((0, e.resetValueScale)()), this);
    }
    setPieLabel(_0x5b31bc) {
      return (this._builder["apply"]((0, e.setPieLabel)(_0x5b31bc)), this);
    }
    clearPieLabel() {
      return (this._builder["apply"]((0, e.clearPieLabel)()), this);
    }
  },
  T = class extends l {
    setShape(_0x136d64) {
      return (this._builder["apply"]((0, e.setRadarShape)(_0x136d64)), this);
    }
    resetShape() {
      return (this._builder["apply"]((0, e.resetRadarShape)()), this);
    }
    setFill(_0x3b018d) {
      return (this._builder["apply"]((0, e.setRadarFill)(_0x3b018d)), this);
    }
    resetFill() {
      return (this._builder["apply"]((0, e.resetRadarFill)()), this);
    }
  },
  E = class extends l {
    setLayout(_0x2d8a0c) {
      return (
        this._builder["apply"]((0, e.setRelationLayout)(_0x2d8a0c)),
        this
      );
    }
    resetLayout() {
      return (this._builder["apply"]((0, e.resetRelationLayout)()), this);
    }
    setUseValueAsSymbolSize(_0x15d371) {
      return (
        this._builder["apply"]((0, e.setUseValueAsSymbolSize)(_0x15d371)),
        this
      );
    }
    resetUseValueAsSymbolSize() {
      return (this._builder["apply"]((0, e.resetUseValueAsSymbolSize)()), this);
    }
    setEmphasisEnabled(_0x399d54) {
      return (
        this._builder["apply"]((0, e.setEmphasisEnabled)(_0x399d54)),
        this
      );
    }
    resetEmphasisEnabled() {
      return (this._builder["apply"]((0, e.resetEmphasisEnabled)()), this);
    }
    setForce(_0x5f5cec) {
      return (this._builder["apply"]((0, e.setRelationForce)(_0x5f5cec)), this);
    }
    clearForce() {
      return (this._builder["apply"]((0, e.clearRelationForce)()), this);
    }
    setCircularLabelRotation(_0x55b231) {
      return (
        this._builder["apply"]((0, e.setCircularLabelRotation)(_0x55b231)),
        this
      );
    }
    resetCircularLabelRotation() {
      return (
        this._builder["apply"]((0, e.resetCircularLabelRotation)()),
        this
      );
    }
    setNodeShape(_0x449c82) {
      return (
        this._builder["apply"]((0, e.setRelationNodeShape)(_0x449c82)),
        this
      );
    }
    resetNodeShape() {
      return (this._builder["apply"]((0, e.resetRelationNodeShape)()), this);
    }
  },
  D = class extends d {},
  O = class extends l {
    setHierarchyFields(_0x92df5f) {
      return (
        this._builder["apply"]((0, e.setSunburstHierarchyFields)(_0x92df5f)),
        this
      );
    }
    setValueField(_0x34f25c) {
      return (
        this._builder["apply"]((0, e.setSunburstValueField)(_0x34f25c)),
        this
      );
    }
    setSunburstLabel(_0x1a24aa) {
      return (this._builder["apply"]((0, e.setSunburstLabel)(_0x1a24aa)), this);
    }
    resetSunburstLabel() {
      return (this._builder["apply"]((0, e.resetSunburstLabel)()), this);
    }
    setCenterLabel(_0x3b9684) {
      return (
        this._builder["apply"]((0, e.setSunburstCenterLabel)(_0x3b9684)),
        this
      );
    }
    resetCenterLabel() {
      return (this._builder["apply"]((0, e.resetSunburstCenterLabel)()), this);
    }
  },
  k = class extends l {
    setHierarchyFields(_0x10563d) {
      return (
        this._builder["apply"]((0, e.setTreemapHierarchyFields)(_0x10563d)),
        this
      );
    }
    setValueField(_0x299fde) {
      return (
        this._builder["apply"]((0, e.setTreemapValueField)(_0x299fde)),
        this
      );
    }
    setParentLabelLayout(_0x574051) {
      return (
        this._builder["apply"]((0, e.setTreemapParentLabelLayout)(_0x574051)),
        this
      );
    }
    resetParentLabelLayout() {
      return (
        this._builder["apply"]((0, e.resetTreemapParentLabelLayout)()),
        this
      );
    }
    setTreemapLabel(_0x374bc2) {
      return (this._builder["apply"]((0, e.setTreemapLabel)(_0x374bc2)), this);
    }
    resetTreemapLabel() {
      return (this._builder["apply"]((0, e.resetTreemapLabel)()), this);
    }
  },
  A = class extends d {
    setPointRoles(_0x1e13d8) {
      let _0x162c28 = this._describe().series,
        _0x2cf942 = new Map();
      _0x1e13d8.forEach((_0x2aacb4, _0x275873) => {
        if (
          !Number.isInteger(_0x2aacb4.dataPointIndex) ||
          _0x2aacb4.dataPointIndex < 0
        )
          throw Error(
            "pointRoles." +
              _0x275873 +
              "\x20has\x20an\x20invalid\x20data-point\x20index.",
          );
        let _0x959d6 =
          typeof _0x2aacb4.series == "number"
            ? j(_0x2aacb4.series, _0x275873)
            : M(_0x2aacb4.series["name"], _0x162c28, _0x275873);
        _0x2cf942.set(_0x959d6 + ":" + _0x2aacb4.dataPointIndex, {
          ..._0x2aacb4,
          series: _0x959d6,
        });
      });
      let _0x2173e4 = [..._0x2cf942.values()].sort(
        (_0x1a0ece, _0x555384) =>
          _0x1a0ece.series - _0x555384.series ||
          _0x1a0ece.dataPointIndex - _0x555384.dataPointIndex,
      );
      return (
        this._builder["apply"]((0, e.setWaterfallPointRoles)(_0x2173e4)),
        this
      );
    }
    setConnector(_0x265f9) {
      return (
        this._builder["apply"]((0, e.setWaterfallConnector)(_0x265f9)),
        this
      );
    }
    clearConnector() {
      return (this._builder["apply"]((0, e.clearWaterfallConnector)()), this);
    }
    setStackType(_0x23930c) {
      return (
        this._builder["apply"]((0, e.setWaterfallStackType)(_0x23930c)),
        this
      );
    }
    resetStackType() {
      return (this._builder["apply"]((0, e.resetWaterfallStackType)()), this);
    }
    setUseSubtotal(_0x433fdb) {
      return (this._builder["apply"]((0, e.setUseSubtotal)(_0x433fdb)), this);
    }
    resetUseSubtotal() {
      return (this._builder["apply"]((0, e.resetUseSubtotal)()), this);
    }
    setPositiveStyle(_0x49b426, _0x4885fe) {
      return (
        this._builder["apply"](
          (0, e.setWaterfallStyle)(
            _0x49b426,
            e.ChartWaterfallStyleTarget["Positive"],
            _0x4885fe,
          ),
        ),
        this
      );
    }
    clearPositiveStyle(_0x196425) {
      return (
        this._builder["apply"](
          (0, e.clearWaterfallStyle)(
            _0x196425,
            e.ChartWaterfallStyleTarget["Positive"],
          ),
        ),
        this
      );
    }
    setNegativeStyle(_0x4d5c07, _0x5207f8) {
      return (
        this._builder["apply"](
          (0, e.setWaterfallStyle)(
            _0x4d5c07,
            e.ChartWaterfallStyleTarget["Negative"],
            _0x5207f8,
          ),
        ),
        this
      );
    }
    clearNegativeStyle(_0x716814) {
      return (
        this._builder["apply"](
          (0, e.clearWaterfallStyle)(
            _0x716814,
            e.ChartWaterfallStyleTarget["Negative"],
          ),
        ),
        this
      );
    }
    setSubtotalStyle(_0xbd15f8, _0x308dc8) {
      return (
        this._builder["apply"](
          (0, e.setWaterfallStyle)(
            _0xbd15f8,
            e.ChartWaterfallStyleTarget["Subtotal"],
            _0x308dc8,
          ),
        ),
        this
      );
    }
    clearSubtotalStyle(_0x5e4759) {
      return (
        this._builder["apply"](
          (0, e.clearWaterfallStyle)(
            _0x5e4759,
            e.ChartWaterfallStyleTarget["Subtotal"],
          ),
        ),
        this
      );
    }
  };
function j(_0x43b94d, _0x3c9748) {
  if (!Number.isInteger(_0x43b94d) || _0x43b94d < 0)
    throw Error("pointRoles." + _0x3c9748 + " has an invalid series index.");
  return _0x43b94d;
}
function M(_0x1aa658, _0x3bf8b3, _0x4785c7) {
  let _0x31ea6e = Object.entries(_0x3bf8b3).filter(
    ([, _0x228fd8]) =>
      (_0x228fd8 == null ? undefined : _0x228fd8.name) === _0x1aa658,
  );
  if (_0x31ea6e.length !== 1)
    throw Error(
      "pointRoles." +
        _0x4785c7 +
        ' must resolve to exactly one series named "' +
        _0x1aa658 +
        "\x22.",
    );
  return Number(_0x31ea6e[0][0]);
}
var N = class extends l {
  setShape(_0x2114c4) {
    return (this._builder["apply"]((0, e.setWordCloudShape)(_0x2114c4)), this);
  }
  resetShape() {
    return (this._builder["apply"]((0, e.resetWordCloudShape)()), this);
  }
  setMaskImage(_0x138202) {
    return (this._builder["apply"]((0, e.setMaskImage)(_0x138202)), this);
  }
  clearMaskImage() {
    return (this._builder["apply"]((0, e.clearMaskImage)()), this);
  }
  setRepeat(_0x251bd5) {
    return (this._builder["apply"]((0, e.setWordCloudRepeat)(_0x251bd5)), this);
  }
  resetRepeat() {
    return (this._builder["apply"]((0, e.resetWordCloudRepeat)()), this);
  }
};
const P = new Map();
function F(_0x338903, _0x273ea6) {
  P.set(_0x338903, _0x273ea6);
}
function I(_0x5e350e) {
  let _0x1219ce = P.get(_0x5e350e);
  if (!_0x1219ce)
    throw Error("Chart builder is not registered: " + String(_0x5e350e));
  return _0x1219ce;
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
  [e.ChartTypeString["Chord"]]: g,
};
for (let e of Object.keys(L)) F(e, L[e]);
var R = (function (_0x453bec) {
    return (
      (_0x453bec.Default = "default"),
      (_0x453bec.Univer1 = "univer1"),
      (_0x453bec.Univer2 = "univer2"),
      (_0x453bec.Univer3 = "univer3"),
      (_0x453bec.Univer4 = "univer4"),
      (_0x453bec.Univer5 = "univer5"),
      (_0x453bec.Univer6 = "univer6"),
      (_0x453bec.UniverGradient1 = "univer gradient1"),
      (_0x453bec.UniverGradient2 = "univer gradient2"),
      (_0x453bec.UniverGradient3 = "univer gradient3"),
      (_0x453bec.UniverGradient4 = "univer gradient4"),
      (_0x453bec.UniverGradient5 = "univer gradient5"),
      (_0x453bec.UniverGradient6 = "univer gradient6"),
      _0x453bec
    );
  })(R || {}),
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
  registerTheme(_0x458b2c, _0x580673) {
    this._injector["get"](e.ChartThemeService).registerTheme(
      _0x458b2c,
      _0x580673,
    );
  }
};
n.FUniver["extend"](B);
function V(_0x214ae7, _0x5b9226, _0x434b77 = U(_0x214ae7)) {
  return new _0x5b9226({ builder: _0x214ae7, ..._0x434b77 });
}
function H(_0x3c4a1d, _0x29d7ce, _0x37dbba = U(_0x3c4a1d)) {
  return V(_0x3c4a1d, I(_0x29d7ce), _0x37dbba);
}
function U(_0x5bf679) {
  return {
    info: { dataSource: [] },
    normalizeSource: (_0x304d42) => _0x304d42,
    createConfig: () =>
      (0, e.toChartCreateConfig)(
        _0x5bf679.describe(),
        _0x5bf679.getPendingConfig(),
      ),
    requireSource: false,
  };
}
function W(_0x479c2d) {
  let _0x537ca9 = "info" in _0x479c2d,
    _0x1bbb15 = _0x537ca9
      ? _0x479c2d.description["id"]
      : (0, t.generateRandomId)(),
    _0x3daf1e = _0x537ca9
      ? { ...t.Tools["deepClone"](_0x479c2d.description), type: _0x479c2d.type }
      : {
          id: _0x1bbb15,
          type: _0x479c2d.type,
          autoGradientFill: e.AREA_CHART_TYPES["has"](_0x479c2d.type),
          series: {},
        },
    _0x2d994f = new e["ChartBuilder"](
      _0x1bbb15,
      _0x3daf1e,
      _0x537ca9
        ? G(_0x3daf1e)
        : new e.DetachedChartBuilderAdapter(
            _0x3daf1e,
            _0x479c2d.commitError,
            _0x479c2d.injector,
          ),
    ),
    _0x51cfd9 = t.Tools["deepClone"](
      _0x537ca9
        ? _0x479c2d.info
        : { position: undefined, size: undefined, ..._0x479c2d.createInfo() },
    ),
    _0x48a42a = H(_0x2d994f, _0x479c2d.type, {
      info: _0x51cfd9,
      normalizeSource: _0x479c2d.normalizeSource,
      createConfig: _0x537ca9
        ? () =>
            (0, e.toChartCreateConfigSnapshot)(
              _0x2d994f.describe(),
              _0x2d994f.getPendingConfig(),
            )
        : () =>
            (0, e.toChartCreateConfig)(
              _0x2d994f.describe(),
              _0x2d994f.getPendingConfig(),
            ),
      requireSource: !_0x537ca9,
    });
  return Object.assign(
    _0x48a42a,
    _0x479c2d.extension({
      getInfo: (_0x3afd95) => t.Tools["deepClone"](_0x51cfd9[_0x3afd95]),
      setInfo: (_0x3ee872, _0xe55b5d) => {
        _0x51cfd9[_0x3ee872] = t.Tools["deepClone"](_0xe55b5d);
      },
      setAbsolutePosition: (_0x45d489, _0x500959) => {
        _0x48a42a.setAbsolutePosition(_0x45d489, _0x500959);
      },
      setSize: (_0x59957f, _0x324b81) => {
        _0x48a42a.setSize(_0x59957f, _0x324b81);
      },
    }),
  );
}
function G(_0x164b6f) {
  return {
    describe: () => t.Tools["deepClone"](_0x164b6f),
    commit: () => {
      throw Error("A detached Chart Builder cannot update an existing Chart.");
    },
    resolveData: () => {
      throw Error("Chart data is unavailable from a detached Chart Builder.");
    },
  };
}
var K = class extends n.FBase {
  constructor(_0xbb4600, _0x4aa6fe, _0x3674bc, _0x2fb1f5) {
    (super(),
      (this._id = _0xbb4600),
      (this._createAdapter = _0x4aa6fe),
      (this._createBuilder = _0x3674bc),
      (this._injector = _0x2fb1f5));
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
  toBuilder(_0x24082e) {
    let _0x142d23 = this._createAdapter(),
      _0x1a3550 = _0x142d23.describe(),
      _0x31c6e8 = _0x24082e ?? _0x1a3550.type;
    return this._createBuilder(_0x142d23.getInfo(), _0x1a3550, _0x31c6e8);
  }
  async update(_0x18ce19) {
    return (
      await this._createAdapter().update(t.Tools["deepClone"](_0x18ce19)),
      this
    );
  }
  setType(_0x393f8e) {
    return this._commit({ type: _0x393f8e });
  }
  setTitle(_0x10fe52) {
    return this._apply((0, e.setTitle)(_0x10fe52));
  }
  clearTitle() {
    return this._apply((0, e.clearTitle)());
  }
  setSubtitle(_0x49c1c0) {
    return this._apply((0, e.setSubtitle)(_0x49c1c0));
  }
  clearSubtitle() {
    return this._apply((0, e.clearSubtitle)());
  }
  setLegend(_0x3b73e7) {
    return this._apply((0, e.setLegend)(_0x3b73e7));
  }
  clearLegend() {
    return this._apply((0, e.clearLegend)());
  }
  setTheme(_0x5126da) {
    return this._apply((0, e.setTheme)(_0x5126da));
  }
  clearTheme() {
    return this._apply((0, e.clearTheme)());
  }
  setPalette(_0x27133d) {
    return this._apply((0, e.setPalette)(_0x27133d));
  }
  clearPalette() {
    return this._apply((0, e.clearPalette)());
  }
  setAppearance(_0x57e988) {
    return this._apply((0, e.setAppearance)(_0x57e988));
  }
  clearAppearance(_0x16a681) {
    return this._apply((0, e.clearAppearance)(_0x16a681));
  }
  setAutoGradientFill(_0x5dcb90) {
    return this._apply((0, e.setAutoGradientFill)(_0x5dcb90));
  }
  resetAutoGradientFill() {
    return this._apply((0, e.resetAutoGradientFill)());
  }
  setInvalidValueStrategy(_0x3fe894) {
    return this._apply((0, e.setInvalidValueStrategy)(_0x3fe894));
  }
  resetInvalidValueStrategy() {
    return this._apply((0, e.resetInvalidValueStrategy)());
  }
  setCategoryField(_0x2ad8af) {
    return this._apply((0, e.setCategoryField)(_0x2ad8af));
  }
  setCategoryFields(_0x3382eb) {
    return this._commit(r(_0x3382eb));
  }
  clearCategoryFields() {
    return this._commit(i());
  }
  setMultiLevelCategoryAxis(_0x309553) {
    return this._commit({ mapping: { multiLevelCategoryAxis: _0x309553 } });
  }
  clearCategoryField() {
    return this._apply((0, e.clearCategoryField)());
  }
  setValueFields(_0x3c53a3) {
    return this._apply((0, e.setValueFields)(_0x3c53a3));
  }
  clearValueFields() {
    return this._apply((0, e.clearValueFields)());
  }
  setAggregation(_0x37f722) {
    return this._apply((0, e.setAggregation)(_0x37f722));
  }
  clearAggregation(_0x122baa) {
    return this._apply((0, e.clearAggregation)(_0x122baa));
  }
  async setDataSource(_0x47e266) {
    return (await this._createAdapter().setDataSource(_0x47e266), this);
  }
  setAbsolutePosition(_0x68030d, _0x46754a) {
    return (
      this._createAdapter().setAbsolutePosition(_0x68030d, _0x46754a),
      this
    );
  }
  setSize(_0x39525c, _0x1e82ad) {
    return (this._createAdapter().setSize(_0x39525c, _0x1e82ad), this);
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
  setZOrder(_0x7338d5) {
    return (this._createAdapter().setZOrder(_0x7338d5), this);
  }
  async remove() {
    return this._createAdapter().remove();
  }
  _arrange(_0x2bc327) {
    return (this._createAdapter().arrange(_0x2bc327), this);
  }
  _apply(_0x35ca1c) {
    return this._commit(_0x35ca1c.patch);
  }
  _commit(_0x59abba) {
    return (this._createAdapter().commit(_0x59abba), this);
  }
};
((exports.CHART_FACADE_RANDOM_ID_LENGTH = 6),
  (exports.FAreaChartBuilder = f),
  (exports.FAxisChartBuilder = u),
  (exports.FBoxplotChartBuilder = p),
  (exports.FBubbleChartBuilder = m),
  (exports.FCandlestickChartBuilder = h),
  (exports.FCartesianChartBuilder = d),
  (exports.FChart = K),
  (exports.FChartBuilderBase = l),
  (exports.FChordChartBuilder = g),
  (exports.FCombinationChartBuilder = _),
  (exports.FFunnelChartBuilder = v),
  (exports.FGaugeChartBuilder = y),
  (exports.FHeatmapChartBuilder = b),
  (exports.FHistogramChartBuilder = x),
  (exports.FLineChartBuilder = S),
  (exports.FParetoChartBuilder = C),
  (exports.FPieChartBuilder = w),
  (exports.FRadarChartBuilder = T),
  (exports.FRelationChartBuilder = E),
  (exports.FScatterChartBuilder = D),
  (exports.FSunburstChartBuilder = O),
  (exports.FTreemapChartBuilder = k),
  (exports.FWaterfallChartBuilder = A),
  (exports.FWordCloudChartBuilder = N),
  (exports.createChartBuilder = W));
