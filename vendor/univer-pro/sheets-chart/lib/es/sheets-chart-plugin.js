import { CHART_HEADER_ROW_NONE, ChartDataSource, ChartModel, ChartRenderMode, ChartSourceDataTypeEnum, ChartThemeService, ChartTypeBits, DataOrientation, UniverChartPlugin, buildChartPreviewData, canonicalizeChartContext, chartBitsUtils, createChartDataSetProjector, defaultChartHeight, defaultChartWidth, describeChartModel, excelDateToUnixMilliseconds, generateChartContext, mergeChartConfig, reconcileChartContext, resolveChartStyleBackgroundColor, toChartCreateConfigSnapshot, toChartDataItem, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { CellValueType, CommandType, DEFAULT_NUMBER_FORMAT, DateSystem, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Range, Rectangle, Tools, UniverInstanceType, generateRandomId, getCellValueType, getDrawingOrderIndex, getNumfmtLocaleTag, merge, normalizeDrawingOrderIndex, numfmt, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation, InterceptCellContentPriority, MarkDirtyFilterChangeMutation, RefRangeService, RemoveColMutation, RemoveNumfmtMutation, RemoveRowMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetNumfmtMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, convertPositionCellToSheetOverGrid, getSheetCommandTarget } from "@univerjs/sheets";
import { BehaviorSubject, Subject, map, skip } from "rxjs";
import { deserializeRangeWithSheet } from "@univerjs/engine-formula";
import { IRenderManagerService } from "@univerjs/engine-render";
import { LS_CONFIG_KEY, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from "@univerjs-pro/license";
import { W, yt } from "./internal-core-endo.js";
import { Ln } from "./sheets-chart-insert-chart.js";
import { Gt } from "./sheets-chart-replace-sheet-chart-config.js";
import { Jt, qt } from "./sheets-chart-chart-source-config.js";
import { Nn, Pn } from "./sheets-chart-insert-sheets-chart.js";
import { Ht, Vt } from "./sheets-chart-chart-config.js";
import { jn } from "./sheets-chart-to-insert-chart-mutation-source.js";
import { An, kn } from "./sheets-chart-plugin-config-key.js";
import { q } from "./sheets-chart-chart-model.js";
import { J } from "./sheets-chart-sheets-chart.js";
const kt = {
  Multi: "multi",
  Single: "single"
};
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142) {
  let {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144,
    range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142;
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.endRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.endColumn];
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150) {
  return JSON.stringify(Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150) ? [kt.Multi, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.header ? At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.header) : null, At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.range)])] : [kt.Single, At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.rangeInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.headerRow ?? null]);
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152) ? jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152) : JSON.stringify([kt.Single, At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.rangeInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.isRowDirection ?? true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.headerRow ?? null]);
}
const Nt = new Set([AddWorksheetMergeMutation.id, SetRangeValuesMutation.id, ReorderRangeMutation.id, SetRowHiddenMutation.id, SetRowVisibleMutation.id, SetColHiddenMutation.id, SetColVisibleMutation.id, RemoveColMutation.id, RemoveRowMutation.id, MarkDirtyFilterChangeMutation.id, SetNumfmtMutation.id, RemoveNumfmtMutation.id, RemoveWorksheetMergeMutation.id]),
  Pt = new Set([AddWorksheetMergeMutation.id, RemoveWorksheetMergeMutation.id, SetColHiddenMutation.id, SetColVisibleMutation.id, SetRowHiddenMutation.id, SetRowVisibleMutation.id]),
  Ft = Object.freeze({
    startRow: -1,
    startColumn: -1,
    endRow: 0,
    endColumn: 0
  });
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 = false,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = false;
  return {
    dispose: () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 = true;
    },
    publish: () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 || (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = true, queueMicrotask(() => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = false, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154();
      }));
    }
  };
}
let Lt = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, this._refRangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, W(this, "_entries", new Map());
  }
  watch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
        rangeInfo: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366),
        callbacks: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = {
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368,
      consumers: new Set(),
      watcher: {
        dispose: () => {}
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.watcher = this._watchRange(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366), () => this._publishDataChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 => this._publishRangeChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112)), this._entries["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.consumers["add"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7);
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = false;
    return toDisposable(() => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 || (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.consumers["delete"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.consumers["size"] > 0 || this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) && (this._entries["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.watcher["dispose"]()));
    });
  }
  _publishDataChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374) {
    Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.consumers).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.callbacks["onDataChanged"]());
  }
  _publishRangeChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377) {
    Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.consumers).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115;
      if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377);else {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.rangeInfo);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.rangeInfo = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.rangeInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.headerRow === undefined ? delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.headerRow : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.headerRow = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.headerRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.callbacks["onRangeChanged"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115);
    });
  }
  _watchRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380));
    return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) ? this._watchMultiRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383) : this._watchSingleRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383);
  }
  _watchSingleRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390) {
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow === CHART_HEADER_ROW_NONE) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = this._watchSourceCommands([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = this._refRangeService["watchRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo["range"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659
          } : this._emptyRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390();
        });
      return toDisposable(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.dispose();
      });
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.startRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.startRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = It(() => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo["range"];
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.startRow >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.startRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.startRow : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.headerRow = CHART_HEADER_ROW_NONE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390();
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = this._watchSourceCommands([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.publish),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = this._refRangeService["watchRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.rangeInfo["range"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123
        } : this._emptyRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.publish();
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = this._refRangeService["watchRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) => {
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127
        } : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.publish();
      });
    return toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.dispose();
    });
  }
  _watchMultiRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.header, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.range]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = this._watchSourceCommands(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.publish),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 => this._refRangeService["watchRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.range, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.range = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663
        } : this._emptyRange(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.publish();
      }));
    return toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.dispose(), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.dispose());
    });
  }
  _watchSourceCommands(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420) {
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.unitId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = new Map(), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134));
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.subUnitId) ?? [];
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.subUnitId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === SetRangeValuesMutation.id) {
        let {
          cellValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139(new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668).getStartEndScope()) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === ReorderRangeMutation.id) {
          let {
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
        } else {
          if (Pt.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id)) {
            let {
              ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
          } else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === RemoveColMutation.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === RemoveRowMutation.id) {
              let {
                  range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466
                } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params,
                var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => Rectangle.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.range));
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.range = this._emptyRange()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420());
            } else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === MarkDirtyFilterChangeMutation.id) {
                let {
                  filterRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465
                } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
              } else {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === SetNumfmtMutation.id) {
                  let {
                    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462
                  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
                  Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46].ranges["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139)) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
                } else {
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.id === RemoveNumfmtMutation.id) {
                    let {
                      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461
                    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.params;
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419();
                  }
                }
              }
            }
          }
        }
      }
    };
    return this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144;
      if (!Nt.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.id)) return;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.params,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147);
    });
  }
  _emptyRange() {
    return {
      ...Ft
    };
  }
  dispose() {
    this._entries["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.watcher["dispose"]()), this._entries["clear"](), super.dispose();
  }
};
var Rt = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
    this._release = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, W(this, "_dataSource$", undefined), W(this, "_dataChanged$", new Subject()), W(this, "_entry", undefined), W(this, "_isDisposed", false), W(this, "dataSource$", undefined), W(this, "dataChanged$", undefined), this._entry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, this._dataSource$ = new BehaviorSubject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.dataSource), this.dataSource$ = this._dataSource$["asObservable"](), this.dataChanged$ = this._dataChanged$["asObservable"]();
  }
  get dataSource() {
    return this._dataSource$["getValue"]();
  }
  get entry() {
    return this._entry;
  }
  attach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) {
    this._entry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, this._dataSource$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.dataSource);
  }
  detach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
    this._entry === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 && (this._entry = undefined);
  }
  publishDataChanged() {
    this._dataChanged$["next"]();
  }
  dispose() {
    this._isDisposed || this._release(this);
  }
  complete() {
    this._isDisposed || (this._isDisposed = true, this._entry = undefined, this._dataSource$["complete"](), this._dataChanged$["complete"]());
  }
};
let zt = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, this._rangeWatcherManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435, W(this, "_entries", new Map()), W(this, "_handles", new Set()), W(this, "_isDisposed", false);
  }
  acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438) {
    if (this._isDisposed) throw Error("Cannot acquire a Sheet chart datasource after manager disposal.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 = this._normalizeSourceSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = this._getOrCreateEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = new Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 => this._releaseHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.handles["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441), this._handles["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441;
  }
  refreshAll() {
    this._entries["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 => this._refreshEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155));
  }
  _getOrCreateEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = yt(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
        key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447,
        sourceSpec: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
        dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449,
        handles: new Set(),
        rangeWatcherLease: {
          dispose: () => {}
        }
      };
    try {
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11.rangeWatcherLease = this._rangeWatcherManager["watch"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, {
        onDataChanged: () => this._refreshEntry(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11),
        onRangeChanged: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => this._replaceEntryRange(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669)
      }), this._entries["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
    }
  }
  _refreshEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
    this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.key) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.dataSource["refreshDataSet"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.handles["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.publishDataChanged()));
  }
  _replaceEntryRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
    if (this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.key) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = this._getOrCreateEntry(this._normalizeSourceSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 && Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.handles).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 => this._moveHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458));
  }
  _moveHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.entry === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.handles["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.attach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.handles["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462), this._disposeEntryWithoutHandles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463));
  }
  _releaseHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.entry;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.handles["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.detach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469), this._disposeEntryWithoutHandles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469)), this._handles["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.complete();
  }
  _disposeEntryWithoutHandles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.handles["size"] > 0 || this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.key) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 || (this._entries["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.key), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.rangeWatcherLease["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.dataSource["dispose"]());
  }
  _normalizeSourceSpec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
    return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475,
      isRowDirection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.isRowDirection ?? true
    };
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._handles["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.complete()), this._handles["clear"](), this._entries["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.rangeWatcherLease["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.dataSource["dispose"]();
    }), this._entries["clear"](), super.dispose());
  }
};
let Bn = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861, this._chartModelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, this._sheetsChartService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863, this._initCommands(), this._initCommandInterceptor();
  }
  _initCommands() {
    [Ln, Gt, Jt, Nn, Pn, Vt, Ht, qt].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215)));
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.id === RemoveSheetDrawingCommand.id) {
          let {
              drawings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.params,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.drawingType === DrawingTypeEnum.DRAWING_CHART);
          if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [];
          return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => {
            let {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
                drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = this._chartModelService["getChartModel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._sheetsChartService["getChartSourceSpec"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) throw TypeError("Fail to get data source range info, get: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628);
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.push({
              id: Pn.id,
              params: {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
                chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626
              }
            });
            let {
                chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
                context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
                style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
                dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.serialize(),
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
                chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626,
                chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
                ...jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628),
                context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
                style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
                dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632
              };
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
              id: Nn.id,
              params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
            });
          }), {
            preRedos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3,
            redos: [],
            preUndos: [],
            undos: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4
          };
        }
        return {
          preRedos: [],
          redos: [],
          preUndos: [],
          undos: []
        };
      }
    }));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 = An, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871
    } = merge({}, An, this._config);
    this._configService["setConfig"](kn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871);
  }
  onStarting() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 = this._injector;
    [[q], [Lt], [zt], [J], [Bn]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218)), touchDependencies(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876, [[q], [J], [Bn]]);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659 as UniverSheetsChartPlugin };
export { Lt, zt, Bn };
