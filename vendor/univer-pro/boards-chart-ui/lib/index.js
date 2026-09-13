import { BoardElementType as var_core_value_sig102B, BoardToolType as var_core_value_sigA7DB, IBoardElementService as var_core_value_sig5EEE, InsertBoardChartCommand as var_core_value_sig65B4, UniverBoardsPlugin as var_core_value_sigF98E, resolveBoardElementWorldBounds as var_core_value_sigA470 } from "@univerjs-pro/boards";
import { BOARDS_UI_PLUGIN_CONFIG_KEY as var_core_value_sig19A1, BOARD_INSERT_CHART_PANEL_COMPONENT as var_core_value_sig81F7, BoardCanvasPopManagerService as var_core_value_sigBE51, BoardDeleteSelectionOperation as var_core_value_sigAAD1, BoardDomLayerService as var_core_value_sigBC1A, BoardInteractionSurfaceService as var_core_value_sig3F3A, IBoardClipboardResourceAdapterService as var_core_value_sigA984, IBoardElementStateService as var_core_value_sigA504, IBoardSidePanelService as var_core_value_sig05FF, IBoardUIStateService as var_core_value_sigFBF0, UniverBoardsUIPlugin as var_core_value_sig2F95, getBoardElementRenderObjectKey as var_core_value_sigF0E1, resolveRotatedBoardObjectAnchorBound as var_core_value_sig2D8D } from "@univerjs-pro/boards-ui";
import { CommandType as var_core_value_sigE5A6, DependentOn as var_core_value_sigF449, Disposable as var_core_value_sig38C5, DisposableCollection as var_core_value_sigC87D, ICommandService as var_core_value_sigCCDC, IConfigService as var_core_value_sigC310, IUniverInstanceService as var_core_value_sigA4E8, Inject as var_core_value_sigDC07, Injector as var_core_value_sig3474, LocaleService as var_core_value_sig4E80, Optional as var_core_value_sigD23B, Plugin as var_core_value_sig2B2A, RxDisposable as var_core_value_sig0B5C, ThemeService as var_core_value_sig7D42, Tools as var_core_value_sig8FDE, UniverInstanceType as var_core_value_sig78E6, createIdentifier as var_core_value_sig541F, generateRandomId as var_core_value_sig417B, merge as var_core_value_sigAA90, toDisposable as var_core_value_sigE92D, touchDependencies as var_core_value_sig9940 } from "@univerjs/core";
import { BehaviorSubject as var_core_value_sig682D, auditTime as var_core_value_sig1435, combineLatest as var_core_value_sig4082, filter as var_core_value_sigC049, fromEvent as var_core_value_sigE5C3, merge as var_core_value_sigCCAA, skip as var_core_value_sigF32D, takeUntil as var_core_value_sig9427, throttleTime as var_core_value_sig21F4 } from "rxjs";
import { BoardChartConfigAdapter as var_core_value_sigA345, BoardChartModelService as var_core_value_sigA468, BoardChartResourceService as var_core_value_sig1561, ChangeBoardChartDataSourceCommand as var_core_value_sigDF14, DEFAULT_BOARD_CHART_VALUES as var_core_value_sig842F, RemoveBoardChartDataSourceMutation as var_core_value_sigC4C0, RemoveBoardChartSnapshotMutation as var_core_value_sig214A, SetBoardChartDataSourceMutation as var_core_value_sigCCC3, SetBoardChartSnapshotMutation as var_core_value_sig986E, UniverBoardsChartPlugin as var_core_value_sig537C, UpdateBoardChartConfigCommand as var_core_value_sigBBBC } from "@univerjs-pro/boards-chart";
import { CHART_ELEMENT_FLOAT_MENU_COMPONENT as var_core_value_sig5440, CHART_TYPE_CATALOG as var_core_value_sigE28B, ChartAxisSection as var_core_value_sig0FD9, ChartCommonDataMappingSection as var_core_value_sig5649, ChartEditBlockTitle as var_core_value_sigAF82, ChartEditPanel as var_core_value_sig21A2, ChartEditPanelSection as var_core_value_sig5C1D, ChartEditPanelTab as var_core_value_sig4CBA, ChartEditPanelTabs as var_core_value_sig8E65, ChartEditorCapability as var_core_value_sig772C, ChartEditorProvider as var_core_value_sigF309, ChartElementFloatMenuAdapterRegistry as var_core_value_sig44F9, ChartFunnelStyleSection as var_core_value_sigE532, ChartGradientFillField as var_core_value_sigF381, ChartGridlinesAndTicksSection as var_core_value_sigCB92, ChartHeatmapStyleSection as var_core_value_sigC844, ChartHostAdapter as var_core_value_sig2ED4, ChartImageExportService as var_core_value_sig0477, ChartIndicatorLineSection as var_core_value_sig6FDF, ChartInlineTableEditor as var_core_value_sig27C4, ChartLegendSection as var_core_value_sig3E1A, ChartLineAndAreaSection as var_core_value_sig7FB0, ChartNumberFormatTextField as var_core_value_sig5215, ChartParetoSeriesSection as var_core_value_sig5204, ChartPieStyleSection as var_core_value_sig5E11, ChartRadarStyleSection as var_core_value_sig4D58, ChartReferencedDataSourceEditor as var_core_value_sig2DBD, ChartRelationStyleSection as var_core_value_sig424E, ChartSectionAccordion as var_core_value_sigF481, ChartSectionAccordionContent as var_core_value_sigD7F2, ChartSectionAccordionItem as var_core_value_sig7CF3, ChartSectionAccordionTrigger as var_core_value_sig9DC6, ChartSeriesBorderFields as var_core_value_sig6643, ChartSeriesDataLabelFields as var_core_value_sig4124, ChartSeriesDataPointFields as var_core_value_sigBF1C, ChartSeriesFillFields as var_core_value_sigEEEF, ChartSeriesPointFields as var_core_value_sig9A01, ChartSeriesRightAxisField as var_core_value_sig674F, ChartSeriesRoot as var_core_value_sigC8F6, ChartSeriesSelector as var_core_value_sig8A26, ChartSeriesTypeField as var_core_value_sigD073, ChartSnapshotQueue as var_core_value_sigF631, ChartStackField as var_core_value_sig2278, ChartStyleSection as var_core_value_sig7053, ChartThemeField as var_core_value_sig52F1, ChartTitlesSection as var_core_value_sig1E74, ChartTrendlineSection as var_core_value_sig1E84, ChartTypeField as var_core_value_sig133B, ChartTypeSpecificDataSection as var_core_value_sig69B8, ChartTypeSpecificSetupSection as var_core_value_sig983D, ChartTypeSpecificStyleSection as var_core_value_sig9A03, ChartUIService as var_core_value_sig3363, ChartViewStateRegistry as var_core_value_sigF64A, ChartWaterfallSetupFields as var_core_value_sig25EC, ChartWaterfallStyleSection as var_core_value_sigA790, ChartWordCloudMaskImageIdField as var_core_value_sig9A5E, ChartWordCloudRepeatField as var_core_value_sig01B9, ChartWordCloudRoot as var_core_value_sigD6A9, ChartWordCloudShapeField as var_core_value_sig0FCF, DEFAULT_CHART_AXIS_VALUES as var_core_value_sigCF96, DEFAULT_CHART_FUNNEL_VALUES as var_core_value_sigC4E9, DEFAULT_CHART_HEATMAP_VALUES as var_core_value_sigF612, DEFAULT_CHART_INDICATOR_LINE_VALUES as var_core_value_sigAA6C, DEFAULT_CHART_LEGEND_VALUES as var_core_value_sig8BFA, DEFAULT_CHART_LINE_AND_AREA_VALUES as var_core_value_sig236B, DEFAULT_CHART_PARETO_VALUES as var_core_value_sig1951, DEFAULT_CHART_PIE_VALUES as var_core_value_sigFEA0, DEFAULT_CHART_RADAR_VALUES as var_core_value_sig931A, DEFAULT_CHART_RELATION_VALUES as var_core_value_sigEE7D, DEFAULT_CHART_SERIES_VALUES as var_core_value_sig3585, DEFAULT_CHART_STYLE_VALUES as var_core_value_sig31A8, DEFAULT_CHART_TITLE_VALUES as var_core_value_sigA4DA, DEFAULT_CHART_TRENDLINE_VALUES as var_core_value_sig6FC0, DEFAULT_CHART_WATERFALL_SETUP_VALUES as var_core_value_sig6217, DEFAULT_CHART_WATERFALL_STYLE_VALUES as var_core_value_sigB805, DEFAULT_CHART_WORD_CLOUD_VALUES as var_core_value_sig4FAE, InlineChartCreationIssueCode as var_core_value_sig1FCC, UniverChartUIPlugin as var_core_value_sigB7F9, buildChartTypeSelectOptions as var_core_value_sigB1A2, chartTypeSupportsCapability as var_core_value_sig526D, chartTypeSupportsLineAndAreaStyle as var_core_value_sigBDB5, createChartElementFloatMenuAdapter as var_core_value_sig59CE, createChartInlineStarterData as var_core_value_sig3AD7, getChartInlineTableMinColumns as var_core_value_sig04E4, resolveChartEditPanelRoute as var_core_value_sigD8F0, resolveChartElementSelection as var_core_value_sig1475, tryBuildInlineChartCreationPlan as var_core_value_sig08B7, tryPrepareInlineChartData as var_core_value_sig2008, useChartEditorChartType as var_core_value_sig496B, useChartEditorHasRightAxis as var_core_value_sig7161, useChartTypeFieldState as var_core_value_sig2AB8 } from "@univerjs-pro/chart-ui";
import { ShapeFloatingToolbarMenuActions as var_core_value_sig3FCF } from "@univerjs-pro/shape-editor-ui";
import { Button as var_core_value_sig675A, Select as var_core_value_sig837F, Separator as var_core_value_sig9D6E, borderClassName as var_core_value_sigB205, clsx as var_core_value_sigBF78 } from "@univerjs/design";
import { DeleteIcon as var_core_value_sig8AF3, PenIcon as var_core_value_sigA0CC } from "@univerjs/icons";
import { ComponentManager as var_core_value_sigB3A1, FloatingObjectToolbarPosition as var_core_value_sig1FB9, ICanvasPopupService as var_core_value_sig53A9, IDialogService as var_core_value_sigDACD, useDependency as var_core_value_sig691E, useObservable as var_core_value_sigD6D6 } from "@univerjs/ui";
import { useEffect as var_core_value_sig0347, useMemo as var_core_value_sig52A3, useRef as var_core_value_sigAD91, useState as var_core_value_sigF64E } from "react";
import { jsx as var_core_value_sig9B3D, jsxs as var_core_value_sigB217 } from "react/jsx-runtime";
import { CHART_HOST_DEFAULT_BORDER_COLOR as var_core_value_sig1FE6, CHART_HOST_DEFAULT_BORDER_RADIUS as var_core_value_sig2471, ChartDataSourceRuntimeStatus as var_core_value_sigD1FC, ChartImageExportFormat as var_core_value_sigE2F9, ChartRenderMode as var_core_value_sigD689, ChartThemeService as var_core_value_sig7AE3, ChartTypeBits as var_core_value_sig1EB3, DataUrlImageChartHost as var_core_value_sigE120, IChartRenderModelManagerService as var_core_value_sigD6E7, chartBitsUtils as var_core_value_sig3669, chartTypeCanUseTrendLine as var_core_value_sig5CBC, defaultChartConfig as var_core_value_sig20BE, isInlineChartDataSource as var_core_value_sig6BD0, isReferencedChartDataSource as var_core_value_sig8C15, parseInlineChartTable as var_core_value_sig6DF7, resolveChartRuntimeStyle as var_core_value_sigB411, resolveDefaultChartHostFrameStyle as var_core_value_sigA81B } from "@univerjs-pro/engine-chart";
import { UniverLicensePlugin as var_core_value_sigFE8D } from "@univerjs-pro/license";
import { IRenderManagerService as var_core_value_sig8595, Image as var_core_value_sigF8DE, UniverRenderEnginePlugin as var_core_value_sigFE76 } from "@univerjs/engine-render";
const Gn = "boards-chart-ui.config",
  Kn = {};
function B(var_core_value_sigA386) {
  "@babel/helpers - typeof";

  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigEF3E) {
    return typeof var_core_value_sigEF3E;
  } : function (var_core_value_sig273D) {
    return var_core_value_sig273D && typeof Symbol == "function" && var_core_value_sig273D.constructor === Symbol && var_core_value_sig273D !== Symbol.prototype ? "symbol" : typeof var_core_value_sig273D;
  }, B(var_core_value_sigA386);
}
function qn(var_core_value_sigCD82, var_core_value_sig44DD) {
  if (B(var_core_value_sigCD82) != "object" || !var_core_value_sigCD82) return var_core_value_sigCD82;
  var var_core_value_sig96FA = var_core_value_sigCD82[Symbol.toPrimitive];
  if (var_core_value_sig96FA !== undefined) {
    var var_core_value_sigAB68 = var_core_value_sig96FA.call(var_core_value_sigCD82, var_core_value_sig44DD || "default");
    if (B(var_core_value_sigAB68) != "object") return var_core_value_sigAB68;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig44DD === "string" ? String : Number)(var_core_value_sigCD82);
}
function Jn(var_core_value_sig040A) {
  var var_core_value_sig2AE0 = qn(var_core_value_sig040A, "string");
  return B(var_core_value_sig2AE0) == "symbol" ? var_core_value_sig2AE0 : var_core_value_sig2AE0 + "";
}
function V(var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776) {
  return (var_core_value_sig9D96 = Jn(var_core_value_sig9D96)) in var_core_value_sigC349 ? Object.defineProperty(var_core_value_sigC349, var_core_value_sig9D96, {
    value: var_core_value_sig2776,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigC349[var_core_value_sig9D96] = var_core_value_sig2776, var_core_value_sigC349;
}
function H(var_core_value_sig6FB2, var_core_value_sigEB43) {
  return function (var_core_value_sig9A0D, var_core_value_sigA319) {
    var_core_value_sigEB43(var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig6FB2);
  };
}
function U(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866) {
  var var_core_value_sig5EFB = arguments.length,
    var_core_value_sig3A85 = var_core_value_sig5EFB < 3 ? var_core_value_sigF963 : var_core_value_sigF866 === null ? var_core_value_sigF866 = Object.getOwnPropertyDescriptor(var_core_value_sigF963, var_core_value_sigB608) : var_core_value_sigF866,
    var_core_value_sig2682;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig3A85 = Reflect.decorate(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866);else {
    for (var var_core_value_sig4BB5 = var_core_value_sig4186.length - 1; var_core_value_sig4BB5 >= 0; var_core_value_sig4BB5--) (var_core_value_sig2682 = var_core_value_sig4186[var_core_value_sig4BB5]) && (var_core_value_sig3A85 = (var_core_value_sig5EFB < 3 ? var_core_value_sig2682(var_core_value_sig3A85) : var_core_value_sig5EFB > 3 ? var_core_value_sig2682(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sig3A85) : var_core_value_sig2682(var_core_value_sigF963, var_core_value_sigB608)) || var_core_value_sig3A85);
  }
  return var_core_value_sig5EFB > 3 && var_core_value_sig3A85 && Object.defineProperty(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sig3A85), var_core_value_sig3A85;
}
function Yn(var_core_value_sig6709, var_core_value_sig52CA) {
  return (var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.tab) === (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.tab) && (var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.section) === (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.section) && (var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.titleKey) === (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.titleKey) && (var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.axisId) === (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.axisId) && (var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.seriesId) === (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.seriesId);
}
function Xn(var_core_value_sigC030, var_core_value_sig88F6) {
  return (var_core_value_sigC030 == null ? undefined : var_core_value_sigC030.unitId) === var_core_value_sig88F6.unitId && var_core_value_sigC030.subUnitId === var_core_value_sig88F6.subUnitId && var_core_value_sigC030.elementId === var_core_value_sig88F6.elementId && var_core_value_sigC030.chartId === var_core_value_sig88F6.chartId && var_core_value_sigC030.source === var_core_value_sig88F6.source && Yn(var_core_value_sigC030.route, var_core_value_sig88F6.route);
}
let W = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig2D58, var_core_value_sig223F) {
    super(), this._elementStateService = var_core_value_sig2D58, this._boardElementService = var_core_value_sig223F, V(this, "_activeSession$", new var_core_value_sig682D(null)), V(this, "activeSession$", this._activeSession$["asObservable"]()), this.disposeWithMe(this._elementStateService["state$"].subscribe(var_core_value_sigF602 => this._syncSelectionState(var_core_value_sigF602))), this.disposeWithMe(this._boardElementService["elementRemove$"].subscribe(var_core_value_sig1BBD => {
      let var_core_value_sigF704 = this.getActiveSession();
      var_core_value_sigF704 && var_core_value_sig1BBD.some(var_core_value_sig2AD0 => var_core_value_sig2AD0.unitId === var_core_value_sigF704.unitId && var_core_value_sig2AD0.subUnitId === var_core_value_sigF704.subUnitId && var_core_value_sig2AD0.elementId === var_core_value_sigF704.elementId) && this.close("elementRemoved");
    }));
  }
  dispose() {
    this.close("dispose"), this._activeSession$["complete"](), super.dispose();
  }
  getActiveSession() {
    return this._activeSession$["getValue"]();
  }
  open(var_core_value_sigD749) {
    let var_core_value_sigCFFA = {
      ...var_core_value_sigD749
    };
    Xn(this.getActiveSession(), var_core_value_sigCFFA) || this._activeSession$["next"](var_core_value_sigCFFA);
  }
  close(var_core_value_sig58C1) {
    this.getActiveSession() && this._activeSession$["next"](null);
  }
  _syncSelectionState(var_core_value_sig5090) {
    let var_core_value_sigC368 = this.getActiveSession();
    if (!var_core_value_sigC368) return;
    if (var_core_value_sig5090.isTransforming) {
      this.close("transformStart");
      return;
    }
    if (!var_core_value_sig5090.context) {
      this.close("selectionChange");
      return;
    }
    if (var_core_value_sig5090.context["unitId"] !== var_core_value_sigC368.unitId) {
      this.close("selectionChange");
      return;
    }
    if (var_core_value_sig5090.context["subUnitId"] !== var_core_value_sigC368.subUnitId) {
      this.close("pageChange");
      return;
    }
    if (var_core_value_sig5090.selectedIds["length"] !== 1 || var_core_value_sig5090.focusedId !== var_core_value_sigC368.elementId) {
      this.close("selectionChange");
      return;
    }
    let var_core_value_sigAD56 = this._boardElementService["getElementById"](var_core_value_sigC368.unitId, var_core_value_sigC368.subUnitId, var_core_value_sigC368.elementId);
    (!var_core_value_sigAD56 || var_core_value_sigAD56.element["type"] !== var_core_value_sig102B.Chart || var_core_value_sigAD56.element["chartId"] !== var_core_value_sigC368.chartId) && this.close("selectionChange");
  }
};
W = U([H(0, var_core_value_sigA504), H(1, var_core_value_sig5EEE)], W);
const G = var_core_value_sig541F("board-chart.ui.service");
let Zn = class extends var_core_value_sig3363 {
  constructor(var_core_value_sigDB4A, var_core_value_sig6418, var_core_value_sig1896, var_core_value_sig0285) {
    super(var_core_value_sig0285), this._modelService = var_core_value_sigDB4A, this._resourceService = var_core_value_sig6418, this._commandService = var_core_value_sig1896;
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
  executeChartUpdateConfig(var_core_value_sig777D) {
    let var_core_value_sig3F4C = this._modelService["activeRuntimeModel"],
      var_core_value_sigD65A = var_core_value_sig777D.unitId ?? (var_core_value_sig3F4C == null ? undefined : var_core_value_sig3F4C.unitId),
      var_core_value_sig5A13 = var_core_value_sig777D.chartId ?? (var_core_value_sig3F4C == null ? undefined : var_core_value_sig3F4C.chartId);
    !var_core_value_sigD65A || !var_core_value_sig5A13 || this._commandService["executeCommand"](var_core_value_sigBBBC.id, {
      ...var_core_value_sig777D,
      unitId: var_core_value_sigD65A,
      chartId: var_core_value_sig5A13
    });
  }
};
Zn = U([H(0, var_core_value_sigDC07(var_core_value_sigA468)), H(1, var_core_value_sigDC07(var_core_value_sig1561)), H(2, var_core_value_sigCCDC), H(3, var_core_value_sigDC07(var_core_value_sigF64A))], Zn);
const Qn = "board.chart.floating-toolbar";
function $n(var_core_value_sig37DB) {
  var_core_value_sig37DB.stopPropagation();
}
function er(var_core_value_sig5542) {
  let var_core_value_sigE0A9 = var_core_value_sig691E(var_core_value_sigCCDC),
    var_core_value_sigA73E = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sig7620 = var_core_value_sig691E(var_core_value_sigA468),
    var_core_value_sigB9FC = var_core_value_sig691E(W),
    var_core_value_sig5055 = var_core_value_sig2AB8(var_core_value_sig5542.typeOptions),
    {
      extraProps: var_core_value_sig3801
    } = var_core_value_sig5542;
  return var_core_value_sigB217("div", {
    className: var_core_value_sigBF78("univer-box-border univer-flex univer-h-12 univer-items-center univer-gap-1 univer-rounded-lg univer-bg-gray-0 univer-px-2 univer-py-1.5 univer-text-gray-700 univer-shadow-lg dark:!univer-bg-gray-900 dark:!univer-text-gray-100", var_core_value_sigB205),
    "data-u-comp": "board-chart-floating-toolbar",
    role: "toolbar",
    onMouseDown: $n,
    onPointerDown: $n,
    children: [var_core_value_sig9B3D(var_core_value_sig837F, {
      "aria-label": var_core_value_sigA73E.t("boards-chart-ui.common.chartType"),
      className: "!univer-w-36 !univer-min-w-0",
      value: var_core_value_sig5055.value,
      options: var_core_value_sig5542.typeOptions,
      onChange: var_core_value_sigF593 => {
        var_core_value_sig7620.setActiveChartById(var_core_value_sig3801.unitId, var_core_value_sig3801.chartId), var_core_value_sig5055.setValue(var_core_value_sigF593);
      }
    }), var_core_value_sig9B3D(var_core_value_sig9D6E, {
      orientation: "vertical"
    }), var_core_value_sig9B3D(var_core_value_sig675A, {
      size: "small",
      variant: "ghost",
      type: "button",
      "aria-label": var_core_value_sigA73E.t("boards-chart-ui.common.editChart"),
      title: var_core_value_sigA73E.t("boards-chart-ui.common.editChart"),
      "data-toolbar-item": "edit-chart",
      onClick: () => {
        var_core_value_sigB9FC.open({
          chartId: var_core_value_sig3801.chartId,
          elementId: var_core_value_sig3801.elementId,
          source: "quickToolbar",
          subUnitId: var_core_value_sig3801.subUnitId,
          unitId: var_core_value_sig3801.unitId
        });
      },
      children: var_core_value_sig9B3D(var_core_value_sigA0CC, {})
    }), var_core_value_sig9B3D(var_core_value_sig3FCF, {
      position: var_core_value_sig1FB9.BOARD
    }), var_core_value_sig9B3D(var_core_value_sig675A, {
      size: "small",
      variant: "ghost",
      type: "button",
      "aria-label": var_core_value_sigA73E.t("boards-chart-ui.common.deleteChart"),
      title: var_core_value_sigA73E.t("boards-chart-ui.common.deleteChart"),
      "data-toolbar-item": "delete-chart",
      onClick: () => var_core_value_sigE0A9.executeCommand(var_core_value_sigAAD1.id),
      children: var_core_value_sig9B3D(var_core_value_sig8AF3, {})
    })]
  });
}
function tr(var_core_value_sig45F0) {
  let var_core_value_sigBC91 = var_core_value_sig691E(var_core_value_sig3474),
    var_core_value_sigCB88 = var_core_value_sig691E(var_core_value_sigA4E8),
    var_core_value_sig8D65 = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sig8122 = var_core_value_sig691E(var_core_value_sigA468),
    var_core_value_sigEDC6 = var_core_value_sig691E(G),
    var_core_value_sig611A = var_core_value_sig52A3(() => var_core_value_sig8122.ensureChartModel(var_core_value_sig45F0.unitId, var_core_value_sig45F0.chartId), [var_core_value_sig45F0.chartId, var_core_value_sig45F0.unitId, var_core_value_sig8122]),
    var_core_value_sig6BD9 = var_core_value_sig52A3(() => {
      let var_core_value_sig3607 = var_core_value_sigCB88.getUnit(var_core_value_sig45F0.unitId, var_core_value_sig78E6.UNIVER_BOARD);
      return !var_core_value_sig611A || !var_core_value_sig3607 ? null : new var_core_value_sig2ED4(var_core_value_sig611A.model, new var_core_value_sigA345({
        unitId: var_core_value_sig45F0.unitId,
        pageId: var_core_value_sig45F0.subUnitId,
        chartId: var_core_value_sig45F0.chartId,
        elementId: var_core_value_sig45F0.elementId,
        boardModel: var_core_value_sig3607,
        injector: var_core_value_sigBC91
      }));
    }, [var_core_value_sig45F0, var_core_value_sigBC91, var_core_value_sig611A, var_core_value_sigCB88]),
    var_core_value_sig7E56 = var_core_value_sig52A3(() => var_core_value_sigB1A2(var_core_value_sigE28B.map(var_core_value_sig2BCF => ({
      ...var_core_value_sig2BCF,
      label: var_core_value_sig8D65.t("boards-chart-ui.chartTypes." + var_core_value_sig2BCF.labelId)
    }))), [var_core_value_sig8D65]);
  return !var_core_value_sig611A || !var_core_value_sig6BD9 ? null : var_core_value_sig9B3D(var_core_value_sigF309, {
    chartUIService: var_core_value_sigEDC6,
    hostAdapter: var_core_value_sig6BD9,
    children: var_core_value_sig9B3D(er, {
      extraProps: var_core_value_sig45F0,
      typeOptions: var_core_value_sig7E56
    })
  });
}
function nr(var_core_value_sig4161) {
  let var_core_value_sig7580 = var_core_value_sig4161.popup["extraProps"];
  return var_core_value_sig7580 ? var_core_value_sig9B3D(tr, {
    ...var_core_value_sig7580
  }) : null;
}
let rr = class extends var_core_value_sig0B5C {
  constructor(var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68) {
    super(), this._renderContext = var_core_value_sigB512, this._boardCanvasPopManagerService = var_core_value_sigF2E6, this._boardElementService = var_core_value_sig34C8, this._elementStateService = var_core_value_sigB744, this._uiStateService = var_core_value_sigEAE2, this._editSessionService = var_core_value_sigE68A, this._interactionSurfaceService = var_core_value_sig3E68, V(this, "_popupDisposable", null), V(this, "_popupSelectionKey", null), this._init();
  }
  dispose() {
    this._clearPopup(), super.dispose();
  }
  _init() {
    let var_core_value_sigF4C5 = this._renderContext["scene"].getTransformerByCreate();
    this.disposeWithMe(var_core_value_sigE92D(var_core_value_sigF4C5.createControl$["pipe"](var_core_value_sig9427(this.dispose$)).subscribe(() => {
      this._showPopupForSelection();
    }))), this.disposeWithMe(var_core_value_sigE92D(var_core_value_sigF4C5.clearControl$["pipe"](var_core_value_sig9427(this.dispose$)).subscribe(() => {
      this._clearPopupIfSelectionChanged();
    }))), this.disposeWithMe(var_core_value_sigE92D(var_core_value_sigF4C5.changeStart$["pipe"](var_core_value_sig9427(this.dispose$)).subscribe(() => {
      this._clearPopup();
    }))), this.disposeWithMe(var_core_value_sigE92D(var_core_value_sigF4C5.changeEnd$["pipe"](var_core_value_sig9427(this.dispose$)).subscribe(() => {
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe(var_core_value_sigE92D(this._elementStateService["state$"].pipe(var_core_value_sig9427(this.dispose$)).subscribe(() => {
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe(var_core_value_sigE92D(this._uiStateService["state$"].pipe(var_core_value_sig9427(this.dispose$)).subscribe(() => {
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe(var_core_value_sigE92D(this._editSessionService["activeSession$"].pipe(var_core_value_sig9427(this.dispose$)).subscribe(var_core_value_sig0D69 => {
      if (var_core_value_sig0D69) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    }))), this.disposeWithMe(var_core_value_sigE92D(this._interactionSurfaceService["interactionSurfaceActive$"].pipe(var_core_value_sig9427(this.dispose$)).subscribe(var_core_value_sig480E => {
      if (var_core_value_sig480E) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    })));
  }
  _clearPopup() {
    var var_core_value_sig5410;
    (var_core_value_sig5410 = this._popupDisposable) == null || var_core_value_sig5410.dispose(), this._popupDisposable = null, this._popupSelectionKey = null;
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let var_core_value_sig492F = this._elementStateService["getSnapshot"]();
    return !var_core_value_sig492F.context || var_core_value_sig492F.selectedIds["length"] !== 1 ? false : this._popupSelectionKey === this._buildPopupSelectionKey(var_core_value_sig492F.context["unitId"], var_core_value_sig492F.context["subUnitId"], var_core_value_sig492F.selectedIds[0]);
  }
  _buildPopupSelectionKey(var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA) {
    return var_core_value_sig8EA0 + ":" + var_core_value_sigA6F6 + ":" + var_core_value_sigCDDA;
  }
  _showPopupForSelection() {
    if (this._interactionSurfaceService["isInteractionSurfaceActive"] || this._editSessionService["getActiveSession"]()) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigE243 = this._elementStateService["getSnapshot"](),
      var_core_value_sig74A8 = this._uiStateService["getState"]();
    if (var_core_value_sigE243.isTransforming || var_core_value_sig74A8.pendingInsert || var_core_value_sig74A8.activeTool !== null && var_core_value_sig74A8.activeTool !== var_core_value_sigA7DB.Select || !var_core_value_sigE243.context || var_core_value_sigE243.context["unitId"] !== this._renderContext["unitId"] || var_core_value_sigE243.selectedIds["length"] !== 1 || var_core_value_sigE243.focusedId == null) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig21B2 = this._boardElementService["getElementById"](var_core_value_sigE243.context["unitId"], var_core_value_sigE243.context["subUnitId"], var_core_value_sigE243.focusedId);
    if (!var_core_value_sig21B2 || var_core_value_sig21B2.element["type"] !== var_core_value_sig102B.Chart) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigDE08 = this._resolveElementObject(var_core_value_sig21B2);
    if (!var_core_value_sigDE08) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigACCB = this._buildPopupSelectionKey(var_core_value_sig21B2.unitId, var_core_value_sig21B2.subUnitId, var_core_value_sig21B2.elementId);
    this._popupDisposable && this._popupSelectionKey === var_core_value_sigACCB || (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_core_value_sig21B2.unitId, var_core_value_sig21B2.subUnitId, var_core_value_sigDE08, {
      componentKey: Qn,
      direction: "top-center",
      offset: [0, 36],
      anchorBoundResolver: var_core_value_sig2D8D,
      extraProps: {
        unitId: var_core_value_sig21B2.unitId,
        subUnitId: var_core_value_sig21B2.subUnitId,
        elementId: var_core_value_sig21B2.elementId,
        chartId: var_core_value_sig21B2.element["chartId"]
      }
    })), this._popupSelectionKey = var_core_value_sigACCB);
  }
  _resolveElementObject(var_core_value_sig7F33) {
    var var_core_value_sig0C53;
    let var_core_value_sigEA04 = var_core_value_sigF0E1(var_core_value_sig7F33.unitId, var_core_value_sig7F33.elementId),
      var_core_value_sig7A62 = this._renderContext["scene"];
    return ((var_core_value_sig0C53 = var_core_value_sig7A62.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig0C53.call(var_core_value_sig7A62, var_core_value_sigEA04)) ?? var_core_value_sig7A62.getObject(var_core_value_sigEA04) ?? null;
  }
};
rr = U([H(1, var_core_value_sigDC07(var_core_value_sigBE51)), H(2, var_core_value_sig5EEE), H(3, var_core_value_sigA504), H(4, var_core_value_sigFBF0), H(5, var_core_value_sigDC07(W)), H(6, var_core_value_sigDC07(var_core_value_sig3F3A))], rr);
let ir = class extends var_core_value_sig0B5C {
  constructor(var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig3E71, var_core_value_sig01B3, var_core_value_sig7442) {
    super(), this._renderContext = var_core_value_sig8109, this._instanceService = var_core_value_sig7565, this._boardElementService = var_core_value_sigD4FB, this._elementStateService = var_core_value_sig3E71, this._uiStateService = var_core_value_sig01B3, this._editSessionService = var_core_value_sig7442, V(this, "_attachScheduled", false), V(this, "_objectDblclickDisposables", null), this._init();
  }
  _init() {
    let {
        unitId: var_core_value_sigDF87
      } = this._renderContext,
      var_core_value_sig9EE0 = this._instanceService["getUnit"](var_core_value_sigDF87, var_core_value_sig78E6.UNIVER_BOARD);
    this.disposeWithMe(var_core_value_sigE92D(() => {
      var var_core_value_sig26DB;
      return (var_core_value_sig26DB = this._objectDblclickDisposables) == null ? undefined : var_core_value_sig26DB.dispose();
    })), var_core_value_sig9EE0 && (this._scheduleAttachObjectDoubleClicks(var_core_value_sig9EE0), this.disposeWithMe(this._boardElementService["elementAdd$"].subscribe(var_core_value_sigF0F9 => {
      var_core_value_sigF0F9.some(var_core_value_sig3EEE => var_core_value_sig3EEE.unitId === var_core_value_sigDF87) && this._scheduleAttachObjectDoubleClicks(var_core_value_sig9EE0);
    })), this.disposeWithMe(this._boardElementService["elementUpdate$"].subscribe(var_core_value_sig1A0F => {
      var_core_value_sig1A0F.some(var_core_value_sigBC46 => var_core_value_sigBC46.unitId === var_core_value_sigDF87) && this._scheduleAttachObjectDoubleClicks(var_core_value_sig9EE0);
    })), this.disposeWithMe(this._boardElementService["elementRemove$"].subscribe(var_core_value_sigFBA4 => {
      var_core_value_sigFBA4.some(var_core_value_sig3D7D => var_core_value_sig3D7D.unitId === var_core_value_sigDF87) && this._scheduleAttachObjectDoubleClicks(var_core_value_sig9EE0);
    })), this.disposeWithMe(this._elementStateService["state$"].subscribe(var_core_value_sig4383 => {
      var var_core_value_sig186C;
      ((var_core_value_sig186C = var_core_value_sig4383.context) == null ? undefined : var_core_value_sig186C.unitId) === var_core_value_sigDF87 && this._scheduleAttachObjectDoubleClicks(var_core_value_sig9EE0);
    })));
  }
  _scheduleAttachObjectDoubleClicks(var_core_value_sigF051) {
    this._attachScheduled || (this._attachScheduled = true, Promise.resolve().then(() => this._attachObjectDoubleClicks(var_core_value_sigF051)));
  }
  _attachObjectDoubleClicks(var_core_value_sig0B45) {
    var var_core_value_sig36F8;
    this._attachScheduled = false;
    let {
        scene: var_core_value_sig03E1,
        unitId: var_core_value_sigBB57
      } = this._renderContext,
      var_core_value_sig7C4A = var_core_value_sig0B45.getActivePageId(),
      var_core_value_sigE799 = this._boardElementService["getElementOrder"](var_core_value_sigBB57, var_core_value_sig7C4A),
      var_core_value_sigB601 = new var_core_value_sigC87D();
    (var_core_value_sig36F8 = this._objectDblclickDisposables) == null || var_core_value_sig36F8.dispose(), this._objectDblclickDisposables = var_core_value_sigB601, var_core_value_sigE799.forEach(var_core_value_sigD955 => {
      var var_core_value_sig48BD;
      let var_core_value_sig429F = this._boardElementService["getElementById"](var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigD955);
      if (!var_core_value_sig429F || var_core_value_sig429F.element["type"] !== var_core_value_sig102B.Chart) return;
      let var_core_value_sigF62A = var_core_value_sigF0E1(var_core_value_sigBB57, var_core_value_sigD955),
        var_core_value_sig8178 = ((var_core_value_sig48BD = var_core_value_sig03E1.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig48BD.call(var_core_value_sig03E1, var_core_value_sigF62A)) ?? var_core_value_sig03E1.getObject(var_core_value_sigF62A);
      var_core_value_sig8178 && var_core_value_sigB601.add(var_core_value_sigE92D(var_core_value_sig8178.onDblclick$["subscribeEvent"]((var_core_value_sig27E5, var_core_value_sig8061) => {
        this._openEditSession(var_core_value_sig429F, var_core_value_sig27E5, var_core_value_sig8061);
      })));
    });
  }
  _openEditSession(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B) {
    var var_core_value_sigCF89;
    if (this._uiStateService["getState"]().interactionMode === "viewing" || this._uiStateService["getState"]().pendingInsert || this._elementStateService["getSnapshot"]().isTransforming || var_core_value_sig8B71.element["type"] !== var_core_value_sig102B.Chart) return;
    let var_core_value_sig00CB = {
      unitId: var_core_value_sig8B71.unitId,
      subUnitId: var_core_value_sig8B71.subUnitId
    };
    this._elementStateService["selectElements"](var_core_value_sig00CB, [var_core_value_sig8B71.elementId], var_core_value_sig8B71.elementId), this._elementStateService["setFocusedSwimlaneLane"](var_core_value_sig00CB, null), this._editSessionService["open"]({
      chartId: var_core_value_sig8B71.element["chartId"],
      elementId: var_core_value_sig8B71.elementId,
      source: "doubleClick",
      subUnitId: var_core_value_sig8B71.subUnitId,
      unitId: var_core_value_sig8B71.unitId
    }), var_core_value_sig826B && (var_core_value_sig826B.skipNextObservers = true), var_core_value_sigAEFB == null || (var_core_value_sigCF89 = var_core_value_sigAEFB.preventDefault) == null || var_core_value_sigCF89.call(var_core_value_sigAEFB);
  }
};
ir = U([H(1, var_core_value_sigA4E8), H(2, var_core_value_sig5EEE), H(3, var_core_value_sigA504), H(4, var_core_value_sigFBF0), H(5, var_core_value_sigDC07(W))], ir);
let K = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sigB008) {
    super(), this._resourceService = var_core_value_sig77EE, this._modelService = var_core_value_sig9F76, this._commandService = var_core_value_sigB008;
  }
  getDataEditState(var_core_value_sig8721, var_core_value_sig08BA) {
    let var_core_value_sigDBB5 = this._resourceService["getChart"](var_core_value_sig8721, var_core_value_sig08BA),
      var_core_value_sigCFAC = var_core_value_sigDBB5 ? this._resourceService["getDataSource"](var_core_value_sig8721, var_core_value_sigDBB5.dataSourceId) : undefined;
    return !var_core_value_sigDBB5 || !var_core_value_sigCFAC ? null : {
      chartId: var_core_value_sig08BA,
      chartType: var_core_value_sigDBB5.chartType,
      dataSource: var_core_value_sigCFAC,
      sharingCount: this._resourceService["getDataSourceSharingCount"](var_core_value_sig8721, var_core_value_sigCFAC.id),
      unitId: var_core_value_sig8721
    };
  }
  async updateDataForChart(var_core_value_sig237B) {
    var var_core_value_sigFEAB;
    if (!this.getDataEditState(var_core_value_sig237B.unitId, var_core_value_sig237B.chartId) || var_core_value_sig237B.values["length"] === 0) return false;
    let var_core_value_sigE347 = (var_core_value_sigFEAB = this._resourceService["getChart"](var_core_value_sig237B.unitId, var_core_value_sig237B.chartId)) == null ? undefined : var_core_value_sigFEAB.chartType;
    if (var_core_value_sigE347 === undefined) return false;
    let var_core_value_sig3C5B = var_core_value_sig2008(var_core_value_sigE347, var_core_value_sig237B.values);
    if (!var_core_value_sig3C5B.ok) return false;
    let var_core_value_sig200B = await this.changeDataSource(var_core_value_sig237B.unitId, var_core_value_sig237B.chartId, {
      values: var_core_value_sig3C5B.values
    });
    return var_core_value_sig200B && this._modelService["refreshChartModel"](var_core_value_sig237B.unitId, var_core_value_sig237B.chartId), !!var_core_value_sig200B;
  }
  changeDataSource(var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) {
    return this._commandService["executeCommand"](var_core_value_sigDF14.id, {
      unitId: var_core_value_sig3863,
      chartId: var_core_value_sigC97C,
      dataSource: var_core_value_sigC4B1
    });
  }
};
K = U([H(0, var_core_value_sigDC07(var_core_value_sig1561)), H(1, var_core_value_sigDC07(var_core_value_sigA468)), H(2, var_core_value_sigCCDC)], K);
const ar = "board-chart.data-editor-dialog";
function or(var_core_value_sig1F18) {
  let var_core_value_sigD5A0 = var_core_value_sig691E(K),
    var_core_value_sig81B2 = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sigA0A5 = var_core_value_sigD5A0.getDataEditState(var_core_value_sig1F18.unitId, var_core_value_sig1F18.chartId),
    [var_core_value_sig10AA, var_core_value_sigE6D0] = var_core_value_sigF64E(() => var_core_value_sig6BD0(var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.dataSource) ? var_core_value_sigA0A5.dataSource["values"].map(var_core_value_sigE9ED => [...var_core_value_sigE9ED]) : []),
    [var_core_value_sig8E91, var_core_value_sig00BE] = var_core_value_sigF64E(() => var_core_value_sig8C15(var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.dataSource) ? "referenced" : "inline"),
    [var_core_value_sig7BB5, var_core_value_sig6AAD] = var_core_value_sigF64E(null),
    [var_core_value_sig1157, var_core_value_sigA694] = var_core_value_sigF64E(null),
    var_core_value_sig18E0 = {
      [var_core_value_sig1FCC.UnknownOption]: var_core_value_sig81B2.t("boards-chart-ui.common.insertChartFailed"),
      [var_core_value_sig1FCC.EmptyData]: var_core_value_sig81B2.t("boards-chart-ui.common.tableDataEmpty"),
      [var_core_value_sig1FCC.InvalidCandlestickData]: var_core_value_sig81B2.t("boards-chart-ui.candlestick.columnsError")
    };
  if (!var_core_value_sigA0A5) return var_core_value_sig9B3D("div", {
    className: "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
    children: var_core_value_sig81B2.t("boards-chart-ui.dataEditor.unavailable")
  });
  let var_core_value_sig0428 = async var_core_value_sig1BD9 => {
    var var_core_value_sigE43E;
    if (var_core_value_sig8E91 === "referenced") {
      var var_core_value_sigA937;
      if (!var_core_value_sig7BB5) return;
      if (!(await var_core_value_sigD5A0.changeDataSource(var_core_value_sig1F18.unitId, var_core_value_sig1F18.chartId, var_core_value_sig7BB5))) {
        var_core_value_sigA694(var_core_value_sig81B2.t("boards-chart-ui.dataEditor.updateFailed"));
        return;
      }
      var_core_value_sigA694(null), (var_core_value_sigA937 = var_core_value_sig1F18.onClose) == null || var_core_value_sigA937.call(var_core_value_sig1F18);
      return;
    }
    let var_core_value_sigCAD5 = var_core_value_sig2008(var_core_value_sigA0A5.chartType, var_core_value_sig10AA);
    if (!var_core_value_sigCAD5.ok) {
      var_core_value_sigA694(var_core_value_sig18E0[var_core_value_sigCAD5.issue["code"]]);
      return;
    }
    if (!(await var_core_value_sigD5A0.updateDataForChart({
      chartId: var_core_value_sig1F18.chartId,
      name: var_core_value_sigA0A5.dataSource["name"],
      unitId: var_core_value_sig1F18.unitId,
      updateShared: var_core_value_sig1BD9,
      values: var_core_value_sigCAD5.values
    }))) {
      var_core_value_sigA694(var_core_value_sig81B2.t("boards-chart-ui.dataEditor.updateFailed"));
      return;
    }
    var_core_value_sigA694(null), (var_core_value_sigE43E = var_core_value_sig1F18.onClose) == null || var_core_value_sigE43E.call(var_core_value_sig1F18);
  };
  return var_core_value_sigB217("div", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4 univer-p-1",
    children: [var_core_value_sig9B3D("div", {
      className: "univer-min-h-0\x20univer-flex-1\x20univer-overflow-auto\x20univer-overscroll-contain\x20univer-pr-1",
      children: var_core_value_sig9B3D(var_core_value_sig2DBD, {
        mode: var_core_value_sig8E91,
        initialSource: var_core_value_sig8C15(var_core_value_sigA0A5.dataSource) ? var_core_value_sigA0A5.dataSource["source"] : undefined,
        inlineContent: var_core_value_sig9B3D(var_core_value_sig27C4, {
          values: var_core_value_sig10AA,
          parsePastedText: var_core_value_sig6DF7,
          onChange: var_core_value_sigE6D0
        }),
        onModeChange: var_core_value_sigE503 => {
          var_core_value_sig00BE(var_core_value_sigE503), var_core_value_sig6AAD(null);
        },
        onPreviewChange: (var_core_value_sig48DD, var_core_value_sig5E6A) => var_core_value_sig6AAD(var_core_value_sig48DD && var_core_value_sig5E6A.status === var_core_value_sigD1FC.READY ? {
          source: var_core_value_sig48DD
        } : null)
      })
    }), var_core_value_sig1157 && var_core_value_sig9B3D("div", {
      className: "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
      children: var_core_value_sig1157
    }), var_core_value_sigB217("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
      children: [var_core_value_sig1F18.onClose && var_core_value_sig9B3D(var_core_value_sig675A, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sig1F18.onClose,
        children: var_core_value_sig81B2.t("boards-chart-ui.common.cancel")
      }), var_core_value_sig9B3D(var_core_value_sig675A, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sig8E91 === "referenced" && !var_core_value_sig7BB5,
        onClick: () => var_core_value_sig0428(true),
        children: var_core_value_sig81B2.t("boards-chart-ui.common.apply")
      })]
    })]
  });
}
const sr = {
    id: "board.operation.chart.open-data-editor",
    type: var_core_value_sigE5A6.OPERATION,
    handler: (var_core_value_sigBE07, var_core_value_sig555F) => {
      if (!var_core_value_sig555F || !var_core_value_sigBE07.get(K).getDataEditState(var_core_value_sig555F.unitId, var_core_value_sig555F.chartId) || !var_core_value_sigBE07.get(var_core_value_sigB3A1).get("board-chart.data-editor-dialog")) return false;
      let var_core_value_sig3D6F = var_core_value_sigBE07.get(var_core_value_sigDACD),
        var_core_value_sig336C = var_core_value_sigBE07.get(var_core_value_sig4E80),
        var_core_value_sig6E68 = null,
        var_core_value_sig8DFE = () => {
          var_core_value_sig6E68 == null || var_core_value_sig6E68.dispose(), var_core_value_sig6E68 = null;
        };
      return var_core_value_sig6E68 = var_core_value_sig3D6F.open({
        id: "board-chart.dialog.data-editor",
        title: {
          title: var_core_value_sig336C.t("boards-chart-ui.common.editData")
        },
        width: "min(1120px, calc(100vw - 32px))",
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: ar,
            props: {
              ...var_core_value_sig555F,
              onClose: var_core_value_sig8DFE
            }
          }
        },
        onClose: var_core_value_sig8DFE
      }), true;
    }
  },
  cr = "board-chart.edit-panel",
  lr = "column",
  q = {
    axis: {
      ...var_core_value_sigCF96,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true
    },
    legend: var_core_value_sig8BFA,
    lineAndArea: var_core_value_sig236B,
    pareto: var_core_value_sig1951,
    funnel: var_core_value_sigC4E9,
    heatmap: var_core_value_sigF612,
    indicatorLine: var_core_value_sigAA6C,
    pie: {
      ...var_core_value_sigFEA0,
      doughnutHole: 0,
      pieHole: 0
    },
    relation: {
      ...var_core_value_sigEE7D,
      useValueAsSymbolSize: true
    },
    radar: var_core_value_sig931A,
    series: {
      ...var_core_value_sig3585,
      radarFillOpacity: 1,
      rightAxis: {
        ltr: false,
        rtl: false
      }
    },
    style: var_core_value_sig31A8,
    titles: var_core_value_sigA4DA,
    trendline: var_core_value_sig6FC0,
    waterfall: {
      ...var_core_value_sig6217,
      useSubtotal: false
    },
    waterfallStyle: var_core_value_sigB805,
    wordCloud: var_core_value_sig4FAE
  },
  ur = [var_core_value_sig1EB3.Line, var_core_value_sig1EB3.Radar, var_core_value_sig1EB3.WordCloud, var_core_value_sig1EB3.Scatter, var_core_value_sig1EB3.Relation, var_core_value_sig1EB3.Sankey, var_core_value_sig1EB3.Heatmap, var_core_value_sig1EB3.Boxplot, var_core_value_sig1EB3.Candlestick, var_core_value_sig1EB3.Histogram, var_core_value_sig1EB3.Treemap, var_core_value_sig1EB3.Sunburst, var_core_value_sig1EB3.Gauge, var_core_value_sig1EB3.Chord];
function dr(var_core_value_sig48EA) {
  let var_core_value_sig5E16 = var_core_value_sig691E(var_core_value_sig4E80);
  return var_core_value_sigB217("div", {
    children: [var_core_value_sig9B3D(var_core_value_sigAF82, {
      title: var_core_value_sig5E16.t("boards-chart-ui.common.data")
    }), var_core_value_sig9B3D(var_core_value_sig675A, {
      type: "button",
      variant: "default",
      className: "univer-w-full univer-justify-start",
      onClick: var_core_value_sig48EA.onEditData,
      children: var_core_value_sig5E16.t("boards-chart-ui.common.editData")
    })]
  });
}
function fr() {
  let var_core_value_sig09F3 = var_core_value_sig496B();
  return var_core_value_sig9B3D(var_core_value_sigF381, {
    visible: ur.every(var_core_value_sigB7FC => !var_core_value_sig3669.baseOn(var_core_value_sig09F3, var_core_value_sigB7FC))
  });
}
function pr(var_core_value_sig4592) {
  return var_core_value_sigB217(var_core_value_sig7CF3, {
    id: var_core_value_sig4592.id,
    children: [var_core_value_sig9B3D(var_core_value_sig9DC6, {
      children: var_core_value_sig4592.label
    }), var_core_value_sig9B3D(var_core_value_sigD7F2, {
      children: var_core_value_sig4592.children
    })]
  });
}
function mr(var_core_value_sigC5C4, var_core_value_sig1617) {
  let var_core_value_sig4169 = var_core_value_sigC5C4 === var_core_value_sig1EB3.WordCloud,
    var_core_value_sig6D19 = var_core_value_sig3669.baseOn(var_core_value_sigC5C4, var_core_value_sig1EB3.Bubble),
    var_core_value_sig279C = var_core_value_sigC5C4 === var_core_value_sig1EB3.Funnel,
    var_core_value_sigAC51 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Relation,
    var_core_value_sig8986 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Heatmap,
    var_core_value_sigCAF7 = var_core_value_sig3669.baseOn(var_core_value_sigC5C4, var_core_value_sig1EB3.Pie),
    var_core_value_sigED1C = var_core_value_sigC5C4 === var_core_value_sig1EB3.Radar,
    var_core_value_sig726E = var_core_value_sigC5C4 === var_core_value_sig1EB3.Waterfall,
    var_core_value_sig2CD3 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Pareto,
    var_core_value_sig038E = var_core_value_sigC5C4 === var_core_value_sig1EB3.Candlestick,
    var_core_value_sigAA1E = var_core_value_sigC5C4 === var_core_value_sig1EB3.Histogram,
    var_core_value_sigC9F5 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Treemap,
    var_core_value_sig7EEA = var_core_value_sigC5C4 === var_core_value_sig1EB3.Sunburst,
    var_core_value_sig59CE1 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Gauge,
    var_core_value_sig33C8 = var_core_value_sigC5C4 === var_core_value_sig1EB3.Chord,
    var_core_value_sig957F = [var_core_value_sig5C1D.ChartStyle, var_core_value_sig5C1D.ChartAndAxisTitles];
  return var_core_value_sig4169 && var_core_value_sig957F.push(var_core_value_sig5C1D.WordCloud), var_core_value_sig526D(var_core_value_sigC5C4, var_core_value_sig772C.GeneralSeries) && !var_core_value_sig6D19 && !var_core_value_sig2CD3 && var_core_value_sig957F.push(var_core_value_sig5C1D.Series), var_core_value_sig726E && var_core_value_sig957F.push(var_core_value_sig5C1D.WaterfallSeries), var_core_value_sig2CD3 && var_core_value_sig957F.push(var_core_value_sig5C1D.ParetoBarSeries, var_core_value_sig5C1D.ParetoLineSeries), var_core_value_sigCAF7 && var_core_value_sig957F.push(var_core_value_sig5C1D.PieStyle), var_core_value_sigED1C && var_core_value_sig957F.push(var_core_value_sig5C1D.Radar), var_core_value_sig279C && var_core_value_sig957F.push(var_core_value_sig5C1D.Funnel), var_core_value_sig8986 && var_core_value_sig957F.push(var_core_value_sig5C1D.Heatmap), var_core_value_sigAC51 && var_core_value_sig957F.push(var_core_value_sig5C1D.Relation), var_core_value_sigBDB5(var_core_value_sigC5C4) && var_core_value_sig957F.push(var_core_value_sig5C1D.LineAndArea), var_core_value_sig526D(var_core_value_sigC5C4, var_core_value_sig772C.Legend) && var_core_value_sig957F.push(var_core_value_sig5C1D.Legend), var_core_value_sig526D(var_core_value_sigC5C4, var_core_value_sig772C.Axes) && (var_core_value_sig957F.push(var_core_value_sig5C1D.HorizontalAxis, var_core_value_sig5C1D.VerticalAxis), var_core_value_sig1617 && var_core_value_sig957F.push(var_core_value_sig5C1D.RightVerticalAxis), var_core_value_sig957F.push(var_core_value_sig5C1D.GridlinesAndTicks)), var_core_value_sig526D(var_core_value_sigC5C4, var_core_value_sig772C.IndicatorLine) && var_core_value_sig957F.push(var_core_value_sig5C1D.IndicatorLine), var_core_value_sig5CBC(var_core_value_sigC5C4) && var_core_value_sig957F.push(var_core_value_sig5C1D.Trendline), var_core_value_sig038E && var_core_value_sig957F.push(var_core_value_sig5C1D.Candlestick), var_core_value_sigAA1E && var_core_value_sig957F.push(var_core_value_sig5C1D.Histogram), var_core_value_sigC9F5 && var_core_value_sig957F.push(var_core_value_sig5C1D.Treemap), var_core_value_sig7EEA && var_core_value_sig957F.push(var_core_value_sig5C1D.Sunburst), var_core_value_sig59CE1 && var_core_value_sig957F.push(var_core_value_sig5C1D.Gauge), var_core_value_sig33C8 && var_core_value_sig957F.push(var_core_value_sig5C1D.Chord), var_core_value_sig957F;
}
function hr(var_core_value_sig803B) {
  var var_core_value_sig5830, var_core_value_sig4A7C, var_core_value_sigF975;
  let var_core_value_sigCDAF = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sigA298 = var_core_value_sig496B(),
    var_core_value_sig0B40 = var_core_value_sig7161(),
    [var_core_value_sig330B, var_core_value_sig3625] = var_core_value_sigF64E(null),
    var_core_value_sig0B4E = mr(var_core_value_sigA298, var_core_value_sig0B40),
    var_core_value_sig0E9F = var_core_value_sig9B3D(var_core_value_sig9A03, {}),
    var_core_value_sigE5BA = {
      [var_core_value_sig5C1D.Candlestick]: var_core_value_sigCDAF.t("boards-chart-ui.section.candlestick"),
      [var_core_value_sig5C1D.ChartAndAxisTitles]: var_core_value_sigCDAF.t("boards-chart-ui.common.chartAndAxisTitles"),
      [var_core_value_sig5C1D.ChartStyle]: var_core_value_sigCDAF.t("boards-chart-ui.common.chartStyle"),
      [var_core_value_sig5C1D.Chord]: var_core_value_sigCDAF.t("boards-chart-ui.section.chord"),
      [var_core_value_sig5C1D.Funnel]: var_core_value_sigCDAF.t("boards-chart-ui.section.funnel"),
      [var_core_value_sig5C1D.Gauge]: var_core_value_sigCDAF.t("boards-chart-ui.section.gauge"),
      [var_core_value_sig5C1D.GridlinesAndTicks]: var_core_value_sigCDAF.t("boards-chart-ui.section.gridlinesAndTicks"),
      [var_core_value_sig5C1D.Heatmap]: var_core_value_sigCDAF.t("boards-chart-ui.common.heatmap"),
      [var_core_value_sig5C1D.Histogram]: var_core_value_sigCDAF.t("boards-chart-ui.section.histogram"),
      [var_core_value_sig5C1D.HorizontalAxis]: var_core_value_sigCDAF.t("boards-chart-ui.common.horizontalAxis"),
      [var_core_value_sig5C1D.IndicatorLine]: var_core_value_sigCDAF.t("boards-chart-ui.section.indicatorLine"),
      [var_core_value_sig5C1D.Legend]: var_core_value_sigCDAF.t("boards-chart-ui.common.legend"),
      [var_core_value_sig5C1D.LineAndArea]: var_core_value_sigCDAF.t("boards-chart-ui.section.lineAndArea"),
      [var_core_value_sig5C1D.ParetoBarSeries]: var_core_value_sigCDAF.t("boards-chart-ui.section.paretoBar"),
      [var_core_value_sig5C1D.ParetoLineSeries]: var_core_value_sigCDAF.t("boards-chart-ui.section.paretoLine"),
      [var_core_value_sig5C1D.PieStyle]: var_core_value_sigCDAF.t("boards-chart-ui.section.pie"),
      [var_core_value_sig5C1D.Radar]: var_core_value_sigCDAF.t("boards-chart-ui.section.radar"),
      [var_core_value_sig5C1D.Relation]: var_core_value_sigCDAF.t("boards-chart-ui.section.relation"),
      [var_core_value_sig5C1D.RightVerticalAxis]: var_core_value_sigCDAF.t("boards-chart-ui.common.rightVerticalAxis"),
      [var_core_value_sig5C1D.Series]: var_core_value_sigCDAF.t("boards-chart-ui.common.series"),
      [var_core_value_sig5C1D.Sunburst]: var_core_value_sigCDAF.t("boards-chart-ui.section.sunburst"),
      [var_core_value_sig5C1D.Treemap]: var_core_value_sigCDAF.t("boards-chart-ui.section.treemap"),
      [var_core_value_sig5C1D.Trendline]: var_core_value_sigCDAF.t("boards-chart-ui.common.trendline"),
      [var_core_value_sig5C1D.VerticalAxis]: var_core_value_sigCDAF.t("boards-chart-ui.common.verticalAxis"),
      [var_core_value_sig5C1D.WaterfallSeries]: var_core_value_sigCDAF.t("boards-chart-ui.section.waterfall"),
      [var_core_value_sig5C1D.WordCloud]: var_core_value_sigCDAF.t("boards-chart-ui.section.wordCloud")
    };
  var_core_value_sig0347(() => {
    var var_core_value_sig9CD9;
    (var_core_value_sig9CD9 = var_core_value_sig803B.route) != null && var_core_value_sig9CD9.section && var_core_value_sig3625(var_core_value_sig803B.route["section"]);
  }, [var_core_value_sig803B.route]);
  let var_core_value_sig4A83 = {
    [var_core_value_sig5C1D.ChartStyle]: var_core_value_sig9B3D(var_core_value_sig7053, {
      defaultValues: q.style
    }),
    [var_core_value_sig5C1D.ChartAndAxisTitles]: var_core_value_sig9B3D(var_core_value_sig1E74, {
      commitMode: "change",
      defaultValues: q.titles,
      selectedTitleKey: (var_core_value_sig5830 = var_core_value_sig803B.route) == null ? undefined : var_core_value_sig5830.titleKey
    }),
    [var_core_value_sig5C1D.Series]: var_core_value_sigB217(var_core_value_sigC8F6, {
      defaultValues: q.series,
      NumberFormatField: var_core_value_sig5215,
      selectedSeriesId: (var_core_value_sig4A7C = var_core_value_sig803B.route) == null ? undefined : var_core_value_sig4A7C.seriesId,
      children: [var_core_value_sig9B3D(var_core_value_sig8A26, {}), var_core_value_sig9B3D(var_core_value_sigD073, {
        individualOnly: true
      }), var_core_value_sig9B3D(var_core_value_sigEEEF, {}), var_core_value_sig9B3D(var_core_value_sig6643, {}), var_core_value_sig9B3D(var_core_value_sig9A01, {}), var_core_value_sig9B3D(var_core_value_sig674F, {}), var_core_value_sig9B3D(var_core_value_sig4124, {}), var_core_value_sig9B3D(var_core_value_sigBF1C, {})]
    }),
    [var_core_value_sig5C1D.WaterfallSeries]: var_core_value_sig9B3D(var_core_value_sigA790, {
      defaultValues: q.waterfallStyle,
      NumberFormatField: var_core_value_sig5215,
      selectedSeriesId: (var_core_value_sigF975 = var_core_value_sig803B.route) == null ? undefined : var_core_value_sigF975.seriesId,
      showBucketName: () => true
    }),
    [var_core_value_sig5C1D.ParetoBarSeries]: var_core_value_sig9B3D(var_core_value_sig5204, {
      defaultValues: q.pareto,
      NumberFormatField: var_core_value_sig5215,
      showDataPointEditor: true,
      target: "barStyle"
    }),
    [var_core_value_sig5C1D.ParetoLineSeries]: var_core_value_sig9B3D(var_core_value_sig5204, {
      defaultValues: q.pareto,
      NumberFormatField: var_core_value_sig5215,
      showDataPointEditor: true,
      target: "cumulativeLineStyle"
    }),
    [var_core_value_sig5C1D.PieStyle]: var_core_value_sig9B3D(var_core_value_sig5E11, {
      defaultValues: q.pie,
      NumberFormatField: var_core_value_sig5215
    }),
    [var_core_value_sig5C1D.WordCloud]: var_core_value_sigB217(var_core_value_sigD6A9, {
      children: [var_core_value_sig9B3D(var_core_value_sig0FCF, {
        defaultValues: q.wordCloud
      }), var_core_value_sig9B3D(var_core_value_sig9A5E, {}), var_core_value_sig9B3D(var_core_value_sig01B9, {
        defaultValues: q.wordCloud
      })]
    }),
    [var_core_value_sig5C1D.Radar]: var_core_value_sig9B3D(var_core_value_sig4D58, {
      defaultValues: q.radar
    }),
    [var_core_value_sig5C1D.Funnel]: var_core_value_sig9B3D(var_core_value_sigE532, {
      defaultValues: q.funnel,
      gapControl: "number"
    }),
    [var_core_value_sig5C1D.Heatmap]: var_core_value_sig9B3D(var_core_value_sigC844, {
      defaultValues: q.heatmap
    }),
    [var_core_value_sig5C1D.Relation]: var_core_value_sig9B3D(var_core_value_sig424E, {
      defaultValues: q.relation
    }),
    [var_core_value_sig5C1D.LineAndArea]: var_core_value_sig9B3D(var_core_value_sig7FB0, {
      defaultValues: q.lineAndArea,
      lineStyleControl: "select"
    }),
    [var_core_value_sig5C1D.Legend]: var_core_value_sig9B3D(var_core_value_sig3E1A, {
      defaultValues: q.legend
    }),
    [var_core_value_sig5C1D.HorizontalAxis]: var_core_value_sig9B3D(var_core_value_sig0FD9, {
      axis: "x",
      defaultValues: q.axis,
      NumberFormatField: var_core_value_sig5215
    }),
    [var_core_value_sig5C1D.VerticalAxis]: var_core_value_sig9B3D(var_core_value_sig0FD9, {
      axis: "y",
      defaultValues: q.axis,
      NumberFormatField: var_core_value_sig5215
    }),
    [var_core_value_sig5C1D.RightVerticalAxis]: var_core_value_sig9B3D(var_core_value_sig0FD9, {
      axis: "rightY",
      defaultValues: q.axis,
      NumberFormatField: var_core_value_sig5215
    }),
    [var_core_value_sig5C1D.GridlinesAndTicks]: var_core_value_sig9B3D(var_core_value_sigCB92, {
      defaultValues: q.axis
    }),
    [var_core_value_sig5C1D.IndicatorLine]: var_core_value_sig9B3D(var_core_value_sig6FDF, {
      defaultValues: q.indicatorLine
    }),
    [var_core_value_sig5C1D.Trendline]: var_core_value_sig9B3D(var_core_value_sig1E84, {
      defaultValues: q.trendline
    }),
    [var_core_value_sig5C1D.Candlestick]: var_core_value_sig0E9F,
    [var_core_value_sig5C1D.Histogram]: var_core_value_sig0E9F,
    [var_core_value_sig5C1D.Treemap]: var_core_value_sig0E9F,
    [var_core_value_sig5C1D.Sunburst]: var_core_value_sig0E9F,
    [var_core_value_sig5C1D.Gauge]: var_core_value_sig0E9F,
    [var_core_value_sig5C1D.Chord]: var_core_value_sig0E9F
  };
  return var_core_value_sig9B3D(var_core_value_sigF481, {
    value: var_core_value_sig330B,
    onChange: var_core_value_sig3625,
    children: var_core_value_sig0B4E.map(var_core_value_sigFD0C => var_core_value_sig9B3D(pr, {
      id: var_core_value_sigFD0C,
      label: var_core_value_sigE5BA[var_core_value_sigFD0C],
      children: var_core_value_sig4A83[var_core_value_sigFD0C]
    }, var_core_value_sigFD0C))
  });
}
function gr({
  unitId: var_core_value_sig58AA,
  subUnitId: var_core_value_sig84C4,
  elementId: var_core_value_sigB6F7,
  chartId: var_core_value_sigB495
}) {
  let var_core_value_sig70D0 = var_core_value_sig691E(var_core_value_sigA468),
    var_core_value_sig2A8A = var_core_value_sig691E(var_core_value_sig1561),
    var_core_value_sig3782 = var_core_value_sig691E(G),
    var_core_value_sigD22E = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sig3455 = var_core_value_sig691E(var_core_value_sigCCDC),
    var_core_value_sig5CEF = var_core_value_sig691E(var_core_value_sig3474),
    var_core_value_sig43D5 = var_core_value_sig691E(var_core_value_sigA4E8),
    var_core_value_sig1395 = var_core_value_sig691E(W),
    var_core_value_sig9FA0 = var_core_value_sigD6D6(var_core_value_sig70D0.activeRuntimeModel$, var_core_value_sig70D0.activeRuntimeModel),
    var_core_value_sig055E = var_core_value_sigD6D6(var_core_value_sig1395.activeSession$, var_core_value_sig1395.getActiveSession()),
    [var_core_value_sig7C77, var_core_value_sig9578] = var_core_value_sigF64E(var_core_value_sig4CBA.Data),
    var_core_value_sigA2D3 = (var_core_value_sig055E == null ? undefined : var_core_value_sig055E.unitId) === var_core_value_sig58AA && var_core_value_sig055E.chartId === var_core_value_sigB495 && var_core_value_sig055E.elementId === var_core_value_sigB6F7 ? var_core_value_sig055E.route : undefined;
  var_core_value_sig0347(() => {
    var_core_value_sig70D0.setActiveChartById(var_core_value_sig58AA, var_core_value_sigB495);
  }, [var_core_value_sigB495, var_core_value_sig70D0, var_core_value_sig58AA]), var_core_value_sig0347(() => {
    var_core_value_sigA2D3 != null && var_core_value_sigA2D3.tab && var_core_value_sig9578(var_core_value_sigA2D3.tab);
  }, [var_core_value_sigA2D3]);
  let var_core_value_sigC218 = (var_core_value_sig9FA0 == null ? undefined : var_core_value_sig9FA0.unitId) === var_core_value_sig58AA && var_core_value_sig9FA0.chartId === var_core_value_sigB495,
    var_core_value_sigADEC = var_core_value_sig52A3(() => {
      if (!var_core_value_sigC218) return null;
      let var_core_value_sig849B = var_core_value_sig43D5.getUnit(var_core_value_sig58AA, var_core_value_sig78E6.UNIVER_BOARD);
      return var_core_value_sig849B ? new var_core_value_sig2ED4(var_core_value_sig9FA0.model, new var_core_value_sigA345({
        unitId: var_core_value_sig58AA,
        pageId: var_core_value_sig84C4,
        chartId: var_core_value_sigB495,
        elementId: var_core_value_sigB6F7,
        boardModel: var_core_value_sig849B,
        injector: var_core_value_sig5CEF
      })) : null;
    }, [var_core_value_sig9FA0, var_core_value_sigB495, var_core_value_sigB6F7, var_core_value_sig5CEF, var_core_value_sigC218, var_core_value_sig84C4, var_core_value_sig58AA, var_core_value_sig43D5]),
    var_core_value_sig3D8E = var_core_value_sig52A3(() => var_core_value_sigB1A2(var_core_value_sigE28B.map(var_core_value_sigB577 => ({
      ...var_core_value_sigB577,
      label: var_core_value_sigD22E.t("boards-chart-ui.chartTypes." + var_core_value_sigB577.labelId)
    }))), [var_core_value_sigD22E]);
  return !var_core_value_sigC218 || !var_core_value_sigADEC ? null : var_core_value_sig9B3D(var_core_value_sigF309, {
    chartUIService: var_core_value_sig3782,
    hostAdapter: var_core_value_sigADEC,
    children: var_core_value_sigB217("div", {
      className: "univer-flex\x20univer-h-0\x20univer-min-h-full\x20univer-w-full\x20univer-flex-col\x20univer-overflow-hidden\x20univer-bg-gray-0\x20dark:!univer-bg-gray-900",
      children: [var_core_value_sig9B3D(var_core_value_sig8E65, {
        ariaLabel: var_core_value_sigD22E.t("boards-chart-ui.common.editChart"),
        className: "univer-shrink-0 univer-px-3",
        items: [{
          label: var_core_value_sigD22E.t("boards-chart-ui.common.setup"),
          panelId: _r,
          value: var_core_value_sig4CBA.Data
        }, {
          label: var_core_value_sigD22E.t("boards-chart-ui.common.customize"),
          panelId: vr,
          value: var_core_value_sig4CBA.Style
        }],
        value: var_core_value_sig7C77,
        onChange: var_core_value_sig9578
      }), var_core_value_sig7C77 === var_core_value_sig4CBA.Data ? var_core_value_sig9B3D(var_core_value_sig21A2, {
        id: _r,
        label: var_core_value_sigD22E.t("boards-chart-ui.common.setup"),
        children: var_core_value_sigB217("div", {
          className: "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
          children: [var_core_value_sig9B3D(var_core_value_sig133B, {
            options: var_core_value_sig3D8E
          }), var_core_value_sig9B3D(var_core_value_sig983D, {}), var_core_value_sig9B3D(var_core_value_sig52F1, {}), var_core_value_sig9B3D(fr, {}), var_core_value_sig9B3D(var_core_value_sig2278, {}), var_core_value_sig9B3D(dr, {
            onEditData: () => var_core_value_sig3455.executeCommand(sr.id, {
              unitId: var_core_value_sig58AA,
              chartId: var_core_value_sigB495
            })
          }), var_core_value_sig9B3D(var_core_value_sig5649, {
            orientationControl: var_core_value_sig9B3D(var_core_value_sig675A, {
              size: "small",
              onClick: () => {
                var var_core_value_sig5F1A;
                return var_core_value_sig3782.executeChartUpdateConfig({
                  patch: {
                    context: {
                      orient: ((var_core_value_sig5F1A = var_core_value_sig2A8A.getChart(var_core_value_sig58AA, var_core_value_sigB495)) == null || (var_core_value_sig5F1A = var_core_value_sig5F1A.context) == null ? undefined : var_core_value_sig5F1A.orient) === lr ? "row" : lr
                    }
                  }
                });
              },
              children: var_core_value_sigD22E.t("boards-chart-ui.common.switchRowColumn")
            })
          }), var_core_value_sig9B3D(var_core_value_sig69B8, {}), var_core_value_sig9B3D(var_core_value_sig25EC, {
            defaultValues: q.waterfall
          })]
        })
      }) : var_core_value_sig9B3D(var_core_value_sig21A2, {
        id: vr,
        label: var_core_value_sigD22E.t("boards-chart-ui.common.customize"),
        children: var_core_value_sig9B3D(hr, {
          route: var_core_value_sigA2D3
        })
      })]
    })
  });
}
const _r = "board-chart-setup-panel",
  vr = "board-chart-style-panel",
  yr = var_core_value_sig1FE6,
  br = var_core_value_sig2471;
function xr(var_core_value_sig37E5) {
  var var_core_value_sigF079, var_core_value_sigFCA0;
  let var_core_value_sigC84D = var_core_value_sig37E5.chartStyle ?? {},
    var_core_value_sigF2BC = var_core_value_sigC84D.borderWidth === 0 ? 0 : wr(var_core_value_sigC84D.borderWidth, wr((var_core_value_sigF079 = var_core_value_sig37E5.chartElement) == null || (var_core_value_sigF079 = var_core_value_sigF079.stroke) == null ? undefined : var_core_value_sigF079.width, 1));
  return {
    fill: var_core_value_sig37E5.hostFill ?? var_core_value_sigC84D.backgroundColor ?? var_core_value_sig20BE.backgroundColor,
    stroke: var_core_value_sigC84D.borderColor ?? ((var_core_value_sigFCA0 = var_core_value_sig37E5.chartElement) == null || (var_core_value_sigFCA0 = var_core_value_sigFCA0.stroke) == null ? undefined : var_core_value_sigFCA0.color) ?? var_core_value_sig37E5.themeBorderColor ?? (var_core_value_sig37E5.isDarkMode ? "rgba(255, 255, 255, 0.18)" : yr),
    strokeWidth: var_core_value_sigF2BC,
    radius: br
  };
}
function Sr(var_core_value_sigD37B, var_core_value_sigFA28) {
  let var_core_value_sig93BE = Math.max(0, var_core_value_sigFA28.strokeWidth);
  return {
    left: var_core_value_sig93BE,
    top: var_core_value_sig93BE,
    width: Math.max(1, var_core_value_sigD37B.width - var_core_value_sig93BE * 2),
    height: Math.max(1, var_core_value_sigD37B.height - var_core_value_sig93BE * 2)
  };
}
function Cr(var_core_value_sigABEC, var_core_value_sig2712) {
  let var_core_value_sig0B9E = -1 / 2;
  return {
    left: var_core_value_sig0B9E,
    top: var_core_value_sig0B9E,
    width: Math.max(1, var_core_value_sigABEC.width),
    height: Math.max(1, var_core_value_sigABEC.height),
    radius: Math.max(0, var_core_value_sig2712.radius - var_core_value_sig2712.strokeWidth / 2)
  };
}
function wr(var_core_value_sigC545, var_core_value_sig12A7) {
  return typeof var_core_value_sigC545 == "number" && Number.isFinite(var_core_value_sigC545) && var_core_value_sigC545 > 0 ? var_core_value_sigC545 : var_core_value_sig12A7;
}
function Tr(var_core_value_sig6F4E) {
  var var_core_value_sigA021;
  let var_core_value_sig49D9 = (var_core_value_sigA021 = var_core_value_sig6F4E.match(/^#([\da-f]{3}|[\da-f]{6})$/i)) == null ? undefined : var_core_value_sigA021[1];
  if (var_core_value_sig49D9) {
    let var_core_value_sigB455 = var_core_value_sig49D9.length === 3 ? var_core_value_sig49D9.split("").map(var_core_value_sig9572 => "" + var_core_value_sig9572 + var_core_value_sig9572).join("") : var_core_value_sig49D9;
    return "rgb(" + Number.parseInt(var_core_value_sigB455.slice(0, 2), 16) + ",\x20" + Number.parseInt(var_core_value_sigB455.slice(2, 4), 16) + ",\x20" + Number.parseInt(var_core_value_sigB455.slice(4, 6), 16) + ")";
  }
  let var_core_value_sig320C = document.createElement("span");
  return var_core_value_sig320C.style["color"] = var_core_value_sig6F4E, var_core_value_sig320C.style["color"] || var_core_value_sig6F4E;
}
let J = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigCEFB) {
    super(), this._localeService = var_core_value_sig5241, this._chartThemeService = var_core_value_sigC6E5, this._renderModelManager = var_core_value_sigCEFB, V(this, "_chartInstanceMap", new Map()), V(this, "_chartElementEditMode", new Map()), V(this, "_chartEventHandlers", new Map()), V(this, "_chartEventSubscriptions", new Map());
  }
  createChartInstance(var_core_value_sig1537) {
    return var_core_value_sig1537 ? this._renderModelManager["createChartInstance"](var_core_value_sig1537, this._createChartRenderInstanceContext()) : this._renderModelManager["createChartInstance"]();
  }
  registerChartInstance(var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87) {
    let var_core_value_sig156F = this._getChartRuntimeKey(var_core_value_sigE4C6, var_core_value_sig4313),
      var_core_value_sigDD51 = this._chartInstanceMap["get"](var_core_value_sig156F);
    return var_core_value_sigDD51 && var_core_value_sigDD51 !== var_core_value_sigFC87 && (this._disposeChartEventSubscriptions(var_core_value_sig156F), var_core_value_sigDD51.dispose()), this._chartInstanceMap["set"](var_core_value_sig156F, var_core_value_sigFC87), var_core_value_sigFC87.setElementEditMode(this._chartElementEditMode["get"](var_core_value_sig156F) === true), this._bindChartEventHandlers(var_core_value_sig156F, var_core_value_sigFC87), {
      dispose: () => {
        this._chartInstanceMap["get"](var_core_value_sig156F) === var_core_value_sigFC87 && (this._disposeChartEventSubscriptions(var_core_value_sig156F), this._chartInstanceMap["delete"](var_core_value_sig156F));
      }
    };
  }
  setElementEditMode(var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA) {
    var var_core_value_sigFE01;
    let var_core_value_sigA2CE = this._getChartRuntimeKey(var_core_value_sigF057, var_core_value_sig72F6);
    var_core_value_sig9FBA ? this._chartElementEditMode["set"](var_core_value_sigA2CE, true) : this._chartElementEditMode["delete"](var_core_value_sigA2CE), (var_core_value_sigFE01 = this._chartInstanceMap["get"](var_core_value_sigA2CE)) == null || var_core_value_sigFE01.setElementEditMode(var_core_value_sig9FBA);
  }
  isElementEditModeActive(var_core_value_sig1975, var_core_value_sig6EA1) {
    return this._chartElementEditMode["get"](this._getChartRuntimeKey(var_core_value_sig1975, var_core_value_sig6EA1)) === true;
  }
  on(var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B, var_core_value_sig6912) {
    let var_core_value_sigE235 = this._getChartRuntimeKey(var_core_value_sig029F, var_core_value_sig3767),
      var_core_value_sig7664 = this._chartEventHandlers["get"](var_core_value_sigE235);
    var_core_value_sig7664 || (var_core_value_sig7664 = new Map(), this._chartEventHandlers["set"](var_core_value_sigE235, var_core_value_sig7664));
    let var_core_value_sig2281 = var_core_value_sig7664.get(var_core_value_sig670B);
    var_core_value_sig2281 || (var_core_value_sig2281 = new Set(), var_core_value_sig7664.set(var_core_value_sig670B, var_core_value_sig2281)), var_core_value_sig2281.add(var_core_value_sig6912);
    let var_core_value_sig5E86 = this._chartInstanceMap["get"](var_core_value_sigE235);
    return var_core_value_sig5E86 && this._bindChartEventHandler(var_core_value_sigE235, var_core_value_sig5E86, var_core_value_sig670B, var_core_value_sig6912), {
      dispose: () => {
        let var_core_value_sigD873 = this._chartEventHandlers["get"](var_core_value_sigE235),
          var_core_value_sigA12B = var_core_value_sigD873 == null ? undefined : var_core_value_sigD873.get(var_core_value_sig670B);
        var_core_value_sigA12B == null || var_core_value_sigA12B.delete(var_core_value_sig6912), (var_core_value_sigA12B == null ? undefined : var_core_value_sigA12B.size) === 0 && (var_core_value_sigD873 == null || var_core_value_sigD873.delete(var_core_value_sig670B)), (var_core_value_sigD873 == null ? undefined : var_core_value_sigD873.size) === 0 && this._chartEventHandlers["delete"](var_core_value_sigE235), this._disposeChartEventSubscription(var_core_value_sigE235, var_core_value_sig670B, var_core_value_sig6912);
      }
    };
  }
  createRenderInput(var_core_value_sig6998) {
    let var_core_value_sigF639 = var_core_value_sig6998.model["config"];
    if (!var_core_value_sigF639) throw Error("Board\x20chart\x20" + var_core_value_sig6998.chartId + "\x20has\x20no\x20render\x20config.");
    let var_core_value_sigEAE5 = this._localeService["getDirection"]();
    return {
      chartConfig: var_core_value_sigF639,
      chartStyle: var_core_value_sigB411({
        ...var_core_value_sig6998.model["style"],
        runtime: {
          ...var_core_value_sig6998.model["getRuntimeContext"](var_core_value_sigEAE5),
          enableAdaptiveSize: true
        },
        direction: var_core_value_sigEAE5
      }, var_core_value_sigF639.type)
    };
  }
  createRenderSpec(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82) {
    let {
        chartConfig: var_core_value_sigCF4E,
        chartStyle: var_core_value_sig6CAD
      } = this.createRenderInput(var_core_value_sigE94C),
      var_core_value_sig8CF5 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: var_core_value_sig8CF5.stylizeSpec(var_core_value_sig8CF5.toSpec(var_core_value_sigCF4E, var_core_value_sig6CAD), {
        chartConfig: var_core_value_sigCF4E,
        chartStyle: var_core_value_sig6CAD,
        chartInstance: var_core_value_sigCB82
      }, var_core_value_sig6D47),
      chartConfig: var_core_value_sigCF4E,
      chartStyle: var_core_value_sig6CAD,
      hostStyle: this.getHostStyle(var_core_value_sig6CAD)
    };
  }
  getHostStyle(var_core_value_sigDDD7) {
    return var_core_value_sigA81B({
      style: var_core_value_sigDDD7,
      getRenderColor: var_core_value_sigF230 => this._chartThemeService["getRenderColor"](var_core_value_sigF230)
    });
  }
  applyHostStyle(var_core_value_sigB2CE, var_core_value_sig443C) {
    var var_core_value_sig39B1;
    var_core_value_sigB2CE.style["border"] = (var_core_value_sig39B1 = var_core_value_sig443C.border) != null && var_core_value_sig39B1.color && var_core_value_sig443C.border["width"] ? var_core_value_sig443C.border["width"] + "px solid " + Tr(var_core_value_sig443C.border["color"]) : "", var_core_value_sigB2CE.style["backgroundColor"] = Tr(var_core_value_sig443C.fill ?? "transparent"), var_core_value_sigB2CE.style["borderRadius"] = var_core_value_sig443C.radius ? var_core_value_sig443C.radius + "px" : br + "px", var_core_value_sigB2CE.style["overflow"] = "hidden", var_core_value_sigB2CE.style["boxSizing"] = "border-box";
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({
        style: var_core_value_sig09B8
      }) => ({
        fill: this.getHostStyle(var_core_value_sig09B8).fill
      }),
      resolveRenderBackgroundColor: ({
        hostStyle: var_core_value_sig6F91
      }) => var_core_value_sig6F91.fill,
      prepareSpec: ({
        mode: var_core_value_sigF9C7,
        spec: var_core_value_sig8895
      }) => var_core_value_sigF9C7 === "image" ? {
        ...var_core_value_sig8895,
        animation: false,
        tooltip: {
          show: false
        }
      } : var_core_value_sig8895
    };
  }
  _bindChartEventHandlers(var_core_value_sig210D, var_core_value_sigB4B4) {
    let var_core_value_sigD407 = this._chartEventHandlers["get"](var_core_value_sig210D);
    var_core_value_sigD407 && var_core_value_sigD407.forEach((var_core_value_sigC80B, var_core_value_sig284F) => {
      var_core_value_sigC80B.forEach(var_core_value_sig4D4C => this._bindChartEventHandler(var_core_value_sig210D, var_core_value_sigB4B4, var_core_value_sig284F, var_core_value_sig4D4C));
    });
  }
  _bindChartEventHandler(var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) {
    let var_core_value_sig62B7 = this._chartEventSubscriptions["get"](var_core_value_sig63F3);
    var_core_value_sig62B7 || (var_core_value_sig62B7 = new Map(), this._chartEventSubscriptions["set"](var_core_value_sig63F3, var_core_value_sig62B7));
    let var_core_value_sig37A8 = var_core_value_sig62B7.get(var_core_value_sig3BF6);
    var_core_value_sig37A8 || (var_core_value_sig37A8 = new Map(), var_core_value_sig62B7.set(var_core_value_sig3BF6, var_core_value_sig37A8)), !var_core_value_sig37A8.has(var_core_value_sig38CE) && var_core_value_sig37A8.set(var_core_value_sig38CE, var_core_value_sig6A71.on(var_core_value_sig3BF6, var_core_value_sig38CE));
  }
  _disposeChartEventSubscription(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511) {
    var var_core_value_sig1F44, var_core_value_sigCB04;
    let var_core_value_sig947E = (var_core_value_sig1F44 = this._chartEventSubscriptions["get"](var_core_value_sigA90D)) == null ? undefined : var_core_value_sig1F44.get(var_core_value_sig7A3C);
    var_core_value_sig947E == null || (var_core_value_sigCB04 = var_core_value_sig947E.get(var_core_value_sig0511)) == null || var_core_value_sigCB04.dispose(), var_core_value_sig947E == null || var_core_value_sig947E.delete(var_core_value_sig0511);
  }
  _disposeChartEventSubscriptions(var_core_value_sig4545) {
    let var_core_value_sigF39A = this._chartEventSubscriptions["get"](var_core_value_sig4545);
    var_core_value_sigF39A == null || var_core_value_sigF39A.forEach(var_core_value_sigE154 => {
      var_core_value_sigE154.forEach(var_core_value_sigC9E0 => var_core_value_sigC9E0.dispose()), var_core_value_sigE154.clear();
    }), this._chartEventSubscriptions["delete"](var_core_value_sig4545);
  }
  _getChartRuntimeKey(var_core_value_sigF79C, var_core_value_sig2E54) {
    return var_core_value_sigF79C + "::" + var_core_value_sig2E54;
  }
  dispose() {
    this._chartInstanceMap["forEach"](var_core_value_sig4632 => var_core_value_sig4632.dispose()), this._chartInstanceMap["clear"](), this._chartElementEditMode["clear"](), this._chartEventHandlers["clear"](), Array.from(this._chartEventSubscriptions["keys"]()).forEach(var_core_value_sig12F2 => this._disposeChartEventSubscriptions(var_core_value_sig12F2)), super.dispose();
  }
};
J = U([H(0, var_core_value_sigDC07(var_core_value_sig4E80)), H(1, var_core_value_sigDC07(var_core_value_sig7AE3)), H(2, var_core_value_sigD6E7)], J);
let Er = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sig4EB7) {
    super(), this._renderContext = var_core_value_sig7658, this._editSessionService = var_core_value_sigDCF5, this._sidePanelService = var_core_value_sigC786, this._modelService = var_core_value_sigC0D9, this._renderService = var_core_value_sigF0511, this._chartUIService = var_core_value_sig5825, this._localeService = var_core_value_sig4EB7, V(this, "_activePanelKey", null), V(this, "_activePanelDisposable", null), V(this, "_activeEditOverlay", null), this.disposeWithMe(this._editSessionService["activeSession$"].subscribe(var_core_value_sig2259 => this._syncPanel(var_core_value_sig2259)));
  }
  dispose() {
    this._closeActivePanel(), super.dispose();
  }
  _syncPanel(var_core_value_sig73AF) {
    var var_core_value_sig548A;
    if (!var_core_value_sig73AF || var_core_value_sig73AF.unitId !== this._renderContext["unitId"]) {
      this._closeActivePanel();
      return;
    }
    let var_core_value_sigE026 = this._modelService["ensureChartModel"](var_core_value_sig73AF.unitId, var_core_value_sig73AF.chartId);
    if (!var_core_value_sigE026) {
      this._closeActivePanel();
      return;
    }
    let var_core_value_sig339E = [cr, var_core_value_sig73AF.unitId, var_core_value_sig73AF.subUnitId, var_core_value_sig73AF.elementId].join(":");
    if (this._activePanelKey === var_core_value_sig339E) {
      this._modelService["setActiveChartRuntime"](var_core_value_sigE026), this._setActiveEditOverlay(var_core_value_sig73AF.unitId, var_core_value_sig73AF.chartId);
      return;
    }
    (var_core_value_sig548A = this._activePanelDisposable) == null || var_core_value_sig548A.dispose(), this._modelService["setActiveChartRuntime"](var_core_value_sigE026), this._setActiveEditOverlay(var_core_value_sig73AF.unitId, var_core_value_sig73AF.chartId), this._activePanelKey = var_core_value_sig339E, this._activePanelDisposable = this._sidePanelService["open"]({
      id: cr,
      header: {
        title: this._localeService["t"]("boards-chart-ui.common.editChart")
      },
      width: 388,
      children: {
        label: cr,
        unitId: var_core_value_sig73AF.unitId,
        subUnitId: var_core_value_sig73AF.subUnitId,
        elementId: var_core_value_sig73AF.elementId,
        chartId: var_core_value_sig73AF.chartId
      },
      onClose: var_core_value_sig9E2F => {
        this._activePanelKey === var_core_value_sig339E && (this._activePanelKey = null, this._activePanelDisposable = null, this._clearActiveEditOverlay(), this._modelService["setActiveChartRuntime"](null), var_core_value_sig9E2F === "manual" && this._editSessionService["close"]("manual"));
      }
    });
  }
  _closeActivePanel() {
    var var_core_value_sig7550;
    if (!this._activePanelKey) {
      this._clearActiveEditOverlay();
      return;
    }
    (var_core_value_sig7550 = this._activePanelDisposable) == null || var_core_value_sig7550.dispose(), this._activePanelDisposable = null, this._activePanelKey = null, this._clearActiveEditOverlay(), this._modelService["setActiveChartRuntime"](null);
  }
  _setActiveEditOverlay(var_core_value_sig2983, var_core_value_sigE1B0) {
    let var_core_value_sigD4FF = this._activeEditOverlay;
    ((var_core_value_sigD4FF == null ? undefined : var_core_value_sigD4FF.unitId) !== var_core_value_sig2983 || var_core_value_sigD4FF.chartId !== var_core_value_sigE1B0) && (this._clearActiveEditOverlay(), this._activeEditOverlay = {
      unitId: var_core_value_sig2983,
      chartId: var_core_value_sigE1B0
    }, this._renderService["setElementEditMode"](var_core_value_sig2983, var_core_value_sigE1B0, true));
  }
  _clearActiveEditOverlay() {
    let var_core_value_sig1E5B = this._activeEditOverlay;
    var_core_value_sig1E5B && (this._activeEditOverlay = null, this._renderService["setElementEditMode"](var_core_value_sig1E5B.unitId, var_core_value_sig1E5B.chartId, false));
  }
};
Er = U([H(1, var_core_value_sigDC07(W)), H(2, var_core_value_sigDC07(var_core_value_sig05FF)), H(3, var_core_value_sigDC07(var_core_value_sigA468)), H(4, var_core_value_sigDC07(J)), H(5, G), H(6, var_core_value_sigDC07(var_core_value_sig4E80))], Er);
var Dr = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C) {
    super(), this.chartId = var_core_value_sigB680, this._host = var_core_value_sig1F64, this._applyHostStyle = var_core_value_sigDD1C, V(this, "mode", var_core_value_sigD689.Dom);
  }
  getRect() {
    return {
      width: Math.max(1, this._host["clientWidth"]),
      height: Math.max(1, this._host["clientHeight"])
    };
  }
  setStyle(var_core_value_sig2C39) {
    this._applyHostStyle(this._host, var_core_value_sig2C39);
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
  chartElement: var_core_value_sigE7F0,
  chartId: var_core_value_sigE837,
  unitId: var_core_value_sig34F4
}) {
  let var_core_value_sigA45D = var_core_value_sigAD91(null),
    var_core_value_sig1BC7 = var_core_value_sig691E(var_core_value_sigA468),
    var_core_value_sig4956 = var_core_value_sig691E(J),
    var_core_value_sigCC9E = var_core_value_sig691E(var_core_value_sig4E80);
  return var_core_value_sig0347(() => {
    let var_core_value_sigB7D1 = var_core_value_sigA45D.current;
    if (!var_core_value_sigB7D1) return;
    let var_core_value_sig64F0 = var_core_value_sig1BC7.ensureChartModel(var_core_value_sig34F4, var_core_value_sigE837);
    if (!var_core_value_sig64F0) return;
    var_core_value_sig1BC7.setActiveChartRuntime(var_core_value_sig64F0);
    let var_core_value_sig85B1 = new Dr(var_core_value_sigE837, var_core_value_sigB7D1, (var_core_value_sigD082, var_core_value_sigDBB7) => var_core_value_sig4956.applyHostStyle(var_core_value_sigD082, {
        fill: var_core_value_sigDBB7.fill ?? "transparent"
      })),
      var_core_value_sig3141 = var_core_value_sig4956.createChartInstance(var_core_value_sigD689.Dom),
      var_core_value_sig2162 = var_core_value_sig4956.registerChartInstance(var_core_value_sig34F4, var_core_value_sigE837, var_core_value_sig3141);
    var_core_value_sig3141.bind(var_core_value_sig85B1);
    let var_core_value_sig2EAD = var_core_value_sig4082([var_core_value_sig64F0.model["config$"], var_core_value_sig64F0.model["style$"], var_core_value_sigCC9E.direction$]).pipe(var_core_value_sigC049(([var_core_value_sigD0A8]) => var_core_value_sigD0A8 != null)).subscribe(() => {
      let {
        chartConfig: var_core_value_sigF4B9,
        chartStyle: var_core_value_sig5CEE
      } = var_core_value_sig4956.createRenderInput(var_core_value_sig64F0);
      kr(var_core_value_sigB7D1, var_core_value_sigE7F0, var_core_value_sig5CEE, var_core_value_sig4956), var_core_value_sig3141.render({
        chartId: var_core_value_sigE837,
        config: var_core_value_sigF4B9,
        style: var_core_value_sig5CEE
      }).catch(() => {});
    });
    return () => {
      var var_core_value_sigE92A;
      var_core_value_sig2EAD.unsubscribe(), var_core_value_sig2162.dispose(), var_core_value_sig3141.dispose(), var_core_value_sig85B1.dispose(), ((var_core_value_sigE92A = var_core_value_sig1BC7.activeRuntimeModel) == null ? undefined : var_core_value_sigE92A.unitId) === var_core_value_sig34F4 && var_core_value_sig1BC7.activeRuntimeModel["chartId"] === var_core_value_sigE837 && var_core_value_sig1BC7.setActiveChartRuntime(null);
    };
  }, [var_core_value_sigE7F0, var_core_value_sigE837, var_core_value_sigCC9E, var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sig34F4]), var_core_value_sig9B3D("div", {
    className: "univer-relative univer-h-full univer-w-full univer-overflow-hidden",
    "data-board-chart-dom-renderer": var_core_value_sigE837,
    children: var_core_value_sig9B3D("div", {
      ref: var_core_value_sigA45D,
      "data-board-chart-dom-content-host": var_core_value_sigE837
    })
  });
}
function kr(var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321) {
  let var_core_value_sigBF4C = var_core_value_sigA321.getHostStyle(var_core_value_sigF039).fill,
    var_core_value_sig3457 = xr({
      chartStyle: var_core_value_sigF039,
      chartElement: var_core_value_sigE42E,
      hostFill: var_core_value_sigBF4C
    }),
    var_core_value_sig4A08 = Math.max(0, var_core_value_sig3457.strokeWidth);
  var_core_value_sig444C.style["position"] = "absolute", var_core_value_sig444C.style["left"] = var_core_value_sig4A08 + "px", var_core_value_sig444C.style["top"] = var_core_value_sig4A08 + "px", var_core_value_sig444C.style["right"] = var_core_value_sig4A08 + "px", var_core_value_sig444C.style["bottom"] = var_core_value_sig4A08 + "px", var_core_value_sig444C.style["backgroundColor"] = var_core_value_sig3457.fill, var_core_value_sig444C.style["borderRadius"] = Math.max(0, var_core_value_sig3457.radius - var_core_value_sig4A08) + "px", var_core_value_sig444C.style["overflow"] = "hidden", var_core_value_sig444C.style["boxSizing"] = "border-box";
}
const Ar = var_core_value_sig541F("board-chart.snapshot-renderer"),
  jr = 0;
function Mr(var_core_value_sig1BC4) {
  return {
    ...var_core_value_sig1BC4,
    borderWidth: 0
  };
}
var Nr = class {
  constructor(var_core_value_sig6774, var_core_value_sig340D) {
    this._renderService = var_core_value_sig6774, this._renderModelManager = var_core_value_sig340D;
  }
  async render(var_core_value_sig82D4, var_core_value_sigBDE4) {
    if (typeof document > "u") throw TypeError("Board chart snapshot rendering requires a browser document.");
    let {
        chartConfig: var_core_value_sig7DF1,
        chartStyle: var_core_value_sigDC86
      } = this._renderService["createRenderInput"](var_core_value_sigBDE4),
      var_core_value_sig0B0C = Mr(var_core_value_sigDC86);
    if (var_core_value_sig82D4.format === var_core_value_sigE2F9.SVG) return (await this._renderModelManager["exportImage"]({
      chartId: var_core_value_sigBDE4.chartId,
      config: var_core_value_sig7DF1,
      style: var_core_value_sig0B0C,
      width: var_core_value_sig82D4.width,
      height: var_core_value_sig82D4.height
    }, {
      format: var_core_value_sig82D4.format
    })).dataUrl;
    let var_core_value_sigA39E = new var_core_value_sigE120(var_core_value_sigBDE4.chartId, {
        width: var_core_value_sig82D4.width,
        height: var_core_value_sig82D4.height
      }),
      var_core_value_sigBBEE = this._renderService["createChartInstance"](var_core_value_sigD689.Image);
    try {
      var_core_value_sigBBEE.bind(var_core_value_sigA39E), await var_core_value_sigBBEE.render({
        chartId: var_core_value_sigBDE4.chartId,
        config: var_core_value_sig7DF1,
        style: var_core_value_sig0B0C
      });
      let var_core_value_sig362B = var_core_value_sigA39E.getDataUrl();
      if (!var_core_value_sig362B) throw Error("Failed to render board chart snapshot: " + var_core_value_sigBDE4.unitId + "/" + var_core_value_sigBDE4.chartId);
      return var_core_value_sig362B;
    } finally {
      var_core_value_sigBBEE.dispose(), var_core_value_sigA39E.dispose();
    }
  }
};
let Y = class extends var_core_value_sigF631 {
  constructor(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827) {
    super(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig7827 ?? new Nr(var_core_value_sig65A1, var_core_value_sig7F19));
  }
  getCacheKey(var_core_value_sig652C) {
    let var_core_value_sig7E32 = super.getCacheKey(var_core_value_sig652C);
    return var_core_value_sig652C.format === var_core_value_sigE2F9.SVG ? var_core_value_sig7E32 + "::" + var_core_value_sig652C.format : var_core_value_sig7E32;
  }
};
Y = U([H(0, var_core_value_sigDC07(var_core_value_sig4E80)), H(1, var_core_value_sigDC07(var_core_value_sigA468)), H(2, var_core_value_sigDC07(J)), H(3, var_core_value_sigD6E7), H(4, var_core_value_sigD23B(Ar))], Y);
let Pr = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig4C07, var_core_value_sig79AB, var_core_value_sig8E74, var_core_value_sig104C, var_core_value_sig841D) {
    super(), this._renderContext = var_core_value_sig4C07, this._editSessionService = var_core_value_sig79AB, this._boardElementService = var_core_value_sig8E74, this._domLayerService = var_core_value_sig104C, this._snapshotService = var_core_value_sig841D, V(this, "_activeLayerId", null), V(this, "_activeLayerDisposable", null), V(this, "_activeChart", null), this.disposeWithMe(this._editSessionService["activeSession$"].subscribe(var_core_value_sig5CA5 => this._syncActiveChart(var_core_value_sig5CA5)));
  }
  dispose() {
    this._clearActiveLayer(), super.dispose();
  }
  _syncActiveChart(var_core_value_sig90CB) {
    if (!var_core_value_sig90CB || var_core_value_sig90CB.unitId !== this._renderContext["unitId"]) {
      this._clearActiveLayer();
      return;
    }
    let var_core_value_sigBDF5 = this._boardElementService["getElementData"](var_core_value_sig90CB.unitId, var_core_value_sig90CB.subUnitId),
      var_core_value_sigACC6 = var_core_value_sigBDF5[var_core_value_sig90CB.elementId];
    if (!var_core_value_sigACC6 || var_core_value_sigACC6.element["type"] !== var_core_value_sig102B.Chart || var_core_value_sigACC6.element["chartId"] !== var_core_value_sig90CB.chartId) {
      this._clearActiveLayer();
      return;
    }
    let var_core_value_sig1614 = var_core_value_sigA470(var_core_value_sigBDF5, var_core_value_sigACC6.elementId);
    if (!var_core_value_sig1614) {
      this._clearActiveLayer();
      return;
    }
    let var_core_value_sig85C3 = var_core_value_sigACC6.element,
      var_core_value_sigB996 = var_core_value_sig85C3.chartId,
      var_core_value_sig4BBA = ["board-chart-active", var_core_value_sig90CB.unitId, var_core_value_sig90CB.subUnitId, var_core_value_sigACC6.elementId].join(":");
    if (this._activeLayerId === var_core_value_sig4BBA) {
      this._activeChart = {
        chartId: var_core_value_sigB996,
        unitId: var_core_value_sig90CB.unitId
      }, this._domLayerService["updateItem"](var_core_value_sig4BBA, {
        rect: var_core_value_sig1614,
        content: () => var_core_value_sig9B3D(Or, {
          chartId: var_core_value_sigB996,
          chartElement: var_core_value_sig85C3,
          unitId: var_core_value_sig90CB.unitId
        })
      });
      return;
    }
    this._clearActiveLayer(), this._activeLayerId = var_core_value_sig4BBA, this._activeChart = {
      chartId: var_core_value_sigB996,
      unitId: var_core_value_sig90CB.unitId
    }, this._activeLayerDisposable = this._domLayerService["registerItem"]({
      id: var_core_value_sig4BBA,
      unitId: var_core_value_sig90CB.unitId,
      subUnitId: var_core_value_sig90CB.subUnitId,
      elementId: var_core_value_sigACC6.elementId,
      rect: var_core_value_sig1614,
      interactive: true,
      zIndex: 1,
      content: () => var_core_value_sig9B3D(Or, {
        chartId: var_core_value_sigB996,
        chartElement: var_core_value_sig85C3,
        unitId: var_core_value_sig90CB.unitId
      })
    });
  }
  _clearActiveLayer() {
    var var_core_value_sig6201;
    let var_core_value_sig5151 = this._activeChart;
    (var_core_value_sig6201 = this._activeLayerDisposable) == null || var_core_value_sig6201.dispose(), this._activeLayerDisposable = null, this._activeLayerId = null, this._activeChart = null, var_core_value_sig5151 && this._snapshotService["invalidateChart"](var_core_value_sig5151.unitId, var_core_value_sig5151.chartId);
  }
};
Pr = U([H(1, var_core_value_sigDC07(W)), H(2, var_core_value_sig5EEE), H(3, var_core_value_sigDC07(var_core_value_sigBC1A)), H(4, var_core_value_sigDC07(Y))], Pr);
let X = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sigB542, var_core_value_sigBB6C) {
    super(), this._snapshotService = var_core_value_sigB542, this._modelService = var_core_value_sigBB6C, V(this, "_runtimeStateSubscriptions", new Map()), this._listenRuntimeData();
  }
  _listenRuntimeData() {
    this.disposeWithMe(this._modelService["chartModelAdded$"].subscribe(var_core_value_sigE90F => this._bindRuntimeState(var_core_value_sigE90F))), this.disposeWithMe(this._modelService["chartModelRemoved$"].subscribe(var_core_value_sigEFD4 => this._releaseRuntimeState(var_core_value_sigEFD4))), this.disposeWithMe(var_core_value_sigE92D(() => {
      this._runtimeStateSubscriptions["forEach"](({
        subscription: var_core_value_sig76BA
      }) => var_core_value_sig76BA.unsubscribe()), this._runtimeStateSubscriptions["clear"]();
    }));
  }
  _bindRuntimeState(var_core_value_sigE2BF) {
    if (this._runtimeStateSubscriptions["has"](var_core_value_sigE2BF)) return;
    let var_core_value_sigB8C7 = var_core_value_sigE2BF.model["config"] == null ? 0 : 1,
      var_core_value_sigA56E = var_core_value_sig4082([var_core_value_sigE2BF.model["config$"].pipe(var_core_value_sigC049(var_core_value_sig861B => var_core_value_sig861B != null)), var_core_value_sigE2BF.model["style$"]]).pipe(var_core_value_sigF32D(var_core_value_sigB8C7), var_core_value_sig1435(0)).subscribe(() => this._snapshotService["invalidateChart"](var_core_value_sigE2BF.unitId, var_core_value_sigE2BF.chartId));
    this._runtimeStateSubscriptions["set"](var_core_value_sigE2BF, {
      subscription: var_core_value_sigA56E
    });
  }
  _releaseRuntimeState(var_core_value_sig1998) {
    var var_core_value_sigFF19;
    (var_core_value_sigFF19 = this._runtimeStateSubscriptions["get"](var_core_value_sig1998)) == null || var_core_value_sigFF19.subscription["unsubscribe"](), this._runtimeStateSubscriptions["delete"](var_core_value_sig1998);
  }
};
X = U([H(0, var_core_value_sigDC07(Y)), H(1, var_core_value_sigDC07(var_core_value_sigA468))], X);
var Fr = "@univerjs-pro/boards-chart-ui",
  Ir = "1.0.0-insiders.20260907-70fc579";
const Lr = {
  scaleX: 1,
  scaleY: 1
};
function Rr(var_core_value_sig9EAB) {
  let var_core_value_sigA5C3 = var_core_value_sig9EAB.nativeEvent;
  return typeof MouseEvent < "u" && var_core_value_sigA5C3 instanceof MouseEvent ? var_core_value_sigA5C3 : undefined;
}
function zr(var_core_value_sig3A1E) {
  let var_core_value_sigDC92 = var_core_value_sig3A1E.nativeEvent,
    var_core_value_sig3515 = var_core_value_sigDC92 == null ? undefined : var_core_value_sigDC92.target;
  return typeof Element < "u" && var_core_value_sig3515 instanceof Element ? var_core_value_sig3515 : undefined;
}
function Br(var_core_value_sigC2A0) {
  return var_core_value_sigC2A0.width || var_core_value_sigC2A0.right - var_core_value_sigC2A0.left;
}
function Vr(var_core_value_sig7C65) {
  return var_core_value_sig7C65.height || var_core_value_sig7C65.bottom - var_core_value_sig7C65.top;
}
function Hr(var_core_value_sig7F05, var_core_value_sig41F3) {
  let var_core_value_sigF455 = var_core_value_sig7F05.clientWidth || (typeof HTMLElement < "u" && var_core_value_sig7F05 instanceof HTMLElement ? var_core_value_sig7F05.offsetWidth : 0),
    var_core_value_sig6E78 = var_core_value_sig7F05.clientHeight || (typeof HTMLElement < "u" && var_core_value_sig7F05 instanceof HTMLElement ? var_core_value_sig7F05.offsetHeight : 0),
    var_core_value_sigB3EE = Br(var_core_value_sig41F3),
    var_core_value_sigC50A = Vr(var_core_value_sig41F3);
  return {
    scaleX: var_core_value_sigF455 > 0 && var_core_value_sigB3EE > 0 ? var_core_value_sigB3EE / var_core_value_sigF455 : Lr.scaleX,
    scaleY: var_core_value_sig6E78 > 0 && var_core_value_sigC50A > 0 ? var_core_value_sigC50A / var_core_value_sig6E78 : Lr.scaleY
  };
}
function Ur(var_core_value_sig11D0, var_core_value_sigB8ED, var_core_value_sig8EAE) {
  return {
    left: var_core_value_sig11D0.left + var_core_value_sigB8ED.left * var_core_value_sig8EAE.scaleX,
    right: var_core_value_sig11D0.left + var_core_value_sigB8ED.right * var_core_value_sig8EAE.scaleX,
    top: var_core_value_sig11D0.top + var_core_value_sigB8ED.top * var_core_value_sig8EAE.scaleY,
    bottom: var_core_value_sig11D0.top + var_core_value_sigB8ED.bottom * var_core_value_sig8EAE.scaleY
  };
}
function Wr(var_core_value_sig1CDD) {
  let var_core_value_sig0DB1 = zr(var_core_value_sig1CDD),
    var_core_value_sig68A2 = var_core_value_sig1CDD.hit["bounds"];
  return var_core_value_sig0DB1 && var_core_value_sig68A2 ? () => {
    let var_core_value_sig43B8 = var_core_value_sig0DB1.getBoundingClientRect();
    return Ur(var_core_value_sig43B8, var_core_value_sig68A2, Hr(var_core_value_sig0DB1, var_core_value_sig43B8));
  } : () => {
    let var_core_value_sigD98F = var_core_value_sig0DB1 == null ? undefined : var_core_value_sig0DB1.getBoundingClientRect();
    if (var_core_value_sig0DB1 && var_core_value_sigD98F && var_core_value_sig68A2) return Ur(var_core_value_sigD98F, var_core_value_sig68A2, Hr(var_core_value_sig0DB1, var_core_value_sigD98F));
    let var_core_value_sig66C0 = Rr(var_core_value_sig1CDD),
      var_core_value_sig9D15 = var_core_value_sig0DB1 && var_core_value_sigD98F ? Hr(var_core_value_sig0DB1, var_core_value_sigD98F) : Lr,
      var_core_value_sigB785 = (var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.clientX) ?? (var_core_value_sigD98F ? var_core_value_sigD98F.left + var_core_value_sig1CDD.localPoint["x"] * var_core_value_sig9D15.scaleX : var_core_value_sig1CDD.localPoint["x"]),
      var_core_value_sig130F = (var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.clientY) ?? (var_core_value_sigD98F ? var_core_value_sigD98F.top + var_core_value_sig1CDD.localPoint["y"] * var_core_value_sig9D15.scaleY : var_core_value_sig1CDD.localPoint["y"]);
    return {
      left: var_core_value_sigB785,
      right: var_core_value_sigB785 + 1,
      top: var_core_value_sig130F,
      bottom: var_core_value_sig130F + 1
    };
  };
}
function Gr(var_core_value_sigCC17) {
  return var_core_value_sigCC17.right <= var_core_value_sigCC17.left || var_core_value_sigCC17.bottom <= var_core_value_sigCC17.top ? false : typeof window > "u" || var_core_value_sigCC17.right > 0 && var_core_value_sigCC17.bottom > 0 && var_core_value_sigCC17.left < window.innerWidth && var_core_value_sigCC17.top < window.innerHeight;
}
function Kr(var_core_value_sig32AE, var_core_value_sigC753) {
  let var_core_value_sigFFD1 = Wr(var_core_value_sig32AE),
    var_core_value_sig81AE = var_core_value_sigFFD1(),
    var_core_value_sigF79F = new var_core_value_sig682D(var_core_value_sig81AE),
    var_core_value_sig0E54 = new var_core_value_sigC87D(),
    var_core_value_sig3B17 = false,
    var_core_value_sig6C4A = false;
  return typeof window < "u" && var_core_value_sig0E54.add(var_core_value_sigCCAA(var_core_value_sigE5C3(window, "scroll", {
    capture: true
  }), var_core_value_sigE5C3(window, "resize")).pipe(var_core_value_sig21F4(16)).subscribe(() => {
    var_core_value_sig6C4A || var_core_value_sig3B17 || (var_core_value_sig6C4A = true, queueMicrotask(() => {
      if (var_core_value_sig6C4A = false, var_core_value_sig3B17) return;
      let var_core_value_sig5237 = var_core_value_sigFFD1();
      if (!Gr(var_core_value_sig5237)) {
        var_core_value_sigC753();
        return;
      }
      var_core_value_sigF79F.next(var_core_value_sig5237);
    }));
  })), {
    initialRect: var_core_value_sig81AE,
    anchorRect$: var_core_value_sigF79F.asObservable(),
    visible: Gr(var_core_value_sig81AE),
    dispose: () => {
      var_core_value_sig3B17 = true, var_core_value_sig0E54.dispose(), var_core_value_sigF79F.complete();
    }
  };
}
const qr = "boards-chart-element-float-menu";
function Jr(var_core_value_sig73D9, var_core_value_sigEAF8) {
  return var_core_value_sig73D9 + "::" + var_core_value_sigEAF8;
}
let Yr = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
    super(), this._modelService = var_core_value_sigC0E3, this._chartRenderService = var_core_value_sig52F7, this._chartUIService = var_core_value_sig866F, this._editSessionService = var_core_value_sigDE3D, this._adapterRegistry = var_core_value_sigF175, this._canvasPopupService = var_core_value_sig6A18, this._renderManagerService = var_core_value_sig4E3D, this._univerInstanceService = var_core_value_sig49B0, this._injector = var_core_value_sig2547, V(this, "_chartEventDisposables", new Map()), V(this, "_popupDisposable", null), V(this, "_popupRuntimeKey", null), V(this, "_popupSessionKey", null), this._registerAdapter(), this._subscribeChartEvents();
  }
  dispose() {
    this._closePopup(), this._chartEventDisposables["forEach"](var_core_value_sigBB00 => var_core_value_sigBB00.dispose()), this._chartEventDisposables["clear"](), super.dispose();
  }
  _registerAdapter() {
    let var_core_value_sigBCA9 = var_core_value_sig59CE({
      chartUIService: this._chartUIService,
      getHostAdapter: var_core_value_sig7E54 => {
        this._modelService["setActiveChartById"](var_core_value_sig7E54.unitId, var_core_value_sig7E54.chartId);
        let var_core_value_sig9A8D = this._modelService["getChartModel"](var_core_value_sig7E54.unitId, var_core_value_sig7E54.chartId),
          var_core_value_sigC259 = this._univerInstanceService["getUnit"](var_core_value_sig7E54.unitId, var_core_value_sig78E6.UNIVER_BOARD),
          var_core_value_sig9C9F = this._editSessionService["getActiveSession"]();
        if (!(!var_core_value_sig9A8D || !var_core_value_sigC259 || !var_core_value_sig9C9F)) return new var_core_value_sig2ED4(var_core_value_sig9A8D.model, new var_core_value_sigA345({
          unitId: var_core_value_sig7E54.unitId,
          pageId: var_core_value_sig9C9F.subUnitId,
          chartId: var_core_value_sig7E54.chartId,
          elementId: var_core_value_sig9C9F.elementId,
          boardModel: var_core_value_sigC259,
          injector: this._injector
        }));
      },
      close: () => this._closePopup(),
      openFullPanel: var_core_value_sigFDEA => {
        this._modelService["setActiveChartById"](var_core_value_sigFDEA.unitId, var_core_value_sigFDEA.chartId);
        let var_core_value_sig86D0 = this._editSessionService["getActiveSession"]();
        (var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.unitId) === var_core_value_sigFDEA.unitId && var_core_value_sig86D0.chartId === var_core_value_sigFDEA.chartId && this._editSessionService["open"]({
          ...var_core_value_sig86D0,
          route: var_core_value_sigD8F0(var_core_value_sigFDEA.target),
          source: "programmatic"
        }), this._closePopup();
      }
    });
    this.disposeWithMe(this._adapterRegistry["register"](qr, var_core_value_sigBCA9));
  }
  _subscribeChartEvents() {
    this.disposeWithMe(this._modelService["chartModelAdded$"].subscribe(var_core_value_sig4CD2 => {
      let var_core_value_sig48CA = Jr(var_core_value_sig4CD2.unitId, var_core_value_sig4CD2.chartId);
      if (this._chartEventDisposables["has"](var_core_value_sig48CA)) return;
      let var_core_value_sig50AF = new var_core_value_sigC87D();
      var_core_value_sig50AF.add(this._chartRenderService["on"](var_core_value_sig4CD2.unitId, var_core_value_sig4CD2.chartId, "click", var_core_value_sigFBFA => {
        this._openFloatMenu(var_core_value_sig4CD2.unitId, var_core_value_sig4CD2.chartId, var_core_value_sigFBFA);
      })), this._chartEventDisposables["set"](var_core_value_sig48CA, var_core_value_sig50AF);
    })), this.disposeWithMe(this._modelService["chartModelRemoved$"].subscribe(var_core_value_sigA942 => {
      var var_core_value_sigA621;
      let var_core_value_sigBBFF = Jr(var_core_value_sigA942.unitId, var_core_value_sigA942.chartId);
      (var_core_value_sigA621 = this._chartEventDisposables["get"](var_core_value_sigBBFF)) == null || var_core_value_sigA621.dispose(), this._chartEventDisposables["delete"](var_core_value_sigBBFF), this._popupRuntimeKey === var_core_value_sigBBFF && this._closePopup();
    })), this.disposeWithMe(this._modelService["activeRuntimeModel$"].subscribe(var_core_value_sig8889 => {
      let var_core_value_sig32F8 = var_core_value_sig8889 ? Jr(var_core_value_sig8889.unitId, var_core_value_sig8889.chartId) : null;
      (!var_core_value_sig32F8 || this._popupRuntimeKey && var_core_value_sig32F8 !== this._popupRuntimeKey) && this._closePopup();
    }));
  }
  _openFloatMenu(var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E) {
    if (!this._chartRenderService["isElementEditModeActive"](var_core_value_sig4CDF, var_core_value_sig3F79)) return;
    let var_core_value_sigC9ED = this._modelService["getChartModel"](var_core_value_sig4CDF, var_core_value_sig3F79),
      var_core_value_sigB57B = var_core_value_sigC9ED ? var_core_value_sig1475(var_core_value_sigC9ED.model, var_core_value_sig880E.hit) : undefined;
    if (!var_core_value_sigC9ED || !var_core_value_sigB57B) {
      this._closePopup();
      return;
    }
    let var_core_value_sig780B = JSON.stringify([var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sigB57B.target]);
    if (this._popupDisposable && this._popupSessionKey === var_core_value_sig780B || (this._modelService["setActiveChartRuntime"](var_core_value_sigC9ED), this._closePopup(), !var_core_value_sigB57B.showFloatMenu)) return;
    let var_core_value_sig7D1B = this._renderManagerService["getRenderUnitById"](var_core_value_sig4CDF);
    if (!var_core_value_sig7D1B) return;
    let var_core_value_sig7BE0 = Kr(var_core_value_sig880E, () => this._clearHiddenSelectedTarget(var_core_value_sig4CDF, var_core_value_sig3F79));
    if (!var_core_value_sig7BE0.visible) {
      var_core_value_sig7BE0.dispose();
      return;
    }
    let var_core_value_sig7D40 = this._canvasPopupService["addPopup"]({
        componentKey: var_core_value_sig5440,
        direction: "top-center",
        offset: [0, 8],
        unitId: var_core_value_sig4CDF,
        subUnitId: "",
        anchorRect: var_core_value_sig7BE0.initialRect,
        anchorRect$: var_core_value_sig7BE0.anchorRect$,
        canvasElement: var_core_value_sig7D1B.engine["getCanvasElement"](),
        extraProps: {
          unitId: var_core_value_sig4CDF,
          chartId: var_core_value_sig3F79,
          element: var_core_value_sig880E.hit,
          target: var_core_value_sigB57B.target,
          adapterKey: qr
        }
      }),
      var_core_value_sig6C7E = new var_core_value_sigC87D();
    var_core_value_sig6C7E.add(var_core_value_sig7BE0), var_core_value_sig6C7E.add({
      dispose: () => this._canvasPopupService["removePopup"](var_core_value_sig7D40)
    }), this._popupDisposable = var_core_value_sig6C7E, this._popupRuntimeKey = Jr(var_core_value_sig4CDF, var_core_value_sig3F79), this._popupSessionKey = var_core_value_sig780B;
  }
  _closePopup() {
    var var_core_value_sig68BE;
    (var_core_value_sig68BE = this._popupDisposable) == null || var_core_value_sig68BE.dispose(), this._popupDisposable = null, this._popupRuntimeKey = null, this._popupSessionKey = null;
  }
  _clearHiddenSelectedTarget(var_core_value_sig04C6, var_core_value_sigCA05) {
    this._closePopup(), this._chartRenderService["isElementEditModeActive"](var_core_value_sig04C6, var_core_value_sigCA05) && (this._chartRenderService["setElementEditMode"](var_core_value_sig04C6, var_core_value_sigCA05, false), this._chartRenderService["setElementEditMode"](var_core_value_sig04C6, var_core_value_sigCA05, true));
  }
};
Yr = U([H(0, var_core_value_sigDC07(var_core_value_sigA468)), H(1, var_core_value_sigDC07(J)), H(2, G), H(3, var_core_value_sigDC07(W)), H(4, var_core_value_sigDC07(var_core_value_sig44F9)), H(5, var_core_value_sigDC07(var_core_value_sig53A9)), H(6, var_core_value_sig8595), H(7, var_core_value_sigA4E8), H(8, var_core_value_sigDC07(var_core_value_sig3474))], Yr);
function Xr(var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA) {
  let var_core_value_sigA4A7 = {
    chartType: var_core_value_sig737C,
    data: var_core_value_sig5AF5,
    ...(var_core_value_sig77FA ? {
      dataSource: var_core_value_sig77FA
    } : {}),
    ...(var_core_value_sig9DE4 ? {
      style: var_core_value_sig9DE4
    } : {})
  };
  return {
    ...var_core_value_sig0455,
    options: var_core_value_sigA4A7
  };
}
function Zr(var_core_value_sigA4DF) {
  let var_core_value_sigCC9D = var_core_value_sig691E(var_core_value_sigCCDC),
    var_core_value_sig90F5 = var_core_value_sig691E(var_core_value_sig4E80),
    var_core_value_sigD2BA = var_core_value_sig52A3(() => var_core_value_sigB1A2(var_core_value_sigE28B.map(var_core_value_sig5B67 => ({
      ...var_core_value_sig5B67,
      label: var_core_value_sig90F5.t("boards-chart-ui.chartTypes." + var_core_value_sig5B67.labelId)
    }))), [var_core_value_sig90F5]),
    [var_core_value_sigCD3A, var_core_value_sig519D] = var_core_value_sigF64E(String(var_core_value_sig1EB3.Column)),
    var_core_value_sigC7E7 = var_core_value_sigD2BA.find(var_core_value_sig2F2B => var_core_value_sig2F2B.value === var_core_value_sigCD3A),
    var_core_value_sig6E1C = (var_core_value_sigC7E7 == null ? undefined : var_core_value_sigC7E7.chartType) ?? var_core_value_sig1EB3.Column,
    [var_core_value_sigFABC, var_core_value_sig413D] = var_core_value_sigF64E(() => var_core_value_sig842F.map(var_core_value_sig1758 => [...var_core_value_sig1758])),
    [var_core_value_sig5BCE, var_core_value_sig8EF0] = var_core_value_sigF64E("inline"),
    [var_core_value_sig78AC, var_core_value_sig4CEF] = var_core_value_sigF64E(null),
    [var_core_value_sigD57D, var_core_value_sig2CC7] = var_core_value_sigF64E([]),
    [var_core_value_sig4784, var_core_value_sigC39E] = var_core_value_sigF64E(null),
    var_core_value_sig16C7 = {
      [var_core_value_sig1FCC.UnknownOption]: var_core_value_sig90F5.t("boards-chart-ui.common.insertChartFailed"),
      [var_core_value_sig1FCC.EmptyData]: var_core_value_sig90F5.t("boards-chart-ui.common.tableDataEmpty"),
      [var_core_value_sig1FCC.InvalidCandlestickData]: var_core_value_sig90F5.t("boards-chart-ui.candlestick.columnsError")
    },
    var_core_value_sig7481 = var_core_value_sig70AF => var_core_value_sig3AD7(var_core_value_sig70AF, {
      candlestickClose: var_core_value_sig90F5.t("boards-chart-ui.candlestick.close"),
      candlestickHigh: var_core_value_sig90F5.t("boards-chart-ui.candlestick.high"),
      candlestickLow: var_core_value_sig90F5.t("boards-chart-ui.candlestick.low"),
      candlestickOpen: var_core_value_sig90F5.t("boards-chart-ui.candlestick.open"),
      category: var_core_value_sig90F5.t("boards-chart-ui.common.category"),
      chordSource: var_core_value_sig90F5.t("boards-chart-ui.chord.source"),
      chordTarget: var_core_value_sig90F5.t("boards-chart-ui.chord.target"),
      label: var_core_value_sig90F5.t("boards-chart-ui.common.label"),
      sunburstHierarchy: var_core_value_sig90F5.t("boards-chart-ui.sunburst.hierarchy"),
      value: var_core_value_sig90F5.t("boards-chart-ui.common.value"),
      valueField: var_core_value_sig90F5.t("boards-chart-ui.common.valueField")
    });
  return var_core_value_sigB217("div", {
    className: "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    children: [var_core_value_sigB217("div", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [var_core_value_sig9B3D("div", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sig90F5.t("boards-chart-ui.common.chartType")
      }), var_core_value_sig9B3D(var_core_value_sig837F, {
        className: "univer-w-full !univer-min-w-0",
        value: var_core_value_sigCD3A,
        options: var_core_value_sigD2BA,
        onChange: var_core_value_sigD04E => {
          var var_core_value_sigB99B;
          var_core_value_sig519D(var_core_value_sigD04E);
          let var_core_value_sig5A75 = ((var_core_value_sigB99B = var_core_value_sigD2BA.find(var_core_value_sig4805 => var_core_value_sig4805.value === var_core_value_sigD04E)) == null ? undefined : var_core_value_sigB99B.chartType) ?? Number(var_core_value_sigD04E),
            var_core_value_sig7BAF = var_core_value_sig7481(var_core_value_sig5A75);
          var_core_value_sig7BAF && var_core_value_sig413D(var_core_value_sig7BAF);
        }
      })]
    }), var_core_value_sig9B3D(var_core_value_sig2DBD, {
      mode: var_core_value_sig5BCE,
      inlineContent: var_core_value_sig9B3D(var_core_value_sig27C4, {
        values: var_core_value_sigFABC,
        minColumns: var_core_value_sig04E4(var_core_value_sig6E1C),
        parsePastedText: var_core_value_sig6DF7,
        onChange: var_core_value_sig413D
      }),
      onModeChange: var_core_value_sig8F69 => {
        var_core_value_sig8EF0(var_core_value_sig8F69), var_core_value_sig4CEF(null), var_core_value_sig2CC7([]);
      },
      onPreviewChange: (var_core_value_sig6884, var_core_value_sig066E) => {
        var_core_value_sig6884 && var_core_value_sig066E.status === var_core_value_sigD1FC.READY && var_core_value_sig066E.values ? (var_core_value_sig4CEF({
          source: var_core_value_sig6884
        }), var_core_value_sig2CC7(var_core_value_sig066E.values["map"](var_core_value_sigE67E => [...var_core_value_sigE67E]))) : (var_core_value_sig4CEF(null), var_core_value_sig2CC7([]));
      }
    }), var_core_value_sig4784 && var_core_value_sig9B3D("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_core_value_sig4784
    }), var_core_value_sigB217("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_core_value_sigA4DF.onCancel && var_core_value_sig9B3D(var_core_value_sig675A, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sigA4DF.onCancel,
        children: var_core_value_sig90F5.t("boards-chart-ui.common.cancel")
      }), var_core_value_sig9B3D(var_core_value_sig675A, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sig5BCE === "referenced" && !var_core_value_sig78AC,
        onClick: async () => {
          var var_core_value_sig9B0D;
          let var_core_value_sig3D2C = var_core_value_sig08B7({
            optionId: var_core_value_sigCD3A,
            values: var_core_value_sig5BCE === "referenced" ? var_core_value_sigD57D : var_core_value_sigFABC
          });
          if (!var_core_value_sig3D2C.ok) {
            var_core_value_sigC39E(var_core_value_sig16C7[var_core_value_sig3D2C.issue["code"]]);
            return;
          }
          if (!(await var_core_value_sigCC9D.executeCommand(var_core_value_sig65B4.id, Xr(var_core_value_sigA4DF.insertParams, var_core_value_sig3D2C.plan["chartType"], var_core_value_sig3D2C.plan["values"], var_core_value_sig3D2C.plan["style"], var_core_value_sig5BCE === "referenced" ? var_core_value_sig78AC ?? undefined : undefined)))) {
            var_core_value_sigC39E(var_core_value_sig90F5.t("boards-chart-ui.common.insertChartFailed"));
            return;
          }
          var_core_value_sigC39E(null), (var_core_value_sig9B0D = var_core_value_sigA4DF.onInserted) == null || var_core_value_sig9B0D.call(var_core_value_sigA4DF);
        },
        children: var_core_value_sig90F5.t("boards-chart-ui.common.insert")
      })]
    })]
  });
}
let Qr = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sigC56D) {
    super(), this._componentManager = var_core_value_sigC56D, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](cr, gr)), this.disposeWithMe(this._componentManager["register"](ar, or)), this.disposeWithMe(this._componentManager["register"](var_core_value_sig81F7, Zr)), this.disposeWithMe(this._componentManager["register"](Qn, nr));
  }
};
Qr = U([H(0, var_core_value_sigDC07(var_core_value_sigB3A1))], Qr);
var $r = class extends var_core_value_sigF8DE {
  constructor(var_core_value_sig3A17, var_core_value_sig938F) {
    super(var_core_value_sig3A17, var_core_value_sig938F), V(this, "_element", undefined), V(this, "_frameStyle", undefined), this._element = var_core_value_sig938F.element, this._frameStyle = var_core_value_sig938F.frameStyle, this._attachNativeLoadHandlers();
  }
  updateElement(var_core_value_sigD948) {
    this._element = var_core_value_sigD948, this.makeDirty(true);
  }
  updateFrameStyle(var_core_value_sigBE5E) {
    ti(this._frameStyle, var_core_value_sigBE5E) || (this._frameStyle = var_core_value_sigBE5E, this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
  getFrameStyle() {
    return this._frameStyle;
  }
  changeChartSource(var_core_value_sig0281) {
    this._native ?? (this._native = document.createElement("img"), this._native["crossOrigin"] = "anonymous"), this._attachNativeLoadHandlers(), this._native["src"] = var_core_value_sig0281;
  }
  _draw(var_core_value_sigED71, var_core_value_sig281C, var_core_value_sig3C92 = this.width, var_core_value_sigB16B = this.height) {
    let var_core_value_sig585D = this._frameStyle,
      var_core_value_sigE722 = Sr({
        width: var_core_value_sig3C92,
        height: var_core_value_sigB16B
      }, var_core_value_sig585D);
    var_core_value_sigED71.save(), var_core_value_sigED71.translate(-var_core_value_sig3C92 / 2, -var_core_value_sigB16B / 2), ei(var_core_value_sigED71, 0, 0, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D.radius), var_core_value_sigED71.fillStyle = var_core_value_sig585D.fill, var_core_value_sigED71.fill(), var_core_value_sigED71.restore(), this._drawChartImage(var_core_value_sigED71, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sigE722, var_core_value_sig585D), this._drawFrameStroke(var_core_value_sigED71, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D);
  }
  _drawChartImage(var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683) {
    var var_core_value_sig26EC;
    !((var_core_value_sig26EC = this._native) != null && var_core_value_sig26EC.complete) || this._native["naturalWidth"] <= 0 || this._native["naturalHeight"] <= 0 || (var_core_value_sig062A.save(), var_core_value_sig062A.translate(-var_core_value_sig050A / 2, -var_core_value_sig8B32 / 2), ei(var_core_value_sig062A, var_core_value_sig870F.left, var_core_value_sig870F.top, var_core_value_sig870F.width, var_core_value_sig870F.height, Math.max(0, var_core_value_sigB683.radius - var_core_value_sigB683.strokeWidth)), var_core_value_sig062A.clip(), var_core_value_sig062A.drawImage(this._native, var_core_value_sig870F.left, var_core_value_sig870F.top, var_core_value_sig870F.width, var_core_value_sig870F.height), var_core_value_sig062A.restore());
  }
  _drawFrameStroke(var_core_value_sigEEDB, var_core_value_sig36E7, var_core_value_sig6A78, var_core_value_sigF7EF) {
    if (var_core_value_sigF7EF.strokeWidth <= 0) return;
    let var_core_value_sig27F9 = Cr({
      width: var_core_value_sig36E7,
      height: var_core_value_sig6A78
    }, var_core_value_sigF7EF);
    var_core_value_sigEEDB.save(), var_core_value_sigEEDB.translate(-var_core_value_sig36E7 / 2, -var_core_value_sig6A78 / 2), ei(var_core_value_sigEEDB, var_core_value_sig27F9.left, var_core_value_sig27F9.top, var_core_value_sig27F9.width, var_core_value_sig27F9.height, var_core_value_sig27F9.radius), var_core_value_sigEEDB.strokeStyle = var_core_value_sigF7EF.stroke, var_core_value_sigEEDB.lineWidth = var_core_value_sigF7EF.strokeWidth, var_core_value_sigEEDB.stroke(), var_core_value_sigEEDB.restore();
  }
  _notifyScene() {
    let var_core_value_sig393E = this.getScene();
    this.makeDirty(true), var_core_value_sig393E == null || var_core_value_sig393E.onFileLoaded$["emitEvent"](this.oKey);
  }
  _attachNativeLoadHandlers() {
    this._native && (this._native["onload"] = () => {
      this.makeDirty(true), this._notifyScene();
    }, this._native["onerror"] = () => {
      this._notifyScene();
    });
  }
};
function ei(var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6) {
  let var_core_value_sigB505 = Math.min(var_core_value_sigE7A6 || 0, var_core_value_sig649B / 2, var_core_value_sig6256 / 2);
  if (var_core_value_sig08A3.beginPath(), !var_core_value_sigB505) {
    var_core_value_sig08A3.rect(var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256), var_core_value_sig08A3.closePath();
    return;
  }
  var_core_value_sig08A3.moveTo(var_core_value_sig77D8 + var_core_value_sigB505, var_core_value_sig78A3), var_core_value_sig08A3.lineTo(var_core_value_sig77D8 + var_core_value_sig649B - var_core_value_sigB505, var_core_value_sig78A3), var_core_value_sig08A3.arc(var_core_value_sig77D8 + var_core_value_sig649B - var_core_value_sigB505, var_core_value_sig78A3 + var_core_value_sigB505, var_core_value_sigB505, Math.PI * 3 / 2, 0, false), var_core_value_sig08A3.lineTo(var_core_value_sig77D8 + var_core_value_sig649B, var_core_value_sig78A3 + var_core_value_sig6256 - var_core_value_sigB505), var_core_value_sig08A3.arc(var_core_value_sig77D8 + var_core_value_sig649B - var_core_value_sigB505, var_core_value_sig78A3 + var_core_value_sig6256 - var_core_value_sigB505, var_core_value_sigB505, 0, Math.PI / 2, false), var_core_value_sig08A3.lineTo(var_core_value_sig77D8 + var_core_value_sigB505, var_core_value_sig78A3 + var_core_value_sig6256), var_core_value_sig08A3.arc(var_core_value_sig77D8 + var_core_value_sigB505, var_core_value_sig78A3 + var_core_value_sig6256 - var_core_value_sigB505, var_core_value_sigB505, Math.PI / 2, Math.PI, false), var_core_value_sig08A3.lineTo(var_core_value_sig77D8, var_core_value_sig78A3 + var_core_value_sigB505), var_core_value_sig08A3.arc(var_core_value_sig77D8 + var_core_value_sigB505, var_core_value_sig78A3 + var_core_value_sigB505, var_core_value_sigB505, Math.PI, Math.PI * 3 / 2, false), var_core_value_sig08A3.closePath();
}
function ti(var_core_value_sig7428, var_core_value_sig1DCE) {
  return var_core_value_sig7428.fill === var_core_value_sig1DCE.fill && var_core_value_sig7428.stroke === var_core_value_sig1DCE.stroke && var_core_value_sig7428.strokeWidth === var_core_value_sig1DCE.strokeWidth && var_core_value_sig7428.radius === var_core_value_sig1DCE.radius;
}
function ni(var_core_value_sig0567) {
  let {
    element: var_core_value_sigA7F3
  } = var_core_value_sig0567.elementDataItem;
  return var_core_value_sigA7F3.type === var_core_value_sig102B.Chart ? var_core_value_sigA7F3 : null;
}
let Z = class {
  constructor(var_core_value_sigB609, var_core_value_sig390D, var_core_value_sigC928, var_core_value_sig39B7) {
    this._themeService = var_core_value_sigB609, this._snapshotService = var_core_value_sig390D, this._resourceService = var_core_value_sigC928, this._renderService = var_core_value_sig39B7, V(this, "name", "chart"), V(this, "_snapshotRefreshers", new WeakMap());
  }
  createObject(var_core_value_sig18E01) {
    let var_core_value_sigE161 = ni(var_core_value_sig18E01);
    if (!var_core_value_sigE161) return null;
    let var_core_value_sigBDEE = Math.max(1, var_core_value_sig18E01.bounds["width"]),
      var_core_value_sig1F40 = Math.max(1, var_core_value_sig18E01.bounds["height"]),
      var_core_value_sig3FC7 = new $r(var_core_value_sig18E01.key, {
        url: "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: var_core_value_sig18E01.bounds["left"],
        top: var_core_value_sig18E01.bounds["top"],
        width: var_core_value_sigBDEE,
        height: var_core_value_sig1F40,
        angle: var_core_value_sig18E01.bounds["angle"],
        flipX: var_core_value_sig18E01.bounds["flipX"],
        flipY: var_core_value_sig18E01.bounds["flipY"],
        zIndex: var_core_value_sig18E01.zIndex,
        visible: var_core_value_sigE161.visible !== false,
        evented: true,
        forceRender: true,
        element: var_core_value_sigE161,
        frameStyle: this._resolveFrameStyle(var_core_value_sig18E01.unitId, var_core_value_sigE161)
      });
    return this._watchSnapshotUpdates(var_core_value_sig3FC7, this._requestSnapshotForObject(var_core_value_sig18E01.unitId, var_core_value_sig3FC7), var_core_value_sig18E01.unitId), var_core_value_sig3FC7;
  }
  syncObject(var_core_value_sig1E1B, var_core_value_sig3B10) {
    var var_core_value_sig89E6;
    if (!(var_core_value_sig1E1B instanceof $r)) return false;
    let var_core_value_sig4743 = ni(var_core_value_sig3B10);
    return var_core_value_sig4743 ? (var_core_value_sig3B10.preserveTransform || var_core_value_sig1E1B.transformByState(var_core_value_sig3B10.bounds), var_core_value_sig1E1B.updateElement(var_core_value_sig4743), this._updateFrameStyle(var_core_value_sig3B10.unitId, var_core_value_sig1E1B), (var_core_value_sig89E6 = this._snapshotRefreshers["get"](var_core_value_sig1E1B)) == null || var_core_value_sig89E6(), true) : false;
  }
  _watchSnapshotUpdates(var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93) {
    if (!var_core_value_sig3D46) return;
    let var_core_value_sig5964 = null,
      var_core_value_sig808B = null,
      var_core_value_sig2A26 = false,
      var_core_value_sig1179 = var_core_value_sig2902 => {
        if (var_core_value_sig808B !== var_core_value_sig2902) {
          if (var_core_value_sig5964 == null || var_core_value_sig5964.unsubscribe(), var_core_value_sig5964 = null, var_core_value_sig808B = var_core_value_sig2902, var_core_value_sig2902.status === "ready" && var_core_value_sig2902.dataUrl) {
            var_core_value_sigEB6A.changeChartSource(var_core_value_sig2902.dataUrl);
            return;
          }
          var_core_value_sig2902.status === "pending" && (var_core_value_sig5964 = this._snapshotService["snapshotUpdated$"].subscribe(var_core_value_sig2AD8 => {
            if (var_core_value_sig2AD8 !== var_core_value_sig2902 || var_core_value_sig2AD8.status !== "ready" || !var_core_value_sig2AD8.dataUrl) {
              if (var_core_value_sig2AD8 === var_core_value_sig2902 && var_core_value_sig2AD8.status === "error" && !var_core_value_sig2A26) {
                var_core_value_sig2A26 = true;
                let var_core_value_sig7524 = this._requestSnapshotForObject(var_core_value_sigCC93, var_core_value_sigEB6A);
                var_core_value_sig7524 && var_core_value_sig1179(var_core_value_sig7524);
              }
              return;
            }
            var_core_value_sigEB6A.changeChartSource(var_core_value_sig2AD8.dataUrl), var_core_value_sig5964 == null || var_core_value_sig5964.unsubscribe(), var_core_value_sig5964 = null;
          }));
        }
      };
    var_core_value_sig1179(var_core_value_sig3D46);
    let var_core_value_sigEA92 = () => {
      var_core_value_sig2A26 = false;
      let var_core_value_sig9989 = this._requestSnapshotForObject(var_core_value_sigCC93, var_core_value_sigEB6A);
      var_core_value_sig9989 && var_core_value_sig1179(var_core_value_sig9989);
    };
    this._snapshotRefreshers["set"](var_core_value_sigEB6A, var_core_value_sigEA92);
    let var_core_value_sig8FD9 = this._snapshotService["chartInvalidated$"].subscribe(var_core_value_sig698E => {
      var_core_value_sig698E.unitId === var_core_value_sigCC93 && var_core_value_sig698E.chartId === var_core_value_sigEB6A.getElement().chartId && var_core_value_sigEA92();
    });
    var_core_value_sigEB6A.onDispose$["subscribeEvent"](() => {
      var_core_value_sig5964 == null || var_core_value_sig5964.unsubscribe(), var_core_value_sig8FD9.unsubscribe(), this._snapshotRefreshers["delete"](var_core_value_sigEB6A);
    });
  }
  _requestSnapshotForObject(var_core_value_sig1AE5, var_core_value_sig7100) {
    let var_core_value_sigA19A = this._updateFrameStyle(var_core_value_sig1AE5, var_core_value_sig7100),
      var_core_value_sigD3F5 = Sr({
        width: Math.max(1, var_core_value_sig7100.width),
        height: Math.max(1, var_core_value_sig7100.height)
      }, var_core_value_sigA19A);
    return this._snapshotService["requestSnapshot"]({
      unitId: var_core_value_sig1AE5,
      chartId: var_core_value_sig7100.getElement().chartId,
      width: var_core_value_sigD3F5.width,
      height: var_core_value_sigD3F5.height,
      mode: "main"
    });
  }
  _updateFrameStyle(var_core_value_sig3082, var_core_value_sigF5D1) {
    let var_core_value_sig8775 = this._resolveFrameStyle(var_core_value_sig3082, var_core_value_sigF5D1.getElement());
    return var_core_value_sigF5D1.updateFrameStyle(var_core_value_sig8775), var_core_value_sig8775;
  }
  _resolveFrameStyle(var_core_value_sig481B, var_core_value_sig13D7) {
    var var_core_value_sig90C0;
    let var_core_value_sigF1B2 = (var_core_value_sig90C0 = this._resourceService["getChart"](var_core_value_sig481B, var_core_value_sig13D7.chartId)) == null ? undefined : var_core_value_sig90C0.style;
    return xr({
      chartStyle: var_core_value_sigF1B2,
      chartElement: var_core_value_sig13D7,
      hostFill: var_core_value_sigF1B2 ? this._renderService["getHostStyle"](var_core_value_sigF1B2).fill : undefined,
      isDarkMode: this._themeService["darkMode"]
    });
  }
};
Z = U([H(0, var_core_value_sigDC07(var_core_value_sig7D42)), H(1, var_core_value_sigDC07(Y)), H(2, var_core_value_sigDC07(var_core_value_sig1561)), H(3, var_core_value_sigDC07(J))], Z);
function ri(var_core_value_sigEACD) {
  return var_core_value_sigEACD.type === var_core_value_sig102B.Chart;
}
let Q = class {
  constructor(var_core_value_sigC2BB) {
    this._resourceService = var_core_value_sigC2BB, V(this, "key", "board-chart");
  }
  collect(var_core_value_sigD9DB) {
    let var_core_value_sigA363 = {},
      var_core_value_sigFBA5 = {},
      var_core_value_sigAC47 = {};
    return var_core_value_sigD9DB.elements["forEach"](var_core_value_sig2809 => {
      if (!ri(var_core_value_sig2809)) return;
      let var_core_value_sig2DAB = this._resourceService["getChart"](var_core_value_sigD9DB.unitId, var_core_value_sig2809.chartId),
        var_core_value_sig877E = var_core_value_sig2DAB ? this._resourceService["getDataSource"](var_core_value_sigD9DB.unitId, var_core_value_sig2DAB.dataSourceId) : undefined;
      !var_core_value_sig2DAB || !var_core_value_sig877E || (var_core_value_sigA363[var_core_value_sig2DAB.id] = var_core_value_sig8FDE.deepClone(var_core_value_sig2DAB), var_core_value_sigFBA5[var_core_value_sig877E.id] = var_core_value_sig877E, var_core_value_sigAC47[var_core_value_sig2809.id] = var_core_value_sig2DAB.id);
    }), Object.keys(var_core_value_sigA363).length === 0 ? null : {
      charts: var_core_value_sigA363,
      dataSources: var_core_value_sigFBA5,
      chartIdByElementId: var_core_value_sigAC47
    };
  }
  preparePaste(var_core_value_sigA06F) {
    if (!ii(var_core_value_sigA06F.payload)) return null;
    let var_core_value_sig770E = var_core_value_sigA06F.payload,
      var_core_value_sig4654 = new Map();
    var_core_value_sigA06F.elementIdMap["forEach"]((var_core_value_sig20C8, var_core_value_sigE9A7) => {
      var_core_value_sig4654.set(var_core_value_sig20C8, var_core_value_sigE9A7);
    });
    let var_core_value_sigB26B = new Map(),
      var_core_value_sig019B = new Map(),
      var_core_value_sigC6BC = var_core_value_sigA06F.elements["map"](var_core_value_sigBECE => {
        if (!ri(var_core_value_sigBECE)) return var_core_value_sigBECE;
        let var_core_value_sig1B22 = var_core_value_sig4654.get(var_core_value_sigBECE.id),
          var_core_value_sig7F72 = var_core_value_sig1B22 ? var_core_value_sig770E.chartIdByElementId[var_core_value_sig1B22] : undefined;
        if (!var_core_value_sig7F72 || !var_core_value_sig770E.charts[var_core_value_sig7F72]) return var_core_value_sigBECE;
        let var_core_value_sig7B2A = var_core_value_sigB26B.get(var_core_value_sig7F72);
        return var_core_value_sig7B2A || (var_core_value_sig7B2A = var_core_value_sig417B(6), var_core_value_sigB26B.set(var_core_value_sig7F72, var_core_value_sig7B2A)), {
          ...var_core_value_sigBECE,
          chartId: var_core_value_sig7B2A
        };
      });
    var_core_value_sigB26B.forEach((var_core_value_sig06CD, var_core_value_sigA5F1) => {
      var var_core_value_sig97A2;
      let var_core_value_sig07E9 = (var_core_value_sig97A2 = var_core_value_sig770E.charts[var_core_value_sigA5F1]) == null ? undefined : var_core_value_sig97A2.dataSourceId;
      var_core_value_sig07E9 && !var_core_value_sig019B.has(var_core_value_sig07E9) && var_core_value_sig019B.set(var_core_value_sig07E9, var_core_value_sig417B(6));
    });
    let var_core_value_sig8EC2 = [];
    var_core_value_sig019B.forEach((var_core_value_sig4F59, var_core_value_sigF564) => {
      let var_core_value_sig8CFA = var_core_value_sig770E.dataSources[var_core_value_sigF564];
      var_core_value_sig8CFA && var_core_value_sig8EC2.push({
        ...var_core_value_sig8CFA,
        id: var_core_value_sig4F59
      });
    });
    let var_core_value_sigA8C3 = [];
    return var_core_value_sigB26B.forEach((var_core_value_sig2E11, var_core_value_sig5B69) => {
      let var_core_value_sigB098 = var_core_value_sig770E.charts[var_core_value_sig5B69],
        var_core_value_sigCE71 = var_core_value_sigB098 ? var_core_value_sig019B.get(var_core_value_sigB098.dataSourceId) : undefined;
      !var_core_value_sigB098 || !var_core_value_sigCE71 || var_core_value_sigA8C3.push({
        ...var_core_value_sigB098,
        id: var_core_value_sig2E11,
        dataSourceId: var_core_value_sigCE71
      });
    }), var_core_value_sigA8C3.length === 0 ? null : {
      elements: var_core_value_sigC6BC,
      redoMutations: [...var_core_value_sig8EC2.map(var_core_value_sig21D8 => ({
        id: var_core_value_sigCCC3.id,
        params: {
          unitId: var_core_value_sigA06F.targetUnitId,
          dataSource: var_core_value_sig21D8
        }
      })), ...var_core_value_sigA8C3.map(var_core_value_sig2B65 => ({
        id: var_core_value_sig986E.id,
        params: {
          unitId: var_core_value_sigA06F.targetUnitId,
          chart: var_core_value_sig2B65
        }
      }))],
      undoMutations: [...var_core_value_sigA8C3.map(var_core_value_sigD7EA => ({
        id: var_core_value_sig214A.id,
        params: {
          unitId: var_core_value_sigA06F.targetUnitId,
          chartId: var_core_value_sigD7EA.id
        }
      })), ...var_core_value_sig8EC2.map(var_core_value_sigB33B => ({
        id: var_core_value_sigC4C0.id,
        params: {
          unitId: var_core_value_sigA06F.targetUnitId,
          dataSourceId: var_core_value_sigB33B.id
        }
      }))]
    };
  }
};
Q = U([H(0, var_core_value_sigDC07(var_core_value_sig1561))], Q);
function ii(var_core_value_sig901E) {
  if (!var_core_value_sig901E || typeof var_core_value_sig901E != "object") return false;
  let var_core_value_sigF7BB = var_core_value_sig901E;
  return !!var_core_value_sigF7BB.charts && !!var_core_value_sigF7BB.dataSources && !!var_core_value_sigF7BB.chartIdByElementId;
}
let ai = class extends var_core_value_sig38C5 {
  constructor(var_core_value_sig5276, var_core_value_sig031B) {
    super(), this._snapshotService = var_core_value_sig031B, this.disposeWithMe(var_core_value_sig5276.register(this));
  }
  supports(var_core_value_sig9DC0) {
    return "unitId" in var_core_value_sig9DC0 && "getElement" in var_core_value_sig9DC0;
  }
  exportImage(var_core_value_sig95F0, var_core_value_sig9CCB) {
    if (!this.supports(var_core_value_sig95F0)) return Promise.resolve(undefined);
    let var_core_value_sigE718 = var_core_value_sig95F0.getInfo().size;
    return this._snapshotService["exportImage"]({
      unitId: var_core_value_sig95F0.unitId,
      chartId: var_core_value_sig95F0.getId(),
      width: Math.max(1, (var_core_value_sigE718 == null ? undefined : var_core_value_sigE718.width) ?? 1),
      height: Math.max(1, (var_core_value_sigE718 == null ? undefined : var_core_value_sigE718.height) ?? 1),
      format: var_core_value_sig9CCB == null ? undefined : var_core_value_sig9CCB.format,
      mode: "main"
    });
  }
};
ai = U([H(0, var_core_value_sigDC07(var_core_value_sig0477)), H(1, var_core_value_sigDC07(Y))], ai);
const oi = "UNIVER_BOARDS_CHART_UI_PLUGIN";
let $ = class extends var_core_value_sig2B2A {
  constructor(var_core_value_sigAEC8 = Kn, var_core_value_sigB977, var_core_value_sig2949, var_core_value_sig308A) {
    super(), this._config = var_core_value_sigAEC8, this._injector = var_core_value_sigB977, this._configService = var_core_value_sig2949, this._renderManagerService = var_core_value_sig308A, V(this, "_adapter", null);
    let {
      ...var_core_value_sig528D
    } = var_core_value_sigAA90({}, Kn, this._config);
    this._configService["setConfig"](Gn, var_core_value_sig528D);
  }
  onStarting() {
    this.disposeWithMe(this._injector["get"](var_core_value_sigCCDC).registerCommand(sr)), [[J], [Y], [ai], [G, {
      useClass: Zn
    }], [K], [W], [Yr], [Z], [Q], [X], [Qr]].forEach(var_core_value_sig24B9 => this._injector["add"](var_core_value_sig24B9)), var_core_value_sig9940(this._injector, [[J], [Y], [ai], [G], [K], [W], [Yr]]), this._injector["get"](Qr);
    let var_core_value_sigA309 = this._injector["get"](Z);
    this._adapter = var_core_value_sigA309, this._appendRenderAdapter(var_core_value_sigA309), this.disposeWithMe(var_core_value_sigE92D(() => {
      this._removeRenderAdapter(var_core_value_sigA309), this._adapter = null;
    }));
    let var_core_value_sig9E20 = this._injector["get"](var_core_value_sigA984);
    this.disposeWithMe(var_core_value_sig9E20.registerAdapter(this._injector["get"](Q))), this.disposeWithMe(this._injector["get"](X));
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sig78E6.UNIVER_BOARD, ir)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sig78E6.UNIVER_BOARD, Pr)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sig78E6.UNIVER_BOARD, Er)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sig78E6.UNIVER_BOARD, rr));
  }
  _appendRenderAdapter(var_core_value_sig26BB) {
    var var_core_value_sig19B4, var_core_value_sig218A;
    let var_core_value_sig14CB = this._getBoardsUIConfig(),
      var_core_value_sigFDEE = var_core_value_sig14CB.additionalRenderAdapters ?? [];
    var_core_value_sigFDEE.includes(var_core_value_sig26BB) || this._configService["setConfig"](var_core_value_sig19A1, {
      ...var_core_value_sig14CB,
      additionalRenderAdapters: [...var_core_value_sigFDEE, var_core_value_sig26BB],
      toolbar: {
        ...var_core_value_sig14CB.toolbar,
        tools: {
          ...((var_core_value_sig19B4 = var_core_value_sig14CB.toolbar) == null ? undefined : var_core_value_sig19B4.tools),
          [var_core_value_sigA7DB.Chart]: si((var_core_value_sig218A = var_core_value_sig14CB.toolbar) == null || (var_core_value_sig218A = var_core_value_sig218A.tools) == null ? undefined : var_core_value_sig218A[var_core_value_sigA7DB.Chart])
        }
      }
    });
  }
  _removeRenderAdapter(var_core_value_sigA676) {
    var var_core_value_sigC27E;
    let var_core_value_sigA70D = this._getBoardsUIConfig(),
      var_core_value_sigCE10 = (var_core_value_sigC27E = var_core_value_sigA70D.additionalRenderAdapters) == null ? undefined : var_core_value_sigC27E.filter(var_core_value_sigE627 => var_core_value_sigE627 !== var_core_value_sigA676);
    this._configService["setConfig"](var_core_value_sig19A1, {
      ...var_core_value_sigA70D,
      additionalRenderAdapters: var_core_value_sigCE10
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](var_core_value_sig19A1) ?? {};
  }
};
V($, "pluginName", oi), V($, "packageName", Fr), V($, "version", Ir), V($, "type", var_core_value_sig78E6.UNIVER_BOARD), $ = U([var_core_value_sigF449(var_core_value_sigFE8D, var_core_value_sigFE76, var_core_value_sigF98E, var_core_value_sigB7F9, var_core_value_sig537C, var_core_value_sig2F95), H(1, var_core_value_sigDC07(var_core_value_sig3474)), H(2, var_core_value_sigC310), H(3, var_core_value_sig8595)], $);
function si(var_core_value_sigFA38) {
  return var_core_value_sigFA38 === false ? false : typeof var_core_value_sigFA38 != "object" || {
    ...var_core_value_sigFA38,
    enabled: var_core_value_sigFA38.enabled ?? true
  };
}
export { Gn as BOARDS_CHART_UI_PLUGIN_CONFIG_KEY, oi as BOARDS_CHART_UI_PLUGIN_NAME, jr as BOARD_CHART_SNAPSHOT_BORDER_WIDTH, Q as BoardChartClipboardAdapter, K as BoardChartDataEditService, W as BoardChartEditSessionService, rr as BoardChartFloatingToolbarRenderController, ir as BoardChartOpenEditController, Er as BoardChartPanelController, Z as BoardChartRenderAdapter, J as BoardChartRenderService, Pr as BoardChartSelectionController, X as BoardChartSnapshotRefreshController, Y as BoardChartSnapshotRenderService, Zn as BoardChartUIService, Dr as BoardDomChartHost, Ar as IBoardChartSnapshotRendererService, G as IBoardChartUIService, $ as UniverBoardsChartUIPlugin, si as enableChartTool, Mr as resolveBoardChartSnapshotStyle };
