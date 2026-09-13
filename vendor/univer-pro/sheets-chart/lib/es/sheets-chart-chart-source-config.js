import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { J } from "./sheets-chart-sheets-chart.js";
const qt = {
    id: "sheet.mutation.chart-update-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231) => {
      let {
        chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232,
        rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.get(J).replaceChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233);
    }
  },
  Jt = {
    id: "sheet.command.chart-update-source",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.get(J),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241,
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242,
          range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240.getChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240.getChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.get(IUndoRedoService),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244.getRangeInfo(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241,
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242,
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241,
          chartModelId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242,
          rangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247
        };
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45.push({
        id: qt.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46.push({
        id: qt.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37
      }), sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46
      }), true) : false;
    }
  };
export { qt as ChartUpdateSourceConfigMutation, Jt as ChartUpdateSourceCommand };
