Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("rxjs"),
  r = require("@univerjs-pro/license");
function i(_0x1902dd, _0x19b2da) {
  var _0x3c7ba9, _0x571ab2, _0x43abaa;
  let _0x527448 =
      (_0x3c7ba9 = _0x1902dd.body) == null ||
      (_0x3c7ba9 = _0x3c7ba9.tables) == null
        ? undefined
        : _0x3c7ba9.find((_0x400f17) => _0x400f17.tableId === _0x19b2da),
    _0x4cc3f3 =
      (_0x571ab2 = _0x1902dd.tableSource) == null
        ? undefined
        : _0x571ab2[_0x19b2da],
    _0xa10717 =
      (_0x43abaa = _0x1902dd.body) == null ? undefined : _0x43abaa.dataStream;
  if (!_0x527448 || !_0x4cc3f3 || !_0xa10717) return null;
  let _0x50f494 = (0, e.getTableRangeInterval)(_0x527448);
  return _0xa10717[_0x50f494.startOffset] !==
    e.DataStreamTreeTokenType["TABLE_START"] ||
    _0xa10717[_0x50f494.endOffset - 1] !==
      e.DataStreamTreeTokenType["TABLE_END"]
    ? null
    : s(
        _0xa10717,
        _0x50f494.startOffset,
        _0x50f494.endOffset,
        _0x19b2da,
        _0x4cc3f3,
      );
}
function a(_0x39721f, _0x30fc71) {
  let _0x2ff89c = _0x39721f.rows[_0x30fc71];
  if (!_0x2ff89c)
    throw Error("[DocsTable]: Row " + _0x30fc71 + " is out of range.");
  return _0x2ff89c;
}
function o(_0x5bef82, _0x2118c6) {
  let _0x27c3fd = _0x5bef82.rows["map"](
    (_0x10c1c6) => _0x10c1c6.cells[_0x2118c6],
  ).filter(Boolean);
  if (_0x27c3fd.length === 0)
    throw Error("[DocsTable]:\x20Column\x20" + _0x2118c6 + " is out of range.");
  return {
    column: _0x2118c6,
    startOffset: _0x27c3fd[0].startOffset,
    endOffset: _0x27c3fd[_0x27c3fd.length - 1].endOffset,
    cells: _0x27c3fd,
  };
}
function s(_0x21833b, _0x1c7b16, _0x130781, _0x5e9995, _0x51dc29) {
  var _0x4b7fdd;
  let _0x51d7c2 = [];
  for (let _0x4486a3 = _0x1c7b16 + 1; _0x4486a3 < _0x130781 - 1;) {
    let _0x168cd2 = (0, e.getTableRowTokenInterval)(_0x21833b, _0x4486a3);
    if (!_0x168cd2 || _0x168cd2.endOffset > _0x130781) return null;
    let _0x11cc0e = {
      row: _0x51d7c2.length,
      startOffset: _0x168cd2.startOffset,
      endOffset: _0x168cd2.endOffset - 1,
      cells: [],
    };
    for (
      let _0x38449f = _0x168cd2.startOffset + 1;
      _0x38449f < _0x168cd2.endOffset - 1;
    ) {
      let _0x27c3aa = (0, e.getTableCellTokenInterval)(_0x21833b, _0x38449f);
      if (!_0x27c3aa || _0x27c3aa.endOffset > _0x168cd2.endOffset) return null;
      (_0x11cc0e.cells["push"]({
        row: _0x11cc0e.row,
        column: _0x11cc0e.cells["length"],
        startOffset: _0x27c3aa.startOffset,
        endOffset: _0x27c3aa.endOffset - 1,
      }),
        (_0x38449f = _0x27c3aa.endOffset));
    }
    (_0x51d7c2.push(_0x11cc0e), (_0x4486a3 = _0x168cd2.endOffset));
  }
  return _0x51d7c2.length !== _0x51dc29.tableRows["length"] ||
    _0x51d7c2.some((_0x48cc68, _0x55070c) => {
      var _0x4e419c;
      return (
        _0x48cc68.cells["length"] !==
        ((_0x4e419c = _0x51dc29.tableRows[_0x55070c]) == null
          ? undefined
          : _0x4e419c.tableCells["length"])
      );
    })
    ? null
    : {
        tableId: _0x5e9995,
        startOffset: _0x1c7b16,
        endOffset: _0x130781,
        rowCount: _0x51d7c2.length,
        columnCount:
          ((_0x4b7fdd = _0x51d7c2[0]) == null
            ? undefined
            : _0x4b7fdd.cells["length"]) ?? 0,
        tableSource: _0x51dc29,
        rows: _0x51d7c2,
      };
}
function c(_0xacbd5d, _0x5b970e, _0x28f013) {
  if (!_0xacbd5d || _0xacbd5d.tableId !== _0x28f013.tableId) return _0xacbd5d;
  if (_0x28f013.kind === "delete-table") return null;
  let _0x1bba73 = i(_0x5b970e, _0xacbd5d.tableId);
  if (!_0x1bba73) return null;
  let _0x59cda5 = { ..._0xacbd5d };
  if (_0x28f013.kind === "insert-rows")
    ((_0x59cda5.startRow = l(
      _0x59cda5.startRow,
      _0x28f013.index,
      _0x28f013.count,
    )),
      (_0x59cda5.endRow = l(
        _0x59cda5.endRow,
        _0x28f013.index,
        _0x28f013.count,
      )));
  else {
    if (_0x28f013.kind === "insert-columns")
      ((_0x59cda5.startColumn = l(
        _0x59cda5.startColumn,
        _0x28f013.index,
        _0x28f013.count,
      )),
        (_0x59cda5.endColumn = l(
          _0x59cda5.endColumn,
          _0x28f013.index,
          _0x28f013.count,
        )));
    else {
      if (_0x28f013.kind === "delete-rows") {
        let [_0x48d230, _0x38e70e] = u(
          _0x59cda5.startRow,
          _0x59cda5.endRow,
          _0x28f013.index,
          _0x28f013.count,
        );
        ((_0x59cda5.startRow = _0x48d230), (_0x59cda5.endRow = _0x38e70e));
      } else {
        if (_0x28f013.kind === "delete-columns") {
          let [_0x49a483, _0x267e17] = u(
            _0x59cda5.startColumn,
            _0x59cda5.endColumn,
            _0x28f013.index,
            _0x28f013.count,
          );
          ((_0x59cda5.startColumn = _0x49a483),
            (_0x59cda5.endColumn = _0x267e17));
        }
      }
    }
  }
  let _0x828827 =
      _0x28f013.kind === "insert-rows"
        ? _0x1bba73.rowCount + _0x28f013.count
        : Math.max(
            1,
            _0x1bba73.rowCount -
              (_0x28f013.kind === "delete-rows" ? _0x28f013.count : 0),
          ),
    _0x4ce527 =
      _0x28f013.kind === "insert-columns"
        ? _0x1bba73.columnCount + _0x28f013.count
        : Math.max(
            1,
            _0x1bba73.columnCount -
              (_0x28f013.kind === "delete-columns" ? _0x28f013.count : 0),
          );
  return (
    (_0x59cda5.startRow = d(_0x59cda5.startRow, 0, _0x828827 - 1)),
    (_0x59cda5.endRow = d(_0x59cda5.endRow, 0, _0x828827 - 1)),
    (_0x59cda5.startColumn = d(_0x59cda5.startColumn, 0, _0x4ce527 - 1)),
    (_0x59cda5.endColumn = d(_0x59cda5.endColumn, 0, _0x4ce527 - 1)),
    _0x59cda5.startRow > _0x59cda5.endRow &&
      (_0x59cda5.endRow = _0x59cda5.startRow),
    _0x59cda5.startColumn > _0x59cda5.endColumn &&
      (_0x59cda5.endColumn = _0x59cda5.startColumn),
    _0x59cda5
  );
}
function l(_0x48a330, _0x406427, _0x2f0923) {
  return _0x48a330 >= _0x406427 ? _0x48a330 + _0x2f0923 : _0x48a330;
}
function u(_0x57e011, _0x111585, _0x29a471, _0x535613) {
  let _0x45eeda = _0x29a471 + _0x535613 - 1;
  if (_0x111585 < _0x29a471) return [_0x57e011, _0x111585];
  if (_0x57e011 > _0x45eeda)
    return [_0x57e011 - _0x535613, _0x111585 - _0x535613];
  let _0x3f2353 = _0x57e011 < _0x29a471 ? _0x57e011 : _0x29a471,
    _0x92e715 = Math.min(_0x111585, _0x45eeda) - _0x29a471 + 1;
  return [_0x3f2353, Math.max(_0x3f2353, _0x111585 - _0x92e715)];
}
function d(_0x2d103b, _0x55e638, _0x556717) {
  return Math.min(Math.max(_0x2d103b, _0x55e638), _0x556717);
}
function f(_0x59a419) {
  return _0x59a419;
}
function p(_0x501e15, _0x42d9cf = {}) {
  var _0x34059a;
  let _0x2b4bdd = {
    ..._0x501e15,
    body:
      _0x42d9cf.cloneBody === false
        ? _0x501e15.body
        : _0x501e15.body
          ? m(_0x501e15.body)
          : _0x501e15.body,
  };
  return (
    (_0x34059a = _0x42d9cf.tableIds) != null &&
      _0x34059a.length &&
      _0x501e15.tableSource &&
      ((_0x2b4bdd.tableSource = { ..._0x501e15.tableSource }),
      _0x42d9cf.tableIds["forEach"]((_0x186252) => {
        var _0x1cbc9b;
        let _0x4c66e7 =
          (_0x1cbc9b = _0x501e15.tableSource) == null
            ? undefined
            : _0x1cbc9b[_0x186252];
        _0x4c66e7 && (_0x2b4bdd.tableSource[_0x186252] = h(_0x4c66e7));
      })),
    _0x2b4bdd
  );
}
function m(_0xa83bfd) {
  var _0x4e6bd3,
    _0x51faae,
    _0xc0deb9,
    _0x4536a4,
    _0x7e8a60,
    _0x58b319,
    _0x409710,
    _0x5c3f5c,
    _0x4206d7;
  return {
    ..._0xa83bfd,
    paragraphs:
      (_0x4e6bd3 = _0xa83bfd.paragraphs) == null
        ? undefined
        : _0x4e6bd3.map((_0xb8e7e1) => ({
            ..._0xb8e7e1,
            bullet: v(_0xb8e7e1.bullet),
            paragraphStyle: v(_0xb8e7e1.paragraphStyle),
          })),
    sectionBreaks:
      (_0x51faae = _0xa83bfd.sectionBreaks) == null
        ? undefined
        : _0x51faae.map((_0x2b1f49) => ({ ..._0x2b1f49 })),
    textRuns:
      (_0xc0deb9 = _0xa83bfd.textRuns) == null
        ? undefined
        : _0xc0deb9.map((_0x486825) => ({ ..._0x486825 })),
    tables:
      (_0x4536a4 = _0xa83bfd.tables) == null
        ? undefined
        : _0x4536a4.map((_0x530cb4) => ({ ..._0x530cb4 })),
    columnGroups:
      (_0x7e8a60 = _0xa83bfd.columnGroups) == null
        ? undefined
        : _0x7e8a60.map((_0x1010a6) => {
            var _0x2bb654;
            return {
              ..._0x1010a6,
              columns:
                (_0x2bb654 = _0x1010a6.columns) == null
                  ? undefined
                  : _0x2bb654.map((_0x1e2056) => v(_0x1e2056)),
            };
          }),
    blockRanges:
      (_0x58b319 = _0xa83bfd.blockRanges) == null
        ? undefined
        : _0x58b319.map((_0x48be72) => ({ ..._0x48be72 })),
    customRanges:
      (_0x409710 = _0xa83bfd.customRanges) == null
        ? undefined
        : _0x409710.map((_0x40ffe8) => ({ ..._0x40ffe8 })),
    customDecorations:
      (_0x5c3f5c = _0xa83bfd.customDecorations) == null
        ? undefined
        : _0x5c3f5c.map((_0x1309ae) => ({ ..._0x1309ae })),
    customBlocks:
      (_0x4206d7 = _0xa83bfd.customBlocks) == null
        ? undefined
        : _0x4206d7.map((_0x5477f9) => ({ ..._0x5477f9 })),
  };
}
function h(_0x18bd39) {
  return {
    ..._0x18bd39,
    dist: v(_0x18bd39.dist),
    position: v(_0x18bd39.position),
    size: v(_0x18bd39.size),
    tableColumns: _0x18bd39.tableColumns["map"](g),
    tableRows: _0x18bd39.tableRows["map"](_),
  };
}
function g(_0x568056) {
  return { ..._0x568056, size: v(_0x568056.size) };
}
function _(_0x5004ee) {
  return {
    ..._0x5004ee,
    trHeight: v(_0x5004ee.trHeight),
    tableCells: _0x5004ee.tableCells["map"]((_0x386531) => ({
      ..._0x386531,
      backgroundColor: v(_0x386531.backgroundColor),
      borderBottom: v(_0x386531.borderBottom),
      borderLeft: v(_0x386531.borderLeft),
      borderRight: v(_0x386531.borderRight),
      borderTop: v(_0x386531.borderTop),
      margin: v(_0x386531.margin),
    })),
  };
}
function v(_0x51fd92) {
  return Array.isArray(_0x51fd92)
    ? _0x51fd92.map((_0xb6289d) => v(_0xb6289d))
    : !_0x51fd92 || typeof _0x51fd92 != "object"
      ? _0x51fd92
      : Object.fromEntries(
          Object.entries(_0x51fd92).map(([_0x32769f, _0x46198a]) => [
            _0x32769f,
            v(_0x46198a),
          ]),
        );
}
function y(_0x32475d, _0x49369d, _0x1bc66d) {
  var _0x197035;
  let _0x500ff4 =
    (_0x197035 = _0x32475d.tableSource) == null
      ? undefined
      : _0x197035[_0x49369d];
  if (!_0x500ff4 || !me(_0x1bc66d)) return false;
  try {
    return ge(_0x500ff4, _0x1bc66d).every(
      (_0x500a6c) => E(_0x500a6c) === 1 && D(_0x500a6c) === 1,
    );
  } catch {
    return false;
  }
}
function b(_0x17ec96, _0xc00521, _0x5add17) {
  var _0xb2e40b;
  let _0x15b48a =
    (_0xb2e40b = _0x17ec96.tableSource) == null
      ? undefined
      : _0xb2e40b[_0xc00521];
  if (!_0x15b48a) return false;
  let _0x3d0f4f = null;
  try {
    let _0x568bb0 = C(_0x5add17);
    _0x3d0f4f = ie(_0x15b48a, _0x568bb0.startRow, _0x568bb0.startColumn);
  } catch {
    return false;
  }
  return !!_0x3d0f4f && me(_0x3d0f4f);
}
function ee(_0x4cd034) {
  let _0x59c027 = C(_0x4cd034);
  if (!y(_0x4cd034.documentData, _0x4cd034.tableId, _0x59c027))
    throw Error(
      "[DocsTable]: Cannot merge a non-rectangular or already merged selection.",
    );
  let _0x3080b0 = p(_0x4cd034.documentData, {
      cloneBody: false,
      tableIds: [_0x4cd034.tableId],
    }),
    _0x3f3265 = he(_0x3080b0, _0x4cd034.tableId),
    _0x2f49fe =
      _0x3f3265.tableRows[_0x59c027.startRow].tableCells[_0x59c027.startColumn];
  return (
    (_0x2f49fe.rowSpan = _0x59c027.endRow - _0x59c027.startRow + 1),
    (_0x2f49fe.columnSpan = _0x59c027.endColumn - _0x59c027.startColumn + 1),
    T(_0x3f3265, _0x59c027, (_0x446385, _0x28c58d, _0x59f8de) => {
      (_0x28c58d !== _0x59c027.startRow ||
        _0x59f8de !== _0x59c027.startColumn) &&
        ((_0x446385.rowSpan = 0), (_0x446385.columnSpan = 0));
    }),
    { nextDocumentData: _0x3080b0, range: _0x59c027 }
  );
}
function x(_0x66183f) {
  var _0x2e7929;
  let _0xae2888 = C(_0x66183f),
    _0x190cd0 =
      (_0x2e7929 = _0x66183f.documentData["tableSource"]) == null
        ? undefined
        : _0x2e7929[_0x66183f.tableId];
  if (!_0x190cd0 || !y(_0x66183f.documentData, _0x66183f.tableId, _0xae2888))
    return null;
  let _0x252609 = [];
  return (
    T(_0x190cd0, _0xae2888, (_0x56b22f, _0x36cac7, _0x274e37) => {
      let _0xa8cbf =
        _0x36cac7 === _0xae2888.startRow && _0x274e37 === _0xae2888.startColumn;
      (S(
        _0x252609,
        _0x66183f.tableId,
        _0x36cac7,
        _0x274e37,
        "rowSpan",
        _0x56b22f.rowSpan,
        _0xa8cbf ? _0xae2888.endRow - _0xae2888.startRow + 1 : 0,
      ),
        S(
          _0x252609,
          _0x66183f.tableId,
          _0x36cac7,
          _0x274e37,
          "columnSpan",
          _0x56b22f.columnSpan,
          _0xa8cbf ? _0xae2888.endColumn - _0xae2888.startColumn + 1 : 0,
        ));
    }),
    { actions: re(_0x252609), range: _0xae2888 }
  );
}
function te(_0x3be99b) {
  let _0x33233a = p(_0x3be99b.documentData, {
      cloneBody: false,
      tableIds: [_0x3be99b.tableId],
    }),
    _0x4ba91b = he(_0x33233a, _0x3be99b.tableId),
    _0x18bf49 = C(_0x3be99b),
    _0xccfb0a = ie(_0x4ba91b, _0x18bf49.startRow, _0x18bf49.startColumn);
  if (!b(_0x3be99b.documentData, _0x3be99b.tableId, _0x18bf49) || !_0xccfb0a)
    throw Error("[DocsTable]: Cannot unmerge an unmerged cell.");
  return (
    T(_0x4ba91b, _0xccfb0a, (_0x3e9b93) => {
      (delete _0x3e9b93.rowSpan, delete _0x3e9b93.columnSpan);
    }),
    { nextDocumentData: _0x33233a, range: _0xccfb0a }
  );
}
function ne(_0x12312e) {
  var _0x2c920a;
  let _0x165ee1 =
      (_0x2c920a = _0x12312e.documentData["tableSource"]) == null
        ? undefined
        : _0x2c920a[_0x12312e.tableId],
    _0x28f78d = C(_0x12312e),
    _0x107199 = _0x165ee1
      ? ie(_0x165ee1, _0x28f78d.startRow, _0x28f78d.startColumn)
      : null;
  if (
    !_0x165ee1 ||
    !_0x107199 ||
    !b(_0x12312e.documentData, _0x12312e.tableId, _0x28f78d)
  )
    return null;
  let _0x32433d = [];
  return (
    T(_0x165ee1, _0x107199, (_0x469d0e, _0x15fc89, _0x86f7cc) => {
      (S(
        _0x32433d,
        _0x12312e.tableId,
        _0x15fc89,
        _0x86f7cc,
        "rowSpan",
        _0x469d0e.rowSpan,
        undefined,
      ),
        S(
          _0x32433d,
          _0x12312e.tableId,
          _0x15fc89,
          _0x86f7cc,
          "columnSpan",
          _0x469d0e.columnSpan,
          undefined,
        ));
    }),
    { actions: re(_0x32433d), range: _0x107199 }
  );
}
function S(
  _0x47a059,
  _0x14eb48,
  _0x5582e9,
  _0x46f717,
  _0x32eed7,
  _0x4b90b2,
  _0x2092bb,
) {
  if (_0x4b90b2 === _0x2092bb) return;
  let _0x25cee6 = e.JSONX["getInstance"](),
    _0x3dc73f = [
      "tableSource",
      _0x14eb48,
      "tableRows",
      _0x5582e9,
      "tableCells",
      _0x46f717,
      _0x32eed7,
    ];
  _0x47a059.push(
    _0x4b90b2 === undefined
      ? _0x25cee6.insertOp(_0x3dc73f, _0x2092bb)
      : _0x2092bb === undefined
        ? _0x25cee6.removeOp(_0x3dc73f, _0x4b90b2)
        : _0x25cee6.replaceOp(_0x3dc73f, _0x4b90b2, _0x2092bb),
  );
}
function re(_0x2fbb93) {
  return _0x2fbb93.reduce(
    (_0x7c9204, _0xe38d97) => e.JSONX["compose"](_0x7c9204, _0xe38d97),
    null,
  );
}
function ie(_0x4f9b15, _0xae586a, _0x3f74a6) {
  var _0x1b8aeb;
  let _0x41d3dc =
    (_0x1b8aeb = _0x4f9b15.tableRows[_0xae586a]) == null
      ? undefined
      : _0x1b8aeb.tableCells[_0x3f74a6];
  if (!_0x41d3dc) return null;
  if (E(_0x41d3dc) > 1 || D(_0x41d3dc) > 1)
    return {
      startRow: _0xae586a,
      endRow: _0xae586a + E(_0x41d3dc) - 1,
      startColumn: _0x3f74a6,
      endColumn: _0x3f74a6 + D(_0x41d3dc) - 1,
    };
  if (_0x41d3dc.rowSpan !== 0 && _0x41d3dc.columnSpan !== 0)
    return {
      startRow: _0xae586a,
      endRow: _0xae586a,
      startColumn: _0x3f74a6,
      endColumn: _0x3f74a6,
    };
  for (
    let _0x3f8c26 = 0;
    _0x3f8c26 < _0x4f9b15.tableRows["length"];
    _0x3f8c26++
  ) {
    let _0x1a4b69 = _0x4f9b15.tableRows[_0x3f8c26];
    for (
      let _0x1df2ba = 0;
      _0x1df2ba < _0x1a4b69.tableCells["length"];
      _0x1df2ba++
    ) {
      let _0x932f95 = _0x1a4b69.tableCells[_0x1df2ba],
        _0x32e858 = E(_0x932f95),
        _0x27e531 = D(_0x932f95);
      if (_0x32e858 <= 1 && _0x27e531 <= 1) continue;
      let _0x2335cb = {
        startRow: _0x3f8c26,
        endRow: _0x3f8c26 + _0x32e858 - 1,
        startColumn: _0x1df2ba,
        endColumn: _0x1df2ba + _0x27e531 - 1,
      };
      if (
        _0xae586a >= _0x2335cb.startRow &&
        _0xae586a <= _0x2335cb.endRow &&
        _0x3f74a6 >= _0x2335cb.startColumn &&
        _0x3f74a6 <= _0x2335cb.endColumn
      )
        return _0x2335cb;
    }
  }
  return null;
}
function ae(_0x240938, _0x4b897c) {
  let _0x2d5373 = C(_0x4b897c),
    _0x39bcfa = true;
  for (; _0x39bcfa;) {
    _0x39bcfa = false;
    for (
      let _0x478a6d = 0;
      _0x478a6d < _0x240938.tableRows["length"];
      _0x478a6d++
    ) {
      let _0x17250a = _0x240938.tableRows[_0x478a6d];
      for (
        let _0x3551e6 = 0;
        _0x3551e6 < _0x17250a.tableCells["length"];
        _0x3551e6++
      ) {
        let _0x3684ed = _0x17250a.tableCells[_0x3551e6],
          _0x3c4b80 = E(_0x3684ed),
          _0x2b071b = D(_0x3684ed);
        if (_0x3c4b80 <= 1 && _0x2b071b <= 1) continue;
        let _0x20e57c = {
          startRow: _0x478a6d,
          endRow: _0x478a6d + _0x3c4b80 - 1,
          startColumn: _0x3551e6,
          endColumn: _0x3551e6 + _0x2b071b - 1,
        };
        if (!_e(_0x2d5373, _0x20e57c)) continue;
        let _0xb985ec = {
          startRow: Math.min(_0x2d5373.startRow, _0x20e57c.startRow),
          endRow: Math.max(_0x2d5373.endRow, _0x20e57c.endRow),
          startColumn: Math.min(_0x2d5373.startColumn, _0x20e57c.startColumn),
          endColumn: Math.max(_0x2d5373.endColumn, _0x20e57c.endColumn),
        };
        ve(_0xb985ec, _0x2d5373) ||
          ((_0x2d5373 = _0xb985ec), (_0x39bcfa = true));
      }
    }
  }
  return _0x2d5373;
}
function oe(_0x1f0118, _0x2d9b6c, _0x195440, _0x1308da = w(_0x1f0118)) {
  ue(_0x1f0118, _0x1308da, (_0x5f27d3) =>
    _0x2d9b6c <= _0x5f27d3.startRow
      ? {
          ..._0x5f27d3,
          startRow: _0x5f27d3.startRow + _0x195440,
          endRow: _0x5f27d3.endRow + _0x195440,
        }
      : _0x2d9b6c <= _0x5f27d3.endRow
        ? { ..._0x5f27d3, endRow: _0x5f27d3.endRow + _0x195440 }
        : _0x5f27d3,
  );
}
function se(_0x3ec29d, _0x4b6cb3, _0x15ddb6, _0x1d8a5d = w(_0x3ec29d)) {
  ue(_0x3ec29d, _0x1d8a5d, (_0x3e490c) =>
    _0x4b6cb3 <= _0x3e490c.startColumn
      ? {
          ..._0x3e490c,
          startColumn: _0x3e490c.startColumn + _0x15ddb6,
          endColumn: _0x3e490c.endColumn + _0x15ddb6,
        }
      : _0x4b6cb3 <= _0x3e490c.endColumn
        ? { ..._0x3e490c, endColumn: _0x3e490c.endColumn + _0x15ddb6 }
        : _0x3e490c,
  );
}
function ce(_0x212b6a, _0x572e62, _0x301271, _0x1894c6 = w(_0x212b6a)) {
  ue(_0x212b6a, _0x1894c6, (_0xc3da45) => {
    let _0x19cad7 = [];
    for (
      let _0x1312af = _0xc3da45.startRow;
      _0x1312af <= _0xc3da45.endRow;
      _0x1312af++
    ) {
      let _0x20f4e5 = pe(_0x1312af, _0x572e62, _0x301271);
      _0x20f4e5 != null && _0x19cad7.push(_0x20f4e5);
    }
    return _0x19cad7.length
      ? {
          ..._0xc3da45,
          startRow: Math.min(..._0x19cad7),
          endRow: Math.max(..._0x19cad7),
        }
      : null;
  });
}
function le(_0x683766, _0x28489c, _0x2ae999, _0x5f45f7 = w(_0x683766)) {
  ue(_0x683766, _0x5f45f7, (_0x4a7699) => {
    let _0x3b0ad3 = [];
    for (
      let _0x156fa9 = _0x4a7699.startColumn;
      _0x156fa9 <= _0x4a7699.endColumn;
      _0x156fa9++
    ) {
      let _0x4a3872 = pe(_0x156fa9, _0x28489c, _0x2ae999);
      _0x4a3872 != null && _0x3b0ad3.push(_0x4a3872);
    }
    return _0x3b0ad3.length
      ? {
          ..._0x4a7699,
          startColumn: Math.min(..._0x3b0ad3),
          endColumn: Math.max(..._0x3b0ad3),
        }
      : null;
  });
}
function C(_0x2fdb4f) {
  return {
    startRow: Math.min(_0x2fdb4f.startRow, _0x2fdb4f.endRow),
    endRow: Math.max(_0x2fdb4f.startRow, _0x2fdb4f.endRow),
    startColumn: Math.min(_0x2fdb4f.startColumn, _0x2fdb4f.endColumn),
    endColumn: Math.max(_0x2fdb4f.startColumn, _0x2fdb4f.endColumn),
  };
}
function ue(_0x55bf01, _0x4cc6f3, _0x250de4) {
  (de(_0x55bf01),
    _0x4cc6f3.forEach((_0x5e28c6) => {
      let _0x461879 = _0x250de4(_0x5e28c6);
      _0x461879 && fe(_0x55bf01, _0x461879);
    }));
}
function w(_0x32529c) {
  let _0x7aea9f = [];
  return (
    _0x32529c.tableRows["forEach"]((_0xd00041, _0x215350) => {
      _0xd00041.tableCells["forEach"]((_0x2c768d, _0x5cc824) => {
        let _0x55d226 = E(_0x2c768d),
          _0x1b2cb7 = D(_0x2c768d);
        (_0x55d226 <= 1 && _0x1b2cb7 <= 1) ||
          _0x7aea9f.push({
            startRow: _0x215350,
            endRow: _0x215350 + _0x55d226 - 1,
            startColumn: _0x5cc824,
            endColumn: _0x5cc824 + _0x1b2cb7 - 1,
          });
      });
    }),
    _0x7aea9f
  );
}
function de(_0x5099d3) {
  _0x5099d3.tableRows["forEach"]((_0x3091a9) => {
    _0x3091a9.tableCells["forEach"]((_0x49b85c) => {
      (delete _0x49b85c.rowSpan, delete _0x49b85c.columnSpan);
    });
  });
}
function fe(_0x460797, _0x352e6c) {
  var _0xff6345;
  let _0x50f49e = C(_0x352e6c),
    _0x26486b = _0x50f49e.endRow - _0x50f49e.startRow + 1,
    _0x24d5fa = _0x50f49e.endColumn - _0x50f49e.startColumn + 1;
  if (_0x26486b <= 0 || _0x24d5fa <= 0 || (_0x26486b === 1 && _0x24d5fa === 1))
    return;
  let _0x2beb83 =
    (_0xff6345 = _0x460797.tableRows[_0x50f49e.startRow]) == null
      ? undefined
      : _0xff6345.tableCells[_0x50f49e.startColumn];
  _0x2beb83 &&
    ((_0x2beb83.rowSpan = _0x26486b),
    (_0x2beb83.columnSpan = _0x24d5fa),
    T(_0x460797, _0x50f49e, (_0x35dfef, _0x4db90a, _0x32acb1) => {
      (_0x4db90a !== _0x50f49e.startRow ||
        _0x32acb1 !== _0x50f49e.startColumn) &&
        ((_0x35dfef.rowSpan = 0), (_0x35dfef.columnSpan = 0));
    }));
}
function pe(_0x476333, _0x36e421, _0x1c17c0) {
  return _0x476333 < _0x36e421
    ? _0x476333
    : _0x476333 > _0x1c17c0
      ? _0x476333 - (_0x1c17c0 - _0x36e421 + 1)
      : null;
}
function me(_0x128c1c) {
  return (
    _0x128c1c.startRow !== _0x128c1c.endRow ||
    _0x128c1c.startColumn !== _0x128c1c.endColumn
  );
}
function he(_0x4a3bec, _0x500aa7) {
  var _0xd402e0;
  let _0x1b7db4 =
    (_0xd402e0 = _0x4a3bec.tableSource) == null
      ? undefined
      : _0xd402e0[_0x500aa7];
  if (!_0x1b7db4)
    throw Error("[DocsTable]: Table " + _0x500aa7 + " is not found.");
  return _0x1b7db4;
}
function ge(_0x1acf0d, _0x185f36) {
  let _0xb22242 = [];
  return (
    T(_0x1acf0d, _0x185f36, (_0x26deb6) => _0xb22242.push(_0x26deb6)),
    _0xb22242
  );
}
function T(_0x7c9efc, _0x331e09, _0x1e98d8) {
  for (
    let _0x2ac679 = _0x331e09.startRow;
    _0x2ac679 <= _0x331e09.endRow;
    _0x2ac679++
  )
    for (
      let _0xab097f = _0x331e09.startColumn;
      _0xab097f <= _0x331e09.endColumn;
      _0xab097f++
    ) {
      var _0x5c8b1e;
      let _0x3b5ac4 =
        (_0x5c8b1e = _0x7c9efc.tableRows[_0x2ac679]) == null
          ? undefined
          : _0x5c8b1e.tableCells[_0xab097f];
      if (!_0x3b5ac4) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x1e98d8(_0x3b5ac4, _0x2ac679, _0xab097f);
    }
}
function E(_0x274ffd) {
  return _0x274ffd.rowSpan == null ? 1 : _0x274ffd.rowSpan;
}
function D(_0x247bad) {
  return _0x247bad.columnSpan == null ? 1 : _0x247bad.columnSpan;
}
function _e(_0x33fdbe, _0x1feeb8) {
  return (
    _0x33fdbe.startRow <= _0x1feeb8.endRow &&
    _0x33fdbe.endRow >= _0x1feeb8.startRow &&
    _0x33fdbe.startColumn <= _0x1feeb8.endColumn &&
    _0x33fdbe.endColumn >= _0x1feeb8.startColumn
  );
}
function ve(_0x5dd081, _0x4a1cf5) {
  return (
    _0x5dd081.startRow === _0x4a1cf5.startRow &&
    _0x5dd081.endRow === _0x4a1cf5.endRow &&
    _0x5dd081.startColumn === _0x4a1cf5.startColumn &&
    _0x5dd081.endColumn === _0x4a1cf5.endColumn
  );
}
function ye(_0x1ee6b0) {
  return {
    ..._0x1ee6b0,
    columnTypes: _0x1ee6b0.columnTypes
      ? { ..._0x1ee6b0.columnTypes }
      : undefined,
  };
}
function O(_0x5dbb88) {
  let _0x5abc47 = {};
  return (
    Object.entries(
      (_0x5dbb88 == null ? undefined : _0x5dbb88.tables) ?? {},
    ).forEach(([_0x5df844, _0x5edcfe]) => {
      _0x5abc47[_0x5df844] = ye(_0x5edcfe);
    }),
    { tables: _0x5abc47 }
  );
}
function be(_0x1da276, _0x5b3f67, _0x45b3ee) {
  let _0x2e9a95 = O(_0x1da276);
  return {
    tables: {
      ..._0x2e9a95.tables,
      [_0x5b3f67]: {
        ...(_0x2e9a95.tables[_0x5b3f67] ?? {}),
        headerRowCount: Math.max(0, _0x45b3ee),
      },
    },
  };
}
function xe(_0x398a6b, _0x2cf391, _0x3f5be2) {
  let _0x1ec6ea = O(_0x398a6b);
  return {
    tables: {
      ..._0x1ec6ea.tables,
      [_0x2cf391]: {
        ...(_0x1ec6ea.tables[_0x2cf391] ?? {}),
        titleRow: _0x3f5be2,
      },
    },
  };
}
function Se(_0xb401c9, _0x152665, _0x1bdfe7, _0x3a3731) {
  let _0x5809bf = O(_0xb401c9),
    _0x21beb4 = _0x5809bf.tables[_0x152665] ?? {};
  return {
    tables: {
      ..._0x5809bf.tables,
      [_0x152665]: {
        ..._0x21beb4,
        columnTypes: {
          ...(_0x21beb4.columnTypes ?? {}),
          [_0x1bdfe7]: _0x3a3731,
        },
      },
    },
  };
}
let Ce = (function (_0x40962d) {
  return (
    (_0x40962d.Above = "above"),
    (_0x40962d.Below = "below"),
    (_0x40962d.Left = "left"),
    (_0x40962d.Right = "right"),
    _0x40962d
  );
})({});
const we = { Above: "above", Below: "below" },
  Te = { Left: "left", Right: "right" };
function Ee(_0x39114f) {
  let {
      documentData: _0x13d020,
      tableId: _0x515e40,
      row: _0x25044b,
      count: _0x3fc860,
      position: _0x424cfd,
    } = _0x39114f,
    _0x411af9 = p(_0x13d020, { tableIds: [_0x515e40] }),
    _0x2d1318 = k(_0x411af9, _0x515e40),
    _0x5a174c = A(_0x411af9, _0x515e40),
    _0x5529dc = _0x424cfd === "above" ? _0x25044b : _0x25044b + 1,
    _0x47c174 =
      _0x2d1318.tableRows[
        Math.min(_0x25044b, _0x2d1318.tableRows["length"] - 1)
      ],
    _0x2f0d70 = Array.from({ length: _0x3fc860 }, () => Ne(_0x47c174)),
    _0x134ed4 = w(_0x2d1318),
    _0x1b4d10 =
      _0x424cfd === "above"
        ? a(_0x5a174c, _0x25044b).startOffset
        : a(_0x5a174c, _0x25044b).endOffset + 1,
    _0xbd62d = Le(Fe(_0x2d1318.tableColumns["length"]), _0x3fc860);
  return (
    _0x2d1318.tableRows["splice"](_0x5529dc, 0, ..._0x2f0d70),
    oe(_0x2d1318, _0x5529dc, _0x3fc860, _0x134ed4),
    He(_0x411af9, _0x515e40, _0x1b4d10, _0xbd62d),
    {
      nextDocumentData: _0x411af9,
      nextMetadata: _0x39114f.metadata ? O(_0x39114f.metadata) : undefined,
      cursor: { row: _0x5529dc, column: 0 },
    }
  );
}
function De(_0x4de91e) {
  var _0x40141c;
  let {
      documentData: _0x110e01,
      tableId: _0x2522af,
      column: _0x5a8e11,
      count: _0x5e6449,
      position: _0x2cb9ec,
    } = _0x4de91e,
    _0x5240e4 = p(_0x110e01, { tableIds: [_0x2522af] }),
    _0x5abc05 = k(_0x5240e4, _0x2522af),
    _0x49b23b = A(_0x5240e4, _0x2522af),
    _0x2e2592 = _0x2cb9ec === "left" ? _0x5a8e11 : _0x5a8e11 + 1,
    _0x5a62ae =
      _0x5abc05.tableColumns[
        Math.min(_0x5a8e11, _0x5abc05.tableColumns["length"] - 1)
      ],
    _0x548feb = _0x4de91e.insertedColumnWidth ?? _0x5a62ae.size["width"].v,
    _0x3794e9 = Array.from({ length: _0x5e6449 }, () => {
      let _0xf4e219 = e.Tools["deepClone"](_0x5a62ae);
      return ((_0xf4e219.size["width"].v = _0x548feb), _0xf4e219);
    }),
    _0xa0c552 = w(_0x5abc05);
  return (
    _0x5abc05.tableColumns["splice"](_0x2e2592, 0, ..._0x3794e9),
    _0x5abc05.tableRows["forEach"]((_0x2d3c3b) => {
      let _0x29548e =
          _0x2d3c3b.tableCells[
            Math.min(_0x5a8e11, _0x2d3c3b.tableCells["length"] - 1)
          ],
        _0x5a2687 = Array.from({ length: _0x5e6449 }, () => Pe(_0x29548e));
      _0x2d3c3b.tableCells["splice"](_0x2e2592, 0, ..._0x5a2687);
    }),
    se(_0x5abc05, _0x2e2592, _0x5e6449, _0xa0c552),
    Re(_0x5240e4, _0x2522af, _0x49b23b, _0x5a8e11, _0x5e6449, _0x2cb9ec),
    (_0x4de91e.preserveTotalWidth ?? true)
      ? tt(_0x5abc05, _0x548feb * _0x5e6449)
      : (_0x40141c = _0x5abc05.size) != null &&
        _0x40141c.width &&
        (_0x5abc05.size["width"].v = _0x5abc05.tableColumns["reduce"](
          (_0x3311c9, _0x2930ce) => _0x3311c9 + _0x2930ce.size["width"].v,
          0,
        )),
    {
      nextDocumentData: _0x5240e4,
      nextMetadata: _0x4de91e.metadata ? O(_0x4de91e.metadata) : undefined,
      cursor: { row: 0, column: _0x2e2592 },
    }
  );
}
function Oe(_0xd4faf6) {
  let {
      documentData: _0x5a0629,
      metadata: _0x1706dc,
      tableId: _0x4b5a9b,
    } = _0xd4faf6,
    _0x12d519 = p(_0x5a0629, { tableIds: [_0x4b5a9b] }),
    _0x2745f9 = k(_0x12d519, _0x4b5a9b),
    _0x4db6e5 = Math.min(_0xd4faf6.startRow, _0xd4faf6.endRow),
    _0x36cc36 = Math.max(_0xd4faf6.startRow, _0xd4faf6.endRow),
    _0x2f65b2 = _0x36cc36 - _0x4db6e5 + 1,
    _0x513d53 = w(_0x2745f9);
  return _0x2f65b2 >= _0x2745f9.tableRows["length"]
    ? {
        ...Ae({
          documentData: _0x5a0629,
          metadata: _0x1706dc,
          tableId: _0x4b5a9b,
        }),
        deleteTable: true,
      }
    : (ze(_0x12d519, _0x4b5a9b, _0x4db6e5, _0x36cc36),
      _0x2745f9.tableRows["splice"](_0x4db6e5, _0x2f65b2),
      ce(_0x2745f9, _0x4db6e5, _0x36cc36, _0x513d53),
      {
        nextDocumentData: _0x12d519,
        nextMetadata: nt(_0x1706dc, _0x4b5a9b, _0x4db6e5, _0x36cc36),
        cursor: {
          row: Math.min(_0x4db6e5, _0x2745f9.tableRows["length"] - 1),
          column: 0,
        },
      });
}
function ke(_0x272fdf) {
  let {
      documentData: _0x318ee7,
      metadata: _0x3a2d1e,
      tableId: _0x3d43da,
    } = _0x272fdf,
    _0x21d57e = p(_0x318ee7, { tableIds: [_0x3d43da] }),
    _0x445916 = k(_0x21d57e, _0x3d43da),
    _0x4caa39 = Math.min(_0x272fdf.startColumn, _0x272fdf.endColumn),
    _0x4ac70a = Math.max(_0x272fdf.startColumn, _0x272fdf.endColumn),
    _0x5b66cb = _0x4ac70a - _0x4caa39 + 1,
    _0x396274 = w(_0x445916);
  return _0x5b66cb >= _0x445916.tableColumns["length"]
    ? {
        ...Ae({
          documentData: _0x318ee7,
          metadata: _0x3a2d1e,
          tableId: _0x3d43da,
        }),
        deleteTable: true,
      }
    : (Be(_0x21d57e, _0x3d43da, _0x4caa39, _0x4ac70a),
      _0x445916.tableColumns["splice"](_0x4caa39, _0x5b66cb),
      _0x445916.tableRows["forEach"]((_0x1c6e92) =>
        _0x1c6e92.tableCells["splice"](_0x4caa39, _0x5b66cb),
      ),
      le(_0x445916, _0x4caa39, _0x4ac70a, _0x396274),
      {
        nextDocumentData: _0x21d57e,
        nextMetadata: _0x3a2d1e ? O(_0x3a2d1e) : undefined,
        cursor: {
          row: 0,
          column: Math.min(_0x4caa39, _0x445916.tableColumns["length"] - 1),
        },
      });
}
function Ae(_0x416ccb) {
  let { documentData: _0x1b0ca2, tableId: _0x282de8 } = _0x416ccb,
    _0x483fdc = p(_0x1b0ca2),
    _0x73ef38 = { ...(_0x483fdc.tableSource ?? {}) },
    _0x3d073e = _0x416ccb.metadata ? O(_0x416ccb.metadata) : undefined;
  return (
    Ve(_0x483fdc, _0x282de8),
    delete _0x73ef38[_0x282de8],
    (_0x483fdc.tableSource = _0x73ef38),
    _0x3d073e && delete _0x3d073e.tables[_0x282de8],
    {
      nextDocumentData: _0x483fdc,
      nextMetadata: _0x3d073e,
      cursor: { row: 0, column: 0 },
      deleteTable: true,
    }
  );
}
function je(_0x345728) {
  let _0x2f9c05 = p(_0x345728.documentData, { tableIds: [_0x345728.tableId] }),
    _0x13c22f = k(_0x2f9c05, _0x345728.tableId),
    _0x9d76c1 = A(_0x2f9c05, _0x345728.tableId),
    _0x30c009 = _0x345728.count ?? 1,
    _0x2992d8 = qe(_0x345728.fromRow, _0x13c22f.tableRows["length"] - 1),
    _0x11b501 = qe(_0x345728.toRow, _0x13c22f.tableRows["length"] - 1),
    _0x2b92bf = Math.min(
      _0x13c22f.tableRows["length"] - 1,
      _0x2992d8 + _0x30c009 - 1,
    ),
    _0x3ef44a = _0x2b92bf - _0x2992d8 + 1,
    _0x11725a = _0x345728.position === "above" ? _0x11b501 : _0x11b501 + 1;
  if (_0x3ef44a <= 0 || (_0x11725a >= _0x2992d8 && _0x11725a <= _0x2b92bf + 1))
    return {
      nextDocumentData: _0x2f9c05,
      nextMetadata: _0x345728.metadata ? O(_0x345728.metadata) : undefined,
      cursor: { row: _0x2992d8, column: 0 },
    };
  let _0x32a450 = _0x13c22f.tableRows["splice"](_0x2992d8, _0x3ef44a),
    _0x45ef47 = _0x11725a > _0x2b92bf ? _0x11725a - _0x3ef44a : _0x11725a;
  _0x13c22f.tableRows["splice"](_0x45ef47, 0, ..._0x32a450);
  let _0x4e8eb3 = a(_0x9d76c1, _0x2992d8).startOffset,
    _0x14eac5 = a(_0x9d76c1, _0x2b92bf).endOffset + 1,
    _0x447909 =
      _0x11725a > _0x2b92bf
        ? a(_0x9d76c1, Math.min(_0x11b501, _0x9d76c1.rowCount - 1)).endOffset +
          1
        : a(_0x9d76c1, _0x11b501).startOffset;
  return (
    Ke(_0x2f9c05.body, _0x4e8eb3, _0x14eac5, _0x447909),
    {
      nextDocumentData: _0x2f9c05,
      nextMetadata: _0x345728.metadata ? O(_0x345728.metadata) : undefined,
      cursor: { row: _0x45ef47, column: 0 },
    }
  );
}
function Me(_0x53c0eb) {
  let _0x3a93e9 = p(_0x53c0eb.documentData, { tableIds: [_0x53c0eb.tableId] }),
    _0xd17847 = k(_0x3a93e9, _0x53c0eb.tableId),
    _0x1874a5 = A(_0x3a93e9, _0x53c0eb.tableId),
    _0x5276ca = _0x53c0eb.count ?? 1,
    _0x53a31b = qe(_0x53c0eb.fromColumn, _0xd17847.tableColumns["length"] - 1),
    _0x116068 = qe(_0x53c0eb.toColumn, _0xd17847.tableColumns["length"] - 1),
    _0x42fc4d = Math.min(
      _0xd17847.tableColumns["length"] - 1,
      _0x53a31b + _0x5276ca - 1,
    ),
    _0x24a3f6 = _0x42fc4d - _0x53a31b + 1,
    _0x35c826 = _0x53c0eb.position === "left" ? _0x116068 : _0x116068 + 1;
  if (_0x24a3f6 <= 0 || (_0x35c826 >= _0x53a31b && _0x35c826 <= _0x42fc4d + 1))
    return {
      nextDocumentData: _0x3a93e9,
      nextMetadata: _0x53c0eb.metadata ? O(_0x53c0eb.metadata) : undefined,
      cursor: { row: 0, column: _0x53a31b },
    };
  let _0x1e35fe = _0xd17847.tableColumns["splice"](_0x53a31b, _0x24a3f6),
    _0x47b5ca = _0x35c826 > _0x42fc4d ? _0x35c826 - _0x24a3f6 : _0x35c826;
  return (
    _0xd17847.tableColumns["splice"](_0x47b5ca, 0, ..._0x1e35fe),
    _0xd17847.tableRows["forEach"]((_0x1c5bb) => {
      let _0x5d8bfe = _0x1c5bb.tableCells["splice"](_0x53a31b, _0x24a3f6);
      _0x1c5bb.tableCells["splice"](_0x47b5ca, 0, ..._0x5d8bfe);
    }),
    _0x1874a5.rows["forEach"]((_0x3c266f) => {
      let _0x722828 = _0x3c266f.cells[_0x53a31b].startOffset,
        _0x45d39a = _0x3c266f.cells[_0x42fc4d].endOffset + 1,
        _0x39bd5f =
          _0x35c826 > _0x42fc4d
            ? _0x3c266f.cells[
                Math.min(_0x116068, _0x3c266f.cells["length"] - 1)
              ].endOffset + 1
            : _0x3c266f.cells[_0x116068].startOffset;
      Ke(_0x3a93e9.body, _0x722828, _0x45d39a, _0x39bd5f);
    }),
    {
      nextDocumentData: _0x3a93e9,
      nextMetadata: _0x53c0eb.metadata ? O(_0x53c0eb.metadata) : undefined,
      cursor: { row: 0, column: _0x47b5ca },
    }
  );
}
function k(_0x93b2c8, _0x2b1731) {
  var _0x3faa70;
  let _0x27ec7e =
    (_0x3faa70 = _0x93b2c8.tableSource) == null
      ? undefined
      : _0x3faa70[_0x2b1731];
  if (!_0x27ec7e)
    throw Error("[DocsTable]: Table " + _0x2b1731 + "\x20is\x20not\x20found.");
  return _0x27ec7e;
}
function A(_0x2f92a5, _0x1c2319) {
  let _0x191e39 = i(_0x2f92a5, _0x1c2319);
  if (!_0x191e39)
    throw Error("[DocsTable]: Table " + _0x1c2319 + " range is not found.");
  return _0x191e39;
}
function Ne(_0xe9cf51) {
  let _0x24c56d = e.Tools["deepClone"](_0xe9cf51);
  return (
    (_0x24c56d.tableCells = _0xe9cf51.tableCells["map"]((_0x5619b3) =>
      Pe(_0x5619b3),
    )),
    _0x24c56d
  );
}
function Pe(_0x376ac6) {
  return e.Tools["deepClone"]({ ..._0x376ac6 });
}
function Fe(_0x4614d6) {
  return (
    "" +
    e.DataStreamTreeTokenType["TABLE_ROW_START"] +
    Le(Ie(), _0x4614d6) +
    e.DataStreamTreeTokenType["TABLE_ROW_END"]
  );
}
function Ie() {
  return (
    e.DataStreamTreeTokenType["TABLE_CELL_START"] +
    "\x0d\x0a" +
    e.DataStreamTreeTokenType["TABLE_CELL_END"]
  );
}
function Le(_0x11a5bf, _0x5e7f2e) {
  return Array.from({ length: _0x5e7f2e }, () => _0x11a5bf).join("");
}
function Re(_0x1f8ccf, _0x214785, _0x591156, _0xc2c5ba, _0x3b9b09, _0x4a3d4d) {
  let _0x364254 = Le(Ie(), _0x3b9b09),
    _0x2189b0 = _0x591156.rows["map"]((_0x4f523f) => {
      let _0x57ec16 = _0x4f523f.cells[_0xc2c5ba];
      return _0x4a3d4d === "left"
        ? _0x57ec16.startOffset
        : _0x57ec16.endOffset + 1;
    }).sort((_0x45851b, _0xc0d544) => _0xc0d544 - _0x45851b);
  for (let _0x22ffd5 of _0x2189b0)
    (We(_0x1f8ccf.body, _0x22ffd5, _0x364254),
      _0x1f8ccf.body &&
        (Xe(_0x1f8ccf.body, _0x22ffd5, _0x364254.length),
        Ze(_0x1f8ccf.body, _0x22ffd5, _0x364254)));
  Ye(
    _0x1f8ccf,
    _0x214785,
    _0x591156.endOffset,
    _0x364254.length * _0x2189b0.length,
  );
}
function ze(_0x4a5990, _0x53ea15, _0x4320e0, _0x2f5eb9) {
  let _0xc6022f = A(_0x4a5990, _0x53ea15),
    _0x295230 = a(_0xc6022f, _0x4320e0).startOffset;
  Ue(_0x4a5990, _0x53ea15, _0x295230, a(_0xc6022f, _0x2f5eb9).endOffset + 1);
}
function Be(_0x53b31d, _0x25adc1, _0x11f115, _0x5b4822) {
  let _0x473541 = A(_0x53b31d, _0x25adc1),
    _0x4b3f3a = [];
  for (let _0x5b0dd2 = _0x11f115; _0x5b0dd2 <= _0x5b4822; _0x5b0dd2++)
    _0x4b3f3a.push(
      ...o(_0x473541, _0x5b0dd2).cells["map"]((_0x877784) => ({
        startOffset: _0x877784.startOffset,
        endOffset: _0x877784.endOffset + 1,
      })),
    );
  _0x4b3f3a.sort(
    (_0x148792, _0x29c378) => _0x29c378.startOffset - _0x148792.startOffset,
  );
  let _0x5589cb = 0;
  for (let _0xdbae9 of _0x4b3f3a) {
    let _0x324098 = _0xdbae9.startOffset - _0xdbae9.endOffset;
    ((_0x5589cb -= _0x324098),
      Ge(_0x53b31d.body, _0xdbae9.startOffset, _0xdbae9.endOffset),
      _0x53b31d.body && Xe(_0x53b31d.body, _0xdbae9.startOffset, _0x324098));
  }
  Ye(_0x53b31d, _0x25adc1, _0x473541.endOffset, -_0x5589cb);
}
function Ve(_0x549ada, _0x282b27) {
  var _0x4cb1f0;
  let _0x4b7aa5 = A(_0x549ada, _0x282b27);
  (Ue(_0x549ada, _0x282b27, _0x4b7aa5.startOffset, _0x4b7aa5.endOffset),
    (_0x4cb1f0 = _0x549ada.body) != null &&
      _0x4cb1f0.tables &&
      (_0x549ada.body["tables"] = _0x549ada.body["tables"].filter(
        (_0x4f5b02) => _0x4f5b02.tableId !== _0x282b27,
      )));
}
function He(_0x5c4d9c, _0x285615, _0x3aaece, _0x5b4bf7) {
  (We(_0x5c4d9c.body, _0x3aaece, _0x5b4bf7),
    Je(_0x5c4d9c, _0x285615, _0x3aaece, _0x5b4bf7.length),
    _0x5c4d9c.body && Ze(_0x5c4d9c.body, _0x3aaece, _0x5b4bf7));
}
function Ue(_0x17941d, _0x1a06f4, _0x1f471f, _0x1acad1) {
  (Ge(_0x17941d.body, _0x1f471f, _0x1acad1),
    Je(_0x17941d, _0x1a06f4, _0x1f471f, _0x1f471f - _0x1acad1));
}
function We(_0xcb56eb, _0x5c01ed, _0x236da2) {
  _0xcb56eb != null &&
    _0xcb56eb.dataStream &&
    (_0xcb56eb.dataStream =
      "" +
      _0xcb56eb.dataStream["slice"](0, _0x5c01ed) +
      _0x236da2 +
      _0xcb56eb.dataStream["slice"](_0x5c01ed));
}
function Ge(_0x2db377, _0x545010, _0x3a8602) {
  _0x2db377 != null &&
    _0x2db377.dataStream &&
    (_0x2db377.dataStream =
      "" +
      _0x2db377.dataStream["slice"](0, _0x545010) +
      _0x2db377.dataStream["slice"](_0x3a8602));
}
function Ke(_0x550151, _0x4dbb2e, _0x2473ce, _0x4bd404) {
  if (
    !(_0x550151 != null && _0x550151.dataStream) ||
    (_0x4bd404 >= _0x4dbb2e && _0x4bd404 <= _0x2473ce)
  )
    return;
  let _0x5d0415 = _0x550151.dataStream["slice"](_0x4dbb2e, _0x2473ce),
    _0x38d738 =
      "" +
      _0x550151.dataStream["slice"](0, _0x4dbb2e) +
      _0x550151.dataStream["slice"](_0x2473ce),
    _0x22ece4 =
      _0x4bd404 > _0x2473ce ? _0x4bd404 - _0x5d0415.length : _0x4bd404;
  _0x550151.dataStream =
    "" + _0x38d738.slice(0, _0x22ece4) + _0x5d0415 + _0x38d738.slice(_0x22ece4);
}
function qe(_0x2dc01c, _0x2264c4) {
  return Math.min(Math.max(0, _0x2dc01c), Math.max(0, _0x2264c4));
}
function Je(_0x278a9e, _0x37bf72, _0x7762b1, _0x19723a) {
  let _0x18ab6f = _0x278a9e.body;
  !_0x18ab6f ||
    _0x19723a === 0 ||
    (Ye(_0x278a9e, _0x37bf72, _0x7762b1, _0x19723a),
    Xe(_0x18ab6f, _0x7762b1, _0x19723a));
}
function Ye(_0x4c8b3a, _0x3f85ea, _0x6554f0, _0x1a93be) {
  let _0x30e2a7 = _0x4c8b3a.body;
  !(_0x30e2a7 != null && _0x30e2a7.tables) ||
    _0x1a93be === 0 ||
    (_0x30e2a7.tables &&= _0x30e2a7.tables["map"]((_0xdd36ea) =>
      _0xdd36ea.tableId === _0x3f85ea
        ? { ..._0xdd36ea, endIndex: _0xdd36ea.endIndex + _0x1a93be }
        : _0xdd36ea.startIndex >= _0x6554f0
          ? {
              ..._0xdd36ea,
              startIndex: _0xdd36ea.startIndex + _0x1a93be,
              endIndex: _0xdd36ea.endIndex + _0x1a93be,
            }
          : _0xdd36ea,
    ));
}
function Xe(_0x33cb44, _0x398d5f, _0xa4c381) {
  var _0x4fba69,
    _0x13a2b8,
    _0x5be629,
    _0x5cdcb3,
    _0x4765d6,
    _0x31248c,
    _0x1e9990,
    _0x558d46;
  let _0xdfbc43 = f(_0x33cb44);
  ((_0x33cb44.paragraphs =
    (_0x4fba69 = _0x33cb44.paragraphs) == null
      ? undefined
      : _0x4fba69
          .map((_0x4d11cc) => {
            let _0x4e0223 = et(_0x4d11cc.startIndex, _0x398d5f, _0xa4c381);
            return _0x4e0223 == null
              ? null
              : { ..._0x4d11cc, startIndex: _0x4e0223 };
          })
          .filter((_0x453638) => _0x453638 != null)),
    (_0x33cb44.sectionBreaks =
      (_0x13a2b8 = _0x33cb44.sectionBreaks) == null
        ? undefined
        : _0x13a2b8
            .map((_0x3e6200) => {
              let _0x3027b7 = et(_0x3e6200.startIndex, _0x398d5f, _0xa4c381);
              return _0x3027b7 == null
                ? null
                : { ..._0x3e6200, startIndex: _0x3027b7 };
            })
            .filter((_0x42e124) => _0x42e124 != null)),
    (_0x33cb44.customBlocks =
      (_0x5be629 = _0x33cb44.customBlocks) == null
        ? undefined
        : _0x5be629
            .map((_0x4fa1c3) => {
              let _0x2efd17 = et(_0x4fa1c3.startIndex, _0x398d5f, _0xa4c381);
              return _0x2efd17 == null
                ? null
                : { ..._0x4fa1c3, startIndex: _0x2efd17 };
            })
            .filter((_0x5e029f) => _0x5e029f != null)),
    (_0x33cb44.blockRanges =
      (_0x5cdcb3 = _0x33cb44.blockRanges) == null
        ? undefined
        : _0x5cdcb3
            .map((_0x4df1c0) => {
              let _0x3da8ab = j(
                _0x4df1c0.startIndex,
                _0x4df1c0.endIndex,
                _0x398d5f,
                _0xa4c381,
              );
              return _0x3da8ab == null
                ? null
                : {
                    ..._0x4df1c0,
                    startIndex: _0x3da8ab.start,
                    endIndex: _0x3da8ab.end,
                  };
            })
            .filter((_0x22db48) => _0x22db48 != null)),
    (_0x33cb44.textRuns =
      (_0x4765d6 = _0x33cb44.textRuns) == null
        ? undefined
        : _0x4765d6
            .map((_0x5980ca) => {
              let _0x5da5c2 = j(
                _0x5980ca.st,
                _0x5980ca.ed,
                _0x398d5f,
                _0xa4c381,
              );
              return _0x5da5c2 == null
                ? null
                : { ..._0x5980ca, st: _0x5da5c2.start, ed: _0x5da5c2.end };
            })
            .filter((_0x2c5880) => _0x2c5880 != null)),
    (_0x33cb44.customRanges =
      (_0x31248c = _0x33cb44.customRanges) == null
        ? undefined
        : _0x31248c
            .map((_0x21ffcc) => {
              let _0x36b995 = j(
                _0x21ffcc.startIndex,
                _0x21ffcc.endIndex,
                _0x398d5f,
                _0xa4c381,
              );
              return _0x36b995 == null
                ? null
                : {
                    ..._0x21ffcc,
                    startIndex: _0x36b995.start,
                    endIndex: _0x36b995.end,
                  };
            })
            .filter((_0x5e9285) => _0x5e9285 != null)),
    (_0x33cb44.customDecorations =
      (_0x1e9990 = _0x33cb44.customDecorations) == null
        ? undefined
        : _0x1e9990
            .map((_0x2c2de6) => {
              let _0x29e86b = j(
                _0x2c2de6.startIndex,
                _0x2c2de6.endIndex,
                _0x398d5f,
                _0xa4c381,
              );
              return _0x29e86b == null
                ? null
                : {
                    ..._0x2c2de6,
                    startIndex: _0x29e86b.start,
                    endIndex: _0x29e86b.end,
                  };
            })
            .filter((_0x44ca4d) => _0x44ca4d != null)),
    (_0xdfbc43.columnGroups =
      (_0x558d46 = _0xdfbc43.columnGroups) == null
        ? undefined
        : _0x558d46
            .map((_0x351dd9) => {
              let _0x32b474 = j(
                _0x351dd9.startIndex,
                _0x351dd9.endIndex,
                _0x398d5f,
                _0xa4c381,
              );
              return _0x32b474 == null
                ? null
                : {
                    ..._0x351dd9,
                    startIndex: _0x32b474.start,
                    endIndex: _0x32b474.end,
                  };
            })
            .filter((_0x45b993) => _0x45b993 != null)));
}
function Ze(_0x33b03e, _0x282c6a, _0xbfd3e3) {
  let _0xc49dc5 = Qe(_0x33b03e),
    _0x4879a0 = new Set(
      (_0x33b03e.sectionBreaks ?? []).map((_0x464df2) => _0x464df2.sectionId),
    ),
    _0x38ab0e = $e(_0xbfd3e3, "\x0d").map((_0x14b9de) => ({
      startIndex: _0x282c6a + _0x14b9de,
      paragraphId: (0, e.createParagraphId)(_0xc49dc5),
    })),
    _0x25269b = $e(_0xbfd3e3, "\x0a").map((_0x2df584) => ({
      startIndex: _0x282c6a + _0x2df584,
      sectionId: (0, e.createSectionId)(_0x4879a0),
    }));
  (_0x38ab0e.length &&
    (_0x33b03e.paragraphs = [
      ...(_0x33b03e.paragraphs ?? []),
      ..._0x38ab0e,
    ].sort(
      (_0x283c35, _0x5a36f3) => _0x283c35.startIndex - _0x5a36f3.startIndex,
    )),
    _0x25269b.length &&
      (_0x33b03e.sectionBreaks = [
        ...(_0x33b03e.sectionBreaks ?? []),
        ..._0x25269b,
      ].sort(
        (_0x30d1bd, _0x31435d) => _0x30d1bd.startIndex - _0x31435d.startIndex,
      )));
}
function Qe(_0x59345c) {
  return new Set(
    (_0x59345c.paragraphs ?? []).map((_0x588352) => _0x588352.paragraphId),
  );
}
function $e(_0x28f880, _0x575b33) {
  let _0x33cc82 = [];
  for (let _0x52ee72 = 0; _0x52ee72 < _0x28f880.length; _0x52ee72++)
    _0x28f880[_0x52ee72] === _0x575b33 && _0x33cc82.push(_0x52ee72);
  return _0x33cc82;
}
function et(_0x450d00, _0x6b71c5, _0x49bd12) {
  if (_0x49bd12 >= 0)
    return _0x450d00 >= _0x6b71c5 ? _0x450d00 + _0x49bd12 : _0x450d00;
  let _0x2497c8 = _0x6b71c5 - _0x49bd12;
  return _0x450d00 >= _0x6b71c5 && _0x450d00 < _0x2497c8
    ? null
    : _0x450d00 >= _0x2497c8
      ? _0x450d00 + _0x49bd12
      : _0x450d00;
}
function j(_0x43773e, _0x51f655, _0x8d686d, _0x28257a) {
  if (_0x28257a >= 0)
    return {
      end: _0x51f655 >= _0x8d686d ? _0x51f655 + _0x28257a : _0x51f655,
      start: _0x43773e >= _0x8d686d ? _0x43773e + _0x28257a : _0x43773e,
    };
  let _0x12c365 = _0x8d686d - _0x28257a;
  if (_0x51f655 < _0x8d686d) return { start: _0x43773e, end: _0x51f655 };
  if (_0x43773e >= _0x12c365)
    return { start: _0x43773e + _0x28257a, end: _0x51f655 + _0x28257a };
  let _0x852a69 = _0x43773e < _0x8d686d ? _0x43773e : _0x8d686d,
    _0x58a937 = _0x51f655 >= _0x12c365 ? _0x51f655 + _0x28257a : _0x8d686d;
  return _0x58a937 < _0x852a69 ? null : { start: _0x852a69, end: _0x58a937 };
}
function tt(_0x3d662d, _0x268ed4) {
  let _0x1e4272 =
      _0x3d662d.tableColumns["reduce"](
        (_0x41e11f, _0x317451) => _0x41e11f + _0x317451.size["width"].v,
        0,
      ) - _0x268ed4,
    _0x234c18 = _0x3d662d.tableColumns["reduce"](
      (_0x9a1ec3, _0x3aade5) => _0x9a1ec3 + _0x3aade5.size["width"].v,
      0,
    );
  _0x1e4272 <= 0 ||
    _0x234c18 <= 0 ||
    _0x3d662d.tableColumns["forEach"]((_0x1341de) => {
      _0x1341de.size["width"].v =
        (_0x1341de.size["width"].v / _0x234c18) * _0x1e4272;
    });
}
function nt(_0xfedd62, _0x24e82d, _0xc484a2, _0xda6862) {
  var _0x4781ef;
  if (!_0xfedd62) return;
  let _0x45e849 = O(_0xfedd62),
    _0x4c4a8e =
      ((_0x4781ef = _0x45e849.tables[_0x24e82d]) == null
        ? undefined
        : _0x4781ef.headerRowCount) ?? 0;
  if (_0x4c4a8e <= 0) return _0x45e849;
  let _0x59ce84 = Math.max(
    0,
    Math.min(_0xda6862, _0x4c4a8e - 1) - Math.max(_0xc484a2, 0) + 1,
  );
  return be(_0x45e849, _0x24e82d, Math.max(0, _0x4c4a8e - _0x59ce84));
}
function rt(_0x22cc1f, _0x274396 = ["body"]) {
  var _0x23ed3b, _0x38de81;
  let _0x324595 = i(_0x22cc1f.documentData, _0x22cc1f.tableId),
    _0x2e7cc1 =
      _0x324595 == null || (_0x23ed3b = _0x324595.rows[_0x22cc1f.row]) == null
        ? undefined
        : _0x23ed3b.cells[_0x22cc1f.column];
  if (
    !(
      (_0x38de81 = _0x22cc1f.documentData["body"]) != null &&
      _0x38de81.dataStream
    ) ||
    !_0x324595 ||
    !_0x2e7cc1
  )
    throw Error(
      "[DocsTable]:\x20Cell\x20" +
        _0x22cc1f.row +
        ":" +
        _0x22cc1f.column +
        " is not found.",
    );
  let _0x4e70a7 = at(_0x22cc1f.text),
    _0x3b38d3 = _0x2e7cc1.startOffset + 1,
    _0x5cd2cd =
      _0x22cc1f.documentData["body"].dataStream["slice"](
        _0x2e7cc1.endOffset - 2,
        _0x2e7cc1.endOffset,
      ) === "\x0d\x0a";
  return M(
    _0x22cc1f.documentData,
    [
      {
        startOffset: _0x3b38d3,
        endOffset: _0x5cd2cd ? _0x2e7cc1.endOffset - 2 : _0x2e7cc1.endOffset,
        text: _0x5cd2cd ? _0x4e70a7.slice(0, -2) : _0x4e70a7,
      },
    ],
    _0x274396,
  );
}
function M(_0x57a1ef, _0x45ca1b, _0x397987 = ["body"]) {
  let _0x3ce971 = _0x57a1ef.body;
  if (!(_0x3ce971 != null && _0x3ce971.dataStream)) return null;
  let _0x1aae1f = _0x45ca1b
    .filter(
      (_0x4e52e1) =>
        _0x3ce971.dataStream["slice"](
          _0x4e52e1.startOffset,
          _0x4e52e1.endOffset,
        ) !== _0x4e52e1.text,
    )
    .sort(
      (_0x25fe5d, _0x126eb8) => _0x25fe5d.startOffset - _0x126eb8.startOffset,
    );
  if (!_0x1aae1f.length) return null;
  let _0x39bbd2 = st(_0x3ce971),
    _0x2a12a3 = new Set(
      (_0x3ce971.sectionBreaks ?? []).map((_0x1cb983) => _0x1cb983.sectionId),
    ),
    _0x59a131 = new e["TextX"](),
    _0x5a14f5 = 0;
  for (let _0x2396b6 of _0x1aae1f) {
    if (
      _0x2396b6.startOffset < _0x5a14f5 ||
      _0x2396b6.startOffset < 0 ||
      _0x2396b6.endOffset < _0x2396b6.startOffset ||
      _0x2396b6.endOffset > _0x3ce971.dataStream["length"]
    )
      throw Error(
        "[DocsTable]: Cell text replacements must be ordered, non-overlapping, and inside the document body.",
      );
    let _0x81773a = _0x2396b6.startOffset - _0x5a14f5;
    (_0x81773a > 0 && _0x59a131.retain(_0x81773a),
      _0x2396b6.text["length"] > 0 &&
        _0x59a131.insert(
          _0x2396b6.text["length"],
          ct(_0x2396b6.text, _0x39bbd2, _0x2a12a3),
        ));
    let _0x4e7b70 = _0x2396b6.endOffset - _0x2396b6.startOffset;
    (_0x4e7b70 > 0 && _0x59a131.delete(_0x4e7b70),
      (_0x5a14f5 = _0x2396b6.endOffset));
  }
  return e.JSONX["getInstance"]().editOp(_0x59a131.serialize(), _0x397987);
}
function it(_0x5244d1) {
  var _0x381c22;
  let _0x5daec9 = p(_0x5244d1.documentData),
    _0x53c466 = _0x5daec9.body,
    _0x46a4a5 = i(_0x5daec9, _0x5244d1.tableId),
    _0xc68322 =
      _0x46a4a5 == null || (_0x381c22 = _0x46a4a5.rows[_0x5244d1.row]) == null
        ? undefined
        : _0x381c22.cells[_0x5244d1.column];
  if (!(_0x53c466 != null && _0x53c466.dataStream) || !_0x46a4a5 || !_0xc68322)
    throw Error(
      "[DocsTable]: Cell " +
        _0x5244d1.row +
        ":" +
        _0x5244d1.column +
        " is not found.",
    );
  let _0x47e492 = _0xc68322.startOffset + 1,
    _0x3eced7 = _0xc68322.endOffset,
    _0x28aa25 = at(_0x5244d1.text),
    _0x55aa93 = _0x28aa25.length - (_0x3eced7 - _0x47e492);
  return (
    (_0x53c466.dataStream =
      "" +
      _0x53c466.dataStream["slice"](0, _0x47e492) +
      _0x28aa25 +
      _0x53c466.dataStream["slice"](_0x3eced7)),
    ot(_0x53c466, _0x47e492, _0x3eced7, _0x28aa25, _0x55aa93),
    ft(_0x5daec9, _0x5244d1.tableId, _0x3eced7, _0x55aa93),
    { nextDocumentData: _0x5daec9 }
  );
}
function at(_0x3c5bd8) {
  return (
    _0x3c5bd8
      .replace(/\r\n/g, "\x0a")
      .replace(/\r/g, "\x0a")
      .split("\x0a")
      .join("\x0d\x0a") + "\x0d\x0a"
  );
}
function ot(_0x10e72c, _0x235262, _0x2afa1f, _0x45e440, _0x51c270) {
  var _0x122a44, _0x1bcd32, _0x54e61c, _0x4211d2;
  let _0x46d6b1 = st(_0x10e72c),
    _0x4d55b7 = new Set(
      (_0x10e72c.sectionBreaks ?? []).map((_0x3f6993) => _0x3f6993.sectionId),
    ),
    _0x564a6e = f(_0x10e72c);
  ((_0x10e72c.paragraphs = [
    ...lt(_0x10e72c.paragraphs ?? [], _0x235262, _0x2afa1f, _0x51c270),
    ...ut(_0x45e440, "\x0d").map((_0x4f6861) => ({
      startIndex: _0x235262 + _0x4f6861,
      paragraphId: (0, e.createParagraphId)(_0x46d6b1),
    })),
  ].sort((_0x4b3a85, _0xa9e36) => _0x4b3a85.startIndex - _0xa9e36.startIndex)),
    (_0x10e72c.sectionBreaks = [
      ...lt(_0x10e72c.sectionBreaks ?? [], _0x235262, _0x2afa1f, _0x51c270),
      ...ut(_0x45e440, "\x0a").map((_0x78e5d4) => ({
        startIndex: _0x235262 + _0x78e5d4,
        sectionId: (0, e.createSectionId)(_0x4d55b7),
      })),
    ].sort(
      (_0x35a3f2, _0x32722e) => _0x35a3f2.startIndex - _0x32722e.startIndex,
    )),
    (_0x10e72c.customBlocks = _0x10e72c.customBlocks
      ? lt(_0x10e72c.customBlocks, _0x235262, _0x2afa1f, _0x51c270)
      : undefined),
    (_0x10e72c.textRuns =
      (_0x122a44 = _0x10e72c.textRuns) == null
        ? undefined
        : _0x122a44
            .map((_0x56fa7c) => {
              let _0x3baf24 = dt(
                _0x56fa7c.st,
                _0x56fa7c.ed,
                _0x235262,
                _0x2afa1f,
                _0x51c270,
              );
              return _0x3baf24 == null
                ? null
                : { ..._0x56fa7c, st: _0x3baf24.start, ed: _0x3baf24.end };
            })
            .filter((_0x6131e1) => _0x6131e1 != null)),
    (_0x10e72c.customRanges =
      (_0x1bcd32 = _0x10e72c.customRanges) == null
        ? undefined
        : _0x1bcd32
            .map((_0x36cb35) => {
              let _0x43b7f7 = dt(
                _0x36cb35.startIndex,
                _0x36cb35.endIndex,
                _0x235262,
                _0x2afa1f,
                _0x51c270,
              );
              return _0x43b7f7 == null
                ? null
                : {
                    ..._0x36cb35,
                    startIndex: _0x43b7f7.start,
                    endIndex: _0x43b7f7.end,
                  };
            })
            .filter((_0x4a463b) => _0x4a463b != null)),
    (_0x10e72c.customDecorations =
      (_0x54e61c = _0x10e72c.customDecorations) == null
        ? undefined
        : _0x54e61c
            .map((_0x395cfd) => {
              let _0xd3b249 = dt(
                _0x395cfd.startIndex,
                _0x395cfd.endIndex,
                _0x235262,
                _0x2afa1f,
                _0x51c270,
              );
              return _0xd3b249 == null
                ? null
                : {
                    ..._0x395cfd,
                    startIndex: _0xd3b249.start,
                    endIndex: _0xd3b249.end,
                  };
            })
            .filter((_0x5dfae8) => _0x5dfae8 != null)),
    (_0x564a6e.columnGroups =
      (_0x4211d2 = _0x564a6e.columnGroups) == null
        ? undefined
        : _0x4211d2
            .map((_0x3bc5b0) => {
              let _0x2d8efc = dt(
                _0x3bc5b0.startIndex,
                _0x3bc5b0.endIndex,
                _0x235262,
                _0x2afa1f,
                _0x51c270,
              );
              return _0x2d8efc == null
                ? null
                : {
                    ..._0x3bc5b0,
                    startIndex: _0x2d8efc.start,
                    endIndex: _0x2d8efc.end,
                  };
            })
            .filter((_0x1ac6b3) => _0x1ac6b3 != null)));
}
function st(_0x201728) {
  return new Set(
    (_0x201728.paragraphs ?? []).map((_0x1fa64b) => _0x1fa64b.paragraphId),
  );
}
function ct(_0x467c19, _0x46bfe4, _0x560e36) {
  return {
    dataStream: _0x467c19,
    paragraphs: ut(_0x467c19, "\x0d").map((_0x11dc8f) => ({
      startIndex: _0x11dc8f,
      paragraphId: (0, e.createParagraphId)(_0x46bfe4),
    })),
    sectionBreaks: ut(_0x467c19, "\x0a").map((_0x33e17a) => ({
      startIndex: _0x33e17a,
      sectionId: (0, e.createSectionId)(_0x560e36),
    })),
  };
}
function lt(_0x3ec1b6, _0xf66410, _0x5637ba, _0x220192) {
  return _0x3ec1b6
    .map((_0x40048f) =>
      _0x40048f.startIndex >= _0xf66410 && _0x40048f.startIndex < _0x5637ba
        ? null
        : _0x40048f.startIndex >= _0x5637ba
          ? { ..._0x40048f, startIndex: _0x40048f.startIndex + _0x220192 }
          : _0x40048f,
    )
    .filter((_0x6d5e26) => _0x6d5e26 != null);
}
function ut(_0x25def7, _0x4bacbd) {
  let _0x52b0d7 = [];
  for (let _0x447daa = 0; _0x447daa < _0x25def7.length; _0x447daa++)
    _0x25def7[_0x447daa] === _0x4bacbd && _0x52b0d7.push(_0x447daa);
  return _0x52b0d7;
}
function dt(_0x53de47, _0x596116, _0x5a0bf0, _0x55001d, _0x259266) {
  if (_0x596116 < _0x5a0bf0) return { start: _0x53de47, end: _0x596116 };
  if (_0x53de47 >= _0x55001d)
    return { start: _0x53de47 + _0x259266, end: _0x596116 + _0x259266 };
  let _0xfdafbd = _0x53de47 < _0x5a0bf0 ? _0x53de47 : _0x5a0bf0,
    _0x23939e = _0x596116 >= _0x55001d ? _0x596116 + _0x259266 : _0x5a0bf0;
  return _0x23939e < _0xfdafbd ? null : { start: _0xfdafbd, end: _0x23939e };
}
function ft(_0x17117c, _0x35a6b6, _0x219848, _0xfcce66) {
  var _0x954a9c;
  !((_0x954a9c = _0x17117c.body) != null && _0x954a9c.tables) ||
    _0xfcce66 === 0 ||
    (_0x17117c.body["tables"] = _0x17117c.body["tables"].map((_0x238fbe) =>
      _0x238fbe.tableId === _0x35a6b6
        ? { ..._0x238fbe, endIndex: _0x238fbe.endIndex + _0xfcce66 }
        : _0x238fbe.startIndex >= _0x219848
          ? {
              ..._0x238fbe,
              startIndex: _0x238fbe.startIndex + _0xfcce66,
              endIndex: _0x238fbe.endIndex + _0xfcce66,
            }
          : _0x238fbe,
    ));
}
function pt(_0x179ce1) {
  var _0x12304d;
  let _0x511acd = Ee({
      documentData: _0x179ce1.documentData,
      metadata: _0x179ce1.metadata,
      tableId: _0x179ce1.tableId,
      row: 0,
      count: 1,
      position: "above",
    }),
    _0x42b974 =
      (_0x12304d = _0x511acd.nextDocumentData["tableSource"]) == null
        ? undefined
        : _0x12304d[_0x179ce1.tableId];
  if (!_0x42b974)
    throw Error(
      "[DocsTable]:\x20Table\x20" + _0x179ce1.tableId + " is not found.",
    );
  let _0x1d80d6 = _0x42b974.tableColumns["length"];
  return (
    _0x42b974.tableRows[0].tableCells["forEach"]((_0x518e82, _0x268097) => {
      if (_0x268097 === 0) {
        ((_0x518e82.columnSpan = _0x1d80d6), delete _0x518e82.rowSpan);
        return;
      }
      ((_0x518e82.rowSpan = 0), (_0x518e82.columnSpan = 0));
    }),
    {
      nextDocumentData: _0x511acd.nextDocumentData,
      nextMetadata: xe(_0x511acd.nextMetadata, _0x179ce1.tableId, true),
    }
  );
}
function mt(_0x15d1f7) {
  var _0x31d631;
  let _0xb46b53 = p(_0x15d1f7.documentData, {
      cloneBody: false,
      tableIds: [_0x15d1f7.tableId],
    }),
    _0x4459a7 =
      (_0x31d631 = _0xb46b53.tableSource) == null
        ? undefined
        : _0x31d631[_0x15d1f7.tableId];
  if (!_0x4459a7)
    throw Error(
      "[DocsTable]:\x20Table\x20" + _0x15d1f7.tableId + " is not found.",
    );
  let _0x429e9c = Math.min(
    Math.max(0, _0x15d1f7.headerRowCount),
    _0x4459a7.tableRows["length"],
  );
  return (
    _0x4459a7.tableRows["forEach"]((_0x1aa112, _0x29150c) => {
      ((_0x1aa112.repeatHeaderRow =
        _0x29150c < _0x429e9c
          ? e.BooleanNumber["TRUE"]
          : e.BooleanNumber["FALSE"]),
        _0x29150c < _0x429e9c
          ? (_0x1aa112.isFirstRow = e.BooleanNumber["TRUE"])
          : delete _0x1aa112.isFirstRow);
    }),
    {
      nextDocumentData: _0xb46b53,
      nextMetadata: be(_0x15d1f7.metadata, _0x15d1f7.tableId, _0x429e9c),
    }
  );
}
function ht(_0x126171) {
  var _0x249d7b;
  let _0x2ad9ed = p(_0x126171.documentData, {
      cloneBody: false,
      tableIds: [_0x126171.tableId],
    }),
    _0x384002 =
      (_0x249d7b = _0x2ad9ed.tableSource) == null
        ? undefined
        : _0x249d7b[_0x126171.tableId];
  if (!_0x384002)
    throw Error(
      "[DocsTable]:\x20Table\x20" +
        _0x126171.tableId +
        "\x20is\x20not\x20found.",
    );
  let _0x4a403c = Math.min(_0x126171.startRow, _0x126171.endRow),
    _0x5741a3 = Math.max(_0x126171.startRow, _0x126171.endRow),
    _0x47f245 = _0x384002.tableRows["slice"](_0x4a403c, _0x5741a3 + 1),
    _0x5e915e =
      _0x47f245.reduce((_0x3fb9f0, _0x2f1e44) => _0x3fb9f0 + Ot(_0x2f1e44), 0) /
      _0x47f245.length;
  return (
    _0x47f245.forEach((_0x333087) => {
      _0x333087.trHeight = {
        hRule: e.TableRowHeightRule["AT_LEAST"],
        val: { v: _0x5e915e },
      };
    }),
    { nextDocumentData: _0x2ad9ed }
  );
}
function gt(_0x54d74f) {
  var _0x4d6988;
  let _0x438cd7 = p(_0x54d74f.documentData, {
      cloneBody: false,
      tableIds: [_0x54d74f.tableId],
    }),
    _0x1fb50f =
      (_0x4d6988 = _0x438cd7.tableSource) == null
        ? undefined
        : _0x4d6988[_0x54d74f.tableId];
  if (!_0x1fb50f)
    throw Error(
      "[DocsTable]: Table " + _0x54d74f.tableId + "\x20is\x20not\x20found.",
    );
  let _0x31ad02 = Math.min(_0x54d74f.startColumn, _0x54d74f.endColumn),
    _0x147f8b = Math.max(_0x54d74f.startColumn, _0x54d74f.endColumn),
    _0x3b40ce = _0x1fb50f.tableColumns["slice"](_0x31ad02, _0x147f8b + 1),
    _0x107d3b =
      _0x3b40ce.reduce(
        (_0x11c526, _0x3e1014) => _0x11c526 + _0x3e1014.size["width"].v,
        0,
      ) / _0x3b40ce.length;
  return (
    _0x3b40ce.forEach((_0x15eeed) => {
      _0x15eeed.size["width"].v = _0x107d3b;
    }),
    { nextDocumentData: _0x438cd7 }
  );
}
function _t(_0x2695e0) {
  var _0x4c7b2d;
  let _0x1f2b64 = p(_0x2695e0.documentData, {
      cloneBody: false,
      tableIds: [_0x2695e0.tableId],
    }),
    _0xb7fc48 =
      (_0x4c7b2d = _0x1f2b64.tableSource) == null ||
      (_0x4c7b2d = _0x4c7b2d[_0x2695e0.tableId]) == null
        ? undefined
        : _0x4c7b2d.tableRows[_0x2695e0.row];
  if (!_0xb7fc48)
    throw Error("[DocsTable]: Row " + _0x2695e0.row + " is not found.");
  return (
    (_0xb7fc48.trHeight = {
      hRule: e.TableRowHeightRule["AT_LEAST"],
      val: { v: Math.max(1, _0x2695e0.height) },
    }),
    { nextDocumentData: _0x1f2b64 }
  );
}
function vt(_0x3f309a) {
  var _0x1afab8;
  let _0x1909ea = p(_0x3f309a.documentData, {
      cloneBody: false,
      tableIds: [_0x3f309a.tableId],
    }),
    _0x303c3e =
      (_0x1afab8 = _0x1909ea.tableSource) == null ||
      (_0x1afab8 = _0x1afab8[_0x3f309a.tableId]) == null
        ? undefined
        : _0x1afab8.tableColumns[_0x3f309a.column];
  if (!_0x303c3e)
    throw Error(
      "[DocsTable]:\x20Column\x20" + _0x3f309a.column + " is not found.",
    );
  return (
    (_0x303c3e.size["width"].v = Math.max(1, _0x3f309a.width)),
    { nextDocumentData: _0x1909ea }
  );
}
function yt(_0x44e549) {
  var _0x3a6bbb;
  if (_0x44e549.targetOffset != null) return bt(_0x44e549);
  let _0x19037b = p(_0x44e549.documentData, {
      cloneBody: false,
      tableIds: [_0x44e549.tableId],
    }),
    _0x5b494c =
      (_0x3a6bbb = _0x19037b.tableSource) == null
        ? undefined
        : _0x3a6bbb[_0x44e549.tableId];
  if (!_0x5b494c)
    throw Error(
      "[DocsTable]: Table " + _0x44e549.tableId + "\x20is\x20not\x20found.",
    );
  return (
    (_0x5b494c.textWrap = e.TableTextWrapType["WRAP"]),
    (_0x5b494c.position["positionH"].posOffset =
      (_0x5b494c.position["positionH"].posOffset ?? 0) +
      (_0x44e549.deltaX ?? 0)),
    (_0x5b494c.position["positionV"].posOffset =
      (_0x5b494c.position["positionV"].posOffset ?? 0) +
      (_0x44e549.deltaY ?? 0)),
    { nextDocumentData: _0x19037b }
  );
}
function bt(_0x2f32ed) {
  var _0x335cb7;
  let _0x24188f = p(_0x2f32ed.documentData, { tableIds: [_0x2f32ed.tableId] }),
    _0x326d0f = _0x24188f.body,
    _0x5ccb91 =
      (_0x335cb7 = _0x24188f.tableSource) == null
        ? undefined
        : _0x335cb7[_0x2f32ed.tableId],
    _0x3a0b21 = i(_0x24188f, _0x2f32ed.tableId);
  if (
    !(_0x326d0f != null && _0x326d0f.dataStream) ||
    !_0x326d0f.tables ||
    !_0x5ccb91 ||
    !_0x3a0b21 ||
    _0x2f32ed.targetOffset == null
  )
    throw Error(
      "[DocsTable]: Table " + _0x2f32ed.tableId + " range is not found.",
    );
  let _0x270bf3 = _0x3a0b21.startOffset,
    _0x340974 = _0x3a0b21.endOffset,
    _0x4fbe54 = _0x326d0f.dataStream["slice"](_0x270bf3, _0x340974),
    _0xba076e = _0x4fbe54.length,
    _0x521348 = Et(_0x2f32ed.targetOffset, 0, _0x326d0f.dataStream["length"]);
  if (
    (_0x521348 >= _0x270bf3 && _0x521348 <= _0x340974) ||
    !xt(_0x326d0f, _0x2f32ed.tableId, _0x521348)
  )
    return { nextDocumentData: _0x24188f };
  let _0x39a79c = _0x521348 > _0x340974 ? _0x521348 - _0xba076e : _0x521348,
    _0x57d5a7 =
      _0x326d0f.dataStream["slice"](0, _0x270bf3) +
      _0x326d0f.dataStream["slice"](_0x340974);
  return (
    (_0x326d0f.dataStream =
      _0x57d5a7.slice(0, _0x39a79c) + _0x4fbe54 + _0x57d5a7.slice(_0x39a79c)),
    (_0x326d0f.tables = _0x326d0f.tables["map"]((_0x15c2f8) =>
      _0x15c2f8.tableId === _0x2f32ed.tableId
        ? {
            ..._0x15c2f8,
            startIndex: _0x39a79c,
            endIndex: _0x39a79c + _0xba076e,
          }
        : {
            ..._0x15c2f8,
            startIndex: N(
              _0x15c2f8.startIndex,
              _0x270bf3,
              _0x340974,
              _0x521348,
              _0x39a79c,
              _0xba076e,
            ),
            endIndex: N(
              _0x15c2f8.endIndex,
              _0x270bf3,
              _0x340974,
              _0x521348,
              _0x39a79c,
              _0xba076e,
            ),
          },
    ).sort(
      (_0x1e6d3d, _0x481e2b) => _0x1e6d3d.startIndex - _0x481e2b.startIndex,
    )),
    Tt(_0x326d0f, _0x270bf3, _0x340974, _0x521348, _0x39a79c, _0xba076e),
    (_0x5ccb91.textWrap = e.TableTextWrapType["NONE"]),
    (_0x5ccb91.position["positionH"].posOffset = 0),
    (_0x5ccb91.position["positionV"].posOffset = 0),
    { nextDocumentData: _0x24188f }
  );
}
function xt(_0xdb1446, _0x4fb17c, _0x32e4a0) {
  return !(
    St(_0xdb1446.tables, _0x4fb17c, _0x32e4a0) ||
    Ct(_0xdb1446.blockRanges, _0x32e4a0) ||
    wt(_0xdb1446.customBlocks, _0x32e4a0)
  );
}
function St(_0x50c1ed, _0x21a6fc, _0x2b5390) {
  return !!(
    _0x50c1ed != null &&
    _0x50c1ed.some(
      (_0x166fb7) =>
        _0x166fb7.tableId !== _0x21a6fc &&
        _0x166fb7.startIndex <= _0x2b5390 &&
        _0x2b5390 < _0x166fb7.endIndex,
    )
  );
}
function Ct(_0x13b0bb, _0x322db1) {
  return !!(
    _0x13b0bb != null &&
    _0x13b0bb.some(
      (_0x478aaa) =>
        _0x478aaa.startIndex <= _0x322db1 && _0x322db1 <= _0x478aaa.endIndex,
    )
  );
}
function wt(_0x26670c, _0x44e8af) {
  return !!(
    _0x26670c != null &&
    _0x26670c.some((_0x2ae238) => _0x2ae238.startIndex === _0x44e8af)
  );
}
function Tt(_0x1d73aa, _0x4cd130, _0xf1b142, _0x42f2f8, _0x30f941, _0x3d1771) {
  var _0x378cd9,
    _0xe9c632,
    _0x2134ef,
    _0x142e9c,
    _0xd05a2,
    _0x127dc2,
    _0x5ae599,
    _0x27eda0;
  let _0x2c39ec = f(_0x1d73aa);
  ((_0x1d73aa.paragraphs =
    (_0x378cd9 = _0x1d73aa.paragraphs) == null
      ? undefined
      : _0x378cd9
          .map((_0x16be30) => ({
            ..._0x16be30,
            startIndex: N(
              _0x16be30.startIndex,
              _0x4cd130,
              _0xf1b142,
              _0x42f2f8,
              _0x30f941,
              _0x3d1771,
            ),
          }))
          .sort(
            (_0x147836, _0xa2fa61) =>
              _0x147836.startIndex - _0xa2fa61.startIndex,
          )),
    (_0x1d73aa.sectionBreaks =
      (_0xe9c632 = _0x1d73aa.sectionBreaks) == null
        ? undefined
        : _0xe9c632
            .map((_0x510b34) => ({
              ..._0x510b34,
              startIndex: N(
                _0x510b34.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x78291, _0x1d7cf4) =>
                _0x78291.startIndex - _0x1d7cf4.startIndex,
            )),
    (_0x1d73aa.customBlocks =
      (_0x2134ef = _0x1d73aa.customBlocks) == null
        ? undefined
        : _0x2134ef
            .map((_0x99cfe4) => ({
              ..._0x99cfe4,
              startIndex: N(
                _0x99cfe4.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x34b85d, _0x4ba83a) =>
                _0x34b85d.startIndex - _0x4ba83a.startIndex,
            )),
    (_0x1d73aa.blockRanges =
      (_0x142e9c = _0x1d73aa.blockRanges) == null
        ? undefined
        : _0x142e9c
            .map((_0x284462) => ({
              ..._0x284462,
              startIndex: N(
                _0x284462.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
              endIndex: N(
                _0x284462.endIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x27a483, _0x13cb74) =>
                _0x27a483.startIndex - _0x13cb74.startIndex,
            )),
    (_0x1d73aa.textRuns =
      (_0xd05a2 = _0x1d73aa.textRuns) == null
        ? undefined
        : _0xd05a2
            .map((_0x115058) => ({
              ..._0x115058,
              st: N(
                _0x115058.st,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
              ed: N(
                _0x115058.ed,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort((_0x2205d1, _0x23bd33) => _0x2205d1.st - _0x23bd33.st)),
    (_0x1d73aa.customRanges =
      (_0x127dc2 = _0x1d73aa.customRanges) == null
        ? undefined
        : _0x127dc2
            .map((_0x28f88c) => ({
              ..._0x28f88c,
              startIndex: N(
                _0x28f88c.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
              endIndex: N(
                _0x28f88c.endIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x49aed2, _0x4d9f52) =>
                _0x49aed2.startIndex - _0x4d9f52.startIndex,
            )),
    (_0x1d73aa.customDecorations =
      (_0x5ae599 = _0x1d73aa.customDecorations) == null
        ? undefined
        : _0x5ae599
            .map((_0x1dbcdf) => ({
              ..._0x1dbcdf,
              startIndex: N(
                _0x1dbcdf.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
              endIndex: N(
                _0x1dbcdf.endIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x3dfa49, _0x429538) =>
                _0x3dfa49.startIndex - _0x429538.startIndex,
            )),
    (_0x2c39ec.columnGroups =
      (_0x27eda0 = _0x2c39ec.columnGroups) == null
        ? undefined
        : _0x27eda0
            .map((_0x5c366c) => ({
              ..._0x5c366c,
              startIndex: N(
                _0x5c366c.startIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
              endIndex: N(
                _0x5c366c.endIndex,
                _0x4cd130,
                _0xf1b142,
                _0x42f2f8,
                _0x30f941,
                _0x3d1771,
              ),
            }))
            .sort(
              (_0x2609cb, _0x7b7dc6) =>
                _0x2609cb.startIndex - _0x7b7dc6.startIndex,
            )));
}
function N(_0x4024a3, _0x1c5f1a, _0x11b91c, _0xec7d9e, _0x249fe0, _0x30d7b1) {
  return _0x4024a3 >= _0x1c5f1a && _0x4024a3 < _0x11b91c
    ? _0x249fe0 + _0x4024a3 - _0x1c5f1a
    : _0xec7d9e < _0x1c5f1a && _0x4024a3 >= _0xec7d9e && _0x4024a3 < _0x1c5f1a
      ? _0x4024a3 + _0x30d7b1
      : _0xec7d9e > _0x11b91c && _0x4024a3 >= _0x11b91c && _0x4024a3 < _0xec7d9e
        ? _0x4024a3 - _0x30d7b1
        : _0x4024a3;
}
function Et(_0x539878, _0xc0b858, _0x1ac9cb) {
  return Math.min(Math.max(_0x539878, _0xc0b858), _0x1ac9cb);
}
function Dt(_0x222b6b, _0x542b0c) {
  var _0x5386f1;
  return (
    ((_0x5386f1 = O(_0x222b6b).tables[_0x542b0c]) == null
      ? undefined
      : _0x5386f1.headerRowCount) ?? 0
  );
}
function Ot(_0x44b139) {
  var _0x145bfa;
  return (
    ((_0x145bfa = _0x44b139.trHeight) == null ||
    (_0x145bfa = _0x145bfa.val) == null
      ? undefined
      : _0x145bfa.v) ?? 0
  );
}
let kt = (function (_0x29bbd9) {
    return (
      (_0x29bbd9.Text = "text"),
      (_0x29bbd9.Number = "number"),
      (_0x29bbd9.Date = "date"),
      (_0x29bbd9.Checkbox = "checkbox"),
      (_0x29bbd9.Dropdown = "dropdown"),
      _0x29bbd9
    );
  })({}),
  At = (function (_0x413eb9) {
    return (
      (_0x413eb9.None = "none"),
      (_0x413eb9.Text = "text"),
      (_0x413eb9.Cell = "cell"),
      (_0x413eb9.Range = "range"),
      (_0x413eb9.Row = "row"),
      (_0x413eb9.Column = "column"),
      (_0x413eb9.Table = "table"),
      _0x413eb9
    );
  })({}),
  jt = (function (_0x33916a) {
    return (
      (_0x33916a.Rect = "rect"),
      (_0x33916a.Structural = "structural"),
      (_0x33916a.Text = "text"),
      _0x33916a
    );
  })({}),
  Mt = (function (_0x4baf2e) {
    return ((_0x4baf2e.Asc = "asc"), (_0x4baf2e.Desc = "desc"), _0x4baf2e);
  })({});
function Nt(_0xacb25d) {
  var _0x1b708c, _0x1c11c1;
  let _0x4ce436 = Pt(_0xacb25d),
    _0xb967e4 = p(_0xacb25d.documentData, { tableIds: [_0xacb25d.tableId] }),
    _0x1dce7b =
      (_0x1b708c = _0xb967e4.tableSource) == null
        ? undefined
        : _0x1b708c[_0xacb25d.tableId],
    _0x3b77e7 = i(_0xb967e4, _0xacb25d.tableId);
  if (
    !_0x1dce7b ||
    !_0x3b77e7 ||
    !((_0x1c11c1 = _0xb967e4.body) != null && _0x1c11c1.dataStream)
  )
    throw Error("[DocsTable]: Table " + _0xacb25d.tableId + " is not found.");
  let _0x411c7c = _0x4ce436.sortedRowIndexes["map"](
    (_0x58d914) => _0x1dce7b.tableRows[_0x58d914],
  );
  _0x1dce7b.tableRows["splice"](
    _0x4ce436.sortStartRow,
    _0x411c7c.length,
    ..._0x411c7c,
  );
  let _0x804276 = _0xb967e4.body["dataStream"].slice(
      _0x3b77e7.startOffset,
      _0x3b77e7.endOffset,
    ),
    _0x5f2375 = _0x3b77e7.rows["slice"](0, _0x4ce436.sortStartRow)
      .map((_0x302c33) =>
        _0xb967e4.body["dataStream"].slice(
          _0x302c33.startOffset,
          _0x302c33.endOffset + 1,
        ),
      )
      .join(""),
    _0x1a6988 = _0x4ce436.sortedRowIndexes["map"]((_0x5ca71c) => {
      let _0x68cfd5 = _0x3b77e7.rows[_0x5ca71c];
      return _0xb967e4.body["dataStream"].slice(
        _0x68cfd5.startOffset,
        _0x68cfd5.endOffset + 1,
      );
    }).join(""),
    _0x109c72 =
      "" +
      _0x804276[0] +
      _0x5f2375 +
      _0x1a6988 +
      _0x804276[_0x804276.length - 1];
  return (
    (_0xb967e4.body["dataStream"] =
      "" +
      _0xb967e4.body["dataStream"].slice(0, _0x3b77e7.startOffset) +
      _0x109c72 +
      _0xb967e4.body["dataStream"].slice(_0x3b77e7.endOffset)),
    { nextDocumentData: _0xb967e4 }
  );
}
function Pt(_0x7d0074) {
  var _0x3fc2ff, _0x5b7344, _0x2a2601;
  let _0x44b386 =
      (_0x3fc2ff = _0x7d0074.documentData["tableSource"]) == null
        ? undefined
        : _0x3fc2ff[_0x7d0074.tableId],
    _0x4d37b4 = i(_0x7d0074.documentData, _0x7d0074.tableId),
    _0x1af21f =
      (_0x5b7344 = _0x7d0074.documentData["body"]) == null
        ? undefined
        : _0x5b7344.dataStream;
  if (!_0x44b386 || !_0x4d37b4 || !_0x1af21f)
    throw Error("[DocsTable]:\x20Table\x20is\x20not\x20found.");
  Ft(_0x44b386.tableRows);
  let _0x565f28 = O(_0x7d0074.metadata).tables[_0x7d0074.tableId],
    _0x44ae79 =
      (_0x565f28 != null && _0x565f28.titleRow ? 1 : 0) +
      Dt(_0x7d0074.metadata, _0x7d0074.tableId),
    _0x227ae1 = Math.min(_0x44ae79, _0x44b386.tableRows["length"]),
    _0x353bbd =
      (_0x565f28 == null ||
      (_0x2a2601 = _0x565f28.columnTypes) == null ||
      (_0x2a2601 = _0x2a2601[_0x7d0074.column]) == null
        ? undefined
        : _0x2a2601.type) ?? "text",
    _0x38914e = _0x4d37b4.rows["slice"](_0x227ae1).map(
      (_0x8c793b, _0x673ad3) => {
        let _0x4ac87b = _0x8c793b.cells[_0x7d0074.column];
        return {
          index: _0x227ae1 + _0x673ad3,
          value: _0x4ac87b
            ? _0x1af21f
                .slice(_0x4ac87b.startOffset + 1, _0x4ac87b.endOffset)
                .trim()
            : "",
        };
      },
    );
  return (
    _0x38914e.sort((_0xa92a4c, _0x4f3dc4) =>
      Lt(_0xa92a4c, _0x4f3dc4, _0x353bbd, _0x7d0074.direction),
    ),
    {
      sortStartRow: _0x227ae1,
      sortedRowIndexes: _0x38914e.map((_0x4075c5) => _0x4075c5.index),
    }
  );
}
function Ft(_0x55c59a) {
  if (
    _0x55c59a.some((_0x5cb9d7) =>
      _0x5cb9d7.tableCells["some"]((_0x461556) => It(_0x461556)),
    )
  )
    throw Error(
      "[DocsTable]:\x20Cannot\x20sort\x20a\x20table\x20with\x20row-spanning\x20merged\x20cells.",
    );
}
function It(_0x42dc15) {
  return (_0x42dc15.rowSpan ?? 1) > 1 || _0x42dc15.rowSpan === 0;
}
function Lt(_0x595cb3, _0x1c32c5, _0x23929f, _0xf3b23c) {
  let _0x45e8ab = _0xf3b23c === "asc" ? 1 : -1,
    _0x50a03b = Rt(_0x595cb3.value, _0x1c32c5.value, _0x23929f);
  return _0x50a03b === 0
    ? _0x595cb3.index - _0x1c32c5.index
    : _0x50a03b * _0x45e8ab;
}
function Rt(_0x1f5a22, _0x12c467, _0x3c7c9e) {
  return _0x3c7c9e === "number"
    ? zt(_0x1f5a22) - zt(_0x12c467)
    : _0x3c7c9e === "date"
      ? Bt(_0x1f5a22) - Bt(_0x12c467)
      : _0x3c7c9e === "checkbox"
        ? Vt(_0x1f5a22) - Vt(_0x12c467)
        : _0x1f5a22.localeCompare(_0x12c467);
}
function zt(_0x348ec3) {
  let _0x53555c = Number(_0x348ec3);
  return Number.isFinite(_0x53555c) ? _0x53555c : 1 / 0;
}
function Bt(_0x38c0f7) {
  let _0x83cd2b = Date.parse(_0x38c0f7);
  return Number.isNaN(_0x83cd2b) ? 1 / 0 : _0x83cd2b;
}
function Vt(_0x39791f) {
  return +!!["true", "1", "yes", "checked"].includes(_0x39791f.toLowerCase());
}
function P(_0x267832, _0x2c5a4f) {
  return (
    (_0x267832 == null ? undefined : _0x267832.segmentId) ??
    (_0x2c5a4f == null ? undefined : _0x2c5a4f.segmentId) ??
    ""
  );
}
function F(_0x4a24ab, _0x55eef9) {
  let _0x30df2e =
      (_0x4a24ab == null ? undefined : _0x4a24ab.startRow) ??
      (_0x55eef9 == null ? undefined : _0x55eef9.startRow),
    _0x8d5a01 =
      (_0x4a24ab == null ? undefined : _0x4a24ab.endRow) ??
      (_0x55eef9 == null ? undefined : _0x55eef9.endRow),
    _0x2ada42 =
      (_0x4a24ab == null ? undefined : _0x4a24ab.startColumn) ??
      (_0x55eef9 == null ? undefined : _0x55eef9.startColumn),
    _0x1fb30a =
      (_0x4a24ab == null ? undefined : _0x4a24ab.endColumn) ??
      (_0x55eef9 == null ? undefined : _0x55eef9.endColumn);
  return _0x30df2e == null ||
    _0x8d5a01 == null ||
    _0x2ada42 == null ||
    _0x1fb30a == null
    ? null
    : {
        endColumn: _0x1fb30a,
        endRow: _0x8d5a01,
        startColumn: _0x2ada42,
        startRow: _0x30df2e,
      };
}
function I(_0x927f85, _0x28841a = "") {
  var _0x1e390c;
  if (!_0x28841a) return _0x927f85.getSnapshot();
  let _0xede2c4 =
    (_0x1e390c = _0x927f85.getSelfOrHeaderFooterModel(_0x28841a)) == null
      ? undefined
      : _0x1e390c.getSnapshot();
  if (!_0xede2c4) return null;
  let _0x2273c0 = _0x927f85.getSnapshot();
  return {
    ..._0xede2c4,
    documentStyle: _0x2273c0.documentStyle,
    drawings: _0x2273c0.drawings,
    drawingsOrder: _0x2273c0.drawingsOrder,
    tableSource: _0x2273c0.tableSource,
  };
}
function L(_0x9057, _0x22138d, _0x530033, _0x4629c3) {
  return kn(_0x530033, _0x4629c3)
    ? null
    : _0x530033 === undefined
      ? _0x9057.insertOp(_0x22138d, _0x4629c3)
      : _0x4629c3 === undefined
        ? _0x9057.removeOp(_0x22138d, _0x530033)
        : _0x9057.replaceOp(_0x22138d, _0x530033, _0x4629c3);
}
function Ht(_0x2da0d6, _0x3f16b9, _0x18ea80, _0x3c08b3) {
  var _0xaa3891, _0x31f4b7, _0x47fdec;
  let _0x5eb66 =
    (_0xaa3891 = _0x2da0d6.tableSource) == null ||
    (_0xaa3891 = _0xaa3891[_0x3f16b9]) == null
      ? undefined
      : _0xaa3891.tableColumns[_0x18ea80];
  if (!_0x5eb66) return null;
  let _0x4bccd2 = Math.max(1, _0x3c08b3);
  if (
    ((_0x31f4b7 = _0x5eb66.size) == null ||
    (_0x31f4b7 = _0x31f4b7.width) == null
      ? undefined
      : _0x31f4b7.v) === _0x4bccd2
  )
    return null;
  let _0x361a3c = e.JSONX["getInstance"]();
  return _0x5eb66.size
    ? _0x5eb66.size["width"]
      ? _0x361a3c.replaceOp(
          [
            "tableSource",
            _0x3f16b9,
            "tableColumns",
            _0x18ea80,
            "size",
            "width",
            "v",
          ],
          (_0x47fdec = _0x5eb66.size) == null ||
            (_0x47fdec = _0x47fdec.width) == null
            ? undefined
            : _0x47fdec.v,
          _0x4bccd2,
        )
      : _0x361a3c.insertOp(
          [
            "tableSource",
            _0x3f16b9,
            "tableColumns",
            _0x18ea80,
            "size",
            "width",
          ],
          { v: _0x4bccd2 },
        )
    : _0x361a3c.insertOp(
        ["tableSource", _0x3f16b9, "tableColumns", _0x18ea80, "size"],
        { type: e.TableSizeType["SPECIFIED"], width: { v: _0x4bccd2 } },
      );
}
function Ut(_0x320ebc, _0x1fbff9, _0x4b23a3, _0x4d673a) {
  var _0x2d2d0a, _0x226a1b, _0x57f215, _0xb5b4ad, _0x363f92;
  let _0x3bcde4 =
    (_0x2d2d0a = _0x320ebc.tableSource) == null
      ? undefined
      : _0x2d2d0a[_0x1fbff9];
  if (!_0x3bcde4) return null;
  let _0x2ccdc7 = e.JSONX["getInstance"]();
  return B(
    [
      L(
        _0x2ccdc7,
        ["tableSource", _0x1fbff9, "textWrap"],
        _0x3bcde4.textWrap,
        e.TableTextWrapType["WRAP"],
      ),
      L(
        _0x2ccdc7,
        ["tableSource", _0x1fbff9, "position", "positionH", "posOffset"],
        (_0x226a1b = _0x3bcde4.position) == null ||
          (_0x226a1b = _0x226a1b.positionH) == null
          ? undefined
          : _0x226a1b.posOffset,
        (((_0x57f215 = _0x3bcde4.position) == null ||
        (_0x57f215 = _0x57f215.positionH) == null
          ? undefined
          : _0x57f215.posOffset) ?? 0) + _0x4b23a3,
      ),
      L(
        _0x2ccdc7,
        ["tableSource", _0x1fbff9, "position", "positionV", "posOffset"],
        (_0xb5b4ad = _0x3bcde4.position) == null ||
          (_0xb5b4ad = _0xb5b4ad.positionV) == null
          ? undefined
          : _0xb5b4ad.posOffset,
        (((_0x363f92 = _0x3bcde4.position) == null ||
        (_0x363f92 = _0x363f92.positionV) == null
          ? undefined
          : _0x363f92.posOffset) ?? 0) + _0x4d673a,
      ),
    ].filter(Boolean),
  );
}
function Wt(_0x1c9eb3, _0x240ba6, _0x790a51, _0x55cf82 = ["body"]) {
  var _0x37cab6, _0x3c6a54, _0x508661;
  let _0x12458d = _0x1c9eb3.body,
    _0xb5c172 =
      (_0x37cab6 = _0x1c9eb3.tableSource) == null
        ? undefined
        : _0x37cab6[_0x240ba6],
    _0x3c3e21 = i(_0x1c9eb3, _0x240ba6);
  if (!(_0x12458d != null && _0x12458d.dataStream) || !_0xb5c172 || !_0x3c3e21)
    return null;
  let _0x24dbbb = Math.min(
    Math.max(_0x790a51, 0),
    _0x12458d.dataStream["length"],
  );
  if (
    (_0x24dbbb >= _0x3c3e21.startOffset && _0x24dbbb <= _0x3c3e21.endOffset) ||
    !Gt(_0x12458d, _0x240ba6, _0x24dbbb)
  )
    return null;
  let _0x3c08f4 = ln(
    _0x12458d,
    _0x3c3e21.startOffset,
    _0x3c3e21.endOffset,
    _0x24dbbb,
    _0x55cf82,
  );
  if (!_0x3c08f4) return null;
  let _0x5ea8d7 = e.JSONX["getInstance"]();
  return B(
    [
      _0x3c08f4,
      L(
        _0x5ea8d7,
        ["tableSource", _0x240ba6, "textWrap"],
        _0xb5c172.textWrap,
        e.TableTextWrapType["NONE"],
      ),
      L(
        _0x5ea8d7,
        ["tableSource", _0x240ba6, "position", "positionH", "posOffset"],
        (_0x3c6a54 = _0xb5c172.position) == null ||
          (_0x3c6a54 = _0x3c6a54.positionH) == null
          ? undefined
          : _0x3c6a54.posOffset,
        0,
      ),
      L(
        _0x5ea8d7,
        ["tableSource", _0x240ba6, "position", "positionV", "posOffset"],
        (_0x508661 = _0xb5c172.position) == null ||
          (_0x508661 = _0x508661.positionV) == null
          ? undefined
          : _0x508661.posOffset,
        0,
      ),
    ].filter(Boolean),
  );
}
function Gt(_0x186fd4, _0x8f75fe, _0x502a55) {
  var _0x50decb, _0x3137e5, _0x5f5c30;
  return !(
    ((_0x50decb = _0x186fd4.tables) != null &&
      _0x50decb.some(
        (_0x275d10) =>
          _0x275d10.tableId !== _0x8f75fe &&
          _0x275d10.startIndex <= _0x502a55 &&
          _0x502a55 < _0x275d10.endIndex,
      )) ||
    ((_0x3137e5 = _0x186fd4.blockRanges) != null &&
      _0x3137e5.some(
        (_0x4bbcb7) =>
          _0x4bbcb7.startIndex <= _0x502a55 && _0x502a55 <= _0x4bbcb7.endIndex,
      )) ||
    ((_0x5f5c30 = _0x186fd4.customBlocks) != null &&
      _0x5f5c30.some((_0x2efe2d) => _0x2efe2d.startIndex === _0x502a55))
  );
}
function Kt(
  _0x4455a9,
  _0x542acc,
  _0x47d6a2,
  _0x38d03e,
  _0x28ea2d = e.TableRowHeightRule["AT_LEAST"],
) {
  var _0x3d63bf, _0x45216b, _0xdbfc44;
  let _0x38f417 =
    (_0x3d63bf = _0x4455a9.tableSource) == null ||
    (_0x3d63bf = _0x3d63bf[_0x542acc]) == null
      ? undefined
      : _0x3d63bf.tableRows[_0x47d6a2];
  if (!_0x38f417) return null;
  let _0x11df9d = { hRule: _0x28ea2d, val: { v: Math.max(1, _0x38d03e) } };
  return _0x38f417.trHeight
    ? [
        L(
          e.JSONX["getInstance"](),
          [
            "tableSource",
            _0x542acc,
            "tableRows",
            _0x47d6a2,
            "trHeight",
            "hRule",
          ],
          (_0x45216b = _0x38f417.trHeight) == null
            ? undefined
            : _0x45216b.hRule,
          _0x11df9d.hRule,
        ),
        L(
          e.JSONX["getInstance"](),
          [
            "tableSource",
            _0x542acc,
            "tableRows",
            _0x47d6a2,
            "trHeight",
            "val",
            "v",
          ],
          (_0xdbfc44 = _0x38f417.trHeight) == null ||
            (_0xdbfc44 = _0xdbfc44.val) == null
            ? undefined
            : _0xdbfc44.v,
          _0x11df9d.val["v"],
        ),
      ]
        .filter(Boolean)
        .reduce(
          (_0xbde388, _0x3ef880) => e.JSONX["compose"](_0xbde388, _0x3ef880),
          null,
        )
    : e.JSONX["getInstance"]().insertOp(
        ["tableSource", _0x542acc, "tableRows", _0x47d6a2, "trHeight"],
        _0x11df9d,
      );
}
function qt(_0x3da0bc, _0x2ac477, _0x2752cf, _0x1f13a4) {
  var _0x3abfa2;
  let _0x6909b2 =
    (_0x3abfa2 = _0x3da0bc.tableSource) == null
      ? undefined
      : _0x3abfa2[_0x2ac477];
  if (!_0x6909b2) return null;
  let _0x55e690 = Math.min(_0x2752cf, _0x1f13a4),
    _0x569496 = Math.max(_0x2752cf, _0x1f13a4),
    _0x48e172 = _0x6909b2.tableRows["slice"](_0x55e690, _0x569496 + 1);
  if (!_0x48e172.length) return null;
  let _0x4229e8 =
    _0x48e172.reduce((_0x590699, _0x57e807) => {
      var _0x261796;
      return (
        _0x590699 +
        (((_0x261796 = _0x57e807.trHeight) == null ||
        (_0x261796 = _0x261796.val) == null
          ? undefined
          : _0x261796.v) ?? 0)
      );
    }, 0) / _0x48e172.length;
  return _0x48e172
    .map((_0x3aa3a1, _0x4fe931) =>
      Kt(_0x3da0bc, _0x2ac477, _0x55e690 + _0x4fe931, _0x4229e8),
    )
    .filter(Boolean)
    .reduce(
      (_0x3546ed, _0x2ab672) => e.JSONX["compose"](_0x3546ed, _0x2ab672),
      null,
    );
}
function Jt(_0x19f914, _0x5ed291, _0x4fabd6, _0x4310d1) {
  var _0x598ae5;
  let _0x35e503 =
    (_0x598ae5 = _0x19f914.tableSource) == null
      ? undefined
      : _0x598ae5[_0x5ed291];
  if (!_0x35e503) return null;
  let _0x4f696a = Math.min(_0x4fabd6, _0x4310d1),
    _0xe9731f = Math.max(_0x4fabd6, _0x4310d1),
    _0xe4f603 = _0x35e503.tableColumns["slice"](_0x4f696a, _0xe9731f + 1);
  if (!_0xe4f603.length) return null;
  let _0x246c36 =
    _0xe4f603.reduce((_0x2dd277, _0x5d235a) => {
      var _0xbd964e;
      return (
        _0x2dd277 +
        (((_0xbd964e = _0x5d235a.size) == null ||
        (_0xbd964e = _0xbd964e.width) == null
          ? undefined
          : _0xbd964e.v) ?? 0)
      );
    }, 0) / _0xe4f603.length;
  return _0xe4f603
    .map((_0x21de69, _0xc2757f) =>
      Ht(_0x19f914, _0x5ed291, _0x4f696a + _0xc2757f, _0x246c36),
    )
    .filter(Boolean)
    .reduce(
      (_0x4bc304, _0x512442) => e.JSONX["compose"](_0x4bc304, _0x512442),
      null,
    );
}
function Yt(_0x564feb, _0x292614, _0x335f68) {
  var _0x4e4db5;
  let _0x36eb5c =
    (_0x4e4db5 = _0x564feb.tableSource) == null
      ? undefined
      : _0x4e4db5[_0x292614];
  if (!_0x36eb5c) return null;
  let _0x10cd27 = Math.min(
      Math.max(0, _0x335f68),
      _0x36eb5c.tableRows["length"],
    ),
    _0x8ffec5 = e.JSONX["getInstance"](),
    _0x4ff8bf = [];
  return (
    _0x36eb5c.tableRows["forEach"]((_0x193efc, _0x4d1550) => {
      let _0xf4dc01 =
          _0x4d1550 < _0x10cd27
            ? e.BooleanNumber["TRUE"]
            : e.BooleanNumber["FALSE"],
        _0x30430c = _0x4d1550 < _0x10cd27 ? e.BooleanNumber["TRUE"] : undefined,
        _0xaec7fc = L(
          _0x8ffec5,
          ["tableSource", _0x292614, "tableRows", _0x4d1550, "repeatHeaderRow"],
          _0x193efc.repeatHeaderRow,
          _0xf4dc01,
        ),
        _0x27021f = L(
          _0x8ffec5,
          ["tableSource", _0x292614, "tableRows", _0x4d1550, "isFirstRow"],
          _0x193efc.isFirstRow,
          _0x30430c,
        );
      (_0xaec7fc && _0x4ff8bf.push(_0xaec7fc),
        _0x27021f && _0x4ff8bf.push(_0x27021f));
    }),
    { actions: B(_0x4ff8bf), headerRowCount: _0x10cd27 }
  );
}
function Xt(
  _0x1904d9,
  _0x1dd4e7,
  _0xb44796,
  _0x1faec7,
  _0x46ba56,
  _0xe3781d = {},
) {
  var _0x52393e;
  let _0x2ed0d4 =
      (_0x52393e = _0x1904d9.tableSource) == null
        ? undefined
        : _0x52393e[_0x1dd4e7],
    _0x181e84 = i(_0x1904d9, _0x1dd4e7);
  if (
    !_0x2ed0d4 ||
    !_0x181e84 ||
    _0x1faec7 <= 0 ||
    _0xb44796 < 0 ||
    _0xb44796 >= _0x2ed0d4.tableColumns["length"]
  )
    return null;
  let _0x2640e2 = _0x46ba56 === "left" ? _0xb44796 : _0xb44796 + 1,
    _0x3ddafa = _0x2ed0d4.tableColumns[_0xb44796],
    _0x36f473 = _0xe3781d.insertedColumnWidth ?? _0x3ddafa.size["width"].v,
    _0x451e47 = _0xe3781d.preserveTotalWidth ?? true,
    _0x2634c0 = _0x2ed0d4.tableColumns["reduce"](
      (_0x2b189c, _0x36641a) => _0x2b189c + _0x36641a.size["width"].v,
      0,
    ),
    _0x3c5757 =
      _0x451e47 && _0x2634c0 > 0
        ? _0x2634c0 / (_0x2634c0 + _0x36f473 * _0x1faec7)
        : 1,
    _0x3bed1b = Zt(_0x2ed0d4, _0x2640e2, _0x1faec7),
    _0x320702 = Sn(_0x2ed0d4, _0x3bed1b, (_0x1bbaf3) =>
      _0x1bbaf3 >= _0x2640e2 ? _0x1bbaf3 + _0x1faec7 : _0x1bbaf3,
    );
  (Qt(
    _0x320702,
    _0x2ed0d4,
    _0x1dd4e7,
    _0x451e47,
    _0x2634c0,
    _0x36f473,
    _0x1faec7,
    _0x3c5757,
  ),
    $t(
      _0x320702,
      _0x2ed0d4,
      _0x1dd4e7,
      _0xb44796,
      _0x2640e2,
      _0x1faec7,
      _0x36f473,
      _0x3c5757,
      _0x3bed1b,
    ));
  let _0x5bda26 = M(
    _0x1904d9,
    en(_0x181e84, _0xb44796, _0x1faec7, _0x46ba56),
    _0xe3781d.bodyPath ?? ["body"],
  );
  return _0x5bda26
    ? (_0x320702.push(_0x5bda26),
      { actions: B(_0x320702), cursorColumn: _0x2640e2 })
    : null;
}
function Zt(_0x293c2f, _0x129a13, _0x3f177e) {
  return bn(
    w(_0x293c2f).map((_0x324bff) =>
      _0x129a13 <= _0x324bff.startColumn
        ? {
            ..._0x324bff,
            startColumn: _0x324bff.startColumn + _0x3f177e,
            endColumn: _0x324bff.endColumn + _0x3f177e,
          }
        : _0x129a13 <= _0x324bff.endColumn
          ? { ..._0x324bff, endColumn: _0x324bff.endColumn + _0x3f177e }
          : _0x324bff,
    ),
  );
}
function Qt(
  _0x157389,
  _0x3aab40,
  _0x84c472,
  _0x10c87d,
  _0x5e6465,
  _0x22ebd,
  _0x149029,
  _0x1dea61,
) {
  var _0x1db842;
  let _0x38d5e6 = e.JSONX["getInstance"]();
  if (_0x10c87d) {
    _0x3aab40.tableColumns["forEach"]((_0x1616df, _0x3ac730) => {
      let _0x4424ef = L(
        _0x38d5e6,
        [
          "tableSource",
          _0x84c472,
          "tableColumns",
          _0x3ac730,
          "size",
          "width",
          "v",
        ],
        _0x1616df.size["width"].v,
        _0x1616df.size["width"].v * _0x1dea61,
      );
      _0x4424ef && _0x157389.push(_0x4424ef);
    });
    return;
  }
  if ((_0x1db842 = _0x3aab40.size) != null && _0x1db842.width) {
    let _0x1cc9c2 = L(
      _0x38d5e6,
      ["tableSource", _0x84c472, "size", "width", "v"],
      _0x3aab40.size["width"].v,
      _0x5e6465 + _0x22ebd * _0x149029,
    );
    _0x1cc9c2 && _0x157389.push(_0x1cc9c2);
  }
}
function $t(
  _0x4a267e,
  _0x2d9498,
  _0xfa7648,
  _0x68e39f,
  _0x50f011,
  _0x32a02d,
  _0x5272e3,
  _0x492b4e,
  _0x1df232,
) {
  let _0x99a24b = e.JSONX["getInstance"](),
    _0x1c93d1 = _0x2d9498.tableColumns[_0x68e39f];
  for (let _0x433f3c = 0; _0x433f3c < _0x32a02d; _0x433f3c++) {
    let _0x2f8387 = z(_0x1c93d1);
    ((_0x2f8387.size["width"].v = _0x5272e3 * _0x492b4e),
      _0x4a267e.push(
        _0x99a24b.insertOp(
          ["tableSource", _0xfa7648, "tableColumns", _0x50f011 + _0x433f3c],
          _0x2f8387,
        ),
      ));
  }
  _0x2d9498.tableRows["forEach"]((_0x2fc7da, _0x20a788) => {
    for (let _0x59436b = 0; _0x59436b < _0x32a02d; _0x59436b++) {
      let _0x374dae = z(_0x2fc7da.tableCells[_0x68e39f]);
      (wn(_0x374dae, _0x20a788, _0x50f011 + _0x59436b, _0x1df232),
        _0x4a267e.push(
          _0x99a24b.insertOp(
            [
              "tableSource",
              _0xfa7648,
              "tableRows",
              _0x20a788,
              "tableCells",
              _0x50f011 + _0x59436b,
            ],
            _0x374dae,
          ),
        ));
    }
  });
}
function en(_0x1c35d3, _0x87535e, _0x580655, _0x32eb7e) {
  let _0x2388d4 = On(Dn(), _0x580655);
  return _0x1c35d3.rows["map"]((_0x75ebd3) => {
    let _0x262930 = _0x75ebd3.cells[_0x87535e],
      _0x2aa8ec =
        _0x32eb7e === "left" ? _0x262930.startOffset : _0x262930.endOffset + 1;
    return { startOffset: _0x2aa8ec, endOffset: _0x2aa8ec, text: _0x2388d4 };
  });
}
function tn(_0x1b0769, _0x1c8d14, _0x3ac917, _0x599bbb, _0x45e79f = ["body"]) {
  var _0x39bde3;
  let _0x11cb97 =
      (_0x39bde3 = _0x1b0769.tableSource) == null
        ? undefined
        : _0x39bde3[_0x1c8d14],
    _0x536870 = i(_0x1b0769, _0x1c8d14);
  if (!_0x11cb97 || !_0x536870) return null;
  let _0x4ea7cd = Math.min(_0x3ac917, _0x599bbb),
    _0x10a8eb = Math.max(_0x3ac917, _0x599bbb);
  if (
    _0x4ea7cd < 0 ||
    _0x4ea7cd >= _0x11cb97.tableColumns["length"] ||
    _0x10a8eb < _0x4ea7cd
  )
    return null;
  let _0x348081 = Math.min(_0x10a8eb, _0x11cb97.tableColumns["length"] - 1),
    _0x27fc5c = _0x348081 - _0x4ea7cd + 1;
  if (_0x27fc5c >= _0x11cb97.tableColumns["length"]) {
    let _0x318e8f = gn(_0x1b0769, _0x1c8d14, _0x45e79f);
    return _0x318e8f
      ? { actions: _0x318e8f.actions, cursorColumn: 0, deleteTable: true }
      : null;
  }
  let _0x84a076 = Sn(
    _0x11cb97,
    bn(
      w(_0x11cb97)
        .map((_0x3b3334) => yn(_0x3b3334, _0x4ea7cd, _0x348081))
        .filter((_0x20f34a) => _0x20f34a != null),
    ),
    (_0x2444ee) =>
      _0x2444ee < _0x4ea7cd
        ? _0x2444ee
        : _0x2444ee > _0x348081
          ? _0x2444ee - _0x27fc5c
          : null,
  );
  fn(_0x84a076, _0x11cb97, _0x1c8d14, _0x4ea7cd, _0x348081);
  let _0x160d9e = _0x536870.rows["map"]((_0x1f59de) => ({
      startOffset: _0x1f59de.cells[_0x4ea7cd].startOffset,
      endOffset: _0x1f59de.cells[_0x348081].endOffset + 1,
      text: "",
    })),
    _0x44c0fd = M(_0x1b0769, _0x160d9e, _0x45e79f);
  return _0x44c0fd
    ? (_0x84a076.push(
        ..._n(
          _0x1b0769,
          _0x160d9e.map(({ startOffset: _0x19768e, endOffset: _0x4e60e7 }) => ({
            startOffset: _0x19768e,
            endOffset: _0x4e60e7,
            collapsed: false,
          })),
        ),
      ),
      _0x84a076.push(_0x44c0fd),
      {
        actions: B(_0x84a076),
        cursorColumn: Math.min(
          _0x4ea7cd,
          _0x11cb97.tableColumns["length"] - _0x27fc5c - 1,
        ),
      })
    : null;
}
function nn(
  _0x62e478,
  _0x432903,
  _0x1b99e8,
  _0x1deba5,
  _0x5e5a66,
  _0x119fe6,
  _0x15f0b3 = ["body"],
) {
  var _0x287e2f;
  let _0x3e6f77 =
      (_0x287e2f = _0x62e478.tableSource) == null
        ? undefined
        : _0x287e2f[_0x432903],
    _0x541d71 = i(_0x62e478, _0x432903);
  if (!_0x3e6f77 || !_0x541d71 || _0x5e5a66 <= 0) return null;
  let _0x5c35a0 = cn(_0x1b99e8, _0x3e6f77.tableRows["length"] - 1),
    _0x5b8c86 = cn(_0x1deba5, _0x3e6f77.tableRows["length"] - 1),
    _0x464f58 = Math.min(
      _0x3e6f77.tableRows["length"] - 1,
      _0x5c35a0 + _0x5e5a66 - 1,
    ),
    _0x435bca = _0x464f58 - _0x5c35a0 + 1,
    _0x5ba777 = _0x119fe6 === "above" ? _0x5b8c86 : _0x5b8c86 + 1;
  if (_0x5ba777 >= _0x5c35a0 && _0x5ba777 <= _0x464f58 + 1)
    return { actions: null, cursorRow: _0x5c35a0 };
  let _0x4c2bd0 = _0x5ba777 > _0x464f58 ? _0x5ba777 - _0x435bca : _0x5ba777,
    _0x3af4de = [];
  sn(
    _0x3af4de,
    ["tableSource", _0x432903, "tableRows"],
    _0x5c35a0,
    _0x435bca,
    _0x4c2bd0,
  );
  let _0x65380e = a(_0x541d71, _0x5c35a0).startOffset,
    _0x27d9c2 = a(_0x541d71, _0x464f58).endOffset + 1,
    _0x9b5ba7 =
      _0x5ba777 > _0x464f58
        ? a(_0x541d71, _0x5b8c86).endOffset + 1
        : a(_0x541d71, _0x5b8c86).startOffset,
    _0x26d949 = ln(_0x62e478.body, _0x65380e, _0x27d9c2, _0x9b5ba7, _0x15f0b3);
  return _0x26d949
    ? (_0x3af4de.push(_0x26d949),
      { actions: B(_0x3af4de), cursorRow: _0x4c2bd0 })
    : null;
}
function rn(
  _0x2f4eb3,
  _0x2e8c91,
  _0x259f35,
  _0x2c3215,
  _0x28ed5b,
  _0x3d9a01,
  _0x5e4695 = ["body"],
) {
  var _0xd68c0a;
  let _0x141fea =
      (_0xd68c0a = _0x2f4eb3.tableSource) == null
        ? undefined
        : _0xd68c0a[_0x2e8c91],
    _0x5c4474 = i(_0x2f4eb3, _0x2e8c91);
  if (!_0x141fea || !_0x5c4474 || _0x28ed5b <= 0) return null;
  let _0x13bc9f = cn(_0x259f35, _0x141fea.tableColumns["length"] - 1),
    _0x51c53e = cn(_0x2c3215, _0x141fea.tableColumns["length"] - 1),
    _0x2ab449 = Math.min(
      _0x141fea.tableColumns["length"] - 1,
      _0x13bc9f + _0x28ed5b - 1,
    ),
    _0x275fc4 = _0x2ab449 - _0x13bc9f + 1,
    _0x1837ca = _0x3d9a01 === "left" ? _0x51c53e : _0x51c53e + 1;
  if (_0x1837ca >= _0x13bc9f && _0x1837ca <= _0x2ab449 + 1)
    return { actions: null, cursorColumn: _0x13bc9f };
  let _0x5abdd4 = _0x1837ca > _0x2ab449 ? _0x1837ca - _0x275fc4 : _0x1837ca,
    _0x2c1aeb = [];
  return (
    sn(
      _0x2c1aeb,
      ["tableSource", _0x2e8c91, "tableColumns"],
      _0x13bc9f,
      _0x275fc4,
      _0x5abdd4,
    ),
    _0x141fea.tableRows["forEach"]((_0x1a6ce9, _0x42e2ec) =>
      sn(
        _0x2c1aeb,
        ["tableSource", _0x2e8c91, "tableRows", _0x42e2ec, "tableCells"],
        _0x13bc9f,
        _0x275fc4,
        _0x5abdd4,
      ),
    ),
    _0x5c4474.rows["forEach"]((_0xd7d04f) => {
      let _0x858841 = _0xd7d04f.cells[_0x13bc9f].startOffset,
        _0x37c605 = _0xd7d04f.cells[_0x2ab449].endOffset + 1,
        _0x5431ca =
          _0x1837ca > _0x2ab449
            ? _0xd7d04f.cells[_0x51c53e].endOffset + 1
            : _0xd7d04f.cells[_0x51c53e].startOffset,
        _0x47425d = ln(
          _0x2f4eb3.body,
          _0x858841,
          _0x37c605,
          _0x5431ca,
          _0x5e4695,
        );
      _0x47425d && _0x2c1aeb.push(_0x47425d);
    }),
    { actions: B(_0x2c1aeb), cursorColumn: _0x5abdd4 }
  );
}
function an(
  _0x16da6e,
  _0x39f3d8,
  _0x7f9dd7,
  _0x26cf4f,
  _0x266117,
  _0x185a41 = ["body"],
) {
  var _0x4ae1e9;
  let _0x338634 =
      (_0x4ae1e9 = _0x16da6e.tableSource) == null
        ? undefined
        : _0x4ae1e9[_0x7f9dd7],
    _0x1035d2 = i(_0x16da6e, _0x7f9dd7),
    _0x44413b = _0x16da6e.body;
  if (!_0x338634 || !_0x1035d2 || !_0x44413b || !_0x1035d2.rows["length"])
    return null;
  let _0x313109 = Pt({
      documentData: _0x16da6e,
      metadata: _0x39f3d8,
      tableId: _0x7f9dd7,
      column: _0x26cf4f,
      direction: _0x266117,
    }),
    _0x26f86c = _0x1035d2.rows["map"]((_0x357f86, _0x59509a) => ({
      body: dn(
        z(
          (0, e.getBodySliceForTextXAction)(
            _0x44413b,
            _0x357f86.startOffset,
            _0x357f86.endOffset + 1,
            false,
          ),
        ),
      ),
      length: _0x357f86.endOffset + 1 - _0x357f86.startOffset,
      sourceIndex: _0x59509a,
    })),
    _0x19a772 = _0x1035d2.rows[0].startOffset,
    _0x37b517 = [];
  return (
    _0x313109.sortedRowIndexes["forEach"]((_0x55b287, _0x4de622) => {
      let _0x55cec3 = _0x313109.sortStartRow + _0x4de622,
        _0x2d686b = _0x26f86c.findIndex(
          (_0x566cf9) => _0x566cf9.sourceIndex === _0x55b287,
        );
      if (_0x2d686b === _0x55cec3) return;
      let _0x2db424 = _0x19a772 + on(_0x26f86c, _0x2d686b),
        _0x33935a = _0x19a772 + on(_0x26f86c, _0x55cec3),
        _0xb98761 = _0x26f86c[_0x2d686b],
        _0x233d55 = un(
          _0x2db424,
          _0x2db424 + _0xb98761.length,
          _0x33935a,
          _0xb98761.body,
          _0x185a41,
        );
      (_0x233d55 &&
        (_0x37b517.push(
          e.JSONX["getInstance"]().moveOp(
            ["tableSource", _0x7f9dd7, "tableRows", _0x2d686b],
            ["tableSource", _0x7f9dd7, "tableRows", _0x55cec3],
          ),
        ),
        _0x37b517.push(_0x233d55)),
        _0x26f86c.splice(_0x55cec3, 0, _0x26f86c.splice(_0x2d686b, 1)[0]));
    }),
    B(_0x37b517)
  );
}
function on(_0x1adc37, _0x5acc63) {
  let _0x234138 = 0;
  for (let _0x5b6fad = 0; _0x5b6fad < _0x5acc63; _0x5b6fad++)
    _0x234138 += _0x1adc37[_0x5b6fad].length;
  return _0x234138;
}
function sn(_0x52e014, _0x19a869, _0x48fadc, _0x1c17c7, _0x44f583) {
  let _0x20c12b = e.JSONX["getInstance"]();
  if (_0x44f583 < _0x48fadc) {
    for (let _0x483f52 = 0; _0x483f52 < _0x1c17c7; _0x483f52++)
      _0x52e014.push(
        _0x20c12b.moveOp(
          [..._0x19a869, _0x48fadc + _0x483f52],
          [..._0x19a869, _0x44f583 + _0x483f52],
        ),
      );
    return;
  }
  for (let _0x11c6d8 = _0x1c17c7 - 1; _0x11c6d8 >= 0; _0x11c6d8--)
    _0x52e014.push(
      _0x20c12b.moveOp(
        [..._0x19a869, _0x48fadc + _0x11c6d8],
        [..._0x19a869, _0x44f583 + _0x11c6d8],
      ),
    );
}
function cn(_0x4f79c1, _0x409c82) {
  return Math.min(Math.max(0, _0x4f79c1), Math.max(0, _0x409c82));
}
function ln(_0x1f3fc2, _0x224b5a, _0x22fa5b, _0x36b8d8, _0xcf48a8) {
  return !_0x1f3fc2 ||
    _0x22fa5b <= _0x224b5a ||
    (_0x36b8d8 >= _0x224b5a && _0x36b8d8 <= _0x22fa5b)
    ? null
    : un(
        _0x224b5a,
        _0x22fa5b,
        _0x36b8d8,
        dn(
          z(
            (0, e.getBodySliceForTextXAction)(
              _0x1f3fc2,
              _0x224b5a,
              _0x22fa5b,
              false,
            ),
          ),
        ),
        _0xcf48a8,
      );
}
function un(_0x114879, _0x2227ac, _0x40db4f, _0x246b03, _0x4589d4) {
  let _0x20a42a = _0x2227ac - _0x114879;
  if (_0x20a42a <= 0 || (_0x40db4f >= _0x114879 && _0x40db4f <= _0x2227ac))
    return null;
  let _0x30e20e = new e["TextX"]();
  return (
    _0x40db4f < _0x114879
      ? (_0x30e20e.retain(_0x40db4f),
        _0x30e20e.insert(_0x20a42a, _0x246b03),
        _0x30e20e.retain(_0x114879 - _0x40db4f),
        _0x30e20e.delete(_0x20a42a))
      : (_0x30e20e.retain(_0x114879),
        _0x30e20e.delete(_0x20a42a),
        _0x30e20e.retain(_0x40db4f - _0x2227ac),
        _0x30e20e.insert(_0x20a42a, _0x246b03)),
    e.JSONX["getInstance"]().editOp(_0x30e20e.serialize(), _0x4589d4)
  );
}
function dn(_0x34ac97) {
  let _0x566416 = _0x34ac97;
  return (
    Object.keys(_0x566416).forEach((_0x2ff82d) => {
      let _0x174398 = _0x566416[_0x2ff82d];
      Array.isArray(_0x174398) &&
        _0x174398.length === 0 &&
        delete _0x566416[_0x2ff82d];
    }),
    _0x34ac97
  );
}
function fn(_0x51028e, _0x4b40e8, _0x124c61, _0xe2be1c, _0x1d629a) {
  let _0x232639 = e.JSONX["getInstance"]();
  for (let _0x1c18c1 = _0x1d629a; _0x1c18c1 >= _0xe2be1c; _0x1c18c1--)
    _0x51028e.push(
      _0x232639.removeOp(
        ["tableSource", _0x124c61, "tableColumns", _0x1c18c1],
        z(_0x4b40e8.tableColumns[_0x1c18c1]),
      ),
    );
  _0x4b40e8.tableRows["forEach"]((_0x52d32b, _0x5f08db) => {
    for (let _0x4537e9 = _0x1d629a; _0x4537e9 >= _0xe2be1c; _0x4537e9--)
      _0x51028e.push(
        _0x232639.removeOp(
          [
            "tableSource",
            _0x124c61,
            "tableRows",
            _0x5f08db,
            "tableCells",
            _0x4537e9,
          ],
          z(_0x52d32b.tableCells[_0x4537e9]),
        ),
      );
  });
}
function pn(
  _0x13ecb9,
  _0x3e4e79,
  _0x2d0b99,
  _0x5f1617,
  _0x13e9f5,
  _0x2b24e8 = ["body"],
  _0x94f517,
) {
  var _0x45ed8b;
  let _0x517299 =
      (_0x45ed8b = _0x13ecb9.tableSource) == null
        ? undefined
        : _0x45ed8b[_0x3e4e79],
    _0x5574fd = i(_0x13ecb9, _0x3e4e79);
  if (
    !_0x517299 ||
    !_0x5574fd ||
    _0x5f1617 <= 0 ||
    _0x2d0b99 < 0 ||
    _0x2d0b99 >= _0x517299.tableRows["length"]
  )
    return null;
  let _0x5868bc = _0x13e9f5 === "above" ? _0x2d0b99 : _0x2d0b99 + 1,
    _0x4faa72 =
      _0x13e9f5 === "above"
        ? a(_0x5574fd, _0x2d0b99).startOffset
        : a(_0x5574fd, _0x2d0b99).endOffset + 1,
    _0x18fd3 = bn(
      w(_0x517299).map((_0x1f9d13) =>
        _0x5868bc <= _0x1f9d13.startRow
          ? {
              ..._0x1f9d13,
              startRow: _0x1f9d13.startRow + _0x5f1617,
              endRow: _0x1f9d13.endRow + _0x5f1617,
            }
          : _0x5868bc <= _0x1f9d13.endRow
            ? { ..._0x1f9d13, endRow: _0x1f9d13.endRow + _0x5f1617 }
            : _0x1f9d13,
      ),
    ),
    _0x410c7e = _0x517299.tableRows[_0x2d0b99],
    _0x1f6915 = Array.from({ length: _0x5f1617 }, (_0x281fd0, _0x27ba6e) => {
      let _0x24d590 = z(_0x410c7e);
      return (
        Cn(_0x24d590, _0x5868bc + _0x27ba6e, _0x18fd3),
        _0x94f517 == null || _0x94f517(_0x24d590, _0x27ba6e),
        _0x24d590
      );
    }),
    _0x390b1c = xn(_0x517299, _0x18fd3, (_0x50a4b6) =>
      _0x50a4b6 >= _0x5868bc ? _0x50a4b6 + _0x5f1617 : _0x50a4b6,
    ),
    _0x181158 = e.JSONX["getInstance"]();
  _0x1f6915.forEach((_0x4a79ec, _0x5f5dec) => {
    _0x390b1c.push(
      _0x181158.insertOp(
        ["tableSource", _0x3e4e79, "tableRows", _0x5868bc + _0x5f5dec],
        _0x4a79ec,
      ),
    );
  });
  let _0x4d9ab3 = M(
    _0x13ecb9,
    [
      {
        startOffset: _0x4faa72,
        endOffset: _0x4faa72,
        text: On(En(_0x517299.tableColumns["length"]), _0x5f1617),
      },
    ],
    _0x2b24e8,
  );
  return _0x4d9ab3
    ? (_0x390b1c.push(_0x4d9ab3),
      { actions: B(_0x390b1c), cursorRow: _0x5868bc })
    : null;
}
function mn(_0x6e0984, _0x67d43e, _0x4cefb8 = ["body"]) {
  var _0x149cdc;
  let _0x38aead =
    (_0x149cdc = _0x6e0984.tableSource) == null ||
    (_0x149cdc = _0x149cdc[_0x67d43e]) == null
      ? undefined
      : _0x149cdc.tableColumns["length"];
  return _0x38aead
    ? pn(_0x6e0984, _0x67d43e, 0, 1, "above", _0x4cefb8, (_0x4ca3b3) => {
        _0x4ca3b3.tableCells["forEach"]((_0xdf565e, _0x345030) => {
          _0x345030 === 0
            ? ((_0xdf565e.columnSpan = _0x38aead), delete _0xdf565e.rowSpan)
            : ((_0xdf565e.rowSpan = 0), (_0xdf565e.columnSpan = 0));
        });
      })
    : null;
}
function hn(_0x15e704, _0x186ab7, _0x206a6e, _0xffed06, _0x142f96 = ["body"]) {
  var _0x331942;
  let _0x3e9ffd =
      (_0x331942 = _0x15e704.tableSource) == null
        ? undefined
        : _0x331942[_0x186ab7],
    _0x59ff75 = i(_0x15e704, _0x186ab7);
  if (!_0x3e9ffd || !_0x59ff75) return null;
  let _0x382cc2 = Math.min(_0x206a6e, _0xffed06),
    _0x144a71 = Math.max(_0x206a6e, _0xffed06);
  if (
    _0x382cc2 < 0 ||
    _0x382cc2 >= _0x3e9ffd.tableRows["length"] ||
    _0x144a71 < _0x382cc2
  )
    return null;
  let _0x44c342 = Math.min(_0x144a71, _0x3e9ffd.tableRows["length"] - 1),
    _0xbc5733 = _0x44c342 - _0x382cc2 + 1;
  if (_0xbc5733 >= _0x3e9ffd.tableRows["length"])
    return gn(_0x15e704, _0x186ab7, _0x142f96);
  let _0x12f3bf = xn(
      _0x3e9ffd,
      bn(
        w(_0x3e9ffd)
          .map((_0x425077) => vn(_0x425077, _0x382cc2, _0x44c342))
          .filter((_0x2be229) => _0x2be229 != null),
      ),
      (_0x55f86d) =>
        _0x55f86d < _0x382cc2
          ? _0x55f86d
          : _0x55f86d > _0x44c342
            ? _0x55f86d - _0xbc5733
            : null,
    ),
    _0x44a951 = e.JSONX["getInstance"]();
  for (let _0x57f17c = _0x44c342; _0x57f17c >= _0x382cc2; _0x57f17c--)
    _0x12f3bf.push(
      _0x44a951.removeOp(
        ["tableSource", _0x186ab7, "tableRows", _0x57f17c],
        z(_0x3e9ffd.tableRows[_0x57f17c]),
      ),
    );
  let _0x3eb55f = a(_0x59ff75, _0x382cc2).startOffset,
    _0x421ea6 = a(_0x59ff75, _0x44c342).endOffset + 1,
    _0x5875d4 = M(
      _0x15e704,
      [{ startOffset: _0x3eb55f, endOffset: _0x421ea6, text: "" }],
      _0x142f96,
    );
  return _0x5875d4
    ? (_0x12f3bf.push(
        ..._n(_0x15e704, [
          { startOffset: _0x3eb55f, endOffset: _0x421ea6, collapsed: false },
        ]),
      ),
      _0x12f3bf.push(_0x5875d4),
      {
        actions: B(_0x12f3bf),
        cursorRow: Math.min(
          _0x382cc2,
          _0x3e9ffd.tableRows["length"] - _0xbc5733 - 1,
        ),
      })
    : null;
}
function gn(_0x179456, _0x4d7cf7, _0x225696) {
  var _0x22188c;
  let _0x2e5076 =
      (_0x22188c = _0x179456.tableSource) == null
        ? undefined
        : _0x22188c[_0x4d7cf7],
    _0xe08373 = i(_0x179456, _0x4d7cf7);
  if (!_0x2e5076 || !_0xe08373) return null;
  let _0x3f2f2c = M(
    _0x179456,
    [
      {
        startOffset: _0xe08373.startOffset,
        endOffset: _0xe08373.endOffset,
        text: "",
      },
    ],
    _0x225696,
  );
  if (!_0x3f2f2c) return null;
  let _0x2ff329 = _n(_0x179456, [
    {
      startOffset: _0xe08373.startOffset,
      endOffset: _0xe08373.endOffset,
      collapsed: false,
    },
  ]);
  return {
    actions: B([
      e.JSONX["getInstance"]().removeOp(
        ["tableSource", _0x4d7cf7],
        z(_0x2e5076),
      ),
      ..._0x2ff329,
      _0x3f2f2c,
    ]),
    cursorRow: 0,
    deleteTable: true,
  };
}
function _n(_0x1b4f6a, _0x4bad75) {
  let _0x3bab3d = _0x1b4f6a.body;
  if (!_0x3bab3d) return [];
  let _0x156b6d = _0x1b4f6a.drawings ?? {},
    _0x32b0e4 = _0x1b4f6a.drawingsOrder ?? [],
    _0x3f0403 = [
      ...new Set((0, e.getCustomBlockIdsInSelections)(_0x3bab3d, _0x4bad75)),
    ].sort(
      (_0xb191e6, _0x303af1) =>
        _0x32b0e4.indexOf(_0x303af1) - _0x32b0e4.indexOf(_0xb191e6),
    ),
    _0x264601 = e.JSONX["getInstance"](),
    _0x430b83 = [];
  for (let _0x2a3afe of _0x3f0403) {
    let _0x5833b2 = _0x156b6d[_0x2a3afe];
    if (_0x5833b2) {
      let _0x3e1761 = _0x264601.removeOp(["drawings", _0x2a3afe], _0x5833b2);
      _0x3e1761 && _0x430b83.push(_0x3e1761);
    }
    let _0x326eaf = _0x32b0e4.indexOf(_0x2a3afe);
    if (_0x326eaf >= 0) {
      let _0x486ed4 = _0x264601.removeOp(
        ["drawingsOrder", _0x326eaf],
        _0x2a3afe,
      );
      _0x486ed4 && _0x430b83.push(_0x486ed4);
    }
  }
  return _0x430b83;
}
function vn(_0x3eb51b, _0x272dc4, _0x1233b0) {
  let _0x2a6e6c = [],
    _0x1ca367 = _0x1233b0 - _0x272dc4 + 1;
  for (
    let _0x134a1f = _0x3eb51b.startRow;
    _0x134a1f <= _0x3eb51b.endRow;
    _0x134a1f++
  )
    _0x134a1f < _0x272dc4
      ? _0x2a6e6c.push(_0x134a1f)
      : _0x134a1f > _0x1233b0 && _0x2a6e6c.push(_0x134a1f - _0x1ca367);
  return _0x2a6e6c.length
    ? {
        ..._0x3eb51b,
        startRow: Math.min(..._0x2a6e6c),
        endRow: Math.max(..._0x2a6e6c),
      }
    : null;
}
function yn(_0x5970b5, _0x268036, _0x5551cb) {
  let _0x439701 = [],
    _0x4491eb = _0x5551cb - _0x268036 + 1;
  for (
    let _0x5d667d = _0x5970b5.startColumn;
    _0x5d667d <= _0x5970b5.endColumn;
    _0x5d667d++
  )
    _0x5d667d < _0x268036
      ? _0x439701.push(_0x5d667d)
      : _0x5d667d > _0x5551cb && _0x439701.push(_0x5d667d - _0x4491eb);
  return _0x439701.length
    ? {
        ..._0x5970b5,
        startColumn: Math.min(..._0x439701),
        endColumn: Math.max(..._0x439701),
      }
    : null;
}
function bn(_0x159813) {
  let _0x276933 = new Map();
  for (let _0x4e8317 of _0x159813) {
    let _0x127d28 = _0x4e8317.endRow - _0x4e8317.startRow + 1,
      _0x3bf7b9 = _0x4e8317.endColumn - _0x4e8317.startColumn + 1;
    for (
      let _0xcc7ada = _0x4e8317.startRow;
      _0xcc7ada <= _0x4e8317.endRow;
      _0xcc7ada++
    )
      for (
        let _0x139584 = _0x4e8317.startColumn;
        _0x139584 <= _0x4e8317.endColumn;
        _0x139584++
      )
        _0x276933.set(
          R(_0xcc7ada, _0x139584),
          _0xcc7ada === _0x4e8317.startRow &&
            _0x139584 === _0x4e8317.startColumn
            ? { rowSpan: _0x127d28, columnSpan: _0x3bf7b9 }
            : { rowSpan: 0, columnSpan: 0 },
        );
  }
  return _0x276933;
}
function xn(_0x58741d, _0x9500c2, _0x3bd510) {
  let _0x44e0b1 = [],
    _0x254f14 = e.JSONX["getInstance"]();
  return (
    _0x58741d.tableRows["forEach"]((_0x239af7, _0x783612) => {
      let _0x40be1b = _0x3bd510(_0x783612);
      _0x40be1b != null &&
        _0x239af7.tableCells["forEach"]((_0x17dbbe, _0x43883e) => {
          let _0x3c0264 = _0x9500c2.get(R(_0x40be1b, _0x43883e)),
            _0x16b33a = [
              "tableSource",
              _0x58741d.tableId,
              "tableRows",
              _0x783612,
              "tableCells",
              _0x43883e,
            ],
            _0x44052a = L(
              _0x254f14,
              [..._0x16b33a, "rowSpan"],
              _0x17dbbe.rowSpan,
              _0x3c0264 == null ? undefined : _0x3c0264.rowSpan,
            ),
            _0x592d95 = L(
              _0x254f14,
              [..._0x16b33a, "columnSpan"],
              _0x17dbbe.columnSpan,
              _0x3c0264 == null ? undefined : _0x3c0264.columnSpan,
            );
          (_0x44052a && _0x44e0b1.push(_0x44052a),
            _0x592d95 && _0x44e0b1.push(_0x592d95));
        });
    }),
    _0x44e0b1
  );
}
function Sn(_0x2fd755, _0x24c9d8, _0x217a73) {
  let _0x561d86 = [],
    _0x22f12f = e.JSONX["getInstance"]();
  return (
    _0x2fd755.tableRows["forEach"]((_0x2daef7, _0x1c7f06) => {
      _0x2daef7.tableCells["forEach"]((_0x41546c, _0x2c7556) => {
        let _0x6a3f33 = _0x217a73(_0x2c7556);
        if (_0x6a3f33 == null) return;
        let _0x35adb2 = _0x24c9d8.get(R(_0x1c7f06, _0x6a3f33)),
          _0x1f3fdd = [
            "tableSource",
            _0x2fd755.tableId,
            "tableRows",
            _0x1c7f06,
            "tableCells",
            _0x2c7556,
          ],
          _0x3c07ad = L(
            _0x22f12f,
            [..._0x1f3fdd, "rowSpan"],
            _0x41546c.rowSpan,
            _0x35adb2 == null ? undefined : _0x35adb2.rowSpan,
          ),
          _0x2b9c03 = L(
            _0x22f12f,
            [..._0x1f3fdd, "columnSpan"],
            _0x41546c.columnSpan,
            _0x35adb2 == null ? undefined : _0x35adb2.columnSpan,
          );
        (_0x3c07ad && _0x561d86.push(_0x3c07ad),
          _0x2b9c03 && _0x561d86.push(_0x2b9c03));
      });
    }),
    _0x561d86
  );
}
function Cn(_0x2c4651, _0x54ac76, _0x38b19f) {
  _0x2c4651.tableCells["forEach"]((_0x45e5c8, _0x55c689) => {
    let _0x1718ed = _0x38b19f.get(R(_0x54ac76, _0x55c689));
    (Tn(
      _0x45e5c8,
      "rowSpan",
      _0x1718ed == null ? undefined : _0x1718ed.rowSpan,
    ),
      Tn(
        _0x45e5c8,
        "columnSpan",
        _0x1718ed == null ? undefined : _0x1718ed.columnSpan,
      ));
  });
}
function wn(_0x22fde1, _0xb24dda, _0x4e1380, _0x18532e) {
  let _0x4c4bd9 = _0x18532e.get(R(_0xb24dda, _0x4e1380));
  (Tn(_0x22fde1, "rowSpan", _0x4c4bd9 == null ? undefined : _0x4c4bd9.rowSpan),
    Tn(
      _0x22fde1,
      "columnSpan",
      _0x4c4bd9 == null ? undefined : _0x4c4bd9.columnSpan,
    ));
}
function Tn(_0x12b8e1, _0x4795b7, _0x5b964a) {
  _0x5b964a === undefined
    ? delete _0x12b8e1[_0x4795b7]
    : (_0x12b8e1[_0x4795b7] = _0x5b964a);
}
function R(_0x22bee6, _0xa63f16) {
  return [_0x22bee6, _0xa63f16].join(":");
}
function En(_0x590014) {
  return [
    e.DataStreamTreeTokenType["TABLE_ROW_START"],
    On(Dn(), _0x590014),
    e.DataStreamTreeTokenType["TABLE_ROW_END"],
  ].join("");
}
function Dn() {
  return [
    e.DataStreamTreeTokenType["TABLE_CELL_START"],
    "\x0d\x0a",
    e.DataStreamTreeTokenType["TABLE_CELL_END"],
  ].join("");
}
function On(_0x576fe0, _0x175ddc) {
  return Array.from({ length: _0x175ddc }, () => _0x576fe0).join("");
}
function z(_0x3b7f68) {
  return Array.isArray(_0x3b7f68)
    ? _0x3b7f68.map((_0x21af37) => z(_0x21af37))
    : !_0x3b7f68 || typeof _0x3b7f68 != "object"
      ? _0x3b7f68
      : Object.fromEntries(
          Object.entries(_0x3b7f68).map(([_0x5f3170, _0x5943ed]) => [
            _0x5f3170,
            z(_0x5943ed),
          ]),
        );
}
function B(_0x483ce0) {
  return _0x483ce0.reduce(
    (_0x313523, _0x58a765) => e.JSONX["compose"](_0x313523, _0x58a765),
    null,
  );
}
function V(
  _0x25ac5f,
  _0x512b1b,
  _0x3c3eec,
  _0x4ef898,
  _0xae93ad,
  _0x39ac13,
  _0x77b899,
  _0x4619d0,
) {
  if (!_0x4ef898) return true;
  let _0x975047 = [];
  return (
    _0xae93ad
      ? (_0x975047 = An(_0x3c3eec, _0xae93ad))
      : _0x39ac13 != null &&
        (_0x975047 = [
          { startOffset: _0x39ac13, endOffset: _0x39ac13, collapsed: true },
        ]),
    !!_0x25ac5f.syncExecuteCommand(t.RichTextEditingMutation["id"], {
      unitId: _0x512b1b,
      historyAction: _0x4619d0,
      actions: _0x4ef898,
      textRanges: _0x975047,
      trigger: _0x77b899,
    })
  );
}
function H(_0x53c49c, _0xbb0179 = "") {
  var _0x348608, _0x26efe1;
  return _0xbb0179
    ? (_0x348608 = _0x53c49c.headers) != null && _0x348608[_0xbb0179]
      ? ["headers", _0xbb0179, "body"]
      : (_0x26efe1 = _0x53c49c.footers) != null && _0x26efe1[_0xbb0179]
        ? ["footers", _0xbb0179, "body"]
        : ["body"]
    : ["body"];
}
function kn(_0x5b7aef, _0x51c342) {
  return JSON.stringify(_0x5b7aef) === JSON.stringify(_0x51c342);
}
function An(_0x2910a6, _0x2adafc) {
  var _0x15b2a6, _0x3fedc8, _0x21881c;
  let _0xaa3de3 = i(_0x2910a6, _0x2adafc.tableId);
  if (!_0xaa3de3) return [];
  let _0x379bcc = Math.min(_0x2adafc.startRow, _0x2adafc.endRow),
    _0x5dd026 = Math.max(_0x2adafc.startRow, _0x2adafc.endRow),
    _0x22bfd1 = Math.min(_0x2adafc.startColumn, _0x2adafc.endColumn),
    _0x416876 = Math.max(_0x2adafc.startColumn, _0x2adafc.endColumn),
    _0x351b69 =
      (_0x15b2a6 = _0xaa3de3.rows[_0x379bcc]) == null
        ? undefined
        : _0x15b2a6.cells[_0x22bfd1],
    _0x175b2b =
      (_0x3fedc8 = _0xaa3de3.rows[_0x5dd026]) == null
        ? undefined
        : _0x3fedc8.cells[_0x416876];
  if (!_0x351b69 || !_0x175b2b) return [];
  let _0x52c8f0 =
      (_0x21881c = _0xaa3de3.tableSource["tableRows"][_0x379bcc]) == null
        ? undefined
        : _0x21881c.tableCells[_0x22bfd1],
    _0x4309b7 = (_0x52c8f0 == null ? undefined : _0x52c8f0.rowSpan) ?? 1,
    _0x59d212 = (_0x52c8f0 == null ? undefined : _0x52c8f0.columnSpan) ?? 1,
    _0x2af696 =
      (_0x4309b7 > 1 || _0x59d212 > 1) &&
      _0x379bcc + _0x4309b7 - 1 >= _0x5dd026 &&
      _0x22bfd1 + _0x59d212 - 1 >= _0x416876
        ? _0x351b69
        : _0x175b2b,
    _0x34a03e = _0x22bfd1 === 0 && _0x416876 === _0xaa3de3.columnCount - 1,
    _0x19e80f = _0x379bcc === 0 && _0x5dd026 === _0xaa3de3.rowCount - 1,
    _0x2d0be1 = _0x351b69.startOffset + 1;
  return [
    {
      startOffset: _0x2d0be1,
      endOffset: Math.max(_0x2d0be1, _0x2af696.endOffset - 1),
      collapsed: false,
      rangeType: e.DOC_RANGE_TYPE["RECT"],
      segmentId: _0x2adafc.segmentId ?? "",
      tableId: _0x2adafc.tableId,
      startRow: _0x379bcc,
      endRow: _0x5dd026,
      startColumn: _0x22bfd1,
      endColumn: _0x416876,
      spanEntireRow: _0x34a03e,
      spanEntireColumn: _0x19e80f,
      spanEntireTable: _0x34a03e && _0x19e80f,
      isActive: true,
    },
  ];
}
function U(_0x347bb4) {
  "@babel/helpers - typeof";
  return (
    (U =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4333b7) {
            return typeof _0x4333b7;
          }
        : function (_0x5bf97d) {
            return _0x5bf97d &&
              typeof Symbol == "function" &&
              _0x5bf97d.constructor === Symbol &&
              _0x5bf97d !== Symbol.prototype
              ? "symbol"
              : typeof _0x5bf97d;
          }),
    U(_0x347bb4)
  );
}
function jn(_0xd264fd, _0x291826) {
  if (U(_0xd264fd) != "object" || !_0xd264fd) return _0xd264fd;
  var _0x4f50bc = _0xd264fd[Symbol.toPrimitive];
  if (_0x4f50bc !== undefined) {
    var _0x173f4c = _0x4f50bc.call(_0xd264fd, _0x291826 || "default");
    if (U(_0x173f4c) != "object") return _0x173f4c;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x291826 === "string" ? String : Number)(_0xd264fd);
}
function Mn(_0x94777d) {
  var _0x6c15b0 = jn(_0x94777d, "string");
  return U(_0x6c15b0) == "symbol" ? _0x6c15b0 : _0x6c15b0 + "";
}
function W(_0x3ea10e, _0x33e245, _0x5c5661) {
  return (
    (_0x33e245 = Mn(_0x33e245)) in _0x3ea10e
      ? Object.defineProperty(_0x3ea10e, _0x33e245, {
          value: _0x5c5661,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3ea10e[_0x33e245] = _0x5c5661),
    _0x3ea10e
  );
}
function G(_0x3c9794, _0x34a494) {
  return function (_0x2002f5, _0x5027c5) {
    _0x34a494(_0x2002f5, _0x5027c5, _0x3c9794);
  };
}
function Nn(_0x45e655, _0x53b04c, _0x157c61, _0x24d06d) {
  var _0x18a6ef = arguments.length,
    _0x564bb1 =
      _0x18a6ef < 3
        ? _0x53b04c
        : _0x24d06d === null
          ? (_0x24d06d = Object.getOwnPropertyDescriptor(_0x53b04c, _0x157c61))
          : _0x24d06d,
    _0x436edc;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x564bb1 = Reflect.decorate(_0x45e655, _0x53b04c, _0x157c61, _0x24d06d);
  else {
    for (var _0x36a1a0 = _0x45e655.length - 1; _0x36a1a0 >= 0; _0x36a1a0--)
      (_0x436edc = _0x45e655[_0x36a1a0]) &&
        (_0x564bb1 =
          (_0x18a6ef < 3
            ? _0x436edc(_0x564bb1)
            : _0x18a6ef > 3
              ? _0x436edc(_0x53b04c, _0x157c61, _0x564bb1)
              : _0x436edc(_0x53b04c, _0x157c61)) || _0x564bb1);
  }
  return (
    _0x18a6ef > 3 &&
      _0x564bb1 &&
      Object.defineProperty(_0x53b04c, _0x157c61, _0x564bb1),
    _0x564bb1
  );
}
let K = class extends e.Disposable {
  constructor(_0x5c3917, _0x27de5c) {
    var _0x4d6941;
    (super(),
      (this._univerInstanceService = _0x5c3917),
      (this._docSelectionManagerService = _0x27de5c),
      W(this, "_selectionChange$", new n["Subject"]()),
      W(this, "_structuralSelection", null),
      W(this, "_structuralSelectionTableShape", null),
      W(this, "_nativeSelectionSuppressed", false),
      W(this, "_preserveStructuralSelectionOnNextTextSelection", false),
      W(this, "selectionChange$", this._selectionChange$["asObservable"]()),
      this.disposeWithMe(
        ((_0x4d6941 = this._docSelectionManagerService["textSelection$"]) ==
        null
          ? undefined
          : _0x4d6941.subscribe(() => {
              (this._restoreNativeSelectionForTextFocus(),
                this.emitCurrentSelection());
            })) ?? (() => undefined),
      ));
  }
  getCurrentSelection() {
    let _0x1c322e = this._getCurrentDoc();
    if (!_0x1c322e) return null;
    if (!this._nativeSelectionSuppressed) {
      var _0x2a807f, _0x4b98ad, _0x5c7262, _0xb0a799;
      let _0x40a276 =
        (_0x2a807f = (_0x4b98ad = this._docSelectionManagerService)
          .getRectRanges) == null
          ? undefined
          : _0x2a807f.call(_0x4b98ad);
      if (_0x40a276 && _0x40a276.length > 0)
        return this._getSelectionFromRectRanges(_0x1c322e, _0x40a276);
      let _0xcfabc =
        (_0x5c7262 = (_0xb0a799 = this._docSelectionManagerService)
          .getActiveTextRange) == null
          ? undefined
          : _0x5c7262.call(_0xb0a799);
      if (_0xcfabc)
        return (
          this._getSelectionFromActiveTextRange(_0x1c322e, _0xcfabc) || {
            kind: "text",
            unitId: _0x1c322e.getUnitId(),
            segmentId: _0xcfabc.segmentId ?? "",
            tableId: "",
            startRow: -1,
            endRow: -1,
            startColumn: -1,
            endColumn: -1,
            startOffset: _0xcfabc.startOffset ?? 0,
            endOffset: _0xcfabc.endOffset ?? _0xcfabc.startOffset ?? 0,
            source: "text",
          }
        );
    }
    let _0x4750e1 = this._getValidStructuralSelection(_0x1c322e);
    return _0x4750e1 ? { ..._0x4750e1, unitId: _0x1c322e.getUnitId() } : null;
  }
  getStructuralSelection() {
    let _0x4fbb33 = this._getCurrentDoc();
    if (!_0x4fbb33) return null;
    let _0x5e6410 = this._getValidStructuralSelection(_0x4fbb33);
    return _0x5e6410 ? { ..._0x5e6410, unitId: _0x4fbb33.getUnitId() } : null;
  }
  getStableTableSelection() {
    let _0x4f4886 = this.getCurrentSelection();
    return Pn(_0x4f4886) ? _0x4f4886 : null;
  }
  emitCurrentSelection() {
    let _0x2c7d8a = this._getCurrentDoc();
    (_0x2c7d8a && this._getValidStructuralSelection(_0x2c7d8a),
      this._selectionChange$["next"](this.getCurrentSelection()));
  }
  setStructuralSelection(_0x56066c, _0xced131 = {}) {
    var _0x1c2094;
    let _0x412177 = this._getCurrentDoc(),
      _0x15a059 =
        _0x412177 == null ||
        (_0x1c2094 = _0x412177.getSnapshot().tableSource) == null
          ? undefined
          : _0x1c2094[_0x56066c.tableId],
      _0x5e6bc8 = _0x15a059 ? Ln(_0x15a059, _0x56066c) : null;
    if (!_0x15a059 || !_0x5e6bc8) {
      (this._clearStructuralSelectionState(true), this.emitCurrentSelection());
      return;
    }
    if (
      ((this._structuralSelection = {
        kind: Bn(_0x56066c.kind, _0x5e6bc8, _0x15a059),
        unitId: (_0x412177 == null ? undefined : _0x412177.getUnitId()) ?? "",
        segmentId: _0x56066c.segmentId ?? "",
        tableId: _0x56066c.tableId,
        startRow: _0x5e6bc8.startRow,
        endRow: _0x5e6bc8.endRow,
        startColumn: _0x5e6bc8.startColumn,
        endColumn: _0x5e6bc8.endColumn,
        startOffset: _0x56066c.startOffset ?? 0,
        endOffset: _0x56066c.endOffset ?? _0x56066c.startOffset ?? 0,
        source: "structural",
      }),
      (this._structuralSelectionTableShape = zn(_0x15a059)),
      (this._preserveStructuralSelectionOnNextTextSelection =
        !!_0xced131.preserveOnTextSelection),
      _0xced131.clearNativeSelection !== false)
    ) {
      var _0x39ad81, _0x1b5f83;
      (_0x39ad81 = (_0x1b5f83 = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x39ad81.call(_0x1b5f83, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setStructuralHeaderSelection(
    _0x3b3051,
    _0x580201,
    _0x2a193b,
    _0x25de3b,
    _0x12395d = {},
  ) {
    var _0x13d84f, _0x46f895;
    let _0x3f14e2 = this._getCurrentDoc(),
      _0xaf2156 =
        _0x3f14e2 == null ||
        (_0x13d84f = _0x3f14e2.getSnapshot().tableSource) == null
          ? undefined
          : _0x13d84f[_0x3b3051];
    if (!_0xaf2156) return;
    let _0x696b6d = _0xaf2156.tableRows["length"],
      _0x5cb0bb =
        ((_0x46f895 = _0xaf2156.tableRows[0]) == null
          ? undefined
          : _0x46f895.tableCells["length"]) ?? 0,
      _0x36f08d = Math.min(_0x2a193b, _0x25de3b),
      _0x5a8ae9 = Math.max(_0x2a193b, _0x25de3b);
    if (_0x580201 === "row") {
      this._setDirectStructuralSelection(
        {
          kind: "row",
          segmentId: _0x12395d.segmentId,
          tableId: _0x3b3051,
          startRow: _0x36f08d,
          endRow: _0x5a8ae9,
          startColumn: 0,
          endColumn: Math.max(_0x5cb0bb - 1, 0),
        },
        _0x12395d,
      );
      return;
    }
    this._setDirectStructuralSelection(
      {
        kind: "column",
        segmentId: _0x12395d.segmentId,
        tableId: _0x3b3051,
        startRow: 0,
        endRow: Math.max(_0x696b6d - 1, 0),
        startColumn: _0x36f08d,
        endColumn: _0x5a8ae9,
      },
      _0x12395d,
    );
  }
  clearStructuralSelection(_0x277846 = {}) {
    if (
      (this._clearStructuralSelectionState(),
      _0x277846.clearNativeSelection !== false)
    ) {
      var _0x5e41a7, _0x2ffc02;
      (_0x5e41a7 = (_0x2ffc02 = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x5e41a7.call(_0x2ffc02, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setNativeSelectionSuppressed(_0xb567f7) {
    if (this._nativeSelectionSuppressed !== _0xb567f7) {
      if (
        ((this._nativeSelectionSuppressed = _0xb567f7),
        _0xb567f7 ||
          (this._preserveStructuralSelectionOnNextTextSelection = false),
        _0xb567f7)
      ) {
        var _0x34268d, _0x515ee3;
        (_0x34268d = (_0x515ee3 = this._docSelectionManagerService)
          .replaceDocRanges) == null ||
          _0x34268d.call(_0x515ee3, [], undefined, false);
      }
      this.emitCurrentSelection();
    }
  }
  dispose() {
    (super.dispose(), this._selectionChange$["complete"]());
  }
  _getCurrentDoc() {
    var _0x3c96b7, _0x4a8134;
    return (
      ((_0x3c96b7 = (_0x4a8134 = this._univerInstanceService)
        .getCurrentUnitOfType) == null
        ? undefined
        : _0x3c96b7.call(_0x4a8134, e.UniverInstanceType["UNIVER_DOC"])) ?? null
    );
  }
  _restoreNativeSelectionForTextFocus() {
    var _0x413c18, _0x2683ee;
    let _0x2fe9db =
      (_0x413c18 = (_0x2683ee = this._docSelectionManagerService)
        .getActiveTextRange) == null
        ? undefined
        : _0x413c18.call(_0x2683ee);
    if ((_0x2fe9db == null ? undefined : _0x2fe9db.startOffset) != null) {
      if (this._preserveStructuralSelectionOnNextTextSelection) {
        this._preserveStructuralSelectionOnNextTextSelection = false;
        return;
      }
      ((this._nativeSelectionSuppressed = false),
        this._clearStructuralSelectionState());
    }
  }
  _setDirectStructuralSelection(_0x18eb27, _0xa6d2d5 = {}) {
    var _0x378ee6;
    let _0x3a572a = this._getCurrentDoc(),
      _0x46022a =
        _0x3a572a == null ||
        (_0x378ee6 = _0x3a572a.getSnapshot().tableSource) == null
          ? undefined
          : _0x378ee6[_0x18eb27.tableId],
      _0x3837e1 = _0x46022a ? Ln(_0x46022a, _0x18eb27) : null;
    if (!_0x46022a || !_0x3837e1) {
      (this._clearStructuralSelectionState(true), this.emitCurrentSelection());
      return;
    }
    if (
      ((this._structuralSelection = {
        kind: _0x18eb27.kind,
        unitId: (_0x3a572a == null ? undefined : _0x3a572a.getUnitId()) ?? "",
        segmentId: _0x18eb27.segmentId ?? "",
        tableId: _0x18eb27.tableId,
        startRow: _0x3837e1.startRow,
        endRow: _0x3837e1.endRow,
        startColumn: _0x3837e1.startColumn,
        endColumn: _0x3837e1.endColumn,
        startOffset: _0x18eb27.startOffset ?? 0,
        endOffset: _0x18eb27.endOffset ?? _0x18eb27.startOffset ?? 0,
        source: "structural",
      }),
      (this._structuralSelectionTableShape = zn(_0x46022a)),
      (this._preserveStructuralSelectionOnNextTextSelection =
        !!_0xa6d2d5.preserveOnTextSelection),
      _0xa6d2d5.clearNativeSelection !== false)
    ) {
      var _0x57b687, _0xf4aaa3;
      (_0x57b687 = (_0xf4aaa3 = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x57b687.call(_0xf4aaa3, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  _getSelectionFromActiveTextRange(_0x4a52df, _0x1743bd) {
    var _0x57f60b;
    let _0x1a6fbd = _0x1743bd.startOffset;
    if (_0x1a6fbd == null) return null;
    let _0x43b8dc =
        I(_0x4a52df, _0x1743bd.segmentId) ?? _0x4a52df.getSnapshot(),
      _0x1a9e3e =
        (_0x57f60b = _0x43b8dc.body) == null ||
        (_0x57f60b = _0x57f60b.tables) == null
          ? undefined
          : _0x57f60b.find(
              (_0x2a41e4) =>
                _0x1a6fbd > _0x2a41e4.startIndex &&
                _0x1a6fbd < _0x2a41e4.endIndex,
            );
    if (!(_0x1a9e3e != null && _0x1a9e3e.tableId)) return null;
    let _0x304340 = i(_0x43b8dc, _0x1a9e3e.tableId),
      _0x5e045a =
        _0x304340 == null
          ? undefined
          : _0x304340.rows["flatMap"]((_0x1fe402) => _0x1fe402.cells).find(
              (_0x3f3748) =>
                _0x1a6fbd >= _0x3f3748.startOffset &&
                _0x1a6fbd <= _0x3f3748.endOffset,
            );
    if (!_0x304340 || !_0x5e045a) return null;
    let _0xd7b7ce = ae(_0x304340.tableSource, {
      startRow: _0x5e045a.row,
      endRow: _0x5e045a.row,
      startColumn: _0x5e045a.column,
      endColumn: _0x5e045a.column,
    });
    return {
      kind: Bn("cell", _0xd7b7ce, _0x304340.tableSource),
      unitId: _0x4a52df.getUnitId(),
      segmentId: _0x1743bd.segmentId ?? "",
      tableId: _0x1a9e3e.tableId,
      startRow: _0xd7b7ce.startRow,
      endRow: _0xd7b7ce.endRow,
      startColumn: _0xd7b7ce.startColumn,
      endColumn: _0xd7b7ce.endColumn,
      startOffset: _0x5e045a.startOffset,
      endOffset: _0x5e045a.endOffset,
      source: "text",
    };
  }
  _getSelectionFromRectRanges(_0x690554, _0x176b87) {
    var _0x2e092e;
    let _0x4aa983 = _0x176b87.find((_0x433f33) => !!_0x433f33.tableId);
    if (!(_0x4aa983 != null && _0x4aa983.tableId)) return null;
    let _0x122749 = _0x4aa983.tableId,
      _0x462580 =
        (_0x2e092e = _0x690554.getSnapshot().tableSource) == null
          ? undefined
          : _0x2e092e[_0x122749];
    if (!_0x462580) return null;
    let _0x1dff5b = _0x176b87
      .filter((_0x488c81) => _0x488c81.tableId === _0x122749)
      .map((_0x14603d) => {
        let _0x2c4b43 = In(_0x462580, _0x14603d);
        return _0x2c4b43 ? { ..._0x14603d, ..._0x2c4b43 } : null;
      });
    if (_0x1dff5b.some((_0x1354cf) => _0x1354cf == null)) return null;
    let _0x27e3dd = _0x1dff5b.filter((_0x5bd47e) => _0x5bd47e != null),
      _0x32d4f4 = this._canCombineRectRanges(_0x27e3dd)
        ? _0x27e3dd
        : [_0x27e3dd[0] ?? _0x4aa983],
      _0x577c37 = ae(_0x462580, {
        startRow: Math.min(
          ..._0x32d4f4.map((_0x50e5ef) =>
            Math.min(_0x50e5ef.startRow, _0x50e5ef.endRow),
          ),
        ),
        endRow: Math.max(
          ..._0x32d4f4.map((_0x55b736) =>
            Math.max(_0x55b736.startRow, _0x55b736.endRow),
          ),
        ),
        startColumn: Math.min(
          ..._0x32d4f4.map((_0x3f4b7e) =>
            Math.min(_0x3f4b7e.startColumn, _0x3f4b7e.endColumn),
          ),
        ),
        endColumn: Math.max(
          ..._0x32d4f4.map((_0x1cbc82) =>
            Math.max(_0x1cbc82.startColumn, _0x1cbc82.endColumn),
          ),
        ),
      }),
      _0x1c00e1 = Bn("range", _0x577c37, _0x462580),
      _0x4567fe = _0x32d4f4
        .map((_0x68efdb) => _0x68efdb.startOffset)
        .filter((_0x3071c3) => typeof _0x3071c3 == "number"),
      _0x4fd2ec = _0x32d4f4
        .map((_0x4fb7bd) => _0x4fb7bd.endOffset)
        .filter((_0x5be54) => typeof _0x5be54 == "number");
    return {
      kind: _0x1c00e1,
      unitId: _0x690554.getUnitId(),
      segmentId: _0x4aa983.segmentId ?? "",
      tableId: _0x122749,
      startRow: _0x577c37.startRow,
      endRow: _0x577c37.endRow,
      startColumn: _0x577c37.startColumn,
      endColumn: _0x577c37.endColumn,
      startOffset: _0x4567fe.length ? Math.min(..._0x4567fe) : 0,
      endOffset: _0x4fd2ec.length
        ? Math.max(..._0x4fd2ec)
        : (_0x4567fe[0] ?? 0),
      source: "rect",
    };
  }
  _canCombineRectRanges(_0x16bb96) {
    if (_0x16bb96.length <= 1) return true;
    let _0xc60fc4 = Math.min(
        ..._0x16bb96.map((_0x26cec7) =>
          Math.min(_0x26cec7.startRow, _0x26cec7.endRow),
        ),
      ),
      _0xd6d8b = Math.max(
        ..._0x16bb96.map((_0x4a1dec) =>
          Math.max(_0x4a1dec.startRow, _0x4a1dec.endRow),
        ),
      ),
      _0x52e046 = Math.min(
        ..._0x16bb96.map((_0x5776e0) =>
          Math.min(_0x5776e0.startColumn, _0x5776e0.endColumn),
        ),
      ),
      _0x2dd8be = Math.max(
        ..._0x16bb96.map((_0x224a1b) =>
          Math.max(_0x224a1b.startColumn, _0x224a1b.endColumn),
        ),
      ),
      _0x36071f = new Set();
    return (
      _0x16bb96.forEach((_0x26e85c) => {
        let _0x4d250e = Math.min(_0x26e85c.startRow, _0x26e85c.endRow),
          _0x49007f = Math.max(_0x26e85c.startRow, _0x26e85c.endRow),
          _0x3a2bda = Math.min(_0x26e85c.startColumn, _0x26e85c.endColumn),
          _0x5bdf4f = Math.max(_0x26e85c.startColumn, _0x26e85c.endColumn);
        for (let _0x356c56 = _0x4d250e; _0x356c56 <= _0x49007f; _0x356c56++)
          for (let _0x57f9be = _0x3a2bda; _0x57f9be <= _0x5bdf4f; _0x57f9be++)
            _0x36071f.add(_0x356c56 + ":" + _0x57f9be);
      }),
      _0x36071f.size ===
        (_0xd6d8b - _0xc60fc4 + 1) * (_0x2dd8be - _0x52e046 + 1)
    );
  }
  _getValidStructuralSelection(_0x54f454) {
    var _0x416578;
    let _0xda3d97 = this._structuralSelection;
    if (!_0xda3d97) return null;
    let _0x1cf44c =
        (_0x416578 = _0x54f454.getSnapshot().tableSource) == null
          ? undefined
          : _0x416578[_0xda3d97.tableId],
      _0x47832e = _0x1cf44c ? Ln(_0x1cf44c, _0xda3d97) : null;
    return !_0x1cf44c ||
      !_0x47832e ||
      this._structuralSelectionTableShape !== zn(_0x1cf44c)
      ? (this._clearStructuralSelectionState(true), null)
      : ((this._structuralSelection = {
          ..._0xda3d97,
          kind: Bn(_0xda3d97.kind, _0x47832e, _0x1cf44c),
          ..._0x47832e,
        }),
        this._structuralSelection);
  }
  _clearStructuralSelectionState(_0x3737a9 = false) {
    ((this._structuralSelection = null),
      (this._structuralSelectionTableShape = null),
      _0x3737a9 && (this._nativeSelectionSuppressed = false),
      (this._preserveStructuralSelectionOnNextTextSelection = false));
  }
};
K = Nn(
  [
    G(0, e.IUniverInstanceService),
    G(1, (0, e.Inject)(t.DocSelectionManagerService)),
  ],
  K,
);
function Pn(_0x41c3e7) {
  return (
    !!(_0x41c3e7 != null && _0x41c3e7.tableId) &&
    _0x41c3e7.startRow >= 0 &&
    _0x41c3e7.startColumn >= 0
  );
}
function Fn(_0x360e49) {
  return {
    startRow: Math.min(_0x360e49.startRow, _0x360e49.endRow),
    endRow: Math.max(_0x360e49.startRow, _0x360e49.endRow),
    startColumn: Math.min(_0x360e49.startColumn, _0x360e49.endColumn),
    endColumn: Math.max(_0x360e49.startColumn, _0x360e49.endColumn),
  };
}
function In(_0x48c59d, _0x21b539) {
  let _0x201aa7 = Rn(_0x48c59d, _0x21b539);
  return _0x201aa7 ? ae(_0x48c59d, _0x201aa7) : null;
}
function Ln(_0xb138a4, _0x4b976d) {
  let _0x14b0e0 = Rn(_0xb138a4, _0x4b976d);
  return _0x14b0e0
    ? _0x4b976d.kind === "row" || _0x4b976d.kind === "column"
      ? _0x14b0e0
      : ae(_0xb138a4, _0x14b0e0)
    : null;
}
function Rn(_0x2ef251, _0x4ab2d7) {
  var _0x2283df;
  let _0x28370d = Fn(_0x4ab2d7),
    _0xbbb78 = _0x2ef251.tableRows["length"],
    _0x1bf52b =
      ((_0x2283df = _0x2ef251.tableRows[0]) == null
        ? undefined
        : _0x2283df.tableCells["length"]) ?? 0;
  return _0xbbb78 === 0 ||
    _0x1bf52b === 0 ||
    _0x28370d.startRow < 0 ||
    _0x28370d.endRow >= _0xbbb78 ||
    _0x28370d.startColumn < 0 ||
    _0x28370d.endColumn >= _0x1bf52b
    ? null
    : _0x28370d;
}
function zn(_0x382771) {
  return (
    _0x382771.tableRows["length"] +
    ":" +
    _0x382771.tableRows["map"](
      (_0x48fb37) => _0x48fb37.tableCells["length"],
    ).join(",")
  );
}
function Bn(_0x20182f, _0x3990b0, _0x31cdbf) {
  let _0x5498d7 =
    _0x3990b0.startRow === _0x3990b0.endRow &&
    _0x3990b0.startColumn === _0x3990b0.endColumn;
  if (_0x20182f === "cell" && (_0x5498d7 || Hn(_0x31cdbf, _0x3990b0)))
    return "cell";
  let { spansEntireRow: _0x1db3a5, spansEntireColumn: _0x115ae2 } = Vn(
    _0x3990b0,
    _0x31cdbf,
  );
  return _0x20182f === "row" && _0x1db3a5
    ? "row"
    : _0x20182f === "column" && _0x115ae2
      ? "column"
      : _0x1db3a5 && _0x115ae2
        ? "table"
        : _0x5498d7
          ? "cell"
          : "range";
}
function Vn(_0x2d02ec, _0x34a7d4) {
  var _0x3d9aad;
  let _0x28b465 =
      (_0x34a7d4 == null ? undefined : _0x34a7d4.tableRows["length"]) ?? 0,
    _0x555ddf =
      (_0x34a7d4 == null || (_0x3d9aad = _0x34a7d4.tableRows[0]) == null
        ? undefined
        : _0x3d9aad.tableCells["length"]) ?? 0;
  return {
    spansEntireRow:
      _0x555ddf > 0 &&
      _0x2d02ec.startColumn === 0 &&
      _0x2d02ec.endColumn === _0x555ddf - 1,
    spansEntireColumn:
      _0x28b465 > 0 &&
      _0x2d02ec.startRow === 0 &&
      _0x2d02ec.endRow === _0x28b465 - 1,
  };
}
function Hn(_0x472789, _0x39568c) {
  return (
    (_0x472789 == null
      ? undefined
      : _0x472789.tableRows["some"]((_0xd4bb34, _0x1f829b) =>
          _0xd4bb34.tableCells["some"]((_0x29ce2d, _0x4296b4) => {
            let _0x4a31af = _0x29ce2d.rowSpan ?? 1,
              _0x483ed0 = _0x29ce2d.columnSpan ?? 1;
            return _0x4a31af <= 0 ||
              _0x483ed0 <= 0 ||
              (_0x4a31af === 1 && _0x483ed0 === 1)
              ? false
              : _0x39568c.startRow === _0x1f829b &&
                  _0x39568c.endRow === _0x1f829b + _0x4a31af - 1 &&
                  _0x39568c.startColumn === _0x4296b4 &&
                  _0x39568c.endColumn === _0x4296b4 + _0x483ed0 - 1;
          }),
        )) ?? false
  );
}
const Un = {
    id: "docs-table.command.delete-columns",
    type: e.CommandType["COMMAND"],
    handler: (_0x65bee2, _0x35190f) => {
      if (!_0x35190f) return false;
      let _0x484083 = _0x65bee2.get(e.IUniverInstanceService),
        _0x3c4432 = _0x65bee2.get(e.ICommandService),
        _0x22f479 = _0x65bee2.get(K),
        _0x515c3b = _0x484083.getUnit(
          _0x35190f.unitId,
          e.UniverInstanceType["UNIVER_DOC"],
        );
      if (!_0x515c3b) return false;
      let _0x1ad18f = _0x22f479.getCurrentSelection(),
        _0x955a7 =
          (_0x1ad18f == null ? undefined : _0x1ad18f.unitId) ===
          _0x515c3b.getUnitId()
            ? _0x1ad18f
            : null,
        {
          endColumn: _0x47acda,
          startColumn: _0x5e87c3,
          tableId: _0x5a41ce,
        } = _0x35190f,
        _0x3fc9af = _0x515c3b.getSnapshot(),
        _0x55c7eb = _0x35190f.segmentId ?? "",
        _0x4d42ad = I(_0x515c3b, _0x55c7eb);
      if (!_0x4d42ad) return false;
      let _0x5d085d = tn(
        _0x4d42ad,
        _0x5a41ce,
        _0x5e87c3,
        _0x47acda,
        H(_0x3fc9af, _0x55c7eb),
      );
      if (!_0x5d085d) return false;
      let _0x39bd0f = V(
        _0x3c4432,
        _0x515c3b.getUnitId(),
        _0x4d42ad,
        _0x5d085d.actions,
        undefined,
        undefined,
        Un.id,
      );
      if (_0x39bd0f && _0x955a7) {
        let _0x574a3a = c(
          _0x955a7,
          _0x4d42ad,
          _0x5d085d.deleteTable
            ? { kind: "delete-table", tableId: _0x5a41ce }
            : {
                kind: "delete-columns",
                tableId: _0x5a41ce,
                index: Math.min(_0x5e87c3, _0x47acda),
                count: Math.abs(_0x47acda - _0x5e87c3) + 1,
              },
        );
        _0x574a3a
          ? _0x22f479.setStructuralSelection(_0x574a3a)
          : _0x22f479.clearStructuralSelection();
      }
      return _0x39bd0f;
    },
  },
  Wn = {
    id: "docs-table.command.delete-rows",
    type: e.CommandType["COMMAND"],
    handler: (_0x30f877, _0x146faf) => {
      if (!_0x146faf) return false;
      let _0x508b3a = _0x30f877.get(e.IUniverInstanceService),
        _0x4f59d1 = _0x30f877.get(e.ICommandService),
        _0x5d0cbe = _0x30f877.get(K),
        _0x498be5 = _0x508b3a.getUnit(
          _0x146faf.unitId,
          e.UniverInstanceType["UNIVER_DOC"],
        );
      if (!_0x498be5) return false;
      let _0x3d144c = _0x5d0cbe.getCurrentSelection(),
        _0x3b20b5 =
          (_0x3d144c == null ? undefined : _0x3d144c.unitId) ===
          _0x498be5.getUnitId()
            ? _0x3d144c
            : null,
        {
          endRow: _0x826d21,
          startRow: _0x377069,
          tableId: _0x20154e,
        } = _0x146faf,
        _0x3a9b97 = _0x498be5.getSnapshot(),
        _0x3a9394 = _0x146faf.segmentId ?? "",
        _0x42b467 = I(_0x498be5, _0x3a9394);
      if (!_0x42b467) return false;
      let _0x42326b = hn(
        _0x42b467,
        _0x20154e,
        _0x377069,
        _0x826d21,
        H(_0x3a9b97, _0x3a9394),
      );
      if (!_0x42326b) return false;
      let _0x3cf043 = V(
        _0x4f59d1,
        _0x498be5.getUnitId(),
        _0x42b467,
        _0x42326b.actions,
        undefined,
        undefined,
        Wn.id,
      );
      if (_0x3cf043 && _0x3b20b5) {
        let _0x2f010e = c(
          _0x3b20b5,
          _0x42b467,
          _0x42326b.deleteTable
            ? { kind: "delete-table", tableId: _0x20154e }
            : {
                kind: "delete-rows",
                tableId: _0x20154e,
                index: Math.min(_0x377069, _0x826d21),
                count: Math.abs(_0x826d21 - _0x377069) + 1,
              },
        );
        _0x2f010e
          ? _0x5d0cbe.setStructuralSelection(_0x2f010e)
          : _0x5d0cbe.clearStructuralSelection();
      }
      return _0x3cf043;
    },
  },
  Gn = {
    id: "docs-table.command.delete-table",
    type: e.CommandType["COMMAND"],
    handler: (_0x35a8a1, _0x50b3dd) => {
      if (!_0x50b3dd) return false;
      let _0x2de192 = _0x35a8a1.get(e.IUniverInstanceService),
        _0x20f765 = _0x35a8a1.get(e.ICommandService),
        _0x2f595e = _0x35a8a1.get(K),
        _0x480907 = _0x2de192.getUnit(
          _0x50b3dd.unitId,
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x353da0 = _0x2f595e.getCurrentSelection(),
        _0x35760d =
          (_0x353da0 == null ? undefined : _0x353da0.unitId) ===
          (_0x480907 == null ? undefined : _0x480907.getUnitId())
            ? _0x353da0
            : null;
      if (!_0x480907) return false;
      let { tableId: _0x4510bf } = _0x50b3dd,
        _0x49556b = _0x480907.getSnapshot(),
        _0x421436 = _0x50b3dd.segmentId ?? "",
        _0x4d1db8 = I(_0x480907, _0x421436);
      if (!_0x4d1db8) return false;
      let _0x699714 = gn(_0x4d1db8, _0x4510bf, H(_0x49556b, _0x421436));
      if (!_0x699714) return false;
      let _0xd17a0 = V(
        _0x20f765,
        _0x480907.getUnitId(),
        _0x4d1db8,
        _0x699714.actions,
        undefined,
        undefined,
        Gn.id,
      );
      if (_0xd17a0 && _0x35760d) {
        let _0x1e0e17 = c(_0x35760d, _0x4d1db8, {
          kind: "delete-table",
          tableId: _0x4510bf,
        });
        _0x1e0e17
          ? _0x2f595e.setStructuralSelection(_0x1e0e17)
          : _0x2f595e.clearStructuralSelection();
      }
      return _0xd17a0;
    },
  },
  Kn = {
    id: "docs-table.command.distribute-columns",
    type: e.CommandType["COMMAND"],
    handler: async (_0x1568b3, _0x5cc770) => {
      let _0x1bfd74 = _0x1568b3.get(e.IUniverInstanceService),
        _0x31e961 = _0x1568b3.get(e.ICommandService),
        _0x227428 = _0x1568b3.get(K),
        _0x1dfe6f = _0x1bfd74.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x260eeb = _0x227428.getCurrentSelection(),
        _0x5977ee =
          (_0x5cc770 == null ? undefined : _0x5cc770.tableId) ??
          (_0x260eeb == null ? undefined : _0x260eeb.tableId),
        _0x2ea007 =
          (_0x5cc770 == null ? undefined : _0x5cc770.startColumn) ??
          (_0x260eeb == null ? undefined : _0x260eeb.startColumn),
        _0x18356b =
          (_0x5cc770 == null ? undefined : _0x5cc770.endColumn) ??
          (_0x260eeb == null ? undefined : _0x260eeb.endColumn);
      if (!_0x1dfe6f || !_0x5977ee || _0x2ea007 == null || _0x18356b == null)
        return false;
      let _0x28c957 = I(_0x1dfe6f, P(_0x5cc770, _0x260eeb));
      if (!_0x28c957) return false;
      let _0x53ab2a = Jt(_0x28c957, _0x5977ee, _0x2ea007, _0x18356b);
      return V(_0x31e961, _0x1dfe6f.getUnitId(), _0x28c957, _0x53ab2a);
    },
  },
  qn = {
    id: "docs-table.command.distribute-rows",
    type: e.CommandType["COMMAND"],
    handler: async (_0x562051, _0x32c5ef) => {
      let _0x38632b = _0x562051.get(e.IUniverInstanceService),
        _0x47c87b = _0x562051.get(e.ICommandService),
        _0x2f41bf = _0x562051.get(K),
        _0x25688e = _0x38632b.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x281a77 = _0x2f41bf.getCurrentSelection(),
        _0x9c4199 =
          (_0x32c5ef == null ? undefined : _0x32c5ef.tableId) ??
          (_0x281a77 == null ? undefined : _0x281a77.tableId),
        _0x1b5d25 =
          (_0x32c5ef == null ? undefined : _0x32c5ef.startRow) ??
          (_0x281a77 == null ? undefined : _0x281a77.startRow),
        _0x25cc92 =
          (_0x32c5ef == null ? undefined : _0x32c5ef.endRow) ??
          (_0x281a77 == null ? undefined : _0x281a77.endRow);
      if (!_0x25688e || !_0x9c4199 || _0x1b5d25 == null || _0x25cc92 == null)
        return false;
      let _0x59c26f = I(_0x25688e, P(_0x32c5ef, _0x281a77));
      if (!_0x59c26f) return false;
      let _0x1c76f5 = qt(_0x59c26f, _0x9c4199, _0x1b5d25, _0x25cc92);
      return V(_0x47c87b, _0x25688e.getUnitId(), _0x59c26f, _0x1c76f5);
    },
  },
  Jn = {
    id: "docs-table.command.insert-columns",
    type: e.CommandType["COMMAND"],
    handler: async (_0x23817a, _0x52319e) => {
      var _0x35720f;
      if (!_0x52319e) return false;
      let _0x498c7d = _0x23817a.get(e.IUniverInstanceService),
        _0x1b7fb2 = _0x23817a.get(e.ICommandService),
        _0x2fa850 = _0x23817a.get(K),
        _0x136eb0 = _0x498c7d.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0xcce5c2 = _0x2fa850.getCurrentSelection(),
        _0x221985 =
          _0x52319e.tableId ??
          (_0xcce5c2 == null ? undefined : _0xcce5c2.tableId),
        _0x36e06b =
          _0x52319e.column ??
          (_0x52319e.position === "left"
            ? _0xcce5c2 == null
              ? undefined
              : _0xcce5c2.startColumn
            : _0xcce5c2 == null
              ? undefined
              : _0xcce5c2.endColumn);
      if (!_0x136eb0 || _0x221985 == null || _0x36e06b == null) return false;
      let _0x2fbab5 = _0x136eb0.getSnapshot(),
        _0x118454 = P(_0x52319e, _0xcce5c2),
        _0x40d3e9 = I(_0x136eb0, _0x118454);
      if (!_0x40d3e9) return false;
      let _0x35ca18 =
          _0x52319e.count ??
          (_0xcce5c2
            ? Math.max(1, _0xcce5c2.endColumn - _0xcce5c2.startColumn + 1)
            : 1),
        _0x18442e =
          ((_0x35720f = _0x2fbab5.documentStyle) == null
            ? undefined
            : _0x35720f.documentFlavor) === e.DocumentFlavor["MODERN"],
        _0x192767 = Xt(
          _0x40d3e9,
          _0x221985,
          _0x36e06b,
          _0x35ca18,
          _0x52319e.position,
          {
            bodyPath: H(_0x2fbab5, _0x118454),
            insertedColumnWidth: _0x18442e
              ? Yn(_0x2fbab5, _0x221985, _0x36e06b, _0x52319e.position)
              : undefined,
            preserveTotalWidth: !_0x18442e,
          },
        );
      if (!_0x192767) return false;
      let _0x370d46 = V(
        _0x1b7fb2,
        _0x136eb0.getUnitId(),
        _0x40d3e9,
        _0x192767.actions,
      );
      if (_0x370d46 && _0xcce5c2) {
        let _0x340420 = c(_0xcce5c2, _0x40d3e9, {
          kind: "insert-columns",
          tableId: _0x221985,
          index: _0x192767.cursorColumn,
          count: _0x35ca18,
        });
        _0x340420 && _0x2fa850.setStructuralSelection(_0x340420);
      }
      return _0x370d46;
    },
  };
function Yn(_0x45f2e9, _0x3fc12e, _0x5d70fd, _0x246423) {
  var _0xeb5258, _0x4c08d5;
  let _0xe44039 =
    (_0x4c08d5 = (((_0xeb5258 = _0x45f2e9.tableSource) == null ||
    (_0xeb5258 = _0xeb5258[_0x3fc12e]) == null
      ? undefined
      : _0xeb5258.tableColumns) ?? [])[
      (_0x246423 === "left" ? _0x5d70fd : _0x5d70fd + 1) - 1
    ]) == null ||
    (_0x4c08d5 = _0x4c08d5.size) == null ||
    (_0x4c08d5 = _0x4c08d5.width) == null
      ? undefined
      : _0x4c08d5.v;
  return _0xe44039 && _0xe44039 > 0 ? _0xe44039 : 100;
}
const Xn = {
    id: "docs-table.command.insert-rows",
    type: e.CommandType["COMMAND"],
    handler: async (_0x4beba4, _0x3bc427) => {
      if (!_0x3bc427) return false;
      let _0x43168e = _0x4beba4.get(e.IUniverInstanceService),
        _0x4b23ba = _0x4beba4.get(e.ICommandService),
        _0xeee7 = _0x4beba4.get(K),
        _0x54f91e = _0x43168e.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x2192c0 = _0xeee7.getCurrentSelection(),
        _0x52d3f2 =
          _0x3bc427.tableId ??
          (_0x2192c0 == null ? undefined : _0x2192c0.tableId),
        _0x43de84 =
          _0x3bc427.row ??
          (_0x3bc427.position === "above"
            ? _0x2192c0 == null
              ? undefined
              : _0x2192c0.startRow
            : _0x2192c0 == null
              ? undefined
              : _0x2192c0.endRow);
      if (!_0x54f91e || _0x52d3f2 == null || _0x43de84 == null) return false;
      let _0x2bf5cb = _0x54f91e.getSnapshot(),
        _0x30f218 = P(_0x3bc427, _0x2192c0),
        _0x44baa6 = I(_0x54f91e, _0x30f218);
      if (!_0x44baa6) return false;
      let _0x420f4f =
          _0x3bc427.count ??
          (_0x2192c0
            ? Math.max(1, _0x2192c0.endRow - _0x2192c0.startRow + 1)
            : 1),
        _0x2f2fbb = pn(
          _0x44baa6,
          _0x52d3f2,
          _0x43de84,
          _0x420f4f,
          _0x3bc427.position,
          H(_0x2bf5cb, _0x30f218),
        );
      if (!_0x2f2fbb) return false;
      let _0x4e20b7 = V(
        _0x4b23ba,
        _0x54f91e.getUnitId(),
        _0x44baa6,
        _0x2f2fbb.actions,
      );
      if (_0x4e20b7 && _0x2192c0) {
        let _0x5853ce = c(_0x2192c0, _0x44baa6, {
          kind: "insert-rows",
          tableId: _0x52d3f2,
          index: _0x2f2fbb.cursorRow,
          count: _0x420f4f,
        });
        _0x5853ce && _0xeee7.setStructuralSelection(_0x5853ce);
      }
      return _0x4e20b7;
    },
  },
  Zn = { start: { v: 10 }, end: { v: 10 }, top: { v: 5 }, bottom: { v: 5 } };
function Qn(_0x418f08) {
  var _0x50e8e6;
  let _0x593a70 =
    (_0x50e8e6 = _0x418f08.documentData["tableSource"]) == null
      ? undefined
      : _0x50e8e6[_0x418f08.tableId];
  if (!_0x593a70) return null;
  let _0x581a7d = nr(_0x418f08),
    _0x28693 = [],
    _0x1b97a7 = e.JSONX["getInstance"]();
  for (
    let _0x593542 = _0x581a7d.startRow;
    _0x593542 <= _0x581a7d.endRow;
    _0x593542++
  )
    for (
      let _0x2c311c = _0x581a7d.startColumn;
      _0x2c311c <= _0x581a7d.endColumn;
      _0x2c311c++
    ) {
      var _0x22a7fc;
      let _0x2bb72f =
        (_0x22a7fc = _0x593a70.tableRows[_0x593542]) == null
          ? undefined
          : _0x22a7fc.tableCells[_0x2c311c];
      if (!_0x2bb72f) return null;
      er(
        _0x28693,
        [
          "tableSource",
          _0x418f08.tableId,
          "tableRows",
          _0x593542,
          "tableCells",
          _0x2c311c,
          "margin",
        ],
        _0x2bb72f.margin,
        _0x418f08.margin ?? undefined,
        _0x1b97a7,
      );
    }
  return tr(_0x28693);
}
function $n(_0x53ba7b, _0x536484, _0x145f0b) {
  var _0x32fbe2;
  let _0x1b318 =
    (_0x32fbe2 = _0x53ba7b.tableSource) == null
      ? undefined
      : _0x32fbe2[_0x536484];
  if (!_0x1b318) return null;
  let _0x309305 = [];
  return (
    er(
      _0x309305,
      ["tableSource", _0x536484, "cellMargin"],
      _0x1b318.cellMargin,
      _0x145f0b ?? undefined,
      e.JSONX["getInstance"](),
    ),
    tr(_0x309305)
  );
}
function er(_0x3a91a4, _0x4410af, _0x5bbaf5, _0x8752e4, _0x5d4577) {
  JSON.stringify(_0x5bbaf5) !== JSON.stringify(_0x8752e4) &&
    (_0x5bbaf5 === undefined
      ? _0x3a91a4.push(
          _0x5d4577.insertOp(_0x4410af, e.Tools["deepClone"](_0x8752e4)),
        )
      : _0x8752e4 === undefined
        ? _0x3a91a4.push(_0x5d4577.removeOp(_0x4410af, _0x5bbaf5))
        : _0x3a91a4.push(
            _0x5d4577.replaceOp(
              _0x4410af,
              _0x5bbaf5,
              e.Tools["deepClone"](_0x8752e4),
            ),
          ));
}
function tr(_0x1f76d1) {
  return _0x1f76d1.reduce(
    (_0x4e9929, _0x58003b) => e.JSONX["compose"](_0x4e9929, _0x58003b),
    null,
  );
}
function nr(_0x20b2e0) {
  return {
    startRow: Math.min(_0x20b2e0.startRow, _0x20b2e0.endRow),
    endRow: Math.max(_0x20b2e0.startRow, _0x20b2e0.endRow),
    startColumn: Math.min(_0x20b2e0.startColumn, _0x20b2e0.endColumn),
    endColumn: Math.max(_0x20b2e0.startColumn, _0x20b2e0.endColumn),
  };
}
let rr = (function (_0x5aa916) {
  return (
    (_0x5aa916.Selection = "selection"),
    (_0x5aa916.DocumentEnd = "documentEnd"),
    (_0x5aa916.Offset = "offset"),
    _0x5aa916
  );
})({});
var ir = class extends Error {
  constructor() {
    super("Table can only be inserted in a normal paragraph area");
  }
};
function ar(_0x3c7b5b, _0x33830d = ["body"]) {
  var _0xf30ecd, _0x5920bd;
  let _0x2d4de2 = _0x3c7b5b.documentData["body"] ?? cr(),
    _0x39475c = ur(_0x3c7b5b),
    _0x8e31c0 = _0x39475c.length,
    _0x432f88 =
      ((_0xf30ecd = _0x39475c[0]) == null ? undefined : _0xf30ecd.length) ?? 1,
    _0x1fc7f4 = dr(_0x2d4de2, _0x3c7b5b);
  fr(_0x2d4de2, _0x1fc7f4);
  let _0x254d64 = or(_0x2d4de2, _0x3c7b5b, _0x39475c, _0x1fc7f4),
    _0x4aed0c = _0x3c7b5b.documentData["body"]
      ? sr(_0x254d64, _0x1fc7f4, _0x33830d)
      : e.JSONX["getInstance"]().insertOp(_0x33830d, lr(_0x254d64)),
    _0x48e693 = wr(_0x3c7b5b, _0x8e31c0, _0x432f88),
    _0x5bc9a8 = e.JSONX["getInstance"]().insertOp(
      ["tableSource", _0x3c7b5b.tableId],
      _0x48e693,
    ),
    _0x48ec95 = O(_0x3c7b5b.metadata),
    _0x3a8051 = kr(_0x3c7b5b);
  return (
    _0x3a8051 && (_0x48ec95.tables[_0x3c7b5b.tableId] = _0x3a8051),
    {
      actions: e.JSONX["compose"](_0x4aed0c, _0x5bc9a8),
      cursorOffset:
        _0x1fc7f4 +
        (((_0x5920bd = _0x254d64.tables) == null ||
        (_0x5920bd = _0x5920bd.find(
          (_0xfc9527) => _0xfc9527.tableId === _0x3c7b5b.tableId,
        )) == null
          ? undefined
          : _0x5920bd.startIndex) ?? 0) +
        3,
      nextMetadata: _0x48ec95,
      tableId: _0x3c7b5b.tableId,
    }
  );
}
function or(_0x2263c0, _0x15ec3c, _0x2dfcab, _0x39c882) {
  let _0x5ec01c = Sr(_0x2263c0),
    _0x470c12 = xr(_0x2dfcab, _0x5ec01c, Cr(_0x2263c0)),
    _0x15c4f5 = gr(_0x2263c0, _0x39c882)
      ? e.DataStreamTreeTokenType["PARAGRAPH"]
      : "",
    _0x4aceb3 = _0x15c4f5 ? vr(_0x2263c0, _0x39c882) : undefined,
    _0x4fed26 = _r(_0x2263c0, _0x39c882)
      ? e.DataStreamTreeTokenType["PARAGRAPH"]
      : "",
    _0x15c287 = _0x15c4f5.length,
    _0x34ba78 = _0x15c287 + _0x470c12.dataStream["length"];
  return {
    dataStream: [_0x15c4f5, _0x470c12.dataStream, _0x4fed26].join(""),
    paragraphs: [
      ...yr(0, _0x15c4f5, _0x5ec01c, _0x4aceb3),
      ..._0x470c12.paragraphs["map"]((_0x1b43e0) => ({
        ..._0x1b43e0,
        startIndex: _0x1b43e0.startIndex + _0x15c287,
      })),
      ...br(_0x34ba78, _0x4fed26, _0x5ec01c),
    ],
    sectionBreaks: _0x470c12.sectionBreaks["map"]((_0xb0c4cb) => ({
      ..._0xb0c4cb,
      startIndex: _0xb0c4cb.startIndex + _0x15c287,
    })),
    tables: [
      {
        startIndex: _0x15c287,
        endIndex: _0x34ba78,
        tableId: _0x15ec3c.tableId,
      },
    ],
  };
}
function sr(_0x17d2e2, _0x321b64, _0x5ce5d5) {
  let _0xb1fa43 = new e.TextX();
  return (
    _0x321b64 > 0 && _0xb1fa43.retain(_0x321b64),
    _0xb1fa43.insert(_0x17d2e2.dataStream["length"], _0x17d2e2),
    e.JSONX["getInstance"]().editOp(_0xb1fa43.serialize(), _0x5ce5d5)
  );
}
function cr() {
  return {
    dataStream: e.DataStreamTreeTokenType["SECTION_BREAK"],
    paragraphs: [],
    sectionBreaks: [
      { sectionId: (0, e.createSectionId)(new Set()), startIndex: 0 },
    ],
    tables: [],
  };
}
function lr(_0x2ba352) {
  var _0x5c4028;
  let _0x4f1f20 = _0x2ba352.dataStream["length"];
  return {
    ..._0x2ba352,
    dataStream:
      _0x2ba352.dataStream + e.DataStreamTreeTokenType["SECTION_BREAK"],
    sectionBreaks: [
      ...(_0x2ba352.sectionBreaks ?? []),
      {
        sectionId: (0, e.createSectionId)(
          new Set(
            (_0x5c4028 = _0x2ba352.sectionBreaks) == null
              ? undefined
              : _0x5c4028.map((_0xa1a28f) => _0xa1a28f.sectionId),
          ),
        ),
        startIndex: _0x4f1f20,
      },
    ],
  };
}
function ur(_0x4b2f3e) {
  var _0x2e5fd4;
  let _0x39bac5 = Math.max(
      1,
      _0x4b2f3e.rows ??
        ((_0x2e5fd4 = _0x4b2f3e.values) == null
          ? undefined
          : _0x2e5fd4.length) ??
        1,
    ),
    _0xa707f6 = 0;
  for (let _0x146a87 of _0x4b2f3e.values ?? [])
    _0xa707f6 = Math.max(_0xa707f6, _0x146a87.length);
  let _0x1ebd7d = Math.max(1, _0x4b2f3e.columns ?? (_0xa707f6 || 1));
  return Array.from({ length: _0x39bac5 }, (_0x21e879, _0x3302b0) =>
    Array.from({ length: _0x1ebd7d }, (_0xbbb690, _0x30fbe0) => {
      var _0xf0c2be;
      return (
        ((_0xf0c2be = _0x4b2f3e.values) == null ||
        (_0xf0c2be = _0xf0c2be[_0x3302b0]) == null
          ? undefined
          : _0xf0c2be[_0x30fbe0]) ?? ""
      );
    }),
  );
}
function dr(_0x54f0a5, _0x306372) {
  return typeof _0x306372.offset == "number"
    ? Math.max(0, Math.min(_0x306372.offset, _0x54f0a5.dataStream["length"]))
    : _0x54f0a5.dataStream["endsWith"](
          e.DataStreamTreeTokenType["SECTION_BREAK"],
        )
      ? _0x54f0a5.dataStream["length"] - 1
      : _0x54f0a5.dataStream["length"];
}
function fr(_0x76d28, _0x425e90) {
  if (
    pr(_0x76d28.tables, _0x425e90) ||
    mr(_0x76d28.blockRanges, _0x425e90) ||
    hr(_0x76d28.customBlocks, _0x425e90)
  )
    throw new ir();
}
function pr(_0x2af071, _0x3dbd45) {
  return !!(
    _0x2af071 != null &&
    _0x2af071.some((_0x202f14) =>
      (0, e.containsInteriorInsertionOffset)(
        (0, e.getTableRangeInterval)(_0x202f14),
        _0x3dbd45,
      ),
    )
  );
}
function mr(_0x2b8b37, _0x392dd9) {
  return !!(
    _0x2b8b37 != null &&
    _0x2b8b37.some((_0xfcc92f) =>
      (0, e.containsInteriorInsertionOffset)(
        (0, e.getBlockRangeInterval)(_0xfcc92f),
        _0x392dd9,
      ),
    )
  );
}
function hr(_0x5f2f30, _0x1063d9) {
  return !!(
    _0x5f2f30 != null &&
    _0x5f2f30.some((_0xc01217) => _0xc01217.startIndex === _0x1063d9)
  );
}
function gr(_0x39c0eb, _0x5374d5) {
  return (
    _0x5374d5 <= 0 ||
    _0x39c0eb.dataStream[_0x5374d5 - 1] !==
      e.DataStreamTreeTokenType["PARAGRAPH"]
  );
}
function _r(_0x4a4220, _0x2f409c) {
  return (
    _0x4a4220.dataStream[_0x2f409c] !== e.DataStreamTreeTokenType["PARAGRAPH"]
  );
}
function vr(_0x3bfde7, _0x1b15cf) {
  var _0x3fd097;
  return (_0x3fd097 = _0x3bfde7.paragraphs) == null
    ? undefined
    : _0x3fd097.find(
        (_0x59faea) =>
          (0, e.getParagraphContentStartOffset)(_0x3bfde7, _0x59faea) <
            _0x1b15cf && _0x1b15cf <= _0x59faea.startIndex,
      );
}
function yr(_0x1648d4, _0x142b14, _0x53af52, _0x46869c) {
  if (!_0x142b14) return [];
  let _0xb92e60 = {
    startIndex: _0x1648d4,
    paragraphId: (0, e.createParagraphId)(_0x53af52),
  };
  return (
    _0x46869c != null &&
      _0x46869c.bullet &&
      (_0xb92e60.bullet = e.Tools["deepClone"](_0x46869c.bullet)),
    _0x46869c != null &&
      _0x46869c.paragraphStyle &&
      ((_0xb92e60.paragraphStyle = e.Tools["deepClone"](
        _0x46869c.paragraphStyle,
      )),
      delete _0xb92e60.paragraphStyle["borderBottom"],
      _0x46869c.paragraphStyle["headingId"] &&
        (_0xb92e60.paragraphStyle["headingId"] = (0, e.generateRandomId)(6))),
    [_0xb92e60]
  );
}
function br(_0x3064be, _0x10d28a, _0x406592) {
  return _0x10d28a
    ? [
        {
          startIndex: _0x3064be,
          paragraphId: (0, e.createParagraphId)(_0x406592),
        },
      ]
    : [];
}
function xr(_0x36feae, _0x494557, _0xf733f7) {
  let _0x115fcd = e.DataStreamTreeTokenType["TABLE_START"],
    _0x52d311 = [],
    _0x172e5d = [];
  return (
    _0x36feae.forEach((_0x329bc6) => {
      ((_0x115fcd += e.DataStreamTreeTokenType["TABLE_ROW_START"]),
        _0x329bc6.forEach((_0x1de690) => {
          ((_0x115fcd +=
            "" +
            e.DataStreamTreeTokenType["TABLE_CELL_START"] +
            _0x1de690 +
            e.DataStreamTreeTokenType["PARAGRAPH"] +
            e.DataStreamTreeTokenType["SECTION_BREAK"] +
            e.DataStreamTreeTokenType["TABLE_CELL_END"]),
            _0x52d311.push({
              startIndex: _0x115fcd.length - 3,
              paragraphId: (0, e.createParagraphId)(_0x494557),
            }),
            _0x172e5d.push({
              sectionId: (0, e.createSectionId)(_0xf733f7),
              startIndex: _0x115fcd.length - 2,
            }));
        }),
        (_0x115fcd += e.DataStreamTreeTokenType["TABLE_ROW_END"]));
    }),
    (_0x115fcd += e.DataStreamTreeTokenType["TABLE_END"]),
    { dataStream: _0x115fcd, paragraphs: _0x52d311, sectionBreaks: _0x172e5d }
  );
}
function Sr(_0x11e049) {
  return new Set(
    (_0x11e049.paragraphs ?? []).map((_0x1f3204) => _0x1f3204.paragraphId),
  );
}
function Cr(_0x1d5b90) {
  return new Set(
    (_0x1d5b90.sectionBreaks ?? []).map((_0x19cedb) => _0x19cedb.sectionId),
  );
}
function wr(_0x495174, _0x55c6ed, _0x279bf3) {
  let _0xfeafe5 = Or(_0x495174, _0x279bf3);
  return {
    tableRows: Array.from({ length: _0x55c6ed }, (_0x19fc0f, _0x3b242d) =>
      Tr(_0x495174, _0x3b242d, _0x279bf3),
    ),
    tableColumns: _0xfeafe5.map((_0x4265cd) => Dr(_0x4265cd)),
    tableId: _0x495174.tableId,
    align: e.TableAlignmentType["START"],
    indent: { v: 0 },
    textWrap: e.TableTextWrapType["NONE"],
    position: {
      positionH: { relativeFrom: e.ObjectRelativeFromH["PAGE"], posOffset: 0 },
      positionV: { relativeFrom: e.ObjectRelativeFromV["PAGE"], posOffset: 0 },
    },
    dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
    size: {
      type: e.TableSizeType["SPECIFIED"],
      width: {
        v:
          _0x495174.width ??
          _0xfeafe5.reduce((_0x4bfc11, _0x1c5c54) => _0x4bfc11 + _0x1c5c54, 0),
      },
    },
    ...(_0x495174.cellMargin == null
      ? {}
      : { cellMargin: e.Tools["deepClone"](_0x495174.cellMargin) }),
  };
}
function Tr(_0x21351d, _0x4b7c35, _0x4b6675) {
  var _0x516a10;
  return {
    tableCells: Array.from({ length: _0x4b6675 }, (_0x425409, _0x31911f) =>
      Er(_0x21351d, _0x4b7c35, _0x31911f, _0x4b6675),
    ),
    trHeight: {
      val: {
        v:
          ((_0x516a10 = _0x21351d.rowHeights) == null
            ? undefined
            : _0x516a10[_0x4b7c35]) ?? 30,
      },
      hRule: e.TableRowHeightRule["AT_LEAST"],
    },
    repeatHeaderRow:
      _0x4b7c35 < (_0x21351d.headerRowCount ?? 0)
        ? e.BooleanNumber["TRUE"]
        : e.BooleanNumber["FALSE"],
  };
}
function Er(_0x5c1c9f, _0x5576de, _0x50ea2c, _0x50bc66) {
  let _0x251f7c = _0x5c1c9f.titleRow && _0x5576de === 0;
  return {
    ...(_0x5c1c9f.cellMargin == null
      ? { margin: e.Tools["deepClone"](Zn) }
      : {}),
    ...(_0x251f7c && _0x50ea2c === 0 ? { columnSpan: _0x50bc66 } : {}),
    ...(_0x251f7c && _0x50ea2c > 0 ? { rowSpan: 0, columnSpan: 0 } : {}),
  };
}
function Dr(_0x598f36) {
  return {
    size: { type: e.TableSizeType["SPECIFIED"], width: { v: _0x598f36 } },
  };
}
function Or(_0x2d9159, _0x444b62) {
  let _0x503425 = _0x2d9159.width ? _0x2d9159.width / _0x444b62 : 100;
  return Array.from({ length: _0x444b62 }, (_0x3eb5d9, _0x105adf) => {
    var _0xe02620;
    return (
      ((_0xe02620 = _0x2d9159.columnWidths) == null
        ? undefined
        : _0xe02620[_0x105adf]) ?? _0x503425
    );
  });
}
function kr(_0x368b31) {
  if (
    _0x368b31.titleRow != null ||
    _0x368b31.headerRowCount != null ||
    _0x368b31.columnTypes != null
  )
    return {
      ...(_0x368b31.titleRow == null ? {} : { titleRow: _0x368b31.titleRow }),
      ...(_0x368b31.headerRowCount == null
        ? {}
        : { headerRowCount: _0x368b31.headerRowCount }),
      ...(_0x368b31.columnTypes == null
        ? {}
        : { columnTypes: _0x368b31.columnTypes }),
    };
}
var q = class extends e.Disposable {
  constructor(..._0x5639bb) {
    (super(..._0x5639bb),
      W(this, "_resources", new Map()),
      W(this, "_change$", new n["Subject"]()),
      W(this, "change$", this._change$["asObservable"]()));
  }
  getTableMetadata(_0x430404, _0x4e14d9) {
    var _0x2b6bf4;
    let _0xbfa0a2 =
      (_0x2b6bf4 = this._resources["get"](_0x430404)) == null
        ? undefined
        : _0x2b6bf4.tables[_0x4e14d9];
    if (_0xbfa0a2)
      return O({ tables: { [_0x4e14d9]: _0xbfa0a2 } }).tables[_0x4e14d9];
  }
  setHeaderRowCount(_0x19398e, _0x24d0fe, _0x31a64e) {
    this._setResource(
      _0x19398e,
      _0x24d0fe,
      be(this._resources["get"](_0x19398e), _0x24d0fe, _0x31a64e),
    );
  }
  setTitleRow(_0x2f2051, _0x3c48b2, _0x260560) {
    this._setResource(
      _0x2f2051,
      _0x3c48b2,
      xe(this._resources["get"](_0x2f2051), _0x3c48b2, _0x260560),
    );
  }
  setColumnType(_0x46adbd, _0x5f0740, _0x538a95, _0x1ab67c) {
    this._setResource(
      _0x46adbd,
      _0x5f0740,
      Se(this._resources["get"](_0x46adbd), _0x5f0740, _0x538a95, _0x1ab67c),
    );
  }
  serialize(_0x47e5fe) {
    return O(this._resources["get"](_0x47e5fe));
  }
  deserialize(_0x29fd65, _0x57cdb5) {
    (this._resources["set"](_0x29fd65, O(_0x57cdb5)),
      this._change$["next"]({ unitId: _0x29fd65 }));
  }
  removeUnit(_0x21d22a) {
    (this._resources["delete"](_0x21d22a),
      this._change$["next"]({ unitId: _0x21d22a }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x39748e, _0x599e51, _0x3c3cfe) {
    (this._resources["set"](_0x39748e, _0x3c3cfe),
      this._change$["next"]({ unitId: _0x39748e, tableId: _0x599e51 }));
  }
};
const Ar = {
  id: "docs-table.command.insert-table",
  type: e.CommandType["COMMAND"],
  handler: (_0x27de73, _0x1f0029) => {
    let _0x44ed38 = _0x27de73.get(e.IUniverInstanceService),
      _0x3e0003 = _0x27de73.get(e.ICommandService),
      _0x25f363 = _0x27de73.get(q),
      _0x1b9150 =
        _0x1f0029 != null && _0x1f0029.unitId
          ? _0x44ed38.getUnit(
              _0x1f0029.unitId,
              e.UniverInstanceType["UNIVER_DOC"],
            )
          : _0x44ed38.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
    if (!_0x1b9150) return false;
    let _0x545e56 = _0x1b9150.getSnapshot(),
      _0x42749c =
        (_0x1f0029 == null ? undefined : _0x1f0029.tableId) ??
        (0, e.generateRandomId)(6),
      _0x35c2ec = jr(_0x27de73, _0x1b9150.getUnitId(), _0x1f0029);
    if (!_0x35c2ec) return false;
    let _0x91fb1e;
    try {
      let _0x5beb96 = I(_0x1b9150, _0x35c2ec.segmentId);
      if (!_0x5beb96) return false;
      _0x91fb1e = ar(
        {
          ..._0x1f0029,
          ..._0x35c2ec,
          documentData: _0x5beb96,
          metadata: _0x25f363.serialize(_0x1b9150.getUnitId()),
          tableId: _0x42749c,
        },
        H(_0x545e56, _0x35c2ec.segmentId),
      );
    } catch (_0x4ac253) {
      if (_0x4ac253 instanceof ir) return false;
      throw _0x4ac253;
    }
    let _0x58a6b9 = I(_0x1b9150, _0x35c2ec.segmentId);
    if (!_0x58a6b9) return false;
    let _0x4c375c = V(
      _0x3e0003,
      _0x1b9150.getUnitId(),
      _0x58a6b9,
      _0x91fb1e.actions,
      undefined,
      _0x91fb1e.cursorOffset,
      Ar.id,
    );
    return (
      _0x4c375c &&
        _0x25f363.deserialize(_0x1b9150.getUnitId(), _0x91fb1e.nextMetadata),
      _0x4c375c
    );
  },
};
function jr(_0xe2a390, _0x334737, _0xf52bd8) {
  let {
    offset: _0x331e97,
    position: _0x59152e,
    segmentId: _0x221447,
  } = _0xf52bd8 ?? {};
  if (typeof _0x331e97 == "number") {
    let _0x19d74d = Mr(_0xe2a390);
    return {
      offset: _0x331e97,
      position: "offset",
      segmentId:
        _0x221447 ?? (_0x19d74d == null ? undefined : _0x19d74d.segmentId),
    };
  }
  if (_0x59152e === "selection") {
    let _0x13acbf = (0, t.getContentInsertRange)(_0xe2a390, _0x334737),
      _0x4d4097 = Mr(_0xe2a390),
      _0x5d5eec =
        _0x4d4097 != null && _0x4d4097.segmentId
          ? _0x4d4097
          : (_0x13acbf ?? _0x4d4097);
    if ((_0x5d5eec == null ? undefined : _0x5d5eec.startOffset) != null)
      return {
        offset: _0x5d5eec.startOffset,
        position: "offset",
        segmentId: _0x221447 ?? _0x5d5eec.segmentId,
      };
  }
  if (_0x59152e === "offset") {
    let _0x2f8b6a = (0, t.getContentInsertRange)(_0xe2a390, _0x334737),
      _0x48461d = Mr(_0xe2a390),
      _0x12cf61 = _0x2f8b6a ?? _0x48461d;
    if ((_0x12cf61 == null ? undefined : _0x12cf61.startOffset) != null)
      return {
        offset: _0x12cf61.startOffset,
        position: "offset",
        segmentId: _0x221447 ?? _0x12cf61.segmentId,
      };
  }
  return { position: "documentEnd", segmentId: _0x221447 };
}
function Mr(_0x2c72ac) {
  try {
    var _0x2dbb80, _0x581b1e;
    let _0x37b76a =
      (_0x2dbb80 = (_0x581b1e = _0x2c72ac.get(t.DocSelectionManagerService))
        .getActiveTextRange) == null
        ? undefined
        : _0x2dbb80.call(_0x581b1e);
    return _0x37b76a
      ? { startOffset: _0x37b76a.startOffset, segmentId: _0x37b76a.segmentId }
      : null;
  } catch {
    return null;
  }
}
const Nr = {
    id: "docs-table.command.insert-title-row",
    type: e.CommandType["COMMAND"],
    handler: async (_0x1a4c70, _0x270246) => {
      let _0x3d32b8 = _0x1a4c70.get(e.IUniverInstanceService),
        _0x2e1a58 = _0x1a4c70.get(e.ICommandService),
        _0x4a1b88 = _0x1a4c70.get(K),
        _0x29a141 = _0x1a4c70.get(q),
        _0x35823a = _0x3d32b8.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x15d8d9 = _0x4a1b88.getCurrentSelection(),
        _0x5cda07 =
          (_0x270246 == null ? undefined : _0x270246.tableId) ??
          (_0x15d8d9 == null ? undefined : _0x15d8d9.tableId);
      if (!_0x35823a || !_0x5cda07) return false;
      let _0x4f7893 = _0x35823a.getSnapshot(),
        _0x43b3ea = P(_0x270246, _0x15d8d9),
        _0x3c673a = I(_0x35823a, _0x43b3ea);
      if (!_0x3c673a) return false;
      let _0x31ddc1 = mn(_0x3c673a, _0x5cda07, H(_0x4f7893, _0x43b3ea));
      if (!_0x31ddc1) return false;
      let _0x22e36c = V(
        _0x2e1a58,
        _0x35823a.getUnitId(),
        _0x3c673a,
        _0x31ddc1.actions,
      );
      return (
        _0x22e36c &&
          _0x29a141.setTitleRow(_0x35823a.getUnitId(), _0x5cda07, true),
        _0x22e36c
      );
    },
  },
  Pr = {
    id: "docs-table.command.merge-cells",
    type: e.CommandType["COMMAND"],
    handler: async (_0x2332a1, _0x530861) => {
      let _0x5f54f7 = _0x2332a1.get(e.IUniverInstanceService),
        _0x3be9e6 = _0x2332a1.get(e.ICommandService),
        _0x4f8fb1 = _0x2332a1.get(K),
        _0x36089b = _0x5f54f7.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x593e2c = _0x4f8fb1.getStableTableSelection(),
        _0xebbc44 =
          (_0x530861 == null ? undefined : _0x530861.tableId) ??
          (_0x593e2c == null ? undefined : _0x593e2c.tableId),
        _0x3b4ab3 = F(_0x530861, _0x593e2c);
      if (!_0x36089b || !_0xebbc44 || !_0x3b4ab3) return false;
      let _0x2f5b5b = P(_0x530861, _0x593e2c),
        _0xab0a4d = I(_0x36089b, _0x2f5b5b);
      if (!_0xab0a4d || !y(_0xab0a4d, _0xebbc44, _0x3b4ab3)) return false;
      let _0xd43f5b = x({
        documentData: _0xab0a4d,
        tableId: _0xebbc44,
        ..._0x3b4ab3,
      });
      if (!_0xd43f5b) return false;
      let _0x55ff7c = V(
        _0x3be9e6,
        _0x36089b.getUnitId(),
        _0xab0a4d,
        _0xd43f5b.actions,
        { tableId: _0xebbc44, segmentId: _0x2f5b5b, ..._0xd43f5b.range },
      );
      return (
        _0x55ff7c &&
          _0x4f8fb1.setStructuralSelection({
            kind: "cell",
            tableId: _0xebbc44,
            segmentId: _0x2f5b5b,
            ..._0xd43f5b.range,
          }),
        _0x55ff7c
      );
    },
  },
  Fr = {
    id: "docs-table.command.move-columns",
    type: e.CommandType["COMMAND"],
    handler: async (_0x45d625, _0x53dc38) => {
      if (!_0x53dc38) return false;
      let _0x5f0488 = _0x45d625.get(e.IUniverInstanceService),
        _0x5d450b = _0x45d625.get(e.ICommandService),
        _0x15634c = _0x45d625.get(K),
        _0x1e4060 = _0x5f0488.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x45fc = _0x15634c.getCurrentSelection(),
        _0x384238 =
          _0x53dc38.tableId ?? (_0x45fc == null ? undefined : _0x45fc.tableId),
        _0x300254 =
          _0x53dc38.fromColumn ??
          (_0x45fc == null ? undefined : _0x45fc.startColumn);
      if (!_0x1e4060 || _0x384238 == null || _0x300254 == null) return false;
      let _0x18aef2 = _0x1e4060.getSnapshot(),
        _0x201e02 = P(_0x53dc38, _0x45fc),
        _0x3414fd = I(_0x1e4060, _0x201e02);
      if (!_0x3414fd) return false;
      let _0x54feb0 =
          _0x53dc38.count ??
          (_0x45fc
            ? Math.max(1, _0x45fc.endColumn - _0x45fc.startColumn + 1)
            : 1),
        _0x653e58 = rn(
          _0x3414fd,
          _0x384238,
          _0x300254,
          _0x53dc38.toColumn,
          _0x54feb0,
          _0x53dc38.position,
          H(_0x18aef2, _0x201e02),
        );
      if (!_0x653e58) return false;
      let _0x381b1a = V(
        _0x5d450b,
        _0x1e4060.getUnitId(),
        _0x3414fd,
        _0x653e58.actions,
      );
      return (
        _0x381b1a &&
          _0x45fc &&
          _0x15634c.setStructuralSelection({
            ..._0x45fc,
            tableId: _0x384238,
            startColumn: _0x653e58.cursorColumn,
            endColumn: _0x653e58.cursorColumn + _0x54feb0 - 1,
          }),
        _0x381b1a
      );
    },
  },
  Ir = {
    id: "docs-table.command.move-rows",
    type: e.CommandType["COMMAND"],
    handler: async (_0x127237, _0x335e66) => {
      if (!_0x335e66) return false;
      let _0x2be2c2 = _0x127237.get(e.IUniverInstanceService),
        _0xfa4272 = _0x127237.get(e.ICommandService),
        _0x29fa43 = _0x127237.get(K),
        _0x99b243 = _0x2be2c2.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x1eb4b7 = _0x29fa43.getCurrentSelection(),
        _0x3915be =
          _0x335e66.tableId ??
          (_0x1eb4b7 == null ? undefined : _0x1eb4b7.tableId),
        _0x3a68be =
          _0x335e66.fromRow ??
          (_0x1eb4b7 == null ? undefined : _0x1eb4b7.startRow);
      if (!_0x99b243 || _0x3915be == null || _0x3a68be == null) return false;
      let _0x4f7cb2 = _0x99b243.getSnapshot(),
        _0x3a5dec = P(_0x335e66, _0x1eb4b7),
        _0x373926 = I(_0x99b243, _0x3a5dec);
      if (!_0x373926) return false;
      let _0x3f5ca6 =
          _0x335e66.count ??
          (_0x1eb4b7
            ? Math.max(1, _0x1eb4b7.endRow - _0x1eb4b7.startRow + 1)
            : 1),
        _0x2be58b = nn(
          _0x373926,
          _0x3915be,
          _0x3a68be,
          _0x335e66.toRow,
          _0x3f5ca6,
          _0x335e66.position,
          H(_0x4f7cb2, _0x3a5dec),
        );
      if (!_0x2be58b) return false;
      let _0x1e5394 = V(
        _0xfa4272,
        _0x99b243.getUnitId(),
        _0x373926,
        _0x2be58b.actions,
      );
      return (
        _0x1e5394 &&
          _0x1eb4b7 &&
          _0x29fa43.setStructuralSelection({
            ..._0x1eb4b7,
            tableId: _0x3915be,
            startRow: _0x2be58b.cursorRow,
            endRow: _0x2be58b.cursorRow + _0x3f5ca6 - 1,
          }),
        _0x1e5394
      );
    },
  },
  Lr = {
    id: "docs-table.command.move-table",
    type: e.CommandType["COMMAND"],
    handler: async (_0x110a1e, _0x4ba188) => {
      if (!_0x4ba188) return false;
      let _0x2cf2a0 = _0x110a1e.get(e.IUniverInstanceService),
        _0x32df69 = _0x110a1e.get(e.ICommandService),
        _0xb4c58 = _0x110a1e.get(K),
        _0x5d1c67 = _0x2cf2a0.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x2d667c = _0xb4c58.getCurrentSelection(),
        _0x1bb36c =
          _0x4ba188.tableId ??
          (_0x2d667c == null ? undefined : _0x2d667c.tableId);
      if (!_0x5d1c67 || !_0x1bb36c) return false;
      let _0x38aeca = _0x5d1c67.getSnapshot(),
        _0x8a6464 = P(_0x4ba188, _0x2d667c),
        _0x4ca1a0 = I(_0x5d1c67, _0x8a6464);
      if (!_0x4ca1a0) return false;
      if (_0x4ba188.targetOffset == null) {
        let _0x7f7450 = Ut(
          _0x4ca1a0,
          _0x1bb36c,
          _0x4ba188.deltaX ?? 0,
          _0x4ba188.deltaY ?? 0,
        );
        return V(_0x32df69, _0x5d1c67.getUnitId(), _0x4ca1a0, _0x7f7450);
      }
      let _0x2bc3d1 = Wt(
        _0x4ca1a0,
        _0x1bb36c,
        _0x4ba188.targetOffset,
        H(_0x38aeca, _0x8a6464),
      );
      return V(_0x32df69, _0x5d1c67.getUnitId(), _0x4ca1a0, _0x2bc3d1);
    },
  },
  Rr = {
    id: "docs-table.command.resize-column",
    type: e.CommandType["COMMAND"],
    handler: async (_0x4a4343, _0x323cfe) => {
      var _0x4670d4;
      if (!_0x323cfe) return false;
      let _0x4f8806 = _0x4a4343.get(e.IUniverInstanceService),
        _0x107fe0 = _0x4a4343.get(e.ICommandService),
        _0x237673 = _0x4a4343.get(K),
        _0x1431a7 = _0x4f8806.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x330d1f = _0x237673.getCurrentSelection(),
        _0x3decc6 =
          _0x323cfe.tableId ??
          (_0x330d1f == null ? undefined : _0x330d1f.tableId),
        _0x4631a3 =
          _0x323cfe.column ??
          (_0x330d1f == null ? undefined : _0x330d1f.startColumn);
      if (!_0x1431a7 || _0x3decc6 == null || _0x4631a3 == null) return false;
      let _0x219295 = I(_0x1431a7, P(_0x323cfe, _0x330d1f));
      return !_0x219295 ||
        !(
          (_0x4670d4 = _0x219295.tableSource) != null &&
          (_0x4670d4 = _0x4670d4[_0x3decc6]) != null &&
          _0x4670d4.tableColumns[_0x4631a3]
        )
        ? false
        : V(
            _0x107fe0,
            _0x1431a7.getUnitId(),
            _0x219295,
            Ht(_0x219295, _0x3decc6, _0x4631a3, _0x323cfe.width),
          );
    },
  },
  zr = {
    id: "docs-table.command.resize-row",
    type: e.CommandType["COMMAND"],
    handler: async (_0xdbc1, _0x78b455) => {
      var _0x1e776a;
      if (!_0x78b455) return false;
      let _0x197263 = _0xdbc1.get(e.IUniverInstanceService),
        _0x5face0 = _0xdbc1.get(e.ICommandService),
        _0x230204 = _0xdbc1.get(K),
        _0x3f682c = _0x197263.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x4cf43e = _0x230204.getCurrentSelection(),
        _0x2ed08c =
          _0x78b455.tableId ??
          (_0x4cf43e == null ? undefined : _0x4cf43e.tableId),
        _0x3b188f =
          _0x78b455.row ?? (_0x4cf43e == null ? undefined : _0x4cf43e.startRow);
      if (!_0x3f682c || _0x2ed08c == null || _0x3b188f == null) return false;
      let _0x127508 = I(_0x3f682c, P(_0x78b455, _0x4cf43e));
      return !_0x127508 ||
        !(
          (_0x1e776a = _0x127508.tableSource) != null &&
          (_0x1e776a = _0x1e776a[_0x2ed08c]) != null &&
          _0x1e776a.tableRows[_0x3b188f]
        )
        ? false
        : V(
            _0x5face0,
            _0x3f682c.getUnitId(),
            _0x127508,
            Kt(
              _0x127508,
              _0x2ed08c,
              _0x3b188f,
              _0x78b455.height,
              _0x78b455.hRule,
            ),
          );
    },
  },
  Br = {
    id: "docs-table.command.set-column-type",
    type: e.CommandType["COMMAND"],
    handler: async (_0x1c3b0e, _0x45e471) => {
      if (!_0x45e471) return false;
      let _0x639ed8 = _0x1c3b0e.get(e.IUniverInstanceService),
        _0x4b83d7 = _0x1c3b0e.get(K),
        _0x4946fd = _0x1c3b0e.get(q),
        _0x46c898 = _0x639ed8.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x5045f5 = _0x4b83d7.getCurrentSelection(),
        _0x16d105 =
          _0x45e471.tableId ??
          (_0x5045f5 == null ? undefined : _0x5045f5.tableId),
        _0x3b3452 =
          _0x45e471.column ??
          (_0x5045f5 == null ? undefined : _0x5045f5.startColumn);
      return !_0x46c898 || !_0x16d105 || _0x3b3452 == null
        ? false
        : (_0x4946fd.setColumnType(
            _0x46c898.getUnitId(),
            _0x16d105,
            _0x3b3452,
            _0x45e471.config,
          ),
          true);
    },
  },
  Vr = {
    id: "docs-table.command.set-header-row-count",
    type: e.CommandType["COMMAND"],
    handler: async (_0x2ac449, _0x46a986) => {
      let _0xf9a6f2 = _0x2ac449.get(e.IUniverInstanceService),
        _0x45bdcd = _0x2ac449.get(e.ICommandService),
        _0x4d8863 = _0x2ac449.get(K),
        _0x1aeead = _0x2ac449.get(q),
        _0x50a0a1 = _0xf9a6f2.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x58f759 = _0x4d8863.getCurrentSelection();
      if (!_0x50a0a1) return false;
      let _0x548ec3 =
          (_0x46a986 == null ? undefined : _0x46a986.tableId) ??
          (_0x58f759 == null ? undefined : _0x58f759.tableId),
        _0x2959e8 =
          (_0x46a986 == null ? undefined : _0x46a986.row) ??
          (_0x58f759 == null ? undefined : _0x58f759.endRow);
      if (
        _0x548ec3 == null ||
        ((_0x46a986 == null ? undefined : _0x46a986.headerRowCount) == null &&
          _0x2959e8 == null)
      )
        return false;
      let _0x1532c9 =
          (_0x46a986 == null ? undefined : _0x46a986.headerRowCount) ??
          _0x2959e8 + 1,
        _0x1c6518 = I(_0x50a0a1, P(_0x46a986, _0x58f759));
      if (!_0x1c6518) return false;
      let _0x475c75 = Yt(_0x1c6518, _0x548ec3, _0x1532c9);
      if (!_0x475c75) return false;
      let _0xbc0567 = V(
        _0x45bdcd,
        _0x50a0a1.getUnitId(),
        _0x1c6518,
        _0x475c75.actions,
      );
      return (
        _0xbc0567 &&
          _0x1aeead.setHeaderRowCount(
            _0x50a0a1.getUnitId(),
            _0x548ec3,
            _0x475c75.headerRowCount,
          ),
        _0xbc0567
      );
    },
  },
  Hr = {
    id: "docs-table.command.set-table-background",
    type: e.CommandType["COMMAND"],
    handler: async (_0x1ca723, _0xf18642) => {
      let _0xd508c6 =
        (_0xf18642 == null ? undefined : _0xf18642.color) ??
        (_0xf18642 == null ? undefined : _0xf18642.value);
      if (_0xd508c6 === undefined) return false;
      let _0x47268c = _0x1ca723.get(e.IUniverInstanceService),
        _0x329254 = _0x1ca723.get(e.ICommandService),
        _0x2540da = _0x1ca723.get(K),
        _0x1b6dbe = _0x47268c.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x53566d = Ur(_0x2540da),
        _0xee3de =
          (_0xf18642 == null ? undefined : _0xf18642.tableId) ??
          (_0x53566d == null ? undefined : _0x53566d.tableId),
        _0x254c82 = F(_0xf18642, _0x53566d);
      if (!_0x1b6dbe || !_0xee3de || !_0x254c82) return false;
      let _0xbd3f24 = P(_0xf18642, _0x53566d),
        _0x44f241 = I(_0x1b6dbe, _0xbd3f24);
      if (!_0x44f241 || !Gr(_0x44f241, _0xee3de, _0x254c82)) return false;
      let _0x29e348 = Wr(_0x44f241, {
          tableId: _0xee3de,
          ..._0x254c82,
          value: _0xd508c6,
        }),
        _0x19726c = V(_0x329254, _0x1b6dbe.getUnitId(), _0x44f241, _0x29e348, {
          tableId: _0xee3de,
          segmentId: _0xbd3f24,
          ..._0x254c82,
        });
      return (
        _0x19726c &&
          _0x2540da.setStructuralSelection({
            kind: (_0x53566d == null ? undefined : _0x53566d.kind) ?? "range",
            tableId: _0xee3de,
            segmentId: _0xbd3f24,
            ..._0x254c82,
          }),
        _0x19726c
      );
    },
  };
function Ur(_0x3f0c37) {
  var _0x2da111;
  return (
    ((_0x2da111 = _0x3f0c37.getStableTableSelection) == null
      ? undefined
      : _0x2da111.call(_0x3f0c37)) ?? _0x3f0c37.getCurrentSelection()
  );
}
function Wr(_0x2a1dc4, _0x9e926b) {
  var _0x314d40;
  let _0x39990a =
      (_0x314d40 = _0x2a1dc4.tableSource) == null
        ? undefined
        : _0x314d40[_0x9e926b.tableId],
    _0x266549 = F(_0x9e926b);
  if (!_0x39990a || !_0x266549) return null;
  let _0x485fef = e.JSONX["getInstance"](),
    _0x574429 = [],
    _0x49f93b = Kr(_0x266549);
  for (
    let _0x5f5460 = _0x49f93b.startRow;
    _0x5f5460 <= _0x49f93b.endRow;
    _0x5f5460++
  )
    for (
      let _0x208997 = _0x49f93b.startColumn;
      _0x208997 <= _0x49f93b.endColumn;
      _0x208997++
    ) {
      var _0x50cf17;
      let _0x4d0554 =
        (_0x50cf17 = _0x39990a.tableRows[_0x5f5460]) == null
          ? undefined
          : _0x50cf17.tableCells[_0x208997];
      if (!_0x4d0554) return null;
      let _0x39e774 = [
          "tableSource",
          _0x9e926b.tableId,
          "tableRows",
          _0x5f5460,
          "tableCells",
          _0x208997,
          "backgroundColor",
        ],
        _0x1346bd =
          _0x9e926b.value == null ? undefined : { rgb: _0x9e926b.value };
      JSON.stringify(_0x4d0554.backgroundColor) !== JSON.stringify(_0x1346bd) &&
        (_0x4d0554.backgroundColor === undefined && _0x1346bd !== undefined
          ? _0x574429.push(_0x485fef.insertOp([..._0x39e774], _0x1346bd))
          : _0x1346bd === undefined
            ? _0x574429.push(
                _0x485fef.removeOp([..._0x39e774], _0x4d0554.backgroundColor),
              )
            : _0x574429.push(
                _0x485fef.replaceOp(
                  [..._0x39e774],
                  _0x4d0554.backgroundColor,
                  _0x1346bd,
                ),
              ));
    }
  return _0x574429.reduce(
    (_0x482cdf, _0x3185b4) => e.JSONX["compose"](_0x482cdf, _0x3185b4),
    null,
  );
}
function Gr(_0x547b60, _0x512be0, _0x5698aa) {
  var _0x25b350;
  let _0x37b581 =
    (_0x25b350 = _0x547b60.tableSource) == null
      ? undefined
      : _0x25b350[_0x512be0];
  if (!_0x37b581) return false;
  let _0x3504b3 = Kr(_0x5698aa);
  for (
    let _0x172c4a = _0x3504b3.startRow;
    _0x172c4a <= _0x3504b3.endRow;
    _0x172c4a++
  )
    for (
      let _0x3e2e82 = _0x3504b3.startColumn;
      _0x3e2e82 <= _0x3504b3.endColumn;
      _0x3e2e82++
    ) {
      var _0x2299b8;
      if (!(
        (_0x2299b8 = _0x37b581.tableRows[_0x172c4a]) != null &&
        _0x2299b8.tableCells[_0x3e2e82]
      ))
        return false;
    }
  return true;
}
function Kr(_0x2f2f85) {
  return {
    startRow: Math.min(_0x2f2f85.startRow, _0x2f2f85.endRow),
    endRow: Math.max(_0x2f2f85.startRow, _0x2f2f85.endRow),
    startColumn: Math.min(_0x2f2f85.startColumn, _0x2f2f85.endColumn),
    endColumn: Math.max(_0x2f2f85.startColumn, _0x2f2f85.endColumn),
  };
}
let qr = (function (_0x307635) {
  return (
    (_0x307635.All = "all"),
    (_0x307635.Inner = "inner"),
    (_0x307635.Outer = "outer"),
    (_0x307635.Top = "top"),
    (_0x307635.Bottom = "bottom"),
    (_0x307635.Left = "left"),
    (_0x307635.Right = "right"),
    (_0x307635.None = "none"),
    (_0x307635.InnerHorizontal = "innerHorizontal"),
    (_0x307635.InnerVertical = "innerVertical"),
    _0x307635
  );
})({});
const Jr = { color: { rgb: "#1f1f1f" }, width: { v: 1 } },
  J = { color: { rgb: "transparent" }, width: { v: 0 } };
function Yr(_0x52abfc) {
  var _0x531952;
  let _0x4df150 = p(_0x52abfc.documentData, {
      cloneBody: false,
      tableIds: [_0x52abfc.tableId],
    }),
    _0x3dcddd =
      (_0x531952 = _0x4df150.tableSource) == null
        ? undefined
        : _0x531952[_0x52abfc.tableId];
  if (!_0x3dcddd)
    throw Error(
      "[DocsTable]: Table " + _0x52abfc.tableId + "\x20is\x20not\x20found.",
    );
  let _0x2b47f4 = oi(_0x52abfc),
    _0x393e8e = _0x52abfc.border ?? Jr;
  for (
    let _0x395ea0 = _0x2b47f4.startRow;
    _0x395ea0 <= _0x2b47f4.endRow;
    _0x395ea0++
  )
    for (
      let _0x3ab098 = _0x2b47f4.startColumn;
      _0x3ab098 <= _0x2b47f4.endColumn;
      _0x3ab098++
    ) {
      var _0x34836d;
      let _0x295785 =
        (_0x34836d = _0x3dcddd.tableRows[_0x395ea0]) == null
          ? undefined
          : _0x34836d.tableCells[_0x3ab098];
      if (!_0x295785)
        throw Error(
          "[DocsTable]:\x20Cell\x20range\x20is\x20out\x20of\x20bounds.",
        );
      ((_0x295785.borderTop = ni(_0x52abfc.preset, _0x395ea0, _0x2b47f4)
        ? _0x393e8e
        : J),
        (_0x295785.borderBottom = ri(_0x52abfc.preset, _0x395ea0, _0x2b47f4)
          ? _0x393e8e
          : J),
        (_0x295785.borderLeft = ii(_0x52abfc.preset, _0x3ab098, _0x2b47f4)
          ? _0x393e8e
          : J),
        (_0x295785.borderRight = ai(_0x52abfc.preset, _0x3ab098, _0x2b47f4)
          ? _0x393e8e
          : J));
    }
  return (
    ci(_0x3dcddd, _0x2b47f4, {
      top: ni(_0x52abfc.preset, _0x2b47f4.startRow, _0x2b47f4) ? _0x393e8e : J,
      left: ii(_0x52abfc.preset, _0x2b47f4.startColumn, _0x2b47f4)
        ? _0x393e8e
        : J,
    }),
    { nextDocumentData: _0x4df150 }
  );
}
function Xr(_0x1f0847) {
  var _0x256e2b;
  let _0x4b247a =
    (_0x256e2b = _0x1f0847.documentData["tableSource"]) == null
      ? undefined
      : _0x256e2b[_0x1f0847.tableId];
  if (!_0x4b247a)
    throw Error("[DocsTable]: Table " + _0x1f0847.tableId + " is not found.");
  let _0x2f0dd0 = oi(_0x1f0847),
    _0x2b97e3 = _0x1f0847.border ?? Jr,
    _0x4eaead = [];
  for (
    let _0x4c6a1b = _0x2f0dd0.startRow;
    _0x4c6a1b <= _0x2f0dd0.endRow;
    _0x4c6a1b++
  )
    for (
      let _0xe5a702 = _0x2f0dd0.startColumn;
      _0xe5a702 <= _0x2f0dd0.endColumn;
      _0xe5a702++
    ) {
      var _0x3fa56b;
      let _0x492c0e =
        (_0x3fa56b = _0x4b247a.tableRows[_0x4c6a1b]) == null
          ? undefined
          : _0x3fa56b.tableCells[_0xe5a702];
      if (!_0x492c0e) throw Error("[DocsTable]: Cell range is out of bounds.");
      (X(
        _0x4eaead,
        Y(_0x1f0847.tableId, _0x4c6a1b, _0xe5a702, "borderTop"),
        _0x492c0e.borderTop,
        ni(_0x1f0847.preset, _0x4c6a1b, _0x2f0dd0) ? _0x2b97e3 : J,
      ),
        X(
          _0x4eaead,
          Y(_0x1f0847.tableId, _0x4c6a1b, _0xe5a702, "borderBottom"),
          _0x492c0e.borderBottom,
          ri(_0x1f0847.preset, _0x4c6a1b, _0x2f0dd0) ? _0x2b97e3 : J,
        ),
        X(
          _0x4eaead,
          Y(_0x1f0847.tableId, _0x4c6a1b, _0xe5a702, "borderLeft"),
          _0x492c0e.borderLeft,
          ii(_0x1f0847.preset, _0xe5a702, _0x2f0dd0) ? _0x2b97e3 : J,
        ),
        X(
          _0x4eaead,
          Y(_0x1f0847.tableId, _0x4c6a1b, _0xe5a702, "borderRight"),
          _0x492c0e.borderRight,
          ai(_0x1f0847.preset, _0xe5a702, _0x2f0dd0) ? _0x2b97e3 : J,
        ));
    }
  return (
    $r(_0x4eaead, _0x4b247a, _0x1f0847.tableId, _0x2f0dd0, {
      top: ni(_0x1f0847.preset, _0x2f0dd0.startRow, _0x2f0dd0) ? _0x2b97e3 : J,
      left: ii(_0x1f0847.preset, _0x2f0dd0.startColumn, _0x2f0dd0)
        ? _0x2b97e3
        : J,
    }),
    ei(_0x4eaead)
  );
}
function Zr(_0x465d76) {
  var _0x4ea2d8;
  let _0x55fd0d = p(_0x465d76.documentData, {
      cloneBody: false,
      tableIds: [_0x465d76.tableId],
    }),
    _0x3dc893 =
      (_0x4ea2d8 = _0x55fd0d.tableSource) == null
        ? undefined
        : _0x4ea2d8[_0x465d76.tableId];
  if (!_0x3dc893)
    throw Error(
      "[DocsTable]: Table " + _0x465d76.tableId + "\x20is\x20not\x20found.",
    );
  return (
    si(_0x465d76, (_0x462798, _0x5a5f19) => {
      var _0x11f67b;
      let _0x26672b =
        (_0x11f67b = _0x3dc893.tableRows[_0x462798]) == null
          ? undefined
          : _0x11f67b.tableCells[_0x5a5f19];
      if (!_0x26672b)
        throw Error(
          "[DocsTable]:\x20Cell\x20range\x20is\x20out\x20of\x20bounds.",
        );
      if (_0x465d76.color == null) {
        delete _0x26672b.backgroundColor;
        return;
      }
      _0x26672b.backgroundColor = { rgb: _0x465d76.color };
    }),
    { nextDocumentData: _0x55fd0d }
  );
}
function Qr(_0xf22031) {
  var _0x1965b9;
  let _0x342b8c =
    (_0x1965b9 = _0xf22031.documentData["tableSource"]) == null
      ? undefined
      : _0x1965b9[_0xf22031.tableId];
  if (!_0x342b8c)
    throw Error("[DocsTable]: Table " + _0xf22031.tableId + " is not found.");
  let _0x35d9d8 = [];
  return (
    si(_0xf22031, (_0x4ca61d, _0x377b7e) => {
      var _0x43821b;
      let _0x174c25 =
        (_0x43821b = _0x342b8c.tableRows[_0x4ca61d]) == null
          ? undefined
          : _0x43821b.tableCells[_0x377b7e];
      if (!_0x174c25) throw Error("[DocsTable]: Cell range is out of bounds.");
      (X(
        _0x35d9d8,
        Y(_0xf22031.tableId, _0x4ca61d, _0x377b7e, "borderTop"),
        _0x174c25.borderTop,
        Z(_0x174c25.borderTop, _0xf22031.border),
      ),
        X(
          _0x35d9d8,
          Y(_0xf22031.tableId, _0x4ca61d, _0x377b7e, "borderBottom"),
          _0x174c25.borderBottom,
          Z(_0x174c25.borderBottom, _0xf22031.border),
        ),
        X(
          _0x35d9d8,
          Y(_0xf22031.tableId, _0x4ca61d, _0x377b7e, "borderLeft"),
          _0x174c25.borderLeft,
          Z(_0x174c25.borderLeft, _0xf22031.border),
        ),
        X(
          _0x35d9d8,
          Y(_0xf22031.tableId, _0x4ca61d, _0x377b7e, "borderRight"),
          _0x174c25.borderRight,
          Z(_0x174c25.borderRight, _0xf22031.border),
        ));
    }),
    $r(_0x35d9d8, _0x342b8c, _0xf22031.tableId, oi(_0xf22031), {
      top: _0xf22031.border,
      left: _0xf22031.border,
      merge: true,
    }),
    ei(_0x35d9d8)
  );
}
function $r(_0x5e48f2, _0x7cbff3, _0x11a45a, _0x4d8f53, _0x40d3c1) {
  if (_0x4d8f53.startRow > 0) {
    let _0x1ebef8 = _0x7cbff3.tableRows[_0x4d8f53.startRow - 1];
    for (
      let _0x50bbde = _0x4d8f53.startColumn;
      _0x50bbde <= _0x4d8f53.endColumn;
      _0x50bbde++
    ) {
      let _0xa601f3 =
        _0x1ebef8 == null ? undefined : _0x1ebef8.tableCells[_0x50bbde];
      if (!_0xa601f3) throw Error("[DocsTable]: Cell range is out of bounds.");
      X(
        _0x5e48f2,
        Y(_0x11a45a, _0x4d8f53.startRow - 1, _0x50bbde, "borderBottom"),
        _0xa601f3.borderBottom,
        _0x40d3c1.merge
          ? Z(_0xa601f3.borderBottom, _0x40d3c1.top)
          : _0x40d3c1.top,
      );
    }
  }
  if (_0x4d8f53.startColumn > 0)
    for (
      let _0x27967e = _0x4d8f53.startRow;
      _0x27967e <= _0x4d8f53.endRow;
      _0x27967e++
    ) {
      var _0x446cbf;
      let _0x1f595b =
        (_0x446cbf = _0x7cbff3.tableRows[_0x27967e]) == null
          ? undefined
          : _0x446cbf.tableCells[_0x4d8f53.startColumn - 1];
      if (!_0x1f595b) throw Error("[DocsTable]: Cell range is out of bounds.");
      X(
        _0x5e48f2,
        Y(_0x11a45a, _0x27967e, _0x4d8f53.startColumn - 1, "borderRight"),
        _0x1f595b.borderRight,
        _0x40d3c1.merge
          ? Z(_0x1f595b.borderRight, _0x40d3c1.left)
          : _0x40d3c1.left,
      );
    }
}
function Y(_0x2d5909, _0x4900d7, _0x54c002, _0xdcf3cf) {
  return [
    "tableSource",
    _0x2d5909,
    "tableRows",
    _0x4900d7,
    "tableCells",
    _0x54c002,
    _0xdcf3cf,
  ];
}
function X(_0x17320e, _0x5170ab, _0x1e1592, _0x41fd9c) {
  if (JSON.stringify(_0x1e1592) === JSON.stringify(_0x41fd9c)) return;
  let _0x162d86 = e.JSONX["getInstance"]();
  if (_0x1e1592 === undefined) {
    _0x17320e.push(_0x162d86.insertOp(_0x5170ab, ti(_0x41fd9c)));
    return;
  }
  if (_0x41fd9c === undefined) {
    _0x17320e.push(_0x162d86.removeOp(_0x5170ab, _0x1e1592));
    return;
  }
  _0x17320e.push(_0x162d86.replaceOp(_0x5170ab, _0x1e1592, ti(_0x41fd9c)));
}
function ei(_0x234da2) {
  return _0x234da2.reduce(
    (_0x51b13b, _0x38cda2) => e.JSONX["compose"](_0x51b13b, _0x38cda2),
    null,
  );
}
function ti(_0x273275) {
  return Array.isArray(_0x273275)
    ? _0x273275.map((_0x54fa2c) => ti(_0x54fa2c))
    : !_0x273275 || typeof _0x273275 != "object"
      ? _0x273275
      : Object.fromEntries(
          Object.entries(_0x273275).map(([_0x3e10e5, _0x813d63]) => [
            _0x3e10e5,
            ti(_0x813d63),
          ]),
        );
}
function ni(_0x191a74, _0x5331b4, _0x32d6e6) {
  return (
    _0x191a74 === "all" ||
    _0x191a74 === "top" ||
    (_0x191a74 === "outer" && _0x5331b4 === _0x32d6e6.startRow) ||
    (_0x191a74 === "innerHorizontal" && _0x5331b4 > _0x32d6e6.startRow) ||
    (_0x191a74 === "inner" && _0x5331b4 > _0x32d6e6.startRow)
  );
}
function ri(_0x414cef, _0x57c5e4, _0x20e82f) {
  return (
    _0x414cef === "all" ||
    _0x414cef === "bottom" ||
    (_0x414cef === "outer" && _0x57c5e4 === _0x20e82f.endRow)
  );
}
function ii(_0x53bfdf, _0x3fb1b4, _0x7bcb28) {
  return (
    _0x53bfdf === "all" ||
    _0x53bfdf === "left" ||
    (_0x53bfdf === "outer" && _0x3fb1b4 === _0x7bcb28.startColumn) ||
    (_0x53bfdf === "innerVertical" && _0x3fb1b4 > _0x7bcb28.startColumn) ||
    (_0x53bfdf === "inner" && _0x3fb1b4 > _0x7bcb28.startColumn)
  );
}
function ai(_0x39819d, _0x5599a8, _0x1bd164) {
  return (
    _0x39819d === "all" ||
    _0x39819d === "right" ||
    (_0x39819d === "outer" && _0x5599a8 === _0x1bd164.endColumn)
  );
}
function oi(_0xe8cd4) {
  return {
    startRow: Math.min(_0xe8cd4.startRow, _0xe8cd4.endRow),
    endRow: Math.max(_0xe8cd4.startRow, _0xe8cd4.endRow),
    startColumn: Math.min(_0xe8cd4.startColumn, _0xe8cd4.endColumn),
    endColumn: Math.max(_0xe8cd4.startColumn, _0xe8cd4.endColumn),
  };
}
function si(_0x33e8fa, _0x26389f) {
  let _0x3b62b0 = oi(_0x33e8fa);
  for (
    let _0x32e1d4 = _0x3b62b0.startRow;
    _0x32e1d4 <= _0x3b62b0.endRow;
    _0x32e1d4++
  )
    for (
      let _0x1ae7e0 = _0x3b62b0.startColumn;
      _0x1ae7e0 <= _0x3b62b0.endColumn;
      _0x1ae7e0++
    )
      _0x26389f(_0x32e1d4, _0x1ae7e0);
}
function Z(_0x28b717, _0x52ea0d) {
  let _0x1e75ed = {
    color: Object.prototype["hasOwnProperty"].call(_0x52ea0d, "color")
      ? _0x52ea0d.color
      : ((_0x28b717 == null ? undefined : _0x28b717.color) ?? Jr.color),
    width:
      _0x52ea0d.width ??
      (_0x28b717 == null ? undefined : _0x28b717.width) ??
      Jr.width,
    dashStyle:
      _0x52ea0d.dashStyle ??
      (_0x28b717 == null ? undefined : _0x28b717.dashStyle),
  };
  return (_0x52ea0d.clearColor && delete _0x1e75ed.color, _0x1e75ed);
}
function ci(_0x484628, _0x152a23, _0xd2cc6) {
  if (_0x152a23.startRow > 0) {
    let _0x57ec3d = _0x484628.tableRows[_0x152a23.startRow - 1];
    for (
      let _0x1715f5 = _0x152a23.startColumn;
      _0x1715f5 <= _0x152a23.endColumn;
      _0x1715f5++
    ) {
      let _0x34939a =
        _0x57ec3d == null ? undefined : _0x57ec3d.tableCells[_0x1715f5];
      if (!_0x34939a) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x34939a.borderBottom = _0xd2cc6.merge
        ? Z(_0x34939a.borderBottom, _0xd2cc6.top)
        : _0xd2cc6.top;
    }
  }
  if (_0x152a23.startColumn > 0)
    for (
      let _0x16d5f7 = _0x152a23.startRow;
      _0x16d5f7 <= _0x152a23.endRow;
      _0x16d5f7++
    ) {
      var _0x322537;
      let _0x236836 =
        (_0x322537 = _0x484628.tableRows[_0x16d5f7]) == null
          ? undefined
          : _0x322537.tableCells[_0x152a23.startColumn - 1];
      if (!_0x236836) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x236836.borderRight = _0xd2cc6.merge
        ? Z(_0x236836.borderRight, _0xd2cc6.left)
        : _0xd2cc6.left;
    }
}
const li = {
  id: "docs-table.command.set-table-border-color",
  type: e.CommandType["COMMAND"],
  handler: async (_0x886758, _0x10194a) => {
    let _0x22fe73 =
      (_0x10194a == null ? undefined : _0x10194a.color) ??
      (_0x10194a == null ? undefined : _0x10194a.value);
    return (
      _0x22fe73 !== undefined &&
      ui(
        _0x886758,
        _0x10194a,
        _0x22fe73 == null
          ? { clearColor: true }
          : { color: { rgb: _0x22fe73 } },
      )
    );
  },
};
async function ui(_0x1db40d, _0x50d98e, _0x5d62a5) {
  let _0x39e945 = _0x1db40d.get(e.IUniverInstanceService),
    _0x5aff70 = _0x1db40d.get(e.ICommandService),
    _0x370772 = _0x1db40d.get(K),
    _0x4832a0 = _0x39e945.getCurrentUnitOfType(
      e.UniverInstanceType["UNIVER_DOC"],
    ),
    _0x4c5b50 = Ur(_0x370772),
    _0x2af421 =
      (_0x50d98e == null ? undefined : _0x50d98e.tableId) ??
      (_0x4c5b50 == null ? undefined : _0x4c5b50.tableId),
    _0x5cce1d = F(_0x50d98e, _0x4c5b50);
  if (!_0x4832a0 || !_0x2af421 || !_0x5cce1d) return false;
  let _0x19eda2 = P(_0x50d98e, _0x4c5b50),
    _0x2728fc = I(_0x4832a0, _0x19eda2);
  if (!_0x2728fc) return false;
  let _0x3f914c = Qr({
      documentData: _0x2728fc,
      tableId: _0x2af421,
      ..._0x5cce1d,
      border: _0x5d62a5,
    }),
    _0x1c2312 = V(_0x5aff70, _0x4832a0.getUnitId(), _0x2728fc, _0x3f914c, {
      tableId: _0x2af421,
      segmentId: _0x19eda2,
      ..._0x5cce1d,
    });
  return (
    _0x1c2312 &&
      _0x370772.setStructuralSelection({
        kind: (_0x4c5b50 == null ? undefined : _0x4c5b50.kind) ?? "range",
        tableId: _0x2af421,
        segmentId: _0x19eda2,
        ..._0x5cce1d,
      }),
    _0x1c2312
  );
}
const di = {
  id: "docs-table.command.set-table-border-style",
  type: e.CommandType["COMMAND"],
  handler: async (_0x226a1d, _0x2e3355) => {
    let _0x342442 =
      (_0x2e3355 == null ? undefined : _0x2e3355.dashStyle) ??
      (_0x2e3355 == null ? undefined : _0x2e3355.value);
    return (
      _0x342442 != null &&
      ui(_0x226a1d, _0x2e3355, { dashStyle: fi(_0x342442) })
    );
  },
};
function fi(_0x207f2b) {
  return typeof _0x207f2b == "number"
    ? _0x207f2b
    : _0x207f2b === "dot"
      ? e.DashStyleType["DOT"]
      : _0x207f2b === "dash"
        ? e.DashStyleType["DASH"]
        : e.DashStyleType["SOLID"];
}
const pi = {
    id: "docs-table.command.set-table-border-width",
    type: e.CommandType["COMMAND"],
    handler: async (_0x11654a, _0x1c3fc5) => {
      let _0x198bbe =
        (_0x1c3fc5 == null ? undefined : _0x1c3fc5.width) ??
        (_0x1c3fc5 == null ? undefined : _0x1c3fc5.value);
      return (
        _0x198bbe != null &&
        ui(_0x11654a, _0x1c3fc5, { width: { v: _0x198bbe } })
      );
    },
  },
  mi = {
    id: "docs-table.command.set-table-border",
    type: e.CommandType["COMMAND"],
    handler: async (_0x2da483, _0x47e049) => {
      if (!_0x47e049) return false;
      let _0x435cb8 = _0x2da483.get(e.IUniverInstanceService),
        _0x5487a2 = _0x2da483.get(e.ICommandService),
        _0x5efc67 = _0x2da483.get(K),
        _0x5910d5 = _0x435cb8.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x322a9d = Ur(_0x5efc67),
        _0x4036b1 =
          _0x47e049.tableId ??
          (_0x322a9d == null ? undefined : _0x322a9d.tableId),
        _0x2a3cb6 = F(_0x47e049, _0x322a9d);
      if (!_0x5910d5 || !_0x4036b1 || !_0x2a3cb6) return false;
      let _0x22020f = P(_0x47e049, _0x322a9d),
        _0x5a0d85 = I(_0x5910d5, _0x22020f);
      if (!_0x5a0d85) return false;
      let _0x25e634 = Xr({
          documentData: _0x5a0d85,
          tableId: _0x4036b1,
          ..._0x2a3cb6,
          preset: _0x47e049.preset,
          border: _0x47e049.border,
        }),
        _0x3bf904 = V(_0x5487a2, _0x5910d5.getUnitId(), _0x5a0d85, _0x25e634, {
          tableId: _0x4036b1,
          segmentId: _0x22020f,
          ..._0x2a3cb6,
        });
      return (
        _0x3bf904 &&
          _0x5efc67.setStructuralSelection({
            kind: (_0x322a9d == null ? undefined : _0x322a9d.kind) ?? "range",
            tableId: _0x4036b1,
            segmentId: _0x22020f,
            ..._0x2a3cb6,
          }),
        _0x3bf904
      );
    },
  },
  hi = {
    id: "docs-table.command.set-table-vertical-align",
    type: e.CommandType["COMMAND"],
    handler: async (_0x5b81ea, _0x7a9b24) => {
      let _0x509e50 = _0x7a9b24 == null ? undefined : _0x7a9b24.value;
      if (_0x509e50 == null) return false;
      let _0x52e637 = _0x5b81ea.get(e.IUniverInstanceService),
        _0x5e4867 = _0x5b81ea.get(e.ICommandService),
        _0x314b0b = _0x5b81ea.get(K),
        _0xc96273 = _0x52e637.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x128284 = gi(_0x314b0b),
        _0x468c82 =
          (_0x7a9b24 == null ? undefined : _0x7a9b24.tableId) ??
          (_0x128284 == null ? undefined : _0x128284.tableId),
        _0x4cb95a = F(_0x7a9b24, _0x128284);
      if (!_0xc96273 || !_0x468c82 || !_0x4cb95a) return false;
      let _0x458e8b = P(_0x7a9b24, _0x128284),
        _0x369bcf = I(_0xc96273, _0x458e8b);
      if (!_0x369bcf || !_i(_0x369bcf, _0x468c82, _0x4cb95a)) return false;
      let _0x20a1be = vi(_0x369bcf, {
          tableId: _0x468c82,
          ..._0x4cb95a,
          value: _0x509e50,
        }),
        _0x4ed47d = V(_0x5e4867, _0xc96273.getUnitId(), _0x369bcf, _0x20a1be, {
          tableId: _0x468c82,
          segmentId: _0x458e8b,
          ..._0x4cb95a,
        });
      return (
        _0x4ed47d &&
          _0x314b0b.setStructuralSelection({
            kind: (_0x128284 == null ? undefined : _0x128284.kind) ?? "range",
            tableId: _0x468c82,
            segmentId: _0x458e8b,
            ..._0x4cb95a,
          }),
        _0x4ed47d
      );
    },
  };
function gi(_0x4fffbd) {
  var _0x2f5606;
  return (
    ((_0x2f5606 = _0x4fffbd.getStableTableSelection) == null
      ? undefined
      : _0x2f5606.call(_0x4fffbd)) ?? _0x4fffbd.getCurrentSelection()
  );
}
function _i(_0x26d443, _0x3f33ff, _0x2aa81c) {
  var _0x2ba8fd;
  let _0x455c17 =
    (_0x2ba8fd = _0x26d443.tableSource) == null
      ? undefined
      : _0x2ba8fd[_0x3f33ff];
  if (!_0x455c17) return false;
  let _0x3ec44f = yi(_0x2aa81c);
  for (
    let _0x2c1947 = _0x3ec44f.startRow;
    _0x2c1947 <= _0x3ec44f.endRow;
    _0x2c1947++
  )
    for (
      let _0x1977b7 = _0x3ec44f.startColumn;
      _0x1977b7 <= _0x3ec44f.endColumn;
      _0x1977b7++
    ) {
      var _0x605908;
      if (!(
        (_0x605908 = _0x455c17.tableRows[_0x2c1947]) != null &&
        _0x605908.tableCells[_0x1977b7]
      ))
        return false;
    }
  return true;
}
function vi(_0x28d0da, _0x121bd6) {
  var _0x84d8ed;
  let _0x27f5bd =
    (_0x84d8ed = _0x28d0da.tableSource) == null
      ? undefined
      : _0x84d8ed[_0x121bd6.tableId];
  if (!_0x27f5bd) return null;
  let _0x325685 = e.JSONX["getInstance"](),
    _0x2992f2 = yi(_0x121bd6),
    _0x2d812d = [];
  for (
    let _0x5e9479 = _0x2992f2.startRow;
    _0x5e9479 <= _0x2992f2.endRow;
    _0x5e9479++
  )
    for (
      let _0x2e6cae = _0x2992f2.startColumn;
      _0x2e6cae <= _0x2992f2.endColumn;
      _0x2e6cae++
    ) {
      var _0x2f6db2;
      let _0x48e5ca =
        (_0x2f6db2 = _0x27f5bd.tableRows[_0x5e9479]) == null
          ? undefined
          : _0x2f6db2.tableCells[_0x2e6cae];
      if (!_0x48e5ca) return null;
      _0x48e5ca.vAlign !== _0x121bd6.value &&
        _0x2d812d.push(
          _0x48e5ca.vAlign === undefined
            ? _0x325685.insertOp(
                [
                  "tableSource",
                  _0x121bd6.tableId,
                  "tableRows",
                  _0x5e9479,
                  "tableCells",
                  _0x2e6cae,
                  "vAlign",
                ],
                _0x121bd6.value,
              )
            : _0x325685.replaceOp(
                [
                  "tableSource",
                  _0x121bd6.tableId,
                  "tableRows",
                  _0x5e9479,
                  "tableCells",
                  _0x2e6cae,
                  "vAlign",
                ],
                _0x48e5ca.vAlign,
                _0x121bd6.value,
              ),
        );
    }
  return _0x2d812d.reduce(
    (_0xe67ac0, _0x5d7951) => e.JSONX["compose"](_0xe67ac0, _0x5d7951),
    null,
  );
}
function yi(_0x573a4b) {
  return {
    startRow: Math.min(_0x573a4b.startRow, _0x573a4b.endRow),
    endRow: Math.max(_0x573a4b.startRow, _0x573a4b.endRow),
    startColumn: Math.min(_0x573a4b.startColumn, _0x573a4b.endColumn),
    endColumn: Math.max(_0x573a4b.startColumn, _0x573a4b.endColumn),
  };
}
const bi = {
    id: "docs-table.command.sort-table",
    type: e.CommandType["COMMAND"],
    handler: async (_0x5f0886, _0x2937d3) => {
      if (!_0x2937d3) return false;
      let _0x3375c6 = _0x5f0886.get(e.IUniverInstanceService),
        _0x108d54 = _0x5f0886.get(e.ICommandService),
        _0x2d6971 = _0x5f0886.get(K),
        _0x50a0f6 = _0x5f0886.get(q),
        _0x462093 = _0x3375c6.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0xb72d89 = _0x2d6971.getCurrentSelection(),
        _0x829249 =
          _0x2937d3.tableId ??
          (_0xb72d89 == null ? undefined : _0xb72d89.tableId),
        _0x19c307 =
          _0x2937d3.column ??
          (_0xb72d89 == null ? undefined : _0xb72d89.startColumn);
      if (!_0x462093 || !_0x829249 || _0x19c307 == null) return false;
      let _0x2175aa = _0x462093.getSnapshot(),
        _0x52b5e0 = P(_0x2937d3, _0xb72d89),
        _0x11b24f = I(_0x462093, _0x52b5e0);
      if (!_0x11b24f) return false;
      let _0x4830ca = an(
        _0x11b24f,
        _0x50a0f6.serialize(_0x462093.getUnitId()),
        _0x829249,
        _0x19c307,
        _0x2937d3.direction,
        H(_0x2175aa, _0x52b5e0),
      );
      return V(_0x108d54, _0x462093.getUnitId(), _0x11b24f, _0x4830ca);
    },
  },
  xi = {
    id: "docs-table.command.unmerge-cells",
    type: e.CommandType["COMMAND"],
    handler: async (_0x526a69, _0x7a9b87) => {
      let _0x3f1bd9 = _0x526a69.get(e.IUniverInstanceService),
        _0x3486c5 = _0x526a69.get(e.ICommandService),
        _0x217c96 = _0x526a69.get(K),
        _0xd033cc = _0x3f1bd9.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x4e1dd4 = _0x217c96.getStableTableSelection(),
        _0x53cca0 =
          (_0x7a9b87 == null ? undefined : _0x7a9b87.tableId) ??
          (_0x4e1dd4 == null ? undefined : _0x4e1dd4.tableId),
        _0x11e8b2 = F(_0x7a9b87, _0x4e1dd4);
      if (!_0xd033cc || !_0x53cca0 || !_0x11e8b2) return false;
      let _0x567288 = P(_0x7a9b87, _0x4e1dd4),
        _0x3d455c = I(_0xd033cc, _0x567288);
      if (!_0x3d455c || !b(_0x3d455c, _0x53cca0, _0x11e8b2)) return false;
      let _0x526c7b = ne({
        documentData: _0x3d455c,
        tableId: _0x53cca0,
        ..._0x11e8b2,
      });
      if (!_0x526c7b) return false;
      let _0x106244 = V(
        _0x3486c5,
        _0xd033cc.getUnitId(),
        _0x3d455c,
        _0x526c7b.actions,
        { tableId: _0x53cca0, segmentId: _0x567288, ..._0x526c7b.range },
      );
      return (
        _0x106244 &&
          _0x217c96.setStructuralSelection({
            kind: "range",
            tableId: _0x53cca0,
            segmentId: _0x567288,
            ..._0x526c7b.range,
          }),
        _0x106244
      );
    },
  };
function Si(_0x4ddad0) {
  let _0x1cf4e9 = new DOMParser().parseFromString(_0x4ddad0, "text/html");
  return Array.from(_0x1cf4e9.querySelectorAll("table")).map((_0xebdccc) =>
    Di(_0xebdccc),
  );
}
function Ci(_0x4e3479) {
  if (!_0x4e3479.includes("\x09")) return null;
  let _0x5dbe20 = _0x4e3479.split(/\r\n|\r|\n/);
  return (
    _0x5dbe20[_0x5dbe20.length - 1] === "" && _0x5dbe20.pop(),
    _0x5dbe20.length === 0
      ? null
      : "<table><tbody>" +
        _0x5dbe20
          .map(
            (_0x2d1416) =>
              "<tr>" +
              _0x2d1416
                .split("\x09")
                .map((_0x4c0bad) => "<td>" + Li(_0x4c0bad) + "</td>")
                .join("") +
              "</tr>",
          )
          .join("") +
        "</tbody></table>"
  );
}
function wi(_0x2bc24b) {
  var _0x5e65b4;
  let _0x5343c3 = i(_0x2bc24b.documentData, _0x2bc24b.tableId),
    _0x53e048 =
      (_0x5e65b4 = _0x2bc24b.documentData["body"]) == null
        ? undefined
        : _0x5e65b4.dataStream;
  if (!_0x5343c3 || !_0x53e048)
    throw Error("[DocsTable]: Table " + _0x2bc24b.tableId + " is not found.");
  let _0x2024be = Oi(_0x2bc24b),
    _0x88408e = [];
  for (
    let _0x23fc4f = _0x2024be.startRow;
    _0x23fc4f <= _0x2024be.endRow;
    _0x23fc4f++
  ) {
    let _0x296d3a = [];
    for (
      let _0x301a4c = _0x2024be.startColumn;
      _0x301a4c <= _0x2024be.endColumn;
      _0x301a4c++
    ) {
      var _0x2a88f6;
      let _0x2c3eff =
        (_0x2a88f6 = _0x5343c3.rows[_0x23fc4f]) == null
          ? undefined
          : _0x2a88f6.cells[_0x301a4c];
      _0x296d3a.push(
        _0x2c3eff
          ? ki(_0x53e048, _0x2c3eff.startOffset, _0x2c3eff.endOffset)
          : "",
      );
    }
    _0x88408e.push(_0x296d3a);
  }
  return _0x88408e.map((_0x44228c) => _0x44228c.join("\x09")).join("\x0a");
}
function Ti(_0x1ddeb2, _0x197bdb = ["body"]) {
  var _0x3d3abf;
  let _0x861f6f = i(_0x1ddeb2.documentData, _0x1ddeb2.tableId);
  if (
    !_0x861f6f ||
    !(
      (_0x3d3abf = _0x1ddeb2.documentData["body"]) != null &&
      _0x3d3abf.dataStream
    )
  )
    throw Error(
      "[DocsTable]: Table " + _0x1ddeb2.tableId + "\x20is\x20not\x20found.",
    );
  let _0x12a8a2 = _0x1ddeb2.text["split"](/\r\n|\r|\n/).map((_0x305957) =>
      _0x305957.split("\x09"),
    ),
    _0x571b7a = [];
  for (let _0xf4fa = 0; _0xf4fa < _0x12a8a2.length; _0xf4fa++)
    for (
      let _0x327c49 = 0;
      _0x327c49 < _0x12a8a2[_0xf4fa].length;
      _0x327c49++
    ) {
      var _0x1ff8fb;
      let _0x107648 =
        (_0x1ff8fb = _0x861f6f.rows[_0x1ddeb2.startRow + _0xf4fa]) == null
          ? undefined
          : _0x1ff8fb.cells[_0x1ddeb2.startColumn + _0x327c49];
      _0x107648 &&
        _0x571b7a.push({
          startOffset: _0x107648.startOffset + 1,
          endOffset: _0x107648.endOffset,
          text: _0x12a8a2[_0xf4fa][_0x327c49] + "\x0d\x0a",
        });
    }
  return M(_0x1ddeb2.documentData, _0x571b7a, _0x197bdb);
}
function Ei(_0x5da317) {
  let _0x4dd102 = new DOMParser()
    .parseFromString(_0x5da317, "text/html")
    .querySelector("table");
  return _0x4dd102 ? Di(_0x4dd102) : { rows: [], columnWidths: [] };
}
function Di(_0x47f29f) {
  let _0x2bd1a0 = Array.from(_0x47f29f.querySelectorAll("col")).map(
      (_0x7a8925) =>
        ji(
          _0x7a8925.getAttribute("width"),
          _0x7a8925.getAttribute("style"),
          "width",
        ),
    ),
    _0x279c48 = [],
    _0x4c1039 = new Map();
  Array.from(_0x47f29f.querySelectorAll("tr")).forEach(
    (_0x1ae334, _0x4e39c5) => {
      let _0x41451c = {
          cells: [],
          height: ji(
            _0x1ae334.getAttribute("height"),
            _0x1ae334.getAttribute("style"),
            "height",
          ),
        },
        _0x432066 = 0;
      for (
        Array.from(_0x1ae334.children)
          .filter(
            (_0x23283a) =>
              _0x23283a.tagName["toLowerCase"]() === "td" ||
              _0x23283a.tagName["toLowerCase"]() === "th",
          )
          .forEach((_0x25196) => {
            for (; _0x4c1039.has(_0x4e39c5 + ":" + _0x432066);)
              ((_0x41451c.cells[_0x432066] = null), _0x432066++);
            let _0x38abd6 = Math.max(
                1,
                Number(_0x25196.getAttribute("rowspan") ?? 1),
              ),
              _0x31a224 = Math.max(
                1,
                Number(_0x25196.getAttribute("colspan") ?? 1),
              ),
              _0x465cd1 = _0x25196.getAttribute("style") ?? "";
            _0x41451c.cells[_0x432066] = {
              html: _0x25196.innerHTML,
              text: Ai(_0x25196.textContent ?? ""),
              rowSpan: _0x38abd6,
              colSpan: _0x31a224,
              backgroundColor:
                Mi(_0x465cd1, "background-color") ??
                Mi(_0x465cd1, "background"),
              borderColor: Pi(_0x465cd1),
              borderWidth: Fi(_0x465cd1),
            };
            let _0x2461d1 = ji(
              _0x25196.getAttribute("width"),
              _0x465cd1,
              "width",
            );
            _0x2461d1 != null &&
              _0x2bd1a0[_0x432066] == null &&
              (_0x2bd1a0[_0x432066] = _0x2461d1);
            for (let _0x1189d5 = 0; _0x1189d5 < _0x38abd6; _0x1189d5++)
              for (let _0x51d7fd = 0; _0x51d7fd < _0x31a224; _0x51d7fd++)
                (_0x1189d5 !== 0 || _0x51d7fd !== 0) &&
                  _0x4c1039.set(
                    _0x4e39c5 + _0x1189d5 + ":" + (_0x432066 + _0x51d7fd),
                    true,
                  );
            for (let _0x57368d = 1; _0x57368d < _0x31a224; _0x57368d++)
              _0x41451c.cells[_0x432066 + _0x57368d] = null;
            _0x432066 += _0x31a224;
          });
        _0x41451c.cells["length"] < _0x2bd1a0.length;
      )
        _0x41451c.cells["push"](null);
      _0x279c48.push(_0x41451c);
    },
  );
  let _0x3390fe = Math.max(
    _0x2bd1a0.length,
    ..._0x279c48.map((_0x193e7b) => _0x193e7b.cells["length"]),
  );
  for (; _0x2bd1a0.length < _0x3390fe;) _0x2bd1a0.push(undefined);
  return (
    _0x279c48.forEach((_0x485a89) => {
      for (; _0x485a89.cells["length"] < _0x3390fe;)
        _0x485a89.cells["push"](null);
    }),
    { columnWidths: _0x2bd1a0, rows: _0x279c48 }
  );
}
function Oi(_0x17abc1) {
  return {
    startRow: Math.min(_0x17abc1.startRow, _0x17abc1.endRow),
    endRow: Math.max(_0x17abc1.startRow, _0x17abc1.endRow),
    startColumn: Math.min(_0x17abc1.startColumn, _0x17abc1.endColumn),
    endColumn: Math.max(_0x17abc1.startColumn, _0x17abc1.endColumn),
  };
}
function ki(_0x2de7c3, _0x3b2250, _0x1c0df1) {
  return _0x2de7c3
    .slice(_0x3b2250 + 1, _0x1c0df1)
    .replace(/\r/g, "\x0a")
    .replace(/[\x00-\x08\v\f\x0E-\x1F]/g, "")
    .replace(/\n+$/, "");
}
function Ai(_0x54d6ca) {
  return _0x54d6ca
    .replace(/\u00A0/g, "\x20")
    .replace(/\s+/g, "\x20")
    .trim();
}
function ji(_0x403239, _0x2c1441, _0x1d028c) {
  let _0x352125 =
    _0x2c1441 == null
      ? undefined
      : _0x2c1441.match(
          RegExp(_0x1d028c + "\\s*:\\s*([0-9.]+)\\s*(px|pt|in|cm|mm)?", "i"),
        );
  if (_0x352125) return Ii(Number(_0x352125[1]), _0x352125[2]);
  if (!_0x403239) return;
  let _0x5dcb28 = _0x403239.match(/([0-9.]+)\s*(px|pt|in|cm|mm)?/i);
  return _0x5dcb28 ? Ii(Number(_0x5dcb28[1]), _0x5dcb28[2]) : undefined;
}
function Mi(_0x3d255f, _0x54cdb4) {
  var _0x3b61f3;
  let _0x130c45 = _0x3d255f.match(RegExp(_0x54cdb4 + "\\s*:\\s*([^;]+)", "i"));
  return _0x130c45 == null || (_0x3b61f3 = _0x130c45[1]) == null
    ? undefined
    : _0x3b61f3.trim();
}
function Ni(_0x3aa9e7) {
  var _0x163d95;
  return (_0x163d95 = _0x3aa9e7
    .split(";")
    .map((_0x2fe82c) => _0x2fe82c.trim())
    .find((_0x254b57) => /^border(?:-[a-z]+)?\s*:/i.test(_0x254b57))) == null
    ? undefined
    : _0x163d95.replace(/^border(?:-[a-z]+)?\s*:\s*/i, "").trim();
}
function Pi(_0x4558f4) {
  var _0x11a3d5;
  let _0x5a4a4f = Mi(_0x4558f4, "border-color");
  if (_0x5a4a4f) return _0x5a4a4f;
  let _0x5e03ec = Ni(_0x4558f4);
  return (
    (_0x5e03ec == null ||
    (_0x11a3d5 = _0x5e03ec.match(/#[0-9a-f]{3,8}|rgb\([^)]+\)/i)) == null
      ? undefined
      : _0x11a3d5[0]) ||
    (_0x5e03ec == null
      ? undefined
      : _0x5e03ec
          .split(/\s+/)
          .find(
            (_0x1ad0ae) =>
              /^[a-z]+$/i.test(_0x1ad0ae) &&
              !["solid", "dashed", "dotted", "double", "none"].includes(
                _0x1ad0ae.toLowerCase(),
              ),
          ))
  );
}
function Fi(_0x1a73b9) {
  var _0x154af2;
  let _0x516300 = ji(null, Mi(_0x1a73b9, "border-width") ?? null, "width");
  if (_0x516300 != null) return _0x516300;
  let _0x12838f =
    (_0x154af2 = Ni(_0x1a73b9)) == null
      ? undefined
      : _0x154af2.match(/([0-9.]+)\s*(px|pt|in|cm|mm)/i);
  return _0x12838f ? Ii(Number(_0x12838f[1]), _0x12838f[2]) : undefined;
}
function Ii(_0x4f844a, _0x536826) {
  switch (_0x536826 == null ? undefined : _0x536826.toLowerCase()) {
    case "pt":
      return Q((_0x4f844a * 4) / 3);
    case "in":
      return Q(_0x4f844a * 96);
    case "cm":
      return Q((_0x4f844a * 96) / 2.54);
    case "mm":
      return Q((_0x4f844a * 96) / 25.4);
    default:
      return Q(_0x4f844a);
  }
}
function Q(_0x176fb0) {
  return Math.round(_0x176fb0 * 100) / 100;
}
function Li(_0x4d820a) {
  return _0x4d820a
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\r?\n/g, "<br>");
}
const Ri = "DOC_TABLE_PLUGIN";
var zi = "@univerjs-pro/docs-table",
  Bi = "1.0.0-insiders.20260907-70fc579";
const Vi = {
    id: "docs-table.command.copy-selection",
    type: e.CommandType["COMMAND"],
    handler: async (_0x45ee56, _0x50bba8) => {
      let _0x318256 = _0x45ee56.get(e.IUniverInstanceService),
        _0x5ec81d = _0x45ee56.get(K),
        _0x4b6a13 = _0x318256.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x176b6a = _0x5ec81d.getCurrentSelection(),
        _0x2c7c16 =
          (_0x50bba8 == null ? undefined : _0x50bba8.tableId) ??
          (_0x176b6a == null ? undefined : _0x176b6a.tableId),
        _0x4e6cf6 = F(_0x50bba8, _0x176b6a);
      if (!_0x4b6a13 || !_0x2c7c16 || !_0x4e6cf6) return false;
      let _0x119e57 = I(_0x4b6a13, P(_0x50bba8, _0x176b6a));
      return _0x119e57
        ? wi({ documentData: _0x119e57, tableId: _0x2c7c16, ..._0x4e6cf6 })
        : false;
    },
  },
  Hi = {
    id: "docs-table.command.paste-without-formatting",
    type: e.CommandType["COMMAND"],
    handler: async (_0x2bc428, _0x268e1a) => {
      if (!_0x268e1a) return false;
      let _0x3ff413 = _0x2bc428.get(e.IUniverInstanceService),
        _0x284b55 = _0x2bc428.get(e.ICommandService),
        _0x43da5e = _0x2bc428.get(K),
        _0x17d28d = _0x3ff413.getCurrentUnitOfType(
          e.UniverInstanceType["UNIVER_DOC"],
        ),
        _0x267391 = _0x43da5e.getCurrentSelection(),
        _0xd461c0 =
          _0x268e1a.tableId ??
          (_0x267391 == null ? undefined : _0x267391.tableId),
        _0x411209 = F(_0x268e1a, _0x267391);
      if (!_0x17d28d || !_0xd461c0 || !_0x411209) return false;
      let _0x4fb087 = _0x17d28d.getSnapshot(),
        _0x31f679 = P(_0x268e1a, _0x267391),
        _0x57f872 = I(_0x17d28d, _0x31f679);
      if (!_0x57f872) return false;
      let _0x32043f = Ti(
        {
          documentData: _0x57f872,
          tableId: _0xd461c0,
          ..._0x411209,
          text: _0x268e1a.text,
        },
        H(_0x4fb087, _0x31f679),
      );
      return V(
        _0x284b55,
        _0x17d28d.getUnitId(),
        _0x57f872,
        _0x32043f,
        undefined,
        undefined,
        undefined,
        t.DocHistoryAction["EditTableCell"],
      );
    },
  },
  Ui = {};
let Wi = class extends e.Disposable {
  constructor(_0x111a0e, _0x2d50e3) {
    (super(),
      (this._resourceManagerService = _0x111a0e),
      (this._docsTableModel = _0x2d50e3),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: Ri,
        businesses: [e.UniverInstanceType["UNIVER_DOC"]],
        toJson: (_0x89da36) =>
          JSON.stringify(this._docsTableModel["serialize"](_0x89da36)),
        parseJson: (_0x13c980) => O(JSON.parse(_0x13c980)),
        onLoad: (_0x3f6ee8, _0x2ffc69) =>
          this._docsTableModel["deserialize"](_0x3f6ee8, _0x2ffc69),
        onUnLoad: (_0x5f5262) => this._docsTableModel["removeUnit"](_0x5f5262),
      }),
    );
  }
};
Wi = Nn([G(0, e.IResourceManagerService), G(1, (0, e.Inject)(q))], Wi);
let $ = class extends e.Plugin {
  constructor(_0x5d372e = Ui, _0x14e8e4, _0x47ed7a, _0x188acd) {
    (super(),
      (this._config = _0x5d372e),
      (this._injector = _0x14e8e4),
      (this._commandService = _0x47ed7a),
      (this._configService = _0x188acd));
    let { ..._0x5f1d50 } = (0, e.merge)({}, Ui, this._config);
    this._configService["setConfig"]("docs-table.config", _0x5f1d50);
  }
  onStarting() {
    (this._injector["add"]([q]),
      this._injector["add"]([Wi]),
      this._injector["add"]([K]),
      this._injector["get"](q),
      this._injector["get"](Wi),
      this._injector["get"](K),
      this._initCommands());
  }
  _initCommands() {
    [
      Vi,
      Un,
      Wn,
      Gn,
      Kn,
      qn,
      Jn,
      Xn,
      Ar,
      Nr,
      Pr,
      Fr,
      Ir,
      Lr,
      Hi,
      Rr,
      zr,
      Br,
      Vr,
      Hr,
      mi,
      li,
      di,
      pi,
      hi,
      bi,
      xi,
    ].forEach((_0x4f2b06) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x4f2b06)),
    );
  }
};
(W($, "pluginName", Ri),
  W($, "packageName", zi),
  W($, "version", Bi),
  W($, "type", e.UniverInstanceType["UNIVER_DOC"]),
  ($ = Nn(
    [
      (0, e.DependentOn)(r.UniverLicensePlugin, t.UniverDocsPlugin),
      G(1, (0, e.Inject)(e.Injector)),
      G(2, e.ICommandService),
      G(3, e.IConfigService),
    ],
    $,
  )),
  (exports.DEFAULT_DOCS_TABLE_CELL_MARGIN = Zn),
  (exports.DOCS_TABLE_PLUGIN = Ri),
  (exports.DocsTableBorderPreset = qr),
  (exports.DocsTableColumnInsertPosition = Te),
  (exports.DocsTableColumnType = kt),
  (exports.DocsTableDeleteColumnsCommand = Un),
  (exports.DocsTableDeleteRowsCommand = Wn),
  (exports.DocsTableDeleteTableCommand = Gn),
  (exports.DocsTableDistributeColumnsCommand = Kn),
  (exports.DocsTableDistributeRowsCommand = qn),
  (exports.DocsTableInsertColumnsCommand = Jn),
  (exports.DocsTableInsertPosition = Ce),
  (exports.DocsTableInsertRowsCommand = Xn),
  (exports.DocsTableInsertTableCommand = Ar),
  (exports.DocsTableInsertTablePosition = rr),
  (exports.DocsTableInsertTitleRowCommand = Nr),
  (exports.DocsTableMergeCellsCommand = Pr),
  (exports.DocsTableModel = q),
  (exports.DocsTableMoveColumnsCommand = Fr),
  (exports.DocsTableMoveRowsCommand = Ir),
  (exports.DocsTableMoveTableCommand = Lr),
  (exports.DocsTableResizeColumnCommand = Rr),
  (exports.DocsTableResizeRowCommand = zr),
  (exports.DocsTableRowInsertPosition = we),
  (exports.DocsTableSelectionKind = At),
  Object.defineProperty(exports, "DocsTableSelectionService", {
    enumerable: true,
    get: function () {
      return K;
    },
  }),
  (exports.DocsTableSelectionSource = jt),
  (exports.DocsTableSetColumnTypeCommand = Br),
  (exports.DocsTableSetHeaderRowCountCommand = Vr),
  (exports.DocsTableSetTableBackgroundCommand = Hr),
  (exports.DocsTableSetTableBorderColorCommand = li),
  (exports.DocsTableSetTableBorderCommand = mi),
  (exports.DocsTableSetTableBorderStyleCommand = di),
  (exports.DocsTableSetTableBorderWidthCommand = pi),
  (exports.DocsTableSetTableVerticalAlignCommand = hi),
  (exports.DocsTableSortDirection = Mt),
  (exports.DocsTableSortTableCommand = bi),
  (exports.DocsTableUnmergeCellsCommand = xi),
  Object.defineProperty(exports, "UniverDocsTablePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.buildDeleteColumnsActions = ke),
  (exports.buildDeleteRowsActions = Oe),
  (exports.buildDeleteTableActions = Ae),
  (exports.buildDeleteTableColumnsMutationActions = tn),
  (exports.buildDeleteTableMutationActions = gn),
  (exports.buildDeleteTableRowsMutationActions = hn),
  (exports.buildDistributeColumnsActions = gt),
  (exports.buildDistributeRowsActions = ht),
  (exports.buildDistributeTableColumnsMutationActions = Jt),
  (exports.buildDistributeTableRowsMutationActions = qt),
  (exports.buildInsertColumnsActions = De),
  (exports.buildInsertRowsActions = Ee),
  (exports.buildInsertTableColumnsMutationActions = Xt),
  (exports.buildInsertTableRowsMutationActions = pn),
  (exports.buildInsertTableTitleRowMutationActions = mn),
  (exports.buildInsertTitleRowActions = pt),
  (exports.buildMergeCellsActions = ee),
  (exports.buildMergeCellsMutationActions = x),
  (exports.buildMoveColumnsActions = Me),
  (exports.buildMoveFloatingTableMutationActions = Ut),
  (exports.buildMoveRowsActions = je),
  (exports.buildMoveTableActions = yt),
  (exports.buildMoveTableColumnsMutationActions = rn),
  (exports.buildMoveTableRowsMutationActions = nn),
  (exports.buildMoveTableToOffsetMutationActions = Wt),
  (exports.buildPastePlainTextTableMutationActions = Ti),
  (exports.buildResizeColumnActions = vt),
  (exports.buildResizeRowActions = _t),
  (exports.buildResizeTableColumnActionsFromWidth = Ht),
  (exports.buildResizeTableRowActionsFromHeight = Kt),
  (exports.buildSetHeaderRowCountActions = mt),
  (exports.buildSetTableBackgroundMutationActions = Wr),
  (exports.buildSetTableBorderActions = Yr),
  (exports.buildSetTableBorderMutationActions = Xr),
  (exports.buildSetTableCellBackgroundActions = Zr),
  (exports.buildSetTableCellMarginMutationActions = Qn),
  (exports.buildSetTableCellTextActions = it),
  (exports.buildSetTableCellTextMutationActions = rt),
  (exports.buildSetTableDefaultCellMarginMutationActions = $n),
  (exports.buildSetTableHeaderRowCountMutationActions = Yt),
  (exports.buildSortTableActions = Nt),
  (exports.buildSortTableMutationActions = an),
  (exports.buildUnmergeCellsActions = te),
  (exports.buildUnmergeCellsMutationActions = ne),
  (exports.canMergeCells = y),
  (exports.canUnmergeCells = b),
  (exports.convertPlainTextTableToHtml = Ci),
  (exports.executeRichTextTableActions = V),
  (exports.getTableActionBodyPath = H),
  (exports.getTableRangeById = i),
  (exports.parseHtmlTableClipboard = Ei),
  (exports.parseHtmlTablesClipboard = Si));
