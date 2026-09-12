import {
  ChartModelService as _0x2cb440,
  ChartUpdateConfigCommand as _0xa04db7,
  ChartUpdateConfigMutation as _0x2f3aad,
  ChartUpdateSourceCommand as _0x365152,
  InsertChartCommand as _0xbccb25,
  InsertSheetsChartMutation as _0x48c64d,
  RemoveSheetsChartMutation as _0x26a1d3,
  SHEETS_CHART_PLUGIN_CONFIG_KEY as _0x3e0f0c,
  SHEETS_CHART_PLUGIN_NAME as _0x2ab3ef,
  SheetChartConfigAdapter as _0x2bd149,
  SheetsChartService as _0x354de9,
  UniverSheetsChartPlugin as _0x482de2,
  getAllowedChartTypes as _0x565c3d,
  toInsertChartMutationSource as _0x5ee272,
} from "@univerjs-pro/sheets-chart";
import {
  CommandType as _0x356bb1,
  DependentOn as _0x3366d6,
  Disposable as _0x352eaa,
  DisposableCollection as _0x19aa48,
  DrawingTypeEnum as _0x8f911e,
  FOCUSING_COMMON_DRAWINGS as _0x216334,
  FOCUSING_PANEL_EDITOR as _0x31acaf,
  ICommandService as _0x2956ab,
  IConfigService as _0x1999fa,
  IContextService as _0x57426f,
  IUniverInstanceService as _0xf2e955,
  Inject as _0x5b0a50,
  Injector as _0x57cf41,
  LocaleService as _0x2008b6,
  Plugin as _0x2ad963,
  ThemeService as _0x37b8fe,
  UniverInstanceType as _0x1139b3,
  createIdentifier as _0x1f298c,
  debounce as _0x388049,
  generateRandomId as _0x402ce8,
  isValidRange as _0x22ae0e,
  merge as _0x3d9d13,
  numberToABC as _0x1a8e64,
  toDisposable as _0x3193f8,
  touchDependencies as _0x196405,
} from "@univerjs/core";
import {
  IDrawingManagerService as _0xe7d86,
  UniverDrawingPlugin as _0x20d39,
  getDrawingShapeKeyByDrawingSearch as _0x12b4d2,
  getOrCreateDrawingCopyPlan as _0xc88a4a,
} from "@univerjs/drawing";
import {
  DrawingApplyType as _0x20c3a8,
  ISheetDrawingService as _0x176114,
  RemoveSheetDrawingCommand as _0xb78463,
  SetDrawingApplyMutation as _0x6ec39a,
  UniverSheetsDrawingPlugin as _0x2beee4,
  transformToDrawingPosition as _0x29e7ba,
} from "@univerjs/sheets-drawing";
import {
  SHEET_CHART_RENDER_OBJECT_CONFIG as _0x3c3f74,
  SheetCanvasFloatDomManagerService as _0x474276,
  SheetDrawingHitTestService as _0x47445d,
  UniverSheetsDrawingUIPlugin as _0x14da6a,
} from "@univerjs/sheets-drawing-ui";
import {
  COPY_TYPE as _0xc0c7fb,
  ISheetClipboardService as _0x59373e,
  PREDEFINED_HOOK_NAME as _0x2c982d,
  SheetCanvasPopManagerService as _0x407092,
  SheetCopyCommand as _0x427f9a,
  SheetPrintInterceptorService as _0x3398d1,
  SheetSkeletonManagerService as _0x17ebbb,
  UniverSheetsUIPlugin as _0x24b393,
  deriveStateFromActiveSheet$ as _0x4e7461,
  getCurrentRangeDisable$ as _0x1d5edf,
} from "@univerjs/sheets-ui";
import {
  CanvasFloatDomService as _0x1cb827,
  ComponentManager as _0x5cb8e8,
  ContextMenuGroup as _0x196f36,
  ContextMenuPosition as _0x4b3c95,
  IMenuManagerService as _0x17ca19,
  ISidebarService as _0x2ad2b9,
  IconManager as _0x654cd3,
  KeyCode as _0x3a081f,
  MOBILE_UI_MODE as _0x31d563,
  MenuItemType as _0x45338a,
  NativeTextEditorShortcutBehavior as _0xd0741f,
  RibbonInsertGroup as _0x55eed8,
  getMenuHiddenObservable as _0x1fee32,
  useDependency as _0x2a48f0,
  useObservable as _0x3a3fa0,
} from "@univerjs/ui";
import {
  BehaviorSubject as _0x873472,
  Observable as _0xe21ce9,
  Subject as _0x358a8d,
  combineLatest as _0x585947,
  combineLatestWith as _0x4b598b,
  debounceTime as _0x5b3c9d,
  distinctUntilChanged as _0x5ebaa8,
  filter as _0x2facec,
  fromEvent as _0x7436b7,
  map as _0x2ae138,
  merge as _0x909e8e,
  pairwise as _0x533cdc,
  skip as _0x2b4ed6,
  startWith as _0x5e8e6f,
  take as _0x5dcb4a,
  throttleTime as _0x2bd84a,
  withLatestFrom as _0x245ad8,
} from "rxjs";
import {
  CHART_ELEMENT_FLOAT_MENU_COMPONENT as _0x11323d,
  CHART_HOST_BORDER_RADIUS as _0x43249f,
  CHART_TYPE_CATALOG as _0x150668,
  ChartAxisSection as _0x57bebe,
  ChartCommonDataMappingSection as _0x1329df,
  ChartDomFrame as _0x464ddb,
  ChartEditBlockTitle as _0x90e230,
  ChartEditPanel as _0x550b11,
  ChartEditPanelSection as _0x36d661,
  ChartEditPanelTab as _0xee0c76,
  ChartEditPanelTabs as _0x3cbfd8,
  ChartEditorCapability as _0x471c27,
  ChartEditorProvider as _0x32e814,
  ChartElementFloatMenuAdapterRegistry as _0x2cfdd7,
  ChartFrameContentMode as _0x575bae,
  ChartFrameLayout as _0x7a8db4,
  ChartFunnelStyleSection as _0x758562,
  ChartGradientFillField as _0x347da6,
  ChartGridlinesAndTicksSection as _0x5a4cac,
  ChartHeatmapStyleSection as _0x1de441,
  ChartHostAdapter as _0x3b7460,
  ChartImageExportService as _0x103463,
  ChartIndicatorLineSection as _0x63f3c1,
  ChartLegendSection as _0x491190,
  ChartLineAndAreaSection as _0x2caeee,
  ChartNumberFormatAtom as _0xb65981,
  ChartParetoSeriesSection as _0x20cddb,
  ChartPieStyleSection as _0x10259f,
  ChartRadarStyleSection as _0x2f7583,
  ChartRelationStyleSection as _0xbf226c,
  ChartSectionAccordion as _0x4022b0,
  ChartSectionAccordionContent as _0x337fd5,
  ChartSectionAccordionItem as _0x1f62d6,
  ChartSectionAccordionTrigger as _0xd12ede,
  ChartSeriesSection as _0x1f0b63,
  ChartStackField as _0x1ac0a5,
  ChartStyleSection as _0x11d3ca,
  ChartThemeField as _0x1983a3,
  ChartTitlesSection as _0x364d22,
  ChartTrendlineSection as _0x3478a4,
  ChartTypeField as _0x50d02b,
  ChartTypeSpecificDataSection as _0x2903b9,
  ChartTypeSpecificSetupSection as _0x5bd05f,
  ChartTypeSpecificStyleSection as _0x43b880,
  ChartUIService as _0x15c546,
  ChartViewStateRegistry as _0x548bb6,
  ChartWaterfallSetupFields as _0x16e1d2,
  ChartWaterfallStyleSection as _0x2ce40f,
  ChartWordCloudStyleSection as _0x445ed9,
  DEFAULT_CHART_AXIS_VALUES as _0x7b2bd3,
  DEFAULT_CHART_FUNNEL_VALUES as _0x37ded8,
  DEFAULT_CHART_HEATMAP_VALUES as _0x5a2dc4,
  DEFAULT_CHART_INDICATOR_LINE_VALUES as _0x8319cf,
  DEFAULT_CHART_LEGEND_VALUES as _0x2289d4,
  DEFAULT_CHART_LINE_AND_AREA_VALUES as _0x5336ff,
  DEFAULT_CHART_PARETO_VALUES as _0x478cad,
  DEFAULT_CHART_PIE_VALUES as _0x57f092,
  DEFAULT_CHART_RADAR_VALUES as _0x429bd9,
  DEFAULT_CHART_RELATION_VALUES as _0x42fbc2,
  DEFAULT_CHART_SERIES_VALUES as _0x124ee6,
  DEFAULT_CHART_STYLE_VALUES as _0x59c0fe,
  DEFAULT_CHART_TITLE_VALUES as _0x254826,
  DEFAULT_CHART_TRENDLINE_VALUES as _0x354001,
  DEFAULT_CHART_WATERFALL_SETUP_VALUES as _0x1175e1,
  DEFAULT_CHART_WATERFALL_STYLE_VALUES as _0x3fda25,
  DEFAULT_CHART_WORD_CLOUD_VALUES as _0x13b9fe,
  UniverChartUIPlugin as _0x4347d5,
  buildChartTypeSelectOptions as _0x4d35cc,
  chartTypeSupportsCapability as _0x3542d6,
  chartTypeSupportsLineAndAreaStyle as _0x1b01ad,
  createChartElementFloatMenuAdapter as _0x11d9d,
  resolveChartCreationIntent as _0x28ad86,
  resolveChartEditPanelRoute as _0x862a37,
  resolveChartElementSelection as _0x55b418,
  useChartEditorChartType as _0x3a4ef3,
  useChartEditorHasRightAxis as _0x3a1890,
} from "@univerjs-pro/chart-ui";
import {
  CHART_DATA_UPDATE_ANIMATION_DURATION as _0x25730c,
  ChartImageExportFormat as _0x14b6c3,
  ChartImageSourceType as _0x27f35b,
  ChartRenderMode as _0x571401,
  ChartThemeService as _0x54bfb0,
  ChartTypeBits as _0x3974b2,
  ChartWaterfallStyleTarget as _0x4ba4e9,
  DataOrientation as _0x7b304e,
  EChartRenderEngineName as _0x3ad1c6,
  IChartRenderModelManagerService as _0x5eb60f,
  ImageChartHost as _0x19f07c,
  PieSecondaryPlotType as _0x53c7b8,
  RTLChartStyle as _0x350845,
  chartBitsUtils as _0x14ed04,
  chartImageSourceToDataUrl as _0x2a4b81,
  chartTypeCanUseTrendLine as _0x256bc9,
  resolveChartRuntimeStyle as _0xb42d16,
  resolveChartStyleBackgroundColor as _0x1e6b74,
  resolveDefaultChartHostFrameStyle as _0x21d2b7,
} from "@univerjs-pro/engine-chart";
import {
  CopySheetCommand as _0x67454,
  RemoveSheetCommand as _0x416d23,
  SheetInterceptorService as _0x57392a,
  SheetPermissionCheckController as _0xee18c2,
  SheetSkeletonService as _0x5e1050,
  SheetsSelectionsService as _0xe8ac6f,
  UniverSheetsPlugin as _0xfd7a80,
  WorkbookEditablePermission as _0x1f6651,
  WorksheetEditPermission as _0x18113f,
  attachRangeWithCoord as _0x171b3b,
  discreteRangeToRange as _0x25c64f,
  getSheetCommandTarget as _0x5beb96,
} from "@univerjs/sheets";
import {
  deserializeRangeWithSheet as _0x4f1365,
  matchToken as _0x239a96,
  serializeRangeWithSheet as _0x4b30c4,
} from "@univerjs/engine-formula";
import { insertGroupObject as _0x1dc2d9 } from "@univerjs/drawing-ui";
import {
  DRAWING_OBJECT_LAYER_INDEX as _0xb8f9ec,
  IRenderManagerService as _0x383c23,
  ObjectType as _0x4aaf08,
  RENDER_CLASS_TYPE as _0x31cfc0,
  Rect as _0x2023ef,
  TRANSFORM_CHANGE_OBSERVABLE_TYPE as _0x2bb35f,
  Transform as _0x42643c,
  UniverRenderEnginePlugin as _0x1cff46,
} from "@univerjs/engine-render";
import {
  useCallback as _0xd51390,
  useEffect as _0x2af7ed,
  useMemo as _0x35977d,
  useRef as _0x411a9a,
  useState as _0x2c6621,
} from "react";
import { Button as _0x27b4a8 } from "@univerjs/design";
import { RangeSelector as _0x2519dc } from "@univerjs/sheets-formula-ui";
import {
  Fragment as _0x16338b,
  jsx as _0x2c400e,
  jsxs as _0x53657b,
} from "react/jsx-runtime";
import { UniverLicensePlugin as _0x18059c } from "@univerjs-pro/license";
import { PenIcon as _0x1aa5a7 } from "@univerjs/icons";
const Cr = "sheets-chart-ui.config",
  wr = { enableChartElementFloatMenu: true },
  Tr = {
    type: _0x356bb1.OPERATION,
    id: "sheet.operation.hide-chart-panel",
    handler() {
      return true;
    },
  },
  H = {
    type: _0x356bb1.OPERATION,
    id: "sheet.operation.open-chart-panel",
    handler() {
      return true;
    },
  };
function U(_0x4463b9) {
  let _0xbe111b = _0x4463b9.get(_0x176114).getFocusDrawings();
  if (_0xbe111b.length !== 1) return null;
  let _0x3f7a07 = _0xbe111b[0];
  return _0x3f7a07.drawingType === _0x8f911e.DRAWING_CHART ? _0x3f7a07 : null;
}
function Er(_0x5ee7fb, _0x474163) {
  let _0x7d5e0f = document.createElement("a");
  ((_0x7d5e0f.href = _0x5ee7fb),
    (_0x7d5e0f.download = _0x474163),
    _0x7d5e0f.click());
}
const Dr = {
    id: "sheet.command.chart.open-focused-panel",
    type: _0x356bb1.COMMAND,
    handler: (_0x77152e, _0x118bfe) => {
      let _0xc0ece3 = U(_0x77152e);
      return _0xc0ece3
        ? _0x77152e
            .get(_0x2956ab)
            .executeCommand(H.id, {
              unitId: _0xc0ece3.unitId,
              subUnitId: _0xc0ece3.subUnitId,
              drawingId: _0xc0ece3.drawingId,
              ...(_0x118bfe != null && _0x118bfe.route
                ? { route: _0x118bfe.route }
                : {}),
            })
        : false;
    },
  },
  Or = {
    id: "sheet.command.chart.copy-focused-chart",
    type: _0x356bb1.COMMAND,
    handler: (_0xc773cf) =>
      U(_0xc773cf)
        ? _0xc773cf.get(_0x2956ab).executeCommand(_0x427f9a.id)
        : false,
  },
  kr = {
    id: "sheet.command.chart.export-focused-image",
    type: _0x356bb1.COMMAND,
    handler: async (_0x333983) => {
      let _0x22a4cf = U(_0x333983);
      if (!_0x22a4cf) return false;
      let _0x101975 = await _0x333983
        .get(_0x103463)
        .exportImage({
          unitId: _0x22a4cf.unitId,
          subUnitId: _0x22a4cf.subUnitId,
          getId: () => _0x22a4cf.drawingId,
        });
      return _0x101975
        ? (Er(_0x101975, _0x22a4cf.drawingId + ".png"), true)
        : false;
    },
  },
  Ar = {
    id: "sheet.command.chart.delete-focused-chart",
    type: _0x356bb1.COMMAND,
    handler: (_0x1ed468) => {
      let _0x4f3045 = U(_0x1ed468);
      return _0x4f3045
        ? _0x1ed468
            .get(_0x2956ab)
            .executeCommand(_0xb78463.id, {
              unitId: _0x4f3045.unitId,
              drawings: [
                {
                  unitId: _0x4f3045.unitId,
                  subUnitId: _0x4f3045.subUnitId,
                  drawingId: _0x4f3045.drawingId,
                  drawingType: _0x8f911e.DRAWING_CHART,
                },
              ],
            })
        : false;
    },
  },
  jr = {
    type: _0x356bb1.COMMAND,
    id: "sheet.command.menu-insert-chart",
    handler: async (_0xfccf3d, _0x139ac8) => {
      let _0x59eafa = _0x5beb96(_0xfccf3d.get(_0xf2e955));
      if (!_0x59eafa) return false;
      let _0x588fbc = _0xfccf3d.get(_0xe8ac6f).getCurrentLastSelection();
      if (!_0x588fbc) return false;
      let { range: _0x31abfe } = _0x588fbc,
        _0x1413bb = _0xfccf3d.get(_0x2956ab),
        { unitId: _0xbd51a3, subUnitId: _0x41f24d } = _0x59eafa,
        { pieSecondaryPlotType: _0x1e6400, value: _0x42fd82 } = _0x139ac8,
        _0x39a237 = _0x1e6400 !== undefined;
      if (
        _0x39a237 &&
        (_0x42fd82 !== _0x3974b2.Pie ||
          (_0x1e6400 !== _0x53c7b8.Pie && _0x1e6400 !== _0x53c7b8.Bar))
      )
        return false;
      let _0x224591 = _0x39a237 ? _0x402ce8() : undefined;
      return _0x1413bb.executeCommand(_0xbccb25.id, {
        unitId: _0xbd51a3,
        subUnitId: _0x41f24d,
        chartType: _0x42fd82,
        ...(_0x224591 && _0x1e6400
          ? {
              chartId: _0x224591,
              config: {
                unitId: _0xbd51a3,
                chartModelId: _0x224591,
                style: {
                  pie: {
                    composite: {
                      enabled: true,
                      secondaryPlot: { type: _0x1e6400 },
                    },
                  },
                },
              },
            }
          : {}),
        source: {
          rangeInfo: {
            unitId: _0x31abfe.unitId ?? _0xbd51a3,
            subUnitId: _0x31abfe.sheetId ?? _0x41f24d,
            range: _0x31abfe,
          },
        },
      });
    },
  };
function Mr(_0x364708, _0x2661cf) {
  if (_0x364708 == null) return "";
  if (Array.isArray(_0x364708)) {
    var _0x5a9610;
    let _0x5c7258 =
      (_0x5a9610 = _0x364708[0]) == null ? undefined : _0x5a9610.range;
    return _0x5c7258 ? Nr(_0x5c7258, _0x2661cf) : "";
  } else return Nr(_0x364708.rangeInfo, _0x2661cf);
}
function Nr(_0x40d83d, _0x3eb54f) {
  var _0x25f2b6;
  let { unitId: _0x1e7a85, subUnitId: _0x4edda9, range: _0x3cde35 } = _0x40d83d,
    _0x238fbb =
      (_0x25f2b6 = _0x3eb54f.getUnit(_0x1e7a85)) == null
        ? undefined
        : _0x25f2b6.getSheetBySheetId(_0x4edda9);
  return _0x238fbb ? _0x4b30c4(_0x238fbb.getName(), _0x3cde35) : "";
}
const Pr = _0x150668.map((_0x2105fa) => ({
  id: "id" in _0x2105fa ? _0x2105fa.id : undefined,
  labelId: _0x2105fa.labelId,
  pieSecondaryPlotType:
    "pieSecondaryPlotType" in _0x2105fa
      ? _0x2105fa.pieSecondaryPlotType
      : undefined,
  value: _0x2105fa.value,
  icon: _0x2105fa.iconName,
}));
function Fr(_0x35cd35 = Pr) {
  return _0x35cd35.map(
    ({ id: _0x4f9a40, icon: _0x5565b3, value: _0x1f8700 }) => {
      let _0x11837f = _0x28ad86(_0x4f9a40 ?? String(_0x1f8700)),
        _0xf38b35 = _0x11837f
          ? {
              value: _0x11837f.chartType,
              ...(_0x11837f.pieSecondaryPlotType
                ? { pieSecondaryPlotType: _0x11837f.pieSecondaryPlotType }
                : {}),
            }
          : { value: _0x1f8700 };
      return {
        icon: _0x5565b3,
        value: _0x4f9a40 ?? _0x1f8700,
        params: _0xf38b35,
      };
    },
  );
}
const Ir = (_0x3566e2, _0x2347b2) => {
  if (_0x2347b2.length === 1 && _0x2347b2[0] === "all") return _0x3566e2;
  if (_0x2347b2.length > 1) {
    let _0x1a0b12 = new Set();
    for (let _0x1953ed of _0x2347b2) _0x1a0b12.add(Number(_0x1953ed));
    return _0x3566e2.filter((_0x47712b) => _0x1a0b12.has(_0x47712b.value));
  }
  return [];
};
function Lr(_0xd5491e) {
  let _0x4d4fff = _0xd5491e.get(_0xf2e955),
    _0x9297c5 = _0x565c3d(_0xd5491e),
    _0x1d3f9c = Ir(Pr.concat(), _0x9297c5),
    _0x598aa1 = Fr(_0x1d3f9c).map((_0x5e9cfd, _0x58d7e9) => ({
      icon: _0x5e9cfd.icon,
      value: _0x5e9cfd.value,
      params: _0x5e9cfd.params,
      label: "sheets-chart-ui.chartTypes." + _0x1d3f9c[_0x58d7e9].labelId,
    }));
  return {
    id: jr.id,
    type: _0x45338a.SELECTOR,
    selectionsCommandId: jr.id,
    selections: _0x598aa1,
    icon: "ChartIcon",
    tooltip: "sheets-chart-ui.common.insertChart",
    activated$: _0x4e7461(
      _0x4d4fff,
      false,
      () =>
        new _0xe21ce9((_0x1e8fca) => {
          _0x1e8fca.next(false);
        }),
    ),
    hidden$: _0x1fee32(_0xd5491e, _0x1139b3.UNIVER_SHEET),
    disabled$: _0x1d5edf(_0xd5491e),
  };
}
function Rr(_0x4fb54b) {
  let _0x1d9bad = _0x4fb54b.get(_0x176114);
  return _0x1d9bad.focus$["pipe"](
    _0x5e8e6f(_0x1d9bad.getFocusDrawings()),
    _0x2ae138(() => U(_0x4fb54b) == null),
  );
}
function zr(_0x2c49d7) {
  return {
    id: Dr.id,
    commandId: Dr.id,
    type: _0x45338a.BUTTON,
    title: _0x2c49d7.get(_0x2008b6).t("sheets-chart-ui.common.openChartPanel"),
    icon: "PenIcon",
    hidden$: Rr(_0x2c49d7),
  };
}
function Br(_0x54c284) {
  return {
    id: Or.id,
    commandId: Or.id,
    type: _0x45338a.BUTTON,
    title: _0x54c284.get(_0x2008b6).t("sheets-chart-ui.common.copy"),
    icon: "CopyDoubleIcon",
    hidden$: Rr(_0x54c284),
  };
}
function Vr(_0x46fb99) {
  return {
    id: kr.id,
    commandId: kr.id,
    type: _0x45338a.BUTTON,
    title: _0x46fb99.get(_0x2008b6).t("sheets-chart-ui.common.exportImage"),
    icon: "DownloadImageIcon",
    hidden$: Rr(_0x46fb99),
  };
}
function Hr(_0x547840) {
  return {
    id: Ar.id,
    commandId: Ar.id,
    type: _0x45338a.BUTTON,
    title: _0x547840.get(_0x2008b6).t("sheets-chart-ui.common.deleteChart"),
    icon: "DeleteIcon",
    hidden$: Rr(_0x547840),
  };
}
const Ur = {
  [_0x55eed8.MEDIA]: { [jr.id]: { order: 4, menuItemFactory: Lr } },
  [_0x4b3c95.DRAWING]: {
    [_0x196f36.OTHERS]: {
      [Dr.id]: { order: 0, menuItemFactory: zr },
      [Or.id]: { order: 1, menuItemFactory: Br },
      [kr.id]: { order: 3, menuItemFactory: Vr },
      [Ar.id]: { order: 4, menuItemFactory: Hr },
    },
  },
};
function Wr(_0x17d553) {
  return (
    _0x17d553 === _0x3974b2.Combination ||
    _0x17d553 === _0x3974b2.Radar ||
    _0x17d553 === _0x3974b2.Boxplot ||
    _0x14ed04.baseOn(_0x17d553, _0x3974b2.Line) ||
    _0x14ed04.baseOn(_0x17d553, _0x3974b2.Column) ||
    _0x14ed04.baseOn(_0x17d553, _0x3974b2.Area) ||
    _0x14ed04.baseOn(_0x17d553, _0x3974b2.Scatter)
  );
}
function Gr(_0x1eeb41) {
  return (
    Wr(_0x1eeb41) ||
    _0x14ed04.baseOn(_0x1eeb41, _0x3974b2.Pie) ||
    _0x14ed04.baseOn(_0x1eeb41, _0x3974b2.Pareto) ||
    _0x14ed04.baseOn(_0x1eeb41, _0x3974b2.Waterfall)
  );
}
function Kr(_0x84753b, _0x195e1b) {
  let _0x24f9f5 = _0x55b418(_0x84753b, _0x195e1b),
    _0x17e0fd = _0x24f9f5 ? _0x862a37(_0x24f9f5.target) : undefined;
  if (!(!_0x24f9f5 || !_0x17e0fd))
    return {
      ..._0x24f9f5,
      route: _0x17e0fd,
      showFloatMenu: Gr(_0x84753b.chartType) && _0x24f9f5.showFloatMenu,
    };
}
function qr(_0x64e570, _0x5747f3 = 1) {
  return {
    width: Math.max(_0x5747f3, _0x64e570.width),
    height: Math.max(_0x5747f3, _0x64e570.height),
  };
}
function Jr(_0x6e4491, _0x4933b2 = {}, _0x1ac07b = { left: 0, top: 0 }) {
  let _0x43a7e9 = _0x4933b2.scaleX ?? 1,
    _0x1513bc = _0x4933b2.scaleY ?? 1,
    _0x48402c = _0x7a8db4.resolve({
      logicalOuterRect: {
        left: _0x1ac07b.left > 0 ? -_0x1ac07b.left : 0,
        top: _0x1ac07b.top > 0 ? -_0x1ac07b.top : 0,
        ...qr(_0x6e4491),
      },
      scale: { scaleX: _0x43a7e9, scaleY: _0x1513bc },
      hostStyle: {},
      contentMode: _0x575bae.Overlay,
    });
  return {
    left: _0x48402c.logicalOuterRect["left"],
    top: _0x48402c.logicalOuterRect["top"],
    width: _0x48402c.logicalOuterRect["width"],
    height: _0x48402c.logicalOuterRect["height"],
    scaleX: _0x43a7e9,
    scaleY: _0x1513bc,
  };
}
function W(_0x485f3e) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5984fc) {
            return typeof _0x5984fc;
          }
        : function (_0x38bad4) {
            return _0x38bad4 &&
              typeof Symbol == "function" &&
              _0x38bad4.constructor === Symbol &&
              _0x38bad4 !== Symbol.prototype
              ? "symbol"
              : typeof _0x38bad4;
          }),
    W(_0x485f3e)
  );
}
function Yr(_0x4057a3, _0x238261) {
  if (W(_0x4057a3) != "object" || !_0x4057a3) return _0x4057a3;
  var _0x11bfc6 = _0x4057a3[Symbol.toPrimitive];
  if (_0x11bfc6 !== undefined) {
    var _0x505df3 = _0x11bfc6.call(_0x4057a3, _0x238261 || "default");
    if (W(_0x505df3) != "object") return _0x505df3;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x238261 === "string" ? String : Number)(_0x4057a3);
}
function Xr(_0x141659) {
  var _0x242c5c = Yr(_0x141659, "string");
  return W(_0x242c5c) == "symbol" ? _0x242c5c : _0x242c5c + "";
}
function G(_0x3b38b2, _0x13fa91, _0x2c96f4) {
  return (
    (_0x13fa91 = Xr(_0x13fa91)) in _0x3b38b2
      ? Object.defineProperty(_0x3b38b2, _0x13fa91, {
          value: _0x2c96f4,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3b38b2[_0x13fa91] = _0x2c96f4),
    _0x3b38b2
  );
}
function Zr(_0x49abb3) {
  switch (_0x49abb3.type) {
    case _0x27f35b.Canvas:
      return _0x49abb3.canvas;
    case _0x27f35b.ImageBitmap:
      return _0x49abb3.imageBitmap;
    default:
      return;
  }
}
var Qr = class extends _0x2023ef {
  constructor(
    _0x2dabd3,
    _0x5888c3,
    _0xfd90eb,
    _0x5aebca = () => false,
    _0xf107ce = () => {},
  ) {
    (super(_0x2dabd3, { ..._0x5888c3, evented: _0x5888c3.evented ?? true }),
      (this._getImage = _0xfd90eb),
      (this._shouldSuppressRender = _0x5aebca),
      (this._disposeImage = _0xf107ce),
      G(this, "_urlImage", null),
      G(this, "_url", null),
      G(this, "_requestedUrl", null),
      G(this, "_pendingUrlImage", null),
      this.setObjectType(_0x4aaf08.CHART));
  }
  dispose() {
    (this._clearPendingUrlImage(),
      (this._urlImage = null),
      (this._url = null),
      (this._requestedUrl = null),
      this._disposeImage(),
      super.dispose());
  }
  render(_0x260ed0, _0x369362) {
    if (!this.visible) return (this.makeDirty(false), this);
    if (this._shouldSuppressRender()) {
      let _0x10efa9 = this._getImage();
      return (
        _0x10efa9 && this._getDrawable(_0x10efa9),
        this.makeDirty(false),
        this
      );
    }
    if (!this.transform) return this;
    let {
      width: _0x269b1b,
      height: _0x4988be,
      left: _0x42a6ca,
      top: _0x331097,
    } = this.getRealBound();
    if (this.isRender(_0x369362)) {
      let {
        top: _0x5d88d8,
        left: _0x3bb766,
        bottom: _0xad567a,
        right: _0x28942a,
      } = _0x369362.viewBound;
      if (
        _0x269b1b + this.strokeWidth + _0x42a6ca < _0x3bb766 ||
        _0x28942a < _0x42a6ca ||
        _0x4988be + this.strokeWidth + _0x331097 < _0x5d88d8 ||
        _0xad567a < _0x331097
      )
        return this;
    }
    let _0x44d2af = this.transform["getMatrix"]();
    _0x260ed0.save();
    let _0x20c0a4 = _0x42a6ca + _0x269b1b / 2,
      _0x110546 = _0x331097 + _0x4988be / 2;
    return (
      _0x260ed0.transform(
        _0x44d2af[0],
        _0x44d2af[1],
        _0x44d2af[2],
        _0x44d2af[3],
        _0x20c0a4,
        _0x110546,
      ),
      this.opacity !== 1 && (_0x260ed0.globalAlpha = this.opacity),
      this._draw(_0x260ed0, undefined, _0x269b1b, _0x4988be),
      _0x260ed0.restore(),
      this.makeDirty(false),
      this
    );
  }
  _draw(_0x532173, _0x322c17, _0x297c87 = this.width, _0x501df8 = this.height) {
    (this._drawChartFrame(_0x532173, _0x297c87, _0x501df8, {
      stroke: undefined,
      strokeWidth: 0,
    }),
      this._drawChartImage(_0x532173, _0x297c87, _0x501df8),
      this._drawChartFrame(_0x532173, _0x297c87, _0x501df8, {
        fill: undefined,
      }));
  }
  _drawChartFrame(_0x17f325, _0x57a7fa, _0x107864, _0x4f1c7f) {
    (_0x17f325.save(),
      _0x17f325.translate(-_0x57a7fa / 2, -_0x107864 / 2),
      _0x2023ef.drawWith(_0x17f325, $r(this, _0x57a7fa, _0x107864, _0x4f1c7f)),
      _0x17f325.restore());
  }
  isHit(_0x7f48f4) {
    let {
        left: _0x786b0d,
        top: _0x2c875b,
        width: _0x2f365f,
        height: _0x5d1524,
      } = this.getRealBound(),
      _0x3098e9 = _0x786b0d + _0x2f365f / 2,
      _0x1285cf = _0x2c875b + _0x5d1524 / 2,
      _0x131b72 = this.transform["getMatrix"](),
      _0x3ec9b9 = new _0x42643c([
        _0x131b72[0],
        _0x131b72[1],
        _0x131b72[2],
        _0x131b72[3],
        _0x3098e9,
        _0x1285cf,
      ]),
      _0x432232 = this.getParent(),
      _0x390855 = (
        this.isInGroup &&
        (_0x432232 == null ? undefined : _0x432232.classType) ===
          _0x31cfc0.GROUP
          ? _0x432232.ancestorTransform["multiply"](_0x3ec9b9)
          : _0x3ec9b9
      )
        .invert()
        .applyPoint(_0x7f48f4),
      _0x3081dd = _0x2f365f / 2,
      _0x4736b8 = _0x5d1524 / 2;
    return (
      _0x390855.x >= -_0x3081dd - this.strokeWidth / 2 &&
      _0x390855.x <= _0x3081dd + this.strokeWidth / 2 &&
      _0x390855.y >= -_0x4736b8 - this.strokeWidth / 2 &&
      _0x390855.y <= _0x4736b8 + this.strokeWidth / 2
    );
  }
  _drawChartImage(_0x52ee29, _0x28a174, _0x1994a9) {
    let _0x417185 = this._getImage(),
      _0xf8bcd2 = _0x417185 ? this._getDrawable(_0x417185) : undefined;
    if (!_0xf8bcd2) return;
    let { width: _0x39281d, height: _0x123fb2 } = qr(
      { width: _0x28a174, height: _0x1994a9 },
      0,
    );
    _0x39281d !== 0 &&
      _0x123fb2 !== 0 &&
      (_0x52ee29.save(),
      _0x52ee29.translate(-_0x28a174 / 2, -_0x1994a9 / 2),
      ei(_0x52ee29, _0x39281d, _0x123fb2, this.radius),
      _0x52ee29.clip(),
      _0x52ee29.drawImage(_0xf8bcd2, 0, 0, _0x39281d, _0x123fb2),
      _0x52ee29.restore());
  }
  _getDrawable(_0x4e257b) {
    var _0x47c425;
    let _0xb7784e = Zr(_0x4e257b);
    if (_0xb7784e) return _0xb7784e;
    if (
      _0x4e257b.type === _0x27f35b.Url &&
      (this._requestedUrl !== _0x4e257b.url &&
        ((this._requestedUrl = _0x4e257b.url),
        this._clearPendingUrlImage(),
        this._url !== _0x4e257b.url && this._loadUrlImage(_0x4e257b.url)),
      (_0x47c425 = this._urlImage) != null &&
        _0x47c425.complete &&
        this._urlImage["naturalWidth"] > 0 &&
        this._urlImage["naturalHeight"] > 0)
    )
      return this._urlImage;
  }
  _loadUrlImage(_0x380456) {
    let _0xc85488 = document.createElement("img");
    ((this._pendingUrlImage = _0xc85488),
      (_0xc85488.crossOrigin = "anonymous"),
      (_0xc85488.onload = () => {
        this._requestedUrl === _0x380456 &&
          this._pendingUrlImage === _0xc85488 &&
          (_0xc85488.naturalWidth > 0 &&
            _0xc85488.naturalHeight > 0 &&
            ((this._url = _0x380456), (this._urlImage = _0xc85488)),
          this._clearPendingUrlImage(),
          this.makeDirty(true));
      }),
      (_0xc85488.onerror = () => {
        this._pendingUrlImage === _0xc85488 && this._clearPendingUrlImage();
      }),
      (_0xc85488.src = _0x380456));
  }
  _clearPendingUrlImage() {
    this._pendingUrlImage &&=
      ((this._pendingUrlImage["onload"] = null),
      (this._pendingUrlImage["onerror"] = null),
      null);
  }
};
function $r(_0x31ef96, _0x4a1f5b, _0x525531, _0x2d0da) {
  let _0x4d74df = Object.create(_0x31ef96);
  return (
    Object.defineProperty(_0x4d74df, "width", { value: _0x4a1f5b }),
    Object.defineProperty(_0x4d74df, "height", { value: _0x525531 }),
    Object.keys(_0x2d0da).forEach((_0x1b74a1) => {
      Object.defineProperty(_0x4d74df, _0x1b74a1, {
        value: _0x2d0da[_0x1b74a1],
      });
    }),
    _0x4d74df
  );
}
function ei(_0x5ed4eb, _0x6d78a3, _0x505da4, _0x1c5577) {
  let _0x130955 = Math.min(_0x1c5577 || 0, _0x6d78a3 / 2, _0x505da4 / 2);
  if ((_0x5ed4eb.beginPath(), !_0x130955)) {
    (_0x5ed4eb.rect(0, 0, _0x6d78a3, _0x505da4), _0x5ed4eb.closePath());
    return;
  }
  (_0x5ed4eb.moveTo(_0x130955, 0),
    _0x5ed4eb.lineTo(_0x6d78a3 - _0x130955, 0),
    _0x5ed4eb.arc(
      _0x6d78a3 - _0x130955,
      _0x130955,
      _0x130955,
      (Math.PI * 3) / 2,
      0,
      false,
    ),
    _0x5ed4eb.lineTo(_0x6d78a3, _0x505da4 - _0x130955),
    _0x5ed4eb.arc(
      _0x6d78a3 - _0x130955,
      _0x505da4 - _0x130955,
      _0x130955,
      0,
      Math.PI / 2,
      false,
    ),
    _0x5ed4eb.lineTo(_0x130955, _0x505da4),
    _0x5ed4eb.arc(
      _0x130955,
      _0x505da4 - _0x130955,
      _0x130955,
      Math.PI / 2,
      Math.PI,
      false,
    ),
    _0x5ed4eb.lineTo(0, _0x130955),
    _0x5ed4eb.arc(
      _0x130955,
      _0x130955,
      _0x130955,
      Math.PI,
      (Math.PI * 3) / 2,
      false,
    ),
    _0x5ed4eb.closePath());
}
function K(_0x5dc3a2) {
  (_0x5dc3a2 == null ? undefined : _0x5dc3a2.type) === _0x27f35b.ImageBitmap &&
    _0x5dc3a2.imageBitmap["close"]();
}
function ti(_0x479e2c) {
  return (
    _0x479e2c.unitId + "#-#" + _0x479e2c.subUnitId + "#-#" + _0x479e2c.chartId
  );
}
var ni = class extends _0x352eaa {
  constructor(..._0x39cf73) {
    (super(..._0x39cf73), G(this, "_entries", new Map()));
  }
  nextVersion(_0x7944e0) {
    let _0x1faee1 = ti(_0x7944e0),
      _0xe72210 = this._entries["get"](_0x1faee1) ?? { version: 0 };
    return (
      (_0xe72210.version += 1),
      this._entries["set"](_0x1faee1, _0xe72210),
      _0xe72210.version
    );
  }
  isLatest(_0x387399, _0x40a438) {
    var _0x5debf4;
    return (
      ((_0x5debf4 = this._entries["get"](ti(_0x387399))) == null
        ? undefined
        : _0x5debf4.version) === _0x40a438
    );
  }
  setImage(_0x455702, _0x1ef351, _0x3220c8) {
    if (!this.isLatest(_0x455702, _0x3220c8)) return (K(_0x1ef351), false);
    let _0x1028e3 = ti(_0x455702),
      _0x434f00 = this._entries["get"](_0x1028e3) ?? { version: _0x3220c8 },
      _0x280798 = _0x434f00.image;
    return (
      (_0x434f00.image = _0x1ef351),
      (_0x434f00.version = _0x3220c8),
      this._entries["set"](_0x1028e3, _0x434f00),
      _0x280798 !== _0x1ef351 && K(_0x280798),
      true
    );
  }
  getImage(_0x1d57e0) {
    var _0x148b7e;
    return (_0x148b7e = this._entries["get"](ti(_0x1d57e0))) == null
      ? undefined
      : _0x148b7e.image;
  }
  clearImage(_0x3b0dd1) {
    let _0x2234ca = ti(_0x3b0dd1),
      _0x474a1d = this._entries["get"](_0x2234ca);
    _0x474a1d && (K(_0x474a1d.image), this._entries["delete"](_0x2234ca));
  }
  clearChart(_0x1b5c29) {
    for (let [_0x52e630, _0x176fa9] of this._entries)
      _0x52e630.endsWith("#-#" + _0x1b5c29) &&
        (K(_0x176fa9.image), this._entries["delete"](_0x52e630));
  }
  dispose() {
    (this._entries["forEach"]((_0x1a1df2) => K(_0x1a1df2.image)),
      this._entries["clear"](),
      super.dispose());
  }
};
function ri(_0x131e5a, _0x258269 = 2000) {
  let _0x58703c = null,
    _0x322228 = null,
    _0x1ed772 = false,
    _0x1d5c4f = () => {},
    _0x11a096 = () => {
      (_0x58703c != null && (clearInterval(_0x58703c), (_0x58703c = null)),
        _0x322228 != null && (clearTimeout(_0x322228), (_0x322228 = null)));
    };
  return {
    promise: new Promise((_0x18c3d0, _0x3ce233) => {
      _0x1d5c4f = _0x3ce233;
      let _0x4ba1a2 = () => {
        let _0x1f5111 = document.getElementById(_0x131e5a);
        !_0x1f5111 ||
          _0x1ed772 ||
          ((_0x1ed772 = true), _0x11a096(), _0x18c3d0(_0x1f5111));
      };
      (_0x4ba1a2(),
        !_0x1ed772 &&
          ((_0x58703c = setInterval(_0x4ba1a2, 16.666666666666668)),
          (_0x322228 = setTimeout(() => {
            _0x1ed772 ||
              ((_0x1ed772 = true),
              _0x11a096(),
              _0x3ce233(
                Error(
                  "Timed\x20out\x20waiting\x20for\x20float\x20dom\x20host\x20\x22" +
                    _0x131e5a +
                    "\x22.",
                ),
              ));
          }, _0x258269))));
    }),
    cancel: () => {
      _0x1ed772 ||
        ((_0x1ed772 = true),
        _0x11a096(),
        _0x1d5c4f(
          Error('Canceled waiting for float dom host "' + _0x131e5a + "\x22."),
        ));
    },
  };
}
var ii = class extends _0x352eaa {
    constructor(
      _0x4c04c9,
      _0x2eac6e,
      _0x1723d7,
      _0x164a09,
      _0x26dd75,
      _0x2b2c68,
      _0x1df7bc,
    ) {
      (super(),
        (this.chartId = _0x4c04c9),
        (this._getFloatDomInfo = _0x2eac6e),
        (this._getPlacement = _0x1723d7),
        (this._setHostStyle = _0x164a09),
        (this._isProviderDisposed = _0x26dd75),
        (this._markReady = _0x2b2c68),
        (this._markNotReady = _0x1df7bc),
        G(this, "mode", _0x571401.Dom),
        G(this, "_domFrame", null),
        G(this, "_managed", false),
        G(this, "_pendingToken", null),
        G(this, "_pendingHost", null),
        G(this, "_waiter", null),
        G(this, "_hostStyle", {}),
        G(this, "_savedWrapperStyle", null),
        G(this, "_dataUpdateAnimationDuration", null));
    }
    isManaged() {
      return this._managed;
    }
    markUnmanaged() {
      this._managed = false;
    }
    getRect() {
      let _0x4aef9a = this._getPlacement();
      return _0x4aef9a
        ? { width: _0x4aef9a.width, height: _0x4aef9a.height }
        : null;
    }
    setStyle(_0x1c0c21) {
      ((this._hostStyle = _0x1c0c21),
        this._setHostStyle(_0x1c0c21),
        this._applyHostStyle());
    }
    async ensureHandle() {
      if (this._disposed || this._isProviderDisposed())
        throw Error("Fail to create float dom");
      let _0x48030f = this._getFloatDomInfo(),
        _0x1b3a7f =
          (_0x48030f == null ? undefined : _0x48030f.domId) ?? this.chartId,
        _0x514a55 = document.getElementById(_0x1b3a7f);
      if (
        this._domFrame &&
        _0x514a55 != null &&
        _0x514a55.contains(this._domFrame["mountNode"])
      )
        return {
          mountNode: this._domFrame["mountNode"],
          dispose: () => {
            (this.dispose(),
              _0x48030f == null || _0x48030f.dispose["dispose"]());
          },
        };
      if (this._pendingHost) return this._pendingHost;
      let _0x3e7936 = this._createHost();
      return (
        (this._pendingHost = _0x3e7936),
        _0x3e7936.then(
          () => {
            this._pendingHost === _0x3e7936 && (this._pendingHost = null);
          },
          () => {
            this._pendingHost === _0x3e7936 && (this._pendingHost = null);
          },
        ),
        _0x3e7936
      );
    }
    async ensureMount() {
      try {
        return (await this.ensureHandle()).mountNode;
      } catch {
        return null;
      }
    }
    checkMounted() {
      let _0x392e36 = this._getFloatDomInfo(),
        _0x2f085b =
          (_0x392e36 == null ? undefined : _0x392e36.domId) ?? this.chartId,
        _0x1c60b2 = document.getElementById(_0x2f085b);
      return !!(
        this._domFrame &&
        _0x1c60b2 != null &&
        _0x1c60b2.contains(this._domFrame["mountNode"])
      );
    }
    syncLayout() {
      if (!this._domFrame) return;
      let _0x4e2637 = this._getPlacement();
      _0x4e2637 &&
        this._domFrame["update"](
          this._resolveLayout(_0x4e2637),
          this._frameStyle(),
        );
    }
    markReady() {
      this._markReady();
    }
    markNotReady() {
      this._markNotReady();
    }
    setDataUpdateAnimation(_0x559941) {
      this._dataUpdateAnimationDuration = _0x559941;
      let _0x1d6fdb = this._getFloatDomInfo(),
        _0x4dd360 = document.getElementById(
          (_0x1d6fdb == null ? undefined : _0x1d6fdb.domId) ?? this.chartId,
        );
      _0x4dd360 && this._applyHostInteractionState(_0x4dd360);
    }
    dispose() {
      var _0x5d74c3;
      this._disposed ||
        (this.markNotReady(),
        (this._pendingToken = null),
        (this._pendingHost = null),
        this._cancelHostWait(),
        (this._managed = false),
        (this._dataUpdateAnimationDuration = null),
        (_0x5d74c3 = this._domFrame) == null || _0x5d74c3.dispose(),
        (this._domFrame = null),
        this._restoreHostWrapper(),
        super.dispose());
    }
    async _createHost() {
      let _0x18b2d1 = this._getFloatDomInfo();
      if (!_0x18b2d1) throw Error("Fail to create float dom");
      let _0x13cf32 = _0x18b2d1.domId ?? this.chartId,
        _0x163a25 = ri(_0x13cf32),
        _0x158af4 = Symbol(this.chartId);
      ((this._pendingToken = _0x158af4), (this._waiter = _0x163a25));
      try {
        let _0x45b500 = await _0x163a25.promise,
          _0x4e3aa7 = this._getFloatDomInfo(),
          _0xa85150 =
            (_0x4e3aa7 == null ? undefined : _0x4e3aa7.domId) ?? this.chartId;
        if (
          this._disposed ||
          this._isProviderDisposed() ||
          this._pendingToken !== _0x158af4 ||
          !_0x4e3aa7 ||
          _0xa85150 !== _0x13cf32 ||
          document.getElementById(_0x13cf32) !== _0x45b500 ||
          !_0x45b500.isConnected
        )
          throw Error("Fail to create float dom");
        let _0x473c24 = this._getPlacement();
        if (!_0x473c24) throw Error("Fail to create float dom");
        let _0x294eb3 = new _0x464ddb(_0x45b500);
        return (
          _0x294eb3.update(this._resolveLayout(_0x473c24), this._frameStyle()),
          this._activateHostWrapper(_0x45b500),
          (this._domFrame = _0x294eb3),
          (this._managed = true),
          {
            mountNode: _0x294eb3.mountNode,
            dispose: () => {
              (this.dispose(), _0x18b2d1.dispose["dispose"]());
            },
          }
        );
      } finally {
        (this._waiter === _0x163a25 && (this._waiter = null),
          this._pendingToken === _0x158af4 && (this._pendingToken = null));
      }
    }
    _cancelHostWait() {
      let _0x4f02df = this._waiter;
      _0x4f02df && (_0x4f02df.cancel(), (this._waiter = null));
    }
    _applyHostStyle() {
      let _0x59a481 = this._getPlacement();
      this._domFrame &&
        _0x59a481 &&
        this._domFrame["update"](
          this._resolveLayout(_0x59a481),
          this._frameStyle(),
        );
    }
    _resolveLayout(_0x24c46f) {
      return _0x7a8db4.resolve({
        logicalOuterRect: {
          left: _0x24c46f.left,
          top: _0x24c46f.top,
          width: _0x24c46f.width,
          height: _0x24c46f.height,
        },
        scale: { scaleX: _0x24c46f.scaleX, scaleY: _0x24c46f.scaleY },
        hostStyle: this._frameStyle(),
        contentMode: _0x575bae.Overlay,
      });
    }
    _frameStyle() {
      return { ...this._hostStyle, radius: _0x43249f };
    }
    _activateHostWrapper(_0x1c0518) {
      let _0x406b16 = _0x1c0518.parentElement;
      _0x406b16 &&
        ((this._savedWrapperStyle ||= {
          zIndex: _0x406b16.style["zIndex"],
          pointerEvents: _0x406b16.style["pointerEvents"],
        }),
        (_0x406b16.style["zIndex"] = "1000"),
        this._applyHostInteractionState(_0x1c0518));
    }
    _applyHostInteractionState(_0x41d827) {
      let _0x267aa1 = _0x41d827.parentElement;
      if (!_0x267aa1) return;
      let _0x109e03 = this._dataUpdateAnimationDuration;
      if (_0x109e03 != null) {
        ((_0x41d827.dataset["sheetChartDataAnimation"] = "true"),
          (_0x41d827.dataset["sheetChartDataAnimationDuration"] =
            String(_0x109e03)),
          (_0x267aa1.style["pointerEvents"] = "none"));
        return;
      }
      (delete _0x41d827.dataset["sheetChartDataAnimation"],
        delete _0x41d827.dataset["sheetChartDataAnimationDuration"],
        (_0x267aa1.style["pointerEvents"] = "auto"));
    }
    _restoreHostWrapper() {
      if (!this._savedWrapperStyle) return;
      let _0x28a3f0 = this._getFloatDomInfo(),
        _0x257c90 =
          (_0x28a3f0 == null ? undefined : _0x28a3f0.domId) ?? this.chartId,
        _0x7dd15a = document.getElementById(_0x257c90);
      (_0x7dd15a == null || delete _0x7dd15a.dataset["sheetChartDataAnimation"],
        _0x7dd15a == null ||
          delete _0x7dd15a.dataset["sheetChartDataAnimationDuration"]);
      let _0x26e36a = _0x7dd15a == null ? undefined : _0x7dd15a.parentElement;
      (_0x26e36a &&
        ((_0x26e36a.style["zIndex"] = this._savedWrapperStyle["zIndex"]),
        (_0x26e36a.style["pointerEvents"] =
          this._savedWrapperStyle["pointerEvents"])),
        (this._savedWrapperStyle = null));
    }
  },
  ai = class extends _0x19f07c {
    constructor(
      _0x158f86,
      _0x5faecd,
      _0x391e1c,
      _0x31f23c,
      _0x568ca6,
      _0x3c2647,
    ) {
      (super(_0x158f86),
        (this._getOuterRect = _0x5faecd),
        (this._setHostStyle = _0x391e1c),
        (this._snapshotKey = _0x31f23c),
        (this._snapshotStore = _0x568ca6),
        (this._requestPaint = _0x3c2647));
    }
    getRect() {
      let _0x51f9b3 = this._getOuterRect();
      return _0x51f9b3 ? qr(_0x51f9b3) : null;
    }
    setStyle(_0x46d00c) {
      this._setHostStyle(_0x46d00c);
    }
    nextVersion() {
      return this._snapshotStore["nextVersion"](this._snapshotKey);
    }
    commitSnapshot(_0x328218, _0xe541ad) {
      return this._snapshotStore["setImage"](
        this._snapshotKey,
        _0x328218,
        _0xe541ad,
      );
    }
    requestPaint() {
      this._requestPaint();
    }
    invalidateSnapshot() {
      this._snapshotStore["nextVersion"](this._snapshotKey);
    }
  };
function q(_0x11281d, _0xff1da5) {
  return function (_0x5e4b25, _0x2954d1) {
    _0xff1da5(_0x5e4b25, _0x2954d1, _0x11281d);
  };
}
function J(_0x5c54ff, _0x4407f1, _0x1a45fd, _0x344f3f) {
  var _0x1e41a5 = arguments.length,
    _0x2c0d07 =
      _0x1e41a5 < 3
        ? _0x4407f1
        : _0x344f3f === null
          ? (_0x344f3f = Object.getOwnPropertyDescriptor(_0x4407f1, _0x1a45fd))
          : _0x344f3f,
    _0xf410da;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2c0d07 = Reflect.decorate(_0x5c54ff, _0x4407f1, _0x1a45fd, _0x344f3f);
  else {
    for (var _0x3d61da = _0x5c54ff.length - 1; _0x3d61da >= 0; _0x3d61da--)
      (_0xf410da = _0x5c54ff[_0x3d61da]) &&
        (_0x2c0d07 =
          (_0x1e41a5 < 3
            ? _0xf410da(_0x2c0d07)
            : _0x1e41a5 > 3
              ? _0xf410da(_0x4407f1, _0x1a45fd, _0x2c0d07)
              : _0xf410da(_0x4407f1, _0x1a45fd)) || _0x2c0d07);
  }
  return (
    _0x1e41a5 > 3 &&
      _0x2c0d07 &&
      Object.defineProperty(_0x4407f1, _0x1a45fd, _0x2c0d07),
    _0x2c0d07
  );
}
const oi = 0.5;
function si(_0x1a2d9f) {
  let _0x53d103 = Math.max(_0x1a2d9f.endX - _0x1a2d9f.startX, 0),
    _0x1157cc = Math.max(_0x1a2d9f.endY - _0x1a2d9f.startY, 0),
    _0x2340f3 = _0x1a2d9f.absolute["left"] && _0x1a2d9f.width - _0x53d103 > oi,
    _0x831d99 = _0x1a2d9f.absolute["top"] && _0x1a2d9f.height - _0x1157cc > oi;
  return !_0x2340f3 && !_0x831d99
    ? _0x1a2d9f
    : {
        ..._0x1a2d9f,
        absolute: {
          left: !_0x2340f3 && _0x1a2d9f.absolute["left"],
          top: !_0x831d99 && _0x1a2d9f.absolute["top"],
        },
      };
}
function ci(_0x321ec7) {
  if (!Object.prototype["hasOwnProperty"].call(_0x321ec7, "border"))
    return _0x321ec7;
  let { border: _0x5d762a, ..._0x4e674b } = _0x321ec7;
  return {
    ..._0x4e674b,
    stroke: (_0x5d762a == null ? undefined : _0x5d762a.color) ?? "transparent",
    strokeWidth: (_0x5d762a == null ? undefined : _0x5d762a.width) ?? 0,
  };
}
let li = class extends _0x352eaa {
  constructor(_0x454cdd, _0x472074, _0x3216d2, _0x3c755a) {
    (super(),
      (this._sheetCanvasFloatDomManagerService = _0x454cdd),
      (this._renderManagerService = _0x472074),
      (this._chartSnapshotStoreService = _0x3216d2),
      (this._canvasFloatDomService = _0x3c755a),
      G(this, "_chartHostMap", new Map()),
      G(this, "_activeDomReadyChartIds", new Set()),
      G(this, "_removeHost$", new _0x358a8d()),
      G(this, "removeHost$", this._removeHost$["asObservable"]()),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          (_0xd8f544) => {
            let _0x55bf40 = this._chartHostMap["get"](_0xd8f544.id);
            _0x55bf40 != null &&
              _0x55bf40.isManaged() &&
              (_0x55bf40.markUnmanaged(),
              this._removeHost$["next"](_0xd8f544.id));
          },
        ),
      ));
  }
  _getSceneAndTransformerByDrawingSearch(_0x3c0509) {
    if (_0x3c0509 == null) return;
    let _0xe09fc1 = this._renderManagerService["getRenderUnitById"](_0x3c0509),
      _0x34e3ca = _0xe09fc1 == null ? undefined : _0xe09fc1.scene;
    return _0xe09fc1 == null || _0x34e3ca == null
      ? null
      : {
          scene: _0x34e3ca,
          transformer: _0x34e3ca.getTransformerByCreate(),
          renderUnit: _0xe09fc1,
          canvas: _0xe09fc1.engine["getCanvasElement"](),
        };
  }
  setBorder(_0x542237, _0x310f40) {
    let _0x82f2c6 = this._sheetCanvasFloatDomManagerService,
      _0x42e39f = _0x310f40 || "transparent",
      _0x1f0441 = _0x82f2c6.getFloatDomInfo(_0x542237);
    if (_0x1f0441) {
      let { unitId: _0x4981a2, subUnitId: _0x4dd59a } = _0x1f0441;
      _0x82f2c6.updateFloatDomProps(_0x4981a2, _0x4dd59a, _0x542237, {
        stroke: _0x42e39f,
      });
    }
  }
  setHostStyle(_0x3e7763, _0x4ac6b5) {
    let _0x37882a = this._sheetCanvasFloatDomManagerService,
      _0x323525 = _0x37882a.getFloatDomInfo(_0x3e7763);
    if (_0x323525) {
      let { unitId: _0x4bfbd2, subUnitId: _0x5a43d2 } = _0x323525;
      _0x37882a.updateFloatDomProps(
        _0x4bfbd2,
        _0x5a43d2,
        _0x3e7763,
        ci(_0x4ac6b5),
      );
    }
  }
  getHostSize(_0x65533) {
    let _0x11b1e4 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x65533);
    return _0x11b1e4 ? _0x11b1e4.rect : null;
  }
  getHostClientRect(_0x2195b6) {
    let _0x4a2294 =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x2195b6),
      _0x22b9a7 = document.getElementById(
        (_0x4a2294 == null ? undefined : _0x4a2294.domId) ?? _0x2195b6,
      );
    return (
      (_0x22b9a7 == null ? undefined : _0x22b9a7.getBoundingClientRect()) ??
      null
    );
  }
  setDataUpdateAnimation(_0x249cad, _0xae7693) {
    var _0x364c11;
    (_0x364c11 = this._chartHostMap["get"](_0x249cad)) == null ||
      _0x364c11.setDataUpdateAnimation(_0xae7693);
  }
  checkHost(_0x48a6f7) {
    var _0x4207bb;
    return (
      ((_0x4207bb = this._chartHostMap["get"](_0x48a6f7)) == null
        ? undefined
        : _0x4207bb.checkMounted()) ?? false
    );
  }
  syncHostLayout(_0x422da8) {
    var _0xd45cf7;
    (_0xd45cf7 = this._chartHostMap["get"](_0x422da8)) == null ||
      _0xd45cf7.syncLayout();
  }
  removeHost(_0x39d85b) {
    let _0x3f34ec = this._chartHostMap["get"](_0x39d85b);
    (_0x3f34ec == null || _0x3f34ec.dispose(),
      this._chartHostMap["delete"](_0x39d85b));
  }
  async ensureHost(_0x147dc4, _0x2ad2db) {
    if (_0x2ad2db === _0x571401.Image)
      return this._createImageChartHost(_0x147dc4);
    if (_0x2ad2db === _0x571401.Dom)
      return this._getOrCreateSheetChartHost(_0x147dc4);
    let _0x2da501 = this._getOrCreateSheetChartHost(_0x147dc4);
    if (!_0x2da501) throw Error("Fail to create float dom");
    return _0x2da501.ensureHandle();
  }
  isDomReady(_0x3433f7) {
    var _0xe4d2a3;
    return this._activeDomReadyChartIds["has"](_0x3433f7)
      ? (_0xe4d2a3 = this._chartHostMap["get"](_0x3433f7)) != null &&
        _0xe4d2a3.checkMounted()
        ? true
        : (this._activeDomReadyChartIds["delete"](_0x3433f7),
          this._restoreFloatDomPositionStream(_0x3433f7),
          false)
      : false;
  }
  markHostNotReady(_0x395dad) {
    this._activeDomReadyChartIds["delete"](_0x395dad) &&
      (this._restoreFloatDomPositionStream(_0x395dad),
      this._requestChartCanvasRender(_0x395dad));
  }
  invalidateSnapshot(_0x3bd6ef) {
    let _0x321014 = this._getChartSnapshotKey(_0x3bd6ef);
    _0x321014 && this._chartSnapshotStoreService["nextVersion"](_0x321014);
  }
  _createImageChartHost(_0x315510) {
    let _0x26c6e3 = this._getChartSnapshotKey(_0x315510);
    return !_0x26c6e3 || !this.getHostSize(_0x315510)
      ? null
      : new ai(
          _0x315510,
          () => this.getHostSize(_0x315510),
          (_0x228edf) => this.setHostStyle(_0x315510, _0x228edf),
          _0x26c6e3,
          this._chartSnapshotStoreService,
          () => this._requestChartCanvasRender(_0x315510),
        );
  }
  _getOrCreateSheetChartHost(_0x1c174d) {
    if (!this.getHostSize(_0x1c174d)) return null;
    this._canvasFloatDomService["updateFloatDom"](_0x1c174d, {
      contentBox: { wrapperInset: 0, contentInset: 0 },
    });
    let _0xc69afd = this._chartHostMap["get"](_0x1c174d);
    if (_0xc69afd) return _0xc69afd;
    let _0x18d30e = new ii(
      _0x1c174d,
      () =>
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x1c174d),
      () => this._getHostPlacement(_0x1c174d),
      (_0x464baa) => this.setHostStyle(_0x1c174d, _0x464baa),
      () => this._disposed,
      () => this._markHostReady(_0x1c174d),
      () => this.markHostNotReady(_0x1c174d),
    );
    return (this._chartHostMap["set"](_0x1c174d, _0x18d30e), _0x18d30e);
  }
  _markHostReady(_0x5045ed) {
    this._activeDomReadyChartIds["has"](_0x5045ed) ||
      (this._activeDomReadyChartIds["add"](_0x5045ed),
      this._alignFloatDomPositionWithSceneRender(_0x5045ed),
      this._requestChartCanvasRender(_0x5045ed));
  }
  _alignFloatDomPositionWithSceneRender(_0x2e6918) {
    var _0x14277b;
    let _0x36508d =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x2e6918),
      _0x1ef68b = _0x36508d
        ? (_0x14277b = this._renderManagerService["getRenderUnitById"](
            _0x36508d.unitId,
          )) == null
          ? undefined
          : _0x14277b.scene
        : null;
    if (!_0x36508d || !_0x1ef68b) return;
    let _0x553da5 = _0x909e8e(
      _0x36508d.position$["pipe"](_0x5dcb4a(1)),
      _0x1ef68b.afterRender$["pipe"](
        _0x245ad8(_0x36508d.position$),
        _0x2ae138(([, _0x200cc3]) => _0x200cc3),
      ),
    ).pipe(_0x5ebaa8(), _0x2ae138(si));
    this._canvasFloatDomService["updateFloatDom"](_0x2e6918, {
      position$: _0x553da5,
    });
  }
  _restoreFloatDomPositionStream(_0x3ac81d) {
    let _0x5a8fe5 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x3ac81d);
    _0x5a8fe5 &&
      this._canvasFloatDomService["updateFloatDom"](_0x3ac81d, {
        position$: _0x5a8fe5.position$,
      });
  }
  _getChartSnapshotKey(_0x4f0bd5) {
    let _0x4d1116 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x4f0bd5);
    return _0x4d1116
      ? {
          unitId: _0x4d1116.unitId,
          subUnitId: _0x4d1116.subUnitId,
          chartId: _0x4f0bd5,
        }
      : null;
  }
  _requestChartCanvasRender(_0x291f2c) {
    var _0x53fbd5, _0x340a54, _0x4aa0fd;
    let _0x29ab0d =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x291f2c);
    if (!_0x29ab0d) return;
    let _0x58bf9e =
        (_0x53fbd5 = this._renderManagerService["getRenderUnitById"](
          _0x29ab0d.unitId,
        )) == null
          ? undefined
          : _0x53fbd5.scene,
      _0x8537dc =
        (_0x58bf9e == null ||
        (_0x340a54 = _0x58bf9e.getObjectIncludeInGroup) == null
          ? undefined
          : _0x340a54.call(
              _0x58bf9e,
              _0x12b4d2({
                unitId: _0x29ab0d.unitId,
                subUnitId: _0x29ab0d.subUnitId,
                drawingId: _0x291f2c,
              }),
            )) ??
        (_0x58bf9e == null
          ? undefined
          : _0x58bf9e.getObject(
              _0x12b4d2({
                unitId: _0x29ab0d.unitId,
                subUnitId: _0x29ab0d.subUnitId,
                drawingId: _0x291f2c,
              }),
            )) ??
        null;
    (_0x8537dc == null ||
      (_0x4aa0fd = _0x8537dc.makeDirty) == null ||
      _0x4aa0fd.call(_0x8537dc, true),
      _0x58bf9e == null || _0x58bf9e.makeDirty(true));
  }
  _getHostPlacement(_0x3f7a2d) {
    let _0x38dac1 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x3f7a2d);
    if (!_0x38dac1) return null;
    let _0x1925da = this._getSceneAndTransformerByDrawingSearch(
        _0x38dac1.unitId,
      ),
      _0x9bee65 = _0x1925da == null ? undefined : _0x1925da.scene,
      _0xfb5025 = document.getElementById(_0x38dac1.domId ?? _0x3f7a2d);
    return Jr(
      _0x38dac1.rect,
      {
        scaleX: (_0x9bee65 == null ? undefined : _0x9bee65.scaleX) ?? 1,
        scaleY: (_0x9bee65 == null ? undefined : _0x9bee65.scaleY) ?? 1,
      },
      _0xfb5025
        ? { left: _0xfb5025.offsetLeft, top: _0xfb5025.offsetTop }
        : undefined,
    );
  }
  dispose() {
    this._disposed ||
      (this._chartHostMap["forEach"]((_0xa37049) => _0xa37049.dispose()),
      this._chartHostMap["clear"](),
      this._activeDomReadyChartIds["clear"](),
      this._removeHost$["complete"](),
      super.dispose());
  }
};
li = J(
  [
    q(0, _0x5b0a50(_0x474276)),
    q(1, _0x5b0a50(_0x383c23)),
    q(2, _0x5b0a50(ni)),
    q(3, _0x5b0a50(_0x1cb827)),
  ],
  li,
);
const ui = _0x1f298c("sheets-chart-ui.host.provider"),
  di = _0x571401.Image;
var fi = class extends _0x19f07c {
  constructor(_0x32c3e2, _0x5149a2) {
    (super(_0x32c3e2),
      (this._rect = _0x5149a2),
      G(this, "_version", 0),
      G(this, "_image", undefined),
      G(this, "style", {}));
  }
  getRect() {
    return this._rect;
  }
  setStyle(_0x15b0e8) {
    this.style = _0x15b0e8;
  }
  nextVersion() {
    return ++this._version;
  }
  commitSnapshot(_0x1d5715, _0x3465d8) {
    return _0x3465d8 === this._version
      ? (K(this._image), (this._image = _0x1d5715), true)
      : (K(_0x1d5715), false);
  }
  requestPaint() {}
  invalidateSnapshot() {
    this._version += 1;
  }
  takeSnapshot() {
    let _0x115c28 = this._image;
    return ((this._image = undefined), _0x115c28);
  }
  dispose() {
    (K(this._image), (this._image = undefined), super.dispose());
  }
};
function pi(_0xd798de, _0x2bd7bd, _0x1dfeb0) {
  let _0x49483b = _0xd798de.getRuntimeContext(_0x2bd7bd);
  return _0xb42d16(
    {
      ..._0xd798de.style,
      runtime: {
        ..._0x49483b,
        layoutInset: 8,
        ...(_0x1dfeb0 === undefined ? {} : { addWatermark: _0x1dfeb0 }),
      },
      direction: _0x2bd7bd,
    },
    _0xd798de.chartType,
  );
}
let Y = class extends _0x352eaa {
  constructor(
    _0x201f09,
    _0x399689,
    _0x456242,
    _0x485bba,
    _0x10a59f,
    _0x18cee9,
    _0x427105,
    _0x187363,
    _0x473e22,
    _0x1a1e5c,
    _0x1f1a96,
    _0x22b597,
    _0x107e1c,
  ) {
    (super(),
      (this._chartHostProvider = _0x201f09),
      (this._sheetCanvasFloatDomManagerService = _0x399689),
      (this._chartModelService = _0x456242),
      (this._drawingManagerService = _0x485bba),
      (this._univerInstanceService = _0x10a59f),
      (this._renderManagerService = _0x18cee9),
      (this._localeService = _0x427105),
      (this._injector = _0x187363),
      (this._chartThemeService = _0x473e22),
      (this._themeService = _0x1a1e5c),
      (this._configService = _0x1f1a96),
      (this._chartSnapshotStoreService = _0x22b597),
      (this._renderModelManager = _0x107e1c),
      G(this, "_chartInstanceMap", new Map()),
      G(this, "_chartEventHandlers", new Map()),
      G(this, "_chartEventSubscriptions", new Map()),
      G(this, "_chartElementEditMode", new Map()),
      G(this, "_renderDebounceMap", new Map()),
      G(this, "_debounceHandleMap", new Map()),
      G(this, "_chartRenderMode", undefined),
      G(this, "_addWatermark", undefined),
      G(this, "_lastRenderInputMap", new Map()),
      G(this, "_dataUpdateAnimationChartIds", new Set()),
      G(this, "_dataUpdateAnimationTimers", new Map()),
      G(this, "_activeChartId", null),
      G(this, "_lastActiveSheet", null));
    let _0x53c4c9 = _0x565c3d(this._injector),
      _0x1fbc81 = this._configService["getConfig"](_0x3e0f0c);
    ((this._chartRenderMode =
      (_0x1fbc81 == null ? undefined : _0x1fbc81.chartRenderMode) ?? di),
      (this._addWatermark = _0x53c4c9.length !== 1 || _0x53c4c9[0] !== "all"),
      this._registerChartImageRenderObjectFactory(),
      this._initActiveChartModelListener(),
      this._initDrawingDeactivationListener(),
      this._initActiveRuntimeLayerListener(),
      this.handleActiveSubUnitChange());
  }
  getChartSnapshotImage(_0x63d028) {
    let _0x5b4f8a = this._getChartSnapshotKey(_0x63d028);
    return _0x5b4f8a
      ? this._chartSnapshotStoreService["getImage"](_0x5b4f8a)
      : undefined;
  }
  _resolveChartRenderMode(_0x1f0d1c) {
    var _0x2b16a6;
    return ((_0x2b16a6 = this._chartModelService["activeChartModel"]) == null
      ? undefined
      : _0x2b16a6.id) === _0x1f0d1c
      ? _0x571401.Dom
      : this._chartRenderMode;
  }
  _getChartSnapshotKey(_0x53ee82) {
    let _0x431976 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x53ee82);
    return _0x431976
      ? {
          unitId: _0x431976.unitId,
          subUnitId: _0x431976.subUnitId,
          chartId: _0x53ee82,
        }
      : null;
  }
  _registerChartImageRenderObjectFactory() {
    this._chartRenderMode === _0x571401.Image &&
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["registerRenderObjectFactory"](
          _0x8f911e.DRAWING_CHART,
          ({
            key: _0x542dea,
            config: _0x4209c6,
            unitId: _0x18daee,
            subUnitId: _0x95f8a,
            drawingId: _0x2ccdf5,
          }) =>
            new Qr(
              _0x542dea,
              _0x4209c6,
              () =>
                this._chartSnapshotStoreService["getImage"]({
                  unitId: _0x18daee,
                  subUnitId: _0x95f8a,
                  chartId: _0x2ccdf5,
                }),
              () => this._chartHostProvider["isDomReady"](_0x2ccdf5),
            ),
        ),
      );
  }
  _initActiveChartModelListener() {
    this.disposeWithMe(
      this._chartModelService["activeChartModel$"].subscribe((_0x296fa4) => {
        let _0x38df3b = (_0x296fa4 == null ? undefined : _0x296fa4.id) ?? null,
          _0x444f7f = this._activeChartId;
        _0x444f7f !== _0x38df3b &&
          (_0x444f7f &&
            (this._chartHostProvider["markHostNotReady"](_0x444f7f),
            this._resetChartRuntimeZIndex(_0x444f7f),
            this._disposeChartDomInstance(_0x444f7f)),
          (this._activeChartId = _0x38df3b),
          _0x38df3b &&
            (this._deactivateDataUpdateAnimation(_0x38df3b),
            this._chartHostProvider["markHostNotReady"](_0x38df3b),
            this._applyActiveChartRuntimeZIndex(_0x38df3b),
            this._rerenderLatest(_0x38df3b)));
      }),
    );
  }
  _initDrawingDeactivationListener() {
    (this.disposeWithMe(
      this._drawingManagerService["featurePluginGroupUpdate$"].subscribe(
        (_0x49d07c) => {
          var _0x13d3f6;
          let _0x1fb6ce =
            (_0x13d3f6 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x13d3f6.id;
          _0x1fb6ce &&
            _0x49d07c.some((_0x4e8290) =>
              _0x4e8290.children["some"](
                (_0x22da59) => _0x22da59.drawingId === _0x1fb6ce,
              ),
            ) &&
            this._chartModelService["setActiveChartModel"](null);
        },
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["featurePluginUngroupUpdate$"].subscribe(
          (_0x465f08) => {
            var _0x27d9ac;
            let _0x2ff20d =
              (_0x27d9ac = this._chartModelService["activeChartModel"]) == null
                ? undefined
                : _0x27d9ac.id;
            _0x2ff20d &&
              _0x465f08.some(
                (_0x3eb8c0) =>
                  _0x3eb8c0.parent["drawingId"] === _0x2ff20d ||
                  _0x3eb8c0.children["some"](
                    (_0x479a18) => _0x479a18.drawingId === _0x2ff20d,
                  ),
              ) &&
              this._chartModelService["setActiveChartModel"](null);
          },
        ),
      ));
  }
  _initActiveRuntimeLayerListener() {
    (this.disposeWithMe(
      this._drawingManagerService["featurePluginOrderUpdate$"].subscribe(
        (_0x1b9346) => {
          var _0x256b4f;
          let _0x42004d =
            (_0x256b4f = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x256b4f.id;
          if (!_0x42004d) {
            _0x1b9346.drawingIds["forEach"]((_0x236270) => {
              this._chartModelService["getChartModel"](_0x236270) &&
                this._resetChartRuntimeZIndex(_0x236270);
            });
            return;
          }
          let _0x508ee5 =
            this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
              _0x42004d,
            );
          (_0x508ee5 == null ? undefined : _0x508ee5.unitId) ===
            _0x1b9346.unitId &&
            _0x508ee5.subUnitId === _0x1b9346.subUnitId &&
            this._applyActiveChartRuntimeZIndex(_0x42004d);
        },
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["add$"].subscribe((_0x114b93) => {
          var _0x4965c9;
          let _0x51f957 =
            (_0x4965c9 = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x4965c9.id;
          if (!_0x51f957) return;
          let _0x10d2e9 =
            this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
              _0x51f957,
            );
          _0x10d2e9 &&
            _0x114b93.some(
              (_0x3bcc14) =>
                _0x3bcc14.unitId === _0x10d2e9.unitId &&
                _0x3bcc14.subUnitId === _0x10d2e9.subUnitId,
            ) &&
            this._applyActiveChartRuntimeZIndex(_0x51f957);
        }),
      ),
      this.disposeWithMe(
        this._chartModelService["chartModelRemoved$"].subscribe((_0x27eacf) => {
          var _0x24194e;
          (this._deactivateDataUpdateAnimation(_0x27eacf),
            this._lastRenderInputMap["delete"](_0x27eacf),
            this._chartSnapshotStoreService["clearChart"](_0x27eacf),
            this._clearChartRuntimeCache(_0x27eacf),
            this._chartHostProvider["markHostNotReady"](_0x27eacf),
            ((_0x24194e = this._chartModelService["activeChartModel"]) == null
              ? undefined
              : _0x24194e.id) === _0x27eacf
              ? this._chartModelService["setActiveChartModel"](null)
              : this._resetChartRuntimeZIndex(_0x27eacf),
            this._disposeChartRenderInstance(_0x27eacf));
        }),
      ));
  }
  _rerenderLatest(_0x5b5381) {
    let _0x4c28a5 = this._lastRenderInputMap["get"](_0x5b5381);
    _0x4c28a5 && this.render(_0x5b5381, _0x4c28a5.config, _0x4c28a5.style);
  }
  _disposeChartDomInstance(_0x3be8e6) {
    let _0x356cd7 = this._chartInstanceMap["get"](_0x3be8e6);
    ((_0x356cd7 == null ? undefined : _0x356cd7.mode) === "dom" &&
      (this._disposeChartEventSubscriptions(_0x3be8e6),
      _0x356cd7.dispose(),
      this._chartInstanceMap["delete"](_0x3be8e6)),
      this._chartHostProvider["markHostNotReady"](_0x3be8e6),
      this._chartHostProvider["removeHost"](_0x3be8e6));
  }
  _disposeChartRenderInstance(_0x333a91) {
    let _0x3d084a = this._chartInstanceMap["get"](_0x333a91);
    (_0x3d084a &&
      (this._disposeChartEventSubscriptions(_0x333a91),
      _0x3d084a.dispose(),
      this._chartInstanceMap["delete"](_0x333a91)),
      this._chartHostProvider["markHostNotReady"](_0x333a91),
      this._chartHostProvider["removeHost"](_0x333a91));
  }
  _clearChartRuntimeCache(_0x44a0e2) {
    var _0x2cb4c4, _0x524fe5;
    (_0x2cb4c4 = this._renderModelManager["getRenderModel"](_0x3ad1c6)) ==
      null ||
      (_0x524fe5 = _0x2cb4c4.clearRuntimeCache) == null ||
      _0x524fe5.call(_0x2cb4c4, _0x44a0e2);
  }
  _clearSheetChartRuntimeCaches(_0x227e5e, _0x3e509c) {
    let _0x1d0c91 = this._drawingManagerService["getDrawingData"](
      _0x227e5e,
      _0x3e509c,
    );
    Object.values(_0x1d0c91 ?? {}).forEach((_0x1be63a) => {
      _0x1be63a.drawingType === _0x8f911e.DRAWING_CHART &&
        this._clearChartRuntimeCache(_0x1be63a.drawingId);
    });
  }
  _getChartRenderObject(_0x500305, _0x3a4f1a) {
    var _0x52938a;
    return (
      ((_0x52938a = _0x500305.getObjectIncludeInGroup) == null
        ? undefined
        : _0x52938a.call(_0x500305, _0x3a4f1a)) ??
      _0x500305.getObject(_0x3a4f1a) ??
      null
    );
  }
  _getChartRenderObjectContext(_0x42ef62) {
    var _0x15ec6d;
    let _0x96bd6b =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x42ef62);
    if (!_0x96bd6b) return null;
    let _0x1e736e =
      (_0x15ec6d = this._renderManagerService["getRenderUnitById"](
        _0x96bd6b.unitId,
      )) == null
        ? undefined
        : _0x15ec6d.scene;
    if (!_0x1e736e) return null;
    let _0x2b202c = this._getChartRenderObject(
      _0x1e736e,
      _0x12b4d2({
        unitId: _0x96bd6b.unitId,
        subUnitId: _0x96bd6b.subUnitId,
        drawingId: _0x42ef62,
      }),
    );
    return _0x2b202c
      ? { info: _0x96bd6b, scene: _0x1e736e, chartObject: _0x2b202c }
      : null;
  }
  _setChartRuntimeZIndex(_0x3645e3, _0x1d4a2c) {
    var _0x5971fa, _0x262186, _0x28fea8, _0x4abb9f;
    let _0x18b87c = this._getChartRenderObjectContext(_0x3645e3);
    _0x18b87c &&
      ((_0x5971fa = (_0x262186 = _0x18b87c.chartObject).setProps) == null ||
        _0x5971fa.call(_0x262186, { zIndex: _0x1d4a2c }),
      (_0x28fea8 = (_0x4abb9f = _0x18b87c.chartObject).makeDirty) == null ||
        _0x28fea8.call(_0x4abb9f, true),
      _0x18b87c.scene["makeDirty"](true));
  }
  _applyActiveChartRuntimeZIndex(_0x18bd4a) {
    let _0x1af3d8 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x18bd4a);
    if (!_0x1af3d8) return;
    let _0xa42e27 = this._drawingManagerService["getDrawingOrder"](
      _0x1af3d8.unitId,
      _0x1af3d8.subUnitId,
    );
    this._setChartRuntimeZIndex(_0x18bd4a, _0xa42e27.length);
  }
  _resetChartRuntimeZIndex(_0xceca16) {
    let _0xa8dbd4 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0xceca16);
    if (!_0xa8dbd4) return;
    let _0x30ae66 = this._drawingManagerService["getDrawingOrder"](
        _0xa8dbd4.unitId,
        _0xa8dbd4.subUnitId,
      ),
      _0x4e9b70 = _0x30ae66.indexOf(_0xceca16);
    this._setChartRuntimeZIndex(
      _0xceca16,
      _0x4e9b70 === -1 ? Math.max(_0x30ae66.length - 1, 0) : _0x4e9b70,
    );
  }
  _resizeChart(_0x349c76, _0x4ce9d7) {
    let _0xda5c39 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x349c76);
    if (
      _0x4ce9d7.width !== undefined &&
      _0x4ce9d7.height !== undefined &&
      _0xda5c39
    ) {
      var _0x76b2e7;
      let { subUnitId: _0x3d25d3 } = _0xda5c39,
        _0x2f949c =
          (_0x76b2e7 = this._univerInstanceService["getCurrentUnitOfType"](
            _0x1139b3.UNIVER_SHEET,
          )) == null
            ? undefined
            : _0x76b2e7.getActiveSheet();
      if (
        (_0x2f949c == null ? undefined : _0x2f949c.getSheetId()) === _0x3d25d3
      ) {
        let { width: _0xa36c25, height: _0x35e34e } = _0x4ce9d7,
          _0x156f60 = this._chartModelService["getChartModel"](_0x349c76),
          _0x54d4af = _0x156f60 == null ? undefined : _0x156f60.style;
        if (
          Math.abs(
            _0xa36c25 -
              ((_0x54d4af == null ? undefined : _0x54d4af.width) || 0),
          ) > 1 ||
          Math.abs(
            _0x35e34e -
              ((_0x54d4af == null ? undefined : _0x54d4af.height) || 0),
          ) > 1
        ) {
          _0x156f60 == null ||
            _0x156f60.assignStyle({
              ..._0x54d4af,
              width: _0xa36c25,
              height: _0x35e34e,
            });
          let _0x2f4fcf = this._chartInstanceMap["get"](_0x349c76);
          _0x2f4fcf &&
            (this._chartHostProvider["syncHostLayout"](_0x349c76),
            _0x2f4fcf.resize());
        }
      }
    }
  }
  _debounceHandle(_0x4cd266, _0x9b104, _0xbab77f = 0) {
    let _0x5bfd73 = this._debounceHandleMap["get"](_0x4cd266);
    (_0x5bfd73 ||
      ((_0x5bfd73 = _0x388049((_0x12c00a) => {
        this._resizeChart(_0x4cd266, _0x12c00a);
      }, _0xbab77f)),
      this._debounceHandleMap["set"](_0x4cd266, _0x5bfd73)),
      _0x5bfd73(_0x9b104));
  }
  handleActiveSubUnitChange() {
    let _0x6d28b2 = this._renderDebounceMap,
      _0x179408 = (_0x38704f) => {
        if (!_0x6d28b2.has(_0x38704f)) {
          let _0x264e10 = _0x388049(
            (_0x224007, _0x90c8a3, _0x4ede35, _0x56b391) => {
              var _0x580408, _0x34abd6;
              if (!_0x4ede35) return;
              ((_0x580408 = _0x4ede35.category) == null ||
                _0x580408.items["forEach"]((_0x31e032, _0x3970d8) => {
                  _0x31e032.label ||=
                    this._localeService["t"](
                      "sheets-chart-ui.common.category",
                    ) +
                    "\x20" +
                    (_0x3970d8 + 1);
                }),
                _0x4ede35.series["forEach"]((_0x339888, _0x2f43e0) => {
                  _0x339888.name ||=
                    this._localeService["t"]("sheets-chart-ui.chord.target") +
                    "\x20" +
                    (_0x2f43e0 + 1);
                }));
              let _0x430f1d = this.createRuntimeChartStyle(
                  _0x224007,
                  _0x56b391,
                ),
                _0x13160f =
                  (_0x34abd6 = this._univerInstanceService[
                    "getCurrentUnitOfType"
                  ](_0x1139b3.UNIVER_SHEET)) == null
                    ? undefined
                    : _0x34abd6.getActiveSheet();
              (_0x13160f == null ? undefined : _0x13160f.getSheetId()) ===
                _0x90c8a3 && this.render(_0x224007.id, _0x4ede35, _0x430f1d);
            },
            17,
          );
          _0x6d28b2.set(_0x38704f, _0x264e10);
        }
        return _0x6d28b2.get(_0x38704f);
      };
    (this.disposeWithMe(
      this._univerInstanceService["focused$"].subscribe((_0x3c729e) => {
        let _0x9dc052 = this._univerInstanceService["getCurrentUnitOfType"](
          _0x1139b3.UNIVER_SHEET,
        );
        if (_0x3c729e && _0x9dc052 && _0x9dc052.getUnitId() === _0x3c729e) {
          var _0x10bc29;
          let _0x53872a = _0x9dc052.getActiveSheet().getSheetId();
          (this._lastActiveSheet &&
            (this._lastActiveSheet["unitId"] !== _0x3c729e ||
              this._lastActiveSheet["subUnitId"] !== _0x53872a) &&
            this._clearSheetChartRuntimeCaches(
              this._lastActiveSheet["unitId"],
              this._lastActiveSheet["subUnitId"],
            ),
            (this._lastActiveSheet = {
              unitId: _0x3c729e,
              subUnitId: _0x53872a,
            }));
          let _0x4052fc = this._drawingManagerService["getDrawingData"](
            _0x3c729e,
            _0x53872a,
          );
          if (!(
            (_0x10bc29 =
              this._renderManagerService["getRenderUnitById"](_0x3c729e)) !=
              null && _0x10bc29.with(_0x17ebbb).getSkeleton(_0x53872a)
          ))
            return;
          if (_0x4052fc)
            for (let _0x404852 in _0x4052fc) {
              let { drawingId: _0x3cfa06 } = _0x4052fc[_0x404852],
                _0x476b6b = this._chartModelService["getChartModel"](_0x3cfa06);
              _0x476b6b &&
                _0x179408(_0x476b6b.id)(
                  _0x476b6b,
                  _0x53872a,
                  _0x476b6b.config,
                  this._localeService["getDirection"](),
                );
            }
        }
      }),
    ),
      this.disposeWithMe(
        this._themeService["darkMode$"].subscribe(() => {
          var _0x62b2f9;
          let _0x45fcfd = this._univerInstanceService["getCurrentUnitOfType"](
            _0x1139b3.UNIVER_SHEET,
          );
          if (!_0x45fcfd) return;
          let _0x4ad5c3 = _0x45fcfd.getUnitId(),
            _0x425087 = _0x45fcfd.getActiveSheet().getSheetId(),
            _0x3568dd = this._drawingManagerService["getDrawingData"](
              _0x4ad5c3,
              _0x425087,
            );
          if (
            (_0x62b2f9 =
              this._renderManagerService["getRenderUnitById"](_0x4ad5c3)) !=
              null &&
            _0x62b2f9.with(_0x17ebbb).getSkeleton(_0x425087) &&
            _0x3568dd
          )
            for (let _0x432b9e in _0x3568dd) {
              let { drawingId: _0x3e25a3 } = _0x3568dd[_0x432b9e],
                _0x1967a5 = this._chartModelService["getChartModel"](_0x3e25a3);
              _0x1967a5 &&
                _0x179408(_0x1967a5.id)(
                  _0x1967a5,
                  _0x425087,
                  _0x1967a5.config,
                  this._localeService["getDirection"](),
                );
            }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["add$"].subscribe((_0x1a39b5) => {
          _0x1a39b5.forEach((_0x56c536) => {
            var _0x3019eb;
            let {
                drawingId: _0x39f8b4,
                unitId: _0x287903,
                subUnitId: _0x40d0af,
              } = _0x56c536,
              _0x125bd5 =
                this._renderManagerService["getRenderUnitById"](_0x287903);
            if (
              (_0x125bd5 == null ? undefined : _0x125bd5.type) !==
                _0x1139b3.UNIVER_SHEET ||
              !_0x125bd5.with(_0x17ebbb).getSkeleton(_0x40d0af)
            )
              return;
            let { drawingType: _0x3c06f2 } =
              this._drawingManagerService["getDrawingByParam"](_0x56c536);
            if (_0x3c06f2 !== _0x8f911e.DRAWING_CHART) return;
            let _0x5697e0 =
                this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
                  _0x39f8b4,
                ),
              _0x19fdbc =
                (_0x5697e0 == null ? undefined : _0x5697e0.domId) ?? _0x39f8b4,
              _0x4996fd = _0x5697e0 == null ? undefined : _0x5697e0.rect,
              _0x7d624c =
                (_0x3019eb =
                  this._renderManagerService["getRenderUnitById"](_0x287903)) ==
                null
                  ? undefined
                  : _0x3019eb.scene;
            (_0x4996fd &&
              this.disposeWithMe(
                _0x4996fd == null
                  ? undefined
                  : _0x4996fd.onTransformChange$["subscribeEvent"](
                      (_0x52663b) => {
                        let { type: _0x45d5e0, value: _0x3473c2 } = _0x52663b;
                        if (
                          _0x2bb35f.resize === _0x45d5e0 ||
                          _0x2bb35f.all === _0x45d5e0
                        ) {
                          let { width: _0x1ee691, height: _0x234c0b } =
                            _0x3473c2;
                          this._debounceHandle(
                            _0x39f8b4,
                            { width: _0x1ee691, height: _0x234c0b },
                            100,
                          );
                        }
                      },
                    ),
              ),
              _0x7d624c &&
                this.disposeWithMe(
                  _0x7d624c.onTransformChange$["subscribeEvent"](
                    (_0x3eb03d) => {
                      var _0x1f0599;
                      _0x3eb03d.type === _0x2bb35f.scale &&
                        (_0x1f0599 = document.getElementById(_0x19fdbc)) !=
                          null &&
                        _0x1f0599.querySelector(".chart-host") &&
                        this._chartHostProvider["syncHostLayout"](_0x39f8b4);
                    },
                  ),
                ));
            let _0x3bad83 = this._chartModelService["getChartModel"](_0x39f8b4);
            _0x3bad83 &&
              this.disposeWithMe(
                _0x585947([
                  _0x3bad83.config$,
                  _0x3bad83.style$,
                  this._localeService["direction$"],
                ]).subscribe(([_0x3d2eea, _0x4ba643, _0x3627a9]) => {
                  _0x179408(_0x3bad83.id)(
                    _0x3bad83,
                    _0x40d0af,
                    _0x3d2eea,
                    _0x3627a9,
                  );
                }),
              );
          });
        }),
      ),
      this.disposeWithMe(
        _0x585947([this._drawingManagerService["remove$"]]).subscribe(
          ([_0xc59bd8]) => {
            _0xc59bd8.forEach((_0x2f397a) => {
              var _0x3ca9fe;
              let { drawingId: _0x33b01a } = _0x2f397a;
              (((_0x3ca9fe = this._chartModelService["activeChartModel"]) ==
              null
                ? undefined
                : _0x3ca9fe.id) === _0x33b01a &&
                this._chartModelService["setActiveChartModel"](null),
                this._disposeChartEventSubscriptions(_0x33b01a),
                this._chartEventHandlers["delete"](_0x33b01a),
                this._chartHostProvider["markHostNotReady"](_0x33b01a),
                this._resetChartRuntimeZIndex(_0x33b01a),
                this._disposeChartRenderInstance(_0x33b01a),
                this._chartSnapshotStoreService["clearChart"](_0x33b01a),
                this._clearChartRuntimeCache(_0x33b01a),
                this._lastRenderInputMap["delete"](_0x33b01a),
                this._chartElementEditMode["delete"](_0x33b01a));
            });
          },
        ),
      ));
  }
  setElementEditMode(_0x4693a4, _0x921214) {
    var _0xa202d5;
    (_0x921214
      ? this._chartElementEditMode["set"](_0x4693a4, true)
      : this._chartElementEditMode["delete"](_0x4693a4),
      (_0xa202d5 = this._chartInstanceMap["get"](_0x4693a4)) == null ||
        _0xa202d5.setElementEditMode(_0x921214));
  }
  async exportImage(_0x17d399, _0x46e0ea) {
    var _0x2af44a;
    let _0x495c69 = this._lastRenderInputMap["get"](_0x17d399),
      _0x18bc48 =
        (_0x2af44a =
          this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](
            _0x17d399,
          )) == null
          ? undefined
          : _0x2af44a.rect;
    if (_0x495c69 && _0x18bc48)
      return (
        await this._renderModelManager["exportImage"](
          {
            chartId: _0x17d399,
            config: _0x495c69.config,
            style: _0x495c69.style,
            width: _0x18bc48.width,
            height: _0x18bc48.height,
          },
          _0x46e0ea,
        )
      ).dataUrl;
    if ((_0x46e0ea == null ? undefined : _0x46e0ea.format) === _0x14b6c3.SVG)
      return;
    let _0x3e480e = this._getCurrentSnapshotImage(_0x17d399);
    return _0x3e480e ? _0x2a4b81(_0x3e480e) : undefined;
  }
  on(_0x3f13bd, _0xf4ea5c, _0x3793e7) {
    let _0x34df15 = this._chartEventHandlers["get"](_0x3f13bd);
    _0x34df15 ||
      ((_0x34df15 = new Map()),
      this._chartEventHandlers["set"](_0x3f13bd, _0x34df15));
    let _0x430f25 = _0x34df15.get(_0xf4ea5c);
    (_0x430f25 ||
      ((_0x430f25 = new Set()), _0x34df15.set(_0xf4ea5c, _0x430f25)),
      _0x430f25.add(_0x3793e7));
    let _0x56705f = this._chartInstanceMap["get"](_0x3f13bd);
    return (
      _0x56705f &&
        this._bindChartEventHandler(_0x3f13bd, _0x56705f, _0xf4ea5c, _0x3793e7),
      {
        dispose: () => {
          var _0x182dd2;
          ((_0x182dd2 = this._chartEventHandlers["get"](_0x3f13bd)) == null ||
            (_0x182dd2 = _0x182dd2.get(_0xf4ea5c)) == null ||
            _0x182dd2.delete(_0x3793e7),
            this._disposeChartEventSubscription(
              _0x3f13bd,
              _0xf4ea5c,
              _0x3793e7,
            ));
        },
      }
    );
  }
  _getCurrentSnapshotImage(_0x180536) {
    let _0x55f5b1 = this._univerInstanceService["getCurrentUnitOfType"](
        _0x1139b3.UNIVER_SHEET,
      ),
      _0x49ea22 = _0x55f5b1 == null ? undefined : _0x55f5b1.getActiveSheet(),
      _0x37ec1d = _0x55f5b1 == null ? undefined : _0x55f5b1.getUnitId(),
      _0x3dfd80 = _0x49ea22 == null ? undefined : _0x49ea22.getSheetId();
    if (!(!_0x37ec1d || !_0x3dfd80))
      return this._chartSnapshotStoreService["getImage"]({
        unitId: _0x37ec1d,
        subUnitId: _0x3dfd80,
        chartId: _0x180536,
      });
  }
  _bindChartEventHandlers(_0x4ce1cd, _0x28ff51) {
    let _0x2696f9 = this._chartEventHandlers["get"](_0x4ce1cd);
    _0x2696f9 &&
      _0x2696f9.forEach((_0x5c0834, _0x1fe6b3) => {
        _0x5c0834.forEach((_0x256406) =>
          this._bindChartEventHandler(
            _0x4ce1cd,
            _0x28ff51,
            _0x1fe6b3,
            _0x256406,
          ),
        );
      });
  }
  _bindChartEventHandler(_0x3b5188, _0x7572be, _0x4089bc, _0x557690) {
    let _0x1e0d45 = this._chartEventSubscriptions["get"](_0x3b5188);
    _0x1e0d45 ||
      ((_0x1e0d45 = new Map()),
      this._chartEventSubscriptions["set"](_0x3b5188, _0x1e0d45));
    let _0x5d8287 = _0x1e0d45.get(_0x4089bc);
    (_0x5d8287 ||
      ((_0x5d8287 = new Map()), _0x1e0d45.set(_0x4089bc, _0x5d8287)),
      !_0x5d8287.has(_0x557690) &&
        _0x5d8287.set(_0x557690, _0x7572be.on(_0x4089bc, _0x557690)));
  }
  _disposeChartEventSubscription(_0x548a8a, _0x2bb08a, _0x5c93aa) {
    var _0x1e0d04, _0x48775f;
    let _0x175d64 =
      (_0x1e0d04 = this._chartEventSubscriptions["get"](_0x548a8a)) == null
        ? undefined
        : _0x1e0d04.get(_0x2bb08a);
    (_0x175d64 == null ||
      (_0x48775f = _0x175d64.get(_0x5c93aa)) == null ||
      _0x48775f.dispose(),
      _0x175d64 == null || _0x175d64.delete(_0x5c93aa));
  }
  _disposeChartEventSubscriptions(_0x353c57) {
    let _0xf055f3 = this._chartEventSubscriptions["get"](_0x353c57);
    (_0xf055f3 == null ||
      _0xf055f3.forEach((_0x386b55) => {
        (_0x386b55.forEach((_0x4a570a) => _0x4a570a.dispose()),
          _0x386b55.clear());
      }),
      this._chartEventSubscriptions["delete"](_0x353c57));
  }
  createRuntimeChartStyle(_0x4a72b2, _0x436a2a) {
    return pi(_0x4a72b2, _0x436a2a, this._addWatermark);
  }
  checkChartCanRender(_0xd67024) {
    return this._getChartRenderSkipReason(_0xd67024) == null;
  }
  _getChartRenderSkipReason(_0x36f120) {
    var _0x48e5e9;
    let _0x39db95 =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x36f120);
    if (!_0x39db95) return "missing-float-dom";
    let { subUnitId: _0x237d17 } = _0x39db95,
      _0x1d5d1a =
        (_0x48e5e9 = this._univerInstanceService["getCurrentUnitOfType"](
          _0x1139b3.UNIVER_SHEET,
        )) == null
          ? undefined
          : _0x48e5e9.getActiveSheet();
    if (!_0x1d5d1a) return "missing-active-sheet";
    if (_0x1d5d1a.getSheetId() !== _0x237d17) return "inactive-sheet";
  }
  async render(_0x17163f, _0x20a17d, _0x24253c, _0x2081aa = {}) {
    let _0x46ae30 = this._renderModelManager["getRenderModel"](_0x3ad1c6);
    if (!_0x46ae30) return;
    let _0x4703c4 = this._lastRenderInputMap["get"](_0x17163f);
    if (
      (this._lastRenderInputMap["set"](_0x17163f, {
        config: _0x20a17d,
        style: _0x24253c,
      }),
      this._getChartRenderSkipReason(_0x17163f))
    )
      return;
    let {
      canAnimate: _0x274e62,
      renderMode: _0x3f309d,
      shouldStartTransientAnimation: _0x291519,
      transientAnimationActive: _0x237cdf,
    } = this._prepareDataUpdateRender(
      _0x17163f,
      _0x4703c4 != null,
      _0x2081aa.animateDataUpdate === true,
    );
    if (_0x3f309d === _0x571401.Image) this._disposeChartDomInstance(_0x17163f);
    else {
      var _0xd7dc78;
      (this._chartHostProvider["invalidateSnapshot"](_0x17163f),
        ((_0xd7dc78 = this._chartModelService["activeChartModel"]) == null
          ? undefined
          : _0xd7dc78.id) === _0x17163f &&
          this._applyActiveChartRuntimeZIndex(_0x17163f));
    }
    let _0x1458f6 =
        _0x3f309d === _0x571401.Image ? _0x571401.Image : _0x571401.Dom,
      _0x5f2c34 = await this._chartHostProvider["ensureHost"](
        _0x17163f,
        _0x1458f6,
      );
    if (!_0x5f2c34) {
      _0x291519 && this._deactivateDataUpdateAnimation(_0x17163f);
      return;
    }
    this._chartHostProvider["setDataUpdateAnimation"](
      _0x17163f,
      _0x237cdf ? _0x25730c : null,
    );
    let _0x2dd0c6 = this._getOrCreateChartRenderInstance(
      _0x17163f,
      _0x1458f6,
      _0x46ae30,
    );
    _0x2dd0c6.bind(_0x5f2c34);
    try {
      let _0x280e07 = {
        chartId: _0x17163f,
        config: _0x20a17d,
        style: _0x24253c,
      };
      (_0x274e62 && _0x4703c4 && _0x2dd0c6.renderTransition
        ? await _0x2dd0c6.renderTransition(
            {
              chartId: _0x17163f,
              config: _0x4703c4.config,
              style: _0x4703c4.style,
            },
            _0x280e07,
            { duration: _0x25730c },
          )
        : await _0x2dd0c6.render(_0x280e07),
        await this._cacheActiveDomChartSnapshot(
          _0x17163f,
          _0x3f309d,
          _0x2dd0c6,
        ),
        _0x274e62 &&
          _0x237cdf &&
          this._scheduleDataUpdateAnimationEnd(_0x17163f));
    } catch (_0x3d387f) {
      if (
        (_0x291519 && this._deactivateDataUpdateAnimation(_0x17163f),
        _0x3f309d !== _0x571401.Image)
      )
        throw _0x3d387f;
    }
  }
  async _cacheActiveDomChartSnapshot(_0x1af24e, _0x14f36b, _0x58e606) {
    var _0x321df6;
    if (
      _0x14f36b !== _0x571401.Dom ||
      ((_0x321df6 = this._chartModelService["activeChartModel"]) == null
        ? undefined
        : _0x321df6.id) !== _0x1af24e
    )
      return;
    let _0x2bb521 = await this._chartHostProvider["ensureHost"](
      _0x1af24e,
      _0x571401.Image,
    );
    if (!_0x2bb521) return;
    let _0x84d0d8 = _0x2bb521.nextVersion();
    try {
      let _0x48046c = await _0x58e606.exportImg();
      _0x48046c &&
        _0x2bb521.commitSnapshot(
          { type: _0x27f35b.Url, url: _0x48046c },
          _0x84d0d8,
        ) &&
        _0x2bb521.requestPaint();
    } catch {}
  }
  _prepareDataUpdateRender(_0x2dac29, _0x380919, _0x2e2bca) {
    let _0x53ba3a = this._resolveChartRenderMode(_0x2dac29),
      _0x3440b7 =
        _0x53ba3a === _0x571401.Dom &&
        _0x2e2bca &&
        _0x380919 &&
        this._canAnimateDataUpdate(_0x2dac29),
      _0x388c46 = this._dataUpdateAnimationChartIds["has"](_0x2dac29);
    return {
      canAnimate: _0x3440b7,
      renderMode: _0x388c46 ? _0x571401.Dom : _0x53ba3a,
      shouldStartTransientAnimation: false,
      transientAnimationActive: _0x388c46,
    };
  }
  _canAnimateDataUpdate(_0x3845e7) {
    var _0x464896, _0x34b146, _0x312382, _0x21d840;
    if (
      typeof document > "u" ||
      typeof window > "u" ||
      document.visibilityState === "hidden" ||
      ((_0x464896 = (_0x34b146 = window).matchMedia) != null &&
        (_0x464896 = _0x464896.call(
          _0x34b146,
          "(prefers-reduced-motion: reduce)",
        )) != null &&
        _0x464896.matches) ||
      ((_0x312382 = (_0x21d840 = window).matchMedia) != null &&
        (_0x312382 = _0x312382.call(_0x21d840, "print")) != null &&
        _0x312382.matches)
    )
      return false;
    let _0xee7940 = this._chartHostProvider["getHostClientRect"](_0x3845e7);
    return (
      _0xee7940 != null &&
      _0xee7940.width > 0 &&
      _0xee7940.height > 0 &&
      _0xee7940.right > 0 &&
      _0xee7940.bottom > 0 &&
      _0xee7940.left < window.innerWidth &&
      _0xee7940.top < window.innerHeight
    );
  }
  _activateDataUpdateAnimation(_0x2b97a7) {
    let _0xb92253 = this._dataUpdateAnimationTimers["get"](_0x2b97a7);
    (_0xb92253 &&
      (clearTimeout(_0xb92253),
      this._dataUpdateAnimationTimers["delete"](_0x2b97a7)),
      this._dataUpdateAnimationChartIds["add"](_0x2b97a7),
      this._chartHostProvider["setDataUpdateAnimation"](_0x2b97a7, _0x25730c));
  }
  _scheduleDataUpdateAnimationEnd(_0x4f5dc8) {
    let _0x1d6a9d = this._dataUpdateAnimationTimers["get"](_0x4f5dc8);
    _0x1d6a9d && clearTimeout(_0x1d6a9d);
    let _0x5647a9 = setTimeout(() => {
      (this._dataUpdateAnimationTimers["delete"](_0x4f5dc8),
        this._dataUpdateAnimationChartIds["delete"](_0x4f5dc8) &&
          (this._chartHostProvider["setDataUpdateAnimation"](_0x4f5dc8, null),
          this._disposeChartDomInstance(_0x4f5dc8),
          this._rerenderLatest(_0x4f5dc8)));
    }, _0x25730c);
    this._dataUpdateAnimationTimers["set"](_0x4f5dc8, _0x5647a9);
  }
  _deactivateDataUpdateAnimation(_0x1b668f) {
    let _0x460964 = this._dataUpdateAnimationTimers["get"](_0x1b668f);
    (_0x460964 &&
      (clearTimeout(_0x460964),
      this._dataUpdateAnimationTimers["delete"](_0x1b668f)),
      this._dataUpdateAnimationChartIds["delete"](_0x1b668f),
      this._chartHostProvider["setDataUpdateAnimation"](_0x1b668f, null));
  }
  async renderChartsForPrinting(_0x29e941, _0x42d670, _0x1c1e1f) {
    let _0x2fc1a1 = this._drawingManagerService["getDrawingData"](
        _0x29e941,
        _0x42d670,
      ),
      _0x318b2f = this._drawingManagerService["getDrawingOrder"](
        _0x29e941,
        _0x42d670,
      ),
      _0x17358c = Object.values(_0x2fc1a1 ?? {}).filter(
        (_0x5eae8d) =>
          _0x5eae8d.drawingType === _0x8f911e.DRAWING_CHART &&
          _0x5eae8d.hidden !== true,
      );
    await Promise.allSettled(
      _0x17358c.map(async (_0x479d37) => {
        let _0x5ce6d9 = await this._createPrintingChartObject(
          _0x479d37,
          _0x318b2f,
        );
        _0x5ce6d9 &&
          (_0x1c1e1f.addObject(_0x5ce6d9, _0xb8f9ec),
          _0x479d37.groupId &&
            _0x1dc2d9(
              {
                drawingId: _0x479d37.groupId,
                unitId: _0x29e941,
                subUnitId: _0x42d670,
              },
              _0x5ce6d9,
              _0x1c1e1f,
              this._drawingManagerService,
            ));
      }),
    );
  }
  async _createPrintingChartObject(_0x1e8a39, _0x9fde20) {
    let _0x1a063f = this._chartModelService["getChartModel"](
        _0x1e8a39.drawingId,
      ),
      _0x104aea = this._renderModelManager["getRenderModel"](_0x3ad1c6),
      _0x1efa3d = _0x1e8a39.transform,
      _0x231e20 = _0x1a063f == null ? undefined : _0x1a063f.config;
    if (
      !_0x1a063f ||
      !_0x104aea ||
      !_0x1efa3d ||
      !_0x231e20 ||
      _0x1efa3d.width == null ||
      _0x1efa3d.height == null
    )
      return null;
    let _0x40f775 = new fi(_0x1e8a39.drawingId, {
        width: _0x1efa3d.width,
        height: _0x1efa3d.height,
      }),
      _0x122a75 = _0x104aea.createChartInstance(
        _0x571401.Image,
        this._createChartRenderInstanceContext(),
      );
    _0x122a75.bind(_0x40f775);
    let _0x541cc6;
    try {
      await _0x122a75.render({
        chartId: _0x1e8a39.drawingId,
        config: _0x231e20,
        style: this.createRuntimeChartStyle(
          _0x1a063f,
          this._localeService["getDirection"](),
        ),
      });
    } catch (_0x239b7d) {
      console.error(
        "[ChartRender] Failed to render chart snapshot for printing",
        _0x239b7d,
      );
    } finally {
      ((_0x541cc6 = _0x40f775.takeSnapshot()),
        _0x122a75.dispose(),
        _0x40f775.dispose());
    }
    let _0x5bb3e8 = this._chartSnapshotStoreService["getImage"]({
        unitId: _0x1e8a39.unitId,
        subUnitId: _0x1e8a39.subUnitId,
        chartId: _0x1e8a39.drawingId,
      }),
      _0x353ca9 = _0x541cc6 ?? _0x5bb3e8;
    if (!_0x353ca9) return null;
    let _0x3ff20b = _0x9fde20.indexOf(_0x1e8a39.drawingId);
    return new Qr(
      _0x12b4d2(_0x1e8a39),
      {
        ..._0x1efa3d,
        ..._0x3c3f74,
        ...ci(_0x40f775.style),
        visible: true,
        zIndex:
          _0x3ff20b === -1 ? Math.max(_0x9fde20.length - 1, 0) : _0x3ff20b,
      },
      () => _0x353ca9,
      undefined,
      _0x541cc6 ? () => K(_0x541cc6) : undefined,
    );
  }
  _getOrCreateChartRenderInstance(_0x290bc2, _0x40ce64, _0x572add) {
    let _0x11cc87 = this._chartInstanceMap["get"](_0x290bc2);
    if ((_0x11cc87 == null ? undefined : _0x11cc87.mode) === _0x40ce64)
      return _0x11cc87;
    _0x11cc87 &&
      (this._disposeChartEventSubscriptions(_0x290bc2),
      _0x11cc87.dispose(),
      this._chartInstanceMap["delete"](_0x290bc2));
    let _0x108398 = _0x572add.createChartInstance(
      _0x40ce64,
      this._createChartRenderInstanceContext(),
    );
    return (
      this._chartInstanceMap["set"](_0x290bc2, _0x108398),
      _0x108398.setElementEditMode(
        this._chartElementEditMode["get"](_0x290bc2) === true,
      ),
      this._bindChartEventHandlers(_0x290bc2, _0x108398),
      _0x108398
    );
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({ style: _0x29c9cf }) =>
        _0x21d2b7({
          style: _0x29c9cf,
          getRenderColor: (_0x3bb85f) =>
            this._chartThemeService["getRenderColor"](_0x3bb85f),
        }),
      resolveRenderBackgroundColor: ({ style: _0x4f1a52 }) =>
        this._chartThemeService["getRenderColor"](_0x1e6b74(_0x4f1a52)),
    };
  }
  _cancelDebouncedCallbacks() {
    (this._renderDebounceMap["forEach"]((_0x2c0c1c) => _0x2c0c1c.cancel()),
      this._renderDebounceMap["clear"](),
      this._debounceHandleMap["forEach"]((_0x2dd157) => _0x2dd157.cancel()),
      this._debounceHandleMap["clear"]());
  }
  dispose() {
    (this._dataUpdateAnimationTimers["forEach"]((_0x112a02) =>
      clearTimeout(_0x112a02),
    ),
      this._dataUpdateAnimationTimers["clear"](),
      this._dataUpdateAnimationChartIds["clear"](),
      Array.from(this._chartInstanceMap["keys"]()).forEach((_0x3baf2c) =>
        this._disposeChartRenderInstance(_0x3baf2c),
      ),
      this._chartElementEditMode["clear"](),
      this._cancelDebouncedCallbacks(),
      this._lastRenderInputMap["clear"](),
      (this._activeChartId = null),
      (this._lastActiveSheet = null),
      super.dispose());
  }
};
Y = J(
  [
    q(0, ui),
    q(1, _0x5b0a50(_0x474276)),
    q(2, _0x5b0a50(_0x2cb440)),
    q(3, _0xe7d86),
    q(4, _0xf2e955),
    q(5, _0x5b0a50(_0x383c23)),
    q(6, _0x5b0a50(_0x2008b6)),
    q(7, _0x5b0a50(_0x57cf41)),
    q(8, _0x5b0a50(_0x54bfb0)),
    q(9, _0x5b0a50(_0x37b8fe)),
    q(10, _0x1999fa),
    q(11, _0x5b0a50(ni)),
    q(12, _0x5eb60f),
  ],
  Y,
);
const X = _0x1f298c("sheets-chart.ui.service");
let mi = class extends _0x15c546 {
  constructor(_0x4b51d4, _0x3862cd, _0x2f017e, _0x4cc0ca, _0xfb4585) {
    (super(_0xfb4585),
      (this._chartModelService = _0x4b51d4),
      (this._sheetsChartService = _0x3862cd),
      (this._commandService = _0x2f017e),
      (this._univerInstanceService = _0x4cc0ca),
      G(this, "_rangeSelectMode", false),
      G(this, "_chartEditorOpen$", new _0x873472(false)),
      G(this, "_panelRoute$", new _0x873472(null)),
      G(this, "chartEditorOpen$", this._chartEditorOpen$["asObservable"]()),
      G(this, "panelRoute$", this._panelRoute$["asObservable"]()));
  }
  get activeRuntimeModel() {
    return this._chartModelService["activeChartModel"] ?? null;
  }
  get chartEditorOpen() {
    return this._chartEditorOpen$["getValue"]();
  }
  get rangeSelectMode() {
    return this._rangeSelectMode;
  }
  setRangeSelectMode(_0x10f24d) {
    this._rangeSelectMode = _0x10f24d;
  }
  setChartEditorOpen(_0x5de1b2) {
    this._chartEditorOpen$["getValue"]() !== _0x5de1b2 &&
      this._chartEditorOpen$["next"](_0x5de1b2);
  }
  isElementEditModeActive(_0x45fdb4) {
    var _0x53a914;
    return (
      this.chartEditorOpen &&
      ((_0x53a914 = this._chartModelService["activeChartModel"]) == null
        ? undefined
        : _0x53a914.id) === _0x45fdb4
    );
  }
  setPanelRoute(_0x13d8b5, _0x4e0f67) {
    this._panelRoute$["next"]({ chartId: _0x13d8b5, route: _0x4e0f67 });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  setDataRange(_0x2989c5) {
    let _0x4f75a7 = this._chartModelService["activeChartModel"];
    _0x4f75a7 &&
      this._executeChartUpdateSourceConfig({
        chartModelId: _0x4f75a7.id,
        range: _0x2989c5,
      });
  }
  setOrientation(_0x116699) {
    let _0x30995c = this._chartModelService["activeChartModel"];
    if (!_0x30995c) return;
    let _0x14ce0b = this._sheetsChartService["getChartSourceSpec"](
      _0x30995c.id,
    );
    if (!_0x14ce0b || Array.isArray(_0x14ce0b)) return;
    let _0x46843f = {
      ..._0x14ce0b,
      isRowDirection: _0x116699 === _0x7b304e.Row,
    };
    this._executeChartUpdateSourceConfig({
      chartModelId: _0x30995c.id,
      range: _0x46843f,
    });
  }
  executeChartUpdateConfig(_0x417888) {
    var _0x40c983;
    this._commandService["executeCommand"](_0xa04db7.id, {
      ..._0x417888,
      unitId:
        ((_0x40c983 = this._univerInstanceService["getFocusedUnit"]()) == null
          ? undefined
          : _0x40c983.getUnitId()) ?? "",
    });
  }
  _executeChartUpdateSourceConfig(_0x2bcb1b) {
    var _0xdcb48;
    this._commandService["executeCommand"](_0x365152.id, {
      ..._0x2bcb1b,
      unitId:
        ((_0xdcb48 = this._univerInstanceService["getFocusedUnit"]()) == null
          ? undefined
          : _0xdcb48.getUnitId()) ?? "",
    });
  }
  dispose() {
    (this._chartEditorOpen$["complete"](),
      this._panelRoute$["complete"](),
      super.dispose());
  }
};
mi = J(
  [
    q(0, _0x5b0a50(_0x2cb440)),
    q(1, _0x5b0a50(_0x354de9)),
    q(2, _0x2956ab),
    q(3, _0xf2e955),
    q(4, _0x5b0a50(_0x548bb6)),
  ],
  mi,
);
var hi;
const gi = {
    axis: {
      ..._0x7b2bd3,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    funnel: _0x37ded8,
    heatmap: _0x5a2dc4,
    indicatorLine: _0x8319cf,
    legend: _0x2289d4,
    lineAndArea: _0x5336ff,
    pareto: _0x478cad,
    pie: _0x57f092,
    relation: { ..._0x42fbc2, useValueAsSymbolSize: true },
    radar: _0x429bd9,
    series: {
      ..._0x124ee6,
      radarFillOpacity: 0.2,
      rightAxis: {
        ltr: false,
        rtl:
          ((hi = _0x350845.allSeriesStyle) == null
            ? undefined
            : hi.rightYAxis) ?? false,
      },
    },
    style: _0x59c0fe,
    titles: _0x254826,
    trendline: _0x354001,
    waterfall: { ..._0x1175e1, useSubtotal: true },
    waterfallStyle: _0x3fda25,
    wordCloud: _0x13b9fe,
  },
  _i = (_0x56a2c8) =>
    _0x56a2c8.getCurrentUnitOfType(_0x1139b3.UNIVER_SHEET).getUnitId(),
  vi = (_0x10d412) => {
    var _0x56278d;
    return (_0x56278d = _0x10d412
      .getCurrentUnitOfType(_0x1139b3.UNIVER_SHEET)
      .getActiveSheet()) == null
      ? undefined
      : _0x56278d.getSheetId();
  },
  yi = [
    _0x3974b2.Line,
    _0x3974b2.Radar,
    _0x3974b2.WordCloud,
    _0x3974b2.Scatter,
    _0x3974b2.Funnel,
    _0x3974b2.Relation,
    _0x3974b2.Sankey,
    _0x3974b2.Heatmap,
    _0x3974b2.Boxplot,
    _0x3974b2.Candlestick,
    _0x3974b2.Histogram,
    _0x3974b2.Treemap,
    _0x3974b2.Sunburst,
    _0x3974b2.Gauge,
    _0x3974b2.Chord,
  ];
function bi() {
  let _0x36ca97 = _0x3a4ef3();
  return _0x2c400e(_0x347da6, {
    visible: yi.every((_0xc11b50) => !_0x14ed04.baseOn(_0x36ca97, _0xc11b50)),
  });
}
const xi = (_0x159ede) => {
  var _0xaea915;
  let _0x50661a = _0x2a48f0(X),
    _0x477c16 = _0x2a48f0(_0x2cb440),
    _0x48a2a8 = _0x2a48f0(_0x2008b6),
    _0x407010 = _0x565c3d(_0x2a48f0(_0x57cf41)),
    _0x3ed709 = _0x35977d(
      () =>
        _0x4d35cc(
          Ir(Pr.concat(), _0x407010).map((_0x7831d7) => ({
            id: _0x7831d7.id,
            label: _0x48a2a8.t(
              "sheets-chart-ui.chartTypes." + _0x7831d7.labelId,
            ),
            pieSecondaryPlotType: _0x7831d7.pieSecondaryPlotType,
            value: _0x7831d7.value,
          })),
        ),
      [_0x407010, _0x48a2a8],
    ),
    _0x48dafd = _0x3a3fa0(
      _0x477c16.activeChartModel$,
      _0x477c16.activeChartModel,
    ),
    _0x39b9ed = _0x3a3fa0(
      _0x48dafd == null ? undefined : _0x48dafd.dataSource$,
      _0x48dafd == null ? undefined : _0x48dafd.dataSource,
    ),
    _0xaac1a5 = _0x3a3fa0(
      _0x39b9ed == null ? undefined : _0x39b9ed.rangeInfo$,
      _0x39b9ed == null ? undefined : _0x39b9ed.getRangeInfo(),
    ),
    _0x36f214 = Array.isArray(_0xaac1a5),
    _0x5de977 =
      _0xaac1a5 && !_0x36f214 && _0xaac1a5.isRowDirection
        ? _0x7b304e.Row
        : _0x7b304e.Column,
    _0x57bc2a = _0x36f214
      ? (_0xaea915 = _0xaac1a5[0]) == null
        ? undefined
        : _0xaea915.range
      : _0xaac1a5 == null
        ? undefined
        : _0xaac1a5.rangeInfo;
  return _0x53657b("div", {
    className: "univer-flex univer-flex-col univer-gap-3 univer-pb-5",
    children: [
      _0x2c400e(_0x50d02b, { options: _0x3ed709 }),
      _0x2c400e(_0x5bd05f, {}),
      _0x2c400e(_0x1983a3, {}),
      _0x2c400e(bi, {}),
      _0x2c400e(_0x1ac0a5, {}),
      _0x2c400e(Si, { dataRange: _0xaac1a5, primaryRange: _0x57bc2a }),
      _0x2c400e(_0x1329df, {
        categoryToggleLabel: _0x48a2a8.t(
          "sheets-chart-ui.common.useAsCategoryLabels",
          _0x5de977 === _0x7b304e.Row
            ? _0x5de977 +
                "\x20" +
                (((_0x57bc2a == null
                  ? undefined
                  : _0x57bc2a.range["startRow"]) ?? 0) +
                  1)
            : _0x5de977 +
                "\x20" +
                _0x1a8e64(
                  (_0x57bc2a == null
                    ? undefined
                    : _0x57bc2a.range["startColumn"]) ?? 0,
                ),
        ),
        orientationControl: _0x36f214
          ? undefined
          : _0x2c400e(_0x27b4a8, {
              size: "small",
              onClick: () =>
                _0x50661a.setOrientation(
                  _0x5de977 === _0x7b304e.Row
                    ? _0x7b304e.Column
                    : _0x7b304e.Row,
                ),
              children: _0x48a2a8.t("sheets-chart-ui.common.switchRowColumn"),
            }),
      }),
      _0x2c400e(_0x2903b9, {}),
      _0x2c400e(_0x16e1d2, {
        defaultValues: _0x159ede.defaultValues["waterfall"],
      }),
    ],
  });
};
function Si(_0x2546d2) {
  let { dataRange: _0x4b803b, primaryRange: _0x2f265e } = _0x2546d2,
    _0x5d299e = _0x2a48f0(X),
    _0x1b72a0 = _0x2a48f0(_0x2008b6),
    _0x112c89 = _0x2a48f0(_0xf2e955),
    _0x3e30ae = _0x2a48f0(_0x57426f),
    [_0x51c173, _0x3fd747] = _0x2c6621(false),
    [_0xb5075d, _0x73723a] = _0x2c6621(false),
    [_0x1cabbb, _0xce5e43] = _0x2c6621(),
    _0x41cea1 = _i(_0x112c89),
    _0x13c5d3 = vi(_0x112c89),
    _0x140edf = _0x4b803b ? Mr(_0x4b803b, _0x112c89) : "",
    _0x3525b5 = _0x411a9a(_0x140edf),
    _0x3088ef = _0x411a9a(undefined),
    _0x4cae7f = _0x411a9a(null);
  (_0x2af7ed(() => {
    (_0x5d299e.setRangeSelectMode(_0x51c173),
      _0x3e30ae.setContextValue(_0x31acaf, _0x51c173));
  }, [_0x3e30ae, _0x51c173, _0x5d299e]),
    _0x2af7ed(
      () => () => {
        (_0x5d299e.setRangeSelectMode(false),
          _0x3e30ae.setContextValue(_0x31acaf, false));
      },
      [_0x3e30ae, _0x5d299e],
    ));
  let _0x30ec8b = _0xd51390(
      (_0x53dc2e) => {
        var _0x513dae;
        if (Mr(_0x4b803b, _0x112c89) === _0x53dc2e)
          return (_0xce5e43(undefined), true);
        let _0x31233d = _0x53dc2e.split(_0x239a96.COMMA);
        if (
          !_0x53dc2e.trim() ||
          _0x31233d.length !== 1 ||
          !((_0x513dae = _0x4cae7f.current) != null && _0x513dae.verify())
        )
          return (
            _0xce5e43(_0x1b72a0.t("sheets-chart-ui.common.invalidDataRange")),
            false
          );
        let {
            unitId: _0x516337,
            sheetName: _0x15c44b,
            range: _0x36ff4e,
          } = _0x4f1365(_0x31233d[0]),
          _0x13e687 = _0x516337 || _0x41cea1,
          _0x4d1e68 = _0x112c89.getUnit(_0x13e687),
          _0x5e3284 =
            (_0x2f265e == null ? undefined : _0x2f265e.unitId) === _0x13e687
              ? _0x2f265e.subUnitId
              : _0x13c5d3,
          _0x23d16c = _0x15c44b
            ? _0x4d1e68 == null
              ? undefined
              : _0x4d1e68.getSheetBySheetName(_0x15c44b)
            : _0x4d1e68 == null
              ? undefined
              : _0x4d1e68.getSheetBySheetId(_0x5e3284 ?? "");
        return !_0x4d1e68 || !_0x23d16c || !_0x22ae0e(_0x36ff4e, _0x23d16c)
          ? (_0xce5e43(_0x1b72a0.t("sheets-chart-ui.common.invalidDataRange")),
            false)
          : (_0xce5e43(undefined),
            _0x5d299e.setDataRange({
              rangeInfo: {
                range: _0x36ff4e,
                unitId: _0x13e687,
                subUnitId: _0x23d16c.getSheetId(),
              },
            }),
            true);
      },
      [
        _0x4b803b,
        _0x1b72a0,
        _0x2f265e,
        _0x5d299e,
        _0x13c5d3,
        _0x41cea1,
        _0x112c89,
      ],
    ),
    _0x3cfec5 = _0x35977d(
      () => ({
        keyCodes: [
          {
            keyCode: _0x3a081f.ENTER,
            nativeTextEditorBehavior: _0xd0741f.OVERRIDE_NATIVE,
          },
        ],
        handler: (_0x210628) => {
          _0x210628 === _0x3a081f.ENTER &&
            _0x30ec8b(_0x3525b5.current) &&
            (_0x3088ef.current = _0x3525b5.current);
        },
      }),
      [_0x30ec8b],
    );
  return _0x2c400e("div", {
    className: "univer-flex univer-flex-col univer-gap-3",
    children: _0x53657b("div", {
      children: [
        _0x2c400e(_0x90e230, {
          title: _0x1b72a0.t("sheets-chart-ui.common.dataRange"),
        }),
        _0x2c400e(_0x2519dc, {
          supportAcrossSheet: true,
          keepSheetReference: true,
          maxRangeCount: 1,
          unitId: _0x41cea1,
          subUnitId: _0x13c5d3,
          initialValue: _0x140edf,
          keyboardEventConfig: _0x3cfec5,
          selectorRef: _0x4cae7f,
          onChange: (_0x41326b, _0x580588) => {
            ((_0x3525b5.current = _0x580588),
              _0xb5075d &&
                _0x3088ef.current !== _0x580588 &&
                _0x30ec8b(_0x580588) &&
                (_0x3088ef.current = _0x580588));
          },
          onFocusChange: (_0x5df30c, _0x1f5272) => {
            if (
              (_0x1f5272 !== undefined && (_0x3525b5.current = _0x1f5272),
              _0xb5075d || _0x3fd747(_0x5df30c),
              _0x5df30c)
            )
              _0x3088ef.current = _0x3525b5.current;
            else {
              let _0x1872a7 = _0x3088ef.current;
              ((_0x3088ef.current = undefined),
                _0x1872a7 !== undefined &&
                  _0x3525b5.current !== _0x1872a7 &&
                  _0x30ec8b(_0x3525b5.current));
            }
          },
          onRangeSelectorDialogVisibleChange: (_0x1271e1) => {
            (_0x73723a(_0x1271e1), _0x3fd747(_0x1271e1));
          },
        }),
        _0x1cabbb
          ? _0x2c400e("div", {
              className: "univer-my-1\x20univer-text-xs\x20univer-text-red-500",
              children: _0x1cabbb,
            })
          : null,
      ],
    }),
  });
}
function Z(_0x520831) {
  return _0x53657b(_0x1f62d6, {
    id: _0x520831.id,
    children: [
      _0x2c400e(_0xd12ede, { children: _0x520831.label }),
      _0x2c400e(_0x337fd5, { children: _0x520831.children }),
    ],
  });
}
const Ci = (_0x487e75) => {
  let _0x1bd393 = _0x2a48f0(_0x2008b6),
    _0x16e8d3 = _0x2a48f0(X),
    _0x4d1df2 = _0x2a48f0(_0x2cb440),
    _0x785e87 = _0x3a3fa0(
      _0x4d1df2.activeChartModel$,
      _0x4d1df2.activeChartModel,
    ),
    _0x552058 = _0x3a3fa0(_0x16e8d3.panelRoute$, null),
    _0x5329b2 =
      _0x552058 &&
      _0x552058.chartId === (_0x785e87 == null ? undefined : _0x785e87.id)
        ? _0x552058.route
        : null,
    _0x3e6a8e = _0x3a4ef3(),
    _0x1e55cc = _0x3a1890(),
    [_0x1a0335, _0x489d36] = _0x2c6621(null);
  _0x2af7ed(() => {
    _0x5329b2 != null && _0x5329b2.section && _0x489d36(_0x5329b2.section);
  }, [_0x5329b2]);
  let _0x154758 = _0x14ed04.baseOn(_0x3e6a8e, _0x3974b2.Pie),
    _0x39c1d6 = _0x3e6a8e === _0x3974b2.Radar,
    _0x33596d = _0x3e6a8e === _0x3974b2.WordCloud,
    _0x3d96fc = _0x3e6a8e === _0x3974b2.Funnel,
    _0x3f9caa = _0x14ed04.baseOn(_0x3e6a8e, _0x3974b2.Bubble),
    _0x4e7162 = _0x3e6a8e === _0x3974b2.Relation,
    _0x3e2b89 = _0x3e6a8e === _0x3974b2.Waterfall,
    _0x30ac17 = _0x3e6a8e === _0x3974b2.Pareto,
    _0x302e19 = _0x3e6a8e === _0x3974b2.Heatmap,
    _0x229e9e,
    _0x179323;
  switch (_0x3e6a8e) {
    case _0x3974b2.Candlestick:
      ((_0x229e9e = _0x36d661.Candlestick),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.candlestick")));
      break;
    case _0x3974b2.Histogram:
      ((_0x229e9e = _0x36d661.Histogram),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.histogram")));
      break;
    case _0x3974b2.Treemap:
      ((_0x229e9e = _0x36d661.Treemap),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.treemap")));
      break;
    case _0x3974b2.Sunburst:
      ((_0x229e9e = _0x36d661.Sunburst),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.sunburst")));
      break;
    case _0x3974b2.Gauge:
      ((_0x229e9e = _0x36d661.Gauge),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.gauge")));
      break;
    case _0x3974b2.Chord:
      ((_0x229e9e = _0x36d661.Chord),
        (_0x179323 = _0x1bd393.t("sheets-chart-ui.section.chord")));
      break;
  }
  let _0x4b4ffc =
    _0x3542d6(_0x3e6a8e, _0x471c27.GeneralSeries) && !_0x3f9caa && !_0x30ac17;
  return _0x53657b(_0x4022b0, {
    value: _0x1a0335,
    onChange: _0x489d36,
    children: [
      _0x2c400e(Z, {
        id: _0x36d661.ChartStyle,
        label: _0x1bd393.t("sheets-chart-ui.common.chartStyle"),
        children: _0x2c400e(_0x11d3ca, {
          defaultValues: _0x487e75.defaultValues["style"],
        }),
      }),
      _0x2c400e(Z, {
        id: _0x36d661.ChartAndAxisTitles,
        label: _0x1bd393.t("sheets-chart-ui.common.chartAndAxisTitles"),
        children: _0x2c400e(_0x364d22, {
          commitMode: "blur",
          defaultValues: _0x487e75.defaultValues["titles"],
          selectedTitleKey: _0x5329b2 == null ? undefined : _0x5329b2.titleKey,
        }),
      }),
      _0x4b4ffc &&
        _0x2c400e(Z, {
          id: _0x36d661.Series,
          label: _0x1bd393.t("sheets-chart-ui.common.series"),
          children: _0x2c400e(_0x1f0b63, {
            defaultValues: _0x487e75.defaultValues["series"],
            NumberFormatField: _0xb65981,
            selectedSeriesId:
              _0x5329b2 == null ? undefined : _0x5329b2.seriesId,
          }),
        }),
      _0x3e2b89 &&
        _0x2c400e(Z, {
          id: _0x36d661.WaterfallSeries,
          label: _0x1bd393.t("sheets-chart-ui.section.waterfall"),
          children: _0x2c400e(_0x2ce40f, {
            defaultValues: _0x487e75.defaultValues["waterfallStyle"],
            getDefaultBucketName: ({
              seriesName: _0x1db137,
              target: _0x449edd,
            }) =>
              _0x449edd === _0x4ba4e9.Subtotal
                ? _0x1bd393.t("sheets-chart-ui.waterfall.subtotal")
                : _0x1db137
                  ? _0x1db137 +
                    "-(" +
                    _0x1bd393.t(
                      _0x449edd === _0x4ba4e9.Positive
                        ? "sheets-chart-ui.waterfall.positive"
                        : "sheets-chart-ui.waterfall.negative",
                    ) +
                    ")"
                  : "",
            NumberFormatField: _0xb65981,
            selectedSeriesId:
              _0x5329b2 == null ? undefined : _0x5329b2.seriesId,
          }),
        }),
      _0x30ac17 &&
        _0x53657b(_0x16338b, {
          children: [
            _0x2c400e(Z, {
              id: _0x36d661.ParetoBarSeries,
              label: _0x1bd393.t("sheets-chart-ui.section.paretoBar"),
              children: _0x2c400e(_0x20cddb, {
                defaultValues: _0x487e75.defaultValues["pareto"],
                NumberFormatField: _0xb65981,
                showDataPointEditor: true,
                target: "barStyle",
              }),
            }),
            _0x2c400e(Z, {
              id: _0x36d661.ParetoLineSeries,
              label: _0x1bd393.t("sheets-chart-ui.section.paretoLine"),
              children: _0x2c400e(_0x20cddb, {
                defaultValues: _0x487e75.defaultValues["pareto"],
                NumberFormatField: _0xb65981,
                showDataPointEditor: false,
                target: "cumulativeLineStyle",
              }),
            }),
          ],
        }),
      _0x154758 &&
        _0x2c400e(Z, {
          id: _0x36d661.PieStyle,
          label: _0x1bd393.t("sheets-chart-ui.section.pie"),
          children: _0x2c400e(_0x10259f, {
            defaultValues: _0x487e75.defaultValues["pie"],
            NumberFormatField: _0xb65981,
          }),
        }),
      _0x33596d &&
        _0x2c400e(Z, {
          id: _0x36d661.WordCloud,
          label: _0x1bd393.t("sheets-chart-ui.section.wordCloud"),
          children: _0x2c400e(_0x445ed9, {
            defaultValues: _0x487e75.defaultValues["wordCloud"],
          }),
        }),
      _0x39c1d6 &&
        _0x2c400e(Z, {
          id: _0x36d661.Radar,
          label: _0x1bd393.t("sheets-chart-ui.section.radar"),
          children: _0x2c400e(_0x2f7583, {
            defaultValues: _0x487e75.defaultValues["radar"],
          }),
        }),
      _0x3d96fc &&
        _0x2c400e(Z, {
          id: _0x36d661.Funnel,
          label: _0x1bd393.t("sheets-chart-ui.section.funnel"),
          children: _0x2c400e(_0x758562, {
            defaultValues: _0x487e75.defaultValues["funnel"],
            gapControl: "select",
          }),
        }),
      _0x302e19 &&
        _0x2c400e(Z, {
          id: _0x36d661.Heatmap,
          label: _0x1bd393.t("sheets-chart-ui.common.heatmap"),
          children: _0x2c400e(_0x1de441, {
            defaultValues: _0x487e75.defaultValues["heatmap"],
          }),
        }),
      _0x4e7162 &&
        _0x2c400e(Z, {
          id: _0x36d661.Relation,
          label: _0x1bd393.t("sheets-chart-ui.section.relation"),
          children: _0x2c400e(_0xbf226c, {
            defaultValues: _0x487e75.defaultValues["relation"],
          }),
        }),
      _0x1b01ad(_0x3e6a8e) &&
        _0x2c400e(Z, {
          id: _0x36d661.LineAndArea,
          label: _0x1bd393.t("sheets-chart-ui.section.lineAndArea"),
          children: _0x2c400e(_0x2caeee, {
            defaultValues: _0x487e75.defaultValues["lineAndArea"],
            lineStyleControl: "segmented",
          }),
        }),
      _0x3542d6(_0x3e6a8e, _0x471c27.Legend) &&
        _0x2c400e(Z, {
          id: _0x36d661.Legend,
          label: _0x1bd393.t("sheets-chart-ui.common.legend"),
          children: _0x2c400e(_0x491190, {
            defaultValues: _0x487e75.defaultValues["legend"],
          }),
        }),
      _0x3542d6(_0x3e6a8e, _0x471c27.Axes) &&
        _0x53657b(_0x16338b, {
          children: [
            _0x2c400e(Z, {
              id: _0x36d661.HorizontalAxis,
              label: _0x1bd393.t("sheets-chart-ui.common.horizontalAxis"),
              children: _0x2c400e(_0x57bebe, {
                axis: "x",
                defaultValues: _0x487e75.defaultValues["axis"],
                NumberFormatField: _0xb65981,
              }),
            }),
            _0x2c400e(Z, {
              id: _0x36d661.VerticalAxis,
              label: _0x1bd393.t("sheets-chart-ui.common.verticalAxis"),
              children: _0x2c400e(_0x57bebe, {
                axis: "y",
                defaultValues: _0x487e75.defaultValues["axis"],
                NumberFormatField: _0xb65981,
              }),
            }),
            _0x1e55cc &&
              _0x2c400e(Z, {
                id: _0x36d661.RightVerticalAxis,
                label: _0x1bd393.t("sheets-chart-ui.common.rightVerticalAxis"),
                children: _0x2c400e(_0x57bebe, {
                  axis: "rightY",
                  defaultValues: _0x487e75.defaultValues["axis"],
                  NumberFormatField: _0xb65981,
                }),
              }),
            _0x2c400e(Z, {
              id: _0x36d661.GridlinesAndTicks,
              label: _0x1bd393.t("sheets-chart-ui.section.gridlinesAndTicks"),
              children: _0x2c400e(_0x5a4cac, {
                defaultValues: _0x487e75.defaultValues["axis"],
              }),
            }),
          ],
        }),
      _0x3542d6(_0x3e6a8e, _0x471c27.IndicatorLine) &&
        _0x2c400e(Z, {
          id: _0x36d661.IndicatorLine,
          label: _0x1bd393.t("sheets-chart-ui.section.indicatorLine"),
          children: _0x2c400e(_0x63f3c1, {
            defaultValues: _0x487e75.defaultValues["indicatorLine"],
          }),
        }),
      _0x256bc9(_0x3e6a8e) &&
        _0x2c400e(Z, {
          id: _0x36d661.Trendline,
          label: _0x1bd393.t("sheets-chart-ui.common.trendline"),
          children: _0x2c400e(_0x3478a4, {
            defaultValues: _0x487e75.defaultValues["trendline"],
          }),
        }),
      _0x229e9e &&
        _0x179323 &&
        _0x2c400e(Z, {
          id: _0x229e9e,
          label: _0x179323,
          children: _0x2c400e(_0x43b880, {}),
        }),
    ],
  });
};
function wi(_0x1cb813) {
  let { className: _0x5478af } = _0x1cb813,
    [_0x273039, _0x572d8] = _0x2c6621(_0xee0c76.Data),
    _0x22a992 = _0x2a48f0(_0x57cf41),
    _0xbe43f7 = _0x2a48f0(_0x2008b6),
    _0x32fb5d = _0x2a48f0(X),
    _0xcd25bf = _0x2a48f0(_0x2cb440),
    _0x1dd611 = _0x2a48f0(_0x354de9),
    _0x12016c = _0x3a3fa0(
      _0xcd25bf.activeChartModel$,
      _0xcd25bf.activeChartModel,
    ),
    _0x4ba536 = _0x3a3fa0(_0x32fb5d.panelRoute$, null),
    _0x33aa0b = _0x35977d(() => {
      var _0xaad35b;
      if (!_0x12016c) return null;
      let _0x237e01 = _0x1dd611.getChartSourceSpec(_0x12016c.id);
      if (!_0x237e01) return null;
      let _0x5adf79 = Array.isArray(_0x237e01)
        ? (_0xaad35b = _0x237e01[0]) == null
          ? undefined
          : _0xaad35b.range
        : _0x237e01.rangeInfo;
      return _0x5adf79
        ? new _0x3b7460(
            _0x12016c,
            new _0x2bd149({
              unitId: _0x5adf79.unitId,
              subUnitId: _0x5adf79.subUnitId,
              chartId: _0x12016c.id,
              injector: _0x22a992,
            }),
          )
        : null;
    }, [_0x12016c, _0x22a992, _0x1dd611]);
  return (
    _0x2af7ed(() => {
      var _0x19e9e4, _0x1126f1;
      !_0x12016c ||
        (_0x4ba536 == null ? undefined : _0x4ba536.chartId) !== _0x12016c.id ||
        (((_0x19e9e4 = _0x4ba536.route) == null ? undefined : _0x19e9e4.tab) ===
          _0xee0c76.Style && _0x572d8(_0xee0c76.Style),
        ((_0x1126f1 = _0x4ba536.route) == null ? undefined : _0x1126f1.tab) ===
          _0xee0c76.Data && _0x572d8(_0xee0c76.Data));
    }, [_0x12016c, _0x4ba536]),
    _0x33aa0b
      ? _0x2c400e(_0x32e814, {
          chartUIService: _0x32fb5d,
          hostAdapter: _0x33aa0b,
          children: _0x53657b("div", {
            className:
              "\n univer-flex univer-h-0 univer-min-h-full univer-w-full univer-flex-col univer-bg-gray-0\n dark:!univer-bg-gray-900\n " +
              (_0x273039 === _0xee0c76.Style
                ? "univer-overflow-visible"
                : "univer-overflow-hidden") +
              "\n " +
              (_0x5478af ?? "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
            children: [
              _0x2c400e(_0x3cbfd8, {
                ariaLabel: _0xbe43f7.t("sheets-chart-ui.common.editChart"),
                className: "univer-shrink-0",
                items: [
                  {
                    label: _0xbe43f7.t("sheets-chart-ui.common.setup"),
                    panelId: Ei,
                    value: _0xee0c76.Data,
                  },
                  {
                    label: _0xbe43f7.t("sheets-chart-ui.common.customize"),
                    panelId: Di,
                    value: _0xee0c76.Style,
                  },
                ],
                value: _0x273039,
                onChange: _0x572d8,
              }),
              _0x273039 === _0xee0c76.Data
                ? _0x2c400e(_0x550b11, {
                    id: Ei,
                    label: _0xbe43f7.t("sheets-chart-ui.common.setup"),
                    children: _0x2c400e(xi, { defaultValues: gi }),
                  })
                : _0x2c400e(_0x550b11, {
                    id: Di,
                    className: "-univer-mx-4",
                    label: _0xbe43f7.t("sheets-chart-ui.common.customize"),
                    children: _0x2c400e(Ci, { defaultValues: gi }),
                  }),
            ],
          }),
        })
      : null
  );
}
const Ti = "sheet.chart.edit.panel",
  Ei = "sheet-chart-setup-panel",
  Di = "sheet-chart-style-panel";
function Oi(_0xd9102) {
  if (_0xd9102.length !== 1) return false;
  let _0x317efd = _0xd9102[0];
  return (
    _0x317efd.drawingType === _0x8f911e.DRAWING_CHART && !_0x317efd.groupId
  );
}
let Q = class extends _0x352eaa {
  constructor(
    _0x5b3b6a,
    _0x56c4c0,
    _0x4030ed,
    _0x2edae6,
    _0x4b5d8a,
    _0x2bafc6,
    _0x58a2a1,
    _0x298fa9,
    _0x55c5e4,
    _0x24f8b0,
    _0x49120f,
    _0x846c0,
    _0x5ef071,
    _0x552c1b,
  ) {
    var _0x3f1306;
    (super(),
      (this._drawingManagerService = _0x5b3b6a),
      (this._univerInstanceService = _0x56c4c0),
      (this._chartModelService = _0x4030ed),
      (this._chartRenderService = _0x2edae6),
      (this._sheetDrawingHitTestService = _0x4b5d8a),
      (this._sidebarService = _0x2bafc6),
      (this._menuManagerService = _0x58a2a1),
      (this._sheetCanvasFloatDomManagerService = _0x298fa9),
      (this._sheetCanvasPopManagerService = _0x55c5e4),
      (this._commandService = _0x24f8b0),
      (this._sheetsChartUIService = _0x49120f),
      (this._contextService = _0x846c0),
      (this._localeService = _0x5ef071),
      G(this, "_sidebarDisposable", null),
      G(this, "_isChartElementEditEnabled", undefined),
      (this._isChartElementEditEnabled =
        ((_0x3f1306 = _0x552c1b.getConfig("sheets-chart-ui.config")) == null
          ? undefined
          : _0x3f1306.enableChartElementFloatMenu) === true),
      this._initMenus(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          _0x1139b3.UNIVER_SHEET,
        ).subscribe((_0x19cdf1) => {
          var _0x21d800;
          _0x19cdf1 ||
            (_0x21d800 = this._sidebarDisposable) == null ||
            _0x21d800.dispose();
        }),
      ),
      this.disposeWithMe(
        _0x3193f8(
          this._sheetDrawingHitTestService["onDoubleClick$"].subscribe(
            async ({ drawing: _0x39de69 }) => {
              await this._handleDrawingDoubleClick(_0x39de69);
            },
          ),
        ),
      ));
  }
  _openPanel() {
    this._sidebarDisposable = this._sidebarService["open"]({
      id: Ti,
      header: {
        title: this._localeService["t"]("sheets-chart-ui.common.editChart"),
      },
      width: 340,
      children: { label: Ti },
      onClose: () => {
        ((this._sidebarDisposable = null),
          this._deactivateEditPanelState(),
          this._chartModelService["activeChartModel"] &&
            this._chartModelService["setActiveChartModel"](null),
          this._drawingManagerService["focusDrawing"](null),
          this._contextService["setContextValue"](_0x216334, false));
      },
    });
  }
  hidePanel() {
    let _0x398fa9 = this._sidebarDisposable;
    ((this._sidebarDisposable = null),
      this._deactivateEditPanelState(),
      this._chartModelService["activeChartModel"] &&
        this._chartModelService["setActiveChartModel"](null),
      _0x398fa9 == null || _0x398fa9.dispose());
  }
  initPanel() {
    let _0x592887 = this._univerInstanceService["getCurrentUnitOfType"](
      _0x1139b3.UNIVER_SHEET,
    );
    (this.disposeWithMe(
      this._sidebarService["sidebarOptions$"].subscribe((_0x4e8b30) => {
        _0x4e8b30.id === "sheet.chart.edit.panel" &&
          (_0x4e8b30.visible ||
            this._sidebarService["sidebarOptions$"].next({ visible: false }));
      }),
    ),
      this.disposeWithMe(
        _0x585947([
          this._chartModelService["activeChartModel$"],
          this._sheetsChartUIService["chartEditorOpen$"],
        ])
          .pipe(
            _0x2ae138(([_0x4d2f35, _0x48e879]) =>
              _0x48e879
                ? ((_0x4d2f35 == null ? undefined : _0x4d2f35.id) ?? null)
                : null,
            ),
            _0x5ebaa8(),
            _0x5e8e6f(null),
            _0x533cdc(),
          )
          .subscribe(([_0x10003c, _0x163e87]) => {
            this._syncActiveEditChart(_0x10003c, _0x163e87);
          }),
      ),
      this.disposeWithMe(
        this._chartModelService["activeChartModel$"].subscribe((_0x356b32) => {
          !_0x356b32 && this._sidebarDisposable && this.hidePanel();
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x351a24) => {
          if (_0x351a24.id === H.id) {
            let _0x1a71dd = _0x351a24.params;
            this.openChartPanelById(_0x1a71dd.drawingId, _0x1a71dd.route);
          }
          if (
            (_0x351a24.id === Tr.id && this.hidePanel(),
            _0x351a24.id === _0x26a1d3.id)
          ) {
            var _0x36cffb;
            (_0x351a24.params["chartId"] ===
              ((_0x36cffb = this._chartModelService["activeChartModel"]) == null
                ? undefined
                : _0x36cffb.id) && this.hidePanel(),
              this._contextService["getContextValue"](_0x216334) &&
                (this._contextService["setContextValue"](_0x216334, false),
                this._drawingManagerService["focusDrawing"](null)));
          }
        }),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          ({ id: _0x222b29 }) => {
            this._sheetsChartUIService["isElementEditModeActive"](_0x222b29) &&
              this.hidePanel();
          },
        ),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["transformChange$"].subscribe(
          ({ id: _0x179de0 }) => {
            this._sheetsChartUIService["isElementEditModeActive"](_0x179de0) &&
              (this._sheetsChartUIService["clearPanelRoute"](),
              this._chartRenderService["setElementEditMode"](_0x179de0, false),
              this._shouldEnableChartElementEdit(_0x179de0) &&
                this._chartRenderService["setElementEditMode"](
                  _0x179de0,
                  true,
                ));
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x4b91a2) => {
          let _0x2cbc4e = _0x4b91a2[0];
          if (!this._sheetsChartUIService["rangeSelectMode"]) {
            if (Oi(_0x4b91a2)) {
              var _0x1bc1b9;
              let _0x5c3464 = this._chartModelService["getChartModel"](
                _0x2cbc4e.drawingId,
              );
              _0x5c3464 &&
                ((_0x1bc1b9 = this._chartModelService["activeChartModel"]) ==
                null
                  ? undefined
                  : _0x1bc1b9.id) !== _0x5c3464.id &&
                this._chartModelService["setActiveChartModel"](_0x5c3464);
              return;
            }
            (this._chartModelService["activeChartModel"] &&
              this._chartModelService["setActiveChartModel"](null),
              !_0x2cbc4e &&
                !this._sheetsChartUIService["rangeSelectMode"] &&
                this.hidePanel());
          }
        }),
      ),
      _0x592887 &&
        (this.disposeWithMe(
          _0x592887.sheetDisposed$["subscribe"](() => {
            this.hidePanel();
          }),
        ),
        this.disposeWithMe(
          _0x592887.activeSheet$["subscribe"](() => {
            this.hidePanel();
          }),
        )));
  }
  async _handleDrawingDoubleClick(_0x4f200c) {
    this._sheetsChartUIService["chartEditorOpen"] ||
      (_0x4f200c.drawingType === _0x8f911e.DRAWING_CHART &&
        (await this._openEditPanelByDoubleClick(
          _0x4f200c.unitId,
          _0x4f200c.subUnitId,
          _0x4f200c.drawingId,
        )));
  }
  async _openEditPanelByDoubleClick(_0x136f91, _0x4ebd91, _0x41040a) {
    let _0x6e445a = this._chartModelService["getChartModel"](_0x41040a);
    _0x6e445a &&
      (this._chartModelService["setActiveChartModel"](_0x6e445a),
      await this._commandService["executeCommand"](H.id, {
        unitId: _0x136f91,
        subUnitId: _0x4ebd91,
        drawingId: _0x41040a,
      }));
  }
  openChartPanelById(_0x54283, _0x42dd06) {
    let _0x3e6a82 = this._chartModelService["getChartModel"](_0x54283);
    _0x3e6a82 &&
      (this._chartModelService["setActiveChartModel"](_0x3e6a82),
      this._openPanel(),
      this._activateEditPanelState(_0x54283, _0x42dd06 ?? null));
  }
  _activateEditPanelState(_0x3bf7ca, _0x1f7de9) {
    (this._sheetsChartUIService["setChartEditorOpen"](true),
      this._sheetsChartUIService["setPanelRoute"](_0x3bf7ca, _0x1f7de9));
  }
  _deactivateEditPanelState() {
    this._sheetsChartUIService["setChartEditorOpen"](false);
  }
  _syncActiveEditChart(_0x5a3e54, _0x37533b) {
    _0x5a3e54 !== _0x37533b &&
      (_0x5a3e54 &&
        this._chartRenderService["setElementEditMode"](_0x5a3e54, false),
      this._sheetsChartUIService["clearPanelRoute"](),
      _0x37533b &&
        (this._sheetsChartUIService["setPanelRoute"](_0x37533b, null),
        this._chartRenderService["setElementEditMode"](
          _0x37533b,
          this._shouldEnableChartElementEdit(_0x37533b),
        )));
  }
  _initMenus() {
    (this._menuManagerService["mergeMenu"](Ur),
      this._sheetCanvasPopManagerService["registerFeatureMenu"](
        _0x8f911e.DRAWING_CHART,
        this.getChartPopupMenus["bind"](this),
      ));
  }
  _shouldEnableChartElementEdit(_0x2409d7) {
    let _0x41bfdb = this._chartModelService["getChartModel"](_0x2409d7);
    return !this._isChartElementEditEnabled || !_0x41bfdb
      ? false
      : Gr(_0x41bfdb.chartType);
  }
  getChartPopupMenus(_0x3a8a1b, _0x2091a9, _0x2d795c, _0x236022) {
    return [
      {
        label: this._localeService["t"](
          "sheets-chart-ui.common.openChartPanel",
        ),
        index: 0,
        commandId: H.id,
        commandParams: {
          unitId: _0x3a8a1b,
          subUnitId: _0x2091a9,
          drawingId: _0x2d795c,
        },
        disable: _0x236022 !== _0x8f911e.DRAWING_CHART,
      },
      {
        label: this._localeService["t"]("sheets-chart-ui.common.deleteChart"),
        index: 1,
        commandId: _0xb78463.id,
        commandParams: {
          unitId: _0x3a8a1b,
          drawings: [
            {
              unitId: _0x3a8a1b,
              subUnitId: _0x2091a9,
              drawingId: _0x2d795c,
              drawingType: _0x236022,
            },
          ],
        },
        disable: false,
      },
      {
        label: this._localeService["t"](
          "sheets-chart-ui.common.hideChartPanel",
        ),
        index: 2,
        commandId: Tr.id,
        commandParams: {
          unitId: _0x3a8a1b,
          subUnitId: _0x2091a9,
          drawingId: _0x2d795c,
        },
        disable: false,
      },
    ];
  }
};
Q = J(
  [
    q(0, _0xe7d86),
    q(1, _0xf2e955),
    q(2, _0x5b0a50(_0x2cb440)),
    q(3, _0x5b0a50(Y)),
    q(4, _0x5b0a50(_0x47445d)),
    q(5, _0x5b0a50(_0x2ad2b9)),
    q(6, _0x17ca19),
    q(7, _0x5b0a50(_0x474276)),
    q(8, _0x5b0a50(_0x407092)),
    q(9, _0x2956ab),
    q(10, X),
    q(11, _0x57426f),
    q(12, _0x5b0a50(_0x2008b6)),
    q(13, _0x1999fa),
  ],
  Q,
);
var ki = "@univerjs-pro/sheets-chart-ui",
  Ai = "1.0.0-insiders.20260907-70fc579";
const ji = { scaleX: 1, scaleY: 1 };
function Mi(_0x49b983) {
  let _0x530719 = _0x49b983.nativeEvent;
  return _0x530719 instanceof MouseEvent ? _0x530719 : undefined;
}
function Ni(_0x2dae34) {
  let _0x336ebb = _0x2dae34.nativeEvent,
    _0x9b5bb2 = _0x336ebb == null ? undefined : _0x336ebb.target;
  return _0x9b5bb2 instanceof Element ? _0x9b5bb2 : undefined;
}
function Pi(_0xa74d58) {
  var _0x2b3ab1;
  return (_0x2b3ab1 = Ni(_0xa74d58)) == null
    ? undefined
    : _0x2b3ab1.getBoundingClientRect();
}
function Fi(_0x50ec9c) {
  return _0x50ec9c.width || _0x50ec9c.right - _0x50ec9c.left;
}
function Ii(_0xd6c451) {
  return _0xd6c451.height || _0xd6c451.bottom - _0xd6c451.top;
}
function Li(_0x43bee4, _0x3bd0ff) {
  let _0x3646d0 =
      _0x43bee4.clientWidth ||
      (_0x43bee4 instanceof HTMLElement ? _0x43bee4.offsetWidth : 0),
    _0x2266ec =
      _0x43bee4.clientHeight ||
      (_0x43bee4 instanceof HTMLElement ? _0x43bee4.offsetHeight : 0),
    _0x41a9c8 = Fi(_0x3bd0ff),
    _0x57b8e6 = Ii(_0x3bd0ff);
  return {
    scaleX: _0x3646d0 > 0 && _0x41a9c8 > 0 ? _0x41a9c8 / _0x3646d0 : ji.scaleX,
    scaleY: _0x2266ec > 0 && _0x57b8e6 > 0 ? _0x57b8e6 / _0x2266ec : ji.scaleY,
  };
}
function Ri(_0x3ea772, _0x1595b6, _0x9810f) {
  return {
    left: _0x3ea772.left + _0x1595b6.left * _0x9810f.scaleX,
    right: _0x3ea772.left + _0x1595b6.right * _0x9810f.scaleX,
    top: _0x3ea772.top + _0x1595b6.top * _0x9810f.scaleY,
    bottom: _0x3ea772.top + _0x1595b6.bottom * _0x9810f.scaleY,
  };
}
function zi(_0xd55c29) {
  let _0x511869 = Ni(_0xd55c29),
    _0x24fcee = _0xd55c29.hit["bounds"];
  return _0x511869 && _0x24fcee
    ? () => {
        let _0x15cc03 = _0x511869.getBoundingClientRect();
        return Ri(_0x15cc03, _0x24fcee, Li(_0x511869, _0x15cc03));
      }
    : () => {
        let _0x3f55dd = Pi(_0xd55c29);
        if (_0x3f55dd && _0x24fcee)
          return Ri(
            _0x3f55dd,
            _0x24fcee,
            _0x511869 ? Li(_0x511869, _0x3f55dd) : ji,
          );
        let _0x3fc264 = Mi(_0xd55c29),
          _0x67b48b = _0x511869 && _0x3f55dd ? Li(_0x511869, _0x3f55dd) : ji,
          _0x124bb8 =
            (_0x3fc264 == null ? undefined : _0x3fc264.clientX) ??
            (_0x3f55dd
              ? _0x3f55dd.left + _0xd55c29.localPoint["x"] * _0x67b48b.scaleX
              : _0xd55c29.localPoint["x"]),
          _0x4eeb5a =
            (_0x3fc264 == null ? undefined : _0x3fc264.clientY) ??
            (_0x3f55dd
              ? _0x3f55dd.top + _0xd55c29.localPoint["y"] * _0x67b48b.scaleY
              : _0xd55c29.localPoint["y"]);
        return {
          left: _0x124bb8,
          right: _0x124bb8 + 1,
          top: _0x4eeb5a,
          bottom: _0x4eeb5a + 1,
        };
      };
}
function Bi(_0x4ccf4f) {
  return typeof _0x4ccf4f == "number" && Number.isFinite(_0x4ccf4f);
}
function Vi(_0x352f9e) {
  if (!_0x352f9e || typeof _0x352f9e != "object") return true;
  let {
    startX: _0x33aa21,
    endX: _0x3edaff,
    startY: _0x1f2005,
    endY: _0x316dba,
  } = _0x352f9e;
  return (
    !Bi(_0x33aa21) ||
    !Bi(_0x3edaff) ||
    !Bi(_0x1f2005) ||
    !Bi(_0x316dba) ||
    (_0x3edaff - _0x33aa21 > 2 && _0x316dba - _0x1f2005 > 2)
  );
}
function Hi(_0x3f7d8f) {
  return _0x3f7d8f.right <= _0x3f7d8f.left || _0x3f7d8f.bottom <= _0x3f7d8f.top
    ? false
    : typeof window > "u" ||
        (_0x3f7d8f.right > 0 &&
          _0x3f7d8f.bottom > 0 &&
          _0x3f7d8f.left < window.innerWidth &&
          _0x3f7d8f.top < window.innerHeight);
}
function Ui(_0x31309f) {
  var _0x515750;
  return _0x31309f == null || (_0x515750 = _0x31309f.getValue) == null
    ? undefined
    : _0x515750.call(_0x31309f);
}
function Wi(_0x2ddaac, _0x13da5f, _0x31a2ca) {
  let _0x47ce43 = zi(_0x2ddaac),
    _0x1b6013 = Ui(_0x13da5f),
    _0x41c7fc = _0x47ce43(),
    _0x2e703e = new _0x873472(_0x41c7fc),
    _0x5b1890 = new _0x19aa48(),
    _0x29b3e3 = false,
    _0x387add = false,
    _0x547ea9 = (_0x5a75c7) => Vi(_0x1b6013) && Hi(_0x5a75c7),
    _0x439317 = () => {
      _0x387add ||
        _0x29b3e3 ||
        ((_0x387add = true),
        queueMicrotask(() => {
          if (((_0x387add = false), !_0x29b3e3)) {
            let _0x4aa292 = _0x47ce43();
            if (!_0x547ea9(_0x4aa292)) {
              _0x31a2ca();
              return;
            }
            _0x2e703e.next(_0x4aa292);
          }
        }));
    };
  return (
    _0x13da5f &&
      _0x5b1890.add(
        _0x13da5f.subscribe((_0x1a401b) => {
          ((_0x1b6013 = _0x1a401b), _0x439317());
        }),
      ),
    typeof window < "u" &&
      _0x5b1890.add(
        _0x909e8e(
          _0x7436b7(window, "scroll", { capture: true }),
          _0x7436b7(window, "resize"),
        )
          .pipe(_0x2bd84a(16))
          .subscribe(_0x439317),
      ),
    {
      initialRect: _0x41c7fc,
      anchorRect$: _0x2e703e.asObservable(),
      visible: _0x547ea9(_0x41c7fc),
      dispose: () => {
        ((_0x29b3e3 = true), _0x5b1890.dispose(), _0x2e703e.complete());
      },
    }
  );
}
const Gi = "sheets-chart-element-float-menu";
let Ki = class extends _0x352eaa {
  constructor(
    _0x5d6864,
    _0x55ec24,
    _0x17f0ba,
    _0x105ef7,
    _0x21b4d5,
    _0x315a29,
    _0x42b477,
    _0x4d8fa9,
    _0x436bc7,
    _0x2b6c05,
  ) {
    (super(),
      (this._chartModelService = _0x5d6864),
      (this._chartRenderService = _0x55ec24),
      (this._chartHostProvider = _0x17f0ba),
      (this._sheetCanvasPopManagerService = _0x105ef7),
      (this._sheetCanvasFloatDomManagerService = _0x21b4d5),
      (this._chartUIService = _0x315a29),
      (this._adapterRegistry = _0x42b477),
      (this._commandService = _0x4d8fa9),
      (this._injector = _0x436bc7),
      (this._contextService = _0x2b6c05),
      G(this, "_popupDisposable", null),
      G(this, "_popupChartId", null),
      G(this, "_popupSessionKey", null),
      this._registerAdapter(),
      this._subscribeChartEvents());
  }
  dispose() {
    (this._closePopup(), super.dispose());
  }
  _registerAdapter() {
    let _0x3d8b6b = _0x11d9d({
      chartUIService: this._chartUIService,
      getHostAdapter: (_0x2f7833) => {
        let _0x2d234c = this._chartModelService["getChartModel"](
          _0x2f7833.chartId,
        );
        if (!(!_0x2d234c || !_0x2f7833.subUnitId))
          return new _0x3b7460(
            _0x2d234c,
            new _0x2bd149({
              unitId: _0x2f7833.unitId,
              subUnitId: _0x2f7833.subUnitId,
              chartId: _0x2f7833.chartId,
              injector: this._injector,
            }),
          );
      },
      close: () => this._closePopup(),
      openFullPanel: (_0x309c16) => {
        let {
            unitId: _0x5c7c63,
            subUnitId: _0xd71d64,
            drawingId: _0x205019,
            chartId: _0x5a364a,
          } = _0x309c16,
          _0x57a01a = _0x862a37(_0x309c16.target);
        this._commandService["executeCommand"](H.id, {
          unitId: _0x5c7c63,
          subUnitId: _0xd71d64 ?? "",
          drawingId: _0x205019 ?? _0x5a364a,
          ...(_0x57a01a ? { route: _0x57a01a } : {}),
        });
      },
    });
    this.disposeWithMe(this._adapterRegistry["register"](Gi, _0x3d8b6b));
  }
  _subscribeChartEvents() {
    (this.disposeWithMe(
      this._chartModelService["chartModelAdded$"].subscribe((_0xccb5a7) => {
        let _0xaa8738 = new _0x19aa48();
        (_0xaa8738.add(
          this._chartRenderService["on"](_0xccb5a7.id, "click", (_0x343f54) => {
            this._openFloatMenu(_0xccb5a7.id, _0x343f54);
          }),
        ),
          _0xaa8738.add(
            this._chartRenderService["on"](_0xccb5a7.id, "dblclick", () => {
              this._openEditPanelByDoubleClick(_0xccb5a7.id);
            }),
          ),
          _0xccb5a7.onDispose(() => {
            (_0xaa8738.dispose(), this._clearSelectedTarget(_0xccb5a7.id));
          }),
          this.disposeWithMe(_0xaa8738));
      }),
    ),
      this.disposeWithMe(
        _0x585947([
          this._chartModelService["activeChartModel$"],
          this._chartUIService["chartEditorOpen$"],
        ]).subscribe(([_0x1cb241, _0x5f08cf]) => {
          (!_0x5f08cf ||
            (this._popupChartId &&
              (_0x1cb241 == null ? undefined : _0x1cb241.id) !==
                this._popupChartId)) &&
            this._closePopup();
        }),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["transformChange$"].subscribe(
          ({ id: _0x47f8a4 }) => {
            this._clearSelectedTarget(_0x47f8a4);
          },
        ),
      ),
      this.disposeWithMe(
        this._sheetCanvasFloatDomManagerService["remove$"].subscribe(
          ({ id: _0x5ef375 }) => {
            this._clearSelectedTarget(_0x5ef375);
          },
        ),
      ),
      this.disposeWithMe(
        this._chartHostProvider["removeHost$"].subscribe((_0x585b21) => {
          this._clearSelectedTarget(_0x585b21);
        }),
      ));
  }
  _openEditPanelByDoubleClick(_0x29bbf8) {
    if (this._chartUIService["chartEditorOpen"]) return;
    let _0x44571b = this._chartModelService["getChartModel"](_0x29bbf8),
      _0x485df4 =
        this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x29bbf8);
    !_0x44571b ||
      !_0x485df4 ||
      this._commandService["executeCommand"](H.id, {
        unitId: _0x485df4.unitId,
        subUnitId: _0x485df4.subUnitId ?? "",
        drawingId: _0x29bbf8,
      });
  }
  _openFloatMenu(_0x4b7fd8, _0x2d0d10) {
    if (!this._chartUIService["isElementEditModeActive"](_0x4b7fd8)) return;
    let _0x8cc7f7 = this._chartModelService["getChartModel"](_0x4b7fd8),
      _0x52874f = _0x8cc7f7 ? Kr(_0x8cc7f7, _0x2d0d10.hit) : undefined;
    if (!_0x52874f) {
      (this._chartUIService["clearPanelRoute"](), this._closePopup());
      return;
    }
    let _0x1f0dfa =
      this._sheetCanvasFloatDomManagerService["getFloatDomInfo"](_0x4b7fd8);
    if (!_0x8cc7f7 || !_0x1f0dfa) {
      (this._chartUIService["clearPanelRoute"](), this._closePopup());
      return;
    }
    if (this._isMobileRuntime()) {
      (this._chartUIService["setPanelRoute"](_0x4b7fd8, _0x52874f.route),
        this._closePopup(),
        this._commandService["executeCommand"](H.id, {
          unitId: _0x1f0dfa.unitId,
          subUnitId: _0x1f0dfa.subUnitId ?? "",
          drawingId: _0x4b7fd8,
          route: _0x52874f.route,
        }));
      return;
    }
    let _0xfedbd3 = JSON.stringify([
      _0x1f0dfa.unitId,
      _0x1f0dfa.subUnitId,
      _0x4b7fd8,
      _0x52874f.target,
    ]);
    if (
      (this._popupDisposable && this._popupSessionKey === _0xfedbd3) ||
      (this._chartUIService["setPanelRoute"](_0x4b7fd8, _0x52874f.route),
      this._closePopup(),
      !_0x52874f.showFloatMenu)
    )
      return;
    let _0x2f28b7 = Wi(_0x2d0d10, _0x1f0dfa.position$, () =>
      this._clearHiddenSelectedTarget(_0x4b7fd8),
    );
    if (!_0x2f28b7.visible) {
      _0x2f28b7.dispose();
      return;
    }
    let _0xa8102c =
      this._sheetCanvasPopManagerService[
        "attachPopupToDynamicAbsolutePosition"
      ](
        _0x2f28b7.initialRect,
        _0x2f28b7.anchorRect$,
        {
          componentKey: _0x11323d,
          constrainToCanvas: true,
          direction: "top-center",
          offset: [0, 8],
          extraProps: {
            unitId: _0x1f0dfa.unitId,
            subUnitId: _0x1f0dfa.subUnitId,
            chartId: _0x4b7fd8,
            drawingId: _0x4b7fd8,
            element: _0x2d0d10.hit,
            target: _0x52874f.target,
            adapterKey: Gi,
          },
        },
        _0x1f0dfa.unitId,
        _0x1f0dfa.subUnitId,
      ) ?? null;
    if (!_0xa8102c) {
      _0x2f28b7.dispose();
      return;
    }
    let _0x413911 = new _0x19aa48();
    (_0x413911.add(_0xa8102c),
      _0x413911.add(_0x2f28b7),
      (this._popupDisposable = _0x413911),
      (this._popupChartId = _0x4b7fd8),
      (this._popupSessionKey = _0xfedbd3));
  }
  _closePopup() {
    var _0x36be28;
    ((_0x36be28 = this._popupDisposable) == null || _0x36be28.dispose(),
      (this._popupDisposable = null),
      (this._popupChartId = null),
      (this._popupSessionKey = null));
  }
  _isMobileRuntime() {
    return this._contextService["getContextValue"](_0x31d563);
  }
  _clearSelectedTarget(_0x349571) {
    (!this._chartUIService["isElementEditModeActive"](_0x349571) &&
      this._popupChartId !== _0x349571) ||
      (this._chartUIService["clearPanelRoute"](),
      this._popupChartId === _0x349571 && this._closePopup());
  }
  _clearHiddenSelectedTarget(_0x133feb) {
    (this._clearSelectedTarget(_0x133feb),
      this._chartUIService["isElementEditModeActive"](_0x133feb) &&
        (this._chartRenderService["setElementEditMode"](_0x133feb, false),
        this._chartRenderService["setElementEditMode"](_0x133feb, true)));
  }
};
Ki = J(
  [
    q(0, _0x5b0a50(_0x2cb440)),
    q(1, _0x5b0a50(Y)),
    q(2, ui),
    q(3, _0x5b0a50(_0x407092)),
    q(4, _0x5b0a50(_0x474276)),
    q(5, X),
    q(6, _0x5b0a50(_0x2cfdd7)),
    q(7, _0x2956ab),
    q(8, _0x5b0a50(_0x57cf41)),
    q(9, _0x57426f),
  ],
  Ki,
);
let qi = class extends _0x352eaa {
  constructor(_0x1143f6, _0x5493a7) {
    (super(),
      (this._chartHostProviderService = _0x1143f6),
      (this._chartModelService = _0x5493a7),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._chartHostProviderService["removeHost$"].subscribe((_0x4472e8) => {
        this._chartModelService["removeChartModel"](_0x4472e8);
      }),
    );
  }
};
qi = J([q(0, ui), q(1, _0x5b0a50(_0x2cb440))], qi);
let Ji = class extends _0x352eaa {
  constructor(
    _0x3df504,
    _0x5f29c3,
    _0x3f3f8c,
    _0x3e47e2,
    _0x294bbc,
    _0x49669a,
  ) {
    (super(),
      (this._chartModelService = _0x3df504),
      (this._chartRenderService = _0x5f29c3),
      (this._localeService = _0x3f3f8c),
      (this._chartUIService = _0x3e47e2),
      (this._commandService = _0x294bbc),
      (this._sheetPrintInterceptorService = _0x49669a),
      G(this, "_pendingMutationConfigRenders", new Map()),
      G(this, "_pendingDataUpdateChartIds", new Set()),
      this._init(),
      this._listenChartUpdateMutations(),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x73a574, _0xb073e8, _0x2c9a2c) => {
            let _0x4adb82 = this._chartRenderService["renderChartsForPrinting"](
              _0xb073e8.unitId,
              _0xb073e8.subUnitId,
              _0xb073e8.scene,
            );
            return (
              _0xb073e8.resourceCollector["add"](_0x4adb82),
              _0x2c9a2c(_0x73a574)
            );
          },
        },
      ),
    );
  }
  _init() {
    this.disposeWithMe(
      this._chartModelService["chartModelAdded$"].subscribe((_0x19d621) => {
        if (_0x19d621) {
          let _0x1bf976 = new _0x19aa48();
          (_0x1bf976.add(
            _0x19d621.dataSource["data$"].pipe(_0x2b4ed6(1)).subscribe(() => {
              this._pendingDataUpdateChartIds["add"](_0x19d621.id);
            }),
          ),
            _0x1bf976.add(
              _0x19d621.config$["pipe"](
                _0x4b598b(_0x19d621.style$),
                _0x4b598b(this._localeService["direction$"]),
                _0x5b3c9d(100),
              ).subscribe(([[_0x551338, _0x3336f0], _0x14310a]) => {
                var _0x643e3d;
                if (!_0x551338) return;
                ((_0x643e3d = _0x551338.category) == null ||
                  _0x643e3d.items["forEach"]((_0x190878, _0x29eb8e) => {
                    _0x190878.label ||=
                      this._localeService["t"](
                        "sheets-chart-ui.common.category",
                      ) +
                      "\x20" +
                      (_0x29eb8e + 1);
                  }),
                  _0x551338.series["forEach"]((_0x239201, _0x56202f) => {
                    _0x239201.name ||=
                      this._localeService["t"]("sheets-chart-ui.chord.target") +
                      "\x20" +
                      (_0x56202f + 1);
                  }));
                let _0x5e94be = this._chartRenderService[
                    "createRuntimeChartStyle"
                  ](_0x19d621, _0x14310a),
                  _0x344cf1 = this._pendingDataUpdateChartIds["delete"](
                    _0x19d621.id,
                  );
                this._chartRenderService["render"](
                  _0x19d621.id,
                  _0x551338,
                  _0x5e94be,
                  { animateDataUpdate: _0x344cf1 },
                );
              }),
            ),
            _0x19d621.onDispose(() => {
              (this._pendingDataUpdateChartIds["delete"](_0x19d621.id),
                _0x1bf976.dispose());
            }));
        }
      }),
    );
  }
  _listenChartUpdateMutations() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x4b6e29) => {
        if (_0x4b6e29.id !== _0x2f3aad.id) return;
        let _0x443134 = _0x4b6e29.params;
        _0x443134 != null &&
          _0x443134.chartModelId &&
          Promise.resolve().then(() =>
            this._renderAfterChartUpdateMutation(_0x443134),
          );
      }),
    );
  }
  _renderAfterChartUpdateMutation(_0x26b1dd) {
    let _0xf68f35 = this._chartModelService["getChartModel"](
      _0x26b1dd.chartModelId,
    );
    if (!_0xf68f35 || _0xf68f35.chartType !== _0x3974b2.WordCloud) return;
    let _0x4c0608 = _0xf68f35.config;
    if (!_0x4c0608) {
      this._renderWhenConfigReady(_0xf68f35);
      return;
    }
    this._renderChartModel(_0xf68f35, _0x4c0608);
  }
  _renderWhenConfigReady(_0xb1e635) {
    if (this._pendingMutationConfigRenders["get"](_0xb1e635.id)) return;
    let _0x1c9e62 = _0xb1e635.config$["pipe"](
      _0x2facec((_0x218249) => _0x218249 != null),
      _0x5dcb4a(1),
    ).subscribe((_0x3c2658) => {
      (this._pendingMutationConfigRenders["delete"](_0xb1e635.id),
        this._renderChartModel(_0xb1e635, _0x3c2658));
    });
    (this._pendingMutationConfigRenders["set"](_0xb1e635.id, _0x1c9e62),
      _0xb1e635.onDispose(() => {
        (_0x1c9e62.unsubscribe(),
          this._pendingMutationConfigRenders["delete"](_0xb1e635.id));
      }));
  }
  _renderChartModel(_0x135625, _0x56b5cf) {
    let _0x546426 = this._chartRenderService["createRuntimeChartStyle"](
      _0x135625,
      this._localeService["getDirection"](),
    );
    this._chartRenderService["render"](_0x135625.id, _0x56b5cf, _0x546426);
  }
};
Ji = J(
  [
    q(0, _0x5b0a50(_0x2cb440)),
    q(1, _0x5b0a50(Y)),
    q(2, _0x5b0a50(_0x2008b6)),
    q(3, X),
    q(4, _0x2956ab),
    q(5, _0x5b0a50(_0x3398d1)),
  ],
  Ji,
);
function Yi(_0x1f66f6, _0x3f3702) {
  return _0x1f66f6.unitId !== _0x3f3702.unitId ||
    _0x1f66f6.subUnitId !== _0x3f3702.sourceSubUnitId
    ? _0x1f66f6
    : { ..._0x1f66f6, subUnitId: _0x3f3702.targetSubUnitId };
}
function Xi(_0x1c6fbd, _0x438796) {
  let { rangeInfo: _0x27d0d6 } = _0x1c6fbd;
  return Array.isArray(_0x27d0d6)
    ? {
        ..._0x1c6fbd,
        rangeInfo: _0x27d0d6.map((_0x4dc515) => ({
          ..._0x4dc515,
          ...(_0x4dc515.header
            ? { header: Yi(_0x4dc515.header, _0x438796) }
            : {}),
          range: Yi(_0x4dc515.range, _0x438796),
        })),
      }
    : {
        ..._0x1c6fbd,
        rangeInfo: {
          ..._0x27d0d6,
          rangeInfo: Yi(_0x27d0d6.rangeInfo, _0x438796),
        },
      };
}
function Zi(_0x117ac6, _0x53233f, _0x24e6cd, _0x4502e4) {
  let _0x274901 = _0xc88a4a(_0x117ac6, _0x53233f, _0x24e6cd),
    _0x552159 = [];
  for (let _0x447441 of _0x53233f) {
    let _0x37e0fa = _0x274901.idMap["get"](_0x447441.drawingId),
      _0x2cf0c2 = _0x4502e4(_0x447441);
    !_0x37e0fa ||
      !_0x2cf0c2 ||
      _0x552159.push({
        targetChartId: _0x37e0fa,
        source: Xi(_0x2cf0c2, _0x24e6cd),
      });
  }
  return _0x552159;
}
let Qi = class extends _0x352eaa {
  constructor(_0x2b0d2c, _0x209bed, _0x412c63, _0x45a0b5, _0x922ea0) {
    (super(),
      (this._univerInstanceService = _0x2b0d2c),
      (this._sheetInterceptorService = _0x209bed),
      (this._sheetDrawingService = _0x412c63),
      (this._chartModelService = _0x45a0b5),
      (this._sheetsChartService = _0x922ea0),
      this._initSheetChange());
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x93872a) => {
          if (_0x93872a.id === _0x416d23.id) {
            let _0x5412f2 = _0x5beb96(
              this._univerInstanceService,
              _0x93872a.params,
            );
            if (!_0x5412f2) return { redos: [], undos: [] };
            let { unitId: _0x2b42c2, subUnitId: _0x217f3b } = _0x5412f2,
              _0x20a3f9 = this._sheetDrawingService["getDrawingData"](
                _0x2b42c2,
                _0x217f3b,
              ),
              _0x2839e2 = Object.values(_0x20a3f9).filter(
                (_0x41cf85) =>
                  _0x41cf85.drawingType === _0x8f911e.DRAWING_CHART,
              );
            if (_0x2839e2.length === 0) return { redos: [], undos: [] };
            let _0x9db0da = [],
              _0x11f62d = [];
            for (let _0x47f9ff = 0; _0x47f9ff < _0x2839e2.length; _0x47f9ff++) {
              let _0xddcd44 = _0x2839e2[_0x47f9ff],
                _0x8ced7d = this._chartModelService["getChartModel"](
                  _0xddcd44.drawingId,
                );
              if (!_0x8ced7d) continue;
              let _0x319e11 = this._sheetsChartService["getChartSourceSpec"](
                _0x8ced7d.id,
              );
              if (!_0x319e11) continue;
              let {
                chartType: _0x159124,
                context: _0x1c9cc3,
                style: _0xe88038,
                dataAggregation: _0x7af73d,
              } = _0x8ced7d.serialize();
              (_0x9db0da.push({
                id: _0x26a1d3.id,
                params: {
                  unitId: _0x2b42c2,
                  subUnitId: _0x217f3b,
                  chartId: _0xddcd44.drawingId,
                },
              }),
                _0x11f62d.push({
                  id: _0x48c64d.id,
                  params: {
                    unitId: _0x2b42c2,
                    subUnitId: _0x217f3b,
                    chartId: _0xddcd44.drawingId,
                    chartType: _0x159124,
                    ..._0x5ee272(_0x319e11),
                    context: _0x1c9cc3,
                    style: _0xe88038,
                    dataAggregation: _0x7af73d,
                  },
                }));
            }
            return { redos: _0x9db0da, undos: _0x11f62d };
          } else {
            if (_0x93872a.id === _0x67454.id) {
              let {
                unitId: _0x306b3a,
                subUnitId: _0x1fbc2b,
                targetSubUnitId: _0x51c7da,
                copyContext: _0x564485,
              } = _0x93872a.params;
              if (!_0x306b3a || !_0x1fbc2b || !_0x51c7da)
                return { redos: [], undos: [] };
              let _0x54ba96 = this._sheetDrawingService["getDrawingData"](
                  _0x306b3a,
                  _0x1fbc2b,
                ),
                _0x6a634 = Object.values(_0x54ba96).filter(
                  (_0x3414f9) =>
                    _0x3414f9.drawingType === _0x8f911e.DRAWING_CHART,
                );
              if (_0x6a634.length === 0) return { redos: [], undos: [] };
              let _0x45b122 = Zi(
                  _0x564485,
                  _0x6a634,
                  {
                    unitId: _0x306b3a,
                    sourceSubUnitId: _0x1fbc2b,
                    targetSubUnitId: _0x51c7da,
                  },
                  (_0x33e333) => {
                    let _0x5d1adc = this._chartModelService["getChartModel"](
                      _0x33e333.drawingId,
                    );
                    if (!_0x5d1adc) return;
                    let _0x2dd590 = this._sheetsChartService[
                      "getChartSourceSpec"
                    ](_0x5d1adc.id);
                    if (!_0x2dd590) return;
                    let {
                      chartType: _0x3c21d7,
                      context: _0x2e16b2,
                      style: _0x87898,
                      dataAggregation: _0x580744,
                    } = _0x5d1adc.serialize();
                    return {
                      rangeInfo: _0x2dd590,
                      chartType: _0x3c21d7,
                      context: _0x2e16b2,
                      style: _0x87898,
                      dataAggregation: _0x580744,
                    };
                  },
                ),
                _0x5c3fab = [],
                _0x4d66c2 = [];
              for (let {
                targetChartId: _0x64dc,
                source: _0x2eeadb,
              } of _0x45b122) {
                let {
                  rangeInfo: _0x1a6992,
                  chartType: _0x30c793,
                  context: _0x304c8e,
                  style: _0x126ddd,
                  dataAggregation: _0x60ed22,
                } = _0x2eeadb;
                (_0x5c3fab.push({
                  id: _0x48c64d.id,
                  params: {
                    unitId: _0x306b3a,
                    subUnitId: _0x51c7da,
                    chartId: _0x64dc,
                    chartType: _0x30c793,
                    ..._0x5ee272(_0x1a6992),
                    context: _0x304c8e,
                    style: _0x126ddd,
                    dataAggregation: _0x60ed22,
                  },
                }),
                  _0x4d66c2.push({
                    id: _0x26a1d3.id,
                    params: {
                      unitId: _0x306b3a,
                      subUnitId: _0x51c7da,
                      chartId: _0x64dc,
                    },
                  }));
              }
              return { redos: _0x5c3fab, undos: _0x4d66c2 };
            }
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
Qi = J(
  [
    q(0, _0x5b0a50(_0xf2e955)),
    q(1, _0x5b0a50(_0x57392a)),
    q(2, _0x5b0a50(_0x176114)),
    q(3, _0x5b0a50(_0x2cb440)),
    q(4, _0x5b0a50(_0x354de9)),
  ],
  Qi,
);
let $i = class extends _0x352eaa {
  constructor(_0x1a39a6, _0x382123) {
    (super(),
      (this._componentManager = _0x1a39a6),
      (this._iconManager = _0x382123),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ PenIcon: _0x1aa5a7 }));
  }
  _registerComponents() {
    [[Ti, wi]].forEach(([_0x9f3490, _0x4ff9a1]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x9f3490, _0x4ff9a1),
      );
    });
  }
};
$i = J([q(0, _0x5b0a50(_0x5cb8e8)), q(1, _0x5b0a50(_0x654cd3))], $i);
let ea = class extends _0x352eaa {
  constructor(_0x21776a, _0x15f753, _0x14a473, _0x30e07d, _0x3cb07b) {
    (super(),
      (this._sheetSkeletonService = _0x21776a),
      (this._sheetClipboardService = _0x15f753),
      (this._sheetDrawingService = _0x14a473),
      (this._chartModelService = _0x30e07d),
      (this._sheetsChartService = _0x3cb07b),
      G(this, "_copyInfo", undefined),
      this._initCopyPaste());
  }
  get _focusedDrawings() {
    return this._sheetDrawingService["getFocusDrawings"]();
  }
  _initCopyPaste() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: _0x2ab3ef,
        onBeforeCopyFocusedObject: (_0x1585fc, _0x1ca366, _0xb298d3) => {
          this._copyInfo = null;
          let _0x525f28 = this._focusedDrawings["filter"](
            (_0x1f0e26) => _0x1f0e26.drawingType === _0x8f911e.DRAWING_CHART,
          );
          return _0x525f28.length === 0
            ? false
            : ((this._copyInfo = {
                unitId: _0x1585fc,
                subUnitId: _0x1ca366,
                copyType: _0xb298d3,
                drawings: _0x525f28,
              }),
              true);
        },
        onBeforeCopy: (_0x3287e6, _0x1fb960, _0x50a8d5, _0x5e01d5) => {
          ((this._copyInfo = null),
            this._createCopyInfoByRange(
              _0x3287e6,
              _0x1fb960,
              _0x50a8d5,
              _0x5e01d5,
            ));
        },
        onPasteCells: (_0x4bbf01, _0xb22ec0, _0x9acdd9, _0x2ba51a) => {
          if (!_0x2ba51a.copyId || !_0x4bbf01 || !this._copyInfo)
            return { redos: [], undos: [] };
          let { pasteType: _0x3955df } = _0x2ba51a;
          return _0x3955df === _0x2c982d.DEFAULT_PASTE
            ? this._generatePasteMutations(
                _0xb22ec0,
                this._copyInfo["copyType"] === _0xc0c7fb.CUT,
              )
            : { redos: [], undos: [] };
        },
      }),
    );
  }
  _createCopyInfoByRange(_0x4ee3ba, _0x23e915, _0x51a9b9, _0x409482) {
    let _0x485173 = this._sheetSkeletonService["getSkeleton"](
      _0x4ee3ba,
      _0x23e915,
    );
    if (!_0x485173) return;
    let _0x328e53 = _0x171b3b(_0x485173, _0x51a9b9);
    if (!_0x328e53) return;
    let {
        startX: _0x39f184,
        endX: _0x23d642,
        startY: _0x263d5e,
        endY: _0x1e0719,
      } = _0x328e53,
      _0x5f316f = this._sheetDrawingService["getDrawingData"](
        _0x4ee3ba,
        _0x23e915,
      ),
      _0x5d117d = [];
    for (let [_0x3d641c, _0x33875e] of Object.entries(_0x5f316f)) {
      if (_0x33875e.drawingType !== _0x8f911e.DRAWING_CHART) continue;
      let { transform: _0x5d74d5 } = _0x33875e;
      if (!_0x5d74d5) continue;
      let {
        left: _0x492ff6 = 0,
        top: _0x8c6118 = 0,
        width: _0x7f476c = 0,
        height: _0x223249 = 0,
      } = _0x5d74d5;
      _0x39f184 <= _0x492ff6 &&
        _0x23d642 >= _0x492ff6 + _0x7f476c &&
        _0x263d5e <= _0x8c6118 &&
        _0x1e0719 >= _0x8c6118 + _0x223249 &&
        _0x5d117d.push(_0x33875e);
    }
    _0x5d117d.length > 0 &&
      (this._copyInfo = {
        unitId: _0x4ee3ba,
        subUnitId: _0x23e915,
        copyType: _0x409482,
        copyRange: _0x51a9b9,
        drawings: _0x5d117d,
      });
  }
  _generatePasteMutations(_0x1f1298, _0x1cbdf9) {
    let {
        unitId: _0x3dcb93,
        subUnitId: _0x1d19a6,
        range: _0x5aae2f,
      } = _0x1f1298,
      _0x46dc98 = this._sheetSkeletonService["getSkeleton"](
        _0x3dcb93,
        _0x1d19a6,
      );
    if (!_0x46dc98) return { redos: [], undos: [] };
    let _0x2752f5 = _0x25c64f(_0x5aae2f),
      {
        unitId: _0x28e6d1,
        subUnitId: _0xe54bfc,
        copyRange: _0x4aaf34,
        drawings: _0x2d755e,
      } = this._copyInfo,
      _0x360319 = this._sheetSkeletonService["getSkeleton"](
        _0x28e6d1,
        _0xe54bfc,
      );
    if (!_0x360319) return { redos: [], undos: [] };
    let _0x321a57 = [],
      _0x58d85b = [];
    for (let _0x39037d of _0x2d755e) {
      let {
          drawingId: _0x1afdab,
          transform: _0x25dc9c,
          sheetTransform: _0x4c1013,
        } = _0x39037d,
        _0x5c7960 = this._chartModelService["getChartModel"](_0x1afdab);
      if (!_0x5c7960 || !_0x25dc9c || !_0x4c1013) continue;
      let _0x441614 = this._updateTransform(
        { transform: _0x25dc9c, sheetTransform: _0x4c1013 },
        { skeleton: _0x360319, range: _0x4aaf34 },
        { skeleton: _0x46dc98, range: _0x2752f5 },
      );
      if (_0x1cbdf9) {
        let { redos: _0x52416b, undos: _0x37489e } =
          this._generateCutPasteMutations(
            {
              fromUnitId: _0x28e6d1,
              fromSubUnitId: _0xe54bfc,
              toUnitId: _0x3dcb93,
              toSubUnitId: _0x1d19a6,
              drawing: _0x39037d,
              newTransforms: _0x441614,
            },
            _0x5c7960,
          );
        (_0x321a57.push(..._0x52416b), _0x58d85b.push(..._0x37489e));
        continue;
      }
      let { redos: _0x5f4b93, undos: _0x494cb3 } =
        this._generateCopyPasteMutations(
          {
            toUnitId: _0x3dcb93,
            toSubUnitId: _0x1d19a6,
            drawing: _0x39037d,
            newTransforms: _0x441614,
          },
          _0x5c7960,
        );
      (_0x321a57.push(..._0x5f4b93), _0x58d85b.push(..._0x494cb3));
    }
    return { redos: _0x321a57, undos: _0x58d85b };
  }
  _generateCutPasteMutations(_0x3a2c17, _0x5b511c) {
    let {
        fromUnitId: _0x9e84a9,
        fromSubUnitId: _0x52d27d,
        toUnitId: _0x3f93b9,
        toSubUnitId: _0x3bd42f,
        drawing: _0x341a56,
        newTransforms: _0xa33a01,
      } = _0x3a2c17,
      _0x518024 = {
        ..._0x341a56,
        unitId: _0x3f93b9,
        subUnitId: _0x3bd42f,
        transform: _0xa33a01.transform,
        sheetTransform: _0xa33a01.sheetTransform,
      };
    if (_0x3f93b9 === _0x9e84a9 && _0x3bd42f === _0x52d27d) {
      let {
        redo: _0x2b8c66,
        undo: _0x28767a,
        objects: _0x1e241a,
      } = this._sheetDrawingService["getBatchUpdateOp"]([_0x518024]);
      return {
        redos: [
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              type: _0x20c3a8.UPDATE,
              op: _0x2b8c66,
              objects: _0x1e241a,
            },
          },
        ],
        undos: [
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              type: _0x20c3a8.UPDATE,
              op: _0x28767a,
              objects: _0x1e241a,
            },
          },
        ],
      };
    } else {
      let _0x5b92d3 = this._sheetDrawingService["getBatchRemoveOp"]([
          _0x341a56,
        ]),
        _0x432aa0 = this._sheetDrawingService["getBatchAddOp"]([_0x518024]),
        _0x1f1299 = this._sheetsChartService["getChartSourceSpec"](
          _0x5b511c.id,
        );
      if (!_0x1f1299) return { redos: [], undos: [] };
      let {
        chartType: _0xe06bda,
        context: _0x9cebf7,
        style: _0x118436,
        dataAggregation: _0x240e8c,
      } = _0x5b511c.serialize();
      return {
        redos: [
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x9e84a9,
              subUnitId: _0x52d27d,
              type: _0x20c3a8.REMOVE,
              op: _0x5b92d3.redo,
              objects: _0x5b92d3.objects,
            },
          },
          {
            id: _0x26a1d3.id,
            params: {
              unitId: _0x9e84a9,
              subUnitId: _0x52d27d,
              chartId: _0x341a56.drawingId,
            },
          },
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              type: _0x20c3a8.INSERT,
              op: _0x432aa0.redo,
              objects: _0x432aa0.objects,
            },
          },
          {
            id: _0x48c64d.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              chartId: _0x341a56.drawingId,
              chartType: _0xe06bda,
              ..._0x5ee272(_0x1f1299),
              context: _0x9cebf7,
              style: _0x118436,
              dataAggregation: _0x240e8c,
            },
          },
        ],
        undos: [
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x9e84a9,
              subUnitId: _0x52d27d,
              type: _0x20c3a8.INSERT,
              op: _0x5b92d3.undo,
              objects: _0x5b92d3.objects,
            },
          },
          {
            id: _0x48c64d.id,
            params: {
              unitId: _0x9e84a9,
              subUnitId: _0x52d27d,
              chartId: _0x341a56.drawingId,
              chartType: _0xe06bda,
              ..._0x5ee272(_0x1f1299),
              context: _0x9cebf7,
              style: _0x118436,
              dataAggregation: _0x240e8c,
            },
          },
          {
            id: _0x6ec39a.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              type: _0x20c3a8.REMOVE,
              op: _0x432aa0.undo,
              objects: _0x432aa0.objects,
            },
          },
          {
            id: _0x26a1d3.id,
            params: {
              unitId: _0x3f93b9,
              subUnitId: _0x3bd42f,
              chartId: _0x341a56.drawingId,
            },
          },
        ],
      };
    }
  }
  _generateCopyPasteMutations(_0x4b72b8, _0x1ed7c9) {
    let {
        toUnitId: _0x332873,
        toSubUnitId: _0x19bd2f,
        drawing: _0x2dd967,
        newTransforms: _0x24f8c1,
      } = _0x4b72b8,
      _0x92d946 = _0x402ce8(),
      _0x49aa1c = {
        ..._0x2dd967,
        unitId: _0x332873,
        subUnitId: _0x19bd2f,
        drawingId: _0x92d946,
        transform: _0x24f8c1.transform,
        sheetTransform: _0x24f8c1.sheetTransform,
      },
      {
        redo: _0x5ef11e,
        undo: _0xd00b68,
        objects: _0x5af176,
      } = this._sheetDrawingService["getBatchAddOp"]([_0x49aa1c]),
      _0x2dffba = this._sheetsChartService["getChartSourceSpec"](_0x1ed7c9.id);
    if (!_0x2dffba) return { redos: [], undos: [] };
    let {
      chartType: _0x3c9771,
      context: _0x40b1e1,
      style: _0x36bb95,
      dataAggregation: _0x5cf5d5,
    } = _0x1ed7c9.serialize();
    return {
      redos: [
        {
          id: _0x6ec39a.id,
          params: {
            unitId: _0x332873,
            subUnitId: _0x19bd2f,
            type: _0x20c3a8.INSERT,
            op: _0x5ef11e,
            objects: _0x5af176,
          },
        },
        {
          id: _0x48c64d.id,
          params: {
            unitId: _0x332873,
            subUnitId: _0x19bd2f,
            chartId: _0x92d946,
            chartType: _0x3c9771,
            ..._0x5ee272(_0x2dffba),
            context: _0x40b1e1,
            style: _0x36bb95,
            dataAggregation: _0x5cf5d5,
          },
        },
      ],
      undos: [
        {
          id: _0x6ec39a.id,
          params: {
            unitId: _0x332873,
            subUnitId: _0x19bd2f,
            type: _0x20c3a8.REMOVE,
            op: _0xd00b68,
            objects: _0x5af176,
          },
        },
        {
          id: _0x26a1d3.id,
          params: {
            unitId: _0x332873,
            subUnitId: _0x19bd2f,
            chartId: _0x92d946,
          },
        },
      ],
    };
  }
  _updateTransform(_0x189547, _0x48e455, _0x1af69e) {
    let { range: _0x1ed122, skeleton: _0x188832 } = _0x48e455,
      { range: _0x140375, skeleton: _0x5d59e8 } = _0x1af69e,
      { transform: _0xbcb927, sheetTransform: _0xdfa891 } = _0x189547,
      _0x2a69fe = { ..._0xbcb927 };
    if (_0x1ed122) {
      let _0x4d7090 = _0x171b3b(_0x188832, _0x1ed122),
        _0xb56777 = _0x171b3b(_0x5d59e8, _0x140375);
      if (_0x4d7090 && _0xb56777) {
        let _0x402bcf = _0xb56777.startX - _0x4d7090.startX,
          _0xc5ea9f = _0xb56777.startY - _0x4d7090.startY;
        ((_0x2a69fe.left = (_0x2a69fe.left ?? 0) + _0x402bcf),
          (_0x2a69fe.top = (_0x2a69fe.top ?? 0) + _0xc5ea9f));
      }
    } else {
      let _0x12f556 = _0x171b3b(_0x5d59e8, _0x140375);
      ((_0x2a69fe.left = _0x12f556 == null ? undefined : _0x12f556.startX),
        (_0x2a69fe.top = _0x12f556 == null ? undefined : _0x12f556.startY));
    }
    return {
      transform: _0x2a69fe,
      sheetTransform: _0x29e7ba(_0x2a69fe, _0x5d59e8) ?? _0xdfa891,
    };
  }
};
ea = J(
  [
    q(0, _0x5b0a50(_0x5e1050)),
    q(1, _0x5b0a50(_0x59373e)),
    q(2, _0x5b0a50(_0x176114)),
    q(3, _0x5b0a50(_0x2cb440)),
    q(4, _0x5b0a50(_0x354de9)),
  ],
  ea,
);
let ta = class extends _0x352eaa {
  constructor(_0x14c7bc, _0x57cffe, _0xd44160, _0x21cb2a) {
    (super(),
      (this._commandService = _0x14c7bc),
      (this._localeService = _0x57cffe),
      (this._sheetPermissionCheckController = _0xd44160),
      (this._sheetsChartService = _0x21cb2a),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x1d2153) => {
        let _0x581de5, _0x1b05e1;
        if (_0x1d2153.id === _0xbccb25.id) {
          let _0x5de898 = _0x1d2153.params;
          ((_0x581de5 = _0x5de898.unitId), (_0x1b05e1 = _0x5de898.subUnitId));
        } else {
          if (_0x1d2153.id === _0xa04db7.id || _0x1d2153.id === _0x365152.id) {
            let _0x55ea13 = _0x1d2153.params;
            ((_0x581de5 = _0x55ea13.unitId),
              (_0x1b05e1 = this._sheetsChartService["getSubUnitId"](
                _0x55ea13.unitId,
                _0x55ea13.chartModelId,
              )));
          }
        }
        !_0x581de5 ||
          !_0x1b05e1 ||
          this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            { workbookTypes: [_0x1f6651], worksheetTypes: [_0x18113f] },
            _0x581de5,
            _0x1b05e1,
          ) ||
          this._sheetPermissionCheckController["blockExecuteWithoutPermission"](
            this._localeService["t"]("sheets-chart-ui.permission.editErr"),
          );
      }),
    );
  }
};
ta = J(
  [
    q(0, _0x5b0a50(_0x2956ab)),
    q(1, _0x5b0a50(_0x2008b6)),
    q(2, _0x5b0a50(_0xee18c2)),
    q(3, _0x5b0a50(_0x354de9)),
  ],
  ta,
);
let na = class extends _0x352eaa {
  constructor(_0x571ac3, _0xd6143c) {
    (super(),
      (this._renderService = _0xd6143c),
      this.disposeWithMe(_0x571ac3.register(this)));
  }
  supports(_0x365ebc) {
    return "unitId" in _0x365ebc && "subUnitId" in _0x365ebc;
  }
  exportImage(_0x417849, _0x19b5a5) {
    return this._renderService["exportImage"](_0x417849.getId(), _0x19b5a5);
  }
};
na = J([q(0, _0x5b0a50(_0x103463)), q(1, _0x5b0a50(Y))], na);
let $ = class extends _0x2ad963 {
  constructor(_0x588236 = wr, _0x3ce610, _0x5a4a4d, _0x4baa88) {
    (super(),
      (this._config = _0x588236),
      (this._injector = _0x3ce610),
      (this._configService = _0x5a4a4d),
      (this._commandService = _0x4baa88),
      G(this, "_resolvedConfig", undefined));
    let { ..._0x4aabca } = _0x3d9d13({}, wr, this._config);
    ((this._resolvedConfig = _0x4aabca),
      this._configService["setConfig"](Cr, _0x4aabca),
      this._initCommands());
  }
  onStarting() {
    (this._injector["add"]([$i]), this._injector["get"]($i));
    let _0x30d721 = this._injector,
      _0x47f53d = [
        [X, { useClass: mi }],
        [ui, { useClass: li }],
        [ni],
        [Y],
        [na],
        [Q],
        [qi],
        [Ji],
        [ea],
        [Qi],
        [ta],
      ],
      _0x4ec9fd = [[Q], [Ji], [qi], [na], [X], [ea], [Qi], [ta]];
    (this._resolvedConfig["enableChartElementFloatMenu"] &&
      (_0x47f53d.push([Ki]), _0x4ec9fd.push([Ki])),
      _0x47f53d.forEach((_0x26be64) => _0x30d721.add(_0x26be64)),
      _0x196405(this._injector, _0x4ec9fd));
  }
  onRendered() {
    var _0x597347;
    (_0x597347 = this._injector["get"](Q)) == null || _0x597347.initPanel();
  }
  _initCommands() {
    [jr, Dr, Or, kr, Ar, H, Tr].forEach((_0x14805d) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x14805d)),
    );
  }
};
(G($, "type", _0x1139b3.UNIVER_SHEET),
  G($, "pluginName", "UniverSheetsChartUIPlugin"),
  G($, "packageName", ki),
  G($, "version", Ai),
  ($ = J(
    [
      _0x3366d6(
        _0x18059c,
        _0x20d39,
        _0x1cff46,
        _0xfd7a80,
        _0x2beee4,
        _0x4347d5,
        _0x482de2,
        _0x14da6a,
        _0x24b393,
      ),
      q(1, _0x5b0a50(_0x57cf41)),
      q(2, _0x1999fa),
      q(3, _0x2956ab),
    ],
    $,
  )));
export {
  X as ISheetsChartUIService,
  Cr as SHEETS_CHART_UI_PLUGIN_CONFIG_KEY,
  Q as SheetsChartUIController,
  Ur as SheetsChartUIMenuSchema,
  mi as SheetsChartUIService,
  $ as UniverSheetsChartUIPlugin,
};
