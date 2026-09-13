import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { dn } from "./bases-date-value.js";
import { zo } from "./bases-number-value.js";
import { Wo } from "./bases-progress-value.js";
function tc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465871 = hc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.query);
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465871) return {
    'query': '',
    'total': 0,
    'matches': []
  };
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248 = [],
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A249 = [];
  for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.fieldIds["length"]; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43++) {
    if (!(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.fieldIds)) continue;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46765 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.table["fields"][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.fieldIds[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43]];
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46765 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A249.push({
      'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46765,
      'fieldIndex': var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D43
    });
  }
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.rows['forEach']((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462993, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462994) => {
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A249.forEach(({
      field: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
      fieldIndex: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767
    }) => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768 = nc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462993.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.id], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = mc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465871, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768.searchTexts);
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46769 <= 0 || var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.push({
        'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462993.recordId,
        'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.id,
        'fieldType': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.type,
        'text': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768.displayText,
        'score': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46769,
        'rowIndex': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462994,
        'fieldIndex': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767
      });
    });
  }), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.sort((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462997, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462998) => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462998.score - var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462997.score || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462997.rowIndex - var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462998.rowIndex || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462997.fieldIndex - var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462998.fieldIndex);
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.limit == null ? var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248 : var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.slice(0, Math.max(0, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465870.limit));
  return {
    'query': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465871,
    'total': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.length,
    'matches': fn_L0_db_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250)
  };
}
function nc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465874, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465875) {
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254 = [];
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462999 of ic(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465874, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465875)) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46774 = hc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462999);
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46774 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46774);
  }
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254.length ? {
    'displayText': rc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465874, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465875),
    'searchTexts': gc(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254)
  } : null;
}
function rc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879) {
  switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879.type) {
    case BaseFieldType.SingleSelect:
    case BaseFieldType.MultiSelect:
    case BaseFieldType.Group:
      return ac(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879).join(',\x20');
    case BaseFieldType.Link:
      return cc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878);
    case BaseFieldType.Date:
    case BaseFieldType.CreatedAt:
    case BaseFieldType.UpdatedAt:
      return lc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879);
    case BaseFieldType.Number:
    case BaseFieldType.Currency:
      return uc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879);
    case BaseFieldType.Progress:
      return dc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465879);
    case BaseFieldType.Checkbox:
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878 ? "Checked" : "Unchecked";
    case BaseFieldType.Attachment:
      return fc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878).join(',\x20');
    default:
      return pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465878);
  }
}
function ic(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883) {
  switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883.type) {
    case BaseFieldType.SingleSelect:
    case BaseFieldType.MultiSelect:
    case BaseFieldType.Group:
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46775 = ac(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883);
        if (Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)) {
          let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46775];
          for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3++) var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push(String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3]));
          return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4;
        }
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882 == null ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46775 : [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46775, String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)];
      }
    case BaseFieldType.Link:
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776 = sc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882);
        return [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776.text, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776.url];
      }
    case BaseFieldType.Date:
    case BaseFieldType.CreatedAt:
    case BaseFieldType.UpdatedAt:
      return [lc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883), pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)];
    case BaseFieldType.Number:
    case BaseFieldType.Currency:
      return [uc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883), pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)];
    case BaseFieldType.Progress:
      return [dc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465883), pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)];
    case BaseFieldType.Checkbox:
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882 ? ["Checked", "Yes", "True"] : ["Unchecked", 'No', "False"];
    case BaseFieldType.Attachment:
      return fc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882);
    default:
      return [pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465882)];
  }
}
function ac(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465887) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465888;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A256 = Array.isArray((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465888 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465887.config) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465888.options) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465887.config["options"] : [],
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257 = [];
  if (Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886)) {
    for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D23++) {
      if (!(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886)) continue;
      let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D23]);
      var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257.push(oc(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A256, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10));
    }
    return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257;
  }
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886 != null) {
    let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59 = String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465886);
    var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257.push(oc(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A256, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59));
  }
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257;
}
function oc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465892, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893) {
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465892) {
    if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000 == "string" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000;
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000 == "object") {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463000;
      if (String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.id ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.name ?? '') === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893 || String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.name ?? '') === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893) return String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.name ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115.id ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893);
    }
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465893;
}
function sc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896 == "object" && !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896)) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463001 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896;
    return {
      'text': String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463001.text ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463001.url ?? ''),
      'url': String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463001.url ?? '')
    };
  }
  return {
    'text': pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896),
    'url': pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465896)
  };
}
function cc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465898) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465899 = sc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465898);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465899.text || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465899.url;
}
function lc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465902, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465903) {
  return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465902 != 'number' || !Number.isFinite(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465902) ? '' : dn(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465902, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465903.config);
}
function uc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465907) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465906 == "number" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465906 : Number(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465906);
  return Number.isFinite(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D100) ? zo(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D100, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465907.config) : '';
}
function dc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465910, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465911) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465910 == 'number' ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465910 : Number(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465910);
  return Number.isFinite(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D102) ? Wo(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D102, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465911.config) : '';
}
function fc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465914) {
  return Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465914) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465914.flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463002 => {
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463002 || typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463002 != "object") return [];
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463003 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463002,
      var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 = String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463003.name ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463003.url ?? '').trim();
    return var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 ? [var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60] : [];
  }) : [];
}
function pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916 == null) return '';
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916 == "boolean") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916 ? "true" : "false";
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916 == "number") return String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916);
  if (Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916)) {
    let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115 = [];
    for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D24++) {
      if (!(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916)) continue;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = pc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D24]);
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116);
    }
    return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115.join(',\x20');
  }
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916 == "object") {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463006 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916;
    return String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463006.title ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463006.name ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463006.text ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463006.url ?? '').trim();
  }
  return String(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465916);
}
function mc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465918, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465919) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = 0;
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463007 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465919) if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463007) {
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463007 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465918) {
      var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = Math.max(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, 300);
      continue;
    }
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463007.startsWith(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465918)) {
      var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = Math.max(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, 250);
      continue;
    }
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463007.includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465918) && (var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = Math.max(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, 200));
  }
  return var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D104;
}
function hc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465922) {
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465922.trim().replace(/\s+/g, '\x20').toLowerCase();
}
function gc(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465924) {
  return Array.from(new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465924));
}
function fn_L0_db_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465926) {
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A260 = [];
  for (let {
    rowIndex: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463008,
    fieldIndex: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463009,
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463010
  } of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465926) var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A260.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463010);
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A260;
}
export { tc as searchBaseTable };
