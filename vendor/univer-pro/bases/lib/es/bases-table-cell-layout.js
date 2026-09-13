import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { At, Ct, Et, jt, kt, ot, vt, yt } from "./internal-db-endo.js";
import { F } from "./bases-performance.js";
function I(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463201;
  return ot() ? F("IBaseCellData.ensureTableCellLayout", () => dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200), {
    'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200.id,
    'records': Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200.records ?? {}).length,
    'fields': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200.fieldOrder["length"],
    'hasRecordOrder': !!((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463201 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200.recordOrder) != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463201.length)
  }) : dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463200);
}
function dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463205;
  let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.records ?? {},
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.fields ?? {},
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138 = ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463205 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.recordOrder) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463205.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46848 => var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46848])) ?? [],
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940 = new Set(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139 = [];
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46849 of Object.values(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66)) var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46849.id) || var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46849);
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140 = var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139.length ? [...var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138, ...Ft(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139)] : var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A138,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463206 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.fieldOrder['filter'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46850 => var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46850]),
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.rowId ?? {})
    },
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB69 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.colId ?? {})
    },
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70 = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.cellData ?? {})
    };
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.recordOrder = var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.rowIndex = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.rowId = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.colIndex = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.colId = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.cellData = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources ?? {})
  }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources["attachmentSets"] = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources['attachmentSets'] ?? {})
  }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources["attachments"] = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.resources["attachments"] ?? {})
  };
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463207 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.rowIndex,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463208 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.rowId,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463209 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.colIndex,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463210 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.colId,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204.cellData;
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140.forEach((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852) => {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463207[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463208[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851;
  }), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463206.forEach((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46855, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46856) => {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463209[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46855] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463210[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46856] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46855;
  }), Object.entries(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70).forEach(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46859, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46860]) => {
    let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = Number(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46859),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46861 = var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D30] ?? var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A140[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D30],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46862 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46861 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463207[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46861] : undefined;
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46862 != null && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46862] = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46862] ?? {})
    }, Object.entries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46860 ?? {}).forEach(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155]) => {
      let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = Number(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46154),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB69[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D5] ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463206[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D5],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46156 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463209[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46156] : undefined;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46157 != null && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46862][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46157] = yt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155));
    }));
  }), Object.values(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66).forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867 => {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463207[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.id];
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868 != null && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.values = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.values ?? {}),
      [BASE_RECORD_ID_FIELD_ID]: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.id
    }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868] = {
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868] ?? {}),
      0: {
        'v': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.id,
        't': CellValueType.STRING
      }
    }, Object.entries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.values ?? {}).forEach(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46163]) => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46162];
      (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164.type) === BaseFieldType.Attachment && wt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46867.id, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46163);
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463209[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46162];
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165 == null) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165];
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46166 != null) {
        Ot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46163) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165] = vt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164));
        return;
      }
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463211[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46868][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46165] = vt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46164);
    }));
  }), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463204;
}
function wt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463333, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463334, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463335) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463336 = Et(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463335);
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources ?? {})
  }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources["attachmentSets"] = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources["attachmentSets"] ?? {})
  }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources["attachments"] = {
    ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources['attachments'] ?? {})
  };
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463337 = Ct(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463334, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463333),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144 = [];
  for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463336.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34++) {
    if (!(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463336)) continue;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463336[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34],
      var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46184.id ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463337 + '\x1f' + var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D34),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
        'id': var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11
      };
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources["attachments"][var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11] = var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144.push(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11);
  }
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463332.resources["attachmentSets"][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463337] = var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144;
}
function Ot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463364, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463365, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463366) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463365 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463365.type) === BaseFieldType.Attachment ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463364.v !== '' : At(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463365) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463364.v !== jt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463366) : kt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463365) ? Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463366) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463364.v == null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463364.v === '') : false;
}
function Ft(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463386) {
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463386.sort((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46889, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46890) => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46889.orderKey["localeCompare"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46890.orderKey));
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154 = [];
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46891 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463386) var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46891.id);
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154;
}
export { I as ensureBaseTableCellLayout };
