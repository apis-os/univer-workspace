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
import { Mr } from "./boards-chart-ui-board-chart-snapshot-style.js";
var Nr = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511) {
    this._renderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, this._renderModelManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511;
  }
  async render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515) {
    if (typeof document > "u") throw TypeError("Board chart snapshot rendering requires a browser document.");
    let {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517
      } = this._renderService["createRenderInput"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.format === ChartImageExportFormat.SVG) return (await this._renderModelManager["exportImage"]({
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.chartId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516,
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.height
    }, {
      format: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.format
    })).dataUrl;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = new DataUrlImageChartHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.chartId, {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.height
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = this._renderService["createChartInstance"](ChartRenderMode.Image);
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.render({
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.chartId,
        config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.getDataUrl();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) throw Error("Failed to render board chart snapshot: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.unitId + "/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.chartId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.dispose();
    }
  }
};
let Y = class extends ChartSnapshotQueue {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 ?? new Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531));
  }
  getCacheKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 = super.getCacheKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.format === ChartImageExportFormat.SVG ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 + "::" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538.format : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539;
  }
};
export { Y as BoardChartSnapshotRenderService };
