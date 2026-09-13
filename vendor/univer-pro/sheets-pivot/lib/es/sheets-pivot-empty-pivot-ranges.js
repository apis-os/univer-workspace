import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706 = "ltr") {
  let {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
      col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708 + 6 - 1;
  return [{
    'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
    'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706 === 'rtl' ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706 === "rtl" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
  }, {
    'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707 + 2,
    'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707 + 14 - 1,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708,
    'endColumn': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74
  }];
}
export { Pn as getEmptyPivotRanges };
