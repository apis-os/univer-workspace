import { BoardElementType, BoardToolType, IBoardElementService, InsertBoardChartCommand, UniverBoardsPlugin, resolveBoardElementWorldBounds } from "@univerjs-pro/boards";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BOARD_INSERT_CHART_PANEL_COMPONENT, BoardCanvasPopManagerService, BoardDeleteSelectionOperation, BoardDomLayerService, BoardInteractionSurfaceService, IBoardClipboardResourceAdapterService, IBoardElementStateService, IBoardSidePanelService, IBoardUIStateService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey, resolveRotatedBoardObjectAnchorBound } from "@univerjs-pro/boards-ui";
import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, Optional, Plugin, RxDisposable, ThemeService, Tools, UniverInstanceType, createIdentifier, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, auditTime, combineLatest, filter, fromEvent, merge as mergeLocal, skip, takeUntil, throttleTime } from "rxjs";
import { BoardChartConfigAdapter, BoardChartModelService, BoardChartResourceService, ChangeBoardChartDataSourceCommand, DEFAULT_BOARD_CHART_VALUES, RemoveBoardChartDataSourceMutation, RemoveBoardChartSnapshotMutation, SetBoardChartDataSourceMutation, SetBoardChartSnapshotMutation, UniverBoardsChartPlugin, UpdateBoardChartConfigCommand } from "@univerjs-pro/boards-chart";
import { CHART_ELEMENT_FLOAT_MENU_COMPONENT, CHART_TYPE_CATALOG, ChartAxisSection, ChartCommonDataMappingSection, ChartEditBlockTitle, ChartEditPanel, ChartEditPanelSection, ChartEditPanelTab, ChartEditPanelTabs, ChartEditorCapability, ChartEditorProvider, ChartElementFloatMenuAdapterRegistry, ChartFunnelStyleSection, ChartGradientFillField, ChartGridlinesAndTicksSection, ChartHeatmapStyleSection, ChartHostAdapter, ChartImageExportService, ChartIndicatorLineSection, ChartInlineTableEditor, ChartLegendSection, ChartLineAndAreaSection, ChartNumberFormatTextField, ChartParetoSeriesSection, ChartPieStyleSection, ChartRadarStyleSection, ChartReferencedDataSourceEditor, ChartRelationStyleSection, ChartSectionAccordion, ChartSectionAccordionContent, ChartSectionAccordionItem, ChartSectionAccordionTrigger, ChartSeriesBorderFields, ChartSeriesDataLabelFields, ChartSeriesDataPointFields, ChartSeriesFillFields, ChartSeriesPointFields, ChartSeriesRightAxisField, ChartSeriesRoot, ChartSeriesSelector, ChartSeriesTypeField, ChartSnapshotQueue, ChartStackField, ChartStyleSection, ChartThemeField, ChartTitlesSection, ChartTrendlineSection, ChartTypeField, ChartTypeSpecificDataSection, ChartTypeSpecificSetupSection, ChartTypeSpecificStyleSection, ChartUIService, ChartViewStateRegistry, ChartWaterfallSetupFields, ChartWaterfallStyleSection, ChartWordCloudMaskImageIdField, ChartWordCloudRepeatField, ChartWordCloudRoot, ChartWordCloudShapeField, DEFAULT_CHART_AXIS_VALUES, DEFAULT_CHART_FUNNEL_VALUES, DEFAULT_CHART_HEATMAP_VALUES, DEFAULT_CHART_INDICATOR_LINE_VALUES, DEFAULT_CHART_LEGEND_VALUES, DEFAULT_CHART_LINE_AND_AREA_VALUES, DEFAULT_CHART_PARETO_VALUES, DEFAULT_CHART_PIE_VALUES, DEFAULT_CHART_RADAR_VALUES, DEFAULT_CHART_RELATION_VALUES, DEFAULT_CHART_SERIES_VALUES, DEFAULT_CHART_STYLE_VALUES, DEFAULT_CHART_TITLE_VALUES, DEFAULT_CHART_TRENDLINE_VALUES, DEFAULT_CHART_WATERFALL_SETUP_VALUES, DEFAULT_CHART_WATERFALL_STYLE_VALUES, DEFAULT_CHART_WORD_CLOUD_VALUES, InlineChartCreationIssueCode, UniverChartUIPlugin, buildChartTypeSelectOptions, chartTypeSupportsCapability, chartTypeSupportsLineAndAreaStyle, createChartElementFloatMenuAdapter, createChartInlineStarterData, getChartInlineTableMinColumns, resolveChartEditPanelRoute, resolveChartElementSelection, tryBuildInlineChartCreationPlan, tryPrepareInlineChartData, useChartEditorChartType, useChartEditorHasRightAxis, useChartTypeFieldState } from "@univerjs-pro/chart-ui";
import { ShapeFloatingToolbarMenuActions } from "@univerjs-pro/shape-editor-ui";
import { Button, Select, Separator, borderClassName, clsx } from "@univerjs/design";
import { DeleteIcon, PenIcon } from "@univerjs/icons";
import { ComponentManager, FloatingObjectToolbarPosition, ICanvasPopupService, IDialogService, useDependency, useObservable } from "@univerjs/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CHART_HOST_DEFAULT_BORDER_COLOR, CHART_HOST_DEFAULT_BORDER_RADIUS, ChartDataSourceRuntimeStatus, ChartImageExportFormat, ChartRenderMode, ChartThemeService, ChartTypeBits, DataUrlImageChartHost, IChartRenderModelManagerService, chartBitsUtils, chartTypeCanUseTrendLine, defaultChartConfig, isInlineChartDataSource, isReferencedChartDataSource, parseInlineChartTable, resolveChartRuntimeStyle, resolveDefaultChartHostFrameStyle } from "@univerjs-pro/engine-chart";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IRenderManagerService, Image, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { V, xr } from "./internal-core-endo.js";
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.strokeWidth);
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
    width: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 * 2),
    height: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 * 2)
  };
}
function Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = -1 / 2;
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14,
    width: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.width),
    height: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016.height),
    radius: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.radius - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.strokeWidth / 2)
  };
}
var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 = class extends Image {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653), V(this, "_element", undefined), V(this, "_frameStyle", undefined), this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.element, this._frameStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.frameStyle, this._attachNativeLoadHandlers();
  }
  updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656) {
    this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, this.makeDirty(true);
  }
  updateFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658) {
    ti(this._frameStyle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658) || (this._frameStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
  getFrameStyle() {
    return this._frameStyle;
  }
  changeChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660) {
    this._native ?? (this._native = document.createElement("img"), this._native["crossOrigin"] = "anonymous"), this._attachNativeLoadHandlers(), this._native["src"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660;
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 = this.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = this.height) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = this._frameStyle,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = Sr({
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 / 2), ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, 0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.radius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.fill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.restore(), this._drawChartImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666), this._drawFrameStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666);
  }
  _drawChartImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679;
    !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = this._native) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679.complete) || this._native["naturalWidth"] <= 0 || this._native["naturalHeight"] <= 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 / 2), ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.height, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.radius - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.strokeWidth)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.clip(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.drawImage(this._native, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.restore());
  }
  _drawFrameStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.strokeWidth <= 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 = Cr({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 / 2), ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.radius), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.stroke, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.lineWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.strokeWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.restore();
  }
  _notifyScene() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 = this.getScene();
    this.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.onFileLoaded$["emitEvent"](this.oKey);
  }
  _attachNativeLoadHandlers() {
    this._native && (this._native["onload"] = () => {
      this.makeDirty(true), this._notifyScene();
    }, this._native["onerror"] = () => {
      this._notifyScene();
    });
  }
};
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165 || 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 / 2);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.beginPath(), !var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.rect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.closePath();
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, Math.PI * 3 / 2, 0, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, 0, Math.PI / 2, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, Math.PI / 2, Math.PI, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, Math.PI, Math.PI * 3 / 2, false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.closePath();
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.fill === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.fill && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.stroke === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.stroke && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.strokeWidth === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.strokeWidth && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.radius === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.radius;
}
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.elementDataItem;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177.type === BoardElementType.Chart ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 : null;
}
let Z = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701) {
    this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698, this._snapshotService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700, this._renderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701, V(this, "name", "chart"), V(this, "_snapshotRefreshers", new WeakMap());
  }
  createObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 = ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707) return null;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["width"]),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["height"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 = new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.key, {
        url: "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["top"],
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["angle"],
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["flipX"],
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.bounds["flipY"],
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.zIndex,
        visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.visible !== false,
        evented: true,
        forceRender: true,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707,
        frameStyle: this._resolveFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707)
      });
    return this._watchSnapshotUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708, this._requestSnapshotForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706.unitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
  }
  syncObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714;
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712 instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 = ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.preserveTransform || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712.transformByState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.bounds), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712.updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715), this._updateFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 = this._snapshotRefreshers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714(), true) : false;
  }
  _watchSnapshotUpdates(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 = null,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.status === "ready" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.dataUrl) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.changeChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.dataUrl);
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.status === "pending" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = this._snapshotService["snapshotUpdated$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.status !== "ready" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.dataUrl) {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.status === "error" && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A) {
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = this._requestSnapshotForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
              }
              return;
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.changeChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.dataUrl), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = null;
          }));
        }
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 = () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 = this._requestSnapshotForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
    };
    this._snapshotRefreshers["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 = this._snapshotService["chartInvalidated$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.getElement().chartId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726();
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.onDispose$["subscribeEvent"](() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.unsubscribe(), this._snapshotRefreshers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720);
    });
  }
  _requestSnapshotForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = this._updateFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 = Sr({
        width: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.width),
        height: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.height)
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738);
    return this._snapshotService["requestSnapshot"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.getElement().chartId,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.height,
      mode: "main"
    });
  }
  _updateFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = this._resolveFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.getElement());
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.updateFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746;
  }
  _resolveFrameStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 = this._resourceService["getChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.chartId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752.style;
    return xr({
      chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
      chartElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751,
      hostFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753 ? this._renderService["getHostStyle"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753).fill : undefined,
      isDarkMode: this._themeService["darkMode"]
    });
  }
};
export { Z as BoardChartRenderAdapter };
