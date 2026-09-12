Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("@univerjs-pro/license");
var r = class extends Error {
  constructor(_0x43c206 = "Insert range cannot cross table cell boundaries") {
    super(_0x43c206);
  }
};
function i(_0x5846b4) {
  var _0x4ef27a;
  let _0x147aad = x(_0x5846b4.documentData),
    _0x328825 = C(_0x147aad),
    _0x8326bb = a(_0x5846b4.startOffset, _0x5846b4.endOffset),
    _0x174209 = _0x8326bb
      ? (_0x4ef27a = _0x328825.blockRanges) == null
        ? undefined
        : _0x4ef27a.find((_0x40d4a3) => {
            let _0x2b57a3 = (0, e.getBlockRangeInterval)(_0x40d4a3);
            return (
              _0x2b57a3.startOffset === _0x8326bb.startOffset &&
              _0x2b57a3.endOffset === _0x8326bb.endOffset
            );
          })
      : undefined,
    { startOffset: _0x357840, endOffset: _0x121f22 } = _0x174209
      ? _0x8326bb
      : re(
          _0x328825,
          _0x5846b4.startOffset,
          _0x5846b4.endOffset,
          _0x5846b4.insertionMode,
        );
  if (!_0x174209 && o(_0x328825, _0x357840, _0x121f22))
    throw new r("Insert range cannot overlap an existing document block");
  let _0x529d71 = oe(_0x328825, _0x357840, _0x121f22),
    _0x28a6da =
      (_0x174209 == null ? undefined : _0x174209.blockId) ?? _0x5846b4.blockId;
  if (_0x174209)
    return (
      (_0x174209.blockType = e.DocumentBlockRangeType["QUOTE"]),
      s(_0x328825, _0x357840, _0x121f22),
      _(_0x328825, _0x357840, _0x121f22, _0x529d71),
      D(_0x328825, _0x174209),
      { nextDocumentData: _0x147aad, cursorOffset: _0x357840 + 1 }
    );
  if (_0x357840 === _0x121f22) {
    var _0x15e785, _0x20375d;
    let _0x109ed1 =
      "" +
      e.DataStreamTreeTokenType["BLOCK_START"] +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["BLOCK_END"];
    O(_0x328825, _0x357840, _0x109ed1, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0x15e785 = _0x328825.paragraphs) == null
                ? undefined
                : _0x15e785.map((_0x110010) => _0x110010.paragraphId),
            ),
          ),
          paragraphStyle: g(true, true, _0x529d71),
        },
      ],
      blockRanges: [
        {
          blockId: _0x28a6da,
          blockType: e.DocumentBlockRangeType["QUOTE"],
          startIndex: 0,
          endIndex: _0x109ed1.length - 1,
        },
      ],
    });
    let _0x59e94e =
      (_0x20375d = _0x328825.blockRanges) == null
        ? undefined
        : _0x20375d.find((_0xa3216) => _0xa3216.blockId === _0x28a6da);
    return (
      _0x59e94e && D(_0x328825, _0x59e94e),
      { nextDocumentData: _0x147aad, cursorOffset: _0x357840 + 1 }
    );
  }
  (O(_0x328825, _0x121f22, e.DataStreamTreeTokenType["BLOCK_END"]),
    O(_0x328825, _0x357840, e.DataStreamTreeTokenType["BLOCK_START"]),
    _(_0x328825, _0x357840, _0x121f22 + 1, _0x529d71));
  let _0x4c9500 = {
    blockId: _0x28a6da,
    blockType: e.DocumentBlockRangeType["QUOTE"],
    startIndex: _0x357840,
    endIndex: _0x121f22 + 1,
  };
  return (
    (_0x328825.blockRanges = [...(_0x328825.blockRanges ?? []), _0x4c9500].sort(
      (_0x3ea40b, _0x463f03) => _0x3ea40b.startIndex - _0x463f03.startIndex,
    )),
    D(_0x328825, _0x4c9500),
    { nextDocumentData: _0x147aad, cursorOffset: _0x357840 + 1 }
  );
}
function a(_0x38ec06, _0x14b5f7) {
  return _0x38ec06 == null || _0x14b5f7 == null || _0x38ec06 === _0x14b5f7
    ? null
    : {
        startOffset: Math.min(_0x38ec06, _0x14b5f7),
        endOffset: Math.max(_0x38ec06, _0x14b5f7),
      };
}
function o(_0x511c68, _0x17d391, _0x1af621) {
  return (_0x511c68.blockRanges ?? []).some((_0x21f7cc) => {
    let _0x413f38 = (0, e.getBlockRangeInterval)(_0x21f7cc);
    return _0x17d391 === _0x1af621
      ? (0, e.containsInteriorInsertionOffset)(_0x413f38, _0x17d391)
      : (0, e.intersectsOperationalIntervals)(_0x413f38, {
          startOffset: _0x17d391,
          endOffset: _0x1af621,
        });
  });
}
function s(_0x53017c, _0x1cfdd2, _0x10e080) {
  (_0x53017c.paragraphs ?? [])
    .filter(
      (_0x2970bd) =>
        _0x2970bd.startIndex > _0x1cfdd2 && _0x2970bd.startIndex < _0x10e080,
    )
    .forEach((_0x1d8a4d) => {
      let _0x73b21b = { ...(_0x1d8a4d.paragraphStyle ?? {}) };
      (delete _0x73b21b.indentEnd,
        delete _0x73b21b.spaceAbove,
        delete _0x73b21b.spaceBelow,
        delete _0x73b21b.textStyle,
        (_0x1d8a4d.paragraphStyle = _0x73b21b));
    });
}
function c(_0x40449f) {
  var _0x56bed2, _0xf54b6d;
  let _0x18f084 = x(_0x40449f.documentData),
    _0x37dcb4 = C(_0x18f084),
    _0xa1b687 = h(_0x37dcb4, _0x40449f.cursorOffset);
  if (!_0xa1b687) return null;
  let _0xbf31b0 = y(_0x37dcb4, _0xa1b687),
    _0x1e94a4 = _0xbf31b0[_0xbf31b0.length - 1];
  if (
    !_0x1e94a4 ||
    !b(_0x37dcb4, _0xa1b687, _0x1e94a4) ||
    _0x40449f.cursorOffset < _0x1e94a4.startIndex
  )
    return null;
  let _0x1f79e0 = T(_0x37dcb4, _0xa1b687, _0x1e94a4),
    _0x35b82f = (0, e.getBlockRangeInterval)(_0xa1b687),
    _0x106ad1 = _0x35b82f.endOffset - 1;
  if (_0x1f79e0 >= _0x106ad1) return null;
  ((_0x37dcb4.dataStream = [
    _0x37dcb4.dataStream["slice"](0, _0x1f79e0),
    e.DataStreamTreeTokenType["BLOCK_END"],
    _0x37dcb4.dataStream["slice"](_0x1f79e0, _0x106ad1),
    _0x37dcb4.dataStream["slice"](_0x35b82f.endOffset),
  ].join("")),
    P(_0x37dcb4.paragraphs, _0x1f79e0, _0xa1b687.endIndex, 1),
    P(_0x37dcb4.sectionBreaks, _0x1f79e0, _0xa1b687.endIndex, 1),
    P(_0x37dcb4.customBlocks, _0x1f79e0, _0xa1b687.endIndex, 1),
    ve(_0x37dcb4.textRuns, _0x1f79e0, _0xa1b687.endIndex, 1),
    F(_0x37dcb4.tables, _0x1f79e0, _0xa1b687.endIndex, 1),
    F(_0x37dcb4.customRanges, _0x1f79e0, _0xa1b687.endIndex, 1),
    F(_0x37dcb4.customDecorations, _0x1f79e0, _0xa1b687.endIndex, 1),
    (_0x56bed2 = _0x37dcb4.blockRanges) == null ||
      _0x56bed2.forEach((_0x2bd6ef) => {
        _0x2bd6ef === _0xa1b687 || _0x2bd6ef.blockId === _0xa1b687.blockId
          ? (_0x2bd6ef.endIndex = _0x1f79e0)
          : _0x2bd6ef.startIndex >= _0x1f79e0 &&
            _0x2bd6ef.startIndex < _0xa1b687.endIndex &&
            ((_0x2bd6ef.startIndex += 1), (_0x2bd6ef.endIndex += 1));
      }));
  let _0x283b4d = y(_0x37dcb4, { ..._0xa1b687, endIndex: _0x1f79e0 });
  _0x283b4d.forEach((_0x54beb1, _0x19413b) => {
    _0x54beb1.paragraphStyle = {
      ...(_0x54beb1.paragraphStyle ?? {}),
      ...g(_0x19413b === 0, _0x19413b === _0x283b4d.length - 1),
    };
  });
  let _0x4fd3ac =
    (_0xf54b6d = _0x37dcb4.paragraphs) == null
      ? undefined
      : _0xf54b6d.find((_0x167def) => _0x167def.startIndex === _0x1f79e0 + 1);
  return (
    _0x4fd3ac && (_0x4fd3ac.paragraphStyle = v(_0x4fd3ac.paragraphStyle)),
    { nextDocumentData: _0x18f084, cursorOffset: _0x1f79e0 + 1 }
  );
}
function l(_0x55da28) {
  let _0x156983 = C(_0x55da28.documentData),
    _0x4a3e1b = h(_0x156983, _0x55da28.cursorOffset);
  if (!_0x4a3e1b) return null;
  let _0x6bd8c2 = y(_0x156983, _0x4a3e1b),
    _0xddf77 = _0x6bd8c2[_0x6bd8c2.length - 1];
  if (
    !_0xddf77 ||
    !b(_0x156983, _0x4a3e1b, _0xddf77) ||
    _0x55da28.cursorOffset < _0xddf77.startIndex
  )
    return null;
  let _0x1f9827 = T(_0x156983, _0x4a3e1b, _0xddf77),
    _0x133dd6 = (0, e.getBlockRangeInterval)(_0x4a3e1b);
  if (_0x1f9827 >= _0x133dd6.endOffset - 1) return null;
  let _0x2fb8a2 = (0, e.getBodySliceForTextXAction)(
      _0x156983,
      _0x133dd6.startOffset,
      _0x133dd6.endOffset,
      false,
    ),
    _0xa03260 = c({
      documentData: { ..._0x55da28.documentData, body: _0x2fb8a2 },
      cursorOffset: _0x55da28.cursorOffset - _0x133dd6.startOffset,
    });
  if (!(_0xa03260 != null && _0xa03260.nextDocumentData["body"])) return null;
  let _0x408abd = _0x133dd6.endOffset - _0x133dd6.startOffset;
  _0xa03260.nextDocumentData["body"][e.PRESERVE_INSERTED_PARAGRAPH_IDS] = true;
  let _0x47d948 = new e.TextX();
  return (
    _0x47d948.retain(_0x133dd6.startOffset),
    _0x47d948.insert(_0x408abd, _0xa03260.nextDocumentData["body"]),
    _0x47d948.delete(_0x408abd),
    {
      actions: e.JSONX["getInstance"]().editOp(_0x47d948.serialize(), ["body"]),
      cursorOffset: _0x133dd6.startOffset + _0xa03260.cursorOffset,
    }
  );
}
function u(_0x154859) {
  var _0x1bceb7, _0x15df32;
  let _0x3144e7 = x(_0x154859.documentData),
    _0x5022b8 = C(_0x3144e7),
    _0x205be2 =
      (_0x1bceb7 = _0x5022b8.blockRanges) == null
        ? undefined
        : _0x1bceb7.find(
            (_0x526b5e) =>
              _0x526b5e.blockId === _0x154859.blockId &&
              _0x526b5e.blockType === e.DocumentBlockRangeType["QUOTE"],
          );
  if (!_0x205be2) return null;
  let _0x390e8f = E(_0x205be2);
  return (
    (_0x5022b8.paragraphs ?? [])
      .filter(
        (_0x76581f) =>
          _0x76581f.startIndex > _0x205be2.startIndex &&
          _0x76581f.startIndex < _0x390e8f,
      )
      .forEach((_0x3163cd) => {
        _0x3163cd.paragraphStyle = v(_0x3163cd.paragraphStyle);
      }),
    k(_0x5022b8, _0x390e8f, _0x390e8f + 1),
    k(_0x5022b8, _0x205be2.startIndex, _0x205be2.startIndex + 1),
    (_0x5022b8.blockRanges =
      (_0x15df32 = _0x5022b8.blockRanges) == null
        ? undefined
        : _0x15df32.filter(
            (_0x1162d1) => _0x1162d1.blockId !== _0x154859.blockId,
          )),
    { nextDocumentData: _0x3144e7, cursorOffset: _0x205be2.startIndex }
  );
}
function d(_0xb34707) {
  var _0x527726, _0x6368d6;
  let _0x48d525 = x(_0xb34707.documentData),
    _0x952db0 = C(_0x48d525),
    _0x29faa7 =
      (_0x527726 = _0x952db0.blockRanges) == null
        ? undefined
        : _0x527726.find(
            (_0x1252e4) =>
              _0x1252e4.blockId === _0xb34707.blockId &&
              _0x1252e4.blockType === e.DocumentBlockRangeType["QUOTE"],
          );
  if (!_0x29faa7) return null;
  let _0x4e2c38 = (0, e.getBlockRangeInterval)(_0x29faa7);
  return (
    k(_0x952db0, _0x4e2c38.startOffset, _0x4e2c38.endOffset),
    (_0x952db0.blockRanges =
      (_0x6368d6 = _0x952db0.blockRanges) == null
        ? undefined
        : _0x6368d6.filter(
            (_0x476527) => _0x476527.blockId !== _0xb34707.blockId,
          )),
    { nextDocumentData: _0x48d525, cursorOffset: _0x29faa7.startIndex }
  );
}
function f(_0x54108d) {
  let _0x11ea39 = x(_0x54108d.documentData),
    _0x1ccf2d = C(_0x11ea39),
    _0x2a0ed3 = h(_0x1ccf2d, _0x54108d.cursorOffset);
  return (
    (_0x2a0ed3 &&
      (p(
        _0x11ea39,
        _0x1ccf2d,
        _0x2a0ed3,
        _0x54108d.cursorOffset,
        _0x54108d.paragraphStartIndex,
      ) ||
        m(_0x11ea39, _0x1ccf2d, _0x2a0ed3, _0x54108d.cursorOffset))) ||
    null
  );
}
function p(_0x2b315d, _0x3631e6, _0x505e63, _0x28f9b3, _0x590016) {
  let _0x1dc799 = fe(_0x3631e6, _0x505e63, _0x28f9b3, _0x590016);
  if (!_0x1dc799) return null;
  let _0x3ffa9c = _0x1dc799.endTokenOffset - 1;
  return (
    k(
      _0x3631e6,
      _0x1dc799.paragraph["startIndex"],
      _0x1dc799.paragraph["startIndex"] + 1,
    ),
    { nextDocumentData: _0x2b315d, cursorOffset: _0x3ffa9c }
  );
}
function m(_0x543fc1, _0x1e91c0, _0x22bfc0, _0x203dff) {
  if (_0x203dff !== _0x22bfc0.startIndex + 1) return null;
  let _0x53d9a7 = y(_0x1e91c0, _0x22bfc0),
    _0xe88899 = _0x53d9a7[0];
  return !_0xe88899 || T(_0x1e91c0, _0x22bfc0, _0xe88899) !== _0x203dff
    ? null
    : _0x53d9a7.length === 1
      ? ee(_0x543fc1, _0x1e91c0, _0x22bfc0, _0xe88899)
      : te(_0x543fc1, _0x1e91c0, _0x22bfc0, _0xe88899);
}
function h(_0x5373b5, _0x5c8b62) {
  var _0x49d965;
  return (_0x49d965 = _0x5373b5.blockRanges) == null
    ? undefined
    : _0x49d965.find((_0x36e4d0) => {
        let _0x319739 = E(_0x36e4d0);
        return (
          _0x36e4d0.blockType === e.DocumentBlockRangeType["QUOTE"] &&
          _0x36e4d0.startIndex <= _0x5c8b62 &&
          _0x5c8b62 <= _0x319739 + 2
        );
      });
}
function g(_0x50d2de, _0x5d9eeb, _0x29f0d5 = false) {
  return {
    indentStart: { v: 22 },
    keepLines: e.BooleanNumber["TRUE"],
    keepNext: _0x5d9eeb ? e.BooleanNumber["FALSE"] : e.BooleanNumber["TRUE"],
    widowControl: e.BooleanNumber["TRUE"],
    ...(_0x50d2de && _0x29f0d5 ? { spaceAbove: { v: 8 } } : {}),
  };
}
function _(_0x326c57, _0x586c08, _0x351fbe, _0x28f951 = false) {
  let _0x491e70 = (_0x326c57.paragraphs ?? []).filter(
    (_0x3faaff) =>
      _0x3faaff.startIndex > _0x586c08 && _0x3faaff.startIndex < _0x351fbe,
  );
  _0x491e70.forEach((_0x2f5a1c, _0x1b1f80) => {
    _0x2f5a1c.paragraphStyle = {
      ...(_0x2f5a1c.paragraphStyle ?? {}),
      ...g(_0x1b1f80 === 0, _0x1b1f80 === _0x491e70.length - 1, _0x28f951),
    };
  });
}
function v(_0x576452) {
  let _0x454815 = { ...(_0x576452 ?? {}) };
  return (
    delete _0x454815.borderLeft,
    delete _0x454815.indentStart,
    delete _0x454815.spaceAbove,
    delete _0x454815.spaceBelow,
    delete _0x454815.keepLines,
    delete _0x454815.keepNext,
    delete _0x454815.widowControl,
    _0x454815
  );
}
function y(_0x5a697c, _0x2fbe27) {
  let _0x106f99 = E(_0x2fbe27);
  return (_0x5a697c.paragraphs ?? []).filter(
    (_0x3590c5) =>
      _0x3590c5.startIndex > _0x2fbe27.startIndex &&
      _0x3590c5.startIndex < _0x106f99,
  );
}
function b(_0x20b856, _0x597882, _0xe87740) {
  let _0x19e504 = T(_0x20b856, _0x597882, _0xe87740),
    _0x46045a = _0x20b856.dataStream["slice"](_0x19e504, _0xe87740.startIndex);
  return Array.from(_0x46045a).every(
    (_0x474829) =>
      _0x474829 === e.DataStreamTreeTokenType["BLOCK_START"] ||
      _0x474829 === e.DataStreamTreeTokenType["BLOCK_END"],
  );
}
function ee(_0x5e45d4, _0x63adff, _0x1ab082, _0x47e5c8) {
  var _0x36b43c, _0x3d2764;
  let _0x51be0d = _0x1ab082.startIndex,
    _0x3742a6 = E(_0x1ab082);
  (k(_0x63adff, _0x3742a6, _0x3742a6 + 1),
    k(_0x63adff, _0x1ab082.startIndex, _0x1ab082.startIndex + 1),
    (_0x63adff.blockRanges =
      (_0x36b43c = _0x63adff.blockRanges) == null
        ? undefined
        : _0x36b43c.filter(
            (_0x5b1de9) => _0x5b1de9.blockId !== _0x1ab082.blockId,
          )));
  let _0x225935 =
    (_0x3d2764 = _0x63adff.paragraphs) == null
      ? undefined
      : _0x3d2764.find(
          (_0x4c046c) => _0x4c046c.startIndex === _0x47e5c8.startIndex - 1,
        );
  return (
    _0x225935 && (_0x225935.paragraphStyle = v(_0x225935.paragraphStyle)),
    { nextDocumentData: _0x5e45d4, cursorOffset: _0x51be0d }
  );
}
function te(_0x17dfca, _0x319cdd, _0x4ab8ec, _0xf26dd8) {
  var _0x1bb555, _0x1a5060;
  let _0x55b05f = _0xf26dd8.startIndex,
    _0x372f7c = _0x4ab8ec.startIndex;
  (O(
    _0x319cdd,
    _0xf26dd8.startIndex + 1,
    e.DataStreamTreeTokenType["BLOCK_START"],
  ),
    k(_0x319cdd, _0x4ab8ec.startIndex, _0x4ab8ec.startIndex + 1));
  let _0x1ff877 =
      (_0x1bb555 = _0x319cdd.paragraphs) == null
        ? undefined
        : _0x1bb555.find((_0xf015d6) => _0xf015d6.startIndex === _0x55b05f - 1),
    _0x2e6b88 =
      (_0x1a5060 = _0x319cdd.blockRanges) == null
        ? undefined
        : _0x1a5060.find(
            (_0x1ee4f3) => _0x1ee4f3.blockId === _0x4ab8ec.blockId,
          );
  return (
    _0x1ff877 &&
      ((_0x1ff877.paragraphStyle = v(_0x1ff877.paragraphStyle)),
      _0x2e6b88 && (_0x2e6b88.startIndex = _0x1ff877.startIndex + 1)),
    _0x2e6b88 && _(_0x319cdd, _0x2e6b88.startIndex, _0x2e6b88.endIndex),
    { nextDocumentData: _0x17dfca, cursorOffset: _0x372f7c }
  );
}
function x(_0x4ba17e) {
  return {
    ..._0x4ba17e,
    body: _0x4ba17e.body ? ne(_0x4ba17e.body) : _0x4ba17e.body,
  };
}
function ne(_0x4f0f50) {
  var _0x18c119,
    _0x4a60f3,
    _0x212f4d,
    _0x39c6be,
    _0x16f017,
    _0x151b66,
    _0x40b1fd,
    _0x44ca87,
    _0x508ba4;
  return {
    ..._0x4f0f50,
    paragraphs:
      (_0x18c119 = _0x4f0f50.paragraphs) == null
        ? undefined
        : _0x18c119.map((_0x31284d) => ({
            ..._0x31284d,
            bullet: S(_0x31284d.bullet),
            paragraphStyle: S(_0x31284d.paragraphStyle),
          })),
    sectionBreaks:
      (_0x4a60f3 = _0x4f0f50.sectionBreaks) == null
        ? undefined
        : _0x4a60f3.map((_0x37337c) => ({ ..._0x37337c })),
    textRuns:
      (_0x212f4d = _0x4f0f50.textRuns) == null
        ? undefined
        : _0x212f4d.map((_0x54dc44) => ({ ..._0x54dc44 })),
    tables:
      (_0x39c6be = _0x4f0f50.tables) == null
        ? undefined
        : _0x39c6be.map((_0xacd2a9) => ({ ..._0xacd2a9 })),
    columnGroups:
      (_0x16f017 = _0x4f0f50.columnGroups) == null
        ? undefined
        : _0x16f017.map((_0x1a2ab5) => {
            var _0x2eeb5a;
            return {
              ..._0x1a2ab5,
              columns:
                (_0x2eeb5a = _0x1a2ab5.columns) == null
                  ? undefined
                  : _0x2eeb5a.map((_0x186689) => S(_0x186689)),
            };
          }),
    blockRanges:
      (_0x151b66 = _0x4f0f50.blockRanges) == null
        ? undefined
        : _0x151b66.map((_0x3a3664) => ({ ..._0x3a3664 })),
    customRanges:
      (_0x40b1fd = _0x4f0f50.customRanges) == null
        ? undefined
        : _0x40b1fd.map((_0x539e60) => ({ ..._0x539e60 })),
    customDecorations:
      (_0x44ca87 = _0x4f0f50.customDecorations) == null
        ? undefined
        : _0x44ca87.map((_0x38d511) => ({ ..._0x38d511 })),
    customBlocks:
      (_0x508ba4 = _0x4f0f50.customBlocks) == null
        ? undefined
        : _0x508ba4.map((_0x1746f7) => ({ ..._0x1746f7 })),
  };
}
function S(_0x5cf534) {
  return Array.isArray(_0x5cf534)
    ? _0x5cf534.map((_0x290116) => S(_0x290116))
    : !_0x5cf534 || typeof _0x5cf534 != "object"
      ? _0x5cf534
      : Object.fromEntries(
          Object.entries(_0x5cf534).map(([_0x1a0781, _0x3330f5]) => [
            _0x1a0781,
            S(_0x3330f5),
          ]),
        );
}
function C(_0x4aab00) {
  if (!_0x4aab00.body) throw Error("Document body is required");
  return _0x4aab00.body;
}
function re(_0x15a443, _0xbbd889, _0xb9dc3, _0x315542 = "convert-paragraph") {
  if (_0xbbd889 == null || _0xb9dc3 == null) {
    let _0x50f1d4 = ae(_0x15a443);
    return { startOffset: _0x50f1d4, endOffset: _0x50f1d4 };
  }
  let _0x36f5bc = Math.min(_0xbbd889, _0xb9dc3),
    _0x51b45d = Math.max(_0xbbd889, _0xb9dc3),
    _0x5ecf97 = ue(_0x15a443, _0x36f5bc, _0x51b45d);
  return _0x36f5bc === _0x51b45d
    ? _0x315542 === "insert-new"
      ? { startOffset: _0x36f5bc, endOffset: _0x51b45d }
      : ie(_0x15a443, _0x36f5bc, _0x5ecf97)
    : se(_0x15a443, _0x36f5bc, _0x51b45d, _0x5ecf97);
}
function ie(_0x21d14b, _0x3bc7d3, _0x40673c) {
  let _0x47c741 = ce(_0x21d14b, _0x3bc7d3);
  if (_0x47c741) {
    let _0x1090a9 = w(_0x21d14b, _0x47c741, _0x40673c);
    if (_0x1090a9 < _0x47c741.startIndex)
      return {
        startOffset: _0x1090a9,
        endOffset: _0x40673c
          ? Math.min(_0x47c741.startIndex + 1, _0x40673c.endOffset)
          : _0x47c741.startIndex + 1,
      };
  }
  let _0x3cd159 =
    _0x3bc7d3 === 0 &&
    _0x21d14b.dataStream[0] === e.DataStreamTreeTokenType["PARAGRAPH"]
      ? 1
      : _0x3bc7d3;
  return { startOffset: _0x3cd159, endOffset: _0x3cd159 };
}
function ae(_0x4242e0) {
  return _0x4242e0.dataStream["endsWith"](
    e.DataStreamTreeTokenType["SECTION_BREAK"],
  )
    ? Math.max(0, _0x4242e0.dataStream["length"] - 1)
    : _0x4242e0.dataStream["length"];
}
function oe(_0x58d9ce, _0x38499e, _0x417ad2) {
  var _0x578e00;
  let _0x5552de = Math.min(_0x38499e, _0x417ad2),
    _0x14adc6 = Math.max(_0x38499e, _0x417ad2);
  return !!(
    (_0x578e00 = _0x58d9ce.tables) != null &&
    _0x578e00.some(
      (_0x168c28) =>
        (_0x5552de > _0x168c28.startIndex && _0x5552de < _0x168c28.endIndex) ||
        (_0x14adc6 > _0x168c28.startIndex && _0x14adc6 < _0x168c28.endIndex) ||
        (_0x5552de <= _0x168c28.startIndex && _0x14adc6 >= _0x168c28.endIndex),
    )
  );
}
function se(_0x51d2d4, _0x82fd86, _0x221cd3, _0x244277) {
  let _0x40dc8f = [...(_0x51d2d4.paragraphs ?? [])].sort(
      (_0x10be1d, _0xfdfff2) => _0x10be1d.startIndex - _0xfdfff2.startIndex,
    ),
    _0x59a512 = (0, e.getParagraphContentStartOffsets)(_0x51d2d4),
    _0x4c4c29 = _0x40dc8f.find(
      (_0x31df22) =>
        w(_0x51d2d4, _0x31df22, _0x244277, _0x59a512) <= _0x82fd86 &&
        _0x82fd86 <= _0x31df22.startIndex,
    ),
    _0x5dec6d =
      _0x40dc8f.find((_0x47c270) => _0x47c270.startIndex >= _0x221cd3 - 1) ??
      _0x40dc8f[_0x40dc8f.length - 1];
  return {
    startOffset: _0x4c4c29
      ? w(_0x51d2d4, _0x4c4c29, _0x244277, _0x59a512)
      : _0x82fd86,
    endOffset: _0x5dec6d ? le(_0x5dec6d, _0x244277) : _0x221cd3,
  };
}
function ce(_0xea9c8c, _0x589540) {
  let _0x1a35fb = [...(_0xea9c8c.paragraphs ?? [])].sort(
      (_0x307e00, _0x188d85) => _0x307e00.startIndex - _0x188d85.startIndex,
    ),
    _0x373cbb = (0, e.getParagraphContentStartOffsets)(_0xea9c8c);
  return _0x1a35fb.find(
    (_0x113298) =>
      (_0x373cbb.get(_0x113298.startIndex) ?? 0) <= _0x589540 &&
      _0x589540 <= _0x113298.startIndex,
  );
}
function w(_0x27ec17, _0x151f8e, _0x54ecc1, _0x207b98) {
  let _0x5063e0 =
    (_0x207b98 == null ? undefined : _0x207b98.get(_0x151f8e.startIndex)) ??
    (0, e.getParagraphContentStartOffset)(_0x27ec17, _0x151f8e);
  return _0x54ecc1 ? Math.max(_0x5063e0, _0x54ecc1.startOffset) : _0x5063e0;
}
function le(_0x1b79e9, _0x3dcc61) {
  let _0x14618f = _0x1b79e9.startIndex + 1;
  return _0x3dcc61 ? Math.min(_0x14618f, _0x3dcc61.endOffset) : _0x14618f;
}
function ue(_0x4a825b, _0x87c233, _0x215bda) {
  let _0x42165d = de(_0x4a825b, _0x87c233),
    _0x3c774a = de(
      _0x4a825b,
      _0x87c233 === _0x215bda ? _0x215bda : Math.max(_0x87c233, _0x215bda - 1),
    );
  if (!(!_0x42165d && !_0x3c774a)) {
    if (
      !_0x42165d ||
      !_0x3c774a ||
      _0x42165d.startTokenOffset !== _0x3c774a.startTokenOffset ||
      _0x42165d.endTokenOffset !== _0x3c774a.endTokenOffset
    )
      throw new r();
    return _0x42165d;
  }
}
function de(_0x4ccc5e, _0xad100c) {
  let _0x340c61 = _0x4ccc5e.dataStream,
    _0x2fbe1e = -1;
  for (
    let _0x818c4a = Math.min(_0xad100c, _0x340c61.length - 1);
    _0x818c4a >= 0;
    _0x818c4a--
  ) {
    let _0x392bde = _0x340c61[_0x818c4a];
    if (_0x392bde === e.DataStreamTreeTokenType["TABLE_CELL_END"]) return;
    if (_0x392bde === e.DataStreamTreeTokenType["TABLE_CELL_START"]) {
      _0x2fbe1e = _0x818c4a;
      break;
    }
  }
  if (_0x2fbe1e < 0) return;
  let _0x3a3bf0 = _0x340c61.indexOf(
    e.DataStreamTreeTokenType["TABLE_CELL_END"],
    _0x2fbe1e + 1,
  );
  if (!(
    _0x3a3bf0 < 0 ||
    _0xad100c < _0x2fbe1e + 1 ||
    _0xad100c > _0x3a3bf0 - 1
  ))
    return {
      startOffset: _0x2fbe1e + 1,
      endOffset: Math.max(_0x2fbe1e + 1, _0x3a3bf0 - 1),
      startTokenOffset: _0x2fbe1e,
      endTokenOffset: _0x3a3bf0,
    };
}
function T(_0x268fe7, _0x1562cf, _0x18c8d9) {
  return Math.max(
    (0, e.getParagraphContentStartOffset)(_0x268fe7, _0x18c8d9),
    _0x1562cf.startIndex + 1,
  );
}
function E(_0x2b9cd5) {
  return (0, e.getBlockRangeInterval)(_0x2b9cd5).endOffset - 1;
}
function fe(_0x37d652, _0x133af8, _0x135ef6, _0x2929b9) {
  let _0x4843fd = E(_0x133af8),
    _0x460c2e = (_0x37d652.paragraphs ?? []).find(
      (_0x2b8be6) => _0x2b8be6.startIndex === _0x4843fd + 1,
    );
  if (
    !_0x460c2e ||
    (_0x2929b9 != null && _0x460c2e.startIndex !== _0x2929b9) ||
    _0x135ef6 < _0x4843fd ||
    _0x135ef6 > _0x460c2e.startIndex + 1 ||
    _0x37d652.dataStream[_0x460c2e.startIndex] !==
      e.DataStreamTreeTokenType["PARAGRAPH"]
  )
    return null;
  let _0x53df40 = (0, e.getParagraphContentStartOffset)(_0x37d652, _0x460c2e),
    _0x1fb443 = _0x37d652.dataStream["slice"](_0x53df40, _0x460c2e.startIndex);
  return Array.from(_0x1fb443).every(
    (_0x2c6ad5) => _0x2c6ad5 === e.DataStreamTreeTokenType["BLOCK_END"],
  )
    ? { paragraph: _0x460c2e, endTokenOffset: _0x4843fd }
    : null;
}
function D(_0x566977, _0x1fd3dd) {
  var _0x5422d0;
  let _0x10ff63 = E(_0x1fd3dd),
    _0x388f50 = _0x566977.dataStream[_0x10ff63 + 1];
  (_0x388f50 === e.DataStreamTreeTokenType["SECTION_BREAK"] ||
    _0x388f50 === undefined) &&
    O(_0x566977, _0x10ff63 + 1, e.DataStreamTreeTokenType["PARAGRAPH"], {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0x5422d0 = _0x566977.paragraphs) == null
                ? undefined
                : _0x5422d0.map((_0xa99dbf) => _0xa99dbf.paragraphId),
            ),
          ),
        },
      ],
    });
}
function O(_0x55eb64, _0x40e3e1, _0x504936, _0x5364ad = {}) {
  var _0x5c44c7, _0x204ac3;
  _0x504936 &&
    ((_0x55eb64.dataStream =
      "" +
      _0x55eb64.dataStream["slice"](0, _0x40e3e1) +
      _0x504936 +
      _0x55eb64.dataStream["slice"](_0x40e3e1)),
    pe(_0x55eb64, _0x40e3e1, _0x504936.length),
    (_0x5c44c7 = _0x5364ad.paragraphs) != null &&
      _0x5c44c7.length &&
      (_0x55eb64.paragraphs = [
        ...(_0x55eb64.paragraphs ?? []),
        ..._0x5364ad.paragraphs["map"]((_0xadcb50) => ({
          ..._0xadcb50,
          startIndex: _0xadcb50.startIndex + _0x40e3e1,
        })),
      ].sort(
        (_0x2adf64, _0x59bb95) => _0x2adf64.startIndex - _0x59bb95.startIndex,
      )),
    (_0x204ac3 = _0x5364ad.blockRanges) != null &&
      _0x204ac3.length &&
      (_0x55eb64.blockRanges = [
        ...(_0x55eb64.blockRanges ?? []),
        ..._0x5364ad.blockRanges["map"]((_0x26319f) => ({
          ..._0x26319f,
          startIndex: _0x26319f.startIndex + _0x40e3e1,
          endIndex: _0x26319f.endIndex + _0x40e3e1,
        })),
      ].sort(
        (_0x10cfca, _0x138164) => _0x10cfca.startIndex - _0x138164.startIndex,
      )));
}
function k(_0x443b77, _0x48da17, _0x2d9733) {
  let _0x47e961 = _0x2d9733 - _0x48da17;
  ((_0x443b77.dataStream =
    "" +
    _0x443b77.dataStream["slice"](0, _0x48da17) +
    _0x443b77.dataStream["slice"](_0x2d9733)),
    me(_0x443b77, _0x48da17, _0x47e961));
}
function pe(_0x25f2fd, _0x538862, _0x47b9f6) {
  ((_0x25f2fd.paragraphs = A(_0x25f2fd.paragraphs, _0x538862, _0x47b9f6)),
    (_0x25f2fd.sectionBreaks = A(
      _0x25f2fd.sectionBreaks,
      _0x538862,
      _0x47b9f6,
    )),
    (_0x25f2fd.customBlocks = A(_0x25f2fd.customBlocks, _0x538862, _0x47b9f6)),
    (_0x25f2fd.textRuns = he(_0x25f2fd.textRuns, _0x538862, _0x47b9f6)),
    (_0x25f2fd.tables = ge(_0x25f2fd.tables, _0x538862, _0x47b9f6)),
    (_0x25f2fd.columnGroups = M(_0x25f2fd.columnGroups, _0x538862, _0x47b9f6)),
    (_0x25f2fd.customRanges = M(_0x25f2fd.customRanges, _0x538862, _0x47b9f6)),
    (_0x25f2fd.customDecorations = M(
      _0x25f2fd.customDecorations,
      _0x538862,
      _0x47b9f6,
    )),
    (_0x25f2fd.blockRanges = M(_0x25f2fd.blockRanges, _0x538862, _0x47b9f6)));
}
function me(_0x2e6090, _0x4904ba, _0x52d387) {
  var _0x35aa01, _0x296890;
  ((_0x2e6090.paragraphs = j(_0x2e6090.paragraphs, _0x4904ba, _0x52d387)),
    (_0x2e6090.sectionBreaks = j(
      _0x2e6090.sectionBreaks,
      _0x4904ba,
      _0x52d387,
    )),
    (_0x2e6090.customBlocks = j(_0x2e6090.customBlocks, _0x4904ba, _0x52d387)),
    (_0x2e6090.textRuns =
      (_0x35aa01 = _e(
        (_0x296890 = _0x2e6090.textRuns) == null
          ? undefined
          : _0x296890.map((_0x2bc25c) => ({
              ..._0x2bc25c,
              startIndex: _0x2bc25c.st,
              endIndex: _0x2bc25c.ed,
            })),
        _0x4904ba,
        _0x52d387,
      )) == null
        ? undefined
        : _0x35aa01.map((_0x5d89b8) => {
            let {
              startIndex: _0x5cb737,
              endIndex: _0x327143,
              ..._0x4641e8
            } = _0x5d89b8;
            return { ..._0x4641e8, st: _0x5cb737, ed: _0x327143 };
          })),
    (_0x2e6090.tables = _e(_0x2e6090.tables, _0x4904ba, _0x52d387)),
    (_0x2e6090.columnGroups = N(_0x2e6090.columnGroups, _0x4904ba, _0x52d387)),
    (_0x2e6090.customRanges = N(_0x2e6090.customRanges, _0x4904ba, _0x52d387)),
    (_0x2e6090.customDecorations = N(
      _0x2e6090.customDecorations,
      _0x4904ba,
      _0x52d387,
    )),
    (_0x2e6090.blockRanges = N(_0x2e6090.blockRanges, _0x4904ba, _0x52d387)));
}
function A(_0x1e6662, _0x3ab7dc, _0x2c9d56) {
  return _0x1e6662 == null
    ? undefined
    : _0x1e6662.map((_0xc950e4) =>
        _0xc950e4.startIndex >= _0x3ab7dc
          ? { ..._0xc950e4, startIndex: _0xc950e4.startIndex + _0x2c9d56 }
          : _0xc950e4,
      );
}
function j(_0x4353bb, _0x4681aa, _0x368480) {
  let _0x26b749 = _0x4681aa + _0x368480;
  return _0x4353bb == null
    ? undefined
    : _0x4353bb
        .map((_0x1cdf7f) =>
          _0x1cdf7f.startIndex >= _0x4681aa && _0x1cdf7f.startIndex < _0x26b749
            ? null
            : _0x1cdf7f.startIndex >= _0x26b749
              ? { ..._0x1cdf7f, startIndex: _0x1cdf7f.startIndex - _0x368480 }
              : _0x1cdf7f,
        )
        .filter((_0x488a7e) => _0x488a7e != null);
}
function he(_0x409e23, _0x13ffae, _0x1a5a33) {
  return _0x409e23 == null
    ? undefined
    : _0x409e23.map((_0x28dc68) =>
        _0x28dc68.st >= _0x13ffae
          ? {
              ..._0x28dc68,
              st: _0x28dc68.st + _0x1a5a33,
              ed: _0x28dc68.ed + _0x1a5a33,
            }
          : _0x28dc68.ed > _0x13ffae
            ? { ..._0x28dc68, ed: _0x28dc68.ed + _0x1a5a33 }
            : _0x28dc68,
      );
}
function M(_0x129bfb, _0x31de6b, _0x5bbb40) {
  return _0x129bfb == null
    ? undefined
    : _0x129bfb.map((_0x344f2f) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x344f2f, _0x31de6b, _0x5bbb40),
      );
}
function ge(_0x43bd29, _0x982e0c, _0x43f477) {
  return _0x43bd29 == null
    ? undefined
    : _0x43bd29.map((_0x5d0f7d) =>
        (0, e.shiftExclusiveRangeOnInsert)(_0x5d0f7d, _0x982e0c, _0x43f477),
      );
}
function N(_0x3c3373, _0x3ac227, _0x125b44) {
  return _0x3c3373 == null
    ? undefined
    : _0x3c3373
        .map((_0x574ce2) =>
          (0, e.shiftInclusiveRangeOnDelete)(_0x574ce2, _0x3ac227, _0x125b44),
        )
        .filter((_0x206cfd) => _0x206cfd != null);
}
function _e(_0x4f31ee, _0x57adb3, _0x47cbd4) {
  return _0x4f31ee == null
    ? undefined
    : _0x4f31ee
        .map((_0x26e0b2) =>
          (0, e.shiftExclusiveRangeOnDelete)(_0x26e0b2, _0x57adb3, _0x47cbd4),
        )
        .filter((_0x4ed45c) => _0x4ed45c != null);
}
function P(_0x2927a6, _0x3182eb, _0x903f15, _0x49029b) {
  _0x2927a6 == null ||
    _0x2927a6.forEach((_0x201f9d) => {
      _0x201f9d.startIndex >= _0x3182eb &&
        _0x201f9d.startIndex < _0x903f15 &&
        (_0x201f9d.startIndex += _0x49029b);
    });
}
function ve(_0x4896d7, _0x98d2f8, _0x2a281e, _0x5ccb93) {
  _0x4896d7 == null ||
    _0x4896d7.forEach((_0x126285) => {
      _0x126285.st >= _0x98d2f8 && _0x126285.st < _0x2a281e
        ? ((_0x126285.st += _0x5ccb93), (_0x126285.ed += _0x5ccb93))
        : _0x126285.ed > _0x98d2f8 &&
          _0x126285.ed < _0x2a281e &&
          (_0x126285.ed += _0x5ccb93);
    });
}
function F(_0xcb256f, _0x214584, _0x50a0c9, _0x2dffce) {
  _0xcb256f == null ||
    _0xcb256f.forEach((_0x20cfb9) => {
      _0x20cfb9.startIndex >= _0x214584 && _0x20cfb9.startIndex < _0x50a0c9
        ? ((_0x20cfb9.startIndex += _0x2dffce),
          (_0x20cfb9.endIndex += _0x2dffce))
        : _0x20cfb9.endIndex > _0x214584 &&
          _0x20cfb9.endIndex < _0x50a0c9 &&
          (_0x20cfb9.endIndex += _0x2dffce);
    });
}
const I = "DOCS_QUOTE_PLUGIN",
  L = {
    id: "docs-quote.command.insert-below",
    type: e.CommandType["COMMAND"],
    handler: (_0x4e8e78) => {
      var _0x197021;
      if ((0, t.isHeaderFooterSelection)(G(_0x4e8e78))) return false;
      let _0xd7fa3 = (0, t.getContentInsertRange)(_0x4e8e78);
      if (_0xd7fa3)
        return _0x4e8e78
          .get(e.ICommandService)
          .syncExecuteCommand(R.id, {
            startOffset: _0xd7fa3.startOffset,
            endOffset: _0xd7fa3.endOffset,
            insertionMode: "insert-new",
            unitId: _0xd7fa3.unitId,
          });
      let _0x25a045 = Se(_0x4e8e78);
      if (!_0x25a045) return false;
      let _0x1dc426 =
          (_0x197021 = _0x4e8e78
            .get(e.IUniverInstanceService)
            .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"])) == null
            ? undefined
            : _0x197021.getBody(),
        _0x151ef0 = _0x1dc426
          ? (0, e.getParagraphFollowingBlockOffset)(_0x1dc426, _0x25a045)
          : _0x25a045.startIndex + 1;
      return _0x4e8e78
        .get(e.ICommandService)
        .syncExecuteCommand(R.id, {
          startOffset: _0x151ef0,
          endOffset: _0x151ef0,
        });
    },
  },
  R = {
    id: "docs-quote.command.insert",
    type: e.CommandType["COMMAND"],
    handler: (_0x4de543, _0x14a5db) => {
      let _0x7e72b2 = W(
        _0x4de543,
        _0x14a5db == null ? undefined : _0x14a5db.unitId,
      );
      if (!_0x7e72b2) return false;
      let _0x4b51dd = G(_0x4de543);
      if ((0, t.isHeaderFooterSelection)(_0x4b51dd)) return false;
      let _0x3b676a = ye(_0x14a5db, _0x4b51dd),
        _0x47787d = be(_0x7e72b2.previousDocumentData, _0x3b676a);
      if (_0x47787d) {
        if (_0x47787d.blockType !== e.DocumentBlockRangeType["QUOTE"])
          return false;
        let _0x30dac0 = u({
          blockId: _0x47787d.blockId,
          documentData: _0x7e72b2.previousDocumentData,
        });
        return _0x30dac0
          ? Y(
              _0x7e72b2.commandService,
              _0x7e72b2.unitId,
              _0x7e72b2.previousDocumentData,
              _0x30dac0.nextDocumentData,
              R.id,
              _0x30dac0.cursorOffset,
            )
          : false;
      }
      let _0x3deead;
      try {
        _0x3deead = i({
          blockId:
            (_0x14a5db == null ? undefined : _0x14a5db.blockId) ??
            (0, e.generateRandomId)(6),
          documentData: _0x7e72b2.previousDocumentData,
          endOffset: _0x3b676a == null ? undefined : _0x3b676a.endOffset,
          insertionMode:
            _0x14a5db == null ? undefined : _0x14a5db.insertionMode,
          startOffset: _0x3b676a == null ? undefined : _0x3b676a.startOffset,
        });
      } catch (_0x50265e) {
        if (_0x50265e instanceof r) return false;
        throw _0x50265e;
      }
      return Y(
        _0x7e72b2.commandService,
        _0x7e72b2.unitId,
        _0x7e72b2.previousDocumentData,
        _0x3deead.nextDocumentData,
        R.id,
        _0x3deead.cursorOffset,
      );
    },
  },
  z = {
    id: "docs-quote.command.exit",
    type: e.CommandType["COMMAND"],
    handler: (_0x4d3400, _0x1fab27) => {
      var _0x30ae1f;
      let _0x3a6650 = W(
        _0x4d3400,
        _0x1fab27 == null ? undefined : _0x1fab27.unitId,
      );
      if (!_0x3a6650) return false;
      let _0x5c4fc1 =
        (_0x1fab27 == null ? undefined : _0x1fab27.cursorOffset) ??
        ((_0x30ae1f = G(_0x4d3400)) == null
          ? undefined
          : _0x30ae1f.startOffset);
      if (_0x5c4fc1 == null) return false;
      let _0x1bd400 = l({
        cursorOffset: _0x5c4fc1,
        documentData: _0x3a6650.previousDocumentData,
      });
      return _0x1bd400
        ? Ae(
            _0x3a6650.commandService,
            _0x3a6650.unitId,
            _0x1bd400.actions,
            z.id,
            _0x1bd400.cursorOffset,
          )
        : false;
    },
  },
  B = {
    id: "docs-quote.command.unwrap",
    type: e.CommandType["COMMAND"],
    handler: (_0x457331, _0x21b1f) => {
      if (!_0x21b1f) return false;
      let _0x3580fc = W(_0x457331, _0x21b1f.unitId);
      if (!_0x3580fc) return false;
      let _0x1940e9 = u({
        blockId: _0x21b1f.blockId,
        documentData: _0x3580fc.previousDocumentData,
      });
      return _0x1940e9
        ? Y(
            _0x3580fc.commandService,
            _0x3580fc.unitId,
            _0x3580fc.previousDocumentData,
            _0x1940e9.nextDocumentData,
            B.id,
            _0x1940e9.cursorOffset,
          )
        : false;
    },
  },
  V = {
    id: "docs-quote.command.update-style",
    type: e.CommandType["COMMAND"],
    handler: (_0x9fc4bd, _0x178bca) => {
      if (
        !_0x178bca ||
        (_0x178bca.lineColor == null && _0x178bca.textColor == null)
      )
        return false;
      let _0x291c55 = W(_0x9fc4bd, _0x178bca.unitId);
      if (!_0x291c55) return false;
      let _0x149135 = Ce(_0x291c55.previousDocumentData, _0x178bca);
      return _0x149135
        ? !!_0x291c55.commandService["syncExecuteCommand"](
            t.RichTextEditingMutation["id"],
            {
              unitId: _0x291c55.unitId,
              actions: _0x149135,
              textRanges: null,
              noNeedSetTextRange: true,
              isEditing: false,
              trigger: V.id,
            },
          )
        : false;
    },
  },
  H = {
    id: "docs-quote.command.remove",
    type: e.CommandType["COMMAND"],
    handler: (_0x3d25bc, _0x319a00) => {
      if (!_0x319a00) return false;
      let _0x52d134 = W(_0x3d25bc, _0x319a00.unitId);
      if (!_0x52d134) return false;
      let _0x1bc009 = d({
        blockId: _0x319a00.blockId,
        documentData: _0x52d134.previousDocumentData,
      });
      return _0x1bc009
        ? Y(
            _0x52d134.commandService,
            _0x52d134.unitId,
            _0x52d134.previousDocumentData,
            _0x1bc009.nextDocumentData,
            H.id,
            _0x1bc009.cursorOffset,
          )
        : false;
    },
  },
  U = {
    id: "docs-quote.command.cancel-empty-paragraph",
    type: e.CommandType["COMMAND"],
    handler: (_0x360b0b, _0x3cff65) => {
      var _0x534ea5;
      let _0x294edb = W(
        _0x360b0b,
        _0x3cff65 == null ? undefined : _0x3cff65.unitId,
      );
      if (!_0x294edb) return false;
      let _0x270e41 =
        (_0x3cff65 == null ? undefined : _0x3cff65.cursorOffset) ??
        ((_0x534ea5 = G(_0x360b0b)) == null
          ? undefined
          : _0x534ea5.startOffset);
      if (_0x270e41 == null) return false;
      let _0xbf3da3 = f({
        cursorOffset: _0x270e41,
        documentData: _0x294edb.previousDocumentData,
        paragraphStartIndex:
          _0x3cff65 == null ? undefined : _0x3cff65.paragraphStartIndex,
      });
      return _0xbf3da3
        ? Y(
            _0x294edb.commandService,
            _0x294edb.unitId,
            _0x294edb.previousDocumentData,
            _0xbf3da3.nextDocumentData,
            U.id,
            _0xbf3da3.cursorOffset,
          )
        : false;
    },
  };
function W(_0x522e10, _0x57c7df) {
  let _0x4d11d4 = _0x522e10.get(e.IUniverInstanceService),
    _0x412004 = _0x57c7df
      ? _0x4d11d4.getUnit(_0x57c7df, e.UniverInstanceType["UNIVER_DOC"])
      : _0x4d11d4.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
  return _0x412004
    ? {
        commandService: _0x522e10.get(e.ICommandService),
        previousDocumentData: _0x412004.getSnapshot(),
        unitId: _0x412004.getUnitId(),
      }
    : null;
}
function G(_0x1da715) {
  var _0x22856f;
  return (_0x22856f = _0x1da715
    .get(t.DocSelectionManagerService)
    .getTextRanges()) == null
    ? undefined
    : _0x22856f[0];
}
function ye(_0x54c24e, _0xcd8093) {
  let _0x5cf68b =
      (_0x54c24e == null ? undefined : _0x54c24e.startOffset) ??
      (_0xcd8093 == null ? undefined : _0xcd8093.startOffset),
    _0x2c2f25 =
      (_0x54c24e == null ? undefined : _0x54c24e.endOffset) ??
      (_0xcd8093 == null ? undefined : _0xcd8093.endOffset);
  if (_0x5cf68b != null && _0x2c2f25 != null)
    return {
      endOffset: Math.max(_0x5cf68b, _0x2c2f25),
      startOffset: Math.min(_0x5cf68b, _0x2c2f25),
    };
}
function be(_0xa49d0a, _0x33bfa4) {
  var _0x450a0f;
  if (!_0x33bfa4) return;
  let _0x4be42b = xe(_0x33bfa4);
  return (_0x450a0f = _0xa49d0a.body) == null ||
    (_0x450a0f = _0x450a0f.blockRanges) == null
    ? undefined
    : _0x450a0f.find((_0x312346) => {
        let _0x30f7cd = (0, e.getBlockRangeInterval)(_0x312346);
        return _0x33bfa4.startOffset === _0x33bfa4.endOffset
          ? (0, e.containsInteriorInsertionOffset)(_0x30f7cd, _0x4be42b)
          : (0, e.containsStreamIndex)(_0x30f7cd, _0x4be42b);
      });
}
function xe(_0x323e63) {
  return _0x323e63.startOffset === _0x323e63.endOffset
    ? _0x323e63.startOffset
    : _0x323e63.startOffset + 1;
}
function Se(_0xf11897) {
  let _0x176ea6 = G(_0xf11897);
  if (!_0x176ea6) return null;
  let _0x4b2aec = _0xf11897
      .get(e.IUniverInstanceService)
      .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    _0x1eace5 = _0x4b2aec == null ? undefined : _0x4b2aec.getBody();
  return _0x1eace5
    ? (e.BuildTextUtils["range"].getParagraphsInRange(
        _0x176ea6,
        _0x1eace5.paragraphs ?? [],
        _0x1eace5.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function Ce(_0x25391a, _0x573f00) {
  var _0x12f55b;
  let _0x461fe2 = _0x25391a.body,
    _0x1e45f4 =
      _0x461fe2 == null || (_0x12f55b = _0x461fe2.blockRanges) == null
        ? undefined
        : _0x12f55b.find(
            (_0x323297) =>
              _0x323297.blockId === _0x573f00.blockId &&
              _0x323297.blockType === e.DocumentBlockRangeType["QUOTE"],
          );
  if (!_0x461fe2 || !_0x1e45f4) return null;
  let _0x61e59a = e.JSONX["getInstance"](),
    _0xf0bbcc = [];
  if (_0x573f00.textColor != null) {
    let _0x333f2e = _0x1e45f4.startIndex + 1,
      _0x4305bf = _0x1e45f4.endIndex;
    if (_0x4305bf > _0x333f2e) {
      if (_0x461fe2.textRuns == null)
        _0xf0bbcc.push(
          _0x61e59a.insertOp(
            ["body", "textRuns"],
            [
              {
                st: _0x333f2e,
                ed: _0x4305bf,
                ts: { cl: { rgb: _0x573f00.textColor } },
              },
            ],
          ),
        );
      else {
        let _0x25c738 = new e["TextX"]();
        (_0x25c738.push({ t: e.TextXActionType["RETAIN"], len: _0x333f2e }),
          _0x25c738.push({
            t: e.TextXActionType["RETAIN"],
            len: _0x4305bf - _0x333f2e,
            body: {
              dataStream: "",
              textRuns: [
                {
                  st: 0,
                  ed: _0x4305bf - _0x333f2e,
                  ts: { cl: { rgb: _0x573f00.textColor } },
                },
              ],
            },
          }),
          _0xf0bbcc.push(_0x61e59a.editOp(_0x25c738.serialize(), ["body"])));
      }
    }
  }
  _0x573f00.lineColor != null &&
    (_0x461fe2.paragraphs ?? []).forEach((_0x5a19e8, _0x518aa1) => {
      var _0x1fe5e5;
      if (
        _0x5a19e8.startIndex <= _0x1e45f4.startIndex ||
        _0x5a19e8.startIndex >= _0x1e45f4.endIndex
      )
        return;
      let _0x2a772f = ["body", "paragraphs", _0x518aa1, "paragraphStyle"],
        _0x77d064 = [..._0x2a772f, "borderLeft"],
        _0x53adf5 =
          (_0x1fe5e5 = _0x5a19e8.paragraphStyle) == null
            ? undefined
            : _0x1fe5e5.borderLeft,
        _0x40cf31 = {
          color: { rgb: _0x573f00.lineColor },
          width: (_0x53adf5 == null ? undefined : _0x53adf5.width) ?? 2,
          dashStyle:
            (_0x53adf5 == null ? undefined : _0x53adf5.dashStyle) ??
            e.DashStyleType["SOLID"],
          padding: (_0x53adf5 == null ? undefined : _0x53adf5.padding) ?? 0,
        };
      _0x5a19e8.paragraphStyle == null
        ? _0xf0bbcc.push(
            _0x61e59a.insertOp(_0x2a772f, { borderLeft: _0x40cf31 }),
          )
        : _0x53adf5 == null
          ? _0xf0bbcc.push(_0x61e59a.insertOp(_0x77d064, _0x40cf31))
          : _0xf0bbcc.push(
              _0x61e59a.replaceOp(_0x77d064, _0x53adf5, _0x40cf31),
            );
    });
  let _0x3825f2 = null;
  return (
    _0xf0bbcc.forEach((_0x231a30) => {
      _0x3825f2 = e.JSONX["compose"](_0x3825f2, _0x231a30);
    }),
    _0x3825f2
  );
}
function we(_0x3f3d61, _0x5beef6) {
  let _0x5c8e63 = _0x3f3d61.body,
    _0x256f5c = _0x5beef6.body,
    _0x287495 = (0, e.getSingleDataStreamChange)(_0x5c8e63, _0x256f5c),
    _0x20e00f = [],
    _0x5ecd28 = _0x287495 && _0x256f5c ? Ee(_0x256f5c, _0x287495) : null,
    _0x35ef9d =
      _0x287495 && _0x287495.deleteLength === _0x287495.insertLength
        ? Te(_0x5c8e63, _0x256f5c)
        : null,
    _0x305ea8 = _0x287495 ? null : De(_0x5c8e63, _0x256f5c);
  return (
    _0x5ecd28 && _0x20e00f.push(_0x5ecd28),
    _0x35ef9d && _0x20e00f.push(_0x35ef9d),
    _0x305ea8 && _0x20e00f.push(_0x305ea8),
    _0x20e00f.reduce(
      (_0x2a59d6, _0x35eed7) => e.JSONX["compose"](_0x2a59d6, _0x35eed7),
      null,
    )
  );
}
function Te(_0x30c18b, _0x153b33) {
  let _0x758e5e = _0x30c18b == null ? undefined : _0x30c18b.blockRanges,
    _0x22e824 = _0x153b33 == null ? undefined : _0x153b33.blockRanges;
  if (
    !(_0x758e5e != null && _0x758e5e.length) ||
    !(_0x22e824 != null && _0x22e824.length) ||
    _0x758e5e.length !== _0x22e824.length
  )
    return null;
  let _0x144d8e = e.JSONX["getInstance"](),
    _0x543133 = [];
  return (
    _0x758e5e.forEach((_0x131d92, _0x20d7ca) => {
      let _0x9d45d9 = _0x22e824[_0x20d7ca];
      _0x131d92.blockId ===
        (_0x9d45d9 == null ? undefined : _0x9d45d9.blockId) &&
        (_0x131d92.startIndex !== _0x9d45d9.startIndex &&
          _0x543133.push(
            _0x144d8e.replaceOp(
              ["body", "blockRanges", _0x20d7ca, "startIndex"],
              _0x131d92.startIndex,
              _0x9d45d9.startIndex,
            ),
          ),
        _0x131d92.endIndex !== _0x9d45d9.endIndex &&
          _0x543133.push(
            _0x144d8e.replaceOp(
              ["body", "blockRanges", _0x20d7ca, "endIndex"],
              _0x131d92.endIndex,
              _0x9d45d9.endIndex,
            ),
          ));
    }),
    _0x543133.reduce(
      (_0x4e7dd9, _0x1c11d9) => e.JSONX["compose"](_0x4e7dd9, _0x1c11d9),
      null,
    )
  );
}
function Ee(_0x1341e3, _0x1f9c15) {
  let _0x134984 = new e.TextX();
  return (
    _0x134984.retain(_0x1f9c15.start),
    _0x1f9c15.insertLength > 0 &&
      _0x134984.insert(
        _0x1f9c15.insertLength,
        (0, e.getBodySliceForTextXAction)(
          _0x1341e3,
          _0x1f9c15.start,
          _0x1f9c15.start + _0x1f9c15.insertLength,
          false,
        ),
      ),
    _0x1f9c15.deleteLength > 0 && _0x134984.delete(_0x1f9c15.deleteLength),
    e.JSONX["getInstance"]().editOp(_0x134984.serialize(), ["body"])
  );
}
function De(_0x1540af, _0x23df7f) {
  let _0x1731c6 = [];
  for (let _0x16257e of Oe)
    K(
      e.JSONX["getInstance"](),
      ["body", _0x16257e],
      _0x1540af == null ? undefined : _0x1540af[_0x16257e],
      _0x23df7f == null ? undefined : _0x23df7f[_0x16257e],
      _0x1731c6,
    );
  return _0x1731c6.reduce(
    (_0x9ce0bb, _0x1fb43e) => e.JSONX["compose"](_0x9ce0bb, _0x1fb43e),
    null,
  );
}
const Oe = [
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
function K(_0x4fdc0b, _0x5f36c4, _0x1b0fe5, _0xd25cf8, _0xb18345) {
  if (!J(_0x1b0fe5, _0xd25cf8)) {
    if (_0x1b0fe5 == null) {
      _0xb18345.push(_0x4fdc0b.insertOp(_0x5f36c4, _0xd25cf8));
      return;
    }
    if (_0xd25cf8 == null) {
      _0xb18345.push(_0x4fdc0b.removeOp(_0x5f36c4, _0x1b0fe5));
      return;
    }
    if (Array.isArray(_0x1b0fe5) && Array.isArray(_0xd25cf8)) {
      ke(_0x4fdc0b, _0x5f36c4, _0x1b0fe5, _0xd25cf8, _0xb18345);
      return;
    }
    if (q(_0x1b0fe5) && q(_0xd25cf8)) {
      new Set([...Object.keys(_0x1b0fe5), ...Object.keys(_0xd25cf8)]).forEach(
        (_0x2e9b67) => {
          K(
            _0x4fdc0b,
            [..._0x5f36c4, _0x2e9b67],
            _0x1b0fe5[_0x2e9b67],
            _0xd25cf8[_0x2e9b67],
            _0xb18345,
          );
        },
      );
      return;
    }
    _0xb18345.push(_0x4fdc0b.replaceOp(_0x5f36c4, _0x1b0fe5, _0xd25cf8));
  }
}
function ke(_0x2a304f, _0x5031f4, _0x554335, _0x53d1f7, _0x46c200) {
  if (_0x554335.length === _0x53d1f7.length) {
    _0x554335.forEach((_0x513fbb, _0x128113) =>
      K(
        _0x2a304f,
        [..._0x5031f4, _0x128113],
        _0x513fbb,
        _0x53d1f7[_0x128113],
        _0x46c200,
      ),
    );
    return;
  }
  let _0x3e6a2a = 0;
  for (
    ;
    _0x3e6a2a < _0x554335.length &&
    _0x3e6a2a < _0x53d1f7.length &&
    J(_0x554335[_0x3e6a2a], _0x53d1f7[_0x3e6a2a]);
  )
    _0x3e6a2a++;
  let _0x1d721b = _0x554335.length - 1,
    _0x63d5 = _0x53d1f7.length - 1;
  for (
    ;
    _0x1d721b >= _0x3e6a2a &&
    _0x63d5 >= _0x3e6a2a &&
    J(_0x554335[_0x1d721b], _0x53d1f7[_0x63d5]);
  )
    (_0x1d721b--, _0x63d5--);
  for (let _0x1633f5 = _0x1d721b; _0x1633f5 >= _0x3e6a2a; _0x1633f5--)
    _0x46c200.push(
      _0x2a304f.removeOp([..._0x5031f4, _0x1633f5], _0x554335[_0x1633f5]),
    );
  for (let _0x1bd54b = _0x3e6a2a; _0x1bd54b <= _0x63d5; _0x1bd54b++)
    _0x46c200.push(
      _0x2a304f.insertOp([..._0x5031f4, _0x1bd54b], _0x53d1f7[_0x1bd54b]),
    );
}
function q(_0x469d0a) {
  return (
    typeof _0x469d0a == "object" && !!_0x469d0a && !Array.isArray(_0x469d0a)
  );
}
function J(_0xfc0ee9, _0x31364c) {
  return JSON.stringify(_0xfc0ee9) === JSON.stringify(_0x31364c);
}
function Y(_0x951fad, _0x26227b, _0x473774, _0x556e7f, _0x9568fc, _0x130705) {
  let _0x40e45b = we(_0x473774, _0x556e7f);
  return _0x40e45b
    ? !!_0x951fad.syncExecuteCommand(t.RichTextEditingMutation["id"], {
        unitId: _0x26227b,
        actions: _0x40e45b,
        textRanges: [
          { startOffset: _0x130705, endOffset: _0x130705, collapsed: true },
        ],
        isEditing: false,
        trigger: _0x9568fc,
      })
    : false;
}
function Ae(_0x3e807f, _0x250158, _0x5254e1, _0x1d1725, _0x11b0f1) {
  return !!_0x3e807f.syncExecuteCommand(t.RichTextEditingMutation["id"], {
    unitId: _0x250158,
    actions: _0x5254e1,
    textRanges: [
      { startOffset: _0x11b0f1, endOffset: _0x11b0f1, collapsed: true },
    ],
    isEditing: false,
    trigger: _0x1d1725,
  });
}
var je = "@univerjs-pro/docs-quote",
  Me = "1.0.0-insiders.20260907-70fc579";
const Ne = {};
function X(_0x39874e, _0x5d2c33) {
  return function (_0x17e34d, _0x3cb6ae) {
    _0x5d2c33(_0x17e34d, _0x3cb6ae, _0x39874e);
  };
}
function Pe(_0x288ae6, _0x597a9d, _0x492497, _0x3ef755) {
  var _0x45f4c3 = arguments.length,
    _0x39ee48 =
      _0x45f4c3 < 3
        ? _0x597a9d
        : _0x3ef755 === null
          ? (_0x3ef755 = Object.getOwnPropertyDescriptor(_0x597a9d, _0x492497))
          : _0x3ef755,
    _0x38d41c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x39ee48 = Reflect.decorate(_0x288ae6, _0x597a9d, _0x492497, _0x3ef755);
  else {
    for (var _0x474a78 = _0x288ae6.length - 1; _0x474a78 >= 0; _0x474a78--)
      (_0x38d41c = _0x288ae6[_0x474a78]) &&
        (_0x39ee48 =
          (_0x45f4c3 < 3
            ? _0x38d41c(_0x39ee48)
            : _0x45f4c3 > 3
              ? _0x38d41c(_0x597a9d, _0x492497, _0x39ee48)
              : _0x38d41c(_0x597a9d, _0x492497)) || _0x39ee48);
  }
  return (
    _0x45f4c3 > 3 &&
      _0x39ee48 &&
      Object.defineProperty(_0x597a9d, _0x492497, _0x39ee48),
    _0x39ee48
  );
}
function Z(_0x13995e) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3aaeea) {
            return typeof _0x3aaeea;
          }
        : function (_0x1ec48c) {
            return _0x1ec48c &&
              typeof Symbol == "function" &&
              _0x1ec48c.constructor === Symbol &&
              _0x1ec48c !== Symbol.prototype
              ? "symbol"
              : typeof _0x1ec48c;
          }),
    Z(_0x13995e)
  );
}
function Fe(_0x1ced61, _0x5cedfa) {
  if (Z(_0x1ced61) != "object" || !_0x1ced61) return _0x1ced61;
  var _0xa31bbe = _0x1ced61[Symbol.toPrimitive];
  if (_0xa31bbe !== undefined) {
    var _0x1a4cfa = _0xa31bbe.call(_0x1ced61, _0x5cedfa || "default");
    if (Z(_0x1a4cfa) != "object") return _0x1a4cfa;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5cedfa === "string" ? String : Number)(_0x1ced61);
}
function Ie(_0x574f95) {
  var _0x20214f = Fe(_0x574f95, "string");
  return Z(_0x20214f) == "symbol" ? _0x20214f : _0x20214f + "";
}
function Q(_0x29eeb1, _0x2d0141, _0x44bee8) {
  return (
    (_0x2d0141 = Ie(_0x2d0141)) in _0x29eeb1
      ? Object.defineProperty(_0x29eeb1, _0x2d0141, {
          value: _0x44bee8,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x29eeb1[_0x2d0141] = _0x44bee8),
    _0x29eeb1
  );
}
let $ = class extends e.Plugin {
  constructor(_0x1ce142 = Ne, _0x3c0c49, _0x3b68fd, _0xebcaab) {
    (super(),
      (this._config = _0x1ce142),
      (this._injector = _0x3c0c49),
      (this._commandService = _0x3b68fd),
      (this._configService = _0xebcaab));
    let { ..._0x378ce2 } = (0, e.merge)({}, Ne, this._config);
    this._configService["setConfig"]("docs-quote.config", _0x378ce2);
  }
  onStarting() {
    [R, L, B, H, z, U, V].forEach((_0x32d322) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x32d322)),
    );
  }
};
(Q($, "pluginName", I),
  Q($, "packageName", je),
  Q($, "version", Me),
  Q($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = Pe(
    [
      (0, e.DependentOn)(n.UniverLicensePlugin, t.UniverDocsPlugin),
      X(1, (0, e.Inject)(e.Injector)),
      X(2, e.ICommandService),
      X(3, e.IConfigService),
    ],
    $,
  )),
  (exports.DOCS_QUOTE_LINE_COLOR_TOKEN = "gray.300"),
  (exports.DOCS_QUOTE_LINE_WIDTH = 2),
  (exports.DOCS_QUOTE_PLUGIN = I),
  (exports.DocsQuoteCancelEmptyParagraphCommand = U),
  (exports.DocsQuoteExitCommand = z),
  (exports.DocsQuoteInsertBelowCommand = L),
  (exports.DocsQuoteInsertCommand = R),
  (exports.DocsQuoteRemoveCommand = H),
  (exports.DocsQuoteUnwrapCommand = B),
  (exports.DocsQuoteUpdateStyleCommand = V),
  Object.defineProperty(exports, "UniverDocsQuotePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildCancelEmptyQuoteParagraphActions = f),
  (exports.buildExitQuoteActions = c));
