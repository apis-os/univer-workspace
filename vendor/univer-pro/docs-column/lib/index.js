import {
  ColumnLayoutType as _0xc4591d,
  ColumnResponsiveType as _0x30fdd9,
  CommandType as _0x1efd46,
  DataStreamTreeTokenType as _0x5d83c0,
  DependentOn as _0x48776c,
  DocumentFlavor as _0x5df022,
  ICommandService as _0xea787d,
  IConfigService as _0x7c78e,
  IUniverInstanceService as _0x1ece41,
  Inject as _0x418642,
  Injector as _0x21c153,
  JSONX as _0x2f4008,
  ObjectRelativeFromH as _0x406972,
  ObjectRelativeFromV as _0x2ab217,
  Plugin as _0x360b81,
  TableAlignmentType as _0x14bb59,
  TableRowHeightRule as _0x1692fb,
  TableSizeType as _0x16ddda,
  TableTextWrapType as _0x4d50aa,
  TextX as _0x460dbe,
  Tools as _0x14d5fb,
  UniverInstanceType as _0x32ce61,
  containsInteriorInsertionOffset as _0x396a7a,
  createParagraphId as _0x514db4,
  createSectionId as _0x1e7c11,
  generateRandomId as _0x370836,
  getBlockRangeInterval as _0x1c91b8,
  getColumnGroupRangeInterval as _0x312fa5,
  getTableRangeInterval as _0x5a871f,
  merge as _0x232df3,
  shiftExclusiveRangeOnInsert as _0x4be491,
  shiftInclusiveRangeOnInsert as _0xd67afe,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0x3c7fae,
  RichTextEditingMutation as _0x3ebf9d,
  UniverDocsPlugin as _0x1d57c0,
  consumeContentInsertRange as _0xcb533,
} from "@univerjs/docs";
import { getDocsTableRenderViewport as _0x41e7c7 } from "@univerjs/engine-render";
import { UniverLicensePlugin as _0x4d2e2e } from "@univerjs-pro/license";
const ue = 5;
let de = (function (_0x50da32) {
  return ((_0x50da32.LEFT = "left"), (_0x50da32.RIGHT = "right"), _0x50da32);
})({});
const O = {
  COLUMN_GROUP_START: "\x12",
  COLUMN_START: "\x13",
  COLUMN_END: "\x14",
  COLUMN_GROUP_END: "\x15",
};
function k(_0x49328f, _0x3efa27) {
  var _0x5cc325, _0x1edb30;
  let _0x447ea1 =
      (_0x5cc325 = _0x49328f.body) == null ||
      (_0x5cc325 = _0x5cc325.columnGroups) == null
        ? undefined
        : _0x5cc325.find((_0x116892) => _0x116892.columnGroupId === _0x3efa27),
    _0x3061fb =
      (_0x1edb30 = _0x49328f.body) == null ? undefined : _0x1edb30.dataStream;
  if (
    !_0x447ea1 ||
    !_0x3061fb ||
    _0x3061fb[_0x447ea1.startIndex] !== O.COLUMN_GROUP_START ||
    _0x3061fb[_0x447ea1.endIndex] !== O.COLUMN_GROUP_END
  )
    return null;
  let _0x51b441 = _0x312fa5(_0x447ea1);
  return fe(
    _0x3061fb,
    _0x51b441.startOffset,
    _0x51b441.endOffset,
    _0x3efa27,
    _0x447ea1,
  );
}
function fe(_0x95b2de, _0x200efa, _0x4496bc, _0x10d651, _0x1c54d8) {
  let _0x55fbf9 = [],
    _0x2aad46 = -1;
  for (let _0x5107a7 = _0x200efa; _0x5107a7 < _0x4496bc; _0x5107a7++) {
    let _0x3e4a15 = _0x95b2de[_0x5107a7];
    if (_0x3e4a15 === O.COLUMN_START) {
      _0x2aad46 = _0x5107a7;
      continue;
    }
    if (_0x3e4a15 === O.COLUMN_END && _0x2aad46 >= 0) {
      var _0x40d27f;
      let _0x172c68 = _0x55fbf9.length;
      (_0x55fbf9.push({
        column: _0x172c68,
        columnId:
          ((_0x40d27f = _0x1c54d8.columns) == null ||
          (_0x40d27f = _0x40d27f[_0x172c68]) == null
            ? undefined
            : _0x40d27f.columnId) ?? String(_0x172c68),
        startOffset: _0x2aad46,
        endOffset: _0x5107a7,
      }),
        (_0x2aad46 = -1));
    }
  }
  return {
    columnGroupId: _0x10d651,
    startOffset: _0x200efa,
    endOffset: _0x4496bc,
    columns: _0x55fbf9,
    source: _0x1c54d8,
  };
}
function A(_0x2997fb) {
  return {
    ..._0x2997fb,
    body: _0x2997fb.body ? pe(_0x2997fb.body) : _0x2997fb.body,
  };
}
function pe(_0x49790c) {
  var _0x9aff32,
    _0x75bc62,
    _0x2484c7,
    _0x1c6bfc,
    _0x93d3ea,
    _0x599536,
    _0x4bbae6,
    _0x45a6f5,
    _0x92089a;
  return {
    ..._0x49790c,
    paragraphs:
      (_0x9aff32 = _0x49790c.paragraphs) == null
        ? undefined
        : _0x9aff32.map((_0x3e3086) => ({
            ..._0x3e3086,
            bullet: j(_0x3e3086.bullet),
            paragraphStyle: j(_0x3e3086.paragraphStyle),
          })),
    sectionBreaks:
      (_0x75bc62 = _0x49790c.sectionBreaks) == null
        ? undefined
        : _0x75bc62.map((_0x50f98a) => ({ ..._0x50f98a })),
    textRuns:
      (_0x2484c7 = _0x49790c.textRuns) == null
        ? undefined
        : _0x2484c7.map((_0x35ba65) => ({ ..._0x35ba65 })),
    tables:
      (_0x1c6bfc = _0x49790c.tables) == null
        ? undefined
        : _0x1c6bfc.map((_0x5cfe51) => ({ ..._0x5cfe51 })),
    columnGroups:
      (_0x93d3ea = _0x49790c.columnGroups) == null
        ? undefined
        : _0x93d3ea.map((_0x1e391f) => {
            var _0xd45852;
            return {
              ..._0x1e391f,
              columns:
                (_0xd45852 = _0x1e391f.columns) == null
                  ? undefined
                  : _0xd45852.map((_0x457bc5) => j(_0x457bc5)),
            };
          }),
    blockRanges:
      (_0x599536 = _0x49790c.blockRanges) == null
        ? undefined
        : _0x599536.map((_0x58f6f9) => ({ ..._0x58f6f9 })),
    customRanges:
      (_0x4bbae6 = _0x49790c.customRanges) == null
        ? undefined
        : _0x4bbae6.map((_0x16d078) => ({ ..._0x16d078 })),
    customDecorations:
      (_0x45a6f5 = _0x49790c.customDecorations) == null
        ? undefined
        : _0x45a6f5.map((_0x4ae0ba) => ({ ..._0x4ae0ba })),
    customBlocks:
      (_0x92089a = _0x49790c.customBlocks) == null
        ? undefined
        : _0x92089a.map((_0x4fd14b) => ({ ..._0x4fd14b })),
  };
}
function j(_0x3af416) {
  return Array.isArray(_0x3af416)
    ? _0x3af416.map((_0x5ba9fe) => j(_0x5ba9fe))
    : !_0x3af416 || typeof _0x3af416 != "object"
      ? _0x3af416
      : Object.fromEntries(
          Object.entries(_0x3af416).map(([_0x9ee8f6, _0xe6466a]) => [
            _0x9ee8f6,
            j(_0xe6466a),
          ]),
        );
}
const me = new Set([
  _0x5d83c0.BLOCK_END,
  O.COLUMN_START,
  O.COLUMN_END,
  O.COLUMN_GROUP_END,
  _0x5d83c0.TABLE_ROW_START,
  _0x5d83c0.TABLE_CELL_START,
  _0x5d83c0.TABLE_CELL_END,
  _0x5d83c0.TABLE_ROW_END,
  _0x5d83c0.TABLE_END,
]);
function M(_0x2e77a1, _0x5937da) {
  if (!Ce(_0x2e77a1)) return false;
  let _0x243f80 = _0x2e77a1.body;
  return !(_0x243f80 != null && _0x243f80.dataStream) ||
    Se(_0x243f80.dataStream[_0x5937da])
    ? false
    : !(_0x243f80.columnGroups ?? []).some((_0x4390f4) =>
        _0x396a7a(_0x312fa5(_0x4390f4), _0x5937da),
      ) &&
        !(_0x243f80.tables ?? []).some((_0xfaa23f) =>
          _0x396a7a(_0x5a871f(_0xfaa23f), _0x5937da),
        ) &&
        !(_0x243f80.blockRanges ?? []).some((_0xc6f336) =>
          _0x396a7a(_0x1c91b8(_0xc6f336), _0x5937da),
        );
}
function he(_0x22be96) {
  let _0x3e781d = A(_0x22be96.documentData),
    _0x57a802 = ge(_0x3e781d),
    _0x487d66 = Math.max(
      0,
      Math.min(_0x22be96.offset, _0x57a802.dataStream["length"]),
    );
  if (!Ce(_0x3e781d))
    throw Error(
      "[DocsColumn]: Column groups can only be inserted in modern documents.",
    );
  if (!M(_0x3e781d, _0x487d66))
    throw Error(
      "[DocsColumn]: Cannot insert a column group inside table, column group, or document block ranges.",
    );
  let _0x2203d5 = Math.max(
    2,
    _0x22be96.columnCount ?? _0x22be96.columnIds["length"],
  );
  if (_0x2203d5 > 5)
    throw Error("[DocsColumn]: Cannot create more than five columns.");
  let _0x23a54f = _e(_0x22be96.columnIds, _0x2203d5),
    _0x383f55 = ye(_0x2203d5, xe(_0x57a802), be(_0x57a802, _0x487d66)),
    _0x1a9b7a = _0x383f55.dataStream,
    _0x595ce8 = _0x487d66 + _0x383f55.columnGroupEndIndex;
  return (
    (_0x57a802.dataStream =
      "" +
      _0x57a802.dataStream["slice"](0, _0x487d66) +
      _0x1a9b7a +
      _0x57a802.dataStream["slice"](_0x487d66)),
    (_0x57a802.paragraphs = [
      ...N(_0x57a802.paragraphs ?? [], _0x487d66, _0x1a9b7a.length),
      ..._0x383f55.paragraphs["map"]((_0xa1dfc) => ({
        ..._0xa1dfc,
        startIndex: _0xa1dfc.startIndex + _0x487d66,
      })),
    ].sort(
      (_0x5c527a, _0x14f605) => _0x5c527a.startIndex - _0x14f605.startIndex,
    )),
    (_0x57a802.sectionBreaks = [
      ...N(_0x57a802.sectionBreaks ?? [], _0x487d66, _0x1a9b7a.length),
      ..._0x383f55.sectionBreaks["map"]((_0x1ae32a) => ({
        ..._0x1ae32a,
        startIndex: _0x1ae32a.startIndex + _0x487d66,
      })),
    ].sort(
      (_0x458012, _0x198980) => _0x458012.startIndex - _0x198980.startIndex,
    )),
    (_0x57a802.textRuns = we(
      _0x57a802.textRuns ?? [],
      _0x487d66,
      _0x1a9b7a.length,
    )),
    (_0x57a802.customBlocks = N(
      _0x57a802.customBlocks ?? [],
      _0x487d66,
      _0x1a9b7a.length,
    )),
    (_0x57a802.blockRanges = (_0x57a802.blockRanges ?? []).map((_0x26d9fc) =>
      _0xd67afe(_0x26d9fc, _0x487d66, _0x1a9b7a.length),
    )),
    (_0x57a802.customRanges = (_0x57a802.customRanges ?? []).map((_0xe89550) =>
      _0xd67afe(_0xe89550, _0x487d66, _0x1a9b7a.length),
    )),
    (_0x57a802.customDecorations = (_0x57a802.customDecorations ?? []).map(
      (_0x475136) => _0xd67afe(_0x475136, _0x487d66, _0x1a9b7a.length),
    )),
    (_0x57a802.tables = (_0x57a802.tables ?? []).map((_0x4a34c1) =>
      _0x4be491(_0x4a34c1, _0x487d66, _0x1a9b7a.length),
    )),
    (_0x57a802.columnGroups = [
      ...(_0x57a802.columnGroups ?? []).map((_0x8400ce) =>
        _0xd67afe(_0x8400ce, _0x487d66, _0x1a9b7a.length),
      ),
      {
        startIndex: _0x487d66,
        endIndex: _0x595ce8,
        columnGroupId: _0x22be96.columnGroupId,
        columns: _0x23a54f.map((_0x15e846) => ({
          columnId: _0x15e846,
          widthRatio: 1,
        })),
        gap: { v: ve(_0x22be96.gap) },
        layout: _0xc4591d.FIXED,
        responsive: _0x30fdd9.STACK,
      },
    ].sort(
      (_0x15e529, _0x39e232) => _0x15e529.startIndex - _0x39e232.startIndex,
    )),
    {
      nextDocumentData: _0x3e781d,
      inserted: {
        columnGroupId: _0x22be96.columnGroupId,
        columnIds: _0x23a54f,
      },
    }
  );
}
function ge(_0xab268f) {
  return (
    (_0xab268f.body ??= {
      dataStream: _0x5d83c0.SECTION_BREAK,
      paragraphs: [],
      sectionBreaks: [{ sectionId: _0x1e7c11(new Set()), startIndex: 0 }],
      columnGroups: [],
    }),
    (_0xab268f.body["dataStream"] ??= _0x5d83c0.SECTION_BREAK),
    (_0xab268f.body["paragraphs"] ??= []),
    (_0xab268f.body["sectionBreaks"] ??= []),
    (_0xab268f.body["columnGroups"] ??= []),
    _0xab268f.body
  );
}
function _e(_0x4f6669, _0x6190d6) {
  return Array.from(
    { length: _0x6190d6 },
    (_0x384a0c, _0x29d67d) =>
      _0x4f6669[_0x29d67d] ?? "column-" + (_0x29d67d + 1),
  );
}
function ve(_0x2c521c) {
  return typeof _0x2c521c == "number" &&
    Number.isFinite(_0x2c521c) &&
    _0x2c521c >= 0
    ? _0x2c521c
    : 12;
}
function ye(_0x2f1482, _0x5de162, _0x3ea071) {
  let _0xb26afe = O.COLUMN_GROUP_START,
    _0x4a87ae = [],
    _0x5f04b9 = [];
  for (let _0x32ed8f = 0; _0x32ed8f < _0x2f1482; _0x32ed8f++)
    ((_0xb26afe += "" + O.COLUMN_START + _0x5d83c0.PARAGRAPH + O.COLUMN_END),
      _0x4a87ae.push({
        startIndex: _0xb26afe.length - 2,
        paragraphId: _0x514db4(_0x5de162),
      }));
  _0xb26afe += O.COLUMN_GROUP_END;
  let _0x423e3e = _0xb26afe.length - 1;
  return (
    _0x3ea071 &&
      ((_0xb26afe += _0x5d83c0.PARAGRAPH),
      _0x4a87ae.push({
        startIndex: _0xb26afe.length - 1,
        paragraphId: _0x514db4(_0x5de162),
      })),
    {
      columnGroupEndIndex: _0x423e3e,
      dataStream: _0xb26afe,
      paragraphs: _0x4a87ae,
      sectionBreaks: _0x5f04b9,
    }
  );
}
function be(_0x474a32, _0x6db2dc) {
  let _0x48b5be = _0x474a32.dataStream[_0x6db2dc];
  return _0x48b5be === _0x5d83c0.SECTION_BREAK || _0x48b5be === undefined;
}
function xe(_0x7aec3b) {
  return new Set(
    (_0x7aec3b.paragraphs ?? []).map((_0x5b2b0b) => _0x5b2b0b.paragraphId),
  );
}
function Se(_0x3d4241) {
  return _0x3d4241 != null && me.has(_0x3d4241);
}
function Ce(_0x36a838) {
  var _0x4ca1bb;
  return (
    ((_0x4ca1bb = _0x36a838.documentStyle) == null
      ? undefined
      : _0x4ca1bb.documentFlavor) === _0x5df022.MODERN
  );
}
function N(_0x46593f, _0x4cfeb2, _0x1055bc) {
  return _0x46593f.map((_0x13bde4) =>
    _0x13bde4.startIndex >= _0x4cfeb2
      ? { ..._0x13bde4, startIndex: _0x13bde4.startIndex + _0x1055bc }
      : _0x13bde4,
  );
}
function we(_0x148d08, _0x4e8162, _0x458bbb) {
  return _0x148d08.map((_0x191be5) =>
    _0x191be5.st >= _0x4e8162
      ? {
          ..._0x191be5,
          st: _0x191be5.st + _0x458bbb,
          ed: _0x191be5.ed + _0x458bbb,
        }
      : _0x191be5.ed > _0x4e8162
        ? { ..._0x191be5, ed: _0x191be5.ed + _0x458bbb }
        : _0x191be5,
  );
}
function P(_0x4ba88e, _0x1a1639) {
  let _0x332814 = _0x4ba88e.get(_0x1ece41),
    _0x4a9b28 = _0x1a1639
      ? _0x332814.getUnit(_0x1a1639, _0x32ce61.UNIVER_DOC)
      : _0x332814.getCurrentUnitOfType(_0x32ce61.UNIVER_DOC),
    _0x7eebdc = _0x4a9b28 == null ? undefined : _0x4a9b28.getSnapshot(),
    _0x34bee9 = _0x4a9b28 == null ? undefined : _0x4a9b28.getUnitId();
  return !_0x7eebdc || !_0x34bee9
    ? null
    : {
        commandService: _0x4ba88e.get(_0xea787d),
        snapshot: _0x7eebdc,
        unitId: _0x34bee9,
      };
}
function F(_0x2e5467, _0xcd0c12, _0x60849a) {
  return _0xcd0c12
    ? !!_0x2e5467.commandService["syncExecuteCommand"](_0x3ebf9d.id, {
        unitId: _0x2e5467.unitId,
        actions: _0xcd0c12,
        textRanges: _0x60849a,
      })
    : false;
}
function Te(_0x434347, _0x478cb1, _0x47dd90) {
  var _0x49bfe8, _0x292bff;
  let _0x30c0ca = _0x2f4008.getInstance(),
    _0x3d2ca5 =
      ((_0x49bfe8 = _0x434347.body) == null ||
      (_0x49bfe8 = _0x49bfe8.columnGroups) == null
        ? undefined
        : _0x49bfe8.findIndex(
            (_0x3b3c44) => _0x3b3c44.columnGroupId === _0x478cb1,
          )) ?? -1,
    _0x5aad5a =
      _0x3d2ca5 >= 0
        ? (_0x292bff = _0x434347.body) == null ||
          (_0x292bff = _0x292bff.columnGroups) == null
          ? undefined
          : _0x292bff[_0x3d2ca5]
        : undefined;
  return !(_0x5aad5a != null && _0x5aad5a.columns) ||
    _0x5aad5a.columns["length"] !== _0x47dd90.length ||
    _0x5aad5a.columns["length"] < 2 ||
    _0x47dd90.some((_0x3ab41e) => !Number.isFinite(_0x3ab41e) || _0x3ab41e <= 0)
    ? null
    : _0x5aad5a.columns["map"]((_0x58e7be, _0x286d49) => {
        let _0x5af6e8 = _0x47dd90[_0x286d49];
        return _0x58e7be.widthRatio === _0x5af6e8
          ? null
          : _0x30c0ca.replaceOp(
              [
                "body",
                "columnGroups",
                _0x3d2ca5,
                "columns",
                _0x286d49,
                "widthRatio",
              ],
              _0x58e7be.widthRatio,
              _0x5af6e8,
            );
      })
        .filter(Boolean)
        .reduce(
          (_0xc05664, _0x5d0065) => _0x2f4008.compose(_0xc05664, _0x5d0065),
          null,
        );
}
function Ee(_0x433d49, _0x4caf9f, _0x1e1cfe, _0x441fe4, _0x19df72) {
  var _0x3733f5;
  let _0x1f25f2 = _0x433d49.body,
    _0x402c9d = k(_0x433d49, _0x4caf9f),
    _0x28b6f7 = _0x402c9d == null ? undefined : _0x402c9d.source["columns"],
    _0x2af132 =
      (_0x1f25f2 == null || (_0x3733f5 = _0x1f25f2.columnGroups) == null
        ? undefined
        : _0x3733f5.findIndex(
            (_0x529ede) => _0x529ede.columnGroupId === _0x4caf9f,
          )) ?? -1,
    _0x5cc65f =
      (_0x28b6f7 == null
        ? undefined
        : _0x28b6f7.findIndex(
            (_0x245c97) => _0x245c97.columnId === _0x1e1cfe,
          )) ?? -1,
    _0x4ab2f4 =
      _0x5cc65f >= 0
        ? _0x402c9d == null
          ? undefined
          : _0x402c9d.columns[_0x5cc65f]
        : undefined;
  if (
    !(_0x1f25f2 != null && _0x1f25f2.dataStream) ||
    !_0x402c9d ||
    !_0x28b6f7 ||
    _0x2af132 < 0 ||
    _0x5cc65f < 0 ||
    !_0x4ab2f4 ||
    _0x28b6f7.length !== _0x402c9d.columns["length"] ||
    _0x28b6f7.length >= 5
  )
    return null;
  let _0x4771d5 = _0x441fe4 === "left" ? _0x5cc65f : _0x5cc65f + 1,
    _0x1420b2 =
      _0x441fe4 === "left" ? _0x4ab2f4.startOffset : _0x4ab2f4.endOffset + 1,
    _0x3e323a = ze(_0x1f25f2),
    _0x2262b8 = _0x2f4008.getInstance(),
    _0x5b1e3c = L(_0x1420b2, _0x3e323a, 0),
    _0x2b7aa6 = { columnId: _0x19df72, widthRatio: 1 };
  return {
    actions: He([
      _0x5b1e3c,
      _0x2262b8.insertOp(
        ["body", "columnGroups", _0x2af132, "columns", _0x4771d5],
        _0x2b7aa6,
      ),
    ]),
    cursorOffset: _0x1420b2 + 1,
  };
}
function De(_0x5d092d, _0x1ebfb5, _0x3b74b0) {
  let _0x37a8d7 = Oe(_0x5d092d, _0x1ebfb5);
  if (!_0x37a8d7) return null;
  let {
      group: _0x524582,
      groupIndex: _0x2fcc85,
      sourceColumns: _0x14ceb8,
    } = _0x37a8d7,
    _0x2d1b97 = _0x14ceb8.findIndex(
      (_0x57bb22) => _0x57bb22.columnId === _0x3b74b0,
    );
  if (_0x2d1b97 < 0 || _0x14ceb8.length <= 2) return null;
  let _0x151776 = _0x524582.columns[_0x2d1b97],
    _0x2149bc = _0x14ceb8[_0x2d1b97];
  if (!_0x151776 || !_0x2149bc) return null;
  let _0x4b8ded = _0x151776.startOffset,
    _0x427550 = _0x151776.endOffset + 1,
    _0x5c3f16 =
      _0x524582.columns[_0x2d1b97 + 1] ?? _0x524582.columns[_0x2d1b97 - 1],
    _0x4e5ecf = _0x2f4008.getInstance();
  return {
    actions: He([
      L(_0x4b8ded, undefined, _0x427550 - _0x4b8ded),
      _0x4e5ecf.removeOp(
        ["body", "columnGroups", _0x2fcc85, "columns", _0x2d1b97],
        z(_0x2149bc),
      ),
    ]),
    cursorOffset:
      (_0x2d1b97 < _0x14ceb8.length - 1 ? _0x4b8ded : _0x5c3f16.startOffset) +
      1,
  };
}
function Oe(_0x53448f, _0x594801) {
  var _0x2440ac;
  let _0xf4f3a4 = _0x53448f.body,
    _0x5b46dc = k(_0x53448f, _0x594801),
    _0x72f17f = _0x5b46dc == null ? undefined : _0x5b46dc.source["columns"],
    _0x9a2678 =
      (_0xf4f3a4 == null || (_0x2440ac = _0xf4f3a4.columnGroups) == null
        ? undefined
        : _0x2440ac.findIndex(
            (_0x3696ac) => _0x3696ac.columnGroupId === _0x594801,
          )) ?? -1;
  return !(_0xf4f3a4 != null && _0xf4f3a4.dataStream) ||
    !_0x5b46dc ||
    !_0x72f17f ||
    _0x9a2678 < 0 ||
    _0x72f17f.length !== _0x5b46dc.columns["length"]
    ? null
    : { group: _0x5b46dc, groupIndex: _0x9a2678, sourceColumns: _0x72f17f };
}
function ke(_0x4eccdb, _0x4550a3) {
  let _0x308585 = _0x4eccdb.body;
  if (!(_0x308585 != null && _0x308585.dataStream)) return null;
  let _0xb43102 = Math.max(
      0,
      Math.min(_0x4550a3.offset, _0x308585.dataStream["length"]),
    ),
    _0x204feb = Math.max(2, _0x4550a3.columnCount);
  return !M(_0x4eccdb, _0xb43102) ||
    _0x204feb > 5 ||
    (_0x4550a3.widthRatios &&
      (_0x4550a3.widthRatios["length"] !== _0x204feb ||
        _0x4550a3.widthRatios["some"](
          (_0x1a760d) => !Number.isFinite(_0x1a760d) || _0x1a760d <= 0,
        )))
    ? null
    : {
        actions: L(
          _0xb43102,
          Be(_0x308585, {
            ..._0x4550a3,
            columnCount: _0x204feb,
            offset: _0xb43102,
          }),
          0,
        ),
        cursorOffset: _0xb43102 + 2,
      };
}
function Ae(_0x5c2fcb, _0x283fe2) {
  var _0x1624d0;
  let _0x21f1d2 = _0x5c2fcb.body,
    _0x4c857c =
      _0x21f1d2 == null || (_0x1624d0 = _0x21f1d2.columnGroups) == null
        ? undefined
        : _0x1624d0.find((_0x2e5392) => _0x2e5392.columnGroupId === _0x283fe2);
  if (!(_0x21f1d2 != null && _0x21f1d2.dataStream) || !_0x4c857c) return null;
  let _0x24e134 = _0x4c857c.startIndex,
    _0x15616d = _0x312fa5(_0x4c857c).endOffset;
  return {
    actions: L(
      _0x24e134,
      _0x21f1d2.dataStream["length"] === _0x15616d - _0x24e134
        ? Ve(_0x21f1d2)
        : undefined,
      _0x15616d - _0x24e134,
    ),
    cursorOffset: _0x24e134,
  };
}
function je(_0x3a9a7c) {
  let _0x1ec711 = _0x3a9a7c.body;
  if (!_0x1ec711) return null;
  let _0x153502 = _0x1ec711.dataStream ?? "",
    _0x340382 = _0x1ec711.columnGroups ?? [],
    _0x5e06f3 = Me(_0x340382),
    _0x525afa = new Set();
  (_0x5e06f3.forEach((_0x3632e0) => {
    Ne(_0x153502, _0x340382[_0x3632e0]).forEach((_0x20427c) =>
      _0x525afa.add(_0x20427c),
    );
  }),
    _0x340382.forEach((_0xf7833d, _0xdb7d24) => {
      !_0x5e06f3.has(_0xdb7d24) &&
        Pe(_0x153502, _0xf7833d, _0x525afa) &&
        (_0x5e06f3.add(_0xdb7d24),
        Ne(_0x153502, _0xf7833d).forEach((_0x2ce930) =>
          _0x525afa.add(_0x2ce930),
        ));
    }));
  let _0x2ed3d1 = [];
  _0x340382.forEach((_0x56b472, _0x5b4862) => {
    _0x5e06f3.has(_0x5b4862) ||
      Fe(_0x2ed3d1, _0x56b472, _0x5b4862, _0x153502, _0x525afa);
  });
  let _0x1641e9 = _0x2f4008.getInstance();
  [..._0x5e06f3]
    .sort((_0x5d5aae, _0x225cfa) => _0x225cfa - _0x5d5aae)
    .forEach((_0x2f88bf) => {
      _0x2ed3d1.push(
        _0x1641e9.removeOp(
          ["body", "columnGroups", _0x2f88bf],
          z(_0x340382[_0x2f88bf]),
        ),
      );
    });
  let _0x5b4ecc = Re(_0x1ec711, _0x525afa);
  return (
    _0x5b4ecc && _0x2ed3d1.push(_0x5b4ecc),
    _0x2ed3d1.length ? He(_0x2ed3d1) : null
  );
}
function Me(_0x404130) {
  let _0x4d0bdc = new Set();
  return (
    _0x404130.forEach((_0x4edc0f, _0x2e6672) => {
      _0x404130.some(
        (_0x5de970, _0x18f8cd) =>
          _0x18f8cd !== _0x2e6672 &&
          _0x4edc0f.startIndex > _0x5de970.startIndex &&
          _0x4edc0f.endIndex < _0x5de970.endIndex,
      ) && _0x4d0bdc.add(_0x2e6672);
    }),
    _0x4d0bdc
  );
}
function Ne(_0x2e848f, _0x513cf3) {
  let _0x16cdd5 = _0x312fa5(_0x513cf3).endOffset,
    _0x56909c = new Set([
      O.COLUMN_GROUP_START,
      O.COLUMN_START,
      O.COLUMN_END,
      O.COLUMN_GROUP_END,
    ]),
    _0x1aa3f8 = [];
  for (let _0x343e77 = _0x513cf3.startIndex; _0x343e77 < _0x16cdd5; _0x343e77++)
    _0x56909c.has(_0x2e848f[_0x343e77]) && _0x1aa3f8.push(_0x343e77);
  return _0x1aa3f8;
}
function Pe(_0xabaef9, _0x50c815, _0x2e7575) {
  let _0x1e9a8c = _0x312fa5(_0x50c815).endOffset,
    _0x21bf77 = -1,
    _0x41513d = 0;
  for (
    let _0x10ebd8 = _0x50c815.startIndex;
    _0x10ebd8 < _0x1e9a8c;
    _0x10ebd8++
  ) {
    if (_0x2e7575.has(_0x10ebd8)) continue;
    let _0x5d3b1a = _0xabaef9[_0x10ebd8];
    if (_0x5d3b1a === O.COLUMN_START) {
      if (_0x21bf77 >= 0) return true;
      _0x21bf77 = _0x10ebd8;
    } else {
      if (_0x5d3b1a === O.COLUMN_END) {
        if (_0x21bf77 < 0) return true;
        (_0x41513d++, (_0x21bf77 = -1));
      }
    }
  }
  return _0x21bf77 >= 0 || _0x41513d < 2 || _0x41513d > 5;
}
function Fe(_0x3731c7, _0x470e33, _0x370270, _0x12d57c, _0x510726) {
  var _0x21c7ea;
  let _0x773760 = Ie(_0x12d57c, _0x470e33, _0x510726);
  if (_0x773760 === 0) return;
  let _0x1fd35a = Le(_0x470e33, _0x773760),
    _0x5b5e34 =
      Number.isFinite(
        (_0x21c7ea = _0x470e33.gap) == null ? undefined : _0x21c7ea.v,
      ) && _0x470e33.gap["v"] >= 0
        ? { v: _0x470e33.gap["v"] }
        : { v: 12 },
    _0x3040b9 = _0x2f4008.getInstance();
  (I(
    _0x3731c7,
    _0x3040b9,
    ["body", "columnGroups", _0x370270, "columns"],
    _0x470e33.columns,
    _0x1fd35a,
  ),
    I(
      _0x3731c7,
      _0x3040b9,
      ["body", "columnGroups", _0x370270, "gap"],
      _0x470e33.gap,
      _0x5b5e34,
    ),
    I(
      _0x3731c7,
      _0x3040b9,
      ["body", "columnGroups", _0x370270, "layout"],
      _0x470e33.layout,
      _0x470e33.layout ?? _0xc4591d.FIXED,
    ),
    I(
      _0x3731c7,
      _0x3040b9,
      ["body", "columnGroups", _0x370270, "responsive"],
      _0x470e33.responsive,
      _0x470e33.responsive ?? _0x30fdd9.STACK,
    ));
}
function Ie(_0x2b4799, _0x359cc7, _0x3bd359) {
  let _0x9ca3bc = _0x312fa5(_0x359cc7).endOffset,
    _0x1d6ac1 = 0;
  for (let _0xa8e689 = _0x359cc7.startIndex; _0xa8e689 < _0x9ca3bc; _0xa8e689++)
    !_0x3bd359.has(_0xa8e689) &&
      _0x2b4799[_0xa8e689] === O.COLUMN_START &&
      _0x1d6ac1++;
  return _0x1d6ac1;
}
function Le(_0x1c9536, _0x470243) {
  return Array.from({ length: _0x470243 }, (_0x3c5f3a, _0x5842be) => {
    var _0x51c7c5;
    let _0xbe3f32 =
      (_0x51c7c5 = _0x1c9536.columns) == null
        ? undefined
        : _0x51c7c5[_0x5842be];
    return _0xbe3f32
      ? {
          ...z(_0xbe3f32),
          widthRatio:
            Number.isFinite(_0xbe3f32.widthRatio) && _0xbe3f32.widthRatio > 0
              ? _0xbe3f32.widthRatio
              : 1,
        }
      : {
          columnId: _0x1c9536.columnGroupId + "-column-" + (_0x5842be + 1),
          widthRatio: 1,
        };
  });
}
function I(_0x3e80ea, _0x1e11f8, _0x2c93f5, _0x36dd13, _0x233fff) {
  _0x14d5fb.diffValue(_0x36dd13, _0x233fff) ||
    _0x3e80ea.push(
      _0x36dd13 == null
        ? _0x1e11f8.insertOp(_0x2c93f5, z(_0x233fff))
        : _0x1e11f8.replaceOp(_0x2c93f5, z(_0x36dd13), z(_0x233fff)),
    );
}
function Re(_0x4a36b8, _0x458499) {
  var _0x3365be;
  let _0x1a8f5e = [..._0x458499].sort(
      (_0x1f6d0e, _0x3b7502) => _0x1f6d0e - _0x3b7502,
    ),
    _0x4ea282 =
      (((_0x3365be = _0x4a36b8.dataStream) == null
        ? undefined
        : _0x3365be.length) ?? 0) === _0x1a8f5e.length;
  if (!_0x1a8f5e.length && !_0x4ea282) return null;
  let _0x3a3ca6 = new _0x460dbe(),
    _0x3afbd4 = 0;
  if (_0x4ea282) {
    let _0x2f299a = Ve(_0x4a36b8);
    _0x3a3ca6.insert(_0x2f299a.dataStream["length"], _0x2f299a);
  }
  for (let _0x46de9e = 0; _0x46de9e < _0x1a8f5e.length;) {
    let _0x538ac = _0x1a8f5e[_0x46de9e],
      _0x26772f = _0x538ac + 1;
    for (
      ;
      _0x46de9e + 1 < _0x1a8f5e.length &&
      _0x1a8f5e[_0x46de9e + 1] === _0x26772f;
    )
      (_0x46de9e++, _0x26772f++);
    (_0x538ac > _0x3afbd4 && _0x3a3ca6.retain(_0x538ac - _0x3afbd4),
      _0x3a3ca6.delete(_0x26772f - _0x538ac),
      (_0x3afbd4 = _0x26772f),
      _0x46de9e++);
  }
  return _0x2f4008.getInstance().editOp(_0x3a3ca6.serialize(), ["body"]);
}
function ze(_0x4f39d6) {
  var _0x386c08;
  let _0x4993c3 = R(_0x4f39d6);
  return {
    dataStream:
      "" +
      O.COLUMN_START +
      _0x5d83c0.PARAGRAPH +
      _0x5d83c0.SECTION_BREAK +
      O.COLUMN_END,
    paragraphs: [{ startIndex: 1, paragraphId: _0x514db4(_0x4993c3) }],
    sectionBreaks: [
      {
        sectionId: _0x1e7c11(
          new Set(
            (_0x386c08 = _0x4f39d6.sectionBreaks) == null
              ? undefined
              : _0x386c08.map((_0x4d524f) => _0x4d524f.sectionId),
          ),
        ),
        startIndex: 2,
      },
    ],
  };
}
function Be(_0x22a593, _0x3a4c85) {
  let _0x5b7e51 = R(_0x22a593),
    _0x492e03 = Array.from(
      { length: _0x3a4c85.columnCount },
      (_0x5c25fd, _0x4484bc) =>
        _0x3a4c85.columnIds[_0x4484bc] ?? "column-" + (_0x4484bc + 1),
    ),
    _0x5c9490 = O.COLUMN_GROUP_START,
    _0x443ea5 = [];
  for (let _0x2314a3 = 0; _0x2314a3 < _0x3a4c85.columnCount; _0x2314a3++)
    ((_0x5c9490 += "" + O.COLUMN_START + _0x5d83c0.PARAGRAPH + O.COLUMN_END),
      _0x443ea5.push({
        startIndex: _0x5c9490.length - 2,
        paragraphId: _0x514db4(_0x5b7e51),
      }));
  _0x5c9490 += O.COLUMN_GROUP_END;
  let _0x457a41 = _0x5c9490.length - 1;
  return (
    be(_0x22a593, _0x3a4c85.offset) &&
      ((_0x5c9490 += _0x5d83c0.PARAGRAPH),
      _0x443ea5.push({
        startIndex: _0x5c9490.length - 1,
        paragraphId: _0x514db4(_0x5b7e51),
      })),
    {
      dataStream: _0x5c9490,
      paragraphs: _0x443ea5,
      sectionBreaks: [],
      columnGroups: [
        {
          startIndex: 0,
          endIndex: _0x457a41,
          columnGroupId: _0x3a4c85.columnGroupId,
          columns: _0x492e03.map((_0x223972, _0x297d2f) => {
            var _0x19a712;
            return {
              columnId: _0x223972,
              widthRatio:
                ((_0x19a712 = _0x3a4c85.widthRatios) == null
                  ? undefined
                  : _0x19a712[_0x297d2f]) ?? 1,
            };
          }),
          gap: { v: Ue(_0x3a4c85.gap) },
          layout: _0xc4591d.FIXED,
          responsive: _0x30fdd9.STACK,
        },
      ],
    }
  );
}
function Ve(_0xc0f785) {
  var _0x1a99aa;
  return {
    dataStream: "" + _0x5d83c0.PARAGRAPH + _0x5d83c0.SECTION_BREAK,
    paragraphs: [{ startIndex: 0, paragraphId: _0x514db4(R(_0xc0f785)) }],
    sectionBreaks: [
      {
        sectionId: _0x1e7c11(
          new Set(
            (_0x1a99aa = _0xc0f785.sectionBreaks) == null
              ? undefined
              : _0x1a99aa.map((_0x598afd) => _0x598afd.sectionId),
          ),
        ),
        startIndex: 1,
      },
    ],
  };
}
function L(_0x7add1d, _0x5595ac, _0x28c623) {
  let _0x4cd122 = new _0x460dbe();
  return (
    _0x7add1d > 0 && _0x4cd122.retain(_0x7add1d),
    _0x5595ac != null &&
      _0x5595ac.dataStream["length"] &&
      _0x4cd122.insert(_0x5595ac.dataStream["length"], _0x5595ac),
    _0x28c623 > 0 && _0x4cd122.delete(_0x28c623),
    _0x2f4008.getInstance().editOp(_0x4cd122.serialize(), ["body"])
  );
}
function He(_0xee7ae9) {
  return _0xee7ae9.reduce(
    (_0x11a368, _0x4ab138) => _0x2f4008.compose(_0x11a368, _0x4ab138),
    null,
  );
}
function R(_0x2ae6e6) {
  return new Set(
    (_0x2ae6e6.paragraphs ?? []).map((_0x5e1a79) => _0x5e1a79.paragraphId),
  );
}
function Ue(_0x401c43) {
  return typeof _0x401c43 == "number" &&
    Number.isFinite(_0x401c43) &&
    _0x401c43 >= 0
    ? _0x401c43
    : 12;
}
function z(_0x5b721d) {
  return Array.isArray(_0x5b721d)
    ? _0x5b721d.map((_0x13bfee) => z(_0x13bfee))
    : !_0x5b721d || typeof _0x5b721d != "object"
      ? _0x5b721d
      : Object.fromEntries(
          Object.entries(_0x5b721d).map(([_0x30b657, _0x3899a2]) => [
            _0x30b657,
            z(_0x3899a2),
          ]),
        );
}
const We = {
    id: "doc.command.resize-column-group",
    type: _0x1efd46.COMMAND,
    handler: (_0x42bcd9, _0x1b1314) => {
      let _0x5629ce = P(
        _0x42bcd9,
        _0x1b1314 == null ? undefined : _0x1b1314.unitId,
      );
      return !_0x5629ce || !_0x1b1314
        ? false
        : F(
            _0x5629ce,
            Te(
              _0x5629ce.snapshot,
              _0x1b1314.columnGroupId,
              _0x1b1314.widthRatios,
            ),
            [],
          );
    },
  },
  Ge = {
    id: "doc.command.add-column",
    type: _0x1efd46.COMMAND,
    handler: (_0x3974bb, _0x233ee7) => {
      let _0x365a9f = P(
        _0x3974bb,
        _0x233ee7 == null ? undefined : _0x233ee7.unitId,
      );
      if (!_0x365a9f || !_0x233ee7) return false;
      let _0x1fa205 = _0x233ee7.columnId ?? _0x370836(6);
      try {
        let _0x458588 = Ee(
          _0x365a9f.snapshot,
          _0x233ee7.columnGroupId,
          _0x233ee7.targetColumnId,
          _0x233ee7.position,
          _0x1fa205,
        );
        return _0x458588
          ? F(_0x365a9f, _0x458588.actions, [
              {
                startOffset: _0x458588.cursorOffset,
                endOffset: _0x458588.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  Ke = {
    id: "doc.command.delete-column",
    type: _0x1efd46.COMMAND,
    handler: (_0x2bd26e, _0x71d566) => {
      let _0x41e406 = P(
        _0x2bd26e,
        _0x71d566 == null ? undefined : _0x71d566.unitId,
      );
      if (!_0x41e406 || !_0x71d566) return false;
      try {
        let _0x3a28c4 = De(
          _0x41e406.snapshot,
          _0x71d566.columnGroupId,
          _0x71d566.columnId,
        );
        return _0x3a28c4
          ? F(_0x41e406, _0x3a28c4.actions, [
              {
                startOffset: _0x3a28c4.cursorOffset,
                endOffset: _0x3a28c4.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  qe = {
    id: "doc.command.delete-column-group",
    type: _0x1efd46.COMMAND,
    handler: (_0x4e1173, _0x43409f) => {
      let _0x2c3091 = P(
        _0x4e1173,
        _0x43409f == null ? undefined : _0x43409f.unitId,
      );
      if (!_0x2c3091 || !_0x43409f) return false;
      try {
        let _0x3bdb56 = Ae(_0x2c3091.snapshot, _0x43409f.columnGroupId);
        return _0x3bdb56
          ? F(_0x2c3091, _0x3bdb56.actions, [
              {
                startOffset: _0x3bdb56.cursorOffset,
                endOffset: _0x3bdb56.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  Je = {
    id: "doc.command.normalize-column-groups",
    type: _0x1efd46.COMMAND,
    handler: (_0x2a1989, _0x194ea3) => {
      let _0x4b70f2 = P(
        _0x2a1989,
        _0x194ea3 == null ? undefined : _0x194ea3.unitId,
      );
      return _0x4b70f2 ? F(_0x4b70f2, je(_0x4b70f2.snapshot)) : false;
    },
  },
  Ye = {
    id: "doc.command.insert-column-group",
    type: _0x1efd46.COMMAND,
    handler: (_0x5d8c6e, _0x17011f) => {
      let _0x2bac21 = Ze(_0x17011f),
        _0x27e5d8 = P(_0x5d8c6e, _0x2bac21.unitId);
      if (!_0x27e5d8) return false;
      let _0x35722b = et(_0x5d8c6e, _0x27e5d8.unitId, _0x2bac21);
      if (typeof _0x35722b != "number") return false;
      let _0x489554 = B(_0x27e5d8.snapshot, _0x35722b, {
          snapToParagraphEnd: true,
        }),
        _0x4f87a7 = Qe(_0x2bac21),
        _0x5556bd = _0x2bac21.columnGroupId ?? _0x370836(6),
        _0x58248f = Array.from(
          { length: _0x4f87a7 },
          (_0x9c8864, _0x456058) => {
            var _0x155fd2;
            return (
              ((_0x155fd2 = _0x2bac21.columnIds) == null
                ? undefined
                : _0x155fd2[_0x456058]) ?? _0x370836(6)
            );
          },
        );
      try {
        let _0x3ab96b = ke(_0x27e5d8.snapshot, {
          columnGroupId: _0x5556bd,
          columnIds: _0x58248f,
          columnCount: _0x4f87a7,
          offset: _0x489554,
          gap: _0x2bac21.gap,
          widthRatios: _0x2bac21.widthRatios,
        });
        return _0x3ab96b
          ? F(_0x27e5d8, _0x3ab96b.actions, [
              {
                startOffset: _0x3ab96b.cursorOffset,
                endOffset: _0x3ab96b.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  };
function Xe(_0x3baff3, _0x51d43c) {
  return !_0x3baff3 || typeof _0x51d43c != "number"
    ? false
    : M(_0x3baff3, B(_0x3baff3, _0x51d43c));
}
function B(_0x545166, _0x4508ae, _0x173bc4 = {}) {
  let _0x2cbc45 = _0x545166.body;
  if (!(_0x2cbc45 != null && _0x2cbc45.dataStream)) return _0x4508ae;
  if (nt(_0x545166, _0x4508ae)) return _0x4508ae + 1;
  if (!_0x173bc4.snapToParagraphEnd) return _0x4508ae;
  let _0x2f8974 = [...(_0x2cbc45.paragraphs ?? [])]
    .sort((_0x295698, _0x1f1351) => _0x295698.startIndex - _0x1f1351.startIndex)
    .find(
      (_0x393341) =>
        _0x4508ae <= _0x393341.startIndex &&
        !it(_0x2cbc45.dataStream, _0x4508ae, _0x393341.startIndex),
    );
  return _0x2f8974 ? _0x2f8974.startIndex + 1 : _0x4508ae;
}
function Ze(_0xd8bd1d) {
  return typeof _0xd8bd1d == "string" || typeof _0xd8bd1d == "number"
    ? { value: _0xd8bd1d }
    : (_0xd8bd1d ?? {});
}
function Qe(_0x1adcae) {
  var _0x881fee;
  return _0x1adcae.value == null
    ? (_0x1adcae.columnCount ??
        Math.max(
          2,
          ((_0x881fee = _0x1adcae.columnIds) == null
            ? undefined
            : _0x881fee.length) ?? 2,
        ))
    : ($e(_0x1adcae.value) ?? 2);
}
function $e(_0x2a5e57) {
  let _0x2bc3ab = Number(_0x2a5e57);
  return Number.isFinite(_0x2bc3ab)
    ? Math.max(2, Math.min(5, Math.trunc(_0x2bc3ab)))
    : null;
}
function et(_0x5da90f, _0x4ec72d, _0x3ff5af) {
  if (typeof _0x3ff5af.offset == "number") return _0x3ff5af.offset;
  let _0x82f789 = _0xcb533(_0x5da90f, _0x4ec72d);
  if (_0x82f789) return _0x82f789.startOffset;
  let _0x32b75d = tt(_0x5da90f);
  return !_0x32b75d ||
    _0x32b75d.collapsed === false ||
    _0x32b75d.startOffset !== _0x32b75d.endOffset
    ? null
    : _0x32b75d.startOffset;
}
function tt(_0x497b1b) {
  try {
    return _0x497b1b.get(_0x3c7fae).getActiveTextRange() ?? null;
  } catch {
    return null;
  }
}
function nt(_0x5e8566, _0x4d83de) {
  var _0x1157fc;
  let _0x50aeeb =
    (_0x1157fc = _0x5e8566.body) == null ||
    (_0x1157fc = _0x1157fc.dataStream) == null
      ? undefined
      : _0x1157fc[_0x4d83de];
  return (
    (_0x50aeeb === _0x5d83c0.TABLE_END ||
      _0x50aeeb === O.COLUMN_GROUP_END ||
      _0x50aeeb === _0x5d83c0.BLOCK_END) &&
    M(_0x5e8566, _0x4d83de + 1)
  );
}
const rt = new Set([
  _0x5d83c0.BLOCK_START,
  _0x5d83c0.BLOCK_END,
  O.COLUMN_GROUP_START,
  O.COLUMN_START,
  O.COLUMN_END,
  O.COLUMN_GROUP_END,
  _0x5d83c0.TABLE_START,
  _0x5d83c0.TABLE_ROW_START,
  _0x5d83c0.TABLE_CELL_START,
  _0x5d83c0.TABLE_CELL_END,
  _0x5d83c0.TABLE_ROW_END,
  _0x5d83c0.TABLE_END,
]);
function it(_0x5e271a, _0x209782, _0x60cb5e) {
  for (let _0xc26fd2 = _0x209782; _0xc26fd2 <= _0x60cb5e; _0xc26fd2++)
    if (rt.has(_0x5e271a[_0xc26fd2])) return true;
  return false;
}
function at(_0x1f09e5) {
  let _0x1b2762 = A(_0x1f09e5.documentData),
    _0x34c367 = _0x1b2762.body,
    _0x517b39 = k(_0x1b2762, _0x1f09e5.columnGroupId),
    _0x293c9c = _0x517b39 == null ? undefined : _0x517b39.source;
  if (
    !(_0x34c367 != null && _0x34c367.dataStream) ||
    !_0x517b39 ||
    !(_0x293c9c != null && _0x293c9c.columns)
  )
    throw Error(
      "[DocsColumn]: Cannot insert a column into a missing column group.",
    );
  lt(_0x517b39.columns["length"], _0x293c9c.columns["length"]);
  let _0x4e216e = _0x293c9c.columns["findIndex"](
      (_0x5c130a) => _0x5c130a.columnId === _0x1f09e5.targetColumnId,
    ),
    _0x14e1d1 = _0x517b39.columns[_0x4e216e];
  if (_0x4e216e < 0 || !_0x14e1d1)
    throw Error(
      "[DocsColumn]: Cannot insert a column next to an unknown target column.",
    );
  if (_0x293c9c.columns["length"] >= 5)
    throw Error("[DocsColumn]: Cannot add more than five columns.");
  let _0x5a64c0 = _0x1f09e5.position === "left" ? _0x4e216e : _0x4e216e + 1,
    _0x441777 =
      _0x1f09e5.position === "left"
        ? _0x14e1d1.startOffset
        : _0x14e1d1.endOffset + 1,
    _0x322fd = st(ct(_0x34c367)),
    _0x29e97b = _0x322fd.dataStream["length"];
  ((_0x34c367.dataStream =
    "" +
    _0x34c367.dataStream["slice"](0, _0x441777) +
    _0x322fd.dataStream +
    _0x34c367.dataStream["slice"](_0x441777)),
    (_0x34c367.paragraphs = [
      ...V(_0x34c367.paragraphs ?? [], _0x441777, _0x29e97b),
      ..._0x322fd.paragraphs["map"]((_0x3c01b1) => ({
        ..._0x3c01b1,
        startIndex: _0x3c01b1.startIndex + _0x441777,
      })),
    ].sort(
      (_0x5a8b3e, _0x33daaa) => _0x5a8b3e.startIndex - _0x33daaa.startIndex,
    )),
    (_0x34c367.sectionBreaks = [
      ...V(_0x34c367.sectionBreaks ?? [], _0x441777, _0x29e97b),
      ..._0x322fd.sectionBreaks["map"]((_0x9a5303) => ({
        ..._0x9a5303,
        startIndex: _0x9a5303.startIndex + _0x441777,
      })),
    ].sort(
      (_0x45ec26, _0x529954) => _0x45ec26.startIndex - _0x529954.startIndex,
    )),
    (_0x34c367.textRuns = ut(_0x34c367.textRuns ?? [], _0x441777, _0x29e97b)),
    (_0x34c367.customBlocks = V(
      _0x34c367.customBlocks ?? [],
      _0x441777,
      _0x29e97b,
    )),
    (_0x34c367.blockRanges = (_0x34c367.blockRanges ?? []).map((_0xb7fa6c) =>
      _0xd67afe(_0xb7fa6c, _0x441777, _0x29e97b),
    )),
    (_0x34c367.customRanges = (_0x34c367.customRanges ?? []).map((_0x1cc33b) =>
      _0xd67afe(_0x1cc33b, _0x441777, _0x29e97b),
    )),
    (_0x34c367.customDecorations = (_0x34c367.customDecorations ?? []).map(
      (_0x43b5d3) => _0xd67afe(_0x43b5d3, _0x441777, _0x29e97b),
    )),
    (_0x34c367.tables = (_0x34c367.tables ?? []).map((_0x517e1d) =>
      _0x4be491(_0x517e1d, _0x441777, _0x29e97b),
    )),
    (_0x34c367.columnGroups = (_0x34c367.columnGroups ?? []).map((_0x2c95fa) =>
      _0xd67afe(_0x2c95fa, _0x441777, _0x29e97b),
    )));
  let _0x10d169 = ot(_0x34c367, _0x1f09e5.columnGroupId);
  if (!(_0x10d169 != null && _0x10d169.columns))
    throw Error(
      "[DocsColumn]: Cannot update a missing column group after insertion.",
    );
  return (
    (_0x10d169.columns = [
      ..._0x293c9c.columns["slice"](0, _0x5a64c0),
      { columnId: _0x1f09e5.columnId, widthRatio: 1 },
      ..._0x293c9c.columns["slice"](_0x5a64c0),
    ]),
    {
      nextDocumentData: _0x1b2762,
      inserted: {
        columnGroupId: _0x1f09e5.columnGroupId,
        columnId: _0x1f09e5.columnId,
        column: _0x5a64c0,
      },
    }
  );
}
function ot(_0x5dfcb1, _0x22db19) {
  var _0x4aff4c;
  return (_0x4aff4c = _0x5dfcb1.columnGroups) == null
    ? undefined
    : _0x4aff4c.find((_0x13e557) => _0x13e557.columnGroupId === _0x22db19);
}
function st(_0x790b70) {
  return {
    dataStream:
      "" +
      O.COLUMN_START +
      _0x5d83c0.PARAGRAPH +
      _0x5d83c0.SECTION_BREAK +
      O.COLUMN_END,
    paragraphs: [{ startIndex: 1, paragraphId: _0x514db4(_0x790b70) }],
    sectionBreaks: [{ sectionId: _0x1e7c11(new Set()), startIndex: 2 }],
  };
}
function ct(_0x1bfd36) {
  return new Set(
    (_0x1bfd36.paragraphs ?? []).map((_0x4755c1) => _0x4755c1.paragraphId),
  );
}
function lt(_0xe50d8, _0x16a0c8) {
  if (_0xe50d8 !== _0x16a0c8)
    throw Error(
      "[DocsColumn]: Cannot edit a column group with mismatched source and stream columns.",
    );
}
function V(_0x4bf5d7, _0x4e73cb, _0x36fe2b) {
  return _0x4bf5d7.map((_0x5d7784) =>
    _0x5d7784.startIndex >= _0x4e73cb
      ? { ..._0x5d7784, startIndex: _0x5d7784.startIndex + _0x36fe2b }
      : _0x5d7784,
  );
}
function ut(_0x53c146, _0x2742d1, _0x32dfa0) {
  return _0x53c146.map((_0x2ff19b) =>
    _0x2ff19b.st >= _0x2742d1
      ? {
          ..._0x2ff19b,
          st: _0x2ff19b.st + _0x32dfa0,
          ed: _0x2ff19b.ed + _0x32dfa0,
        }
      : _0x2ff19b.ed > _0x2742d1
        ? { ..._0x2ff19b, ed: _0x2ff19b.ed + _0x32dfa0 }
        : _0x2ff19b,
  );
}
function dt(_0x39b761) {
  var _0x483d98;
  let _0x3bb4b3 = _0x39b761.source["columns"],
    _0x494f49 = _0x39b761.separatorIndex;
  if (
    _0x3bb4b3.length < 2 ||
    _0x494f49 < 0 ||
    _0x494f49 >= _0x3bb4b3.length - 1
  )
    return null;
  let _0x5dfa9e = Math.max(
      0,
      ((_0x483d98 = _0x39b761.source["gap"]) == null
        ? undefined
        : _0x483d98.v) ?? 0,
    ),
    _0x55da2b = Math.max(
      0,
      _0x39b761.availableWidth - _0x5dfa9e * (_0x3bb4b3.length - 1),
    ),
    _0x2687e5 = ft(
      _0x3bb4b3.map((_0x51d987) => _0x51d987.widthRatio),
      _0x55da2b,
    ),
    _0x3349f0 = _0x3bb4b3.map((_0x4d064c) => {
      var _0x2224d1;
      return Math.max(
        0,
        ((_0x2224d1 = _0x4d064c.minWidth) == null ? undefined : _0x2224d1.v) ??
          0,
      );
    }),
    _0x2fa5b2 = _0x494f49,
    _0x3a2ce8 = _0x494f49 + 1,
    _0x4bcbde = _0x2687e5[_0x2fa5b2] + _0x2687e5[_0x3a2ce8],
    _0x3a9e3d = Math.min(_0x3349f0[_0x2fa5b2], _0x4bcbde),
    _0x5b4b1f = Math.min(
      _0x3349f0[_0x3a2ce8],
      Math.max(0, _0x4bcbde - _0x3a9e3d),
    ),
    _0x5de4b3 = mt(
      _0x2687e5[_0x2fa5b2] + _0x39b761.delta,
      _0x3a9e3d,
      Math.max(_0x3a9e3d, _0x4bcbde - _0x5b4b1f),
    );
  return (
    (_0x2687e5[_0x2fa5b2] = _0x5de4b3),
    (_0x2687e5[_0x3a2ce8] = _0x4bcbde - _0x5de4b3),
    _0x2687e5
  );
}
function ft(_0x3627ea, _0x135c27) {
  let _0x31b731 =
    _0x3627ea.reduce((_0x472d0e, _0x2d2da9) => _0x472d0e + pt(_0x2d2da9), 0) ||
    _0x3627ea.length;
  return _0x3627ea.map((_0x879cf) => (_0x135c27 * pt(_0x879cf)) / _0x31b731);
}
function pt(_0x5bdcf6) {
  return Math.max(0, _0x5bdcf6 || 0) || 1;
}
function mt(_0x4de74a, _0x1cad4e, _0x3164dc) {
  return Math.min(_0x3164dc, Math.max(_0x1cad4e, _0x4de74a));
}
function ht(_0x30cad4, _0x1d1483, _0x5d3eb6) {
  let {
    docsLeft: _0x57499e = 0,
    pageMarginTop: _0x10b4d5 = 0,
    tableCellInsetX: _0x4e0e70 = 0,
    unitId: _0x9ccbba = "",
  } = _0x1d1483;
  _0x30cad4.forEach((_0x3ca0ab, _0x136a3c) => {
    var _0x3f1d34;
    let _0x18db7f =
        ((_0x3ca0ab.pageHeight === 1 / 0 ? 0 : _0x3ca0ab.pageHeight) +
          _0x10b4d5) *
          _0x136a3c +
        _0x3ca0ab.marginTop,
      _0x23f7bc = _0x3ca0ab.marginLeft;
    (H(
      _0x3ca0ab,
      {
        pageIndex: _0x136a3c,
        pageLeft: _0x23f7bc,
        pageTop: _0x18db7f,
        source: "page",
        getBounds: (_0xc0c3b3, _0x525c20, _0x524880) =>
          yt(_0xc0c3b3, _0x525c20, _0x524880.columns["length"], _0x23f7bc),
      },
      _0x5d3eb6,
    ),
      (_0x3f1d34 = _0x3ca0ab.skeTables) == null ||
        _0x3f1d34.forEach((_0x48ec16, _0x23c722) => {
          _t(
            _0x48ec16,
            _0x23c722,
            _0x136a3c,
            _0x23f7bc,
            _0x18db7f,
            _0x57499e,
            _0x4e0e70,
            _0x9ccbba,
            _0x5d3eb6,
          );
        }),
      vt(
        _0x3ca0ab,
        _0x23f7bc,
        _0x18db7f,
        (_0x49aeb7, _0x784e83, _0xccbe56, _0x6304e9) => {
          var _0x4a9aac;
          (H(
            _0x49aeb7,
            {
              pageIndex: _0x136a3c,
              pageLeft: _0x784e83,
              pageTop: _0xccbe56,
              source: "column",
              getBounds: (_0x5a41a1, _0x517a56) => ({
                lineWidth: Math.max(
                  W(_0x517a56.width),
                  _0x6304e9 - _0x517a56.left,
                ),
                visualLeft: _0x784e83 + _0x517a56.left,
                visualWidth: Math.max(
                  W(_0x517a56.width),
                  _0x6304e9 - _0x517a56.left,
                ),
              }),
            },
            _0x5d3eb6,
          ),
            (_0x4a9aac = _0x49aeb7.skeTables) == null ||
              _0x4a9aac.forEach((_0x4fbe87, _0x2eea2f) => {
                _t(
                  _0x4fbe87,
                  _0x2eea2f,
                  _0x136a3c,
                  _0x784e83,
                  _0xccbe56,
                  _0x57499e,
                  _0x4e0e70,
                  _0x9ccbba,
                  _0x5d3eb6,
                );
              }));
        },
      ));
  });
}
function gt(_0x2f5e3d, _0x39741b = {}) {
  let {
      docsLeft: _0x155236 = 0,
      docsTop: _0x2419a4 = 0,
      pageMarginTop: _0x5bb53d = 0,
      resolveViewport: _0x27c899 = false,
      skeFooters: _0x14ba06,
      skeHeaders: _0x213236,
      tableCellInsetX: _0x3c283b = 0,
      unitId: _0x4367a0 = "",
    } = _0x39741b,
    _0x10ba7c = [];
  return (
    _0x2f5e3d.forEach((_0x9cbad5, _0x38117b) => {
      var _0x4a8d9a, _0x22d9a0;
      let _0x5ad248 =
          ((_0x9cbad5.pageHeight === 1 / 0 ? 0 : _0x9cbad5.pageHeight) +
            _0x5bb53d) *
            _0x38117b +
          _0x9cbad5.marginTop +
          _0x2419a4,
        _0x24bff8 = _0x9cbad5.marginLeft + _0x155236;
      U({
        contexts: _0x10ba7c,
        docsLeft: _0x155236,
        page: _0x9cbad5,
        pageIndex: _0x38117b,
        pageLeft: _0x24bff8,
        pageTop: _0x5ad248,
        rootPage: _0x9cbad5,
        resolveViewport: _0x27c899,
        source: "page",
        tableCellInsetX: _0x3c283b,
        unitId: _0x4367a0,
      });
      let _0x57f049 = _0x5ad248 - _0x9cbad5.marginTop,
        _0x583cb3 = _0x155236 + _0x9cbad5.marginLeft,
        _0x39d8cc =
          _0x9cbad5.headerId == null ||
          _0x213236 == null ||
          (_0x4a8d9a = _0x213236.get(_0x9cbad5.headerId)) == null
            ? undefined
            : _0x4a8d9a.get(_0x9cbad5.pageWidth);
      _0x39d8cc != null &&
        U({
          contexts: _0x10ba7c,
          docsLeft: _0x155236,
          page: _0x39d8cc,
          pageIndex: _0x38117b,
          pageLeft: _0x583cb3,
          pageTop: _0x57f049 + _0x39d8cc.marginTop,
          rootPage: _0x9cbad5,
          resolveViewport: _0x27c899,
          source: "header",
          tableCellInsetX: _0x3c283b,
          unitId: _0x4367a0,
        });
      let _0x5235d3 =
        _0x9cbad5.footerId == null ||
        _0x14ba06 == null ||
        (_0x22d9a0 = _0x14ba06.get(_0x9cbad5.footerId)) == null
          ? undefined
          : _0x22d9a0.get(_0x9cbad5.pageWidth);
      (_0x5235d3 != null &&
        U({
          contexts: _0x10ba7c,
          docsLeft: _0x155236,
          page: _0x5235d3,
          pageIndex: _0x38117b,
          pageLeft: _0x583cb3,
          pageTop:
            _0x57f049 +
            _0x9cbad5.pageHeight -
            _0x5235d3.height -
            _0x5235d3.marginBottom +
            _0x5235d3.marginTop,
          rootPage: _0x9cbad5,
          resolveViewport: _0x27c899,
          source: "footer",
          tableCellInsetX: _0x3c283b,
          unitId: _0x4367a0,
        }),
        vt(
          _0x9cbad5,
          _0x24bff8,
          _0x5ad248,
          (_0x4912a3, _0x25e995, _0x3b3733) => {
            U({
              contexts: _0x10ba7c,
              docsLeft: _0x155236,
              page: _0x4912a3,
              pageIndex: _0x38117b,
              pageLeft: _0x25e995,
              pageTop: _0x3b3733,
              rootPage: _0x9cbad5,
              resolveViewport: _0x27c899,
              source: "column",
              tableCellInsetX: _0x3c283b,
              unitId: _0x4367a0,
            });
          },
        ));
    }),
    _0x10ba7c
  );
}
function _t(
  _0x379b3a,
  _0x5c08d9,
  _0x12e77b,
  _0x19df02,
  _0x2abefc,
  _0x44b880,
  _0x49b995,
  _0x3bb7d5,
  _0x54228c,
) {
  let _0x4b553b = _0x41e7c7(_0x3bb7d5, Ct(_0x379b3a.tableId ?? _0x5c08d9)),
    _0x4807a6 = xt(_0x4b553b),
    _0x4dca0d = St(_0x19df02, _0x379b3a.left, _0x4b553b, _0x44b880),
    _0xd6c851 =
      _0x4dca0d + (_0x4807a6 ? _0x4b553b.viewportWidth : _0x379b3a.width),
    _0x56affc = _0x4807a6 ? _0x4b553b.scrollLeft : 0,
    _0x2dfffc = _0x19df02 + _0x379b3a.left,
    _0x52df92 = _0x2abefc + _0x379b3a.top;
  _0x379b3a.rows["forEach"]((_0x296c70) => {
    _0x296c70.cells["forEach"]((_0xf4534c) => {
      let _0x2ee534 = _0xf4534c.marginLeft ?? 0,
        _0x1c6d35 = _0xf4534c.marginRight ?? 0,
        _0x36d4a7 = _0xf4534c.marginTop ?? 0,
        _0x5da3f9 = _0xf4534c.pageWidth ?? 0,
        _0x20b8a0 = _0x2dfffc + (_0xf4534c.left ?? 0) - _0x56affc + _0x2ee534,
        _0x29f589 = _0x52df92 + (_0x296c70.top ?? 0) + _0x36d4a7,
        _0x548872 = _0x20b8a0 + _0x5da3f9 - _0x2ee534 - _0x1c6d35,
        _0x5750e6 = _0x20b8a0 + _0x49b995,
        _0x452762 = _0x548872 - _0x49b995,
        _0x9a425c = Math.max(0, _0x452762 - _0x5750e6),
        _0x4e7f53 = _0x4dca0d,
        _0x207ea8 = Math.min(_0x548872, _0xd6c851);
      _0x9a425c <= 0 ||
        Math.min(_0x452762, _0x207ea8) <= Math.max(_0x5750e6, _0x4e7f53) ||
        H(
          _0xf4534c,
          {
            clipLeft: _0x4e7f53,
            clipRight: _0x207ea8,
            pageIndex: _0x12e77b,
            pageLeft: _0x20b8a0,
            pageTop: _0x29f589,
            source: "table",
            visualLeft: _0x5750e6,
            visualWidth: _0x9a425c,
          },
          _0x54228c,
        );
    });
  });
}
function H(_0x50d434, _0x19bb65, _0x4ecd3c) {
  _0x50d434.sections["forEach"]((_0x437ea2) => {
    _0x437ea2.columns["forEach"]((_0x16d51c) => {
      _0x16d51c.lines["forEach"]((_0x5c97dd) => {
        var _0x1d9e15;
        let _0xacd5be =
          (_0x1d9e15 = _0x19bb65.getBounds) == null
            ? undefined
            : _0x1d9e15.call(_0x19bb65, _0x50d434, _0x16d51c, _0x437ea2);
        _0x4ecd3c({
          clipLeft: _0x19bb65.clipLeft,
          clipRight: _0x19bb65.clipRight,
          column: _0x16d51c,
          line: _0x5c97dd,
          lineWidth:
            (_0xacd5be == null ? undefined : _0xacd5be.lineWidth) ??
            (_0xacd5be == null ? undefined : _0xacd5be.visualWidth) ??
            W(_0x16d51c.width),
          page: _0x50d434,
          pageIndex: _0x19bb65.pageIndex,
          pageLeft: _0x19bb65.pageLeft,
          section: _0x437ea2,
          sectionTop: _0x19bb65.pageTop + _0x437ea2.top,
          source: _0x19bb65.source,
          visualLeft:
            (_0xacd5be == null ? undefined : _0xacd5be.visualLeft) ??
            _0x19bb65.visualLeft,
          visualWidth:
            (_0xacd5be == null ? undefined : _0xacd5be.visualWidth) ??
            _0x19bb65.visualWidth,
        });
      });
    });
  });
}
function U(_0x31daab) {
  var _0x2b63f9;
  let {
    contexts: _0x10d0f8,
    docsLeft: _0x2bb0f9,
    page: _0x4e9e59,
    pageIndex: _0x3c8048,
    pageLeft: _0x5b4303,
    pageTop: _0x2370c9,
    resolveViewport: _0x28e169,
    rootPage: _0x286c21,
    source: _0x47cd0f,
    tableCellInsetX: _0x2611f5,
    unitId: _0x17d937,
  } = _0x31daab;
  (_0x2b63f9 = _0x4e9e59.skeTables) == null ||
    _0x2b63f9.forEach((_0xa7904a, _0x4ca7a6) => {
      let _0x1921d9 = _0xa7904a.tableId ?? _0x4ca7a6,
        _0x4a4282 = _0x5b4303 + _0xa7904a.left,
        _0x2f5177 = _0x2370c9 + _0xa7904a.top,
        _0x48573d = Ct(_0x1921d9),
        _0x24140a = _0x28e169 ? _0x41e7c7(_0x17d937, _0x48573d) : null,
        _0x2e7ef6 = xt(_0x24140a),
        _0x154f01 = St(_0x5b4303, _0xa7904a.left, _0x24140a, _0x2bb0f9),
        _0x493cbf =
          _0x154f01 + (_0x2e7ef6 ? _0x24140a.viewportWidth : _0xa7904a.width),
        _0x31ffe9 = _0x2e7ef6 ? _0x24140a.scrollLeft : 0,
        _0x5713de = [];
      (_0xa7904a.rows["forEach"]((_0x57371d, _0x2f1343) => {
        _0x57371d.cells["forEach"]((_0x1c8a16, _0x48458b) => {
          if (_0x1c8a16.isMergedCellCovered) return;
          let _0x826a47 = _0x1c8a16.marginLeft ?? 0,
            _0x42900a = _0x1c8a16.marginRight ?? 0,
            _0x1e9875 = _0x1c8a16.marginTop ?? 0,
            _0x4225fc = _0x1c8a16.marginBottom ?? 0,
            _0x28150b = _0x1c8a16.pageWidth ?? 0,
            _0x16e3f8 = _0x1c8a16.pageHeight ?? 0,
            _0x17cf4f = _0x2f5177 + (_0x57371d.top ?? 0) + _0x1e9875,
            _0x406b01 =
              _0x4a4282 + (_0x1c8a16.left ?? 0) - _0x31ffe9 + _0x826a47,
            _0xde5b41 = _0x406b01 + _0x28150b - _0x826a47 - _0x42900a,
            _0x33deac = _0x406b01 + _0x2611f5,
            _0x1a8054 = _0xde5b41 - _0x2611f5,
            _0x59a319 = Math.max(0, _0x1a8054 - _0x33deac),
            _0x2be0f0 = _0x154f01,
            _0x5dfdef = Math.min(_0xde5b41, _0x493cbf);
          _0x59a319 <= 0 ||
            Math.min(_0x1a8054, _0x5dfdef) <= Math.max(_0x33deac, _0x2be0f0) ||
            _0x5713de.push({
              cell: _0x1c8a16,
              cellRect: {
                bottom: _0x17cf4f + _0x16e3f8 - _0x4225fc - _0x1e9875,
                left: _0x406b01,
                right: _0xde5b41,
                top: _0x17cf4f,
              },
              clipLeft: _0x2be0f0,
              clipRight: _0x5dfdef,
              columnIndex: _0x48458b,
              pageLeft: _0x406b01,
              pageTop: _0x17cf4f,
              row: _0x57371d,
              rowIndex: _0x2f1343,
              visualLeft: _0x33deac,
              visualWidth: _0x59a319,
            });
        });
      }),
        _0x10d0f8.push({
          cells: _0x5713de,
          page: _0x4e9e59,
          pageIndex: _0x3c8048,
          pageLeft: _0x5b4303,
          pageTop: _0x2370c9,
          rootPage: _0x286c21,
          source: _0x47cd0f,
          table: _0xa7904a,
          tableId: _0x1921d9,
          tableRect: {
            bottom: _0x2f5177 + _0xa7904a.height,
            left: _0x4a4282,
            right: _0x4a4282 + _0xa7904a.width,
            top: _0x2f5177,
          },
        }));
    });
}
function vt(_0x194ded, _0xd64df0, _0x4e886f, _0x24e132) {
  var _0x38107a;
  (_0x38107a = _0x194ded.skeColumnGroups) == null ||
    _0x38107a.forEach((_0x113e09) => {
      _0x113e09.columns["forEach"]((_0x805e96) => {
        let _0x1ed1a2 = Math.max(
          0,
          (_0x805e96.width ?? _0x805e96.page["pageWidth"] ?? 0) -
            _0x805e96.page["marginLeft"] -
            _0x805e96.page["marginRight"],
        );
        _0x24e132(
          _0x805e96.page,
          _0xd64df0 +
            _0x113e09.left +
            _0x805e96.left +
            _0x805e96.page["marginLeft"],
          _0x4e886f +
            _0x113e09.top +
            _0x805e96.top +
            _0x805e96.page["marginTop"],
          _0x1ed1a2,
        );
      });
    });
}
function yt(_0x51026e, _0x389f5d, _0x254212, _0x1671e3) {
  if (_0x254212 !== 1 || !Number.isFinite(_0x51026e.pageWidth)) return;
  let _0x3790a2 = _0x1671e3 + _0x389f5d.left,
    _0x5b0f08 = _0x51026e.pageWidth - _0x51026e.marginRight,
    _0x5cb04b = Math.max(0, _0x5b0f08 - _0x3790a2),
    _0x185a0f = Math.max(
      0,
      _0x51026e.pageWidth - _0x51026e.marginLeft - _0x51026e.marginRight,
    );
  return _0x5cb04b > 0
    ? { lineWidth: _0x185a0f, visualLeft: _0x3790a2, visualWidth: _0x5cb04b }
    : undefined;
}
function W(_0x2ae204) {
  return Number.isFinite(_0x2ae204) ? _0x2ae204 : 0;
}
function bt(_0x681f98) {
  return (
    (_0x681f98.leadingInsetLeft ?? 0) +
    _0x681f98.contentWidth +
    (_0x681f98.trailingInsetRight ?? 0)
  );
}
function xt(_0x5790a3) {
  return _0x5790a3 != null && bt(_0x5790a3) > _0x5790a3.viewportWidth;
}
function St(_0x2a429b, _0x594162, _0x57b7f6, _0x22ef71) {
  let _0x31ea3d = _0x57b7f6 == null ? undefined : _0x57b7f6.viewportLeft;
  return _0x31ea3d == null ? _0x2a429b + _0x594162 : _0x31ea3d - _0x22ef71;
}
function Ct(_0x49ca51) {
  return _0x49ca51.includes("#-#") ? _0x49ca51.split("#-#")[0] : _0x49ca51;
}
function wt(_0x5c7951) {
  let _0x2f1217 = A(_0x5c7951),
    _0x57272a = _0x2f1217.body;
  if (!_0x57272a) return { nextDocumentData: _0x2f1217, changed: false };
  _0x57272a.dataStream ??= "";
  let _0x3be04c = Tt(_0x2f1217);
  _0x3be04c = Et(_0x2f1217) || _0x3be04c;
  let _0x464cd3 = _0x57272a.columnGroups ?? [];
  if (_0x464cd3.length === 0)
    return (
      (_0x3be04c = Nt(_0x2f1217) || _0x3be04c),
      { nextDocumentData: _0x2f1217, changed: _0x3be04c }
    );
  for (let _0x403ec9 of _0x464cd3)
    _0x3be04c = Pt(_0x403ec9, _0x57272a.dataStream) || _0x3be04c;
  return (
    (_0x3be04c = Nt(_0x2f1217) || _0x3be04c),
    { nextDocumentData: _0x2f1217, changed: _0x3be04c }
  );
}
function Tt(_0x190169) {
  let _0x3c0268 = _0x190169.body,
    _0x51c562 = Dt(
      (_0x3c0268 == null ? undefined : _0x3c0268.columnGroups) ?? [],
    );
  return !(_0x3c0268 != null && _0x3c0268.dataStream) || _0x51c562.length === 0
    ? false
    : (_0x51c562
        .sort(
          (_0x3a79dc, _0x1c2da4) => _0x1c2da4.startIndex - _0x3a79dc.startIndex,
        )
        .forEach((_0x590997) => Ot(_0x190169, _0x590997)),
      true);
}
function Et(_0x669cd4) {
  let _0xc59104 = _0x669cd4.body,
    _0x303342 = (_0xc59104 == null ? undefined : _0xc59104.columnGroups) ?? [];
  if (!(_0xc59104 != null && _0xc59104.dataStream) || _0x303342.length === 0)
    return false;
  let _0x1c0f72 = _0x303342.filter((_0x76d333) =>
    zt(_0xc59104.dataStream, _0x76d333.startIndex, _0x76d333.endIndex),
  );
  return _0x1c0f72.length === 0
    ? false
    : (_0x1c0f72
        .sort(
          (_0x7d8ac6, _0x39b9ed) => _0x39b9ed.startIndex - _0x7d8ac6.startIndex,
        )
        .forEach((_0x596fed) => kt(_0x669cd4, _0x596fed)),
      true);
}
function Dt(_0x1e90f9) {
  return (_0x1e90f9 ?? []).filter((_0x36c3f1) =>
    (_0x1e90f9 ?? []).some(
      (_0x43f8e0) =>
        _0x43f8e0.columnGroupId !== _0x36c3f1.columnGroupId &&
        _0x36c3f1.startIndex > _0x43f8e0.startIndex &&
        _0x36c3f1.endIndex < _0x43f8e0.endIndex,
    ),
  );
}
function Ot(_0x3135d3, _0x3ac5c9) {
  kt(_0x3135d3, _0x3ac5c9);
}
function kt(_0x2d88b3, _0x4b11e8) {
  let _0x4a6ad8 = _0x2d88b3.body,
    _0x2c1525 = _0x312fa5(_0x4b11e8).endOffset,
    _0x1d11a0 = At(_0x4a6ad8.dataStream, _0x4b11e8.startIndex, _0x2c1525);
  ((_0x4a6ad8.dataStream = jt(_0x4a6ad8.dataStream, _0x1d11a0)),
    (_0x4a6ad8.paragraphs = G(_0x4a6ad8.paragraphs ?? [], _0x1d11a0)),
    (_0x4a6ad8.sectionBreaks = G(_0x4a6ad8.sectionBreaks ?? [], _0x1d11a0)),
    (_0x4a6ad8.customBlocks = G(_0x4a6ad8.customBlocks ?? [], _0x1d11a0)),
    (_0x4a6ad8.blockRanges = K(_0x4a6ad8.blockRanges ?? [], _0x1d11a0)),
    (_0x4a6ad8.customRanges = K(_0x4a6ad8.customRanges ?? [], _0x1d11a0)),
    (_0x4a6ad8.customDecorations = K(
      _0x4a6ad8.customDecorations ?? [],
      _0x1d11a0,
    )),
    (_0x4a6ad8.tables = K(_0x4a6ad8.tables ?? [], _0x1d11a0)),
    (_0x4a6ad8.columnGroups = K(
      (_0x4a6ad8.columnGroups ?? []).filter(
        (_0xcd5049) => _0xcd5049.columnGroupId !== _0x4b11e8.columnGroupId,
      ),
      _0x1d11a0,
    )),
    (_0x4a6ad8.textRuns = Mt(_0x4a6ad8.textRuns ?? [], _0x1d11a0)));
}
function At(_0x3d2aa7, _0x148a62, _0x50a482) {
  let _0x47c04b = new Set([
      O.COLUMN_GROUP_START,
      O.COLUMN_START,
      O.COLUMN_END,
      O.COLUMN_GROUP_END,
    ]),
    _0x7d182d = [];
  for (let _0x42f965 = _0x148a62; _0x42f965 < _0x50a482; _0x42f965++)
    _0x47c04b.has(_0x3d2aa7[_0x42f965]) && _0x7d182d.push(_0x42f965);
  return _0x7d182d;
}
function jt(_0x1a0c5e, _0x1d194d) {
  let _0x30989e = new Set(_0x1d194d),
    _0x442845 = "";
  for (let _0x52f7d3 = 0; _0x52f7d3 < _0x1a0c5e.length; _0x52f7d3++)
    _0x30989e.has(_0x52f7d3) || (_0x442845 += _0x1a0c5e[_0x52f7d3]);
  return _0x442845;
}
function G(_0x1cbad9, _0x5a6c0d) {
  return _0x1cbad9
    .map((_0x487106) => ({
      ..._0x487106,
      startIndex: q(_0x487106.startIndex, _0x5a6c0d),
    }))
    .sort(
      (_0xf17b28, _0x34848b) => _0xf17b28.startIndex - _0x34848b.startIndex,
    );
}
function K(_0x430b8b, _0x3f54b9) {
  return _0x430b8b
    .map((_0x3ff9e0) => ({
      ..._0x3ff9e0,
      startIndex: q(_0x3ff9e0.startIndex, _0x3f54b9),
      endIndex: q(_0x3ff9e0.endIndex, _0x3f54b9),
    }))
    .sort(
      (_0x4d8d59, _0x34c702) => _0x4d8d59.startIndex - _0x34c702.startIndex,
    );
}
function Mt(_0x2280a4, _0x3ec808) {
  return _0x2280a4
    .map((_0x164966) => ({
      ..._0x164966,
      st: q(_0x164966.st, _0x3ec808),
      ed: q(_0x164966.ed, _0x3ec808),
    }))
    .sort((_0x1afb0a, _0x123115) => _0x1afb0a.st - _0x123115.st);
}
function q(_0x3048b4, _0x8c5105) {
  return (
    _0x3048b4 - _0x8c5105.filter((_0x162876) => _0x162876 < _0x3048b4).length
  );
}
function Nt(_0xb0fb7) {
  let _0x4e300b = _0xb0fb7.body;
  return !_0x4e300b || _0x4e300b.dataStream["length"] > 0
    ? false
    : ((_0x4e300b.dataStream =
        "" + _0x5d83c0.PARAGRAPH + _0x5d83c0.SECTION_BREAK),
      (_0x4e300b.paragraphs = [
        {
          startIndex: 0,
          paragraphId: _0x514db4(
            new Set(
              (_0x4e300b.paragraphs ?? []).map(
                (_0x5ced70) => _0x5ced70.paragraphId,
              ),
            ),
          ),
        },
      ]),
      (_0x4e300b.sectionBreaks = [
        { sectionId: _0x1e7c11(new Set()), startIndex: 1 },
      ]),
      true);
}
function Pt(_0x47e324, _0x4dd2ac) {
  var _0x2f82f9;
  let _0x28ef3a = Rt(_0x4dd2ac, _0x47e324.startIndex, _0x47e324.endIndex);
  if (_0x28ef3a === 0) return false;
  let _0x1049e2 = Ft(
      _0x47e324.columnGroupId,
      _0x47e324.columns ?? [],
      _0x28ef3a,
    ),
    _0xd939ce = Lt(_0x47e324.gap),
    _0x305c8a = !Bt(_0x47e324.columns ?? [], _0x1049e2),
    _0x48badf =
      ((_0x2f82f9 = _0x47e324.gap) == null ? undefined : _0x2f82f9.v) !==
      _0xd939ce.v,
    _0x17dfad = _0x47e324.layout == null,
    _0xaefc7c = _0x47e324.responsive == null;
  return !_0x305c8a && !_0x48badf && !_0x17dfad && !_0xaefc7c
    ? false
    : ((_0x47e324.columns = _0x1049e2),
      (_0x47e324.gap = _0xd939ce),
      (_0x47e324.layout ??= _0xc4591d.FIXED),
      (_0x47e324.responsive ??= _0x30fdd9.STACK),
      true);
}
function Ft(_0x2ebc7f, _0x44fd68, _0x573e01) {
  return Array.from({ length: _0x573e01 }, (_0xf8613b, _0x48a4d7) => {
    let _0x23b3b7 = _0x44fd68[_0x48a4d7];
    return _0x23b3b7
      ? { ..._0x23b3b7, widthRatio: It(_0x23b3b7.widthRatio) }
      : { columnId: _0x2ebc7f + "-column-" + (_0x48a4d7 + 1), widthRatio: 1 };
  });
}
function It(_0x130eba) {
  return Number.isFinite(_0x130eba) && _0x130eba > 0 ? _0x130eba : 1;
}
function Lt(_0x1d4b55) {
  return Number.isFinite(_0x1d4b55 == null ? undefined : _0x1d4b55.v) &&
    _0x1d4b55.v >= 0
    ? { v: _0x1d4b55.v }
    : { v: 12 };
}
function Rt(_0x1e857c, _0x40c136, _0x5c5329) {
  let _0x2d36c0 = _0x312fa5({
      startIndex: _0x40c136,
      endIndex: _0x5c5329,
    }).endOffset,
    _0x55405d = 0;
  for (let _0x38ee64 = _0x40c136; _0x38ee64 < _0x2d36c0; _0x38ee64++)
    _0x1e857c[_0x38ee64] === O.COLUMN_START && _0x55405d++;
  return _0x55405d;
}
function zt(_0x5b00f9, _0x1ec75b, _0x33ce0c) {
  if (
    _0x5b00f9[_0x1ec75b] !== O.COLUMN_GROUP_START ||
    _0x5b00f9[_0x33ce0c] !== O.COLUMN_GROUP_END
  )
    return true;
  let _0x54c8e2 = _0x312fa5({
      startIndex: _0x1ec75b,
      endIndex: _0x33ce0c,
    }).endOffset,
    _0x997cbb = -1,
    _0x30747a = 0;
  for (let _0x136e4a = _0x1ec75b; _0x136e4a < _0x54c8e2; _0x136e4a++) {
    let _0x13303c = _0x5b00f9[_0x136e4a];
    if (_0x13303c === O.COLUMN_START) {
      if (_0x997cbb >= 0) return true;
      _0x997cbb = _0x136e4a;
      continue;
    }
    if (_0x13303c === O.COLUMN_END) {
      if (_0x997cbb < 0) return true;
      (_0x30747a++, (_0x997cbb = -1));
    }
  }
  return _0x997cbb >= 0 || _0x30747a < 2 || _0x30747a > 5;
}
function Bt(_0xcf3120, _0x2713bb) {
  return (
    _0xcf3120.length === _0x2713bb.length &&
    _0xcf3120.every((_0x59ce86, _0x4bb52e) => {
      let _0x1f27c5 = _0x2713bb[_0x4bb52e];
      return (
        _0x59ce86.columnId === _0x1f27c5.columnId &&
        _0x59ce86.widthRatio === _0x1f27c5.widthRatio &&
        _0x14d5fb.diffValue(_0x59ce86.minWidth, _0x1f27c5.minWidth)
      );
    })
  );
}
function Vt(_0x4837c7, _0x1a7e31 = {}) {
  var _0x4504e4;
  let _0xd60af8 = wt(_0x4837c7).nextDocumentData,
    _0x57e5e4 = A(_0xd60af8),
    _0x2befda = _0x57e5e4.body,
    _0x1459d7 = _0xd60af8.body,
    _0x3525fd = [
      ...((_0x1459d7 == null ? undefined : _0x1459d7.columnGroups) ?? []),
    ].sort(
      (_0x575c4f, _0x5e4b69) => _0x575c4f.startIndex - _0x5e4b69.startIndex,
    );
  if (
    !_0x2befda ||
    !_0x1459d7 ||
    !Ht(_0x2befda.dataStream, _0x1459d7.dataStream, _0x3525fd)
  )
    return { nextDocumentData: _0x57e5e4, tableIdsByColumnGroupId: {} };
  let _0x14c873 = {},
    _0x12177f = new Set([
      ...Object.keys(_0xd60af8.tableSource ?? {}),
      ...(
        ((_0x4504e4 = _0xd60af8.body) == null ? undefined : _0x4504e4.tables) ??
        []
      ).map((_0x703a1f) => _0x703a1f.tableId),
    ]),
    _0x297cb2 = Ut(_0x1459d7.dataStream, _0x3525fd),
    _0x31aee0 = _0x3525fd.map((_0x39181c) => {
      let _0x3dd3a6 = Xt(
        _0x39181c.columnGroupId,
        _0x12177f,
        _0x1a7e31.tableIdFactory,
      );
      return (
        (_0x14c873[_0x39181c.columnGroupId] = _0x3dd3a6),
        {
          startIndex: J(_0x39181c.startIndex, _0x3525fd),
          endIndex: J(Gt(_0x39181c), _0x3525fd),
          tableId: _0x3dd3a6,
        }
      );
    });
  return (
    (_0x2befda.dataStream = _0x297cb2),
    (_0x2befda.paragraphs = $t(_0x2befda.paragraphs ?? [], _0x3525fd)),
    (_0x2befda.sectionBreaks = $t(_0x2befda.sectionBreaks ?? [], _0x3525fd)),
    (_0x2befda.customBlocks = $t(_0x2befda.customBlocks ?? [], _0x3525fd)),
    (_0x2befda.textRuns = en(_0x2befda.textRuns ?? [], _0x3525fd)),
    (_0x2befda.blockRanges = Y(_0x2befda.blockRanges ?? [], _0x3525fd)),
    (_0x2befda.customRanges = Y(_0x2befda.customRanges ?? [], _0x3525fd)),
    (_0x2befda.customDecorations = Y(
      _0x2befda.customDecorations ?? [],
      _0x3525fd,
    )),
    (_0x2befda.tables = [
      ...Y(_0x2befda.tables ?? [], _0x3525fd),
      ..._0x31aee0,
    ].sort(
      (_0x49360b, _0x6f6b44) => _0x49360b.startIndex - _0x6f6b44.startIndex,
    )),
    (_0x2befda.columnGroups = []),
    (_0x57e5e4.tableSource = {
      ..._0x57e5e4.tableSource,
      ...Object.fromEntries(
        _0x3525fd.map((_0x53a945) => [
          _0x14c873[_0x53a945.columnGroupId],
          Kt(_0xd60af8, _0x53a945, _0x14c873[_0x53a945.columnGroupId]),
        ]),
      ),
    }),
    { nextDocumentData: _0x57e5e4, tableIdsByColumnGroupId: _0x14c873 }
  );
}
function Ht(_0x17085f, _0x268a06, _0x5af9c8) {
  return !!(_0x17085f && _0x268a06 && _0x5af9c8.length > 0);
}
function Ut(_0x453d0d, _0x235354) {
  let _0x474671 = 0,
    _0x2bc50b = "";
  return (
    _0x235354.forEach((_0x3aa38d) => {
      ((_0x2bc50b += _0x453d0d.slice(_0x474671, _0x3aa38d.startIndex)),
        (_0x2bc50b += Wt(_0x453d0d, _0x3aa38d)),
        (_0x474671 = Gt(_0x3aa38d)));
    }),
    _0x2bc50b + _0x453d0d.slice(_0x474671)
  );
}
function Wt(_0x4e592c, _0x479fcd) {
  let _0x314276 = { ..._0x5d83c0, ...O },
    _0x4a302f = "" + _0x314276.TABLE_START + _0x314276.TABLE_ROW_START,
    _0x4d4452 = Gt(_0x479fcd);
  for (
    let _0x203b7d = _0x479fcd.startIndex;
    _0x203b7d < _0x4d4452;
    _0x203b7d++
  ) {
    let _0x309317 = _0x4e592c[_0x203b7d];
    if (
      _0x309317 !== _0x314276.COLUMN_GROUP_START &&
      _0x309317 !== _0x314276.COLUMN_GROUP_END
    ) {
      if (_0x309317 === _0x314276.COLUMN_START) {
        _0x4a302f += _0x314276.TABLE_CELL_START;
        continue;
      }
      if (_0x309317 === _0x314276.COLUMN_END) {
        _0x4a302f += _0x314276.TABLE_CELL_END;
        continue;
      }
      _0x4a302f += _0x309317;
    }
  }
  return "" + _0x4a302f + _0x314276.TABLE_ROW_END + _0x314276.TABLE_END;
}
function Gt(_0x22aeb4) {
  return _0x312fa5(_0x22aeb4).endOffset;
}
function Kt(_0x29559e, _0x567ab8, _0x5ef43e) {
  var _0x46abe8;
  let _0x313f9b = _0x567ab8.columns ?? [],
    _0x4d62eb = Math.max(
      1,
      _0x313f9b.length,
      Zt(
        ((_0x46abe8 = _0x29559e.body) == null
          ? undefined
          : _0x46abe8.dataStream) ?? "",
        _0x567ab8,
      ),
    ),
    _0x12092c = Qt(_0x29559e),
    _0x547b49 = Array.from({ length: _0x4d62eb }, (_0x39d632, _0x3a3808) => {
      var _0x2009d7;
      return qt(
        (_0x2009d7 = _0x313f9b[_0x3a3808]) == null
          ? undefined
          : _0x2009d7.widthRatio,
      );
    }),
    _0x399d74 =
      _0x547b49.reduce((_0x40afdf, _0x5206b4) => _0x40afdf + _0x5206b4, 0) ||
      _0x4d62eb,
    _0x5c5643 = Array.from({ length: _0x4d62eb }, (_0x62f8ff, _0x1b71ac) => {
      let _0x432560 = _0x547b49[_0x1b71ac];
      return Yt((_0x12092c * _0x432560) / _0x399d74);
    });
  return {
    tableRows: [
      {
        tableCells: Array.from({ length: _0x4d62eb }, () => Jt()),
        trHeight: { val: { v: 30 }, hRule: _0x1692fb.AUTO },
      },
    ],
    tableColumns: _0x5c5643,
    tableId: _0x5ef43e,
    align: _0x14bb59.START,
    indent: { v: 0 },
    textWrap: _0x4d50aa.NONE,
    position: {
      positionH: { relativeFrom: _0x406972.PAGE, posOffset: 0 },
      positionV: { relativeFrom: _0x2ab217.PAGE, posOffset: 0 },
    },
    dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
    cellMargin: {
      start: { v: 10 },
      end: { v: 10 },
      top: { v: 5 },
      bottom: { v: 5 },
    },
    size: { type: _0x16ddda.UNSPECIFIED, width: { v: _0x12092c } },
  };
}
function qt(_0xd18c98) {
  return Number.isFinite(_0xd18c98) && (_0xd18c98 ?? 0) > 0 ? _0xd18c98 : 1;
}
function Jt() {
  return {
    margin: {
      start: { v: 10 },
      end: { v: 10 },
      top: { v: 5 },
      bottom: { v: 5 },
    },
  };
}
function Yt(_0x1b362f) {
  return { size: { type: _0x16ddda.SPECIFIED, width: { v: _0x1b362f } } };
}
function Xt(_0x231cae, _0xfb6a7c, _0x5da07f) {
  let _0x58d3f2 =
      (_0x5da07f == null ? undefined : _0x5da07f(_0x231cae)) ??
      _0x231cae + "-table",
    _0x5ba252 = _0x58d3f2,
    _0x1dbf6d = 1;
  for (; _0xfb6a7c.has(_0x5ba252);) _0x5ba252 = _0x58d3f2 + "-" + _0x1dbf6d++;
  return (_0xfb6a7c.add(_0x5ba252), _0x5ba252);
}
function Zt(_0xdebbec, _0x43a48f) {
  let _0x4ef374 = 0;
  for (
    let _0x5acb82 = _0x43a48f.startIndex;
    _0x5acb82 < _0x43a48f.endIndex;
    _0x5acb82++
  )
    _0xdebbec[_0x5acb82] === O.COLUMN_START && _0x4ef374++;
  return _0x4ef374;
}
function Qt(_0x1520a7) {
  var _0x5a0b45, _0x446d38, _0x51d7c9;
  let _0x2dd4ba =
      (_0x5a0b45 = _0x1520a7.documentStyle) == null
        ? undefined
        : _0x5a0b45.pageSize,
    _0x45d935 = (_0x2dd4ba == null ? undefined : _0x2dd4ba.width) ?? 0,
    _0x5e9b42 =
      ((_0x446d38 = _0x1520a7.documentStyle) == null
        ? undefined
        : _0x446d38.marginLeft) ?? 0,
    _0x3eddfe =
      ((_0x51d7c9 = _0x1520a7.documentStyle) == null
        ? undefined
        : _0x51d7c9.marginRight) ?? 0;
  return Math.max(0, _0x45d935 - _0x5e9b42 - _0x3eddfe);
}
function J(_0x1945e9, _0x2b8f33) {
  return (
    _0x1945e9 +
    _0x2b8f33.reduce(
      (_0x4117fb, _0x4b9a4b) =>
        _0x1945e9 <= _0x4b9a4b.startIndex
          ? _0x4117fb
          : _0x4117fb + (_0x1945e9 < _0x4b9a4b.endIndex ? 1 : 2),
      0,
    )
  );
}
function $t(_0x35d261, _0x3836a7) {
  return _0x35d261.map((_0xe77d82) => ({
    ..._0xe77d82,
    startIndex: J(_0xe77d82.startIndex, _0x3836a7),
  }));
}
function Y(_0x3984cd, _0xb129ee) {
  return _0x3984cd.map((_0x286241) => ({
    ..._0x286241,
    startIndex: J(_0x286241.startIndex, _0xb129ee),
    endIndex: J(_0x286241.endIndex, _0xb129ee),
  }));
}
function en(_0xadfcb, _0x1afa19) {
  return _0xadfcb.map((_0x18fdfc) => ({
    ..._0x18fdfc,
    st: J(_0x18fdfc.st, _0x1afa19),
    ed: J(_0x18fdfc.ed, _0x1afa19),
  }));
}
const tn = new Set([
  O.COLUMN_GROUP_START,
  O.COLUMN_START,
  O.COLUMN_END,
  O.COLUMN_GROUP_END,
]);
function nn(_0x221a1e, _0x409187) {
  return _0x221a1e.columns["some"](
    (_0x299805) =>
      _0x409187 > _0x299805.startOffset && _0x409187 < _0x299805.endOffset,
  );
}
function rn(_0xe09990, _0x296beb) {
  var _0x4bb05a;
  let _0x30b6db =
    (_0x4bb05a = _0xe09990.body) == null ||
    (_0x4bb05a = _0x4bb05a.dataStream) == null
      ? undefined
      : _0x4bb05a[_0x296beb];
  return _0x30b6db != null && tn.has(_0x30b6db);
}
function an(_0x474cf3, _0x1cd415, _0x573350) {
  return on(_0x474cf3, _0x573350) != null && !sn(_0x474cf3, _0x1cd415);
}
function on(_0x263407, _0x3d44a0) {
  var _0x3017f4;
  let _0x147894 =
    ((_0x3017f4 = _0x263407.body) == null
      ? undefined
      : _0x3017f4.columnGroups) ?? [];
  for (let _0x3703bc of _0x147894) {
    let _0x3681c1 = k(_0x263407, _0x3703bc.columnGroupId);
    if (_0x3681c1 && nn(_0x3681c1, _0x3d44a0)) return _0x3681c1;
  }
  return null;
}
function sn(_0x45bd62, _0x8a1af3) {
  var _0x54dc5b, _0x2f344a;
  let _0x34ad04 =
      ((_0x54dc5b = _0x45bd62.body) == null
        ? undefined
        : _0x54dc5b.dataStream) ?? "",
    _0x9b971d = Math.max(
      0,
      Math.min(_0x8a1af3.startOffset, _0x8a1af3.endOffset),
    ),
    _0x36655d = Math.min(
      _0x34ad04.length - 1,
      Math.max(_0x8a1af3.startOffset, _0x8a1af3.endOffset),
    );
  for (let _0x158677 = _0x9b971d; _0x158677 <= _0x36655d; _0x158677++)
    if (rn(_0x45bd62, _0x158677)) return true;
  return (
    ((_0x2f344a = _0x45bd62.body) == null
      ? undefined
      : _0x2f344a.columnGroups) ?? []
  ).some((_0x119d24) =>
    cn(_0x9b971d, _0x36655d, _0x119d24.startIndex, _0x119d24.endIndex),
  );
}
function cn(_0x5dd018, _0x8c8b7, _0x1c21f7, _0x2b5a2b) {
  return _0x5dd018 <= _0x1c21f7 && _0x8c8b7 >= _0x2b5a2b;
}
function ln(_0x348565) {
  let _0x4aa115 = A(_0x348565.documentData),
    _0x302c76 = _0x4aa115.body;
  if (!(_0x302c76 != null && _0x302c76.dataStream))
    return {
      nextDocumentData: _0x4aa115,
      movedRange: _0x348565.movedRange,
      changed: false,
    };
  let _0x5cd244 = un(_0x4aa115);
  if (_0x5cd244.length === 0)
    return {
      nextDocumentData: _0x4aa115,
      movedRange: _0x348565.movedRange,
      changed: false,
    };
  let _0x21707a = new Set(
      (_0x302c76.paragraphs ?? []).map((_0x1ed432) => _0x1ed432.paragraphId),
    ),
    _0x1c963f = { ..._0x348565.movedRange },
    _0x2eff3e = 0;
  return (
    _0x5cd244.forEach((_0x5b5337) => {
      let _0x46e5bf = _0x5b5337 + _0x2eff3e,
        _0x1a09e9 = fn(_0x21707a);
      (pn(_0x302c76, _0x46e5bf, _0x1a09e9),
        (_0x1c963f = mn(_0x1c963f, _0x46e5bf, _0x1a09e9.dataStream["length"])),
        (_0x2eff3e += _0x1a09e9.dataStream["length"]));
    }),
    { nextDocumentData: _0x4aa115, movedRange: _0x1c963f, changed: true }
  );
}
function un(_0x2461f6) {
  let _0xf0014d = _0x2461f6.body,
    _0x28dc30 = [];
  for (let _0x4ac695 of (_0xf0014d == null
    ? undefined
    : _0xf0014d.columnGroups) ?? []) {
    let _0x463e86 = k(_0x2461f6, _0x4ac695.columnGroupId);
    _0x463e86 &&
      _0x463e86.columns["forEach"]((_0x7af67f) => {
        dn(_0xf0014d, _0x7af67f.startOffset, _0x7af67f.endOffset) ||
          _0x28dc30.push(_0x7af67f.endOffset);
      });
  }
  return _0x28dc30.sort((_0x8b4adb, _0x476667) => _0x8b4adb - _0x476667);
}
function dn(_0x5c0c4c, _0x1f0c8b, _0x62775a) {
  return (_0x5c0c4c.paragraphs ?? []).some(
    (_0x2dc75a) =>
      _0x2dc75a.startIndex > _0x1f0c8b && _0x2dc75a.startIndex < _0x62775a,
  );
}
function fn(_0x1839cb) {
  let _0x3e116b = _0x514db4(_0x1839cb);
  return (
    _0x1839cb.add(_0x3e116b),
    {
      dataStream: "" + _0x5d83c0.PARAGRAPH + _0x5d83c0.SECTION_BREAK,
      paragraphs: [{ startIndex: 0, paragraphId: _0x3e116b }],
      sectionBreaks: [{ sectionId: _0x1e7c11(new Set()), startIndex: 1 }],
    }
  );
}
function pn(_0x41efa6, _0x591b8a, _0x1f8958) {
  let _0x4ea052 = _0x1f8958.dataStream["length"];
  ((_0x41efa6.dataStream =
    "" +
    _0x41efa6.dataStream["slice"](0, _0x591b8a) +
    _0x1f8958.dataStream +
    _0x41efa6.dataStream["slice"](_0x591b8a)),
    (_0x41efa6.paragraphs = [
      ...X(_0x41efa6.paragraphs ?? [], _0x591b8a, _0x4ea052),
      ..._0x1f8958.paragraphs["map"]((_0x5a4e4c) => ({
        ..._0x5a4e4c,
        startIndex: _0x5a4e4c.startIndex + _0x591b8a,
      })),
    ].sort(
      (_0x2658a8, _0x9d6b20) => _0x2658a8.startIndex - _0x9d6b20.startIndex,
    )),
    (_0x41efa6.sectionBreaks = [
      ...X(_0x41efa6.sectionBreaks ?? [], _0x591b8a, _0x4ea052),
      ..._0x1f8958.sectionBreaks["map"]((_0x57e12e) => ({
        ..._0x57e12e,
        startIndex: _0x57e12e.startIndex + _0x591b8a,
      })),
    ].sort(
      (_0x22e991, _0x52f4c4) => _0x22e991.startIndex - _0x52f4c4.startIndex,
    )),
    (_0x41efa6.textRuns = hn(_0x41efa6.textRuns ?? [], _0x591b8a, _0x4ea052)),
    (_0x41efa6.customBlocks = X(
      _0x41efa6.customBlocks ?? [],
      _0x591b8a,
      _0x4ea052,
    )),
    (_0x41efa6.blockRanges = (_0x41efa6.blockRanges ?? []).map((_0x45286e) =>
      _0xd67afe(_0x45286e, _0x591b8a, _0x4ea052),
    )),
    (_0x41efa6.customRanges = (_0x41efa6.customRanges ?? []).map((_0x1d73fc) =>
      _0xd67afe(_0x1d73fc, _0x591b8a, _0x4ea052),
    )),
    (_0x41efa6.customDecorations = (_0x41efa6.customDecorations ?? []).map(
      (_0xa0279a) => _0xd67afe(_0xa0279a, _0x591b8a, _0x4ea052),
    )),
    (_0x41efa6.tables = (_0x41efa6.tables ?? []).map((_0x5e4ea5) =>
      _0x4be491(_0x5e4ea5, _0x591b8a, _0x4ea052),
    )),
    (_0x41efa6.columnGroups = (_0x41efa6.columnGroups ?? []).map((_0x1e52b6) =>
      _0xd67afe(_0x1e52b6, _0x591b8a, _0x4ea052),
    )));
}
function mn(_0x2ad884, _0x2af5c9, _0x1b01f6) {
  return _0x2ad884.startOffset >= _0x2af5c9
    ? {
        startOffset: _0x2ad884.startOffset + _0x1b01f6,
        endOffset: _0x2ad884.endOffset + _0x1b01f6,
      }
    : _0x2ad884.endOffset > _0x2af5c9
      ? { ..._0x2ad884, endOffset: _0x2ad884.endOffset + _0x1b01f6 }
      : _0x2ad884;
}
function X(_0x59d2cd, _0x45eb5e, _0x212b8f) {
  return _0x59d2cd.map((_0x35a471) =>
    _0x35a471.startIndex >= _0x45eb5e
      ? { ..._0x35a471, startIndex: _0x35a471.startIndex + _0x212b8f }
      : _0x35a471,
  );
}
function hn(_0x3628fa, _0x43e193, _0x520e8d) {
  return _0x3628fa.map((_0x4d62c6) =>
    _0x4d62c6.st >= _0x43e193
      ? {
          ..._0x4d62c6,
          st: _0x4d62c6.st + _0x520e8d,
          ed: _0x4d62c6.ed + _0x520e8d,
        }
      : _0x4d62c6.ed > _0x43e193
        ? { ..._0x4d62c6, ed: _0x4d62c6.ed + _0x520e8d }
        : _0x4d62c6,
  );
}
var gn = "@univerjs-pro/docs-column",
  _n = "1.0.0-insiders.20260907-70fc579";
const vn = {};
function yn(_0x2e5304, _0x5f3852) {
  return function (_0x307604, _0xffaef0) {
    _0x5f3852(_0x307604, _0xffaef0, _0x2e5304);
  };
}
function bn(_0x19a5cb, _0x22e78b, _0x505293, _0x7a3ef8) {
  var _0x58f969 = arguments.length,
    _0x406413 =
      _0x58f969 < 3
        ? _0x22e78b
        : _0x7a3ef8 === null
          ? (_0x7a3ef8 = Object.getOwnPropertyDescriptor(_0x22e78b, _0x505293))
          : _0x7a3ef8,
    _0x2acfb9;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x406413 = Reflect.decorate(_0x19a5cb, _0x22e78b, _0x505293, _0x7a3ef8);
  else {
    for (var _0x5f2b1f = _0x19a5cb.length - 1; _0x5f2b1f >= 0; _0x5f2b1f--)
      (_0x2acfb9 = _0x19a5cb[_0x5f2b1f]) &&
        (_0x406413 =
          (_0x58f969 < 3
            ? _0x2acfb9(_0x406413)
            : _0x58f969 > 3
              ? _0x2acfb9(_0x22e78b, _0x505293, _0x406413)
              : _0x2acfb9(_0x22e78b, _0x505293)) || _0x406413);
  }
  return (
    _0x58f969 > 3 &&
      _0x406413 &&
      Object.defineProperty(_0x22e78b, _0x505293, _0x406413),
    _0x406413
  );
}
function Z(_0x39087f) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3ee9b) {
            return typeof _0x3ee9b;
          }
        : function (_0x39cc35) {
            return _0x39cc35 &&
              typeof Symbol == "function" &&
              _0x39cc35.constructor === Symbol &&
              _0x39cc35 !== Symbol.prototype
              ? "symbol"
              : typeof _0x39cc35;
          }),
    Z(_0x39087f)
  );
}
function xn(_0x3f6083, _0x25e7ea) {
  if (Z(_0x3f6083) != "object" || !_0x3f6083) return _0x3f6083;
  var _0xf1a088 = _0x3f6083[Symbol.toPrimitive];
  if (_0xf1a088 !== undefined) {
    var _0xfe77b9 = _0xf1a088.call(_0x3f6083, _0x25e7ea || "default");
    if (Z(_0xfe77b9) != "object") return _0xfe77b9;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x25e7ea === "string" ? String : Number)(_0x3f6083);
}
function Sn(_0x328954) {
  var _0x1d4989 = xn(_0x328954, "string");
  return Z(_0x1d4989) == "symbol" ? _0x1d4989 : _0x1d4989 + "";
}
function Q(_0x454921, _0x2a912a, _0x5bb97c) {
  return (
    (_0x2a912a = Sn(_0x2a912a)) in _0x454921
      ? Object.defineProperty(_0x454921, _0x2a912a, {
          value: _0x5bb97c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x454921[_0x2a912a] = _0x5bb97c),
    _0x454921
  );
}
let $ = class extends _0x360b81 {
  constructor(_0x1c934d = vn, _0x91c7b, _0x357b7a, _0xd75313) {
    (super(),
      (this._config = _0x1c934d),
      (this._injector = _0x91c7b),
      (this._configService = _0x357b7a),
      (this._commandService = _0xd75313));
    let { ..._0xca0715 } = _0x232df3({}, vn, this._config);
    this._configService["setConfig"]("docs-column.config", _0xca0715);
  }
  onStarting() {
    [Ye, Ge, Ke, qe, We, Je].forEach((_0x1ec0fa) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x1ec0fa)),
    );
  }
};
(Q($, "pluginName", "DOCS_COLUMN_PLUGIN"),
  Q($, "packageName", gn),
  Q($, "version", _n),
  Q($, "type", _0x32ce61.UNIVER_DOC),
  ($ = bn(
    [
      _0x48776c(_0x4d2e2e, _0x1d57c0),
      yn(1, _0x418642(_0x21c153)),
      yn(2, _0x7c78e),
      yn(3, _0xea787d),
    ],
    $,
  )));
export {
  Ge as AddDocColumnCommand,
  O as ColumnDataStreamTreeTokenType,
  de as ColumnPosition,
  ue as DOCS_COLUMN_MAX_COLUMN_COUNT,
  Ke as DeleteDocColumnCommand,
  qe as DeleteDocColumnGroupCommand,
  Ye as InsertDocColumnGroupCommand,
  Je as NormalizeDocColumnGroupCommand,
  We as ResizeDocColumnGroupCommand,
  $ as UniverDocsColumnPlugin,
  at as buildInsertColumnActions,
  he as buildInsertColumnGroupActions,
  dt as calculateResizeDragWidthRatios,
  an as canMoveRangeToColumnContent,
  Xe as canResolveDocsColumnInsertOffset,
  ht as documentSkeletonLineIterator,
  gt as documentSkeletonTableIterator,
  Vt as downgradeColumnGroupsToTables,
  k as getColumnGroupRangeById,
  rn as isColumnStructuralOffset,
  nn as isOffsetInsideColumnContent,
  B as normalizeDocsColumnInsertOffset,
  ln as normalizeEmptyColumnsAfterMove,
};
