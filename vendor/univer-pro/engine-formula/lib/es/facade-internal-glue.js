import { FFormula, FFormula as fFormula } from "@univerjs/engine-formula/facade";
import { FormulaReferenceType, RemoveHostExternalReferenceCommand, UpsertHostExternalReferenceCommand, buildFormulaReference } from "@univerjs-pro/engine-formula";
import { FEnum } from "@univerjs/core/facade";
import { UniverInstanceType } from "@univerjs/core";
var c = class extends FEnum {
  get FormulaReferenceType() {
    return FormulaReferenceType;
  }
};
FEnum.extend(c);
var l = class extends fFormula {
  buildReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    let {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
      unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462,
      target: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.unitId) throw Error("Formula reference authoring requires stable Host and Source Unit IDs.");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 && !this._commandService["syncExecuteCommand"](UpsertHostExternalReferenceCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
      qualifier: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.formulaQualifier,
      sourceUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.unitId,
      sourceUnitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.kind === FormulaReferenceType.SHEET_RANGE ? UniverInstanceType.UNIVER_SHEET : UniverInstanceType.UNIVER_BASE
    })) throw Error("Failed\x20to\x20bind\x20external\x20formula\x20reference\x20\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.formulaQualifier + "\x22.");
    return buildFormulaReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
  }
  upsertExternalReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return this._commandService["syncExecuteCommand"](UpsertHostExternalReferenceCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
  }
  removeExternalReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
    return this._commandService["syncExecuteCommand"](RemoveHostExternalReferenceCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
  }
};
fFormula.extend(l);
