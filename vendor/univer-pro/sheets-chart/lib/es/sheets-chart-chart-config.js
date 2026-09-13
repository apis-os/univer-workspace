import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { J } from "./sheets-chart-sheets-chart.js";
function Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157) {
  let {
    categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461158,
    multiLevelCategoryAxis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159,
    seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160,
    useDateAxis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161,
    histogram: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461163,
    ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461157)
  };
}
const Vt = {
    id: "sheet.mutation.chart-update-config",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173) => {
      if (Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173)) return false;
      let {
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.get(J).getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.style !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.assignStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.style), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.context !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.assignChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.context), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.dataAggregation !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.assignDataAggregation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.dataAggregation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.chartType !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.setChartType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461173.chartType)), true;
    }
  },
  Ht = {
    id: "sheet.mutation.chart-replace-config",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181) => {
      if (Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.get(J).getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.chartModelId);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.style !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.setStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.style), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.context !== undefined) try {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 = canonicalizeChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.context);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.setChartContext(Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200));
        } catch {
          return false;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.dataAggregation !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.setDataAggregation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.dataAggregation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.chartType !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182.setChartType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181.chartType);
      }
      return true;
    }
  };
function Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186 || !Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186.style) || !Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186.context) || !Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186.dataAggregation);
}
function Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 === undefined || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188);
}
export { Vt as ChartUpdateConfigMutation };
export { Ht };
