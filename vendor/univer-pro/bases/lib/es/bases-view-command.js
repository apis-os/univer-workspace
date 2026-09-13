import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { U } from "./bases-json1-op-factory.js";
import { L, da, ma, pa } from "./internal-db-endo.js";
import { Da } from "./bases-field-name.js";
import { fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80 } from "./internal-db-pred.js";
import { R } from "./bases-json1-op-applier.js";
import { Q } from "./bases-json1-mutation.js";
import { Ze } from "./bases-hierarchy-promotions.js";
import { ze } from "./bases-record-link-references.js";
import { Ye } from "./bases-hierarchy-record-creations.js";
import { wa } from "./bases-table-name.js";
import { Sr } from "./bases-unit-permission-actions.js";
import { Nr } from "./bases-permission-value.js";
function Oa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464546, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464547) {
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464546 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464547.length) return;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204 = [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464546];
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464547.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462709 => {
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204.includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462709) || var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
  }), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204;
}
const ka = {
    'options': [{
      'id': "todo",
      'name': "Todo",
      'color': "#BFDBFE"
    }, {
      'id': 'doing',
      'name': "Doing",
      'color': "#FDE68A"
    }, {
      'id': "done",
      'name': "Done",
      'color': "#BBF7D0"
    }]
  },
  Aa = {
    'locale': "en-US",
    'pattern': "yyyy/mm/dd",
    'includeTime': false,
    'hourCycle': 'h24',
    'defaultMode': "none"
  };
function ja(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464553) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464554;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555 = new U(),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551],
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556 ? {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552,
      'fieldOrder': [BASE_RECORD_ID_FIELD_ID, ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552.fieldOrder ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556.fieldOrder).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462711 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462711 !== BASE_RECORD_ID_FIELD_ID)],
      'fieldSettings': {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552.fieldSettings,
        [BASE_RECORD_ID_FIELD_ID]: {
          ...((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464554 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552.fieldSettings) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464554[BASE_RECORD_ID_FIELD_ID]),
          'hidden': true
        }
      }
    } : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464552;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556 && var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.type === "kanban") {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462712 = Na(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462712.changed ? {
        ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124,
        'config': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462712.config,
        'fieldOrder': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462712.fieldOrder ?? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.fieldOrder
      } : var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124;
    return L([...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462712.fields["map"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46674 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555.createField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, {
      'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46674
    })), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555.createView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464553)]);
  }
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556 || var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.type !== "calendar" && var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.type !== 'gantt') return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555.createView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464553);
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557 = Ma(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124),
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557.changed ? {
      ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124,
      'config': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557.config,
      'fieldOrder': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557.fieldOrder ?? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.fieldOrder
    } : var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124;
  return var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124.type === "gantt" && Ia(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124) && (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125 = La(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464556, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557.fields)), L([...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464557.fields['map'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462713 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555.createField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, {
    'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462713
  })), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464555.createView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464551, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464553)]);
}
function Ma(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464568 = false) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464569, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464570;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464571 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566.fieldOrder["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462714 => za(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462714)),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206 = [],
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.config ?? {})
    },
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.startDateFieldId == "string" && za(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.startDateFieldId) ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.startDateFieldId : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464571[0],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId == "string" && za(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId) && var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572 ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464571.find(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462715 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462715 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572);
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462716 = Ba(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.type === 'gantt' ? 'Start\x20date' : "Date");
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462716), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462716.id;
  }
  if ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.type === "gantt" || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464568) && !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462717 = Ba(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206, 'End\x20date');
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462717), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462717.id;
  }
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.type === "calendar" && !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573 && delete var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.startDateFieldId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.type === "calendar" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573 && (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.type === 'gantt' && (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464573 ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464572);
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464574 = Oa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.fieldOrder, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462718 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462718.id));
  return {
    'changed': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.length > 0 || var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.startDateFieldId !== ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464569 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464569.startDateFieldId) || var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.endDateFieldId !== ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464570 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464570.endDateFieldId) || !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464574 && !Tools.diffValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464574, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464567.fieldOrder ?? [])),
    'fields': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206,
    'config': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128,
    'fieldOrder': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464574
  };
}
function Na(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464584, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464585) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464586;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208 = [],
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464585.config ?? {})
    },
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464587 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.groupFieldId == "string" && Pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464584, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.groupFieldId) ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.groupFieldId : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464584.fieldOrder["find"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462719 => Pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464584, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462719));
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464587) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462720 = Fa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464584, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208);
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462720), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464587 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462720.id;
  }
  var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.groupFieldId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464587;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464588 = Oa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464585.fieldOrder, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462721 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462721.id));
  return {
    'changed': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208.length > 0 || var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.groupFieldId !== ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464586 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464585.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464586.groupFieldId) || !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464588 && !Tools.diffValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464588, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464585.fieldOrder ?? [])),
    'fields': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A208,
    'config': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130,
    'fieldOrder': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464588
  };
}
function Pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464594, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464595) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464596 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464595 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464594.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464595] : null;
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464596 ? [BaseFieldType.SingleSelect, BaseFieldType.MultiSelect, BaseFieldType.Rating, BaseFieldType.Person, BaseFieldType.Group, BaseFieldType.Checkbox].includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464596.type) : false;
}
function Fa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464600, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464601) {
  return {
    'id': "fld-" + generateRandomId(8),
    'name': Da(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464600, "Status", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464601),
    'type': BaseFieldType.SingleSelect,
    'config': Tools.deepClone(ka)
  };
}
function Ia(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464604) {
  return Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464604.config ?? {}).length === 0 && Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464604.fieldSettings ?? {}).length === 0;
}
function La(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464607, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464608) {
  let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464607.config ?? {})
    },
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A210 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464608.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462722 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462722.id),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A211 = [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606.fieldOrder, ...var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A210],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464609 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.titleFieldId == "string" && Ra(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464608, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.titleFieldId) ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.titleFieldId : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606.primaryFieldId,
    var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.startDateFieldId == "string" ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.startDateFieldId : '',
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464610 = typeof var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.endDateFieldId == "string" ? var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.endDateFieldId : var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90,
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929958 = new Set([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464609, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464610].filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462723 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462723 && Ra(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464608, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462723))),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464611 = Object.fromEntries(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A211.flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462724 => var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929958.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462724) || !Ra(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464608, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462724) ? [] : [[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462724, {
      'hidden': true
    }]]));
  return {
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464607,
    'config': {
      ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132,
      'titleFieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464609
    },
    'fieldSettings': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464611
  };
}
function Ra(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464618, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464619, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464620) {
  return !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464618.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464620] ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464619.find(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462725 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462725.id === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464620)) && true;
}
function za(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464624, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464625) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464626 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464625 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464624.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464625] : null;
  return !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464626 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464626.type === BaseFieldType.Date && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464626.readonly !== true && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464626.system !== true;
}
function Ba(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464630, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464631, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464632) {
  let var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929960 = new Set([...Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464630.fields), ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464631.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462726 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462726.id)]),
    var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92 = "fld-" + generateRandomId(8);
  for (; var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929960.has(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92);) var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92 = "fld-" + generateRandomId(8);
  return {
    'id': var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB92,
    'name': Da(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464630, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464631),
    'type': BaseFieldType.Date,
    'config': {
      ...Aa
    }
  };
}
const Va = {
    'id': "base.command.create-base-view",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464636, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464637) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464637) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464638 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464636.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464640,
          view: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464641,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464642
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464637,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464643 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464638.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464643 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464643, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464640) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464643.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464640].views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464641.id]) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464644 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464636.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464645 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464636.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464646 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464643.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464647 = ja(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464646, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464640, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464641, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464642),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464648 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464646, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464647),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB134 = {
          'historyAction': 'create-view',
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464647,
          'viewType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464641.type
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB135 = {
          'historyAction': 'delete-view',
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464648,
          'viewType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464641.type
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464644.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB134) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464638.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464645.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464639,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB135
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB134
        }]
      }), true) : false;
    }
  },
  Ha = {
    'id': "base.command.delete-base-field",
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464662, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464663) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464663) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464664 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464662.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464666,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464667
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464663,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464668 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464664.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464668) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464669 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464668.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464670 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464669.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464666];
      if (!fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464668, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464666, {
        'fieldIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464667]
      }) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464670.primaryFieldId === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464667 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464667 === BASE_RECORD_ID_FIELD_ID) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464671 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464662.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464672 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464662.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464673 = new U().deleteField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464669, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464666, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464667),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464674 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464669, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464673),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464673
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464674
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464671.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464664.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464672.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464665,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB138
        }]
      }), true) : false;
    }
  },
  Ua = {
    'id': "base.command.delete-base-record",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464688, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464689) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464689) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464690 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464688.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464692,
          recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464693
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464689,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464694 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464690.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464694 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464694, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464692, {
        'recordIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464693]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464695 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464688.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464696 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464688.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464697 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464694.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464698 = Ze(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464697.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464692], [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464693]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464699 = new U(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464700 = new R(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464701 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464699.deleteRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464692, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464693),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464702 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464700.applyOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464701),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464703 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464699.createDeleteRecordsUndoOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464702, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464692, [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464693]),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464701,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464698,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464689.source ?? 'ui'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB143 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142,
          'source': 'redo'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB144 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464703,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464698.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462727 => ({
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462727,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462727.parentRecordId,
            'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462727.oldParentRecordId
          })),
          'source': 'undo'
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464695.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB142) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464690.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464696.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464691,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB144
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB143
        }]
      }), true) : false;
    }
  },
  Wa = {
    'id': "base.command.delete-base-table",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464720, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464721) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464721) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464722 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464720.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464724
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464721,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464725 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464722.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464725 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464725, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464724)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464726 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464720.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464727 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464720.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464728 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464725.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464729 = ze(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464728, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464724);
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464729.length > 0) return console.error("[DeleteBaseTableCommand]: table \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464724 + "\" is referenced by " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464729.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462728 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462728.tableId + '.' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462728.fieldId).join(',\x20') + '.'), false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464730 = new U().deleteTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464728, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464724),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464731 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464728, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464730),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464730
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB149 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464731
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464726.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464722.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464727.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464723,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB149
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148
        }]
      }), true) : false;
    }
  },
  Ga = {
    'id': "base.command.delete-base-view",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464744, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464745) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464745) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464746 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464744.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464748,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464749
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464745,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464750 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464746.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464750 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464750, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464748, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464749]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464751 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464744.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464752 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464744.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464753 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464750.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464754 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464753.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464748].views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464749].type,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464755 = new U().deleteView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464753, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464749),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464756 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464753, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464755),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152 = {
          'historyAction': 'delete-view',
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464755,
          'viewType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464754
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB153 = {
          'historyAction': "create-view",
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464756,
          'viewType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464754
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464751.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464746.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464752.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464747,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB153
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB152
        }]
      }), true) : false;
    }
  },
  Ka = {
    'id': "base.command.duplicate-base-field",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464770, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464771) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464771) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464772 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464770.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464774,
          sourceFieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464775,
          field: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464776,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464777,
          viewIndexes: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464778
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464771,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464772.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464774, {
        'fieldIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464775]
      }) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464775 === BASE_RECORD_ID_FIELD_ID || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779.getSnapshot().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464774].fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464776.id] || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464777 === 0 || !da(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464774, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464776)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464780 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464770.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464781 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464770.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464782 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464779.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464783 = new U().duplicateField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464782, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464774, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464775, {
          'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464776,
          'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464777,
          'viewIndexes': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464778
        }),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464784 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464782, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464783),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB156 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464783
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464784
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464780.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB156) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464772.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464781.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464773,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB156
        }]
      }), true) : false;
    }
  },
  qa = {
    'id': 'base.command.duplicate-base-record',
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464800, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464801) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464801) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464802 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464800.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464804,
          sourceRecordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464805,
          record: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464806
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464801,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464807 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464802.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464807 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464807, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464804, {
        'recordIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464805]
      }) || !pa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464807, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464804, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464806)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464808 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464800.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464809 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464800.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464810 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464807.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464811 = ma(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464806),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812 = Ye(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464810.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464804], [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464811]),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464813 = new U().duplicateRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464810, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464804, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464805, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464811),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464814 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464810, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464813),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB160 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464813,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812 : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464801.source ?? 'ui' : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB161 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB160,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.length ? "redo" : undefined
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464814,
          'hierarchyChanges': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.length ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462729 => ({
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462729,
            'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462729.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464812.length ? "undo" : undefined
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464808.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB160) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464802.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464809.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464803,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB161
        }]
      }), true) : false;
    }
  },
  Ja = {
    'id': "base.command.ensure-base-temporal-view-date-fields",
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464830, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464832 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464830.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464834,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464835,
          ensureEndDateField: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464836
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464837 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464832.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464837 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464837, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464834, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464835]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464838 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464837.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464839 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464838.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464834],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464839 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464839.views[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464835];
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464839 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840.type !== "calendar" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840.type !== "gantt") return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841 = Ma(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464836 === true);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841.changed) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464842 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464830.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464843 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464830.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464844 = new U(),
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A214 = [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841.fields["map"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462730 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464844.createField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464838, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831.tableId, {
          'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462730
        })), Ya([...Xa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831.viewId), "config"], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840.config, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841.config)];
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841.fieldOrder && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A214.push(Ya([...Xa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831.tableId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464831.viewId), "fieldOrder"], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464840.fieldOrder, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464841.fieldOrder));
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464845 = L(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A214),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464846 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464838, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464845),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464845
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464846
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464842.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464832.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464843.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464833,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB167
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB166
        }]
      }), true) : false;
    }
  };
function Ya(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464864, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464865, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464866) {
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464865 === undefined ? JSON1.insertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464864, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464866) : JSON1.replaceOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464864, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464865, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464866);
}
function Xa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464871) {
  return ["tables", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464870, "views", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464871];
}
const no = {
    'id': "base.command.move-base-view",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465022, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465023) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465023) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465024 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465022.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465026,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465027,
          target: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465028
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465023,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465029 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465024.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025, UniverInstanceType.UNIVER_BASE),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465030 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465028.beforeViewId ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465028.afterViewId;
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465029 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465030 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465030 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465027 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465029, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465026, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465027, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465030]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465031 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465022.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465032 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465022.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465033 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465029.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465034 = new U().moveView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465033, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465026, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465027, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465028),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465035 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465033, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465034),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465034
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465035
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465031.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465024.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465032.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465025,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB182
        }]
      }), true) : false;
    }
  },
  ro = {
    'id': "base.command.rename-base-table",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465050, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465051) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465051) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465052 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465050.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465054,
          name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465055
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465051,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465056 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465052.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465056 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465056, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465054) || !wa(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465056.getSnapshot(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465055, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465054).valid) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465057 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465050.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465058 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465050.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465059 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465056.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465060 = new U().renameTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465059, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465054, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465055),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465061 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465059, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465060),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465060
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB187 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465061
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465057.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465052.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465058.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465053,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB187
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186
        }]
      }), true) : false;
    }
  },
  io = {
    'id': "base.command.rename-base-view",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465074, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465075) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465075) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465076 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465074.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465078,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465079,
          name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465080
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465075,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465081 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465076.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465081 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465081, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465078, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465079]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465082 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465074.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465083 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465074.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465084 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465081.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465085 = new U().renameView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465084, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465078, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465079, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465080),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465086 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465084, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465085),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB190 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465085
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465086
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465082.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB190) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465076.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465083.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465077,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB190
        }]
      }), true) : false;
    }
  },
  ao = {
    'id': "base.command.set-base-kanban-group-field",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465100, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465101) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465101) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465102 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465100.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465104,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465105,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465106
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465101,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465107 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465102.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465107 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465107, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465104, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465105],
        'fieldIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465106]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465108 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465100.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465109 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465100.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465110 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465107.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465111 = new U().updateViewConfig(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465110, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465104, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465105, {
          'groupFieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465106
        }),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465112 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465110, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465111),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465111
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB195 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465112
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465108.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465102.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465109.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465103,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB195
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB194
        }]
      }), true) : false;
    }
  },
  oo = {
    'id': 'base.command.set-base-name',
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465126, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465128 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465126.get(IUniverInstanceService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465129 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465128.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.unitId, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465129) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465130 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465129.getSnapshot().name;
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465130 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.name) return true;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465131 = new U(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465132 = new R(),
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222 = [],
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223 = [],
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A224 = [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465129, ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465128.getAllUnitsForType(UniverInstanceType.UNIVER_BASE).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462732 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462732.getUnitId() !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.unitId)];
      for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462733 of var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A224) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462733.getSnapshot(),
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462733 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465129 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465131.setBaseName(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.name) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465131.renameFormulaUnitReferences(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465130, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.name);
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46676 && (var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
          'id': Q.id,
          'params': {
            'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462733.getUnitId(),
            'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46676,
            'trigger': oo.id
          }
        }), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.unshift({
          'id': Q.id,
          'params': {
            'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462733.getUnitId(),
            'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465132.invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46676),
            'trigger': oo.id
          }
        }));
      }
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465133 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465126.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465134 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465126.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465135 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465134.__tempBatchingUndoRedo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.unitId);
      try {
        return sequenceExecute(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465133).result ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465128.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.unitId), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465134.pushUndoRedo({
          'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465127.unitId,
          'undoMutations': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223,
          'redoMutations': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222
        }), true) : false;
      } finally {
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465135.dispose();
      }
    }
  },
  so = {
    'type': CommandType.COMMAND,
    'id': "base.command.set-permission",
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465146, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147) {
      return !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147 || !Sr.includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.action) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.objectId !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.unitId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.action !== UnitAction.Edit ? false : (Nr(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465146.get(IPermissionService), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.objectId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.action, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465147.value), true);
    }
  };
export { Va as CreateBaseViewCommand, Ha as DeleteBaseFieldCommand, Ua as DeleteBaseRecordCommand, Wa as DeleteBaseTableCommand, Ga as DeleteBaseViewCommand, Ka as DuplicateBaseFieldCommand, qa as DuplicateBaseRecordCommand, Ja as EnsureBaseTemporalViewDateFieldsCommand, no as MoveBaseViewCommand, ro as RenameBaseTableCommand, io as RenameBaseViewCommand, ao as SetBaseKanbanGroupFieldCommand, oo as SetBaseNameCommand, so as SetBasePermissionCommand };
