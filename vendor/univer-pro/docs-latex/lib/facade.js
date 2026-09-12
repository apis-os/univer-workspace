import {
  DOCS_LATEX_CUSTOM_RANGE_KIND as _0x1dc48f,
  DocsLatexModel as _0x47d056,
  InsertDocsLatexFormulaCommand as _0xa2cdb0,
  RemoveDocsLatexFormulaCommand as _0x5a1694,
  ReplaceDocsLatexFormulaWithTextCommand as _0x1be4f5,
  UpdateDocsLatexFormulaCommand as _0x4271cd,
  getFormulaLatexFromRange as _0x484191,
  isDocsLatexFormulaRange as _0x41d863,
  normalizeDocsLatexFormulaConfig as _0x1d67fc,
} from "@univerjs-pro/docs-latex";
import {
  CustomRangeType as _0x50ea88,
  ICommandService as _0x1ebe2a,
  Inject as _0x3c32f4,
  RichTextBuilder as _0x2d77a4,
  RichTextValue as _0x34239e,
  generateRandomId as _0x539806,
  getParagraphContentStartOffset as _0x4e12f7,
} from "@univerjs/core";
import {
  FDocument as _0x273737,
  FDocumentParagraph as _0x17ed75,
  FDocumentTextRange as _0x354585,
} from "@univerjs/docs/facade";
function y(_0x5bf074) {
  "@babel/helpers - typeof";
  return (
    (y =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5c41fb) {
            return typeof _0x5c41fb;
          }
        : function (_0x2f4ad4) {
            return _0x2f4ad4 &&
              typeof Symbol == "function" &&
              _0x2f4ad4.constructor === Symbol &&
              _0x2f4ad4 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2f4ad4;
          }),
    y(_0x5bf074)
  );
}
function b(_0x50803e, _0x4d72a8) {
  if (y(_0x50803e) != "object" || !_0x50803e) return _0x50803e;
  var _0x5804ce = _0x50803e[Symbol.toPrimitive];
  if (_0x5804ce !== undefined) {
    var _0x8b6b11 = _0x5804ce.call(_0x50803e, _0x4d72a8 || "default");
    if (y(_0x8b6b11) != "object") return _0x8b6b11;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x4d72a8 === "string" ? String : Number)(_0x50803e);
}
function x(_0x39bba1) {
  var _0x4bd5bd = b(_0x39bba1, "string");
  return y(_0x4bd5bd) == "symbol" ? _0x4bd5bd : _0x4bd5bd + "";
}
function S(_0x1ca5b2, _0x4054d0, _0x568380) {
  return (
    (_0x4054d0 = x(_0x4054d0)) in _0x1ca5b2
      ? Object.defineProperty(_0x1ca5b2, _0x4054d0, {
          value: _0x568380,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1ca5b2[_0x4054d0] = _0x568380),
    _0x1ca5b2
  );
}
function C(_0x52cc68, _0x150e34) {
  return function (_0x19b15b, _0x13c9bd) {
    _0x150e34(_0x19b15b, _0x13c9bd, _0x52cc68);
  };
}
function w(_0x27200b, _0x2f8be1, _0x4540ac, _0x1fedb7) {
  var _0x169a59 = arguments.length,
    _0x4233d5 =
      _0x169a59 < 3
        ? _0x2f8be1
        : _0x1fedb7 === null
          ? (_0x1fedb7 = Object.getOwnPropertyDescriptor(_0x2f8be1, _0x4540ac))
          : _0x1fedb7,
    _0x5f0849;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4233d5 = Reflect.decorate(_0x27200b, _0x2f8be1, _0x4540ac, _0x1fedb7);
  else {
    for (var _0x22d9fd = _0x27200b.length - 1; _0x22d9fd >= 0; _0x22d9fd--)
      (_0x5f0849 = _0x27200b[_0x22d9fd]) &&
        (_0x4233d5 =
          (_0x169a59 < 3
            ? _0x5f0849(_0x4233d5)
            : _0x169a59 > 3
              ? _0x5f0849(_0x2f8be1, _0x4540ac, _0x4233d5)
              : _0x5f0849(_0x2f8be1, _0x4540ac)) || _0x4233d5);
  }
  return (
    _0x169a59 > 3 &&
      _0x4233d5 &&
      Object.defineProperty(_0x2f8be1, _0x4540ac, _0x4233d5),
    _0x4233d5
  );
}
let T = class {
  constructor(_0x192dba, _0x11ee32, _0x2a9376, _0x51ef26, _0x4859dc) {
    ((this._document = _0x192dba),
      (this._rangeId = _0x11ee32),
      (this._segmentId = _0x2a9376),
      (this._commandService = _0x51ef26),
      (this._model = _0x4859dc),
      S(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._rangeId;
  }
  getRange() {
    let _0x11d8f8 = this._getCustomRange();
    return _0x11d8f8
      ? {
          endOffset: _0x11d8f8.endIndex + 1,
          rangeId: _0x11d8f8.rangeId,
          segmentId: this._segmentId,
          startOffset: _0x11d8f8.startIndex,
        }
      : null;
  }
  getLatex() {
    let _0x11bb6f = this._getCustomRange(),
      _0x31d12c = this._getBody().dataStream;
    return _0x11bb6f ? _0x484191(_0x11bb6f, _0x31d12c) : "";
  }
  getConfig() {
    return {
      ..._0x1d67fc(this._model["getFormula"](this._unitId, this._rangeId)),
      latex: this.getLatex(),
    };
  }
  describe() {
    let _0x6b4c22 = this.getRange();
    if (!_0x6b4c22) return null;
    let _0x5dff92 = this._getContainingParagraph(),
      _0x325fb6 = this._getBody(),
      _0x23d832 = _0x5dff92
        ? _0x4e12f7(_0x325fb6, _0x5dff92)
        : _0x6b4c22.startOffset,
      _0x2e905a =
        (_0x5dff92 == null ? undefined : _0x5dff92.startIndex) ??
        _0x6b4c22.endOffset;
    return {
      ..._0x6b4c22,
      config: this.getConfig(),
      context: {
        after: _0x325fb6.dataStream["slice"](_0x6b4c22.endOffset, _0x2e905a),
        before: _0x325fb6.dataStream["slice"](_0x23d832, _0x6b4c22.startOffset),
      },
      latex: this.getLatex(),
      paragraphId:
        (_0x5dff92 == null ? undefined : _0x5dff92.paragraphId) ?? null,
      type: "latex",
    };
  }
  update(_0x4216bf) {
    return this._commandService["syncExecuteCommand"](_0x4271cd.id, {
      latex: _0x4216bf.latex,
      properties: _0x4216bf.properties,
      rangeId: this._rangeId,
      segmentId: this._segmentId,
      unitId: this._unitId,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](_0x5a1694.id, {
      rangeId: this._rangeId,
      segmentId: this._segmentId,
      unitId: this._unitId,
    });
  }
  replaceWithText(_0x28ca9c) {
    return this._commandService["syncExecuteCommand"](_0x1be4f5.id, {
      rangeId: this._rangeId,
      segmentId: this._segmentId,
      text: _0x28ca9c,
      unitId: this._unitId,
    });
  }
  _getBody() {
    return this._document["getBody"](this._segmentId);
  }
  _getCustomRange() {
    var _0x19c6c7;
    return (_0x19c6c7 = this._getBody().customRanges) == null
      ? undefined
      : _0x19c6c7.find(
          (_0x26dc36) =>
            _0x26dc36.rangeId === this._rangeId && _0x41d863(_0x26dc36),
        );
  }
  _getContainingParagraph() {
    var _0x2c7cce;
    let _0x59440c = this._getCustomRange();
    if (!_0x59440c) return;
    let _0x299ac9 = this._getBody();
    return (_0x2c7cce = _0x299ac9.paragraphs) == null
      ? undefined
      : _0x2c7cce.find(
          (_0x3162bc) =>
            _0x4e12f7(_0x299ac9, _0x3162bc) <= _0x59440c.startIndex &&
            _0x59440c.endIndex < _0x3162bc.startIndex,
        );
  }
};
T = w([C(3, _0x1ebe2a), C(4, _0x3c32f4(_0x47d056))], T);
var E = class extends _0x273737 {
  constructor(..._0xcaffc7) {
    (super(..._0xcaffc7), S(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0x50cf29) {
    this._docsLatexCommandService = _0x50cf29.get(_0x1ebe2a);
  }
  getLatexFormulas(_0x439d4b = "") {
    return this._getLatexRanges(_0x439d4b).map((_0x5dd395) =>
      this._createFDocumentLatex(_0x5dd395.rangeId, _0x439d4b),
    );
  }
  getLatexFormula(_0x347bc6, _0x37a1b7 = "") {
    return this._getLatexRanges(_0x37a1b7).some(
      (_0x297231) => _0x297231.rangeId === _0x347bc6,
    )
      ? this._createFDocumentLatex(_0x347bc6, _0x37a1b7)
      : null;
  }
  getLatexFormulaAt(_0x34c133, _0x252d47 = "") {
    let _0x4dc05e = this._getLatexRanges(_0x252d47).find(
      (_0x37f331) =>
        _0x37f331.startIndex <= _0x34c133 && _0x34c133 <= _0x37f331.endIndex,
    );
    return _0x4dc05e
      ? this._createFDocumentLatex(_0x4dc05e.rangeId, _0x252d47)
      : null;
  }
  findLatexFormulaByText(_0x2d70ad, _0x1df6d4 = "") {
    let _0xef1a27 = this._getLatexRanges(_0x1df6d4).find((_0x3e516a) =>
      this._getLatexFromRange(_0x3e516a, _0x1df6d4).includes(_0x2d70ad),
    );
    return _0xef1a27
      ? this._createFDocumentLatex(_0xef1a27.rangeId, _0x1df6d4)
      : null;
  }
  findLatexFormulas(_0x4814e7, _0x46a4fc = "") {
    let _0x44fba1 =
      typeof _0x4814e7 == "string" ? { latex: _0x4814e7 } : _0x4814e7;
    return this._getLatexRanges(_0x46a4fc)
      .filter(
        (_0x4cb3c1) =>
          !(
            (_0x44fba1.rangeId && _0x4cb3c1.rangeId !== _0x44fba1.rangeId) ||
            (_0x44fba1.latex &&
              !this._getLatexFromRange(_0x4cb3c1, _0x46a4fc).includes(
                _0x44fba1.latex,
              ))
          ),
      )
      .map((_0x53f686) =>
        this._createFDocumentLatex(_0x53f686.rangeId, _0x46a4fc),
      );
  }
  insertLatexAtOffset(_0x4a84ed, _0x12ffb8, _0xb6ecf = {}) {
    return this._insertLatexFormula({
      endOffset: _0x4a84ed,
      latex: _0x12ffb8,
      properties: _0xb6ecf.properties,
      segmentId: _0xb6ecf.segmentId,
      startOffset: _0x4a84ed,
      unitId: this.getId(),
    });
  }
  insertLatexAtSelection(_0x31f6b4, _0x3c659d = {}) {
    return this._insertLatexFormula({
      latex: _0x31f6b4,
      properties: _0x3c659d.properties,
      unitId: this.getId(),
    });
  }
  _insertLatexFormula(_0x4d4524) {
    let _0x2de0ae = this._docsLatexCommandService["syncExecuteCommand"](
      _0xa2cdb0.id,
      _0x4d4524,
    );
    return _0x2de0ae
      ? this._createFDocumentLatex(_0x2de0ae.rangeId, _0x2de0ae.segmentId)
      : null;
  }
  _getLatexRanges(_0x202817) {
    var _0xb9db3;
    return (
      ((_0xb9db3 = this.getBody(_0x202817).customRanges) == null
        ? undefined
        : _0xb9db3.filter(_0x41d863)) ?? []
    );
  }
  _createFDocumentLatex(_0x64f6ac, _0x596429) {
    return this._injector["createInstance"](T, this, _0x64f6ac, _0x596429);
  }
  _getLatexFromRange(_0x375e3f, _0x1af3f0) {
    return _0x484191(_0x375e3f, this.getBody(_0x1af3f0).dataStream);
  }
};
_0x273737.extend(E);
var D = class extends _0x17ed75 {
  constructor(..._0x22f58c) {
    (super(..._0x22f58c), S(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0x5b7bd1) {
    this._docsLatexCommandService = _0x5b7bd1.get(_0x1ebe2a);
  }
  appendLatex(_0x31a3f0, _0x1ebcb8 = {}) {
    let { endOffset: _0x166941 } = this.getInfo();
    return this._insertLatex(_0x166941, _0x31a3f0, _0x1ebcb8);
  }
  prependLatex(_0x860964, _0xfac8ff = {}) {
    let { startOffset: _0x18ca8b } = this.getInfo();
    return this._insertLatex(_0x18ca8b, _0x860964, _0xfac8ff);
  }
  _insertLatex(_0x3441ac, _0x3596b4, _0x32fe5e) {
    let _0x237003 = this.getSegmentId(),
      _0x264a43 = {
        endOffset: _0x3441ac,
        latex: _0x3596b4,
        properties: _0x32fe5e.properties,
        segmentId: _0x237003,
        startOffset: _0x3441ac,
        unitId: this._document["getId"](),
      },
      _0x5c86d7 = this._docsLatexCommandService["syncExecuteCommand"](
        _0xa2cdb0.id,
        _0x264a43,
      );
    return _0x5c86d7
      ? this._injector["createInstance"](
          T,
          this._document,
          _0x5c86d7.rangeId,
          _0x5c86d7.segmentId,
        )
      : null;
  }
};
_0x17ed75.extend(D);
var O = class extends _0x354585 {
  constructor(..._0x811c6f) {
    (super(..._0x811c6f), S(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0x43d503) {
    this._docsLatexCommandService = _0x43d503.get(_0x1ebe2a);
  }
  replaceWithLatex(_0x5be650, _0x359d71 = {}) {
    let {
      endOffset: _0x2b314f,
      segmentId: _0x20dc15 = "",
      startOffset: _0x3e4e6e,
    } = this.getRange();
    return this._insertLatex(
      _0x3e4e6e,
      _0x2b314f,
      _0x20dc15,
      _0x5be650,
      _0x359d71,
    );
  }
  insertLatexBefore(_0x1ed037, _0x22a375 = {}) {
    let { segmentId: _0x31e5b3 = "", startOffset: _0x1c7698 } = this.getRange();
    return this._insertLatex(
      _0x1c7698,
      _0x1c7698,
      _0x31e5b3,
      _0x1ed037,
      _0x22a375,
    );
  }
  insertLatexAfter(_0x1bbbb6, _0x37fddf = {}) {
    let { endOffset: _0x28961f, segmentId: _0x1a6f70 = "" } = this.getRange();
    return this._insertLatex(
      _0x28961f,
      _0x28961f,
      _0x1a6f70,
      _0x1bbbb6,
      _0x37fddf,
    );
  }
  _insertLatex(_0x3f2755, _0x197e1a, _0x696df9, _0x255978, _0xc3e059) {
    let _0xb21b63 = {
        endOffset: _0x197e1a,
        latex: _0x255978,
        properties: _0xc3e059.properties,
        segmentId: _0x696df9,
        startOffset: _0x3f2755,
        unitId: this._document["getId"](),
      },
      _0x35dddf = this._docsLatexCommandService["syncExecuteCommand"](
        _0xa2cdb0.id,
        _0xb21b63,
      );
    return _0x35dddf
      ? this._injector["createInstance"](
          T,
          this._document,
          _0x35dddf.rangeId,
          _0x35dddf.segmentId,
        )
      : null;
  }
};
_0x354585.extend(O);
var k = class extends _0x2d77a4 {
  latex(_0x15a193, _0xb26dd2 = {}) {
    var _0x1d57d0;
    let _0x243d75 = _0x15a193.trim();
    if (!_0x243d75) return this;
    let _0x45774a =
      ((_0x1d57d0 = _0xb26dd2.rangeId) == null
        ? undefined
        : _0x1d57d0.trim()) || _0x539806();
    return this.insertRichText(
      _0x34239e.create({
        id: "d",
        documentStyle: {},
        body: {
          dataStream: _0x243d75,
          customRanges: [
            {
              startIndex: 0,
              endIndex: _0x243d75.length - 1,
              rangeId: _0x45774a,
              rangeType: _0x50ea88.CUSTOM,
              wholeEntity: true,
              properties: { kind: _0x1dc48f },
            },
          ],
        },
      }),
    );
  }
};
_0x2d77a4.extend(k);
export { T as FDocumentLatex };
