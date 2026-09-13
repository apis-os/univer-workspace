import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, ReorderSlideElementsCommand, UpdateSlideDrawingCommand, UpdateSlideElementMutation, getSlideCommandTarget } from "@univerjs-pro/slides";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { Subject, filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { L } from "./slides-chart-slide-chart-resource.js";
import { B, R, z } from "./slides-chart-remove-slide-chart-data-source.js";
import { H } from "./slides-chart-remove-slide-chart-snapshot.js";
const xe = {
    id: "slide.command.duplicate-slide-data-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = getSlideCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
        {
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429,
          duplicateDataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.dataSourceId) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.duplicateDataSourceForChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
          dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
          dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.id
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
          chart: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432,
            dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.id
          }
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = [{
          id: z.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28
        }, {
          id: B.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = [{
          id: B.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31
        }, {
          id: R.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20
      }), true) : false;
    }
  },
  Se = 120,
  Ce = 80,
  we = 480,
  Te = 320,
  Ee = [["Category", "Value"], ["A", 12], ["B", 18], ["C", 9]],
  De = {
    lineStrokeType: ShapeLineTypeEnum.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1
  },
  Z = {
    id: "slide.command.insert-slide-chart",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = getSlideCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.chart);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.chartType) return false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.id ||= generateRandomId(6), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.context = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.context,
        headerRow: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.headerRow) ?? DEFAULT_CHART_RESOURCE_HEADER_ROW
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.get(IUndoRedoService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452,
        {
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459,
          replaceElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460,
          insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461,
          focus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 = Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.dataSource);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.dataSourceId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.id;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 = ke({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.id,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459,
        replaceElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460,
        insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461,
        slideDrawingService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
          dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [{
          id: z.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36
        }, {
          id: B.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.redoMutation],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.id,
          cleanupDataSource: true
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
          dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.id
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.undoMutation, {
          id: H.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38
        }, {
          id: R.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39
        }],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 = sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 !== false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.focusDrawing([{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.elementId
      }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24
      }), true) : (sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.index === 1 ? [{
        id: R.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39
      }] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.index === 2 ? [{
        id: H.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38
      }, {
        id: R.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39
      }] : [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455), false);
    }
  };
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.id) ?? generateRandomId(6),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.name,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.source ? {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.source
    } : {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485,
      values: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.values) ?? Ee).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248])
    };
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.name ?? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.name, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44;
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489) {
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492,
      replaceElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494,
      slideDrawingService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.element ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.element) : {},
    {
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497,
      placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498
    } = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.getDrawingByParam({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493
    });
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.sourcePageType) !== PageTypeEnum.Slide) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = Ae({
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
        stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497,
        placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.transform
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.element,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.transform
      };
    return {
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
      redoMutation: {
        id: UpdateSlideElementMutation.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
      },
      undoMutation: {
        id: UpdateSlideElementMutation.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7
      }
    };
  }
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.id ||= generateRandomId(6);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
      element: Ae({
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492,
        elementId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.id,
        stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497,
        placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498
      }),
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491,
      drawingId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.id
    };
  return {
    elementId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46.id,
    redoMutation: {
      id: AddSlideElementMutation.id,
      params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47
    },
    undoMutation: {
      id: RemoveSlideElementMutation.id,
      params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48
    }
  };
}
function Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509) {
  let {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513,
      placeholder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
      type: PageElementTypeEnum.Chart,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510,
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 ?? De,
      transform: {
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.left) ?? 120,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.top) ?? 80,
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.width) ?? 480,
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.height) ?? 320,
        rotation: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513.rotation) ?? 0
      }
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52.placeholder = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52;
}
export { xe as DuplicateSlideChartDataSourceCommand, Se as DEFAULT_SLIDE_CHART_ELEMENT_LEFT, Ce as DEFAULT_SLIDE_CHART_ELEMENT_TOP, we as DEFAULT_SLIDE_CHART_ELEMENT_WIDTH, Te as DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT, Ee as DEFAULT_SLIDE_CHART_VALUES, De as DEFAULT_SLIDE_CHART_STROKE, Z as InsertSlideChartCommand };
