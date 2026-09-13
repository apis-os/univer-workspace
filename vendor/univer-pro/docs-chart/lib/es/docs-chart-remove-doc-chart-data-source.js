import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, PositionedObjectLayoutType, Tools, UniverInstanceType, WrapTextType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, IDocDrawingService, InsertDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { filter, firstValueFrom } from "rxjs";
import { RichTextEditingMutation, buildDocTransform, normalizeTextRange } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const M = {
    id: "doc.mutation.remove-doc-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.get(ChartResourceRepository).removeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.dataSourceId)
  },
  N = {
    id: "doc.mutation.set-doc-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.get(ChartResourceRepository).setDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.dataSource), true)
  },
  P = {
    id: "doc.mutation.set-doc-chart-snapshot",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.get(ChartResourceRepository).setChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.chart), true)
  },
  F = {
    id: "doc.command.change-chart-data-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.get(ChartResourceRepository),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.chartId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.dataSourceId) : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.isDataSourceShared(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.id),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.duplicateDataSourceId ?? generateRandomId() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.id,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.dataSource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.name ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.name),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.get(ICommandService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
          id: N.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283
          }
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [{
          id: N.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280
          }
        }];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.params)) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
            id: P.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
              chart: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
                dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
              }
            }
          },
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
            id: M.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
              dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
            }
          };
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.params)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.params), false;
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.splice(0, 1, {
          id: P.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
            chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279
          }
        }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1);
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.__tempBatchingUndoRedo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.unitId,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.dispose(), true;
    }
  };
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = isInlineChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) ? {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300,
    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.values
  } : {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.source
  };
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.name ?? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.name, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
}
export { M as RemoveDocChartDataSourceMutation, N as SetDocChartDataSourceMutation, P as SetDocChartSnapshotMutation, F as ChangeDocChartDataSourceCommand };
