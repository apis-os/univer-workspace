import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function et(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463141) {
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140.hierarchy || !(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463141 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463141.size)) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140.rows;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134 = [],
    var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = 0;
  for (; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140.rows["length"];) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140.rows[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D46];
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46151);
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463140.hierarchy["nodes"][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46151.recordId];
    var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463141.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46151.recordId) && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46152 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46152.subtreeEndIndex + 1 : var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 + 1;
  }
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A134;
}
export { et as getVisibleBaseHierarchyRows };
