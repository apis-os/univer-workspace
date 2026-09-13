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
import { H, rr } from "./internal-core-endo.js";
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353) {
    case ShapeLineDashEnum.RoundDot:
      return [1, 2];
    case ShapeLineDashEnum.SquareDot:
      return [1, 3];
    case ShapeLineDashEnum.Dash:
      return [4, 2];
    case ShapeLineDashEnum.DashDot:
      return [4, 2, 1, 2];
    case ShapeLineDashEnum.LongDash:
      return [8, 2];
    case ShapeLineDashEnum.LongDashDot:
      return [8, 2, 1, 2];
    case ShapeLineDashEnum.LongDashDotDot:
      return [8, 2, 1, 2, 1, 2];
    default:
      return [];
  }
}
function mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355) {
    case ShapeLineCapEnum.Round:
      return "round";
    case ShapeLineCapEnum.Square:
      return "square";
    default:
      return "butt";
  }
}
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357) {
    case ShapeLineJoinEnum.Round:
      return "round";
    case ShapeLineJoinEnum.Bevel:
      return "bevel";
    default:
      return "miter";
  }
}
var gr = class extends SlideImageObject {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051), H(this, "_chartStroke", undefined), H(this, "_hideImage", false), this._attachNativeLoadHandlers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.success, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.fail);
  }
  setChartStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054) {
    this._chartStroke = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054, this.makeDirty(true);
  }
  setImageHidden(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056) {
    this._hideImage !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 && (this._hideImage = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056, this.makeDirty(true), this._notifyScene());
  }
  changeChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058) {
    this._native ?? (this._native = document.createElement("img"), this._native["crossOrigin"] = "anonymous"), this._attachNativeLoadHandlers(), this._native["src"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058;
  }
  _draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063) {
    this._hideImage || super._draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063), this._drawChartStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 ?? this.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 ?? this.height);
  }
  _drawChartStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 = this._chartStroke,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.width) ?? 0;
    if (!rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071)) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.lineWidth = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.lineCap = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.capType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.lineJoin = hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.lineJoinType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.setLineDash(pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.dashType)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.globalAlpha *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.opacity ?? 1;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 / 2;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.rect(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32), Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068.restore();
  }
  _notifyScene() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 = this.getEngine()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076.activeScene;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.render(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081) {
    this._native && (this._native["onload"] = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080(), this._notifyScene();
    }, this._native["onerror"] = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081(), this._notifyScene();
    });
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359 = class extends ObjectAdaptor {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084) {
    super(), this._hostProvider = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, H(this, "zIndex", 55);
  }
  check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.element["type"] === PageElementTypeEnum.Chart;
  }
  convert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.hidden || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.element["type"] !== PageElementTypeEnum.Chart) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.element,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.transform,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.width ?? 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.height ?? 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 = new gr("slide-drawing-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.unitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.subUnitId + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.drawingId, {
        url: this._hostProvider["getImageDataUrl"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId) ?? "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.pageOffsetLeft + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.pageOffsetTop + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.top ?? 0),
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.rotation ?? 0,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.flipX,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.flipY,
        skewX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.skewX,
        skewY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.skewY,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.orderIndex,
        visible: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.hidden,
        evented: true,
        forceRender: true
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.setChartStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.stroke);
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.sceneType ?? SlideSceneTypeEnum.EDIT) === SlideSceneTypeEnum.EDIT,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = this._hostProvider["registerHostContext"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088.drawingId,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId,
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37,
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088,
        stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.stroke,
        imageObject: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092,
        sceneType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.sceneType,
        requestRender: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461089.requestRender
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.setImageHidden(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && this._hostProvider["isDomReady"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 = this._hostProvider["imageUpdated$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.setImageHidden(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && this._hostProvider["isDomReady"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId));
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095 = this._hostProvider["domReadyChanged$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.setImageHidden(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && this._hostProvider["isDomReady"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.chartId));
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.onDispose$["subscribeEvent"](() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095.unsubscribe();
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092;
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359 as SlideChartObjectAdaptor };
