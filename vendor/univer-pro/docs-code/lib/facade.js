import {
  DocsCodeInsertCommand as _0x24db2f,
  DocsCodeModel as _0x3c359f,
  DocsCodeRemoveCommand as _0x19d917,
  DocsCodeUnwrapCommand as _0xbfd232,
  DocsCodeUpdateCommand as _0x15a3ff,
  normalizeDocsCodeConfig as _0x4fe348,
} from "@univerjs-pro/docs-code";
import {
  DataStreamTreeTokenType as _0xb2f68,
  DocumentBlockRangeType as _0x1cce93,
  ICommandService as _0x1bedac,
  Inject as _0x8a80b9,
  Injector as _0x1902d3,
  generateRandomId as _0x11e49d,
} from "@univerjs/core";
import {
  FDocument as _0x2b770a,
  isParagraphFacade as _0x775ea0,
} from "@univerjs/docs/facade";
function m(_0x28097e) {
  "@babel/helpers - typeof";
  return (
    (m =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x51e93c) {
            return typeof _0x51e93c;
          }
        : function (_0x16b6b0) {
            return _0x16b6b0 &&
              typeof Symbol == "function" &&
              _0x16b6b0.constructor === Symbol &&
              _0x16b6b0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x16b6b0;
          }),
    m(_0x28097e)
  );
}
function h(_0x15879b, _0x44a722) {
  if (m(_0x15879b) != "object" || !_0x15879b) return _0x15879b;
  var _0x52a66c = _0x15879b[Symbol.toPrimitive];
  if (_0x52a66c !== undefined) {
    var _0x451359 = _0x52a66c.call(_0x15879b, _0x44a722 || "default");
    if (m(_0x451359) != "object") return _0x451359;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x44a722 === "string" ? String : Number)(_0x15879b);
}
function g(_0x53cdfc) {
  var _0x2e0632 = _0x3804,
    _0x25e2d0 = h(_0x53cdfc, _0x2e0632(365));
  return m(_0x25e2d0) == _0x2e0632(414) ? _0x25e2d0 : _0x25e2d0 + "";
}
function _(_0x178f7f, _0x9d9888, _0x11e203) {
  return (
    (_0x9d9888 = g(_0x9d9888)) in _0x178f7f
      ? Object.defineProperty(_0x178f7f, _0x9d9888, {
          value: _0x11e203,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x178f7f[_0x9d9888] = _0x11e203),
    _0x178f7f
  );
}
function v(_0x110e45, _0x5a9e6f) {
  return function (_0x113fc4, _0x2e40de) {
    _0x5a9e6f(_0x113fc4, _0x2e40de, _0x110e45);
  };
}
function y(_0x902421, _0x84e279, _0x5a1829, _0x29dc20) {
  var _0x59a3c8 = _0x3804,
    _0x40f793 = arguments[_0x59a3c8(392)],
    _0x4fbe81 =
      _0x40f793 < 3
        ? _0x84e279
        : _0x29dc20 === null
          ? (_0x29dc20 = Object[_0x59a3c8(420)](_0x84e279, _0x5a1829))
          : _0x29dc20,
    _0xc66e26;
  if (
    typeof Reflect == _0x59a3c8(374) &&
    typeof Reflect[_0x59a3c8(364)] == _0x59a3c8(387)
  )
    _0x4fbe81 = Reflect.decorate(_0x902421, _0x84e279, _0x5a1829, _0x29dc20);
  else {
    for (var _0x1efea3 = _0x902421.length - 1; _0x1efea3 >= 0; _0x1efea3--)
      (_0xc66e26 = _0x902421[_0x1efea3]) &&
        (_0x4fbe81 =
          (_0x40f793 < 3
            ? _0xc66e26(_0x4fbe81)
            : _0x40f793 > 3
              ? _0xc66e26(_0x84e279, _0x5a1829, _0x4fbe81)
              : _0xc66e26(_0x84e279, _0x5a1829)) || _0x4fbe81);
  }
  return (
    _0x40f793 > 3 &&
      _0x4fbe81 &&
      Object[_0x59a3c8(404)](_0x84e279, _0x5a1829, _0x4fbe81),
    _0x4fbe81
  );
}
let b = class {
  constructor(_0x3a8121, _0x391874, _0x1ba04a) {
    ((this._document = _0x3a8121),
      (this._blockId = _0x391874),
      (this._injector = _0x1ba04a),
      _(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0x55a4c6 = this._getBlockRange();
    return _0x55a4c6
      ? {
          blockId: _0x55a4c6.blockId,
          endIndex: _0x55a4c6.endIndex,
          startIndex: _0x55a4c6.startIndex,
        }
      : null;
  }
  getText() {
    var _0x2b3543 = _0x4a008e,
      _0x22fee0;
    let _0x26fd8e = this[_0x2b3543(366)](),
      _0x297bc8 =
        (_0x22fee0 = this[_0x2b3543(385)]()[_0x2b3543(426)]) == null
          ? undefined
          : _0x22fee0.dataStream;
    return !_0x26fd8e || !_0x297bc8
      ? ""
      : x(
          _0x297bc8[_0x2b3543(386)](
            _0x26fd8e[_0x2b3543(389)] + 1,
            _0x26fd8e[_0x2b3543(397)],
          ),
        );
  }
  describe() {
    let _0x5c7f2d = this.getRange();
    return _0x5c7f2d
      ? {
          ..._0x5c7f2d,
          config: this.getConfig(),
          text: this.getText(),
          type: _0x1cce93.CODE,
        }
      : null;
  }
  getConfig() {
    return _0x4fe348(
      this._injector["get"](_0x3c359f).getCodeConfig(
        this._unitId,
        this._blockId,
      ),
    );
  }
  updateConfig(_0x2108eb) {
    return this._injector["get"](_0x1bedac).syncExecuteCommand(_0x15a3ff.id, {
      blockId: this._blockId,
      config: _0x2108eb.config,
      unitId: this._unitId,
    });
  }
  unwrap() {
    return this._injector["get"](_0x1bedac).syncExecuteCommand(_0xbfd232.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  remove() {
    return this._injector["get"](_0x1bedac).syncExecuteCommand(_0x19d917.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  _getBlockRange() {
    var _0x4978d3 = _0x4a008e,
      _0x2c5dd5;
    return (
      ((_0x2c5dd5 = this[_0x4978d3(385)]()[_0x4978d3(426)]) == null ||
      (_0x2c5dd5 = _0x2c5dd5[_0x4978d3(399)]) == null
        ? undefined
        : _0x2c5dd5.find(
            (_0x226028) =>
              _0x226028[_0x4978d3(372)] === this[_0x4978d3(370)] &&
              _0x226028[_0x4978d3(378)] === _0x1cce93[_0x4978d3(429)],
          )) ?? null
    );
  }
  _getDocumentData() {
    return this._document["save"]();
  }
};
b = y([v(2, _0x8a80b9(_0x1902d3))], b);
function x(_0x4d2891) {
  return Array.from(_0x4d2891)
    .map((_0x18eaaa) => (_0x18eaaa === _0xb2f68.PARAGRAPH ? "\x0a" : _0x18eaaa))
    .filter(
      (_0x30d6b3) =>
        _0x30d6b3 !== _0xb2f68.BLOCK_START &&
        _0x30d6b3 !== _0xb2f68.BLOCK_END &&
        _0x30d6b3 !== _0xb2f68.SECTION_BREAK,
    )
    .join("")
    .replace(/\n$/, "");
}
var S = class extends _0x2b770a {
  getCodes() {
    return this._getBlockRanges()
      .filter((_0x4b24a6) => _0x4b24a6.blockType === _0x1cce93.CODE)
      .map((_0x120db3) => this._createFDocumentCode(_0x120db3.blockId));
  }
  getCode(_0x225da8) {
    return this._getBlockRanges().some(
      (_0x577dba) =>
        _0x577dba.blockId === _0x225da8 &&
        _0x577dba.blockType === _0x1cce93.CODE,
    )
      ? this._createFDocumentCode(_0x225da8)
      : null;
  }
  getCodeAt(_0x5e42dc) {
    let _0x583ec4 = this._getBlockRanges().find(
      (_0x181fed) =>
        _0x181fed.blockType === _0x1cce93.CODE &&
        _0x181fed.startIndex <= _0x5e42dc &&
        _0x5e42dc <= _0x181fed.endIndex,
    );
    return _0x583ec4 ? this._createFDocumentCode(_0x583ec4.blockId) : null;
  }
  findCodeByText(_0x5634d3) {
    return this.findCodes(_0x5634d3)[0] ?? null;
  }
  findCodes(_0x293157) {
    let _0x38626a =
      typeof _0x293157 == "string" ? { text: _0x293157 } : _0x293157;
    return this.getCodes().filter(
      (_0x297056) =>
        !(
          (_0x38626a.blockId && _0x297056.getId() !== _0x38626a.blockId) ||
          (_0x38626a.text && !_0x297056.getText().includes(_0x38626a.text))
        ),
    );
  }
  insertCode(_0x314bdb = {}, _0x39a41f = {}) {
    let _0x38cd2a = this._injector["get"](_0x1bedac),
      _0x573bcb = _0x775ea0(_0x314bdb)
        ? { ..._0x39a41f, ..._0x314bdb.getRange() }
        : _0x314bdb,
      _0x521a92 = _0x573bcb.blockId ?? _0x11e49d(6);
    return _0x38cd2a.syncExecuteCommand(_0x24db2f.id, {
      ..._0x573bcb,
      blockId: _0x521a92,
      unitId: this.getId(),
    })
      ? this.getCode(_0x521a92)
      : null;
  }
  _getBlockRanges() {
    var _0x2f6ff0 = _0x4a008e,
      _0x291336;
    return (
      ((_0x291336 = this[_0x2f6ff0(379)]()[_0x2f6ff0(426)]) == null
        ? undefined
        : _0x291336.blockRanges) ?? []
    );
  }
  _createFDocumentCode(_0x4bc5b7) {
    return this._injector["createInstance"](b, this, _0x4bc5b7);
  }
};
_0x2b770a.extend(S);
export { b as FDocumentCode };
