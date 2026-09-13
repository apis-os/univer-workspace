import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { X, Z, nn } from "./internal-core-endo.js";
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.position) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.position;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.anchor) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.injector, SheetSkeletonService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291.ensureSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.subUnitId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290.push(X("COMMAND_FAILED", "Worksheet skeleton is not available for chart anchor.", "anchor"));
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289.anchor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293.left ?? 0,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293.top ?? 0
  } : undefined;
}
export { en as resolveInitialChartPosition };
