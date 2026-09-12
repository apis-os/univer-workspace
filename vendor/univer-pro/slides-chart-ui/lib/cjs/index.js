Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs-pro/slides"),
  n = require("@univerjs-pro/chart-ui"),
  r = require("@univerjs-pro/engine-chart"),
  i = require("@univerjs/design"),
  a = require("@univerjs/ui"),
  o = require("react"),
  s = require("react/jsx-runtime"),
  c = require("@univerjs-pro/slides-chart"),
  l = require("rxjs"),
  u = require("@univerjs-pro/slides-ui"),
  d = require("@univerjs/engine-render"),
  f = require("@univerjs-pro/license"),
  p = require("@univerjs-pro/engine-shape");
function m(_0x4d1259) {
  let _0x5943d3 = _0x4d1259.get(t.ISlideDrawingService),
    _0x599b07 = _0x5943d3.getFocusDrawings();
  if (_0x599b07.length !== 1) return null;
  let [_0x52aafe] = _0x599b07;
  if (!_0x52aafe) return null;
  let _0x489a36 = _0x5943d3.getDrawingData(
    _0x52aafe.unitId,
    _0x52aafe.subUnitId,
  )[_0x52aafe.drawingId];
  return !_0x489a36 ||
    _0x489a36.element["type"] !== t.PageElementTypeEnum["Chart"]
    ? null
    : {
        unitId: _0x52aafe.unitId,
        subUnitId: _0x52aafe.subUnitId,
        drawingId: _0x52aafe.drawingId,
      };
}
const h = {
    id: "slide.operation.open-slide-chart-panel",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    },
  },
  g = {
    id: "slide.operation.close-slide-chart-panel",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    },
  },
  _ = {
    id: "slide.operation.open-slide-chart-data-editor",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    },
  },
  v = {
    id: "slide.operation.contextmenu.open-chart-panel",
    type: e.CommandType["OPERATION"],
    handler(_0x10e57d) {
      let _0x40efe8 = m(_0x10e57d);
      return _0x40efe8
        ? _0x10e57d.get(e.ICommandService).executeCommand(h.id, _0x40efe8)
        : false;
    },
  },
  y = "slide-chart.data-editor",
  b = "slide-chart.dialog.data-editor";
let x = (function (_0xb45a48) {
  return (
    (_0xb45a48.SHARED = "shared"),
    (_0xb45a48.DUPLICATE = "duplicate"),
    _0xb45a48
  );
})({});
function S(_0x4d3e7d) {
  let _0x38b92e = (0, a.useDependency)(e.LocaleService),
    { values: _0x26d616, onCancel: _0x22874d, onSubmit: _0x291903 } = _0x4d3e7d,
    [_0x1aa72c, _0x2a3d6c] = (0, o.useState)(() =>
      (0, r.isReferencedChartDataSource)(_0x4d3e7d.dataSource)
        ? "referenced"
        : "inline",
    ),
    [_0x1c58e9, _0x14a391] = (0, o.useState)(null),
    [_0x944002, _0x1b7ccf] = (0, o.useState)(() =>
      _0x26d616.map((_0x228ad9) => [..._0x228ad9]),
    ),
    [_0x374fd4, _0x418470] = (0, o.useState)(null),
    _0x56d642 = (_0x384068) => {
      let _0x54f39b = (0, n.compactInlineTableValues)(_0x944002);
      if (_0x54f39b.length === 0) {
        _0x418470(_0x38b92e.t("slides-chart-ui.common.tableDataEmpty"));
        return;
      }
      (_0x418470(null), _0x291903(_0x54f39b, _0x384068));
    };
  return (0, s.jsxs)("div", {
    className:
      "univer-flex\x20univer-h-full\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-gap-4\x20univer-p-1",
    children: [
      (0, s.jsx)("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
        children: (0, s.jsx)(n.ChartReferencedDataSourceEditor, {
          mode: _0x1aa72c,
          initialSource: (0, r.isReferencedChartDataSource)(
            _0x4d3e7d.dataSource,
          )
            ? _0x4d3e7d.dataSource["source"]
            : undefined,
          inlineContent: (0, s.jsx)(n.ChartInlineTableEditor, {
            values: _0x944002,
            parsePastedText: r.parseInlineChartTable,
            onChange: _0x1b7ccf,
          }),
          onModeChange: (_0x428354) => {
            (_0x2a3d6c(_0x428354), _0x14a391(null));
          },
          onPreviewChange: (_0x2bad6f, _0x4b9840) =>
            _0x14a391(
              _0x2bad6f &&
                _0x4b9840.status === r.ChartDataSourceRuntimeStatus["READY"]
                ? { source: _0x2bad6f }
                : null,
            ),
        }),
      }),
      _0x374fd4 &&
        (0, s.jsx)("div", {
          className:
            "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
          children: _0x374fd4,
        }),
      (0, s.jsxs)("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x22874d &&
            (0, s.jsx)(i.Button, {
              type: "button",
              variant: "default",
              onClick: _0x22874d,
              children: _0x38b92e.t("slides-chart-ui.common.cancel"),
            }),
          (0, s.jsx)(i.Button, {
            type: "button",
            variant: "primary",
            disabled: _0x1aa72c === "referenced" && !_0x1c58e9,
            onClick: () => {
              var _0x2d2465;
              return _0x1aa72c === "referenced" && _0x1c58e9
                ? (_0x2d2465 = _0x4d3e7d.onDataSourceSubmit) == null
                  ? undefined
                  : _0x2d2465.call(_0x4d3e7d, _0x1c58e9)
                : _0x56d642("shared");
            },
            children: _0x38b92e.t("slides-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
function C(_0x290338) {
  "@babel/helpers - typeof";
  return (
    (C =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1db113) {
            return typeof _0x1db113;
          }
        : function (_0x5ce579) {
            return _0x5ce579 &&
              typeof Symbol == "function" &&
              _0x5ce579.constructor === Symbol &&
              _0x5ce579 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ce579;
          }),
    C(_0x290338)
  );
}
function w(_0x1a891f, _0x157ec9) {
  if (C(_0x1a891f) != "object" || !_0x1a891f) return _0x1a891f;
  var _0x1bfec7 = _0x1a891f[Symbol.toPrimitive];
  if (_0x1bfec7 !== undefined) {
    var _0xcba884 = _0x1bfec7.call(_0x1a891f, _0x157ec9 || "default");
    if (C(_0xcba884) != "object") return _0xcba884;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x157ec9 === "string" ? String : Number)(_0x1a891f);
}
function T(_0x3efc79) {
  var _0x327649 = w(_0x3efc79, "string");
  return C(_0x327649) == "symbol" ? _0x327649 : _0x327649 + "";
}
function E(_0xb3a9bb, _0x5859f1, _0x5d3d85) {
  return (
    (_0x5859f1 = T(_0x5859f1)) in _0xb3a9bb
      ? Object.defineProperty(_0xb3a9bb, _0x5859f1, {
          value: _0x5d3d85,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xb3a9bb[_0x5859f1] = _0x5d3d85),
    _0xb3a9bb
  );
}
function D(_0x417215, _0x1b2b87) {
  return function (_0x4b69ae, _0x49953d) {
    _0x1b2b87(_0x4b69ae, _0x49953d, _0x417215);
  };
}
function O(_0x7ab9d7, _0x55f6e6, _0x325f51, _0xaa5d02) {
  var _0x828160 = arguments.length,
    _0x5e3c1c =
      _0x828160 < 3
        ? _0x55f6e6
        : _0xaa5d02 === null
          ? (_0xaa5d02 = Object.getOwnPropertyDescriptor(_0x55f6e6, _0x325f51))
          : _0xaa5d02,
    _0x399ee7;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5e3c1c = Reflect.decorate(_0x7ab9d7, _0x55f6e6, _0x325f51, _0xaa5d02);
  else {
    for (var _0x577809 = _0x7ab9d7.length - 1; _0x577809 >= 0; _0x577809--)
      (_0x399ee7 = _0x7ab9d7[_0x577809]) &&
        (_0x5e3c1c =
          (_0x828160 < 3
            ? _0x399ee7(_0x5e3c1c)
            : _0x828160 > 3
              ? _0x399ee7(_0x55f6e6, _0x325f51, _0x5e3c1c)
              : _0x399ee7(_0x55f6e6, _0x325f51)) || _0x5e3c1c);
  }
  return (
    _0x828160 > 3 &&
      _0x5e3c1c &&
      Object.defineProperty(_0x55f6e6, _0x325f51, _0x5e3c1c),
    _0x5e3c1c
  );
}
const k = (0, e.createIdentifier)("slide-chart.ui.service");
let A = class extends n.ChartUIService {
  constructor(_0x3e4fd8, _0x101533, _0x34553e, _0x29a5ac, _0x400d73) {
    (super(_0x400d73),
      (this._chartModelService = _0x3e4fd8),
      (this._commandService = _0x101533),
      (this.resourceService = _0x34553e),
      (this._slideDrawingService = _0x29a5ac),
      E(this, "_activeEditChart$", new l["BehaviorSubject"](null)),
      E(this, "_selectedElement$", new l["BehaviorSubject"](null)),
      E(this, "_panelRoute$", new l["BehaviorSubject"](null)),
      E(this, "activeEditChart$", this._activeEditChart$["asObservable"]()),
      E(this, "selectedElement$", this._selectedElement$["asObservable"]()),
      E(this, "panelRoute$", this._panelRoute$["asObservable"]()));
  }
  get activeRuntimeModel() {
    return this._chartModelService["activeRuntimeModel"];
  }
  get activeRuntimeModel$() {
    return this._chartModelService["activeRuntimeModel$"];
  }
  get activeEditChart() {
    return this._activeEditChart$["getValue"]();
  }
  setActiveEditChart(_0x43323c) {
    this._activeEditChart$["getValue"]() !== _0x43323c &&
      this._activeEditChart$["next"](_0x43323c);
  }
  isElementEditModeActive(_0x20f2ee) {
    return this._activeEditChart$["getValue"]() === _0x20f2ee;
  }
  setSelectedElement(_0x63f725) {
    this._selectedElement$["next"](_0x63f725);
  }
  setPanelRoute(_0x3ef1d9, _0x44ade7) {
    this._panelRoute$["next"]({ chartId: _0x3ef1d9, route: _0x44ade7 });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  executeChartUpdateConfig(_0x51f6d4) {
    let _0x11eace = this._chartModelService["activeRuntimeModel"],
      _0xa99a97 =
        _0x51f6d4.unitId ?? (_0x11eace == null ? undefined : _0x11eace.unitId),
      _0x149af5 =
        _0x51f6d4.chartId ??
        (_0x11eace == null ? undefined : _0x11eace.chartId);
    !_0xa99a97 ||
      !_0x149af5 ||
      this._commandService["executeCommand"](
        c.UpdateSlideChartConfigCommand["id"],
        { ..._0x51f6d4, unitId: _0xa99a97, chartId: _0x149af5 },
      );
  }
  getDrawingBorderColor(_0x440cbf, _0x2598b0, _0x18a3fd) {
    var _0x1b1cf7;
    let _0x162757 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x440cbf,
      subUnitId: _0x2598b0,
      drawingId: _0x18a3fd,
    });
    if (!(
      !_0x162757 || _0x162757.element["type"] !== t.PageElementTypeEnum["Chart"]
    ))
      return (
        ((_0x1b1cf7 = _0x162757.element["stroke"]) == null
          ? undefined
          : _0x1b1cf7.color) ?? c.DEFAULT_SLIDE_CHART_STROKE["color"]
      );
  }
  updateDrawingBorderColor(_0x411dd4, _0x4493a2, _0xfae0b1, _0x1c7ace) {
    let _0x3e89bb = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x411dd4,
      subUnitId: _0x4493a2,
      drawingId: _0xfae0b1,
    });
    if (
      !_0x3e89bb ||
      _0x3e89bb.element["type"] !== t.PageElementTypeEnum["Chart"]
    )
      return false;
    let _0x384aeb = {
      ...c.DEFAULT_SLIDE_CHART_STROKE,
      ...(_0x3e89bb.element["stroke"] ?? {}),
      color: _0x1c7ace,
    };
    return (
      this._commandService["executeCommand"](
        t.UpdateSlideDrawingCommand["id"],
        {
          patches: [
            {
              unitId: _0x411dd4,
              subUnitId: _0x4493a2,
              drawingId: _0xfae0b1,
              element: { ..._0x3e89bb.element, stroke: _0x384aeb },
            },
          ],
        },
      ),
      true
    );
  }
  dispose() {
    (this._activeEditChart$["complete"](),
      this._selectedElement$["complete"](),
      this._panelRoute$["complete"](),
      super.dispose());
  }
};
A = O(
  [
    D(0, (0, e.Inject)(c.SlideChartModelService)),
    D(1, e.ICommandService),
    D(2, (0, e.Inject)(c.SlideChartResourceService)),
    D(3, (0, e.Inject)(t.ISlideDrawingService)),
    D(4, (0, e.Inject)(n.ChartViewStateRegistry)),
  ],
  A,
);
const j = "slide-chart.edit-panel",
  ee = "column",
  M = {
    axis: {
      ...n.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true,
    },
    indicatorLine: n.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    legend: n.DEFAULT_CHART_LEGEND_VALUES,
    pareto: n.DEFAULT_CHART_PARETO_VALUES,
    pie: n.DEFAULT_CHART_PIE_VALUES,
    series: n.DEFAULT_CHART_SERIES_VALUES,
    style: n.DEFAULT_CHART_STYLE_VALUES,
    titles: n.DEFAULT_CHART_TITLE_VALUES,
    waterfall: { ...n.DEFAULT_CHART_WATERFALL_SETUP_VALUES, useSubtotal: true },
    waterfallStyle: n.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: n.DEFAULT_CHART_WORD_CLOUD_VALUES,
  },
  te = [
    r.ChartTypeBits["Line"],
    r.ChartTypeBits["Radar"],
    r.ChartTypeBits["WordCloud"],
    r.ChartTypeBits["Scatter"],
    r.ChartTypeBits["Relation"],
    r.ChartTypeBits["Sankey"],
    r.ChartTypeBits["Heatmap"],
    r.ChartTypeBits["Boxplot"],
    r.ChartTypeBits["Candlestick"],
    r.ChartTypeBits["Histogram"],
    r.ChartTypeBits["Treemap"],
    r.ChartTypeBits["Sunburst"],
    r.ChartTypeBits["Gauge"],
    r.ChartTypeBits["Chord"],
  ];
function ne(_0x5df0b0) {
  let _0x43ee74 = (0, a.useDependency)(e.LocaleService);
  return (0, s.jsxs)("div", {
    children: [
      (0, s.jsx)(n.ChartEditBlockTitle, {
        title: _0x43ee74.t("slides-chart-ui.common.data"),
      }),
      (0, s.jsx)(i.Button, {
        type: "button",
        variant: "default",
        className: "univer-w-full\x20univer-justify-start",
        onClick: _0x5df0b0.onEditData,
        children: _0x43ee74.t("slides-chart-ui.common.editData"),
      }),
    ],
  });
}
function re() {
  let _0x15382b = (0, n.useChartEditorChartType)();
  return (0, s.jsx)(n.ChartGradientFillField, {
    visible: te.every(
      (_0x58e3fa) => !r.chartBitsUtils["baseOn"](_0x15382b, _0x58e3fa),
    ),
  });
}
function ie(_0x230c0d) {
  return (0, s.jsxs)(n.ChartSectionAccordionItem, {
    id: _0x230c0d.id,
    children: [
      (0, s.jsx)(n.ChartSectionAccordionTrigger, { children: _0x230c0d.label }),
      (0, s.jsx)(n.ChartSectionAccordionContent, {
        children: _0x230c0d.children,
      }),
    ],
  });
}
function ae(_0x54a5c8, _0x15539a = false) {
  let _0x10d5c1 = _0x54a5c8 === r.ChartTypeBits["WordCloud"],
    _0x4c37f2 = r.chartBitsUtils["baseOn"](
      _0x54a5c8,
      r.ChartTypeBits["Bubble"],
    ),
    _0x5c6de8 = r.chartBitsUtils["baseOn"](_0x54a5c8, r.ChartTypeBits["Pie"]),
    _0x5c5443 = _0x54a5c8 === r.ChartTypeBits["Waterfall"],
    _0x32358b = _0x54a5c8 === r.ChartTypeBits["Pareto"],
    _0x444479 = _0x54a5c8 === r.ChartTypeBits["Candlestick"],
    _0x2c45a5 = _0x54a5c8 === r.ChartTypeBits["Histogram"],
    _0x1bee81 = _0x54a5c8 === r.ChartTypeBits["Treemap"],
    _0x304604 = _0x54a5c8 === r.ChartTypeBits["Sunburst"],
    _0xd876cf = _0x54a5c8 === r.ChartTypeBits["Gauge"],
    _0x4f2fd5 = _0x54a5c8 === r.ChartTypeBits["Chord"],
    _0x58727d = [
      n.ChartEditPanelSection["ChartStyle"],
      n.ChartEditPanelSection["ChartAndAxisTitles"],
    ];
  return (
    _0x10d5c1 && _0x58727d.push(n.ChartEditPanelSection["WordCloud"]),
    (0, n.chartTypeSupportsCapability)(
      _0x54a5c8,
      n.ChartEditorCapability["GeneralSeries"],
    ) &&
      !_0x4c37f2 &&
      !_0x32358b &&
      _0x58727d.push(n.ChartEditPanelSection["Series"]),
    _0x5c5443 && _0x58727d.push(n.ChartEditPanelSection["WaterfallSeries"]),
    _0x32358b &&
      _0x58727d.push(
        n.ChartEditPanelSection["ParetoBarSeries"],
        n.ChartEditPanelSection["ParetoLineSeries"],
      ),
    _0x5c6de8 && _0x58727d.push(n.ChartEditPanelSection["PieStyle"]),
    _0x444479 && _0x58727d.push(n.ChartEditPanelSection["Candlestick"]),
    _0x2c45a5 && _0x58727d.push(n.ChartEditPanelSection["Histogram"]),
    _0x1bee81 && _0x58727d.push(n.ChartEditPanelSection["Treemap"]),
    _0x304604 && _0x58727d.push(n.ChartEditPanelSection["Sunburst"]),
    _0xd876cf && _0x58727d.push(n.ChartEditPanelSection["Gauge"]),
    _0x4f2fd5 && _0x58727d.push(n.ChartEditPanelSection["Chord"]),
    (0, n.chartTypeSupportsCapability)(
      _0x54a5c8,
      n.ChartEditorCapability["Legend"],
    ) && _0x58727d.push(n.ChartEditPanelSection["Legend"]),
    (0, n.chartTypeSupportsCapability)(
      _0x54a5c8,
      n.ChartEditorCapability["Axes"],
    ) &&
      (_0x58727d.push(
        n.ChartEditPanelSection["HorizontalAxis"],
        n.ChartEditPanelSection["VerticalAxis"],
      ),
      _0x15539a && _0x58727d.push(n.ChartEditPanelSection["RightVerticalAxis"]),
      _0x58727d.push(n.ChartEditPanelSection["GridlinesAndTicks"])),
    (0, n.chartTypeSupportsCapability)(
      _0x54a5c8,
      n.ChartEditorCapability["IndicatorLine"],
    ) && _0x58727d.push(n.ChartEditPanelSection["IndicatorLine"]),
    _0x58727d
  );
}
function oe(_0x293fa5) {
  var _0x46fb04, _0x373254, _0x5c6070;
  let _0xf44b75 = (0, a.useDependency)(k),
    _0x4c1be6 = (0, a.useDependency)(e.LocaleService),
    _0x27a4b5 = (0, n.useChartEditorChartType)(),
    _0x37ffbc = (0, n.useChartEditorHasRightAxis)(),
    [_0x58f5b7, _0x16e9ee] = (0, o.useState)(
      c.DEFAULT_SLIDE_CHART_STROKE["color"],
    ),
    [_0x149734, _0x10a205] = (0, o.useState)(
      ((_0x46fb04 = _0x293fa5.route) == null ? undefined : _0x46fb04.section) ??
        n.ChartEditPanelSection["ChartStyle"],
    );
  ((0, o.useEffect)(() => {
    !_0x293fa5.subUnitId ||
      !_0x293fa5.drawingId ||
      _0x16e9ee(
        _0xf44b75.getDrawingBorderColor(
          _0x293fa5.unitId,
          _0x293fa5.subUnitId,
          _0x293fa5.drawingId,
        ) ?? c.DEFAULT_SLIDE_CHART_STROKE["color"],
      );
  }, [_0xf44b75, _0x293fa5.drawingId, _0x293fa5.subUnitId, _0x293fa5.unitId]),
    (0, o.useEffect)(() => {
      var _0x226982;
      (_0x226982 = _0x293fa5.route) != null &&
        _0x226982.section &&
        _0x10a205(_0x293fa5.route["section"]);
    }, [_0x293fa5.route]));
  let _0x477789 = _0x4c1be6.t("slides-chart-ui.border"),
    _0x4574de = _0x4c1be6.t("slides-chart-ui.editor.defaultColor"),
    _0x667ab2 = (0, s.jsx)(n.ChartColorField, {
      emptyLabel: _0x4574de,
      label: _0x477789,
      pickerFallbackValue: c.DEFAULT_SLIDE_CHART_STROKE["color"],
      resetLabel: _0x4574de,
      value: _0x58f5b7,
      onChange: (_0x5ea248) => {
        let _0x2c94ea = _0x5ea248 ?? c.DEFAULT_SLIDE_CHART_STROKE["color"];
        (_0x16e9ee(_0x2c94ea),
          _0x293fa5.subUnitId &&
            _0x293fa5.drawingId &&
            _0xf44b75.updateDrawingBorderColor(
              _0x293fa5.unitId,
              _0x293fa5.subUnitId,
              _0x293fa5.drawingId,
              _0x2c94ea,
            ));
      },
    }),
    _0x3a3332 = (0, s.jsx)(n.ChartTypeSpecificStyleSection, {}),
    _0x4403f4 = {
      [n.ChartEditPanelSection["Candlestick"]]: _0x4c1be6.t(
        "slides-chart-ui.section.candlestick",
      ),
      [n.ChartEditPanelSection["ChartAndAxisTitles"]]: _0x4c1be6.t(
        "slides-chart-ui.common.chartAndAxisTitles",
      ),
      [n.ChartEditPanelSection["ChartStyle"]]: _0x4c1be6.t(
        "slides-chart-ui.common.chartStyle",
      ),
      [n.ChartEditPanelSection["Chord"]]: _0x4c1be6.t(
        "slides-chart-ui.section.chord",
      ),
      [n.ChartEditPanelSection["Funnel"]]: _0x4c1be6.t(
        "slides-chart-ui.section.funnel",
      ),
      [n.ChartEditPanelSection["Gauge"]]: _0x4c1be6.t(
        "slides-chart-ui.section.gauge",
      ),
      [n.ChartEditPanelSection["GridlinesAndTicks"]]: _0x4c1be6.t(
        "slides-chart-ui.section.gridlinesAndTicks",
      ),
      [n.ChartEditPanelSection["Heatmap"]]: _0x4c1be6.t(
        "slides-chart-ui.common.heatmap",
      ),
      [n.ChartEditPanelSection["Histogram"]]: _0x4c1be6.t(
        "slides-chart-ui.section.histogram",
      ),
      [n.ChartEditPanelSection["HorizontalAxis"]]: _0x4c1be6.t(
        "slides-chart-ui.common.horizontalAxis",
      ),
      [n.ChartEditPanelSection["IndicatorLine"]]: _0x4c1be6.t(
        "slides-chart-ui.section.indicatorLine",
      ),
      [n.ChartEditPanelSection["Legend"]]: _0x4c1be6.t(
        "slides-chart-ui.common.legend",
      ),
      [n.ChartEditPanelSection["LineAndArea"]]: _0x4c1be6.t(
        "slides-chart-ui.section.lineAndArea",
      ),
      [n.ChartEditPanelSection["ParetoBarSeries"]]: _0x4c1be6.t(
        "slides-chart-ui.section.paretoBar",
      ),
      [n.ChartEditPanelSection["ParetoLineSeries"]]: _0x4c1be6.t(
        "slides-chart-ui.section.paretoLine",
      ),
      [n.ChartEditPanelSection["PieStyle"]]: _0x4c1be6.t(
        "slides-chart-ui.section.pie",
      ),
      [n.ChartEditPanelSection["Radar"]]: _0x4c1be6.t(
        "slides-chart-ui.section.radar",
      ),
      [n.ChartEditPanelSection["Relation"]]: _0x4c1be6.t(
        "slides-chart-ui.section.relation",
      ),
      [n.ChartEditPanelSection["RightVerticalAxis"]]: _0x4c1be6.t(
        "slides-chart-ui.common.rightVerticalAxis",
      ),
      [n.ChartEditPanelSection["Series"]]: _0x4c1be6.t(
        "slides-chart-ui.common.series",
      ),
      [n.ChartEditPanelSection["Sunburst"]]: _0x4c1be6.t(
        "slides-chart-ui.section.sunburst",
      ),
      [n.ChartEditPanelSection["Treemap"]]: _0x4c1be6.t(
        "slides-chart-ui.section.treemap",
      ),
      [n.ChartEditPanelSection["Trendline"]]: _0x4c1be6.t(
        "slides-chart-ui.common.trendline",
      ),
      [n.ChartEditPanelSection["VerticalAxis"]]: _0x4c1be6.t(
        "slides-chart-ui.common.verticalAxis",
      ),
      [n.ChartEditPanelSection["WaterfallSeries"]]: _0x4c1be6.t(
        "slides-chart-ui.section.waterfall",
      ),
      [n.ChartEditPanelSection["WordCloud"]]: _0x4c1be6.t(
        "slides-chart-ui.section.wordCloud",
      ),
    },
    _0x10f8d9 = {
      [n.ChartEditPanelSection["ChartStyle"]]: (0, s.jsx)(n.ChartStyleSection, {
        defaultValues: M.style,
        hostBorder: _0x667ab2,
      }),
      [n.ChartEditPanelSection["ChartAndAxisTitles"]]: (0, s.jsx)(
        n.ChartMainTitleFields,
        { commitMode: "change", defaultValues: M.titles, showFont: false },
      ),
      [n.ChartEditPanelSection["Series"]]: (0, s.jsx)(n.ChartSeriesSection, {
        defaultValues: M.series,
        NumberFormatField: n.ChartNumberFormatTextField,
        selectedSeriesId:
          (_0x373254 = _0x293fa5.route) == null
            ? undefined
            : _0x373254.seriesId,
      }),
      [n.ChartEditPanelSection["WaterfallSeries"]]: (0, s.jsx)(
        n.ChartWaterfallStyleSection,
        {
          defaultValues: M.waterfallStyle,
          NumberFormatField: n.ChartNumberFormatTextField,
          selectedSeriesId:
            (_0x5c6070 = _0x293fa5.route) == null
              ? undefined
              : _0x5c6070.seriesId,
        },
      ),
      [n.ChartEditPanelSection["ParetoBarSeries"]]: (0, s.jsx)(
        n.ChartParetoSeriesSection,
        {
          defaultValues: M.pareto,
          NumberFormatField: n.ChartNumberFormatTextField,
          showDataPointEditor: true,
          target: "barStyle",
        },
      ),
      [n.ChartEditPanelSection["ParetoLineSeries"]]: (0, s.jsx)(
        n.ChartParetoSeriesSection,
        {
          defaultValues: M.pareto,
          NumberFormatField: n.ChartNumberFormatTextField,
          showDataPointEditor: true,
          target: "cumulativeLineStyle",
        },
      ),
      [n.ChartEditPanelSection["PieStyle"]]: (0, s.jsx)(
        n.ChartPieStyleSection,
        {
          defaultValues: M.pie,
          NumberFormatField: n.ChartNumberFormatTextField,
        },
      ),
      [n.ChartEditPanelSection["WordCloud"]]: (0, s.jsx)(
        n.ChartWordCloudStyleSection,
        { defaultValues: M.wordCloud },
      ),
      [n.ChartEditPanelSection["Legend"]]: (0, s.jsx)(n.ChartLegendRoot, {
        defaultValues: M.legend,
        children: (0, s.jsxs)("div", {
          className: "univer-flex univer-flex-col univer-gap-2",
          children: [
            (0, s.jsx)(n.ChartLegendPositionField, {}),
            (0, s.jsx)(n.ChartLegendWrapField, {}),
          ],
        }),
      }),
      [n.ChartEditPanelSection["HorizontalAxis"]]: (0, s.jsx)(
        n.ChartAxisLineVisibilityField,
        { axis: "x", defaultValues: M.axis },
      ),
      [n.ChartEditPanelSection["VerticalAxis"]]: (0, s.jsx)(
        n.ChartAxisLineVisibilityField,
        { axis: "y", defaultValues: M.axis },
      ),
      [n.ChartEditPanelSection["RightVerticalAxis"]]: (0, s.jsx)(
        n.ChartAxisLineVisibilityField,
        { axis: "rightY", defaultValues: M.axis },
      ),
      [n.ChartEditPanelSection["GridlinesAndTicks"]]: (0, s.jsxs)("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          (0, s.jsx)(n.ChartGridlineVisibilityField, {
            axis: "x",
            defaultValues: M.axis,
            label: _0x4c1be6.t("slides-chart-ui.common.horizontalAxis"),
          }),
          (0, s.jsx)(n.ChartGridlineVisibilityField, {
            axis: "y",
            defaultValues: M.axis,
            label: _0x4c1be6.t("slides-chart-ui.common.verticalAxis"),
          }),
        ],
      }),
      [n.ChartEditPanelSection["IndicatorLine"]]: (0, s.jsx)(
        n.ChartIndicatorLineColorField,
        { defaultValues: M.indicatorLine },
      ),
      [n.ChartEditPanelSection["Candlestick"]]: _0x3a3332,
      [n.ChartEditPanelSection["Histogram"]]: _0x3a3332,
      [n.ChartEditPanelSection["Treemap"]]: _0x3a3332,
      [n.ChartEditPanelSection["Sunburst"]]: _0x3a3332,
      [n.ChartEditPanelSection["Gauge"]]: _0x3a3332,
      [n.ChartEditPanelSection["Chord"]]: _0x3a3332,
    };
  return (0, s.jsx)(n.ChartSectionAccordion, {
    value: _0x149734,
    onChange: _0x10a205,
    children: ae(_0x27a4b5, _0x37ffbc).map((_0xd8ccb) =>
      (0, s.jsx)(
        ie,
        {
          id: _0xd8ccb,
          label: _0x4403f4[_0xd8ccb],
          children: _0x10f8d9[_0xd8ccb],
        },
        _0xd8ccb,
      ),
    ),
  });
}
function N(_0x560377) {
  let {
      unitId: _0x2df99d,
      subUnitId: _0x32be19,
      drawingId: _0x2d27d8,
      chartId: _0x3249cf,
    } = _0x560377,
    _0x3a4d3d = (0, a.useDependency)(c.SlideChartModelService),
    _0xfb9652 = (0, a.useDependency)(c.SlideChartResourceService),
    _0x157e16 = (0, a.useDependency)(k),
    _0x6afd52 = (0, a.useDependency)(e.LocaleService),
    _0x382090 = (0, a.useDependency)(e.ICommandService),
    _0x41b9f6 = (0, a.useDependency)(e.Injector),
    _0x439285 = (0, a.useDependency)(e.IUniverInstanceService),
    [_0x4678a6, _0x2f7bf1] = (0, o.useState)(n.ChartEditPanelTab["Data"]),
    _0x5ba21c = (0, a.useObservable)(_0x157e16.panelRoute$, null),
    _0x56dd9d =
      (_0x5ba21c == null ? undefined : _0x5ba21c.chartId) === _0x3249cf
        ? _0x5ba21c.route
        : null;
  ((0, o.useEffect)(() => {
    _0x3a4d3d.setActiveChartById(_0x2df99d, _0x3249cf);
  }, [_0x3249cf, _0x3a4d3d, _0x2df99d]),
    (0, o.useEffect)(() => {
      ((_0x56dd9d == null ? undefined : _0x56dd9d.tab) ===
        n.ChartEditPanelTab["Style"] && _0x2f7bf1(n.ChartEditPanelTab["Style"]),
        (_0x56dd9d == null ? undefined : _0x56dd9d.tab) ===
          n.ChartEditPanelTab["Data"] &&
          _0x2f7bf1(n.ChartEditPanelTab["Data"]));
    }, [_0x56dd9d]));
  let _0x43ca68 = (0, a.useObservable)(
      _0x3a4d3d.activeRuntimeModel$,
      _0x3a4d3d.activeRuntimeModel,
    ),
    _0x71e67a =
      (_0x43ca68 == null ? undefined : _0x43ca68.unitId) === _0x2df99d &&
      _0x43ca68.chartId === _0x3249cf,
    _0x5e65f4 = (0, o.useMemo)(() => {
      if (!_0x71e67a || !_0x32be19 || !_0x2d27d8) return null;
      let _0x428734 = _0x439285.getUnit(
        _0x2df99d,
        e.UniverInstanceType["UNIVER_SLIDE"],
      );
      return _0x428734
        ? new n["ChartHostAdapter"](
            _0x43ca68.model,
            new c.SlideChartConfigAdapter({
              unitId: _0x2df99d,
              subUnitId: _0x32be19,
              chartId: _0x3249cf,
              elementId: _0x2d27d8,
              slideModel: _0x428734,
              injector: _0x41b9f6,
            }),
          )
        : null;
    }, [
      _0x43ca68,
      _0x3249cf,
      _0x2d27d8,
      _0x41b9f6,
      _0x71e67a,
      _0x32be19,
      _0x2df99d,
      _0x439285,
    ]),
    _0x227f28 = (0, o.useMemo)(
      () =>
        (0, n.buildChartTypeSelectOptions)(
          n.CHART_TYPE_CATALOG["map"]((_0x3711db) => ({
            ..._0x3711db,
            label: _0x6afd52.t(
              "slides-chart-ui.chartTypes." + _0x3711db.labelId,
            ),
          })),
        ),
      [_0x6afd52],
    );
  return !_0x71e67a || !_0x5e65f4
    ? null
    : (0, s.jsx)(n.ChartEditorProvider, {
        chartUIService: _0x157e16,
        hostAdapter: _0x5e65f4,
        children: (0, s.jsxs)("div", {
          className:
            "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-min-w-0 univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
          children: [
            (0, s.jsx)(n.ChartEditPanelTabs, {
              ariaLabel: _0x6afd52.t("slides-chart-ui.common.editChart"),
              className: "univer-shrink-0 univer-px-3",
              items: [
                {
                  label: _0x6afd52.t("slides-chart-ui.common.setup"),
                  panelId: se,
                  value: n.ChartEditPanelTab["Data"],
                },
                {
                  label: _0x6afd52.t("slides-chart-ui.common.customize"),
                  panelId: ce,
                  value: n.ChartEditPanelTab["Style"],
                },
              ],
              value: _0x4678a6,
              onChange: _0x2f7bf1,
            }),
            _0x4678a6 === n.ChartEditPanelTab["Data"]
              ? (0, s.jsx)(n.ChartEditPanel, {
                  id: se,
                  label: _0x6afd52.t("slides-chart-ui.common.setup"),
                  children: (0, s.jsxs)("div", {
                    className:
                      "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                    children: [
                      (0, s.jsx)(n.ChartTypeField, { options: _0x227f28 }),
                      (0, s.jsx)(n.ChartTypeSpecificSetupSection, {}),
                      (0, s.jsx)(n.ChartThemeField, {}),
                      (0, s.jsx)(re, {}),
                      (0, s.jsx)(n.ChartStackField, {}),
                      (0, s.jsx)(ne, {
                        onEditData: () => {
                          _0x382090.executeCommand(_.id, {
                            unitId: _0x2df99d,
                            chartId: _0x3249cf,
                          });
                        },
                      }),
                      (0, s.jsx)(n.ChartCommonDataMappingSection, {
                        orientationControl: (0, s.jsx)(i.Button, {
                          size: "small",
                          onClick: () => {
                            var _0x489302;
                            return _0x157e16.executeChartUpdateConfig({
                              patch: {
                                context: {
                                  orient:
                                    ((_0x489302 = _0xfb9652.getChart(
                                      _0x2df99d,
                                      _0x3249cf,
                                    )) == null ||
                                    (_0x489302 = _0x489302.context) == null
                                      ? undefined
                                      : _0x489302.orient) === ee
                                      ? "row"
                                      : ee,
                                },
                              },
                            });
                          },
                          children: _0x6afd52.t(
                            "slides-chart-ui.common.switchRowColumn",
                          ),
                        }),
                      }),
                      (0, s.jsx)(n.ChartTypeSpecificDataSection, {}),
                      (0, s.jsx)(n.ChartWaterfallSetupFields, {
                        defaultValues: M.waterfall,
                      }),
                    ],
                  }),
                })
              : (0, s.jsx)(n.ChartEditPanel, {
                  id: ce,
                  className: "univer-min-w-0 univer-overflow-x-hidden",
                  label: _0x6afd52.t("slides-chart-ui.common.customize"),
                  children: (0, s.jsx)(oe, {
                    unitId: _0x2df99d,
                    subUnitId: _0x32be19,
                    drawingId: _0x2d27d8,
                    route: _0x56dd9d,
                  }),
                }),
          ],
        }),
      });
}
const se = "slide-chart-setup-panel",
  ce = "slide-chart-style-panel";
let P = class {
  constructor(_0x2691bb, _0x589a16, _0x586b61) {
    ((this._instanceService = _0x2691bb),
      (this._commandService = _0x589a16),
      (this._drawingStateService = _0x586b61));
  }
  insertChartFromText(_0x143510, _0x7c228f, _0x7e2958) {
    let _0x4e6af6 = (0, r.parseInlineChartTable)(_0x143510);
    return (
      _0x4e6af6.length !== 0 &&
      this.insertChart(_0x4e6af6, _0x7c228f, _0x7e2958)
    );
  }
  insertChart(_0x3a2c6f, _0x6e5cb0, _0x42f3c2 = {}) {
    if (_0x3a2c6f.length === 0) return false;
    let _0x62ef4f = (0, n.tryPrepareInlineChartData)(_0x6e5cb0, _0x3a2c6f);
    if (!_0x62ef4f.ok) return false;
    if (_0x42f3c2.placeholderDrawing)
      return this._insertChartIntoPlaceholder(
        _0x62ef4f.values,
        _0x6e5cb0,
        _0x42f3c2.placeholderDrawing,
        _0x42f3c2.style,
        _0x42f3c2.dataSource,
      );
    let _0x4527cd = (0, t.getSlideCommandTarget)(this._instanceService);
    if (!_0x4527cd) return false;
    let {
        presentation: _0x206786,
        unitId: _0x19b3c6,
        subUnitId: _0x42d3cb,
      } = _0x4527cd,
      _0x21dafc = _0x206786.getSnapshot().defaultPageSize,
      _0x5b2a38 = Math.min(
        520,
        Math.max(320, Math.round(_0x21dafc.width * 0.56)),
      ),
      _0x3bc440 = Math.min(
        360,
        Math.max(220, Math.round(_0x21dafc.height * 0.56)),
      ),
      _0x64e64f = Math.max(24, Math.round((_0x21dafc.width - _0x5b2a38) / 2)),
      _0x3fb481 = Math.max(24, Math.round((_0x21dafc.height - _0x3bc440) / 2)),
      _0x45bed7 = (0, e.generateRandomId)(6),
      _0x5cf5b5 = (0, e.generateRandomId)(6);
    return this._commandService["syncExecuteCommand"](
      c.InsertSlideChartCommand["id"],
      {
        unitId: _0x19b3c6,
        subUnitId: _0x42d3cb,
        chart: {
          chartType: _0x6e5cb0,
          ...(_0x42f3c2.style ? { style: _0x42f3c2.style } : {}),
        },
        dataSource: _0x42f3c2.dataSource ?? { values: _0x62ef4f.values },
        element: {
          id: _0x5cf5b5,
          chartId: _0x45bed7,
          transform: {
            left: _0x64e64f,
            top: _0x3fb481,
            width: _0x5b2a38,
            height: _0x3bc440,
          },
        },
      },
    )
      ? (this._drawingStateService["selectDrawings"](
          { unitId: _0x19b3c6, subUnitId: _0x42d3cb },
          [_0x5cf5b5],
          _0x5cf5b5,
        ),
        this._commandService["syncExecuteCommand"](h.id, {
          unitId: _0x19b3c6,
          subUnitId: _0x42d3cb,
          drawingId: _0x5cf5b5,
        }),
        true)
      : false;
  }
  _insertChartIntoPlaceholder(
    _0x3c0e2e,
    _0x382242,
    _0xc0c828,
    _0xf978fa,
    _0x1c07da,
  ) {
    if (_0xc0c828.element["type"] !== t.PageElementTypeEnum["Placeholder"])
      return false;
    let _0x214bb1 = {
        chartType: _0x382242,
        ...(_0xf978fa ? { style: _0xf978fa } : {}),
      },
      _0x12f8be = _0x1c07da ?? { values: _0x3c0e2e },
      {
        unitId: _0x18a177,
        subUnitId: _0x2bf305,
        drawingId: _0x390c64,
        element: _0x493364,
        sourcePageType: _0x38291c,
      } = _0xc0c828,
      { transform: _0x1ab036, placeholder: _0x3b68a8 } = _0x493364,
      _0x5cf16b = {
        id:
          _0x38291c === t.PageTypeEnum["Slide"]
            ? _0x390c64
            : (0, e.generateRandomId)(6),
        transform: _0x1ab036,
        placeholder: _0x3b68a8,
      },
      _0x733a14 =
        _0xc0c828.sourcePageType === t.PageTypeEnum["Slide"]
          ? _0x390c64
          : undefined;
    if (
      !this._commandService["syncExecuteCommand"](
        c.InsertSlideChartCommand["id"],
        {
          unitId: _0x18a177,
          subUnitId: _0x2bf305,
          chart: _0x214bb1,
          dataSource: _0x12f8be,
          element: _0x5cf16b,
          replaceElementId: _0x733a14,
        },
      )
    )
      return false;
    let _0x43c094 = _0x733a14 ?? _0x5cf16b.id;
    return (
      this._drawingStateService["selectDrawings"](
        { unitId: _0x18a177, subUnitId: _0x2bf305 },
        [_0x43c094],
        _0x43c094,
      ),
      this._commandService["syncExecuteCommand"](h.id, {
        unitId: _0xc0c828.unitId,
        subUnitId: _0xc0c828.subUnitId,
        drawingId: _0x43c094,
      }),
      true
    );
  }
};
P = O(
  [
    D(0, e.IUniverInstanceService),
    D(1, e.ICommandService),
    D(2, u.ISlideDrawingStateService),
  ],
  P,
);
const F = "slide-chart.insert-panel",
  le = c.DEFAULT_SLIDE_CHART_VALUES["map"]((_0x4ccbc2) =>
    _0x4ccbc2.join("\x09"),
  ).join("\x0a");
function ue(_0xaf1de8) {
  let _0x2ff0c5 = (0, a.useDependency)(P),
    _0x123fae = (0, a.useDependency)(e.LocaleService),
    {
      defaultChartType: _0x3265a3 = r.ChartTypeBits["Column"],
      defaultTableText: _0x48625f = le,
      insertOptions: _0x27e4bf,
      onCancel: _0x4b71d5,
      onInserted: _0x27403c,
    } = _0xaf1de8,
    _0x1b8979 = (0, o.useMemo)(
      () =>
        (0, n.buildChartTypeSelectOptions)(
          n.CHART_TYPE_CATALOG["map"]((_0x539715) => ({
            ..._0x539715,
            label: _0x123fae.t(
              "slides-chart-ui.chartTypes." + _0x539715.labelId,
            ),
          })),
        ),
      [_0x123fae],
    ),
    [_0x3e248f, _0x3da360] = (0, o.useState)(String(_0x3265a3)),
    _0x1bc800 = _0x1b8979.find((_0x300d85) => _0x300d85.value === _0x3e248f),
    _0x3624ba =
      (_0x1bc800 == null ? undefined : _0x1bc800.chartType) ?? _0x3265a3,
    _0x5621b5 = (_0x3d344a) =>
      (0, n.createChartInlineStarterData)(_0x3d344a, {
        candlestickClose: _0x123fae.t("slides-chart-ui.candlestick.close"),
        candlestickHigh: _0x123fae.t("slides-chart-ui.candlestick.high"),
        candlestickLow: _0x123fae.t("slides-chart-ui.candlestick.low"),
        candlestickOpen: _0x123fae.t("slides-chart-ui.candlestick.open"),
        category: _0x123fae.t("slides-chart-ui.common.category"),
        chordSource: _0x123fae.t("slides-chart-ui.chord.source"),
        chordTarget: _0x123fae.t("slides-chart-ui.chord.target"),
        label: _0x123fae.t("slides-chart-ui.common.label"),
        sunburstHierarchy: _0x123fae.t("slides-chart-ui.sunburst.hierarchy"),
        value: _0x123fae.t("slides-chart-ui.common.value"),
        valueField: _0x123fae.t("slides-chart-ui.common.valueField"),
      }),
    [_0x1e2cd5, _0x50ab71] = (0, o.useState)(() =>
      _0xaf1de8.defaultTableText === undefined
        ? (_0x5621b5(_0x3265a3) ?? (0, r.parseInlineChartTable)(_0x48625f))
        : (0, r.parseInlineChartTable)(_0x48625f),
    ),
    [_0x21e12e, _0x35affa] = (0, o.useState)("inline"),
    [_0x1653d5, _0x5314c2] = (0, o.useState)(null),
    [_0x1ff1b8, _0x3d5adf] = (0, o.useState)([]),
    [_0x2b76e8, _0x1e9030] = (0, o.useState)(null),
    _0x532a4b = {
      [n.InlineChartCreationIssueCode["UnknownOption"]]: _0x123fae.t(
        "slides-chart-ui.common.insertChartFailed",
      ),
      [n.InlineChartCreationIssueCode["EmptyData"]]: _0x123fae.t(
        "slides-chart-ui.common.tableDataEmpty",
      ),
      [n.InlineChartCreationIssueCode["InvalidCandlestickData"]]: _0x123fae.t(
        "slides-chart-ui.candlestick.columnsError",
      ),
    };
  return (0, s.jsxs)("div", {
    className:
      "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    children: [
      (0, s.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [
          (0, s.jsx)("div", {
            className:
              "univer-text-sm\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            children: _0x123fae.t("slides-chart-ui.common.chartType"),
          }),
          (0, s.jsx)(i.Select, {
            className: "univer-w-full !univer-min-w-0",
            value: _0x3e248f,
            options: _0x1b8979,
            onChange: (_0x4eceff) => {
              var _0x44ab05;
              _0x3da360(_0x4eceff);
              let _0x3f9335 =
                  ((_0x44ab05 = _0x1b8979.find(
                    (_0x3b01f8) => _0x3b01f8.value === _0x4eceff,
                  )) == null
                    ? undefined
                    : _0x44ab05.chartType) ?? Number(_0x4eceff),
                _0x4f1a6e = _0x5621b5(_0x3f9335);
              _0x4f1a6e && _0x50ab71(_0x4f1a6e);
            },
          }),
        ],
      }),
      (0, s.jsx)(n.ChartReferencedDataSourceEditor, {
        mode: _0x21e12e,
        inlineContent: (0, s.jsx)(n.ChartInlineTableEditor, {
          values: _0x1e2cd5,
          minColumns: (0, n.getChartInlineTableMinColumns)(_0x3624ba),
          parsePastedText: r.parseInlineChartTable,
          onChange: _0x50ab71,
        }),
        onModeChange: (_0x1af77c) => {
          (_0x35affa(_0x1af77c), _0x5314c2(null), _0x3d5adf([]));
        },
        onPreviewChange: (_0x55496f, _0x3a75b6) => {
          _0x55496f &&
          _0x3a75b6.status === r.ChartDataSourceRuntimeStatus["READY"] &&
          _0x3a75b6.values
            ? (_0x5314c2({ source: _0x55496f }),
              _0x3d5adf(_0x3a75b6.values["map"]((_0xebecc9) => [..._0xebecc9])))
            : (_0x5314c2(null), _0x3d5adf([]));
        },
      }),
      _0x2b76e8 &&
        (0, s.jsx)("div", {
          className:
            "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
          children: _0x2b76e8,
        }),
      (0, s.jsxs)("div", {
        className: "univer-flex\x20univer-justify-end\x20univer-gap-2",
        children: [
          _0x4b71d5 &&
            (0, s.jsx)(i.Button, {
              type: "button",
              variant: "default",
              onClick: _0x4b71d5,
              children: _0x123fae.t("slides-chart-ui.common.cancel"),
            }),
          (0, s.jsx)(i.Button, {
            type: "button",
            variant: "primary",
            disabled: _0x21e12e === "referenced" && !_0x1653d5,
            onClick: () => {
              var _0x4654c1;
              let _0x56461b = (0, n.tryBuildInlineChartCreationPlan)({
                optionId: _0x3e248f,
                values: _0x21e12e === "referenced" ? _0x1ff1b8 : _0x1e2cd5,
              });
              if (!_0x56461b.ok) {
                _0x1e9030(_0x532a4b[_0x56461b.issue["code"]]);
                return;
              }
              let _0x19ca71 =
                  _0x21e12e === "referenced" && _0x1653d5
                    ? { ..._0x27e4bf, dataSource: _0x1653d5 }
                    : _0x27e4bf,
                _0x34e37a = _0x56461b.plan["style"]
                  ? {
                      ..._0x19ca71,
                      style: {
                        ...(_0x19ca71 == null ? undefined : _0x19ca71.style),
                        pie: {
                          ...(_0x19ca71 == null ||
                          (_0x4654c1 = _0x19ca71.style) == null
                            ? undefined
                            : _0x4654c1.pie),
                          ..._0x56461b.plan["style"].pie,
                        },
                      },
                    }
                  : _0x19ca71;
              if (
                !_0x2ff0c5.insertChart(
                  _0x56461b.plan["values"],
                  _0x56461b.plan["chartType"],
                  _0x34e37a,
                )
              ) {
                _0x1e9030(
                  _0x123fae.t("slides-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x1e9030(null), _0x27403c == null || _0x27403c());
            },
            children: _0x123fae.t("slides-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
const I = "slides-chart-ui.config",
  de = {};
function fe(_0x360fc3) {
  let _0x230e6d = _0x360fc3.get(t.ISlideDrawingService);
  return new l.Observable((_0x23e84d) => {
    let _0x106480 = () => _0x23e84d.next(m(_0x360fc3) != null),
      _0x413892 = _0x230e6d.focus$["subscribe"](_0x106480);
    return (_0x106480(), () => _0x413892.unsubscribe());
  });
}
function pe(_0x434128) {
  return {
    id: v.id,
    type: a.MenuItemType["BUTTON"],
    title: _0x434128.get(e.LocaleService).t("slides-chart-ui.common.editChart"),
    icon: "ShapeIcon",
    hidden$: new l["Observable"]((_0x4f45e6) => {
      let _0x3ef4b7 = fe(_0x434128).subscribe((_0x481755) =>
        _0x4f45e6.next(!_0x481755),
      );
      return () => _0x3ef4b7.unsubscribe();
    }),
    disabled$: new l["Observable"]((_0xecb4db) => {
      let _0xb28e93 = fe(_0x434128).subscribe((_0x2d0e75) =>
        _0xecb4db.next(!_0x2d0e75),
      );
      return () => _0xb28e93.unsubscribe();
    }),
  };
}
const L = {
  "slide.contextMenu.drawing": {
    [a.ContextMenuGroup["OTHERS"]]: {
      [v.id]: { order: 1, menuItemFactory: pe },
    },
  },
};
let R = class extends e.Disposable {
  constructor(_0x2a7b02) {
    (super(),
      (this._menuManagerService = _0x2a7b02),
      this._menuManagerService["appendRootMenu"](L));
  }
};
R = O([D(0, a.IMenuManagerService)], R);
let z = class {
  constructor(_0x1575a1, _0x555d1e) {
    ((this._commandService = _0x1575a1), (this._resourceService = _0x555d1e));
  }
  getEditorState(_0x5c2c9a, _0x737fb3) {
    let _0x82c152 = this._resourceService["getChart"](_0x5c2c9a, _0x737fb3),
      _0x4e6bba = _0x82c152
        ? this._resourceService["getDataSource"](
            _0x5c2c9a,
            _0x82c152.dataSourceId,
          )
        : undefined;
    return !_0x82c152 || !_0x4e6bba
      ? null
      : {
          unitId: _0x5c2c9a,
          chartId: _0x737fb3,
          dataSourceId: _0x4e6bba.id,
          dataSource: _0x4e6bba,
          values: (0, r.isInlineChartDataSource)(_0x4e6bba)
            ? _0x4e6bba.values["map"]((_0xcd21bf) => [..._0xcd21bf])
            : [],
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0x5c2c9a,
            _0x4e6bba.id,
          ),
        };
  }
  updateDataFromText(_0x1a9cb5, _0x411396, _0x45ef47, _0x14c323) {
    let _0x284bd4 = (0, r.parseInlineChartTable)(_0x45ef47);
    return (
      _0x284bd4.length !== 0 &&
      this.updateData(_0x1a9cb5, _0x411396, _0x284bd4, _0x14c323)
    );
  }
  updateData(_0x4eadc7, _0x1bfe23, _0x35b937, _0x2b1828) {
    var _0x200c8c;
    if (!this.getEditorState(_0x4eadc7, _0x1bfe23) || _0x35b937.length === 0)
      return false;
    let _0x2cef93 =
      (_0x200c8c = this._resourceService["getChart"](_0x4eadc7, _0x1bfe23)) ==
      null
        ? undefined
        : _0x200c8c.chartType;
    if (_0x2cef93 === undefined) return false;
    let _0x49e243 = (0, n.tryPrepareInlineChartData)(_0x2cef93, _0x35b937);
    return _0x49e243.ok
      ? this.changeDataSource(_0x4eadc7, _0x1bfe23, {
          values: _0x49e243.values,
        })
      : false;
  }
  changeDataSource(_0x435fd3, _0x5432f2, _0x532c01) {
    return this._commandService["syncExecuteCommand"](
      c.ChangeSlideChartDataSourceCommand["id"],
      { unitId: _0x435fd3, chartId: _0x5432f2, dataSource: _0x532c01 },
    );
  }
};
z = O(
  [D(0, e.ICommandService), D(1, (0, e.Inject)(c.SlideChartResourceService))],
  z,
);
var B = class extends e.Disposable {
  constructor(..._0x91c3d7) {
    (super(..._0x91c3d7),
      E(this, "_activeChartId", null),
      E(this, "_modeChanged$", new l["Subject"]()),
      E(this, "modeChanged$", this._modeChanged$["asObservable"]()));
  }
  getRenderMode(_0x5a6d97) {
    return this._activeChartId === _0x5a6d97
      ? r.ChartRenderMode["Dom"]
      : r.ChartRenderMode["Image"];
  }
  setActiveDomChart(_0x551626) {
    let _0x43027d = (_0x551626 == null ? undefined : _0x551626.chartId) ?? null;
    if (this._activeChartId === _0x43027d) return;
    let _0x50f4ad = this._activeChartId;
    ((this._activeChartId = _0x43027d),
      _0x50f4ad &&
        this._modeChanged$["next"]({
          chartId: _0x50f4ad,
          mode: r.ChartRenderMode["Image"],
        }),
      _0x43027d &&
        this._modeChanged$["next"]({
          chartId: _0x43027d,
          mode: r.ChartRenderMode["Dom"],
        }));
  }
  dispose() {
    ((this._activeChartId = null),
      this._modeChanged$["complete"](),
      super.dispose());
  }
};
let V = class extends e.Disposable {
  constructor(_0x8dcf02, _0x533056, _0x35d16c, _0x4c22f4, _0x5cb04b) {
    (super(),
      (this._slideDrawingService = _0x8dcf02),
      (this._modelService = _0x533056),
      (this._renderModeService = _0x35d16c),
      (this._univerInstanceService = _0x4c22f4),
      (this._renderManagerService = _0x5cb04b),
      E(this, "_activeSession", null),
      E(this, "_activeSession$", new l["BehaviorSubject"](null)),
      E(this, "activeSession$", this._activeSession$["asObservable"]()),
      E(this, "_subscriptions", []),
      E(this, "_activeSlideSubscription", null),
      E(this, "_transformStartSubscription", null),
      this._initLifecycleListeners());
  }
  getActiveSession() {
    return this._activeSession;
  }
  open(_0xc553b5) {
    let _0x380d20 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0xc553b5.unitId,
      subUnitId: _0xc553b5.subUnitId,
      drawingId: _0xc553b5.drawingId,
    });
    if (
      !_0x380d20 ||
      _0x380d20.element["type"] !== t.PageElementTypeEnum["Chart"] ||
      _0x380d20.element["chartId"] !== _0xc553b5.chartId
    )
      return false;
    let _0x4b602f = this._modelService["ensureChartModel"](
      _0xc553b5.unitId,
      _0xc553b5.chartId,
    );
    return _0x4b602f
      ? ((this._activeSession = _0xc553b5),
        this._bindActiveSlideListener(_0xc553b5),
        this._bindTransformStartListener(_0xc553b5),
        this._modelService["setActiveChartRuntime"](_0x4b602f),
        this._renderModeService["setActiveDomChart"](_0xc553b5),
        this._activeSession$["next"](_0xc553b5),
        true)
      : false;
  }
  close() {
    var _0x30bf3e, _0x4e94c9;
    this._activeSession &&
      ((this._activeSession = null),
      (_0x30bf3e = this._activeSlideSubscription) == null ||
        _0x30bf3e.unsubscribe(),
      (this._activeSlideSubscription = null),
      (_0x4e94c9 = this._transformStartSubscription) == null ||
        _0x4e94c9.unsubscribe(),
      (this._transformStartSubscription = null),
      this._modelService["setActiveChartRuntime"](null),
      this._renderModeService["setActiveDomChart"](null),
      this._activeSession$["next"](null));
  }
  isActive(_0x51a5b2) {
    var _0x4a6c6a;
    return (
      ((_0x4a6c6a = this._activeSession) == null
        ? undefined
        : _0x4a6c6a.chartId) === _0x51a5b2
    );
  }
  dispose() {
    var _0x5f3edd, _0x2d2769;
    (this.close(),
      (_0x5f3edd = this._activeSlideSubscription) == null ||
        _0x5f3edd.unsubscribe(),
      (this._activeSlideSubscription = null),
      (_0x2d2769 = this._transformStartSubscription) == null ||
        _0x2d2769.unsubscribe(),
      (this._transformStartSubscription = null),
      this._subscriptions["forEach"]((_0x4a789c) => _0x4a789c.dispose()),
      (this._subscriptions["length"] = 0),
      this._activeSession$["complete"](),
      super.dispose());
  }
  _initLifecycleListeners() {
    var _0x10b7e3, _0x44201d, _0xdcd989;
    let _0x48bb67 =
      (_0x10b7e3 = this._slideDrawingService["remove$"]) == null
        ? undefined
        : _0x10b7e3.subscribe((_0x3a30a3) => {
            let _0x565a21 = this._activeSession;
            _0x565a21 &&
              _0x3a30a3.some(
                (_0x187b6a) =>
                  _0x187b6a.unitId === _0x565a21.unitId &&
                  _0x187b6a.subUnitId === _0x565a21.subUnitId &&
                  _0x187b6a.drawingId === _0x565a21.drawingId,
              ) &&
              this.close();
          });
    _0x48bb67 &&
      this._subscriptions["push"]({ dispose: () => _0x48bb67.unsubscribe() });
    let _0x37ed15 =
      (_0x44201d = this._modelService["chartModelRemoved$"]) == null
        ? undefined
        : _0x44201d.subscribe((_0x1c941c) => {
            let _0x35795c = this._activeSession;
            _0x35795c &&
              _0x1c941c.unitId === _0x35795c.unitId &&
              _0x1c941c.chartId === _0x35795c.chartId &&
              this.close();
          });
    _0x37ed15 &&
      this._subscriptions["push"]({ dispose: () => _0x37ed15.unsubscribe() });
    let _0x41df29 =
      (_0xdcd989 = this._univerInstanceService["focused$"]) == null
        ? undefined
        : _0xdcd989.subscribe((_0x50f5c1) => {
            let _0x472a45 = this._activeSession;
            _0x472a45 &&
              _0x50f5c1 &&
              _0x50f5c1 !== _0x472a45.unitId &&
              this.close();
          });
    _0x41df29 &&
      this._subscriptions["push"]({ dispose: () => _0x41df29.unsubscribe() });
  }
  _bindActiveSlideListener(_0xc3490) {
    var _0xd8ce07;
    ((_0xd8ce07 = this._activeSlideSubscription) == null ||
      _0xd8ce07.unsubscribe(),
      (this._activeSlideSubscription = null));
    let _0xa93e63 = this._univerInstanceService["getUnit"](
      _0xc3490.unitId,
      e.UniverInstanceType["UNIVER_SLIDE"],
    );
    this._activeSlideSubscription =
      (_0xa93e63 == null
        ? undefined
        : _0xa93e63.pageManager["activeSlideId$"].subscribe((_0x437d79) => {
            let _0x461fd7 = this._activeSession;
            _0x461fd7 &&
              _0x437d79 &&
              _0x437d79 !== _0x461fd7.subUnitId &&
              this.close();
          })) ?? null;
  }
  _bindTransformStartListener(_0x153480, _0x2747f7 = true) {
    var _0xf18d09, _0x2e3887;
    ((_0xf18d09 = this._transformStartSubscription) == null ||
      _0xf18d09.unsubscribe(),
      (this._transformStartSubscription = null));
    let _0x590b35 =
      (_0x2e3887 = this._renderManagerService["getRenderUnitById"](
        _0x153480.unitId,
      )) == null
        ? undefined
        : _0x2e3887.scene["getTransformer"]();
    if (!_0x590b35) {
      _0x2747f7 &&
        queueMicrotask(() => {
          let _0x4f7171 = this._activeSession;
          (_0x4f7171 == null ? undefined : _0x4f7171.chartId) ===
            _0x153480.chartId &&
            this._bindTransformStartListener(_0x153480, false);
        });
      return;
    }
    let _0x16b61a = (0, u.buildDrawingOKey)(
      _0x153480.unitId,
      _0x153480.subUnitId,
      _0x153480.drawingId,
    );
    this._transformStartSubscription = _0x590b35.changeStart$["subscribe"](
      ({ objects: _0x54c6fd }) => {
        _0x54c6fd != null && _0x54c6fd.has(_0x16b61a) && this.close();
      },
    );
  }
};
V = O(
  [
    D(0, (0, e.Inject)(t.ISlideDrawingService)),
    D(1, (0, e.Inject)(c.SlideChartModelService)),
    D(2, (0, e.Inject)(B)),
    D(3, e.IUniverInstanceService),
    D(4, d.IRenderManagerService),
  ],
  V,
);
const H = "min(1200px, calc(100vw - 32px))";
let U = class extends e.Disposable {
  constructor(
    _0x522950,
    _0x21abd2,
    _0x547f4f,
    _0x351c26,
    _0x4a0da7,
    _0x2e2469,
    _0x3571c2,
    _0x4885b8,
  ) {
    (super(),
      (this._sidebarService = _0x522950),
      (this._dialogService = _0x21abd2),
      (this._slideDrawingService = _0x547f4f),
      (this._dataEditService = _0x351c26),
      (this._editSessionService = _0x4a0da7),
      (this._chartUIService = _0x2e2469),
      (this._localeService = _0x3571c2),
      (this._commandService = _0x4885b8),
      E(this, "_sidebarDisposable", null),
      this._registerPanelOperations(),
      this._listenFocusChanges());
  }
  openChartPanel(_0x561e0c, _0xa4533c, _0x4e8c89, _0x1a3c34) {
    let _0x2ddbfa = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x561e0c,
      subUnitId: _0xa4533c,
      drawingId: _0x4e8c89,
    });
    if (
      !_0x2ddbfa ||
      _0x2ddbfa.element["type"] !== t.PageElementTypeEnum["Chart"]
    )
      return false;
    let _0x3a9bd0 = _0x2ddbfa.element["chartId"];
    return this._editSessionService["open"]({
      unitId: _0x561e0c,
      subUnitId: _0xa4533c,
      drawingId: _0x4e8c89,
      chartId: _0x3a9bd0,
    })
      ? (this._chartUIService["setActiveEditChart"](_0x3a9bd0),
        _0x1a3c34
          ? this._chartUIService["setPanelRoute"](_0x3a9bd0, _0x1a3c34)
          : this._chartUIService["clearPanelRoute"](),
        this._openPanel({
          unitId: _0x561e0c,
          subUnitId: _0xa4533c,
          drawingId: _0x4e8c89,
          chartId: _0x3a9bd0,
        }),
        true)
      : false;
  }
  closeChartPanel() {
    (this._editSessionService["close"](),
      this._chartUIService["setActiveEditChart"](null),
      this._chartUIService["setSelectedElement"](null),
      this._chartUIService["clearPanelRoute"](),
      (this._sidebarDisposable = null),
      this._sidebarService["close"](j));
  }
  openDataEditorDialog(_0x3bcb0f, _0x5ae719) {
    let _0x4634c5 = this._dataEditService["getEditorState"](
      _0x3bcb0f,
      _0x5ae719,
    );
    if (!_0x4634c5) return false;
    let _0x13c6ad = null,
      _0x137dad = () => {
        (_0x13c6ad == null || _0x13c6ad.dispose(), (_0x13c6ad = null));
      };
    return (
      (_0x13c6ad = this._dialogService["open"]({
        id: b,
        title: {
          title: this._localeService["t"]("slides-chart-ui.common.editData"),
        },
        width: H,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: y,
            props: {
              values: _0x4634c5.values,
              dataSource: _0x4634c5.dataSource,
              sharingCount: _0x4634c5.sharingCount,
              onCancel: _0x137dad,
              onSubmit: (_0x57a703, _0x432c6e) => {
                this._dataEditService["updateData"](
                  _0x3bcb0f,
                  _0x5ae719,
                  _0x57a703,
                  _0x432c6e,
                ) && _0x137dad();
              },
              onDataSourceSubmit: (_0x21c944) => {
                this._dataEditService["changeDataSource"](
                  _0x3bcb0f,
                  _0x5ae719,
                  _0x21c944,
                ) && _0x137dad();
              },
            },
          },
        },
        onClose: _0x137dad,
      })),
      true
    );
  }
  openChartInsertDialogForPlaceholder(_0x2847f2) {
    if (_0x2847f2.iconKey !== "chart") return false;
    let _0x30b49d = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x2847f2.unitId,
      subUnitId: _0x2847f2.subUnitId,
      drawingId: _0x2847f2.drawingId,
    });
    if (
      !_0x30b49d ||
      _0x30b49d.element["type"] !== t.PageElementTypeEnum["Placeholder"]
    )
      return false;
    let _0x300983 = null,
      _0x4cb470 = () => {
        (_0x300983 == null || _0x300983.dispose(), (_0x300983 = null));
      };
    return (
      (_0x300983 = this._dialogService["open"]({
        id: "slide-chart.dialog.insert-placeholder",
        title: {
          title: this._localeService["t"]("slides-chart-ui.common.editChart"),
        },
        width: H,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: F,
            props: {
              insertOptions: { placeholderDrawing: _0x30b49d },
              onCancel: _0x4cb470,
              onInserted: _0x4cb470,
            },
          },
        },
        onClose: _0x4cb470,
      })),
      true
    );
  }
  _registerPanelOperations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x4260a1) => {
        if (_0x4260a1.id === h.id) {
          let _0x3b02a0 = _0x4260a1.params;
          _0x3b02a0 &&
            this.openChartPanel(
              _0x3b02a0.unitId,
              _0x3b02a0.subUnitId,
              _0x3b02a0.drawingId,
              _0x3b02a0.route,
            );
          return;
        }
        if (_0x4260a1.id === g.id) {
          this.closeChartPanel();
          return;
        }
        if (_0x4260a1.id === _.id) {
          let _0x1d8c43 = _0x4260a1.params;
          _0x1d8c43 &&
            this.openDataEditorDialog(_0x1d8c43.unitId, _0x1d8c43.chartId);
          return;
        }
        if (_0x4260a1.id === u.SlidePlaceholderActionOperation["id"]) {
          let _0x4648b7 = _0x4260a1.params;
          _0x4648b7 && this.openChartInsertDialogForPlaceholder(_0x4648b7);
        }
      }),
    );
  }
  _listenFocusChanges() {
    this.disposeWithMe(
      this._slideDrawingService["focus$"].subscribe((_0x57cc04) => {
        _0x57cc04.length === 0 && this.closeChartPanel();
      }),
    );
  }
  _openPanel(_0x3e400b) {
    var _0x498c20;
    ((_0x498c20 = this._sidebarDisposable) == null || _0x498c20.dispose(),
      (this._sidebarDisposable = this._sidebarService["open"]({
        id: j,
        header: {
          title: this._localeService["t"]("slides-chart-ui.common.editChart"),
        },
        width: 388,
        children: { label: j, ..._0x3e400b },
        onClose: () => {
          (this._editSessionService["close"](),
            this._chartUIService["setActiveEditChart"](null),
            this._chartUIService["setSelectedElement"](null),
            this._chartUIService["clearPanelRoute"](),
            (this._sidebarDisposable = null));
        },
      })));
  }
};
U = O(
  [
    D(0, (0, e.Inject)(a.ISidebarService)),
    D(1, (0, e.Inject)(a.IDialogService)),
    D(2, (0, e.Inject)(t.ISlideDrawingService)),
    D(3, (0, e.Inject)(z)),
    D(4, (0, e.Inject)(V)),
    D(5, k),
    D(6, (0, e.Inject)(e.LocaleService)),
    D(7, e.ICommandService),
  ],
  U,
);
var me = "@univerjs-pro/slides-chart-ui",
  he = "1.0.0-insiders.20260907-70fc579";
let W = class extends e.Disposable {
  constructor(_0x439f30) {
    (super(), (this._componentManager = _0x439f30), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](F, ue)),
      this.disposeWithMe(this._componentManager["register"](y, S)),
      this.disposeWithMe(this._componentManager["register"](j, N)));
  }
};
W = O([D(0, (0, e.Inject)(a.ComponentManager))], W);
let G = class extends e.RxDisposable {
  constructor(_0x174dac, _0x41df45, _0x2833e1, _0x5b41ab) {
    (super(),
      (this._renderContext = _0x174dac),
      (this._hitTestService = _0x41df45),
      (this._modelService = _0x2833e1),
      (this._commandService = _0x5b41ab),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      (0, e.toDisposable)(
        this._hitTestService["onDoubleClick$"]
          .pipe((0, l.takeUntil)(this.dispose$))
          .subscribe((_0x1fd33d) => {
            _0x1fd33d.drawing["unitId"] === this._renderContext["unitId"] &&
              _0x1fd33d.drawing["element"].type ===
                t.PageElementTypeEnum["Chart"] &&
              (this._modelService["activeRuntimeModel"] ||
                this._commandService["executeCommand"](h.id, {
                  unitId: _0x1fd33d.drawing["unitId"],
                  subUnitId: _0x1fd33d.drawing["subUnitId"],
                  drawingId: _0x1fd33d.drawing["drawingId"],
                }));
          }),
      ),
    );
  }
};
G = O(
  [
    D(1, (0, e.Inject)(u.SlideHitTestService)),
    D(2, (0, e.Inject)(c.SlideChartModelService)),
    D(3, e.ICommandService),
  ],
  G,
);
function ge(_0x490e9c) {
  return !!(
    _0x490e9c != null &&
    _0x490e9c.color &&
    _0x490e9c.width &&
    _0x490e9c.width > 0 &&
    _0x490e9c.lineStrokeType !== p.ShapeLineTypeEnum["NoLine"]
  );
}
function _e(_0x3bb5b8, _0x59a9b9) {
  if ((_0x3bb5b8 == null ? undefined : _0x3bb5b8.borderWidth) !== 0)
    return {
      ...c.DEFAULT_SLIDE_CHART_STROKE,
      ..._0x59a9b9,
      ...((_0x3bb5b8 == null ? undefined : _0x3bb5b8.borderColor) == null
        ? {}
        : { color: _0x3bb5b8.borderColor }),
      ...(typeof (_0x3bb5b8 == null ? undefined : _0x3bb5b8.borderWidth) ==
        "number" &&
      Number.isFinite(_0x3bb5b8.borderWidth) &&
      _0x3bb5b8.borderWidth > 0
        ? { width: _0x3bb5b8.borderWidth }
        : {}),
    };
}
var ve = class extends e.Disposable {
  constructor(
    _0x4a1715,
    _0x2288b6,
    _0x21397b,
    _0x23119b,
    _0x2b8b9f,
    _0x541966,
  ) {
    (super(),
      (this.chartId = _0x4a1715),
      (this._host = _0x2288b6),
      (this._applyHostStyle = _0x21397b),
      (this._getRenderRect = _0x23119b),
      (this._markReady = _0x2b8b9f),
      (this._markNotReady = _0x541966),
      E(this, "mode", r.ChartRenderMode["Dom"]),
      E(this, "_mountNode", null),
      E(this, "_ready", false),
      (this._host["style"].overflow = "hidden"),
      (this._host["style"].boxSizing = "border-box"));
  }
  getRect() {
    var _0x1901f6;
    let _0x5f3d00 =
      (_0x1901f6 = this._getRenderRect) == null
        ? undefined
        : _0x1901f6.call(this);
    if (_0x5f3d00)
      return {
        width: Math.max(n.MIN_CHART_HOST_DIMENSION, _0x5f3d00.width),
        height: Math.max(n.MIN_CHART_HOST_DIMENSION, _0x5f3d00.height),
      };
    let _0x1567c0 = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(n.MIN_CHART_HOST_DIMENSION, _0x1567c0.width),
      height: Math.max(n.MIN_CHART_HOST_DIMENSION, _0x1567c0.height),
    };
  }
  setStyle(_0x2afe51) {
    this._applyHostStyle(this._host, _0x2afe51);
  }
  getHostElement() {
    return this._host;
  }
  async ensureMount() {
    return (
      this._mountNode ||
        ((this._mountNode = document.createElement("div")),
        (this._mountNode["className"] = "slide-chart-dom-mount"),
        (this._mountNode["style"].position = "absolute"),
        (this._mountNode["style"].left = "0"),
        (this._mountNode["style"].top = "0"),
        (this._mountNode["style"].border = "0"),
        (this._mountNode["style"].boxSizing = "content-box"),
        (this._mountNode["style"].overflow = "hidden"),
        this._host["append"](this._mountNode)),
      this.syncLayout(),
      this._mountNode
    );
  }
  checkMounted() {
    var _0x12abe7;
    return !!(
      (_0x12abe7 = this._mountNode) != null &&
      _0x12abe7.isConnected &&
      this._host["contains"](this._mountNode)
    );
  }
  syncLayout() {
    let _0x5502b3 = this.getRect();
    if (!_0x5502b3) return;
    let _0x3b1c14 = _0x5502b3.width + "px",
      _0x38c885 = _0x5502b3.height + "px";
    ((this._host["style"].width = _0x3b1c14),
      (this._host["style"].height = _0x38c885),
      this._mountNode &&
        ((this._mountNode["style"].width = _0x3b1c14),
        (this._mountNode["style"].height = _0x38c885)));
  }
  markReady() {
    var _0x3c7aa9;
    this._ready ||
      ((this._ready = true),
      (_0x3c7aa9 = this._markReady) == null || _0x3c7aa9.call(this));
  }
  markNotReady() {
    var _0x5df948;
    this._ready &&
      ((this._ready = false),
      (_0x5df948 = this._markNotReady) == null || _0x5df948.call(this));
  }
  dispose() {
    var _0x5c58c9;
    (this.markNotReady(),
      (_0x5c58c9 = this._mountNode) == null || _0x5c58c9.remove(),
      (this._mountNode = null),
      this._host["remove"](),
      super.dispose());
  }
};
let K = class extends e.Disposable {
  constructor(_0x9052f6, _0x47d039, _0x38f494) {
    (super(),
      (this._localeService = _0x9052f6),
      (this._chartThemeService = _0x47d039),
      (this._renderModelManager = _0x38f494),
      E(this, "_chartInstanceMap", new Map()),
      E(this, "_chartEventHandlers", new Map()),
      E(this, "_chartEventSubscriptions", new Map()),
      E(this, "_chartElementEditMode", new Map()),
      E(this, "_lastImageDataUrlMap", new Map()),
      E(this, "_lastRenderInputMap", new Map()));
  }
  createChartInstance(_0x3ffb05) {
    return _0x3ffb05
      ? this._renderModelManager["createChartInstance"](
          _0x3ffb05,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  async render(_0x309a01, _0x13aa1b) {
    let { chartConfig: _0x2f4d25, chartStyle: _0x5a019b } =
        this.createRenderInput(_0x309a01),
      _0x11f388 = _0x13aa1b.getRect(),
      _0x33ad56 = this._getOrCreateChartRenderInstance(
        _0x309a01.chartId,
        _0x13aa1b.mode,
      );
    (_0x33ad56.bind(_0x13aa1b),
      await _0x33ad56.render({
        chartId: _0x309a01.chartId,
        config: _0x2f4d25,
        style: _0x5a019b,
      }),
      _0x11f388 &&
        this._lastRenderInputMap["set"](_0x309a01.chartId, {
          chartConfig: _0x2f4d25,
          chartStyle: _0x5a019b,
          rect: _0x11f388,
        }));
    let _0x10e043 =
      _0x13aa1b.mode === r.ChartRenderMode["Image"] && "getDataUrl" in _0x13aa1b
        ? _0x13aa1b.getDataUrl()
        : undefined;
    _0x10e043 && this._lastImageDataUrlMap["set"](_0x309a01.chartId, _0x10e043);
  }
  async renderDataUpdate(_0x9a0998, _0x1f1f98, _0x48c7b8) {
    let _0x20a108 = this._lastRenderInputMap["get"](_0x9a0998.chartId),
      { chartConfig: _0x116ffe, chartStyle: _0x1f9758 } =
        this.createRenderInput(_0x9a0998),
      _0x4960ab = _0x1f1f98.getRect(),
      _0x456596 = this._getOrCreateChartRenderInstance(
        _0x9a0998.chartId,
        _0x1f1f98.mode,
      );
    _0x456596.bind(_0x1f1f98);
    let _0x39d04a = {
      chartId: _0x9a0998.chartId,
      config: _0x116ffe,
      style: _0x1f9758,
    };
    (_0x20a108 && _0x456596.renderTransition
      ? await _0x456596.renderTransition(
          {
            chartId: _0x9a0998.chartId,
            config: _0x20a108.chartConfig,
            style: _0x20a108.chartStyle,
          },
          _0x39d04a,
          { duration: _0x48c7b8 },
        )
      : await _0x456596.render(_0x39d04a),
      _0x4960ab &&
        this._lastRenderInputMap["set"](_0x9a0998.chartId, {
          chartConfig: _0x116ffe,
          chartStyle: _0x1f9758,
          rect: _0x4960ab,
        }));
  }
  setElementEditMode(_0x2d955d, _0x2b4c18) {
    var _0x499883;
    (_0x2b4c18
      ? this._chartElementEditMode["set"](_0x2d955d, true)
      : this._chartElementEditMode["delete"](_0x2d955d),
      (_0x499883 = this._chartInstanceMap["get"](_0x2d955d)) == null ||
        _0x499883.setElementEditMode(_0x2b4c18));
  }
  on(_0x4f44b4, _0x17ebfe, _0x2c653e) {
    let _0x14a214 = this._chartEventHandlers["get"](_0x4f44b4);
    _0x14a214 ||
      ((_0x14a214 = new Map()),
      this._chartEventHandlers["set"](_0x4f44b4, _0x14a214));
    let _0x20f909 = _0x14a214.get(_0x17ebfe);
    (_0x20f909 ||
      ((_0x20f909 = new Set()), _0x14a214.set(_0x17ebfe, _0x20f909)),
      _0x20f909.add(_0x2c653e));
    let _0x447b16 = this._chartInstanceMap["get"](_0x4f44b4);
    return (
      _0x447b16 &&
        this._bindChartEventHandler(_0x4f44b4, _0x447b16, _0x17ebfe, _0x2c653e),
      {
        dispose: () => {
          var _0x364b7c;
          ((_0x364b7c = this._chartEventHandlers["get"](_0x4f44b4)) == null ||
            (_0x364b7c = _0x364b7c.get(_0x17ebfe)) == null ||
            _0x364b7c.delete(_0x2c653e),
            this._disposeChartEventSubscription(
              _0x4f44b4,
              _0x17ebfe,
              _0x2c653e,
            ));
        },
      }
    );
  }
  disposeChartInstance(_0x578f8e) {
    (this._lastRenderInputMap["delete"](_0x578f8e),
      this._disposeChartRenderInstance(_0x578f8e));
  }
  async exportImage(_0x4ad693, _0x5e37b5) {
    let _0xacfe2b = this._lastRenderInputMap["get"](_0x4ad693);
    if (_0xacfe2b)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x4ad693,
            config: _0xacfe2b.chartConfig,
            style: _0xacfe2b.chartStyle,
            width: _0xacfe2b.rect["width"],
            height: _0xacfe2b.rect["height"],
          },
          _0x5e37b5,
        )
      ).dataUrl;
    if (
      (_0x5e37b5 == null ? undefined : _0x5e37b5.format) !==
      r.ChartImageExportFormat["SVG"]
    )
      return this._lastImageDataUrlMap["get"](_0x4ad693);
  }
  createRenderInput(_0x1b21d1) {
    let _0x97a25a = _0x1b21d1.model["config"];
    if (!_0x97a25a)
      throw Error("Chart " + _0x1b21d1.chartId + " has no render config.");
    let _0x1a8b72 = this._localeService["getDirection"]();
    return {
      chartConfig: _0x97a25a,
      chartStyle: (0, r.resolveChartRuntimeStyle)(
        {
          ..._0x1b21d1.model["style"],
          runtime: _0x1b21d1.model["getRuntimeContext"](_0x1a8b72),
          direction: _0x1a8b72,
        },
        _0x97a25a.type,
      ),
    };
  }
  createRenderSpec(_0x5e1864, _0x1d946d, _0x5eb673) {
    let { chartConfig: _0x4c66c5, chartStyle: _0x35f196 } =
        this.createRenderInput(_0x5e1864),
      _0x2b4a48 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x2b4a48.stylizeSpec(
        _0x2b4a48.toSpec(_0x4c66c5, _0x35f196),
        {
          chartConfig: _0x4c66c5,
          chartStyle: _0x35f196,
          chartInstance: _0x5eb673,
        },
        _0x1d946d,
      ),
      chartConfig: _0x4c66c5,
      chartStyle: _0x35f196,
      hostStyle: this.getHostStyle(_0x35f196),
    };
  }
  getHostStyle(_0x1d3c65) {
    return (0, r.resolveDefaultChartHostFrameStyle)({
      style: _0x1d3c65,
      getRenderColor: (_0x19aaeb) =>
        this._chartThemeService["getRenderColor"](_0x19aaeb),
    });
  }
  applyHostStyle(_0x56c40b, _0xa4b640) {
    var _0x542067;
    ((_0x56c40b.style["border"] =
      (_0x542067 = _0xa4b640.border) != null &&
      _0x542067.color &&
      _0xa4b640.border["width"]
        ? _0xa4b640.border["width"] + "px solid " + _0xa4b640.border["color"]
        : ""),
      (_0x56c40b.style["backgroundColor"] = _0xa4b640.fill ?? "transparent"),
      (_0x56c40b.style["borderRadius"] = _0xa4b640.radius
        ? _0xa4b640.radius + "px"
        : ""),
      (_0x56c40b.style["overflow"] = "hidden"),
      (_0x56c40b.style["boxSizing"] = "border-box"));
  }
  _getOrCreateChartRenderInstance(_0x17513f, _0x22dbb9) {
    let _0x4f42a8 = this._chartInstanceMap["get"](_0x17513f);
    if ((_0x4f42a8 == null ? undefined : _0x4f42a8.mode) === _0x22dbb9)
      return _0x4f42a8;
    _0x4f42a8 && this._disposeChartRenderInstance(_0x17513f);
    let _0x8a6535 = this._renderModelManager["createChartInstance"](
      _0x22dbb9,
      this._createChartRenderInstanceContext(),
    );
    return (
      this._chartInstanceMap["set"](_0x17513f, _0x8a6535),
      _0x8a6535.setElementEditMode(
        this._chartElementEditMode["get"](_0x17513f) === true,
      ),
      this._bindChartEventHandlers(_0x17513f, _0x8a6535),
      _0x8a6535
    );
  }
  _disposeChartRenderInstance(_0x1bab10) {
    let _0x4b4dcc = this._chartInstanceMap["get"](_0x1bab10);
    _0x4b4dcc &&
      (this._disposeChartEventSubscriptions(_0x1bab10),
      _0x4b4dcc.dispose(),
      this._chartInstanceMap["delete"](_0x1bab10));
  }
  _bindChartEventHandlers(_0x285b7d, _0x13aa65) {
    let _0xf8a902 = this._chartEventHandlers["get"](_0x285b7d);
    _0xf8a902 &&
      _0xf8a902.forEach((_0x4df2fb, _0x574b7f) => {
        _0x4df2fb.forEach((_0x5a277d) =>
          this._bindChartEventHandler(
            _0x285b7d,
            _0x13aa65,
            _0x574b7f,
            _0x5a277d,
          ),
        );
      });
  }
  _bindChartEventHandler(_0xc78ab7, _0xd7b887, _0x3d537f, _0x54bb31) {
    let _0x5c0ff8 = this._chartEventSubscriptions["get"](_0xc78ab7);
    _0x5c0ff8 ||
      ((_0x5c0ff8 = new Map()),
      this._chartEventSubscriptions["set"](_0xc78ab7, _0x5c0ff8));
    let _0xe0eb24 = _0x5c0ff8.get(_0x3d537f);
    (_0xe0eb24 ||
      ((_0xe0eb24 = new Map()), _0x5c0ff8.set(_0x3d537f, _0xe0eb24)),
      !_0xe0eb24.has(_0x54bb31) &&
        _0xe0eb24.set(_0x54bb31, _0xd7b887.on(_0x3d537f, _0x54bb31)));
  }
  _disposeChartEventSubscription(_0x16cc53, _0x1135d1, _0x364027) {
    var _0x255140, _0x3e3264;
    let _0x44d464 =
      (_0x255140 = this._chartEventSubscriptions["get"](_0x16cc53)) == null
        ? undefined
        : _0x255140.get(_0x1135d1);
    (_0x44d464 == null ||
      (_0x3e3264 = _0x44d464.get(_0x364027)) == null ||
      _0x3e3264.dispose(),
      _0x44d464 == null || _0x44d464.delete(_0x364027));
  }
  _disposeChartEventSubscriptions(_0x5e2c19) {
    let _0x711418 = this._chartEventSubscriptions["get"](_0x5e2c19);
    (_0x711418 == null ||
      _0x711418.forEach((_0x19ff26) => {
        (_0x19ff26.forEach((_0x1b3e11) => _0x1b3e11.dispose()),
          _0x19ff26.clear());
      }),
      this._chartEventSubscriptions["delete"](_0x5e2c19));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x583155 }) => this.getHostStyle(_0x583155),
      resolveRenderBackgroundColor: ({ hostStyle: _0x1af5c7 }) =>
        _0x1af5c7.fill,
      prepareSpec: ({ mode: _0x10311b, spec: _0x5cb4c7 }) =>
        _0x10311b === r.ChartRenderMode["Image"]
          ? { ..._0x5cb4c7, animation: false, tooltip: { show: false } }
          : _0x5cb4c7,
    };
  }
  dispose() {
    (Array.from(this._chartInstanceMap["keys"]()).forEach((_0x21ba05) =>
      this.disposeChartInstance(_0x21ba05),
    ),
      this._chartEventHandlers["clear"](),
      this._chartElementEditMode["clear"](),
      this._lastImageDataUrlMap["clear"](),
      this._lastRenderInputMap["clear"](),
      super.dispose());
  }
};
K = O(
  [
    D(0, (0, e.Inject)(e.LocaleService)),
    D(1, (0, e.Inject)(r.ChartThemeService)),
    D(2, r.IChartRenderModelManagerService),
  ],
  K,
);
const q = r.CHART_DATA_UPDATE_ANIMATION_DURATION;
let J = class extends e.Disposable {
  constructor(_0x13cfb1, _0x402a70, _0x3d5ff6, _0xe74a89, _0x56ef99) {
    (super(),
      (this._renderManagerService = _0x13cfb1),
      (this._localeService = _0x402a70),
      (this._modelService = _0x3d5ff6),
      (this._renderService = _0xe74a89),
      (this._renderModeService = _0x56ef99),
      E(this, "_hostContextMap", new Map()),
      E(this, "_hostContextRegistrationMap", new Map()),
      E(this, "_domHostMap", new Map()),
      E(this, "_hostLayoutSubscriptions", new Map()),
      E(this, "_runtimeRenderSubscriptions", new Map()),
      E(this, "_renderQueueMap", new Map()),
      E(this, "_renderRequestTokenMap", new Map()),
      E(this, "_domReadyChartIds", new Set()),
      E(this, "_lastImageDataUrlMap", new Map()),
      E(this, "_pendingDataUpdateChartIds", new Set()),
      E(this, "_dataUpdateEpochMap", new Map()),
      E(this, "_dataUpdateAnimationChartIds", new Set()),
      E(this, "_dataUpdateAnimationTimers", new Map()),
      E(this, "_removeHost$", new l["Subject"]()),
      E(this, "_imageUpdated$", new l.Subject()),
      E(this, "_domReadyChanged$", new l["Subject"]()),
      E(this, "_layoutChanged$", new l["Subject"]()),
      E(this, "removeHost$", this._removeHost$["asObservable"]()),
      E(this, "imageUpdated$", this._imageUpdated$["asObservable"]()),
      E(this, "domReadyChanged$", this._domReadyChanged$["asObservable"]()),
      E(this, "layoutChanged$", this._layoutChanged$["asObservable"]()),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._renderModeService["modeChanged$"].subscribe(
            ({ chartId: _0xfaa7bd }) => {
              this.renderChart(_0xfaa7bd);
            },
          ),
        ),
      ),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._modelService["chartDataUpdated$"].subscribe((_0x43faf5) => {
            this._runtimeRenderSubscriptions["has"](_0x43faf5) &&
              (this._dataUpdateEpochMap["set"](
                _0x43faf5,
                (this._dataUpdateEpochMap["get"](_0x43faf5) ?? 0) + 1,
              ),
              this._pendingDataUpdateChartIds["add"](_0x43faf5));
          }),
        ),
      ));
  }
  registerHostContext(_0xbc7b65) {
    let _0x58824e = Symbol(_0xbc7b65.chartId),
      _0x4a8787 = this._getHostRegistrationKey(_0xbc7b65),
      _0x2de877 = this._hostContextRegistrationMap["get"](_0xbc7b65.chartId);
    return (
      _0x2de877 ||
        ((_0x2de877 = new Map()),
        this._hostContextRegistrationMap["set"](_0xbc7b65.chartId, _0x2de877)),
      _0x2de877.set(_0x4a8787, { context: _0xbc7b65, token: _0x58824e }),
      this._hostContextMap["set"](
        _0xbc7b65.chartId,
        this._selectHostContext(_0x2de877),
      ),
      this.syncHostLayout(_0xbc7b65.chartId),
      this.renderChart(_0xbc7b65.chartId),
      {
        dispose: () => {
          let _0x81f9c0 = this._hostContextRegistrationMap["get"](
            _0xbc7b65.chartId,
          );
          if (!_0x81f9c0) return;
          let _0x4e71c6 = _0x81f9c0.get(_0x4a8787);
          if ((_0x4e71c6 == null ? undefined : _0x4e71c6.token) === _0x58824e) {
            if (
              _0xbc7b65.sceneType === t.SlideSceneTypeEnum["THUMBNAIL"] &&
              _0xbc7b65.requestRender &&
              !this._lastImageDataUrlMap["has"](_0xbc7b65.chartId)
            ) {
              (_0x81f9c0.set(_0x4a8787, {
                context: { ..._0x4e71c6.context, imageObject: undefined },
                token: _0x58824e,
                detached: true,
              }),
                this._hostContextMap["set"](
                  _0xbc7b65.chartId,
                  this._selectHostContext(_0x81f9c0),
                ));
              return;
            }
            if (
              (_0x81f9c0.delete(_0x4a8787),
              !(_0x81f9c0 != null && _0x81f9c0.size))
            ) {
              (this._hostContextMap["delete"](_0xbc7b65.chartId),
                this._hostContextRegistrationMap["delete"](_0xbc7b65.chartId),
                this.removeHost(_0xbc7b65.chartId));
              return;
            }
            (this._hostContextMap["set"](
              _0xbc7b65.chartId,
              this._selectHostContext(_0x81f9c0),
            ),
              this.syncHostLayout(_0xbc7b65.chartId));
          }
        },
      }
    );
  }
  getHostContext(_0x5077d3) {
    return this._hostContextMap["get"](_0x5077d3);
  }
  ensureHost(_0x22f29c, _0x55b13a) {
    return _0x55b13a === r.ChartRenderMode["Image"]
      ? this._createImageChartHost(_0x22f29c)
      : this._getOrCreateDomChartHost(_0x22f29c);
  }
  getImageDataUrl(_0x1fa313) {
    return this._lastImageDataUrlMap["get"](_0x1fa313);
  }
  commitImageHost(_0x5afbeb, _0x2489e8) {
    if (!(_0x2489e8 instanceof r.DataUrlImageChartHost)) return;
    let _0x1f6180 = _0x2489e8.getDataUrl();
    _0x1f6180 && this._commitImageDataUrl(_0x5afbeb, _0x1f6180);
  }
  async renderChart(_0x5a62e8) {
    this._renderRequestTokenMap["set"](_0x5a62e8, Symbol(_0x5a62e8));
    let _0x1738a8 = this._renderQueueMap["get"](_0x5a62e8);
    if (_0x1738a8) return ((_0x1738a8.requested = true), _0x1738a8.promise);
    let _0x26a84a = { requested: true, promise: Promise.resolve() };
    return (
      (_0x26a84a.promise = this._drainRenderQueue(_0x5a62e8, _0x26a84a).finally(
        () => {
          this._renderQueueMap["get"](_0x5a62e8) === _0x26a84a &&
            this._renderQueueMap["delete"](_0x5a62e8);
        },
      )),
      this._renderQueueMap["set"](_0x5a62e8, _0x26a84a),
      _0x26a84a.promise
    );
  }
  async _drainRenderQueue(_0x355a1a, _0x4a0572) {
    for (; _0x4a0572.requested;) {
      _0x4a0572.requested = false;
      let _0x6a693b = this._renderRequestTokenMap["get"](_0x355a1a);
      if (!_0x6a693b) return;
      await this._renderChartOnce(_0x355a1a, _0x6a693b);
    }
  }
  async _renderChartOnce(_0x5661a6, _0x29b348) {
    let _0x5033e5 = this._hostContextMap["get"](_0x5661a6);
    if (!_0x5033e5) return;
    let _0x1b6861 = this._modelService["ensureChartModel"](
      _0x5033e5.unitId,
      _0x5661a6,
    );
    if (!_0x1b6861) return;
    this._bindRuntimeRenderListener(_0x1b6861);
    let _0x1cf769 = _0x1b6861.model["config"];
    if (
      !_0x1cf769 ||
      _0x1cf769.type !== _0x1b6861.model["chartType"] ||
      this._renderRequestTokenMap["get"](_0x5661a6) !== _0x29b348
    )
      return;
    this._forEachHostContext(_0x5661a6, (_0x591778) => {
      var _0x222df8, _0x49e443;
      (_0x222df8 = _0x591778.imageObject) == null ||
        (_0x49e443 = _0x222df8.setChartStroke) == null ||
        _0x49e443.call(
          _0x222df8,
          _e(_0x1b6861.model["style"], _0x591778.stroke),
        );
    });
    let _0x226f21 = this._pendingDataUpdateChartIds["has"](_0x5661a6),
      _0x149603 = this._dataUpdateEpochMap["get"](_0x5661a6) ?? 0;
    if (this._dataUpdateAnimationChartIds["has"](_0x5661a6) && !_0x226f21)
      return;
    let _0x207fc2 = this._renderModeService["getRenderMode"](_0x5661a6),
      _0x39e2a4 =
        _0x226f21 &&
        _0x207fc2 === r.ChartRenderMode["Image"] &&
        this._canAnimateDataUpdate(_0x5661a6);
    _0x39e2a4 && this._activateDataUpdateAnimation(_0x5661a6);
    let _0x345130 = this._dataUpdateAnimationChartIds["has"](_0x5661a6)
        ? r.ChartRenderMode["Dom"]
        : _0x207fc2,
      _0x2c43b0 = false;
    _0x2c43b0 =
      _0x345130 === r.ChartRenderMode["Image"]
        ? await this._renderImageChart(_0x1b6861, _0x29b348)
        : await this._renderDomChart(_0x1b6861, _0x29b348, {
            animateDataUpdate: _0x226f21,
            interactive: _0x207fc2 === r.ChartRenderMode["Dom"],
          });
    let _0x1e49ff = this._renderRequestTokenMap["get"](_0x5661a6) === _0x29b348,
      _0x283460 =
        (this._dataUpdateEpochMap["get"](_0x5661a6) ?? 0) === _0x149603;
    if (!_0x2c43b0) {
      _0x39e2a4 &&
        _0x1e49ff &&
        _0x283460 &&
        this._deactivateDataUpdateAnimation(_0x5661a6);
      return;
    }
    !_0x1e49ff ||
      !_0x283460 ||
      (this._pendingDataUpdateChartIds["delete"](_0x5661a6),
      _0x226f21 &&
        this._dataUpdateAnimationChartIds["has"](_0x5661a6) &&
        this._scheduleDataUpdateAnimationEnd(_0x5661a6));
  }
  async _renderImageChart(_0x415eb5, _0x40758a) {
    let { chartId: _0xb35507 } = _0x415eb5;
    (this._renderService["setElementEditMode"](_0xb35507, false),
      this._removeDomHost(_0xb35507));
    let _0x10d24e = this.ensureHost(_0xb35507, r.ChartRenderMode["Image"]);
    if (!_0x10d24e) return false;
    try {
      return (
        await this._renderService["render"](_0x415eb5, _0x10d24e),
        this._renderRequestTokenMap["get"](_0xb35507) === _0x40758a &&
          this.commitImageHost(_0xb35507, _0x10d24e),
        true
      );
    } catch {
      return false;
    }
  }
  async _renderDomChart(_0xb7d2d0, _0x24aaa3, _0x389bb4) {
    let { chartId: _0xa6394b } = _0xb7d2d0;
    this._renderService["setElementEditMode"](_0xa6394b, _0x389bb4.interactive);
    let _0x245f2a = this.ensureHost(_0xa6394b, r.ChartRenderMode["Dom"]);
    if (!_0x245f2a) return false;
    try {
      if (
        (_0x389bb4.animateDataUpdate
          ? await this._renderService["renderDataUpdate"](
              _0xb7d2d0,
              _0x245f2a,
              q,
            )
          : await this._renderService["render"](_0xb7d2d0, _0x245f2a),
        this._renderRequestTokenMap["get"](_0xa6394b) !== _0x24aaa3)
      )
        return true;
      _0x245f2a.markReady();
      try {
        let _0x568a26 = await this._renderService["exportImage"](_0xa6394b);
        _0x568a26 &&
          this._renderRequestTokenMap["get"](_0xa6394b) === _0x24aaa3 &&
          this._commitImageDataUrl(_0xa6394b, _0x568a26);
      } catch {}
      return true;
    } catch {
      return (
        this._renderRequestTokenMap["get"](_0xa6394b) === _0x24aaa3 &&
          _0x245f2a.markNotReady(),
        false
      );
    }
  }
  removeHost(_0x169d58) {
    (this._renderRequestTokenMap["delete"](_0x169d58),
      this._deactivateDataUpdateAnimation(_0x169d58),
      this._pendingDataUpdateChartIds["delete"](_0x169d58),
      this._dataUpdateEpochMap["delete"](_0x169d58),
      this._removeDomHost(_0x169d58),
      this._disposeRuntimeRenderListener(_0x169d58),
      this._renderService["disposeChartInstance"](_0x169d58));
  }
  _removeDomHost(_0x3b39a5) {
    let _0x59b4fe = this._domHostMap["get"](_0x3b39a5);
    _0x59b4fe &&
      (_0x59b4fe.dispose(),
      this._domHostMap["delete"](_0x3b39a5),
      this._disposeHostLayoutListeners(_0x3b39a5),
      this._removeHost$["next"](_0x3b39a5));
  }
  syncHostLayout(_0x32c9e2) {
    let _0x57cc7b = this._domHostMap["get"](_0x32c9e2);
    _0x57cc7b &&
      (this._applyDomHostLayout(_0x32c9e2, _0x57cc7b),
      _0x57cc7b.syncLayout(),
      this._layoutChanged$["next"](_0x32c9e2));
  }
  checkHost(_0x2a8eae) {
    var _0x2d0e4a;
    return (
      ((_0x2d0e4a = this._domHostMap["get"](_0x2a8eae)) == null
        ? undefined
        : _0x2d0e4a.checkMounted()) ?? false
    );
  }
  isDomReady(_0x4cc0a4) {
    return this._domReadyChartIds["has"](_0x4cc0a4);
  }
  markHostReady(_0x564ce7) {
    this._domReadyChartIds["has"](_0x564ce7) ||
      (this._domReadyChartIds["add"](_0x564ce7),
      this._domReadyChanged$["next"](_0x564ce7),
      this._requestChartCanvasRender(_0x564ce7));
  }
  markHostNotReady(_0x137e34) {
    this._domReadyChartIds["delete"](_0x137e34) &&
      (this._domReadyChanged$["next"](_0x137e34),
      this._requestChartCanvasRender(_0x137e34));
  }
  getClientRect(_0x41436e, _0x54eeb7) {
    let _0x1b5130 = this._hostContextMap["get"](_0x41436e);
    if (!_0x1b5130) return null;
    let _0x88ac97 = this._getChartRenderObject(_0x1b5130),
      _0x24e170 =
        (_0x88ac97 == null ? undefined : _0x88ac97.left) ??
        _0x1b5130.drawing["element"].transform["left"] ??
        0,
      _0x268dca =
        (_0x88ac97 == null ? undefined : _0x88ac97.top) ??
        _0x1b5130.drawing["element"].transform["top"] ??
        0,
      _0x252505 = _0x54eeb7
        ? {
            left: _0x24e170 + _0x54eeb7.left,
            top: _0x268dca + _0x54eeb7.top,
            right: _0x24e170 + _0x54eeb7.right,
            bottom: _0x268dca + _0x54eeb7.bottom,
          }
        : {
            left: _0x24e170,
            top: _0x268dca,
            right:
              _0x24e170 +
              ((_0x88ac97 == null ? undefined : _0x88ac97.width) ??
                _0x1b5130.width),
            bottom:
              _0x268dca +
              ((_0x88ac97 == null ? undefined : _0x88ac97.height) ??
                _0x1b5130.height),
          };
    return this._transformCanvasBoundToClientBound(_0x1b5130.unitId, _0x252505);
  }
  _createImageChartHost(_0x30d49e) {
    let _0x3b3dae = this._hostContextMap["get"](_0x30d49e);
    return _0x3b3dae
      ? new r["DataUrlImageChartHost"](_0x30d49e, {
          width: _0x3b3dae.width,
          height: _0x3b3dae.height,
        })
      : null;
  }
  _getOrCreateDomChartHost(_0x35dced) {
    let _0x2a214c = this._hostContextMap["get"](_0x35dced);
    if (!_0x2a214c || typeof document > "u") return null;
    let _0x400824 = this._domHostMap["get"](_0x35dced);
    if (_0x400824)
      return (
        this._applyDomHostInteractionState(
          _0x35dced,
          _0x400824.getHostElement(),
        ),
        this._applyDomHostLayout(_0x35dced, _0x400824),
        _0x400824
      );
    let _0x195189 = document.createElement("div");
    ((_0x195189.dataset["uComp"] = "slide-chart-dom-host"),
      (_0x195189.dataset["chartId"] = _0x35dced),
      (_0x195189.style["zIndex"] = String(n.CHART_DOM_HOST_Z_INDEX)),
      (_0x195189.style["overflow"] = "hidden"),
      (_0x195189.style["boxSizing"] = "border-box"),
      (_0x195189.style["transformOrigin"] = "center\x20center"));
    let _0x941750 = this._getSlideDomWorldLayer(_0x2a214c.unitId);
    ((_0x195189.style["position"] = _0x941750 ? "absolute" : "fixed"),
      (_0x941750 ?? document.body).append(_0x195189));
    let _0xeb8a12 = new ve(
      _0x35dced,
      _0x195189,
      (_0x461046, _0x103fb0) => {
        var _0xac351;
        let _0x573714 = this._hostContextMap["get"](_0x35dced),
          _0x12fccb = _0x573714
            ? (_0xac351 = this._modelService["getChartModel"](
                _0x573714.unitId,
                _0x35dced,
              )) == null
              ? undefined
              : _0xac351.model["style"]
            : undefined,
          _0x3904c4 = _0x573714 ? _e(_0x12fccb, _0x573714.stroke) : undefined;
        ((_0x461046.style["border"] = ge(_0x3904c4)
          ? _0x3904c4.width + "px\x20solid\x20" + _0x3904c4.color
          : ""),
          (_0x461046.style["backgroundColor"] = _0x103fb0.fill ?? ""),
          (_0x461046.style["borderRadius"] =
            n.CHART_HOST_BORDER_RADIUS + "px"));
      },
      () => {
        let _0x121bd9 = this._hostContextMap["get"](_0x35dced);
        return _0x121bd9
          ? { width: _0x121bd9.width, height: _0x121bd9.height }
          : null;
      },
      () => this.markHostReady(_0x35dced),
      () => this.markHostNotReady(_0x35dced),
    );
    return (
      this._domHostMap["set"](_0x35dced, _0xeb8a12),
      this._applyDomHostInteractionState(_0x35dced, _0x195189),
      this._bindHostLayoutListeners(_0x35dced),
      this._applyDomHostLayout(_0x35dced, _0xeb8a12),
      _0xeb8a12
    );
  }
  _bindHostLayoutListeners(_0x46bf5c) {
    this._disposeHostLayoutListeners(_0x46bf5c);
    let _0x1915d8 = this._hostContextMap["get"](_0x46bf5c),
      _0x1b9173 = _0x1915d8
        ? this._renderManagerService["getRenderUnitById"](_0x1915d8.unitId)
        : null;
    if (!_0x1915d8 || !_0x1b9173) return;
    let _0xacc9a1 = [],
      _0x483da6 = () => this.syncHostLayout(_0x46bf5c),
      _0x8319c3 = _0x1b9173.scene["getViewport"](u.SLIDE_MAIN_VIEWPORT_KEY);
    (_0x8319c3 &&
      _0xacc9a1.push(
        (0, e.toDisposable)(
          _0x8319c3.onScrollAfter$["subscribeEvent"](_0x483da6),
        ),
      ),
      _0xacc9a1.push(
        (0, e.toDisposable)(
          _0x1b9173.engine["onTransformChange$"].subscribeEvent(_0x483da6),
        ),
      ),
      _0xacc9a1.push(
        (0, e.toDisposable)(
          _0x1b9173.scene["onTransformChange$"].subscribeEvent(_0x483da6),
        ),
      ));
    let _0x5782eb = this._getChartRenderObject(_0x1915d8);
    (_0x5782eb != null &&
      _0x5782eb.onTransformChange$ &&
      _0xacc9a1.push(
        (0, e.toDisposable)(
          _0x5782eb.onTransformChange$["subscribeEvent"](_0x483da6),
        ),
      ),
      this._hostLayoutSubscriptions["set"](_0x46bf5c, _0xacc9a1));
  }
  _disposeHostLayoutListeners(_0x193aab) {
    var _0xc5610e;
    ((_0xc5610e = this._hostLayoutSubscriptions["get"](_0x193aab)) == null ||
      _0xc5610e.forEach((_0x371991) => _0x371991.dispose()),
      this._hostLayoutSubscriptions["delete"](_0x193aab));
  }
  _bindRuntimeRenderListener(_0x5bcf1d) {
    if (this._runtimeRenderSubscriptions["has"](_0x5bcf1d.chartId)) return;
    let _0x3c2e57 = (0, l.combineLatest)([
      _0x5bcf1d.model["config$"],
      _0x5bcf1d.model["style$"],
      this._localeService["direction$"],
    ])
      .pipe((0, l.skip)(1), (0, l.auditTime)(0))
      .subscribe(() => {
        queueMicrotask(() => {
          this.renderChart(_0x5bcf1d.chartId);
        });
      });
    this._runtimeRenderSubscriptions["set"](_0x5bcf1d.chartId, {
      dispose: () => {
        _0x3c2e57.unsubscribe();
      },
    });
  }
  _disposeRuntimeRenderListener(_0x5dce17) {
    var _0x559288;
    ((_0x559288 = this._runtimeRenderSubscriptions["get"](_0x5dce17)) == null ||
      _0x559288.dispose(),
      this._runtimeRenderSubscriptions["delete"](_0x5dce17));
  }
  _canAnimateDataUpdate(_0x53c4c) {
    var _0x595fc0, _0x17400f, _0x3e745a, _0x5bed45;
    let _0xa5a04f = this._hostContextMap["get"](_0x53c4c);
    if (
      !_0xa5a04f ||
      (_0xa5a04f.sceneType != null &&
        _0xa5a04f.sceneType !== t.SlideSceneTypeEnum["EDIT"]) ||
      typeof document > "u" ||
      typeof window > "u" ||
      document.visibilityState === "hidden" ||
      ((_0x595fc0 = (_0x17400f = window).matchMedia) != null &&
        (_0x595fc0 = _0x595fc0.call(
          _0x17400f,
          "(prefers-reduced-motion: reduce)",
        )) != null &&
        _0x595fc0.matches) ||
      ((_0x3e745a = (_0x5bed45 = window).matchMedia) != null &&
        (_0x3e745a = _0x3e745a.call(_0x5bed45, "print")) != null &&
        _0x3e745a.matches)
    )
      return false;
    let _0x2f366b = this.getClientRect(_0x53c4c);
    return (
      _0x2f366b != null &&
      _0x2f366b.right > 0 &&
      _0x2f366b.bottom > 0 &&
      _0x2f366b.left < window.innerWidth &&
      _0x2f366b.top < window.innerHeight
    );
  }
  _activateDataUpdateAnimation(_0x250b4e) {
    var _0x37ce28;
    let _0x355d6b = this._dataUpdateAnimationTimers["get"](_0x250b4e);
    (_0x355d6b &&
      (clearTimeout(_0x355d6b),
      this._dataUpdateAnimationTimers["delete"](_0x250b4e)),
      this._dataUpdateAnimationChartIds["add"](_0x250b4e));
    let _0x15b956 =
      (_0x37ce28 = this._domHostMap["get"](_0x250b4e)) == null
        ? undefined
        : _0x37ce28.getHostElement();
    _0x15b956 && this._applyDomHostInteractionState(_0x250b4e, _0x15b956);
  }
  _scheduleDataUpdateAnimationEnd(_0x4c15bf) {
    let _0x2be4b1 = this._dataUpdateAnimationTimers["get"](_0x4c15bf);
    _0x2be4b1 && clearTimeout(_0x2be4b1);
    let _0x21a947 = setTimeout(() => {
      (this._dataUpdateAnimationTimers["delete"](_0x4c15bf),
        this._dataUpdateAnimationChartIds["delete"](_0x4c15bf) &&
          this.renderChart(_0x4c15bf));
    }, q);
    this._dataUpdateAnimationTimers["set"](_0x4c15bf, _0x21a947);
  }
  _deactivateDataUpdateAnimation(_0x4fc3ba) {
    let _0x242d90 = this._dataUpdateAnimationTimers["get"](_0x4fc3ba);
    (_0x242d90 &&
      (clearTimeout(_0x242d90),
      this._dataUpdateAnimationTimers["delete"](_0x4fc3ba)),
      this._dataUpdateAnimationChartIds["delete"](_0x4fc3ba));
  }
  _applyDomHostInteractionState(_0x2080a1, _0x16de0c) {
    if (this._dataUpdateAnimationChartIds["has"](_0x2080a1)) {
      ((_0x16de0c.dataset["slideChartDataAnimation"] = "true"),
        (_0x16de0c.dataset["slideChartDataAnimationDuration"] = String(q)),
        (_0x16de0c.style["pointerEvents"] = "none"));
      return;
    }
    (delete _0x16de0c.dataset["slideChartDataAnimation"],
      delete _0x16de0c.dataset["slideChartDataAnimationDuration"],
      (_0x16de0c.style["pointerEvents"] = "auto"));
  }
  _applyDomHostLayout(_0x48c076, _0x240911) {
    let _0x60cb01 = this._hostContextMap["get"](_0x48c076);
    if (!_0x60cb01) return;
    let _0xdbdf20 = this._getChartRenderObject(_0x60cb01),
      _0x5c8e6d =
        (_0xdbdf20 == null ? undefined : _0xdbdf20.left) ??
        _0x60cb01.drawing["element"].transform["left"] ??
        0,
      _0x5f13d2 =
        (_0xdbdf20 == null ? undefined : _0xdbdf20.top) ??
        _0x60cb01.drawing["element"].transform["top"] ??
        0,
      _0x2372c7 = Math.max(
        n.MIN_CHART_HOST_DIMENSION,
        (_0xdbdf20 == null ? undefined : _0xdbdf20.width) ?? _0x60cb01.width,
      ),
      _0x160e93 = Math.max(
        n.MIN_CHART_HOST_DIMENSION,
        (_0xdbdf20 == null ? undefined : _0xdbdf20.height) ?? _0x60cb01.height,
      ),
      _0x49cc97 =
        (_0xdbdf20 == null ? undefined : _0xdbdf20.angle) ??
        _0x60cb01.drawing["element"].transform["rotation"] ??
        0,
      _0x419c05 = this._getSlideDomWorldLayer(_0x60cb01.unitId),
      _0x3bfa87 = _0x240911.getHostElement();
    if (_0x419c05) {
      (_0x3bfa87.parentElement !== _0x419c05 && _0x419c05.append(_0x3bfa87),
        (_0x3bfa87.style["position"] = "absolute"),
        (_0x3bfa87.style["left"] = _0x5c8e6d + "px"),
        (_0x3bfa87.style["top"] = _0x5f13d2 + "px"),
        (_0x3bfa87.style["width"] = _0x2372c7 + "px"),
        (_0x3bfa87.style["height"] = _0x160e93 + "px"),
        (_0x3bfa87.style["transform"] = "rotate(" + _0x49cc97 + "deg)"));
      return;
    }
    let _0x7286c5 = this._getCanvasClientScale(_0x60cb01.unitId),
      _0x45fc3e = this._transformCanvasBoundToClientBound(_0x60cb01.unitId, {
        left: _0x5c8e6d,
        top: _0x5f13d2,
        right: _0x5c8e6d + _0x2372c7,
        bottom: _0x5f13d2 + _0x160e93,
      });
    !_0x7286c5 ||
      !_0x45fc3e ||
      ((_0x3bfa87.style["position"] = "fixed"),
      (_0x3bfa87.style["left"] =
        _0x45fc3e.left + (_0x2372c7 * (_0x7286c5.scaleX - 1)) / 2 + "px"),
      (_0x3bfa87.style["top"] =
        _0x45fc3e.top + (_0x160e93 * (_0x7286c5.scaleY - 1)) / 2 + "px"),
      (_0x3bfa87.style["width"] = _0x2372c7 + "px"),
      (_0x3bfa87.style["height"] = _0x160e93 + "px"),
      (_0x3bfa87.style["transform"] =
        "scale(" +
        _0x7286c5.scaleX +
        ",\x20" +
        _0x7286c5.scaleY +
        ") rotate(" +
        _0x49cc97 +
        "deg)"));
  }
  _getSlideDomWorldLayer(_0x4a5997) {
    return typeof document > "u"
      ? null
      : (Array.from(
          document.querySelectorAll("[data-slide-dom-world-layer-unit-id]"),
        ).find(
          (_0x2766c9) =>
            _0x2766c9.dataset["slideDomWorldLayerUnitId"] === _0x4a5997,
        ) ?? null);
  }
  _getCanvasClientScale(_0x1dbcfb) {
    let _0x56c203 = this._renderManagerService["getRenderUnitById"](_0x1dbcfb),
      _0x3e5f14 =
        _0x56c203 == null ? undefined : _0x56c203.engine["getCanvasElement"]();
    if (!_0x56c203 || !_0x3e5f14) return null;
    let { scaleX: _0x5c7bf7, scaleY: _0x5afa01 } =
        _0x56c203.scene["getAncestorScale"](),
      _0x2e01d6 = _0x3e5f14.getBoundingClientRect(),
      _0x280229 = (0, d.pxToNum)(_0x3e5f14.style["width"]),
      _0x3f8e40 = _0x280229 > 0 ? _0x2e01d6.width / _0x280229 : 1;
    return { scaleX: _0x5c7bf7 * _0x3f8e40, scaleY: _0x5afa01 * _0x3f8e40 };
  }
  _transformCanvasBoundToClientBound(_0x2277b5, _0x4e775c) {
    let _0x329dd4 = this._renderManagerService["getRenderUnitById"](_0x2277b5),
      _0x13b885 =
        _0x329dd4 == null ? undefined : _0x329dd4.engine["getCanvasElement"](),
      _0x4cb9a3 = this._getCanvasClientScale(_0x2277b5);
    if (!_0x329dd4 || !_0x13b885 || !_0x4cb9a3) return null;
    let _0x5bc583 = _0x329dd4.scene["getViewport"](u.SLIDE_MAIN_VIEWPORT_KEY),
      _0x168cfa =
        (_0x5bc583 == null ? undefined : _0x5bc583.viewportScrollX) ?? 0,
      _0x1f9874 =
        (_0x5bc583 == null ? undefined : _0x5bc583.viewportScrollY) ?? 0,
      _0x297a13 = _0x13b885.getBoundingClientRect();
    return {
      left: (_0x4e775c.left - _0x168cfa) * _0x4cb9a3.scaleX + _0x297a13.left,
      right: (_0x4e775c.right - _0x168cfa) * _0x4cb9a3.scaleX + _0x297a13.left,
      top: (_0x4e775c.top - _0x1f9874) * _0x4cb9a3.scaleY + _0x297a13.top,
      bottom: (_0x4e775c.bottom - _0x1f9874) * _0x4cb9a3.scaleY + _0x297a13.top,
    };
  }
  _getChartRenderObject(_0x45e54d) {
    var _0x5d8728, _0x5ea150;
    let _0x33237f =
        (_0x5d8728 = this._renderManagerService["getRenderUnitById"](
          _0x45e54d.unitId,
        )) == null
          ? undefined
          : _0x5d8728.scene,
      _0x5096f0 = (0, u.buildDrawingOKey)(
        _0x45e54d.unitId,
        _0x45e54d.subUnitId,
        _0x45e54d.drawingId,
      );
    return (
      (_0x33237f == null ||
      (_0x5ea150 = _0x33237f.getObjectIncludeInGroup) == null
        ? undefined
        : _0x5ea150.call(_0x33237f, _0x5096f0)) ??
      (_0x33237f == null ? undefined : _0x33237f.getObject(_0x5096f0)) ??
      null
    );
  }
  _requestChartCanvasRender(_0x367bd0) {
    var _0x39a403, _0x51a743;
    let _0x1ecaa1 = this._hostContextMap["get"](_0x367bd0);
    if (!_0x1ecaa1) return;
    this._forEachHostContext(_0x367bd0, (_0x209941) => {
      var _0x5eb360, _0x59aecf, _0x4804e8;
      ((_0x5eb360 = _0x209941.imageObject) == null ||
        (_0x59aecf = _0x5eb360.makeDirty) == null ||
        _0x59aecf.call(_0x5eb360, true),
        (_0x4804e8 = _0x209941.requestRender) == null ||
          _0x4804e8.call(_0x209941));
    });
    let _0x3e3971 =
        (_0x39a403 = this._renderManagerService["getRenderUnitById"](
          _0x1ecaa1.unitId,
        )) == null
          ? undefined
          : _0x39a403.scene,
      _0x16a350 = this._getChartRenderObject(_0x1ecaa1);
    (_0x16a350 == null ||
      (_0x51a743 = _0x16a350.makeDirty) == null ||
      _0x51a743.call(_0x16a350, true),
      _0x3e3971 == null || _0x3e3971.makeDirty(true),
      _0x3e3971 == null || _0x3e3971.render());
  }
  _forEachHostContext(_0x409cf1, _0x4befd4) {
    var _0x25514d;
    (_0x25514d = this._hostContextRegistrationMap["get"](_0x409cf1)) == null ||
      _0x25514d.forEach(({ context: _0x227b25 }) => _0x4befd4(_0x227b25));
  }
  _selectHostContext(_0x430acb) {
    let _0x3200c2 = Array.from(
      _0x430acb.values(),
      ({ context: _0x7f619d }) => _0x7f619d,
    );
    return (
      _0x3200c2.find(
        (_0x3cfdbe) =>
          _0x3cfdbe.sceneType == null ||
          _0x3cfdbe.sceneType === t.SlideSceneTypeEnum["EDIT"],
      ) ??
      _0x3200c2.find(
        (_0x1651b7) =>
          _0x1651b7.sceneType === t.SlideSceneTypeEnum["PRESENTATION"],
      ) ??
      _0x3200c2[_0x3200c2.length - 1]
    );
  }
  _getHostRegistrationKey(_0x5ae55d) {
    return [
      _0x5ae55d.unitId,
      _0x5ae55d.subUnitId,
      _0x5ae55d.drawingId,
      _0x5ae55d.sceneType ?? t.SlideSceneTypeEnum["EDIT"],
    ].join("::");
  }
  _commitImageDataUrl(_0x52d388, _0xc32bb3) {
    (this._lastImageDataUrlMap["set"](_0x52d388, _0xc32bb3),
      this._forEachHostContext(_0x52d388, (_0x317a99) => {
        var _0x14df3b;
        (_0x14df3b = _0x317a99.imageObject) == null ||
          _0x14df3b.changeChartSource(_0xc32bb3);
      }),
      this._imageUpdated$["next"](_0x52d388),
      this._requestChartCanvasRender(_0x52d388),
      this._releaseDetachedThumbnailContexts(_0x52d388));
  }
  _releaseDetachedThumbnailContexts(_0x3b4ba6) {
    let _0x2435b5 = this._hostContextRegistrationMap["get"](_0x3b4ba6);
    if (
      (_0x2435b5 == null ||
        _0x2435b5.forEach((_0x4975b3, _0x1e48d9) => {
          _0x4975b3.detached && _0x2435b5.delete(_0x1e48d9);
        }),
      !(_0x2435b5 != null && _0x2435b5.size))
    ) {
      (this._hostContextMap["delete"](_0x3b4ba6),
        this._hostContextRegistrationMap["delete"](_0x3b4ba6),
        this.removeHost(_0x3b4ba6));
      return;
    }
    (this._hostContextMap["set"](_0x3b4ba6, this._selectHostContext(_0x2435b5)),
      this.syncHostLayout(_0x3b4ba6));
  }
  dispose() {
    this._disposed ||
      (this._domHostMap["forEach"]((_0x4023d7) => _0x4023d7.dispose()),
      this._domHostMap["clear"](),
      this._hostLayoutSubscriptions["forEach"]((_0x226e93) => {
        _0x226e93.forEach((_0x43bdbb) => _0x43bdbb.dispose());
      }),
      this._hostLayoutSubscriptions["clear"](),
      this._runtimeRenderSubscriptions["forEach"]((_0x15998f) =>
        _0x15998f.dispose(),
      ),
      this._runtimeRenderSubscriptions["clear"](),
      this._renderQueueMap["clear"](),
      this._renderRequestTokenMap["clear"](),
      this._dataUpdateAnimationTimers["forEach"]((_0x2a3a80) =>
        clearTimeout(_0x2a3a80),
      ),
      this._dataUpdateAnimationTimers["clear"](),
      this._dataUpdateAnimationChartIds["clear"](),
      this._pendingDataUpdateChartIds["clear"](),
      this._dataUpdateEpochMap["clear"](),
      this._domReadyChartIds["clear"](),
      this._hostContextMap["clear"](),
      this._hostContextRegistrationMap["clear"](),
      this._lastImageDataUrlMap["clear"](),
      this._removeHost$["complete"](),
      this._imageUpdated$["complete"](),
      this._domReadyChanged$["complete"](),
      this._layoutChanged$["complete"](),
      super.dispose());
  }
};
J = O(
  [
    D(0, d.IRenderManagerService),
    D(1, (0, e.Inject)(e.LocaleService)),
    D(2, (0, e.Inject)(c.SlideChartModelService)),
    D(3, (0, e.Inject)(K)),
    D(4, (0, e.Inject)(B)),
  ],
  J,
);
const ye = "slides-chart-element-float-menu";
let Y = class extends e.Disposable {
  constructor(
    _0x15b569,
    _0x4f4d12,
    _0x301b97,
    _0x56ca71,
    _0x4e1774,
    _0x3f8eeb,
    _0x4009ee,
    _0x2ce3c6,
    _0x409368,
    _0x511f73,
  ) {
    (super(),
      (this._chartModelService = _0x15b569),
      (this._editSessionService = _0x4f4d12),
      (this._chartRenderService = _0x301b97),
      (this._chartHostProvider = _0x56ca71),
      (this._slideCanvasPopManagerService = _0x4e1774),
      (this._chartUIService = _0x3f8eeb),
      (this._adapterRegistry = _0x4009ee),
      (this._commandService = _0x2ce3c6),
      (this._univerInstanceService = _0x409368),
      (this._injector = _0x511f73),
      E(this, "_popupDisposable", null),
      E(this, "_popupChartId", null),
      E(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(), super.dispose());
  }
  _registerAdapter() {
    let _0x2b7bb5 = (0, n.createChartElementFloatMenuAdapter)({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0x17c4a3) => {
        this._setActiveChart(_0x17c4a3.chartId);
        let _0x31124b = this._chartModelService["getChartModel"](
            _0x17c4a3.unitId,
            _0x17c4a3.chartId,
          ),
          _0x1bfe9c = this._univerInstanceService["getUnit"](
            _0x17c4a3.unitId,
            e.UniverInstanceType["UNIVER_SLIDE"],
          );
        if (!(
          !_0x31124b ||
          !_0x1bfe9c ||
          !_0x17c4a3.subUnitId ||
          !_0x17c4a3.drawingId
        ))
          return new n["ChartHostAdapter"](
            _0x31124b.model,
            new c["SlideChartConfigAdapter"]({
              unitId: _0x17c4a3.unitId,
              subUnitId: _0x17c4a3.subUnitId,
              chartId: _0x17c4a3.chartId,
              elementId: _0x17c4a3.drawingId,
              slideModel: _0x1bfe9c,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x39e15f) => {
        let {
            unitId: _0x1c32dd,
            subUnitId: _0x226ffc,
            drawingId: _0x4abf82,
            chartId: _0x500462,
          } = _0x39e15f,
          _0x376679 = (0, n.resolveChartEditPanelRoute)(_0x39e15f.target);
        this._commandService["executeCommand"](h.id, {
          unitId: _0x1c32dd,
          subUnitId: _0x226ffc ?? "",
          drawingId: _0x4abf82 ?? _0x500462,
          ...(_0x376679 ? { route: _0x376679 } : {}),
        });
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](ye, _0x2b7bb5));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      (0, e.toDisposable)(
        this._chartModelService["chartModelAdded$"].subscribe((_0x5901c2) => {
          let _0x3d7728 = new e["DisposableCollection"]();
          (_0x3d7728.add(
            this._chartRenderService["on"](
              _0x5901c2.chartId,
              "click",
              (_0x545ed9) => {
                this._openFloatMenu(_0x5901c2.chartId, _0x545ed9);
              },
            ),
          ),
            _0x5901c2.model["onDispose"](() => {
              (_0x3d7728.dispose(),
                this._clearSelectedTarget(_0x5901c2.chartId));
            }),
            this.disposeWithMe(_0x3d7728));
        }),
      ),
    ),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._chartUIService["activeEditChart$"].subscribe((_0x5d7050) => {
            (!_0x5d7050 ||
              (this._popupChartId && _0x5d7050 !== this._popupChartId)) &&
              this._closePopup();
          }),
        ),
      ),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._editSessionService["activeSession$"].subscribe((_0x5138b5) => {
            (!_0x5138b5 ||
              (this._popupChartId &&
                _0x5138b5.chartId !== this._popupChartId)) &&
              this._closePopup();
          }),
        ),
      ),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._chartHostProvider["removeHost$"].subscribe((_0x5211e4) => {
            this._clearSelectedTarget(_0x5211e4);
          }),
        ),
      ),
      this.disposeWithMe(
        (0, e.toDisposable)(
          this._chartHostProvider["layoutChanged$"].subscribe((_0x4e4d56) => {
            this._popupChartId === _0x4e4d56 && this._closePopup();
          }),
        ),
      ));
  }
  _setActiveChart(_0x36a2cd) {
    let _0x495834 = this._chartHostProvider["getHostContext"](_0x36a2cd),
      _0x53673f = _0x495834
        ? this._chartModelService["getChartModel"](_0x495834.unitId, _0x36a2cd)
        : undefined;
    _0x53673f && this._chartModelService["setActiveChartRuntime"](_0x53673f);
  }
  _openFloatMenu(_0x117494, _0x25c30b) {
    var _0x222af3;
    if (!this._editSessionService["isActive"](_0x117494)) return;
    let _0x1c3d44 = this._chartHostProvider["getHostContext"](_0x117494),
      _0x51a2aa = _0x1c3d44
        ? this._chartModelService["getChartModel"](_0x1c3d44.unitId, _0x117494)
        : undefined,
      _0x20f464 = _0x51a2aa
        ? (0, n.resolveChartElementSelection)(_0x51a2aa.model, _0x25c30b.hit)
        : undefined;
    if (!_0x1c3d44 || !_0x51a2aa || !_0x20f464) {
      (this._chartUIService["setSelectedElement"](null),
        this._chartUIService["clearPanelRoute"](),
        this._closePopup());
      return;
    }
    let _0x4e8e41 = (0, n.resolveChartEditPanelRoute)(_0x20f464.target);
    if (!_0x4e8e41) {
      (this._chartUIService["setSelectedElement"](null),
        this._chartUIService["clearPanelRoute"](),
        this._closePopup());
      return;
    }
    let _0x556b38 = JSON.stringify([
      _0x1c3d44.unitId,
      _0x1c3d44.subUnitId,
      _0x1c3d44.drawingId,
      _0x117494,
      _0x20f464.target,
    ]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0x556b38) ||
      (this._chartModelService["setActiveChartRuntime"](_0x51a2aa),
      this._chartUIService["setSelectedElement"]({
        chartId: _0x117494,
        element: _0x25c30b.hit,
        target: _0x20f464.target,
        route: _0x4e8e41,
      }),
      this._chartUIService["setPanelRoute"](_0x117494, _0x4e8e41),
      this._closePopup(),
      !_0x20f464.showFloatMenu)
    )
      return;
    let _0x23f00c =
      this._chartHostProvider["getClientRect"](
        _0x117494,
        ((_0x222af3 = _0x25c30b.hit["overlay"]) == null
          ? undefined
          : _0x222af3.bounds) ?? _0x25c30b.hit["bounds"],
      ) ?? this._chartHostProvider["getClientRect"](_0x117494);
    if (!_0x23f00c) return;
    let _0xfa90bf = this._slideCanvasPopManagerService[
      "attachPopupToClientRect"
    ](_0x1c3d44.unitId, _0x1c3d44.subUnitId, _0x23f00c, {
      componentKey: n.CHART_ELEMENT_FLOAT_MENU_COMPONENT,
      direction: "top-center",
      offset: n.CHART_ELEMENT_FLOAT_MENU_OFFSET,
      extraProps: {
        unitId: _0x1c3d44.unitId,
        subUnitId: _0x1c3d44.subUnitId,
        chartId: _0x117494,
        drawingId: _0x1c3d44.drawingId,
        element: _0x25c30b.hit,
        target: _0x20f464.target,
        adapterKey: ye,
      },
    });
    _0xfa90bf &&
      ((this._popupDisposable = _0xfa90bf),
      (this._popupChartId = _0x117494),
      (this._popupSessionKey = _0x556b38));
  }
  _closePopup() {
    var _0x23cd35;
    ((_0x23cd35 = this._popupDisposable) == null || _0x23cd35.dispose(),
      (this._popupDisposable = null),
      (this._popupChartId = null),
      (this._popupSessionKey = null));
  }
  _clearSelectedTarget(_0x29958d) {
    (!this._chartUIService["isElementEditModeActive"](_0x29958d) &&
      this._popupChartId !== _0x29958d) ||
      (this._chartUIService["setSelectedElement"](null),
      this._chartUIService["clearPanelRoute"](),
      this._popupChartId === _0x29958d && this._closePopup());
  }
};
Y = O(
  [
    D(0, (0, e.Inject)(c.SlideChartModelService)),
    D(1, (0, e.Inject)(V)),
    D(2, (0, e.Inject)(K)),
    D(3, (0, e.Inject)(J)),
    D(4, (0, e.Inject)(u.SlideCanvasPopManagerService)),
    D(5, k),
    D(6, (0, e.Inject)(n.ChartElementFloatMenuAdapterRegistry)),
    D(7, e.ICommandService),
    D(8, e.IUniverInstanceService),
    D(9, (0, e.Inject)(e.Injector)),
  ],
  Y,
);
let X = class extends e.Disposable {
  constructor(_0x161d88, _0x3d0e3c) {
    (super(),
      (this._renderService = _0x3d0e3c),
      this.disposeWithMe(_0x161d88.register(this)));
  }
  supports(_0x55eab4) {
    return "getPlaceholder" in _0x55eab4;
  }
  exportImage(_0x539df7, _0x3c8bc9) {
    return this._renderService["exportImage"](_0x539df7.getId(), _0x3c8bc9);
  }
};
X = O(
  [D(0, (0, e.Inject)(n.ChartImageExportService)), D(1, (0, e.Inject)(K))],
  X,
);
function be(_0x81c6a) {
  return _0x81c6a.type === t.PageElementTypeEnum["Chart"];
}
let Z = class {
  constructor(_0x2e30bc) {
    ((this._resourceService = _0x2e30bc), E(this, "key", "slide-chart"));
  }
  collect(_0x4f0070) {
    let _0x4467da = {},
      _0x3cbc9b = {},
      _0x5c5200 = {};
    return (
      _0x4f0070.elements["forEach"]((_0x52408d) => {
        if (!be(_0x52408d)) return;
        let _0x32c73e = this._resourceService["getChart"](
            _0x4f0070.unitId,
            _0x52408d.chartId,
          ),
          _0x3d7fe6 = _0x32c73e
            ? this._resourceService["getDataSource"](
                _0x4f0070.unitId,
                _0x32c73e.dataSourceId,
              )
            : undefined;
        !_0x32c73e ||
          !_0x3d7fe6 ||
          ((_0x4467da[_0x32c73e.id] = e.Tools["deepClone"](_0x32c73e)),
          (_0x3cbc9b[_0x3d7fe6.id] = _0x3d7fe6),
          (_0x5c5200[_0x52408d.id] = _0x32c73e.id));
      }),
      Object.keys(_0x4467da).length === 0
        ? null
        : {
            charts: _0x4467da,
            dataSources: _0x3cbc9b,
            chartIdByElementId: _0x5c5200,
          }
    );
  }
  preparePaste(_0x181fe8) {
    if (!xe(_0x181fe8.payload)) return null;
    let _0x34a612 = _0x181fe8.payload,
      _0x4e8405 = new Map();
    _0x181fe8.elementIdMap["forEach"]((_0x80a694, _0x276162) =>
      _0x4e8405.set(_0x80a694, _0x276162),
    );
    let _0x2832a0 = new Map(),
      _0x5360d1 = new Map(),
      _0x24011f = _0x181fe8.elements["map"]((_0x1677b4) => {
        if (!be(_0x1677b4)) return _0x1677b4;
        let _0x44b666 = _0x4e8405.get(_0x1677b4.id),
          _0x4fa339 = _0x44b666
            ? _0x34a612.chartIdByElementId[_0x44b666]
            : undefined;
        if (!_0x4fa339 || !_0x34a612.charts[_0x4fa339]) return _0x1677b4;
        let _0x5496f5 = _0x2832a0.get(_0x4fa339);
        return (
          _0x5496f5 ||
            ((_0x5496f5 = (0, e.generateRandomId)(6)),
            _0x2832a0.set(_0x4fa339, _0x5496f5)),
          { ..._0x1677b4, chartId: _0x5496f5 }
        );
      });
    _0x2832a0.forEach((_0x1e4c64, _0x3b0114) => {
      var _0x511943;
      let _0x3e9f63 =
        (_0x511943 = _0x34a612.charts[_0x3b0114]) == null
          ? undefined
          : _0x511943.dataSourceId;
      _0x3e9f63 &&
        !_0x5360d1.has(_0x3e9f63) &&
        _0x5360d1.set(_0x3e9f63, (0, e.generateRandomId)(6));
    });
    let _0x5951b9 = [];
    _0x5360d1.forEach((_0x2e6a04, _0x3b9a3e) => {
      let _0x38eaad = _0x34a612.dataSources[_0x3b9a3e];
      _0x38eaad && _0x5951b9.push({ ..._0x38eaad, id: _0x2e6a04 });
    });
    let _0x48617d = [];
    return (
      _0x2832a0.forEach((_0x552c94, _0x1ea5f4) => {
        let _0x1e0917 = _0x34a612.charts[_0x1ea5f4],
          _0x5054bc = _0x1e0917
            ? _0x5360d1.get(_0x1e0917.dataSourceId)
            : undefined;
        _0x1e0917 &&
          _0x5054bc &&
          _0x48617d.push({
            ..._0x1e0917,
            id: _0x552c94,
            dataSourceId: _0x5054bc,
          });
      }),
      _0x48617d.length === 0
        ? null
        : {
            elements: _0x24011f,
            redoMutations: [
              ..._0x5951b9.map((_0x2a9eb6) => ({
                id: c.SetSlideChartDataSourceMutation["id"],
                params: {
                  unitId: _0x181fe8.targetUnitId,
                  dataSource: _0x2a9eb6,
                },
              })),
              ..._0x48617d.map((_0xed3b63) => ({
                id: c.SetSlideChartSnapshotMutation["id"],
                params: { unitId: _0x181fe8.targetUnitId, chart: _0xed3b63 },
              })),
            ],
            undoMutations: [
              ..._0x48617d.map((_0xaa6584) => ({
                id: c.RemoveSlideChartSnapshotMutation["id"],
                params: {
                  unitId: _0x181fe8.targetUnitId,
                  chartId: _0xaa6584.id,
                },
              })),
              ..._0x5951b9.map((_0x1d35f5) => ({
                id: c.RemoveSlideChartDataSourceMutation["id"],
                params: {
                  unitId: _0x181fe8.targetUnitId,
                  dataSourceId: _0x1d35f5.id,
                },
              })),
            ],
          }
    );
  }
};
Z = O([D(0, (0, e.Inject)(c.SlideChartResourceService))], Z);
function xe(_0x4296ef) {
  if (!_0x4296ef || typeof _0x4296ef != "object") return false;
  let _0x7f335f = _0x4296ef;
  return (
    !!_0x7f335f.charts &&
    !!_0x7f335f.dataSources &&
    !!_0x7f335f.chartIdByElementId
  );
}
function Se(_0x39fc18) {
  switch (_0x39fc18) {
    case p.ShapeLineDashEnum["RoundDot"]:
      return [1, 2];
    case p.ShapeLineDashEnum["SquareDot"]:
      return [1, 3];
    case p.ShapeLineDashEnum["Dash"]:
      return [4, 2];
    case p.ShapeLineDashEnum["DashDot"]:
      return [4, 2, 1, 2];
    case p.ShapeLineDashEnum["LongDash"]:
      return [8, 2];
    case p.ShapeLineDashEnum["LongDashDot"]:
      return [8, 2, 1, 2];
    case p.ShapeLineDashEnum["LongDashDotDot"]:
      return [8, 2, 1, 2, 1, 2];
    default:
      return [];
  }
}
function Ce(_0x523a01) {
  switch (_0x523a01) {
    case p.ShapeLineCapEnum["Round"]:
      return "round";
    case p.ShapeLineCapEnum["Square"]:
      return "square";
    default:
      return "butt";
  }
}
function we(_0x435959) {
  switch (_0x435959) {
    case p.ShapeLineJoinEnum["Round"]:
      return "round";
    case p.ShapeLineJoinEnum["Bevel"]:
      return "bevel";
    default:
      return "miter";
  }
}
var Te = class extends u.SlideImageObject {
  constructor(_0x1b4c98, _0x176111) {
    (super(_0x1b4c98, _0x176111),
      E(this, "_chartStroke", undefined),
      E(this, "_hideImage", false),
      this._attachNativeLoadHandlers(_0x176111.success, _0x176111.fail));
  }
  setChartStroke(_0x4bba5c) {
    ((this._chartStroke = _0x4bba5c), this.makeDirty(true));
  }
  setImageHidden(_0xe34b49) {
    this._hideImage !== _0xe34b49 &&
      ((this._hideImage = _0xe34b49),
      this.makeDirty(true),
      this._notifyScene());
  }
  changeChartSource(_0x30e1f9) {
    (this._native ??
      ((this._native = document.createElement("img")),
      (this._native["crossOrigin"] = "anonymous")),
      this._attachNativeLoadHandlers(),
      (this._native["src"] = _0x30e1f9));
  }
  _draw(_0x4006d6, _0x4f801c, _0x10028a, _0x284597) {
    (this._hideImage || super._draw(_0x4006d6, _0x4f801c, _0x10028a, _0x284597),
      this._drawChartStroke(
        _0x4006d6,
        _0x10028a ?? this.width,
        _0x284597 ?? this.height,
      ));
  }
  _drawChartStroke(_0x48fa70, _0x12bdfc, _0x952d6e) {
    let _0x18dde9 = this._chartStroke,
      _0x2db0e5 = (_0x18dde9 == null ? undefined : _0x18dde9.width) ?? 0;
    if (!ge(_0x18dde9)) return;
    (_0x48fa70.save(),
      _0x48fa70.beginPath(),
      (_0x48fa70.lineWidth = _0x2db0e5),
      (_0x48fa70.strokeStyle = _0x18dde9.color),
      (_0x48fa70.lineCap = Ce(_0x18dde9.capType)),
      (_0x48fa70.lineJoin = we(_0x18dde9.lineJoinType)),
      _0x48fa70.setLineDash(Se(_0x18dde9.dashType)),
      (_0x48fa70.globalAlpha *= _0x18dde9.opacity ?? 1));
    let _0x45a62e = _0x2db0e5 / 2;
    (_0x48fa70.rect(
      -_0x12bdfc / 2 + _0x45a62e,
      -_0x952d6e / 2 + _0x45a62e,
      Math.max(0, _0x12bdfc - _0x2db0e5),
      Math.max(0, _0x952d6e - _0x2db0e5),
    ),
      _0x48fa70.stroke(),
      _0x48fa70.restore());
  }
  _notifyScene() {
    var _0x21baf7;
    let _0x1d320e =
      (_0x21baf7 = this.getEngine()) == null
        ? undefined
        : _0x21baf7.activeScene;
    _0x1d320e &&
      (_0x1d320e.makeDirty(true),
      _0x1d320e.render(),
      _0x1d320e.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers(_0x49fe98, _0x47b83c) {
    this._native &&
      ((this._native["onload"] = () => {
        (_0x49fe98 == null || _0x49fe98(), this._notifyScene());
      }),
      (this._native["onerror"] = () => {
        (_0x47b83c == null || _0x47b83c(), this._notifyScene());
      }));
  }
};
let Q = class extends u.ObjectAdaptor {
  constructor(_0xba55d0) {
    (super(), (this._hostProvider = _0xba55d0), E(this, "zIndex", 55));
  }
  check(_0x1505a7) {
    return _0x1505a7.element["type"] === t.PageElementTypeEnum["Chart"];
  }
  convert(_0x173920, _0x14d49d) {
    if (
      _0x173920.hidden ||
      _0x173920.element["type"] !== t.PageElementTypeEnum["Chart"]
    )
      return null;
    let _0x32352d = _0x173920.element,
      _0x58b71c = _0x32352d.transform,
      _0x119e49 = Math.max(1, _0x58b71c.width ?? 0),
      _0x2d6846 = Math.max(1, _0x58b71c.height ?? 0),
      _0x44dd69 = new Te(
        "slide-drawing-" +
          _0x14d49d.unitId +
          "-" +
          _0x14d49d.subUnitId +
          "-" +
          _0x173920.drawingId,
        {
          url:
            this._hostProvider["getImageDataUrl"](_0x32352d.chartId) ??
            "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
          left: _0x14d49d.pageOffsetLeft + (_0x58b71c.left ?? 0),
          top: _0x14d49d.pageOffsetTop + (_0x58b71c.top ?? 0),
          width: _0x119e49,
          height: _0x2d6846,
          angle: _0x58b71c.rotation ?? 0,
          flipX: _0x58b71c.flipX,
          flipY: _0x58b71c.flipY,
          skewX: _0x58b71c.skewX,
          skewY: _0x58b71c.skewY,
          zIndex: _0x14d49d.orderIndex,
          visible: !_0x173920.hidden,
          evented: true,
          forceRender: true,
        },
      );
    _0x44dd69.setChartStroke(_0x32352d.stroke);
    let _0xc2189c =
        (_0x14d49d.sceneType ?? t.SlideSceneTypeEnum["EDIT"]) ===
        t.SlideSceneTypeEnum["EDIT"],
      _0x57f1dc = this._hostProvider["registerHostContext"]({
        unitId: _0x14d49d.unitId,
        subUnitId: _0x14d49d.subUnitId,
        drawingId: _0x173920.drawingId,
        chartId: _0x32352d.chartId,
        width: _0x119e49,
        height: _0x2d6846,
        drawing: _0x173920,
        stroke: _0x32352d.stroke,
        imageObject: _0x44dd69,
        sceneType: _0x14d49d.sceneType,
        requestRender: _0x14d49d.requestRender,
      });
    _0x44dd69.setImageHidden(
      _0xc2189c && this._hostProvider["isDomReady"](_0x32352d.chartId),
    );
    let _0x36299a = this._hostProvider["imageUpdated$"].subscribe(
        (_0x57f772) => {
          _0x57f772 === _0x32352d.chartId &&
            _0x44dd69.setImageHidden(
              _0xc2189c && this._hostProvider["isDomReady"](_0x32352d.chartId),
            );
        },
      ),
      _0x4901d3 = this._hostProvider["domReadyChanged$"].subscribe(
        (_0x4217ea) => {
          _0x4217ea === _0x32352d.chartId &&
            _0x44dd69.setImageHidden(
              _0xc2189c && this._hostProvider["isDomReady"](_0x32352d.chartId),
            );
        },
      );
    return (
      _0x44dd69.onDispose$["subscribeEvent"](() => {
        (_0x57f1dc == null || _0x57f1dc.dispose(),
          _0x36299a == null || _0x36299a.unsubscribe(),
          _0x4901d3 == null || _0x4901d3.unsubscribe());
      }),
      _0x44dd69
    );
  }
};
Q = O([D(0, (0, e.Inject)(J))], Q);
let $ = class extends e.Plugin {
  constructor(_0x42299a = de, _0x30fb03, _0x1f42e8, _0x439b7d, _0x135a31) {
    (super(),
      (this._config = _0x42299a),
      (this._injector = _0x30fb03),
      (this._configService = _0x1f42e8),
      (this._renderManagerService = _0x439b7d),
      (this._commandService = _0x135a31));
    let { ..._0xe771c9 } = (0, e.merge)({}, de, this._config);
    (this._configService["setConfig"](I, _0xe771c9), this._initCommands());
  }
  onStarting() {
    let _0x58da00 = this._injector;
    (this.disposeWithMe(
      _0x58da00.get(u.SlideObjectAdaptorRegistryService).register(Q),
    ),
      [
        [W],
        [B],
        [V],
        [J],
        [K],
        [X],
        [P],
        [Z],
        [z],
        [k, { useClass: A }],
        [Y],
        [R],
        [U],
      ].forEach((_0x5bd000) => _0x58da00.add(_0x5bd000)),
      (0, e.touchDependencies)(_0x58da00, [
        [B],
        [V],
        [J],
        [K],
        [X],
        [P],
        [Z],
        [z],
        [k],
      ]),
      this._injector["get"](W),
      this.disposeWithMe(
        _0x58da00
          .get(u.ISlideClipboardResourceAdapterService)
          .registerAdapter(_0x58da00.get(Z)),
      ));
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        e.UniverInstanceType["UNIVER_SLIDE"],
        G,
      ),
    ),
      this._injector["get"](R),
      this._injector["get"](Y),
      this._injector["get"](U));
  }
  _initCommands() {
    [h, g, _, v].forEach((_0x3e8fa7) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x3e8fa7));
    });
  }
};
(E($, "type", e.UniverInstanceType["UNIVER_SLIDE"]),
  E($, "pluginName", "UniverSlideChartUIPlugin"),
  E($, "packageName", me),
  E($, "version", he),
  ($ = O(
    [
      (0, e.DependentOn)(
        f.UniverLicensePlugin,
        d.UniverRenderEnginePlugin,
        c.UniverSlidesChartPlugin,
        n.UniverChartUIPlugin,
        t.UniverSlidesPlugin,
        u.UniverSlidesUIPlugin,
      ),
      D(1, (0, e.Inject)(e.Injector)),
      D(2, e.IConfigService),
      D(3, d.IRenderManagerService),
      D(4, e.ICommandService),
    ],
    $,
  )),
  (exports.CloseSlideChartPanelOperation = g),
  (exports.ISlideChartUIService = k),
  (exports.OpenSlideChartDataEditorOperation = _),
  (exports.OpenSlideChartPanelOperation = h),
  (exports.SLIDES_CHART_UI_PLUGIN_CONFIG_KEY = I),
  (exports.SLIDE_CHART_DATA_EDITOR_COMPONENT = y),
  (exports.SLIDE_CHART_DATA_EDITOR_DIALOG_ID = b),
  (exports.SLIDE_CHART_EDIT_PANEL_COMPONENT = j),
  (exports.SLIDE_CHART_INSERT_PANEL_COMPONENT = F),
  Object.defineProperty(exports, "SlideChartContextMenuController", {
    enumerable: true,
    get: function () {
      return R;
    },
  }),
  Object.defineProperty(exports, "SlideChartDataEditService", {
    enumerable: true,
    get: function () {
      return z;
    },
  }),
  (exports.SlideChartDataEditor = S),
  (exports.SlideChartDataEditorSubmitMode = x),
  (exports.SlideChartEditPanel = N),
  (exports.SlideChartInsertPanel = ue),
  Object.defineProperty(exports, "SlideChartInsertService", {
    enumerable: true,
    get: function () {
      return P;
    },
  }),
  Object.defineProperty(exports, "SlideChartObjectAdaptor", {
    enumerable: true,
    get: function () {
      return Q;
    },
  }),
  Object.defineProperty(exports, "SlideChartRenderService", {
    enumerable: true,
    get: function () {
      return K;
    },
  }),
  Object.defineProperty(exports, "SlideChartUIController", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  Object.defineProperty(exports, "SlideChartUIService", {
    enumerable: true,
    get: function () {
      return A;
    },
  }),
  (exports.SlideContextMenuOpenChartPanelFactory = pe),
  (exports.SlideContextMenuOpenChartPanelOperation = v),
  Object.defineProperty(exports, "UniverSlidesChartUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.slideChartContextMenuSchema = L));
