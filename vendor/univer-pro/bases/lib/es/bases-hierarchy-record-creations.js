import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { qe } from "./bases-active-hierarchy-field-ids.js";
import { Ge } from "./bases-hierarchy-field-id.js";
import { Qe } from "./bases-hierarchy-index.js";
import { N } from "./bases-hierarchy-error.js";
import { Xe } from "./internal-db-endo.js";
function Ye(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105) {
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46806 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46806.id);
  if (new Set(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120).size !== var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120.length || var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46807])) return [];
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463106 = qe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463107 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463106.length ? null : Ge(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121 = [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463106, ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463107 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46808 => Object.prototype["hasOwnProperty"].call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46808.values, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463107)) ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463107] : [])].filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46809 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => Object.prototype['hasOwnProperty'].call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46130.values, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46809)));
  if (!var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.length) return [];
  let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62 = {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104,
      'records': {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104.records,
        ...Object.fromEntries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 => [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810.id, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810]))
      },
      'recordOrder': [...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104.recordOrder ?? []), ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811.id)]
    },
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A122 = [];
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812 => {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = Qe(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812);
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463105.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813.invalidReasonByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.id);
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132) throw new N(Xe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132));
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813.parentByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.id) ?? null;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A122.push({
        'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463104.id,
        'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
        'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.id,
        'oldParentRecordId': null,
        'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133
      });
    });
  }), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A122;
}
export { Ye as validateBaseHierarchyRecordCreations };
