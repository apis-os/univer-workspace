import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function Uo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465670) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465671, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465672;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465673 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465670 || new Intl["NumberFormat"]().resolvedOptions().locale,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465674;
  try {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465674 = new Intl["NumberFormat"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465673, {
      'minimumFractionDigits': 2,
      'maximumFractionDigits': 2,
      'useGrouping': true
    }).formatToParts(1000000);
  } catch {
    return "commaPeriod";
  }
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465675 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465671 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465674.find(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462790 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462790.type === "group")) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465671.value,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465676 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465672 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465674.find(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462791 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462791.type === "decimal")) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465672.value,
    var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465675 === '\u00a0' || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465675 === '\u202f' ? '\x20' : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465675;
  return var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 === '.' && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465676 === ',' ? "periodComma" : var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 === '\x20' && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465676 === ',' ? "spaceComma" : var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB104 === '\x20' && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465676 === '.' ? "spacePeriod" : "commaPeriod";
}
export { Uo as inferBaseSeparatorStyle };
