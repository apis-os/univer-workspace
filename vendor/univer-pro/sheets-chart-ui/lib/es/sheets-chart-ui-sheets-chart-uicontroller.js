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
import { G, Gr, Ti } from "./internal-glue.js";
import { H, Tr } from "./sheets-chart-ui-plugin-config-key.js";
import { Ur } from "./sheets-chart-ui-sheets-chart-uimenu-schema.js";
function Oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.length !== 1) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908[0];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.drawingType === DrawingTypeEnum.DRAWING_CHART && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.groupId;
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254;
    super(), this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, this._chartModelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242, this._chartRenderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, this._sheetDrawingHitTestService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244, this._sidebarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246, this._sheetCanvasFloatDomManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247, this._sheetCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, this._sheetsChartUIService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, G(this, "_sidebarDisposable", null), G(this, "_isChartElementEditEnabled", undefined), this._isChartElementEditEnabled = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.getConfig("sheets-chart-ui.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.enableChartElementFloatMenu) === true, this._initMenus(), this.disposeWithMe(this._univerInstanceService["getCurrentTypeOfUnit$"](UniverInstanceType.UNIVER_SHEET).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = this._sidebarDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.dispose();
    })), this.disposeWithMe(toDisposable(this._sheetDrawingHitTestService["onDoubleClick$"].subscribe(async ({
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309
    }) => {
      await this._handleDrawingDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309);
    })));
  }
  _openPanel() {
    this._sidebarDisposable = this._sidebarService["open"]({
      id: Ti,
      header: {
        title: this._localeService["t"]("sheets-chart-ui.common.editChart")
      },
      width: 340,
      children: {
        label: Ti
      },
      onClose: () => {
        this._sidebarDisposable = null, this._deactivateEditPanelState(), this._chartModelService["activeChartModel"] && this._chartModelService["setActiveChartModel"](null), this._drawingManagerService["focusDrawing"](null), this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false);
      }
    });
  }
  hidePanel() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270 = this._sidebarDisposable;
    this._sidebarDisposable = null, this._deactivateEditPanelState(), this._chartModelService["activeChartModel"] && this._chartModelService["setActiveChartModel"](null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270.dispose();
  }
  initPanel() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET);
    this.disposeWithMe(this._sidebarService["sidebarOptions$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.id === "sheet.chart.edit.panel" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.visible || this._sidebarService["sidebarOptions$"].next({
        visible: false
      }));
    })), this.disposeWithMe(combineLatest([this._chartModelService["activeChartModel$"], this._sheetsChartUIService["chartEditorOpen$"]]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.id) ?? null : null), distinctUntilChanged(), startWith(null), pairwise()).subscribe(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316]) => {
      this._syncActiveEditChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316);
    })), this.disposeWithMe(this._chartModelService["activeChartModel$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 => {
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 && this._sidebarDisposable && this.hidePanel();
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.id === H.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.params;
        this.openChartPanelById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.route);
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.id === Tr.id && this.hidePanel(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.id === RemoveSheetsChartMutation.id) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.params["chartId"] === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = this._chartModelService["activeChartModel"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.id) && this.hidePanel(), this._contextService["getContextValue"](FOCUSING_COMMON_DRAWINGS) && (this._contextService["setContextValue"](FOCUSING_COMMON_DRAWINGS, false), this._drawingManagerService["focusDrawing"](null));
      }
    })), this.disposeWithMe(this._sheetCanvasFloatDomManagerService["remove$"].subscribe(({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325
    }) => {
      this._sheetsChartUIService["isElementEditModeActive"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) && this.hidePanel();
    })), this.disposeWithMe(this._sheetCanvasFloatDomManagerService["transformChange$"].subscribe(({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327
    }) => {
      this._sheetsChartUIService["isElementEditModeActive"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) && (this._sheetsChartUIService["clearPanelRoute"](), this._chartRenderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, false), this._shouldEnableChartElementEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) && this._chartRenderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, true));
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329[0];
      if (!this._sheetsChartUIService["rangeSelectMode"]) {
        if (Oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329)) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.drawingId);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = this._chartModelService["activeChartModel"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.id) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.id && this._chartModelService["setActiveChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689);
          return;
        }
        this._chartModelService["activeChartModel"] && this._chartModelService["setActiveChartModel"](null), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 && !this._sheetsChartUIService["rangeSelectMode"] && this.hidePanel();
      }
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 && (this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272.sheetDisposed$["subscribe"](() => {
      this.hidePanel();
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272.activeSheet$["subscribe"](() => {
      this.hidePanel();
    })));
  }
  async _handleDrawingDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274) {
    this._sheetsChartUIService["chartEditorOpen"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.drawingType === DrawingTypeEnum.DRAWING_CHART && (await this._openEditPanelByDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.drawingId));
  }
  async _openEditPanelByDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279 && (this._chartModelService["setActiveChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279), await this._commandService["executeCommand"](H.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278
    }));
  }
  openChartPanelById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286 && (this._chartModelService["setActiveChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286), this._openPanel(), this._activateEditPanelState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 ?? null));
  }
  _activateEditPanelState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291) {
    this._sheetsChartUIService["setChartEditorOpen"](true), this._sheetsChartUIService["setPanelRoute"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291);
  }
  _deactivateEditPanelState() {
    this._sheetsChartUIService["setChartEditorOpen"](false);
  }
  _syncActiveEditChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 && this._chartRenderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, false), this._sheetsChartUIService["clearPanelRoute"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 && (this._sheetsChartUIService["setPanelRoute"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295, null), this._chartRenderService["setElementEditMode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295, this._shouldEnableChartElementEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295))));
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](Ur), this._sheetCanvasPopManagerService["registerFeatureMenu"](DrawingTypeEnum.DRAWING_CHART, this.getChartPopupMenus["bind"](this));
  }
  _shouldEnableChartElementEdit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298);
    return !this._isChartElementEditEnabled || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 ? false : Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.chartType);
  }
  getChartPopupMenus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305) {
    return [{
      label: this._localeService["t"]("sheets-chart-ui.common.openChartPanel"),
      index: 0,
      commandId: H.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304
      },
      disable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305 !== DrawingTypeEnum.DRAWING_CHART
    }, {
      label: this._localeService["t"]("sheets-chart-ui.common.deleteChart"),
      index: 1,
      commandId: RemoveSheetDrawingCommand.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
        drawings: [{
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304,
          drawingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305
        }]
      },
      disable: false
    }, {
      label: this._localeService["t"]("sheets-chart-ui.common.hideChartPanel"),
      index: 2,
      commandId: Tr.id,
      commandParams: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304
      },
      disable: false
    }];
  }
};
export { Q as SheetsChartUIController };
