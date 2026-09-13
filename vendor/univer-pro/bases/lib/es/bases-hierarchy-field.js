import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { M } from "./bases-record-link-field-config.js";
function P(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463074, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463075) {
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463075) return false;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463076 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463074.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463075];
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463076 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463076.type !== BaseFieldType.RecordLink) return false;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463077 = M(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463076);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463077 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463077.targetTableId === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463074.id && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463077.multiple === false : false;
}
export { P as isBaseHierarchyField };
