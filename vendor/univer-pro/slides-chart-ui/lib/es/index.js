import {
  CommandType as _0x37d1f5,
  DependentOn as _0x3c60fe,
  Disposable as _0x5854cf,
  DisposableCollection as _0x507cc0,
  ICommandService as _0x54e4fb,
  IConfigService as _0x46c8af,
  IUniverInstanceService as _0x5bbcc2,
  Inject as _0x7fe0f2,
  Injector as _0x419de3,
  LocaleService as _0x218544,
  Plugin as _0x42d224,
  RxDisposable as _0x229ffe,
  Tools as _0x3bd61f,
  UniverInstanceType as _0x25e84d,
  createIdentifier as _0x508990,
  generateRandomId as _0x114ad9,
  merge as _0x1937c2,
  toDisposable as _0x1015b0,
  touchDependencies as _0x1bedfc,
} from "@univerjs/core";
import {
  ISlideDrawingService as _0x5adec2,
  PageElementTypeEnum as _0xc36da6,
  PageTypeEnum as _0x584347,
  SlideSceneTypeEnum as _0x280280,
  UniverSlidesPlugin as _0x18cec7,
  UpdateSlideDrawingCommand as _0x2a72d8,
  getSlideCommandTarget as _0xec7347,
} from "@univerjs-pro/slides";
import {
  CHART_DOM_HOST_Z_INDEX as _0x2032c6,
  CHART_ELEMENT_FLOAT_MENU_COMPONENT as _0x2e2dcc,
  CHART_ELEMENT_FLOAT_MENU_OFFSET as _0x349796,
  CHART_HOST_BORDER_RADIUS as _0x6c5340,
  CHART_TYPE_CATALOG as _0x3a2b7f,
  ChartAxisLineVisibilityField as _0x3d11bc,
  ChartColorField as _0x45e027,
  ChartCommonDataMappingSection as _0x251c65,
  ChartEditBlockTitle as _0x41ebc2,
  ChartEditPanel as _0x2fa1ae,
  ChartEditPanelSection as _0x291f34,
  ChartEditPanelTab as _0x37c332,
  ChartEditPanelTabs as _0x55869c,
  ChartEditorCapability as _0x4db9f2,
  ChartEditorProvider as _0xe36dd9,
  ChartElementFloatMenuAdapterRegistry as _0x5cfcd0,
  ChartGradientFillField as _0x137c69,
  ChartGridlineVisibilityField as _0x5a3e4c,
  ChartHostAdapter as _0x5ab478,
  ChartImageExportService as _0x16e5d3,
  ChartIndicatorLineColorField as _0x39a7dd,
  ChartInlineTableEditor as _0x1d137e,
  ChartLegendPositionField as _0x4f3e98,
  ChartLegendRoot as _0x5979f8,
  ChartLegendWrapField as _0x3eb744,
  ChartMainTitleFields as _0x5aef6d,
  ChartNumberFormatTextField as _0x2540fc,
  ChartParetoSeriesSection as _0x12c2ca,
  ChartPieStyleSection as _0x3b0b17,
  ChartReferencedDataSourceEditor as _0x53d9cc,
  ChartSectionAccordion as _0x344ab2,
  ChartSectionAccordionContent as _0x1f359b,
  ChartSectionAccordionItem as _0x33644c,
  ChartSectionAccordionTrigger as _0x470158,
  ChartSeriesSection as _0x27d574,
  ChartStackField as _0x5eadad,
  ChartStyleSection as _0x1b499b,
  ChartThemeField as _0x58e457,
  ChartTypeField as _0x58e9d0,
  ChartTypeSpecificDataSection as _0x3832cd,
  ChartTypeSpecificSetupSection as _0x138ebd,
  ChartTypeSpecificStyleSection as _0x30f0e6,
  ChartUIService as _0x13767a,
  ChartViewStateRegistry as _0x2fc251,
  ChartWaterfallSetupFields as _0x570a6b,
  ChartWaterfallStyleSection as _0xc1037e,
  ChartWordCloudStyleSection as _0x3be9f6,
  DEFAULT_CHART_AXIS_VALUES as _0x1a96f4,
  DEFAULT_CHART_INDICATOR_LINE_VALUES as _0x4c2241,
  DEFAULT_CHART_LEGEND_VALUES as _0x497043,
  DEFAULT_CHART_PARETO_VALUES as _0x40b45e,
  DEFAULT_CHART_PIE_VALUES as _0x558f6f,
  DEFAULT_CHART_SERIES_VALUES as _0x2f33ca,
  DEFAULT_CHART_STYLE_VALUES as _0x49fe38,
  DEFAULT_CHART_TITLE_VALUES as _0x342a37,
  DEFAULT_CHART_WATERFALL_SETUP_VALUES as _0x12e7e2,
  DEFAULT_CHART_WATERFALL_STYLE_VALUES as _0x131e93,
  DEFAULT_CHART_WORD_CLOUD_VALUES as _0x21d9e9,
  InlineChartCreationIssueCode as _0x405f4c,
  MIN_CHART_HOST_DIMENSION as _0x4998bb,
  UniverChartUIPlugin as _0x581fa4,
  buildChartTypeSelectOptions as _0x407fa2,
  chartTypeSupportsCapability as _0x2c90c1,
  compactInlineTableValues as _0x221659,
  createChartElementFloatMenuAdapter as _0x2fd480,
  createChartInlineStarterData as _0x5f2a23,
  getChartInlineTableMinColumns as _0x422cdd,
  resolveChartEditPanelRoute as _0x577087,
  resolveChartElementSelection as _0x2c05d0,
  tryBuildInlineChartCreationPlan as _0x2dd234,
  tryPrepareInlineChartData as _0xdf420a,
  useChartEditorChartType as _0x7e0f29,
  useChartEditorHasRightAxis as _0x49c0a0,
} from "@univerjs-pro/chart-ui";
import {
  CHART_DATA_UPDATE_ANIMATION_DURATION as _0x3a72df,
  ChartDataSourceRuntimeStatus as _0x2d953d,
  ChartImageExportFormat as _0x21b6fb,
  ChartRenderMode as _0x4e1771,
  ChartThemeService as _0x544624,
  ChartTypeBits as _0x1b39ed,
  DataUrlImageChartHost as _0x489da7,
  IChartRenderModelManagerService as _0x55cdbb,
  chartBitsUtils as _0x5502ab,
  isInlineChartDataSource as _0x3008ef,
  isReferencedChartDataSource as _0x3195b9,
  parseInlineChartTable as _0x44c977,
  resolveChartRuntimeStyle as _0x32fa51,
  resolveDefaultChartHostFrameStyle as _0x37eb36,
} from "@univerjs-pro/engine-chart";
import { Button as _0x42cc1a, Select as _0x25c813 } from "@univerjs/design";
import {
  ComponentManager as _0x155795,
  ContextMenuGroup as _0x43d1eb,
  IDialogService as _0xbde23a,
  IMenuManagerService as _0x1595df,
  ISidebarService as _0x9e41a1,
  MenuItemType as _0x2fb9ed,
  useDependency as _0x38d758,
  useObservable as _0x50a33f,
} from "@univerjs/ui";
import {
  useEffect as _0x11aeb5,
  useMemo as _0x410819,
  useState as _0x111a3c,
} from "react";
import { jsx as _0x125417, jsxs as _0x7a5559 } from "react/jsx-runtime";
import {
  ChangeSlideChartDataSourceCommand as _0x2faa49,
  DEFAULT_SLIDE_CHART_STROKE as _0x257f7e,
  DEFAULT_SLIDE_CHART_VALUES as _0x3f1e14,
  InsertSlideChartCommand as _0x42388e,
  RemoveSlideChartDataSourceMutation as _0x1e61af,
  RemoveSlideChartSnapshotMutation as _0x503346,
  SetSlideChartDataSourceMutation as _0x276f84,
  SetSlideChartSnapshotMutation as _0x228a67,
  SlideChartConfigAdapter as _0x3d1d64,
  SlideChartModelService as _0x3b3ba6,
  SlideChartResourceService as _0x38d87a,
  UniverSlidesChartPlugin as _0x1e439c,
  UpdateSlideChartConfigCommand as _0x3ee807,
} from "@univerjs-pro/slides-chart";
import {
  BehaviorSubject as _0x21c2cf,
  Observable as _0x427443,
  Subject as _0x7a0b57,
  auditTime as _0x48a2e1,
  combineLatest as _0xc5fa5,
  skip as _0x2e2aef,
  takeUntil as _0x2a8711,
} from "rxjs";
import {
  ISlideClipboardResourceAdapterService as _0x706b26,
  ISlideDrawingStateService as _0x1f3ae3,
  ObjectAdaptor as _0x21abe1,
  SLIDE_MAIN_VIEWPORT_KEY as _0x180def,
  SlideCanvasPopManagerService as _0xaa3669,
  SlideHitTestService as _0x58ea88,
  SlideImageObject as _0x599f60,
  SlideObjectAdaptorRegistryService as _0x35190a,
  SlidePlaceholderActionOperation as _0x50d702,
  UniverSlidesUIPlugin as _0x2b389a,
  buildDrawingOKey as _0x89c332,
} from "@univerjs-pro/slides-ui";
import {
  IRenderManagerService as _0x2b32e1,
  UniverRenderEnginePlugin as _0x304cda,
  pxToNum as _0x1bc4da,
} from "@univerjs/engine-render";
import { UniverLicensePlugin as _0x51da98 } from "@univerjs-pro/license";
import {
  ShapeLineCapEnum as _0x1485d6,
  ShapeLineDashEnum as _0x15a13a,
  ShapeLineJoinEnum as _0x51123d,
  ShapeLineTypeEnum as _0x241c06,
} from "@univerjs-pro/engine-shape";
function bn(_0x20f126) {
  let _0x9da1b6 = _0x20f126.get(_0x5adec2),
    _0xecb477 = _0x9da1b6.getFocusDrawings();
  if (_0xecb477.length !== 1) return null;
  let [_0x5d126b] = _0xecb477;
  if (!_0x5d126b) return null;
  let _0x4d7373 = _0x9da1b6.getDrawingData(
    _0x5d126b.unitId,
    _0x5d126b.subUnitId,
  )[_0x5d126b.drawingId];
  return !_0x4d7373 || _0x4d7373.element["type"] !== _0xc36da6.Chart
    ? null
    : {
        unitId: _0x5d126b.unitId,
        subUnitId: _0x5d126b.subUnitId,
        drawingId: _0x5d126b.drawingId,
      };
}
const B = {
    id: "slide.operation.open-slide-chart-panel",
    type: _0x37d1f5.OPERATION,
    handler() {
      return true;
    },
  },
  xn = {
    id: "slide.operation.close-slide-chart-panel",
    type: _0x37d1f5.OPERATION,
    handler() {
      return true;
    },
  },
  Sn = {
    id: "slide.operation.open-slide-chart-data-editor",
    type: _0x37d1f5.OPERATION,
    handler() {
      return true;
    },
  },
  Cn = {
    id: "slide.operation.contextmenu.open-chart-panel",
    type: _0x37d1f5.OPERATION,
    handler(_0x3ca352) {
      let _0x28ed34 = bn(_0x3ca352);
      return _0x28ed34
        ? _0x3ca352.get(_0x54e4fb).executeCommand(B.id, _0x28ed34)
        : false;
    },
  },
  wn = "slide-chart.data-editor",
  Tn = "slide-chart.dialog.data-editor";
let En = (function (_0x18b093) {
  return (
    (_0x18b093.SHARED = "shared"),
    (_0x18b093.DUPLICATE = "duplicate"),
    _0x18b093
  );
})({});
function Dn(_0x2868f7) {
  let _0x29ad28 = _0x38d758(_0x218544),
    { values: _0x1e436e, onCancel: _0x98ac3e, onSubmit: _0x164812 } = _0x2868f7,
    [_0x58d633, _0x53c67a] = _0x111a3c(() =>
      _0x3195b9(_0x2868f7.dataSource) ? "referenced" : "inline",
    ),
    [_0x287021, _0x286257] = _0x111a3c(null),
    [_0x1ea0fd, _0x51d32d] = _0x111a3c(() =>
      _0x1e436e.map((_0x2ca18e) => [..._0x2ca18e]),
    ),
    [_0x5d6b35, _0x5c3b44] = _0x111a3c(null),
    _0x133b27 = (_0x3d66bf) => {
      let _0x35a9d9 = _0x221659(_0x1ea0fd);
      if (_0x35a9d9.length === 0) {
        _0x5c3b44(_0x29ad28.t("slides-chart-ui.common.tableDataEmpty"));
        return;
      }
      (_0x5c3b44(null), _0x164812(_0x35a9d9, _0x3d66bf));
    };
  return _0x7a5559("div", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4 univer-p-1",
    children: [
      _0x125417("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
        children: _0x125417(_0x53d9cc, {
          mode: _0x58d633,
          initialSource: _0x3195b9(_0x2868f7.dataSource)
            ? _0x2868f7.dataSource["source"]
            : undefined,
          inlineContent: _0x125417(_0x1d137e, {
            values: _0x1ea0fd,
            parsePastedText: _0x44c977,
            onChange: _0x51d32d,
          }),
          onModeChange: (_0x57cc9c) => {
            (_0x53c67a(_0x57cc9c), _0x286257(null));
          },
          onPreviewChange: (_0x3234a6, _0x24d7b2) =>
            _0x286257(
              _0x3234a6 && _0x24d7b2.status === _0x2d953d.READY
                ? { source: _0x3234a6 }
                : null,
            ),
        }),
      }),
      _0x5d6b35 &&
        _0x125417("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0x5d6b35,
        }),
      _0x7a5559("div", {
        className:
          "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
        children: [
          _0x98ac3e &&
            _0x125417(_0x42cc1a, {
              type: "button",
              variant: "default",
              onClick: _0x98ac3e,
              children: _0x29ad28.t("slides-chart-ui.common.cancel"),
            }),
          _0x125417(_0x42cc1a, {
            type: "button",
            variant: "primary",
            disabled: _0x58d633 === "referenced" && !_0x287021,
            onClick: () => {
              var _0xc9c36a;
              return _0x58d633 === "referenced" && _0x287021
                ? (_0xc9c36a = _0x2868f7.onDataSourceSubmit) == null
                  ? undefined
                  : _0xc9c36a.call(_0x2868f7, _0x287021)
                : _0x133b27("shared");
            },
            children: _0x29ad28.t("slides-chart-ui.common.apply"),
          }),
        ],
      }),
    ],
  });
}
function V(_0x4ba5c3) {
  "@babel/helpers - typeof";
  return (
    (V =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4ef14a) {
            return typeof _0x4ef14a;
          }
        : function (_0x1e2949) {
            return _0x1e2949 &&
              typeof Symbol == "function" &&
              _0x1e2949.constructor === Symbol &&
              _0x1e2949 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1e2949;
          }),
    V(_0x4ba5c3)
  );
}
function On(_0x1efa05, _0x28e8c5) {
  if (V(_0x1efa05) != "object" || !_0x1efa05) return _0x1efa05;
  var _0x409f1f = _0x1efa05[Symbol.toPrimitive];
  if (_0x409f1f !== undefined) {
    var _0x39aef5 = _0x409f1f.call(_0x1efa05, _0x28e8c5 || "default");
    if (V(_0x39aef5) != "object") return _0x39aef5;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x28e8c5 === "string" ? String : Number)(_0x1efa05);
}
function kn(_0x52aa0e) {
  var _0x2b1cc1 = On(_0x52aa0e, "string");
  return V(_0x2b1cc1) == "symbol" ? _0x2b1cc1 : _0x2b1cc1 + "";
}
function H(_0x35b86a, _0x35eca7, _0x3216d7) {
  return (
    (_0x35eca7 = kn(_0x35eca7)) in _0x35b86a
      ? Object.defineProperty(_0x35b86a, _0x35eca7, {
          value: _0x3216d7,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x35b86a[_0x35eca7] = _0x3216d7),
    _0x35b86a
  );
}
function U(_0x491f0b, _0x6e235b) {
  return function (_0x2f4985, _0xceb186) {
    _0x6e235b(_0x2f4985, _0xceb186, _0x491f0b);
  };
}
function W(_0x2cb4f6, _0x5aae00, _0x31d9c0, _0x287613) {
  var _0x492d64 = arguments.length,
    _0x1065ed =
      _0x492d64 < 3
        ? _0x5aae00
        : _0x287613 === null
          ? (_0x287613 = Object.getOwnPropertyDescriptor(_0x5aae00, _0x31d9c0))
          : _0x287613,
    _0x415956;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1065ed = Reflect.decorate(_0x2cb4f6, _0x5aae00, _0x31d9c0, _0x287613);
  else {
    for (var _0x1ec0e2 = _0x2cb4f6.length - 1; _0x1ec0e2 >= 0; _0x1ec0e2--)
      (_0x415956 = _0x2cb4f6[_0x1ec0e2]) &&
        (_0x1065ed =
          (_0x492d64 < 3
            ? _0x415956(_0x1065ed)
            : _0x492d64 > 3
              ? _0x415956(_0x5aae00, _0x31d9c0, _0x1065ed)
              : _0x415956(_0x5aae00, _0x31d9c0)) || _0x1065ed);
  }
  return (
    _0x492d64 > 3 &&
      _0x1065ed &&
      Object.defineProperty(_0x5aae00, _0x31d9c0, _0x1065ed),
    _0x1065ed
  );
}
const G = _0x508990("slide-chart.ui.service");
let An = class extends _0x13767a {
  constructor(_0xaa5e8e, _0x13822f, _0xd767b4, _0x26cb0d, _0x394fb2) {
    (super(_0x394fb2),
      (this._chartModelService = _0xaa5e8e),
      (this._commandService = _0x13822f),
      (this.resourceService = _0xd767b4),
      (this._slideDrawingService = _0x26cb0d),
      H(this, "_activeEditChart$", new _0x21c2cf(null)),
      H(this, "_selectedElement$", new _0x21c2cf(null)),
      H(this, "_panelRoute$", new _0x21c2cf(null)),
      H(this, "activeEditChart$", this._activeEditChart$["asObservable"]()),
      H(this, "selectedElement$", this._selectedElement$["asObservable"]()),
      H(this, "panelRoute$", this._panelRoute$["asObservable"]()));
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
  setActiveEditChart(_0x2c7015) {
    this._activeEditChart$["getValue"]() !== _0x2c7015 &&
      this._activeEditChart$["next"](_0x2c7015);
  }
  isElementEditModeActive(_0x17e618) {
    return this._activeEditChart$["getValue"]() === _0x17e618;
  }
  setSelectedElement(_0x49033d) {
    this._selectedElement$["next"](_0x49033d);
  }
  setPanelRoute(_0x4c1f7f, _0xfdd75a) {
    this._panelRoute$["next"]({ chartId: _0x4c1f7f, route: _0xfdd75a });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  executeChartUpdateConfig(_0x3a0211) {
    let _0x51cf49 = this._chartModelService["activeRuntimeModel"],
      _0xa8b99c =
        _0x3a0211.unitId ?? (_0x51cf49 == null ? undefined : _0x51cf49.unitId),
      _0x26e3aa =
        _0x3a0211.chartId ??
        (_0x51cf49 == null ? undefined : _0x51cf49.chartId);
    !_0xa8b99c ||
      !_0x26e3aa ||
      this._commandService["executeCommand"](_0x3ee807.id, {
        ..._0x3a0211,
        unitId: _0xa8b99c,
        chartId: _0x26e3aa,
      });
  }
  getDrawingBorderColor(_0x4eeeae, _0x4a121f, _0x55e28c) {
    var _0x10fed3;
    let _0x34d7b8 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x4eeeae,
      subUnitId: _0x4a121f,
      drawingId: _0x55e28c,
    });
    if (!(!_0x34d7b8 || _0x34d7b8.element["type"] !== _0xc36da6.Chart))
      return (
        ((_0x10fed3 = _0x34d7b8.element["stroke"]) == null
          ? undefined
          : _0x10fed3.color) ?? _0x257f7e.color
      );
  }
  updateDrawingBorderColor(_0x258518, _0x47c459, _0x18bfe4, _0xb74f19) {
    let _0x262252 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x258518,
      subUnitId: _0x47c459,
      drawingId: _0x18bfe4,
    });
    if (!_0x262252 || _0x262252.element["type"] !== _0xc36da6.Chart)
      return false;
    let _0x356a3c = {
      ..._0x257f7e,
      ...(_0x262252.element["stroke"] ?? {}),
      color: _0xb74f19,
    };
    return (
      this._commandService["executeCommand"](_0x2a72d8.id, {
        patches: [
          {
            unitId: _0x258518,
            subUnitId: _0x47c459,
            drawingId: _0x18bfe4,
            element: { ..._0x262252.element, stroke: _0x356a3c },
          },
        ],
      }),
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
An = W(
  [
    U(0, _0x7fe0f2(_0x3b3ba6)),
    U(1, _0x54e4fb),
    U(2, _0x7fe0f2(_0x38d87a)),
    U(3, _0x7fe0f2(_0x5adec2)),
    U(4, _0x7fe0f2(_0x2fc251)),
  ],
  An,
);
const K = "slide-chart.edit-panel",
  jn = "column",
  q = {
    axis: {
      ..._0x1a96f4,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true,
    },
    indicatorLine: _0x4c2241,
    legend: _0x497043,
    pareto: _0x40b45e,
    pie: _0x558f6f,
    series: _0x2f33ca,
    style: _0x49fe38,
    titles: _0x342a37,
    waterfall: { ..._0x12e7e2, useSubtotal: true },
    waterfallStyle: _0x131e93,
    wordCloud: _0x21d9e9,
  },
  Mn = [
    _0x1b39ed.Line,
    _0x1b39ed.Radar,
    _0x1b39ed.WordCloud,
    _0x1b39ed.Scatter,
    _0x1b39ed.Relation,
    _0x1b39ed.Sankey,
    _0x1b39ed.Heatmap,
    _0x1b39ed.Boxplot,
    _0x1b39ed.Candlestick,
    _0x1b39ed.Histogram,
    _0x1b39ed.Treemap,
    _0x1b39ed.Sunburst,
    _0x1b39ed.Gauge,
    _0x1b39ed.Chord,
  ];
function Nn(_0x20591c) {
  let _0x22bb02 = _0x38d758(_0x218544);
  return _0x7a5559("div", {
    children: [
      _0x125417(_0x41ebc2, {
        title: _0x22bb02.t("slides-chart-ui.common.data"),
      }),
      _0x125417(_0x42cc1a, {
        type: "button",
        variant: "default",
        className: "univer-w-full univer-justify-start",
        onClick: _0x20591c.onEditData,
        children: _0x22bb02.t("slides-chart-ui.common.editData"),
      }),
    ],
  });
}
function Pn() {
  let _0x7a9009 = _0x7e0f29();
  return _0x125417(_0x137c69, {
    visible: Mn.every((_0x5919dd) => !_0x5502ab.baseOn(_0x7a9009, _0x5919dd)),
  });
}
function Fn(_0x1a55af) {
  return _0x7a5559(_0x33644c, {
    id: _0x1a55af.id,
    children: [
      _0x125417(_0x470158, { children: _0x1a55af.label }),
      _0x125417(_0x1f359b, { children: _0x1a55af.children }),
    ],
  });
}
function In(_0x40e596, _0x16c8a3 = false) {
  let _0x5ba172 = _0x40e596 === _0x1b39ed.WordCloud,
    _0x235da2 = _0x5502ab.baseOn(_0x40e596, _0x1b39ed.Bubble),
    _0x20393a = _0x5502ab.baseOn(_0x40e596, _0x1b39ed.Pie),
    _0x454db7 = _0x40e596 === _0x1b39ed.Waterfall,
    _0x430584 = _0x40e596 === _0x1b39ed.Pareto,
    _0x5c2747 = _0x40e596 === _0x1b39ed.Candlestick,
    _0xd2cd27 = _0x40e596 === _0x1b39ed.Histogram,
    _0x36ce82 = _0x40e596 === _0x1b39ed.Treemap,
    _0x55522f = _0x40e596 === _0x1b39ed.Sunburst,
    _0x2b9658 = _0x40e596 === _0x1b39ed.Gauge,
    _0x36322a = _0x40e596 === _0x1b39ed.Chord,
    _0x4f45bf = [_0x291f34.ChartStyle, _0x291f34.ChartAndAxisTitles];
  return (
    _0x5ba172 && _0x4f45bf.push(_0x291f34.WordCloud),
    _0x2c90c1(_0x40e596, _0x4db9f2.GeneralSeries) &&
      !_0x235da2 &&
      !_0x430584 &&
      _0x4f45bf.push(_0x291f34.Series),
    _0x454db7 && _0x4f45bf.push(_0x291f34.WaterfallSeries),
    _0x430584 &&
      _0x4f45bf.push(_0x291f34.ParetoBarSeries, _0x291f34.ParetoLineSeries),
    _0x20393a && _0x4f45bf.push(_0x291f34.PieStyle),
    _0x5c2747 && _0x4f45bf.push(_0x291f34.Candlestick),
    _0xd2cd27 && _0x4f45bf.push(_0x291f34.Histogram),
    _0x36ce82 && _0x4f45bf.push(_0x291f34.Treemap),
    _0x55522f && _0x4f45bf.push(_0x291f34.Sunburst),
    _0x2b9658 && _0x4f45bf.push(_0x291f34.Gauge),
    _0x36322a && _0x4f45bf.push(_0x291f34.Chord),
    _0x2c90c1(_0x40e596, _0x4db9f2.Legend) && _0x4f45bf.push(_0x291f34.Legend),
    _0x2c90c1(_0x40e596, _0x4db9f2.Axes) &&
      (_0x4f45bf.push(_0x291f34.HorizontalAxis, _0x291f34.VerticalAxis),
      _0x16c8a3 && _0x4f45bf.push(_0x291f34.RightVerticalAxis),
      _0x4f45bf.push(_0x291f34.GridlinesAndTicks)),
    _0x2c90c1(_0x40e596, _0x4db9f2.IndicatorLine) &&
      _0x4f45bf.push(_0x291f34.IndicatorLine),
    _0x4f45bf
  );
}
function Ln(_0x4da45e) {
  var _0x3124d8, _0x19d912, _0x258125;
  let _0x4d27db = _0x38d758(G),
    _0x1bb3bd = _0x38d758(_0x218544),
    _0x2ca543 = _0x7e0f29(),
    _0x47cf47 = _0x49c0a0(),
    [_0x3397d8, _0x43a614] = _0x111a3c(_0x257f7e.color),
    [_0x410078, _0x2c4da1] = _0x111a3c(
      ((_0x3124d8 = _0x4da45e.route) == null ? undefined : _0x3124d8.section) ??
        _0x291f34.ChartStyle,
    );
  (_0x11aeb5(() => {
    !_0x4da45e.subUnitId ||
      !_0x4da45e.drawingId ||
      _0x43a614(
        _0x4d27db.getDrawingBorderColor(
          _0x4da45e.unitId,
          _0x4da45e.subUnitId,
          _0x4da45e.drawingId,
        ) ?? _0x257f7e.color,
      );
  }, [_0x4d27db, _0x4da45e.drawingId, _0x4da45e.subUnitId, _0x4da45e.unitId]),
    _0x11aeb5(() => {
      var _0x319784;
      (_0x319784 = _0x4da45e.route) != null &&
        _0x319784.section &&
        _0x2c4da1(_0x4da45e.route["section"]);
    }, [_0x4da45e.route]));
  let _0x314c8a = _0x1bb3bd.t("slides-chart-ui.border"),
    _0x449cd2 = _0x1bb3bd.t("slides-chart-ui.editor.defaultColor"),
    _0x172437 = _0x125417(_0x45e027, {
      emptyLabel: _0x449cd2,
      label: _0x314c8a,
      pickerFallbackValue: _0x257f7e.color,
      resetLabel: _0x449cd2,
      value: _0x3397d8,
      onChange: (_0x2859c8) => {
        let _0x1648d5 = _0x2859c8 ?? _0x257f7e.color;
        (_0x43a614(_0x1648d5),
          _0x4da45e.subUnitId &&
            _0x4da45e.drawingId &&
            _0x4d27db.updateDrawingBorderColor(
              _0x4da45e.unitId,
              _0x4da45e.subUnitId,
              _0x4da45e.drawingId,
              _0x1648d5,
            ));
      },
    }),
    _0x3b6d59 = _0x125417(_0x30f0e6, {}),
    _0x3655b3 = {
      [_0x291f34.Candlestick]: _0x1bb3bd.t(
        "slides-chart-ui.section.candlestick",
      ),
      [_0x291f34.ChartAndAxisTitles]: _0x1bb3bd.t(
        "slides-chart-ui.common.chartAndAxisTitles",
      ),
      [_0x291f34.ChartStyle]: _0x1bb3bd.t("slides-chart-ui.common.chartStyle"),
      [_0x291f34.Chord]: _0x1bb3bd.t("slides-chart-ui.section.chord"),
      [_0x291f34.Funnel]: _0x1bb3bd.t("slides-chart-ui.section.funnel"),
      [_0x291f34.Gauge]: _0x1bb3bd.t("slides-chart-ui.section.gauge"),
      [_0x291f34.GridlinesAndTicks]: _0x1bb3bd.t(
        "slides-chart-ui.section.gridlinesAndTicks",
      ),
      [_0x291f34.Heatmap]: _0x1bb3bd.t("slides-chart-ui.common.heatmap"),
      [_0x291f34.Histogram]: _0x1bb3bd.t("slides-chart-ui.section.histogram"),
      [_0x291f34.HorizontalAxis]: _0x1bb3bd.t(
        "slides-chart-ui.common.horizontalAxis",
      ),
      [_0x291f34.IndicatorLine]: _0x1bb3bd.t(
        "slides-chart-ui.section.indicatorLine",
      ),
      [_0x291f34.Legend]: _0x1bb3bd.t("slides-chart-ui.common.legend"),
      [_0x291f34.LineAndArea]: _0x1bb3bd.t(
        "slides-chart-ui.section.lineAndArea",
      ),
      [_0x291f34.ParetoBarSeries]: _0x1bb3bd.t(
        "slides-chart-ui.section.paretoBar",
      ),
      [_0x291f34.ParetoLineSeries]: _0x1bb3bd.t(
        "slides-chart-ui.section.paretoLine",
      ),
      [_0x291f34.PieStyle]: _0x1bb3bd.t("slides-chart-ui.section.pie"),
      [_0x291f34.Radar]: _0x1bb3bd.t("slides-chart-ui.section.radar"),
      [_0x291f34.Relation]: _0x1bb3bd.t("slides-chart-ui.section.relation"),
      [_0x291f34.RightVerticalAxis]: _0x1bb3bd.t(
        "slides-chart-ui.common.rightVerticalAxis",
      ),
      [_0x291f34.Series]: _0x1bb3bd.t("slides-chart-ui.common.series"),
      [_0x291f34.Sunburst]: _0x1bb3bd.t("slides-chart-ui.section.sunburst"),
      [_0x291f34.Treemap]: _0x1bb3bd.t("slides-chart-ui.section.treemap"),
      [_0x291f34.Trendline]: _0x1bb3bd.t("slides-chart-ui.common.trendline"),
      [_0x291f34.VerticalAxis]: _0x1bb3bd.t(
        "slides-chart-ui.common.verticalAxis",
      ),
      [_0x291f34.WaterfallSeries]: _0x1bb3bd.t(
        "slides-chart-ui.section.waterfall",
      ),
      [_0x291f34.WordCloud]: _0x1bb3bd.t("slides-chart-ui.section.wordCloud"),
    },
    _0x5442ed = {
      [_0x291f34.ChartStyle]: _0x125417(_0x1b499b, {
        defaultValues: q.style,
        hostBorder: _0x172437,
      }),
      [_0x291f34.ChartAndAxisTitles]: _0x125417(_0x5aef6d, {
        commitMode: "change",
        defaultValues: q.titles,
        showFont: false,
      }),
      [_0x291f34.Series]: _0x125417(_0x27d574, {
        defaultValues: q.series,
        NumberFormatField: _0x2540fc,
        selectedSeriesId:
          (_0x19d912 = _0x4da45e.route) == null
            ? undefined
            : _0x19d912.seriesId,
      }),
      [_0x291f34.WaterfallSeries]: _0x125417(_0xc1037e, {
        defaultValues: q.waterfallStyle,
        NumberFormatField: _0x2540fc,
        selectedSeriesId:
          (_0x258125 = _0x4da45e.route) == null
            ? undefined
            : _0x258125.seriesId,
      }),
      [_0x291f34.ParetoBarSeries]: _0x125417(_0x12c2ca, {
        defaultValues: q.pareto,
        NumberFormatField: _0x2540fc,
        showDataPointEditor: true,
        target: "barStyle",
      }),
      [_0x291f34.ParetoLineSeries]: _0x125417(_0x12c2ca, {
        defaultValues: q.pareto,
        NumberFormatField: _0x2540fc,
        showDataPointEditor: true,
        target: "cumulativeLineStyle",
      }),
      [_0x291f34.PieStyle]: _0x125417(_0x3b0b17, {
        defaultValues: q.pie,
        NumberFormatField: _0x2540fc,
      }),
      [_0x291f34.WordCloud]: _0x125417(_0x3be9f6, {
        defaultValues: q.wordCloud,
      }),
      [_0x291f34.Legend]: _0x125417(_0x5979f8, {
        defaultValues: q.legend,
        children: _0x7a5559("div", {
          className: "univer-flex univer-flex-col univer-gap-2",
          children: [_0x125417(_0x4f3e98, {}), _0x125417(_0x3eb744, {})],
        }),
      }),
      [_0x291f34.HorizontalAxis]: _0x125417(_0x3d11bc, {
        axis: "x",
        defaultValues: q.axis,
      }),
      [_0x291f34.VerticalAxis]: _0x125417(_0x3d11bc, {
        axis: "y",
        defaultValues: q.axis,
      }),
      [_0x291f34.RightVerticalAxis]: _0x125417(_0x3d11bc, {
        axis: "rightY",
        defaultValues: q.axis,
      }),
      [_0x291f34.GridlinesAndTicks]: _0x7a5559("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          _0x125417(_0x5a3e4c, {
            axis: "x",
            defaultValues: q.axis,
            label: _0x1bb3bd.t("slides-chart-ui.common.horizontalAxis"),
          }),
          _0x125417(_0x5a3e4c, {
            axis: "y",
            defaultValues: q.axis,
            label: _0x1bb3bd.t("slides-chart-ui.common.verticalAxis"),
          }),
        ],
      }),
      [_0x291f34.IndicatorLine]: _0x125417(_0x39a7dd, {
        defaultValues: q.indicatorLine,
      }),
      [_0x291f34.Candlestick]: _0x3b6d59,
      [_0x291f34.Histogram]: _0x3b6d59,
      [_0x291f34.Treemap]: _0x3b6d59,
      [_0x291f34.Sunburst]: _0x3b6d59,
      [_0x291f34.Gauge]: _0x3b6d59,
      [_0x291f34.Chord]: _0x3b6d59,
    };
  return _0x125417(_0x344ab2, {
    value: _0x410078,
    onChange: _0x2c4da1,
    children: In(_0x2ca543, _0x47cf47).map((_0x1af3c5) =>
      _0x125417(
        Fn,
        {
          id: _0x1af3c5,
          label: _0x3655b3[_0x1af3c5],
          children: _0x5442ed[_0x1af3c5],
        },
        _0x1af3c5,
      ),
    ),
  });
}
function Rn(_0x23af8a) {
  let {
      unitId: _0x3ea386,
      subUnitId: _0x14309a,
      drawingId: _0x5f4a97,
      chartId: _0x101fad,
    } = _0x23af8a,
    _0x192b31 = _0x38d758(_0x3b3ba6),
    _0x503a40 = _0x38d758(_0x38d87a),
    _0x12a605 = _0x38d758(G),
    _0x432604 = _0x38d758(_0x218544),
    _0x41c4b1 = _0x38d758(_0x54e4fb),
    _0x3b334a = _0x38d758(_0x419de3),
    _0x2aec23 = _0x38d758(_0x5bbcc2),
    [_0x3f51c5, _0x19f6ed] = _0x111a3c(_0x37c332.Data),
    _0xe9f68c = _0x50a33f(_0x12a605.panelRoute$, null),
    _0x4255c4 =
      (_0xe9f68c == null ? undefined : _0xe9f68c.chartId) === _0x101fad
        ? _0xe9f68c.route
        : null;
  (_0x11aeb5(() => {
    _0x192b31.setActiveChartById(_0x3ea386, _0x101fad);
  }, [_0x101fad, _0x192b31, _0x3ea386]),
    _0x11aeb5(() => {
      ((_0x4255c4 == null ? undefined : _0x4255c4.tab) === _0x37c332.Style &&
        _0x19f6ed(_0x37c332.Style),
        (_0x4255c4 == null ? undefined : _0x4255c4.tab) === _0x37c332.Data &&
          _0x19f6ed(_0x37c332.Data));
    }, [_0x4255c4]));
  let _0x48cc83 = _0x50a33f(
      _0x192b31.activeRuntimeModel$,
      _0x192b31.activeRuntimeModel,
    ),
    _0x234b7f =
      (_0x48cc83 == null ? undefined : _0x48cc83.unitId) === _0x3ea386 &&
      _0x48cc83.chartId === _0x101fad,
    _0x545aa5 = _0x410819(() => {
      if (!_0x234b7f || !_0x14309a || !_0x5f4a97) return null;
      let _0x2ccdd6 = _0x2aec23.getUnit(_0x3ea386, _0x25e84d.UNIVER_SLIDE);
      return _0x2ccdd6
        ? new _0x5ab478(
            _0x48cc83.model,
            new _0x3d1d64({
              unitId: _0x3ea386,
              subUnitId: _0x14309a,
              chartId: _0x101fad,
              elementId: _0x5f4a97,
              slideModel: _0x2ccdd6,
              injector: _0x3b334a,
            }),
          )
        : null;
    }, [
      _0x48cc83,
      _0x101fad,
      _0x5f4a97,
      _0x3b334a,
      _0x234b7f,
      _0x14309a,
      _0x3ea386,
      _0x2aec23,
    ]),
    _0x13e911 = _0x410819(
      () =>
        _0x407fa2(
          _0x3a2b7f.map((_0x268d89) => ({
            ..._0x268d89,
            label: _0x432604.t(
              "slides-chart-ui.chartTypes." + _0x268d89.labelId,
            ),
          })),
        ),
      [_0x432604],
    );
  return !_0x234b7f || !_0x545aa5
    ? null
    : _0x125417(_0xe36dd9, {
        chartUIService: _0x12a605,
        hostAdapter: _0x545aa5,
        children: _0x7a5559("div", {
          className:
            "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-min-w-0 univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
          children: [
            _0x125417(_0x55869c, {
              ariaLabel: _0x432604.t("slides-chart-ui.common.editChart"),
              className: "univer-shrink-0\x20univer-px-3",
              items: [
                {
                  label: _0x432604.t("slides-chart-ui.common.setup"),
                  panelId: zn,
                  value: _0x37c332.Data,
                },
                {
                  label: _0x432604.t("slides-chart-ui.common.customize"),
                  panelId: Bn,
                  value: _0x37c332.Style,
                },
              ],
              value: _0x3f51c5,
              onChange: _0x19f6ed,
            }),
            _0x3f51c5 === _0x37c332.Data
              ? _0x125417(_0x2fa1ae, {
                  id: zn,
                  label: _0x432604.t("slides-chart-ui.common.setup"),
                  children: _0x7a5559("div", {
                    className:
                      "univer-flex\x20univer-flex-col\x20univer-gap-3\x20univer-px-4\x20univer-pb-5",
                    children: [
                      _0x125417(_0x58e9d0, { options: _0x13e911 }),
                      _0x125417(_0x138ebd, {}),
                      _0x125417(_0x58e457, {}),
                      _0x125417(Pn, {}),
                      _0x125417(_0x5eadad, {}),
                      _0x125417(Nn, {
                        onEditData: () => {
                          _0x41c4b1.executeCommand(Sn.id, {
                            unitId: _0x3ea386,
                            chartId: _0x101fad,
                          });
                        },
                      }),
                      _0x125417(_0x251c65, {
                        orientationControl: _0x125417(_0x42cc1a, {
                          size: "small",
                          onClick: () => {
                            var _0x5eaa30;
                            return _0x12a605.executeChartUpdateConfig({
                              patch: {
                                context: {
                                  orient:
                                    ((_0x5eaa30 = _0x503a40.getChart(
                                      _0x3ea386,
                                      _0x101fad,
                                    )) == null ||
                                    (_0x5eaa30 = _0x5eaa30.context) == null
                                      ? undefined
                                      : _0x5eaa30.orient) === jn
                                      ? "row"
                                      : jn,
                                },
                              },
                            });
                          },
                          children: _0x432604.t(
                            "slides-chart-ui.common.switchRowColumn",
                          ),
                        }),
                      }),
                      _0x125417(_0x3832cd, {}),
                      _0x125417(_0x570a6b, { defaultValues: q.waterfall }),
                    ],
                  }),
                })
              : _0x125417(_0x2fa1ae, {
                  id: Bn,
                  className: "univer-min-w-0\x20univer-overflow-x-hidden",
                  label: _0x432604.t("slides-chart-ui.common.customize"),
                  children: _0x125417(Ln, {
                    unitId: _0x3ea386,
                    subUnitId: _0x14309a,
                    drawingId: _0x5f4a97,
                    route: _0x4255c4,
                  }),
                }),
          ],
        }),
      });
}
const zn = "slide-chart-setup-panel",
  Bn = "slide-chart-style-panel";
let J = class {
  constructor(_0x40f339, _0x11c3d4, _0x37ea0f) {
    ((this._instanceService = _0x40f339),
      (this._commandService = _0x11c3d4),
      (this._drawingStateService = _0x37ea0f));
  }
  insertChartFromText(_0x51e6d, _0x2b308a, _0x16e14b) {
    let _0x4d2680 = _0x44c977(_0x51e6d);
    return (
      _0x4d2680.length !== 0 &&
      this.insertChart(_0x4d2680, _0x2b308a, _0x16e14b)
    );
  }
  insertChart(_0x53d26c, _0x39f806, _0x5350c9 = {}) {
    if (_0x53d26c.length === 0) return false;
    let _0x456ce1 = _0xdf420a(_0x39f806, _0x53d26c);
    if (!_0x456ce1.ok) return false;
    if (_0x5350c9.placeholderDrawing)
      return this._insertChartIntoPlaceholder(
        _0x456ce1.values,
        _0x39f806,
        _0x5350c9.placeholderDrawing,
        _0x5350c9.style,
        _0x5350c9.dataSource,
      );
    let _0x1525b0 = _0xec7347(this._instanceService);
    if (!_0x1525b0) return false;
    let {
        presentation: _0x258bf4,
        unitId: _0x4fdc49,
        subUnitId: _0x345c4a,
      } = _0x1525b0,
      _0x8953b3 = _0x258bf4.getSnapshot().defaultPageSize,
      _0x524022 = Math.min(
        520,
        Math.max(320, Math.round(_0x8953b3.width * 0.56)),
      ),
      _0x51ca07 = Math.min(
        360,
        Math.max(220, Math.round(_0x8953b3.height * 0.56)),
      ),
      _0x932f3a = Math.max(24, Math.round((_0x8953b3.width - _0x524022) / 2)),
      _0x14f9b2 = Math.max(24, Math.round((_0x8953b3.height - _0x51ca07) / 2)),
      _0x2ab5ea = _0x114ad9(6),
      _0x3cb423 = _0x114ad9(6);
    return this._commandService["syncExecuteCommand"](_0x42388e.id, {
      unitId: _0x4fdc49,
      subUnitId: _0x345c4a,
      chart: {
        chartType: _0x39f806,
        ...(_0x5350c9.style ? { style: _0x5350c9.style } : {}),
      },
      dataSource: _0x5350c9.dataSource ?? { values: _0x456ce1.values },
      element: {
        id: _0x3cb423,
        chartId: _0x2ab5ea,
        transform: {
          left: _0x932f3a,
          top: _0x14f9b2,
          width: _0x524022,
          height: _0x51ca07,
        },
      },
    })
      ? (this._drawingStateService["selectDrawings"](
          { unitId: _0x4fdc49, subUnitId: _0x345c4a },
          [_0x3cb423],
          _0x3cb423,
        ),
        this._commandService["syncExecuteCommand"](B.id, {
          unitId: _0x4fdc49,
          subUnitId: _0x345c4a,
          drawingId: _0x3cb423,
        }),
        true)
      : false;
  }
  _insertChartIntoPlaceholder(
    _0xfa538,
    _0x32b767,
    _0xc4af5e,
    _0x254b20,
    _0x2d71c3,
  ) {
    if (_0xc4af5e.element["type"] !== _0xc36da6.Placeholder) return false;
    let _0x1c7f14 = {
        chartType: _0x32b767,
        ...(_0x254b20 ? { style: _0x254b20 } : {}),
      },
      _0x191c9f = _0x2d71c3 ?? { values: _0xfa538 },
      {
        unitId: _0x176f46,
        subUnitId: _0x602d6d,
        drawingId: _0x2e3321,
        element: _0x242353,
        sourcePageType: _0x1db9da,
      } = _0xc4af5e,
      { transform: _0x4b699c, placeholder: _0x2fce97 } = _0x242353,
      _0x417d06 = {
        id: _0x1db9da === _0x584347.Slide ? _0x2e3321 : _0x114ad9(6),
        transform: _0x4b699c,
        placeholder: _0x2fce97,
      },
      _0x145923 =
        _0xc4af5e.sourcePageType === _0x584347.Slide ? _0x2e3321 : undefined;
    if (
      !this._commandService["syncExecuteCommand"](_0x42388e.id, {
        unitId: _0x176f46,
        subUnitId: _0x602d6d,
        chart: _0x1c7f14,
        dataSource: _0x191c9f,
        element: _0x417d06,
        replaceElementId: _0x145923,
      })
    )
      return false;
    let _0x215dd0 = _0x145923 ?? _0x417d06.id;
    return (
      this._drawingStateService["selectDrawings"](
        { unitId: _0x176f46, subUnitId: _0x602d6d },
        [_0x215dd0],
        _0x215dd0,
      ),
      this._commandService["syncExecuteCommand"](B.id, {
        unitId: _0xc4af5e.unitId,
        subUnitId: _0xc4af5e.subUnitId,
        drawingId: _0x215dd0,
      }),
      true
    );
  }
};
J = W([U(0, _0x5bbcc2), U(1, _0x54e4fb), U(2, _0x1f3ae3)], J);
const Vn = "slide-chart.insert-panel",
  Hn = _0x3f1e14.map((_0x364b45) => _0x364b45.join("\x09")).join("\x0a");
function Un(_0x3fcaa5) {
  let _0x29986b = _0x38d758(J),
    _0x51f940 = _0x38d758(_0x218544),
    {
      defaultChartType: _0x4777fa = _0x1b39ed.Column,
      defaultTableText: _0x24044b = Hn,
      insertOptions: _0x2b9673,
      onCancel: _0x1f69b8,
      onInserted: _0x54159c,
    } = _0x3fcaa5,
    _0xe37228 = _0x410819(
      () =>
        _0x407fa2(
          _0x3a2b7f.map((_0x35ea7c) => ({
            ..._0x35ea7c,
            label: _0x51f940.t(
              "slides-chart-ui.chartTypes." + _0x35ea7c.labelId,
            ),
          })),
        ),
      [_0x51f940],
    ),
    [_0x41d959, _0x1a1399] = _0x111a3c(String(_0x4777fa)),
    _0x226faf = _0xe37228.find((_0x1a55d5) => _0x1a55d5.value === _0x41d959),
    _0x2a0148 =
      (_0x226faf == null ? undefined : _0x226faf.chartType) ?? _0x4777fa,
    _0x25ac28 = (_0x127576) =>
      _0x5f2a23(_0x127576, {
        candlestickClose: _0x51f940.t("slides-chart-ui.candlestick.close"),
        candlestickHigh: _0x51f940.t("slides-chart-ui.candlestick.high"),
        candlestickLow: _0x51f940.t("slides-chart-ui.candlestick.low"),
        candlestickOpen: _0x51f940.t("slides-chart-ui.candlestick.open"),
        category: _0x51f940.t("slides-chart-ui.common.category"),
        chordSource: _0x51f940.t("slides-chart-ui.chord.source"),
        chordTarget: _0x51f940.t("slides-chart-ui.chord.target"),
        label: _0x51f940.t("slides-chart-ui.common.label"),
        sunburstHierarchy: _0x51f940.t("slides-chart-ui.sunburst.hierarchy"),
        value: _0x51f940.t("slides-chart-ui.common.value"),
        valueField: _0x51f940.t("slides-chart-ui.common.valueField"),
      }),
    [_0x2654ab, _0x51fcfc] = _0x111a3c(() =>
      _0x3fcaa5.defaultTableText === undefined
        ? (_0x25ac28(_0x4777fa) ?? _0x44c977(_0x24044b))
        : _0x44c977(_0x24044b),
    ),
    [_0x5ae1af, _0x608d29] = _0x111a3c("inline"),
    [_0x550936, _0x35b48d] = _0x111a3c(null),
    [_0x55d8c1, _0x28b7f4] = _0x111a3c([]),
    [_0xb2844d, _0x46e1af] = _0x111a3c(null),
    _0x2fdbeb = {
      [_0x405f4c.UnknownOption]: _0x51f940.t(
        "slides-chart-ui.common.insertChartFailed",
      ),
      [_0x405f4c.EmptyData]: _0x51f940.t(
        "slides-chart-ui.common.tableDataEmpty",
      ),
      [_0x405f4c.InvalidCandlestickData]: _0x51f940.t(
        "slides-chart-ui.candlestick.columnsError",
      ),
    };
  return _0x7a5559("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [
      _0x7a5559("div", {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
        children: [
          _0x125417("div", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x51f940.t("slides-chart-ui.common.chartType"),
          }),
          _0x125417(_0x25c813, {
            className: "univer-w-full\x20!univer-min-w-0",
            value: _0x41d959,
            options: _0xe37228,
            onChange: (_0x1928cc) => {
              var _0x36294a;
              _0x1a1399(_0x1928cc);
              let _0x6bd785 =
                  ((_0x36294a = _0xe37228.find(
                    (_0x44e544) => _0x44e544.value === _0x1928cc,
                  )) == null
                    ? undefined
                    : _0x36294a.chartType) ?? Number(_0x1928cc),
                _0x1ac3b8 = _0x25ac28(_0x6bd785);
              _0x1ac3b8 && _0x51fcfc(_0x1ac3b8);
            },
          }),
        ],
      }),
      _0x125417(_0x53d9cc, {
        mode: _0x5ae1af,
        inlineContent: _0x125417(_0x1d137e, {
          values: _0x2654ab,
          minColumns: _0x422cdd(_0x2a0148),
          parsePastedText: _0x44c977,
          onChange: _0x51fcfc,
        }),
        onModeChange: (_0xd118b) => {
          (_0x608d29(_0xd118b), _0x35b48d(null), _0x28b7f4([]));
        },
        onPreviewChange: (_0x49dfa8, _0x26f13c) => {
          _0x49dfa8 && _0x26f13c.status === _0x2d953d.READY && _0x26f13c.values
            ? (_0x35b48d({ source: _0x49dfa8 }),
              _0x28b7f4(_0x26f13c.values["map"]((_0x4c39dd) => [..._0x4c39dd])))
            : (_0x35b48d(null), _0x28b7f4([]));
        },
      }),
      _0xb2844d &&
        _0x125417("div", {
          className:
            "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
          children: _0xb2844d,
        }),
      _0x7a5559("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x1f69b8 &&
            _0x125417(_0x42cc1a, {
              type: "button",
              variant: "default",
              onClick: _0x1f69b8,
              children: _0x51f940.t("slides-chart-ui.common.cancel"),
            }),
          _0x125417(_0x42cc1a, {
            type: "button",
            variant: "primary",
            disabled: _0x5ae1af === "referenced" && !_0x550936,
            onClick: () => {
              var _0x431e8e;
              let _0x58fb8e = _0x2dd234({
                optionId: _0x41d959,
                values: _0x5ae1af === "referenced" ? _0x55d8c1 : _0x2654ab,
              });
              if (!_0x58fb8e.ok) {
                _0x46e1af(_0x2fdbeb[_0x58fb8e.issue["code"]]);
                return;
              }
              let _0x74a1d7 =
                  _0x5ae1af === "referenced" && _0x550936
                    ? { ..._0x2b9673, dataSource: _0x550936 }
                    : _0x2b9673,
                _0x3726d6 = _0x58fb8e.plan["style"]
                  ? {
                      ..._0x74a1d7,
                      style: {
                        ...(_0x74a1d7 == null ? undefined : _0x74a1d7.style),
                        pie: {
                          ...(_0x74a1d7 == null ||
                          (_0x431e8e = _0x74a1d7.style) == null
                            ? undefined
                            : _0x431e8e.pie),
                          ..._0x58fb8e.plan["style"].pie,
                        },
                      },
                    }
                  : _0x74a1d7;
              if (
                !_0x29986b.insertChart(
                  _0x58fb8e.plan["values"],
                  _0x58fb8e.plan["chartType"],
                  _0x3726d6,
                )
              ) {
                _0x46e1af(
                  _0x51f940.t("slides-chart-ui.common.insertChartFailed"),
                );
                return;
              }
              (_0x46e1af(null), _0x54159c == null || _0x54159c());
            },
            children: _0x51f940.t("slides-chart-ui.common.insert"),
          }),
        ],
      }),
    ],
  });
}
const Wn = "slides-chart-ui.config",
  Gn = {};
function Kn(_0x18f2ea) {
  let _0x1e5f79 = _0x18f2ea.get(_0x5adec2);
  return new _0x427443((_0x4e6ae6) => {
    let _0x2719b7 = () => _0x4e6ae6.next(bn(_0x18f2ea) != null),
      _0x3d4594 = _0x1e5f79.focus$["subscribe"](_0x2719b7);
    return (_0x2719b7(), () => _0x3d4594.unsubscribe());
  });
}
function qn(_0x149b27) {
  return {
    id: Cn.id,
    type: _0x2fb9ed.BUTTON,
    title: _0x149b27.get(_0x218544).t("slides-chart-ui.common.editChart"),
    icon: "ShapeIcon",
    hidden$: new _0x427443((_0x412c25) => {
      let _0x1fefa2 = Kn(_0x149b27).subscribe((_0x198cc4) =>
        _0x412c25.next(!_0x198cc4),
      );
      return () => _0x1fefa2.unsubscribe();
    }),
    disabled$: new _0x427443((_0x171043) => {
      let _0x32040c = Kn(_0x149b27).subscribe((_0x20bf8b) =>
        _0x171043.next(!_0x20bf8b),
      );
      return () => _0x32040c.unsubscribe();
    }),
  };
}
const Jn = {
  "slide.contextMenu.drawing": {
    [_0x43d1eb.OTHERS]: { [Cn.id]: { order: 1, menuItemFactory: qn } },
  },
};
let Yn = class extends _0x5854cf {
  constructor(_0x189936) {
    (super(),
      (this._menuManagerService = _0x189936),
      this._menuManagerService["appendRootMenu"](Jn));
  }
};
Yn = W([U(0, _0x1595df)], Yn);
let Y = class {
  constructor(_0x8a92f7, _0x5cd605) {
    ((this._commandService = _0x8a92f7), (this._resourceService = _0x5cd605));
  }
  getEditorState(_0xce3520, _0x238a03) {
    let _0x57d5b3 = this._resourceService["getChart"](_0xce3520, _0x238a03),
      _0x2bd56f = _0x57d5b3
        ? this._resourceService["getDataSource"](
            _0xce3520,
            _0x57d5b3.dataSourceId,
          )
        : undefined;
    return !_0x57d5b3 || !_0x2bd56f
      ? null
      : {
          unitId: _0xce3520,
          chartId: _0x238a03,
          dataSourceId: _0x2bd56f.id,
          dataSource: _0x2bd56f,
          values: _0x3008ef(_0x2bd56f)
            ? _0x2bd56f.values["map"]((_0x34de13) => [..._0x34de13])
            : [],
          sharingCount: this._resourceService["getDataSourceSharingCount"](
            _0xce3520,
            _0x2bd56f.id,
          ),
        };
  }
  updateDataFromText(_0x5eaf3a, _0x4720e0, _0x22e80a, _0x53e23d) {
    let _0x2bb253 = _0x44c977(_0x22e80a);
    return (
      _0x2bb253.length !== 0 &&
      this.updateData(_0x5eaf3a, _0x4720e0, _0x2bb253, _0x53e23d)
    );
  }
  updateData(_0x12dcca, _0x4825c3, _0x2e4765, _0x4d9038) {
    var _0x4dd91f;
    if (!this.getEditorState(_0x12dcca, _0x4825c3) || _0x2e4765.length === 0)
      return false;
    let _0x4be7e4 =
      (_0x4dd91f = this._resourceService["getChart"](_0x12dcca, _0x4825c3)) ==
      null
        ? undefined
        : _0x4dd91f.chartType;
    if (_0x4be7e4 === undefined) return false;
    let _0x7435f9 = _0xdf420a(_0x4be7e4, _0x2e4765);
    return _0x7435f9.ok
      ? this.changeDataSource(_0x12dcca, _0x4825c3, {
          values: _0x7435f9.values,
        })
      : false;
  }
  changeDataSource(_0x5c8156, _0x462f61, _0x392be3) {
    return this._commandService["syncExecuteCommand"](_0x2faa49.id, {
      unitId: _0x5c8156,
      chartId: _0x462f61,
      dataSource: _0x392be3,
    });
  }
};
Y = W([U(0, _0x54e4fb), U(1, _0x7fe0f2(_0x38d87a))], Y);
var Xn = class extends _0x5854cf {
  constructor(..._0x29c513) {
    (super(..._0x29c513),
      H(this, "_activeChartId", null),
      H(this, "_modeChanged$", new _0x7a0b57()),
      H(this, "modeChanged$", this._modeChanged$["asObservable"]()));
  }
  getRenderMode(_0xd205a5) {
    return this._activeChartId === _0xd205a5 ? _0x4e1771.Dom : _0x4e1771.Image;
  }
  setActiveDomChart(_0x2de3e4) {
    let _0x57a498 = (_0x2de3e4 == null ? undefined : _0x2de3e4.chartId) ?? null;
    if (this._activeChartId === _0x57a498) return;
    let _0x5b4fba = this._activeChartId;
    ((this._activeChartId = _0x57a498),
      _0x5b4fba &&
        this._modeChanged$["next"]({
          chartId: _0x5b4fba,
          mode: _0x4e1771.Image,
        }),
      _0x57a498 &&
        this._modeChanged$["next"]({
          chartId: _0x57a498,
          mode: _0x4e1771.Dom,
        }));
  }
  dispose() {
    ((this._activeChartId = null),
      this._modeChanged$["complete"](),
      super.dispose());
  }
};
let X = class extends _0x5854cf {
  constructor(_0x10c520, _0x1f9dd5, _0x468981, _0x229458, _0x579e7b) {
    (super(),
      (this._slideDrawingService = _0x10c520),
      (this._modelService = _0x1f9dd5),
      (this._renderModeService = _0x468981),
      (this._univerInstanceService = _0x229458),
      (this._renderManagerService = _0x579e7b),
      H(this, "_activeSession", null),
      H(this, "_activeSession$", new _0x21c2cf(null)),
      H(this, "activeSession$", this._activeSession$["asObservable"]()),
      H(this, "_subscriptions", []),
      H(this, "_activeSlideSubscription", null),
      H(this, "_transformStartSubscription", null),
      this._initLifecycleListeners());
  }
  getActiveSession() {
    return this._activeSession;
  }
  open(_0x4606dd) {
    let _0x420158 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x4606dd.unitId,
      subUnitId: _0x4606dd.subUnitId,
      drawingId: _0x4606dd.drawingId,
    });
    if (
      !_0x420158 ||
      _0x420158.element["type"] !== _0xc36da6.Chart ||
      _0x420158.element["chartId"] !== _0x4606dd.chartId
    )
      return false;
    let _0x53b663 = this._modelService["ensureChartModel"](
      _0x4606dd.unitId,
      _0x4606dd.chartId,
    );
    return _0x53b663
      ? ((this._activeSession = _0x4606dd),
        this._bindActiveSlideListener(_0x4606dd),
        this._bindTransformStartListener(_0x4606dd),
        this._modelService["setActiveChartRuntime"](_0x53b663),
        this._renderModeService["setActiveDomChart"](_0x4606dd),
        this._activeSession$["next"](_0x4606dd),
        true)
      : false;
  }
  close() {
    var _0x2d17a7, _0x2af885;
    this._activeSession &&
      ((this._activeSession = null),
      (_0x2d17a7 = this._activeSlideSubscription) == null ||
        _0x2d17a7.unsubscribe(),
      (this._activeSlideSubscription = null),
      (_0x2af885 = this._transformStartSubscription) == null ||
        _0x2af885.unsubscribe(),
      (this._transformStartSubscription = null),
      this._modelService["setActiveChartRuntime"](null),
      this._renderModeService["setActiveDomChart"](null),
      this._activeSession$["next"](null));
  }
  isActive(_0x41c2f2) {
    var _0xce366d;
    return (
      ((_0xce366d = this._activeSession) == null
        ? undefined
        : _0xce366d.chartId) === _0x41c2f2
    );
  }
  dispose() {
    var _0x41b408, _0x3416fa;
    (this.close(),
      (_0x41b408 = this._activeSlideSubscription) == null ||
        _0x41b408.unsubscribe(),
      (this._activeSlideSubscription = null),
      (_0x3416fa = this._transformStartSubscription) == null ||
        _0x3416fa.unsubscribe(),
      (this._transformStartSubscription = null),
      this._subscriptions["forEach"]((_0x11cbae) => _0x11cbae.dispose()),
      (this._subscriptions["length"] = 0),
      this._activeSession$["complete"](),
      super.dispose());
  }
  _initLifecycleListeners() {
    var _0x16b71e, _0x528225, _0x66de55;
    let _0x5dceda =
      (_0x16b71e = this._slideDrawingService["remove$"]) == null
        ? undefined
        : _0x16b71e.subscribe((_0x2ae968) => {
            let _0x3a1955 = this._activeSession;
            _0x3a1955 &&
              _0x2ae968.some(
                (_0x4f9af5) =>
                  _0x4f9af5.unitId === _0x3a1955.unitId &&
                  _0x4f9af5.subUnitId === _0x3a1955.subUnitId &&
                  _0x4f9af5.drawingId === _0x3a1955.drawingId,
              ) &&
              this.close();
          });
    _0x5dceda &&
      this._subscriptions["push"]({ dispose: () => _0x5dceda.unsubscribe() });
    let _0x2ace28 =
      (_0x528225 = this._modelService["chartModelRemoved$"]) == null
        ? undefined
        : _0x528225.subscribe((_0x21748b) => {
            let _0x45724e = this._activeSession;
            _0x45724e &&
              _0x21748b.unitId === _0x45724e.unitId &&
              _0x21748b.chartId === _0x45724e.chartId &&
              this.close();
          });
    _0x2ace28 &&
      this._subscriptions["push"]({ dispose: () => _0x2ace28.unsubscribe() });
    let _0x1ac98a =
      (_0x66de55 = this._univerInstanceService["focused$"]) == null
        ? undefined
        : _0x66de55.subscribe((_0x32f130) => {
            let _0x27db67 = this._activeSession;
            _0x27db67 &&
              _0x32f130 &&
              _0x32f130 !== _0x27db67.unitId &&
              this.close();
          });
    _0x1ac98a &&
      this._subscriptions["push"]({ dispose: () => _0x1ac98a.unsubscribe() });
  }
  _bindActiveSlideListener(_0x431998) {
    var _0x4e1a86;
    ((_0x4e1a86 = this._activeSlideSubscription) == null ||
      _0x4e1a86.unsubscribe(),
      (this._activeSlideSubscription = null));
    let _0x59f0b3 = this._univerInstanceService["getUnit"](
      _0x431998.unitId,
      _0x25e84d.UNIVER_SLIDE,
    );
    this._activeSlideSubscription =
      (_0x59f0b3 == null
        ? undefined
        : _0x59f0b3.pageManager["activeSlideId$"].subscribe((_0x52c301) => {
            let _0x552453 = this._activeSession;
            _0x552453 &&
              _0x52c301 &&
              _0x52c301 !== _0x552453.subUnitId &&
              this.close();
          })) ?? null;
  }
  _bindTransformStartListener(_0x4568e9, _0x24faf2 = true) {
    var _0x5f305b, _0x45dc6b;
    ((_0x5f305b = this._transformStartSubscription) == null ||
      _0x5f305b.unsubscribe(),
      (this._transformStartSubscription = null));
    let _0xb0890a =
      (_0x45dc6b = this._renderManagerService["getRenderUnitById"](
        _0x4568e9.unitId,
      )) == null
        ? undefined
        : _0x45dc6b.scene["getTransformer"]();
    if (!_0xb0890a) {
      _0x24faf2 &&
        queueMicrotask(() => {
          let _0x360b4c = this._activeSession;
          (_0x360b4c == null ? undefined : _0x360b4c.chartId) ===
            _0x4568e9.chartId &&
            this._bindTransformStartListener(_0x4568e9, false);
        });
      return;
    }
    let _0x410f15 = _0x89c332(
      _0x4568e9.unitId,
      _0x4568e9.subUnitId,
      _0x4568e9.drawingId,
    );
    this._transformStartSubscription = _0xb0890a.changeStart$["subscribe"](
      ({ objects: _0x42e488 }) => {
        _0x42e488 != null && _0x42e488.has(_0x410f15) && this.close();
      },
    );
  }
};
X = W(
  [
    U(0, _0x7fe0f2(_0x5adec2)),
    U(1, _0x7fe0f2(_0x3b3ba6)),
    U(2, _0x7fe0f2(Xn)),
    U(3, _0x5bbcc2),
    U(4, _0x2b32e1),
  ],
  X,
);
const Zn = "min(1200px, calc(100vw - 32px))";
let Qn = class extends _0x5854cf {
  constructor(
    _0x55bab9,
    _0x33329d,
    _0x482d52,
    _0x4f5386,
    _0xeba8ef,
    _0xad3a6f,
    _0x58e2f9,
    _0x3e54f2,
  ) {
    (super(),
      (this._sidebarService = _0x55bab9),
      (this._dialogService = _0x33329d),
      (this._slideDrawingService = _0x482d52),
      (this._dataEditService = _0x4f5386),
      (this._editSessionService = _0xeba8ef),
      (this._chartUIService = _0xad3a6f),
      (this._localeService = _0x58e2f9),
      (this._commandService = _0x3e54f2),
      H(this, "_sidebarDisposable", null),
      this._registerPanelOperations(),
      this._listenFocusChanges());
  }
  openChartPanel(_0x2bf63b, _0x16f5f8, _0x434b00, _0x50ada0) {
    let _0x386ede = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x2bf63b,
      subUnitId: _0x16f5f8,
      drawingId: _0x434b00,
    });
    if (!_0x386ede || _0x386ede.element["type"] !== _0xc36da6.Chart)
      return false;
    let _0x484394 = _0x386ede.element["chartId"];
    return this._editSessionService["open"]({
      unitId: _0x2bf63b,
      subUnitId: _0x16f5f8,
      drawingId: _0x434b00,
      chartId: _0x484394,
    })
      ? (this._chartUIService["setActiveEditChart"](_0x484394),
        _0x50ada0
          ? this._chartUIService["setPanelRoute"](_0x484394, _0x50ada0)
          : this._chartUIService["clearPanelRoute"](),
        this._openPanel({
          unitId: _0x2bf63b,
          subUnitId: _0x16f5f8,
          drawingId: _0x434b00,
          chartId: _0x484394,
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
      this._sidebarService["close"](K));
  }
  openDataEditorDialog(_0x3663d3, _0x4d1ccc) {
    let _0x4ef481 = this._dataEditService["getEditorState"](
      _0x3663d3,
      _0x4d1ccc,
    );
    if (!_0x4ef481) return false;
    let _0x34c2aa = null,
      _0x429c8d = () => {
        (_0x34c2aa == null || _0x34c2aa.dispose(), (_0x34c2aa = null));
      };
    return (
      (_0x34c2aa = this._dialogService["open"]({
        id: Tn,
        title: {
          title: this._localeService["t"]("slides-chart-ui.common.editData"),
        },
        width: Zn,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: wn,
            props: {
              values: _0x4ef481.values,
              dataSource: _0x4ef481.dataSource,
              sharingCount: _0x4ef481.sharingCount,
              onCancel: _0x429c8d,
              onSubmit: (_0x3781bf, _0x13a133) => {
                this._dataEditService["updateData"](
                  _0x3663d3,
                  _0x4d1ccc,
                  _0x3781bf,
                  _0x13a133,
                ) && _0x429c8d();
              },
              onDataSourceSubmit: (_0x57e203) => {
                this._dataEditService["changeDataSource"](
                  _0x3663d3,
                  _0x4d1ccc,
                  _0x57e203,
                ) && _0x429c8d();
              },
            },
          },
        },
        onClose: _0x429c8d,
      })),
      true
    );
  }
  openChartInsertDialogForPlaceholder(_0x43bf11) {
    if (_0x43bf11.iconKey !== "chart") return false;
    let _0x4cc0a1 = this._slideDrawingService["getDrawingByParam"]({
      unitId: _0x43bf11.unitId,
      subUnitId: _0x43bf11.subUnitId,
      drawingId: _0x43bf11.drawingId,
    });
    if (!_0x4cc0a1 || _0x4cc0a1.element["type"] !== _0xc36da6.Placeholder)
      return false;
    let _0x29e875 = null,
      _0x3b9319 = () => {
        (_0x29e875 == null || _0x29e875.dispose(), (_0x29e875 = null));
      };
    return (
      (_0x29e875 = this._dialogService["open"]({
        id: "slide-chart.dialog.insert-placeholder",
        title: {
          title: this._localeService["t"]("slides-chart-ui.common.editChart"),
        },
        width: Zn,
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: Vn,
            props: {
              insertOptions: { placeholderDrawing: _0x4cc0a1 },
              onCancel: _0x3b9319,
              onInserted: _0x3b9319,
            },
          },
        },
        onClose: _0x3b9319,
      })),
      true
    );
  }
  _registerPanelOperations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x162319) => {
        if (_0x162319.id === B.id) {
          let _0x3b6351 = _0x162319.params;
          _0x3b6351 &&
            this.openChartPanel(
              _0x3b6351.unitId,
              _0x3b6351.subUnitId,
              _0x3b6351.drawingId,
              _0x3b6351.route,
            );
          return;
        }
        if (_0x162319.id === xn.id) {
          this.closeChartPanel();
          return;
        }
        if (_0x162319.id === Sn.id) {
          let _0x40fe67 = _0x162319.params;
          _0x40fe67 &&
            this.openDataEditorDialog(_0x40fe67.unitId, _0x40fe67.chartId);
          return;
        }
        if (_0x162319.id === _0x50d702.id) {
          let _0x12e24a = _0x162319.params;
          _0x12e24a && this.openChartInsertDialogForPlaceholder(_0x12e24a);
        }
      }),
    );
  }
  _listenFocusChanges() {
    this.disposeWithMe(
      this._slideDrawingService["focus$"].subscribe((_0x48fd0d) => {
        _0x48fd0d.length === 0 && this.closeChartPanel();
      }),
    );
  }
  _openPanel(_0x5e28fc) {
    var _0x3ae174;
    ((_0x3ae174 = this._sidebarDisposable) == null || _0x3ae174.dispose(),
      (this._sidebarDisposable = this._sidebarService["open"]({
        id: K,
        header: {
          title: this._localeService["t"]("slides-chart-ui.common.editChart"),
        },
        width: 388,
        children: { label: K, ..._0x5e28fc },
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
Qn = W(
  [
    U(0, _0x7fe0f2(_0x9e41a1)),
    U(1, _0x7fe0f2(_0xbde23a)),
    U(2, _0x7fe0f2(_0x5adec2)),
    U(3, _0x7fe0f2(Y)),
    U(4, _0x7fe0f2(X)),
    U(5, G),
    U(6, _0x7fe0f2(_0x218544)),
    U(7, _0x54e4fb),
  ],
  Qn,
);
var $n = "@univerjs-pro/slides-chart-ui",
  er = "1.0.0-insiders.20260907-70fc579";
let tr = class extends _0x5854cf {
  constructor(_0x2174d2) {
    (super(), (this._componentManager = _0x2174d2), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](Vn, Un)),
      this.disposeWithMe(this._componentManager["register"](wn, Dn)),
      this.disposeWithMe(this._componentManager["register"](K, Rn)));
  }
};
tr = W([U(0, _0x7fe0f2(_0x155795))], tr);
let nr = class extends _0x229ffe {
  constructor(_0x409ff1, _0x542aa2, _0x1a0d10, _0x3e1caa) {
    (super(),
      (this._renderContext = _0x409ff1),
      (this._hitTestService = _0x542aa2),
      (this._modelService = _0x1a0d10),
      (this._commandService = _0x3e1caa),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      _0x1015b0(
        this._hitTestService["onDoubleClick$"]
          .pipe(_0x2a8711(this.dispose$))
          .subscribe((_0x5f04bf) => {
            _0x5f04bf.drawing["unitId"] === this._renderContext["unitId"] &&
              _0x5f04bf.drawing["element"].type === _0xc36da6.Chart &&
              (this._modelService["activeRuntimeModel"] ||
                this._commandService["executeCommand"](B.id, {
                  unitId: _0x5f04bf.drawing["unitId"],
                  subUnitId: _0x5f04bf.drawing["subUnitId"],
                  drawingId: _0x5f04bf.drawing["drawingId"],
                }));
          }),
      ),
    );
  }
};
nr = W(
  [U(1, _0x7fe0f2(_0x58ea88)), U(2, _0x7fe0f2(_0x3b3ba6)), U(3, _0x54e4fb)],
  nr,
);
function rr(_0x3448bd) {
  return !!(
    _0x3448bd != null &&
    _0x3448bd.color &&
    _0x3448bd.width &&
    _0x3448bd.width > 0 &&
    _0x3448bd.lineStrokeType !== _0x241c06.NoLine
  );
}
function ir(_0x1b14fe, _0x1827f3) {
  if ((_0x1b14fe == null ? undefined : _0x1b14fe.borderWidth) !== 0)
    return {
      ..._0x257f7e,
      ..._0x1827f3,
      ...((_0x1b14fe == null ? undefined : _0x1b14fe.borderColor) == null
        ? {}
        : { color: _0x1b14fe.borderColor }),
      ...(typeof (_0x1b14fe == null ? undefined : _0x1b14fe.borderWidth) ==
        "number" &&
      Number.isFinite(_0x1b14fe.borderWidth) &&
      _0x1b14fe.borderWidth > 0
        ? { width: _0x1b14fe.borderWidth }
        : {}),
    };
}
var ar = class extends _0x5854cf {
  constructor(
    _0x1e568f,
    _0x2b7628,
    _0x4a25c8,
    _0x6b6379,
    _0x11fb6a,
    _0x49f422,
  ) {
    (super(),
      (this.chartId = _0x1e568f),
      (this._host = _0x2b7628),
      (this._applyHostStyle = _0x4a25c8),
      (this._getRenderRect = _0x6b6379),
      (this._markReady = _0x11fb6a),
      (this._markNotReady = _0x49f422),
      H(this, "mode", _0x4e1771.Dom),
      H(this, "_mountNode", null),
      H(this, "_ready", false),
      (this._host["style"].overflow = "hidden"),
      (this._host["style"].boxSizing = "border-box"));
  }
  getRect() {
    var _0x8eea54;
    let _0x204c1b =
      (_0x8eea54 = this._getRenderRect) == null
        ? undefined
        : _0x8eea54.call(this);
    if (_0x204c1b)
      return {
        width: Math.max(_0x4998bb, _0x204c1b.width),
        height: Math.max(_0x4998bb, _0x204c1b.height),
      };
    let _0x548485 = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(_0x4998bb, _0x548485.width),
      height: Math.max(_0x4998bb, _0x548485.height),
    };
  }
  setStyle(_0x43ce6b) {
    this._applyHostStyle(this._host, _0x43ce6b);
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
    var _0x454198;
    return !!(
      (_0x454198 = this._mountNode) != null &&
      _0x454198.isConnected &&
      this._host["contains"](this._mountNode)
    );
  }
  syncLayout() {
    let _0x4c9b5d = this.getRect();
    if (!_0x4c9b5d) return;
    let _0x425164 = _0x4c9b5d.width + "px",
      _0x456a35 = _0x4c9b5d.height + "px";
    ((this._host["style"].width = _0x425164),
      (this._host["style"].height = _0x456a35),
      this._mountNode &&
        ((this._mountNode["style"].width = _0x425164),
        (this._mountNode["style"].height = _0x456a35)));
  }
  markReady() {
    var _0x3265fe;
    this._ready ||
      ((this._ready = true),
      (_0x3265fe = this._markReady) == null || _0x3265fe.call(this));
  }
  markNotReady() {
    var _0x34975d;
    this._ready &&
      ((this._ready = false),
      (_0x34975d = this._markNotReady) == null || _0x34975d.call(this));
  }
  dispose() {
    var _0x37198a;
    (this.markNotReady(),
      (_0x37198a = this._mountNode) == null || _0x37198a.remove(),
      (this._mountNode = null),
      this._host["remove"](),
      super.dispose());
  }
};
let Z = class extends _0x5854cf {
  constructor(_0x6dc2cd, _0x32f5dd, _0x551ba) {
    (super(),
      (this._localeService = _0x6dc2cd),
      (this._chartThemeService = _0x32f5dd),
      (this._renderModelManager = _0x551ba),
      H(this, "_chartInstanceMap", new Map()),
      H(this, "_chartEventHandlers", new Map()),
      H(this, "_chartEventSubscriptions", new Map()),
      H(this, "_chartElementEditMode", new Map()),
      H(this, "_lastImageDataUrlMap", new Map()),
      H(this, "_lastRenderInputMap", new Map()));
  }
  createChartInstance(_0x47a2bb) {
    return _0x47a2bb
      ? this._renderModelManager["createChartInstance"](
          _0x47a2bb,
          this._createChartRenderInstanceContext(),
        )
      : this._renderModelManager["createChartInstance"]();
  }
  async render(_0x4a6405, _0x1ebcf2) {
    let { chartConfig: _0x5abe6a, chartStyle: _0x2e98e1 } =
        this.createRenderInput(_0x4a6405),
      _0x2cbbab = _0x1ebcf2.getRect(),
      _0x5cb68f = this._getOrCreateChartRenderInstance(
        _0x4a6405.chartId,
        _0x1ebcf2.mode,
      );
    (_0x5cb68f.bind(_0x1ebcf2),
      await _0x5cb68f.render({
        chartId: _0x4a6405.chartId,
        config: _0x5abe6a,
        style: _0x2e98e1,
      }),
      _0x2cbbab &&
        this._lastRenderInputMap["set"](_0x4a6405.chartId, {
          chartConfig: _0x5abe6a,
          chartStyle: _0x2e98e1,
          rect: _0x2cbbab,
        }));
    let _0xded303 =
      _0x1ebcf2.mode === _0x4e1771.Image && "getDataUrl" in _0x1ebcf2
        ? _0x1ebcf2.getDataUrl()
        : undefined;
    _0xded303 && this._lastImageDataUrlMap["set"](_0x4a6405.chartId, _0xded303);
  }
  async renderDataUpdate(_0x2d4db9, _0x3d0846, _0x1d48a7) {
    let _0x1bbb87 = this._lastRenderInputMap["get"](_0x2d4db9.chartId),
      { chartConfig: _0x5d0ab3, chartStyle: _0x50dd4f } =
        this.createRenderInput(_0x2d4db9),
      _0x5d5fe1 = _0x3d0846.getRect(),
      _0x3f31b7 = this._getOrCreateChartRenderInstance(
        _0x2d4db9.chartId,
        _0x3d0846.mode,
      );
    _0x3f31b7.bind(_0x3d0846);
    let _0x2a9aa0 = {
      chartId: _0x2d4db9.chartId,
      config: _0x5d0ab3,
      style: _0x50dd4f,
    };
    (_0x1bbb87 && _0x3f31b7.renderTransition
      ? await _0x3f31b7.renderTransition(
          {
            chartId: _0x2d4db9.chartId,
            config: _0x1bbb87.chartConfig,
            style: _0x1bbb87.chartStyle,
          },
          _0x2a9aa0,
          { duration: _0x1d48a7 },
        )
      : await _0x3f31b7.render(_0x2a9aa0),
      _0x5d5fe1 &&
        this._lastRenderInputMap["set"](_0x2d4db9.chartId, {
          chartConfig: _0x5d0ab3,
          chartStyle: _0x50dd4f,
          rect: _0x5d5fe1,
        }));
  }
  setElementEditMode(_0x2acc14, _0x5c1b30) {
    var _0x55e14e;
    (_0x5c1b30
      ? this._chartElementEditMode["set"](_0x2acc14, true)
      : this._chartElementEditMode["delete"](_0x2acc14),
      (_0x55e14e = this._chartInstanceMap["get"](_0x2acc14)) == null ||
        _0x55e14e.setElementEditMode(_0x5c1b30));
  }
  on(_0x4124ac, _0x5c9a5f, _0x43d97b) {
    let _0x4ea007 = this._chartEventHandlers["get"](_0x4124ac);
    _0x4ea007 ||
      ((_0x4ea007 = new Map()),
      this._chartEventHandlers["set"](_0x4124ac, _0x4ea007));
    let _0x161ec6 = _0x4ea007.get(_0x5c9a5f);
    (_0x161ec6 ||
      ((_0x161ec6 = new Set()), _0x4ea007.set(_0x5c9a5f, _0x161ec6)),
      _0x161ec6.add(_0x43d97b));
    let _0xd1bd2a = this._chartInstanceMap["get"](_0x4124ac);
    return (
      _0xd1bd2a &&
        this._bindChartEventHandler(_0x4124ac, _0xd1bd2a, _0x5c9a5f, _0x43d97b),
      {
        dispose: () => {
          var _0x55cbe9;
          ((_0x55cbe9 = this._chartEventHandlers["get"](_0x4124ac)) == null ||
            (_0x55cbe9 = _0x55cbe9.get(_0x5c9a5f)) == null ||
            _0x55cbe9.delete(_0x43d97b),
            this._disposeChartEventSubscription(
              _0x4124ac,
              _0x5c9a5f,
              _0x43d97b,
            ));
        },
      }
    );
  }
  disposeChartInstance(_0x3f48b4) {
    (this._lastRenderInputMap["delete"](_0x3f48b4),
      this._disposeChartRenderInstance(_0x3f48b4));
  }
  async exportImage(_0x30d578, _0x1673e5) {
    let _0x2cbe4a = this._lastRenderInputMap["get"](_0x30d578);
    if (_0x2cbe4a)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x30d578,
            config: _0x2cbe4a.chartConfig,
            style: _0x2cbe4a.chartStyle,
            width: _0x2cbe4a.rect["width"],
            height: _0x2cbe4a.rect["height"],
          },
          _0x1673e5,
        )
      ).dataUrl;
    if ((_0x1673e5 == null ? undefined : _0x1673e5.format) !== _0x21b6fb.SVG)
      return this._lastImageDataUrlMap["get"](_0x30d578);
  }
  createRenderInput(_0x1bc10f) {
    let _0x4e34ac = _0x1bc10f.model["config"];
    if (!_0x4e34ac)
      throw Error("Chart " + _0x1bc10f.chartId + " has no render config.");
    let _0x40ad1e = this._localeService["getDirection"]();
    return {
      chartConfig: _0x4e34ac,
      chartStyle: _0x32fa51(
        {
          ..._0x1bc10f.model["style"],
          runtime: _0x1bc10f.model["getRuntimeContext"](_0x40ad1e),
          direction: _0x40ad1e,
        },
        _0x4e34ac.type,
      ),
    };
  }
  createRenderSpec(_0x2c60ef, _0x25727e, _0x365b5d) {
    let { chartConfig: _0x3ee730, chartStyle: _0x37c3bb } =
        this.createRenderInput(_0x2c60ef),
      _0x5c08cd = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: _0x5c08cd.stylizeSpec(
        _0x5c08cd.toSpec(_0x3ee730, _0x37c3bb),
        {
          chartConfig: _0x3ee730,
          chartStyle: _0x37c3bb,
          chartInstance: _0x365b5d,
        },
        _0x25727e,
      ),
      chartConfig: _0x3ee730,
      chartStyle: _0x37c3bb,
      hostStyle: this.getHostStyle(_0x37c3bb),
    };
  }
  getHostStyle(_0x9316c9) {
    return _0x37eb36({
      style: _0x9316c9,
      getRenderColor: (_0x1d5475) =>
        this._chartThemeService["getRenderColor"](_0x1d5475),
    });
  }
  applyHostStyle(_0x282240, _0x3c5ef4) {
    var _0x289d2c;
    ((_0x282240.style["border"] =
      (_0x289d2c = _0x3c5ef4.border) != null &&
      _0x289d2c.color &&
      _0x3c5ef4.border["width"]
        ? _0x3c5ef4.border["width"] + "px solid " + _0x3c5ef4.border["color"]
        : ""),
      (_0x282240.style["backgroundColor"] = _0x3c5ef4.fill ?? "transparent"),
      (_0x282240.style["borderRadius"] = _0x3c5ef4.radius
        ? _0x3c5ef4.radius + "px"
        : ""),
      (_0x282240.style["overflow"] = "hidden"),
      (_0x282240.style["boxSizing"] = "border-box"));
  }
  _getOrCreateChartRenderInstance(_0x750f74, _0x5c9b61) {
    let _0x136ed3 = this._chartInstanceMap["get"](_0x750f74);
    if ((_0x136ed3 == null ? undefined : _0x136ed3.mode) === _0x5c9b61)
      return _0x136ed3;
    _0x136ed3 && this._disposeChartRenderInstance(_0x750f74);
    let _0x313aac = this._renderModelManager["createChartInstance"](
      _0x5c9b61,
      this._createChartRenderInstanceContext(),
    );
    return (
      this._chartInstanceMap["set"](_0x750f74, _0x313aac),
      _0x313aac.setElementEditMode(
        this._chartElementEditMode["get"](_0x750f74) === true,
      ),
      this._bindChartEventHandlers(_0x750f74, _0x313aac),
      _0x313aac
    );
  }
  _disposeChartRenderInstance(_0x213bc3) {
    let _0x3ab02a = this._chartInstanceMap["get"](_0x213bc3);
    _0x3ab02a &&
      (this._disposeChartEventSubscriptions(_0x213bc3),
      _0x3ab02a.dispose(),
      this._chartInstanceMap["delete"](_0x213bc3));
  }
  _bindChartEventHandlers(_0x2726f0, _0x453b8d) {
    let _0x8c9f5a = this._chartEventHandlers["get"](_0x2726f0);
    _0x8c9f5a &&
      _0x8c9f5a.forEach((_0x5bdb90, _0x487f3f) => {
        _0x5bdb90.forEach((_0x45870a) =>
          this._bindChartEventHandler(
            _0x2726f0,
            _0x453b8d,
            _0x487f3f,
            _0x45870a,
          ),
        );
      });
  }
  _bindChartEventHandler(_0x2d830, _0x5f5089, _0x50e0d5, _0xef877e) {
    let _0x5bddf1 = this._chartEventSubscriptions["get"](_0x2d830);
    _0x5bddf1 ||
      ((_0x5bddf1 = new Map()),
      this._chartEventSubscriptions["set"](_0x2d830, _0x5bddf1));
    let _0x55e5aa = _0x5bddf1.get(_0x50e0d5);
    (_0x55e5aa ||
      ((_0x55e5aa = new Map()), _0x5bddf1.set(_0x50e0d5, _0x55e5aa)),
      !_0x55e5aa.has(_0xef877e) &&
        _0x55e5aa.set(_0xef877e, _0x5f5089.on(_0x50e0d5, _0xef877e)));
  }
  _disposeChartEventSubscription(_0x4adb45, _0x1831cb, _0x57b91f) {
    var _0x3b6bce, _0x5e44bb;
    let _0x5d7f7e =
      (_0x3b6bce = this._chartEventSubscriptions["get"](_0x4adb45)) == null
        ? undefined
        : _0x3b6bce.get(_0x1831cb);
    (_0x5d7f7e == null ||
      (_0x5e44bb = _0x5d7f7e.get(_0x57b91f)) == null ||
      _0x5e44bb.dispose(),
      _0x5d7f7e == null || _0x5d7f7e.delete(_0x57b91f));
  }
  _disposeChartEventSubscriptions(_0xe07115) {
    let _0x735be9 = this._chartEventSubscriptions["get"](_0xe07115);
    (_0x735be9 == null ||
      _0x735be9.forEach((_0x59ee03) => {
        (_0x59ee03.forEach((_0x1f1316) => _0x1f1316.dispose()),
          _0x59ee03.clear());
      }),
      this._chartEventSubscriptions["delete"](_0xe07115));
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x258fcf }) => this.getHostStyle(_0x258fcf),
      resolveRenderBackgroundColor: ({ hostStyle: _0x7b05a1 }) =>
        _0x7b05a1.fill,
      prepareSpec: ({ mode: _0x3f98f8, spec: _0x297e80 }) =>
        _0x3f98f8 === _0x4e1771.Image
          ? { ..._0x297e80, animation: false, tooltip: { show: false } }
          : _0x297e80,
    };
  }
  dispose() {
    (Array.from(this._chartInstanceMap["keys"]()).forEach((_0x227e28) =>
      this.disposeChartInstance(_0x227e28),
    ),
      this._chartEventHandlers["clear"](),
      this._chartElementEditMode["clear"](),
      this._lastImageDataUrlMap["clear"](),
      this._lastRenderInputMap["clear"](),
      super.dispose());
  }
};
Z = W(
  [U(0, _0x7fe0f2(_0x218544)), U(1, _0x7fe0f2(_0x544624)), U(2, _0x55cdbb)],
  Z,
);
const or = _0x3a72df;
let Q = class extends _0x5854cf {
  constructor(_0x2c03ad, _0x5dc2ec, _0x39630a, _0x5dc586, _0x55ffb7) {
    (super(),
      (this._renderManagerService = _0x2c03ad),
      (this._localeService = _0x5dc2ec),
      (this._modelService = _0x39630a),
      (this._renderService = _0x5dc586),
      (this._renderModeService = _0x55ffb7),
      H(this, "_hostContextMap", new Map()),
      H(this, "_hostContextRegistrationMap", new Map()),
      H(this, "_domHostMap", new Map()),
      H(this, "_hostLayoutSubscriptions", new Map()),
      H(this, "_runtimeRenderSubscriptions", new Map()),
      H(this, "_renderQueueMap", new Map()),
      H(this, "_renderRequestTokenMap", new Map()),
      H(this, "_domReadyChartIds", new Set()),
      H(this, "_lastImageDataUrlMap", new Map()),
      H(this, "_pendingDataUpdateChartIds", new Set()),
      H(this, "_dataUpdateEpochMap", new Map()),
      H(this, "_dataUpdateAnimationChartIds", new Set()),
      H(this, "_dataUpdateAnimationTimers", new Map()),
      H(this, "_removeHost$", new _0x7a0b57()),
      H(this, "_imageUpdated$", new _0x7a0b57()),
      H(this, "_domReadyChanged$", new _0x7a0b57()),
      H(this, "_layoutChanged$", new _0x7a0b57()),
      H(this, "removeHost$", this._removeHost$["asObservable"]()),
      H(this, "imageUpdated$", this._imageUpdated$["asObservable"]()),
      H(this, "domReadyChanged$", this._domReadyChanged$["asObservable"]()),
      H(this, "layoutChanged$", this._layoutChanged$["asObservable"]()),
      this.disposeWithMe(
        _0x1015b0(
          this._renderModeService["modeChanged$"].subscribe(
            ({ chartId: _0x266ade }) => {
              this.renderChart(_0x266ade);
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x1015b0(
          this._modelService["chartDataUpdated$"].subscribe((_0xbf5bc9) => {
            this._runtimeRenderSubscriptions["has"](_0xbf5bc9) &&
              (this._dataUpdateEpochMap["set"](
                _0xbf5bc9,
                (this._dataUpdateEpochMap["get"](_0xbf5bc9) ?? 0) + 1,
              ),
              this._pendingDataUpdateChartIds["add"](_0xbf5bc9));
          }),
        ),
      ));
  }
  registerHostContext(_0x5f34fc) {
    let _0x16aa88 = Symbol(_0x5f34fc.chartId),
      _0x4d826e = this._getHostRegistrationKey(_0x5f34fc),
      _0x2a4550 = this._hostContextRegistrationMap["get"](_0x5f34fc.chartId);
    return (
      _0x2a4550 ||
        ((_0x2a4550 = new Map()),
        this._hostContextRegistrationMap["set"](_0x5f34fc.chartId, _0x2a4550)),
      _0x2a4550.set(_0x4d826e, { context: _0x5f34fc, token: _0x16aa88 }),
      this._hostContextMap["set"](
        _0x5f34fc.chartId,
        this._selectHostContext(_0x2a4550),
      ),
      this.syncHostLayout(_0x5f34fc.chartId),
      this.renderChart(_0x5f34fc.chartId),
      {
        dispose: () => {
          let _0x54c996 = this._hostContextRegistrationMap["get"](
            _0x5f34fc.chartId,
          );
          if (!_0x54c996) return;
          let _0x604b08 = _0x54c996.get(_0x4d826e);
          if ((_0x604b08 == null ? undefined : _0x604b08.token) === _0x16aa88) {
            if (
              _0x5f34fc.sceneType === _0x280280.THUMBNAIL &&
              _0x5f34fc.requestRender &&
              !this._lastImageDataUrlMap["has"](_0x5f34fc.chartId)
            ) {
              (_0x54c996.set(_0x4d826e, {
                context: { ..._0x604b08.context, imageObject: undefined },
                token: _0x16aa88,
                detached: true,
              }),
                this._hostContextMap["set"](
                  _0x5f34fc.chartId,
                  this._selectHostContext(_0x54c996),
                ));
              return;
            }
            if (
              (_0x54c996.delete(_0x4d826e),
              !(_0x54c996 != null && _0x54c996.size))
            ) {
              (this._hostContextMap["delete"](_0x5f34fc.chartId),
                this._hostContextRegistrationMap["delete"](_0x5f34fc.chartId),
                this.removeHost(_0x5f34fc.chartId));
              return;
            }
            (this._hostContextMap["set"](
              _0x5f34fc.chartId,
              this._selectHostContext(_0x54c996),
            ),
              this.syncHostLayout(_0x5f34fc.chartId));
          }
        },
      }
    );
  }
  getHostContext(_0x2cadb3) {
    return this._hostContextMap["get"](_0x2cadb3);
  }
  ensureHost(_0x3fbfbc, _0x4eeded) {
    return _0x4eeded === _0x4e1771.Image
      ? this._createImageChartHost(_0x3fbfbc)
      : this._getOrCreateDomChartHost(_0x3fbfbc);
  }
  getImageDataUrl(_0x5a56a9) {
    return this._lastImageDataUrlMap["get"](_0x5a56a9);
  }
  commitImageHost(_0x32d52a, _0x1bca8c) {
    if (!(_0x1bca8c instanceof _0x489da7)) return;
    let _0x3e5a82 = _0x1bca8c.getDataUrl();
    _0x3e5a82 && this._commitImageDataUrl(_0x32d52a, _0x3e5a82);
  }
  async renderChart(_0x241b54) {
    this._renderRequestTokenMap["set"](_0x241b54, Symbol(_0x241b54));
    let _0xe544e9 = this._renderQueueMap["get"](_0x241b54);
    if (_0xe544e9) return ((_0xe544e9.requested = true), _0xe544e9.promise);
    let _0x17dc3f = { requested: true, promise: Promise.resolve() };
    return (
      (_0x17dc3f.promise = this._drainRenderQueue(_0x241b54, _0x17dc3f).finally(
        () => {
          this._renderQueueMap["get"](_0x241b54) === _0x17dc3f &&
            this._renderQueueMap["delete"](_0x241b54);
        },
      )),
      this._renderQueueMap["set"](_0x241b54, _0x17dc3f),
      _0x17dc3f.promise
    );
  }
  async _drainRenderQueue(_0xc3ad07, _0xea62ae) {
    for (; _0xea62ae.requested;) {
      _0xea62ae.requested = false;
      let _0x35475d = this._renderRequestTokenMap["get"](_0xc3ad07);
      if (!_0x35475d) return;
      await this._renderChartOnce(_0xc3ad07, _0x35475d);
    }
  }
  async _renderChartOnce(_0x5f178e, _0x350587) {
    let _0xd798f2 = this._hostContextMap["get"](_0x5f178e);
    if (!_0xd798f2) return;
    let _0x4bbeb1 = this._modelService["ensureChartModel"](
      _0xd798f2.unitId,
      _0x5f178e,
    );
    if (!_0x4bbeb1) return;
    this._bindRuntimeRenderListener(_0x4bbeb1);
    let _0x45c229 = _0x4bbeb1.model["config"];
    if (
      !_0x45c229 ||
      _0x45c229.type !== _0x4bbeb1.model["chartType"] ||
      this._renderRequestTokenMap["get"](_0x5f178e) !== _0x350587
    )
      return;
    this._forEachHostContext(_0x5f178e, (_0x2d4125) => {
      var _0x2dc354, _0x544864;
      (_0x2dc354 = _0x2d4125.imageObject) == null ||
        (_0x544864 = _0x2dc354.setChartStroke) == null ||
        _0x544864.call(
          _0x2dc354,
          ir(_0x4bbeb1.model["style"], _0x2d4125.stroke),
        );
    });
    let _0x560807 = this._pendingDataUpdateChartIds["has"](_0x5f178e),
      _0x11dc17 = this._dataUpdateEpochMap["get"](_0x5f178e) ?? 0;
    if (this._dataUpdateAnimationChartIds["has"](_0x5f178e) && !_0x560807)
      return;
    let _0x68f1e8 = this._renderModeService["getRenderMode"](_0x5f178e),
      _0x40afb4 =
        _0x560807 &&
        _0x68f1e8 === _0x4e1771.Image &&
        this._canAnimateDataUpdate(_0x5f178e);
    _0x40afb4 && this._activateDataUpdateAnimation(_0x5f178e);
    let _0x118558 = this._dataUpdateAnimationChartIds["has"](_0x5f178e)
        ? _0x4e1771.Dom
        : _0x68f1e8,
      _0x104777 = false;
    _0x104777 =
      _0x118558 === _0x4e1771.Image
        ? await this._renderImageChart(_0x4bbeb1, _0x350587)
        : await this._renderDomChart(_0x4bbeb1, _0x350587, {
            animateDataUpdate: _0x560807,
            interactive: _0x68f1e8 === _0x4e1771.Dom,
          });
    let _0x2f287d = this._renderRequestTokenMap["get"](_0x5f178e) === _0x350587,
      _0x1fe3b1 =
        (this._dataUpdateEpochMap["get"](_0x5f178e) ?? 0) === _0x11dc17;
    if (!_0x104777) {
      _0x40afb4 &&
        _0x2f287d &&
        _0x1fe3b1 &&
        this._deactivateDataUpdateAnimation(_0x5f178e);
      return;
    }
    !_0x2f287d ||
      !_0x1fe3b1 ||
      (this._pendingDataUpdateChartIds["delete"](_0x5f178e),
      _0x560807 &&
        this._dataUpdateAnimationChartIds["has"](_0x5f178e) &&
        this._scheduleDataUpdateAnimationEnd(_0x5f178e));
  }
  async _renderImageChart(_0x957e8b, _0x2ad172) {
    let { chartId: _0x4a176a } = _0x957e8b;
    (this._renderService["setElementEditMode"](_0x4a176a, false),
      this._removeDomHost(_0x4a176a));
    let _0x363e16 = this.ensureHost(_0x4a176a, _0x4e1771.Image);
    if (!_0x363e16) return false;
    try {
      return (
        await this._renderService["render"](_0x957e8b, _0x363e16),
        this._renderRequestTokenMap["get"](_0x4a176a) === _0x2ad172 &&
          this.commitImageHost(_0x4a176a, _0x363e16),
        true
      );
    } catch {
      return false;
    }
  }
  async _renderDomChart(_0x585aeb, _0x15c57a, _0x3522ae) {
    let { chartId: _0x131e3a } = _0x585aeb;
    this._renderService["setElementEditMode"](_0x131e3a, _0x3522ae.interactive);
    let _0x13bb14 = this.ensureHost(_0x131e3a, _0x4e1771.Dom);
    if (!_0x13bb14) return false;
    try {
      if (
        (_0x3522ae.animateDataUpdate
          ? await this._renderService["renderDataUpdate"](
              _0x585aeb,
              _0x13bb14,
              or,
            )
          : await this._renderService["render"](_0x585aeb, _0x13bb14),
        this._renderRequestTokenMap["get"](_0x131e3a) !== _0x15c57a)
      )
        return true;
      _0x13bb14.markReady();
      try {
        let _0x475c1a = await this._renderService["exportImage"](_0x131e3a);
        _0x475c1a &&
          this._renderRequestTokenMap["get"](_0x131e3a) === _0x15c57a &&
          this._commitImageDataUrl(_0x131e3a, _0x475c1a);
      } catch {}
      return true;
    } catch {
      return (
        this._renderRequestTokenMap["get"](_0x131e3a) === _0x15c57a &&
          _0x13bb14.markNotReady(),
        false
      );
    }
  }
  removeHost(_0x45a008) {
    (this._renderRequestTokenMap["delete"](_0x45a008),
      this._deactivateDataUpdateAnimation(_0x45a008),
      this._pendingDataUpdateChartIds["delete"](_0x45a008),
      this._dataUpdateEpochMap["delete"](_0x45a008),
      this._removeDomHost(_0x45a008),
      this._disposeRuntimeRenderListener(_0x45a008),
      this._renderService["disposeChartInstance"](_0x45a008));
  }
  _removeDomHost(_0x54a626) {
    let _0x2186a1 = this._domHostMap["get"](_0x54a626);
    _0x2186a1 &&
      (_0x2186a1.dispose(),
      this._domHostMap["delete"](_0x54a626),
      this._disposeHostLayoutListeners(_0x54a626),
      this._removeHost$["next"](_0x54a626));
  }
  syncHostLayout(_0x24c0f0) {
    let _0x11a023 = this._domHostMap["get"](_0x24c0f0);
    _0x11a023 &&
      (this._applyDomHostLayout(_0x24c0f0, _0x11a023),
      _0x11a023.syncLayout(),
      this._layoutChanged$["next"](_0x24c0f0));
  }
  checkHost(_0x4d5fef) {
    var _0x35d01a;
    return (
      ((_0x35d01a = this._domHostMap["get"](_0x4d5fef)) == null
        ? undefined
        : _0x35d01a.checkMounted()) ?? false
    );
  }
  isDomReady(_0x40c1aa) {
    return this._domReadyChartIds["has"](_0x40c1aa);
  }
  markHostReady(_0x4ee730) {
    this._domReadyChartIds["has"](_0x4ee730) ||
      (this._domReadyChartIds["add"](_0x4ee730),
      this._domReadyChanged$["next"](_0x4ee730),
      this._requestChartCanvasRender(_0x4ee730));
  }
  markHostNotReady(_0x2a5015) {
    this._domReadyChartIds["delete"](_0x2a5015) &&
      (this._domReadyChanged$["next"](_0x2a5015),
      this._requestChartCanvasRender(_0x2a5015));
  }
  getClientRect(_0x11e14d, _0x1d7edf) {
    let _0x271077 = this._hostContextMap["get"](_0x11e14d);
    if (!_0x271077) return null;
    let _0x512ad1 = this._getChartRenderObject(_0x271077),
      _0x14a274 =
        (_0x512ad1 == null ? undefined : _0x512ad1.left) ??
        _0x271077.drawing["element"].transform["left"] ??
        0,
      _0x199b86 =
        (_0x512ad1 == null ? undefined : _0x512ad1.top) ??
        _0x271077.drawing["element"].transform["top"] ??
        0,
      _0x2246f6 = _0x1d7edf
        ? {
            left: _0x14a274 + _0x1d7edf.left,
            top: _0x199b86 + _0x1d7edf.top,
            right: _0x14a274 + _0x1d7edf.right,
            bottom: _0x199b86 + _0x1d7edf.bottom,
          }
        : {
            left: _0x14a274,
            top: _0x199b86,
            right:
              _0x14a274 +
              ((_0x512ad1 == null ? undefined : _0x512ad1.width) ??
                _0x271077.width),
            bottom:
              _0x199b86 +
              ((_0x512ad1 == null ? undefined : _0x512ad1.height) ??
                _0x271077.height),
          };
    return this._transformCanvasBoundToClientBound(_0x271077.unitId, _0x2246f6);
  }
  _createImageChartHost(_0x4f2459) {
    let _0x3a966d = this._hostContextMap["get"](_0x4f2459);
    return _0x3a966d
      ? new _0x489da7(_0x4f2459, {
          width: _0x3a966d.width,
          height: _0x3a966d.height,
        })
      : null;
  }
  _getOrCreateDomChartHost(_0x235b67) {
    let _0x93a07c = this._hostContextMap["get"](_0x235b67);
    if (!_0x93a07c || typeof document > "u") return null;
    let _0x410203 = this._domHostMap["get"](_0x235b67);
    if (_0x410203)
      return (
        this._applyDomHostInteractionState(
          _0x235b67,
          _0x410203.getHostElement(),
        ),
        this._applyDomHostLayout(_0x235b67, _0x410203),
        _0x410203
      );
    let _0x270d68 = document.createElement("div");
    ((_0x270d68.dataset["uComp"] = "slide-chart-dom-host"),
      (_0x270d68.dataset["chartId"] = _0x235b67),
      (_0x270d68.style["zIndex"] = String(_0x2032c6)),
      (_0x270d68.style["overflow"] = "hidden"),
      (_0x270d68.style["boxSizing"] = "border-box"),
      (_0x270d68.style["transformOrigin"] = "center center"));
    let _0x3e8796 = this._getSlideDomWorldLayer(_0x93a07c.unitId);
    ((_0x270d68.style["position"] = _0x3e8796 ? "absolute" : "fixed"),
      (_0x3e8796 ?? document.body).append(_0x270d68));
    let _0x5cf886 = new ar(
      _0x235b67,
      _0x270d68,
      (_0x263be4, _0x5549af) => {
        var _0x244525;
        let _0x544a75 = this._hostContextMap["get"](_0x235b67),
          _0x5b8b8d = _0x544a75
            ? (_0x244525 = this._modelService["getChartModel"](
                _0x544a75.unitId,
                _0x235b67,
              )) == null
              ? undefined
              : _0x244525.model["style"]
            : undefined,
          _0x3add5a = _0x544a75 ? ir(_0x5b8b8d, _0x544a75.stroke) : undefined;
        ((_0x263be4.style["border"] = rr(_0x3add5a)
          ? _0x3add5a.width + "px\x20solid\x20" + _0x3add5a.color
          : ""),
          (_0x263be4.style["backgroundColor"] = _0x5549af.fill ?? ""),
          (_0x263be4.style["borderRadius"] = _0x6c5340 + "px"));
      },
      () => {
        let _0x1f7041 = this._hostContextMap["get"](_0x235b67);
        return _0x1f7041
          ? { width: _0x1f7041.width, height: _0x1f7041.height }
          : null;
      },
      () => this.markHostReady(_0x235b67),
      () => this.markHostNotReady(_0x235b67),
    );
    return (
      this._domHostMap["set"](_0x235b67, _0x5cf886),
      this._applyDomHostInteractionState(_0x235b67, _0x270d68),
      this._bindHostLayoutListeners(_0x235b67),
      this._applyDomHostLayout(_0x235b67, _0x5cf886),
      _0x5cf886
    );
  }
  _bindHostLayoutListeners(_0x2e1ee5) {
    this._disposeHostLayoutListeners(_0x2e1ee5);
    let _0x13fac8 = this._hostContextMap["get"](_0x2e1ee5),
      _0x325a17 = _0x13fac8
        ? this._renderManagerService["getRenderUnitById"](_0x13fac8.unitId)
        : null;
    if (!_0x13fac8 || !_0x325a17) return;
    let _0x3188d5 = [],
      _0x116e6e = () => this.syncHostLayout(_0x2e1ee5),
      _0xf5c0ac = _0x325a17.scene["getViewport"](_0x180def);
    (_0xf5c0ac &&
      _0x3188d5.push(
        _0x1015b0(_0xf5c0ac.onScrollAfter$["subscribeEvent"](_0x116e6e)),
      ),
      _0x3188d5.push(
        _0x1015b0(
          _0x325a17.engine["onTransformChange$"].subscribeEvent(_0x116e6e),
        ),
      ),
      _0x3188d5.push(
        _0x1015b0(
          _0x325a17.scene["onTransformChange$"].subscribeEvent(_0x116e6e),
        ),
      ));
    let _0x128bdf = this._getChartRenderObject(_0x13fac8);
    (_0x128bdf != null &&
      _0x128bdf.onTransformChange$ &&
      _0x3188d5.push(
        _0x1015b0(_0x128bdf.onTransformChange$["subscribeEvent"](_0x116e6e)),
      ),
      this._hostLayoutSubscriptions["set"](_0x2e1ee5, _0x3188d5));
  }
  _disposeHostLayoutListeners(_0x2a6737) {
    var _0x254775;
    ((_0x254775 = this._hostLayoutSubscriptions["get"](_0x2a6737)) == null ||
      _0x254775.forEach((_0x4ca4fb) => _0x4ca4fb.dispose()),
      this._hostLayoutSubscriptions["delete"](_0x2a6737));
  }
  _bindRuntimeRenderListener(_0x109ed6) {
    if (this._runtimeRenderSubscriptions["has"](_0x109ed6.chartId)) return;
    let _0x199458 = _0xc5fa5([
      _0x109ed6.model["config$"],
      _0x109ed6.model["style$"],
      this._localeService["direction$"],
    ])
      .pipe(_0x2e2aef(1), _0x48a2e1(0))
      .subscribe(() => {
        queueMicrotask(() => {
          this.renderChart(_0x109ed6.chartId);
        });
      });
    this._runtimeRenderSubscriptions["set"](_0x109ed6.chartId, {
      dispose: () => {
        _0x199458.unsubscribe();
      },
    });
  }
  _disposeRuntimeRenderListener(_0x528c24) {
    var _0x4a14f7;
    ((_0x4a14f7 = this._runtimeRenderSubscriptions["get"](_0x528c24)) == null ||
      _0x4a14f7.dispose(),
      this._runtimeRenderSubscriptions["delete"](_0x528c24));
  }
  _canAnimateDataUpdate(_0x30d2a8) {
    var _0xd70497, _0x14862a, _0x4d4ecf, _0x565b29;
    let _0x556dfa = this._hostContextMap["get"](_0x30d2a8);
    if (
      !_0x556dfa ||
      (_0x556dfa.sceneType != null && _0x556dfa.sceneType !== _0x280280.EDIT) ||
      typeof document > "u" ||
      typeof window > "u" ||
      document.visibilityState === "hidden" ||
      ((_0xd70497 = (_0x14862a = window).matchMedia) != null &&
        (_0xd70497 = _0xd70497.call(
          _0x14862a,
          "(prefers-reduced-motion: reduce)",
        )) != null &&
        _0xd70497.matches) ||
      ((_0x4d4ecf = (_0x565b29 = window).matchMedia) != null &&
        (_0x4d4ecf = _0x4d4ecf.call(_0x565b29, "print")) != null &&
        _0x4d4ecf.matches)
    )
      return false;
    let _0x1049c8 = this.getClientRect(_0x30d2a8);
    return (
      _0x1049c8 != null &&
      _0x1049c8.right > 0 &&
      _0x1049c8.bottom > 0 &&
      _0x1049c8.left < window.innerWidth &&
      _0x1049c8.top < window.innerHeight
    );
  }
  _activateDataUpdateAnimation(_0x563473) {
    var _0x430b38;
    let _0x55d737 = this._dataUpdateAnimationTimers["get"](_0x563473);
    (_0x55d737 &&
      (clearTimeout(_0x55d737),
      this._dataUpdateAnimationTimers["delete"](_0x563473)),
      this._dataUpdateAnimationChartIds["add"](_0x563473));
    let _0x4057a4 =
      (_0x430b38 = this._domHostMap["get"](_0x563473)) == null
        ? undefined
        : _0x430b38.getHostElement();
    _0x4057a4 && this._applyDomHostInteractionState(_0x563473, _0x4057a4);
  }
  _scheduleDataUpdateAnimationEnd(_0x34f4c8) {
    let _0x4934df = this._dataUpdateAnimationTimers["get"](_0x34f4c8);
    _0x4934df && clearTimeout(_0x4934df);
    let _0x440c7f = setTimeout(() => {
      (this._dataUpdateAnimationTimers["delete"](_0x34f4c8),
        this._dataUpdateAnimationChartIds["delete"](_0x34f4c8) &&
          this.renderChart(_0x34f4c8));
    }, or);
    this._dataUpdateAnimationTimers["set"](_0x34f4c8, _0x440c7f);
  }
  _deactivateDataUpdateAnimation(_0x37f780) {
    let _0x3e27d5 = this._dataUpdateAnimationTimers["get"](_0x37f780);
    (_0x3e27d5 &&
      (clearTimeout(_0x3e27d5),
      this._dataUpdateAnimationTimers["delete"](_0x37f780)),
      this._dataUpdateAnimationChartIds["delete"](_0x37f780));
  }
  _applyDomHostInteractionState(_0x26db23, _0x10ed83) {
    if (this._dataUpdateAnimationChartIds["has"](_0x26db23)) {
      ((_0x10ed83.dataset["slideChartDataAnimation"] = "true"),
        (_0x10ed83.dataset["slideChartDataAnimationDuration"] = String(or)),
        (_0x10ed83.style["pointerEvents"] = "none"));
      return;
    }
    (delete _0x10ed83.dataset["slideChartDataAnimation"],
      delete _0x10ed83.dataset["slideChartDataAnimationDuration"],
      (_0x10ed83.style["pointerEvents"] = "auto"));
  }
  _applyDomHostLayout(_0x57eec3, _0x46a136) {
    let _0x355eb3 = this._hostContextMap["get"](_0x57eec3);
    if (!_0x355eb3) return;
    let _0x426c3d = this._getChartRenderObject(_0x355eb3),
      _0x2bed63 =
        (_0x426c3d == null ? undefined : _0x426c3d.left) ??
        _0x355eb3.drawing["element"].transform["left"] ??
        0,
      _0x24c016 =
        (_0x426c3d == null ? undefined : _0x426c3d.top) ??
        _0x355eb3.drawing["element"].transform["top"] ??
        0,
      _0xe7795c = Math.max(
        _0x4998bb,
        (_0x426c3d == null ? undefined : _0x426c3d.width) ?? _0x355eb3.width,
      ),
      _0x2348ce = Math.max(
        _0x4998bb,
        (_0x426c3d == null ? undefined : _0x426c3d.height) ?? _0x355eb3.height,
      ),
      _0x4ab7d6 =
        (_0x426c3d == null ? undefined : _0x426c3d.angle) ??
        _0x355eb3.drawing["element"].transform["rotation"] ??
        0,
      _0x4c73df = this._getSlideDomWorldLayer(_0x355eb3.unitId),
      _0x2a4ffd = _0x46a136.getHostElement();
    if (_0x4c73df) {
      (_0x2a4ffd.parentElement !== _0x4c73df && _0x4c73df.append(_0x2a4ffd),
        (_0x2a4ffd.style["position"] = "absolute"),
        (_0x2a4ffd.style["left"] = _0x2bed63 + "px"),
        (_0x2a4ffd.style["top"] = _0x24c016 + "px"),
        (_0x2a4ffd.style["width"] = _0xe7795c + "px"),
        (_0x2a4ffd.style["height"] = _0x2348ce + "px"),
        (_0x2a4ffd.style["transform"] = "rotate(" + _0x4ab7d6 + "deg)"));
      return;
    }
    let _0x24a50c = this._getCanvasClientScale(_0x355eb3.unitId),
      _0x32a4ef = this._transformCanvasBoundToClientBound(_0x355eb3.unitId, {
        left: _0x2bed63,
        top: _0x24c016,
        right: _0x2bed63 + _0xe7795c,
        bottom: _0x24c016 + _0x2348ce,
      });
    !_0x24a50c ||
      !_0x32a4ef ||
      ((_0x2a4ffd.style["position"] = "fixed"),
      (_0x2a4ffd.style["left"] =
        _0x32a4ef.left + (_0xe7795c * (_0x24a50c.scaleX - 1)) / 2 + "px"),
      (_0x2a4ffd.style["top"] =
        _0x32a4ef.top + (_0x2348ce * (_0x24a50c.scaleY - 1)) / 2 + "px"),
      (_0x2a4ffd.style["width"] = _0xe7795c + "px"),
      (_0x2a4ffd.style["height"] = _0x2348ce + "px"),
      (_0x2a4ffd.style["transform"] =
        "scale(" +
        _0x24a50c.scaleX +
        ",\x20" +
        _0x24a50c.scaleY +
        ") rotate(" +
        _0x4ab7d6 +
        "deg)"));
  }
  _getSlideDomWorldLayer(_0x441b80) {
    return typeof document > "u"
      ? null
      : (Array.from(
          document.querySelectorAll("[data-slide-dom-world-layer-unit-id]"),
        ).find(
          (_0x48e5af) =>
            _0x48e5af.dataset["slideDomWorldLayerUnitId"] === _0x441b80,
        ) ?? null);
  }
  _getCanvasClientScale(_0x153b1f) {
    let _0x45edfb = this._renderManagerService["getRenderUnitById"](_0x153b1f),
      _0x2e7ce0 =
        _0x45edfb == null ? undefined : _0x45edfb.engine["getCanvasElement"]();
    if (!_0x45edfb || !_0x2e7ce0) return null;
    let { scaleX: _0x6d3d56, scaleY: _0x1ac84f } =
        _0x45edfb.scene["getAncestorScale"](),
      _0x1ffd07 = _0x2e7ce0.getBoundingClientRect(),
      _0x57af77 = _0x1bc4da(_0x2e7ce0.style["width"]),
      _0x152580 = _0x57af77 > 0 ? _0x1ffd07.width / _0x57af77 : 1;
    return { scaleX: _0x6d3d56 * _0x152580, scaleY: _0x1ac84f * _0x152580 };
  }
  _transformCanvasBoundToClientBound(_0x13c3da, _0x1b8590) {
    let _0x492f26 = this._renderManagerService["getRenderUnitById"](_0x13c3da),
      _0xf83e9f =
        _0x492f26 == null ? undefined : _0x492f26.engine["getCanvasElement"](),
      _0x1aad2b = this._getCanvasClientScale(_0x13c3da);
    if (!_0x492f26 || !_0xf83e9f || !_0x1aad2b) return null;
    let _0x135dce = _0x492f26.scene["getViewport"](_0x180def),
      _0x133889 =
        (_0x135dce == null ? undefined : _0x135dce.viewportScrollX) ?? 0,
      _0x4d0038 =
        (_0x135dce == null ? undefined : _0x135dce.viewportScrollY) ?? 0,
      _0x413147 = _0xf83e9f.getBoundingClientRect();
    return {
      left: (_0x1b8590.left - _0x133889) * _0x1aad2b.scaleX + _0x413147.left,
      right: (_0x1b8590.right - _0x133889) * _0x1aad2b.scaleX + _0x413147.left,
      top: (_0x1b8590.top - _0x4d0038) * _0x1aad2b.scaleY + _0x413147.top,
      bottom: (_0x1b8590.bottom - _0x4d0038) * _0x1aad2b.scaleY + _0x413147.top,
    };
  }
  _getChartRenderObject(_0x566f65) {
    var _0x18bd32, _0x2ab748;
    let _0x587c2c =
        (_0x18bd32 = this._renderManagerService["getRenderUnitById"](
          _0x566f65.unitId,
        )) == null
          ? undefined
          : _0x18bd32.scene,
      _0x21a6fb = _0x89c332(
        _0x566f65.unitId,
        _0x566f65.subUnitId,
        _0x566f65.drawingId,
      );
    return (
      (_0x587c2c == null ||
      (_0x2ab748 = _0x587c2c.getObjectIncludeInGroup) == null
        ? undefined
        : _0x2ab748.call(_0x587c2c, _0x21a6fb)) ??
      (_0x587c2c == null ? undefined : _0x587c2c.getObject(_0x21a6fb)) ??
      null
    );
  }
  _requestChartCanvasRender(_0x4147e5) {
    var _0x239219, _0x160be0;
    let _0xce399d = this._hostContextMap["get"](_0x4147e5);
    if (!_0xce399d) return;
    this._forEachHostContext(_0x4147e5, (_0x5c4ee6) => {
      var _0x2fcd86, _0x266b5c, _0x23d2b1;
      ((_0x2fcd86 = _0x5c4ee6.imageObject) == null ||
        (_0x266b5c = _0x2fcd86.makeDirty) == null ||
        _0x266b5c.call(_0x2fcd86, true),
        (_0x23d2b1 = _0x5c4ee6.requestRender) == null ||
          _0x23d2b1.call(_0x5c4ee6));
    });
    let _0x407658 =
        (_0x239219 = this._renderManagerService["getRenderUnitById"](
          _0xce399d.unitId,
        )) == null
          ? undefined
          : _0x239219.scene,
      _0x12b4f9 = this._getChartRenderObject(_0xce399d);
    (_0x12b4f9 == null ||
      (_0x160be0 = _0x12b4f9.makeDirty) == null ||
      _0x160be0.call(_0x12b4f9, true),
      _0x407658 == null || _0x407658.makeDirty(true),
      _0x407658 == null || _0x407658.render());
  }
  _forEachHostContext(_0x1dd829, _0x8cdf7d) {
    var _0x4d1c70;
    (_0x4d1c70 = this._hostContextRegistrationMap["get"](_0x1dd829)) == null ||
      _0x4d1c70.forEach(({ context: _0x1e7e8c }) => _0x8cdf7d(_0x1e7e8c));
  }
  _selectHostContext(_0x3d680a) {
    let _0x517a34 = Array.from(
      _0x3d680a.values(),
      ({ context: _0x207344 }) => _0x207344,
    );
    return (
      _0x517a34.find(
        (_0x7a7884) =>
          _0x7a7884.sceneType == null || _0x7a7884.sceneType === _0x280280.EDIT,
      ) ??
      _0x517a34.find(
        (_0x28fe0b) => _0x28fe0b.sceneType === _0x280280.PRESENTATION,
      ) ??
      _0x517a34[_0x517a34.length - 1]
    );
  }
  _getHostRegistrationKey(_0x6534a9) {
    return [
      _0x6534a9.unitId,
      _0x6534a9.subUnitId,
      _0x6534a9.drawingId,
      _0x6534a9.sceneType ?? _0x280280.EDIT,
    ].join("::");
  }
  _commitImageDataUrl(_0x2c5016, _0x9157bb) {
    (this._lastImageDataUrlMap["set"](_0x2c5016, _0x9157bb),
      this._forEachHostContext(_0x2c5016, (_0xee0d49) => {
        var _0x1ba6b4;
        (_0x1ba6b4 = _0xee0d49.imageObject) == null ||
          _0x1ba6b4.changeChartSource(_0x9157bb);
      }),
      this._imageUpdated$["next"](_0x2c5016),
      this._requestChartCanvasRender(_0x2c5016),
      this._releaseDetachedThumbnailContexts(_0x2c5016));
  }
  _releaseDetachedThumbnailContexts(_0x402bf2) {
    let _0xc36f21 = this._hostContextRegistrationMap["get"](_0x402bf2);
    if (
      (_0xc36f21 == null ||
        _0xc36f21.forEach((_0x56105e, _0x566918) => {
          _0x56105e.detached && _0xc36f21.delete(_0x566918);
        }),
      !(_0xc36f21 != null && _0xc36f21.size))
    ) {
      (this._hostContextMap["delete"](_0x402bf2),
        this._hostContextRegistrationMap["delete"](_0x402bf2),
        this.removeHost(_0x402bf2));
      return;
    }
    (this._hostContextMap["set"](_0x402bf2, this._selectHostContext(_0xc36f21)),
      this.syncHostLayout(_0x402bf2));
  }
  dispose() {
    this._disposed ||
      (this._domHostMap["forEach"]((_0x32dc27) => _0x32dc27.dispose()),
      this._domHostMap["clear"](),
      this._hostLayoutSubscriptions["forEach"]((_0x22c1d1) => {
        _0x22c1d1.forEach((_0x233727) => _0x233727.dispose());
      }),
      this._hostLayoutSubscriptions["clear"](),
      this._runtimeRenderSubscriptions["forEach"]((_0x53fd3d) =>
        _0x53fd3d.dispose(),
      ),
      this._runtimeRenderSubscriptions["clear"](),
      this._renderQueueMap["clear"](),
      this._renderRequestTokenMap["clear"](),
      this._dataUpdateAnimationTimers["forEach"]((_0xed3cbf) =>
        clearTimeout(_0xed3cbf),
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
Q = W(
  [
    U(0, _0x2b32e1),
    U(1, _0x7fe0f2(_0x218544)),
    U(2, _0x7fe0f2(_0x3b3ba6)),
    U(3, _0x7fe0f2(Z)),
    U(4, _0x7fe0f2(Xn)),
  ],
  Q,
);
const sr = "slides-chart-element-float-menu";
let cr = class extends _0x5854cf {
  constructor(
    _0x3baed6,
    _0x520967,
    _0x36c374,
    _0x1a4846,
    _0x2bf359,
    _0x5f4a34,
    _0x1ac0d2,
    _0x40c5f0,
    _0x302bcb,
    _0x4713a7,
  ) {
    (super(),
      (this._chartModelService = _0x3baed6),
      (this._editSessionService = _0x520967),
      (this._chartRenderService = _0x36c374),
      (this._chartHostProvider = _0x1a4846),
      (this._slideCanvasPopManagerService = _0x2bf359),
      (this._chartUIService = _0x5f4a34),
      (this._adapterRegistry = _0x1ac0d2),
      (this._commandService = _0x40c5f0),
      (this._univerInstanceService = _0x302bcb),
      (this._injector = _0x4713a7),
      H(this, "_popupDisposable", null),
      H(this, "_popupChartId", null),
      H(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(), super.dispose());
  }
  _registerAdapter() {
    let _0x41c6db = _0x2fd480({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0x420b9d) => {
        this._setActiveChart(_0x420b9d.chartId);
        let _0x21e8a1 = this._chartModelService["getChartModel"](
            _0x420b9d.unitId,
            _0x420b9d.chartId,
          ),
          _0x5d954c = this._univerInstanceService["getUnit"](
            _0x420b9d.unitId,
            _0x25e84d.UNIVER_SLIDE,
          );
        if (!(
          !_0x21e8a1 ||
          !_0x5d954c ||
          !_0x420b9d.subUnitId ||
          !_0x420b9d.drawingId
        ))
          return new _0x5ab478(
            _0x21e8a1.model,
            new _0x3d1d64({
              unitId: _0x420b9d.unitId,
              subUnitId: _0x420b9d.subUnitId,
              chartId: _0x420b9d.chartId,
              elementId: _0x420b9d.drawingId,
              slideModel: _0x5d954c,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x467ed7) => {
        let {
            unitId: _0x14f785,
            subUnitId: _0x2aca0c,
            drawingId: _0x1c0045,
            chartId: _0x329824,
          } = _0x467ed7,
          _0xc20dfe = _0x577087(_0x467ed7.target);
        this._commandService["executeCommand"](B.id, {
          unitId: _0x14f785,
          subUnitId: _0x2aca0c ?? "",
          drawingId: _0x1c0045 ?? _0x329824,
          ...(_0xc20dfe ? { route: _0xc20dfe } : {}),
        });
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](sr, _0x41c6db));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      _0x1015b0(
        this._chartModelService["chartModelAdded$"].subscribe((_0x3d1086) => {
          let _0x5e4b19 = new _0x507cc0();
          (_0x5e4b19.add(
            this._chartRenderService["on"](
              _0x3d1086.chartId,
              "click",
              (_0x36cbd2) => {
                this._openFloatMenu(_0x3d1086.chartId, _0x36cbd2);
              },
            ),
          ),
            _0x3d1086.model["onDispose"](() => {
              (_0x5e4b19.dispose(),
                this._clearSelectedTarget(_0x3d1086.chartId));
            }),
            this.disposeWithMe(_0x5e4b19));
        }),
      ),
    ),
      this.disposeWithMe(
        _0x1015b0(
          this._chartUIService["activeEditChart$"].subscribe((_0x1d5f10) => {
            (!_0x1d5f10 ||
              (this._popupChartId && _0x1d5f10 !== this._popupChartId)) &&
              this._closePopup();
          }),
        ),
      ),
      this.disposeWithMe(
        _0x1015b0(
          this._editSessionService["activeSession$"].subscribe((_0x4b905c) => {
            (!_0x4b905c ||
              (this._popupChartId &&
                _0x4b905c.chartId !== this._popupChartId)) &&
              this._closePopup();
          }),
        ),
      ),
      this.disposeWithMe(
        _0x1015b0(
          this._chartHostProvider["removeHost$"].subscribe((_0x43a1ee) => {
            this._clearSelectedTarget(_0x43a1ee);
          }),
        ),
      ),
      this.disposeWithMe(
        _0x1015b0(
          this._chartHostProvider["layoutChanged$"].subscribe((_0x3d2213) => {
            this._popupChartId === _0x3d2213 && this._closePopup();
          }),
        ),
      ));
  }
  _setActiveChart(_0x4169a9) {
    let _0x525cec = this._chartHostProvider["getHostContext"](_0x4169a9),
      _0x35d20d = _0x525cec
        ? this._chartModelService["getChartModel"](_0x525cec.unitId, _0x4169a9)
        : undefined;
    _0x35d20d && this._chartModelService["setActiveChartRuntime"](_0x35d20d);
  }
  _openFloatMenu(_0x98292c, _0x4de08c) {
    var _0x585830;
    if (!this._editSessionService["isActive"](_0x98292c)) return;
    let _0x9743d5 = this._chartHostProvider["getHostContext"](_0x98292c),
      _0x1baa57 = _0x9743d5
        ? this._chartModelService["getChartModel"](_0x9743d5.unitId, _0x98292c)
        : undefined,
      _0x5274ec = _0x1baa57
        ? _0x2c05d0(_0x1baa57.model, _0x4de08c.hit)
        : undefined;
    if (!_0x9743d5 || !_0x1baa57 || !_0x5274ec) {
      (this._chartUIService["setSelectedElement"](null),
        this._chartUIService["clearPanelRoute"](),
        this._closePopup());
      return;
    }
    let _0x31843f = _0x577087(_0x5274ec.target);
    if (!_0x31843f) {
      (this._chartUIService["setSelectedElement"](null),
        this._chartUIService["clearPanelRoute"](),
        this._closePopup());
      return;
    }
    let _0x30eb20 = JSON.stringify([
      _0x9743d5.unitId,
      _0x9743d5.subUnitId,
      _0x9743d5.drawingId,
      _0x98292c,
      _0x5274ec.target,
    ]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0x30eb20) ||
      (this._chartModelService["setActiveChartRuntime"](_0x1baa57),
      this._chartUIService["setSelectedElement"]({
        chartId: _0x98292c,
        element: _0x4de08c.hit,
        target: _0x5274ec.target,
        route: _0x31843f,
      }),
      this._chartUIService["setPanelRoute"](_0x98292c, _0x31843f),
      this._closePopup(),
      !_0x5274ec.showFloatMenu)
    )
      return;
    let _0x1b096a =
      this._chartHostProvider["getClientRect"](
        _0x98292c,
        ((_0x585830 = _0x4de08c.hit["overlay"]) == null
          ? undefined
          : _0x585830.bounds) ?? _0x4de08c.hit["bounds"],
      ) ?? this._chartHostProvider["getClientRect"](_0x98292c);
    if (!_0x1b096a) return;
    let _0x3cbca1 = this._slideCanvasPopManagerService[
      "attachPopupToClientRect"
    ](_0x9743d5.unitId, _0x9743d5.subUnitId, _0x1b096a, {
      componentKey: _0x2e2dcc,
      direction: "top-center",
      offset: _0x349796,
      extraProps: {
        unitId: _0x9743d5.unitId,
        subUnitId: _0x9743d5.subUnitId,
        chartId: _0x98292c,
        drawingId: _0x9743d5.drawingId,
        element: _0x4de08c.hit,
        target: _0x5274ec.target,
        adapterKey: sr,
      },
    });
    _0x3cbca1 &&
      ((this._popupDisposable = _0x3cbca1),
      (this._popupChartId = _0x98292c),
      (this._popupSessionKey = _0x30eb20));
  }
  _closePopup() {
    var _0x2df1dc;
    ((_0x2df1dc = this._popupDisposable) == null || _0x2df1dc.dispose(),
      (this._popupDisposable = null),
      (this._popupChartId = null),
      (this._popupSessionKey = null));
  }
  _clearSelectedTarget(_0x3ea9e7) {
    (!this._chartUIService["isElementEditModeActive"](_0x3ea9e7) &&
      this._popupChartId !== _0x3ea9e7) ||
      (this._chartUIService["setSelectedElement"](null),
      this._chartUIService["clearPanelRoute"](),
      this._popupChartId === _0x3ea9e7 && this._closePopup());
  }
};
cr = W(
  [
    U(0, _0x7fe0f2(_0x3b3ba6)),
    U(1, _0x7fe0f2(X)),
    U(2, _0x7fe0f2(Z)),
    U(3, _0x7fe0f2(Q)),
    U(4, _0x7fe0f2(_0xaa3669)),
    U(5, G),
    U(6, _0x7fe0f2(_0x5cfcd0)),
    U(7, _0x54e4fb),
    U(8, _0x5bbcc2),
    U(9, _0x7fe0f2(_0x419de3)),
  ],
  cr,
);
let lr = class extends _0x5854cf {
  constructor(_0x13d1fd, _0x198ce9) {
    (super(),
      (this._renderService = _0x198ce9),
      this.disposeWithMe(_0x13d1fd.register(this)));
  }
  supports(_0x578e0a) {
    return "getPlaceholder" in _0x578e0a;
  }
  exportImage(_0x2a5849, _0x50c5de) {
    return this._renderService["exportImage"](_0x2a5849.getId(), _0x50c5de);
  }
};
lr = W([U(0, _0x7fe0f2(_0x16e5d3)), U(1, _0x7fe0f2(Z))], lr);
function ur(_0x3e83f1) {
  return _0x3e83f1.type === _0xc36da6.Chart;
}
let dr = class {
  constructor(_0x1cdbba) {
    ((this._resourceService = _0x1cdbba), H(this, "key", "slide-chart"));
  }
  collect(_0x41cd24) {
    let _0x4c9848 = {},
      _0x1a2e61 = {},
      _0x3f1634 = {};
    return (
      _0x41cd24.elements["forEach"]((_0x15af23) => {
        if (!ur(_0x15af23)) return;
        let _0x45e5df = this._resourceService["getChart"](
            _0x41cd24.unitId,
            _0x15af23.chartId,
          ),
          _0x29a67d = _0x45e5df
            ? this._resourceService["getDataSource"](
                _0x41cd24.unitId,
                _0x45e5df.dataSourceId,
              )
            : undefined;
        !_0x45e5df ||
          !_0x29a67d ||
          ((_0x4c9848[_0x45e5df.id] = _0x3bd61f.deepClone(_0x45e5df)),
          (_0x1a2e61[_0x29a67d.id] = _0x29a67d),
          (_0x3f1634[_0x15af23.id] = _0x45e5df.id));
      }),
      Object.keys(_0x4c9848).length === 0
        ? null
        : {
            charts: _0x4c9848,
            dataSources: _0x1a2e61,
            chartIdByElementId: _0x3f1634,
          }
    );
  }
  preparePaste(_0x25aadd) {
    if (!fr(_0x25aadd.payload)) return null;
    let _0x266f04 = _0x25aadd.payload,
      _0x16b0fb = new Map();
    _0x25aadd.elementIdMap["forEach"]((_0x178898, _0x42532b) =>
      _0x16b0fb.set(_0x178898, _0x42532b),
    );
    let _0x5f21fe = new Map(),
      _0x31fc1e = new Map(),
      _0xb414bd = _0x25aadd.elements["map"]((_0x1e2fcf) => {
        if (!ur(_0x1e2fcf)) return _0x1e2fcf;
        let _0xde3ae0 = _0x16b0fb.get(_0x1e2fcf.id),
          _0x2f19c8 = _0xde3ae0
            ? _0x266f04.chartIdByElementId[_0xde3ae0]
            : undefined;
        if (!_0x2f19c8 || !_0x266f04.charts[_0x2f19c8]) return _0x1e2fcf;
        let _0x5be78a = _0x5f21fe.get(_0x2f19c8);
        return (
          _0x5be78a ||
            ((_0x5be78a = _0x114ad9(6)), _0x5f21fe.set(_0x2f19c8, _0x5be78a)),
          { ..._0x1e2fcf, chartId: _0x5be78a }
        );
      });
    _0x5f21fe.forEach((_0x2a7539, _0x5928b3) => {
      var _0x4f5153;
      let _0x2b6986 =
        (_0x4f5153 = _0x266f04.charts[_0x5928b3]) == null
          ? undefined
          : _0x4f5153.dataSourceId;
      _0x2b6986 &&
        !_0x31fc1e.has(_0x2b6986) &&
        _0x31fc1e.set(_0x2b6986, _0x114ad9(6));
    });
    let _0x3a0122 = [];
    _0x31fc1e.forEach((_0x58b5c5, _0x59a88e) => {
      let _0x1ded58 = _0x266f04.dataSources[_0x59a88e];
      _0x1ded58 && _0x3a0122.push({ ..._0x1ded58, id: _0x58b5c5 });
    });
    let _0x5bb34c = [];
    return (
      _0x5f21fe.forEach((_0x4587bf, _0x184a2d) => {
        let _0x244c31 = _0x266f04.charts[_0x184a2d],
          _0x591250 = _0x244c31
            ? _0x31fc1e.get(_0x244c31.dataSourceId)
            : undefined;
        _0x244c31 &&
          _0x591250 &&
          _0x5bb34c.push({
            ..._0x244c31,
            id: _0x4587bf,
            dataSourceId: _0x591250,
          });
      }),
      _0x5bb34c.length === 0
        ? null
        : {
            elements: _0xb414bd,
            redoMutations: [
              ..._0x3a0122.map((_0x58fb73) => ({
                id: _0x276f84.id,
                params: {
                  unitId: _0x25aadd.targetUnitId,
                  dataSource: _0x58fb73,
                },
              })),
              ..._0x5bb34c.map((_0x2aa270) => ({
                id: _0x228a67.id,
                params: { unitId: _0x25aadd.targetUnitId, chart: _0x2aa270 },
              })),
            ],
            undoMutations: [
              ..._0x5bb34c.map((_0x359aa2) => ({
                id: _0x503346.id,
                params: {
                  unitId: _0x25aadd.targetUnitId,
                  chartId: _0x359aa2.id,
                },
              })),
              ..._0x3a0122.map((_0xf1bf37) => ({
                id: _0x1e61af.id,
                params: {
                  unitId: _0x25aadd.targetUnitId,
                  dataSourceId: _0xf1bf37.id,
                },
              })),
            ],
          }
    );
  }
};
dr = W([U(0, _0x7fe0f2(_0x38d87a))], dr);
function fr(_0x453617) {
  if (!_0x453617 || typeof _0x453617 != "object") return false;
  let _0x6db1a2 = _0x453617;
  return (
    !!_0x6db1a2.charts &&
    !!_0x6db1a2.dataSources &&
    !!_0x6db1a2.chartIdByElementId
  );
}
function pr(_0xd9f674) {
  switch (_0xd9f674) {
    case _0x15a13a.RoundDot:
      return [1, 2];
    case _0x15a13a.SquareDot:
      return [1, 3];
    case _0x15a13a.Dash:
      return [4, 2];
    case _0x15a13a.DashDot:
      return [4, 2, 1, 2];
    case _0x15a13a.LongDash:
      return [8, 2];
    case _0x15a13a.LongDashDot:
      return [8, 2, 1, 2];
    case _0x15a13a.LongDashDotDot:
      return [8, 2, 1, 2, 1, 2];
    default:
      return [];
  }
}
function mr(_0xa3a114) {
  switch (_0xa3a114) {
    case _0x1485d6.Round:
      return "round";
    case _0x1485d6.Square:
      return "square";
    default:
      return "butt";
  }
}
function hr(_0x4ed94) {
  switch (_0x4ed94) {
    case _0x51123d.Round:
      return "round";
    case _0x51123d.Bevel:
      return "bevel";
    default:
      return "miter";
  }
}
var gr = class extends _0x599f60 {
  constructor(_0x560f08, _0x3cc8e6) {
    (super(_0x560f08, _0x3cc8e6),
      H(this, "_chartStroke", undefined),
      H(this, "_hideImage", false),
      this._attachNativeLoadHandlers(_0x3cc8e6.success, _0x3cc8e6.fail));
  }
  setChartStroke(_0x112c20) {
    ((this._chartStroke = _0x112c20), this.makeDirty(true));
  }
  setImageHidden(_0x2b6c94) {
    this._hideImage !== _0x2b6c94 &&
      ((this._hideImage = _0x2b6c94),
      this.makeDirty(true),
      this._notifyScene());
  }
  changeChartSource(_0x15e847) {
    (this._native ??
      ((this._native = document.createElement("img")),
      (this._native["crossOrigin"] = "anonymous")),
      this._attachNativeLoadHandlers(),
      (this._native["src"] = _0x15e847));
  }
  _draw(_0x18e0ab, _0x24a801, _0x135b0f, _0x3996b7) {
    (this._hideImage || super._draw(_0x18e0ab, _0x24a801, _0x135b0f, _0x3996b7),
      this._drawChartStroke(
        _0x18e0ab,
        _0x135b0f ?? this.width,
        _0x3996b7 ?? this.height,
      ));
  }
  _drawChartStroke(_0x5f299a, _0x1f93dc, _0x26ff6b) {
    let _0x1f68ae = this._chartStroke,
      _0x5ac015 = (_0x1f68ae == null ? undefined : _0x1f68ae.width) ?? 0;
    if (!rr(_0x1f68ae)) return;
    (_0x5f299a.save(),
      _0x5f299a.beginPath(),
      (_0x5f299a.lineWidth = _0x5ac015),
      (_0x5f299a.strokeStyle = _0x1f68ae.color),
      (_0x5f299a.lineCap = mr(_0x1f68ae.capType)),
      (_0x5f299a.lineJoin = hr(_0x1f68ae.lineJoinType)),
      _0x5f299a.setLineDash(pr(_0x1f68ae.dashType)),
      (_0x5f299a.globalAlpha *= _0x1f68ae.opacity ?? 1));
    let _0x180d6f = _0x5ac015 / 2;
    (_0x5f299a.rect(
      -_0x1f93dc / 2 + _0x180d6f,
      -_0x26ff6b / 2 + _0x180d6f,
      Math.max(0, _0x1f93dc - _0x5ac015),
      Math.max(0, _0x26ff6b - _0x5ac015),
    ),
      _0x5f299a.stroke(),
      _0x5f299a.restore());
  }
  _notifyScene() {
    var _0x133401;
    let _0x3e17f8 =
      (_0x133401 = this.getEngine()) == null
        ? undefined
        : _0x133401.activeScene;
    _0x3e17f8 &&
      (_0x3e17f8.makeDirty(true),
      _0x3e17f8.render(),
      _0x3e17f8.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers(_0x113ed7, _0x321fe4) {
    this._native &&
      ((this._native["onload"] = () => {
        (_0x113ed7 == null || _0x113ed7(), this._notifyScene());
      }),
      (this._native["onerror"] = () => {
        (_0x321fe4 == null || _0x321fe4(), this._notifyScene());
      }));
  }
};
let _r = class extends _0x21abe1 {
  constructor(_0x5cee18) {
    (super(), (this._hostProvider = _0x5cee18), H(this, "zIndex", 55));
  }
  check(_0x52dbc7) {
    return _0x52dbc7.element["type"] === _0xc36da6.Chart;
  }
  convert(_0x234f18, _0x5c7eff) {
    if (_0x234f18.hidden || _0x234f18.element["type"] !== _0xc36da6.Chart)
      return null;
    let _0x793cc = _0x234f18.element,
      _0x36f308 = _0x793cc.transform,
      _0x3412bf = Math.max(1, _0x36f308.width ?? 0),
      _0x163fdf = Math.max(1, _0x36f308.height ?? 0),
      _0x86e3dd = new gr(
        "slide-drawing-" +
          _0x5c7eff.unitId +
          "-" +
          _0x5c7eff.subUnitId +
          "-" +
          _0x234f18.drawingId,
        {
          url:
            this._hostProvider["getImageDataUrl"](_0x793cc.chartId) ??
            "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
          left: _0x5c7eff.pageOffsetLeft + (_0x36f308.left ?? 0),
          top: _0x5c7eff.pageOffsetTop + (_0x36f308.top ?? 0),
          width: _0x3412bf,
          height: _0x163fdf,
          angle: _0x36f308.rotation ?? 0,
          flipX: _0x36f308.flipX,
          flipY: _0x36f308.flipY,
          skewX: _0x36f308.skewX,
          skewY: _0x36f308.skewY,
          zIndex: _0x5c7eff.orderIndex,
          visible: !_0x234f18.hidden,
          evented: true,
          forceRender: true,
        },
      );
    _0x86e3dd.setChartStroke(_0x793cc.stroke);
    let _0x3a5a68 = (_0x5c7eff.sceneType ?? _0x280280.EDIT) === _0x280280.EDIT,
      _0x59cf84 = this._hostProvider["registerHostContext"]({
        unitId: _0x5c7eff.unitId,
        subUnitId: _0x5c7eff.subUnitId,
        drawingId: _0x234f18.drawingId,
        chartId: _0x793cc.chartId,
        width: _0x3412bf,
        height: _0x163fdf,
        drawing: _0x234f18,
        stroke: _0x793cc.stroke,
        imageObject: _0x86e3dd,
        sceneType: _0x5c7eff.sceneType,
        requestRender: _0x5c7eff.requestRender,
      });
    _0x86e3dd.setImageHidden(
      _0x3a5a68 && this._hostProvider["isDomReady"](_0x793cc.chartId),
    );
    let _0x1a1410 = this._hostProvider["imageUpdated$"].subscribe(
        (_0x5da389) => {
          _0x5da389 === _0x793cc.chartId &&
            _0x86e3dd.setImageHidden(
              _0x3a5a68 && this._hostProvider["isDomReady"](_0x793cc.chartId),
            );
        },
      ),
      _0x5671d6 = this._hostProvider["domReadyChanged$"].subscribe(
        (_0xc0ff7e) => {
          _0xc0ff7e === _0x793cc.chartId &&
            _0x86e3dd.setImageHidden(
              _0x3a5a68 && this._hostProvider["isDomReady"](_0x793cc.chartId),
            );
        },
      );
    return (
      _0x86e3dd.onDispose$["subscribeEvent"](() => {
        (_0x59cf84 == null || _0x59cf84.dispose(),
          _0x1a1410 == null || _0x1a1410.unsubscribe(),
          _0x5671d6 == null || _0x5671d6.unsubscribe());
      }),
      _0x86e3dd
    );
  }
};
_r = W([U(0, _0x7fe0f2(Q))], _r);
let $ = class extends _0x42d224 {
  constructor(_0x38dc83 = Gn, _0x3f4818, _0x5e4915, _0x230137, _0x402d63) {
    (super(),
      (this._config = _0x38dc83),
      (this._injector = _0x3f4818),
      (this._configService = _0x5e4915),
      (this._renderManagerService = _0x230137),
      (this._commandService = _0x402d63));
    let { ..._0x2a38e3 } = _0x1937c2({}, Gn, this._config);
    (this._configService["setConfig"](Wn, _0x2a38e3), this._initCommands());
  }
  onStarting() {
    let _0x116db8 = this._injector;
    (this.disposeWithMe(_0x116db8.get(_0x35190a).register(_r)),
      [
        [tr],
        [Xn],
        [X],
        [Q],
        [Z],
        [lr],
        [J],
        [dr],
        [Y],
        [G, { useClass: An }],
        [cr],
        [Yn],
        [Qn],
      ].forEach((_0x58b4cf) => _0x116db8.add(_0x58b4cf)),
      _0x1bedfc(_0x116db8, [[Xn], [X], [Q], [Z], [lr], [J], [dr], [Y], [G]]),
      this._injector["get"](tr),
      this.disposeWithMe(
        _0x116db8.get(_0x706b26).registerAdapter(_0x116db8.get(dr)),
      ));
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        _0x25e84d.UNIVER_SLIDE,
        nr,
      ),
    ),
      this._injector["get"](Yn),
      this._injector["get"](cr),
      this._injector["get"](Qn));
  }
  _initCommands() {
    [B, xn, Sn, Cn].forEach((_0x16389e) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x16389e));
    });
  }
};
(H($, "type", _0x25e84d.UNIVER_SLIDE),
  H($, "pluginName", "UniverSlideChartUIPlugin"),
  H($, "packageName", $n),
  H($, "version", er),
  ($ = W(
    [
      _0x3c60fe(
        _0x51da98,
        _0x304cda,
        _0x1e439c,
        _0x581fa4,
        _0x18cec7,
        _0x2b389a,
      ),
      U(1, _0x7fe0f2(_0x419de3)),
      U(2, _0x46c8af),
      U(3, _0x2b32e1),
      U(4, _0x54e4fb),
    ],
    $,
  )));
export {
  xn as CloseSlideChartPanelOperation,
  G as ISlideChartUIService,
  Sn as OpenSlideChartDataEditorOperation,
  B as OpenSlideChartPanelOperation,
  Wn as SLIDES_CHART_UI_PLUGIN_CONFIG_KEY,
  wn as SLIDE_CHART_DATA_EDITOR_COMPONENT,
  Tn as SLIDE_CHART_DATA_EDITOR_DIALOG_ID,
  K as SLIDE_CHART_EDIT_PANEL_COMPONENT,
  Vn as SLIDE_CHART_INSERT_PANEL_COMPONENT,
  Yn as SlideChartContextMenuController,
  Y as SlideChartDataEditService,
  Dn as SlideChartDataEditor,
  En as SlideChartDataEditorSubmitMode,
  Rn as SlideChartEditPanel,
  Un as SlideChartInsertPanel,
  J as SlideChartInsertService,
  _r as SlideChartObjectAdaptor,
  Z as SlideChartRenderService,
  Qn as SlideChartUIController,
  An as SlideChartUIService,
  qn as SlideContextMenuOpenChartPanelFactory,
  Cn as SlideContextMenuOpenChartPanelOperation,
  $ as UniverSlidesChartUIPlugin,
  Jn as slideChartContextMenuSchema,
};
