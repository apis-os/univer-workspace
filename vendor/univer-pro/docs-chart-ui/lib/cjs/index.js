Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
    }
  },
  _ = {
    id: "doc.operation.open-doc-chart-editor-dialog",
    type: e.CommandType["OPERATION"],
    handler() {
      return true;
    }
  },
  v = "doc-chart.data-editor";
let y = function (var_core_value_sigA021) {
  return var_core_value_sigA021.SHARED = "shared", var_core_value_sigA021.DUPLICATE = "duplicate", var_core_value_sigA021;
}({});
function b(var_core_value_sig49D9) {
  let var_core_value_sig320C = (0, i.useDependency)(e.LocaleService),
    {
      values: var_core_value_sigE7F0,
      onCancel: var_core_value_sigE837,
      onChange: var_core_value_sig34F4,
      onSubmit: var_core_value_sigA45D
    } = var_core_value_sig49D9,
    [var_core_value_sig1BC7, var_core_value_sig4956] = (0, a.useState)(() => (0, n.isReferencedChartDataSource)(var_core_value_sig49D9.dataSource) ? "referenced" : "inline"),
    [var_core_value_sigCC9E, var_core_value_sig444C] = (0, a.useState)(null),
    [var_core_value_sigE42E, var_core_value_sigF039] = (0, a.useState)(() => var_core_value_sigE7F0.map(var_core_value_sigB577 => [...var_core_value_sigB577])),
    [var_core_value_sigA321, var_core_value_sigBF4C] = (0, a.useState)(null),
    var_core_value_sig3457 = var_core_value_sigCF89 => {
      var_core_value_sigF039(var_core_value_sigCF89), var_core_value_sig34F4 == null || var_core_value_sig34F4(var_core_value_sigCF89);
    },
    var_core_value_sig4A08 = var_core_value_sig00CB => {
      let var_core_value_sig77EE = (0, t.compactInlineTableValues)(var_core_value_sigE42E);
      if (var_core_value_sig77EE.length === 0) {
        var_core_value_sigBF4C(var_core_value_sig320C.t("docs-chart-ui.common.tableDataEmpty"));
        return;
      }
      var_core_value_sigBF4C(null), var_core_value_sigA45D(var_core_value_sig77EE, var_core_value_sig00CB);
    };
  return (0, o.jsxs)("div", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4",
    children: [(0, o.jsx)("div", {
      className: "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
      children: (0, o.jsx)(t.ChartReferencedDataSourceEditor, {
        mode: var_core_value_sig1BC7,
        initialSource: (0, n.isReferencedChartDataSource)(var_core_value_sig49D9.dataSource) ? var_core_value_sig49D9.dataSource["source"] : undefined,
        inlineContent: (0, o.jsx)(t.ChartInlineTableEditor, {
          values: var_core_value_sigE42E,
          parsePastedText: n.parseInlineChartTable,
          onChange: var_core_value_sig3457
        }),
        onModeChange: var_core_value_sig9F76 => {
          var_core_value_sig4956(var_core_value_sig9F76), var_core_value_sig444C(null);
        },
        onPreviewChange: (var_core_value_sigB008, var_core_value_sig8721) => {
          var_core_value_sig444C(var_core_value_sigB008 && var_core_value_sig8721.status === n.ChartDataSourceRuntimeStatus["READY"] ? {
            source: var_core_value_sigB008
          } : null), var_core_value_sig8721.values && (var_core_value_sig34F4 == null || var_core_value_sig34F4(var_core_value_sig8721.values["map"](var_core_value_sig9572 => [...var_core_value_sig9572])));
        }
      })
    }), var_core_value_sigA321 && (0, o.jsx)("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_core_value_sigA321
    }), (0, o.jsxs)("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
      children: [var_core_value_sigE837 && (0, o.jsx)(r.Button, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sigE837,
        children: var_core_value_sig320C.t("docs-chart-ui.common.cancel")
      }), (0, o.jsx)(r.Button, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sig1BC7 === "referenced" && !var_core_value_sigCC9E,
        onClick: () => {
          var var_core_value_sig08BA;
          return var_core_value_sig1BC7 === "referenced" && var_core_value_sigCC9E ? (var_core_value_sig08BA = var_core_value_sig49D9.onDataSourceSubmit) == null ? undefined : var_core_value_sig08BA.call(var_core_value_sig49D9, var_core_value_sigCC9E) : var_core_value_sig4A08("shared");
        },
        children: var_core_value_sig320C.t("docs-chart-ui.common.apply")
      })]
    })]
  });
}
function x(var_core_value_sig1BC4, var_core_value_sig9EAB) {
  return function (var_core_value_sigDBB5, var_core_value_sigCFAC) {
    var_core_value_sig9EAB(var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig1BC4);
  };
}
function S(var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig3515) {
  var var_core_value_sigC2A0 = arguments.length,
    var_core_value_sig7C65 = var_core_value_sigC2A0 < 3 ? var_core_value_sig3A1E : var_core_value_sig3515 === null ? var_core_value_sig3515 = Object.getOwnPropertyDescriptor(var_core_value_sig3A1E, var_core_value_sigDC92) : var_core_value_sig3515,
    var_core_value_sig7F05;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig7C65 = Reflect.decorate(var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig3515);else {
    for (var var_core_value_sig41F3 = var_core_value_sigA5C3.length - 1; var_core_value_sig41F3 >= 0; var_core_value_sig41F3--) (var_core_value_sig7F05 = var_core_value_sigA5C3[var_core_value_sig41F3]) && (var_core_value_sig7C65 = (var_core_value_sigC2A0 < 3 ? var_core_value_sig7F05(var_core_value_sig7C65) : var_core_value_sigC2A0 > 3 ? var_core_value_sig7F05(var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig7C65) : var_core_value_sig7F05(var_core_value_sig3A1E, var_core_value_sigDC92)) || var_core_value_sig7C65);
  }
  return var_core_value_sigC2A0 > 3 && var_core_value_sig7C65 && Object.defineProperty(var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig7C65), var_core_value_sig7C65;
}
let C = class {
  constructor(var_core_value_sig237B, var_core_value_sigFEAB) {
    this._commandService = var_core_value_sig237B, this._resourceService = var_core_value_sigFEAB;
  }
  getEditorState(var_core_value_sigE347, var_core_value_sig3C5B) {
    let var_core_value_sig200B = this._resourceService["getChart"](var_core_value_sigE347, var_core_value_sig3C5B),
      var_core_value_sig3863 = var_core_value_sig200B ? this._resourceService["getDataSource"](var_core_value_sigE347, var_core_value_sig200B.dataSourceId) : undefined;
    return !var_core_value_sig200B || !var_core_value_sig3863 ? null : {
      unitId: var_core_value_sigE347,
      chartId: var_core_value_sig3C5B,
      dataSourceId: var_core_value_sig3863.id,
      dataSource: var_core_value_sig3863,
      values: (0, n.isInlineChartDataSource)(var_core_value_sig3863) ? var_core_value_sig3863.values["map"](var_core_value_sigD873 => [...var_core_value_sigD873]) : [],
      sharingCount: this._resourceService["getDataSourceSharingCount"](var_core_value_sigE347, var_core_value_sig3863.id)
    };
  }
  updateDataFromText(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E) {
    let var_core_value_sigA937 = (0, n.parseInlineChartTable)(var_core_value_sig1BD9);
    return var_core_value_sigA937.length !== 0 && this.updateData(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sigA937, var_core_value_sigE43E);
  }
  updateData(var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sig5E6A) {
    var var_core_value_sigB7FC;
    if (!this.getEditorState(var_core_value_sigCAD5, var_core_value_sigE503) || var_core_value_sig48DD.length === 0) return false;
    let var_core_value_sig9CD9 = (var_core_value_sigB7FC = this._resourceService["getChart"](var_core_value_sigCAD5, var_core_value_sigE503)) == null ? undefined : var_core_value_sigB7FC.chartType;
    if (var_core_value_sig9CD9 === undefined) return false;
    let var_core_value_sigFD0C = (0, t.tryPrepareInlineChartData)(var_core_value_sig9CD9, var_core_value_sig48DD);
    return var_core_value_sigFD0C.ok ? this.changeDataSource(var_core_value_sigCAD5, var_core_value_sigE503, {
      values: var_core_value_sigFD0C.values
    }) : false;
  }
  changeDataSource(var_core_value_sig849B, var_core_value_sig5F1A, var_core_value_sigB455) {
    return this._commandService["syncExecuteCommand"](s.ChangeDocChartDataSourceCommand["id"], {
      unitId: var_core_value_sig849B,
      chartId: var_core_value_sig5F1A,
      dataSource: var_core_value_sigB455
    });
  }
};
C = S([x(0, e.ICommandService), x(1, (0, e.Inject)(n.ChartResourceRepository))], C);
const w = (0, e.createIdentifier)("doc-chart.ui.service");
let T = class extends t.ChartUIService {
  constructor(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB) {
    super(var_core_value_sigCEFB), this._modelService = var_core_value_sig5241, this._commandService = var_core_value_sigC6E5;
  }
  get activeRuntimeModel() {
    return this._modelService["activeRuntimeModel"];
  }
  executeChartUpdateConfig(var_core_value_sig1537) {
    let var_core_value_sigE4C6 = this.activeRuntimeModel,
      var_core_value_sig4313 = var_core_value_sig1537.unitId ?? (var_core_value_sigE4C6 == null ? undefined : var_core_value_sigE4C6.unitId),
      var_core_value_sigFC87 = var_core_value_sig1537.chartId ?? (var_core_value_sigE4C6 == null ? undefined : var_core_value_sigE4C6.chartId);
    !var_core_value_sig4313 || !var_core_value_sigFC87 || this._commandService["executeCommand"](s.UpdateDocChartConfigCommand["id"], {
      ...var_core_value_sig1537,
      unitId: var_core_value_sig4313,
      chartId: var_core_value_sigFC87
    });
  }
};
T = S([x(0, (0, e.Inject)(s.DocChartModelService)), x(1, e.ICommandService), x(2, (0, e.Inject)(t.ChartViewStateRegistry))], T);
const E = {
    axis: {
      ...t.DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true
    },
    legend: t.DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: t.DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: t.DEFAULT_CHART_PARETO_VALUES,
    funnel: t.DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: t.DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: t.DEFAULT_CHART_INDICATOR_LINE_VALUES,
    pie: {
      ...t.DEFAULT_CHART_PIE_VALUES,
      doughnutHole: 0,
      pieHole: 0
    },
    relation: {
      ...t.DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: false
    },
    radar: t.DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...t.DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 1,
      rightAxis: {
        ltr: false,
        rtl: false
      }
    },
    style: t.DEFAULT_CHART_STYLE_VALUES,
    titles: t.DEFAULT_CHART_TITLE_VALUES,
    waterfall: {
      ...t.DEFAULT_CHART_WATERFALL_SETUP_VALUES,
      useSubtotal: true
    },
    waterfallStyle: t.DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: t.DEFAULT_CHART_WORD_CLOUD_VALUES
  },
  ee = [n.ChartTypeBits["Candlestick"], n.ChartTypeBits["Histogram"], n.ChartTypeBits["Treemap"], n.ChartTypeBits["Sunburst"], n.ChartTypeBits["Gauge"], n.ChartTypeBits["Chord"]];
function D() {
  let var_core_value_sigF455 = (0, t.useChartEditorChartType)();
  return (0, o.jsx)(t.ChartGradientFillField, {
    visible: ee.every(var_core_value_sig156F => !n.chartBitsUtils["baseOn"](var_core_value_sigF455, var_core_value_sig156F))
  });
}
function O(var_core_value_sig6E78) {
  return (0, o.jsxs)(t.ChartSectionAccordionItem, {
    id: var_core_value_sig6E78.id,
    children: [(0, o.jsx)(t.ChartSectionAccordionTrigger, {
      children: var_core_value_sig6E78.label
    }), (0, o.jsx)(t.ChartSectionAccordionContent, {
      children: var_core_value_sig6E78.children
    })]
  });
}
function k(var_core_value_sigB3EE, var_core_value_sigC50A = false) {
  let var_core_value_sig11D0 = var_core_value_sigB3EE === n.ChartTypeBits["WordCloud"],
    var_core_value_sigB8ED = n.chartBitsUtils["baseOn"](var_core_value_sigB3EE, n.ChartTypeBits["Pie"]),
    var_core_value_sig8EAE = var_core_value_sigB3EE === n.ChartTypeBits["Radar"],
    var_core_value_sig1CDD = var_core_value_sigB3EE === n.ChartTypeBits["Funnel"],
    var_core_value_sig0DB1 = var_core_value_sigB3EE === n.ChartTypeBits["Waterfall"],
    var_core_value_sig68A2 = var_core_value_sigB3EE === n.ChartTypeBits["Pareto"],
    var_core_value_sigCC17 = var_core_value_sigB3EE === n.ChartTypeBits["Candlestick"],
    var_core_value_sig32AE = var_core_value_sigB3EE === n.ChartTypeBits["Histogram"],
    var_core_value_sigC753 = var_core_value_sigB3EE === n.ChartTypeBits["Treemap"],
    var_core_value_sigFFD1 = var_core_value_sigB3EE === n.ChartTypeBits["Sunburst"],
    var_core_value_sig81AE = var_core_value_sigB3EE === n.ChartTypeBits["Gauge"],
    var_core_value_sigF79F = var_core_value_sigB3EE === n.ChartTypeBits["Chord"],
    var_core_value_sig0E54 = var_core_value_sigB3EE === n.ChartTypeBits["Relation"],
    var_core_value_sig3B17 = var_core_value_sigB3EE === n.ChartTypeBits["Heatmap"],
    var_core_value_sig6C4A = [t.ChartEditPanelSection["ChartStyle"], t.ChartEditPanelSection["ChartAndAxisTitles"]];
  return var_core_value_sig11D0 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["WordCloud"]), (0, t.chartTypeSupportsCapability)(var_core_value_sigB3EE, t.ChartEditorCapability["GeneralSeries"]) && !var_core_value_sig68A2 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Series"]), (0, t.chartTypeSupportsLineAndAreaStyle)(var_core_value_sigB3EE) && var_core_value_sig6C4A.push(t.ChartEditPanelSection["LineAndArea"]), var_core_value_sig8EAE && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Radar"]), var_core_value_sig0DB1 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["WaterfallSeries"]), var_core_value_sig68A2 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["ParetoBarSeries"], t.ChartEditPanelSection["ParetoLineSeries"]), var_core_value_sigB8ED && var_core_value_sig6C4A.push(t.ChartEditPanelSection["PieStyle"]), var_core_value_sig1CDD && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Funnel"]), var_core_value_sig3B17 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Heatmap"]), var_core_value_sig0E54 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Relation"]), var_core_value_sigCC17 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Candlestick"]), var_core_value_sig32AE && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Histogram"]), var_core_value_sigC753 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Treemap"]), var_core_value_sigFFD1 && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Sunburst"]), var_core_value_sig81AE && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Gauge"]), var_core_value_sigF79F && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Chord"]), (0, t.chartTypeSupportsCapability)(var_core_value_sigB3EE, t.ChartEditorCapability["Legend"]) && var_core_value_sig6C4A.push(t.ChartEditPanelSection["Legend"]), (0, t.chartTypeSupportsCapability)(var_core_value_sigB3EE, t.ChartEditorCapability["Axes"]) && (var_core_value_sig6C4A.push(t.ChartEditPanelSection["HorizontalAxis"], t.ChartEditPanelSection["VerticalAxis"]), var_core_value_sigC50A && var_core_value_sig6C4A.push(t.ChartEditPanelSection["RightVerticalAxis"]), var_core_value_sig6C4A.push(t.ChartEditPanelSection["GridlinesAndTicks"])), (0, t.chartTypeSupportsCapability)(var_core_value_sigB3EE, t.ChartEditorCapability["IndicatorLine"]) && var_core_value_sig6C4A.push(t.ChartEditPanelSection["IndicatorLine"]), var_core_value_sig6C4A;
}
function A(var_core_value_sig73D9) {
  return (0, o.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-3",
    children: [(0, o.jsx)(t.ChartAxisLineVisibilityField, {
      axis: var_core_value_sig73D9.axis,
      defaultValues: E.axis
    }), (0, o.jsx)(t.ChartAxisLabelVisibilityField, {
      axis: var_core_value_sig73D9.axis,
      defaultValues: E.axis
    }), (0, o.jsx)(t.ChartAxisReverseField, {
      axis: var_core_value_sig73D9.axis,
      defaultValues: E.axis
    }), (0, o.jsx)(t.ChartAxisBoundsFields, {
      axis: var_core_value_sig73D9.axis
    }), (0, o.jsx)(t.ChartAxisFormatTextField, {
      axis: var_core_value_sig73D9.axis
    }), (0, o.jsx)(t.ChartAxisLabelStyleFields, {
      axis: var_core_value_sig73D9.axis,
      defaultValues: E.axis
    }), (0, o.jsx)(t.ChartAxisTickVisibilityField, {
      axis: var_core_value_sig73D9.axis,
      defaultValues: E.axis
    })]
  });
}
function te(var_core_value_sigEAF8) {
  var var_core_value_sig0455, var_core_value_sig737C;
  let var_core_value_sig5AF5 = (0, i.useDependency)(e.LocaleService),
    var_core_value_sig9DE4 = (0, t.useChartEditorChartType)(),
    var_core_value_sig77FA = (0, t.useChartEditorHasRightAxis)(),
    [var_core_value_sigA4A7, var_core_value_sigA4DF] = (0, a.useState)(null),
    var_core_value_sigCC9D = (0, o.jsx)(t.ChartTypeSpecificStyleSection, {}),
    var_core_value_sig90F5 = {
      [t.ChartEditPanelSection["Candlestick"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.candlestick"),
      [t.ChartEditPanelSection["ChartAndAxisTitles"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.chartAndAxisTitles"),
      [t.ChartEditPanelSection["ChartStyle"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.chartStyle"),
      [t.ChartEditPanelSection["Chord"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.chord"),
      [t.ChartEditPanelSection["Funnel"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.funnel"),
      [t.ChartEditPanelSection["Gauge"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.gauge"),
      [t.ChartEditPanelSection["GridlinesAndTicks"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.gridlinesAndTicks"),
      [t.ChartEditPanelSection["Heatmap"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.heatmap"),
      [t.ChartEditPanelSection["Histogram"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.histogram"),
      [t.ChartEditPanelSection["HorizontalAxis"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.horizontalAxis"),
      [t.ChartEditPanelSection["IndicatorLine"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.indicatorLine"),
      [t.ChartEditPanelSection["Legend"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.legend"),
      [t.ChartEditPanelSection["LineAndArea"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.lineAndArea"),
      [t.ChartEditPanelSection["ParetoBarSeries"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.paretoBar"),
      [t.ChartEditPanelSection["ParetoLineSeries"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.paretoLine"),
      [t.ChartEditPanelSection["PieStyle"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.pie"),
      [t.ChartEditPanelSection["Radar"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.radar"),
      [t.ChartEditPanelSection["Relation"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.relation"),
      [t.ChartEditPanelSection["RightVerticalAxis"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.rightVerticalAxis"),
      [t.ChartEditPanelSection["Series"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.series"),
      [t.ChartEditPanelSection["Sunburst"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.sunburst"),
      [t.ChartEditPanelSection["Treemap"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.treemap"),
      [t.ChartEditPanelSection["Trendline"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.trendline"),
      [t.ChartEditPanelSection["VerticalAxis"]]: var_core_value_sig5AF5.t("docs-chart-ui.common.verticalAxis"),
      [t.ChartEditPanelSection["WaterfallSeries"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.waterfall"),
      [t.ChartEditPanelSection["WordCloud"]]: var_core_value_sig5AF5.t("docs-chart-ui.section.wordCloud")
    };
  (0, a.useEffect)(() => {
    var var_core_value_sigDD51;
    (var_core_value_sigDD51 = var_core_value_sigEAF8.route) != null && var_core_value_sigDD51.section && var_core_value_sigA4DF(var_core_value_sigEAF8.route["section"]);
  }, [var_core_value_sigEAF8.route]);
  let var_core_value_sigD2BA = {
    [t.ChartEditPanelSection["ChartStyle"]]: (0, o.jsx)(t.ChartStyleSection, {
      defaultValues: E.style
    }),
    [t.ChartEditPanelSection["ChartAndAxisTitles"]]: (0, o.jsxs)("div", {
      className: "univer-flex univer-flex-col univer-gap-3",
      children: [(0, o.jsx)(t.ChartMainTitleFields, {
        commitMode: "change",
        defaultValues: E.titles,
        showFont: false
      }), (0, o.jsx)(t.ChartSubtitleFields, {
        commitMode: "change",
        defaultValues: E.titles,
        showFont: false
      }), (0, o.jsx)(t.ChartAxisTitleFields, {
        axis: "x",
        commitMode: "change",
        defaultValues: E.titles,
        showAlignment: false,
        showFont: false
      }), (0, o.jsx)(t.ChartAxisTitleFields, {
        axis: "y",
        commitMode: "change",
        defaultValues: E.titles,
        showAlignment: false,
        showFont: false
      }), (0, o.jsx)(t.ChartAxisTitleFields, {
        axis: "rightY",
        commitMode: "change",
        defaultValues: E.titles,
        showAlignment: false,
        showFont: false
      }), (0, o.jsx)(t.ChartTitleFontSizeFields, {
        defaultValues: E.titles
      })]
    }),
    [t.ChartEditPanelSection["Series"]]: (0, o.jsxs)(t.ChartSeriesRoot, {
      defaultValues: E.series,
      NumberFormatField: t.ChartNumberFormatTextField,
      selectedSeriesId: (var_core_value_sig0455 = var_core_value_sigEAF8.route) == null ? undefined : var_core_value_sig0455.seriesId,
      children: [(0, o.jsx)(t.ChartSeriesFillFields, {}), (0, o.jsx)(t.ChartSeriesBorderFields, {
        showColor: false,
        showOpacity: false
      }), (0, o.jsx)(t.ChartSeriesPointFields, {
        showColor: false
      }), (0, o.jsx)(t.ChartSeriesLabelVisibilityField, {}), (0, o.jsx)(t.ChartSeriesLabelPositionField, {}), (0, o.jsx)(t.ChartSeriesLabelFontSizeField, {})]
    }),
    [t.ChartEditPanelSection["LineAndArea"]]: (0, o.jsx)(t.ChartLineAndAreaSection, {
      defaultValues: E.lineAndArea,
      lineStyleControl: "select"
    }),
    [t.ChartEditPanelSection["WordCloud"]]: (0, o.jsxs)(t.ChartWordCloudRoot, {
      children: [(0, o.jsx)(t.ChartWordCloudShapeField, {
        defaultValues: E.wordCloud
      }), (0, o.jsx)(t.ChartWordCloudRepeatField, {
        defaultValues: E.wordCloud
      })]
    }),
    [t.ChartEditPanelSection["Radar"]]: (0, o.jsx)(t.ChartRadarStyleSection, {
      defaultValues: E.radar
    }),
    [t.ChartEditPanelSection["WaterfallSeries"]]: (0, o.jsx)(t.ChartWaterfallStyleSection, {
      defaultValues: E.waterfallStyle,
      NumberFormatField: t.ChartNumberFormatTextField,
      selectedSeriesId: (var_core_value_sig737C = var_core_value_sigEAF8.route) == null ? undefined : var_core_value_sig737C.seriesId
    }),
    [t.ChartEditPanelSection["ParetoBarSeries"]]: (0, o.jsx)(t.ChartParetoSeriesSection, {
      defaultValues: E.pareto,
      NumberFormatField: t.ChartNumberFormatTextField,
      showDataPointEditor: true,
      target: "barStyle"
    }),
    [t.ChartEditPanelSection["ParetoLineSeries"]]: (0, o.jsx)(t.ChartParetoSeriesSection, {
      defaultValues: E.pareto,
      NumberFormatField: t.ChartNumberFormatTextField,
      showDataPointEditor: true,
      target: "cumulativeLineStyle"
    }),
    [t.ChartEditPanelSection["PieStyle"]]: (0, o.jsx)(t.ChartPieStyleSection, {
      defaultValues: E.pie,
      NumberFormatField: t.ChartNumberFormatTextField
    }),
    [t.ChartEditPanelSection["Funnel"]]: (0, o.jsx)(t.ChartFunnelStyleSection, {
      defaultValues: E.funnel,
      gapControl: "number"
    }),
    [t.ChartEditPanelSection["Heatmap"]]: (0, o.jsx)(t.ChartHeatmapStyleSection, {
      defaultValues: E.heatmap
    }),
    [t.ChartEditPanelSection["Relation"]]: (0, o.jsx)(t.ChartRelationStyleSection, {
      defaultValues: E.relation
    }),
    [t.ChartEditPanelSection["Legend"]]: (0, o.jsx)(t.ChartLegendRoot, {
      defaultValues: E.legend,
      children: (0, o.jsxs)("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
        children: [(0, o.jsx)(t.ChartLegendPositionField, {}), (0, o.jsx)(t.ChartLegendWrapField, {}), (0, o.jsx)(t.ChartLegendSelectModeField, {}), (0, o.jsx)(t.ChartLegendFontSizeField, {})]
      })
    }),
    [t.ChartEditPanelSection["HorizontalAxis"]]: (0, o.jsx)(A, {
      axis: "x"
    }),
    [t.ChartEditPanelSection["VerticalAxis"]]: (0, o.jsx)(A, {
      axis: "y"
    }),
    [t.ChartEditPanelSection["RightVerticalAxis"]]: (0, o.jsx)(A, {
      axis: "rightY"
    }),
    [t.ChartEditPanelSection["GridlinesAndTicks"]]: (0, o.jsxs)("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [(0, o.jsx)(t.ChartGridlineVisibilityField, {
        axis: "x",
        defaultValues: E.axis,
        label: var_core_value_sig5AF5.t("docs-chart-ui.common.horizontalAxis")
      }), (0, o.jsx)(t.ChartGridlineVisibilityField, {
        axis: "y",
        defaultValues: E.axis,
        label: var_core_value_sig5AF5.t("docs-chart-ui.common.verticalAxis")
      }), (0, o.jsxs)("div", {
        className: "univer-grid univer-grid-cols-2 univer-gap-2",
        children: [(0, o.jsx)(t.ChartGridlineWidthField, {
          axis: "x",
          defaultValues: E.axis
        }), (0, o.jsx)(t.ChartGridlineWidthField, {
          axis: "y",
          defaultValues: E.axis
        })]
      })]
    }),
    [t.ChartEditPanelSection["IndicatorLine"]]: (0, o.jsxs)("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [(0, o.jsx)(t.ChartIndicatorLineColorField, {
        defaultValues: E.indicatorLine
      }), (0, o.jsx)(t.ChartIndicatorLineTypeField, {
        defaultValues: E.indicatorLine
      })]
    }),
    [t.ChartEditPanelSection["Candlestick"]]: var_core_value_sigCC9D,
    [t.ChartEditPanelSection["Histogram"]]: var_core_value_sigCC9D,
    [t.ChartEditPanelSection["Treemap"]]: var_core_value_sigCC9D,
    [t.ChartEditPanelSection["Sunburst"]]: var_core_value_sigCC9D,
    [t.ChartEditPanelSection["Gauge"]]: var_core_value_sigCC9D,
    [t.ChartEditPanelSection["Chord"]]: var_core_value_sigCC9D
  };
  return (0, o.jsx)(t.ChartSectionAccordion, {
    value: var_core_value_sigA4A7,
    onChange: var_core_value_sigA4DF,
    children: k(var_core_value_sig9DE4, var_core_value_sig77FA).map(var_core_value_sigF057 => (0, o.jsx)(O, {
      id: var_core_value_sigF057,
      label: var_core_value_sig90F5[var_core_value_sigF057],
      children: var_core_value_sigD2BA[var_core_value_sigF057]
    }, var_core_value_sigF057))
  });
}
function ne(var_core_value_sigCD3A) {
  var var_core_value_sig519D;
  let var_core_value_sigC7E7 = (0, i.useDependency)(e.LocaleService),
    [var_core_value_sig6E1C, var_core_value_sigFABC] = (0, a.useState)(((var_core_value_sig519D = var_core_value_sigCD3A.initialRoute) == null ? undefined : var_core_value_sig519D.tab) ?? t.ChartEditPanelTab["Data"]),
    var_core_value_sig413D = (0, a.useMemo)(() => (0, t.buildChartTypeSelectOptions)(t.CHART_TYPE_CATALOG["map"](var_core_value_sigA12B => ({
      ...var_core_value_sigA12B,
      label: var_core_value_sigC7E7.t("docs-chart-ui.chartTypes." + var_core_value_sigA12B.labelId)
    }))), [var_core_value_sigC7E7]);
  return (0, a.useEffect)(() => {
    var var_core_value_sig72F6;
    (var_core_value_sig72F6 = var_core_value_sigCD3A.initialRoute) != null && var_core_value_sig72F6.tab && var_core_value_sigFABC(var_core_value_sigCD3A.initialRoute["tab"]);
  }, [var_core_value_sigCD3A.initialRoute]), (0, o.jsxs)("div", {
    className: "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
    children: [(0, o.jsx)(t.ChartEditPanelTabs, {
      ariaLabel: var_core_value_sigC7E7.t("docs-chart-ui.common.editChart"),
      className: "univer-shrink-0\x20univer-px-3",
      items: [{
        label: var_core_value_sigC7E7.t("docs-chart-ui.common.setup"),
        panelId: j,
        value: t.ChartEditPanelTab["Data"]
      }, {
        label: var_core_value_sigC7E7.t("docs-chart-ui.common.customize"),
        panelId: re,
        value: t.ChartEditPanelTab["Style"]
      }],
      value: var_core_value_sig6E1C,
      onChange: var_core_value_sigFABC
    }), var_core_value_sig6E1C === t.ChartEditPanelTab["Data"] ? (0, o.jsx)(t.ChartEditPanel, {
      id: j,
      label: var_core_value_sigC7E7.t("docs-chart-ui.common.setup"),
      children: (0, o.jsxs)("div", {
        className: "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
        children: [(0, o.jsx)(t.ChartTypeField, {
          options: var_core_value_sig413D,
          onChange: var_core_value_sigCD3A.onPreviewChartTypeChange
        }), (0, o.jsx)(t.ChartTypeSpecificSetupSection, {}), (0, o.jsx)(t.ChartThemeField, {}), (0, o.jsx)(D, {}), (0, o.jsx)(t.ChartStackField, {}), (0, o.jsxs)("div", {
          children: [(0, o.jsx)(t.ChartEditBlockTitle, {
            title: var_core_value_sigC7E7.t("docs-chart-ui.common.data")
          }), (0, o.jsx)(r.Button, {
            className: "univer-w-full univer-justify-start",
            onClick: var_core_value_sigCD3A.onModifyData,
            children: var_core_value_sigC7E7.t("docs-chart-ui.common.editData")
          })]
        }), (0, o.jsx)(t.ChartCommonDataMappingSection, {}), (0, o.jsx)(t.ChartTypeSpecificDataSection, {}), (0, o.jsx)(t.ChartWaterfallSetupFields, {
          defaultValues: E.waterfall
        })]
      })
    }) : (0, o.jsx)(t.ChartEditPanel, {
      id: re,
      label: var_core_value_sigC7E7.t("docs-chart-ui.common.customize"),
      children: (0, o.jsx)(te, {
        route: var_core_value_sigCD3A.initialRoute
      })
    }), var_core_value_sigCD3A.onClose && (0, o.jsx)("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-px-1 univer-pb-4 univer-pt-4",
      children: (0, o.jsx)(r.Button, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sigCD3A.onClose,
        children: var_core_value_sigC7E7.t("docs-chart-ui.close")
      })
    })]
  });
}
const j = "doc-chart-setup-panel",
  re = "doc-chart-style-panel";
function M(var_core_value_sig5BCE) {
  "@babel/helpers - typeof";

  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig9FBA) {
    return typeof var_core_value_sig9FBA;
  } : function (var_core_value_sigFE01) {
    return var_core_value_sigFE01 && typeof Symbol == "function" && var_core_value_sigFE01.constructor === Symbol && var_core_value_sigFE01 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFE01;
  }, M(var_core_value_sig5BCE);
}
function ie(var_core_value_sig8EF0, var_core_value_sig78AC) {
  if (M(var_core_value_sig8EF0) != "object" || !var_core_value_sig8EF0) return var_core_value_sig8EF0;
  var var_core_value_sig4CEF = var_core_value_sig8EF0[Symbol.toPrimitive];
  if (var_core_value_sig4CEF !== undefined) {
    var var_core_value_sigD57D = var_core_value_sig4CEF.call(var_core_value_sig8EF0, var_core_value_sig78AC || "default");
    if (M(var_core_value_sigD57D) != "object") return var_core_value_sigD57D;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig78AC === "string" ? String : Number)(var_core_value_sig8EF0);
}
function ae(var_core_value_sig2CC7) {
  var var_core_value_sig4784 = ie(var_core_value_sig2CC7, "string");
  return M(var_core_value_sig4784) == "symbol" ? var_core_value_sig4784 : var_core_value_sig4784 + "";
}
function N(var_core_value_sigC39E, var_core_value_sig16C7, var_core_value_sig7481) {
  return (var_core_value_sig16C7 = ae(var_core_value_sig16C7)) in var_core_value_sigC39E ? Object.defineProperty(var_core_value_sigC39E, var_core_value_sig16C7, {
    value: var_core_value_sig7481,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigC39E[var_core_value_sig16C7] = var_core_value_sig7481, var_core_value_sigC39E;
}
var P = class extends e.Disposable {
  constructor(var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig029F, var_core_value_sig3767 = true, var_core_value_sig670B) {
    super(), this.chartId = var_core_value_sigA2CE, this._host = var_core_value_sig1975, this._applyHostStyle = var_core_value_sig6EA1, this._getRenderRect = var_core_value_sig029F, this._manageHostSize = var_core_value_sig3767, this._getRenderScale = var_core_value_sig670B, N(this, "mode", n.ChartRenderMode["Dom"]), N(this, "_frameNode", null), N(this, "_mountNode", null), N(this, "_hostStyle", {});
  }
  getRect() {
    var var_core_value_sig6912;
    let var_core_value_sigE235 = (var_core_value_sig6912 = this._getRenderRect) == null ? undefined : var_core_value_sig6912.call(this);
    if (var_core_value_sigE235) return {
      width: Math.max(1, var_core_value_sigE235.width),
      height: Math.max(1, var_core_value_sigE235.height)
    };
    let var_core_value_sig7664 = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(1, var_core_value_sig7664.width),
      height: Math.max(1, var_core_value_sig7664.height)
    };
  }
  setStyle(var_core_value_sig2281) {
    this._hostStyle = var_core_value_sig2281, this._frameNode && this._applyHostStyle(this._frameNode, var_core_value_sig2281);
  }
  async ensureMount() {
    if (!this._mountNode) {
      let var_core_value_sigF230 = document.createElement("div");
      var_core_value_sigF230.style["position"] = "absolute", var_core_value_sigF230.style["left"] = "0", var_core_value_sigF230.style["top"] = "0";
      let var_core_value_sig09B8 = document.createElement("div");
      var_core_value_sig09B8.style["position"] = "relative", var_core_value_sig09B8.style["border"] = "0", var_core_value_sig09B8.style["boxSizing"] = "content-box", var_core_value_sig09B8.style["overflow"] = "hidden", var_core_value_sig09B8.className = "doc-chart-host", var_core_value_sigF230.appendChild(var_core_value_sig09B8), this._host["appendChild"](var_core_value_sigF230), this._frameNode = var_core_value_sigF230, this._mountNode = var_core_value_sig09B8, this._applyHostStyle(var_core_value_sigF230, this._hostStyle);
    }
    return this.syncLayout(), this._mountNode;
  }
  checkMounted() {
    return !!(this._mountNode && this._host["contains"](this._mountNode));
  }
  syncLayout() {
    var var_core_value_sig5E86;
    let var_core_value_sig6998 = this.getRect(),
      var_core_value_sigF639 = (var_core_value_sig5E86 = this._getRenderScale) == null ? undefined : var_core_value_sig5E86.call(this),
      var_core_value_sigEAE5 = (var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.scaleX) ?? 1,
      var_core_value_sigE94C = (var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.scaleY) ?? 1;
    this._manageHostSize && this._setElementSize(this._host, {
      width: var_core_value_sig6998.width * var_core_value_sigEAE5,
      height: var_core_value_sig6998.height * var_core_value_sigE94C
    }), this._frameNode && (this._setElementSize(this._frameNode, var_core_value_sig6998), this._getRenderScale && (this._frameNode["style"].transform = "scale(" + var_core_value_sigEAE5 + ",\x20" + var_core_value_sigE94C + ")", this._frameNode["style"].transformOrigin = "top left")), this._mountNode && this._setElementSize(this._mountNode, this._getContentRect(var_core_value_sig6998));
  }
  markReady() {}
  markNotReady() {}
  dispose() {
    var var_core_value_sig6D47;
    (var_core_value_sig6D47 = this._frameNode) == null || var_core_value_sig6D47.remove(), this._frameNode = null, this._mountNode = null, super.dispose();
  }
  _setElementSize(var_core_value_sigCB82, var_core_value_sigCF4E) {
    var_core_value_sigCB82.style["width"] = var_core_value_sigCF4E.width + "px", var_core_value_sigCB82.style["height"] = var_core_value_sigCF4E.height + "px";
  }
  _getContentRect(var_core_value_sig6CAD) {
    if (!(0, n.shouldComposeChartHostFrame)(this._hostStyle)) return var_core_value_sig6CAD;
    let var_core_value_sig8CF5 = (0, n.getChartHostFrameContentRect)(var_core_value_sig6CAD, this._hostStyle);
    return {
      width: var_core_value_sig8CF5.width,
      height: var_core_value_sig8CF5.height
    };
  }
};
function oe(var_core_value_sig08A3) {
  var var_core_value_sig77D8;
  let var_core_value_sig78A3 = (var_core_value_sig77D8 = var_core_value_sig08A3.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null ? undefined : var_core_value_sig77D8[1];
  if (var_core_value_sig78A3) {
    let var_core_value_sigDDD7 = var_core_value_sig78A3.length === 3 ? var_core_value_sig78A3.split("").map(var_core_value_sig6F91 => "" + var_core_value_sig6F91 + var_core_value_sig6F91).join("") : var_core_value_sig78A3;
    return "rgb(" + Number.parseInt(var_core_value_sigDDD7.slice(0, 2), 16) + ",\x20" + Number.parseInt(var_core_value_sigDDD7.slice(2, 4), 16) + ",\x20" + Number.parseInt(var_core_value_sigDDD7.slice(4, 6), 16) + ")";
  }
  let var_core_value_sig649B = document.createElement("span");
  return var_core_value_sig649B.style["color"] = var_core_value_sig08A3, var_core_value_sig649B.style["color"] || var_core_value_sig08A3;
}
let F = class extends e.Disposable {
  constructor(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1) {
    super(), this._localeService = var_core_value_sigB2CE, this._chartThemeService = var_core_value_sig443C, this._renderModelManager = var_core_value_sig39B1;
  }
  createChartInstance(var_core_value_sig210D) {
    return var_core_value_sig210D ? this._renderModelManager["createChartInstance"](var_core_value_sig210D, this._createChartRenderInstanceContext()) : this._renderModelManager["createChartInstance"]();
  }
  createRenderInput(var_core_value_sigB4B4) {
    let var_core_value_sigD407 = var_core_value_sigB4B4.model["config"];
    if (!var_core_value_sigD407) throw Error("Document\x20chart\x20" + var_core_value_sigB4B4.chartId + " has no render config.");
    let var_core_value_sig63F3 = this._localeService["getDirection"]();
    return {
      chartConfig: var_core_value_sigD407,
      chartStyle: (0, n.resolveChartRuntimeStyle)({
        ...var_core_value_sigB4B4.model["style"],
        runtime: var_core_value_sigB4B4.model["getRuntimeContext"](var_core_value_sig63F3),
        direction: var_core_value_sig63F3
      }, var_core_value_sigD407.type)
    };
  }
  createRenderSpec(var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) {
    let {
        chartConfig: var_core_value_sig62B7,
        chartStyle: var_core_value_sig37A8
      } = this.createRenderInput(var_core_value_sig6A71),
      var_core_value_sigA90D = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: var_core_value_sigA90D.stylizeSpec(var_core_value_sigA90D.toSpec(var_core_value_sig62B7, var_core_value_sig37A8), {
        chartConfig: var_core_value_sig62B7,
        chartStyle: var_core_value_sig37A8,
        chartInstance: var_core_value_sig38CE
      }, var_core_value_sig3BF6),
      chartConfig: var_core_value_sig62B7,
      chartStyle: var_core_value_sig37A8,
      hostStyle: this.getHostStyle(var_core_value_sig37A8)
    };
  }
  getHostStyle(var_core_value_sig7A3C) {
    return (0, n.resolveDefaultChartHostFrameStyle)({
      style: var_core_value_sig7A3C,
      getRenderColor: var_core_value_sigF9C7 => this._chartThemeService["getRenderColor"](var_core_value_sigF9C7)
    });
  }
  applyHostStyle(var_core_value_sig0511, var_core_value_sig1F44) {
    var var_core_value_sigCB04;
    let var_core_value_sig947E = (var_core_value_sigCB04 = var_core_value_sig1F44.border) != null && var_core_value_sigCB04.color && var_core_value_sig1F44.border["width"] ? var_core_value_sig1F44.border["width"] + "px solid " + oe(var_core_value_sig1F44.border["color"]) : "";
    var_core_value_sig0511.style["border"] = var_core_value_sig947E, var_core_value_sig0511.style["backgroundColor"] = var_core_value_sig1F44.fill ? oe(var_core_value_sig1F44.fill) : "transparent", var_core_value_sig0511.style["borderRadius"] = var_core_value_sig1F44.radius ? var_core_value_sig1F44.radius + "px" : "", var_core_value_sig0511.style["overflow"] = "hidden", var_core_value_sig0511.style["boxSizing"] = "border-box";
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({
        style: var_core_value_sig8895
      }) => this.getHostStyle(var_core_value_sig8895),
      resolveRenderBackgroundColor: ({
        hostStyle: var_core_value_sigC80B
      }) => var_core_value_sigC80B.fill,
      prepareSpec: ({
        mode: var_core_value_sig284F,
        spec: var_core_value_sigE154
      }) => var_core_value_sig284F === "image" ? {
        ...var_core_value_sigE154,
        animation: false,
        tooltip: {
          show: false
        }
      } : var_core_value_sigE154
    };
  }
  dispose() {
    super.dispose();
  }
};
F = S([x(0, (0, e.Inject)(e.LocaleService)), x(1, (0, e.Inject)(n.ChartThemeService)), x(2, n.IChartRenderModelManagerService)], F);
function I(var_core_value_sig6256, var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3) {
  let {
    model: var_core_value_sigEACD,
    source: var_core_value_sig901E
  } = (0, n.createChartRuntime)({
    id: var_core_value_sig6256,
    chartType: var_core_value_sigB505,
    dataSet: (0, n.buildChartDataSetFromValues)((0, t.compactInlineTableValues)(var_core_value_sigE7A6)),
    isRowDirection: (var_core_value_sig7428 == null ? undefined : var_core_value_sig7428.orient) !== "column",
    context: var_core_value_sig7428 == null ? undefined : var_core_value_sig7428.chartContext,
    dataAggregation: var_core_value_sig1DCE,
    style: var_core_value_sig0567,
    injector: var_core_value_sigA7F3
  });
  return {
    unitId: "doc-chart-preview",
    chartId: var_core_value_sig6256,
    dataSourceId: var_core_value_sig6256 + "-data-source",
    model: var_core_value_sigEACD,
    source: var_core_value_sig901E
  };
}
function se(var_core_value_sigF7BB) {
  let var_core_value_sigFA38 = (0, i.useDependency)(e.LocaleService),
    var_core_value_sig102B = (0, i.useDependency)(e.Injector),
    var_core_value_sigA7DB = (0, i.useDependency)(F),
    var_core_value_sig5EEE = (0, a.useRef)(null),
    var_core_value_sig65B4 = (0, a.useRef)(null),
    var_core_value_sigF98E = (0, a.useRef)("doc-chart-preview-" + (0, e.generateRandomId)(8)),
    [var_core_value_sigA470, var_core_value_sig19A1] = (0, a.useState)(null);
  return (0, a.useEffect)(() => {
    let var_core_value_sig4545 = var_core_value_sig5EEE.current;
    if (!var_core_value_sig4545) return;
    var_core_value_sig19A1(null), var_core_value_sig4545.replaceChildren(), var_core_value_sig65B4.current = L(var_core_value_sig4545);
    let var_core_value_sigF39A = false,
      var_core_value_sigF79C = var_core_value_sig4632 => {
        var_core_value_sigF39A || var_core_value_sig19A1(var_core_value_sig4632);
      },
      var_core_value_sig2E54 = null,
      var_core_value_sig7658 = null,
      var_core_value_sigDCF5 = null;
    try {
      var_core_value_sig2E54 = I(var_core_value_sigF98E.current, var_core_value_sigF7BB.values, var_core_value_sigF7BB.chartType, var_core_value_sigF7BB.context, var_core_value_sigF7BB.dataAggregation, var_core_value_sigF7BB.style, var_core_value_sig102B), var_core_value_sig7658 = new P(var_core_value_sig2E54.chartId, var_core_value_sig4545, (var_core_value_sig2AD8, var_core_value_sig2AD0) => var_core_value_sigA7DB.applyHostStyle(var_core_value_sig2AD8, var_core_value_sig2AD0), () => var_core_value_sig65B4.current ?? L(var_core_value_sig4545), false), var_core_value_sigDCF5 = var_core_value_sigA7DB.createChartInstance(n.ChartRenderMode["Dom"]), var_core_value_sigDCF5.bind(var_core_value_sig7658);
    } catch (var_core_value_sig12F2) {
      return var_core_value_sigF79C(var_core_value_sig12F2), () => {
        var_core_value_sigF39A = true, var_core_value_sig4545.replaceChildren();
      };
    }
    if (!var_core_value_sig2E54 || !var_core_value_sig7658 || !var_core_value_sigDCF5) return () => {
      var_core_value_sigF39A = true, var_core_value_sig4545.replaceChildren();
    };
    let var_core_value_sigC786 = var_core_value_sig2E54,
      var_core_value_sigC0D9 = var_core_value_sig7658,
      var_core_value_sigF051 = var_core_value_sigDCF5,
      var_core_value_sig5825 = () => {
        let var_core_value_sig2259, var_core_value_sig9E2F;
        try {
          ({
            chartConfig: var_core_value_sig2259,
            chartStyle: var_core_value_sig9E2F
          } = var_core_value_sigA7DB.createRenderInput(var_core_value_sigC786));
        } catch (var_core_value_sig3EEE) {
          var_core_value_sigF79C(var_core_value_sig3EEE);
          return;
        }
        var_core_value_sigF051.render({
          chartId: var_core_value_sigC786.chartId,
          config: var_core_value_sig2259,
          style: var_core_value_sig9E2F
        }).then(() => {
          var_core_value_sigF39A || var_core_value_sig19A1(null);
        }).catch(var_core_value_sigF79C);
      },
      var_core_value_sig4EB7 = var_core_value_sigC786.model["config$"].subscribe(var_core_value_sigD082 => {
        var_core_value_sigD082 && var_core_value_sig5825();
      }),
      var_core_value_sig73AF = typeof ResizeObserver > "u" ? null : new ResizeObserver(var_core_value_sigDBB7 => {
        var var_core_value_sigD0A8;
        let var_core_value_sigF4B9 = (var_core_value_sigD0A8 = var_core_value_sigDBB7[0]) == null ? undefined : var_core_value_sigD0A8.contentRect;
        var_core_value_sig65B4.current = var_core_value_sigF4B9 && var_core_value_sigF4B9.width > 0 && var_core_value_sigF4B9.height > 0 ? {
          width: var_core_value_sigF4B9.width,
          height: var_core_value_sigF4B9.height
        } : L(var_core_value_sig4545), var_core_value_sig5825();
      });
    return var_core_value_sig73AF == null || var_core_value_sig73AF.observe(var_core_value_sig4545), () => {
      var_core_value_sigF39A = true, var_core_value_sig4EB7.unsubscribe(), var_core_value_sig73AF == null || var_core_value_sig73AF.disconnect(), var_core_value_sigF051.dispose(), var_core_value_sigC0D9.dispose(), var_core_value_sigC786.model["dispose"](), var_core_value_sigC786.source["dispose"](), var_core_value_sig4545.replaceChildren();
    };
  }, [var_core_value_sig102B, var_core_value_sigF7BB.chartType, var_core_value_sigF7BB.context, var_core_value_sigF7BB.dataAggregation, var_core_value_sigF7BB.style, var_core_value_sigF7BB.values, var_core_value_sigA7DB]), (0, o.jsxs)("div", {
    className: "univer-relative univer-box-border univer-flex univer-h-full univer-min-h-0 univer-w-full univer-min-w-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    children: [(0, o.jsx)("div", {
      ref: var_core_value_sig5EEE,
      className: "univer-absolute univer-inset-0 univer-min-h-0 univer-min-w-0 univer-overflow-hidden univer-rounded-lg"
    }), var_core_value_sigA470 != null && (0, o.jsx)("div", {
      className: "dark:!univer-bg-gray-900/90\x20univer-bg-gray-0/90\x20univer-absolute\x20univer-bottom-3\x20univer-left-3\x20univer-rounded\x20univer-px-2\x20univer-py-1\x20univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
      children: var_core_value_sigFA38.t("docs-chart-ui.previewRenderFailed")
    })]
  });
}
function L(var_core_value_sig81F7) {
  let var_core_value_sigBE51 = var_core_value_sig81F7.getBoundingClientRect();
  return var_core_value_sigBE51.width <= 0 || var_core_value_sigBE51.height <= 0 ? null : {
    width: var_core_value_sigBE51.width,
    height: var_core_value_sigBE51.height
  };
}
const R = "doc-chart.editor-dialog",
  z = "doc-chart.dialog.editor";
function B(var_core_value_sigAAD1) {
  var var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984;
  let {
      unitId: var_core_value_sigA504,
      chartId: var_core_value_sig05FF,
      drawingId: var_core_value_sigFBF0
    } = var_core_value_sigAAD1,
    var_core_value_sig2F95 = (0, i.useDependency)(e.LocaleService),
    var_core_value_sigF0E1 = (0, i.useDependency)(e.Injector),
    var_core_value_sig2D8D = (0, i.useDependency)(e.IUniverInstanceService),
    var_core_value_sigE5A6 = (0, i.useDependency)(n.ChartResourceRepository),
    var_core_value_sigF449 = (0, i.useDependency)(s.DocChartModelService),
    var_core_value_sig38C5 = (0, i.useDependency)(C),
    var_core_value_sigC87D = (0, i.useDependency)(w),
    var_core_value_sigCCDC = (0, a.useMemo)(() => var_core_value_sig38C5.getEditorState(var_core_value_sigA504, var_core_value_sig05FF), [var_core_value_sig05FF, var_core_value_sig38C5, var_core_value_sigA504]),
    var_core_value_sigC310 = var_core_value_sigE5A6.getChart(var_core_value_sigA504, var_core_value_sig05FF),
    var_core_value_sigA4E8 = (0, a.useMemo)(() => var_core_value_sigF449 == null ? undefined : var_core_value_sigF449.ensureChartModel(var_core_value_sigA504, var_core_value_sig05FF), [var_core_value_sig05FF, var_core_value_sigF449, var_core_value_sigA504]),
    var_core_value_sigDC07 = (0, i.useObservable)(var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["chartType$"], (var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["chartType"]) ?? (var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.chartType)),
    var_core_value_sig3474 = (0, i.useObservable)(var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["context$"], (var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["context"]) ?? (var_core_value_sigC310 == null || (var_core_value_sigBC1A = var_core_value_sigC310.context) == null ? undefined : var_core_value_sigBC1A.chartContext)),
    var_core_value_sig4E80 = (0, i.useObservable)(var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["dataAggregation$"], (var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["dataAggregation"]) ?? (var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.dataAggregation)),
    var_core_value_sigD23B = (0, i.useObservable)(var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["style$"], (var_core_value_sigA4E8 == null ? undefined : var_core_value_sigA4E8.model["style"]) ?? (var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.style)),
    var_core_value_sig2B2A = (0, i.useObservable)((0, a.useMemo)(() => {
      var var_core_value_sig548A;
      return var_core_value_sigF449 == null || (var_core_value_sig548A = var_core_value_sigF449.getDataSourceRuntimeState$) == null ? undefined : var_core_value_sig548A.call(var_core_value_sigF449, var_core_value_sigA504, var_core_value_sig05FF);
    }, [var_core_value_sig05FF, var_core_value_sigF449, var_core_value_sigA504]), var_core_value_sigF449 == null || (var_core_value_sig3F3A = var_core_value_sigF449.getDataSourceRuntimeState) == null ? undefined : var_core_value_sig3F3A.call(var_core_value_sigF449, var_core_value_sigA504, var_core_value_sig05FF)),
    var_core_value_sig0B5C = (0, a.useMemo)(() => ({
      ...(var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.context),
      chartContext: var_core_value_sig3474
    }), [var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.context, var_core_value_sig3474]),
    [var_core_value_sig7D42, var_core_value_sig8FDE] = (0, a.useState)(var_core_value_sigCCDC),
    [var_core_value_sig78E6, var_core_value_sig541F] = (0, a.useState)(() => (var_core_value_sigCCDC == null ? undefined : var_core_value_sigCCDC.values["map"](var_core_value_sig5CEE => [...var_core_value_sig5CEE])) ?? []),
    [var_core_value_sig417B, var_core_value_sigAA90] = (0, a.useState)(() => (var_core_value_sigCCDC == null ? undefined : var_core_value_sigCCDC.values["map"](var_core_value_sigE92A => [...var_core_value_sigE92A])) ?? []),
    [var_core_value_sigE92D, var_core_value_sig9940] = (0, a.useState)(() => var_core_value_sigC310 == null ? undefined : var_core_value_sigC310.chartType),
    [var_core_value_sig682D, var_core_value_sig1435] = (0, a.useState)(() => {
      var var_core_value_sigE026;
      return ((var_core_value_sigE026 = var_core_value_sigAAD1.route) == null ? undefined : var_core_value_sigE026.tab) === t.ChartEditPanelTab["Data"] ? "data" : "chart";
    }),
    [var_core_value_sig4082, var_core_value_sigC049] = (0, a.useState)(null),
    var_core_value_sigE5C3 = var_core_value_sig2B2A == null || (var_core_value_sigA984 = var_core_value_sig2B2A.values) == null ? undefined : var_core_value_sigA984.map(var_core_value_sig339E => [...var_core_value_sig339E]),
    var_core_value_sigCCAA = (0, a.useMemo)(() => {
      var var_core_value_sig7550;
      let var_core_value_sig2983 = var_core_value_sig2D8D.getUnit(var_core_value_sigA504, e.UniverInstanceType["UNIVER_DOC"]);
      if (!var_core_value_sigA4E8 || !var_core_value_sig2983) return null;
      let var_core_value_sigE1B0 = var_core_value_sigFBF0 ?? ((var_core_value_sig7550 = Object.values(var_core_value_sig2983.getDrawings() ?? {}).find(var_core_value_sig362B => var_core_value_sig362B.chartId === var_core_value_sig05FF)) == null ? undefined : var_core_value_sig7550.drawingId);
      return var_core_value_sigE1B0 ? new t["ChartHostAdapter"](var_core_value_sigA4E8.model, new s.DocumentChartConfigAdapter({
        unitId: var_core_value_sigA504,
        chartId: var_core_value_sig05FF,
        drawingId: var_core_value_sigE1B0,
        documentDataModel: var_core_value_sig2983,
        injector: var_core_value_sigF0E1
      })) : null;
    }, [var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sigF0E1, var_core_value_sigA4E8, var_core_value_sigA504, var_core_value_sig2D8D]);
  return !var_core_value_sig7D42 || !var_core_value_sigC310 ? (0, o.jsx)("div", {
    className: "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
    children: var_core_value_sig2F95.t("docs-chart-ui.chartNotFound")
  }) : (0, o.jsxs)("div", {
    className: "univer-flex\x20univer-w-full\x20univer-min-w-0\x20univer-flex-col\x20univer-overflow-hidden\x20univer-overscroll-contain",
    style: {
      height: "min(560px, calc(100vh - 180px))"
    },
    children: [(0, o.jsx)(t.ChartEditPanelTabs, {
      ariaLabel: var_core_value_sig2F95.t("docs-chart-ui.common.editChart"),
      className: "univer-shrink-0",
      value: var_core_value_sig682D,
      items: [{
        label: var_core_value_sig2F95.t("docs-chart-ui.floatMenu.menuTitle.chart"),
        panelId: ce,
        value: "chart"
      }, {
        label: var_core_value_sig2F95.t("docs-chart-ui.common.data"),
        panelId: le,
        value: "data"
      }],
      variant: "segmented",
      onChange: var_core_value_sig1435
    }), (0, o.jsxs)("div", {
      id: var_core_value_sig682D === "data" ? le : ce,
      "aria-labelledby": (var_core_value_sig682D === "data" ? le : ce) + "-tab",
      className: "univer-min-h-0 univer-flex-1 univer-pt-4",
      role: "tabpanel",
      children: [var_core_value_sig682D === "data" ? (0, o.jsx)(b, {
        values: var_core_value_sigE5C3 ?? var_core_value_sig78E6,
        dataSource: var_core_value_sig7D42.dataSource,
        sharingCount: var_core_value_sig7D42.sharingCount,
        onCancel: () => var_core_value_sig1435("chart"),
        onSubmit: (var_core_value_sigD4FF, var_core_value_sig1E5B) => {
          if (!var_core_value_sig38C5.updateData(var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigD4FF, var_core_value_sig1E5B)) {
            var_core_value_sigC049(var_core_value_sig2F95.t("docs-chart-ui.updateChartFailed"));
            return;
          }
          var_core_value_sigC049(null);
          let var_core_value_sigB680 = var_core_value_sig38C5.getEditorState(var_core_value_sigA504, var_core_value_sig05FF);
          var_core_value_sig8FDE(var_core_value_sigB680 ?? var_core_value_sig7D42), var_core_value_sig541F((var_core_value_sigB680 == null ? undefined : var_core_value_sigB680.values) ?? var_core_value_sigD4FF), var_core_value_sigAA90((var_core_value_sigB680 == null ? undefined : var_core_value_sigB680.values) ?? var_core_value_sigD4FF), var_core_value_sig1435("chart");
        },
        onDataSourceSubmit: var_core_value_sig1F64 => {
          if (!var_core_value_sig38C5.changeDataSource(var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sig1F64)) {
            var_core_value_sigC049(var_core_value_sig2F95.t("docs-chart-ui.updateChartFailed"));
            return;
          }
          var_core_value_sigC049(null), var_core_value_sig8FDE(var_core_value_sig38C5.getEditorState(var_core_value_sigA504, var_core_value_sig05FF) ?? var_core_value_sig7D42), var_core_value_sig1435("chart");
        }
      }) : (0, o.jsxs)("div", {
        className: "univer-flex univer-size-full univer-min-w-0 univer-gap-5",
        children: [(0, o.jsx)("div", {
          className: "univer-min-h-0\x20univer-min-w-0\x20univer-flex-1\x20univer-overflow-hidden",
          children: (0, o.jsx)(se, {
            values: var_core_value_sigE5C3 ?? var_core_value_sig417B,
            chartType: var_core_value_sigDC07 ?? var_core_value_sigE92D ?? var_core_value_sigC310.chartType,
            context: var_core_value_sig0B5C,
            dataAggregation: var_core_value_sig4E80,
            style: var_core_value_sigD23B
          })
        }), (0, o.jsxs)("div", {
          className: "univer-flex\x20univer-min-h-0\x20univer-w-[388px]\x20univer-shrink-0\x20univer-flex-col\x20univer-gap-4\x20univer-overflow-hidden\x20univer-overscroll-contain",
          children: [(0, o.jsx)("div", {
            className: "univer-min-h-0 univer-flex-1",
            children: var_core_value_sigCCAA ? (0, o.jsx)(t.ChartEditorProvider, {
              chartUIService: var_core_value_sigC87D,
              hostAdapter: var_core_value_sigCCAA,
              children: (0, o.jsx)(ne, {
                initialRoute: var_core_value_sigAAD1.route,
                onClose: var_core_value_sigAAD1.onClose,
                onPreviewChartTypeChange: var_core_value_sig9940,
                onModifyData: () => var_core_value_sig1435("data")
              })
            }) : (0, o.jsx)("div", {
              className: "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
              children: var_core_value_sig2F95.t("docs-chart-ui.chartNotFound")
            })
          }), var_core_value_sig4082 && (0, o.jsx)("div", {
            className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
            children: var_core_value_sig4082
          })]
        })]
      }), var_core_value_sig682D === "data" && var_core_value_sig4082 && (0, o.jsx)("div", {
        className: "univer-mt-2 univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
        children: var_core_value_sig4082
      })]
    })]
  });
}
const ce = "doc-chart-editor-panel",
  le = "doc-chart-data-panel";
function V(var_core_value_sigF32D, var_core_value_sig9427) {
  var var_core_value_sig21F4;
  if (!(var_core_value_sig9427 != null && var_core_value_sig9427.collapsed) || var_core_value_sig9427.startOffset == null) return null;
  let var_core_value_sigA345 = var_core_value_sig9427.segmentId ?? "";
  if (var_core_value_sigA345 !== "") return null;
  let var_core_value_sigA468 = (var_core_value_sig21F4 = var_core_value_sigF32D.getSelfOrHeaderFooterModel(var_core_value_sigA345)) == null ? undefined : var_core_value_sig21F4.getBody();
  if (!var_core_value_sigA468) return null;
  let var_core_value_sig1561 = ue(var_core_value_sigA468, var_core_value_sig9427.startOffset);
  if (!de(var_core_value_sigA468, var_core_value_sig1561)) return null;
  let var_core_value_sigDF14 = pe(var_core_value_sigA468, var_core_value_sig1561);
  return var_core_value_sigDF14 ? {
    unitId: var_core_value_sigF32D.getUnitId(),
    index: var_core_value_sigDF14.index,
    segmentId: var_core_value_sigA345,
    breakOffsets: var_core_value_sigDF14.breakOffsets
  } : null;
}
function ue(var_core_value_sig842F, var_core_value_sigC4C0) {
  return var_core_value_sigC4C0 === 0 && var_core_value_sig842F.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"] ? 1 : var_core_value_sigC4C0;
}
function de(var_core_value_sig214A, var_core_value_sigCCC3) {
  return !(ge(var_core_value_sig214A.tables, var_core_value_sigCCC3) || _e(var_core_value_sig214A.blockRanges, var_core_value_sigCCC3) || ve(var_core_value_sig214A.customBlocks, var_core_value_sigCCC3));
}
function fe(var_core_value_sig986E, var_core_value_sig537C) {
  let {
    dataStream: var_core_value_sigBBBC
  } = var_core_value_sig986E;
  if (!var_core_value_sigBBBC || var_core_value_sig537C < 0 || var_core_value_sig537C >= var_core_value_sigBBBC.length) return false;
  let var_core_value_sig5440 = me(var_core_value_sigBBBC, var_core_value_sig537C) + 1,
    var_core_value_sigE28B = he(var_core_value_sigBBBC, var_core_value_sig537C);
  return var_core_value_sig5440 <= var_core_value_sigE28B && var_core_value_sigBBBC.slice(var_core_value_sig5440, var_core_value_sigE28B).length === 0;
}
function pe(var_core_value_sig0FD9, var_core_value_sig5649) {
  let {
    dataStream: var_core_value_sigAF82
  } = var_core_value_sig0FD9;
  if (!var_core_value_sigAF82 || var_core_value_sig5649 < 0 || var_core_value_sig5649 >= var_core_value_sigAF82.length) return null;
  if (fe(var_core_value_sig0FD9, var_core_value_sig5649)) return {
    index: var_core_value_sig5649,
    breakOffsets: []
  };
  let var_core_value_sig21A2 = me(var_core_value_sigAF82, var_core_value_sig5649) + 1,
    var_core_value_sig5C1D = he(var_core_value_sigAF82, var_core_value_sig5649);
  return var_core_value_sig5649 <= var_core_value_sig21A2 ? {
    index: var_core_value_sig5649,
    breakOffsets: [var_core_value_sig5649]
  } : var_core_value_sig5649 >= var_core_value_sig5C1D ? {
    index: var_core_value_sig5649 + 1,
    breakOffsets: [var_core_value_sig5649]
  } : {
    index: var_core_value_sig5649 + 1,
    breakOffsets: [var_core_value_sig5649, var_core_value_sig5649 + 1]
  };
}
function me(var_core_value_sig4CBA, var_core_value_sig8E65) {
  let var_core_value_sig772C = Math.max(0, Math.min(var_core_value_sig8E65 - 1, var_core_value_sig4CBA.length - 1));
  return Math.max(var_core_value_sig4CBA.lastIndexOf(e.DataStreamTreeTokenType["PARAGRAPH"], var_core_value_sig772C), var_core_value_sig4CBA.lastIndexOf(e.DataStreamTreeTokenType["SECTION_BREAK"], var_core_value_sig772C));
}
function he(var_core_value_sigF309, var_core_value_sig44F9) {
  let var_core_value_sigE532 = Math.max(0, Math.min(var_core_value_sig44F9, var_core_value_sigF309.length - 1)),
    var_core_value_sigF381 = var_core_value_sigF309.indexOf(e.DataStreamTreeTokenType["PARAGRAPH"], var_core_value_sigE532),
    var_core_value_sigCB92 = var_core_value_sigF309.indexOf(e.DataStreamTreeTokenType["SECTION_BREAK"], var_core_value_sigE532);
  return var_core_value_sigF381 === -1 && var_core_value_sigCB92 === -1 ? var_core_value_sigF309.length : var_core_value_sigF381 === -1 ? var_core_value_sigCB92 : var_core_value_sigCB92 === -1 ? var_core_value_sigF381 : Math.min(var_core_value_sigF381, var_core_value_sigCB92);
}
function ge(var_core_value_sigC844, var_core_value_sig2ED4) {
  return !!(var_core_value_sigC844 != null && var_core_value_sigC844.some(var_core_value_sigDD1C => var_core_value_sigDD1C.startIndex <= var_core_value_sig2ED4 && var_core_value_sig2ED4 < var_core_value_sigDD1C.endIndex));
}
function _e(var_core_value_sig0477, var_core_value_sig6FDF) {
  return !!(var_core_value_sig0477 != null && var_core_value_sig0477.some(var_core_value_sig2C39 => var_core_value_sig2C39.startIndex <= var_core_value_sig6FDF && var_core_value_sig6FDF <= var_core_value_sig2C39.endIndex));
}
function ve(var_core_value_sig27C4, var_core_value_sig3E1A) {
  return !!(var_core_value_sig27C4 != null && var_core_value_sig27C4.some(var_core_value_sigB7D1 => var_core_value_sigB7D1.startIndex === var_core_value_sig3E1A));
}
let H = class {
  constructor(var_core_value_sig64F0, var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162) {
    this._instanceService = var_core_value_sig64F0, this._commandService = var_core_value_sig85B1, this._docSelectionManagerService = var_core_value_sig3141, this._docContentInsertService = var_core_value_sig2162;
  }
  insertChartFromText(var_core_value_sig2EAD, var_core_value_sig6774, var_core_value_sig340D) {
    let var_core_value_sig82D4 = (0, n.parseInlineChartTable)(var_core_value_sig2EAD);
    return var_core_value_sig82D4.length !== 0 && this.insertChart(var_core_value_sig82D4, var_core_value_sig6774, var_core_value_sig340D);
  }
  insertChart(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86 = {}) {
    if (var_core_value_sigBDE4.length === 0) return false;
    let var_core_value_sig0B0C = (0, t.tryPrepareInlineChartData)(var_core_value_sig7DF1, var_core_value_sigBDE4);
    if (!var_core_value_sig0B0C.ok) return false;
    let var_core_value_sigA39E = this._instanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sigA39E) return false;
    let var_core_value_sigBBEE = this._resolveInsertPosition(var_core_value_sigA39E, var_core_value_sigDC86.insertRange);
    if (!var_core_value_sigBBEE || !this._prepareStandaloneInsertLine(var_core_value_sigBBEE.breakOffsets, var_core_value_sigBBEE.segmentId)) return false;
    let var_core_value_sig011D = var_core_value_sigBBEE.unitId,
      var_core_value_sig6167 = {
        chartType: var_core_value_sig7DF1
      };
    var_core_value_sigDC86.context && (var_core_value_sig6167.context = var_core_value_sigDC86.context), var_core_value_sigDC86.dataAggregation && (var_core_value_sig6167.dataAggregation = var_core_value_sigDC86.dataAggregation), var_core_value_sigDC86.style && (var_core_value_sig6167.style = var_core_value_sigDC86.style);
    let var_core_value_sig65A1 = this._commandService["syncExecuteCommand"](s.InsertDocChartCommand["id"], {
      unitId: var_core_value_sig011D,
      textRange: {
        startOffset: var_core_value_sigBBEE.index,
        endOffset: var_core_value_sigBBEE.index,
        collapsed: true,
        segmentId: var_core_value_sigBBEE.segmentId
      },
      chart: var_core_value_sig6167,
      dataSource: var_core_value_sigDC86.dataSource ?? {
        values: var_core_value_sig0B0C.values
      },
      width: var_core_value_sigDC86.width,
      height: var_core_value_sigDC86.height,
      focus: var_core_value_sigDC86.focus
    });
    return var_core_value_sig65A1 ? {
      ...var_core_value_sig65A1,
      unitId: var_core_value_sig011D
    } : false;
  }
  _resolveInsertPosition(var_core_value_sig7F19, var_core_value_sig7827) {
    if (var_core_value_sig7827) return V(var_core_value_sig7F19, var_core_value_sig7827);
    let var_core_value_sig652C = var_core_value_sig7F19.getUnitId(),
      var_core_value_sig7E32 = null;
    try {
      var_core_value_sig7E32 = this._docContentInsertService["consumeInsertRange"](var_core_value_sig652C);
    } catch {
      var_core_value_sig7E32 = null;
    }
    return var_core_value_sig7E32 ? V(var_core_value_sig7F19, {
      startOffset: var_core_value_sig7E32.startOffset,
      endOffset: var_core_value_sig7E32.endOffset,
      collapsed: var_core_value_sig7E32.startOffset === var_core_value_sig7E32.endOffset,
      segmentId: var_core_value_sig7E32.segmentId ?? ""
    }) : V(var_core_value_sig7F19, ye(this._docSelectionManagerService["getActiveTextRange"]()));
  }
  _prepareStandaloneInsertLine(var_core_value_sig4C07, var_core_value_sig79AB) {
    for (let var_core_value_sig5CA5 of var_core_value_sig4C07) if (!this._commandService["syncExecuteCommand"](l.BreakLineCommand["id"], {
      textRange: {
        startOffset: var_core_value_sig5CA5,
        endOffset: var_core_value_sig5CA5,
        collapsed: true,
        segmentId: var_core_value_sig79AB
      }
    })) return false;
    return true;
  }
};
H = S([x(0, e.IUniverInstanceService), x(1, e.ICommandService), x(2, (0, e.Inject)(c.DocSelectionManagerService)), x(3, (0, e.Inject)(c.DocContentInsertService))], H);
function ye(var_core_value_sig7FB0) {
  return !var_core_value_sig7FB0 || typeof var_core_value_sig7FB0 != "object" ? null : var_core_value_sig7FB0;
}
const be = "doc-chart.insert-panel",
  xe = ["Category\tValue", "A\x0912", "B\x0918", "C\t9"].join("\x0a");
function Se(var_core_value_sig5215) {
  let var_core_value_sig5204 = (0, i.useDependency)(H),
    var_core_value_sig5E11 = (0, i.useDependency)(e.LocaleService),
    {
      defaultChartType: var_core_value_sigF481 = n.ChartTypeBits["Column"],
      defaultTableText: var_core_value_sigD7F2 = xe,
      insertOptions: var_core_value_sig4D58,
      onCancel: var_core_value_sig2DBD,
      onInserted: var_core_value_sig424E
    } = var_core_value_sig5215,
    var_core_value_sig7CF3 = (0, a.useMemo)(() => (0, t.buildChartTypeSelectOptions)(t.CHART_TYPE_CATALOG["map"](var_core_value_sigE90F => ({
      ...var_core_value_sigE90F,
      label: var_core_value_sig5E11.t("docs-chart-ui.chartTypes." + var_core_value_sigE90F.labelId)
    }))), [var_core_value_sig5E11]),
    [var_core_value_sig9DC6, var_core_value_sig6643] = (0, a.useState)(String(var_core_value_sigF481)),
    var_core_value_sig4124 = var_core_value_sig7CF3.find(var_core_value_sig8E74 => var_core_value_sig8E74.value === var_core_value_sig9DC6),
    var_core_value_sigBF1C = (var_core_value_sig4124 == null ? undefined : var_core_value_sig4124.chartType) ?? var_core_value_sigF481,
    var_core_value_sigEEEF = var_core_value_sig104C => (0, t.createChartInlineStarterData)(var_core_value_sig104C, {
      candlestickClose: var_core_value_sig5E11.t("docs-chart-ui.candlestick.close"),
      candlestickHigh: var_core_value_sig5E11.t("docs-chart-ui.candlestick.high"),
      candlestickLow: var_core_value_sig5E11.t("docs-chart-ui.candlestick.low"),
      candlestickOpen: var_core_value_sig5E11.t("docs-chart-ui.candlestick.open"),
      category: var_core_value_sig5E11.t("docs-chart-ui.common.category"),
      chordSource: var_core_value_sig5E11.t("docs-chart-ui.chord.source"),
      chordTarget: var_core_value_sig5E11.t("docs-chart-ui.chord.target"),
      label: var_core_value_sig5E11.t("docs-chart-ui.common.label"),
      sunburstHierarchy: var_core_value_sig5E11.t("docs-chart-ui.sunburst.hierarchy"),
      value: var_core_value_sig5E11.t("docs-chart-ui.common.value"),
      valueField: var_core_value_sig5E11.t("docs-chart-ui.common.valueField")
    }),
    [var_core_value_sig9A01, var_core_value_sig674F] = (0, a.useState)(() => var_core_value_sig5215.defaultTableText === undefined ? var_core_value_sigEEEF(var_core_value_sigF481) ?? (0, n.parseInlineChartTable)(var_core_value_sigD7F2) : (0, n.parseInlineChartTable)(var_core_value_sigD7F2)),
    [var_core_value_sigC8F6, var_core_value_sig8A26] = (0, a.useState)("inline"),
    [var_core_value_sigD073, var_core_value_sigF631] = (0, a.useState)(null),
    [var_core_value_sig2278, var_core_value_sig7053] = (0, a.useState)([]),
    [var_core_value_sig52F1, var_core_value_sig1E74] = (0, a.useState)(null),
    var_core_value_sig1E84 = {
      [t.InlineChartCreationIssueCode["UnknownOption"]]: var_core_value_sig5E11.t("docs-chart-ui.common.insertChartFailed"),
      [t.InlineChartCreationIssueCode["EmptyData"]]: var_core_value_sig5E11.t("docs-chart-ui.common.tableDataEmpty"),
      [t.InlineChartCreationIssueCode["InvalidCandlestickData"]]: var_core_value_sig5E11.t("docs-chart-ui.candlestick.columnsError")
    };
  return (0, o.jsxs)("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [(0, o.jsxs)("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [(0, o.jsx)("div", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sig5E11.t("docs-chart-ui.common.chartType")
      }), (0, o.jsx)(r.Select, {
        className: "univer-w-full !univer-min-w-0",
        value: var_core_value_sig9DC6,
        options: var_core_value_sig7CF3,
        onChange: var_core_value_sig841D => {
          var var_core_value_sig90CB;
          var_core_value_sig6643(var_core_value_sig841D);
          let var_core_value_sigBDF5 = ((var_core_value_sig90CB = var_core_value_sig7CF3.find(var_core_value_sigEFD4 => var_core_value_sigEFD4.value === var_core_value_sig841D)) == null ? undefined : var_core_value_sig90CB.chartType) ?? Number(var_core_value_sig841D),
            var_core_value_sigACC6 = var_core_value_sigEEEF(var_core_value_sigBDF5);
          var_core_value_sigACC6 && var_core_value_sig674F(var_core_value_sigACC6);
        }
      })]
    }), (0, o.jsx)(t.ChartReferencedDataSourceEditor, {
      mode: var_core_value_sigC8F6,
      inlineContent: (0, o.jsx)(t.ChartInlineTableEditor, {
        values: var_core_value_sig9A01,
        minColumns: (0, t.getChartInlineTableMinColumns)(var_core_value_sigBF1C),
        parsePastedText: n.parseInlineChartTable,
        onChange: var_core_value_sig674F
      }),
      onModeChange: var_core_value_sig1614 => {
        var_core_value_sig8A26(var_core_value_sig1614), var_core_value_sigF631(null), var_core_value_sig7053([]);
      },
      onPreviewChange: (var_core_value_sig85C3, var_core_value_sigB996) => {
        var_core_value_sig85C3 && var_core_value_sigB996.status === n.ChartDataSourceRuntimeStatus["READY"] && var_core_value_sigB996.values ? (var_core_value_sigF631({
          source: var_core_value_sig85C3
        }), var_core_value_sig7053(var_core_value_sigB996.values["map"](var_core_value_sig861B => [...var_core_value_sig861B]))) : (var_core_value_sigF631(null), var_core_value_sig7053([]));
      }
    }), var_core_value_sig52F1 && (0, o.jsx)("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_core_value_sig52F1
    }), (0, o.jsxs)("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_core_value_sig2DBD && (0, o.jsx)(r.Button, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sig2DBD,
        children: var_core_value_sig5E11.t("docs-chart-ui.common.cancel")
      }), (0, o.jsx)(r.Button, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sigC8F6 === "referenced" && !var_core_value_sigD073,
        onClick: () => {
          var var_core_value_sig4BBA;
          let var_core_value_sig6201 = (0, t.tryBuildInlineChartCreationPlan)({
            optionId: var_core_value_sig9DC6,
            values: var_core_value_sigC8F6 === "referenced" ? var_core_value_sig2278 : var_core_value_sig9A01
          });
          if (!var_core_value_sig6201.ok) {
            var_core_value_sig1E74(var_core_value_sig1E84[var_core_value_sig6201.issue["code"]]);
            return;
          }
          let var_core_value_sig5151 = var_core_value_sigC8F6 === "referenced" && var_core_value_sigD073 ? {
              ...var_core_value_sig4D58,
              dataSource: var_core_value_sigD073
            } : var_core_value_sig4D58,
            var_core_value_sigB542 = var_core_value_sig6201.plan["style"] ? {
              ...var_core_value_sig5151,
              style: {
                ...(var_core_value_sig5151 == null ? undefined : var_core_value_sig5151.style),
                pie: {
                  ...(var_core_value_sig5151 == null || (var_core_value_sig4BBA = var_core_value_sig5151.style) == null ? undefined : var_core_value_sig4BBA.pie),
                  ...var_core_value_sig6201.plan["style"].pie
                }
              }
            } : var_core_value_sig5151,
            var_core_value_sigBB6C = var_core_value_sig5204.insertChart(var_core_value_sig6201.plan["values"], var_core_value_sig6201.plan["chartType"], var_core_value_sigB542);
          if (!var_core_value_sigBB6C) {
            var_core_value_sig1E74(var_core_value_sig5E11.t("docs-chart-ui.common.insertChartFailed"));
            return;
          }
          var_core_value_sig1E74(null), var_core_value_sig424E == null || var_core_value_sig424E(var_core_value_sigBB6C);
        },
        children: var_core_value_sig5E11.t("docs-chart-ui.common.insert")
      })]
    })]
  });
}
const Ce = "docs-chart-ui.config",
  we = {},
  Te = "__docsChartResource";
let U = class extends e.Disposable {
  constructor(var_core_value_sigE2BF, var_core_value_sigB8C7, var_core_value_sigA56E) {
    super(), this._docClipboardService = var_core_value_sigE2BF, this._pasteAdapterService = var_core_value_sigB8C7, this._resourceService = var_core_value_sigA56E, this._initClipboardHooks();
  }
  _initClipboardHooks() {
    this.disposeWithMe(this._docClipboardService["addClipboardHook"]({
      onCopyDocData: (var_core_value_sig5237, var_core_value_sigBB00) => this._appendChartResources(var_core_value_sig5237, var_core_value_sigBB00.sourceDocuments)
    })), this.disposeWithMe(this._pasteAdapterService["registerAdapter"]({
      getPasteMutationInfos: var_core_value_sig7E54 => this._getPasteMutationInfos(var_core_value_sig7E54)
    }));
  }
  _appendChartResources(var_core_value_sig1998, var_core_value_sigFF19) {
    var var_core_value_sig43B8;
    let var_core_value_sigD98F = (var_core_value_sig43B8 = var_core_value_sigFF19[0]) == null ? undefined : var_core_value_sig43B8.id;
    if (!var_core_value_sigD98F) return var_core_value_sig1998;
    let var_core_value_sig66C0 = Object.values(var_core_value_sig1998.drawings ?? {}).filter(var_core_value_sig9A8D => this._isDocChartDrawing(var_core_value_sig9A8D));
    if (var_core_value_sig66C0.length === 0) return var_core_value_sig1998;
    let var_core_value_sig9D15 = {
      version: n.CHART_RESOURCE_VERSION,
      dataSources: {},
      charts: {}
    };
    return var_core_value_sig66C0.forEach(var_core_value_sigC259 => {
      let var_core_value_sig9C9F = this._resourceService["getChart"](var_core_value_sigD98F, var_core_value_sigC259.chartId);
      if (!var_core_value_sig9C9F) return;
      let var_core_value_sigFDEA = this._resourceService["getDataSource"](var_core_value_sigD98F, var_core_value_sig9C9F.dataSourceId);
      var_core_value_sigFDEA && (var_core_value_sig9D15.charts[var_core_value_sig9C9F.id] = e.Tools["deepClone"](var_core_value_sig9C9F), var_core_value_sig9D15.dataSources[var_core_value_sigFDEA.id] = var_core_value_sigFDEA);
    }), Object.keys(var_core_value_sig9D15.charts).length === 0 ? var_core_value_sig1998 : {
      ...var_core_value_sig1998,
      [Te]: var_core_value_sig9D15
    };
  }
  _getPasteMutationInfos(var_core_value_sigB785) {
    let var_core_value_sig130F = var_core_value_sigB785.doc[Te];
    if (!var_core_value_sig130F) return {
      redoMutations: [],
      undoMutations: []
    };
    let var_core_value_sigC0E3 = new Map(),
      var_core_value_sig52F7 = [],
      var_core_value_sig866F = [],
      var_core_value_sigDE3D = [],
      var_core_value_sigF175 = [];
    return var_core_value_sigB785.customBlockMappings["forEach"](var_core_value_sig86D0 => {
      if (!this._isDocChartDrawing(var_core_value_sig86D0.sourceDrawing) || !this._isDocChartDrawing(var_core_value_sig86D0.targetDrawing)) return;
      let var_core_value_sig4CD2 = var_core_value_sig130F.charts[var_core_value_sig86D0.sourceDrawing["chartId"]];
      if (!var_core_value_sig4CD2) return;
      let var_core_value_sig48CA = var_core_value_sig130F.dataSources[var_core_value_sig4CD2.dataSourceId];
      if (!var_core_value_sig48CA) return;
      let var_core_value_sig50AF = this._getOrCreatePastedDataSourceId(var_core_value_sigB785.unitId, var_core_value_sig48CA, var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F),
        var_core_value_sigA942 = (0, e.generateRandomId)(),
        var_core_value_sigA621 = {
          ...var_core_value_sig4CD2,
          id: var_core_value_sigA942,
          dataSourceId: var_core_value_sig50AF
        };
      var_core_value_sig86D0.targetDrawing["chartId"] = var_core_value_sigA942, var_core_value_sigDE3D.push({
        id: s.SetDocChartSnapshotMutation["id"],
        params: {
          unitId: var_core_value_sigB785.unitId,
          chart: var_core_value_sigA621
        }
      }), var_core_value_sigF175.push({
        id: s.RemoveDocChartSnapshotMutation["id"],
        params: {
          unitId: var_core_value_sigB785.unitId,
          chartId: var_core_value_sigA942
        }
      });
    }), {
      redoMutations: [...var_core_value_sig52F7, ...var_core_value_sigDE3D],
      undoMutations: [...var_core_value_sigF175, ...var_core_value_sig866F]
    };
  }
  _getOrCreatePastedDataSourceId(var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sigBCA9) {
    let var_core_value_sig4CDF = var_core_value_sig49B0.get(var_core_value_sig4E3D.id);
    if (var_core_value_sig4CDF) return var_core_value_sig4CDF;
    let var_core_value_sig3F79 = (0, e.generateRandomId)();
    return var_core_value_sig49B0.set(var_core_value_sig4E3D.id, var_core_value_sig3F79), var_core_value_sig2547.push({
      id: s.SetDocChartDataSourceMutation["id"],
      params: {
        unitId: var_core_value_sig6A18,
        dataSource: {
          ...var_core_value_sig4E3D,
          id: var_core_value_sig3F79
        }
      }
    }), var_core_value_sigBCA9.push({
      id: s.RemoveDocChartDataSourceMutation["id"],
      params: {
        unitId: var_core_value_sig6A18,
        dataSourceId: var_core_value_sig3F79
      }
    }), var_core_value_sig3F79;
  }
  _isDocChartDrawing(var_core_value_sig880E) {
    let var_core_value_sigC9ED = var_core_value_sig880E;
    return (var_core_value_sigC9ED == null ? undefined : var_core_value_sigC9ED.drawingType) === e.DrawingTypeEnum["DRAWING_CHART"] && typeof var_core_value_sigC9ED.chartId == "string";
  }
};
U = S([x(0, (0, e.Inject)(l.IDocClipboardService)), x(1, (0, e.Inject)(l.IDocClipboardPasteAdapterService)), x(2, (0, e.Inject)(n.ChartResourceRepository))], U);
let W = class extends e.Disposable {
  constructor(var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0) {
    super(), this._drawingAdapterService = var_core_value_sigB57B, this._floatingToolbarAdapterService = var_core_value_sig780B, this._resourceService = var_core_value_sig7D1B, this._localeService = var_core_value_sig7BE0, this._initAdapter();
  }
  _initAdapter() {
    this.disposeWithMe(this._drawingAdapterService["registerAdapter"]({
      getEditDrawingCommandInfo: ({
        unitId: var_core_value_sigBBFF,
        drawing: var_core_value_sig8889
      }) => {
        let var_core_value_sig32F8 = Ee(var_core_value_sig8889);
        return var_core_value_sig32F8 ? {
          label: this._localeService["t"]("docs-chart-ui.common.editChart"),
          commandId: _.id,
          commandParams: {
            unitId: var_core_value_sigBBFF,
            chartId: var_core_value_sig32F8.chartId,
            drawingId: var_core_value_sig32F8.drawingId
          }
        } : null;
      }
    })), this.disposeWithMe(this._floatingToolbarAdapterService["registerAdapter"]({
      getItems: ({
        unitId: var_core_value_sig5B67,
        subUnitId: var_core_value_sig1758,
        drawing: var_core_value_sig4805
      }) => {
        var var_core_value_sigE67E;
        let var_core_value_sig2902 = Ee(var_core_value_sig4805);
        if (!var_core_value_sig2902) return null;
        let var_core_value_sig9989 = this._resourceService["getChart"](var_core_value_sig5B67, var_core_value_sig2902.chartId),
          var_core_value_sig698E = (var_core_value_sig9989 == null ? undefined : var_core_value_sig9989.chartType) ?? n.ChartTypeBits["Column"],
          var_core_value_sig2809 = t.CHART_TYPE_CATALOG["map"](var_core_value_sigBC46 => ({
            value: "id" in var_core_value_sigBC46 ? var_core_value_sigBC46.id : String(var_core_value_sigBC46.value),
            chartType: var_core_value_sigBC46.value,
            ...("pieSecondaryPlotType" in var_core_value_sigBC46 ? {
              pieSecondaryPlotType: var_core_value_sigBC46.pieSecondaryPlotType
            } : {}),
            icon: var_core_value_sigBC46.iconName,
            label: this._localeService["t"]("docs-chart-ui.chartTypes." + var_core_value_sigBC46.labelId)
          })),
          var_core_value_sig2DAB = (0, t.resolveChartTypeFieldValue)(var_core_value_sig698E, var_core_value_sig9989 == null || (var_core_value_sigE67E = var_core_value_sig9989.style) == null ? undefined : var_core_value_sigE67E.pie, var_core_value_sig2809);
        return [{
          type: "select",
          label: this._localeService["t"]("docs-chart-ui.common.chartType"),
          index: 0,
          commandId: s.UpdateDocChartConfigCommand["id"],
          commandParamsFactory: var_core_value_sig3D7D => {
            var var_core_value_sig27E5, var_core_value_sig8061;
            let var_core_value_sig4D4C = var_core_value_sig2809.find(var_core_value_sig7524 => var_core_value_sig7524.value === var_core_value_sig3D7D),
              var_core_value_sigC9E0 = (var_core_value_sig4D4C == null ? undefined : var_core_value_sig4D4C.chartType) ?? Number(var_core_value_sig3D7D),
              var_core_value_sig76BA = var_core_value_sig9989 == null || (var_core_value_sig27E5 = var_core_value_sig9989.style) == null || (var_core_value_sig27E5 = var_core_value_sig27E5.pie) == null ? undefined : var_core_value_sig27E5.composite,
              var_core_value_sigFBFA = (var_core_value_sigC9E0 === n.ChartTypeBits["Pie"] || var_core_value_sigC9E0 === n.ChartTypeBits["Doughnut"]) && typeof (var_core_value_sig9989 == null || (var_core_value_sig8061 = var_core_value_sig9989.style) == null || (var_core_value_sig8061 = var_core_value_sig8061.pie) == null ? undefined : var_core_value_sig8061.doughnutHole) == "number",
              var_core_value_sigF602 = var_core_value_sigFBFA ? {
                doughnutHole: null
              } : {},
              var_core_value_sig1BBD = {
                unitId: var_core_value_sig5B67,
                chartId: var_core_value_sig2902.chartId,
                chartType: var_core_value_sigC9E0
              };
            if (var_core_value_sig4D4C != null && var_core_value_sig4D4C.pieSecondaryPlotType) {
              var var_core_value_sigF704;
              return {
                ...var_core_value_sig1BBD,
                style: {
                  ...(var_core_value_sig9989 == null ? undefined : var_core_value_sig9989.style),
                  pie: {
                    ...(var_core_value_sig9989 == null || (var_core_value_sigF704 = var_core_value_sig9989.style) == null ? undefined : var_core_value_sigF704.pie),
                    ...var_core_value_sigF602,
                    composite: {
                      ...var_core_value_sig76BA,
                      enabled: true,
                      secondaryPlot: {
                        ...(var_core_value_sig76BA == null ? undefined : var_core_value_sig76BA.secondaryPlot),
                        type: var_core_value_sig4D4C.pieSecondaryPlotType
                      }
                    }
                  }
                }
              };
            }
            if (var_core_value_sigC9E0 === n.ChartTypeBits["Pie"] && var_core_value_sig76BA) {
              var var_core_value_sig2BCF;
              return {
                ...var_core_value_sig1BBD,
                style: {
                  ...(var_core_value_sig9989 == null ? undefined : var_core_value_sig9989.style),
                  pie: {
                    ...(var_core_value_sig9989 == null || (var_core_value_sig2BCF = var_core_value_sig9989.style) == null ? undefined : var_core_value_sig2BCF.pie),
                    ...var_core_value_sigF602,
                    composite: {
                      ...var_core_value_sig76BA,
                      enabled: false
                    }
                  }
                }
              };
            }
            return var_core_value_sigFBFA ? {
              ...var_core_value_sig1BBD,
              style: {
                pie: var_core_value_sigF602
              }
            } : var_core_value_sig1BBD;
          },
          disable: !var_core_value_sig9989,
          value: var_core_value_sig2DAB,
          options: var_core_value_sig2809
        }, {
          type: "button",
          label: this._localeService["t"]("docs-chart-ui.common.editChart"),
          index: 1,
          commandId: _.id,
          commandParams: {
            unitId: var_core_value_sig5B67,
            chartId: var_core_value_sig2902.chartId,
            drawingId: var_core_value_sig2902.drawingId
          },
          disable: false,
          icon: "DrawingEditIcon"
        }, {
          type: "button",
          label: this._localeService["t"]("docs-chart-ui.common.deleteChart"),
          index: 2,
          commandId: u.RemoveDocDrawingCommand["id"],
          commandParams: {
            unitId: var_core_value_sig5B67,
            drawings: [{
              unitId: var_core_value_sig5B67,
              subUnitId: var_core_value_sig1758,
              drawingId: var_core_value_sig2902.drawingId
            }]
          },
          disable: false,
          icon: "DrawingDeleteIcon"
        }];
      }
    }));
  }
};
W = S([x(0, u.IDocDrawingAdapterService), x(1, (0, e.Inject)(d.DocDrawingFloatingToolbarAdapterService)), x(2, (0, e.Inject)(n.ChartResourceRepository)), x(3, (0, e.Inject)(e.LocaleService))], W);
function Ee(var_core_value_sig133B) {
  let var_core_value_sig69B8 = var_core_value_sig133B;
  return (var_core_value_sig69B8 == null ? undefined : var_core_value_sig69B8.drawingType) === e.DrawingTypeEnum["DRAWING_CHART"] && typeof var_core_value_sig69B8.chartId == "string" ? var_core_value_sig69B8 : null;
}
const De = (0, e.createIdentifier)("doc-chart.snapshot-renderer");
var Oe = class {
  constructor(var_core_value_sig7D40, var_core_value_sig6C7E) {
    this._renderService = var_core_value_sig7D40, this._renderModelManager = var_core_value_sig6C7E;
  }
  async render(var_core_value_sig68BE, var_core_value_sig04C6) {
    if (typeof document > "u") throw TypeError("Document\x20chart\x20snapshot\x20rendering\x20requires\x20a\x20browser\x20document.");
    let {
      chartConfig: var_core_value_sigCA05,
      chartStyle: var_core_value_sig2F2B
    } = this._renderService["createRenderInput"](var_core_value_sig04C6);
    if (var_core_value_sig68BE.format === n.ChartImageExportFormat["SVG"]) return (await this._renderModelManager["exportImage"]({
      chartId: var_core_value_sig04C6.chartId,
      config: var_core_value_sigCA05,
      style: var_core_value_sig2F2B,
      width: var_core_value_sig68BE.width,
      height: var_core_value_sig68BE.height
    }, {
      format: var_core_value_sig68BE.format
    })).dataUrl;
    let var_core_value_sig70AF = new n["DataUrlImageChartHost"](var_core_value_sig04C6.chartId, {
        width: var_core_value_sig68BE.width,
        height: var_core_value_sig68BE.height
      }),
      var_core_value_sigD04E = this._renderService["createChartInstance"](n.ChartRenderMode["Image"]);
    try {
      var_core_value_sigD04E.bind(var_core_value_sig70AF), await var_core_value_sigD04E.render({
        chartId: var_core_value_sig04C6.chartId,
        config: var_core_value_sigCA05,
        style: var_core_value_sig2F2B
      });
      let var_core_value_sig877E = var_core_value_sig70AF.getDataUrl();
      if (!var_core_value_sig877E) throw Error("Failed to render document chart snapshot: " + var_core_value_sig04C6.unitId + "/" + var_core_value_sig04C6.chartId);
      return var_core_value_sig877E;
    } finally {
      var_core_value_sigD04E.dispose(), var_core_value_sig70AF.dispose();
    }
  }
};
let G = class extends t.ChartSnapshotQueue {
  constructor(var_core_value_sigB99B, var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69, var_core_value_sig6884) {
    super(var_core_value_sigB99B, var_core_value_sig5A75, var_core_value_sig6884 ?? new Oe(var_core_value_sig7BAF, var_core_value_sig8F69));
  }
  getCacheKey(var_core_value_sig066E) {
    let var_core_value_sig9B0D = super.getCacheKey(var_core_value_sig066E);
    return var_core_value_sig066E.format === n.ChartImageExportFormat["SVG"] ? var_core_value_sig9B0D + "::" + var_core_value_sig066E.format : var_core_value_sig9B0D;
  }
};
G = S([x(0, (0, e.Inject)(e.LocaleService)), x(1, (0, e.Inject)(s.DocChartModelService)), x(2, (0, e.Inject)(F)), x(3, n.IChartRenderModelManagerService), x(4, (0, e.Optional)(De))], G);
let K = class extends e.Disposable {
  constructor(var_core_value_sig3D2C, var_core_value_sigC56D) {
    super(), this._snapshotService = var_core_value_sig3D2C, this._modelService = var_core_value_sigC56D, N(this, "_runtimeStateSubscriptions", new Map()), this._listenRuntimeData();
  }
  _listenRuntimeData() {
    this.disposeWithMe(this._modelService["chartModelAdded$"].subscribe(var_core_value_sig20C8 => this._bindRuntimeState(var_core_value_sig20C8))), this.disposeWithMe(this._modelService["chartModelRemoved$"].subscribe(var_core_value_sigE9A7 => this._releaseRuntimeState(var_core_value_sigE9A7))), this.disposeWithMe((0, e.toDisposable)(() => {
      this._runtimeStateSubscriptions["forEach"](({
        subscription: var_core_value_sig0D69
      }) => var_core_value_sig0D69.unsubscribe()), this._runtimeStateSubscriptions["clear"]();
    }));
  }
  _bindRuntimeState(var_core_value_sig3A17) {
    if (this._runtimeStateSubscriptions["has"](var_core_value_sig3A17)) return;
    let var_core_value_sig938F = var_core_value_sig3A17.model["config"] == null ? 0 : 1,
      var_core_value_sigD948 = (0, f.combineLatest)([var_core_value_sig3A17.model["config$"].pipe((0, f.filter)(var_core_value_sigBECE => var_core_value_sigBECE != null)), var_core_value_sig3A17.model["style$"]]).pipe((0, f.skip)(var_core_value_sig938F), (0, f.auditTime)(0)).subscribe(() => this._snapshotService["invalidateChart"](var_core_value_sig3A17.unitId, var_core_value_sig3A17.chartId));
    this._runtimeStateSubscriptions["set"](var_core_value_sig3A17, {
      subscription: var_core_value_sigD948
    });
  }
  _releaseRuntimeState(var_core_value_sigBE5E) {
    var var_core_value_sig0281;
    (var_core_value_sig0281 = this._runtimeStateSubscriptions["get"](var_core_value_sigBE5E)) == null || var_core_value_sig0281.subscription["unsubscribe"](), this._runtimeStateSubscriptions["delete"](var_core_value_sigBE5E);
  }
};
K = S([x(0, (0, e.Inject)(G)), x(1, (0, e.Inject)(s.DocChartModelService))], K);
const q = g.id,
  ke = q + ".below";
function Ae(var_core_value_sig983D) {
  return (0, f.combineLatest)([(0, l.disableMenuWhenHeaderFooterEditing)(var_core_value_sig983D), je(var_core_value_sig983D)]).pipe((0, f.map)(([var_core_value_sigED71, var_core_value_sig281C]) => var_core_value_sigED71 || var_core_value_sig281C));
}
function je(var_core_value_sig9A03) {
  let var_core_value_sig3363 = var_core_value_sig9A03.get(c.DocSelectionManagerService),
    var_core_value_sigF64A = var_core_value_sig9A03.get(e.IUniverInstanceService);
  return new f["Observable"](var_core_value_sig3C92 => {
    let var_core_value_sigB16B = var_core_value_sig1B22 => {
      let var_core_value_sig7F72 = var_core_value_sigF64A.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
      if (!var_core_value_sig7F72) {
        var_core_value_sig3C92.next(true);
        return;
      }
      let var_core_value_sig7B2A = var_core_value_sig7F72.getUnitId(),
        var_core_value_sig06CD = (var_core_value_sig1B22 == null ? undefined : var_core_value_sig1B22.unitId) === var_core_value_sig7B2A ? var_core_value_sig1B22.textRanges ?? [] : [...(var_core_value_sig3363.getTextRanges({
          unitId: var_core_value_sig7B2A,
          subUnitId: var_core_value_sig7B2A
        }) ?? [])];
      if (var_core_value_sig06CD.length !== 1) {
        var_core_value_sig3C92.next(true);
        return;
      }
      let var_core_value_sigA5F1 = var_core_value_sig06CD.find(var_core_value_sig480E => var_core_value_sig480E.isActive) ?? var_core_value_sig06CD[0];
      if (!var_core_value_sigA5F1 || !var_core_value_sigA5F1.collapsed || var_core_value_sigA5F1.startOffset == null) {
        var_core_value_sig3C92.next(true);
        return;
      }
      let var_core_value_sig97A2 = V(var_core_value_sig7F72, {
        ...var_core_value_sigA5F1,
        segmentId: var_core_value_sigA5F1.segmentId ?? (var_core_value_sig1B22 == null ? undefined : var_core_value_sig1B22.segmentId) ?? ""
      });
      var_core_value_sig3C92.next(var_core_value_sig97A2 == null);
    };
    var_core_value_sigB16B();
    let var_core_value_sig585D = var_core_value_sig3363.textSelection$["subscribe"](var_core_value_sig07E9 => var_core_value_sigB16B(var_core_value_sig07E9));
    return () => var_core_value_sig585D.unsubscribe();
  });
}
function Me(var_core_value_sig25EC) {
  return J(var_core_value_sig25EC);
}
function J(var_core_value_sigA790) {
  let var_core_value_sig9A5E = var_core_value_sigA790.get(e.LocaleService).t("docs-chart-ui.common.insertChart");
  return {
    id: q,
    commandId: g.id,
    type: i.MenuItemType["BUTTON"],
    icon: "ChartIcon",
    title: var_core_value_sig9A5E,
    tooltip: var_core_value_sig9A5E,
    disabled$: Ae(var_core_value_sigA790),
    hidden$: (0, i.getMenuHiddenObservable)(var_core_value_sigA790, e.UniverInstanceType["UNIVER_DOC"])
  };
}
function Ne(var_core_value_sig01B9) {
  let var_core_value_sigD6A9 = var_core_value_sig01B9.get(e.LocaleService).t("docs-chart-ui.common.insertChart");
  return {
    id: ke,
    commandId: g.id,
    type: i.MenuItemType["BUTTON"],
    icon: "ChartIcon",
    title: var_core_value_sigD6A9,
    tooltip: var_core_value_sigD6A9,
    disabled$: Ae(var_core_value_sig01B9),
    hidden$: (0, i.getMenuHiddenObservable)(var_core_value_sig01B9, e.UniverInstanceType["UNIVER_DOC"])
  };
}
const Pe = {
  [i.RibbonInsertGroup["MEDIA"]]: {
    [q]: {
      order: 2.5,
      menuItemFactory: Me
    }
  },
  [i.ContextMenuPosition["PARAGRAPH"]]: {
    [i.ContextMenuGroup["LAYOUT"]]: {
      [l.INSERT_BELLOW_MENU_ID]: {
        [q]: {
          order: 4.5,
          menuItemFactory: J
        }
      }
    },
    [l.EMPTY_PARAGRAPH_MENU_ID]: {
      [i.ContextMenuGroup["LAYOUT"]]: {
        [q]: {
          order: 5.5,
          menuItemFactory: J
        }
      }
    },
    [l.DOC_CONTENT_INSERT_MENU_ID]: {
      [i.ContextMenuGroup["LAYOUT"]]: {
        [q]: {
          order: 4.5,
          menuItemFactory: J
        }
      }
    },
    [l.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
      insert: {
        [q]: {
          order: 1.5,
          menuItemFactory: J
        }
      }
    },
    [l.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
      insert: {
        [ke]: {
          order: 1.5,
          menuItemFactory: Ne
        }
      }
    }
  }
};
var Fe = "@univerjs-pro/docs-chart-ui",
  Ie = "1.0.0-insiders.20260907-70fc579",
  Le = class extends h.Image {
    constructor(...var_core_value_sigE722) {
      super(...var_core_value_sigE722), N(this, "_imageContentHidden", false);
    }
    get imageContentHidden() {
      return this._imageContentHidden;
    }
    setImageContentHidden(var_core_value_sig062A) {
      this._imageContentHidden !== var_core_value_sig062A && (this._imageContentHidden = var_core_value_sig062A, this.makeDirty(true));
    }
    _draw(var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683) {
      this._imageContentHidden || super._draw(var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683);
    }
  };
const Re = {
  ...h.DEFAULT_TRANSFORMER_CONFIG,
  rotateEnabled: false,
  keepRatio: false,
  moveBoundaryEnabled: false
};
let Y = class extends e.Disposable {
  constructor(var_core_value_sig26EC, var_core_value_sigEEDB, var_core_value_sig36E7) {
    super(), this._drawingManagerService = var_core_value_sig26EC, this._renderManagerService = var_core_value_sigEEDB, this._snapshotRenderService = var_core_value_sig36E7, N(this, "_activeDomReadyDrawingKeys", new Set()), this._init();
  }
  setActiveDomReady(var_core_value_sig6A78, var_core_value_sigF7EF) {
    let var_core_value_sig27F9 = (0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sig6A78);
    var_core_value_sigF7EF ? this._activeDomReadyDrawingKeys["add"](var_core_value_sig27F9) : this._activeDomReadyDrawingKeys["delete"](var_core_value_sig27F9), this._syncRenderedChartVisibility(var_core_value_sig6A78);
  }
  _init() {
    this.disposeWithMe(this._drawingManagerService["add$"].subscribe(var_core_value_sig4F59 => {
      this._requestSnapshotsForSearches(var_core_value_sig4F59);
    })), this.disposeWithMe(this._drawingManagerService["refreshTransform$"].subscribe(var_core_value_sigF564 => {
      this._requestSnapshotsForSearches(var_core_value_sigF564);
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_core_value_sig8CFA => {
      this._removeRenderedCharts(var_core_value_sig8CFA);
    })), this.disposeWithMe(this._snapshotRenderService["chartInvalidated$"].subscribe(({
      unitId: var_core_value_sig2E11,
      chartId: var_core_value_sig5B69
    }) => {
      this._requestSnapshotsForUnit(var_core_value_sig2E11, var_core_value_sig5B69);
    })), this.disposeWithMe(this._snapshotRenderService["snapshotUpdated$"].subscribe(var_core_value_sigB098 => {
      if (var_core_value_sigB098.status !== "ready" || !var_core_value_sigB098.dataUrl) return;
      let [var_core_value_sigCE71, var_core_value_sig21D8] = var_core_value_sigB098.key["split"]("::");
      !var_core_value_sigCE71 || !var_core_value_sig21D8 || this._renderCharts(var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sigB098.dataUrl);
    }));
  }
  _requestSnapshotsForSearches(var_core_value_sig393E) {
    var_core_value_sig393E.forEach(var_core_value_sig2B65 => {
      let var_core_value_sigD7EA = this._getChartDrawing(var_core_value_sig2B65);
      var_core_value_sigD7EA && this._requestSnapshot(var_core_value_sigD7EA);
    });
  }
  _requestSnapshotsForUnit(var_core_value_sigB609, var_core_value_sig390D) {
    this._forEachChartDrawing(var_core_value_sigB609, var_core_value_sigB33B => {
      (var_core_value_sig390D == null || var_core_value_sigB33B.chartId === var_core_value_sig390D) && this._requestSnapshot(var_core_value_sigB33B);
    });
  }
  _requestSnapshot(var_core_value_sigC928) {
    let var_core_value_sig39B7 = this._getDrawingRect(var_core_value_sigC928);
    if (!var_core_value_sig39B7) return;
    let var_core_value_sig18E0 = this._snapshotRenderService["requestSnapshot"]({
      unitId: var_core_value_sigC928.unitId,
      chartId: var_core_value_sigC928.chartId,
      width: var_core_value_sig39B7.width,
      height: var_core_value_sig39B7.height,
      dpr: n.DEFAULT_CHART_DEVICE_PIXEL_RATIO,
      mode: "main"
    });
    var_core_value_sig18E0.status === "ready" && var_core_value_sig18E0.dataUrl && this._renderDrawing(var_core_value_sigC928, var_core_value_sig18E0.dataUrl);
  }
  _renderCharts(var_core_value_sigE161, var_core_value_sigBDEE, var_core_value_sig1F40) {
    this._forEachChartDrawing(var_core_value_sigE161, var_core_value_sig24B9 => {
      var_core_value_sig24B9.chartId === var_core_value_sigBDEE && this._renderDrawing(var_core_value_sig24B9, var_core_value_sig1F40);
    });
  }
  _renderDrawing(var_core_value_sig3FC7, var_core_value_sig1E1B) {
    let var_core_value_sig3B10 = this._renderManagerService["getRenderUnitById"](var_core_value_sig3FC7.unitId),
      var_core_value_sig89E6 = var_core_value_sig3B10 == null ? undefined : var_core_value_sig3B10.scene;
    if (!var_core_value_sig89E6 || !this._getDrawingRect(var_core_value_sig3FC7)) return;
    let var_core_value_sig4743 = (0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sig3FC7),
      var_core_value_sigEB6A = var_core_value_sig89E6.getObjectIncludeInGroup(var_core_value_sig4743);
    if (var_core_value_sigEB6A != null && var_core_value_sigEB6A.changeSource) {
      var var_core_value_sig3D46, var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig808B, var_core_value_sig2A26;
      var_core_value_sigEB6A.transformerConfig = {
        ...var_core_value_sigEB6A.transformerConfig,
        ...Re
      }, (var_core_value_sig3D46 = var_core_value_sigEB6A.getNative) == null || (var_core_value_sig3D46 = var_core_value_sig3D46.call(var_core_value_sigEB6A)) == null || var_core_value_sig3D46.addEventListener("load", () => {
        var var_core_value_sig26DB;
        (var_core_value_sig26DB = var_core_value_sigEB6A.makeDirty) == null || var_core_value_sig26DB.call(var_core_value_sigEB6A, true), var_core_value_sig89E6.makeDirty(true), var_core_value_sig89E6.requestRender().catch(() => {});
      }, {
        once: true
      }), var_core_value_sigEB6A.changeSource(var_core_value_sig1E1B), (var_core_value_sigCC93 = var_core_value_sigEB6A.transformByState) == null || var_core_value_sigCC93.call(var_core_value_sigEB6A, var_core_value_sig3FC7.transform), (var_core_value_sig5964 = var_core_value_sigEB6A.setClipBounds) == null || var_core_value_sig5964.call(var_core_value_sigEB6A, (var_core_value_sig808B = var_core_value_sig3FC7.transform) == null ? undefined : var_core_value_sig808B.clipBounds), this._syncChartImageVisibility(var_core_value_sigEB6A, var_core_value_sig3FC7, var_core_value_sig4743), (var_core_value_sig2A26 = var_core_value_sigEB6A.makeDirty) == null || var_core_value_sig2A26.call(var_core_value_sigEB6A, true), var_core_value_sig89E6.makeDirty(true);
      return;
    }
    this._createImageShape(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig89E6, var_core_value_sig4743);
  }
  _createImageShape(var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5) {
    let var_core_value_sig7100 = var_core_value_sig1179.transform;
    if (!var_core_value_sig7100) return;
    let var_core_value_sigA19A = this._drawingManagerService["getDrawingOrder"](var_core_value_sig1179.unitId, var_core_value_sig1179.subUnitId),
      var_core_value_sigD3F5 = var_core_value_sigA19A.indexOf(var_core_value_sig1179.drawingId),
      var_core_value_sig3082 = {
        ...var_core_value_sig7100,
        zIndex: var_core_value_sigD3F5 === -1 ? var_core_value_sigA19A.length - 1 : var_core_value_sigD3F5,
        clipBounds: var_core_value_sig7100.clipBounds,
        printable: true,
        rotateEnabled: false,
        transformerConfig: Re,
        url: var_core_value_sigEA92
      };
    var_core_value_sig1179.hidden && (var_core_value_sig3082.visible = false);
    let var_core_value_sigF5D1 = new Le(var_core_value_sig1AE5, var_core_value_sig3082);
    var_core_value_sigF5D1.setImageContentHidden(this._activeDomReadyDrawingKeys["has"](var_core_value_sig1AE5)), var_core_value_sig8FD9.addObject(var_core_value_sigF5D1, h.DRAWING_OBJECT_LAYER_INDEX), this._drawingManagerService["getDrawingEditable"]() && var_core_value_sig8FD9.attachTransformerTo(var_core_value_sigF5D1);
  }
  _removeRenderedCharts(var_core_value_sig8775) {
    var_core_value_sig8775.forEach(var_core_value_sigE627 => {
      this._activeDomReadyDrawingKeys["delete"]((0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sigE627));
      let var_core_value_sigEF3E = this._renderManagerService["getRenderUnitById"](var_core_value_sigE627.unitId),
        var_core_value_sig273D = var_core_value_sigEF3E == null ? undefined : var_core_value_sigEF3E.scene;
      if (!var_core_value_sig273D) return;
      let var_core_value_sig9A0D = var_core_value_sig273D.getObjectIncludeInGroup((0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sigE627));
      var_core_value_sig9A0D && var_core_value_sig273D.removeObject(var_core_value_sig9A0D);
    });
  }
  _syncRenderedChartVisibility(var_core_value_sig481B) {
    let var_core_value_sig13D7 = this._renderManagerService["getRenderUnitById"](var_core_value_sig481B.unitId),
      var_core_value_sig90C0 = var_core_value_sig13D7 == null ? undefined : var_core_value_sig13D7.scene;
    if (!var_core_value_sig90C0) return;
    let var_core_value_sigF1B2 = (0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sig481B),
      var_core_value_sigC2BB = var_core_value_sig90C0.getObjectIncludeInGroup(var_core_value_sigF1B2);
    if (!var_core_value_sigC2BB) return;
    let var_core_value_sigD9DB = this._drawingManagerService["getDrawingByParam"](var_core_value_sig481B);
    this._syncChartImageVisibility(var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigF1B2);
  }
  _syncChartImageVisibility(var_core_value_sigA363, var_core_value_sigFBA5, var_core_value_sigAC47) {
    var var_core_value_sigA06F, var_core_value_sig770E;
    let var_core_value_sig4654 = this._activeDomReadyDrawingKeys["has"](var_core_value_sigAC47);
    if (var_core_value_sigA363.setImageContentHidden) {
      var var_core_value_sigB26B, var_core_value_sig019B;
      var_core_value_sigA363.setImageContentHidden(var_core_value_sig4654), (var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.hidden) === true ? (var_core_value_sigB26B = var_core_value_sigA363.hide) == null || var_core_value_sigB26B.call(var_core_value_sigA363) : (var_core_value_sig019B = var_core_value_sigA363.show) == null || var_core_value_sig019B.call(var_core_value_sigA363);
      return;
    }
    (var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.hidden) === true ? (var_core_value_sigA06F = var_core_value_sigA363.hide) == null || var_core_value_sigA06F.call(var_core_value_sigA363) : (var_core_value_sig770E = var_core_value_sigA363.show) == null || var_core_value_sig770E.call(var_core_value_sigA363);
  }
  _getChartDrawing(var_core_value_sigC6BC) {
    let var_core_value_sig8EC2 = this._drawingManagerService["getDrawingByParam"](var_core_value_sigC6BC);
    return ze(var_core_value_sig8EC2) ? var_core_value_sig8EC2 : null;
  }
  _forEachChartDrawing(var_core_value_sigA8C3, var_core_value_sig5276) {
    let var_core_value_sig031B = this._drawingManagerService["getDrawingDataForUnit"](var_core_value_sigA8C3),
      var_core_value_sig9DC0 = var_core_value_sig031B == null ? undefined : var_core_value_sig031B[var_core_value_sigA8C3];
    var_core_value_sig9DC0 && var_core_value_sig9DC0.order["forEach"](var_core_value_sigA319 => {
      let var_core_value_sig2D58 = var_core_value_sig9DC0.data[var_core_value_sigA319];
      ze(var_core_value_sig2D58) && var_core_value_sig5276(var_core_value_sig2D58);
    });
  }
  _getDrawingRect(var_core_value_sig95F0) {
    var var_core_value_sig9CCB, var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977;
    let var_core_value_sig2949 = ((var_core_value_sig9CCB = var_core_value_sig95F0.transform) == null ? undefined : var_core_value_sig9CCB.width) ?? ((var_core_value_sigE718 = var_core_value_sig95F0.docTransform) == null || (var_core_value_sigE718 = var_core_value_sigE718.size) == null ? undefined : var_core_value_sigE718.width) ?? 0,
      var_core_value_sig308A = ((var_core_value_sigAEC8 = var_core_value_sig95F0.transform) == null ? undefined : var_core_value_sigAEC8.height) ?? ((var_core_value_sigB977 = var_core_value_sig95F0.docTransform) == null || (var_core_value_sigB977 = var_core_value_sigB977.size) == null ? undefined : var_core_value_sigB977.height) ?? 0;
    return var_core_value_sig2949 <= 0 || var_core_value_sig308A <= 0 ? null : {
      width: Math.max(1, Math.round(var_core_value_sig2949)),
      height: Math.max(1, Math.round(var_core_value_sig308A))
    };
  }
};
Y = S([x(0, m.IDrawingManagerService), x(1, h.IRenderManagerService), x(2, (0, e.Inject)(G))], Y);
function ze(var_core_value_sig0FCF) {
  let var_core_value_sigCF96 = var_core_value_sig0FCF;
  return (var_core_value_sigCF96 == null ? undefined : var_core_value_sigCF96.drawingType) === e.DrawingTypeEnum["DRAWING_CHART"] && typeof var_core_value_sigCF96.chartId == "string";
}
function Be(var_core_value_sigC4E9, var_core_value_sigF612, var_core_value_sigAA6C = 1, var_core_value_sig8BFA = 0) {
  let {
      top: var_core_value_sig236B,
      left: var_core_value_sig1951,
      bottom: var_core_value_sigFEA0,
      right: var_core_value_sig931A
    } = var_core_value_sigC4E9,
    var_core_value_sigEE7D = var_core_value_sig931A - var_core_value_sig1951,
    var_core_value_sig3585 = var_core_value_sigFEA0 - var_core_value_sig236B,
    {
      viewportScrollX: var_core_value_sig31A8,
      viewportScrollY: var_core_value_sigA4DA
    } = var_core_value_sigF612.getViewport(l.VIEWPORT_KEY["VIEW_MAIN"]),
    {
      scaleX: var_core_value_sig6FC0,
      scaleY: var_core_value_sig6217
    } = var_core_value_sigF612.getAncestorScale(),
    var_core_value_sigB805 = (var_core_value_sig1951 - var_core_value_sig31A8) * var_core_value_sig6FC0,
    var_core_value_sig4FAE = (var_core_value_sig236B - var_core_value_sigA4DA) * var_core_value_sig6217,
    var_core_value_sig1FCC = var_core_value_sigEE7D * var_core_value_sig6FC0,
    var_core_value_sigB7F9 = var_core_value_sig3585 * var_core_value_sig6217;
  return {
    startX: var_core_value_sigB805,
    startY: var_core_value_sig4FAE,
    endX: var_core_value_sigB805 + var_core_value_sig1FCC,
    endY: var_core_value_sig4FAE + var_core_value_sigB7F9,
    width: var_core_value_sig1FCC,
    height: var_core_value_sigB7F9,
    rotate: var_core_value_sig8BFA,
    absolute: {
      left: false,
      top: false
    },
    opacity: var_core_value_sigAA6C
  };
}
function Ve(var_core_value_sigB1A2, var_core_value_sig526D) {
  return var_core_value_sigB1A2.unitId === var_core_value_sig526D.unitId && (var_core_value_sigB1A2.subUnitId ?? var_core_value_sigB1A2.unitId) === (var_core_value_sig526D.subUnitId ?? var_core_value_sig526D.unitId) && var_core_value_sigB1A2.drawingId === var_core_value_sig526D.drawingId;
}
function X(var_core_value_sigBDB5, var_core_value_sig59CE = 0) {
  return var_core_value_sigBDB5.find(var_core_value_sig528D => typeof var_core_value_sig528D == "number" && Number.isFinite(var_core_value_sig528D)) ?? var_core_value_sig59CE;
}
function He(var_core_value_sig3AD7, var_core_value_sig04E4) {
  var var_core_value_sigD8F0, var_core_value_sig1475, var_core_value_sig08B7, var_core_value_sig2008, var_core_value_sig496B, var_core_value_sig7161, var_core_value_sig2AB8;
  let var_core_value_sig3FCF = var_core_value_sig04E4 == null || (var_core_value_sigD8F0 = var_core_value_sig04E4.getRealBound) == null ? undefined : var_core_value_sigD8F0.call(var_core_value_sig04E4),
    var_core_value_sig675A = X([var_core_value_sig3FCF == null ? undefined : var_core_value_sig3FCF.width, (var_core_value_sig1475 = var_core_value_sig3AD7.transform) == null ? undefined : var_core_value_sig1475.width, (var_core_value_sig08B7 = var_core_value_sig3AD7.docTransform) == null || (var_core_value_sig08B7 = var_core_value_sig08B7.size) == null ? undefined : var_core_value_sig08B7.width]),
    var_core_value_sig837F = X([var_core_value_sig3FCF == null ? undefined : var_core_value_sig3FCF.height, (var_core_value_sig2008 = var_core_value_sig3AD7.transform) == null ? undefined : var_core_value_sig2008.height, (var_core_value_sig496B = var_core_value_sig3AD7.docTransform) == null || (var_core_value_sig496B = var_core_value_sig496B.size) == null ? undefined : var_core_value_sig496B.height]),
    var_core_value_sig9D6E = X([var_core_value_sig3FCF == null ? undefined : var_core_value_sig3FCF.left, (var_core_value_sig7161 = var_core_value_sig3AD7.transform) == null ? undefined : var_core_value_sig7161.left]),
    var_core_value_sigB205 = X([var_core_value_sig3FCF == null ? undefined : var_core_value_sig3FCF.top, (var_core_value_sig2AB8 = var_core_value_sig3AD7.transform) == null ? undefined : var_core_value_sig2AB8.top]);
  return {
    left: var_core_value_sig9D6E,
    top: var_core_value_sigB205,
    right: var_core_value_sig9D6E + var_core_value_sig675A,
    bottom: var_core_value_sigB205 + var_core_value_sig837F
  };
}
function Ue(var_core_value_sigBF78, var_core_value_sig8AF3) {
  if (!var_core_value_sigBF78 || typeof var_core_value_sigBF78 != "object") return;
  let var_core_value_sigA0CC = var_core_value_sigBF78;
  if (typeof var_core_value_sigA0CC.subscribeEvent == "function") {
    let var_core_value_sigA309 = var_core_value_sigA0CC.subscribeEvent(var_core_value_sig8AF3);
    return (0, e.toDisposable)(() => {
      var var_core_value_sig223F;
      if (typeof var_core_value_sigA309.dispose == "function") {
        var_core_value_sigA309.dispose();
        return;
      }
      (var_core_value_sig223F = var_core_value_sigA309.unsubscribe) == null || var_core_value_sig223F.call(var_core_value_sigA309);
    });
  }
  let var_core_value_sigB3A1 = var_core_value_sigBF78;
  if (typeof var_core_value_sigB3A1.subscribe == "function") {
    let var_core_value_sig9E20 = var_core_value_sigB3A1.subscribe(var_core_value_sig8AF3);
    return (0, e.toDisposable)(() => {
      var var_core_value_sigD749;
      return (var_core_value_sigD749 = var_core_value_sig9E20.unsubscribe) == null ? undefined : var_core_value_sigD749.call(var_core_value_sig9E20);
    });
  }
}
let Z = class extends e.Disposable {
  constructor(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE, var_core_value_sigA676, var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sigCE10, var_core_value_sigA386) {
    super(), this._drawingManagerService = var_core_value_sig26BB, this._renderManagerService = var_core_value_sig19B4, this._canvasFloatDomService = var_core_value_sig218A, this._modelService = var_core_value_sig14CB, this._renderService = var_core_value_sigFDEE, this._snapshotRenderService = var_core_value_sigA676, this._commandService = var_core_value_sigC27E, this._univerInstanceService = var_core_value_sigA70D, this._localeService = var_core_value_sigCE10, this._staticRenderController = var_core_value_sigA386, N(this, "_activeLayer", null), N(this, "_layoutChanged$", new f["Subject"]()), N(this, "_visualLayoutChanged$", new f["Subject"]()), this._init();
  }
  mountChart(var_core_value_sigCD82) {
    let var_core_value_sig44DD = this._modelService["ensureChartModel"](var_core_value_sigCD82.unitId, var_core_value_sigCD82.chartId);
    if (!var_core_value_sig44DD) return (0, e.toDisposable)(() => {});
    let var_core_value_sig96FA = new P(var_core_value_sigCD82.chartId, var_core_value_sigCD82.root, (var_core_value_sigCFFA, var_core_value_sig58C1) => this._renderService["applyHostStyle"](var_core_value_sigCFFA, var_core_value_sig58C1), () => this._getActiveRenderRect(var_core_value_sigCD82), true, () => this._getActiveRenderScale(var_core_value_sigCD82)),
      var_core_value_sigAB68 = this._renderService["createChartInstance"](n.ChartRenderMode["Dom"]);
    var_core_value_sigAB68.bind(var_core_value_sig96FA);
    let var_core_value_sig040A = [var_core_value_sigAB68.on("click", var_core_value_sig5090 => {
        let var_core_value_sigC368 = (0, t.resolveChartElementSelection)(var_core_value_sig44DD.model, var_core_value_sig5090.hit);
        if (!var_core_value_sigC368) return;
        let var_core_value_sigAD56 = (0, t.resolveChartEditPanelRoute)(var_core_value_sigC368.target);
        var_core_value_sigAD56 && this._commandService["executeCommand"](_.id, {
          unitId: var_core_value_sigCD82.unitId,
          chartId: var_core_value_sigCD82.chartId,
          drawingId: var_core_value_sigCD82.drawingId,
          route: var_core_value_sigAD56
        });
      }), var_core_value_sigAB68.on("dblclick", () => {
        this._commandService["executeCommand"](_.id, {
          unitId: var_core_value_sigCD82.unitId,
          chartId: var_core_value_sigCD82.chartId,
          drawingId: var_core_value_sigCD82.drawingId
        });
      })],
      var_core_value_sig2AE0 = true;
    return var_core_value_sig040A.push(this._subscribeRender(var_core_value_sig44DD, var_core_value_sigAB68, var_core_value_sig96FA, var_core_value_sigCD82, () => var_core_value_sig2AE0)), (0, e.toDisposable)(() => {
      var_core_value_sig2AE0 = false, this._staticRenderController["setActiveDomReady"](this._getDrawingSearch(var_core_value_sigCD82), false), var_core_value_sig040A.forEach(var_core_value_sigF0F9 => var_core_value_sigF0F9.dispose()), var_core_value_sigAB68.dispose(), var_core_value_sig96FA.dispose();
    });
  }
  dispose() {
    this._deactivate(), this._layoutChanged$["complete"](), this._visualLayoutChanged$["complete"](), super.dispose();
  }
  _init() {
    this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_core_value_sigDB4A => {
      this._handleFocus(var_core_value_sigDB4A);
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_core_value_sig6418 => {
      let var_core_value_sig1896 = this._activeLayer;
      var_core_value_sig1896 && var_core_value_sig6418.some(var_core_value_sig1A0F => Ve(var_core_value_sig1A0F, var_core_value_sig1896)) && this._deactivate();
    })), this.disposeWithMe(this._drawingManagerService["refreshTransform$"].subscribe(var_core_value_sig0285 => {
      let var_core_value_sig777D = this._activeLayer;
      if (!var_core_value_sig777D) {
        this._retryActivateFocusedChart(var_core_value_sig0285);
        return;
      }
      let var_core_value_sig3F4C = var_core_value_sig0285.find(var_core_value_sigFBA4 => Ve(var_core_value_sigFBA4, var_core_value_sig777D));
      if (var_core_value_sig3F4C) {
        let var_core_value_sig4383 = this._drawingManagerService["getDrawingByParam"]({
          unitId: var_core_value_sig3F4C.unitId,
          subUnitId: var_core_value_sig3F4C.subUnitId,
          drawingId: var_core_value_sig3F4C.drawingId
        });
        this._isDocChartDrawing(var_core_value_sig4383) && this._updatePosition(var_core_value_sig4383);
      }
    })), this.disposeWithMe(this._univerInstanceService["getCurrentTypeOfUnit$"](e.UniverInstanceType["UNIVER_DOC"]).subscribe(var_core_value_sigD65A => {
      let var_core_value_sig5A13 = this._activeLayer;
      var_core_value_sig5A13 && (var_core_value_sigD65A == null ? undefined : var_core_value_sigD65A.getUnitId()) !== var_core_value_sig5A13.unitId && this._deactivate();
    }));
  }
  _subscribeRender(var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB43) {
    let var_core_value_sig4186 = () => {
        let {
          chartConfig: var_core_value_sigF593,
          chartStyle: var_core_value_sig3607
        } = this._renderService["createRenderInput"](var_core_value_sigC349);
        Promise.resolve(var_core_value_sig9D96.render({
          chartId: var_core_value_sigC349.chartId,
          config: var_core_value_sigF593,
          style: var_core_value_sig3607
        })).then(() => {
          var_core_value_sigEB43() && this._isActiveLayer(var_core_value_sig6FB2) && this._staticRenderController["setActiveDomReady"](this._getDrawingSearch(var_core_value_sig6FB2), true);
        }, () => {});
      },
      var_core_value_sigF963 = (0, f.combineLatest)([var_core_value_sigC349.model["config$"], var_core_value_sigC349.model["style$"], this._localeService["direction$"]]).pipe((0, f.filter)(([var_core_value_sigB512]) => var_core_value_sigB512 != null)).subscribe(var_core_value_sig4186),
      var_core_value_sigB608 = this._layoutChanged$["pipe"]((0, f.filter)(var_core_value_sigF2E6 => var_core_value_sigF2E6 === var_core_value_sig6FB2.drawingId)).subscribe(var_core_value_sig4186),
      var_core_value_sigF866 = this._visualLayoutChanged$["pipe"]((0, f.filter)(var_core_value_sig34C8 => var_core_value_sig34C8 === var_core_value_sig6FB2.drawingId)).subscribe(() => var_core_value_sig2776.syncLayout());
    return (0, e.toDisposable)(() => {
      var_core_value_sigF963.unsubscribe(), var_core_value_sigB608.unsubscribe(), var_core_value_sigF866.unsubscribe();
    });
  }
  _handleFocus(var_core_value_sig5EFB) {
    let var_core_value_sig3A85 = (var_core_value_sig5EFB ?? []).filter(var_core_value_sigB744 => this._isDocChartDrawing(var_core_value_sigB744));
    if (var_core_value_sig3A85.length !== 1) {
      this._deactivate();
      return;
    }
    this._activate(var_core_value_sig3A85[0]);
  }
  _activate(var_core_value_sig2682) {
    var var_core_value_sig4BB5, var_core_value_sig6709, var_core_value_sig52CA;
    let var_core_value_sigC030 = this._getPositionState(var_core_value_sig2682),
      var_core_value_sig88F6 = this._getRenderRect(var_core_value_sig2682),
      var_core_value_sig37DB = var_core_value_sig2682.subUnitId ?? var_core_value_sig2682.unitId;
    if (!var_core_value_sigC030 || !var_core_value_sig88F6) {
      this._deactivate();
      return;
    }
    if (((var_core_value_sig4BB5 = this._activeLayer) == null ? undefined : var_core_value_sig4BB5.unitId) === var_core_value_sig2682.unitId && this._activeLayer["subUnitId"] === var_core_value_sig37DB && this._activeLayer["drawingId"] === var_core_value_sig2682.drawingId && this._activeLayer["chartId"] === var_core_value_sig2682.chartId) {
      let var_core_value_sigEAE2 = this._activeLayer["scene"] !== var_core_value_sigC030.scene;
      this._activeLayer["scene"] = var_core_value_sigC030.scene, this._activeLayer["sceneRect"] = var_core_value_sigC030.sceneRect, this._activeLayer["angle"] = var_core_value_sigC030.angle, this._activeLayer["renderRect"] = var_core_value_sig88F6, this._activeLayer["position$"].next(var_core_value_sigC030.position), var_core_value_sigEAE2 && this._bindActiveLayerObservers(this._activeLayer);
      return;
    }
    this._deactivate();
    let var_core_value_sig5542 = new f["BehaviorSubject"](var_core_value_sigC030.position),
      var_core_value_sigE0A9 = this._renderManagerService["getRenderUnitById"](var_core_value_sig2682.unitId),
      var_core_value_sigA73E = var_core_value_sigE0A9 == null || (var_core_value_sig52CA = (var_core_value_sig6709 = var_core_value_sigE0A9.engine).getCanvasElement) == null ? undefined : var_core_value_sig52CA.call(var_core_value_sig6709);
    this._canvasFloatDomService["addFloatDom"]({
      id: var_core_value_sig2682.drawingId,
      componentKey: We,
      position$: var_core_value_sig5542,
      unitId: var_core_value_sig2682.unitId,
      contentBox: {
        wrapperInset: 0,
        contentInset: 0
      },
      props: {
        chartId: var_core_value_sig2682.chartId,
        subUnitId: var_core_value_sig37DB
      },
      onPointerDown: var_core_value_sigE68A => var_core_value_sigA73E == null ? undefined : var_core_value_sigA73E.dispatchEvent(new PointerEvent(var_core_value_sigE68A.type, var_core_value_sigE68A)),
      onPointerMove: var_core_value_sig3E68 => var_core_value_sigA73E == null ? undefined : var_core_value_sigA73E.dispatchEvent(new PointerEvent(var_core_value_sig3E68.type, var_core_value_sig3E68)),
      onPointerUp: var_core_value_sigF4C5 => var_core_value_sigA73E == null ? undefined : var_core_value_sigA73E.dispatchEvent(new PointerEvent(var_core_value_sigF4C5.type, var_core_value_sigF4C5)),
      onWheel: var_core_value_sig5410 => var_core_value_sigA73E == null ? undefined : var_core_value_sigA73E.dispatchEvent(new WheelEvent(var_core_value_sig5410.type, var_core_value_sig5410))
    }), this._modelService["setActiveChartById"](var_core_value_sig2682.unitId, var_core_value_sig2682.chartId);
    let var_core_value_sig7620 = {
      unitId: var_core_value_sig2682.unitId,
      subUnitId: var_core_value_sig37DB,
      drawingId: var_core_value_sig2682.drawingId,
      chartId: var_core_value_sig2682.chartId,
      scene: var_core_value_sigC030.scene,
      sceneRect: var_core_value_sigC030.sceneRect,
      angle: var_core_value_sigC030.angle,
      renderRect: var_core_value_sig88F6,
      position$: var_core_value_sig5542
    };
    this._activeLayer = var_core_value_sig7620, this._bindActiveLayerObservers(var_core_value_sig7620);
  }
  _deactivate() {
    var var_core_value_sigB9FC, var_core_value_sig5055;
    let var_core_value_sig3801 = this._activeLayer;
    var_core_value_sig3801 && (this._activeLayer = null, (var_core_value_sigB9FC = var_core_value_sig3801.positionObserver) == null || var_core_value_sigB9FC.dispose(), (var_core_value_sig5055 = var_core_value_sig3801.scaleObserver) == null || var_core_value_sig5055.dispose(), this._staticRenderController["setActiveDomReady"]({
      unitId: var_core_value_sig3801.unitId,
      subUnitId: var_core_value_sig3801.subUnitId,
      drawingId: var_core_value_sig3801.drawingId
    }, false), this._canvasFloatDomService["removeFloatDom"](var_core_value_sig3801.drawingId), this._modelService["setActiveChartRuntime"](null), this._snapshotRenderService["invalidateChart"](var_core_value_sig3801.unitId, var_core_value_sig3801.chartId), var_core_value_sig3801.position$["complete"]());
  }
  _refreshActivePosition(var_core_value_sig45F0, var_core_value_sigBC91, var_core_value_sigCB88) {
    let var_core_value_sig8D65 = this._activeLayer;
    (var_core_value_sig8D65 == null ? undefined : var_core_value_sig8D65.unitId) === var_core_value_sig45F0 && var_core_value_sig8D65.drawingId === var_core_value_sigBC91 && var_core_value_sig8D65.chartId === var_core_value_sigCB88 && var_core_value_sig8D65.position$["next"](Be(var_core_value_sig8D65.sceneRect, var_core_value_sig8D65.scene, 1, var_core_value_sig8D65.angle));
  }
  _refreshActiveLayout(var_core_value_sig8122) {
    let var_core_value_sigEDC6 = this._activeLayer;
    !var_core_value_sigEDC6 || var_core_value_sigEDC6.unitId !== var_core_value_sig8122 || (this._refreshActivePosition(var_core_value_sigEDC6.unitId, var_core_value_sigEDC6.drawingId, var_core_value_sigEDC6.chartId), this._visualLayoutChanged$["next"](var_core_value_sigEDC6.drawingId));
  }
  _bindActiveLayerObservers(var_core_value_sig611A) {
    var var_core_value_sig6BD9, var_core_value_sig7E56;
    (var_core_value_sig6BD9 = var_core_value_sig611A.positionObserver) == null || var_core_value_sig6BD9.dispose(), (var_core_value_sig7E56 = var_core_value_sig611A.scaleObserver) == null || var_core_value_sig7E56.dispose();
    let var_core_value_sig4161 = var_core_value_sig611A.scene["getViewport"](l.VIEWPORT_KEY["VIEW_MAIN"]);
    if (!var_core_value_sig4161) return;
    var_core_value_sig611A.positionObserver = Ue(var_core_value_sig4161.onScrollAfter$, () => {
      this._refreshActivePosition(var_core_value_sig611A.unitId, var_core_value_sig611A.drawingId, var_core_value_sig611A.chartId);
    });
    let var_core_value_sig7580 = var_core_value_sig611A.scene["onTransformChange$"].subscribeEvent(var_core_value_sig492F => {
      var_core_value_sig492F.type !== h.TRANSFORM_CHANGE_OBSERVABLE_TYPE["scale"] || var_core_value_sig492F.value["scaleX"] === var_core_value_sig492F.preValue["scaleX"] && var_core_value_sig492F.value["scaleY"] === var_core_value_sig492F.preValue["scaleY"] || this._refreshActiveLayout(var_core_value_sig611A.unitId);
    });
    var_core_value_sig611A.scaleObserver = (0, e.toDisposable)(() => var_core_value_sig7580.unsubscribe());
  }
  _updatePosition(var_core_value_sig1F18) {
    let var_core_value_sigD5A0 = this._getPositionState(var_core_value_sig1F18),
      var_core_value_sig81B2 = this._getRenderRect(var_core_value_sig1F18);
    if (var_core_value_sigD5A0 && var_core_value_sig81B2) {
      var var_core_value_sigA0A5;
      if (this._activeLayer) {
        let var_core_value_sig186C = this._activeLayer["scene"] !== var_core_value_sigD5A0.scene;
        this._activeLayer["scene"] = var_core_value_sigD5A0.scene, this._activeLayer["sceneRect"] = var_core_value_sigD5A0.sceneRect, this._activeLayer["angle"] = var_core_value_sigD5A0.angle, this._activeLayer["renderRect"] = var_core_value_sig81B2, var_core_value_sig186C && this._bindActiveLayerObservers(this._activeLayer);
      }
      (var_core_value_sigA0A5 = this._activeLayer) == null || var_core_value_sigA0A5.position$["next"](var_core_value_sigD5A0.position), this._layoutChanged$["next"](var_core_value_sig1F18.drawingId);
    }
  }
  _retryActivateFocusedChart(var_core_value_sig10AA) {
    let var_core_value_sigE6D0 = this._drawingManagerService["getFocusDrawings"]().filter(var_core_value_sig8EA0 => this._isDocChartDrawing(var_core_value_sig8EA0));
    var_core_value_sigE6D0.length === 1 && var_core_value_sig10AA.some(var_core_value_sigA6F6 => Ve(var_core_value_sigA6F6, var_core_value_sigE6D0[0])) && this._activate(var_core_value_sigE6D0[0]);
  }
  _getPositionState(var_core_value_sig8E91) {
    let var_core_value_sig00BE = var_core_value_sig8E91.transform;
    if (!var_core_value_sig00BE) return null;
    let var_core_value_sig7BB5 = this._renderManagerService["getRenderUnitById"](var_core_value_sig8E91.unitId);
    if (!(var_core_value_sig7BB5 != null && var_core_value_sig7BB5.scene) || !var_core_value_sig7BB5.scene["getViewport"](l.VIEWPORT_KEY["VIEW_MAIN"])) return null;
    let var_core_value_sig6AAD = (0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sig8E91),
      var_core_value_sig1157 = var_core_value_sig7BB5.scene["getObjectIncludeInGroup"](var_core_value_sig6AAD),
      var_core_value_sigA694 = He(var_core_value_sig8E91, var_core_value_sig1157),
      var_core_value_sig18E01 = var_core_value_sigA694.right - var_core_value_sigA694.left,
      var_core_value_sig0428 = var_core_value_sigA694.bottom - var_core_value_sigA694.top;
    if (var_core_value_sig18E01 <= 0 || var_core_value_sig0428 <= 0) return null;
    let var_core_value_sigBE07 = X([var_core_value_sig1157 == null ? undefined : var_core_value_sig1157.angle, var_core_value_sig00BE.angle]);
    return {
      scene: var_core_value_sig7BB5.scene,
      sceneRect: var_core_value_sigA694,
      angle: var_core_value_sigBE07,
      position: Be(var_core_value_sigA694, var_core_value_sig7BB5.scene, 1, var_core_value_sigBE07)
    };
  }
  _getRenderRect(var_core_value_sig555F) {
    var var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68, var_core_value_sig8DFE;
    let var_core_value_sig48EA = ((var_core_value_sig3D6F = var_core_value_sig555F.transform) == null ? undefined : var_core_value_sig3D6F.width) ?? ((var_core_value_sig336C = var_core_value_sig555F.docTransform) == null || (var_core_value_sig336C = var_core_value_sig336C.size) == null ? undefined : var_core_value_sig336C.width) ?? 0,
      var_core_value_sig5E16 = ((var_core_value_sig6E68 = var_core_value_sig555F.transform) == null ? undefined : var_core_value_sig6E68.height) ?? ((var_core_value_sig8DFE = var_core_value_sig555F.docTransform) == null || (var_core_value_sig8DFE = var_core_value_sig8DFE.size) == null ? undefined : var_core_value_sig8DFE.height) ?? 0;
    return var_core_value_sig48EA <= 0 || var_core_value_sig5E16 <= 0 ? null : {
      width: Math.max(1, Math.round(var_core_value_sig48EA)),
      height: Math.max(1, Math.round(var_core_value_sig5E16))
    };
  }
  _getActiveRenderRect(var_core_value_sig09F3) {
    let var_core_value_sig4592 = this._activeLayer;
    if ((var_core_value_sig4592 == null ? undefined : var_core_value_sig4592.unitId) === var_core_value_sig09F3.unitId && var_core_value_sig4592.subUnitId === (var_core_value_sig09F3.subUnitId ?? var_core_value_sig09F3.unitId) && var_core_value_sig4592.drawingId === var_core_value_sig09F3.drawingId && var_core_value_sig4592.chartId === var_core_value_sig09F3.chartId) return var_core_value_sig4592.renderRect;
    let var_core_value_sigC5C4 = this._drawingManagerService["getDrawingByParam"](this._getDrawingSearch(var_core_value_sig09F3));
    return this._isDocChartDrawing(var_core_value_sigC5C4) ? this._getRenderRect(var_core_value_sigC5C4) : null;
  }
  _getActiveRenderScale(var_core_value_sig1617) {
    let var_core_value_sig4169 = this._activeLayer;
    return var_core_value_sig4169 && this._isActiveLayer(var_core_value_sig1617) ? var_core_value_sig4169.scene["getAncestorScale"]() : null;
  }
  _getDrawingSearch(var_core_value_sig6D19) {
    return {
      unitId: var_core_value_sig6D19.unitId,
      subUnitId: var_core_value_sig6D19.subUnitId ?? var_core_value_sig6D19.unitId,
      drawingId: var_core_value_sig6D19.drawingId
    };
  }
  _isActiveLayer(var_core_value_sig279C) {
    let var_core_value_sigAC51 = this._activeLayer;
    return (var_core_value_sigAC51 == null ? undefined : var_core_value_sigAC51.unitId) === var_core_value_sig279C.unitId && var_core_value_sigAC51.subUnitId === (var_core_value_sig279C.subUnitId ?? var_core_value_sig279C.unitId) && var_core_value_sigAC51.drawingId === var_core_value_sig279C.drawingId && var_core_value_sigAC51.chartId === var_core_value_sig279C.chartId;
  }
  _isDocChartDrawing(var_core_value_sig8986) {
    let var_core_value_sigCAF7 = var_core_value_sig8986;
    return (var_core_value_sigCAF7 == null ? undefined : var_core_value_sigCAF7.drawingType) === e.DrawingTypeEnum["DRAWING_CHART"] && typeof var_core_value_sigCAF7.chartId == "string";
  }
};
Z = S([x(0, m.IDrawingManagerService), x(1, h.IRenderManagerService), x(2, (0, e.Inject)(i.CanvasFloatDomService)), x(3, (0, e.Inject)(s.DocChartModelService)), x(4, (0, e.Inject)(F)), x(5, (0, e.Inject)(G)), x(6, e.ICommandService), x(7, e.IUniverInstanceService), x(8, (0, e.Inject)(e.LocaleService)), x(9, (0, e.Inject)(Y))], Z);
const We = "docs-chart-ui.active-chart",
  Ge = var_core_value_sig1FB9 => {
    let {
        unitId: var_core_value_sig53A9,
        subUnitId: var_core_value_sigDACD,
        floatDomId: var_core_value_sig691E,
        chartId: var_core_value_sigD6D6,
        context: var_core_value_sig0347
      } = var_core_value_sig1FB9,
      var_core_value_sig52A3 = (0, i.useDependency)(Z);
    return (0, a.useEffect)(() => {
      let var_core_value_sigED1C = var_core_value_sig0347.root["current"];
      if (!var_core_value_sigED1C) return;
      let var_core_value_sig726E = var_core_value_sig52A3.mountChart({
        unitId: var_core_value_sig53A9,
        subUnitId: var_core_value_sigDACD,
        drawingId: var_core_value_sig691E,
        chartId: var_core_value_sigD6D6,
        root: var_core_value_sigED1C
      });
      return () => var_core_value_sig726E.dispose();
    }, [var_core_value_sig52A3, var_core_value_sigD6D6, var_core_value_sig0347.root, var_core_value_sig691E, var_core_value_sigDACD, var_core_value_sig53A9]), null;
  },
  Ke = () => null;
let qe = class extends e.Disposable {
  constructor(var_core_value_sig2CD3) {
    super(), this._componentManager = var_core_value_sig2CD3, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](be, Se)), this.disposeWithMe(this._componentManager["register"](v, b)), this.disposeWithMe(this._componentManager["register"](R, B)), this.disposeWithMe(this._componentManager["register"](e.DOC_DRAWING_PRINTING_COMPONENT_KEY, Ke)), this.disposeWithMe(this._componentManager["register"](We, Ge));
  }
};
qe = S([x(0, (0, e.Inject)(i.ComponentManager))], qe);
const Je = "min(1200px, calc(100vw - 32px))";
let Ye = class extends e.Disposable {
  constructor(var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sigC9F5, var_core_value_sig7EEA, var_core_value_sig59CE1, var_core_value_sig33C8, var_core_value_sig957F) {
    super(), this._dialogService = var_core_value_sig038E, this._localeService = var_core_value_sigAA1E, this._instanceService = var_core_value_sigC9F5, this._docSelectionManagerService = var_core_value_sig7EEA, this._docContentInsertService = var_core_value_sig59CE1, this._menuManagerService = var_core_value_sig33C8, this._commandService = var_core_value_sig957F, this._initMenus(), this._registerDialogOperations();
  }
  openInsertDialog(var_core_value_sig803B) {
    let var_core_value_sig5830 = null,
      var_core_value_sig4A7C = () => {
        var_core_value_sig5830 == null || var_core_value_sig5830.dispose(), var_core_value_sig5830 = null;
      };
    return var_core_value_sig5830 = this._dialogService["open"]({
      id: "doc-chart.dialog.insert",
      title: {
        title: this._localeService["t"]("docs-chart-ui.common.editChart")
      },
      width: Je,
      draggable: false,
      mask: true,
      maskClosable: false,
      children: {
        label: {
          name: be,
          props: {
            defaultChartType: (var_core_value_sig803B == null ? undefined : var_core_value_sig803B.defaultChartType) ?? (var_core_value_sig803B == null ? undefined : var_core_value_sig803B.value),
            defaultTableText: var_core_value_sig803B == null ? undefined : var_core_value_sig803B.defaultTableText,
            insertOptions: {
              insertRange: (var_core_value_sig803B == null ? undefined : var_core_value_sig803B.insertRange) ?? this._captureInsertRange()
            },
            onCancel: var_core_value_sig4A7C,
            onInserted: var_core_value_sig4A7C
          }
        }
      },
      onClose: var_core_value_sig4A7C
    }), true;
  }
  openEditorDialog(var_core_value_sigF975) {
    let var_core_value_sigCDAF = null,
      var_core_value_sigA298 = () => {
        var_core_value_sigCDAF == null || var_core_value_sigCDAF.dispose(), var_core_value_sigCDAF = null;
      };
    return var_core_value_sigCDAF = this._dialogService["open"]({
      id: z,
      title: {
        title: this._localeService["t"]("docs-chart-ui.common.editChart")
      },
      width: Je,
      draggable: false,
      mask: true,
      maskClosable: false,
      children: {
        label: {
          name: R,
          props: {
            ...var_core_value_sigF975,
            onClose: var_core_value_sigA298
          }
        }
      },
      onClose: var_core_value_sigA298
    }), true;
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](Pe);
  }
  _registerDialogOperations() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigCDDA => {
      if (var_core_value_sigCDDA.id === g.id) {
        this.openInsertDialog(var_core_value_sigCDDA.params);
        return;
      }
      if (var_core_value_sigCDDA.id === _.id) {
        let var_core_value_sigD955 = var_core_value_sigCDDA.params;
        var_core_value_sigD955 && this.openEditorDialog(var_core_value_sigD955);
      }
    }));
  }
  _captureInsertRange() {
    let var_core_value_sig0B40 = this._instanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sig0B40) return;
    let var_core_value_sig330B = var_core_value_sig0B40.getUnitId(),
      var_core_value_sig3625 = null;
    try {
      var_core_value_sig3625 = this._docContentInsertService["consumeInsertRange"](var_core_value_sig330B);
    } catch {
      var_core_value_sig3625 = null;
    }
    if (var_core_value_sig3625) {
      let var_core_value_sigE243 = {
        startOffset: var_core_value_sig3625.startOffset,
        endOffset: var_core_value_sig3625.endOffset,
        collapsed: var_core_value_sig3625.startOffset === var_core_value_sig3625.endOffset,
        segmentId: var_core_value_sig3625.segmentId ?? ""
      };
      return V(var_core_value_sig0B40, var_core_value_sigE243) ? var_core_value_sigE243 : undefined;
    }
    let var_core_value_sig0B4E = [...(this._docSelectionManagerService["getTextRanges"]() ?? [])];
    if (var_core_value_sig0B4E.length !== 1) return;
    let var_core_value_sig0E9F = this._docSelectionManagerService["getActiveTextRange"]() ?? var_core_value_sig0B4E[0];
    if (!var_core_value_sig0E9F || !var_core_value_sig0E9F.collapsed || var_core_value_sig0E9F.startOffset == null) return;
    let var_core_value_sigE5BA = {
      ...var_core_value_sig0E9F,
      segmentId: var_core_value_sig0E9F.segmentId ?? ""
    };
    return V(var_core_value_sig0B40, var_core_value_sigE5BA) ? var_core_value_sigE5BA : undefined;
  }
};
Ye = S([x(0, (0, e.Inject)(i.IDialogService)), x(1, (0, e.Inject)(e.LocaleService)), x(2, e.IUniverInstanceService), x(3, (0, e.Inject)(c.DocSelectionManagerService)), x(4, (0, e.Inject)(c.DocContentInsertService)), x(5, i.IMenuManagerService), x(6, e.ICommandService)], Ye);
let Xe = class extends e.Disposable {
  constructor(var_core_value_sig4A83, var_core_value_sig58AA) {
    super(), this._snapshotService = var_core_value_sig58AA, this.disposeWithMe(var_core_value_sig4A83.register(this));
  }
  supports(var_core_value_sig84C4) {
    return "unitId" in var_core_value_sig84C4 && "getDrawingId" in var_core_value_sig84C4;
  }
  exportImage(var_core_value_sigB6F7, var_core_value_sigB495) {
    if (!this.supports(var_core_value_sigB6F7)) return Promise.resolve(undefined);
    let var_core_value_sig70D0 = var_core_value_sigB6F7.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: var_core_value_sigB6F7.unitId,
      chartId: var_core_value_sigB6F7.getId(),
      width: Math.max(1, (var_core_value_sig70D0 == null ? undefined : var_core_value_sig70D0.width) ?? 1),
      height: Math.max(1, (var_core_value_sig70D0 == null ? undefined : var_core_value_sig70D0.height) ?? 1),
      format: var_core_value_sigB495 == null ? undefined : var_core_value_sigB495.format,
      mode: "export"
    });
  }
};
Xe = S([x(0, (0, e.Inject)(t.ChartImageExportService)), x(1, (0, e.Inject)(G))], Xe);
function Ze(var_core_value_sigAD91, var_core_value_sigF64E, var_core_value_sig9B3D) {
  let var_core_value_sigB217 = var_core_value_sig9B3D.docsTop ?? 0,
    var_core_value_sig1FE6 = var_core_value_sig9B3D.docsLeft ?? 0,
    var_core_value_sig2471 = var_core_value_sigB217;
  for (let var_core_value_sig2A8A of var_core_value_sigF64E) {
    let var_core_value_sig74A8 = var_core_value_sig2A8A.skeDrawings["get"](var_core_value_sigAD91.drawingId);
    if (var_core_value_sig74A8) return {
      left: var_core_value_sig1FE6 + var_core_value_sig2A8A.marginLeft + var_core_value_sig74A8.aLeft,
      top: var_core_value_sig2471 + var_core_value_sig2A8A.marginTop + var_core_value_sig74A8.aTop,
      width: var_core_value_sig74A8.width,
      height: var_core_value_sig74A8.height,
      angle: var_core_value_sig74A8.angle,
      flipX: var_core_value_sigAD91.docTransform["flipX"],
      flipY: var_core_value_sigAD91.docTransform["flipY"]
    };
    let var_core_value_sig21B2 = Number.isFinite(var_core_value_sig2A8A.pageHeight) ? var_core_value_sig2A8A.pageHeight : var_core_value_sig2A8A.height;
    var_core_value_sig2471 += Math.max(0, var_core_value_sig21B2) + var_core_value_sig9B3D.pageMarginTop;
  }
  return null;
}
let Q = class extends e.Disposable {
  constructor(var_core_value_sig3782, var_core_value_sigD22E, var_core_value_sig3455, var_core_value_sig5CEF) {
    super(), this._drawingManagerService = var_core_value_sig3782, this._renderManagerService = var_core_value_sigD22E, this._snapshotRenderService = var_core_value_sig3455, this._docPrintInterceptorService = var_core_value_sig5CEF, N(this, "_preparedCharts", new Map());
    let var_core_value_sig43D5 = this._docPrintInterceptorService["registerPrintPreparation"];
    var_core_value_sig43D5 && this.disposeWithMe(var_core_value_sig43D5.call(this._docPrintInterceptorService, var_core_value_sigDE08 => this.prepare(var_core_value_sigDE08))), this._initPrinting();
  }
  async prepare(var_core_value_sig1395) {
    let var_core_value_sig9FA0 = this._getChartDrawings(var_core_value_sig1395.unitId),
      var_core_value_sig055E = new Map();
    this._preparedCharts["set"](var_core_value_sig1395.unitId, var_core_value_sig055E), await Promise.allSettled(var_core_value_sig9FA0.map(async var_core_value_sigACCB => {
      let var_core_value_sig7F33 = Qe(var_core_value_sigACCB);
      if (!var_core_value_sig7F33) return;
      let var_core_value_sig0C53 = {
          unitId: var_core_value_sig1395.unitId,
          chartId: var_core_value_sigACCB.chartId,
          width: var_core_value_sig7F33.width,
          height: var_core_value_sig7F33.height,
          dpr: var_core_value_sig1395.dpr,
          mode: "print"
        },
        var_core_value_sigEA04 = {
          ...var_core_value_sig0C53,
          dpr: n.DEFAULT_CHART_DEVICE_PIXEL_RATIO,
          mode: "main"
        },
        var_core_value_sig7A62 = this._snapshotRenderService["getSnapshot"](var_core_value_sigEA04),
        var_core_value_sig8109 = (var_core_value_sig7A62 == null ? undefined : var_core_value_sig7A62.status) === "ready" ? this._getRenderedChartImage(var_core_value_sigACCB) : null;
      if (var_core_value_sig8109) {
        var_core_value_sig055E.set(var_core_value_sigACCB.drawingId, {
          image: var_core_value_sig8109
        });
        return;
      }
      let var_core_value_sig7565 = (var_core_value_sig7A62 == null ? undefined : var_core_value_sig7A62.status) === "ready" ? var_core_value_sig7A62.dataUrl : await this._snapshotRenderService["exportImage"]((var_core_value_sig7A62 == null ? undefined : var_core_value_sig7A62.status) === "pending" ? var_core_value_sigEA04 : var_core_value_sig0C53);
      var_core_value_sig7565 && var_core_value_sig055E.set(var_core_value_sigACCB.drawingId, {
        image: await $e(var_core_value_sig7565)
      });
    }));
  }
  _initPrinting() {
    this.disposeWithMe(this._docPrintInterceptorService["interceptor"].intercept(this._docPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_COMPONENT_COLLECT, {
      handler: (var_core_value_sigD4FB, {
        unitId: var_core_value_sig3E71,
        scene: var_core_value_sig01B3,
        skeleton: var_core_value_sig7442,
        documents: var_core_value_sigDF87
      }, var_core_value_sig9EE0) => {
        var var_core_value_sigF0511, var_core_value_sig0B45;
        let var_core_value_sig36F8 = var_core_value_sig9EE0(var_core_value_sigD4FB),
          var_core_value_sig03E1 = this._preparedCharts["get"](var_core_value_sig3E71),
          var_core_value_sigBB57 = ((var_core_value_sigF0511 = var_core_value_sig7442.getSkeletonData()) == null ? undefined : var_core_value_sigF0511.pages) ?? [];
        if (!(var_core_value_sig03E1 != null && var_core_value_sig03E1.size) || !var_core_value_sigBB57.length) return var_core_value_sig36F8;
        let var_core_value_sig7C4A = (var_core_value_sig0B45 = this._drawingManagerService["getDrawingDataForUnit"](var_core_value_sig3E71)) == null ? undefined : var_core_value_sig0B45[var_core_value_sig3E71];
        return var_core_value_sig7C4A == null || var_core_value_sig7C4A.order["forEach"]((var_core_value_sig48BD, var_core_value_sig429F) => {
          let var_core_value_sigF62A = var_core_value_sig7C4A.data[var_core_value_sig48BD],
            var_core_value_sig8178 = var_core_value_sig03E1.get(var_core_value_sig48BD);
          if (!var_core_value_sig8178 || var_core_value_sigF62A.hidden || var_core_value_sigF62A.drawingType !== e.DrawingTypeEnum["DRAWING_CHART"]) return;
          let var_core_value_sigE9ED = {
            ...(Ze(var_core_value_sigF62A, var_core_value_sigBB57, var_core_value_sigDF87.getOffsetConfig()) ?? (0, c.docDrawingPositionToTransform)(var_core_value_sigF62A.docTransform)),
            image: var_core_value_sig8178.image,
            printable: true,
            forceRender: true,
            zIndex: var_core_value_sig429F
          };
          var_core_value_sig01B3.addObject(new h.Image((0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sigF62A), var_core_value_sigE9ED), h.DRAWING_OBJECT_LAYER_INDEX);
        }), var_core_value_sig36F8;
      }
    }));
  }
  _getChartDrawings(var_core_value_sig7C77) {
    var var_core_value_sig9578;
    let var_core_value_sigA2D3 = (var_core_value_sig9578 = this._drawingManagerService["getDrawingDataForUnit"](var_core_value_sig7C77)) == null ? undefined : var_core_value_sig9578[var_core_value_sig7C77];
    return (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.order["map"](var_core_value_sigE799 => var_core_value_sigA2D3.data[var_core_value_sigE799]).filter(var_core_value_sigB601 => var_core_value_sigB601.drawingType === e.DrawingTypeEnum["DRAWING_CHART"] && !var_core_value_sigB601.hidden && !!var_core_value_sigB601.chartId)) ?? [];
  }
  _getRenderedChartImage(var_core_value_sigC218) {
    var var_core_value_sigADEC, var_core_value_sig3D8E;
    let var_core_value_sig37E5 = (var_core_value_sigADEC = this._renderManagerService["getRenderUnitById"](var_core_value_sigC218.unitId)) == null ? undefined : var_core_value_sigADEC.scene,
      var_core_value_sigF079 = var_core_value_sig37E5 == null ? undefined : var_core_value_sig37E5.getObjectIncludeInGroup((0, m.getDrawingShapeKeyByDrawingSearch)(var_core_value_sigC218)),
      var_core_value_sigFCA0 = var_core_value_sigF079 == null || (var_core_value_sig3D8E = var_core_value_sigF079.getNative) == null ? undefined : var_core_value_sig3D8E.call(var_core_value_sigF079);
    return var_core_value_sigFCA0 != null && var_core_value_sigFCA0.complete && var_core_value_sigFCA0.naturalWidth > 0 ? var_core_value_sigFCA0 : null;
  }
};
Q = S([x(0, m.IDrawingManagerService), x(1, h.IRenderManagerService), x(2, (0, e.Inject)(G)), x(3, (0, e.Inject)(l.DocPrintInterceptorService))], Q);
function Qe(var_core_value_sigD1FC) {
  var var_core_value_sigE2F9, var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3;
  let var_core_value_sigE120 = ((var_core_value_sigE2F9 = var_core_value_sigD1FC.transform) == null ? undefined : var_core_value_sigE2F9.width) ?? ((var_core_value_sigD689 = var_core_value_sigD1FC.docTransform) == null || (var_core_value_sigD689 = var_core_value_sigD689.size) == null ? undefined : var_core_value_sigD689.width) ?? 0,
    var_core_value_sigD6E7 = ((var_core_value_sig7AE3 = var_core_value_sigD1FC.transform) == null ? undefined : var_core_value_sig7AE3.height) ?? ((var_core_value_sig1EB3 = var_core_value_sigD1FC.docTransform) == null || (var_core_value_sig1EB3 = var_core_value_sig1EB3.size) == null ? undefined : var_core_value_sig1EB3.height) ?? 0;
  return var_core_value_sigE120 > 0 && var_core_value_sigD6E7 > 0 ? {
    width: Math.max(1, Math.round(var_core_value_sigE120)),
    height: Math.max(1, Math.round(var_core_value_sigD6E7))
  } : null;
}
function $e(var_core_value_sig3669) {
  return new Promise((var_core_value_sigC84D, var_core_value_sigF2BC) => {
    let var_core_value_sigD37B = new globalThis.Image(),
      var_core_value_sigFA28 = globalThis.setTimeout(() => var_core_value_sigF2BC(Error("Timed out loading document chart print image.")), 10000),
      var_core_value_sig93BE = var_core_value_sig8B71 => {
        globalThis.clearTimeout(var_core_value_sigFA28), var_core_value_sigD37B.onload = null, var_core_value_sigD37B.onerror = null, var_core_value_sig8B71();
      };
    var_core_value_sigD37B.onload = () => var_core_value_sig93BE(() => var_core_value_sigC84D(var_core_value_sigD37B)), var_core_value_sigD37B.onerror = () => var_core_value_sig93BE(() => var_core_value_sigF2BC(Error("Failed to load document chart print image."))), var_core_value_sigD37B.src = var_core_value_sig3669, var_core_value_sigD37B.complete && var_core_value_sigD37B.naturalWidth > 0 && var_core_value_sig93BE(() => var_core_value_sigC84D(var_core_value_sigD37B));
  });
}
let $ = class extends e.Plugin {
  constructor(var_core_value_sigABEC = we, var_core_value_sig2712, var_core_value_sig0B9E, var_core_value_sigC545) {
    super(), this._config = var_core_value_sigABEC, this._injector = var_core_value_sig2712, this._configService = var_core_value_sig0B9E, this._commandService = var_core_value_sigC545;
    let {
      ...var_core_value_sig12A7
    } = (0, e.merge)({}, we, this._config);
    this._configService["setConfig"](Ce, var_core_value_sig12A7), this._initCommands();
  }
  onStarting() {
    let var_core_value_sig6F4E = this._injector;
    [[qe], [H], [C], [w, {
      useClass: T
    }], [Z], [Q], [F], [G], [Xe], [K], [Y], [U], [W], [Ye]].forEach(var_core_value_sigAEFB => var_core_value_sig6F4E.add(var_core_value_sigAEFB)), (0, e.touchDependencies)(var_core_value_sig6F4E, [[H], [C], [w], [Z], [Q], [F], [G], [Xe], [U], [W]]), this._injector["get"](qe);
  }
  onReady() {
    this._injector["get"](K), this._injector["get"](Y), this._injector["get"](U), this._injector["get"](W), this._injector["get"](Ye);
  }
  _initCommands() {
    [g, _].forEach(var_core_value_sig826B => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig826B));
    });
  }
};
N($, "type", e.UniverInstanceType["UNIVER_DOC"]), N($, "pluginName", "UniverDocsChartUIPlugin"), N($, "packageName", Fe), N($, "version", Ie), $ = S([(0, e.DependentOn)(p.UniverLicensePlugin, c.UniverDocsPlugin, m.UniverDrawingPlugin, h.UniverRenderEnginePlugin, u.UniverDocsDrawingPlugin, l.UniverDocsUIPlugin, t.UniverChartUIPlugin, s.UniverDocsChartPlugin, d.UniverDocsDrawingUIPlugin), x(1, (0, e.Inject)(e.Injector)), x(2, e.IConfigService), x(3, e.ICommandService)], $), exports.DOCS_CHART_UI_PLUGIN_CONFIG_KEY = Ce, exports.DOC_ACTIVE_CHART_COMPONENT = We, exports.DOC_CHART_CLIPBOARD_RESOURCE_KEY = Te, exports.DOC_CHART_DATA_EDITOR_COMPONENT = v, exports.DOC_CHART_DATA_EDITOR_DIALOG_ID = "doc-chart.dialog.data-editor", exports.DOC_CHART_EDITOR_DIALOG_COMPONENT = R, exports.DOC_CHART_EDITOR_DIALOG_ID = z, exports.DOC_CHART_INSERT_BELOW_MENU_ID = ke, exports.DOC_CHART_INSERT_MENU_ID = q, exports.DOC_CHART_INSERT_PANEL_COMPONENT = be, exports.DocActiveChart = Ge, Object.defineProperty(exports, "DocChartActiveRenderService", {
  enumerable: true,
  get: function () {
    return Z;
  }
}), Object.defineProperty(exports, "DocChartClipboardController", {
  enumerable: true,
  get: function () {
    return U;
  }
}), Object.defineProperty(exports, "DocChartDataEditService", {
  enumerable: true,
  get: function () {
    return C;
  }
}), exports.DocChartDataEditor = b, exports.DocChartDataEditorSubmitMode = y, Object.defineProperty(exports, "DocChartDrawingEditController", {
  enumerable: true,
  get: function () {
    return W;
  }
}), exports.DocChartEditPanel = ne, exports.DocChartEditorDialog = B, exports.DocChartInsertBelowMenuItemFactory = Ne, exports.DocChartInsertMenuItemFactory = J, exports.DocChartInsertPanel = Se, exports.DocChartInsertRibbonMenuItemFactory = Me, Object.defineProperty(exports, "DocChartInsertService", {
  enumerable: true,
  get: function () {
    return H;
  }
}), Object.defineProperty(exports, "DocChartPrintService", {
  enumerable: true,
  get: function () {
    return Q;
  }
}), Object.defineProperty(exports, "DocChartRenderService", {
  enumerable: true,
  get: function () {
    return F;
  }
}), Object.defineProperty(exports, "DocChartSnapshotRefreshController", {
  enumerable: true,
  get: function () {
    return K;
  }
}), Object.defineProperty(exports, "DocChartSnapshotRenderService", {
  enumerable: true,
  get: function () {
    return G;
  }
}), Object.defineProperty(exports, "DocChartUIService", {
  enumerable: true,
  get: function () {
    return T;
  }
}), exports.DocDomChartHost = P, exports.DocPrintChart = Ke, exports.DocsChartUIMenuSchema = Pe, exports.IDocChartSnapshotRendererService = De, exports.IDocChartUIService = w, exports.OpenDocChartEditorDialogOperation = _, exports.OpenDocChartInsertDialogOperation = g, Object.defineProperty(exports, "UniverDocsChartUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.defaultPluginConfig = we, exports.getDocChartInsertDisabledObservable = Ae;
