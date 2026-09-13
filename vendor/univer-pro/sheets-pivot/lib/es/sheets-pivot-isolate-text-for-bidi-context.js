import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
const kt = /[\u0590-\u08FF\uFB1D-\uFEFC]/;
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145) {
  return kt.test(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145 ?? ''));
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 ?? '');
  return !var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21.startsWith('⁨') && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21.endsWith('⁩') ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 : '⁨' + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 + '⁩';
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149 ?? '');
  return !At(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.some(At) ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 : jt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23);
}
export { Mt as isolateTextForBidiContext };
