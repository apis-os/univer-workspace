import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { q } from "./sheets-chart-chart-model.js";
import { Bn, Lt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, zt } from "./sheets-chart-plugin.js";
import { J } from "./sheets-chart-sheets-chart.js";
import { Vn } from "./sheets-chart-plugin-name.js";
const tt = new Set([ChartTypeBits.Line, ChartTypeBits.Column, ChartTypeBits.ColumnStacked, ChartTypeBits.ColumnPercentStacked, ChartTypeBits.Bar, ChartTypeBits.BarStacked, ChartTypeBits.BarPercentStacked, ChartTypeBits.Area, ChartTypeBits.AreaStacked, ChartTypeBits.AreaPercentStacked, ChartTypeBits.Combination, ChartTypeBits.Waterfall]);
function nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.length === 0) return [];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878[0]];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 - 1] + 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2++) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2]);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21;
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.length >= 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 - 1] + 1);
}
function it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883[0]] : nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882);
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 = generateChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 = canonicalizeChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.context ?? {}),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.categoryResourceIndexes ?? [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.seriesResourceIndexes ?? [],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.categoryIndexes === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.seriesIndexes === undefined && chartBitsUtils.baseOn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.chartType, ChartTypeBits.Scatter) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.length === 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.length >= 2,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.categoryIndexes === undefined ? it(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18) : [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.categoryIndexes],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.seriesIndexes === undefined ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221)) : [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.seriesIndexes],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.multiLevelCategoryAxis ?? (tt.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.chartType) && rt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25));
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891,
    categoryIndexes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
    multiLevelCategoryAxis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892,
    seriesIndexes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26
  };
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 === undefined ? undefined : {
    categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.categoryIndexes,
    seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.seriesIndexes
  };
  return at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902, {
    chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 === undefined ? {} : {
      context: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905
      }
    })
  });
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940) {
  let {
      mergeRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941,
      worksheetRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942,
      worksheetColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943,
      transpose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944,
      fieldIndexOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 = 0
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940,
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225])),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.startRow),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B593.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.startColumn);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 === undefined) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.endRow).length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.endColumn).length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 < 2) continue;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31.push({
      fieldIndex: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 - 1
    });
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31.sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.fieldIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.fieldIndex || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.startIndex);
}
const ut = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952 => {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.dataStream["replace"](/\r\n$/, "")) || "";
};
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963) {
  let {
      startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964,
      startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965,
      endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966,
      endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {};
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.sourceType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.label);
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.sourceType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.label);
  }
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.getCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.getCellRaw) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987;
  return ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.f || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988.si ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.getCellWithFilteredInterceptors ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.getCellWithFilteredInterceptors(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982, "sheet-chart.source-value", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.priority !== InterceptCellContentPriority.NUMFMT) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985);
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.v === undefined && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.p || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.v === null && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.p) return {
    value: null,
    label: "",
    sourceType: ChartSourceDataTypeEnum.Null
  };
  let {
    v: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003,
    p: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004);
    return {
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232,
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232,
      sourceType: ChartSourceDataTypeEnum.STRING
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 = getCellValueType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 === CellValueType.STRING || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 === CellValueType.FORCE_STRING) return {
    value: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    label: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    sourceType: ChartSourceDataTypeEnum.STRING
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 === CellValueType.BOOLEAN) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003;
    return {
      value: +!!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3,
      label: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 ? "TRUE" : "FALSE",
      sourceType: ChartSourceDataTypeEnum.BOOLEAN
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 === CellValueType.NUMBER ? pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) : {
    value: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    label: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    sourceType: ChartSourceDataTypeEnum.STRING
  };
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020;
  let {
      v: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021,
      s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v) !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v !== null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.get((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.s) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020.n) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020.pattern,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 : Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 = Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v) !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v !== null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.v !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024] = numfmt.getFormatInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024] : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.isDate) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 = numfmt.parseDate(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.v;
    return {
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 == null ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023) : excelDateToUnixMilliseconds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019.dateSystem) !== DateSystem.Date1904),
      label: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 ? numfmt.format(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016,
      sourceType: ChartSourceDataTypeEnum.Date
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 !== DEFAULT_NUMBER_FORMAT && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029;
    return {
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 = numfmt.parseNumber(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.v) ?? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023),
      label: !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 ? numfmt.format(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016,
      sourceType: ChartSourceDataTypeEnum.NUMBER
    };
  }
  return {
    value: Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023),
    label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016,
    sourceType: ChartSourceDataTypeEnum.NUMBER
  };
}
function mt({
  numfmtOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046,
  range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047,
  styles: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048,
  worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049
}) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.getRowVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.getColVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {};
  return {
    data: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046);
      return {
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.value,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.sourceType,
        label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.label
      };
    })),
    rowIndexes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startRow),
    columnIndexes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startColumn),
    mergeRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.getMergeData().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 => ({
      startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.startRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startRow,
      endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startRow,
      startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.startColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startColumn,
      endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.startColumn
    }))
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054) {
  "@babel/helpers - typeof";

  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242;
  }, U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054);
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057) {
  if (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 || "default");
    if (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056);
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 = ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064, "string");
  return U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 + "";
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069 = gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068;
}
var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658 = class extends ChartDataSource {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) {
      super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, W(this, "_snapshot$", undefined), W(this, "_projector", undefined), W(this, "_projectorHeaderRow", undefined), W(this, "_projectorIsRowDirection", undefined), W(this, "snapshot$", undefined), W(this, "rangeInfo$", undefined), W(this, "data$", undefined), W(this, "isRowDirection$", undefined), W(this, "canSwitchOrient$", undefined);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.isRowDirection === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.isRowDirection,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246,
          isRowDirection: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = this.convertDataSet(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3);
      this._snapshot$ = new BehaviorSubject({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3,
        dataSet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247,
        isRowDirection: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4,
        canSwitchOrient: true
      }), this.snapshot$ = this._snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
        rangeInfo: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.rangeInfo)
      }))), this.rangeInfo$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.rangeInfo)), this.data$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.dataSet)), this.isRowDirection$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.isRowDirection)), this.canSwitchOrient$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.canSwitchOrient));
    }
    getRangeInfo() {
      return Tools.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    canSwitchOrient() {
      return true;
    }
    convertDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = this.getRangeInfo()) {
      let {
          headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
          isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252,
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.startColumn === -1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.startRow === -1) return {
        dimensions: [],
        source: []
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 = getSheetCommandTarget(this._univerInstanceService, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) return {
        dimensions: [],
        source: []
      };
      let {
          workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
          worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = Range.transformRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.getStyles(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = mt({
          numfmtOptions: {
            locale: getNumfmtLocaleTag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.getSnapshot().locale),
            dateSystem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.getDateSystem()
          },
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
          styles: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263,
          worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261
        });
      return this._getProjector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 ?? CHART_HEADER_ROW_NONE, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255).project(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264);
    }
    _getProjector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279) {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279;
      return (!this._projector || this._projectorHeaderRow !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 || this._projectorIsRowDirection !== var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6) && (this._projector = createChartDataSetProjector({
        headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278,
        isRowDirection: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6
      }), this._projectorHeaderRow = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, this._projectorIsRowDirection = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6), this._projector;
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = this._snapshot$["getValue"]();
      this._emit({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282,
        dataSet: this.convertDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.rangeInfo)
      }, false);
    }
    _emit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.revision + 1,
        rangeRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.rangeRevision + +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285
      });
    }
    dispose() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290,
        dataSet: this.getEmptyDataSet(),
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.revision + 1
      }), this._snapshot$["complete"](), this._projector = undefined, super.dispose();
    }
  },
  vt = class extends ChartDataSource {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293) {
      super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, W(this, "_snapshot$", undefined), W(this, "snapshot$", undefined), W(this, "rangeInfo$", undefined), W(this, "data$", undefined), W(this, "isRowDirection$", undefined), W(this, "canSwitchOrient$", undefined);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = this.convertDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293);
      this._snapshot$ = new BehaviorSubject({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293),
        dataSet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
        isRowDirection: false,
        canSwitchOrient: false
      }), this.snapshot$ = this._snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
        rangeInfo: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.rangeInfo)
      }))), this.rangeInfo$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.rangeInfo)), this.data$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.dataSet)), this.isRowDirection$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.isRowDirection)), this.canSwitchOrient$ = this.snapshot$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.canSwitchOrient));
    }
    canSwitchOrient() {
      return false;
    }
    getRangeInfo() {
      return Tools.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    convertDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = this.getRangeInfo()) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = this._univerInstanceService,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {};
      for (let {
        header: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103
      } of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push("");
          continue;
        }
        let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, UniverInstanceType.UNIVER_SHEET);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) return {
          dimensions: [],
          source: []
        };
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) return {
          dimensions: [],
          source: []
        };
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.getStyles(),
          {
            label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651
          } = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5, {
            locale: getNumfmtLocaleTag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.getSnapshot().locale),
            dateSystem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.getDateSystem()
          });
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651);
      }
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = 0,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = new ObjectMatrix(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = new ObjectMatrix(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = new ObjectMatrix(),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [];
      for (let {
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104
      } of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) {
        let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653,
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, UniverInstanceType.UNIVER_SHEET);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655) return {
          dimensions: [],
          source: []
        };
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) return {
          dimensions: [],
          source: []
        };
        dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getStyles(), {
          locale: getNumfmtLocaleTag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getSnapshot().locale),
          dateSystem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.getDateSystem()
        });
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startRow === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endRow,
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startColumn === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endColumn,
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true;
        if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.getRowVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startRow) : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.getColVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startColumn)), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1) {
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.getMergeData().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.startRow >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.endRow <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.startColumn >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.endColumn <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endColumn),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = Array.from({
              length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startRow + 1
            }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = Array.from({
              length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startColumn + 1
            }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.startColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611);
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9.push(...lt({
            mergeRanges: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1,
            worksheetRows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,
            worksheetColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616,
            transpose: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A,
            fieldIndexOffset: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3
          }));
        }
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3++;
      }
      return {
        dimensions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
        source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.toArray(),
        sourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.toArray(),
        sourceLabels: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.toArray(),
        ...(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length ? {
          hiddenFieldIndexes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10
        } : {}),
        categorySpans: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9
      };
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = this._snapshot$["getValue"]();
      this._emit({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308,
        dataSet: this.convertDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.rangeInfo)
      }, false);
    }
    _emit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310,
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.revision + 1,
        rangeRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.rangeRevision + +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311
      });
    }
    dispose() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
        dataSet: this.getEmptyDataSet(),
        revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.revision + 1
      }), this._snapshot$["complete"](), super.dispose();
    }
  };
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075) ? new vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075) : new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075);
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078.type !== ChartSourceDataTypeEnum.Null;
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080.type) === ChartSourceDataTypeEnum.STRING || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080.type) === ChartSourceDataTypeEnum.Date;
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.type === ChartSourceDataTypeEnum.Null || xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318));
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084.some(xt);
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087) {
  let [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087] ?? [];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.length < 1 || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.type) !== ChartSourceDataTypeEnum.Null && !xt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37) || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.every(bt) ? false : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.data["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087 + 1).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 + 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.type) === ChartSourceDataTypeEnum.NUMBER;
  }));
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.data["length"] === 0) return;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.data["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.some(bt));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 < 0) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.data["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110[0]);
    return Ct(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14) && St(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14) ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.rowIndexes) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 : undefined;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.data["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.some(bt));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 < 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094];
  return Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095) && St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095) || wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094) ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461090.rowIndexes) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 : undefined;
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103.headerRow ?? Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103.isRowDirection) ?? CHART_HEADER_ROW_NONE;
  return {
    dataSet: createChartDataSetProjector({
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104,
      isRowDirection: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103.isRowDirection
    }).project(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102),
    headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104
  };
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124);
  };
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133;
}
q = K([G(0, Inject(Injector))], q);
Lt = K([G(0, ICommandService), G(1, Inject(RefRangeService))], Lt);
zt = K([G(0, Inject(IUniverInstanceService)), G(1, Inject(Lt))], zt);
J = K([G(0, IResourceManagerService), G(1, IUniverInstanceService), G(2, Inject(q)), G(3, Inject(zt))], J);
function nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313 = rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313 ? convertPositionCellToSheetOverGrid(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309, {
    row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.row,
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.column,
    rowOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.rowOffset ?? 0,
    columnOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.columnOffset ?? 0
  }, 1, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311).transform : null;
}
function rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 == "string") try {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = deserializeRangeWithSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320);
    return {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.range["startRow"],
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.range["startColumn"]
    };
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.push(X("INVALID_RANGE", "Invalid chart source range: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 + ".", "layout.anchor", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54)), null;
  }
  return !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.row) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.column) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.row < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.column < 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.push(X("INVALID_RANGE", "Chart anchor row and column must be non-negative integers.", "layout.anchor")), null) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320;
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327) {
  return {
    code: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324,
    severity: "error",
    message: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325,
    path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326,
    details: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333) {
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333);
  } catch {
    return null;
  }
}
var Rn = "@univerjs-pro/sheets-chart",
  zn = "1.0.0-insiders.20260907-70fc579";
Bn = K([G(0, ICommandService), G(1, Inject(SheetInterceptorService)), G(2, Inject(q)), G(3, Inject(J))], Bn);
W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, "type", UniverInstanceType.UNIVER_SHEET), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, "pluginName", Vn), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, "packageName", Rn), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, "version", zn), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659 = K([DependentOn(UniverChartPlugin, UniverLicensePlugin, UniverSheetsPlugin), G(1, Inject(Injector)), G(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659);
export { V, W, Et, at, yt, mt, H, Z, X, nn };
