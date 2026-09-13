import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { R } from "./bases-json1-op-applier.js";
import { ei } from "./bases-ibase-projection.js";
const Q = {
  'id': 'base.mutation.apply-base-json1',
  'type': CommandType.MUTATION,
  'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464104, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464105) {
    let {
        unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464106,
        op: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464107
      } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464105,
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464108 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464104.get(IUniverInstanceService).getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464106, UniverInstanceType.UNIVER_BASE);
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464108) return false;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464109 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464108.getSnapshot(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464110 = new R(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464111 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464110.getAffectedRanges(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464107),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464112 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464110.applyOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464109, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464107);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464108.setSnapshot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464112), Fi(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464112, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464111, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464104.get(ei)), true;
  }
};
function Fi(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464122, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464123, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124) {
  let var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950 = new Set(),
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929951 = new Set(),
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952 = new Set();
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464123) {
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.reason === "view" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.viewId) {
      let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId + '\x00' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.viewId;
      var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.has(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7) || (var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.add(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124.invalidateByView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.viewId));
      continue;
    }
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.reason === 'field' && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.fieldId) {
      let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId + '\x00' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.fieldId;
      var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929951.has(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8) || (var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929951.add(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124.invalidateByField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.fieldId));
      continue;
    }
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616.reason !== "cell") {
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124.invalidateByOp();
      return;
    }
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = Ii(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464122, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462616);
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643) {
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124.invalidateByOp();
      return;
    }
    let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.tableId + '\x00' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.recordId + '\x00' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.fieldId;
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.has(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20) || (var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.add(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464124.invalidateByCell(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.recordId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46643.fieldId));
  }
}
function Ii(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464128, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464130, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464131;
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.tableId) return null;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.recordId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.fieldId) return {
    'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.tableId,
    'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.recordId,
    'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.fieldId
  };
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.row == null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.column == null) return null;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464132 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464128.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.tableId],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464133 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464132 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464130 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464132.rowId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464130[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.row],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464134 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464132 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464131 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464132.colId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464131[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.column];
  return !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464133 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464134 ? null : {
    'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464129.tableId,
    'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464133,
    'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464134
  };
}
export { Q as ApplyBaseJson1Mutation };
