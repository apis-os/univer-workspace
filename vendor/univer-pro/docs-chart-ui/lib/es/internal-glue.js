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
import { V } from "./docs-chart-ui-doc-chart-data-edit.js";
import { hr } from "./docs-chart-ui-doc-chart-uiservice.js";
import { W } from "./docs-chart-ui-doc-chart-render.js";
import { K } from "./docs-chart-ui-doc-chart-insert.js";
import { q } from "./docs-chart-ui-doc-chart-clipboard.js";
import { J } from "./docs-chart-ui-doc-chart-drawing-edit.js";
import { Y } from "./docs-chart-ui-doc-chart-snapshot-render.js";
import { ti } from "./docs-chart-ui-idoc-chart-snapshot-renderer.js";
import { ri } from "./docs-chart-ui-doc-chart-snapshot-refresh.js";
import { Di, Ei, di, mi, ui, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, wi } from "./docs-chart-ui-docs-chart-uiplugin.js";
import { Q } from "./docs-chart-ui-doc-chart-active-render.js";
import { ki } from "./docs-chart-ui-doc-chart-print.js";
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029);
  };
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038;
}
V = B([z(0, ICommandService), z(1, Inject(ChartResourceRepository))], V);
hr = B([z(0, Inject(DocChartModelService)), z(1, ICommandService), z(2, Inject(ChartViewStateRegistry))], hr);
function Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089) {
  "@babel/helpers - typeof";

  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331;
  }, Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089);
}
function Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092) {
  if (Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 || "default");
    if (Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091);
}
function Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 = Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099, "string");
  return Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 + "";
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104 = Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103;
}
W = B([z(0, Inject(LocaleService)), z(1, Inject(ChartThemeService)), z(2, IChartRenderModelManagerService)], W);
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.collapsed) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.startOffset == null) return null;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.segmentId ?? "";
  if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 !== "") return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.getSelfOrHeaderFooterModel(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231.getBody();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.startOffset);
  if (!zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233)) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 = Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 ? {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.getUnitId(),
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234.index,
    segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    breakOffsets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234.breakOffsets
  } : null;
}
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242 === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241.dataStream[0] === DataStreamTreeTokenType.PARAGRAPH ? 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242;
}
function zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246) {
  return !(Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.tables, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246) || Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.blockRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246) || Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.customBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246));
}
function Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) {
  let {
    dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.length) return false;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 = Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250);
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251.slice(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252).length === 0;
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258) {
  let {
    dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.length) return null;
  if (Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258)) return {
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258,
    breakOffsets: []
  };
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258) + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 = Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 ? {
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258,
    breakOffsets: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258]
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 ? {
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 + 1,
    breakOffsets: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258]
  } : {
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 + 1,
    breakOffsets: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 + 1]
  };
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266 - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265.length - 1));
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265.lastIndexOf(DataStreamTreeTokenType.PARAGRAPH, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265.lastIndexOf(DataStreamTreeTokenType.SECTION_BREAK, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26));
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269.length - 1)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269.indexOf(DataStreamTreeTokenType.PARAGRAPH, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269.indexOf(DataStreamTreeTokenType.SECTION_BREAK, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 === -1 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 === -1 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === -1 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 : Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30);
}
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.endIndex));
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.endIndex));
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.startIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282));
}
K = B([z(0, IUniverInstanceService), z(1, ICommandService), z(2, Inject(DocSelectionManagerService)), z(3, Inject(DocContentInsertService))], K);
q = B([z(0, Inject(IDocClipboardService)), z(1, Inject(IDocClipboardPasteAdapterService)), z(2, Inject(ChartResourceRepository))], q);
J = B([z(0, IDocDrawingAdapterService), z(1, Inject(DocDrawingFloatingToolbarAdapterService)), z(2, Inject(ChartResourceRepository)), z(3, Inject(LocaleService))], J);
Y = B([z(0, Inject(LocaleService)), z(1, Inject(DocChartModelService)), z(2, Inject(W)), z(3, IChartRenderModelManagerService), z(4, Optional(ti))], Y);
ri = B([z(0, Inject(Y)), z(1, Inject(DocChartModelService))], ri);
mi = B([z(0, IDrawingManagerService), z(1, IRenderManagerService), z(2, Inject(Y))], mi);
Q = B([z(0, IDrawingManagerService), z(1, IRenderManagerService), z(2, Inject(CanvasFloatDomService)), z(3, Inject(DocChartModelService)), z(4, Inject(W)), z(5, Inject(Y)), z(6, ICommandService), z(7, IUniverInstanceService), z(8, Inject(LocaleService)), z(9, Inject(mi))], Q);
wi = B([z(0, Inject(ComponentManager))], wi);
Ei = B([z(0, Inject(IDialogService)), z(1, Inject(LocaleService)), z(2, IUniverInstanceService), z(3, Inject(DocSelectionManagerService)), z(4, Inject(DocContentInsertService)), z(5, IMenuManagerService), z(6, ICommandService)], Ei);
Di = B([z(0, Inject(ChartImageExportService)), z(1, Inject(Y))], Di);
ki = B([z(0, IDrawingManagerService), z(1, IRenderManagerService), z(2, Inject(Y)), z(3, Inject(DocPrintInterceptorService))], ki);
U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, "type", UniverInstanceType.UNIVER_DOC), U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, "pluginName", "UniverDocsChartUIPlugin"), U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, "packageName", ui), U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463, "version", di), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463 = B([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverDrawingPlugin, UniverRenderEnginePlugin, UniverDocsDrawingPlugin, UniverDocsUIPlugin, UniverChartUIPlugin, UniverDocsChartPlugin, UniverDocsDrawingUIPlugin), z(1, Inject(Injector)), z(2, IConfigService), z(3, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463);
export { U, G };
