import { BASES_DASHBOARD_DEFAULT_ROW_HEIGHT, BASES_DASHBOARD_GRID_COLUMNS, BaseChartRuntimeService, BaseDashboardResourceService, BaseDashboardWidgetType, CreateBaseDashboardCommand, DeleteBaseDashboardCommand, RemoveBaseDashboardWidgetCommand, UniverBaseDashboardPlugin, UpdateBaseDashboardCommand, UpdateBasePivotViewCommand, UpsertBaseDashboardWidgetCommand, canEditBaseDashboard, canEditBasePivotView, createBasePivotTable, resolveBasePivotChartRowDirection } from "@univerjs-pro/bases-dashboard";
import { ActivateBaseViewOperation, BaseUnitCollaborationStatus, FormulaEditorPanel, IBaseDashboardUIExtensionRegistryService, IBaseViewUIRegistryService, UniverBasesUIPlugin, formulaToEditorFormula, normalizeEditorFormulaForConfig, toFormulaMenuTables, toMenuFields } from "@univerjs-pro/bases-ui";
import { CHART_TYPE_CATALOG, ChartAxisSection, ChartColorField, ChartCommonDataMappingSection, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartFunnelStyleSection, ChartGradientFillField, ChartGridlinesAndTicksSection, ChartHeatmapStyleSection, ChartHostAdapter, ChartIndicatorLineSection, ChartLegendSection, ChartLineAndAreaSection, ChartNumberFormatAtom, ChartParetoSeriesSection, ChartPieStyleSection, ChartRadarStyleSection, ChartRelationStyleSection, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesSection, ChartStackField, ChartStyleSection, ChartThemeField, ChartTitlesSection, ChartTrendlineSection, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudStyleSection, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_FUNNEL_VALUES, DEFAULT_CHART_HEATMAP_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_LINE_AND_AREA_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_RADAR_VALUES, DEFAULT_CHART_RELATION_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_TRENDLINE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, chartTypeSupportsLineAndAreaStyle, useChartEditorChartType, useChartEditorHasRightAxis } from "@univerjs-pro/chart-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ShapeFormulaService, UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, DependentOn, Disposable, ICommandService, IConfigService, IImageIoService, ILogService, IPermissionService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, LocaleService, Plugin, RedoCommand, ThemeService, UndoCommand, UniverInstanceType, createParagraphId, dateKit, generateRandomId, merge, numfmt, touchDependencies } from "@univerjs/core";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { AscendingIcon, CalendarIcon, ChartIcon, CloseIcon, DeleteIcon, DescendingIcon, ExpandIcon, FilterIcon, GripVerticalIcon, IncreaseIcon, MoreDownIcon, MoreHorizontalIcon, NumberIcon, PenIcon, PivotTableIcon, RedoIcon, SearchIcon, TextIcon, UndoIcon } from "@univerjs/icons";
import { combineLatest, map, merge as mergeLocal, skip } from "rxjs";
import { IAttachmentIoService } from "@univerjs-pro/collaboration-client";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { Button, Checkbox, DatePicker, Dialog, DropdownMenu, Input, InputNumber, MultipleSelect, Segmented, Select, Textarea, Tooltip, borderClassName, clsx, scrollbarClassName } from "@univerjs/design";
import { useDependency, useObservable } from "@univerjs/ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CHART_DATA_UPDATE_ANIMATION_DURATION, ChartRenderMode, ChartThemeService, ChartTypeBits, ChartWaterfallStyleTarget, IChartRenderModelManagerService, RTLChartStyle, chartBitsUtils, chartTypeCanUseTrendLine, resolveChartRuntimeStyle, resolveDefaultChartHostFrameStyle, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotFilterTypeEnum, PivotLayoutTypeEnum, PivotSubtotalPositionEnum, PivotSubtotalTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
function hr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46796) {
  "@babel/helpers - typeof";

  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46296) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46296;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46298) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46298 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46298.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46298 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46298;
  }, hr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46796);
}
function gr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46799) {
  if (hr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46801 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46799 || "default");
    if (hr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46801) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46801;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46799 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46798);
}
function fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46806) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807 = gr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46806, "string");
  return hr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807) == "symbol" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807 + "";
}
function vr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811 = fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811, {
    value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810;
}
export { vr };
