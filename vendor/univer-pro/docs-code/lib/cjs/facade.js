Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-code"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(_0x58a08b) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x15a06f) {
            return typeof _0x15a06f;
          }
        : function (_0x4d6869) {
            return _0x4d6869 &&
              typeof Symbol == "function" &&
              _0x4d6869.constructor === Symbol &&
              _0x4d6869 !== Symbol.prototype
              ? "symbol"
              : typeof _0x4d6869;
          }),
    r(_0x58a08b)
  );
}
function i(_0x36c3c5, _0x1624fe) {
  if (r(_0x36c3c5) != "object" || !_0x36c3c5) return _0x36c3c5;
  var _0x47306c = _0x36c3c5[Symbol.toPrimitive];
  if (_0x47306c !== undefined) {
    var _0x59a088 = _0x47306c.call(_0x36c3c5, _0x1624fe || "default");
    if (r(_0x59a088) != "object") return _0x59a088;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1624fe === "string" ? String : Number)(_0x36c3c5);
}
function a(_0x1ebd97) {
  var _0x2c9a86 = _0x739a44,
    _0x5f1589 = i(_0x1ebd97, "string");
  return r(_0x5f1589) == _0x2c9a86(336) ? _0x5f1589 : _0x5f1589 + "";
}
function o(_0x305f02, _0x2851c7, _0x4d07b6) {
  return (
    (_0x2851c7 = a(_0x2851c7)) in _0x305f02
      ? Object.defineProperty(_0x305f02, _0x2851c7, {
          value: _0x4d07b6,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x305f02[_0x2851c7] = _0x4d07b6),
    _0x305f02
  );
}
function s(_0xfe41bb, _0x4b066f) {
  return function (_0x14c52a, _0x1c0cfd) {
    _0x4b066f(_0x14c52a, _0x1c0cfd, _0xfe41bb);
  };
}
function c(_0x476f2f, _0x4171fd, _0x4c6691, _0x1bf3de) {
  var _0x554951 = _0x739a44,
    _0x23403f = arguments.length,
    _0x48a934 =
      _0x23403f < 3
        ? _0x4171fd
        : _0x1bf3de === null
          ? (_0x1bf3de = Object[_0x554951(394)](_0x4171fd, _0x4c6691))
          : _0x1bf3de,
    _0x43b1e9;
  if (
    typeof Reflect == _0x554951(404) &&
    typeof Reflect[_0x554951(396)] == _0x554951(335)
  )
    _0x48a934 = Reflect[_0x554951(396)](
      _0x476f2f,
      _0x4171fd,
      _0x4c6691,
      _0x1bf3de,
    );
  else {
    for (var _0x3eb8f8 = _0x476f2f.length - 1; _0x3eb8f8 >= 0; _0x3eb8f8--)
      (_0x43b1e9 = _0x476f2f[_0x3eb8f8]) &&
        (_0x48a934 =
          (_0x23403f < 3
            ? _0x43b1e9(_0x48a934)
            : _0x23403f > 3
              ? _0x43b1e9(_0x4171fd, _0x4c6691, _0x48a934)
              : _0x43b1e9(_0x4171fd, _0x4c6691)) || _0x48a934);
  }
  return (
    _0x23403f > 3 &&
      _0x48a934 &&
      Object[_0x554951(386)](_0x4171fd, _0x4c6691, _0x48a934),
    _0x48a934
  );
}
let l = class {
  constructor(_0x382e65, _0x53ef88, _0x38668f) {
    ((this._document = _0x382e65),
      (this._blockId = _0x53ef88),
      (this._injector = _0x38668f),
      o(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0xed9bdf = this._getBlockRange();
    return _0xed9bdf
      ? {
          blockId: _0xed9bdf.blockId,
          endIndex: _0xed9bdf.endIndex,
          startIndex: _0xed9bdf.startIndex,
        }
      : null;
  }
  getText() {
    var _0x4b996e = _0x739a44,
      _0x778b;
    let _0x3514fe = this[_0x4b996e(367)](),
      _0x4629b7 =
        (_0x778b = this[_0x4b996e(330)]()[_0x4b996e(392)]) == null
          ? undefined
          : _0x778b.dataStream;
    return !_0x3514fe || !_0x4629b7
      ? ""
      : u(
          _0x4629b7[_0x4b996e(395)](
            _0x3514fe.startIndex + 1,
            _0x3514fe.endIndex,
          ),
        );
  }
  describe() {
    let _0xb2ca01 = this.getRange();
    return _0xb2ca01
      ? {
          ..._0xb2ca01,
          config: this.getConfig(),
          text: this.getText(),
          type: t.DocumentBlockRangeType["CODE"],
        }
      : null;
  }
  getConfig() {
    return (0, e.normalizeDocsCodeConfig)(
      this._injector["get"](e.DocsCodeModel).getCodeConfig(
        this._unitId,
        this._blockId,
      ),
    );
  }
  updateConfig(_0xa9e70b) {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.DocsCodeUpdateCommand["id"],
      {
        blockId: this._blockId,
        config: _0xa9e70b.config,
        unitId: this._unitId,
      },
    );
  }
  unwrap() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.DocsCodeUnwrapCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  remove() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.DocsCodeRemoveCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  _getBlockRange() {
    var _0x1c6cd8 = _0x739a44,
      _0x7b1c1;
    return (
      ((_0x7b1c1 = this[_0x1c6cd8(330)]()[_0x1c6cd8(392)]) == null ||
      (_0x7b1c1 = _0x7b1c1[_0x1c6cd8(372)]) == null
        ? undefined
        : _0x7b1c1.find(
            (_0x1e4ee4) =>
              _0x1e4ee4[_0x1c6cd8(358)] === this[_0x1c6cd8(354)] &&
              _0x1e4ee4[_0x1c6cd8(382)] === t[_0x1c6cd8(377)].CODE,
          )) ?? null
    );
  }
  _getDocumentData() {
    return this._document["save"]();
  }
};
l = c([s(2, (0, t.Inject)(t.Injector))], l);
function u(_0x36f9a0) {
  return Array.from(_0x36f9a0)
    .map((_0xc3b9bd) =>
      _0xc3b9bd === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : _0xc3b9bd,
    )
    .filter(
      (_0x429049) =>
        _0x429049 !== t.DataStreamTreeTokenType["BLOCK_START"] &&
        _0x429049 !== t.DataStreamTreeTokenType["BLOCK_END"] &&
        _0x429049 !== t.DataStreamTreeTokenType["SECTION_BREAK"],
    )
    .join("")
    .replace(/\n$/, "");
}
var d = class extends n.FDocument {
  getCodes() {
    return this._getBlockRanges()
      .filter(
        (_0x39d614) => _0x39d614.blockType === t.DocumentBlockRangeType["CODE"],
      )
      .map((_0x51d509) => this._createFDocumentCode(_0x51d509.blockId));
  }
  getCode(_0x18c358) {
    return this._getBlockRanges().some(
      (_0x45d304) =>
        _0x45d304.blockId === _0x18c358 &&
        _0x45d304.blockType === t.DocumentBlockRangeType["CODE"],
    )
      ? this._createFDocumentCode(_0x18c358)
      : null;
  }
  getCodeAt(_0xdcf835) {
    let _0x48286b = this._getBlockRanges().find(
      (_0x5f0d2e) =>
        _0x5f0d2e.blockType === t.DocumentBlockRangeType["CODE"] &&
        _0x5f0d2e.startIndex <= _0xdcf835 &&
        _0xdcf835 <= _0x5f0d2e.endIndex,
    );
    return _0x48286b ? this._createFDocumentCode(_0x48286b.blockId) : null;
  }
  findCodeByText(_0x3556da) {
    return this.findCodes(_0x3556da)[0] ?? null;
  }
  findCodes(_0x21ae94) {
    let _0x28f79f =
      typeof _0x21ae94 == "string" ? { text: _0x21ae94 } : _0x21ae94;
    return this.getCodes().filter(
      (_0x5397f9) =>
        !(
          (_0x28f79f.blockId && _0x5397f9.getId() !== _0x28f79f.blockId) ||
          (_0x28f79f.text && !_0x5397f9.getText().includes(_0x28f79f.text))
        ),
    );
  }
  insertCode(_0xd46d76 = {}, _0x1dd324 = {}) {
    let _0x337fb3 = this._injector["get"](t.ICommandService),
      _0x10bebd = (0, n.isParagraphFacade)(_0xd46d76)
        ? { ..._0x1dd324, ..._0xd46d76.getRange() }
        : _0xd46d76,
      _0x3e9ece = _0x10bebd.blockId ?? (0, t.generateRandomId)(6);
    return _0x337fb3.syncExecuteCommand(e.DocsCodeInsertCommand["id"], {
      ..._0x10bebd,
      blockId: _0x3e9ece,
      unitId: this.getId(),
    })
      ? this.getCode(_0x3e9ece)
      : null;
  }
  _getBlockRanges() {
    var _0x3cb17d = _0x739a44,
      _0x6d80d6;
    return (
      ((_0x6d80d6 = this[_0x3cb17d(360)]()[_0x3cb17d(392)]) == null
        ? undefined
        : _0x6d80d6[_0x3cb17d(372)]) ?? []
    );
  }
  _createFDocumentCode(_0x1c13e7) {
    return this._injector["createInstance"](l, this, _0x1c13e7);
  }
};
(n.FDocument["extend"](d),
  Object.defineProperty(exports, "FDocumentCode", {
    enumerable: true,
    get: function () {
      return l;
    },
  }));
