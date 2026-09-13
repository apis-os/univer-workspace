import { ChartModelService, ChartUpdateConfigCommand, ChartUpdateConfigMutation, ChartUpdateSourceCommand, InsertChartCommand, InsertSheetsChartMutation, RemoveSheetsChartMutation, SHEETS_CHART_PLUGIN_CONFIG_KEY, SHEETS_CHART_PLUGIN_NAME, SheetChartConfigAdapter, SheetsChartService, UniverSheetsChartPlugin, getAllowedChartTypes, toInsertChartMutationSource } from "@univerjs-pro/sheets-chart";
import { CommandType, DependentOn, Disposable, DisposableCollection, DrawingTypeEnum, FOCUSING_COMMON_DRAWINGS, FOCUSING_PANEL_EDITOR, ICommandService, IConfigService, IContextService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, createIdentifier, debounce, generateRandomId, isValidRange, merge, numberToABC, toDisposable, touchDependencies } from "@univerjs/core";
import { IDrawingManagerService, UniverDrawingPlugin, getDrawingShapeKeyByDrawingSearch, getOrCreateDrawingCopyPlan } from "@univerjs/drawing";
import { DrawingApplyType, ISheetDrawingService, RemoveSheetDrawingCommand, SetDrawingApplyMutation, UniverSheetsDrawingPlugin, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { SHEET_CHART_RENDER_OBJECT_CONFIG, SheetCanvasFloatDomManagerService, SheetDrawingHitTestService, UniverSheetsDrawingUIPlugin } from "@univerjs/sheets-drawing-ui";
import { COPY_TYPE, ISheetClipboardService, PREDEFINED_HOOK_NAME, SheetCanvasPopManagerService, SheetCopyCommand, SheetPrintInterceptorService, SheetSkeletonManagerService, UniverSheetsUIPlugin, deriveStateFromActiveSheet$, getCurrentRangeDisable$ } from "@univerjs/sheets-ui";
import { CanvasFloatDomService, ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, ISidebarService, IconManager, KeyCode, MOBILE_UI_MODE, MenuItemType, NativeTextEditorShortcutBehavior, RibbonInsertGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { BehaviorSubject, Observable, Subject, combineLatest, combineLatestWith, debounceTime, distinctUntilChanged, filter, fromEvent, map, merge as mergeLocal, pairwise, skip, startWith, take, throttleTime, withLatestFrom } from "rxjs";
import { CHART_ELEMENT_FLOAT_MENU_COMPONENT, CHART_HOST_BORDER_RADIUS, CHART_TYPE_CATALOG, ChartAxisSection, ChartCommonDataMappingSection, ChartDomFrame, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartElementFloatMenuAdapterRegistry, ChartFrameContentMode, ChartFrameLayout, ChartFunnelStyleSection, ChartGradientFillField, ChartGridlinesAndTicksSection, ChartHeatmapStyleSection, ChartHostAdapter, ChartImageExportService, ChartIndicatorLineSection, ChartLegendSection, ChartLineAndAreaSection, ChartNumberFormatAtom, ChartParetoSeriesSection, ChartPieStyleSection, ChartRadarStyleSection, ChartRelationStyleSection, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesSection, ChartStackField, ChartStyleSection, ChartThemeField, ChartTitlesSection, ChartTrendlineSection, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudStyleSection, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_FUNNEL_VALUES, DEFAULT_CHART_HEATMAP_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_LINE_AND_AREA_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_RADAR_VALUES, DEFAULT_CHART_RELATION_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_TRENDLINE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, chartTypeSupportsLineAndAreaStyle, createChartElementFloatMenuAdapter, resolveChartCreationIntent, resolveChartEditPanelRoute, resolveChartElementSelection, useChartEditorChartType, useChartEditorHasRightAxis } from "@univerjs-pro/chart-ui";
import { CHART_DATA_UPDATE_ANIMATION_DURATION, ChartImageExportFormat, ChartImageSourceType, ChartRenderMode, ChartThemeService, ChartTypeBits, ChartWaterfallStyleTarget, DataOrientation, EChartRenderEngineName, IChartRenderModelManagerService, ImageChartHost, PieSecondaryPlotType, RTLChartStyle, chartBitsUtils, chartImageSourceToDataUrl, chartTypeCanUseTrendLine, resolveChartRuntimeStyle, resolveChartStyleBackgroundColor, resolveDefaultChartHostFrameStyle } from "@univerjs-pro/engine-chart";
import { CopySheetCommand, RemoveSheetCommand, SheetInterceptorService, SheetPermissionCheckController, SheetSkeletonService, SheetsSelectionsService, UniverSheetsPlugin, WorkbookEditablePermission, WorksheetEditPermission, attachRangeWithCoord, discreteRangeToRange, getSheetCommandTarget } from "@univerjs/sheets";
import { deserializeRangeWithSheet, matchToken, serializeRangeWithSheet } from "@univerjs/engine-formula";
import { insertGroupObject } from "@univerjs/drawing-ui";
import { DRAWING_OBJECT_LAYER_INDEX, IRenderManagerService, ObjectType, RENDER_CLASS_TYPE, Rect, TRANSFORM_CHANGE_OBSERVABLE_TYPE, Transform, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@univerjs/design";
import { RangeSelector } from "@univerjs/sheets-formula-ui";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { PenIcon } from "@univerjs/icons";
import { G } from "./internal-glue.js";
let mi = class extends ChartUIService {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161), this._chartModelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157, this._sheetsChartService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, G(this, "_rangeSelectMode", false), G(this, "_chartEditorOpen$", new BehaviorSubject(false)), G(this, "_panelRoute$", new BehaviorSubject(null)), G(this, "chartEditorOpen$", this._chartEditorOpen$["asObservable"]()), G(this, "panelRoute$", this._panelRoute$["asObservable"]());
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
  setRangeSelectMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167) {
    this._rangeSelectMode = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167;
  }
  setChartEditorOpen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169) {
    this._chartEditorOpen$["getValue"]() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 && this._chartEditorOpen$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169);
  }
  isElementEditModeActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172;
    return this.chartEditorOpen && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 = this._chartModelService["activeChartModel"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.id) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171;
  }
  setPanelRoute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176) {
    this._panelRoute$["next"]({
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175,
      route: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176
    });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  setDataRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180 = this._chartModelService["activeChartModel"];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180 && this._executeChartUpdateSourceConfig({
      chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.id,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179
    });
  }
  setOrientation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184 = this._chartModelService["activeChartModel"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185 = this._sheetsChartService["getChartSourceSpec"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.id);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185 || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185)) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185,
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 === DataOrientation.Row
    };
    this._executeChartUpdateSourceConfig({
      chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.id,
      range: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7
    });
  }
  executeChartUpdateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190;
    this._commandService["executeCommand"](ChartUpdateConfigCommand.id, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189,
      unitId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190.getUnitId()) ?? ""
    });
  }
  _executeChartUpdateSourceConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194;
    this._commandService["executeCommand"](ChartUpdateSourceCommand.id, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193,
      unitId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194 = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.getUnitId()) ?? ""
    });
  }
  dispose() {
    this._chartEditorOpen$["complete"](), this._panelRoute$["complete"](), super.dispose();
  }
};
export { mi as SheetsChartUIService };
