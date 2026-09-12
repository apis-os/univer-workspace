import {
  DEFAULT_CALLOUT_CONFIG as _0x31341a,
  DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN as _0x15687d,
  DOCS_CALLOUT_BORDER_COLOR_TOKEN as _0x365271,
  DocsCalloutDeleteCommand as _0x1daa2d,
  DocsCalloutInsertCommand as _0x5fc2da,
  DocsCalloutModel as _0x4a6a04,
  DocsCalloutSetTextColorCommand as _0xc75ed4,
  DocsCalloutUnwrapCommand as _0x2a9a6e,
  DocsCalloutUpdateCommand as _0x2b00fc,
} from "@univerjs-pro/docs-callout";
import {
  DEFAULT_STYLES as _0x45fb55,
  DataStreamTreeTokenType as _0x3e5c1d,
  DocumentBlockRangeType as _0x45b197,
  ICommandService as _0x35b5ad,
  Inject as _0x39e20b,
  ThemeService as _0x402838,
  generateRandomId as _0x9a4590,
} from "@univerjs/core";
import {
  FDocument as _0x582801,
  isParagraphFacade as _0x247475,
} from "@univerjs/docs/facade";
function v(_0x3732d3) {
  "@babel/helpers - typeof";
  return (
    (v =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2906b2) {
            return typeof _0x2906b2;
          }
        : function (_0x1ecdb8) {
            return _0x1ecdb8 &&
              typeof Symbol == "function" &&
              _0x1ecdb8.constructor === Symbol &&
              _0x1ecdb8 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1ecdb8;
          }),
    v(_0x3732d3)
  );
}
function y(_0xe4d51d, _0x5e47fa) {
  if (v(_0xe4d51d) != "object" || !_0xe4d51d) return _0xe4d51d;
  var _0x2f0ca5 = _0xe4d51d[Symbol.toPrimitive];
  if (_0x2f0ca5 !== undefined) {
    var _0x5ec0d3 = _0x2f0ca5.call(_0xe4d51d, _0x5e47fa || "default");
    if (v(_0x5ec0d3) != "object") return _0x5ec0d3;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5e47fa === "string" ? String : Number)(_0xe4d51d);
}
function b(_0x14c6e0) {
  var _0x57d516 = _0x13d0,
    _0x44a7bf = y(_0x14c6e0, _0x57d516(269));
  return v(_0x44a7bf) == _0x57d516(286) ? _0x44a7bf : _0x44a7bf + "";
}
function x(_0x16ff95, _0x177afc, _0x5a5c21) {
  return (
    (_0x177afc = b(_0x177afc)) in _0x16ff95
      ? Object.defineProperty(_0x16ff95, _0x177afc, {
          value: _0x5a5c21,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x16ff95[_0x177afc] = _0x5a5c21),
    _0x16ff95
  );
}
function S(_0x1d2390, _0x4f46c8) {
  return function (_0x18f5d3, _0x2fc7de) {
    _0x4f46c8(_0x18f5d3, _0x2fc7de, _0x1d2390);
  };
}
function C(_0x3d6afe, _0x4b8497, _0x2731e0, _0x49ee63) {
  var _0x58d003 = _0x13d0,
    _0x7799a6 = arguments.length,
    _0x3bdc8e =
      _0x7799a6 < 3
        ? _0x4b8497
        : _0x49ee63 === null
          ? (_0x49ee63 = Object[_0x58d003(270)](_0x4b8497, _0x2731e0))
          : _0x49ee63,
    _0x5c8dcf;
  if (
    typeof Reflect == _0x58d003(244) &&
    typeof Reflect[_0x58d003(264)] == _0x58d003(274)
  )
    _0x3bdc8e = Reflect[_0x58d003(264)](
      _0x3d6afe,
      _0x4b8497,
      _0x2731e0,
      _0x49ee63,
    );
  else {
    for (
      var _0x41d941 = _0x3d6afe[_0x58d003(295)] - 1;
      _0x41d941 >= 0;
      _0x41d941--
    )
      (_0x5c8dcf = _0x3d6afe[_0x41d941]) &&
        (_0x3bdc8e =
          (_0x7799a6 < 3
            ? _0x5c8dcf(_0x3bdc8e)
            : _0x7799a6 > 3
              ? _0x5c8dcf(_0x4b8497, _0x2731e0, _0x3bdc8e)
              : _0x5c8dcf(_0x4b8497, _0x2731e0)) || _0x3bdc8e);
  }
  return (
    _0x7799a6 > 3 &&
      _0x3bdc8e &&
      Object[_0x58d003(288)](_0x4b8497, _0x2731e0, _0x3bdc8e),
    _0x3bdc8e
  );
}
let w = class {
  constructor(_0x122194, _0x5a877f, _0x233db3, _0x35ef93, _0x11433a) {
    ((this._document = _0x122194),
      (this._blockId = _0x5a877f),
      (this._commandService = _0x233db3),
      (this._docsCalloutModel = _0x35ef93),
      (this._themeService = _0x11433a),
      x(this, "_unitId", undefined),
      (this._unitId = this._document["getId"]()));
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let _0x53bb94 = this._getBlockRange();
    return _0x53bb94
      ? {
          blockId: _0x53bb94.blockId,
          endIndex: _0x53bb94.endIndex,
          startIndex: _0x53bb94.startIndex,
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
    let _0x512d1a = this._getBlockRange();
    return _0x512d1a
      ? {
          blockId: _0x512d1a.blockId,
          config: this._getConfig(),
          endIndex: _0x512d1a.endIndex,
          startIndex: _0x512d1a.startIndex,
          style: this._getStyle(_0x512d1a),
          text: this._getText(_0x512d1a),
          type: _0x45b197.CALLOUT,
        }
      : null;
  }
  updateConfig(_0x16c631) {
    return this._updateConfig(_0x16c631);
  }
  setBackgroundColor(_0x26b4fd) {
    return this._updateConfig({ backgroundColor: _0x26b4fd });
  }
  setBorder(_0x31fc26) {
    if (
      _0x31fc26.color == null &&
      _0x31fc26.opacity == null &&
      _0x31fc26.style == null &&
      _0x31fc26.width == null
    )
      return false;
    let _0x4d6190 = {};
    return (
      _0x31fc26.color != null && (_0x4d6190.borderColor = _0x31fc26.color),
      _0x31fc26.style != null && (_0x4d6190.borderStyle = _0x31fc26.style),
      _0x31fc26.opacity != null &&
        (_0x4d6190.borderOpacity = _0x31fc26.opacity),
      _0x31fc26.width != null && (_0x4d6190.borderWidth = _0x31fc26.width),
      this._updateConfig(_0x4d6190)
    );
  }
  setTextColor(_0x1fa231) {
    return this._commandService["syncExecuteCommand"](_0xc75ed4.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: _0x1fa231,
    });
  }
  resetTextColor() {
    return this._commandService["syncExecuteCommand"](_0xc75ed4.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: null,
    });
  }
  setIcon(_0x41b712) {
    return this._updateConfig({ icon: _0x41b712, showIcon: true });
  }
  setIconVisible(_0x1e786b) {
    return this._updateConfig({ showIcon: _0x1e786b });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](_0x2a9a6e.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](_0x1daa2d.id, {
      blockId: this._blockId,
      unitId: this._unitId,
    });
  }
  _getBlockRange() {
    var _0x2ce9e4 = _0x177107,
      _0x421f79;
    return (
      ((_0x421f79 = this._getDocumentData()[_0x2ce9e4(297)]) == null ||
      (_0x421f79 = _0x421f79[_0x2ce9e4(287)]) == null
        ? undefined
        : _0x421f79[_0x2ce9e4(254)](
            (_0x307fc2) =>
              _0x307fc2[_0x2ce9e4(291)] === this[_0x2ce9e4(275)] &&
              _0x307fc2.blockType === _0x45b197.CALLOUT,
          )) ?? null
    );
  }
  _getConfig() {
    return (
      this._docsCalloutModel["getCalloutConfig"](this._unitId, this._blockId) ??
      _0x31341a
    );
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(_0x7e9e8c) {
    let _0xb1f986 = this._getConfig();
    return {
      backgroundColor:
        _0xb1f986.backgroundColor ||
        this._themeService["getColorFromTheme"](_0x15687d),
      border: {
        color:
          _0xb1f986.borderColor ||
          this._themeService["getColorFromTheme"](_0x365271),
        opacity: _0xb1f986.borderOpacity,
        style: _0xb1f986.borderStyle,
        width: _0xb1f986.borderWidth,
      },
      textColor: _0x7e9e8c
        ? T(this._getDocumentData(), _0x7e9e8c)
        : _0x45fb55.cl["rgb"],
    };
  }
  _getText(_0x5b29ed) {
    var _0x3d09d0 = _0x177107,
      _0x26ac65;
    let _0x3a2f72 =
      (_0x26ac65 = this[_0x3d09d0(304)]()[_0x3d09d0(297)]) == null
        ? undefined
        : _0x26ac65[_0x3d09d0(265)];
    return !_0x5b29ed || !_0x3a2f72
      ? ""
      : E(
          _0x3a2f72[_0x3d09d0(293)](
            _0x5b29ed[_0x3d09d0(246)] + 1,
            _0x5b29ed.endIndex,
          ),
        );
  }
  _updateConfig(_0x164376) {
    return this._commandService["syncExecuteCommand"](_0x2b00fc.id, {
      blockId: this._blockId,
      config: _0x164376,
      unitId: this._unitId,
    });
  }
};
w = C(
  [S(2, _0x35b5ad), S(3, _0x39e20b(_0x4a6a04)), S(4, _0x39e20b(_0x402838))],
  w,
);
function T(_0x2d04dc, _0x3804f2) {
  var _0x209a3d = _0x177107,
    _0x409125;
  return (
    ((_0x409125 = _0x2d04dc[_0x209a3d(297)]) == null ||
    (_0x409125 = _0x409125.textRuns) == null ||
    (_0x409125 = _0x409125[_0x209a3d(254)](
      (_0x57cab1) =>
        _0x57cab1.ed > _0x3804f2[_0x209a3d(246)] + 1 &&
        _0x57cab1.st < _0x3804f2[_0x209a3d(231)],
    )) == null ||
    (_0x409125 = _0x409125.ts) == null ||
    (_0x409125 = _0x409125.cl) == null
      ? undefined
      : _0x409125[_0x209a3d(271)]) ?? _0x45fb55.cl[_0x209a3d(271)]
  );
}
function E(_0x407035) {
  return Array.from(_0x407035)
    .map((_0x263095) =>
      _0x263095 === _0x3e5c1d.PARAGRAPH ? "\x0a" : _0x263095,
    )
    .filter(
      (_0x192203) =>
        _0x192203 !== _0x3e5c1d.BLOCK_START &&
        _0x192203 !== _0x3e5c1d.BLOCK_END &&
        _0x192203 !== _0x3e5c1d.SECTION_BREAK,
    )
    .join("")
    .replace(/\n$/, "");
}
var D = class extends _0x582801 {
  getCallouts() {
    return this._getBlockRanges()
      .filter((_0x5ca2ac) => _0x5ca2ac.blockType === _0x45b197.CALLOUT)
      .map((_0x52f14d) => this._createFDocumentCallout(_0x52f14d.blockId));
  }
  getCallout(_0x477b5b) {
    return this._getBlockRanges().some(
      (_0xc7e080) =>
        _0xc7e080.blockId === _0x477b5b &&
        _0xc7e080.blockType === _0x45b197.CALLOUT,
    )
      ? this._createFDocumentCallout(_0x477b5b)
      : null;
  }
  getCalloutAt(_0x114da4) {
    let _0x13e073 = this._getBlockRanges().find(
      (_0x45c787) =>
        _0x45c787.blockType === _0x45b197.CALLOUT &&
        _0x45c787.startIndex <= _0x114da4 &&
        _0x114da4 <= _0x45c787.endIndex,
    );
    return _0x13e073 ? this._createFDocumentCallout(_0x13e073.blockId) : null;
  }
  findCalloutByText(_0x72175d) {
    return this.findCallouts(_0x72175d)[0] ?? null;
  }
  findCallouts(_0x37e685) {
    let _0x262a55 =
      typeof _0x37e685 == "string" ? { text: _0x37e685 } : _0x37e685;
    return this.getCallouts().filter(
      (_0x388645) =>
        !(
          (_0x262a55.blockId && _0x388645.getId() !== _0x262a55.blockId) ||
          (_0x262a55.text && !_0x388645.getText().includes(_0x262a55.text))
        ),
    );
  }
  insertCallout(_0x33e1ae = {}, _0x7876af = {}) {
    let _0x5daa1d = this._injector["get"](_0x35b5ad),
      _0x334406 = _0x247475(_0x33e1ae)
        ? { ..._0x7876af, ..._0x33e1ae.getRange() }
        : _0x33e1ae,
      _0x57ca20 = _0x334406.blockId ?? _0x9a4590(6);
    return _0x5daa1d.syncExecuteCommand(_0x5fc2da.id, {
      ..._0x334406,
      blockId: _0x57ca20,
      unitId: this.getId(),
    })
      ? this.getCallout(_0x57ca20)
      : null;
  }
  _getBlockRanges() {
    var _0x967df8 = _0x177107,
      _0x310fcd;
    return (
      ((_0x310fcd = this[_0x967df8(240)]()[_0x967df8(297)]) == null
        ? undefined
        : _0x310fcd.blockRanges) ?? []
    );
  }
  _createFDocumentCallout(_0x19d1d3) {
    return this._injector["createInstance"](w, this, _0x19d1d3);
  }
};
_0x582801.extend(D);
export { w as FDocumentCallout };
