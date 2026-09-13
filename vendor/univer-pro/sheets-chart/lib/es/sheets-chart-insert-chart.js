import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { On } from "./sheets-chart-allowed-chart-types.js";
import { J } from "./sheets-chart-sheets-chart.js";
import { V } from "./internal-core-endo.js";
import { jn } from "./sheets-chart-to-insert-chart-mutation-source.js";
import { Nn, Pn } from "./sheets-chart-insert-sheets-chart.js";
import { Ht } from "./sheets-chart-chart-config.js";
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.config) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545.backgroundColor;
  return resolveChartStyleBackgroundColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 === undefined ? {
    backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.backgroundColor ?? null
  } : {
    backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546
  });
}
function In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = {
      x: 200,
      y: 200
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.scene["getMainViewport"]();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.getCurrentUnitOfType(UniverInstanceType.UNIVER_SHEET);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552.getActiveSheet()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557.getSheetId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48;
  let {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562,
    right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563,
    bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.viewBound;
  return ![var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564].every(Number.isFinite) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 : {
    x: Math.max(0, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555) / 2)),
    y: Math.max(0, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556) / 2))
  };
}
const Ln = {
  type: CommandType.COMMAND,
  id: "sheet.command.insert-chart",
  handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584;
    let {
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585,
        source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587 = On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587.length !== 1 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587.includes("" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(IUniverInstanceService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(SheetSkeletonService),
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
        workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590.ensureSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(IUndoRedoService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(SheetInterceptorService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(ISheetDrawingService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(ChartThemeService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(J),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.chartId || generateRandomId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602;
    try {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.context) === undefined ? undefined : canonicalizeChartContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config["context"]);
    } catch {
      return false;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.inferInitialChartSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582.chartType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.dataSet, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583.chartType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.mapping, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586;
    if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586)) {
      let {
        headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852,
        isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854,
        isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.mapping["isRowDirection"],
        headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.mapping["headerRow"]
      };
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB50 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601,
        chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585,
        context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605,
        ...jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.get(IConfigService).getConfig("sheets-chart.config")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.defaultChartSize,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.width) ?? defaultChartWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.height ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.height) ?? defaultChartHeight,
      {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.position ?? In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51 = {
        from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.getCellIndexAndOffsetByPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611),
        to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.getCellIndexAndOffsetByPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609)
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.theme ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.getTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.theme) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.getDefaultTheme(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613 = Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.borderColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.theme["borderColor"],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601,
        drawingType: DrawingTypeEnum.DRAWING_CHART,
        componentKey: "SheetsChartComponent",
        sheetTransform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51,
        transform: {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609
        },
        axisAlignSheetTransform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51,
        data: {
          border: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614,
          background: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613
        },
        allowTransform: true
      },
      {
        undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615,
        redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616,
        objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598.getBatchAddOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.onCommandExecute({
        id: InsertSheetDrawingCommand.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
          drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52]
        }
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.preRedos ?? []), {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
          op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617,
          type: DrawingApplyType.INSERT
        }
      }, {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591]
      }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.redos, {
        id: Nn.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB50
      }],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54 = [{
        id: Pn.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601
        }
      }, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.preUndos ?? []), {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
          op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617,
          type: DrawingApplyType.REMOVE
        }
      }, {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591]
      }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.undos];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config) {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855,
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856,
          chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857,
          style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858,
          dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.config,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855,
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.chartType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.style = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.dataAggregation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 !== undefined) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53.push({
        id: Ht.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21
      });
    }
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596.pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A53
    }), true) : false;
  }
};
export { Ln as InsertChartCommand };
