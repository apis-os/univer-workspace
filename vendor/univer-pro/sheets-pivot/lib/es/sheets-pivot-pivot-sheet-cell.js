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
function wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462548) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462549 = ox3ed833_1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546),
    {
      rangesInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462550,
      areaInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462551,
      headerMap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552,
      projection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462548;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462550 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462551 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462550).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462550[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478].find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 => ox509ead_1.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462549)), !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462551.rowInfo[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462551.colInfo[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 === 'rowRanges') var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.rowHeaderMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546];else {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 === "colRanges" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547.pbt) === ox13b5b1.Collapse || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547.pbt) === ox13b5b1.Expand) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.colHeaderMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545];else {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553 ? V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553 ? Math.min(V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554.startColumn), V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554.endColumn)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554.startColumn;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462552.colHeaderMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545 + 1 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16];
      }
    } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 === "cornerRanges" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462551.cornerInfo[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546]);
  }
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547.pbt) === ox13b5b1.Collapse || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547.pbt) === ox13b5b1.Expand ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559.tableFieldId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558.tableFieldId) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558.tableFieldId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559.tableFieldId);
  return {
    'area': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555,
    'info': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462558,
    'rowInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556,
    'columnInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462557,
    'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547,
    'headerInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559,
    'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560
  };
}
export { wn as resolvePivotSheetCell };
