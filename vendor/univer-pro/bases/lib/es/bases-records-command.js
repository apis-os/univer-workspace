import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { Ge, We } from "./bases-hierarchy-field-id.js";
import { Ke } from "./bases-hierarchy-parent-field.js";
import { L, da, ha, ma, pa } from "./internal-db-endo.js";
import { Ie } from "./bases-canonical-record-link-value.js";
import { Ye } from "./bases-hierarchy-record-creations.js";
import { fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80 } from "./internal-db-pred.js";
import { X } from "./bases-ibase-command.js";
import { R } from "./bases-json1-op-applier.js";
import { Q } from "./bases-json1-mutation.js";
import { Ze } from "./bases-hierarchy-promotions.js";
import { U } from "./bases-json1-op-factory.js";
import { N } from "./bases-hierarchy-error.js";
import { P } from "./bases-hierarchy-field.js";
import { Qe } from "./bases-hierarchy-index.js";
import { Fe } from "./bases-record-link-ids.js";
import { M } from "./bases-record-link-field-config.js";
function ga(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464290, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464291, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464292, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464293) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464290.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464291];
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294) return null;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464295 = We(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464295 ?? Ge(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294),
    var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464292.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462699 => Object.prototype["hasOwnProperty"].call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462699.values, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296)),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464297 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464295 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464295] : var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 ? Ke(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464293) : null,
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200 = [];
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464292) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46670 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464297 !== null && Object.prototype['hasOwnProperty'].call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700.values, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672 = ha(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46670),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673 = null;
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671) {
      if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672 != 'string' || !Ie(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672, false).valid) return null;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46672;
    }
    let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {};
    if (Object.entries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700.values).forEach(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46105]) => {
      (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46671 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296) && (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46104] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
    }), !pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464290, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464291, {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700,
      'values': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
    })) return null;
    let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700.values
    };
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673 !== null && (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464296] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46673), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200.push(ma({
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462700,
      'values': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
    }));
  }
  return {
    'records': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200,
    'hierarchyFieldToMaterialize': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464295 ? null : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464297,
    'hierarchyChanges': Ye(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464294, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200)
  };
}
const var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB282 = {
    'id': "base.command.batch-create-base-records",
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464306, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464307) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464307) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464308 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464306.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310,
          records: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464311
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464307,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464308.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309, UniverInstanceType.UNIVER_BASE),
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A202 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464311.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462701 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462701.id);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310) || new Set(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A202).size !== var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A202.length) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464313 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464306.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464314 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464306.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464315 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464306.get(X),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464316 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464317 = ga(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464311);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464317) return false;
      let {
          records: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464318,
          hierarchyChanges: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319,
          hierarchyFieldToMaterialize: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464320
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464317,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464321 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464320 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464315.createCreateFieldOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464320, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464316.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310].fieldOrder["length"]) : null,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464322 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464315.createBatchCreateRecordsOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464312, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464310, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464318),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464323 = L([...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464321 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464321] : []), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464322]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464324 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464316, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464323),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464323,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319 : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464307.source ?? 'ui' : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB87 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.length ? "redo" : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464324,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462702 => ({
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462702,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462702.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464319.length ? "undo" : undefined
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464313.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464308.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464314.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464309,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB87
        }]
      }), true) : false;
    }
  },
  va = {
    'id': "base.command.batch-delete-base-records",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464344, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464345) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464345) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464346 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464344.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464348,
          recordIds: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464349
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464345,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464350 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464346.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464350 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464350, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464348, {
        'recordIds': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464349
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464351 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464344.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464352 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464344.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464353 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464350.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464354 = Ze(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464353.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464348], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464349),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464355 = new U(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464356 = new R(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464357 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464355.deleteRecords(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464353, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464349),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464358 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464356.applyOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464353, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464357),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464359 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464355.createDeleteRecordsUndoOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464353, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464358, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464349),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464357,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464354,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464345.source ?? 'ui'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92,
          'source': "redo"
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464359,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464354.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462703 => ({
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462703,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462703.parentRecordId,
            'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462703.oldParentRecordId
          })),
          'source': "undo"
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464351.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464346.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464352.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464347,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93
        }]
      }), true) : false;
    }
  },
  ya = {
    'id': "base.command.change-base-field-type",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464376, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464377) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464377) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464378 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464376.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464380,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464381,
          input: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464382
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464377,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464383 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464378.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464383 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464381 === BASE_RECORD_ID_FIELD_ID || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464383, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464380, {
        'fieldIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464381]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464384 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464376.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464385 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464376.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464386 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464383.getSnapshot();
      if (!da(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464383, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464380, {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464386.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464380].fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464381],
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464382
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464387 = new U().changeFieldType(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464386, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464380, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464381, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464382),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464388 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464386, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464387),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464387
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB99 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464388
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464384.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464378.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464385.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464379,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB99
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98
        }]
      }), true) : false;
    }
  },
  ba = {
    'id': 'base.command.create-base-child-record',
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464402, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403) {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464404;
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403) return false;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406,
          parentRecordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464408 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464402.get(IUniverInstanceService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464408.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406, {
        'recordIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407]
      })) throw new N("missingRecord");
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464410 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464410.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464412 = We(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464412 ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.fieldId ?? Ge(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411);
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464412 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.fieldId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.fieldId !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464412 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413] && !P(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413)) throw new N("invalidField");
      if ((Qe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413).depthByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407) ?? 0) + 1 >= 5) throw new N("maxDepth");
      if (!pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.record)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464414 = ma({
          ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.record,
          'values': {
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.record["values"],
            [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413]: Fe([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407])
          }
        }),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464415 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464402.get(X),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464416 = new U(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464417 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464418 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464417 ? ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464404 = M(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464417)) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464404.relationRole) === BaseRecordLinkRole.Parent ? null : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464416.updateField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464410, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413, {
          'config': {
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464417.config,
            'relationRole': BaseRecordLinkRole.Parent
          }
        }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464415.createCreateFieldOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406, Ke(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.parentFieldName), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464411.fieldOrder['length']),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464419 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464415.createCreateRecordOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464409, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464414),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464420 = L([...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464418 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464418] : []), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464419]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464421 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464410, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464420),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102 = {
          'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464406,
          'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464413,
          'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464414.id,
          'oldParentRecordId': null,
          'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464420,
          'trigger': ba.id,
          'hierarchyChanges': [var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102],
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464403.source ?? 'ui'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB104 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103,
          'source': 'redo'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB105 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464421,
          'trigger': ba.id,
          'hierarchyChanges': [{
            ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464407,
            'parentRecordId': null
          }],
          'source': "undo"
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464402.get(ICommandService).syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464408.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464402.get(IUndoRedoService).pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464405,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB105
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB104
        }]
      }), true) : false;
    }
  },
  xa = {
    'id': 'base.command.create-base-field',
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464442, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464443) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464443) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464444 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464442.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464446,
          field: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464447,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464448,
          viewIndexes: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464449
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464443,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464444.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464446) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464446].fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464447.id] || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464448 === 0 || !da(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464446, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464447)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464451 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464442.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464452 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464442.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464453 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464442.get(X).createCreateFieldOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464446, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464447, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464448, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464449),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464454 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464450.getSnapshot(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464453),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464453
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464454
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464451.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464444.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464452.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464445,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110
        }]
      }), true) : false;
    }
  },
  Sa = {
    'id': "base.command.create-base-record",
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464468, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464469) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464469) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464470 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464468.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472,
          record: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464473
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464469,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464470.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464475 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464468.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464476 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464468.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464477 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464468.get(X),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464478 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464479 = ga(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472, [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464473]);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464479) return false;
      let [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464480] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464479.records,
        {
          hierarchyChanges: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481,
          hierarchyFieldToMaterialize: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464482
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464479,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464483 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464482 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464477.createCreateFieldOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464482, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464478.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472].fieldOrder["length"]) : null,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464484 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464477.createCreateRecordOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464474, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464472, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464480),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464485 = L([...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464483 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464483] : []), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464484]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464486 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464478, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464485),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464485,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481 : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464469.source ?? 'ui' : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.length ? "redo" : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464486,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462704 => ({
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462704,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462704.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464481.length ? "undo" : undefined
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464475.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464470.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464476.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464471,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115
        }]
      }), true) : false;
    }
  },
  Ca = "Base table names are exported as Excel worksheet names and must contain 1-31 characters, not start or end with an apostrophe, not contain : \\ / ? * [ ], and be unique (case-insensitive).";
export { var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB282 as BatchCreateBaseRecordsCommand, va as BatchDeleteBaseRecordsCommand, ya as ChangeBaseFieldTypeCommand, ba as CreateBaseChildRecordCommand, xa as CreateBaseFieldCommand, Sa as CreateBaseRecordCommand, Ca as BASE_TABLE_NAME_REQUIREMENTS };
