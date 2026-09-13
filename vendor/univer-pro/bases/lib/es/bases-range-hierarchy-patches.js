import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { I } from "./bases-table-cell-layout.js";
import { vt, xt } from "./internal-db-endo.js";
function co(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465150, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465151) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152 = I(Tools.deepClone(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465150)),
    var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948 = new Map();
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465151.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734 => {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462735, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462736;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737 = "recordId" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.recordId : (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462735 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152.rowId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462735[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.row],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462738 = "fieldId" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.fieldId : (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462736 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152.colId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462736[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.col],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462739 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462738 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462738] : undefined;
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462738 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462739 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737]) return;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462740 = vt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.value, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462739),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462741 = xt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462734.value, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462740, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462739, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465152, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737) ?? {};
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462738] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948.set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462737, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54);
  }), [...var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948].map(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462750, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462751]) => ({
    'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462750,
    'values': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462751
  }));
}
export { co as resolveBaseRangeHierarchyPatches };
