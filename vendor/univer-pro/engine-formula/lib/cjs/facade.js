Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
  buildReference(_0x2db580) {
    let {
      hostUnitId: _0x135cae,
      unit: _0x2fb9cb,
      target: _0x3f81cf,
    } = _0x2db580;
    if (!_0x135cae || !_0x2fb9cb.unitId)
      throw Error(
        "Formula reference authoring requires stable Host and Source Unit IDs.",
      );
    if (
      _0x2fb9cb.unitId !== _0x135cae &&
      !this._commandService["syncExecuteCommand"](
        t.UpsertHostExternalReferenceCommand["id"],
        {
          unitId: _0x135cae,
          qualifier: _0x2fb9cb.formulaQualifier,
          sourceUnitId: _0x2fb9cb.unitId,
          sourceUnitType:
            _0x3f81cf.kind === t.FormulaReferenceType["SHEET_RANGE"]
              ? r.UniverInstanceType["UNIVER_SHEET"]
              : r.UniverInstanceType["UNIVER_BASE"],
        },
      )
    )
      throw Error(
        'Failed to bind external formula reference "' +
          _0x2fb9cb.formulaQualifier +
          "\x22.",
      );
    return (0, t.buildFormulaReference)(_0x2db580);
  }
  upsertExternalReference(_0x307c96) {
    return this._commandService["syncExecuteCommand"](
      t.UpsertHostExternalReferenceCommand["id"],
      _0x307c96,
    );
  }
  removeExternalReference(_0x3ecb94) {
    return this._commandService["syncExecuteCommand"](
      t.RemoveHostExternalReferenceCommand["id"],
      _0x3ecb94,
    );
  }
};
(e.FFormula["extend"](a),
  Object.defineProperty(exports, "FFormula", {
    enumerable: true,
    get: function () {
      return e.FFormula;
    },
  }));
