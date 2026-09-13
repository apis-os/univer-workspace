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
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 = useDependency(LocaleService),
    {
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999,
      onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001,
      onSubmit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004] = useState(() => isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.dataSource) ? "referenced" : "inline"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008] = useState(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635])),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = compactInlineTableValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.length === 0) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.t("docs-chart-ui.common.tableDataEmpty"));
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251);
    };
  return jsxs("div", {
    className: "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-col univer-gap-4",
    children: [jsx("div", {
      className: "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-overscroll-contain univer-pr-1",
      children: jsx(ChartReferencedDataSourceEditor, {
        mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003,
        initialSource: isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.dataSource) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.dataSource["source"] : undefined,
        inlineContent: jsx(ChartInlineTableEditor, {
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007,
          parsePastedText: parseInlineChartTable,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011
        }),
        onModeChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006(null);
        },
        onPreviewChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258) => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.status === ChartDataSourceRuntimeStatus.READY ? {
            source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257
          } : null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.values && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636])));
        }
      })
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 && jsx("div", {
      className: "univer-text-xs\x20univer-text-red-600\x20dark:!univer-text-red-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009
    }), jsxs("div", {
      className: "univer-flex univer-shrink-0 univer-justify-end univer-gap-2",
      children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000 && jsx(Button, {
        type: "button",
        variant: "default",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.t("docs-chart-ui.common.cancel")
      }), jsx(Button, {
        type: "button",
        variant: "primary",
        disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 === "referenced" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005,
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 === "referenced" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.onDataSourceSubmit) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012("shared");
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.t("docs-chart-ui.common.apply")
      })]
    })]
  });
}
export { pr as DocChartDataEditor };
