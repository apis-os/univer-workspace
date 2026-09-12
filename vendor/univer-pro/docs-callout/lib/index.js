import {
  BooleanNumber as _0x4819c3,
  BuildTextUtils as _0x1e31f5,
  CommandType as _0x238a64,
  DashStyleType as _0x4e4e23,
  DataStreamTreeTokenType as _0x1e688f,
  DependentOn as _0x22c38f,
  Disposable as _0x3b8b97,
  DocumentBlockRangeType as _0xe1d7c,
  ICommandService as _0x15becf,
  IConfigService as _0x58ff2f,
  IResourceManagerService as _0xc21b0f,
  IUndoRedoService as _0x48eb8c,
  IUniverInstanceService as _0x368266,
  Inject as _0x2c4b63,
  Injector as _0x377412,
  JSONX as _0x3ea310,
  Plugin as _0x433790,
  TextX as _0x130a0c,
  TextXActionType as _0x240742,
  UniverInstanceType as _0x454d40,
  containsInteriorInsertionOffset as _0x288a43,
  containsStreamIndex as _0x464112,
  createParagraphId as _0x4cb854,
  generateRandomId as _0x1427e6,
  getBlockRangeInterval as _0x2f6d01,
  getBodySliceForTextXAction as _0x170953,
  getParagraphContentStartOffset as _0x3eb920,
  getParagraphContentStartOffsets as _0x29096d,
  getParagraphFollowingBlockOffset as _0x48380c,
  getSingleDataStreamChange as _0x417155,
  intersectsOperationalIntervals as _0x53933d,
  merge as _0x8bdd9,
  shiftExclusiveRangeOnDelete as _0x75e152,
  shiftExclusiveRangeOnInsert as _0x74b0b8,
  shiftInclusiveRangeOnDelete as _0x40c8b8,
  shiftInclusiveRangeOnInsert as _0x54b453,
} from "@univerjs/core";
import { Subject as _0x4f78ef } from "rxjs";
import {
  DocSelectionManagerService as _0x380d12,
  RichTextEditingMutation as _0x24c5be,
  UniverDocsPlugin as _0x5e49b3,
  getContentInsertRange as _0x3a5590,
  isHeaderFooterSelection as _0x5994a9,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x4f734f } from "@univerjs-pro/license";
const y = {
  icon: "🎨",
  showIcon: true,
  backgroundColor: "",
  borderColor: "",
  borderWidth: 1,
  borderOpacity: 1,
  borderStyle: _0x4e4e23.SOLID,
  borderRadius: 8,
  paddingTop: 16,
  paddingRight: 20,
  paddingBottom: 16,
  paddingLeft: 20,
  iconSize: 24,
  iconGap: 16,
};
function b(_0x32523c) {
  let _0x5d4fa4 = (_0x32523c == null ? undefined : _0x32523c.callouts) ?? {};
  return {
    callouts: Object.fromEntries(
      Object.entries(_0x5d4fa4).map(([_0x4e2b48, _0xb3e12d]) => [
        _0x4e2b48,
        x(_0xb3e12d),
      ]),
    ),
  };
}
function x(_0x46f395) {
  return {
    icon: S(_0x46f395, "icon"),
    showIcon: S(_0x46f395, "showIcon"),
    backgroundColor: S(_0x46f395, "backgroundColor"),
    borderColor: S(_0x46f395, "borderColor"),
    borderWidth: S(_0x46f395, "borderWidth"),
    borderOpacity: S(_0x46f395, "borderOpacity"),
    borderStyle: S(_0x46f395, "borderStyle"),
    borderRadius: S(_0x46f395, "borderRadius"),
    paddingTop: S(_0x46f395, "paddingTop"),
    paddingRight: S(_0x46f395, "paddingRight"),
    paddingBottom: S(_0x46f395, "paddingBottom"),
    paddingLeft: S(_0x46f395, "paddingLeft"),
    iconSize: S(_0x46f395, "iconSize"),
    iconGap: S(_0x46f395, "iconGap"),
  };
}
function S(_0x353da2, _0xd17eb2) {
  return (_0x353da2 == null ? undefined : _0x353da2[_0xd17eb2]) ?? y[_0xd17eb2];
}
function we(_0x2091ba, _0xbad98f, _0x2dfe48) {
  let _0x5a30dc = b(_0x2091ba);
  return (
    (_0x5a30dc.callouts[_0xbad98f] = x({
      ..._0x5a30dc.callouts[_0xbad98f],
      ..._0x2dfe48,
    })),
    _0x5a30dc
  );
}
function Te(_0x55c3da, _0xb9c069) {
  let _0x426e8e = b(_0x55c3da);
  return (delete _0x426e8e.callouts[_0xb9c069], _0x426e8e);
}
function C(_0x2b39ee) {
  "@babel/helpers - typeof";
  return (
    (C =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x425b74) {
            return typeof _0x425b74;
          }
        : function (_0x51618d) {
            return _0x51618d &&
              typeof Symbol == "function" &&
              _0x51618d.constructor === Symbol &&
              _0x51618d !== Symbol.prototype
              ? "symbol"
              : typeof _0x51618d;
          }),
    C(_0x2b39ee)
  );
}
function Ee(_0x24765f, _0x6c7d7a) {
  if (C(_0x24765f) != "object" || !_0x24765f) return _0x24765f;
  var _0x51ddc3 = _0x24765f[Symbol.toPrimitive];
  if (_0x51ddc3 !== undefined) {
    var _0x9e0d10 = _0x51ddc3.call(_0x24765f, _0x6c7d7a || "default");
    if (C(_0x9e0d10) != "object") return _0x9e0d10;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x6c7d7a === "string" ? String : Number)(_0x24765f);
}
function De(_0x90e44e) {
  var _0x665b5e = Ee(_0x90e44e, "string");
  return C(_0x665b5e) == "symbol" ? _0x665b5e : _0x665b5e + "";
}
function w(_0x3ea042, _0x46093a, _0x3cdf0b) {
  return (
    (_0x46093a = De(_0x46093a)) in _0x3ea042
      ? Object.defineProperty(_0x3ea042, _0x46093a, {
          value: _0x3cdf0b,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3ea042[_0x46093a] = _0x3cdf0b),
    _0x3ea042
  );
}
var T = class extends _0x3b8b97 {
  constructor(..._0x239a9d) {
    (super(..._0x239a9d),
      w(this, "_resources", new Map()),
      w(this, "_change$", new _0x4f78ef()),
      w(this, "change$", this._change$["asObservable"]()));
  }
  getCalloutConfig(_0x3b29c8, _0x3b2657) {
    return b(this._resources["get"](_0x3b29c8)).callouts[_0x3b2657];
  }
  setCalloutConfig(_0x358de3, _0x35a871, _0x57411d) {
    this._setResource(
      _0x358de3,
      _0x35a871,
      we(this._resources["get"](_0x358de3), _0x35a871, _0x57411d),
    );
  }
  removeCallout(_0x1f7300, _0x201d06) {
    this._setResource(
      _0x1f7300,
      _0x201d06,
      Te(this._resources["get"](_0x1f7300), _0x201d06),
    );
  }
  serialize(_0x190ab8) {
    return b(this._resources["get"](_0x190ab8));
  }
  deserialize(_0x589450, _0x416e12) {
    (this._resources["set"](_0x589450, b(_0x416e12)),
      this._change$["next"]({ unitId: _0x589450 }));
  }
  removeUnit(_0x29a931) {
    (this._resources["delete"](_0x29a931),
      this._change$["next"]({ unitId: _0x29a931 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x391e59, _0x99db8a, _0x41c650) {
    (this._resources["set"](_0x391e59, _0x41c650),
      this._change$["next"]({ unitId: _0x391e59, blockId: _0x99db8a }));
  }
};
const E = {
    id: "docs-callout.mutation.set-config",
    type: _0x238a64.MUTATION,
    handler: (_0x32aef2, _0x53edc0) =>
      !(_0x53edc0 != null && _0x53edc0.unitId) || !_0x53edc0.blockId
        ? false
        : (_0x32aef2
            .get(T)
            .setCalloutConfig(
              _0x53edc0.unitId,
              _0x53edc0.blockId,
              _0x53edc0.config,
            ),
          true),
  },
  D = {
    id: "docs-callout.mutation.remove-config",
    type: _0x238a64.MUTATION,
    handler: (_0x1acd3e, _0xe9ab2b) =>
      !(_0xe9ab2b != null && _0xe9ab2b.unitId) || !_0xe9ab2b.blockId
        ? false
        : (_0x1acd3e.get(T).removeCallout(_0xe9ab2b.unitId, _0xe9ab2b.blockId),
          true),
  },
  Oe = y.paddingLeft + y.iconSize + y.iconGap,
  ke = y.paddingRight;
var O = class extends Error {
  constructor(_0x3b0010 = "Insert range cannot cross table cell boundaries") {
    super(_0x3b0010);
  }
};
function Ae(_0x4b1244) {
  var _0x58adb9;
  let _0x427328 = k(_0x4b1244.documentData),
    _0x51ab08 = j(_0x427328),
    _0x512ebd = je(_0x4b1244.startOffset, _0x4b1244.endOffset),
    _0x3acb6f = _0x512ebd
      ? (_0x58adb9 = _0x51ab08.blockRanges) == null
        ? undefined
        : _0x58adb9.find((_0x1b6fd0) => {
            let _0x3c53cc = _0x2f6d01(_0x1b6fd0);
            return (
              _0x3c53cc.startOffset === _0x512ebd.startOffset &&
              _0x3c53cc.endOffset === _0x512ebd.endOffset
            );
          })
      : undefined,
    { startOffset: _0x413461, endOffset: _0x28f654 } = _0x3acb6f
      ? _0x512ebd
      : Ge(
          _0x51ab08,
          _0x4b1244.startOffset,
          _0x4b1244.endOffset,
          _0x4b1244.insertionMode,
        );
  if (!_0x3acb6f && Me(_0x51ab08, _0x413461, _0x28f654))
    throw new O("Insert range cannot overlap an existing document block");
  let _0x349310 = Je(_0x51ab08, _0x413461, _0x28f654),
    _0x3a8a31 =
      (_0x3acb6f == null ? undefined : _0x3acb6f.blockId) ?? _0x4b1244.blockId,
    _0x4da9ad = we(_0x4b1244.metadata, _0x3a8a31, x(_0x4b1244.config));
  if (_0x3acb6f)
    return (
      (_0x3acb6f.blockType = _0xe1d7c.CALLOUT),
      Ne(_0x51ab08, _0x413461, _0x28f654),
      Fe(_0x51ab08, _0x413461, _0x28f654, _0x349310),
      N(_0x51ab08, _0x3acb6f),
      {
        nextDocumentData: _0x427328,
        nextMetadata: _0x4da9ad,
        cursorOffset: _0x413461 + 1,
      }
    );
  if (_0x413461 === _0x28f654) {
    var _0x761e78, _0x5c972d;
    let _0x27bbd4 =
      "" + _0x1e688f.BLOCK_START + _0x1e688f.PARAGRAPH + _0x1e688f.BLOCK_END;
    P(_0x51ab08, _0x413461, _0x27bbd4, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: _0x4cb854(
            new Set(
              (_0x761e78 = _0x51ab08.paragraphs) == null
                ? undefined
                : _0x761e78.map((_0x268b94) => _0x268b94.paragraphId),
            ),
          ),
          paragraphStyle: Pe(true, true, _0x349310),
        },
      ],
      blockRanges: [
        {
          blockId: _0x3a8a31,
          blockType: _0xe1d7c.CALLOUT,
          startIndex: 0,
          endIndex: _0x27bbd4.length - 1,
        },
      ],
    });
    let _0x4fa2d2 =
      (_0x5c972d = _0x51ab08.blockRanges) == null
        ? undefined
        : _0x5c972d.find((_0x4a8335) => _0x4a8335.blockId === _0x3a8a31);
    return (
      _0x4fa2d2 && N(_0x51ab08, _0x4fa2d2),
      {
        nextDocumentData: _0x427328,
        nextMetadata: _0x4da9ad,
        cursorOffset: _0x413461 + 1,
      }
    );
  }
  (P(_0x51ab08, _0x28f654, _0x1e688f.BLOCK_END),
    P(_0x51ab08, _0x413461, _0x1e688f.BLOCK_START),
    Fe(_0x51ab08, _0x413461, _0x28f654 + 1, _0x349310));
  let _0x147b23 = {
    blockId: _0x3a8a31,
    blockType: _0xe1d7c.CALLOUT,
    startIndex: _0x413461,
    endIndex: _0x28f654 + 1,
  };
  return (
    (_0x51ab08.blockRanges = [...(_0x51ab08.blockRanges ?? []), _0x147b23].sort(
      (_0xeff0ae, _0x3e92fa) => _0xeff0ae.startIndex - _0x3e92fa.startIndex,
    )),
    N(_0x51ab08, _0x147b23),
    {
      nextDocumentData: _0x427328,
      nextMetadata: _0x4da9ad,
      cursorOffset: _0x413461 + 1,
    }
  );
}
function je(_0x597f81, _0x1b9c0f) {
  return _0x597f81 == null || _0x1b9c0f == null || _0x597f81 === _0x1b9c0f
    ? null
    : {
        startOffset: Math.min(_0x597f81, _0x1b9c0f),
        endOffset: Math.max(_0x597f81, _0x1b9c0f),
      };
}
function Me(_0x5e95d3, _0x255856, _0x3047dd) {
  return (_0x5e95d3.blockRanges ?? []).some((_0x3fdb08) => {
    let _0x2564ae = _0x2f6d01(_0x3fdb08);
    return _0x255856 === _0x3047dd
      ? _0x288a43(_0x2564ae, _0x255856)
      : _0x53933d(_0x2564ae, { startOffset: _0x255856, endOffset: _0x3047dd });
  });
}
function Ne(_0x317ff5, _0x116a20, _0x2c53b8) {
  (_0x317ff5.paragraphs ?? [])
    .filter(
      (_0x1f30e0) =>
        _0x1f30e0.startIndex > _0x116a20 && _0x1f30e0.startIndex < _0x2c53b8,
    )
    .forEach((_0x52a93b) => {
      let _0x5c88a0 = { ...(_0x52a93b.paragraphStyle ?? {}) };
      (delete _0x5c88a0.textStyle, (_0x52a93b.paragraphStyle = _0x5c88a0));
    });
}
function Pe(_0x181be9, _0x13781b, _0x1eb93c = false) {
  return {
    indentStart: { v: Oe },
    indentEnd: { v: ke },
    keepLines: _0x4819c3.TRUE,
    keepNext: _0x13781b ? _0x4819c3.FALSE : _0x4819c3.TRUE,
    widowControl: _0x4819c3.TRUE,
    ...(_0x181be9 && _0x1eb93c ? { spaceAbove: { v: 8 } } : {}),
    ...(_0x13781b ? { spaceBelow: { v: 0 } } : {}),
  };
}
function Fe(_0x41ca61, _0x57138b, _0x2fc578, _0x5d5eae = false) {
  let _0x22ac74 = (_0x41ca61.paragraphs ?? []).filter(
    (_0x4e9ddd) =>
      _0x4e9ddd.startIndex > _0x57138b && _0x4e9ddd.startIndex < _0x2fc578,
  );
  _0x22ac74.forEach((_0x366742, _0x1be439) => {
    _0x366742.paragraphStyle = {
      ...(_0x366742.paragraphStyle ?? {}),
      ...Pe(_0x1be439 === 0, _0x1be439 === _0x22ac74.length - 1, _0x5d5eae),
    };
  });
}
function Ie(_0x775825) {
  let _0x512400 = { ...(_0x775825 ?? {}) };
  return (
    delete _0x512400.indentStart,
    delete _0x512400.indentEnd,
    delete _0x512400.spaceAbove,
    delete _0x512400.spaceBelow,
    delete _0x512400.keepLines,
    delete _0x512400.keepNext,
    delete _0x512400.widowControl,
    _0x512400
  );
}
function Le(_0x5579e0) {
  var _0x1d5d79, _0x210943;
  let _0x686625 = k(_0x5579e0.documentData),
    _0x35ff93 = j(_0x686625),
    _0x68335c =
      (_0x1d5d79 = _0x35ff93.blockRanges) == null
        ? undefined
        : _0x1d5d79.find(
            (_0x4d92bb) =>
              _0x4d92bb.blockId === _0x5579e0.blockId &&
              _0x4d92bb.blockType === _0xe1d7c.CALLOUT,
          );
  if (!_0x68335c)
    return {
      nextDocumentData: _0x686625,
      nextMetadata: b(_0x5579e0.metadata),
      cursorOffset: 0,
    };
  let _0x53e3cb = _0x2f6d01(_0x68335c);
  return (
    F(_0x35ff93, _0x53e3cb.startOffset, _0x53e3cb.endOffset),
    (_0x35ff93.blockRanges =
      (_0x210943 = _0x35ff93.blockRanges) == null
        ? undefined
        : _0x210943.filter(
            (_0x513133) => _0x513133.blockId !== _0x5579e0.blockId,
          )),
    {
      nextDocumentData: _0x686625,
      nextMetadata: Te(_0x5579e0.metadata, _0x5579e0.blockId),
      cursorOffset: _0x68335c.startIndex,
    }
  );
}
function Re(_0x5255bc) {
  var _0x32b89e, _0xfda4b4;
  let _0x1c6ff1 = k(_0x5255bc.documentData),
    _0x27a5d5 = j(_0x1c6ff1),
    _0x2dcc74 =
      (_0x32b89e = _0x27a5d5.blockRanges) == null
        ? undefined
        : _0x32b89e.find(
            (_0xa5ce79) =>
              _0xa5ce79.blockId === _0x5255bc.blockId &&
              _0xa5ce79.blockType === _0xe1d7c.CALLOUT,
          );
  if (!_0x2dcc74) return null;
  let _0x2daccd = M(_0x2dcc74);
  return (
    (_0x27a5d5.paragraphs ?? [])
      .filter(
        (_0x2c508b) =>
          _0x2c508b.startIndex > _0x2dcc74.startIndex &&
          _0x2c508b.startIndex < _0x2daccd,
      )
      .forEach((_0x54c048) => {
        _0x54c048.paragraphStyle = Ie(_0x54c048.paragraphStyle);
      }),
    F(_0x27a5d5, _0x2daccd, _0x2daccd + 1),
    F(_0x27a5d5, _0x2dcc74.startIndex, _0x2dcc74.startIndex + 1),
    (_0x27a5d5.blockRanges =
      (_0xfda4b4 = _0x27a5d5.blockRanges) == null
        ? undefined
        : _0xfda4b4.filter(
            (_0x4bc8dc) => _0x4bc8dc.blockId !== _0x5255bc.blockId,
          )),
    {
      nextDocumentData: _0x1c6ff1,
      nextMetadata: Te(_0x5255bc.metadata, _0x5255bc.blockId),
      cursorOffset: _0x2dcc74.startIndex,
    }
  );
}
function ze(_0x372cdb) {
  let _0x2d6925 = k(_0x372cdb.documentData),
    _0x3b6713 = j(_0x2d6925),
    _0x45b9d9 = Ue(_0x3b6713, _0x372cdb.cursorOffset);
  return (
    (_0x45b9d9 &&
      Be(
        _0x2d6925,
        _0x3b6713,
        _0x45b9d9,
        _0x372cdb.cursorOffset,
        _0x372cdb.metadata,
        _0x372cdb.paragraphStartIndex,
      )) ||
    null
  );
}
function Be(_0x2d11fb, _0x5c59ae, _0x2b3200, _0x36e835, _0x43b8dc, _0x164367) {
  let _0xbbb7f3 = tt(_0x5c59ae, _0x2b3200, _0x36e835, _0x164367);
  if (!_0xbbb7f3) return null;
  let _0x1b3332 = _0xbbb7f3.endTokenOffset - 1;
  return (
    F(
      _0x5c59ae,
      _0xbbb7f3.paragraph["startIndex"],
      _0xbbb7f3.paragraph["startIndex"] + 1,
    ),
    {
      nextDocumentData: _0x2d11fb,
      nextMetadata: b(_0x43b8dc),
      cursorOffset: _0x1b3332,
    }
  );
}
function Ve(_0x3616a9, _0x5df476) {
  var _0x157651;
  return _0x3616a9 == null || (_0x157651 = _0x3616a9.blockRanges) == null
    ? undefined
    : _0x157651.find(
        (_0x28cddd) =>
          _0x28cddd.blockType === _0xe1d7c.CALLOUT &&
          _0x28cddd.startIndex <= _0x5df476 &&
          _0x5df476 <= _0x28cddd.endIndex,
      );
}
function He(_0x25c072) {
  let _0x876fe1 = _0x25c072.documentData["body"];
  if (!_0x876fe1) return false;
  let _0x26bf57 =
      _0x25c072.direction === "left"
        ? _0x25c072.cursorOffset - 1
        : _0x25c072.cursorOffset,
    _0x35ac81 =
      _0x25c072.direction === "right" ? _0x25c072.cursorOffset + 1 : _0x26bf57;
  return (_0x876fe1.blockRanges ?? []).some((_0xb4c634) =>
    _0xb4c634.blockType === _0xe1d7c.CALLOUT
      ? _0x26bf57 === _0xb4c634.startIndex || _0x35ac81 === _0xb4c634.startIndex
      : false,
  );
}
function Ue(_0x1bff8c, _0x59648d) {
  var _0x1fc9ec;
  return (_0x1fc9ec = _0x1bff8c.blockRanges) == null
    ? undefined
    : _0x1fc9ec.find((_0x1b2efe) => {
        let _0x38b835 = M(_0x1b2efe);
        return (
          _0x1b2efe.blockType === _0xe1d7c.CALLOUT &&
          _0x1b2efe.startIndex <= _0x59648d &&
          _0x59648d <= _0x38b835 + 2
        );
      });
}
function k(_0x84d340) {
  return {
    ..._0x84d340,
    body: _0x84d340.body ? We(_0x84d340.body) : _0x84d340.body,
  };
}
function We(_0x1a04fe) {
  var _0x58b03a,
    _0x41c60d,
    _0x2f62d8,
    _0x4b9ceb,
    _0x5b181a,
    _0x3ca7c7,
    _0x24068a,
    _0x1a8583,
    _0x370673;
  return {
    ..._0x1a04fe,
    paragraphs:
      (_0x58b03a = _0x1a04fe.paragraphs) == null
        ? undefined
        : _0x58b03a.map((_0x4f9516) => ({
            ..._0x4f9516,
            bullet: A(_0x4f9516.bullet),
            paragraphStyle: A(_0x4f9516.paragraphStyle),
          })),
    sectionBreaks:
      (_0x41c60d = _0x1a04fe.sectionBreaks) == null
        ? undefined
        : _0x41c60d.map((_0x26d978) => ({ ..._0x26d978 })),
    textRuns:
      (_0x2f62d8 = _0x1a04fe.textRuns) == null
        ? undefined
        : _0x2f62d8.map((_0x21be0d) => ({ ..._0x21be0d })),
    tables:
      (_0x4b9ceb = _0x1a04fe.tables) == null
        ? undefined
        : _0x4b9ceb.map((_0x4d4f46) => ({ ..._0x4d4f46 })),
    columnGroups:
      (_0x5b181a = _0x1a04fe.columnGroups) == null
        ? undefined
        : _0x5b181a.map((_0xbcd05c) => {
            var _0x5a6b8b;
            return {
              ..._0xbcd05c,
              columns:
                (_0x5a6b8b = _0xbcd05c.columns) == null
                  ? undefined
                  : _0x5a6b8b.map((_0x1402ab) => A(_0x1402ab)),
            };
          }),
    blockRanges:
      (_0x3ca7c7 = _0x1a04fe.blockRanges) == null
        ? undefined
        : _0x3ca7c7.map((_0x11fdca) => ({ ..._0x11fdca })),
    customRanges:
      (_0x24068a = _0x1a04fe.customRanges) == null
        ? undefined
        : _0x24068a.map((_0x1a0ae8) => ({ ..._0x1a0ae8 })),
    customDecorations:
      (_0x1a8583 = _0x1a04fe.customDecorations) == null
        ? undefined
        : _0x1a8583.map((_0x12eaaa) => ({ ..._0x12eaaa })),
    customBlocks:
      (_0x370673 = _0x1a04fe.customBlocks) == null
        ? undefined
        : _0x370673.map((_0x173499) => ({ ..._0x173499 })),
  };
}
function A(_0x58195f) {
  return Array.isArray(_0x58195f)
    ? _0x58195f.map((_0x4c04a8) => A(_0x4c04a8))
    : !_0x58195f || typeof _0x58195f != "object"
      ? _0x58195f
      : Object.fromEntries(
          Object.entries(_0x58195f).map(([_0x172cc2, _0x1a5f5d]) => [
            _0x172cc2,
            A(_0x1a5f5d),
          ]),
        );
}
function j(_0x451fd5) {
  if (!_0x451fd5.body) throw Error("Document body is required");
  return _0x451fd5.body;
}
function Ge(_0x2f130a, _0x577580, _0x4d0b1f, _0x3a39cf = "convert-paragraph") {
  if (_0x577580 == null || _0x4d0b1f == null) {
    let _0x534109 = qe(_0x2f130a);
    return { startOffset: _0x534109, endOffset: _0x534109 };
  }
  let _0x4b693b = Math.min(_0x577580, _0x4d0b1f),
    _0x1a8f09 = Math.max(_0x577580, _0x4d0b1f),
    _0x2acc6a = $e(_0x2f130a, _0x4b693b, _0x1a8f09);
  return _0x4b693b === _0x1a8f09
    ? _0x3a39cf === "insert-new"
      ? { startOffset: _0x4b693b, endOffset: _0x1a8f09 }
      : Ke(_0x2f130a, _0x4b693b, _0x2acc6a)
    : Ye(_0x2f130a, _0x4b693b, _0x1a8f09, _0x2acc6a);
}
function Ke(_0x4eb7d3, _0x540ca1, _0xb0950) {
  let _0x417a82 = Xe(_0x4eb7d3, _0x540ca1);
  if (_0x417a82) {
    let _0x34f52b = Ze(_0x4eb7d3, _0x417a82, _0xb0950);
    if (_0x34f52b < _0x417a82.startIndex)
      return {
        startOffset: _0x34f52b,
        endOffset: _0xb0950
          ? Math.min(_0x417a82.startIndex + 1, _0xb0950.endOffset)
          : _0x417a82.startIndex + 1,
      };
  }
  let _0x2fa64d =
    _0x540ca1 === 0 && _0x4eb7d3.dataStream[0] === _0x1e688f.PARAGRAPH
      ? 1
      : _0x540ca1;
  return { startOffset: _0x2fa64d, endOffset: _0x2fa64d };
}
function qe(_0x3f4ad3) {
  let _0x16453c = _0x3f4ad3.dataStream;
  return _0x16453c.endsWith(_0x1e688f.SECTION_BREAK)
    ? Math.max(0, _0x16453c.length - 1)
    : _0x16453c.length;
}
function Je(_0x420f36, _0x426c69, _0x4b84ea) {
  var _0x55a19e;
  let _0x366589 = Math.min(_0x426c69, _0x4b84ea),
    _0x588fa7 = Math.max(_0x426c69, _0x4b84ea);
  return !!(
    (_0x55a19e = _0x420f36.tables) != null &&
    _0x55a19e.some(
      (_0x2a1cc3) =>
        (_0x366589 > _0x2a1cc3.startIndex && _0x366589 < _0x2a1cc3.endIndex) ||
        (_0x588fa7 > _0x2a1cc3.startIndex && _0x588fa7 < _0x2a1cc3.endIndex) ||
        (_0x366589 <= _0x2a1cc3.startIndex && _0x588fa7 >= _0x2a1cc3.endIndex),
    )
  );
}
function Ye(_0x26497c, _0x576c9e, _0x26bf91, _0x46f324) {
  let _0xc2796 = [...(_0x26497c.paragraphs ?? [])].sort(
      (_0xa166e2, _0x12d56c) => _0xa166e2.startIndex - _0x12d56c.startIndex,
    ),
    _0x26d61e = _0x29096d(_0x26497c),
    _0x5e5de2 = _0xc2796.find(
      (_0xec867f) =>
        Ze(_0x26497c, _0xec867f, _0x46f324, _0x26d61e) <= _0x576c9e &&
        _0x576c9e <= _0xec867f.startIndex,
    ),
    _0x5a0094 =
      _0xc2796.find((_0x9c983) => _0x9c983.startIndex >= _0x26bf91 - 1) ??
      _0xc2796[_0xc2796.length - 1];
  return {
    startOffset: _0x5e5de2
      ? Ze(_0x26497c, _0x5e5de2, _0x46f324, _0x26d61e)
      : _0x576c9e,
    endOffset: _0x5a0094 ? Qe(_0x5a0094, _0x46f324) : _0x26bf91,
  };
}
function Xe(_0x1f0349, _0x2c6a48) {
  let _0x1a7149 = [...(_0x1f0349.paragraphs ?? [])].sort(
      (_0x436776, _0x7f01d9) => _0x436776.startIndex - _0x7f01d9.startIndex,
    ),
    _0x171387 = _0x29096d(_0x1f0349);
  return _0x1a7149.find(
    (_0x1b9fb9) =>
      (_0x171387.get(_0x1b9fb9.startIndex) ?? 0) <= _0x2c6a48 &&
      _0x2c6a48 <= _0x1b9fb9.startIndex,
  );
}
function Ze(_0x52409a, _0x1f25eb, _0x18e705, _0x3b07be) {
  let _0x10a27d =
    (_0x3b07be == null ? undefined : _0x3b07be.get(_0x1f25eb.startIndex)) ??
    _0x3eb920(_0x52409a, _0x1f25eb);
  return _0x18e705 ? Math.max(_0x10a27d, _0x18e705.startOffset) : _0x10a27d;
}
function Qe(_0x2af854, _0x3bd36f) {
  let _0x2f558e = _0x2af854.startIndex + 1;
  return _0x3bd36f ? Math.min(_0x2f558e, _0x3bd36f.endOffset) : _0x2f558e;
}
function $e(_0x277fcb, _0x6f0706, _0x5240dd) {
  let _0x88302c = et(_0x277fcb, _0x6f0706),
    _0x16638c = et(
      _0x277fcb,
      _0x6f0706 === _0x5240dd ? _0x5240dd : Math.max(_0x6f0706, _0x5240dd - 1),
    );
  if (!(!_0x88302c && !_0x16638c)) {
    if (
      !_0x88302c ||
      !_0x16638c ||
      _0x88302c.startTokenOffset !== _0x16638c.startTokenOffset ||
      _0x88302c.endTokenOffset !== _0x16638c.endTokenOffset
    )
      throw new O();
    return _0x88302c;
  }
}
function et(_0x41cbd0, _0x228dc6) {
  let _0x374fc5 = _0x41cbd0.dataStream,
    _0x31ad72 = -1;
  for (
    let _0x5cee51 = Math.min(_0x228dc6, _0x374fc5.length - 1);
    _0x5cee51 >= 0;
    _0x5cee51--
  ) {
    let _0xa5531f = _0x374fc5[_0x5cee51];
    if (_0xa5531f === _0x1e688f.TABLE_CELL_END) return;
    if (_0xa5531f === _0x1e688f.TABLE_CELL_START) {
      _0x31ad72 = _0x5cee51;
      break;
    }
  }
  if (_0x31ad72 < 0) return;
  let _0x13072f = _0x374fc5.indexOf(_0x1e688f.TABLE_CELL_END, _0x31ad72 + 1);
  if (!(
    _0x13072f < 0 ||
    _0x228dc6 < _0x31ad72 + 1 ||
    _0x228dc6 > _0x13072f - 1
  ))
    return {
      startOffset: _0x31ad72 + 1,
      endOffset: Math.max(_0x31ad72 + 1, _0x13072f - 1),
      startTokenOffset: _0x31ad72,
      endTokenOffset: _0x13072f,
    };
}
function M(_0x56e865) {
  return _0x2f6d01(_0x56e865).endOffset - 1;
}
function tt(_0x23efac, _0x225fa7, _0x2b1687, _0x51fe0a) {
  let _0x37558b = M(_0x225fa7),
    _0x1dbc35 = (_0x23efac.paragraphs ?? []).find(
      (_0x5870e1) => _0x5870e1.startIndex === _0x37558b + 1,
    );
  if (
    !_0x1dbc35 ||
    (_0x51fe0a != null && _0x1dbc35.startIndex !== _0x51fe0a) ||
    _0x2b1687 < _0x37558b ||
    _0x2b1687 > _0x1dbc35.startIndex + 1 ||
    _0x23efac.dataStream[_0x1dbc35.startIndex] !== _0x1e688f.PARAGRAPH
  )
    return null;
  let _0x413209 = _0x3eb920(_0x23efac, _0x1dbc35),
    _0x5e0fc1 = _0x23efac.dataStream["slice"](_0x413209, _0x1dbc35.startIndex);
  return Array.from(_0x5e0fc1).every(
    (_0x229797) => _0x229797 === _0x1e688f.BLOCK_END,
  )
    ? { paragraph: _0x1dbc35, endTokenOffset: _0x37558b }
    : null;
}
function N(_0x1bdd94, _0x3504b6) {
  var _0x306f14;
  let _0x1bf8a3 = M(_0x3504b6),
    _0x5a5f96 = _0x1bdd94.dataStream[_0x1bf8a3 + 1];
  (_0x5a5f96 === _0x1e688f.SECTION_BREAK || _0x5a5f96 === undefined) &&
    P(_0x1bdd94, _0x1bf8a3 + 1, _0x1e688f.PARAGRAPH, {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: _0x4cb854(
            new Set(
              (_0x306f14 = _0x1bdd94.paragraphs) == null
                ? undefined
                : _0x306f14.map((_0xb647f3) => _0xb647f3.paragraphId),
            ),
          ),
        },
      ],
    });
}
function P(_0x5f5c3d, _0x299fb7, _0x3421ab, _0x3fe703 = {}) {
  var _0x52a737, _0x1755d6;
  _0x3421ab &&
    ((_0x5f5c3d.dataStream =
      "" +
      _0x5f5c3d.dataStream["slice"](0, _0x299fb7) +
      _0x3421ab +
      _0x5f5c3d.dataStream["slice"](_0x299fb7)),
    nt(_0x5f5c3d, _0x299fb7, _0x3421ab.length),
    (_0x52a737 = _0x3fe703.paragraphs) != null &&
      _0x52a737.length &&
      (_0x5f5c3d.paragraphs = [
        ...(_0x5f5c3d.paragraphs ?? []),
        ..._0x3fe703.paragraphs["map"]((_0x567478) => ({
          ..._0x567478,
          startIndex: _0x567478.startIndex + _0x299fb7,
        })),
      ].sort(
        (_0x17d565, _0x6e4aef) => _0x17d565.startIndex - _0x6e4aef.startIndex,
      )),
    (_0x1755d6 = _0x3fe703.blockRanges) != null &&
      _0x1755d6.length &&
      (_0x5f5c3d.blockRanges = [
        ...(_0x5f5c3d.blockRanges ?? []),
        ..._0x3fe703.blockRanges["map"]((_0x25ecf5) => ({
          ..._0x25ecf5,
          startIndex: _0x25ecf5.startIndex + _0x299fb7,
          endIndex: _0x25ecf5.endIndex + _0x299fb7,
        })),
      ].sort(
        (_0x3f833a, _0x42fdca) => _0x3f833a.startIndex - _0x42fdca.startIndex,
      )));
}
function F(_0x17d8e9, _0xd90a1f, _0x2d882c) {
  let _0x4d4659 = _0x2d882c - _0xd90a1f;
  ((_0x17d8e9.dataStream =
    "" +
    _0x17d8e9.dataStream["slice"](0, _0xd90a1f) +
    _0x17d8e9.dataStream["slice"](_0x2d882c)),
    rt(_0x17d8e9, _0xd90a1f, _0x4d4659));
}
function nt(_0x320b3e, _0x55604b, _0x15c39e) {
  ((_0x320b3e.paragraphs = I(_0x320b3e.paragraphs, _0x55604b, _0x15c39e)),
    (_0x320b3e.sectionBreaks = I(
      _0x320b3e.sectionBreaks,
      _0x55604b,
      _0x15c39e,
    )),
    (_0x320b3e.customBlocks = I(_0x320b3e.customBlocks, _0x55604b, _0x15c39e)),
    (_0x320b3e.textRuns = it(_0x320b3e.textRuns, _0x55604b, _0x15c39e)),
    (_0x320b3e.tables = at(_0x320b3e.tables, _0x55604b, _0x15c39e)),
    (_0x320b3e.columnGroups = R(_0x320b3e.columnGroups, _0x55604b, _0x15c39e)),
    (_0x320b3e.customRanges = R(_0x320b3e.customRanges, _0x55604b, _0x15c39e)),
    (_0x320b3e.customDecorations = R(
      _0x320b3e.customDecorations,
      _0x55604b,
      _0x15c39e,
    )),
    (_0x320b3e.blockRanges = R(_0x320b3e.blockRanges, _0x55604b, _0x15c39e)));
}
function rt(_0x1a26d9, _0x175175, _0x638b2b) {
  var _0x4f8370, _0x2fc0f3;
  ((_0x1a26d9.paragraphs = L(_0x1a26d9.paragraphs, _0x175175, _0x638b2b)),
    (_0x1a26d9.sectionBreaks = L(
      _0x1a26d9.sectionBreaks,
      _0x175175,
      _0x638b2b,
    )),
    (_0x1a26d9.customBlocks = L(_0x1a26d9.customBlocks, _0x175175, _0x638b2b)),
    (_0x1a26d9.textRuns =
      (_0x4f8370 = ot(
        (_0x2fc0f3 = _0x1a26d9.textRuns) == null
          ? undefined
          : _0x2fc0f3.map((_0x2d89ab) => ({
              ..._0x2d89ab,
              startIndex: _0x2d89ab.st,
              endIndex: _0x2d89ab.ed,
            })),
        _0x175175,
        _0x638b2b,
      )) == null
        ? undefined
        : _0x4f8370.map((_0x40ebec) => {
            let {
              startIndex: _0x2340c,
              endIndex: _0x921fc7,
              ..._0x248ed4
            } = _0x40ebec;
            return { ..._0x248ed4, st: _0x2340c, ed: _0x921fc7 };
          })),
    (_0x1a26d9.tables = ot(_0x1a26d9.tables, _0x175175, _0x638b2b)),
    (_0x1a26d9.columnGroups = z(_0x1a26d9.columnGroups, _0x175175, _0x638b2b)),
    (_0x1a26d9.customRanges = z(_0x1a26d9.customRanges, _0x175175, _0x638b2b)),
    (_0x1a26d9.customDecorations = z(
      _0x1a26d9.customDecorations,
      _0x175175,
      _0x638b2b,
    )),
    (_0x1a26d9.blockRanges = z(_0x1a26d9.blockRanges, _0x175175, _0x638b2b)));
}
function I(_0x10d726, _0x42ceea, _0x456fc2) {
  return _0x10d726 == null
    ? undefined
    : _0x10d726.map((_0x2dfb98) =>
        _0x2dfb98.startIndex >= _0x42ceea
          ? { ..._0x2dfb98, startIndex: _0x2dfb98.startIndex + _0x456fc2 }
          : _0x2dfb98,
      );
}
function L(_0x1280bc, _0x58356c, _0x1b917d) {
  let _0x46fb62 = _0x58356c + _0x1b917d;
  return _0x1280bc == null
    ? undefined
    : _0x1280bc
        .map((_0x42a02d) =>
          _0x42a02d.startIndex >= _0x58356c && _0x42a02d.startIndex < _0x46fb62
            ? null
            : _0x42a02d.startIndex >= _0x46fb62
              ? { ..._0x42a02d, startIndex: _0x42a02d.startIndex - _0x1b917d }
              : _0x42a02d,
        )
        .filter((_0x31d3b7) => _0x31d3b7 != null);
}
function it(_0x2492d2, _0x4c8857, _0x333fa8) {
  return _0x2492d2 == null
    ? undefined
    : _0x2492d2.map((_0x1524d0) =>
        _0x1524d0.st >= _0x4c8857
          ? {
              ..._0x1524d0,
              st: _0x1524d0.st + _0x333fa8,
              ed: _0x1524d0.ed + _0x333fa8,
            }
          : _0x1524d0.ed > _0x4c8857
            ? { ..._0x1524d0, ed: _0x1524d0.ed + _0x333fa8 }
            : _0x1524d0,
      );
}
function R(_0x673f5c, _0x3686b4, _0x27c3a2) {
  return _0x673f5c == null
    ? undefined
    : _0x673f5c.map((_0x705c23) => _0x54b453(_0x705c23, _0x3686b4, _0x27c3a2));
}
function at(_0x48998f, _0x32db03, _0x50ef73) {
  return _0x48998f == null
    ? undefined
    : _0x48998f.map((_0x2779f9) => _0x74b0b8(_0x2779f9, _0x32db03, _0x50ef73));
}
function z(_0x51d231, _0x4f486f, _0x57d14d) {
  return _0x51d231 == null
    ? undefined
    : _0x51d231
        .map((_0x127cb6) => _0x40c8b8(_0x127cb6, _0x4f486f, _0x57d14d))
        .filter((_0xfabd2c) => _0xfabd2c != null);
}
function ot(_0x2037b4, _0x46109d, _0xebbf92) {
  return _0x2037b4 == null
    ? undefined
    : _0x2037b4
        .map((_0x3155e7) => _0x75e152(_0x3155e7, _0x46109d, _0xebbf92))
        .filter((_0x2416cc) => _0x2416cc != null);
}
const st = {
    id: "docs-callout.command.insert-below",
    type: _0x238a64.COMMAND,
    handler: (_0x15a7aa) => {
      var _0x29acab;
      if (_0x5994a9(q(_0x15a7aa))) return false;
      let _0x3200f6 = _0x3a5590(_0x15a7aa);
      if (_0x3200f6)
        return _0x15a7aa
          .get(_0x15becf)
          .syncExecuteCommand(B.id, {
            startOffset: _0x3200f6.startOffset,
            endOffset: _0x3200f6.endOffset,
            insertionMode: "insert-new",
            unitId: _0x3200f6.unitId,
          });
      let _0xe6e8fd = dt(_0x15a7aa);
      if (!_0xe6e8fd) return false;
      let _0x314950 =
          (_0x29acab = _0x15a7aa
            .get(_0x368266)
            .getCurrentUnitOfType(_0x454d40.UNIVER_DOC)) == null
            ? undefined
            : _0x29acab.getBody(),
        _0x5643d5 = _0x314950
          ? _0x48380c(_0x314950, _0xe6e8fd)
          : _0xe6e8fd.startIndex + 1;
      return _0x15a7aa
        .get(_0x15becf)
        .syncExecuteCommand(B.id, {
          startOffset: _0x5643d5,
          endOffset: _0x5643d5,
        });
    },
  },
  ct = {
    id: "docs-callout.command.consume-boundary-delete",
    type: _0x238a64.COMMAND,
    handler: () => true,
  },
  B = {
    id: "docs-callout.command.insert",
    type: _0x238a64.COMMAND,
    handler: (_0x4e1148, _0x28b811) => {
      let _0x4ca1bd = K(
        _0x4e1148,
        _0x28b811 == null ? undefined : _0x28b811.unitId,
      );
      if (!_0x4ca1bd) return false;
      let _0x229bd5 = q(_0x4e1148);
      if (_0x5994a9(_0x229bd5)) return false;
      let _0x1ea443 = _0x4ca1bd.model["serialize"](_0x4ca1bd.unitId),
        _0x57f96e = ut(_0x28b811, _0x229bd5),
        _0x2665df = ht(_0x4ca1bd.previousDocumentData, _0x57f96e);
      if (_0x2665df) {
        if (_0x2665df.blockType !== _0xe1d7c.CALLOUT) return false;
        let _0x5213f4 = Re({
          blockId: _0x2665df.blockId,
          documentData: _0x4ca1bd.previousDocumentData,
          metadata: _0x1ea443,
        });
        if (!_0x5213f4) return false;
        let _0x1748e8 = X(
          _0x4ca1bd.commandService,
          _0x4ca1bd.unitId,
          _0x4ca1bd.previousDocumentData,
          _0x5213f4.nextDocumentData,
          B.id,
          _0x5213f4.cursorOffset,
        );
        return (
          _0x1748e8 &&
            _0x4ca1bd.model["deserialize"](
              _0x4ca1bd.unitId,
              _0x5213f4.nextMetadata,
            ),
          _0x1748e8
        );
      }
      let _0x46e699 =
          (_0x28b811 == null ? undefined : _0x28b811.blockId) ?? _0x1427e6(6),
        _0x2cfed6;
      try {
        _0x2cfed6 = Ae({
          blockId: _0x46e699,
          config: _0x28b811 == null ? undefined : _0x28b811.config,
          documentData: _0x4ca1bd.previousDocumentData,
          endOffset: _0x57f96e == null ? undefined : _0x57f96e.endOffset,
          insertionMode:
            _0x28b811 == null ? undefined : _0x28b811.insertionMode,
          metadata: _0x1ea443,
          startOffset: _0x57f96e == null ? undefined : _0x57f96e.startOffset,
        });
      } catch (_0xf0d60) {
        if (_0xf0d60 instanceof O) return false;
        throw _0xf0d60;
      }
      let _0x5202d5 = X(
        _0x4ca1bd.commandService,
        _0x4ca1bd.unitId,
        _0x4ca1bd.previousDocumentData,
        _0x2cfed6.nextDocumentData,
        B.id,
        _0x2cfed6.cursorOffset,
      );
      return (
        _0x5202d5 &&
          _0x4ca1bd.model["deserialize"](
            _0x4ca1bd.unitId,
            _0x2cfed6.nextMetadata,
          ),
        _0x5202d5
      );
    },
  },
  lt = {
    id: "docs-callout.command.update",
    type: _0x238a64.COMMAND,
    handler: (_0x3e59b8, _0x355848) => {
      if (!_0x355848) return false;
      let _0x44d10c = K(_0x3e59b8, _0x355848.unitId);
      if (!_0x44d10c) return false;
      let _0x40e37d = _0x44d10c.model["getCalloutConfig"](
        _0x44d10c.unitId,
        _0x355848.blockId,
      );
      if (!_0x40e37d || !pt(_0x44d10c.previousDocumentData, _0x355848.blockId))
        return false;
      let _0x588dfa = x({ ..._0x40e37d, ..._0x355848.config }),
        _0x2bf83d = {
          blockId: _0x355848.blockId,
          config: _0x588dfa,
          unitId: _0x44d10c.unitId,
        },
        _0x35f090 = {
          blockId: _0x355848.blockId,
          config: _0x40e37d,
          unitId: _0x44d10c.unitId,
        };
      return _0x44d10c.commandService["syncExecuteCommand"](E.id, _0x2bf83d)
        ? (_0x3e59b8
            .get(_0x48eb8c)
            .pushUndoRedo({
              unitID: _0x44d10c.unitId,
              redoMutations: [{ id: E.id, params: _0x2bf83d }],
              undoMutations: [{ id: E.id, params: _0x35f090 }],
            }),
          true)
        : false;
    },
  },
  V = {
    id: "docs-callout.command.set-text-color",
    type: _0x238a64.COMMAND,
    handler: (_0x3509a5, _0x35c24d) => {
      if (!_0x35c24d) return false;
      let _0x4efb61 = K(_0x3509a5, _0x35c24d.unitId);
      if (!_0x4efb61) return false;
      let _0x129a01 = mt(
        _0x4efb61.previousDocumentData,
        _0x35c24d.blockId,
        _0x35c24d.value,
      );
      return _0x129a01
        ? !!_0x4efb61.commandService["syncExecuteCommand"](_0x24c5be.id, {
            unitId: _0x4efb61.unitId,
            actions: _0x129a01,
            textRanges: null,
            noNeedSetTextRange: true,
            isEditing: false,
            trigger: V.id,
          })
        : false;
    },
  },
  H = {
    id: "docs-callout.command.reset-colors",
    type: _0x238a64.COMMAND,
    handler: (_0x52b3f8, _0x5df28c) => {
      if (!_0x5df28c) return false;
      let _0x13a921 = K(_0x52b3f8, _0x5df28c.unitId);
      if (!_0x13a921) return false;
      let _0x4b7683 = _0x13a921.model["getCalloutConfig"](
        _0x13a921.unitId,
        _0x5df28c.blockId,
      );
      if (!_0x4b7683 || !pt(_0x13a921.previousDocumentData, _0x5df28c.blockId))
        return false;
      let _0x5fa043 = x({
        ..._0x4b7683,
        backgroundColor: "",
        borderColor: "",
        borderOpacity: y.borderOpacity,
        borderStyle: y.borderStyle,
        borderWidth: y.borderWidth,
      });
      return Ct(
        _0x52b3f8,
        _0x13a921.commandService,
        _0x13a921.unitId,
        _0x5df28c.blockId,
        _0x4b7683,
        _0x5fa043,
        mt(_0x13a921.previousDocumentData, _0x5df28c.blockId, null),
      );
    },
  },
  U = {
    id: "docs-callout.command.delete",
    type: _0x238a64.COMMAND,
    handler: (_0x52536b, _0x3c4011) => {
      let _0x45adca = K(
        _0x52536b,
        _0x3c4011 == null ? undefined : _0x3c4011.unitId,
      );
      if (!_0x45adca) return false;
      let _0x2b61c5 =
        (_0x3c4011 == null ? undefined : _0x3c4011.blockId) ??
        ft(_0x45adca.previousDocumentData, q(_0x52536b));
      if (!_0x2b61c5) return false;
      let _0x33d8af = Le({
          blockId: _0x2b61c5,
          documentData: _0x45adca.previousDocumentData,
          metadata: _0x45adca.model["serialize"](_0x45adca.unitId),
        }),
        _0x39d701 = X(
          _0x45adca.commandService,
          _0x45adca.unitId,
          _0x45adca.previousDocumentData,
          _0x33d8af.nextDocumentData,
          U.id,
          _0x33d8af.cursorOffset,
        );
      return (
        _0x39d701 &&
          _0x45adca.model["deserialize"](
            _0x45adca.unitId,
            _0x33d8af.nextMetadata,
          ),
        _0x39d701
      );
    },
  },
  W = {
    id: "docs-callout.command.unwrap",
    type: _0x238a64.COMMAND,
    handler: (_0x2d88e5, _0x8071d9) => {
      if (!_0x8071d9) return false;
      let _0x6c435e = K(_0x2d88e5, _0x8071d9.unitId);
      if (!_0x6c435e) return false;
      let _0x1d0aca = Re({
        blockId: _0x8071d9.blockId,
        documentData: _0x6c435e.previousDocumentData,
        metadata: _0x6c435e.model["serialize"](_0x6c435e.unitId),
      });
      if (!_0x1d0aca) return false;
      let _0x29102a = _0x6c435e.model["getCalloutConfig"](
        _0x6c435e.unitId,
        _0x8071d9.blockId,
      );
      return _0x29102a
        ? wt(
            _0x2d88e5,
            _0x6c435e.commandService,
            _0x6c435e.unitId,
            _0x8071d9.blockId,
            _0x29102a,
            _0x6c435e.previousDocumentData,
            _0x1d0aca.nextDocumentData,
            _0x1d0aca.cursorOffset,
          )
        : X(
            _0x6c435e.commandService,
            _0x6c435e.unitId,
            _0x6c435e.previousDocumentData,
            _0x1d0aca.nextDocumentData,
            W.id,
            _0x1d0aca.cursorOffset,
          );
    },
  },
  G = {
    id: "docs-callout.command.cancel-empty-paragraph",
    type: _0x238a64.COMMAND,
    handler: (_0x1f0578, _0x276d4d) => {
      if (!_0x276d4d) return false;
      let _0x39c0f7 = K(_0x1f0578, _0x276d4d.unitId);
      if (!_0x39c0f7) return false;
      let _0x50241a = ze({
        cursorOffset: _0x276d4d.cursorOffset,
        documentData: _0x39c0f7.previousDocumentData,
        metadata: _0x39c0f7.model["serialize"](_0x39c0f7.unitId),
        paragraphStartIndex: _0x276d4d.paragraphStartIndex,
      });
      if (!_0x50241a) return false;
      let _0x2686db = X(
        _0x39c0f7.commandService,
        _0x39c0f7.unitId,
        _0x39c0f7.previousDocumentData,
        _0x50241a.nextDocumentData,
        G.id,
        _0x50241a.cursorOffset,
      );
      return (
        _0x2686db &&
          _0x39c0f7.model["deserialize"](
            _0x39c0f7.unitId,
            _0x50241a.nextMetadata,
          ),
        _0x2686db
      );
    },
  };
function K(_0x2651c2, _0x26ed97) {
  let _0x156885 = _0x2651c2.get(_0x368266),
    _0x126bc6 = _0x26ed97
      ? _0x156885.getUnit(_0x26ed97, _0x454d40.UNIVER_DOC)
      : _0x156885.getCurrentUnitOfType(_0x454d40.UNIVER_DOC);
  return _0x126bc6
    ? {
        commandService: _0x2651c2.get(_0x15becf),
        model: _0x2651c2.get(T),
        previousDocumentData: _0x126bc6.getSnapshot(),
        unitId: _0x126bc6.getUnitId(),
      }
    : null;
}
function q(_0x135c35) {
  var _0x539f5f;
  return (_0x539f5f = _0x135c35.get(_0x380d12).getTextRanges()) == null
    ? undefined
    : _0x539f5f[0];
}
function ut(_0x504617, _0x5cedb3) {
  let _0x2d7395 =
      (_0x504617 == null ? undefined : _0x504617.startOffset) ??
      (_0x5cedb3 == null ? undefined : _0x5cedb3.startOffset),
    _0x5cf30c =
      (_0x504617 == null ? undefined : _0x504617.endOffset) ??
      (_0x5cedb3 == null ? undefined : _0x5cedb3.endOffset);
  if (_0x2d7395 != null && _0x5cf30c != null)
    return {
      endOffset: Math.max(_0x2d7395, _0x5cf30c),
      startOffset: Math.min(_0x2d7395, _0x5cf30c),
    };
}
function dt(_0x4af3c5) {
  let _0x980198 = q(_0x4af3c5);
  if (!_0x980198) return null;
  let _0x297a05 = _0x4af3c5
      .get(_0x368266)
      .getCurrentUnitOfType(_0x454d40.UNIVER_DOC),
    _0x347cd9 = _0x297a05 == null ? undefined : _0x297a05.getBody();
  return _0x347cd9
    ? (_0x1e31f5.range["getParagraphsInRange"](
        _0x980198,
        _0x347cd9.paragraphs ?? [],
        _0x347cd9.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function ft(_0x1efa04, _0x3f1401) {
  var _0x1b7b0b;
  if (_0x3f1401)
    return (_0x1b7b0b = Ve(_0x1efa04.body, _0x3f1401.startOffset)) == null
      ? undefined
      : _0x1b7b0b.blockId;
}
function pt(_0x1e0446, _0x20a8cc) {
  var _0x363ea6;
  return (
    ((_0x363ea6 = _0x1e0446.body) == null ||
    (_0x363ea6 = _0x363ea6.blockRanges) == null
      ? undefined
      : _0x363ea6.some(
          (_0x3ba234) =>
            _0x3ba234.blockId === _0x20a8cc &&
            _0x3ba234.blockType === _0xe1d7c.CALLOUT,
        )) ?? false
  );
}
function mt(_0x2f10ce, _0x8cce11, _0x180732) {
  var _0x50998f, _0x430235;
  let _0x10cf26 =
    (_0x50998f = _0x2f10ce.body) == null ||
    (_0x50998f = _0x50998f.blockRanges) == null
      ? undefined
      : _0x50998f.find(
          (_0x4fcff0) =>
            _0x4fcff0.blockId === _0x8cce11 &&
            _0x4fcff0.blockType === _0xe1d7c.CALLOUT,
        );
  if (!_0x10cf26) return null;
  let _0x1926c2 = _0x10cf26.startIndex + 1,
    _0x59b9ab = _0x10cf26.endIndex;
  if (_0x59b9ab <= _0x1926c2) return null;
  let _0x2f5f77 = new _0x130a0c();
  (_0x2f5f77.push({ t: _0x240742.RETAIN, len: _0x1926c2 }),
    _0x2f5f77.push({
      t: _0x240742.RETAIN,
      len: _0x59b9ab - _0x1926c2,
      body: {
        dataStream: "",
        textRuns: [
          { st: 0, ed: _0x59b9ab - _0x1926c2, ts: { cl: { rgb: _0x180732 } } },
        ],
      },
    }));
  let _0x206ace = _0x3ea310.getInstance(),
    _0x4068a1 = _0x206ace.editOp(_0x2f5f77.serialize(), ["body"]);
  return ((_0x430235 = _0x2f10ce.body) == null
    ? undefined
    : _0x430235.textRuns) == null
    ? _0x180732 == null
      ? null
      : _0x206ace.insertOp(
          ["body", "textRuns"],
          [{ st: _0x1926c2, ed: _0x59b9ab, ts: { cl: { rgb: _0x180732 } } }],
        )
    : _0x4068a1;
}
function ht(_0x395d62, _0x209766) {
  var _0x49c62b;
  if (!_0x209766) return;
  let _0x121f14 = gt(_0x209766);
  return (_0x49c62b = _0x395d62.body) == null ||
    (_0x49c62b = _0x49c62b.blockRanges) == null
    ? undefined
    : _0x49c62b.find((_0x19fa69) => {
        let _0x1f02ee = _0x2f6d01(_0x19fa69);
        return _0x209766.startOffset === _0x209766.endOffset
          ? _0x288a43(_0x1f02ee, _0x121f14)
          : _0x464112(_0x1f02ee, _0x121f14);
      });
}
function gt(_0x53f239) {
  return _0x53f239.startOffset === _0x53f239.endOffset
    ? _0x53f239.startOffset
    : _0x53f239.startOffset + 1;
}
function _t(_0x32d4c1, _0x408bd4) {
  let _0x14fb4f = _0x32d4c1.body,
    _0x3b0826 = _0x408bd4.body,
    _0x379b84 = _0x417155(_0x14fb4f, _0x3b0826),
    _0x418eb5 = [],
    _0x2854d3 = _0x379b84 && _0x3b0826 ? vt(_0x3b0826, _0x379b84) : null,
    _0x5c2ae3 = _0x379b84 ? null : yt(_0x14fb4f, _0x3b0826);
  return (
    _0x2854d3 && _0x418eb5.push(_0x2854d3),
    _0x5c2ae3 && _0x418eb5.push(_0x5c2ae3),
    _0x418eb5.reduce(
      (_0x316d8a, _0x2fe186) => _0x3ea310.compose(_0x316d8a, _0x2fe186),
      null,
    )
  );
}
function vt(_0x33bbba, _0x2971b4) {
  let _0x5934df = new _0x130a0c();
  return (
    _0x5934df.retain(_0x2971b4.start),
    _0x2971b4.insertLength > 0 &&
      _0x5934df.insert(
        _0x2971b4.insertLength,
        _0x170953(
          _0x33bbba,
          _0x2971b4.start,
          _0x2971b4.start + _0x2971b4.insertLength,
          false,
        ),
      ),
    _0x2971b4.deleteLength > 0 && _0x5934df.delete(_0x2971b4.deleteLength),
    _0x3ea310.getInstance().editOp(_0x5934df.serialize(), ["body"])
  );
}
function yt(_0x1d7554, _0x380087) {
  let _0x20544f = [];
  for (let _0x24cf9b of bt)
    J(
      _0x3ea310.getInstance(),
      ["body", _0x24cf9b],
      _0x1d7554 == null ? undefined : _0x1d7554[_0x24cf9b],
      _0x380087 == null ? undefined : _0x380087[_0x24cf9b],
      _0x20544f,
    );
  return _0x20544f.reduce(
    (_0xc6efab, _0x2ecacc) => _0x3ea310.compose(_0xc6efab, _0x2ecacc),
    null,
  );
}
const bt = [
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
function J(_0xebdfa9, _0x44af7d, _0x3e2755, _0x3e9a22, _0x4ef260) {
  if (!Y(_0x3e2755, _0x3e9a22)) {
    if (_0x3e2755 == null) {
      _0x4ef260.push(_0xebdfa9.insertOp(_0x44af7d, _0x3e9a22));
      return;
    }
    if (_0x3e9a22 == null) {
      _0x4ef260.push(_0xebdfa9.removeOp(_0x44af7d, _0x3e2755));
      return;
    }
    if (Array.isArray(_0x3e2755) && Array.isArray(_0x3e9a22)) {
      xt(_0xebdfa9, _0x44af7d, _0x3e2755, _0x3e9a22, _0x4ef260);
      return;
    }
    if (St(_0x3e2755) && St(_0x3e9a22)) {
      new Set([...Object.keys(_0x3e2755), ...Object.keys(_0x3e9a22)]).forEach(
        (_0x2b77b6) => {
          J(
            _0xebdfa9,
            [..._0x44af7d, _0x2b77b6],
            _0x3e2755[_0x2b77b6],
            _0x3e9a22[_0x2b77b6],
            _0x4ef260,
          );
        },
      );
      return;
    }
    _0x4ef260.push(_0xebdfa9.replaceOp(_0x44af7d, _0x3e2755, _0x3e9a22));
  }
}
function xt(_0x37420e, _0x4bcd4b, _0x4c6856, _0x3a9213, _0x40175a) {
  if (_0x4c6856.length === _0x3a9213.length) {
    _0x4c6856.forEach((_0x4d327a, _0x3396a5) =>
      J(
        _0x37420e,
        [..._0x4bcd4b, _0x3396a5],
        _0x4d327a,
        _0x3a9213[_0x3396a5],
        _0x40175a,
      ),
    );
    return;
  }
  let _0x4d1edc = 0;
  for (
    ;
    _0x4d1edc < _0x4c6856.length &&
    _0x4d1edc < _0x3a9213.length &&
    Y(_0x4c6856[_0x4d1edc], _0x3a9213[_0x4d1edc]);
  )
    _0x4d1edc++;
  let _0xfd183a = _0x4c6856.length - 1,
    _0x367503 = _0x3a9213.length - 1;
  for (
    ;
    _0xfd183a >= _0x4d1edc &&
    _0x367503 >= _0x4d1edc &&
    Y(_0x4c6856[_0xfd183a], _0x3a9213[_0x367503]);
  )
    (_0xfd183a--, _0x367503--);
  for (let _0x43aa13 = _0xfd183a; _0x43aa13 >= _0x4d1edc; _0x43aa13--)
    _0x40175a.push(
      _0x37420e.removeOp([..._0x4bcd4b, _0x43aa13], _0x4c6856[_0x43aa13]),
    );
  for (let _0x201da8 = _0x4d1edc; _0x201da8 <= _0x367503; _0x201da8++)
    _0x40175a.push(
      _0x37420e.insertOp([..._0x4bcd4b, _0x201da8], _0x3a9213[_0x201da8]),
    );
}
function St(_0x5d85ef) {
  return (
    typeof _0x5d85ef == "object" && !!_0x5d85ef && !Array.isArray(_0x5d85ef)
  );
}
function Y(_0x1e834f, _0x4a33ad) {
  return JSON.stringify(_0x1e834f) === JSON.stringify(_0x4a33ad);
}
function X(_0x2cd73d, _0xfa30f7, _0x21245e, _0x3b591b, _0x572865, _0x113523) {
  let _0x385491 = _t(_0x21245e, _0x3b591b);
  return _0x385491
    ? !!_0x2cd73d.syncExecuteCommand(_0x24c5be.id, {
        unitId: _0xfa30f7,
        actions: _0x385491,
        textRanges:
          _0x113523 == null
            ? []
            : [
                {
                  startOffset: _0x113523,
                  endOffset: _0x113523,
                  collapsed: true,
                },
              ],
        isEditing: false,
        trigger: _0x572865,
      })
    : false;
}
function Ct(
  _0x288934,
  _0x4682da,
  _0x58d2e1,
  _0x1476d7,
  _0x45498f,
  _0x2c9d3c,
  _0x21f94d,
) {
  let _0x22b3ae = { unitId: _0x58d2e1, blockId: _0x1476d7, config: _0x2c9d3c },
    _0x10c60e = { unitId: _0x58d2e1, blockId: _0x1476d7, config: _0x45498f },
    _0x143ba5 = [{ id: E.id, params: _0x22b3ae }],
    _0x5a8516 = [{ id: E.id, params: _0x10c60e }];
  if (!_0x4682da.syncExecuteCommand(E.id, _0x22b3ae)) return false;
  if (_0x21f94d) {
    let _0xbdf003 = {
        unitId: _0x58d2e1,
        actions: _0x21f94d,
        textRanges: null,
        noNeedSetTextRange: true,
        isEditing: false,
        noHistory: true,
        trigger: H.id,
      },
      _0x2dd706 = _0x4682da.syncExecuteCommand(_0x24c5be.id, _0xbdf003);
    if (!_0x2dd706)
      return (_0x4682da.syncExecuteCommand(E.id, _0x10c60e), false);
    (_0x143ba5.push({ id: _0x24c5be.id, params: _0xbdf003 }),
      _0x5a8516.unshift({
        id: _0x24c5be.id,
        params: { ..._0x2dd706, noHistory: true },
      }));
  }
  return (
    _0x288934
      .get(_0x48eb8c)
      .pushUndoRedo({
        unitID: _0x58d2e1,
        redoMutations: _0x143ba5,
        undoMutations: _0x5a8516,
      }),
    true
  );
}
function wt(
  _0x536caa,
  _0x4a3750,
  _0x4d606e,
  _0x5b9b1d,
  _0xf61a73,
  _0xa99c17,
  _0x4f6d03,
  _0x4d1d4d,
) {
  let _0xe52e43 = _t(_0xa99c17, _0x4f6d03);
  if (!_0xe52e43) return false;
  let _0x2ecc09 = {
      unitId: _0x4d606e,
      actions: _0xe52e43,
      textRanges: [
        { startOffset: _0x4d1d4d, endOffset: _0x4d1d4d, collapsed: true },
      ],
      isEditing: false,
      noHistory: true,
      trigger: W.id,
    },
    _0x463378 = _0x4a3750.syncExecuteCommand(_0x24c5be.id, _0x2ecc09);
  if (!_0x463378) return false;
  let _0x2baf12 = { unitId: _0x4d606e, blockId: _0x5b9b1d };
  if (!_0x4a3750.syncExecuteCommand(D.id, _0x2baf12))
    return (
      _0x4a3750.syncExecuteCommand(_0x24c5be.id, {
        ..._0x463378,
        noHistory: true,
      }),
      false
    );
  let _0x497b54 = { unitId: _0x4d606e, blockId: _0x5b9b1d, config: _0xf61a73 };
  return (
    _0x536caa.get(_0x48eb8c).pushUndoRedo({
      unitID: _0x4d606e,
      redoMutations: [
        { id: _0x24c5be.id, params: _0x2ecc09 },
        { id: D.id, params: _0x2baf12 },
      ],
      undoMutations: [
        { id: _0x24c5be.id, params: { ..._0x463378, noHistory: true } },
        { id: E.id, params: _0x497b54 },
      ],
    }),
    true
  );
}
const Tt = "DOC_CALLOUT_PLUGIN",
  Et = "orange.50",
  Dt = "orange.200";
var Ot = "@univerjs-pro/docs-callout",
  kt = "1.0.0-insiders.20260907-70fc579";
const At = {};
function Z(_0x4eba7e, _0x562720) {
  return function (_0x336eee, _0x21b4bb) {
    _0x562720(_0x336eee, _0x21b4bb, _0x4eba7e);
  };
}
function jt(_0x3333e4, _0x555fad, _0x279870, _0x54e119) {
  var _0x50d4ea = arguments.length,
    _0x1e67a9 =
      _0x50d4ea < 3
        ? _0x555fad
        : _0x54e119 === null
          ? (_0x54e119 = Object.getOwnPropertyDescriptor(_0x555fad, _0x279870))
          : _0x54e119,
    _0x5ce961;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1e67a9 = Reflect.decorate(_0x3333e4, _0x555fad, _0x279870, _0x54e119);
  else {
    for (var _0x1761e3 = _0x3333e4.length - 1; _0x1761e3 >= 0; _0x1761e3--)
      (_0x5ce961 = _0x3333e4[_0x1761e3]) &&
        (_0x1e67a9 =
          (_0x50d4ea < 3
            ? _0x5ce961(_0x1e67a9)
            : _0x50d4ea > 3
              ? _0x5ce961(_0x555fad, _0x279870, _0x1e67a9)
              : _0x5ce961(_0x555fad, _0x279870)) || _0x1e67a9);
  }
  return (
    _0x50d4ea > 3 &&
      _0x1e67a9 &&
      Object.defineProperty(_0x555fad, _0x279870, _0x1e67a9),
    _0x1e67a9
  );
}
let Q = class extends _0x3b8b97 {
  constructor(_0x2be7eb, _0x4fbc2d) {
    (super(),
      (this._resourceManagerService = _0x2be7eb),
      (this._docsCalloutModel = _0x4fbc2d),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: Tt,
        businesses: [_0x454d40.UNIVER_DOC],
        toJson: (_0x2faae3) =>
          JSON.stringify(this._docsCalloutModel["serialize"](_0x2faae3)),
        parseJson: (_0x4cc532) => b(JSON.parse(_0x4cc532)),
        onLoad: (_0x1e8d50, _0x38220b) =>
          this._docsCalloutModel["deserialize"](_0x1e8d50, _0x38220b),
        onUnLoad: (_0x9bd129) =>
          this._docsCalloutModel["removeUnit"](_0x9bd129),
      }),
    );
  }
};
Q = jt([Z(0, _0xc21b0f), Z(1, _0x2c4b63(T))], Q);
let $ = class extends _0x433790 {
  constructor(_0x238684 = At, _0x5271e0, _0x4e139b, _0x2d4d5f) {
    (super(),
      (this._config = _0x238684),
      (this._injector = _0x5271e0),
      (this._commandService = _0x4e139b),
      (this._configService = _0x2d4d5f));
    let { ..._0x33f6c8 } = _0x8bdd9({}, At, this._config);
    this._configService["setConfig"]("docs-callout.config", _0x33f6c8);
  }
  onStarting() {
    (this._injector["add"]([T]),
      this._injector["add"]([Q]),
      this._injector["get"](T),
      this._injector["get"](Q),
      [G, ct, U, W, st, B, H, V, lt, E, D].forEach((_0x4e0fad) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x4e0fad)),
      ));
  }
};
(w($, "pluginName", Tt),
  w($, "packageName", Ot),
  w($, "version", kt),
  w($, "type", _0x454d40.UNIVER_DOC),
  ($ = jt(
    [
      _0x22c38f(_0x4f734f, _0x5e49b3),
      Z(1, _0x2c4b63(_0x377412)),
      Z(2, _0x15becf),
      Z(3, _0x58ff2f),
    ],
    $,
  )));
export {
  y as DEFAULT_CALLOUT_CONFIG,
  Et as DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN,
  Dt as DOCS_CALLOUT_BORDER_COLOR_TOKEN,
  Tt as DOCS_CALLOUT_PLUGIN,
  G as DocsCalloutCancelEmptyParagraphCommand,
  ct as DocsCalloutConsumeBoundaryDeleteCommand,
  U as DocsCalloutDeleteCommand,
  st as DocsCalloutInsertBelowCommand,
  B as DocsCalloutInsertCommand,
  T as DocsCalloutModel,
  H as DocsCalloutResetColorsCommand,
  V as DocsCalloutSetTextColorCommand,
  W as DocsCalloutUnwrapCommand,
  lt as DocsCalloutUpdateCommand,
  D as RemoveDocsCalloutConfigMutation,
  E as SetDocsCalloutConfigMutation,
  $ as UniverDocsCalloutPlugin,
  ze as buildCancelEmptyCalloutParagraphActions,
  He as isCalloutBoundaryDelete,
  x as normalizeDocsCalloutConfig,
  b as normalizeDocsCalloutMetadataResource,
};
