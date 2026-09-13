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
import { K } from "./docs-chart-ui-doc-chart-insert.js";
import { Yr } from "./docs-chart-ui-doc-chart-insert-panel-component.js";
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 = useDependency(K),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289 = useDependency(LocaleService),
    {
      defaultChartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = ChartTypeBits.Column,
      defaultTableText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 = Yr,
      insertOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
      onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291,
      onInserted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = useMemo(() => buildChartTypeSelectOptions(CHART_TYPE_CATALOG.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.chartTypes." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.labelId)
    }))), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297] = useState(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.chartType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 => createChartInlineStarterData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, {
      candlestickClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.candlestick.close"),
      candlestickHigh: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.candlestick.high"),
      candlestickLow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.candlestick.low"),
      candlestickOpen: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.candlestick.open"),
      category: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.category"),
      chordSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.chord.source"),
      chordTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.chord.target"),
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.label"),
      sunburstHierarchy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.sunburst.hierarchy"),
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.value"),
      valueField: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.valueField")
    }),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302] = useState(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.defaultTableText === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293) ?? parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294) : parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294)),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304] = useState("inline"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308] = useState([]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310] = useState(null),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31 = {
      [InlineChartCreationIssueCode.UnknownOption]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.insertChartFailed"),
      [InlineChartCreationIssueCode.EmptyData]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.tableDataEmpty"),
      [InlineChartCreationIssueCode.InvalidCandlestickData]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.candlestick.columnsError")
    };
  return jsxs("div", {
    className: "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    children: [jsxs("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [jsx("div", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.chartType")
      }), jsx(Select, {
        className: "univer-w-full !univer-min-w-0",
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296,
        options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493);
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.chartType) ?? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495);
        }
      })]
    }), jsx(ChartReferencedDataSourceEditor, {
      mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
      inlineContent: jsx(ChartInlineTableEditor, {
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
        minColumns: getChartInlineTableMinColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299),
        parsePastedText: parseInlineChartTable,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302
      }),
      onModeChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308([]);
      },
      onPreviewChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.status === ChartDataSourceRuntimeStatus.READY && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.values ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306({
          source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667]))) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308([]));
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 && jsx("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309
    }), jsxs("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 && jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.cancel")
      }), jsx(Button, {
        type: "button",
        variant: "primary",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = tryBuildInlineChartCreationPlan({
            optionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296,
            values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301
          });
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.ok) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.issue["code"]]);
            return;
          }
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305 ? {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
              dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305
            } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.plan["style"] ? {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15,
              style: {
                ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 == null ? undefined : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15.style),
                pie: {
                  ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.pie),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.plan["style"].pie
                }
              }
            } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.plan["values"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.plan["chartType"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.insertChartFailed"));
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("docs-chart-ui.common.insert")
      })]
    })]
  });
}
export { Xr as DocChartInsertPanel };
