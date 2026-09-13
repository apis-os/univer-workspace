import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function hn(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463532) {
  switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463532) {
    case BaseFieldType.Number:
    case BaseFieldType.Currency:
    case BaseFieldType.Progress:
    case BaseFieldType.Rating:
      return [BaseConditionalColorOperator.IS, BaseConditionalColorOperator.IS_NOT, BaseConditionalColorOperator.GREATER_THAN, BaseConditionalColorOperator.LESS_THAN, BaseConditionalColorOperator.IS_EMPTY, BaseConditionalColorOperator.IS_NOT_EMPTY];
    case BaseFieldType.Date:
    case BaseFieldType.CreatedAt:
    case BaseFieldType.UpdatedAt:
      return [BaseConditionalColorOperator.IS, BaseConditionalColorOperator.IS_NOT, BaseConditionalColorOperator.BEFORE, BaseConditionalColorOperator.AFTER, BaseConditionalColorOperator.IS_EMPTY, BaseConditionalColorOperator.IS_NOT_EMPTY];
    case BaseFieldType.Checkbox:
      return [BaseConditionalColorOperator.IS, BaseConditionalColorOperator.IS_NOT];
    default:
      return [BaseConditionalColorOperator.IS, BaseConditionalColorOperator.IS_NOT, BaseConditionalColorOperator.CONTAINS, BaseConditionalColorOperator.NOT_CONTAINS, BaseConditionalColorOperator.IS_EMPTY, BaseConditionalColorOperator.IS_NOT_EMPTY];
  }
}
export { hn as getBaseConditionalColorOperators };
