Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/engine-formula/facade"),
  t = require("@univerjs-pro/engine-formula"),
  n = require("@univerjs/core/facade"),
  r = require("@univerjs/core");
var i = class extends n.FEnum {
  get FormulaReferenceType() {
    return t.FormulaReferenceType;
  }
};
n.FEnum["extend"](i);
var a = class extends e.FFormula {
  buildReference(var_core_value_sig7524) {
    let {
      hostUnitId: var_core_value_sig2AD8,
      unit: var_core_value_sig2AD0,
      target: var_core_value_sig3EEE
    } = var_core_value_sig7524;
    if (!var_core_value_sig2AD8 || !var_core_value_sig2AD0.unitId) throw Error("Formula reference authoring requires stable Host and Source Unit IDs.");
    if (var_core_value_sig2AD0.unitId !== var_core_value_sig2AD8 && !this._commandService["syncExecuteCommand"](t.UpsertHostExternalReferenceCommand["id"], {
      unitId: var_core_value_sig2AD8,
      qualifier: var_core_value_sig2AD0.formulaQualifier,
      sourceUnitId: var_core_value_sig2AD0.unitId,
      sourceUnitType: var_core_value_sig3EEE.kind === t.FormulaReferenceType["SHEET_RANGE"] ? r.UniverInstanceType["UNIVER_SHEET"] : r.UniverInstanceType["UNIVER_BASE"]
    })) throw Error('Failed to bind external formula reference "' + var_core_value_sig2AD0.formulaQualifier + "\x22.");
    return (0, t.buildFormulaReference)(var_core_value_sig7524);
  }
  upsertExternalReference(var_core_value_sigBC46) {
    return this._commandService["syncExecuteCommand"](t.UpsertHostExternalReferenceCommand["id"], var_core_value_sigBC46);
  }
  removeExternalReference(var_core_value_sig3D7D) {
    return this._commandService["syncExecuteCommand"](t.RemoveHostExternalReferenceCommand["id"], var_core_value_sig3D7D);
  }
};
e.FFormula["extend"](a), Object.defineProperty(exports, "FFormula", {
  enumerable: true,
  get: function () {
    return e.FFormula;
  }
});
