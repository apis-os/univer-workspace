import {
  BoardElementType as _0x1b532c,
  BoardToolType as _0x3d2b37,
  IBoardElementService as _0x162dc7,
  InsertBoardChartCommand as _0x292d78,
  UniverBoardsPlugin as _0xb3c691,
  resolveBoardElementWorldBounds as _0x271742,
} from "@univerjs-pro/boards";
import {
  BOARDS_UI_PLUGIN_CONFIG_KEY as _0x1cf024,
  BOARD_INSERT_CHART_PANEL_COMPONENT as _0x2eaf2a,
  BoardCanvasPopManagerService as _0x4a657e,
  BoardDeleteSelectionOperation as _0xfed0f,
  BoardDomLayerService as _0x21a298,
  BoardInteractionSurfaceService as _0x200888,
  IBoardClipboardResourceAdapterService as _0x5d51ae,
  IBoardElementStateService as _0x5537f2,
  IBoardSidePanelService as _0x1a0250,
  IBoardUIStateService as _0x1febeb,
  UniverBoardsUIPlugin as _0x1856ae,
  getBoardElementRenderObjectKey as _0x5f5771,
  resolveRotatedBoardObjectAnchorBound as _0x44e8eb,
} from "@univerjs-pro/boards-ui";
import {
  CommandType as _0x1a726a,
  DependentOn as _0x10e69f,
  Disposable as _0x175372,
  DisposableCollection as _0x140e64,
  ICommandService as _0x3fa76e,
  IConfigService as _0x20bed4,
  IUniverInstanceService as _0x4a8574,
  Inject as _0x1d1546,
  Injector as _0x4ffb23,
  LocaleService as _0x1cf08f,
  Optional as _0x10187f,
  Plugin as _0x54f9d9,
  RxDisposable as _0x36351d,
  ThemeService as _0x54c40f,
  Tools as _0x10693b,
  UniverInstanceType as _0x255b36,
  createIdentifier as _0x385bca,
  generateRandomId as _0x114f0e,
  merge as _0x40b185,
  toDisposable as _0x3bfe87,
  touchDependencies as _0x59611d,
} from "@univerjs/core";
import {
  BehaviorSubject as _0x56bf99,
  auditTime as _0xdfef40,
  combineLatest as _0x2db827,
  filter as _0x2929ac,
  fromEvent as _0x596695,
  merge as _0x15abee,
  skip as _0x45da7d,
  takeUntil as _0x27bbde,
  throttleTime as _0x3e5fe2,
} from "rxjs";
import {
  BoardChartConfigAdapter as _0x57faec,
  BoardChartModelService as _0x35d8c1,
  BoardChartResourceService as _0x4a1962,
  ChangeBoardChartDataSourceCommand as _0x301e69,
  DEFAULT_BOARD_CHART_VALUES as _0x438251,
  RemoveBoardChartDataSourceMutation as _0x4e7fcf,
  RemoveBoardChartSnapshotMutation as _0x27d8ed,
  SetBoardChartDataSourceMutation as _0x4aa746,
  SetBoardChartSnapshotMutation as _0x1bffae,
  UniverBoardsChartPlugin as _0x4022b9,
  UpdateBoardChartConfigCommand as _0x4b0371,
} from "@univerjs-pro/boards-chart";
import {
  CHART_ELEMENT_FLOAT_MENU_COMPONENT as _0x27f0aa,
  CHART_TYPE_CATALOG as _0x5a5c79,
  ChartAxisSection as _0x4397ed,
  ChartCommonDataMappingSection as _0x436055,
  ChartEditBlockTitle as _0x26f3fc,
  ChartEditPanel as _0x2e2fdf,
  ChartEditPanelSection as _0x3c66ac,
  ChartEditPanelTab as _0x18a71e,
  ChartEditPanelTabs as _0x82febe,
  ChartEditorCapability as _0x1dc06b,
  ChartEditorProvider as _0x13566e,
  ChartElementFloatMenuAdapterRegistry as _0x1e013f,
  ChartFunnelStyleSection as _0x45a01f,
  ChartGradientFillField as _0x35fca6,
  ChartGridlinesAndTicksSection as _0x1bf806,
  ChartHeatmapStyleSection as _0x1e539c,
  ChartHostAdapter as _0x54d105,
  ChartImageExportService as _0x179309,
  ChartIndicatorLineSection as _0x324d83,
  ChartInlineTableEditor as _0x545508,
  ChartLegendSection as _0x3997da,
  ChartLineAndAreaSection as _0x12324d,
  ChartNumberFormatTextField as _0x3ab1f9,
  ChartParetoSeriesSection as _0x121072,
  ChartPieStyleSection as _0x2aef84,
  ChartRadarStyleSection as _0x131756,
  ChartReferencedDataSourceEditor as _0x1b5b9e,
  ChartRelationStyleSection as _0x140fc6,
  ChartSectionAccordion as _0x3bb192,
  ChartSectionAccordionContent as _0x5ea94d,
  ChartSectionAccordionItem as _0x46a7b1,
  ChartSectionAccordionTrigger as _0x13f881,
  ChartSeriesBorderFields as _0x4d0c16,
  ChartSeriesDataLabelFields as _0x3a1234,
  ChartSeriesDataPointFields as _0x30ca6d,
  ChartSeriesFillFields as _0x487cac,
  ChartSeriesPointFields as _0x52f546,
  ChartSeriesRightAxisField as _0x20238a,
  ChartSeriesRoot as _0x2a12b1,
  ChartSeriesSelector as _0x25a769,
  ChartSeriesTypeField as _0x191aec,
  ChartSnapshotQueue as _0x37414e,
  ChartStackField as _0x4949b6,
  ChartStyleSection as _0x1c3e01,
  ChartThemeField as _0xded953,
  ChartTitlesSection as _0x5385f3,
  ChartTrendlineSection as _0x2b5e40,
  ChartTypeField as _0x45e448,
  ChartTypeSpecificDataSection as _0x14462f,
  ChartTypeSpecificSetupSection as _0x3e8128,
  ChartTypeSpecificStyleSection as _0x2086a2,
  ChartUIService as _0x36c24a,
  ChartViewStateRegistry as _0x6f8d1d,
  ChartWaterfallSetupFields as _0x166481,
  ChartWaterfallStyleSection as _0xfc1097,
  ChartWordCloudMaskImageIdField as _0x5578b6,
  ChartWordCloudRepeatField as _0x450d40,
  ChartWordCloudRoot as _0x9dfeaf,
  ChartWordCloudShapeField as _0x5d7ad9,
  DEFAULT_CHART_AXIS_VALUES as _0x2794c8,
  DEFAULT_CHART_FUNNEL_VALUES as _0x4ea447,
  DEFAULT_CHART_HEATMAP_VALUES as _0x4779ce,
  DEFAULT_CHART_INDICATOR_LINE_VALUES as _0x524d55,
  DEFAULT_CHART_LEGEND_VALUES as _0x1cf02b,
  DEFAULT_CHART_LINE_AND_AREA_VALUES as _0x37b1a9,
  DEFAULT_CHART_PARETO_VALUES as _0x314fdf,
  DEFAULT_CHART_PIE_VALUES as _0x4cad60,
  DEFAULT_CHART_RADAR_VALUES as _0x75bc68,
  DEFAULT_CHART_RELATION_VALUES as _0x5d85e8,
  DEFAULT_CHART_SERIES_VALUES as _0x362c02,
  DEFAULT_CHART_STYLE_VALUES as _0x3a418a,
  DEFAULT_CHART_TITLE_VALUES as _0x3d0a5b,
  DEFAULT_CHART_TRENDLINE_VALUES as _0x553f7b,
  DEFAULT_CHART_WATERFALL_SETUP_VALUES as _0x4584cf,
  DEFAULT_CHART_WATERFALL_STYLE_VALUES as _0x481ad4,
  DEFAULT_CHART_WORD_CLOUD_VALUES as _0x884762,
  InlineChartCreationIssueCode as _0x20dc2f,
  UniverChartUIPlugin as _0xca70fc,
  buildChartTypeSelectOptions as _0x25b47c,
  chartTypeSupportsCapability as _0x312eff,
  chartTypeSupportsLineAndAreaStyle as _0x286478,
  createChartElementFloatMenuAdapter as _0x978ab3,
  createChartInlineStarterData as _0x6990ab,
  getChartInlineTableMinColumns as _0x1d7ef8,
  resolveChartEditPanelRoute as _0x24a090,
  resolveChartElementSelection as _0x53cc07,
  tryBuildInlineChartCreationPlan as _0x2eb909,
  tryPrepareInlineChartData as _0x1cb4a0,
  useChartEditorChartType as _0x43e304,
  useChartEditorHasRightAxis as _0x4c4d2f,
  useChartTypeFieldState as _0x1aeacc,
} from "@univerjs-pro/chart-ui";
import { ShapeFloatingToolbarMenuActions as _0x460480 } from "@univerjs-pro/shape-editor-ui";
import {
  Button as _0x14c3eb,
  Select as _0x1530ec,
  Separator as _0x2e2d8b,
  borderClassName as _0x368f6c,
  clsx as _0x2333a2,
} from "@univerjs/design";
import { DeleteIcon as _0x2ad99c, PenIcon as _0x236632 } from "@univerjs/icons";
import {
  ComponentManager as _0xf4da3a,
  FloatingObjectToolbarPosition as _0x184e9f,
  ICanvasPopupService as _0x272602,
  IDialogService as _0x232877,
  useDependency as _0x3e1b78,
  useObservable as _0x4ea1,
} from "@univerjs/ui";
import {
  useEffect as _0x163fa4,
  useMemo as _0x36f57d,
  useRef as _0x1b8fff,
  useState as _0x51b079,
} from "react";
import { jsx as _0x48b202, jsxs as _0x5e51d3 } from "react/jsx-runtime";
import {
  CHART_HOST_DEFAULT_BORDER_COLOR as _0x33eee3,
  CHART_HOST_DEFAULT_BORDER_RADIUS as _0xc5f115,
  ChartDataSourceRuntimeStatus as _0x595424,
  ChartImageExportFormat as _0x277325,
  ChartRenderMode as _0x3121d4,
  ChartThemeService as _0x4df370,
  ChartTypeBits as _0x4b1a88,
  DataUrlImageChartHost as _0x154bf7,
  IChartRenderModelManagerService as _0x12c551,
  chartBitsUtils as _0x460986,
  chartTypeCanUseTrendLine as _0x475b3a,
  defaultChartConfig as _0x3166ec,
  isInlineChartDataSource as _0x1a96cf,
  isReferencedChartDataSource as _0x1fe944,
  parseInlineChartTable as _0x153d29,
  resolveChartRuntimeStyle as _0x1c0085,
  resolveDefaultChartHostFrameStyle as _0x3b7a26,
} from "@univerjs-pro/engine-chart";
import { UniverLicensePlugin as _0x29473f } from "@univerjs-pro/license";
import {
  IRenderManagerService as _0x31808b,
  Image as _0x412d13,
  UniverRenderEnginePlugin as _0x137e5b,
} from "@univerjs/engine-render";
const Gn = "boards-chart-ui.config",
  Kn = {};
function B(_0x179c94) {
  "@babel/helpers - typeof";
  return (
    (B =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x35d606) {
            return typeof _0x35d606;
          }
        : function (_0x49757c) {
            return _0x49757c &&
              typeof Symbol == "function" &&
              _0x49757c.constructor === Symbol &&
              _0x49757c !== Symbol.prototype
              ? "symbol"
              : typeof _0x49757c;
          }),
    B(_0x179c94)
  );
}
function qn(_0x1fff91, _0x247cba) {
  if (B(_0x1fff91) != "object" || !_0x1fff91) return _0x1fff91;
  var _0x572ab3 = _0x1fff91[Symbol.toPrimitive];
  if (_0x572ab3 !== undefined) {
    var _0x337fc5 = _0x572ab3.call(_0x1fff91, _0x247cba || "default");
    if (B(_0x337fc5) != "object") return _0x337fc5;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x247cba === "string" ? String : Number)(_0x1fff91);
}
function Jn(_0x4d108b) {
  var _0x391c69 = qn(_0x4d108b, "string");
  return B(_0x391c69) == "symbol" ? _0x391c69 : _0x391c69 + "";
}
function V(_0x24b517, _0x23f62f, _0x521b1c) {
  return (
    (_0x23f62f = Jn(_0x23f62f)) in _0x24b517
      ? Object.defineProperty(_0x24b517, _0x23f62f, {
          value: _0x521b1c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x24b517[_0x23f62f] = _0x521b1c),
    _0x24b517
  );
}
function H(_0xb4f9f2, _0x354859) {
  return function (_0xe716c0, _0x184e43) {
    _0x354859(_0xe716c0, _0x184e43, _0xb4f9f2);
  };
}
function U(_0x1ea208, _0x3c4153, _0x56dbd2, _0x58a2f2) {
  var _0x4116bd = arguments.length,
    _0x4d4c4f =
      _0x4116bd < 3
        ? _0x3c4153
        : _0x58a2f2 === null
          ? (_0x58a2f2 = Object.getOwnPropertyDescriptor(_0x3c4153, _0x56dbd2))
          : _0x58a2f2,
    _0x13e7a6;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4d4c4f = Reflect.decorate(_0x1ea208, _0x3c4153, _0x56dbd2, _0x58a2f2);
  else {
    for (var _0xc9896e = _0x1ea208.length - 1; _0xc9896e >= 0; _0xc9896e--)
      (_0x13e7a6 = _0x1ea208[_0xc9896e]) &&
        (_0x4d4c4f =
          (_0x4116bd < 3
            ? _0x13e7a6(_0x4d4c4f)
            : _0x4116bd > 3
              ? _0x13e7a6(_0x3c4153, _0x56dbd2, _0x4d4c4f)
              : _0x13e7a6(_0x3c4153, _0x56dbd2)) || _0x4d4c4f);
  }
  return (
    _0x4116bd > 3 &&
      _0x4d4c4f &&
      Object.defineProperty(_0x3c4153, _0x56dbd2, _0x4d4c4f),
    _0x4d4c4f
  );
}
function Yn(_0x259fda, _0x111a16) {
  return (
    (_0x259fda == null ? undefined : _0x259fda.tab) ===
      (_0x111a16 == null ? undefined : _0x111a16.tab) &&
    (_0x259fda == null ? undefined : _0x259fda.section) ===
      (_0x111a16 == null ? undefined : _0x111a16.section) &&
    (_0x259fda == null ? undefined : _0x259fda.titleKey) ===
      (_0x111a16 == null ? undefined : _0x111a16.titleKey) &&
    (_0x259fda == null ? undefined : _0x259fda.axisId) ===
      (_0x111a16 == null ? undefined : _0x111a16.axisId) &&
    (_0x259fda == null ? undefined : _0x259fda.seriesId) ===
      (_0x111a16 == null ? undefined : _0x111a16.seriesId)
  );
}
function Xn(_0x17a4c0, _0x2ffb9f) {
  return (
    (_0x17a4c0 == null ? undefined : _0x17a4c0.unitId) === _0x2ffb9f.unitId &&
    _0x17a4c0.subUnitId === _0x2ffb9f.subUnitId &&
    _0x17a4c0.elementId === _0x2ffb9f.elementId &&
    _0x17a4c0.chartId === _0x2ffb9f.chartId &&
    _0x17a4c0.source === _0x2ffb9f.source &&
    Yn(_0x17a4c0.route, _0x2ffb9f.route)
  );
}
let W = class extends _0x175372 {
  constructor(_0x42123e, _0x39ac3) {
    (super(),
      (this._elementStateService = _0x42123e),
      (this._boardElementService = _0x39ac3),
      V(this, "_activeSession$", new _0x56bf99(null)),
      V(this, "activeSession$", this._activeSession$["asObservable"]()),
      this.disposeWithMe(
        this._elementStateService["state$"].subscribe((_0x1cfa3b) =>
          this._syncSelectionState(_0x1cfa3b),
        ),
      ),
      this.disposeWithMe(
        this._boardElementService["elementRemove$"].subscribe((_0x33682a) => {
          let _0x2e8e38 = this.getActiveSession();
          _0x2e8e38 &&
            _0x33682a.some(
              (_0x432f4b) =>
                _0x432f4b.unitId === _0x2e8e38.unitId &&
                _0x432f4b.subUnitId === _0x2e8e38.subUnitId &&
                _0x432f4b.elementId === _0x2e8e38.elementId,
            ) &&
            this.close("elementRemoved");
        }),
      ));
  }
  dispose() {
    (this.close("dispose"),
      this._activeSession$["complete"](),
      super.dispose());
  }
  getActiveSession() {
    return this._activeSession$["getValue"]();
  }
  open(_0x4131a7) {
    let _0x295b45 = { ..._0x4131a7 };
    Xn(this.getActiveSession(), _0x295b45) ||
      this._activeSession$["next"](_0x295b45);
  }
  close(_0x16b518) {
    this.getActiveSession() && this._activeSession$["next"](null);
  }
  _syncSelectionState(_0x1cb186) {
    let _0xb2cfef = this.getActiveSession();
    if (!_0xb2cfef) return;
    if (_0x1cb186.isTransforming) {
      this.close("transformStart");
      return;
    }
    if (!_0x1cb186.context) {
      this.close("selectionChange");
      return;
    }
    if (_0x1cb186.context["unitId"] !== _0xb2cfef.unitId) {
      this.close("selectionChange");
      return;
    }
    if (_0x1cb186.context["subUnitId"] !== _0xb2cfef.subUnitId) {
      this.close("pageChange");
      return;
    }
    if (
      _0x1cb186.selectedIds["length"] !== 1 ||
      _0x1cb186.focusedId !== _0xb2cfef.elementId
    ) {
      this.close("selectionChange");
      return;
    }
    let _0x4cb101 = this._boardElementService["getElementById"](
      _0xb2cfef.unitId,
      _0xb2cfef.subUnitId,
      _0xb2cfef.elementId,
    );
    (!_0x4cb101 ||
      _0x4cb101.element["type"] !== _0x1b532c.Chart ||
      _0x4cb101.element["chartId"] !== _0xb2cfef.chartId) &&
      this.close("selectionChange");
  }
};
W = U([H(0, _0x5537f2), H(1, _0x162dc7)], W);
const G = _0x385bca("board-chart.ui.service");
let Zn = class extends _0x36c24a {
  constructor(_0x597254, _0x42fce9, _0x2e0dd4, _0xe00a7b) {
    (super(_0xe00a7b),
      (this._modelService = _0x597254),
      (this._resourceService = _0x42fce9),
      (this._commandService = _0x2e0dd4));
  }
  get activeRuntimeModel() {
    return this._modelService["activeRuntimeModel"];
  }
  get activeRuntimeModel$() {
    return this._modelService["activeRuntimeModel$"];
  }
  get resourceService() {
    return this._resourceService;
  }
  executeChartUpdateConfig(_0x5a6758) {
    let _0x573362 = this._modelService["activeRuntimeModel"],
      _0x5e51f4 =
        _0x5a6758.unitId ?? (_0x573362 == null ? undefined : _0x573362.unitId),
      _0x2fb63f =
        _0x5a6758.chartId ??
        (_0x573362 == null ? undefined : _0x573362.chartId);
    !_0x5e51f4 ||
      !_0x2fb63f ||
      this._commandService["executeCommand"](_0x4b0371.id, {
        ..._0x5a6758,
        unitId: _0x5e51f4,
        chartId: _0x2fb63f,
      });
  }
};
Zn = U(
  [
    H(0, _0x1d1546(_0x35d8c1)),
    H(1, _0x1d1546(_0x4a1962)),
    H(2, _0x3fa76e),
    H(3, _0x1d1546(_0x6f8d1d)),
  ],
  Zn,
);
const Qn = "board.chart.floating-toolbar";
function $n(_0xabc8e2) {
  _0xabc8e2.stopPropagation();
}
function er(_0x444171) {
  let _0x4cabe7 = _0x3e1b78(_0x3fa76e),
    _0x154a18 = _0x3e1b78(_0x1cf08f),
    _0x240042 = _0x3e1b78(_0x35d8c1),
    _0x1ccfe3 = _0x3e1b78(W),
    _0x5c0902 = _0x1aeacc(_0x444171.typeOptions),
    { extraProps: _0x1406fc } = _0x444171;
  return _0x5e51d3("div", {
    className: _0x2333a2(
      "univer-box-border univer-flex univer-h-12 univer-items-center univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-px-2 univer-py-1.5 univer-text-gray-700 univer-shadow-lg dark:!univer-bg-gray-900 dark:!univer-text-gray-100",
      _0x368f6c,
    ),
    "data-u-comp": "board-chart-floating-toolbar",
    role: "toolbar",
    onMouseDown: $n,
    onPointerDown: $n,
    children: [
      _0x48b202(_0x1530ec, {
        "aria-label": _0x154a18.t("boards-chart-ui.common.chartType"),
        className: "!univer-w-36 !univer-min-w-0",
        value: _0x5c0902.value,
        options: _0x444171.typeOptions,
        onChange: (_0x50c8f0) => {
          (_0x240042.setActiveChartById(_0x1406fc.unitId, _0x1406fc.chartId),
            _0x5c0902.setValue(_0x50c8f0));
        },
      }),
      _0x48b202(_0x2e2d8b, { orientation: "vertical" }),
      _0x48b202(_0x14c3eb, {
        size: "small",
        variant: "ghost",
        type: "button",
        "aria-label": _0x154a18.t("boards-chart-ui.common.editChart"),
        title: _0x154a18.t("boards-chart-ui.common.editChart"),
        "data-toolbar-item": "edit-chart",
        onClick: () => {
          _0x1ccfe3.open({
            chartId: _0x1406fc.chartId,
            elementId: _0x1406fc.elementId,
            source: "quickToolbar",
            subUnitId: _0x1406fc.subUnitId,
            unitId: _0x1406fc.unitId,
          });
        },
        children: _0x48b202(_0x236632, {}),
      }),
      _0x48b202(_0x460480, { position: _0x184e9f.BOARD }),
      _0x48b202(_0x14c3eb, {
        size: "small",
        variant: "ghost",
        type: "button",
        "aria-label": _0x154a18.t("boards-chart-ui.common.deleteChart"),
        title: _0x154a18.t("boards-chart-ui.common.deleteChart"),
        "data-toolbar-item": "delete-chart",
        onClick: () => _0x4cabe7.executeCommand(_0xfed0f.id),
        children: _0x48b202(_0x2ad99c, {}),
      }),
    ],
  });
}
function tr(_0x1c09ef) {
  let _0x5aab1b = _0x3e1b78(_0x4ffb23),
    _0x2b9df9 = _0x3e1b78(_0x4a8574),
    _0x37b587 = _0x3e1b78(_0x1cf08f),
    _0x55e8c8 = _0x3e1b78(_0x35d8c1),
    _0x58374a = _0x3e1b78(G),
    _0x3696ca = _0x36f57d(
      () => _0x55e8c8.ensureChartModel(_0x1c09ef.unitId, _0x1c09ef.chartId),
      [_0x1c09ef.chartId, _0x1c09ef.unitId, _0x55e8c8],
    ),
    _0x7617f5 = _0x36f57d(() => {
      let _0x3fac04 = _0x2b9df9.getUnit(
        _0x1c09ef.unitId,
        _0x255b36.UNIVER_BOARD,
      );
      return !_0x3696ca || !_0x3fac04
        ? null
        : new _0x54d105(
            _0x3696ca.model,
            new _0x57faec({
              unitId: _0x1c09ef.unitId,
              pageId: _0x1c09ef.subUnitId,
              chartId: _0x1c09ef.chartId,
              elementId: _0x1c09ef.elementId,
              boardModel: _0x3fac04,
              injector: _0x5aab1b,
            }),
          );
    }, [_0x1c09ef, _0x5aab1b, _0x3696ca, _0x2b9df9]),
    _0x53630f = _0x36f57d(
      () =>
        _0x25b47c(
          _0x5a5c79.map((_0x2bf9fe) => ({
            ..._0x2bf9fe,
            label: _0x37b587.t(
              "boards-chart-ui.chartTypes." + _0x2bf9fe.labelId,
            ),
          })),
        ),
      [_0x37b587],
    );
  return !_0x3696ca || !_0x7617f5
    ? null
    : _0x48b202(_0x13566e, {
        chartUIService: _0x58374a,
        hostAdapter: _0x7617f5,
        children: _0x48b202(er, {
          extraProps: _0x1c09ef,
          typeOptions: _0x53630f,
        }),
      });
}
function nr(_0x349132) {
  let _0xe58652 = _0x349132.popup["extraProps"];
  return _0xe58652 ? _0x48b202(tr, { ..._0xe58652 }) : null;
}
let rr = class extends _0x36351d {
  constructor(
    _0x583544,
    _0x2679ff,
    _0x24198a,
    _0x4ffc8d,
    _0xdc7772,
    _0x4ac2e0,
    _0x1740c8,
  ) {
    (super(),
      (this._renderContext = _0x583544),
      (this._boardCanvasPopManagerService = _0x2679ff),
      (this._boardElementService = _0x24198a),
      (this._elementStateService = _0x4ffc8d),
      (this._uiStateService = _0xdc7772),
      (this._editSessionService = _0x4ac2e0),
      (this._interactionSurfaceService = _0x1740c8),
      V(this, "_popupDisposable", null),
      V(this, "_popupSelectionKey", null),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x47338b = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      _0x3bfe87(
        _0x47338b.createControl$["pipe"](_0x27bbde(this.dispose$)).subscribe(
          () => {
            this._showPopupForSelection();
          },
        ),
      ),
    ),
      this.disposeWithMe(
        _0x3bfe87(
          _0x47338b.clearControl$["pipe"](_0x27bbde(this.dispose$)).subscribe(
            () => {
              this._clearPopupIfSelectionChanged();
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          _0x47338b.changeStart$["pipe"](_0x27bbde(this.dispose$)).subscribe(
            () => {
              this._clearPopup();
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          _0x47338b.changeEnd$["pipe"](_0x27bbde(this.dispose$)).subscribe(
            () => {
              setTimeout(() => this._showPopupForSelection(), 0);
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          this._elementStateService["state$"]
            .pipe(_0x27bbde(this.dispose$))
            .subscribe(() => {
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          this._uiStateService["state$"]
            .pipe(_0x27bbde(this.dispose$))
            .subscribe(() => {
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          this._editSessionService["activeSession$"]
            .pipe(_0x27bbde(this.dispose$))
            .subscribe((_0x31e88f) => {
              if (_0x31e88f) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(
          this._interactionSurfaceService["interactionSurfaceActive$"]
            .pipe(_0x27bbde(this.dispose$))
            .subscribe((_0x21afd1) => {
              if (_0x21afd1) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ));
  }
  _clearPopup() {
    var _0x406c4d;
    ((_0x406c4d = this._popupDisposable) == null || _0x406c4d.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x457ff3 = this._elementStateService["getSnapshot"]();
    return !_0x457ff3.context || _0x457ff3.selectedIds["length"] !== 1
      ? false
      : this._popupSelectionKey ===
          this._buildPopupSelectionKey(
            _0x457ff3.context["unitId"],
            _0x457ff3.context["subUnitId"],
            _0x457ff3.selectedIds[0],
          );
  }
  _buildPopupSelectionKey(_0x361096, _0x4d9222, _0x4bc319) {
    return _0x361096 + ":" + _0x4d9222 + ":" + _0x4bc319;
  }
  _showPopupForSelection() {
    if (
      this._interactionSurfaceService["isInteractionSurfaceActive"] ||
      this._editSessionService["getActiveSession"]()
    ) {
      this._clearPopup();
      return;
    }
    let _0x4ee245 = this._elementStateService["getSnapshot"](),
      _0x323e37 = this._uiStateService["getState"]();
    if (
      _0x4ee245.isTransforming ||
      _0x323e37.pendingInsert ||
      (_0x323e37.activeTool !== null &&
        _0x323e37.activeTool !== _0x3d2b37.Select) ||
      !_0x4ee245.context ||
      _0x4ee245.context["unitId"] !== this._renderContext["unitId"] ||
      _0x4ee245.selectedIds["length"] !== 1 ||
      _0x4ee245.focusedId == null
    ) {
      this._clearPopup();
      return;
    }
    let _0x5a2342 = this._boardElementService["getElementById"](
      _0x4ee245.context["unitId"],
      _0x4ee245.context["subUnitId"],
      _0x4ee245.focusedId,
    );
    if (!_0x5a2342 || _0x5a2342.element["type"] !== _0x1b532c.Chart) {
      this._clearPopup();
      return;
    }
    let _0x58986f = this._resolveElementObject(_0x5a2342);
    if (!_0x58986f) {
      this._clearPopup();
      return;
    }
    let _0x74774a = this._buildPopupSelectionKey(
      _0x5a2342.unitId,
      _0x5a2342.subUnitId,
      _0x5a2342.elementId,
    );
    (this._popupDisposable && this._popupSelectionKey === _0x74774a) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x5a2342.unitId,
          _0x5a2342.subUnitId,
          _0x58986f,
          {
            componentKey: Qn,
            direction: "top-center",
            offset: [0, 36],
            anchorBoundResolver: _0x44e8eb,
            extraProps: {
              unitId: _0x5a2342.unitId,
              subUnitId: _0x5a2342.subUnitId,
              elementId: _0x5a2342.elementId,
              chartId: _0x5a2342.element["chartId"],
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x74774a));
  }
  _resolveElementObject(_0x2478aa) {
    var _0x2fcca6;
    let _0xb49dd6 = _0x5f5771(_0x2478aa.unitId, _0x2478aa.elementId),
      _0x201289 = this._renderContext["scene"];
    return (
      ((_0x2fcca6 = _0x201289.getObjectIncludeInGroup) == null
        ? undefined
        : _0x2fcca6.call(_0x201289, _0xb49dd6)) ??
      _0x201289.getObject(_0xb49dd6) ??
      null
    );
  }
};
rr = U(
  [
    H(1, _0x1d1546(_0x4a657e)),
    H(2, _0x162dc7),
    H(3, _0x5537f2),
    H(4, _0x1febeb),
    H(5, _0x1d1546(W)),
    H(6, _0x1d1546(_0x200888)),
  ],
  rr,
);
let ir = class extends _0x36351d {
  constructor(
    _0x1e3401,
    _0x243008,
    _0x2c261a,
    _0x1ea685,
    _0x39832c,
    _0x2ef165,
  ) {
    (super(),
      (this._renderContext = _0x1e3401),
      (this._instanceService = _0x243008),
      (this._boardElementService = _0x2c261a),
      (this._elementStateService = _0x1ea685),
      (this._uiStateService = _0x39832c),
      (this._editSessionService = _0x2ef165),
      V(this, "_attachScheduled", false),
      V(this, "_objectDblclickDisposables", null),
      this._init());
  }
  _init() {
    let { unitId: _0x308228 } = this._renderContext,
      _0x1bc122 = this._instanceService["getUnit"](
        _0x308228,
        _0x255b36.UNIVER_BOARD,
      );
    (this.disposeWithMe(
      _0x3bfe87(() => {
        var _0x34d9af;
        return (_0x34d9af = this._objectDblclickDisposables) == null
          ? undefined
          : _0x34d9af.dispose();
      }),
    ),
      _0x1bc122 &&
        (this._scheduleAttachObjectDoubleClicks(_0x1bc122),
        this.disposeWithMe(
          this._boardElementService["elementAdd$"].subscribe((_0x3b09ee) => {
            _0x3b09ee.some((_0x3b4950) => _0x3b4950.unitId === _0x308228) &&
              this._scheduleAttachObjectDoubleClicks(_0x1bc122);
          }),
        ),
        this.disposeWithMe(
          this._boardElementService["elementUpdate$"].subscribe((_0x46003e) => {
            _0x46003e.some((_0x3126cc) => _0x3126cc.unitId === _0x308228) &&
              this._scheduleAttachObjectDoubleClicks(_0x1bc122);
          }),
        ),
        this.disposeWithMe(
          this._boardElementService["elementRemove$"].subscribe((_0x537d35) => {
            _0x537d35.some((_0x1f0134) => _0x1f0134.unitId === _0x308228) &&
              this._scheduleAttachObjectDoubleClicks(_0x1bc122);
          }),
        ),
        this.disposeWithMe(
          this._elementStateService["state$"].subscribe((_0x1755dd) => {
            var _0x5a975f;
            ((_0x5a975f = _0x1755dd.context) == null
              ? undefined
              : _0x5a975f.unitId) === _0x308228 &&
              this._scheduleAttachObjectDoubleClicks(_0x1bc122);
          }),
        )));
  }
  _scheduleAttachObjectDoubleClicks(_0x4f96f1) {
    this._attachScheduled ||
      ((this._attachScheduled = true),
      Promise.resolve().then(() => this._attachObjectDoubleClicks(_0x4f96f1)));
  }
  _attachObjectDoubleClicks(_0x3bc364) {
    var _0x1474e7;
    this._attachScheduled = false;
    let { scene: _0x24f879, unitId: _0x4dc062 } = this._renderContext,
      _0x53ea48 = _0x3bc364.getActivePageId(),
      _0x4a3396 = this._boardElementService["getElementOrder"](
        _0x4dc062,
        _0x53ea48,
      ),
      _0x11682b = new _0x140e64();
    ((_0x1474e7 = this._objectDblclickDisposables) == null ||
      _0x1474e7.dispose(),
      (this._objectDblclickDisposables = _0x11682b),
      _0x4a3396.forEach((_0x551584) => {
        var _0x5020de;
        let _0x484ad9 = this._boardElementService["getElementById"](
          _0x4dc062,
          _0x53ea48,
          _0x551584,
        );
        if (!_0x484ad9 || _0x484ad9.element["type"] !== _0x1b532c.Chart) return;
        let _0x1aed18 = _0x5f5771(_0x4dc062, _0x551584),
          _0x377569 =
            ((_0x5020de = _0x24f879.getObjectIncludeInGroup) == null
              ? undefined
              : _0x5020de.call(_0x24f879, _0x1aed18)) ??
            _0x24f879.getObject(_0x1aed18);
        _0x377569 &&
          _0x11682b.add(
            _0x3bfe87(
              _0x377569.onDblclick$["subscribeEvent"](
                (_0x4a4ccd, _0x583d07) => {
                  this._openEditSession(_0x484ad9, _0x4a4ccd, _0x583d07);
                },
              ),
            ),
          );
      }));
  }
  _openEditSession(_0x1a06fc, _0x14f12e, _0x1256bc) {
    var _0x114ce2;
    if (
      this._uiStateService["getState"]().interactionMode === "viewing" ||
      this._uiStateService["getState"]().pendingInsert ||
      this._elementStateService["getSnapshot"]().isTransforming ||
      _0x1a06fc.element["type"] !== _0x1b532c.Chart
    )
      return;
    let _0x4dc76f = {
      unitId: _0x1a06fc.unitId,
      subUnitId: _0x1a06fc.subUnitId,
    };
    (this._elementStateService["selectElements"](
      _0x4dc76f,
      [_0x1a06fc.elementId],
      _0x1a06fc.elementId,
    ),
      this._elementStateService["setFocusedSwimlaneLane"](_0x4dc76f, null),
      this._editSessionService["open"]({
        chartId: _0x1a06fc.element["chartId"],
        elementId: _0x1a06fc.elementId,
        source: "doubleClick",
        subUnitId: _0x1a06fc.subUnitId,
        unitId: _0x1a06fc.unitId,
      }),
      _0x1256bc && (_0x1256bc.skipNextObservers = true),
      _0x14f12e == null ||
        (_0x114ce2 = _0x14f12e.preventDefault) == null ||
        _0x114ce2.call(_0x14f12e));
  }
};
ir = U(
  [
    H(1, _0x4a8574),
    H(2, _0x162dc7),
    H(3, _0x5537f2),
    H(4, _0x1febeb),
    H(5, _0x1d1546(W)),
  ],
  ir,
);
let K = class extends _0x175372 {
  constructor(_0x48dbe0, _0x4af8bd, _0x4866ed) {
    (super(),
      (this._resourceService = _0x48dbe0),
      (this._modelService = _0x4af8bd),
      (this._commandService = _0x4866ed));
  }
  getDataEditState(_0x30f1a2, _0x315fcb) {
    let _0x26bae0 = this._resourceService["getChart"](_0x30f1a2, _0x315fcb),
      _0x27514a = _0x26bae0
        ? this._resourceService["getDataSource"](
            _0x30f1a2,
            _0x26bae0.dataSourceId,
          )
        : undefined;
    return !_0x26bae0 || !_0x27514a
      ? null
      : {
          chartId: _0x315fcb,
          chartType: _0x26bae0.chartType,
          dataSource: _0x27514a,
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0x30f1a2,
            _0x27514a.id,
          ),
          unitId: _0x30f1a2,
        };
  }
  async updateDataForChart(_0x567f27) {
    var _0x3a37d9;
    if (
      !this.getDataEditState(_0x567f27.unitId, _0x567f27.chartId) ||
      _0x567f27.values["length"] === 0
    )
      return false;
    let _0x342b37 =
      (_0x3a37d9 = this._resourceService["getChart"](
        _0x567f27.unitId,
        _0x567f27.chartId,
      )) == null
        ? undefined
        : _0x3a37d9.chartType;
    if (_0x342b37 === undefined) return false;
    let _0x56c902 = _0x1cb4a0(_0x342b37, _0x567f27.values);
    if (!_0x56c902.ok) return false;
    let _0x4bb044 = await this.changeDataSource(
      _0x567f27.unitId,
      _0x567f27.chartId,
      { values: _0x56c902.values },
    );
    return (
      _0x4bb044 &&
        this._modelService["refreshChartModel"](
          _0x567f27.unitId,
          _0x567f27.chartId,
        ),
      !!_0x4bb044
    );
  }
  changeDataSource(_0x27de3c, _0x2125d6, _0x2a5f07) {
    return this._commandService["executeCommand"](_0x301e69.id, {
      unitId: _0x27de3c,
      chartId: _0x2125d6,
      dataSource: _0x2a5f07,
    });
  }
};
K = U(
  [H(0, _0x1d1546(_0x4a1962)), H(1, _0x1d1546(_0x35d8c1)), H(2, _0x3fa76e)],
  K,
);
const ar = "board-chart.data-editor-dialog";
function or(_0x14b1a6) {
  let _0x5ae516 = _0x3e1b78(K),
    _0x395fdf = _0x3e1b78(_0x1cf08f),
    _0x148f5c = _0x5ae516.getDataEditState(_0x14b1a6.unitId, _0x14b1a6.chartId),
    [_0x190083, _0x3bcabb] = _0x51b079(() =>
      _0x1a96cf(_0x148f5c == null ? undefined : _0x148f5c.dataSource)
        ? _0x148f5c.dataSource["values"].map((_0x2fb283) => [..._0x2fb283])
        : [],
    ),
    [_0x1c28a5, _0x163fda] = _0x51b079(() =>
      _0x1fe944(_0x148f5c == null ? undefined : _0x148f5c.dataSource)
        ? "referenced"
        : "inline",
    ),
    [_0x115706, _0x447139] = _0x51b079(null),
    [_0x153b37, _0xf1519b] = _0x51b079(null),
    _0x1f2fe9 = {
      [_0x20dc2f.UnknownOption]: _0x395fdf.t(
        "boards-chart-ui.common.insertChartFailed",
      ),
      [_0x20dc2f.EmptyData]: _0x395fdf.t(
        "boards-chart-ui.common.tableDataEmpty",
      ),
      [_0x20dc2f.InvalidCandlestickData]: _0x395fdf.t(
        "boards-chart-ui.candlestick.columnsError",
      ),
    };
  if (!_0x148f5c)
    return _0x48b202("div", {
      className:
        "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
      children: _0x395fdf.t("boards-chart-ui.dataEditor.unavailable"),
    });
  let _0x448e83 = async (_0x193f4e) => {
    var _0x414a21;
    if (_0x1c28a5 === "referenced") {
      var _0x45ed93;
      if (!_0x115706) return;
      if (
        !(await _0x5ae516.changeDataSource(
          _0x14b1a6.unitId,
          _0x14b1a6.chartId,
          _0x115706,
        ))
      ) {
        _0xf1519b(_0x395fdf.t("boards-chart-ui.dataEditor.updateFailed"));
        return;
      }
      (_0xf1519b(null),
        (_0x45ed93 = _0x14b1a6.onClose) == null || _0x45ed93.call(_0x14b1a6));
      return;
    }
    let _0x541a88 = _0x1cb4a0(_0x148f5c.chartType, _0x190083);
    if (!_0x541a88.ok) {
      _0xf1519b(_0x1f2fe9[_0x541a88.issue["code"]]);
      return;
    }
    if (
      !(await _0x5ae516.updateDataForChart({
        chartId: _0x14b1a6.chartId,
        name: _0x148f5c.dataSource["name"],
        unitId: _0x14b1a6.unitId,
        updateShared: _0x193f4e,
        values: _0x541a88.values,
      }))
    ) {
      _0xf1519b(_0x395fdf.t("boards-chart-ui.dataEditor.updateFailed"));
      return;
    }
    (_0xf1519b(null),
      (_0x414a21 = _0x14b1a6.onClose) == null || _0x414a21.call(_0x14b1a6));
  };
  return _0x5e51d3("div", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4 univer-p-1",
    children: [
      _0x48b202("div", {
        className:
          "univer-min-h-0\x20univer-flex-1\x20univer-overflow-auto\x20univer-overscroll-contain\x20univer-pr-1",
        children: _0x48b202(_0x1b5b9e, {
          mode: _0x1c28a5,
          initialSource: _0x1fe944(_0x148f5c.dataSource)
            ? _0x148f5c.dataSource["source"]
            : undefined,
          inlineContent: _0x48b202(_0x545508, {
            values: _0x190083,
            parsePastedText: _0x153d29,
            onChange: _0x3bcabb,
          }),
          onModeChange: (_0x13b59b) => {
            (_0x163fda(_0x13b59b), _0x447139(null));
          },
          onPreviewChange: (_0x1f2bd1, _0x315ee4) =>
            _0x447139(
              _0x1f2bd1 && _0x315ee4.status === _0x595424.READY
                ? { source: _0x1f2bd1 }
                : null,
            ),
        }),
      }),
      _0x153b37 &&
        _0x48b202("div", {
          className:
            "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
          children: _0x153b37,
        }),
      _0x5e51d3("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x14b1a6.onClose &&
            _0x48b202(_0x14c3eb, {
              type: "button",
              variant: "default",
              onClick: _0x14b1a6.onClose,
              children: _0x395fdf.t("boards-chart-ui.common.cancel"),
            }),
          _0x48b202(_0x14c3eb, {
            type: "button",
            variant: "primary",
            disabled: _0x1c28a5 === "referenced" && !_0x115706,
            onClick: () => _0x448e83(true),
            children: _0x395fdf.t("boards-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
const sr = {
    id: "board.operation.chart.open-data-editor",
    type: _0x1a726a.OPERATION,
    handler: (_0x12a5cb, _0x5c8a86) => {
      if (
        !_0x5c8a86 ||
        !_0x12a5cb
          .get(K)
          .getDataEditState(_0x5c8a86.unitId, _0x5c8a86.chartId) ||
        !_0x12a5cb.get(_0xf4da3a).get("board-chart.data-editor-dialog")
      )
        return false;
      let _0x1313e0 = _0x12a5cb.get(_0x232877),
        _0x576a4c = _0x12a5cb.get(_0x1cf08f),
        _0x4ebaf1 = null,
        _0x47c34e = () => {
          (_0x4ebaf1 == null || _0x4ebaf1.dispose(), (_0x4ebaf1 = null));
        };
      return (
        (_0x4ebaf1 = _0x1313e0.open({
          id: "board-chart.dialog.data-editor",
          title: { title: _0x576a4c.t("boards-chart-ui.common.editData") },
          width: "min(1120px, calc(100vw - 32px))",
          draggable: false,
          mask: true,
          maskClosable: false,
          children: {
            label: { name: ar, props: { ..._0x5c8a86, onClose: _0x47c34e } },
          },
          onClose: _0x47c34e,
        })),
        true
      );
    },
  },
  cr = "board-chart.edit-panel",
  lr = "column",
  q = {
    axis: {
      ..._0x2794c8,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    legend: _0x1cf02b,
    lineAndArea: _0x37b1a9,
    pareto: _0x314fdf,
    funnel: _0x4ea447,
    heatmap: _0x4779ce,
    indicatorLine: _0x524d55,
    pie: { ..._0x4cad60, doughnutHole: 0, pieHole: 0 },
    relation: { ..._0x5d85e8, useValueAsSymbolSize: true },
    radar: _0x75bc68,
    series: {
      ..._0x362c02,
      radarFillOpacity: 1,
      rightAxis: { ltr: false, rtl: false },
    },
    style: _0x3a418a,
    titles: _0x3d0a5b,
    trendline: _0x553f7b,
    waterfall: { ..._0x4584cf, useSubtotal: false },
    waterfallStyle: _0x481ad4,
    wordCloud: _0x884762,
  },
  ur = [
    _0x4b1a88.Line,
    _0x4b1a88.Radar,
    _0x4b1a88.WordCloud,
    _0x4b1a88.Scatter,
    _0x4b1a88.Relation,
    _0x4b1a88.Sankey,
    _0x4b1a88.Heatmap,
    _0x4b1a88.Boxplot,
    _0x4b1a88.Candlestick,
    _0x4b1a88.Histogram,
    _0x4b1a88.Treemap,
    _0x4b1a88.Sunburst,
    _0x4b1a88.Gauge,
    _0x4b1a88.Chord,
  ];
function dr(_0x3ff0e4) {
  let _0x5a53f9 = _0x3e1b78(_0x1cf08f);
  return _0x5e51d3("div", {
    children: [
      _0x48b202(_0x26f3fc, {
        title: _0x5a53f9.t("boards-chart-ui.common.data"),
      }),
      _0x48b202(_0x14c3eb, {
        type: "button",
        variant: "default",
        className: "univer-w-full univer-justify-start",
        onClick: _0x3ff0e4.onEditData,
        children: _0x5a53f9.t("boards-chart-ui.common.editData"),
      }),
    ],
  });
}
function fr() {
  let _0x30e9c1 = _0x43e304();
  return _0x48b202(_0x35fca6, {
    visible: ur.every((_0x178ed5) => !_0x460986.baseOn(_0x30e9c1, _0x178ed5)),
  });
}
function pr(_0x34b850) {
  return _0x5e51d3(_0x46a7b1, {
    id: _0x34b850.id,
    children: [
      _0x48b202(_0x13f881, { children: _0x34b850.label }),
      _0x48b202(_0x5ea94d, { children: _0x34b850.children }),
    ],
  });
}
function mr(_0x1e1fbe, _0x20a2cf) {
  let _0x39ce21 = _0x1e1fbe === _0x4b1a88.WordCloud,
    _0x4d0129 = _0x460986.baseOn(_0x1e1fbe, _0x4b1a88.Bubble),
    _0x4715c3 = _0x1e1fbe === _0x4b1a88.Funnel,
    _0x571f64 = _0x1e1fbe === _0x4b1a88.Relation,
    _0x429825 = _0x1e1fbe === _0x4b1a88.Heatmap,
    _0x3118a8 = _0x460986.baseOn(_0x1e1fbe, _0x4b1a88.Pie),
    _0x2dffac = _0x1e1fbe === _0x4b1a88.Radar,
    _0x2ae8f5 = _0x1e1fbe === _0x4b1a88.Waterfall,
    _0x49df2e = _0x1e1fbe === _0x4b1a88.Pareto,
    _0x4a1e62 = _0x1e1fbe === _0x4b1a88.Candlestick,
    _0x1238aa = _0x1e1fbe === _0x4b1a88.Histogram,
    _0x4b34d3 = _0x1e1fbe === _0x4b1a88.Treemap,
    _0x511770 = _0x1e1fbe === _0x4b1a88.Sunburst,
    _0x1162b1 = _0x1e1fbe === _0x4b1a88.Gauge,
    _0x39c018 = _0x1e1fbe === _0x4b1a88.Chord,
    _0x51320e = [_0x3c66ac.ChartStyle, _0x3c66ac.ChartAndAxisTitles];
  return (
    _0x39ce21 && _0x51320e.push(_0x3c66ac.WordCloud),
    _0x312eff(_0x1e1fbe, _0x1dc06b.GeneralSeries) &&
      !_0x4d0129 &&
      !_0x49df2e &&
      _0x51320e.push(_0x3c66ac.Series),
    _0x2ae8f5 && _0x51320e.push(_0x3c66ac.WaterfallSeries),
    _0x49df2e &&
      _0x51320e.push(_0x3c66ac.ParetoBarSeries, _0x3c66ac.ParetoLineSeries),
    _0x3118a8 && _0x51320e.push(_0x3c66ac.PieStyle),
    _0x2dffac && _0x51320e.push(_0x3c66ac.Radar),
    _0x4715c3 && _0x51320e.push(_0x3c66ac.Funnel),
    _0x429825 && _0x51320e.push(_0x3c66ac.Heatmap),
    _0x571f64 && _0x51320e.push(_0x3c66ac.Relation),
    _0x286478(_0x1e1fbe) && _0x51320e.push(_0x3c66ac.LineAndArea),
    _0x312eff(_0x1e1fbe, _0x1dc06b.Legend) && _0x51320e.push(_0x3c66ac.Legend),
    _0x312eff(_0x1e1fbe, _0x1dc06b.Axes) &&
      (_0x51320e.push(_0x3c66ac.HorizontalAxis, _0x3c66ac.VerticalAxis),
      _0x20a2cf && _0x51320e.push(_0x3c66ac.RightVerticalAxis),
      _0x51320e.push(_0x3c66ac.GridlinesAndTicks)),
    _0x312eff(_0x1e1fbe, _0x1dc06b.IndicatorLine) &&
      _0x51320e.push(_0x3c66ac.IndicatorLine),
    _0x475b3a(_0x1e1fbe) && _0x51320e.push(_0x3c66ac.Trendline),
    _0x4a1e62 && _0x51320e.push(_0x3c66ac.Candlestick),
    _0x1238aa && _0x51320e.push(_0x3c66ac.Histogram),
    _0x4b34d3 && _0x51320e.push(_0x3c66ac.Treemap),
    _0x511770 && _0x51320e.push(_0x3c66ac.Sunburst),
    _0x1162b1 && _0x51320e.push(_0x3c66ac.Gauge),
    _0x39c018 && _0x51320e.push(_0x3c66ac.Chord),
    _0x51320e
  );
}
function hr(_0x551cf5) {
  var _0x5c2523, _0x36915f, _0x426812;
  let _0x16d99f = _0x3e1b78(_0x1cf08f),
    _0x2f8dce = _0x43e304(),
    _0x30c91d = _0x4c4d2f(),
    [_0x120c9f, _0x3d2467] = _0x51b079(null),
    _0x2df94c = mr(_0x2f8dce, _0x30c91d),
    _0x44cf19 = _0x48b202(_0x2086a2, {}),
    _0x5c6dae = {
      [_0x3c66ac.Candlestick]: _0x16d99f.t(
        "boards-chart-ui.section.candlestick",
      ),
      [_0x3c66ac.ChartAndAxisTitles]: _0x16d99f.t(
        "boards-chart-ui.common.chartAndAxisTitles",
      ),
      [_0x3c66ac.ChartStyle]: _0x16d99f.t("boards-chart-ui.common.chartStyle"),
      [_0x3c66ac.Chord]: _0x16d99f.t("boards-chart-ui.section.chord"),
      [_0x3c66ac.Funnel]: _0x16d99f.t("boards-chart-ui.section.funnel"),
      [_0x3c66ac.Gauge]: _0x16d99f.t("boards-chart-ui.section.gauge"),
      [_0x3c66ac.GridlinesAndTicks]: _0x16d99f.t(
        "boards-chart-ui.section.gridlinesAndTicks",
      ),
      [_0x3c66ac.Heatmap]: _0x16d99f.t("boards-chart-ui.common.heatmap"),
      [_0x3c66ac.Histogram]: _0x16d99f.t("boards-chart-ui.section.histogram"),
      [_0x3c66ac.HorizontalAxis]: _0x16d99f.t(
        "boards-chart-ui.common.horizontalAxis",
      ),
      [_0x3c66ac.IndicatorLine]: _0x16d99f.t(
        "boards-chart-ui.section.indicatorLine",
      ),
      [_0x3c66ac.Legend]: _0x16d99f.t("boards-chart-ui.common.legend"),
      [_0x3c66ac.LineAndArea]: _0x16d99f.t(
        "boards-chart-ui.section.lineAndArea",
      ),
      [_0x3c66ac.ParetoBarSeries]: _0x16d99f.t(
        "boards-chart-ui.section.paretoBar",
      ),
      [_0x3c66ac.ParetoLineSeries]: _0x16d99f.t(
        "boards-chart-ui.section.paretoLine",
      ),
      [_0x3c66ac.PieStyle]: _0x16d99f.t("boards-chart-ui.section.pie"),
      [_0x3c66ac.Radar]: _0x16d99f.t("boards-chart-ui.section.radar"),
      [_0x3c66ac.Relation]: _0x16d99f.t("boards-chart-ui.section.relation"),
      [_0x3c66ac.RightVerticalAxis]: _0x16d99f.t(
        "boards-chart-ui.common.rightVerticalAxis",
      ),
      [_0x3c66ac.Series]: _0x16d99f.t("boards-chart-ui.common.series"),
      [_0x3c66ac.Sunburst]: _0x16d99f.t("boards-chart-ui.section.sunburst"),
      [_0x3c66ac.Treemap]: _0x16d99f.t("boards-chart-ui.section.treemap"),
      [_0x3c66ac.Trendline]: _0x16d99f.t("boards-chart-ui.common.trendline"),
      [_0x3c66ac.VerticalAxis]: _0x16d99f.t(
        "boards-chart-ui.common.verticalAxis",
      ),
      [_0x3c66ac.WaterfallSeries]: _0x16d99f.t(
        "boards-chart-ui.section.waterfall",
      ),
      [_0x3c66ac.WordCloud]: _0x16d99f.t("boards-chart-ui.section.wordCloud"),
    };
  _0x163fa4(() => {
    var _0x483a75;
    (_0x483a75 = _0x551cf5.route) != null &&
      _0x483a75.section &&
      _0x3d2467(_0x551cf5.route["section"]);
  }, [_0x551cf5.route]);
  let _0x24bfe0 = {
    [_0x3c66ac.ChartStyle]: _0x48b202(_0x1c3e01, { defaultValues: q.style }),
    [_0x3c66ac.ChartAndAxisTitles]: _0x48b202(_0x5385f3, {
      commitMode: "change",
      defaultValues: q.titles,
      selectedTitleKey:
        (_0x5c2523 = _0x551cf5.route) == null ? undefined : _0x5c2523.titleKey,
    }),
    [_0x3c66ac.Series]: _0x5e51d3(_0x2a12b1, {
      defaultValues: q.series,
      NumberFormatField: _0x3ab1f9,
      selectedSeriesId:
        (_0x36915f = _0x551cf5.route) == null ? undefined : _0x36915f.seriesId,
      children: [
        _0x48b202(_0x25a769, {}),
        _0x48b202(_0x191aec, { individualOnly: true }),
        _0x48b202(_0x487cac, {}),
        _0x48b202(_0x4d0c16, {}),
        _0x48b202(_0x52f546, {}),
        _0x48b202(_0x20238a, {}),
        _0x48b202(_0x3a1234, {}),
        _0x48b202(_0x30ca6d, {}),
      ],
    }),
    [_0x3c66ac.WaterfallSeries]: _0x48b202(_0xfc1097, {
      defaultValues: q.waterfallStyle,
      NumberFormatField: _0x3ab1f9,
      selectedSeriesId:
        (_0x426812 = _0x551cf5.route) == null ? undefined : _0x426812.seriesId,
      showBucketName: () => true,
    }),
    [_0x3c66ac.ParetoBarSeries]: _0x48b202(_0x121072, {
      defaultValues: q.pareto,
      NumberFormatField: _0x3ab1f9,
      showDataPointEditor: true,
      target: "barStyle",
    }),
    [_0x3c66ac.ParetoLineSeries]: _0x48b202(_0x121072, {
      defaultValues: q.pareto,
      NumberFormatField: _0x3ab1f9,
      showDataPointEditor: true,
      target: "cumulativeLineStyle",
    }),
    [_0x3c66ac.PieStyle]: _0x48b202(_0x2aef84, {
      defaultValues: q.pie,
      NumberFormatField: _0x3ab1f9,
    }),
    [_0x3c66ac.WordCloud]: _0x5e51d3(_0x9dfeaf, {
      children: [
        _0x48b202(_0x5d7ad9, { defaultValues: q.wordCloud }),
        _0x48b202(_0x5578b6, {}),
        _0x48b202(_0x450d40, { defaultValues: q.wordCloud }),
      ],
    }),
    [_0x3c66ac.Radar]: _0x48b202(_0x131756, { defaultValues: q.radar }),
    [_0x3c66ac.Funnel]: _0x48b202(_0x45a01f, {
      defaultValues: q.funnel,
      gapControl: "number",
    }),
    [_0x3c66ac.Heatmap]: _0x48b202(_0x1e539c, { defaultValues: q.heatmap }),
    [_0x3c66ac.Relation]: _0x48b202(_0x140fc6, { defaultValues: q.relation }),
    [_0x3c66ac.LineAndArea]: _0x48b202(_0x12324d, {
      defaultValues: q.lineAndArea,
      lineStyleControl: "select",
    }),
    [_0x3c66ac.Legend]: _0x48b202(_0x3997da, { defaultValues: q.legend }),
    [_0x3c66ac.HorizontalAxis]: _0x48b202(_0x4397ed, {
      axis: "x",
      defaultValues: q.axis,
      NumberFormatField: _0x3ab1f9,
    }),
    [_0x3c66ac.VerticalAxis]: _0x48b202(_0x4397ed, {
      axis: "y",
      defaultValues: q.axis,
      NumberFormatField: _0x3ab1f9,
    }),
    [_0x3c66ac.RightVerticalAxis]: _0x48b202(_0x4397ed, {
      axis: "rightY",
      defaultValues: q.axis,
      NumberFormatField: _0x3ab1f9,
    }),
    [_0x3c66ac.GridlinesAndTicks]: _0x48b202(_0x1bf806, {
      defaultValues: q.axis,
    }),
    [_0x3c66ac.IndicatorLine]: _0x48b202(_0x324d83, {
      defaultValues: q.indicatorLine,
    }),
    [_0x3c66ac.Trendline]: _0x48b202(_0x2b5e40, { defaultValues: q.trendline }),
    [_0x3c66ac.Candlestick]: _0x44cf19,
    [_0x3c66ac.Histogram]: _0x44cf19,
    [_0x3c66ac.Treemap]: _0x44cf19,
    [_0x3c66ac.Sunburst]: _0x44cf19,
    [_0x3c66ac.Gauge]: _0x44cf19,
    [_0x3c66ac.Chord]: _0x44cf19,
  };
  return _0x48b202(_0x3bb192, {
    value: _0x120c9f,
    onChange: _0x3d2467,
    children: _0x2df94c.map((_0x227178) =>
      _0x48b202(
        pr,
        {
          id: _0x227178,
          label: _0x5c6dae[_0x227178],
          children: _0x24bfe0[_0x227178],
        },
        _0x227178,
      ),
    ),
  });
}
function gr({
  unitId: _0xc7720,
  subUnitId: _0x56a55c,
  elementId: _0x3d5bf5,
  chartId: _0x1caf09,
}) {
  let _0x361b28 = _0x3e1b78(_0x35d8c1),
    _0x235c70 = _0x3e1b78(_0x4a1962),
    _0x2e1679 = _0x3e1b78(G),
    _0x1c2143 = _0x3e1b78(_0x1cf08f),
    _0x4a5150 = _0x3e1b78(_0x3fa76e),
    _0x2fcea5 = _0x3e1b78(_0x4ffb23),
    _0x19f50c = _0x3e1b78(_0x4a8574),
    _0x1bdbac = _0x3e1b78(W),
    _0x11fde8 = _0x4ea1(
      _0x361b28.activeRuntimeModel$,
      _0x361b28.activeRuntimeModel,
    ),
    _0x14a165 = _0x4ea1(_0x1bdbac.activeSession$, _0x1bdbac.getActiveSession()),
    [_0x171bfa, _0x2642c2] = _0x51b079(_0x18a71e.Data),
    _0x1d6657 =
      (_0x14a165 == null ? undefined : _0x14a165.unitId) === _0xc7720 &&
      _0x14a165.chartId === _0x1caf09 &&
      _0x14a165.elementId === _0x3d5bf5
        ? _0x14a165.route
        : undefined;
  (_0x163fa4(() => {
    _0x361b28.setActiveChartById(_0xc7720, _0x1caf09);
  }, [_0x1caf09, _0x361b28, _0xc7720]),
    _0x163fa4(() => {
      _0x1d6657 != null && _0x1d6657.tab && _0x2642c2(_0x1d6657.tab);
    }, [_0x1d6657]));
  let _0x50c747 =
      (_0x11fde8 == null ? undefined : _0x11fde8.unitId) === _0xc7720 &&
      _0x11fde8.chartId === _0x1caf09,
    _0x1754e0 = _0x36f57d(() => {
      if (!_0x50c747) return null;
      let _0x2ccb13 = _0x19f50c.getUnit(_0xc7720, _0x255b36.UNIVER_BOARD);
      return _0x2ccb13
        ? new _0x54d105(
            _0x11fde8.model,
            new _0x57faec({
              unitId: _0xc7720,
              pageId: _0x56a55c,
              chartId: _0x1caf09,
              elementId: _0x3d5bf5,
              boardModel: _0x2ccb13,
              injector: _0x2fcea5,
            }),
          )
        : null;
    }, [
      _0x11fde8,
      _0x1caf09,
      _0x3d5bf5,
      _0x2fcea5,
      _0x50c747,
      _0x56a55c,
      _0xc7720,
      _0x19f50c,
    ]),
    _0xb7d3ef = _0x36f57d(
      () =>
        _0x25b47c(
          _0x5a5c79.map((_0x53874a) => ({
            ..._0x53874a,
            label: _0x1c2143.t(
              "boards-chart-ui.chartTypes." + _0x53874a.labelId,
            ),
          })),
        ),
      [_0x1c2143],
    );
  return !_0x50c747 || !_0x1754e0
    ? null
    : _0x48b202(_0x13566e, {
        chartUIService: _0x2e1679,
        hostAdapter: _0x1754e0,
        children: _0x5e51d3("div", {
          className:
            "univer-flex\x20univer-h-0\x20univer-min-h-full\x20univer-w-full\x20univer-flex-col\x20univer-overflow-hidden\x20univer-bg-gray-0\x20dark:!univer-bg-gray-900",
          children: [
            _0x48b202(_0x82febe, {
              ariaLabel: _0x1c2143.t("boards-chart-ui.common.editChart"),
              className: "univer-shrink-0 univer-px-3",
              items: [
                {
                  label: _0x1c2143.t("boards-chart-ui.common.setup"),
                  panelId: _r,
                  value: _0x18a71e.Data,
                },
                {
                  label: _0x1c2143.t("boards-chart-ui.common.customize"),
                  panelId: vr,
                  value: _0x18a71e.Style,
                },
              ],
              value: _0x171bfa,
              onChange: _0x2642c2,
            }),
            _0x171bfa === _0x18a71e.Data
              ? _0x48b202(_0x2e2fdf, {
                  id: _r,
                  label: _0x1c2143.t("boards-chart-ui.common.setup"),
                  children: _0x5e51d3("div", {
                    className:
                      "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                    children: [
                      _0x48b202(_0x45e448, { options: _0xb7d3ef }),
                      _0x48b202(_0x3e8128, {}),
                      _0x48b202(_0xded953, {}),
                      _0x48b202(fr, {}),
                      _0x48b202(_0x4949b6, {}),
                      _0x48b202(dr, {
                        onEditData: () =>
                          _0x4a5150.executeCommand(sr.id, {
                            unitId: _0xc7720,
                            chartId: _0x1caf09,
                          }),
                      }),
                      _0x48b202(_0x436055, {
                        orientationControl: _0x48b202(_0x14c3eb, {
                          size: "small",
                          onClick: () => {
                            var _0x35bdf2;
                            return _0x2e1679.executeChartUpdateConfig({
                              patch: {
                                context: {
                                  orient:
                                    ((_0x35bdf2 = _0x235c70.getChart(
                                      _0xc7720,
                                      _0x1caf09,
                                    )) == null ||
                                    (_0x35bdf2 = _0x35bdf2.context) == null
                                      ? undefined
                                      : _0x35bdf2.orient) === lr
                                      ? "row"
                                      : lr,
                                },
                              },
                            });
                          },
                          children: _0x1c2143.t(
                            "boards-chart-ui.common.switchRowColumn",
                          ),
                        }),
                      }),
                      _0x48b202(_0x14462f, {}),
                      _0x48b202(_0x166481, { defaultValues: q.waterfall }),
                    ],
                  }),
                })
              : _0x48b202(_0x2e2fdf, {
                  id: vr,
                  label: _0x1c2143.t("boards-chart-ui.common.customize"),
                  children: _0x48b202(hr, { route: _0x1d6657 }),
                }),
          ],
        }),
      });
}
const _r = "board-chart-setup-panel",
  vr = "board-chart-style-panel",
  yr = _0x33eee3,
  br = _0xc5f115;
function xr(_0x38e890) {
  var _0x2f5272, _0x1bec11;
  let _0x1e1682 = _0x38e890.chartStyle ?? {},
    _0xcacea4 =
      _0x1e1682.borderWidth === 0
        ? 0
        : wr(
            _0x1e1682.borderWidth,
            wr(
              (_0x2f5272 = _0x38e890.chartElement) == null ||
                (_0x2f5272 = _0x2f5272.stroke) == null
                ? undefined
                : _0x2f5272.width,
              1,
            ),
          );
  return {
    fill:
      _0x38e890.hostFill ??
      _0x1e1682.backgroundColor ??
      _0x3166ec.backgroundColor,
    stroke:
      _0x1e1682.borderColor ??
      ((_0x1bec11 = _0x38e890.chartElement) == null ||
      (_0x1bec11 = _0x1bec11.stroke) == null
        ? undefined
        : _0x1bec11.color) ??
      _0x38e890.themeBorderColor ??
      (_0x38e890.isDarkMode ? "rgba(255, 255, 255, 0.18)" : yr),
    strokeWidth: _0xcacea4,
    radius: br,
  };
}
function Sr(_0x314422, _0x35b2f2) {
  let _0x19efb3 = Math.max(0, _0x35b2f2.strokeWidth);
  return {
    left: _0x19efb3,
    top: _0x19efb3,
    width: Math.max(1, _0x314422.width - _0x19efb3 * 2),
    height: Math.max(1, _0x314422.height - _0x19efb3 * 2),
  };
}
function Cr(_0x53b5ad, _0x59f069) {
  let _0xc7d67d = -1 / 2;
  return {
    left: _0xc7d67d,
    top: _0xc7d67d,
    width: Math.max(1, _0x53b5ad.width),
    height: Math.max(1, _0x53b5ad.height),
    radius: Math.max(0, _0x59f069.radius - _0x59f069.strokeWidth / 2),
  };
}
function wr(_0x5dc1e3, _0x3b5923) {
  return typeof _0x5dc1e3 == "number" &&
    Number.isFinite(_0x5dc1e3) &&
    _0x5dc1e3 > 0
    ? _0x5dc1e3
    : _0x3b5923;
}
function Tr(_0x1adfda) {
  var _0x29c24d;
  let _0x5e37a3 =
    (_0x29c24d = _0x1adfda.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null
      ? undefined
      : _0x29c24d[1];
  if (_0x5e37a3) {
    let _0x3be39b =
      _0x5e37a3.length === 3
        ? _0x5e37a3
            .split("")
            .map((_0x36acdd) => "" + _0x36acdd + _0x36acdd)
            .join("")
        : _0x5e37a3;
    return (
      "rgb(" +
      Number.parseInt(_0x3be39b.slice(0, 2), 16) +
      ",\x20" +
      Number.parseInt(_0x3be39b.slice(2, 4), 16) +
      ",\x20" +
      Number.parseInt(_0x3be39b.slice(4, 6), 16) +
      ")"
    );
  }
  let _0x8739d8 = document.createElement("span");
  return (
    (_0x8739d8.style["color"] = _0x1adfda),
    _0x8739d8.style["color"] || _0x1adfda
  );
}
let J = class extends _0x175372 {
  constructor(_0x2b7398, _0x2e9000, _0x36b3c5) {
    (super(),
      (this._localeService = _0x2b7398),
      (this._chartThemeService = _0x2e9000),
      (this._renderModelManager = _0x36b3c5),
      V(this, "_chartInstanceMap", new Map()),
      V(this, "_chartElementEditMode", new Map()),
      V(this, "_chartEventHandlers", new Map()),
      V(this, "_chartEventSubscriptions", new Map()));
  }
  createChartInstance(_0x1d9523) {
    return _0x1d9523
      ? this._renderModelManager["createChartInstance"](
          _0x1d9523,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  registerChartInstance(_0x2cef04, _0x235157, _0x2753cf) {
    let _0x38480d = this._getChartRuntimeKey(_0x2cef04, _0x235157),
      _0x39b17b = this._chartInstanceMap["get"](_0x38480d);
    return (
      _0x39b17b &&
        _0x39b17b !== _0x2753cf &&
        (this._disposeChartEventSubscriptions(_0x38480d), _0x39b17b.dispose()),
      this._chartInstanceMap["set"](_0x38480d, _0x2753cf),
      _0x2753cf.setElementEditMode(
        this._chartElementEditMode["get"](_0x38480d) === true,
      ),
      this._bindChartEventHandlers(_0x38480d, _0x2753cf),
      {
        dispose: () => {
          this._chartInstanceMap["get"](_0x38480d) === _0x2753cf &&
            (this._disposeChartEventSubscriptions(_0x38480d),
            this._chartInstanceMap["delete"](_0x38480d));
        },
      }
    );
  }
  setElementEditMode(_0x9b0e29, _0x40cf17, _0x3826fe) {
    var _0x59c07c;
    let _0x292a20 = this._getChartRuntimeKey(_0x9b0e29, _0x40cf17);
    (_0x3826fe
      ? this._chartElementEditMode["set"](_0x292a20, true)
      : this._chartElementEditMode["delete"](_0x292a20),
      (_0x59c07c = this._chartInstanceMap["get"](_0x292a20)) == null ||
        _0x59c07c.setElementEditMode(_0x3826fe));
  }
  isElementEditModeActive(_0xdfefc8, _0x2ef923) {
    return (
      this._chartElementEditMode["get"](
        this._getChartRuntimeKey(_0xdfefc8, _0x2ef923),
      ) === true
    );
  }
  on(_0x2f8184, _0x2bd737, _0x2983a8, _0x4e253a) {
    let _0x38ffd7 = this._getChartRuntimeKey(_0x2f8184, _0x2bd737),
      _0x24b2c7 = this._chartEventHandlers["get"](_0x38ffd7);
    _0x24b2c7 ||
      ((_0x24b2c7 = new Map()),
      this._chartEventHandlers["set"](_0x38ffd7, _0x24b2c7));
    let _0x3d228c = _0x24b2c7.get(_0x2983a8);
    (_0x3d228c ||
      ((_0x3d228c = new Set()), _0x24b2c7.set(_0x2983a8, _0x3d228c)),
      _0x3d228c.add(_0x4e253a));
    let _0x1a5777 = this._chartInstanceMap["get"](_0x38ffd7);
    return (
      _0x1a5777 &&
        this._bindChartEventHandler(_0x38ffd7, _0x1a5777, _0x2983a8, _0x4e253a),
      {
        dispose: () => {
          let _0x10c724 = this._chartEventHandlers["get"](_0x38ffd7),
            _0x565ac4 =
              _0x10c724 == null ? undefined : _0x10c724.get(_0x2983a8);
          (_0x565ac4 == null || _0x565ac4.delete(_0x4e253a),
            (_0x565ac4 == null ? undefined : _0x565ac4.size) === 0 &&
              (_0x10c724 == null || _0x10c724.delete(_0x2983a8)),
            (_0x10c724 == null ? undefined : _0x10c724.size) === 0 &&
              this._chartEventHandlers["delete"](_0x38ffd7),
            this._disposeChartEventSubscription(
              _0x38ffd7,
              _0x2983a8,
              _0x4e253a,
            ));
        },
      }
    );
  }
  createRenderInput(_0x19bad2) {
    let _0x1be716 = _0x19bad2.model["config"];
    if (!_0x1be716)
      throw Error(
        "Board\x20chart\x20" +
          _0x19bad2.chartId +
          "\x20has\x20no\x20render\x20config.",
      );
    let _0x92e399 = this._localeService["getDirection"]();
    return {
      chartConfig: _0x1be716,
      chartStyle: _0x1c0085(
        {
          ..._0x19bad2.model["style"],
          runtime: {
            ..._0x19bad2.model["getRuntimeContext"](_0x92e399),
            enableAdaptiveSize: true,
          },
          direction: _0x92e399,
        },
        _0x1be716.type,
      ),
    };
  }
  createRenderSpec(_0x28b4d9, _0x335280, _0x4de08f) {
    let { chartConfig: _0xdb4819, chartStyle: _0x5a9da8 } =
        this.createRenderInput(_0x28b4d9),
      _0x23f783 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x23f783.stylizeSpec(
        _0x23f783.toSpec(_0xdb4819, _0x5a9da8),
        {
          chartConfig: _0xdb4819,
          chartStyle: _0x5a9da8,
          chartInstance: _0x4de08f,
        },
        _0x335280,
      ),
      chartConfig: _0xdb4819,
      chartStyle: _0x5a9da8,
      hostStyle: this.getHostStyle(_0x5a9da8),
    };
  }
  getHostStyle(_0x576219) {
    return _0x3b7a26({
      style: _0x576219,
      getRenderColor: (_0x29b239) =>
        this._chartThemeService["getRenderColor"](_0x29b239),
    });
  }
  applyHostStyle(_0x592423, _0x5ea552) {
    var _0x4c5962;
    ((_0x592423.style["border"] =
      (_0x4c5962 = _0x5ea552.border) != null &&
      _0x4c5962.color &&
      _0x5ea552.border["width"]
        ? _0x5ea552.border["width"] +
          "px solid " +
          Tr(_0x5ea552.border["color"])
        : ""),
      (_0x592423.style["backgroundColor"] = Tr(
        _0x5ea552.fill ?? "transparent",
      )),
      (_0x592423.style["borderRadius"] = _0x5ea552.radius
        ? _0x5ea552.radius + "px"
        : br + "px"),
      (_0x592423.style["overflow"] = "hidden"),
      (_0x592423.style["boxSizing"] = "border-box"));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x42ed7e }) => ({
        fill: this.getHostStyle(_0x42ed7e).fill,
      }),
      resolveRenderBackgroundColor: ({ hostStyle: _0x4b6995 }) =>
        _0x4b6995.fill,
      prepareSpec: ({ mode: _0x549532, spec: _0x2a63c5 }) =>
        _0x549532 === "image"
          ? { ..._0x2a63c5, animation: false, tooltip: { show: false } }
          : _0x2a63c5,
    };
  }
  _bindChartEventHandlers(_0x212248, _0x4b245a) {
    let _0x16f767 = this._chartEventHandlers["get"](_0x212248);
    _0x16f767 &&
      _0x16f767.forEach((_0x1b2081, _0xd4e945) => {
        _0x1b2081.forEach((_0x4a0c20) =>
          this._bindChartEventHandler(
            _0x212248,
            _0x4b245a,
            _0xd4e945,
            _0x4a0c20,
          ),
        );
      });
  }
  _bindChartEventHandler(_0x30cc10, _0x3830bd, _0x585c88, _0x8becc9) {
    let _0x5254a9 = this._chartEventSubscriptions["get"](_0x30cc10);
    _0x5254a9 ||
      ((_0x5254a9 = new Map()),
      this._chartEventSubscriptions["set"](_0x30cc10, _0x5254a9));
    let _0x5cff02 = _0x5254a9.get(_0x585c88);
    (_0x5cff02 ||
      ((_0x5cff02 = new Map()), _0x5254a9.set(_0x585c88, _0x5cff02)),
      !_0x5cff02.has(_0x8becc9) &&
        _0x5cff02.set(_0x8becc9, _0x3830bd.on(_0x585c88, _0x8becc9)));
  }
  _disposeChartEventSubscription(_0x2a0dbb, _0x35d85a, _0x194004) {
    var _0x5f511d, _0x19a9ca;
    let _0x1fe56f =
      (_0x5f511d = this._chartEventSubscriptions["get"](_0x2a0dbb)) == null
        ? undefined
        : _0x5f511d.get(_0x35d85a);
    (_0x1fe56f == null ||
      (_0x19a9ca = _0x1fe56f.get(_0x194004)) == null ||
      _0x19a9ca.dispose(),
      _0x1fe56f == null || _0x1fe56f.delete(_0x194004));
  }
  _disposeChartEventSubscriptions(_0x5c35bc) {
    let _0x38fa04 = this._chartEventSubscriptions["get"](_0x5c35bc);
    (_0x38fa04 == null ||
      _0x38fa04.forEach((_0x14e18c) => {
        (_0x14e18c.forEach((_0x761632) => _0x761632.dispose()),
          _0x14e18c.clear());
      }),
      this._chartEventSubscriptions["delete"](_0x5c35bc));
  }
  _getChartRuntimeKey(_0x27fa13, _0x423af9) {
    return _0x27fa13 + "::" + _0x423af9;
  }
  dispose() {
    (this._chartInstanceMap["forEach"]((_0x14c20a) => _0x14c20a.dispose()),
      this._chartInstanceMap["clear"](),
      this._chartElementEditMode["clear"](),
      this._chartEventHandlers["clear"](),
      Array.from(this._chartEventSubscriptions["keys"]()).forEach((_0x287a3e) =>
        this._disposeChartEventSubscriptions(_0x287a3e),
      ),
      super.dispose());
  }
};
J = U(
  [H(0, _0x1d1546(_0x1cf08f)), H(1, _0x1d1546(_0x4df370)), H(2, _0x12c551)],
  J,
);
let Er = class extends _0x175372 {
  constructor(
    _0x55d331,
    _0x37b649,
    _0x4a4e49,
    _0x3ffd7b,
    _0x21e2bf,
    _0x13f9f7,
    _0x179c52,
  ) {
    (super(),
      (this._renderContext = _0x55d331),
      (this._editSessionService = _0x37b649),
      (this._sidePanelService = _0x4a4e49),
      (this._modelService = _0x3ffd7b),
      (this._renderService = _0x21e2bf),
      (this._chartUIService = _0x13f9f7),
      (this._localeService = _0x179c52),
      V(this, "_activePanelKey", null),
      V(this, "_activePanelDisposable", null),
      V(this, "_activeEditOverlay", null),
      this.disposeWithMe(
        this._editSessionService["activeSession$"].subscribe((_0x3b466d) =>
          this._syncPanel(_0x3b466d),
        ),
      ));
  }
  dispose() {
    (this._closeActivePanel(), super.dispose());
  }
  _syncPanel(_0x1cec4b) {
    var _0x967a05;
    if (!_0x1cec4b || _0x1cec4b.unitId !== this._renderContext["unitId"]) {
      this._closeActivePanel();
      return;
    }
    let _0x28f715 = this._modelService["ensureChartModel"](
      _0x1cec4b.unitId,
      _0x1cec4b.chartId,
    );
    if (!_0x28f715) {
      this._closeActivePanel();
      return;
    }
    let _0x253ab5 = [
      cr,
      _0x1cec4b.unitId,
      _0x1cec4b.subUnitId,
      _0x1cec4b.elementId,
    ].join(":");
    if (this._activePanelKey === _0x253ab5) {
      (this._modelService["setActiveChartRuntime"](_0x28f715),
        this._setActiveEditOverlay(_0x1cec4b.unitId, _0x1cec4b.chartId));
      return;
    }
    ((_0x967a05 = this._activePanelDisposable) == null || _0x967a05.dispose(),
      this._modelService["setActiveChartRuntime"](_0x28f715),
      this._setActiveEditOverlay(_0x1cec4b.unitId, _0x1cec4b.chartId),
      (this._activePanelKey = _0x253ab5),
      (this._activePanelDisposable = this._sidePanelService["open"]({
        id: cr,
        header: {
          title: this._localeService["t"]("boards-chart-ui.common.editChart"),
        },
        width: 388,
        children: {
          label: cr,
          unitId: _0x1cec4b.unitId,
          subUnitId: _0x1cec4b.subUnitId,
          elementId: _0x1cec4b.elementId,
          chartId: _0x1cec4b.chartId,
        },
        onClose: (_0x75f19c) => {
          this._activePanelKey === _0x253ab5 &&
            ((this._activePanelKey = null),
            (this._activePanelDisposable = null),
            this._clearActiveEditOverlay(),
            this._modelService["setActiveChartRuntime"](null),
            _0x75f19c === "manual" &&
              this._editSessionService["close"]("manual"));
        },
      })));
  }
  _closeActivePanel() {
    var _0x14e866;
    if (!this._activePanelKey) {
      this._clearActiveEditOverlay();
      return;
    }
    ((_0x14e866 = this._activePanelDisposable) == null || _0x14e866.dispose(),
      (this._activePanelDisposable = null),
      (this._activePanelKey = null),
      this._clearActiveEditOverlay(),
      this._modelService["setActiveChartRuntime"](null));
  }
  _setActiveEditOverlay(_0x5a2686, _0x31dedb) {
    let _0xa6cfd8 = this._activeEditOverlay;
    ((_0xa6cfd8 == null ? undefined : _0xa6cfd8.unitId) !== _0x5a2686 ||
      _0xa6cfd8.chartId !== _0x31dedb) &&
      (this._clearActiveEditOverlay(),
      (this._activeEditOverlay = { unitId: _0x5a2686, chartId: _0x31dedb }),
      this._renderService["setElementEditMode"](_0x5a2686, _0x31dedb, true));
  }
  _clearActiveEditOverlay() {
    let _0x24aca3 = this._activeEditOverlay;
    _0x24aca3 &&
      ((this._activeEditOverlay = null),
      this._renderService["setElementEditMode"](
        _0x24aca3.unitId,
        _0x24aca3.chartId,
        false,
      ));
  }
};
Er = U(
  [
    H(1, _0x1d1546(W)),
    H(2, _0x1d1546(_0x1a0250)),
    H(3, _0x1d1546(_0x35d8c1)),
    H(4, _0x1d1546(J)),
    H(5, G),
    H(6, _0x1d1546(_0x1cf08f)),
  ],
  Er,
);
var Dr = class extends _0x175372 {
  constructor(_0x2b08a0, _0x34f1f7, _0x2a6209) {
    (super(),
      (this.chartId = _0x2b08a0),
      (this._host = _0x34f1f7),
      (this._applyHostStyle = _0x2a6209),
      V(this, "mode", _0x3121d4.Dom));
  }
  getRect() {
    return {
      width: Math.max(1, this._host["clientWidth"]),
      height: Math.max(1, this._host["clientHeight"]),
    };
  }
  setStyle(_0xe1a9ad) {
    this._applyHostStyle(this._host, _0xe1a9ad);
  }
  async ensureMount() {
    return this._host;
  }
  checkMounted() {
    return true;
  }
  syncLayout() {}
  markReady() {}
  markNotReady() {}
};
function Or({
  chartElement: _0x3c866a,
  chartId: _0x1f08bf,
  unitId: _0x128f6d,
}) {
  let _0x3ba04a = _0x1b8fff(null),
    _0x464dc9 = _0x3e1b78(_0x35d8c1),
    _0x1bb4cc = _0x3e1b78(J),
    _0x24de8d = _0x3e1b78(_0x1cf08f);
  return (
    _0x163fa4(() => {
      let _0x4916c9 = _0x3ba04a.current;
      if (!_0x4916c9) return;
      let _0x384b2a = _0x464dc9.ensureChartModel(_0x128f6d, _0x1f08bf);
      if (!_0x384b2a) return;
      _0x464dc9.setActiveChartRuntime(_0x384b2a);
      let _0x4afbf7 = new Dr(_0x1f08bf, _0x4916c9, (_0x416971, _0x2cfe9a) =>
          _0x1bb4cc.applyHostStyle(_0x416971, {
            fill: _0x2cfe9a.fill ?? "transparent",
          }),
        ),
        _0x26746f = _0x1bb4cc.createChartInstance(_0x3121d4.Dom),
        _0x1eead3 = _0x1bb4cc.registerChartInstance(
          _0x128f6d,
          _0x1f08bf,
          _0x26746f,
        );
      _0x26746f.bind(_0x4afbf7);
      let _0x36f205 = _0x2db827([
        _0x384b2a.model["config$"],
        _0x384b2a.model["style$"],
        _0x24de8d.direction$,
      ])
        .pipe(_0x2929ac(([_0x1e9992]) => _0x1e9992 != null))
        .subscribe(() => {
          let { chartConfig: _0x49182a, chartStyle: _0x1725a5 } =
            _0x1bb4cc.createRenderInput(_0x384b2a);
          (kr(_0x4916c9, _0x3c866a, _0x1725a5, _0x1bb4cc),
            _0x26746f
              .render({
                chartId: _0x1f08bf,
                config: _0x49182a,
                style: _0x1725a5,
              })
              .catch(() => {}));
        });
      return () => {
        var _0x8e039b;
        (_0x36f205.unsubscribe(),
          _0x1eead3.dispose(),
          _0x26746f.dispose(),
          _0x4afbf7.dispose(),
          ((_0x8e039b = _0x464dc9.activeRuntimeModel) == null
            ? undefined
            : _0x8e039b.unitId) === _0x128f6d &&
            _0x464dc9.activeRuntimeModel["chartId"] === _0x1f08bf &&
            _0x464dc9.setActiveChartRuntime(null));
      };
    }, [_0x3c866a, _0x1f08bf, _0x24de8d, _0x464dc9, _0x1bb4cc, _0x128f6d]),
    _0x48b202("div", {
      className:
        "univer-relative univer-h-full univer-w-full univer-overflow-hidden",
      "data-board-chart-dom-renderer": _0x1f08bf,
      children: _0x48b202("div", {
        ref: _0x3ba04a,
        "data-board-chart-dom-content-host": _0x1f08bf,
      }),
    })
  );
}
function kr(_0x2ce8c2, _0x2832e1, _0x45c9b6, _0x5d5494) {
  let _0x5d5814 = _0x5d5494.getHostStyle(_0x45c9b6).fill,
    _0x31f9dc = xr({
      chartStyle: _0x45c9b6,
      chartElement: _0x2832e1,
      hostFill: _0x5d5814,
    }),
    _0x47f5b0 = Math.max(0, _0x31f9dc.strokeWidth);
  ((_0x2ce8c2.style["position"] = "absolute"),
    (_0x2ce8c2.style["left"] = _0x47f5b0 + "px"),
    (_0x2ce8c2.style["top"] = _0x47f5b0 + "px"),
    (_0x2ce8c2.style["right"] = _0x47f5b0 + "px"),
    (_0x2ce8c2.style["bottom"] = _0x47f5b0 + "px"),
    (_0x2ce8c2.style["backgroundColor"] = _0x31f9dc.fill),
    (_0x2ce8c2.style["borderRadius"] =
      Math.max(0, _0x31f9dc.radius - _0x47f5b0) + "px"),
    (_0x2ce8c2.style["overflow"] = "hidden"),
    (_0x2ce8c2.style["boxSizing"] = "border-box"));
}
const Ar = _0x385bca("board-chart.snapshot-renderer"),
  jr = 0;
function Mr(_0x43d260) {
  return { ..._0x43d260, borderWidth: 0 };
}
var Nr = class {
  constructor(_0x30e153, _0x428f42) {
    ((this._renderService = _0x30e153), (this._renderModelManager = _0x428f42));
  }
  async render(_0x332a9d, _0x5b638) {
    if (typeof document > "u")
      throw TypeError(
        "Board chart snapshot rendering requires a browser document.",
      );
    let { chartConfig: _0x1b4527, chartStyle: _0x2d8c9a } =
        this._renderService["createRenderInput"](_0x5b638),
      _0x37a641 = Mr(_0x2d8c9a);
    if (_0x332a9d.format === _0x277325.SVG)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x5b638.chartId,
            config: _0x1b4527,
            style: _0x37a641,
            width: _0x332a9d.width,
            height: _0x332a9d.height,
          },
          { format: _0x332a9d.format },
        )
      ).dataUrl;
    let _0x3f64c1 = new _0x154bf7(_0x5b638.chartId, {
        width: _0x332a9d.width,
        height: _0x332a9d.height,
      }),
      _0x5ad69e = this._renderService["createChartInstance"](_0x3121d4.Image);
    try {
      (_0x5ad69e.bind(_0x3f64c1),
        await _0x5ad69e.render({
          chartId: _0x5b638.chartId,
          config: _0x1b4527,
          style: _0x37a641,
        }));
      let _0x3e6fb2 = _0x3f64c1.getDataUrl();
      if (!_0x3e6fb2)
        throw Error(
          "Failed to render board chart snapshot: " +
            _0x5b638.unitId +
            "/" +
            _0x5b638.chartId,
        );
      return _0x3e6fb2;
    } finally {
      (_0x5ad69e.dispose(), _0x3f64c1.dispose());
    }
  }
};
let Y = class extends _0x37414e {
  constructor(_0x15b23f, _0x529beb, _0x496281, _0x4db274, _0x1cd35a) {
    super(_0x15b23f, _0x529beb, _0x1cd35a ?? new Nr(_0x496281, _0x4db274));
  }
  getCacheKey(_0x39df9e) {
    let _0x4abb5d = super.getCacheKey(_0x39df9e);
    return _0x39df9e.format === _0x277325.SVG
      ? _0x4abb5d + "::" + _0x39df9e.format
      : _0x4abb5d;
  }
};
Y = U(
  [
    H(0, _0x1d1546(_0x1cf08f)),
    H(1, _0x1d1546(_0x35d8c1)),
    H(2, _0x1d1546(J)),
    H(3, _0x12c551),
    H(4, _0x10187f(Ar)),
  ],
  Y,
);
let Pr = class extends _0x175372 {
  constructor(_0x4dcba3, _0x52b980, _0x8de398, _0x3270a9, _0x90d71b) {
    (super(),
      (this._renderContext = _0x4dcba3),
      (this._editSessionService = _0x52b980),
      (this._boardElementService = _0x8de398),
      (this._domLayerService = _0x3270a9),
      (this._snapshotService = _0x90d71b),
      V(this, "_activeLayerId", null),
      V(this, "_activeLayerDisposable", null),
      V(this, "_activeChart", null),
      this.disposeWithMe(
        this._editSessionService["activeSession$"].subscribe((_0x1db7fc) =>
          this._syncActiveChart(_0x1db7fc),
        ),
      ));
  }
  dispose() {
    (this._clearActiveLayer(), super.dispose());
  }
  _syncActiveChart(_0x45a224) {
    if (!_0x45a224 || _0x45a224.unitId !== this._renderContext["unitId"]) {
      this._clearActiveLayer();
      return;
    }
    let _0x8a0aaf = this._boardElementService["getElementData"](
        _0x45a224.unitId,
        _0x45a224.subUnitId,
      ),
      _0x267e19 = _0x8a0aaf[_0x45a224.elementId];
    if (
      !_0x267e19 ||
      _0x267e19.element["type"] !== _0x1b532c.Chart ||
      _0x267e19.element["chartId"] !== _0x45a224.chartId
    ) {
      this._clearActiveLayer();
      return;
    }
    let _0x5723d4 = _0x271742(_0x8a0aaf, _0x267e19.elementId);
    if (!_0x5723d4) {
      this._clearActiveLayer();
      return;
    }
    let _0x276df5 = _0x267e19.element,
      _0x347cfd = _0x276df5.chartId,
      _0x1a4925 = [
        "board-chart-active",
        _0x45a224.unitId,
        _0x45a224.subUnitId,
        _0x267e19.elementId,
      ].join(":");
    if (this._activeLayerId === _0x1a4925) {
      ((this._activeChart = { chartId: _0x347cfd, unitId: _0x45a224.unitId }),
        this._domLayerService["updateItem"](_0x1a4925, {
          rect: _0x5723d4,
          content: () =>
            _0x48b202(Or, {
              chartId: _0x347cfd,
              chartElement: _0x276df5,
              unitId: _0x45a224.unitId,
            }),
        }));
      return;
    }
    (this._clearActiveLayer(),
      (this._activeLayerId = _0x1a4925),
      (this._activeChart = { chartId: _0x347cfd, unitId: _0x45a224.unitId }),
      (this._activeLayerDisposable = this._domLayerService["registerItem"]({
        id: _0x1a4925,
        unitId: _0x45a224.unitId,
        subUnitId: _0x45a224.subUnitId,
        elementId: _0x267e19.elementId,
        rect: _0x5723d4,
        interactive: true,
        zIndex: 1,
        content: () =>
          _0x48b202(Or, {
            chartId: _0x347cfd,
            chartElement: _0x276df5,
            unitId: _0x45a224.unitId,
          }),
      })));
  }
  _clearActiveLayer() {
    var _0x29cb96;
    let _0x230844 = this._activeChart;
    ((_0x29cb96 = this._activeLayerDisposable) == null || _0x29cb96.dispose(),
      (this._activeLayerDisposable = null),
      (this._activeLayerId = null),
      (this._activeChart = null),
      _0x230844 &&
        this._snapshotService["invalidateChart"](
          _0x230844.unitId,
          _0x230844.chartId,
        ));
  }
};
Pr = U(
  [
    H(1, _0x1d1546(W)),
    H(2, _0x162dc7),
    H(3, _0x1d1546(_0x21a298)),
    H(4, _0x1d1546(Y)),
  ],
  Pr,
);
let X = class extends _0x175372 {
  constructor(_0x3dacef, _0x1b21e9) {
    (super(),
      (this._snapshotService = _0x3dacef),
      (this._modelService = _0x1b21e9),
      V(this, "_runtimeStateSubscriptions", new Map()),
      this._listenRuntimeData());
  }
  _listenRuntimeData() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x24c22e) =>
        this._bindRuntimeState(_0x24c22e),
      ),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x36568d) =>
          this._releaseRuntimeState(_0x36568d),
        ),
      ),
      this.disposeWithMe(
        _0x3bfe87(() => {
          (this._runtimeStateSubscriptions["forEach"](
            ({ subscription: _0x3b5850 }) => _0x3b5850.unsubscribe(),
          ),
            this._runtimeStateSubscriptions["clear"]());
        }),
      ));
  }
  _bindRuntimeState(_0x3bbc29) {
    if (this._runtimeStateSubscriptions["has"](_0x3bbc29)) return;
    let _0x2004f4 = _0x3bbc29.model["config"] == null ? 0 : 1,
      _0x378764 = _0x2db827([
        _0x3bbc29.model["config$"].pipe(
          _0x2929ac((_0x595df7) => _0x595df7 != null),
        ),
        _0x3bbc29.model["style$"],
      ])
        .pipe(_0x45da7d(_0x2004f4), _0xdfef40(0))
        .subscribe(() =>
          this._snapshotService["invalidateChart"](
            _0x3bbc29.unitId,
            _0x3bbc29.chartId,
          ),
        );
    this._runtimeStateSubscriptions["set"](_0x3bbc29, {
      subscription: _0x378764,
    });
  }
  _releaseRuntimeState(_0x450ebd) {
    var _0x5cc934;
    ((_0x5cc934 = this._runtimeStateSubscriptions["get"](_0x450ebd)) == null ||
      _0x5cc934.subscription["unsubscribe"](),
      this._runtimeStateSubscriptions["delete"](_0x450ebd));
  }
};
X = U([H(0, _0x1d1546(Y)), H(1, _0x1d1546(_0x35d8c1))], X);
var Fr = "@univerjs-pro/boards-chart-ui",
  Ir = "1.0.0-insiders.20260907-70fc579";
const Lr = { scaleX: 1, scaleY: 1 };
function Rr(_0x2838a0) {
  let _0x54e625 = _0x2838a0.nativeEvent;
  return typeof MouseEvent < "u" && _0x54e625 instanceof MouseEvent
    ? _0x54e625
    : undefined;
}
function zr(_0x2c0b42) {
  let _0xc7ea41 = _0x2c0b42.nativeEvent,
    _0x1cc6de = _0xc7ea41 == null ? undefined : _0xc7ea41.target;
  return typeof Element < "u" && _0x1cc6de instanceof Element
    ? _0x1cc6de
    : undefined;
}
function Br(_0x41d8ba) {
  return _0x41d8ba.width || _0x41d8ba.right - _0x41d8ba.left;
}
function Vr(_0x3aac35) {
  return _0x3aac35.height || _0x3aac35.bottom - _0x3aac35.top;
}
function Hr(_0x3d7f7a, _0x45429f) {
  let _0x2e4b7a =
      _0x3d7f7a.clientWidth ||
      (typeof HTMLElement < "u" && _0x3d7f7a instanceof HTMLElement
        ? _0x3d7f7a.offsetWidth
        : 0),
    _0x548a57 =
      _0x3d7f7a.clientHeight ||
      (typeof HTMLElement < "u" && _0x3d7f7a instanceof HTMLElement
        ? _0x3d7f7a.offsetHeight
        : 0),
    _0x31f891 = Br(_0x45429f),
    _0x7124c2 = Vr(_0x45429f);
  return {
    scaleX: _0x2e4b7a > 0 && _0x31f891 > 0 ? _0x31f891 / _0x2e4b7a : Lr.scaleX,
    scaleY: _0x548a57 > 0 && _0x7124c2 > 0 ? _0x7124c2 / _0x548a57 : Lr.scaleY,
  };
}
function Ur(_0x152c94, _0x3e1d4b, _0x3321f6) {
  return {
    left: _0x152c94.left + _0x3e1d4b.left * _0x3321f6.scaleX,
    right: _0x152c94.left + _0x3e1d4b.right * _0x3321f6.scaleX,
    top: _0x152c94.top + _0x3e1d4b.top * _0x3321f6.scaleY,
    bottom: _0x152c94.top + _0x3e1d4b.bottom * _0x3321f6.scaleY,
  };
}
function Wr(_0x3185eb) {
  let _0x338432 = zr(_0x3185eb),
    _0x467398 = _0x3185eb.hit["bounds"];
  return _0x338432 && _0x467398
    ? () => {
        let _0x456889 = _0x338432.getBoundingClientRect();
        return Ur(_0x456889, _0x467398, Hr(_0x338432, _0x456889));
      }
    : () => {
        let _0x5c112c =
          _0x338432 == null ? undefined : _0x338432.getBoundingClientRect();
        if (_0x338432 && _0x5c112c && _0x467398)
          return Ur(_0x5c112c, _0x467398, Hr(_0x338432, _0x5c112c));
        let _0x5e9142 = Rr(_0x3185eb),
          _0x419ea5 = _0x338432 && _0x5c112c ? Hr(_0x338432, _0x5c112c) : Lr,
          _0x6d2e11 =
            (_0x5e9142 == null ? undefined : _0x5e9142.clientX) ??
            (_0x5c112c
              ? _0x5c112c.left + _0x3185eb.localPoint["x"] * _0x419ea5.scaleX
              : _0x3185eb.localPoint["x"]),
          _0x2f890c =
            (_0x5e9142 == null ? undefined : _0x5e9142.clientY) ??
            (_0x5c112c
              ? _0x5c112c.top + _0x3185eb.localPoint["y"] * _0x419ea5.scaleY
              : _0x3185eb.localPoint["y"]);
        return {
          left: _0x6d2e11,
          right: _0x6d2e11 + 1,
          top: _0x2f890c,
          bottom: _0x2f890c + 1,
        };
      };
}
function Gr(_0x11554e) {
  return _0x11554e.right <= _0x11554e.left || _0x11554e.bottom <= _0x11554e.top
    ? false
    : typeof window > "u" ||
        (_0x11554e.right > 0 &&
          _0x11554e.bottom > 0 &&
          _0x11554e.left < window.innerWidth &&
          _0x11554e.top < window.innerHeight);
}
function Kr(_0x4473d1, _0x1fad46) {
  let _0x31d25e = Wr(_0x4473d1),
    _0x4f71c7 = _0x31d25e(),
    _0xba9f4a = new _0x56bf99(_0x4f71c7),
    _0x345c75 = new _0x140e64(),
    _0x231556 = false,
    _0x3eb0c4 = false;
  return (
    typeof window < "u" &&
      _0x345c75.add(
        _0x15abee(
          _0x596695(window, "scroll", { capture: true }),
          _0x596695(window, "resize"),
        )
          .pipe(_0x3e5fe2(16))
          .subscribe(() => {
            _0x3eb0c4 ||
              _0x231556 ||
              ((_0x3eb0c4 = true),
              queueMicrotask(() => {
                if (((_0x3eb0c4 = false), _0x231556)) return;
                let _0x342691 = _0x31d25e();
                if (!Gr(_0x342691)) {
                  _0x1fad46();
                  return;
                }
                _0xba9f4a.next(_0x342691);
              }));
          }),
      ),
    {
      initialRect: _0x4f71c7,
      anchorRect$: _0xba9f4a.asObservable(),
      visible: Gr(_0x4f71c7),
      dispose: () => {
        ((_0x231556 = true), _0x345c75.dispose(), _0xba9f4a.complete());
      },
    }
  );
}
const qr = "boards-chart-element-float-menu";
function Jr(_0x3ebd68, _0x2cd000) {
  return _0x3ebd68 + "::" + _0x2cd000;
}
let Yr = class extends _0x175372 {
  constructor(
    _0x2f3be1,
    _0x3f5863,
    _0x5ab577,
    _0x5245a4,
    _0x578b69,
    _0x389804,
    _0x57bd5a,
    _0x56e0a5,
    _0x46fad7,
  ) {
    (super(),
      (this._modelService = _0x2f3be1),
      (this._chartRenderService = _0x3f5863),
      (this._chartUIService = _0x5ab577),
      (this._editSessionService = _0x5245a4),
      (this._adapterRegistry = _0x578b69),
      (this._canvasPopupService = _0x389804),
      (this._renderManagerService = _0x57bd5a),
      (this._univerInstanceService = _0x56e0a5),
      (this._injector = _0x46fad7),
      V(this, "_chartEventDisposables", new Map()),
      V(this, "_popupDisposable", null),
      V(this, "_popupRuntimeKey", null),
      V(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(),
      this._chartEventDisposables["forEach"]((_0x24ac89) =>
        _0x24ac89.dispose(),
      ),
      this._chartEventDisposables["clear"](),
      super.dispose());
  }
  _registerAdapter() {
    let _0x371fa3 = _0x978ab3({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0xb91da5) => {
        this._modelService["setActiveChartById"](
          _0xb91da5.unitId,
          _0xb91da5.chartId,
        );
        let _0x52d4bf = this._modelService["getChartModel"](
            _0xb91da5.unitId,
            _0xb91da5.chartId,
          ),
          _0x280b6c = this._univerInstanceService["getUnit"](
            _0xb91da5.unitId,
            _0x255b36.UNIVER_BOARD,
          ),
          _0x1fee11 = this._editSessionService["getActiveSession"]();
        if (!(!_0x52d4bf || !_0x280b6c || !_0x1fee11))
          return new _0x54d105(
            _0x52d4bf.model,
            new _0x57faec({
              unitId: _0xb91da5.unitId,
              pageId: _0x1fee11.subUnitId,
              chartId: _0xb91da5.chartId,
              elementId: _0x1fee11.elementId,
              boardModel: _0x280b6c,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x5074d2) => {
        this._modelService["setActiveChartById"](
          _0x5074d2.unitId,
          _0x5074d2.chartId,
        );
        let _0x5aa375 = this._editSessionService["getActiveSession"]();
        ((_0x5aa375 == null ? undefined : _0x5aa375.unitId) ===
          _0x5074d2.unitId &&
          _0x5aa375.chartId === _0x5074d2.chartId &&
          this._editSessionService["open"]({
            ..._0x5aa375,
            route: _0x24a090(_0x5074d2.target),
            source: "programmatic",
          }),
          this._closePopup());
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](qr, _0x371fa3));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      this._modelService["chartModelAdded$"].subscribe((_0x1eec5d) => {
        let _0x368b29 = Jr(_0x1eec5d.unitId, _0x1eec5d.chartId);
        if (this._chartEventDisposables["has"](_0x368b29)) return;
        let _0x2799ab = new _0x140e64();
        (_0x2799ab.add(
          this._chartRenderService["on"](
            _0x1eec5d.unitId,
            _0x1eec5d.chartId,
            "click",
            (_0x2565be) => {
              this._openFloatMenu(
                _0x1eec5d.unitId,
                _0x1eec5d.chartId,
                _0x2565be,
              );
            },
          ),
        ),
          this._chartEventDisposables["set"](_0x368b29, _0x2799ab));
      }),
    ),
      this.disposeWithMe(
        this._modelService["chartModelRemoved$"].subscribe((_0x17806c) => {
          var _0x590d67;
          let _0x2ce635 = Jr(_0x17806c.unitId, _0x17806c.chartId);
          ((_0x590d67 = this._chartEventDisposables["get"](_0x2ce635)) ==
            null || _0x590d67.dispose(),
            this._chartEventDisposables["delete"](_0x2ce635),
            this._popupRuntimeKey === _0x2ce635 && this._closePopup());
        }),
      ),
      this.disposeWithMe(
        this._modelService["activeRuntimeModel$"].subscribe((_0x34da88) => {
          let _0x3b290e = _0x34da88
            ? Jr(_0x34da88.unitId, _0x34da88.chartId)
            : null;
          (!_0x3b290e ||
            (this._popupRuntimeKey && _0x3b290e !== this._popupRuntimeKey)) &&
            this._closePopup();
        }),
      ));
  }
  _openFloatMenu(_0xddea98, _0x460a9a, _0x56696a) {
    if (
      !this._chartRenderService["isElementEditModeActive"](_0xddea98, _0x460a9a)
    )
      return;
    let _0x2b8942 = this._modelService["getChartModel"](_0xddea98, _0x460a9a),
      _0x9598c9 = _0x2b8942
        ? _0x53cc07(_0x2b8942.model, _0x56696a.hit)
        : undefined;
    if (!_0x2b8942 || !_0x9598c9) {
      this._closePopup();
      return;
    }
    let _0x2327a0 = JSON.stringify([_0xddea98, _0x460a9a, _0x9598c9.target]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0x2327a0) ||
      (this._modelService["setActiveChartRuntime"](_0x2b8942),
      this._closePopup(),
      !_0x9598c9.showFloatMenu)
    )
      return;
    let _0x200763 = this._renderManagerService["getRenderUnitById"](_0xddea98);
    if (!_0x200763) return;
    let _0x322827 = Kr(_0x56696a, () =>
      this._clearHiddenSelectedTarget(_0xddea98, _0x460a9a),
    );
    if (!_0x322827.visible) {
      _0x322827.dispose();
      return;
    }
    let _0x4929d7 = this._canvasPopupService["addPopup"]({
        componentKey: _0x27f0aa,
        direction: "top-center",
        offset: [0, 8],
        unitId: _0xddea98,
        subUnitId: "",
        anchorRect: _0x322827.initialRect,
        anchorRect$: _0x322827.anchorRect$,
        canvasElement: _0x200763.engine["getCanvasElement"](),
        extraProps: {
          unitId: _0xddea98,
          chartId: _0x460a9a,
          element: _0x56696a.hit,
          target: _0x9598c9.target,
          adapterKey: qr,
        },
      }),
      _0x2abbde = new _0x140e64();
    (_0x2abbde.add(_0x322827),
      _0x2abbde.add({
        dispose: () => this._canvasPopupService["removePopup"](_0x4929d7),
      }),
      (this._popupDisposable = _0x2abbde),
      (this._popupRuntimeKey = Jr(_0xddea98, _0x460a9a)),
      (this._popupSessionKey = _0x2327a0));
  }
  _closePopup() {
    var _0x406623;
    ((_0x406623 = this._popupDisposable) == null || _0x406623.dispose(),
      (this._popupDisposable = null),
      (this._popupRuntimeKey = null),
      (this._popupSessionKey = null));
  }
  _clearHiddenSelectedTarget(_0x3fb1aa, _0x1b59c8) {
    (this._closePopup(),
      this._chartRenderService["isElementEditModeActive"](
        _0x3fb1aa,
        _0x1b59c8,
      ) &&
        (this._chartRenderService["setElementEditMode"](
          _0x3fb1aa,
          _0x1b59c8,
          false,
        ),
        this._chartRenderService["setElementEditMode"](
          _0x3fb1aa,
          _0x1b59c8,
          true,
        )));
  }
};
Yr = U(
  [
    H(0, _0x1d1546(_0x35d8c1)),
    H(1, _0x1d1546(J)),
    H(2, G),
    H(3, _0x1d1546(W)),
    H(4, _0x1d1546(_0x1e013f)),
    H(5, _0x1d1546(_0x272602)),
    H(6, _0x31808b),
    H(7, _0x4a8574),
    H(8, _0x1d1546(_0x4ffb23)),
  ],
  Yr,
);
function Xr(_0x59466d, _0x213e68, _0x37ef21, _0x580053, _0x37c3b6) {
  let _0x4cea84 = {
    chartType: _0x213e68,
    data: _0x37ef21,
    ...(_0x37c3b6 ? { dataSource: _0x37c3b6 } : {}),
    ...(_0x580053 ? { style: _0x580053 } : {}),
  };
  return { ..._0x59466d, options: _0x4cea84 };
}
function Zr(_0x4aa3f2) {
  let _0xd28560 = _0x3e1b78(_0x3fa76e),
    _0x2150b3 = _0x3e1b78(_0x1cf08f),
    _0x10ebaf = _0x36f57d(
      () =>
        _0x25b47c(
          _0x5a5c79.map((_0x1c6ef6) => ({
            ..._0x1c6ef6,
            label: _0x2150b3.t(
              "boards-chart-ui.chartTypes." + _0x1c6ef6.labelId,
            ),
          })),
        ),
      [_0x2150b3],
    ),
    [_0x4d86a6, _0x5f4812] = _0x51b079(String(_0x4b1a88.Column)),
    _0x1f6988 = _0x10ebaf.find((_0x8268c1) => _0x8268c1.value === _0x4d86a6),
    _0x48cdcb =
      (_0x1f6988 == null ? undefined : _0x1f6988.chartType) ?? _0x4b1a88.Column,
    [_0x256d64, _0x519d4a] = _0x51b079(() =>
      _0x438251.map((_0x1c40de) => [..._0x1c40de]),
    ),
    [_0x1808a7, _0x1b90ba] = _0x51b079("inline"),
    [_0x2f1a61, _0x2773fc] = _0x51b079(null),
    [_0x2af71c, _0xd75489] = _0x51b079([]),
    [_0x2855cb, _0x35b538] = _0x51b079(null),
    _0x99d938 = {
      [_0x20dc2f.UnknownOption]: _0x2150b3.t(
        "boards-chart-ui.common.insertChartFailed",
      ),
      [_0x20dc2f.EmptyData]: _0x2150b3.t(
        "boards-chart-ui.common.tableDataEmpty",
      ),
      [_0x20dc2f.InvalidCandlestickData]: _0x2150b3.t(
        "boards-chart-ui.candlestick.columnsError",
      ),
    },
    _0x214544 = (_0x8f7ecb) =>
      _0x6990ab(_0x8f7ecb, {
        candlestickClose: _0x2150b3.t("boards-chart-ui.candlestick.close"),
        candlestickHigh: _0x2150b3.t("boards-chart-ui.candlestick.high"),
        candlestickLow: _0x2150b3.t("boards-chart-ui.candlestick.low"),
        candlestickOpen: _0x2150b3.t("boards-chart-ui.candlestick.open"),
        category: _0x2150b3.t("boards-chart-ui.common.category"),
        chordSource: _0x2150b3.t("boards-chart-ui.chord.source"),
        chordTarget: _0x2150b3.t("boards-chart-ui.chord.target"),
        label: _0x2150b3.t("boards-chart-ui.common.label"),
        sunburstHierarchy: _0x2150b3.t("boards-chart-ui.sunburst.hierarchy"),
        value: _0x2150b3.t("boards-chart-ui.common.value"),
        valueField: _0x2150b3.t("boards-chart-ui.common.valueField"),
      });
  return _0x5e51d3("div", {
    className:
      "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    children: [
      _0x5e51d3("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          _0x48b202("div", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x2150b3.t("boards-chart-ui.common.chartType"),
          }),
          _0x48b202(_0x1530ec, {
            className: "univer-w-full !univer-min-w-0",
            value: _0x4d86a6,
            options: _0x10ebaf,
            onChange: (_0x1f55c7) => {
              var _0x55118c;
              _0x5f4812(_0x1f55c7);
              let _0x145f50 =
                  ((_0x55118c = _0x10ebaf.find(
                    (_0x5dbe4a) => _0x5dbe4a.value === _0x1f55c7,
                  )) == null
                    ? undefined
                    : _0x55118c.chartType) ?? Number(_0x1f55c7),
                _0x4d7796 = _0x214544(_0x145f50);
              _0x4d7796 && _0x519d4a(_0x4d7796);
            },
          }),
        ],
      }),
      _0x48b202(_0x1b5b9e, {
        mode: _0x1808a7,
        inlineContent: _0x48b202(_0x545508, {
          values: _0x256d64,
          minColumns: _0x1d7ef8(_0x48cdcb),
          parsePastedText: _0x153d29,
          onChange: _0x519d4a,
        }),
        onModeChange: (_0x43b345) => {
          (_0x1b90ba(_0x43b345), _0x2773fc(null), _0xd75489([]));
        },
        onPreviewChange: (_0x1c57cc, _0x536039) => {
          _0x1c57cc && _0x536039.status === _0x595424.READY && _0x536039.values
            ? (_0x2773fc({ source: _0x1c57cc }),
              _0xd75489(_0x536039.values["map"]((_0x2bf635) => [..._0x2bf635])))
            : (_0x2773fc(null), _0xd75489([]));
        },
      }),
      _0x2855cb &&
        _0x48b202("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x2855cb,
        }),
      _0x5e51d3("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x4aa3f2.onCancel &&
            _0x48b202(_0x14c3eb, {
              type: "button",
              variant: "default",
              onClick: _0x4aa3f2.onCancel,
              children: _0x2150b3.t("boards-chart-ui.common.cancel"),
            }),
          _0x48b202(_0x14c3eb, {
            type: "button",
            variant: "primary",
            disabled: _0x1808a7 === "referenced" && !_0x2f1a61,
            onClick: async () => {
              var _0x3f2df7;
              let _0x16db3c = _0x2eb909({
                optionId: _0x4d86a6,
                values: _0x1808a7 === "referenced" ? _0x2af71c : _0x256d64,
              });
              if (!_0x16db3c.ok) {
                _0x35b538(_0x99d938[_0x16db3c.issue["code"]]);
                return;
              }
              if (
                !(await _0xd28560.executeCommand(
                  _0x292d78.id,
                  Xr(
                    _0x4aa3f2.insertParams,
                    _0x16db3c.plan["chartType"],
                    _0x16db3c.plan["values"],
                    _0x16db3c.plan["style"],
                    _0x1808a7 === "referenced"
                      ? (_0x2f1a61 ?? undefined)
                      : undefined,
                  ),
                ))
              ) {
                _0x35b538(
                  _0x2150b3.t("boards-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x35b538(null),
                (_0x3f2df7 = _0x4aa3f2.onInserted) == null ||
                  _0x3f2df7.call(_0x4aa3f2));
            },
            children: _0x2150b3.t("boards-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
let Qr = class extends _0x175372 {
  constructor(_0x336231) {
    (super(), (this._componentManager = _0x336231), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](cr, gr)),
      this.disposeWithMe(this._componentManager["register"](ar, or)),
      this.disposeWithMe(this._componentManager["register"](_0x2eaf2a, Zr)),
      this.disposeWithMe(this._componentManager["register"](Qn, nr)));
  }
};
Qr = U([H(0, _0x1d1546(_0xf4da3a))], Qr);
var $r = class extends _0x412d13 {
  constructor(_0x169d0b, _0x3bfbf9) {
    (super(_0x169d0b, _0x3bfbf9),
      V(this, "_element", undefined),
      V(this, "_frameStyle", undefined),
      (this._element = _0x3bfbf9.element),
      (this._frameStyle = _0x3bfbf9.frameStyle),
      this._attachNativeLoadHandlers());
  }
  updateElement(_0x28927d) {
    ((this._element = _0x28927d), this.makeDirty(true));
  }
  updateFrameStyle(_0x102232) {
    ti(this._frameStyle, _0x102232) ||
      ((this._frameStyle = _0x102232), this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
  getFrameStyle() {
    return this._frameStyle;
  }
  changeChartSource(_0x3a7010) {
    (this._native ??
      ((this._native = document.createElement("img")),
      (this._native["crossOrigin"] = "anonymous")),
      this._attachNativeLoadHandlers(),
      (this._native["src"] = _0x3a7010));
  }
  _draw(_0x24f369, _0x881d35, _0x4b84fc = this.width, _0x3147ce = this.height) {
    let _0xccb845 = this._frameStyle,
      _0x1c5dd9 = Sr({ width: _0x4b84fc, height: _0x3147ce }, _0xccb845);
    (_0x24f369.save(),
      _0x24f369.translate(-_0x4b84fc / 2, -_0x3147ce / 2),
      ei(_0x24f369, 0, 0, _0x4b84fc, _0x3147ce, _0xccb845.radius),
      (_0x24f369.fillStyle = _0xccb845.fill),
      _0x24f369.fill(),
      _0x24f369.restore(),
      this._drawChartImage(
        _0x24f369,
        _0x4b84fc,
        _0x3147ce,
        _0x1c5dd9,
        _0xccb845,
      ),
      this._drawFrameStroke(_0x24f369, _0x4b84fc, _0x3147ce, _0xccb845));
  }
  _drawChartImage(_0x2db416, _0x4f3fcc, _0x397b4b, _0x3bd1d7, _0x4820bc) {
    var _0x42518e;
    !((_0x42518e = this._native) != null && _0x42518e.complete) ||
      this._native["naturalWidth"] <= 0 ||
      this._native["naturalHeight"] <= 0 ||
      (_0x2db416.save(),
      _0x2db416.translate(-_0x4f3fcc / 2, -_0x397b4b / 2),
      ei(
        _0x2db416,
        _0x3bd1d7.left,
        _0x3bd1d7.top,
        _0x3bd1d7.width,
        _0x3bd1d7.height,
        Math.max(0, _0x4820bc.radius - _0x4820bc.strokeWidth),
      ),
      _0x2db416.clip(),
      _0x2db416.drawImage(
        this._native,
        _0x3bd1d7.left,
        _0x3bd1d7.top,
        _0x3bd1d7.width,
        _0x3bd1d7.height,
      ),
      _0x2db416.restore());
  }
  _drawFrameStroke(_0xb78b4f, _0x36930d, _0x3f56e2, _0xd343d8) {
    if (_0xd343d8.strokeWidth <= 0) return;
    let _0x198875 = Cr({ width: _0x36930d, height: _0x3f56e2 }, _0xd343d8);
    (_0xb78b4f.save(),
      _0xb78b4f.translate(-_0x36930d / 2, -_0x3f56e2 / 2),
      ei(
        _0xb78b4f,
        _0x198875.left,
        _0x198875.top,
        _0x198875.width,
        _0x198875.height,
        _0x198875.radius,
      ),
      (_0xb78b4f.strokeStyle = _0xd343d8.stroke),
      (_0xb78b4f.lineWidth = _0xd343d8.strokeWidth),
      _0xb78b4f.stroke(),
      _0xb78b4f.restore());
  }
  _notifyScene() {
    let _0x12ba52 = this.getScene();
    (this.makeDirty(true),
      _0x12ba52 == null || _0x12ba52.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers() {
    this._native &&
      ((this._native["onload"] = () => {
        (this.makeDirty(true), this._notifyScene());
      }),
      (this._native["onerror"] = () => {
        this._notifyScene();
      }));
  }
};
function ei(_0x125bf6, _0x2cf0e4, _0x46ffd1, _0x2404f1, _0x57aba7, _0x20b15f) {
  let _0xbde671 = Math.min(_0x20b15f || 0, _0x2404f1 / 2, _0x57aba7 / 2);
  if ((_0x125bf6.beginPath(), !_0xbde671)) {
    (_0x125bf6.rect(_0x2cf0e4, _0x46ffd1, _0x2404f1, _0x57aba7),
      _0x125bf6.closePath());
    return;
  }
  (_0x125bf6.moveTo(_0x2cf0e4 + _0xbde671, _0x46ffd1),
    _0x125bf6.lineTo(_0x2cf0e4 + _0x2404f1 - _0xbde671, _0x46ffd1),
    _0x125bf6.arc(
      _0x2cf0e4 + _0x2404f1 - _0xbde671,
      _0x46ffd1 + _0xbde671,
      _0xbde671,
      (Math.PI * 3) / 2,
      0,
      false,
    ),
    _0x125bf6.lineTo(_0x2cf0e4 + _0x2404f1, _0x46ffd1 + _0x57aba7 - _0xbde671),
    _0x125bf6.arc(
      _0x2cf0e4 + _0x2404f1 - _0xbde671,
      _0x46ffd1 + _0x57aba7 - _0xbde671,
      _0xbde671,
      0,
      Math.PI / 2,
      false,
    ),
    _0x125bf6.lineTo(_0x2cf0e4 + _0xbde671, _0x46ffd1 + _0x57aba7),
    _0x125bf6.arc(
      _0x2cf0e4 + _0xbde671,
      _0x46ffd1 + _0x57aba7 - _0xbde671,
      _0xbde671,
      Math.PI / 2,
      Math.PI,
      false,
    ),
    _0x125bf6.lineTo(_0x2cf0e4, _0x46ffd1 + _0xbde671),
    _0x125bf6.arc(
      _0x2cf0e4 + _0xbde671,
      _0x46ffd1 + _0xbde671,
      _0xbde671,
      Math.PI,
      (Math.PI * 3) / 2,
      false,
    ),
    _0x125bf6.closePath());
}
function ti(_0x1bbd46, _0x1c9a53) {
  return (
    _0x1bbd46.fill === _0x1c9a53.fill &&
    _0x1bbd46.stroke === _0x1c9a53.stroke &&
    _0x1bbd46.strokeWidth === _0x1c9a53.strokeWidth &&
    _0x1bbd46.radius === _0x1c9a53.radius
  );
}
function ni(_0x2038ac) {
  let { element: _0x13a176 } = _0x2038ac.elementDataItem;
  return _0x13a176.type === _0x1b532c.Chart ? _0x13a176 : null;
}
let Z = class {
  constructor(_0x3552ea, _0x1eb8a5, _0x5a999f, _0x168756) {
    ((this._themeService = _0x3552ea),
      (this._snapshotService = _0x1eb8a5),
      (this._resourceService = _0x5a999f),
      (this._renderService = _0x168756),
      V(this, "name", "chart"),
      V(this, "_snapshotRefreshers", new WeakMap()));
  }
  createObject(_0x4e9d94) {
    let _0x32de3e = ni(_0x4e9d94);
    if (!_0x32de3e) return null;
    let _0x37310d = Math.max(1, _0x4e9d94.bounds["width"]),
      _0x53a4bb = Math.max(1, _0x4e9d94.bounds["height"]),
      _0x42686e = new $r(_0x4e9d94.key, {
        url: "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: _0x4e9d94.bounds["left"],
        top: _0x4e9d94.bounds["top"],
        width: _0x37310d,
        height: _0x53a4bb,
        angle: _0x4e9d94.bounds["angle"],
        flipX: _0x4e9d94.bounds["flipX"],
        flipY: _0x4e9d94.bounds["flipY"],
        zIndex: _0x4e9d94.zIndex,
        visible: _0x32de3e.visible !== false,
        evented: true,
        forceRender: true,
        element: _0x32de3e,
        frameStyle: this._resolveFrameStyle(_0x4e9d94.unitId, _0x32de3e),
      });
    return (
      this._watchSnapshotUpdates(
        _0x42686e,
        this._requestSnapshotForObject(_0x4e9d94.unitId, _0x42686e),
        _0x4e9d94.unitId,
      ),
      _0x42686e
    );
  }
  syncObject(_0x2a8cf2, _0x474c86) {
    var _0x461973;
    if (!(_0x2a8cf2 instanceof $r)) return false;
    let _0x2b62b1 = ni(_0x474c86);
    return _0x2b62b1
      ? (_0x474c86.preserveTransform ||
          _0x2a8cf2.transformByState(_0x474c86.bounds),
        _0x2a8cf2.updateElement(_0x2b62b1),
        this._updateFrameStyle(_0x474c86.unitId, _0x2a8cf2),
        (_0x461973 = this._snapshotRefreshers["get"](_0x2a8cf2)) == null ||
          _0x461973(),
        true)
      : false;
  }
  _watchSnapshotUpdates(_0x35276d, _0x2d4fed, _0x4ae30e) {
    if (!_0x2d4fed) return;
    let _0x36c700 = null,
      _0xcf1c6e = null,
      _0x5ae416 = false,
      _0x27e350 = (_0x23cf8d) => {
        if (_0xcf1c6e !== _0x23cf8d) {
          if (
            (_0x36c700 == null || _0x36c700.unsubscribe(),
            (_0x36c700 = null),
            (_0xcf1c6e = _0x23cf8d),
            _0x23cf8d.status === "ready" && _0x23cf8d.dataUrl)
          ) {
            _0x35276d.changeChartSource(_0x23cf8d.dataUrl);
            return;
          }
          _0x23cf8d.status === "pending" &&
            (_0x36c700 = this._snapshotService["snapshotUpdated$"].subscribe(
              (_0x5d5d1b) => {
                if (
                  _0x5d5d1b !== _0x23cf8d ||
                  _0x5d5d1b.status !== "ready" ||
                  !_0x5d5d1b.dataUrl
                ) {
                  if (
                    _0x5d5d1b === _0x23cf8d &&
                    _0x5d5d1b.status === "error" &&
                    !_0x5ae416
                  ) {
                    _0x5ae416 = true;
                    let _0x4e917c = this._requestSnapshotForObject(
                      _0x4ae30e,
                      _0x35276d,
                    );
                    _0x4e917c && _0x27e350(_0x4e917c);
                  }
                  return;
                }
                (_0x35276d.changeChartSource(_0x5d5d1b.dataUrl),
                  _0x36c700 == null || _0x36c700.unsubscribe(),
                  (_0x36c700 = null));
              },
            ));
        }
      };
    _0x27e350(_0x2d4fed);
    let _0x38f752 = () => {
      _0x5ae416 = false;
      let _0x3b449d = this._requestSnapshotForObject(_0x4ae30e, _0x35276d);
      _0x3b449d && _0x27e350(_0x3b449d);
    };
    this._snapshotRefreshers["set"](_0x35276d, _0x38f752);
    let _0x2dde20 = this._snapshotService["chartInvalidated$"].subscribe(
      (_0x2e2893) => {
        _0x2e2893.unitId === _0x4ae30e &&
          _0x2e2893.chartId === _0x35276d.getElement().chartId &&
          _0x38f752();
      },
    );
    _0x35276d.onDispose$["subscribeEvent"](() => {
      (_0x36c700 == null || _0x36c700.unsubscribe(),
        _0x2dde20.unsubscribe(),
        this._snapshotRefreshers["delete"](_0x35276d));
    });
  }
  _requestSnapshotForObject(_0x5d56d3, _0x1307ff) {
    let _0x416aa4 = this._updateFrameStyle(_0x5d56d3, _0x1307ff),
      _0x11d9d4 = Sr(
        {
          width: Math.max(1, _0x1307ff.width),
          height: Math.max(1, _0x1307ff.height),
        },
        _0x416aa4,
      );
    return this._snapshotService["requestSnapshot"]({
      unitId: _0x5d56d3,
      chartId: _0x1307ff.getElement().chartId,
      width: _0x11d9d4.width,
      height: _0x11d9d4.height,
      mode: "main",
    });
  }
  _updateFrameStyle(_0x57a83c, _0x1cb59b) {
    let _0x32478c = this._resolveFrameStyle(_0x57a83c, _0x1cb59b.getElement());
    return (_0x1cb59b.updateFrameStyle(_0x32478c), _0x32478c);
  }
  _resolveFrameStyle(_0x5abd5d, _0x13232c) {
    var _0x42ed89;
    let _0x345fc3 =
      (_0x42ed89 = this._resourceService["getChart"](
        _0x5abd5d,
        _0x13232c.chartId,
      )) == null
        ? undefined
        : _0x42ed89.style;
    return xr({
      chartStyle: _0x345fc3,
      chartElement: _0x13232c,
      hostFill: _0x345fc3
        ? this._renderService["getHostStyle"](_0x345fc3).fill
        : undefined,
      isDarkMode: this._themeService["darkMode"],
    });
  }
};
Z = U(
  [
    H(0, _0x1d1546(_0x54c40f)),
    H(1, _0x1d1546(Y)),
    H(2, _0x1d1546(_0x4a1962)),
    H(3, _0x1d1546(J)),
  ],
  Z,
);
function ri(_0x51bc87) {
  return _0x51bc87.type === _0x1b532c.Chart;
}
let Q = class {
  constructor(_0xa5bac4) {
    ((this._resourceService = _0xa5bac4), V(this, "key", "board-chart"));
  }
  collect(_0x17ca16) {
    let _0x4e4191 = {},
      _0x3b5b5b = {},
      _0x4aaefe = {};
    return (
      _0x17ca16.elements["forEach"]((_0x8d36e9) => {
        if (!ri(_0x8d36e9)) return;
        let _0x4294d5 = this._resourceService["getChart"](
            _0x17ca16.unitId,
            _0x8d36e9.chartId,
          ),
          _0x4b4c39 = _0x4294d5
            ? this._resourceService["getDataSource"](
                _0x17ca16.unitId,
                _0x4294d5.dataSourceId,
              )
            : undefined;
        !_0x4294d5 ||
          !_0x4b4c39 ||
          ((_0x4e4191[_0x4294d5.id] = _0x10693b.deepClone(_0x4294d5)),
          (_0x3b5b5b[_0x4b4c39.id] = _0x4b4c39),
          (_0x4aaefe[_0x8d36e9.id] = _0x4294d5.id));
      }),
      Object.keys(_0x4e4191).length === 0
        ? null
        : {
            charts: _0x4e4191,
            dataSources: _0x3b5b5b,
            chartIdByElementId: _0x4aaefe,
          }
    );
  }
  preparePaste(_0x1a0f86) {
    if (!ii(_0x1a0f86.payload)) return null;
    let _0x275cf9 = _0x1a0f86.payload,
      _0x291d49 = new Map();
    _0x1a0f86.elementIdMap["forEach"]((_0x19de4c, _0x5cb07a) => {
      _0x291d49.set(_0x19de4c, _0x5cb07a);
    });
    let _0x565577 = new Map(),
      _0x50a0e0 = new Map(),
      _0x257918 = _0x1a0f86.elements["map"]((_0x1c6ee4) => {
        if (!ri(_0x1c6ee4)) return _0x1c6ee4;
        let _0x57a409 = _0x291d49.get(_0x1c6ee4.id),
          _0x230358 = _0x57a409
            ? _0x275cf9.chartIdByElementId[_0x57a409]
            : undefined;
        if (!_0x230358 || !_0x275cf9.charts[_0x230358]) return _0x1c6ee4;
        let _0x31d034 = _0x565577.get(_0x230358);
        return (
          _0x31d034 ||
            ((_0x31d034 = _0x114f0e(6)), _0x565577.set(_0x230358, _0x31d034)),
          { ..._0x1c6ee4, chartId: _0x31d034 }
        );
      });
    _0x565577.forEach((_0x5c934a, _0x139bbe) => {
      var _0x2e662d;
      let _0x51b12d =
        (_0x2e662d = _0x275cf9.charts[_0x139bbe]) == null
          ? undefined
          : _0x2e662d.dataSourceId;
      _0x51b12d &&
        !_0x50a0e0.has(_0x51b12d) &&
        _0x50a0e0.set(_0x51b12d, _0x114f0e(6));
    });
    let _0x45e3a7 = [];
    _0x50a0e0.forEach((_0x3592ce, _0x5558c6) => {
      let _0x56bb20 = _0x275cf9.dataSources[_0x5558c6];
      _0x56bb20 && _0x45e3a7.push({ ..._0x56bb20, id: _0x3592ce });
    });
    let _0x2f42f5 = [];
    return (
      _0x565577.forEach((_0x47292f, _0x77bf29) => {
        let _0x97c579 = _0x275cf9.charts[_0x77bf29],
          _0x40aaa1 = _0x97c579
            ? _0x50a0e0.get(_0x97c579.dataSourceId)
            : undefined;
        !_0x97c579 ||
          !_0x40aaa1 ||
          _0x2f42f5.push({
            ..._0x97c579,
            id: _0x47292f,
            dataSourceId: _0x40aaa1,
          });
      }),
      _0x2f42f5.length === 0
        ? null
        : {
            elements: _0x257918,
            redoMutations: [
              ..._0x45e3a7.map((_0x2862db) => ({
                id: _0x4aa746.id,
                params: {
                  unitId: _0x1a0f86.targetUnitId,
                  dataSource: _0x2862db,
                },
              })),
              ..._0x2f42f5.map((_0x28e4d3) => ({
                id: _0x1bffae.id,
                params: { unitId: _0x1a0f86.targetUnitId, chart: _0x28e4d3 },
              })),
            ],
            undoMutations: [
              ..._0x2f42f5.map((_0xb60126) => ({
                id: _0x27d8ed.id,
                params: {
                  unitId: _0x1a0f86.targetUnitId,
                  chartId: _0xb60126.id,
                },
              })),
              ..._0x45e3a7.map((_0x5be0c3) => ({
                id: _0x4e7fcf.id,
                params: {
                  unitId: _0x1a0f86.targetUnitId,
                  dataSourceId: _0x5be0c3.id,
                },
              })),
            ],
          }
    );
  }
};
Q = U([H(0, _0x1d1546(_0x4a1962))], Q);
function ii(_0x3759cb) {
  if (!_0x3759cb || typeof _0x3759cb != "object") return false;
  let _0x38c031 = _0x3759cb;
  return (
    !!_0x38c031.charts &&
    !!_0x38c031.dataSources &&
    !!_0x38c031.chartIdByElementId
  );
}
let ai = class extends _0x175372 {
  constructor(_0x20887e, _0x4df224) {
    (super(),
      (this._snapshotService = _0x4df224),
      this.disposeWithMe(_0x20887e.register(this)));
  }
  supports(_0x413a88) {
    return "unitId" in _0x413a88 && "getElement" in _0x413a88;
  }
  exportImage(_0x1e4b49, _0x2d26b8) {
    if (!this.supports(_0x1e4b49)) return Promise.resolve(undefined);
    let _0x2c51f4 = _0x1e4b49.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: _0x1e4b49.unitId,
      chartId: _0x1e4b49.getId(),
      width: Math.max(
        1,
        (_0x2c51f4 == null ? undefined : _0x2c51f4.width) ?? 1,
      ),
      height: Math.max(
        1,
        (_0x2c51f4 == null ? undefined : _0x2c51f4.height) ?? 1,
      ),
      format: _0x2d26b8 == null ? undefined : _0x2d26b8.format,
      mode: "main",
    });
  }
};
ai = U([H(0, _0x1d1546(_0x179309)), H(1, _0x1d1546(Y))], ai);
const oi = "UNIVER_BOARDS_CHART_UI_PLUGIN";
let $ = class extends _0x54f9d9 {
  constructor(_0x2e0091 = Kn, _0x5508f9, _0x3e99a3, _0x22099e) {
    (super(),
      (this._config = _0x2e0091),
      (this._injector = _0x5508f9),
      (this._configService = _0x3e99a3),
      (this._renderManagerService = _0x22099e),
      V(this, "_adapter", null));
    let { ..._0x1fc0e7 } = _0x40b185({}, Kn, this._config);
    this._configService["setConfig"](Gn, _0x1fc0e7);
  }
  onStarting() {
    (this.disposeWithMe(this._injector["get"](_0x3fa76e).registerCommand(sr)),
      [
        [J],
        [Y],
        [ai],
        [G, { useClass: Zn }],
        [K],
        [W],
        [Yr],
        [Z],
        [Q],
        [X],
        [Qr],
      ].forEach((_0x5296c6) => this._injector["add"](_0x5296c6)),
      _0x59611d(this._injector, [[J], [Y], [ai], [G], [K], [W], [Yr]]),
      this._injector["get"](Qr));
    let _0x19014a = this._injector["get"](Z);
    ((this._adapter = _0x19014a),
      this._appendRenderAdapter(_0x19014a),
      this.disposeWithMe(
        _0x3bfe87(() => {
          (this._removeRenderAdapter(_0x19014a), (this._adapter = null));
        }),
      ));
    let _0x1a3454 = this._injector["get"](_0x5d51ae);
    (this.disposeWithMe(_0x1a3454.registerAdapter(this._injector["get"](Q))),
      this.disposeWithMe(this._injector["get"](X)));
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        _0x255b36.UNIVER_BOARD,
        ir,
      ),
    ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x255b36.UNIVER_BOARD,
          Pr,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x255b36.UNIVER_BOARD,
          Er,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x255b36.UNIVER_BOARD,
          rr,
        ),
      ));
  }
  _appendRenderAdapter(_0x1efed8) {
    var _0x498dc5, _0x191cdc;
    let _0x30e756 = this._getBoardsUIConfig(),
      _0x59cee1 = _0x30e756.additionalRenderAdapters ?? [];
    _0x59cee1.includes(_0x1efed8) ||
      this._configService["setConfig"](_0x1cf024, {
        ..._0x30e756,
        additionalRenderAdapters: [..._0x59cee1, _0x1efed8],
        toolbar: {
          ..._0x30e756.toolbar,
          tools: {
            ...((_0x498dc5 = _0x30e756.toolbar) == null
              ? undefined
              : _0x498dc5.tools),
            [_0x3d2b37.Chart]: si(
              (_0x191cdc = _0x30e756.toolbar) == null ||
                (_0x191cdc = _0x191cdc.tools) == null
                ? undefined
                : _0x191cdc[_0x3d2b37.Chart],
            ),
          },
        },
      });
  }
  _removeRenderAdapter(_0x17342a) {
    var _0x280d79;
    let _0x3cd753 = this._getBoardsUIConfig(),
      _0x52da64 =
        (_0x280d79 = _0x3cd753.additionalRenderAdapters) == null
          ? undefined
          : _0x280d79.filter((_0x114af4) => _0x114af4 !== _0x17342a);
    this._configService["setConfig"](_0x1cf024, {
      ..._0x3cd753,
      additionalRenderAdapters: _0x52da64,
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](_0x1cf024) ?? {};
  }
};
(V($, "pluginName", oi),
  V($, "packageName", Fr),
  V($, "version", Ir),
  V($, "type", _0x255b36.UNIVER_BOARD),
  ($ = U(
    [
      _0x10e69f(
        _0x29473f,
        _0x137e5b,
        _0xb3c691,
        _0xca70fc,
        _0x4022b9,
        _0x1856ae,
      ),
      H(1, _0x1d1546(_0x4ffb23)),
      H(2, _0x20bed4),
      H(3, _0x31808b),
    ],
    $,
  )));
function si(_0x360349) {
  return _0x360349 === false
    ? false
    : typeof _0x360349 != "object" || {
        ..._0x360349,
        enabled: _0x360349.enabled ?? true,
      };
}
export {
  Gn as BOARDS_CHART_UI_PLUGIN_CONFIG_KEY,
  oi as BOARDS_CHART_UI_PLUGIN_NAME,
  jr as BOARD_CHART_SNAPSHOT_BORDER_WIDTH,
  Q as BoardChartClipboardAdapter,
  K as BoardChartDataEditService,
  W as BoardChartEditSessionService,
  rr as BoardChartFloatingToolbarRenderController,
  ir as BoardChartOpenEditController,
  Er as BoardChartPanelController,
  Z as BoardChartRenderAdapter,
  J as BoardChartRenderService,
  Pr as BoardChartSelectionController,
  X as BoardChartSnapshotRefreshController,
  Y as BoardChartSnapshotRenderService,
  Zn as BoardChartUIService,
  Dr as BoardDomChartHost,
  Ar as IBoardChartSnapshotRendererService,
  G as IBoardChartUIService,
  $ as UniverBoardsChartUIPlugin,
  si as enableChartTool,
  Mr as resolveBoardChartSnapshotStyle,
};
