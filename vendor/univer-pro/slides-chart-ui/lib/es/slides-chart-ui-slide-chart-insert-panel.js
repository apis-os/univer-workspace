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
import { J } from "./slides-chart-ui-slide-chart-insert.js";
import { Hn } from "./slides-chart-ui-slide-chart-insert-panel-component.js";
function Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 = useDependency(J),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289 = useDependency(LocaleService),
    {
      defaultChartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = ChartTypeBits.Column,
      defaultTableText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 = Hn,
      insertOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
      onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291,
      onInserted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = useMemo(() => buildChartTypeSelectOptions(CHART_TYPE_CATALOG.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.chartTypes." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.labelId)
    }))), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297] = useState(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.chartType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 => createChartInlineStarterData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, {
      candlestickClose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.candlestick.close"),
      candlestickHigh: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.candlestick.high"),
      candlestickLow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.candlestick.low"),
      candlestickOpen: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.candlestick.open"),
      category: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.category"),
      chordSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.chord.source"),
      chordTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.chord.target"),
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.label"),
      sunburstHierarchy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.sunburst.hierarchy"),
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.value"),
      valueField: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.valueField")
    }),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302] = useState(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.defaultTableText === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293) ?? parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294) : parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294)),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304] = useState("inline"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308] = useState([]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310] = useState(null),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
      [InlineChartCreationIssueCode.UnknownOption]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.insertChartFailed"),
      [InlineChartCreationIssueCode.EmptyData]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.tableDataEmpty"),
      [InlineChartCreationIssueCode.InvalidCandlestickData]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.candlestick.columnsError")
    };
  return jsxs("div", {
    className: "univer-flex univer-w-full univer-flex-col univer-gap-4",
    children: [jsxs("div", {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      children: [jsx("div", {
        className: "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.chartType")
      }), jsx(Select, {
        className: "univer-w-full\x20!univer-min-w-0",
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296,
        options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344);
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.chartType) ?? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346);
        }
      })]
    }), jsx(ChartReferencedDataSourceEditor, {
      mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
      inlineContent: jsx(ChartInlineTableEditor, {
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
        minColumns: getChartInlineTableMinColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299),
        parsePastedText: parseInlineChartTable,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302
      }),
      onModeChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308([]);
      },
      onPreviewChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.status === ChartDataSourceRuntimeStatus.READY && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.values ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306({
          source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617]))) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308([]));
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 && jsx("div", {
      className: "univer-text-xs univer-text-red-600 dark:!univer-text-red-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309
    }), jsxs("div", {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 && jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.cancel")
      }), jsx(Button, {
        type: "button",
        variant: "primary",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 = tryBuildInlineChartCreationPlan({
            optionId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296,
            values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301
          });
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.ok) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.issue["code"]]);
            return;
          }
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 === "referenced" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305 ? {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
              dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305
            } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.plan["style"] ? {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8,
              style: {
                ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 == null ? undefined : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.style),
                pie: {
                  ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.pie),
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.plan["style"].pie
                }
              }
            } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8;
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.plan["values"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.plan["chartType"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9)) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.insertChartFailed"));
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292();
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.t("slides-chart-ui.common.insert")
      })]
    })]
  });
}
export { Un as SlideChartInsertPanel };
