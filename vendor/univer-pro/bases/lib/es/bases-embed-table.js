import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { Mo } from "./bases-default-table-snapshot.js";
import { No } from "./bases-embed-table-resource-key.js";
function Po(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465636) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465637 = Mo({
    'id': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465636.hostAnchorId,
    'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465636.name ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465636.embedId,
    'recordCount': 0
  });
  return {
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465637,
    'resources': {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465637.resources ?? {}),
      [No]: Lo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465636)
    }
  };
}
function Lo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465644) {
  return {
    'version': 1,
    'embedId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465644.embedId,
    'hostAnchorId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465644.hostAnchorId,
    'childUnitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465644.childUnitId,
    'childType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465644.childType
  };
}
export { Po as createEmbedBasesTable };
