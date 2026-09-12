Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-latex"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(_0x259d60) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x11e741) {
            return typeof _0x11e741;
          }
        : function (_0x18f1a8) {
            return _0x18f1a8 &&
              typeof Symbol == "function" &&
              _0x18f1a8.constructor === Symbol &&
              _0x18f1a8 !== Symbol.prototype
              ? "symbol"
              : typeof _0x18f1a8;
          }),
    r(_0x259d60)
  );
}
function i(_0x4cb127, _0x57505d) {
  if (r(_0x4cb127) != "object" || !_0x4cb127) return _0x4cb127;
  var _0x3b5641 = _0x4cb127[Symbol.toPrimitive];
  if (_0x3b5641 !== undefined) {
    var _0x5cba65 = _0x3b5641.call(_0x4cb127, _0x57505d || "default");
    if (r(_0x5cba65) != "object") return _0x5cba65;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x57505d === "string" ? String : Number)(_0x4cb127);
}
function a(_0x2b70c6) {
  var _0x52ebb4 = i(_0x2b70c6, "string");
  return r(_0x52ebb4) == "symbol" ? _0x52ebb4 : _0x52ebb4 + "";
}
function o(_0x2b94d1, _0x1f38f2, _0x361693) {
  return (
    (_0x1f38f2 = a(_0x1f38f2)) in _0x2b94d1
      ? Object.defineProperty(_0x2b94d1, _0x1f38f2, {
          value: _0x361693,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2b94d1[_0x1f38f2] = _0x361693),
    _0x2b94d1
  );
}
function s(_0x1cbec2, _0x180e25) {
  return function (_0x13e446, _0x26fd80) {
    _0x180e25(_0x13e446, _0x26fd80, _0x1cbec2);
  };
}
function c(_0x4fecaa, _0x14f406, _0xf5c588, _0x1d9d88) {
  var _0x145c8a = arguments.length,
    _0x53ab2c =
      _0x145c8a < 3
        ? _0x14f406
        : _0x1d9d88 === null
          ? (_0x1d9d88 = Object.getOwnPropertyDescriptor(_0x14f406, _0xf5c588))
          : _0x1d9d88,
    _0x45d3e3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x53ab2c = Reflect.decorate(_0x4fecaa, _0x14f406, _0xf5c588, _0x1d9d88);
  else {
    for (var _0x5e4ab4 = _0x4fecaa.length - 1; _0x5e4ab4 >= 0; _0x5e4ab4--)
      (_0x45d3e3 = _0x4fecaa[_0x5e4ab4]) &&
        (_0x53ab2c =
          (_0x145c8a < 3
            ? _0x45d3e3(_0x53ab2c)
            : _0x145c8a > 3
              ? _0x45d3e3(_0x14f406, _0xf5c588, _0x53ab2c)
              : _0x45d3e3(_0x14f406, _0xf5c588)) || _0x53ab2c);
  }
  return (
    _0x145c8a > 3 &&
      _0x53ab2c &&
      Object.defineProperty(_0x14f406, _0xf5c588, _0x53ab2c),
    _0x53ab2c
  );
}
let l = class {
  constructor(_0x3339ce, _0xf74eae, _0x331804, _0x260326, _0x999b3a) {
    ((this._document = _0x3339ce),
      (this._rangeId = _0xf74eae),
      (this._segmentId = _0x331804),
      (this._commandService = _0x260326),
      (this._model = _0x999b3a),
      o(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._rangeId;
  }
  getRange() {
    let _0x4a6ff5 = this._getCustomRange();
    return _0x4a6ff5
      ? {
          endOffset: _0x4a6ff5.endIndex + 1,
          rangeId: _0x4a6ff5.rangeId,
          segmentId: this._segmentId,
          startOffset: _0x4a6ff5.startIndex,
        }
      : null;
  }
  getLatex() {
    let _0x1565e6 = this._getCustomRange(),
      _0x5894d8 = this._getBody().dataStream;
    return _0x1565e6
      ? (0, e.getFormulaLatexFromRange)(_0x1565e6, _0x5894d8)
      : "";
  }
  getConfig() {
    return {
      ...(0, e.normalizeDocsLatexFormulaConfig)(
        this._model["getFormula"](this._unitId, this._rangeId),
      ),
      latex: this.getLatex(),
    };
  }
  describe() {
    let _0x4d05ad = this.getRange();
    if (!_0x4d05ad) return null;
    let _0x5a28c5 = this._getContainingParagraph(),
      _0x3f9447 = this._getBody(),
      _0x19d7af = _0x5a28c5
        ? (0, t.getParagraphContentStartOffset)(_0x3f9447, _0x5a28c5)
        : _0x4d05ad.startOffset,
      _0x187a03 =
        (_0x5a28c5 == null ? undefined : _0x5a28c5.startIndex) ??
        _0x4d05ad.endOffset;
    return {
      ..._0x4d05ad,
      config: this.getConfig(),
      context: {
        after: _0x3f9447.dataStream["slice"](_0x4d05ad.endOffset, _0x187a03),
        before: _0x3f9447.dataStream["slice"](_0x19d7af, _0x4d05ad.startOffset),
      },
      latex: this.getLatex(),
      paragraphId:
        (_0x5a28c5 == null ? undefined : _0x5a28c5.paragraphId) ?? null,
      type: "latex",
    };
  }
  update(_0x3ee828) {
    return this._commandService["syncExecuteCommand"](
      e.UpdateDocsLatexFormulaCommand["id"],
      {
        latex: _0x3ee828.latex,
        properties: _0x3ee828.properties,
        rangeId: this._rangeId,
        segmentId: this._segmentId,
        unitId: this._unitId,
      },
    );
  }
  remove() {
    return this._commandService["syncExecuteCommand"](
      e.RemoveDocsLatexFormulaCommand["id"],
      {
        rangeId: this._rangeId,
        segmentId: this._segmentId,
        unitId: this._unitId,
      },
    );
  }
  replaceWithText(_0x34bc91) {
    return this._commandService["syncExecuteCommand"](
      e.ReplaceDocsLatexFormulaWithTextCommand["id"],
      {
        rangeId: this._rangeId,
        segmentId: this._segmentId,
        text: _0x34bc91,
        unitId: this._unitId,
      },
    );
  }
  _getBody() {
    return this._document["getBody"](this._segmentId);
  }
  _getCustomRange() {
    var _0x391162;
    return (_0x391162 = this._getBody().customRanges) == null
      ? undefined
      : _0x391162.find(
          (_0x5ef011) =>
            _0x5ef011.rangeId === this._rangeId &&
            (0, e.isDocsLatexFormulaRange)(_0x5ef011),
        );
  }
  _getContainingParagraph() {
    var _0x3271e2;
    let _0x3ebcfb = this._getCustomRange();
    if (!_0x3ebcfb) return;
    let _0x43992a = this._getBody();
    return (_0x3271e2 = _0x43992a.paragraphs) == null
      ? undefined
      : _0x3271e2.find(
          (_0x17ac94) =>
            (0, t.getParagraphContentStartOffset)(_0x43992a, _0x17ac94) <=
              _0x3ebcfb.startIndex && _0x3ebcfb.endIndex < _0x17ac94.startIndex,
        );
  }
};
l = c([s(3, t.ICommandService), s(4, (0, t.Inject)(e.DocsLatexModel))], l);
var u = class extends n.FDocument {
  constructor(..._0x12d02f) {
    (super(..._0x12d02f), o(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0xe92989) {
    this._docsLatexCommandService = _0xe92989.get(t.ICommandService);
  }
  getLatexFormulas(_0x20eedc = "") {
    return this._getLatexRanges(_0x20eedc).map((_0x4b8014) =>
      this._createFDocumentLatex(_0x4b8014.rangeId, _0x20eedc),
    );
  }
  getLatexFormula(_0x21b14b, _0x1d4d8d = "") {
    return this._getLatexRanges(_0x1d4d8d).some(
      (_0x587c58) => _0x587c58.rangeId === _0x21b14b,
    )
      ? this._createFDocumentLatex(_0x21b14b, _0x1d4d8d)
      : null;
  }
  getLatexFormulaAt(_0x1d7e7b, _0x592838 = "") {
    let _0x360dfb = this._getLatexRanges(_0x592838).find(
      (_0x16a38f) =>
        _0x16a38f.startIndex <= _0x1d7e7b && _0x1d7e7b <= _0x16a38f.endIndex,
    );
    return _0x360dfb
      ? this._createFDocumentLatex(_0x360dfb.rangeId, _0x592838)
      : null;
  }
  findLatexFormulaByText(_0xe050db, _0xc5ff12 = "") {
    let _0x326de5 = this._getLatexRanges(_0xc5ff12).find((_0x33782f) =>
      this._getLatexFromRange(_0x33782f, _0xc5ff12).includes(_0xe050db),
    );
    return _0x326de5
      ? this._createFDocumentLatex(_0x326de5.rangeId, _0xc5ff12)
      : null;
  }
  findLatexFormulas(_0x46a9b3, _0x5a9ec8 = "") {
    let _0x16e90b =
      typeof _0x46a9b3 == "string" ? { latex: _0x46a9b3 } : _0x46a9b3;
    return this._getLatexRanges(_0x5a9ec8)
      .filter(
        (_0x19b412) =>
          !(
            (_0x16e90b.rangeId && _0x19b412.rangeId !== _0x16e90b.rangeId) ||
            (_0x16e90b.latex &&
              !this._getLatexFromRange(_0x19b412, _0x5a9ec8).includes(
                _0x16e90b.latex,
              ))
          ),
      )
      .map((_0x493b9f) =>
        this._createFDocumentLatex(_0x493b9f.rangeId, _0x5a9ec8),
      );
  }
  insertLatexAtOffset(_0x1eeed7, _0x2c2e57, _0x6dcd45 = {}) {
    return this._insertLatexFormula({
      endOffset: _0x1eeed7,
      latex: _0x2c2e57,
      properties: _0x6dcd45.properties,
      segmentId: _0x6dcd45.segmentId,
      startOffset: _0x1eeed7,
      unitId: this.getId(),
    });
  }
  insertLatexAtSelection(_0x3f7552, _0x182eb2 = {}) {
    return this._insertLatexFormula({
      latex: _0x3f7552,
      properties: _0x182eb2.properties,
      unitId: this.getId(),
    });
  }
  _insertLatexFormula(_0x25b54b) {
    let _0x641eca = this._docsLatexCommandService["syncExecuteCommand"](
      e.InsertDocsLatexFormulaCommand["id"],
      _0x25b54b,
    );
    return _0x641eca
      ? this._createFDocumentLatex(_0x641eca.rangeId, _0x641eca.segmentId)
      : null;
  }
  _getLatexRanges(_0x462085) {
    var _0x483e8c;
    return (
      ((_0x483e8c = this.getBody(_0x462085).customRanges) == null
        ? undefined
        : _0x483e8c.filter(e.isDocsLatexFormulaRange)) ?? []
    );
  }
  _createFDocumentLatex(_0x1c5b30, _0x5a29dc) {
    return this._injector["createInstance"](l, this, _0x1c5b30, _0x5a29dc);
  }
  _getLatexFromRange(_0x5f3409, _0x1d3bd4) {
    return (0, e.getFormulaLatexFromRange)(
      _0x5f3409,
      this.getBody(_0x1d3bd4).dataStream,
    );
  }
};
n.FDocument["extend"](u);
var d = class extends n.FDocumentParagraph {
  constructor(..._0x3ec1c8) {
    (super(..._0x3ec1c8), o(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0x2a8bd1) {
    this._docsLatexCommandService = _0x2a8bd1.get(t.ICommandService);
  }
  appendLatex(_0x2ed1a3, _0x3a49e4 = {}) {
    let { endOffset: _0x22b638 } = this.getInfo();
    return this._insertLatex(_0x22b638, _0x2ed1a3, _0x3a49e4);
  }
  prependLatex(_0x76a37b, _0x26d6e1 = {}) {
    let { startOffset: _0x5bc3b5 } = this.getInfo();
    return this._insertLatex(_0x5bc3b5, _0x76a37b, _0x26d6e1);
  }
  _insertLatex(_0x45aac3, _0x1d9ae4, _0x74ec7b) {
    let _0x1cc80d = this.getSegmentId(),
      _0x6405ea = {
        endOffset: _0x45aac3,
        latex: _0x1d9ae4,
        properties: _0x74ec7b.properties,
        segmentId: _0x1cc80d,
        startOffset: _0x45aac3,
        unitId: this._document["getId"](),
      },
      _0x28e72b = this._docsLatexCommandService["syncExecuteCommand"](
        e.InsertDocsLatexFormulaCommand["id"],
        _0x6405ea,
      );
    return _0x28e72b
      ? this._injector["createInstance"](
          l,
          this._document,
          _0x28e72b.rangeId,
          _0x28e72b.segmentId,
        )
      : null;
  }
};
n.FDocumentParagraph["extend"](d);
var f = class extends n.FDocumentTextRange {
  constructor(..._0x1e95de) {
    (super(..._0x1e95de), o(this, "_docsLatexCommandService", undefined));
  }
  _initialize(_0x32d49e) {
    this._docsLatexCommandService = _0x32d49e.get(t.ICommandService);
  }
  replaceWithLatex(_0x5656e7, _0x3d4f2d = {}) {
    let {
      endOffset: _0x48feb9,
      segmentId: _0x336ff9 = "",
      startOffset: _0xce939d,
    } = this.getRange();
    return this._insertLatex(
      _0xce939d,
      _0x48feb9,
      _0x336ff9,
      _0x5656e7,
      _0x3d4f2d,
    );
  }
  insertLatexBefore(_0x2d211c, _0x1d96d1 = {}) {
    let { segmentId: _0x324248 = "", startOffset: _0xfc017a } = this.getRange();
    return this._insertLatex(
      _0xfc017a,
      _0xfc017a,
      _0x324248,
      _0x2d211c,
      _0x1d96d1,
    );
  }
  insertLatexAfter(_0x439fa2, _0x469b17 = {}) {
    let { endOffset: _0x252893, segmentId: _0x340c52 = "" } = this.getRange();
    return this._insertLatex(
      _0x252893,
      _0x252893,
      _0x340c52,
      _0x439fa2,
      _0x469b17,
    );
  }
  _insertLatex(_0x2be45a, _0x10d357, _0x2a28e5, _0x6abdf, _0x494aa4) {
    let _0x5db162 = {
        endOffset: _0x10d357,
        latex: _0x6abdf,
        properties: _0x494aa4.properties,
        segmentId: _0x2a28e5,
        startOffset: _0x2be45a,
        unitId: this._document["getId"](),
      },
      _0x4766ce = this._docsLatexCommandService["syncExecuteCommand"](
        e.InsertDocsLatexFormulaCommand["id"],
        _0x5db162,
      );
    return _0x4766ce
      ? this._injector["createInstance"](
          l,
          this._document,
          _0x4766ce.rangeId,
          _0x4766ce.segmentId,
        )
      : null;
  }
};
n.FDocumentTextRange["extend"](f);
var p = class extends t.RichTextBuilder {
  latex(_0x926fa8, _0x513066 = {}) {
    var _0x9142fe;
    let _0x434614 = _0x926fa8.trim();
    if (!_0x434614) return this;
    let _0x4328a6 =
      ((_0x9142fe = _0x513066.rangeId) == null
        ? undefined
        : _0x9142fe.trim()) || (0, t.generateRandomId)();
    return this.insertRichText(
      t.RichTextValue["create"]({
        id: "d",
        documentStyle: {},
        body: {
          dataStream: _0x434614,
          customRanges: [
            {
              startIndex: 0,
              endIndex: _0x434614.length - 1,
              rangeId: _0x4328a6,
              rangeType: t.CustomRangeType["CUSTOM"],
              wholeEntity: true,
              properties: { kind: e.DOCS_LATEX_CUSTOM_RANGE_KIND },
            },
          ],
        },
      }),
    );
  }
};
(t.RichTextBuilder["extend"](p),
  Object.defineProperty(exports, "FDocumentLatex", {
    enumerable: true,
    get: function () {
      return l;
    },
  }));
