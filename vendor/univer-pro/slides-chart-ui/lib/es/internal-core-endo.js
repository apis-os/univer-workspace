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
import { An } from "./slides-chart-ui-slide-chart-uiservice.js";
import { J } from "./slides-chart-ui-slide-chart-insert.js";
import { Yn } from "./slides-chart-ui-slide-chart-context-menu.js";
import { Y } from "./slides-chart-ui-slide-chart-data-edit.js";
import { Q, X, Xn, cr, dr, lr, nr, tr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 } from "./slides-chart-ui-slides-chart-uiplugin.js";
import { Qn } from "./slides-chart-ui-slide-chart-uicontroller.js";
import { G } from "./slides-chart-ui-islide-chart-uiservice.js";
import { Z } from "./slides-chart-ui-slide-chart-render.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359 } from "./slides-chart-ui-slide-chart-object-adaptor.js";
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.getFocusDrawings();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.length !== 1) return null;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.subUnitId)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.drawingId];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.element["type"] !== PageElementTypeEnum.Chart ? null : {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.subUnitId,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.drawingId
  };
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162) {
  "@babel/helpers - typeof";

  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212;
  }, V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162);
}
function On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165) {
  if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165 || "default");
    if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461164);
}
function kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 = On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172, "string");
  return V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173 + "";
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 = kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176;
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182);
  };
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191;
}
An = W([U(0, Inject(SlideChartModelService)), U(1, ICommandService), U(2, Inject(SlideChartResourceService)), U(3, Inject(ISlideDrawingService)), U(4, Inject(ChartViewStateRegistry))], An);
J = W([U(0, IUniverInstanceService), U(1, ICommandService), U(2, ISlideDrawingStateService)], J);
Yn = W([U(0, IMenuManagerService)], Yn);
Y = W([U(0, ICommandService), U(1, Inject(SlideChartResourceService))], Y);
X = W([U(0, Inject(ISlideDrawingService)), U(1, Inject(SlideChartModelService)), U(2, Inject(Xn)), U(3, IUniverInstanceService), U(4, IRenderManagerService)], X);
Qn = W([U(0, Inject(ISidebarService)), U(1, Inject(IDialogService)), U(2, Inject(ISlideDrawingService)), U(3, Inject(Y)), U(4, Inject(X)), U(5, G), U(6, Inject(LocaleService)), U(7, ICommandService)], Qn);
var var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = "@univerjs-pro/slides-chart-ui",
  er = "1.0.0-insiders.20260907-70fc579";
tr = W([U(0, Inject(ComponentManager))], tr);
nr = W([U(1, Inject(SlideHitTestService)), U(2, Inject(SlideChartModelService)), U(3, ICommandService)], nr);
function rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341.color && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341.width > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341.lineStrokeType !== ShapeLineTypeEnum.NoLine);
}
Z = W([U(0, Inject(LocaleService)), U(1, Inject(ChartThemeService)), U(2, IChartRenderModelManagerService)], Z);
Q = W([U(0, IRenderManagerService), U(1, Inject(LocaleService)), U(2, Inject(SlideChartModelService)), U(3, Inject(Z)), U(4, Inject(Xn))], Q);
cr = W([U(0, Inject(SlideChartModelService)), U(1, Inject(X)), U(2, Inject(Z)), U(3, Inject(Q)), U(4, Inject(SlideCanvasPopManagerService)), U(5, G), U(6, Inject(ChartElementFloatMenuAdapterRegistry)), U(7, ICommandService), U(8, IUniverInstanceService), U(9, Inject(Injector))], cr);
lr = W([U(0, Inject(ChartImageExportService)), U(1, Inject(Z))], lr);
dr = W([U(0, Inject(SlideChartResourceService))], dr);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359 = W([U(0, Inject(Q))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359);
H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, "type", UniverInstanceType.UNIVER_SLIDE), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, "pluginName", "UniverSlideChartUIPlugin"), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, "packageName", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, "version", er), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 = W([DependentOn(UniverLicensePlugin, UniverRenderEnginePlugin, UniverSlidesChartPlugin, UniverChartUIPlugin, UniverSlidesPlugin, UniverSlidesUIPlugin), U(1, Inject(Injector)), U(2, IConfigService), U(3, IRenderManagerService), U(4, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360);
export { bn, H, rr };
