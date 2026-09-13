import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464244, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464245, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464246) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464247 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464244.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464245];
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464247) return false;
  let {
    viewIds: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80,
    fieldIds: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81,
    recordIds: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82
  } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464246 || {};
  if (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80) {
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46667 of var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80) if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464247.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46667]) return false;
  }
  if (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81) {
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46668 of var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81) if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464247.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46668]) return false;
  }
  if (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82) {
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46669 of var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82) if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464247.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46669]) return false;
  }
  return true;
}
export { fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80 };
