import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, ReorderSlideElementsCommand, UpdateSlideDrawingCommand, UpdateSlideElementMutation, getSlideCommandTarget } from "@univerjs-pro/slides";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { Subject, filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { me } from "./slides-chart-remove-slide-chart-snapshot.js";
import { L } from "./slides-chart-slide-chart-resource.js";
import { B, z } from "./slides-chart-remove-slide-chart-data-source.js";
function he(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
    [me]: true
  };
}
const W = {
    id: "slide.command.update-slide-chart-config",
    type: CommandType.COMMAND,
    replaceConfig: he,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = getSlideCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343,
        {
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342[me] === true,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.get(L).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = chartConfigInterpreter.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = [{
          id: B.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = [{
          id: B.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12
      }), true) : false;
    }
  },
  G = {
    id: "slide.command.update-slide-chart-data-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = getSlideCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
        {
          dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(L).getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
          dataSource: {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
            values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
            name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.name
          }
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
          dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [{
          id: z.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = [{
          id: z.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16
      }), true) : false;
    }
  };
export { W as UpdateSlideChartConfigCommand, G as UpdateSlideChartDataSourceCommand };
