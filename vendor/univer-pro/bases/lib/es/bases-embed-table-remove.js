import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { Q } from "./bases-json1-mutation.js";
function Io(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.snapshot["tableOrder"].indexOf(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.tableId);
  if (!(!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.snapshot["tables"][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.tableId] || var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 < 0)) return {
    'id': Q.id,
    'params': {
      'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.unitId,
      'op': JSON1.type["compose"](JSON1.removeOp(["tables", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.tableId], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.snapshot["tables"][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.tableId]), JSON1.removeOp(["tableOrder", var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D88], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465642.tableId)),
      'trigger': "embed-ui"
    }
  };
}
export { Io as createEmbedBasesTableRemoveMutation };
