import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { V } from "./sheets-pivot-map-pivot-sheet-column.js";
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.startColumn),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.endColumn);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164,
    'startColumn': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166),
    'endColumn': Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166)
  };
}
export { Pt as mapPivotSheetRange };
