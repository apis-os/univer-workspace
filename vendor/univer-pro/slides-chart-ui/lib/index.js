import { CommandType as var_core_value_sig6643, DependentOn as var_core_value_sig4124, Disposable as var_core_value_sigBF1C, DisposableCollection as var_core_value_sigEEEF, ICommandService as var_core_value_sig9A01, IConfigService as var_core_value_sig674F, IUniverInstanceService as var_core_value_sigC8F6, Inject as var_core_value_sig8A26, Injector as var_core_value_sigD073, LocaleService as var_core_value_sigF631, Plugin as var_core_value_sig2278, RxDisposable as var_core_value_sig7053, Tools as var_core_value_sig52F1, UniverInstanceType as var_core_value_sig1E74, createIdentifier as var_core_value_sig1E84, generateRandomId as var_core_value_sig133B, merge as var_core_value_sig69B8, toDisposable as var_core_value_sig983D, touchDependencies as var_core_value_sig9A03 } from "@univerjs/core";
import { ISlideDrawingService as var_core_value_sig3363, PageElementTypeEnum as var_core_value_sigF64A, PageTypeEnum as var_core_value_sig25EC, SlideSceneTypeEnum as var_core_value_sigA790, UniverSlidesPlugin as var_core_value_sig9A5E, UpdateSlideDrawingCommand as var_core_value_sig01B9, getSlideCommandTarget as var_core_value_sigD6A9 } from "@univerjs-pro/slides";
import { CHART_DOM_HOST_Z_INDEX as var_core_value_sig0FCF, CHART_ELEMENT_FLOAT_MENU_COMPONENT as var_core_value_sigCF96, CHART_ELEMENT_FLOAT_MENU_OFFSET as var_core_value_sigC4E9, CHART_HOST_BORDER_RADIUS as var_core_value_sigF612, CHART_TYPE_CATALOG as var_core_value_sigAA6C, ChartAxisLineVisibilityField as var_core_value_sig8BFA, ChartColorField as var_core_value_sig236B, ChartCommonDataMappingSection as var_core_value_sig1951, ChartEditBlockTitle as var_core_value_sigFEA0, ChartEditPanel as var_core_value_sig931A, ChartEditPanelSection as var_core_value_sigEE7D, ChartEditPanelTab as var_core_value_sig3585, ChartEditPanelTabs as var_core_value_sig31A8, ChartEditorCapability as var_core_value_sigA4DA, ChartEditorProvider as var_core_value_sig6FC0, ChartElementFloatMenuAdapterRegistry as var_core_value_sig6217, ChartGradientFillField as var_core_value_sigB805, ChartGridlineVisibilityField as var_core_value_sig4FAE, ChartHostAdapter as var_core_value_sig1FCC, ChartImageExportService as var_core_value_sigB7F9, ChartIndicatorLineColorField as var_core_value_sigB1A2, ChartInlineTableEditor as var_core_value_sig526D, ChartLegendPositionField as var_core_value_sigBDB5, ChartLegendRoot as var_core_value_sig59CE, ChartLegendWrapField as var_core_value_sig3AD7, ChartMainTitleFields as var_core_value_sig04E4, ChartNumberFormatTextField as var_core_value_sigD8F0, ChartParetoSeriesSection as var_core_value_sig1475, ChartPieStyleSection as var_core_value_sig08B7, ChartReferencedDataSourceEditor as var_core_value_sig2008, ChartSectionAccordion as var_core_value_sig496B, ChartSectionAccordionContent as var_core_value_sig7161, ChartSectionAccordionItem as var_core_value_sig2AB8, ChartSectionAccordionTrigger as var_core_value_sig3FCF, ChartSeriesSection as var_core_value_sig675A, ChartStackField as var_core_value_sig837F, ChartStyleSection as var_core_value_sig9D6E, ChartThemeField as var_core_value_sigB205, ChartTypeField as var_core_value_sigBF78, ChartTypeSpecificDataSection as var_core_value_sig8AF3, ChartTypeSpecificSetupSection as var_core_value_sigA0CC, ChartTypeSpecificStyleSection as var_core_value_sigB3A1, ChartUIService as var_core_value_sig1FB9, ChartViewStateRegistry as var_core_value_sig53A9, ChartWaterfallSetupFields as var_core_value_sigDACD, ChartWaterfallStyleSection as var_core_value_sig691E, ChartWordCloudStyleSection as var_core_value_sigD6D6, DEFAULT_CHART_AXIS_VALUES as var_core_value_sig0347, DEFAULT_CHART_INDICATOR_LINE_VALUES as var_core_value_sig52A3, DEFAULT_CHART_LEGEND_VALUES as var_core_value_sigAD91, DEFAULT_CHART_PARETO_VALUES as var_core_value_sigF64E, DEFAULT_CHART_PIE_VALUES as var_core_value_sig9B3D, DEFAULT_CHART_SERIES_VALUES as var_core_value_sigB217, DEFAULT_CHART_STYLE_VALUES as var_core_value_sig1FE6, DEFAULT_CHART_TITLE_VALUES as var_core_value_sig2471, DEFAULT_CHART_WATERFALL_SETUP_VALUES as var_core_value_sigD1FC, DEFAULT_CHART_WATERFALL_STYLE_VALUES as var_core_value_sigE2F9, DEFAULT_CHART_WORD_CLOUD_VALUES as var_core_value_sigD689, InlineChartCreationIssueCode as var_core_value_sig7AE3, MIN_CHART_HOST_DIMENSION as var_core_value_sig1EB3, UniverChartUIPlugin as var_core_value_sigE120, buildChartTypeSelectOptions as var_core_value_sigD6E7, chartTypeSupportsCapability as var_core_value_sig3669, compactInlineTableValues as var_core_value_sig5CBC, createChartElementFloatMenuAdapter as var_core_value_sig20BE, createChartInlineStarterData as var_core_value_sig6BD0, getChartInlineTableMinColumns as var_core_value_sig8C15, resolveChartEditPanelRoute as var_core_value_sig6DF7, resolveChartElementSelection as var_core_value_sigB411, tryBuildInlineChartCreationPlan as var_core_value_sigA81B, tryPrepareInlineChartData as var_core_value_sigFE8D, useChartEditorChartType as var_core_value_sig8595, useChartEditorHasRightAxis as var_core_value_sigF8DE } from "@univerjs-pro/chart-ui";
import { CHART_DATA_UPDATE_ANIMATION_DURATION as var_core_value_sigFE76, ChartDataSourceRuntimeStatus as var_core_value_sig84C8, ChartImageExportFormat as var_core_value_sig80C0, ChartRenderMode as var_core_value_sig22B4, ChartThemeService as var_core_value_sigBB37, ChartTypeBits as var_core_value_sig0C51, DataUrlImageChartHost as var_core_value_sigADA4, IChartRenderModelManagerService as var_core_value_sig0E48, chartBitsUtils as var_core_value_sig495B, isInlineChartDataSource as var_core_value_sig310C, isReferencedChartDataSource as var_core_value_sig759E, parseInlineChartTable as var_core_value_sig6C80, resolveChartRuntimeStyle as var_core_value_sig6B99, resolveDefaultChartHostFrameStyle as var_core_value_sig6ADC } from "@univerjs-pro/engine-chart";
import { Button as var_core_value_sig41AD, Select as var_core_value_sigDBC2 } from "@univerjs/design";
import { ComponentManager as var_core_value_sig7739, ContextMenuGroup as var_core_value_sig4040, IDialogService as var_core_value_sig1AAA, IMenuManagerService as var_core_value_sig58DB, ISidebarService as var_core_value_sig4840, MenuItemType as var_core_value_sigB76D, useDependency as var_core_value_sig1015, useObservable as var_core_value_sig6223 } from "@univerjs/ui";
import { useEffect as var_core_value_sigC6B6, useMemo as var_core_value_sig498A, useState as var_core_value_sigEF45 } from "react";
import { jsx as var_core_value_sig36FE, jsxs as var_core_value_sig3AF5 } from "react/jsx-runtime";
import { ChangeSlideChartDataSourceCommand as var_core_value_sig14E6, DEFAULT_SLIDE_CHART_STROKE as var_core_value_sig8690, DEFAULT_SLIDE_CHART_VALUES as var_core_value_sigDF29, InsertSlideChartCommand as var_core_value_sigC0F8, RemoveSlideChartDataSourceMutation as var_core_value_sig3C75, RemoveSlideChartSnapshotMutation as var_core_value_sig992D, SetSlideChartDataSourceMutation as var_core_value_sigE4E4, SetSlideChartSnapshotMutation as var_core_value_sigA4B0, SlideChartConfigAdapter as var_core_value_sig5F50, SlideChartModelService as var_core_value_sig4494, SlideChartResourceService as var_core_value_sigFFAF, UniverSlidesChartPlugin as var_core_value_sig478B, UpdateSlideChartConfigCommand as var_core_value_sig1E21 } from "@univerjs-pro/slides-chart";
import { BehaviorSubject as var_core_value_sig9DBF, Observable as var_core_value_sig36CC, Subject as var_core_value_sigA568, auditTime as var_core_value_sigD22D, combineLatest as var_core_value_sig85D5, skip as var_core_value_sig5D2E, takeUntil as var_core_value_sig7221 } from "rxjs";
import { ISlideClipboardResourceAdapterService as var_core_value_sig0A5A, ISlideDrawingStateService as var_core_value_sigE6D6, ObjectAdaptor as var_core_value_sig8507, SLIDE_MAIN_VIEWPORT_KEY as var_core_value_sig8A7F, SlideCanvasPopManagerService as var_core_value_sig9E81, SlideHitTestService as var_core_value_sig8295, SlideImageObject as var_core_value_sigA975, SlideObjectAdaptorRegistryService as var_core_value_sig1263, SlidePlaceholderActionOperation as var_core_value_sig457C, UniverSlidesUIPlugin as var_core_value_sigA4E6, buildDrawingOKey as var_core_value_sig934F } from "@univerjs-pro/slides-ui";
import { IRenderManagerService as var_core_value_sig74A7, UniverRenderEnginePlugin as var_core_value_sig3685, pxToNum as var_core_value_sigC621 } from "@univerjs/engine-render";
import { UniverLicensePlugin as var_core_value_sig86D7 } from "@univerjs-pro/license";
import { ShapeLineCapEnum as var_core_value_sig431B, ShapeLineDashEnum as var_core_value_sig5C7C, ShapeLineJoinEnum as var_core_value_sig87E2, ShapeLineTypeEnum as var_core_value_sig2E04 } from "@univerjs-pro/engine-shape";
function bn(var_core_value_sig6C4A) {
  let var_core_value_sig73D9 = var_core_value_sig6C4A.get(var_core_value_sig3363),
    var_core_value_sigEAF8 = var_core_value_sig73D9.getFocusDrawings();
  if (var_core_value_sigEAF8.length !== 1) return null;
  let [var_core_value_sig0455] = var_core_value_sigEAF8;
  if (!var_core_value_sig0455) return null;
  let var_core_value_sig737C = var_core_value_sig73D9.getDrawingData(var_core_value_sig0455.unitId, var_core_value_sig0455.subUnitId)[var_core_value_sig0455.drawingId];
  return !var_core_value_sig737C || var_core_value_sig737C.element["type"] !== var_core_value_sigF64A.Chart ? null : {
    unitId: var_core_value_sig0455.unitId,
    subUnitId: var_core_value_sig0455.subUnitId,
    drawingId: var_core_value_sig0455.drawingId
  };
}
const B = {
    id: "slide.operation.open-slide-chart-panel",
    type: var_core_value_sig6643.OPERATION,
    handler() {
      return true;
    }
  },
  xn = {
    id: "slide.operation.close-slide-chart-panel",
    type: var_core_value_sig6643.OPERATION,
    handler() {
      return true;
    }
  },
  Sn = {
    id: "slide.operation.open-slide-chart-data-editor",
    type: var_core_value_sig6643.OPERATION,
    handler() {
      return true;
    }
  },
  Cn = {
    id: "slide.operation.contextmenu.open-chart-panel",
    type: var_core_value_sig6643.OPERATION,
    handler(var_core_value_sig5AF5) {
      let var_core_value_sig9DE4 = bn(var_core_value_sig5AF5);
      return var_core_value_sig9DE4 ? var_core_value_sig5AF5.get(var_core_value_sig9A01).executeCommand(B.id, var_core_value_sig9DE4) : false;
    }
  },
  wn = "slide-chart.data-editor",
  Tn = "slide-chart.dialog.data-editor";
let En = function (var_core_value_sig77FA) {
  return var_core_value_sig77FA.SHARED = "shared", var_core_value_sig77FA.DUPLICATE = "duplicate", var_core_value_sig77FA;
}({});
function Dn(var_core_value_sigA4A7) {
  let var_core_value_sigA4DF = var_core_value_sig1015(var_core_value_sigF631),
    {
      values: var_core_value_sigCC9D,
      onCancel: var_core_value_sig90F5,
      onSubmit: var_core_value_sigD2BA
    } = var_core_value_sigA4A7,
    [var_core_value_sigCD3A, var_core_value_sig519D] = var_core_value_sigEF45(() => var_core_value_sig759E(var_core_value_sigA4A7.dataSource) ? "referenced" : "inline"),
    [var_core_value_sigC7E7, var_core_value_sig6E1C] = var_core_value_sigEF45(null),
    [var_core_value_sigFABC, var_core_value_sig413D] = var_core_value_sigEF45(() => var_core_value_sigCC9D.map(var_core_value_sigFBFA => [...var_core_value_sigFBFA])),
    [var_core_value_sig5BCE, var_core_value_sig8EF0] = var_core_value_sigEF45(null),
    var_core_value_sig78AC = var_core_value_sig1896 => {
      let var_core_value_sig0285 = var_core_value_sig5CBC(var_core_value_sigFABC);
      if (var_core_value_sig0285.length === 0) {
        var_core_value_sig8EF0(var_core_value_sigA4DF.t("slides-chart-ui.common.tableDataEmpty"));
        return;
      }
      var_core_value_sig8EF0(null), var_core_value_sigD2BA(var_core_value_sig0285, var_core_value_sig1896);
    };
  return var_core_value_sig3AF5("div", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4 univer-p-1",
    children: [var_core_value_sig36FE("div", {
      className: "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
      children: var_core_value_sig36FE(var_core_value_sig2008, {
        mode: var_core_value_sigCD3A,
        initialSource: var_core_value_sig759E(var_core_value_sigA4A7.dataSource) ? var_core_value_sigA4A7.dataSource["source"] : undefined,
        inlineContent: var_core_value_sig36FE(var_core_value_sig526D, {
          values: var_core_value_sigFABC,
          parsePastedText: var_core_value_sig6C80,
          onChange: var_core_value_sig413D
        }),
        onModeChange: var_core_value_sig777D => {
          var_core_value_sig519D(var_core_value_sig777D), var_core_value_sig6E1C(null);
        },
        onPreviewChange: (var_core_value_sig3F4C, var_core_value_sigD65A) => var_core_value_sig6E1C(var_core_value_sig3F4C && var_core_value_sigD65A.status === var_core_value_sig84C8.READY ? {
          source: var_core_value_sig3F4C
        } : null)
      })
    }), var_core_value_sig5BCE && var_core_value_sig36FE("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_core_value_sig5BCE
    }), var_core_value_sig3AF5("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
      children: [var_core_value_sig90F5 && var_core_value_sig36FE(var_core_value_sig41AD, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sig90F5,
        children: var_core_value_sigA4DF.t("slides-chart-ui.common.cancel")
      }), var_core_value_sig36FE(var_core_value_sig41AD, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sigCD3A === "referenced" && !var_core_value_sigC7E7,
        onClick: () => {
          var var_core_value_sig5A13;
          return var_core_value_sigCD3A === "referenced" && var_core_value_sigC7E7 ? (var_core_value_sig5A13 = var_core_value_sigA4A7.onDataSourceSubmit) == null ? undefined : var_core_value_sig5A13.call(var_core_value_sigA4A7, var_core_value_sigC7E7) : var_core_value_sig78AC("shared");
        },
        children: var_core_value_sigA4DF.t("slides-chart-ui.common.apply")
      })]
    })]
  });
}
function V(var_core_value_sig4CEF) {
  "@babel/helpers - typeof";

  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF593) {
    return typeof var_core_value_sigF593;
  } : function (var_core_value_sig3607) {
    return var_core_value_sig3607 && typeof Symbol == "function" && var_core_value_sig3607.constructor === Symbol && var_core_value_sig3607 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig3607;
  }, V(var_core_value_sig4CEF);
}
function On(var_core_value_sigD57D, var_core_value_sig2CC7) {
  if (V(var_core_value_sigD57D) != "object" || !var_core_value_sigD57D) return var_core_value_sigD57D;
  var var_core_value_sig4784 = var_core_value_sigD57D[Symbol.toPrimitive];
  if (var_core_value_sig4784 !== undefined) {
    var var_core_value_sigC39E = var_core_value_sig4784.call(var_core_value_sigD57D, var_core_value_sig2CC7 || "default");
    if (V(var_core_value_sigC39E) != "object") return var_core_value_sigC39E;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig2CC7 === "string" ? String : Number)(var_core_value_sigD57D);
}
function kn(var_core_value_sig16C7) {
  var var_core_value_sig7481 = On(var_core_value_sig16C7, "string");
  return V(var_core_value_sig7481) == "symbol" ? var_core_value_sig7481 : var_core_value_sig7481 + "";
}
function H(var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3) {
  return (var_core_value_sig77D8 = kn(var_core_value_sig77D8)) in var_core_value_sig08A3 ? Object.defineProperty(var_core_value_sig08A3, var_core_value_sig77D8, {
    value: var_core_value_sig78A3,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig08A3[var_core_value_sig77D8] = var_core_value_sig78A3, var_core_value_sig08A3;
}
function U(var_core_value_sig649B, var_core_value_sig6256) {
  return function (var_core_value_sigB512, var_core_value_sigF2E6) {
    var_core_value_sig6256(var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig649B);
  };
}
function W(var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE) {
  var var_core_value_sig0567 = arguments.length,
    var_core_value_sigA7F3 = var_core_value_sig0567 < 3 ? var_core_value_sigB505 : var_core_value_sig1DCE === null ? var_core_value_sig1DCE = Object.getOwnPropertyDescriptor(var_core_value_sigB505, var_core_value_sig7428) : var_core_value_sig1DCE,
    var_core_value_sigEACD;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigA7F3 = Reflect.decorate(var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE);else {
    for (var var_core_value_sig901E = var_core_value_sigE7A6.length - 1; var_core_value_sig901E >= 0; var_core_value_sig901E--) (var_core_value_sigEACD = var_core_value_sigE7A6[var_core_value_sig901E]) && (var_core_value_sigA7F3 = (var_core_value_sig0567 < 3 ? var_core_value_sigEACD(var_core_value_sigA7F3) : var_core_value_sig0567 > 3 ? var_core_value_sigEACD(var_core_value_sigB505, var_core_value_sig7428, var_core_value_sigA7F3) : var_core_value_sigEACD(var_core_value_sigB505, var_core_value_sig7428)) || var_core_value_sigA7F3);
  }
  return var_core_value_sig0567 > 3 && var_core_value_sigA7F3 && Object.defineProperty(var_core_value_sigB505, var_core_value_sig7428, var_core_value_sigA7F3), var_core_value_sigA7F3;
}
const G = var_core_value_sig1E84("slide-chart.ui.service");
let An = class extends var_core_value_sig1FB9 {
  constructor(var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68) {
    super(var_core_value_sig3E68), this._chartModelService = var_core_value_sig34C8, this._commandService = var_core_value_sigB744, this.resourceService = var_core_value_sigEAE2, this._slideDrawingService = var_core_value_sigE68A, H(this, "_activeEditChart$", new var_core_value_sig9DBF(null)), H(this, "_selectedElement$", new var_core_value_sig9DBF(null)), H(this, "_panelRoute$", new var_core_value_sig9DBF(null)), H(this, "activeEditChart$", this._activeEditChart$["asObservable"]()), H(this, "selectedElement$", this._selectedElement$["asObservable"]()), H(this, "panelRoute$", this._panelRoute$["asObservable"]());
  }
  get activeRuntimeModel() {
    return this._chartModelService["activeRuntimeModel"];
  }
  get activeRuntimeModel$() {
    return this._chartModelService["activeRuntimeModel$"];
  }
  get activeEditChart() {
    return this._activeEditChart$["getValue"]();
  }
  setActiveEditChart(var_core_value_sigF4C5) {
    this._activeEditChart$["getValue"]() !== var_core_value_sigF4C5 && this._activeEditChart$["next"](var_core_value_sigF4C5);
  }
  isElementEditModeActive(var_core_value_sig5410) {
    return this._activeEditChart$["getValue"]() === var_core_value_sig5410;
  }
  setSelectedElement(var_core_value_sig492F) {
    this._selectedElement$["next"](var_core_value_sig492F);
  }
  setPanelRoute(var_core_value_sig8EA0, var_core_value_sigA6F6) {
    this._panelRoute$["next"]({
      chartId: var_core_value_sig8EA0,
      route: var_core_value_sigA6F6
    });
  }
  clearPanelRoute() {
    this._panelRoute$["next"](null);
  }
  executeChartUpdateConfig(var_core_value_sigCDDA) {
    let var_core_value_sigE243 = this._chartModelService["activeRuntimeModel"],
      var_core_value_sig74A8 = var_core_value_sigCDDA.unitId ?? (var_core_value_sigE243 == null ? undefined : var_core_value_sigE243.unitId),
      var_core_value_sig21B2 = var_core_value_sigCDDA.chartId ?? (var_core_value_sigE243 == null ? undefined : var_core_value_sigE243.chartId);
    !var_core_value_sig74A8 || !var_core_value_sig21B2 || this._commandService["executeCommand"](var_core_value_sig1E21.id, {
      ...var_core_value_sigCDDA,
      unitId: var_core_value_sig74A8,
      chartId: var_core_value_sig21B2
    });
  }
  getDrawingBorderColor(var_core_value_sigDE08, var_core_value_sigACCB, var_core_value_sig7F33) {
    var var_core_value_sig0C53;
    let var_core_value_sigEA04 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_core_value_sigDE08,
      subUnitId: var_core_value_sigACCB,
      drawingId: var_core_value_sig7F33
    });
    if (!(!var_core_value_sigEA04 || var_core_value_sigEA04.element["type"] !== var_core_value_sigF64A.Chart)) return ((var_core_value_sig0C53 = var_core_value_sigEA04.element["stroke"]) == null ? undefined : var_core_value_sig0C53.color) ?? var_core_value_sig8690.color;
  }
  updateDrawingBorderColor(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB) {
    let var_core_value_sig3E71 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_core_value_sig7A62,
      subUnitId: var_core_value_sig8109,
      drawingId: var_core_value_sig7565
    });
    if (!var_core_value_sig3E71 || var_core_value_sig3E71.element["type"] !== var_core_value_sigF64A.Chart) return false;
    let var_core_value_sig01B3 = {
      ...var_core_value_sig8690,
      ...(var_core_value_sig3E71.element["stroke"] ?? {}),
      color: var_core_value_sigD4FB
    };
    return this._commandService["executeCommand"](var_core_value_sig01B9.id, {
      patches: [{
        unitId: var_core_value_sig7A62,
        subUnitId: var_core_value_sig8109,
        drawingId: var_core_value_sig7565,
        element: {
          ...var_core_value_sig3E71.element,
          stroke: var_core_value_sig01B3
        }
      }]
    }), true;
  }
  dispose() {
    this._activeEditChart$["complete"](), this._selectedElement$["complete"](), this._panelRoute$["complete"](), super.dispose();
  }
};
An = W([U(0, var_core_value_sig8A26(var_core_value_sig4494)), U(1, var_core_value_sig9A01), U(2, var_core_value_sig8A26(var_core_value_sigFFAF)), U(3, var_core_value_sig8A26(var_core_value_sig3363)), U(4, var_core_value_sig8A26(var_core_value_sig53A9))], An);
const K = "slide-chart.edit-panel",
  jn = "column",
  q = {
    axis: {
      ...var_core_value_sig0347,
      primaryGridLineVisible: true,
      secondaryGridLineVisible: true
    },
    indicatorLine: var_core_value_sig52A3,
    legend: var_core_value_sigAD91,
    pareto: var_core_value_sigF64E,
    pie: var_core_value_sig9B3D,
    series: var_core_value_sigB217,
    style: var_core_value_sig1FE6,
    titles: var_core_value_sig2471,
    waterfall: {
      ...var_core_value_sigD1FC,
      useSubtotal: true
    },
    waterfallStyle: var_core_value_sigE2F9,
    wordCloud: var_core_value_sigD689
  },
  Mn = [var_core_value_sig0C51.Line, var_core_value_sig0C51.Radar, var_core_value_sig0C51.WordCloud, var_core_value_sig0C51.Scatter, var_core_value_sig0C51.Relation, var_core_value_sig0C51.Sankey, var_core_value_sig0C51.Heatmap, var_core_value_sig0C51.Boxplot, var_core_value_sig0C51.Candlestick, var_core_value_sig0C51.Histogram, var_core_value_sig0C51.Treemap, var_core_value_sig0C51.Sunburst, var_core_value_sig0C51.Gauge, var_core_value_sig0C51.Chord];
function Nn(var_core_value_sigF7BB) {
  let var_core_value_sigFA38 = var_core_value_sig1015(var_core_value_sigF631);
  return var_core_value_sig3AF5("div", {
    children: [var_core_value_sig36FE(var_core_value_sigFEA0, {
      title: var_core_value_sigFA38.t("slides-chart-ui.common.data")
    }), var_core_value_sig36FE(var_core_value_sig41AD, {
      type: "button",
      variant: "default",
      className: "univer-w-full univer-justify-start",
      onClick: var_core_value_sigF7BB.onEditData,
      children: var_core_value_sigFA38.t("slides-chart-ui.common.editData")
    })]
  });
}
function Pn() {
  let var_core_value_sig102B = var_core_value_sig8595();
  return var_core_value_sig36FE(var_core_value_sigB805, {
    visible: Mn.every(var_core_value_sig7442 => !var_core_value_sig495B.baseOn(var_core_value_sig102B, var_core_value_sig7442))
  });
}
function Fn(var_core_value_sigA7DB) {
  return var_core_value_sig3AF5(var_core_value_sig2AB8, {
    id: var_core_value_sigA7DB.id,
    children: [var_core_value_sig36FE(var_core_value_sig3FCF, {
      children: var_core_value_sigA7DB.label
    }), var_core_value_sig36FE(var_core_value_sig7161, {
      children: var_core_value_sigA7DB.children
    })]
  });
}
function In(var_core_value_sig5EEE, var_core_value_sig65B4 = false) {
  let var_core_value_sigF98E = var_core_value_sig5EEE === var_core_value_sig0C51.WordCloud,
    var_core_value_sigA470 = var_core_value_sig495B.baseOn(var_core_value_sig5EEE, var_core_value_sig0C51.Bubble),
    var_core_value_sig19A1 = var_core_value_sig495B.baseOn(var_core_value_sig5EEE, var_core_value_sig0C51.Pie),
    var_core_value_sig81F7 = var_core_value_sig5EEE === var_core_value_sig0C51.Waterfall,
    var_core_value_sigBE51 = var_core_value_sig5EEE === var_core_value_sig0C51.Pareto,
    var_core_value_sigAAD1 = var_core_value_sig5EEE === var_core_value_sig0C51.Candlestick,
    var_core_value_sigBC1A = var_core_value_sig5EEE === var_core_value_sig0C51.Histogram,
    var_core_value_sig3F3A = var_core_value_sig5EEE === var_core_value_sig0C51.Treemap,
    var_core_value_sigA984 = var_core_value_sig5EEE === var_core_value_sig0C51.Sunburst,
    var_core_value_sigA504 = var_core_value_sig5EEE === var_core_value_sig0C51.Gauge,
    var_core_value_sig05FF = var_core_value_sig5EEE === var_core_value_sig0C51.Chord,
    var_core_value_sigFBF0 = [var_core_value_sigEE7D.ChartStyle, var_core_value_sigEE7D.ChartAndAxisTitles];
  return var_core_value_sigF98E && var_core_value_sigFBF0.push(var_core_value_sigEE7D.WordCloud), var_core_value_sig3669(var_core_value_sig5EEE, var_core_value_sigA4DA.GeneralSeries) && !var_core_value_sigA470 && !var_core_value_sigBE51 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Series), var_core_value_sig81F7 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.WaterfallSeries), var_core_value_sigBE51 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.ParetoBarSeries, var_core_value_sigEE7D.ParetoLineSeries), var_core_value_sig19A1 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.PieStyle), var_core_value_sigAAD1 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Candlestick), var_core_value_sigBC1A && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Histogram), var_core_value_sig3F3A && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Treemap), var_core_value_sigA984 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Sunburst), var_core_value_sigA504 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Gauge), var_core_value_sig05FF && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Chord), var_core_value_sig3669(var_core_value_sig5EEE, var_core_value_sigA4DA.Legend) && var_core_value_sigFBF0.push(var_core_value_sigEE7D.Legend), var_core_value_sig3669(var_core_value_sig5EEE, var_core_value_sigA4DA.Axes) && (var_core_value_sigFBF0.push(var_core_value_sigEE7D.HorizontalAxis, var_core_value_sigEE7D.VerticalAxis), var_core_value_sig65B4 && var_core_value_sigFBF0.push(var_core_value_sigEE7D.RightVerticalAxis), var_core_value_sigFBF0.push(var_core_value_sigEE7D.GridlinesAndTicks)), var_core_value_sig3669(var_core_value_sig5EEE, var_core_value_sigA4DA.IndicatorLine) && var_core_value_sigFBF0.push(var_core_value_sigEE7D.IndicatorLine), var_core_value_sigFBF0;
}
function Ln(var_core_value_sig2F95) {
  var var_core_value_sigF0E1, var_core_value_sig2D8D, var_core_value_sigE5A6;
  let var_core_value_sigF449 = var_core_value_sig1015(G),
    var_core_value_sig38C5 = var_core_value_sig1015(var_core_value_sigF631),
    var_core_value_sigC87D = var_core_value_sig8595(),
    var_core_value_sigCCDC = var_core_value_sigF8DE(),
    [var_core_value_sigC310, var_core_value_sigA4E8] = var_core_value_sigEF45(var_core_value_sig8690.color),
    [var_core_value_sigDC07, var_core_value_sig3474] = var_core_value_sigEF45(((var_core_value_sigF0E1 = var_core_value_sig2F95.route) == null ? undefined : var_core_value_sigF0E1.section) ?? var_core_value_sigEE7D.ChartStyle);
  var_core_value_sigC6B6(() => {
    !var_core_value_sig2F95.subUnitId || !var_core_value_sig2F95.drawingId || var_core_value_sigA4E8(var_core_value_sigF449.getDrawingBorderColor(var_core_value_sig2F95.unitId, var_core_value_sig2F95.subUnitId, var_core_value_sig2F95.drawingId) ?? var_core_value_sig8690.color);
  }, [var_core_value_sigF449, var_core_value_sig2F95.drawingId, var_core_value_sig2F95.subUnitId, var_core_value_sig2F95.unitId]), var_core_value_sigC6B6(() => {
    var var_core_value_sigDF87;
    (var_core_value_sigDF87 = var_core_value_sig2F95.route) != null && var_core_value_sigDF87.section && var_core_value_sig3474(var_core_value_sig2F95.route["section"]);
  }, [var_core_value_sig2F95.route]);
  let var_core_value_sig4E80 = var_core_value_sig38C5.t("slides-chart-ui.border"),
    var_core_value_sigD23B = var_core_value_sig38C5.t("slides-chart-ui.editor.defaultColor"),
    var_core_value_sig2B2A = var_core_value_sig36FE(var_core_value_sig236B, {
      emptyLabel: var_core_value_sigD23B,
      label: var_core_value_sig4E80,
      pickerFallbackValue: var_core_value_sig8690.color,
      resetLabel: var_core_value_sigD23B,
      value: var_core_value_sigC310,
      onChange: var_core_value_sig9EE0 => {
        let var_core_value_sigF051 = var_core_value_sig9EE0 ?? var_core_value_sig8690.color;
        var_core_value_sigA4E8(var_core_value_sigF051), var_core_value_sig2F95.subUnitId && var_core_value_sig2F95.drawingId && var_core_value_sigF449.updateDrawingBorderColor(var_core_value_sig2F95.unitId, var_core_value_sig2F95.subUnitId, var_core_value_sig2F95.drawingId, var_core_value_sigF051);
      }
    }),
    var_core_value_sig0B5C = var_core_value_sig36FE(var_core_value_sigB3A1, {}),
    var_core_value_sig7D42 = {
      [var_core_value_sigEE7D.Candlestick]: var_core_value_sig38C5.t("slides-chart-ui.section.candlestick"),
      [var_core_value_sigEE7D.ChartAndAxisTitles]: var_core_value_sig38C5.t("slides-chart-ui.common.chartAndAxisTitles"),
      [var_core_value_sigEE7D.ChartStyle]: var_core_value_sig38C5.t("slides-chart-ui.common.chartStyle"),
      [var_core_value_sigEE7D.Chord]: var_core_value_sig38C5.t("slides-chart-ui.section.chord"),
      [var_core_value_sigEE7D.Funnel]: var_core_value_sig38C5.t("slides-chart-ui.section.funnel"),
      [var_core_value_sigEE7D.Gauge]: var_core_value_sig38C5.t("slides-chart-ui.section.gauge"),
      [var_core_value_sigEE7D.GridlinesAndTicks]: var_core_value_sig38C5.t("slides-chart-ui.section.gridlinesAndTicks"),
      [var_core_value_sigEE7D.Heatmap]: var_core_value_sig38C5.t("slides-chart-ui.common.heatmap"),
      [var_core_value_sigEE7D.Histogram]: var_core_value_sig38C5.t("slides-chart-ui.section.histogram"),
      [var_core_value_sigEE7D.HorizontalAxis]: var_core_value_sig38C5.t("slides-chart-ui.common.horizontalAxis"),
      [var_core_value_sigEE7D.IndicatorLine]: var_core_value_sig38C5.t("slides-chart-ui.section.indicatorLine"),
      [var_core_value_sigEE7D.Legend]: var_core_value_sig38C5.t("slides-chart-ui.common.legend"),
      [var_core_value_sigEE7D.LineAndArea]: var_core_value_sig38C5.t("slides-chart-ui.section.lineAndArea"),
      [var_core_value_sigEE7D.ParetoBarSeries]: var_core_value_sig38C5.t("slides-chart-ui.section.paretoBar"),
      [var_core_value_sigEE7D.ParetoLineSeries]: var_core_value_sig38C5.t("slides-chart-ui.section.paretoLine"),
      [var_core_value_sigEE7D.PieStyle]: var_core_value_sig38C5.t("slides-chart-ui.section.pie"),
      [var_core_value_sigEE7D.Radar]: var_core_value_sig38C5.t("slides-chart-ui.section.radar"),
      [var_core_value_sigEE7D.Relation]: var_core_value_sig38C5.t("slides-chart-ui.section.relation"),
      [var_core_value_sigEE7D.RightVerticalAxis]: var_core_value_sig38C5.t("slides-chart-ui.common.rightVerticalAxis"),
      [var_core_value_sigEE7D.Series]: var_core_value_sig38C5.t("slides-chart-ui.common.series"),
      [var_core_value_sigEE7D.Sunburst]: var_core_value_sig38C5.t("slides-chart-ui.section.sunburst"),
      [var_core_value_sigEE7D.Treemap]: var_core_value_sig38C5.t("slides-chart-ui.section.treemap"),
      [var_core_value_sigEE7D.Trendline]: var_core_value_sig38C5.t("slides-chart-ui.common.trendline"),
      [var_core_value_sigEE7D.VerticalAxis]: var_core_value_sig38C5.t("slides-chart-ui.common.verticalAxis"),
      [var_core_value_sigEE7D.WaterfallSeries]: var_core_value_sig38C5.t("slides-chart-ui.section.waterfall"),
      [var_core_value_sigEE7D.WordCloud]: var_core_value_sig38C5.t("slides-chart-ui.section.wordCloud")
    },
    var_core_value_sig8FDE = {
      [var_core_value_sigEE7D.ChartStyle]: var_core_value_sig36FE(var_core_value_sig9D6E, {
        defaultValues: q.style,
        hostBorder: var_core_value_sig2B2A
      }),
      [var_core_value_sigEE7D.ChartAndAxisTitles]: var_core_value_sig36FE(var_core_value_sig04E4, {
        commitMode: "change",
        defaultValues: q.titles,
        showFont: false
      }),
      [var_core_value_sigEE7D.Series]: var_core_value_sig36FE(var_core_value_sig675A, {
        defaultValues: q.series,
        NumberFormatField: var_core_value_sigD8F0,
        selectedSeriesId: (var_core_value_sig2D8D = var_core_value_sig2F95.route) == null ? undefined : var_core_value_sig2D8D.seriesId
      }),
      [var_core_value_sigEE7D.WaterfallSeries]: var_core_value_sig36FE(var_core_value_sig691E, {
        defaultValues: q.waterfallStyle,
        NumberFormatField: var_core_value_sigD8F0,
        selectedSeriesId: (var_core_value_sigE5A6 = var_core_value_sig2F95.route) == null ? undefined : var_core_value_sigE5A6.seriesId
      }),
      [var_core_value_sigEE7D.ParetoBarSeries]: var_core_value_sig36FE(var_core_value_sig1475, {
        defaultValues: q.pareto,
        NumberFormatField: var_core_value_sigD8F0,
        showDataPointEditor: true,
        target: "barStyle"
      }),
      [var_core_value_sigEE7D.ParetoLineSeries]: var_core_value_sig36FE(var_core_value_sig1475, {
        defaultValues: q.pareto,
        NumberFormatField: var_core_value_sigD8F0,
        showDataPointEditor: true,
        target: "cumulativeLineStyle"
      }),
      [var_core_value_sigEE7D.PieStyle]: var_core_value_sig36FE(var_core_value_sig08B7, {
        defaultValues: q.pie,
        NumberFormatField: var_core_value_sigD8F0
      }),
      [var_core_value_sigEE7D.WordCloud]: var_core_value_sig36FE(var_core_value_sigD6D6, {
        defaultValues: q.wordCloud
      }),
      [var_core_value_sigEE7D.Legend]: var_core_value_sig36FE(var_core_value_sig59CE, {
        defaultValues: q.legend,
        children: var_core_value_sig3AF5("div", {
          className: "univer-flex univer-flex-col univer-gap-2",
          children: [var_core_value_sig36FE(var_core_value_sigBDB5, {}), var_core_value_sig36FE(var_core_value_sig3AD7, {})]
        })
      }),
      [var_core_value_sigEE7D.HorizontalAxis]: var_core_value_sig36FE(var_core_value_sig8BFA, {
        axis: "x",
        defaultValues: q.axis
      }),
      [var_core_value_sigEE7D.VerticalAxis]: var_core_value_sig36FE(var_core_value_sig8BFA, {
        axis: "y",
        defaultValues: q.axis
      }),
      [var_core_value_sigEE7D.RightVerticalAxis]: var_core_value_sig36FE(var_core_value_sig8BFA, {
        axis: "rightY",
        defaultValues: q.axis
      }),
      [var_core_value_sigEE7D.GridlinesAndTicks]: var_core_value_sig3AF5("div", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [var_core_value_sig36FE(var_core_value_sig4FAE, {
          axis: "x",
          defaultValues: q.axis,
          label: var_core_value_sig38C5.t("slides-chart-ui.common.horizontalAxis")
        }), var_core_value_sig36FE(var_core_value_sig4FAE, {
          axis: "y",
          defaultValues: q.axis,
          label: var_core_value_sig38C5.t("slides-chart-ui.common.verticalAxis")
        })]
      }),
      [var_core_value_sigEE7D.IndicatorLine]: var_core_value_sig36FE(var_core_value_sigB1A2, {
        defaultValues: q.indicatorLine
      }),
      [var_core_value_sigEE7D.Candlestick]: var_core_value_sig0B5C,
      [var_core_value_sigEE7D.Histogram]: var_core_value_sig0B5C,
      [var_core_value_sigEE7D.Treemap]: var_core_value_sig0B5C,
      [var_core_value_sigEE7D.Sunburst]: var_core_value_sig0B5C,
      [var_core_value_sigEE7D.Gauge]: var_core_value_sig0B5C,
      [var_core_value_sigEE7D.Chord]: var_core_value_sig0B5C
    };
  return var_core_value_sig36FE(var_core_value_sig496B, {
    value: var_core_value_sigDC07,
    onChange: var_core_value_sig3474,
    children: In(var_core_value_sigC87D, var_core_value_sigCCDC).map(var_core_value_sig0B45 => var_core_value_sig36FE(Fn, {
      id: var_core_value_sig0B45,
      label: var_core_value_sig7D42[var_core_value_sig0B45],
      children: var_core_value_sig8FDE[var_core_value_sig0B45]
    }, var_core_value_sig0B45))
  });
}
function Rn(var_core_value_sig78E6) {
  let {
      unitId: var_core_value_sig541F,
      subUnitId: var_core_value_sig417B,
      drawingId: var_core_value_sigAA90,
      chartId: var_core_value_sigE92D
    } = var_core_value_sig78E6,
    var_core_value_sig9940 = var_core_value_sig1015(var_core_value_sig4494),
    var_core_value_sig682D = var_core_value_sig1015(var_core_value_sigFFAF),
    var_core_value_sig1435 = var_core_value_sig1015(G),
    var_core_value_sig4082 = var_core_value_sig1015(var_core_value_sigF631),
    var_core_value_sigC049 = var_core_value_sig1015(var_core_value_sig9A01),
    var_core_value_sigE5C3 = var_core_value_sig1015(var_core_value_sigD073),
    var_core_value_sigCCAA = var_core_value_sig1015(var_core_value_sigC8F6),
    [var_core_value_sigF32D, var_core_value_sig9427] = var_core_value_sigEF45(var_core_value_sig3585.Data),
    var_core_value_sig21F4 = var_core_value_sig6223(var_core_value_sig1435.panelRoute$, null),
    var_core_value_sigA345 = (var_core_value_sig21F4 == null ? undefined : var_core_value_sig21F4.chartId) === var_core_value_sigE92D ? var_core_value_sig21F4.route : null;
  var_core_value_sigC6B6(() => {
    var_core_value_sig9940.setActiveChartById(var_core_value_sig541F, var_core_value_sigE92D);
  }, [var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig541F]), var_core_value_sigC6B6(() => {
    (var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.tab) === var_core_value_sig3585.Style && var_core_value_sig9427(var_core_value_sig3585.Style), (var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.tab) === var_core_value_sig3585.Data && var_core_value_sig9427(var_core_value_sig3585.Data);
  }, [var_core_value_sigA345]);
  let var_core_value_sigA468 = var_core_value_sig6223(var_core_value_sig9940.activeRuntimeModel$, var_core_value_sig9940.activeRuntimeModel),
    var_core_value_sig1561 = (var_core_value_sigA468 == null ? undefined : var_core_value_sigA468.unitId) === var_core_value_sig541F && var_core_value_sigA468.chartId === var_core_value_sigE92D,
    var_core_value_sigDF14 = var_core_value_sig498A(() => {
      if (!var_core_value_sig1561 || !var_core_value_sig417B || !var_core_value_sigAA90) return null;
      let var_core_value_sig36F8 = var_core_value_sigCCAA.getUnit(var_core_value_sig541F, var_core_value_sig1E74.UNIVER_SLIDE);
      return var_core_value_sig36F8 ? new var_core_value_sig1FCC(var_core_value_sigA468.model, new var_core_value_sig5F50({
        unitId: var_core_value_sig541F,
        subUnitId: var_core_value_sig417B,
        chartId: var_core_value_sigE92D,
        elementId: var_core_value_sigAA90,
        slideModel: var_core_value_sig36F8,
        injector: var_core_value_sigE5C3
      })) : null;
    }, [var_core_value_sigA468, var_core_value_sigE92D, var_core_value_sigAA90, var_core_value_sigE5C3, var_core_value_sig1561, var_core_value_sig417B, var_core_value_sig541F, var_core_value_sigCCAA]),
    var_core_value_sig842F = var_core_value_sig498A(() => var_core_value_sigD6E7(var_core_value_sigAA6C.map(var_core_value_sigF602 => ({
      ...var_core_value_sigF602,
      label: var_core_value_sig4082.t("slides-chart-ui.chartTypes." + var_core_value_sigF602.labelId)
    }))), [var_core_value_sig4082]);
  return !var_core_value_sig1561 || !var_core_value_sigDF14 ? null : var_core_value_sig36FE(var_core_value_sig6FC0, {
    chartUIService: var_core_value_sig1435,
    hostAdapter: var_core_value_sigDF14,
    children: var_core_value_sig3AF5("div", {
      className: "univer-flex univer-h-0 univer-min-h-full univer-w-full univer-min-w-0 univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [var_core_value_sig36FE(var_core_value_sig31A8, {
        ariaLabel: var_core_value_sig4082.t("slides-chart-ui.common.editChart"),
        className: "univer-shrink-0\x20univer-px-3",
        items: [{
          label: var_core_value_sig4082.t("slides-chart-ui.common.setup"),
          panelId: zn,
          value: var_core_value_sig3585.Data
        }, {
          label: var_core_value_sig4082.t("slides-chart-ui.common.customize"),
          panelId: Bn,
          value: var_core_value_sig3585.Style
        }],
        value: var_core_value_sigF32D,
        onChange: var_core_value_sig9427
      }), var_core_value_sigF32D === var_core_value_sig3585.Data ? var_core_value_sig36FE(var_core_value_sig931A, {
        id: zn,
        label: var_core_value_sig4082.t("slides-chart-ui.common.setup"),
        children: var_core_value_sig3AF5("div", {
          className: "univer-flex\x20univer-flex-col\x20univer-gap-3\x20univer-px-4\x20univer-pb-5",
          children: [var_core_value_sig36FE(var_core_value_sigBF78, {
            options: var_core_value_sig842F
          }), var_core_value_sig36FE(var_core_value_sigA0CC, {}), var_core_value_sig36FE(var_core_value_sigB205, {}), var_core_value_sig36FE(Pn, {}), var_core_value_sig36FE(var_core_value_sig837F, {}), var_core_value_sig36FE(Nn, {
            onEditData: () => {
              var_core_value_sigC049.executeCommand(Sn.id, {
                unitId: var_core_value_sig541F,
                chartId: var_core_value_sigE92D
              });
            }
          }), var_core_value_sig36FE(var_core_value_sig1951, {
            orientationControl: var_core_value_sig36FE(var_core_value_sig41AD, {
              size: "small",
              onClick: () => {
                var var_core_value_sig03E1;
                return var_core_value_sig1435.executeChartUpdateConfig({
                  patch: {
                    context: {
                      orient: ((var_core_value_sig03E1 = var_core_value_sig682D.getChart(var_core_value_sig541F, var_core_value_sigE92D)) == null || (var_core_value_sig03E1 = var_core_value_sig03E1.context) == null ? undefined : var_core_value_sig03E1.orient) === jn ? "row" : jn
                    }
                  }
                });
              },
              children: var_core_value_sig4082.t("slides-chart-ui.common.switchRowColumn")
            })
          }), var_core_value_sig36FE(var_core_value_sig8AF3, {}), var_core_value_sig36FE(var_core_value_sigDACD, {
            defaultValues: q.waterfall
          })]
        })
      }) : var_core_value_sig36FE(var_core_value_sig931A, {
        id: Bn,
        className: "univer-min-w-0\x20univer-overflow-x-hidden",
        label: var_core_value_sig4082.t("slides-chart-ui.common.customize"),
        children: var_core_value_sig36FE(Ln, {
          unitId: var_core_value_sig541F,
          subUnitId: var_core_value_sig417B,
          drawingId: var_core_value_sigAA90,
          route: var_core_value_sigA345
        })
      })]
    })
  });
}
const zn = "slide-chart-setup-panel",
  Bn = "slide-chart-style-panel";
let J = class {
  constructor(var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
    this._instanceService = var_core_value_sigBB57, this._commandService = var_core_value_sig7C4A, this._drawingStateService = var_core_value_sigE799;
  }
  insertChartFromText(var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB) {
    let var_core_value_sig826B = var_core_value_sig6C80(var_core_value_sigB601);
    return var_core_value_sig826B.length !== 0 && this.insertChart(var_core_value_sig826B, var_core_value_sig8B71, var_core_value_sigAEFB);
  }
  insertChart(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE = {}) {
    if (var_core_value_sigCF89.length === 0) return false;
    let var_core_value_sig9F76 = var_core_value_sigFE8D(var_core_value_sig00CB, var_core_value_sigCF89);
    if (!var_core_value_sig9F76.ok) return false;
    if (var_core_value_sig77EE.placeholderDrawing) return this._insertChartIntoPlaceholder(var_core_value_sig9F76.values, var_core_value_sig00CB, var_core_value_sig77EE.placeholderDrawing, var_core_value_sig77EE.style, var_core_value_sig77EE.dataSource);
    let var_core_value_sigB008 = var_core_value_sigD6A9(this._instanceService);
    if (!var_core_value_sigB008) return false;
    let {
        presentation: var_core_value_sig8721,
        unitId: var_core_value_sig08BA,
        subUnitId: var_core_value_sigDBB5
      } = var_core_value_sigB008,
      var_core_value_sigCFAC = var_core_value_sig8721.getSnapshot().defaultPageSize,
      var_core_value_sig237B = Math.min(520, Math.max(320, Math.round(var_core_value_sigCFAC.width * 0.56))),
      var_core_value_sigFEAB = Math.min(360, Math.max(220, Math.round(var_core_value_sigCFAC.height * 0.56))),
      var_core_value_sigE347 = Math.max(24, Math.round((var_core_value_sigCFAC.width - var_core_value_sig237B) / 2)),
      var_core_value_sig3C5B = Math.max(24, Math.round((var_core_value_sigCFAC.height - var_core_value_sigFEAB) / 2)),
      var_core_value_sig200B = var_core_value_sig133B(6),
      var_core_value_sig3863 = var_core_value_sig133B(6);
    return this._commandService["syncExecuteCommand"](var_core_value_sigC0F8.id, {
      unitId: var_core_value_sig08BA,
      subUnitId: var_core_value_sigDBB5,
      chart: {
        chartType: var_core_value_sig00CB,
        ...(var_core_value_sig77EE.style ? {
          style: var_core_value_sig77EE.style
        } : {})
      },
      dataSource: var_core_value_sig77EE.dataSource ?? {
        values: var_core_value_sig9F76.values
      },
      element: {
        id: var_core_value_sig3863,
        chartId: var_core_value_sig200B,
        transform: {
          left: var_core_value_sigE347,
          top: var_core_value_sig3C5B,
          width: var_core_value_sig237B,
          height: var_core_value_sigFEAB
        }
      }
    }) ? (this._drawingStateService["selectDrawings"]({
      unitId: var_core_value_sig08BA,
      subUnitId: var_core_value_sigDBB5
    }, [var_core_value_sig3863], var_core_value_sig3863), this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_core_value_sig08BA,
      subUnitId: var_core_value_sigDBB5,
      drawingId: var_core_value_sig3863
    }), true) : false;
  }
  _insertChartIntoPlaceholder(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937) {
    if (var_core_value_sig1BD9.element["type"] !== var_core_value_sigF64A.Placeholder) return false;
    let var_core_value_sigCAD5 = {
        chartType: var_core_value_sigC4B1,
        ...(var_core_value_sigE43E ? {
          style: var_core_value_sigE43E
        } : {})
      },
      var_core_value_sigE503 = var_core_value_sigA937 ?? {
        values: var_core_value_sigC97C
      },
      {
        unitId: var_core_value_sig48DD,
        subUnitId: var_core_value_sig5E6A,
        drawingId: var_core_value_sigB7FC,
        element: var_core_value_sig9CD9,
        sourcePageType: var_core_value_sigFD0C
      } = var_core_value_sig1BD9,
      {
        transform: var_core_value_sig849B,
        placeholder: var_core_value_sig5F1A
      } = var_core_value_sig9CD9,
      var_core_value_sigB455 = {
        id: var_core_value_sigFD0C === var_core_value_sig25EC.Slide ? var_core_value_sigB7FC : var_core_value_sig133B(6),
        transform: var_core_value_sig849B,
        placeholder: var_core_value_sig5F1A
      },
      var_core_value_sig5241 = var_core_value_sig1BD9.sourcePageType === var_core_value_sig25EC.Slide ? var_core_value_sigB7FC : undefined;
    if (!this._commandService["syncExecuteCommand"](var_core_value_sigC0F8.id, {
      unitId: var_core_value_sig48DD,
      subUnitId: var_core_value_sig5E6A,
      chart: var_core_value_sigCAD5,
      dataSource: var_core_value_sigE503,
      element: var_core_value_sigB455,
      replaceElementId: var_core_value_sig5241
    })) return false;
    let var_core_value_sigC6E5 = var_core_value_sig5241 ?? var_core_value_sigB455.id;
    return this._drawingStateService["selectDrawings"]({
      unitId: var_core_value_sig48DD,
      subUnitId: var_core_value_sig5E6A
    }, [var_core_value_sigC6E5], var_core_value_sigC6E5), this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_core_value_sig1BD9.unitId,
      subUnitId: var_core_value_sig1BD9.subUnitId,
      drawingId: var_core_value_sigC6E5
    }), true;
  }
};
J = W([U(0, var_core_value_sigC8F6), U(1, var_core_value_sig9A01), U(2, var_core_value_sigE6D6)], J);
const Vn = "slide-chart.insert-panel",
  Hn = var_core_value_sigDF29.map(var_core_value_sigC4C0 => var_core_value_sigC4C0.join("\x09")).join("\x0a");
function Un(var_core_value_sig214A) {
  let var_core_value_sigCCC3 = var_core_value_sig1015(J),
    var_core_value_sig986E = var_core_value_sig1015(var_core_value_sigF631),
    {
      defaultChartType: var_core_value_sigE28B = var_core_value_sig0C51.Column,
      defaultTableText: var_core_value_sig0FD9 = Hn,
      insertOptions: var_core_value_sig537C,
      onCancel: var_core_value_sigBBBC,
      onInserted: var_core_value_sig5440
    } = var_core_value_sig214A,
    var_core_value_sig5649 = var_core_value_sig498A(() => var_core_value_sigD6E7(var_core_value_sigAA6C.map(var_core_value_sig1BBD => ({
      ...var_core_value_sig1BBD,
      label: var_core_value_sig986E.t("slides-chart-ui.chartTypes." + var_core_value_sig1BBD.labelId)
    }))), [var_core_value_sig986E]),
    [var_core_value_sigAF82, var_core_value_sig21A2] = var_core_value_sigEF45(String(var_core_value_sigE28B)),
    var_core_value_sig5C1D = var_core_value_sig5649.find(var_core_value_sigCEFB => var_core_value_sigCEFB.value === var_core_value_sigAF82),
    var_core_value_sig4CBA = (var_core_value_sig5C1D == null ? undefined : var_core_value_sig5C1D.chartType) ?? var_core_value_sigE28B,
    var_core_value_sig8E65 = var_core_value_sig1537 => var_core_value_sig6BD0(var_core_value_sig1537, {
      candlestickClose: var_core_value_sig986E.t("slides-chart-ui.candlestick.close"),
      candlestickHigh: var_core_value_sig986E.t("slides-chart-ui.candlestick.high"),
      candlestickLow: var_core_value_sig986E.t("slides-chart-ui.candlestick.low"),
      candlestickOpen: var_core_value_sig986E.t("slides-chart-ui.candlestick.open"),
      category: var_core_value_sig986E.t("slides-chart-ui.common.category"),
      chordSource: var_core_value_sig986E.t("slides-chart-ui.chord.source"),
      chordTarget: var_core_value_sig986E.t("slides-chart-ui.chord.target"),
      label: var_core_value_sig986E.t("slides-chart-ui.common.label"),
      sunburstHierarchy: var_core_value_sig986E.t("slides-chart-ui.sunburst.hierarchy"),
      value: var_core_value_sig986E.t("slides-chart-ui.common.value"),
      valueField: var_core_value_sig986E.t("slides-chart-ui.common.valueField")
    }),
    [var_core_value_sig772C, var_core_value_sigF309] = var_core_value_sigEF45(() => var_core_value_sig214A.defaultTableText === undefined ? var_core_value_sig8E65(var_core_value_sigE28B) ?? var_core_value_sig6C80(var_core_value_sig0FD9) : var_core_value_sig6C80(var_core_value_sig0FD9)),
    [var_core_value_sig44F9, var_core_value_sigE532] = var_core_value_sigEF45("inline"),
    [var_core_value_sigF381, var_core_value_sigCB92] = var_core_value_sigEF45(null),
    [var_core_value_sigC844, var_core_value_sig2ED4] = var_core_value_sigEF45([]),
    [var_core_value_sig0477, var_core_value_sig6FDF] = var_core_value_sigEF45(null),
    var_core_value_sig27C4 = {
      [var_core_value_sig7AE3.UnknownOption]: var_core_value_sig986E.t("slides-chart-ui.common.insertChartFailed"),
      [var_core_value_sig7AE3.EmptyData]: var_core_value_sig986E.t("slides-chart-ui.common.tableDataEmpty"),
      [var_core_value_sig7AE3.InvalidCandlestickData]: var_core_value_sig986E.t("slides-chart-ui.candlestick.columnsError")
    };
  return var_core_value_sig3AF5("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [var_core_value_sig3AF5("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [var_core_value_sig36FE("div", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sig986E.t("slides-chart-ui.common.chartType")
      }), var_core_value_sig36FE(var_core_value_sigDBC2, {
        className: "univer-w-full\x20!univer-min-w-0",
        value: var_core_value_sigAF82,
        options: var_core_value_sig5649,
        onChange: var_core_value_sigE4C6 => {
          var var_core_value_sig4313;
          var_core_value_sig21A2(var_core_value_sigE4C6);
          let var_core_value_sigFC87 = ((var_core_value_sig4313 = var_core_value_sig5649.find(var_core_value_sigF704 => var_core_value_sigF704.value === var_core_value_sigE4C6)) == null ? undefined : var_core_value_sig4313.chartType) ?? Number(var_core_value_sigE4C6),
            var_core_value_sig156F = var_core_value_sig8E65(var_core_value_sigFC87);
          var_core_value_sig156F && var_core_value_sigF309(var_core_value_sig156F);
        }
      })]
    }), var_core_value_sig36FE(var_core_value_sig2008, {
      mode: var_core_value_sig44F9,
      inlineContent: var_core_value_sig36FE(var_core_value_sig526D, {
        values: var_core_value_sig772C,
        minColumns: var_core_value_sig8C15(var_core_value_sig4CBA),
        parsePastedText: var_core_value_sig6C80,
        onChange: var_core_value_sigF309
      }),
      onModeChange: var_core_value_sigDD51 => {
        var_core_value_sigE532(var_core_value_sigDD51), var_core_value_sigCB92(null), var_core_value_sig2ED4([]);
      },
      onPreviewChange: (var_core_value_sigF057, var_core_value_sig72F6) => {
        var_core_value_sigF057 && var_core_value_sig72F6.status === var_core_value_sig84C8.READY && var_core_value_sig72F6.values ? (var_core_value_sigCB92({
          source: var_core_value_sigF057
        }), var_core_value_sig2ED4(var_core_value_sig72F6.values["map"](var_core_value_sig2BCF => [...var_core_value_sig2BCF]))) : (var_core_value_sigCB92(null), var_core_value_sig2ED4([]));
      }
    }), var_core_value_sig0477 && var_core_value_sig36FE("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_core_value_sig0477
    }), var_core_value_sig3AF5("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_core_value_sigBBBC && var_core_value_sig36FE(var_core_value_sig41AD, {
        type: "button",
        variant: "default",
        onClick: var_core_value_sigBBBC,
        children: var_core_value_sig986E.t("slides-chart-ui.common.cancel")
      }), var_core_value_sig36FE(var_core_value_sig41AD, {
        type: "button",
        variant: "primary",
        disabled: var_core_value_sig44F9 === "referenced" && !var_core_value_sigF381,
        onClick: () => {
          var var_core_value_sig9FBA;
          let var_core_value_sigFE01 = var_core_value_sigA81B({
            optionId: var_core_value_sigAF82,
            values: var_core_value_sig44F9 === "referenced" ? var_core_value_sigC844 : var_core_value_sig772C
          });
          if (!var_core_value_sigFE01.ok) {
            var_core_value_sig6FDF(var_core_value_sig27C4[var_core_value_sigFE01.issue["code"]]);
            return;
          }
          let var_core_value_sigA2CE = var_core_value_sig44F9 === "referenced" && var_core_value_sigF381 ? {
              ...var_core_value_sig537C,
              dataSource: var_core_value_sigF381
            } : var_core_value_sig537C,
            var_core_value_sig1975 = var_core_value_sigFE01.plan["style"] ? {
              ...var_core_value_sigA2CE,
              style: {
                ...(var_core_value_sigA2CE == null ? undefined : var_core_value_sigA2CE.style),
                pie: {
                  ...(var_core_value_sigA2CE == null || (var_core_value_sig9FBA = var_core_value_sigA2CE.style) == null ? undefined : var_core_value_sig9FBA.pie),
                  ...var_core_value_sigFE01.plan["style"].pie
                }
              }
            } : var_core_value_sigA2CE;
          if (!var_core_value_sigCCC3.insertChart(var_core_value_sigFE01.plan["values"], var_core_value_sigFE01.plan["chartType"], var_core_value_sig1975)) {
            var_core_value_sig6FDF(var_core_value_sig986E.t("slides-chart-ui.common.insertChartFailed"));
            return;
          }
          var_core_value_sig6FDF(null), var_core_value_sig5440 == null || var_core_value_sig5440();
        },
        children: var_core_value_sig986E.t("slides-chart-ui.common.insert")
      })]
    })]
  });
}
const Wn = "slides-chart-ui.config",
  Gn = {};
function Kn(var_core_value_sig3E1A) {
  let var_core_value_sig7FB0 = var_core_value_sig3E1A.get(var_core_value_sig3363);
  return new var_core_value_sig36CC(var_core_value_sig6EA1 => {
    let var_core_value_sig029F = () => var_core_value_sig6EA1.next(bn(var_core_value_sig3E1A) != null),
      var_core_value_sig3767 = var_core_value_sig7FB0.focus$["subscribe"](var_core_value_sig029F);
    return var_core_value_sig029F(), () => var_core_value_sig3767.unsubscribe();
  });
}
function qn(var_core_value_sig5215) {
  return {
    id: Cn.id,
    type: var_core_value_sigB76D.BUTTON,
    title: var_core_value_sig5215.get(var_core_value_sigF631).t("slides-chart-ui.common.editChart"),
    icon: "ShapeIcon",
    hidden$: new var_core_value_sig36CC(var_core_value_sig670B => {
      let var_core_value_sig6912 = Kn(var_core_value_sig5215).subscribe(var_core_value_sig0D69 => var_core_value_sig670B.next(!var_core_value_sig0D69));
      return () => var_core_value_sig6912.unsubscribe();
    }),
    disabled$: new var_core_value_sig36CC(var_core_value_sigE235 => {
      let var_core_value_sig7664 = Kn(var_core_value_sig5215).subscribe(var_core_value_sig480E => var_core_value_sigE235.next(!var_core_value_sig480E));
      return () => var_core_value_sig7664.unsubscribe();
    })
  };
}
const Jn = {
  "slide.contextMenu.drawing": {
    [var_core_value_sig4040.OTHERS]: {
      [Cn.id]: {
        order: 1,
        menuItemFactory: qn
      }
    }
  }
};
let Yn = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig2281) {
    super(), this._menuManagerService = var_core_value_sig2281, this._menuManagerService["appendRootMenu"](Jn);
  }
};
Yn = W([U(0, var_core_value_sig58DB)], Yn);
let Y = class {
  constructor(var_core_value_sig5E86, var_core_value_sig6998) {
    this._commandService = var_core_value_sig5E86, this._resourceService = var_core_value_sig6998;
  }
  getEditorState(var_core_value_sigF639, var_core_value_sigEAE5) {
    let var_core_value_sigE94C = this._resourceService["getChart"](var_core_value_sigF639, var_core_value_sigEAE5),
      var_core_value_sig6D47 = var_core_value_sigE94C ? this._resourceService["getDataSource"](var_core_value_sigF639, var_core_value_sigE94C.dataSourceId) : undefined;
    return !var_core_value_sigE94C || !var_core_value_sig6D47 ? null : {
      unitId: var_core_value_sigF639,
      chartId: var_core_value_sigEAE5,
      dataSourceId: var_core_value_sig6D47.id,
      dataSource: var_core_value_sig6D47,
      values: var_core_value_sig310C(var_core_value_sig6D47) ? var_core_value_sig6D47.values["map"](var_core_value_sig26DB => [...var_core_value_sig26DB]) : [],
      sharingCount: this._resourceService["getDataSourceSharingCount"](var_core_value_sigF639, var_core_value_sig6D47.id)
    };
  }
  updateDataFromText(var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5) {
    let var_core_value_sigDDD7 = var_core_value_sig6C80(var_core_value_sig6CAD);
    return var_core_value_sigDDD7.length !== 0 && this.updateData(var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sigDDD7, var_core_value_sig8CF5);
  }
  updateData(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sig210D) {
    var var_core_value_sigB4B4;
    if (!this.getEditorState(var_core_value_sigB2CE, var_core_value_sig443C) || var_core_value_sig39B1.length === 0) return false;
    let var_core_value_sigD407 = (var_core_value_sigB4B4 = this._resourceService["getChart"](var_core_value_sigB2CE, var_core_value_sig443C)) == null ? undefined : var_core_value_sigB4B4.chartType;
    if (var_core_value_sigD407 === undefined) return false;
    let var_core_value_sig63F3 = var_core_value_sigFE8D(var_core_value_sigD407, var_core_value_sig39B1);
    return var_core_value_sig63F3.ok ? this.changeDataSource(var_core_value_sigB2CE, var_core_value_sig443C, {
      values: var_core_value_sig63F3.values
    }) : false;
  }
  changeDataSource(var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig14E6.id, {
      unitId: var_core_value_sig6A71,
      chartId: var_core_value_sig3BF6,
      dataSource: var_core_value_sig38CE
    });
  }
};
Y = W([U(0, var_core_value_sig9A01), U(1, var_core_value_sig8A26(var_core_value_sigFFAF))], Y);
var Xn = class extends var_core_value_sigBF1C {
  constructor(...var_core_value_sig62B7) {
    super(...var_core_value_sig62B7), H(this, "_activeChartId", null), H(this, "_modeChanged$", new var_core_value_sigA568()), H(this, "modeChanged$", this._modeChanged$["asObservable"]());
  }
  getRenderMode(var_core_value_sig37A8) {
    return this._activeChartId === var_core_value_sig37A8 ? var_core_value_sig22B4.Dom : var_core_value_sig22B4.Image;
  }
  setActiveDomChart(var_core_value_sigA90D) {
    let var_core_value_sig7A3C = (var_core_value_sigA90D == null ? undefined : var_core_value_sigA90D.chartId) ?? null;
    if (this._activeChartId === var_core_value_sig7A3C) return;
    let var_core_value_sig0511 = this._activeChartId;
    this._activeChartId = var_core_value_sig7A3C, var_core_value_sig0511 && this._modeChanged$["next"]({
      chartId: var_core_value_sig0511,
      mode: var_core_value_sig22B4.Image
    }), var_core_value_sig7A3C && this._modeChanged$["next"]({
      chartId: var_core_value_sig7A3C,
      mode: var_core_value_sig22B4.Dom
    });
  }
  dispose() {
    this._activeChartId = null, this._modeChanged$["complete"](), super.dispose();
  }
};
let X = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A) {
    super(), this._slideDrawingService = var_core_value_sig1F44, this._modelService = var_core_value_sigCB04, this._renderModeService = var_core_value_sig947E, this._univerInstanceService = var_core_value_sig4545, this._renderManagerService = var_core_value_sigF39A, H(this, "_activeSession", null), H(this, "_activeSession$", new var_core_value_sig9DBF(null)), H(this, "activeSession$", this._activeSession$["asObservable"]()), H(this, "_subscriptions", []), H(this, "_activeSlideSubscription", null), H(this, "_transformStartSubscription", null), this._initLifecycleListeners();
  }
  getActiveSession() {
    return this._activeSession;
  }
  open(var_core_value_sigF79C) {
    let var_core_value_sig2E54 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_core_value_sigF79C.unitId,
      subUnitId: var_core_value_sigF79C.subUnitId,
      drawingId: var_core_value_sigF79C.drawingId
    });
    if (!var_core_value_sig2E54 || var_core_value_sig2E54.element["type"] !== var_core_value_sigF64A.Chart || var_core_value_sig2E54.element["chartId"] !== var_core_value_sigF79C.chartId) return false;
    let var_core_value_sig7658 = this._modelService["ensureChartModel"](var_core_value_sigF79C.unitId, var_core_value_sigF79C.chartId);
    return var_core_value_sig7658 ? (this._activeSession = var_core_value_sigF79C, this._bindActiveSlideListener(var_core_value_sigF79C), this._bindTransformStartListener(var_core_value_sigF79C), this._modelService["setActiveChartRuntime"](var_core_value_sig7658), this._renderModeService["setActiveDomChart"](var_core_value_sigF79C), this._activeSession$["next"](var_core_value_sigF79C), true) : false;
  }
  close() {
    var var_core_value_sigDCF5, var_core_value_sigC786;
    this._activeSession && (this._activeSession = null, (var_core_value_sigDCF5 = this._activeSlideSubscription) == null || var_core_value_sigDCF5.unsubscribe(), this._activeSlideSubscription = null, (var_core_value_sigC786 = this._transformStartSubscription) == null || var_core_value_sigC786.unsubscribe(), this._transformStartSubscription = null, this._modelService["setActiveChartRuntime"](null), this._renderModeService["setActiveDomChart"](null), this._activeSession$["next"](null));
  }
  isActive(var_core_value_sigC0D9) {
    var var_core_value_sigF0511;
    return ((var_core_value_sigF0511 = this._activeSession) == null ? undefined : var_core_value_sigF0511.chartId) === var_core_value_sigC0D9;
  }
  dispose() {
    var var_core_value_sig5825, var_core_value_sig4EB7;
    this.close(), (var_core_value_sig5825 = this._activeSlideSubscription) == null || var_core_value_sig5825.unsubscribe(), this._activeSlideSubscription = null, (var_core_value_sig4EB7 = this._transformStartSubscription) == null || var_core_value_sig4EB7.unsubscribe(), this._transformStartSubscription = null, this._subscriptions["forEach"](var_core_value_sigF0F9 => var_core_value_sigF0F9.dispose()), this._subscriptions["length"] = 0, this._activeSession$["complete"](), super.dispose();
  }
  _initLifecycleListeners() {
    var var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026;
    let var_core_value_sig339E = (var_core_value_sig73AF = this._slideDrawingService["remove$"]) == null ? undefined : var_core_value_sig73AF.subscribe(var_core_value_sig1A0F => {
      let var_core_value_sigFBA4 = this._activeSession;
      var_core_value_sigFBA4 && var_core_value_sig1A0F.some(var_core_value_sig7524 => var_core_value_sig7524.unitId === var_core_value_sigFBA4.unitId && var_core_value_sig7524.subUnitId === var_core_value_sigFBA4.subUnitId && var_core_value_sig7524.drawingId === var_core_value_sigFBA4.drawingId) && this.close();
    });
    var_core_value_sig339E && this._subscriptions["push"]({
      dispose: () => var_core_value_sig339E.unsubscribe()
    });
    let var_core_value_sig7550 = (var_core_value_sig548A = this._modelService["chartModelRemoved$"]) == null ? undefined : var_core_value_sig548A.subscribe(var_core_value_sig4383 => {
      let var_core_value_sig186C = this._activeSession;
      var_core_value_sig186C && var_core_value_sig4383.unitId === var_core_value_sig186C.unitId && var_core_value_sig4383.chartId === var_core_value_sig186C.chartId && this.close();
    });
    var_core_value_sig7550 && this._subscriptions["push"]({
      dispose: () => var_core_value_sig7550.unsubscribe()
    });
    let var_core_value_sig2983 = (var_core_value_sigE026 = this._univerInstanceService["focused$"]) == null ? undefined : var_core_value_sigE026.subscribe(var_core_value_sigD955 => {
      let var_core_value_sig48BD = this._activeSession;
      var_core_value_sig48BD && var_core_value_sigD955 && var_core_value_sigD955 !== var_core_value_sig48BD.unitId && this.close();
    });
    var_core_value_sig2983 && this._subscriptions["push"]({
      dispose: () => var_core_value_sig2983.unsubscribe()
    });
  }
  _bindActiveSlideListener(var_core_value_sigE1B0) {
    var var_core_value_sigD4FF;
    (var_core_value_sigD4FF = this._activeSlideSubscription) == null || var_core_value_sigD4FF.unsubscribe(), this._activeSlideSubscription = null;
    let var_core_value_sig1E5B = this._univerInstanceService["getUnit"](var_core_value_sigE1B0.unitId, var_core_value_sig1E74.UNIVER_SLIDE);
    this._activeSlideSubscription = (var_core_value_sig1E5B == null ? undefined : var_core_value_sig1E5B.pageManager["activeSlideId$"].subscribe(var_core_value_sig429F => {
      let var_core_value_sigF62A = this._activeSession;
      var_core_value_sigF62A && var_core_value_sig429F && var_core_value_sig429F !== var_core_value_sigF62A.subUnitId && this.close();
    })) ?? null;
  }
  _bindTransformStartListener(var_core_value_sigB680, var_core_value_sig1F64 = true) {
    var var_core_value_sigDD1C, var_core_value_sig2C39;
    (var_core_value_sigDD1C = this._transformStartSubscription) == null || var_core_value_sigDD1C.unsubscribe(), this._transformStartSubscription = null;
    let var_core_value_sigB7D1 = (var_core_value_sig2C39 = this._renderManagerService["getRenderUnitById"](var_core_value_sigB680.unitId)) == null ? undefined : var_core_value_sig2C39.scene["getTransformer"]();
    if (!var_core_value_sigB7D1) {
      var_core_value_sig1F64 && queueMicrotask(() => {
        let var_core_value_sig2AD8 = this._activeSession;
        (var_core_value_sig2AD8 == null ? undefined : var_core_value_sig2AD8.chartId) === var_core_value_sigB680.chartId && this._bindTransformStartListener(var_core_value_sigB680, false);
      });
      return;
    }
    let var_core_value_sig64F0 = var_core_value_sig934F(var_core_value_sigB680.unitId, var_core_value_sigB680.subUnitId, var_core_value_sigB680.drawingId);
    this._transformStartSubscription = var_core_value_sigB7D1.changeStart$["subscribe"](({
      objects: var_core_value_sig8178
    }) => {
      var_core_value_sig8178 != null && var_core_value_sig8178.has(var_core_value_sig64F0) && this.close();
    });
  }
};
X = W([U(0, var_core_value_sig8A26(var_core_value_sig3363)), U(1, var_core_value_sig8A26(var_core_value_sig4494)), U(2, var_core_value_sig8A26(Xn)), U(3, var_core_value_sigC8F6), U(4, var_core_value_sig74A7)], X);
const Zn = "min(1200px, calc(100vw - 32px))";
let Qn = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig82D4, var_core_value_sigBDE4) {
    super(), this._sidebarService = var_core_value_sig85B1, this._dialogService = var_core_value_sig3141, this._slideDrawingService = var_core_value_sig2162, this._dataEditService = var_core_value_sig2EAD, this._editSessionService = var_core_value_sig6774, this._chartUIService = var_core_value_sig340D, this._localeService = var_core_value_sig82D4, this._commandService = var_core_value_sigBDE4, H(this, "_sidebarDisposable", null), this._registerPanelOperations(), this._listenFocusChanges();
  }
  openChartPanel(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E) {
    let var_core_value_sigBBEE = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_core_value_sig7DF1,
      subUnitId: var_core_value_sigDC86,
      drawingId: var_core_value_sig0B0C
    });
    if (!var_core_value_sigBBEE || var_core_value_sigBBEE.element["type"] !== var_core_value_sigF64A.Chart) return false;
    let var_core_value_sig011D = var_core_value_sigBBEE.element["chartId"];
    return this._editSessionService["open"]({
      unitId: var_core_value_sig7DF1,
      subUnitId: var_core_value_sigDC86,
      drawingId: var_core_value_sig0B0C,
      chartId: var_core_value_sig011D
    }) ? (this._chartUIService["setActiveEditChart"](var_core_value_sig011D), var_core_value_sigA39E ? this._chartUIService["setPanelRoute"](var_core_value_sig011D, var_core_value_sigA39E) : this._chartUIService["clearPanelRoute"](), this._openPanel({
      unitId: var_core_value_sig7DF1,
      subUnitId: var_core_value_sigDC86,
      drawingId: var_core_value_sig0B0C,
      chartId: var_core_value_sig011D
    }), true) : false;
  }
  closeChartPanel() {
    this._editSessionService["close"](), this._chartUIService["setActiveEditChart"](null), this._chartUIService["setSelectedElement"](null), this._chartUIService["clearPanelRoute"](), this._sidebarDisposable = null, this._sidebarService["close"](K);
  }
  openDataEditorDialog(var_core_value_sig6167, var_core_value_sig65A1) {
    let var_core_value_sig7F19 = this._dataEditService["getEditorState"](var_core_value_sig6167, var_core_value_sig65A1);
    if (!var_core_value_sig7F19) return false;
    let var_core_value_sig7827 = null,
      var_core_value_sig652C = () => {
        var_core_value_sig7827 == null || var_core_value_sig7827.dispose(), var_core_value_sig7827 = null;
      };
    return var_core_value_sig7827 = this._dialogService["open"]({
      id: Tn,
      title: {
        title: this._localeService["t"]("slides-chart-ui.common.editData")
      },
      width: Zn,
      draggable: false,
      mask: true,
      maskClosable: false,
      children: {
        label: {
          name: wn,
          props: {
            values: var_core_value_sig7F19.values,
            dataSource: var_core_value_sig7F19.dataSource,
            sharingCount: var_core_value_sig7F19.sharingCount,
            onCancel: var_core_value_sig652C,
            onSubmit: (var_core_value_sigE9ED, var_core_value_sigB577) => {
              this._dataEditService["updateData"](var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sigE9ED, var_core_value_sigB577) && var_core_value_sig652C();
            },
            onDataSourceSubmit: var_core_value_sig9572 => {
              this._dataEditService["changeDataSource"](var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig9572) && var_core_value_sig652C();
            }
          }
        }
      },
      onClose: var_core_value_sig652C
    }), true;
  }
  openChartInsertDialogForPlaceholder(var_core_value_sig7E32) {
    if (var_core_value_sig7E32.iconKey !== "chart") return false;
    let var_core_value_sig4C07 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_core_value_sig7E32.unitId,
      subUnitId: var_core_value_sig7E32.subUnitId,
      drawingId: var_core_value_sig7E32.drawingId
    });
    if (!var_core_value_sig4C07 || var_core_value_sig4C07.element["type"] !== var_core_value_sigF64A.Placeholder) return false;
    let var_core_value_sig79AB = null,
      var_core_value_sig8E74 = () => {
        var_core_value_sig79AB == null || var_core_value_sig79AB.dispose(), var_core_value_sig79AB = null;
      };
    return var_core_value_sig79AB = this._dialogService["open"]({
      id: "slide-chart.dialog.insert-placeholder",
      title: {
        title: this._localeService["t"]("slides-chart-ui.common.editChart")
      },
      width: Zn,
      draggable: false,
      mask: true,
      maskClosable: false,
      children: {
        label: {
          name: Vn,
          props: {
            insertOptions: {
              placeholderDrawing: var_core_value_sig4C07
            },
            onCancel: var_core_value_sig8E74,
            onInserted: var_core_value_sig8E74
          }
        }
      },
      onClose: var_core_value_sig8E74
    }), true;
  }
  _registerPanelOperations() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigD873 => {
      if (var_core_value_sigD873.id === B.id) {
        let var_core_value_sig2AD0 = var_core_value_sigD873.params;
        var_core_value_sig2AD0 && this.openChartPanel(var_core_value_sig2AD0.unitId, var_core_value_sig2AD0.subUnitId, var_core_value_sig2AD0.drawingId, var_core_value_sig2AD0.route);
        return;
      }
      if (var_core_value_sigD873.id === xn.id) {
        this.closeChartPanel();
        return;
      }
      if (var_core_value_sigD873.id === Sn.id) {
        let var_core_value_sig3EEE = var_core_value_sigD873.params;
        var_core_value_sig3EEE && this.openDataEditorDialog(var_core_value_sig3EEE.unitId, var_core_value_sig3EEE.chartId);
        return;
      }
      if (var_core_value_sigD873.id === var_core_value_sig457C.id) {
        let var_core_value_sigBC46 = var_core_value_sigD873.params;
        var_core_value_sigBC46 && this.openChartInsertDialogForPlaceholder(var_core_value_sigBC46);
      }
    }));
  }
  _listenFocusChanges() {
    this.disposeWithMe(this._slideDrawingService["focus$"].subscribe(var_core_value_sigA12B => {
      var_core_value_sigA12B.length === 0 && this.closeChartPanel();
    }));
  }
  _openPanel(var_core_value_sig104C) {
    var var_core_value_sig841D;
    (var_core_value_sig841D = this._sidebarDisposable) == null || var_core_value_sig841D.dispose(), this._sidebarDisposable = this._sidebarService["open"]({
      id: K,
      header: {
        title: this._localeService["t"]("slides-chart-ui.common.editChart")
      },
      width: 388,
      children: {
        label: K,
        ...var_core_value_sig104C
      },
      onClose: () => {
        this._editSessionService["close"](), this._chartUIService["setActiveEditChart"](null), this._chartUIService["setSelectedElement"](null), this._chartUIService["clearPanelRoute"](), this._sidebarDisposable = null;
      }
    });
  }
};
Qn = W([U(0, var_core_value_sig8A26(var_core_value_sig4840)), U(1, var_core_value_sig8A26(var_core_value_sig1AAA)), U(2, var_core_value_sig8A26(var_core_value_sig3363)), U(3, var_core_value_sig8A26(Y)), U(4, var_core_value_sig8A26(X)), U(5, G), U(6, var_core_value_sig8A26(var_core_value_sigF631)), U(7, var_core_value_sig9A01)], Qn);
var $n = "@univerjs-pro/slides-chart-ui",
  er = "1.0.0-insiders.20260907-70fc579";
let tr = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig90CB) {
    super(), this._componentManager = var_core_value_sig90CB, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Vn, Un)), this.disposeWithMe(this._componentManager["register"](wn, Dn)), this.disposeWithMe(this._componentManager["register"](K, Rn));
  }
};
tr = W([U(0, var_core_value_sig8A26(var_core_value_sig7739))], tr);
let nr = class extends var_core_value_sig7053 {
  constructor(var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614, var_core_value_sig85C3) {
    super(), this._renderContext = var_core_value_sigBDF5, this._hitTestService = var_core_value_sigACC6, this._modelService = var_core_value_sig1614, this._commandService = var_core_value_sig85C3, this._init();
  }
  _init() {
    this.disposeWithMe(var_core_value_sig983D(this._hitTestService["onDoubleClick$"].pipe(var_core_value_sig7221(this.dispose$)).subscribe(var_core_value_sigF230 => {
      var_core_value_sigF230.drawing["unitId"] === this._renderContext["unitId"] && var_core_value_sigF230.drawing["element"].type === var_core_value_sigF64A.Chart && (this._modelService["activeRuntimeModel"] || this._commandService["executeCommand"](B.id, {
        unitId: var_core_value_sigF230.drawing["unitId"],
        subUnitId: var_core_value_sigF230.drawing["subUnitId"],
        drawingId: var_core_value_sigF230.drawing["drawingId"]
      }));
    })));
  }
};
nr = W([U(1, var_core_value_sig8A26(var_core_value_sig8295)), U(2, var_core_value_sig8A26(var_core_value_sig4494)), U(3, var_core_value_sig9A01)], nr);
function rr(var_core_value_sig5204) {
  return !!(var_core_value_sig5204 != null && var_core_value_sig5204.color && var_core_value_sig5204.width && var_core_value_sig5204.width > 0 && var_core_value_sig5204.lineStrokeType !== var_core_value_sig2E04.NoLine);
}
function ir(var_core_value_sig5E11, var_core_value_sig4D58) {
  if ((var_core_value_sig5E11 == null ? undefined : var_core_value_sig5E11.borderWidth) !== 0) return {
    ...var_core_value_sig8690,
    ...var_core_value_sig4D58,
    ...((var_core_value_sig5E11 == null ? undefined : var_core_value_sig5E11.borderColor) == null ? {} : {
      color: var_core_value_sig5E11.borderColor
    }),
    ...(typeof (var_core_value_sig5E11 == null ? undefined : var_core_value_sig5E11.borderWidth) == "number" && Number.isFinite(var_core_value_sig5E11.borderWidth) && var_core_value_sig5E11.borderWidth > 0 ? {
      width: var_core_value_sig5E11.borderWidth
    } : {})
  };
}
var ar = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
    super(), this.chartId = var_core_value_sigB996, this._host = var_core_value_sig4BBA, this._applyHostStyle = var_core_value_sig6201, this._getRenderRect = var_core_value_sig5151, this._markReady = var_core_value_sigB542, this._markNotReady = var_core_value_sigBB6C, H(this, "mode", var_core_value_sig22B4.Dom), H(this, "_mountNode", null), H(this, "_ready", false), this._host["style"].overflow = "hidden", this._host["style"].boxSizing = "border-box";
  }
  getRect() {
    var var_core_value_sigE2BF;
    let var_core_value_sigB8C7 = (var_core_value_sigE2BF = this._getRenderRect) == null ? undefined : var_core_value_sigE2BF.call(this);
    if (var_core_value_sigB8C7) return {
      width: Math.max(var_core_value_sig1EB3, var_core_value_sigB8C7.width),
      height: Math.max(var_core_value_sig1EB3, var_core_value_sigB8C7.height)
    };
    let var_core_value_sigA56E = this._host["getBoundingClientRect"]();
    return {
      width: Math.max(var_core_value_sig1EB3, var_core_value_sigA56E.width),
      height: Math.max(var_core_value_sig1EB3, var_core_value_sigA56E.height)
    };
  }
  setStyle(var_core_value_sig1998) {
    this._applyHostStyle(this._host, var_core_value_sig1998);
  }
  getHostElement() {
    return this._host;
  }
  async ensureMount() {
    return this._mountNode || (this._mountNode = document.createElement("div"), this._mountNode["className"] = "slide-chart-dom-mount", this._mountNode["style"].position = "absolute", this._mountNode["style"].left = "0", this._mountNode["style"].top = "0", this._mountNode["style"].border = "0", this._mountNode["style"].boxSizing = "content-box", this._mountNode["style"].overflow = "hidden", this._host["append"](this._mountNode)), this.syncLayout(), this._mountNode;
  }
  checkMounted() {
    var var_core_value_sigFF19;
    return !!((var_core_value_sigFF19 = this._mountNode) != null && var_core_value_sigFF19.isConnected && this._host["contains"](this._mountNode));
  }
  syncLayout() {
    let var_core_value_sig43B8 = this.getRect();
    if (!var_core_value_sig43B8) return;
    let var_core_value_sigD98F = var_core_value_sig43B8.width + "px",
      var_core_value_sig66C0 = var_core_value_sig43B8.height + "px";
    this._host["style"].width = var_core_value_sigD98F, this._host["style"].height = var_core_value_sig66C0, this._mountNode && (this._mountNode["style"].width = var_core_value_sigD98F, this._mountNode["style"].height = var_core_value_sig66C0);
  }
  markReady() {
    var var_core_value_sig9D15;
    this._ready || (this._ready = true, (var_core_value_sig9D15 = this._markReady) == null || var_core_value_sig9D15.call(this));
  }
  markNotReady() {
    var var_core_value_sigB785;
    this._ready && (this._ready = false, (var_core_value_sigB785 = this._markNotReady) == null || var_core_value_sigB785.call(this));
  }
  dispose() {
    var var_core_value_sig130F;
    this.markNotReady(), (var_core_value_sig130F = this._mountNode) == null || var_core_value_sig130F.remove(), this._mountNode = null, this._host["remove"](), super.dispose();
  }
};
let Z = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F) {
    super(), this._localeService = var_core_value_sigC0E3, this._chartThemeService = var_core_value_sig52F7, this._renderModelManager = var_core_value_sig866F, H(this, "_chartInstanceMap", new Map()), H(this, "_chartEventHandlers", new Map()), H(this, "_chartEventSubscriptions", new Map()), H(this, "_chartElementEditMode", new Map()), H(this, "_lastImageDataUrlMap", new Map()), H(this, "_lastRenderInputMap", new Map());
  }
  createChartInstance(var_core_value_sigDE3D) {
    return var_core_value_sigDE3D ? this._renderModelManager["createChartInstance"](var_core_value_sigDE3D, this._createChartRenderInstanceContext()) : this._renderModelManager["createChartInstance"]();
  }
  async render(var_core_value_sigF175, var_core_value_sig6A18) {
    let {
        chartConfig: var_core_value_sig4E3D,
        chartStyle: var_core_value_sig49B0
      } = this.createRenderInput(var_core_value_sigF175),
      var_core_value_sig2547 = var_core_value_sig6A18.getRect(),
      var_core_value_sigBCA9 = this._getOrCreateChartRenderInstance(var_core_value_sigF175.chartId, var_core_value_sig6A18.mode);
    var_core_value_sigBCA9.bind(var_core_value_sig6A18), await var_core_value_sigBCA9.render({
      chartId: var_core_value_sigF175.chartId,
      config: var_core_value_sig4E3D,
      style: var_core_value_sig49B0
    }), var_core_value_sig2547 && this._lastRenderInputMap["set"](var_core_value_sigF175.chartId, {
      chartConfig: var_core_value_sig4E3D,
      chartStyle: var_core_value_sig49B0,
      rect: var_core_value_sig2547
    });
    let var_core_value_sig4CDF = var_core_value_sig6A18.mode === var_core_value_sig22B4.Image && "getDataUrl" in var_core_value_sig6A18 ? var_core_value_sig6A18.getDataUrl() : undefined;
    var_core_value_sig4CDF && this._lastImageDataUrlMap["set"](var_core_value_sigF175.chartId, var_core_value_sig4CDF);
  }
  async renderDataUpdate(var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED) {
    let var_core_value_sigB57B = this._lastRenderInputMap["get"](var_core_value_sig3F79.chartId),
      {
        chartConfig: var_core_value_sig780B,
        chartStyle: var_core_value_sig7D1B
      } = this.createRenderInput(var_core_value_sig3F79),
      var_core_value_sig7BE0 = var_core_value_sig880E.getRect(),
      var_core_value_sig7D40 = this._getOrCreateChartRenderInstance(var_core_value_sig3F79.chartId, var_core_value_sig880E.mode);
    var_core_value_sig7D40.bind(var_core_value_sig880E);
    let var_core_value_sig6C7E = {
      chartId: var_core_value_sig3F79.chartId,
      config: var_core_value_sig780B,
      style: var_core_value_sig7D1B
    };
    var_core_value_sigB57B && var_core_value_sig7D40.renderTransition ? await var_core_value_sig7D40.renderTransition({
      chartId: var_core_value_sig3F79.chartId,
      config: var_core_value_sigB57B.chartConfig,
      style: var_core_value_sigB57B.chartStyle
    }, var_core_value_sig6C7E, {
      duration: var_core_value_sigC9ED
    }) : await var_core_value_sig7D40.render(var_core_value_sig6C7E), var_core_value_sig7BE0 && this._lastRenderInputMap["set"](var_core_value_sig3F79.chartId, {
      chartConfig: var_core_value_sig780B,
      chartStyle: var_core_value_sig7D1B,
      rect: var_core_value_sig7BE0
    });
  }
  setElementEditMode(var_core_value_sig68BE, var_core_value_sig04C6) {
    var var_core_value_sigCA05;
    var_core_value_sig04C6 ? this._chartElementEditMode["set"](var_core_value_sig68BE, true) : this._chartElementEditMode["delete"](var_core_value_sig68BE), (var_core_value_sigCA05 = this._chartInstanceMap["get"](var_core_value_sig68BE)) == null || var_core_value_sigCA05.setElementEditMode(var_core_value_sig04C6);
  }
  on(var_core_value_sig2F2B, var_core_value_sig70AF, var_core_value_sigD04E) {
    let var_core_value_sigB99B = this._chartEventHandlers["get"](var_core_value_sig2F2B);
    var_core_value_sigB99B || (var_core_value_sigB99B = new Map(), this._chartEventHandlers["set"](var_core_value_sig2F2B, var_core_value_sigB99B));
    let var_core_value_sig5A75 = var_core_value_sigB99B.get(var_core_value_sig70AF);
    var_core_value_sig5A75 || (var_core_value_sig5A75 = new Set(), var_core_value_sigB99B.set(var_core_value_sig70AF, var_core_value_sig5A75)), var_core_value_sig5A75.add(var_core_value_sigD04E);
    let var_core_value_sig7BAF = this._chartInstanceMap["get"](var_core_value_sig2F2B);
    return var_core_value_sig7BAF && this._bindChartEventHandler(var_core_value_sig2F2B, var_core_value_sig7BAF, var_core_value_sig70AF, var_core_value_sigD04E), {
      dispose: () => {
        var var_core_value_sig09B8;
        (var_core_value_sig09B8 = this._chartEventHandlers["get"](var_core_value_sig2F2B)) == null || (var_core_value_sig09B8 = var_core_value_sig09B8.get(var_core_value_sig70AF)) == null || var_core_value_sig09B8.delete(var_core_value_sigD04E), this._disposeChartEventSubscription(var_core_value_sig2F2B, var_core_value_sig70AF, var_core_value_sigD04E);
      }
    };
  }
  disposeChartInstance(var_core_value_sig8F69) {
    this._lastRenderInputMap["delete"](var_core_value_sig8F69), this._disposeChartRenderInstance(var_core_value_sig8F69);
  }
  async exportImage(var_core_value_sig6884, var_core_value_sig066E) {
    let var_core_value_sig9B0D = this._lastRenderInputMap["get"](var_core_value_sig6884);
    if (var_core_value_sig9B0D) return (await this._renderModelManager["exportImage"]({
      chartId: var_core_value_sig6884,
      config: var_core_value_sig9B0D.chartConfig,
      style: var_core_value_sig9B0D.chartStyle,
      width: var_core_value_sig9B0D.rect["width"],
      height: var_core_value_sig9B0D.rect["height"]
    }, var_core_value_sig066E)).dataUrl;
    if ((var_core_value_sig066E == null ? undefined : var_core_value_sig066E.format) !== var_core_value_sig80C0.SVG) return this._lastImageDataUrlMap["get"](var_core_value_sig6884);
  }
  createRenderInput(var_core_value_sig3D2C) {
    let var_core_value_sigC56D = var_core_value_sig3D2C.model["config"];
    if (!var_core_value_sigC56D) throw Error("Chart " + var_core_value_sig3D2C.chartId + " has no render config.");
    let var_core_value_sig3A17 = this._localeService["getDirection"]();
    return {
      chartConfig: var_core_value_sigC56D,
      chartStyle: var_core_value_sig6B99({
        ...var_core_value_sig3D2C.model["style"],
        runtime: var_core_value_sig3D2C.model["getRuntimeContext"](var_core_value_sig3A17),
        direction: var_core_value_sig3A17
      }, var_core_value_sigC56D.type)
    };
  }
  createRenderSpec(var_core_value_sig938F, var_core_value_sigD948, var_core_value_sigBE5E) {
    let {
        chartConfig: var_core_value_sig0281,
        chartStyle: var_core_value_sigED71
      } = this.createRenderInput(var_core_value_sig938F),
      var_core_value_sig281C = this._renderModelManager["getCurrentRenderModel"]();
    return {
      spec: var_core_value_sig281C.stylizeSpec(var_core_value_sig281C.toSpec(var_core_value_sig0281, var_core_value_sigED71), {
        chartConfig: var_core_value_sig0281,
        chartStyle: var_core_value_sigED71,
        chartInstance: var_core_value_sigBE5E
      }, var_core_value_sigD948),
      chartConfig: var_core_value_sig0281,
      chartStyle: var_core_value_sigED71,
      hostStyle: this.getHostStyle(var_core_value_sigED71)
    };
  }
  getHostStyle(var_core_value_sig3C92) {
    return var_core_value_sig6ADC({
      style: var_core_value_sig3C92,
      getRenderColor: var_core_value_sig6F91 => this._chartThemeService["getRenderColor"](var_core_value_sig6F91)
    });
  }
  applyHostStyle(var_core_value_sigB16B, var_core_value_sig585D) {
    var var_core_value_sigE722;
    var_core_value_sigB16B.style["border"] = (var_core_value_sigE722 = var_core_value_sig585D.border) != null && var_core_value_sigE722.color && var_core_value_sig585D.border["width"] ? var_core_value_sig585D.border["width"] + "px solid " + var_core_value_sig585D.border["color"] : "", var_core_value_sigB16B.style["backgroundColor"] = var_core_value_sig585D.fill ?? "transparent", var_core_value_sigB16B.style["borderRadius"] = var_core_value_sig585D.radius ? var_core_value_sig585D.radius + "px" : "", var_core_value_sigB16B.style["overflow"] = "hidden", var_core_value_sigB16B.style["boxSizing"] = "border-box";
  }
  _getOrCreateChartRenderInstance(var_core_value_sig062A, var_core_value_sig050A) {
    let var_core_value_sig8B32 = this._chartInstanceMap["get"](var_core_value_sig062A);
    if ((var_core_value_sig8B32 == null ? undefined : var_core_value_sig8B32.mode) === var_core_value_sig050A) return var_core_value_sig8B32;
    var_core_value_sig8B32 && this._disposeChartRenderInstance(var_core_value_sig062A);
    let var_core_value_sig870F = this._renderModelManager["createChartInstance"](var_core_value_sig050A, this._createChartRenderInstanceContext());
    return this._chartInstanceMap["set"](var_core_value_sig062A, var_core_value_sig870F), var_core_value_sig870F.setElementEditMode(this._chartElementEditMode["get"](var_core_value_sig062A) === true), this._bindChartEventHandlers(var_core_value_sig062A, var_core_value_sig870F), var_core_value_sig870F;
  }
  _disposeChartRenderInstance(var_core_value_sigB683) {
    let var_core_value_sig26EC = this._chartInstanceMap["get"](var_core_value_sigB683);
    var_core_value_sig26EC && (this._disposeChartEventSubscriptions(var_core_value_sigB683), var_core_value_sig26EC.dispose(), this._chartInstanceMap["delete"](var_core_value_sigB683));
  }
  _bindChartEventHandlers(var_core_value_sigEEDB, var_core_value_sig36E7) {
    let var_core_value_sig6A78 = this._chartEventHandlers["get"](var_core_value_sigEEDB);
    var_core_value_sig6A78 && var_core_value_sig6A78.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
      var_core_value_sigF9C7.forEach(var_core_value_sig3D7D => this._bindChartEventHandler(var_core_value_sigEEDB, var_core_value_sig36E7, var_core_value_sig8895, var_core_value_sig3D7D));
    });
  }
  _bindChartEventHandler(var_core_value_sigF7EF, var_core_value_sig27F9, var_core_value_sig393E, var_core_value_sigB609) {
    let var_core_value_sig390D = this._chartEventSubscriptions["get"](var_core_value_sigF7EF);
    var_core_value_sig390D || (var_core_value_sig390D = new Map(), this._chartEventSubscriptions["set"](var_core_value_sigF7EF, var_core_value_sig390D));
    let var_core_value_sigC928 = var_core_value_sig390D.get(var_core_value_sig393E);
    var_core_value_sigC928 || (var_core_value_sigC928 = new Map(), var_core_value_sig390D.set(var_core_value_sig393E, var_core_value_sigC928)), !var_core_value_sigC928.has(var_core_value_sigB609) && var_core_value_sigC928.set(var_core_value_sigB609, var_core_value_sig27F9.on(var_core_value_sig393E, var_core_value_sigB609));
  }
  _disposeChartEventSubscription(var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161) {
    var var_core_value_sigBDEE, var_core_value_sig1F40;
    let var_core_value_sig3FC7 = (var_core_value_sigBDEE = this._chartEventSubscriptions["get"](var_core_value_sig39B7)) == null ? undefined : var_core_value_sigBDEE.get(var_core_value_sig18E0);
    var_core_value_sig3FC7 == null || (var_core_value_sig1F40 = var_core_value_sig3FC7.get(var_core_value_sigE161)) == null || var_core_value_sig1F40.dispose(), var_core_value_sig3FC7 == null || var_core_value_sig3FC7.delete(var_core_value_sigE161);
  }
  _disposeChartEventSubscriptions(var_core_value_sig1E1B) {
    let var_core_value_sig3B10 = this._chartEventSubscriptions["get"](var_core_value_sig1E1B);
    var_core_value_sig3B10 == null || var_core_value_sig3B10.forEach(var_core_value_sigC80B => {
      var_core_value_sigC80B.forEach(var_core_value_sig27E5 => var_core_value_sig27E5.dispose()), var_core_value_sigC80B.clear();
    }), this._chartEventSubscriptions["delete"](var_core_value_sig1E1B);
  }
  _createChartRenderInstanceContext() {
    return {
      resolveHostStyle: ({
        style: var_core_value_sig284F
      }) => this.getHostStyle(var_core_value_sig284F),
      resolveRenderBackgroundColor: ({
        hostStyle: var_core_value_sigE154
      }) => var_core_value_sigE154.fill,
      prepareSpec: ({
        mode: var_core_value_sig4632,
        spec: var_core_value_sig12F2
      }) => var_core_value_sig4632 === var_core_value_sig22B4.Image ? {
        ...var_core_value_sig12F2,
        animation: false,
        tooltip: {
          show: false
        }
      } : var_core_value_sig12F2
    };
  }
  dispose() {
    Array.from(this._chartInstanceMap["keys"]()).forEach(var_core_value_sig2259 => this.disposeChartInstance(var_core_value_sig2259)), this._chartEventHandlers["clear"](), this._chartElementEditMode["clear"](), this._lastImageDataUrlMap["clear"](), this._lastRenderInputMap["clear"](), super.dispose();
  }
};
Z = W([U(0, var_core_value_sig8A26(var_core_value_sigF631)), U(1, var_core_value_sig8A26(var_core_value_sigBB37)), U(2, var_core_value_sig0E48)], Z);
const or = var_core_value_sigFE76;
let Q = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93) {
    super(), this._renderManagerService = var_core_value_sig89E6, this._localeService = var_core_value_sig4743, this._modelService = var_core_value_sigEB6A, this._renderService = var_core_value_sig3D46, this._renderModeService = var_core_value_sigCC93, H(this, "_hostContextMap", new Map()), H(this, "_hostContextRegistrationMap", new Map()), H(this, "_domHostMap", new Map()), H(this, "_hostLayoutSubscriptions", new Map()), H(this, "_runtimeRenderSubscriptions", new Map()), H(this, "_renderQueueMap", new Map()), H(this, "_renderRequestTokenMap", new Map()), H(this, "_domReadyChartIds", new Set()), H(this, "_lastImageDataUrlMap", new Map()), H(this, "_pendingDataUpdateChartIds", new Set()), H(this, "_dataUpdateEpochMap", new Map()), H(this, "_dataUpdateAnimationChartIds", new Set()), H(this, "_dataUpdateAnimationTimers", new Map()), H(this, "_removeHost$", new var_core_value_sigA568()), H(this, "_imageUpdated$", new var_core_value_sigA568()), H(this, "_domReadyChanged$", new var_core_value_sigA568()), H(this, "_layoutChanged$", new var_core_value_sigA568()), H(this, "removeHost$", this._removeHost$["asObservable"]()), H(this, "imageUpdated$", this._imageUpdated$["asObservable"]()), H(this, "domReadyChanged$", this._domReadyChanged$["asObservable"]()), H(this, "layoutChanged$", this._layoutChanged$["asObservable"]()), this.disposeWithMe(var_core_value_sig983D(this._renderModeService["modeChanged$"].subscribe(({
      chartId: var_core_value_sig9E2F
    }) => {
      this.renderChart(var_core_value_sig9E2F);
    }))), this.disposeWithMe(var_core_value_sig983D(this._modelService["chartDataUpdated$"].subscribe(var_core_value_sigD082 => {
      this._runtimeRenderSubscriptions["has"](var_core_value_sigD082) && (this._dataUpdateEpochMap["set"](var_core_value_sigD082, (this._dataUpdateEpochMap["get"](var_core_value_sigD082) ?? 0) + 1), this._pendingDataUpdateChartIds["add"](var_core_value_sigD082));
    })));
  }
  registerHostContext(var_core_value_sig5964) {
    let var_core_value_sig808B = Symbol(var_core_value_sig5964.chartId),
      var_core_value_sig2A26 = this._getHostRegistrationKey(var_core_value_sig5964),
      var_core_value_sig1179 = this._hostContextRegistrationMap["get"](var_core_value_sig5964.chartId);
    return var_core_value_sig1179 || (var_core_value_sig1179 = new Map(), this._hostContextRegistrationMap["set"](var_core_value_sig5964.chartId, var_core_value_sig1179)), var_core_value_sig1179.set(var_core_value_sig2A26, {
      context: var_core_value_sig5964,
      token: var_core_value_sig808B
    }), this._hostContextMap["set"](var_core_value_sig5964.chartId, this._selectHostContext(var_core_value_sig1179)), this.syncHostLayout(var_core_value_sig5964.chartId), this.renderChart(var_core_value_sig5964.chartId), {
      dispose: () => {
        let var_core_value_sigDBB7 = this._hostContextRegistrationMap["get"](var_core_value_sig5964.chartId);
        if (!var_core_value_sigDBB7) return;
        let var_core_value_sigD0A8 = var_core_value_sigDBB7.get(var_core_value_sig2A26);
        if ((var_core_value_sigD0A8 == null ? undefined : var_core_value_sigD0A8.token) === var_core_value_sig808B) {
          if (var_core_value_sig5964.sceneType === var_core_value_sigA790.THUMBNAIL && var_core_value_sig5964.requestRender && !this._lastImageDataUrlMap["has"](var_core_value_sig5964.chartId)) {
            var_core_value_sigDBB7.set(var_core_value_sig2A26, {
              context: {
                ...var_core_value_sigD0A8.context,
                imageObject: undefined
              },
              token: var_core_value_sig808B,
              detached: true
            }), this._hostContextMap["set"](var_core_value_sig5964.chartId, this._selectHostContext(var_core_value_sigDBB7));
            return;
          }
          if (var_core_value_sigDBB7.delete(var_core_value_sig2A26), !(var_core_value_sigDBB7 != null && var_core_value_sigDBB7.size)) {
            this._hostContextMap["delete"](var_core_value_sig5964.chartId), this._hostContextRegistrationMap["delete"](var_core_value_sig5964.chartId), this.removeHost(var_core_value_sig5964.chartId);
            return;
          }
          this._hostContextMap["set"](var_core_value_sig5964.chartId, this._selectHostContext(var_core_value_sigDBB7)), this.syncHostLayout(var_core_value_sig5964.chartId);
        }
      }
    };
  }
  getHostContext(var_core_value_sigEA92) {
    return this._hostContextMap["get"](var_core_value_sigEA92);
  }
  ensureHost(var_core_value_sig8FD9, var_core_value_sig1AE5) {
    return var_core_value_sig1AE5 === var_core_value_sig22B4.Image ? this._createImageChartHost(var_core_value_sig8FD9) : this._getOrCreateDomChartHost(var_core_value_sig8FD9);
  }
  getImageDataUrl(var_core_value_sig7100) {
    return this._lastImageDataUrlMap["get"](var_core_value_sig7100);
  }
  commitImageHost(var_core_value_sigA19A, var_core_value_sigD3F5) {
    if (!(var_core_value_sigD3F5 instanceof var_core_value_sigADA4)) return;
    let var_core_value_sig3082 = var_core_value_sigD3F5.getDataUrl();
    var_core_value_sig3082 && this._commitImageDataUrl(var_core_value_sigA19A, var_core_value_sig3082);
  }
  async renderChart(var_core_value_sigF5D1) {
    this._renderRequestTokenMap["set"](var_core_value_sigF5D1, Symbol(var_core_value_sigF5D1));
    let var_core_value_sig8775 = this._renderQueueMap["get"](var_core_value_sigF5D1);
    if (var_core_value_sig8775) return var_core_value_sig8775.requested = true, var_core_value_sig8775.promise;
    let var_core_value_sig481B = {
      requested: true,
      promise: Promise.resolve()
    };
    return var_core_value_sig481B.promise = this._drainRenderQueue(var_core_value_sigF5D1, var_core_value_sig481B).finally(() => {
      this._renderQueueMap["get"](var_core_value_sigF5D1) === var_core_value_sig481B && this._renderQueueMap["delete"](var_core_value_sigF5D1);
    }), this._renderQueueMap["set"](var_core_value_sigF5D1, var_core_value_sig481B), var_core_value_sig481B.promise;
  }
  async _drainRenderQueue(var_core_value_sig13D7, var_core_value_sig90C0) {
    for (; var_core_value_sig90C0.requested;) {
      var_core_value_sig90C0.requested = false;
      let var_core_value_sig8061 = this._renderRequestTokenMap["get"](var_core_value_sig13D7);
      if (!var_core_value_sig8061) return;
      await this._renderChartOnce(var_core_value_sig13D7, var_core_value_sig8061);
    }
  }
  async _renderChartOnce(var_core_value_sigF1B2, var_core_value_sigC2BB) {
    let var_core_value_sigD9DB = this._hostContextMap["get"](var_core_value_sigF1B2);
    if (!var_core_value_sigD9DB) return;
    let var_core_value_sigA363 = this._modelService["ensureChartModel"](var_core_value_sigD9DB.unitId, var_core_value_sigF1B2);
    if (!var_core_value_sigA363) return;
    this._bindRuntimeRenderListener(var_core_value_sigA363);
    let var_core_value_sigFBA5 = var_core_value_sigA363.model["config"];
    if (!var_core_value_sigFBA5 || var_core_value_sigFBA5.type !== var_core_value_sigA363.model["chartType"] || this._renderRequestTokenMap["get"](var_core_value_sigF1B2) !== var_core_value_sigC2BB) return;
    this._forEachHostContext(var_core_value_sigF1B2, var_core_value_sigF4B9 => {
      var var_core_value_sig5CEE, var_core_value_sigE92A;
      (var_core_value_sig5CEE = var_core_value_sigF4B9.imageObject) == null || (var_core_value_sigE92A = var_core_value_sig5CEE.setChartStroke) == null || var_core_value_sigE92A.call(var_core_value_sig5CEE, ir(var_core_value_sigA363.model["style"], var_core_value_sigF4B9.stroke));
    });
    let var_core_value_sigAC47 = this._pendingDataUpdateChartIds["has"](var_core_value_sigF1B2),
      var_core_value_sigA06F = this._dataUpdateEpochMap["get"](var_core_value_sigF1B2) ?? 0;
    if (this._dataUpdateAnimationChartIds["has"](var_core_value_sigF1B2) && !var_core_value_sigAC47) return;
    let var_core_value_sig770E = this._renderModeService["getRenderMode"](var_core_value_sigF1B2),
      var_core_value_sig4654 = var_core_value_sigAC47 && var_core_value_sig770E === var_core_value_sig22B4.Image && this._canAnimateDataUpdate(var_core_value_sigF1B2);
    var_core_value_sig4654 && this._activateDataUpdateAnimation(var_core_value_sigF1B2);
    let var_core_value_sigB26B = this._dataUpdateAnimationChartIds["has"](var_core_value_sigF1B2) ? var_core_value_sig22B4.Dom : var_core_value_sig770E,
      var_core_value_sig019B = false;
    var_core_value_sig019B = var_core_value_sigB26B === var_core_value_sig22B4.Image ? await this._renderImageChart(var_core_value_sigA363, var_core_value_sigC2BB) : await this._renderDomChart(var_core_value_sigA363, var_core_value_sigC2BB, {
      animateDataUpdate: var_core_value_sigAC47,
      interactive: var_core_value_sig770E === var_core_value_sig22B4.Dom
    });
    let var_core_value_sigC6BC = this._renderRequestTokenMap["get"](var_core_value_sigF1B2) === var_core_value_sigC2BB,
      var_core_value_sig8EC2 = (this._dataUpdateEpochMap["get"](var_core_value_sigF1B2) ?? 0) === var_core_value_sigA06F;
    if (!var_core_value_sig019B) {
      var_core_value_sig4654 && var_core_value_sigC6BC && var_core_value_sig8EC2 && this._deactivateDataUpdateAnimation(var_core_value_sigF1B2);
      return;
    }
    !var_core_value_sigC6BC || !var_core_value_sig8EC2 || (this._pendingDataUpdateChartIds["delete"](var_core_value_sigF1B2), var_core_value_sigAC47 && this._dataUpdateAnimationChartIds["has"](var_core_value_sigF1B2) && this._scheduleDataUpdateAnimationEnd(var_core_value_sigF1B2));
  }
  async _renderImageChart(var_core_value_sigA8C3, var_core_value_sig5276) {
    let {
      chartId: var_core_value_sig031B
    } = var_core_value_sigA8C3;
    this._renderService["setElementEditMode"](var_core_value_sig031B, false), this._removeDomHost(var_core_value_sig031B);
    let var_core_value_sig9DC0 = this.ensureHost(var_core_value_sig031B, var_core_value_sig22B4.Image);
    if (!var_core_value_sig9DC0) return false;
    try {
      return await this._renderService["render"](var_core_value_sigA8C3, var_core_value_sig9DC0), this._renderRequestTokenMap["get"](var_core_value_sig031B) === var_core_value_sig5276 && this.commitImageHost(var_core_value_sig031B, var_core_value_sig9DC0), true;
    } catch {
      return false;
    }
  }
  async _renderDomChart(var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718) {
    let {
      chartId: var_core_value_sigAEC8
    } = var_core_value_sig95F0;
    this._renderService["setElementEditMode"](var_core_value_sigAEC8, var_core_value_sigE718.interactive);
    let var_core_value_sigB977 = this.ensureHost(var_core_value_sigAEC8, var_core_value_sig22B4.Dom);
    if (!var_core_value_sigB977) return false;
    try {
      if (var_core_value_sigE718.animateDataUpdate ? await this._renderService["renderDataUpdate"](var_core_value_sig95F0, var_core_value_sigB977, or) : await this._renderService["render"](var_core_value_sig95F0, var_core_value_sigB977), this._renderRequestTokenMap["get"](var_core_value_sigAEC8) !== var_core_value_sig9CCB) return true;
      var_core_value_sigB977.markReady();
      try {
        let var_core_value_sig4D4C = await this._renderService["exportImage"](var_core_value_sigAEC8);
        var_core_value_sig4D4C && this._renderRequestTokenMap["get"](var_core_value_sigAEC8) === var_core_value_sig9CCB && this._commitImageDataUrl(var_core_value_sigAEC8, var_core_value_sig4D4C);
      } catch {}
      return true;
    } catch {
      return this._renderRequestTokenMap["get"](var_core_value_sigAEC8) === var_core_value_sig9CCB && var_core_value_sigB977.markNotReady(), false;
    }
  }
  removeHost(var_core_value_sig2949) {
    this._renderRequestTokenMap["delete"](var_core_value_sig2949), this._deactivateDataUpdateAnimation(var_core_value_sig2949), this._pendingDataUpdateChartIds["delete"](var_core_value_sig2949), this._dataUpdateEpochMap["delete"](var_core_value_sig2949), this._removeDomHost(var_core_value_sig2949), this._disposeRuntimeRenderListener(var_core_value_sig2949), this._renderService["disposeChartInstance"](var_core_value_sig2949);
  }
  _removeDomHost(var_core_value_sig308A) {
    let var_core_value_sig528D = this._domHostMap["get"](var_core_value_sig308A);
    var_core_value_sig528D && (var_core_value_sig528D.dispose(), this._domHostMap["delete"](var_core_value_sig308A), this._disposeHostLayoutListeners(var_core_value_sig308A), this._removeHost$["next"](var_core_value_sig308A));
  }
  syncHostLayout(var_core_value_sigA309) {
    let var_core_value_sig9E20 = this._domHostMap["get"](var_core_value_sigA309);
    var_core_value_sig9E20 && (this._applyDomHostLayout(var_core_value_sigA309, var_core_value_sig9E20), var_core_value_sig9E20.syncLayout(), this._layoutChanged$["next"](var_core_value_sigA309));
  }
  checkHost(var_core_value_sig26BB) {
    var var_core_value_sig19B4;
    return ((var_core_value_sig19B4 = this._domHostMap["get"](var_core_value_sig26BB)) == null ? undefined : var_core_value_sig19B4.checkMounted()) ?? false;
  }
  isDomReady(var_core_value_sig218A) {
    return this._domReadyChartIds["has"](var_core_value_sig218A);
  }
  markHostReady(var_core_value_sig14CB) {
    this._domReadyChartIds["has"](var_core_value_sig14CB) || (this._domReadyChartIds["add"](var_core_value_sig14CB), this._domReadyChanged$["next"](var_core_value_sig14CB), this._requestChartCanvasRender(var_core_value_sig14CB));
  }
  markHostNotReady(var_core_value_sigFDEE) {
    this._domReadyChartIds["delete"](var_core_value_sigFDEE) && (this._domReadyChanged$["next"](var_core_value_sigFDEE), this._requestChartCanvasRender(var_core_value_sigFDEE));
  }
  getClientRect(var_core_value_sigA676, var_core_value_sigC27E) {
    let var_core_value_sigA70D = this._hostContextMap["get"](var_core_value_sigA676);
    if (!var_core_value_sigA70D) return null;
    let var_core_value_sigCE10 = this._getChartRenderObject(var_core_value_sigA70D),
      var_core_value_sigA386 = (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.left) ?? var_core_value_sigA70D.drawing["element"].transform["left"] ?? 0,
      var_core_value_sigCD82 = (var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.top) ?? var_core_value_sigA70D.drawing["element"].transform["top"] ?? 0,
      var_core_value_sig44DD = var_core_value_sigC27E ? {
        left: var_core_value_sigA386 + var_core_value_sigC27E.left,
        top: var_core_value_sigCD82 + var_core_value_sigC27E.top,
        right: var_core_value_sigA386 + var_core_value_sigC27E.right,
        bottom: var_core_value_sigCD82 + var_core_value_sigC27E.bottom
      } : {
        left: var_core_value_sigA386,
        top: var_core_value_sigCD82,
        right: var_core_value_sigA386 + ((var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.width) ?? var_core_value_sigA70D.width),
        bottom: var_core_value_sigCD82 + ((var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10.height) ?? var_core_value_sigA70D.height)
      };
    return this._transformCanvasBoundToClientBound(var_core_value_sigA70D.unitId, var_core_value_sig44DD);
  }
  _createImageChartHost(var_core_value_sig96FA) {
    let var_core_value_sigAB68 = this._hostContextMap["get"](var_core_value_sig96FA);
    return var_core_value_sigAB68 ? new var_core_value_sigADA4(var_core_value_sig96FA, {
      width: var_core_value_sigAB68.width,
      height: var_core_value_sigAB68.height
    }) : null;
  }
  _getOrCreateDomChartHost(var_core_value_sig040A) {
    let var_core_value_sig2AE0 = this._hostContextMap["get"](var_core_value_sig040A);
    if (!var_core_value_sig2AE0 || typeof document > "u") return null;
    let var_core_value_sigC349 = this._domHostMap["get"](var_core_value_sig040A);
    if (var_core_value_sigC349) return this._applyDomHostInteractionState(var_core_value_sig040A, var_core_value_sigC349.getHostElement()), this._applyDomHostLayout(var_core_value_sig040A, var_core_value_sigC349), var_core_value_sigC349;
    let var_core_value_sig9D96 = document.createElement("div");
    var_core_value_sig9D96.dataset["uComp"] = "slide-chart-dom-host", var_core_value_sig9D96.dataset["chartId"] = var_core_value_sig040A, var_core_value_sig9D96.style["zIndex"] = String(var_core_value_sig0FCF), var_core_value_sig9D96.style["overflow"] = "hidden", var_core_value_sig9D96.style["boxSizing"] = "border-box", var_core_value_sig9D96.style["transformOrigin"] = "center center";
    let var_core_value_sig2776 = this._getSlideDomWorldLayer(var_core_value_sig2AE0.unitId);
    var_core_value_sig9D96.style["position"] = var_core_value_sig2776 ? "absolute" : "fixed", (var_core_value_sig2776 ?? document.body).append(var_core_value_sig9D96);
    let var_core_value_sig6FB2 = new ar(var_core_value_sig040A, var_core_value_sig9D96, (var_core_value_sig362B, var_core_value_sig5CA5) => {
      var var_core_value_sigE90F;
      let var_core_value_sigEFD4 = this._hostContextMap["get"](var_core_value_sig040A),
        var_core_value_sig861B = var_core_value_sigEFD4 ? (var_core_value_sigE90F = this._modelService["getChartModel"](var_core_value_sigEFD4.unitId, var_core_value_sig040A)) == null ? undefined : var_core_value_sigE90F.model["style"] : undefined,
        var_core_value_sig5237 = var_core_value_sigEFD4 ? ir(var_core_value_sig861B, var_core_value_sigEFD4.stroke) : undefined;
      var_core_value_sig362B.style["border"] = rr(var_core_value_sig5237) ? var_core_value_sig5237.width + "px\x20solid\x20" + var_core_value_sig5237.color : "", var_core_value_sig362B.style["backgroundColor"] = var_core_value_sig5CA5.fill ?? "", var_core_value_sig362B.style["borderRadius"] = var_core_value_sigF612 + "px";
    }, () => {
      let var_core_value_sigBB00 = this._hostContextMap["get"](var_core_value_sig040A);
      return var_core_value_sigBB00 ? {
        width: var_core_value_sigBB00.width,
        height: var_core_value_sigBB00.height
      } : null;
    }, () => this.markHostReady(var_core_value_sig040A), () => this.markHostNotReady(var_core_value_sig040A));
    return this._domHostMap["set"](var_core_value_sig040A, var_core_value_sig6FB2), this._applyDomHostInteractionState(var_core_value_sig040A, var_core_value_sig9D96), this._bindHostLayoutListeners(var_core_value_sig040A), this._applyDomHostLayout(var_core_value_sig040A, var_core_value_sig6FB2), var_core_value_sig6FB2;
  }
  _bindHostLayoutListeners(var_core_value_sigEB43) {
    this._disposeHostLayoutListeners(var_core_value_sigEB43);
    let var_core_value_sig4186 = this._hostContextMap["get"](var_core_value_sigEB43),
      var_core_value_sigF963 = var_core_value_sig4186 ? this._renderManagerService["getRenderUnitById"](var_core_value_sig4186.unitId) : null;
    if (!var_core_value_sig4186 || !var_core_value_sigF963) return;
    let var_core_value_sigB608 = [],
      var_core_value_sigF866 = () => this.syncHostLayout(var_core_value_sigEB43),
      var_core_value_sig5EFB = var_core_value_sigF963.scene["getViewport"](var_core_value_sig8A7F);
    var_core_value_sig5EFB && var_core_value_sigB608.push(var_core_value_sig983D(var_core_value_sig5EFB.onScrollAfter$["subscribeEvent"](var_core_value_sigF866))), var_core_value_sigB608.push(var_core_value_sig983D(var_core_value_sigF963.engine["onTransformChange$"].subscribeEvent(var_core_value_sigF866))), var_core_value_sigB608.push(var_core_value_sig983D(var_core_value_sigF963.scene["onTransformChange$"].subscribeEvent(var_core_value_sigF866)));
    let var_core_value_sig3A85 = this._getChartRenderObject(var_core_value_sig4186);
    var_core_value_sig3A85 != null && var_core_value_sig3A85.onTransformChange$ && var_core_value_sigB608.push(var_core_value_sig983D(var_core_value_sig3A85.onTransformChange$["subscribeEvent"](var_core_value_sigF866))), this._hostLayoutSubscriptions["set"](var_core_value_sigEB43, var_core_value_sigB608);
  }
  _disposeHostLayoutListeners(var_core_value_sig2682) {
    var var_core_value_sig4BB5;
    (var_core_value_sig4BB5 = this._hostLayoutSubscriptions["get"](var_core_value_sig2682)) == null || var_core_value_sig4BB5.forEach(var_core_value_sig7E54 => var_core_value_sig7E54.dispose()), this._hostLayoutSubscriptions["delete"](var_core_value_sig2682);
  }
  _bindRuntimeRenderListener(var_core_value_sig6709) {
    if (this._runtimeRenderSubscriptions["has"](var_core_value_sig6709.chartId)) return;
    let var_core_value_sig52CA = var_core_value_sig85D5([var_core_value_sig6709.model["config$"], var_core_value_sig6709.model["style$"], this._localeService["direction$"]]).pipe(var_core_value_sig5D2E(1), var_core_value_sigD22D(0)).subscribe(() => {
      queueMicrotask(() => {
        this.renderChart(var_core_value_sig6709.chartId);
      });
    });
    this._runtimeRenderSubscriptions["set"](var_core_value_sig6709.chartId, {
      dispose: () => {
        var_core_value_sig52CA.unsubscribe();
      }
    });
  }
  _disposeRuntimeRenderListener(var_core_value_sigC030) {
    var var_core_value_sig88F6;
    (var_core_value_sig88F6 = this._runtimeRenderSubscriptions["get"](var_core_value_sigC030)) == null || var_core_value_sig88F6.dispose(), this._runtimeRenderSubscriptions["delete"](var_core_value_sigC030);
  }
  _canAnimateDataUpdate(var_core_value_sig37DB) {
    var var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620;
    let var_core_value_sigB9FC = this._hostContextMap["get"](var_core_value_sig37DB);
    if (!var_core_value_sigB9FC || var_core_value_sigB9FC.sceneType != null && var_core_value_sigB9FC.sceneType !== var_core_value_sigA790.EDIT || typeof document > "u" || typeof window > "u" || document.visibilityState === "hidden" || (var_core_value_sig5542 = (var_core_value_sigE0A9 = window).matchMedia) != null && (var_core_value_sig5542 = var_core_value_sig5542.call(var_core_value_sigE0A9, "(prefers-reduced-motion: reduce)")) != null && var_core_value_sig5542.matches || (var_core_value_sigA73E = (var_core_value_sig7620 = window).matchMedia) != null && (var_core_value_sigA73E = var_core_value_sigA73E.call(var_core_value_sig7620, "print")) != null && var_core_value_sigA73E.matches) return false;
    let var_core_value_sig5055 = this.getClientRect(var_core_value_sig37DB);
    return var_core_value_sig5055 != null && var_core_value_sig5055.right > 0 && var_core_value_sig5055.bottom > 0 && var_core_value_sig5055.left < window.innerWidth && var_core_value_sig5055.top < window.innerHeight;
  }
  _activateDataUpdateAnimation(var_core_value_sig3801) {
    var var_core_value_sig45F0;
    let var_core_value_sigBC91 = this._dataUpdateAnimationTimers["get"](var_core_value_sig3801);
    var_core_value_sigBC91 && (clearTimeout(var_core_value_sigBC91), this._dataUpdateAnimationTimers["delete"](var_core_value_sig3801)), this._dataUpdateAnimationChartIds["add"](var_core_value_sig3801);
    let var_core_value_sigCB88 = (var_core_value_sig45F0 = this._domHostMap["get"](var_core_value_sig3801)) == null ? undefined : var_core_value_sig45F0.getHostElement();
    var_core_value_sigCB88 && this._applyDomHostInteractionState(var_core_value_sig3801, var_core_value_sigCB88);
  }
  _scheduleDataUpdateAnimationEnd(var_core_value_sig8D65) {
    let var_core_value_sig8122 = this._dataUpdateAnimationTimers["get"](var_core_value_sig8D65);
    var_core_value_sig8122 && clearTimeout(var_core_value_sig8122);
    let var_core_value_sigEDC6 = setTimeout(() => {
      this._dataUpdateAnimationTimers["delete"](var_core_value_sig8D65), this._dataUpdateAnimationChartIds["delete"](var_core_value_sig8D65) && this.renderChart(var_core_value_sig8D65);
    }, or);
    this._dataUpdateAnimationTimers["set"](var_core_value_sig8D65, var_core_value_sigEDC6);
  }
  _deactivateDataUpdateAnimation(var_core_value_sig611A) {
    let var_core_value_sig6BD9 = this._dataUpdateAnimationTimers["get"](var_core_value_sig611A);
    var_core_value_sig6BD9 && (clearTimeout(var_core_value_sig6BD9), this._dataUpdateAnimationTimers["delete"](var_core_value_sig611A)), this._dataUpdateAnimationChartIds["delete"](var_core_value_sig611A);
  }
  _applyDomHostInteractionState(var_core_value_sig7E56, var_core_value_sig4161) {
    if (this._dataUpdateAnimationChartIds["has"](var_core_value_sig7E56)) {
      var_core_value_sig4161.dataset["slideChartDataAnimation"] = "true", var_core_value_sig4161.dataset["slideChartDataAnimationDuration"] = String(or), var_core_value_sig4161.style["pointerEvents"] = "none";
      return;
    }
    delete var_core_value_sig4161.dataset["slideChartDataAnimation"], delete var_core_value_sig4161.dataset["slideChartDataAnimationDuration"], var_core_value_sig4161.style["pointerEvents"] = "auto";
  }
  _applyDomHostLayout(var_core_value_sig7580, var_core_value_sig1F18) {
    let var_core_value_sigD5A0 = this._hostContextMap["get"](var_core_value_sig7580);
    if (!var_core_value_sigD5A0) return;
    let var_core_value_sig81B2 = this._getChartRenderObject(var_core_value_sigD5A0),
      var_core_value_sigA0A5 = (var_core_value_sig81B2 == null ? undefined : var_core_value_sig81B2.left) ?? var_core_value_sigD5A0.drawing["element"].transform["left"] ?? 0,
      var_core_value_sig10AA = (var_core_value_sig81B2 == null ? undefined : var_core_value_sig81B2.top) ?? var_core_value_sigD5A0.drawing["element"].transform["top"] ?? 0,
      var_core_value_sigE6D0 = Math.max(var_core_value_sig1EB3, (var_core_value_sig81B2 == null ? undefined : var_core_value_sig81B2.width) ?? var_core_value_sigD5A0.width),
      var_core_value_sig8E91 = Math.max(var_core_value_sig1EB3, (var_core_value_sig81B2 == null ? undefined : var_core_value_sig81B2.height) ?? var_core_value_sigD5A0.height),
      var_core_value_sig00BE = (var_core_value_sig81B2 == null ? undefined : var_core_value_sig81B2.angle) ?? var_core_value_sigD5A0.drawing["element"].transform["rotation"] ?? 0,
      var_core_value_sig7BB5 = this._getSlideDomWorldLayer(var_core_value_sigD5A0.unitId),
      var_core_value_sig6AAD = var_core_value_sig1F18.getHostElement();
    if (var_core_value_sig7BB5) {
      var_core_value_sig6AAD.parentElement !== var_core_value_sig7BB5 && var_core_value_sig7BB5.append(var_core_value_sig6AAD), var_core_value_sig6AAD.style["position"] = "absolute", var_core_value_sig6AAD.style["left"] = var_core_value_sigA0A5 + "px", var_core_value_sig6AAD.style["top"] = var_core_value_sig10AA + "px", var_core_value_sig6AAD.style["width"] = var_core_value_sigE6D0 + "px", var_core_value_sig6AAD.style["height"] = var_core_value_sig8E91 + "px", var_core_value_sig6AAD.style["transform"] = "rotate(" + var_core_value_sig00BE + "deg)";
      return;
    }
    let var_core_value_sig1157 = this._getCanvasClientScale(var_core_value_sigD5A0.unitId),
      var_core_value_sigA694 = this._transformCanvasBoundToClientBound(var_core_value_sigD5A0.unitId, {
        left: var_core_value_sigA0A5,
        top: var_core_value_sig10AA,
        right: var_core_value_sigA0A5 + var_core_value_sigE6D0,
        bottom: var_core_value_sig10AA + var_core_value_sig8E91
      });
    !var_core_value_sig1157 || !var_core_value_sigA694 || (var_core_value_sig6AAD.style["position"] = "fixed", var_core_value_sig6AAD.style["left"] = var_core_value_sigA694.left + var_core_value_sigE6D0 * (var_core_value_sig1157.scaleX - 1) / 2 + "px", var_core_value_sig6AAD.style["top"] = var_core_value_sigA694.top + var_core_value_sig8E91 * (var_core_value_sig1157.scaleY - 1) / 2 + "px", var_core_value_sig6AAD.style["width"] = var_core_value_sigE6D0 + "px", var_core_value_sig6AAD.style["height"] = var_core_value_sig8E91 + "px", var_core_value_sig6AAD.style["transform"] = "scale(" + var_core_value_sig1157.scaleX + ",\x20" + var_core_value_sig1157.scaleY + ") rotate(" + var_core_value_sig00BE + "deg)");
  }
  _getSlideDomWorldLayer(var_core_value_sig18E01) {
    return typeof document > "u" ? null : Array.from(document.querySelectorAll("[data-slide-dom-world-layer-unit-id]")).find(var_core_value_sig9A8D => var_core_value_sig9A8D.dataset["slideDomWorldLayerUnitId"] === var_core_value_sig18E01) ?? null;
  }
  _getCanvasClientScale(var_core_value_sig0428) {
    let var_core_value_sigBE07 = this._renderManagerService["getRenderUnitById"](var_core_value_sig0428),
      var_core_value_sig555F = var_core_value_sigBE07 == null ? undefined : var_core_value_sigBE07.engine["getCanvasElement"]();
    if (!var_core_value_sigBE07 || !var_core_value_sig555F) return null;
    let {
        scaleX: var_core_value_sig3D6F,
        scaleY: var_core_value_sig336C
      } = var_core_value_sigBE07.scene["getAncestorScale"](),
      var_core_value_sig6E68 = var_core_value_sig555F.getBoundingClientRect(),
      var_core_value_sig8DFE = var_core_value_sigC621(var_core_value_sig555F.style["width"]),
      var_core_value_sig48EA = var_core_value_sig8DFE > 0 ? var_core_value_sig6E68.width / var_core_value_sig8DFE : 1;
    return {
      scaleX: var_core_value_sig3D6F * var_core_value_sig48EA,
      scaleY: var_core_value_sig336C * var_core_value_sig48EA
    };
  }
  _transformCanvasBoundToClientBound(var_core_value_sig5E16, var_core_value_sig09F3) {
    let var_core_value_sig4592 = this._renderManagerService["getRenderUnitById"](var_core_value_sig5E16),
      var_core_value_sigC5C4 = var_core_value_sig4592 == null ? undefined : var_core_value_sig4592.engine["getCanvasElement"](),
      var_core_value_sig1617 = this._getCanvasClientScale(var_core_value_sig5E16);
    if (!var_core_value_sig4592 || !var_core_value_sigC5C4 || !var_core_value_sig1617) return null;
    let var_core_value_sig4169 = var_core_value_sig4592.scene["getViewport"](var_core_value_sig8A7F),
      var_core_value_sig6D19 = (var_core_value_sig4169 == null ? undefined : var_core_value_sig4169.viewportScrollX) ?? 0,
      var_core_value_sig279C = (var_core_value_sig4169 == null ? undefined : var_core_value_sig4169.viewportScrollY) ?? 0,
      var_core_value_sigAC51 = var_core_value_sigC5C4.getBoundingClientRect();
    return {
      left: (var_core_value_sig09F3.left - var_core_value_sig6D19) * var_core_value_sig1617.scaleX + var_core_value_sigAC51.left,
      right: (var_core_value_sig09F3.right - var_core_value_sig6D19) * var_core_value_sig1617.scaleX + var_core_value_sigAC51.left,
      top: (var_core_value_sig09F3.top - var_core_value_sig279C) * var_core_value_sig1617.scaleY + var_core_value_sigAC51.top,
      bottom: (var_core_value_sig09F3.bottom - var_core_value_sig279C) * var_core_value_sig1617.scaleY + var_core_value_sigAC51.top
    };
  }
  _getChartRenderObject(var_core_value_sig8986) {
    var var_core_value_sigCAF7, var_core_value_sigED1C;
    let var_core_value_sig726E = (var_core_value_sigCAF7 = this._renderManagerService["getRenderUnitById"](var_core_value_sig8986.unitId)) == null ? undefined : var_core_value_sigCAF7.scene,
      var_core_value_sig2CD3 = var_core_value_sig934F(var_core_value_sig8986.unitId, var_core_value_sig8986.subUnitId, var_core_value_sig8986.drawingId);
    return (var_core_value_sig726E == null || (var_core_value_sigED1C = var_core_value_sig726E.getObjectIncludeInGroup) == null ? undefined : var_core_value_sigED1C.call(var_core_value_sig726E, var_core_value_sig2CD3)) ?? (var_core_value_sig726E == null ? undefined : var_core_value_sig726E.getObject(var_core_value_sig2CD3)) ?? null;
  }
  _requestChartCanvasRender(var_core_value_sig038E) {
    var var_core_value_sigAA1E, var_core_value_sigC9F5;
    let var_core_value_sig7EEA = this._hostContextMap["get"](var_core_value_sig038E);
    if (!var_core_value_sig7EEA) return;
    this._forEachHostContext(var_core_value_sig038E, var_core_value_sigC259 => {
      var var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0;
      (var_core_value_sig9C9F = var_core_value_sigC259.imageObject) == null || (var_core_value_sigFDEA = var_core_value_sig9C9F.makeDirty) == null || var_core_value_sigFDEA.call(var_core_value_sig9C9F, true), (var_core_value_sig86D0 = var_core_value_sigC259.requestRender) == null || var_core_value_sig86D0.call(var_core_value_sigC259);
    });
    let var_core_value_sig59CE1 = (var_core_value_sigAA1E = this._renderManagerService["getRenderUnitById"](var_core_value_sig7EEA.unitId)) == null ? undefined : var_core_value_sigAA1E.scene,
      var_core_value_sig33C8 = this._getChartRenderObject(var_core_value_sig7EEA);
    var_core_value_sig33C8 == null || (var_core_value_sigC9F5 = var_core_value_sig33C8.makeDirty) == null || var_core_value_sigC9F5.call(var_core_value_sig33C8, true), var_core_value_sig59CE1 == null || var_core_value_sig59CE1.makeDirty(true), var_core_value_sig59CE1 == null || var_core_value_sig59CE1.render();
  }
  _forEachHostContext(var_core_value_sig957F, var_core_value_sig803B) {
    var var_core_value_sig5830;
    (var_core_value_sig5830 = this._hostContextRegistrationMap["get"](var_core_value_sig957F)) == null || var_core_value_sig5830.forEach(({
      context: var_core_value_sig4CD2
    }) => var_core_value_sig803B(var_core_value_sig4CD2));
  }
  _selectHostContext(var_core_value_sig4A7C) {
    let var_core_value_sigF975 = Array.from(var_core_value_sig4A7C.values(), ({
      context: var_core_value_sig48CA
    }) => var_core_value_sig48CA);
    return var_core_value_sigF975.find(var_core_value_sig50AF => var_core_value_sig50AF.sceneType == null || var_core_value_sig50AF.sceneType === var_core_value_sigA790.EDIT) ?? var_core_value_sigF975.find(var_core_value_sigA942 => var_core_value_sigA942.sceneType === var_core_value_sigA790.PRESENTATION) ?? var_core_value_sigF975[var_core_value_sigF975.length - 1];
  }
  _getHostRegistrationKey(var_core_value_sigCDAF) {
    return [var_core_value_sigCDAF.unitId, var_core_value_sigCDAF.subUnitId, var_core_value_sigCDAF.drawingId, var_core_value_sigCDAF.sceneType ?? var_core_value_sigA790.EDIT].join("::");
  }
  _commitImageDataUrl(var_core_value_sigA298, var_core_value_sig0B40) {
    this._lastImageDataUrlMap["set"](var_core_value_sigA298, var_core_value_sig0B40), this._forEachHostContext(var_core_value_sigA298, var_core_value_sigA621 => {
      var var_core_value_sigBBFF;
      (var_core_value_sigBBFF = var_core_value_sigA621.imageObject) == null || var_core_value_sigBBFF.changeChartSource(var_core_value_sig0B40);
    }), this._imageUpdated$["next"](var_core_value_sigA298), this._requestChartCanvasRender(var_core_value_sigA298), this._releaseDetachedThumbnailContexts(var_core_value_sigA298);
  }
  _releaseDetachedThumbnailContexts(var_core_value_sig330B) {
    let var_core_value_sig3625 = this._hostContextRegistrationMap["get"](var_core_value_sig330B);
    if (var_core_value_sig3625 == null || var_core_value_sig3625.forEach((var_core_value_sig8889, var_core_value_sig32F8) => {
      var_core_value_sig8889.detached && var_core_value_sig3625.delete(var_core_value_sig32F8);
    }), !(var_core_value_sig3625 != null && var_core_value_sig3625.size)) {
      this._hostContextMap["delete"](var_core_value_sig330B), this._hostContextRegistrationMap["delete"](var_core_value_sig330B), this.removeHost(var_core_value_sig330B);
      return;
    }
    this._hostContextMap["set"](var_core_value_sig330B, this._selectHostContext(var_core_value_sig3625)), this.syncHostLayout(var_core_value_sig330B);
  }
  dispose() {
    this._disposed || (this._domHostMap["forEach"](var_core_value_sig5B67 => var_core_value_sig5B67.dispose()), this._domHostMap["clear"](), this._hostLayoutSubscriptions["forEach"](var_core_value_sig1758 => {
      var_core_value_sig1758.forEach(var_core_value_sigC9E0 => var_core_value_sigC9E0.dispose());
    }), this._hostLayoutSubscriptions["clear"](), this._runtimeRenderSubscriptions["forEach"](var_core_value_sig4805 => var_core_value_sig4805.dispose()), this._runtimeRenderSubscriptions["clear"](), this._renderQueueMap["clear"](), this._renderRequestTokenMap["clear"](), this._dataUpdateAnimationTimers["forEach"](var_core_value_sigE67E => clearTimeout(var_core_value_sigE67E)), this._dataUpdateAnimationTimers["clear"](), this._dataUpdateAnimationChartIds["clear"](), this._pendingDataUpdateChartIds["clear"](), this._dataUpdateEpochMap["clear"](), this._domReadyChartIds["clear"](), this._hostContextMap["clear"](), this._hostContextRegistrationMap["clear"](), this._lastImageDataUrlMap["clear"](), this._removeHost$["complete"](), this._imageUpdated$["complete"](), this._domReadyChanged$["complete"](), this._layoutChanged$["complete"](), super.dispose());
  }
};
Q = W([U(0, var_core_value_sig74A7), U(1, var_core_value_sig8A26(var_core_value_sigF631)), U(2, var_core_value_sig8A26(var_core_value_sig4494)), U(3, var_core_value_sig8A26(Z)), U(4, var_core_value_sig8A26(Xn))], Q);
const sr = "slides-chart-element-float-menu";
let cr = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sig0B4E, var_core_value_sig0E9F, var_core_value_sigE5BA, var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4, var_core_value_sigB6F7, var_core_value_sigB495, var_core_value_sig70D0, var_core_value_sig2A8A) {
    super(), this._chartModelService = var_core_value_sig0B4E, this._editSessionService = var_core_value_sig0E9F, this._chartRenderService = var_core_value_sigE5BA, this._chartHostProvider = var_core_value_sig4A83, this._slideCanvasPopManagerService = var_core_value_sig58AA, this._chartUIService = var_core_value_sig84C4, this._adapterRegistry = var_core_value_sigB6F7, this._commandService = var_core_value_sigB495, this._univerInstanceService = var_core_value_sig70D0, this._injector = var_core_value_sig2A8A, H(this, "_popupDisposable", null), H(this, "_popupChartId", null), H(this, "_popupSessionKey", null), this._registerAdapter(), this._subscribeChartEvents();
  }
  dispose() {
    this._closePopup(), super.dispose();
  }
  _registerAdapter() {
    let var_core_value_sig3782 = var_core_value_sig20BE({
      chartUIService: this._chartUIService,
      getHostAdapter: var_core_value_sig2902 => {
        this._setActiveChart(var_core_value_sig2902.chartId);
        let var_core_value_sig9989 = this._chartModelService["getChartModel"](var_core_value_sig2902.unitId, var_core_value_sig2902.chartId),
          var_core_value_sig698E = this._univerInstanceService["getUnit"](var_core_value_sig2902.unitId, var_core_value_sig1E74.UNIVER_SLIDE);
        if (!(!var_core_value_sig9989 || !var_core_value_sig698E || !var_core_value_sig2902.subUnitId || !var_core_value_sig2902.drawingId)) return new var_core_value_sig1FCC(var_core_value_sig9989.model, new var_core_value_sig5F50({
          unitId: var_core_value_sig2902.unitId,
          subUnitId: var_core_value_sig2902.subUnitId,
          chartId: var_core_value_sig2902.chartId,
          elementId: var_core_value_sig2902.drawingId,
          slideModel: var_core_value_sig698E,
          injector: this._injector
        }));
      },
      close: () => this._closePopup(),
      openFullPanel: var_core_value_sig2809 => {
        let {
            unitId: var_core_value_sig2DAB,
            subUnitId: var_core_value_sig877E,
            drawingId: var_core_value_sig20C8,
            chartId: var_core_value_sigE9A7
          } = var_core_value_sig2809,
          var_core_value_sigBECE = var_core_value_sig6DF7(var_core_value_sig2809.target);
        this._commandService["executeCommand"](B.id, {
          unitId: var_core_value_sig2DAB,
          subUnitId: var_core_value_sig877E ?? "",
          drawingId: var_core_value_sig20C8 ?? var_core_value_sigE9A7,
          ...(var_core_value_sigBECE ? {
            route: var_core_value_sigBECE
          } : {})
        });
      }
    });
    this.disposeWithMe(this._adapterRegistry["register"](sr, var_core_value_sig3782));
  }
  _subscribeChartEvents() {
    this.disposeWithMe(var_core_value_sig983D(this._chartModelService["chartModelAdded$"].subscribe(var_core_value_sig1B22 => {
      let var_core_value_sig7F72 = new var_core_value_sigEEEF();
      var_core_value_sig7F72.add(this._chartRenderService["on"](var_core_value_sig1B22.chartId, "click", var_core_value_sig76BA => {
        this._openFloatMenu(var_core_value_sig1B22.chartId, var_core_value_sig76BA);
      })), var_core_value_sig1B22.model["onDispose"](() => {
        var_core_value_sig7F72.dispose(), this._clearSelectedTarget(var_core_value_sig1B22.chartId);
      }), this.disposeWithMe(var_core_value_sig7F72);
    }))), this.disposeWithMe(var_core_value_sig983D(this._chartUIService["activeEditChart$"].subscribe(var_core_value_sig7B2A => {
      (!var_core_value_sig7B2A || this._popupChartId && var_core_value_sig7B2A !== this._popupChartId) && this._closePopup();
    }))), this.disposeWithMe(var_core_value_sig983D(this._editSessionService["activeSession$"].subscribe(var_core_value_sig06CD => {
      (!var_core_value_sig06CD || this._popupChartId && var_core_value_sig06CD.chartId !== this._popupChartId) && this._closePopup();
    }))), this.disposeWithMe(var_core_value_sig983D(this._chartHostProvider["removeHost$"].subscribe(var_core_value_sigA5F1 => {
      this._clearSelectedTarget(var_core_value_sigA5F1);
    }))), this.disposeWithMe(var_core_value_sig983D(this._chartHostProvider["layoutChanged$"].subscribe(var_core_value_sig97A2 => {
      this._popupChartId === var_core_value_sig97A2 && this._closePopup();
    })));
  }
  _setActiveChart(var_core_value_sigD22E) {
    let var_core_value_sig3455 = this._chartHostProvider["getHostContext"](var_core_value_sigD22E),
      var_core_value_sig5CEF = var_core_value_sig3455 ? this._chartModelService["getChartModel"](var_core_value_sig3455.unitId, var_core_value_sigD22E) : undefined;
    var_core_value_sig5CEF && this._chartModelService["setActiveChartRuntime"](var_core_value_sig5CEF);
  }
  _openFloatMenu(var_core_value_sig43D5, var_core_value_sig1395) {
    var var_core_value_sig9FA0;
    if (!this._editSessionService["isActive"](var_core_value_sig43D5)) return;
    let var_core_value_sig055E = this._chartHostProvider["getHostContext"](var_core_value_sig43D5),
      var_core_value_sig7C77 = var_core_value_sig055E ? this._chartModelService["getChartModel"](var_core_value_sig055E.unitId, var_core_value_sig43D5) : undefined,
      var_core_value_sig9578 = var_core_value_sig7C77 ? var_core_value_sigB411(var_core_value_sig7C77.model, var_core_value_sig1395.hit) : undefined;
    if (!var_core_value_sig055E || !var_core_value_sig7C77 || !var_core_value_sig9578) {
      this._chartUIService["setSelectedElement"](null), this._chartUIService["clearPanelRoute"](), this._closePopup();
      return;
    }
    let var_core_value_sigA2D3 = var_core_value_sig6DF7(var_core_value_sig9578.target);
    if (!var_core_value_sigA2D3) {
      this._chartUIService["setSelectedElement"](null), this._chartUIService["clearPanelRoute"](), this._closePopup();
      return;
    }
    let var_core_value_sigC218 = JSON.stringify([var_core_value_sig055E.unitId, var_core_value_sig055E.subUnitId, var_core_value_sig055E.drawingId, var_core_value_sig43D5, var_core_value_sig9578.target]);
    if (this._popupDisposable && this._popupSessionKey === var_core_value_sigC218 || (this._chartModelService["setActiveChartRuntime"](var_core_value_sig7C77), this._chartUIService["setSelectedElement"]({
      chartId: var_core_value_sig43D5,
      element: var_core_value_sig1395.hit,
      target: var_core_value_sig9578.target,
      route: var_core_value_sigA2D3
    }), this._chartUIService["setPanelRoute"](var_core_value_sig43D5, var_core_value_sigA2D3), this._closePopup(), !var_core_value_sig9578.showFloatMenu)) return;
    let var_core_value_sigADEC = this._chartHostProvider["getClientRect"](var_core_value_sig43D5, ((var_core_value_sig9FA0 = var_core_value_sig1395.hit["overlay"]) == null ? undefined : var_core_value_sig9FA0.bounds) ?? var_core_value_sig1395.hit["bounds"]) ?? this._chartHostProvider["getClientRect"](var_core_value_sig43D5);
    if (!var_core_value_sigADEC) return;
    let var_core_value_sig3D8E = this._slideCanvasPopManagerService["attachPopupToClientRect"](var_core_value_sig055E.unitId, var_core_value_sig055E.subUnitId, var_core_value_sigADEC, {
      componentKey: var_core_value_sigCF96,
      direction: "top-center",
      offset: var_core_value_sigC4E9,
      extraProps: {
        unitId: var_core_value_sig055E.unitId,
        subUnitId: var_core_value_sig055E.subUnitId,
        chartId: var_core_value_sig43D5,
        drawingId: var_core_value_sig055E.drawingId,
        element: var_core_value_sig1395.hit,
        target: var_core_value_sig9578.target,
        adapterKey: sr
      }
    });
    var_core_value_sig3D8E && (this._popupDisposable = var_core_value_sig3D8E, this._popupChartId = var_core_value_sig43D5, this._popupSessionKey = var_core_value_sigC218);
  }
  _closePopup() {
    var var_core_value_sig37E5;
    (var_core_value_sig37E5 = this._popupDisposable) == null || var_core_value_sig37E5.dispose(), this._popupDisposable = null, this._popupChartId = null, this._popupSessionKey = null;
  }
  _clearSelectedTarget(var_core_value_sigF079) {
    !this._chartUIService["isElementEditModeActive"](var_core_value_sigF079) && this._popupChartId !== var_core_value_sigF079 || (this._chartUIService["setSelectedElement"](null), this._chartUIService["clearPanelRoute"](), this._popupChartId === var_core_value_sigF079 && this._closePopup());
  }
};
cr = W([U(0, var_core_value_sig8A26(var_core_value_sig4494)), U(1, var_core_value_sig8A26(X)), U(2, var_core_value_sig8A26(Z)), U(3, var_core_value_sig8A26(Q)), U(4, var_core_value_sig8A26(var_core_value_sig9E81)), U(5, G), U(6, var_core_value_sig8A26(var_core_value_sig6217)), U(7, var_core_value_sig9A01), U(8, var_core_value_sigC8F6), U(9, var_core_value_sig8A26(var_core_value_sigD073))], cr);
let lr = class extends var_core_value_sigBF1C {
  constructor(var_core_value_sigFCA0, var_core_value_sigC84D) {
    super(), this._renderService = var_core_value_sigC84D, this.disposeWithMe(var_core_value_sigFCA0.register(this));
  }
  supports(var_core_value_sigF2BC) {
    return "getPlaceholder" in var_core_value_sigF2BC;
  }
  exportImage(var_core_value_sigD37B, var_core_value_sigFA28) {
    return this._renderService["exportImage"](var_core_value_sigD37B.getId(), var_core_value_sigFA28);
  }
};
lr = W([U(0, var_core_value_sig8A26(var_core_value_sigB7F9)), U(1, var_core_value_sig8A26(Z))], lr);
function ur(var_core_value_sig2DBD) {
  return var_core_value_sig2DBD.type === var_core_value_sigF64A.Chart;
}
let dr = class {
  constructor(var_core_value_sig93BE) {
    this._resourceService = var_core_value_sig93BE, H(this, "key", "slide-chart");
  }
  collect(var_core_value_sigABEC) {
    let var_core_value_sig2712 = {},
      var_core_value_sig0B9E = {},
      var_core_value_sigC545 = {};
    return var_core_value_sigABEC.elements["forEach"](var_core_value_sig07E9 => {
      if (!ur(var_core_value_sig07E9)) return;
      let var_core_value_sig4F59 = this._resourceService["getChart"](var_core_value_sigABEC.unitId, var_core_value_sig07E9.chartId),
        var_core_value_sigF564 = var_core_value_sig4F59 ? this._resourceService["getDataSource"](var_core_value_sigABEC.unitId, var_core_value_sig4F59.dataSourceId) : undefined;
      !var_core_value_sig4F59 || !var_core_value_sigF564 || (var_core_value_sig2712[var_core_value_sig4F59.id] = var_core_value_sig52F1.deepClone(var_core_value_sig4F59), var_core_value_sig0B9E[var_core_value_sigF564.id] = var_core_value_sigF564, var_core_value_sigC545[var_core_value_sig07E9.id] = var_core_value_sig4F59.id);
    }), Object.keys(var_core_value_sig2712).length === 0 ? null : {
      charts: var_core_value_sig2712,
      dataSources: var_core_value_sig0B9E,
      chartIdByElementId: var_core_value_sigC545
    };
  }
  preparePaste(var_core_value_sig12A7) {
    if (!fr(var_core_value_sig12A7.payload)) return null;
    let var_core_value_sig6F4E = var_core_value_sig12A7.payload,
      var_core_value_sigA021 = new Map();
    var_core_value_sig12A7.elementIdMap["forEach"]((var_core_value_sig8CFA, var_core_value_sig2E11) => var_core_value_sigA021.set(var_core_value_sig8CFA, var_core_value_sig2E11));
    let var_core_value_sig49D9 = new Map(),
      var_core_value_sig320C = new Map(),
      var_core_value_sigE7F0 = var_core_value_sig12A7.elements["map"](var_core_value_sig5B69 => {
        if (!ur(var_core_value_sig5B69)) return var_core_value_sig5B69;
        let var_core_value_sigB098 = var_core_value_sigA021.get(var_core_value_sig5B69.id),
          var_core_value_sigCE71 = var_core_value_sigB098 ? var_core_value_sig6F4E.chartIdByElementId[var_core_value_sigB098] : undefined;
        if (!var_core_value_sigCE71 || !var_core_value_sig6F4E.charts[var_core_value_sigCE71]) return var_core_value_sig5B69;
        let var_core_value_sig21D8 = var_core_value_sig49D9.get(var_core_value_sigCE71);
        return var_core_value_sig21D8 || (var_core_value_sig21D8 = var_core_value_sig133B(6), var_core_value_sig49D9.set(var_core_value_sigCE71, var_core_value_sig21D8)), {
          ...var_core_value_sig5B69,
          chartId: var_core_value_sig21D8
        };
      });
    var_core_value_sig49D9.forEach((var_core_value_sig2B65, var_core_value_sigD7EA) => {
      var var_core_value_sigB33B;
      let var_core_value_sig24B9 = (var_core_value_sigB33B = var_core_value_sig6F4E.charts[var_core_value_sigD7EA]) == null ? undefined : var_core_value_sigB33B.dataSourceId;
      var_core_value_sig24B9 && !var_core_value_sig320C.has(var_core_value_sig24B9) && var_core_value_sig320C.set(var_core_value_sig24B9, var_core_value_sig133B(6));
    });
    let var_core_value_sigE837 = [];
    var_core_value_sig320C.forEach((var_core_value_sigE627, var_core_value_sigEF3E) => {
      let var_core_value_sig273D = var_core_value_sig6F4E.dataSources[var_core_value_sigEF3E];
      var_core_value_sig273D && var_core_value_sigE837.push({
        ...var_core_value_sig273D,
        id: var_core_value_sigE627
      });
    });
    let var_core_value_sig34F4 = [];
    return var_core_value_sig49D9.forEach((var_core_value_sig9A0D, var_core_value_sigA319) => {
      let var_core_value_sig2D58 = var_core_value_sig6F4E.charts[var_core_value_sigA319],
        var_core_value_sig223F = var_core_value_sig2D58 ? var_core_value_sig320C.get(var_core_value_sig2D58.dataSourceId) : undefined;
      var_core_value_sig2D58 && var_core_value_sig223F && var_core_value_sig34F4.push({
        ...var_core_value_sig2D58,
        id: var_core_value_sig9A0D,
        dataSourceId: var_core_value_sig223F
      });
    }), var_core_value_sig34F4.length === 0 ? null : {
      elements: var_core_value_sigE7F0,
      redoMutations: [...var_core_value_sigE837.map(var_core_value_sigD749 => ({
        id: var_core_value_sigE4E4.id,
        params: {
          unitId: var_core_value_sig12A7.targetUnitId,
          dataSource: var_core_value_sigD749
        }
      })), ...var_core_value_sig34F4.map(var_core_value_sigCFFA => ({
        id: var_core_value_sigA4B0.id,
        params: {
          unitId: var_core_value_sig12A7.targetUnitId,
          chart: var_core_value_sigCFFA
        }
      }))],
      undoMutations: [...var_core_value_sig34F4.map(var_core_value_sig58C1 => ({
        id: var_core_value_sig992D.id,
        params: {
          unitId: var_core_value_sig12A7.targetUnitId,
          chartId: var_core_value_sig58C1.id
        }
      })), ...var_core_value_sigE837.map(var_core_value_sig5090 => ({
        id: var_core_value_sig3C75.id,
        params: {
          unitId: var_core_value_sig12A7.targetUnitId,
          dataSourceId: var_core_value_sig5090.id
        }
      }))]
    };
  }
};
dr = W([U(0, var_core_value_sig8A26(var_core_value_sigFFAF))], dr);
function fr(var_core_value_sig424E) {
  if (!var_core_value_sig424E || typeof var_core_value_sig424E != "object") return false;
  let var_core_value_sigF481 = var_core_value_sig424E;
  return !!var_core_value_sigF481.charts && !!var_core_value_sigF481.dataSources && !!var_core_value_sigF481.chartIdByElementId;
}
function pr(var_core_value_sigD7F2) {
  switch (var_core_value_sigD7F2) {
    case var_core_value_sig5C7C.RoundDot:
      return [1, 2];
    case var_core_value_sig5C7C.SquareDot:
      return [1, 3];
    case var_core_value_sig5C7C.Dash:
      return [4, 2];
    case var_core_value_sig5C7C.DashDot:
      return [4, 2, 1, 2];
    case var_core_value_sig5C7C.LongDash:
      return [8, 2];
    case var_core_value_sig5C7C.LongDashDot:
      return [8, 2, 1, 2];
    case var_core_value_sig5C7C.LongDashDotDot:
      return [8, 2, 1, 2, 1, 2];
    default:
      return [];
  }
}
function mr(var_core_value_sig7CF3) {
  switch (var_core_value_sig7CF3) {
    case var_core_value_sig431B.Round:
      return "round";
    case var_core_value_sig431B.Square:
      return "square";
    default:
      return "butt";
  }
}
function hr(var_core_value_sig9DC6) {
  switch (var_core_value_sig9DC6) {
    case var_core_value_sig87E2.Round:
      return "round";
    case var_core_value_sig87E2.Bevel:
      return "bevel";
    default:
      return "miter";
  }
}
var gr = class extends var_core_value_sigA975 {
  constructor(var_core_value_sigA45D, var_core_value_sig1BC7) {
    super(var_core_value_sigA45D, var_core_value_sig1BC7), H(this, "_chartStroke", undefined), H(this, "_hideImage", false), this._attachNativeLoadHandlers(var_core_value_sig1BC7.success, var_core_value_sig1BC7.fail);
  }
  setChartStroke(var_core_value_sig4956) {
    this._chartStroke = var_core_value_sig4956, this.makeDirty(true);
  }
  setImageHidden(var_core_value_sigCC9E) {
    this._hideImage !== var_core_value_sigCC9E && (this._hideImage = var_core_value_sigCC9E, this.makeDirty(true), this._notifyScene());
  }
  changeChartSource(var_core_value_sig444C) {
    this._native ?? (this._native = document.createElement("img"), this._native["crossOrigin"] = "anonymous"), this._attachNativeLoadHandlers(), this._native["src"] = var_core_value_sig444C;
  }
  _draw(var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321, var_core_value_sigBF4C) {
    this._hideImage || super._draw(var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321, var_core_value_sigBF4C), this._drawChartStroke(var_core_value_sigE42E, var_core_value_sigA321 ?? this.width, var_core_value_sigBF4C ?? this.height);
  }
  _drawChartStroke(var_core_value_sig3457, var_core_value_sig4A08, var_core_value_sig1BC4) {
    let var_core_value_sig9EAB = this._chartStroke,
      var_core_value_sigA5C3 = (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.width) ?? 0;
    if (!rr(var_core_value_sig9EAB)) return;
    var_core_value_sig3457.save(), var_core_value_sig3457.beginPath(), var_core_value_sig3457.lineWidth = var_core_value_sigA5C3, var_core_value_sig3457.strokeStyle = var_core_value_sig9EAB.color, var_core_value_sig3457.lineCap = mr(var_core_value_sig9EAB.capType), var_core_value_sig3457.lineJoin = hr(var_core_value_sig9EAB.lineJoinType), var_core_value_sig3457.setLineDash(pr(var_core_value_sig9EAB.dashType)), var_core_value_sig3457.globalAlpha *= var_core_value_sig9EAB.opacity ?? 1;
    let var_core_value_sig3A1E = var_core_value_sigA5C3 / 2;
    var_core_value_sig3457.rect(-var_core_value_sig4A08 / 2 + var_core_value_sig3A1E, -var_core_value_sig1BC4 / 2 + var_core_value_sig3A1E, Math.max(0, var_core_value_sig4A08 - var_core_value_sigA5C3), Math.max(0, var_core_value_sig1BC4 - var_core_value_sigA5C3)), var_core_value_sig3457.stroke(), var_core_value_sig3457.restore();
  }
  _notifyScene() {
    var var_core_value_sigDC92;
    let var_core_value_sig3515 = (var_core_value_sigDC92 = this.getEngine()) == null ? undefined : var_core_value_sigDC92.activeScene;
    var_core_value_sig3515 && (var_core_value_sig3515.makeDirty(true), var_core_value_sig3515.render(), var_core_value_sig3515.onFileLoaded$["emitEvent"](this.oKey));
  }
  _attachNativeLoadHandlers(var_core_value_sigC2A0, var_core_value_sig7C65) {
    this._native && (this._native["onload"] = () => {
      var_core_value_sigC2A0 == null || var_core_value_sigC2A0(), this._notifyScene();
    }, this._native["onerror"] = () => {
      var_core_value_sig7C65 == null || var_core_value_sig7C65(), this._notifyScene();
    });
  }
};
let _r = class extends var_core_value_sig8507 {
  constructor(var_core_value_sig7F05) {
    super(), this._hostProvider = var_core_value_sig7F05, H(this, "zIndex", 55);
  }
  check(var_core_value_sig41F3) {
    return var_core_value_sig41F3.element["type"] === var_core_value_sigF64A.Chart;
  }
  convert(var_core_value_sigF455, var_core_value_sig6E78) {
    if (var_core_value_sigF455.hidden || var_core_value_sigF455.element["type"] !== var_core_value_sigF64A.Chart) return null;
    let var_core_value_sigB3EE = var_core_value_sigF455.element,
      var_core_value_sigC50A = var_core_value_sigB3EE.transform,
      var_core_value_sig11D0 = Math.max(1, var_core_value_sigC50A.width ?? 0),
      var_core_value_sigB8ED = Math.max(1, var_core_value_sigC50A.height ?? 0),
      var_core_value_sig8EAE = new gr("slide-drawing-" + var_core_value_sig6E78.unitId + "-" + var_core_value_sig6E78.subUnitId + "-" + var_core_value_sigF455.drawingId, {
        url: this._hostProvider["getImageDataUrl"](var_core_value_sigB3EE.chartId) ?? "data:image/svg+xml;charset=utf-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20100%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%22159%22%20height%3D%2299%22%20rx%3D%225%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%2394a3b8%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M26%2070V47M52%2070V32M78%2070V55M104%2070V40M130%2070V25%22%20stroke%3D%22%232563eb%22%20stroke-width%3D%227%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20%2076H140%22%20stroke%3D%22%23cbd5e1%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A",
        left: var_core_value_sig6E78.pageOffsetLeft + (var_core_value_sigC50A.left ?? 0),
        top: var_core_value_sig6E78.pageOffsetTop + (var_core_value_sigC50A.top ?? 0),
        width: var_core_value_sig11D0,
        height: var_core_value_sigB8ED,
        angle: var_core_value_sigC50A.rotation ?? 0,
        flipX: var_core_value_sigC50A.flipX,
        flipY: var_core_value_sigC50A.flipY,
        skewX: var_core_value_sigC50A.skewX,
        skewY: var_core_value_sigC50A.skewY,
        zIndex: var_core_value_sig6E78.orderIndex,
        visible: !var_core_value_sigF455.hidden,
        evented: true,
        forceRender: true
      });
    var_core_value_sig8EAE.setChartStroke(var_core_value_sigB3EE.stroke);
    let var_core_value_sig1CDD = (var_core_value_sig6E78.sceneType ?? var_core_value_sigA790.EDIT) === var_core_value_sigA790.EDIT,
      var_core_value_sig0DB1 = this._hostProvider["registerHostContext"]({
        unitId: var_core_value_sig6E78.unitId,
        subUnitId: var_core_value_sig6E78.subUnitId,
        drawingId: var_core_value_sigF455.drawingId,
        chartId: var_core_value_sigB3EE.chartId,
        width: var_core_value_sig11D0,
        height: var_core_value_sigB8ED,
        drawing: var_core_value_sigF455,
        stroke: var_core_value_sigB3EE.stroke,
        imageObject: var_core_value_sig8EAE,
        sceneType: var_core_value_sig6E78.sceneType,
        requestRender: var_core_value_sig6E78.requestRender
      });
    var_core_value_sig8EAE.setImageHidden(var_core_value_sig1CDD && this._hostProvider["isDomReady"](var_core_value_sigB3EE.chartId));
    let var_core_value_sig68A2 = this._hostProvider["imageUpdated$"].subscribe(var_core_value_sigC368 => {
        var_core_value_sigC368 === var_core_value_sigB3EE.chartId && var_core_value_sig8EAE.setImageHidden(var_core_value_sig1CDD && this._hostProvider["isDomReady"](var_core_value_sigB3EE.chartId));
      }),
      var_core_value_sigCC17 = this._hostProvider["domReadyChanged$"].subscribe(var_core_value_sigAD56 => {
        var_core_value_sigAD56 === var_core_value_sigB3EE.chartId && var_core_value_sig8EAE.setImageHidden(var_core_value_sig1CDD && this._hostProvider["isDomReady"](var_core_value_sigB3EE.chartId));
      });
    return var_core_value_sig8EAE.onDispose$["subscribeEvent"](() => {
      var_core_value_sig0DB1 == null || var_core_value_sig0DB1.dispose(), var_core_value_sig68A2 == null || var_core_value_sig68A2.unsubscribe(), var_core_value_sigCC17 == null || var_core_value_sigCC17.unsubscribe();
    }), var_core_value_sig8EAE;
  }
};
_r = W([U(0, var_core_value_sig8A26(Q))], _r);
let $ = class extends var_core_value_sig2278 {
  constructor(var_core_value_sig32AE = Gn, var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE, var_core_value_sigF79F) {
    super(), this._config = var_core_value_sig32AE, this._injector = var_core_value_sigC753, this._configService = var_core_value_sigFFD1, this._renderManagerService = var_core_value_sig81AE, this._commandService = var_core_value_sigF79F;
    let {
      ...var_core_value_sig0E54
    } = var_core_value_sig69B8({}, Gn, this._config);
    this._configService["setConfig"](Wn, var_core_value_sig0E54), this._initCommands();
  }
  onStarting() {
    let var_core_value_sig3B17 = this._injector;
    this.disposeWithMe(var_core_value_sig3B17.get(var_core_value_sig1263).register(_r)), [[tr], [Xn], [X], [Q], [Z], [lr], [J], [dr], [Y], [G, {
      useClass: An
    }], [cr], [Yn], [Qn]].forEach(var_core_value_sigDB4A => var_core_value_sig3B17.add(var_core_value_sigDB4A)), var_core_value_sig9A03(var_core_value_sig3B17, [[Xn], [X], [Q], [Z], [lr], [J], [dr], [Y], [G]]), this._injector["get"](tr), this.disposeWithMe(var_core_value_sig3B17.get(var_core_value_sig0A5A).registerAdapter(var_core_value_sig3B17.get(dr)));
  }
  onReady() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](var_core_value_sig1E74.UNIVER_SLIDE, nr)), this._injector["get"](Yn), this._injector["get"](cr), this._injector["get"](Qn);
  }
  _initCommands() {
    [B, xn, Sn, Cn].forEach(var_core_value_sig6418 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig6418));
    });
  }
};
H($, "type", var_core_value_sig1E74.UNIVER_SLIDE), H($, "pluginName", "UniverSlideChartUIPlugin"), H($, "packageName", $n), H($, "version", er), $ = W([var_core_value_sig4124(var_core_value_sig86D7, var_core_value_sig3685, var_core_value_sig478B, var_core_value_sigE120, var_core_value_sig9A5E, var_core_value_sigA4E6), U(1, var_core_value_sig8A26(var_core_value_sigD073)), U(2, var_core_value_sig674F), U(3, var_core_value_sig74A7), U(4, var_core_value_sig9A01)], $);
export { xn as CloseSlideChartPanelOperation, G as ISlideChartUIService, Sn as OpenSlideChartDataEditorOperation, B as OpenSlideChartPanelOperation, Wn as SLIDES_CHART_UI_PLUGIN_CONFIG_KEY, wn as SLIDE_CHART_DATA_EDITOR_COMPONENT, Tn as SLIDE_CHART_DATA_EDITOR_DIALOG_ID, K as SLIDE_CHART_EDIT_PANEL_COMPONENT, Vn as SLIDE_CHART_INSERT_PANEL_COMPONENT, Yn as SlideChartContextMenuController, Y as SlideChartDataEditService, Dn as SlideChartDataEditor, En as SlideChartDataEditorSubmitMode, Rn as SlideChartEditPanel, Un as SlideChartInsertPanel, J as SlideChartInsertService, _r as SlideChartObjectAdaptor, Z as SlideChartRenderService, Qn as SlideChartUIController, An as SlideChartUIService, qn as SlideContextMenuOpenChartPanelFactory, Cn as SlideContextMenuOpenChartPanelOperation, $ as UniverSlidesChartUIPlugin, Jn as slideChartContextMenuSchema };
