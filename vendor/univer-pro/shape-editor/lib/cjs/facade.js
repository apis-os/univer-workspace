let e = require("@univerjs-pro/shape-editor"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs-pro/engine-formula"),
  r = require("@univerjs-pro/engine-shape/facade"),
  i = require("@univerjs/core"),
  a = require("@univerjs-pro/engine-shape");
var o = class extends t.FEnum {
  get FormulaShapeResultStatus() {
    return e.FormulaShapeResultStatus;
  }
};
t.FEnum["extend"](o);
var s = class extends t.FEventName {
  get FormulaShapeResultChanged() {
    return "FormulaShapeResultChanged";
  }
};
t.FEventName["extend"](s);
var c = class extends r.FShape {
  isFormulaShape() {
    var _0x330dce;
    return (
      ((_0x330dce = this._getFormulaShapeData()) == null
        ? undefined
        : _0x330dce.formulaBinding) != null
    );
  }
  getFormula() {
    var _0x309bb3;
    return (
      ((_0x309bb3 = this._getFormulaShapeData()) == null ||
      (_0x309bb3 = _0x309bb3.formulaBinding) == null
        ? undefined
        : _0x309bb3.formula) ?? null
    );
  }
  setFormula(_0x54f62a) {
    if (!l(_0x54f62a))
      return (
        console.warn(
          "[Formula Shape Facade]: setFormula requires { formula, externalReferences }.",
        ),
        this
      );
    let { formula: _0x35f551, externalReferences: _0x3ff3cc } = _0x54f62a;
    if (_0x35f551 && !_0x35f551.startsWith("="))
      return (
        console.warn(
          "[Formula\x20Shape\x20Facade]:\x20Formula\x20text\x20must\x20begin\x20with\x20\x22=\x22.",
        ),
        this
      );
    let _0x49114e = this._getFormulaIdentity();
    return this._getFormulaShapeData()
      ? _0x3ff3cc.length > 0 &&
        !this._commandService["syncExecuteCommand"](
          n.UpsertHostExternalReferencesCommand["id"],
          { unitId: _0x49114e.unitId, references: _0x3ff3cc },
        )
        ? (console.warn(
            "[Formula\x20Shape\x20Facade]:\x20Failed\x20to\x20bind\x20External\x20References.",
          ),
          this)
        : this._updateFormulaBinding(
            (_0xb60505) => ({ ..._0xb60505, formula: _0x35f551 }),
            true,
          )
      : this;
  }
  removeFormula() {
    let _0x2c0f3e = this._getFormulaShapeData();
    return (
      _0x2c0f3e != null &&
        _0x2c0f3e.formulaBinding &&
        this._mutate("remove formula from", (_0x592a62) =>
          _0x592a62.updateShape(this._shapeRef, {
            shapeData: { ..._0x2c0f3e, formulaBinding: undefined },
          }),
        ),
      this
    );
  }
  getFormulaResult() {
    var _0x1aef3e;
    let _0x9f7a44 =
        (_0x1aef3e = this._getFormulaShapeData()) == null
          ? undefined
          : _0x1aef3e.formulaBinding,
      _0x137ee1 = this._getFormulaIdentity();
    return _0x9f7a44
      ? (this._injector["get"](e.ShapeFormulaService).getResult(_0x137ee1) ??
          null)
      : null;
  }
  getFormulaNumberFormat() {
    var _0x1f153b, _0x583a4c;
    let _0x59e3ea =
      (_0x1f153b = this._getFormulaShapeData()) == null
        ? undefined
        : _0x1f153b.formulaBinding;
    return _0x59e3ea
      ? ((_0x583a4c = _0x59e3ea.numberFormat) == null
          ? undefined
          : _0x583a4c.pattern) || i.DEFAULT_NUMBER_FORMAT
      : null;
  }
  setFormulaNumberFormat(_0x2df269) {
    return this._updateFormulaBinding((_0x3ab11d) => ({
      ..._0x3ab11d,
      numberFormat: { pattern: _0x2df269 || i.DEFAULT_NUMBER_FORMAT },
    }));
  }
  isFormulaAnimationEnabled() {
    var _0x7a2fba;
    let _0x4a987d =
      (_0x7a2fba = this._getFormulaShapeData()) == null
        ? undefined
        : _0x7a2fba.formulaBinding;
    return _0x4a987d ? _0x4a987d.animationEnabled !== false : false;
  }
  setFormulaAnimationEnabled(_0x513607) {
    return this._updateFormulaBinding((_0x4fb55b) => ({
      ..._0x4fb55b,
      animationEnabled: _0x513607,
    }));
  }
  _updateFormulaBinding(_0x2ad7c2, _0x2d132c = false) {
    let _0x28beef = this._getFormulaShapeData();
    if (!_0x28beef || (!_0x28beef.formulaBinding && !_0x2d132c))
      return (
        console.warn(
          "[Formula Shape Facade]: The Shape is not a Formula Shape.",
        ),
        this
      );
    let _0x66f0df = _0x2ad7c2(_0x28beef.formulaBinding ?? { formula: "" }),
      _0x2bd8c2 = _0x28beef.formulaBinding
        ? { ..._0x28beef, formulaBinding: _0x66f0df }
        : (0, e.createFormulaShapeDataFromShape)(_0x28beef, _0x66f0df);
    return (
      this._mutate("update formula for", (_0x43cd34) =>
        _0x43cd34.updateShape(this._shapeRef, { shapeData: _0x2bd8c2 }),
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
    var _0x3b3903;
    return (
      ((_0x3b3903 = this._getAdapter()) == null ||
      (_0x3b3903 = _0x3b3903.getShape(this._shapeRef)) == null
        ? undefined
        : _0x3b3903.shapeData) ?? null
    );
  }
};
function l(_0x578eea) {
  return (
    !!_0x578eea &&
    typeof _0x578eea == "object" &&
    "formula" in _0x578eea &&
    typeof _0x578eea.formula == "string" &&
    "externalReferences" in _0x578eea &&
    Array.isArray(_0x578eea.externalReferences)
  );
}
r.FShape["extend"](c);
var u = class extends t.FUniver {
  _initialize(_0x13983f) {
    this.disposeWithMe(
      this.registerEventHandler(this.Event["FormulaShapeResultChanged"], () =>
        _0x13983f
          .get(e.ShapeFormulaService)
          .presentationChanged$["subscribe"]((_0x5158a0) => {
            let _0x4df6e9 = this._univerInstanceService["getUnitType"](
              _0x5158a0.unitId,
            );
            if (!(0, a.isShapeHostType)(_0x4df6e9)) return;
            let _0x198c3a = {
              shape: _0x13983f.createInstance(
                r.FShape,
                {
                  hostType: _0x4df6e9,
                  unitId: _0x5158a0.unitId,
                  subUnitId: _0x5158a0.subUnitId,
                  shapeId: _0x5158a0.shapeId,
                },
                _0x13983f,
              ),
              shapeRef: {
                hostType: _0x4df6e9,
                unitId: _0x5158a0.unitId,
                subUnitId: _0x5158a0.subUnitId,
                shapeId: _0x5158a0.shapeId,
              },
              result: _0x5158a0.result,
              previousResult: _0x5158a0.previousResult,
            };
            this.fireEvent(this.Event["FormulaShapeResultChanged"], _0x198c3a);
          }),
      ),
    );
  }
};
t.FUniver["extend"](u);
