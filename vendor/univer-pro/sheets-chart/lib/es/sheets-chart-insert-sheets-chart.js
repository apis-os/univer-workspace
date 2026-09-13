import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { J } from "./sheets-chart-sheets-chart.js";
function Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.unitId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.subUnitId;
  return "ranges" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.ranges : "range" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514 ? {
    rangeInfo: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.rangeUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.rangeSubUnitId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.range
    },
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.isRowDirection === undefined ? {} : {
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.isRowDirection
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.headerRow === undefined ? {} : {
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461514.headerRow
    })
  } : null;
}
const Nn = {
    id: "sheet.mutation.insert-chart",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524,
          context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525,
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526,
          dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520.get(J).createChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523, {
        rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524,
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521.chartType,
        context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526,
        dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527
      }, true), true) : false;
    }
  },
  Pn = {
    id: "sheet.mutation.remove-chart",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539) => {
      let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538.get(J).removeChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540), true;
    }
  };
export { Nn as InsertSheetsChartMutation, Pn as RemoveSheetsChartMutation };
