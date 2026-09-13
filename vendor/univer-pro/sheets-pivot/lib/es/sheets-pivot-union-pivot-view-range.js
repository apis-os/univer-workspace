import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
const kn = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633 => {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633) return [];
  let {
      rowRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462634,
      colRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462635,
      cornerRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462636,
      dataRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637,
      pageRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462638
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462635, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462634, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462636].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.startRow >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.startColumn >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.endRow >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.endColumn >= 0);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.length === 0) return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462638];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462639 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[0].startRow,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462640 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[0].endRow,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462641 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[0].startColumn,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[0].endColumn;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462639 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462639, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48].startRow), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462640 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462640, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48].endRow), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462641 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462641, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48].startColumn), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48].endColumn);
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462638, {
    'startRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462639,
    'endRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462640,
    'startColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462641,
    'endColumn': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462642
  }];
};
export { kn as unionPivotViewRange };
