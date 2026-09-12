import {
  ConvertDocFormulaToTextCommand as _0x2ef28d,
  DocFormulaDisplayTextService as _0x58760a,
  DocFormulaModel as _0x59dd0a,
  DocFormulaService as _0x26b373,
  InsertDocFormulaCommand as _0x916d9f,
  RemoveDocFormulaCommand as _0x5c8371,
  ReplaceDocFormulaWithTextCommand as _0x5d3ad7,
  SetDocFormulaNumberFormatCommand as _0x201fd0,
  UpdateDocFormulaCommand as _0xa2ded7,
  isDocFormulaRange as _0x383fa4,
} from "@univerjs-pro/docs-formula";
import {
  ICommandService as _0x20b7e6,
  IResourceLoaderService as _0xaaf96d,
  IUniverInstanceService as _0x1bea37,
  Inject as _0x45aec8,
  UniverInstanceType as _0x704fd5,
} from "@univerjs/core";
import {
  FDocument as _0x324da4,
  FDocumentParagraph as _0x30fa8f,
  FDocumentTextRange as _0x57a381,
} from "@univerjs/docs/facade";
function v(_0x3391e5, _0x4b5fbd) {
  return function (_0x195c00, _0x4113a9) {
    _0x4b5fbd(_0x195c00, _0x4113a9, _0x3391e5);
  };
}
function y(_0x4afc69, _0x537c75, _0x1f6e56, _0x374150) {
  var _0x4dddbb = _0x509a,
    _0x3c0ac0 = arguments[_0x4dddbb(475)],
    _0x340177 =
      _0x3c0ac0 < 3
        ? _0x537c75
        : _0x374150 === null
          ? (_0x374150 = Object[_0x4dddbb(463)](_0x537c75, _0x1f6e56))
          : _0x374150,
    _0x144bf5;
  if (
    typeof Reflect == _0x4dddbb(457) &&
    typeof Reflect[_0x4dddbb(499)] == _0x4dddbb(456)
  )
    _0x340177 = Reflect[_0x4dddbb(499)](
      _0x4afc69,
      _0x537c75,
      _0x1f6e56,
      _0x374150,
    );
  else {
    for (
      var _0x106d4d = _0x4afc69[_0x4dddbb(475)] - 1;
      _0x106d4d >= 0;
      _0x106d4d--
    )
      (_0x144bf5 = _0x4afc69[_0x106d4d]) &&
        (_0x340177 =
          (_0x3c0ac0 < 3
            ? _0x144bf5(_0x340177)
            : _0x3c0ac0 > 3
              ? _0x144bf5(_0x537c75, _0x1f6e56, _0x340177)
              : _0x144bf5(_0x537c75, _0x1f6e56)) || _0x340177);
  }
  return (
    _0x3c0ac0 > 3 &&
      _0x340177 &&
      Object[_0x4dddbb(488)](_0x537c75, _0x1f6e56, _0x340177),
    _0x340177
  );
}
let b = class {
  constructor(
    _0x200213,
    _0x3db5d2,
    _0x4e255d,
    _0x2ec73b,
    _0x47fee2,
    _0x3256e3,
  ) {
    ((this._unitId = _0x200213),
      (this._rangeId = _0x3db5d2),
      (this._commandService = _0x4e255d),
      (this._model = _0x2ec73b),
      (this._service = _0x47fee2),
      (this._univerInstanceService = _0x3256e3));
  }
  getId() {
    return this._rangeId;
  }
  getRange() {
    let _0xfc55af = this._getCustomRange();
    return _0xfc55af
      ? {
          endOffset: _0xfc55af.endIndex + 1,
          rangeId: _0xfc55af.rangeId,
          startOffset: _0xfc55af.startIndex,
        }
      : null;
  }
  getFormula() {
    var _0x28c076 = _0xa9c9de,
      _0x27db8f;
    return (
      ((_0x27db8f = this[_0x28c076(484)][_0x28c076(511)](
        this._unitId,
        this[_0x28c076(500)],
      )) == null
        ? undefined
        : _0x27db8f.formula) ?? ""
    );
  }
  getConfig() {
    return this._model["getFormula"](this._unitId, this._rangeId) ?? null;
  }
  getResult() {
    return (
      this._service["getResult"]({
        unitId: this._unitId,
        rangeId: this._rangeId,
      }) ?? null
    );
  }
  describe() {
    let _0x1b3852 = this.getRange(),
      _0x47adcf = this.getConfig(),
      _0x1c8d43 = this.getResult();
    return !_0x1b3852 || !_0x47adcf || !_0x1c8d43
      ? null
      : {
          ..._0x1b3852,
          config: _0x47adcf,
          formula: _0x47adcf.formula,
          result: _0x1c8d43,
          type: "formula",
        };
  }
  update(_0x36cba8) {
    return this._commandService["syncExecuteCommand"](_0xa2ded7.id, {
      externalReferences: _0x36cba8.externalReferences,
      formula: _0x36cba8.formula,
      numberFormat: _0x36cba8.numberFormat,
      rangeId: this._rangeId,
      unitId: this._unitId,
    });
  }
  setNumberFormat(_0x2a7e4e) {
    return this._commandService["syncExecuteCommand"](_0x201fd0.id, {
      numberFormat: _0x2a7e4e,
      rangeId: this._rangeId,
      unitId: this._unitId,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](_0x5c8371.id, {
      rangeId: this._rangeId,
      unitId: this._unitId,
    });
  }
  replaceWithText(_0x521be9) {
    return this._commandService["syncExecuteCommand"](_0x5d3ad7.id, {
      rangeId: this._rangeId,
      text: _0x521be9,
      unitId: this._unitId,
    });
  }
  convertToText() {
    return this._commandService["syncExecuteCommand"](_0x2ef28d.id, {
      rangeId: this._rangeId,
      unitId: this._unitId,
    });
  }
  _getCustomRange() {
    var _0x824038 = _0xa9c9de,
      _0x48f6ba;
    let _0x2ef2a8 = this._univerInstanceService[_0x824038(524)](
      this[_0x824038(474)],
      _0x704fd5[_0x824038(497)],
    );
    return _0x2ef2a8 == null ||
      (_0x48f6ba = _0x2ef2a8[_0x824038(504)]().body) == null ||
      (_0x48f6ba = _0x48f6ba[_0x824038(515)]) == null
      ? undefined
      : _0x48f6ba[_0x824038(454)](
          (_0x23809a) =>
            _0x23809a[_0x824038(516)] === this._rangeId && _0x383fa4(_0x23809a),
        );
  }
};
b = y(
  [
    v(2, _0x20b7e6),
    v(3, _0x45aec8(_0x59dd0a)),
    v(4, _0x45aec8(_0x26b373)),
    v(5, _0x1bea37),
  ],
  b,
);
function x(_0x550b9e) {
  "@babel/helpers - typeof";
  return (
    (x =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x29ae1c) {
            return typeof _0x29ae1c;
          }
        : function (_0x445f77) {
            return _0x445f77 &&
              typeof Symbol == "function" &&
              _0x445f77.constructor === Symbol &&
              _0x445f77 !== Symbol.prototype
              ? "symbol"
              : typeof _0x445f77;
          }),
    x(_0x550b9e)
  );
}
function S(_0x4f9053, _0x3fdb13) {
  if (x(_0x4f9053) != "object" || !_0x4f9053) return _0x4f9053;
  var _0x556cf9 = _0x4f9053[Symbol.toPrimitive];
  if (_0x556cf9 !== undefined) {
    var _0x24fc7a = _0x556cf9.call(_0x4f9053, _0x3fdb13 || "default");
    if (x(_0x24fc7a) != "object") return _0x24fc7a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3fdb13 === "string" ? String : Number)(_0x4f9053);
}
function C(_0x46d3ca) {
  var _0x1b9076 = _0xa9c9de,
    _0x318796 = S(_0x46d3ca, "string");
  return x(_0x318796) == _0x1b9076(491) ? _0x318796 : _0x318796 + "";
}
function w(_0x42c994, _0x133e9d, _0x164bad) {
  return (
    (_0x133e9d = C(_0x133e9d)) in _0x42c994
      ? Object.defineProperty(_0x42c994, _0x133e9d, {
          value: _0x164bad,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x42c994[_0x133e9d] = _0x164bad),
    _0x42c994
  );
}
var T = class extends _0x324da4 {
  constructor(..._0x154dfc) {
    (super(..._0x154dfc),
      w(this, "_docsFormulaCommandService", undefined),
      w(this, "_docsFormulaDisplayTextService", undefined),
      w(this, "_docsFormulaModel", undefined),
      w(this, "_docsFormulaResourceLoaderService", undefined));
  }
  _initialize(_0x31000c) {
    ((this._docsFormulaCommandService = _0x31000c.get(_0x20b7e6)),
      (this._docsFormulaDisplayTextService = _0x31000c.get(_0x58760a)),
      (this._docsFormulaModel = _0x31000c.get(_0x59dd0a)),
      (this._docsFormulaResourceLoaderService = _0x31000c.get(_0xaaf96d)));
  }
  getFormulas() {
    return this._getCompleteRanges().map((_0x43fd48) =>
      this._createFormula(_0x43fd48.rangeId),
    );
  }
  getFormula(_0x257820) {
    return this._getCompleteRanges().some(
      (_0xb07f0f) => _0xb07f0f.rangeId === _0x257820,
    )
      ? this._createFormula(_0x257820)
      : null;
  }
  getFormulaAt(_0x3f5356) {
    let _0x53a891 = this._getCompleteRanges().find(
      (_0x23ac05) =>
        _0x23ac05.startIndex <= _0x3f5356 && _0x3f5356 <= _0x23ac05.endIndex,
    );
    return _0x53a891 ? this._createFormula(_0x53a891.rangeId) : null;
  }
  saveFormulaDisplayTextSnapshot() {
    let _0x3daf62 = this._docsFormulaResourceLoaderService["saveUnit"](this.id);
    if (!_0x3daf62)
      throw Error("Document " + this.id + " could not be serialized.");
    return this._docsFormulaDisplayTextService["degradeDocumentData"](
      _0x3daf62,
    );
  }
  insertFormula(_0x53db9a) {
    return this._insert({
      externalReferences: _0x53db9a.externalReferences,
      formula: _0x53db9a.formula,
      numberFormat: _0x53db9a.numberFormat,
      target: {
        type: "range",
        startOffset: _0x53db9a.startOffset,
        endOffset: _0x53db9a.endOffset,
      },
      unitId: this.getId(),
    });
  }
  _insert(_0x26ff8f) {
    let _0x190c5d = this._docsFormulaCommandService["syncExecuteCommand"](
      _0x916d9f.id,
      _0x26ff8f,
    );
    return _0x190c5d ? this._createFormula(_0x190c5d.rangeId) : null;
  }
  _getCompleteRanges() {
    var _0x3bf250 = _0xa9c9de,
      _0x25c59d;
    let _0x3a716e = this[_0x3bf250(477)][_0x3bf250(525)](this.getId());
    return (
      ((_0x25c59d = this[_0x3bf250(492)]("")[_0x3bf250(515)]) == null
        ? undefined
        : _0x25c59d[_0x3bf250(466)](
            (_0x4e06f0) =>
              _0x383fa4(_0x4e06f0) &&
              _0x3a716e[_0x4e06f0[_0x3bf250(516)]] != null,
          )) ?? []
    );
  }
  _createFormula(_0xb2173a) {
    return this._injector["createInstance"](b, this.getId(), _0xb2173a);
  }
};
_0x324da4.extend(T);
var E = class extends _0x30fa8f {
  constructor(..._0x492e6b) {
    (super(..._0x492e6b), w(this, "_docsFormulaCommandService", undefined));
  }
  _initialize(_0x1a8c61) {
    this._docsFormulaCommandService = _0x1a8c61.get(_0x20b7e6);
  }
  insertFormula(_0x318676, _0x547190, _0x34c3bf = {}) {
    return this._insert(_0x318676, _0x547190, _0x34c3bf);
  }
  appendFormula(_0x516862, _0x2e7db2 = {}) {
    return this._insert("end", _0x516862, _0x2e7db2);
  }
  _insert(_0x1000a9, _0x377b31, _0x4148b7) {
    if (this.getSegmentId()) return null;
    let _0x196326 = {
        externalReferences: _0x4148b7.externalReferences,
        formula: _0x377b31,
        numberFormat: _0x4148b7.numberFormat,
        target: {
          type: "paragraph",
          paragraphId: this.getId(),
          position: _0x1000a9,
        },
        unitId: this._document["getId"](),
      },
      _0x355f5c = this._docsFormulaCommandService["syncExecuteCommand"](
        _0x916d9f.id,
        _0x196326,
      );
    return _0x355f5c
      ? this._injector["createInstance"](
          b,
          this._document["getId"](),
          _0x355f5c.rangeId,
        )
      : null;
  }
};
_0x30fa8f.extend(E);
var D = class extends _0x57a381 {
  constructor(..._0x442bd5) {
    (super(..._0x442bd5), w(this, "_docsFormulaCommandService", undefined));
  }
  _initialize(_0x88b17e) {
    this._docsFormulaCommandService = _0x88b17e.get(_0x20b7e6);
  }
  replaceWithFormula(_0x572e4b, _0x17760b = {}) {
    let {
      endOffset: _0x255e96,
      segmentId: _0x48fe86,
      startOffset: _0x1a44f3,
    } = this.getRange();
    return _0x48fe86
      ? null
      : this._insert(_0x1a44f3, _0x255e96, _0x572e4b, _0x17760b);
  }
  _insert(_0x4c69ee, _0x1e2906, _0x466317, _0x3d138c) {
    let _0x3d1652 = {
        externalReferences: _0x3d138c.externalReferences,
        formula: _0x466317,
        numberFormat: _0x3d138c.numberFormat,
        target: { type: "range", startOffset: _0x4c69ee, endOffset: _0x1e2906 },
        unitId: this._document["getId"](),
      },
      _0x6cad2f = this._docsFormulaCommandService["syncExecuteCommand"](
        _0x916d9f.id,
        _0x3d1652,
      );
    return _0x6cad2f
      ? this._injector["createInstance"](
          b,
          this._document["getId"](),
          _0x6cad2f.rangeId,
        )
      : null;
  }
};
_0x57a381.extend(D);
export { b as FDocumentFormula };
