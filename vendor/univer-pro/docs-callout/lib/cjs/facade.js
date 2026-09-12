Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-callout"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(_0x144917) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5c9fb8) {
            return typeof _0x5c9fb8;
          }
        : function (_0x222d86) {
            return _0x222d86 &&
              typeof Symbol == "function" &&
              _0x222d86.constructor === Symbol &&
              _0x222d86 !== Symbol.prototype
              ? "symbol"
              : typeof _0x222d86;
          }),
    r(_0x144917)
  );
}
function i(_0x5b38b8, _0x1e9e70) {
  if (r(_0x5b38b8) != "object" || !_0x5b38b8) return _0x5b38b8;
  var _0x4fe5a3 = _0x5b38b8[Symbol.toPrimitive];
  if (_0x4fe5a3 !== undefined) {
    var _0x40168d = _0x4fe5a3.call(_0x5b38b8, _0x1e9e70 || "default");
    if (r(_0x40168d) != "object") return _0x40168d;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1e9e70 === "string" ? String : Number)(_0x5b38b8);
}
function a(_0x72324c) {
  var _0x207877 = i(_0x72324c, "string");
  return r(_0x207877) == "symbol" ? _0x207877 : _0x207877 + "";
}
function o(_0x21f033, _0x1bbdb0, _0x59ccc1) {
  return (
    (_0x1bbdb0 = a(_0x1bbdb0)) in _0x21f033
      ? Object.defineProperty(_0x21f033, _0x1bbdb0, {
          value: _0x59ccc1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x21f033[_0x1bbdb0] = _0x59ccc1),
    _0x21f033
  );
}
function s(_0x3690e6, _0xa69ea6) {
  return function (_0x33a9fc, _0x338328) {
    _0xa69ea6(_0x33a9fc, _0x338328, _0x3690e6);
  };
}
function c(_0xbfc73c, _0x50a010, _0x36c8a5, _0x490a00) {
  var _0x173c97 = arguments.length,
    _0x104d78 =
      _0x173c97 < 3
        ? _0x50a010
        : _0x490a00 === null
          ? (_0x490a00 = Object.getOwnPropertyDescriptor(_0x50a010, _0x36c8a5))
          : _0x490a00,
    _0x598178;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x104d78 = Reflect.decorate(_0xbfc73c, _0x50a010, _0x36c8a5, _0x490a00);
  else {
    for (var _0x37c1cf = _0xbfc73c.length - 1; _0x37c1cf >= 0; _0x37c1cf--)
      (_0x598178 = _0xbfc73c[_0x37c1cf]) &&
        (_0x104d78 =
          (_0x173c97 < 3
            ? _0x598178(_0x104d78)
            : _0x173c97 > 3
              ? _0x598178(_0x50a010, _0x36c8a5, _0x104d78)
              : _0x598178(_0x50a010, _0x36c8a5)) || _0x104d78);
  }
  return (
    _0x173c97 > 3 &&
      _0x104d78 &&
      Object.defineProperty(_0x50a010, _0x36c8a5, _0x104d78),
    _0x104d78
  );
}
let l = class {
  constructor(_0x1f96e9, _0x179e82, _0x5c8d42, _0x51c14a, _0x3948a9) {
    ((this._document = _0x1f96e9),
      (this._blockId = _0x179e82),
      (this._commandService = _0x5c8d42),
      (this._docsCalloutModel = _0x51c14a),
      (this._themeService = _0x3948a9),
      o(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0x428cd2 = this._getBlockRange();
    return _0x428cd2
      ? {
          blockId: _0x428cd2.blockId,
          endIndex: _0x428cd2.endIndex,
          startIndex: _0x428cd2.startIndex,
        }
      : null;
  }
  getText() {
    return this._getText(this._getBlockRange());
  }
  getConfig() {
    return this._getConfig();
  }
  getStyle() {
    return this._getStyle(this._getBlockRange());
  }
  describe() {
    let _0x470c57 = this._getBlockRange();
    return _0x470c57
      ? {
          blockId: _0x470c57.blockId,
          config: this._getConfig(),
          endIndex: _0x470c57.endIndex,
          startIndex: _0x470c57.startIndex,
          style: this._getStyle(_0x470c57),
          text: this._getText(_0x470c57),
          type: t.DocumentBlockRangeType["CALLOUT"],
        }
      : null;
  }
  updateConfig(_0x40be56) {
    return this._updateConfig(_0x40be56);
  }
  setBackgroundColor(_0x173473) {
    return this._updateConfig({ backgroundColor: _0x173473 });
  }
  setBorder(_0x326ec6) {
    if (
      _0x326ec6.color == null &&
      _0x326ec6.opacity == null &&
      _0x326ec6.style == null &&
      _0x326ec6.width == null
    )
      return false;
    let _0x4e1286 = {};
    return (
      _0x326ec6.color != null && (_0x4e1286.borderColor = _0x326ec6.color),
      _0x326ec6.style != null && (_0x4e1286.borderStyle = _0x326ec6.style),
      _0x326ec6.opacity != null &&
        (_0x4e1286.borderOpacity = _0x326ec6.opacity),
      _0x326ec6.width != null && (_0x4e1286.borderWidth = _0x326ec6.width),
      this._updateConfig(_0x4e1286)
    );
  }
  setTextColor(_0xda44fe) {
    return this._commandService["syncExecuteCommand"](
      e.DocsCalloutSetTextColorCommand["id"],
      { blockId: this._blockId, unitId: this._unitId, value: _0xda44fe },
    );
  }
  resetTextColor() {
    return this._commandService["syncExecuteCommand"](
      e.DocsCalloutSetTextColorCommand["id"],
      { blockId: this._blockId, unitId: this._unitId, value: null },
    );
  }
  setIcon(_0x2aafd6) {
    return this._updateConfig({ icon: _0x2aafd6, showIcon: true });
  }
  setIconVisible(_0x32f3a7) {
    return this._updateConfig({ showIcon: _0x32f3a7 });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](
      e.DocsCalloutUnwrapCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  remove() {
    return this._commandService["syncExecuteCommand"](
      e.DocsCalloutDeleteCommand["id"],
      { blockId: this._blockId, unitId: this._unitId },
    );
  }
  _getBlockRange() {
    var _0x904b3e;
    return (
      ((_0x904b3e = this._getDocumentData().body) == null ||
      (_0x904b3e = _0x904b3e.blockRanges) == null
        ? undefined
        : _0x904b3e.find(
            (_0x11f768) =>
              _0x11f768.blockId === this._blockId &&
              _0x11f768.blockType === t.DocumentBlockRangeType["CALLOUT"],
          )) ?? null
    );
  }
  _getConfig() {
    return (
      this._docsCalloutModel["getCalloutConfig"](this._unitId, this._blockId) ??
      e.DEFAULT_CALLOUT_CONFIG
    );
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(_0x468ca0) {
    let _0x3affce = this._getConfig();
    return {
      backgroundColor:
        _0x3affce.backgroundColor ||
        this._themeService["getColorFromTheme"](
          e.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN,
        ),
      border: {
        color:
          _0x3affce.borderColor ||
          this._themeService["getColorFromTheme"](
            e.DOCS_CALLOUT_BORDER_COLOR_TOKEN,
          ),
        opacity: _0x3affce.borderOpacity,
        style: _0x3affce.borderStyle,
        width: _0x3affce.borderWidth,
      },
      textColor: _0x468ca0
        ? u(this._getDocumentData(), _0x468ca0)
        : t.DEFAULT_STYLES["cl"].rgb,
    };
  }
  _getText(_0x5f0530) {
    var _0x1b71c7;
    let _0x47865c =
      (_0x1b71c7 = this._getDocumentData().body) == null
        ? undefined
        : _0x1b71c7.dataStream;
    return !_0x5f0530 || !_0x47865c
      ? ""
      : d(_0x47865c.slice(_0x5f0530.startIndex + 1, _0x5f0530.endIndex));
  }
  _updateConfig(_0x25eb28) {
    return this._commandService["syncExecuteCommand"](
      e.DocsCalloutUpdateCommand["id"],
      { blockId: this._blockId, config: _0x25eb28, unitId: this._unitId },
    );
  }
};
l = c(
  [
    s(2, t.ICommandService),
    s(3, (0, t.Inject)(e.DocsCalloutModel)),
    s(4, (0, t.Inject)(t.ThemeService)),
  ],
  l,
);
function u(_0x1f3937, _0x12b62a) {
  var _0x50918e;
  return (
    ((_0x50918e = _0x1f3937.body) == null ||
    (_0x50918e = _0x50918e.textRuns) == null ||
    (_0x50918e = _0x50918e.find(
      (_0x4105d3) =>
        _0x4105d3.ed > _0x12b62a.startIndex + 1 &&
        _0x4105d3.st < _0x12b62a.endIndex,
    )) == null ||
    (_0x50918e = _0x50918e.ts) == null ||
    (_0x50918e = _0x50918e.cl) == null
      ? undefined
      : _0x50918e.rgb) ?? t.DEFAULT_STYLES["cl"].rgb
  );
}
function d(_0x132176) {
  return Array.from(_0x132176)
    .map((_0xf31d16) =>
      _0xf31d16 === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : _0xf31d16,
    )
    .filter(
      (_0x59c9db) =>
        _0x59c9db !== t.DataStreamTreeTokenType["BLOCK_START"] &&
        _0x59c9db !== t.DataStreamTreeTokenType["BLOCK_END"] &&
        _0x59c9db !== t.DataStreamTreeTokenType["SECTION_BREAK"],
    )
    .join("")
    .replace(/\n$/, "");
}
var f = class extends n.FDocument {
  getCallouts() {
    return this._getBlockRanges()
      .filter(
        (_0x347f1) =>
          _0x347f1.blockType === t.DocumentBlockRangeType["CALLOUT"],
      )
      .map((_0x56f9fe) => this._createFDocumentCallout(_0x56f9fe.blockId));
  }
  getCallout(_0xe965c7) {
    return this._getBlockRanges().some(
      (_0x470be3) =>
        _0x470be3.blockId === _0xe965c7 &&
        _0x470be3.blockType === t.DocumentBlockRangeType["CALLOUT"],
    )
      ? this._createFDocumentCallout(_0xe965c7)
      : null;
  }
  getCalloutAt(_0x25d582) {
    let _0x1d2587 = this._getBlockRanges().find(
      (_0x4c2185) =>
        _0x4c2185.blockType === t.DocumentBlockRangeType["CALLOUT"] &&
        _0x4c2185.startIndex <= _0x25d582 &&
        _0x25d582 <= _0x4c2185.endIndex,
    );
    return _0x1d2587 ? this._createFDocumentCallout(_0x1d2587.blockId) : null;
  }
  findCalloutByText(_0x6b00ce) {
    return this.findCallouts(_0x6b00ce)[0] ?? null;
  }
  findCallouts(_0x306519) {
    let _0x41eefc =
      typeof _0x306519 == "string" ? { text: _0x306519 } : _0x306519;
    return this.getCallouts().filter(
      (_0x4195b2) =>
        !(
          (_0x41eefc.blockId && _0x4195b2.getId() !== _0x41eefc.blockId) ||
          (_0x41eefc.text && !_0x4195b2.getText().includes(_0x41eefc.text))
        ),
    );
  }
  insertCallout(_0xecbd3c = {}, _0x379700 = {}) {
    let _0x251b4e = this._injector["get"](t.ICommandService),
      _0x3c3f1e = (0, n.isParagraphFacade)(_0xecbd3c)
        ? { ..._0x379700, ..._0xecbd3c.getRange() }
        : _0xecbd3c,
      _0x1ce748 = _0x3c3f1e.blockId ?? (0, t.generateRandomId)(6);
    return _0x251b4e.syncExecuteCommand(e.DocsCalloutInsertCommand["id"], {
      ..._0x3c3f1e,
      blockId: _0x1ce748,
      unitId: this.getId(),
    })
      ? this.getCallout(_0x1ce748)
      : null;
  }
  _getBlockRanges() {
    var _0x14868c;
    return (
      ((_0x14868c = this.save().body) == null
        ? undefined
        : _0x14868c.blockRanges) ?? []
    );
  }
  _createFDocumentCallout(_0x44add5) {
    return this._injector["createInstance"](l, this, _0x44add5);
  }
};
(n.FDocument["extend"](f),
  Object.defineProperty(exports, "FDocumentCallout", {
    enumerable: true,
    get: function () {
      return l;
    },
  }));
