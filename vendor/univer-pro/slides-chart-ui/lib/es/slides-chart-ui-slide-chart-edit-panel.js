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
import { Mn, jn, q } from "./slides-chart-ui-slide-chart-edit-panel-component.js";
import { G } from "./slides-chart-ui-islide-chart-uiservice.js";
import { Sn } from "./slides-chart-ui-open-slide-chart-panel-operation.js";
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 = useDependency(LocaleService);
  return jsxs("div", {
    children: [jsx(ChartEditBlockTitle, {
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.t("slides-chart-ui.common.data")
    }), jsx(Button, {
      type: "button",
      variant: "default",
      className: "univer-w-full univer-justify-start",
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.onEditData,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.t("slides-chart-ui.common.editData")
    })]
  });
}
function Pn() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204 = useChartEditorChartType();
  return jsx(ChartGradientFillField, {
    visible: Mn.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 => !chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266))
  });
}
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206) {
  return jsxs(ChartSectionAccordionItem, {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206.id,
    children: [jsx(ChartSectionAccordionTrigger, {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206.label
    }), jsx(ChartSectionAccordionContent, {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206.children
    })]
  });
}
function In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 = false) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.WordCloud,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210 = chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartTypeBits.Bubble),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211 = chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartTypeBits.Pie),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Waterfall,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Pareto,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Candlestick,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Histogram,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Treemap,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Sunburst,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Gauge,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 === ChartTypeBits.Chord,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [ChartEditPanelSection.ChartStyle, ChartEditPanelSection.ChartAndAxisTitles];
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.WordCloud), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartEditorCapability.GeneralSeries) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Series), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.WaterfallSeries), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.ParetoBarSeries, ChartEditPanelSection.ParetoLineSeries), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.PieStyle), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Candlestick), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Histogram), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Treemap), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Sunburst), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Gauge), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Chord), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartEditorCapability.Legend) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.Legend), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartEditorCapability.Axes) && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.HorizontalAxis, ChartEditPanelSection.VerticalAxis), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.RightVerticalAxis), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.GridlinesAndTicks)), chartTypeSupportsCapability(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, ChartEditorCapability.IndicatorLine) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(ChartEditPanelSection.IndicatorLine), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6;
}
function Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220 = useDependency(G),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 = useChartEditorChartType(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223 = useChartEditorHasRightAxis(),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225] = useState(DEFAULT_SLIDE_CHART_STROKE.color),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227] = useState(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217.section) ?? ChartEditPanelSection.ChartStyle);
  useEffect(() => {
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.drawingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.getDrawingBorderColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.drawingId) ?? DEFAULT_SLIDE_CHART_STROKE.color);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.unitId]), useEffect(() => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.section && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route["section"]);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.border"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.editor.defaultColor"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230 = jsx(ChartColorField, {
      emptyLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228,
      pickerFallbackValue: DEFAULT_SLIDE_CHART_STROKE.color,
      resetLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 ?? DEFAULT_SLIDE_CHART_STROKE.color;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.updateDrawingBorderColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270);
      }
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 = jsx(ChartTypeSpecificStyleSection, {}),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
      [ChartEditPanelSection.Candlestick]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.candlestick"),
      [ChartEditPanelSection.ChartAndAxisTitles]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.chartAndAxisTitles"),
      [ChartEditPanelSection.ChartStyle]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.chartStyle"),
      [ChartEditPanelSection.Chord]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.chord"),
      [ChartEditPanelSection.Funnel]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.funnel"),
      [ChartEditPanelSection.Gauge]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.gauge"),
      [ChartEditPanelSection.GridlinesAndTicks]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.gridlinesAndTicks"),
      [ChartEditPanelSection.Heatmap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.heatmap"),
      [ChartEditPanelSection.Histogram]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.histogram"),
      [ChartEditPanelSection.HorizontalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.horizontalAxis"),
      [ChartEditPanelSection.IndicatorLine]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.indicatorLine"),
      [ChartEditPanelSection.Legend]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.legend"),
      [ChartEditPanelSection.LineAndArea]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.lineAndArea"),
      [ChartEditPanelSection.ParetoBarSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.paretoBar"),
      [ChartEditPanelSection.ParetoLineSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.paretoLine"),
      [ChartEditPanelSection.PieStyle]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.pie"),
      [ChartEditPanelSection.Radar]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.radar"),
      [ChartEditPanelSection.Relation]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.relation"),
      [ChartEditPanelSection.RightVerticalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.rightVerticalAxis"),
      [ChartEditPanelSection.Series]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.series"),
      [ChartEditPanelSection.Sunburst]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.sunburst"),
      [ChartEditPanelSection.Treemap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.treemap"),
      [ChartEditPanelSection.Trendline]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.trendline"),
      [ChartEditPanelSection.VerticalAxis]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.verticalAxis"),
      [ChartEditPanelSection.WaterfallSeries]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.waterfall"),
      [ChartEditPanelSection.WordCloud]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.section.wordCloud")
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = {
      [ChartEditPanelSection.ChartStyle]: jsx(ChartStyleSection, {
        defaultValues: q.style,
        hostBorder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230
      }),
      [ChartEditPanelSection.ChartAndAxisTitles]: jsx(ChartMainTitleFields, {
        commitMode: "change",
        defaultValues: q.titles,
        showFont: false
      }),
      [ChartEditPanelSection.Series]: jsx(ChartSeriesSection, {
        defaultValues: q.series,
        NumberFormatField: ChartNumberFormatTextField,
        selectedSeriesId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.seriesId
      }),
      [ChartEditPanelSection.WaterfallSeries]: jsx(ChartWaterfallStyleSection, {
        defaultValues: q.waterfallStyle,
        NumberFormatField: ChartNumberFormatTextField,
        selectedSeriesId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.route) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.seriesId
      }),
      [ChartEditPanelSection.ParetoBarSeries]: jsx(ChartParetoSeriesSection, {
        defaultValues: q.pareto,
        NumberFormatField: ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "barStyle"
      }),
      [ChartEditPanelSection.ParetoLineSeries]: jsx(ChartParetoSeriesSection, {
        defaultValues: q.pareto,
        NumberFormatField: ChartNumberFormatTextField,
        showDataPointEditor: true,
        target: "cumulativeLineStyle"
      }),
      [ChartEditPanelSection.PieStyle]: jsx(ChartPieStyleSection, {
        defaultValues: q.pie,
        NumberFormatField: ChartNumberFormatTextField
      }),
      [ChartEditPanelSection.WordCloud]: jsx(ChartWordCloudStyleSection, {
        defaultValues: q.wordCloud
      }),
      [ChartEditPanelSection.Legend]: jsx(ChartLegendRoot, {
        defaultValues: q.legend,
        children: jsxs("div", {
          className: "univer-flex univer-flex-col univer-gap-2",
          children: [jsx(ChartLegendPositionField, {}), jsx(ChartLegendWrapField, {})]
        })
      }),
      [ChartEditPanelSection.HorizontalAxis]: jsx(ChartAxisLineVisibilityField, {
        axis: "x",
        defaultValues: q.axis
      }),
      [ChartEditPanelSection.VerticalAxis]: jsx(ChartAxisLineVisibilityField, {
        axis: "y",
        defaultValues: q.axis
      }),
      [ChartEditPanelSection.RightVerticalAxis]: jsx(ChartAxisLineVisibilityField, {
        axis: "rightY",
        defaultValues: q.axis
      }),
      [ChartEditPanelSection.GridlinesAndTicks]: jsxs("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [jsx(ChartGridlineVisibilityField, {
          axis: "x",
          defaultValues: q.axis,
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.horizontalAxis")
        }), jsx(ChartGridlineVisibilityField, {
          axis: "y",
          defaultValues: q.axis,
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.t("slides-chart-ui.common.verticalAxis")
        })]
      }),
      [ChartEditPanelSection.IndicatorLine]: jsx(ChartIndicatorLineColorField, {
        defaultValues: q.indicatorLine
      }),
      [ChartEditPanelSection.Candlestick]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
      [ChartEditPanelSection.Histogram]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
      [ChartEditPanelSection.Treemap]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
      [ChartEditPanelSection.Sunburst]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
      [ChartEditPanelSection.Gauge]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231,
      [ChartEditPanelSection.Chord]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231
    };
  return jsx(ChartSectionAccordion, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226,
    onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227,
    children: In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 => jsx(Fn, {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273,
      label: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273],
      children: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273))
  });
}
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248) {
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253 = useDependency(SlideChartModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254 = useDependency(SlideChartResourceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 = useDependency(G),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = useDependency(IUniverInstanceService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261] = useState(ChartEditPanelTab.Data),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.panelRoute$, null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262.chartId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262.route : null;
  useEffect(() => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.setActiveChartById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249]), useEffect(() => {
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.tab) === ChartEditPanelTab.Style && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261(ChartEditPanelTab.Style), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.tab) === ChartEditPanelTab.Data && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261(ChartEditPanelTab.Data);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.activeRuntimeModel$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.activeRuntimeModel),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265 = useMemo(() => {
      if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 ? new ChartHostAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.model, new SlideChartConfigAdapter({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251,
        slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258
      })) : null;
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266 = useMemo(() => buildChartTypeSelectOptions(CHART_TYPE_CATALOG.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.chartTypes." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.labelId)
    }))), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256]);
  return !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265 ? null : jsx(ChartEditorProvider, {
    chartUIService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255,
    hostAdapter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265,
    children: jsxs("div", {
      className: "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-min-w-0 univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [jsx(ChartEditPanelTabs, {
        ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.editChart"),
        className: "univer-shrink-0\x20univer-px-3",
        items: [{
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.setup"),
          panelId: zn,
          value: ChartEditPanelTab.Data
        }, {
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.customize"),
          panelId: Bn,
          value: ChartEditPanelTab.Style
        }],
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 === ChartEditPanelTab.Data ? jsx(ChartEditPanel, {
        id: zn,
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.setup"),
        children: jsxs("div", {
          className: "univer-flex\x20univer-flex-col\x20univer-gap-3\x20univer-px-4\x20univer-pb-5",
          children: [jsx(ChartTypeField, {
            options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266
          }), jsx(ChartTypeSpecificSetupSection, {}), jsx(ChartThemeField, {}), jsx(Pn, {}), jsx(ChartStackField, {}), jsx(Nn, {
            onEditData: () => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.executeCommand(Sn.id, {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249,
                chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252
              });
            }
          }), jsx(ChartCommonDataMappingSection, {
            orientationControl: jsx(Button, {
              size: "small",
              onClick: () => {
                var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276;
                return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.executeChartUpdateConfig({
                  patch: {
                    context: {
                      orient: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.orient) === jn ? "row" : jn
                    }
                  }
                });
              },
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.switchRowColumn")
            })
          }), jsx(ChartTypeSpecificDataSection, {}), jsx(ChartWaterfallSetupFields, {
            defaultValues: q.waterfall
          })]
        })
      }) : jsx(ChartEditPanel, {
        id: Bn,
        className: "univer-min-w-0\x20univer-overflow-x-hidden",
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.t("slides-chart-ui.common.customize"),
        children: jsx(Ln, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251,
          route: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263
        })
      })]
    })
  });
}
const zn = "slide-chart-setup-panel",
  Bn = "slide-chart-style-panel";
export { Rn as SlideChartEditPanel };
