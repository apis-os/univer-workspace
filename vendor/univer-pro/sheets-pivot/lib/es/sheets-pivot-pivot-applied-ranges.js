import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { Pn } from "./sheets-pivot-empty-pivot-ranges.js";
import { G } from "./sheets-pivot-adjust-ranges-position.js";
import { Nt } from "./internal-core-endo.js";
import { Pt } from "./sheets-pivot-map-pivot-sheet-range.js";
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462716) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462715) return Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462716);
  let {
      pageView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717,
      cornerView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718,
      rowView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462719,
      colView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462720,
      dataView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462721
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462722 = G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717, true),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717.lastRow >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462717.lastRow + 1 : 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718.rowCount,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718.colCount,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = +(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462722.length > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462725 = G({
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.row + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76,
      'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.col
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462718, false, false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726 = G({
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.row + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462723,
      'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.col
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462719, false, true),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727 = G({
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.row + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76,
      'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.col + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462720, false, true),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728 = G({
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.row + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462723,
      'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.col + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462721, false, true),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462729 = Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462713.col, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462716);
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462722, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462725, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515 => Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515));
}
export { Fn as getPivotAppliedRanges };
