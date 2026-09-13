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
import { bn } from "./internal-core-endo.js";
import { Cn } from "./slides-chart-ui-open-slide-chart-panel-operation.js";
function Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.get(ISlideDrawingService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.next(bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335) != null),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.focus$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361(), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.unsubscribe();
  });
}
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339) {
  return {
    id: Cn.id,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.get(LocaleService).t("slides-chart-ui.common.editChart"),
    icon: "ShapeIcon",
    hidden$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.unsubscribe();
    }),
    disabled$: new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619));
      return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.unsubscribe();
    })
  };
}
export { qn as SlideContextMenuOpenChartPanelFactory };
