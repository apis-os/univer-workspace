import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { qe } from "./bases-active-hierarchy-field-ids.js";
import { Pe } from "./bases-record-link-ids.js";
function Ze(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463114, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463115) {
  let var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932 = new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463115),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463116 = qe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463114);
  return Object.values(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463114.records).flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46816 => var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46816.id) ? [] : Array.from(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463116).flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46137 => {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = Pe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46816.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46137])[0] ?? null;
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46138 && var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46138) ? [{
      'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463114.id,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46137,
      'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46816.id,
      'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46138,
      'parentRecordId': null
    }] : [];
  }));
}
export { Ze as getBaseHierarchyDeletePromotions };
