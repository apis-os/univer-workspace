import {
  BooleanNumber as _0x4f95c8,
  BuildTextUtils as _0x5a41b2,
  CommandType as _0x334246,
  DashStyleType as _0x3ba1e5,
  DataStreamTreeTokenType as _0x37518c,
  DependentOn as _0x11613c,
  DocumentBlockRangeType as _0xf17462,
  ICommandService as _0x1ed0e3,
  IConfigService as _0x1dddbf,
  IUniverInstanceService as _0x5253e8,
  Inject as _0x1ffb85,
  Injector as _0xbbd0e5,
  JSONX as _0x44986f,
  PRESERVE_INSERTED_PARAGRAPH_IDS as _0x2ad853,
  Plugin as _0x596720,
  TextX as _0x3045dc,
  TextXActionType as _0x4abc69,
  UniverInstanceType as _0x47f859,
  containsInteriorInsertionOffset as _0x4321cf,
  containsStreamIndex as _0x55c828,
  createParagraphId as _0xc98216,
  generateRandomId as _0x24beaf,
  getBlockRangeInterval as _0x324326,
  getBodySliceForTextXAction as _0x208e5a,
  getParagraphContentStartOffset as _0x50ecd4,
  getParagraphContentStartOffsets as _0x1be63e,
  getParagraphFollowingBlockOffset as _0x4996c2,
  getSingleDataStreamChange as _0x102aa8,
  intersectsOperationalIntervals as _0x54b7c3,
  merge as _0x42e3ff,
  shiftExclusiveRangeOnDelete as _0x48a823,
  shiftExclusiveRangeOnInsert as _0x15463a,
  shiftInclusiveRangeOnDelete as _0x1417a7,
  shiftInclusiveRangeOnInsert as _0x1598b9,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0x3df08,
  RichTextEditingMutation as _0xdcf7e9,
  UniverDocsPlugin as _0x4857bb,
  getContentInsertRange as _0x43b97f,
  isHeaderFooterSelection as _0xdbf19,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x11f275 } from "@univerjs-pro/license";
var v = class extends Error {
  constructor(
    _0x1ca2b3 = "Insert\x20range\x20cannot\x20cross\x20table\x20cell\x20boundaries",
  ) {
    super(_0x1ca2b3);
  }
};
function Se(_0x147e5c) {
  var _0x18d3ee;
  let _0x2b9993 = w(_0x147e5c.documentData),
    _0x9d034 = E(_0x2b9993),
    _0x179156 = Ce(_0x147e5c.startOffset, _0x147e5c.endOffset),
    _0x5ee782 = _0x179156
      ? (_0x18d3ee = _0x9d034.blockRanges) == null
        ? undefined
        : _0x18d3ee.find((_0x322d90) => {
            let _0x262b4f = _0x324326(_0x322d90);
            return (
              _0x262b4f.startOffset === _0x179156.startOffset &&
              _0x262b4f.endOffset === _0x179156.endOffset
            );
          })
      : undefined,
    { startOffset: _0xfd29c8, endOffset: _0x45efc6 } = _0x5ee782
      ? _0x179156
      : Le(
          _0x9d034,
          _0x147e5c.startOffset,
          _0x147e5c.endOffset,
          _0x147e5c.insertionMode,
        );
  if (!_0x5ee782 && we(_0x9d034, _0xfd29c8, _0x45efc6))
    throw new v("Insert range cannot overlap an existing document block");
  let _0x1c7afc = Be(_0x9d034, _0xfd29c8, _0x45efc6),
    _0x502427 =
      (_0x5ee782 == null ? undefined : _0x5ee782.blockId) ?? _0x147e5c.blockId;
  if (_0x5ee782)
    return (
      (_0x5ee782.blockType = _0xf17462.QUOTE),
      Te(_0x9d034, _0xfd29c8, _0x45efc6),
      x(_0x9d034, _0xfd29c8, _0x45efc6, _0x1c7afc),
      A(_0x9d034, _0x5ee782),
      { nextDocumentData: _0x2b9993, cursorOffset: _0xfd29c8 + 1 }
    );
  if (_0xfd29c8 === _0x45efc6) {
    var _0x48b0d4, _0x198a87;
    let _0x2101c2 =
      "" + _0x37518c.BLOCK_START + _0x37518c.PARAGRAPH + _0x37518c.BLOCK_END;
    j(_0x9d034, _0xfd29c8, _0x2101c2, {
      paragraphs: [
        {
          startIndex: 1,
          paragraphId: _0xc98216(
            new Set(
              (_0x48b0d4 = _0x9d034.paragraphs) == null
                ? undefined
                : _0x48b0d4.map((_0x19e8d6) => _0x19e8d6.paragraphId),
            ),
          ),
          paragraphStyle: b(true, true, _0x1c7afc),
        },
      ],
      blockRanges: [
        {
          blockId: _0x502427,
          blockType: _0xf17462.QUOTE,
          startIndex: 0,
          endIndex: _0x2101c2.length - 1,
        },
      ],
    });
    let _0x50eb71 =
      (_0x198a87 = _0x9d034.blockRanges) == null
        ? undefined
        : _0x198a87.find((_0x37e5c1) => _0x37e5c1.blockId === _0x502427);
    return (
      _0x50eb71 && A(_0x9d034, _0x50eb71),
      { nextDocumentData: _0x2b9993, cursorOffset: _0xfd29c8 + 1 }
    );
  }
  (j(_0x9d034, _0x45efc6, _0x37518c.BLOCK_END),
    j(_0x9d034, _0xfd29c8, _0x37518c.BLOCK_START),
    x(_0x9d034, _0xfd29c8, _0x45efc6 + 1, _0x1c7afc));
  let _0x2e519c = {
    blockId: _0x502427,
    blockType: _0xf17462.QUOTE,
    startIndex: _0xfd29c8,
    endIndex: _0x45efc6 + 1,
  };
  return (
    (_0x9d034.blockRanges = [...(_0x9d034.blockRanges ?? []), _0x2e519c].sort(
      (_0x5ed803, _0x36644c) => _0x5ed803.startIndex - _0x36644c.startIndex,
    )),
    A(_0x9d034, _0x2e519c),
    { nextDocumentData: _0x2b9993, cursorOffset: _0xfd29c8 + 1 }
  );
}
function Ce(_0x2ebdbb, _0x119683) {
  return _0x2ebdbb == null || _0x119683 == null || _0x2ebdbb === _0x119683
    ? null
    : {
        startOffset: Math.min(_0x2ebdbb, _0x119683),
        endOffset: Math.max(_0x2ebdbb, _0x119683),
      };
}
function we(_0xbbf2a8, _0x58b9b, _0x5a482f) {
  return (_0xbbf2a8.blockRanges ?? []).some((_0x47ce03) => {
    let _0x1806bf = _0x324326(_0x47ce03);
    return _0x58b9b === _0x5a482f
      ? _0x4321cf(_0x1806bf, _0x58b9b)
      : _0x54b7c3(_0x1806bf, { startOffset: _0x58b9b, endOffset: _0x5a482f });
  });
}
function Te(_0x124e92, _0x34716d, _0x233684) {
  (_0x124e92.paragraphs ?? [])
    .filter(
      (_0x1c8c84) =>
        _0x1c8c84.startIndex > _0x34716d && _0x1c8c84.startIndex < _0x233684,
    )
    .forEach((_0x189533) => {
      let _0x2541e4 = { ...(_0x189533.paragraphStyle ?? {}) };
      (delete _0x2541e4.indentEnd,
        delete _0x2541e4.spaceAbove,
        delete _0x2541e4.spaceBelow,
        delete _0x2541e4.textStyle,
        (_0x189533.paragraphStyle = _0x2541e4));
    });
}
function Ee(_0x1aeb10) {
  var _0x2dcc13, _0x5c7f86;
  let _0x2591fa = w(_0x1aeb10.documentData),
    _0x1345ab = E(_0x2591fa),
    _0x1067b8 = y(_0x1345ab, _0x1aeb10.cursorOffset);
  if (!_0x1067b8) return null;
  let _0x2fa8b9 = C(_0x1345ab, _0x1067b8),
    _0x27b56e = _0x2fa8b9[_0x2fa8b9.length - 1];
  if (
    !_0x27b56e ||
    !Ne(_0x1345ab, _0x1067b8, _0x27b56e) ||
    _0x1aeb10.cursorOffset < _0x27b56e.startIndex
  )
    return null;
  let _0x4fdec4 = O(_0x1345ab, _0x1067b8, _0x27b56e),
    _0x3f7439 = _0x324326(_0x1067b8),
    _0x406011 = _0x3f7439.endOffset - 1;
  if (_0x4fdec4 >= _0x406011) return null;
  ((_0x1345ab.dataStream = [
    _0x1345ab.dataStream["slice"](0, _0x4fdec4),
    _0x37518c.BLOCK_END,
    _0x1345ab.dataStream["slice"](_0x4fdec4, _0x406011),
    _0x1345ab.dataStream["slice"](_0x3f7439.endOffset),
  ].join("")),
    L(_0x1345ab.paragraphs, _0x4fdec4, _0x1067b8.endIndex, 1),
    L(_0x1345ab.sectionBreaks, _0x4fdec4, _0x1067b8.endIndex, 1),
    L(_0x1345ab.customBlocks, _0x4fdec4, _0x1067b8.endIndex, 1),
    Qe(_0x1345ab.textRuns, _0x4fdec4, _0x1067b8.endIndex, 1),
    R(_0x1345ab.tables, _0x4fdec4, _0x1067b8.endIndex, 1),
    R(_0x1345ab.customRanges, _0x4fdec4, _0x1067b8.endIndex, 1),
    R(_0x1345ab.customDecorations, _0x4fdec4, _0x1067b8.endIndex, 1),
    (_0x2dcc13 = _0x1345ab.blockRanges) == null ||
      _0x2dcc13.forEach((_0x33a61b) => {
        _0x33a61b === _0x1067b8 || _0x33a61b.blockId === _0x1067b8.blockId
          ? (_0x33a61b.endIndex = _0x4fdec4)
          : _0x33a61b.startIndex >= _0x4fdec4 &&
            _0x33a61b.startIndex < _0x1067b8.endIndex &&
            ((_0x33a61b.startIndex += 1), (_0x33a61b.endIndex += 1));
      }));
  let _0x55a1d8 = C(_0x1345ab, { ..._0x1067b8, endIndex: _0x4fdec4 });
  _0x55a1d8.forEach((_0x43d8d6, _0x40bbf8) => {
    _0x43d8d6.paragraphStyle = {
      ...(_0x43d8d6.paragraphStyle ?? {}),
      ...b(_0x40bbf8 === 0, _0x40bbf8 === _0x55a1d8.length - 1),
    };
  });
  let _0x5397ef =
    (_0x5c7f86 = _0x1345ab.paragraphs) == null
      ? undefined
      : _0x5c7f86.find((_0x449075) => _0x449075.startIndex === _0x4fdec4 + 1);
  return (
    _0x5397ef && (_0x5397ef.paragraphStyle = S(_0x5397ef.paragraphStyle)),
    { nextDocumentData: _0x2591fa, cursorOffset: _0x4fdec4 + 1 }
  );
}
function De(_0x529f83) {
  let _0x1017e0 = E(_0x529f83.documentData),
    _0x3a4fc2 = y(_0x1017e0, _0x529f83.cursorOffset);
  if (!_0x3a4fc2) return null;
  let _0x847b9e = C(_0x1017e0, _0x3a4fc2),
    _0x40d087 = _0x847b9e[_0x847b9e.length - 1];
  if (
    !_0x40d087 ||
    !Ne(_0x1017e0, _0x3a4fc2, _0x40d087) ||
    _0x529f83.cursorOffset < _0x40d087.startIndex
  )
    return null;
  let _0x16d387 = O(_0x1017e0, _0x3a4fc2, _0x40d087),
    _0x35f8e9 = _0x324326(_0x3a4fc2);
  if (_0x16d387 >= _0x35f8e9.endOffset - 1) return null;
  let _0x4906cb = _0x208e5a(
      _0x1017e0,
      _0x35f8e9.startOffset,
      _0x35f8e9.endOffset,
      false,
    ),
    _0x36061f = Ee({
      documentData: { ..._0x529f83.documentData, body: _0x4906cb },
      cursorOffset: _0x529f83.cursorOffset - _0x35f8e9.startOffset,
    });
  if (!(_0x36061f != null && _0x36061f.nextDocumentData["body"])) return null;
  let _0x26b3f9 = _0x35f8e9.endOffset - _0x35f8e9.startOffset;
  _0x36061f.nextDocumentData["body"][_0x2ad853] = true;
  let _0x2652a1 = new _0x3045dc();
  return (
    _0x2652a1.retain(_0x35f8e9.startOffset),
    _0x2652a1.insert(_0x26b3f9, _0x36061f.nextDocumentData["body"]),
    _0x2652a1.delete(_0x26b3f9),
    {
      actions: _0x44986f.getInstance().editOp(_0x2652a1.serialize(), ["body"]),
      cursorOffset: _0x35f8e9.startOffset + _0x36061f.cursorOffset,
    }
  );
}
function Oe(_0x2b645b) {
  var _0x1783f4, _0x3767fd;
  let _0x5e6b4f = w(_0x2b645b.documentData),
    _0x1cb22c = E(_0x5e6b4f),
    _0x23b4be =
      (_0x1783f4 = _0x1cb22c.blockRanges) == null
        ? undefined
        : _0x1783f4.find(
            (_0x2672c0) =>
              _0x2672c0.blockId === _0x2b645b.blockId &&
              _0x2672c0.blockType === _0xf17462.QUOTE,
          );
  if (!_0x23b4be) return null;
  let _0x140a02 = k(_0x23b4be);
  return (
    (_0x1cb22c.paragraphs ?? [])
      .filter(
        (_0x5dc187) =>
          _0x5dc187.startIndex > _0x23b4be.startIndex &&
          _0x5dc187.startIndex < _0x140a02,
      )
      .forEach((_0x2084de) => {
        _0x2084de.paragraphStyle = S(_0x2084de.paragraphStyle);
      }),
    M(_0x1cb22c, _0x140a02, _0x140a02 + 1),
    M(_0x1cb22c, _0x23b4be.startIndex, _0x23b4be.startIndex + 1),
    (_0x1cb22c.blockRanges =
      (_0x3767fd = _0x1cb22c.blockRanges) == null
        ? undefined
        : _0x3767fd.filter(
            (_0x5a40ab) => _0x5a40ab.blockId !== _0x2b645b.blockId,
          )),
    { nextDocumentData: _0x5e6b4f, cursorOffset: _0x23b4be.startIndex }
  );
}
function ke(_0x5c5b00) {
  var _0x20b05d, _0x335502;
  let _0x4718b2 = w(_0x5c5b00.documentData),
    _0x674885 = E(_0x4718b2),
    _0x51b709 =
      (_0x20b05d = _0x674885.blockRanges) == null
        ? undefined
        : _0x20b05d.find(
            (_0x45b075) =>
              _0x45b075.blockId === _0x5c5b00.blockId &&
              _0x45b075.blockType === _0xf17462.QUOTE,
          );
  if (!_0x51b709) return null;
  let _0x455854 = _0x324326(_0x51b709);
  return (
    M(_0x674885, _0x455854.startOffset, _0x455854.endOffset),
    (_0x674885.blockRanges =
      (_0x335502 = _0x674885.blockRanges) == null
        ? undefined
        : _0x335502.filter(
            (_0x2f07cf) => _0x2f07cf.blockId !== _0x5c5b00.blockId,
          )),
    { nextDocumentData: _0x4718b2, cursorOffset: _0x51b709.startIndex }
  );
}
function Ae(_0x1905cc) {
  let _0x18ada9 = w(_0x1905cc.documentData),
    _0x29e12d = E(_0x18ada9),
    _0x469a21 = y(_0x29e12d, _0x1905cc.cursorOffset);
  return (
    (_0x469a21 &&
      (je(
        _0x18ada9,
        _0x29e12d,
        _0x469a21,
        _0x1905cc.cursorOffset,
        _0x1905cc.paragraphStartIndex,
      ) ||
        Me(_0x18ada9, _0x29e12d, _0x469a21, _0x1905cc.cursorOffset))) ||
    null
  );
}
function je(_0x419d6c, _0x234179, _0x34c67e, _0x5b2e94, _0x3ea0fe) {
  let _0x1e46f2 = Ke(_0x234179, _0x34c67e, _0x5b2e94, _0x3ea0fe);
  if (!_0x1e46f2) return null;
  let _0xc409aa = _0x1e46f2.endTokenOffset - 1;
  return (
    M(
      _0x234179,
      _0x1e46f2.paragraph["startIndex"],
      _0x1e46f2.paragraph["startIndex"] + 1,
    ),
    { nextDocumentData: _0x419d6c, cursorOffset: _0xc409aa }
  );
}
function Me(_0x151771, _0x17369e, _0xe4b750, _0x3ba9de) {
  if (_0x3ba9de !== _0xe4b750.startIndex + 1) return null;
  let _0x287ed3 = C(_0x17369e, _0xe4b750),
    _0x1bb424 = _0x287ed3[0];
  return !_0x1bb424 || O(_0x17369e, _0xe4b750, _0x1bb424) !== _0x3ba9de
    ? null
    : _0x287ed3.length === 1
      ? Pe(_0x151771, _0x17369e, _0xe4b750, _0x1bb424)
      : Fe(_0x151771, _0x17369e, _0xe4b750, _0x1bb424);
}
function y(_0x2e8955, _0x2f6aaf) {
  var _0x41a781;
  return (_0x41a781 = _0x2e8955.blockRanges) == null
    ? undefined
    : _0x41a781.find((_0x850e9a) => {
        let _0x2626da = k(_0x850e9a);
        return (
          _0x850e9a.blockType === _0xf17462.QUOTE &&
          _0x850e9a.startIndex <= _0x2f6aaf &&
          _0x2f6aaf <= _0x2626da + 2
        );
      });
}
function b(_0x267c8c, _0x1de9c6, _0x28d35d = false) {
  return {
    indentStart: { v: 22 },
    keepLines: _0x4f95c8.TRUE,
    keepNext: _0x1de9c6 ? _0x4f95c8.FALSE : _0x4f95c8.TRUE,
    widowControl: _0x4f95c8.TRUE,
    ...(_0x267c8c && _0x28d35d ? { spaceAbove: { v: 8 } } : {}),
  };
}
function x(_0x15e70c, _0x10e12b, _0x59b825, _0x710b13 = false) {
  let _0x4567d5 = (_0x15e70c.paragraphs ?? []).filter(
    (_0x169005) =>
      _0x169005.startIndex > _0x10e12b && _0x169005.startIndex < _0x59b825,
  );
  _0x4567d5.forEach((_0x3610ad, _0x43ff53) => {
    _0x3610ad.paragraphStyle = {
      ...(_0x3610ad.paragraphStyle ?? {}),
      ...b(_0x43ff53 === 0, _0x43ff53 === _0x4567d5.length - 1, _0x710b13),
    };
  });
}
function S(_0x40e88e) {
  let _0x4a6364 = { ...(_0x40e88e ?? {}) };
  return (
    delete _0x4a6364.borderLeft,
    delete _0x4a6364.indentStart,
    delete _0x4a6364.spaceAbove,
    delete _0x4a6364.spaceBelow,
    delete _0x4a6364.keepLines,
    delete _0x4a6364.keepNext,
    delete _0x4a6364.widowControl,
    _0x4a6364
  );
}
function C(_0x2f6d8d, _0x28c517) {
  let _0x2cc229 = k(_0x28c517);
  return (_0x2f6d8d.paragraphs ?? []).filter(
    (_0x3416a7) =>
      _0x3416a7.startIndex > _0x28c517.startIndex &&
      _0x3416a7.startIndex < _0x2cc229,
  );
}
function Ne(_0x21c10e, _0x1095b5, _0xa98972) {
  let _0x4becfd = O(_0x21c10e, _0x1095b5, _0xa98972),
    _0x348d0b = _0x21c10e.dataStream["slice"](_0x4becfd, _0xa98972.startIndex);
  return Array.from(_0x348d0b).every(
    (_0x1fac82) =>
      _0x1fac82 === _0x37518c.BLOCK_START || _0x1fac82 === _0x37518c.BLOCK_END,
  );
}
function Pe(_0xe5e0b4, _0x2b4b95, _0x43e8fc, _0x5368e3) {
  var _0x3264a7, _0x5c92e5;
  let _0xc556d7 = _0x43e8fc.startIndex,
    _0x262557 = k(_0x43e8fc);
  (M(_0x2b4b95, _0x262557, _0x262557 + 1),
    M(_0x2b4b95, _0x43e8fc.startIndex, _0x43e8fc.startIndex + 1),
    (_0x2b4b95.blockRanges =
      (_0x3264a7 = _0x2b4b95.blockRanges) == null
        ? undefined
        : _0x3264a7.filter(
            (_0x4260a6) => _0x4260a6.blockId !== _0x43e8fc.blockId,
          )));
  let _0x3e2ba2 =
    (_0x5c92e5 = _0x2b4b95.paragraphs) == null
      ? undefined
      : _0x5c92e5.find(
          (_0x471703) => _0x471703.startIndex === _0x5368e3.startIndex - 1,
        );
  return (
    _0x3e2ba2 && (_0x3e2ba2.paragraphStyle = S(_0x3e2ba2.paragraphStyle)),
    { nextDocumentData: _0xe5e0b4, cursorOffset: _0xc556d7 }
  );
}
function Fe(_0x15772e, _0x1c8ab4, _0x507854, _0x3bf193) {
  var _0x2b3c7c, _0x58434d;
  let _0x537b1b = _0x3bf193.startIndex,
    _0x4747b4 = _0x507854.startIndex;
  (j(_0x1c8ab4, _0x3bf193.startIndex + 1, _0x37518c.BLOCK_START),
    M(_0x1c8ab4, _0x507854.startIndex, _0x507854.startIndex + 1));
  let _0x220540 =
      (_0x2b3c7c = _0x1c8ab4.paragraphs) == null
        ? undefined
        : _0x2b3c7c.find((_0x290f27) => _0x290f27.startIndex === _0x537b1b - 1),
    _0x54984f =
      (_0x58434d = _0x1c8ab4.blockRanges) == null
        ? undefined
        : _0x58434d.find(
            (_0x2d6288) => _0x2d6288.blockId === _0x507854.blockId,
          );
  return (
    _0x220540 &&
      ((_0x220540.paragraphStyle = S(_0x220540.paragraphStyle)),
      _0x54984f && (_0x54984f.startIndex = _0x220540.startIndex + 1)),
    _0x54984f && x(_0x1c8ab4, _0x54984f.startIndex, _0x54984f.endIndex),
    { nextDocumentData: _0x15772e, cursorOffset: _0x4747b4 }
  );
}
function w(_0x16d6e3) {
  return {
    ..._0x16d6e3,
    body: _0x16d6e3.body ? Ie(_0x16d6e3.body) : _0x16d6e3.body,
  };
}
function Ie(_0x23bc71) {
  var _0x4b3a8f,
    _0x4faca5,
    _0x1feed2,
    _0x114207,
    _0x126f86,
    _0x26f933,
    _0x4f826c,
    _0x4be66a,
    _0x11a0b8;
  return {
    ..._0x23bc71,
    paragraphs:
      (_0x4b3a8f = _0x23bc71.paragraphs) == null
        ? undefined
        : _0x4b3a8f.map((_0x29edea) => ({
            ..._0x29edea,
            bullet: T(_0x29edea.bullet),
            paragraphStyle: T(_0x29edea.paragraphStyle),
          })),
    sectionBreaks:
      (_0x4faca5 = _0x23bc71.sectionBreaks) == null
        ? undefined
        : _0x4faca5.map((_0x32b582) => ({ ..._0x32b582 })),
    textRuns:
      (_0x1feed2 = _0x23bc71.textRuns) == null
        ? undefined
        : _0x1feed2.map((_0x522451) => ({ ..._0x522451 })),
    tables:
      (_0x114207 = _0x23bc71.tables) == null
        ? undefined
        : _0x114207.map((_0x1013d1) => ({ ..._0x1013d1 })),
    columnGroups:
      (_0x126f86 = _0x23bc71.columnGroups) == null
        ? undefined
        : _0x126f86.map((_0x5bf139) => {
            var _0x207c30;
            return {
              ..._0x5bf139,
              columns:
                (_0x207c30 = _0x5bf139.columns) == null
                  ? undefined
                  : _0x207c30.map((_0x46a575) => T(_0x46a575)),
            };
          }),
    blockRanges:
      (_0x26f933 = _0x23bc71.blockRanges) == null
        ? undefined
        : _0x26f933.map((_0x3f6bb5) => ({ ..._0x3f6bb5 })),
    customRanges:
      (_0x4f826c = _0x23bc71.customRanges) == null
        ? undefined
        : _0x4f826c.map((_0x564e04) => ({ ..._0x564e04 })),
    customDecorations:
      (_0x4be66a = _0x23bc71.customDecorations) == null
        ? undefined
        : _0x4be66a.map((_0x1ca5c4) => ({ ..._0x1ca5c4 })),
    customBlocks:
      (_0x11a0b8 = _0x23bc71.customBlocks) == null
        ? undefined
        : _0x11a0b8.map((_0x257344) => ({ ..._0x257344 })),
  };
}
function T(_0x21fc5b) {
  return Array.isArray(_0x21fc5b)
    ? _0x21fc5b.map((_0x1d30c2) => T(_0x1d30c2))
    : !_0x21fc5b || typeof _0x21fc5b != "object"
      ? _0x21fc5b
      : Object.fromEntries(
          Object.entries(_0x21fc5b).map(([_0x319452, _0x3b21c8]) => [
            _0x319452,
            T(_0x3b21c8),
          ]),
        );
}
function E(_0x2f8623) {
  if (!_0x2f8623.body) throw Error("Document\x20body\x20is\x20required");
  return _0x2f8623.body;
}
function Le(_0x31ad56, _0x59a9c0, _0x291452, _0x5c0893 = "convert-paragraph") {
  if (_0x59a9c0 == null || _0x291452 == null) {
    let _0x27edc4 = ze(_0x31ad56);
    return { startOffset: _0x27edc4, endOffset: _0x27edc4 };
  }
  let _0x59926b = Math.min(_0x59a9c0, _0x291452),
    _0x4e1996 = Math.max(_0x59a9c0, _0x291452),
    _0x2bab62 = We(_0x31ad56, _0x59926b, _0x4e1996);
  return _0x59926b === _0x4e1996
    ? _0x5c0893 === "insert-new"
      ? { startOffset: _0x59926b, endOffset: _0x4e1996 }
      : Re(_0x31ad56, _0x59926b, _0x2bab62)
    : Ve(_0x31ad56, _0x59926b, _0x4e1996, _0x2bab62);
}
function Re(_0x5b2027, _0x6d8d08, _0x59faff) {
  let _0x427b48 = He(_0x5b2027, _0x6d8d08);
  if (_0x427b48) {
    let _0x20f821 = D(_0x5b2027, _0x427b48, _0x59faff);
    if (_0x20f821 < _0x427b48.startIndex)
      return {
        startOffset: _0x20f821,
        endOffset: _0x59faff
          ? Math.min(_0x427b48.startIndex + 1, _0x59faff.endOffset)
          : _0x427b48.startIndex + 1,
      };
  }
  let _0x4322cc =
    _0x6d8d08 === 0 && _0x5b2027.dataStream[0] === _0x37518c.PARAGRAPH
      ? 1
      : _0x6d8d08;
  return { startOffset: _0x4322cc, endOffset: _0x4322cc };
}
function ze(_0x39d4b8) {
  return _0x39d4b8.dataStream["endsWith"](_0x37518c.SECTION_BREAK)
    ? Math.max(0, _0x39d4b8.dataStream["length"] - 1)
    : _0x39d4b8.dataStream["length"];
}
function Be(_0x3c2043, _0x50acb1, _0x5b0e85) {
  var _0x586551;
  let _0x262b4d = Math.min(_0x50acb1, _0x5b0e85),
    _0x19ae5b = Math.max(_0x50acb1, _0x5b0e85);
  return !!(
    (_0x586551 = _0x3c2043.tables) != null &&
    _0x586551.some(
      (_0x431b7d) =>
        (_0x262b4d > _0x431b7d.startIndex && _0x262b4d < _0x431b7d.endIndex) ||
        (_0x19ae5b > _0x431b7d.startIndex && _0x19ae5b < _0x431b7d.endIndex) ||
        (_0x262b4d <= _0x431b7d.startIndex && _0x19ae5b >= _0x431b7d.endIndex),
    )
  );
}
function Ve(_0x5bf7af, _0x43be8a, _0x1306c0, _0x3bc2d1) {
  let _0xe701a2 = [...(_0x5bf7af.paragraphs ?? [])].sort(
      (_0x4edc35, _0x12ea87) => _0x4edc35.startIndex - _0x12ea87.startIndex,
    ),
    _0x4c13ae = _0x1be63e(_0x5bf7af),
    _0x4b7830 = _0xe701a2.find(
      (_0x47ac71) =>
        D(_0x5bf7af, _0x47ac71, _0x3bc2d1, _0x4c13ae) <= _0x43be8a &&
        _0x43be8a <= _0x47ac71.startIndex,
    ),
    _0x1b1477 =
      _0xe701a2.find((_0x5b9afd) => _0x5b9afd.startIndex >= _0x1306c0 - 1) ??
      _0xe701a2[_0xe701a2.length - 1];
  return {
    startOffset: _0x4b7830
      ? D(_0x5bf7af, _0x4b7830, _0x3bc2d1, _0x4c13ae)
      : _0x43be8a,
    endOffset: _0x1b1477 ? Ue(_0x1b1477, _0x3bc2d1) : _0x1306c0,
  };
}
function He(_0x255a9a, _0x2c0f6d) {
  let _0x38aa6e = [...(_0x255a9a.paragraphs ?? [])].sort(
      (_0x1edf45, _0x18f8be) => _0x1edf45.startIndex - _0x18f8be.startIndex,
    ),
    _0x55cc07 = _0x1be63e(_0x255a9a);
  return _0x38aa6e.find(
    (_0x187d7d) =>
      (_0x55cc07.get(_0x187d7d.startIndex) ?? 0) <= _0x2c0f6d &&
      _0x2c0f6d <= _0x187d7d.startIndex,
  );
}
function D(_0x3b91f2, _0x2d2907, _0x5e84a4, _0x195183) {
  let _0xc75c79 =
    (_0x195183 == null ? undefined : _0x195183.get(_0x2d2907.startIndex)) ??
    _0x50ecd4(_0x3b91f2, _0x2d2907);
  return _0x5e84a4 ? Math.max(_0xc75c79, _0x5e84a4.startOffset) : _0xc75c79;
}
function Ue(_0x1a6299, _0x25b9ba) {
  let _0x24c3d2 = _0x1a6299.startIndex + 1;
  return _0x25b9ba ? Math.min(_0x24c3d2, _0x25b9ba.endOffset) : _0x24c3d2;
}
function We(_0x3e9f2b, _0xd9bd4b, _0x2abb98) {
  let _0x3db9ca = Ge(_0x3e9f2b, _0xd9bd4b),
    _0x560d8e = Ge(
      _0x3e9f2b,
      _0xd9bd4b === _0x2abb98 ? _0x2abb98 : Math.max(_0xd9bd4b, _0x2abb98 - 1),
    );
  if (!(!_0x3db9ca && !_0x560d8e)) {
    if (
      !_0x3db9ca ||
      !_0x560d8e ||
      _0x3db9ca.startTokenOffset !== _0x560d8e.startTokenOffset ||
      _0x3db9ca.endTokenOffset !== _0x560d8e.endTokenOffset
    )
      throw new v();
    return _0x3db9ca;
  }
}
function Ge(_0x1cdd6f, _0x56d455) {
  let _0xa6f6e5 = _0x1cdd6f.dataStream,
    _0x578ace = -1;
  for (
    let _0x22694d = Math.min(_0x56d455, _0xa6f6e5.length - 1);
    _0x22694d >= 0;
    _0x22694d--
  ) {
    let _0x32d0a8 = _0xa6f6e5[_0x22694d];
    if (_0x32d0a8 === _0x37518c.TABLE_CELL_END) return;
    if (_0x32d0a8 === _0x37518c.TABLE_CELL_START) {
      _0x578ace = _0x22694d;
      break;
    }
  }
  if (_0x578ace < 0) return;
  let _0x1b7001 = _0xa6f6e5.indexOf(_0x37518c.TABLE_CELL_END, _0x578ace + 1);
  if (!(
    _0x1b7001 < 0 ||
    _0x56d455 < _0x578ace + 1 ||
    _0x56d455 > _0x1b7001 - 1
  ))
    return {
      startOffset: _0x578ace + 1,
      endOffset: Math.max(_0x578ace + 1, _0x1b7001 - 1),
      startTokenOffset: _0x578ace,
      endTokenOffset: _0x1b7001,
    };
}
function O(_0x5ec740, _0x3f6145, _0x5d9adf) {
  return Math.max(_0x50ecd4(_0x5ec740, _0x5d9adf), _0x3f6145.startIndex + 1);
}
function k(_0xf2b7e7) {
  return _0x324326(_0xf2b7e7).endOffset - 1;
}
function Ke(_0x3cbc77, _0x329ef3, _0x458313, _0x135f1a) {
  let _0x248355 = k(_0x329ef3),
    _0x45fb2b = (_0x3cbc77.paragraphs ?? []).find(
      (_0x378ab7) => _0x378ab7.startIndex === _0x248355 + 1,
    );
  if (
    !_0x45fb2b ||
    (_0x135f1a != null && _0x45fb2b.startIndex !== _0x135f1a) ||
    _0x458313 < _0x248355 ||
    _0x458313 > _0x45fb2b.startIndex + 1 ||
    _0x3cbc77.dataStream[_0x45fb2b.startIndex] !== _0x37518c.PARAGRAPH
  )
    return null;
  let _0x34e249 = _0x50ecd4(_0x3cbc77, _0x45fb2b),
    _0x1612d7 = _0x3cbc77.dataStream["slice"](_0x34e249, _0x45fb2b.startIndex);
  return Array.from(_0x1612d7).every(
    (_0x1dd5f6) => _0x1dd5f6 === _0x37518c.BLOCK_END,
  )
    ? { paragraph: _0x45fb2b, endTokenOffset: _0x248355 }
    : null;
}
function A(_0x1b7e09, _0x1477d1) {
  var _0x1a7fad;
  let _0x14a8a9 = k(_0x1477d1),
    _0x48cf02 = _0x1b7e09.dataStream[_0x14a8a9 + 1];
  (_0x48cf02 === _0x37518c.SECTION_BREAK || _0x48cf02 === undefined) &&
    j(_0x1b7e09, _0x14a8a9 + 1, _0x37518c.PARAGRAPH, {
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: _0xc98216(
            new Set(
              (_0x1a7fad = _0x1b7e09.paragraphs) == null
                ? undefined
                : _0x1a7fad.map((_0x4a5476) => _0x4a5476.paragraphId),
            ),
          ),
        },
      ],
    });
}
function j(_0x4744e6, _0x268e0b, _0x5326cd, _0x31e4ab = {}) {
  var _0x8ab9ea, _0x1b6878;
  _0x5326cd &&
    ((_0x4744e6.dataStream =
      "" +
      _0x4744e6.dataStream["slice"](0, _0x268e0b) +
      _0x5326cd +
      _0x4744e6.dataStream["slice"](_0x268e0b)),
    qe(_0x4744e6, _0x268e0b, _0x5326cd.length),
    (_0x8ab9ea = _0x31e4ab.paragraphs) != null &&
      _0x8ab9ea.length &&
      (_0x4744e6.paragraphs = [
        ...(_0x4744e6.paragraphs ?? []),
        ..._0x31e4ab.paragraphs["map"]((_0x3f3af9) => ({
          ..._0x3f3af9,
          startIndex: _0x3f3af9.startIndex + _0x268e0b,
        })),
      ].sort(
        (_0x11e4b3, _0x85de8d) => _0x11e4b3.startIndex - _0x85de8d.startIndex,
      )),
    (_0x1b6878 = _0x31e4ab.blockRanges) != null &&
      _0x1b6878.length &&
      (_0x4744e6.blockRanges = [
        ...(_0x4744e6.blockRanges ?? []),
        ..._0x31e4ab.blockRanges["map"]((_0xd49472) => ({
          ..._0xd49472,
          startIndex: _0xd49472.startIndex + _0x268e0b,
          endIndex: _0xd49472.endIndex + _0x268e0b,
        })),
      ].sort(
        (_0x4351c2, _0x77a05) => _0x4351c2.startIndex - _0x77a05.startIndex,
      )));
}
function M(_0x326c67, _0x507372, _0x2a1a34) {
  let _0x1ae6b0 = _0x2a1a34 - _0x507372;
  ((_0x326c67.dataStream =
    "" +
    _0x326c67.dataStream["slice"](0, _0x507372) +
    _0x326c67.dataStream["slice"](_0x2a1a34)),
    Je(_0x326c67, _0x507372, _0x1ae6b0));
}
function qe(_0x721a82, _0x16f5fa, _0x34dc1a) {
  ((_0x721a82.paragraphs = N(_0x721a82.paragraphs, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.sectionBreaks = N(
      _0x721a82.sectionBreaks,
      _0x16f5fa,
      _0x34dc1a,
    )),
    (_0x721a82.customBlocks = N(_0x721a82.customBlocks, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.textRuns = Ye(_0x721a82.textRuns, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.tables = Xe(_0x721a82.tables, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.columnGroups = F(_0x721a82.columnGroups, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.customRanges = F(_0x721a82.customRanges, _0x16f5fa, _0x34dc1a)),
    (_0x721a82.customDecorations = F(
      _0x721a82.customDecorations,
      _0x16f5fa,
      _0x34dc1a,
    )),
    (_0x721a82.blockRanges = F(_0x721a82.blockRanges, _0x16f5fa, _0x34dc1a)));
}
function Je(_0x34e88c, _0xe82564, _0x33551f) {
  var _0x49ff9b, _0x2afa74;
  ((_0x34e88c.paragraphs = P(_0x34e88c.paragraphs, _0xe82564, _0x33551f)),
    (_0x34e88c.sectionBreaks = P(
      _0x34e88c.sectionBreaks,
      _0xe82564,
      _0x33551f,
    )),
    (_0x34e88c.customBlocks = P(_0x34e88c.customBlocks, _0xe82564, _0x33551f)),
    (_0x34e88c.textRuns =
      (_0x49ff9b = Ze(
        (_0x2afa74 = _0x34e88c.textRuns) == null
          ? undefined
          : _0x2afa74.map((_0x50d05b) => ({
              ..._0x50d05b,
              startIndex: _0x50d05b.st,
              endIndex: _0x50d05b.ed,
            })),
        _0xe82564,
        _0x33551f,
      )) == null
        ? undefined
        : _0x49ff9b.map((_0x10d1f0) => {
            let {
              startIndex: _0x328235,
              endIndex: _0x1e0838,
              ..._0x6348bb
            } = _0x10d1f0;
            return { ..._0x6348bb, st: _0x328235, ed: _0x1e0838 };
          })),
    (_0x34e88c.tables = Ze(_0x34e88c.tables, _0xe82564, _0x33551f)),
    (_0x34e88c.columnGroups = I(_0x34e88c.columnGroups, _0xe82564, _0x33551f)),
    (_0x34e88c.customRanges = I(_0x34e88c.customRanges, _0xe82564, _0x33551f)),
    (_0x34e88c.customDecorations = I(
      _0x34e88c.customDecorations,
      _0xe82564,
      _0x33551f,
    )),
    (_0x34e88c.blockRanges = I(_0x34e88c.blockRanges, _0xe82564, _0x33551f)));
}
function N(_0x3a9f7d, _0xa9e2d0, _0x436385) {
  return _0x3a9f7d == null
    ? undefined
    : _0x3a9f7d.map((_0x3760e5) =>
        _0x3760e5.startIndex >= _0xa9e2d0
          ? { ..._0x3760e5, startIndex: _0x3760e5.startIndex + _0x436385 }
          : _0x3760e5,
      );
}
function P(_0xf7708f, _0x42bc22, _0x3ac299) {
  let _0x277cd7 = _0x42bc22 + _0x3ac299;
  return _0xf7708f == null
    ? undefined
    : _0xf7708f
        .map((_0x55f514) =>
          _0x55f514.startIndex >= _0x42bc22 && _0x55f514.startIndex < _0x277cd7
            ? null
            : _0x55f514.startIndex >= _0x277cd7
              ? { ..._0x55f514, startIndex: _0x55f514.startIndex - _0x3ac299 }
              : _0x55f514,
        )
        .filter((_0x50bf87) => _0x50bf87 != null);
}
function Ye(_0x226858, _0x42b379, _0xe25a7b) {
  return _0x226858 == null
    ? undefined
    : _0x226858.map((_0x47b702) =>
        _0x47b702.st >= _0x42b379
          ? {
              ..._0x47b702,
              st: _0x47b702.st + _0xe25a7b,
              ed: _0x47b702.ed + _0xe25a7b,
            }
          : _0x47b702.ed > _0x42b379
            ? { ..._0x47b702, ed: _0x47b702.ed + _0xe25a7b }
            : _0x47b702,
      );
}
function F(_0x5c3fed, _0xde002a, _0x207c4f) {
  return _0x5c3fed == null
    ? undefined
    : _0x5c3fed.map((_0x22ec7e) => _0x1598b9(_0x22ec7e, _0xde002a, _0x207c4f));
}
function Xe(_0x49f0fd, _0x59c990, _0x5abd0b) {
  return _0x49f0fd == null
    ? undefined
    : _0x49f0fd.map((_0x24ffaa) => _0x15463a(_0x24ffaa, _0x59c990, _0x5abd0b));
}
function I(_0x4b5a6b, _0x410bb9, _0x537cfa) {
  return _0x4b5a6b == null
    ? undefined
    : _0x4b5a6b
        .map((_0x26e5bc) => _0x1417a7(_0x26e5bc, _0x410bb9, _0x537cfa))
        .filter((_0x25a04a) => _0x25a04a != null);
}
function Ze(_0x5e7fb0, _0x5835a1, _0x596d13) {
  return _0x5e7fb0 == null
    ? undefined
    : _0x5e7fb0
        .map((_0x245c7c) => _0x48a823(_0x245c7c, _0x5835a1, _0x596d13))
        .filter((_0x2caea7) => _0x2caea7 != null);
}
function L(_0x46c47a, _0x8ebb56, _0x137ffe, _0x201870) {
  _0x46c47a == null ||
    _0x46c47a.forEach((_0x275692) => {
      _0x275692.startIndex >= _0x8ebb56 &&
        _0x275692.startIndex < _0x137ffe &&
        (_0x275692.startIndex += _0x201870);
    });
}
function Qe(_0x4157b5, _0xc60ac3, _0x372746, _0x3b3f7f) {
  _0x4157b5 == null ||
    _0x4157b5.forEach((_0x1368cb) => {
      _0x1368cb.st >= _0xc60ac3 && _0x1368cb.st < _0x372746
        ? ((_0x1368cb.st += _0x3b3f7f), (_0x1368cb.ed += _0x3b3f7f))
        : _0x1368cb.ed > _0xc60ac3 &&
          _0x1368cb.ed < _0x372746 &&
          (_0x1368cb.ed += _0x3b3f7f);
    });
}
function R(_0x30f244, _0x128f7f, _0x22b2cb, _0x1efa2c) {
  _0x30f244 == null ||
    _0x30f244.forEach((_0x25e9e5) => {
      _0x25e9e5.startIndex >= _0x128f7f && _0x25e9e5.startIndex < _0x22b2cb
        ? ((_0x25e9e5.startIndex += _0x1efa2c),
          (_0x25e9e5.endIndex += _0x1efa2c))
        : _0x25e9e5.endIndex > _0x128f7f &&
          _0x25e9e5.endIndex < _0x22b2cb &&
          (_0x25e9e5.endIndex += _0x1efa2c);
    });
}
const $e = "DOCS_QUOTE_PLUGIN",
  et = "gray.300",
  tt = 2,
  nt = {
    id: "docs-quote.command.insert-below",
    type: _0x334246.COMMAND,
    handler: (_0x3b4761) => {
      var _0x449bae;
      if (_0xdbf19(K(_0x3b4761))) return false;
      let _0xc5cb63 = _0x43b97f(_0x3b4761);
      if (_0xc5cb63)
        return _0x3b4761
          .get(_0x1ed0e3)
          .syncExecuteCommand(z.id, {
            startOffset: _0xc5cb63.startOffset,
            endOffset: _0xc5cb63.endOffset,
            insertionMode: "insert-new",
            unitId: _0xc5cb63.unitId,
          });
      let _0xab3966 = ot(_0x3b4761);
      if (!_0xab3966) return false;
      let _0x45f16c =
          (_0x449bae = _0x3b4761
            .get(_0x5253e8)
            .getCurrentUnitOfType(_0x47f859.UNIVER_DOC)) == null
            ? undefined
            : _0x449bae.getBody(),
        _0x668418 = _0x45f16c
          ? _0x4996c2(_0x45f16c, _0xab3966)
          : _0xab3966.startIndex + 1;
      return _0x3b4761
        .get(_0x1ed0e3)
        .syncExecuteCommand(z.id, {
          startOffset: _0x668418,
          endOffset: _0x668418,
        });
    },
  },
  z = {
    id: "docs-quote.command.insert",
    type: _0x334246.COMMAND,
    handler: (_0x1e31e9, _0x4b98af) => {
      let _0x5de7d0 = G(
        _0x1e31e9,
        _0x4b98af == null ? undefined : _0x4b98af.unitId,
      );
      if (!_0x5de7d0) return false;
      let _0x201d6b = K(_0x1e31e9);
      if (_0xdbf19(_0x201d6b)) return false;
      let _0x575a39 = rt(_0x4b98af, _0x201d6b),
        _0x220666 = it(_0x5de7d0.previousDocumentData, _0x575a39);
      if (_0x220666) {
        if (_0x220666.blockType !== _0xf17462.QUOTE) return false;
        let _0x73d28b = Oe({
          blockId: _0x220666.blockId,
          documentData: _0x5de7d0.previousDocumentData,
        });
        return _0x73d28b
          ? Y(
              _0x5de7d0.commandService,
              _0x5de7d0.unitId,
              _0x5de7d0.previousDocumentData,
              _0x73d28b.nextDocumentData,
              z.id,
              _0x73d28b.cursorOffset,
            )
          : false;
      }
      let _0x269669;
      try {
        _0x269669 = Se({
          blockId:
            (_0x4b98af == null ? undefined : _0x4b98af.blockId) ?? _0x24beaf(6),
          documentData: _0x5de7d0.previousDocumentData,
          endOffset: _0x575a39 == null ? undefined : _0x575a39.endOffset,
          insertionMode:
            _0x4b98af == null ? undefined : _0x4b98af.insertionMode,
          startOffset: _0x575a39 == null ? undefined : _0x575a39.startOffset,
        });
      } catch (_0x396aab) {
        if (_0x396aab instanceof v) return false;
        throw _0x396aab;
      }
      return Y(
        _0x5de7d0.commandService,
        _0x5de7d0.unitId,
        _0x5de7d0.previousDocumentData,
        _0x269669.nextDocumentData,
        z.id,
        _0x269669.cursorOffset,
      );
    },
  },
  B = {
    id: "docs-quote.command.exit",
    type: _0x334246.COMMAND,
    handler: (_0xd88202, _0x2df2f4) => {
      var _0x5e1297;
      let _0x265d7c = G(
        _0xd88202,
        _0x2df2f4 == null ? undefined : _0x2df2f4.unitId,
      );
      if (!_0x265d7c) return false;
      let _0x513cfb =
        (_0x2df2f4 == null ? undefined : _0x2df2f4.cursorOffset) ??
        ((_0x5e1297 = K(_0xd88202)) == null
          ? undefined
          : _0x5e1297.startOffset);
      if (_0x513cfb == null) return false;
      let _0x5b0e6a = De({
        cursorOffset: _0x513cfb,
        documentData: _0x265d7c.previousDocumentData,
      });
      return _0x5b0e6a
        ? ht(
            _0x265d7c.commandService,
            _0x265d7c.unitId,
            _0x5b0e6a.actions,
            B.id,
            _0x5b0e6a.cursorOffset,
          )
        : false;
    },
  },
  V = {
    id: "docs-quote.command.unwrap",
    type: _0x334246.COMMAND,
    handler: (_0x561de1, _0x5aac42) => {
      if (!_0x5aac42) return false;
      let _0x4fb474 = G(_0x561de1, _0x5aac42.unitId);
      if (!_0x4fb474) return false;
      let _0x9bc06 = Oe({
        blockId: _0x5aac42.blockId,
        documentData: _0x4fb474.previousDocumentData,
      });
      return _0x9bc06
        ? Y(
            _0x4fb474.commandService,
            _0x4fb474.unitId,
            _0x4fb474.previousDocumentData,
            _0x9bc06.nextDocumentData,
            V.id,
            _0x9bc06.cursorOffset,
          )
        : false;
    },
  },
  H = {
    id: "docs-quote.command.update-style",
    type: _0x334246.COMMAND,
    handler: (_0x57fc08, _0x256645) => {
      if (
        !_0x256645 ||
        (_0x256645.lineColor == null && _0x256645.textColor == null)
      )
        return false;
      let _0x1eb42a = G(_0x57fc08, _0x256645.unitId);
      if (!_0x1eb42a) return false;
      let _0xc481ab = st(_0x1eb42a.previousDocumentData, _0x256645);
      return _0xc481ab
        ? !!_0x1eb42a.commandService["syncExecuteCommand"](_0xdcf7e9.id, {
            unitId: _0x1eb42a.unitId,
            actions: _0xc481ab,
            textRanges: null,
            noNeedSetTextRange: true,
            isEditing: false,
            trigger: H.id,
          })
        : false;
    },
  },
  U = {
    id: "docs-quote.command.remove",
    type: _0x334246.COMMAND,
    handler: (_0x225e3e, _0x1728dd) => {
      if (!_0x1728dd) return false;
      let _0x5936fd = G(_0x225e3e, _0x1728dd.unitId);
      if (!_0x5936fd) return false;
      let _0x337a2f = ke({
        blockId: _0x1728dd.blockId,
        documentData: _0x5936fd.previousDocumentData,
      });
      return _0x337a2f
        ? Y(
            _0x5936fd.commandService,
            _0x5936fd.unitId,
            _0x5936fd.previousDocumentData,
            _0x337a2f.nextDocumentData,
            U.id,
            _0x337a2f.cursorOffset,
          )
        : false;
    },
  },
  W = {
    id: "docs-quote.command.cancel-empty-paragraph",
    type: _0x334246.COMMAND,
    handler: (_0x5bf053, _0x47090f) => {
      var _0x27f0e7;
      let _0x5092c3 = G(
        _0x5bf053,
        _0x47090f == null ? undefined : _0x47090f.unitId,
      );
      if (!_0x5092c3) return false;
      let _0xdd13c8 =
        (_0x47090f == null ? undefined : _0x47090f.cursorOffset) ??
        ((_0x27f0e7 = K(_0x5bf053)) == null
          ? undefined
          : _0x27f0e7.startOffset);
      if (_0xdd13c8 == null) return false;
      let _0x549186 = Ae({
        cursorOffset: _0xdd13c8,
        documentData: _0x5092c3.previousDocumentData,
        paragraphStartIndex:
          _0x47090f == null ? undefined : _0x47090f.paragraphStartIndex,
      });
      return _0x549186
        ? Y(
            _0x5092c3.commandService,
            _0x5092c3.unitId,
            _0x5092c3.previousDocumentData,
            _0x549186.nextDocumentData,
            W.id,
            _0x549186.cursorOffset,
          )
        : false;
    },
  };
function G(_0xeeea58, _0xac60a7) {
  let _0x58d2ad = _0xeeea58.get(_0x5253e8),
    _0x2109c7 = _0xac60a7
      ? _0x58d2ad.getUnit(_0xac60a7, _0x47f859.UNIVER_DOC)
      : _0x58d2ad.getCurrentUnitOfType(_0x47f859.UNIVER_DOC);
  return _0x2109c7
    ? {
        commandService: _0xeeea58.get(_0x1ed0e3),
        previousDocumentData: _0x2109c7.getSnapshot(),
        unitId: _0x2109c7.getUnitId(),
      }
    : null;
}
function K(_0x6fa2b) {
  var _0x429dd5;
  return (_0x429dd5 = _0x6fa2b.get(_0x3df08).getTextRanges()) == null
    ? undefined
    : _0x429dd5[0];
}
function rt(_0x46be28, _0x21ad2c) {
  let _0x150c84 =
      (_0x46be28 == null ? undefined : _0x46be28.startOffset) ??
      (_0x21ad2c == null ? undefined : _0x21ad2c.startOffset),
    _0x464166 =
      (_0x46be28 == null ? undefined : _0x46be28.endOffset) ??
      (_0x21ad2c == null ? undefined : _0x21ad2c.endOffset);
  if (_0x150c84 != null && _0x464166 != null)
    return {
      endOffset: Math.max(_0x150c84, _0x464166),
      startOffset: Math.min(_0x150c84, _0x464166),
    };
}
function it(_0x4dfdaa, _0x1d2986) {
  var _0x2d75ab;
  if (!_0x1d2986) return;
  let _0x429c8c = at(_0x1d2986);
  return (_0x2d75ab = _0x4dfdaa.body) == null ||
    (_0x2d75ab = _0x2d75ab.blockRanges) == null
    ? undefined
    : _0x2d75ab.find((_0x166764) => {
        let _0x5de754 = _0x324326(_0x166764);
        return _0x1d2986.startOffset === _0x1d2986.endOffset
          ? _0x4321cf(_0x5de754, _0x429c8c)
          : _0x55c828(_0x5de754, _0x429c8c);
      });
}
function at(_0x294566) {
  return _0x294566.startOffset === _0x294566.endOffset
    ? _0x294566.startOffset
    : _0x294566.startOffset + 1;
}
function ot(_0x1cc557) {
  let _0xc7398f = K(_0x1cc557);
  if (!_0xc7398f) return null;
  let _0x342729 = _0x1cc557
      .get(_0x5253e8)
      .getCurrentUnitOfType(_0x47f859.UNIVER_DOC),
    _0x596cab = _0x342729 == null ? undefined : _0x342729.getBody();
  return _0x596cab
    ? (_0x5a41b2.range["getParagraphsInRange"](
        _0xc7398f,
        _0x596cab.paragraphs ?? [],
        _0x596cab.dataStream ?? "",
      )[0] ?? null)
    : null;
}
function st(_0x5c96de, _0x20175b) {
  var _0x5a5c7b;
  let _0x46d00f = _0x5c96de.body,
    _0x2a5a94 =
      _0x46d00f == null || (_0x5a5c7b = _0x46d00f.blockRanges) == null
        ? undefined
        : _0x5a5c7b.find(
            (_0x3f80e0) =>
              _0x3f80e0.blockId === _0x20175b.blockId &&
              _0x3f80e0.blockType === _0xf17462.QUOTE,
          );
  if (!_0x46d00f || !_0x2a5a94) return null;
  let _0x2cb8d2 = _0x44986f.getInstance(),
    _0x3aad41 = [];
  if (_0x20175b.textColor != null) {
    let _0x2962c0 = _0x2a5a94.startIndex + 1,
      _0x468308 = _0x2a5a94.endIndex;
    if (_0x468308 > _0x2962c0) {
      if (_0x46d00f.textRuns == null)
        _0x3aad41.push(
          _0x2cb8d2.insertOp(
            ["body", "textRuns"],
            [
              {
                st: _0x2962c0,
                ed: _0x468308,
                ts: { cl: { rgb: _0x20175b.textColor } },
              },
            ],
          ),
        );
      else {
        let _0x5710e0 = new _0x3045dc();
        (_0x5710e0.push({ t: _0x4abc69.RETAIN, len: _0x2962c0 }),
          _0x5710e0.push({
            t: _0x4abc69.RETAIN,
            len: _0x468308 - _0x2962c0,
            body: {
              dataStream: "",
              textRuns: [
                {
                  st: 0,
                  ed: _0x468308 - _0x2962c0,
                  ts: { cl: { rgb: _0x20175b.textColor } },
                },
              ],
            },
          }),
          _0x3aad41.push(_0x2cb8d2.editOp(_0x5710e0.serialize(), ["body"])));
      }
    }
  }
  _0x20175b.lineColor != null &&
    (_0x46d00f.paragraphs ?? []).forEach((_0x2314df, _0x44add6) => {
      var _0x271f09;
      if (
        _0x2314df.startIndex <= _0x2a5a94.startIndex ||
        _0x2314df.startIndex >= _0x2a5a94.endIndex
      )
        return;
      let _0x31fa41 = ["body", "paragraphs", _0x44add6, "paragraphStyle"],
        _0x3ca687 = [..._0x31fa41, "borderLeft"],
        _0x27d4e9 =
          (_0x271f09 = _0x2314df.paragraphStyle) == null
            ? undefined
            : _0x271f09.borderLeft,
        _0x5dc31c = {
          color: { rgb: _0x20175b.lineColor },
          width: (_0x27d4e9 == null ? undefined : _0x27d4e9.width) ?? 2,
          dashStyle:
            (_0x27d4e9 == null ? undefined : _0x27d4e9.dashStyle) ??
            _0x3ba1e5.SOLID,
          padding: (_0x27d4e9 == null ? undefined : _0x27d4e9.padding) ?? 0,
        };
      _0x2314df.paragraphStyle == null
        ? _0x3aad41.push(
            _0x2cb8d2.insertOp(_0x31fa41, { borderLeft: _0x5dc31c }),
          )
        : _0x27d4e9 == null
          ? _0x3aad41.push(_0x2cb8d2.insertOp(_0x3ca687, _0x5dc31c))
          : _0x3aad41.push(
              _0x2cb8d2.replaceOp(_0x3ca687, _0x27d4e9, _0x5dc31c),
            );
    });
  let _0xfdeebd = null;
  return (
    _0x3aad41.forEach((_0x4a245e) => {
      _0xfdeebd = _0x44986f.compose(_0xfdeebd, _0x4a245e);
    }),
    _0xfdeebd
  );
}
function ct(_0x3be74d, _0x219cfe) {
  let _0x325164 = _0x3be74d.body,
    _0x1f8c92 = _0x219cfe.body,
    _0x527e8c = _0x102aa8(_0x325164, _0x1f8c92),
    _0x58dde2 = [],
    _0x2f0b34 = _0x527e8c && _0x1f8c92 ? ut(_0x1f8c92, _0x527e8c) : null,
    _0x56fb3f =
      _0x527e8c && _0x527e8c.deleteLength === _0x527e8c.insertLength
        ? lt(_0x325164, _0x1f8c92)
        : null,
    _0x4965f3 = _0x527e8c ? null : dt(_0x325164, _0x1f8c92);
  return (
    _0x2f0b34 && _0x58dde2.push(_0x2f0b34),
    _0x56fb3f && _0x58dde2.push(_0x56fb3f),
    _0x4965f3 && _0x58dde2.push(_0x4965f3),
    _0x58dde2.reduce(
      (_0x55026e, _0x3af9b4) => _0x44986f.compose(_0x55026e, _0x3af9b4),
      null,
    )
  );
}
function lt(_0x5d24ee, _0x129e34) {
  let _0x4d0963 = _0x5d24ee == null ? undefined : _0x5d24ee.blockRanges,
    _0x4a700a = _0x129e34 == null ? undefined : _0x129e34.blockRanges;
  if (
    !(_0x4d0963 != null && _0x4d0963.length) ||
    !(_0x4a700a != null && _0x4a700a.length) ||
    _0x4d0963.length !== _0x4a700a.length
  )
    return null;
  let _0x969322 = _0x44986f.getInstance(),
    _0x550c1e = [];
  return (
    _0x4d0963.forEach((_0x1a2188, _0x34c5bc) => {
      let _0x279153 = _0x4a700a[_0x34c5bc];
      _0x1a2188.blockId ===
        (_0x279153 == null ? undefined : _0x279153.blockId) &&
        (_0x1a2188.startIndex !== _0x279153.startIndex &&
          _0x550c1e.push(
            _0x969322.replaceOp(
              ["body", "blockRanges", _0x34c5bc, "startIndex"],
              _0x1a2188.startIndex,
              _0x279153.startIndex,
            ),
          ),
        _0x1a2188.endIndex !== _0x279153.endIndex &&
          _0x550c1e.push(
            _0x969322.replaceOp(
              ["body", "blockRanges", _0x34c5bc, "endIndex"],
              _0x1a2188.endIndex,
              _0x279153.endIndex,
            ),
          ));
    }),
    _0x550c1e.reduce(
      (_0x4afa96, _0x41a17d) => _0x44986f.compose(_0x4afa96, _0x41a17d),
      null,
    )
  );
}
function ut(_0x39a0b6, _0x351954) {
  let _0x579d9a = new _0x3045dc();
  return (
    _0x579d9a.retain(_0x351954.start),
    _0x351954.insertLength > 0 &&
      _0x579d9a.insert(
        _0x351954.insertLength,
        _0x208e5a(
          _0x39a0b6,
          _0x351954.start,
          _0x351954.start + _0x351954.insertLength,
          false,
        ),
      ),
    _0x351954.deleteLength > 0 && _0x579d9a.delete(_0x351954.deleteLength),
    _0x44986f.getInstance().editOp(_0x579d9a.serialize(), ["body"])
  );
}
function dt(_0x1f2c8c, _0x2f358c) {
  let _0x3a037a = [];
  for (let _0x125dfc of ft)
    q(
      _0x44986f.getInstance(),
      ["body", _0x125dfc],
      _0x1f2c8c == null ? undefined : _0x1f2c8c[_0x125dfc],
      _0x2f358c == null ? undefined : _0x2f358c[_0x125dfc],
      _0x3a037a,
    );
  return _0x3a037a.reduce(
    (_0x1e4257, _0x51a9bd) => _0x44986f.compose(_0x1e4257, _0x51a9bd),
    null,
  );
}
const ft = [
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
function q(_0x45a09d, _0xa393c8, _0x4194c5, _0x37fbb1, _0x27c09d) {
  if (!J(_0x4194c5, _0x37fbb1)) {
    if (_0x4194c5 == null) {
      _0x27c09d.push(_0x45a09d.insertOp(_0xa393c8, _0x37fbb1));
      return;
    }
    if (_0x37fbb1 == null) {
      _0x27c09d.push(_0x45a09d.removeOp(_0xa393c8, _0x4194c5));
      return;
    }
    if (Array.isArray(_0x4194c5) && Array.isArray(_0x37fbb1)) {
      pt(_0x45a09d, _0xa393c8, _0x4194c5, _0x37fbb1, _0x27c09d);
      return;
    }
    if (mt(_0x4194c5) && mt(_0x37fbb1)) {
      new Set([...Object.keys(_0x4194c5), ...Object.keys(_0x37fbb1)]).forEach(
        (_0x2e8c51) => {
          q(
            _0x45a09d,
            [..._0xa393c8, _0x2e8c51],
            _0x4194c5[_0x2e8c51],
            _0x37fbb1[_0x2e8c51],
            _0x27c09d,
          );
        },
      );
      return;
    }
    _0x27c09d.push(_0x45a09d.replaceOp(_0xa393c8, _0x4194c5, _0x37fbb1));
  }
}
function pt(_0x335c26, _0x939b75, _0x4ae03a, _0x26fb3c, _0x3d9afc) {
  if (_0x4ae03a.length === _0x26fb3c.length) {
    _0x4ae03a.forEach((_0x49f794, _0x379efd) =>
      q(
        _0x335c26,
        [..._0x939b75, _0x379efd],
        _0x49f794,
        _0x26fb3c[_0x379efd],
        _0x3d9afc,
      ),
    );
    return;
  }
  let _0x3a5863 = 0;
  for (
    ;
    _0x3a5863 < _0x4ae03a.length &&
    _0x3a5863 < _0x26fb3c.length &&
    J(_0x4ae03a[_0x3a5863], _0x26fb3c[_0x3a5863]);
  )
    _0x3a5863++;
  let _0x367fce = _0x4ae03a.length - 1,
    _0x40687a = _0x26fb3c.length - 1;
  for (
    ;
    _0x367fce >= _0x3a5863 &&
    _0x40687a >= _0x3a5863 &&
    J(_0x4ae03a[_0x367fce], _0x26fb3c[_0x40687a]);
  )
    (_0x367fce--, _0x40687a--);
  for (let _0x5d826d = _0x367fce; _0x5d826d >= _0x3a5863; _0x5d826d--)
    _0x3d9afc.push(
      _0x335c26.removeOp([..._0x939b75, _0x5d826d], _0x4ae03a[_0x5d826d]),
    );
  for (let _0x4a9ec3 = _0x3a5863; _0x4a9ec3 <= _0x40687a; _0x4a9ec3++)
    _0x3d9afc.push(
      _0x335c26.insertOp([..._0x939b75, _0x4a9ec3], _0x26fb3c[_0x4a9ec3]),
    );
}
function mt(_0x5a973a) {
  return (
    typeof _0x5a973a == "object" && !!_0x5a973a && !Array.isArray(_0x5a973a)
  );
}
function J(_0x261652, _0x1badfd) {
  return JSON.stringify(_0x261652) === JSON.stringify(_0x1badfd);
}
function Y(_0x5598ef, _0x5cb2aa, _0x5336c, _0x587555, _0x5511c5, _0x4b9a3c) {
  let _0x4b88eb = ct(_0x5336c, _0x587555);
  return _0x4b88eb
    ? !!_0x5598ef.syncExecuteCommand(_0xdcf7e9.id, {
        unitId: _0x5cb2aa,
        actions: _0x4b88eb,
        textRanges: [
          { startOffset: _0x4b9a3c, endOffset: _0x4b9a3c, collapsed: true },
        ],
        isEditing: false,
        trigger: _0x5511c5,
      })
    : false;
}
function ht(_0x30d14e, _0x1c0f38, _0x5517c4, _0x1185de, _0x4b3fd3) {
  return !!_0x30d14e.syncExecuteCommand(_0xdcf7e9.id, {
    unitId: _0x1c0f38,
    actions: _0x5517c4,
    textRanges: [
      { startOffset: _0x4b3fd3, endOffset: _0x4b3fd3, collapsed: true },
    ],
    isEditing: false,
    trigger: _0x1185de,
  });
}
var gt = "@univerjs-pro/docs-quote",
  _t = "1.0.0-insiders.20260907-70fc579";
const vt = {};
function X(_0x172746, _0x54cdd8) {
  return function (_0x22546f, _0x266705) {
    _0x54cdd8(_0x22546f, _0x266705, _0x172746);
  };
}
function yt(_0x2a42a6, _0x1cabab, _0x2b3c10, _0x404366) {
  var _0x4fef45 = arguments.length,
    _0x4df188 =
      _0x4fef45 < 3
        ? _0x1cabab
        : _0x404366 === null
          ? (_0x404366 = Object.getOwnPropertyDescriptor(_0x1cabab, _0x2b3c10))
          : _0x404366,
    _0x53929f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4df188 = Reflect.decorate(_0x2a42a6, _0x1cabab, _0x2b3c10, _0x404366);
  else {
    for (var _0x483151 = _0x2a42a6.length - 1; _0x483151 >= 0; _0x483151--)
      (_0x53929f = _0x2a42a6[_0x483151]) &&
        (_0x4df188 =
          (_0x4fef45 < 3
            ? _0x53929f(_0x4df188)
            : _0x4fef45 > 3
              ? _0x53929f(_0x1cabab, _0x2b3c10, _0x4df188)
              : _0x53929f(_0x1cabab, _0x2b3c10)) || _0x4df188);
  }
  return (
    _0x4fef45 > 3 &&
      _0x4df188 &&
      Object.defineProperty(_0x1cabab, _0x2b3c10, _0x4df188),
    _0x4df188
  );
}
function Z(_0x11e5dc) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3afb60) {
            return typeof _0x3afb60;
          }
        : function (_0x431e37) {
            return _0x431e37 &&
              typeof Symbol == "function" &&
              _0x431e37.constructor === Symbol &&
              _0x431e37 !== Symbol.prototype
              ? "symbol"
              : typeof _0x431e37;
          }),
    Z(_0x11e5dc)
  );
}
function bt(_0x35e2c4, _0x3f3622) {
  if (Z(_0x35e2c4) != "object" || !_0x35e2c4) return _0x35e2c4;
  var _0x3c90c3 = _0x35e2c4[Symbol.toPrimitive];
  if (_0x3c90c3 !== undefined) {
    var _0x14e411 = _0x3c90c3.call(_0x35e2c4, _0x3f3622 || "default");
    if (Z(_0x14e411) != "object") return _0x14e411;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3f3622 === "string" ? String : Number)(_0x35e2c4);
}
function xt(_0x39c8bc) {
  var _0x38b38b = bt(_0x39c8bc, "string");
  return Z(_0x38b38b) == "symbol" ? _0x38b38b : _0x38b38b + "";
}
function Q(_0x42c28b, _0x4ec2f1, _0x5e87bf) {
  return (
    (_0x4ec2f1 = xt(_0x4ec2f1)) in _0x42c28b
      ? Object.defineProperty(_0x42c28b, _0x4ec2f1, {
          value: _0x5e87bf,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x42c28b[_0x4ec2f1] = _0x5e87bf),
    _0x42c28b
  );
}
let $ = class extends _0x596720 {
  constructor(_0x14ea6c = vt, _0x3e238c, _0x3cbb93, _0x2016ac) {
    (super(),
      (this._config = _0x14ea6c),
      (this._injector = _0x3e238c),
      (this._commandService = _0x3cbb93),
      (this._configService = _0x2016ac));
    let { ..._0x430b21 } = _0x42e3ff({}, vt, this._config);
    this._configService["setConfig"]("docs-quote.config", _0x430b21);
  }
  onStarting() {
    [z, nt, V, U, B, W, H].forEach((_0x338072) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x338072)),
    );
  }
};
(Q($, "pluginName", $e),
  Q($, "packageName", gt),
  Q($, "version", _t),
  Q($, "type", _0x47f859.UNIVER_DOC),
  ($ = yt(
    [
      _0x11613c(_0x11f275, _0x4857bb),
      X(1, _0x1ffb85(_0xbbd0e5)),
      X(2, _0x1ed0e3),
      X(3, _0x1dddbf),
    ],
    $,
  )));
export {
  et as DOCS_QUOTE_LINE_COLOR_TOKEN,
  tt as DOCS_QUOTE_LINE_WIDTH,
  $e as DOCS_QUOTE_PLUGIN,
  W as DocsQuoteCancelEmptyParagraphCommand,
  B as DocsQuoteExitCommand,
  nt as DocsQuoteInsertBelowCommand,
  z as DocsQuoteInsertCommand,
  U as DocsQuoteRemoveCommand,
  V as DocsQuoteUnwrapCommand,
  H as DocsQuoteUpdateStyleCommand,
  $ as UniverDocsQuotePlugin,
  Ae as buildCancelEmptyQuoteParagraphActions,
  Ee as buildExitQuoteActions,
};
