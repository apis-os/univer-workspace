Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("rxjs"),
  n = require("@univerjs/docs"),
  r = require("@univerjs-pro/license");
const i = {
  language: "javascript",
  showLineNumbers: false,
  tabSize: 4,
  wrap: true,
};
function a(_0x5052ed) {
  return { ...i, ..._0x5052ed };
}
function o(_0x410b24) {
  let _0x108e9b = (_0x410b24 == null ? undefined : _0x410b24.codes) ?? {};
  return {
    codes: Object.fromEntries(
      Object.entries(_0x108e9b).map(([_0x15f7e7, _0x53f429]) => [
        _0x15f7e7,
        a(_0x53f429),
      ]),
    ),
  };
}
function s(_0x2a0bb1, _0x52ae60, _0x1f523f) {
  let _0x1fd5d6 = o(_0x2a0bb1);
  return (
    (_0x1fd5d6.codes[_0x52ae60] = a({
      ..._0x1fd5d6.codes[_0x52ae60],
      ..._0x1f523f,
    })),
    _0x1fd5d6
  );
}
function c(_0x74147f, _0x43e4dd) {
  let _0x3fa9ed = o(_0x74147f);
  return (delete _0x3fa9ed.codes[_0x43e4dd], _0x3fa9ed);
}
function l(_0x42e8e2) {
  "@babel/helpers - typeof";
  return (
    (l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4419d4) {
            return typeof _0x4419d4;
          }
        : function (_0x432b5e) {
            return _0x432b5e &&
              typeof Symbol == "function" &&
              _0x432b5e.constructor === Symbol &&
              _0x432b5e !== Symbol.prototype
              ? "symbol"
              : typeof _0x432b5e;
          }),
    l(_0x42e8e2)
  );
}
function u(_0x54c138, _0x477cf5) {
  if (l(_0x54c138) != "object" || !_0x54c138) return _0x54c138;
  var _0x518493 = _0x54c138[Symbol.toPrimitive];
  if (_0x518493 !== undefined) {
    var _0xb0ccc6 = _0x518493.call(_0x54c138, _0x477cf5 || "default");
    if (l(_0xb0ccc6) != "object") return _0xb0ccc6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x477cf5 === "string" ? String : Number)(_0x54c138);
}
function d(_0x3645ee) {
  var _0x1acf8a = u(_0x3645ee, "string");
  return l(_0x1acf8a) == "symbol" ? _0x1acf8a : _0x1acf8a + "";
}
function f(_0x7c626f, _0x1c6384, _0x56da45) {
  return (
    (_0x1c6384 = d(_0x1c6384)) in _0x7c626f
      ? Object.defineProperty(_0x7c626f, _0x1c6384, {
          value: _0x56da45,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x7c626f[_0x1c6384] = _0x56da45),
    _0x7c626f
  );
}
var p = class extends e.Disposable {
  constructor(..._0xaab2b0) {
    (super(..._0xaab2b0),
      f(this, "_resources", new Map()),
      f(this, "_change$", new t["Subject"]()),
      f(this, "change$", this._change$["asObservable"]()));
  }
  getCodeConfig(_0x3446ec, _0x138c91) {
    return o(this._resources["get"](_0x3446ec)).codes[_0x138c91];
  }
  setCodeConfig(_0x39fc02, _0x33f9fb, _0x237ca9) {
    this._setResource(
      _0x39fc02,
      _0x33f9fb,
      s(this._resources["get"](_0x39fc02), _0x33f9fb, _0x237ca9),
    );
  }
  removeCode(_0x2f5639, _0x58a17f) {
    this._setResource(
      _0x2f5639,
      _0x58a17f,
      c(this._resources["get"](_0x2f5639), _0x58a17f),
    );
  }
  serialize(_0x400f4a) {
    return o(this._resources["get"](_0x400f4a));
  }
  deserialize(_0x28e2db, _0x4afd82) {
    (this._resources["set"](_0x28e2db, o(_0x4afd82)),
      this._change$["next"]({ unitId: _0x28e2db }));
  }
  removeUnit(_0x3a52d6) {
    (this._resources["delete"](_0x3a52d6),
      this._change$["next"]({ unitId: _0x3a52d6 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x4066aa, _0xfe99fa, _0x2ab17e) {
    (this._resources["set"](_0x4066aa, _0x2ab17e),
      this._change$["next"]({ unitId: _0x4066aa, blockId: _0xfe99fa }));
  }
};
const m = {
    id: "docs-code.mutation.set-config",
    type: e.CommandType["MUTATION"],
    handler: (_0xcb0126, _0x2b95d7) =>
      !(_0x2b95d7 != null && _0x2b95d7.unitId) || !_0x2b95d7.blockId
        ? false
        : (_0xcb0126
            .get(p)
            .setCodeConfig(
              _0x2b95d7.unitId,
              _0x2b95d7.blockId,
              _0x2b95d7.config,
            ),
          true),
  },
  h = {
    id: "docs-code.mutation.remove-config",
    type: e.CommandType["MUTATION"],
    handler: (_0x339378, _0x5c30a4) =>
      !(_0x5c30a4 != null && _0x5c30a4.unitId) || !_0x5c30a4.blockId
        ? false
        : (_0x339378.get(p).removeCode(_0x5c30a4.unitId, _0x5c30a4.blockId),
          true),
  },
  g = "monospace";
var _ = class extends Error {
  constructor(_0x558f78 = "Insert range cannot cross table cell boundaries") {
    super(_0x558f78);
  }
};
function ee(_0xb27106) {
  var _0x15d7af;
  let _0xe5357b = S(_0xb27106.documentData),
    _0x44f402 = w(_0xe5357b),
    _0x515596 = ne(_0xb27106.startOffset, _0xb27106.endOffset),
    _0x4997f6 = _0x515596
      ? (_0x15d7af = _0x44f402.blockRanges) == null
        ? undefined
        : _0x15d7af.find((_0x5e197e) => {
            let _0x21efe8 = (0, e.getBlockRangeInterval)(_0x5e197e);
            return (
              _0x21efe8.startOffset === _0x515596.startOffset &&
              _0x21efe8.endOffset === _0x515596.endOffset
            );
          })
      : undefined,
    { startOffset: _0x5c65ee, endOffset: _0x1be476 } = _0x4997f6
      ? _0x515596
      : me(
          _0x44f402,
          _0xb27106.startOffset,
          _0xb27106.endOffset,
          _0xb27106.insertionMode,
        );
  if (!_0x4997f6 && re(_0x44f402, _0x5c65ee, _0x1be476))
    throw new _("Insert range cannot overlap an existing document block");
  let _0x8df837 = _e(_0x44f402, _0x5c65ee, _0x1be476),
    _0x457d60 =
      (_0x4997f6 == null ? undefined : _0x4997f6.blockId) ?? _0xb27106.blockId,
    _0x49aa9a = s(_0xb27106.metadata, _0x457d60, { ...i, ..._0xb27106.config });
  if (_0x4997f6)
    return (
      (_0x4997f6.blockType = e.DocumentBlockRangeType["CODE"]),
      te(_0x44f402, _0x5c65ee, _0x1be476),
      le(_0x44f402, _0x5c65ee, _0x1be476, _0x8df837),
      O(_0x44f402, _0x4997f6),
      {
        nextDocumentData: _0xe5357b,
        nextMetadata: _0x49aa9a,
        cursorOffset: _0x5c65ee + 1,
      }
    );
  if (_0x5c65ee === _0x1be476) {
    var _0x542556, _0x526d6d;
    let _0x124fb1 =
      "" +
      e.DataStreamTreeTokenType["BLOCK_START"] +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["BLOCK_END"];
    k(_0x44f402, _0x5c65ee, _0x124fb1, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0x542556 = _0x44f402.paragraphs) == null
                ? undefined
                : _0x542556.map((_0x3648e6) => _0x3648e6.paragraphId),
            ),
          ),
          paragraphStyle: x(true, true, _0x8df837),
        },
      ],
      blockRanges: [
        {
          blockId: _0x457d60,
          blockType: e.DocumentBlockRangeType["CODE"],
          startIndex: 0,
          endIndex: _0x124fb1.length - 1,
        },
      ],
    });
    let _0x5528a2 =
      (_0x526d6d = _0x44f402.blockRanges) == null
        ? undefined
        : _0x526d6d.find((_0x249389) => _0x249389.blockId === _0x457d60);
    return (
      _0x5528a2 && O(_0x44f402, _0x5528a2),
      {
        nextDocumentData: _0xe5357b,
        nextMetadata: _0x49aa9a,
        cursorOffset: _0x5c65ee + 1,
      }
    );
  }
  (k(_0x44f402, _0x1be476, e.DataStreamTreeTokenType["BLOCK_END"]),
    k(_0x44f402, _0x5c65ee, e.DataStreamTreeTokenType["BLOCK_START"]),
    le(_0x44f402, _0x5c65ee, _0x1be476 + 1, _0x8df837));
  let _0x4e1e07 = {
    blockId: _0x457d60,
    blockType: e.DocumentBlockRangeType["CODE"],
    startIndex: _0x5c65ee,
    endIndex: _0x1be476 + 1,
  };
  return (
    (_0x44f402.blockRanges = [...(_0x44f402.blockRanges ?? []), _0x4e1e07].sort(
      (_0x57f857, _0x50be70) => _0x57f857.startIndex - _0x50be70.startIndex,
    )),
    O(_0x44f402, _0x4e1e07),
    {
      nextDocumentData: _0xe5357b,
      nextMetadata: _0x49aa9a,
      cursorOffset: _0x5c65ee + 1,
    }
  );
}
function te(_0x2d700a, _0x1d2664, _0x244e64) {
  (_0x2d700a.paragraphs ?? [])
    .filter(
      (_0x5e8731) =>
        _0x5e8731.startIndex > _0x1d2664 && _0x5e8731.startIndex < _0x244e64,
    )
    .forEach((_0x21764e) => {
      let _0x5ee034 = { ...(_0x21764e.paragraphStyle ?? {}) };
      (delete _0x5ee034.spaceAbove,
        delete _0x5ee034.spaceBelow,
        (_0x21764e.paragraphStyle = _0x5ee034));
    });
}
function ne(_0x211695, _0x50a7b3) {
  return _0x211695 == null || _0x50a7b3 == null || _0x211695 === _0x50a7b3
    ? null
    : {
        startOffset: Math.min(_0x211695, _0x50a7b3),
        endOffset: Math.max(_0x211695, _0x50a7b3),
      };
}
function re(_0x2b6f5c, _0x5330c1, _0x7d0b02) {
  return (_0x2b6f5c.blockRanges ?? []).some((_0x30d849) => {
    let _0x5836e4 = (0, e.getBlockRangeInterval)(_0x30d849);
    return _0x5330c1 === _0x7d0b02
      ? (0, e.containsInteriorInsertionOffset)(_0x5836e4, _0x5330c1)
      : (0, e.intersectsOperationalIntervals)(_0x5836e4, {
          startOffset: _0x5330c1,
          endOffset: _0x7d0b02,
        });
  });
}
function ie(_0x21b92b) {
  return {
    nextDocumentData: S(_0x21b92b.documentData),
    nextMetadata: s(_0x21b92b.metadata, _0x21b92b.blockId, _0x21b92b.config),
    cursorOffset: 0,
  };
}
function v(_0x1f0785) {
  let _0x355e29 = S(_0x1f0785.documentData),
    _0x12ed61 = w(_0x355e29),
    _0xb5397e = b(_0x12ed61, _0x1f0785.blockId);
  if (!_0xb5397e) return null;
  let _0x242aa1 = fe(_0x12ed61, _0xb5397e);
  return {
    nextDocumentData: _0x355e29,
    nextMetadata: c(_0x1f0785.metadata, _0x1f0785.blockId),
    cursorOffset: _0x242aa1,
  };
}
function ae(_0x3144fd) {
  var _0x75430f;
  let _0x12d46d = S(_0x3144fd.documentData),
    _0xd37ba = w(_0x12d46d),
    _0x5877c5 = b(_0xd37ba, _0x3144fd.blockId);
  if (!_0x5877c5) return null;
  let _0x564505 = (0, e.getBlockRangeInterval)(_0x5877c5);
  return (
    A(_0xd37ba, _0x564505.startOffset, _0x564505.endOffset),
    (_0xd37ba.blockRanges =
      (_0x75430f = _0xd37ba.blockRanges) == null
        ? undefined
        : _0x75430f.filter(
            (_0xed7469) => _0xed7469.blockId !== _0x3144fd.blockId,
          )),
    {
      nextDocumentData: _0x12d46d,
      nextMetadata: c(_0x3144fd.metadata, _0x3144fd.blockId),
      cursorOffset: _0x5877c5.startIndex,
    }
  );
}
function y(_0x1c35bc) {
  let _0x1f996e = S(_0x1c35bc.documentData),
    _0x15398e = w(_0x1f996e),
    _0x366502 = ce(_0x15398e, _0x1c35bc.cursorOffset);
  return (
    (_0x366502 &&
      oe(
        _0x1f996e,
        _0x15398e,
        _0x366502,
        _0x1c35bc.cursorOffset,
        _0x1c35bc.paragraphStartIndex,
      )) ||
    null
  );
}
function oe(_0x5d3a23, _0x4bc8bc, _0x294117, _0x14182c, _0x430eac) {
  let _0x2a5771 = Se(_0x4bc8bc, _0x294117, _0x14182c, _0x430eac);
  if (!_0x2a5771) return null;
  let _0x4ec1f3 = _0x2a5771.endTokenOffset - 1;
  return (
    A(
      _0x4bc8bc,
      _0x2a5771.paragraph["startIndex"],
      _0x2a5771.paragraph["startIndex"] + 1,
    ),
    { nextDocumentData: _0x5d3a23, cursorOffset: _0x4ec1f3 }
  );
}
function b(_0x94a3fd, _0x305a0d) {
  var _0x2dca9d;
  return _0x94a3fd == null || (_0x2dca9d = _0x94a3fd.blockRanges) == null
    ? undefined
    : _0x2dca9d.find(
        (_0x2113b6) =>
          _0x2113b6.blockType === e.DocumentBlockRangeType["CODE"] &&
          _0x2113b6.blockId === _0x305a0d,
      );
}
function se(_0x352043) {
  let _0x180283 = _0x352043.documentData["body"];
  if (!_0x180283) return false;
  let _0x109bcf =
      _0x352043.direction === "left"
        ? _0x352043.cursorOffset - 1
        : _0x352043.cursorOffset,
    _0x117cb1 =
      _0x352043.direction === "right" ? _0x352043.cursorOffset + 1 : _0x109bcf;
  return (_0x180283.blockRanges ?? []).some((_0x3802da) =>
    _0x3802da.blockType === e.DocumentBlockRangeType["CODE"]
      ? _0x109bcf === _0x3802da.startIndex ||
        _0x109bcf === _0x3802da.endIndex ||
        _0x117cb1 === _0x3802da.startIndex ||
        _0x117cb1 === _0x3802da.endIndex
      : false,
  );
}
function ce(_0x14068a, _0x9f2de) {
  var _0x53ec07;
  return (_0x53ec07 = _0x14068a.blockRanges) == null
    ? undefined
    : _0x53ec07.find((_0x56fc94) => {
        let _0x28b8bc = D(_0x56fc94);
        return (
          _0x56fc94.blockType === e.DocumentBlockRangeType["CODE"] &&
          _0x56fc94.startIndex <= _0x9f2de &&
          _0x9f2de <= _0x28b8bc + 2
        );
      });
}
function x(_0x1a9336, _0x2ba710, _0x2aac14 = false) {
  return {
    indentEnd: { v: 20 },
    indentStart: { v: 20 },
    keepLines: e.BooleanNumber["TRUE"],
    keepNext: _0x2ba710 ? e.BooleanNumber["FALSE"] : e.BooleanNumber["TRUE"],
    widowControl: e.BooleanNumber["TRUE"],
    ...(_0x1a9336 && _0x2aac14 ? { spaceAbove: { v: 8 } } : {}),
    textStyle: { ff: g, fs: 12 },
  };
}
function le(_0x109544, _0x1a8787, _0x5e9a30, _0x3ed9e6 = false) {
  let _0x21fb0d = (_0x109544.paragraphs ?? []).filter(
    (_0x39d928) =>
      _0x39d928.startIndex > _0x1a8787 && _0x39d928.startIndex < _0x5e9a30,
  );
  _0x21fb0d.forEach((_0x4bc5f2, _0xba9d30) => {
    _0x4bc5f2.paragraphStyle = {
      ...(_0x4bc5f2.paragraphStyle ?? {}),
      ...x(_0xba9d30 === 0, _0xba9d30 === _0x21fb0d.length - 1, _0x3ed9e6),
    };
  });
}
function ue(_0x451e3f) {
  var _0x221c5f, _0x38ae38;
  let _0x358288 = { ...(_0x451e3f ?? {}) };
  return (
    delete _0x358288.indentEnd,
    delete _0x358288.indentStart,
    delete _0x358288.spaceAbove,
    delete _0x358288.spaceBelow,
    delete _0x358288.keepLines,
    delete _0x358288.keepNext,
    delete _0x358288.widowControl,
    ((_0x221c5f = _0x358288.textStyle) == null ? undefined : _0x221c5f.ff) ===
      g &&
      ((_0x38ae38 = _0x358288.textStyle) == null ? undefined : _0x38ae38.fs) ===
        12 &&
      delete _0x358288.textStyle,
    _0x358288
  );
}
function de(_0x4a6276, _0x36f792) {
  let _0x1c3b18 = D(_0x36f792);
  return (_0x4a6276.paragraphs ?? []).filter(
    (_0x489d3e) =>
      _0x489d3e.startIndex > _0x36f792.startIndex &&
      _0x489d3e.startIndex < _0x1c3b18,
  );
}
function fe(_0xfd1110, _0x20d028) {
  var _0x924cd5;
  let _0x29ff71 = D(_0x20d028);
  return (
    de(_0xfd1110, _0x20d028).forEach((_0xf02b3) => {
      _0xf02b3.paragraphStyle = ue(_0xf02b3.paragraphStyle);
    }),
    A(_0xfd1110, _0x29ff71, _0x29ff71 + 1),
    A(_0xfd1110, _0x20d028.startIndex, _0x20d028.startIndex + 1),
    (_0xfd1110.blockRanges =
      (_0x924cd5 = _0xfd1110.blockRanges) == null
        ? undefined
        : _0x924cd5.filter(
            (_0x1c0cc5) => _0x1c0cc5.blockId !== _0x20d028.blockId,
          )),
    _0x20d028.startIndex
  );
}
function S(_0x29d70b) {
  return {
    ..._0x29d70b,
    body: _0x29d70b.body ? pe(_0x29d70b.body) : _0x29d70b.body,
  };
}
function pe(_0x6aadd9) {
  var _0x239fae,
    _0x194b85,
    _0x3dfc47,
    _0x1cb709,
    _0x11509d,
    _0x139bf9,
    _0x452051,
    _0xcb09ad,
    _0x46a3d7;
  return {
    ..._0x6aadd9,
    paragraphs:
      (_0x239fae = _0x6aadd9.paragraphs) == null
        ? undefined
        : _0x239fae.map((_0x49c76b) => ({
            ..._0x49c76b,
            bullet: C(_0x49c76b.bullet),
            paragraphStyle: C(_0x49c76b.paragraphStyle),
          })),
    sectionBreaks:
      (_0x194b85 = _0x6aadd9.sectionBreaks) == null
        ? undefined
        : _0x194b85.map((_0x258aa9) => ({ ..._0x258aa9 })),
    textRuns:
      (_0x3dfc47 = _0x6aadd9.textRuns) == null
        ? undefined
        : _0x3dfc47.map((_0x289993) => ({ ..._0x289993 })),
    tables:
      (_0x1cb709 = _0x6aadd9.tables) == null
        ? undefined
        : _0x1cb709.map((_0x51b310) => ({ ..._0x51b310 })),
    columnGroups:
      (_0x11509d = _0x6aadd9.columnGroups) == null
        ? undefined
        : _0x11509d.map((_0x586963) => {
            var _0x5c54b5;
            return {
              ..._0x586963,
              columns:
                (_0x5c54b5 = _0x586963.columns) == null
                  ? undefined
                  : _0x5c54b5.map((_0x574569) => C(_0x574569)),
            };
          }),
    blockRanges:
      (_0x139bf9 = _0x6aadd9.blockRanges) == null
        ? undefined
        : _0x139bf9.map((_0x1e255a) => ({ ..._0x1e255a })),
    customRanges:
      (_0x452051 = _0x6aadd9.customRanges) == null
        ? undefined
        : _0x452051.map((_0x46de46) => ({ ..._0x46de46 })),
    customDecorations:
      (_0xcb09ad = _0x6aadd9.customDecorations) == null
        ? undefined
        : _0xcb09ad.map((_0x5239a7) => ({ ..._0x5239a7 })),
    customBlocks:
      (_0x46a3d7 = _0x6aadd9.customBlocks) == null
        ? undefined
        : _0x46a3d7.map((_0x22e71d) => ({ ..._0x22e71d })),
  };
}
function C(_0x4780d4) {
  return Array.isArray(_0x4780d4)
    ? _0x4780d4.map((_0x120095) => C(_0x120095))
    : !_0x4780d4 || typeof _0x4780d4 != "object"
      ? _0x4780d4
      : Object.fromEntries(
          Object.entries(_0x4780d4).map(([_0x2386ee, _0x2fb517]) => [
            _0x2386ee,
            C(_0x2fb517),
          ]),
        );
}
function w(_0x553549) {
  if (!_0x553549.body) throw Error("Document body is required");
  return _0x553549.body;
}
function me(_0x5f07b8, _0xc19a79, _0x59857e, _0x492a49 = "convert-paragraph") {
  if (_0xc19a79 == null || _0x59857e == null) {
    let _0x13aa9a = ge(_0x5f07b8);
    return { startOffset: _0x13aa9a, endOffset: _0x13aa9a };
  }
  let _0xe40b9e = Math.min(_0xc19a79, _0x59857e),
    _0x3b7a57 = Math.max(_0xc19a79, _0x59857e),
    _0x2eeb52 = xe(_0x5f07b8, _0xe40b9e, _0x3b7a57);
  return _0xe40b9e === _0x3b7a57
    ? _0x492a49 === "insert-new"
      ? { startOffset: _0xe40b9e, endOffset: _0x3b7a57 }
      : he(_0x5f07b8, _0xe40b9e, _0x2eeb52)
    : ve(_0x5f07b8, _0xe40b9e, _0x3b7a57, _0x2eeb52);
}
function he(_0x20b934, _0x84976a, _0x4975cf) {
  let _0x5b20cd = ye(_0x20b934, _0x84976a);
  if (_0x5b20cd) {
    let _0x38ea0d = T(_0x20b934, _0x5b20cd, _0x4975cf);
    if (_0x38ea0d < _0x5b20cd.startIndex)
      return {
        startOffset: _0x38ea0d,
        endOffset: _0x4975cf
          ? Math.min(_0x5b20cd.startIndex + 1, _0x4975cf.endOffset)
          : _0x5b20cd.startIndex + 1,
      };
  }
  let _0x4bbdbb =
    _0x84976a === 0 &&
    _0x20b934.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"]
      ? 1
      : _0x84976a;
  return { startOffset: _0x4bbdbb, endOffset: _0x4bbdbb };
}
function ge(_0x506033) {
  return _0x506033.dataStream["endsWith"](
    e.DataStreamTreeTokenType["SECTION_BREAK"],
  )
    ? Math.max(0, _0x506033.dataStream["length"] - 1)
    : _0x506033.dataStream["length"];
}
function _e(_0x40c49c, _0x3964d5, _0xac89c4) {
  var _0x581bbc;
  let _0x50f94d = Math.min(_0x3964d5, _0xac89c4),
    _0x45f9db = Math.max(_0x3964d5, _0xac89c4);
  return !!(
    (_0x581bbc = _0x40c49c.tables) != null &&
    _0x581bbc.some(
      (_0x4b0303) =>
        (_0x50f94d > _0x4b0303.startIndex && _0x50f94d < _0x4b0303.endIndex) ||
        (_0x45f9db > _0x4b0303.startIndex && _0x45f9db < _0x4b0303.endIndex) ||
        (_0x50f94d <= _0x4b0303.startIndex && _0x45f9db >= _0x4b0303.endIndex),
    )
  );
}
function ve(_0x2213d4, _0x38b7c0, _0x425f87, _0x217a35) {
  let _0x2094b5 = [...(_0x2213d4.paragraphs ?? [])].sort(
      (_0x54405c, _0x4720b6) => _0x54405c.startIndex - _0x4720b6.startIndex,
    ),
    _0x2e1487 = (0, e.getParagraphContentStartOffsets)(_0x2213d4),
    _0x2d998c = _0x2094b5.find(
      (_0x2c6123) =>
        T(_0x2213d4, _0x2c6123, _0x217a35, _0x2e1487) <= _0x38b7c0 &&
        _0x38b7c0 <= _0x2c6123.startIndex,
    ),
    _0x4a5b36 =
      _0x2094b5.find((_0x4fab18) => _0x4fab18.startIndex >= _0x425f87 - 1) ??
      _0x2094b5[_0x2094b5.length - 1];
  return {
    startOffset: _0x2d998c
      ? T(_0x2213d4, _0x2d998c, _0x217a35, _0x2e1487)
      : _0x38b7c0,
    endOffset: _0x4a5b36 ? be(_0x4a5b36, _0x217a35) : _0x425f87,
  };
}
function ye(_0x8d1c50, _0x4b57a5) {
  let _0x55c64e = [...(_0x8d1c50.paragraphs ?? [])].sort(
      (_0x2e9ae9, _0x59a296) => _0x2e9ae9.startIndex - _0x59a296.startIndex,
    ),
    _0x5080f7 = (0, e.getParagraphContentStartOffsets)(_0x8d1c50);
  return _0x55c64e.find(
    (_0x14fb85) =>
      (_0x5080f7.get(_0x14fb85.startIndex) ?? 0) <= _0x4b57a5 &&
      _0x4b57a5 <= _0x14fb85.startIndex,
  );
}
function T(_0x3526ca, _0x54b469, _0x1c4a88, _0x2a1d30) {
  let _0x53f906 =
    (_0x2a1d30 == null ? undefined : _0x2a1d30.get(_0x54b469.startIndex)) ??
    (0, e.getParagraphContentStartOffset)(_0x3526ca, _0x54b469);
  return _0x1c4a88 ? Math.max(_0x53f906, _0x1c4a88.startOffset) : _0x53f906;
}
function be(_0x351459, _0x10ec96) {
  let _0x5ed953 = _0x351459.startIndex + 1;
  return _0x10ec96 ? Math.min(_0x5ed953, _0x10ec96.endOffset) : _0x5ed953;
}
function xe(_0x3d59cf, _0x44e1da, _0x8d6bc6) {
  let _0x21d66d = E(_0x3d59cf, _0x44e1da),
    _0x2bda16 = E(
      _0x3d59cf,
      _0x44e1da === _0x8d6bc6 ? _0x8d6bc6 : Math.max(_0x44e1da, _0x8d6bc6 - 1),
    );
  if (!(!_0x21d66d && !_0x2bda16)) {
    if (
      !_0x21d66d ||
      !_0x2bda16 ||
      _0x21d66d.startTokenOffset !== _0x2bda16.startTokenOffset ||
      _0x21d66d.endTokenOffset !== _0x2bda16.endTokenOffset
    )
      throw new _();
    return _0x21d66d;
  }
}
function E(_0x3e8c13, _0x4dc20b) {
  let _0x41a8e6 = _0x3e8c13.dataStream,
    _0x297717 = -1;
  for (
    let _0x477454 = Math.min(_0x4dc20b, _0x41a8e6.length - 1);
    _0x477454 >= 0;
    _0x477454--
  ) {
    let _0x37fa9a = _0x41a8e6[_0x477454];
    if (_0x37fa9a === e.DataStreamTreeTokenType["TABLE_CELL_END"]) return;
    if (_0x37fa9a === e.DataStreamTreeTokenType["TABLE_CELL_START"]) {
      _0x297717 = _0x477454;
      break;
    }
  }
  if (_0x297717 < 0) return;
  let _0x14ada8 = _0x41a8e6.indexOf(
    e.DataStreamTreeTokenType["TABLE_CELL_END"],
    _0x297717 + 1,
  );
  if (!(
    _0x14ada8 < 0 ||
    _0x4dc20b < _0x297717 + 1 ||
    _0x4dc20b > _0x14ada8 - 1
  ))
    return {
      startOffset: _0x297717 + 1,
      endOffset: Math.max(_0x297717 + 1, _0x14ada8 - 1),
      startTokenOffset: _0x297717,
      endTokenOffset: _0x14ada8,
    };
}
function D(_0x1032cf) {
  return (0, e.getBlockRangeInterval)(_0x1032cf).endOffset - 1;
}
function Se(_0x1454d4, _0x1b7b0c, _0x10e353, _0x47bc17) {
  let _0x2c8c09 = D(_0x1b7b0c),
    _0x111da0 = (_0x1454d4.paragraphs ?? []).find(
      (_0x25fc67) => _0x25fc67.startIndex === _0x2c8c09 + 1,
    );
  if (
    !_0x111da0 ||
    (_0x47bc17 != null && _0x111da0.startIndex !== _0x47bc17) ||
    (_0x10e353 != null &&
      (_0x10e353 < _0x2c8c09 || _0x10e353 > _0x111da0.startIndex + 1)) ||
    _0x1454d4.dataStream[_0x111da0.startIndex] !==
      e.DataStreamTreeTokenType["PARAGRAPH"]
  )
    return null;
  let _0x4c1396 = (0, e.getParagraphContentStartOffset)(_0x1454d4, _0x111da0),
    _0x3fdd66 = _0x1454d4.dataStream["slice"](_0x4c1396, _0x111da0.startIndex);
  return Array.from(_0x3fdd66).every(
    (_0x39a254) => _0x39a254 === e.DataStreamTreeTokenType["BLOCK_END"],
  )
    ? { paragraph: _0x111da0, endTokenOffset: _0x2c8c09 }
    : null;
}
function O(_0x2857e1, _0x59efef) {
  var _0xd7582f;
  let _0x51f912 = D(_0x59efef),
    _0xc1634e = _0x2857e1.dataStream[_0x51f912 + 1];
  (_0xc1634e === e.DataStreamTreeTokenType["SECTION_BREAK"] ||
    _0xc1634e === undefined) &&
    k(_0x2857e1, _0x51f912 + 1, e.DataStreamTreeTokenType["PARAGRAPH"], {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0xd7582f = _0x2857e1.paragraphs) == null
                ? undefined
                : _0xd7582f.map((_0x8cf5d) => _0x8cf5d.paragraphId),
            ),
          ),
        },
      ],
    });
}
function k(_0xc05270, _0x2bbac5, _0x4eac52, _0x4e0af3 = {}) {
  var _0x126df2, _0x362a45;
  _0x4eac52 &&
    ((_0xc05270.dataStream =
      "" +
      _0xc05270.dataStream["slice"](0, _0x2bbac5) +
      _0x4eac52 +
      _0xc05270.dataStream["slice"](_0x2bbac5)),
    Ce(_0xc05270, _0x2bbac5, _0x4eac52.length),
    (_0x126df2 = _0x4e0af3.paragraphs) != null &&
      _0x126df2.length &&
      (_0xc05270.paragraphs = [
        ...(_0xc05270.paragraphs ?? []),
        ..._0x4e0af3.paragraphs["map"]((_0x29f1c1) => ({
          ..._0x29f1c1,
          startIndex: _0x29f1c1.startIndex + _0x2bbac5,
        })),
      ].sort(
        (_0x27d516, _0x4ff8f3) => _0x27d516.startIndex - _0x4ff8f3.startIndex,
      )),
    (_0x362a45 = _0x4e0af3.blockRanges) != null &&
      _0x362a45.length &&
      (_0xc05270.blockRanges = [
        ...(_0xc05270.blockRanges ?? []),
        ..._0x4e0af3.blockRanges["map"]((_0xe2a18d) => ({
          ..._0xe2a18d,
          startIndex: _0xe2a18d.startIndex + _0x2bbac5,
          endIndex: _0xe2a18d.endIndex + _0x2bbac5,
        })),
      ].sort(
        (_0x4df487, _0x411b90) => _0x4df487.startIndex - _0x411b90.startIndex,
      )));
}
function A(_0x118722, _0x11553a, _0x492538) {
  let _0x4f4846 = _0x492538 - _0x11553a;
  ((_0x118722.dataStream =
    "" +
    _0x118722.dataStream["slice"](0, _0x11553a) +
    _0x118722.dataStream["slice"](_0x492538)),
    we(_0x118722, _0x11553a, _0x4f4846));
}
function Ce(_0x51f0b7, _0x418e3d, _0x3bd8eb) {
  ((_0x51f0b7.paragraphs = j(_0x51f0b7.paragraphs, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.sectionBreaks = j(
      _0x51f0b7.sectionBreaks,
      _0x418e3d,
      _0x3bd8eb,
    )),
    (_0x51f0b7.customBlocks = j(_0x51f0b7.customBlocks, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.textRuns = Te(_0x51f0b7.textRuns, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.tables = Ee(_0x51f0b7.tables, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.columnGroups = N(_0x51f0b7.columnGroups, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.customRanges = N(_0x51f0b7.customRanges, _0x418e3d, _0x3bd8eb)),
    (_0x51f0b7.customDecorations = N(
      _0x51f0b7.customDecorations,
      _0x418e3d,
      _0x3bd8eb,
    )),
    (_0x51f0b7.blockRanges = N(_0x51f0b7.blockRanges, _0x418e3d, _0x3bd8eb)));
}
function we(_0x156c7c, _0x4cda06, _0xc2ca2c) {
  var _0xdb64a7, _0x1c8960;
  ((_0x156c7c.paragraphs = M(_0x156c7c.paragraphs, _0x4cda06, _0xc2ca2c)),
    (_0x156c7c.sectionBreaks = M(
      _0x156c7c.sectionBreaks,
      _0x4cda06,
      _0xc2ca2c,
    )),
    (_0x156c7c.customBlocks = M(_0x156c7c.customBlocks, _0x4cda06, _0xc2ca2c)),
    (_0x156c7c.textRuns =
      (_0xdb64a7 = F(
        (_0x1c8960 = _0x156c7c.textRuns) == null
          ? undefined
          : _0x1c8960.map((_0x1164df) => ({
              ..._0x1164df,
              startIndex: _0x1164df.st,
              endIndex: _0x1164df.ed,
            })),
        _0x4cda06,
        _0xc2ca2c,
      )) == null
        ? undefined
        : _0xdb64a7.map((_0x777877) => {
            let {
              startIndex: _0x552556,
              endIndex: _0x5a0af8,
              ..._0x3eced2
            } = _0x777877;
            return { ..._0x3eced2, st: _0x552556, ed: _0x5a0af8 };
          })),
    (_0x156c7c.tables = F(_0x156c7c.tables, _0x4cda06, _0xc2ca2c)),
    (_0x156c7c.columnGroups = P(_0x156c7c.columnGroups, _0x4cda06, _0xc2ca2c)),
    (_0x156c7c.customRanges = P(_0x156c7c.customRanges, _0x4cda06, _0xc2ca2c)),
    (_0x156c7c.customDecorations = P(
      _0x156c7c.customDecorations,
      _0x4cda06,
      _0xc2ca2c,
    )),
    (_0x156c7c.blockRanges = P(_0x156c7c.blockRanges, _0x4cda06, _0xc2ca2c)));
}
function j(_0x204720, _0x37d6cb, _0x122396) {
  return _0x204720 == null
    ? undefined
    : _0x204720.map((_0x6c2310) =>
        _0x6c2310.startIndex >= _0x37d6cb
          ? { ..._0x6c2310, startIndex: _0x6c2310.startIndex + _0x122396 }
          : _0x6c2310,
      );
}
function M(_0x26b29a, _0x3bce07, _0x5c03bb) {
  let _0x450008 = _0x3bce07 + _0x5c03bb;
  return _0x26b29a == null
    ? undefined
    : _0x26b29a
        .map((_0x58f84b) =>
          _0x58f84b.startIndex >= _0x3bce07 && _0x58f84b.startIndex < _0x450008
            ? null
            : _0x58f84b.startIndex >= _0x450008
              ? { ..._0x58f84b, startIndex: _0x58f84b.startIndex - _0x5c03bb }
              : _0x58f84b,
        )
        .filter((_0x3488b7) => _0x3488b7 != null);
}
function Te(_0x277bfc, _0x869374, _0x5afeae) {
  return _0x277bfc == null
    ? undefined
    : _0x277bfc.map((_0x41a1fb) =>
        _0x41a1fb.st >= _0x869374
          ? {
              ..._0x41a1fb,
              st: _0x41a1fb.st + _0x5afeae,
              ed: _0x41a1fb.ed + _0x5afeae,
            }
          : _0x41a1fb.ed > _0x869374
            ? { ..._0x41a1fb, ed: _0x41a1fb.ed + _0x5afeae }
            : _0x41a1fb,
      );
}
function N(_0x20295d, _0x5dfc2a, _0x40515f) {
  return _0x20295d == null
    ? undefined
    : _0x20295d.map((_0x3d5362) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x3d5362, _0x5dfc2a, _0x40515f),
      );
}
function Ee(_0x17a8ea, _0x1b5670, _0x32e6a7) {
  return _0x17a8ea == null
    ? undefined
    : _0x17a8ea.map((_0x23d46d) =>
        (0, e.shiftExclusiveRangeOnInsert)(_0x23d46d, _0x1b5670, _0x32e6a7),
      );
}
function P(_0x3940df, _0x2ff6e5, _0x110def) {
  return _0x3940df == null
    ? undefined
    : _0x3940df
        .map((_0x39ca6f) =>
          (0, e.shiftInclusiveRangeOnDelete)(_0x39ca6f, _0x2ff6e5, _0x110def),
        )
        .filter((_0x3e5d62) => _0x3e5d62 != null);
}
function F(_0x455877, _0x1a8c82, _0xa83c55) {
  return _0x455877 == null
    ? undefined
    : _0x455877
        .map((_0x1593ac) =>
          (0, e.shiftExclusiveRangeOnDelete)(_0x1593ac, _0x1a8c82, _0xa83c55),
        )
        .filter((_0x2be906) => _0x2be906 != null);
}
const I = {
    id: "docs-code.command.insert-below",
    type: e.CommandType["COMMAND"],
    handler: (_0x1c5054) => {
      var _0x4500b1;
      if ((0, n.isHeaderFooterSelection)(W(_0x1c5054))) return false;
      let _0x53b27d = (0, n.getContentInsertRange)(_0x1c5054);
      if (_0x53b27d)
        return _0x1c5054
          .get(e.ICommandService)
          .syncExecuteCommand(R.id, {
            startOffset: _0x53b27d.startOffset,
            endOffset: _0x53b27d.endOffset,
            insertionMode: "insert-new",
            unitId: _0x53b27d.unitId,
          });
      let _0x3c0474 = je(_0x1c5054);
      if (!_0x3c0474) return false;
      let _0x4e9b53 =
          (_0x4500b1 = _0x1c5054
            .get(e.IUniverInstanceService)
            .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) == null
            ? undefined
            : _0x4500b1.getBody(),
        _0x50e8b8 = _0x4e9b53
          ? (0, e.getParagraphFollowingBlockOffset)(_0x4e9b53, _0x3c0474)
          : _0x3c0474.startIndex + 1;
      return _0x1c5054
        .get(e.ICommandService)
        .syncExecuteCommand(R.id, {
          startOffset: _0x50e8b8,
          endOffset: _0x50e8b8,
        });
    },
  },
  L = {
    id: "docs-code.command.consume-boundary-delete",
    type: e.CommandType["COMMAND"],
    handler: () => true,
  },
  R = {
    id: "docs-code.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (_0x3448cd, _0x597a46) => {
      let _0x41a266 = U(
        _0x3448cd,
        _0x597a46 == null ? undefined : _0x597a46.unitId,
      );
      if (!_0x41a266) return false;
      let _0x392e4d = W(_0x3448cd);
      if ((0, n.isHeaderFooterSelection)(_0x392e4d)) return false;
      let _0x407ddb = _0x41a266.model["serialize"](_0x41a266.unitId),
        _0x1e34b6 = Oe(_0x597a46, _0x392e4d),
        _0xa209dd = ke(_0x41a266.previousDocumentData, _0x1e34b6);
      if (_0xa209dd) {
        if (_0xa209dd.blockType !== e.DocumentBlockRangeType["CODE"])
          return false;
        let _0x1f5696 = v({
          blockId: _0xa209dd.blockId,
          documentData: _0x41a266.previousDocumentData,
          metadata: _0x407ddb,
        });
        if (!_0x1f5696) return false;
        let _0x2bae03 = J(
          _0x41a266.commandService,
          _0x41a266.selectionManager,
          _0x41a266.unitId,
          _0x41a266.previousDocumentData,
          _0x1f5696.nextDocumentData,
          R.id,
          _0x1f5696.cursorOffset,
        );
        return (
          _0x2bae03 &&
            _0x1f5696.nextMetadata &&
            _0x41a266.model["deserialize"](
              _0x41a266.unitId,
              _0x1f5696.nextMetadata,
            ),
          _0x2bae03
        );
      }
      let _0xa5b899 =
          (_0x597a46 == null ? undefined : _0x597a46.blockId) ??
          (0, e.generateRandomId)(6),
        _0x3b91a4;
      try {
        _0x3b91a4 = ee({
          blockId: _0xa5b899,
          config: _0x597a46 == null ? undefined : _0x597a46.config,
          documentData: _0x41a266.previousDocumentData,
          endOffset: _0x1e34b6 == null ? undefined : _0x1e34b6.endOffset,
          insertionMode:
            _0x597a46 == null ? undefined : _0x597a46.insertionMode,
          metadata: _0x407ddb,
          startOffset: _0x1e34b6 == null ? undefined : _0x1e34b6.startOffset,
        });
      } catch (_0x582f88) {
        if (_0x582f88 instanceof _) return false;
        throw _0x582f88;
      }
      let _0x2ace00 = J(
        _0x41a266.commandService,
        _0x41a266.selectionManager,
        _0x41a266.unitId,
        _0x41a266.previousDocumentData,
        _0x3b91a4.nextDocumentData,
        R.id,
        _0x3b91a4.cursorOffset,
      );
      return (
        _0x2ace00 &&
          _0x3b91a4.nextMetadata &&
          _0x41a266.model["deserialize"](
            _0x41a266.unitId,
            _0x3b91a4.nextMetadata,
          ),
        _0x2ace00
      );
    },
  },
  z = {
    id: "docs-code.command.update",
    type: e.CommandType["COMMAND"],
    handler: (_0x36247a, _0x3e9164) => {
      if (!_0x3e9164) return false;
      let _0x38d418 = U(_0x36247a, _0x3e9164.unitId);
      if (!_0x38d418) return false;
      let _0x24ba24 = ie({
        blockId: _0x3e9164.blockId,
        config: _0x3e9164.config,
        documentData: _0x38d418.previousDocumentData,
        metadata: _0x38d418.model["serialize"](_0x38d418.unitId),
      });
      return (
        _0x24ba24.nextMetadata &&
          _0x38d418.model["deserialize"](
            _0x38d418.unitId,
            _0x24ba24.nextMetadata,
          ),
        true
      );
    },
  },
  De = {
    id: "docs-code.command.exit",
    type: e.CommandType["COMMAND"],
    handler: (_0xd9a264, _0xeaeffb) => B.handler(_0xd9a264, _0xeaeffb),
  },
  B = {
    id: "docs-code.command.unwrap",
    type: e.CommandType["COMMAND"],
    handler: (_0x3704a5, _0x2e2358) => {
      if (!_0x2e2358) return false;
      let _0x3f29b6 = U(
        _0x3704a5,
        _0x2e2358 == null ? undefined : _0x2e2358.unitId,
      );
      if (!_0x3f29b6) return false;
      let _0x24bff0 = v({
        blockId: _0x2e2358.blockId,
        documentData: _0x3f29b6.previousDocumentData,
        metadata: _0x3f29b6.model["serialize"](_0x3f29b6.unitId),
      });
      if (!_0x24bff0) return false;
      let _0x3ccf52 = J(
        _0x3f29b6.commandService,
        _0x3f29b6.selectionManager,
        _0x3f29b6.unitId,
        _0x3f29b6.previousDocumentData,
        _0x24bff0.nextDocumentData,
        B.id,
        _0x24bff0.cursorOffset,
      );
      return (
        _0x3ccf52 &&
          _0x24bff0.nextMetadata &&
          _0x3f29b6.model["deserialize"](
            _0x3f29b6.unitId,
            _0x24bff0.nextMetadata,
          ),
        _0x3ccf52
      );
    },
  },
  V = {
    id: "docs-code.command.remove",
    type: e.CommandType["COMMAND"],
    handler: (_0x42abf9, _0x5d4c36) => {
      if (!_0x5d4c36) return false;
      let _0x2de446 = U(
        _0x42abf9,
        _0x5d4c36 == null ? undefined : _0x5d4c36.unitId,
      );
      if (!_0x2de446) return false;
      let _0x252468 = ae({
        blockId: _0x5d4c36.blockId,
        documentData: _0x2de446.previousDocumentData,
        metadata: _0x2de446.model["serialize"](_0x2de446.unitId),
      });
      if (!_0x252468) return false;
      let _0x1d56b6 = J(
        _0x2de446.commandService,
        _0x2de446.selectionManager,
        _0x2de446.unitId,
        _0x2de446.previousDocumentData,
        _0x252468.nextDocumentData,
        V.id,
        _0x252468.cursorOffset,
      );
      return (
        _0x1d56b6 &&
          _0x252468.nextMetadata &&
          _0x2de446.model["deserialize"](
            _0x2de446.unitId,
            _0x252468.nextMetadata,
          ),
        _0x1d56b6
      );
    },
  },
  H = {
    id: "docs-code.command.cancel-empty-paragraph",
    type: e.CommandType["COMMAND"],
    handler: (_0xf8c309, _0xed9ce5) => {
      var _0x5fe74f;
      let _0x4eb555 = U(
        _0xf8c309,
        _0xed9ce5 == null ? undefined : _0xed9ce5.unitId,
      );
      if (!_0x4eb555) return false;
      let _0xb83e0 =
        (_0xed9ce5 == null ? undefined : _0xed9ce5.cursorOffset) ??
        ((_0x5fe74f = W(_0xf8c309)) == null
          ? undefined
          : _0x5fe74f.startOffset);
      if (_0xb83e0 == null) return false;
      let _0x14ced2 = y({
        cursorOffset: _0xb83e0,
        documentData: _0x4eb555.previousDocumentData,
        paragraphStartIndex:
          _0xed9ce5 == null ? undefined : _0xed9ce5.paragraphStartIndex,
      });
      return _0x14ced2
        ? J(
            _0x4eb555.commandService,
            _0x4eb555.selectionManager,
            _0x4eb555.unitId,
            _0x4eb555.previousDocumentData,
            _0x14ced2.nextDocumentData,
            H.id,
            _0x14ced2.cursorOffset,
          )
        : false;
    },
  };
function U(_0x3c0371, _0x50f3ae) {
  let _0x4e62a3 = _0x3c0371.get(e.IUniverInstanceService),
    _0x41fa98 = _0x50f3ae
      ? _0x4e62a3.getUnit(_0x50f3ae, e.UniverInstanceType["UNIVER_DOC"])
      : _0x4e62a3.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
  return _0x41fa98
    ? {
        commandService: _0x3c0371.get(e.ICommandService),
        model: _0x3c0371.get(p),
        previousDocumentData: _0x41fa98.getSnapshot(),
        selectionManager: _0x3c0371.get(n.DocSelectionManagerService),
        unitId: _0x41fa98.getUnitId(),
      }
    : null;
}
function W(_0x393055) {
  var _0x6e627c;
  return (_0x6e627c = _0x393055
    .get(n.DocSelectionManagerService)
    .getTextRanges()) == null
    ? undefined
    : _0x6e627c[0];
}
function Oe(_0x20a635, _0x54a27f) {
  let _0x4c760f =
      (_0x20a635 == null ? undefined : _0x20a635.startOffset) ??
      (_0x54a27f == null ? undefined : _0x54a27f.startOffset),
    _0x3ea838 =
      (_0x20a635 == null ? undefined : _0x20a635.endOffset) ??
      (_0x54a27f == null ? undefined : _0x54a27f.endOffset);
  if (_0x4c760f != null && _0x3ea838 != null)
    return {
      endOffset: Math.max(_0x4c760f, _0x3ea838),
      startOffset: Math.min(_0x4c760f, _0x3ea838),
    };
}
function ke(_0x1700ab, _0x2d4d53) {
  var _0x2db76d;
  if (!_0x2d4d53) return;
  let _0xbafade = Ae(_0x2d4d53);
  return (_0x2db76d = _0x1700ab.body) == null ||
    (_0x2db76d = _0x2db76d.blockRanges) == null
    ? undefined
    : _0x2db76d.find((_0x4d9f5b) => {
        let _0x3edfdf = (0, e.getBlockRangeInterval)(_0x4d9f5b);
        return _0x2d4d53.startOffset === _0x2d4d53.endOffset
          ? (0, e.containsInteriorInsertionOffset)(_0x3edfdf, _0xbafade)
          : (0, e.containsStreamIndex)(_0x3edfdf, _0xbafade);
      });
}
function Ae(_0x171281) {
  return _0x171281.startOffset === _0x171281.endOffset
    ? _0x171281.startOffset
    : _0x171281.startOffset + 1;
}
function je(_0x42748b) {
  let _0xe3a838 = W(_0x42748b);
  if (!_0xe3a838) return null;
  let _0x39be24 = _0x42748b
      .get(e.IUniverInstanceService)
      .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    _0x5e7a4e = _0x39be24 == null ? undefined : _0x39be24.getBody();
  return _0x5e7a4e
    ? (e.BuildTextUtils["range"].getParagraphsInRange(
        _0xe3a838,
        _0x5e7a4e.paragraphs ?? [],
        _0x5e7a4e.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function Me(_0x256e4e, _0xa8441b) {
  let _0x1fda79 = _0x256e4e.body,
    _0x2b5c63 = _0xa8441b.body,
    _0x3b3186 = (0, e.getSingleDataStreamChange)(_0x1fda79, _0x2b5c63);
  return [
    _0x3b3186 && _0x2b5c63 ? Ne(_0x2b5c63, _0x3b3186) : null,
    _0x3b3186 ? null : Pe(_0x1fda79, _0x2b5c63),
  ]
    .filter(Boolean)
    .reduce(
      (_0x1736c0, _0x4e3066) => e.JSONX["compose"](_0x1736c0, _0x4e3066),
      null,
    );
}
function Ne(_0x159902, _0x41a4da) {
  let _0x4d5819 = new e["TextX"]();
  return (
    _0x4d5819.retain(_0x41a4da.start),
    _0x41a4da.insertLength > 0 &&
      _0x4d5819.insert(
        _0x41a4da.insertLength,
        (0, e.getBodySliceForTextXAction)(
          _0x159902,
          _0x41a4da.start,
          _0x41a4da.start + _0x41a4da.insertLength,
          false,
        ),
      ),
    _0x41a4da.deleteLength > 0 && _0x4d5819.delete(_0x41a4da.deleteLength),
    e.JSONX["getInstance"]().editOp(_0x4d5819.serialize(), ["body"])
  );
}
function Pe(_0x12a445, _0x44c950) {
  let _0x4dd3e1 = [],
    _0x558f96 = _0x12a445 ? G(_0x12a445) : undefined,
    _0x20beed = _0x44c950 ? G(_0x44c950) : undefined;
  for (let _0x472d65 of Fe)
    K(
      e.JSONX["getInstance"](),
      ["body", _0x472d65],
      _0x558f96 == null ? undefined : _0x558f96[_0x472d65],
      _0x20beed == null ? undefined : _0x20beed[_0x472d65],
      _0x4dd3e1,
    );
  return _0x4dd3e1.reduce(
    (_0x53dff1, _0xd5a8b8) => e.JSONX["compose"](_0x53dff1, _0xd5a8b8),
    null,
  );
}
const Fe = [
  "paragraphs",
  "sectionBreaks",
  "tables",
  "columnGroups",
  "blockRanges",
  "customBlocks",
  "customRanges",
  "customDecorations",
  "textRuns",
];
function G(_0x27baa9) {
  return _0x27baa9;
}
function K(_0x28e25d, _0x4425cd, _0x5d9250, _0x254b33, _0x166faa) {
  if (!q(_0x5d9250, _0x254b33)) {
    if (_0x5d9250 == null) {
      _0x166faa.push(_0x28e25d.insertOp(_0x4425cd, _0x254b33));
      return;
    }
    if (_0x254b33 == null) {
      _0x166faa.push(_0x28e25d.removeOp(_0x4425cd, _0x5d9250));
      return;
    }
    if (Array.isArray(_0x5d9250) && Array.isArray(_0x254b33)) {
      Ie(_0x28e25d, _0x4425cd, _0x5d9250, _0x254b33, _0x166faa);
      return;
    }
    if (Le(_0x5d9250) && Le(_0x254b33)) {
      new Set([...Object.keys(_0x5d9250), ...Object.keys(_0x254b33)]).forEach(
        (_0x34b16f) => {
          K(
            _0x28e25d,
            [..._0x4425cd, _0x34b16f],
            _0x5d9250[_0x34b16f],
            _0x254b33[_0x34b16f],
            _0x166faa,
          );
        },
      );
      return;
    }
    _0x166faa.push(_0x28e25d.replaceOp(_0x4425cd, _0x5d9250, _0x254b33));
  }
}
function Ie(_0x1e24d9, _0x564775, _0x54c144, _0x2b2e54, _0x3084d7) {
  if (_0x54c144.length === _0x2b2e54.length) {
    _0x54c144.forEach((_0x3dd4b4, _0x588ae2) =>
      K(
        _0x1e24d9,
        [..._0x564775, _0x588ae2],
        _0x3dd4b4,
        _0x2b2e54[_0x588ae2],
        _0x3084d7,
      ),
    );
    return;
  }
  let _0x54394a = 0;
  for (
    ;
    _0x54394a < _0x54c144.length &&
    _0x54394a < _0x2b2e54.length &&
    q(_0x54c144[_0x54394a], _0x2b2e54[_0x54394a]);
  )
    _0x54394a++;
  let _0x4344e6 = _0x54c144.length - 1,
    _0x115338 = _0x2b2e54.length - 1;
  for (
    ;
    _0x4344e6 >= _0x54394a &&
    _0x115338 >= _0x54394a &&
    q(_0x54c144[_0x4344e6], _0x2b2e54[_0x115338]);
  )
    (_0x4344e6--, _0x115338--);
  for (let _0x4d55a0 = _0x4344e6; _0x4d55a0 >= _0x54394a; _0x4d55a0--)
    _0x3084d7.push(
      _0x1e24d9.removeOp([..._0x564775, _0x4d55a0], _0x54c144[_0x4d55a0]),
    );
  for (let _0x37612e = _0x54394a; _0x37612e <= _0x115338; _0x37612e++)
    _0x3084d7.push(
      _0x1e24d9.insertOp([..._0x564775, _0x37612e], _0x2b2e54[_0x37612e]),
    );
}
function Le(_0x13b672) {
  return (
    typeof _0x13b672 == "object" && !!_0x13b672 && !Array.isArray(_0x13b672)
  );
}
function q(_0x22d6c4, _0x388f34) {
  return JSON.stringify(_0x22d6c4) === JSON.stringify(_0x388f34);
}
function J(
  _0x418d44,
  _0x5353e7,
  _0x251308,
  _0x2f7417,
  _0x4ee74d,
  _0x215a8e,
  _0x9e5a9b,
) {
  let _0x57f001 = Me(_0x2f7417, _0x4ee74d);
  return _0x57f001
    ? !!_0x418d44.syncExecuteCommand(n.RichTextEditingMutation["id"], {
        unitId: _0x251308,
        actions: _0x57f001,
        textRanges: [
          { startOffset: _0x9e5a9b, endOffset: _0x9e5a9b, collapsed: true },
        ],
        isEditing: false,
        trigger: _0x215a8e,
      })
    : (_0x5353e7.replaceDocRanges(
        [{ startOffset: _0x9e5a9b, endOffset: _0x9e5a9b }],
        { unitId: _0x251308, subUnitId: _0x251308 },
        false,
      ),
      true);
}
const Y = "DOC_CODE_PLUGIN";
var Re = "@univerjs-pro/docs-code",
  ze = "1.0.0-insiders.20260907-70fc579";
const Be = {};
function X(_0x2421d4, _0x36341f) {
  return function (_0x3c3a09, _0x1a35fb) {
    _0x36341f(_0x3c3a09, _0x1a35fb, _0x2421d4);
  };
}
function Z(_0x5d4cd8, _0x53beef, _0x2be06f, _0x48547c) {
  var _0x15b81d = arguments.length,
    _0x523f05 =
      _0x15b81d < 3
        ? _0x53beef
        : _0x48547c === null
          ? (_0x48547c = Object.getOwnPropertyDescriptor(_0x53beef, _0x2be06f))
          : _0x48547c,
    _0xad4d2a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x523f05 = Reflect.decorate(_0x5d4cd8, _0x53beef, _0x2be06f, _0x48547c);
  else {
    for (var _0x2c9f63 = _0x5d4cd8.length - 1; _0x2c9f63 >= 0; _0x2c9f63--)
      (_0xad4d2a = _0x5d4cd8[_0x2c9f63]) &&
        (_0x523f05 =
          (_0x15b81d < 3
            ? _0xad4d2a(_0x523f05)
            : _0x15b81d > 3
              ? _0xad4d2a(_0x53beef, _0x2be06f, _0x523f05)
              : _0xad4d2a(_0x53beef, _0x2be06f)) || _0x523f05);
  }
  return (
    _0x15b81d > 3 &&
      _0x523f05 &&
      Object.defineProperty(_0x53beef, _0x2be06f, _0x523f05),
    _0x523f05
  );
}
let Q = class extends e.Disposable {
  constructor(_0x54abbf, _0x5a3645) {
    (super(),
      (this._resourceManagerService = _0x54abbf),
      (this._docsCodeModel = _0x5a3645),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: Y,
        businesses: [e.UniverInstanceType["UNIVER_DOC"]],
        toJson: (_0x241d84) =>
          JSON.stringify(this._docsCodeModel["serialize"](_0x241d84)),
        parseJson: (_0x3221fd) => o(JSON.parse(_0x3221fd)),
        onLoad: (_0x32519b, _0x9d6972) =>
          this._docsCodeModel["deserialize"](_0x32519b, _0x9d6972),
        onUnLoad: (_0x272a42) => this._docsCodeModel["removeUnit"](_0x272a42),
      }),
    );
  }
};
Q = Z([X(0, e.IResourceManagerService), X(1, (0, e.Inject)(p))], Q);
let $ = class extends e.Plugin {
  constructor(_0x185b52 = Be, _0x1270d2, _0xbc2f54, _0x51cb6b) {
    (super(),
      (this._config = _0x185b52),
      (this._injector = _0x1270d2),
      (this._commandService = _0xbc2f54),
      (this._configService = _0x51cb6b));
    let { ..._0x53e7bf } = (0, e.merge)({}, Be, this._config);
    this._configService["setConfig"]("docs-code.config", _0x53e7bf);
  }
  onStarting() {
    (this._injector["add"]([p]),
      this._injector["add"]([Q]),
      this._injector["get"](p),
      this._injector["get"](Q),
      [R, I, z, B, V, De, H, L, m, h].forEach((_0x413d33) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x413d33)),
      ));
  }
};
(f($, "pluginName", Y),
  f($, "packageName", Re),
  f($, "version", ze),
  f($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = Z(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin, n.UniverDocsPlugin),
      X(1, (0, e.Inject)(e.Injector)),
      X(2, e.ICommandService),
      X(3, e.IConfigService),
    ],
    $,
  )),
  (exports.DOCS_CODE_PLUGIN = Y),
  (exports.DocsCodeCancelEmptyParagraphCommand = H),
  (exports.DocsCodeConsumeBoundaryDeleteCommand = L),
  (exports.DocsCodeInsertBelowCommand = I),
  (exports.DocsCodeInsertCommand = R),
  (exports.DocsCodeModel = p),
  (exports.DocsCodeRemoveCommand = V),
  (exports.DocsCodeUnwrapCommand = B),
  (exports.DocsCodeUpdateCommand = z),
  (exports.RemoveDocsCodeConfigMutation = h),
  (exports.SetDocsCodeConfigMutation = m),
  Object.defineProperty(exports, "UniverDocsCodePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildCancelEmptyCodeParagraphActions = y),
  (exports.isCodeBoundaryDelete = se),
  (exports.normalizeDocsCodeConfig = a),
  (exports.normalizeDocsCodeMetadataResource = o));
