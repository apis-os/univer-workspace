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
import { ri } from "./bases-dashboard-ui-dashboard-uiplugin-bases-dashboard-ui-ri.js";
import { br } from "./bases-dashboard-ui-dashboard-uiplugin-bases-dashboard-ui-br.js";
import { Wi } from "./bases-dashboard-ui-dashboard-uiplugin-bases-dashboard-ui-wi.js";
const Gn = {};
let qi = class extends Plugin {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46592 = Gn, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46594) {
    super(), this._config = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46592, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46593, this._configService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46594;
    let {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46595
    } = merge({}, Gn, this._config);
    this._configService["setConfig"]("bases-dashboard-ui.config", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46595);
  }
  onStarting() {
    this._injector["add"]([ri]), this._injector["add"]([br]), this._injector["add"]([Wi]);
  }
  onReady() {
    touchDependencies(this._injector, [[ri], [br], [Wi]]);
  }
};
export { qi as UniverBaseDashboardUIPlugin };
