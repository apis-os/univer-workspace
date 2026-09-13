import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function as(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465722, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723 == null) return true;
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723 == "string") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723.trim() === '';
  if (Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723)) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465722.type === BaseFieldType.Attachment ? !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723.some(fs) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723.length === 0;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465722.type === BaseFieldType.Link && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723 == "object") {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462794 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465723;
    return [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462794.text, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462794.url].every(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46684 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46684 == null || String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46684).trim() === '');
  }
  return false;
}
function fs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744) {
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744 == "string") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744.trim() !== '';
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744 || typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744 != "object") return false;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465744;
  return [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745.id, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745.name, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745.source, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745.url, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465745.thumbnail].some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462802 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462802 != null && String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462802).trim() !== '');
}
export { as as isBaseFieldStatEmptyValue };
