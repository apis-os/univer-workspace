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
import { var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 } from "./docs-chart-ui-plugin-config-key.js";
let q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513) {
    super(), this._docClipboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, this._pasteAdapterService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, this._initClipboardHooks();
  }
  _initClipboardHooks() {
    this.disposeWithMe(this._docClipboardService["addClipboardHook"]({
      onCopyDocData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) => this._appendChartResources(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.sourceDocuments)
    })), this.disposeWithMe(this._pasteAdapterService["registerAdapter"]({
      getPasteMutationInfos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => this._getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670)
    }));
  }
  _appendChartResources(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.id;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.drawings ?? {}).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 => this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671));
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
      version: CHART_RESOURCE_VERSION,
      dataSources: {},
      charts: {}
    };
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = this._resourceService["getChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.chartId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = this._resourceService["getDataSource"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.dataSourceId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.charts[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.id] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.dataSources[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674);
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.charts).length === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517,
      [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9]: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19
    };
  }
  _getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.doc[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526) return {
      redoMutations: [],
      undoMutations: []
    };
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.customBlockMappings["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => {
      if (!this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.sourceDrawing) || !this._isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.targetDrawing)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.charts[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.sourceDrawing["chartId"]];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.dataSources[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.dataSourceId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = this._getOrCreatePastedDataSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = generateRandomId(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679,
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682,
          dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.targetDrawing["chartId"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push({
        id: SetDocChartSnapshotMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.unitId,
          chart: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.push({
        id: RemoveDocChartSnapshotMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.unitId,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682
        }
      });
    }), {
      redoMutations: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10],
      undoMutations: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9]
    };
  }
  _getOrCreatePastedDataSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.id);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 = generateRandomId();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.push({
      id: SetDocChartDataSourceMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529,
        dataSource: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530,
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535
        }
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.push({
      id: RemoveDocChartDataSourceMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529,
        dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535;
  }
  _isDocChartDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.drawingType) === DrawingTypeEnum.DRAWING_CHART && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544.chartId == "string";
  }
};
export { q as DocChartClipboardController };
