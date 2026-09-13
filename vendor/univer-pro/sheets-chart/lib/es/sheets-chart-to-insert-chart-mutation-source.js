import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
function jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506) {
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506)) return {
    ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506
  };
  let {
    headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507,
    rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508,
    isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506;
  return {
    range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508.range,
    rangeUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508.unitId,
    rangeSubUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508.subUnitId,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 === undefined ? {} : {
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507 === undefined ? {} : {
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507
    })
  };
}
export { jn as toInsertChartMutationSource };
