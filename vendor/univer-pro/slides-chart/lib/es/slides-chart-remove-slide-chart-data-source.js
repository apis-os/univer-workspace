import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, ReorderSlideElementsCommand, UpdateSlideDrawingCommand, UpdateSlideElementMutation, getSlideCommandTarget } from "@univerjs-pro/slides";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { Subject, filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { L } from "./slides-chart-slide-chart-resource.js";
const R = {
    id: "slide.mutation.remove-slide-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.get(L).removeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.dataSourceId)
  },
  z = {
    id: "slide.mutation.set-slide-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.get(L).setDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.dataSource), true)
  },
  B = {
    id: "slide.mutation.set-slide-chart-snapshot",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.get(L).setChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.chart), true)
  },
  V = {
    id: "slide.command.change-chart-data-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = getSlideCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.chartId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.dataSourceId) : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.isDataSourceShared(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.id),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.duplicateDataSourceId ?? generateRandomId() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.id,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.dataSource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.name ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.name),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.get(ICommandService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
          id: z.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283
          }
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [{
          id: z.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280
          }
        }];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.params)) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
            id: B.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
              chart: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
                dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
              }
            }
          },
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
            id: R.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
              dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
            }
          };
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.params)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.params), false;
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.splice(0, 1, {
          id: B.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279
          }
        }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2
      }), true;
    }
  };
function pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = isInlineChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296) ? {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.values
  } : {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.source
  };
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.name ?? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.name, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
}
export { R as RemoveSlideChartDataSourceMutation, z as SetSlideChartDataSourceMutation, B as SetSlideChartSnapshotMutation, V as ChangeSlideChartDataSourceCommand };
