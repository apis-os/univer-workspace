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
const H = {
    axis: {
      ...DEFAULT_CHART_AXIS_VALUES,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true
    },
    legend: DEFAULT_CHART_LEGEND_VALUES,
    lineAndArea: DEFAULT_CHART_LINE_AND_AREA_VALUES,
    pareto: DEFAULT_CHART_PARETO_VALUES,
    funnel: DEFAULT_CHART_FUNNEL_VALUES,
    heatmap: DEFAULT_CHART_HEATMAP_VALUES,
    indicatorLine: DEFAULT_CHART_INDICATOR_LINE_VALUES,
    pie: {
      ...DEFAULT_CHART_PIE_VALUES,
      doughnutHole: 0,
      pieHole: 0
    },
    relation: {
      ...DEFAULT_CHART_RELATION_VALUES,
      useValueAsSymbolSize: false
    },
    radar: DEFAULT_CHART_RADAR_VALUES,
    series: {
      ...DEFAULT_CHART_SERIES_VALUES,
      radarFillOpacity: 1,
      rightAxis: {
        ltr: false,
        rtl: false
      }
    },
    style: DEFAULT_CHART_STYLE_VALUES,
    titles: DEFAULT_CHART_TITLE_VALUES,
    waterfall: {
      ...DEFAULT_CHART_WATERFALL_SETUP_VALUES,
      useSubtotal: true
    },
    waterfallStyle: DEFAULT_CHART_WATERFALL_STYLE_VALUES,
    wordCloud: DEFAULT_CHART_WORD_CLOUD_VALUES
  },
  gr = [ChartTypeBits.Candlestick, ChartTypeBits.Histogram, ChartTypeBits.Treemap, ChartTypeBits.Sunburst, ChartTypeBits.Gauge, ChartTypeBits.Chord];
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047 = useChartEditorChartType();
  return jsx(ChartGradientFillField, {
    visible: gr.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 => !chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323))
  });
}
function vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049) {
  return jsxs(ChartSectionAccordionItem, {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.id,
    children: [jsx(ChartSectionAccordionTrigger, {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.label
    }), jsx(ChartSectionAccordionContent, {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.children
    })]
  });
}
function yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 = false) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.WordCloud,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 = chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, ChartTypeBits.Pie),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Radar,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Funnel,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Waterfall,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Pareto,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Candlestick,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Histogram,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Treemap,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Sunburst,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Gauge,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Chord,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Relation,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 === ChartTypeBits.Heatmap,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [ChartEditPanelSection.ChartStyle, ChartEditPanelSection.ChartAndAxisTitles];
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.WordCloud), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, ChartEditorCapability.GeneralSeries) && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Series), chartTypeSupportsLineAndAreaStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.LineAndArea), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Radar), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.WaterfallSeries), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.ParetoBarSeries, ChartEditPanelSection.ParetoLineSeries), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.PieStyle), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Funnel), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Heatmap), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Relation), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Candlestick), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Histogram), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Treemap), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Sunburst), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Gauge), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Chord), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, ChartEditorCapability.Legend) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.Legend), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, ChartEditorCapability.Axes) && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.HorizontalAxis, ChartEditPanelSection.VerticalAxis), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.RightVerticalAxis), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.GridlinesAndTicks)), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, ChartEditorCapability.IndicatorLine) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(ChartEditPanelSection.IndicatorLine), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24;
}
function br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057) {
  return jsxs("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [jsx(ChartAxisLineVisibilityField, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis,
      defaultValues: H.axis
    }), jsx(ChartAxisLabelVisibilityField, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis,
      defaultValues: H.axis
    }), jsx(ChartAxisReverseField, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis,
      defaultValues: H.axis
    }), jsx(ChartAxisBoundsFields, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis
    }), jsx(ChartAxisFormatTextField, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis
    }), jsx(ChartAxisLabelStyleFields, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis,
      defaultValues: H.axis
    }), jsx(ChartAxisTickVisibilityField, {
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.axis,
      defaultValues: H.axis
    })]
  });
}
function xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 = useChartEditorChartType(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 = useChartEditorHasRightAxis(),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067 = jsx(ChartTypeSpecificStyleSection, {}),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {
      [ChartEditPanelSection.Candlestick]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.candlestick"),
      [ChartEditPanelSection.ChartAndAxisTitles]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.chartAndAxisTitles"),
      [ChartEditPanelSection.ChartStyle]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.chartStyle"),
      [ChartEditPanelSection.Chord]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.chord"),
      [ChartEditPanelSection.Funnel]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.funnel"),
      [ChartEditPanelSection.Gauge]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.gauge"),
      [ChartEditPanelSection.GridlinesAndTicks]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.gridlinesAndTicks"),
      [ChartEditPanelSection.Heatmap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.heatmap"),
      [ChartEditPanelSection.Histogram]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.histogram"),
      [ChartEditPanelSection.HorizontalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.horizontalAxis"),
      [ChartEditPanelSection.IndicatorLine]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.indicatorLine"),
      [ChartEditPanelSection.Legend]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.legend"),
      [ChartEditPanelSection.LineAndArea]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.lineAndArea"),
      [ChartEditPanelSection.ParetoBarSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.paretoBar"),
      [ChartEditPanelSection.ParetoLineSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.paretoLine"),
      [ChartEditPanelSection.PieStyle]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.pie"),
      [ChartEditPanelSection.Radar]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.radar"),
      [ChartEditPanelSection.Relation]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.relation"),
      [ChartEditPanelSection.RightVerticalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.rightVerticalAxis"),
      [ChartEditPanelSection.Series]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.series"),
      [ChartEditPanelSection.Sunburst]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.sunburst"),
      [ChartEditPanelSection.Treemap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.treemap"),
      [ChartEditPanelSection.Trendline]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.trendline"),
      [ChartEditPanelSection.VerticalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.verticalAxis"),
      [ChartEditPanelSection.WaterfallSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.waterfall"),
      [ChartEditPanelSection.WordCloud]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.section.wordCloud")
    };
  useEffect(() => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.route) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.section && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.route["section"]);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.route]);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
    [ChartEditPanelSection.ChartStyle]: jsx(ChartStyleSection, {
      defaultValues: H.style
    }),
    [ChartEditPanelSection.ChartAndAxisTitles]: jsxs("div", {
      className: "univer-flex univer-flex-col univer-gap-3",
      children: [jsx(ChartMainTitleFields, {
        commitMode: "change",
        defaultValues: H.titles,
        showFont: false
      }), jsx(ChartSubtitleFields, {
        commitMode: "change",
        defaultValues: H.titles,
        showFont: false
      }), jsx(ChartAxisTitleFields, {
        axis: "x",
        commitMode: "change",
        defaultValues: H.titles,
        showAlignment: false,
        showFont: false
      }), jsx(ChartAxisTitleFields, {
        axis: "y",
        commitMode: "change",
        defaultValues: H.titles,
        showAlignment: false,
        showFont: false
      }), jsx(ChartAxisTitleFields, {
        axis: "rightY",
        commitMode: "change",
        defaultValues: H.titles,
        showAlignment: false,
        showFont: false
      }), jsx(ChartTitleFontSizeFields, {
        defaultValues: H.titles
      })]
    }),
    [ChartEditPanelSection.Series]: jsxs(ChartSeriesRoot, {
      defaultValues: H.series,
      NumberFormatField: ChartNumberFormatTextField,
      selectedSeriesId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060.seriesId,
      children: [jsx(ChartSeriesFillFields, {}), jsx(ChartSeriesBorderFields, {
        showColor: false,
        showOpacity: false
      }), jsx(ChartSeriesPointFields, {
        showColor: false
      }), jsx(ChartSeriesLabelVisibilityField, {}), jsx(ChartSeriesLabelPositionField, {}), jsx(ChartSeriesLabelFontSizeField, {})]
    }),
    [ChartEditPanelSection.LineAndArea]: jsx(ChartLineAndAreaSection, {
      defaultValues: H.lineAndArea,
      lineStyleControl: "select"
    }),
    [ChartEditPanelSection.WordCloud]: jsxs(ChartWordCloudRoot, {
      children: [jsx(ChartWordCloudShapeField, {
        defaultValues: H.wordCloud
      }), jsx(ChartWordCloudRepeatField, {
        defaultValues: H.wordCloud
      })]
    }),
    [ChartEditPanelSection.Radar]: jsx(ChartRadarStyleSection, {
      defaultValues: H.radar
    }),
    [ChartEditPanelSection.WaterfallSeries]: jsx(ChartWaterfallStyleSection, {
      defaultValues: H.waterfallStyle,
      NumberFormatField: ChartNumberFormatTextField,
      selectedSeriesId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061.seriesId
    }),
    [ChartEditPanelSection.ParetoBarSeries]: jsx(ChartParetoSeriesSection, {
      defaultValues: H.pareto,
      NumberFormatField: ChartNumberFormatTextField,
      showDataPointEditor: true,
      target: "barStyle"
    }),
    [ChartEditPanelSection.ParetoLineSeries]: jsx(ChartParetoSeriesSection, {
      defaultValues: H.pareto,
      NumberFormatField: ChartNumberFormatTextField,
      showDataPointEditor: true,
      target: "cumulativeLineStyle"
    }),
    [ChartEditPanelSection.PieStyle]: jsx(ChartPieStyleSection, {
      defaultValues: H.pie,
      NumberFormatField: ChartNumberFormatTextField
    }),
    [ChartEditPanelSection.Funnel]: jsx(ChartFunnelStyleSection, {
      defaultValues: H.funnel,
      gapControl: "number"
    }),
    [ChartEditPanelSection.Heatmap]: jsx(ChartHeatmapStyleSection, {
      defaultValues: H.heatmap
    }),
    [ChartEditPanelSection.Relation]: jsx(ChartRelationStyleSection, {
      defaultValues: H.relation
    }),
    [ChartEditPanelSection.Legend]: jsx(ChartLegendRoot, {
      defaultValues: H.legend,
      children: jsxs("div", {
        className: "univer-flex univer-flex-col univer-gap-3",
        children: [jsx(ChartLegendPositionField, {}), jsx(ChartLegendWrapField, {}), jsx(ChartLegendSelectModeField, {}), jsx(ChartLegendFontSizeField, {})]
      })
    }),
    [ChartEditPanelSection.HorizontalAxis]: jsx(br, {
      axis: "x"
    }),
    [ChartEditPanelSection.VerticalAxis]: jsx(br, {
      axis: "y"
    }),
    [ChartEditPanelSection.RightVerticalAxis]: jsx(br, {
      axis: "rightY"
    }),
    [ChartEditPanelSection.GridlinesAndTicks]: jsxs("div", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [jsx(ChartGridlineVisibilityField, {
        axis: "x",
        defaultValues: H.axis,
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.horizontalAxis")
      }), jsx(ChartGridlineVisibilityField, {
        axis: "y",
        defaultValues: H.axis,
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062.t("docs-chart-ui.common.verticalAxis")
      }), jsxs("div", {
        className: "univer-grid univer-grid-cols-2 univer-gap-2",
        children: [jsx(ChartGridlineWidthField, {
          axis: "x",
          defaultValues: H.axis
        }), jsx(ChartGridlineWidthField, {
          axis: "y",
          defaultValues: H.axis
        })]
      })]
    }),
    [ChartEditPanelSection.IndicatorLine]: jsxs("div", {
      className: "univer-flex univer-flex-col univer-gap-2",
      children: [jsx(ChartIndicatorLineColorField, {
        defaultValues: H.indicatorLine
      }), jsx(ChartIndicatorLineTypeField, {
        defaultValues: H.indicatorLine
      })]
    }),
    [ChartEditPanelSection.Candlestick]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067,
    [ChartEditPanelSection.Histogram]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067,
    [ChartEditPanelSection.Treemap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067,
    [ChartEditPanelSection.Sunburst]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067,
    [ChartEditPanelSection.Gauge]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067,
    [ChartEditPanelSection.Chord]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067
  };
  return jsx(ChartSectionAccordion, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065,
    onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066,
    children: yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 => jsx(vr, {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
      label: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326],
      children: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326))
  });
}
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 = useDependency(LocaleService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081] = useState(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.initialRoute) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078.tab) ?? ChartEditPanelTab.Data),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082 = useMemo(() => buildChartTypeSelectOptions(CHART_TYPE_CATALOG.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.chartTypes." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.labelId)
    }))), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079]);
  return useEffect(() => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.initialRoute) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.tab && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.initialRoute["tab"]);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.initialRoute]), jsxs("div", {
    className: "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
    children: [jsx(ChartEditPanelTabs, {
      ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.editChart"),
      className: "univer-shrink-0 univer-px-3",
      items: [{
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.setup"),
        panelId: Cr,
        value: ChartEditPanelTab.Data
      }, {
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.customize"),
        panelId: wr,
        value: ChartEditPanelTab.Style
      }],
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 === ChartEditPanelTab.Data ? jsx(ChartEditPanel, {
      id: Cr,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.setup"),
      children: jsxs("div", {
        className: "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
        children: [jsx(ChartTypeField, {
          options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.onPreviewChartTypeChange
        }), jsx(ChartTypeSpecificSetupSection, {}), jsx(ChartThemeField, {}), jsx(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F, {}), jsx(ChartStackField, {}), jsxs("div", {
          children: [jsx(ChartEditBlockTitle, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.data")
          }), jsx(Button, {
            className: "univer-w-full univer-justify-start",
            onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.onModifyData,
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.editData")
          })]
        }), jsx(ChartCommonDataMappingSection, {}), jsx(ChartTypeSpecificDataSection, {}), jsx(ChartWaterfallSetupFields, {
          defaultValues: H.waterfall
        })]
      })
    }) : jsx(ChartEditPanel, {
      id: wr,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.common.customize"),
      children: jsx(xr, {
        route: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.initialRoute
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.onClose && jsx("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-px-1 univer-pb-4 univer-pt-4",
      children: jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.onClose,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.t("docs-chart-ui.close")
      })
    })]
  });
}
const Cr = "doc-chart-setup-panel",
  wr = "doc-chart-style-panel";
export { Sr as DocChartEditPanel };
