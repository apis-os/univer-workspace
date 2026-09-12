Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("@univerjs/engine-render"),
  r = require("@univerjs-pro/license"),
  i = (function (_0x3c324d) {
    return ((_0x3c324d.LEFT = "left"), (_0x3c324d.RIGHT = "right"), _0x3c324d);
  })({});
const a = {
  COLUMN_GROUP_START: "\x12",
  COLUMN_START: "\x13",
  COLUMN_END: "\x14",
  COLUMN_GROUP_END: "\x15",
};
function o(_0x2483e5, _0xa43f7c) {
  var _0x30e7f7, _0x12c73c;
  let _0x4e39e8 =
      (_0x30e7f7 = _0x2483e5.body) == null ||
      (_0x30e7f7 = _0x30e7f7.columnGroups) == null
        ? undefined
        : _0x30e7f7.find((_0x8ae300) => _0x8ae300.columnGroupId === _0xa43f7c),
    _0x1c0593 =
      (_0x12c73c = _0x2483e5.body) == null ? undefined : _0x12c73c.dataStream;
  if (
    !_0x4e39e8 ||
    !_0x1c0593 ||
    _0x1c0593[_0x4e39e8.startIndex] !== a.COLUMN_GROUP_START ||
    _0x1c0593[_0x4e39e8.endIndex] !== a.COLUMN_GROUP_END
  )
    return null;
  let _0x2cb2d2 = (0, e.getColumnGroupRangeInterval)(_0x4e39e8);
  return s(
    _0x1c0593,
    _0x2cb2d2.startOffset,
    _0x2cb2d2.endOffset,
    _0xa43f7c,
    _0x4e39e8,
  );
}
function s(_0x49e110, _0x39a5e1, _0x1eff80, _0x11d9bd, _0x344af1) {
  let _0x59a1fb = [],
    _0x2c491a = -1;
  for (let _0x1e3adc = _0x39a5e1; _0x1e3adc < _0x1eff80; _0x1e3adc++) {
    let _0x2a1511 = _0x49e110[_0x1e3adc];
    if (_0x2a1511 === a.COLUMN_START) {
      _0x2c491a = _0x1e3adc;
      continue;
    }
    if (_0x2a1511 === a.COLUMN_END && _0x2c491a >= 0) {
      var _0x1fc785;
      let _0x4fae25 = _0x59a1fb.length;
      (_0x59a1fb.push({
        column: _0x4fae25,
        columnId:
          ((_0x1fc785 = _0x344af1.columns) == null ||
          (_0x1fc785 = _0x1fc785[_0x4fae25]) == null
            ? undefined
            : _0x1fc785.columnId) ?? String(_0x4fae25),
        startOffset: _0x2c491a,
        endOffset: _0x1e3adc,
      }),
        (_0x2c491a = -1));
    }
  }
  return {
    columnGroupId: _0x11d9bd,
    startOffset: _0x39a5e1,
    endOffset: _0x1eff80,
    columns: _0x59a1fb,
    source: _0x344af1,
  };
}
function c(_0x1c3b2c) {
  return {
    ..._0x1c3b2c,
    body: _0x1c3b2c.body ? l(_0x1c3b2c.body) : _0x1c3b2c.body,
  };
}
function l(_0x13ea0c) {
  var _0x1d09a9,
    _0x23b6e8,
    _0x1c2a4d,
    _0x424150,
    _0x133a0a,
    _0x41b402,
    _0x358e36,
    _0x4e3ce1,
    _0x49a37b;
  return {
    ..._0x13ea0c,
    paragraphs:
      (_0x1d09a9 = _0x13ea0c.paragraphs) == null
        ? undefined
        : _0x1d09a9.map((_0x3f1b0b) => ({
            ..._0x3f1b0b,
            bullet: u(_0x3f1b0b.bullet),
            paragraphStyle: u(_0x3f1b0b.paragraphStyle),
          })),
    sectionBreaks:
      (_0x23b6e8 = _0x13ea0c.sectionBreaks) == null
        ? undefined
        : _0x23b6e8.map((_0x68fcca) => ({ ..._0x68fcca })),
    textRuns:
      (_0x1c2a4d = _0x13ea0c.textRuns) == null
        ? undefined
        : _0x1c2a4d.map((_0x478684) => ({ ..._0x478684 })),
    tables:
      (_0x424150 = _0x13ea0c.tables) == null
        ? undefined
        : _0x424150.map((_0x1d0623) => ({ ..._0x1d0623 })),
    columnGroups:
      (_0x133a0a = _0x13ea0c.columnGroups) == null
        ? undefined
        : _0x133a0a.map((_0x454eef) => {
            var _0x2a4a72;
            return {
              ..._0x454eef,
              columns:
                (_0x2a4a72 = _0x454eef.columns) == null
                  ? undefined
                  : _0x2a4a72.map((_0x48461e) => u(_0x48461e)),
            };
          }),
    blockRanges:
      (_0x41b402 = _0x13ea0c.blockRanges) == null
        ? undefined
        : _0x41b402.map((_0x4a7e10) => ({ ..._0x4a7e10 })),
    customRanges:
      (_0x358e36 = _0x13ea0c.customRanges) == null
        ? undefined
        : _0x358e36.map((_0x35032a) => ({ ..._0x35032a })),
    customDecorations:
      (_0x4e3ce1 = _0x13ea0c.customDecorations) == null
        ? undefined
        : _0x4e3ce1.map((_0x1dbde6) => ({ ..._0x1dbde6 })),
    customBlocks:
      (_0x49a37b = _0x13ea0c.customBlocks) == null
        ? undefined
        : _0x49a37b.map((_0x293df0) => ({ ..._0x293df0 })),
  };
}
function u(_0x3c0efa) {
  return Array.isArray(_0x3c0efa)
    ? _0x3c0efa.map((_0x50cf7b) => u(_0x50cf7b))
    : !_0x3c0efa || typeof _0x3c0efa != "object"
      ? _0x3c0efa
      : Object.fromEntries(
          Object.entries(_0x3c0efa).map(([_0x22fda8, _0x16eb5c]) => [
            _0x22fda8,
            u(_0x16eb5c),
          ]),
        );
}
const d = new Set([
  e.DataStreamTreeTokenType["BLOCK_END"],
  a.COLUMN_START,
  a.COLUMN_END,
  a.COLUMN_GROUP_END,
  e.DataStreamTreeTokenType["TABLE_ROW_START"],
  e.DataStreamTreeTokenType["TABLE_CELL_START"],
  e.DataStreamTreeTokenType["TABLE_CELL_END"],
  e.DataStreamTreeTokenType["TABLE_ROW_END"],
  e.DataStreamTreeTokenType["TABLE_END"],
]);
function f(_0x2c470f, _0x35790c) {
  if (!x(_0x2c470f)) return false;
  let _0x2b84af = _0x2c470f.body;
  return !(_0x2b84af != null && _0x2b84af.dataStream) ||
    b(_0x2b84af.dataStream[_0x35790c])
    ? false
    : !(_0x2b84af.columnGroups ?? []).some((_0x59230f) =>
        (0, e.containsInteriorInsertionOffset)(
          (0, e.getColumnGroupRangeInterval)(_0x59230f),
          _0x35790c,
        ),
      ) &&
        !(_0x2b84af.tables ?? []).some((_0x4571ea) =>
          (0, e.containsInteriorInsertionOffset)(
            (0, e.getTableRangeInterval)(_0x4571ea),
            _0x35790c,
          ),
        ) &&
        !(_0x2b84af.blockRanges ?? []).some((_0x304899) =>
          (0, e.containsInteriorInsertionOffset)(
            (0, e.getBlockRangeInterval)(_0x304899),
            _0x35790c,
          ),
        );
}
function p(_0x3c1074) {
  let _0x368a54 = c(_0x3c1074.documentData),
    _0x16e663 = m(_0x368a54),
    _0x1615ae = Math.max(
      0,
      Math.min(_0x3c1074.offset, _0x16e663.dataStream["length"]),
    );
  if (!x(_0x368a54))
    throw Error(
      "[DocsColumn]: Column groups can only be inserted in modern documents.",
    );
  if (!f(_0x368a54, _0x1615ae))
    throw Error(
      "[DocsColumn]: Cannot insert a column group inside table, column group, or document block ranges.",
    );
  let _0x51f006 = Math.max(
    2,
    _0x3c1074.columnCount ?? _0x3c1074.columnIds["length"],
  );
  if (_0x51f006 > 5)
    throw Error("[DocsColumn]: Cannot create more than five columns.");
  let _0x57668f = h(_0x3c1074.columnIds, _0x51f006),
    _0x1619a9 = _(_0x51f006, y(_0x16e663), v(_0x16e663, _0x1615ae)),
    _0x4612ea = _0x1619a9.dataStream,
    _0x4d7034 = _0x1615ae + _0x1619a9.columnGroupEndIndex;
  return (
    (_0x16e663.dataStream =
      "" +
      _0x16e663.dataStream["slice"](0, _0x1615ae) +
      _0x4612ea +
      _0x16e663.dataStream["slice"](_0x1615ae)),
    (_0x16e663.paragraphs = [
      ...S(_0x16e663.paragraphs ?? [], _0x1615ae, _0x4612ea.length),
      ..._0x1619a9.paragraphs["map"]((_0x10bc9a) => ({
        ..._0x10bc9a,
        startIndex: _0x10bc9a.startIndex + _0x1615ae,
      })),
    ].sort(
      (_0x4c5b2a, _0x54b478) => _0x4c5b2a.startIndex - _0x54b478.startIndex,
    )),
    (_0x16e663.sectionBreaks = [
      ...S(_0x16e663.sectionBreaks ?? [], _0x1615ae, _0x4612ea.length),
      ..._0x1619a9.sectionBreaks["map"]((_0x33352e) => ({
        ..._0x33352e,
        startIndex: _0x33352e.startIndex + _0x1615ae,
      })),
    ].sort(
      (_0x33646b, _0x1db413) => _0x33646b.startIndex - _0x1db413.startIndex,
    )),
    (_0x16e663.textRuns = C(
      _0x16e663.textRuns ?? [],
      _0x1615ae,
      _0x4612ea.length,
    )),
    (_0x16e663.customBlocks = S(
      _0x16e663.customBlocks ?? [],
      _0x1615ae,
      _0x4612ea.length,
    )),
    (_0x16e663.blockRanges = (_0x16e663.blockRanges ?? []).map((_0x1e5321) =>
      (0, e.shiftInclusiveRangeOnInsert)(
        _0x1e5321,
        _0x1615ae,
        _0x4612ea.length,
      ),
    )),
    (_0x16e663.customRanges = (_0x16e663.customRanges ?? []).map((_0x3568be) =>
      (0, e.shiftInclusiveRangeOnInsert)(
        _0x3568be,
        _0x1615ae,
        _0x4612ea.length,
      ),
    )),
    (_0x16e663.customDecorations = (_0x16e663.customDecorations ?? []).map(
      (_0x3ded26) =>
        (0, e.shiftInclusiveRangeOnInsert)(
          _0x3ded26,
          _0x1615ae,
          _0x4612ea.length,
        ),
    )),
    (_0x16e663.tables = (_0x16e663.tables ?? []).map((_0x2b8db0) =>
      (0, e.shiftExclusiveRangeOnInsert)(
        _0x2b8db0,
        _0x1615ae,
        _0x4612ea.length,
      ),
    )),
    (_0x16e663.columnGroups = [
      ...(_0x16e663.columnGroups ?? []).map((_0x2ec76f) =>
        (0, e.shiftInclusiveRangeOnInsert)(
          _0x2ec76f,
          _0x1615ae,
          _0x4612ea.length,
        ),
      ),
      {
        startIndex: _0x1615ae,
        endIndex: _0x4d7034,
        columnGroupId: _0x3c1074.columnGroupId,
        columns: _0x57668f.map((_0x3fc07a) => ({
          columnId: _0x3fc07a,
          widthRatio: 1,
        })),
        gap: { v: g(_0x3c1074.gap) },
        layout: e.ColumnLayoutType["FIXED"],
        responsive: e.ColumnResponsiveType["STACK"],
      },
    ].sort(
      (_0x246800, _0xa99f50) => _0x246800.startIndex - _0xa99f50.startIndex,
    )),
    {
      nextDocumentData: _0x368a54,
      inserted: {
        columnGroupId: _0x3c1074.columnGroupId,
        columnIds: _0x57668f,
      },
    }
  );
}
function m(_0x5d35f3) {
  return (
    (_0x5d35f3.body ??= {
      dataStream: e.DataStreamTreeTokenType["SECTION_BREAK"],
      paragraphs: [],
      sectionBreaks: [
        { sectionId: (0, e.createSectionId)(new Set()), startIndex: 0 },
      ],
      columnGroups: [],
    }),
    (_0x5d35f3.body["dataStream"] ??=
      e.DataStreamTreeTokenType["SECTION_BREAK"]),
    (_0x5d35f3.body["paragraphs"] ??= []),
    (_0x5d35f3.body["sectionBreaks"] ??= []),
    (_0x5d35f3.body["columnGroups"] ??= []),
    _0x5d35f3.body
  );
}
function h(_0x232319, _0x8f9470) {
  return Array.from(
    { length: _0x8f9470 },
    (_0x1b94a3, _0x4975ba) =>
      _0x232319[_0x4975ba] ?? "column-" + (_0x4975ba + 1),
  );
}
function g(_0x22db74) {
  return typeof _0x22db74 == "number" &&
    Number.isFinite(_0x22db74) &&
    _0x22db74 >= 0
    ? _0x22db74
    : 12;
}
function _(_0x4dbfee, _0x55ae49, _0x115636) {
  let _0x1150c7 = a.COLUMN_GROUP_START,
    _0x525e6d = [],
    _0x78271e = [];
  for (let _0x28c6bd = 0; _0x28c6bd < _0x4dbfee; _0x28c6bd++)
    ((_0x1150c7 +=
      "" +
      a.COLUMN_START +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      a.COLUMN_END),
      _0x525e6d.push({
        startIndex: _0x1150c7.length - 2,
        paragraphId: (0, e.createParagraphId)(_0x55ae49),
      }));
  _0x1150c7 += a.COLUMN_GROUP_END;
  let _0x41f92f = _0x1150c7.length - 1;
  return (
    _0x115636 &&
      ((_0x1150c7 += e.DataStreamTreeTokenType["PARAGRAPH"]),
      _0x525e6d.push({
        startIndex: _0x1150c7.length - 1,
        paragraphId: (0, e.createParagraphId)(_0x55ae49),
      })),
    {
      columnGroupEndIndex: _0x41f92f,
      dataStream: _0x1150c7,
      paragraphs: _0x525e6d,
      sectionBreaks: _0x78271e,
    }
  );
}
function v(_0x1b8dd7, _0x2a84ea) {
  let _0x363b87 = _0x1b8dd7.dataStream[_0x2a84ea];
  return (
    _0x363b87 === e.DataStreamTreeTokenType["SECTION_BREAK"] ||
    _0x363b87 === undefined
  );
}
function y(_0x52cf99) {
  return new Set(
    (_0x52cf99.paragraphs ?? []).map((_0x24fd8e) => _0x24fd8e.paragraphId),
  );
}
function b(_0x4350e7) {
  return _0x4350e7 != null && d.has(_0x4350e7);
}
function x(_0x5ab89a) {
  var _0x4922d6;
  return (
    ((_0x4922d6 = _0x5ab89a.documentStyle) == null
      ? undefined
      : _0x4922d6.documentFlavor) === e.DocumentFlavor["MODERN"]
  );
}
function S(_0x8fb080, _0x4f9e29, _0x50146e) {
  return _0x8fb080.map((_0x2a0e52) =>
    _0x2a0e52.startIndex >= _0x4f9e29
      ? { ..._0x2a0e52, startIndex: _0x2a0e52.startIndex + _0x50146e }
      : _0x2a0e52,
  );
}
function C(_0x2123b8, _0x51349f, _0x2a8e94) {
  return _0x2123b8.map((_0x5ab252) =>
    _0x5ab252.st >= _0x51349f
      ? {
          ..._0x5ab252,
          st: _0x5ab252.st + _0x2a8e94,
          ed: _0x5ab252.ed + _0x2a8e94,
        }
      : _0x5ab252.ed > _0x51349f
        ? { ..._0x5ab252, ed: _0x5ab252.ed + _0x2a8e94 }
        : _0x5ab252,
  );
}
function w(_0x550b0f, _0x26cc46) {
  let _0x471817 = _0x550b0f.get(e.IUniverInstanceService),
    _0x32b797 = _0x26cc46
      ? _0x471817.getUnit(_0x26cc46, e.UniverInstanceType["UNIVER_DOC"])
      : _0x471817.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    _0x4898c7 = _0x32b797 == null ? undefined : _0x32b797.getSnapshot(),
    _0x4fd47a = _0x32b797 == null ? undefined : _0x32b797.getUnitId();
  return !_0x4898c7 || !_0x4fd47a
    ? null
    : {
        commandService: _0x550b0f.get(e.ICommandService),
        snapshot: _0x4898c7,
        unitId: _0x4fd47a,
      };
}
function T(_0x483630, _0x3859e3, _0x595387) {
  return _0x3859e3
    ? !!_0x483630.commandService["syncExecuteCommand"](
        t.RichTextEditingMutation["id"],
        { unitId: _0x483630.unitId, actions: _0x3859e3, textRanges: _0x595387 },
      )
    : false;
}
function ee(_0x37eae7, _0x3975e9, _0x18cbe9) {
  var _0x5b669a, _0x17cd11;
  let _0x272525 = e.JSONX["getInstance"](),
    _0x502ca2 =
      ((_0x5b669a = _0x37eae7.body) == null ||
      (_0x5b669a = _0x5b669a.columnGroups) == null
        ? undefined
        : _0x5b669a.findIndex(
            (_0x3fbe29) => _0x3fbe29.columnGroupId === _0x3975e9,
          )) ?? -1,
    _0x3dd885 =
      _0x502ca2 >= 0
        ? (_0x17cd11 = _0x37eae7.body) == null ||
          (_0x17cd11 = _0x17cd11.columnGroups) == null
          ? undefined
          : _0x17cd11[_0x502ca2]
        : undefined;
  return !(_0x3dd885 != null && _0x3dd885.columns) ||
    _0x3dd885.columns["length"] !== _0x18cbe9.length ||
    _0x3dd885.columns["length"] < 2 ||
    _0x18cbe9.some((_0x1562e6) => !Number.isFinite(_0x1562e6) || _0x1562e6 <= 0)
    ? null
    : _0x3dd885.columns["map"]((_0x2a4e50, _0x35efb7) => {
        let _0x1524a7 = _0x18cbe9[_0x35efb7];
        return _0x2a4e50.widthRatio === _0x1524a7
          ? null
          : _0x272525.replaceOp(
              [
                "body",
                "columnGroups",
                _0x502ca2,
                "columns",
                _0x35efb7,
                "widthRatio",
              ],
              _0x2a4e50.widthRatio,
              _0x1524a7,
            );
      })
        .filter(Boolean)
        .reduce(
          (_0x11a862, _0x437c00) => e.JSONX["compose"](_0x11a862, _0x437c00),
          null,
        );
}
function te(_0x26fbe1, _0x201430, _0x4ef8b4, _0x1a8878, _0x56a3f5) {
  var _0x282a3c;
  let _0x4a756f = _0x26fbe1.body,
    _0x2c4973 = o(_0x26fbe1, _0x201430),
    _0x44d4bf = _0x2c4973 == null ? undefined : _0x2c4973.source["columns"],
    _0x514a95 =
      (_0x4a756f == null || (_0x282a3c = _0x4a756f.columnGroups) == null
        ? undefined
        : _0x282a3c.findIndex(
            (_0x8e908c) => _0x8e908c.columnGroupId === _0x201430,
          )) ?? -1,
    _0x49c893 =
      (_0x44d4bf == null
        ? undefined
        : _0x44d4bf.findIndex(
            (_0x573552) => _0x573552.columnId === _0x4ef8b4,
          )) ?? -1,
    _0x29c84f =
      _0x49c893 >= 0
        ? _0x2c4973 == null
          ? undefined
          : _0x2c4973.columns[_0x49c893]
        : undefined;
  if (
    !(_0x4a756f != null && _0x4a756f.dataStream) ||
    !_0x2c4973 ||
    !_0x44d4bf ||
    _0x514a95 < 0 ||
    _0x49c893 < 0 ||
    !_0x29c84f ||
    _0x44d4bf.length !== _0x2c4973.columns["length"] ||
    _0x44d4bf.length >= 5
  )
    return null;
  let _0x3ef7b9 = _0x1a8878 === "left" ? _0x49c893 : _0x49c893 + 1,
    _0x27d7bb =
      _0x1a8878 === "left" ? _0x29c84f.startOffset : _0x29c84f.endOffset + 1,
    _0x49ff51 = me(_0x4a756f),
    _0xe23ae6 = e.JSONX["getInstance"](),
    _0x589a0d = D(_0x27d7bb, _0x49ff51, 0),
    _0x39dce7 = { columnId: _0x56a3f5, widthRatio: 1 };
  return {
    actions: O([
      _0x589a0d,
      _0xe23ae6.insertOp(
        ["body", "columnGroups", _0x514a95, "columns", _0x3ef7b9],
        _0x39dce7,
      ),
    ]),
    cursorOffset: _0x27d7bb + 1,
  };
}
function ne(_0xff0adc, _0x2016fd, _0x5cfb98) {
  let _0x2b6db7 = re(_0xff0adc, _0x2016fd);
  if (!_0x2b6db7) return null;
  let {
      group: _0x4d0605,
      groupIndex: _0x4af39d,
      sourceColumns: _0x30b4dd,
    } = _0x2b6db7,
    _0x34a1df = _0x30b4dd.findIndex(
      (_0x2767e5) => _0x2767e5.columnId === _0x5cfb98,
    );
  if (_0x34a1df < 0 || _0x30b4dd.length <= 2) return null;
  let _0x29ef8c = _0x4d0605.columns[_0x34a1df],
    _0x21f796 = _0x30b4dd[_0x34a1df];
  if (!_0x29ef8c || !_0x21f796) return null;
  let _0x30d064 = _0x29ef8c.startOffset,
    _0x1eb691 = _0x29ef8c.endOffset + 1,
    _0x169c1b =
      _0x4d0605.columns[_0x34a1df + 1] ?? _0x4d0605.columns[_0x34a1df - 1],
    _0x6f1a94 = e.JSONX["getInstance"]();
  return {
    actions: O([
      D(_0x30d064, undefined, _0x1eb691 - _0x30d064),
      _0x6f1a94.removeOp(
        ["body", "columnGroups", _0x4af39d, "columns", _0x34a1df],
        A(_0x21f796),
      ),
    ]),
    cursorOffset:
      (_0x34a1df < _0x30b4dd.length - 1 ? _0x30d064 : _0x169c1b.startOffset) +
      1,
  };
}
function re(_0x2684a1, _0x4501d1) {
  var _0x1ad539;
  let _0x34544f = _0x2684a1.body,
    _0xc98405 = o(_0x2684a1, _0x4501d1),
    _0x216ab0 = _0xc98405 == null ? undefined : _0xc98405.source["columns"],
    _0xfbad89 =
      (_0x34544f == null || (_0x1ad539 = _0x34544f.columnGroups) == null
        ? undefined
        : _0x1ad539.findIndex(
            (_0x5cfd11) => _0x5cfd11.columnGroupId === _0x4501d1,
          )) ?? -1;
  return !(_0x34544f != null && _0x34544f.dataStream) ||
    !_0xc98405 ||
    !_0x216ab0 ||
    _0xfbad89 < 0 ||
    _0x216ab0.length !== _0xc98405.columns["length"]
    ? null
    : { group: _0xc98405, groupIndex: _0xfbad89, sourceColumns: _0x216ab0 };
}
function ie(_0x2f5e44, _0xf2fd14) {
  let _0x1b2f4a = _0x2f5e44.body;
  if (!(_0x1b2f4a != null && _0x1b2f4a.dataStream)) return null;
  let _0x338025 = Math.max(
      0,
      Math.min(_0xf2fd14.offset, _0x1b2f4a.dataStream["length"]),
    ),
    _0x13c309 = Math.max(2, _0xf2fd14.columnCount);
  return !f(_0x2f5e44, _0x338025) ||
    _0x13c309 > 5 ||
    (_0xf2fd14.widthRatios &&
      (_0xf2fd14.widthRatios["length"] !== _0x13c309 ||
        _0xf2fd14.widthRatios["some"](
          (_0x285ead) => !Number.isFinite(_0x285ead) || _0x285ead <= 0,
        )))
    ? null
    : {
        actions: D(
          _0x338025,
          he(_0x1b2f4a, {
            ..._0xf2fd14,
            columnCount: _0x13c309,
            offset: _0x338025,
          }),
          0,
        ),
        cursorOffset: _0x338025 + 2,
      };
}
function ae(_0x3bdf24, _0x3d93e1) {
  var _0x36c21e;
  let _0x2682db = _0x3bdf24.body,
    _0x3a0671 =
      _0x2682db == null || (_0x36c21e = _0x2682db.columnGroups) == null
        ? undefined
        : _0x36c21e.find((_0x2ac600) => _0x2ac600.columnGroupId === _0x3d93e1);
  if (!(_0x2682db != null && _0x2682db.dataStream) || !_0x3a0671) return null;
  let _0x6f518a = _0x3a0671.startIndex,
    _0x4c5414 = (0, e.getColumnGroupRangeInterval)(_0x3a0671).endOffset;
  return {
    actions: D(
      _0x6f518a,
      _0x2682db.dataStream["length"] === _0x4c5414 - _0x6f518a
        ? ge(_0x2682db)
        : undefined,
      _0x4c5414 - _0x6f518a,
    ),
    cursorOffset: _0x6f518a,
  };
}
function oe(_0x505f48) {
  let _0x349565 = _0x505f48.body;
  if (!_0x349565) return null;
  let _0x4292f3 = _0x349565.dataStream ?? "",
    _0x61e098 = _0x349565.columnGroups ?? [],
    _0x150561 = se(_0x61e098),
    _0x1b531f = new Set();
  (_0x150561.forEach((_0x5eb0fd) => {
    ce(_0x4292f3, _0x61e098[_0x5eb0fd]).forEach((_0x2b2a79) =>
      _0x1b531f.add(_0x2b2a79),
    );
  }),
    _0x61e098.forEach((_0x32a26c, _0x198f1d) => {
      !_0x150561.has(_0x198f1d) &&
        le(_0x4292f3, _0x32a26c, _0x1b531f) &&
        (_0x150561.add(_0x198f1d),
        ce(_0x4292f3, _0x32a26c).forEach((_0x5c1be2) =>
          _0x1b531f.add(_0x5c1be2),
        ));
    }));
  let _0x23fbef = [];
  _0x61e098.forEach((_0x3813b4, _0x46d224) => {
    _0x150561.has(_0x46d224) ||
      ue(_0x23fbef, _0x3813b4, _0x46d224, _0x4292f3, _0x1b531f);
  });
  let _0x28701e = e.JSONX["getInstance"]();
  [..._0x150561]
    .sort((_0x437d83, _0x1a742e) => _0x1a742e - _0x437d83)
    .forEach((_0x2f1b3c) => {
      _0x23fbef.push(
        _0x28701e.removeOp(
          ["body", "columnGroups", _0x2f1b3c],
          A(_0x61e098[_0x2f1b3c]),
        ),
      );
    });
  let _0x1396e5 = pe(_0x349565, _0x1b531f);
  return (
    _0x1396e5 && _0x23fbef.push(_0x1396e5),
    _0x23fbef.length ? O(_0x23fbef) : null
  );
}
function se(_0x5652f8) {
  let _0x16985d = new Set();
  return (
    _0x5652f8.forEach((_0x19275b, _0xbbd5fa) => {
      _0x5652f8.some(
        (_0x3d5947, _0x3d0464) =>
          _0x3d0464 !== _0xbbd5fa &&
          _0x19275b.startIndex > _0x3d5947.startIndex &&
          _0x19275b.endIndex < _0x3d5947.endIndex,
      ) && _0x16985d.add(_0xbbd5fa);
    }),
    _0x16985d
  );
}
function ce(_0x32ba5a, _0x15ecf1) {
  let _0xbe2414 = (0, e.getColumnGroupRangeInterval)(_0x15ecf1).endOffset,
    _0x5c0c36 = new Set([
      a.COLUMN_GROUP_START,
      a.COLUMN_START,
      a.COLUMN_END,
      a.COLUMN_GROUP_END,
    ]),
    _0x51a01f = [];
  for (let _0x26f9dd = _0x15ecf1.startIndex; _0x26f9dd < _0xbe2414; _0x26f9dd++)
    _0x5c0c36.has(_0x32ba5a[_0x26f9dd]) && _0x51a01f.push(_0x26f9dd);
  return _0x51a01f;
}
function le(_0x4cb19b, _0x316fc5, _0x339f32) {
  let _0x41e9c6 = (0, e.getColumnGroupRangeInterval)(_0x316fc5).endOffset,
    _0x4dcb1b = -1,
    _0x4a4a7d = 0;
  for (
    let _0x594e92 = _0x316fc5.startIndex;
    _0x594e92 < _0x41e9c6;
    _0x594e92++
  ) {
    if (_0x339f32.has(_0x594e92)) continue;
    let _0x235827 = _0x4cb19b[_0x594e92];
    if (_0x235827 === a.COLUMN_START) {
      if (_0x4dcb1b >= 0) return true;
      _0x4dcb1b = _0x594e92;
    } else {
      if (_0x235827 === a.COLUMN_END) {
        if (_0x4dcb1b < 0) return true;
        (_0x4a4a7d++, (_0x4dcb1b = -1));
      }
    }
  }
  return _0x4dcb1b >= 0 || _0x4a4a7d < 2 || _0x4a4a7d > 5;
}
function ue(_0x4f7312, _0x56839f, _0x15f5dc, _0xaefedc, _0x30868a) {
  var _0x8fe9bd;
  let _0x3023c2 = de(_0xaefedc, _0x56839f, _0x30868a);
  if (_0x3023c2 === 0) return;
  let _0x439da7 = fe(_0x56839f, _0x3023c2),
    _0x5bc7fd =
      Number.isFinite(
        (_0x8fe9bd = _0x56839f.gap) == null ? undefined : _0x8fe9bd.v,
      ) && _0x56839f.gap["v"] >= 0
        ? { v: _0x56839f.gap["v"] }
        : { v: 12 },
    _0x47eee3 = e.JSONX["getInstance"]();
  (E(
    _0x4f7312,
    _0x47eee3,
    ["body", "columnGroups", _0x15f5dc, "columns"],
    _0x56839f.columns,
    _0x439da7,
  ),
    E(
      _0x4f7312,
      _0x47eee3,
      ["body", "columnGroups", _0x15f5dc, "gap"],
      _0x56839f.gap,
      _0x5bc7fd,
    ),
    E(
      _0x4f7312,
      _0x47eee3,
      ["body", "columnGroups", _0x15f5dc, "layout"],
      _0x56839f.layout,
      _0x56839f.layout ?? e.ColumnLayoutType["FIXED"],
    ),
    E(
      _0x4f7312,
      _0x47eee3,
      ["body", "columnGroups", _0x15f5dc, "responsive"],
      _0x56839f.responsive,
      _0x56839f.responsive ?? e.ColumnResponsiveType["STACK"],
    ));
}
function de(_0x1c564d, _0x988dee, _0x3f8698) {
  let _0x3e348d = (0, e.getColumnGroupRangeInterval)(_0x988dee).endOffset,
    _0x32efe2 = 0;
  for (let _0x328688 = _0x988dee.startIndex; _0x328688 < _0x3e348d; _0x328688++)
    !_0x3f8698.has(_0x328688) &&
      _0x1c564d[_0x328688] === a.COLUMN_START &&
      _0x32efe2++;
  return _0x32efe2;
}
function fe(_0x33273b, _0x9dc6cb) {
  return Array.from({ length: _0x9dc6cb }, (_0x4e2ce1, _0x5f1c1d) => {
    var _0x51f25d;
    let _0x52e8e7 =
      (_0x51f25d = _0x33273b.columns) == null
        ? undefined
        : _0x51f25d[_0x5f1c1d];
    return _0x52e8e7
      ? {
          ...A(_0x52e8e7),
          widthRatio:
            Number.isFinite(_0x52e8e7.widthRatio) && _0x52e8e7.widthRatio > 0
              ? _0x52e8e7.widthRatio
              : 1,
        }
      : {
          columnId: _0x33273b.columnGroupId + "-column-" + (_0x5f1c1d + 1),
          widthRatio: 1,
        };
  });
}
function E(_0x3aec7c, _0x6953a4, _0x1aec3b, _0x2a1f38, _0x188fad) {
  e.Tools["diffValue"](_0x2a1f38, _0x188fad) ||
    _0x3aec7c.push(
      _0x2a1f38 == null
        ? _0x6953a4.insertOp(_0x1aec3b, A(_0x188fad))
        : _0x6953a4.replaceOp(_0x1aec3b, A(_0x2a1f38), A(_0x188fad)),
    );
}
function pe(_0x33fa59, _0x42c147) {
  var _0x3639b6;
  let _0x35ba1c = [..._0x42c147].sort(
      (_0x5cb5a8, _0x43341d) => _0x5cb5a8 - _0x43341d,
    ),
    _0x5abee3 =
      (((_0x3639b6 = _0x33fa59.dataStream) == null
        ? undefined
        : _0x3639b6.length) ?? 0) === _0x35ba1c.length;
  if (!_0x35ba1c.length && !_0x5abee3) return null;
  let _0x137a3e = new e["TextX"](),
    _0x310682 = 0;
  if (_0x5abee3) {
    let _0x466c89 = ge(_0x33fa59);
    _0x137a3e.insert(_0x466c89.dataStream["length"], _0x466c89);
  }
  for (let _0x5a000f = 0; _0x5a000f < _0x35ba1c.length;) {
    let _0x2193b4 = _0x35ba1c[_0x5a000f],
      _0x674164 = _0x2193b4 + 1;
    for (
      ;
      _0x5a000f + 1 < _0x35ba1c.length &&
      _0x35ba1c[_0x5a000f + 1] === _0x674164;
    )
      (_0x5a000f++, _0x674164++);
    (_0x2193b4 > _0x310682 && _0x137a3e.retain(_0x2193b4 - _0x310682),
      _0x137a3e.delete(_0x674164 - _0x2193b4),
      (_0x310682 = _0x674164),
      _0x5a000f++);
  }
  return e.JSONX["getInstance"]().editOp(_0x137a3e.serialize(), ["body"]);
}
function me(_0xa8b94) {
  var _0x485584;
  let _0x5c07d8 = k(_0xa8b94);
  return {
    dataStream:
      "" +
      a.COLUMN_START +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["SECTION_BREAK"] +
      a.COLUMN_END,
    paragraphs: [
      { startIndex: 1, paragraphId: (0, e.createParagraphId)(_0x5c07d8) },
    ],
    sectionBreaks: [
      {
        sectionId: (0, e.createSectionId)(
          new Set(
            (_0x485584 = _0xa8b94.sectionBreaks) == null
              ? undefined
              : _0x485584.map((_0x16efb5) => _0x16efb5.sectionId),
          ),
        ),
        startIndex: 2,
      },
    ],
  };
}
function he(_0x357dd0, _0x5a49c4) {
  let _0x4ece48 = k(_0x357dd0),
    _0x5097e6 = Array.from(
      { length: _0x5a49c4.columnCount },
      (_0x40eeba, _0x441f1e) =>
        _0x5a49c4.columnIds[_0x441f1e] ?? "column-" + (_0x441f1e + 1),
    ),
    _0x3c7db7 = a.COLUMN_GROUP_START,
    _0x4092fa = [];
  for (let _0x4ec8b5 = 0; _0x4ec8b5 < _0x5a49c4.columnCount; _0x4ec8b5++)
    ((_0x3c7db7 +=
      "" +
      a.COLUMN_START +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      a.COLUMN_END),
      _0x4092fa.push({
        startIndex: _0x3c7db7.length - 2,
        paragraphId: (0, e.createParagraphId)(_0x4ece48),
      }));
  _0x3c7db7 += a.COLUMN_GROUP_END;
  let _0x2ac895 = _0x3c7db7.length - 1;
  return (
    v(_0x357dd0, _0x5a49c4.offset) &&
      ((_0x3c7db7 += e.DataStreamTreeTokenType["PARAGRAPH"]),
      _0x4092fa.push({
        startIndex: _0x3c7db7.length - 1,
        paragraphId: (0, e.createParagraphId)(_0x4ece48),
      })),
    {
      dataStream: _0x3c7db7,
      paragraphs: _0x4092fa,
      sectionBreaks: [],
      columnGroups: [
        {
          startIndex: 0,
          endIndex: _0x2ac895,
          columnGroupId: _0x5a49c4.columnGroupId,
          columns: _0x5097e6.map((_0x3c8dc1, _0x125abd) => {
            var _0x47d91a;
            return {
              columnId: _0x3c8dc1,
              widthRatio:
                ((_0x47d91a = _0x5a49c4.widthRatios) == null
                  ? undefined
                  : _0x47d91a[_0x125abd]) ?? 1,
            };
          }),
          gap: { v: _e(_0x5a49c4.gap) },
          layout: e.ColumnLayoutType["FIXED"],
          responsive: e.ColumnResponsiveType["STACK"],
        },
      ],
    }
  );
}
function ge(_0xc7ca58) {
  var _0x4fa4eb;
  return {
    dataStream:
      "" +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["SECTION_BREAK"],
    paragraphs: [
      { startIndex: 0, paragraphId: (0, e.createParagraphId)(k(_0xc7ca58)) },
    ],
    sectionBreaks: [
      {
        sectionId: (0, e.createSectionId)(
          new Set(
            (_0x4fa4eb = _0xc7ca58.sectionBreaks) == null
              ? undefined
              : _0x4fa4eb.map((_0x402dd4) => _0x402dd4.sectionId),
          ),
        ),
        startIndex: 1,
      },
    ],
  };
}
function D(_0x1d02de, _0x350eea, _0x4cf5c5) {
  let _0x40b178 = new e.TextX();
  return (
    _0x1d02de > 0 && _0x40b178.retain(_0x1d02de),
    _0x350eea != null &&
      _0x350eea.dataStream["length"] &&
      _0x40b178.insert(_0x350eea.dataStream["length"], _0x350eea),
    _0x4cf5c5 > 0 && _0x40b178.delete(_0x4cf5c5),
    e.JSONX["getInstance"]().editOp(_0x40b178.serialize(), ["body"])
  );
}
function O(_0x583e32) {
  return _0x583e32.reduce(
    (_0x1ff082, _0x59d392) => e.JSONX["compose"](_0x1ff082, _0x59d392),
    null,
  );
}
function k(_0x1259bb) {
  return new Set(
    (_0x1259bb.paragraphs ?? []).map((_0x40da25) => _0x40da25.paragraphId),
  );
}
function _e(_0x3e48b6) {
  return typeof _0x3e48b6 == "number" &&
    Number.isFinite(_0x3e48b6) &&
    _0x3e48b6 >= 0
    ? _0x3e48b6
    : 12;
}
function A(_0xa08f0b) {
  return Array.isArray(_0xa08f0b)
    ? _0xa08f0b.map((_0x465570) => A(_0x465570))
    : !_0xa08f0b || typeof _0xa08f0b != "object"
      ? _0xa08f0b
      : Object.fromEntries(
          Object.entries(_0xa08f0b).map(([_0x4617f6, _0x3a050d]) => [
            _0x4617f6,
            A(_0x3a050d),
          ]),
        );
}
const ve = {
    id: "doc.command.resize-column-group",
    type: e.CommandType["COMMAND"],
    handler: (_0x3f8439, _0x565b95) => {
      let _0x251f34 = w(
        _0x3f8439,
        _0x565b95 == null ? undefined : _0x565b95.unitId,
      );
      return !_0x251f34 || !_0x565b95
        ? false
        : T(
            _0x251f34,
            ee(
              _0x251f34.snapshot,
              _0x565b95.columnGroupId,
              _0x565b95.widthRatios,
            ),
            [],
          );
    },
  },
  j = {
    id: "doc.command.add-column",
    type: e.CommandType["COMMAND"],
    handler: (_0x355d89, _0x52510f) => {
      let _0x27d9fe = w(
        _0x355d89,
        _0x52510f == null ? undefined : _0x52510f.unitId,
      );
      if (!_0x27d9fe || !_0x52510f) return false;
      let _0x1cafcb = _0x52510f.columnId ?? (0, e.generateRandomId)(6);
      try {
        let _0x516f73 = te(
          _0x27d9fe.snapshot,
          _0x52510f.columnGroupId,
          _0x52510f.targetColumnId,
          _0x52510f.position,
          _0x1cafcb,
        );
        return _0x516f73
          ? T(_0x27d9fe, _0x516f73.actions, [
              {
                startOffset: _0x516f73.cursorOffset,
                endOffset: _0x516f73.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  M = {
    id: "doc.command.delete-column",
    type: e.CommandType["COMMAND"],
    handler: (_0x492973, _0x38cc40) => {
      let _0x3631c1 = w(
        _0x492973,
        _0x38cc40 == null ? undefined : _0x38cc40.unitId,
      );
      if (!_0x3631c1 || !_0x38cc40) return false;
      try {
        let _0x3e2b1a = ne(
          _0x3631c1.snapshot,
          _0x38cc40.columnGroupId,
          _0x38cc40.columnId,
        );
        return _0x3e2b1a
          ? T(_0x3631c1, _0x3e2b1a.actions, [
              {
                startOffset: _0x3e2b1a.cursorOffset,
                endOffset: _0x3e2b1a.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  N = {
    id: "doc.command.delete-column-group",
    type: e.CommandType["COMMAND"],
    handler: (_0x22aac5, _0x2cfd59) => {
      let _0x3d0994 = w(
        _0x22aac5,
        _0x2cfd59 == null ? undefined : _0x2cfd59.unitId,
      );
      if (!_0x3d0994 || !_0x2cfd59) return false;
      try {
        let _0xad6ed = ae(_0x3d0994.snapshot, _0x2cfd59.columnGroupId);
        return _0xad6ed
          ? T(_0x3d0994, _0xad6ed.actions, [
              {
                startOffset: _0xad6ed.cursorOffset,
                endOffset: _0xad6ed.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  },
  P = {
    id: "doc.command.normalize-column-groups",
    type: e.CommandType["COMMAND"],
    handler: (_0x640a69, _0x190bd1) => {
      let _0x27ea19 = w(
        _0x640a69,
        _0x190bd1 == null ? undefined : _0x190bd1.unitId,
      );
      return _0x27ea19 ? T(_0x27ea19, oe(_0x27ea19.snapshot)) : false;
    },
  },
  F = {
    id: "doc.command.insert-column-group",
    type: e.CommandType["COMMAND"],
    handler: (_0x3395da, _0xe1059c) => {
      let _0x4ee8eb = be(_0xe1059c),
        _0x400589 = w(_0x3395da, _0x4ee8eb.unitId);
      if (!_0x400589) return false;
      let _0xfcc550 = Ce(_0x3395da, _0x400589.unitId, _0x4ee8eb);
      if (typeof _0xfcc550 != "number") return false;
      let _0x398dc8 = I(_0x400589.snapshot, _0xfcc550, {
          snapToParagraphEnd: true,
        }),
        _0x3c5362 = xe(_0x4ee8eb),
        _0x178eac = _0x4ee8eb.columnGroupId ?? (0, e.generateRandomId)(6),
        _0x27d0e5 = Array.from(
          { length: _0x3c5362 },
          (_0x4e47e8, _0x199748) => {
            var _0x45144a;
            return (
              ((_0x45144a = _0x4ee8eb.columnIds) == null
                ? undefined
                : _0x45144a[_0x199748]) ?? (0, e.generateRandomId)(6)
            );
          },
        );
      try {
        let _0x5ed7cc = ie(_0x400589.snapshot, {
          columnGroupId: _0x178eac,
          columnIds: _0x27d0e5,
          columnCount: _0x3c5362,
          offset: _0x398dc8,
          gap: _0x4ee8eb.gap,
          widthRatios: _0x4ee8eb.widthRatios,
        });
        return _0x5ed7cc
          ? T(_0x400589, _0x5ed7cc.actions, [
              {
                startOffset: _0x5ed7cc.cursorOffset,
                endOffset: _0x5ed7cc.cursorOffset,
                collapsed: true,
              },
            ])
          : false;
      } catch {
        return false;
      }
    },
  };
function ye(_0x19b61a, _0x14d3a3) {
  return !_0x19b61a || typeof _0x14d3a3 != "number"
    ? false
    : f(_0x19b61a, I(_0x19b61a, _0x14d3a3));
}
function I(_0x21502e, _0x5e2445, _0x1354c0 = {}) {
  let _0xc118d7 = _0x21502e.body;
  if (!(_0xc118d7 != null && _0xc118d7.dataStream)) return _0x5e2445;
  if (Te(_0x21502e, _0x5e2445)) return _0x5e2445 + 1;
  if (!_0x1354c0.snapToParagraphEnd) return _0x5e2445;
  let _0x3aaaa1 = [...(_0xc118d7.paragraphs ?? [])]
    .sort((_0x215f78, _0xf41fed) => _0x215f78.startIndex - _0xf41fed.startIndex)
    .find(
      (_0x5c3090) =>
        _0x5e2445 <= _0x5c3090.startIndex &&
        !De(_0xc118d7.dataStream, _0x5e2445, _0x5c3090.startIndex),
    );
  return _0x3aaaa1 ? _0x3aaaa1.startIndex + 1 : _0x5e2445;
}
function be(_0x78c5b5) {
  return typeof _0x78c5b5 == "string" || typeof _0x78c5b5 == "number"
    ? { value: _0x78c5b5 }
    : (_0x78c5b5 ?? {});
}
function xe(_0x54d57b) {
  var _0x3b23cb;
  return _0x54d57b.value == null
    ? (_0x54d57b.columnCount ??
        Math.max(
          2,
          ((_0x3b23cb = _0x54d57b.columnIds) == null
            ? undefined
            : _0x3b23cb.length) ?? 2,
        ))
    : (Se(_0x54d57b.value) ?? 2);
}
function Se(_0x43f3bb) {
  let _0x5c21f9 = Number(_0x43f3bb);
  return Number.isFinite(_0x5c21f9)
    ? Math.max(2, Math.min(5, Math.trunc(_0x5c21f9)))
    : null;
}
function Ce(_0x32c29f, _0x77cbfd, _0x101e00) {
  if (typeof _0x101e00.offset == "number") return _0x101e00.offset;
  let _0x37f857 = (0, t.consumeContentInsertRange)(_0x32c29f, _0x77cbfd);
  if (_0x37f857) return _0x37f857.startOffset;
  let _0xb9f5db = we(_0x32c29f);
  return !_0xb9f5db ||
    _0xb9f5db.collapsed === false ||
    _0xb9f5db.startOffset !== _0xb9f5db.endOffset
    ? null
    : _0xb9f5db.startOffset;
}
function we(_0x13da42) {
  try {
    return (
      _0x13da42.get(t.DocSelectionManagerService).getActiveTextRange() ?? null
    );
  } catch {
    return null;
  }
}
function Te(_0x5b84fc, _0x4874c6) {
  var _0x3441ba;
  let _0x3835e2 =
    (_0x3441ba = _0x5b84fc.body) == null ||
    (_0x3441ba = _0x3441ba.dataStream) == null
      ? undefined
      : _0x3441ba[_0x4874c6];
  return (
    (_0x3835e2 === e.DataStreamTreeTokenType["TABLE_END"] ||
      _0x3835e2 === a.COLUMN_GROUP_END ||
      _0x3835e2 === e.DataStreamTreeTokenType["BLOCK_END"]) &&
    f(_0x5b84fc, _0x4874c6 + 1)
  );
}
const Ee = new Set([
  e.DataStreamTreeTokenType["BLOCK_START"],
  e.DataStreamTreeTokenType["BLOCK_END"],
  a.COLUMN_GROUP_START,
  a.COLUMN_START,
  a.COLUMN_END,
  a.COLUMN_GROUP_END,
  e.DataStreamTreeTokenType["TABLE_START"],
  e.DataStreamTreeTokenType["TABLE_ROW_START"],
  e.DataStreamTreeTokenType["TABLE_CELL_START"],
  e.DataStreamTreeTokenType["TABLE_CELL_END"],
  e.DataStreamTreeTokenType["TABLE_ROW_END"],
  e.DataStreamTreeTokenType["TABLE_END"],
]);
function De(_0x811b61, _0x5949e6, _0x4681f0) {
  for (let _0x2c1b85 = _0x5949e6; _0x2c1b85 <= _0x4681f0; _0x2c1b85++)
    if (Ee.has(_0x811b61[_0x2c1b85])) return true;
  return false;
}
function Oe(_0x5262e3) {
  let _0x4b7aed = c(_0x5262e3.documentData),
    _0xe24010 = _0x4b7aed.body,
    _0x1bee70 = o(_0x4b7aed, _0x5262e3.columnGroupId),
    _0x50261b = _0x1bee70 == null ? undefined : _0x1bee70.source;
  if (
    !(_0xe24010 != null && _0xe24010.dataStream) ||
    !_0x1bee70 ||
    !(_0x50261b != null && _0x50261b.columns)
  )
    throw Error(
      "[DocsColumn]: Cannot insert a column into a missing column group.",
    );
  Me(_0x1bee70.columns["length"], _0x50261b.columns["length"]);
  let _0x11ec8e = _0x50261b.columns["findIndex"](
      (_0x30d5ac) => _0x30d5ac.columnId === _0x5262e3.targetColumnId,
    ),
    _0x5425d9 = _0x1bee70.columns[_0x11ec8e];
  if (_0x11ec8e < 0 || !_0x5425d9)
    throw Error(
      "[DocsColumn]: Cannot insert a column next to an unknown target column.",
    );
  if (_0x50261b.columns["length"] >= 5)
    throw Error("[DocsColumn]: Cannot add more than five columns.");
  let _0x2f7eb0 = _0x5262e3.position === "left" ? _0x11ec8e : _0x11ec8e + 1,
    _0x257668 =
      _0x5262e3.position === "left"
        ? _0x5425d9.startOffset
        : _0x5425d9.endOffset + 1,
    _0x52cd99 = Ae(je(_0xe24010)),
    _0x1b73ba = _0x52cd99.dataStream["length"];
  ((_0xe24010.dataStream =
    "" +
    _0xe24010.dataStream["slice"](0, _0x257668) +
    _0x52cd99.dataStream +
    _0xe24010.dataStream["slice"](_0x257668)),
    (_0xe24010.paragraphs = [
      ...L(_0xe24010.paragraphs ?? [], _0x257668, _0x1b73ba),
      ..._0x52cd99.paragraphs["map"]((_0x15f5c9) => ({
        ..._0x15f5c9,
        startIndex: _0x15f5c9.startIndex + _0x257668,
      })),
    ].sort(
      (_0x4f1b7b, _0x1e8482) => _0x4f1b7b.startIndex - _0x1e8482.startIndex,
    )),
    (_0xe24010.sectionBreaks = [
      ...L(_0xe24010.sectionBreaks ?? [], _0x257668, _0x1b73ba),
      ..._0x52cd99.sectionBreaks["map"]((_0x319254) => ({
        ..._0x319254,
        startIndex: _0x319254.startIndex + _0x257668,
      })),
    ].sort(
      (_0x4f1a59, _0x58ae12) => _0x4f1a59.startIndex - _0x58ae12.startIndex,
    )),
    (_0xe24010.textRuns = Ne(_0xe24010.textRuns ?? [], _0x257668, _0x1b73ba)),
    (_0xe24010.customBlocks = L(
      _0xe24010.customBlocks ?? [],
      _0x257668,
      _0x1b73ba,
    )),
    (_0xe24010.blockRanges = (_0xe24010.blockRanges ?? []).map((_0x253825) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x253825, _0x257668, _0x1b73ba),
    )),
    (_0xe24010.customRanges = (_0xe24010.customRanges ?? []).map((_0x56db80) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x56db80, _0x257668, _0x1b73ba),
    )),
    (_0xe24010.customDecorations = (_0xe24010.customDecorations ?? []).map(
      (_0x8a288a) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x8a288a, _0x257668, _0x1b73ba),
    )),
    (_0xe24010.tables = (_0xe24010.tables ?? []).map((_0x120c3d) =>
      (0, e.shiftExclusiveRangeOnInsert)(_0x120c3d, _0x257668, _0x1b73ba),
    )),
    (_0xe24010.columnGroups = (_0xe24010.columnGroups ?? []).map((_0x51e401) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x51e401, _0x257668, _0x1b73ba),
    )));
  let _0x2e9961 = ke(_0xe24010, _0x5262e3.columnGroupId);
  if (!(_0x2e9961 != null && _0x2e9961.columns))
    throw Error(
      "[DocsColumn]: Cannot update a missing column group after insertion.",
    );
  return (
    (_0x2e9961.columns = [
      ..._0x50261b.columns["slice"](0, _0x2f7eb0),
      { columnId: _0x5262e3.columnId, widthRatio: 1 },
      ..._0x50261b.columns["slice"](_0x2f7eb0),
    ]),
    {
      nextDocumentData: _0x4b7aed,
      inserted: {
        columnGroupId: _0x5262e3.columnGroupId,
        columnId: _0x5262e3.columnId,
        column: _0x2f7eb0,
      },
    }
  );
}
function ke(_0x13d35d, _0x389e7e) {
  var _0x59e049;
  return (_0x59e049 = _0x13d35d.columnGroups) == null
    ? undefined
    : _0x59e049.find((_0x51de9b) => _0x51de9b.columnGroupId === _0x389e7e);
}
function Ae(_0x59efbf) {
  return {
    dataStream:
      "" +
      a.COLUMN_START +
      e.DataStreamTreeTokenType["PARAGRAPH"] +
      e.DataStreamTreeTokenType["SECTION_BREAK"] +
      a.COLUMN_END,
    paragraphs: [
      { startIndex: 1, paragraphId: (0, e.createParagraphId)(_0x59efbf) },
    ],
    sectionBreaks: [
      { sectionId: (0, e.createSectionId)(new Set()), startIndex: 2 },
    ],
  };
}
function je(_0x22329e) {
  return new Set(
    (_0x22329e.paragraphs ?? []).map((_0x385197) => _0x385197.paragraphId),
  );
}
function Me(_0x383c9e, _0x4578b5) {
  if (_0x383c9e !== _0x4578b5)
    throw Error(
      "[DocsColumn]: Cannot edit a column group with mismatched source and stream columns.",
    );
}
function L(_0x1f0769, _0x2e3267, _0x3f0a0c) {
  return _0x1f0769.map((_0xfdd9b1) =>
    _0xfdd9b1.startIndex >= _0x2e3267
      ? { ..._0xfdd9b1, startIndex: _0xfdd9b1.startIndex + _0x3f0a0c }
      : _0xfdd9b1,
  );
}
function Ne(_0x14fada, _0x5d32b0, _0x1ad706) {
  return _0x14fada.map((_0x5b0828) =>
    _0x5b0828.st >= _0x5d32b0
      ? {
          ..._0x5b0828,
          st: _0x5b0828.st + _0x1ad706,
          ed: _0x5b0828.ed + _0x1ad706,
        }
      : _0x5b0828.ed > _0x5d32b0
        ? { ..._0x5b0828, ed: _0x5b0828.ed + _0x1ad706 }
        : _0x5b0828,
  );
}
function Pe(_0x2fb1e9) {
  var _0x585d9e;
  let _0x5c7f80 = _0x2fb1e9.source["columns"],
    _0x6ccca7 = _0x2fb1e9.separatorIndex;
  if (
    _0x5c7f80.length < 2 ||
    _0x6ccca7 < 0 ||
    _0x6ccca7 >= _0x5c7f80.length - 1
  )
    return null;
  let _0x35c609 = Math.max(
      0,
      ((_0x585d9e = _0x2fb1e9.source["gap"]) == null
        ? undefined
        : _0x585d9e.v) ?? 0,
    ),
    _0x15a5b7 = Math.max(
      0,
      _0x2fb1e9.availableWidth - _0x35c609 * (_0x5c7f80.length - 1),
    ),
    _0x60fbc7 = Fe(
      _0x5c7f80.map((_0x33dd9f) => _0x33dd9f.widthRatio),
      _0x15a5b7,
    ),
    _0x5f4381 = _0x5c7f80.map((_0x524cde) => {
      var _0x48a874;
      return Math.max(
        0,
        ((_0x48a874 = _0x524cde.minWidth) == null ? undefined : _0x48a874.v) ??
          0,
      );
    }),
    _0x100b6a = _0x6ccca7,
    _0x2bfb73 = _0x6ccca7 + 1,
    _0x50b2f9 = _0x60fbc7[_0x100b6a] + _0x60fbc7[_0x2bfb73],
    _0x332872 = Math.min(_0x5f4381[_0x100b6a], _0x50b2f9),
    _0xfb7a98 = Math.min(
      _0x5f4381[_0x2bfb73],
      Math.max(0, _0x50b2f9 - _0x332872),
    ),
    _0x2ad017 = Le(
      _0x60fbc7[_0x100b6a] + _0x2fb1e9.delta,
      _0x332872,
      Math.max(_0x332872, _0x50b2f9 - _0xfb7a98),
    );
  return (
    (_0x60fbc7[_0x100b6a] = _0x2ad017),
    (_0x60fbc7[_0x2bfb73] = _0x50b2f9 - _0x2ad017),
    _0x60fbc7
  );
}
function Fe(_0x1d8418, _0xc76881) {
  let _0x473847 =
    _0x1d8418.reduce((_0x5acdc8, _0xaf32b6) => _0x5acdc8 + Ie(_0xaf32b6), 0) ||
    _0x1d8418.length;
  return _0x1d8418.map((_0x32cd48) => (_0xc76881 * Ie(_0x32cd48)) / _0x473847);
}
function Ie(_0x43f958) {
  return Math.max(0, _0x43f958 || 0) || 1;
}
function Le(_0x4b7c17, _0x54b3a8, _0x585d57) {
  return Math.min(_0x585d57, Math.max(_0x54b3a8, _0x4b7c17));
}
function Re(_0x70c4ef, _0x4622e0, _0x368e12) {
  let {
    docsLeft: _0x2c21d9 = 0,
    pageMarginTop: _0x1c0a7a = 0,
    tableCellInsetX: _0x49e868 = 0,
    unitId: _0x596064 = "",
  } = _0x4622e0;
  _0x70c4ef.forEach((_0x534d14, _0x6aa4d) => {
    var _0x166831;
    let _0x218c13 =
        ((_0x534d14.pageHeight === 1 / 0 ? 0 : _0x534d14.pageHeight) +
          _0x1c0a7a) *
          _0x6aa4d +
        _0x534d14.marginTop,
      _0x1cab84 = _0x534d14.marginLeft;
    (R(
      _0x534d14,
      {
        pageIndex: _0x6aa4d,
        pageLeft: _0x1cab84,
        pageTop: _0x218c13,
        source: "page",
        getBounds: (_0x210afa, _0x4cf96c, _0x3ee526) =>
          He(_0x210afa, _0x4cf96c, _0x3ee526.columns["length"], _0x1cab84),
      },
      _0x368e12,
    ),
      (_0x166831 = _0x534d14.skeTables) == null ||
        _0x166831.forEach((_0x3b5edb, _0x3f7601) => {
          Be(
            _0x3b5edb,
            _0x3f7601,
            _0x6aa4d,
            _0x1cab84,
            _0x218c13,
            _0x2c21d9,
            _0x49e868,
            _0x596064,
            _0x368e12,
          );
        }),
      Ve(
        _0x534d14,
        _0x1cab84,
        _0x218c13,
        (_0x10b0e0, _0x1fab81, _0x30c23d, _0x3ab7fe) => {
          var _0x54e004;
          (R(
            _0x10b0e0,
            {
              pageIndex: _0x6aa4d,
              pageLeft: _0x1fab81,
              pageTop: _0x30c23d,
              source: "column",
              getBounds: (_0x28fb05, _0x27c20d) => ({
                lineWidth: Math.max(
                  B(_0x27c20d.width),
                  _0x3ab7fe - _0x27c20d.left,
                ),
                visualLeft: _0x1fab81 + _0x27c20d.left,
                visualWidth: Math.max(
                  B(_0x27c20d.width),
                  _0x3ab7fe - _0x27c20d.left,
                ),
              }),
            },
            _0x368e12,
          ),
            (_0x54e004 = _0x10b0e0.skeTables) == null ||
              _0x54e004.forEach((_0x38a4b8, _0x54473e) => {
                Be(
                  _0x38a4b8,
                  _0x54473e,
                  _0x6aa4d,
                  _0x1fab81,
                  _0x30c23d,
                  _0x2c21d9,
                  _0x49e868,
                  _0x596064,
                  _0x368e12,
                );
              }));
        },
      ));
  });
}
function ze(_0x278c83, _0x37a5b5 = {}) {
  let {
      docsLeft: _0x1a614a = 0,
      docsTop: _0x402533 = 0,
      pageMarginTop: _0x4ae119 = 0,
      resolveViewport: _0x1d1cec = false,
      skeFooters: _0xcf2a61,
      skeHeaders: _0x4b5a97,
      tableCellInsetX: _0x481ac2 = 0,
      unitId: _0x45a4c0 = "",
    } = _0x37a5b5,
    _0x5b82fe = [];
  return (
    _0x278c83.forEach((_0x1e4181, _0x4ceafa) => {
      var _0x374e7b, _0x373ade;
      let _0x23fdda =
          ((_0x1e4181.pageHeight === 1 / 0 ? 0 : _0x1e4181.pageHeight) +
            _0x4ae119) *
            _0x4ceafa +
          _0x1e4181.marginTop +
          _0x402533,
        _0x3ea6fc = _0x1e4181.marginLeft + _0x1a614a;
      z({
        contexts: _0x5b82fe,
        docsLeft: _0x1a614a,
        page: _0x1e4181,
        pageIndex: _0x4ceafa,
        pageLeft: _0x3ea6fc,
        pageTop: _0x23fdda,
        rootPage: _0x1e4181,
        resolveViewport: _0x1d1cec,
        source: "page",
        tableCellInsetX: _0x481ac2,
        unitId: _0x45a4c0,
      });
      let _0x3502bb = _0x23fdda - _0x1e4181.marginTop,
        _0x2f455b = _0x1a614a + _0x1e4181.marginLeft,
        _0x9daf07 =
          _0x1e4181.headerId == null ||
          _0x4b5a97 == null ||
          (_0x374e7b = _0x4b5a97.get(_0x1e4181.headerId)) == null
            ? undefined
            : _0x374e7b.get(_0x1e4181.pageWidth);
      _0x9daf07 != null &&
        z({
          contexts: _0x5b82fe,
          docsLeft: _0x1a614a,
          page: _0x9daf07,
          pageIndex: _0x4ceafa,
          pageLeft: _0x2f455b,
          pageTop: _0x3502bb + _0x9daf07.marginTop,
          rootPage: _0x1e4181,
          resolveViewport: _0x1d1cec,
          source: "header",
          tableCellInsetX: _0x481ac2,
          unitId: _0x45a4c0,
        });
      let _0xd1a972 =
        _0x1e4181.footerId == null ||
        _0xcf2a61 == null ||
        (_0x373ade = _0xcf2a61.get(_0x1e4181.footerId)) == null
          ? undefined
          : _0x373ade.get(_0x1e4181.pageWidth);
      (_0xd1a972 != null &&
        z({
          contexts: _0x5b82fe,
          docsLeft: _0x1a614a,
          page: _0xd1a972,
          pageIndex: _0x4ceafa,
          pageLeft: _0x2f455b,
          pageTop:
            _0x3502bb +
            _0x1e4181.pageHeight -
            _0xd1a972.height -
            _0xd1a972.marginBottom +
            _0xd1a972.marginTop,
          rootPage: _0x1e4181,
          resolveViewport: _0x1d1cec,
          source: "footer",
          tableCellInsetX: _0x481ac2,
          unitId: _0x45a4c0,
        }),
        Ve(
          _0x1e4181,
          _0x3ea6fc,
          _0x23fdda,
          (_0x402c6d, _0x3b6bee, _0x4b9fd9) => {
            z({
              contexts: _0x5b82fe,
              docsLeft: _0x1a614a,
              page: _0x402c6d,
              pageIndex: _0x4ceafa,
              pageLeft: _0x3b6bee,
              pageTop: _0x4b9fd9,
              rootPage: _0x1e4181,
              resolveViewport: _0x1d1cec,
              source: "column",
              tableCellInsetX: _0x481ac2,
              unitId: _0x45a4c0,
            });
          },
        ));
    }),
    _0x5b82fe
  );
}
function Be(
  _0x47b760,
  _0x1e0a7e,
  _0x5250b6,
  _0x8d5a3e,
  _0x1679b9,
  _0x5ce6b5,
  _0x38bd97,
  _0x47df97,
  _0x3ae371,
) {
  let _0x2f1d01 = (0, n.getDocsTableRenderViewport)(
      _0x47df97,
      Ge(_0x47b760.tableId ?? _0x1e0a7e),
    ),
    _0x8a066c = We(_0x2f1d01),
    _0x137d51 = V(_0x8d5a3e, _0x47b760.left, _0x2f1d01, _0x5ce6b5),
    _0x56b04b =
      _0x137d51 + (_0x8a066c ? _0x2f1d01.viewportWidth : _0x47b760.width),
    _0x26b0a8 = _0x8a066c ? _0x2f1d01.scrollLeft : 0,
    _0x380108 = _0x8d5a3e + _0x47b760.left,
    _0x43a7c8 = _0x1679b9 + _0x47b760.top;
  _0x47b760.rows["forEach"]((_0x41cdae) => {
    _0x41cdae.cells["forEach"]((_0x55a989) => {
      let _0x66bd2d = _0x55a989.marginLeft ?? 0,
        _0x5db978 = _0x55a989.marginRight ?? 0,
        _0x289b3e = _0x55a989.marginTop ?? 0,
        _0x22860b = _0x55a989.pageWidth ?? 0,
        _0x4b0a66 = _0x380108 + (_0x55a989.left ?? 0) - _0x26b0a8 + _0x66bd2d,
        _0x1e3f81 = _0x43a7c8 + (_0x41cdae.top ?? 0) + _0x289b3e,
        _0xe963b7 = _0x4b0a66 + _0x22860b - _0x66bd2d - _0x5db978,
        _0x5bcd76 = _0x4b0a66 + _0x38bd97,
        _0x381492 = _0xe963b7 - _0x38bd97,
        _0x38f251 = Math.max(0, _0x381492 - _0x5bcd76),
        _0x717b88 = _0x137d51,
        _0xd84eff = Math.min(_0xe963b7, _0x56b04b);
      _0x38f251 <= 0 ||
        Math.min(_0x381492, _0xd84eff) <= Math.max(_0x5bcd76, _0x717b88) ||
        R(
          _0x55a989,
          {
            clipLeft: _0x717b88,
            clipRight: _0xd84eff,
            pageIndex: _0x5250b6,
            pageLeft: _0x4b0a66,
            pageTop: _0x1e3f81,
            source: "table",
            visualLeft: _0x5bcd76,
            visualWidth: _0x38f251,
          },
          _0x3ae371,
        );
    });
  });
}
function R(_0x557900, _0x4c67f0, _0x198bbc) {
  _0x557900.sections["forEach"]((_0x52d145) => {
    _0x52d145.columns["forEach"]((_0xd057e7) => {
      _0xd057e7.lines["forEach"]((_0x15d92d) => {
        var _0x591a05;
        let _0x4755c2 =
          (_0x591a05 = _0x4c67f0.getBounds) == null
            ? undefined
            : _0x591a05.call(_0x4c67f0, _0x557900, _0xd057e7, _0x52d145);
        _0x198bbc({
          clipLeft: _0x4c67f0.clipLeft,
          clipRight: _0x4c67f0.clipRight,
          column: _0xd057e7,
          line: _0x15d92d,
          lineWidth:
            (_0x4755c2 == null ? undefined : _0x4755c2.lineWidth) ??
            (_0x4755c2 == null ? undefined : _0x4755c2.visualWidth) ??
            B(_0xd057e7.width),
          page: _0x557900,
          pageIndex: _0x4c67f0.pageIndex,
          pageLeft: _0x4c67f0.pageLeft,
          section: _0x52d145,
          sectionTop: _0x4c67f0.pageTop + _0x52d145.top,
          source: _0x4c67f0.source,
          visualLeft:
            (_0x4755c2 == null ? undefined : _0x4755c2.visualLeft) ??
            _0x4c67f0.visualLeft,
          visualWidth:
            (_0x4755c2 == null ? undefined : _0x4755c2.visualWidth) ??
            _0x4c67f0.visualWidth,
        });
      });
    });
  });
}
function z(_0x5cefb2) {
  var _0x1e4751;
  let {
    contexts: _0x448319,
    docsLeft: _0x715690,
    page: _0x351244,
    pageIndex: _0x17197b,
    pageLeft: _0x4330bf,
    pageTop: _0xecd751,
    resolveViewport: _0x490fbb,
    rootPage: _0x4fad6a,
    source: _0x57ec68,
    tableCellInsetX: _0x32677,
    unitId: _0x678c19,
  } = _0x5cefb2;
  (_0x1e4751 = _0x351244.skeTables) == null ||
    _0x1e4751.forEach((_0x23a199, _0x480fe7) => {
      let _0x3155b0 = _0x23a199.tableId ?? _0x480fe7,
        _0x58241c = _0x4330bf + _0x23a199.left,
        _0x404782 = _0xecd751 + _0x23a199.top,
        _0x10d499 = Ge(_0x3155b0),
        _0x4a27dc = _0x490fbb
          ? (0, n.getDocsTableRenderViewport)(_0x678c19, _0x10d499)
          : null,
        _0x3fc34f = We(_0x4a27dc),
        _0x46e5dd = V(_0x4330bf, _0x23a199.left, _0x4a27dc, _0x715690),
        _0x541e68 =
          _0x46e5dd + (_0x3fc34f ? _0x4a27dc.viewportWidth : _0x23a199.width),
        _0xf46d6a = _0x3fc34f ? _0x4a27dc.scrollLeft : 0,
        _0x569faf = [];
      (_0x23a199.rows["forEach"]((_0x5db6bb, _0x4a2d08) => {
        _0x5db6bb.cells["forEach"]((_0x9658f7, _0x3c6328) => {
          if (_0x9658f7.isMergedCellCovered) return;
          let _0x52e749 = _0x9658f7.marginLeft ?? 0,
            _0x3b604d = _0x9658f7.marginRight ?? 0,
            _0x9e8619 = _0x9658f7.marginTop ?? 0,
            _0x3d3ea3 = _0x9658f7.marginBottom ?? 0,
            _0x173d6a = _0x9658f7.pageWidth ?? 0,
            _0x23ddb8 = _0x9658f7.pageHeight ?? 0,
            _0x4f2a51 = _0x404782 + (_0x5db6bb.top ?? 0) + _0x9e8619,
            _0x16510f =
              _0x58241c + (_0x9658f7.left ?? 0) - _0xf46d6a + _0x52e749,
            _0x308bb7 = _0x16510f + _0x173d6a - _0x52e749 - _0x3b604d,
            _0x1117b4 = _0x16510f + _0x32677,
            _0x9ebef2 = _0x308bb7 - _0x32677,
            _0x2132e6 = Math.max(0, _0x9ebef2 - _0x1117b4),
            _0x22776f = _0x46e5dd,
            _0x567a07 = Math.min(_0x308bb7, _0x541e68);
          _0x2132e6 <= 0 ||
            Math.min(_0x9ebef2, _0x567a07) <= Math.max(_0x1117b4, _0x22776f) ||
            _0x569faf.push({
              cell: _0x9658f7,
              cellRect: {
                bottom: _0x4f2a51 + _0x23ddb8 - _0x3d3ea3 - _0x9e8619,
                left: _0x16510f,
                right: _0x308bb7,
                top: _0x4f2a51,
              },
              clipLeft: _0x22776f,
              clipRight: _0x567a07,
              columnIndex: _0x3c6328,
              pageLeft: _0x16510f,
              pageTop: _0x4f2a51,
              row: _0x5db6bb,
              rowIndex: _0x4a2d08,
              visualLeft: _0x1117b4,
              visualWidth: _0x2132e6,
            });
        });
      }),
        _0x448319.push({
          cells: _0x569faf,
          page: _0x351244,
          pageIndex: _0x17197b,
          pageLeft: _0x4330bf,
          pageTop: _0xecd751,
          rootPage: _0x4fad6a,
          source: _0x57ec68,
          table: _0x23a199,
          tableId: _0x3155b0,
          tableRect: {
            bottom: _0x404782 + _0x23a199.height,
            left: _0x58241c,
            right: _0x58241c + _0x23a199.width,
            top: _0x404782,
          },
        }));
    });
}
function Ve(_0x5100cf, _0x52d385, _0x382fc6, _0x345677) {
  var _0x1bcfc1;
  (_0x1bcfc1 = _0x5100cf.skeColumnGroups) == null ||
    _0x1bcfc1.forEach((_0x5d76d8) => {
      _0x5d76d8.columns["forEach"]((_0x379daa) => {
        let _0x52eebd = Math.max(
          0,
          (_0x379daa.width ?? _0x379daa.page["pageWidth"] ?? 0) -
            _0x379daa.page["marginLeft"] -
            _0x379daa.page["marginRight"],
        );
        _0x345677(
          _0x379daa.page,
          _0x52d385 +
            _0x5d76d8.left +
            _0x379daa.left +
            _0x379daa.page["marginLeft"],
          _0x382fc6 +
            _0x5d76d8.top +
            _0x379daa.top +
            _0x379daa.page["marginTop"],
          _0x52eebd,
        );
      });
    });
}
function He(_0x5a5637, _0x31a128, _0x4d9cc9, _0x42e630) {
  if (_0x4d9cc9 !== 1 || !Number.isFinite(_0x5a5637.pageWidth)) return;
  let _0x1dd9ab = _0x42e630 + _0x31a128.left,
    _0x4247af = _0x5a5637.pageWidth - _0x5a5637.marginRight,
    _0x11a390 = Math.max(0, _0x4247af - _0x1dd9ab),
    _0x425dda = Math.max(
      0,
      _0x5a5637.pageWidth - _0x5a5637.marginLeft - _0x5a5637.marginRight,
    );
  return _0x11a390 > 0
    ? { lineWidth: _0x425dda, visualLeft: _0x1dd9ab, visualWidth: _0x11a390 }
    : undefined;
}
function B(_0x53cff1) {
  return Number.isFinite(_0x53cff1) ? _0x53cff1 : 0;
}
function Ue(_0x2c9379) {
  return (
    (_0x2c9379.leadingInsetLeft ?? 0) +
    _0x2c9379.contentWidth +
    (_0x2c9379.trailingInsetRight ?? 0)
  );
}
function We(_0x4b5db2) {
  return _0x4b5db2 != null && Ue(_0x4b5db2) > _0x4b5db2.viewportWidth;
}
function V(_0x593807, _0x417402, _0x21bba1, _0x462aac) {
  let _0x3eb3fe = _0x21bba1 == null ? undefined : _0x21bba1.viewportLeft;
  return _0x3eb3fe == null ? _0x593807 + _0x417402 : _0x3eb3fe - _0x462aac;
}
function Ge(_0x55313f) {
  return _0x55313f.includes("#-#") ? _0x55313f.split("#-#")[0] : _0x55313f;
}
function Ke(_0x1da971) {
  let _0x108a94 = c(_0x1da971),
    _0x1752c5 = _0x108a94.body;
  if (!_0x1752c5) return { nextDocumentData: _0x108a94, changed: false };
  _0x1752c5.dataStream ??= "";
  let _0x1d2b12 = qe(_0x108a94);
  _0x1d2b12 = Je(_0x108a94) || _0x1d2b12;
  let _0x45b9eb = _0x1752c5.columnGroups ?? [];
  if (_0x45b9eb.length === 0)
    return (
      (_0x1d2b12 = tt(_0x108a94) || _0x1d2b12),
      { nextDocumentData: _0x108a94, changed: _0x1d2b12 }
    );
  for (let _0x195eb3 of _0x45b9eb)
    _0x1d2b12 = nt(_0x195eb3, _0x1752c5.dataStream) || _0x1d2b12;
  return (
    (_0x1d2b12 = tt(_0x108a94) || _0x1d2b12),
    { nextDocumentData: _0x108a94, changed: _0x1d2b12 }
  );
}
function qe(_0x14ade2) {
  let _0x5df1bd = _0x14ade2.body,
    _0x1c2d32 = Ye(
      (_0x5df1bd == null ? undefined : _0x5df1bd.columnGroups) ?? [],
    );
  return !(_0x5df1bd != null && _0x5df1bd.dataStream) || _0x1c2d32.length === 0
    ? false
    : (_0x1c2d32
        .sort(
          (_0x35eb55, _0x1db5ce) => _0x1db5ce.startIndex - _0x35eb55.startIndex,
        )
        .forEach((_0x43ab67) => Xe(_0x14ade2, _0x43ab67)),
      true);
}
function Je(_0x3f7260) {
  let _0x2ff334 = _0x3f7260.body,
    _0x23e2ed = (_0x2ff334 == null ? undefined : _0x2ff334.columnGroups) ?? [];
  if (!(_0x2ff334 != null && _0x2ff334.dataStream) || _0x23e2ed.length === 0)
    return false;
  let _0x35b7e7 = _0x23e2ed.filter((_0x1601f9) =>
    st(_0x2ff334.dataStream, _0x1601f9.startIndex, _0x1601f9.endIndex),
  );
  return _0x35b7e7.length === 0
    ? false
    : (_0x35b7e7
        .sort(
          (_0x4747b5, _0x253023) => _0x253023.startIndex - _0x4747b5.startIndex,
        )
        .forEach((_0x9985d) => Ze(_0x3f7260, _0x9985d)),
      true);
}
function Ye(_0x589d99) {
  return (_0x589d99 ?? []).filter((_0xa8e10) =>
    (_0x589d99 ?? []).some(
      (_0x4a4440) =>
        _0x4a4440.columnGroupId !== _0xa8e10.columnGroupId &&
        _0xa8e10.startIndex > _0x4a4440.startIndex &&
        _0xa8e10.endIndex < _0x4a4440.endIndex,
    ),
  );
}
function Xe(_0x1d34c1, _0x37d6ec) {
  Ze(_0x1d34c1, _0x37d6ec);
}
function Ze(_0x5a4640, _0x4bb4eb) {
  let _0x36f720 = _0x5a4640.body,
    _0x28252d = (0, e.getColumnGroupRangeInterval)(_0x4bb4eb).endOffset,
    _0x5ea33b = Qe(_0x36f720.dataStream, _0x4bb4eb.startIndex, _0x28252d);
  ((_0x36f720.dataStream = $e(_0x36f720.dataStream, _0x5ea33b)),
    (_0x36f720.paragraphs = H(_0x36f720.paragraphs ?? [], _0x5ea33b)),
    (_0x36f720.sectionBreaks = H(_0x36f720.sectionBreaks ?? [], _0x5ea33b)),
    (_0x36f720.customBlocks = H(_0x36f720.customBlocks ?? [], _0x5ea33b)),
    (_0x36f720.blockRanges = U(_0x36f720.blockRanges ?? [], _0x5ea33b)),
    (_0x36f720.customRanges = U(_0x36f720.customRanges ?? [], _0x5ea33b)),
    (_0x36f720.customDecorations = U(
      _0x36f720.customDecorations ?? [],
      _0x5ea33b,
    )),
    (_0x36f720.tables = U(_0x36f720.tables ?? [], _0x5ea33b)),
    (_0x36f720.columnGroups = U(
      (_0x36f720.columnGroups ?? []).filter(
        (_0x7b1818) => _0x7b1818.columnGroupId !== _0x4bb4eb.columnGroupId,
      ),
      _0x5ea33b,
    )),
    (_0x36f720.textRuns = et(_0x36f720.textRuns ?? [], _0x5ea33b)));
}
function Qe(_0xe37461, _0x2868c1, _0x184823) {
  let _0x32093a = new Set([
      a.COLUMN_GROUP_START,
      a.COLUMN_START,
      a.COLUMN_END,
      a.COLUMN_GROUP_END,
    ]),
    _0xe42a76 = [];
  for (let _0x5574a0 = _0x2868c1; _0x5574a0 < _0x184823; _0x5574a0++)
    _0x32093a.has(_0xe37461[_0x5574a0]) && _0xe42a76.push(_0x5574a0);
  return _0xe42a76;
}
function $e(_0x302de9, _0x2d808f) {
  let _0x3cf796 = new Set(_0x2d808f),
    _0x2c30ee = "";
  for (let _0x20df6e = 0; _0x20df6e < _0x302de9.length; _0x20df6e++)
    _0x3cf796.has(_0x20df6e) || (_0x2c30ee += _0x302de9[_0x20df6e]);
  return _0x2c30ee;
}
function H(_0xc7efcc, _0x94f9a4) {
  return _0xc7efcc
    .map((_0x15bcd4) => ({
      ..._0x15bcd4,
      startIndex: W(_0x15bcd4.startIndex, _0x94f9a4),
    }))
    .sort(
      (_0x313b2b, _0xf6c15a) => _0x313b2b.startIndex - _0xf6c15a.startIndex,
    );
}
function U(_0x4dcda6, _0x4962a8) {
  return _0x4dcda6
    .map((_0x315f5b) => ({
      ..._0x315f5b,
      startIndex: W(_0x315f5b.startIndex, _0x4962a8),
      endIndex: W(_0x315f5b.endIndex, _0x4962a8),
    }))
    .sort(
      (_0x2c6aff, _0x348da2) => _0x2c6aff.startIndex - _0x348da2.startIndex,
    );
}
function et(_0x3d60f7, _0x33ee75) {
  return _0x3d60f7
    .map((_0x131989) => ({
      ..._0x131989,
      st: W(_0x131989.st, _0x33ee75),
      ed: W(_0x131989.ed, _0x33ee75),
    }))
    .sort((_0x280913, _0x250b2a) => _0x280913.st - _0x250b2a.st);
}
function W(_0x1feef0, _0x35ae2a) {
  return (
    _0x1feef0 - _0x35ae2a.filter((_0x4a029b) => _0x4a029b < _0x1feef0).length
  );
}
function tt(_0x4cf479) {
  let _0xe9be1b = _0x4cf479.body;
  return !_0xe9be1b || _0xe9be1b.dataStream["length"] > 0
    ? false
    : ((_0xe9be1b.dataStream =
        "" +
        e.DataStreamTreeTokenType["PARAGRAPH"] +
        e.DataStreamTreeTokenType["SECTION_BREAK"]),
      (_0xe9be1b.paragraphs = [
        {
          startIndex: 0,
          paragraphId: (0, e.createParagraphId)(
            new Set(
              (_0xe9be1b.paragraphs ?? []).map(
                (_0x4def78) => _0x4def78.paragraphId,
              ),
            ),
          ),
        },
      ]),
      (_0xe9be1b.sectionBreaks = [
        { sectionId: (0, e.createSectionId)(new Set()), startIndex: 1 },
      ]),
      true);
}
function nt(_0x796130, _0x403a9c) {
  var _0x42d10c;
  let _0x97915e = ot(_0x403a9c, _0x796130.startIndex, _0x796130.endIndex);
  if (_0x97915e === 0) return false;
  let _0x131af7 = rt(
      _0x796130.columnGroupId,
      _0x796130.columns ?? [],
      _0x97915e,
    ),
    _0x3d6bfd = at(_0x796130.gap),
    _0x5ac4ba = !ct(_0x796130.columns ?? [], _0x131af7),
    _0x45416d =
      ((_0x42d10c = _0x796130.gap) == null ? undefined : _0x42d10c.v) !==
      _0x3d6bfd.v,
    _0x2c5915 = _0x796130.layout == null,
    _0x1bc170 = _0x796130.responsive == null;
  return !_0x5ac4ba && !_0x45416d && !_0x2c5915 && !_0x1bc170
    ? false
    : ((_0x796130.columns = _0x131af7),
      (_0x796130.gap = _0x3d6bfd),
      (_0x796130.layout ??= e.ColumnLayoutType["FIXED"]),
      (_0x796130.responsive ??= e.ColumnResponsiveType["STACK"]),
      true);
}
function rt(_0x3dd0f3, _0x33db3c, _0x380df6) {
  return Array.from({ length: _0x380df6 }, (_0x53cce1, _0x56786a) => {
    let _0x33576d = _0x33db3c[_0x56786a];
    return _0x33576d
      ? { ..._0x33576d, widthRatio: it(_0x33576d.widthRatio) }
      : { columnId: _0x3dd0f3 + "-column-" + (_0x56786a + 1), widthRatio: 1 };
  });
}
function it(_0x2cd81e) {
  return Number.isFinite(_0x2cd81e) && _0x2cd81e > 0 ? _0x2cd81e : 1;
}
function at(_0x1377ea) {
  return Number.isFinite(_0x1377ea == null ? undefined : _0x1377ea.v) &&
    _0x1377ea.v >= 0
    ? { v: _0x1377ea.v }
    : { v: 12 };
}
function ot(_0x1be931, _0x2c7abd, _0x42b941) {
  let _0x3c9331 = (0, e.getColumnGroupRangeInterval)({
      startIndex: _0x2c7abd,
      endIndex: _0x42b941,
    }).endOffset,
    _0x379b36 = 0;
  for (let _0x539024 = _0x2c7abd; _0x539024 < _0x3c9331; _0x539024++)
    _0x1be931[_0x539024] === a.COLUMN_START && _0x379b36++;
  return _0x379b36;
}
function st(_0x231098, _0xf9bda1, _0xd2239d) {
  if (
    _0x231098[_0xf9bda1] !== a.COLUMN_GROUP_START ||
    _0x231098[_0xd2239d] !== a.COLUMN_GROUP_END
  )
    return true;
  let _0x150bd1 = (0, e.getColumnGroupRangeInterval)({
      startIndex: _0xf9bda1,
      endIndex: _0xd2239d,
    }).endOffset,
    _0x2186a2 = -1,
    _0x4245e1 = 0;
  for (let _0x554c78 = _0xf9bda1; _0x554c78 < _0x150bd1; _0x554c78++) {
    let _0x22ef7a = _0x231098[_0x554c78];
    if (_0x22ef7a === a.COLUMN_START) {
      if (_0x2186a2 >= 0) return true;
      _0x2186a2 = _0x554c78;
      continue;
    }
    if (_0x22ef7a === a.COLUMN_END) {
      if (_0x2186a2 < 0) return true;
      (_0x4245e1++, (_0x2186a2 = -1));
    }
  }
  return _0x2186a2 >= 0 || _0x4245e1 < 2 || _0x4245e1 > 5;
}
function ct(_0x3a21fa, _0x46ce07) {
  return (
    _0x3a21fa.length === _0x46ce07.length &&
    _0x3a21fa.every((_0x59f03f, _0x2cb1c2) => {
      let _0x269e8b = _0x46ce07[_0x2cb1c2];
      return (
        _0x59f03f.columnId === _0x269e8b.columnId &&
        _0x59f03f.widthRatio === _0x269e8b.widthRatio &&
        e.Tools["diffValue"](_0x59f03f.minWidth, _0x269e8b.minWidth)
      );
    })
  );
}
function lt(_0x1442f6, _0x1ebf25 = {}) {
  var _0x285200;
  let _0x4e944a = Ke(_0x1442f6).nextDocumentData,
    _0x2e9f99 = c(_0x4e944a),
    _0x40da39 = _0x2e9f99.body,
    _0x5e8f3f = _0x4e944a.body,
    _0x52e6be = [
      ...((_0x5e8f3f == null ? undefined : _0x5e8f3f.columnGroups) ?? []),
    ].sort(
      (_0x53da72, _0x3574f6) => _0x53da72.startIndex - _0x3574f6.startIndex,
    );
  if (
    !_0x40da39 ||
    !_0x5e8f3f ||
    !ut(_0x40da39.dataStream, _0x5e8f3f.dataStream, _0x52e6be)
  )
    return { nextDocumentData: _0x2e9f99, tableIdsByColumnGroupId: {} };
  let _0x51721b = {},
    _0x317dd9 = new Set([
      ...Object.keys(_0x4e944a.tableSource ?? {}),
      ...(
        ((_0x285200 = _0x4e944a.body) == null ? undefined : _0x285200.tables) ??
        []
      ).map((_0x505912) => _0x505912.tableId),
    ]),
    _0x94a95c = dt(_0x5e8f3f.dataStream, _0x52e6be),
    _0x36864e = _0x52e6be.map((_0x198a7b) => {
      let _0x38d6ff = _t(
        _0x198a7b.columnGroupId,
        _0x317dd9,
        _0x1ebf25.tableIdFactory,
      );
      return (
        (_0x51721b[_0x198a7b.columnGroupId] = _0x38d6ff),
        {
          startIndex: K(_0x198a7b.startIndex, _0x52e6be),
          endIndex: K(G(_0x198a7b), _0x52e6be),
          tableId: _0x38d6ff,
        }
      );
    });
  return (
    (_0x40da39.dataStream = _0x94a95c),
    (_0x40da39.paragraphs = q(_0x40da39.paragraphs ?? [], _0x52e6be)),
    (_0x40da39.sectionBreaks = q(_0x40da39.sectionBreaks ?? [], _0x52e6be)),
    (_0x40da39.customBlocks = q(_0x40da39.customBlocks ?? [], _0x52e6be)),
    (_0x40da39.textRuns = bt(_0x40da39.textRuns ?? [], _0x52e6be)),
    (_0x40da39.blockRanges = J(_0x40da39.blockRanges ?? [], _0x52e6be)),
    (_0x40da39.customRanges = J(_0x40da39.customRanges ?? [], _0x52e6be)),
    (_0x40da39.customDecorations = J(
      _0x40da39.customDecorations ?? [],
      _0x52e6be,
    )),
    (_0x40da39.tables = [
      ...J(_0x40da39.tables ?? [], _0x52e6be),
      ..._0x36864e,
    ].sort(
      (_0x411502, _0x443178) => _0x411502.startIndex - _0x443178.startIndex,
    )),
    (_0x40da39.columnGroups = []),
    (_0x2e9f99.tableSource = {
      ..._0x2e9f99.tableSource,
      ...Object.fromEntries(
        _0x52e6be.map((_0x294651) => [
          _0x51721b[_0x294651.columnGroupId],
          pt(_0x4e944a, _0x294651, _0x51721b[_0x294651.columnGroupId]),
        ]),
      ),
    }),
    { nextDocumentData: _0x2e9f99, tableIdsByColumnGroupId: _0x51721b }
  );
}
function ut(_0x59be77, _0x2d559f, _0x2d4e84) {
  return !!(_0x59be77 && _0x2d559f && _0x2d4e84.length > 0);
}
function dt(_0x1b89bb, _0x5c6f73) {
  let _0x5d3ece = 0,
    _0x20eee4 = "";
  return (
    _0x5c6f73.forEach((_0x5cb641) => {
      ((_0x20eee4 += _0x1b89bb.slice(_0x5d3ece, _0x5cb641.startIndex)),
        (_0x20eee4 += ft(_0x1b89bb, _0x5cb641)),
        (_0x5d3ece = G(_0x5cb641)));
    }),
    _0x20eee4 + _0x1b89bb.slice(_0x5d3ece)
  );
}
function ft(_0x151f70, _0x572809) {
  let _0x2fbb61 = { ...e.DataStreamTreeTokenType, ...a },
    _0x28f532 = "" + _0x2fbb61.TABLE_START + _0x2fbb61.TABLE_ROW_START,
    _0x2c0f71 = G(_0x572809);
  for (
    let _0x108314 = _0x572809.startIndex;
    _0x108314 < _0x2c0f71;
    _0x108314++
  ) {
    let _0x40b76a = _0x151f70[_0x108314];
    if (
      _0x40b76a !== _0x2fbb61.COLUMN_GROUP_START &&
      _0x40b76a !== _0x2fbb61.COLUMN_GROUP_END
    ) {
      if (_0x40b76a === _0x2fbb61.COLUMN_START) {
        _0x28f532 += _0x2fbb61.TABLE_CELL_START;
        continue;
      }
      if (_0x40b76a === _0x2fbb61.COLUMN_END) {
        _0x28f532 += _0x2fbb61.TABLE_CELL_END;
        continue;
      }
      _0x28f532 += _0x40b76a;
    }
  }
  return "" + _0x28f532 + _0x2fbb61.TABLE_ROW_END + _0x2fbb61.TABLE_END;
}
function G(_0x1f7454) {
  return (0, e.getColumnGroupRangeInterval)(_0x1f7454).endOffset;
}
function pt(_0x1b5f19, _0x54c6c9, _0x44d687) {
  var _0x5c2218;
  let _0x457276 = _0x54c6c9.columns ?? [],
    _0x1025f0 = Math.max(
      1,
      _0x457276.length,
      vt(
        ((_0x5c2218 = _0x1b5f19.body) == null
          ? undefined
          : _0x5c2218.dataStream) ?? "",
        _0x54c6c9,
      ),
    ),
    _0x5315ed = yt(_0x1b5f19),
    _0x31d702 = Array.from({ length: _0x1025f0 }, (_0x163fc9, _0x74f3e) => {
      var _0x564f78;
      return mt(
        (_0x564f78 = _0x457276[_0x74f3e]) == null
          ? undefined
          : _0x564f78.widthRatio,
      );
    }),
    _0x3f5027 =
      _0x31d702.reduce((_0x11240f, _0x82b060) => _0x11240f + _0x82b060, 0) ||
      _0x1025f0,
    _0x1ad885 = Array.from({ length: _0x1025f0 }, (_0x3d6778, _0x4e1ab6) => {
      let _0x497503 = _0x31d702[_0x4e1ab6];
      return gt((_0x5315ed * _0x497503) / _0x3f5027);
    });
  return {
    tableRows: [
      {
        tableCells: Array.from({ length: _0x1025f0 }, () => ht()),
        trHeight: { val: { v: 30 }, hRule: e.TableRowHeightRule["AUTO"] },
      },
    ],
    tableColumns: _0x1ad885,
    tableId: _0x44d687,
    align: e.TableAlignmentType["START"],
    indent: { v: 0 },
    textWrap: e.TableTextWrapType["NONE"],
    position: {
      positionH: { relativeFrom: e.ObjectRelativeFromH["PAGE"], posOffset: 0 },
      positionV: { relativeFrom: e.ObjectRelativeFromV["PAGE"], posOffset: 0 },
    },
    dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
    cellMargin: {
      start: { v: 10 },
      end: { v: 10 },
      top: { v: 5 },
      bottom: { v: 5 },
    },
    size: { type: e.TableSizeType["UNSPECIFIED"], width: { v: _0x5315ed } },
  };
}
function mt(_0x5b2cb2) {
  return Number.isFinite(_0x5b2cb2) && (_0x5b2cb2 ?? 0) > 0 ? _0x5b2cb2 : 1;
}
function ht() {
  return {
    margin: {
      start: { v: 10 },
      end: { v: 10 },
      top: { v: 5 },
      bottom: { v: 5 },
    },
  };
}
function gt(_0x39fab6) {
  return {
    size: { type: e.TableSizeType["SPECIFIED"], width: { v: _0x39fab6 } },
  };
}
function _t(_0x5008ab, _0x3dbc39, _0x5c6225) {
  let _0xa8b4bc =
      (_0x5c6225 == null ? undefined : _0x5c6225(_0x5008ab)) ??
      _0x5008ab + "-table",
    _0x45f894 = _0xa8b4bc,
    _0x480439 = 1;
  for (; _0x3dbc39.has(_0x45f894);) _0x45f894 = _0xa8b4bc + "-" + _0x480439++;
  return (_0x3dbc39.add(_0x45f894), _0x45f894);
}
function vt(_0x50d9a9, _0x48e03d) {
  let _0x493cf5 = 0;
  for (
    let _0x1039a9 = _0x48e03d.startIndex;
    _0x1039a9 < _0x48e03d.endIndex;
    _0x1039a9++
  )
    _0x50d9a9[_0x1039a9] === a.COLUMN_START && _0x493cf5++;
  return _0x493cf5;
}
function yt(_0x13f393) {
  var _0x19bf1f, _0x33991e, _0x44ce43;
  let _0x594fd6 =
      (_0x19bf1f = _0x13f393.documentStyle) == null
        ? undefined
        : _0x19bf1f.pageSize,
    _0x2afa76 = (_0x594fd6 == null ? undefined : _0x594fd6.width) ?? 0,
    _0x453512 =
      ((_0x33991e = _0x13f393.documentStyle) == null
        ? undefined
        : _0x33991e.marginLeft) ?? 0,
    _0x2858ad =
      ((_0x44ce43 = _0x13f393.documentStyle) == null
        ? undefined
        : _0x44ce43.marginRight) ?? 0;
  return Math.max(0, _0x2afa76 - _0x453512 - _0x2858ad);
}
function K(_0x1a0495, _0x1bb7a2) {
  return (
    _0x1a0495 +
    _0x1bb7a2.reduce(
      (_0x2ba838, _0x594ba7) =>
        _0x1a0495 <= _0x594ba7.startIndex
          ? _0x2ba838
          : _0x2ba838 + (_0x1a0495 < _0x594ba7.endIndex ? 1 : 2),
      0,
    )
  );
}
function q(_0x1735a0, _0x47249f) {
  return _0x1735a0.map((_0x1b65c7) => ({
    ..._0x1b65c7,
    startIndex: K(_0x1b65c7.startIndex, _0x47249f),
  }));
}
function J(_0x4b516a, _0x233c85) {
  return _0x4b516a.map((_0x451693) => ({
    ..._0x451693,
    startIndex: K(_0x451693.startIndex, _0x233c85),
    endIndex: K(_0x451693.endIndex, _0x233c85),
  }));
}
function bt(_0x3044b4, _0x3cba49) {
  return _0x3044b4.map((_0x357bce) => ({
    ..._0x357bce,
    st: K(_0x357bce.st, _0x3cba49),
    ed: K(_0x357bce.ed, _0x3cba49),
  }));
}
const xt = new Set([
  a.COLUMN_GROUP_START,
  a.COLUMN_START,
  a.COLUMN_END,
  a.COLUMN_GROUP_END,
]);
function St(_0x4ec213, _0x348906) {
  return _0x4ec213.columns["some"](
    (_0x5abc43) =>
      _0x348906 > _0x5abc43.startOffset && _0x348906 < _0x5abc43.endOffset,
  );
}
function Ct(_0x557c10, _0x202400) {
  var _0x57080a;
  let _0x149a7d =
    (_0x57080a = _0x557c10.body) == null ||
    (_0x57080a = _0x57080a.dataStream) == null
      ? undefined
      : _0x57080a[_0x202400];
  return _0x149a7d != null && xt.has(_0x149a7d);
}
function wt(_0x72b85c, _0x4f7a93, _0x188561) {
  return Tt(_0x72b85c, _0x188561) != null && !Et(_0x72b85c, _0x4f7a93);
}
function Tt(_0x11a21d, _0x81d5f0) {
  var _0x3d3a0b;
  let _0x3f3c18 =
    ((_0x3d3a0b = _0x11a21d.body) == null
      ? undefined
      : _0x3d3a0b.columnGroups) ?? [];
  for (let _0x55f7b7 of _0x3f3c18) {
    let _0x1190ba = o(_0x11a21d, _0x55f7b7.columnGroupId);
    if (_0x1190ba && St(_0x1190ba, _0x81d5f0)) return _0x1190ba;
  }
  return null;
}
function Et(_0x5f07bf, _0x3e9380) {
  var _0x5c22af, _0x3d89c7;
  let _0x3f0f7a =
      ((_0x5c22af = _0x5f07bf.body) == null
        ? undefined
        : _0x5c22af.dataStream) ?? "",
    _0x2c824e = Math.max(
      0,
      Math.min(_0x3e9380.startOffset, _0x3e9380.endOffset),
    ),
    _0x27f0c7 = Math.min(
      _0x3f0f7a.length - 1,
      Math.max(_0x3e9380.startOffset, _0x3e9380.endOffset),
    );
  for (let _0x4a76e9 = _0x2c824e; _0x4a76e9 <= _0x27f0c7; _0x4a76e9++)
    if (Ct(_0x5f07bf, _0x4a76e9)) return true;
  return (
    ((_0x3d89c7 = _0x5f07bf.body) == null
      ? undefined
      : _0x3d89c7.columnGroups) ?? []
  ).some((_0x2c1f3e) =>
    Dt(_0x2c824e, _0x27f0c7, _0x2c1f3e.startIndex, _0x2c1f3e.endIndex),
  );
}
function Dt(_0x3436cc, _0x115108, _0x58c318, _0x229163) {
  return _0x3436cc <= _0x58c318 && _0x115108 >= _0x229163;
}
function Ot(_0x4c618d) {
  let _0x4bda70 = c(_0x4c618d.documentData),
    _0x9cfa25 = _0x4bda70.body;
  if (!(_0x9cfa25 != null && _0x9cfa25.dataStream))
    return {
      nextDocumentData: _0x4bda70,
      movedRange: _0x4c618d.movedRange,
      changed: false,
    };
  let _0x35da3f = kt(_0x4bda70);
  if (_0x35da3f.length === 0)
    return {
      nextDocumentData: _0x4bda70,
      movedRange: _0x4c618d.movedRange,
      changed: false,
    };
  let _0x15907d = new Set(
      (_0x9cfa25.paragraphs ?? []).map((_0x3b3cba) => _0x3b3cba.paragraphId),
    ),
    _0x342925 = { ..._0x4c618d.movedRange },
    _0x5632d4 = 0;
  return (
    _0x35da3f.forEach((_0xdc6dec) => {
      let _0x38a419 = _0xdc6dec + _0x5632d4,
        _0x446c19 = jt(_0x15907d);
      (Mt(_0x9cfa25, _0x38a419, _0x446c19),
        (_0x342925 = Nt(_0x342925, _0x38a419, _0x446c19.dataStream["length"])),
        (_0x5632d4 += _0x446c19.dataStream["length"]));
    }),
    { nextDocumentData: _0x4bda70, movedRange: _0x342925, changed: true }
  );
}
function kt(_0x4b99b7) {
  let _0x5c1aaa = _0x4b99b7.body,
    _0x39f47a = [];
  for (let _0x380e7e of (_0x5c1aaa == null
    ? undefined
    : _0x5c1aaa.columnGroups) ?? []) {
    let _0x38641a = o(_0x4b99b7, _0x380e7e.columnGroupId);
    _0x38641a &&
      _0x38641a.columns["forEach"]((_0x8798d) => {
        At(_0x5c1aaa, _0x8798d.startOffset, _0x8798d.endOffset) ||
          _0x39f47a.push(_0x8798d.endOffset);
      });
  }
  return _0x39f47a.sort((_0x544714, _0x4e92e0) => _0x544714 - _0x4e92e0);
}
function At(_0x537d33, _0x27bdd2, _0x16b208) {
  return (_0x537d33.paragraphs ?? []).some(
    (_0x2bcfe7) =>
      _0x2bcfe7.startIndex > _0x27bdd2 && _0x2bcfe7.startIndex < _0x16b208,
  );
}
function jt(_0x40f5f8) {
  let _0x512676 = (0, e.createParagraphId)(_0x40f5f8);
  return (
    _0x40f5f8.add(_0x512676),
    {
      dataStream:
        "" +
        e.DataStreamTreeTokenType["PARAGRAPH"] +
        e.DataStreamTreeTokenType["SECTION_BREAK"],
      paragraphs: [{ startIndex: 0, paragraphId: _0x512676 }],
      sectionBreaks: [
        { sectionId: (0, e.createSectionId)(new Set()), startIndex: 1 },
      ],
    }
  );
}
function Mt(_0x1b7439, _0x569c4a, _0x3e24f7) {
  let _0x562247 = _0x3e24f7.dataStream["length"];
  ((_0x1b7439.dataStream =
    "" +
    _0x1b7439.dataStream["slice"](0, _0x569c4a) +
    _0x3e24f7.dataStream +
    _0x1b7439.dataStream["slice"](_0x569c4a)),
    (_0x1b7439.paragraphs = [
      ...Y(_0x1b7439.paragraphs ?? [], _0x569c4a, _0x562247),
      ..._0x3e24f7.paragraphs["map"]((_0x3934ee) => ({
        ..._0x3934ee,
        startIndex: _0x3934ee.startIndex + _0x569c4a,
      })),
    ].sort(
      (_0x4611e2, _0x168a97) => _0x4611e2.startIndex - _0x168a97.startIndex,
    )),
    (_0x1b7439.sectionBreaks = [
      ...Y(_0x1b7439.sectionBreaks ?? [], _0x569c4a, _0x562247),
      ..._0x3e24f7.sectionBreaks["map"]((_0x3e26ab) => ({
        ..._0x3e26ab,
        startIndex: _0x3e26ab.startIndex + _0x569c4a,
      })),
    ].sort(
      (_0x539c48, _0x478140) => _0x539c48.startIndex - _0x478140.startIndex,
    )),
    (_0x1b7439.textRuns = Pt(_0x1b7439.textRuns ?? [], _0x569c4a, _0x562247)),
    (_0x1b7439.customBlocks = Y(
      _0x1b7439.customBlocks ?? [],
      _0x569c4a,
      _0x562247,
    )),
    (_0x1b7439.blockRanges = (_0x1b7439.blockRanges ?? []).map((_0x32b761) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x32b761, _0x569c4a, _0x562247),
    )),
    (_0x1b7439.customRanges = (_0x1b7439.customRanges ?? []).map((_0x9e2868) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x9e2868, _0x569c4a, _0x562247),
    )),
    (_0x1b7439.customDecorations = (_0x1b7439.customDecorations ?? []).map(
      (_0x27528f) =>
        (0, e.shiftInclusiveRangeOnInsert)(_0x27528f, _0x569c4a, _0x562247),
    )),
    (_0x1b7439.tables = (_0x1b7439.tables ?? []).map((_0x5d0e73) =>
      (0, e.shiftExclusiveRangeOnInsert)(_0x5d0e73, _0x569c4a, _0x562247),
    )),
    (_0x1b7439.columnGroups = (_0x1b7439.columnGroups ?? []).map((_0x196f2b) =>
      (0, e.shiftInclusiveRangeOnInsert)(_0x196f2b, _0x569c4a, _0x562247),
    )));
}
function Nt(_0x2f20e8, _0x356512, _0x3c9191) {
  return _0x2f20e8.startOffset >= _0x356512
    ? {
        startOffset: _0x2f20e8.startOffset + _0x3c9191,
        endOffset: _0x2f20e8.endOffset + _0x3c9191,
      }
    : _0x2f20e8.endOffset > _0x356512
      ? { ..._0x2f20e8, endOffset: _0x2f20e8.endOffset + _0x3c9191 }
      : _0x2f20e8;
}
function Y(_0x4a1c33, _0x23a2a2, _0x5dc96a) {
  return _0x4a1c33.map((_0x4af846) =>
    _0x4af846.startIndex >= _0x23a2a2
      ? { ..._0x4af846, startIndex: _0x4af846.startIndex + _0x5dc96a }
      : _0x4af846,
  );
}
function Pt(_0x283f29, _0x1d4a84, _0x2af961) {
  return _0x283f29.map((_0x542f68) =>
    _0x542f68.st >= _0x1d4a84
      ? {
          ..._0x542f68,
          st: _0x542f68.st + _0x2af961,
          ed: _0x542f68.ed + _0x2af961,
        }
      : _0x542f68.ed > _0x1d4a84
        ? { ..._0x542f68, ed: _0x542f68.ed + _0x2af961 }
        : _0x542f68,
  );
}
var Ft = "@univerjs-pro/docs-column",
  It = "1.0.0-insiders.20260907-70fc579";
const Lt = {};
function X(_0x3f356e, _0x142cbe) {
  return function (_0x5b5355, _0x344c4f) {
    _0x142cbe(_0x5b5355, _0x344c4f, _0x3f356e);
  };
}
function Rt(_0x281947, _0x5f0492, _0x11f154, _0x311eb4) {
  var _0x5d760e = arguments.length,
    _0x1af964 =
      _0x5d760e < 3
        ? _0x5f0492
        : _0x311eb4 === null
          ? (_0x311eb4 = Object.getOwnPropertyDescriptor(_0x5f0492, _0x11f154))
          : _0x311eb4,
    _0x26e4f1;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1af964 = Reflect.decorate(_0x281947, _0x5f0492, _0x11f154, _0x311eb4);
  else {
    for (var _0x39fe78 = _0x281947.length - 1; _0x39fe78 >= 0; _0x39fe78--)
      (_0x26e4f1 = _0x281947[_0x39fe78]) &&
        (_0x1af964 =
          (_0x5d760e < 3
            ? _0x26e4f1(_0x1af964)
            : _0x5d760e > 3
              ? _0x26e4f1(_0x5f0492, _0x11f154, _0x1af964)
              : _0x26e4f1(_0x5f0492, _0x11f154)) || _0x1af964);
  }
  return (
    _0x5d760e > 3 &&
      _0x1af964 &&
      Object.defineProperty(_0x5f0492, _0x11f154, _0x1af964),
    _0x1af964
  );
}
function Z(_0x3ae962) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1da578) {
            return typeof _0x1da578;
          }
        : function (_0x256709) {
            return _0x256709 &&
              typeof Symbol == "function" &&
              _0x256709.constructor === Symbol &&
              _0x256709 !== Symbol.prototype
              ? "symbol"
              : typeof _0x256709;
          }),
    Z(_0x3ae962)
  );
}
function zt(_0x353303, _0x2c4a01) {
  if (Z(_0x353303) != "object" || !_0x353303) return _0x353303;
  var _0x4f3752 = _0x353303[Symbol.toPrimitive];
  if (_0x4f3752 !== undefined) {
    var _0x266f57 = _0x4f3752.call(_0x353303, _0x2c4a01 || "default");
    if (Z(_0x266f57) != "object") return _0x266f57;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2c4a01 === "string" ? String : Number)(_0x353303);
}
function Bt(_0x3f0f83) {
  var _0x3533dd = zt(_0x3f0f83, "string");
  return Z(_0x3533dd) == "symbol" ? _0x3533dd : _0x3533dd + "";
}
function Q(_0x469dc2, _0xc708b6, _0x23496c) {
  return (
    (_0xc708b6 = Bt(_0xc708b6)) in _0x469dc2
      ? Object.defineProperty(_0x469dc2, _0xc708b6, {
          value: _0x23496c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x469dc2[_0xc708b6] = _0x23496c),
    _0x469dc2
  );
}
let $ = class extends e.Plugin {
  constructor(_0x5fd0d1 = Lt, _0x4e42ea, _0x4456c4, _0x39a809) {
    (super(),
      (this._config = _0x5fd0d1),
      (this._injector = _0x4e42ea),
      (this._configService = _0x4456c4),
      (this._commandService = _0x39a809));
    let { ..._0xf135c7 } = (0, e.merge)({}, Lt, this._config);
    this._configService["setConfig"]("docs-column.config", _0xf135c7);
  }
  onStarting() {
    [F, j, M, N, ve, P].forEach((_0x35861b) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x35861b)),
    );
  }
};
(Q($, "pluginName", "DOCS_COLUMN_PLUGIN"),
  Q($, "packageName", Ft),
  Q($, "version", It),
  Q($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = Rt(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin, t.UniverDocsPlugin),
      X(1, (0, e.Inject)(e.Injector)),
      X(2, e.IConfigService),
      X(3, e.ICommandService),
    ],
    $,
  )),
  (exports.AddDocColumnCommand = j),
  (exports.ColumnDataStreamTreeTokenType = a),
  (exports.ColumnPosition = i),
  (exports.DOCS_COLUMN_MAX_COLUMN_COUNT = 5),
  (exports.DeleteDocColumnCommand = M),
  (exports.DeleteDocColumnGroupCommand = N),
  (exports.InsertDocColumnGroupCommand = F),
  (exports.NormalizeDocColumnGroupCommand = P),
  (exports.ResizeDocColumnGroupCommand = ve),
  Object.defineProperty(exports, "UniverDocsColumnPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildInsertColumnActions = Oe),
  (exports.buildInsertColumnGroupActions = p),
  (exports.calculateResizeDragWidthRatios = Pe),
  (exports.canMoveRangeToColumnContent = wt),
  (exports.canResolveDocsColumnInsertOffset = ye),
  (exports.documentSkeletonLineIterator = Re),
  (exports.documentSkeletonTableIterator = ze),
  (exports.downgradeColumnGroupsToTables = lt),
  (exports.getColumnGroupRangeById = o),
  (exports.isColumnStructuralOffset = Ct),
  (exports.isOffsetInsideColumnContent = St),
  (exports.normalizeDocsColumnInsertOffset = I),
  (exports.normalizeEmptyColumnsAfterMove = Ot));
