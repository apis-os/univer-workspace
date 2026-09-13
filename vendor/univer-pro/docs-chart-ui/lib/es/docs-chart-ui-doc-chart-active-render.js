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
import { U } from "./internal-glue.js";
import { Or } from "./docs-chart-ui-doc-dom-chart-host.js";
import { R } from "./docs-chart-ui-open-doc-chart-insert-dialog-operation.js";
import { xi } from "./docs-chart-ui-doc-active-chart-component.js";
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 = 0) {
  let {
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366,
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365,
    {
      viewportScrollX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369,
      viewportScrollY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.getViewport(VIEWPORT_KEY.VIEW_MAIN),
    {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.getAncestorScale(),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372;
  return {
    startX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
    startY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37,
    endX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38,
    endY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39,
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39,
    rotate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364,
    absolute: {
      left: false,
      top: false
    },
    opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.unitId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.unitId) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.unitId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.drawingId;
}
function vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 = 0) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390;
}
function yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394.getRealBound) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 = vi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.width, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396.width, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.docTransform) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.width]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404 = vi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.height, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.height, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.docTransform) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.height]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405 = vi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.left, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.left]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406 = vi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.top, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.top]);
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406,
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403,
    bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404
  };
}
function bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 != "object") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.subscribeEvent == "function") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.subscribeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422);
    return toDisposable(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161;
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.dispose == "function") {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.dispose();
        return;
      }
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.unsubscribe) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736);
    });
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.subscribe == "function") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422);
    return toDisposable(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.unsubscribe) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737);
    });
  }
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747) {
    super(), this._drawingManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739, this._canvasFloatDomService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740, this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, this._renderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742, this._snapshotRenderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, this._staticRenderController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, U(this, "_activeLayer", null), U(this, "_layoutChanged$", new Subject()), U(this, "_visualLayoutChanged$", new Subject()), this._init();
  }
  mountChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = this._modelService["ensureChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.chartId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759) return toDisposable(() => {});
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = new Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.chartId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.root, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) => this._renderService["applyHostStyle"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166), () => this._getActiveRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758), true, () => this._getActiveRenderScale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 = this._renderService["createChartInstance"](ChartRenderMode.Dom);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760);
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761.on("click", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = resolveChartElementSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.hit);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = resolveChartEditPanelRoute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.target);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 && this._commandService["executeCommand"](R.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.unitId,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.chartId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.drawingId,
          route: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169
        });
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761.on("dblclick", () => {
        this._commandService["executeCommand"](R.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.unitId,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.chartId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.drawingId
        });
      })],
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = true;
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push(this._subscribeRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, () => var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6)), toDisposable(() => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = false, this._staticRenderController["setActiveDomReady"](this._getDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758), false), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.dispose()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.dispose();
    });
  }
  dispose() {
    this._deactivate(), this._layoutChanged$["complete"](), this._visualLayoutChanged$["complete"](), super.dispose();
  }
  _init() {
    this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => {
      this._handleFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173);
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = this._activeLayer;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176)) && this._deactivate();
    })), this.disposeWithMe(this._drawingManagerService["refreshTransform$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = this._activeLayer;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
        this._retryActivateFocusedChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._drawingManagerService["getDrawingByParam"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.subUnitId,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.drawingId
        });
        this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) && this._updatePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625);
      }
    })), this.disposeWithMe(this._univerInstanceService["getCurrentTypeOfUnit$"](UniverInstanceType.UNIVER_DOC).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = this._activeLayer;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.unitId && this._deactivate();
    }));
  }
  _subscribeRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 = () => {
        let {
          chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189,
          chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190
        } = this._renderService["createRenderInput"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766);
        Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.render({
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766.chartId,
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189,
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190
        })).then(() => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770() && this._isActiveLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769) && this._staticRenderController["setActiveDomReady"](this._getDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769), true);
        }, () => {});
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 = combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766.model["config$"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766.model["style$"], this._localeService["direction$"]]).pipe(filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 != null)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773 = this._layoutChanged$["pipe"](filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.drawingId)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774 = this._visualLayoutChanged$["pipe"](filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.drawingId)).subscribe(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768.syncLayout());
    return toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.unsubscribe();
    });
  }
  _handleFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 => this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196));
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.length !== 1) {
      this._deactivate();
      return;
    }
    this._activate(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18[0]);
  }
  _activate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 = this._getPositionState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 = this._getRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791) {
      this._deactivate();
      return;
    }
    if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 = this._activeLayer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId && this._activeLayer["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 && this._activeLayer["drawingId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.drawingId && this._activeLayer["chartId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.chartId) {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = this._activeLayer["scene"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.scene;
      this._activeLayer["scene"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.scene, this._activeLayer["sceneRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.sceneRect, this._activeLayer["angle"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.angle, this._activeLayer["renderRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, this._activeLayer["position$"].next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.position), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && this._bindActiveLayerObservers(this._activeLayer);
      return;
    }
    this._deactivate();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 = new BehaviorSubject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.position),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.engine).getCanvasElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788);
    this._canvasFloatDomService["addFloatDom"]({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.drawingId,
      componentKey: xi,
      position$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId,
      contentBox: {
        wrapperInset: 0,
        contentInset: 0
      },
      props: {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.chartId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792
      },
      onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.dispatchEvent(new PointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197)),
      onPointerMove: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.dispatchEvent(new PointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198)),
      onPointerUp: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.dispatchEvent(new PointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199)),
      onWheel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.dispatchEvent(new WheelEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200))
    }), this._modelService["setActiveChartById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.chartId);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.drawingId,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.chartId,
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.scene,
      sceneRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.sceneRect,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.angle,
      renderRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
      position$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793
    };
    this._activeLayer = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23, this._bindActiveLayerObservers(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23);
  }
  _deactivate() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = this._activeLayer;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 && (this._activeLayer = null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.positionObserver) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.dispose(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.scaleObserver) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.dispose(), this._staticRenderController["setActiveDomReady"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.drawingId
    }, false), this._canvasFloatDomService["removeFloatDom"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.drawingId), this._modelService["setActiveChartRuntime"](null), this._snapshotRenderService["invalidateChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.chartId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.position$["complete"]());
  }
  _refreshActivePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 = this._activeLayer;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.position$["next"](gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.sceneRect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.scene, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.angle));
  }
  _refreshActiveLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 = this._activeLayer;
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 || (this._refreshActivePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.chartId), this._visualLayoutChanged$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.drawingId));
  }
  _bindActiveLayerObservers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.positionObserver) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.dispose(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.scaleObserver) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.dispose();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.scene["getViewport"](VIEWPORT_KEY.VIEW_MAIN);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.positionObserver = bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.onScrollAfter$, () => {
      this._refreshActivePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.chartId);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.scene["onTransformChange$"].subscribeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.type !== TRANSFORM_CHANGE_OBSERVABLE_TYPE.scale || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.value["scaleX"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.preValue["scaleX"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.value["scaleY"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.preValue["scaleY"] || this._refreshActiveLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.unitId);
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.scaleObserver = toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.unsubscribe());
  }
  _updatePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = this._getPositionState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = this._getRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837;
      if (this._activeLayer) {
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = this._activeLayer["scene"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.scene;
        this._activeLayer["scene"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.scene, this._activeLayer["sceneRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.sceneRect, this._activeLayer["angle"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.angle, this._activeLayer["renderRect"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && this._bindActiveLayerObservers(this._activeLayer);
      }
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = this._activeLayer) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.position$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.position), this._layoutChanged$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.drawingId);
    }
  }
  _retryActivateFocusedChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = this._drawingManagerService["getFocusDrawings"]().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203));
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.length === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20[0])) && this._activate(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20[0]);
  }
  _getPositionState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.transform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 = this._renderManagerService["getRenderUnitById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.unitId);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scene) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scene["getViewport"](VIEWPORT_KEY.VIEW_MAIN)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847 = getDrawingShapeKeyByDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scene["getObjectIncludeInGroup"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 = yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849.left,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849.top;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 <= 0) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 = vi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848.angle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.angle]);
    return {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scene,
      sceneRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850,
      position: gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.scene, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850)
    };
  }
  _getRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.width) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.docTransform) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860.width) ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.height) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.docTransform) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.height) ?? 0;
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 <= 0 ? null : {
      width: Math.max(1, Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20)),
      height: Math.max(1, Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21))
    };
  }
  _getActiveRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 = this._activeLayer;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.subUnitId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.unitId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.chartId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.renderRect;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 = this._drawingManagerService["getDrawingByParam"](this._getDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868));
    return this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) ? this._getRenderRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) : null;
  }
  _getActiveRenderScale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 = this._activeLayer;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 && this._isActiveLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875.scene["getAncestorScale"]() : null;
  }
  _getDrawingSearch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878) {
    return {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.unitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.drawingId
    };
  }
  _isActiveLayer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 = this._activeLayer;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.subUnitId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.subUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.unitId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.chartId;
  }
  _isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885.drawingType) === DrawingTypeEnum.DRAWING_CHART && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885.chartId == "string";
  }
};
export { Q as DocChartActiveRenderService };
