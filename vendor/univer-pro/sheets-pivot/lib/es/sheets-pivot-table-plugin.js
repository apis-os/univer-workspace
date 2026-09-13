import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { wn } from "./sheets-pivot-pivot-sheet-cell.js";
import { Jt, Nt, Qn, W, X, Zt, an, ar, cn, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F, ir, on, q, rn, sn } from "./internal-core-endo.js";
import { V } from "./sheets-pivot-map-pivot-sheet-column.js";
import { Z } from "./sheets-pivot-table-config-model.js";
import { Qr, Zr, ai, ci, di, ei, fi, gi, hi, ii, li, mi, ni, oi, pi, ri, si, ti, ui, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157 } from "./sheets-pivot-pivot-field.js";
import { kn } from "./sheets-pivot-union-pivot-view-range.js";
import { Ar, Cr, Dr, Er, Fr, Hr, Ir, Lr, Mr, Nr, Or, Pr, Tr, Ur, Vr, Wr, jr, kr, wr, zr } from "./sheets-pivot-add-pivot-field.js";
import { Fn } from "./sheets-pivot-pivot-applied-ranges.js";
import { Nn } from "./sheets-pivot-generate-range-value-mutations.js";
import { er, tr } from "./sheets-pivot-plugin-config-key.js";
import { Q } from "./sheets-pivot-table.js";
import { Y } from "./sheets-pivot-rpcservice.js";
import { nr } from "./sheets-pivot-table-adaptor-model.js";
function Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526 = wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526) return;
  let {
      area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462527,
      info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462528,
      headerInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462529,
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530,
      tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462531
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462526,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462531;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462527 === 'pageRanges') {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530.fi;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524.getFilterFieldIdByIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477));
  }
  return {
    'filterId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462532,
    'info': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462528,
    'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462530,
    'headerInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462529
  };
}
function Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.dataFieldsCollection,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616.getFieldIds(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995 = new Set();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.iterateField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482 => {
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.dataFieldId);
  });
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462617.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484);
      return {
        'checked': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484),
        'dataFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.id,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.id,
        'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.id),
        'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.getFieldDataType(),
        'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614
      };
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47 = [];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.iterateFieldByArea(ox4169a3_1.Row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47.push({
      'dataFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.dataFieldId,
      'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.getId(),
      'displayName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.getDisplayName()
    });
  });
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48 = [];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.iterateFieldByArea(ox4169a3_1.Column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.push({
      'dataFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.dataFieldId,
      'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.getId(),
      'displayName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490.getDisplayName()
    });
  });
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49 = [];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.iterateFieldByArea(ox4169a3_1.Value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49.push({
      'dataFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.dataFieldId,
      'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getId(),
      'displayName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getDisplayName(),
      'format': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getFormat(),
      'subTotalType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getSubtotal(),
      'showDataAs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.getShowDataAs()
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49.length > 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.getValueIndex();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.isColMultiMeasure() ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48 : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47).splice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, 0, {
      'dataFieldId': '',
      'tableFieldId': "PivotMultipleValueId",
      'displayName': 'ΣValue'
    });
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613.iterateFieldByArea(ox4169a3_1.Filter, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50.push({
      'dataFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.dataFieldId,
      'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.getId(),
      'displayName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.getDisplayName()
    });
  }), {
    'sourceList': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46,
    'sourceRange': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615.sourceRangeInfo,
    'rowFields': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47,
    'columnFields': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48,
    'valueFields': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49,
    'filterFields': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50,
    'positionInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615.targetCellInfo
  };
}
function An(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462654) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462654.params['drillDown'],
    {
      pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462656,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462654;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462653.get(X),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659.getPivotTableInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462656),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462656);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462661) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660.getIndexesByPathStr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655.tuple);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462662 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462662.length)) return;
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462665
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462661.sourceRangeInfo,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 = 0;
  return {
    'indexes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462662,
    'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462665,
    'sourceUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663,
    'sourceSubUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664,
    'formatMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660.dataFieldsCollection["getFieldIds"]().reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462660.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.getformat();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499[String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72)] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72++, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499;
    }, {})
  };
}
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462791) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462791) ox2d4eb5.hasCJK(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 += 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 += 1;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80;
}
const zn = new Set([ox13b5b1.FilterAll, ox13b5b1.FilterPartial, ox13b5b1.FilterSingle, ox13b5b1.FilteredSortNone, ox13b5b1.FilteredSortAsc, ox13b5b1.FilteredSortDesc, ox13b5b1.FilterNoneSortNone, ox13b5b1.FilterNoneSortAsc, ox13b5b1.FilterNoneSortDesc, ox13b5b1.Collapse, ox13b5b1.Expand]);
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793 <= 32) return Array.from({
    'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518);
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92997 = new Set();
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 < 32; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49++) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92997.add(Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462793 - 1) / 31));
  return Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92997);
}
function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462795) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796 = Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462795);
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796 == 'number' ? String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796) : undefined;
}
function Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804 = Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803 && zn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803) ? 16 : 0,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB109 = {
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804,
      'buttonOffset': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82,
      'score': Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804) * 8 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462799[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519.text === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519.buttonOffset === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82) >= 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB109), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521.score - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520.score), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.length > 4 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462805.length = 4));
}
function Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815) {
  let {
    pageView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816,
    cornerView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817,
    rowView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813;
  Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.data).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522);
    Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28];
      Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.candidates, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.occupiedColumns, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.v, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.s);
    });
  });
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.colCount; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52++) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.occupiedColumns["add"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.rowCount; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17++) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.data[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.v;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818.headerMap[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820.isValue && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.colCount - 1 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.rowCount - 1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814["sheets-pivot.value"]), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817.info[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462821.isRowLabel && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814["sheets-pivot.rowLabels"] || "Row Labels"), Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.candidates, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.occupiedColumns, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.s);
    }
  }
}
function Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834) {
  let {
      rowView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835,
      formatMap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462831,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835.rowCount);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835.colCount; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462833.occupiedColumns["add"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836[(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835.headerMap[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838.tableFieldId];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462832, undefined, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834);
      Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462833.candidates, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462833.occupiedColumns, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.s);
    });
  }
}
function Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850) {
  let {
      cornerView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851,
      colView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852,
      formatMap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462847,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462854 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852.rowCount);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852.colCount; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54++) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851.colCount + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849.occupiedColumns["add"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462854.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852.getHeaderMapItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 + 1),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852.headerMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.tableFieldId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445],
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.isColumnLabel ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462848["sheets-pivot.columnLabels"] || 'Column\x20Labels' : Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 === 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.isValue), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462848["sheets-pivot.subTotalText"], undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850);
      Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849.candidates, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849.occupiedColumns, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.s);
    });
  }
}
function Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866) {
  let {
      cornerView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867,
      rowView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868,
      colView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869,
      dataView: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870,
      formatMap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462863,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.rowCount);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.colCount; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55++) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867.colCount + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865.occupiedColumns["add"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.data[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = Math.max(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.info[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.valueIndex) ?? -1, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869.info[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.valueIndex) ?? -1),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 < 0 ? 0 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18]],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.v == "number" ? ox2263f1.format(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.v, {
          'dateSystem': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866
        }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.v;
      Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865.candidates, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865.occupiedColumns, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.s);
    });
  }
}
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462886) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462883.candidates["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462884 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462883.occupiedColumns["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525)) {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526] = 16;
      return;
    }
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = 40;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524.forEach(({
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678,
      buttonOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679
    }) => {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462886(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) + 12 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679));
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526] = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, 400);
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111;
}
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896 = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897 = ox3d0748.Date1900) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898 = Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462893),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898.startColumn + 1,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113 = {
      'candidates': Array.from({
        'length': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84
      }, () => []),
      'occupiedColumns': new Set()
    };
  return Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462894, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113), Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462894, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897), Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462894, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897), Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897), qn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462895);
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462908) {
  let {
    rowFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909,
    columnFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462910,
    valueFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911,
    filterFields: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912,
    dimension: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913,
    measure: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462914
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462908;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.dataFieldId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.dataFieldId, ox4169a3_1.Row, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461530), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.displayName && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.displayName), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.sortInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setSortInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.sortInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.filterInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682.filterInfo));
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462910) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.dataFieldId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.dataFieldId, ox4169a3_1.Column, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.sortInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setSortInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.sortInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.filterInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.filterInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.displayName && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.displayName));
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.dataFieldId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.dataFieldId, ox4169a3_1.Filter, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.sortInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setSortInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.sortInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.filterInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.filterInfo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.displayName && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.displayName));
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462914[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.dataFieldId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.dataFieldId, ox4169a3_1.Value, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.subtotal !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setSubtotalType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.subtotal), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.format && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setFieldFormat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.format), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.displayName && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.displayName));
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462908.valueFilter;
  for (let {
    fieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534,
    filterInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535
  } of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462915) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462907.setValueFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535);
}
function Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62 = [];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 === ox4169a3_1.Row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.iterateFieldByArea(ox4169a3_1.Row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536.getId());
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 === ox4169a3_1.Column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.iterateFieldByArea(ox4169a3_1.Column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538.getId());
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 === ox4169a3_1.Filter && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.iterateFieldByArea(ox4169a3_1.Filter, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.getId());
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 === ox4169a3_1.Value && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.iterateFieldByArea(ox4169a3_1.Value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542.getId());
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.iterateField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.getId());
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462927 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.length;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462927 - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58--) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.removeField(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.getValueFilterInfos();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925.removeValueFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546);
}
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462934) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18 = ox22eb53_1.dateSystem === ox3961d1.Date1900,
    var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242 = new Date(ox1a54bb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462934, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18)),
    var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421 = new Date(ox1a54bb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A18)),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getFullYear() === var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421.getFullYear(),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 && var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() === var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421.getMonth(),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 && var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getDate() === var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421.getDate();
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 ? ox9b83ca_1.YearMonthDate : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A20 ? ox9b83ca_1.YearMonth : ox9b83ca_1.Year;
}
const yi = {
    'id': "sheet.command.update-date-group",
    'type': ox3c5662.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343.get(ox10ebc2),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464347,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A98 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343.get(Z),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.getCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348);
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464352 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464352.fieldsConfig["dimension"])) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464353 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464352.fieldsConfig["dimension"]).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939.id === ox28360e);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464353) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464353.dataFieldId;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351.fields)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351.fields).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355 ? (ox475b1f(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A98.push({
        'id': ai.id,
        'params': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344,
          'dateType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355.dateType
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99.push({
        'id': ai.id,
        'params': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344
        }
      }), ox448739(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343.get(ox53f8d0)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464345.pushUndoRedo({
        'unitID': ox116e83,
        'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A98,
        'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99
      }), true) : false) : false;
    }
  },
  bi = {
    'type': ox3c5662.MUTATION,
    'id': "sheet.operation.pivot-table-view-formula-mark-dirty",
    'handler'() {
      return true;
    }
  },
  xi = () => ({
    'runtimeCellData': {},
    'dirtyRanges': {}
  }),
  Si = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.dataFieldsCollection;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.iterateFieldDim(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.getId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.getDataFieldId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.getSourceName(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.getDisplayName();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464372.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.setSourceName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464372.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943)));
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.iterateFieldByArea(ox4169a3.Value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.getId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.getDataFieldId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.getSourceName(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.getDisplayName(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.getSubtotal(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464372.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.setSourceName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464372.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953)));
    });
  },
  Ci = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381;
    let {
        arrayFormulaCellData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464382,
        unitData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378,
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379.range,
      {
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464388
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464382 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464382[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385],
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999 = new Set(),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464388 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387 + 1,
      {
        dirtyRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464391
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377;
    if (ox20152e) for (let {
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965,
      sheetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967
    } of ox20152e) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 !== ox19d78c || ox1e62fe !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = ox41a0ab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769) {
        let {
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203++) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203);
      }
    }
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.size === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.size === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94) return Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464390) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464390.getMatrix(),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770)];
        if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.size === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94) break;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204);
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < ox28e498 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 > ox15abf9 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.add(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1);
        }
      }
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464389) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464389.getMatrix(),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771)];
        if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.size === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94) break;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205);
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < ox28e498 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 > ox15abf9 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.add(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2);
        }
      }
    }
    return Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999);
  },
  wi = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464407 => {
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929911 = new Set(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464407) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.startRow + ',' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.endRow + ',' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.startColumn + ',' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.endColumn;
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929911.has(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14) || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929911.add(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970));
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102;
  };
let Ti = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977) {
    super(), this._sheetsPivotDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971, this._featureCalculationManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973, this._globalComputingSrv = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977, q(this, "_globalSubject", new ox12f8b2(true)), q(this, "_globalComputedStartHelpFunc", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 => {
      this._globalSubject["next"](false);
    }), q(this, "_globalComputedEndHelpFunc", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774 => {
      this._globalSubject["next"](true);
    }), this._init(), this._initPivotDataGetListener();
  }
  _isAutoDateGroupEnabled() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985 = this._configService["getConfig"]('sheets-pivot.config')) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985.autoDateGroup) ?? true;
  }
  _setDateSystem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987, ox2402ca.UNIVER_SHEET);
    Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.getDateSystem());
  }
  _init() {
    this._subjectCollectionChange(), this._subjectViewChange(), this._initPivotTextInfo(), this._subjectFieldsCollectionChange();
  }
  _initGlobalComputed() {
    this._globalComputingSrv["pushComputingStatusSubject"](this._globalSubject), ox34933b.registerCallbackWithEvent(ox4af6e8.onQueryStart, this._globalComputedStartHelpFunc), ox34933b.registerCallbackWithEvent(ox4af6e8.onQueryEnd, this._globalComputedEndHelpFunc);
  }
  _initPivotDataGetListener() {
    this.disposeWithMe(this._commandService['onCommandExecuted'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.id === ox4a1e09.id && this._sheetsPivotDataSourceModel['handleMoveRange'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.params);
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778.id !== rn.id) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778.params,
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["type"],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62 = {},
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784;
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783) {
        case "filter":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["filter"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) return;
            let {
                row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207,
                col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208,
                cellData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209,
                pivotItemRenderInfoCache: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210,
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.pivotTableId);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 || !ox2617ef) return;
            if (ox3a7f89) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getDataFieldByTableId(ox3a7f89);
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) return;
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.filter = {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getDataFieldItemInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679),
                'tableFieldId': ox3a7f89,
                'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.pivotTableId,
                'filterInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getFilterInfo(ox3a7f89),
                'sortInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getSortInfo(ox3a7f89),
                'format': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getFieldFormat(ox3a7f89)
              };
            } else {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = Cn(ox41b38b, ox7e1449, ox25a0e4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, ox2617ef),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.filterId;
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) return;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getDataFieldByTableId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) return;
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.filter = {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getDataFieldItemInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682),
                'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681,
                'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.pivotTableId,
                'filterInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681),
                'sortInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getSortInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681),
                'format': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.getFieldFormat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)
              };
            }
          }
          break;
        case "panel":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["panel"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) return;
            let {
                pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) return;
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.panel = Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, ox1370b1, this._sheetsPivotDataSourceModel['getPivotTableConfig'](ox449249, ox41821c, ox1370b1));
          }
          break;
        case "addPivotField":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = this._sheetsPivotDataSourceModel['getDataFieldManager'](ox449249),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.getCollection(ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = null,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["addPivotField"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) return false;
            let {
              dataFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222,
              fieldArea: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223,
              index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.startCollectChangeset();
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 === ox4169a3.Value) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.getId(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getDataFieldByTableId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.getFieldDataType();
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.setSubtotalType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 === ox5d8c1f.number ? ox2829d9.sum : ox2829d9.count);
              }
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getValueIndex(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getValuePosition(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getFieldCountByArea(ox4169a3.Value);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 === -1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 > 1) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 === ox21de0b.None ? ox21de0b.Column : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 === ox21de0b.Row ? ox4169a3.Row : ox4169a3.Column;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.updateValuePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getFieldCountByArea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639));
              }
            } else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 === ox4169a3.Row || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 === ox4169a3.Column)) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.getId(),
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.getDataFieldByTableId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640);
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.getFieldDataType()) === ox5d8c1f.date) {
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.getformat();
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.setFieldFormat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), this._isAutoDateGroupEnabled() && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.getFieldIds().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
                    return ox2808c6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getFieldInfo().originalFieldId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 : false;
                  })) {
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.createDataFieldId();
                    this._setDateSystem(ox449249);
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.maxDate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.minDate),
                      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.getName() + '\x20-\x20' + fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468),
                      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = new ox5e0e48(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, oxae8776(3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.addDataFieldWithoutUnitInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.addField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 ?? 0) + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469;
                  }
                }
              }
            }
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.query().toJSON(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.toJSON();
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.getId();
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.deleteField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
              let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
              for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.collections) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642].getFieldIds().includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688)) {
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
                break;
              }
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.deleteDataField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
            }
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.addPivotField = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227,
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.endCollectChangeset(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
              'shouldBeAddedGroupJSON': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228
            };
          }
          break;
        case "addPivotTable":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["addPivotTable"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.sourceRangeInfo,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.pivotTableId,
              {
                collection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232
              } = this._sheetsPivotDataSourceModel["createCollectionWithDataRange"]({
                'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.unitId,
                'sheetName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.sheetName,
                'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.subUnitId,
                'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.range
              }),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = new ox34933b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231);
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.addPivotTable = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.query(),
              'fieldsConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.toJSON(),
              'collectionConfig': ox20a453.toJSON(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.isEmpty()
            };
          }
          break;
        case 'setPivotDateGroup':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = this._sheetsPivotDataSourceModel['getDataFieldManager'](ox449249),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.getCollection(ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = this._sheetsPivotDataSourceModel['getPivotTableConfig'](ox449249, ox41821c, ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotDateGroup"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238) return false;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239,
                dateType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238,
              {
                area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241,
                index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getFieldPositionInfoById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 !== ox4169a3.Row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 !== ox4169a3.Column) return false;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getDataFieldByTableId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) return false;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.toJSON(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 === ox4169a3.Row ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.rowFields : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.columnFields;
            if (ox2808c6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243)) {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getDateType() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) return false;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getOriginFieldId()),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getTableFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239);
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239) return false;
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.dimension[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.dataFieldId) : undefined;
                return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 ? ox2808c6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.getOriginFieldId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getOriginFieldId() && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.getDateType() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 : false;
              })) return false;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getDateType(),
                var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.displayNameRecord
                },
                var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.getName() + " - " + fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.setDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getId(), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.getId(), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.setDateType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240), this._setDateSystem(ox449249), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.refreshGroupField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.setDirty(true);
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.isEmpty(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.query().toJSON();
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.endCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.setDateType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691), this._setDateSystem(ox449249), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.refreshGroupField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.displayNameRecord = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotDateGroup = {
                'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
                'changesets': [],
                'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
                'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237
              };
              break;
            }
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getFieldDataType() !== ox5d8c1f.date) return false;
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.some((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.dimension[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694];
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) return false;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.dataFieldId);
              if (ox2808c6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.getOriginFieldId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getId()) {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.getDateType() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) return true;
                var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 !== -1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 + 1);
              }
              return false;
            })) return false;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.startCollectChangeset();
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.createDataFieldId(),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getName() + " - " + fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = new ox5e0e48(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, oxae8776(3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240);
            this._setDateSystem(ox449249), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.addDataFieldWithoutUnitInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.addField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.refreshGroupField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.setCollapse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, true);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.query().toJSON(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.toJSON();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.deleteField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247);
            let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true;
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.collections) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102].getFieldIds().includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247)) {
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
              break;
            }
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.deleteDataField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotDateGroup = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250,
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.endCollectChangeset(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237,
              'shouldBeAddedGroupJSON': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251
            };
          }
          break;
        case 'movePivotField':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["movePivotField"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) return;
            let {
                fieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
                area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
                index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.startCollectChangeset();
            let {
              area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258,
              index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getFieldPositionInfoById(ox221444);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.updateFieldPosition(ox221444, ox534d28, ox1e21bb), ox534d28 === ox4169a3.Value && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getTableFieldById(ox221444).getSubtotal() === undefined) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getTableFieldById(ox221444);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.getSubtotal() === undefined) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getDataFieldByTableId(ox221444);
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.getFieldDataType();
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.setSubtotalType(ox221444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 === ox5d8c1f.number ? ox2829d9.sum : ox2829d9.count);
                }
              }
            }
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getValuePosition(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getValueIndex(),
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getFieldCountByArea(ox4169a3.Value) > 1;
            if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 === ox534d28 && (ox534d28 === ox4169a3.Row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Row || ox534d28 === ox4169a3.Column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Column)) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104--, ox1e21bb <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104++, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.updateValuePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104);
            } else var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 === ox4169a3.Row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Row || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 === ox4169a3.Column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Column) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.updateValuePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 - 1), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && (ox534d28 === ox4169a3.Row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Row || ox534d28 === ox4169a3.Column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === ox21de0b.Column) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 >= ox1e21bb && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.updateValuePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 + 1);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.query(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.endCollectChangeset();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.movePivotField = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.toJSON(),
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256
            };
          }
          break;
        case "removePivotField":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params['removePivotField'];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.fieldIds,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) return false;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) return false;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.startCollectChangeset();
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266) {
              let {
                area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.getFieldPositionInfoById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 === ox4169a3.Value && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.removeValueFilterInfoByValueFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 === ox4169a3.Row || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 === ox4169a3.Column) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.removeValueFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.removeField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
            }
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.query().toJSON();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.removePivotField = {
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.endCollectChangeset(),
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267,
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269,
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270
            };
          }
          break;
        case "setPivotFilter":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params['setPivotFilter'];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) return;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272,
                items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273,
                isAll: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = this._sheetsPivotDataSourceModel['getPivotTableInstance'](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.setLabelFilterInfo(ox4f8752, {
              'type': ox9f683e.ManualFilter,
              'list': ox26862e,
              'isAll': ox5632c7
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotFilter = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.query().toJSON(),
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.endCollectChangeset(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276
            };
          }
          break;
        case "setValuePivotFilter":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setValuePivotFilter"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278) break;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
                filterInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) break;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.startCollectChangeset();
            try {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.setValueFilterInfo(ox44d5a2, ox3272b0);
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.isEmpty(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.query().toJSON(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.endCollectChangeset();
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.length > 0 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setValuePivotFilter = {
                'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
                'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
                'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
                'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
              });
            } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.cancelCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 instanceof Error ? var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5.message : String(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5);
            }
          }
          break;
        case "setPivotSort":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotSort"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283) return;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
                info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = this._sheetsPivotDataSourceModel['getPivotTableConfig'](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.setSortInfo(ox19626e, ox4b3b7c);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotSort = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.query().toJSON(),
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.endCollectChangeset(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287
            };
          }
          break;
        case "setPivotSetting":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotSetting"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289) break;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290,
                displayName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291,
                subtotalType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292,
                format: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
                showDataAs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 || ox25152d !== undefined && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.getValueFields().includes(ox5b3c1d) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.fieldsConfig["measure"][ox5b3c1d])) break;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.startCollectChangeset();
            try {
              ox42627d !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.renameField(ox5b3c1d, ox42627d), ox4ad677 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.setSubtotalType(ox5b3c1d, ox4ad677), ox19b6aa !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.setFieldFormat(ox5b3c1d, ox19b6aa), ox25152d !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.setShowDataAs(ox5b3c1d, ox25152d);
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.isEmpty(),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.query().toJSON();
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotSetting = {
                'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.endCollectChangeset(),
                'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
                'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
                'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110
              };
            } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.cancelCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52 instanceof Error ? var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52.message : String(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52);
            }
          }
          break;
        case "updatePivotSource":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["updatePivotSource"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) return;
            let {
                dataRangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240);
            if (!this._sheetsPivotDataSourceModel['getCollection'](ox250f26, ox4ee240) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = this._sheetsPivotDataSourceModel["getUpdateRangeDeleteIds"](ox250f26, ox4ee240, ox2515a3),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = this._sheetsPivotDataSourceModel["getCollection"](ox250f26, ox4ee240).toJSON(),
              {
                collection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305
              } = this._sheetsPivotDataSourceModel["createCollectionWithDataRange"]({
                'unitId': ox2515a3.unitId,
                'sheetName': ox2515a3.sheetName,
                'subUnitId': ox2515a3.subUnitId,
                'range': ox2515a3.range
              }),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305.toJSON();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.startCollectChangeset();
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 = this._sheetsPivotDataSourceModel["getDataFieldManager"](ox250f26).getAutoDisplayNameFunction() || ox1b7b99;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.iterateField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getDataFieldId();
              if (!ox1728d6.hasField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112)) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = ox1728d6.getDataFieldBySourceName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getSourceName());
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.updateFieldSourceInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.getName(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.getId());
                  let {
                      area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622
                    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.getFieldPositionInfoById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getId()),
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getSourceName(),
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getDisplayName();
                  if (ox38c6a4 === ox4169a3.Value) {
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getSubtotal();
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.getName(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
                  }
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
                } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.removeField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.getId());
              }
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.updatePivotSource = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.query().toJSON(),
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.endCollectChangeset(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301,
              'collectionConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306,
              'oldCollectionConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304,
              'deleteIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303
            };
          }
          break;
        case "updateValuePosition":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["updateValuePosition"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) return;
            let {
                position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310,
                index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312) return false;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) return false;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.updateValuePosition(ox517980, ox15e34c);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.query().toJSON();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.updateValuePosition = {
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.endCollectChangeset(),
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312,
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314,
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315
            };
          }
          break;
        case 'setPivotCollapse':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotCollapse"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316) return;
            let {
                tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317,
                collapse: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
                item: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = this._sheetsPivotDataSourceModel['getPivotTableConfig'](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.setCollapse(ox164626, ox81b558, ox46d6cb);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotCollapse = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.query().toJSON(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321,
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.endCollectChangeset()
            };
          }
          break;
        case 'setPivotTableConfig':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotTableConfig"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) return;
            let {
                pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = this._sheetsPivotDataSourceModel['getPivotTableInstance'](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = this._sheetsPivotDataSourceModel['getPivotTableConfig'](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.startCollectChangeset(), Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, ox335ddd);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.isEmpty(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.query().toJSON(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.endCollectChangeset();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotTableConfig = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327,
              'pivotTableConfig': {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
                'fieldsConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.toJSON()
              },
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329
            };
          }
          break;
        case "resetPivotTable":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["resetPivotTable"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = this._sheetsPivotDataSourceModel['getPivotTableInstance'](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.startCollectChangeset(), Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.resetArea);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.query().toJSON(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.endCollectChangeset();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.resetPivotTable = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
              'isEmpty': true,
              'pivotTableConfig': {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332,
                'fieldsConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.toJSON()
              },
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334
            };
          }
          break;
        case 'setOption':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setOptions"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335) return;
            let {
                info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = this._sheetsPivotDataSourceModel['getPivotTableInstance'](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setOptions(ox422d9d);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotOption = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.query().toJSON(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338,
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.endCollectChangeset()
            };
          }
          break;
        case "setPivotLayout":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params["setPivotLayout"];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340) return;
            let {
                layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 = this._sheetsPivotDataSourceModel["getPivotTableInstance"](ox4ee240),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = this._sheetsPivotDataSourceModel["getPivotTableConfig"](ox449249, ox41821c, ox4ee240);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) return;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.startCollectChangeset(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.setLayout(ox58adec);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.isEmpty();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.setPivotLayout = {
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.query().toJSON(),
              'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343,
              'changesets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.endCollectChangeset()
            };
          }
          break;
        case "AddPivotTableWithConfig":
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.params['addPivotTableWithConfig'];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.sourceRangeInfo,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.pivotTableId,
              {
                collection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348
              } = this._sheetsPivotDataSourceModel['createCollectionWithDataRange']({
                'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.unitId,
                'sheetName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.sheetName,
                'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.subUnitId,
                'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.range
              }),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = new ox34933b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348.getFieldIds(),
              {
                rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351,
                columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352,
                filters: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353,
                values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.pivotTableIndexConfig;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.startCollectChangeset();
            for (let {
              field: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115,
              selectedItems: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116
            } of ox3746ce || []) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115];
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, ox4169a3.Row);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.getId(), {
                  'type': ox9f683e.ManualFilter,
                  'list': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
                  'isAll': false
                });
              }
            }
            for (let {
              field: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
              selectedItems: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118
            } of oxe334b3 || []) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117];
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, ox4169a3.Column);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.getId(), {
                  'type': ox9f683e.ManualFilter,
                  'list': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
                  'isAll': false
                });
              }
            }
            for (let {
              field: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
              selectedItems: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120
            } of ox1ebf73 || []) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119];
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.addFieldWithSourceId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, ox4169a3.Filter);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setLabelFilterInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.getId(), {
                  'type': ox9f683e.ManualFilter,
                  'list': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
                  'isAll': false
                });
              }
            }
            for (let {
              field: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121,
              subTotalType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122,
              formatString: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123
            } of ox4e8ed1 || []) {
              let dataSyncPrimaryController = ox56429.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121]);
              if (!dataSyncPrimaryController) continue;
              let setSheetsFilterRangeMutation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121];
              if (setSheetsFilterRangeMutation) {
                let removeSheetsFilterMutation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.addFieldWithSourceId(setSheetsFilterRangeMutation, ox4169a3.Value);
                if (removeSheetsFilterMutation) {
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 !== undefined) {
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setSubtotalType(removeSheetsFilterMutation.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
                    let getFontStyleStringLocal = (this._sheetsPivotDataSourceModel["getDataFieldManager"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.unitId).getAutoDisplayNameFunction() || ox1b7b99)(ox56429.getDisplayName(setSheetsFilterRangeMutation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.renameField(removeSheetsFilterMutation.getId(), getFontStyleStringLocal);
                  } else {
                    if (dataSyncPrimaryController) {
                      let cjkLocal = dataSyncPrimaryController == null ? undefined : dataSyncPrimaryController.getFieldDataType();
                      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setSubtotalType(removeSheetsFilterMutation.getId(), cjkLocal === ox5d8c1f.number ? ox2829d9.sum : ox2829d9.count);
                    }
                  }
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.setFieldFormat(removeSheetsFilterMutation.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123);
                }
              }
            }
            let getLicenseInfoLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.query(),
              getSheetFeatureLimitLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.toJSON(),
              isFeatureAuthorizedWithinTimeLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.isEmpty(),
              fontCache = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.endCollectChangeset();
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.addPivotTableWithConfig = {
              'view': getLicenseInfoLocal,
              'fieldsConfig': getSheetFeatureLimitLocal,
              'collectionConfig': ox56429.toJSON(),
              'isEmpty': isFeatureAuthorizedWithinTimeLocal,
              'changesets': fontCache
            };
          }
          break;
        case "drillDown":
          {
            let univerLicensePlugin = An(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779);
            if (!univerLicensePlugin) return;
            let {
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
              sourceSubUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356,
              sourceUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357,
              formatMap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358,
              indexes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359
            } = univerLicensePlugin;
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62.drillDown = {
              'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
              'sourceSubUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356,
              'sourceUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357,
              'formatMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358,
              'indexes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359
            };
          }
          break;
      }
      this._commandService["executeCommand"](an.id, {
        'version': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.version,
        'result': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62,
        'error': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784
      }, {
        'onlyLocal': true
      });
    }));
  }
  _initPivotTextInfo() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.id !== cn.id) return;
      let releaseType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.params;
      return this._sheetsPivotDataSourceModel["setTextInfo"](releaseType.textInfo, releaseType.direction), true;
    }));
  }
  _subjectCollectionChange() {
    this.disposeWithMe(this._sheetsPivotDataSourceModel["collectionChange$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 => {
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.type) {
        case 'add':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.dataRangeInfo && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.targetCellInfo && this.handleSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.token, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.dataRangeInfo, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.targetCellInfo);
          break;
        case 'delete':
          {
            let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
              token: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 && this.removeSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362);
          }
          break;
        case "update":
          {
            let {
                token: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
                oldSourceRangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
                dataRangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
                targetCellInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794,
              {
                unitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11,
                subUnitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 || {};
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 && this.removeSourceRangeChange(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 && this.handleSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366);
          }
          break;
      }
    }));
  }
  _subjectFieldsCollectionChange() {
    this.disposeWithMe(this._sheetsPivotDataSourceModel["fieldsCollectionChange$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 => {
      Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 => {
        let lS_CONFIG_KEY = this._sheetsPivotDataSourceModel['getTargetByPivotId'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);
        if (lS_CONFIG_KEY) {
          let skipLocal = this._sheetsPivotDataSourceModel["getPivotTableConfig"](lS_CONFIG_KEY == null ? undefined : lS_CONFIG_KEY.unitId, lS_CONFIG_KEY == null ? undefined : lS_CONFIG_KEY.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);
          skipLocal && (this.handleSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, skipLocal.sourceRangeInfo, skipLocal.targetCellInfo), this.triggerDirtyFeature([{
            'unitId': lS_CONFIG_KEY.unitId,
            'subUnitId': lS_CONFIG_KEY.subUnitId,
            'token': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555
          }]));
        }
      });
    }));
  }
  _subjectViewChange() {
    this.disposeWithMe(this._sheetsPivotDataSourceModel['viewData$'].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800,
        pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801 && this.triggerDirtyFeature([{
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800,
        'token': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801
      }]);
    }));
  }
  triggerDirtyFeature(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991) {
    let distinctUntilChangedLocal = {};
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808,
        token: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806;
      distinctUntilChangedLocal[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807] = distinctUntilChangedLocal[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807] ?? {}, distinctUntilChangedLocal[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808] = distinctUntilChangedLocal[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808] ?? {}, distinctUntilChangedLocal[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809] = true;
    }), this._commandService['executeCommand'](bi.id, distinctUntilChangedLocal);
  }
  removeSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995) {
    this._featureCalculationManagerService['remove'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995]);
  }
  handleSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) {
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000;
    this._featureCalculationManagerService["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999) && this.removeSourceRangeChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999);
    let subject = {
      'sheetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000
    };
    this._featureCalculationManagerService['register'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.unitId,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.subUnitId,
      'dependencyRanges': [subject],
      'getDirtyData': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815) => {
        let getSheetCommandTargetLocal = this._sheetsPivotDataSourceModel,
          behaviorSubject = getSheetCommandTargetLocal.getTargetByPivotId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999);
        if (!behaviorSubject) return xi();
        let {
            unitId: sheetsSelectionsService,
            subUnitId: univerSheetsPlugin
          } = behaviorSubject,
          generateNullCellLocal = Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000);
        if (generateNullCellLocal.length > 0) {
          let removeSheetMutation = getSheetCommandTargetLocal.getCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999),
            setRangeValuesMutation = removeSheetMutation.getFieldIds(),
            setRangeValuesUndoMutationFactory = this.getMatrixFromRunTimeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815),
            setWorksheetActiveOperation = {},
            setWorksheetColWidthMutation = this._sheetsPivotDataSourceModel["getDataFieldManager"](ox3745be).getAutoDisplayNameFunction() || ox1b7b99,
            sheetInterceptorService = [];
          for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 of generateNullCellLocal) {
            let removeRowMutation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.range["startColumn"] || 0),
              removeSheetCommand = setRangeValuesMutation[removeRowMutation];
            sheetInterceptorService.push(removeSheetCommand), setWorksheetActiveOperation[removeSheetCommand] = removeSheetMutation.getFieldById(removeSheetCommand).getName(), getSheetCommandTargetLocal.getDataFieldManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002).refreshDataField(removeSheetCommand, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000, removeRowMutation, setRangeValuesUndoMutationFactory);
          }
          removeSheetMutation.getGroupFieldsInfoByIds(sheetInterceptorService).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 => {
            let [moveRangeCommand, moveRangeMutation] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368,
              refRangeService = removeSheetMutation.getFieldById(moveRangeCommand),
              removeColMutation = removeSheetMutation.getFieldById(moveRangeMutation);
            refRangeService && removeColMutation && (ox2808c6(refRangeService) && this._setDateSystem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002), refRangeService.refreshGroupField(removeColMutation));
          }), removeSheetMutation.updateAllDisplayName();
          let insertSheetUndoMutationFactory = getSheetCommandTargetLocal.getPivotTableInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999);
          if (insertSheetUndoMutationFactory) {
            Si(insertSheetUndoMutationFactory, setWorksheetActiveOperation, setWorksheetColWidthMutation), insertSheetUndoMutationFactory.setDirty(true);
            let insertRowMutation = insertSheetUndoMutationFactory.query(),
              insertSheetCommand = getSheetCommandTargetLocal.getPivotTableConfig(ox3745be, ox30c6be, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999),
              insertSheetMutation = getSheetCommandTargetLocal.getDataFieldManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002).toJSON();
            getSheetCommandTargetLocal.updateView(ox3745be, ox30c6be, 'set', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999, insertRowMutation, insertSheetCommand, insertSheetMutation, true);
          }
        }
        return this.getDirtyInfo(ox3745be, ox30c6be, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999);
      }
    });
  }
  getMatrixFromRunTimeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011) {
    var iNTERCEPTOR_POINT, insertColMutation;
    let {
      arrayFormulaCellData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012,
      unitData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011;
    return {
      'arrayFormulaCellDataMatrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 == null || (iNTERCEPTOR_POINT = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009]) == null ? undefined : iNTERCEPTOR_POINT[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010],
      'unitDataMatrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 == null || (insertColMutation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009]) == null ? undefined : insertColMutation[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010]
    };
  }
  getDirtyInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021) {
    let clearSelectionAllCommand = this._sheetsPivotDataSourceModel['getViewData'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021),
      clearSelectionContentCommand = [],
      iExclusiveRangeService = new ox286e14();
    if (clearSelectionAllCommand) {
      let {
          rangeCache: errorType,
          matrix: globalComputingStatusService,
          oldRangeCache: iActiveDirtyManagerService,
          oldMatrix: iFeatureCalculationManagerService
        } = clearSelectionAllCommand,
        univerFormulaEnginePlugin = kn(iActiveDirtyManagerService),
        serializeRangeWithSpreadsheetLocal = kn(errorType);
      clearSelectionContentCommand.push(...serializeRangeWithSpreadsheetLocal, ...univerFormulaEnginePlugin), ox15189b && oxb47f78 && univerFormulaEnginePlugin.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 => {
        for (let sequenceExecuteLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.startRow; sequenceExecuteLocal <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.endRow; sequenceExecuteLocal++) for (let numfmtLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.startColumn; numfmtLocal <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.endColumn; numfmtLocal++) iExclusiveRangeService.realDeleteValue(sequenceExecuteLocal, numfmtLocal);
      }), ox4489b2 && serializeRangeWithSpreadsheetLocal && serializeRangeWithSpreadsheetLocal.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 => {
        for (let numberToABCLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.startRow; numberToABCLocal <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.endRow; numberToABCLocal++) for (let mergeWorksheetSnapshotWithDefaultLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.startColumn; mergeWorksheetSnapshotWithDefaultLocal <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.endColumn; mergeWorksheetSnapshotWithDefaultLocal++) iExclusiveRangeService.setValue(numberToABCLocal, mergeWorksheetSnapshotWithDefaultLocal, ox4489b2.getValue(numberToABCLocal, mergeWorksheetSnapshotWithDefaultLocal));
      });
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB89 = {};
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB89[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019] = {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020]: wi(ox2c95a0)
    }, {
      'runtimeCellData': {
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019]: {
          [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020]: ox2b0be3
        }
      },
      'dirtyRanges': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB89
    };
  }
  dispose() {}
};
let Ei = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026, this._sheetsSelectionsService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028, q(this, 'disposableCollection', new ox5097f6()), this._initClearSelectionCommandInterceptor();
  }
  _initClearSelectionCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService['interceptCommand']({
      'getMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.id === ox1115a6.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.id === ox4229c3.id) {
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = this._sheetsSelectionsService["getCurrentSelections"]().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.range),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = ox28421e(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.params);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561) return {
            'redos': [],
            'undos': []
          };
          let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49 = {},
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 = this._sheetsPivotTableConfigModel['getSubUnitPivotConfigs'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.size) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564) {
            let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125,
              row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126,
              col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.targetCellInfo;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.subUnitId && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 + '-' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371);
          }
          return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 => {
            ox2b728c.foreach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) => {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 + '-' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129;
              if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2]) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2];
                var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
                  'id': Ur.id,
                  'params': {
                    'unitId': ox562feb,
                    'subUnitId': ox31f796,
                    'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655
                  }
                });
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = this._sheetsPivotTableConfigModel["getCollection"](ox562feb, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655),
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = this._sheetsPivotTableConfigModel["getPivotTableConfig"](ox562feb, ox31f796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655);
                var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push({
                  'id': Vr.id,
                  'params': {
                    'unitId': ox562feb,
                    'subUnitId': ox31f796,
                    'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655,
                    'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657,
                    'collectionConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
                  }
                });
              }
            });
          }), {
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4,
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5
          };
        }
        return {
          'redos': [],
          'undos': []
        };
      }
    }));
  }
};
let Di = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037) {
    super(), this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, this._sheetsPivotTableService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037, this._initCommandInterceptListener();
  }
  _getPivotAppliedRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045) {
    return Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045, this._injector["get"](ox76cf68).getDirection());
  }
  _initCommandInterceptListener() {
    this.disposeWithMe(this._sheetsPivotTableService["interceptor"].intercept(this._sheetsPivotTableService["interceptor"].getInterceptPoints().PIVOT_MUTATION_GENERATE, {
      'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821) => {
        let {
            cellInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
            view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823,
            isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
          {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = this._getPivotAppliedRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = this._sheetInterceptorService['generateMutationsByRanges']({
            'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
            'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826,
            'ranges': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827
          }),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829 = Nn(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.shouldClear && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.redos['push'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.setRangeValueRedoMutation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.undos["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829.setRangeValueUndoMutation)), !ox375297) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = this.getAutoFitColumnsMutations(ox48111d, ox2d24b8);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.redos["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.redos), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.undos["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.undos);
        }
        return {
          'redos': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.redos,
          'undos': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.undos
        };
      }
    }));
  }
  getAutoFitColumnsMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051;
    let {
        col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055 = ox28421e(this._univerInstanceService, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) return {
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37,
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 = this._sheetsPivotTableConfigModel['getTextInfo'](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 = Array.from(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051 = this._sheetsPivotTableConfigModel['getSubUnitPivotConfigs'](ox49de33, ox35ea0a)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051.values()) ?? []).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.targetCellInfo["row"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.targetCellInfo["col"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050.col),
      {
        worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055;
    if (typeof window < 'u' && window.document) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 = ox54494e({
          ...W.colStyle
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842 = Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049, ox14690e, this._injector['get'](ox76cf68).getDirection()),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.startColumn + 1,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64 = {},
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049, ox14690e, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.direction, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 => ox4f0922.getTextSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841).width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.fieldsConfig["valueFields"], (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 = this._univerInstanceService["getUnit"](ox49de33)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059.getDateSystem());
      Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 => {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 = ox453627.getColumnWidth(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20);
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568;
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.push({
        'id': ox5ae432.id,
        'params': {
          'subUnitId': ox35ea0a,
          'unitId': ox49de33,
          'ranges': [{
            'startColumn': ox14690e,
            'endColumn': ox14690e + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 - 1,
            'startRow': 0,
            'endRow': ox453627.getRowCount() - 1
          }],
          'colWidth': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.push({
        'id': ox5ae432.id,
        'params': {
          'subUnitId': ox35ea0a,
          'unitId': ox49de33,
          'ranges': [{
            'startColumn': ox14690e,
            'endColumn': ox14690e + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 - 1,
            'startRow': 0,
            'endRow': ox453627.getRowCount() - 1
          }],
          'colWidth': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64
        }
      });
    }
    return {
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37,
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36
    };
  }
};
let Oi = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071, this._refRangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462075, this._sheetsPivotTableAdaptorModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077, q(this, "disposableCollection", new ox5097f6()), this._onRefRangeChange();
  }
  _onRefRangeChange() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 = this._univerInstanceService["getCurrentUnitOfType"](ox2402ca.UNIVER_SHEET);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845))) return;
        this.disposableCollection["dispose"]();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 => this._refRangeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848.size && Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848.values()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 => {
          let {
            row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573,
            col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.targetCellInfo;
          return ox3ed833(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574);
        }).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 => {
          this.disposableCollection["add"](this._refRangeService["registerRefRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845));
        });
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 = this._univerInstanceService["getCurrentUnitOfType"](ox2402ca.UNIVER_SHEET);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854.getActiveSheet();
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580) return;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.getSheetId());
        }
      };
    this.disposeWithMe(this._commandService['onCommandExecuted'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.id === ox423a02.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.params,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.subUnitId,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.unitId;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582);
      }
    })), this.disposeWithMe(this._sheetsPivotTableConfigModel["pivotInitCompleted$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086();
    })), this.disposeWithMe(this._sheetsPivotTableConfigModel["pivotConfigChange$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861 = ox28421e(this._univerInstanceService, {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860.subUnitId
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861) return;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861,
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863);
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086();
  }
  _refRangeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091) {
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089.id) {
      case ox4d2b6e.id:
        return this.getRefRangeMutationsByMoveRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089.params, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091);
      default:
        break;
    }
    return {
      'redos': [],
      'undos': []
    };
  }
  getRefRangeMutationsByMoveRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097) {
    let {
        fromRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098,
        toRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 = ox28421e(this._univerInstanceService);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.subUnitId) return {
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41,
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101.size) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101) {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
        col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873.targetCellInfo;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.subUnitId) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = ox3ed833(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587);
        if (ox509ead.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375, ox41ecbf)) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 - ox41ecbf.startRow,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 - ox41ecbf.startColumn,
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
              'row': ox40cead.startRow + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3,
              'col': ox40cead.startColumn + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
            };
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push({
            'id': Qr.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872,
              'targetCellPosition': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.push({
            'id': Qr.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872,
              'targetCellPosition': {
                'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
                'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
              }
            }
          });
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.row - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.col - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = this._sheetsPivotTableAdaptorModel["getPivotItemRenderInfoCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.rangesInfo;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) {
            Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => {
                let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
                  ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611
                };
                var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startRow = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.startRow + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endRow = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.endRow + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startColumn = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.startColumn + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endColumn = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.endColumn + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
              });
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = this._sheetInterceptorService["generateMutationsByRanges"]({
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
              'ranges': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1
            });
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.redos), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.undos);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = Nn(this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.shouldClear && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.setRangeValueRedoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.setRangeValueUndoMutation));
          }
        }
      }
    }
    return {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41
    };
  }
};
let ki = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110) {
    super(), this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110, this._initRemoveSheetCommandInterceptor();
  }
  _initRemoveSheetCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService['interceptCommand']({
      'getMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874.id === oxe70294.id) {
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = [],
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [],
            {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874.params;
          if (!ox5a4724 || !ox289aca) return {
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7
          };
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = this._sheetsPivotTableConfigModel["getSubUnitPivotConfigs"](ox5a4724, ox289aca);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590.size) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590) {
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.push({
              'id': Ur.id,
              'params': {
                'unitId': ox5a4724,
                'subUnitId': ox289aca,
                'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376
              }
            });
            let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
              ...this._sheetsPivotTableConfigModel["getCollection"](ox5a4724, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376)
            };
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push({
              'id': Vr.id,
              'params': {
                'unitId': ox5a4724,
                'subUnitId': ox289aca,
                'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
                'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377,
                'collectionConfig': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8
              }
            });
          }
          return {
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7,
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8
          };
        }
        return {
          'redos': [],
          'undos': []
        };
      }
    }));
  }
};
let Ai = class extends ox1100d5 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113, this._sheetsPivotRpcService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114, this._sheetsPivotTableAdaptorModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115, this._sheetsPivotTableConfigModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, this._activeDirtyManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117, this._initDataSendListener(), this.registerDirtyService();
  }
  _initDataSendListener() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.id !== an.id) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.params;
      this._sheetsPivotRpcService['handleAsyncResponse'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877);
    })), this.disposeWithMe(this._commandService['onCommandExecuted'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.id === sn.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.params;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) {
          let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379,
            oldSubUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
            pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
            pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
            collectionConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591;
          this._sheetsPivotTableConfigModel["updateConfigCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591.pivotTableId, null), this._sheetsPivotTableConfigModel["updateConfigCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382), this._sheetsPivotTableConfigModel["updateCollectionConfig"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383);
        }
      }
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.id !== on.id) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.params;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.collectionConfig && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.collectionConfig).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.collectionConfig) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592] && this._sheetsPivotTableConfigModel["updateCollectionConfig"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.collectionConfig[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592]);
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.single) {
        let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599,
          type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
          pivotConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.single;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 === 'delete') this._sheetsPivotTableAdaptorModel['clearRenderCache']({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599,
          'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600
        }), this._sheetsPivotTableConfigModel["updateConfigCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, null);else {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 = new oxd30f7d();
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.formJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598), this._sheetsPivotTableConfigModel['updateConfigCache'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601), this._sheetsPivotTableAdaptorModel["clearRenderCache"]({
            'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
            'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599,
            'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600,
            'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384
          }), this._sheetsPivotTableAdaptorModel["updateRenderCache"]({
            'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
            'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384,
            'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599,
            'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600
          });
        }
        this._sheetsPivotTableAdaptorModel['markDirty'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597);
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.batch) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.batch,
            var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 => {
            let {
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
                view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137,
                pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138,
                type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139,
                pivotConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = new oxd30f7d();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.formJSON(oxf3f704), this._sheetsPivotTableConfigModel['updateConfigCache'](ox1e8880, oxb77ddf, ox120e7e, ox4b24ac), this._sheetsPivotTableAdaptorModel["updateRenderCache"]({
              'unitId': ox1e8880,
              'subUnitId': oxb77ddf,
              'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141,
              'pivotTableId': ox120e7e,
              'type': oxa22ef5
            });
            let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(ox1e8880) ?? new Set();
            var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(oxb77ddf), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(ox1e8880, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299);
          }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => {
            this._sheetsPivotTableAdaptorModel["markDirty"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660);
          })), this._sheetsPivotTableConfigModel["setPivotInitCompleted"]();
        }
      }
    }));
  }
  registerDirtyService() {
    this._activeDirtyManagerService["register"](bi.id, {
      'commandId': bi.id,
      'getDirtyData'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886) {
        return {
          'dirtyUnitFeatureMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886.params
        };
      }
    });
  }
};
let ji = class extends ox3ea895 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = tr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126, this._dataSyncPrimaryController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128
    } = ox5e46df({}, tr, this._config);
    this._configService['setConfig'](er, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), this._initRegisterCommand(), this._initConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128);
  }
  _initConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136 = this._config) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136.notExecuteFormula;
    this._configService["setConfig"]("SHEET_PIVOT_IN_MAIN_THREAD", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137 === true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.maxLimitItemCount !== undefined && ox1b957d(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.maxLimitItemCount), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.dateSystem !== undefined && ox2c5278(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135.dateSystem);
  }
  onStarting() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141 = this._config) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.notExecuteFormula;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142 === true ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = [[Q], [Y], [Ai], [nr], [Z], [ki], [Ei], [Oi], [Di]] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142 === false ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = [[X], [Ti]] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142 === undefined && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = [[X], [Ti], [Q], [Y], [Ai], [nr], [Z], [ki], [Ei], [Oi], [Di]]), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888)), [Ti, Ai, Q, Ei, ki, Oi, Di].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 => {
      this._injector["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889) && this._injector["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889);
    });
  }
  _initRegisterCommand() {
    [Hr, Wr, zr, Zr, ti, ni, gi, oi, yi, ii, di, ci, pi, hi, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157, ei, Vr, ai, Ur, Cr, ir, ar, Or, wr, Tr, Er, Mr, jr, kr, Ar, Qr, rn, an, on, Fr, Lr, Nr, Dr, cn, mi, Ir, bi, sn, fi, Pr, si, ri, li, ui].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 = this._dataSyncPrimaryController) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892.registerSyncingMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891), this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891);
    });
  }
};
export { ji as UniverSheetsPivotTablePlugin };
export { Ti, Ei, Di, Oi, ki, Ai };
