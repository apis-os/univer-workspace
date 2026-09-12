Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-quote"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(_0x18a4e1) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x778596) {
            return typeof _0x778596;
          }
        : function (_0x5dcf2d) {
            return _0x5dcf2d &&
              typeof Symbol == "function" &&
              _0x5dcf2d.constructor === Symbol &&
              _0x5dcf2d !== Symbol.prototype
              ? "symbol"
              : typeof _0x5dcf2d;
          }),
    r(_0x18a4e1)
  );
}
function i(_0x52d9b0, _0x53360c) {
  if (r(_0x52d9b0) != "object" || !_0x52d9b0) return _0x52d9b0;
  var _0x422592 = _0x52d9b0[Symbol.toPrimitive];
  if (_0x422592 !== undefined) {
    var _0x68be77 = _0x422592.call(_0x52d9b0, _0x53360c || "default");
    if (r(_0x68be77) != "object") return _0x68be77;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x53360c === "string" ? String : Number)(_0x52d9b0);
}
function a(_0x81c63e) {
  var _0x42299 = _0x5943b6,
    _0x43d447 = i(_0x81c63e, _0x42299(271));
  return r(_0x43d447) == _0x42299(318) ? _0x43d447 : _0x43d447 + "";
}
function o(_0x179fa8, _0x224e24, _0x4161a1) {
  return (
    (_0x224e24 = a(_0x224e24)) in _0x179fa8
      ? Object.defineProperty(_0x179fa8, _0x224e24, {
          value: _0x4161a1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x179fa8[_0x224e24] = _0x4161a1),
    _0x179fa8
  );
}
function s(_0x4e0cf8, _0x273ae8) {
  return function (_0x1e4cd7, _0x2441bd) {
    _0x273ae8(_0x1e4cd7, _0x2441bd, _0x4e0cf8);
  };
}
function c(_0x5b0b4c, _0x5bab5b, _0x1b05ae, _0x3f038c) {
  var _0x55f529 = _0x5943b6,
    _0x370aea = arguments.length,
    _0x335d62 =
      _0x370aea < 3
        ? _0x5bab5b
        : _0x3f038c === null
          ? (_0x3f038c = Object[_0x55f529(298)](_0x5bab5b, _0x1b05ae))
          : _0x3f038c,
    _0xae164;
  if (
    typeof Reflect == "object" &&
    typeof Reflect[_0x55f529(276)] == "function"
  )
    _0x335d62 = Reflect.decorate(_0x5b0b4c, _0x5bab5b, _0x1b05ae, _0x3f038c);
  else {
    for (
      var _0x4163a8 = _0x5b0b4c[_0x55f529(322)] - 1;
      _0x4163a8 >= 0;
      _0x4163a8--
    )
      (_0xae164 = _0x5b0b4c[_0x4163a8]) &&
        (_0x335d62 =
          (_0x370aea < 3
            ? _0xae164(_0x335d62)
            : _0x370aea > 3
              ? _0xae164(_0x5bab5b, _0x1b05ae, _0x335d62)
              : _0xae164(_0x5bab5b, _0x1b05ae)) || _0x335d62);
  }
  return (
    _0x370aea > 3 &&
      _0x335d62 &&
      Object[_0x55f529(294)](_0x5bab5b, _0x1b05ae, _0x335d62),
    _0x335d62
  );
}
let l = class {
  constructor(_0x51380f, _0x400371, _0x222042, _0x5d546b) {
    ((this._document = _0x51380f),
      (this._blockId = _0x400371),
      (this._commandService = _0x222042),
      (this._themeService = _0x5d546b),
      o(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0x35ba04 = this._getBlockRange();
    return _0x35ba04
      ? {
          blockId: _0x35ba04.blockId,
          endIndex: _0x35ba04.endIndex,
          startIndex: _0x35ba04.startIndex,
        }
      : null;
  }
  getText() {
    return this._getText(this._getBlockRange());
  }
  getStyle() {
    return this._getStyle(this._getBlockRange());
  }
  describe() {
    let _0x5997cf = this._getBlockRange();
    return _0x5997cf
      ? {
          blockId: _0x5997cf.blockId,
          endIndex: _0x5997cf.endIndex,
          startIndex: _0x5997cf.startIndex,
          style: this._getStyle(_0x5997cf),
          text: this._getText(_0x5997cf),
          type: t.DocumentBlockRangeType["QUOTE"],
        }
      : null;
  }
  setStyle(_0x47468c) {
    return this._updateStyle(_0x47468c);
  }
  setLineColor(_0x31f622) {
    return this._updateStyle({ lineColor: _0x31f622 });
  }
  setTextColor(_0x2220d5) {
    return this._updateStyle({ textColor: _0x2220d5 });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](
      e.DocsQuoteUnwrapCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  remove() {
    return this._commandService["syncExecuteCommand"](
      e.DocsQuoteRemoveCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  _getBlockRange() {
    var _0x514078 = _0x5943b6,
      _0x416ba4;
    return (
      (
        ((_0x416ba4 = this[_0x514078(281)]()[_0x514078(260)]) == null
          ? undefined
          : _0x416ba4[_0x514078(330)]) ?? []
      ).find(
        (_0x370975) =>
          _0x370975[_0x514078(314)] === this._blockId &&
          _0x370975.blockType === t[_0x514078(295)][_0x514078(321)],
      ) ?? null
    );
  }
  _updateStyle(_0x34d5e9) {
    return this._commandService["syncExecuteCommand"](
      e.DocsQuoteUpdateStyleCommand["id"],
      { ..._0x34d5e9, blockId: this._blockId, unitId: this._unitId },
    );
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(_0x405812) {
    var _0x304767 = _0x5943b6,
      _0x4e069a,
      _0xf1216;
    if (!_0x405812)
      return {
        lineColor: this[_0x304767(268)][_0x304767(300)](e[_0x304767(282)]),
        textColor: t[_0x304767(284)].cl[_0x304767(253)],
      };
    let _0x594f1a = this[_0x304767(281)](),
      _0x2b20c7 =
        (_0x4e069a = _0x594f1a[_0x304767(260)]) == null ||
        (_0x4e069a = _0x4e069a[_0x304767(288)]) == null
          ? undefined
          : _0x4e069a.find(
              (_0x5983dd) =>
                _0x5983dd[_0x304767(349)] > _0x405812.startIndex &&
                _0x5983dd[_0x304767(349)] < _0x405812[_0x304767(315)],
            );
    return {
      lineColor:
        (_0x2b20c7 == null ||
        (_0xf1216 = _0x2b20c7.paragraphStyle) == null ||
        (_0xf1216 = _0xf1216[_0x304767(296)]) == null
          ? undefined
          : _0xf1216[_0x304767(331)].rgb) ??
        this._themeService[_0x304767(300)](e.DOCS_QUOTE_LINE_COLOR_TOKEN),
      textColor: u(_0x594f1a, _0x405812),
    };
  }
  _getText(_0x460cb8) {
    var _0x483a6c = _0x5943b6,
      _0x49ff02;
    let _0xa09485 =
      (_0x49ff02 = this._getDocumentData().body) == null
        ? undefined
        : _0x49ff02[_0x483a6c(320)];
    return !_0x460cb8 || !_0xa09485
      ? ""
      : d(
          _0xa09485[_0x483a6c(336)](
            _0x460cb8.startIndex + 1,
            _0x460cb8[_0x483a6c(315)],
          ),
        );
  }
};
l = c([s(2, t.ICommandService), s(3, (0, t.Inject)(t.ThemeService))], l);
function u(_0x2d12c8, _0x32435f) {
  var _0x2684cf = _0x5943b6,
    _0x2065c2;
  return (
    ((_0x2065c2 = _0x2d12c8[_0x2684cf(260)]) == null ||
    (_0x2065c2 = _0x2065c2[_0x2684cf(261)]) == null ||
    (_0x2065c2 = _0x2065c2[_0x2684cf(272)](
      (_0x2659a2) =>
        _0x2659a2.ed > _0x32435f.startIndex + 1 &&
        _0x2659a2.st < _0x32435f.endIndex,
    )) == null ||
    (_0x2065c2 = _0x2065c2.ts) == null ||
    (_0x2065c2 = _0x2065c2.cl) == null
      ? undefined
      : _0x2065c2[_0x2684cf(253)]) ?? t[_0x2684cf(284)].cl["rgb"]
  );
}
function d(_0x56bbf7) {
  return Array.from(_0x56bbf7)
    .map((_0x3d34c4) =>
      _0x3d34c4 === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : _0x3d34c4,
    )
    .filter(
      (_0xe3e06a) =>
        _0xe3e06a !== t.DataStreamTreeTokenType["BLOCK_START"] &&
        _0xe3e06a !== t.DataStreamTreeTokenType["BLOCK_END"] &&
        _0xe3e06a !== t.DataStreamTreeTokenType["SECTION_BREAK"],
    )
    .join("")
    .replace(/\n$/, "");
}
var f = class extends n.FDocument {
  getQuotes() {
    return this._getBlockRanges()
      .filter(
        (_0x2fbdb9) =>
          _0x2fbdb9.blockType === t.DocumentBlockRangeType["QUOTE"],
      )
      .map((_0x2aca09) => this._createFDocumentQuote(_0x2aca09.blockId));
  }
  getQuote(_0x460013) {
    return this._getBlockRanges().some(
      (_0x494e9c) =>
        _0x494e9c.blockId === _0x460013 &&
        _0x494e9c.blockType === t.DocumentBlockRangeType["QUOTE"],
    )
      ? this._createFDocumentQuote(_0x460013)
      : null;
  }
  getQuoteAt(_0x26dd05) {
    let _0x4e2582 = this._getBlockRanges().find(
      (_0x24d41b) =>
        _0x24d41b.blockType === t.DocumentBlockRangeType["QUOTE"] &&
        _0x24d41b.startIndex <= _0x26dd05 &&
        _0x26dd05 <= _0x24d41b.endIndex,
    );
    return _0x4e2582 ? this._createFDocumentQuote(_0x4e2582.blockId) : null;
  }
  findQuoteByText(_0x81df9c) {
    return this.findQuotes(_0x81df9c)[0] ?? null;
  }
  findQuotes(_0x364fef) {
    let _0x4299fa =
      typeof _0x364fef == "string" ? { text: _0x364fef } : _0x364fef;
    return this.getQuotes().filter(
      (_0x1f6876) =>
        !(
          (_0x4299fa.blockId && _0x1f6876.getId() !== _0x4299fa.blockId) ||
          (_0x4299fa.text && !_0x1f6876.getText().includes(_0x4299fa.text))
        ),
    );
  }
  insertQuote(_0x220f51 = {}, _0x356be7 = {}) {
    let _0x5f7052 = this._injector["get"](t.ICommandService),
      _0x8d840a = (0, n.isParagraphFacade)(_0x220f51)
        ? { ..._0x356be7, ..._0x220f51.getRange() }
        : _0x220f51,
      _0x3362af = _0x8d840a.blockId ?? (0, t.generateRandomId)(6);
    return _0x5f7052.syncExecuteCommand(e.DocsQuoteInsertCommand["id"], {
      ..._0x8d840a,
      blockId: _0x3362af,
      unitId: this.getId(),
    })
      ? this.getQuote(_0x3362af)
      : null;
  }
  _getBlockRanges() {
    var _0x5b9b1c = _0x5943b6,
      _0x542f33;
    return (
      ((_0x542f33 = this[_0x5b9b1c(302)]()[_0x5b9b1c(260)]) == null
        ? undefined
        : _0x542f33[_0x5b9b1c(330)]) ?? []
    );
  }
  _createFDocumentQuote(_0x182e3b) {
    return this._injector["createInstance"](l, this, _0x182e3b);
  }
};
(n.FDocument["extend"](f),
  Object.defineProperty(exports, "FDocumentQuote", {
    enumerable: true,
    get: function () {
      return l;
    },
  }));
