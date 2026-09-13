import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { wr } from "./bases-unit-permission-actions.js";
function G(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463826) {
  return '' + wr + encodeURIComponent(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463826);
}
export { G as getBaseTablePermissionObjectId };
