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
let ri = class {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46375, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46377) {
    this._localeService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46375, this._chartThemeService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46376, this._renderModelManager = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46377;
  }
  createDomChartInstance() {
    return this._renderModelManager["createChartInstance"](ChartRenderMode.Dom, this._createContext());
  }
  createRenderInput(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381.model["config"];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382) throw Error("Base\x20dashboard\x20chart\x20" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381.chartId + " has no render config.");
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = this._localeService["getDirection"]();
    return {
      config: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
      style: resolveChartRuntimeStyle({
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381.model["style"],
        runtime: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381.model["getRuntimeContext"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46383),
        direction: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46383
      }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382.type)
    };
  }
  _createContext() {
    return {
      resolveHostStyle: ({
        style: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46108
      }) => resolveDefaultChartHostFrameStyle({
        style: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
        getRenderColor: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => this._chartThemeService["getRenderColor"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613)
      }),
      resolveRenderBackgroundColor: ({
        hostStyle: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46109
      }) => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46109.fill
    };
  }
};
export { ri };
