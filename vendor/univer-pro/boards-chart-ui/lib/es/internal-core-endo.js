import { BoardElementType, BoardToolType, IBoardElementService, InsertBoardChartCommand, UniverBoardsPlugin, resolveBoardElementWorldBounds } from "@univerjs-pro/boards";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BOARD_INSERT_CHART_PANEL_COMPONENT, BoardCanvasPopManagerService, BoardDeleteSelectionOperation, BoardDomLayerService, BoardInteractionSurfaceService, IBoardClipboardResourceAdapterService, IBoardElementStateService, IBoardSidePanelService, IBoardUIStateService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey, resolveRotatedBoardObjectAnchorBound } from "@univerjs-pro/boards-ui";
import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, Optional, Plugin, RxDisposable, ThemeService, Tools, UniverInstanceType, createIdentifier, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, auditTime, combineLatest, filter, fromEvent, merge as mergeLocal, skip, takeUntil, throttleTime } from "rxjs";
import { BoardChartConfigAdapter, BoardChartModelService, BoardChartResourceService, ChangeBoardChartDataSourceCommand, DEFAULT_BOARD_CHART_VALUES, RemoveBoardChartDataSourceMutation, RemoveBoardChartSnapshotMutation, SetBoardChartDataSourceMutation, SetBoardChartSnapshotMutation, UniverBoardsChartPlugin, UpdateBoardChartConfigCommand } from "@univerjs-pro/boards-chart";
import { CHART_ELEMENT_FLOAT_MENU_COMPONENT, CHART_TYPE_CATALOG, ChartAxisSection, ChartCommonDataMappingSection, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartElementFloatMenuAdapterRegistry, ChartFunnelStyleSection, ChartGradientFillField, ChartGridlinesAndTicksSection, ChartHeatmapStyleSection, ChartHostAdapter, ChartImageExportService, ChartIndicatorLineSection, ChartInlineTableEditor, ChartLegendSection, ChartLineAndAreaSection, ChartNumberFormatTextField, ChartParetoSeriesSection, ChartPieStyleSection, ChartRadarStyleSection, ChartReferencedDataSourceEditor, ChartRelationStyleSection, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesBorderFields, ChartSeriesDataLabelFields, ChartSeriesDataPointFields, ChartSeriesFillFields, ChartSeriesPointFields, ChartSeriesRightAxisField, ChartSeriesRoot, ChartSeriesSelector, ChartSeriesTypeField, ChartSnapshotQueue, ChartStackField, ChartStyleSection, ChartThemeField, ChartTitlesSection, ChartTrendlineSection, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudMaskImageIdField, ChartWordCloudRepeatField, ChartWordCloudRoot, ChartWordCloudShapeField, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_FUNNEL_VALUES, DEFAULT_CHART_HEATMAP_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_LINE_AND_AREA_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_RADAR_VALUES, DEFAULT_CHART_RELATION_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_TRENDLINE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, InlineChartCreationIssueCode, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, chartTypeSupportsLineAndAreaStyle, createChartElementFloatMenuAdapter, createChartInlineStarterData, getChartInlineTableMinColumns, resolveChartEditPanelRoute, resolveChartElementSelection, tryBuildInlineChartCreationPlan, tryPrepareInlineChartData, useChartEditorChartType, useChartEditorHasRightAxis, useChartTypeFieldState } from "@univerjs-pro/chart-ui";
import { ShapeFloatingToolbarMenuActions } from "@univerjs-pro/shape-editor-ui";
import { Button, Select, Separator, borderClassName, clsx } from "@univerjs/design";
import { DeleteIcon, PenIcon } from "@univerjs/icons";
import { ComponentManager, FloatingObjectToolbarPosition, ICanvasPopupService, IDialogService, useDependency, useObservable } from "@univerjs/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CHART_HOST_DEFAULT_BORDER_COLOR, CHART_HOST_DEFAULT_BORDER_RADIUS, ChartDataSourceRuntimeStatus, ChartImageExportFormat, ChartRenderMode, ChartThemeService, ChartTypeBits, DataUrlImageChartHost, IChartRenderModelManagerService, chartBitsUtils, chartTypeCanUseTrendLine, defaultChartConfig, isInlineChartDataSource, isReferencedChartDataSource, parseInlineChartTable, resolveChartRuntimeStyle, resolveDefaultChartHostFrameStyle } from "@univerjs-pro/engine-chart";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IRenderManagerService, Image, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { W } from "./boards-chart-ui-board-chart-edit-session.js";
import { Zn } from "./boards-chart-ui-board-chart-uiservice.js";
import { rr } from "./boards-chart-ui-board-chart-floating-toolbar-render.js";
import { ir } from "./boards-chart-ui-board-chart-open-edit.js";
import { K } from "./boards-chart-ui-board-chart-data-edit.js";
import { J } from "./boards-chart-ui-board-chart-render.js";
import { Er } from "./boards-chart-ui-board-chart-panel.js";
import { G } from "./boards-chart-ui-iboard-chart-uiservice.js";
import { Y } from "./boards-chart-ui-board-chart-snapshot-render.js";
import { Ar } from "./boards-chart-ui-iboard-chart-snapshot-renderer.js";
import { Pr } from "./boards-chart-ui-board-chart-selection.js";
import { X } from "./boards-chart-ui-board-chart-snapshot-refresh.js";
import { Qr, Yr, ai, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 } from "./boards-chart-ui-boards-chart-uiplugin.js";
import { Z } from "./boards-chart-ui-board-chart-render-adapter.js";
import { Q } from "./boards-chart-ui-board-chart-clipboard-adapter.js";
import { oi } from "./boards-chart-ui-plugin-name.js";
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808) {
  "@babel/helpers - typeof";

  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174;
  }, B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808);
}
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811) {
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 || "default");
    if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810);
}
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818, "string");
  return B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 + "";
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 = Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822;
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828);
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837;
}
W = U([H(0, IBoardElementStateService), H(1, IBoardElementService)], W);
Zn = U([H(0, Inject(BoardChartModelService)), H(1, Inject(BoardChartResourceService)), H(2, ICommandService), H(3, Inject(ChartViewStateRegistry))], Zn);
const Qn = "board.chart.floating-toolbar";
rr = U([H(1, Inject(BoardCanvasPopManagerService)), H(2, IBoardElementService), H(3, IBoardElementStateService), H(4, IBoardUIStateService), H(5, Inject(W)), H(6, Inject(BoardInteractionSurfaceService))], rr);
ir = U([H(1, IUniverInstanceService), H(2, IBoardElementService), H(3, IBoardElementStateService), H(4, IBoardUIStateService), H(5, Inject(W))], ir);
K = U([H(0, Inject(BoardChartResourceService)), H(1, Inject(BoardChartModelService)), H(2, ICommandService)], K);
const ar = "board-chart.data-editor-dialog";
const sr = {
    id: "board.operation.chart.open-data-editor",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.get(K).getDataEditState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.chartId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.get(ComponentManager).get("board-chart.data-editor-dialog")) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.get(IDialogService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.get(LocaleService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 = null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 = () => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 = null;
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.open({
        id: "board-chart.dialog.data-editor",
        title: {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.t("boards-chart-ui.common.editData")
        },
        width: "min(1120px, calc(100vw - 32px))",
        draggable: false,
        mask: true,
        maskClosable: false,
        children: {
          label: {
            name: ar,
            props: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919,
              onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923
            }
          }
        },
        onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923
      }), true;
    }
  },
  cr = "board-chart.edit-panel",
  lr = "column",
  q = {
    axis: {
      ...DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true
    },
    legend: DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: DEFAULT_CHART_PARETO_VALUES,
    funnel: DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: DEFAULT_CHART_INDICATOR_LINE_VALUES,
    pie: {
      ...DEFAULT_CHART_PIE_VALUES,
      doughnutHole: 0,
      pieHole: 0
    },
    relation: {
      ...DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: true
    },
    radar: DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 1,
      rightAxis: {
        ltr: false,
        rtl: false
      }
    },
    style: DEFAULT_CHART_STYLE_VALUES,
    titles: DEFAULT_CHART_TITLE_VALUES,
    trendline: DEFAULT_CHART_TRENDLINE_VALUES,
    waterfall: {
      ...DEFAULT_CHART_WATERFALL_SETUP_VALUES,
      useSubtotal: false
    },
    waterfallStyle: DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: DEFAULT_CHART_WORD_CLOUD_VALUES
  },
  ur = [ChartTypeBits.Line, ChartTypeBits.Radar, ChartTypeBits.WordCloud, ChartTypeBits.Scatter, ChartTypeBits.Relation, ChartTypeBits.Sankey, ChartTypeBits.Heatmap, ChartTypeBits.Boxplot, ChartTypeBits.Candlestick, ChartTypeBits.Histogram, ChartTypeBits.Treemap, ChartTypeBits.Sunburst, ChartTypeBits.Gauge, ChartTypeBits.Chord];
const var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = "board-chart-setup-panel",
  vr = "board-chart-style-panel",
  yr = CHART_HOST_DEFAULT_BORDER_COLOR,
  br = CHART_HOST_DEFAULT_BORDER_RADIUS;
function xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.chartStyle ?? {},
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.borderWidth === 0 ? 0 : wr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.borderWidth, wr((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.chartElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007.width, 1));
  return {
    fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.hostFill ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.backgroundColor ?? defaultChartConfig.backgroundColor,
    stroke: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.borderColor ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.chartElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.themeBorderColor ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.isDarkMode ? "rgba(255, 255, 255, 0.18)" : yr),
    strokeWidth: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10,
    radius: br
  };
}
function wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021;
}
J = U([H(0, Inject(LocaleService)), H(1, Inject(ChartThemeService)), H(2, IChartRenderModelManagerService)], J);
Er = U([H(1, Inject(W)), H(2, Inject(IBoardSidePanelService)), H(3, Inject(BoardChartModelService)), H(4, Inject(J)), H(5, G), H(6, Inject(LocaleService))], Er);
Y = U([H(0, Inject(LocaleService)), H(1, Inject(BoardChartModelService)), H(2, Inject(J)), H(3, IChartRenderModelManagerService), H(4, Optional(Ar))], Y);
Pr = U([H(1, Inject(W)), H(2, IBoardElementService), H(3, Inject(BoardDomLayerService)), H(4, Inject(Y))], Pr);
X = U([H(0, Inject(Y)), H(1, Inject(BoardChartModelService))], X);
var Fr = "@univerjs-pro/boards-chart-ui",
  Ir = "1.0.0-insiders.20260907-70fc579";
Yr = U([H(0, Inject(BoardChartModelService)), H(1, Inject(J)), H(2, G), H(3, Inject(W)), H(4, Inject(ChartElementFloatMenuAdapterRegistry)), H(5, Inject(ICanvasPopupService)), H(6, IRenderManagerService), H(7, IUniverInstanceService), H(8, Inject(Injector))], Yr);
Qr = U([H(0, Inject(ComponentManager))], Qr);
Z = U([H(0, Inject(ThemeService)), H(1, Inject(Y)), H(2, Inject(BoardChartResourceService)), H(3, Inject(J))], Z);
Q = U([H(0, Inject(BoardChartResourceService))], Q);
ai = U([H(0, Inject(ChartImageExportService)), H(1, Inject(Y))], ai);
V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, "pluginName", oi), V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, "packageName", Fr), V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, "version", Ir), V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, "type", UniverInstanceType.UNIVER_BOARD), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 = U([DependentOn(UniverLicensePlugin, UniverRenderEnginePlugin, UniverBoardsPlugin, UniverChartUIPlugin, UniverBoardsChartPlugin, UniverBoardsUIPlugin), H(1, Inject(Injector)), H(2, IConfigService), H(3, IRenderManagerService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189);
export { V, ur, q, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, vr, sr, lr, cr, ar, Qn, xr, br };
