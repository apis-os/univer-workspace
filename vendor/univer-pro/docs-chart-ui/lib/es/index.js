import {
  CommandType as _0x20f01b,
  DOC_DRAWING_PRINTING_COMPONENT_KEY as _0x56f0ca,
  DataStreamTreeTokenType as _0x211bf6,
  DependentOn as _0x41f0eb,
  Disposable as _0x4d5f24,
  DrawingTypeEnum as _0x378d12,
  ICommandService as _0x1382c0,
  IConfigService as _0x56abb5,
  IUniverInstanceService as _0x14b502,
  Inject as _0x59e556,
  Injector as _0x450648,
  LocaleService as _0x31aad9,
  Optional as _0x7651d1,
  Plugin as _0xdf35aa,
  Tools as _0x50b036,
  UniverInstanceType as _0x53698d,
  createIdentifier as _0x1a2c54,
  generateRandomId as _0x235645,
  merge as _0x3a54c8,
  toDisposable as _0x5abd00,
  touchDependencies as _0x438528,
} from "@univerjs/core";
import {
  CHART_TYPE_CATALOG as _0x250a50,
  ChartAxisBoundsFields as _0xaf148,
  ChartAxisFormatTextField as _0x456646,
  ChartAxisLabelStyleFields as _0x1e550e,
  ChartAxisLabelVisibilityField as _0x40d89a,
  ChartAxisLineVisibilityField as _0x371ef9,
  ChartAxisReverseField as _0xe72622,
  ChartAxisTickVisibilityField as _0x4f62b4,
  ChartAxisTitleFields as _0x560957,
  ChartCommonDataMappingSection as _0x2fcb26,
  ChartEditBlockTitle as _0x5808b9,
  ChartEditPanel as _0xfd667a,
  ChartEditPanelSection as _0x14f67c,
  ChartEditPanelTab as _0x4499d6,
  ChartEditPanelTabs as _0x158ec7,
  ChartEditorCapability as _0x4a5960,
  ChartEditorProvider as _0x528bde,
  ChartFunnelStyleSection as _0x2bfd29,
  ChartGradientFillField as _0x1a4ab3,
  ChartGridlineVisibilityField as _0x3a2fde,
  ChartGridlineWidthField as _0x37d43e,
  ChartHeatmapStyleSection as _0x1f211c,
  ChartHostAdapter as _0xec290b,
  ChartImageExportService as _0x33ec5f,
  ChartIndicatorLineColorField as _0xad7293,
  ChartIndicatorLineTypeField as _0xf673aa,
  ChartInlineTableEditor as _0x183a29,
  ChartLegendFontSizeField as _0x4cf02d,
  ChartLegendPositionField as _0x7cbc44,
  ChartLegendRoot as _0x1d93bb,
  ChartLegendSelectModeField as _0xf752ce,
  ChartLegendWrapField as _0x2f26ff,
  ChartLineAndAreaSection as _0x111b96,
  ChartMainTitleFields as _0xa7d996,
  ChartNumberFormatTextField as _0x39fe00,
  ChartParetoSeriesSection as _0x461dbd,
  ChartPieStyleSection as _0x296ee3,
  ChartRadarStyleSection as _0x2d396a,
  ChartReferencedDataSourceEditor as _0xf5c8be,
  ChartRelationStyleSection as _0x4ec9af,
  ChartSectionAccordion as _0x5c359b,
  ChartSectionAccordionContent as _0x2d84ba,
  ChartSectionAccordionItem as _0x76179e,
  ChartSectionAccordionTrigger as _0x123d96,
  ChartSeriesBorderFields as _0x5b579d,
  ChartSeriesFillFields as _0x3fa0c9,
  ChartSeriesLabelFontSizeField as _0x1cdd06,
  ChartSeriesLabelPositionField as _0x132c1d,
  ChartSeriesLabelVisibilityField as _0x1acd95,
  ChartSeriesPointFields as _0x47b3b9,
  ChartSeriesRoot as _0x1c4c89,
  ChartSnapshotQueue as _0x58faaa,
  ChartStackField as _0x32a3c0,
  ChartStyleSection as _0x11969f,
  ChartSubtitleFields as _0x31bcc8,
  ChartThemeField as _0x4b84d5,
  ChartTitleFontSizeFields as _0x10d981,
  ChartTypeField as _0x45a69a,
  ChartTypeSpecificDataSection as _0x2b1b69,
  ChartTypeSpecificSetupSection as _0x1f323f,
  ChartTypeSpecificStyleSection as _0x97c152,
  ChartUIService as _0x44eb1d,
  ChartViewStateRegistry as _0x29d923,
  ChartWaterfallSetupFields as _0x4fdeaa,
  ChartWaterfallStyleSection as _0x552a19,
  ChartWordCloudRepeatField as _0x46e6d6,
  ChartWordCloudRoot as _0x537d49,
  ChartWordCloudShapeField as _0x45c4e0,
  DEFAULT_CHART_AXIS_VALUES as _0x3f1c65,
  DEFAULT_CHART_FUNNEL_VALUES as _0x35b1ec,
  DEFAULT_CHART_HEATMAP_VALUES as _0x238938,
  DEFAULT_CHART_INDICATOR_LINE_VALUES as _0x571bd8,
  DEFAULT_CHART_LEGEND_VALUES as _0x19532a,
  DEFAULT_CHART_LINE_AND_AREA_VALUES as _0x40c135,
  DEFAULT_CHART_PARETO_VALUES as _0x302f04,
  DEFAULT_CHART_PIE_VALUES as _0x111127,
  DEFAULT_CHART_RADAR_VALUES as _0x383946,
  DEFAULT_CHART_RELATION_VALUES as _0x53e34f,
  DEFAULT_CHART_SERIES_VALUES as _0x33c078,
  DEFAULT_CHART_STYLE_VALUES as _0x29a863,
  DEFAULT_CHART_TITLE_VALUES as _0x4a8804,
  DEFAULT_CHART_WATERFALL_SETUP_VALUES as _0x1b2ed6,
  DEFAULT_CHART_WATERFALL_STYLE_VALUES as _0x1ab92e,
  DEFAULT_CHART_WORD_CLOUD_VALUES as _0x202eb1,
  InlineChartCreationIssueCode as _0x2ef0db,
  UniverChartUIPlugin as _0x866c98,
  buildChartTypeSelectOptions as _0x2a3208,
  chartTypeSupportsCapability as _0x39f466,
  chartTypeSupportsLineAndAreaStyle as _0x177111,
  compactInlineTableValues as _0x5e4b26,
  createChartInlineStarterData as _0x1e89a4,
  getChartInlineTableMinColumns as _0x48dc00,
  resolveChartEditPanelRoute as _0x49cdfc,
  resolveChartElementSelection as _0x1789ca,
  resolveChartTypeFieldValue as _0xb39713,
  tryBuildInlineChartCreationPlan as _0xeb2ff6,
  tryPrepareInlineChartData as _0x376c5a,
  useChartEditorChartType as _0x631465,
  useChartEditorHasRightAxis as _0x39d107,
} from "@univerjs-pro/chart-ui";
import {
  CHART_RESOURCE_VERSION as _0xa8459c,
  ChartDataSourceRuntimeStatus as _0x600d07,
  ChartImageExportFormat as _0x1278db,
  ChartRenderMode as _0x405a90,
  ChartResourceRepository as _0x3c1b80,
  ChartThemeService as _0x138b73,
  ChartTypeBits as _0x5584cb,
  DEFAULT_CHART_DEVICE_PIXEL_RATIO as _0x5d0dd1,
  DataUrlImageChartHost as _0x16381e,
  IChartRenderModelManagerService as _0x103c76,
  buildChartDataSetFromValues as _0xcc9b2a,
  chartBitsUtils as _0x6f4356,
  createChartRuntime as _0x4d2f9a,
  getChartHostFrameContentRect as _0xf441fe,
  isInlineChartDataSource as _0x281ac9,
  isReferencedChartDataSource as _0xa45b78,
  parseInlineChartTable as _0x149b54,
  resolveChartRuntimeStyle as _0x4d5a75,
  resolveDefaultChartHostFrameStyle as _0x41610d,
  shouldComposeChartHostFrame as _0x1ff3e5,
} from "@univerjs-pro/engine-chart";
import { Button as _0x43492a, Select as _0x2ca5cc } from "@univerjs/design";
import {
  CanvasFloatDomService as _0x5e0398,
  ComponentManager as _0x46ff66,
  ContextMenuGroup as _0x2e4e77,
  ContextMenuPosition as _0x4698f0,
  IDialogService as _0x3735ea,
  IMenuManagerService as _0x1ea9d5,
  MenuItemType as _0x511f53,
  RibbonInsertGroup as _0x24b51d,
  getMenuHiddenObservable as _0x63cccb,
  useDependency as _0x100c8b,
  useObservable as _0x28156b,
} from "@univerjs/ui";
import {
  useEffect as _0x380c89,
  useMemo as _0x1df613,
  useRef as _0x5c2504,
  useState as _0x5a497e,
} from "react";
import { jsx as _0x5943db, jsxs as _0x4b76ad } from "react/jsx-runtime";
import {
  ChangeDocChartDataSourceCommand as _0x89a640,
  DocChartModelService as _0x991352,
  DocumentChartConfigAdapter as _0x408e04,
  InsertDocChartCommand as _0x43d0a3,
  RemoveDocChartDataSourceMutation as _0x209ef3,
  RemoveDocChartSnapshotMutation as _0x238fb1,
  SetDocChartDataSourceMutation as _0x30d8e2,
  SetDocChartSnapshotMutation as _0x33853d,
  UniverDocsChartPlugin as _0x2dd3e6,
  UpdateDocChartConfigCommand as _0x1945d6,
} from "@univerjs-pro/docs-chart";
import {
  DocContentInsertService as _0x276717,
  DocSelectionManagerService as _0x9a95a1,
  UniverDocsPlugin as _0x19f343,
  docDrawingPositionToTransform as _0x33eec0,
} from "@univerjs/docs";
import {
  BreakLineCommand as _0x498668,
  DOC_CONTENT_INSERT_MENU_ID as _0x267cdf,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x37cb90,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x4cf753,
  DocPrintInterceptorService as _0x34ae77,
  EMPTY_PARAGRAPH_MENU_ID as _0x3a7e39,
  IDocClipboardPasteAdapterService as _0x2450ec,
  IDocClipboardService as _0x53c661,
  INSERT_BELLOW_MENU_ID as _0x103531,
  UniverDocsUIPlugin as _0x597a38,
  VIEWPORT_KEY as _0x4e3636,
  disableMenuWhenHeaderFooterEditing as _0xdb6fc5,
} from "@univerjs/docs-ui";
import {
  IDocDrawingAdapterService as _0x3d2ddc,
  RemoveDocDrawingCommand as _0x1bd10e,
  UniverDocsDrawingPlugin as _0x57f771,
} from "@univerjs/docs-drawing";
import {
  DocDrawingFloatingToolbarAdapterService as _0x2b88ad,
  UniverDocsDrawingUIPlugin as _0x59c8dc,
} from "@univerjs/docs-drawing-ui";
import {
  BehaviorSubject as _0x417de5,
  Observable as _0x16386f,
  Subject as _0x3c500e,
  auditTime as _0x434d05,
  combineLatest as _0x4aab1a,
  filter as _0xc4e194,
  map as _0x3f2b7a,
  skip as _0x56cc66,
} from "rxjs";
import { UniverLicensePlugin as _0xe96f0d } from "@univerjs-pro/license";
import {
  IDrawingManagerService as _0x13d7e0,
  UniverDrawingPlugin as _0xd9ced4,
  getDrawingShapeKeyByDrawingSearch as _0x495acf,
} from "@univerjs/drawing";
import {
  DEFAULT_TRANSFORMER_CONFIG as _0x4d8a5a,
  DRAWING_OBJECT_LAYER_INDEX as _0x268be4,
  IRenderManagerService as _0x9f8fc5,
  Image as _0x508873,
  TRANSFORM_CHANGE_OBSERVABLE_TYPE as _0x2db94e,
  UniverRenderEnginePlugin as _0x44f4d2,
} from "@univerjs/engine-render";
const L = {
    id: "doc.operation.open-doc-chart-insert-dialog",
    type: _0x20f01b.OPERATION,
    handler() {
      return true;
    },
  },
  R = {
    id: "doc.operation.open-doc-chart-editor-dialog",
    type: _0x20f01b.OPERATION,
    handler() {
      return true;
    },
  },
  ur = "doc-chart.data-editor",
  dr = "doc-chart.dialog.data-editor";
let fr = (function (_0x2a7ec2) {
  return (
    (_0x2a7ec2.SHARED = "shared"),
    (_0x2a7ec2.DUPLICATE = "duplicate"),
    _0x2a7ec2
  );
})({});
function pr(_0x549887) {
  let _0x23f0ec = _0x100c8b(_0x31aad9),
    {
      values: _0x18c719,
      onCancel: _0x5bc807,
      onChange: _0x5648b4,
      onSubmit: _0x50dace,
    } = _0x549887,
    [_0x314cce, _0x71e250] = _0x5a497e(() =>
      _0xa45b78(_0x549887.dataSource) ? "referenced" : "inline",
    ),
    [_0x5ac64f, _0xadc9e] = _0x5a497e(null),
    [_0x246f1a, _0x1a39bc] = _0x5a497e(() =>
      _0x18c719.map((_0x449056) => [..._0x449056]),
    ),
    [_0x19bded, _0x56cd52] = _0x5a497e(null),
    _0x5b843c = (_0xa528a0) => {
      (_0x1a39bc(_0xa528a0), _0x5648b4 == null || _0x5648b4(_0xa528a0));
    },
    _0x317cf5 = (_0x216b42) => {
      let _0x1c4ee7 = _0x5e4b26(_0x246f1a);
      if (_0x1c4ee7.length === 0) {
        _0x56cd52(_0x23f0ec.t("docs-chart-ui.common.tableDataEmpty"));
        return;
      }
      (_0x56cd52(null), _0x50dace(_0x1c4ee7, _0x216b42));
    };
  return _0x4b76ad("div", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4",
    children: [
      _0x5943db("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
        children: _0x5943db(_0xf5c8be, {
          mode: _0x314cce,
          initialSource: _0xa45b78(_0x549887.dataSource)
            ? _0x549887.dataSource["source"]
            : undefined,
          inlineContent: _0x5943db(_0x183a29, {
            values: _0x246f1a,
            parsePastedText: _0x149b54,
            onChange: _0x5b843c,
          }),
          onModeChange: (_0x44ee61) => {
            (_0x71e250(_0x44ee61), _0xadc9e(null));
          },
          onPreviewChange: (_0x388344, _0x3264d4) => {
            (_0xadc9e(
              _0x388344 && _0x3264d4.status === _0x600d07.READY
                ? { source: _0x388344 }
                : null,
            ),
              _0x3264d4.values &&
                (_0x5648b4 == null ||
                  _0x5648b4(
                    _0x3264d4.values["map"]((_0x2d97e3) => [..._0x2d97e3]),
                  )));
          },
        }),
      }),
      _0x19bded &&
        _0x5943db("div", {
          className:
            "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
          children: _0x19bded,
        }),
      _0x4b76ad("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x5bc807 &&
            _0x5943db(_0x43492a, {
              type: "button",
              variant: "default",
              onClick: _0x5bc807,
              children: _0x23f0ec.t("docs-chart-ui.common.cancel"),
            }),
          _0x5943db(_0x43492a, {
            type: "button",
            variant: "primary",
            disabled: _0x314cce === "referenced" && !_0x5ac64f,
            onClick: () => {
              var _0x2ce66b;
              return _0x314cce === "referenced" && _0x5ac64f
                ? (_0x2ce66b = _0x549887.onDataSourceSubmit) == null
                  ? undefined
                  : _0x2ce66b.call(_0x549887, _0x5ac64f)
                : _0x317cf5("shared");
            },
            children: _0x23f0ec.t("docs-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
function z(_0x31232e, _0x2b9d6d) {
  return function (_0x377649, _0x12457e) {
    _0x2b9d6d(_0x377649, _0x12457e, _0x31232e);
  };
}
function B(_0x3b9aad, _0x2052f7, _0x421bdb, _0x14ce02) {
  var _0x11a374 = arguments.length,
    _0xd9a3a4 =
      _0x11a374 < 3
        ? _0x2052f7
        : _0x14ce02 === null
          ? (_0x14ce02 = Object.getOwnPropertyDescriptor(_0x2052f7, _0x421bdb))
          : _0x14ce02,
    _0x5d4322;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xd9a3a4 = Reflect.decorate(_0x3b9aad, _0x2052f7, _0x421bdb, _0x14ce02);
  else {
    for (var _0x2f7dbd = _0x3b9aad.length - 1; _0x2f7dbd >= 0; _0x2f7dbd--)
      (_0x5d4322 = _0x3b9aad[_0x2f7dbd]) &&
        (_0xd9a3a4 =
          (_0x11a374 < 3
            ? _0x5d4322(_0xd9a3a4)
            : _0x11a374 > 3
              ? _0x5d4322(_0x2052f7, _0x421bdb, _0xd9a3a4)
              : _0x5d4322(_0x2052f7, _0x421bdb)) || _0xd9a3a4);
  }
  return (
    _0x11a374 > 3 &&
      _0xd9a3a4 &&
      Object.defineProperty(_0x2052f7, _0x421bdb, _0xd9a3a4),
    _0xd9a3a4
  );
}
let V = class {
  constructor(_0x19ba97, _0x183830) {
    ((this._commandService = _0x19ba97), (this._resourceService = _0x183830));
  }
  getEditorState(_0x52c8df, _0x464620) {
    let _0x5c306a = this._resourceService["getChart"](_0x52c8df, _0x464620),
      _0xcf2c2d = _0x5c306a
        ? this._resourceService["getDataSource"](
            _0x52c8df,
            _0x5c306a.dataSourceId,
          )
        : undefined;
    return !_0x5c306a || !_0xcf2c2d
      ? null
      : {
          unitId: _0x52c8df,
          chartId: _0x464620,
          dataSourceId: _0xcf2c2d.id,
          dataSource: _0xcf2c2d,
          values: _0x281ac9(_0xcf2c2d)
            ? _0xcf2c2d.values["map"]((_0x374ba9) => [..._0x374ba9])
            : [],
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0x52c8df,
            _0xcf2c2d.id,
          ),
        };
  }
  updateDataFromText(_0x3f3346, _0x37d48c, _0x174365, _0x59723d) {
    let _0x2befe7 = _0x149b54(_0x174365);
    return (
      _0x2befe7.length !== 0 &&
      this.updateData(_0x3f3346, _0x37d48c, _0x2befe7, _0x59723d)
    );
  }
  updateData(_0xa260f0, _0x4d758c, _0x48d6cb, _0x11d001) {
    var _0x145553;
    if (!this.getEditorState(_0xa260f0, _0x4d758c) || _0x48d6cb.length === 0)
      return false;
    let _0x2d5dd1 =
      (_0x145553 = this._resourceService["getChart"](_0xa260f0, _0x4d758c)) ==
      null
        ? undefined
        : _0x145553.chartType;
    if (_0x2d5dd1 === undefined) return false;
    let _0x5d0af6 = _0x376c5a(_0x2d5dd1, _0x48d6cb);
    return _0x5d0af6.ok
      ? this.changeDataSource(_0xa260f0, _0x4d758c, {
          values: _0x5d0af6.values,
        })
      : false;
  }
  changeDataSource(_0x398620, _0x1af094, _0x46cae4) {
    return this._commandService["syncExecuteCommand"](_0x89a640.id, {
      unitId: _0x398620,
      chartId: _0x1af094,
      dataSource: _0x46cae4,
    });
  }
};
V = B([z(0, _0x1382c0), z(1, _0x59e556(_0x3c1b80))], V);
const mr = _0x1a2c54("doc-chart.ui.service");
let hr = class extends _0x44eb1d {
  constructor(_0x1ca804, _0x2047e3, _0x401a08) {
    (super(_0x401a08),
      (this._modelService = _0x1ca804),
      (this._commandService = _0x2047e3));
  }
  get activeRuntimeModel() {
    return this._modelService["activeRuntimeModel"];
  }
  executeChartUpdateConfig(_0x7fb5aa) {
    let _0x3ef25d = this.activeRuntimeModel,
      _0x271758 =
        _0x7fb5aa.unitId ?? (_0x3ef25d == null ? undefined : _0x3ef25d.unitId),
      _0x1312f6 =
        _0x7fb5aa.chartId ??
        (_0x3ef25d == null ? undefined : _0x3ef25d.chartId);
    !_0x271758 ||
      !_0x1312f6 ||
      this._commandService["executeCommand"](_0x1945d6.id, {
        ..._0x7fb5aa,
        unitId: _0x271758,
        chartId: _0x1312f6,
      });
  }
};
hr = B(
  [z(0, _0x59e556(_0x991352)), z(1, _0x1382c0), z(2, _0x59e556(_0x29d923))],
  hr,
);
const H = {
    axis: {
      ..._0x3f1c65,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true,
    },
    legend: _0x19532a,
    lineAndArea: _0x40c135,
    pareto: _0x302f04,
    funnel: _0x35b1ec,
    heatmap: _0x238938,
    indicatorLine: _0x571bd8,
    pie: { ..._0x111127, doughnutHole: 0, pieHole: 0 },
    relation: { ..._0x53e34f, useValueAsSymbolSize: false },
    radar: _0x383946,
    series: {
      ..._0x33c078,
      radarFillOpacity: 1,
      rightAxis: { ltr: false, rtl: false },
    },
    style: _0x29a863,
    titles: _0x4a8804,
    waterfall: { ..._0x1b2ed6, useSubtotal: true },
    waterfallStyle: _0x1ab92e,
    wordCloud: _0x202eb1,
  },
  gr = [
    _0x5584cb.Candlestick,
    _0x5584cb.Histogram,
    _0x5584cb.Treemap,
    _0x5584cb.Sunburst,
    _0x5584cb.Gauge,
    _0x5584cb.Chord,
  ];
function _r() {
  let _0x3d775b = _0x631465();
  return _0x5943db(_0x1a4ab3, {
    visible: gr.every((_0x3d0329) => !_0x6f4356.baseOn(_0x3d775b, _0x3d0329)),
  });
}
function vr(_0x575e54) {
  return _0x4b76ad(_0x76179e, {
    id: _0x575e54.id,
    children: [
      _0x5943db(_0x123d96, { children: _0x575e54.label }),
      _0x5943db(_0x2d84ba, { children: _0x575e54.children }),
    ],
  });
}
function yr(_0x2a9b7a, _0x3db7db = false) {
  let _0x7173e8 = _0x2a9b7a === _0x5584cb.WordCloud,
    _0x520338 = _0x6f4356.baseOn(_0x2a9b7a, _0x5584cb.Pie),
    _0x2a446f = _0x2a9b7a === _0x5584cb.Radar,
    _0x14f377 = _0x2a9b7a === _0x5584cb.Funnel,
    _0x45183a = _0x2a9b7a === _0x5584cb.Waterfall,
    _0x58d839 = _0x2a9b7a === _0x5584cb.Pareto,
    _0x34d8e1 = _0x2a9b7a === _0x5584cb.Candlestick,
    _0x4ccd0e = _0x2a9b7a === _0x5584cb.Histogram,
    _0x4209ae = _0x2a9b7a === _0x5584cb.Treemap,
    _0x3db254 = _0x2a9b7a === _0x5584cb.Sunburst,
    _0x5343ef = _0x2a9b7a === _0x5584cb.Gauge,
    _0x8b2338 = _0x2a9b7a === _0x5584cb.Chord,
    _0x1129ab = _0x2a9b7a === _0x5584cb.Relation,
    _0x5c3982 = _0x2a9b7a === _0x5584cb.Heatmap,
    _0x3eb296 = [_0x14f67c.ChartStyle, _0x14f67c.ChartAndAxisTitles];
  return (
    _0x7173e8 && _0x3eb296.push(_0x14f67c.WordCloud),
    _0x39f466(_0x2a9b7a, _0x4a5960.GeneralSeries) &&
      !_0x58d839 &&
      _0x3eb296.push(_0x14f67c.Series),
    _0x177111(_0x2a9b7a) && _0x3eb296.push(_0x14f67c.LineAndArea),
    _0x2a446f && _0x3eb296.push(_0x14f67c.Radar),
    _0x45183a && _0x3eb296.push(_0x14f67c.WaterfallSeries),
    _0x58d839 &&
      _0x3eb296.push(_0x14f67c.ParetoBarSeries, _0x14f67c.ParetoLineSeries),
    _0x520338 && _0x3eb296.push(_0x14f67c.PieStyle),
    _0x14f377 && _0x3eb296.push(_0x14f67c.Funnel),
    _0x5c3982 && _0x3eb296.push(_0x14f67c.Heatmap),
    _0x1129ab && _0x3eb296.push(_0x14f67c.Relation),
    _0x34d8e1 && _0x3eb296.push(_0x14f67c.Candlestick),
    _0x4ccd0e && _0x3eb296.push(_0x14f67c.Histogram),
    _0x4209ae && _0x3eb296.push(_0x14f67c.Treemap),
    _0x3db254 && _0x3eb296.push(_0x14f67c.Sunburst),
    _0x5343ef && _0x3eb296.push(_0x14f67c.Gauge),
    _0x8b2338 && _0x3eb296.push(_0x14f67c.Chord),
    _0x39f466(_0x2a9b7a, _0x4a5960.Legend) && _0x3eb296.push(_0x14f67c.Legend),
    _0x39f466(_0x2a9b7a, _0x4a5960.Axes) &&
      (_0x3eb296.push(_0x14f67c.HorizontalAxis, _0x14f67c.VerticalAxis),
      _0x3db7db && _0x3eb296.push(_0x14f67c.RightVerticalAxis),
      _0x3eb296.push(_0x14f67c.GridlinesAndTicks)),
    _0x39f466(_0x2a9b7a, _0x4a5960.IndicatorLine) &&
      _0x3eb296.push(_0x14f67c.IndicatorLine),
    _0x3eb296
  );
}
function br(_0x1acdf9) {
  return _0x4b76ad("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [
      _0x5943db(_0x371ef9, { axis: _0x1acdf9.axis, defaultValues: H.axis }),
      _0x5943db(_0x40d89a, { axis: _0x1acdf9.axis, defaultValues: H.axis }),
      _0x5943db(_0xe72622, { axis: _0x1acdf9.axis, defaultValues: H.axis }),
      _0x5943db(_0xaf148, { axis: _0x1acdf9.axis }),
      _0x5943db(_0x456646, { axis: _0x1acdf9.axis }),
      _0x5943db(_0x1e550e, { axis: _0x1acdf9.axis, defaultValues: H.axis }),
      _0x5943db(_0x4f62b4, { axis: _0x1acdf9.axis, defaultValues: H.axis }),
    ],
  });
}
function xr(_0xf2ba60) {
  var _0x2f1db4, _0x4509a3;
  let _0x2bbae5 = _0x100c8b(_0x31aad9),
    _0x3842af = _0x631465(),
    _0x2c8c2f = _0x39d107(),
    [_0x4f61ea, _0x3c97c2] = _0x5a497e(null),
    _0x3df571 = _0x5943db(_0x97c152, {}),
    _0x1a9cd7 = {
      [_0x14f67c.Candlestick]: _0x2bbae5.t("docs-chart-ui.section.candlestick"),
      [_0x14f67c.ChartAndAxisTitles]: _0x2bbae5.t(
        "docs-chart-ui.common.chartAndAxisTitles",
      ),
      [_0x14f67c.ChartStyle]: _0x2bbae5.t("docs-chart-ui.common.chartStyle"),
      [_0x14f67c.Chord]: _0x2bbae5.t("docs-chart-ui.section.chord"),
      [_0x14f67c.Funnel]: _0x2bbae5.t("docs-chart-ui.section.funnel"),
      [_0x14f67c.Gauge]: _0x2bbae5.t("docs-chart-ui.section.gauge"),
      [_0x14f67c.GridlinesAndTicks]: _0x2bbae5.t(
        "docs-chart-ui.section.gridlinesAndTicks",
      ),
      [_0x14f67c.Heatmap]: _0x2bbae5.t("docs-chart-ui.common.heatmap"),
      [_0x14f67c.Histogram]: _0x2bbae5.t("docs-chart-ui.section.histogram"),
      [_0x14f67c.HorizontalAxis]: _0x2bbae5.t(
        "docs-chart-ui.common.horizontalAxis",
      ),
      [_0x14f67c.IndicatorLine]: _0x2bbae5.t(
        "docs-chart-ui.section.indicatorLine",
      ),
      [_0x14f67c.Legend]: _0x2bbae5.t("docs-chart-ui.common.legend"),
      [_0x14f67c.LineAndArea]: _0x2bbae5.t("docs-chart-ui.section.lineAndArea"),
      [_0x14f67c.ParetoBarSeries]: _0x2bbae5.t(
        "docs-chart-ui.section.paretoBar",
      ),
      [_0x14f67c.ParetoLineSeries]: _0x2bbae5.t(
        "docs-chart-ui.section.paretoLine",
      ),
      [_0x14f67c.PieStyle]: _0x2bbae5.t("docs-chart-ui.section.pie"),
      [_0x14f67c.Radar]: _0x2bbae5.t("docs-chart-ui.section.radar"),
      [_0x14f67c.Relation]: _0x2bbae5.t("docs-chart-ui.section.relation"),
      [_0x14f67c.RightVerticalAxis]: _0x2bbae5.t(
        "docs-chart-ui.common.rightVerticalAxis",
      ),
      [_0x14f67c.Series]: _0x2bbae5.t("docs-chart-ui.common.series"),
      [_0x14f67c.Sunburst]: _0x2bbae5.t("docs-chart-ui.section.sunburst"),
      [_0x14f67c.Treemap]: _0x2bbae5.t("docs-chart-ui.section.treemap"),
      [_0x14f67c.Trendline]: _0x2bbae5.t("docs-chart-ui.common.trendline"),
      [_0x14f67c.VerticalAxis]: _0x2bbae5.t(
        "docs-chart-ui.common.verticalAxis",
      ),
      [_0x14f67c.WaterfallSeries]: _0x2bbae5.t(
        "docs-chart-ui.section.waterfall",
      ),
      [_0x14f67c.WordCloud]: _0x2bbae5.t("docs-chart-ui.section.wordCloud"),
    };
  _0x380c89(() => {
    var _0x33ac4b;
    (_0x33ac4b = _0xf2ba60.route) != null &&
      _0x33ac4b.section &&
      _0x3c97c2(_0xf2ba60.route["section"]);
  }, [_0xf2ba60.route]);
  let _0x511623 = {
    [_0x14f67c.ChartStyle]: _0x5943db(_0x11969f, { defaultValues: H.style }),
    [_0x14f67c.ChartAndAxisTitles]: _0x4b76ad("div", {
      className: "univer-flex univer-flex-col univer-gap-3",
      children: [
        _0x5943db(_0xa7d996, {
          commitMode: "change",
          defaultValues: H.titles,
          showFont: false,
        }),
        _0x5943db(_0x31bcc8, {
          commitMode: "change",
          defaultValues: H.titles,
          showFont: false,
        }),
        _0x5943db(_0x560957, {
          axis: "x",
          commitMode: "change",
          defaultValues: H.titles,
          showAlignment: false,
          showFont: false,
        }),
        _0x5943db(_0x560957, {
          axis: "y",
          commitMode: "change",
          defaultValues: H.titles,
          showAlignment: false,
          showFont: false,
        }),
        _0x5943db(_0x560957, {
          axis: "rightY",
          commitMode: "change",
          defaultValues: H.titles,
          showAlignment: false,
          showFont: false,
        }),
        _0x5943db(_0x10d981, { defaultValues: H.titles }),
      ],
    }),
    [_0x14f67c.Series]: _0x4b76ad(_0x1c4c89, {
      defaultValues: H.series,
      NumberFormatField: _0x39fe00,
      selectedSeriesId:
        (_0x2f1db4 = _0xf2ba60.route) == null ? undefined : _0x2f1db4.seriesId,
      children: [
        _0x5943db(_0x3fa0c9, {}),
        _0x5943db(_0x5b579d, { showColor: false, showOpacity: false }),
        _0x5943db(_0x47b3b9, { showColor: false }),
        _0x5943db(_0x1acd95, {}),
        _0x5943db(_0x132c1d, {}),
        _0x5943db(_0x1cdd06, {}),
      ],
    }),
    [_0x14f67c.LineAndArea]: _0x5943db(_0x111b96, {
      defaultValues: H.lineAndArea,
      lineStyleControl: "select",
    }),
    [_0x14f67c.WordCloud]: _0x4b76ad(_0x537d49, {
      children: [
        _0x5943db(_0x45c4e0, { defaultValues: H.wordCloud }),
        _0x5943db(_0x46e6d6, { defaultValues: H.wordCloud }),
      ],
    }),
    [_0x14f67c.Radar]: _0x5943db(_0x2d396a, { defaultValues: H.radar }),
    [_0x14f67c.WaterfallSeries]: _0x5943db(_0x552a19, {
      defaultValues: H.waterfallStyle,
      NumberFormatField: _0x39fe00,
      selectedSeriesId:
        (_0x4509a3 = _0xf2ba60.route) == null ? undefined : _0x4509a3.seriesId,
    }),
    [_0x14f67c.ParetoBarSeries]: _0x5943db(_0x461dbd, {
      defaultValues: H.pareto,
      NumberFormatField: _0x39fe00,
      showDataPointEditor: true,
      target: "barStyle",
    }),
    [_0x14f67c.ParetoLineSeries]: _0x5943db(_0x461dbd, {
      defaultValues: H.pareto,
      NumberFormatField: _0x39fe00,
      showDataPointEditor: true,
      target: "cumulativeLineStyle",
    }),
    [_0x14f67c.PieStyle]: _0x5943db(_0x296ee3, {
      defaultValues: H.pie,
      NumberFormatField: _0x39fe00,
    }),
    [_0x14f67c.Funnel]: _0x5943db(_0x2bfd29, {
      defaultValues: H.funnel,
      gapControl: "number",
    }),
    [_0x14f67c.Heatmap]: _0x5943db(_0x1f211c, { defaultValues: H.heatmap }),
    [_0x14f67c.Relation]: _0x5943db(_0x4ec9af, { defaultValues: H.relation }),
    [_0x14f67c.Legend]: _0x5943db(_0x1d93bb, {
      defaultValues: H.legend,
      children: _0x4b76ad("div", {
        className: "univer-flex univer-flex-col univer-gap-3",
        children: [
          _0x5943db(_0x7cbc44, {}),
          _0x5943db(_0x2f26ff, {}),
          _0x5943db(_0xf752ce, {}),
          _0x5943db(_0x4cf02d, {}),
        ],
      }),
    }),
    [_0x14f67c.HorizontalAxis]: _0x5943db(br, { axis: "x" }),
    [_0x14f67c.VerticalAxis]: _0x5943db(br, { axis: "y" }),
    [_0x14f67c.RightVerticalAxis]: _0x5943db(br, { axis: "rightY" }),
    [_0x14f67c.GridlinesAndTicks]: _0x4b76ad("div", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [
        _0x5943db(_0x3a2fde, {
          axis: "x",
          defaultValues: H.axis,
          label: _0x2bbae5.t("docs-chart-ui.common.horizontalAxis"),
        }),
        _0x5943db(_0x3a2fde, {
          axis: "y",
          defaultValues: H.axis,
          label: _0x2bbae5.t("docs-chart-ui.common.verticalAxis"),
        }),
        _0x4b76ad("div", {
          className: "univer-grid univer-grid-cols-2 univer-gap-2",
          children: [
            _0x5943db(_0x37d43e, { axis: "x", defaultValues: H.axis }),
            _0x5943db(_0x37d43e, { axis: "y", defaultValues: H.axis }),
          ],
        }),
      ],
    }),
    [_0x14f67c.IndicatorLine]: _0x4b76ad("div", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [
        _0x5943db(_0xad7293, { defaultValues: H.indicatorLine }),
        _0x5943db(_0xf673aa, { defaultValues: H.indicatorLine }),
      ],
    }),
    [_0x14f67c.Candlestick]: _0x3df571,
    [_0x14f67c.Histogram]: _0x3df571,
    [_0x14f67c.Treemap]: _0x3df571,
    [_0x14f67c.Sunburst]: _0x3df571,
    [_0x14f67c.Gauge]: _0x3df571,
    [_0x14f67c.Chord]: _0x3df571,
  };
  return _0x5943db(_0x5c359b, {
    value: _0x4f61ea,
    onChange: _0x3c97c2,
    children: yr(_0x3842af, _0x2c8c2f).map((_0x341609) =>
      _0x5943db(
        vr,
        {
          id: _0x341609,
          label: _0x1a9cd7[_0x341609],
          children: _0x511623[_0x341609],
        },
        _0x341609,
      ),
    ),
  });
}
function Sr(_0x3de553) {
  var _0x4f939f;
  let _0x16e25f = _0x100c8b(_0x31aad9),
    [_0x1263cd, _0x40fa5e] = _0x5a497e(
      ((_0x4f939f = _0x3de553.initialRoute) == null
        ? undefined
        : _0x4f939f.tab) ?? _0x4499d6.Data,
    ),
    _0xd1edd2 = _0x1df613(
      () =>
        _0x2a3208(
          _0x250a50.map((_0x31769d) => ({
            ..._0x31769d,
            label: _0x16e25f.t("docs-chart-ui.chartTypes." + _0x31769d.labelId),
          })),
        ),
      [_0x16e25f],
    );
  return (
    _0x380c89(() => {
      var _0x9cc2ef;
      (_0x9cc2ef = _0x3de553.initialRoute) != null &&
        _0x9cc2ef.tab &&
        _0x40fa5e(_0x3de553.initialRoute["tab"]);
    }, [_0x3de553.initialRoute]),
    _0x4b76ad("div", {
      className:
        "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [
        _0x5943db(_0x158ec7, {
          ariaLabel: _0x16e25f.t("docs-chart-ui.common.editChart"),
          className: "univer-shrink-0 univer-px-3",
          items: [
            {
              label: _0x16e25f.t("docs-chart-ui.common.setup"),
              panelId: Cr,
              value: _0x4499d6.Data,
            },
            {
              label: _0x16e25f.t("docs-chart-ui.common.customize"),
              panelId: wr,
              value: _0x4499d6.Style,
            },
          ],
          value: _0x1263cd,
          onChange: _0x40fa5e,
        }),
        _0x1263cd === _0x4499d6.Data
          ? _0x5943db(_0xfd667a, {
              id: Cr,
              label: _0x16e25f.t("docs-chart-ui.common.setup"),
              children: _0x4b76ad("div", {
                className:
                  "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                children: [
                  _0x5943db(_0x45a69a, {
                    options: _0xd1edd2,
                    onChange: _0x3de553.onPreviewChartTypeChange,
                  }),
                  _0x5943db(_0x1f323f, {}),
                  _0x5943db(_0x4b84d5, {}),
                  _0x5943db(_r, {}),
                  _0x5943db(_0x32a3c0, {}),
                  _0x4b76ad("div", {
                    children: [
                      _0x5943db(_0x5808b9, {
                        title: _0x16e25f.t("docs-chart-ui.common.data"),
                      }),
                      _0x5943db(_0x43492a, {
                        className: "univer-w-full univer-justify-start",
                        onClick: _0x3de553.onModifyData,
                        children: _0x16e25f.t("docs-chart-ui.common.editData"),
                      }),
                    ],
                  }),
                  _0x5943db(_0x2fcb26, {}),
                  _0x5943db(_0x2b1b69, {}),
                  _0x5943db(_0x4fdeaa, { defaultValues: H.waterfall }),
                ],
              }),
            })
          : _0x5943db(_0xfd667a, {
              id: wr,
              label: _0x16e25f.t("docs-chart-ui.common.customize"),
              children: _0x5943db(xr, { route: _0x3de553.initialRoute }),
            }),
        _0x3de553.onClose &&
          _0x5943db("div", {
            className:
              "univer-flex univer-shrink-0 univer-justify-end univer-px-1 univer-pb-4 univer-pt-4",
            children: _0x5943db(_0x43492a, {
              type: "button",
              variant: "default",
              onClick: _0x3de553.onClose,
              children: _0x16e25f.t("docs-chart-ui.close"),
            }),
          }),
      ],
    })
  );
}
const Cr = "doc-chart-setup-panel",
  wr = "doc-chart-style-panel";
function Tr(_0x1d565c) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x16aacf) {
            return typeof _0x16aacf;
          }
        : function (_0x5ec867) {
            return _0x5ec867 &&
              typeof Symbol == "function" &&
              _0x5ec867.constructor === Symbol &&
              _0x5ec867 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ec867;
          }),
    Tr(_0x1d565c)
  );
}
function Er(_0x4c3b3d, _0x172d18) {
  if (Tr(_0x4c3b3d) != "object" || !_0x4c3b3d) return _0x4c3b3d;
  var _0x2ec50f = _0x4c3b3d[Symbol.toPrimitive];
  if (_0x2ec50f !== undefined) {
    var _0x216e1b = _0x2ec50f.call(_0x4c3b3d, _0x172d18 || "default");
    if (Tr(_0x216e1b) != "object") return _0x216e1b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x172d18 === "string" ? String : Number)(_0x4c3b3d);
}
function Dr(_0x410899) {
  var _0xcfda7 = Er(_0x410899, "string");
  return Tr(_0xcfda7) == "symbol" ? _0xcfda7 : _0xcfda7 + "";
}
function U(_0xf9198e, _0x2fd3ee, _0x130ae5) {
  return (
    (_0x2fd3ee = Dr(_0x2fd3ee)) in _0xf9198e
      ? Object.defineProperty(_0xf9198e, _0x2fd3ee, {
          value: _0x130ae5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xf9198e[_0x2fd3ee] = _0x130ae5),
    _0xf9198e
  );
}
var Or = class extends _0x4d5f24 {
  constructor(
    _0x1a7866,
    _0x3b2094,
    _0x709081,
    _0x5eb69b,
    _0xfad053 = true,
    _0x207ef7,
  ) {
    (super(),
      (this.chartId = _0x1a7866),
      (this._host = _0x3b2094),
      (this._applyHostStyle = _0x709081),
      (this._getRenderRect = _0x5eb69b),
      (this._manageHostSize = _0xfad053),
      (this._getRenderScale = _0x207ef7),
      U(this, "mode", _0x405a90.Dom),
      U(this, "_frameNode", null),
      U(this, "_mountNode", null),
      U(this, "_hostStyle", {}));
  }
  getRect() {
    var _0x576bfc;
    let _0x115873 =
      (_0x576bfc = this._getRenderRect) == null
        ? undefined
        : _0x576bfc.call(this);
    if (_0x115873)
      return {
        width: Math.max(1, _0x115873.width),
        height: Math.max(1, _0x115873.height),
      };
    let _0x45b7ae = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(1, _0x45b7ae.width),
      height: Math.max(1, _0x45b7ae.height),
    };
  }
  setStyle(_0x355212) {
    ((this._hostStyle = _0x355212),
      this._frameNode && this._applyHostStyle(this._frameNode, _0x355212));
  }
  async ensureMount() {
    if (!this._mountNode) {
      let _0x211b95 = document.createElement("div");
      ((_0x211b95.style["position"] = "absolute"),
        (_0x211b95.style["left"] = "0"),
        (_0x211b95.style["top"] = "0"));
      let _0x29898c = document.createElement("div");
      ((_0x29898c.style["position"] = "relative"),
        (_0x29898c.style["border"] = "0"),
        (_0x29898c.style["boxSizing"] = "content-box"),
        (_0x29898c.style["overflow"] = "hidden"),
        (_0x29898c.className = "doc-chart-host"),
        _0x211b95.appendChild(_0x29898c),
        this._host["appendChild"](_0x211b95),
        (this._frameNode = _0x211b95),
        (this._mountNode = _0x29898c),
        this._applyHostStyle(_0x211b95, this._hostStyle));
    }
    return (this.syncLayout(), this._mountNode);
  }
  checkMounted() {
    return !!(this._mountNode && this._host["contains"](this._mountNode));
  }
  syncLayout() {
    var _0x5d2029;
    let _0x7df3a2 = this.getRect(),
      _0x31c2a0 =
        (_0x5d2029 = this._getRenderScale) == null
          ? undefined
          : _0x5d2029.call(this),
      _0x39b324 = (_0x31c2a0 == null ? undefined : _0x31c2a0.scaleX) ?? 1,
      _0x501fd1 = (_0x31c2a0 == null ? undefined : _0x31c2a0.scaleY) ?? 1;
    (this._manageHostSize &&
      this._setElementSize(this._host, {
        width: _0x7df3a2.width * _0x39b324,
        height: _0x7df3a2.height * _0x501fd1,
      }),
      this._frameNode &&
        (this._setElementSize(this._frameNode, _0x7df3a2),
        this._getRenderScale &&
          ((this._frameNode["style"].transform =
            "scale(" + _0x39b324 + ",\x20" + _0x501fd1 + ")"),
          (this._frameNode["style"].transformOrigin = "top left"))),
      this._mountNode &&
        this._setElementSize(this._mountNode, this._getContentRect(_0x7df3a2)));
  }
  markReady() {}
  markNotReady() {}
  dispose() {
    var _0x5f1926;
    ((_0x5f1926 = this._frameNode) == null || _0x5f1926.remove(),
      (this._frameNode = null),
      (this._mountNode = null),
      super.dispose());
  }
  _setElementSize(_0x5eea2b, _0x313ef9) {
    ((_0x5eea2b.style["width"] = _0x313ef9.width + "px"),
      (_0x5eea2b.style["height"] = _0x313ef9.height + "px"));
  }
  _getContentRect(_0x3afe7d) {
    if (!_0x1ff3e5(this._hostStyle)) return _0x3afe7d;
    let _0x4c0d08 = _0xf441fe(_0x3afe7d, this._hostStyle);
    return { width: _0x4c0d08.width, height: _0x4c0d08.height };
  }
};
function kr(_0x434a5a) {
  var _0x135a6b;
  let _0x3b2ca0 =
    (_0x135a6b = _0x434a5a.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null
      ? undefined
      : _0x135a6b[1];
  if (_0x3b2ca0) {
    let _0x36b67f =
      _0x3b2ca0.length === 3
        ? _0x3b2ca0
            .split("")
            .map((_0x3f2aa5) => "" + _0x3f2aa5 + _0x3f2aa5)
            .join("")
        : _0x3b2ca0;
    return (
      "rgb(" +
      Number.parseInt(_0x36b67f.slice(0, 2), 16) +
      ",\x20" +
      Number.parseInt(_0x36b67f.slice(2, 4), 16) +
      ",\x20" +
      Number.parseInt(_0x36b67f.slice(4, 6), 16) +
      ")"
    );
  }
  let _0x3406d0 = document.createElement("span");
  return (
    (_0x3406d0.style["color"] = _0x434a5a),
    _0x3406d0.style["color"] || _0x434a5a
  );
}
let W = class extends _0x4d5f24 {
  constructor(_0x3e3d48, _0x12a3d7, _0x44eab9) {
    (super(),
      (this._localeService = _0x3e3d48),
      (this._chartThemeService = _0x12a3d7),
      (this._renderModelManager = _0x44eab9));
  }
  createChartInstance(_0x36725b) {
    return _0x36725b
      ? this._renderModelManager["createChartInstance"](
          _0x36725b,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  createRenderInput(_0x1a3c44) {
    let _0xdd32b3 = _0x1a3c44.model["config"];
    if (!_0xdd32b3)
      throw Error(
        "Document chart " + _0x1a3c44.chartId + " has no render config.",
      );
    let _0x43f979 = this._localeService["getDirection"]();
    return {
      chartConfig: _0xdd32b3,
      chartStyle: _0x4d5a75(
        {
          ..._0x1a3c44.model["style"],
          runtime: _0x1a3c44.model["getRuntimeContext"](_0x43f979),
          direction: _0x43f979,
        },
        _0xdd32b3.type,
      ),
    };
  }
  createRenderSpec(_0x17243c, _0x380477, _0xf6a2b0) {
    let { chartConfig: _0x25bb54, chartStyle: _0x37a989 } =
        this.createRenderInput(_0x17243c),
      _0x7c0e2 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x7c0e2.stylizeSpec(
        _0x7c0e2.toSpec(_0x25bb54, _0x37a989),
        {
          chartConfig: _0x25bb54,
          chartStyle: _0x37a989,
          chartInstance: _0xf6a2b0,
        },
        _0x380477,
      ),
      chartConfig: _0x25bb54,
      chartStyle: _0x37a989,
      hostStyle: this.getHostStyle(_0x37a989),
    };
  }
  getHostStyle(_0xa93072) {
    return _0x41610d({
      style: _0xa93072,
      getRenderColor: (_0x41f4b4) =>
        this._chartThemeService["getRenderColor"](_0x41f4b4),
    });
  }
  applyHostStyle(_0x41e800, _0x4cfc93) {
    var _0x3858a3;
    let _0x5b8df6 =
      (_0x3858a3 = _0x4cfc93.border) != null &&
      _0x3858a3.color &&
      _0x4cfc93.border["width"]
        ? _0x4cfc93.border["width"] +
          "px solid " +
          kr(_0x4cfc93.border["color"])
        : "";
    ((_0x41e800.style["border"] = _0x5b8df6),
      (_0x41e800.style["backgroundColor"] = _0x4cfc93.fill
        ? kr(_0x4cfc93.fill)
        : "transparent"),
      (_0x41e800.style["borderRadius"] = _0x4cfc93.radius
        ? _0x4cfc93.radius + "px"
        : ""),
      (_0x41e800.style["overflow"] = "hidden"),
      (_0x41e800.style["boxSizing"] = "border-box"));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x4701da }) => this.getHostStyle(_0x4701da),
      resolveRenderBackgroundColor: ({ hostStyle: _0x343722 }) =>
        _0x343722.fill,
      prepareSpec: ({ mode: _0x42629e, spec: _0x371018 }) =>
        _0x42629e === "image"
          ? { ..._0x371018, animation: false, tooltip: { show: false } }
          : _0x371018,
    };
  }
  dispose() {
    super.dispose();
  }
};
W = B(
  [z(0, _0x59e556(_0x31aad9)), z(1, _0x59e556(_0x138b73)), z(2, _0x103c76)],
  W,
);
function Ar(
  _0x37cf0c,
  _0xac76f6,
  _0x4d2573,
  _0x53a36c,
  _0x5c41c4,
  _0x5af8c7,
  _0x4ff82e,
) {
  let { model: _0x49d921, source: _0xb00a9e } = _0x4d2f9a({
    id: _0x37cf0c,
    chartType: _0x4d2573,
    dataSet: _0xcc9b2a(_0x5e4b26(_0xac76f6)),
    isRowDirection:
      (_0x53a36c == null ? undefined : _0x53a36c.orient) !== "column",
    context: _0x53a36c == null ? undefined : _0x53a36c.chartContext,
    dataAggregation: _0x5c41c4,
    style: _0x5af8c7,
    injector: _0x4ff82e,
  });
  return {
    unitId: "doc-chart-preview",
    chartId: _0x37cf0c,
    dataSourceId: _0x37cf0c + "-data-source",
    model: _0x49d921,
    source: _0xb00a9e,
  };
}
function jr(_0x2a7760) {
  let _0x26e7c2 = _0x100c8b(_0x31aad9),
    _0x3eb4e0 = _0x100c8b(_0x450648),
    _0xfbe533 = _0x100c8b(W),
    _0x4546aa = _0x5c2504(null),
    _0x477a96 = _0x5c2504(null),
    _0x5b4c34 = _0x5c2504("doc-chart-preview-" + _0x235645(8)),
    [_0x42e28b, _0x16f459] = _0x5a497e(null);
  return (
    _0x380c89(() => {
      let _0x5b3772 = _0x4546aa.current;
      if (!_0x5b3772) return;
      (_0x16f459(null),
        _0x5b3772.replaceChildren(),
        (_0x477a96.current = Mr(_0x5b3772)));
      let _0x50489a = false,
        _0xfbcf52 = (_0x226eb1) => {
          _0x50489a || _0x16f459(_0x226eb1);
        },
        _0x472ab5 = null,
        _0x5c9e89 = null,
        _0x5a8be4 = null;
      try {
        ((_0x472ab5 = Ar(
          _0x5b4c34.current,
          _0x2a7760.values,
          _0x2a7760.chartType,
          _0x2a7760.context,
          _0x2a7760.dataAggregation,
          _0x2a7760.style,
          _0x3eb4e0,
        )),
          (_0x5c9e89 = new Or(
            _0x472ab5.chartId,
            _0x5b3772,
            (_0x208dfc, _0x1612a0) =>
              _0xfbe533.applyHostStyle(_0x208dfc, _0x1612a0),
            () => _0x477a96.current ?? Mr(_0x5b3772),
            false,
          )),
          (_0x5a8be4 = _0xfbe533.createChartInstance(_0x405a90.Dom)),
          _0x5a8be4.bind(_0x5c9e89));
      } catch (_0x374c8f) {
        return (
          _0xfbcf52(_0x374c8f),
          () => {
            ((_0x50489a = true), _0x5b3772.replaceChildren());
          }
        );
      }
      if (!_0x472ab5 || !_0x5c9e89 || !_0x5a8be4)
        return () => {
          ((_0x50489a = true), _0x5b3772.replaceChildren());
        };
      let _0x41037d = _0x472ab5,
        _0x33dcd2 = _0x5c9e89,
        _0x266c72 = _0x5a8be4,
        _0x7e70c6 = () => {
          let _0x429b97, _0x6b585d;
          try {
            ({ chartConfig: _0x429b97, chartStyle: _0x6b585d } =
              _0xfbe533.createRenderInput(_0x41037d));
          } catch (_0x16da02) {
            _0xfbcf52(_0x16da02);
            return;
          }
          _0x266c72
            .render({
              chartId: _0x41037d.chartId,
              config: _0x429b97,
              style: _0x6b585d,
            })
            .then(() => {
              _0x50489a || _0x16f459(null);
            })
            .catch(_0xfbcf52);
        },
        _0x514b06 = _0x41037d.model["config$"].subscribe((_0x1283c0) => {
          _0x1283c0 && _0x7e70c6();
        }),
        _0x34f28d =
          typeof ResizeObserver > "u"
            ? null
            : new ResizeObserver((_0x10585b) => {
                var _0x115a83;
                let _0x304a85 =
                  (_0x115a83 = _0x10585b[0]) == null
                    ? undefined
                    : _0x115a83.contentRect;
                ((_0x477a96.current =
                  _0x304a85 && _0x304a85.width > 0 && _0x304a85.height > 0
                    ? { width: _0x304a85.width, height: _0x304a85.height }
                    : Mr(_0x5b3772)),
                  _0x7e70c6());
              });
      return (
        _0x34f28d == null || _0x34f28d.observe(_0x5b3772),
        () => {
          ((_0x50489a = true),
            _0x514b06.unsubscribe(),
            _0x34f28d == null || _0x34f28d.disconnect(),
            _0x266c72.dispose(),
            _0x33dcd2.dispose(),
            _0x41037d.model["dispose"](),
            _0x41037d.source["dispose"](),
            _0x5b3772.replaceChildren());
        }
      );
    }, [
      _0x3eb4e0,
      _0x2a7760.chartType,
      _0x2a7760.context,
      _0x2a7760.dataAggregation,
      _0x2a7760.style,
      _0x2a7760.values,
      _0xfbe533,
    ]),
    _0x4b76ad("div", {
      className:
        "univer-relative univer-box-border univer-flex univer-h-full univer-min-h-0 univer-w-full univer-min-w-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: [
        _0x5943db("div", {
          ref: _0x4546aa,
          className:
            "univer-absolute\x20univer-inset-0\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-rounded-lg",
        }),
        _0x42e28b != null &&
          _0x5943db("div", {
            className:
              "dark:!univer-bg-gray-900/90 univer-bg-gray-0/90 univer-absolute univer-bottom-3 univer-left-3 univer-rounded univer-px-2 univer-py-1 univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
            children: _0x26e7c2.t("docs-chart-ui.previewRenderFailed"),
          }),
      ],
    })
  );
}
function Mr(_0x8eaf9f) {
  let _0x57748e = _0x8eaf9f.getBoundingClientRect();
  return _0x57748e.width <= 0 || _0x57748e.height <= 0
    ? null
    : { width: _0x57748e.width, height: _0x57748e.height };
}
const Nr = "doc-chart.editor-dialog",
  Pr = "doc-chart.dialog.editor";
function Fr(_0x367589) {
  var _0x26a758, _0xd4e5c, _0x3f189e;
  let {
      unitId: _0x4f4ee0,
      chartId: _0x29d5fd,
      drawingId: _0xc36ff1,
    } = _0x367589,
    _0x2f782b = _0x100c8b(_0x31aad9),
    _0x3d8c70 = _0x100c8b(_0x450648),
    _0x189271 = _0x100c8b(_0x14b502),
    _0x4512e4 = _0x100c8b(_0x3c1b80),
    _0x1b3e2e = _0x100c8b(_0x991352),
    _0x3b7879 = _0x100c8b(V),
    _0x182bfc = _0x100c8b(mr),
    _0x2502bc = _0x1df613(
      () => _0x3b7879.getEditorState(_0x4f4ee0, _0x29d5fd),
      [_0x29d5fd, _0x3b7879, _0x4f4ee0],
    ),
    _0x45fa9b = _0x4512e4.getChart(_0x4f4ee0, _0x29d5fd),
    _0x475fd3 = _0x1df613(
      () =>
        _0x1b3e2e == null
          ? undefined
          : _0x1b3e2e.ensureChartModel(_0x4f4ee0, _0x29d5fd),
      [_0x29d5fd, _0x1b3e2e, _0x4f4ee0],
    ),
    _0x542787 = _0x28156b(
      _0x475fd3 == null ? undefined : _0x475fd3.model["chartType$"],
      (_0x475fd3 == null ? undefined : _0x475fd3.model["chartType"]) ??
        (_0x45fa9b == null ? undefined : _0x45fa9b.chartType),
    ),
    _0x3c5c26 = _0x28156b(
      _0x475fd3 == null ? undefined : _0x475fd3.model["context$"],
      (_0x475fd3 == null ? undefined : _0x475fd3.model["context"]) ??
        (_0x45fa9b == null || (_0x26a758 = _0x45fa9b.context) == null
          ? undefined
          : _0x26a758.chartContext),
    ),
    _0x20931d = _0x28156b(
      _0x475fd3 == null ? undefined : _0x475fd3.model["dataAggregation$"],
      (_0x475fd3 == null ? undefined : _0x475fd3.model["dataAggregation"]) ??
        (_0x45fa9b == null ? undefined : _0x45fa9b.dataAggregation),
    ),
    _0x38824c = _0x28156b(
      _0x475fd3 == null ? undefined : _0x475fd3.model["style$"],
      (_0x475fd3 == null ? undefined : _0x475fd3.model["style"]) ??
        (_0x45fa9b == null ? undefined : _0x45fa9b.style),
    ),
    _0x499eb2 = _0x28156b(
      _0x1df613(() => {
        var _0x1f3b0d;
        return _0x1b3e2e == null ||
          (_0x1f3b0d = _0x1b3e2e.getDataSourceRuntimeState$) == null
          ? undefined
          : _0x1f3b0d.call(_0x1b3e2e, _0x4f4ee0, _0x29d5fd);
      }, [_0x29d5fd, _0x1b3e2e, _0x4f4ee0]),
      _0x1b3e2e == null ||
        (_0xd4e5c = _0x1b3e2e.getDataSourceRuntimeState) == null
        ? undefined
        : _0xd4e5c.call(_0x1b3e2e, _0x4f4ee0, _0x29d5fd),
    ),
    _0x2aa264 = _0x1df613(
      () => ({
        ...(_0x45fa9b == null ? undefined : _0x45fa9b.context),
        chartContext: _0x3c5c26,
      }),
      [_0x45fa9b == null ? undefined : _0x45fa9b.context, _0x3c5c26],
    ),
    [_0x360346, _0x21cfeb] = _0x5a497e(_0x2502bc),
    [_0x374374, _0x9ff153] = _0x5a497e(
      () =>
        (_0x2502bc == null
          ? undefined
          : _0x2502bc.values["map"]((_0x386d87) => [..._0x386d87])) ?? [],
    ),
    [_0xbcf2e1, _0x2af68a] = _0x5a497e(
      () =>
        (_0x2502bc == null
          ? undefined
          : _0x2502bc.values["map"]((_0x4c1059) => [..._0x4c1059])) ?? [],
    ),
    [_0x5c9b7b, _0x136270] = _0x5a497e(() =>
      _0x45fa9b == null ? undefined : _0x45fa9b.chartType,
    ),
    [_0x187059, _0x4e70ac] = _0x5a497e(() => {
      var _0x4bf0a8;
      return ((_0x4bf0a8 = _0x367589.route) == null
        ? undefined
        : _0x4bf0a8.tab) === _0x4499d6.Data
        ? "data"
        : "chart";
    }),
    [_0xf1fadb, _0x3cb2e3] = _0x5a497e(null),
    _0x41cb23 =
      _0x499eb2 == null || (_0x3f189e = _0x499eb2.values) == null
        ? undefined
        : _0x3f189e.map((_0x5323a3) => [..._0x5323a3]),
    _0x41eb83 = _0x1df613(() => {
      var _0x2273bf;
      let _0x3f3ca9 = _0x189271.getUnit(_0x4f4ee0, _0x53698d.UNIVER_DOC);
      if (!_0x475fd3 || !_0x3f3ca9) return null;
      let _0x5997c4 =
        _0xc36ff1 ??
        ((_0x2273bf = Object.values(_0x3f3ca9.getDrawings() ?? {}).find(
          (_0x267c4c) => _0x267c4c.chartId === _0x29d5fd,
        )) == null
          ? undefined
          : _0x2273bf.drawingId);
      return _0x5997c4
        ? new _0xec290b(
            _0x475fd3.model,
            new _0x408e04({
              unitId: _0x4f4ee0,
              chartId: _0x29d5fd,
              drawingId: _0x5997c4,
              documentDataModel: _0x3f3ca9,
              injector: _0x3d8c70,
            }),
          )
        : null;
    }, [_0x29d5fd, _0xc36ff1, _0x3d8c70, _0x475fd3, _0x4f4ee0, _0x189271]);
  return !_0x360346 || !_0x45fa9b
    ? _0x5943db("div", {
        className:
          "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
        children: _0x2f782b.t("docs-chart-ui.chartNotFound"),
      })
    : _0x4b76ad("div", {
        className:
          "univer-flex\x20univer-w-full\x20univer-min-w-0\x20univer-flex-col\x20univer-overflow-hidden\x20univer-overscroll-contain",
        style: { height: "min(560px, calc(100vh - 180px))" },
        children: [
          _0x5943db(_0x158ec7, {
            ariaLabel: _0x2f782b.t("docs-chart-ui.common.editChart"),
            className: "univer-shrink-0",
            value: _0x187059,
            items: [
              {
                label: _0x2f782b.t("docs-chart-ui.floatMenu.menuTitle.chart"),
                panelId: Ir,
                value: "chart",
              },
              {
                label: _0x2f782b.t("docs-chart-ui.common.data"),
                panelId: Lr,
                value: "data",
              },
            ],
            variant: "segmented",
            onChange: _0x4e70ac,
          }),
          _0x4b76ad("div", {
            id: _0x187059 === "data" ? Lr : Ir,
            "aria-labelledby": (_0x187059 === "data" ? Lr : Ir) + "-tab",
            className: "univer-min-h-0\x20univer-flex-1\x20univer-pt-4",
            role: "tabpanel",
            children: [
              _0x187059 === "data"
                ? _0x5943db(pr, {
                    values: _0x41cb23 ?? _0x374374,
                    dataSource: _0x360346.dataSource,
                    sharingCount: _0x360346.sharingCount,
                    onCancel: () => _0x4e70ac("chart"),
                    onSubmit: (_0x45b79b, _0x5973c6) => {
                      if (
                        !_0x3b7879.updateData(
                          _0x4f4ee0,
                          _0x29d5fd,
                          _0x45b79b,
                          _0x5973c6,
                        )
                      ) {
                        _0x3cb2e3(
                          _0x2f782b.t("docs-chart-ui.updateChartFailed"),
                        );
                        return;
                      }
                      _0x3cb2e3(null);
                      let _0x329ef2 = _0x3b7879.getEditorState(
                        _0x4f4ee0,
                        _0x29d5fd,
                      );
                      (_0x21cfeb(_0x329ef2 ?? _0x360346),
                        _0x9ff153(
                          (_0x329ef2 == null ? undefined : _0x329ef2.values) ??
                            _0x45b79b,
                        ),
                        _0x2af68a(
                          (_0x329ef2 == null ? undefined : _0x329ef2.values) ??
                            _0x45b79b,
                        ),
                        _0x4e70ac("chart"));
                    },
                    onDataSourceSubmit: (_0x5cb4a6) => {
                      if (
                        !_0x3b7879.changeDataSource(
                          _0x4f4ee0,
                          _0x29d5fd,
                          _0x5cb4a6,
                        )
                      ) {
                        _0x3cb2e3(
                          _0x2f782b.t("docs-chart-ui.updateChartFailed"),
                        );
                        return;
                      }
                      (_0x3cb2e3(null),
                        _0x21cfeb(
                          _0x3b7879.getEditorState(_0x4f4ee0, _0x29d5fd) ??
                            _0x360346,
                        ),
                        _0x4e70ac("chart"));
                    },
                  })
                : _0x4b76ad("div", {
                    className:
                      "univer-flex\x20univer-size-full\x20univer-min-w-0\x20univer-gap-5",
                    children: [
                      _0x5943db("div", {
                        className:
                          "univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden",
                        children: _0x5943db(jr, {
                          values: _0x41cb23 ?? _0xbcf2e1,
                          chartType:
                            _0x542787 ?? _0x5c9b7b ?? _0x45fa9b.chartType,
                          context: _0x2aa264,
                          dataAggregation: _0x20931d,
                          style: _0x38824c,
                        }),
                      }),
                      _0x4b76ad("div", {
                        className:
                          "univer-flex\x20univer-min-h-0\x20univer-w-[388px]\x20univer-shrink-0\x20univer-flex-col\x20univer-gap-4\x20univer-overflow-hidden\x20univer-overscroll-contain",
                        children: [
                          _0x5943db("div", {
                            className: "univer-min-h-0\x20univer-flex-1",
                            children: _0x41eb83
                              ? _0x5943db(_0x528bde, {
                                  chartUIService: _0x182bfc,
                                  hostAdapter: _0x41eb83,
                                  children: _0x5943db(Sr, {
                                    initialRoute: _0x367589.route,
                                    onClose: _0x367589.onClose,
                                    onPreviewChartTypeChange: _0x136270,
                                    onModifyData: () => _0x4e70ac("data"),
                                  }),
                                })
                              : _0x5943db("div", {
                                  className:
                                    "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
                                  children: _0x2f782b.t(
                                    "docs-chart-ui.chartNotFound",
                                  ),
                                }),
                          }),
                          _0xf1fadb &&
                            _0x5943db("div", {
                              className:
                                "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
                              children: _0xf1fadb,
                            }),
                        ],
                      }),
                    ],
                  }),
              _0x187059 === "data" &&
                _0xf1fadb &&
                _0x5943db("div", {
                  className:
                    "univer-mt-2\x20univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
                  children: _0xf1fadb,
                }),
            ],
          }),
        ],
      });
}
const Ir = "doc-chart-editor-panel",
  Lr = "doc-chart-data-panel";
function G(_0x3391f1, _0x413bca) {
  var _0x4042e3;
  if (
    !(_0x413bca != null && _0x413bca.collapsed) ||
    _0x413bca.startOffset == null
  )
    return null;
  let _0x79ee44 = _0x413bca.segmentId ?? "";
  if (_0x79ee44 !== "") return null;
  let _0x31ebcd =
    (_0x4042e3 = _0x3391f1.getSelfOrHeaderFooterModel(_0x79ee44)) == null
      ? undefined
      : _0x4042e3.getBody();
  if (!_0x31ebcd) return null;
  let _0x130758 = Rr(_0x31ebcd, _0x413bca.startOffset);
  if (!zr(_0x31ebcd, _0x130758)) return null;
  let _0x1e2808 = Vr(_0x31ebcd, _0x130758);
  return _0x1e2808
    ? {
        unitId: _0x3391f1.getUnitId(),
        index: _0x1e2808.index,
        segmentId: _0x79ee44,
        breakOffsets: _0x1e2808.breakOffsets,
      }
    : null;
}
function Rr(_0x5e3942, _0x38b91f) {
  return _0x38b91f === 0 && _0x5e3942.dataStream[0] === _0x211bf6.PARAGRAPH
    ? 1
    : _0x38b91f;
}
function zr(_0x13466e, _0x25c532) {
  return !(
    Wr(_0x13466e.tables, _0x25c532) ||
    Gr(_0x13466e.blockRanges, _0x25c532) ||
    Kr(_0x13466e.customBlocks, _0x25c532)
  );
}
function Br(_0x539b94, _0x38e4c8) {
  let { dataStream: _0x57c70a } = _0x539b94;
  if (!_0x57c70a || _0x38e4c8 < 0 || _0x38e4c8 >= _0x57c70a.length)
    return false;
  let _0x3f167c = Hr(_0x57c70a, _0x38e4c8) + 1,
    _0x2ed8d9 = Ur(_0x57c70a, _0x38e4c8);
  return (
    _0x3f167c <= _0x2ed8d9 && _0x57c70a.slice(_0x3f167c, _0x2ed8d9).length === 0
  );
}
function Vr(_0x3fa9fe, _0x3a3c7e) {
  let { dataStream: _0x2c679c } = _0x3fa9fe;
  if (!_0x2c679c || _0x3a3c7e < 0 || _0x3a3c7e >= _0x2c679c.length) return null;
  if (Br(_0x3fa9fe, _0x3a3c7e)) return { index: _0x3a3c7e, breakOffsets: [] };
  let _0x5718f3 = Hr(_0x2c679c, _0x3a3c7e) + 1,
    _0xaf38f9 = Ur(_0x2c679c, _0x3a3c7e);
  return _0x3a3c7e <= _0x5718f3
    ? { index: _0x3a3c7e, breakOffsets: [_0x3a3c7e] }
    : _0x3a3c7e >= _0xaf38f9
      ? { index: _0x3a3c7e + 1, breakOffsets: [_0x3a3c7e] }
      : { index: _0x3a3c7e + 1, breakOffsets: [_0x3a3c7e, _0x3a3c7e + 1] };
}
function Hr(_0x405e3d, _0x7b0f6c) {
  let _0x232758 = Math.max(0, Math.min(_0x7b0f6c - 1, _0x405e3d.length - 1));
  return Math.max(
    _0x405e3d.lastIndexOf(_0x211bf6.PARAGRAPH, _0x232758),
    _0x405e3d.lastIndexOf(_0x211bf6.SECTION_BREAK, _0x232758),
  );
}
function Ur(_0x39534f, _0x4c4ec9) {
  let _0xf68315 = Math.max(0, Math.min(_0x4c4ec9, _0x39534f.length - 1)),
    _0xf31af7 = _0x39534f.indexOf(_0x211bf6.PARAGRAPH, _0xf68315),
    _0x50af9c = _0x39534f.indexOf(_0x211bf6.SECTION_BREAK, _0xf68315);
  return _0xf31af7 === -1 && _0x50af9c === -1
    ? _0x39534f.length
    : _0xf31af7 === -1
      ? _0x50af9c
      : _0x50af9c === -1
        ? _0xf31af7
        : Math.min(_0xf31af7, _0x50af9c);
}
function Wr(_0x5c9180, _0x9ac9f4) {
  return !!(
    _0x5c9180 != null &&
    _0x5c9180.some(
      (_0x3e3163) =>
        _0x3e3163.startIndex <= _0x9ac9f4 && _0x9ac9f4 < _0x3e3163.endIndex,
    )
  );
}
function Gr(_0x2837a1, _0x1ab6aa) {
  return !!(
    _0x2837a1 != null &&
    _0x2837a1.some(
      (_0x5e2a85) =>
        _0x5e2a85.startIndex <= _0x1ab6aa && _0x1ab6aa <= _0x5e2a85.endIndex,
    )
  );
}
function Kr(_0x15b57d, _0x25c931) {
  return !!(
    _0x15b57d != null &&
    _0x15b57d.some((_0x5188b2) => _0x5188b2.startIndex === _0x25c931)
  );
}
let K = class {
  constructor(_0x35688e, _0x21f83d, _0x50832b, _0x44ff4e) {
    ((this._instanceService = _0x35688e),
      (this._commandService = _0x21f83d),
      (this._docSelectionManagerService = _0x50832b),
      (this._docContentInsertService = _0x44ff4e));
  }
  insertChartFromText(_0x10d484, _0x310375, _0x96fae3) {
    let _0x4fcff2 = _0x149b54(_0x10d484);
    return (
      _0x4fcff2.length !== 0 &&
      this.insertChart(_0x4fcff2, _0x310375, _0x96fae3)
    );
  }
  insertChart(_0x39b2c1, _0x1f1fe9, _0x15112e = {}) {
    if (_0x39b2c1.length === 0) return false;
    let _0x48587b = _0x376c5a(_0x1f1fe9, _0x39b2c1);
    if (!_0x48587b.ok) return false;
    let _0x3588e1 = this._instanceService["getCurrentUnitOfType"](
      _0x53698d.UNIVER_DOC,
    );
    if (!_0x3588e1) return false;
    let _0x580343 = this._resolveInsertPosition(
      _0x3588e1,
      _0x15112e.insertRange,
    );
    if (
      !_0x580343 ||
      !this._prepareStandaloneInsertLine(
        _0x580343.breakOffsets,
        _0x580343.segmentId,
      )
    )
      return false;
    let _0x1cee00 = _0x580343.unitId,
      _0x747d32 = { chartType: _0x1f1fe9 };
    (_0x15112e.context && (_0x747d32.context = _0x15112e.context),
      _0x15112e.dataAggregation &&
        (_0x747d32.dataAggregation = _0x15112e.dataAggregation),
      _0x15112e.style && (_0x747d32.style = _0x15112e.style));
    let _0x306d94 = this._commandService["syncExecuteCommand"](_0x43d0a3.id, {
      unitId: _0x1cee00,
      textRange: {
        startOffset: _0x580343.index,
        endOffset: _0x580343.index,
        collapsed: true,
        segmentId: _0x580343.segmentId,
      },
      chart: _0x747d32,
      dataSource: _0x15112e.dataSource ?? { values: _0x48587b.values },
      width: _0x15112e.width,
      height: _0x15112e.height,
      focus: _0x15112e.focus,
    });
    return _0x306d94 ? { ..._0x306d94, unitId: _0x1cee00 } : false;
  }
  _resolveInsertPosition(_0x3db2aa, _0x5a586f) {
    if (_0x5a586f) return G(_0x3db2aa, _0x5a586f);
    let _0x46613f = _0x3db2aa.getUnitId(),
      _0x1a778e = null;
    try {
      _0x1a778e =
        this._docContentInsertService["consumeInsertRange"](_0x46613f);
    } catch {
      _0x1a778e = null;
    }
    return _0x1a778e
      ? G(_0x3db2aa, {
          startOffset: _0x1a778e.startOffset,
          endOffset: _0x1a778e.endOffset,
          collapsed: _0x1a778e.startOffset === _0x1a778e.endOffset,
          segmentId: _0x1a778e.segmentId ?? "",
        })
      : G(
          _0x3db2aa,
          qr(this._docSelectionManagerService["getActiveTextRange"]()),
        );
  }
  _prepareStandaloneInsertLine(_0xd7e79d, _0x50a4b0) {
    for (let _0x23ee01 of _0xd7e79d)
      if (
        !this._commandService["syncExecuteCommand"](_0x498668.id, {
          textRange: {
            startOffset: _0x23ee01,
            endOffset: _0x23ee01,
            collapsed: true,
            segmentId: _0x50a4b0,
          },
        })
      )
        return false;
    return true;
  }
};
K = B(
  [
    z(0, _0x14b502),
    z(1, _0x1382c0),
    z(2, _0x59e556(_0x9a95a1)),
    z(3, _0x59e556(_0x276717)),
  ],
  K,
);
function qr(_0x1a5790) {
  return !_0x1a5790 || typeof _0x1a5790 != "object" ? null : _0x1a5790;
}
const Jr = "doc-chart.insert-panel",
  Yr = ["Category\x09Value", "A\x0912", "B\t18", "C\t9"].join("\x0a");
function Xr(_0x50eb3c) {
  let _0x4afee2 = _0x100c8b(K),
    _0x2bdf34 = _0x100c8b(_0x31aad9),
    {
      defaultChartType: _0x221bbd = _0x5584cb.Column,
      defaultTableText: _0x48dcae = Yr,
      insertOptions: _0x474ae8,
      onCancel: _0x1d69b3,
      onInserted: _0x279d6b,
    } = _0x50eb3c,
    _0x52a77b = _0x1df613(
      () =>
        _0x2a3208(
          _0x250a50.map((_0x21757e) => ({
            ..._0x21757e,
            label: _0x2bdf34.t("docs-chart-ui.chartTypes." + _0x21757e.labelId),
          })),
        ),
      [_0x2bdf34],
    ),
    [_0x17700e, _0x5691ab] = _0x5a497e(String(_0x221bbd)),
    _0x184a02 = _0x52a77b.find((_0x50c224) => _0x50c224.value === _0x17700e),
    _0x38267d =
      (_0x184a02 == null ? undefined : _0x184a02.chartType) ?? _0x221bbd,
    _0x4b88d6 = (_0x2f6dfa) =>
      _0x1e89a4(_0x2f6dfa, {
        candlestickClose: _0x2bdf34.t("docs-chart-ui.candlestick.close"),
        candlestickHigh: _0x2bdf34.t("docs-chart-ui.candlestick.high"),
        candlestickLow: _0x2bdf34.t("docs-chart-ui.candlestick.low"),
        candlestickOpen: _0x2bdf34.t("docs-chart-ui.candlestick.open"),
        category: _0x2bdf34.t("docs-chart-ui.common.category"),
        chordSource: _0x2bdf34.t("docs-chart-ui.chord.source"),
        chordTarget: _0x2bdf34.t("docs-chart-ui.chord.target"),
        label: _0x2bdf34.t("docs-chart-ui.common.label"),
        sunburstHierarchy: _0x2bdf34.t("docs-chart-ui.sunburst.hierarchy"),
        value: _0x2bdf34.t("docs-chart-ui.common.value"),
        valueField: _0x2bdf34.t("docs-chart-ui.common.valueField"),
      }),
    [_0x12e034, _0x5f52f6] = _0x5a497e(() =>
      _0x50eb3c.defaultTableText === undefined
        ? (_0x4b88d6(_0x221bbd) ?? _0x149b54(_0x48dcae))
        : _0x149b54(_0x48dcae),
    ),
    [_0x1fa81a, _0x11691b] = _0x5a497e("inline"),
    [_0x2972e0, _0x3583db] = _0x5a497e(null),
    [_0x1ed4a5, _0xbdff94] = _0x5a497e([]),
    [_0xe0823c, _0x1d3df1] = _0x5a497e(null),
    _0x52179e = {
      [_0x2ef0db.UnknownOption]: _0x2bdf34.t(
        "docs-chart-ui.common.insertChartFailed",
      ),
      [_0x2ef0db.EmptyData]: _0x2bdf34.t("docs-chart-ui.common.tableDataEmpty"),
      [_0x2ef0db.InvalidCandlestickData]: _0x2bdf34.t(
        "docs-chart-ui.candlestick.columnsError",
      ),
    };
  return _0x4b76ad("div", {
    className:
      "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    children: [
      _0x4b76ad("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [
          _0x5943db("div", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x2bdf34.t("docs-chart-ui.common.chartType"),
          }),
          _0x5943db(_0x2ca5cc, {
            className: "univer-w-full !univer-min-w-0",
            value: _0x17700e,
            options: _0x52a77b,
            onChange: (_0x95ccad) => {
              var _0x44812d;
              _0x5691ab(_0x95ccad);
              let _0x476809 =
                  ((_0x44812d = _0x52a77b.find(
                    (_0x26f311) => _0x26f311.value === _0x95ccad,
                  )) == null
                    ? undefined
                    : _0x44812d.chartType) ?? Number(_0x95ccad),
                _0x2b038a = _0x4b88d6(_0x476809);
              _0x2b038a && _0x5f52f6(_0x2b038a);
            },
          }),
        ],
      }),
      _0x5943db(_0xf5c8be, {
        mode: _0x1fa81a,
        inlineContent: _0x5943db(_0x183a29, {
          values: _0x12e034,
          minColumns: _0x48dc00(_0x38267d),
          parsePastedText: _0x149b54,
          onChange: _0x5f52f6,
        }),
        onModeChange: (_0x829d16) => {
          (_0x11691b(_0x829d16), _0x3583db(null), _0xbdff94([]));
        },
        onPreviewChange: (_0x2f205d, _0x59886c) => {
          _0x2f205d && _0x59886c.status === _0x600d07.READY && _0x59886c.values
            ? (_0x3583db({ source: _0x2f205d }),
              _0xbdff94(_0x59886c.values["map"]((_0xde79e6) => [..._0xde79e6])))
            : (_0x3583db(null), _0xbdff94([]));
        },
      }),
      _0xe0823c &&
        _0x5943db("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0xe0823c,
        }),
      _0x4b76ad("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x1d69b3 &&
            _0x5943db(_0x43492a, {
              type: "button",
              variant: "default",
              onClick: _0x1d69b3,
              children: _0x2bdf34.t("docs-chart-ui.common.cancel"),
            }),
          _0x5943db(_0x43492a, {
            type: "button",
            variant: "primary",
            disabled: _0x1fa81a === "referenced" && !_0x2972e0,
            onClick: () => {
              var _0x4ffd36;
              let _0xf81d53 = _0xeb2ff6({
                optionId: _0x17700e,
                values: _0x1fa81a === "referenced" ? _0x1ed4a5 : _0x12e034,
              });
              if (!_0xf81d53.ok) {
                _0x1d3df1(_0x52179e[_0xf81d53.issue["code"]]);
                return;
              }
              let _0x270ac7 =
                  _0x1fa81a === "referenced" && _0x2972e0
                    ? { ..._0x474ae8, dataSource: _0x2972e0 }
                    : _0x474ae8,
                _0x478ea8 = _0xf81d53.plan["style"]
                  ? {
                      ..._0x270ac7,
                      style: {
                        ...(_0x270ac7 == null ? undefined : _0x270ac7.style),
                        pie: {
                          ...(_0x270ac7 == null ||
                          (_0x4ffd36 = _0x270ac7.style) == null
                            ? undefined
                            : _0x4ffd36.pie),
                          ..._0xf81d53.plan["style"].pie,
                        },
                      },
                    }
                  : _0x270ac7,
                _0x3bd798 = _0x4afee2.insertChart(
                  _0xf81d53.plan["values"],
                  _0xf81d53.plan["chartType"],
                  _0x478ea8,
                );
              if (!_0x3bd798) {
                _0x1d3df1(
                  _0x2bdf34.t("docs-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x1d3df1(null), _0x279d6b == null || _0x279d6b(_0x3bd798));
            },
            children: _0x2bdf34.t("docs-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
const Zr = "docs-chart-ui.config",
  Qr = {},
  $r = "__docsChartResource";
let q = class extends _0x4d5f24 {
  constructor(_0x2ef1ab, _0x4207ef, _0x1481a8) {
    (super(),
      (this._docClipboardService = _0x2ef1ab),
      (this._pasteAdapterService = _0x4207ef),
      (this._resourceService = _0x1481a8),
      this._initClipboardHooks());
  }
  _initClipboardHooks() {
    (this.disposeWithMe(
      this._docClipboardService["addClipboardHook"]({
        onCopyDocData: (_0x2af509, _0x5170ca) =>
          this._appendChartResources(_0x2af509, _0x5170ca.sourceDocuments),
      }),
    ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x2d7879) =>
            this._getPasteMutationInfos(_0x2d7879),
        }),
      ));
  }
  _appendChartResources(_0x2d20d7, _0x1307b8) {
    var _0x5b2423;
    let _0x1e96d1 =
      (_0x5b2423 = _0x1307b8[0]) == null ? undefined : _0x5b2423.id;
    if (!_0x1e96d1) return _0x2d20d7;
    let _0x15717f = Object.values(_0x2d20d7.drawings ?? {}).filter(
      (_0x2c1ea1) => this._isDocChartDrawing(_0x2c1ea1),
    );
    if (_0x15717f.length === 0) return _0x2d20d7;
    let _0x420688 = { version: _0xa8459c, dataSources: {}, charts: {} };
    return (
      _0x15717f.forEach((_0xe403db) => {
        let _0x436ad5 = this._resourceService["getChart"](
          _0x1e96d1,
          _0xe403db.chartId,
        );
        if (!_0x436ad5) return;
        let _0x196c7e = this._resourceService["getDataSource"](
          _0x1e96d1,
          _0x436ad5.dataSourceId,
        );
        _0x196c7e &&
          ((_0x420688.charts[_0x436ad5.id] = _0x50b036.deepClone(_0x436ad5)),
          (_0x420688.dataSources[_0x196c7e.id] = _0x196c7e));
      }),
      Object.keys(_0x420688.charts).length === 0
        ? _0x2d20d7
        : { ..._0x2d20d7, [$r]: _0x420688 }
    );
  }
  _getPasteMutationInfos(_0x433993) {
    let _0x31c252 = _0x433993.doc[$r];
    if (!_0x31c252) return { redoMutations: [], undoMutations: [] };
    let _0x283405 = new Map(),
      _0x7ea8e0 = [],
      _0x1f56bd = [],
      _0x1d2ca2 = [],
      _0x5ae453 = [];
    return (
      _0x433993.customBlockMappings["forEach"]((_0x5419d0) => {
        if (
          !this._isDocChartDrawing(_0x5419d0.sourceDrawing) ||
          !this._isDocChartDrawing(_0x5419d0.targetDrawing)
        )
          return;
        let _0x24ae2f = _0x31c252.charts[_0x5419d0.sourceDrawing["chartId"]];
        if (!_0x24ae2f) return;
        let _0x45c0e7 = _0x31c252.dataSources[_0x24ae2f.dataSourceId];
        if (!_0x45c0e7) return;
        let _0xfd5b2 = this._getOrCreatePastedDataSourceId(
            _0x433993.unitId,
            _0x45c0e7,
            _0x283405,
            _0x7ea8e0,
            _0x1f56bd,
          ),
          _0xfb0c9d = _0x235645(),
          _0x1c0bf6 = { ..._0x24ae2f, id: _0xfb0c9d, dataSourceId: _0xfd5b2 };
        ((_0x5419d0.targetDrawing["chartId"] = _0xfb0c9d),
          _0x1d2ca2.push({
            id: _0x33853d.id,
            params: { unitId: _0x433993.unitId, chart: _0x1c0bf6 },
          }),
          _0x5ae453.push({
            id: _0x238fb1.id,
            params: { unitId: _0x433993.unitId, chartId: _0xfb0c9d },
          }));
      }),
      {
        redoMutations: [..._0x7ea8e0, ..._0x1d2ca2],
        undoMutations: [..._0x5ae453, ..._0x1f56bd],
      }
    );
  }
  _getOrCreatePastedDataSourceId(
    _0x10fab9,
    _0x917a8d,
    _0x390e13,
    _0x55ca1a,
    _0x153dcf,
  ) {
    let _0x167982 = _0x390e13.get(_0x917a8d.id);
    if (_0x167982) return _0x167982;
    let _0x50fb55 = _0x235645();
    return (
      _0x390e13.set(_0x917a8d.id, _0x50fb55),
      _0x55ca1a.push({
        id: _0x30d8e2.id,
        params: {
          unitId: _0x10fab9,
          dataSource: { ..._0x917a8d, id: _0x50fb55 },
        },
      }),
      _0x153dcf.push({
        id: _0x209ef3.id,
        params: { unitId: _0x10fab9, dataSourceId: _0x50fb55 },
      }),
      _0x50fb55
    );
  }
  _isDocChartDrawing(_0x3f8e8b) {
    let _0x286dbd = _0x3f8e8b;
    return (
      (_0x286dbd == null ? undefined : _0x286dbd.drawingType) ===
        _0x378d12.DRAWING_CHART && typeof _0x286dbd.chartId == "string"
    );
  }
};
q = B(
  [
    z(0, _0x59e556(_0x53c661)),
    z(1, _0x59e556(_0x2450ec)),
    z(2, _0x59e556(_0x3c1b80)),
  ],
  q,
);
let J = class extends _0x4d5f24 {
  constructor(_0x1e0dea, _0x10bef0, _0x574bdc, _0x4550d1) {
    (super(),
      (this._drawingAdapterService = _0x1e0dea),
      (this._floatingToolbarAdapterService = _0x10bef0),
      (this._resourceService = _0x574bdc),
      (this._localeService = _0x4550d1),
      this._initAdapter());
  }
  _initAdapter() {
    (this.disposeWithMe(
      this._drawingAdapterService["registerAdapter"]({
        getEditDrawingCommandInfo: ({
          unitId: _0x388dce,
          drawing: _0x187f14,
        }) => {
          let _0x28f89f = ei(_0x187f14);
          return _0x28f89f
            ? {
                label: this._localeService["t"](
                  "docs-chart-ui.common.editChart",
                ),
                commandId: R.id,
                commandParams: {
                  unitId: _0x388dce,
                  chartId: _0x28f89f.chartId,
                  drawingId: _0x28f89f.drawingId,
                },
              }
            : null;
        },
      }),
    ),
      this.disposeWithMe(
        this._floatingToolbarAdapterService["registerAdapter"]({
          getItems: ({
            unitId: _0x49778b,
            subUnitId: _0xa571fc,
            drawing: _0x5e10ba,
          }) => {
            var _0x46b001;
            let _0x380f3e = ei(_0x5e10ba);
            if (!_0x380f3e) return null;
            let _0x1c5c89 = this._resourceService["getChart"](
                _0x49778b,
                _0x380f3e.chartId,
              ),
              _0x25513e =
                (_0x1c5c89 == null ? undefined : _0x1c5c89.chartType) ??
                _0x5584cb.Column,
              _0x48550c = _0x250a50.map((_0x9cf904) => ({
                value:
                  "id" in _0x9cf904 ? _0x9cf904.id : String(_0x9cf904.value),
                chartType: _0x9cf904.value,
                ...("pieSecondaryPlotType" in _0x9cf904
                  ? { pieSecondaryPlotType: _0x9cf904.pieSecondaryPlotType }
                  : {}),
                icon: _0x9cf904.iconName,
                label: this._localeService["t"](
                  "docs-chart-ui.chartTypes." + _0x9cf904.labelId,
                ),
              })),
              _0x4b8588 = _0xb39713(
                _0x25513e,
                _0x1c5c89 == null || (_0x46b001 = _0x1c5c89.style) == null
                  ? undefined
                  : _0x46b001.pie,
                _0x48550c,
              );
            return [
              {
                type: "select",
                label: this._localeService["t"](
                  "docs-chart-ui.common.chartType",
                ),
                index: 0,
                commandId: _0x1945d6.id,
                commandParamsFactory: (_0x59166a) => {
                  var _0x2f305f, _0x1e75c2;
                  let _0xbb82a = _0x48550c.find(
                      (_0x8d1005) => _0x8d1005.value === _0x59166a,
                    ),
                    _0x547251 =
                      (_0xbb82a == null ? undefined : _0xbb82a.chartType) ??
                      Number(_0x59166a),
                    _0x3d0f31 =
                      _0x1c5c89 == null ||
                      (_0x2f305f = _0x1c5c89.style) == null ||
                      (_0x2f305f = _0x2f305f.pie) == null
                        ? undefined
                        : _0x2f305f.composite,
                    _0x5ea9b1 =
                      (_0x547251 === _0x5584cb.Pie ||
                        _0x547251 === _0x5584cb.Doughnut) &&
                      typeof (_0x1c5c89 == null ||
                      (_0x1e75c2 = _0x1c5c89.style) == null ||
                      (_0x1e75c2 = _0x1e75c2.pie) == null
                        ? undefined
                        : _0x1e75c2.doughnutHole) == "number",
                    _0x5c373d = _0x5ea9b1 ? { doughnutHole: null } : {},
                    _0x209730 = {
                      unitId: _0x49778b,
                      chartId: _0x380f3e.chartId,
                      chartType: _0x547251,
                    };
                  if (_0xbb82a != null && _0xbb82a.pieSecondaryPlotType) {
                    var _0x11bd47;
                    return {
                      ..._0x209730,
                      style: {
                        ...(_0x1c5c89 == null ? undefined : _0x1c5c89.style),
                        pie: {
                          ...(_0x1c5c89 == null ||
                          (_0x11bd47 = _0x1c5c89.style) == null
                            ? undefined
                            : _0x11bd47.pie),
                          ..._0x5c373d,
                          composite: {
                            ..._0x3d0f31,
                            enabled: true,
                            secondaryPlot: {
                              ...(_0x3d0f31 == null
                                ? undefined
                                : _0x3d0f31.secondaryPlot),
                              type: _0xbb82a.pieSecondaryPlotType,
                            },
                          },
                        },
                      },
                    };
                  }
                  if (_0x547251 === _0x5584cb.Pie && _0x3d0f31) {
                    var _0xbb87b5;
                    return {
                      ..._0x209730,
                      style: {
                        ...(_0x1c5c89 == null ? undefined : _0x1c5c89.style),
                        pie: {
                          ...(_0x1c5c89 == null ||
                          (_0xbb87b5 = _0x1c5c89.style) == null
                            ? undefined
                            : _0xbb87b5.pie),
                          ..._0x5c373d,
                          composite: { ..._0x3d0f31, enabled: false },
                        },
                      },
                    };
                  }
                  return _0x5ea9b1
                    ? { ..._0x209730, style: { pie: _0x5c373d } }
                    : _0x209730;
                },
                disable: !_0x1c5c89,
                value: _0x4b8588,
                options: _0x48550c,
              },
              {
                type: "button",
                label: this._localeService["t"](
                  "docs-chart-ui.common.editChart",
                ),
                index: 1,
                commandId: R.id,
                commandParams: {
                  unitId: _0x49778b,
                  chartId: _0x380f3e.chartId,
                  drawingId: _0x380f3e.drawingId,
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
                commandId: _0x1bd10e.id,
                commandParams: {
                  unitId: _0x49778b,
                  drawings: [
                    {
                      unitId: _0x49778b,
                      subUnitId: _0xa571fc,
                      drawingId: _0x380f3e.drawingId,
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
J = B(
  [
    z(0, _0x3d2ddc),
    z(1, _0x59e556(_0x2b88ad)),
    z(2, _0x59e556(_0x3c1b80)),
    z(3, _0x59e556(_0x31aad9)),
  ],
  J,
);
function ei(_0x552fdd) {
  let _0x4846e5 = _0x552fdd;
  return (_0x4846e5 == null ? undefined : _0x4846e5.drawingType) ===
    _0x378d12.DRAWING_CHART && typeof _0x4846e5.chartId == "string"
    ? _0x4846e5
    : null;
}
const ti = _0x1a2c54("doc-chart.snapshot-renderer");
var ni = class {
  constructor(_0x27c4c4, _0x2e8d1f) {
    ((this._renderService = _0x27c4c4), (this._renderModelManager = _0x2e8d1f));
  }
  async render(_0x3758ad, _0x1f1f11) {
    if (typeof document > "u")
      throw TypeError(
        "Document\x20chart\x20snapshot\x20rendering\x20requires\x20a\x20browser\x20document.",
      );
    let { chartConfig: _0x402e6b, chartStyle: _0x3c08d3 } =
      this._renderService["createRenderInput"](_0x1f1f11);
    if (_0x3758ad.format === _0x1278db.SVG)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x1f1f11.chartId,
            config: _0x402e6b,
            style: _0x3c08d3,
            width: _0x3758ad.width,
            height: _0x3758ad.height,
          },
          { format: _0x3758ad.format },
        )
      ).dataUrl;
    let _0x29c85c = new _0x16381e(_0x1f1f11.chartId, {
        width: _0x3758ad.width,
        height: _0x3758ad.height,
      }),
      _0x4cba9b = this._renderService["createChartInstance"](_0x405a90.Image);
    try {
      (_0x4cba9b.bind(_0x29c85c),
        await _0x4cba9b.render({
          chartId: _0x1f1f11.chartId,
          config: _0x402e6b,
          style: _0x3c08d3,
        }));
      let _0x40f45c = _0x29c85c.getDataUrl();
      if (!_0x40f45c)
        throw Error(
          "Failed\x20to\x20render\x20document\x20chart\x20snapshot:\x20" +
            _0x1f1f11.unitId +
            "/" +
            _0x1f1f11.chartId,
        );
      return _0x40f45c;
    } finally {
      (_0x4cba9b.dispose(), _0x29c85c.dispose());
    }
  }
};
let Y = class extends _0x58faaa {
  constructor(_0x4784e6, _0x5410de, _0x25fe63, _0x386a93, _0x1e5aa3) {
    super(_0x4784e6, _0x5410de, _0x1e5aa3 ?? new ni(_0x25fe63, _0x386a93));
  }
  getCacheKey(_0x2d7eca) {
    let _0x591193 = super.getCacheKey(_0x2d7eca);
    return _0x2d7eca.format === _0x1278db.SVG
      ? _0x591193 + "::" + _0x2d7eca.format
      : _0x591193;
  }
};
Y = B(
  [
    z(0, _0x59e556(_0x31aad9)),
    z(1, _0x59e556(_0x991352)),
    z(2, _0x59e556(W)),
    z(3, _0x103c76),
    z(4, _0x7651d1(ti)),
  ],
  Y,
);
let ri = class extends _0x4d5f24 {
  constructor(_0x413190, _0x735595) {
    (super(),
      (this._snapshotService = _0x413190),
      (this._modelService = _0x735595),
      U(this, "_runtimeStateSubscriptions", new Map()),
      this._listenRuntimeData());
  }
  _listenRuntimeData() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x1812ed) =>
        this._bindRuntimeState(_0x1812ed),
      ),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x1a00bc) =>
          this._releaseRuntimeState(_0x1a00bc),
        ),
      ),
      this.disposeWithMe(
        _0x5abd00(() => {
          (this._runtimeStateSubscriptions["forEach"](
            ({ subscription: _0x23be61 }) => _0x23be61.unsubscribe(),
          ),
            this._runtimeStateSubscriptions["clear"]());
        }),
      ));
  }
  _bindRuntimeState(_0x4efed8) {
    if (this._runtimeStateSubscriptions["has"](_0x4efed8)) return;
    let _0x5865fa = _0x4efed8.model["config"] == null ? 0 : 1,
      _0xb8d427 = _0x4aab1a([
        _0x4efed8.model["config$"].pipe(
          _0xc4e194((_0x23d515) => _0x23d515 != null),
        ),
        _0x4efed8.model["style$"],
      ])
        .pipe(_0x56cc66(_0x5865fa), _0x434d05(0))
        .subscribe(() =>
          this._snapshotService["invalidateChart"](
            _0x4efed8.unitId,
            _0x4efed8.chartId,
          ),
        );
    this._runtimeStateSubscriptions["set"](_0x4efed8, {
      subscription: _0xb8d427,
    });
  }
  _releaseRuntimeState(_0x38b7fc) {
    var _0x17d515;
    ((_0x17d515 = this._runtimeStateSubscriptions["get"](_0x38b7fc)) == null ||
      _0x17d515.subscription["unsubscribe"](),
      this._runtimeStateSubscriptions["delete"](_0x38b7fc));
  }
};
ri = B([z(0, _0x59e556(Y)), z(1, _0x59e556(_0x991352))], ri);
const X = L.id,
  ii = X + ".below";
function ai(_0x1456e8) {
  return _0x4aab1a([_0xdb6fc5(_0x1456e8), oi(_0x1456e8)]).pipe(
    _0x3f2b7a(([_0x374a8c, _0x529b48]) => _0x374a8c || _0x529b48),
  );
}
function oi(_0x28c3b8) {
  let _0x5d39e5 = _0x28c3b8.get(_0x9a95a1),
    _0x46180c = _0x28c3b8.get(_0x14b502);
  return new _0x16386f((_0x40c6a1) => {
    let _0x147d00 = (_0x46a875) => {
      let _0x176e41 = _0x46180c.getCurrentUnitOfType(_0x53698d.UNIVER_DOC);
      if (!_0x176e41) {
        _0x40c6a1.next(true);
        return;
      }
      let _0xd08fcb = _0x176e41.getUnitId(),
        _0x7a59fa =
          (_0x46a875 == null ? undefined : _0x46a875.unitId) === _0xd08fcb
            ? (_0x46a875.textRanges ?? [])
            : [
                ...(_0x5d39e5.getTextRanges({
                  unitId: _0xd08fcb,
                  subUnitId: _0xd08fcb,
                }) ?? []),
              ];
      if (_0x7a59fa.length !== 1) {
        _0x40c6a1.next(true);
        return;
      }
      let _0x2655c7 =
        _0x7a59fa.find((_0x3e25c4) => _0x3e25c4.isActive) ?? _0x7a59fa[0];
      if (!_0x2655c7 || !_0x2655c7.collapsed || _0x2655c7.startOffset == null) {
        _0x40c6a1.next(true);
        return;
      }
      let _0x4c36c9 = G(_0x176e41, {
        ..._0x2655c7,
        segmentId:
          _0x2655c7.segmentId ??
          (_0x46a875 == null ? undefined : _0x46a875.segmentId) ??
          "",
      });
      _0x40c6a1.next(_0x4c36c9 == null);
    };
    _0x147d00();
    let _0x405e9d = _0x5d39e5.textSelection$["subscribe"]((_0x1d6371) =>
      _0x147d00(_0x1d6371),
    );
    return () => _0x405e9d.unsubscribe();
  });
}
function si(_0x3b85c2) {
  return Z(_0x3b85c2);
}
function Z(_0x3ea112) {
  let _0x3deb02 = _0x3ea112
    .get(_0x31aad9)
    .t("docs-chart-ui.common.insertChart");
  return {
    id: X,
    commandId: L.id,
    type: _0x511f53.BUTTON,
    icon: "ChartIcon",
    title: _0x3deb02,
    tooltip: _0x3deb02,
    disabled$: ai(_0x3ea112),
    hidden$: _0x63cccb(_0x3ea112, _0x53698d.UNIVER_DOC),
  };
}
function ci(_0x38888a) {
  let _0x1d730f = _0x38888a
    .get(_0x31aad9)
    .t("docs-chart-ui.common.insertChart");
  return {
    id: ii,
    commandId: L.id,
    type: _0x511f53.BUTTON,
    icon: "ChartIcon",
    title: _0x1d730f,
    tooltip: _0x1d730f,
    disabled$: ai(_0x38888a),
    hidden$: _0x63cccb(_0x38888a, _0x53698d.UNIVER_DOC),
  };
}
const li = {
  [_0x24b51d.MEDIA]: { [X]: { order: 2.5, menuItemFactory: si } },
  [_0x4698f0.PARAGRAPH]: {
    [_0x2e4e77.LAYOUT]: {
      [_0x103531]: { [X]: { order: 4.5, menuItemFactory: Z } },
    },
    [_0x3a7e39]: {
      [_0x2e4e77.LAYOUT]: { [X]: { order: 5.5, menuItemFactory: Z } },
    },
    [_0x267cdf]: {
      [_0x2e4e77.LAYOUT]: { [X]: { order: 4.5, menuItemFactory: Z } },
    },
    [_0x4cf753]: { insert: { [X]: { order: 1.5, menuItemFactory: Z } } },
    [_0x37cb90]: { insert: { [ii]: { order: 1.5, menuItemFactory: ci } } },
  },
};
var ui = "@univerjs-pro/docs-chart-ui",
  di = "1.0.0-insiders.20260907-70fc579",
  fi = class extends _0x508873 {
    constructor(..._0x5647ac) {
      (super(..._0x5647ac), U(this, "_imageContentHidden", false));
    }
    get imageContentHidden() {
      return this._imageContentHidden;
    }
    setImageContentHidden(_0x140eaf) {
      this._imageContentHidden !== _0x140eaf &&
        ((this._imageContentHidden = _0x140eaf), this.makeDirty(true));
    }
    _draw(_0x35b3ee, _0x39692f, _0x32b8f4, _0x25121b) {
      this._imageContentHidden ||
        super._draw(_0x35b3ee, _0x39692f, _0x32b8f4, _0x25121b);
    }
  };
const pi = {
  ..._0x4d8a5a,
  rotateEnabled: false,
  keepRatio: false,
  moveBoundaryEnabled: false,
};
let mi = class extends _0x4d5f24 {
  constructor(_0x5efcb4, _0x1f9ad8, _0x1f87f8) {
    (super(),
      (this._drawingManagerService = _0x5efcb4),
      (this._renderManagerService = _0x1f9ad8),
      (this._snapshotRenderService = _0x1f87f8),
      U(this, "_activeDomReadyDrawingKeys", new Set()),
      this._init());
  }
  setActiveDomReady(_0x8431b8, _0x5ec191) {
    let _0x1d85ae = _0x495acf(_0x8431b8);
    (_0x5ec191
      ? this._activeDomReadyDrawingKeys["add"](_0x1d85ae)
      : this._activeDomReadyDrawingKeys["delete"](_0x1d85ae),
      this._syncRenderedChartVisibility(_0x8431b8));
  }
  _init() {
    (this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0x1a405a) => {
        this._requestSnapshotsForSearches(_0x1a405a);
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["refreshTransform$"].subscribe(
          (_0x5b008d) => {
            this._requestSnapshotsForSearches(_0x5b008d);
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x41746a) => {
          this._removeRenderedCharts(_0x41746a);
        }),
      ),
      this.disposeWithMe(
        this._snapshotRenderService["chartInvalidated$"].subscribe(
          ({ unitId: _0xbbc08e, chartId: _0x4fb1ea }) => {
            this._requestSnapshotsForUnit(_0xbbc08e, _0x4fb1ea);
          },
        ),
      ),
      this.disposeWithMe(
        this._snapshotRenderService["snapshotUpdated$"].subscribe(
          (_0x4c3036) => {
            if (_0x4c3036.status !== "ready" || !_0x4c3036.dataUrl) return;
            let [_0x30b99e, _0x2cb3a2] = _0x4c3036.key["split"]("::");
            !_0x30b99e ||
              !_0x2cb3a2 ||
              this._renderCharts(_0x30b99e, _0x2cb3a2, _0x4c3036.dataUrl);
          },
        ),
      ));
  }
  _requestSnapshotsForSearches(_0xb10c7a) {
    _0xb10c7a.forEach((_0x508643) => {
      let _0x41baa7 = this._getChartDrawing(_0x508643);
      _0x41baa7 && this._requestSnapshot(_0x41baa7);
    });
  }
  _requestSnapshotsForUnit(_0x30baef, _0x235e36) {
    this._forEachChartDrawing(_0x30baef, (_0x1f321c) => {
      (_0x235e36 == null || _0x1f321c.chartId === _0x235e36) &&
        this._requestSnapshot(_0x1f321c);
    });
  }
  _requestSnapshot(_0x31b704) {
    let _0x284770 = this._getDrawingRect(_0x31b704);
    if (!_0x284770) return;
    let _0xdab668 = this._snapshotRenderService["requestSnapshot"]({
      unitId: _0x31b704.unitId,
      chartId: _0x31b704.chartId,
      width: _0x284770.width,
      height: _0x284770.height,
      dpr: _0x5d0dd1,
      mode: "main",
    });
    _0xdab668.status === "ready" &&
      _0xdab668.dataUrl &&
      this._renderDrawing(_0x31b704, _0xdab668.dataUrl);
  }
  _renderCharts(_0x20e3f5, _0x9a116, _0x162fdd) {
    this._forEachChartDrawing(_0x20e3f5, (_0x14c1c5) => {
      _0x14c1c5.chartId === _0x9a116 &&
        this._renderDrawing(_0x14c1c5, _0x162fdd);
    });
  }
  _renderDrawing(_0x7e91c6, _0x206af4) {
    let _0x5a46c9 = this._renderManagerService["getRenderUnitById"](
        _0x7e91c6.unitId,
      ),
      _0xf1386d = _0x5a46c9 == null ? undefined : _0x5a46c9.scene;
    if (!_0xf1386d || !this._getDrawingRect(_0x7e91c6)) return;
    let _0x216457 = _0x495acf(_0x7e91c6),
      _0x11719f = _0xf1386d.getObjectIncludeInGroup(_0x216457);
    if (_0x11719f != null && _0x11719f.changeSource) {
      var _0x2f105c, _0x537b4b, _0x4949d7, _0x4c5fb0, _0x4b5a31;
      ((_0x11719f.transformerConfig = {
        ..._0x11719f.transformerConfig,
        ...pi,
      }),
        (_0x2f105c = _0x11719f.getNative) == null ||
          (_0x2f105c = _0x2f105c.call(_0x11719f)) == null ||
          _0x2f105c.addEventListener(
            "load",
            () => {
              var _0x29b6d4;
              ((_0x29b6d4 = _0x11719f.makeDirty) == null ||
                _0x29b6d4.call(_0x11719f, true),
                _0xf1386d.makeDirty(true),
                _0xf1386d.requestRender().catch(() => {}));
            },
            { once: true },
          ),
        _0x11719f.changeSource(_0x206af4),
        (_0x537b4b = _0x11719f.transformByState) == null ||
          _0x537b4b.call(_0x11719f, _0x7e91c6.transform),
        (_0x4949d7 = _0x11719f.setClipBounds) == null ||
          _0x4949d7.call(
            _0x11719f,
            (_0x4c5fb0 = _0x7e91c6.transform) == null
              ? undefined
              : _0x4c5fb0.clipBounds,
          ),
        this._syncChartImageVisibility(_0x11719f, _0x7e91c6, _0x216457),
        (_0x4b5a31 = _0x11719f.makeDirty) == null ||
          _0x4b5a31.call(_0x11719f, true),
        _0xf1386d.makeDirty(true));
      return;
    }
    this._createImageShape(_0x7e91c6, _0x206af4, _0xf1386d, _0x216457);
  }
  _createImageShape(_0x52dab3, _0x1ae886, _0x25c3d6, _0x437e92) {
    let _0x355606 = _0x52dab3.transform;
    if (!_0x355606) return;
    let _0x54e9f0 = this._drawingManagerService["getDrawingOrder"](
        _0x52dab3.unitId,
        _0x52dab3.subUnitId,
      ),
      _0x36e53a = _0x54e9f0.indexOf(_0x52dab3.drawingId),
      _0x176f87 = {
        ..._0x355606,
        zIndex: _0x36e53a === -1 ? _0x54e9f0.length - 1 : _0x36e53a,
        clipBounds: _0x355606.clipBounds,
        printable: true,
        rotateEnabled: false,
        transformerConfig: pi,
        url: _0x1ae886,
      };
    _0x52dab3.hidden && (_0x176f87.visible = false);
    let _0x57c94c = new fi(_0x437e92, _0x176f87);
    (_0x57c94c.setImageContentHidden(
      this._activeDomReadyDrawingKeys["has"](_0x437e92),
    ),
      _0x25c3d6.addObject(_0x57c94c, _0x268be4),
      this._drawingManagerService["getDrawingEditable"]() &&
        _0x25c3d6.attachTransformerTo(_0x57c94c));
  }
  _removeRenderedCharts(_0x1c99c8) {
    _0x1c99c8.forEach((_0x349726) => {
      this._activeDomReadyDrawingKeys["delete"](_0x495acf(_0x349726));
      let _0x11b0e7 = this._renderManagerService["getRenderUnitById"](
          _0x349726.unitId,
        ),
        _0x5300da = _0x11b0e7 == null ? undefined : _0x11b0e7.scene;
      if (!_0x5300da) return;
      let _0x23a536 = _0x5300da.getObjectIncludeInGroup(_0x495acf(_0x349726));
      _0x23a536 && _0x5300da.removeObject(_0x23a536);
    });
  }
  _syncRenderedChartVisibility(_0x27cbbb) {
    let _0x35a55d = this._renderManagerService["getRenderUnitById"](
        _0x27cbbb.unitId,
      ),
      _0x48e6dd = _0x35a55d == null ? undefined : _0x35a55d.scene;
    if (!_0x48e6dd) return;
    let _0x819172 = _0x495acf(_0x27cbbb),
      _0x16d5ec = _0x48e6dd.getObjectIncludeInGroup(_0x819172);
    if (!_0x16d5ec) return;
    let _0x2e6fdf = this._drawingManagerService["getDrawingByParam"](_0x27cbbb);
    this._syncChartImageVisibility(_0x16d5ec, _0x2e6fdf, _0x819172);
  }
  _syncChartImageVisibility(_0x52d9cd, _0x54b3a6, _0x5947c8) {
    var _0x309124, _0x49ec27;
    let _0x236645 = this._activeDomReadyDrawingKeys["has"](_0x5947c8);
    if (_0x52d9cd.setImageContentHidden) {
      var _0x4d8078, _0x1644f2;
      (_0x52d9cd.setImageContentHidden(_0x236645),
        (_0x54b3a6 == null ? undefined : _0x54b3a6.hidden) === true
          ? (_0x4d8078 = _0x52d9cd.hide) == null || _0x4d8078.call(_0x52d9cd)
          : (_0x1644f2 = _0x52d9cd.show) == null || _0x1644f2.call(_0x52d9cd));
      return;
    }
    (_0x54b3a6 == null ? undefined : _0x54b3a6.hidden) === true
      ? (_0x309124 = _0x52d9cd.hide) == null || _0x309124.call(_0x52d9cd)
      : (_0x49ec27 = _0x52d9cd.show) == null || _0x49ec27.call(_0x52d9cd);
  }
  _getChartDrawing(_0x29a333) {
    let _0x34a0a9 = this._drawingManagerService["getDrawingByParam"](_0x29a333);
    return hi(_0x34a0a9) ? _0x34a0a9 : null;
  }
  _forEachChartDrawing(_0xe1a00d, _0x3250b5) {
    let _0x27b9f3 =
        this._drawingManagerService["getDrawingDataForUnit"](_0xe1a00d),
      _0x237e5c = _0x27b9f3 == null ? undefined : _0x27b9f3[_0xe1a00d];
    _0x237e5c &&
      _0x237e5c.order["forEach"]((_0x55c70d) => {
        let _0x238a3f = _0x237e5c.data[_0x55c70d];
        hi(_0x238a3f) && _0x3250b5(_0x238a3f);
      });
  }
  _getDrawingRect(_0x4e88d4) {
    var _0x22514c, _0x1b1d6c, _0x3666cf, _0x4e21b3;
    let _0x24de1e =
        ((_0x22514c = _0x4e88d4.transform) == null
          ? undefined
          : _0x22514c.width) ??
        ((_0x1b1d6c = _0x4e88d4.docTransform) == null ||
        (_0x1b1d6c = _0x1b1d6c.size) == null
          ? undefined
          : _0x1b1d6c.width) ??
        0,
      _0x2d1712 =
        ((_0x3666cf = _0x4e88d4.transform) == null
          ? undefined
          : _0x3666cf.height) ??
        ((_0x4e21b3 = _0x4e88d4.docTransform) == null ||
        (_0x4e21b3 = _0x4e21b3.size) == null
          ? undefined
          : _0x4e21b3.height) ??
        0;
    return _0x24de1e <= 0 || _0x2d1712 <= 0
      ? null
      : {
          width: Math.max(1, Math.round(_0x24de1e)),
          height: Math.max(1, Math.round(_0x2d1712)),
        };
  }
};
mi = B([z(0, _0x13d7e0), z(1, _0x9f8fc5), z(2, _0x59e556(Y))], mi);
function hi(_0x1431dd) {
  let _0x545ad9 = _0x1431dd;
  return (
    (_0x545ad9 == null ? undefined : _0x545ad9.drawingType) ===
      _0x378d12.DRAWING_CHART && typeof _0x545ad9.chartId == "string"
  );
}
function gi(_0x1903ae, _0x5c0d53, _0x139500 = 1, _0x2bfe53 = 0) {
  let {
      top: _0x8f37ca,
      left: _0x3e137c,
      bottom: _0x9d9717,
      right: _0x51f17f,
    } = _0x1903ae,
    _0x69ed7f = _0x51f17f - _0x3e137c,
    _0x2ca98d = _0x9d9717 - _0x8f37ca,
    { viewportScrollX: _0x5ce38e, viewportScrollY: _0x2f37d7 } =
      _0x5c0d53.getViewport(_0x4e3636.VIEW_MAIN),
    { scaleX: _0x377048, scaleY: _0x1dece6 } = _0x5c0d53.getAncestorScale(),
    _0xe0e518 = (_0x3e137c - _0x5ce38e) * _0x377048,
    _0x2990b3 = (_0x8f37ca - _0x2f37d7) * _0x1dece6,
    _0x5cdf93 = _0x69ed7f * _0x377048,
    _0x485a02 = _0x2ca98d * _0x1dece6;
  return {
    startX: _0xe0e518,
    startY: _0x2990b3,
    endX: _0xe0e518 + _0x5cdf93,
    endY: _0x2990b3 + _0x485a02,
    width: _0x5cdf93,
    height: _0x485a02,
    rotate: _0x2bfe53,
    absolute: { left: false, top: false },
    opacity: _0x139500,
  };
}
function _i(_0x1d4431, _0x1e0818) {
  return (
    _0x1d4431.unitId === _0x1e0818.unitId &&
    (_0x1d4431.subUnitId ?? _0x1d4431.unitId) ===
      (_0x1e0818.subUnitId ?? _0x1e0818.unitId) &&
    _0x1d4431.drawingId === _0x1e0818.drawingId
  );
}
function vi(_0x3e2ee7, _0x268f2d = 0) {
  return (
    _0x3e2ee7.find(
      (_0x2dd3b9) => typeof _0x2dd3b9 == "number" && Number.isFinite(_0x2dd3b9),
    ) ?? _0x268f2d
  );
}
function yi(_0x3af863, _0x3344ec) {
  var _0x427521,
    _0x79c2e7,
    _0x537106,
    _0xcdd1d6,
    _0x1cef64,
    _0x31941a,
    _0x52d97e;
  let _0x298818 =
      _0x3344ec == null || (_0x427521 = _0x3344ec.getRealBound) == null
        ? undefined
        : _0x427521.call(_0x3344ec),
    _0x27e868 = vi([
      _0x298818 == null ? undefined : _0x298818.width,
      (_0x79c2e7 = _0x3af863.transform) == null ? undefined : _0x79c2e7.width,
      (_0x537106 = _0x3af863.docTransform) == null ||
      (_0x537106 = _0x537106.size) == null
        ? undefined
        : _0x537106.width,
    ]),
    _0x3a6525 = vi([
      _0x298818 == null ? undefined : _0x298818.height,
      (_0xcdd1d6 = _0x3af863.transform) == null ? undefined : _0xcdd1d6.height,
      (_0x1cef64 = _0x3af863.docTransform) == null ||
      (_0x1cef64 = _0x1cef64.size) == null
        ? undefined
        : _0x1cef64.height,
    ]),
    _0x51efde = vi([
      _0x298818 == null ? undefined : _0x298818.left,
      (_0x31941a = _0x3af863.transform) == null ? undefined : _0x31941a.left,
    ]),
    _0x3f4bf1 = vi([
      _0x298818 == null ? undefined : _0x298818.top,
      (_0x52d97e = _0x3af863.transform) == null ? undefined : _0x52d97e.top,
    ]);
  return {
    left: _0x51efde,
    top: _0x3f4bf1,
    right: _0x51efde + _0x27e868,
    bottom: _0x3f4bf1 + _0x3a6525,
  };
}
function bi(_0x2ad01a, _0x5e6c3f) {
  if (!_0x2ad01a || typeof _0x2ad01a != "object") return;
  let _0x46e914 = _0x2ad01a;
  if (typeof _0x46e914.subscribeEvent == "function") {
    let _0x22bd66 = _0x46e914.subscribeEvent(_0x5e6c3f);
    return _0x5abd00(() => {
      var _0x2511fa;
      if (typeof _0x22bd66.dispose == "function") {
        _0x22bd66.dispose();
        return;
      }
      (_0x2511fa = _0x22bd66.unsubscribe) == null || _0x2511fa.call(_0x22bd66);
    });
  }
  let _0x53021e = _0x2ad01a;
  if (typeof _0x53021e.subscribe == "function") {
    let _0x451dcc = _0x53021e.subscribe(_0x5e6c3f);
    return _0x5abd00(() => {
      var _0x448f81;
      return (_0x448f81 = _0x451dcc.unsubscribe) == null
        ? undefined
        : _0x448f81.call(_0x451dcc);
    });
  }
}
let Q = class extends _0x4d5f24 {
  constructor(
    _0x319749,
    _0x9da97,
    _0x4195aa,
    _0x3942f8,
    _0x3308ad,
    _0x460953,
    _0x4769ad,
    _0x1439f8,
    _0x1f7f67,
    _0x5b93ca,
  ) {
    (super(),
      (this._drawingManagerService = _0x319749),
      (this._renderManagerService = _0x9da97),
      (this._canvasFloatDomService = _0x4195aa),
      (this._modelService = _0x3942f8),
      (this._renderService = _0x3308ad),
      (this._snapshotRenderService = _0x460953),
      (this._commandService = _0x4769ad),
      (this._univerInstanceService = _0x1439f8),
      (this._localeService = _0x1f7f67),
      (this._staticRenderController = _0x5b93ca),
      U(this, "_activeLayer", null),
      U(this, "_layoutChanged$", new _0x3c500e()),
      U(this, "_visualLayoutChanged$", new _0x3c500e()),
      this._init());
  }
  mountChart(_0x539043) {
    let _0xe5c534 = this._modelService["ensureChartModel"](
      _0x539043.unitId,
      _0x539043.chartId,
    );
    if (!_0xe5c534) return _0x5abd00(() => {});
    let _0x322c3e = new Or(
        _0x539043.chartId,
        _0x539043.root,
        (_0x388e77, _0x1b3541) =>
          this._renderService["applyHostStyle"](_0x388e77, _0x1b3541),
        () => this._getActiveRenderRect(_0x539043),
        true,
        () => this._getActiveRenderScale(_0x539043),
      ),
      _0x549d51 = this._renderService["createChartInstance"](_0x405a90.Dom);
    _0x549d51.bind(_0x322c3e);
    let _0x11bf78 = [
        _0x549d51.on("click", (_0x412133) => {
          let _0x5b2ec9 = _0x1789ca(_0xe5c534.model, _0x412133.hit);
          if (!_0x5b2ec9) return;
          let _0x149e3c = _0x49cdfc(_0x5b2ec9.target);
          _0x149e3c &&
            this._commandService["executeCommand"](R.id, {
              unitId: _0x539043.unitId,
              chartId: _0x539043.chartId,
              drawingId: _0x539043.drawingId,
              route: _0x149e3c,
            });
        }),
        _0x549d51.on("dblclick", () => {
          this._commandService["executeCommand"](R.id, {
            unitId: _0x539043.unitId,
            chartId: _0x539043.chartId,
            drawingId: _0x539043.drawingId,
          });
        }),
      ],
      _0x4395a7 = true;
    return (
      _0x11bf78.push(
        this._subscribeRender(
          _0xe5c534,
          _0x549d51,
          _0x322c3e,
          _0x539043,
          () => _0x4395a7,
        ),
      ),
      _0x5abd00(() => {
        ((_0x4395a7 = false),
          this._staticRenderController["setActiveDomReady"](
            this._getDrawingSearch(_0x539043),
            false,
          ),
          _0x11bf78.forEach((_0x233aec) => _0x233aec.dispose()),
          _0x549d51.dispose(),
          _0x322c3e.dispose());
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
      this._drawingManagerService["focus$"].subscribe((_0x3bea29) => {
        this._handleFocus(_0x3bea29);
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x133ef4) => {
          let _0x122ab7 = this._activeLayer;
          _0x122ab7 &&
            _0x133ef4.some((_0x492570) => _i(_0x492570, _0x122ab7)) &&
            this._deactivate();
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["refreshTransform$"].subscribe(
          (_0x14e7be) => {
            let _0x24d694 = this._activeLayer;
            if (!_0x24d694) {
              this._retryActivateFocusedChart(_0x14e7be);
              return;
            }
            let _0x33d67c = _0x14e7be.find((_0x33a9c8) =>
              _i(_0x33a9c8, _0x24d694),
            );
            if (_0x33d67c) {
              let _0x2a2db7 = this._drawingManagerService["getDrawingByParam"]({
                unitId: _0x33d67c.unitId,
                subUnitId: _0x33d67c.subUnitId,
                drawingId: _0x33d67c.drawingId,
              });
              this._isDocChartDrawing(_0x2a2db7) &&
                this._updatePosition(_0x2a2db7);
            }
          },
        ),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          _0x53698d.UNIVER_DOC,
        ).subscribe((_0x4c21b7) => {
          let _0x175369 = this._activeLayer;
          _0x175369 &&
            (_0x4c21b7 == null ? undefined : _0x4c21b7.getUnitId()) !==
              _0x175369.unitId &&
            this._deactivate();
        }),
      ));
  }
  _subscribeRender(_0x30bd1f, _0x40f1aa, _0x5e297f, _0x3572ea, _0x255974) {
    let _0x13da81 = () => {
        let { chartConfig: _0x26b823, chartStyle: _0x5c372c } =
          this._renderService["createRenderInput"](_0x30bd1f);
        Promise.resolve(
          _0x40f1aa.render({
            chartId: _0x30bd1f.chartId,
            config: _0x26b823,
            style: _0x5c372c,
          }),
        ).then(
          () => {
            _0x255974() &&
              this._isActiveLayer(_0x3572ea) &&
              this._staticRenderController["setActiveDomReady"](
                this._getDrawingSearch(_0x3572ea),
                true,
              );
          },
          () => {},
        );
      },
      _0x4ec27a = _0x4aab1a([
        _0x30bd1f.model["config$"],
        _0x30bd1f.model["style$"],
        this._localeService["direction$"],
      ])
        .pipe(_0xc4e194(([_0x5de7a4]) => _0x5de7a4 != null))
        .subscribe(_0x13da81),
      _0x5ae701 = this._layoutChanged$["pipe"](
        _0xc4e194((_0x2470ca) => _0x2470ca === _0x3572ea.drawingId),
      ).subscribe(_0x13da81),
      _0x394c02 = this._visualLayoutChanged$["pipe"](
        _0xc4e194((_0x3a5a9b) => _0x3a5a9b === _0x3572ea.drawingId),
      ).subscribe(() => _0x5e297f.syncLayout());
    return _0x5abd00(() => {
      (_0x4ec27a.unsubscribe(),
        _0x5ae701.unsubscribe(),
        _0x394c02.unsubscribe());
    });
  }
  _handleFocus(_0x4b5c50) {
    let _0x19601f = (_0x4b5c50 ?? []).filter((_0x40d6da) =>
      this._isDocChartDrawing(_0x40d6da),
    );
    if (_0x19601f.length !== 1) {
      this._deactivate();
      return;
    }
    this._activate(_0x19601f[0]);
  }
  _activate(_0x28bcec) {
    var _0x2bce1a, _0x53a626, _0x28bf6e;
    let _0x2400f4 = this._getPositionState(_0x28bcec),
      _0x3df70d = this._getRenderRect(_0x28bcec),
      _0x5b20c7 = _0x28bcec.subUnitId ?? _0x28bcec.unitId;
    if (!_0x2400f4 || !_0x3df70d) {
      this._deactivate();
      return;
    }
    if (
      ((_0x2bce1a = this._activeLayer) == null
        ? undefined
        : _0x2bce1a.unitId) === _0x28bcec.unitId &&
      this._activeLayer["subUnitId"] === _0x5b20c7 &&
      this._activeLayer["drawingId"] === _0x28bcec.drawingId &&
      this._activeLayer["chartId"] === _0x28bcec.chartId
    ) {
      let _0x26c4d4 = this._activeLayer["scene"] !== _0x2400f4.scene;
      ((this._activeLayer["scene"] = _0x2400f4.scene),
        (this._activeLayer["sceneRect"] = _0x2400f4.sceneRect),
        (this._activeLayer["angle"] = _0x2400f4.angle),
        (this._activeLayer["renderRect"] = _0x3df70d),
        this._activeLayer["position$"].next(_0x2400f4.position),
        _0x26c4d4 && this._bindActiveLayerObservers(this._activeLayer));
      return;
    }
    this._deactivate();
    let _0x4b12ec = new _0x417de5(_0x2400f4.position),
      _0xc6bf65 = this._renderManagerService["getRenderUnitById"](
        _0x28bcec.unitId,
      ),
      _0x22404b =
        _0xc6bf65 == null ||
        (_0x28bf6e = (_0x53a626 = _0xc6bf65.engine).getCanvasElement) == null
          ? undefined
          : _0x28bf6e.call(_0x53a626);
    (this._canvasFloatDomService["addFloatDom"]({
      id: _0x28bcec.drawingId,
      componentKey: xi,
      position$: _0x4b12ec,
      unitId: _0x28bcec.unitId,
      contentBox: { wrapperInset: 0, contentInset: 0 },
      props: { chartId: _0x28bcec.chartId, subUnitId: _0x5b20c7 },
      onPointerDown: (_0x1a136a) =>
        _0x22404b == null
          ? undefined
          : _0x22404b.dispatchEvent(
              new PointerEvent(_0x1a136a.type, _0x1a136a),
            ),
      onPointerMove: (_0x2a0e04) =>
        _0x22404b == null
          ? undefined
          : _0x22404b.dispatchEvent(
              new PointerEvent(_0x2a0e04.type, _0x2a0e04),
            ),
      onPointerUp: (_0x241d38) =>
        _0x22404b == null
          ? undefined
          : _0x22404b.dispatchEvent(
              new PointerEvent(_0x241d38.type, _0x241d38),
            ),
      onWheel: (_0x113615) =>
        _0x22404b == null
          ? undefined
          : _0x22404b.dispatchEvent(new WheelEvent(_0x113615.type, _0x113615)),
    }),
      this._modelService["setActiveChartById"](
        _0x28bcec.unitId,
        _0x28bcec.chartId,
      ));
    let _0x375382 = {
      unitId: _0x28bcec.unitId,
      subUnitId: _0x5b20c7,
      drawingId: _0x28bcec.drawingId,
      chartId: _0x28bcec.chartId,
      scene: _0x2400f4.scene,
      sceneRect: _0x2400f4.sceneRect,
      angle: _0x2400f4.angle,
      renderRect: _0x3df70d,
      position$: _0x4b12ec,
    };
    ((this._activeLayer = _0x375382),
      this._bindActiveLayerObservers(_0x375382));
  }
  _deactivate() {
    var _0x117670, _0x1fba3e;
    let _0x44b67b = this._activeLayer;
    _0x44b67b &&
      ((this._activeLayer = null),
      (_0x117670 = _0x44b67b.positionObserver) == null || _0x117670.dispose(),
      (_0x1fba3e = _0x44b67b.scaleObserver) == null || _0x1fba3e.dispose(),
      this._staticRenderController["setActiveDomReady"](
        {
          unitId: _0x44b67b.unitId,
          subUnitId: _0x44b67b.subUnitId,
          drawingId: _0x44b67b.drawingId,
        },
        false,
      ),
      this._canvasFloatDomService["removeFloatDom"](_0x44b67b.drawingId),
      this._modelService["setActiveChartRuntime"](null),
      this._snapshotRenderService["invalidateChart"](
        _0x44b67b.unitId,
        _0x44b67b.chartId,
      ),
      _0x44b67b.position$["complete"]());
  }
  _refreshActivePosition(_0xd2f936, _0xa16070, _0x202c0e) {
    let _0x3b6732 = this._activeLayer;
    (_0x3b6732 == null ? undefined : _0x3b6732.unitId) === _0xd2f936 &&
      _0x3b6732.drawingId === _0xa16070 &&
      _0x3b6732.chartId === _0x202c0e &&
      _0x3b6732.position$["next"](
        gi(_0x3b6732.sceneRect, _0x3b6732.scene, 1, _0x3b6732.angle),
      );
  }
  _refreshActiveLayout(_0x3c068f) {
    let _0x5ec61c = this._activeLayer;
    !_0x5ec61c ||
      _0x5ec61c.unitId !== _0x3c068f ||
      (this._refreshActivePosition(
        _0x5ec61c.unitId,
        _0x5ec61c.drawingId,
        _0x5ec61c.chartId,
      ),
      this._visualLayoutChanged$["next"](_0x5ec61c.drawingId));
  }
  _bindActiveLayerObservers(_0x330572) {
    var _0x224643, _0x42e5b4;
    ((_0x224643 = _0x330572.positionObserver) == null || _0x224643.dispose(),
      (_0x42e5b4 = _0x330572.scaleObserver) == null || _0x42e5b4.dispose());
    let _0x515357 = _0x330572.scene["getViewport"](_0x4e3636.VIEW_MAIN);
    if (!_0x515357) return;
    _0x330572.positionObserver = bi(_0x515357.onScrollAfter$, () => {
      this._refreshActivePosition(
        _0x330572.unitId,
        _0x330572.drawingId,
        _0x330572.chartId,
      );
    });
    let _0x2b0e4a = _0x330572.scene["onTransformChange$"].subscribeEvent(
      (_0x2de5d1) => {
        _0x2de5d1.type !== _0x2db94e.scale ||
          (_0x2de5d1.value["scaleX"] === _0x2de5d1.preValue["scaleX"] &&
            _0x2de5d1.value["scaleY"] === _0x2de5d1.preValue["scaleY"]) ||
          this._refreshActiveLayout(_0x330572.unitId);
      },
    );
    _0x330572.scaleObserver = _0x5abd00(() => _0x2b0e4a.unsubscribe());
  }
  _updatePosition(_0x15ef4a) {
    let _0x3dc513 = this._getPositionState(_0x15ef4a),
      _0x2e4d11 = this._getRenderRect(_0x15ef4a);
    if (_0x3dc513 && _0x2e4d11) {
      var _0x28fd58;
      if (this._activeLayer) {
        let _0x5e40df = this._activeLayer["scene"] !== _0x3dc513.scene;
        ((this._activeLayer["scene"] = _0x3dc513.scene),
          (this._activeLayer["sceneRect"] = _0x3dc513.sceneRect),
          (this._activeLayer["angle"] = _0x3dc513.angle),
          (this._activeLayer["renderRect"] = _0x2e4d11),
          _0x5e40df && this._bindActiveLayerObservers(this._activeLayer));
      }
      ((_0x28fd58 = this._activeLayer) == null ||
        _0x28fd58.position$["next"](_0x3dc513.position),
        this._layoutChanged$["next"](_0x15ef4a.drawingId));
    }
  }
  _retryActivateFocusedChart(_0xa74b29) {
    let _0x2e32ae = this._drawingManagerService["getFocusDrawings"]().filter(
      (_0x2df33c) => this._isDocChartDrawing(_0x2df33c),
    );
    _0x2e32ae.length === 1 &&
      _0xa74b29.some((_0x36d32e) => _i(_0x36d32e, _0x2e32ae[0])) &&
      this._activate(_0x2e32ae[0]);
  }
  _getPositionState(_0x988c6f) {
    let _0x36d1f0 = _0x988c6f.transform;
    if (!_0x36d1f0) return null;
    let _0x330771 = this._renderManagerService["getRenderUnitById"](
      _0x988c6f.unitId,
    );
    if (
      !(_0x330771 != null && _0x330771.scene) ||
      !_0x330771.scene["getViewport"](_0x4e3636.VIEW_MAIN)
    )
      return null;
    let _0x58d586 = _0x495acf(_0x988c6f),
      _0x4dafc0 = _0x330771.scene["getObjectIncludeInGroup"](_0x58d586),
      _0x24ff5c = yi(_0x988c6f, _0x4dafc0),
      _0x295466 = _0x24ff5c.right - _0x24ff5c.left,
      _0x205b39 = _0x24ff5c.bottom - _0x24ff5c.top;
    if (_0x295466 <= 0 || _0x205b39 <= 0) return null;
    let _0x1fbf4c = vi([
      _0x4dafc0 == null ? undefined : _0x4dafc0.angle,
      _0x36d1f0.angle,
    ]);
    return {
      scene: _0x330771.scene,
      sceneRect: _0x24ff5c,
      angle: _0x1fbf4c,
      position: gi(_0x24ff5c, _0x330771.scene, 1, _0x1fbf4c),
    };
  }
  _getRenderRect(_0x30aef5) {
    var _0x14fb52, _0x58c047, _0x3973b4, _0x9a8b31;
    let _0x56da93 =
        ((_0x14fb52 = _0x30aef5.transform) == null
          ? undefined
          : _0x14fb52.width) ??
        ((_0x58c047 = _0x30aef5.docTransform) == null ||
        (_0x58c047 = _0x58c047.size) == null
          ? undefined
          : _0x58c047.width) ??
        0,
      _0x4a6052 =
        ((_0x3973b4 = _0x30aef5.transform) == null
          ? undefined
          : _0x3973b4.height) ??
        ((_0x9a8b31 = _0x30aef5.docTransform) == null ||
        (_0x9a8b31 = _0x9a8b31.size) == null
          ? undefined
          : _0x9a8b31.height) ??
        0;
    return _0x56da93 <= 0 || _0x4a6052 <= 0
      ? null
      : {
          width: Math.max(1, Math.round(_0x56da93)),
          height: Math.max(1, Math.round(_0x4a6052)),
        };
  }
  _getActiveRenderRect(_0x4a3b22) {
    let _0x5a5a21 = this._activeLayer;
    if (
      (_0x5a5a21 == null ? undefined : _0x5a5a21.unitId) === _0x4a3b22.unitId &&
      _0x5a5a21.subUnitId === (_0x4a3b22.subUnitId ?? _0x4a3b22.unitId) &&
      _0x5a5a21.drawingId === _0x4a3b22.drawingId &&
      _0x5a5a21.chartId === _0x4a3b22.chartId
    )
      return _0x5a5a21.renderRect;
    let _0xa04d9b = this._drawingManagerService["getDrawingByParam"](
      this._getDrawingSearch(_0x4a3b22),
    );
    return this._isDocChartDrawing(_0xa04d9b)
      ? this._getRenderRect(_0xa04d9b)
      : null;
  }
  _getActiveRenderScale(_0x36ff2f) {
    let _0x38e1a7 = this._activeLayer;
    return _0x38e1a7 && this._isActiveLayer(_0x36ff2f)
      ? _0x38e1a7.scene["getAncestorScale"]()
      : null;
  }
  _getDrawingSearch(_0x1427a7) {
    return {
      unitId: _0x1427a7.unitId,
      subUnitId: _0x1427a7.subUnitId ?? _0x1427a7.unitId,
      drawingId: _0x1427a7.drawingId,
    };
  }
  _isActiveLayer(_0x5ece2e) {
    let _0x5802d8 = this._activeLayer;
    return (
      (_0x5802d8 == null ? undefined : _0x5802d8.unitId) === _0x5ece2e.unitId &&
      _0x5802d8.subUnitId === (_0x5ece2e.subUnitId ?? _0x5ece2e.unitId) &&
      _0x5802d8.drawingId === _0x5ece2e.drawingId &&
      _0x5802d8.chartId === _0x5ece2e.chartId
    );
  }
  _isDocChartDrawing(_0x17572a) {
    let _0x1710fc = _0x17572a;
    return (
      (_0x1710fc == null ? undefined : _0x1710fc.drawingType) ===
        _0x378d12.DRAWING_CHART && typeof _0x1710fc.chartId == "string"
    );
  }
};
Q = B(
  [
    z(0, _0x13d7e0),
    z(1, _0x9f8fc5),
    z(2, _0x59e556(_0x5e0398)),
    z(3, _0x59e556(_0x991352)),
    z(4, _0x59e556(W)),
    z(5, _0x59e556(Y)),
    z(6, _0x1382c0),
    z(7, _0x14b502),
    z(8, _0x59e556(_0x31aad9)),
    z(9, _0x59e556(mi)),
  ],
  Q,
);
const xi = "docs-chart-ui.active-chart",
  Si = (_0x325d05) => {
    let {
        unitId: _0x3ca808,
        subUnitId: _0x1e3e43,
        floatDomId: _0x50f0c5,
        chartId: _0x2324b7,
        context: _0x3a2624,
      } = _0x325d05,
      _0x4406e5 = _0x100c8b(Q);
    return (
      _0x380c89(() => {
        let _0x21e133 = _0x3a2624.root["current"];
        if (!_0x21e133) return;
        let _0x241841 = _0x4406e5.mountChart({
          unitId: _0x3ca808,
          subUnitId: _0x1e3e43,
          drawingId: _0x50f0c5,
          chartId: _0x2324b7,
          root: _0x21e133,
        });
        return () => _0x241841.dispose();
      }, [
        _0x4406e5,
        _0x2324b7,
        _0x3a2624.root,
        _0x50f0c5,
        _0x1e3e43,
        _0x3ca808,
      ]),
      null
    );
  },
  Ci = () => null;
let wi = class extends _0x4d5f24 {
  constructor(_0xcb2d3f) {
    (super(), (this._componentManager = _0xcb2d3f), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](Jr, Xr)),
      this.disposeWithMe(this._componentManager["register"](ur, pr)),
      this.disposeWithMe(this._componentManager["register"](Nr, Fr)),
      this.disposeWithMe(this._componentManager["register"](_0x56f0ca, Ci)),
      this.disposeWithMe(this._componentManager["register"](xi, Si)));
  }
};
wi = B([z(0, _0x59e556(_0x46ff66))], wi);
const Ti = "min(1200px, calc(100vw - 32px))";
let Ei = class extends _0x4d5f24 {
  constructor(
    _0x39921a,
    _0x364fb2,
    _0x504fc7,
    _0x2f176b,
    _0x15c81c,
    _0xcc803d,
    _0x26f1bb,
  ) {
    (super(),
      (this._dialogService = _0x39921a),
      (this._localeService = _0x364fb2),
      (this._instanceService = _0x504fc7),
      (this._docSelectionManagerService = _0x2f176b),
      (this._docContentInsertService = _0x15c81c),
      (this._menuManagerService = _0xcc803d),
      (this._commandService = _0x26f1bb),
      this._initMenus(),
      this._registerDialogOperations());
  }
  openInsertDialog(_0x426191) {
    let _0x5692a6 = null,
      _0x23533a = () => {
        (_0x5692a6 == null || _0x5692a6.dispose(), (_0x5692a6 = null));
      };
    return (
      (_0x5692a6 = this._dialogService["open"]({
        id: "doc-chart.dialog.insert",
        title: {
          title: this._localeService["t"]("docs-chart-ui.common.editChart"),
        },
        width: Ti,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: Jr,
            props: {
              defaultChartType:
                (_0x426191 == null ? undefined : _0x426191.defaultChartType) ??
                (_0x426191 == null ? undefined : _0x426191.value),
              defaultTableText:
                _0x426191 == null ? undefined : _0x426191.defaultTableText,
              insertOptions: {
                insertRange:
                  (_0x426191 == null ? undefined : _0x426191.insertRange) ??
                  this._captureInsertRange(),
              },
              onCancel: _0x23533a,
              onInserted: _0x23533a,
            },
          },
        },
        onClose: _0x23533a,
      })),
      true
    );
  }
  openEditorDialog(_0x1e6fbc) {
    let _0x185a1b = null,
      _0x46a28a = () => {
        (_0x185a1b == null || _0x185a1b.dispose(), (_0x185a1b = null));
      };
    return (
      (_0x185a1b = this._dialogService["open"]({
        id: Pr,
        title: {
          title: this._localeService["t"]("docs-chart-ui.common.editChart"),
        },
        width: Ti,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: { name: Nr, props: { ..._0x1e6fbc, onClose: _0x46a28a } },
        },
        onClose: _0x46a28a,
      })),
      true
    );
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](li);
  }
  _registerDialogOperations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x38c697) => {
        if (_0x38c697.id === L.id) {
          this.openInsertDialog(_0x38c697.params);
          return;
        }
        if (_0x38c697.id === R.id) {
          let _0x403548 = _0x38c697.params;
          _0x403548 && this.openEditorDialog(_0x403548);
        }
      }),
    );
  }
  _captureInsertRange() {
    let _0x542285 = this._instanceService["getCurrentUnitOfType"](
      _0x53698d.UNIVER_DOC,
    );
    if (!_0x542285) return;
    let _0x3cc988 = _0x542285.getUnitId(),
      _0x271d70 = null;
    try {
      _0x271d70 =
        this._docContentInsertService["consumeInsertRange"](_0x3cc988);
    } catch {
      _0x271d70 = null;
    }
    if (_0x271d70) {
      let _0x512d35 = {
        startOffset: _0x271d70.startOffset,
        endOffset: _0x271d70.endOffset,
        collapsed: _0x271d70.startOffset === _0x271d70.endOffset,
        segmentId: _0x271d70.segmentId ?? "",
      };
      return G(_0x542285, _0x512d35) ? _0x512d35 : undefined;
    }
    let _0x1256d5 = [
      ...(this._docSelectionManagerService["getTextRanges"]() ?? []),
    ];
    if (_0x1256d5.length !== 1) return;
    let _0x13b18c =
      this._docSelectionManagerService["getActiveTextRange"]() ?? _0x1256d5[0];
    if (!_0x13b18c || !_0x13b18c.collapsed || _0x13b18c.startOffset == null)
      return;
    let _0x4ea0a3 = { ..._0x13b18c, segmentId: _0x13b18c.segmentId ?? "" };
    return G(_0x542285, _0x4ea0a3) ? _0x4ea0a3 : undefined;
  }
};
Ei = B(
  [
    z(0, _0x59e556(_0x3735ea)),
    z(1, _0x59e556(_0x31aad9)),
    z(2, _0x14b502),
    z(3, _0x59e556(_0x9a95a1)),
    z(4, _0x59e556(_0x276717)),
    z(5, _0x1ea9d5),
    z(6, _0x1382c0),
  ],
  Ei,
);
let Di = class extends _0x4d5f24 {
  constructor(_0x198d79, _0x1ce896) {
    (super(),
      (this._snapshotService = _0x1ce896),
      this.disposeWithMe(_0x198d79.register(this)));
  }
  supports(_0x56632a) {
    return "unitId" in _0x56632a && "getDrawingId" in _0x56632a;
  }
  exportImage(_0x3e03cc, _0x5529f) {
    if (!this.supports(_0x3e03cc)) return Promise.resolve(undefined);
    let _0x1bd67e = _0x3e03cc.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: _0x3e03cc.unitId,
      chartId: _0x3e03cc.getId(),
      width: Math.max(
        1,
        (_0x1bd67e == null ? undefined : _0x1bd67e.width) ?? 1,
      ),
      height: Math.max(
        1,
        (_0x1bd67e == null ? undefined : _0x1bd67e.height) ?? 1,
      ),
      format: _0x5529f == null ? undefined : _0x5529f.format,
      mode: "export",
    });
  }
};
Di = B([z(0, _0x59e556(_0x33ec5f)), z(1, _0x59e556(Y))], Di);
function Oi(_0x2b0749, _0x8c68a2, _0xded951) {
  let _0x1cab36 = _0xded951.docsTop ?? 0,
    _0x26468b = _0xded951.docsLeft ?? 0,
    _0x5c3cbf = _0x1cab36;
  for (let _0x5da295 of _0x8c68a2) {
    let _0x25e8d8 = _0x5da295.skeDrawings["get"](_0x2b0749.drawingId);
    if (_0x25e8d8)
      return {
        left: _0x26468b + _0x5da295.marginLeft + _0x25e8d8.aLeft,
        top: _0x5c3cbf + _0x5da295.marginTop + _0x25e8d8.aTop,
        width: _0x25e8d8.width,
        height: _0x25e8d8.height,
        angle: _0x25e8d8.angle,
        flipX: _0x2b0749.docTransform["flipX"],
        flipY: _0x2b0749.docTransform["flipY"],
      };
    let _0x45a61d = Number.isFinite(_0x5da295.pageHeight)
      ? _0x5da295.pageHeight
      : _0x5da295.height;
    _0x5c3cbf += Math.max(0, _0x45a61d) + _0xded951.pageMarginTop;
  }
  return null;
}
let ki = class extends _0x4d5f24 {
  constructor(_0x4999c2, _0x4bfa53, _0x51afc6, _0x2b23ac) {
    (super(),
      (this._drawingManagerService = _0x4999c2),
      (this._renderManagerService = _0x4bfa53),
      (this._snapshotRenderService = _0x51afc6),
      (this._docPrintInterceptorService = _0x2b23ac),
      U(this, "_preparedCharts", new Map()));
    let _0x1e25e6 =
      this._docPrintInterceptorService["registerPrintPreparation"];
    (_0x1e25e6 &&
      this.disposeWithMe(
        _0x1e25e6.call(this._docPrintInterceptorService, (_0x59e3e4) =>
          this.prepare(_0x59e3e4),
        ),
      ),
      this._initPrinting());
  }
  async prepare(_0x546a3c) {
    let _0x13450b = this._getChartDrawings(_0x546a3c.unitId),
      _0x43542c = new Map();
    (this._preparedCharts["set"](_0x546a3c.unitId, _0x43542c),
      await Promise.allSettled(
        _0x13450b.map(async (_0x1d5f35) => {
          let _0x10d53f = Ai(_0x1d5f35);
          if (!_0x10d53f) return;
          let _0x290d31 = {
              unitId: _0x546a3c.unitId,
              chartId: _0x1d5f35.chartId,
              width: _0x10d53f.width,
              height: _0x10d53f.height,
              dpr: _0x546a3c.dpr,
              mode: "print",
            },
            _0x1826d2 = { ..._0x290d31, dpr: _0x5d0dd1, mode: "main" },
            _0x2b6f84 = this._snapshotRenderService["getSnapshot"](_0x1826d2),
            _0x50d012 =
              (_0x2b6f84 == null ? undefined : _0x2b6f84.status) === "ready"
                ? this._getRenderedChartImage(_0x1d5f35)
                : null;
          if (_0x50d012) {
            _0x43542c.set(_0x1d5f35.drawingId, { image: _0x50d012 });
            return;
          }
          let _0x3bd19e =
            (_0x2b6f84 == null ? undefined : _0x2b6f84.status) === "ready"
              ? _0x2b6f84.dataUrl
              : await this._snapshotRenderService["exportImage"](
                  (_0x2b6f84 == null ? undefined : _0x2b6f84.status) ===
                    "pending"
                    ? _0x1826d2
                    : _0x290d31,
                );
          _0x3bd19e &&
            _0x43542c.set(_0x1d5f35.drawingId, { image: await ji(_0x3bd19e) });
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
            _0x3fe5de,
            {
              unitId: _0x277e42,
              scene: _0x239fcf,
              skeleton: _0x33ebcb,
              documents: _0x574c21,
            },
            _0x3409df,
          ) => {
            var _0x13174e, _0x551b64;
            let _0x591cd3 = _0x3409df(_0x3fe5de),
              _0x5d41fd = this._preparedCharts["get"](_0x277e42),
              _0x202b83 =
                ((_0x13174e = _0x33ebcb.getSkeletonData()) == null
                  ? undefined
                  : _0x13174e.pages) ?? [];
            if (!(_0x5d41fd != null && _0x5d41fd.size) || !_0x202b83.length)
              return _0x591cd3;
            let _0x3e4f62 =
              (_0x551b64 =
                this._drawingManagerService["getDrawingDataForUnit"](
                  _0x277e42,
                )) == null
                ? undefined
                : _0x551b64[_0x277e42];
            return (
              _0x3e4f62 == null ||
                _0x3e4f62.order["forEach"]((_0x2b14ac, _0x31fcd3) => {
                  let _0x25bd22 = _0x3e4f62.data[_0x2b14ac],
                    _0x559f43 = _0x5d41fd.get(_0x2b14ac);
                  if (
                    !_0x559f43 ||
                    _0x25bd22.hidden ||
                    _0x25bd22.drawingType !== _0x378d12.DRAWING_CHART
                  )
                    return;
                  let _0x2e9a7e = {
                    ...(Oi(_0x25bd22, _0x202b83, _0x574c21.getOffsetConfig()) ??
                      _0x33eec0(_0x25bd22.docTransform)),
                    image: _0x559f43.image,
                    printable: true,
                    forceRender: true,
                    zIndex: _0x31fcd3,
                  };
                  _0x239fcf.addObject(
                    new _0x508873(_0x495acf(_0x25bd22), _0x2e9a7e),
                    _0x268be4,
                  );
                }),
              _0x591cd3
            );
          },
        },
      ),
    );
  }
  _getChartDrawings(_0x1d69d3) {
    var _0x2d1ced;
    let _0x80c32c =
      (_0x2d1ced =
        this._drawingManagerService["getDrawingDataForUnit"](_0x1d69d3)) == null
        ? undefined
        : _0x2d1ced[_0x1d69d3];
    return (
      (_0x80c32c == null
        ? undefined
        : _0x80c32c.order["map"](
            (_0x107550) => _0x80c32c.data[_0x107550],
          ).filter(
            (_0x3a4cc1) =>
              _0x3a4cc1.drawingType === _0x378d12.DRAWING_CHART &&
              !_0x3a4cc1.hidden &&
              !!_0x3a4cc1.chartId,
          )) ?? []
    );
  }
  _getRenderedChartImage(_0x149018) {
    var _0x2cab68, _0x1e93dc;
    let _0x1a2866 =
        (_0x2cab68 = this._renderManagerService["getRenderUnitById"](
          _0x149018.unitId,
        )) == null
          ? undefined
          : _0x2cab68.scene,
      _0x207040 =
        _0x1a2866 == null
          ? undefined
          : _0x1a2866.getObjectIncludeInGroup(_0x495acf(_0x149018)),
      _0x120992 =
        _0x207040 == null || (_0x1e93dc = _0x207040.getNative) == null
          ? undefined
          : _0x1e93dc.call(_0x207040);
    return _0x120992 != null && _0x120992.complete && _0x120992.naturalWidth > 0
      ? _0x120992
      : null;
  }
};
ki = B(
  [
    z(0, _0x13d7e0),
    z(1, _0x9f8fc5),
    z(2, _0x59e556(Y)),
    z(3, _0x59e556(_0x34ae77)),
  ],
  ki,
);
function Ai(_0x1e9d4b) {
  var _0x35b41a, _0x1a3a0e, _0x1446d0, _0xcac0a3;
  let _0x17c9c2 =
      ((_0x35b41a = _0x1e9d4b.transform) == null
        ? undefined
        : _0x35b41a.width) ??
      ((_0x1a3a0e = _0x1e9d4b.docTransform) == null ||
      (_0x1a3a0e = _0x1a3a0e.size) == null
        ? undefined
        : _0x1a3a0e.width) ??
      0,
    _0x56f849 =
      ((_0x1446d0 = _0x1e9d4b.transform) == null
        ? undefined
        : _0x1446d0.height) ??
      ((_0xcac0a3 = _0x1e9d4b.docTransform) == null ||
      (_0xcac0a3 = _0xcac0a3.size) == null
        ? undefined
        : _0xcac0a3.height) ??
      0;
  return _0x17c9c2 > 0 && _0x56f849 > 0
    ? {
        width: Math.max(1, Math.round(_0x17c9c2)),
        height: Math.max(1, Math.round(_0x56f849)),
      }
    : null;
}
function ji(_0x5f2ac8) {
  return new Promise((_0x5618f8, _0x218161) => {
    let _0x2c5862 = new globalThis.Image(),
      _0x181a05 = globalThis.setTimeout(
        () => _0x218161(Error("Timed out loading document chart print image.")),
        10000,
      ),
      _0xc2a692 = (_0x5aaff0) => {
        (globalThis.clearTimeout(_0x181a05),
          (_0x2c5862.onload = null),
          (_0x2c5862.onerror = null),
          _0x5aaff0());
      };
    ((_0x2c5862.onload = () => _0xc2a692(() => _0x5618f8(_0x2c5862))),
      (_0x2c5862.onerror = () =>
        _0xc2a692(() =>
          _0x218161(Error("Failed to load document chart print image.")),
        )),
      (_0x2c5862.src = _0x5f2ac8),
      _0x2c5862.complete &&
        _0x2c5862.naturalWidth > 0 &&
        _0xc2a692(() => _0x5618f8(_0x2c5862)));
  });
}
let $ = class extends _0xdf35aa {
  constructor(_0x2e33c6 = Qr, _0x416cf1, _0x2f45dd, _0x516f80) {
    (super(),
      (this._config = _0x2e33c6),
      (this._injector = _0x416cf1),
      (this._configService = _0x2f45dd),
      (this._commandService = _0x516f80));
    let { ..._0x4d299e } = _0x3a54c8({}, Qr, this._config);
    (this._configService["setConfig"](Zr, _0x4d299e), this._initCommands());
  }
  onStarting() {
    let _0x3519f4 = this._injector;
    ([
      [wi],
      [K],
      [V],
      [mr, { useClass: hr }],
      [Q],
      [ki],
      [W],
      [Y],
      [Di],
      [ri],
      [mi],
      [q],
      [J],
      [Ei],
    ].forEach((_0x45bc35) => _0x3519f4.add(_0x45bc35)),
      _0x438528(_0x3519f4, [
        [K],
        [V],
        [mr],
        [Q],
        [ki],
        [W],
        [Y],
        [Di],
        [q],
        [J],
      ]),
      this._injector["get"](wi));
  }
  onReady() {
    (this._injector["get"](ri),
      this._injector["get"](mi),
      this._injector["get"](q),
      this._injector["get"](J),
      this._injector["get"](Ei));
  }
  _initCommands() {
    [L, R].forEach((_0x4a7df8) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x4a7df8));
    });
  }
};
(U($, "type", _0x53698d.UNIVER_DOC),
  U($, "pluginName", "UniverDocsChartUIPlugin"),
  U($, "packageName", ui),
  U($, "version", di),
  ($ = B(
    [
      _0x41f0eb(
        _0xe96f0d,
        _0x19f343,
        _0xd9ced4,
        _0x44f4d2,
        _0x57f771,
        _0x597a38,
        _0x866c98,
        _0x2dd3e6,
        _0x59c8dc,
      ),
      z(1, _0x59e556(_0x450648)),
      z(2, _0x56abb5),
      z(3, _0x1382c0),
    ],
    $,
  )));
export {
  Zr as DOCS_CHART_UI_PLUGIN_CONFIG_KEY,
  xi as DOC_ACTIVE_CHART_COMPONENT,
  $r as DOC_CHART_CLIPBOARD_RESOURCE_KEY,
  ur as DOC_CHART_DATA_EDITOR_COMPONENT,
  dr as DOC_CHART_DATA_EDITOR_DIALOG_ID,
  Nr as DOC_CHART_EDITOR_DIALOG_COMPONENT,
  Pr as DOC_CHART_EDITOR_DIALOG_ID,
  ii as DOC_CHART_INSERT_BELOW_MENU_ID,
  X as DOC_CHART_INSERT_MENU_ID,
  Jr as DOC_CHART_INSERT_PANEL_COMPONENT,
  Si as DocActiveChart,
  Q as DocChartActiveRenderService,
  q as DocChartClipboardController,
  V as DocChartDataEditService,
  pr as DocChartDataEditor,
  fr as DocChartDataEditorSubmitMode,
  J as DocChartDrawingEditController,
  Sr as DocChartEditPanel,
  Fr as DocChartEditorDialog,
  ci as DocChartInsertBelowMenuItemFactory,
  Z as DocChartInsertMenuItemFactory,
  Xr as DocChartInsertPanel,
  si as DocChartInsertRibbonMenuItemFactory,
  K as DocChartInsertService,
  ki as DocChartPrintService,
  W as DocChartRenderService,
  ri as DocChartSnapshotRefreshController,
  Y as DocChartSnapshotRenderService,
  hr as DocChartUIService,
  Or as DocDomChartHost,
  Ci as DocPrintChart,
  li as DocsChartUIMenuSchema,
  ti as IDocChartSnapshotRendererService,
  mr as IDocChartUIService,
  R as OpenDocChartEditorDialogOperation,
  L as OpenDocChartInsertDialogOperation,
  $ as UniverDocsChartUIPlugin,
  Qr as defaultPluginConfig,
  ai as getDocChartInsertDisabledObservable,
};
