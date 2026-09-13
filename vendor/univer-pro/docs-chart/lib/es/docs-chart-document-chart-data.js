import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, PositionedObjectLayoutType, Tools, UniverInstanceType, WrapTextType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, IDocDrawingService, InsertDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { filter, firstValueFrom } from "rxjs";
import { RichTextEditingMutation, buildDocTransform, normalizeTextRange } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Me } from "./docs-chart-document-chart-values.js";
import { U, W } from "./docs-chart-doc-chart-data-source.js";
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.length === 0) throw Error("Document\x20chart\x20values\x20are\x20required.");
  let {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
      injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.get(ChartResourceRepository),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) throw Error('Document chart "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 + '" was not found.');
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.mode) ?? "duplicateIfShared";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.getChartIdsByDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.dataSourceId).length > 1) {
    if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB === "rejectIfShared") throw Error("Document\x20chart\x20data\x20source\x20\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.dataSourceId + "\x22\x20is\x20shared.");
    if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB === "duplicateIfShared") {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.syncExecuteCommand(U.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446
      })) throw Error("Failed\x20to\x20duplicate\x20data\x20source\x20for\x20document\x20chart\x20\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 + "\x22.");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
    }
  }
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.syncExecuteCommand(W.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448,
    dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.dataSourceId,
    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445
  })) throw Error('Failed to update document chart data source for "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 + "\x22.");
}
export { Ne as updateDocumentChartData };
