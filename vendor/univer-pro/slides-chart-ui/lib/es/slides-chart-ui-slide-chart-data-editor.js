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
function Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135 = useDependency(LocaleService),
    {
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136,
      onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137,
      onSubmit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140] = useState(() => isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.dataSource) ? "referenced" : "inline"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144] = useState(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613])),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = compactInlineTableValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.length === 0) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.t("slides-chart-ui.common.tableDataEmpty"));
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200);
    };
  return jsxs("div", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4 univer-p-1",
    children: [jsx("div", {
      className: "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
      children: jsx(ChartReferencedDataSourceEditor, {
        mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139,
        initialSource: isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.dataSource) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.dataSource["source"] : undefined,
        inlineContent: jsx(ChartInlineTableEditor, {
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143,
          parsePastedText: parseInlineChartTable,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144
        }),
        onModeChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142(null);
        },
        onPreviewChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.status === ChartDataSourceRuntimeStatus.READY ? {
          source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206
        } : null)
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 && jsx("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145
    }), jsxs("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 && jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.t("slides-chart-ui.common.cancel")
      }), jsx(Button, {
        type: "button",
        variant: "primary",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139 === "referenced" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139 === "referenced" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.onDataSourceSubmit) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147("shared");
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.t("slides-chart-ui.common.apply")
      })]
    })]
  });
}
export { Dn as SlideChartDataEditor };
