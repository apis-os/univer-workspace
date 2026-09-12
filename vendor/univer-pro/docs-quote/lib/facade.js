import {
  DOCS_QUOTE_LINE_COLOR_TOKEN as _0x525d98,
  DocsQuoteInsertCommand as _0xe85de6,
  DocsQuoteRemoveCommand as _0x344fe4,
  DocsQuoteUnwrapCommand as _0x3aa9c1,
  DocsQuoteUpdateStyleCommand as _0x536906,
} from "@univerjs-pro/docs-quote";
import {
  DEFAULT_STYLES as _0x2e2ba0,
  DataStreamTreeTokenType as _0x404c9c,
  DocumentBlockRangeType as _0x11e178,
  ICommandService as _0x4add58,
  Inject as _0x423d50,
  ThemeService as _0x3c1db2,
  generateRandomId as _0x2955a3,
} from "@univerjs/core";
import {
  FDocument as _0x3989ff,
  isParagraphFacade as _0x53ddc4,
} from "@univerjs/docs/facade";
function m(_0xd3f5db) {
  "@babel/helpers - typeof";
  return (
    (m =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2ef1dc) {
            return typeof _0x2ef1dc;
          }
        : function (_0x2ed057) {
            return _0x2ed057 &&
              typeof Symbol == "function" &&
              _0x2ed057.constructor === Symbol &&
              _0x2ed057 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2ed057;
          }),
    m(_0xd3f5db)
  );
}
function h(_0xff917f, _0x2f2c4a) {
  if (m(_0xff917f) != "object" || !_0xff917f) return _0xff917f;
  var _0x3ff9d2 = _0xff917f[Symbol.toPrimitive];
  if (_0x3ff9d2 !== undefined) {
    var _0x503dd0 = _0x3ff9d2.call(_0xff917f, _0x2f2c4a || "default");
    if (m(_0x503dd0) != "object") return _0x503dd0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2f2c4a === "string" ? String : Number)(_0xff917f);
}
function g(_0x5c30b3) {
  var _0x24d2b8 = _0x3175,
    _0xf46437 = h(_0x5c30b3, _0x24d2b8(461));
  return m(_0xf46437) == "symbol" ? _0xf46437 : _0xf46437 + "";
}
function _(_0x4d8b79, _0x13ee2b, _0xa09619) {
  return (
    (_0x13ee2b = g(_0x13ee2b)) in _0x4d8b79
      ? Object.defineProperty(_0x4d8b79, _0x13ee2b, {
          value: _0xa09619,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4d8b79[_0x13ee2b] = _0xa09619),
    _0x4d8b79
  );
}
function v(_0x98bf0d, _0x5927b8) {
  return function (_0x4a8418, _0x3146f8) {
    _0x5927b8(_0x4a8418, _0x3146f8, _0x98bf0d);
  };
}
function y(_0xf0b170, _0x3fb46d, _0x3b53fb, _0x37c790) {
  var _0x3acbf9 = _0x3175,
    _0x1dad10 = arguments[_0x3acbf9(458)],
    _0x596228 =
      _0x1dad10 < 3
        ? _0x3fb46d
        : _0x37c790 === null
          ? (_0x37c790 = Object[_0x3acbf9(473)](_0x3fb46d, _0x3b53fb))
          : _0x37c790,
    _0xe2c3f5;
  if (typeof Reflect == "object" && typeof Reflect.decorate == _0x3acbf9(508))
    _0x596228 = Reflect[_0x3acbf9(476)](
      _0xf0b170,
      _0x3fb46d,
      _0x3b53fb,
      _0x37c790,
    );
  else {
    for (
      var _0x1b16cc = _0xf0b170[_0x3acbf9(458)] - 1;
      _0x1b16cc >= 0;
      _0x1b16cc--
    )
      (_0xe2c3f5 = _0xf0b170[_0x1b16cc]) &&
        (_0x596228 =
          (_0x1dad10 < 3
            ? _0xe2c3f5(_0x596228)
            : _0x1dad10 > 3
              ? _0xe2c3f5(_0x3fb46d, _0x3b53fb, _0x596228)
              : _0xe2c3f5(_0x3fb46d, _0x3b53fb)) || _0x596228);
  }
  return (
    _0x1dad10 > 3 &&
      _0x596228 &&
      Object[_0x3acbf9(486)](_0x3fb46d, _0x3b53fb, _0x596228),
    _0x596228
  );
}
let b = class {
  constructor(_0x29051c, _0x3b6f1c, _0x56ba97, _0x2f46e2) {
    ((this._document = _0x29051c),
      (this._blockId = _0x3b6f1c),
      (this._commandService = _0x56ba97),
      (this._themeService = _0x2f46e2),
      _(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0x578595 = this._getBlockRange();
    return _0x578595
      ? {
          blockId: _0x578595.blockId,
          endIndex: _0x578595.endIndex,
          startIndex: _0x578595.startIndex,
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
    let _0x544225 = this._getBlockRange();
    return _0x544225
      ? {
          blockId: _0x544225.blockId,
          endIndex: _0x544225.endIndex,
          startIndex: _0x544225.startIndex,
          style: this._getStyle(_0x544225),
          text: this._getText(_0x544225),
          type: _0x11e178.QUOTE,
        }
      : null;
  }
  setStyle(_0x3f2e6a) {
    return this._updateStyle(_0x3f2e6a);
  }
  setLineColor(_0x415255) {
    return this._updateStyle({ lineColor: _0x415255 });
  }
  setTextColor(_0xc82050) {
    return this._updateStyle({ textColor: _0xc82050 });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](_0x3aa9c1.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](_0x344fe4.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  _getBlockRange() {
    var _0x328e4f = _0x3dbff8,
      _0x4271f0;
    return (
      (((_0x4271f0 = this[_0x328e4f(467)]()[_0x328e4f(490)]) == null
        ? undefined
        : _0x4271f0[_0x328e4f(478)]) ?? [])[_0x328e4f(507)](
        (_0x1d1cd8) =>
          _0x1d1cd8[_0x328e4f(512)] === this[_0x328e4f(501)] &&
          _0x1d1cd8[_0x328e4f(520)] === _0x11e178[_0x328e4f(516)],
      ) ?? null
    );
  }
  _updateStyle(_0x3653b3) {
    return this._commandService["syncExecuteCommand"](_0x536906.id, {
      ..._0x3653b3,
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(_0x1cd302) {
    var _0x368a73 = _0x3dbff8,
      _0x2ffe0c,
      _0x5e0a42;
    if (!_0x1cd302)
      return {
        lineColor: this[_0x368a73(491)][_0x368a73(479)](_0x525d98),
        textColor: _0x2e2ba0.cl[_0x368a73(503)],
      };
    let _0x56336a = this[_0x368a73(467)](),
      _0x3954b6 =
        (_0x2ffe0c = _0x56336a[_0x368a73(490)]) == null ||
        (_0x2ffe0c = _0x2ffe0c[_0x368a73(511)]) == null
          ? undefined
          : _0x2ffe0c[_0x368a73(507)](
              (_0x434310) =>
                _0x434310[_0x368a73(502)] > _0x1cd302[_0x368a73(502)] &&
                _0x434310[_0x368a73(502)] < _0x1cd302.endIndex,
            );
    return {
      lineColor:
        (_0x3954b6 == null ||
        (_0x5e0a42 = _0x3954b6[_0x368a73(521)]) == null ||
        (_0x5e0a42 = _0x5e0a42[_0x368a73(510)]) == null
          ? undefined
          : _0x5e0a42[_0x368a73(480)].rgb) ??
        this[_0x368a73(491)][_0x368a73(479)](_0x525d98),
      textColor: x(_0x56336a, _0x1cd302),
    };
  }
  _getText(_0x447e2e) {
    var _0x2d2a0c = _0x3dbff8,
      _0x2c176e;
    let _0x4dc79d =
      (_0x2c176e = this[_0x2d2a0c(467)]()[_0x2d2a0c(490)]) == null
        ? undefined
        : _0x2c176e[_0x2d2a0c(500)];
    return !_0x447e2e || !_0x4dc79d
      ? ""
      : S(
          _0x4dc79d[_0x2d2a0c(515)](
            _0x447e2e.startIndex + 1,
            _0x447e2e[_0x2d2a0c(449)],
          ),
        );
  }
};
b = y([v(2, _0x4add58), v(3, _0x423d50(_0x3c1db2))], b);
function x(_0x48ecc5, _0x27eea7) {
  var _0x22a13c = _0x3dbff8,
    _0x2ae6f2;
  return (
    ((_0x2ae6f2 = _0x48ecc5[_0x22a13c(490)]) == null ||
    (_0x2ae6f2 = _0x2ae6f2[_0x22a13c(457)]) == null ||
    (_0x2ae6f2 = _0x2ae6f2[_0x22a13c(507)](
      (_0x1cc236) =>
        _0x1cc236.ed > _0x27eea7.startIndex + 1 &&
        _0x1cc236.st < _0x27eea7[_0x22a13c(449)],
    )) == null ||
    (_0x2ae6f2 = _0x2ae6f2.ts) == null ||
    (_0x2ae6f2 = _0x2ae6f2.cl) == null
      ? undefined
      : _0x2ae6f2[_0x22a13c(503)]) ?? _0x2e2ba0.cl[_0x22a13c(503)]
  );
}
function S(_0x54b973) {
  return Array.from(_0x54b973)
    .map((_0x5778f3) =>
      _0x5778f3 === _0x404c9c.PARAGRAPH ? "\x0a" : _0x5778f3,
    )
    .filter(
      (_0x2b070b) =>
        _0x2b070b !== _0x404c9c.BLOCK_START &&
        _0x2b070b !== _0x404c9c.BLOCK_END &&
        _0x2b070b !== _0x404c9c.SECTION_BREAK,
    )
    .join("")
    .replace(/\n$/, "");
}
var C = class extends _0x3989ff {
  getQuotes() {
    return this._getBlockRanges()
      .filter((_0x2b6def) => _0x2b6def.blockType === _0x11e178.QUOTE)
      .map((_0x1da3d6) => this._createFDocumentQuote(_0x1da3d6.blockId));
  }
  getQuote(_0xe28586) {
    return this._getBlockRanges().some(
      (_0x76b7da) =>
        _0x76b7da.blockId === _0xe28586 &&
        _0x76b7da.blockType === _0x11e178.QUOTE,
    )
      ? this._createFDocumentQuote(_0xe28586)
      : null;
  }
  getQuoteAt(_0x2f1946) {
    let _0x5375fb = this._getBlockRanges().find(
      (_0x5a8caa) =>
        _0x5a8caa.blockType === _0x11e178.QUOTE &&
        _0x5a8caa.startIndex <= _0x2f1946 &&
        _0x2f1946 <= _0x5a8caa.endIndex,
    );
    return _0x5375fb ? this._createFDocumentQuote(_0x5375fb.blockId) : null;
  }
  findQuoteByText(_0x4d56bb) {
    return this.findQuotes(_0x4d56bb)[0] ?? null;
  }
  findQuotes(_0x516b51) {
    let _0x1b9c2c =
      typeof _0x516b51 == "string" ? { text: _0x516b51 } : _0x516b51;
    return this.getQuotes().filter(
      (_0x391cce) =>
        !(
          (_0x1b9c2c.blockId && _0x391cce.getId() !== _0x1b9c2c.blockId) ||
          (_0x1b9c2c.text && !_0x391cce.getText().includes(_0x1b9c2c.text))
        ),
    );
  }
  insertQuote(_0x3f4eb1 = {}, _0x2ad889 = {}) {
    let _0x3491b3 = this._injector["get"](_0x4add58),
      _0x52b192 = _0x53ddc4(_0x3f4eb1)
        ? { ..._0x2ad889, ..._0x3f4eb1.getRange() }
        : _0x3f4eb1,
      _0x5a7a9b = _0x52b192.blockId ?? _0x2955a3(6);
    return _0x3491b3.syncExecuteCommand(_0xe85de6.id, {
      ..._0x52b192,
      blockId: _0x5a7a9b,
      unitId: this.getId(),
    })
      ? this.getQuote(_0x5a7a9b)
      : null;
  }
  _getBlockRanges() {
    var _0x5f067c = _0x3dbff8,
      _0x525b35;
    return (
      ((_0x525b35 = this[_0x5f067c(450)]()[_0x5f067c(490)]) == null
        ? undefined
        : _0x525b35[_0x5f067c(478)]) ?? []
    );
  }
  _createFDocumentQuote(_0x18bbf5) {
    return this._injector["createInstance"](b, this, _0x18bbf5);
  }
};
_0x3989ff.extend(C);
export { b as FDocumentQuote };
