import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { ns } from "./bases-field-stat-supported.js";
import { as } from "./bases-field-stat-empty-value.js";
import { Zo } from "./bases-field-stat-types.js";
function rs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465711, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465712) {
  if (!ns(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465712)) return null;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465711.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462793 => !as(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462793));
  switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465712) {
    case 'count':
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465711.length;
    case "filled":
      return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244.length;
    case 'empty':
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465711.length - var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244.length;
    case "unique":
      return new Set(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46679 => ls(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46679))).size;
    case "sum":
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46680 = os(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244);
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46680.length ? cs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46680) : null;
      }
    case "average":
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46681 = os(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244);
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46681.length ? cs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46681) / var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46681.length : null;
      }
    case 'min':
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46682 = os(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244);
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46682.length ? Math.min(...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46682) : null;
      }
    case "max":
      {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46683 = os(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A244);
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46683.length ? Math.max(...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46683) : null;
      }
  }
}
function os(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465726, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465727) {
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A246 = [];
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462795 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465727) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46685 = ss(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465726, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462795);
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46685 != null && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A246.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46685);
  }
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A246;
}
function ss(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465730, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731) {
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731 == "number") return Number.isFinite(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731 : null;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465730.type !== BaseFieldType.Formula && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731 == 'string' && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731.trim() !== '') {
    let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = Number(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465731);
    return Number.isFinite(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D42) ? var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 : null;
  }
  return null;
}
function cs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465734) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = 0,
    var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 = 0;
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462796 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465734) {
    let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462796;
    var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 += Math.abs(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94) >= Math.abs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462796) ? var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 - var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462796 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462796 - var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 + var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94, var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24;
  }
  return var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 + var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D95;
}
function ls(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465736, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465737) {
  return Zo.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465736.type) && Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465737) ? ds([...new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465737.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462797 => ds(us(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462797))))].sort()) : ds(us(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465737));
}
function us(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740) {
  return Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740.map(us) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740 == "object" ? Object.fromEntries(Object.entries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740).sort(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462798], [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462799]) => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462798.localeCompare(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462799)).map(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462800, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462801]) => [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462800, us(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462801)])) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465740;
}
function ds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465742) {
  return JSON.stringify(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465742) ?? "undefined";
}
export { rs as calculateBaseFieldStat };
