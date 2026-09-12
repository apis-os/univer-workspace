Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-formula"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(_0x48f7b1, _0x1191e7) {
  return function (_0x4649ad, _0x1aa88e) {
    _0x1191e7(_0x4649ad, _0x1aa88e, _0x48f7b1);
  };
}
function i(_0x26504a, _0x361f36, _0x4c36ab, _0x1b8671) {
  var _0x54739c = arguments.length,
    _0xdc74e8 =
      _0x54739c < 3
        ? _0x361f36
        : _0x1b8671 === null
          ? (_0x1b8671 = Object.getOwnPropertyDescriptor(_0x361f36, _0x4c36ab))
          : _0x1b8671,
    _0x81ff07;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xdc74e8 = Reflect.decorate(_0x26504a, _0x361f36, _0x4c36ab, _0x1b8671);
  else {
    for (var _0x11ce82 = _0x26504a.length - 1; _0x11ce82 >= 0; _0x11ce82--)
      (_0x81ff07 = _0x26504a[_0x11ce82]) &&
        (_0xdc74e8 =
          (_0x54739c < 3
            ? _0x81ff07(_0xdc74e8)
            : _0x54739c > 3
              ? _0x81ff07(_0x361f36, _0x4c36ab, _0xdc74e8)
              : _0x81ff07(_0x361f36, _0x4c36ab)) || _0xdc74e8);
  }
  return (
    _0x54739c > 3 &&
      _0xdc74e8 &&
      Object.defineProperty(_0x361f36, _0x4c36ab, _0xdc74e8),
    _0xdc74e8
  );
}
let a = class {
  constructor(
    _0x5722e0,
    _0x7e8e3f,
    _0x15d96f,
    _0x3caa08,
    _0x5088b0,
    _0x2b2384,
  ) {
    ((this._unitId = _0x5722e0),
      (this._rangeId = _0x7e8e3f),
      (this._commandService = _0x15d96f),
      (this._model = _0x3caa08),
      (this._service = _0x5088b0),
      (this._univerInstanceService = _0x2b2384));
  }
  getId() {
    return this._rangeId;
  }
  getRange() {
    let _0x39c08c = this._getCustomRange();
    return _0x39c08c
      ? {
          endOffset: _0x39c08c.endIndex + 1,
          rangeId: _0x39c08c.rangeId,
          startOffset: _0x39c08c.startIndex,
        }
      : null;
  }
  getFormula() {
    var _0xff1bdc;
    return (
      ((_0xff1bdc = this._model["getFormula"](this._unitId, this._rangeId)) ==
      null
        ? undefined
        : _0xff1bdc.formula) ?? ""
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
    let _0x35ee52 = this.getRange(),
      _0x2a3a21 = this.getConfig(),
      _0x54aa74 = this.getResult();
    return !_0x35ee52 || !_0x2a3a21 || !_0x54aa74
      ? null
      : {
          ..._0x35ee52,
          config: _0x2a3a21,
          formula: _0x2a3a21.formula,
          result: _0x54aa74,
          type: "formula",
        };
  }
  update(_0x15634c) {
    return this._commandService["syncExecuteCommand"](
      e.UpdateDocFormulaCommand["id"],
      {
        externalReferences: _0x15634c.externalReferences,
        formula: _0x15634c.formula,
        numberFormat: _0x15634c.numberFormat,
        rangeId: this._rangeId,
        unitId: this._unitId,
      },
    );
  }
  setNumberFormat(_0x27ed03) {
    return this._commandService["syncExecuteCommand"](
      e.SetDocFormulaNumberFormatCommand["id"],
      { numberFormat: _0x27ed03, rangeId: this._rangeId, unitId: this._unitId },
    );
  }
  remove() {
    return this._commandService["syncExecuteCommand"](
      e.RemoveDocFormulaCommand["id"],
      { rangeId: this._rangeId, unitId: this._unitId },
    );
  }
  replaceWithText(_0x504482) {
    return this._commandService["syncExecuteCommand"](
      e.ReplaceDocFormulaWithTextCommand["id"],
      { rangeId: this._rangeId, text: _0x504482, unitId: this._unitId },
    );
  }
  convertToText() {
    return this._commandService["syncExecuteCommand"](
      e.ConvertDocFormulaToTextCommand["id"],
      { rangeId: this._rangeId, unitId: this._unitId },
    );
  }
  _getCustomRange() {
    var _0x4919cd;
    let _0x13c359 = this._univerInstanceService["getUnit"](
      this._unitId,
      t.UniverInstanceType["UNIVER_DOC"],
    );
    return _0x13c359 == null ||
      (_0x4919cd = _0x13c359.getSnapshot().body) == null ||
      (_0x4919cd = _0x4919cd.customRanges) == null
      ? undefined
      : _0x4919cd.find(
          (_0x186615) =>
            _0x186615.rangeId === this._rangeId &&
            (0, e.isDocFormulaRange)(_0x186615),
        );
  }
};
a = i(
  [
    r(2, t.ICommandService),
    r(3, (0, t.Inject)(e.DocFormulaModel)),
    r(4, (0, t.Inject)(e.DocFormulaService)),
    r(5, t.IUniverInstanceService),
  ],
  a,
);
function o(_0x1cf31e) {
  "@babel/helpers - typeof";
  return (
    (o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0xc14041) {
            return typeof _0xc14041;
          }
        : function (_0x3a89ca) {
            return _0x3a89ca &&
              typeof Symbol == "function" &&
              _0x3a89ca.constructor === Symbol &&
              _0x3a89ca !== Symbol.prototype
              ? "symbol"
              : typeof _0x3a89ca;
          }),
    o(_0x1cf31e)
  );
}
function s(_0x5b98a0, _0x2c1bb7) {
  if (o(_0x5b98a0) != "object" || !_0x5b98a0) return _0x5b98a0;
  var _0x36dcbf = _0x5b98a0[Symbol.toPrimitive];
  if (_0x36dcbf !== undefined) {
    var _0x18edbc = _0x36dcbf.call(_0x5b98a0, _0x2c1bb7 || "default");
    if (o(_0x18edbc) != "object") return _0x18edbc;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2c1bb7 === "string" ? String : Number)(_0x5b98a0);
}
function c(_0x2c00f4) {
  var _0x5a2788 = s(_0x2c00f4, "string");
  return o(_0x5a2788) == "symbol" ? _0x5a2788 : _0x5a2788 + "";
}
function l(_0x581b28, _0x50e9bc, _0x333c35) {
  return (
    (_0x50e9bc = c(_0x50e9bc)) in _0x581b28
      ? Object.defineProperty(_0x581b28, _0x50e9bc, {
          value: _0x333c35,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x581b28[_0x50e9bc] = _0x333c35),
    _0x581b28
  );
}
var u = class extends n.FDocument {
  constructor(..._0x17e3c0) {
    (super(..._0x17e3c0),
      l(this, "_docsFormulaCommandService", undefined),
      l(this, "_docsFormulaDisplayTextService", undefined),
      l(this, "_docsFormulaModel", undefined),
      l(this, "_docsFormulaResourceLoaderService", undefined));
  }
  _initialize(_0x271142) {
    ((this._docsFormulaCommandService = _0x271142.get(t.ICommandService)),
      (this._docsFormulaDisplayTextService = _0x271142.get(
        e.DocFormulaDisplayTextService,
      )),
      (this._docsFormulaModel = _0x271142.get(e.DocFormulaModel)),
      (this._docsFormulaResourceLoaderService = _0x271142.get(
        t.IResourceLoaderService,
      )));
  }
  getFormulas() {
    return this._getCompleteRanges().map((_0x543288) =>
      this._createFormula(_0x543288.rangeId),
    );
  }
  getFormula(_0x4af46a) {
    return this._getCompleteRanges().some(
      (_0x4ce313) => _0x4ce313.rangeId === _0x4af46a,
    )
      ? this._createFormula(_0x4af46a)
      : null;
  }
  getFormulaAt(_0x5aa312) {
    let _0x58710b = this._getCompleteRanges().find(
      (_0x2a62dd) =>
        _0x2a62dd.startIndex <= _0x5aa312 && _0x5aa312 <= _0x2a62dd.endIndex,
    );
    return _0x58710b ? this._createFormula(_0x58710b.rangeId) : null;
  }
  saveFormulaDisplayTextSnapshot() {
    let _0x44347e = this._docsFormulaResourceLoaderService["saveUnit"](this.id);
    if (!_0x44347e)
      throw Error("Document " + this.id + " could not be serialized.");
    return this._docsFormulaDisplayTextService["degradeDocumentData"](
      _0x44347e,
    );
  }
  insertFormula(_0x27883a) {
    return this._insert({
      externalReferences: _0x27883a.externalReferences,
      formula: _0x27883a.formula,
      numberFormat: _0x27883a.numberFormat,
      target: {
        type: "range",
        startOffset: _0x27883a.startOffset,
        endOffset: _0x27883a.endOffset,
      },
      unitId: this.getId(),
    });
  }
  _insert(_0x4064d0) {
    let _0x16d7e3 = this._docsFormulaCommandService["syncExecuteCommand"](
      e.InsertDocFormulaCommand["id"],
      _0x4064d0,
    );
    return _0x16d7e3 ? this._createFormula(_0x16d7e3.rangeId) : null;
  }
  _getCompleteRanges() {
    var _0x4f97e5;
    let _0x51fe66 = this._docsFormulaModel["getFormulas"](this.getId());
    return (
      ((_0x4f97e5 = this.getBody("").customRanges) == null
        ? undefined
        : _0x4f97e5.filter(
            (_0x26c624) =>
              (0, e.isDocFormulaRange)(_0x26c624) &&
              _0x51fe66[_0x26c624.rangeId] != null,
          )) ?? []
    );
  }
  _createFormula(_0xd921c6) {
    return this._injector["createInstance"](a, this.getId(), _0xd921c6);
  }
};
n.FDocument["extend"](u);
var d = class extends n.FDocumentParagraph {
  constructor(..._0x1c6bb4) {
    (super(..._0x1c6bb4), l(this, "_docsFormulaCommandService", undefined));
  }
  _initialize(_0x43df63) {
    this._docsFormulaCommandService = _0x43df63.get(t.ICommandService);
  }
  insertFormula(_0x5f1fc8, _0x34389e, _0x22f3be = {}) {
    return this._insert(_0x5f1fc8, _0x34389e, _0x22f3be);
  }
  appendFormula(_0x491c70, _0x15e48d = {}) {
    return this._insert("end", _0x491c70, _0x15e48d);
  }
  _insert(_0x5c0300, _0x17b929, _0x4f5237) {
    if (this.getSegmentId()) return null;
    let _0x4ec787 = {
        externalReferences: _0x4f5237.externalReferences,
        formula: _0x17b929,
        numberFormat: _0x4f5237.numberFormat,
        target: {
          type: "paragraph",
          paragraphId: this.getId(),
          position: _0x5c0300,
        },
        unitId: this._document["getId"](),
      },
      _0x4e1192 = this._docsFormulaCommandService["syncExecuteCommand"](
        e.InsertDocFormulaCommand["id"],
        _0x4ec787,
      );
    return _0x4e1192
      ? this._injector["createInstance"](
          a,
          this._document["getId"](),
          _0x4e1192.rangeId,
        )
      : null;
  }
};
n.FDocumentParagraph["extend"](d);
var f = class extends n.FDocumentTextRange {
  constructor(..._0x5b2526) {
    (super(..._0x5b2526), l(this, "_docsFormulaCommandService", undefined));
  }
  _initialize(_0x58f336) {
    this._docsFormulaCommandService = _0x58f336.get(t.ICommandService);
  }
  replaceWithFormula(_0x132fc3, _0xb918f8 = {}) {
    let {
      endOffset: _0x298214,
      segmentId: _0x2cac7a,
      startOffset: _0x46f0ce,
    } = this.getRange();
    return _0x2cac7a
      ? null
      : this._insert(_0x46f0ce, _0x298214, _0x132fc3, _0xb918f8);
  }
  _insert(_0x49f023, _0x702ad2, _0x231eac, _0x282135) {
    let _0x1b2b05 = {
        externalReferences: _0x282135.externalReferences,
        formula: _0x231eac,
        numberFormat: _0x282135.numberFormat,
        target: { type: "range", startOffset: _0x49f023, endOffset: _0x702ad2 },
        unitId: this._document["getId"](),
      },
      _0x2c5c5d = this._docsFormulaCommandService["syncExecuteCommand"](
        e.InsertDocFormulaCommand["id"],
        _0x1b2b05,
      );
    return _0x2c5c5d
      ? this._injector["createInstance"](
          a,
          this._document["getId"](),
          _0x2c5c5d.rangeId,
        )
      : null;
  }
};
(n.FDocumentTextRange["extend"](f),
  Object.defineProperty(exports, "FDocumentFormula", {
    enumerable: true,
    get: function () {
      return a;
    },
  }));
