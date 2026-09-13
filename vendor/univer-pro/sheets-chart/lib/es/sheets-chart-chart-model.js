import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { V, W } from "./internal-core-endo.js";
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899) {
  return generateChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899, false);
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913) {
  let {
      headers: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914,
      categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915,
      categoryResourceIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916,
      categoryType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917,
      seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918,
      seriesResourceIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.multiLevelCategoryAxis ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.multiLevelCategoryAxis ? true : undefined);
  return ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920,
    categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.categoryIndexes,
    seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.seriesIndexes,
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 === undefined ? {} : {
      multiLevelCategoryAxis: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20
    })
  });
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936) {
  return reconcileChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935);
}
let q = class extends Disposable {
  get activeChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, W(this, "_activeChartModel$", new BehaviorSubject(null)), W(this, "_chartModels", new Map()), W(this, "_chartModelAdded$", new Subject()), W(this, "_chartModelRemoved$", new Subject()), W(this, "activeChartModel$", this._activeChartModel$["asObservable"]()), W(this, "chartModelAdded$", this._chartModelAdded$["asObservable"]()), W(this, "chartModelRemoved$", this._chartModelRemoved$["asObservable"]());
  }
  setActiveChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) {
    this._activeChartModel$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329);
  }
  getActiveChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) {
    return this._chartModels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331);
  }
  createChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = false) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = new ChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, this._injector);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.init(), this._chartModels["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.dataSource["getDataSet"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.context;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.setChartContext(ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.assignStyle({
      titles: {
        title: {
          content: ""
        }
      }
    }), this._chartModelAdded$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336;
  }
  reconcileChartModelContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = this._chartModels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 ? ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.dataSource["getDataSet"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.chartType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.context) : undefined;
  }
  rebuildChartModelContextForDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = this._chartModels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) return st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.getDataSet(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.chartType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351);
  }
  removeChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 = this._chartModels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 ? (this._chartModels["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357), this.activeChartModel === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 && this._activeChartModel$["next"](null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.dispose(), this._chartModelRemoved$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357), true) : false;
  }
  dispose() {
    Array.from(this._chartModels["keys"]()).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => this.removeChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111)), this._activeChartModel$["complete"](), this._chartModelAdded$["complete"](), this._chartModelRemoved$["complete"](), super.dispose();
  }
};
export { q as ChartModelService };
