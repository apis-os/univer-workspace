import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { K, nn, q } from "./internal-core-endo.js";
const rr = new Set([ox13b5b1.FilterAll, ox13b5b1.FilterPartial, ox13b5b1.FilterSingle, ox13b5b1.FilteredSortNone, ox13b5b1.FilteredSortAsc, ox13b5b1.FilteredSortDesc, ox13b5b1.FilterNoneSortNone, ox13b5b1.FilterNoneSortAsc, ox13b5b1.FilterNoneSortDesc]);
let Q = class extends ox1100d5_1 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893) {
    super(), this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891, this._sheetsPivotTableAdaptorModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, q(this, "asyncInterceptor", new ox81e052({
      'PIVOT_PERFORM_CHECK': K
    })), q(this, "interceptor", new oxf5008e({
      'PIVOT_MUTATION_GENERATE': nn
    })), this._init();
  }
  _init() {
    this._initViewModelBySheetInterceptor();
  }
  getPivotPerformCheck(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897) {
    return this.asyncInterceptor["fetchThroughAsyncInterceptors"](K)(false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897);
  }
  _initViewModelBySheetInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["intercept"](ox3e84e0.CELL_CONTENT, {
      'priority': 200,
      'effect': ox29b86e.Value | ox29b86e.Style,
      'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) => {
        let {
            row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739,
            col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742,
            workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 = this._sheetsPivotTableAdaptorModel["getPivotTableCellData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736);
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736
        };
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.v || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.v === 0) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.v = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.v), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.t && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.t = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.t);
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57 = (typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.s) == 'string' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.getStyles().get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.s) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.s) || {},
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.getStyles().get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.s),
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58 = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745,
            ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57
          };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.n && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58.n = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.n);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = this._localeService["getDirection"]();
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 === "rtl" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.pbt && rr.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.pbt) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58.ht = ox13e34d.RIGHT, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fontRenderExtension = {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fontRenderExtension,
          'leftOffset': 16
        }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.s = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.getStyles().setValue(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.pbt === ox13b5b1.Collapse || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.pbt === ox13b5b1.Expand) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fontRenderExtension = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 === "rtl" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fontRenderExtension["rightOffset"] = 16 : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56.fontRenderExtension['leftOffset'] = 16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56);
      }
    }));
  }
};
export { Q as SheetsPivotTableService };
