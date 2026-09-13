import { CommandType, DOC_DRAWING_PRINTING_COMPONENT_KEY, DataStreamTreeTokenType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, Optional, Plugin, Tools, UniverInstanceType, createIdentifier, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { CHART_TYPE_CATALOG, ChartAxisBoundsFields, ChartAxisFormatTextField, ChartAxisLabelStyleFields, ChartAxisLabelVisibilityField, ChartAxisLineVisibilityField, ChartAxisReverseField, ChartAxisTickVisibilityField, ChartAxisTitleFields, ChartCommonDataMappingSection, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartFunnelStyleSection, ChartGradientFillField, ChartGridlineVisibilityField, ChartGridlineWidthField, ChartHeatmapStyleSection, ChartHostAdapter, ChartImageExportService, ChartIndicatorLineColorField, ChartIndicatorLineTypeField, ChartInlineTableEditor, ChartLegendFontSizeField, ChartLegendPositionField, ChartLegendRoot, ChartLegendSelectModeField, ChartLegendWrapField, ChartLineAndAreaSection, ChartMainTitleFields, ChartNumberFormatTextField, ChartParetoSeriesSection, ChartPieStyleSection, ChartRadarStyleSection, ChartReferencedDataSourceEditor, ChartRelationStyleSection, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesBorderFields, ChartSeriesFillFields, ChartSeriesLabelFontSizeField, ChartSeriesLabelPositionField, ChartSeriesLabelVisibilityField, ChartSeriesPointFields, ChartSeriesRoot, ChartSnapshotQueue, ChartStackField, ChartStyleSection, ChartSubtitleFields, ChartThemeField, ChartTitleFontSizeFields, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudRepeatField, ChartWordCloudRoot, ChartWordCloudShapeField, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_FUNNEL_VALUES, DEFAULT_CHART_HEATMAP_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_LINE_AND_AREA_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_RADAR_VALUES, DEFAULT_CHART_RELATION_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, InlineChartCreationIssueCode, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, chartTypeSupportsLineAndAreaStyle, compactInlineTableValues, createChartInlineStarterData, getChartInlineTableMinColumns, resolveChartEditPanelRoute, resolveChartElementSelection, resolveChartTypeFieldValue, tryBuildInlineChartCreationPlan, tryPrepareInlineChartData, useChartEditorChartType, useChartEditorHasRightAxis } from "@univerjs-pro/chart-ui";
import { CHART_RESOURCE_VERSION, ChartDataSourceRuntimeStatus, ChartImageExportFormat, ChartRenderMode, ChartResourceRepository, ChartThemeService, ChartTypeBits, DEFAULT_CHART_DEVICE_PIXEL_RATIO, DataUrlImageChartHost, IChartRenderModelManagerService, buildChartDataSetFromValues, chartBitsUtils, createChartRuntime, getChartHostFrameContentRect, isInlineChartDataSource, isReferencedChartDataSource, parseInlineChartTable, resolveChartRuntimeStyle, resolveDefaultChartHostFrameStyle, shouldComposeChartHostFrame } from "@univerjs-pro/engine-chart";
import { Button, Select } from "@univerjs/design";
import { CanvasFloatDomService, ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, MenuItemType, RibbonInsertGroup, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChangeDocChartDataSourceCommand, DocChartModelService, DocumentChartConfigAdapter, InsertDocChartCommand, RemoveDocChartDataSourceMutation, RemoveDocChartSnapshotMutation, SetDocChartDataSourceMutation, SetDocChartSnapshotMutation, UniverDocsChartPlugin, UpdateDocChartConfigCommand } from "@univerjs-pro/docs-chart";
import { DocContentInsertService, DocSelectionManagerService, UniverDocsPlugin, docDrawingPositionToTransform } from "@univerjs/docs";
import { BreakLineCommand, DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DocPrintInterceptorService, EMPTY_PARAGRAPH_MENU_ID, IDocClipboardPasteAdapterService, IDocClipboardService, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, VIEWPORT_KEY, disableMenuWhenHeaderFooterEditing } from "@univerjs/docs-ui";
import { IDocDrawingAdapterService, RemoveDocDrawingCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { DocDrawingFloatingToolbarAdapterService, UniverDocsDrawingUIPlugin } from "@univerjs/docs-drawing-ui";
import { BehaviorSubject, Observable, Subject, auditTime, combineLatest, filter, map, skip } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin, getDrawingShapeKeyByDrawingSearch } from "@univerjs/drawing";
import { DEFAULT_TRANSFORMER_CONFIG, DRAWING_OBJECT_LAYER_INDEX, IRenderManagerService, Image, TRANSFORM_CHANGE_OBSERVABLE_TYPE, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { W } from "./docs-chart-ui-doc-chart-render.js";
import { Or } from "./docs-chart-ui-doc-dom-chart-host.js";
import { V } from "./docs-chart-ui-doc-chart-data-edit.js";
import { mr } from "./docs-chart-ui-idoc-chart-uiservice.js";
import { pr } from "./docs-chart-ui-doc-chart-data-editor.js";
import { Sr } from "./docs-chart-ui-doc-chart-edit-panel.js";
function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123) {
  let {
    model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125
  } = createChartRuntime({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117,
    chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119,
    dataSet: buildChartDataSetFromValues(compactInlineTableValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118)),
    isRowDirection: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.orient) !== "column",
    context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.chartContext,
    dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121,
    style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122,
    injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123
  });
  return {
    unitId: "doc-chart-preview",
    chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117,
    dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 + "-data-source",
    model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125
  };
}
function jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138 = useDependency(W),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 = useRef("doc-chart-preview-" + generateRandomId(8)),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143] = useState(null);
  return useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.replaceChildren(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.current = Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403);
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = null;
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141.current, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.values, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.chartType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.dataAggregation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = new Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.chartId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.applyHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.current ?? Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403), false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.createChartInstance(ChartRenderMode.Dom), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52), () => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.replaceChildren();
      };
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) return () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.replaceChildren();
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650;
        try {
          ({
            chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
            chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408));
        } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5);
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.render({
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.chartId,
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650
        }).then(() => {
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143(null);
        }).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404);
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.model["config$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411();
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 = typeof ResizeObserver > "u" ? null : new ResizeObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.contentRect;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.current = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.width > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.height > 0 ? {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.height
        } : Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411();
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403), () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.disconnect(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.model["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.source["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.replaceChildren();
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.chartType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.dataAggregation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.values, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138]), jsxs("div", {
    className: "univer-relative univer-box-border univer-flex univer-h-full univer-min-h-0 univer-w-full univer-min-w-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    children: [jsx("div", {
      ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139,
      className: "univer-absolute\x20univer-inset-0\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-rounded-lg"
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142 != null && jsx("div", {
      className: "dark:!univer-bg-gray-900/90 univer-bg-gray-0/90 univer-absolute univer-bottom-3 univer-left-3 univer-rounded univer-px-2 univer-py-1 univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461136.t("docs-chart-ui.previewRenderFailed")
    })]
  });
}
function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153.getBoundingClientRect();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154.height <= 0 ? null : {
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154.height
  };
}
function Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160;
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166 = useDependency(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = useDependency(ChartResourceRepository),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = useDependency(DocChartModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 = useDependency(V),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170 = useDependency(mr),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.getEditorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["chartType$"], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["chartType"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.chartType)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["context$"], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["context"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158.chartContext)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["dataAggregation$"], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["dataAggregation"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.dataAggregation)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["style$"], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model["style"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.style)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 = useObservable(useMemo(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.getDataSourceRuntimeState$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.getDataSourceRuntimeState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 = useMemo(() => ({
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.context),
      chartContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181] = useState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183] = useState(() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661])) ?? []),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185] = useState(() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662])) ?? []),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187] = useState(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.chartType),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189] = useState(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.tab) === ChartEditPanelTab.Data ? "data" : "chart";
    }),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191] = useState(null),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178.values) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 = useMemo(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, UniverInstanceType.UNIVER_DOC);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.getDrawings() ?? {}).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.drawingId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 ? new ChartHostAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.model, new DocumentChartConfigAdapter({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432,
        documentDataModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165
      })) : null;
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166]);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 ? jsx("div", {
    className: "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.chartNotFound")
  }) : jsxs("div", {
    className: "univer-flex\x20univer-w-full\x20univer-min-w-0\x20univer-flex-col\x20univer-overflow-hidden\x20univer-overscroll-contain",
    style: {
      height: "min(560px, calc(100vh - 180px))"
    },
    children: [jsx(ChartEditPanelTabs, {
      ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.common.editChart"),
      className: "univer-shrink-0",
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188,
      items: [{
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.floatMenu.menuTitle.chart"),
        panelId: Ir,
        value: "chart"
      }, {
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.common.data"),
        panelId: Lr,
        value: "data"
      }],
      variant: "segmented",
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189
    }), jsxs("div", {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 === "data" ? Lr : Ir,
      "aria-labelledby": (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 === "data" ? Lr : Ir) + "-tab",
      className: "univer-min-h-0\x20univer-flex-1\x20univer-pt-4",
      role: "tabpanel",
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 === "data" ? jsx(pr, {
        values: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182,
        dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.dataSource,
        sharingCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.sharingCount,
        onCancel: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189("chart"),
        onSubmit: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) => {
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.updateData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437)) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.updateChartFailed"));
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191(null);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.getEditorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.values) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.values) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189("chart");
        },
        onDataSourceSubmit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 => {
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.changeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442)) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.updateChartFailed"));
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169.getEditorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189("chart");
        }
      }) : jsxs("div", {
        className: "univer-flex\x20univer-size-full\x20univer-min-w-0\x20univer-gap-5",
        children: [jsx("div", {
          className: "univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden",
          children: jsx(jr, {
            values: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184,
            chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.chartType,
            context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179,
            dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176,
            style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177
          })
        }), jsxs("div", {
          className: "univer-flex\x20univer-min-h-0\x20univer-w-[388px]\x20univer-shrink-0\x20univer-flex-col\x20univer-gap-4\x20univer-overflow-hidden\x20univer-overscroll-contain",
          children: [jsx("div", {
            className: "univer-min-h-0\x20univer-flex-1",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 ? jsx(ChartEditorProvider, {
              chartUIService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170,
              hostAdapter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192,
              children: jsx(Sr, {
                initialRoute: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157.route,
                onClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157.onClose,
                onPreviewChartTypeChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187,
                onModifyData: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189("data")
              })
            }) : jsx("div", {
              className: "univer-p-4 univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164.t("docs-chart-ui.chartNotFound")
            })
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 && jsx("div", {
            className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190
          })]
        })]
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 === "data" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 && jsx("div", {
        className: "univer-mt-2\x20univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190
      })]
    })]
  });
}
const Ir = "doc-chart-editor-panel",
  Lr = "doc-chart-data-panel";
export { Fr as DocChartEditorDialog };
