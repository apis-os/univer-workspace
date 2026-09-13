import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { q, rn } from "./internal-core-endo.js";
let Y = class extends ox1100d5_1 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, q(this, "_requestResolvers", new Map());
  }
  handleAsyncResponse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921) {
    let {
        version: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 = this._requestResolvers['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 && (this._requestResolvers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.error === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.reject(Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.error)));
  }
  async getPivotDisplayConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 = this._generateUniqueVersion(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 = new Promise((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609) => {
        this._requestResolvers['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, {
          'resolve': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608,
          'reject': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609
        });
      });
    try {
      (await this._commandService['executeCommand'](rn.id, {
        'version': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927
      }, {
        'onlyLocal': true
      })) || this._rejectRequest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, Error('[SheetsPivotRPCService]:\x20pivot\x20request\x20dispatch\x20failed'));
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56) {
      this._rejectRequest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56);
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929;
  }
  dispose() {
    super.dispose();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = Error("[SheetsPivotRPCService]: disposed with pending pivot requests");
    this._requestResolvers["forEach"](({
      reject: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933)), this._requestResolvers["clear"]();
  }
  _rejectRequest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 = this._requestResolvers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 && (this._requestResolvers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937.reject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936));
  }
  _generateUniqueVersion() {
    return Math.random().toString(36).substring(2, 16);
  }
};
export { Y as SheetsPivotRPCService };
