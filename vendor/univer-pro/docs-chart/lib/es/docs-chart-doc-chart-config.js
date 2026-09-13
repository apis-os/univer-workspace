import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, PositionedObjectLayoutType, Tools, UniverInstanceType, WrapTextType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, IDocDrawingService, InsertDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { filter, firstValueFrom } from "rxjs";
import { RichTextEditingMutation, buildDocTransform, normalizeTextRange } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { P } from "./docs-chart-remove-doc-chart-data-source.js";
const R = Symbol("ReplaceDocChartConfig"),
  z = {
    id: "doc.command.update-doc-chart-config",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331[R] === true,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.get(ChartResourceRepository).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = chartConfigInterpreter.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
          chart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [{
          id: P.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [{
          id: P.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8
      }), true) : false;
    }
  };
export { z as UpdateDocChartConfigCommand };
export { R };
