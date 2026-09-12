Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs-pro/chart-ui"),
  n = require("@univerjs-pro/engine-chart"),
  r = require("@univerjs/design"),
  i = require("@univerjs/ui"),
  a = require("react"),
  o = require("react/jsx-runtime"),
  s = require("@univerjs-pro/docs-chart"),
  c = require("@univerjs/docs"),
  l = require("@univerjs/docs-ui"),
  u = require("@univerjs/docs-drawing"),
  d = require("@univerjs/docs-drawing-ui"),
  f = require("rxjs"),
  p = require("@univerjs-pro/license"),
  m = require("@univerjs/drawing"),
  h = require("@univerjs/engine-render");
const g = {
    id: "doc.operation.open-doc-chart-insert-dialog",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    },
  },
  _ = {
    id: "doc.operation.open-doc-chart-editor-dialog",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    },
  },
  v = "doc-chart.data-editor";
let y = (function (_0x343538) {
  return (
    (_0x343538.SHARED = "shared"),
    (_0x343538.DUPLICATE = "duplicate"),
    _0x343538
  );
})({});
function b(_0x3099c3) {
  let _0x3473d0 = (0, i.useDependency)(e.LocaleService),
    {
      values: _0x4f6a69,
      onCancel: _0x609e6c,
      onChange: _0x850e70,
      onSubmit: _0x570bc1,
    } = _0x3099c3,
    [_0x10ef16, _0x3692a4] = (0, a.useState)(() =>
      (0, n.isReferencedChartDataSource)(_0x3099c3.dataSource)
        ? "referenced"
        : "inline",
    ),
    [_0x5682bd, _0x5a7dc3] = (0, a.useState)(null),
    [_0x1c17ff, _0x14705b] = (0, a.useState)(() =>
      _0x4f6a69.map((_0x2c066f) => [..._0x2c066f]),
    ),
    [_0x2fc51c, _0x9834e1] = (0, a.useState)(null),
    _0x4ca6ad = (_0x1aa800) => {
      (_0x14705b(_0x1aa800), _0x850e70 == null || _0x850e70(_0x1aa800));
    },
    _0x5efa74 = (_0x5bd662) => {
      let _0x3fa3d0 = (0, t.compactInlineTableValues)(_0x1c17ff);
      if (_0x3fa3d0.length === 0) {
        _0x9834e1(_0x3473d0.t("docs-chart-ui.common.tableDataEmpty"));
        return;
      }
      (_0x9834e1(null), _0x570bc1(_0x3fa3d0, _0x5bd662));
    };
  return (0, o.jsxs)("div", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4",
    children: [
      (0, o.jsx)("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
        children: (0, o.jsx)(t.ChartReferencedDataSourceEditor, {
          mode: _0x10ef16,
          initialSource: (0, n.isReferencedChartDataSource)(
            _0x3099c3.dataSource,
          )
            ? _0x3099c3.dataSource["source"]
            : undefined,
          inlineContent: (0, o.jsx)(t.ChartInlineTableEditor, {
            values: _0x1c17ff,
            parsePastedText: n.parseInlineChartTable,
            onChange: _0x4ca6ad,
          }),
          onModeChange: (_0x352d81) => {
            (_0x3692a4(_0x352d81), _0x5a7dc3(null));
          },
          onPreviewChange: (_0x545b21, _0x30d5e9) => {
            (_0x5a7dc3(
              _0x545b21 &&
                _0x30d5e9.status === n.ChartDataSourceRuntimeStatus["READY"]
                ? { source: _0x545b21 }
                : null,
            ),
              _0x30d5e9.values &&
                (_0x850e70 == null ||
                  _0x850e70(
                    _0x30d5e9.values["map"]((_0x313e1d) => [..._0x313e1d]),
                  )));
          },
        }),
      }),
      _0x2fc51c &&
        (0, o.jsx)("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x2fc51c,
        }),
      (0, o.jsxs)("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x609e6c &&
            (0, o.jsx)(r.Button, {
              type: "button",
              variant: "default",
              onClick: _0x609e6c,
              children: _0x3473d0.t("docs-chart-ui.common.cancel"),
            }),
          (0, o.jsx)(r.Button, {
            type: "button",
            variant: "primary",
            disabled: _0x10ef16 === "referenced" && !_0x5682bd,
            onClick: () => {
              var _0x570565;
              return _0x10ef16 === "referenced" && _0x5682bd
                ? (_0x570565 = _0x3099c3.onDataSourceSubmit) == null
                  ? undefined
                  : _0x570565.call(_0x3099c3, _0x5682bd)
                : _0x5efa74("shared");
            },
            children: _0x3473d0.t("docs-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
function x(_0x30b446, _0x4e2379) {
  return function (_0x734641, _0x763a41) {
    _0x4e2379(_0x734641, _0x763a41, _0x30b446);
  };
}
function S(_0x1457eb, _0x161388, _0x1299ff, _0x5f2513) {
  var _0xda9a95 = arguments.length,
    _0x1c926d =
      _0xda9a95 < 3
        ? _0x161388
        : _0x5f2513 === null
          ? (_0x5f2513 = Object.getOwnPropertyDescriptor(_0x161388, _0x1299ff))
          : _0x5f2513,
    _0x34e59b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1c926d = Reflect.decorate(_0x1457eb, _0x161388, _0x1299ff, _0x5f2513);
  else {
    for (var _0x740544 = _0x1457eb.length - 1; _0x740544 >= 0; _0x740544--)
      (_0x34e59b = _0x1457eb[_0x740544]) &&
        (_0x1c926d =
          (_0xda9a95 < 3
            ? _0x34e59b(_0x1c926d)
            : _0xda9a95 > 3
              ? _0x34e59b(_0x161388, _0x1299ff, _0x1c926d)
              : _0x34e59b(_0x161388, _0x1299ff)) || _0x1c926d);
  }
  return (
    _0xda9a95 > 3 &&
      _0x1c926d &&
      Object.defineProperty(_0x161388, _0x1299ff, _0x1c926d),
    _0x1c926d
  );
}
let C = class {
  constructor(_0x6c4b4b, _0xdcb00c) {
    ((this._commandService = _0x6c4b4b), (this._resourceService = _0xdcb00c));
  }
  getEditorState(_0x59c53a, _0x79583e) {
    let _0x5d00cc = this._resourceService["getChart"](_0x59c53a, _0x79583e),
      _0x17669c = _0x5d00cc
        ? this._resourceService["getDataSource"](
            _0x59c53a,
            _0x5d00cc.dataSourceId,
          )
        : undefined;
    return !_0x5d00cc || !_0x17669c
      ? null
      : {
          unitId: _0x59c53a,
          chartId: _0x79583e,
          dataSourceId: _0x17669c.id,
          dataSource: _0x17669c,
          values: (0, n.isInlineChartDataSource)(_0x17669c)
            ? _0x17669c.values["map"]((_0x559d2b) => [..._0x559d2b])
            : [],
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0x59c53a,
            _0x17669c.id,
          ),
        };
  }
  updateDataFromText(_0x5a25d1, _0x3590a0, _0x1dcbef, _0x3491d9) {
    let _0x1bdd2a = (0, n.parseInlineChartTable)(_0x1dcbef);
    return (
      _0x1bdd2a.length !== 0 &&
      this.updateData(_0x5a25d1, _0x3590a0, _0x1bdd2a, _0x3491d9)
    );
  }
  updateData(_0x40a985, _0x3218c8, _0x1c30d3, _0xe8a722) {
    var _0x85213c;
    if (!this.getEditorState(_0x40a985, _0x3218c8) || _0x1c30d3.length === 0)
      return false;
    let _0x17f12e =
      (_0x85213c = this._resourceService["getChart"](_0x40a985, _0x3218c8)) ==
      null
        ? undefined
        : _0x85213c.chartType;
    if (_0x17f12e === undefined) return false;
    let _0x4c0a84 = (0, t.tryPrepareInlineChartData)(_0x17f12e, _0x1c30d3);
    return _0x4c0a84.ok
      ? this.changeDataSource(_0x40a985, _0x3218c8, {
          values: _0x4c0a84.values,
        })
      : false;
  }
  changeDataSource(_0x4da320, _0x35549e, _0x4916d6) {
    return this._commandService["syncExecuteCommand"](
      s.ChangeDocChartDataSourceCommand["id"],
      { unitId: _0x4da320, chartId: _0x35549e, dataSource: _0x4916d6 },
    );
  }
};
C = S(
  [x(0, e.ICommandService), x(1, (0, e.Inject)(n.ChartResourceRepository))],
  C,
);
const w = (0, e.createIdentifier)("doc-chart.ui.service");
let T = class extends t.ChartUIService {
  constructor(_0x220c85, _0x3b5b1a, _0x2a7a78) {
    (super(_0x2a7a78),
      (this._modelService = _0x220c85),
      (this._commandService = _0x3b5b1a));
  }
  get activeRuntimeModel() {
    return this._modelService["activeRuntimeModel"];
  }
  executeChartUpdateConfig(_0x4bf52f) {
    let _0x582035 = this.activeRuntimeModel,
      _0x2970ff =
        _0x4bf52f.unitId ?? (_0x582035 == null ? undefined : _0x582035.unitId),
      _0x3306ff =
        _0x4bf52f.chartId ??
        (_0x582035 == null ? undefined : _0x582035.chartId);
    !_0x2970ff ||
      !_0x3306ff ||
      this._commandService["executeCommand"](
        s.UpdateDocChartConfigCommand["id"],
        { ..._0x4bf52f, unitId: _0x2970ff, chartId: _0x3306ff },
      );
  }
};
T = S(
  [
    x(0, (0, e.Inject)(s.DocChartModelService)),
    x(1, e.ICommandService),
    x(2, (0, e.Inject)(t.ChartViewStateRegistry)),
  ],
  T,
);
const E = {
    axis: {
      ...t.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true,
    },
    legend: t.DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: t.DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: t.DEFAULT_CHART_PARETO_VALUES,
    funnel: t.DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: t.DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: t.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    pie: { ...t.DEFAULT_CHART_PIE_VALUES, doughnutHole: 0, pieHole: 0 },
    relation: {
      ...t.DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: false,
    },
    radar: t.DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...t.DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 1,
      rightAxis: { ltr: false, rtl: false },
    },
    style: t.DEFAULT_CHART_STYLE_VALUES,
    titles: t.DEFAULT_CHART_TITLE_VALUES,
    waterfall: { ...t.DEFAULT_CHART_WATERFALL_SETUP_VALUES, useSubtotal: true },
    waterfallStyle: t.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: t.DEFAULT_CHART_WORD_CLOUD_VALUES,
  },
  ee = [
    n.ChartTypeBits["Candlestick"],
    n.ChartTypeBits["Histogram"],
    n.ChartTypeBits["Treemap"],
    n.ChartTypeBits["Sunburst"],
    n.ChartTypeBits["Gauge"],
    n.ChartTypeBits["Chord"],
  ];
function D() {
  let _0x47f6c8 = (0, t.useChartEditorChartType)();
  return (0, o.jsx)(t.ChartGradientFillField, {
    visible: ee.every(
      (_0x5e47bd) => !n.chartBitsUtils["baseOn"](_0x47f6c8, _0x5e47bd),
    ),
  });
}
function O(_0x3bfb71) {
  return (0, o.jsxs)(t.ChartSectionAccordionItem, {
    id: _0x3bfb71.id,
    children: [
      (0, o.jsx)(t.ChartSectionAccordionTrigger, { children: _0x3bfb71.label }),
      (0, o.jsx)(t.ChartSectionAccordionContent, {
        children: _0x3bfb71.children,
      }),
    ],
  });
}
function k(_0xca15fb, _0xbb2701 = false) {
  let _0x15d377 = _0xca15fb === n.ChartTypeBits["WordCloud"],
    _0x35449b = n.chartBitsUtils["baseOn"](_0xca15fb, n.ChartTypeBits["Pie"]),
    _0x5e0d42 = _0xca15fb === n.ChartTypeBits["Radar"],
    _0x550f11 = _0xca15fb === n.ChartTypeBits["Funnel"],
    _0x16cc60 = _0xca15fb === n.ChartTypeBits["Waterfall"],
    _0x4e1a02 = _0xca15fb === n.ChartTypeBits["Pareto"],
    _0x34ceee = _0xca15fb === n.ChartTypeBits["Candlestick"],
    _0x4a0fad = _0xca15fb === n.ChartTypeBits["Histogram"],
    _0x136986 = _0xca15fb === n.ChartTypeBits["Treemap"],
    _0x2481ce = _0xca15fb === n.ChartTypeBits["Sunburst"],
    _0x528b3a = _0xca15fb === n.ChartTypeBits["Gauge"],
    _0x43504d = _0xca15fb === n.ChartTypeBits["Chord"],
    _0x30e4fd = _0xca15fb === n.ChartTypeBits["Relation"],
    _0x193cb0 = _0xca15fb === n.ChartTypeBits["Heatmap"],
    _0x4dd19a = [
      t.ChartEditPanelSection["ChartStyle"],
      t.ChartEditPanelSection["ChartAndAxisTitles"],
    ];
  return (
    _0x15d377 && _0x4dd19a.push(t.ChartEditPanelSection["WordCloud"]),
    (0, t.chartTypeSupportsCapability)(
      _0xca15fb,
      t.ChartEditorCapability["GeneralSeries"],
    ) &&
      !_0x4e1a02 &&
      _0x4dd19a.push(t.ChartEditPanelSection["Series"]),
    (0, t.chartTypeSupportsLineAndAreaStyle)(_0xca15fb) &&
      _0x4dd19a.push(t.ChartEditPanelSection["LineAndArea"]),
    _0x5e0d42 && _0x4dd19a.push(t.ChartEditPanelSection["Radar"]),
    _0x16cc60 && _0x4dd19a.push(t.ChartEditPanelSection["WaterfallSeries"]),
    _0x4e1a02 &&
      _0x4dd19a.push(
        t.ChartEditPanelSection["ParetoBarSeries"],
        t.ChartEditPanelSection["ParetoLineSeries"],
      ),
    _0x35449b && _0x4dd19a.push(t.ChartEditPanelSection["PieStyle"]),
    _0x550f11 && _0x4dd19a.push(t.ChartEditPanelSection["Funnel"]),
    _0x193cb0 && _0x4dd19a.push(t.ChartEditPanelSection["Heatmap"]),
    _0x30e4fd && _0x4dd19a.push(t.ChartEditPanelSection["Relation"]),
    _0x34ceee && _0x4dd19a.push(t.ChartEditPanelSection["Candlestick"]),
    _0x4a0fad && _0x4dd19a.push(t.ChartEditPanelSection["Histogram"]),
    _0x136986 && _0x4dd19a.push(t.ChartEditPanelSection["Treemap"]),
    _0x2481ce && _0x4dd19a.push(t.ChartEditPanelSection["Sunburst"]),
    _0x528b3a && _0x4dd19a.push(t.ChartEditPanelSection["Gauge"]),
    _0x43504d && _0x4dd19a.push(t.ChartEditPanelSection["Chord"]),
    (0, t.chartTypeSupportsCapability)(
      _0xca15fb,
      t.ChartEditorCapability["Legend"],
    ) && _0x4dd19a.push(t.ChartEditPanelSection["Legend"]),
    (0, t.chartTypeSupportsCapability)(
      _0xca15fb,
      t.ChartEditorCapability["Axes"],
    ) &&
      (_0x4dd19a.push(
        t.ChartEditPanelSection["HorizontalAxis"],
        t.ChartEditPanelSection["VerticalAxis"],
      ),
      _0xbb2701 && _0x4dd19a.push(t.ChartEditPanelSection["RightVerticalAxis"]),
      _0x4dd19a.push(t.ChartEditPanelSection["GridlinesAndTicks"])),
    (0, t.chartTypeSupportsCapability)(
      _0xca15fb,
      t.ChartEditorCapability["IndicatorLine"],
    ) && _0x4dd19a.push(t.ChartEditPanelSection["IndicatorLine"]),
    _0x4dd19a
  );
}
function A(_0x9d3fa3) {
  return (0, o.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-3",
    children: [
      (0, o.jsx)(t.ChartAxisLineVisibilityField, {
        axis: _0x9d3fa3.axis,
        defaultValues: E.axis,
      }),
      (0, o.jsx)(t.ChartAxisLabelVisibilityField, {
        axis: _0x9d3fa3.axis,
        defaultValues: E.axis,
      }),
      (0, o.jsx)(t.ChartAxisReverseField, {
        axis: _0x9d3fa3.axis,
        defaultValues: E.axis,
      }),
      (0, o.jsx)(t.ChartAxisBoundsFields, { axis: _0x9d3fa3.axis }),
      (0, o.jsx)(t.ChartAxisFormatTextField, { axis: _0x9d3fa3.axis }),
      (0, o.jsx)(t.ChartAxisLabelStyleFields, {
        axis: _0x9d3fa3.axis,
        defaultValues: E.axis,
      }),
      (0, o.jsx)(t.ChartAxisTickVisibilityField, {
        axis: _0x9d3fa3.axis,
        defaultValues: E.axis,
      }),
    ],
  });
}
function te(_0x114dc2) {
  var _0x48d4c3, _0x31f97e;
  let _0x54dc1b = (0, i.useDependency)(e.LocaleService),
    _0x452da3 = (0, t.useChartEditorChartType)(),
    _0x3d0aef = (0, t.useChartEditorHasRightAxis)(),
    [_0x35d19a, _0x74ab3c] = (0, a.useState)(null),
    _0xd46060 = (0, o.jsx)(t.ChartTypeSpecificStyleSection, {}),
    _0x17ad09 = {
      [t.ChartEditPanelSection["Candlestick"]]: _0x54dc1b.t(
        "docs-chart-ui.section.candlestick",
      ),
      [t.ChartEditPanelSection["ChartAndAxisTitles"]]: _0x54dc1b.t(
        "docs-chart-ui.common.chartAndAxisTitles",
      ),
      [t.ChartEditPanelSection["ChartStyle"]]: _0x54dc1b.t(
        "docs-chart-ui.common.chartStyle",
      ),
      [t.ChartEditPanelSection["Chord"]]: _0x54dc1b.t(
        "docs-chart-ui.section.chord",
      ),
      [t.ChartEditPanelSection["Funnel"]]: _0x54dc1b.t(
        "docs-chart-ui.section.funnel",
      ),
      [t.ChartEditPanelSection["Gauge"]]: _0x54dc1b.t(
        "docs-chart-ui.section.gauge",
      ),
      [t.ChartEditPanelSection["GridlinesAndTicks"]]: _0x54dc1b.t(
        "docs-chart-ui.section.gridlinesAndTicks",
      ),
      [t.ChartEditPanelSection["Heatmap"]]: _0x54dc1b.t(
        "docs-chart-ui.common.heatmap",
      ),
      [t.ChartEditPanelSection["Histogram"]]: _0x54dc1b.t(
        "docs-chart-ui.section.histogram",
      ),
      [t.ChartEditPanelSection["HorizontalAxis"]]: _0x54dc1b.t(
        "docs-chart-ui.common.horizontalAxis",
      ),
      [t.ChartEditPanelSection["IndicatorLine"]]: _0x54dc1b.t(
        "docs-chart-ui.section.indicatorLine",
      ),
      [t.ChartEditPanelSection["Legend"]]: _0x54dc1b.t(
        "docs-chart-ui.common.legend",
      ),
      [t.ChartEditPanelSection["LineAndArea"]]: _0x54dc1b.t(
        "docs-chart-ui.section.lineAndArea",
      ),
      [t.ChartEditPanelSection["ParetoBarSeries"]]: _0x54dc1b.t(
        "docs-chart-ui.section.paretoBar",
      ),
      [t.ChartEditPanelSection["ParetoLineSeries"]]: _0x54dc1b.t(
        "docs-chart-ui.section.paretoLine",
      ),
      [t.ChartEditPanelSection["PieStyle"]]: _0x54dc1b.t(
        "docs-chart-ui.section.pie",
      ),
      [t.ChartEditPanelSection["Radar"]]: _0x54dc1b.t(
        "docs-chart-ui.section.radar",
      ),
      [t.ChartEditPanelSection["Relation"]]: _0x54dc1b.t(
        "docs-chart-ui.section.relation",
      ),
      [t.ChartEditPanelSection["RightVerticalAxis"]]: _0x54dc1b.t(
        "docs-chart-ui.common.rightVerticalAxis",
      ),
      [t.ChartEditPanelSection["Series"]]: _0x54dc1b.t(
        "docs-chart-ui.common.series",
      ),
      [t.ChartEditPanelSection["Sunburst"]]: _0x54dc1b.t(
        "docs-chart-ui.section.sunburst",
      ),
      [t.ChartEditPanelSection["Treemap"]]: _0x54dc1b.t(
        "docs-chart-ui.section.treemap",
      ),
      [t.ChartEditPanelSection["Trendline"]]: _0x54dc1b.t(
        "docs-chart-ui.common.trendline",
      ),
      [t.ChartEditPanelSection["VerticalAxis"]]: _0x54dc1b.t(
        "docs-chart-ui.common.verticalAxis",
      ),
      [t.ChartEditPanelSection["WaterfallSeries"]]: _0x54dc1b.t(
        "docs-chart-ui.section.waterfall",
      ),
      [t.ChartEditPanelSection["WordCloud"]]: _0x54dc1b.t(
        "docs-chart-ui.section.wordCloud",
      ),
    };
  (0, a.useEffect)(() => {
    var _0xfa9bcd;
    (_0xfa9bcd = _0x114dc2.route) != null &&
      _0xfa9bcd.section &&
      _0x74ab3c(_0x114dc2.route["section"]);
  }, [_0x114dc2.route]);
  let _0x547dd1 = {
    [t.ChartEditPanelSection["ChartStyle"]]: (0, o.jsx)(t.ChartStyleSection, {
      defaultValues: E.style,
    }),
    [t.ChartEditPanelSection["ChartAndAxisTitles"]]: (0, o.jsxs)("div", {
      className: "univer-flex univer-flex-col univer-gap-3",
      children: [
        (0, o.jsx)(t.ChartMainTitleFields, {
          commitMode: "change",
          defaultValues: E.titles,
          showFont: false,
        }),
        (0, o.jsx)(t.ChartSubtitleFields, {
          commitMode: "change",
          defaultValues: E.titles,
          showFont: false,
        }),
        (0, o.jsx)(t.ChartAxisTitleFields, {
          axis: "x",
          commitMode: "change",
          defaultValues: E.titles,
          showAlignment: false,
          showFont: false,
        }),
        (0, o.jsx)(t.ChartAxisTitleFields, {
          axis: "y",
          commitMode: "change",
          defaultValues: E.titles,
          showAlignment: false,
          showFont: false,
        }),
        (0, o.jsx)(t.ChartAxisTitleFields, {
          axis: "rightY",
          commitMode: "change",
          defaultValues: E.titles,
          showAlignment: false,
          showFont: false,
        }),
        (0, o.jsx)(t.ChartTitleFontSizeFields, { defaultValues: E.titles }),
      ],
    }),
    [t.ChartEditPanelSection["Series"]]: (0, o.jsxs)(t.ChartSeriesRoot, {
      defaultValues: E.series,
      NumberFormatField: t.ChartNumberFormatTextField,
      selectedSeriesId:
        (_0x48d4c3 = _0x114dc2.route) == null ? undefined : _0x48d4c3.seriesId,
      children: [
        (0, o.jsx)(t.ChartSeriesFillFields, {}),
        (0, o.jsx)(t.ChartSeriesBorderFields, {
          showColor: false,
          showOpacity: false,
        }),
        (0, o.jsx)(t.ChartSeriesPointFields, { showColor: false }),
        (0, o.jsx)(t.ChartSeriesLabelVisibilityField, {}),
        (0, o.jsx)(t.ChartSeriesLabelPositionField, {}),
        (0, o.jsx)(t.ChartSeriesLabelFontSizeField, {}),
      ],
    }),
    [t.ChartEditPanelSection["LineAndArea"]]: (0, o.jsx)(
      t.ChartLineAndAreaSection,
      { defaultValues: E.lineAndArea, lineStyleControl: "select" },
    ),
    [t.ChartEditPanelSection["WordCloud"]]: (0, o.jsxs)(t.ChartWordCloudRoot, {
      children: [
        (0, o.jsx)(t.ChartWordCloudShapeField, { defaultValues: E.wordCloud }),
        (0, o.jsx)(t.ChartWordCloudRepeatField, { defaultValues: E.wordCloud }),
      ],
    }),
    [t.ChartEditPanelSection["Radar"]]: (0, o.jsx)(t.ChartRadarStyleSection, {
      defaultValues: E.radar,
    }),
    [t.ChartEditPanelSection["WaterfallSeries"]]: (0, o.jsx)(
      t.ChartWaterfallStyleSection,
      {
        defaultValues: E.waterfallStyle,
        NumberFormatField: t.ChartNumberFormatTextField,
        selectedSeriesId:
          (_0x31f97e = _0x114dc2.route) == null
            ? undefined
            : _0x31f97e.seriesId,
      },
    ),
    [t.ChartEditPanelSection["ParetoBarSeries"]]: (0, o.jsx)(
      t.ChartParetoSeriesSection,
      {
        defaultValues: E.pareto,
        NumberFormatField: t.ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "barStyle",
      },
    ),
    [t.ChartEditPanelSection["ParetoLineSeries"]]: (0, o.jsx)(
      t.ChartParetoSeriesSection,
      {
        defaultValues: E.pareto,
        NumberFormatField: t.ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "cumulativeLineStyle",
      },
    ),
    [t.ChartEditPanelSection["PieStyle"]]: (0, o.jsx)(t.ChartPieStyleSection, {
      defaultValues: E.pie,
      NumberFormatField: t.ChartNumberFormatTextField,
    }),
    [t.ChartEditPanelSection["Funnel"]]: (0, o.jsx)(t.ChartFunnelStyleSection, {
      defaultValues: E.funnel,
      gapControl: "number",
    }),
    [t.ChartEditPanelSection["Heatmap"]]: (0, o.jsx)(
      t.ChartHeatmapStyleSection,
      { defaultValues: E.heatmap },
    ),
    [t.ChartEditPanelSection["Relation"]]: (0, o.jsx)(
      t.ChartRelationStyleSection,
      { defaultValues: E.relation },
    ),
    [t.ChartEditPanelSection["Legend"]]: (0, o.jsx)(t.ChartLegendRoot, {
      defaultValues: E.legend,
      children: (0, o.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
        children: [
          (0, o.jsx)(t.ChartLegendPositionField, {}),
          (0, o.jsx)(t.ChartLegendWrapField, {}),
          (0, o.jsx)(t.ChartLegendSelectModeField, {}),
          (0, o.jsx)(t.ChartLegendFontSizeField, {}),
        ],
      }),
    }),
    [t.ChartEditPanelSection["HorizontalAxis"]]: (0, o.jsx)(A, { axis: "x" }),
    [t.ChartEditPanelSection["VerticalAxis"]]: (0, o.jsx)(A, { axis: "y" }),
    [t.ChartEditPanelSection["RightVerticalAxis"]]: (0, o.jsx)(A, {
      axis: "rightY",
    }),
    [t.ChartEditPanelSection["GridlinesAndTicks"]]: (0, o.jsxs)("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [
        (0, o.jsx)(t.ChartGridlineVisibilityField, {
          axis: "x",
          defaultValues: E.axis,
          label: _0x54dc1b.t("docs-chart-ui.common.horizontalAxis"),
        }),
        (0, o.jsx)(t.ChartGridlineVisibilityField, {
          axis: "y",
          defaultValues: E.axis,
          label: _0x54dc1b.t("docs-chart-ui.common.verticalAxis"),
        }),
        (0, o.jsxs)("div", {
          className: "univer-grid univer-grid-cols-2 univer-gap-2",
          children: [
            (0, o.jsx)(t.ChartGridlineWidthField, {
              axis: "x",
              defaultValues: E.axis,
            }),
            (0, o.jsx)(t.ChartGridlineWidthField, {
              axis: "y",
              defaultValues: E.axis,
            }),
          ],
        }),
      ],
    }),
    [t.ChartEditPanelSection["IndicatorLine"]]: (0, o.jsxs)("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [
        (0, o.jsx)(t.ChartIndicatorLineColorField, {
          defaultValues: E.indicatorLine,
        }),
        (0, o.jsx)(t.ChartIndicatorLineTypeField, {
          defaultValues: E.indicatorLine,
        }),
      ],
    }),
    [t.ChartEditPanelSection["Candlestick"]]: _0xd46060,
    [t.ChartEditPanelSection["Histogram"]]: _0xd46060,
    [t.ChartEditPanelSection["Treemap"]]: _0xd46060,
    [t.ChartEditPanelSection["Sunburst"]]: _0xd46060,
    [t.ChartEditPanelSection["Gauge"]]: _0xd46060,
    [t.ChartEditPanelSection["Chord"]]: _0xd46060,
  };
  return (0, o.jsx)(t.ChartSectionAccordion, {
    value: _0x35d19a,
    onChange: _0x74ab3c,
    children: k(_0x452da3, _0x3d0aef).map((_0x1ea77f) =>
      (0, o.jsx)(
        O,
        {
          id: _0x1ea77f,
          label: _0x17ad09[_0x1ea77f],
          children: _0x547dd1[_0x1ea77f],
        },
        _0x1ea77f,
      ),
    ),
  });
}
function ne(_0x3637ed) {
  var _0x417240;
  let _0x276f68 = (0, i.useDependency)(e.LocaleService),
    [_0x2fb056, _0xb142c5] = (0, a.useState)(
      ((_0x417240 = _0x3637ed.initialRoute) == null
        ? undefined
        : _0x417240.tab) ?? t.ChartEditPanelTab["Data"],
    ),
    _0x15c17a = (0, a.useMemo)(
      () =>
        (0, t.buildChartTypeSelectOptions)(
          t.CHART_TYPE_CATALOG["map"]((_0x10fbde) => ({
            ..._0x10fbde,
            label: _0x276f68.t("docs-chart-ui.chartTypes." + _0x10fbde.labelId),
          })),
        ),
      [_0x276f68],
    );
  return (
    (0, a.useEffect)(() => {
      var _0x2a32f4;
      (_0x2a32f4 = _0x3637ed.initialRoute) != null &&
        _0x2a32f4.tab &&
        _0xb142c5(_0x3637ed.initialRoute["tab"]);
    }, [_0x3637ed.initialRoute]),
    (0, o.jsxs)("div", {
      className:
        "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [
        (0, o.jsx)(t.ChartEditPanelTabs, {
          ariaLabel: _0x276f68.t("docs-chart-ui.common.editChart"),
          className: "univer-shrink-0\x20univer-px-3",
          items: [
            {
              label: _0x276f68.t("docs-chart-ui.common.setup"),
              panelId: j,
              value: t.ChartEditPanelTab["Data"],
            },
            {
              label: _0x276f68.t("docs-chart-ui.common.customize"),
              panelId: re,
              value: t.ChartEditPanelTab["Style"],
            },
          ],
          value: _0x2fb056,
          onChange: _0xb142c5,
        }),
        _0x2fb056 === t.ChartEditPanelTab["Data"]
          ? (0, o.jsx)(t.ChartEditPanel, {
              id: j,
              label: _0x276f68.t("docs-chart-ui.common.setup"),
              children: (0, o.jsxs)("div", {
                className:
                  "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                children: [
                  (0, o.jsx)(t.ChartTypeField, {
                    options: _0x15c17a,
                    onChange: _0x3637ed.onPreviewChartTypeChange,
                  }),
                  (0, o.jsx)(t.ChartTypeSpecificSetupSection, {}),
                  (0, o.jsx)(t.ChartThemeField, {}),
                  (0, o.jsx)(D, {}),
                  (0, o.jsx)(t.ChartStackField, {}),
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)(t.ChartEditBlockTitle, {
                        title: _0x276f68.t("docs-chart-ui.common.data"),
                      }),
                      (0, o.jsx)(r.Button, {
                        className: "univer-w-full univer-justify-start",
                        onClick: _0x3637ed.onModifyData,
                        children: _0x276f68.t("docs-chart-ui.common.editData"),
                      }),
                    ],
                  }),
                  (0, o.jsx)(t.ChartCommonDataMappingSection, {}),
                  (0, o.jsx)(t.ChartTypeSpecificDataSection, {}),
                  (0, o.jsx)(t.ChartWaterfallSetupFields, {
                    defaultValues: E.waterfall,
                  }),
                ],
              }),
            })
          : (0, o.jsx)(t.ChartEditPanel, {
              id: re,
              label: _0x276f68.t("docs-chart-ui.common.customize"),
              children: (0, o.jsx)(te, { route: _0x3637ed.initialRoute }),
            }),
        _0x3637ed.onClose &&
          (0, o.jsx)("div", {
            className:
              "univer-flex univer-shrink-0 univer-justify-end univer-px-1 univer-pb-4 univer-pt-4",
            children: (0, o.jsx)(r.Button, {
              type: "button",
              variant: "default",
              onClick: _0x3637ed.onClose,
              children: _0x276f68.t("docs-chart-ui.close"),
            }),
          }),
      ],
    })
  );
}
const j = "doc-chart-setup-panel",
  re = "doc-chart-style-panel";
function M(_0x2fe2ae) {
  "@babel/helpers - typeof";
  return (
    (M =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2ac818) {
            return typeof _0x2ac818;
          }
        : function (_0x358e89) {
            return _0x358e89 &&
              typeof Symbol == "function" &&
              _0x358e89.constructor === Symbol &&
              _0x358e89 !== Symbol.prototype
              ? "symbol"
              : typeof _0x358e89;
          }),
    M(_0x2fe2ae)
  );
}
function ie(_0x1272f4, _0x31611e) {
  if (M(_0x1272f4) != "object" || !_0x1272f4) return _0x1272f4;
  var _0x33bc0e = _0x1272f4[Symbol.toPrimitive];
  if (_0x33bc0e !== undefined) {
    var _0x5abf9c = _0x33bc0e.call(_0x1272f4, _0x31611e || "default");
    if (M(_0x5abf9c) != "object") return _0x5abf9c;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x31611e === "string" ? String : Number)(_0x1272f4);
}
function ae(_0x4946af) {
  var _0xe8a0bd = ie(_0x4946af, "string");
  return M(_0xe8a0bd) == "symbol" ? _0xe8a0bd : _0xe8a0bd + "";
}
function N(_0x339016, _0x28cfa4, _0x3c4989) {
  return (
    (_0x28cfa4 = ae(_0x28cfa4)) in _0x339016
      ? Object.defineProperty(_0x339016, _0x28cfa4, {
          value: _0x3c4989,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x339016[_0x28cfa4] = _0x3c4989),
    _0x339016
  );
}
var P = class extends e.Disposable {
  constructor(
    _0x14c142,
    _0x4a73cc,
    _0x4b4b03,
    _0x43d684,
    _0xb40287 = true,
    _0x492cb5,
  ) {
    (super(),
      (this.chartId = _0x14c142),
      (this._host = _0x4a73cc),
      (this._applyHostStyle = _0x4b4b03),
      (this._getRenderRect = _0x43d684),
      (this._manageHostSize = _0xb40287),
      (this._getRenderScale = _0x492cb5),
      N(this, "mode", n.ChartRenderMode["Dom"]),
      N(this, "_frameNode", null),
      N(this, "_mountNode", null),
      N(this, "_hostStyle", {}));
  }
  getRect() {
    var _0x2e4d02;
    let _0x13b4f0 =
      (_0x2e4d02 = this._getRenderRect) == null
        ? undefined
        : _0x2e4d02.call(this);
    if (_0x13b4f0)
      return {
        width: Math.max(1, _0x13b4f0.width),
        height: Math.max(1, _0x13b4f0.height),
      };
    let _0x4a7038 = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(1, _0x4a7038.width),
      height: Math.max(1, _0x4a7038.height),
    };
  }
  setStyle(_0x30e86e) {
    ((this._hostStyle = _0x30e86e),
      this._frameNode && this._applyHostStyle(this._frameNode, _0x30e86e));
  }
  async ensureMount() {
    if (!this._mountNode) {
      let _0x28e9c9 = document.createElement("div");
      ((_0x28e9c9.style["position"] = "absolute"),
        (_0x28e9c9.style["left"] = "0"),
        (_0x28e9c9.style["top"] = "0"));
      let _0x1858f4 = document.createElement("div");
      ((_0x1858f4.style["position"] = "relative"),
        (_0x1858f4.style["border"] = "0"),
        (_0x1858f4.style["boxSizing"] = "content-box"),
        (_0x1858f4.style["overflow"] = "hidden"),
        (_0x1858f4.className = "doc-chart-host"),
        _0x28e9c9.appendChild(_0x1858f4),
        this._host["appendChild"](_0x28e9c9),
        (this._frameNode = _0x28e9c9),
        (this._mountNode = _0x1858f4),
        this._applyHostStyle(_0x28e9c9, this._hostStyle));
    }
    return (this.syncLayout(), this._mountNode);
  }
  checkMounted() {
    return !!(this._mountNode && this._host["contains"](this._mountNode));
  }
  syncLayout() {
    var _0x50f6e6;
    let _0x3548f8 = this.getRect(),
      _0x2ba01c =
        (_0x50f6e6 = this._getRenderScale) == null
          ? undefined
          : _0x50f6e6.call(this),
      _0x1fb8dc = (_0x2ba01c == null ? undefined : _0x2ba01c.scaleX) ?? 1,
      _0x3a5c53 = (_0x2ba01c == null ? undefined : _0x2ba01c.scaleY) ?? 1;
    (this._manageHostSize &&
      this._setElementSize(this._host, {
        width: _0x3548f8.width * _0x1fb8dc,
        height: _0x3548f8.height * _0x3a5c53,
      }),
      this._frameNode &&
        (this._setElementSize(this._frameNode, _0x3548f8),
        this._getRenderScale &&
          ((this._frameNode["style"].transform =
            "scale(" + _0x1fb8dc + ",\x20" + _0x3a5c53 + ")"),
          (this._frameNode["style"].transformOrigin = "top left"))),
      this._mountNode &&
        this._setElementSize(this._mountNode, this._getContentRect(_0x3548f8)));
  }
  markReady() {}
  markNotReady() {}
  dispose() {
    var _0x376755;
    ((_0x376755 = this._frameNode) == null || _0x376755.remove(),
      (this._frameNode = null),
      (this._mountNode = null),
      super.dispose());
  }
  _setElementSize(_0x3abaf7, _0xee2f8) {
    ((_0x3abaf7.style["width"] = _0xee2f8.width + "px"),
      (_0x3abaf7.style["height"] = _0xee2f8.height + "px"));
  }
  _getContentRect(_0x3a3032) {
    if (!(0, n.shouldComposeChartHostFrame)(this._hostStyle)) return _0x3a3032;
    let _0x49bfd9 = (0, n.getChartHostFrameContentRect)(
      _0x3a3032,
      this._hostStyle,
    );
    return { width: _0x49bfd9.width, height: _0x49bfd9.height };
  }
};
function oe(_0xc6553f) {
  var _0x2c6140;
  let _0x1477e0 =
    (_0x2c6140 = _0xc6553f.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null
      ? undefined
      : _0x2c6140[1];
  if (_0x1477e0) {
    let _0x5dd705 =
      _0x1477e0.length === 3
        ? _0x1477e0
            .split("")
            .map((_0x5eb64c) => "" + _0x5eb64c + _0x5eb64c)
            .join("")
        : _0x1477e0;
    return (
      "rgb(" +
      Number.parseInt(_0x5dd705.slice(0, 2), 16) +
      ",\x20" +
      Number.parseInt(_0x5dd705.slice(2, 4), 16) +
      ",\x20" +
      Number.parseInt(_0x5dd705.slice(4, 6), 16) +
      ")"
    );
  }
  let _0x180aae = document.createElement("span");
  return (
    (_0x180aae.style["color"] = _0xc6553f),
    _0x180aae.style["color"] || _0xc6553f
  );
}
let F = class extends e.Disposable {
  constructor(_0x5f2083, _0xe53f82, _0x51df92) {
    (super(),
      (this._localeService = _0x5f2083),
      (this._chartThemeService = _0xe53f82),
      (this._renderModelManager = _0x51df92));
  }
  createChartInstance(_0x328e81) {
    return _0x328e81
      ? this._renderModelManager["createChartInstance"](
          _0x328e81,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  createRenderInput(_0x6c4b15) {
    let _0x1e59dc = _0x6c4b15.model["config"];
    if (!_0x1e59dc)
      throw Error(
        "Document\x20chart\x20" + _0x6c4b15.chartId + " has no render config.",
      );
    let _0x59f20f = this._localeService["getDirection"]();
    return {
      chartConfig: _0x1e59dc,
      chartStyle: (0, n.resolveChartRuntimeStyle)(
        {
          ..._0x6c4b15.model["style"],
          runtime: _0x6c4b15.model["getRuntimeContext"](_0x59f20f),
          direction: _0x59f20f,
        },
        _0x1e59dc.type,
      ),
    };
  }
  createRenderSpec(_0x3a0d34, _0x3e4151, _0xe3f885) {
    let { chartConfig: _0x147280, chartStyle: _0x5a6562 } =
        this.createRenderInput(_0x3a0d34),
      _0x3b1f07 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x3b1f07.stylizeSpec(
        _0x3b1f07.toSpec(_0x147280, _0x5a6562),
        {
          chartConfig: _0x147280,
          chartStyle: _0x5a6562,
          chartInstance: _0xe3f885,
        },
        _0x3e4151,
      ),
      chartConfig: _0x147280,
      chartStyle: _0x5a6562,
      hostStyle: this.getHostStyle(_0x5a6562),
    };
  }
  getHostStyle(_0x4e7e67) {
    return (0, n.resolveDefaultChartHostFrameStyle)({
      style: _0x4e7e67,
      getRenderColor: (_0x115887) =>
        this._chartThemeService["getRenderColor"](_0x115887),
    });
  }
  applyHostStyle(_0x466734, _0x3bb406) {
    var _0x3b3491;
    let _0x30a3d2 =
      (_0x3b3491 = _0x3bb406.border) != null &&
      _0x3b3491.color &&
      _0x3bb406.border["width"]
        ? _0x3bb406.border["width"] +
          "px solid " +
          oe(_0x3bb406.border["color"])
        : "";
    ((_0x466734.style["border"] = _0x30a3d2),
      (_0x466734.style["backgroundColor"] = _0x3bb406.fill
        ? oe(_0x3bb406.fill)
        : "transparent"),
      (_0x466734.style["borderRadius"] = _0x3bb406.radius
        ? _0x3bb406.radius + "px"
        : ""),
      (_0x466734.style["overflow"] = "hidden"),
      (_0x466734.style["boxSizing"] = "border-box"));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x3d94e1 }) => this.getHostStyle(_0x3d94e1),
      resolveRenderBackgroundColor: ({ hostStyle: _0x5b3413 }) =>
        _0x5b3413.fill,
      prepareSpec: ({ mode: _0x36ea26, spec: _0x8d87d3 }) =>
        _0x36ea26 === "image"
          ? { ..._0x8d87d3, animation: false, tooltip: { show: false } }
          : _0x8d87d3,
    };
  }
  dispose() {
    super.dispose();
  }
};
F = S(
  [
    x(0, (0, e.Inject)(e.LocaleService)),
    x(1, (0, e.Inject)(n.ChartThemeService)),
    x(2, n.IChartRenderModelManagerService),
  ],
  F,
);
function I(
  _0x589a3f,
  _0x545369,
  _0x1f2570,
  _0x25361c,
  _0x2216fb,
  _0x24610a,
  _0xcd457,
) {
  let { model: _0x32275b, source: _0x313b13 } = (0, n.createChartRuntime)({
    id: _0x589a3f,
    chartType: _0x1f2570,
    dataSet: (0, n.buildChartDataSetFromValues)(
      (0, t.compactInlineTableValues)(_0x545369),
    ),
    isRowDirection:
      (_0x25361c == null ? undefined : _0x25361c.orient) !== "column",
    context: _0x25361c == null ? undefined : _0x25361c.chartContext,
    dataAggregation: _0x2216fb,
    style: _0x24610a,
    injector: _0xcd457,
  });
  return {
    unitId: "doc-chart-preview",
    chartId: _0x589a3f,
    dataSourceId: _0x589a3f + "-data-source",
    model: _0x32275b,
    source: _0x313b13,
  };
}
function se(_0x2a44c6) {
  let _0x752608 = (0, i.useDependency)(e.LocaleService),
    _0x4bdd4d = (0, i.useDependency)(e.Injector),
    _0x2bc800 = (0, i.useDependency)(F),
    _0x586277 = (0, a.useRef)(null),
    _0x46092c = (0, a.useRef)(null),
    _0x1dc724 = (0, a.useRef)(
      "doc-chart-preview-" + (0, e.generateRandomId)(8),
    ),
    [_0x1d923e, _0x3d17c3] = (0, a.useState)(null);
  return (
    (0, a.useEffect)(() => {
      let _0x4e875a = _0x586277.current;
      if (!_0x4e875a) return;
      (_0x3d17c3(null),
        _0x4e875a.replaceChildren(),
        (_0x46092c.current = L(_0x4e875a)));
      let _0x583a60 = false,
        _0x250516 = (_0xcdac5b) => {
          _0x583a60 || _0x3d17c3(_0xcdac5b);
        },
        _0x35638b = null,
        _0x5a4712 = null,
        _0x1de484 = null;
      try {
        ((_0x35638b = I(
          _0x1dc724.current,
          _0x2a44c6.values,
          _0x2a44c6.chartType,
          _0x2a44c6.context,
          _0x2a44c6.dataAggregation,
          _0x2a44c6.style,
          _0x4bdd4d,
        )),
          (_0x5a4712 = new P(
            _0x35638b.chartId,
            _0x4e875a,
            (_0xc5ec75, _0x1aaf4a) =>
              _0x2bc800.applyHostStyle(_0xc5ec75, _0x1aaf4a),
            () => _0x46092c.current ?? L(_0x4e875a),
            false,
          )),
          (_0x1de484 = _0x2bc800.createChartInstance(n.ChartRenderMode["Dom"])),
          _0x1de484.bind(_0x5a4712));
      } catch (_0x289e02) {
        return (
          _0x250516(_0x289e02),
          () => {
            ((_0x583a60 = true), _0x4e875a.replaceChildren());
          }
        );
      }
      if (!_0x35638b || !_0x5a4712 || !_0x1de484)
        return () => {
          ((_0x583a60 = true), _0x4e875a.replaceChildren());
        };
      let _0x195b7e = _0x35638b,
        _0x35d73f = _0x5a4712,
        _0x254964 = _0x1de484,
        _0x31c7ab = () => {
          let _0x2480a4, _0x31c508;
          try {
            ({ chartConfig: _0x2480a4, chartStyle: _0x31c508 } =
              _0x2bc800.createRenderInput(_0x195b7e));
          } catch (_0x5d7cf0) {
            _0x250516(_0x5d7cf0);
            return;
          }
          _0x254964
            .render({
              chartId: _0x195b7e.chartId,
              config: _0x2480a4,
              style: _0x31c508,
            })
            .then(() => {
              _0x583a60 || _0x3d17c3(null);
            })
            .catch(_0x250516);
        },
        _0xb652a4 = _0x195b7e.model["config$"].subscribe((_0x4ae300) => {
          _0x4ae300 && _0x31c7ab();
        }),
        _0x579830 =
          typeof ResizeObserver > "u"
            ? null
            : new ResizeObserver((_0x481e1b) => {
                var _0x5522ed;
                let _0x435d7b =
                  (_0x5522ed = _0x481e1b[0]) == null
                    ? undefined
                    : _0x5522ed.contentRect;
                ((_0x46092c.current =
                  _0x435d7b && _0x435d7b.width > 0 && _0x435d7b.height > 0
                    ? { width: _0x435d7b.width, height: _0x435d7b.height }
                    : L(_0x4e875a)),
                  _0x31c7ab());
              });
      return (
        _0x579830 == null || _0x579830.observe(_0x4e875a),
        () => {
          ((_0x583a60 = true),
            _0xb652a4.unsubscribe(),
            _0x579830 == null || _0x579830.disconnect(),
            _0x254964.dispose(),
            _0x35d73f.dispose(),
            _0x195b7e.model["dispose"](),
            _0x195b7e.source["dispose"](),
            _0x4e875a.replaceChildren());
        }
      );
    }, [
      _0x4bdd4d,
      _0x2a44c6.chartType,
      _0x2a44c6.context,
      _0x2a44c6.dataAggregation,
      _0x2a44c6.style,
      _0x2a44c6.values,
      _0x2bc800,
    ]),
    (0, o.jsxs)("div", {
      className:
        "univer-relative univer-box-border univer-flex univer-h-full univer-min-h-0 univer-w-full univer-min-w-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: [
        (0, o.jsx)("div", {
          ref: _0x586277,
          className:
            "univer-absolute univer-inset-0 univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-rounded-lg",
        }),
        _0x1d923e != null &&
          (0, o.jsx)("div", {
            className:
              "dark:!univer-bg-gray-900/90\x20univer-bg-gray-0/90\x20univer-absolute\x20univer-bottom-3\x20univer-left-3\x20univer-rounded\x20univer-px-2\x20univer-py-1\x20univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
            children: _0x752608.t("docs-chart-ui.previewRenderFailed"),
          }),
      ],
    })
  );
}
function L(_0xf99992) {
  let _0x5a0ca9 = _0xf99992.getBoundingClientRect();
  return _0x5a0ca9.width <= 0 || _0x5a0ca9.height <= 0
    ? null
    : { width: _0x5a0ca9.width, height: _0x5a0ca9.height };
}
const R = "doc-chart.editor-dialog",
  z = "doc-chart.dialog.editor";
function B(_0x391dfe) {
  var _0x4b3fee, _0x51269e, _0x2efda0;
  let {
      unitId: _0x219ede,
      chartId: _0x391da1,
      drawingId: _0x4a1b3f,
    } = _0x391dfe,
    _0x7543ed = (0, i.useDependency)(e.LocaleService),
    _0x57d125 = (0, i.useDependency)(e.Injector),
    _0x5e862c = (0, i.useDependency)(e.IUniverInstanceService),
    _0x389bd0 = (0, i.useDependency)(n.ChartResourceRepository),
    _0x50f1ac = (0, i.useDependency)(s.DocChartModelService),
    _0x35daa7 = (0, i.useDependency)(C),
    _0xdbd2fb = (0, i.useDependency)(w),
    _0x5ef594 = (0, a.useMemo)(
      () => _0x35daa7.getEditorState(_0x219ede, _0x391da1),
      [_0x391da1, _0x35daa7, _0x219ede],
    ),
    _0x39cd4d = _0x389bd0.getChart(_0x219ede, _0x391da1),
    _0x2b9a0d = (0, a.useMemo)(
      () =>
        _0x50f1ac == null
          ? undefined
          : _0x50f1ac.ensureChartModel(_0x219ede, _0x391da1),
      [_0x391da1, _0x50f1ac, _0x219ede],
    ),
    _0x50c9c2 = (0, i.useObservable)(
      _0x2b9a0d == null ? undefined : _0x2b9a0d.model["chartType$"],
      (_0x2b9a0d == null ? undefined : _0x2b9a0d.model["chartType"]) ??
        (_0x39cd4d == null ? undefined : _0x39cd4d.chartType),
    ),
    _0x2d9cb9 = (0, i.useObservable)(
      _0x2b9a0d == null ? undefined : _0x2b9a0d.model["context$"],
      (_0x2b9a0d == null ? undefined : _0x2b9a0d.model["context"]) ??
        (_0x39cd4d == null || (_0x4b3fee = _0x39cd4d.context) == null
          ? undefined
          : _0x4b3fee.chartContext),
    ),
    _0x1d7c26 = (0, i.useObservable)(
      _0x2b9a0d == null ? undefined : _0x2b9a0d.model["dataAggregation$"],
      (_0x2b9a0d == null ? undefined : _0x2b9a0d.model["dataAggregation"]) ??
        (_0x39cd4d == null ? undefined : _0x39cd4d.dataAggregation),
    ),
    _0x3dc799 = (0, i.useObservable)(
      _0x2b9a0d == null ? undefined : _0x2b9a0d.model["style$"],
      (_0x2b9a0d == null ? undefined : _0x2b9a0d.model["style"]) ??
        (_0x39cd4d == null ? undefined : _0x39cd4d.style),
    ),
    _0x16810f = (0, i.useObservable)(
      (0, a.useMemo)(() => {
        var _0x160d19;
        return _0x50f1ac == null ||
          (_0x160d19 = _0x50f1ac.getDataSourceRuntimeState$) == null
          ? undefined
          : _0x160d19.call(_0x50f1ac, _0x219ede, _0x391da1);
      }, [_0x391da1, _0x50f1ac, _0x219ede]),
      _0x50f1ac == null ||
        (_0x51269e = _0x50f1ac.getDataSourceRuntimeState) == null
        ? undefined
        : _0x51269e.call(_0x50f1ac, _0x219ede, _0x391da1),
    ),
    _0x4f6a31 = (0, a.useMemo)(
      () => ({
        ...(_0x39cd4d == null ? undefined : _0x39cd4d.context),
        chartContext: _0x2d9cb9,
      }),
      [_0x39cd4d == null ? undefined : _0x39cd4d.context, _0x2d9cb9],
    ),
    [_0x3c7c58, _0x5a365f] = (0, a.useState)(_0x5ef594),
    [_0x2eb034, _0x10b323] = (0, a.useState)(
      () =>
        (_0x5ef594 == null
          ? undefined
          : _0x5ef594.values["map"]((_0x40d82b) => [..._0x40d82b])) ?? [],
    ),
    [_0x14db2a, _0x2f7ed5] = (0, a.useState)(
      () =>
        (_0x5ef594 == null
          ? undefined
          : _0x5ef594.values["map"]((_0x458d63) => [..._0x458d63])) ?? [],
    ),
    [_0x220693, _0x230ea2] = (0, a.useState)(() =>
      _0x39cd4d == null ? undefined : _0x39cd4d.chartType,
    ),
    [_0x4d3f76, _0x1d1c60] = (0, a.useState)(() => {
      var _0x10ff4a;
      return ((_0x10ff4a = _0x391dfe.route) == null
        ? undefined
        : _0x10ff4a.tab) === t.ChartEditPanelTab["Data"]
        ? "data"
        : "chart";
    }),
    [_0x15c5de, _0xbfa790] = (0, a.useState)(null),
    _0x3ed1d8 =
      _0x16810f == null || (_0x2efda0 = _0x16810f.values) == null
        ? undefined
        : _0x2efda0.map((_0x59bfc6) => [..._0x59bfc6]),
    _0x336afa = (0, a.useMemo)(() => {
      var _0x83b603;
      let _0x6b6fa4 = _0x5e862c.getUnit(
        _0x219ede,
        e.UniverInstanceType["UNIVER_DOC"],
      );
      if (!_0x2b9a0d || !_0x6b6fa4) return null;
      let _0x2430ea =
        _0x4a1b3f ??
        ((_0x83b603 = Object.values(_0x6b6fa4.getDrawings() ?? {}).find(
          (_0x38dc3c) => _0x38dc3c.chartId === _0x391da1,
        )) == null
          ? undefined
          : _0x83b603.drawingId);
      return _0x2430ea
        ? new t["ChartHostAdapter"](
            _0x2b9a0d.model,
            new s.DocumentChartConfigAdapter({
              unitId: _0x219ede,
              chartId: _0x391da1,
              drawingId: _0x2430ea,
              documentDataModel: _0x6b6fa4,
              injector: _0x57d125,
            }),
          )
        : null;
    }, [_0x391da1, _0x4a1b3f, _0x57d125, _0x2b9a0d, _0x219ede, _0x5e862c]);
  return !_0x3c7c58 || !_0x39cd4d
    ? (0, o.jsx)("div", {
        className:
          "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
        children: _0x7543ed.t("docs-chart-ui.chartNotFound"),
      })
    : (0, o.jsxs)("div", {
        className:
          "univer-flex\x20univer-w-full\x20univer-min-w-0\x20univer-flex-col\x20univer-overflow-hidden\x20univer-overscroll-contain",
        style: { height: "min(560px, calc(100vh - 180px))" },
        children: [
          (0, o.jsx)(t.ChartEditPanelTabs, {
            ariaLabel: _0x7543ed.t("docs-chart-ui.common.editChart"),
            className: "univer-shrink-0",
            value: _0x4d3f76,
            items: [
              {
                label: _0x7543ed.t("docs-chart-ui.floatMenu.menuTitle.chart"),
                panelId: ce,
                value: "chart",
              },
              {
                label: _0x7543ed.t("docs-chart-ui.common.data"),
                panelId: le,
                value: "data",
              },
            ],
            variant: "segmented",
            onChange: _0x1d1c60,
          }),
          (0, o.jsxs)("div", {
            id: _0x4d3f76 === "data" ? le : ce,
            "aria-labelledby": (_0x4d3f76 === "data" ? le : ce) + "-tab",
            className: "univer-min-h-0 univer-flex-1 univer-pt-4",
            role: "tabpanel",
            children: [
              _0x4d3f76 === "data"
                ? (0, o.jsx)(b, {
                    values: _0x3ed1d8 ?? _0x2eb034,
                    dataSource: _0x3c7c58.dataSource,
                    sharingCount: _0x3c7c58.sharingCount,
                    onCancel: () => _0x1d1c60("chart"),
                    onSubmit: (_0x373e73, _0x271dce) => {
                      if (
                        !_0x35daa7.updateData(
                          _0x219ede,
                          _0x391da1,
                          _0x373e73,
                          _0x271dce,
                        )
                      ) {
                        _0xbfa790(
                          _0x7543ed.t("docs-chart-ui.updateChartFailed"),
                        );
                        return;
                      }
                      _0xbfa790(null);
                      let _0x2ba525 = _0x35daa7.getEditorState(
                        _0x219ede,
                        _0x391da1,
                      );
                      (_0x5a365f(_0x2ba525 ?? _0x3c7c58),
                        _0x10b323(
                          (_0x2ba525 == null ? undefined : _0x2ba525.values) ??
                            _0x373e73,
                        ),
                        _0x2f7ed5(
                          (_0x2ba525 == null ? undefined : _0x2ba525.values) ??
                            _0x373e73,
                        ),
                        _0x1d1c60("chart"));
                    },
                    onDataSourceSubmit: (_0x173f32) => {
                      if (
                        !_0x35daa7.changeDataSource(
                          _0x219ede,
                          _0x391da1,
                          _0x173f32,
                        )
                      ) {
                        _0xbfa790(
                          _0x7543ed.t("docs-chart-ui.updateChartFailed"),
                        );
                        return;
                      }
                      (_0xbfa790(null),
                        _0x5a365f(
                          _0x35daa7.getEditorState(_0x219ede, _0x391da1) ??
                            _0x3c7c58,
                        ),
                        _0x1d1c60("chart"));
                    },
                  })
                : (0, o.jsxs)("div", {
                    className:
                      "univer-flex univer-size-full univer-min-w-0 univer-gap-5",
                    children: [
                      (0, o.jsx)("div", {
                        className:
                          "univer-min-h-0\x20univer-min-w-0\x20univer-flex-1\x20univer-overflow-hidden",
                        children: (0, o.jsx)(se, {
                          values: _0x3ed1d8 ?? _0x14db2a,
                          chartType:
                            _0x50c9c2 ?? _0x220693 ?? _0x39cd4d.chartType,
                          context: _0x4f6a31,
                          dataAggregation: _0x1d7c26,
                          style: _0x3dc799,
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "univer-flex\x20univer-min-h-0\x20univer-w-[388px]\x20univer-shrink-0\x20univer-flex-col\x20univer-gap-4\x20univer-overflow-hidden\x20univer-overscroll-contain",
                        children: [
                          (0, o.jsx)("div", {
                            className: "univer-min-h-0 univer-flex-1",
                            children: _0x336afa
                              ? (0, o.jsx)(t.ChartEditorProvider, {
                                  chartUIService: _0xdbd2fb,
                                  hostAdapter: _0x336afa,
                                  children: (0, o.jsx)(ne, {
                                    initialRoute: _0x391dfe.route,
                                    onClose: _0x391dfe.onClose,
                                    onPreviewChartTypeChange: _0x230ea2,
                                    onModifyData: () => _0x1d1c60("data"),
                                  }),
                                })
                              : (0, o.jsx)("div", {
                                  className:
                                    "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
                                  children: _0x7543ed.t(
                                    "docs-chart-ui.chartNotFound",
                                  ),
                                }),
                          }),
                          _0x15c5de &&
                            (0, o.jsx)("div", {
                              className:
                                "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
                              children: _0x15c5de,
                            }),
                        ],
                      }),
                    ],
                  }),
              _0x4d3f76 === "data" &&
                _0x15c5de &&
                (0, o.jsx)("div", {
                  className:
                    "univer-mt-2 univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
                  children: _0x15c5de,
                }),
            ],
          }),
        ],
      });
}
const ce = "doc-chart-editor-panel",
  le = "doc-chart-data-panel";
function V(_0x5d7cff, _0x3156c0) {
  var _0x5e5d16;
  if (
    !(_0x3156c0 != null && _0x3156c0.collapsed) ||
    _0x3156c0.startOffset == null
  )
    return null;
  let _0x523772 = _0x3156c0.segmentId ?? "";
  if (_0x523772 !== "") return null;
  let _0x28cb37 =
    (_0x5e5d16 = _0x5d7cff.getSelfOrHeaderFooterModel(_0x523772)) == null
      ? undefined
      : _0x5e5d16.getBody();
  if (!_0x28cb37) return null;
  let _0x4e28e8 = ue(_0x28cb37, _0x3156c0.startOffset);
  if (!de(_0x28cb37, _0x4e28e8)) return null;
  let _0x38b188 = pe(_0x28cb37, _0x4e28e8);
  return _0x38b188
    ? {
        unitId: _0x5d7cff.getUnitId(),
        index: _0x38b188.index,
        segmentId: _0x523772,
        breakOffsets: _0x38b188.breakOffsets,
      }
    : null;
}
function ue(_0x278377, _0x591426) {
  return _0x591426 === 0 &&
    _0x278377.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"]
    ? 1
    : _0x591426;
}
function de(_0x3200da, _0x3e5c20) {
  return !(
    ge(_0x3200da.tables, _0x3e5c20) ||
    _e(_0x3200da.blockRanges, _0x3e5c20) ||
    ve(_0x3200da.customBlocks, _0x3e5c20)
  );
}
function fe(_0x5f19d1, _0x537107) {
  let { dataStream: _0x5705af } = _0x5f19d1;
  if (!_0x5705af || _0x537107 < 0 || _0x537107 >= _0x5705af.length)
    return false;
  let _0x15c465 = me(_0x5705af, _0x537107) + 1,
    _0x35f06f = he(_0x5705af, _0x537107);
  return (
    _0x15c465 <= _0x35f06f && _0x5705af.slice(_0x15c465, _0x35f06f).length === 0
  );
}
function pe(_0x1bcc47, _0x5f26b4) {
  let { dataStream: _0x8ff1a9 } = _0x1bcc47;
  if (!_0x8ff1a9 || _0x5f26b4 < 0 || _0x5f26b4 >= _0x8ff1a9.length) return null;
  if (fe(_0x1bcc47, _0x5f26b4)) return { index: _0x5f26b4, breakOffsets: [] };
  let _0x37dc59 = me(_0x8ff1a9, _0x5f26b4) + 1,
    _0x11e9d0 = he(_0x8ff1a9, _0x5f26b4);
  return _0x5f26b4 <= _0x37dc59
    ? { index: _0x5f26b4, breakOffsets: [_0x5f26b4] }
    : _0x5f26b4 >= _0x11e9d0
      ? { index: _0x5f26b4 + 1, breakOffsets: [_0x5f26b4] }
      : { index: _0x5f26b4 + 1, breakOffsets: [_0x5f26b4, _0x5f26b4 + 1] };
}
function me(_0x294c8c, _0x2acc82) {
  let _0x4ba36a = Math.max(0, Math.min(_0x2acc82 - 1, _0x294c8c.length - 1));
  return Math.max(
    _0x294c8c.lastIndexOf(e.DataStreamTreeTokenType["PARAGRAPH"], _0x4ba36a),
    _0x294c8c.lastIndexOf(
      e.DataStreamTreeTokenType["SECTION_BREAK"],
      _0x4ba36a,
    ),
  );
}
function he(_0x56bced, _0x37180a) {
  let _0x665fe2 = Math.max(0, Math.min(_0x37180a, _0x56bced.length - 1)),
    _0x47d89a = _0x56bced.indexOf(
      e.DataStreamTreeTokenType["PARAGRAPH"],
      _0x665fe2,
    ),
    _0x3bff3c = _0x56bced.indexOf(
      e.DataStreamTreeTokenType["SECTION_BREAK"],
      _0x665fe2,
    );
  return _0x47d89a === -1 && _0x3bff3c === -1
    ? _0x56bced.length
    : _0x47d89a === -1
      ? _0x3bff3c
      : _0x3bff3c === -1
        ? _0x47d89a
        : Math.min(_0x47d89a, _0x3bff3c);
}
function ge(_0x2e066b, _0x331aa7) {
  return !!(
    _0x2e066b != null &&
    _0x2e066b.some(
      (_0xbdf398) =>
        _0xbdf398.startIndex <= _0x331aa7 && _0x331aa7 < _0xbdf398.endIndex,
    )
  );
}
function _e(_0x14911b, _0x16cbc8) {
  return !!(
    _0x14911b != null &&
    _0x14911b.some(
      (_0x5afca6) =>
        _0x5afca6.startIndex <= _0x16cbc8 && _0x16cbc8 <= _0x5afca6.endIndex,
    )
  );
}
function ve(_0x2147e2, _0x46f606) {
  return !!(
    _0x2147e2 != null &&
    _0x2147e2.some((_0x1b9f32) => _0x1b9f32.startIndex === _0x46f606)
  );
}
let H = class {
  constructor(_0x5b3b8d, _0xaf11a0, _0x40977a, _0x2ad39e) {
    ((this._instanceService = _0x5b3b8d),
      (this._commandService = _0xaf11a0),
      (this._docSelectionManagerService = _0x40977a),
      (this._docContentInsertService = _0x2ad39e));
  }
  insertChartFromText(_0x15342c, _0x24e215, _0x1eb39d) {
    let _0x59dcbd = (0, n.parseInlineChartTable)(_0x15342c);
    return (
      _0x59dcbd.length !== 0 &&
      this.insertChart(_0x59dcbd, _0x24e215, _0x1eb39d)
    );
  }
  insertChart(_0xb9ab09, _0x271714, _0x2d6f1f = {}) {
    if (_0xb9ab09.length === 0) return false;
    let _0x5c2f91 = (0, t.tryPrepareInlineChartData)(_0x271714, _0xb9ab09);
    if (!_0x5c2f91.ok) return false;
    let _0xe95f46 = this._instanceService["getCurrentUnitOfType"](
      e.UniverInstanceType["UNIVER_DOC"],
    );
    if (!_0xe95f46) return false;
    let _0x116bb0 = this._resolveInsertPosition(
      _0xe95f46,
      _0x2d6f1f.insertRange,
    );
    if (
      !_0x116bb0 ||
      !this._prepareStandaloneInsertLine(
        _0x116bb0.breakOffsets,
        _0x116bb0.segmentId,
      )
    )
      return false;
    let _0x259e15 = _0x116bb0.unitId,
      _0x275ca6 = { chartType: _0x271714 };
    (_0x2d6f1f.context && (_0x275ca6.context = _0x2d6f1f.context),
      _0x2d6f1f.dataAggregation &&
        (_0x275ca6.dataAggregation = _0x2d6f1f.dataAggregation),
      _0x2d6f1f.style && (_0x275ca6.style = _0x2d6f1f.style));
    let _0x189075 = this._commandService["syncExecuteCommand"](
      s.InsertDocChartCommand["id"],
      {
        unitId: _0x259e15,
        textRange: {
          startOffset: _0x116bb0.index,
          endOffset: _0x116bb0.index,
          collapsed: true,
          segmentId: _0x116bb0.segmentId,
        },
        chart: _0x275ca6,
        dataSource: _0x2d6f1f.dataSource ?? { values: _0x5c2f91.values },
        width: _0x2d6f1f.width,
        height: _0x2d6f1f.height,
        focus: _0x2d6f1f.focus,
      },
    );
    return _0x189075 ? { ..._0x189075, unitId: _0x259e15 } : false;
  }
  _resolveInsertPosition(_0x51c261, _0x8e3f29) {
    if (_0x8e3f29) return V(_0x51c261, _0x8e3f29);
    let _0x590ff2 = _0x51c261.getUnitId(),
      _0x2290f6 = null;
    try {
      _0x2290f6 =
        this._docContentInsertService["consumeInsertRange"](_0x590ff2);
    } catch {
      _0x2290f6 = null;
    }
    return _0x2290f6
      ? V(_0x51c261, {
          startOffset: _0x2290f6.startOffset,
          endOffset: _0x2290f6.endOffset,
          collapsed: _0x2290f6.startOffset === _0x2290f6.endOffset,
          segmentId: _0x2290f6.segmentId ?? "",
        })
      : V(
          _0x51c261,
          ye(this._docSelectionManagerService["getActiveTextRange"]()),
        );
  }
  _prepareStandaloneInsertLine(_0x35ba3b, _0x4d345c) {
    for (let _0x419f58 of _0x35ba3b)
      if (
        !this._commandService["syncExecuteCommand"](l.BreakLineCommand["id"], {
          textRange: {
            startOffset: _0x419f58,
            endOffset: _0x419f58,
            collapsed: true,
            segmentId: _0x4d345c,
          },
        })
      )
        return false;
    return true;
  }
};
H = S(
  [
    x(0, e.IUniverInstanceService),
    x(1, e.ICommandService),
    x(2, (0, e.Inject)(c.DocSelectionManagerService)),
    x(3, (0, e.Inject)(c.DocContentInsertService)),
  ],
  H,
);
function ye(_0x11a332) {
  return !_0x11a332 || typeof _0x11a332 != "object" ? null : _0x11a332;
}
const be = "doc-chart.insert-panel",
  xe = ["Category\tValue", "A\x0912", "B\x0918", "C\t9"].join("\x0a");
function Se(_0x3eef6f) {
  let _0x1b51ce = (0, i.useDependency)(H),
    _0x554113 = (0, i.useDependency)(e.LocaleService),
    {
      defaultChartType: _0x210d86 = n.ChartTypeBits["Column"],
      defaultTableText: _0x5c2dbf = xe,
      insertOptions: _0xb1e6d7,
      onCancel: _0x11324b,
      onInserted: _0x5d22ad,
    } = _0x3eef6f,
    _0x42f4ae = (0, a.useMemo)(
      () =>
        (0, t.buildChartTypeSelectOptions)(
          t.CHART_TYPE_CATALOG["map"]((_0x4bf99b) => ({
            ..._0x4bf99b,
            label: _0x554113.t("docs-chart-ui.chartTypes." + _0x4bf99b.labelId),
          })),
        ),
      [_0x554113],
    ),
    [_0x3af6b9, _0x14bafc] = (0, a.useState)(String(_0x210d86)),
    _0x42748e = _0x42f4ae.find((_0x59be0c) => _0x59be0c.value === _0x3af6b9),
    _0x5d1a00 =
      (_0x42748e == null ? undefined : _0x42748e.chartType) ?? _0x210d86,
    _0xc86300 = (_0x23db54) =>
      (0, t.createChartInlineStarterData)(_0x23db54, {
        candlestickClose: _0x554113.t("docs-chart-ui.candlestick.close"),
        candlestickHigh: _0x554113.t("docs-chart-ui.candlestick.high"),
        candlestickLow: _0x554113.t("docs-chart-ui.candlestick.low"),
        candlestickOpen: _0x554113.t("docs-chart-ui.candlestick.open"),
        category: _0x554113.t("docs-chart-ui.common.category"),
        chordSource: _0x554113.t("docs-chart-ui.chord.source"),
        chordTarget: _0x554113.t("docs-chart-ui.chord.target"),
        label: _0x554113.t("docs-chart-ui.common.label"),
        sunburstHierarchy: _0x554113.t("docs-chart-ui.sunburst.hierarchy"),
        value: _0x554113.t("docs-chart-ui.common.value"),
        valueField: _0x554113.t("docs-chart-ui.common.valueField"),
      }),
    [_0x298f7a, _0x56c97b] = (0, a.useState)(() =>
      _0x3eef6f.defaultTableText === undefined
        ? (_0xc86300(_0x210d86) ?? (0, n.parseInlineChartTable)(_0x5c2dbf))
        : (0, n.parseInlineChartTable)(_0x5c2dbf),
    ),
    [_0xc474db, _0x247f00] = (0, a.useState)("inline"),
    [_0xfbe39e, _0x5cf82b] = (0, a.useState)(null),
    [_0x59f27e, _0x241de8] = (0, a.useState)([]),
    [_0x536ec0, _0x3656cf] = (0, a.useState)(null),
    _0x110443 = {
      [t.InlineChartCreationIssueCode["UnknownOption"]]: _0x554113.t(
        "docs-chart-ui.common.insertChartFailed",
      ),
      [t.InlineChartCreationIssueCode["EmptyData"]]: _0x554113.t(
        "docs-chart-ui.common.tableDataEmpty",
      ),
      [t.InlineChartCreationIssueCode["InvalidCandlestickData"]]: _0x554113.t(
        "docs-chart-ui.candlestick.columnsError",
      ),
    };
  return (0, o.jsxs)("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [
      (0, o.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [
          (0, o.jsx)("div", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x554113.t("docs-chart-ui.common.chartType"),
          }),
          (0, o.jsx)(r.Select, {
            className: "univer-w-full !univer-min-w-0",
            value: _0x3af6b9,
            options: _0x42f4ae,
            onChange: (_0x430d2f) => {
              var _0x4c3a39;
              _0x14bafc(_0x430d2f);
              let _0x29deac =
                  ((_0x4c3a39 = _0x42f4ae.find(
                    (_0x4b6643) => _0x4b6643.value === _0x430d2f,
                  )) == null
                    ? undefined
                    : _0x4c3a39.chartType) ?? Number(_0x430d2f),
                _0x293382 = _0xc86300(_0x29deac);
              _0x293382 && _0x56c97b(_0x293382);
            },
          }),
        ],
      }),
      (0, o.jsx)(t.ChartReferencedDataSourceEditor, {
        mode: _0xc474db,
        inlineContent: (0, o.jsx)(t.ChartInlineTableEditor, {
          values: _0x298f7a,
          minColumns: (0, t.getChartInlineTableMinColumns)(_0x5d1a00),
          parsePastedText: n.parseInlineChartTable,
          onChange: _0x56c97b,
        }),
        onModeChange: (_0x48d7f6) => {
          (_0x247f00(_0x48d7f6), _0x5cf82b(null), _0x241de8([]));
        },
        onPreviewChange: (_0x4ba926, _0x3417a0) => {
          _0x4ba926 &&
          _0x3417a0.status === n.ChartDataSourceRuntimeStatus["READY"] &&
          _0x3417a0.values
            ? (_0x5cf82b({ source: _0x4ba926 }),
              _0x241de8(_0x3417a0.values["map"]((_0x496d85) => [..._0x496d85])))
            : (_0x5cf82b(null), _0x241de8([]));
        },
      }),
      _0x536ec0 &&
        (0, o.jsx)("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x536ec0,
        }),
      (0, o.jsxs)("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x11324b &&
            (0, o.jsx)(r.Button, {
              type: "button",
              variant: "default",
              onClick: _0x11324b,
              children: _0x554113.t("docs-chart-ui.common.cancel"),
            }),
          (0, o.jsx)(r.Button, {
            type: "button",
            variant: "primary",
            disabled: _0xc474db === "referenced" && !_0xfbe39e,
            onClick: () => {
              var _0xbb7040;
              let _0x342e92 = (0, t.tryBuildInlineChartCreationPlan)({
                optionId: _0x3af6b9,
                values: _0xc474db === "referenced" ? _0x59f27e : _0x298f7a,
              });
              if (!_0x342e92.ok) {
                _0x3656cf(_0x110443[_0x342e92.issue["code"]]);
                return;
              }
              let _0x2029e7 =
                  _0xc474db === "referenced" && _0xfbe39e
                    ? { ..._0xb1e6d7, dataSource: _0xfbe39e }
                    : _0xb1e6d7,
                _0x3b0eb9 = _0x342e92.plan["style"]
                  ? {
                      ..._0x2029e7,
                      style: {
                        ...(_0x2029e7 == null ? undefined : _0x2029e7.style),
                        pie: {
                          ...(_0x2029e7 == null ||
                          (_0xbb7040 = _0x2029e7.style) == null
                            ? undefined
                            : _0xbb7040.pie),
                          ..._0x342e92.plan["style"].pie,
                        },
                      },
                    }
                  : _0x2029e7,
                _0x3b4997 = _0x1b51ce.insertChart(
                  _0x342e92.plan["values"],
                  _0x342e92.plan["chartType"],
                  _0x3b0eb9,
                );
              if (!_0x3b4997) {
                _0x3656cf(
                  _0x554113.t("docs-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x3656cf(null), _0x5d22ad == null || _0x5d22ad(_0x3b4997));
            },
            children: _0x554113.t("docs-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
const Ce = "docs-chart-ui.config",
  we = {},
  Te = "__docsChartResource";
let U = class extends e.Disposable {
  constructor(_0x5a8691, _0x22ce0f, _0x2231aa) {
    (super(),
      (this._docClipboardService = _0x5a8691),
      (this._pasteAdapterService = _0x22ce0f),
      (this._resourceService = _0x2231aa),
      this._initClipboardHooks());
  }
  _initClipboardHooks() {
    (this.disposeWithMe(
      this._docClipboardService["addClipboardHook"]({
        onCopyDocData: (_0x352df, _0x2cf105) =>
          this._appendChartResources(_0x352df, _0x2cf105.sourceDocuments),
      }),
    ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x276c32) =>
            this._getPasteMutationInfos(_0x276c32),
        }),
      ));
  }
  _appendChartResources(_0x2440dd, _0x193ef1) {
    var _0x2d7854;
    let _0x412542 =
      (_0x2d7854 = _0x193ef1[0]) == null ? undefined : _0x2d7854.id;
    if (!_0x412542) return _0x2440dd;
    let _0xf0679f = Object.values(_0x2440dd.drawings ?? {}).filter(
      (_0x1695c5) => this._isDocChartDrawing(_0x1695c5),
    );
    if (_0xf0679f.length === 0) return _0x2440dd;
    let _0x45a3ef = {
      version: n.CHART_RESOURCE_VERSION,
      dataSources: {},
      charts: {},
    };
    return (
      _0xf0679f.forEach((_0x853ea2) => {
        let _0x3adabb = this._resourceService["getChart"](
          _0x412542,
          _0x853ea2.chartId,
        );
        if (!_0x3adabb) return;
        let _0x2d605a = this._resourceService["getDataSource"](
          _0x412542,
          _0x3adabb.dataSourceId,
        );
        _0x2d605a &&
          ((_0x45a3ef.charts[_0x3adabb.id] = e.Tools["deepClone"](_0x3adabb)),
          (_0x45a3ef.dataSources[_0x2d605a.id] = _0x2d605a));
      }),
      Object.keys(_0x45a3ef.charts).length === 0
        ? _0x2440dd
        : { ..._0x2440dd, [Te]: _0x45a3ef }
    );
  }
  _getPasteMutationInfos(_0x4a4609) {
    let _0x5ede3c = _0x4a4609.doc[Te];
    if (!_0x5ede3c) return { redoMutations: [], undoMutations: [] };
    let _0x15f3f4 = new Map(),
      _0x4caf2b = [],
      _0x50b033 = [],
      _0x4d87c4 = [],
      _0x39fbb1 = [];
    return (
      _0x4a4609.customBlockMappings["forEach"]((_0x2a9660) => {
        if (
          !this._isDocChartDrawing(_0x2a9660.sourceDrawing) ||
          !this._isDocChartDrawing(_0x2a9660.targetDrawing)
        )
          return;
        let _0x1549b2 = _0x5ede3c.charts[_0x2a9660.sourceDrawing["chartId"]];
        if (!_0x1549b2) return;
        let _0x2aa2a2 = _0x5ede3c.dataSources[_0x1549b2.dataSourceId];
        if (!_0x2aa2a2) return;
        let _0x55e009 = this._getOrCreatePastedDataSourceId(
            _0x4a4609.unitId,
            _0x2aa2a2,
            _0x15f3f4,
            _0x4caf2b,
            _0x50b033,
          ),
          _0x6d24a0 = (0, e.generateRandomId)(),
          _0x60d307 = { ..._0x1549b2, id: _0x6d24a0, dataSourceId: _0x55e009 };
        ((_0x2a9660.targetDrawing["chartId"] = _0x6d24a0),
          _0x4d87c4.push({
            id: s.SetDocChartSnapshotMutation["id"],
            params: { unitId: _0x4a4609.unitId, chart: _0x60d307 },
          }),
          _0x39fbb1.push({
            id: s.RemoveDocChartSnapshotMutation["id"],
            params: { unitId: _0x4a4609.unitId, chartId: _0x6d24a0 },
          }));
      }),
      {
        redoMutations: [..._0x4caf2b, ..._0x4d87c4],
        undoMutations: [..._0x39fbb1, ..._0x50b033],
      }
    );
  }
  _getOrCreatePastedDataSourceId(
    _0x4a173d,
    _0x185cc4,
    _0x477a9f,
    _0x5362a4,
    _0x58426f,
  ) {
    let _0x5e68da = _0x477a9f.get(_0x185cc4.id);
    if (_0x5e68da) return _0x5e68da;
    let _0x1c4771 = (0, e.generateRandomId)();
    return (
      _0x477a9f.set(_0x185cc4.id, _0x1c4771),
      _0x5362a4.push({
        id: s.SetDocChartDataSourceMutation["id"],
        params: {
          unitId: _0x4a173d,
          dataSource: { ..._0x185cc4, id: _0x1c4771 },
        },
      }),
      _0x58426f.push({
        id: s.RemoveDocChartDataSourceMutation["id"],
        params: { unitId: _0x4a173d, dataSourceId: _0x1c4771 },
      }),
      _0x1c4771
    );
  }
  _isDocChartDrawing(_0x49bbc4) {
    let _0x13a32f = _0x49bbc4;
    return (
      (_0x13a32f == null ? undefined : _0x13a32f.drawingType) ===
        e.DrawingTypeEnum["DRAWING_CHART"] &&
      typeof _0x13a32f.chartId == "string"
    );
  }
};
U = S(
  [
    x(0, (0, e.Inject)(l.IDocClipboardService)),
    x(1, (0, e.Inject)(l.IDocClipboardPasteAdapterService)),
    x(2, (0, e.Inject)(n.ChartResourceRepository)),
  ],
  U,
);
let W = class extends e.Disposable {
  constructor(_0x3866b0, _0x2d8642, _0x72484b, _0x207ed3) {
    (super(),
      (this._drawingAdapterService = _0x3866b0),
      (this._floatingToolbarAdapterService = _0x2d8642),
      (this._resourceService = _0x72484b),
      (this._localeService = _0x207ed3),
      this._initAdapter());
  }
  _initAdapter() {
    (this.disposeWithMe(
      this._drawingAdapterService["registerAdapter"]({
        getEditDrawingCommandInfo: ({
          unitId: _0x32aa4c,
          drawing: _0x11c0e1,
        }) => {
          let _0x142c18 = Ee(_0x11c0e1);
          return _0x142c18
            ? {
                label: this._localeService["t"](
                  "docs-chart-ui.common.editChart",
                ),
                commandId: _.id,
                commandParams: {
                  unitId: _0x32aa4c,
                  chartId: _0x142c18.chartId,
                  drawingId: _0x142c18.drawingId,
                },
              }
            : null;
        },
      }),
    ),
      this.disposeWithMe(
        this._floatingToolbarAdapterService["registerAdapter"]({
          getItems: ({
            unitId: _0x504eea,
            subUnitId: _0x532a18,
            drawing: _0x12b713,
          }) => {
            var _0x3a3dc9;
            let _0x7e068d = Ee(_0x12b713);
            if (!_0x7e068d) return null;
            let _0x21f3f1 = this._resourceService["getChart"](
                _0x504eea,
                _0x7e068d.chartId,
              ),
              _0xfbe3cb =
                (_0x21f3f1 == null ? undefined : _0x21f3f1.chartType) ??
                n.ChartTypeBits["Column"],
              _0x1ed3e6 = t.CHART_TYPE_CATALOG["map"]((_0x378b83) => ({
                value:
                  "id" in _0x378b83 ? _0x378b83.id : String(_0x378b83.value),
                chartType: _0x378b83.value,
                ...("pieSecondaryPlotType" in _0x378b83
                  ? { pieSecondaryPlotType: _0x378b83.pieSecondaryPlotType }
                  : {}),
                icon: _0x378b83.iconName,
                label: this._localeService["t"](
                  "docs-chart-ui.chartTypes." + _0x378b83.labelId,
                ),
              })),
              _0x33b54d = (0, t.resolveChartTypeFieldValue)(
                _0xfbe3cb,
                _0x21f3f1 == null || (_0x3a3dc9 = _0x21f3f1.style) == null
                  ? undefined
                  : _0x3a3dc9.pie,
                _0x1ed3e6,
              );
            return [
              {
                type: "select",
                label: this._localeService["t"](
                  "docs-chart-ui.common.chartType",
                ),
                index: 0,
                commandId: s.UpdateDocChartConfigCommand["id"],
                commandParamsFactory: (_0xf05c0f) => {
                  var _0x489214, _0x5dd39e;
                  let _0x383a21 = _0x1ed3e6.find(
                      (_0x47a99d) => _0x47a99d.value === _0xf05c0f,
                    ),
                    _0x332d73 =
                      (_0x383a21 == null ? undefined : _0x383a21.chartType) ??
                      Number(_0xf05c0f),
                    _0x3e5258 =
                      _0x21f3f1 == null ||
                      (_0x489214 = _0x21f3f1.style) == null ||
                      (_0x489214 = _0x489214.pie) == null
                        ? undefined
                        : _0x489214.composite,
                    _0x299e5a =
                      (_0x332d73 === n.ChartTypeBits["Pie"] ||
                        _0x332d73 === n.ChartTypeBits["Doughnut"]) &&
                      typeof (_0x21f3f1 == null ||
                      (_0x5dd39e = _0x21f3f1.style) == null ||
                      (_0x5dd39e = _0x5dd39e.pie) == null
                        ? undefined
                        : _0x5dd39e.doughnutHole) == "number",
                    _0x1111a4 = _0x299e5a ? { doughnutHole: null } : {},
                    _0xd4ee69 = {
                      unitId: _0x504eea,
                      chartId: _0x7e068d.chartId,
                      chartType: _0x332d73,
                    };
                  if (_0x383a21 != null && _0x383a21.pieSecondaryPlotType) {
                    var _0x524bc8;
                    return {
                      ..._0xd4ee69,
                      style: {
                        ...(_0x21f3f1 == null ? undefined : _0x21f3f1.style),
                        pie: {
                          ...(_0x21f3f1 == null ||
                          (_0x524bc8 = _0x21f3f1.style) == null
                            ? undefined
                            : _0x524bc8.pie),
                          ..._0x1111a4,
                          composite: {
                            ..._0x3e5258,
                            enabled: true,
                            secondaryPlot: {
                              ...(_0x3e5258 == null
                                ? undefined
                                : _0x3e5258.secondaryPlot),
                              type: _0x383a21.pieSecondaryPlotType,
                            },
                          },
                        },
                      },
                    };
                  }
                  if (_0x332d73 === n.ChartTypeBits["Pie"] && _0x3e5258) {
                    var _0x25c048;
                    return {
                      ..._0xd4ee69,
                      style: {
                        ...(_0x21f3f1 == null ? undefined : _0x21f3f1.style),
                        pie: {
                          ...(_0x21f3f1 == null ||
                          (_0x25c048 = _0x21f3f1.style) == null
                            ? undefined
                            : _0x25c048.pie),
                          ..._0x1111a4,
                          composite: { ..._0x3e5258, enabled: false },
                        },
                      },
                    };
                  }
                  return _0x299e5a
                    ? { ..._0xd4ee69, style: { pie: _0x1111a4 } }
                    : _0xd4ee69;
                },
                disable: !_0x21f3f1,
                value: _0x33b54d,
                options: _0x1ed3e6,
              },
              {
                type: "button",
                label: this._localeService["t"](
                  "docs-chart-ui.common.editChart",
                ),
                index: 1,
                commandId: _.id,
                commandParams: {
                  unitId: _0x504eea,
                  chartId: _0x7e068d.chartId,
                  drawingId: _0x7e068d.drawingId,
                },
                disable: false,
                icon: "DrawingEditIcon",
              },
              {
                type: "button",
                label: this._localeService["t"](
                  "docs-chart-ui.common.deleteChart",
                ),
                index: 2,
                commandId: u.RemoveDocDrawingCommand["id"],
                commandParams: {
                  unitId: _0x504eea,
                  drawings: [
                    {
                      unitId: _0x504eea,
                      subUnitId: _0x532a18,
                      drawingId: _0x7e068d.drawingId,
                    },
                  ],
                },
                disable: false,
                icon: "DrawingDeleteIcon",
              },
            ];
          },
        }),
      ));
  }
};
W = S(
  [
    x(0, u.IDocDrawingAdapterService),
    x(1, (0, e.Inject)(d.DocDrawingFloatingToolbarAdapterService)),
    x(2, (0, e.Inject)(n.ChartResourceRepository)),
    x(3, (0, e.Inject)(e.LocaleService)),
  ],
  W,
);
function Ee(_0x6aeb86) {
  let _0x2e11ee = _0x6aeb86;
  return (_0x2e11ee == null ? undefined : _0x2e11ee.drawingType) ===
    e.DrawingTypeEnum["DRAWING_CHART"] && typeof _0x2e11ee.chartId == "string"
    ? _0x2e11ee
    : null;
}
const De = (0, e.createIdentifier)("doc-chart.snapshot-renderer");
var Oe = class {
  constructor(_0x4f809a, _0x57b2fc) {
    ((this._renderService = _0x4f809a), (this._renderModelManager = _0x57b2fc));
  }
  async render(_0xb6dfe2, _0x2ba92d) {
    if (typeof document > "u")
      throw TypeError(
        "Document\x20chart\x20snapshot\x20rendering\x20requires\x20a\x20browser\x20document.",
      );
    let { chartConfig: _0x404ad7, chartStyle: _0x505464 } =
      this._renderService["createRenderInput"](_0x2ba92d);
    if (_0xb6dfe2.format === n.ChartImageExportFormat["SVG"])
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x2ba92d.chartId,
            config: _0x404ad7,
            style: _0x505464,
            width: _0xb6dfe2.width,
            height: _0xb6dfe2.height,
          },
          { format: _0xb6dfe2.format },
        )
      ).dataUrl;
    let _0x571fcd = new n["DataUrlImageChartHost"](_0x2ba92d.chartId, {
        width: _0xb6dfe2.width,
        height: _0xb6dfe2.height,
      }),
      _0x3d6392 = this._renderService["createChartInstance"](
        n.ChartRenderMode["Image"],
      );
    try {
      (_0x3d6392.bind(_0x571fcd),
        await _0x3d6392.render({
          chartId: _0x2ba92d.chartId,
          config: _0x404ad7,
          style: _0x505464,
        }));
      let _0x2138f4 = _0x571fcd.getDataUrl();
      if (!_0x2138f4)
        throw Error(
          "Failed to render document chart snapshot: " +
            _0x2ba92d.unitId +
            "/" +
            _0x2ba92d.chartId,
        );
      return _0x2138f4;
    } finally {
      (_0x3d6392.dispose(), _0x571fcd.dispose());
    }
  }
};
let G = class extends t.ChartSnapshotQueue {
  constructor(_0x4e43ed, _0x5db74b, _0x364cb5, _0x44a1ec, _0x519168) {
    super(_0x4e43ed, _0x5db74b, _0x519168 ?? new Oe(_0x364cb5, _0x44a1ec));
  }
  getCacheKey(_0x384661) {
    let _0x56f9bf = super.getCacheKey(_0x384661);
    return _0x384661.format === n.ChartImageExportFormat["SVG"]
      ? _0x56f9bf + "::" + _0x384661.format
      : _0x56f9bf;
  }
};
G = S(
  [
    x(0, (0, e.Inject)(e.LocaleService)),
    x(1, (0, e.Inject)(s.DocChartModelService)),
    x(2, (0, e.Inject)(F)),
    x(3, n.IChartRenderModelManagerService),
    x(4, (0, e.Optional)(De)),
  ],
  G,
);
let K = class extends e.Disposable {
  constructor(_0x7a44e4, _0xb223a0) {
    (super(),
      (this._snapshotService = _0x7a44e4),
      (this._modelService = _0xb223a0),
      N(this, "_runtimeStateSubscriptions", new Map()),
      this._listenRuntimeData());
  }
  _listenRuntimeData() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x175d41) =>
        this._bindRuntimeState(_0x175d41),
      ),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x475c0b) =>
          this._releaseRuntimeState(_0x475c0b),
        ),
      ),
      this.disposeWithMe(
        (0, e.toDisposable)(() => {
          (this._runtimeStateSubscriptions["forEach"](
            ({ subscription: _0x2d0045 }) => _0x2d0045.unsubscribe(),
          ),
            this._runtimeStateSubscriptions["clear"]());
        }),
      ));
  }
  _bindRuntimeState(_0x217940) {
    if (this._runtimeStateSubscriptions["has"](_0x217940)) return;
    let _0x213f24 = _0x217940.model["config"] == null ? 0 : 1,
      _0x54f21b = (0, f.combineLatest)([
        _0x217940.model["config$"].pipe(
          (0, f.filter)((_0x3d6e8f) => _0x3d6e8f != null),
        ),
        _0x217940.model["style$"],
      ])
        .pipe((0, f.skip)(_0x213f24), (0, f.auditTime)(0))
        .subscribe(() =>
          this._snapshotService["invalidateChart"](
            _0x217940.unitId,
            _0x217940.chartId,
          ),
        );
    this._runtimeStateSubscriptions["set"](_0x217940, {
      subscription: _0x54f21b,
    });
  }
  _releaseRuntimeState(_0x3d2e96) {
    var _0x4e7dd7;
    ((_0x4e7dd7 = this._runtimeStateSubscriptions["get"](_0x3d2e96)) == null ||
      _0x4e7dd7.subscription["unsubscribe"](),
      this._runtimeStateSubscriptions["delete"](_0x3d2e96));
  }
};
K = S([x(0, (0, e.Inject)(G)), x(1, (0, e.Inject)(s.DocChartModelService))], K);
const q = g.id,
  ke = q + ".below";
function Ae(_0x5549b4) {
  return (0, f.combineLatest)([
    (0, l.disableMenuWhenHeaderFooterEditing)(_0x5549b4),
    je(_0x5549b4),
  ]).pipe((0, f.map)(([_0x1d4908, _0x493fd4]) => _0x1d4908 || _0x493fd4));
}
function je(_0x2f71c4) {
  let _0x4ffec4 = _0x2f71c4.get(c.DocSelectionManagerService),
    _0xe99337 = _0x2f71c4.get(e.IUniverInstanceService);
  return new f["Observable"]((_0xc5426f) => {
    let _0x2914e5 = (_0xbf45be) => {
      let _0x3dd09a = _0xe99337.getCurrentUnitOfType(
        e.UniverInstanceType["UNIVER_DOC"],
      );
      if (!_0x3dd09a) {
        _0xc5426f.next(true);
        return;
      }
      let _0x13acef = _0x3dd09a.getUnitId(),
        _0x15d4cd =
          (_0xbf45be == null ? undefined : _0xbf45be.unitId) === _0x13acef
            ? (_0xbf45be.textRanges ?? [])
            : [
                ...(_0x4ffec4.getTextRanges({
                  unitId: _0x13acef,
                  subUnitId: _0x13acef,
                }) ?? []),
              ];
      if (_0x15d4cd.length !== 1) {
        _0xc5426f.next(true);
        return;
      }
      let _0x389be0 =
        _0x15d4cd.find((_0x3226a2) => _0x3226a2.isActive) ?? _0x15d4cd[0];
      if (!_0x389be0 || !_0x389be0.collapsed || _0x389be0.startOffset == null) {
        _0xc5426f.next(true);
        return;
      }
      let _0x22340e = V(_0x3dd09a, {
        ..._0x389be0,
        segmentId:
          _0x389be0.segmentId ??
          (_0xbf45be == null ? undefined : _0xbf45be.segmentId) ??
          "",
      });
      _0xc5426f.next(_0x22340e == null);
    };
    _0x2914e5();
    let _0x3650c1 = _0x4ffec4.textSelection$["subscribe"]((_0x3aeffb) =>
      _0x2914e5(_0x3aeffb),
    );
    return () => _0x3650c1.unsubscribe();
  });
}
function Me(_0x2fbc31) {
  return J(_0x2fbc31);
}
function J(_0x7fde03) {
  let _0x53c620 = _0x7fde03
    .get(e.LocaleService)
    .t("docs-chart-ui.common.insertChart");
  return {
    id: q,
    commandId: g.id,
    type: i.MenuItemType["BUTTON"],
    icon: "ChartIcon",
    title: _0x53c620,
    tooltip: _0x53c620,
    disabled$: Ae(_0x7fde03),
    hidden$: (0, i.getMenuHiddenObservable)(
      _0x7fde03,
      e.UniverInstanceType["UNIVER_DOC"],
    ),
  };
}
function Ne(_0x2d8ee1) {
  let _0x2db686 = _0x2d8ee1
    .get(e.LocaleService)
    .t("docs-chart-ui.common.insertChart");
  return {
    id: ke,
    commandId: g.id,
    type: i.MenuItemType["BUTTON"],
    icon: "ChartIcon",
    title: _0x2db686,
    tooltip: _0x2db686,
    disabled$: Ae(_0x2d8ee1),
    hidden$: (0, i.getMenuHiddenObservable)(
      _0x2d8ee1,
      e.UniverInstanceType["UNIVER_DOC"],
    ),
  };
}
const Pe = {
  [i.RibbonInsertGroup["MEDIA"]]: { [q]: { order: 2.5, menuItemFactory: Me } },
  [i.ContextMenuPosition["PARAGRAPH"]]: {
    [i.ContextMenuGroup["LAYOUT"]]: {
      [l.INSERT_BELLOW_MENU_ID]: { [q]: { order: 4.5, menuItemFactory: J } },
    },
    [l.EMPTY_PARAGRAPH_MENU_ID]: {
      [i.ContextMenuGroup["LAYOUT"]]: {
        [q]: { order: 5.5, menuItemFactory: J },
      },
    },
    [l.DOC_CONTENT_INSERT_MENU_ID]: {
      [i.ContextMenuGroup["LAYOUT"]]: {
        [q]: { order: 4.5, menuItemFactory: J },
      },
    },
    [l.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
      insert: { [q]: { order: 1.5, menuItemFactory: J } },
    },
    [l.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
      insert: { [ke]: { order: 1.5, menuItemFactory: Ne } },
    },
  },
};
var Fe = "@univerjs-pro/docs-chart-ui",
  Ie = "1.0.0-insiders.20260907-70fc579",
  Le = class extends h.Image {
    constructor(..._0x15124b) {
      (super(..._0x15124b), N(this, "_imageContentHidden", false));
    }
    get imageContentHidden() {
      return this._imageContentHidden;
    }
    setImageContentHidden(_0x1fe43a) {
      this._imageContentHidden !== _0x1fe43a &&
        ((this._imageContentHidden = _0x1fe43a), this.makeDirty(true));
    }
    _draw(_0x2a55d1, _0x3c20d1, _0x542b19, _0x26b7fd) {
      this._imageContentHidden ||
        super._draw(_0x2a55d1, _0x3c20d1, _0x542b19, _0x26b7fd);
    }
  };
const Re = {
  ...h.DEFAULT_TRANSFORMER_CONFIG,
  rotateEnabled: false,
  keepRatio: false,
  moveBoundaryEnabled: false,
};
let Y = class extends e.Disposable {
  constructor(_0x252876, _0x2b074a, _0x141415) {
    (super(),
      (this._drawingManagerService = _0x252876),
      (this._renderManagerService = _0x2b074a),
      (this._snapshotRenderService = _0x141415),
      N(this, "_activeDomReadyDrawingKeys", new Set()),
      this._init());
  }
  setActiveDomReady(_0x31b631, _0x3ceb48) {
    let _0xcf2fa6 = (0, m.getDrawingShapeKeyByDrawingSearch)(_0x31b631);
    (_0x3ceb48
      ? this._activeDomReadyDrawingKeys["add"](_0xcf2fa6)
      : this._activeDomReadyDrawingKeys["delete"](_0xcf2fa6),
      this._syncRenderedChartVisibility(_0x31b631));
  }
  _init() {
    (this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0x4cc6bf) => {
        this._requestSnapshotsForSearches(_0x4cc6bf);
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["refreshTransform$"].subscribe(
          (_0x21d765) => {
            this._requestSnapshotsForSearches(_0x21d765);
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x4e6998) => {
          this._removeRenderedCharts(_0x4e6998);
        }),
      ),
      this.disposeWithMe(
        this._snapshotRenderService["chartInvalidated$"].subscribe(
          ({ unitId: _0x506eb0, chartId: _0xda51c2 }) => {
            this._requestSnapshotsForUnit(_0x506eb0, _0xda51c2);
          },
        ),
      ),
      this.disposeWithMe(
        this._snapshotRenderService["snapshotUpdated$"].subscribe(
          (_0x291f4e) => {
            if (_0x291f4e.status !== "ready" || !_0x291f4e.dataUrl) return;
            let [_0x5b4767, _0x4bf00d] = _0x291f4e.key["split"]("::");
            !_0x5b4767 ||
              !_0x4bf00d ||
              this._renderCharts(_0x5b4767, _0x4bf00d, _0x291f4e.dataUrl);
          },
        ),
      ));
  }
  _requestSnapshotsForSearches(_0x2f4b82) {
    _0x2f4b82.forEach((_0x3eb83b) => {
      let _0x163950 = this._getChartDrawing(_0x3eb83b);
      _0x163950 && this._requestSnapshot(_0x163950);
    });
  }
  _requestSnapshotsForUnit(_0x149cb9, _0x444256) {
    this._forEachChartDrawing(_0x149cb9, (_0x25060a) => {
      (_0x444256 == null || _0x25060a.chartId === _0x444256) &&
        this._requestSnapshot(_0x25060a);
    });
  }
  _requestSnapshot(_0x2e705a) {
    let _0x53e514 = this._getDrawingRect(_0x2e705a);
    if (!_0x53e514) return;
    let _0x4401ac = this._snapshotRenderService["requestSnapshot"]({
      unitId: _0x2e705a.unitId,
      chartId: _0x2e705a.chartId,
      width: _0x53e514.width,
      height: _0x53e514.height,
      dpr: n.DEFAULT_CHART_DEVICE_PIXEL_RATIO,
      mode: "main",
    });
    _0x4401ac.status === "ready" &&
      _0x4401ac.dataUrl &&
      this._renderDrawing(_0x2e705a, _0x4401ac.dataUrl);
  }
  _renderCharts(_0x80d06f, _0xa512a4, _0x298c87) {
    this._forEachChartDrawing(_0x80d06f, (_0x5f321a) => {
      _0x5f321a.chartId === _0xa512a4 &&
        this._renderDrawing(_0x5f321a, _0x298c87);
    });
  }
  _renderDrawing(_0x3e4fc6, _0x3faec5) {
    let _0x3fa094 = this._renderManagerService["getRenderUnitById"](
        _0x3e4fc6.unitId,
      ),
      _0x49af04 = _0x3fa094 == null ? undefined : _0x3fa094.scene;
    if (!_0x49af04 || !this._getDrawingRect(_0x3e4fc6)) return;
    let _0x3e79f7 = (0, m.getDrawingShapeKeyByDrawingSearch)(_0x3e4fc6),
      _0x59984c = _0x49af04.getObjectIncludeInGroup(_0x3e79f7);
    if (_0x59984c != null && _0x59984c.changeSource) {
      var _0x1edbb1, _0x47d83b, _0x4c0c6f, _0x2e54b4, _0x41f2db;
      ((_0x59984c.transformerConfig = {
        ..._0x59984c.transformerConfig,
        ...Re,
      }),
        (_0x1edbb1 = _0x59984c.getNative) == null ||
          (_0x1edbb1 = _0x1edbb1.call(_0x59984c)) == null ||
          _0x1edbb1.addEventListener(
            "load",
            () => {
              var _0x5dfe39;
              ((_0x5dfe39 = _0x59984c.makeDirty) == null ||
                _0x5dfe39.call(_0x59984c, true),
                _0x49af04.makeDirty(true),
                _0x49af04.requestRender().catch(() => {}));
            },
            { once: true },
          ),
        _0x59984c.changeSource(_0x3faec5),
        (_0x47d83b = _0x59984c.transformByState) == null ||
          _0x47d83b.call(_0x59984c, _0x3e4fc6.transform),
        (_0x4c0c6f = _0x59984c.setClipBounds) == null ||
          _0x4c0c6f.call(
            _0x59984c,
            (_0x2e54b4 = _0x3e4fc6.transform) == null
              ? undefined
              : _0x2e54b4.clipBounds,
          ),
        this._syncChartImageVisibility(_0x59984c, _0x3e4fc6, _0x3e79f7),
        (_0x41f2db = _0x59984c.makeDirty) == null ||
          _0x41f2db.call(_0x59984c, true),
        _0x49af04.makeDirty(true));
      return;
    }
    this._createImageShape(_0x3e4fc6, _0x3faec5, _0x49af04, _0x3e79f7);
  }
  _createImageShape(_0xa7f8f2, _0x392014, _0x2ab504, _0x6e5401) {
    let _0x595325 = _0xa7f8f2.transform;
    if (!_0x595325) return;
    let _0x4b26dd = this._drawingManagerService["getDrawingOrder"](
        _0xa7f8f2.unitId,
        _0xa7f8f2.subUnitId,
      ),
      _0x3eff4c = _0x4b26dd.indexOf(_0xa7f8f2.drawingId),
      _0x264f78 = {
        ..._0x595325,
        zIndex: _0x3eff4c === -1 ? _0x4b26dd.length - 1 : _0x3eff4c,
        clipBounds: _0x595325.clipBounds,
        printable: true,
        rotateEnabled: false,
        transformerConfig: Re,
        url: _0x392014,
      };
    _0xa7f8f2.hidden && (_0x264f78.visible = false);
    let _0x5e922d = new Le(_0x6e5401, _0x264f78);
    (_0x5e922d.setImageContentHidden(
      this._activeDomReadyDrawingKeys["has"](_0x6e5401),
    ),
      _0x2ab504.addObject(_0x5e922d, h.DRAWING_OBJECT_LAYER_INDEX),
      this._drawingManagerService["getDrawingEditable"]() &&
        _0x2ab504.attachTransformerTo(_0x5e922d));
  }
  _removeRenderedCharts(_0x1d2aea) {
    _0x1d2aea.forEach((_0x326aca) => {
      this._activeDomReadyDrawingKeys["delete"](
        (0, m.getDrawingShapeKeyByDrawingSearch)(_0x326aca),
      );
      let _0x56d7a7 = this._renderManagerService["getRenderUnitById"](
          _0x326aca.unitId,
        ),
        _0xd2b123 = _0x56d7a7 == null ? undefined : _0x56d7a7.scene;
      if (!_0xd2b123) return;
      let _0x441dfc = _0xd2b123.getObjectIncludeInGroup(
        (0, m.getDrawingShapeKeyByDrawingSearch)(_0x326aca),
      );
      _0x441dfc && _0xd2b123.removeObject(_0x441dfc);
    });
  }
  _syncRenderedChartVisibility(_0x194973) {
    let _0x2e43c0 = this._renderManagerService["getRenderUnitById"](
        _0x194973.unitId,
      ),
      _0x939189 = _0x2e43c0 == null ? undefined : _0x2e43c0.scene;
    if (!_0x939189) return;
    let _0x1bcf79 = (0, m.getDrawingShapeKeyByDrawingSearch)(_0x194973),
      _0x9e3c42 = _0x939189.getObjectIncludeInGroup(_0x1bcf79);
    if (!_0x9e3c42) return;
    let _0x33f14e = this._drawingManagerService["getDrawingByParam"](_0x194973);
    this._syncChartImageVisibility(_0x9e3c42, _0x33f14e, _0x1bcf79);
  }
  _syncChartImageVisibility(_0x179698, _0x3b3fac, _0x56f353) {
    var _0x40f9d9, _0x4dc006;
    let _0x358342 = this._activeDomReadyDrawingKeys["has"](_0x56f353);
    if (_0x179698.setImageContentHidden) {
      var _0x7d2b46, _0x186e94;
      (_0x179698.setImageContentHidden(_0x358342),
        (_0x3b3fac == null ? undefined : _0x3b3fac.hidden) === true
          ? (_0x7d2b46 = _0x179698.hide) == null || _0x7d2b46.call(_0x179698)
          : (_0x186e94 = _0x179698.show) == null || _0x186e94.call(_0x179698));
      return;
    }
    (_0x3b3fac == null ? undefined : _0x3b3fac.hidden) === true
      ? (_0x40f9d9 = _0x179698.hide) == null || _0x40f9d9.call(_0x179698)
      : (_0x4dc006 = _0x179698.show) == null || _0x4dc006.call(_0x179698);
  }
  _getChartDrawing(_0x5b44fa) {
    let _0x5d8b32 = this._drawingManagerService["getDrawingByParam"](_0x5b44fa);
    return ze(_0x5d8b32) ? _0x5d8b32 : null;
  }
  _forEachChartDrawing(_0x414f3a, _0x200aee) {
    let _0x2f4d44 =
        this._drawingManagerService["getDrawingDataForUnit"](_0x414f3a),
      _0x535cb7 = _0x2f4d44 == null ? undefined : _0x2f4d44[_0x414f3a];
    _0x535cb7 &&
      _0x535cb7.order["forEach"]((_0xcdd18f) => {
        let _0x83994 = _0x535cb7.data[_0xcdd18f];
        ze(_0x83994) && _0x200aee(_0x83994);
      });
  }
  _getDrawingRect(_0x3404d3) {
    var _0x56feda, _0x2ff7d3, _0x3c9850, _0x323031;
    let _0x1282a3 =
        ((_0x56feda = _0x3404d3.transform) == null
          ? undefined
          : _0x56feda.width) ??
        ((_0x2ff7d3 = _0x3404d3.docTransform) == null ||
        (_0x2ff7d3 = _0x2ff7d3.size) == null
          ? undefined
          : _0x2ff7d3.width) ??
        0,
      _0x168e8d =
        ((_0x3c9850 = _0x3404d3.transform) == null
          ? undefined
          : _0x3c9850.height) ??
        ((_0x323031 = _0x3404d3.docTransform) == null ||
        (_0x323031 = _0x323031.size) == null
          ? undefined
          : _0x323031.height) ??
        0;
    return _0x1282a3 <= 0 || _0x168e8d <= 0
      ? null
      : {
          width: Math.max(1, Math.round(_0x1282a3)),
          height: Math.max(1, Math.round(_0x168e8d)),
        };
  }
};
Y = S(
  [
    x(0, m.IDrawingManagerService),
    x(1, h.IRenderManagerService),
    x(2, (0, e.Inject)(G)),
  ],
  Y,
);
function ze(_0x1f73ef) {
  let _0xc05394 = _0x1f73ef;
  return (
    (_0xc05394 == null ? undefined : _0xc05394.drawingType) ===
      e.DrawingTypeEnum["DRAWING_CHART"] && typeof _0xc05394.chartId == "string"
  );
}
function Be(_0x1b3371, _0x33a1af, _0x20a91c = 1, _0x709edd = 0) {
  let {
      top: _0x4c351f,
      left: _0x36bd8f,
      bottom: _0x3627c6,
      right: _0x7855f8,
    } = _0x1b3371,
    _0x15ce35 = _0x7855f8 - _0x36bd8f,
    _0x361196 = _0x3627c6 - _0x4c351f,
    { viewportScrollX: _0x3c2ebf, viewportScrollY: _0x2a2f53 } =
      _0x33a1af.getViewport(l.VIEWPORT_KEY["VIEW_MAIN"]),
    { scaleX: _0x5a7f03, scaleY: _0x41e4bc } = _0x33a1af.getAncestorScale(),
    _0x10c873 = (_0x36bd8f - _0x3c2ebf) * _0x5a7f03,
    _0x2a21b3 = (_0x4c351f - _0x2a2f53) * _0x41e4bc,
    _0x3c94ef = _0x15ce35 * _0x5a7f03,
    _0x5753c5 = _0x361196 * _0x41e4bc;
  return {
    startX: _0x10c873,
    startY: _0x2a21b3,
    endX: _0x10c873 + _0x3c94ef,
    endY: _0x2a21b3 + _0x5753c5,
    width: _0x3c94ef,
    height: _0x5753c5,
    rotate: _0x709edd,
    absolute: { left: false, top: false },
    opacity: _0x20a91c,
  };
}
function Ve(_0xc3ce01, _0x50d67b) {
  return (
    _0xc3ce01.unitId === _0x50d67b.unitId &&
    (_0xc3ce01.subUnitId ?? _0xc3ce01.unitId) ===
      (_0x50d67b.subUnitId ?? _0x50d67b.unitId) &&
    _0xc3ce01.drawingId === _0x50d67b.drawingId
  );
}
function X(_0x1d3f7d, _0x243b83 = 0) {
  return (
    _0x1d3f7d.find(
      (_0x354bd3) => typeof _0x354bd3 == "number" && Number.isFinite(_0x354bd3),
    ) ?? _0x243b83
  );
}
function He(_0x30607f, _0x4a5fb1) {
  var _0x441ff8,
    _0x12944b,
    _0x426e09,
    _0x5ed835,
    _0x2fef37,
    _0x878488,
    _0x3c8b1a;
  let _0x3f3270 =
      _0x4a5fb1 == null || (_0x441ff8 = _0x4a5fb1.getRealBound) == null
        ? undefined
        : _0x441ff8.call(_0x4a5fb1),
    _0x33b076 = X([
      _0x3f3270 == null ? undefined : _0x3f3270.width,
      (_0x12944b = _0x30607f.transform) == null ? undefined : _0x12944b.width,
      (_0x426e09 = _0x30607f.docTransform) == null ||
      (_0x426e09 = _0x426e09.size) == null
        ? undefined
        : _0x426e09.width,
    ]),
    _0x198766 = X([
      _0x3f3270 == null ? undefined : _0x3f3270.height,
      (_0x5ed835 = _0x30607f.transform) == null ? undefined : _0x5ed835.height,
      (_0x2fef37 = _0x30607f.docTransform) == null ||
      (_0x2fef37 = _0x2fef37.size) == null
        ? undefined
        : _0x2fef37.height,
    ]),
    _0xaca8ba = X([
      _0x3f3270 == null ? undefined : _0x3f3270.left,
      (_0x878488 = _0x30607f.transform) == null ? undefined : _0x878488.left,
    ]),
    _0x85cffb = X([
      _0x3f3270 == null ? undefined : _0x3f3270.top,
      (_0x3c8b1a = _0x30607f.transform) == null ? undefined : _0x3c8b1a.top,
    ]);
  return {
    left: _0xaca8ba,
    top: _0x85cffb,
    right: _0xaca8ba + _0x33b076,
    bottom: _0x85cffb + _0x198766,
  };
}
function Ue(_0x3651b0, _0xc3a796) {
  if (!_0x3651b0 || typeof _0x3651b0 != "object") return;
  let _0x142383 = _0x3651b0;
  if (typeof _0x142383.subscribeEvent == "function") {
    let _0x36e291 = _0x142383.subscribeEvent(_0xc3a796);
    return (0, e.toDisposable)(() => {
      var _0x329570;
      if (typeof _0x36e291.dispose == "function") {
        _0x36e291.dispose();
        return;
      }
      (_0x329570 = _0x36e291.unsubscribe) == null || _0x329570.call(_0x36e291);
    });
  }
  let _0x8a03ad = _0x3651b0;
  if (typeof _0x8a03ad.subscribe == "function") {
    let _0x5c716d = _0x8a03ad.subscribe(_0xc3a796);
    return (0, e.toDisposable)(() => {
      var _0x2e759e;
      return (_0x2e759e = _0x5c716d.unsubscribe) == null
        ? undefined
        : _0x2e759e.call(_0x5c716d);
    });
  }
}
let Z = class extends e.Disposable {
  constructor(
    _0x9de7fe,
    _0x3fd4ae,
    _0x426c46,
    _0x655990,
    _0x2ece55,
    _0x4a5c7f,
    _0x4408c6,
    _0x7604f0,
    _0x596204,
    _0x1367a0,
  ) {
    (super(),
      (this._drawingManagerService = _0x9de7fe),
      (this._renderManagerService = _0x3fd4ae),
      (this._canvasFloatDomService = _0x426c46),
      (this._modelService = _0x655990),
      (this._renderService = _0x2ece55),
      (this._snapshotRenderService = _0x4a5c7f),
      (this._commandService = _0x4408c6),
      (this._univerInstanceService = _0x7604f0),
      (this._localeService = _0x596204),
      (this._staticRenderController = _0x1367a0),
      N(this, "_activeLayer", null),
      N(this, "_layoutChanged$", new f["Subject"]()),
      N(this, "_visualLayoutChanged$", new f["Subject"]()),
      this._init());
  }
  mountChart(_0x456dbb) {
    let _0x3d4455 = this._modelService["ensureChartModel"](
      _0x456dbb.unitId,
      _0x456dbb.chartId,
    );
    if (!_0x3d4455) return (0, e.toDisposable)(() => {});
    let _0x2aaa78 = new P(
        _0x456dbb.chartId,
        _0x456dbb.root,
        (_0x81eb56, _0x4bb291) =>
          this._renderService["applyHostStyle"](_0x81eb56, _0x4bb291),
        () => this._getActiveRenderRect(_0x456dbb),
        true,
        () => this._getActiveRenderScale(_0x456dbb),
      ),
      _0x5a6738 = this._renderService["createChartInstance"](
        n.ChartRenderMode["Dom"],
      );
    _0x5a6738.bind(_0x2aaa78);
    let _0x5be79f = [
        _0x5a6738.on("click", (_0xfedd99) => {
          let _0x395573 = (0, t.resolveChartElementSelection)(
            _0x3d4455.model,
            _0xfedd99.hit,
          );
          if (!_0x395573) return;
          let _0x462e28 = (0, t.resolveChartEditPanelRoute)(_0x395573.target);
          _0x462e28 &&
            this._commandService["executeCommand"](_.id, {
              unitId: _0x456dbb.unitId,
              chartId: _0x456dbb.chartId,
              drawingId: _0x456dbb.drawingId,
              route: _0x462e28,
            });
        }),
        _0x5a6738.on("dblclick", () => {
          this._commandService["executeCommand"](_.id, {
            unitId: _0x456dbb.unitId,
            chartId: _0x456dbb.chartId,
            drawingId: _0x456dbb.drawingId,
          });
        }),
      ],
      _0x38874a = true;
    return (
      _0x5be79f.push(
        this._subscribeRender(
          _0x3d4455,
          _0x5a6738,
          _0x2aaa78,
          _0x456dbb,
          () => _0x38874a,
        ),
      ),
      (0, e.toDisposable)(() => {
        ((_0x38874a = false),
          this._staticRenderController["setActiveDomReady"](
            this._getDrawingSearch(_0x456dbb),
            false,
          ),
          _0x5be79f.forEach((_0x21a535) => _0x21a535.dispose()),
          _0x5a6738.dispose(),
          _0x2aaa78.dispose());
      })
    );
  }
  dispose() {
    (this._deactivate(),
      this._layoutChanged$["complete"](),
      this._visualLayoutChanged$["complete"](),
      super.dispose());
  }
  _init() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0xc56c40) => {
        this._handleFocus(_0xc56c40);
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x230b0b) => {
          let _0x1764b2 = this._activeLayer;
          _0x1764b2 &&
            _0x230b0b.some((_0x2d5dc2) => Ve(_0x2d5dc2, _0x1764b2)) &&
            this._deactivate();
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["refreshTransform$"].subscribe(
          (_0x15884b) => {
            let _0x696f77 = this._activeLayer;
            if (!_0x696f77) {
              this._retryActivateFocusedChart(_0x15884b);
              return;
            }
            let _0x248cce = _0x15884b.find((_0x2ee579) =>
              Ve(_0x2ee579, _0x696f77),
            );
            if (_0x248cce) {
              let _0x36e93d = this._drawingManagerService["getDrawingByParam"]({
                unitId: _0x248cce.unitId,
                subUnitId: _0x248cce.subUnitId,
                drawingId: _0x248cce.drawingId,
              });
              this._isDocChartDrawing(_0x36e93d) &&
                this._updatePosition(_0x36e93d);
            }
          },
        ),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          e.UniverInstanceType["UNIVER_DOC"],
        ).subscribe((_0x2455d3) => {
          let _0x50c485 = this._activeLayer;
          _0x50c485 &&
            (_0x2455d3 == null ? undefined : _0x2455d3.getUnitId()) !==
              _0x50c485.unitId &&
            this._deactivate();
        }),
      ));
  }
  _subscribeRender(_0x7d7f0f, _0xa72931, _0x517e3e, _0x4ff13c, _0x1fccd9) {
    let _0x4ce2d1 = () => {
        let { chartConfig: _0xbb431, chartStyle: _0x49ff05 } =
          this._renderService["createRenderInput"](_0x7d7f0f);
        Promise.resolve(
          _0xa72931.render({
            chartId: _0x7d7f0f.chartId,
            config: _0xbb431,
            style: _0x49ff05,
          }),
        ).then(
          () => {
            _0x1fccd9() &&
              this._isActiveLayer(_0x4ff13c) &&
              this._staticRenderController["setActiveDomReady"](
                this._getDrawingSearch(_0x4ff13c),
                true,
              );
          },
          () => {},
        );
      },
      _0x174e09 = (0, f.combineLatest)([
        _0x7d7f0f.model["config$"],
        _0x7d7f0f.model["style$"],
        this._localeService["direction$"],
      ])
        .pipe((0, f.filter)(([_0x13b7c1]) => _0x13b7c1 != null))
        .subscribe(_0x4ce2d1),
      _0x222277 = this._layoutChanged$["pipe"](
        (0, f.filter)((_0x11a993) => _0x11a993 === _0x4ff13c.drawingId),
      ).subscribe(_0x4ce2d1),
      _0x12ec48 = this._visualLayoutChanged$["pipe"](
        (0, f.filter)((_0x31177e) => _0x31177e === _0x4ff13c.drawingId),
      ).subscribe(() => _0x517e3e.syncLayout());
    return (0, e.toDisposable)(() => {
      (_0x174e09.unsubscribe(),
        _0x222277.unsubscribe(),
        _0x12ec48.unsubscribe());
    });
  }
  _handleFocus(_0x117e92) {
    let _0x4c5658 = (_0x117e92 ?? []).filter((_0x3a74ed) =>
      this._isDocChartDrawing(_0x3a74ed),
    );
    if (_0x4c5658.length !== 1) {
      this._deactivate();
      return;
    }
    this._activate(_0x4c5658[0]);
  }
  _activate(_0x421d4b) {
    var _0x19c9f7, _0x29ae48, _0x7d5f50;
    let _0x3ba7b0 = this._getPositionState(_0x421d4b),
      _0x31d5f9 = this._getRenderRect(_0x421d4b),
      _0x4cc485 = _0x421d4b.subUnitId ?? _0x421d4b.unitId;
    if (!_0x3ba7b0 || !_0x31d5f9) {
      this._deactivate();
      return;
    }
    if (
      ((_0x19c9f7 = this._activeLayer) == null
        ? undefined
        : _0x19c9f7.unitId) === _0x421d4b.unitId &&
      this._activeLayer["subUnitId"] === _0x4cc485 &&
      this._activeLayer["drawingId"] === _0x421d4b.drawingId &&
      this._activeLayer["chartId"] === _0x421d4b.chartId
    ) {
      let _0x12eadc = this._activeLayer["scene"] !== _0x3ba7b0.scene;
      ((this._activeLayer["scene"] = _0x3ba7b0.scene),
        (this._activeLayer["sceneRect"] = _0x3ba7b0.sceneRect),
        (this._activeLayer["angle"] = _0x3ba7b0.angle),
        (this._activeLayer["renderRect"] = _0x31d5f9),
        this._activeLayer["position$"].next(_0x3ba7b0.position),
        _0x12eadc && this._bindActiveLayerObservers(this._activeLayer));
      return;
    }
    this._deactivate();
    let _0x4b1a12 = new f["BehaviorSubject"](_0x3ba7b0.position),
      _0x47d039 = this._renderManagerService["getRenderUnitById"](
        _0x421d4b.unitId,
      ),
      _0x3aa71d =
        _0x47d039 == null ||
        (_0x7d5f50 = (_0x29ae48 = _0x47d039.engine).getCanvasElement) == null
          ? undefined
          : _0x7d5f50.call(_0x29ae48);
    (this._canvasFloatDomService["addFloatDom"]({
      id: _0x421d4b.drawingId,
      componentKey: We,
      position$: _0x4b1a12,
      unitId: _0x421d4b.unitId,
      contentBox: { wrapperInset: 0, contentInset: 0 },
      props: { chartId: _0x421d4b.chartId, subUnitId: _0x4cc485 },
      onPointerDown: (_0x5da425) =>
        _0x3aa71d == null
          ? undefined
          : _0x3aa71d.dispatchEvent(
              new PointerEvent(_0x5da425.type, _0x5da425),
            ),
      onPointerMove: (_0x807709) =>
        _0x3aa71d == null
          ? undefined
          : _0x3aa71d.dispatchEvent(
              new PointerEvent(_0x807709.type, _0x807709),
            ),
      onPointerUp: (_0x104dd5) =>
        _0x3aa71d == null
          ? undefined
          : _0x3aa71d.dispatchEvent(
              new PointerEvent(_0x104dd5.type, _0x104dd5),
            ),
      onWheel: (_0x5d7d86) =>
        _0x3aa71d == null
          ? undefined
          : _0x3aa71d.dispatchEvent(new WheelEvent(_0x5d7d86.type, _0x5d7d86)),
    }),
      this._modelService["setActiveChartById"](
        _0x421d4b.unitId,
        _0x421d4b.chartId,
      ));
    let _0x905fd9 = {
      unitId: _0x421d4b.unitId,
      subUnitId: _0x4cc485,
      drawingId: _0x421d4b.drawingId,
      chartId: _0x421d4b.chartId,
      scene: _0x3ba7b0.scene,
      sceneRect: _0x3ba7b0.sceneRect,
      angle: _0x3ba7b0.angle,
      renderRect: _0x31d5f9,
      position$: _0x4b1a12,
    };
    ((this._activeLayer = _0x905fd9),
      this._bindActiveLayerObservers(_0x905fd9));
  }
  _deactivate() {
    var _0x3b64e2, _0x86017;
    let _0x2ef48c = this._activeLayer;
    _0x2ef48c &&
      ((this._activeLayer = null),
      (_0x3b64e2 = _0x2ef48c.positionObserver) == null || _0x3b64e2.dispose(),
      (_0x86017 = _0x2ef48c.scaleObserver) == null || _0x86017.dispose(),
      this._staticRenderController["setActiveDomReady"](
        {
          unitId: _0x2ef48c.unitId,
          subUnitId: _0x2ef48c.subUnitId,
          drawingId: _0x2ef48c.drawingId,
        },
        false,
      ),
      this._canvasFloatDomService["removeFloatDom"](_0x2ef48c.drawingId),
      this._modelService["setActiveChartRuntime"](null),
      this._snapshotRenderService["invalidateChart"](
        _0x2ef48c.unitId,
        _0x2ef48c.chartId,
      ),
      _0x2ef48c.position$["complete"]());
  }
  _refreshActivePosition(_0x3ce9aa, _0x5db7a1, _0x4baf68) {
    let _0x55e55c = this._activeLayer;
    (_0x55e55c == null ? undefined : _0x55e55c.unitId) === _0x3ce9aa &&
      _0x55e55c.drawingId === _0x5db7a1 &&
      _0x55e55c.chartId === _0x4baf68 &&
      _0x55e55c.position$["next"](
        Be(_0x55e55c.sceneRect, _0x55e55c.scene, 1, _0x55e55c.angle),
      );
  }
  _refreshActiveLayout(_0xd88cc) {
    let _0x378663 = this._activeLayer;
    !_0x378663 ||
      _0x378663.unitId !== _0xd88cc ||
      (this._refreshActivePosition(
        _0x378663.unitId,
        _0x378663.drawingId,
        _0x378663.chartId,
      ),
      this._visualLayoutChanged$["next"](_0x378663.drawingId));
  }
  _bindActiveLayerObservers(_0x2a4c6d) {
    var _0x34e1ad, _0x3a5eed;
    ((_0x34e1ad = _0x2a4c6d.positionObserver) == null || _0x34e1ad.dispose(),
      (_0x3a5eed = _0x2a4c6d.scaleObserver) == null || _0x3a5eed.dispose());
    let _0x561db9 = _0x2a4c6d.scene["getViewport"](l.VIEWPORT_KEY["VIEW_MAIN"]);
    if (!_0x561db9) return;
    _0x2a4c6d.positionObserver = Ue(_0x561db9.onScrollAfter$, () => {
      this._refreshActivePosition(
        _0x2a4c6d.unitId,
        _0x2a4c6d.drawingId,
        _0x2a4c6d.chartId,
      );
    });
    let _0x35b471 = _0x2a4c6d.scene["onTransformChange$"].subscribeEvent(
      (_0x2ac496) => {
        _0x2ac496.type !== h.TRANSFORM_CHANGE_OBSERVABLE_TYPE["scale"] ||
          (_0x2ac496.value["scaleX"] === _0x2ac496.preValue["scaleX"] &&
            _0x2ac496.value["scaleY"] === _0x2ac496.preValue["scaleY"]) ||
          this._refreshActiveLayout(_0x2a4c6d.unitId);
      },
    );
    _0x2a4c6d.scaleObserver = (0, e.toDisposable)(() =>
      _0x35b471.unsubscribe(),
    );
  }
  _updatePosition(_0x5dae54) {
    let _0xcc9f56 = this._getPositionState(_0x5dae54),
      _0x4ebedb = this._getRenderRect(_0x5dae54);
    if (_0xcc9f56 && _0x4ebedb) {
      var _0x4c73c6;
      if (this._activeLayer) {
        let _0x4df2ef = this._activeLayer["scene"] !== _0xcc9f56.scene;
        ((this._activeLayer["scene"] = _0xcc9f56.scene),
          (this._activeLayer["sceneRect"] = _0xcc9f56.sceneRect),
          (this._activeLayer["angle"] = _0xcc9f56.angle),
          (this._activeLayer["renderRect"] = _0x4ebedb),
          _0x4df2ef && this._bindActiveLayerObservers(this._activeLayer));
      }
      ((_0x4c73c6 = this._activeLayer) == null ||
        _0x4c73c6.position$["next"](_0xcc9f56.position),
        this._layoutChanged$["next"](_0x5dae54.drawingId));
    }
  }
  _retryActivateFocusedChart(_0x4c4584) {
    let _0x484a1c = this._drawingManagerService["getFocusDrawings"]().filter(
      (_0x560ef9) => this._isDocChartDrawing(_0x560ef9),
    );
    _0x484a1c.length === 1 &&
      _0x4c4584.some((_0x26d552) => Ve(_0x26d552, _0x484a1c[0])) &&
      this._activate(_0x484a1c[0]);
  }
  _getPositionState(_0x1388e0) {
    let _0x36cbcd = _0x1388e0.transform;
    if (!_0x36cbcd) return null;
    let _0xeddff0 = this._renderManagerService["getRenderUnitById"](
      _0x1388e0.unitId,
    );
    if (
      !(_0xeddff0 != null && _0xeddff0.scene) ||
      !_0xeddff0.scene["getViewport"](l.VIEWPORT_KEY["VIEW_MAIN"])
    )
      return null;
    let _0x4c3f34 = (0, m.getDrawingShapeKeyByDrawingSearch)(_0x1388e0),
      _0x4de80d = _0xeddff0.scene["getObjectIncludeInGroup"](_0x4c3f34),
      _0x4609e9 = He(_0x1388e0, _0x4de80d),
      _0x4c5104 = _0x4609e9.right - _0x4609e9.left,
      _0x4b8d2e = _0x4609e9.bottom - _0x4609e9.top;
    if (_0x4c5104 <= 0 || _0x4b8d2e <= 0) return null;
    let _0x17fd19 = X([
      _0x4de80d == null ? undefined : _0x4de80d.angle,
      _0x36cbcd.angle,
    ]);
    return {
      scene: _0xeddff0.scene,
      sceneRect: _0x4609e9,
      angle: _0x17fd19,
      position: Be(_0x4609e9, _0xeddff0.scene, 1, _0x17fd19),
    };
  }
  _getRenderRect(_0x49206a) {
    var _0x7b9cc5, _0x4c37c2, _0x44159d, _0x275a63;
    let _0xa95bcb =
        ((_0x7b9cc5 = _0x49206a.transform) == null
          ? undefined
          : _0x7b9cc5.width) ??
        ((_0x4c37c2 = _0x49206a.docTransform) == null ||
        (_0x4c37c2 = _0x4c37c2.size) == null
          ? undefined
          : _0x4c37c2.width) ??
        0,
      _0x5b9c37 =
        ((_0x44159d = _0x49206a.transform) == null
          ? undefined
          : _0x44159d.height) ??
        ((_0x275a63 = _0x49206a.docTransform) == null ||
        (_0x275a63 = _0x275a63.size) == null
          ? undefined
          : _0x275a63.height) ??
        0;
    return _0xa95bcb <= 0 || _0x5b9c37 <= 0
      ? null
      : {
          width: Math.max(1, Math.round(_0xa95bcb)),
          height: Math.max(1, Math.round(_0x5b9c37)),
        };
  }
  _getActiveRenderRect(_0x2d80ba) {
    let _0x4f3870 = this._activeLayer;
    if (
      (_0x4f3870 == null ? undefined : _0x4f3870.unitId) === _0x2d80ba.unitId &&
      _0x4f3870.subUnitId === (_0x2d80ba.subUnitId ?? _0x2d80ba.unitId) &&
      _0x4f3870.drawingId === _0x2d80ba.drawingId &&
      _0x4f3870.chartId === _0x2d80ba.chartId
    )
      return _0x4f3870.renderRect;
    let _0xaeb5ea = this._drawingManagerService["getDrawingByParam"](
      this._getDrawingSearch(_0x2d80ba),
    );
    return this._isDocChartDrawing(_0xaeb5ea)
      ? this._getRenderRect(_0xaeb5ea)
      : null;
  }
  _getActiveRenderScale(_0x1f7fcb) {
    let _0x120a06 = this._activeLayer;
    return _0x120a06 && this._isActiveLayer(_0x1f7fcb)
      ? _0x120a06.scene["getAncestorScale"]()
      : null;
  }
  _getDrawingSearch(_0x244161) {
    return {
      unitId: _0x244161.unitId,
      subUnitId: _0x244161.subUnitId ?? _0x244161.unitId,
      drawingId: _0x244161.drawingId,
    };
  }
  _isActiveLayer(_0x1c0c0b) {
    let _0x3d8f90 = this._activeLayer;
    return (
      (_0x3d8f90 == null ? undefined : _0x3d8f90.unitId) === _0x1c0c0b.unitId &&
      _0x3d8f90.subUnitId === (_0x1c0c0b.subUnitId ?? _0x1c0c0b.unitId) &&
      _0x3d8f90.drawingId === _0x1c0c0b.drawingId &&
      _0x3d8f90.chartId === _0x1c0c0b.chartId
    );
  }
  _isDocChartDrawing(_0xceaea0) {
    let _0x3f4c4a = _0xceaea0;
    return (
      (_0x3f4c4a == null ? undefined : _0x3f4c4a.drawingType) ===
        e.DrawingTypeEnum["DRAWING_CHART"] &&
      typeof _0x3f4c4a.chartId == "string"
    );
  }
};
Z = S(
  [
    x(0, m.IDrawingManagerService),
    x(1, h.IRenderManagerService),
    x(2, (0, e.Inject)(i.CanvasFloatDomService)),
    x(3, (0, e.Inject)(s.DocChartModelService)),
    x(4, (0, e.Inject)(F)),
    x(5, (0, e.Inject)(G)),
    x(6, e.ICommandService),
    x(7, e.IUniverInstanceService),
    x(8, (0, e.Inject)(e.LocaleService)),
    x(9, (0, e.Inject)(Y)),
  ],
  Z,
);
const We = "docs-chart-ui.active-chart",
  Ge = (_0xae7033) => {
    let {
        unitId: _0x3f83e4,
        subUnitId: _0x76ec86,
        floatDomId: _0x58e63c,
        chartId: _0x3b1830,
        context: _0x1c3a8a,
      } = _0xae7033,
      _0x36ae6a = (0, i.useDependency)(Z);
    return (
      (0, a.useEffect)(() => {
        let _0x47ab78 = _0x1c3a8a.root["current"];
        if (!_0x47ab78) return;
        let _0x5b5ac6 = _0x36ae6a.mountChart({
          unitId: _0x3f83e4,
          subUnitId: _0x76ec86,
          drawingId: _0x58e63c,
          chartId: _0x3b1830,
          root: _0x47ab78,
        });
        return () => _0x5b5ac6.dispose();
      }, [
        _0x36ae6a,
        _0x3b1830,
        _0x1c3a8a.root,
        _0x58e63c,
        _0x76ec86,
        _0x3f83e4,
      ]),
      null
    );
  },
  Ke = () => null;
let qe = class extends e.Disposable {
  constructor(_0x292823) {
    (super(), (this._componentManager = _0x292823), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](be, Se)),
      this.disposeWithMe(this._componentManager["register"](v, b)),
      this.disposeWithMe(this._componentManager["register"](R, B)),
      this.disposeWithMe(
        this._componentManager["register"](
          e.DOC_DRAWING_PRINTING_COMPONENT_KEY,
          Ke,
        ),
      ),
      this.disposeWithMe(this._componentManager["register"](We, Ge)));
  }
};
qe = S([x(0, (0, e.Inject)(i.ComponentManager))], qe);
const Je = "min(1200px, calc(100vw - 32px))";
let Ye = class extends e.Disposable {
  constructor(
    _0x44c49d,
    _0x2233dc,
    _0x1e4502,
    _0xfef4b0,
    _0x7e74a9,
    _0x126b61,
    _0x5e7237,
  ) {
    (super(),
      (this._dialogService = _0x44c49d),
      (this._localeService = _0x2233dc),
      (this._instanceService = _0x1e4502),
      (this._docSelectionManagerService = _0xfef4b0),
      (this._docContentInsertService = _0x7e74a9),
      (this._menuManagerService = _0x126b61),
      (this._commandService = _0x5e7237),
      this._initMenus(),
      this._registerDialogOperations());
  }
  openInsertDialog(_0x5623ac) {
    let _0x4634d9 = null,
      _0x23a15b = () => {
        (_0x4634d9 == null || _0x4634d9.dispose(), (_0x4634d9 = null));
      };
    return (
      (_0x4634d9 = this._dialogService["open"]({
        id: "doc-chart.dialog.insert",
        title: {
          title: this._localeService["t"]("docs-chart-ui.common.editChart"),
        },
        width: Je,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: be,
            props: {
              defaultChartType:
                (_0x5623ac == null ? undefined : _0x5623ac.defaultChartType) ??
                (_0x5623ac == null ? undefined : _0x5623ac.value),
              defaultTableText:
                _0x5623ac == null ? undefined : _0x5623ac.defaultTableText,
              insertOptions: {
                insertRange:
                  (_0x5623ac == null ? undefined : _0x5623ac.insertRange) ??
                  this._captureInsertRange(),
              },
              onCancel: _0x23a15b,
              onInserted: _0x23a15b,
            },
          },
        },
        onClose: _0x23a15b,
      })),
      true
    );
  }
  openEditorDialog(_0x34b83a) {
    let _0x2e5c98 = null,
      _0x1a63cb = () => {
        (_0x2e5c98 == null || _0x2e5c98.dispose(), (_0x2e5c98 = null));
      };
    return (
      (_0x2e5c98 = this._dialogService["open"]({
        id: z,
        title: {
          title: this._localeService["t"]("docs-chart-ui.common.editChart"),
        },
        width: Je,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: { name: R, props: { ..._0x34b83a, onClose: _0x1a63cb } },
        },
        onClose: _0x1a63cb,
      })),
      true
    );
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](Pe);
  }
  _registerDialogOperations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x4704fa) => {
        if (_0x4704fa.id === g.id) {
          this.openInsertDialog(_0x4704fa.params);
          return;
        }
        if (_0x4704fa.id === _.id) {
          let _0x2e7d44 = _0x4704fa.params;
          _0x2e7d44 && this.openEditorDialog(_0x2e7d44);
        }
      }),
    );
  }
  _captureInsertRange() {
    let _0x2f6b35 = this._instanceService["getCurrentUnitOfType"](
      e.UniverInstanceType["UNIVER_DOC"],
    );
    if (!_0x2f6b35) return;
    let _0x126982 = _0x2f6b35.getUnitId(),
      _0x1a40f0 = null;
    try {
      _0x1a40f0 =
        this._docContentInsertService["consumeInsertRange"](_0x126982);
    } catch {
      _0x1a40f0 = null;
    }
    if (_0x1a40f0) {
      let _0x148365 = {
        startOffset: _0x1a40f0.startOffset,
        endOffset: _0x1a40f0.endOffset,
        collapsed: _0x1a40f0.startOffset === _0x1a40f0.endOffset,
        segmentId: _0x1a40f0.segmentId ?? "",
      };
      return V(_0x2f6b35, _0x148365) ? _0x148365 : undefined;
    }
    let _0x5ad722 = [
      ...(this._docSelectionManagerService["getTextRanges"]() ?? []),
    ];
    if (_0x5ad722.length !== 1) return;
    let _0x398954 =
      this._docSelectionManagerService["getActiveTextRange"]() ?? _0x5ad722[0];
    if (!_0x398954 || !_0x398954.collapsed || _0x398954.startOffset == null)
      return;
    let _0x268bae = { ..._0x398954, segmentId: _0x398954.segmentId ?? "" };
    return V(_0x2f6b35, _0x268bae) ? _0x268bae : undefined;
  }
};
Ye = S(
  [
    x(0, (0, e.Inject)(i.IDialogService)),
    x(1, (0, e.Inject)(e.LocaleService)),
    x(2, e.IUniverInstanceService),
    x(3, (0, e.Inject)(c.DocSelectionManagerService)),
    x(4, (0, e.Inject)(c.DocContentInsertService)),
    x(5, i.IMenuManagerService),
    x(6, e.ICommandService),
  ],
  Ye,
);
let Xe = class extends e.Disposable {
  constructor(_0xfe3749, _0x4b8989) {
    (super(),
      (this._snapshotService = _0x4b8989),
      this.disposeWithMe(_0xfe3749.register(this)));
  }
  supports(_0x1c7118) {
    return "unitId" in _0x1c7118 && "getDrawingId" in _0x1c7118;
  }
  exportImage(_0x1b4c01, _0x3ea02d) {
    if (!this.supports(_0x1b4c01)) return Promise.resolve(undefined);
    let _0x284c2c = _0x1b4c01.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: _0x1b4c01.unitId,
      chartId: _0x1b4c01.getId(),
      width: Math.max(
        1,
        (_0x284c2c == null ? undefined : _0x284c2c.width) ?? 1,
      ),
      height: Math.max(
        1,
        (_0x284c2c == null ? undefined : _0x284c2c.height) ?? 1,
      ),
      format: _0x3ea02d == null ? undefined : _0x3ea02d.format,
      mode: "export",
    });
  }
};
Xe = S(
  [x(0, (0, e.Inject)(t.ChartImageExportService)), x(1, (0, e.Inject)(G))],
  Xe,
);
function Ze(_0x552cea, _0x4ddb5e, _0x25afac) {
  let _0x32ce21 = _0x25afac.docsTop ?? 0,
    _0x2addf4 = _0x25afac.docsLeft ?? 0,
    _0x1a06fe = _0x32ce21;
  for (let _0x403733 of _0x4ddb5e) {
    let _0x3bbb8b = _0x403733.skeDrawings["get"](_0x552cea.drawingId);
    if (_0x3bbb8b)
      return {
        left: _0x2addf4 + _0x403733.marginLeft + _0x3bbb8b.aLeft,
        top: _0x1a06fe + _0x403733.marginTop + _0x3bbb8b.aTop,
        width: _0x3bbb8b.width,
        height: _0x3bbb8b.height,
        angle: _0x3bbb8b.angle,
        flipX: _0x552cea.docTransform["flipX"],
        flipY: _0x552cea.docTransform["flipY"],
      };
    let _0x51a465 = Number.isFinite(_0x403733.pageHeight)
      ? _0x403733.pageHeight
      : _0x403733.height;
    _0x1a06fe += Math.max(0, _0x51a465) + _0x25afac.pageMarginTop;
  }
  return null;
}
let Q = class extends e.Disposable {
  constructor(_0x51e059, _0x30e115, _0x1fb698, _0x5829ed) {
    (super(),
      (this._drawingManagerService = _0x51e059),
      (this._renderManagerService = _0x30e115),
      (this._snapshotRenderService = _0x1fb698),
      (this._docPrintInterceptorService = _0x5829ed),
      N(this, "_preparedCharts", new Map()));
    let _0x285e77 =
      this._docPrintInterceptorService["registerPrintPreparation"];
    (_0x285e77 &&
      this.disposeWithMe(
        _0x285e77.call(this._docPrintInterceptorService, (_0x4e472f) =>
          this.prepare(_0x4e472f),
        ),
      ),
      this._initPrinting());
  }
  async prepare(_0x539a1c) {
    let _0x3edc2e = this._getChartDrawings(_0x539a1c.unitId),
      _0x5dd8be = new Map();
    (this._preparedCharts["set"](_0x539a1c.unitId, _0x5dd8be),
      await Promise.allSettled(
        _0x3edc2e.map(async (_0x2c1f33) => {
          let _0x40012e = Qe(_0x2c1f33);
          if (!_0x40012e) return;
          let _0x1619fd = {
              unitId: _0x539a1c.unitId,
              chartId: _0x2c1f33.chartId,
              width: _0x40012e.width,
              height: _0x40012e.height,
              dpr: _0x539a1c.dpr,
              mode: "print",
            },
            _0x319fd0 = {
              ..._0x1619fd,
              dpr: n.DEFAULT_CHART_DEVICE_PIXEL_RATIO,
              mode: "main",
            },
            _0x20388a = this._snapshotRenderService["getSnapshot"](_0x319fd0),
            _0x5180ad =
              (_0x20388a == null ? undefined : _0x20388a.status) === "ready"
                ? this._getRenderedChartImage(_0x2c1f33)
                : null;
          if (_0x5180ad) {
            _0x5dd8be.set(_0x2c1f33.drawingId, { image: _0x5180ad });
            return;
          }
          let _0xf6a689 =
            (_0x20388a == null ? undefined : _0x20388a.status) === "ready"
              ? _0x20388a.dataUrl
              : await this._snapshotRenderService["exportImage"](
                  (_0x20388a == null ? undefined : _0x20388a.status) ===
                    "pending"
                    ? _0x319fd0
                    : _0x1619fd,
                );
          _0xf6a689 &&
            _0x5dd8be.set(_0x2c1f33.drawingId, { image: await $e(_0xf6a689) });
        }),
      ));
  }
  _initPrinting() {
    this.disposeWithMe(
      this._docPrintInterceptorService["interceptor"].intercept(
        this._docPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (
            _0x2258bc,
            {
              unitId: _0x70bdde,
              scene: _0x31a547,
              skeleton: _0x64ffc6,
              documents: _0x392c6c,
            },
            _0x173217,
          ) => {
            var _0x475ddf, _0x5a7458;
            let _0x3b5dfd = _0x173217(_0x2258bc),
              _0x5edc18 = this._preparedCharts["get"](_0x70bdde),
              _0x2983fb =
                ((_0x475ddf = _0x64ffc6.getSkeletonData()) == null
                  ? undefined
                  : _0x475ddf.pages) ?? [];
            if (!(_0x5edc18 != null && _0x5edc18.size) || !_0x2983fb.length)
              return _0x3b5dfd;
            let _0x5aec98 =
              (_0x5a7458 =
                this._drawingManagerService["getDrawingDataForUnit"](
                  _0x70bdde,
                )) == null
                ? undefined
                : _0x5a7458[_0x70bdde];
            return (
              _0x5aec98 == null ||
                _0x5aec98.order["forEach"]((_0x25a455, _0x5dcb80) => {
                  let _0x40684f = _0x5aec98.data[_0x25a455],
                    _0x72d70d = _0x5edc18.get(_0x25a455);
                  if (
                    !_0x72d70d ||
                    _0x40684f.hidden ||
                    _0x40684f.drawingType !== e.DrawingTypeEnum["DRAWING_CHART"]
                  )
                    return;
                  let _0x29a6ce = {
                    ...(Ze(_0x40684f, _0x2983fb, _0x392c6c.getOffsetConfig()) ??
                      (0, c.docDrawingPositionToTransform)(
                        _0x40684f.docTransform,
                      )),
                    image: _0x72d70d.image,
                    printable: true,
                    forceRender: true,
                    zIndex: _0x5dcb80,
                  };
                  _0x31a547.addObject(
                    new h.Image(
                      (0, m.getDrawingShapeKeyByDrawingSearch)(_0x40684f),
                      _0x29a6ce,
                    ),
                    h.DRAWING_OBJECT_LAYER_INDEX,
                  );
                }),
              _0x3b5dfd
            );
          },
        },
      ),
    );
  }
  _getChartDrawings(_0x236726) {
    var _0x58feab;
    let _0x4668da =
      (_0x58feab =
        this._drawingManagerService["getDrawingDataForUnit"](_0x236726)) == null
        ? undefined
        : _0x58feab[_0x236726];
    return (
      (_0x4668da == null
        ? undefined
        : _0x4668da.order["map"](
            (_0xbd4cb2) => _0x4668da.data[_0xbd4cb2],
          ).filter(
            (_0xa91db1) =>
              _0xa91db1.drawingType === e.DrawingTypeEnum["DRAWING_CHART"] &&
              !_0xa91db1.hidden &&
              !!_0xa91db1.chartId,
          )) ?? []
    );
  }
  _getRenderedChartImage(_0x32b027) {
    var _0x31fbf3, _0x1be0c0;
    let _0x15a97f =
        (_0x31fbf3 = this._renderManagerService["getRenderUnitById"](
          _0x32b027.unitId,
        )) == null
          ? undefined
          : _0x31fbf3.scene,
      _0x1e15d4 =
        _0x15a97f == null
          ? undefined
          : _0x15a97f.getObjectIncludeInGroup(
              (0, m.getDrawingShapeKeyByDrawingSearch)(_0x32b027),
            ),
      _0x54cb57 =
        _0x1e15d4 == null || (_0x1be0c0 = _0x1e15d4.getNative) == null
          ? undefined
          : _0x1be0c0.call(_0x1e15d4);
    return _0x54cb57 != null && _0x54cb57.complete && _0x54cb57.naturalWidth > 0
      ? _0x54cb57
      : null;
  }
};
Q = S(
  [
    x(0, m.IDrawingManagerService),
    x(1, h.IRenderManagerService),
    x(2, (0, e.Inject)(G)),
    x(3, (0, e.Inject)(l.DocPrintInterceptorService)),
  ],
  Q,
);
function Qe(_0x4c913b) {
  var _0x5d4b1c, _0x1ba92a, _0x3d4057, _0x367316;
  let _0x1138ea =
      ((_0x5d4b1c = _0x4c913b.transform) == null
        ? undefined
        : _0x5d4b1c.width) ??
      ((_0x1ba92a = _0x4c913b.docTransform) == null ||
      (_0x1ba92a = _0x1ba92a.size) == null
        ? undefined
        : _0x1ba92a.width) ??
      0,
    _0x5bdbe7 =
      ((_0x3d4057 = _0x4c913b.transform) == null
        ? undefined
        : _0x3d4057.height) ??
      ((_0x367316 = _0x4c913b.docTransform) == null ||
      (_0x367316 = _0x367316.size) == null
        ? undefined
        : _0x367316.height) ??
      0;
  return _0x1138ea > 0 && _0x5bdbe7 > 0
    ? {
        width: Math.max(1, Math.round(_0x1138ea)),
        height: Math.max(1, Math.round(_0x5bdbe7)),
      }
    : null;
}
function $e(_0x5c2c44) {
  return new Promise((_0x4677cf, _0x1cd231) => {
    let _0x50db0d = new globalThis.Image(),
      _0x272247 = globalThis.setTimeout(
        () => _0x1cd231(Error("Timed out loading document chart print image.")),
        10000,
      ),
      _0x363f5b = (_0x403e5e) => {
        (globalThis.clearTimeout(_0x272247),
          (_0x50db0d.onload = null),
          (_0x50db0d.onerror = null),
          _0x403e5e());
      };
    ((_0x50db0d.onload = () => _0x363f5b(() => _0x4677cf(_0x50db0d))),
      (_0x50db0d.onerror = () =>
        _0x363f5b(() =>
          _0x1cd231(Error("Failed to load document chart print image.")),
        )),
      (_0x50db0d.src = _0x5c2c44),
      _0x50db0d.complete &&
        _0x50db0d.naturalWidth > 0 &&
        _0x363f5b(() => _0x4677cf(_0x50db0d)));
  });
}
let $ = class extends e.Plugin {
  constructor(_0x483433 = we, _0x44ed21, _0x68fe15, _0x4cc220) {
    (super(),
      (this._config = _0x483433),
      (this._injector = _0x44ed21),
      (this._configService = _0x68fe15),
      (this._commandService = _0x4cc220));
    let { ..._0x5be1ec } = (0, e.merge)({}, we, this._config);
    (this._configService["setConfig"](Ce, _0x5be1ec), this._initCommands());
  }
  onStarting() {
    let _0x5e928e = this._injector;
    ([
      [qe],
      [H],
      [C],
      [w, { useClass: T }],
      [Z],
      [Q],
      [F],
      [G],
      [Xe],
      [K],
      [Y],
      [U],
      [W],
      [Ye],
    ].forEach((_0x5132c9) => _0x5e928e.add(_0x5132c9)),
      (0, e.touchDependencies)(_0x5e928e, [
        [H],
        [C],
        [w],
        [Z],
        [Q],
        [F],
        [G],
        [Xe],
        [U],
        [W],
      ]),
      this._injector["get"](qe));
  }
  onReady() {
    (this._injector["get"](K),
      this._injector["get"](Y),
      this._injector["get"](U),
      this._injector["get"](W),
      this._injector["get"](Ye));
  }
  _initCommands() {
    [g, _].forEach((_0x548813) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x548813));
    });
  }
};
(N($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  N($, "pluginName", "UniverDocsChartUIPlugin"),
  N($, "packageName", Fe),
  N($, "version", Ie),
  ($ = S(
    [
      (0, e.DependentOn)(
        p.UniverLicensePlugin,
        c.UniverDocsPlugin,
        m.UniverDrawingPlugin,
        h.UniverRenderEnginePlugin,
        u.UniverDocsDrawingPlugin,
        l.UniverDocsUIPlugin,
        t.UniverChartUIPlugin,
        s.UniverDocsChartPlugin,
        d.UniverDocsDrawingUIPlugin,
      ),
      x(1, (0, e.Inject)(e.Injector)),
      x(2, e.IConfigService),
      x(3, e.ICommandService),
    ],
    $,
  )),
  (exports.DOCS_CHART_UI_PLUGIN_CONFIG_KEY = Ce),
  (exports.DOC_ACTIVE_CHART_COMPONENT = We),
  (exports.DOC_CHART_CLIPBOARD_RESOURCE_KEY = Te),
  (exports.DOC_CHART_DATA_EDITOR_COMPONENT = v),
  (exports.DOC_CHART_DATA_EDITOR_DIALOG_ID = "doc-chart.dialog.data-editor"),
  (exports.DOC_CHART_EDITOR_DIALOG_COMPONENT = R),
  (exports.DOC_CHART_EDITOR_DIALOG_ID = z),
  (exports.DOC_CHART_INSERT_BELOW_MENU_ID = ke),
  (exports.DOC_CHART_INSERT_MENU_ID = q),
  (exports.DOC_CHART_INSERT_PANEL_COMPONENT = be),
  (exports.DocActiveChart = Ge),
  Object.defineProperty(exports, "DocChartActiveRenderService", {
    enumerable: true,
    get: function () {
      return Z;
    },
  }),
  Object.defineProperty(exports, "DocChartClipboardController", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  Object.defineProperty(exports, "DocChartDataEditService", {
    enumerable: true,
    get: function () {
      return C;
    },
  }),
  (exports.DocChartDataEditor = b),
  (exports.DocChartDataEditorSubmitMode = y),
  Object.defineProperty(exports, "DocChartDrawingEditController", {
    enumerable: true,
    get: function () {
      return W;
    },
  }),
  (exports.DocChartEditPanel = ne),
  (exports.DocChartEditorDialog = B),
  (exports.DocChartInsertBelowMenuItemFactory = Ne),
  (exports.DocChartInsertMenuItemFactory = J),
  (exports.DocChartInsertPanel = Se),
  (exports.DocChartInsertRibbonMenuItemFactory = Me),
  Object.defineProperty(exports, "DocChartInsertService", {
    enumerable: true,
    get: function () {
      return H;
    },
  }),
  Object.defineProperty(exports, "DocChartPrintService", {
    enumerable: true,
    get: function () {
      return Q;
    },
  }),
  Object.defineProperty(exports, "DocChartRenderService", {
    enumerable: true,
    get: function () {
      return F;
    },
  }),
  Object.defineProperty(exports, "DocChartSnapshotRefreshController", {
    enumerable: true,
    get: function () {
      return K;
    },
  }),
  Object.defineProperty(exports, "DocChartSnapshotRenderService", {
    enumerable: true,
    get: function () {
      return G;
    },
  }),
  Object.defineProperty(exports, "DocChartUIService", {
    enumerable: true,
    get: function () {
      return T;
    },
  }),
  (exports.DocDomChartHost = P),
  (exports.DocPrintChart = Ke),
  (exports.DocsChartUIMenuSchema = Pe),
  (exports.IDocChartSnapshotRendererService = De),
  (exports.IDocChartUIService = w),
  (exports.OpenDocChartEditorDialogOperation = _),
  (exports.OpenDocChartInsertDialogOperation = g),
  Object.defineProperty(exports, "UniverDocsChartUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.defaultPluginConfig = we),
  (exports.getDocChartInsertDisabledObservable = Ae));
