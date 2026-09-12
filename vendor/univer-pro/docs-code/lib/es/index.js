import {
  BooleanNumber as _0x1335e9,
  BuildTextUtils as _0x4a10e0,
  CommandType as _0x3353f6,
  DataStreamTreeTokenType as _0x5d1480,
  DependentOn as _0x656cd6,
  Disposable as _0x43b655,
  DocumentBlockRangeType as _0x4e37a6,
  ICommandService as _0x591a15,
  IConfigService as _0x3f64f5,
  IResourceManagerService as _0x336a02,
  IUniverInstanceService as _0x35392b,
  Inject as _0x2071ad,
  Injector as _0x4c4e00,
  JSONX as _0xef5afa,
  Plugin as _0x49c1f6,
  TextX as _0x335f61,
  UniverInstanceType as _0x1a89a5,
  containsInteriorInsertionOffset as _0x4574cc,
  containsStreamIndex as _0x41e7d2,
  createParagraphId as _0x981a59,
  generateRandomId as _0x3d43a4,
  getBlockRangeInterval as _0x42f7e5,
  getBodySliceForTextXAction as _0x5730d5,
  getParagraphContentStartOffset as _0x40f920,
  getParagraphContentStartOffsets as _0x527d2e,
  getParagraphFollowingBlockOffset as _0x427066,
  getSingleDataStreamChange as _0x37d9c5,
  intersectsOperationalIntervals as _0x43f881,
  merge as _0x3e377b,
  shiftExclusiveRangeOnDelete as _0x5812e9,
  shiftExclusiveRangeOnInsert as _0x5c46f4,
  shiftInclusiveRangeOnDelete as _0x51a6e4,
  shiftInclusiveRangeOnInsert as _0xaeb9c3,
} from "@univerjs/core";
import { Subject as _0xcf1325 } from "rxjs";
import {
  DocSelectionManagerService as _0x4c087b,
  RichTextEditingMutation as _0x2d500a,
  UniverDocsPlugin as _0x49edc3,
  getContentInsertRange as _0x1c7654,
  isHeaderFooterSelection as _0x493b1a,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x3d0f7f } from "@univerjs-pro/license";
const Se = {
  language: "javascript",
  showLineNumbers: false,
  tabSize: 4,
  wrap: true,
};
function v(_0x3507cd) {
  return { ...Se, ..._0x3507cd };
}
function y(_0x1070b4) {
  let _0x3f15e0 = (_0x1070b4 == null ? undefined : _0x1070b4.codes) ?? {};
  return {
    codes: Object.fromEntries(
      Object.entries(_0x3f15e0).map(([_0x2ecff6, _0x270c93]) => [
        _0x2ecff6,
        v(_0x270c93),
      ]),
    ),
  };
}
function b(_0x4d9de2, _0x269caa, _0x30324a) {
  let _0x2a021b = y(_0x4d9de2);
  return (
    (_0x2a021b.codes[_0x269caa] = v({
      ..._0x2a021b.codes[_0x269caa],
      ..._0x30324a,
    })),
    _0x2a021b
  );
}
function x(_0x2ebf80, _0x3c878d) {
  let _0x3e49c1 = y(_0x2ebf80);
  return (delete _0x3e49c1.codes[_0x3c878d], _0x3e49c1);
}
function S(_0x2e0f80) {
  "@babel/helpers - typeof";
  return (
    (S =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4ebec9) {
            return typeof _0x4ebec9;
          }
        : function (_0x18ae05) {
            return _0x18ae05 &&
              typeof Symbol == "function" &&
              _0x18ae05.constructor === Symbol &&
              _0x18ae05 !== Symbol.prototype
              ? "symbol"
              : typeof _0x18ae05;
          }),
    S(_0x2e0f80)
  );
}
function Ce(_0x352d13, _0xf7252d) {
  if (S(_0x352d13) != "object" || !_0x352d13) return _0x352d13;
  var _0x1cf714 = _0x352d13[Symbol.toPrimitive];
  if (_0x1cf714 !== undefined) {
    var _0x31d4e4 = _0x1cf714.call(_0x352d13, _0xf7252d || "default");
    if (S(_0x31d4e4) != "object") return _0x31d4e4;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xf7252d === "string" ? String : Number)(_0x352d13);
}
function we(_0x9a2a3f) {
  var _0xa9005d = Ce(_0x9a2a3f, "string");
  return S(_0xa9005d) == "symbol" ? _0xa9005d : _0xa9005d + "";
}
function C(_0x1e1cb4, _0x264a98, _0x2507a0) {
  return (
    (_0x264a98 = we(_0x264a98)) in _0x1e1cb4
      ? Object.defineProperty(_0x1e1cb4, _0x264a98, {
          value: _0x2507a0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1e1cb4[_0x264a98] = _0x2507a0),
    _0x1e1cb4
  );
}
var w = class extends _0x43b655 {
  constructor(..._0x5a8a55) {
    (super(..._0x5a8a55),
      C(this, "_resources", new Map()),
      C(this, "_change$", new _0xcf1325()),
      C(this, "change$", this._change$["asObservable"]()));
  }
  getCodeConfig(_0x262d97, _0x3c64b1) {
    return y(this._resources["get"](_0x262d97)).codes[_0x3c64b1];
  }
  setCodeConfig(_0x14a7de, _0x2a6e97, _0x2df184) {
    this._setResource(
      _0x14a7de,
      _0x2a6e97,
      b(this._resources["get"](_0x14a7de), _0x2a6e97, _0x2df184),
    );
  }
  removeCode(_0x2a06bf, _0x4f2ba2) {
    this._setResource(
      _0x2a06bf,
      _0x4f2ba2,
      x(this._resources["get"](_0x2a06bf), _0x4f2ba2),
    );
  }
  serialize(_0x3d14d4) {
    return y(this._resources["get"](_0x3d14d4));
  }
  deserialize(_0x375b57, _0x583043) {
    (this._resources["set"](_0x375b57, y(_0x583043)),
      this._change$["next"]({ unitId: _0x375b57 }));
  }
  removeUnit(_0x55f4a1) {
    (this._resources["delete"](_0x55f4a1),
      this._change$["next"]({ unitId: _0x55f4a1 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x354c69, _0x53ab98, _0x9a5df7) {
    (this._resources["set"](_0x354c69, _0x9a5df7),
      this._change$["next"]({ unitId: _0x354c69, blockId: _0x53ab98 }));
  }
};
const Te = {
    id: "docs-code.mutation.set-config",
    type: _0x3353f6.MUTATION,
    handler: (_0x267e5a, _0x3114a5) =>
      !(_0x3114a5 != null && _0x3114a5.unitId) || !_0x3114a5.blockId
        ? false
        : (_0x267e5a
            .get(w)
            .setCodeConfig(
              _0x3114a5.unitId,
              _0x3114a5.blockId,
              _0x3114a5.config,
            ),
          true),
  },
  T = {
    id: "docs-code.mutation.remove-config",
    type: _0x3353f6.MUTATION,
    handler: (_0x2b5c33, _0x1eca4e) =>
      !(_0x1eca4e != null && _0x1eca4e.unitId) || !_0x1eca4e.blockId
        ? false
        : (_0x2b5c33.get(w).removeCode(_0x1eca4e.unitId, _0x1eca4e.blockId),
          true),
  },
  Ee = "monospace";
var E = class extends Error {
  constructor(_0x6bdcf9 = "Insert range cannot cross table cell boundaries") {
    super(_0x6bdcf9);
  }
};
function De(_0x10fc10) {
  var _0x2919e5;
  let _0x28fe0d = O(_0x10fc10.documentData),
    _0x496aa2 = A(_0x28fe0d),
    _0x289fa2 = ke(_0x10fc10.startOffset, _0x10fc10.endOffset),
    _0x1ca10e = _0x289fa2
      ? (_0x2919e5 = _0x496aa2.blockRanges) == null
        ? undefined
        : _0x2919e5.find((_0x192f40) => {
            let _0x59fa56 = _0x42f7e5(_0x192f40);
            return (
              _0x59fa56.startOffset === _0x289fa2.startOffset &&
              _0x59fa56.endOffset === _0x289fa2.endOffset
            );
          })
      : undefined,
    { startOffset: _0x223eff, endOffset: _0x4de2c7 } = _0x1ca10e
      ? _0x289fa2
      : We(
          _0x496aa2,
          _0x10fc10.startOffset,
          _0x10fc10.endOffset,
          _0x10fc10.insertionMode,
        );
  if (!_0x1ca10e && Ae(_0x496aa2, _0x223eff, _0x4de2c7))
    throw new E("Insert range cannot overlap an existing document block");
  let _0x1fc823 = qe(_0x496aa2, _0x223eff, _0x4de2c7),
    _0x3c38ec =
      (_0x1ca10e == null ? undefined : _0x1ca10e.blockId) ?? _0x10fc10.blockId,
    _0x86f57a = b(_0x10fc10.metadata, _0x3c38ec, {
      ...Se,
      ..._0x10fc10.config,
    });
  if (_0x1ca10e)
    return (
      (_0x1ca10e.blockType = _0x4e37a6.CODE),
      Oe(_0x496aa2, _0x223eff, _0x4de2c7),
      ze(_0x496aa2, _0x223eff, _0x4de2c7, _0x1fc823),
      N(_0x496aa2, _0x1ca10e),
      {
        nextDocumentData: _0x28fe0d,
        nextMetadata: _0x86f57a,
        cursorOffset: _0x223eff + 1,
      }
    );
  if (_0x223eff === _0x4de2c7) {
    var _0x28c314, _0x4e018e;
    let _0x10ca09 =
      "" + _0x5d1480.BLOCK_START + _0x5d1480.PARAGRAPH + _0x5d1480.BLOCK_END;
    P(_0x496aa2, _0x223eff, _0x10ca09, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: _0x981a59(
            new Set(
              (_0x28c314 = _0x496aa2.paragraphs) == null
                ? undefined
                : _0x28c314.map((_0x3efdcb) => _0x3efdcb.paragraphId),
            ),
          ),
          paragraphStyle: Re(true, true, _0x1fc823),
        },
      ],
      blockRanges: [
        {
          blockId: _0x3c38ec,
          blockType: _0x4e37a6.CODE,
          startIndex: 0,
          endIndex: _0x10ca09.length - 1,
        },
      ],
    });
    let _0x538418 =
      (_0x4e018e = _0x496aa2.blockRanges) == null
        ? undefined
        : _0x4e018e.find((_0x6e7693) => _0x6e7693.blockId === _0x3c38ec);
    return (
      _0x538418 && N(_0x496aa2, _0x538418),
      {
        nextDocumentData: _0x28fe0d,
        nextMetadata: _0x86f57a,
        cursorOffset: _0x223eff + 1,
      }
    );
  }
  (P(_0x496aa2, _0x4de2c7, _0x5d1480.BLOCK_END),
    P(_0x496aa2, _0x223eff, _0x5d1480.BLOCK_START),
    ze(_0x496aa2, _0x223eff, _0x4de2c7 + 1, _0x1fc823));
  let _0x320569 = {
    blockId: _0x3c38ec,
    blockType: _0x4e37a6.CODE,
    startIndex: _0x223eff,
    endIndex: _0x4de2c7 + 1,
  };
  return (
    (_0x496aa2.blockRanges = [...(_0x496aa2.blockRanges ?? []), _0x320569].sort(
      (_0x7a5c27, _0x269761) => _0x7a5c27.startIndex - _0x269761.startIndex,
    )),
    N(_0x496aa2, _0x320569),
    {
      nextDocumentData: _0x28fe0d,
      nextMetadata: _0x86f57a,
      cursorOffset: _0x223eff + 1,
    }
  );
}
function Oe(_0xeffc8e, _0xac5d8c, _0x243640) {
  (_0xeffc8e.paragraphs ?? [])
    .filter(
      (_0x4bdcc5) =>
        _0x4bdcc5.startIndex > _0xac5d8c && _0x4bdcc5.startIndex < _0x243640,
    )
    .forEach((_0x157bb1) => {
      let _0x20aad8 = { ...(_0x157bb1.paragraphStyle ?? {}) };
      (delete _0x20aad8.spaceAbove,
        delete _0x20aad8.spaceBelow,
        (_0x157bb1.paragraphStyle = _0x20aad8));
    });
}
function ke(_0x2cdf8a, _0x584fd9) {
  return _0x2cdf8a == null || _0x584fd9 == null || _0x2cdf8a === _0x584fd9
    ? null
    : {
        startOffset: Math.min(_0x2cdf8a, _0x584fd9),
        endOffset: Math.max(_0x2cdf8a, _0x584fd9),
      };
}
function Ae(_0x4da47b, _0x3e35b5, _0x30f8bf) {
  return (_0x4da47b.blockRanges ?? []).some((_0x42775d) => {
    let _0x4c083b = _0x42f7e5(_0x42775d);
    return _0x3e35b5 === _0x30f8bf
      ? _0x4574cc(_0x4c083b, _0x3e35b5)
      : _0x43f881(_0x4c083b, { startOffset: _0x3e35b5, endOffset: _0x30f8bf });
  });
}
function je(_0x4e3fcd) {
  return {
    nextDocumentData: O(_0x4e3fcd.documentData),
    nextMetadata: b(_0x4e3fcd.metadata, _0x4e3fcd.blockId, _0x4e3fcd.config),
    cursorOffset: 0,
  };
}
function D(_0x1d3f68) {
  let _0x5c1e05 = O(_0x1d3f68.documentData),
    _0x3e2f8f = A(_0x5c1e05),
    _0x3bb4d9 = Fe(_0x3e2f8f, _0x1d3f68.blockId);
  if (!_0x3bb4d9) return null;
  let _0x5ba61e = He(_0x3e2f8f, _0x3bb4d9);
  return {
    nextDocumentData: _0x5c1e05,
    nextMetadata: x(_0x1d3f68.metadata, _0x1d3f68.blockId),
    cursorOffset: _0x5ba61e,
  };
}
function Me(_0x87b015) {
  var _0x510610;
  let _0x51128d = O(_0x87b015.documentData),
    _0x53333b = A(_0x51128d),
    _0x47ca7a = Fe(_0x53333b, _0x87b015.blockId);
  if (!_0x47ca7a) return null;
  let _0x9055f5 = _0x42f7e5(_0x47ca7a);
  return (
    F(_0x53333b, _0x9055f5.startOffset, _0x9055f5.endOffset),
    (_0x53333b.blockRanges =
      (_0x510610 = _0x53333b.blockRanges) == null
        ? undefined
        : _0x510610.filter(
            (_0x493dab) => _0x493dab.blockId !== _0x87b015.blockId,
          )),
    {
      nextDocumentData: _0x51128d,
      nextMetadata: x(_0x87b015.metadata, _0x87b015.blockId),
      cursorOffset: _0x47ca7a.startIndex,
    }
  );
}
function Ne(_0x10a94a) {
  let _0x2b1c23 = O(_0x10a94a.documentData),
    _0x282ed8 = A(_0x2b1c23),
    _0x333328 = Le(_0x282ed8, _0x10a94a.cursorOffset);
  return (
    (_0x333328 &&
      Pe(
        _0x2b1c23,
        _0x282ed8,
        _0x333328,
        _0x10a94a.cursorOffset,
        _0x10a94a.paragraphStartIndex,
      )) ||
    null
  );
}
function Pe(_0x31b46c, _0x5821f3, _0x1136a1, _0x36d060, _0x32fde9) {
  let _0x2f8d61 = $e(_0x5821f3, _0x1136a1, _0x36d060, _0x32fde9);
  if (!_0x2f8d61) return null;
  let _0x12314d = _0x2f8d61.endTokenOffset - 1;
  return (
    F(
      _0x5821f3,
      _0x2f8d61.paragraph["startIndex"],
      _0x2f8d61.paragraph["startIndex"] + 1,
    ),
    { nextDocumentData: _0x31b46c, cursorOffset: _0x12314d }
  );
}
function Fe(_0x5b7cb0, _0x592d6f) {
  var _0x5e7264;
  return _0x5b7cb0 == null || (_0x5e7264 = _0x5b7cb0.blockRanges) == null
    ? undefined
    : _0x5e7264.find(
        (_0x3fcea0) =>
          _0x3fcea0.blockType === _0x4e37a6.CODE &&
          _0x3fcea0.blockId === _0x592d6f,
      );
}
function Ie(_0x3dd433) {
  let _0x28ccb2 = _0x3dd433.documentData["body"];
  if (!_0x28ccb2) return false;
  let _0x359943 =
      _0x3dd433.direction === "left"
        ? _0x3dd433.cursorOffset - 1
        : _0x3dd433.cursorOffset,
    _0x285258 =
      _0x3dd433.direction === "right" ? _0x3dd433.cursorOffset + 1 : _0x359943;
  return (_0x28ccb2.blockRanges ?? []).some((_0x3c0690) =>
    _0x3c0690.blockType === _0x4e37a6.CODE
      ? _0x359943 === _0x3c0690.startIndex ||
        _0x359943 === _0x3c0690.endIndex ||
        _0x285258 === _0x3c0690.startIndex ||
        _0x285258 === _0x3c0690.endIndex
      : false,
  );
}
function Le(_0x1c5493, _0x1db15c) {
  var _0x3ac811;
  return (_0x3ac811 = _0x1c5493.blockRanges) == null
    ? undefined
    : _0x3ac811.find((_0x1ae5d7) => {
        let _0x2d408e = M(_0x1ae5d7);
        return (
          _0x1ae5d7.blockType === _0x4e37a6.CODE &&
          _0x1ae5d7.startIndex <= _0x1db15c &&
          _0x1db15c <= _0x2d408e + 2
        );
      });
}
function Re(_0x3ad3ee, _0x1793c3, _0x4417a2 = false) {
  return {
    indentEnd: { v: 20 },
    indentStart: { v: 20 },
    keepLines: _0x1335e9.TRUE,
    keepNext: _0x1793c3 ? _0x1335e9.FALSE : _0x1335e9.TRUE,
    widowControl: _0x1335e9.TRUE,
    ...(_0x3ad3ee && _0x4417a2 ? { spaceAbove: { v: 8 } } : {}),
    textStyle: { ff: Ee, fs: 12 },
  };
}
function ze(_0x495c01, _0x2726ba, _0x4c8457, _0x5e511d = false) {
  let _0x3ac4ca = (_0x495c01.paragraphs ?? []).filter(
    (_0x9bddef) =>
      _0x9bddef.startIndex > _0x2726ba && _0x9bddef.startIndex < _0x4c8457,
  );
  _0x3ac4ca.forEach((_0x30fe7c, _0x358484) => {
    _0x30fe7c.paragraphStyle = {
      ...(_0x30fe7c.paragraphStyle ?? {}),
      ...Re(_0x358484 === 0, _0x358484 === _0x3ac4ca.length - 1, _0x5e511d),
    };
  });
}
function Be(_0x309a0d) {
  var _0x3989d1, _0x14b3cd;
  let _0x2a3d4d = { ...(_0x309a0d ?? {}) };
  return (
    delete _0x2a3d4d.indentEnd,
    delete _0x2a3d4d.indentStart,
    delete _0x2a3d4d.spaceAbove,
    delete _0x2a3d4d.spaceBelow,
    delete _0x2a3d4d.keepLines,
    delete _0x2a3d4d.keepNext,
    delete _0x2a3d4d.widowControl,
    ((_0x3989d1 = _0x2a3d4d.textStyle) == null ? undefined : _0x3989d1.ff) ===
      Ee &&
      ((_0x14b3cd = _0x2a3d4d.textStyle) == null ? undefined : _0x14b3cd.fs) ===
        12 &&
      delete _0x2a3d4d.textStyle,
    _0x2a3d4d
  );
}
function Ve(_0xc1522, _0x840c9c) {
  let _0x35ef86 = M(_0x840c9c);
  return (_0xc1522.paragraphs ?? []).filter(
    (_0x1b2108) =>
      _0x1b2108.startIndex > _0x840c9c.startIndex &&
      _0x1b2108.startIndex < _0x35ef86,
  );
}
function He(_0xa72efa, _0x19103d) {
  var _0x1f0229;
  let _0x52fb7d = M(_0x19103d);
  return (
    Ve(_0xa72efa, _0x19103d).forEach((_0x8a863d) => {
      _0x8a863d.paragraphStyle = Be(_0x8a863d.paragraphStyle);
    }),
    F(_0xa72efa, _0x52fb7d, _0x52fb7d + 1),
    F(_0xa72efa, _0x19103d.startIndex, _0x19103d.startIndex + 1),
    (_0xa72efa.blockRanges =
      (_0x1f0229 = _0xa72efa.blockRanges) == null
        ? undefined
        : _0x1f0229.filter(
            (_0x3bad66) => _0x3bad66.blockId !== _0x19103d.blockId,
          )),
    _0x19103d.startIndex
  );
}
function O(_0x1d27e0) {
  return {
    ..._0x1d27e0,
    body: _0x1d27e0.body ? Ue(_0x1d27e0.body) : _0x1d27e0.body,
  };
}
function Ue(_0x54e1ee) {
  var _0xba2d2a,
    _0x422033,
    _0x49a7e2,
    _0x59829b,
    _0x1f67d8,
    _0x26508e,
    _0x143bcb,
    _0xce3d2a,
    _0x412c54;
  return {
    ..._0x54e1ee,
    paragraphs:
      (_0xba2d2a = _0x54e1ee.paragraphs) == null
        ? undefined
        : _0xba2d2a.map((_0x4c2bf9) => ({
            ..._0x4c2bf9,
            bullet: k(_0x4c2bf9.bullet),
            paragraphStyle: k(_0x4c2bf9.paragraphStyle),
          })),
    sectionBreaks:
      (_0x422033 = _0x54e1ee.sectionBreaks) == null
        ? undefined
        : _0x422033.map((_0x1ca94e) => ({ ..._0x1ca94e })),
    textRuns:
      (_0x49a7e2 = _0x54e1ee.textRuns) == null
        ? undefined
        : _0x49a7e2.map((_0x34b9a5) => ({ ..._0x34b9a5 })),
    tables:
      (_0x59829b = _0x54e1ee.tables) == null
        ? undefined
        : _0x59829b.map((_0x4c0e3c) => ({ ..._0x4c0e3c })),
    columnGroups:
      (_0x1f67d8 = _0x54e1ee.columnGroups) == null
        ? undefined
        : _0x1f67d8.map((_0x37a941) => {
            var _0x3ec146;
            return {
              ..._0x37a941,
              columns:
                (_0x3ec146 = _0x37a941.columns) == null
                  ? undefined
                  : _0x3ec146.map((_0x1de4b6) => k(_0x1de4b6)),
            };
          }),
    blockRanges:
      (_0x26508e = _0x54e1ee.blockRanges) == null
        ? undefined
        : _0x26508e.map((_0x53da9d) => ({ ..._0x53da9d })),
    customRanges:
      (_0x143bcb = _0x54e1ee.customRanges) == null
        ? undefined
        : _0x143bcb.map((_0x54fd7d) => ({ ..._0x54fd7d })),
    customDecorations:
      (_0xce3d2a = _0x54e1ee.customDecorations) == null
        ? undefined
        : _0xce3d2a.map((_0x44c54b) => ({ ..._0x44c54b })),
    customBlocks:
      (_0x412c54 = _0x54e1ee.customBlocks) == null
        ? undefined
        : _0x412c54.map((_0xdb757) => ({ ..._0xdb757 })),
  };
}
function k(_0x35c965) {
  return Array.isArray(_0x35c965)
    ? _0x35c965.map((_0x28c698) => k(_0x28c698))
    : !_0x35c965 || typeof _0x35c965 != "object"
      ? _0x35c965
      : Object.fromEntries(
          Object.entries(_0x35c965).map(([_0x2fe77c, _0x5e6d1e]) => [
            _0x2fe77c,
            k(_0x5e6d1e),
          ]),
        );
}
function A(_0x296492) {
  if (!_0x296492.body) throw Error("Document body is required");
  return _0x296492.body;
}
function We(_0x4fecf4, _0x2b9272, _0x4fb5ab, _0x31b8d5 = "convert-paragraph") {
  if (_0x2b9272 == null || _0x4fb5ab == null) {
    let _0x3cee73 = Ke(_0x4fecf4);
    return { startOffset: _0x3cee73, endOffset: _0x3cee73 };
  }
  let _0x59bf1b = Math.min(_0x2b9272, _0x4fb5ab),
    _0x2bc038 = Math.max(_0x2b9272, _0x4fb5ab),
    _0x13d7e5 = Ze(_0x4fecf4, _0x59bf1b, _0x2bc038);
  return _0x59bf1b === _0x2bc038
    ? _0x31b8d5 === "insert-new"
      ? { startOffset: _0x59bf1b, endOffset: _0x2bc038 }
      : Ge(_0x4fecf4, _0x59bf1b, _0x13d7e5)
    : Je(_0x4fecf4, _0x59bf1b, _0x2bc038, _0x13d7e5);
}
function Ge(_0x1a77c3, _0x21d7db, _0x10bae0) {
  let _0x5a4e7d = Ye(_0x1a77c3, _0x21d7db);
  if (_0x5a4e7d) {
    let _0xf11be3 = j(_0x1a77c3, _0x5a4e7d, _0x10bae0);
    if (_0xf11be3 < _0x5a4e7d.startIndex)
      return {
        startOffset: _0xf11be3,
        endOffset: _0x10bae0
          ? Math.min(_0x5a4e7d.startIndex + 1, _0x10bae0.endOffset)
          : _0x5a4e7d.startIndex + 1,
      };
  }
  let _0x5b800e =
    _0x21d7db === 0 && _0x1a77c3.dataStream[0] === _0x5d1480.PARAGRAPH
      ? 1
      : _0x21d7db;
  return { startOffset: _0x5b800e, endOffset: _0x5b800e };
}
function Ke(_0x322418) {
  return _0x322418.dataStream["endsWith"](_0x5d1480.SECTION_BREAK)
    ? Math.max(0, _0x322418.dataStream["length"] - 1)
    : _0x322418.dataStream["length"];
}
function qe(_0x5b2277, _0x3bd4af, _0x3a8791) {
  var _0x4e1d12;
  let _0x45203c = Math.min(_0x3bd4af, _0x3a8791),
    _0x26b297 = Math.max(_0x3bd4af, _0x3a8791);
  return !!(
    (_0x4e1d12 = _0x5b2277.tables) != null &&
    _0x4e1d12.some(
      (_0x4f2608) =>
        (_0x45203c > _0x4f2608.startIndex && _0x45203c < _0x4f2608.endIndex) ||
        (_0x26b297 > _0x4f2608.startIndex && _0x26b297 < _0x4f2608.endIndex) ||
        (_0x45203c <= _0x4f2608.startIndex && _0x26b297 >= _0x4f2608.endIndex),
    )
  );
}
function Je(_0x206140, _0x6fa924, _0x1246ab, _0x5db02b) {
  let _0x3f198c = [...(_0x206140.paragraphs ?? [])].sort(
      (_0x2382fe, _0x4f5764) => _0x2382fe.startIndex - _0x4f5764.startIndex,
    ),
    _0x409984 = _0x527d2e(_0x206140),
    _0x2714e9 = _0x3f198c.find(
      (_0x3528b7) =>
        j(_0x206140, _0x3528b7, _0x5db02b, _0x409984) <= _0x6fa924 &&
        _0x6fa924 <= _0x3528b7.startIndex,
    ),
    _0x481eda =
      _0x3f198c.find((_0x4f17b9) => _0x4f17b9.startIndex >= _0x1246ab - 1) ??
      _0x3f198c[_0x3f198c.length - 1];
  return {
    startOffset: _0x2714e9
      ? j(_0x206140, _0x2714e9, _0x5db02b, _0x409984)
      : _0x6fa924,
    endOffset: _0x481eda ? Xe(_0x481eda, _0x5db02b) : _0x1246ab,
  };
}
function Ye(_0x5c149d, _0x34bee2) {
  let _0x19160f = [...(_0x5c149d.paragraphs ?? [])].sort(
      (_0x5bc631, _0x1f9e51) => _0x5bc631.startIndex - _0x1f9e51.startIndex,
    ),
    _0x4a9209 = _0x527d2e(_0x5c149d);
  return _0x19160f.find(
    (_0x387a45) =>
      (_0x4a9209.get(_0x387a45.startIndex) ?? 0) <= _0x34bee2 &&
      _0x34bee2 <= _0x387a45.startIndex,
  );
}
function j(_0xd5d54b, _0x44ec2d, _0x18e16d, _0x2ab094) {
  let _0x194980 =
    (_0x2ab094 == null ? undefined : _0x2ab094.get(_0x44ec2d.startIndex)) ??
    _0x40f920(_0xd5d54b, _0x44ec2d);
  return _0x18e16d ? Math.max(_0x194980, _0x18e16d.startOffset) : _0x194980;
}
function Xe(_0x15381d, _0x11e605) {
  let _0x511601 = _0x15381d.startIndex + 1;
  return _0x11e605 ? Math.min(_0x511601, _0x11e605.endOffset) : _0x511601;
}
function Ze(_0x5fa273, _0x476e1d, _0x539f99) {
  let _0x9f12a5 = Qe(_0x5fa273, _0x476e1d),
    _0x404a3d = Qe(
      _0x5fa273,
      _0x476e1d === _0x539f99 ? _0x539f99 : Math.max(_0x476e1d, _0x539f99 - 1),
    );
  if (!(!_0x9f12a5 && !_0x404a3d)) {
    if (
      !_0x9f12a5 ||
      !_0x404a3d ||
      _0x9f12a5.startTokenOffset !== _0x404a3d.startTokenOffset ||
      _0x9f12a5.endTokenOffset !== _0x404a3d.endTokenOffset
    )
      throw new E();
    return _0x9f12a5;
  }
}
function Qe(_0x408495, _0x567c07) {
  let _0x3a9fe2 = _0x408495.dataStream,
    _0x2d856c = -1;
  for (
    let _0x322543 = Math.min(_0x567c07, _0x3a9fe2.length - 1);
    _0x322543 >= 0;
    _0x322543--
  ) {
    let _0x1e6d90 = _0x3a9fe2[_0x322543];
    if (_0x1e6d90 === _0x5d1480.TABLE_CELL_END) return;
    if (_0x1e6d90 === _0x5d1480.TABLE_CELL_START) {
      _0x2d856c = _0x322543;
      break;
    }
  }
  if (_0x2d856c < 0) return;
  let _0x5482a3 = _0x3a9fe2.indexOf(_0x5d1480.TABLE_CELL_END, _0x2d856c + 1);
  if (!(
    _0x5482a3 < 0 ||
    _0x567c07 < _0x2d856c + 1 ||
    _0x567c07 > _0x5482a3 - 1
  ))
    return {
      startOffset: _0x2d856c + 1,
      endOffset: Math.max(_0x2d856c + 1, _0x5482a3 - 1),
      startTokenOffset: _0x2d856c,
      endTokenOffset: _0x5482a3,
    };
}
function M(_0x214659) {
  return _0x42f7e5(_0x214659).endOffset - 1;
}
function $e(_0xb12f98, _0x3dbde8, _0x2e0269, _0x35941b) {
  let _0x2babf8 = M(_0x3dbde8),
    _0x7a8d03 = (_0xb12f98.paragraphs ?? []).find(
      (_0x4d53b0) => _0x4d53b0.startIndex === _0x2babf8 + 1,
    );
  if (
    !_0x7a8d03 ||
    (_0x35941b != null && _0x7a8d03.startIndex !== _0x35941b) ||
    (_0x2e0269 != null &&
      (_0x2e0269 < _0x2babf8 || _0x2e0269 > _0x7a8d03.startIndex + 1)) ||
    _0xb12f98.dataStream[_0x7a8d03.startIndex] !== _0x5d1480.PARAGRAPH
  )
    return null;
  let _0x424a8a = _0x40f920(_0xb12f98, _0x7a8d03),
    _0x46f5ad = _0xb12f98.dataStream["slice"](_0x424a8a, _0x7a8d03.startIndex);
  return Array.from(_0x46f5ad).every(
    (_0x17bbcb) => _0x17bbcb === _0x5d1480.BLOCK_END,
  )
    ? { paragraph: _0x7a8d03, endTokenOffset: _0x2babf8 }
    : null;
}
function N(_0x3d6525, _0x4bc8e5) {
  var _0x106728;
  let _0x13f167 = M(_0x4bc8e5),
    _0x5ab658 = _0x3d6525.dataStream[_0x13f167 + 1];
  (_0x5ab658 === _0x5d1480.SECTION_BREAK || _0x5ab658 === undefined) &&
    P(_0x3d6525, _0x13f167 + 1, _0x5d1480.PARAGRAPH, {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: _0x981a59(
            new Set(
              (_0x106728 = _0x3d6525.paragraphs) == null
                ? undefined
                : _0x106728.map((_0x33cdd7) => _0x33cdd7.paragraphId),
            ),
          ),
        },
      ],
    });
}
function P(_0x35af7c, _0x2de838, _0x5c8645, _0x393220 = {}) {
  var _0x58ac57, _0x3f8586;
  _0x5c8645 &&
    ((_0x35af7c.dataStream =
      "" +
      _0x35af7c.dataStream["slice"](0, _0x2de838) +
      _0x5c8645 +
      _0x35af7c.dataStream["slice"](_0x2de838)),
    et(_0x35af7c, _0x2de838, _0x5c8645.length),
    (_0x58ac57 = _0x393220.paragraphs) != null &&
      _0x58ac57.length &&
      (_0x35af7c.paragraphs = [
        ...(_0x35af7c.paragraphs ?? []),
        ..._0x393220.paragraphs["map"]((_0x2d209c) => ({
          ..._0x2d209c,
          startIndex: _0x2d209c.startIndex + _0x2de838,
        })),
      ].sort(
        (_0x113cca, _0x6336d9) => _0x113cca.startIndex - _0x6336d9.startIndex,
      )),
    (_0x3f8586 = _0x393220.blockRanges) != null &&
      _0x3f8586.length &&
      (_0x35af7c.blockRanges = [
        ...(_0x35af7c.blockRanges ?? []),
        ..._0x393220.blockRanges["map"]((_0x14adb4) => ({
          ..._0x14adb4,
          startIndex: _0x14adb4.startIndex + _0x2de838,
          endIndex: _0x14adb4.endIndex + _0x2de838,
        })),
      ].sort(
        (_0x40f21d, _0xf47723) => _0x40f21d.startIndex - _0xf47723.startIndex,
      )));
}
function F(_0x306188, _0x3e085f, _0x489479) {
  let _0x2df5c0 = _0x489479 - _0x3e085f;
  ((_0x306188.dataStream =
    "" +
    _0x306188.dataStream["slice"](0, _0x3e085f) +
    _0x306188.dataStream["slice"](_0x489479)),
    tt(_0x306188, _0x3e085f, _0x2df5c0));
}
function et(_0xe52656, _0x197dcc, _0x4342da) {
  ((_0xe52656.paragraphs = I(_0xe52656.paragraphs, _0x197dcc, _0x4342da)),
    (_0xe52656.sectionBreaks = I(
      _0xe52656.sectionBreaks,
      _0x197dcc,
      _0x4342da,
    )),
    (_0xe52656.customBlocks = I(_0xe52656.customBlocks, _0x197dcc, _0x4342da)),
    (_0xe52656.textRuns = nt(_0xe52656.textRuns, _0x197dcc, _0x4342da)),
    (_0xe52656.tables = rt(_0xe52656.tables, _0x197dcc, _0x4342da)),
    (_0xe52656.columnGroups = R(_0xe52656.columnGroups, _0x197dcc, _0x4342da)),
    (_0xe52656.customRanges = R(_0xe52656.customRanges, _0x197dcc, _0x4342da)),
    (_0xe52656.customDecorations = R(
      _0xe52656.customDecorations,
      _0x197dcc,
      _0x4342da,
    )),
    (_0xe52656.blockRanges = R(_0xe52656.blockRanges, _0x197dcc, _0x4342da)));
}
function tt(_0x4486ca, _0x5c291b, _0x4ebb94) {
  var _0xa2a44f, _0xd76e83;
  ((_0x4486ca.paragraphs = L(_0x4486ca.paragraphs, _0x5c291b, _0x4ebb94)),
    (_0x4486ca.sectionBreaks = L(
      _0x4486ca.sectionBreaks,
      _0x5c291b,
      _0x4ebb94,
    )),
    (_0x4486ca.customBlocks = L(_0x4486ca.customBlocks, _0x5c291b, _0x4ebb94)),
    (_0x4486ca.textRuns =
      (_0xa2a44f = it(
        (_0xd76e83 = _0x4486ca.textRuns) == null
          ? undefined
          : _0xd76e83.map((_0x52957c) => ({
              ..._0x52957c,
              startIndex: _0x52957c.st,
              endIndex: _0x52957c.ed,
            })),
        _0x5c291b,
        _0x4ebb94,
      )) == null
        ? undefined
        : _0xa2a44f.map((_0x1af211) => {
            let {
              startIndex: _0xa863d0,
              endIndex: _0x2ff72b,
              ..._0x497463
            } = _0x1af211;
            return { ..._0x497463, st: _0xa863d0, ed: _0x2ff72b };
          })),
    (_0x4486ca.tables = it(_0x4486ca.tables, _0x5c291b, _0x4ebb94)),
    (_0x4486ca.columnGroups = z(_0x4486ca.columnGroups, _0x5c291b, _0x4ebb94)),
    (_0x4486ca.customRanges = z(_0x4486ca.customRanges, _0x5c291b, _0x4ebb94)),
    (_0x4486ca.customDecorations = z(
      _0x4486ca.customDecorations,
      _0x5c291b,
      _0x4ebb94,
    )),
    (_0x4486ca.blockRanges = z(_0x4486ca.blockRanges, _0x5c291b, _0x4ebb94)));
}
function I(_0x58876a, _0x256ccd, _0xe289e9) {
  return _0x58876a == null
    ? undefined
    : _0x58876a.map((_0x45e6b0) =>
        _0x45e6b0.startIndex >= _0x256ccd
          ? { ..._0x45e6b0, startIndex: _0x45e6b0.startIndex + _0xe289e9 }
          : _0x45e6b0,
      );
}
function L(_0x3b6c24, _0x69b673, _0x18c811) {
  let _0x397b6e = _0x69b673 + _0x18c811;
  return _0x3b6c24 == null
    ? undefined
    : _0x3b6c24
        .map((_0x11b3fb) =>
          _0x11b3fb.startIndex >= _0x69b673 && _0x11b3fb.startIndex < _0x397b6e
            ? null
            : _0x11b3fb.startIndex >= _0x397b6e
              ? { ..._0x11b3fb, startIndex: _0x11b3fb.startIndex - _0x18c811 }
              : _0x11b3fb,
        )
        .filter((_0x496404) => _0x496404 != null);
}
function nt(_0x2329da, _0x415a38, _0x4cbcef) {
  return _0x2329da == null
    ? undefined
    : _0x2329da.map((_0x22cae0) =>
        _0x22cae0.st >= _0x415a38
          ? {
              ..._0x22cae0,
              st: _0x22cae0.st + _0x4cbcef,
              ed: _0x22cae0.ed + _0x4cbcef,
            }
          : _0x22cae0.ed > _0x415a38
            ? { ..._0x22cae0, ed: _0x22cae0.ed + _0x4cbcef }
            : _0x22cae0,
      );
}
function R(_0x54580c, _0x2fee7e, _0x55cce2) {
  return _0x54580c == null
    ? undefined
    : _0x54580c.map((_0xaf0b03) => _0xaeb9c3(_0xaf0b03, _0x2fee7e, _0x55cce2));
}
function rt(_0xafbc24, _0x47002, _0x346e06) {
  return _0xafbc24 == null
    ? undefined
    : _0xafbc24.map((_0x4a6564) => _0x5c46f4(_0x4a6564, _0x47002, _0x346e06));
}
function z(_0x16f947, _0x1e2b3f, _0x2d12f0) {
  return _0x16f947 == null
    ? undefined
    : _0x16f947
        .map((_0x5d7b14) => _0x51a6e4(_0x5d7b14, _0x1e2b3f, _0x2d12f0))
        .filter((_0x498464) => _0x498464 != null);
}
function it(_0x604418, _0x1a2dfe, _0x40dbba) {
  return _0x604418 == null
    ? undefined
    : _0x604418
        .map((_0x2abb35) => _0x5812e9(_0x2abb35, _0x1a2dfe, _0x40dbba))
        .filter((_0x264ea7) => _0x264ea7 != null);
}
const at = {
    id: "docs-code.command.insert-below",
    type: _0x3353f6.COMMAND,
    handler: (_0x3c7d4d) => {
      var _0x41cd2d;
      if (_0x493b1a(G(_0x3c7d4d))) return false;
      let _0x1d0739 = _0x1c7654(_0x3c7d4d);
      if (_0x1d0739)
        return _0x3c7d4d
          .get(_0x591a15)
          .syncExecuteCommand(B.id, {
            startOffset: _0x1d0739.startOffset,
            endOffset: _0x1d0739.endOffset,
            insertionMode: "insert-new",
            unitId: _0x1d0739.unitId,
          });
      let _0x2d39f7 = ft(_0x3c7d4d);
      if (!_0x2d39f7) return false;
      let _0xf51b44 =
          (_0x41cd2d = _0x3c7d4d
            .get(_0x35392b)
            .getCurrentUnitOfType(_0x1a89a5.UNIVER_DOC)) == null
            ? undefined
            : _0x41cd2d.getBody(),
        _0x40fd9b = _0xf51b44
          ? _0x427066(_0xf51b44, _0x2d39f7)
          : _0x2d39f7.startIndex + 1;
      return _0x3c7d4d
        .get(_0x591a15)
        .syncExecuteCommand(B.id, {
          startOffset: _0x40fd9b,
          endOffset: _0x40fd9b,
        });
    },
  },
  ot = {
    id: "docs-code.command.consume-boundary-delete",
    type: _0x3353f6.COMMAND,
    handler: () => true,
  },
  B = {
    id: "docs-code.command.insert",
    type: _0x3353f6.COMMAND,
    handler: (_0x607318, _0xd953a9) => {
      let _0x5e0046 = W(
        _0x607318,
        _0xd953a9 == null ? undefined : _0xd953a9.unitId,
      );
      if (!_0x5e0046) return false;
      let _0x250e3a = G(_0x607318);
      if (_0x493b1a(_0x250e3a)) return false;
      let _0x2eb062 = _0x5e0046.model["serialize"](_0x5e0046.unitId),
        _0x14a462 = lt(_0xd953a9, _0x250e3a),
        _0x5e47c3 = ut(_0x5e0046.previousDocumentData, _0x14a462);
      if (_0x5e47c3) {
        if (_0x5e47c3.blockType !== _0x4e37a6.CODE) return false;
        let _0x42547f = D({
          blockId: _0x5e47c3.blockId,
          documentData: _0x5e0046.previousDocumentData,
          metadata: _0x2eb062,
        });
        if (!_0x42547f) return false;
        let _0x470683 = Y(
          _0x5e0046.commandService,
          _0x5e0046.selectionManager,
          _0x5e0046.unitId,
          _0x5e0046.previousDocumentData,
          _0x42547f.nextDocumentData,
          B.id,
          _0x42547f.cursorOffset,
        );
        return (
          _0x470683 &&
            _0x42547f.nextMetadata &&
            _0x5e0046.model["deserialize"](
              _0x5e0046.unitId,
              _0x42547f.nextMetadata,
            ),
          _0x470683
        );
      }
      let _0x502d6b =
          (_0xd953a9 == null ? undefined : _0xd953a9.blockId) ?? _0x3d43a4(6),
        _0x282216;
      try {
        _0x282216 = De({
          blockId: _0x502d6b,
          config: _0xd953a9 == null ? undefined : _0xd953a9.config,
          documentData: _0x5e0046.previousDocumentData,
          endOffset: _0x14a462 == null ? undefined : _0x14a462.endOffset,
          insertionMode:
            _0xd953a9 == null ? undefined : _0xd953a9.insertionMode,
          metadata: _0x2eb062,
          startOffset: _0x14a462 == null ? undefined : _0x14a462.startOffset,
        });
      } catch (_0x17f5a7) {
        if (_0x17f5a7 instanceof E) return false;
        throw _0x17f5a7;
      }
      let _0x1e45f0 = Y(
        _0x5e0046.commandService,
        _0x5e0046.selectionManager,
        _0x5e0046.unitId,
        _0x5e0046.previousDocumentData,
        _0x282216.nextDocumentData,
        B.id,
        _0x282216.cursorOffset,
      );
      return (
        _0x1e45f0 &&
          _0x282216.nextMetadata &&
          _0x5e0046.model["deserialize"](
            _0x5e0046.unitId,
            _0x282216.nextMetadata,
          ),
        _0x1e45f0
      );
    },
  },
  st = {
    id: "docs-code.command.update",
    type: _0x3353f6.COMMAND,
    handler: (_0x560813, _0x8fec09) => {
      if (!_0x8fec09) return false;
      let _0x2a768d = W(_0x560813, _0x8fec09.unitId);
      if (!_0x2a768d) return false;
      let _0x57a7bd = je({
        blockId: _0x8fec09.blockId,
        config: _0x8fec09.config,
        documentData: _0x2a768d.previousDocumentData,
        metadata: _0x2a768d.model["serialize"](_0x2a768d.unitId),
      });
      return (
        _0x57a7bd.nextMetadata &&
          _0x2a768d.model["deserialize"](
            _0x2a768d.unitId,
            _0x57a7bd.nextMetadata,
          ),
        true
      );
    },
  },
  ct = {
    id: "docs-code.command.exit",
    type: _0x3353f6.COMMAND,
    handler: (_0x48d443, _0xec5d12) => V.handler(_0x48d443, _0xec5d12),
  },
  V = {
    id: "docs-code.command.unwrap",
    type: _0x3353f6.COMMAND,
    handler: (_0x177b85, _0x42bc19) => {
      if (!_0x42bc19) return false;
      let _0x2f692e = W(
        _0x177b85,
        _0x42bc19 == null ? undefined : _0x42bc19.unitId,
      );
      if (!_0x2f692e) return false;
      let _0x330df0 = D({
        blockId: _0x42bc19.blockId,
        documentData: _0x2f692e.previousDocumentData,
        metadata: _0x2f692e.model["serialize"](_0x2f692e.unitId),
      });
      if (!_0x330df0) return false;
      let _0x1c2ee1 = Y(
        _0x2f692e.commandService,
        _0x2f692e.selectionManager,
        _0x2f692e.unitId,
        _0x2f692e.previousDocumentData,
        _0x330df0.nextDocumentData,
        V.id,
        _0x330df0.cursorOffset,
      );
      return (
        _0x1c2ee1 &&
          _0x330df0.nextMetadata &&
          _0x2f692e.model["deserialize"](
            _0x2f692e.unitId,
            _0x330df0.nextMetadata,
          ),
        _0x1c2ee1
      );
    },
  },
  H = {
    id: "docs-code.command.remove",
    type: _0x3353f6.COMMAND,
    handler: (_0x36354b, _0x55b4d2) => {
      if (!_0x55b4d2) return false;
      let _0x5d404d = W(
        _0x36354b,
        _0x55b4d2 == null ? undefined : _0x55b4d2.unitId,
      );
      if (!_0x5d404d) return false;
      let _0x34d276 = Me({
        blockId: _0x55b4d2.blockId,
        documentData: _0x5d404d.previousDocumentData,
        metadata: _0x5d404d.model["serialize"](_0x5d404d.unitId),
      });
      if (!_0x34d276) return false;
      let _0x4ca378 = Y(
        _0x5d404d.commandService,
        _0x5d404d.selectionManager,
        _0x5d404d.unitId,
        _0x5d404d.previousDocumentData,
        _0x34d276.nextDocumentData,
        H.id,
        _0x34d276.cursorOffset,
      );
      return (
        _0x4ca378 &&
          _0x34d276.nextMetadata &&
          _0x5d404d.model["deserialize"](
            _0x5d404d.unitId,
            _0x34d276.nextMetadata,
          ),
        _0x4ca378
      );
    },
  },
  U = {
    id: "docs-code.command.cancel-empty-paragraph",
    type: _0x3353f6.COMMAND,
    handler: (_0x40abb0, _0x1527c0) => {
      var _0x3ce1f9;
      let _0x3559e3 = W(
        _0x40abb0,
        _0x1527c0 == null ? undefined : _0x1527c0.unitId,
      );
      if (!_0x3559e3) return false;
      let _0x13cdbb =
        (_0x1527c0 == null ? undefined : _0x1527c0.cursorOffset) ??
        ((_0x3ce1f9 = G(_0x40abb0)) == null
          ? undefined
          : _0x3ce1f9.startOffset);
      if (_0x13cdbb == null) return false;
      let _0x3674c9 = Ne({
        cursorOffset: _0x13cdbb,
        documentData: _0x3559e3.previousDocumentData,
        paragraphStartIndex:
          _0x1527c0 == null ? undefined : _0x1527c0.paragraphStartIndex,
      });
      return _0x3674c9
        ? Y(
            _0x3559e3.commandService,
            _0x3559e3.selectionManager,
            _0x3559e3.unitId,
            _0x3559e3.previousDocumentData,
            _0x3674c9.nextDocumentData,
            U.id,
            _0x3674c9.cursorOffset,
          )
        : false;
    },
  };
function W(_0xb5df0, _0x50e371) {
  let _0x5af76b = _0xb5df0.get(_0x35392b),
    _0x39af8f = _0x50e371
      ? _0x5af76b.getUnit(_0x50e371, _0x1a89a5.UNIVER_DOC)
      : _0x5af76b.getCurrentUnitOfType(_0x1a89a5.UNIVER_DOC);
  return _0x39af8f
    ? {
        commandService: _0xb5df0.get(_0x591a15),
        model: _0xb5df0.get(w),
        previousDocumentData: _0x39af8f.getSnapshot(),
        selectionManager: _0xb5df0.get(_0x4c087b),
        unitId: _0x39af8f.getUnitId(),
      }
    : null;
}
function G(_0x2be2c6) {
  var _0x45d1fd;
  return (_0x45d1fd = _0x2be2c6.get(_0x4c087b).getTextRanges()) == null
    ? undefined
    : _0x45d1fd[0];
}
function lt(_0x2c5f9e, _0x195fec) {
  let _0x28d4ec =
      (_0x2c5f9e == null ? undefined : _0x2c5f9e.startOffset) ??
      (_0x195fec == null ? undefined : _0x195fec.startOffset),
    _0x384d2e =
      (_0x2c5f9e == null ? undefined : _0x2c5f9e.endOffset) ??
      (_0x195fec == null ? undefined : _0x195fec.endOffset);
  if (_0x28d4ec != null && _0x384d2e != null)
    return {
      endOffset: Math.max(_0x28d4ec, _0x384d2e),
      startOffset: Math.min(_0x28d4ec, _0x384d2e),
    };
}
function ut(_0x2aedc8, _0x9d6e19) {
  var _0x53aa46;
  if (!_0x9d6e19) return;
  let _0x5e62ef = dt(_0x9d6e19);
  return (_0x53aa46 = _0x2aedc8.body) == null ||
    (_0x53aa46 = _0x53aa46.blockRanges) == null
    ? undefined
    : _0x53aa46.find((_0x1bb51c) => {
        let _0x4cdacd = _0x42f7e5(_0x1bb51c);
        return _0x9d6e19.startOffset === _0x9d6e19.endOffset
          ? _0x4574cc(_0x4cdacd, _0x5e62ef)
          : _0x41e7d2(_0x4cdacd, _0x5e62ef);
      });
}
function dt(_0x98fd28) {
  return _0x98fd28.startOffset === _0x98fd28.endOffset
    ? _0x98fd28.startOffset
    : _0x98fd28.startOffset + 1;
}
function ft(_0x1e3419) {
  let _0x1435ce = G(_0x1e3419);
  if (!_0x1435ce) return null;
  let _0x5b7d54 = _0x1e3419
      .get(_0x35392b)
      .getCurrentUnitOfType(_0x1a89a5.UNIVER_DOC),
    _0x583516 = _0x5b7d54 == null ? undefined : _0x5b7d54.getBody();
  return _0x583516
    ? (_0x4a10e0.range["getParagraphsInRange"](
        _0x1435ce,
        _0x583516.paragraphs ?? [],
        _0x583516.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function pt(_0x48c5f9, _0xfa15e7) {
  let _0x4b700d = _0x48c5f9.body,
    _0x1ba371 = _0xfa15e7.body,
    _0x343bfb = _0x37d9c5(_0x4b700d, _0x1ba371);
  return [
    _0x343bfb && _0x1ba371 ? mt(_0x1ba371, _0x343bfb) : null,
    _0x343bfb ? null : ht(_0x4b700d, _0x1ba371),
  ]
    .filter(Boolean)
    .reduce(
      (_0x31d6d5, _0x3bcd60) => _0xef5afa.compose(_0x31d6d5, _0x3bcd60),
      null,
    );
}
function mt(_0x1a4e16, _0x45188e) {
  let _0x34cb06 = new _0x335f61();
  return (
    _0x34cb06.retain(_0x45188e.start),
    _0x45188e.insertLength > 0 &&
      _0x34cb06.insert(
        _0x45188e.insertLength,
        _0x5730d5(
          _0x1a4e16,
          _0x45188e.start,
          _0x45188e.start + _0x45188e.insertLength,
          false,
        ),
      ),
    _0x45188e.deleteLength > 0 && _0x34cb06.delete(_0x45188e.deleteLength),
    _0xef5afa.getInstance().editOp(_0x34cb06.serialize(), ["body"])
  );
}
function ht(_0x5ae13e, _0x1ec2fb) {
  let _0x223d3f = [],
    _0x1c3608 = _0x5ae13e ? _t(_0x5ae13e) : undefined,
    _0x53630e = _0x1ec2fb ? _t(_0x1ec2fb) : undefined;
  for (let _0x2c2e07 of gt)
    K(
      _0xef5afa.getInstance(),
      ["body", _0x2c2e07],
      _0x1c3608 == null ? undefined : _0x1c3608[_0x2c2e07],
      _0x53630e == null ? undefined : _0x53630e[_0x2c2e07],
      _0x223d3f,
    );
  return _0x223d3f.reduce(
    (_0x17c8ec, _0x50fc66) => _0xef5afa.compose(_0x17c8ec, _0x50fc66),
    null,
  );
}
const gt = [
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
function _t(_0x5970d4) {
  return _0x5970d4;
}
function K(_0x5ec975, _0x45f408, _0x4fe1af, _0xdd296b, _0x1dc2b8) {
  if (!J(_0x4fe1af, _0xdd296b)) {
    if (_0x4fe1af == null) {
      _0x1dc2b8.push(_0x5ec975.insertOp(_0x45f408, _0xdd296b));
      return;
    }
    if (_0xdd296b == null) {
      _0x1dc2b8.push(_0x5ec975.removeOp(_0x45f408, _0x4fe1af));
      return;
    }
    if (Array.isArray(_0x4fe1af) && Array.isArray(_0xdd296b)) {
      vt(_0x5ec975, _0x45f408, _0x4fe1af, _0xdd296b, _0x1dc2b8);
      return;
    }
    if (q(_0x4fe1af) && q(_0xdd296b)) {
      new Set([...Object.keys(_0x4fe1af), ...Object.keys(_0xdd296b)]).forEach(
        (_0x26a6d6) => {
          K(
            _0x5ec975,
            [..._0x45f408, _0x26a6d6],
            _0x4fe1af[_0x26a6d6],
            _0xdd296b[_0x26a6d6],
            _0x1dc2b8,
          );
        },
      );
      return;
    }
    _0x1dc2b8.push(_0x5ec975.replaceOp(_0x45f408, _0x4fe1af, _0xdd296b));
  }
}
function vt(_0x7a0154, _0x1dd8fd, _0x131a9c, _0x528017, _0x5a6c90) {
  if (_0x131a9c.length === _0x528017.length) {
    _0x131a9c.forEach((_0x247fb3, _0x9552d0) =>
      K(
        _0x7a0154,
        [..._0x1dd8fd, _0x9552d0],
        _0x247fb3,
        _0x528017[_0x9552d0],
        _0x5a6c90,
      ),
    );
    return;
  }
  let _0x530ae4 = 0;
  for (
    ;
    _0x530ae4 < _0x131a9c.length &&
    _0x530ae4 < _0x528017.length &&
    J(_0x131a9c[_0x530ae4], _0x528017[_0x530ae4]);
  )
    _0x530ae4++;
  let _0x5123db = _0x131a9c.length - 1,
    _0x5952c2 = _0x528017.length - 1;
  for (
    ;
    _0x5123db >= _0x530ae4 &&
    _0x5952c2 >= _0x530ae4 &&
    J(_0x131a9c[_0x5123db], _0x528017[_0x5952c2]);
  )
    (_0x5123db--, _0x5952c2--);
  for (let _0x2f69e3 = _0x5123db; _0x2f69e3 >= _0x530ae4; _0x2f69e3--)
    _0x5a6c90.push(
      _0x7a0154.removeOp([..._0x1dd8fd, _0x2f69e3], _0x131a9c[_0x2f69e3]),
    );
  for (let _0x196041 = _0x530ae4; _0x196041 <= _0x5952c2; _0x196041++)
    _0x5a6c90.push(
      _0x7a0154.insertOp([..._0x1dd8fd, _0x196041], _0x528017[_0x196041]),
    );
}
function q(_0x2f1630) {
  return (
    typeof _0x2f1630 == "object" && !!_0x2f1630 && !Array.isArray(_0x2f1630)
  );
}
function J(_0x205b22, _0x2a5191) {
  return JSON.stringify(_0x205b22) === JSON.stringify(_0x2a5191);
}
function Y(
  _0x117aad,
  _0x1f0a01,
  _0x429457,
  _0x30b7f7,
  _0x64fd0d,
  _0x272aa7,
  _0x3c090c,
) {
  let _0x328450 = pt(_0x30b7f7, _0x64fd0d);
  return _0x328450
    ? !!_0x117aad.syncExecuteCommand(_0x2d500a.id, {
        unitId: _0x429457,
        actions: _0x328450,
        textRanges: [
          { startOffset: _0x3c090c, endOffset: _0x3c090c, collapsed: true },
        ],
        isEditing: false,
        trigger: _0x272aa7,
      })
    : (_0x1f0a01.replaceDocRanges(
        [{ startOffset: _0x3c090c, endOffset: _0x3c090c }],
        { unitId: _0x429457, subUnitId: _0x429457 },
        false,
      ),
      true);
}
const X = "DOC_CODE_PLUGIN";
var yt = "@univerjs-pro/docs-code",
  bt = "1.0.0-insiders.20260907-70fc579";
const xt = {};
function Z(_0x420f2f, _0x503589) {
  return function (_0x2ed452, _0x45bf78) {
    _0x503589(_0x2ed452, _0x45bf78, _0x420f2f);
  };
}
function St(_0xab0fb5, _0x3606f5, _0x1f4579, _0x1654c3) {
  var _0x505640 = arguments.length,
    _0x38ba05 =
      _0x505640 < 3
        ? _0x3606f5
        : _0x1654c3 === null
          ? (_0x1654c3 = Object.getOwnPropertyDescriptor(_0x3606f5, _0x1f4579))
          : _0x1654c3,
    _0x2672be;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x38ba05 = Reflect.decorate(_0xab0fb5, _0x3606f5, _0x1f4579, _0x1654c3);
  else {
    for (var _0x460229 = _0xab0fb5.length - 1; _0x460229 >= 0; _0x460229--)
      (_0x2672be = _0xab0fb5[_0x460229]) &&
        (_0x38ba05 =
          (_0x505640 < 3
            ? _0x2672be(_0x38ba05)
            : _0x505640 > 3
              ? _0x2672be(_0x3606f5, _0x1f4579, _0x38ba05)
              : _0x2672be(_0x3606f5, _0x1f4579)) || _0x38ba05);
  }
  return (
    _0x505640 > 3 &&
      _0x38ba05 &&
      Object.defineProperty(_0x3606f5, _0x1f4579, _0x38ba05),
    _0x38ba05
  );
}
let Q = class extends _0x43b655 {
  constructor(_0x1e0f43, _0x536cd7) {
    (super(),
      (this._resourceManagerService = _0x1e0f43),
      (this._docsCodeModel = _0x536cd7),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: X,
        businesses: [_0x1a89a5.UNIVER_DOC],
        toJson: (_0x1dd398) =>
          JSON.stringify(this._docsCodeModel["serialize"](_0x1dd398)),
        parseJson: (_0x2d0292) => y(JSON.parse(_0x2d0292)),
        onLoad: (_0x319bfd, _0x98ea0a) =>
          this._docsCodeModel["deserialize"](_0x319bfd, _0x98ea0a),
        onUnLoad: (_0x5c28be) => this._docsCodeModel["removeUnit"](_0x5c28be),
      }),
    );
  }
};
Q = St([Z(0, _0x336a02), Z(1, _0x2071ad(w))], Q);
let $ = class extends _0x49c1f6 {
  constructor(_0x1f3db9 = xt, _0x517eed, _0x2e47b6, _0x26cff4) {
    (super(),
      (this._config = _0x1f3db9),
      (this._injector = _0x517eed),
      (this._commandService = _0x2e47b6),
      (this._configService = _0x26cff4));
    let { ..._0x29c837 } = _0x3e377b({}, xt, this._config);
    this._configService["setConfig"]("docs-code.config", _0x29c837);
  }
  onStarting() {
    (this._injector["add"]([w]),
      this._injector["add"]([Q]),
      this._injector["get"](w),
      this._injector["get"](Q),
      [B, at, st, V, H, ct, U, ot, Te, T].forEach((_0x5b10a8) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x5b10a8)),
      ));
  }
};
(C($, "pluginName", X),
  C($, "packageName", yt),
  C($, "version", bt),
  C($, "type", _0x1a89a5.UNIVER_DOC),
  ($ = St(
    [
      _0x656cd6(_0x3d0f7f, _0x49edc3),
      Z(1, _0x2071ad(_0x4c4e00)),
      Z(2, _0x591a15),
      Z(3, _0x3f64f5),
    ],
    $,
  )));
export {
  X as DOCS_CODE_PLUGIN,
  U as DocsCodeCancelEmptyParagraphCommand,
  ot as DocsCodeConsumeBoundaryDeleteCommand,
  at as DocsCodeInsertBelowCommand,
  B as DocsCodeInsertCommand,
  w as DocsCodeModel,
  H as DocsCodeRemoveCommand,
  V as DocsCodeUnwrapCommand,
  st as DocsCodeUpdateCommand,
  T as RemoveDocsCodeConfigMutation,
  Te as SetDocsCodeConfigMutation,
  $ as UniverDocsCodePlugin,
  Ne as buildCancelEmptyCodeParagraphActions,
  Ie as isCodeBoundaryDelete,
  v as normalizeDocsCodeConfig,
  y as normalizeDocsCodeMetadataResource,
};
