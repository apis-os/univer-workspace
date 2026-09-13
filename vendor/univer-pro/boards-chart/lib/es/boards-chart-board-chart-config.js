import { AddBoardElementMutation, BoardElementType, IBoardChartAdapterService, IBoardElementService, RemoveBoardElementCommand, RemoveBoardElementMutation, ReorderBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, createAddBoardElementsMutationInfos } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, ChartTypeBits, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, createChartStarterRows, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, omitUndefinedFields, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ie } from "./boards-chart-change-board-chart-data-source.js";
import { N } from "./boards-chart-board-chart-resource.js";
import { I, L } from "./boards-chart-remove-board-chart-data-source.js";
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418,
    [Ie]: true
  };
}
const q = {
    id: "board.command.update-board-chart-config",
    type: CommandType.COMMAND,
    replaceConfig: Le,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421[Ie] === true,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = chartConfigInterpreter.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [{
          id: L.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422,
            chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [{
          id: L.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422,
            chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424
          }
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14
      }), true) : false;
    }
  },
  J = {
    id: "board.command.update-board-chart-data-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434,
          dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.get(N).getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.length === 0) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434,
          dataSource: {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
            values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
            name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.name
          }
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434,
          dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [{
          id: I.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = [{
          id: I.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18
      }), true) : false;
    }
  };
export { q as UpdateBoardChartConfigCommand, J as UpdateBoardChartDataSourceCommand };
