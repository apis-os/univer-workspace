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
import { J } from "./boards-chart-ui-board-chart-render.js";
import { Dr } from "./boards-chart-ui-board-dom-chart-host.js";
import { V, xr } from "./internal-core-endo.js";
function Or({
  chartElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032,
  chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034
}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036 = useDependency(BoardChartModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 = useDependency(J),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 = useDependency(LocaleService);
  return useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.setActiveChartRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = new Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.applyHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, {
        fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.fill ?? "transparent"
      })),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.createChartInstance(ChartRenderMode.Dom),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.registerChartInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.model["config$"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.model["style$"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038.direction$]).pipe(filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 != null)).subscribe(() => {
      let {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499);
      kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.render({
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
        config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675
      }).catch(() => {});
    });
    return () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.dispose(), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.activeRuntimeModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.activeRuntimeModel["chartId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.setActiveChartRuntime(null);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034]), jsx("div", {
    className: "univer-relative univer-h-full univer-w-full univer-overflow-hidden",
    "data-board-chart-dom-renderer": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
    children: jsx("div", {
      ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035,
      "data-board-chart-dom-content-host": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033
    })
  });
}
function kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.getHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048).fill,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 = xr({
      chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048,
      chartElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047,
      hostFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050
    }),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.strokeWidth);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["position"] = "absolute", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["left"] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + "px", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["top"] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + "px", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["right"] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + "px", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["bottom"] = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 + "px", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["backgroundColor"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.fill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["borderRadius"] = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.radius - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16) + "px", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["overflow"] = "hidden", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.style["boxSizing"] = "border-box";
}
let Pr = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, this._editSessionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, this._domLayerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, this._snapshotService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546, V(this, "_activeLayerId", null), V(this, "_activeLayerDisposable", null), V(this, "_activeChart", null), this.disposeWithMe(this._editSessionService["activeSession$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => this._syncActiveChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)));
  }
  dispose() {
    this._clearActiveLayer(), super.dispose();
  }
  _syncActiveChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId !== this._renderContext["unitId"]) {
      this._clearActiveLayer();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.subUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.elementId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.element["type"] !== BoardElementType.Chart || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.element["chartId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.chartId) {
      this._clearActiveLayer();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555) {
      this._clearActiveLayer();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.chartId,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = ["board-chart-active", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.elementId].join(":");
    if (this._activeLayerId === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3) {
      this._activeChart = {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId
      }, this._domLayerService["updateItem"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, {
        rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
        content: () => jsx(Or, {
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
          chartElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId
        })
      });
      return;
    }
    this._clearActiveLayer(), this._activeLayerId = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, this._activeChart = {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId
    }, this._activeLayerDisposable = this._domLayerService["registerItem"]({
      id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.elementId,
      rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
      interactive: true,
      zIndex: 1,
      content: () => jsx(Or, {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557,
        chartElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.unitId
      })
    });
  }
  _clearActiveLayer() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = this._activeChart;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 = this._activeLayerDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.dispose(), this._activeLayerDisposable = null, this._activeLayerId = null, this._activeChart = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 && this._snapshotService["invalidateChart"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.chartId);
  }
};
export { Pr as BoardChartSelectionController };
