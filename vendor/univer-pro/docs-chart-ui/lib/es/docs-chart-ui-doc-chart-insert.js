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
import { G } from "./internal-glue.js";
let K = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) {
    this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, this._docContentInsertService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450;
  }
  insertChartFromText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.length !== 0 && this.insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457);
  }
  insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 = {}) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.length === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = tryPrepareInlineChartData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.ok) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = this._instanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_DOC);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = this._resolveInsertPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.insertRange);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 || !this._prepareStandaloneInsertLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.breakOffsets, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.segmentId)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.unitId,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.context && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.context), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.dataAggregation && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.dataAggregation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.dataAggregation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.style && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.style = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.style);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = this._commandService["syncExecuteCommand"](InsertDocChartCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469,
      textRange: {
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.index,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.index,
        collapsed: true,
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.segmentId
      },
      chart: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13,
      dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.dataSource ?? {
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.values
      },
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.height,
      focus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.focus
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469
    } : false;
  }
  _resolveInsertPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480) return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = null;
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = this._docContentInsertService["consumeInsertRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481);
    } catch {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = null;
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 ? G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, {
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.startOffset,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.endOffset,
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.startOffset === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.endOffset,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.segmentId ?? ""
    }) : G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, qr(this._docSelectionManagerService["getActiveTextRange"]()));
  }
  _prepareStandaloneInsertLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) if (!this._commandService["syncExecuteCommand"](BreakLineCommand.id, {
      textRange: {
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
        collapsed: true,
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488
      }
    })) return false;
    return true;
  }
};
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 != "object" ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285;
}
export { K as DocChartInsertService };
