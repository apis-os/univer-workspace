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
import { Ar, Dr, Ir, Or, Pr, U, jr, kr } from "./internal-glue.js";
function Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643 = Pr) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643.map(({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444,
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445
  }) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = resolveChartCreationIntent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 ?? String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 ? {
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.chartType,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.pieSecondaryPlotType ? {
          pieSecondaryPlotType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.pieSecondaryPlotType
        } : {})
      } : {
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445
      };
    return {
      icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445,
      params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1
    };
  });
}
function Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651 = getAllowedChartTypes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652 = Ir(Pr.concat(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452) => ({
      icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.icon,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.value,
      params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.params,
      label: "sheets-chart-ui.chartTypes." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452].labelId
    }));
  return {
    id: jr.id,
    type: MenuItemType.SELECTOR,
    selectionsCommandId: jr.id,
    selections: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18,
    icon: "ChartIcon",
    tooltip: "sheets-chart-ui.common.insertChart",
    activated$: deriveStateFromActiveSheet$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650, false, () => new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.next(false);
    })),
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649, UniverInstanceType.UNIVER_SHEET),
    disabled$: getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649)
  };
}
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.get(ISheetDrawingService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.focus$["pipe"](startWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.getFocusDrawings()), map(() => U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657) == null));
}
function zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661) {
  return {
    id: Dr.id,
    commandId: Dr.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661.get(LocaleService).t("sheets-chart-ui.common.openChartPanel"),
    icon: "PenIcon",
    hidden$: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661)
  };
}
function Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663) {
  return {
    id: Or.id,
    commandId: Or.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663.get(LocaleService).t("sheets-chart-ui.common.copy"),
    icon: "CopyDoubleIcon",
    hidden$: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663)
  };
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665) {
  return {
    id: kr.id,
    commandId: kr.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.get(LocaleService).t("sheets-chart-ui.common.exportImage"),
    icon: "DownloadImageIcon",
    hidden$: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665)
  };
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667) {
  return {
    id: Ar.id,
    commandId: Ar.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667.get(LocaleService).t("sheets-chart-ui.common.deleteChart"),
    icon: "DeleteIcon",
    hidden$: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667)
  };
}
const Ur = {
  [RibbonInsertGroup.MEDIA]: {
    [jr.id]: {
      order: 4,
      menuItemFactory: Lr
    }
  },
  [ContextMenuPosition.DRAWING]: {
    [ContextMenuGroup.OTHERS]: {
      [Dr.id]: {
        order: 0,
        menuItemFactory: zr
      },
      [Or.id]: {
        order: 1,
        menuItemFactory: Br
      },
      [kr.id]: {
        order: 3,
        menuItemFactory: Vr
      },
      [Ar.id]: {
        order: 4,
        menuItemFactory: Hr
      }
    }
  }
};
export { Ur as SheetsChartUIMenuSchema };
