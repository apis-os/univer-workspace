import {
  FormulaShapeResultStatus as _0x14347c,
  ShapeFormulaService as _0x38c3da,
  createFormulaShapeDataFromShape as _0x5dfb13,
} from "@univerjs-pro/shape-editor";
import {
  FEnum as _0x18656d,
  FEventName as _0x3c4139,
  FUniver as _0x3528af,
} from "@univerjs/core/facade";
import { UpsertHostExternalReferencesCommand as _0x29fa05 } from "@univerjs-pro/engine-formula";
import { FShape as _0x5bd6a7 } from "@univerjs-pro/engine-shape/facade";
import { DEFAULT_NUMBER_FORMAT as _0x1de463 } from "@univerjs/core";
import { isShapeHostType as _0x1b70e4 } from "@univerjs-pro/engine-shape";
var u = class extends _0x18656d {
  get FormulaShapeResultStatus() {
    return _0x14347c;
  }
};
_0x18656d.extend(u);
var d = class extends _0x3c4139 {
  get FormulaShapeResultChanged() {
    return "FormulaShapeResultChanged";
  }
};
_0x3c4139.extend(d);
var f = class extends _0x5bd6a7 {
  isFormulaShape() {
    var _0x23344b = _0x404012,
      _0x5f4991;
    return (
      ((_0x5f4991 = this[_0x23344b(519)]()) == null
        ? undefined
        : _0x5f4991[_0x23344b(533)]) != null
    );
  }
  getFormula() {
    var _0x2afb3c = _0x404012,
      _0x3e0ab8;
    return (
      ((_0x3e0ab8 = this[_0x2afb3c(519)]()) == null ||
      (_0x3e0ab8 = _0x3e0ab8[_0x2afb3c(533)]) == null
        ? undefined
        : _0x3e0ab8[_0x2afb3c(502)]) ?? null
    );
  }
  setFormula(_0x1d0d5d) {
    if (!p(_0x1d0d5d))
      return (
        console.warn(
          "[Formula\x20Shape\x20Facade]:\x20setFormula\x20requires\x20{\x20formula,\x20externalReferences\x20}.",
        ),
        this
      );
    let { formula: _0x3d90a3, externalReferences: _0xbbd493 } = _0x1d0d5d;
    if (_0x3d90a3 && !_0x3d90a3.startsWith("="))
      return (
        console.warn(
          "[Formula\x20Shape\x20Facade]:\x20Formula\x20text\x20must\x20begin\x20with\x20\x22=\x22.",
        ),
        this
      );
    let _0x4d0666 = this._getFormulaIdentity();
    return this._getFormulaShapeData()
      ? _0xbbd493.length > 0 &&
        !this._commandService["syncExecuteCommand"](_0x29fa05.id, {
          unitId: _0x4d0666.unitId,
          references: _0xbbd493,
        })
        ? (console.warn(
            "[Formula Shape Facade]: Failed to bind External References.",
          ),
          this)
        : this._updateFormulaBinding(
            (_0x39896b) => ({ ..._0x39896b, formula: _0x3d90a3 }),
            true,
          )
      : this;
  }
  removeFormula() {
    let _0x165232 = this._getFormulaShapeData();
    return (
      _0x165232 != null &&
        _0x165232.formulaBinding &&
        this._mutate("remove\x20formula\x20from", (_0x1382e7) =>
          _0x1382e7.updateShape(this._shapeRef, {
            shapeData: { ..._0x165232, formulaBinding: undefined },
          }),
        ),
      this
    );
  }
  getFormulaResult() {
    var _0x5c9cb5 = _0x404012,
      _0x4638ad;
    let _0x494de7 =
        (_0x4638ad = this._getFormulaShapeData()) == null
          ? undefined
          : _0x4638ad[_0x5c9cb5(533)],
      _0x45f68f = this[_0x5c9cb5(486)]();
    return _0x494de7
      ? (this[_0x5c9cb5(494)]
          [_0x5c9cb5(518)](_0x38c3da)
          [_0x5c9cb5(488)](_0x45f68f) ?? null)
      : null;
  }
  getFormulaNumberFormat() {
    var _0x2f6a6b = _0x404012,
      _0x4b6aae,
      _0x46d128;
    let _0x3337c6 =
      (_0x4b6aae = this[_0x2f6a6b(519)]()) == null
        ? undefined
        : _0x4b6aae[_0x2f6a6b(533)];
    return _0x3337c6
      ? ((_0x46d128 = _0x3337c6[_0x2f6a6b(483)]) == null
          ? undefined
          : _0x46d128[_0x2f6a6b(530)]) || _0x1de463
      : null;
  }
  setFormulaNumberFormat(_0x1a111f) {
    return this._updateFormulaBinding((_0x5d4726) => ({
      ..._0x5d4726,
      numberFormat: { pattern: _0x1a111f || _0x1de463 },
    }));
  }
  isFormulaAnimationEnabled() {
    var _0x591ab9 = _0x404012,
      _0x3baf17;
    let _0x304c7d =
      (_0x3baf17 = this._getFormulaShapeData()) == null
        ? undefined
        : _0x3baf17[_0x591ab9(533)];
    return _0x304c7d ? _0x304c7d.animationEnabled !== false : false;
  }
  setFormulaAnimationEnabled(_0x484d91) {
    return this._updateFormulaBinding((_0x540391) => ({
      ..._0x540391,
      animationEnabled: _0x484d91,
    }));
  }
  _updateFormulaBinding(_0x38e1bd, _0x2d5216 = false) {
    let _0x19fade = this._getFormulaShapeData();
    if (!_0x19fade || (!_0x19fade.formulaBinding && !_0x2d5216))
      return (
        console.warn(
          "[Formula Shape Facade]: The Shape is not a Formula Shape.",
        ),
        this
      );
    let _0x1d4137 = _0x38e1bd(_0x19fade.formulaBinding ?? { formula: "" }),
      _0x5c4a3a = _0x19fade.formulaBinding
        ? { ..._0x19fade, formulaBinding: _0x1d4137 }
        : _0x5dfb13(_0x19fade, _0x1d4137);
    return (
      this._mutate("update formula for", (_0x573d70) =>
        _0x573d70.updateShape(this._shapeRef, { shapeData: _0x5c4a3a }),
      ),
      this
    );
  }
  _getFormulaIdentity() {
    return {
      hostType: this._shapeRef["hostType"],
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      shapeId: this._shapeRef["shapeId"],
    };
  }
  _getFormulaShapeData() {
    var _0x199f15 = _0x404012,
      _0x47253a;
    return (
      ((_0x47253a = this[_0x199f15(527)]()) == null ||
      (_0x47253a = _0x47253a.getShape(this._shapeRef)) == null
        ? undefined
        : _0x47253a[_0x199f15(499)]) ?? null
    );
  }
};
function p(_0x45c1da) {
  return (
    !!_0x45c1da &&
    typeof _0x45c1da == "object" &&
    "formula" in _0x45c1da &&
    typeof _0x45c1da.formula == "string" &&
    "externalReferences" in _0x45c1da &&
    Array.isArray(_0x45c1da.externalReferences)
  );
}
_0x5bd6a7.extend(f);
var m = class extends _0x3528af {
  _initialize(_0x2f67ce) {
    this.disposeWithMe(
      this.registerEventHandler(this.Event["FormulaShapeResultChanged"], () =>
        _0x2f67ce
          .get(_0x38c3da)
          .presentationChanged$["subscribe"]((_0x55cb2a) => {
            let _0x194c61 = this._univerInstanceService["getUnitType"](
              _0x55cb2a.unitId,
            );
            if (!_0x1b70e4(_0x194c61)) return;
            let _0x13d13c = {
              shape: _0x2f67ce.createInstance(
                _0x5bd6a7,
                {
                  hostType: _0x194c61,
                  unitId: _0x55cb2a.unitId,
                  subUnitId: _0x55cb2a.subUnitId,
                  shapeId: _0x55cb2a.shapeId,
                },
                _0x2f67ce,
              ),
              shapeRef: {
                hostType: _0x194c61,
                unitId: _0x55cb2a.unitId,
                subUnitId: _0x55cb2a.subUnitId,
                shapeId: _0x55cb2a.shapeId,
              },
              result: _0x55cb2a.result,
              previousResult: _0x55cb2a.previousResult,
            };
            this.fireEvent(this.Event["FormulaShapeResultChanged"], _0x13d13c);
          }),
      ),
    );
  }
};
_0x3528af.extend(m);
export {};
