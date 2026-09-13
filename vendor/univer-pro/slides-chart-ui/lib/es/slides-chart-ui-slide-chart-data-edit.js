import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RxDisposable, Tools, UniverInstanceType, createIdentifier, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, SlideSceneTypeEnum, UniverSlidesPlugin, UpdateSlideDrawingCommand, getSlideCommandTarget } from "@univerjs-pro/slides";
import { CHART_DOM_HOST_Z_INDEX, CHART_ELEMENT_FLOAT_MENU_COMPONENT, CHART_ELEMENT_FLOAT_MENU_OFFSET, CHART_HOST_BORDER_RADIUS, CHART_TYPE_CATALOG, ChartAxisLineVisibilityField, ChartColorField, ChartCommonDataMappingSection, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartElementFloatMenuAdapterRegistry, ChartGradientFillField, ChartGridlineVisibilityField, ChartHostAdapter, ChartImageExportService, ChartIndicatorLineColorField, ChartInlineTableEditor, ChartLegendPositionField, ChartLegendRoot, ChartLegendWrapField, ChartMainTitleFields, ChartNumberFormatTextField, ChartParetoSeriesSection, ChartPieStyleSection, ChartReferencedDataSourceEditor, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesSection, ChartStackField, ChartStyleSection, ChartThemeField, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudStyleSection, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, InlineChartCreationIssueCode, MIN_CHART_HOST_DIMENSION, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, compactInlineTableValues, createChartElementFloatMenuAdapter, createChartInlineStarterData, getChartInlineTableMinColumns, resolveChartEditPanelRoute, resolveChartElementSelection, tryBuildInlineChartCreationPlan, tryPrepareInlineChartData, useChartEditorChartType, useChartEditorHasRightAxis } from "@univerjs-pro/chart-ui";
import { CHART_DATA_UPDATE_ANIMATION_DURATION, ChartDataSourceRuntimeStatus, ChartImageExportFormat, ChartRenderMode, ChartThemeService, ChartTypeBits, DataUrlImageChartHost, IChartRenderModelManagerService, chartBitsUtils, isInlineChartDataSource, isReferencedChartDataSource, parseInlineChartTable, resolveChartRuntimeStyle, resolveDefaultChartHostFrameStyle } from "@univerjs-pro/engine-chart";
import { Button, Select } from "@univerjs/design";
import { ComponentManager, ContextMenuGroup, IDialogService, IMenuManagerService, ISidebarService, MenuItemType, useDependency, useObservable } from "@univerjs/ui";
import { useEffect, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChangeSlideChartDataSourceCommand, DEFAULT_SLIDE_CHART_STROKE, DEFAULT_SLIDE_CHART_VALUES, InsertSlideChartCommand, RemoveSlideChartDataSourceMutation, RemoveSlideChartSnapshotMutation, SetSlideChartDataSourceMutation, SetSlideChartSnapshotMutation, SlideChartConfigAdapter, SlideChartModelService, SlideChartResourceService, UniverSlidesChartPlugin, UpdateSlideChartConfigCommand } from "@univerjs-pro/slides-chart";
import { BehaviorSubject, Observable, Subject, auditTime, combineLatest, skip, takeUntil } from "rxjs";
import { ISlideClipboardResourceAdapterService, ISlideDrawingStateService, ObjectAdaptor, SLIDE_MAIN_VIEWPORT_KEY, SlideCanvasPopManagerService, SlideHitTestService, SlideImageObject, SlideObjectAdaptorRegistryService, SlidePlaceholderActionOperation, UniverSlidesUIPlugin, buildDrawingOKey } from "@univerjs-pro/slides-ui";
import { IRenderManagerService, UniverRenderEnginePlugin, pxToNum } from "@univerjs/engine-render";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
let Y = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377) {
    this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377;
  }
  getEditorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = this._resourceService["getChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 ? this._resourceService["getDataSource"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.dataSourceId) : undefined;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 ? null : {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
      dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.id,
      dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383,
      values: isInlineChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620]) : [],
      sharingCount: this._resourceService["getDataSourceSharingCount"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.id)
    };
  }
  updateDataFromText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.length !== 0 && this.updateData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391);
  }
  updateData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402;
    if (!this.getEditorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.length === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 = this._resourceService["getChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.chartType;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 === undefined) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = tryPrepareInlineChartData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.ok ? this.changeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, {
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.values
    }) : false;
  }
  changeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
    return this._commandService["syncExecuteCommand"](ChangeSlideChartDataSourceCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413,
      dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414
    });
  }
};
export { Y as SlideChartDataEditService };
