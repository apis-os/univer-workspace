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
import { H } from "./internal-core-endo.js";
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, this._chartThemeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, this._renderModelManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, H(this, "_chartInstanceMap", new Map()), H(this, "_chartEventHandlers", new Map()), H(this, "_chartEventSubscriptions", new Map()), H(this, "_chartElementEditMode", new Map()), H(this, "_lastImageDataUrlMap", new Map()), H(this, "_lastRenderInputMap", new Map());
  }
  createChartInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 ? this._renderModelManager["createChartInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582, this._createChartRenderInstanceContext()) : this._renderModelManager["createChartInstance"]();
  }
  async render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585) {
    let {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
      } = this.createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.getRect(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 = this._getOrCreateChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.chartId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.mode);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.render({
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.chartId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 && this._lastRenderInputMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.chartId, {
      chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
      chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587,
      rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.mode === ChartRenderMode.Image && "getDataUrl" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.getDataUrl() : undefined;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 && this._lastImageDataUrlMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.chartId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590);
  }
  async renderDataUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = this._lastRenderInputMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.chartId),
      {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603
      } = this.createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.getRect(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = this._getOrCreateChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.chartId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.mode);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.chartId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.renderTransition ? await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.renderTransition({
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.chartId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.chartConfig,
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.chartStyle
    }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12, {
      duration: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600
    }) : await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.render(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 && this._lastRenderInputMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.chartId, {
      chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
      chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603,
      rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604
    });
  }
  setElementEditMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 ? this._chartElementEditMode["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, true) : this._chartElementEditMode["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = this._chartInstanceMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.setElementEditMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615);
  }
  on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = this._chartEventHandlers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = new Map(), this._chartEventHandlers["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625 = this._chartInstanceMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625 && this._bindChartEventHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622), {
      dispose: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = this._chartEventHandlers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622), this._disposeChartEventSubscription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
      }
    };
  }
  disposeChartInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
    this._lastRenderInputMap["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632), this._disposeChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
  }
  async exportImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 = this._lastRenderInputMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636) return (await this._renderModelManager["exportImage"]({
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.chartConfig,
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.chartStyle,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.rect["width"],
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.rect["height"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635)).dataUrl;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.format) !== ChartImageExportFormat.SVG) return this._lastImageDataUrlMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634);
  }
  createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.model["config"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) throw Error("Chart " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.chartId + " has no render config.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = this._localeService["getDirection"]();
    return {
      chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641,
      chartStyle: resolveChartRuntimeStyle({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.model["style"],
        runtime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.model["getRuntimeContext"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642),
        direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.type)
    };
  }
  createRenderSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648) {
    let {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650
      } = this.createRenderInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651.stylizeSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651.toSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650), {
        chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649,
        chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650,
        chartInstance: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647),
      chartConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649,
      chartStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650,
      hostStyle: this.getHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650)
    };
  }
  getHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658) {
    return resolveDefaultChartHostFrameStyle({
      style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658,
      getRenderColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => this._chartThemeService["getRenderColor"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654)
    });
  }
  applyHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.style["border"] = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.border) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.color && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.border["width"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.border["width"] + "px solid " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.border["color"] : "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.style["backgroundColor"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.fill ?? "transparent", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.style["borderRadius"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.radius ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.radius + "px" : "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.style["overflow"] = "hidden", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.style["boxSizing"] = "border-box";
  }
  _getOrCreateChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 = this._chartInstanceMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668.mode) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 && this._disposeChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 = this._renderModelManager["createChartInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, this._createChartRenderInstanceContext());
    return this._chartInstanceMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669.setElementEditMode(this._chartElementEditMode["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666) === true), this._bindChartEventHandlers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669;
  }
  _disposeChartRenderInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = this._chartInstanceMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 && (this._disposeChartEventSubscriptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675.dispose(), this._chartInstanceMap["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674));
  }
  _bindChartEventHandlers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 = this._chartEventHandlers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => this._bindChartEventHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466));
    });
  }
  _bindChartEventHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 = this._chartEventSubscriptions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 = new Map(), this._chartEventSubscriptions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 = new Map(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689)), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687));
  }
  _disposeChartEventSubscription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 = this._chartEventSubscriptions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698);
  }
  _disposeChartEventSubscriptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 = this._chartEventSubscriptions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.dispose()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.clear();
    }), this._chartEventSubscriptions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708);
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661
      }) => this.getHostStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661),
      resolveRenderBackgroundColor: ({
        hostStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662
      }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.fill,
      prepareSpec: ({
        mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663,
        spec: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664
      }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 === ChartRenderMode.Image ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664,
        animation: false,
        tooltip: {
          show: false
        }
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664
    };
  }
  dispose() {
    Array.from(this._chartInstanceMap["keys"]()).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => this.disposeChartInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665)), this._chartEventHandlers["clear"](), this._chartElementEditMode["clear"](), this._lastImageDataUrlMap["clear"](), this._lastRenderInputMap["clear"](), super.dispose();
  }
};
export { Z as SlideChartRenderService };
