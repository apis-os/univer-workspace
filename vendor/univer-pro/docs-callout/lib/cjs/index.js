Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("rxjs"),
  n = require("@univerjs/docs"),
  r = require("@univerjs-pro/license");
const i = {
  icon: "🎨",
  showIcon: true,
  backgroundColor: "",
  borderColor: "",
  borderWidth: 1,
  borderOpacity: 1,
  borderStyle: e.DashStyleType["SOLID"],
  borderRadius: 8,
  paddingTop: 16,
  paddingRight: 20,
  paddingBottom: 16,
  paddingLeft: 20,
  iconSize: 24,
  iconGap: 16,
};
function a(_0x22fcf7) {
  let _0x1972c0 = (_0x22fcf7 == null ? undefined : _0x22fcf7.callouts) ?? {};
  return {
    callouts: Object.fromEntries(
      Object.entries(_0x1972c0).map(([_0x2b05d4, _0x57eaa0]) => [
        _0x2b05d4,
        o(_0x57eaa0),
      ]),
    ),
  };
}
function o(_0x404530) {
  return {
    icon: s(_0x404530, "icon"),
    showIcon: s(_0x404530, "showIcon"),
    backgroundColor: s(_0x404530, "backgroundColor"),
    borderColor: s(_0x404530, "borderColor"),
    borderWidth: s(_0x404530, "borderWidth"),
    borderOpacity: s(_0x404530, "borderOpacity"),
    borderStyle: s(_0x404530, "borderStyle"),
    borderRadius: s(_0x404530, "borderRadius"),
    paddingTop: s(_0x404530, "paddingTop"),
    paddingRight: s(_0x404530, "paddingRight"),
    paddingBottom: s(_0x404530, "paddingBottom"),
    paddingLeft: s(_0x404530, "paddingLeft"),
    iconSize: s(_0x404530, "iconSize"),
    iconGap: s(_0x404530, "iconGap"),
  };
}
function s(_0xcbf775, _0x26ed64) {
  return (_0xcbf775 == null ? undefined : _0xcbf775[_0x26ed64]) ?? i[_0x26ed64];
}
function c(_0x132a34, _0xf1c2b, _0x3dedd8) {
  let _0x470eaf = a(_0x132a34);
  return (
    (_0x470eaf.callouts[_0xf1c2b] = o({
      ..._0x470eaf.callouts[_0xf1c2b],
      ..._0x3dedd8,
    })),
    _0x470eaf
  );
}
function l(_0x34620d, _0x3a17a4) {
  let _0x434800 = a(_0x34620d);
  return (delete _0x434800.callouts[_0x3a17a4], _0x434800);
}
function u(_0x4b8dca) {
  "@babel/helpers - typeof";
  return (
    (u =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x574ee8) {
            return typeof _0x574ee8;
          }
        : function (_0x1cb955) {
            return _0x1cb955 &&
              typeof Symbol == "function" &&
              _0x1cb955.constructor === Symbol &&
              _0x1cb955 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1cb955;
          }),
    u(_0x4b8dca)
  );
}
function d(_0x52ba2b, _0x137f9f) {
  if (u(_0x52ba2b) != "object" || !_0x52ba2b) return _0x52ba2b;
  var _0x2838be = _0x52ba2b[Symbol.toPrimitive];
  if (_0x2838be !== undefined) {
    var _0x359984 = _0x2838be.call(_0x52ba2b, _0x137f9f || "default");
    if (u(_0x359984) != "object") return _0x359984;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x137f9f === "string" ? String : Number)(_0x52ba2b);
}
function f(_0x14f7dc) {
  var _0x4c58c6 = d(_0x14f7dc, "string");
  return u(_0x4c58c6) == "symbol" ? _0x4c58c6 : _0x4c58c6 + "";
}
function p(_0xa55bf8, _0x1b700a, _0x103503) {
  return (
    (_0x1b700a = f(_0x1b700a)) in _0xa55bf8
      ? Object.defineProperty(_0xa55bf8, _0x1b700a, {
          value: _0x103503,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xa55bf8[_0x1b700a] = _0x103503),
    _0xa55bf8
  );
}
var m = class extends e.Disposable {
  constructor(..._0x416ec3) {
    (super(..._0x416ec3),
      p(this, "_resources", new Map()),
      p(this, "_change$", new t["Subject"]()),
      p(this, "change$", this._change$["asObservable"]()));
  }
  getCalloutConfig(_0x5ef72e, _0x34b061) {
    return a(this._resources["get"](_0x5ef72e)).callouts[_0x34b061];
  }
  setCalloutConfig(_0x5cf36c, _0x4c0c49, _0x331abb) {
    this._setResource(
      _0x5cf36c,
      _0x4c0c49,
      c(this._resources["get"](_0x5cf36c), _0x4c0c49, _0x331abb),
    );
  }
  removeCallout(_0x3a82e0, _0x5eb15a) {
    this._setResource(
      _0x3a82e0,
      _0x5eb15a,
      l(this._resources["get"](_0x3a82e0), _0x5eb15a),
    );
  }
  serialize(_0xe81628) {
    return a(this._resources["get"](_0xe81628));
  }
  deserialize(_0x11ddb2, _0x4eaa64) {
    (this._resources["set"](_0x11ddb2, a(_0x4eaa64)),
      this._change$["next"]({ unitId: _0x11ddb2 }));
  }
  removeUnit(_0x16d788) {
    (this._resources["delete"](_0x16d788),
      this._change$["next"]({ unitId: _0x16d788 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x5b2f72, _0x2e4396, _0x15b73b) {
    (this._resources["set"](_0x5b2f72, _0x15b73b),
      this._change$["next"]({ unitId: _0x5b2f72, blockId: _0x2e4396 }));
  }
};
const h = {
    id: "docs-callout.mutation.set-config",
    type: e.CommandType["MUTATION"],
    handler: (_0x180d5f, _0x347c39) =>
      !(_0x347c39 != null && _0x347c39.unitId) || !_0x347c39.blockId
        ? false
        : (_0x180d5f
            .get(m)
            .setCalloutConfig(
              _0x347c39.unitId,
              _0x347c39.blockId,
              _0x347c39.config,
            ),
          true),
  },
  g = {
    id: "docs-callout.mutation.remove-config",
    type: e.CommandType["MUTATION"],
    handler: (_0x21c8f4, _0x26aae4) =>
      !(_0x26aae4 != null && _0x26aae4.unitId) || !_0x26aae4.blockId
        ? false
        : (_0x21c8f4.get(m).removeCallout(_0x26aae4.unitId, _0x26aae4.blockId),
          true),
  },
  ee = i.paddingLeft + i.iconSize + i.iconGap,
  te = i.paddingRight;
var _ = class extends Error {
  constructor(_0x310bfe = "Insert range cannot cross table cell boundaries") {
    super(_0x310bfe);
  }
};
function ne(_0x3ea64e) {
  var _0x5436c7;
  let _0xbcccea = S(_0x3ea64e.documentData),
    _0x2d899d = w(_0xbcccea),
    _0x1e2c2c = re(_0x3ea64e.startOffset, _0x3ea64e.endOffset),
    _0x1252c0 = _0x1e2c2c
      ? (_0x5436c7 = _0x2d899d.blockRanges) == null
        ? undefined
        : _0x5436c7.find((_0x542518) => {
            let _0x370a76 = (0, e.getBlockRangeInterval)(_0x542518);
            return (
              _0x370a76.startOffset === _0x1e2c2c.startOffset &&
              _0x370a76.endOffset === _0x1e2c2c.endOffset
            );
          })
      : undefined,
    { startOffset: _0x4b3c26, endOffset: _0x476a7f } = _0x1252c0
      ? _0x1e2c2c
      : pe(
          _0x2d899d,
          _0x3ea64e.startOffset,
          _0x3ea64e.endOffset,
          _0x3ea64e.insertionMode,
        );
  if (!_0x1252c0 && ie(_0x2d899d, _0x4b3c26, _0x476a7f))
    throw new _("Insert range cannot overlap an existing document block");
  let _0x4ab269 = ge(_0x2d899d, _0x4b3c26, _0x476a7f),
    _0x1e03ae =
      (_0x1252c0 == null ? undefined : _0x1252c0.blockId) ?? _0x3ea64e.blockId,
    _0x5d7f2c = c(_0x3ea64e.metadata, _0x1e03ae, o(_0x3ea64e.config));
  if (_0x1252c0)
    return (
      (_0x1252c0.blockType = e.DocumentBlockRangeType["CALLOUT"]),
      ae(_0x2d899d, _0x4b3c26, _0x476a7f),
      y(_0x2d899d, _0x4b3c26, _0x476a7f, _0x4ab269),
      O(_0x2d899d, _0x1252c0),
      {
        nextDocumentData: _0xbcccea,
        nextMetadata: _0x5d7f2c,
        cursorOffset: _0x4b3c26 + 1,
      }
    );
  if (_0x4b3c26 === _0x476a7f) {
    var _0x465c6e, _0x392891;
    let _0x5b1f46 =
      "" +
      e.DataStreamTreeTokenType["BLOCK_START"] +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["BLOCK_END"];
    k(_0x2d899d, _0x4b3c26, _0x5b1f46, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0x465c6e = _0x2d899d.paragraphs) == null
                ? undefined
                : _0x465c6e.map((_0x1f47f0) => _0x1f47f0.paragraphId),
            ),
          ),
          paragraphStyle: v(true, true, _0x4ab269),
        },
      ],
      blockRanges: [
        {
          blockId: _0x1e03ae,
          blockType: e.DocumentBlockRangeType["CALLOUT"],
          startIndex: 0,
          endIndex: _0x5b1f46.length - 1,
        },
      ],
    });
    let _0x27f0d5 =
      (_0x392891 = _0x2d899d.blockRanges) == null
        ? undefined
        : _0x392891.find((_0x329906) => _0x329906.blockId === _0x1e03ae);
    return (
      _0x27f0d5 && O(_0x2d899d, _0x27f0d5),
      {
        nextDocumentData: _0xbcccea,
        nextMetadata: _0x5d7f2c,
        cursorOffset: _0x4b3c26 + 1,
      }
    );
  }
  (k(_0x2d899d, _0x476a7f, e.DataStreamTreeTokenType["BLOCK_END"]),
    k(_0x2d899d, _0x4b3c26, e.DataStreamTreeTokenType["BLOCK_START"]),
    y(_0x2d899d, _0x4b3c26, _0x476a7f + 1, _0x4ab269));
  let _0xb914d2 = {
    blockId: _0x1e03ae,
    blockType: e.DocumentBlockRangeType["CALLOUT"],
    startIndex: _0x4b3c26,
    endIndex: _0x476a7f + 1,
  };
  return (
    (_0x2d899d.blockRanges = [...(_0x2d899d.blockRanges ?? []), _0xb914d2].sort(
      (_0x5c46c9, _0xa9d9e0) => _0x5c46c9.startIndex - _0xa9d9e0.startIndex,
    )),
    O(_0x2d899d, _0xb914d2),
    {
      nextDocumentData: _0xbcccea,
      nextMetadata: _0x5d7f2c,
      cursorOffset: _0x4b3c26 + 1,
    }
  );
}
function re(_0x18e803, _0x46417e) {
  return _0x18e803 == null || _0x46417e == null || _0x18e803 === _0x46417e
    ? null
    : {
        startOffset: Math.min(_0x18e803, _0x46417e),
        endOffset: Math.max(_0x18e803, _0x46417e),
      };
}
function ie(_0x23f9d9, _0x210483, _0x23aa5d) {
  return (_0x23f9d9.blockRanges ?? []).some((_0x25e079) => {
    let _0x10c912 = (0, e.getBlockRangeInterval)(_0x25e079);
    return _0x210483 === _0x23aa5d
      ? (0, e.containsInteriorInsertionOffset)(_0x10c912, _0x210483)
      : (0, e.intersectsOperationalIntervals)(_0x10c912, {
          startOffset: _0x210483,
          endOffset: _0x23aa5d,
        });
  });
}
function ae(_0x1a684c, _0x32527c, _0x156cae) {
  (_0x1a684c.paragraphs ?? [])
    .filter(
      (_0x5f21c6) =>
        _0x5f21c6.startIndex > _0x32527c && _0x5f21c6.startIndex < _0x156cae,
    )
    .forEach((_0x2636dd) => {
      let _0x4a6ba6 = { ...(_0x2636dd.paragraphStyle ?? {}) };
      (delete _0x4a6ba6.textStyle, (_0x2636dd.paragraphStyle = _0x4a6ba6));
    });
}
function v(_0x3edeea, _0x307a38, _0x155927 = false) {
  return {
    indentStart: { v: ee },
    indentEnd: { v: te },
    keepLines: e.BooleanNumber["TRUE"],
    keepNext: _0x307a38 ? e.BooleanNumber["FALSE"] : e.BooleanNumber["TRUE"],
    widowControl: e.BooleanNumber["TRUE"],
    ...(_0x3edeea && _0x155927 ? { spaceAbove: { v: 8 } } : {}),
    ...(_0x307a38 ? { spaceBelow: { v: 0 } } : {}),
  };
}
function y(_0x4f993f, _0x8ea1c8, _0x2ac423, _0x454dfc = false) {
  let _0x10b02a = (_0x4f993f.paragraphs ?? []).filter(
    (_0xaecc3c) =>
      _0xaecc3c.startIndex > _0x8ea1c8 && _0xaecc3c.startIndex < _0x2ac423,
  );
  _0x10b02a.forEach((_0x491528, _0x2414ae) => {
    _0x491528.paragraphStyle = {
      ...(_0x491528.paragraphStyle ?? {}),
      ...v(_0x2414ae === 0, _0x2414ae === _0x10b02a.length - 1, _0x454dfc),
    };
  });
}
function oe(_0x311097) {
  let _0x453175 = { ...(_0x311097 ?? {}) };
  return (
    delete _0x453175.indentStart,
    delete _0x453175.indentEnd,
    delete _0x453175.spaceAbove,
    delete _0x453175.spaceBelow,
    delete _0x453175.keepLines,
    delete _0x453175.keepNext,
    delete _0x453175.widowControl,
    _0x453175
  );
}
function se(_0x6a4efa) {
  var _0x31bc48, _0x3a277d;
  let _0x4f26b1 = S(_0x6a4efa.documentData),
    _0x83f15f = w(_0x4f26b1),
    _0x27f4cc =
      (_0x31bc48 = _0x83f15f.blockRanges) == null
        ? undefined
        : _0x31bc48.find(
            (_0x87d47) =>
              _0x87d47.blockId === _0x6a4efa.blockId &&
              _0x87d47.blockType === e.DocumentBlockRangeType["CALLOUT"],
          );
  if (!_0x27f4cc)
    return {
      nextDocumentData: _0x4f26b1,
      nextMetadata: a(_0x6a4efa.metadata),
      cursorOffset: 0,
    };
  let _0x5162be = (0, e.getBlockRangeInterval)(_0x27f4cc);
  return (
    A(_0x83f15f, _0x5162be.startOffset, _0x5162be.endOffset),
    (_0x83f15f.blockRanges =
      (_0x3a277d = _0x83f15f.blockRanges) == null
        ? undefined
        : _0x3a277d.filter(
            (_0x3506cb) => _0x3506cb.blockId !== _0x6a4efa.blockId,
          )),
    {
      nextDocumentData: _0x4f26b1,
      nextMetadata: l(_0x6a4efa.metadata, _0x6a4efa.blockId),
      cursorOffset: _0x27f4cc.startIndex,
    }
  );
}
function b(_0x212c0f) {
  var _0x7e80bf, _0x2b5300;
  let _0x442347 = S(_0x212c0f.documentData),
    _0x2618e1 = w(_0x442347),
    _0x47a6c2 =
      (_0x7e80bf = _0x2618e1.blockRanges) == null
        ? undefined
        : _0x7e80bf.find(
            (_0x11ba75) =>
              _0x11ba75.blockId === _0x212c0f.blockId &&
              _0x11ba75.blockType === e.DocumentBlockRangeType["CALLOUT"],
          );
  if (!_0x47a6c2) return null;
  let _0x59544f = D(_0x47a6c2);
  return (
    (_0x2618e1.paragraphs ?? [])
      .filter(
        (_0x371342) =>
          _0x371342.startIndex > _0x47a6c2.startIndex &&
          _0x371342.startIndex < _0x59544f,
      )
      .forEach((_0x4b14bd) => {
        _0x4b14bd.paragraphStyle = oe(_0x4b14bd.paragraphStyle);
      }),
    A(_0x2618e1, _0x59544f, _0x59544f + 1),
    A(_0x2618e1, _0x47a6c2.startIndex, _0x47a6c2.startIndex + 1),
    (_0x2618e1.blockRanges =
      (_0x2b5300 = _0x2618e1.blockRanges) == null
        ? undefined
        : _0x2b5300.filter(
            (_0x303dd0) => _0x303dd0.blockId !== _0x212c0f.blockId,
          )),
    {
      nextDocumentData: _0x442347,
      nextMetadata: l(_0x212c0f.metadata, _0x212c0f.blockId),
      cursorOffset: _0x47a6c2.startIndex,
    }
  );
}
function x(_0x5ac192) {
  let _0x13a743 = S(_0x5ac192.documentData),
    _0xf06ccf = w(_0x13a743),
    _0x3eff87 = de(_0xf06ccf, _0x5ac192.cursorOffset);
  return (
    (_0x3eff87 &&
      ce(
        _0x13a743,
        _0xf06ccf,
        _0x3eff87,
        _0x5ac192.cursorOffset,
        _0x5ac192.metadata,
        _0x5ac192.paragraphStartIndex,
      )) ||
    null
  );
}
function ce(_0x17fab2, _0x127734, _0xc7bbc7, _0x24f288, _0x274e9f, _0xcdc7cc) {
  let _0x1cc7ed = xe(_0x127734, _0xc7bbc7, _0x24f288, _0xcdc7cc);
  if (!_0x1cc7ed) return null;
  let _0x292cdf = _0x1cc7ed.endTokenOffset - 1;
  return (
    A(
      _0x127734,
      _0x1cc7ed.paragraph["startIndex"],
      _0x1cc7ed.paragraph["startIndex"] + 1,
    ),
    {
      nextDocumentData: _0x17fab2,
      nextMetadata: a(_0x274e9f),
      cursorOffset: _0x292cdf,
    }
  );
}
function le(_0x54e98f, _0x2f7eeb) {
  var _0x1e81bc;
  return _0x54e98f == null || (_0x1e81bc = _0x54e98f.blockRanges) == null
    ? undefined
    : _0x1e81bc.find(
        (_0x51b769) =>
          _0x51b769.blockType === e.DocumentBlockRangeType["CALLOUT"] &&
          _0x51b769.startIndex <= _0x2f7eeb &&
          _0x2f7eeb <= _0x51b769.endIndex,
      );
}
function ue(_0x4ead55) {
  let _0x2d8fab = _0x4ead55.documentData["body"];
  if (!_0x2d8fab) return false;
  let _0x4e7f0c =
      _0x4ead55.direction === "left"
        ? _0x4ead55.cursorOffset - 1
        : _0x4ead55.cursorOffset,
    _0x344820 =
      _0x4ead55.direction === "right" ? _0x4ead55.cursorOffset + 1 : _0x4e7f0c;
  return (_0x2d8fab.blockRanges ?? []).some((_0x4b28b9) =>
    _0x4b28b9.blockType === e.DocumentBlockRangeType["CALLOUT"]
      ? _0x4e7f0c === _0x4b28b9.startIndex || _0x344820 === _0x4b28b9.startIndex
      : false,
  );
}
function de(_0x33004e, _0x38e118) {
  var _0x3cba70;
  return (_0x3cba70 = _0x33004e.blockRanges) == null
    ? undefined
    : _0x3cba70.find((_0x418a1f) => {
        let _0x451338 = D(_0x418a1f);
        return (
          _0x418a1f.blockType === e.DocumentBlockRangeType["CALLOUT"] &&
          _0x418a1f.startIndex <= _0x38e118 &&
          _0x38e118 <= _0x451338 + 2
        );
      });
}
function S(_0x405c04) {
  return {
    ..._0x405c04,
    body: _0x405c04.body ? fe(_0x405c04.body) : _0x405c04.body,
  };
}
function fe(_0x1e59d9) {
  var _0x3a6d36,
    _0x2ac1e1,
    _0x542b9f,
    _0x567dfa,
    _0x12f733,
    _0x1ae9a9,
    _0x5f1748,
    _0x332e28,
    _0x565452;
  return {
    ..._0x1e59d9,
    paragraphs:
      (_0x3a6d36 = _0x1e59d9.paragraphs) == null
        ? undefined
        : _0x3a6d36.map((_0x383c49) => ({
            ..._0x383c49,
            bullet: C(_0x383c49.bullet),
            paragraphStyle: C(_0x383c49.paragraphStyle),
          })),
    sectionBreaks:
      (_0x2ac1e1 = _0x1e59d9.sectionBreaks) == null
        ? undefined
        : _0x2ac1e1.map((_0x348c1a) => ({ ..._0x348c1a })),
    textRuns:
      (_0x542b9f = _0x1e59d9.textRuns) == null
        ? undefined
        : _0x542b9f.map((_0x4c1901) => ({ ..._0x4c1901 })),
    tables:
      (_0x567dfa = _0x1e59d9.tables) == null
        ? undefined
        : _0x567dfa.map((_0x46baef) => ({ ..._0x46baef })),
    columnGroups:
      (_0x12f733 = _0x1e59d9.columnGroups) == null
        ? undefined
        : _0x12f733.map((_0x46d4f9) => {
            var _0x406621;
            return {
              ..._0x46d4f9,
              columns:
                (_0x406621 = _0x46d4f9.columns) == null
                  ? undefined
                  : _0x406621.map((_0x5e13ca) => C(_0x5e13ca)),
            };
          }),
    blockRanges:
      (_0x1ae9a9 = _0x1e59d9.blockRanges) == null
        ? undefined
        : _0x1ae9a9.map((_0x314b67) => ({ ..._0x314b67 })),
    customRanges:
      (_0x5f1748 = _0x1e59d9.customRanges) == null
        ? undefined
        : _0x5f1748.map((_0xabbab0) => ({ ..._0xabbab0 })),
    customDecorations:
      (_0x332e28 = _0x1e59d9.customDecorations) == null
        ? undefined
        : _0x332e28.map((_0x325201) => ({ ..._0x325201 })),
    customBlocks:
      (_0x565452 = _0x1e59d9.customBlocks) == null
        ? undefined
        : _0x565452.map((_0x56574e) => ({ ..._0x56574e })),
  };
}
function C(_0x44c155) {
  return Array.isArray(_0x44c155)
    ? _0x44c155.map((_0x420906) => C(_0x420906))
    : !_0x44c155 || typeof _0x44c155 != "object"
      ? _0x44c155
      : Object.fromEntries(
          Object.entries(_0x44c155).map(([_0x30bb20, _0x1cc283]) => [
            _0x30bb20,
            C(_0x1cc283),
          ]),
        );
}
function w(_0x19de9d) {
  if (!_0x19de9d.body) throw Error("Document body is required");
  return _0x19de9d.body;
}
function pe(_0x5422b6, _0x139b9c, _0x622f6b, _0x4b177e = "convert-paragraph") {
  if (_0x139b9c == null || _0x622f6b == null) {
    let _0x122b40 = he(_0x5422b6);
    return { startOffset: _0x122b40, endOffset: _0x122b40 };
  }
  let _0x40270c = Math.min(_0x139b9c, _0x622f6b),
    _0x560a57 = Math.max(_0x139b9c, _0x622f6b),
    _0x17c64d = be(_0x5422b6, _0x40270c, _0x560a57);
  return _0x40270c === _0x560a57
    ? _0x4b177e === "insert-new"
      ? { startOffset: _0x40270c, endOffset: _0x560a57 }
      : me(_0x5422b6, _0x40270c, _0x17c64d)
    : _e(_0x5422b6, _0x40270c, _0x560a57, _0x17c64d);
}
function me(_0x2e7aaf, _0x3a2d06, _0x113131) {
  let _0x252021 = ve(_0x2e7aaf, _0x3a2d06);
  if (_0x252021) {
    let _0x592749 = T(_0x2e7aaf, _0x252021, _0x113131);
    if (_0x592749 < _0x252021.startIndex)
      return {
        startOffset: _0x592749,
        endOffset: _0x113131
          ? Math.min(_0x252021.startIndex + 1, _0x113131.endOffset)
          : _0x252021.startIndex + 1,
      };
  }
  let _0x5807a2 =
    _0x3a2d06 === 0 &&
    _0x2e7aaf.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"]
      ? 1
      : _0x3a2d06;
  return { startOffset: _0x5807a2, endOffset: _0x5807a2 };
}
function he(_0x49eaf1) {
  let _0x333b65 = _0x49eaf1.dataStream;
  return _0x333b65.endsWith(e.DataStreamTreeTokenType["SECTION_BREAK"])
    ? Math.max(0, _0x333b65.length - 1)
    : _0x333b65.length;
}
function ge(_0xbc0ce1, _0x714e82, _0x3c6081) {
  var _0x5afcbb;
  let _0xa0292f = Math.min(_0x714e82, _0x3c6081),
    _0x271500 = Math.max(_0x714e82, _0x3c6081);
  return !!(
    (_0x5afcbb = _0xbc0ce1.tables) != null &&
    _0x5afcbb.some(
      (_0x26b2a4) =>
        (_0xa0292f > _0x26b2a4.startIndex && _0xa0292f < _0x26b2a4.endIndex) ||
        (_0x271500 > _0x26b2a4.startIndex && _0x271500 < _0x26b2a4.endIndex) ||
        (_0xa0292f <= _0x26b2a4.startIndex && _0x271500 >= _0x26b2a4.endIndex),
    )
  );
}
function _e(_0x3bbcbc, _0x5dc338, _0x1a876c, _0x562b20) {
  let _0x253b1b = [...(_0x3bbcbc.paragraphs ?? [])].sort(
      (_0x5b6e8e, _0x13a911) => _0x5b6e8e.startIndex - _0x13a911.startIndex,
    ),
    _0x40f557 = (0, e.getParagraphContentStartOffsets)(_0x3bbcbc),
    _0x181391 = _0x253b1b.find(
      (_0x2a7115) =>
        T(_0x3bbcbc, _0x2a7115, _0x562b20, _0x40f557) <= _0x5dc338 &&
        _0x5dc338 <= _0x2a7115.startIndex,
    ),
    _0x5b4a21 =
      _0x253b1b.find((_0xdcfe88) => _0xdcfe88.startIndex >= _0x1a876c - 1) ??
      _0x253b1b[_0x253b1b.length - 1];
  return {
    startOffset: _0x181391
      ? T(_0x3bbcbc, _0x181391, _0x562b20, _0x40f557)
      : _0x5dc338,
    endOffset: _0x5b4a21 ? ye(_0x5b4a21, _0x562b20) : _0x1a876c,
  };
}
function ve(_0x5817a2, _0x217ab) {
  let _0x46c79f = [...(_0x5817a2.paragraphs ?? [])].sort(
      (_0x383fbb, _0x1260ee) => _0x383fbb.startIndex - _0x1260ee.startIndex,
    ),
    _0x389f69 = (0, e.getParagraphContentStartOffsets)(_0x5817a2);
  return _0x46c79f.find(
    (_0x23ded7) =>
      (_0x389f69.get(_0x23ded7.startIndex) ?? 0) <= _0x217ab &&
      _0x217ab <= _0x23ded7.startIndex,
  );
}
function T(_0x6fc308, _0x32a7c0, _0x50e366, _0x3eb169) {
  let _0x50ff91 =
    (_0x3eb169 == null ? undefined : _0x3eb169.get(_0x32a7c0.startIndex)) ??
    (0, e.getParagraphContentStartOffset)(_0x6fc308, _0x32a7c0);
  return _0x50e366 ? Math.max(_0x50ff91, _0x50e366.startOffset) : _0x50ff91;
}
function ye(_0x57ee73, _0x13df04) {
  let _0x2c1e73 = _0x57ee73.startIndex + 1;
  return _0x13df04 ? Math.min(_0x2c1e73, _0x13df04.endOffset) : _0x2c1e73;
}
function be(_0x5b3d94, _0x9a970a, _0x4770bc) {
  let _0x17a61b = E(_0x5b3d94, _0x9a970a),
    _0x2dadcb = E(
      _0x5b3d94,
      _0x9a970a === _0x4770bc ? _0x4770bc : Math.max(_0x9a970a, _0x4770bc - 1),
    );
  if (!(!_0x17a61b && !_0x2dadcb)) {
    if (
      !_0x17a61b ||
      !_0x2dadcb ||
      _0x17a61b.startTokenOffset !== _0x2dadcb.startTokenOffset ||
      _0x17a61b.endTokenOffset !== _0x2dadcb.endTokenOffset
    )
      throw new _();
    return _0x17a61b;
  }
}
function E(_0xdaf327, _0x408b79) {
  let _0x45f7f3 = _0xdaf327.dataStream,
    _0x578040 = -1;
  for (
    let _0xae762d = Math.min(_0x408b79, _0x45f7f3.length - 1);
    _0xae762d >= 0;
    _0xae762d--
  ) {
    let _0x35e9af = _0x45f7f3[_0xae762d];
    if (_0x35e9af === e.DataStreamTreeTokenType["TABLE_CELL_END"]) return;
    if (_0x35e9af === e.DataStreamTreeTokenType["TABLE_CELL_START"]) {
      _0x578040 = _0xae762d;
      break;
    }
  }
  if (_0x578040 < 0) return;
  let _0x1521f9 = _0x45f7f3.indexOf(
    e.DataStreamTreeTokenType["TABLE_CELL_END"],
    _0x578040 + 1,
  );
  if (!(
    _0x1521f9 < 0 ||
    _0x408b79 < _0x578040 + 1 ||
    _0x408b79 > _0x1521f9 - 1
  ))
    return {
      startOffset: _0x578040 + 1,
      endOffset: Math.max(_0x578040 + 1, _0x1521f9 - 1),
      startTokenOffset: _0x578040,
      endTokenOffset: _0x1521f9,
    };
}
function D(_0x268f4a) {
  return (0, e.getBlockRangeInterval)(_0x268f4a).endOffset - 1;
}
function xe(_0x3f8716, _0x1a0474, _0x375233, _0x1c507a) {
  let _0x4addf1 = D(_0x1a0474),
    _0xe716b5 = (_0x3f8716.paragraphs ?? []).find(
      (_0x5e5d8a) => _0x5e5d8a.startIndex === _0x4addf1 + 1,
    );
  if (
    !_0xe716b5 ||
    (_0x1c507a != null && _0xe716b5.startIndex !== _0x1c507a) ||
    _0x375233 < _0x4addf1 ||
    _0x375233 > _0xe716b5.startIndex + 1 ||
    _0x3f8716.dataStream[_0xe716b5.startIndex] !==
      e.DataStreamTreeTokenType["PARAGRAPH"]
  )
    return null;
  let _0x4ad680 = (0, e.getParagraphContentStartOffset)(_0x3f8716, _0xe716b5),
    _0x3a9c73 = _0x3f8716.dataStream["slice"](_0x4ad680, _0xe716b5.startIndex);
  return Array.from(_0x3a9c73).every(
    (_0x140d98) => _0x140d98 === e.DataStreamTreeTokenType["BLOCK_END"],
  )
    ? { paragraph: _0xe716b5, endTokenOffset: _0x4addf1 }
    : null;
}
function O(_0x33d1b6, _0x2c2cac) {
  var _0x32540c;
  let _0x5c74a6 = D(_0x2c2cac),
    _0x325bd9 = _0x33d1b6.dataStream[_0x5c74a6 + 1];
  (_0x325bd9 === e.DataStreamTreeTokenType["SECTION_BREAK"] ||
    _0x325bd9 === undefined) &&
    k(_0x33d1b6, _0x5c74a6 + 1, e.DataStreamTreeTokenType["PARAGRAPH"], {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0x32540c = _0x33d1b6.paragraphs) == null
                ? undefined
                : _0x32540c.map((_0x340cd6) => _0x340cd6.paragraphId),
            ),
          ),
        },
      ],
    });
}
function k(_0x43b465, _0x338f3a, _0x481db8, _0x5e7e68 = {}) {
  var _0x3a0c6e, _0x1009f7;
  _0x481db8 &&
    ((_0x43b465.dataStream =
      "" +
      _0x43b465.dataStream["slice"](0, _0x338f3a) +
      _0x481db8 +
      _0x43b465.dataStream["slice"](_0x338f3a)),
    Se(_0x43b465, _0x338f3a, _0x481db8.length),
    (_0x3a0c6e = _0x5e7e68.paragraphs) != null &&
      _0x3a0c6e.length &&
      (_0x43b465.paragraphs = [
        ...(_0x43b465.paragraphs ?? []),
        ..._0x5e7e68.paragraphs["map"]((_0x215550) => ({
          ..._0x215550,
          startIndex: _0x215550.startIndex + _0x338f3a,
        })),
      ].sort(
        (_0x2a122d, _0x59264d) => _0x2a122d.startIndex - _0x59264d.startIndex,
      )),
    (_0x1009f7 = _0x5e7e68.blockRanges) != null &&
      _0x1009f7.length &&
      (_0x43b465.blockRanges = [
        ...(_0x43b465.blockRanges ?? []),
        ..._0x5e7e68.blockRanges["map"]((_0x3b2598) => ({
          ..._0x3b2598,
          startIndex: _0x3b2598.startIndex + _0x338f3a,
          endIndex: _0x3b2598.endIndex + _0x338f3a,
        })),
      ].sort(
        (_0x21678a, _0x1628a6) => _0x21678a.startIndex - _0x1628a6.startIndex,
      )));
}
function A(_0x151e53, _0x159531, _0x30a186) {
  let _0x1b89a0 = _0x30a186 - _0x159531;
  ((_0x151e53.dataStream =
    "" +
    _0x151e53.dataStream["slice"](0, _0x159531) +
    _0x151e53.dataStream["slice"](_0x30a186)),
    Ce(_0x151e53, _0x159531, _0x1b89a0));
}
function Se(_0x548b13, _0x5cfb73, _0x58147f) {
  ((_0x548b13.paragraphs = j(_0x548b13.paragraphs, _0x5cfb73, _0x58147f)),
    (_0x548b13.sectionBreaks = j(
      _0x548b13.sectionBreaks,
      _0x5cfb73,
      _0x58147f,
    )),
    (_0x548b13.customBlocks = j(_0x548b13.customBlocks, _0x5cfb73, _0x58147f)),
    (_0x548b13.textRuns = we(_0x548b13.textRuns, _0x5cfb73, _0x58147f)),
    (_0x548b13.tables = Te(_0x548b13.tables, _0x5cfb73, _0x58147f)),
    (_0x548b13.columnGroups = N(_0x548b13.columnGroups, _0x5cfb73, _0x58147f)),
    (_0x548b13.customRanges = N(_0x548b13.customRanges, _0x5cfb73, _0x58147f)),
    (_0x548b13.customDecorations = N(
      _0x548b13.customDecorations,
      _0x5cfb73,
      _0x58147f,
    )),
    (_0x548b13.blockRanges = N(_0x548b13.blockRanges, _0x5cfb73, _0x58147f)));
}
function Ce(_0x115823, _0x2413b6, _0x4faa20) {
  var _0x2adbb7, _0x118399;
  ((_0x115823.paragraphs = M(_0x115823.paragraphs, _0x2413b6, _0x4faa20)),
    (_0x115823.sectionBreaks = M(
      _0x115823.sectionBreaks,
      _0x2413b6,
      _0x4faa20,
    )),
    (_0x115823.customBlocks = M(_0x115823.customBlocks, _0x2413b6, _0x4faa20)),
    (_0x115823.textRuns =
      (_0x2adbb7 = F(
        (_0x118399 = _0x115823.textRuns) == null
          ? undefined
          : _0x118399.map((_0x170fa2) => ({
              ..._0x170fa2,
              startIndex: _0x170fa2.st,
              endIndex: _0x170fa2.ed,
            })),
        _0x2413b6,
        _0x4faa20,
      )) == null
        ? undefined
        : _0x2adbb7.map((_0x1d9b1f) => {
            let {
              startIndex: _0x11a608,
              endIndex: _0x280083,
              ..._0x81a0e9
            } = _0x1d9b1f;
            return { ..._0x81a0e9, st: _0x11a608, ed: _0x280083 };
          })),
    (_0x115823.tables = F(_0x115823.tables, _0x2413b6, _0x4faa20)),
    (_0x115823.columnGroups = P(_0x115823.columnGroups, _0x2413b6, _0x4faa20)),
    (_0x115823.customRanges = P(_0x115823.customRanges, _0x2413b6, _0x4faa20)),
    (_0x115823.customDecorations = P(
      _0x115823.customDecorations,
      _0x2413b6,
      _0x4faa20,
    )),
    (_0x115823.blockRanges = P(_0x115823.blockRanges, _0x2413b6, _0x4faa20)));
}
function j(_0x54b968, _0x258cf0, _0x3c9a4) {
  return _0x54b968 == null
    ? undefined
    : _0x54b968.map((_0x4fb7cd) =>
        _0x4fb7cd.startIndex >= _0x258cf0
          ? { ..._0x4fb7cd, startIndex: _0x4fb7cd.startIndex + _0x3c9a4 }
          : _0x4fb7cd,
      );
}
function M(_0x14f0a7, _0x27cdd5, _0x581757) {
  let _0x568ff2 = _0x27cdd5 + _0x581757;
  return _0x14f0a7 == null
    ? undefined
    : _0x14f0a7
        .map((_0x4c5ac8) =>
          _0x4c5ac8.startIndex >= _0x27cdd5 && _0x4c5ac8.startIndex < _0x568ff2
            ? null
            : _0x4c5ac8.startIndex >= _0x568ff2
              ? { ..._0x4c5ac8, startIndex: _0x4c5ac8.startIndex - _0x581757 }
              : _0x4c5ac8,
        )
        .filter((_0x516b3a) => _0x516b3a != null);
}
function we(_0x469721, _0x1ccdf3, _0x309891) {
  return _0x469721 == null
    ? undefined
    : _0x469721.map((_0x4c87f9) =>
        _0x4c87f9.st >= _0x1ccdf3
          ? {
              ..._0x4c87f9,
              st: _0x4c87f9.st + _0x309891,
              ed: _0x4c87f9.ed + _0x309891,
            }
          : _0x4c87f9.ed > _0x1ccdf3
            ? { ..._0x4c87f9, ed: _0x4c87f9.ed + _0x309891 }
            : _0x4c87f9,
      );
}
function N(_0x537373, _0x16764d, _0x10dfd7) {
  return _0x537373 == null
    ? undefined
    : _0x537373.map((_0x2477be) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x2477be, _0x16764d, _0x10dfd7),
      );
}
function Te(_0x4388fe, _0x33d7d9, _0x107f3c) {
  return _0x4388fe == null
    ? undefined
    : _0x4388fe.map((_0x195bef) =>
        (0, e.shiftExclusiveRangeOnInsert)(_0x195bef, _0x33d7d9, _0x107f3c),
      );
}
function P(_0x5a16e7, _0xff0bb5, _0x5b3b13) {
  return _0x5a16e7 == null
    ? undefined
    : _0x5a16e7
        .map((_0x33a58e) =>
          (0, e.shiftInclusiveRangeOnDelete)(_0x33a58e, _0xff0bb5, _0x5b3b13),
        )
        .filter((_0x590af3) => _0x590af3 != null);
}
function F(_0x11fbdd, _0x3b05db, _0x470ccd) {
  return _0x11fbdd == null
    ? undefined
    : _0x11fbdd
        .map((_0x7e2c83) =>
          (0, e.shiftExclusiveRangeOnDelete)(_0x7e2c83, _0x3b05db, _0x470ccd),
        )
        .filter((_0x4f3bb2) => _0x4f3bb2 != null);
}
const I = {
    id: "docs-callout.command.insert-below",
    type: e.CommandType["COMMAND"],
    handler: (_0x2f2e41) => {
      var _0x5afe4b;
      if ((0, n.isHeaderFooterSelection)(K(_0x2f2e41))) return false;
      let _0x54566f = (0, n.getContentInsertRange)(_0x2f2e41);
      if (_0x54566f)
        return _0x2f2e41
          .get(e.ICommandService)
          .syncExecuteCommand(R.id, {
            startOffset: _0x54566f.startOffset,
            endOffset: _0x54566f.endOffset,
            insertionMode: "insert-new",
            unitId: _0x54566f.unitId,
          });
      let _0x50cc80 = De(_0x2f2e41);
      if (!_0x50cc80) return false;
      let _0x339d30 =
          (_0x5afe4b = _0x2f2e41
            .get(e.IUniverInstanceService)
            .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) == null
            ? undefined
            : _0x5afe4b.getBody(),
        _0x3b5947 = _0x339d30
          ? (0, e.getParagraphFollowingBlockOffset)(_0x339d30, _0x50cc80)
          : _0x50cc80.startIndex + 1;
      return _0x2f2e41
        .get(e.ICommandService)
        .syncExecuteCommand(R.id, {
          startOffset: _0x3b5947,
          endOffset: _0x3b5947,
        });
    },
  },
  L = {
    id: "docs-callout.command.consume-boundary-delete",
    type: e.CommandType["COMMAND"],
    handler: () => true,
  },
  R = {
    id: "docs-callout.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (_0xf76c6b, _0x183ccf) => {
      let _0x1b2426 = G(
        _0xf76c6b,
        _0x183ccf == null ? undefined : _0x183ccf.unitId,
      );
      if (!_0x1b2426) return false;
      let _0x384eba = K(_0xf76c6b);
      if ((0, n.isHeaderFooterSelection)(_0x384eba)) return false;
      let _0x94c941 = _0x1b2426.model["serialize"](_0x1b2426.unitId),
        _0x140f6b = Ee(_0x183ccf, _0x384eba),
        _0x2c4385 = je(_0x1b2426.previousDocumentData, _0x140f6b);
      if (_0x2c4385) {
        if (_0x2c4385.blockType !== e.DocumentBlockRangeType["CALLOUT"])
          return false;
        let _0x406b0c = b({
          blockId: _0x2c4385.blockId,
          documentData: _0x1b2426.previousDocumentData,
          metadata: _0x94c941,
        });
        if (!_0x406b0c) return false;
        let _0x53649a = Y(
          _0x1b2426.commandService,
          _0x1b2426.unitId,
          _0x1b2426.previousDocumentData,
          _0x406b0c.nextDocumentData,
          R.id,
          _0x406b0c.cursorOffset,
        );
        return (
          _0x53649a &&
            _0x1b2426.model["deserialize"](
              _0x1b2426.unitId,
              _0x406b0c.nextMetadata,
            ),
          _0x53649a
        );
      }
      let _0x33871f =
          (_0x183ccf == null ? undefined : _0x183ccf.blockId) ??
          (0, e.generateRandomId)(6),
        _0x4a2b21;
      try {
        _0x4a2b21 = ne({
          blockId: _0x33871f,
          config: _0x183ccf == null ? undefined : _0x183ccf.config,
          documentData: _0x1b2426.previousDocumentData,
          endOffset: _0x140f6b == null ? undefined : _0x140f6b.endOffset,
          insertionMode:
            _0x183ccf == null ? undefined : _0x183ccf.insertionMode,
          metadata: _0x94c941,
          startOffset: _0x140f6b == null ? undefined : _0x140f6b.startOffset,
        });
      } catch (_0x5c485a) {
        if (_0x5c485a instanceof _) return false;
        throw _0x5c485a;
      }
      let _0x357747 = Y(
        _0x1b2426.commandService,
        _0x1b2426.unitId,
        _0x1b2426.previousDocumentData,
        _0x4a2b21.nextDocumentData,
        R.id,
        _0x4a2b21.cursorOffset,
      );
      return (
        _0x357747 &&
          _0x1b2426.model["deserialize"](
            _0x1b2426.unitId,
            _0x4a2b21.nextMetadata,
          ),
        _0x357747
      );
    },
  },
  z = {
    id: "docs-callout.command.update",
    type: e.CommandType["COMMAND"],
    handler: (_0x449752, _0x3e97e8) => {
      if (!_0x3e97e8) return false;
      let _0xaeb503 = G(_0x449752, _0x3e97e8.unitId);
      if (!_0xaeb503) return false;
      let _0x9dc46 = _0xaeb503.model["getCalloutConfig"](
        _0xaeb503.unitId,
        _0x3e97e8.blockId,
      );
      if (!_0x9dc46 || !ke(_0xaeb503.previousDocumentData, _0x3e97e8.blockId))
        return false;
      let _0x25545 = o({ ..._0x9dc46, ..._0x3e97e8.config }),
        _0x626273 = {
          blockId: _0x3e97e8.blockId,
          config: _0x25545,
          unitId: _0xaeb503.unitId,
        },
        _0x5dc7c9 = {
          blockId: _0x3e97e8.blockId,
          config: _0x9dc46,
          unitId: _0xaeb503.unitId,
        };
      return _0xaeb503.commandService["syncExecuteCommand"](h.id, _0x626273)
        ? (_0x449752
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0xaeb503.unitId,
              redoMutations: [{ id: h.id, params: _0x626273 }],
              undoMutations: [{ id: h.id, params: _0x5dc7c9 }],
            }),
          true)
        : false;
    },
  },
  B = {
    id: "docs-callout.command.set-text-color",
    type: e.CommandType["COMMAND"],
    handler: (_0xaecc9a, _0x8f0b09) => {
      if (!_0x8f0b09) return false;
      let _0x5aef08 = G(_0xaecc9a, _0x8f0b09.unitId);
      if (!_0x5aef08) return false;
      let _0x47e970 = Ae(
        _0x5aef08.previousDocumentData,
        _0x8f0b09.blockId,
        _0x8f0b09.value,
      );
      return _0x47e970
        ? !!_0x5aef08.commandService["syncExecuteCommand"](
            n.RichTextEditingMutation["id"],
            {
              unitId: _0x5aef08.unitId,
              actions: _0x47e970,
              textRanges: null,
              noNeedSetTextRange: true,
              isEditing: false,
              trigger: B.id,
            },
          )
        : false;
    },
  },
  V = {
    id: "docs-callout.command.reset-colors",
    type: e.CommandType["COMMAND"],
    handler: (_0x42487b, _0x1e6ad0) => {
      if (!_0x1e6ad0) return false;
      let _0x3ca8ae = G(_0x42487b, _0x1e6ad0.unitId);
      if (!_0x3ca8ae) return false;
      let _0x32f156 = _0x3ca8ae.model["getCalloutConfig"](
        _0x3ca8ae.unitId,
        _0x1e6ad0.blockId,
      );
      if (!_0x32f156 || !ke(_0x3ca8ae.previousDocumentData, _0x1e6ad0.blockId))
        return false;
      let _0x4cabb7 = o({
        ..._0x32f156,
        backgroundColor: "",
        borderColor: "",
        borderOpacity: i.borderOpacity,
        borderStyle: i.borderStyle,
        borderWidth: i.borderWidth,
      });
      return ze(
        _0x42487b,
        _0x3ca8ae.commandService,
        _0x3ca8ae.unitId,
        _0x1e6ad0.blockId,
        _0x32f156,
        _0x4cabb7,
        Ae(_0x3ca8ae.previousDocumentData, _0x1e6ad0.blockId, null),
      );
    },
  },
  H = {
    id: "docs-callout.command.delete",
    type: e.CommandType["COMMAND"],
    handler: (_0x55157e, _0x46150b) => {
      let _0x21c43a = G(
        _0x55157e,
        _0x46150b == null ? undefined : _0x46150b.unitId,
      );
      if (!_0x21c43a) return false;
      let _0x176b09 =
        (_0x46150b == null ? undefined : _0x46150b.blockId) ??
        Oe(_0x21c43a.previousDocumentData, K(_0x55157e));
      if (!_0x176b09) return false;
      let _0x4de4cf = se({
          blockId: _0x176b09,
          documentData: _0x21c43a.previousDocumentData,
          metadata: _0x21c43a.model["serialize"](_0x21c43a.unitId),
        }),
        _0x774408 = Y(
          _0x21c43a.commandService,
          _0x21c43a.unitId,
          _0x21c43a.previousDocumentData,
          _0x4de4cf.nextDocumentData,
          H.id,
          _0x4de4cf.cursorOffset,
        );
      return (
        _0x774408 &&
          _0x21c43a.model["deserialize"](
            _0x21c43a.unitId,
            _0x4de4cf.nextMetadata,
          ),
        _0x774408
      );
    },
  },
  U = {
    id: "docs-callout.command.unwrap",
    type: e.CommandType["COMMAND"],
    handler: (_0x3db412, _0x3a1574) => {
      if (!_0x3a1574) return false;
      let _0x4b84ed = G(_0x3db412, _0x3a1574.unitId);
      if (!_0x4b84ed) return false;
      let _0x5aad34 = b({
        blockId: _0x3a1574.blockId,
        documentData: _0x4b84ed.previousDocumentData,
        metadata: _0x4b84ed.model["serialize"](_0x4b84ed.unitId),
      });
      if (!_0x5aad34) return false;
      let _0x4c7375 = _0x4b84ed.model["getCalloutConfig"](
        _0x4b84ed.unitId,
        _0x3a1574.blockId,
      );
      return _0x4c7375
        ? Be(
            _0x3db412,
            _0x4b84ed.commandService,
            _0x4b84ed.unitId,
            _0x3a1574.blockId,
            _0x4c7375,
            _0x4b84ed.previousDocumentData,
            _0x5aad34.nextDocumentData,
            _0x5aad34.cursorOffset,
          )
        : Y(
            _0x4b84ed.commandService,
            _0x4b84ed.unitId,
            _0x4b84ed.previousDocumentData,
            _0x5aad34.nextDocumentData,
            U.id,
            _0x5aad34.cursorOffset,
          );
    },
  },
  W = {
    id: "docs-callout.command.cancel-empty-paragraph",
    type: e.CommandType["COMMAND"],
    handler: (_0x5d1c59, _0x30279b) => {
      if (!_0x30279b) return false;
      let _0x37269a = G(_0x5d1c59, _0x30279b.unitId);
      if (!_0x37269a) return false;
      let _0x5c2f9b = x({
        cursorOffset: _0x30279b.cursorOffset,
        documentData: _0x37269a.previousDocumentData,
        metadata: _0x37269a.model["serialize"](_0x37269a.unitId),
        paragraphStartIndex: _0x30279b.paragraphStartIndex,
      });
      if (!_0x5c2f9b) return false;
      let _0x1219cb = Y(
        _0x37269a.commandService,
        _0x37269a.unitId,
        _0x37269a.previousDocumentData,
        _0x5c2f9b.nextDocumentData,
        W.id,
        _0x5c2f9b.cursorOffset,
      );
      return (
        _0x1219cb &&
          _0x37269a.model["deserialize"](
            _0x37269a.unitId,
            _0x5c2f9b.nextMetadata,
          ),
        _0x1219cb
      );
    },
  };
function G(_0x4c3b2e, _0x1fd892) {
  let _0x5df98f = _0x4c3b2e.get(e.IUniverInstanceService),
    _0x113097 = _0x1fd892
      ? _0x5df98f.getUnit(_0x1fd892, e.UniverInstanceType["UNIVER_DOC"])
      : _0x5df98f.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
  return _0x113097
    ? {
        commandService: _0x4c3b2e.get(e.ICommandService),
        model: _0x4c3b2e.get(m),
        previousDocumentData: _0x113097.getSnapshot(),
        unitId: _0x113097.getUnitId(),
      }
    : null;
}
function K(_0x4d6927) {
  var _0x12ffc0;
  return (_0x12ffc0 = _0x4d6927
    .get(n.DocSelectionManagerService)
    .getTextRanges()) == null
    ? undefined
    : _0x12ffc0[0];
}
function Ee(_0x1995b6, _0x161cb9) {
  let _0x3f798 =
      (_0x1995b6 == null ? undefined : _0x1995b6.startOffset) ??
      (_0x161cb9 == null ? undefined : _0x161cb9.startOffset),
    _0x538bc8 =
      (_0x1995b6 == null ? undefined : _0x1995b6.endOffset) ??
      (_0x161cb9 == null ? undefined : _0x161cb9.endOffset);
  if (_0x3f798 != null && _0x538bc8 != null)
    return {
      endOffset: Math.max(_0x3f798, _0x538bc8),
      startOffset: Math.min(_0x3f798, _0x538bc8),
    };
}
function De(_0x256014) {
  let _0x4a378d = K(_0x256014);
  if (!_0x4a378d) return null;
  let _0x5eea3c = _0x256014
      .get(e.IUniverInstanceService)
      .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    _0x448d64 = _0x5eea3c == null ? undefined : _0x5eea3c.getBody();
  return _0x448d64
    ? (e.BuildTextUtils["range"].getParagraphsInRange(
        _0x4a378d,
        _0x448d64.paragraphs ?? [],
        _0x448d64.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function Oe(_0x53ccab, _0x9994fc) {
  var _0x3eff6f;
  if (_0x9994fc)
    return (_0x3eff6f = le(_0x53ccab.body, _0x9994fc.startOffset)) == null
      ? undefined
      : _0x3eff6f.blockId;
}
function ke(_0x24bf55, _0xf76df3) {
  var _0x15c1c8;
  return (
    ((_0x15c1c8 = _0x24bf55.body) == null ||
    (_0x15c1c8 = _0x15c1c8.blockRanges) == null
      ? undefined
      : _0x15c1c8.some(
          (_0x211b94) =>
            _0x211b94.blockId === _0xf76df3 &&
            _0x211b94.blockType === e.DocumentBlockRangeType["CALLOUT"],
        )) ?? false
  );
}
function Ae(_0x5dd6ab, _0x3d922b, _0x57e03c) {
  var _0x39e795, _0x10256a;
  let _0x2dcbae =
    (_0x39e795 = _0x5dd6ab.body) == null ||
    (_0x39e795 = _0x39e795.blockRanges) == null
      ? undefined
      : _0x39e795.find(
          (_0x1703bd) =>
            _0x1703bd.blockId === _0x3d922b &&
            _0x1703bd.blockType === e.DocumentBlockRangeType["CALLOUT"],
        );
  if (!_0x2dcbae) return null;
  let _0x3ebd90 = _0x2dcbae.startIndex + 1,
    _0xb78ddb = _0x2dcbae.endIndex;
  if (_0xb78ddb <= _0x3ebd90) return null;
  let _0x516a53 = new e["TextX"]();
  (_0x516a53.push({ t: e.TextXActionType["RETAIN"], len: _0x3ebd90 }),
    _0x516a53.push({
      t: e.TextXActionType["RETAIN"],
      len: _0xb78ddb - _0x3ebd90,
      body: {
        dataStream: "",
        textRuns: [
          { st: 0, ed: _0xb78ddb - _0x3ebd90, ts: { cl: { rgb: _0x57e03c } } },
        ],
      },
    }));
  let _0x2f4a78 = e.JSONX["getInstance"](),
    _0x4e1140 = _0x2f4a78.editOp(_0x516a53.serialize(), ["body"]);
  return ((_0x10256a = _0x5dd6ab.body) == null
    ? undefined
    : _0x10256a.textRuns) == null
    ? _0x57e03c == null
      ? null
      : _0x2f4a78.insertOp(
          ["body", "textRuns"],
          [{ st: _0x3ebd90, ed: _0xb78ddb, ts: { cl: { rgb: _0x57e03c } } }],
        )
    : _0x4e1140;
}
function je(_0xac6049, _0xc03f83) {
  var _0x5a80ea;
  if (!_0xc03f83) return;
  let _0x500d33 = Me(_0xc03f83);
  return (_0x5a80ea = _0xac6049.body) == null ||
    (_0x5a80ea = _0x5a80ea.blockRanges) == null
    ? undefined
    : _0x5a80ea.find((_0x28ddd8) => {
        let _0x4da3f9 = (0, e.getBlockRangeInterval)(_0x28ddd8);
        return _0xc03f83.startOffset === _0xc03f83.endOffset
          ? (0, e.containsInteriorInsertionOffset)(_0x4da3f9, _0x500d33)
          : (0, e.containsStreamIndex)(_0x4da3f9, _0x500d33);
      });
}
function Me(_0x1c6723) {
  return _0x1c6723.startOffset === _0x1c6723.endOffset
    ? _0x1c6723.startOffset
    : _0x1c6723.startOffset + 1;
}
function Ne(_0x5542d4, _0x8fb1a) {
  let _0x4518a9 = _0x5542d4.body,
    _0x33c594 = _0x8fb1a.body,
    _0x17d10a = (0, e.getSingleDataStreamChange)(_0x4518a9, _0x33c594),
    _0x2a2257 = [],
    _0x45b828 = _0x17d10a && _0x33c594 ? Pe(_0x33c594, _0x17d10a) : null,
    _0x1ee707 = _0x17d10a ? null : Fe(_0x4518a9, _0x33c594);
  return (
    _0x45b828 && _0x2a2257.push(_0x45b828),
    _0x1ee707 && _0x2a2257.push(_0x1ee707),
    _0x2a2257.reduce(
      (_0x17166a, _0x2e154f) => e.JSONX["compose"](_0x17166a, _0x2e154f),
      null,
    )
  );
}
function Pe(_0x35d9dd, _0x46ac2a) {
  let _0x34ff34 = new e.TextX();
  return (
    _0x34ff34.retain(_0x46ac2a.start),
    _0x46ac2a.insertLength > 0 &&
      _0x34ff34.insert(
        _0x46ac2a.insertLength,
        (0, e.getBodySliceForTextXAction)(
          _0x35d9dd,
          _0x46ac2a.start,
          _0x46ac2a.start + _0x46ac2a.insertLength,
          false,
        ),
      ),
    _0x46ac2a.deleteLength > 0 && _0x34ff34.delete(_0x46ac2a.deleteLength),
    e.JSONX["getInstance"]().editOp(_0x34ff34.serialize(), ["body"])
  );
}
function Fe(_0x274fbf, _0x4a19fa) {
  let _0x2ff4ba = [];
  for (let _0x1f7e9c of Ie)
    q(
      e.JSONX["getInstance"](),
      ["body", _0x1f7e9c],
      _0x274fbf == null ? undefined : _0x274fbf[_0x1f7e9c],
      _0x4a19fa == null ? undefined : _0x4a19fa[_0x1f7e9c],
      _0x2ff4ba,
    );
  return _0x2ff4ba.reduce(
    (_0x4acead, _0x56505f) => e.JSONX["compose"](_0x4acead, _0x56505f),
    null,
  );
}
const Ie = [
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
function q(_0xac6e15, _0x1339fd, _0x4233ce, _0x38f70b, _0x5eaa40) {
  if (!J(_0x4233ce, _0x38f70b)) {
    if (_0x4233ce == null) {
      _0x5eaa40.push(_0xac6e15.insertOp(_0x1339fd, _0x38f70b));
      return;
    }
    if (_0x38f70b == null) {
      _0x5eaa40.push(_0xac6e15.removeOp(_0x1339fd, _0x4233ce));
      return;
    }
    if (Array.isArray(_0x4233ce) && Array.isArray(_0x38f70b)) {
      Le(_0xac6e15, _0x1339fd, _0x4233ce, _0x38f70b, _0x5eaa40);
      return;
    }
    if (Re(_0x4233ce) && Re(_0x38f70b)) {
      new Set([...Object.keys(_0x4233ce), ...Object.keys(_0x38f70b)]).forEach(
        (_0x6251e6) => {
          q(
            _0xac6e15,
            [..._0x1339fd, _0x6251e6],
            _0x4233ce[_0x6251e6],
            _0x38f70b[_0x6251e6],
            _0x5eaa40,
          );
        },
      );
      return;
    }
    _0x5eaa40.push(_0xac6e15.replaceOp(_0x1339fd, _0x4233ce, _0x38f70b));
  }
}
function Le(_0x5954cb, _0xb94673, _0x53b252, _0x1a88f0, _0x2575e9) {
  if (_0x53b252.length === _0x1a88f0.length) {
    _0x53b252.forEach((_0x3a03b9, _0xb5e4cf) =>
      q(
        _0x5954cb,
        [..._0xb94673, _0xb5e4cf],
        _0x3a03b9,
        _0x1a88f0[_0xb5e4cf],
        _0x2575e9,
      ),
    );
    return;
  }
  let _0x5e7478 = 0;
  for (
    ;
    _0x5e7478 < _0x53b252.length &&
    _0x5e7478 < _0x1a88f0.length &&
    J(_0x53b252[_0x5e7478], _0x1a88f0[_0x5e7478]);
  )
    _0x5e7478++;
  let _0x5dd55b = _0x53b252.length - 1,
    _0x29eeeb = _0x1a88f0.length - 1;
  for (
    ;
    _0x5dd55b >= _0x5e7478 &&
    _0x29eeeb >= _0x5e7478 &&
    J(_0x53b252[_0x5dd55b], _0x1a88f0[_0x29eeeb]);
  )
    (_0x5dd55b--, _0x29eeeb--);
  for (let _0x30b514 = _0x5dd55b; _0x30b514 >= _0x5e7478; _0x30b514--)
    _0x2575e9.push(
      _0x5954cb.removeOp([..._0xb94673, _0x30b514], _0x53b252[_0x30b514]),
    );
  for (let _0x5c6849 = _0x5e7478; _0x5c6849 <= _0x29eeeb; _0x5c6849++)
    _0x2575e9.push(
      _0x5954cb.insertOp([..._0xb94673, _0x5c6849], _0x1a88f0[_0x5c6849]),
    );
}
function Re(_0x1251ba) {
  return (
    typeof _0x1251ba == "object" && !!_0x1251ba && !Array.isArray(_0x1251ba)
  );
}
function J(_0x552676, _0x137127) {
  return JSON.stringify(_0x552676) === JSON.stringify(_0x137127);
}
function Y(_0x1a6519, _0x255124, _0x2021d0, _0xbe5a7a, _0x3f4854, _0x5680b2) {
  let _0x182e30 = Ne(_0x2021d0, _0xbe5a7a);
  return _0x182e30
    ? !!_0x1a6519.syncExecuteCommand(n.RichTextEditingMutation["id"], {
        unitId: _0x255124,
        actions: _0x182e30,
        textRanges:
          _0x5680b2 == null
            ? []
            : [
                {
                  startOffset: _0x5680b2,
                  endOffset: _0x5680b2,
                  collapsed: true,
                },
              ],
        isEditing: false,
        trigger: _0x3f4854,
      })
    : false;
}
function ze(
  _0x17b895,
  _0x3a5c5b,
  _0x43c388,
  _0x56799c,
  _0x5a64e8,
  _0x3b77a9,
  _0xa568ae,
) {
  let _0x9ca0ad = { unitId: _0x43c388, blockId: _0x56799c, config: _0x3b77a9 },
    _0x57ceb0 = { unitId: _0x43c388, blockId: _0x56799c, config: _0x5a64e8 },
    _0x124c3a = [{ id: h.id, params: _0x9ca0ad }],
    _0x401f33 = [{ id: h.id, params: _0x57ceb0 }];
  if (!_0x3a5c5b.syncExecuteCommand(h.id, _0x9ca0ad)) return false;
  if (_0xa568ae) {
    let _0x5315ec = {
        unitId: _0x43c388,
        actions: _0xa568ae,
        textRanges: null,
        noNeedSetTextRange: true,
        isEditing: false,
        noHistory: true,
        trigger: V.id,
      },
      _0x5da253 = _0x3a5c5b.syncExecuteCommand(
        n.RichTextEditingMutation["id"],
        _0x5315ec,
      );
    if (!_0x5da253)
      return (_0x3a5c5b.syncExecuteCommand(h.id, _0x57ceb0), false);
    (_0x124c3a.push({ id: n.RichTextEditingMutation["id"], params: _0x5315ec }),
      _0x401f33.unshift({
        id: n.RichTextEditingMutation["id"],
        params: { ..._0x5da253, noHistory: true },
      }));
  }
  return (
    _0x17b895
      .get(e.IUndoRedoService)
      .pushUndoRedo({
        unitID: _0x43c388,
        redoMutations: _0x124c3a,
        undoMutations: _0x401f33,
      }),
    true
  );
}
function Be(
  _0x5b2ef2,
  _0x5e7c0c,
  _0x17177d,
  _0x355fc3,
  _0x5201bd,
  _0x18e71f,
  _0x92277e,
  _0x507433,
) {
  let _0x1fa2b0 = Ne(_0x18e71f, _0x92277e);
  if (!_0x1fa2b0) return false;
  let _0x101814 = {
      unitId: _0x17177d,
      actions: _0x1fa2b0,
      textRanges: [
        { startOffset: _0x507433, endOffset: _0x507433, collapsed: true },
      ],
      isEditing: false,
      noHistory: true,
      trigger: U.id,
    },
    _0x1d6012 = _0x5e7c0c.syncExecuteCommand(
      n.RichTextEditingMutation["id"],
      _0x101814,
    );
  if (!_0x1d6012) return false;
  let _0x58c04f = { unitId: _0x17177d, blockId: _0x355fc3 };
  if (!_0x5e7c0c.syncExecuteCommand(g.id, _0x58c04f))
    return (
      _0x5e7c0c.syncExecuteCommand(n.RichTextEditingMutation["id"], {
        ..._0x1d6012,
        noHistory: true,
      }),
      false
    );
  let _0x1dcf5b = { unitId: _0x17177d, blockId: _0x355fc3, config: _0x5201bd };
  return (
    _0x5b2ef2.get(e.IUndoRedoService).pushUndoRedo({
      unitID: _0x17177d,
      redoMutations: [
        { id: n.RichTextEditingMutation["id"], params: _0x101814 },
        { id: g.id, params: _0x58c04f },
      ],
      undoMutations: [
        {
          id: n.RichTextEditingMutation["id"],
          params: { ..._0x1d6012, noHistory: true },
        },
        { id: h.id, params: _0x1dcf5b },
      ],
    }),
    true
  );
}
const X = "DOC_CALLOUT_PLUGIN";
var Ve = "@univerjs-pro/docs-callout",
  He = "1.0.0-insiders.20260907-70fc579";
const Ue = {};
function Z(_0x15d9c5, _0x569883) {
  return function (_0x1c2320, _0x51312f) {
    _0x569883(_0x1c2320, _0x51312f, _0x15d9c5);
  };
}
function We(_0x1d439b, _0x3d45b3, _0x5663ec, _0x3ef633) {
  var _0x2d2d9c = arguments.length,
    _0x2c6a3e =
      _0x2d2d9c < 3
        ? _0x3d45b3
        : _0x3ef633 === null
          ? (_0x3ef633 = Object.getOwnPropertyDescriptor(_0x3d45b3, _0x5663ec))
          : _0x3ef633,
    _0x18109d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2c6a3e = Reflect.decorate(_0x1d439b, _0x3d45b3, _0x5663ec, _0x3ef633);
  else {
    for (var _0x27a287 = _0x1d439b.length - 1; _0x27a287 >= 0; _0x27a287--)
      (_0x18109d = _0x1d439b[_0x27a287]) &&
        (_0x2c6a3e =
          (_0x2d2d9c < 3
            ? _0x18109d(_0x2c6a3e)
            : _0x2d2d9c > 3
              ? _0x18109d(_0x3d45b3, _0x5663ec, _0x2c6a3e)
              : _0x18109d(_0x3d45b3, _0x5663ec)) || _0x2c6a3e);
  }
  return (
    _0x2d2d9c > 3 &&
      _0x2c6a3e &&
      Object.defineProperty(_0x3d45b3, _0x5663ec, _0x2c6a3e),
    _0x2c6a3e
  );
}
let Q = class extends e.Disposable {
  constructor(_0x422cb0, _0xd4357d) {
    (super(),
      (this._resourceManagerService = _0x422cb0),
      (this._docsCalloutModel = _0xd4357d),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: X,
        businesses: [e.UniverInstanceType["UNIVER_DOC"]],
        toJson: (_0xf70141) =>
          JSON.stringify(this._docsCalloutModel["serialize"](_0xf70141)),
        parseJson: (_0x5c2c47) => a(JSON.parse(_0x5c2c47)),
        onLoad: (_0x598ca9, _0x4c4a84) =>
          this._docsCalloutModel["deserialize"](_0x598ca9, _0x4c4a84),
        onUnLoad: (_0x3226a5) =>
          this._docsCalloutModel["removeUnit"](_0x3226a5),
      }),
    );
  }
};
Q = We([Z(0, e.IResourceManagerService), Z(1, (0, e.Inject)(m))], Q);
let $ = class extends e.Plugin {
  constructor(_0x27c3c7 = Ue, _0x15aa2f, _0x43d50e, _0x4239de) {
    (super(),
      (this._config = _0x27c3c7),
      (this._injector = _0x15aa2f),
      (this._commandService = _0x43d50e),
      (this._configService = _0x4239de));
    let { ..._0x120bc7 } = (0, e.merge)({}, Ue, this._config);
    this._configService["setConfig"]("docs-callout.config", _0x120bc7);
  }
  onStarting() {
    (this._injector["add"]([m]),
      this._injector["add"]([Q]),
      this._injector["get"](m),
      this._injector["get"](Q),
      [W, L, H, U, I, R, V, B, z, h, g].forEach((_0x194ab6) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x194ab6)),
      ));
  }
};
(p($, "pluginName", X),
  p($, "packageName", Ve),
  p($, "version", He),
  p($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = We(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin, n.UniverDocsPlugin),
      Z(1, (0, e.Inject)(e.Injector)),
      Z(2, e.ICommandService),
      Z(3, e.IConfigService),
    ],
    $,
  )),
  (exports.DEFAULT_CALLOUT_CONFIG = i),
  (exports.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN = "orange.50"),
  (exports.DOCS_CALLOUT_BORDER_COLOR_TOKEN = "orange.200"),
  (exports.DOCS_CALLOUT_PLUGIN = X),
  (exports.DocsCalloutCancelEmptyParagraphCommand = W),
  (exports.DocsCalloutConsumeBoundaryDeleteCommand = L),
  (exports.DocsCalloutDeleteCommand = H),
  (exports.DocsCalloutInsertBelowCommand = I),
  (exports.DocsCalloutInsertCommand = R),
  (exports.DocsCalloutModel = m),
  (exports.DocsCalloutResetColorsCommand = V),
  (exports.DocsCalloutSetTextColorCommand = B),
  (exports.DocsCalloutUnwrapCommand = U),
  (exports.DocsCalloutUpdateCommand = z),
  (exports.RemoveDocsCalloutConfigMutation = g),
  (exports.SetDocsCalloutConfigMutation = h),
  Object.defineProperty(exports, "UniverDocsCalloutPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildCancelEmptyCalloutParagraphActions = x),
  (exports.isCalloutBoundaryDelete = ue),
  (exports.normalizeDocsCalloutConfig = o),
  (exports.normalizeDocsCalloutMetadataResource = a));
