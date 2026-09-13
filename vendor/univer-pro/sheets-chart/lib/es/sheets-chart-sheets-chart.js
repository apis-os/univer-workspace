import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { Et, H, V, W, at, mt, yt } from "./internal-core-endo.js";
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109 === undefined) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28.categoryIndexes = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28.seriesIndexes = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28;
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113) {
  let {
      dataSet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114,
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115
    } = Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113.categoryIndexes, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113.seriesIndexes),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 = at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114, {
      chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113.chartType,
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116
    });
  return {
    dataSet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114,
    mapping: {
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115,
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113.isRowDirection,
      categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.categoryIndexes ?? [],
      seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.seriesIndexes ?? []
    }
  };
}
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) {
    super(), this._resourcesManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, this._chartModelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, this._dataSourceManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, W(this, "_chartModelIdMap", new Map()), W(this, "_dataSourceBindings", new Map()), this.disposeWithMe(this._dataSourceManager), this._initSnapshot();
  }
  getSubUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = this._chartModelIdMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488) return null;
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.entries()) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161;
    return null;
  }
  getUnitChartModels(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = this._chartModelIdMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) return [];
    let {
      _chartModelService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496
    } = this;
    return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163));
  }
  inferInitialChartMapping(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) {
    return this.inferInitialChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504).mapping;
  }
  inferInitialChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = this._getInitialDataOrientation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508) === DataOrientation.Row;
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = yt(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508);
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.getDataSet(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510);
        return {
          dataSet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670,
          mapping: {
            headerRow: CHART_HEADER_ROW_NONE,
            isRowDirection: false,
            categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.categoryIndexes ?? [],
            seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.seriesIndexes ?? []
          }
        };
      } finally {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164.dispose();
      }
    }
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512,
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.rangeInfo,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 = getSheetCommandTarget(this._univerInstanceService, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
          dimensions: [],
          source: []
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = V(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510);
      return {
        dataSet: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
        mapping: {
          headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.headerRow ?? CHART_HEADER_ROW_NONE,
          isRowDirection: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10,
          categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.categoryIndexes ?? [],
          seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.seriesIndexes ?? []
        }
      };
    }
    let {
        workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515,
        worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = mt({
        numfmtOptions: {
          locale: getNumfmtLocaleTag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.getSnapshot().locale),
          dateSystem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.getDateSystem()
        },
        range: Range.transformRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516),
        styles: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.getStyles(),
        worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 => Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509,
        isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.headerRow === undefined ? {} : {
          headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.headerRow
        }),
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.categoryIndexes) === undefined ? {} : {
          categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.categoryIndexes
        }),
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.seriesIndexes) === undefined ? {} : {
          seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510.seriesIndexes
        })
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.isRowDirection !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.mapping["seriesIndexes"].length > 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518(!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.mapping["seriesIndexes"].length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519;
  }
  _inferPrimaryDataOrientation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) {
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534)) return DataOrientation.Column;
    let {
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534.rangeInfo,
      {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537 && this._hasNonNumberCellInSingleRow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 ? DataOrientation.Column : DataOrientation.Row;
  }
  _getInitialDataOrientation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546) {
    return !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546.isRowDirection !== undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546.isRowDirection ? DataOrientation.Row : DataOrientation.Column : this._inferPrimaryDataOrientation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546);
  }
  _hasNonNumberCellInSingleRow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550,
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.rangeInfo,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 = getSheetCommandTarget(this._univerInstanceService, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) return false;
    let {
        workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553,
        worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.getStyles(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {};
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167++) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.getColVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) && H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13, {
      locale: getNumfmtLocaleTag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.getSnapshot().locale),
      dateSystem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.getDateSystem()
    }).sourceType !== ChartSourceDataTypeEnum.NUMBER) return true;
    return false;
  }
  ensureChartModelCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = this._chartModelIdMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = new Map(), this._chartModelIdMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567;
  }
  getChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573.dataSource;
  }
  getChartSourceSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577 = this.getChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577.getRangeInfo()) : undefined;
  }
  replaceChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = this.getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 = this._dataSourceBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583) return false;
    let {
        mapping: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584
      } = this.inferInitialChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.chartType),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = this._applyInitialMappingToRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 = this._dataSourceManager["acquire"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = this._chartModelService["rebuildChartModelContextForDataSource"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dataSource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dispose(), false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dataSource === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.handle["dataSource"]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.setChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587), true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = this._createDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586);
    return this._dataSourceBindings["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.replaceDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dataSource), this._disposeDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.setChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587), true;
  }
  refreshChartSource() {
    this._dataSourceManager["refreshAll"]();
  }
  createChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = false) {
    let {
        context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
        dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603,
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605,
        rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 ?? generateRandomId(),
      {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.categoryIndexes) !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.seriesIndexes !== undefined,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.headerRow !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.isRowDirection !== undefined;
    if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = this.inferInitialChartMapping(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = this._applyInitialMappingToRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
        categoryIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.categoryIndexes,
        seriesIndexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.seriesIndexes
      };
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = this._dataSourceManager["acquire"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612;
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = this._chartModelService["createChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607, {
        dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.dataSource,
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608,
        dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605,
        context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613 = this.ensureChartModelCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id), this._dataSourceBindings["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id, this._createDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.onDispose(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = this._dataSourceBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id);
      this._dataSourceBindings["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 && this._disposeDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612;
  }
  _applyInitialMappingToRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631) {
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630;
    let {
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632,
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.isRowDirection,
      headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.headerRow
    };
  }
  removeChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) {
    this._chartModelService["removeChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640);
  }
  getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642) {
    return this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642);
  }
  _serializeChartForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = this._chartModelIdMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645) return "{}";
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {};
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.keys()) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 of Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = this.getChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171] || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171] = []), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171].push({
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.getRangeInfo(),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.serialize()
        }));
      }
    }
    return JSON.stringify(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15);
  }
  _createDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649) {
    return {
      handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649,
      sourceSubscription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.dataSource$["pipe"](skip(1)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173;
        if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = this._dataSourceBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.handle) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = this.inferInitialChartMapping(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.getRangeInfo(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.chartType),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = this._chartModelService["rebuildChartModelContextForDataSource"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.replaceDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.setChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176);
      }),
      dataSubscription: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.dataChanged$["subscribe"](() => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182;
        ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = this._dataSourceBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.handle) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649 && this._replaceReconciledContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648);
      })
    };
  }
  _disposeDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.sourceSubscription["unsubscribe"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.dataSubscription["unsubscribe"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.handle["dispose"]();
  }
  _replaceReconciledContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 = this._chartModelService["reconcileChartModelContext"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655.setChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656);
  }
  _deserializeChartForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661) {
    this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, UniverInstanceType.UNIVER_SHEET) && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184];
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.length <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 => {
        let {
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
        this.createChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674
        });
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_CHART_PLUGIN",
      businesses: [UniverInstanceType.UNIVER_SHEET],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 => this._serializeChartForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) => {
        this._deserializeChartForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
      },
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = this._chartModelIdMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => {
          Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.values()).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => {
            this._chartModelService["removeChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620);
          });
        });
      }
    });
  }
  dispose() {
    Array.from(this._dataSourceBindings["keys"]()).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 => this._chartModelService["removeChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198)), this._dataSourceBindings["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 => this._disposeDataSourceRuntimeBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199)), this._dataSourceBindings["clear"](), this._chartModelIdMap["clear"](), super.dispose();
  }
};
export { J as SheetsChartService };
