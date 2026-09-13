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
import { B } from "./slides-chart-ui-open-slide-chart-panel-operation.js";
let J = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280) {
    this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, this._drawingStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280;
  }
  insertChartFromText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = parseInlineChartTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.length !== 0 && this.insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286);
  }
  insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = {}) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.length === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = tryPrepareInlineChartData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.ok) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.placeholderDrawing) return this._insertChartIntoPlaceholder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.values, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.placeholderDrawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.dataSource);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = getSlideCommandTarget(this._instanceService);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296) return false;
    let {
        presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.getSnapshot().defaultPageSize,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.min(520, Math.max(320, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.width * 0.56))),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.min(360, Math.max(220, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.height * 0.56))),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.max(24, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) / 2)),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.max(24, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) / 2)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = generateRandomId(6);
    return this._commandService["syncExecuteCommand"](InsertSlideChartCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
      chart: {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.style ? {
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.style
        } : {})
      },
      dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.dataSource ?? {
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.values
      },
      element: {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
        transform: {
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3,
          width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1
        }
      }
    }) ? (this._drawingStateService["selectDrawings"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302), this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302
    }), true) : false;
  }
  _insertChartIntoPlaceholder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.element["type"] !== PageElementTypeEnum.Placeholder) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 ? {
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317
        } : {})
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 ?? {
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314
      },
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
        sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
      {
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324,
        placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 === PageTypeEnum.Slide ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 : generateRandomId(6),
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324,
        placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.sourcePageType === PageTypeEnum.Slide ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 : undefined;
    if (!this._commandService["syncExecuteCommand"](InsertSlideChartCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320,
      chart: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
      dataSource: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3,
      element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
      replaceElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326
    })) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.id;
    return this._drawingStateService["selectDrawings"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327), this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327
    }), true;
  }
};
export { J as SlideChartInsertService };
