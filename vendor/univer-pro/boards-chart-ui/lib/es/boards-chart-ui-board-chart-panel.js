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
import { V, cr } from "./internal-core-endo.js";
let Er = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, this._editSessionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, this._sidePanelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, this._renderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, this._chartUIService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, V(this, "_activePanelKey", null), V(this, "_activePanelDisposable", null), V(this, "_activeEditOverlay", null), this.disposeWithMe(this._editSessionService["activeSession$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => this._syncPanel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668)));
  }
  dispose() {
    this._closeActivePanel(), super.dispose();
  }
  _syncPanel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId !== this._renderContext["unitId"]) {
      this._closeActivePanel();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = this._modelService["ensureChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.chartId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) {
      this._closeActivePanel();
      return;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = [cr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.elementId].join(":");
    if (this._activePanelKey === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1) {
      this._modelService["setActiveChartRuntime"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476), this._setActiveEditOverlay(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.chartId);
      return;
    }
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = this._activePanelDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.dispose(), this._modelService["setActiveChartRuntime"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476), this._setActiveEditOverlay(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.chartId), this._activePanelKey = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1, this._activePanelDisposable = this._sidePanelService["open"]({
      id: cr,
      header: {
        title: this._localeService["t"]("boards-chart-ui.common.editChart")
      },
      width: 388,
      children: {
        label: cr,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.elementId,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.chartId
      },
      onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => {
        this._activePanelKey === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 && (this._activePanelKey = null, this._activePanelDisposable = null, this._clearActiveEditOverlay(), this._modelService["setActiveChartRuntime"](null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 === "manual" && this._editSessionService["close"]("manual"));
      }
    });
  }
  _closeActivePanel() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480;
    if (!this._activePanelKey) {
      this._clearActiveEditOverlay();
      return;
    }
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = this._activePanelDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.dispose(), this._activePanelDisposable = null, this._activePanelKey = null, this._clearActiveEditOverlay(), this._modelService["setActiveChartRuntime"](null);
  }
  _setActiveEditOverlay(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = this._activeEditOverlay;
    ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.unitId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.chartId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) && (this._clearActiveEditOverlay(), this._activeEditOverlay = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483
    }, this._renderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, true));
  }
  _clearActiveEditOverlay() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = this._activeEditOverlay;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 && (this._activeEditOverlay = null, this._renderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.chartId, false));
  }
};
export { Er as BoardChartPanelController };
