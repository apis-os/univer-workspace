import {
  BooleanNumber as _0x572b43,
  CommandType as _0x499278,
  DOC_RANGE_TYPE as _0x4e1d48,
  DashStyleType as _0x2b42bd,
  DataStreamTreeTokenType as _0x597d36,
  DependentOn as _0x40ea14,
  Disposable as _0x3665ea,
  DocumentFlavor as _0x429b71,
  ICommandService as _0x1bfcad,
  IConfigService as _0x333dfb,
  IResourceManagerService as _0x440995,
  IUniverInstanceService as _0x4b52ad,
  Inject as _0x84807d,
  Injector as _0x451d5f,
  JSONX as _0x33f29e,
  ObjectRelativeFromH as _0x374c11,
  ObjectRelativeFromV as _0x32e543,
  Plugin as _0x30c7af,
  TableAlignmentType as _0xcd53c6,
  TableRowHeightRule as _0x51ca5c,
  TableSizeType as _0x212251,
  TableTextWrapType as _0x1535f4,
  TextX as _0x4502e7,
  Tools as _0x27aca5,
  UniverInstanceType as _0xd44303,
  containsInteriorInsertionOffset as _0x480210,
  createParagraphId as _0x2794f4,
  createSectionId as _0x4c7466,
  generateRandomId as _0x145c7c,
  getBlockRangeInterval as _0x5b5068,
  getBodySliceForTextXAction as _0x37c705,
  getCustomBlockIdsInSelections as _0x4560fb,
  getParagraphContentStartOffset as _0x3d2f94,
  getTableCellTokenInterval as _0x5e3722,
  getTableRangeInterval as _0x381012,
  getTableRowTokenInterval as _0x5070a3,
  merge as _0x62c47f,
} from "@univerjs/core";
import {
  DocHistoryAction as _0x336267,
  DocSelectionManagerService as _0x10d55c,
  RichTextEditingMutation as _0x179fcc,
  UniverDocsPlugin as _0x4f9831,
  getContentInsertRange as _0x2c7fb3,
} from "@univerjs/docs";
import { Subject as _0x5cb647 } from "rxjs";
import { UniverLicensePlugin as _0x5e8b08 } from "@univerjs-pro/license";
function w(_0x5c63a6, _0x135581) {
  var _0x434f04, _0x452fed, _0x1d8299;
  let _0x52b104 =
      (_0x434f04 = _0x5c63a6.body) == null ||
      (_0x434f04 = _0x434f04.tables) == null
        ? undefined
        : _0x434f04.find((_0x54f9fc) => _0x54f9fc.tableId === _0x135581),
    _0x3c8a4f =
      (_0x452fed = _0x5c63a6.tableSource) == null
        ? undefined
        : _0x452fed[_0x135581],
    _0xb645d =
      (_0x1d8299 = _0x5c63a6.body) == null ? undefined : _0x1d8299.dataStream;
  if (!_0x52b104 || !_0x3c8a4f || !_0xb645d) return null;
  let _0x18073d = _0x381012(_0x52b104);
  return _0xb645d[_0x18073d.startOffset] !== _0x597d36.TABLE_START ||
    _0xb645d[_0x18073d.endOffset - 1] !== _0x597d36.TABLE_END
    ? null
    : xe(
        _0xb645d,
        _0x18073d.startOffset,
        _0x18073d.endOffset,
        _0x135581,
        _0x3c8a4f,
      );
}
function T(_0xc2700f, _0x42c1cc) {
  let _0x414fb8 = _0xc2700f.rows[_0x42c1cc];
  if (!_0x414fb8)
    throw Error("[DocsTable]: Row " + _0x42c1cc + " is out of range.");
  return _0x414fb8;
}
function be(_0x2af50e, _0xaca319) {
  let _0x364522 = _0x2af50e.rows["map"](
    (_0x10806a) => _0x10806a.cells[_0xaca319],
  ).filter(Boolean);
  if (_0x364522.length === 0)
    throw Error(
      "[DocsTable]: Column " + _0xaca319 + "\x20is\x20out\x20of\x20range.",
    );
  return {
    column: _0xaca319,
    startOffset: _0x364522[0].startOffset,
    endOffset: _0x364522[_0x364522.length - 1].endOffset,
    cells: _0x364522,
  };
}
function xe(_0x1426e2, _0x284603, _0x124323, _0x1e85c3, _0x42a8df) {
  var _0x49e973;
  let _0x16569a = [];
  for (let _0x295717 = _0x284603 + 1; _0x295717 < _0x124323 - 1;) {
    let _0x13f85f = _0x5070a3(_0x1426e2, _0x295717);
    if (!_0x13f85f || _0x13f85f.endOffset > _0x124323) return null;
    let _0x229167 = {
      row: _0x16569a.length,
      startOffset: _0x13f85f.startOffset,
      endOffset: _0x13f85f.endOffset - 1,
      cells: [],
    };
    for (
      let _0x3f6d93 = _0x13f85f.startOffset + 1;
      _0x3f6d93 < _0x13f85f.endOffset - 1;
    ) {
      let _0x45c379 = _0x5e3722(_0x1426e2, _0x3f6d93);
      if (!_0x45c379 || _0x45c379.endOffset > _0x13f85f.endOffset) return null;
      (_0x229167.cells["push"]({
        row: _0x229167.row,
        column: _0x229167.cells["length"],
        startOffset: _0x45c379.startOffset,
        endOffset: _0x45c379.endOffset - 1,
      }),
        (_0x3f6d93 = _0x45c379.endOffset));
    }
    (_0x16569a.push(_0x229167), (_0x295717 = _0x13f85f.endOffset));
  }
  return _0x16569a.length !== _0x42a8df.tableRows["length"] ||
    _0x16569a.some((_0x138115, _0xe372cf) => {
      var _0x520c1a;
      return (
        _0x138115.cells["length"] !==
        ((_0x520c1a = _0x42a8df.tableRows[_0xe372cf]) == null
          ? undefined
          : _0x520c1a.tableCells["length"])
      );
    })
    ? null
    : {
        tableId: _0x1e85c3,
        startOffset: _0x284603,
        endOffset: _0x124323,
        rowCount: _0x16569a.length,
        columnCount:
          ((_0x49e973 = _0x16569a[0]) == null
            ? undefined
            : _0x49e973.cells["length"]) ?? 0,
        tableSource: _0x42a8df,
        rows: _0x16569a,
      };
}
function Se(_0x13a482, _0x1c80f0, _0x5b3790) {
  if (!_0x13a482 || _0x13a482.tableId !== _0x5b3790.tableId) return _0x13a482;
  if (_0x5b3790.kind === "delete-table") return null;
  let _0x202607 = w(_0x1c80f0, _0x13a482.tableId);
  if (!_0x202607) return null;
  let _0x29f98f = { ..._0x13a482 };
  if (_0x5b3790.kind === "insert-rows")
    ((_0x29f98f.startRow = Ce(
      _0x29f98f.startRow,
      _0x5b3790.index,
      _0x5b3790.count,
    )),
      (_0x29f98f.endRow = Ce(
        _0x29f98f.endRow,
        _0x5b3790.index,
        _0x5b3790.count,
      )));
  else {
    if (_0x5b3790.kind === "insert-columns")
      ((_0x29f98f.startColumn = Ce(
        _0x29f98f.startColumn,
        _0x5b3790.index,
        _0x5b3790.count,
      )),
        (_0x29f98f.endColumn = Ce(
          _0x29f98f.endColumn,
          _0x5b3790.index,
          _0x5b3790.count,
        )));
    else {
      if (_0x5b3790.kind === "delete-rows") {
        let [_0x28297f, _0x37babc] = we(
          _0x29f98f.startRow,
          _0x29f98f.endRow,
          _0x5b3790.index,
          _0x5b3790.count,
        );
        ((_0x29f98f.startRow = _0x28297f), (_0x29f98f.endRow = _0x37babc));
      } else {
        if (_0x5b3790.kind === "delete-columns") {
          let [_0x4f79d4, _0x41c5a6] = we(
            _0x29f98f.startColumn,
            _0x29f98f.endColumn,
            _0x5b3790.index,
            _0x5b3790.count,
          );
          ((_0x29f98f.startColumn = _0x4f79d4),
            (_0x29f98f.endColumn = _0x41c5a6));
        }
      }
    }
  }
  let _0x322a66 =
      _0x5b3790.kind === "insert-rows"
        ? _0x202607.rowCount + _0x5b3790.count
        : Math.max(
            1,
            _0x202607.rowCount -
              (_0x5b3790.kind === "delete-rows" ? _0x5b3790.count : 0),
          ),
    _0x203ea9 =
      _0x5b3790.kind === "insert-columns"
        ? _0x202607.columnCount + _0x5b3790.count
        : Math.max(
            1,
            _0x202607.columnCount -
              (_0x5b3790.kind === "delete-columns" ? _0x5b3790.count : 0),
          );
  return (
    (_0x29f98f.startRow = Te(_0x29f98f.startRow, 0, _0x322a66 - 1)),
    (_0x29f98f.endRow = Te(_0x29f98f.endRow, 0, _0x322a66 - 1)),
    (_0x29f98f.startColumn = Te(_0x29f98f.startColumn, 0, _0x203ea9 - 1)),
    (_0x29f98f.endColumn = Te(_0x29f98f.endColumn, 0, _0x203ea9 - 1)),
    _0x29f98f.startRow > _0x29f98f.endRow &&
      (_0x29f98f.endRow = _0x29f98f.startRow),
    _0x29f98f.startColumn > _0x29f98f.endColumn &&
      (_0x29f98f.endColumn = _0x29f98f.startColumn),
    _0x29f98f
  );
}
function Ce(_0x166516, _0x3f97e6, _0x40dc55) {
  return _0x166516 >= _0x3f97e6 ? _0x166516 + _0x40dc55 : _0x166516;
}
function we(_0x5c99ab, _0x31befc, _0x1043c8, _0x4f0008) {
  let _0x465a70 = _0x1043c8 + _0x4f0008 - 1;
  if (_0x31befc < _0x1043c8) return [_0x5c99ab, _0x31befc];
  if (_0x5c99ab > _0x465a70)
    return [_0x5c99ab - _0x4f0008, _0x31befc - _0x4f0008];
  let _0x4758ed = _0x5c99ab < _0x1043c8 ? _0x5c99ab : _0x1043c8,
    _0x4a557e = Math.min(_0x31befc, _0x465a70) - _0x1043c8 + 1;
  return [_0x4758ed, Math.max(_0x4758ed, _0x31befc - _0x4a557e)];
}
function Te(_0x592a22, _0x1dfe04, _0x1e3be1) {
  return Math.min(Math.max(_0x592a22, _0x1dfe04), _0x1e3be1);
}
function Ee(_0xcb2040) {
  return _0xcb2040;
}
function E(_0xfe5e93, _0x5cf4bf = {}) {
  var _0x1e5870;
  let _0x21a660 = {
    ..._0xfe5e93,
    body:
      _0x5cf4bf.cloneBody === false
        ? _0xfe5e93.body
        : _0xfe5e93.body
          ? De(_0xfe5e93.body)
          : _0xfe5e93.body,
  };
  return (
    (_0x1e5870 = _0x5cf4bf.tableIds) != null &&
      _0x1e5870.length &&
      _0xfe5e93.tableSource &&
      ((_0x21a660.tableSource = { ..._0xfe5e93.tableSource }),
      _0x5cf4bf.tableIds["forEach"]((_0x298dea) => {
        var _0x5f55b5;
        let _0x530b26 =
          (_0x5f55b5 = _0xfe5e93.tableSource) == null
            ? undefined
            : _0x5f55b5[_0x298dea];
        _0x530b26 && (_0x21a660.tableSource[_0x298dea] = Oe(_0x530b26));
      })),
    _0x21a660
  );
}
function De(_0xd2034f) {
  var _0x3bacb1,
    _0x8d369b,
    _0x242363,
    _0x8c70d5,
    _0x4ca8da,
    _0x4ae8da,
    _0x485ae5,
    _0x85ddae,
    _0x425e5d;
  return {
    ..._0xd2034f,
    paragraphs:
      (_0x3bacb1 = _0xd2034f.paragraphs) == null
        ? undefined
        : _0x3bacb1.map((_0x5ebf32) => ({
            ..._0x5ebf32,
            bullet: D(_0x5ebf32.bullet),
            paragraphStyle: D(_0x5ebf32.paragraphStyle),
          })),
    sectionBreaks:
      (_0x8d369b = _0xd2034f.sectionBreaks) == null
        ? undefined
        : _0x8d369b.map((_0x4af081) => ({ ..._0x4af081 })),
    textRuns:
      (_0x242363 = _0xd2034f.textRuns) == null
        ? undefined
        : _0x242363.map((_0x169285) => ({ ..._0x169285 })),
    tables:
      (_0x8c70d5 = _0xd2034f.tables) == null
        ? undefined
        : _0x8c70d5.map((_0x39b15e) => ({ ..._0x39b15e })),
    columnGroups:
      (_0x4ca8da = _0xd2034f.columnGroups) == null
        ? undefined
        : _0x4ca8da.map((_0x34b6f6) => {
            var _0x41810f;
            return {
              ..._0x34b6f6,
              columns:
                (_0x41810f = _0x34b6f6.columns) == null
                  ? undefined
                  : _0x41810f.map((_0x2587ca) => D(_0x2587ca)),
            };
          }),
    blockRanges:
      (_0x4ae8da = _0xd2034f.blockRanges) == null
        ? undefined
        : _0x4ae8da.map((_0x2d123b) => ({ ..._0x2d123b })),
    customRanges:
      (_0x485ae5 = _0xd2034f.customRanges) == null
        ? undefined
        : _0x485ae5.map((_0x123f6f) => ({ ..._0x123f6f })),
    customDecorations:
      (_0x85ddae = _0xd2034f.customDecorations) == null
        ? undefined
        : _0x85ddae.map((_0x5b74a5) => ({ ..._0x5b74a5 })),
    customBlocks:
      (_0x425e5d = _0xd2034f.customBlocks) == null
        ? undefined
        : _0x425e5d.map((_0x283cb3) => ({ ..._0x283cb3 })),
  };
}
function Oe(_0x437e61) {
  return {
    ..._0x437e61,
    dist: D(_0x437e61.dist),
    position: D(_0x437e61.position),
    size: D(_0x437e61.size),
    tableColumns: _0x437e61.tableColumns["map"](ke),
    tableRows: _0x437e61.tableRows["map"](Ae),
  };
}
function ke(_0x257ca2) {
  return { ..._0x257ca2, size: D(_0x257ca2.size) };
}
function Ae(_0x127aac) {
  return {
    ..._0x127aac,
    trHeight: D(_0x127aac.trHeight),
    tableCells: _0x127aac.tableCells["map"]((_0x5601cb) => ({
      ..._0x5601cb,
      backgroundColor: D(_0x5601cb.backgroundColor),
      borderBottom: D(_0x5601cb.borderBottom),
      borderLeft: D(_0x5601cb.borderLeft),
      borderRight: D(_0x5601cb.borderRight),
      borderTop: D(_0x5601cb.borderTop),
      margin: D(_0x5601cb.margin),
    })),
  };
}
function D(_0x17c63d) {
  return Array.isArray(_0x17c63d)
    ? _0x17c63d.map((_0x28cca2) => D(_0x28cca2))
    : !_0x17c63d || typeof _0x17c63d != "object"
      ? _0x17c63d
      : Object.fromEntries(
          Object.entries(_0x17c63d).map(([_0x299e52, _0x4540ba]) => [
            _0x299e52,
            D(_0x4540ba),
          ]),
        );
}
function je(_0x37ce05, _0x17b436, _0xef1697) {
  var _0x4bc488;
  let _0x2f3644 =
    (_0x4bc488 = _0x37ce05.tableSource) == null
      ? undefined
      : _0x4bc488[_0x17b436];
  if (!_0x2f3644 || !Ye(_0xef1697)) return false;
  try {
    return Ze(_0x2f3644, _0xef1697).every(
      (_0x428504) => j(_0x428504) === 1 && M(_0x428504) === 1,
    );
  } catch {
    return false;
  }
}
function Me(_0xd487f7, _0x8f804e, _0x172046) {
  var _0x17b26b;
  let _0x47a860 =
    (_0x17b26b = _0xd487f7.tableSource) == null
      ? undefined
      : _0x17b26b[_0x8f804e];
  if (!_0x47a860) return false;
  let _0x7c5fd3 = null;
  try {
    let _0x206247 = O(_0x172046);
    _0x7c5fd3 = ze(_0x47a860, _0x206247.startRow, _0x206247.startColumn);
  } catch {
    return false;
  }
  return !!_0x7c5fd3 && Ye(_0x7c5fd3);
}
function Ne(_0x9a195a) {
  let _0x3cb300 = O(_0x9a195a);
  if (!je(_0x9a195a.documentData, _0x9a195a.tableId, _0x3cb300))
    throw Error(
      "[DocsTable]: Cannot merge a non-rectangular or already merged selection.",
    );
  let _0x10ad07 = E(_0x9a195a.documentData, {
      cloneBody: false,
      tableIds: [_0x9a195a.tableId],
    }),
    _0x19b304 = Xe(_0x10ad07, _0x9a195a.tableId),
    _0x1f08ae =
      _0x19b304.tableRows[_0x3cb300.startRow].tableCells[_0x3cb300.startColumn];
  return (
    (_0x1f08ae.rowSpan = _0x3cb300.endRow - _0x3cb300.startRow + 1),
    (_0x1f08ae.columnSpan = _0x3cb300.endColumn - _0x3cb300.startColumn + 1),
    A(_0x19b304, _0x3cb300, (_0x49e774, _0x46f61b, _0x20b8db) => {
      (_0x46f61b !== _0x3cb300.startRow ||
        _0x20b8db !== _0x3cb300.startColumn) &&
        ((_0x49e774.rowSpan = 0), (_0x49e774.columnSpan = 0));
    }),
    { nextDocumentData: _0x10ad07, range: _0x3cb300 }
  );
}
function Pe(_0x99c8c9) {
  var _0x299d6d;
  let _0x734519 = O(_0x99c8c9),
    _0x98f714 =
      (_0x299d6d = _0x99c8c9.documentData["tableSource"]) == null
        ? undefined
        : _0x299d6d[_0x99c8c9.tableId];
  if (!_0x98f714 || !je(_0x99c8c9.documentData, _0x99c8c9.tableId, _0x734519))
    return null;
  let _0x5bb924 = [];
  return (
    A(_0x98f714, _0x734519, (_0xa3e9d9, _0x1b2825, _0x123d9b) => {
      let _0xaadf11 =
        _0x1b2825 === _0x734519.startRow && _0x123d9b === _0x734519.startColumn;
      (Le(
        _0x5bb924,
        _0x99c8c9.tableId,
        _0x1b2825,
        _0x123d9b,
        "rowSpan",
        _0xa3e9d9.rowSpan,
        _0xaadf11 ? _0x734519.endRow - _0x734519.startRow + 1 : 0,
      ),
        Le(
          _0x5bb924,
          _0x99c8c9.tableId,
          _0x1b2825,
          _0x123d9b,
          "columnSpan",
          _0xa3e9d9.columnSpan,
          _0xaadf11 ? _0x734519.endColumn - _0x734519.startColumn + 1 : 0,
        ));
    }),
    { actions: Re(_0x5bb924), range: _0x734519 }
  );
}
function Fe(_0x22105d) {
  let _0x356e7a = E(_0x22105d.documentData, {
      cloneBody: false,
      tableIds: [_0x22105d.tableId],
    }),
    _0x478974 = Xe(_0x356e7a, _0x22105d.tableId),
    _0x386f7a = O(_0x22105d),
    _0x4d7e27 = ze(_0x478974, _0x386f7a.startRow, _0x386f7a.startColumn);
  if (!Me(_0x22105d.documentData, _0x22105d.tableId, _0x386f7a) || !_0x4d7e27)
    throw Error("[DocsTable]:\x20Cannot\x20unmerge\x20an\x20unmerged\x20cell.");
  return (
    A(_0x478974, _0x4d7e27, (_0x294792) => {
      (delete _0x294792.rowSpan, delete _0x294792.columnSpan);
    }),
    { nextDocumentData: _0x356e7a, range: _0x4d7e27 }
  );
}
function Ie(_0x4e0144) {
  var _0x3d89c6;
  let _0x159fe8 =
      (_0x3d89c6 = _0x4e0144.documentData["tableSource"]) == null
        ? undefined
        : _0x3d89c6[_0x4e0144.tableId],
    _0x14f304 = O(_0x4e0144),
    _0x5e3f88 = _0x159fe8
      ? ze(_0x159fe8, _0x14f304.startRow, _0x14f304.startColumn)
      : null;
  if (
    !_0x159fe8 ||
    !_0x5e3f88 ||
    !Me(_0x4e0144.documentData, _0x4e0144.tableId, _0x14f304)
  )
    return null;
  let _0xb408cf = [];
  return (
    A(_0x159fe8, _0x5e3f88, (_0x5e1704, _0x30c00f, _0x410973) => {
      (Le(
        _0xb408cf,
        _0x4e0144.tableId,
        _0x30c00f,
        _0x410973,
        "rowSpan",
        _0x5e1704.rowSpan,
        undefined,
      ),
        Le(
          _0xb408cf,
          _0x4e0144.tableId,
          _0x30c00f,
          _0x410973,
          "columnSpan",
          _0x5e1704.columnSpan,
          undefined,
        ));
    }),
    { actions: Re(_0xb408cf), range: _0x5e3f88 }
  );
}
function Le(
  _0x1cf9de,
  _0x4a495e,
  _0x5cec5f,
  _0x2d286f,
  _0x5c5d73,
  _0x6b21ae,
  _0x5e1fa9,
) {
  if (_0x6b21ae === _0x5e1fa9) return;
  let _0x199ab3 = _0x33f29e.getInstance(),
    _0x44d984 = [
      "tableSource",
      _0x4a495e,
      "tableRows",
      _0x5cec5f,
      "tableCells",
      _0x2d286f,
      _0x5c5d73,
    ];
  _0x1cf9de.push(
    _0x6b21ae === undefined
      ? _0x199ab3.insertOp(_0x44d984, _0x5e1fa9)
      : _0x5e1fa9 === undefined
        ? _0x199ab3.removeOp(_0x44d984, _0x6b21ae)
        : _0x199ab3.replaceOp(_0x44d984, _0x6b21ae, _0x5e1fa9),
  );
}
function Re(_0x1d8e1b) {
  return _0x1d8e1b.reduce(
    (_0xe25798, _0x58780a) => _0x33f29e.compose(_0xe25798, _0x58780a),
    null,
  );
}
function ze(_0xdedac5, _0x469ced, _0x342873) {
  var _0x1a69ed;
  let _0x32f057 =
    (_0x1a69ed = _0xdedac5.tableRows[_0x469ced]) == null
      ? undefined
      : _0x1a69ed.tableCells[_0x342873];
  if (!_0x32f057) return null;
  if (j(_0x32f057) > 1 || M(_0x32f057) > 1)
    return {
      startRow: _0x469ced,
      endRow: _0x469ced + j(_0x32f057) - 1,
      startColumn: _0x342873,
      endColumn: _0x342873 + M(_0x32f057) - 1,
    };
  if (_0x32f057.rowSpan !== 0 && _0x32f057.columnSpan !== 0)
    return {
      startRow: _0x469ced,
      endRow: _0x469ced,
      startColumn: _0x342873,
      endColumn: _0x342873,
    };
  for (
    let _0x1c3650 = 0;
    _0x1c3650 < _0xdedac5.tableRows["length"];
    _0x1c3650++
  ) {
    let _0x5bdb80 = _0xdedac5.tableRows[_0x1c3650];
    for (
      let _0xb46350 = 0;
      _0xb46350 < _0x5bdb80.tableCells["length"];
      _0xb46350++
    ) {
      let _0x137eef = _0x5bdb80.tableCells[_0xb46350],
        _0x556d65 = j(_0x137eef),
        _0x1c8918 = M(_0x137eef);
      if (_0x556d65 <= 1 && _0x1c8918 <= 1) continue;
      let _0x20344a = {
        startRow: _0x1c3650,
        endRow: _0x1c3650 + _0x556d65 - 1,
        startColumn: _0xb46350,
        endColumn: _0xb46350 + _0x1c8918 - 1,
      };
      if (
        _0x469ced >= _0x20344a.startRow &&
        _0x469ced <= _0x20344a.endRow &&
        _0x342873 >= _0x20344a.startColumn &&
        _0x342873 <= _0x20344a.endColumn
      )
        return _0x20344a;
    }
  }
  return null;
}
function Be(_0x43d1d8, _0x42afdf) {
  let _0x595d20 = O(_0x42afdf),
    _0x226248 = true;
  for (; _0x226248;) {
    _0x226248 = false;
    for (
      let _0x1d15bf = 0;
      _0x1d15bf < _0x43d1d8.tableRows["length"];
      _0x1d15bf++
    ) {
      let _0x59a9b4 = _0x43d1d8.tableRows[_0x1d15bf];
      for (
        let _0x1146fb = 0;
        _0x1146fb < _0x59a9b4.tableCells["length"];
        _0x1146fb++
      ) {
        let _0x2b62cf = _0x59a9b4.tableCells[_0x1146fb],
          _0x3bae2f = j(_0x2b62cf),
          _0x282890 = M(_0x2b62cf);
        if (_0x3bae2f <= 1 && _0x282890 <= 1) continue;
        let _0x16891d = {
          startRow: _0x1d15bf,
          endRow: _0x1d15bf + _0x3bae2f - 1,
          startColumn: _0x1146fb,
          endColumn: _0x1146fb + _0x282890 - 1,
        };
        if (!Qe(_0x595d20, _0x16891d)) continue;
        let _0x13f923 = {
          startRow: Math.min(_0x595d20.startRow, _0x16891d.startRow),
          endRow: Math.max(_0x595d20.endRow, _0x16891d.endRow),
          startColumn: Math.min(_0x595d20.startColumn, _0x16891d.startColumn),
          endColumn: Math.max(_0x595d20.endColumn, _0x16891d.endColumn),
        };
        $e(_0x13f923, _0x595d20) ||
          ((_0x595d20 = _0x13f923), (_0x226248 = true));
      }
    }
  }
  return _0x595d20;
}
function Ve(_0x5e51be, _0x20484b, _0x446962, _0x41b9e7 = k(_0x5e51be)) {
  Ge(_0x5e51be, _0x41b9e7, (_0x4b432d) =>
    _0x20484b <= _0x4b432d.startRow
      ? {
          ..._0x4b432d,
          startRow: _0x4b432d.startRow + _0x446962,
          endRow: _0x4b432d.endRow + _0x446962,
        }
      : _0x20484b <= _0x4b432d.endRow
        ? { ..._0x4b432d, endRow: _0x4b432d.endRow + _0x446962 }
        : _0x4b432d,
  );
}
function He(_0x467d01, _0x4f7da5, _0x17d42a, _0x749fe5 = k(_0x467d01)) {
  Ge(_0x467d01, _0x749fe5, (_0x48ebdf) =>
    _0x4f7da5 <= _0x48ebdf.startColumn
      ? {
          ..._0x48ebdf,
          startColumn: _0x48ebdf.startColumn + _0x17d42a,
          endColumn: _0x48ebdf.endColumn + _0x17d42a,
        }
      : _0x4f7da5 <= _0x48ebdf.endColumn
        ? { ..._0x48ebdf, endColumn: _0x48ebdf.endColumn + _0x17d42a }
        : _0x48ebdf,
  );
}
function Ue(_0x1b9fd3, _0x1d883c, _0x133cc9, _0x119888 = k(_0x1b9fd3)) {
  Ge(_0x1b9fd3, _0x119888, (_0x58fcb0) => {
    let _0x2b98ab = [];
    for (
      let _0x1fed35 = _0x58fcb0.startRow;
      _0x1fed35 <= _0x58fcb0.endRow;
      _0x1fed35++
    ) {
      let _0x5d527a = Je(_0x1fed35, _0x1d883c, _0x133cc9);
      _0x5d527a != null && _0x2b98ab.push(_0x5d527a);
    }
    return _0x2b98ab.length
      ? {
          ..._0x58fcb0,
          startRow: Math.min(..._0x2b98ab),
          endRow: Math.max(..._0x2b98ab),
        }
      : null;
  });
}
function We(_0x4772dc, _0x5cae21, _0x32363d, _0x167f46 = k(_0x4772dc)) {
  Ge(_0x4772dc, _0x167f46, (_0x258fa2) => {
    let _0x53dd10 = [];
    for (
      let _0x1a7491 = _0x258fa2.startColumn;
      _0x1a7491 <= _0x258fa2.endColumn;
      _0x1a7491++
    ) {
      let _0x39efbe = Je(_0x1a7491, _0x5cae21, _0x32363d);
      _0x39efbe != null && _0x53dd10.push(_0x39efbe);
    }
    return _0x53dd10.length
      ? {
          ..._0x258fa2,
          startColumn: Math.min(..._0x53dd10),
          endColumn: Math.max(..._0x53dd10),
        }
      : null;
  });
}
function O(_0x1e5904) {
  return {
    startRow: Math.min(_0x1e5904.startRow, _0x1e5904.endRow),
    endRow: Math.max(_0x1e5904.startRow, _0x1e5904.endRow),
    startColumn: Math.min(_0x1e5904.startColumn, _0x1e5904.endColumn),
    endColumn: Math.max(_0x1e5904.startColumn, _0x1e5904.endColumn),
  };
}
function Ge(_0x4a168a, _0x33a5dd, _0x5caaef) {
  (Ke(_0x4a168a),
    _0x33a5dd.forEach((_0x459bc4) => {
      let _0x591e7e = _0x5caaef(_0x459bc4);
      _0x591e7e && qe(_0x4a168a, _0x591e7e);
    }));
}
function k(_0x4cfe69) {
  let _0x2ff048 = [];
  return (
    _0x4cfe69.tableRows["forEach"]((_0x574c08, _0x51c35d) => {
      _0x574c08.tableCells["forEach"]((_0x683595, _0x4d47eb) => {
        let _0x5e34d8 = j(_0x683595),
          _0x137917 = M(_0x683595);
        (_0x5e34d8 <= 1 && _0x137917 <= 1) ||
          _0x2ff048.push({
            startRow: _0x51c35d,
            endRow: _0x51c35d + _0x5e34d8 - 1,
            startColumn: _0x4d47eb,
            endColumn: _0x4d47eb + _0x137917 - 1,
          });
      });
    }),
    _0x2ff048
  );
}
function Ke(_0x3971fb) {
  _0x3971fb.tableRows["forEach"]((_0x796e1) => {
    _0x796e1.tableCells["forEach"]((_0x5b5feb) => {
      (delete _0x5b5feb.rowSpan, delete _0x5b5feb.columnSpan);
    });
  });
}
function qe(_0x103ab6, _0x58df13) {
  var _0x5d378d;
  let _0x29d7df = O(_0x58df13),
    _0x1746aa = _0x29d7df.endRow - _0x29d7df.startRow + 1,
    _0x58df96 = _0x29d7df.endColumn - _0x29d7df.startColumn + 1;
  if (_0x1746aa <= 0 || _0x58df96 <= 0 || (_0x1746aa === 1 && _0x58df96 === 1))
    return;
  let _0xdf9330 =
    (_0x5d378d = _0x103ab6.tableRows[_0x29d7df.startRow]) == null
      ? undefined
      : _0x5d378d.tableCells[_0x29d7df.startColumn];
  _0xdf9330 &&
    ((_0xdf9330.rowSpan = _0x1746aa),
    (_0xdf9330.columnSpan = _0x58df96),
    A(_0x103ab6, _0x29d7df, (_0x36b390, _0xb9a3c9, _0x15add5) => {
      (_0xb9a3c9 !== _0x29d7df.startRow ||
        _0x15add5 !== _0x29d7df.startColumn) &&
        ((_0x36b390.rowSpan = 0), (_0x36b390.columnSpan = 0));
    }));
}
function Je(_0x315cbf, _0x1b8155, _0x47b7ec) {
  return _0x315cbf < _0x1b8155
    ? _0x315cbf
    : _0x315cbf > _0x47b7ec
      ? _0x315cbf - (_0x47b7ec - _0x1b8155 + 1)
      : null;
}
function Ye(_0x30fc83) {
  return (
    _0x30fc83.startRow !== _0x30fc83.endRow ||
    _0x30fc83.startColumn !== _0x30fc83.endColumn
  );
}
function Xe(_0x21b078, _0x203e40) {
  var _0x2193dc;
  let _0x2c3293 =
    (_0x2193dc = _0x21b078.tableSource) == null
      ? undefined
      : _0x2193dc[_0x203e40];
  if (!_0x2c3293)
    throw Error("[DocsTable]: Table " + _0x203e40 + "\x20is\x20not\x20found.");
  return _0x2c3293;
}
function Ze(_0x363271, _0x437e6e) {
  let _0xa4b58d = [];
  return (
    A(_0x363271, _0x437e6e, (_0x46fa17) => _0xa4b58d.push(_0x46fa17)),
    _0xa4b58d
  );
}
function A(_0x128e63, _0xcd267f, _0x11bdd8) {
  for (
    let _0x335bcd = _0xcd267f.startRow;
    _0x335bcd <= _0xcd267f.endRow;
    _0x335bcd++
  )
    for (
      let _0x5208d7 = _0xcd267f.startColumn;
      _0x5208d7 <= _0xcd267f.endColumn;
      _0x5208d7++
    ) {
      var _0x4f80dc;
      let _0x4e168c =
        (_0x4f80dc = _0x128e63.tableRows[_0x335bcd]) == null
          ? undefined
          : _0x4f80dc.tableCells[_0x5208d7];
      if (!_0x4e168c) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x11bdd8(_0x4e168c, _0x335bcd, _0x5208d7);
    }
}
function j(_0x1450da) {
  return _0x1450da.rowSpan == null ? 1 : _0x1450da.rowSpan;
}
function M(_0x4e6d52) {
  return _0x4e6d52.columnSpan == null ? 1 : _0x4e6d52.columnSpan;
}
function Qe(_0xad50af, _0x152d80) {
  return (
    _0xad50af.startRow <= _0x152d80.endRow &&
    _0xad50af.endRow >= _0x152d80.startRow &&
    _0xad50af.startColumn <= _0x152d80.endColumn &&
    _0xad50af.endColumn >= _0x152d80.startColumn
  );
}
function $e(_0x53c0f1, _0x360e9f) {
  return (
    _0x53c0f1.startRow === _0x360e9f.startRow &&
    _0x53c0f1.endRow === _0x360e9f.endRow &&
    _0x53c0f1.startColumn === _0x360e9f.startColumn &&
    _0x53c0f1.endColumn === _0x360e9f.endColumn
  );
}
function et(_0x1acb31) {
  return {
    ..._0x1acb31,
    columnTypes: _0x1acb31.columnTypes
      ? { ..._0x1acb31.columnTypes }
      : undefined,
  };
}
function N(_0x270f3a) {
  let _0x3838b6 = {};
  return (
    Object.entries(
      (_0x270f3a == null ? undefined : _0x270f3a.tables) ?? {},
    ).forEach(([_0x2e5e11, _0x3b389a]) => {
      _0x3838b6[_0x2e5e11] = et(_0x3b389a);
    }),
    { tables: _0x3838b6 }
  );
}
function tt(_0x40800e, _0x2c6a0a, _0x1d4f8f) {
  let _0x1b6e74 = N(_0x40800e);
  return {
    tables: {
      ..._0x1b6e74.tables,
      [_0x2c6a0a]: {
        ...(_0x1b6e74.tables[_0x2c6a0a] ?? {}),
        headerRowCount: Math.max(0, _0x1d4f8f),
      },
    },
  };
}
function nt(_0x156a58, _0x4581e7, _0x29f9c6) {
  let _0x2ca513 = N(_0x156a58);
  return {
    tables: {
      ..._0x2ca513.tables,
      [_0x4581e7]: {
        ...(_0x2ca513.tables[_0x4581e7] ?? {}),
        titleRow: _0x29f9c6,
      },
    },
  };
}
function rt(_0x27e2ff, _0x333bb2, _0x3a7ab9, _0x2f3855) {
  let _0x469d72 = N(_0x27e2ff),
    _0x1e80dd = _0x469d72.tables[_0x333bb2] ?? {};
  return {
    tables: {
      ..._0x469d72.tables,
      [_0x333bb2]: {
        ..._0x1e80dd,
        columnTypes: {
          ...(_0x1e80dd.columnTypes ?? {}),
          [_0x3a7ab9]: _0x2f3855,
        },
      },
    },
  };
}
let it = (function (_0x283478) {
  return (
    (_0x283478.Above = "above"),
    (_0x283478.Below = "below"),
    (_0x283478.Left = "left"),
    (_0x283478.Right = "right"),
    _0x283478
  );
})({});
const at = { Above: "above", Below: "below" },
  ot = { Left: "left", Right: "right" };
function st(_0x371919) {
  let {
      documentData: _0x10666b,
      tableId: _0x5f5329,
      row: _0x191b86,
      count: _0x54b688,
      position: _0x19dd94,
    } = _0x371919,
    _0x38312b = E(_0x10666b, { tableIds: [_0x5f5329] }),
    _0x11ff25 = mt(_0x38312b, _0x5f5329),
    _0x56da92 = P(_0x38312b, _0x5f5329),
    _0x2adcf1 = _0x19dd94 === "above" ? _0x191b86 : _0x191b86 + 1,
    _0x4c2d28 =
      _0x11ff25.tableRows[
        Math.min(_0x191b86, _0x11ff25.tableRows["length"] - 1)
      ],
    _0x2ba32f = Array.from({ length: _0x54b688 }, () => ht(_0x4c2d28)),
    _0xdc64ce = k(_0x11ff25),
    _0x227fa6 =
      _0x19dd94 === "above"
        ? T(_0x56da92, _0x191b86).startOffset
        : T(_0x56da92, _0x191b86).endOffset + 1,
    _0x39e53d = yt(_t(_0x11ff25.tableColumns["length"]), _0x54b688);
  return (
    _0x11ff25.tableRows["splice"](_0x2adcf1, 0, ..._0x2ba32f),
    Ve(_0x11ff25, _0x2adcf1, _0x54b688, _0xdc64ce),
    wt(_0x38312b, _0x5f5329, _0x227fa6, _0x39e53d),
    {
      nextDocumentData: _0x38312b,
      nextMetadata: _0x371919.metadata ? N(_0x371919.metadata) : undefined,
      cursor: { row: _0x2adcf1, column: 0 },
    }
  );
}
function ct(_0x39ce80) {
  var _0xff7e23;
  let {
      documentData: _0x504896,
      tableId: _0x344b5e,
      column: _0x1406dd,
      count: _0x27387d,
      position: _0x328e26,
    } = _0x39ce80,
    _0x18ee76 = E(_0x504896, { tableIds: [_0x344b5e] }),
    _0x62cf4b = mt(_0x18ee76, _0x344b5e),
    _0xfd0383 = P(_0x18ee76, _0x344b5e),
    _0x159ee1 = _0x328e26 === "left" ? _0x1406dd : _0x1406dd + 1,
    _0x3ffcc4 =
      _0x62cf4b.tableColumns[
        Math.min(_0x1406dd, _0x62cf4b.tableColumns["length"] - 1)
      ],
    _0x45a8be = _0x39ce80.insertedColumnWidth ?? _0x3ffcc4.size["width"].v,
    _0x5dc4c0 = Array.from({ length: _0x27387d }, () => {
      let _0x1e247c = _0x27aca5.deepClone(_0x3ffcc4);
      return ((_0x1e247c.size["width"].v = _0x45a8be), _0x1e247c);
    }),
    _0x4bc9cc = k(_0x62cf4b);
  return (
    _0x62cf4b.tableColumns["splice"](_0x159ee1, 0, ..._0x5dc4c0),
    _0x62cf4b.tableRows["forEach"]((_0x2bb4ab) => {
      let _0x252f87 =
          _0x2bb4ab.tableCells[
            Math.min(_0x1406dd, _0x2bb4ab.tableCells["length"] - 1)
          ],
        _0x1317e4 = Array.from({ length: _0x27387d }, () => gt(_0x252f87));
      _0x2bb4ab.tableCells["splice"](_0x159ee1, 0, ..._0x1317e4);
    }),
    He(_0x62cf4b, _0x159ee1, _0x27387d, _0x4bc9cc),
    bt(_0x18ee76, _0x344b5e, _0xfd0383, _0x1406dd, _0x27387d, _0x328e26),
    (_0x39ce80.preserveTotalWidth ?? true)
      ? Rt(_0x62cf4b, _0x45a8be * _0x27387d)
      : (_0xff7e23 = _0x62cf4b.size) != null &&
        _0xff7e23.width &&
        (_0x62cf4b.size["width"].v = _0x62cf4b.tableColumns["reduce"](
          (_0x475d62, _0x359dbc) => _0x475d62 + _0x359dbc.size["width"].v,
          0,
        )),
    {
      nextDocumentData: _0x18ee76,
      nextMetadata: _0x39ce80.metadata ? N(_0x39ce80.metadata) : undefined,
      cursor: { row: 0, column: _0x159ee1 },
    }
  );
}
function lt(_0x267970) {
  let {
      documentData: _0x4786e8,
      metadata: _0x31c6f6,
      tableId: _0x3f8509,
    } = _0x267970,
    _0x4ec3b6 = E(_0x4786e8, { tableIds: [_0x3f8509] }),
    _0x18fb38 = mt(_0x4ec3b6, _0x3f8509),
    _0x16243d = Math.min(_0x267970.startRow, _0x267970.endRow),
    _0x2cef2d = Math.max(_0x267970.startRow, _0x267970.endRow),
    _0x262df8 = _0x2cef2d - _0x16243d + 1,
    _0x1e9524 = k(_0x18fb38);
  return _0x262df8 >= _0x18fb38.tableRows["length"]
    ? {
        ...dt({
          documentData: _0x4786e8,
          metadata: _0x31c6f6,
          tableId: _0x3f8509,
        }),
        deleteTable: true,
      }
    : (xt(_0x4ec3b6, _0x3f8509, _0x16243d, _0x2cef2d),
      _0x18fb38.tableRows["splice"](_0x16243d, _0x262df8),
      Ue(_0x18fb38, _0x16243d, _0x2cef2d, _0x1e9524),
      {
        nextDocumentData: _0x4ec3b6,
        nextMetadata: zt(_0x31c6f6, _0x3f8509, _0x16243d, _0x2cef2d),
        cursor: {
          row: Math.min(_0x16243d, _0x18fb38.tableRows["length"] - 1),
          column: 0,
        },
      });
}
function ut(_0x5e1415) {
  let {
      documentData: _0x512662,
      metadata: _0x1c28da,
      tableId: _0x3e4421,
    } = _0x5e1415,
    _0x391940 = E(_0x512662, { tableIds: [_0x3e4421] }),
    _0x294bcc = mt(_0x391940, _0x3e4421),
    _0x1af8d4 = Math.min(_0x5e1415.startColumn, _0x5e1415.endColumn),
    _0x7aa9ad = Math.max(_0x5e1415.startColumn, _0x5e1415.endColumn),
    _0x574ea1 = _0x7aa9ad - _0x1af8d4 + 1,
    _0x1395c2 = k(_0x294bcc);
  return _0x574ea1 >= _0x294bcc.tableColumns["length"]
    ? {
        ...dt({
          documentData: _0x512662,
          metadata: _0x1c28da,
          tableId: _0x3e4421,
        }),
        deleteTable: true,
      }
    : (St(_0x391940, _0x3e4421, _0x1af8d4, _0x7aa9ad),
      _0x294bcc.tableColumns["splice"](_0x1af8d4, _0x574ea1),
      _0x294bcc.tableRows["forEach"]((_0x13fbf1) =>
        _0x13fbf1.tableCells["splice"](_0x1af8d4, _0x574ea1),
      ),
      We(_0x294bcc, _0x1af8d4, _0x7aa9ad, _0x1395c2),
      {
        nextDocumentData: _0x391940,
        nextMetadata: _0x1c28da ? N(_0x1c28da) : undefined,
        cursor: {
          row: 0,
          column: Math.min(_0x1af8d4, _0x294bcc.tableColumns["length"] - 1),
        },
      });
}
function dt(_0x588ded) {
  let { documentData: _0x613f0b, tableId: _0x20f41c } = _0x588ded,
    _0x157030 = E(_0x613f0b),
    _0xb9b11c = { ...(_0x157030.tableSource ?? {}) },
    _0x48a027 = _0x588ded.metadata ? N(_0x588ded.metadata) : undefined;
  return (
    Ct(_0x157030, _0x20f41c),
    delete _0xb9b11c[_0x20f41c],
    (_0x157030.tableSource = _0xb9b11c),
    _0x48a027 && delete _0x48a027.tables[_0x20f41c],
    {
      nextDocumentData: _0x157030,
      nextMetadata: _0x48a027,
      cursor: { row: 0, column: 0 },
      deleteTable: true,
    }
  );
}
function ft(_0x133e5f) {
  let _0x4381e4 = E(_0x133e5f.documentData, { tableIds: [_0x133e5f.tableId] }),
    _0x48f390 = mt(_0x4381e4, _0x133e5f.tableId),
    _0x297069 = P(_0x4381e4, _0x133e5f.tableId),
    _0x40dc93 = _0x133e5f.count ?? 1,
    _0xb9f8da = kt(_0x133e5f.fromRow, _0x48f390.tableRows["length"] - 1),
    _0x46f453 = kt(_0x133e5f.toRow, _0x48f390.tableRows["length"] - 1),
    _0x43f110 = Math.min(
      _0x48f390.tableRows["length"] - 1,
      _0xb9f8da + _0x40dc93 - 1,
    ),
    _0x285d24 = _0x43f110 - _0xb9f8da + 1,
    _0x4a7985 = _0x133e5f.position === "above" ? _0x46f453 : _0x46f453 + 1;
  if (_0x285d24 <= 0 || (_0x4a7985 >= _0xb9f8da && _0x4a7985 <= _0x43f110 + 1))
    return {
      nextDocumentData: _0x4381e4,
      nextMetadata: _0x133e5f.metadata ? N(_0x133e5f.metadata) : undefined,
      cursor: { row: _0xb9f8da, column: 0 },
    };
  let _0x6fb60f = _0x48f390.tableRows["splice"](_0xb9f8da, _0x285d24),
    _0x318d76 = _0x4a7985 > _0x43f110 ? _0x4a7985 - _0x285d24 : _0x4a7985;
  _0x48f390.tableRows["splice"](_0x318d76, 0, ..._0x6fb60f);
  let _0x49c66c = T(_0x297069, _0xb9f8da).startOffset,
    _0x38b5b8 = T(_0x297069, _0x43f110).endOffset + 1,
    _0x12839e =
      _0x4a7985 > _0x43f110
        ? T(_0x297069, Math.min(_0x46f453, _0x297069.rowCount - 1)).endOffset +
          1
        : T(_0x297069, _0x46f453).startOffset;
  return (
    Ot(_0x4381e4.body, _0x49c66c, _0x38b5b8, _0x12839e),
    {
      nextDocumentData: _0x4381e4,
      nextMetadata: _0x133e5f.metadata ? N(_0x133e5f.metadata) : undefined,
      cursor: { row: _0x318d76, column: 0 },
    }
  );
}
function pt(_0x5de838) {
  let _0x4fbc47 = E(_0x5de838.documentData, { tableIds: [_0x5de838.tableId] }),
    _0x49edfc = mt(_0x4fbc47, _0x5de838.tableId),
    _0x8f6b70 = P(_0x4fbc47, _0x5de838.tableId),
    _0x1f8e11 = _0x5de838.count ?? 1,
    _0xd40d42 = kt(_0x5de838.fromColumn, _0x49edfc.tableColumns["length"] - 1),
    _0xdb6453 = kt(_0x5de838.toColumn, _0x49edfc.tableColumns["length"] - 1),
    _0x319f45 = Math.min(
      _0x49edfc.tableColumns["length"] - 1,
      _0xd40d42 + _0x1f8e11 - 1,
    ),
    _0x20eb80 = _0x319f45 - _0xd40d42 + 1,
    _0x59f8ec = _0x5de838.position === "left" ? _0xdb6453 : _0xdb6453 + 1;
  if (_0x20eb80 <= 0 || (_0x59f8ec >= _0xd40d42 && _0x59f8ec <= _0x319f45 + 1))
    return {
      nextDocumentData: _0x4fbc47,
      nextMetadata: _0x5de838.metadata ? N(_0x5de838.metadata) : undefined,
      cursor: { row: 0, column: _0xd40d42 },
    };
  let _0x564006 = _0x49edfc.tableColumns["splice"](_0xd40d42, _0x20eb80),
    _0x1589b4 = _0x59f8ec > _0x319f45 ? _0x59f8ec - _0x20eb80 : _0x59f8ec;
  return (
    _0x49edfc.tableColumns["splice"](_0x1589b4, 0, ..._0x564006),
    _0x49edfc.tableRows["forEach"]((_0x24f265) => {
      let _0x5864ad = _0x24f265.tableCells["splice"](_0xd40d42, _0x20eb80);
      _0x24f265.tableCells["splice"](_0x1589b4, 0, ..._0x5864ad);
    }),
    _0x8f6b70.rows["forEach"]((_0x91fc73) => {
      let _0x8b67d = _0x91fc73.cells[_0xd40d42].startOffset,
        _0x1f1a4d = _0x91fc73.cells[_0x319f45].endOffset + 1,
        _0x531a69 =
          _0x59f8ec > _0x319f45
            ? _0x91fc73.cells[
                Math.min(_0xdb6453, _0x91fc73.cells["length"] - 1)
              ].endOffset + 1
            : _0x91fc73.cells[_0xdb6453].startOffset;
      Ot(_0x4fbc47.body, _0x8b67d, _0x1f1a4d, _0x531a69);
    }),
    {
      nextDocumentData: _0x4fbc47,
      nextMetadata: _0x5de838.metadata ? N(_0x5de838.metadata) : undefined,
      cursor: { row: 0, column: _0x1589b4 },
    }
  );
}
function mt(_0x39b312, _0xe798b6) {
  var _0x5d309a;
  let _0x87806b =
    (_0x5d309a = _0x39b312.tableSource) == null
      ? undefined
      : _0x5d309a[_0xe798b6];
  if (!_0x87806b)
    throw Error("[DocsTable]: Table " + _0xe798b6 + " is not found.");
  return _0x87806b;
}
function P(_0x4b35ed, _0xed54c0) {
  let _0x4b120f = w(_0x4b35ed, _0xed54c0);
  if (!_0x4b120f)
    throw Error("[DocsTable]: Table " + _0xed54c0 + " range is not found.");
  return _0x4b120f;
}
function ht(_0x1e4e3b) {
  let _0x283df6 = _0x27aca5.deepClone(_0x1e4e3b);
  return (
    (_0x283df6.tableCells = _0x1e4e3b.tableCells["map"]((_0x422ada) =>
      gt(_0x422ada),
    )),
    _0x283df6
  );
}
function gt(_0xea9c06) {
  return _0x27aca5.deepClone({ ..._0xea9c06 });
}
function _t(_0x121581) {
  return (
    "" +
    _0x597d36.TABLE_ROW_START +
    yt(vt(), _0x121581) +
    _0x597d36.TABLE_ROW_END
  );
}
function vt() {
  return _0x597d36.TABLE_CELL_START + "\x0d\x0a" + _0x597d36.TABLE_CELL_END;
}
function yt(_0x1341ec, _0x3c32bd) {
  return Array.from({ length: _0x3c32bd }, () => _0x1341ec).join("");
}
function bt(_0x1cca28, _0x4c8c33, _0x28c918, _0x711553, _0x137ea8, _0x12f306) {
  let _0x33b201 = yt(vt(), _0x137ea8),
    _0x1b3f9f = _0x28c918.rows["map"]((_0x22e6bf) => {
      let _0x67ec4a = _0x22e6bf.cells[_0x711553];
      return _0x12f306 === "left"
        ? _0x67ec4a.startOffset
        : _0x67ec4a.endOffset + 1;
    }).sort((_0x324bc5, _0x56f445) => _0x56f445 - _0x324bc5);
  for (let _0x1e4bfa of _0x1b3f9f)
    (Et(_0x1cca28.body, _0x1e4bfa, _0x33b201),
      _0x1cca28.body &&
        (Mt(_0x1cca28.body, _0x1e4bfa, _0x33b201.length),
        Nt(_0x1cca28.body, _0x1e4bfa, _0x33b201)));
  jt(
    _0x1cca28,
    _0x4c8c33,
    _0x28c918.endOffset,
    _0x33b201.length * _0x1b3f9f.length,
  );
}
function xt(_0x40da1f, _0x260a0b, _0x195ebf, _0x3070f3) {
  let _0x38f7d9 = P(_0x40da1f, _0x260a0b),
    _0x3dab15 = T(_0x38f7d9, _0x195ebf).startOffset;
  Tt(_0x40da1f, _0x260a0b, _0x3dab15, T(_0x38f7d9, _0x3070f3).endOffset + 1);
}
function St(_0x327bbe, _0xea9e9b, _0x46cfa7, _0x5ab923) {
  let _0x110b17 = P(_0x327bbe, _0xea9e9b),
    _0x2204d3 = [];
  for (let _0x20c023 = _0x46cfa7; _0x20c023 <= _0x5ab923; _0x20c023++)
    _0x2204d3.push(
      ...be(_0x110b17, _0x20c023).cells["map"]((_0x56a708) => ({
        startOffset: _0x56a708.startOffset,
        endOffset: _0x56a708.endOffset + 1,
      })),
    );
  _0x2204d3.sort(
    (_0x29b867, _0x41a6cb) => _0x41a6cb.startOffset - _0x29b867.startOffset,
  );
  let _0x43329a = 0;
  for (let _0x2acb85 of _0x2204d3) {
    let _0x4c6a07 = _0x2acb85.startOffset - _0x2acb85.endOffset;
    ((_0x43329a -= _0x4c6a07),
      Dt(_0x327bbe.body, _0x2acb85.startOffset, _0x2acb85.endOffset),
      _0x327bbe.body && Mt(_0x327bbe.body, _0x2acb85.startOffset, _0x4c6a07));
  }
  jt(_0x327bbe, _0xea9e9b, _0x110b17.endOffset, -_0x43329a);
}
function Ct(_0x402101, _0x592b27) {
  var _0x2425bd;
  let _0x2f6771 = P(_0x402101, _0x592b27);
  (Tt(_0x402101, _0x592b27, _0x2f6771.startOffset, _0x2f6771.endOffset),
    (_0x2425bd = _0x402101.body) != null &&
      _0x2425bd.tables &&
      (_0x402101.body["tables"] = _0x402101.body["tables"].filter(
        (_0x40f283) => _0x40f283.tableId !== _0x592b27,
      )));
}
function wt(_0x4da77d, _0x8eeb1f, _0x550de8, _0x4e54d0) {
  (Et(_0x4da77d.body, _0x550de8, _0x4e54d0),
    At(_0x4da77d, _0x8eeb1f, _0x550de8, _0x4e54d0.length),
    _0x4da77d.body && Nt(_0x4da77d.body, _0x550de8, _0x4e54d0));
}
function Tt(_0x4d5170, _0x2db167, _0x39d847, _0x729ce5) {
  (Dt(_0x4d5170.body, _0x39d847, _0x729ce5),
    At(_0x4d5170, _0x2db167, _0x39d847, _0x39d847 - _0x729ce5));
}
function Et(_0x21b55b, _0x64dd41, _0x38c9ac) {
  _0x21b55b != null &&
    _0x21b55b.dataStream &&
    (_0x21b55b.dataStream =
      "" +
      _0x21b55b.dataStream["slice"](0, _0x64dd41) +
      _0x38c9ac +
      _0x21b55b.dataStream["slice"](_0x64dd41));
}
function Dt(_0x360998, _0x40c9dc, _0x69657) {
  _0x360998 != null &&
    _0x360998.dataStream &&
    (_0x360998.dataStream =
      "" +
      _0x360998.dataStream["slice"](0, _0x40c9dc) +
      _0x360998.dataStream["slice"](_0x69657));
}
function Ot(_0x4d284b, _0x2da286, _0x4f38ae, _0x5668c8) {
  if (
    !(_0x4d284b != null && _0x4d284b.dataStream) ||
    (_0x5668c8 >= _0x2da286 && _0x5668c8 <= _0x4f38ae)
  )
    return;
  let _0x5424d6 = _0x4d284b.dataStream["slice"](_0x2da286, _0x4f38ae),
    _0x8800c2 =
      "" +
      _0x4d284b.dataStream["slice"](0, _0x2da286) +
      _0x4d284b.dataStream["slice"](_0x4f38ae),
    _0x8881f3 =
      _0x5668c8 > _0x4f38ae ? _0x5668c8 - _0x5424d6.length : _0x5668c8;
  _0x4d284b.dataStream =
    "" + _0x8800c2.slice(0, _0x8881f3) + _0x5424d6 + _0x8800c2.slice(_0x8881f3);
}
function kt(_0x26fa64, _0x4589d0) {
  return Math.min(Math.max(0, _0x26fa64), Math.max(0, _0x4589d0));
}
function At(_0x370be8, _0x57fb19, _0x38162d, _0x252108) {
  let _0x14a844 = _0x370be8.body;
  !_0x14a844 ||
    _0x252108 === 0 ||
    (jt(_0x370be8, _0x57fb19, _0x38162d, _0x252108),
    Mt(_0x14a844, _0x38162d, _0x252108));
}
function jt(_0x287463, _0x51a5bd, _0x344041, _0x248876) {
  let _0x5b181e = _0x287463.body;
  !(_0x5b181e != null && _0x5b181e.tables) ||
    _0x248876 === 0 ||
    (_0x5b181e.tables &&= _0x5b181e.tables["map"]((_0x202ec4) =>
      _0x202ec4.tableId === _0x51a5bd
        ? { ..._0x202ec4, endIndex: _0x202ec4.endIndex + _0x248876 }
        : _0x202ec4.startIndex >= _0x344041
          ? {
              ..._0x202ec4,
              startIndex: _0x202ec4.startIndex + _0x248876,
              endIndex: _0x202ec4.endIndex + _0x248876,
            }
          : _0x202ec4,
    ));
}
function Mt(_0x1817f0, _0x727e17, _0x443b8f) {
  var _0x4ad5f8,
    _0x2b812b,
    _0x5bb03e,
    _0x4dcf46,
    _0x173c0e,
    _0x3b7fc3,
    _0x16c50b,
    _0x40575a;
  let _0x4ec8eb = Ee(_0x1817f0);
  ((_0x1817f0.paragraphs =
    (_0x4ad5f8 = _0x1817f0.paragraphs) == null
      ? undefined
      : _0x4ad5f8
          .map((_0x1d962b) => {
            let _0x506fb2 = It(_0x1d962b.startIndex, _0x727e17, _0x443b8f);
            return _0x506fb2 == null
              ? null
              : { ..._0x1d962b, startIndex: _0x506fb2 };
          })
          .filter((_0x2e5e77) => _0x2e5e77 != null)),
    (_0x1817f0.sectionBreaks =
      (_0x2b812b = _0x1817f0.sectionBreaks) == null
        ? undefined
        : _0x2b812b
            .map((_0x53525b) => {
              let _0x5ea96a = It(_0x53525b.startIndex, _0x727e17, _0x443b8f);
              return _0x5ea96a == null
                ? null
                : { ..._0x53525b, startIndex: _0x5ea96a };
            })
            .filter((_0x5befa7) => _0x5befa7 != null)),
    (_0x1817f0.customBlocks =
      (_0x5bb03e = _0x1817f0.customBlocks) == null
        ? undefined
        : _0x5bb03e
            .map((_0x3024ec) => {
              let _0x201414 = It(_0x3024ec.startIndex, _0x727e17, _0x443b8f);
              return _0x201414 == null
                ? null
                : { ..._0x3024ec, startIndex: _0x201414 };
            })
            .filter((_0x29ad2b) => _0x29ad2b != null)),
    (_0x1817f0.blockRanges =
      (_0x4dcf46 = _0x1817f0.blockRanges) == null
        ? undefined
        : _0x4dcf46
            .map((_0x190dca) => {
              let _0x37e183 = Lt(
                _0x190dca.startIndex,
                _0x190dca.endIndex,
                _0x727e17,
                _0x443b8f,
              );
              return _0x37e183 == null
                ? null
                : {
                    ..._0x190dca,
                    startIndex: _0x37e183.start,
                    endIndex: _0x37e183.end,
                  };
            })
            .filter((_0x51196f) => _0x51196f != null)),
    (_0x1817f0.textRuns =
      (_0x173c0e = _0x1817f0.textRuns) == null
        ? undefined
        : _0x173c0e
            .map((_0x42c16f) => {
              let _0x3172e7 = Lt(
                _0x42c16f.st,
                _0x42c16f.ed,
                _0x727e17,
                _0x443b8f,
              );
              return _0x3172e7 == null
                ? null
                : { ..._0x42c16f, st: _0x3172e7.start, ed: _0x3172e7.end };
            })
            .filter((_0x5cc7a6) => _0x5cc7a6 != null)),
    (_0x1817f0.customRanges =
      (_0x3b7fc3 = _0x1817f0.customRanges) == null
        ? undefined
        : _0x3b7fc3
            .map((_0x1a5416) => {
              let _0x5e3ff0 = Lt(
                _0x1a5416.startIndex,
                _0x1a5416.endIndex,
                _0x727e17,
                _0x443b8f,
              );
              return _0x5e3ff0 == null
                ? null
                : {
                    ..._0x1a5416,
                    startIndex: _0x5e3ff0.start,
                    endIndex: _0x5e3ff0.end,
                  };
            })
            .filter((_0x5e1dd0) => _0x5e1dd0 != null)),
    (_0x1817f0.customDecorations =
      (_0x16c50b = _0x1817f0.customDecorations) == null
        ? undefined
        : _0x16c50b
            .map((_0x53230b) => {
              let _0x44e7a8 = Lt(
                _0x53230b.startIndex,
                _0x53230b.endIndex,
                _0x727e17,
                _0x443b8f,
              );
              return _0x44e7a8 == null
                ? null
                : {
                    ..._0x53230b,
                    startIndex: _0x44e7a8.start,
                    endIndex: _0x44e7a8.end,
                  };
            })
            .filter((_0xe02488) => _0xe02488 != null)),
    (_0x4ec8eb.columnGroups =
      (_0x40575a = _0x4ec8eb.columnGroups) == null
        ? undefined
        : _0x40575a
            .map((_0xb6ff3e) => {
              let _0x2b6500 = Lt(
                _0xb6ff3e.startIndex,
                _0xb6ff3e.endIndex,
                _0x727e17,
                _0x443b8f,
              );
              return _0x2b6500 == null
                ? null
                : {
                    ..._0xb6ff3e,
                    startIndex: _0x2b6500.start,
                    endIndex: _0x2b6500.end,
                  };
            })
            .filter((_0x1ae164) => _0x1ae164 != null)));
}
function Nt(_0x3ab812, _0x1caf08, _0x1e85f7) {
  let _0x5179dc = Pt(_0x3ab812),
    _0x35b2da = new Set(
      (_0x3ab812.sectionBreaks ?? []).map((_0x1414f4) => _0x1414f4.sectionId),
    ),
    _0x5df3dd = Ft(_0x1e85f7, "\x0d").map((_0x2a8d52) => ({
      startIndex: _0x1caf08 + _0x2a8d52,
      paragraphId: _0x2794f4(_0x5179dc),
    })),
    _0x5c6abf = Ft(_0x1e85f7, "\x0a").map((_0x295d1e) => ({
      startIndex: _0x1caf08 + _0x295d1e,
      sectionId: _0x4c7466(_0x35b2da),
    }));
  (_0x5df3dd.length &&
    (_0x3ab812.paragraphs = [
      ...(_0x3ab812.paragraphs ?? []),
      ..._0x5df3dd,
    ].sort(
      (_0x4a28d5, _0x235b51) => _0x4a28d5.startIndex - _0x235b51.startIndex,
    )),
    _0x5c6abf.length &&
      (_0x3ab812.sectionBreaks = [
        ...(_0x3ab812.sectionBreaks ?? []),
        ..._0x5c6abf,
      ].sort(
        (_0x21204c, _0x406d0d) => _0x21204c.startIndex - _0x406d0d.startIndex,
      )));
}
function Pt(_0x166184) {
  return new Set(
    (_0x166184.paragraphs ?? []).map((_0x5ec77a) => _0x5ec77a.paragraphId),
  );
}
function Ft(_0x124ab0, _0x180412) {
  let _0x536a2e = [];
  for (let _0x492ec5 = 0; _0x492ec5 < _0x124ab0.length; _0x492ec5++)
    _0x124ab0[_0x492ec5] === _0x180412 && _0x536a2e.push(_0x492ec5);
  return _0x536a2e;
}
function It(_0xb337f1, _0x37f604, _0x1d411d) {
  if (_0x1d411d >= 0)
    return _0xb337f1 >= _0x37f604 ? _0xb337f1 + _0x1d411d : _0xb337f1;
  let _0x10a25a = _0x37f604 - _0x1d411d;
  return _0xb337f1 >= _0x37f604 && _0xb337f1 < _0x10a25a
    ? null
    : _0xb337f1 >= _0x10a25a
      ? _0xb337f1 + _0x1d411d
      : _0xb337f1;
}
function Lt(_0x4edc5e, _0x3be7aa, _0x47b22f, _0x1edede) {
  if (_0x1edede >= 0)
    return {
      end: _0x3be7aa >= _0x47b22f ? _0x3be7aa + _0x1edede : _0x3be7aa,
      start: _0x4edc5e >= _0x47b22f ? _0x4edc5e + _0x1edede : _0x4edc5e,
    };
  let _0x2c9154 = _0x47b22f - _0x1edede;
  if (_0x3be7aa < _0x47b22f) return { start: _0x4edc5e, end: _0x3be7aa };
  if (_0x4edc5e >= _0x2c9154)
    return { start: _0x4edc5e + _0x1edede, end: _0x3be7aa + _0x1edede };
  let _0x188a69 = _0x4edc5e < _0x47b22f ? _0x4edc5e : _0x47b22f,
    _0x8321c5 = _0x3be7aa >= _0x2c9154 ? _0x3be7aa + _0x1edede : _0x47b22f;
  return _0x8321c5 < _0x188a69 ? null : { start: _0x188a69, end: _0x8321c5 };
}
function Rt(_0x3f66b3, _0x412363) {
  let _0x2950a0 =
      _0x3f66b3.tableColumns["reduce"](
        (_0x2ff455, _0x260b57) => _0x2ff455 + _0x260b57.size["width"].v,
        0,
      ) - _0x412363,
    _0x35b68d = _0x3f66b3.tableColumns["reduce"](
      (_0x3bb0cc, _0x3751f3) => _0x3bb0cc + _0x3751f3.size["width"].v,
      0,
    );
  _0x2950a0 <= 0 ||
    _0x35b68d <= 0 ||
    _0x3f66b3.tableColumns["forEach"]((_0x42234c) => {
      _0x42234c.size["width"].v =
        (_0x42234c.size["width"].v / _0x35b68d) * _0x2950a0;
    });
}
function zt(_0xa3658f, _0x5d0e0d, _0x3adf80, _0xc5297c) {
  var _0x380077;
  if (!_0xa3658f) return;
  let _0x35eede = N(_0xa3658f),
    _0x5c4c00 =
      ((_0x380077 = _0x35eede.tables[_0x5d0e0d]) == null
        ? undefined
        : _0x380077.headerRowCount) ?? 0;
  if (_0x5c4c00 <= 0) return _0x35eede;
  let _0x52ea14 = Math.max(
    0,
    Math.min(_0xc5297c, _0x5c4c00 - 1) - Math.max(_0x3adf80, 0) + 1,
  );
  return tt(_0x35eede, _0x5d0e0d, Math.max(0, _0x5c4c00 - _0x52ea14));
}
function Bt(_0x597c1b, _0x1ba6ca = ["body"]) {
  var _0x1f3dc0, _0x111a5b;
  let _0x3ace64 = w(_0x597c1b.documentData, _0x597c1b.tableId),
    _0x1729bd =
      _0x3ace64 == null || (_0x1f3dc0 = _0x3ace64.rows[_0x597c1b.row]) == null
        ? undefined
        : _0x1f3dc0.cells[_0x597c1b.column];
  if (
    !(
      (_0x111a5b = _0x597c1b.documentData["body"]) != null &&
      _0x111a5b.dataStream
    ) ||
    !_0x3ace64 ||
    !_0x1729bd
  )
    throw Error(
      "[DocsTable]: Cell " +
        _0x597c1b.row +
        ":" +
        _0x597c1b.column +
        " is not found.",
    );
  let _0x218601 = Ht(_0x597c1b.text),
    _0x57c2c2 = _0x1729bd.startOffset + 1,
    _0x41ff00 =
      _0x597c1b.documentData["body"].dataStream["slice"](
        _0x1729bd.endOffset - 2,
        _0x1729bd.endOffset,
      ) === "\x0d\x0a";
  return F(
    _0x597c1b.documentData,
    [
      {
        startOffset: _0x57c2c2,
        endOffset: _0x41ff00 ? _0x1729bd.endOffset - 2 : _0x1729bd.endOffset,
        text: _0x41ff00 ? _0x218601.slice(0, -2) : _0x218601,
      },
    ],
    _0x1ba6ca,
  );
}
function F(_0x2575a2, _0x24f5b5, _0x554177 = ["body"]) {
  let _0x765e88 = _0x2575a2.body;
  if (!(_0x765e88 != null && _0x765e88.dataStream)) return null;
  let _0x4c4f3a = _0x24f5b5
    .filter(
      (_0x3342bc) =>
        _0x765e88.dataStream["slice"](
          _0x3342bc.startOffset,
          _0x3342bc.endOffset,
        ) !== _0x3342bc.text,
    )
    .sort(
      (_0x3f3e15, _0xfad241) => _0x3f3e15.startOffset - _0xfad241.startOffset,
    );
  if (!_0x4c4f3a.length) return null;
  let _0xcb1861 = Wt(_0x765e88),
    _0x4ca393 = new Set(
      (_0x765e88.sectionBreaks ?? []).map((_0x2fba6f) => _0x2fba6f.sectionId),
    ),
    _0x426bce = new _0x4502e7(),
    _0x463be8 = 0;
  for (let _0x17c3da of _0x4c4f3a) {
    if (
      _0x17c3da.startOffset < _0x463be8 ||
      _0x17c3da.startOffset < 0 ||
      _0x17c3da.endOffset < _0x17c3da.startOffset ||
      _0x17c3da.endOffset > _0x765e88.dataStream["length"]
    )
      throw Error(
        "[DocsTable]: Cell text replacements must be ordered, non-overlapping, and inside the document body.",
      );
    let _0x465d11 = _0x17c3da.startOffset - _0x463be8;
    (_0x465d11 > 0 && _0x426bce.retain(_0x465d11),
      _0x17c3da.text["length"] > 0 &&
        _0x426bce.insert(
          _0x17c3da.text["length"],
          Gt(_0x17c3da.text, _0xcb1861, _0x4ca393),
        ));
    let _0x2188f7 = _0x17c3da.endOffset - _0x17c3da.startOffset;
    (_0x2188f7 > 0 && _0x426bce.delete(_0x2188f7),
      (_0x463be8 = _0x17c3da.endOffset));
  }
  return _0x33f29e.getInstance().editOp(_0x426bce.serialize(), _0x554177);
}
function Vt(_0x1253aa) {
  var _0x5c3da9;
  let _0x2ede39 = E(_0x1253aa.documentData),
    _0x8f788c = _0x2ede39.body,
    _0x2ac52f = w(_0x2ede39, _0x1253aa.tableId),
    _0x92a575 =
      _0x2ac52f == null || (_0x5c3da9 = _0x2ac52f.rows[_0x1253aa.row]) == null
        ? undefined
        : _0x5c3da9.cells[_0x1253aa.column];
  if (!(_0x8f788c != null && _0x8f788c.dataStream) || !_0x2ac52f || !_0x92a575)
    throw Error(
      "[DocsTable]: Cell " +
        _0x1253aa.row +
        ":" +
        _0x1253aa.column +
        "\x20is\x20not\x20found.",
    );
  let _0x5b796f = _0x92a575.startOffset + 1,
    _0x11c8c9 = _0x92a575.endOffset,
    _0x1d6205 = Ht(_0x1253aa.text),
    _0x489ff2 = _0x1d6205.length - (_0x11c8c9 - _0x5b796f);
  return (
    (_0x8f788c.dataStream =
      "" +
      _0x8f788c.dataStream["slice"](0, _0x5b796f) +
      _0x1d6205 +
      _0x8f788c.dataStream["slice"](_0x11c8c9)),
    Ut(_0x8f788c, _0x5b796f, _0x11c8c9, _0x1d6205, _0x489ff2),
    Yt(_0x2ede39, _0x1253aa.tableId, _0x11c8c9, _0x489ff2),
    { nextDocumentData: _0x2ede39 }
  );
}
function Ht(_0x123130) {
  return (
    _0x123130
      .replace(/\r\n/g, "\x0a")
      .replace(/\r/g, "\x0a")
      .split("\x0a")
      .join("\x0d\x0a") + "\x0d\x0a"
  );
}
function Ut(_0x510f25, _0x5f2b97, _0x4f9e14, _0x1ef310, _0x5ef124) {
  var _0x4d8be5, _0x5e8a3a, _0x54d68a, _0x28e125;
  let _0x99e9e0 = Wt(_0x510f25),
    _0x43a871 = new Set(
      (_0x510f25.sectionBreaks ?? []).map((_0xa0cdb3) => _0xa0cdb3.sectionId),
    ),
    _0x15895e = Ee(_0x510f25);
  ((_0x510f25.paragraphs = [
    ...Kt(_0x510f25.paragraphs ?? [], _0x5f2b97, _0x4f9e14, _0x5ef124),
    ...qt(_0x1ef310, "\x0d").map((_0x491db9) => ({
      startIndex: _0x5f2b97 + _0x491db9,
      paragraphId: _0x2794f4(_0x99e9e0),
    })),
  ].sort(
    (_0x268b14, _0x4fd63b) => _0x268b14.startIndex - _0x4fd63b.startIndex,
  )),
    (_0x510f25.sectionBreaks = [
      ...Kt(_0x510f25.sectionBreaks ?? [], _0x5f2b97, _0x4f9e14, _0x5ef124),
      ...qt(_0x1ef310, "\x0a").map((_0x2c1e2f) => ({
        startIndex: _0x5f2b97 + _0x2c1e2f,
        sectionId: _0x4c7466(_0x43a871),
      })),
    ].sort(
      (_0x1f1143, _0x469e3f) => _0x1f1143.startIndex - _0x469e3f.startIndex,
    )),
    (_0x510f25.customBlocks = _0x510f25.customBlocks
      ? Kt(_0x510f25.customBlocks, _0x5f2b97, _0x4f9e14, _0x5ef124)
      : undefined),
    (_0x510f25.textRuns =
      (_0x4d8be5 = _0x510f25.textRuns) == null
        ? undefined
        : _0x4d8be5
            .map((_0x3ff1be) => {
              let _0x407707 = Jt(
                _0x3ff1be.st,
                _0x3ff1be.ed,
                _0x5f2b97,
                _0x4f9e14,
                _0x5ef124,
              );
              return _0x407707 == null
                ? null
                : { ..._0x3ff1be, st: _0x407707.start, ed: _0x407707.end };
            })
            .filter((_0x1490bd) => _0x1490bd != null)),
    (_0x510f25.customRanges =
      (_0x5e8a3a = _0x510f25.customRanges) == null
        ? undefined
        : _0x5e8a3a
            .map((_0x291390) => {
              let _0x14b450 = Jt(
                _0x291390.startIndex,
                _0x291390.endIndex,
                _0x5f2b97,
                _0x4f9e14,
                _0x5ef124,
              );
              return _0x14b450 == null
                ? null
                : {
                    ..._0x291390,
                    startIndex: _0x14b450.start,
                    endIndex: _0x14b450.end,
                  };
            })
            .filter((_0x426f05) => _0x426f05 != null)),
    (_0x510f25.customDecorations =
      (_0x54d68a = _0x510f25.customDecorations) == null
        ? undefined
        : _0x54d68a
            .map((_0x566dfa) => {
              let _0x5d1c19 = Jt(
                _0x566dfa.startIndex,
                _0x566dfa.endIndex,
                _0x5f2b97,
                _0x4f9e14,
                _0x5ef124,
              );
              return _0x5d1c19 == null
                ? null
                : {
                    ..._0x566dfa,
                    startIndex: _0x5d1c19.start,
                    endIndex: _0x5d1c19.end,
                  };
            })
            .filter((_0x211a71) => _0x211a71 != null)),
    (_0x15895e.columnGroups =
      (_0x28e125 = _0x15895e.columnGroups) == null
        ? undefined
        : _0x28e125
            .map((_0x716fff) => {
              let _0x34a2bc = Jt(
                _0x716fff.startIndex,
                _0x716fff.endIndex,
                _0x5f2b97,
                _0x4f9e14,
                _0x5ef124,
              );
              return _0x34a2bc == null
                ? null
                : {
                    ..._0x716fff,
                    startIndex: _0x34a2bc.start,
                    endIndex: _0x34a2bc.end,
                  };
            })
            .filter((_0x32fa0d) => _0x32fa0d != null)));
}
function Wt(_0x5a4a3b) {
  return new Set(
    (_0x5a4a3b.paragraphs ?? []).map((_0xcad4a0) => _0xcad4a0.paragraphId),
  );
}
function Gt(_0x388496, _0xa09b74, _0x2a0a6e) {
  return {
    dataStream: _0x388496,
    paragraphs: qt(_0x388496, "\x0d").map((_0x15cd88) => ({
      startIndex: _0x15cd88,
      paragraphId: _0x2794f4(_0xa09b74),
    })),
    sectionBreaks: qt(_0x388496, "\x0a").map((_0x29358a) => ({
      startIndex: _0x29358a,
      sectionId: _0x4c7466(_0x2a0a6e),
    })),
  };
}
function Kt(_0x568906, _0x2b6529, _0x56f5e8, _0x20e80c) {
  return _0x568906
    .map((_0x273cec) =>
      _0x273cec.startIndex >= _0x2b6529 && _0x273cec.startIndex < _0x56f5e8
        ? null
        : _0x273cec.startIndex >= _0x56f5e8
          ? { ..._0x273cec, startIndex: _0x273cec.startIndex + _0x20e80c }
          : _0x273cec,
    )
    .filter((_0x68b1d9) => _0x68b1d9 != null);
}
function qt(_0x3663f0, _0x3e86d1) {
  let _0xd28390 = [];
  for (let _0x4a88ce = 0; _0x4a88ce < _0x3663f0.length; _0x4a88ce++)
    _0x3663f0[_0x4a88ce] === _0x3e86d1 && _0xd28390.push(_0x4a88ce);
  return _0xd28390;
}
function Jt(_0xe64811, _0x57015d, _0x177124, _0x4dc577, _0x3d6b56) {
  if (_0x57015d < _0x177124) return { start: _0xe64811, end: _0x57015d };
  if (_0xe64811 >= _0x4dc577)
    return { start: _0xe64811 + _0x3d6b56, end: _0x57015d + _0x3d6b56 };
  let _0x246ce6 = _0xe64811 < _0x177124 ? _0xe64811 : _0x177124,
    _0x1ec649 = _0x57015d >= _0x4dc577 ? _0x57015d + _0x3d6b56 : _0x177124;
  return _0x1ec649 < _0x246ce6 ? null : { start: _0x246ce6, end: _0x1ec649 };
}
function Yt(_0x546151, _0x6e1aff, _0xcfd7a, _0x4253ca) {
  var _0x25ee65;
  !((_0x25ee65 = _0x546151.body) != null && _0x25ee65.tables) ||
    _0x4253ca === 0 ||
    (_0x546151.body["tables"] = _0x546151.body["tables"].map((_0x284a59) =>
      _0x284a59.tableId === _0x6e1aff
        ? { ..._0x284a59, endIndex: _0x284a59.endIndex + _0x4253ca }
        : _0x284a59.startIndex >= _0xcfd7a
          ? {
              ..._0x284a59,
              startIndex: _0x284a59.startIndex + _0x4253ca,
              endIndex: _0x284a59.endIndex + _0x4253ca,
            }
          : _0x284a59,
    ));
}
function Xt(_0x5500be) {
  var _0x250ce3;
  let _0x87be7f = st({
      documentData: _0x5500be.documentData,
      metadata: _0x5500be.metadata,
      tableId: _0x5500be.tableId,
      row: 0,
      count: 1,
      position: "above",
    }),
    _0x11a0d2 =
      (_0x250ce3 = _0x87be7f.nextDocumentData["tableSource"]) == null
        ? undefined
        : _0x250ce3[_0x5500be.tableId];
  if (!_0x11a0d2)
    throw Error("[DocsTable]: Table " + _0x5500be.tableId + " is not found.");
  let _0x4e5d07 = _0x11a0d2.tableColumns["length"];
  return (
    _0x11a0d2.tableRows[0].tableCells["forEach"]((_0xcc1162, _0x2c45a3) => {
      if (_0x2c45a3 === 0) {
        ((_0xcc1162.columnSpan = _0x4e5d07), delete _0xcc1162.rowSpan);
        return;
      }
      ((_0xcc1162.rowSpan = 0), (_0xcc1162.columnSpan = 0));
    }),
    {
      nextDocumentData: _0x87be7f.nextDocumentData,
      nextMetadata: nt(_0x87be7f.nextMetadata, _0x5500be.tableId, true),
    }
  );
}
function Zt(_0x4f74b0) {
  var _0x1f4484;
  let _0x3b1ac6 = E(_0x4f74b0.documentData, {
      cloneBody: false,
      tableIds: [_0x4f74b0.tableId],
    }),
    _0x100922 =
      (_0x1f4484 = _0x3b1ac6.tableSource) == null
        ? undefined
        : _0x1f4484[_0x4f74b0.tableId];
  if (!_0x100922)
    throw Error(
      "[DocsTable]: Table " + _0x4f74b0.tableId + "\x20is\x20not\x20found.",
    );
  let _0x5e1ace = Math.min(
    Math.max(0, _0x4f74b0.headerRowCount),
    _0x100922.tableRows["length"],
  );
  return (
    _0x100922.tableRows["forEach"]((_0x2ec6ba, _0x58325a) => {
      ((_0x2ec6ba.repeatHeaderRow =
        _0x58325a < _0x5e1ace ? _0x572b43.TRUE : _0x572b43.FALSE),
        _0x58325a < _0x5e1ace
          ? (_0x2ec6ba.isFirstRow = _0x572b43.TRUE)
          : delete _0x2ec6ba.isFirstRow);
    }),
    {
      nextDocumentData: _0x3b1ac6,
      nextMetadata: tt(_0x4f74b0.metadata, _0x4f74b0.tableId, _0x5e1ace),
    }
  );
}
function Qt(_0x12421d) {
  var _0x104612;
  let _0x24e69a = E(_0x12421d.documentData, {
      cloneBody: false,
      tableIds: [_0x12421d.tableId],
    }),
    _0x2d7c1e =
      (_0x104612 = _0x24e69a.tableSource) == null
        ? undefined
        : _0x104612[_0x12421d.tableId];
  if (!_0x2d7c1e)
    throw Error("[DocsTable]: Table " + _0x12421d.tableId + " is not found.");
  let _0x550a4f = Math.min(_0x12421d.startRow, _0x12421d.endRow),
    _0x3437ab = Math.max(_0x12421d.startRow, _0x12421d.endRow),
    _0x442cbe = _0x2d7c1e.tableRows["slice"](_0x550a4f, _0x3437ab + 1),
    _0x11e2f5 =
      _0x442cbe.reduce((_0x26efa1, _0x595d0b) => _0x26efa1 + fn(_0x595d0b), 0) /
      _0x442cbe.length;
  return (
    _0x442cbe.forEach((_0x31b88d) => {
      _0x31b88d.trHeight = { hRule: _0x51ca5c.AT_LEAST, val: { v: _0x11e2f5 } };
    }),
    { nextDocumentData: _0x24e69a }
  );
}
function $t(_0x5352a5) {
  var _0x4b5f11;
  let _0x26f06c = E(_0x5352a5.documentData, {
      cloneBody: false,
      tableIds: [_0x5352a5.tableId],
    }),
    _0x315bf1 =
      (_0x4b5f11 = _0x26f06c.tableSource) == null
        ? undefined
        : _0x4b5f11[_0x5352a5.tableId];
  if (!_0x315bf1)
    throw Error("[DocsTable]: Table " + _0x5352a5.tableId + " is not found.");
  let _0x464572 = Math.min(_0x5352a5.startColumn, _0x5352a5.endColumn),
    _0x45e00e = Math.max(_0x5352a5.startColumn, _0x5352a5.endColumn),
    _0x19e02e = _0x315bf1.tableColumns["slice"](_0x464572, _0x45e00e + 1),
    _0x49f80c =
      _0x19e02e.reduce(
        (_0x321117, _0x16d514) => _0x321117 + _0x16d514.size["width"].v,
        0,
      ) / _0x19e02e.length;
  return (
    _0x19e02e.forEach((_0x568515) => {
      _0x568515.size["width"].v = _0x49f80c;
    }),
    { nextDocumentData: _0x26f06c }
  );
}
function en(_0x191b8d) {
  var _0x13e87e;
  let _0xfe3a93 = E(_0x191b8d.documentData, {
      cloneBody: false,
      tableIds: [_0x191b8d.tableId],
    }),
    _0x18f34d =
      (_0x13e87e = _0xfe3a93.tableSource) == null ||
      (_0x13e87e = _0x13e87e[_0x191b8d.tableId]) == null
        ? undefined
        : _0x13e87e.tableRows[_0x191b8d.row];
  if (!_0x18f34d)
    throw Error(
      "[DocsTable]: Row " + _0x191b8d.row + "\x20is\x20not\x20found.",
    );
  return (
    (_0x18f34d.trHeight = {
      hRule: _0x51ca5c.AT_LEAST,
      val: { v: Math.max(1, _0x191b8d.height) },
    }),
    { nextDocumentData: _0xfe3a93 }
  );
}
function tn(_0x4e097f) {
  var _0x50423f;
  let _0x315873 = E(_0x4e097f.documentData, {
      cloneBody: false,
      tableIds: [_0x4e097f.tableId],
    }),
    _0x3dad67 =
      (_0x50423f = _0x315873.tableSource) == null ||
      (_0x50423f = _0x50423f[_0x4e097f.tableId]) == null
        ? undefined
        : _0x50423f.tableColumns[_0x4e097f.column];
  if (!_0x3dad67)
    throw Error(
      "[DocsTable]:\x20Column\x20" + _0x4e097f.column + " is not found.",
    );
  return (
    (_0x3dad67.size["width"].v = Math.max(1, _0x4e097f.width)),
    { nextDocumentData: _0x315873 }
  );
}
function nn(_0x274409) {
  var _0x29ef89;
  if (_0x274409.targetOffset != null) return rn(_0x274409);
  let _0x4f9d31 = E(_0x274409.documentData, {
      cloneBody: false,
      tableIds: [_0x274409.tableId],
    }),
    _0x5f26fb =
      (_0x29ef89 = _0x4f9d31.tableSource) == null
        ? undefined
        : _0x29ef89[_0x274409.tableId];
  if (!_0x5f26fb)
    throw Error("[DocsTable]: Table " + _0x274409.tableId + " is not found.");
  return (
    (_0x5f26fb.textWrap = _0x1535f4.WRAP),
    (_0x5f26fb.position["positionH"].posOffset =
      (_0x5f26fb.position["positionH"].posOffset ?? 0) +
      (_0x274409.deltaX ?? 0)),
    (_0x5f26fb.position["positionV"].posOffset =
      (_0x5f26fb.position["positionV"].posOffset ?? 0) +
      (_0x274409.deltaY ?? 0)),
    { nextDocumentData: _0x4f9d31 }
  );
}
function rn(_0x36283d) {
  var _0x5b1142;
  let _0x555493 = E(_0x36283d.documentData, { tableIds: [_0x36283d.tableId] }),
    _0x1e9dbb = _0x555493.body,
    _0x2b2596 =
      (_0x5b1142 = _0x555493.tableSource) == null
        ? undefined
        : _0x5b1142[_0x36283d.tableId],
    _0x71b6df = w(_0x555493, _0x36283d.tableId);
  if (
    !(_0x1e9dbb != null && _0x1e9dbb.dataStream) ||
    !_0x1e9dbb.tables ||
    !_0x2b2596 ||
    !_0x71b6df ||
    _0x36283d.targetOffset == null
  )
    throw Error(
      "[DocsTable]: Table " + _0x36283d.tableId + " range is not found.",
    );
  let _0x509858 = _0x71b6df.startOffset,
    _0x5ab59b = _0x71b6df.endOffset,
    _0x1a6363 = _0x1e9dbb.dataStream["slice"](_0x509858, _0x5ab59b),
    _0x226657 = _0x1a6363.length,
    _0x4a502d = un(_0x36283d.targetOffset, 0, _0x1e9dbb.dataStream["length"]);
  if (
    (_0x4a502d >= _0x509858 && _0x4a502d <= _0x5ab59b) ||
    !an(_0x1e9dbb, _0x36283d.tableId, _0x4a502d)
  )
    return { nextDocumentData: _0x555493 };
  let _0x4a3a8c = _0x4a502d > _0x5ab59b ? _0x4a502d - _0x226657 : _0x4a502d,
    _0xd30b6 =
      _0x1e9dbb.dataStream["slice"](0, _0x509858) +
      _0x1e9dbb.dataStream["slice"](_0x5ab59b);
  return (
    (_0x1e9dbb.dataStream =
      _0xd30b6.slice(0, _0x4a3a8c) + _0x1a6363 + _0xd30b6.slice(_0x4a3a8c)),
    (_0x1e9dbb.tables = _0x1e9dbb.tables["map"]((_0x3fdc6a) =>
      _0x3fdc6a.tableId === _0x36283d.tableId
        ? {
            ..._0x3fdc6a,
            startIndex: _0x4a3a8c,
            endIndex: _0x4a3a8c + _0x226657,
          }
        : {
            ..._0x3fdc6a,
            startIndex: I(
              _0x3fdc6a.startIndex,
              _0x509858,
              _0x5ab59b,
              _0x4a502d,
              _0x4a3a8c,
              _0x226657,
            ),
            endIndex: I(
              _0x3fdc6a.endIndex,
              _0x509858,
              _0x5ab59b,
              _0x4a502d,
              _0x4a3a8c,
              _0x226657,
            ),
          },
    ).sort(
      (_0x4f3a7c, _0x11d7df) => _0x4f3a7c.startIndex - _0x11d7df.startIndex,
    )),
    ln(_0x1e9dbb, _0x509858, _0x5ab59b, _0x4a502d, _0x4a3a8c, _0x226657),
    (_0x2b2596.textWrap = _0x1535f4.NONE),
    (_0x2b2596.position["positionH"].posOffset = 0),
    (_0x2b2596.position["positionV"].posOffset = 0),
    { nextDocumentData: _0x555493 }
  );
}
function an(_0x3c6e25, _0x400f82, _0x488564) {
  return !(
    on(_0x3c6e25.tables, _0x400f82, _0x488564) ||
    sn(_0x3c6e25.blockRanges, _0x488564) ||
    cn(_0x3c6e25.customBlocks, _0x488564)
  );
}
function on(_0x1349ef, _0x38f553, _0x1d1427) {
  return !!(
    _0x1349ef != null &&
    _0x1349ef.some(
      (_0x3e4964) =>
        _0x3e4964.tableId !== _0x38f553 &&
        _0x3e4964.startIndex <= _0x1d1427 &&
        _0x1d1427 < _0x3e4964.endIndex,
    )
  );
}
function sn(_0x4d2c55, _0x5e8580) {
  return !!(
    _0x4d2c55 != null &&
    _0x4d2c55.some(
      (_0x49fcd3) =>
        _0x49fcd3.startIndex <= _0x5e8580 && _0x5e8580 <= _0x49fcd3.endIndex,
    )
  );
}
function cn(_0x298b5d, _0x4be273) {
  return !!(
    _0x298b5d != null &&
    _0x298b5d.some((_0x355a0c) => _0x355a0c.startIndex === _0x4be273)
  );
}
function ln(_0x1c4e73, _0x574b8d, _0xbc7091, _0x250bd9, _0x5d6a40, _0x2034b0) {
  var _0x407fa5,
    _0x4c6b5d,
    _0x20572e,
    _0x117f37,
    _0x456b90,
    _0x5296da,
    _0x2823e0,
    _0x49e0f6;
  let _0x59a15c = Ee(_0x1c4e73);
  ((_0x1c4e73.paragraphs =
    (_0x407fa5 = _0x1c4e73.paragraphs) == null
      ? undefined
      : _0x407fa5
          .map((_0x19d657) => ({
            ..._0x19d657,
            startIndex: I(
              _0x19d657.startIndex,
              _0x574b8d,
              _0xbc7091,
              _0x250bd9,
              _0x5d6a40,
              _0x2034b0,
            ),
          }))
          .sort(
            (_0x11a1cf, _0x1c6cc2) =>
              _0x11a1cf.startIndex - _0x1c6cc2.startIndex,
          )),
    (_0x1c4e73.sectionBreaks =
      (_0x4c6b5d = _0x1c4e73.sectionBreaks) == null
        ? undefined
        : _0x4c6b5d
            .map((_0x1dad03) => ({
              ..._0x1dad03,
              startIndex: I(
                _0x1dad03.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0x4cface, _0x13d4f8) =>
                _0x4cface.startIndex - _0x13d4f8.startIndex,
            )),
    (_0x1c4e73.customBlocks =
      (_0x20572e = _0x1c4e73.customBlocks) == null
        ? undefined
        : _0x20572e
            .map((_0x3cb832) => ({
              ..._0x3cb832,
              startIndex: I(
                _0x3cb832.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0x57ec56, _0x25f19c) =>
                _0x57ec56.startIndex - _0x25f19c.startIndex,
            )),
    (_0x1c4e73.blockRanges =
      (_0x117f37 = _0x1c4e73.blockRanges) == null
        ? undefined
        : _0x117f37
            .map((_0xc6160d) => ({
              ..._0xc6160d,
              startIndex: I(
                _0xc6160d.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
              endIndex: I(
                _0xc6160d.endIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0x110401, _0x572ec6) =>
                _0x110401.startIndex - _0x572ec6.startIndex,
            )),
    (_0x1c4e73.textRuns =
      (_0x456b90 = _0x1c4e73.textRuns) == null
        ? undefined
        : _0x456b90
            .map((_0x2e510e) => ({
              ..._0x2e510e,
              st: I(
                _0x2e510e.st,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
              ed: I(
                _0x2e510e.ed,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort((_0x19d06e, _0x59bfed) => _0x19d06e.st - _0x59bfed.st)),
    (_0x1c4e73.customRanges =
      (_0x5296da = _0x1c4e73.customRanges) == null
        ? undefined
        : _0x5296da
            .map((_0x25ad28) => ({
              ..._0x25ad28,
              startIndex: I(
                _0x25ad28.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
              endIndex: I(
                _0x25ad28.endIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0x5a6dae, _0x24efec) =>
                _0x5a6dae.startIndex - _0x24efec.startIndex,
            )),
    (_0x1c4e73.customDecorations =
      (_0x2823e0 = _0x1c4e73.customDecorations) == null
        ? undefined
        : _0x2823e0
            .map((_0x516955) => ({
              ..._0x516955,
              startIndex: I(
                _0x516955.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
              endIndex: I(
                _0x516955.endIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0xda6cf7, _0x47bc5e) =>
                _0xda6cf7.startIndex - _0x47bc5e.startIndex,
            )),
    (_0x59a15c.columnGroups =
      (_0x49e0f6 = _0x59a15c.columnGroups) == null
        ? undefined
        : _0x49e0f6
            .map((_0x4f4e98) => ({
              ..._0x4f4e98,
              startIndex: I(
                _0x4f4e98.startIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
              endIndex: I(
                _0x4f4e98.endIndex,
                _0x574b8d,
                _0xbc7091,
                _0x250bd9,
                _0x5d6a40,
                _0x2034b0,
              ),
            }))
            .sort(
              (_0x5eeef1, _0x16b43b) =>
                _0x5eeef1.startIndex - _0x16b43b.startIndex,
            )));
}
function I(_0x30d209, _0x3b78eb, _0x56cca3, _0x1bb9f5, _0x20749d, _0x2ceef3) {
  return _0x30d209 >= _0x3b78eb && _0x30d209 < _0x56cca3
    ? _0x20749d + _0x30d209 - _0x3b78eb
    : _0x1bb9f5 < _0x3b78eb && _0x30d209 >= _0x1bb9f5 && _0x30d209 < _0x3b78eb
      ? _0x30d209 + _0x2ceef3
      : _0x1bb9f5 > _0x56cca3 && _0x30d209 >= _0x56cca3 && _0x30d209 < _0x1bb9f5
        ? _0x30d209 - _0x2ceef3
        : _0x30d209;
}
function un(_0x37a6a7, _0x510f02, _0x42914a) {
  return Math.min(Math.max(_0x37a6a7, _0x510f02), _0x42914a);
}
function dn(_0x15bf54, _0x5ccbd0) {
  var _0x18d183;
  return (
    ((_0x18d183 = N(_0x15bf54).tables[_0x5ccbd0]) == null
      ? undefined
      : _0x18d183.headerRowCount) ?? 0
  );
}
function fn(_0xc29ec6) {
  var _0x46637e;
  return (
    ((_0x46637e = _0xc29ec6.trHeight) == null ||
    (_0x46637e = _0x46637e.val) == null
      ? undefined
      : _0x46637e.v) ?? 0
  );
}
let pn = (function (_0x4cbd99) {
    return (
      (_0x4cbd99.Text = "text"),
      (_0x4cbd99.Number = "number"),
      (_0x4cbd99.Date = "date"),
      (_0x4cbd99.Checkbox = "checkbox"),
      (_0x4cbd99.Dropdown = "dropdown"),
      _0x4cbd99
    );
  })({}),
  mn = (function (_0x34a18a) {
    return (
      (_0x34a18a.None = "none"),
      (_0x34a18a.Text = "text"),
      (_0x34a18a.Cell = "cell"),
      (_0x34a18a.Range = "range"),
      (_0x34a18a.Row = "row"),
      (_0x34a18a.Column = "column"),
      (_0x34a18a.Table = "table"),
      _0x34a18a
    );
  })({}),
  hn = (function (_0x57aa26) {
    return (
      (_0x57aa26.Rect = "rect"),
      (_0x57aa26.Structural = "structural"),
      (_0x57aa26.Text = "text"),
      _0x57aa26
    );
  })({}),
  gn = (function (_0x456560) {
    return ((_0x456560.Asc = "asc"), (_0x456560.Desc = "desc"), _0x456560);
  })({});
function _n(_0x3c740a) {
  var _0x12cd8a, _0x1984c7;
  let _0xc833f9 = vn(_0x3c740a),
    _0x23a61e = E(_0x3c740a.documentData, { tableIds: [_0x3c740a.tableId] }),
    _0x32f362 =
      (_0x12cd8a = _0x23a61e.tableSource) == null
        ? undefined
        : _0x12cd8a[_0x3c740a.tableId],
    _0x6ce1d3 = w(_0x23a61e, _0x3c740a.tableId);
  if (
    !_0x32f362 ||
    !_0x6ce1d3 ||
    !((_0x1984c7 = _0x23a61e.body) != null && _0x1984c7.dataStream)
  )
    throw Error("[DocsTable]: Table " + _0x3c740a.tableId + " is not found.");
  let _0x13e7d2 = _0xc833f9.sortedRowIndexes["map"](
    (_0xd0bcd) => _0x32f362.tableRows[_0xd0bcd],
  );
  _0x32f362.tableRows["splice"](
    _0xc833f9.sortStartRow,
    _0x13e7d2.length,
    ..._0x13e7d2,
  );
  let _0x261f94 = _0x23a61e.body["dataStream"].slice(
      _0x6ce1d3.startOffset,
      _0x6ce1d3.endOffset,
    ),
    _0x4589d9 = _0x6ce1d3.rows["slice"](0, _0xc833f9.sortStartRow)
      .map((_0xb05f4) =>
        _0x23a61e.body["dataStream"].slice(
          _0xb05f4.startOffset,
          _0xb05f4.endOffset + 1,
        ),
      )
      .join(""),
    _0xdbc603 = _0xc833f9.sortedRowIndexes["map"]((_0x4f33ee) => {
      let _0x5be8e0 = _0x6ce1d3.rows[_0x4f33ee];
      return _0x23a61e.body["dataStream"].slice(
        _0x5be8e0.startOffset,
        _0x5be8e0.endOffset + 1,
      );
    }).join(""),
    _0x150d29 =
      "" +
      _0x261f94[0] +
      _0x4589d9 +
      _0xdbc603 +
      _0x261f94[_0x261f94.length - 1];
  return (
    (_0x23a61e.body["dataStream"] =
      "" +
      _0x23a61e.body["dataStream"].slice(0, _0x6ce1d3.startOffset) +
      _0x150d29 +
      _0x23a61e.body["dataStream"].slice(_0x6ce1d3.endOffset)),
    { nextDocumentData: _0x23a61e }
  );
}
function vn(_0x483806) {
  var _0x19913c, _0x51cbcc, _0x4655ee;
  let _0x588a2 =
      (_0x19913c = _0x483806.documentData["tableSource"]) == null
        ? undefined
        : _0x19913c[_0x483806.tableId],
    _0x49e079 = w(_0x483806.documentData, _0x483806.tableId),
    _0x34d98a =
      (_0x51cbcc = _0x483806.documentData["body"]) == null
        ? undefined
        : _0x51cbcc.dataStream;
  if (!_0x588a2 || !_0x49e079 || !_0x34d98a)
    throw Error("[DocsTable]: Table is not found.");
  yn(_0x588a2.tableRows);
  let _0x23f5ca = N(_0x483806.metadata).tables[_0x483806.tableId],
    _0xd91b81 =
      (_0x23f5ca != null && _0x23f5ca.titleRow ? 1 : 0) +
      dn(_0x483806.metadata, _0x483806.tableId),
    _0x175292 = Math.min(_0xd91b81, _0x588a2.tableRows["length"]),
    _0x1a330b =
      (_0x23f5ca == null ||
      (_0x4655ee = _0x23f5ca.columnTypes) == null ||
      (_0x4655ee = _0x4655ee[_0x483806.column]) == null
        ? undefined
        : _0x4655ee.type) ?? "text",
    _0x41a8fe = _0x49e079.rows["slice"](_0x175292).map(
      (_0x56b57f, _0x38bb5d) => {
        let _0x32771f = _0x56b57f.cells[_0x483806.column];
        return {
          index: _0x175292 + _0x38bb5d,
          value: _0x32771f
            ? _0x34d98a
                .slice(_0x32771f.startOffset + 1, _0x32771f.endOffset)
                .trim()
            : "",
        };
      },
    );
  return (
    _0x41a8fe.sort((_0x1cf427, _0x344ab8) =>
      xn(_0x1cf427, _0x344ab8, _0x1a330b, _0x483806.direction),
    ),
    {
      sortStartRow: _0x175292,
      sortedRowIndexes: _0x41a8fe.map((_0x19bbe8) => _0x19bbe8.index),
    }
  );
}
function yn(_0x5cb33f) {
  if (
    _0x5cb33f.some((_0x1e2e9d) =>
      _0x1e2e9d.tableCells["some"]((_0x1b0414) => bn(_0x1b0414)),
    )
  )
    throw Error(
      "[DocsTable]: Cannot sort a table with row-spanning merged cells.",
    );
}
function bn(_0x1448e3) {
  return (_0x1448e3.rowSpan ?? 1) > 1 || _0x1448e3.rowSpan === 0;
}
function xn(_0x39ec33, _0x191532, _0x49188a, _0x47f056) {
  let _0x56eaee = _0x47f056 === "asc" ? 1 : -1,
    _0x2dc0be = Sn(_0x39ec33.value, _0x191532.value, _0x49188a);
  return _0x2dc0be === 0
    ? _0x39ec33.index - _0x191532.index
    : _0x2dc0be * _0x56eaee;
}
function Sn(_0x448437, _0x190bbb, _0x2f9e46) {
  return _0x2f9e46 === "number"
    ? Cn(_0x448437) - Cn(_0x190bbb)
    : _0x2f9e46 === "date"
      ? wn(_0x448437) - wn(_0x190bbb)
      : _0x2f9e46 === "checkbox"
        ? Tn(_0x448437) - Tn(_0x190bbb)
        : _0x448437.localeCompare(_0x190bbb);
}
function Cn(_0x47134d) {
  let _0x464cec = Number(_0x47134d);
  return Number.isFinite(_0x464cec) ? _0x464cec : 1 / 0;
}
function wn(_0x4ed73f) {
  let _0x4d16d8 = Date.parse(_0x4ed73f);
  return Number.isNaN(_0x4d16d8) ? 1 / 0 : _0x4d16d8;
}
function Tn(_0x5559d1) {
  return +!!["true", "1", "yes", "checked"].includes(_0x5559d1.toLowerCase());
}
function L(_0x59deb9, _0x3e0ff8) {
  return (
    (_0x59deb9 == null ? undefined : _0x59deb9.segmentId) ??
    (_0x3e0ff8 == null ? undefined : _0x3e0ff8.segmentId) ??
    ""
  );
}
function R(_0x4749da, _0x28d36f) {
  let _0x3fea5c =
      (_0x4749da == null ? undefined : _0x4749da.startRow) ??
      (_0x28d36f == null ? undefined : _0x28d36f.startRow),
    _0x4e23c5 =
      (_0x4749da == null ? undefined : _0x4749da.endRow) ??
      (_0x28d36f == null ? undefined : _0x28d36f.endRow),
    _0x493e05 =
      (_0x4749da == null ? undefined : _0x4749da.startColumn) ??
      (_0x28d36f == null ? undefined : _0x28d36f.startColumn),
    _0x51a3cc =
      (_0x4749da == null ? undefined : _0x4749da.endColumn) ??
      (_0x28d36f == null ? undefined : _0x28d36f.endColumn);
  return _0x3fea5c == null ||
    _0x4e23c5 == null ||
    _0x493e05 == null ||
    _0x51a3cc == null
    ? null
    : {
        endColumn: _0x51a3cc,
        endRow: _0x4e23c5,
        startColumn: _0x493e05,
        startRow: _0x3fea5c,
      };
}
function z(_0x5ae326, _0xb34f5 = "") {
  var _0x5b7c73;
  if (!_0xb34f5) return _0x5ae326.getSnapshot();
  let _0x5698ee =
    (_0x5b7c73 = _0x5ae326.getSelfOrHeaderFooterModel(_0xb34f5)) == null
      ? undefined
      : _0x5b7c73.getSnapshot();
  if (!_0x5698ee) return null;
  let _0x17bc5d = _0x5ae326.getSnapshot();
  return {
    ..._0x5698ee,
    documentStyle: _0x17bc5d.documentStyle,
    drawings: _0x17bc5d.drawings,
    drawingsOrder: _0x17bc5d.drawingsOrder,
    tableSource: _0x17bc5d.tableSource,
  };
}
function B(_0x337cc1, _0x3c1aa9, _0x584df2, _0x33ad91) {
  return pr(_0x584df2, _0x33ad91)
    ? null
    : _0x584df2 === undefined
      ? _0x337cc1.insertOp(_0x3c1aa9, _0x33ad91)
      : _0x33ad91 === undefined
        ? _0x337cc1.removeOp(_0x3c1aa9, _0x584df2)
        : _0x337cc1.replaceOp(_0x3c1aa9, _0x584df2, _0x33ad91);
}
function En(_0x1e5a47, _0x4d4f52, _0x115e0c, _0x28c220) {
  var _0x17dc3f, _0x5913aa, _0x203dd4;
  let _0xa980b8 =
    (_0x17dc3f = _0x1e5a47.tableSource) == null ||
    (_0x17dc3f = _0x17dc3f[_0x4d4f52]) == null
      ? undefined
      : _0x17dc3f.tableColumns[_0x115e0c];
  if (!_0xa980b8) return null;
  let _0x56910f = Math.max(1, _0x28c220);
  if (
    ((_0x5913aa = _0xa980b8.size) == null ||
    (_0x5913aa = _0x5913aa.width) == null
      ? undefined
      : _0x5913aa.v) === _0x56910f
  )
    return null;
  let _0x2d2588 = _0x33f29e.getInstance();
  return _0xa980b8.size
    ? _0xa980b8.size["width"]
      ? _0x2d2588.replaceOp(
          [
            "tableSource",
            _0x4d4f52,
            "tableColumns",
            _0x115e0c,
            "size",
            "width",
            "v",
          ],
          (_0x203dd4 = _0xa980b8.size) == null ||
            (_0x203dd4 = _0x203dd4.width) == null
            ? undefined
            : _0x203dd4.v,
          _0x56910f,
        )
      : _0x2d2588.insertOp(
          [
            "tableSource",
            _0x4d4f52,
            "tableColumns",
            _0x115e0c,
            "size",
            "width",
          ],
          { v: _0x56910f },
        )
    : _0x2d2588.insertOp(
        ["tableSource", _0x4d4f52, "tableColumns", _0x115e0c, "size"],
        { type: _0x212251.SPECIFIED, width: { v: _0x56910f } },
      );
}
function Dn(_0x3a5623, _0xc936bd, _0x2e50ee, _0x569326) {
  var _0xa4e54e, _0x10a7d3, _0x544b22, _0x19c788, _0xaf7059;
  let _0x17cff5 =
    (_0xa4e54e = _0x3a5623.tableSource) == null
      ? undefined
      : _0xa4e54e[_0xc936bd];
  if (!_0x17cff5) return null;
  let _0x527e5f = _0x33f29e.getInstance();
  return H(
    [
      B(
        _0x527e5f,
        ["tableSource", _0xc936bd, "textWrap"],
        _0x17cff5.textWrap,
        _0x1535f4.WRAP,
      ),
      B(
        _0x527e5f,
        ["tableSource", _0xc936bd, "position", "positionH", "posOffset"],
        (_0x10a7d3 = _0x17cff5.position) == null ||
          (_0x10a7d3 = _0x10a7d3.positionH) == null
          ? undefined
          : _0x10a7d3.posOffset,
        (((_0x544b22 = _0x17cff5.position) == null ||
        (_0x544b22 = _0x544b22.positionH) == null
          ? undefined
          : _0x544b22.posOffset) ?? 0) + _0x2e50ee,
      ),
      B(
        _0x527e5f,
        ["tableSource", _0xc936bd, "position", "positionV", "posOffset"],
        (_0x19c788 = _0x17cff5.position) == null ||
          (_0x19c788 = _0x19c788.positionV) == null
          ? undefined
          : _0x19c788.posOffset,
        (((_0xaf7059 = _0x17cff5.position) == null ||
        (_0xaf7059 = _0xaf7059.positionV) == null
          ? undefined
          : _0xaf7059.posOffset) ?? 0) + _0x569326,
      ),
    ].filter(Boolean),
  );
}
function On(_0x394fed, _0x19c457, _0x107709, _0x27cc37 = ["body"]) {
  var _0x1f2dbf, _0x3cdc36, _0x3077ce;
  let _0x827145 = _0x394fed.body,
    _0x50c364 =
      (_0x1f2dbf = _0x394fed.tableSource) == null
        ? undefined
        : _0x1f2dbf[_0x19c457],
    _0x45db72 = w(_0x394fed, _0x19c457);
  if (!(_0x827145 != null && _0x827145.dataStream) || !_0x50c364 || !_0x45db72)
    return null;
  let _0xb1199c = Math.min(
    Math.max(_0x107709, 0),
    _0x827145.dataStream["length"],
  );
  if (
    (_0xb1199c >= _0x45db72.startOffset && _0xb1199c <= _0x45db72.endOffset) ||
    !kn(_0x827145, _0x19c457, _0xb1199c)
  )
    return null;
  let _0x438a99 = Kn(
    _0x827145,
    _0x45db72.startOffset,
    _0x45db72.endOffset,
    _0xb1199c,
    _0x27cc37,
  );
  if (!_0x438a99) return null;
  let _0x252f7d = _0x33f29e.getInstance();
  return H(
    [
      _0x438a99,
      B(
        _0x252f7d,
        ["tableSource", _0x19c457, "textWrap"],
        _0x50c364.textWrap,
        _0x1535f4.NONE,
      ),
      B(
        _0x252f7d,
        ["tableSource", _0x19c457, "position", "positionH", "posOffset"],
        (_0x3cdc36 = _0x50c364.position) == null ||
          (_0x3cdc36 = _0x3cdc36.positionH) == null
          ? undefined
          : _0x3cdc36.posOffset,
        0,
      ),
      B(
        _0x252f7d,
        ["tableSource", _0x19c457, "position", "positionV", "posOffset"],
        (_0x3077ce = _0x50c364.position) == null ||
          (_0x3077ce = _0x3077ce.positionV) == null
          ? undefined
          : _0x3077ce.posOffset,
        0,
      ),
    ].filter(Boolean),
  );
}
function kn(_0x3acb18, _0x45cdf0, _0x246a36) {
  var _0x14d8f8, _0x269a75, _0x20a5db;
  return !(
    ((_0x14d8f8 = _0x3acb18.tables) != null &&
      _0x14d8f8.some(
        (_0x20ba7b) =>
          _0x20ba7b.tableId !== _0x45cdf0 &&
          _0x20ba7b.startIndex <= _0x246a36 &&
          _0x246a36 < _0x20ba7b.endIndex,
      )) ||
    ((_0x269a75 = _0x3acb18.blockRanges) != null &&
      _0x269a75.some(
        (_0x2e4002) =>
          _0x2e4002.startIndex <= _0x246a36 && _0x246a36 <= _0x2e4002.endIndex,
      )) ||
    ((_0x20a5db = _0x3acb18.customBlocks) != null &&
      _0x20a5db.some((_0x2c305c) => _0x2c305c.startIndex === _0x246a36))
  );
}
function An(
  _0xc66227,
  _0x100875,
  _0x44a7ce,
  _0x4e9b15,
  _0x52c78c = _0x51ca5c.AT_LEAST,
) {
  var _0x56c157, _0x1f58d7, _0x1a96fb;
  let _0x50c2f2 =
    (_0x56c157 = _0xc66227.tableSource) == null ||
    (_0x56c157 = _0x56c157[_0x100875]) == null
      ? undefined
      : _0x56c157.tableRows[_0x44a7ce];
  if (!_0x50c2f2) return null;
  let _0x5a7749 = { hRule: _0x52c78c, val: { v: Math.max(1, _0x4e9b15) } };
  return _0x50c2f2.trHeight
    ? [
        B(
          _0x33f29e.getInstance(),
          [
            "tableSource",
            _0x100875,
            "tableRows",
            _0x44a7ce,
            "trHeight",
            "hRule",
          ],
          (_0x1f58d7 = _0x50c2f2.trHeight) == null
            ? undefined
            : _0x1f58d7.hRule,
          _0x5a7749.hRule,
        ),
        B(
          _0x33f29e.getInstance(),
          [
            "tableSource",
            _0x100875,
            "tableRows",
            _0x44a7ce,
            "trHeight",
            "val",
            "v",
          ],
          (_0x1a96fb = _0x50c2f2.trHeight) == null ||
            (_0x1a96fb = _0x1a96fb.val) == null
            ? undefined
            : _0x1a96fb.v,
          _0x5a7749.val["v"],
        ),
      ]
        .filter(Boolean)
        .reduce(
          (_0x3bceea, _0x20ee4b) => _0x33f29e.compose(_0x3bceea, _0x20ee4b),
          null,
        )
    : _0x33f29e
        .getInstance()
        .insertOp(
          ["tableSource", _0x100875, "tableRows", _0x44a7ce, "trHeight"],
          _0x5a7749,
        );
}
function jn(_0x27dd04, _0x21a6fa, _0x465131, _0x583ac7) {
  var _0x24f5ea;
  let _0x1017c6 =
    (_0x24f5ea = _0x27dd04.tableSource) == null
      ? undefined
      : _0x24f5ea[_0x21a6fa];
  if (!_0x1017c6) return null;
  let _0x27eacc = Math.min(_0x465131, _0x583ac7),
    _0x5d25a4 = Math.max(_0x465131, _0x583ac7),
    _0x42cbd0 = _0x1017c6.tableRows["slice"](_0x27eacc, _0x5d25a4 + 1);
  if (!_0x42cbd0.length) return null;
  let _0x5d6d2c =
    _0x42cbd0.reduce((_0x5e1de1, _0x582061) => {
      var _0x1c82cd;
      return (
        _0x5e1de1 +
        (((_0x1c82cd = _0x582061.trHeight) == null ||
        (_0x1c82cd = _0x1c82cd.val) == null
          ? undefined
          : _0x1c82cd.v) ?? 0)
      );
    }, 0) / _0x42cbd0.length;
  return _0x42cbd0
    .map((_0x6ba1c1, _0x371f80) =>
      An(_0x27dd04, _0x21a6fa, _0x27eacc + _0x371f80, _0x5d6d2c),
    )
    .filter(Boolean)
    .reduce(
      (_0x13d705, _0x2eebf0) => _0x33f29e.compose(_0x13d705, _0x2eebf0),
      null,
    );
}
function Mn(_0x1d2049, _0x5ada9f, _0x33044d, _0x23aac2) {
  var _0xd4dc2;
  let _0x14d2f5 =
    (_0xd4dc2 = _0x1d2049.tableSource) == null
      ? undefined
      : _0xd4dc2[_0x5ada9f];
  if (!_0x14d2f5) return null;
  let _0x48a115 = Math.min(_0x33044d, _0x23aac2),
    _0x523867 = Math.max(_0x33044d, _0x23aac2),
    _0x55b15a = _0x14d2f5.tableColumns["slice"](_0x48a115, _0x523867 + 1);
  if (!_0x55b15a.length) return null;
  let _0x421c36 =
    _0x55b15a.reduce((_0x2ffe2f, _0x5d723e) => {
      var _0x215686;
      return (
        _0x2ffe2f +
        (((_0x215686 = _0x5d723e.size) == null ||
        (_0x215686 = _0x215686.width) == null
          ? undefined
          : _0x215686.v) ?? 0)
      );
    }, 0) / _0x55b15a.length;
  return _0x55b15a
    .map((_0x78886c, _0x1e6c57) =>
      En(_0x1d2049, _0x5ada9f, _0x48a115 + _0x1e6c57, _0x421c36),
    )
    .filter(Boolean)
    .reduce(
      (_0x584a2d, _0x131879) => _0x33f29e.compose(_0x584a2d, _0x131879),
      null,
    );
}
function Nn(_0x18c414, _0xdd8d54, _0x512164) {
  var _0x1af5fa;
  let _0x28e432 =
    (_0x1af5fa = _0x18c414.tableSource) == null
      ? undefined
      : _0x1af5fa[_0xdd8d54];
  if (!_0x28e432) return null;
  let _0x571d32 = Math.min(
      Math.max(0, _0x512164),
      _0x28e432.tableRows["length"],
    ),
    _0x5a7ab0 = _0x33f29e.getInstance(),
    _0x1d5cfb = [];
  return (
    _0x28e432.tableRows["forEach"]((_0x55b6e0, _0x454451) => {
      let _0x1db699 = _0x454451 < _0x571d32 ? _0x572b43.TRUE : _0x572b43.FALSE,
        _0xeff925 = _0x454451 < _0x571d32 ? _0x572b43.TRUE : undefined,
        _0x59d3fa = B(
          _0x5a7ab0,
          ["tableSource", _0xdd8d54, "tableRows", _0x454451, "repeatHeaderRow"],
          _0x55b6e0.repeatHeaderRow,
          _0x1db699,
        ),
        _0x2b9138 = B(
          _0x5a7ab0,
          ["tableSource", _0xdd8d54, "tableRows", _0x454451, "isFirstRow"],
          _0x55b6e0.isFirstRow,
          _0xeff925,
        );
      (_0x59d3fa && _0x1d5cfb.push(_0x59d3fa),
        _0x2b9138 && _0x1d5cfb.push(_0x2b9138));
    }),
    { actions: H(_0x1d5cfb), headerRowCount: _0x571d32 }
  );
}
function Pn(
  _0x49a25f,
  _0x533506,
  _0x1944e0,
  _0x32f7cb,
  _0x5ebd65,
  _0x4cd78c = {},
) {
  var _0x47270e;
  let _0x9def25 =
      (_0x47270e = _0x49a25f.tableSource) == null
        ? undefined
        : _0x47270e[_0x533506],
    _0x1e12e9 = w(_0x49a25f, _0x533506);
  if (
    !_0x9def25 ||
    !_0x1e12e9 ||
    _0x32f7cb <= 0 ||
    _0x1944e0 < 0 ||
    _0x1944e0 >= _0x9def25.tableColumns["length"]
  )
    return null;
  let _0x2ed10c = _0x5ebd65 === "left" ? _0x1944e0 : _0x1944e0 + 1,
    _0x2ceaa7 = _0x9def25.tableColumns[_0x1944e0],
    _0x41409e = _0x4cd78c.insertedColumnWidth ?? _0x2ceaa7.size["width"].v,
    _0x48330f = _0x4cd78c.preserveTotalWidth ?? true,
    _0x16ab09 = _0x9def25.tableColumns["reduce"](
      (_0x4600c8, _0x1fb8a1) => _0x4600c8 + _0x1fb8a1.size["width"].v,
      0,
    ),
    _0x517051 =
      _0x48330f && _0x16ab09 > 0
        ? _0x16ab09 / (_0x16ab09 + _0x41409e * _0x32f7cb)
        : 1,
    _0x39556a = Fn(_0x9def25, _0x2ed10c, _0x32f7cb),
    _0x17f7a8 = ar(_0x9def25, _0x39556a, (_0x17effe) =>
      _0x17effe >= _0x2ed10c ? _0x17effe + _0x32f7cb : _0x17effe,
    );
  (In(
    _0x17f7a8,
    _0x9def25,
    _0x533506,
    _0x48330f,
    _0x16ab09,
    _0x41409e,
    _0x32f7cb,
    _0x517051,
  ),
    Ln(
      _0x17f7a8,
      _0x9def25,
      _0x533506,
      _0x1944e0,
      _0x2ed10c,
      _0x32f7cb,
      _0x41409e,
      _0x517051,
      _0x39556a,
    ));
  let _0x1e0206 = F(
    _0x49a25f,
    Rn(_0x1e12e9, _0x1944e0, _0x32f7cb, _0x5ebd65),
    _0x4cd78c.bodyPath ?? ["body"],
  );
  return _0x1e0206
    ? (_0x17f7a8.push(_0x1e0206),
      { actions: H(_0x17f7a8), cursorColumn: _0x2ed10c })
    : null;
}
function Fn(_0x44820e, _0xb05443, _0x105889) {
  return rr(
    k(_0x44820e).map((_0x29fb2d) =>
      _0xb05443 <= _0x29fb2d.startColumn
        ? {
            ..._0x29fb2d,
            startColumn: _0x29fb2d.startColumn + _0x105889,
            endColumn: _0x29fb2d.endColumn + _0x105889,
          }
        : _0xb05443 <= _0x29fb2d.endColumn
          ? { ..._0x29fb2d, endColumn: _0x29fb2d.endColumn + _0x105889 }
          : _0x29fb2d,
    ),
  );
}
function In(
  _0x3548f8,
  _0xdae9e2,
  _0x5b3774,
  _0x10b8e1,
  _0x21bbbd,
  _0x421d3d,
  _0x70432b,
  _0x431fb8,
) {
  var _0x251251;
  let _0xf8e8e5 = _0x33f29e.getInstance();
  if (_0x10b8e1) {
    _0xdae9e2.tableColumns["forEach"]((_0x5ed0cc, _0x4e9a0b) => {
      let _0x29d9f2 = B(
        _0xf8e8e5,
        [
          "tableSource",
          _0x5b3774,
          "tableColumns",
          _0x4e9a0b,
          "size",
          "width",
          "v",
        ],
        _0x5ed0cc.size["width"].v,
        _0x5ed0cc.size["width"].v * _0x431fb8,
      );
      _0x29d9f2 && _0x3548f8.push(_0x29d9f2);
    });
    return;
  }
  if ((_0x251251 = _0xdae9e2.size) != null && _0x251251.width) {
    let _0x38e84f = B(
      _0xf8e8e5,
      ["tableSource", _0x5b3774, "size", "width", "v"],
      _0xdae9e2.size["width"].v,
      _0x21bbbd + _0x421d3d * _0x70432b,
    );
    _0x38e84f && _0x3548f8.push(_0x38e84f);
  }
}
function Ln(
  _0x5e8b4c,
  _0xd04daa,
  _0x3d22fe,
  _0x5c53a7,
  _0x30d46c,
  _0x544c8e,
  _0x2ea9c2,
  _0x19754c,
  _0x424ce4,
) {
  let _0x50ca69 = _0x33f29e.getInstance(),
    _0xbe9cc3 = _0xd04daa.tableColumns[_0x5c53a7];
  for (let _0x444573 = 0; _0x444573 < _0x544c8e; _0x444573++) {
    let _0x729e66 = V(_0xbe9cc3);
    ((_0x729e66.size["width"].v = _0x2ea9c2 * _0x19754c),
      _0x5e8b4c.push(
        _0x50ca69.insertOp(
          ["tableSource", _0x3d22fe, "tableColumns", _0x30d46c + _0x444573],
          _0x729e66,
        ),
      ));
  }
  _0xd04daa.tableRows["forEach"]((_0x79a9eb, _0x48da55) => {
    for (let _0x4a5546 = 0; _0x4a5546 < _0x544c8e; _0x4a5546++) {
      let _0x27d373 = V(_0x79a9eb.tableCells[_0x5c53a7]);
      (sr(_0x27d373, _0x48da55, _0x30d46c + _0x4a5546, _0x424ce4),
        _0x5e8b4c.push(
          _0x50ca69.insertOp(
            [
              "tableSource",
              _0x3d22fe,
              "tableRows",
              _0x48da55,
              "tableCells",
              _0x30d46c + _0x4a5546,
            ],
            _0x27d373,
          ),
        ));
    }
  });
}
function Rn(_0x8727fa, _0x3accf5, _0x5ae190, _0x26b542) {
  let _0x223455 = fr(dr(), _0x5ae190);
  return _0x8727fa.rows["map"]((_0x4e21b6) => {
    let _0x1aae0c = _0x4e21b6.cells[_0x3accf5],
      _0xa579cf =
        _0x26b542 === "left" ? _0x1aae0c.startOffset : _0x1aae0c.endOffset + 1;
    return { startOffset: _0xa579cf, endOffset: _0xa579cf, text: _0x223455 };
  });
}
function zn(_0x22e182, _0x2824ec, _0x2f87c3, _0x4cc807, _0x14c83e = ["body"]) {
  var _0x1cea9b;
  let _0x21f1bb =
      (_0x1cea9b = _0x22e182.tableSource) == null
        ? undefined
        : _0x1cea9b[_0x2824ec],
    _0x3b2c9d = w(_0x22e182, _0x2824ec);
  if (!_0x21f1bb || !_0x3b2c9d) return null;
  let _0x160105 = Math.min(_0x2f87c3, _0x4cc807),
    _0x12439b = Math.max(_0x2f87c3, _0x4cc807);
  if (
    _0x160105 < 0 ||
    _0x160105 >= _0x21f1bb.tableColumns["length"] ||
    _0x12439b < _0x160105
  )
    return null;
  let _0x2df980 = Math.min(_0x12439b, _0x21f1bb.tableColumns["length"] - 1),
    _0x25b39a = _0x2df980 - _0x160105 + 1;
  if (_0x25b39a >= _0x21f1bb.tableColumns["length"]) {
    let _0x2abfec = $n(_0x22e182, _0x2824ec, _0x14c83e);
    return _0x2abfec
      ? { actions: _0x2abfec.actions, cursorColumn: 0, deleteTable: true }
      : null;
  }
  let _0x40c88b = ar(
    _0x21f1bb,
    rr(
      k(_0x21f1bb)
        .map((_0x4d2eb3) => nr(_0x4d2eb3, _0x160105, _0x2df980))
        .filter((_0x333959) => _0x333959 != null),
    ),
    (_0x5d7eb1) =>
      _0x5d7eb1 < _0x160105
        ? _0x5d7eb1
        : _0x5d7eb1 > _0x2df980
          ? _0x5d7eb1 - _0x25b39a
          : null,
  );
  Yn(_0x40c88b, _0x21f1bb, _0x2824ec, _0x160105, _0x2df980);
  let _0x272921 = _0x3b2c9d.rows["map"]((_0x4a2869) => ({
      startOffset: _0x4a2869.cells[_0x160105].startOffset,
      endOffset: _0x4a2869.cells[_0x2df980].endOffset + 1,
      text: "",
    })),
    _0x115607 = F(_0x22e182, _0x272921, _0x14c83e);
  return _0x115607
    ? (_0x40c88b.push(
        ...er(
          _0x22e182,
          _0x272921.map(({ startOffset: _0x4d9569, endOffset: _0x46ae08 }) => ({
            startOffset: _0x4d9569,
            endOffset: _0x46ae08,
            collapsed: false,
          })),
        ),
      ),
      _0x40c88b.push(_0x115607),
      {
        actions: H(_0x40c88b),
        cursorColumn: Math.min(
          _0x160105,
          _0x21f1bb.tableColumns["length"] - _0x25b39a - 1,
        ),
      })
    : null;
}
function Bn(
  _0x24cb9e,
  _0x5da63c,
  _0x46770a,
  _0x5cae57,
  _0x499e4f,
  _0x77b4db,
  _0x18273b = ["body"],
) {
  var _0x6dc770;
  let _0x37ef4d =
      (_0x6dc770 = _0x24cb9e.tableSource) == null
        ? undefined
        : _0x6dc770[_0x5da63c],
    _0x3c5ac9 = w(_0x24cb9e, _0x5da63c);
  if (!_0x37ef4d || !_0x3c5ac9 || _0x499e4f <= 0) return null;
  let _0x4e2457 = Gn(_0x46770a, _0x37ef4d.tableRows["length"] - 1),
    _0x3b5099 = Gn(_0x5cae57, _0x37ef4d.tableRows["length"] - 1),
    _0x93571d = Math.min(
      _0x37ef4d.tableRows["length"] - 1,
      _0x4e2457 + _0x499e4f - 1,
    ),
    _0x1b09bf = _0x93571d - _0x4e2457 + 1,
    _0x23e088 = _0x77b4db === "above" ? _0x3b5099 : _0x3b5099 + 1;
  if (_0x23e088 >= _0x4e2457 && _0x23e088 <= _0x93571d + 1)
    return { actions: null, cursorRow: _0x4e2457 };
  let _0x16cb7b = _0x23e088 > _0x93571d ? _0x23e088 - _0x1b09bf : _0x23e088,
    _0x5a55da = [];
  Wn(
    _0x5a55da,
    ["tableSource", _0x5da63c, "tableRows"],
    _0x4e2457,
    _0x1b09bf,
    _0x16cb7b,
  );
  let _0x355be0 = T(_0x3c5ac9, _0x4e2457).startOffset,
    _0x2ca8a9 = T(_0x3c5ac9, _0x93571d).endOffset + 1,
    _0x1bd4ec =
      _0x23e088 > _0x93571d
        ? T(_0x3c5ac9, _0x3b5099).endOffset + 1
        : T(_0x3c5ac9, _0x3b5099).startOffset,
    _0x140473 = Kn(_0x24cb9e.body, _0x355be0, _0x2ca8a9, _0x1bd4ec, _0x18273b);
  return _0x140473
    ? (_0x5a55da.push(_0x140473),
      { actions: H(_0x5a55da), cursorRow: _0x16cb7b })
    : null;
}
function Vn(
  _0x2b29f1,
  _0x5cf1c4,
  _0x2810c7,
  _0xaeda5e,
  _0x4e482,
  _0x5ff58f,
  _0x3c9f4e = ["body"],
) {
  var _0x4215c4;
  let _0x13a13c =
      (_0x4215c4 = _0x2b29f1.tableSource) == null
        ? undefined
        : _0x4215c4[_0x5cf1c4],
    _0x2ac8a1 = w(_0x2b29f1, _0x5cf1c4);
  if (!_0x13a13c || !_0x2ac8a1 || _0x4e482 <= 0) return null;
  let _0x2be5e3 = Gn(_0x2810c7, _0x13a13c.tableColumns["length"] - 1),
    _0x442dfc = Gn(_0xaeda5e, _0x13a13c.tableColumns["length"] - 1),
    _0x527cc0 = Math.min(
      _0x13a13c.tableColumns["length"] - 1,
      _0x2be5e3 + _0x4e482 - 1,
    ),
    _0x167be8 = _0x527cc0 - _0x2be5e3 + 1,
    _0x260859 = _0x5ff58f === "left" ? _0x442dfc : _0x442dfc + 1;
  if (_0x260859 >= _0x2be5e3 && _0x260859 <= _0x527cc0 + 1)
    return { actions: null, cursorColumn: _0x2be5e3 };
  let _0x4ac244 = _0x260859 > _0x527cc0 ? _0x260859 - _0x167be8 : _0x260859,
    _0x427a7d = [];
  return (
    Wn(
      _0x427a7d,
      ["tableSource", _0x5cf1c4, "tableColumns"],
      _0x2be5e3,
      _0x167be8,
      _0x4ac244,
    ),
    _0x13a13c.tableRows["forEach"]((_0x45d733, _0x1e209c) =>
      Wn(
        _0x427a7d,
        ["tableSource", _0x5cf1c4, "tableRows", _0x1e209c, "tableCells"],
        _0x2be5e3,
        _0x167be8,
        _0x4ac244,
      ),
    ),
    _0x2ac8a1.rows["forEach"]((_0x3794ff) => {
      let _0x5d8544 = _0x3794ff.cells[_0x2be5e3].startOffset,
        _0x275934 = _0x3794ff.cells[_0x527cc0].endOffset + 1,
        _0x4889d5 =
          _0x260859 > _0x527cc0
            ? _0x3794ff.cells[_0x442dfc].endOffset + 1
            : _0x3794ff.cells[_0x442dfc].startOffset,
        _0x32424f = Kn(
          _0x2b29f1.body,
          _0x5d8544,
          _0x275934,
          _0x4889d5,
          _0x3c9f4e,
        );
      _0x32424f && _0x427a7d.push(_0x32424f);
    }),
    { actions: H(_0x427a7d), cursorColumn: _0x4ac244 }
  );
}
function Hn(
  _0x993e63,
  _0x583e73,
  _0x2a85d1,
  _0xc90ab7,
  _0x3c38ee,
  _0x32c933 = ["body"],
) {
  var _0x1b7904;
  let _0x2d7f5c =
      (_0x1b7904 = _0x993e63.tableSource) == null
        ? undefined
        : _0x1b7904[_0x2a85d1],
    _0x442989 = w(_0x993e63, _0x2a85d1),
    _0x47a629 = _0x993e63.body;
  if (!_0x2d7f5c || !_0x442989 || !_0x47a629 || !_0x442989.rows["length"])
    return null;
  let _0xf8a860 = vn({
      documentData: _0x993e63,
      metadata: _0x583e73,
      tableId: _0x2a85d1,
      column: _0xc90ab7,
      direction: _0x3c38ee,
    }),
    _0x583f28 = _0x442989.rows["map"]((_0x4f9f5e, _0x1d8feb) => ({
      body: Jn(
        V(
          _0x37c705(
            _0x47a629,
            _0x4f9f5e.startOffset,
            _0x4f9f5e.endOffset + 1,
            false,
          ),
        ),
      ),
      length: _0x4f9f5e.endOffset + 1 - _0x4f9f5e.startOffset,
      sourceIndex: _0x1d8feb,
    })),
    _0x4a3667 = _0x442989.rows[0].startOffset,
    _0x122259 = [];
  return (
    _0xf8a860.sortedRowIndexes["forEach"]((_0x38ef81, _0x1bbc34) => {
      let _0x1893ae = _0xf8a860.sortStartRow + _0x1bbc34,
        _0x431597 = _0x583f28.findIndex(
          (_0x528ffc) => _0x528ffc.sourceIndex === _0x38ef81,
        );
      if (_0x431597 === _0x1893ae) return;
      let _0xf3db62 = _0x4a3667 + Un(_0x583f28, _0x431597),
        _0xa8596e = _0x4a3667 + Un(_0x583f28, _0x1893ae),
        _0x1f2b9f = _0x583f28[_0x431597],
        _0x426d02 = qn(
          _0xf3db62,
          _0xf3db62 + _0x1f2b9f.length,
          _0xa8596e,
          _0x1f2b9f.body,
          _0x32c933,
        );
      (_0x426d02 &&
        (_0x122259.push(
          _0x33f29e
            .getInstance()
            .moveOp(
              ["tableSource", _0x2a85d1, "tableRows", _0x431597],
              ["tableSource", _0x2a85d1, "tableRows", _0x1893ae],
            ),
        ),
        _0x122259.push(_0x426d02)),
        _0x583f28.splice(_0x1893ae, 0, _0x583f28.splice(_0x431597, 1)[0]));
    }),
    H(_0x122259)
  );
}
function Un(_0x5fb06b, _0x5b6dae) {
  let _0x367fb1 = 0;
  for (let _0x2d0fab = 0; _0x2d0fab < _0x5b6dae; _0x2d0fab++)
    _0x367fb1 += _0x5fb06b[_0x2d0fab].length;
  return _0x367fb1;
}
function Wn(_0x908c89, _0x4dfe94, _0x4bfe15, _0x375307, _0x137e8d) {
  let _0x4d5dc0 = _0x33f29e.getInstance();
  if (_0x137e8d < _0x4bfe15) {
    for (let _0x1f4afb = 0; _0x1f4afb < _0x375307; _0x1f4afb++)
      _0x908c89.push(
        _0x4d5dc0.moveOp(
          [..._0x4dfe94, _0x4bfe15 + _0x1f4afb],
          [..._0x4dfe94, _0x137e8d + _0x1f4afb],
        ),
      );
    return;
  }
  for (let _0x3246c6 = _0x375307 - 1; _0x3246c6 >= 0; _0x3246c6--)
    _0x908c89.push(
      _0x4d5dc0.moveOp(
        [..._0x4dfe94, _0x4bfe15 + _0x3246c6],
        [..._0x4dfe94, _0x137e8d + _0x3246c6],
      ),
    );
}
function Gn(_0x513943, _0x423636) {
  return Math.min(Math.max(0, _0x513943), Math.max(0, _0x423636));
}
function Kn(_0x40f380, _0x496f59, _0x5bc4a0, _0x447e4a, _0x36da2c) {
  return !_0x40f380 ||
    _0x5bc4a0 <= _0x496f59 ||
    (_0x447e4a >= _0x496f59 && _0x447e4a <= _0x5bc4a0)
    ? null
    : qn(
        _0x496f59,
        _0x5bc4a0,
        _0x447e4a,
        Jn(V(_0x37c705(_0x40f380, _0x496f59, _0x5bc4a0, false))),
        _0x36da2c,
      );
}
function qn(_0x1e8edf, _0x3e3161, _0x21f548, _0x146b11, _0x2f4fa4) {
  let _0x2c902c = _0x3e3161 - _0x1e8edf;
  if (_0x2c902c <= 0 || (_0x21f548 >= _0x1e8edf && _0x21f548 <= _0x3e3161))
    return null;
  let _0x136083 = new _0x4502e7();
  return (
    _0x21f548 < _0x1e8edf
      ? (_0x136083.retain(_0x21f548),
        _0x136083.insert(_0x2c902c, _0x146b11),
        _0x136083.retain(_0x1e8edf - _0x21f548),
        _0x136083.delete(_0x2c902c))
      : (_0x136083.retain(_0x1e8edf),
        _0x136083.delete(_0x2c902c),
        _0x136083.retain(_0x21f548 - _0x3e3161),
        _0x136083.insert(_0x2c902c, _0x146b11)),
    _0x33f29e.getInstance().editOp(_0x136083.serialize(), _0x2f4fa4)
  );
}
function Jn(_0x2064e4) {
  let _0x182250 = _0x2064e4;
  return (
    Object.keys(_0x182250).forEach((_0x248468) => {
      let _0x2b3f77 = _0x182250[_0x248468];
      Array.isArray(_0x2b3f77) &&
        _0x2b3f77.length === 0 &&
        delete _0x182250[_0x248468];
    }),
    _0x2064e4
  );
}
function Yn(_0x11926c, _0x20b43f, _0x6c4c63, _0x518f5e, _0x44506b) {
  let _0x15fb3a = _0x33f29e.getInstance();
  for (let _0x21686e = _0x44506b; _0x21686e >= _0x518f5e; _0x21686e--)
    _0x11926c.push(
      _0x15fb3a.removeOp(
        ["tableSource", _0x6c4c63, "tableColumns", _0x21686e],
        V(_0x20b43f.tableColumns[_0x21686e]),
      ),
    );
  _0x20b43f.tableRows["forEach"]((_0x58c733, _0xe53180) => {
    for (let _0x23ef20 = _0x44506b; _0x23ef20 >= _0x518f5e; _0x23ef20--)
      _0x11926c.push(
        _0x15fb3a.removeOp(
          [
            "tableSource",
            _0x6c4c63,
            "tableRows",
            _0xe53180,
            "tableCells",
            _0x23ef20,
          ],
          V(_0x58c733.tableCells[_0x23ef20]),
        ),
      );
  });
}
function Xn(
  _0x27d680,
  _0x5bc0ba,
  _0x70002c,
  _0x3017cf,
  _0x295e47,
  _0x1bb41f = ["body"],
  _0x2022d6,
) {
  var _0x14e30c;
  let _0x56c328 =
      (_0x14e30c = _0x27d680.tableSource) == null
        ? undefined
        : _0x14e30c[_0x5bc0ba],
    _0x10c90c = w(_0x27d680, _0x5bc0ba);
  if (
    !_0x56c328 ||
    !_0x10c90c ||
    _0x3017cf <= 0 ||
    _0x70002c < 0 ||
    _0x70002c >= _0x56c328.tableRows["length"]
  )
    return null;
  let _0x4c53c7 = _0x295e47 === "above" ? _0x70002c : _0x70002c + 1,
    _0x4604b0 =
      _0x295e47 === "above"
        ? T(_0x10c90c, _0x70002c).startOffset
        : T(_0x10c90c, _0x70002c).endOffset + 1,
    _0x2d9a2a = rr(
      k(_0x56c328).map((_0x1bcf4c) =>
        _0x4c53c7 <= _0x1bcf4c.startRow
          ? {
              ..._0x1bcf4c,
              startRow: _0x1bcf4c.startRow + _0x3017cf,
              endRow: _0x1bcf4c.endRow + _0x3017cf,
            }
          : _0x4c53c7 <= _0x1bcf4c.endRow
            ? { ..._0x1bcf4c, endRow: _0x1bcf4c.endRow + _0x3017cf }
            : _0x1bcf4c,
      ),
    ),
    _0x3656fb = _0x56c328.tableRows[_0x70002c],
    _0x2a3bfa = Array.from({ length: _0x3017cf }, (_0x5c8a23, _0xe41abe) => {
      let _0x35f9f9 = V(_0x3656fb);
      return (
        or(_0x35f9f9, _0x4c53c7 + _0xe41abe, _0x2d9a2a),
        _0x2022d6 == null || _0x2022d6(_0x35f9f9, _0xe41abe),
        _0x35f9f9
      );
    }),
    _0x433b12 = ir(_0x56c328, _0x2d9a2a, (_0x15e4ef) =>
      _0x15e4ef >= _0x4c53c7 ? _0x15e4ef + _0x3017cf : _0x15e4ef,
    ),
    _0x3973eb = _0x33f29e.getInstance();
  _0x2a3bfa.forEach((_0x29eb81, _0x1a77d0) => {
    _0x433b12.push(
      _0x3973eb.insertOp(
        ["tableSource", _0x5bc0ba, "tableRows", _0x4c53c7 + _0x1a77d0],
        _0x29eb81,
      ),
    );
  });
  let _0x27cab2 = F(
    _0x27d680,
    [
      {
        startOffset: _0x4604b0,
        endOffset: _0x4604b0,
        text: fr(ur(_0x56c328.tableColumns["length"]), _0x3017cf),
      },
    ],
    _0x1bb41f,
  );
  return _0x27cab2
    ? (_0x433b12.push(_0x27cab2),
      { actions: H(_0x433b12), cursorRow: _0x4c53c7 })
    : null;
}
function Zn(_0x1e9910, _0x3220ca, _0x2fcab7 = ["body"]) {
  var _0x90a54d;
  let _0x10e683 =
    (_0x90a54d = _0x1e9910.tableSource) == null ||
    (_0x90a54d = _0x90a54d[_0x3220ca]) == null
      ? undefined
      : _0x90a54d.tableColumns["length"];
  return _0x10e683
    ? Xn(_0x1e9910, _0x3220ca, 0, 1, "above", _0x2fcab7, (_0x418b8c) => {
        _0x418b8c.tableCells["forEach"]((_0x4886de, _0x50fc6b) => {
          _0x50fc6b === 0
            ? ((_0x4886de.columnSpan = _0x10e683), delete _0x4886de.rowSpan)
            : ((_0x4886de.rowSpan = 0), (_0x4886de.columnSpan = 0));
        });
      })
    : null;
}
function Qn(_0x372e14, _0x8f80d3, _0x595f96, _0x3f7a8b, _0x942936 = ["body"]) {
  var _0x177ebb;
  let _0x951dc4 =
      (_0x177ebb = _0x372e14.tableSource) == null
        ? undefined
        : _0x177ebb[_0x8f80d3],
    _0x52449c = w(_0x372e14, _0x8f80d3);
  if (!_0x951dc4 || !_0x52449c) return null;
  let _0x21c6f5 = Math.min(_0x595f96, _0x3f7a8b),
    _0x2436fd = Math.max(_0x595f96, _0x3f7a8b);
  if (
    _0x21c6f5 < 0 ||
    _0x21c6f5 >= _0x951dc4.tableRows["length"] ||
    _0x2436fd < _0x21c6f5
  )
    return null;
  let _0xea2a4a = Math.min(_0x2436fd, _0x951dc4.tableRows["length"] - 1),
    _0x39e34a = _0xea2a4a - _0x21c6f5 + 1;
  if (_0x39e34a >= _0x951dc4.tableRows["length"])
    return $n(_0x372e14, _0x8f80d3, _0x942936);
  let _0xb3dff9 = ir(
      _0x951dc4,
      rr(
        k(_0x951dc4)
          .map((_0x4a0c93) => tr(_0x4a0c93, _0x21c6f5, _0xea2a4a))
          .filter((_0x2e0d02) => _0x2e0d02 != null),
      ),
      (_0xd5955f) =>
        _0xd5955f < _0x21c6f5
          ? _0xd5955f
          : _0xd5955f > _0xea2a4a
            ? _0xd5955f - _0x39e34a
            : null,
    ),
    _0x2c959c = _0x33f29e.getInstance();
  for (let _0x60c3ac = _0xea2a4a; _0x60c3ac >= _0x21c6f5; _0x60c3ac--)
    _0xb3dff9.push(
      _0x2c959c.removeOp(
        ["tableSource", _0x8f80d3, "tableRows", _0x60c3ac],
        V(_0x951dc4.tableRows[_0x60c3ac]),
      ),
    );
  let _0xac6c0a = T(_0x52449c, _0x21c6f5).startOffset,
    _0x53ed2f = T(_0x52449c, _0xea2a4a).endOffset + 1,
    _0x5c7ba3 = F(
      _0x372e14,
      [{ startOffset: _0xac6c0a, endOffset: _0x53ed2f, text: "" }],
      _0x942936,
    );
  return _0x5c7ba3
    ? (_0xb3dff9.push(
        ...er(_0x372e14, [
          { startOffset: _0xac6c0a, endOffset: _0x53ed2f, collapsed: false },
        ]),
      ),
      _0xb3dff9.push(_0x5c7ba3),
      {
        actions: H(_0xb3dff9),
        cursorRow: Math.min(
          _0x21c6f5,
          _0x951dc4.tableRows["length"] - _0x39e34a - 1,
        ),
      })
    : null;
}
function $n(_0x3a942d, _0xead230, _0x3864b7) {
  var _0x4815da;
  let _0x3a32c7 =
      (_0x4815da = _0x3a942d.tableSource) == null
        ? undefined
        : _0x4815da[_0xead230],
    _0x59d5f4 = w(_0x3a942d, _0xead230);
  if (!_0x3a32c7 || !_0x59d5f4) return null;
  let _0x40bd96 = F(
    _0x3a942d,
    [
      {
        startOffset: _0x59d5f4.startOffset,
        endOffset: _0x59d5f4.endOffset,
        text: "",
      },
    ],
    _0x3864b7,
  );
  if (!_0x40bd96) return null;
  let _0x8961da = er(_0x3a942d, [
    {
      startOffset: _0x59d5f4.startOffset,
      endOffset: _0x59d5f4.endOffset,
      collapsed: false,
    },
  ]);
  return {
    actions: H([
      _0x33f29e
        .getInstance()
        .removeOp(["tableSource", _0xead230], V(_0x3a32c7)),
      ..._0x8961da,
      _0x40bd96,
    ]),
    cursorRow: 0,
    deleteTable: true,
  };
}
function er(_0xed7609, _0x4d63f3) {
  let _0x134a9e = _0xed7609.body;
  if (!_0x134a9e) return [];
  let _0x4194b7 = _0xed7609.drawings ?? {},
    _0x4ec20a = _0xed7609.drawingsOrder ?? [],
    _0x3b1898 = [...new Set(_0x4560fb(_0x134a9e, _0x4d63f3))].sort(
      (_0xa0e0df, _0x462789) =>
        _0x4ec20a.indexOf(_0x462789) - _0x4ec20a.indexOf(_0xa0e0df),
    ),
    _0x15f858 = _0x33f29e.getInstance(),
    _0x3cdfc4 = [];
  for (let _0x2346dd of _0x3b1898) {
    let _0x1bae70 = _0x4194b7[_0x2346dd];
    if (_0x1bae70) {
      let _0x13f45d = _0x15f858.removeOp(["drawings", _0x2346dd], _0x1bae70);
      _0x13f45d && _0x3cdfc4.push(_0x13f45d);
    }
    let _0x11b099 = _0x4ec20a.indexOf(_0x2346dd);
    if (_0x11b099 >= 0) {
      let _0x11dc2f = _0x15f858.removeOp(
        ["drawingsOrder", _0x11b099],
        _0x2346dd,
      );
      _0x11dc2f && _0x3cdfc4.push(_0x11dc2f);
    }
  }
  return _0x3cdfc4;
}
function tr(_0xd55365, _0x27f0f6, _0x2ced1f) {
  let _0x557833 = [],
    _0x2687e3 = _0x2ced1f - _0x27f0f6 + 1;
  for (
    let _0xd490ec = _0xd55365.startRow;
    _0xd490ec <= _0xd55365.endRow;
    _0xd490ec++
  )
    _0xd490ec < _0x27f0f6
      ? _0x557833.push(_0xd490ec)
      : _0xd490ec > _0x2ced1f && _0x557833.push(_0xd490ec - _0x2687e3);
  return _0x557833.length
    ? {
        ..._0xd55365,
        startRow: Math.min(..._0x557833),
        endRow: Math.max(..._0x557833),
      }
    : null;
}
function nr(_0x4ffd06, _0x40f440, _0x5fec08) {
  let _0xe1570d = [],
    _0x4335dc = _0x5fec08 - _0x40f440 + 1;
  for (
    let _0x2522d1 = _0x4ffd06.startColumn;
    _0x2522d1 <= _0x4ffd06.endColumn;
    _0x2522d1++
  )
    _0x2522d1 < _0x40f440
      ? _0xe1570d.push(_0x2522d1)
      : _0x2522d1 > _0x5fec08 && _0xe1570d.push(_0x2522d1 - _0x4335dc);
  return _0xe1570d.length
    ? {
        ..._0x4ffd06,
        startColumn: Math.min(..._0xe1570d),
        endColumn: Math.max(..._0xe1570d),
      }
    : null;
}
function rr(_0x3b69a6) {
  let _0x998d18 = new Map();
  for (let _0x3744d2 of _0x3b69a6) {
    let _0x3a6db8 = _0x3744d2.endRow - _0x3744d2.startRow + 1,
      _0x3d7cd4 = _0x3744d2.endColumn - _0x3744d2.startColumn + 1;
    for (
      let _0x3da02a = _0x3744d2.startRow;
      _0x3da02a <= _0x3744d2.endRow;
      _0x3da02a++
    )
      for (
        let _0x2fe6c0 = _0x3744d2.startColumn;
        _0x2fe6c0 <= _0x3744d2.endColumn;
        _0x2fe6c0++
      )
        _0x998d18.set(
          lr(_0x3da02a, _0x2fe6c0),
          _0x3da02a === _0x3744d2.startRow &&
            _0x2fe6c0 === _0x3744d2.startColumn
            ? { rowSpan: _0x3a6db8, columnSpan: _0x3d7cd4 }
            : { rowSpan: 0, columnSpan: 0 },
        );
  }
  return _0x998d18;
}
function ir(_0x134569, _0x583eb0, _0x556542) {
  let _0x532ada = [],
    _0x436db7 = _0x33f29e.getInstance();
  return (
    _0x134569.tableRows["forEach"]((_0x353148, _0x4fad1e) => {
      let _0x51bb4a = _0x556542(_0x4fad1e);
      _0x51bb4a != null &&
        _0x353148.tableCells["forEach"]((_0x33b4c8, _0x19638c) => {
          let _0x16e711 = _0x583eb0.get(lr(_0x51bb4a, _0x19638c)),
            _0xfcd096 = [
              "tableSource",
              _0x134569.tableId,
              "tableRows",
              _0x4fad1e,
              "tableCells",
              _0x19638c,
            ],
            _0x198f9d = B(
              _0x436db7,
              [..._0xfcd096, "rowSpan"],
              _0x33b4c8.rowSpan,
              _0x16e711 == null ? undefined : _0x16e711.rowSpan,
            ),
            _0x5367cb = B(
              _0x436db7,
              [..._0xfcd096, "columnSpan"],
              _0x33b4c8.columnSpan,
              _0x16e711 == null ? undefined : _0x16e711.columnSpan,
            );
          (_0x198f9d && _0x532ada.push(_0x198f9d),
            _0x5367cb && _0x532ada.push(_0x5367cb));
        });
    }),
    _0x532ada
  );
}
function ar(_0x6e2d84, _0x325306, _0x396210) {
  let _0x33bc57 = [],
    _0x25aaee = _0x33f29e.getInstance();
  return (
    _0x6e2d84.tableRows["forEach"]((_0x117cd7, _0x2409ad) => {
      _0x117cd7.tableCells["forEach"]((_0x5251ac, _0x7d7032) => {
        let _0x290c37 = _0x396210(_0x7d7032);
        if (_0x290c37 == null) return;
        let _0x177319 = _0x325306.get(lr(_0x2409ad, _0x290c37)),
          _0x5e5021 = [
            "tableSource",
            _0x6e2d84.tableId,
            "tableRows",
            _0x2409ad,
            "tableCells",
            _0x7d7032,
          ],
          _0x2d5404 = B(
            _0x25aaee,
            [..._0x5e5021, "rowSpan"],
            _0x5251ac.rowSpan,
            _0x177319 == null ? undefined : _0x177319.rowSpan,
          ),
          _0x51d176 = B(
            _0x25aaee,
            [..._0x5e5021, "columnSpan"],
            _0x5251ac.columnSpan,
            _0x177319 == null ? undefined : _0x177319.columnSpan,
          );
        (_0x2d5404 && _0x33bc57.push(_0x2d5404),
          _0x51d176 && _0x33bc57.push(_0x51d176));
      });
    }),
    _0x33bc57
  );
}
function or(_0x4d6ef7, _0x59a92a, _0x54cf13) {
  _0x4d6ef7.tableCells["forEach"]((_0x1853f6, _0x2b629f) => {
    let _0x35cac6 = _0x54cf13.get(lr(_0x59a92a, _0x2b629f));
    (cr(
      _0x1853f6,
      "rowSpan",
      _0x35cac6 == null ? undefined : _0x35cac6.rowSpan,
    ),
      cr(
        _0x1853f6,
        "columnSpan",
        _0x35cac6 == null ? undefined : _0x35cac6.columnSpan,
      ));
  });
}
function sr(_0x4baa83, _0x263625, _0x517747, _0x56a518) {
  let _0x33f120 = _0x56a518.get(lr(_0x263625, _0x517747));
  (cr(_0x4baa83, "rowSpan", _0x33f120 == null ? undefined : _0x33f120.rowSpan),
    cr(
      _0x4baa83,
      "columnSpan",
      _0x33f120 == null ? undefined : _0x33f120.columnSpan,
    ));
}
function cr(_0x422734, _0xb17d46, _0x5a128c) {
  _0x5a128c === undefined
    ? delete _0x422734[_0xb17d46]
    : (_0x422734[_0xb17d46] = _0x5a128c);
}
function lr(_0x18f95b, _0xb991b4) {
  return [_0x18f95b, _0xb991b4].join(":");
}
function ur(_0x214f1d) {
  return [
    _0x597d36.TABLE_ROW_START,
    fr(dr(), _0x214f1d),
    _0x597d36.TABLE_ROW_END,
  ].join("");
}
function dr() {
  return [
    _0x597d36.TABLE_CELL_START,
    "\x0d\x0a",
    _0x597d36.TABLE_CELL_END,
  ].join("");
}
function fr(_0x1df45f, _0x232c1b) {
  return Array.from({ length: _0x232c1b }, () => _0x1df45f).join("");
}
function V(_0x57358e) {
  return Array.isArray(_0x57358e)
    ? _0x57358e.map((_0x2fe379) => V(_0x2fe379))
    : !_0x57358e || typeof _0x57358e != "object"
      ? _0x57358e
      : Object.fromEntries(
          Object.entries(_0x57358e).map(([_0x2adf85, _0x527ab1]) => [
            _0x2adf85,
            V(_0x527ab1),
          ]),
        );
}
function H(_0x51d6e9) {
  return _0x51d6e9.reduce(
    (_0xf0bc40, _0x1545d7) => _0x33f29e.compose(_0xf0bc40, _0x1545d7),
    null,
  );
}
function U(
  _0x4251c6,
  _0x2c108f,
  _0x39a331,
  _0x40b549,
  _0x5c32f4,
  _0x4085c4,
  _0x3880b6,
  _0x1dbd49,
) {
  if (!_0x40b549) return true;
  let _0x204a07 = [];
  return (
    _0x5c32f4
      ? (_0x204a07 = mr(_0x39a331, _0x5c32f4))
      : _0x4085c4 != null &&
        (_0x204a07 = [
          { startOffset: _0x4085c4, endOffset: _0x4085c4, collapsed: true },
        ]),
    !!_0x4251c6.syncExecuteCommand(_0x179fcc.id, {
      unitId: _0x2c108f,
      historyAction: _0x1dbd49,
      actions: _0x40b549,
      textRanges: _0x204a07,
      trigger: _0x3880b6,
    })
  );
}
function W(_0x46cc9c, _0x59b659 = "") {
  var _0x520434, _0x2534cd;
  return _0x59b659
    ? (_0x520434 = _0x46cc9c.headers) != null && _0x520434[_0x59b659]
      ? ["headers", _0x59b659, "body"]
      : (_0x2534cd = _0x46cc9c.footers) != null && _0x2534cd[_0x59b659]
        ? ["footers", _0x59b659, "body"]
        : ["body"]
    : ["body"];
}
function pr(_0x1e4e42, _0x5d3f53) {
  return JSON.stringify(_0x1e4e42) === JSON.stringify(_0x5d3f53);
}
function mr(_0x4d7cb0, _0x46eae1) {
  var _0x4de625, _0xd87083, _0x10ed96;
  let _0x2ea72b = w(_0x4d7cb0, _0x46eae1.tableId);
  if (!_0x2ea72b) return [];
  let _0x3df8bc = Math.min(_0x46eae1.startRow, _0x46eae1.endRow),
    _0x40e04e = Math.max(_0x46eae1.startRow, _0x46eae1.endRow),
    _0x3fb954 = Math.min(_0x46eae1.startColumn, _0x46eae1.endColumn),
    _0x46fe9c = Math.max(_0x46eae1.startColumn, _0x46eae1.endColumn),
    _0x1500ab =
      (_0x4de625 = _0x2ea72b.rows[_0x3df8bc]) == null
        ? undefined
        : _0x4de625.cells[_0x3fb954],
    _0x477f0f =
      (_0xd87083 = _0x2ea72b.rows[_0x40e04e]) == null
        ? undefined
        : _0xd87083.cells[_0x46fe9c];
  if (!_0x1500ab || !_0x477f0f) return [];
  let _0x55ad0a =
      (_0x10ed96 = _0x2ea72b.tableSource["tableRows"][_0x3df8bc]) == null
        ? undefined
        : _0x10ed96.tableCells[_0x3fb954],
    _0xac7018 = (_0x55ad0a == null ? undefined : _0x55ad0a.rowSpan) ?? 1,
    _0x46eb6a = (_0x55ad0a == null ? undefined : _0x55ad0a.columnSpan) ?? 1,
    _0x305ca1 =
      (_0xac7018 > 1 || _0x46eb6a > 1) &&
      _0x3df8bc + _0xac7018 - 1 >= _0x40e04e &&
      _0x3fb954 + _0x46eb6a - 1 >= _0x46fe9c
        ? _0x1500ab
        : _0x477f0f,
    _0x5c8a0b = _0x3fb954 === 0 && _0x46fe9c === _0x2ea72b.columnCount - 1,
    _0x61bccf = _0x3df8bc === 0 && _0x40e04e === _0x2ea72b.rowCount - 1,
    _0x175c40 = _0x1500ab.startOffset + 1;
  return [
    {
      startOffset: _0x175c40,
      endOffset: Math.max(_0x175c40, _0x305ca1.endOffset - 1),
      collapsed: false,
      rangeType: _0x4e1d48.RECT,
      segmentId: _0x46eae1.segmentId ?? "",
      tableId: _0x46eae1.tableId,
      startRow: _0x3df8bc,
      endRow: _0x40e04e,
      startColumn: _0x3fb954,
      endColumn: _0x46fe9c,
      spanEntireRow: _0x5c8a0b,
      spanEntireColumn: _0x61bccf,
      spanEntireTable: _0x5c8a0b && _0x61bccf,
      isActive: true,
    },
  ];
}
function hr(_0x66d7d) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x555a42) {
            return typeof _0x555a42;
          }
        : function (_0x19cdf1) {
            return _0x19cdf1 &&
              typeof Symbol == "function" &&
              _0x19cdf1.constructor === Symbol &&
              _0x19cdf1 !== Symbol.prototype
              ? "symbol"
              : typeof _0x19cdf1;
          }),
    hr(_0x66d7d)
  );
}
function gr(_0x23337c, _0x412e62) {
  if (hr(_0x23337c) != "object" || !_0x23337c) return _0x23337c;
  var _0x5b516a = _0x23337c[Symbol.toPrimitive];
  if (_0x5b516a !== undefined) {
    var _0x356378 = _0x5b516a.call(_0x23337c, _0x412e62 || "default");
    if (hr(_0x356378) != "object") return _0x356378;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x412e62 === "string" ? String : Number)(_0x23337c);
}
function _r(_0x23fed4) {
  var _0x38bffa = gr(_0x23fed4, "string");
  return hr(_0x38bffa) == "symbol" ? _0x38bffa : _0x38bffa + "";
}
function G(_0x5a56c5, _0x92c663, _0x4906df) {
  return (
    (_0x92c663 = _r(_0x92c663)) in _0x5a56c5
      ? Object.defineProperty(_0x5a56c5, _0x92c663, {
          value: _0x4906df,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5a56c5[_0x92c663] = _0x4906df),
    _0x5a56c5
  );
}
function K(_0x4b4a9c, _0x17cbfb) {
  return function (_0xc36f9d, _0x2da42a) {
    _0x17cbfb(_0xc36f9d, _0x2da42a, _0x4b4a9c);
  };
}
function vr(_0x301f0a, _0x3b5492, _0xcf04d2, _0x232045) {
  var _0x18f640 = arguments.length,
    _0x439674 =
      _0x18f640 < 3
        ? _0x3b5492
        : _0x232045 === null
          ? (_0x232045 = Object.getOwnPropertyDescriptor(_0x3b5492, _0xcf04d2))
          : _0x232045,
    _0x139a0b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x439674 = Reflect.decorate(_0x301f0a, _0x3b5492, _0xcf04d2, _0x232045);
  else {
    for (var _0x52b007 = _0x301f0a.length - 1; _0x52b007 >= 0; _0x52b007--)
      (_0x139a0b = _0x301f0a[_0x52b007]) &&
        (_0x439674 =
          (_0x18f640 < 3
            ? _0x139a0b(_0x439674)
            : _0x18f640 > 3
              ? _0x139a0b(_0x3b5492, _0xcf04d2, _0x439674)
              : _0x139a0b(_0x3b5492, _0xcf04d2)) || _0x439674);
  }
  return (
    _0x18f640 > 3 &&
      _0x439674 &&
      Object.defineProperty(_0x3b5492, _0xcf04d2, _0x439674),
    _0x439674
  );
}
let q = class extends _0x3665ea {
  constructor(_0x5a30a9, _0x210eb7) {
    var _0x175074;
    (super(),
      (this._univerInstanceService = _0x5a30a9),
      (this._docSelectionManagerService = _0x210eb7),
      G(this, "_selectionChange$", new _0x5cb647()),
      G(this, "_structuralSelection", null),
      G(this, "_structuralSelectionTableShape", null),
      G(this, "_nativeSelectionSuppressed", false),
      G(this, "_preserveStructuralSelectionOnNextTextSelection", false),
      G(this, "selectionChange$", this._selectionChange$["asObservable"]()),
      this.disposeWithMe(
        ((_0x175074 = this._docSelectionManagerService["textSelection$"]) ==
        null
          ? undefined
          : _0x175074.subscribe(() => {
              (this._restoreNativeSelectionForTextFocus(),
                this.emitCurrentSelection());
            })) ?? (() => undefined),
      ));
  }
  getCurrentSelection() {
    let _0x5110ef = this._getCurrentDoc();
    if (!_0x5110ef) return null;
    if (!this._nativeSelectionSuppressed) {
      var _0x41281f, _0x3f7625, _0x374303, _0x314d0c;
      let _0x4ef277 =
        (_0x41281f = (_0x3f7625 = this._docSelectionManagerService)
          .getRectRanges) == null
          ? undefined
          : _0x41281f.call(_0x3f7625);
      if (_0x4ef277 && _0x4ef277.length > 0)
        return this._getSelectionFromRectRanges(_0x5110ef, _0x4ef277);
      let _0x2dcc10 =
        (_0x374303 = (_0x314d0c = this._docSelectionManagerService)
          .getActiveTextRange) == null
          ? undefined
          : _0x374303.call(_0x314d0c);
      if (_0x2dcc10)
        return (
          this._getSelectionFromActiveTextRange(_0x5110ef, _0x2dcc10) || {
            kind: "text",
            unitId: _0x5110ef.getUnitId(),
            segmentId: _0x2dcc10.segmentId ?? "",
            tableId: "",
            startRow: -1,
            endRow: -1,
            startColumn: -1,
            endColumn: -1,
            startOffset: _0x2dcc10.startOffset ?? 0,
            endOffset: _0x2dcc10.endOffset ?? _0x2dcc10.startOffset ?? 0,
            source: "text",
          }
        );
    }
    let _0x46a86d = this._getValidStructuralSelection(_0x5110ef);
    return _0x46a86d ? { ..._0x46a86d, unitId: _0x5110ef.getUnitId() } : null;
  }
  getStructuralSelection() {
    let _0x409038 = this._getCurrentDoc();
    if (!_0x409038) return null;
    let _0x1ef5ca = this._getValidStructuralSelection(_0x409038);
    return _0x1ef5ca ? { ..._0x1ef5ca, unitId: _0x409038.getUnitId() } : null;
  }
  getStableTableSelection() {
    let _0x10001d = this.getCurrentSelection();
    return yr(_0x10001d) ? _0x10001d : null;
  }
  emitCurrentSelection() {
    let _0x50e6a2 = this._getCurrentDoc();
    (_0x50e6a2 && this._getValidStructuralSelection(_0x50e6a2),
      this._selectionChange$["next"](this.getCurrentSelection()));
  }
  setStructuralSelection(_0x433f52, _0x1d8ca3 = {}) {
    var _0x172f10;
    let _0x538d4c = this._getCurrentDoc(),
      _0x5b934a =
        _0x538d4c == null ||
        (_0x172f10 = _0x538d4c.getSnapshot().tableSource) == null
          ? undefined
          : _0x172f10[_0x433f52.tableId],
      _0x527b63 = _0x5b934a ? Sr(_0x5b934a, _0x433f52) : null;
    if (!_0x5b934a || !_0x527b63) {
      (this._clearStructuralSelectionState(true), this.emitCurrentSelection());
      return;
    }
    if (
      ((this._structuralSelection = {
        kind: Tr(_0x433f52.kind, _0x527b63, _0x5b934a),
        unitId: (_0x538d4c == null ? undefined : _0x538d4c.getUnitId()) ?? "",
        segmentId: _0x433f52.segmentId ?? "",
        tableId: _0x433f52.tableId,
        startRow: _0x527b63.startRow,
        endRow: _0x527b63.endRow,
        startColumn: _0x527b63.startColumn,
        endColumn: _0x527b63.endColumn,
        startOffset: _0x433f52.startOffset ?? 0,
        endOffset: _0x433f52.endOffset ?? _0x433f52.startOffset ?? 0,
        source: "structural",
      }),
      (this._structuralSelectionTableShape = wr(_0x5b934a)),
      (this._preserveStructuralSelectionOnNextTextSelection =
        !!_0x1d8ca3.preserveOnTextSelection),
      _0x1d8ca3.clearNativeSelection !== false)
    ) {
      var _0x2c0999, _0x779ab2;
      (_0x2c0999 = (_0x779ab2 = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x2c0999.call(_0x779ab2, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setStructuralHeaderSelection(
    _0x5b61fd,
    _0x420c6c,
    _0x30a9f0,
    _0x2eb2d5,
    _0x140cf6 = {},
  ) {
    var _0x401642, _0x3cef91;
    let _0x12721f = this._getCurrentDoc(),
      _0x4525e4 =
        _0x12721f == null ||
        (_0x401642 = _0x12721f.getSnapshot().tableSource) == null
          ? undefined
          : _0x401642[_0x5b61fd];
    if (!_0x4525e4) return;
    let _0x568c58 = _0x4525e4.tableRows["length"],
      _0x38a1e8 =
        ((_0x3cef91 = _0x4525e4.tableRows[0]) == null
          ? undefined
          : _0x3cef91.tableCells["length"]) ?? 0,
      _0x3fe905 = Math.min(_0x30a9f0, _0x2eb2d5),
      _0x510679 = Math.max(_0x30a9f0, _0x2eb2d5);
    if (_0x420c6c === "row") {
      this._setDirectStructuralSelection(
        {
          kind: "row",
          segmentId: _0x140cf6.segmentId,
          tableId: _0x5b61fd,
          startRow: _0x3fe905,
          endRow: _0x510679,
          startColumn: 0,
          endColumn: Math.max(_0x38a1e8 - 1, 0),
        },
        _0x140cf6,
      );
      return;
    }
    this._setDirectStructuralSelection(
      {
        kind: "column",
        segmentId: _0x140cf6.segmentId,
        tableId: _0x5b61fd,
        startRow: 0,
        endRow: Math.max(_0x568c58 - 1, 0),
        startColumn: _0x3fe905,
        endColumn: _0x510679,
      },
      _0x140cf6,
    );
  }
  clearStructuralSelection(_0x16d31e = {}) {
    if (
      (this._clearStructuralSelectionState(),
      _0x16d31e.clearNativeSelection !== false)
    ) {
      var _0x5a0267, _0x3f2aea;
      (_0x5a0267 = (_0x3f2aea = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x5a0267.call(_0x3f2aea, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setNativeSelectionSuppressed(_0x333e55) {
    if (this._nativeSelectionSuppressed !== _0x333e55) {
      if (
        ((this._nativeSelectionSuppressed = _0x333e55),
        _0x333e55 ||
          (this._preserveStructuralSelectionOnNextTextSelection = false),
        _0x333e55)
      ) {
        var _0x560b2a, _0x508217;
        (_0x560b2a = (_0x508217 = this._docSelectionManagerService)
          .replaceDocRanges) == null ||
          _0x560b2a.call(_0x508217, [], undefined, false);
      }
      this.emitCurrentSelection();
    }
  }
  dispose() {
    (super.dispose(), this._selectionChange$["complete"]());
  }
  _getCurrentDoc() {
    var _0x12ffec, _0x615ca7;
    return (
      ((_0x12ffec = (_0x615ca7 = this._univerInstanceService)
        .getCurrentUnitOfType) == null
        ? undefined
        : _0x12ffec.call(_0x615ca7, _0xd44303.UNIVER_DOC)) ?? null
    );
  }
  _restoreNativeSelectionForTextFocus() {
    var _0x16f57f, _0x2646af;
    let _0xf018c8 =
      (_0x16f57f = (_0x2646af = this._docSelectionManagerService)
        .getActiveTextRange) == null
        ? undefined
        : _0x16f57f.call(_0x2646af);
    if ((_0xf018c8 == null ? undefined : _0xf018c8.startOffset) != null) {
      if (this._preserveStructuralSelectionOnNextTextSelection) {
        this._preserveStructuralSelectionOnNextTextSelection = false;
        return;
      }
      ((this._nativeSelectionSuppressed = false),
        this._clearStructuralSelectionState());
    }
  }
  _setDirectStructuralSelection(_0x4195c1, _0x5551f5 = {}) {
    var _0x40d047;
    let _0x16e222 = this._getCurrentDoc(),
      _0x8bdd79 =
        _0x16e222 == null ||
        (_0x40d047 = _0x16e222.getSnapshot().tableSource) == null
          ? undefined
          : _0x40d047[_0x4195c1.tableId],
      _0x590a41 = _0x8bdd79 ? Sr(_0x8bdd79, _0x4195c1) : null;
    if (!_0x8bdd79 || !_0x590a41) {
      (this._clearStructuralSelectionState(true), this.emitCurrentSelection());
      return;
    }
    if (
      ((this._structuralSelection = {
        kind: _0x4195c1.kind,
        unitId: (_0x16e222 == null ? undefined : _0x16e222.getUnitId()) ?? "",
        segmentId: _0x4195c1.segmentId ?? "",
        tableId: _0x4195c1.tableId,
        startRow: _0x590a41.startRow,
        endRow: _0x590a41.endRow,
        startColumn: _0x590a41.startColumn,
        endColumn: _0x590a41.endColumn,
        startOffset: _0x4195c1.startOffset ?? 0,
        endOffset: _0x4195c1.endOffset ?? _0x4195c1.startOffset ?? 0,
        source: "structural",
      }),
      (this._structuralSelectionTableShape = wr(_0x8bdd79)),
      (this._preserveStructuralSelectionOnNextTextSelection =
        !!_0x5551f5.preserveOnTextSelection),
      _0x5551f5.clearNativeSelection !== false)
    ) {
      var _0x46ac81, _0x11a70c;
      (_0x46ac81 = (_0x11a70c = this._docSelectionManagerService)
        .replaceDocRanges) == null ||
        _0x46ac81.call(_0x11a70c, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  _getSelectionFromActiveTextRange(_0x140275, _0x58cbf3) {
    var _0x2ac885;
    let _0x438aea = _0x58cbf3.startOffset;
    if (_0x438aea == null) return null;
    let _0x3d17df =
        z(_0x140275, _0x58cbf3.segmentId) ?? _0x140275.getSnapshot(),
      _0x249325 =
        (_0x2ac885 = _0x3d17df.body) == null ||
        (_0x2ac885 = _0x2ac885.tables) == null
          ? undefined
          : _0x2ac885.find(
              (_0x4ec674) =>
                _0x438aea > _0x4ec674.startIndex &&
                _0x438aea < _0x4ec674.endIndex,
            );
    if (!(_0x249325 != null && _0x249325.tableId)) return null;
    let _0x147fe3 = w(_0x3d17df, _0x249325.tableId),
      _0x5f1df0 =
        _0x147fe3 == null
          ? undefined
          : _0x147fe3.rows["flatMap"]((_0x5a57e7) => _0x5a57e7.cells).find(
              (_0x20bf7e) =>
                _0x438aea >= _0x20bf7e.startOffset &&
                _0x438aea <= _0x20bf7e.endOffset,
            );
    if (!_0x147fe3 || !_0x5f1df0) return null;
    let _0x15307d = Be(_0x147fe3.tableSource, {
      startRow: _0x5f1df0.row,
      endRow: _0x5f1df0.row,
      startColumn: _0x5f1df0.column,
      endColumn: _0x5f1df0.column,
    });
    return {
      kind: Tr("cell", _0x15307d, _0x147fe3.tableSource),
      unitId: _0x140275.getUnitId(),
      segmentId: _0x58cbf3.segmentId ?? "",
      tableId: _0x249325.tableId,
      startRow: _0x15307d.startRow,
      endRow: _0x15307d.endRow,
      startColumn: _0x15307d.startColumn,
      endColumn: _0x15307d.endColumn,
      startOffset: _0x5f1df0.startOffset,
      endOffset: _0x5f1df0.endOffset,
      source: "text",
    };
  }
  _getSelectionFromRectRanges(_0x43c424, _0x5bfed7) {
    var _0x5211ad;
    let _0x1d5912 = _0x5bfed7.find((_0x5df1d2) => !!_0x5df1d2.tableId);
    if (!(_0x1d5912 != null && _0x1d5912.tableId)) return null;
    let _0x77cd79 = _0x1d5912.tableId,
      _0x35451b =
        (_0x5211ad = _0x43c424.getSnapshot().tableSource) == null
          ? undefined
          : _0x5211ad[_0x77cd79];
    if (!_0x35451b) return null;
    let _0x42a1c0 = _0x5bfed7
      .filter((_0x4caa49) => _0x4caa49.tableId === _0x77cd79)
      .map((_0x1518ce) => {
        let _0x3f9c16 = xr(_0x35451b, _0x1518ce);
        return _0x3f9c16 ? { ..._0x1518ce, ..._0x3f9c16 } : null;
      });
    if (_0x42a1c0.some((_0x362e55) => _0x362e55 == null)) return null;
    let _0x2d8c3c = _0x42a1c0.filter((_0x5808a9) => _0x5808a9 != null),
      _0x1c7f42 = this._canCombineRectRanges(_0x2d8c3c)
        ? _0x2d8c3c
        : [_0x2d8c3c[0] ?? _0x1d5912],
      _0x26b469 = Be(_0x35451b, {
        startRow: Math.min(
          ..._0x1c7f42.map((_0x4fb4cc) =>
            Math.min(_0x4fb4cc.startRow, _0x4fb4cc.endRow),
          ),
        ),
        endRow: Math.max(
          ..._0x1c7f42.map((_0x4c1af8) =>
            Math.max(_0x4c1af8.startRow, _0x4c1af8.endRow),
          ),
        ),
        startColumn: Math.min(
          ..._0x1c7f42.map((_0x3d8403) =>
            Math.min(_0x3d8403.startColumn, _0x3d8403.endColumn),
          ),
        ),
        endColumn: Math.max(
          ..._0x1c7f42.map((_0x5d8b99) =>
            Math.max(_0x5d8b99.startColumn, _0x5d8b99.endColumn),
          ),
        ),
      }),
      _0x323343 = Tr("range", _0x26b469, _0x35451b),
      _0x4016cc = _0x1c7f42
        .map((_0x3fe635) => _0x3fe635.startOffset)
        .filter((_0x23e8fe) => typeof _0x23e8fe == "number"),
      _0xb4d8e3 = _0x1c7f42
        .map((_0x59c4ba) => _0x59c4ba.endOffset)
        .filter((_0x4d9566) => typeof _0x4d9566 == "number");
    return {
      kind: _0x323343,
      unitId: _0x43c424.getUnitId(),
      segmentId: _0x1d5912.segmentId ?? "",
      tableId: _0x77cd79,
      startRow: _0x26b469.startRow,
      endRow: _0x26b469.endRow,
      startColumn: _0x26b469.startColumn,
      endColumn: _0x26b469.endColumn,
      startOffset: _0x4016cc.length ? Math.min(..._0x4016cc) : 0,
      endOffset: _0xb4d8e3.length
        ? Math.max(..._0xb4d8e3)
        : (_0x4016cc[0] ?? 0),
      source: "rect",
    };
  }
  _canCombineRectRanges(_0x11953e) {
    if (_0x11953e.length <= 1) return true;
    let _0x2b12bb = Math.min(
        ..._0x11953e.map((_0x40b608) =>
          Math.min(_0x40b608.startRow, _0x40b608.endRow),
        ),
      ),
      _0x1e4431 = Math.max(
        ..._0x11953e.map((_0x330063) =>
          Math.max(_0x330063.startRow, _0x330063.endRow),
        ),
      ),
      _0x332af2 = Math.min(
        ..._0x11953e.map((_0x40c4ab) =>
          Math.min(_0x40c4ab.startColumn, _0x40c4ab.endColumn),
        ),
      ),
      _0x15ff6d = Math.max(
        ..._0x11953e.map((_0x355e38) =>
          Math.max(_0x355e38.startColumn, _0x355e38.endColumn),
        ),
      ),
      _0x36487c = new Set();
    return (
      _0x11953e.forEach((_0x43973a) => {
        let _0x574f92 = Math.min(_0x43973a.startRow, _0x43973a.endRow),
          _0x4e14a9 = Math.max(_0x43973a.startRow, _0x43973a.endRow),
          _0x2baa91 = Math.min(_0x43973a.startColumn, _0x43973a.endColumn),
          _0x4e09f3 = Math.max(_0x43973a.startColumn, _0x43973a.endColumn);
        for (let _0x1fa1b3 = _0x574f92; _0x1fa1b3 <= _0x4e14a9; _0x1fa1b3++)
          for (let _0x2df738 = _0x2baa91; _0x2df738 <= _0x4e09f3; _0x2df738++)
            _0x36487c.add(_0x1fa1b3 + ":" + _0x2df738);
      }),
      _0x36487c.size ===
        (_0x1e4431 - _0x2b12bb + 1) * (_0x15ff6d - _0x332af2 + 1)
    );
  }
  _getValidStructuralSelection(_0x201188) {
    var _0x31c34d;
    let _0x46e6bd = this._structuralSelection;
    if (!_0x46e6bd) return null;
    let _0x329a25 =
        (_0x31c34d = _0x201188.getSnapshot().tableSource) == null
          ? undefined
          : _0x31c34d[_0x46e6bd.tableId],
      _0x95678f = _0x329a25 ? Sr(_0x329a25, _0x46e6bd) : null;
    return !_0x329a25 ||
      !_0x95678f ||
      this._structuralSelectionTableShape !== wr(_0x329a25)
      ? (this._clearStructuralSelectionState(true), null)
      : ((this._structuralSelection = {
          ..._0x46e6bd,
          kind: Tr(_0x46e6bd.kind, _0x95678f, _0x329a25),
          ..._0x95678f,
        }),
        this._structuralSelection);
  }
  _clearStructuralSelectionState(_0x36af75 = false) {
    ((this._structuralSelection = null),
      (this._structuralSelectionTableShape = null),
      _0x36af75 && (this._nativeSelectionSuppressed = false),
      (this._preserveStructuralSelectionOnNextTextSelection = false));
  }
};
q = vr([K(0, _0x4b52ad), K(1, _0x84807d(_0x10d55c))], q);
function yr(_0x10b6a7) {
  return (
    !!(_0x10b6a7 != null && _0x10b6a7.tableId) &&
    _0x10b6a7.startRow >= 0 &&
    _0x10b6a7.startColumn >= 0
  );
}
function br(_0x23394b) {
  return {
    startRow: Math.min(_0x23394b.startRow, _0x23394b.endRow),
    endRow: Math.max(_0x23394b.startRow, _0x23394b.endRow),
    startColumn: Math.min(_0x23394b.startColumn, _0x23394b.endColumn),
    endColumn: Math.max(_0x23394b.startColumn, _0x23394b.endColumn),
  };
}
function xr(_0x498e8a, _0x56c2af) {
  let _0x548c22 = Cr(_0x498e8a, _0x56c2af);
  return _0x548c22 ? Be(_0x498e8a, _0x548c22) : null;
}
function Sr(_0x19dc5a, _0x582611) {
  let _0x3cb8e4 = Cr(_0x19dc5a, _0x582611);
  return _0x3cb8e4
    ? _0x582611.kind === "row" || _0x582611.kind === "column"
      ? _0x3cb8e4
      : Be(_0x19dc5a, _0x3cb8e4)
    : null;
}
function Cr(_0x354287, _0x5ca2bd) {
  var _0x5429a4;
  let _0x580c79 = br(_0x5ca2bd),
    _0x415b52 = _0x354287.tableRows["length"],
    _0x52dab4 =
      ((_0x5429a4 = _0x354287.tableRows[0]) == null
        ? undefined
        : _0x5429a4.tableCells["length"]) ?? 0;
  return _0x415b52 === 0 ||
    _0x52dab4 === 0 ||
    _0x580c79.startRow < 0 ||
    _0x580c79.endRow >= _0x415b52 ||
    _0x580c79.startColumn < 0 ||
    _0x580c79.endColumn >= _0x52dab4
    ? null
    : _0x580c79;
}
function wr(_0x30c510) {
  return (
    _0x30c510.tableRows["length"] +
    ":" +
    _0x30c510.tableRows["map"](
      (_0x152434) => _0x152434.tableCells["length"],
    ).join(",")
  );
}
function Tr(_0x4362e1, _0x3adbfa, _0x3700ae) {
  let _0x16b4e4 =
    _0x3adbfa.startRow === _0x3adbfa.endRow &&
    _0x3adbfa.startColumn === _0x3adbfa.endColumn;
  if (_0x4362e1 === "cell" && (_0x16b4e4 || Dr(_0x3700ae, _0x3adbfa)))
    return "cell";
  let { spansEntireRow: _0x3839a0, spansEntireColumn: _0x5dde52 } = Er(
    _0x3adbfa,
    _0x3700ae,
  );
  return _0x4362e1 === "row" && _0x3839a0
    ? "row"
    : _0x4362e1 === "column" && _0x5dde52
      ? "column"
      : _0x3839a0 && _0x5dde52
        ? "table"
        : _0x16b4e4
          ? "cell"
          : "range";
}
function Er(_0x55f11d, _0x3ceb4d) {
  var _0x26145c;
  let _0x37bf88 =
      (_0x3ceb4d == null ? undefined : _0x3ceb4d.tableRows["length"]) ?? 0,
    _0x5cbbbc =
      (_0x3ceb4d == null || (_0x26145c = _0x3ceb4d.tableRows[0]) == null
        ? undefined
        : _0x26145c.tableCells["length"]) ?? 0;
  return {
    spansEntireRow:
      _0x5cbbbc > 0 &&
      _0x55f11d.startColumn === 0 &&
      _0x55f11d.endColumn === _0x5cbbbc - 1,
    spansEntireColumn:
      _0x37bf88 > 0 &&
      _0x55f11d.startRow === 0 &&
      _0x55f11d.endRow === _0x37bf88 - 1,
  };
}
function Dr(_0x4edc1f, _0x2ef8b9) {
  return (
    (_0x4edc1f == null
      ? undefined
      : _0x4edc1f.tableRows["some"]((_0x1ee339, _0x4635db) =>
          _0x1ee339.tableCells["some"]((_0xd73f7f, _0x143a11) => {
            let _0x32160e = _0xd73f7f.rowSpan ?? 1,
              _0x125cb4 = _0xd73f7f.columnSpan ?? 1;
            return _0x32160e <= 0 ||
              _0x125cb4 <= 0 ||
              (_0x32160e === 1 && _0x125cb4 === 1)
              ? false
              : _0x2ef8b9.startRow === _0x4635db &&
                  _0x2ef8b9.endRow === _0x4635db + _0x32160e - 1 &&
                  _0x2ef8b9.startColumn === _0x143a11 &&
                  _0x2ef8b9.endColumn === _0x143a11 + _0x125cb4 - 1;
          }),
        )) ?? false
  );
}
const Or = {
    id: "docs-table.command.delete-columns",
    type: _0x499278.COMMAND,
    handler: (_0x5f1cf4, _0xdcba06) => {
      if (!_0xdcba06) return false;
      let _0x144a06 = _0x5f1cf4.get(_0x4b52ad),
        _0x516a36 = _0x5f1cf4.get(_0x1bfcad),
        _0x321ac9 = _0x5f1cf4.get(q),
        _0x4aba45 = _0x144a06.getUnit(_0xdcba06.unitId, _0xd44303.UNIVER_DOC);
      if (!_0x4aba45) return false;
      let _0x303765 = _0x321ac9.getCurrentSelection(),
        _0x55d620 =
          (_0x303765 == null ? undefined : _0x303765.unitId) ===
          _0x4aba45.getUnitId()
            ? _0x303765
            : null,
        {
          endColumn: _0x6b5d86,
          startColumn: _0x374082,
          tableId: _0x39e6a5,
        } = _0xdcba06,
        _0x4e1da9 = _0x4aba45.getSnapshot(),
        _0x16900d = _0xdcba06.segmentId ?? "",
        _0x188733 = z(_0x4aba45, _0x16900d);
      if (!_0x188733) return false;
      let _0x16f645 = zn(
        _0x188733,
        _0x39e6a5,
        _0x374082,
        _0x6b5d86,
        W(_0x4e1da9, _0x16900d),
      );
      if (!_0x16f645) return false;
      let _0x489430 = U(
        _0x516a36,
        _0x4aba45.getUnitId(),
        _0x188733,
        _0x16f645.actions,
        undefined,
        undefined,
        Or.id,
      );
      if (_0x489430 && _0x55d620) {
        let _0x98b2f4 = Se(
          _0x55d620,
          _0x188733,
          _0x16f645.deleteTable
            ? { kind: "delete-table", tableId: _0x39e6a5 }
            : {
                kind: "delete-columns",
                tableId: _0x39e6a5,
                index: Math.min(_0x374082, _0x6b5d86),
                count: Math.abs(_0x6b5d86 - _0x374082) + 1,
              },
        );
        _0x98b2f4
          ? _0x321ac9.setStructuralSelection(_0x98b2f4)
          : _0x321ac9.clearStructuralSelection();
      }
      return _0x489430;
    },
  },
  kr = {
    id: "docs-table.command.delete-rows",
    type: _0x499278.COMMAND,
    handler: (_0x5ae3da, _0x277be6) => {
      if (!_0x277be6) return false;
      let _0x514a7f = _0x5ae3da.get(_0x4b52ad),
        _0x5cde69 = _0x5ae3da.get(_0x1bfcad),
        _0x21d6da = _0x5ae3da.get(q),
        _0x4bbfb3 = _0x514a7f.getUnit(_0x277be6.unitId, _0xd44303.UNIVER_DOC);
      if (!_0x4bbfb3) return false;
      let _0xac1067 = _0x21d6da.getCurrentSelection(),
        _0x2ee2d1 =
          (_0xac1067 == null ? undefined : _0xac1067.unitId) ===
          _0x4bbfb3.getUnitId()
            ? _0xac1067
            : null,
        {
          endRow: _0xf9cc24,
          startRow: _0x5cdd24,
          tableId: _0x9401c7,
        } = _0x277be6,
        _0x4c5d61 = _0x4bbfb3.getSnapshot(),
        _0x28b06d = _0x277be6.segmentId ?? "",
        _0x48fa84 = z(_0x4bbfb3, _0x28b06d);
      if (!_0x48fa84) return false;
      let _0x4c0068 = Qn(
        _0x48fa84,
        _0x9401c7,
        _0x5cdd24,
        _0xf9cc24,
        W(_0x4c5d61, _0x28b06d),
      );
      if (!_0x4c0068) return false;
      let _0x35703c = U(
        _0x5cde69,
        _0x4bbfb3.getUnitId(),
        _0x48fa84,
        _0x4c0068.actions,
        undefined,
        undefined,
        kr.id,
      );
      if (_0x35703c && _0x2ee2d1) {
        let _0x4f643e = Se(
          _0x2ee2d1,
          _0x48fa84,
          _0x4c0068.deleteTable
            ? { kind: "delete-table", tableId: _0x9401c7 }
            : {
                kind: "delete-rows",
                tableId: _0x9401c7,
                index: Math.min(_0x5cdd24, _0xf9cc24),
                count: Math.abs(_0xf9cc24 - _0x5cdd24) + 1,
              },
        );
        _0x4f643e
          ? _0x21d6da.setStructuralSelection(_0x4f643e)
          : _0x21d6da.clearStructuralSelection();
      }
      return _0x35703c;
    },
  },
  Ar = {
    id: "docs-table.command.delete-table",
    type: _0x499278.COMMAND,
    handler: (_0x5c161d, _0x452225) => {
      if (!_0x452225) return false;
      let _0x5ab763 = _0x5c161d.get(_0x4b52ad),
        _0x345b82 = _0x5c161d.get(_0x1bfcad),
        _0x50a418 = _0x5c161d.get(q),
        _0x27d153 = _0x5ab763.getUnit(_0x452225.unitId, _0xd44303.UNIVER_DOC),
        _0x15c265 = _0x50a418.getCurrentSelection(),
        _0x1b382 =
          (_0x15c265 == null ? undefined : _0x15c265.unitId) ===
          (_0x27d153 == null ? undefined : _0x27d153.getUnitId())
            ? _0x15c265
            : null;
      if (!_0x27d153) return false;
      let { tableId: _0x4e46fb } = _0x452225,
        _0x2750be = _0x27d153.getSnapshot(),
        _0x203c37 = _0x452225.segmentId ?? "",
        _0x270256 = z(_0x27d153, _0x203c37);
      if (!_0x270256) return false;
      let _0x54c173 = $n(_0x270256, _0x4e46fb, W(_0x2750be, _0x203c37));
      if (!_0x54c173) return false;
      let _0x4e6ef5 = U(
        _0x345b82,
        _0x27d153.getUnitId(),
        _0x270256,
        _0x54c173.actions,
        undefined,
        undefined,
        Ar.id,
      );
      if (_0x4e6ef5 && _0x1b382) {
        let _0x46a535 = Se(_0x1b382, _0x270256, {
          kind: "delete-table",
          tableId: _0x4e46fb,
        });
        _0x46a535
          ? _0x50a418.setStructuralSelection(_0x46a535)
          : _0x50a418.clearStructuralSelection();
      }
      return _0x4e6ef5;
    },
  },
  jr = {
    id: "docs-table.command.distribute-columns",
    type: _0x499278.COMMAND,
    handler: async (_0x38894e, _0x3fa222) => {
      let _0x131023 = _0x38894e.get(_0x4b52ad),
        _0x14f186 = _0x38894e.get(_0x1bfcad),
        _0x32ae84 = _0x38894e.get(q),
        _0x13f9e1 = _0x131023.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x56dd57 = _0x32ae84.getCurrentSelection(),
        _0x4ff23e =
          (_0x3fa222 == null ? undefined : _0x3fa222.tableId) ??
          (_0x56dd57 == null ? undefined : _0x56dd57.tableId),
        _0x52b164 =
          (_0x3fa222 == null ? undefined : _0x3fa222.startColumn) ??
          (_0x56dd57 == null ? undefined : _0x56dd57.startColumn),
        _0x3679f3 =
          (_0x3fa222 == null ? undefined : _0x3fa222.endColumn) ??
          (_0x56dd57 == null ? undefined : _0x56dd57.endColumn);
      if (!_0x13f9e1 || !_0x4ff23e || _0x52b164 == null || _0x3679f3 == null)
        return false;
      let _0x581915 = z(_0x13f9e1, L(_0x3fa222, _0x56dd57));
      if (!_0x581915) return false;
      let _0x52f689 = Mn(_0x581915, _0x4ff23e, _0x52b164, _0x3679f3);
      return U(_0x14f186, _0x13f9e1.getUnitId(), _0x581915, _0x52f689);
    },
  },
  Mr = {
    id: "docs-table.command.distribute-rows",
    type: _0x499278.COMMAND,
    handler: async (_0x5ada23, _0x1b23c9) => {
      let _0x5e2508 = _0x5ada23.get(_0x4b52ad),
        _0x137949 = _0x5ada23.get(_0x1bfcad),
        _0x63535e = _0x5ada23.get(q),
        _0x292a36 = _0x5e2508.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x505b9b = _0x63535e.getCurrentSelection(),
        _0x5e6678 =
          (_0x1b23c9 == null ? undefined : _0x1b23c9.tableId) ??
          (_0x505b9b == null ? undefined : _0x505b9b.tableId),
        _0x37f4bf =
          (_0x1b23c9 == null ? undefined : _0x1b23c9.startRow) ??
          (_0x505b9b == null ? undefined : _0x505b9b.startRow),
        _0xfb481 =
          (_0x1b23c9 == null ? undefined : _0x1b23c9.endRow) ??
          (_0x505b9b == null ? undefined : _0x505b9b.endRow);
      if (!_0x292a36 || !_0x5e6678 || _0x37f4bf == null || _0xfb481 == null)
        return false;
      let _0x434399 = z(_0x292a36, L(_0x1b23c9, _0x505b9b));
      if (!_0x434399) return false;
      let _0x3de38a = jn(_0x434399, _0x5e6678, _0x37f4bf, _0xfb481);
      return U(_0x137949, _0x292a36.getUnitId(), _0x434399, _0x3de38a);
    },
  },
  Nr = {
    id: "docs-table.command.insert-columns",
    type: _0x499278.COMMAND,
    handler: async (_0x46ec3f, _0x11f5d7) => {
      var _0x4457c9;
      if (!_0x11f5d7) return false;
      let _0x2903e7 = _0x46ec3f.get(_0x4b52ad),
        _0x4d152d = _0x46ec3f.get(_0x1bfcad),
        _0x8ebed6 = _0x46ec3f.get(q),
        _0x28e0b0 = _0x2903e7.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x185bd4 = _0x8ebed6.getCurrentSelection(),
        _0x186250 =
          _0x11f5d7.tableId ??
          (_0x185bd4 == null ? undefined : _0x185bd4.tableId),
        _0x220509 =
          _0x11f5d7.column ??
          (_0x11f5d7.position === "left"
            ? _0x185bd4 == null
              ? undefined
              : _0x185bd4.startColumn
            : _0x185bd4 == null
              ? undefined
              : _0x185bd4.endColumn);
      if (!_0x28e0b0 || _0x186250 == null || _0x220509 == null) return false;
      let _0x24c55c = _0x28e0b0.getSnapshot(),
        _0x5ede89 = L(_0x11f5d7, _0x185bd4),
        _0xd4f016 = z(_0x28e0b0, _0x5ede89);
      if (!_0xd4f016) return false;
      let _0xd2ca09 =
          _0x11f5d7.count ??
          (_0x185bd4
            ? Math.max(1, _0x185bd4.endColumn - _0x185bd4.startColumn + 1)
            : 1),
        _0x57d7e0 =
          ((_0x4457c9 = _0x24c55c.documentStyle) == null
            ? undefined
            : _0x4457c9.documentFlavor) === _0x429b71.MODERN,
        _0x213118 = Pn(
          _0xd4f016,
          _0x186250,
          _0x220509,
          _0xd2ca09,
          _0x11f5d7.position,
          {
            bodyPath: W(_0x24c55c, _0x5ede89),
            insertedColumnWidth: _0x57d7e0
              ? Pr(_0x24c55c, _0x186250, _0x220509, _0x11f5d7.position)
              : undefined,
            preserveTotalWidth: !_0x57d7e0,
          },
        );
      if (!_0x213118) return false;
      let _0x115612 = U(
        _0x4d152d,
        _0x28e0b0.getUnitId(),
        _0xd4f016,
        _0x213118.actions,
      );
      if (_0x115612 && _0x185bd4) {
        let _0x5201a5 = Se(_0x185bd4, _0xd4f016, {
          kind: "insert-columns",
          tableId: _0x186250,
          index: _0x213118.cursorColumn,
          count: _0xd2ca09,
        });
        _0x5201a5 && _0x8ebed6.setStructuralSelection(_0x5201a5);
      }
      return _0x115612;
    },
  };
function Pr(_0x54d22a, _0x20adb8, _0x439602, _0x24bb97) {
  var _0x264d11, _0x15b03b;
  let _0x234209 =
    (_0x15b03b = (((_0x264d11 = _0x54d22a.tableSource) == null ||
    (_0x264d11 = _0x264d11[_0x20adb8]) == null
      ? undefined
      : _0x264d11.tableColumns) ?? [])[
      (_0x24bb97 === "left" ? _0x439602 : _0x439602 + 1) - 1
    ]) == null ||
    (_0x15b03b = _0x15b03b.size) == null ||
    (_0x15b03b = _0x15b03b.width) == null
      ? undefined
      : _0x15b03b.v;
  return _0x234209 && _0x234209 > 0 ? _0x234209 : 100;
}
const Fr = {
    id: "docs-table.command.insert-rows",
    type: _0x499278.COMMAND,
    handler: async (_0x358ff8, _0x564429) => {
      if (!_0x564429) return false;
      let _0x1b6058 = _0x358ff8.get(_0x4b52ad),
        _0x1db940 = _0x358ff8.get(_0x1bfcad),
        _0x17b924 = _0x358ff8.get(q),
        _0x28eb72 = _0x1b6058.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x24e182 = _0x17b924.getCurrentSelection(),
        _0x33f201 =
          _0x564429.tableId ??
          (_0x24e182 == null ? undefined : _0x24e182.tableId),
        _0x1e9239 =
          _0x564429.row ??
          (_0x564429.position === "above"
            ? _0x24e182 == null
              ? undefined
              : _0x24e182.startRow
            : _0x24e182 == null
              ? undefined
              : _0x24e182.endRow);
      if (!_0x28eb72 || _0x33f201 == null || _0x1e9239 == null) return false;
      let _0x4976e3 = _0x28eb72.getSnapshot(),
        _0x3d7b74 = L(_0x564429, _0x24e182),
        _0x529ad4 = z(_0x28eb72, _0x3d7b74);
      if (!_0x529ad4) return false;
      let _0x1a9821 =
          _0x564429.count ??
          (_0x24e182
            ? Math.max(1, _0x24e182.endRow - _0x24e182.startRow + 1)
            : 1),
        _0x584538 = Xn(
          _0x529ad4,
          _0x33f201,
          _0x1e9239,
          _0x1a9821,
          _0x564429.position,
          W(_0x4976e3, _0x3d7b74),
        );
      if (!_0x584538) return false;
      let _0x21fa2a = U(
        _0x1db940,
        _0x28eb72.getUnitId(),
        _0x529ad4,
        _0x584538.actions,
      );
      if (_0x21fa2a && _0x24e182) {
        let _0x2e1852 = Se(_0x24e182, _0x529ad4, {
          kind: "insert-rows",
          tableId: _0x33f201,
          index: _0x584538.cursorRow,
          count: _0x1a9821,
        });
        _0x2e1852 && _0x17b924.setStructuralSelection(_0x2e1852);
      }
      return _0x21fa2a;
    },
  },
  Ir = { start: { v: 10 }, end: { v: 10 }, top: { v: 5 }, bottom: { v: 5 } };
function Lr(_0x5309cc) {
  var _0x5000e3;
  let _0x2646fb =
    (_0x5000e3 = _0x5309cc.documentData["tableSource"]) == null
      ? undefined
      : _0x5000e3[_0x5309cc.tableId];
  if (!_0x2646fb) return null;
  let _0x5ea6b5 = Vr(_0x5309cc),
    _0x31c955 = [],
    _0x47a0c2 = _0x33f29e.getInstance();
  for (
    let _0x4f6857 = _0x5ea6b5.startRow;
    _0x4f6857 <= _0x5ea6b5.endRow;
    _0x4f6857++
  )
    for (
      let _0x35fc6b = _0x5ea6b5.startColumn;
      _0x35fc6b <= _0x5ea6b5.endColumn;
      _0x35fc6b++
    ) {
      var _0x58db96;
      let _0x3ebb16 =
        (_0x58db96 = _0x2646fb.tableRows[_0x4f6857]) == null
          ? undefined
          : _0x58db96.tableCells[_0x35fc6b];
      if (!_0x3ebb16) return null;
      zr(
        _0x31c955,
        [
          "tableSource",
          _0x5309cc.tableId,
          "tableRows",
          _0x4f6857,
          "tableCells",
          _0x35fc6b,
          "margin",
        ],
        _0x3ebb16.margin,
        _0x5309cc.margin ?? undefined,
        _0x47a0c2,
      );
    }
  return Br(_0x31c955);
}
function Rr(_0x153b1c, _0x171525, _0x4fcade) {
  var _0x2c0ffa;
  let _0x197307 =
    (_0x2c0ffa = _0x153b1c.tableSource) == null
      ? undefined
      : _0x2c0ffa[_0x171525];
  if (!_0x197307) return null;
  let _0x497c96 = [];
  return (
    zr(
      _0x497c96,
      ["tableSource", _0x171525, "cellMargin"],
      _0x197307.cellMargin,
      _0x4fcade ?? undefined,
      _0x33f29e.getInstance(),
    ),
    Br(_0x497c96)
  );
}
function zr(_0x13b8bb, _0x37de02, _0x388fdb, _0x3aa025, _0x3d9ab1) {
  JSON.stringify(_0x388fdb) !== JSON.stringify(_0x3aa025) &&
    (_0x388fdb === undefined
      ? _0x13b8bb.push(
          _0x3d9ab1.insertOp(_0x37de02, _0x27aca5.deepClone(_0x3aa025)),
        )
      : _0x3aa025 === undefined
        ? _0x13b8bb.push(_0x3d9ab1.removeOp(_0x37de02, _0x388fdb))
        : _0x13b8bb.push(
            _0x3d9ab1.replaceOp(
              _0x37de02,
              _0x388fdb,
              _0x27aca5.deepClone(_0x3aa025),
            ),
          ));
}
function Br(_0x3ff5bd) {
  return _0x3ff5bd.reduce(
    (_0x18fd21, _0x3903f4) => _0x33f29e.compose(_0x18fd21, _0x3903f4),
    null,
  );
}
function Vr(_0x1897f2) {
  return {
    startRow: Math.min(_0x1897f2.startRow, _0x1897f2.endRow),
    endRow: Math.max(_0x1897f2.startRow, _0x1897f2.endRow),
    startColumn: Math.min(_0x1897f2.startColumn, _0x1897f2.endColumn),
    endColumn: Math.max(_0x1897f2.startColumn, _0x1897f2.endColumn),
  };
}
let Hr = (function (_0xf55a60) {
  return (
    (_0xf55a60.Selection = "selection"),
    (_0xf55a60.DocumentEnd = "documentEnd"),
    (_0xf55a60.Offset = "offset"),
    _0xf55a60
  );
})({});
var Ur = class extends Error {
  constructor() {
    super(
      "Table\x20can\x20only\x20be\x20inserted\x20in\x20a\x20normal\x20paragraph\x20area",
    );
  }
};
function Wr(_0x33408a, _0x3fb759 = ["body"]) {
  var _0x37aad1, _0x110a78;
  let _0x16cded = _0x33408a.documentData["body"] ?? qr(),
    _0xb6ba22 = Yr(_0x33408a),
    _0x215001 = _0xb6ba22.length,
    _0x319789 =
      ((_0x37aad1 = _0xb6ba22[0]) == null ? undefined : _0x37aad1.length) ?? 1,
    _0x3feabf = Xr(_0x16cded, _0x33408a);
  Zr(_0x16cded, _0x3feabf);
  let _0x48c5ca = Gr(_0x16cded, _0x33408a, _0xb6ba22, _0x3feabf),
    _0x334df1 = _0x33408a.documentData["body"]
      ? Kr(_0x48c5ca, _0x3feabf, _0x3fb759)
      : _0x33f29e.getInstance().insertOp(_0x3fb759, Jr(_0x48c5ca)),
    _0x262384 = li(_0x33408a, _0x215001, _0x319789),
    _0xf248a6 = _0x33f29e
      .getInstance()
      .insertOp(["tableSource", _0x33408a.tableId], _0x262384),
    _0x2e7e6c = N(_0x33408a.metadata),
    _0x48292b = mi(_0x33408a);
  return (
    _0x48292b && (_0x2e7e6c.tables[_0x33408a.tableId] = _0x48292b),
    {
      actions: _0x33f29e.compose(_0x334df1, _0xf248a6),
      cursorOffset:
        _0x3feabf +
        (((_0x110a78 = _0x48c5ca.tables) == null ||
        (_0x110a78 = _0x110a78.find(
          (_0x29a2f5) => _0x29a2f5.tableId === _0x33408a.tableId,
        )) == null
          ? undefined
          : _0x110a78.startIndex) ?? 0) +
        3,
      nextMetadata: _0x2e7e6c,
      tableId: _0x33408a.tableId,
    }
  );
}
function Gr(_0x59e634, _0xaa2de0, _0x558f1d, _0x4c56c1) {
  let _0x2b63bb = si(_0x59e634),
    _0xa7b598 = oi(_0x558f1d, _0x2b63bb, ci(_0x59e634)),
    _0x53a98a = ti(_0x59e634, _0x4c56c1) ? _0x597d36.PARAGRAPH : "",
    _0x3328ff = _0x53a98a ? ri(_0x59e634, _0x4c56c1) : undefined,
    _0x15e6a9 = ni(_0x59e634, _0x4c56c1) ? _0x597d36.PARAGRAPH : "",
    _0x141ee0 = _0x53a98a.length,
    _0x5d5187 = _0x141ee0 + _0xa7b598.dataStream["length"];
  return {
    dataStream: [_0x53a98a, _0xa7b598.dataStream, _0x15e6a9].join(""),
    paragraphs: [
      ...ii(0, _0x53a98a, _0x2b63bb, _0x3328ff),
      ..._0xa7b598.paragraphs["map"]((_0x133637) => ({
        ..._0x133637,
        startIndex: _0x133637.startIndex + _0x141ee0,
      })),
      ...ai(_0x5d5187, _0x15e6a9, _0x2b63bb),
    ],
    sectionBreaks: _0xa7b598.sectionBreaks["map"]((_0x2382e8) => ({
      ..._0x2382e8,
      startIndex: _0x2382e8.startIndex + _0x141ee0,
    })),
    tables: [
      {
        startIndex: _0x141ee0,
        endIndex: _0x5d5187,
        tableId: _0xaa2de0.tableId,
      },
    ],
  };
}
function Kr(_0x3b3ac6, _0x4b0579, _0x29736e) {
  let _0x2ce0dc = new _0x4502e7();
  return (
    _0x4b0579 > 0 && _0x2ce0dc.retain(_0x4b0579),
    _0x2ce0dc.insert(_0x3b3ac6.dataStream["length"], _0x3b3ac6),
    _0x33f29e.getInstance().editOp(_0x2ce0dc.serialize(), _0x29736e)
  );
}
function qr() {
  return {
    dataStream: _0x597d36.SECTION_BREAK,
    paragraphs: [],
    sectionBreaks: [{ sectionId: _0x4c7466(new Set()), startIndex: 0 }],
    tables: [],
  };
}
function Jr(_0x10dc3a) {
  var _0x2f32d9;
  let _0xf8b334 = _0x10dc3a.dataStream["length"];
  return {
    ..._0x10dc3a,
    dataStream: _0x10dc3a.dataStream + _0x597d36.SECTION_BREAK,
    sectionBreaks: [
      ...(_0x10dc3a.sectionBreaks ?? []),
      {
        sectionId: _0x4c7466(
          new Set(
            (_0x2f32d9 = _0x10dc3a.sectionBreaks) == null
              ? undefined
              : _0x2f32d9.map((_0x194ed5) => _0x194ed5.sectionId),
          ),
        ),
        startIndex: _0xf8b334,
      },
    ],
  };
}
function Yr(_0x4cb748) {
  var _0x568518;
  let _0x3dd5d9 = Math.max(
      1,
      _0x4cb748.rows ??
        ((_0x568518 = _0x4cb748.values) == null
          ? undefined
          : _0x568518.length) ??
        1,
    ),
    _0x51fdb2 = 0;
  for (let _0x59054c of _0x4cb748.values ?? [])
    _0x51fdb2 = Math.max(_0x51fdb2, _0x59054c.length);
  let _0x1e42a4 = Math.max(1, _0x4cb748.columns ?? (_0x51fdb2 || 1));
  return Array.from({ length: _0x3dd5d9 }, (_0x27ac3a, _0x4fe73d) =>
    Array.from({ length: _0x1e42a4 }, (_0x3cb916, _0x3db107) => {
      var _0x3911ac;
      return (
        ((_0x3911ac = _0x4cb748.values) == null ||
        (_0x3911ac = _0x3911ac[_0x4fe73d]) == null
          ? undefined
          : _0x3911ac[_0x3db107]) ?? ""
      );
    }),
  );
}
function Xr(_0x479734, _0x517ece) {
  return typeof _0x517ece.offset == "number"
    ? Math.max(0, Math.min(_0x517ece.offset, _0x479734.dataStream["length"]))
    : _0x479734.dataStream["endsWith"](_0x597d36.SECTION_BREAK)
      ? _0x479734.dataStream["length"] - 1
      : _0x479734.dataStream["length"];
}
function Zr(_0x5ac6c5, _0xc77a3a) {
  if (
    Qr(_0x5ac6c5.tables, _0xc77a3a) ||
    $r(_0x5ac6c5.blockRanges, _0xc77a3a) ||
    ei(_0x5ac6c5.customBlocks, _0xc77a3a)
  )
    throw new Ur();
}
function Qr(_0x369eb7, _0x276a97) {
  return !!(
    _0x369eb7 != null &&
    _0x369eb7.some((_0x2c1a1d) => _0x480210(_0x381012(_0x2c1a1d), _0x276a97))
  );
}
function $r(_0x4b9fd0, _0x68ff00) {
  return !!(
    _0x4b9fd0 != null &&
    _0x4b9fd0.some((_0x434f81) => _0x480210(_0x5b5068(_0x434f81), _0x68ff00))
  );
}
function ei(_0xa067c0, _0x1e77ad) {
  return !!(
    _0xa067c0 != null &&
    _0xa067c0.some((_0x57af74) => _0x57af74.startIndex === _0x1e77ad)
  );
}
function ti(_0x301c2c, _0x6bf46b) {
  return (
    _0x6bf46b <= 0 ||
    _0x301c2c.dataStream[_0x6bf46b - 1] !== _0x597d36.PARAGRAPH
  );
}
function ni(_0x4ca6c4, _0x33031a) {
  return _0x4ca6c4.dataStream[_0x33031a] !== _0x597d36.PARAGRAPH;
}
function ri(_0x544963, _0x1b70f7) {
  var _0x242208;
  return (_0x242208 = _0x544963.paragraphs) == null
    ? undefined
    : _0x242208.find(
        (_0x1a26cc) =>
          _0x3d2f94(_0x544963, _0x1a26cc) < _0x1b70f7 &&
          _0x1b70f7 <= _0x1a26cc.startIndex,
      );
}
function ii(_0x216994, _0x1bd670, _0x5dc68c, _0x3399e0) {
  if (!_0x1bd670) return [];
  let _0x46a18b = { startIndex: _0x216994, paragraphId: _0x2794f4(_0x5dc68c) };
  return (
    _0x3399e0 != null &&
      _0x3399e0.bullet &&
      (_0x46a18b.bullet = _0x27aca5.deepClone(_0x3399e0.bullet)),
    _0x3399e0 != null &&
      _0x3399e0.paragraphStyle &&
      ((_0x46a18b.paragraphStyle = _0x27aca5.deepClone(
        _0x3399e0.paragraphStyle,
      )),
      delete _0x46a18b.paragraphStyle["borderBottom"],
      _0x3399e0.paragraphStyle["headingId"] &&
        (_0x46a18b.paragraphStyle["headingId"] = _0x145c7c(6))),
    [_0x46a18b]
  );
}
function ai(_0x5fec94, _0x447f61, _0x570b92) {
  return _0x447f61
    ? [{ startIndex: _0x5fec94, paragraphId: _0x2794f4(_0x570b92) }]
    : [];
}
function oi(_0x43a17b, _0x2f9e94, _0x59dca6) {
  let _0x43462b = _0x597d36.TABLE_START,
    _0x1904fc = [],
    _0x57f9be = [];
  return (
    _0x43a17b.forEach((_0x31a127) => {
      ((_0x43462b += _0x597d36.TABLE_ROW_START),
        _0x31a127.forEach((_0x4913ac) => {
          ((_0x43462b +=
            "" +
            _0x597d36.TABLE_CELL_START +
            _0x4913ac +
            _0x597d36.PARAGRAPH +
            _0x597d36.SECTION_BREAK +
            _0x597d36.TABLE_CELL_END),
            _0x1904fc.push({
              startIndex: _0x43462b.length - 3,
              paragraphId: _0x2794f4(_0x2f9e94),
            }),
            _0x57f9be.push({
              sectionId: _0x4c7466(_0x59dca6),
              startIndex: _0x43462b.length - 2,
            }));
        }),
        (_0x43462b += _0x597d36.TABLE_ROW_END));
    }),
    (_0x43462b += _0x597d36.TABLE_END),
    { dataStream: _0x43462b, paragraphs: _0x1904fc, sectionBreaks: _0x57f9be }
  );
}
function si(_0x5d93c4) {
  return new Set(
    (_0x5d93c4.paragraphs ?? []).map((_0x414e07) => _0x414e07.paragraphId),
  );
}
function ci(_0x371dee) {
  return new Set(
    (_0x371dee.sectionBreaks ?? []).map((_0x4e96af) => _0x4e96af.sectionId),
  );
}
function li(_0x1df31e, _0x1e4ddb, _0x54e31a) {
  let _0x3a2103 = pi(_0x1df31e, _0x54e31a);
  return {
    tableRows: Array.from({ length: _0x1e4ddb }, (_0x540414, _0x571ebd) =>
      ui(_0x1df31e, _0x571ebd, _0x54e31a),
    ),
    tableColumns: _0x3a2103.map((_0x262ec3) => fi(_0x262ec3)),
    tableId: _0x1df31e.tableId,
    align: _0xcd53c6.START,
    indent: { v: 0 },
    textWrap: _0x1535f4.NONE,
    position: {
      positionH: { relativeFrom: _0x374c11.PAGE, posOffset: 0 },
      positionV: { relativeFrom: _0x32e543.PAGE, posOffset: 0 },
    },
    dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
    size: {
      type: _0x212251.SPECIFIED,
      width: {
        v:
          _0x1df31e.width ??
          _0x3a2103.reduce((_0x46800e, _0x345d70) => _0x46800e + _0x345d70, 0),
      },
    },
    ...(_0x1df31e.cellMargin == null
      ? {}
      : { cellMargin: _0x27aca5.deepClone(_0x1df31e.cellMargin) }),
  };
}
function ui(_0x175337, _0x1075b3, _0x3e46fa) {
  var _0x1a63f3;
  return {
    tableCells: Array.from({ length: _0x3e46fa }, (_0x1c107e, _0x483d0f) =>
      di(_0x175337, _0x1075b3, _0x483d0f, _0x3e46fa),
    ),
    trHeight: {
      val: {
        v:
          ((_0x1a63f3 = _0x175337.rowHeights) == null
            ? undefined
            : _0x1a63f3[_0x1075b3]) ?? 30,
      },
      hRule: _0x51ca5c.AT_LEAST,
    },
    repeatHeaderRow:
      _0x1075b3 < (_0x175337.headerRowCount ?? 0)
        ? _0x572b43.TRUE
        : _0x572b43.FALSE,
  };
}
function di(_0x178ae2, _0x1ad61f, _0x11619f, _0x5c00f3) {
  let _0x3ef5ec = _0x178ae2.titleRow && _0x1ad61f === 0;
  return {
    ...(_0x178ae2.cellMargin == null
      ? { margin: _0x27aca5.deepClone(Ir) }
      : {}),
    ...(_0x3ef5ec && _0x11619f === 0 ? { columnSpan: _0x5c00f3 } : {}),
    ...(_0x3ef5ec && _0x11619f > 0 ? { rowSpan: 0, columnSpan: 0 } : {}),
  };
}
function fi(_0x899cb) {
  return { size: { type: _0x212251.SPECIFIED, width: { v: _0x899cb } } };
}
function pi(_0xfe2c39, _0x22893b) {
  let _0x33f2c9 = _0xfe2c39.width ? _0xfe2c39.width / _0x22893b : 100;
  return Array.from({ length: _0x22893b }, (_0x20ef78, _0x4eef7d) => {
    var _0x290d80;
    return (
      ((_0x290d80 = _0xfe2c39.columnWidths) == null
        ? undefined
        : _0x290d80[_0x4eef7d]) ?? _0x33f2c9
    );
  });
}
function mi(_0x2284d2) {
  if (
    _0x2284d2.titleRow != null ||
    _0x2284d2.headerRowCount != null ||
    _0x2284d2.columnTypes != null
  )
    return {
      ...(_0x2284d2.titleRow == null ? {} : { titleRow: _0x2284d2.titleRow }),
      ...(_0x2284d2.headerRowCount == null
        ? {}
        : { headerRowCount: _0x2284d2.headerRowCount }),
      ...(_0x2284d2.columnTypes == null
        ? {}
        : { columnTypes: _0x2284d2.columnTypes }),
    };
}
var J = class extends _0x3665ea {
  constructor(..._0x1629c9) {
    (super(..._0x1629c9),
      G(this, "_resources", new Map()),
      G(this, "_change$", new _0x5cb647()),
      G(this, "change$", this._change$["asObservable"]()));
  }
  getTableMetadata(_0x463f2, _0x44f5e5) {
    var _0x22e04c;
    let _0x4cc41c =
      (_0x22e04c = this._resources["get"](_0x463f2)) == null
        ? undefined
        : _0x22e04c.tables[_0x44f5e5];
    if (_0x4cc41c)
      return N({ tables: { [_0x44f5e5]: _0x4cc41c } }).tables[_0x44f5e5];
  }
  setHeaderRowCount(_0x1cb520, _0x54194c, _0x1e2aa8) {
    this._setResource(
      _0x1cb520,
      _0x54194c,
      tt(this._resources["get"](_0x1cb520), _0x54194c, _0x1e2aa8),
    );
  }
  setTitleRow(_0x47bfa6, _0xe634ef, _0x1ca032) {
    this._setResource(
      _0x47bfa6,
      _0xe634ef,
      nt(this._resources["get"](_0x47bfa6), _0xe634ef, _0x1ca032),
    );
  }
  setColumnType(_0x3d923f, _0x15fb1a, _0x173684, _0x3e523e) {
    this._setResource(
      _0x3d923f,
      _0x15fb1a,
      rt(this._resources["get"](_0x3d923f), _0x15fb1a, _0x173684, _0x3e523e),
    );
  }
  serialize(_0x922962) {
    return N(this._resources["get"](_0x922962));
  }
  deserialize(_0x2992c1, _0x3eda42) {
    (this._resources["set"](_0x2992c1, N(_0x3eda42)),
      this._change$["next"]({ unitId: _0x2992c1 }));
  }
  removeUnit(_0x5458d7) {
    (this._resources["delete"](_0x5458d7),
      this._change$["next"]({ unitId: _0x5458d7 }));
  }
  dispose() {
    (super.dispose(), this._resources["clear"](), this._change$["complete"]());
  }
  _setResource(_0x47eb55, _0x34d6bf, _0x4375b3) {
    (this._resources["set"](_0x47eb55, _0x4375b3),
      this._change$["next"]({ unitId: _0x47eb55, tableId: _0x34d6bf }));
  }
};
const hi = {
  id: "docs-table.command.insert-table",
  type: _0x499278.COMMAND,
  handler: (_0x37bc27, _0x1be5d5) => {
    let _0x7cadf3 = _0x37bc27.get(_0x4b52ad),
      _0x4078b0 = _0x37bc27.get(_0x1bfcad),
      _0x365e3a = _0x37bc27.get(J),
      _0x4383f2 =
        _0x1be5d5 != null && _0x1be5d5.unitId
          ? _0x7cadf3.getUnit(_0x1be5d5.unitId, _0xd44303.UNIVER_DOC)
          : _0x7cadf3.getCurrentUnitOfType(_0xd44303.UNIVER_DOC);
    if (!_0x4383f2) return false;
    let _0x37f953 = _0x4383f2.getSnapshot(),
      _0xa1447 =
        (_0x1be5d5 == null ? undefined : _0x1be5d5.tableId) ?? _0x145c7c(6),
      _0x26f3de = gi(_0x37bc27, _0x4383f2.getUnitId(), _0x1be5d5);
    if (!_0x26f3de) return false;
    let _0x345836;
    try {
      let _0x131c6d = z(_0x4383f2, _0x26f3de.segmentId);
      if (!_0x131c6d) return false;
      _0x345836 = Wr(
        {
          ..._0x1be5d5,
          ..._0x26f3de,
          documentData: _0x131c6d,
          metadata: _0x365e3a.serialize(_0x4383f2.getUnitId()),
          tableId: _0xa1447,
        },
        W(_0x37f953, _0x26f3de.segmentId),
      );
    } catch (_0x21d2cd) {
      if (_0x21d2cd instanceof Ur) return false;
      throw _0x21d2cd;
    }
    let _0x2f7c7d = z(_0x4383f2, _0x26f3de.segmentId);
    if (!_0x2f7c7d) return false;
    let _0x118953 = U(
      _0x4078b0,
      _0x4383f2.getUnitId(),
      _0x2f7c7d,
      _0x345836.actions,
      undefined,
      _0x345836.cursorOffset,
      hi.id,
    );
    return (
      _0x118953 &&
        _0x365e3a.deserialize(_0x4383f2.getUnitId(), _0x345836.nextMetadata),
      _0x118953
    );
  },
};
function gi(_0x224c05, _0x1b268c, _0x558923) {
  let {
    offset: _0xb8ba0d,
    position: _0x5df7dd,
    segmentId: _0xf1555a,
  } = _0x558923 ?? {};
  if (typeof _0xb8ba0d == "number") {
    let _0x27590c = _i(_0x224c05);
    return {
      offset: _0xb8ba0d,
      position: "offset",
      segmentId:
        _0xf1555a ?? (_0x27590c == null ? undefined : _0x27590c.segmentId),
    };
  }
  if (_0x5df7dd === "selection") {
    let _0x3f1a0c = _0x2c7fb3(_0x224c05, _0x1b268c),
      _0x3709a6 = _i(_0x224c05),
      _0x41e0f2 =
        _0x3709a6 != null && _0x3709a6.segmentId
          ? _0x3709a6
          : (_0x3f1a0c ?? _0x3709a6);
    if ((_0x41e0f2 == null ? undefined : _0x41e0f2.startOffset) != null)
      return {
        offset: _0x41e0f2.startOffset,
        position: "offset",
        segmentId: _0xf1555a ?? _0x41e0f2.segmentId,
      };
  }
  if (_0x5df7dd === "offset") {
    let _0x3caa57 = _0x2c7fb3(_0x224c05, _0x1b268c),
      _0x57a8a6 = _i(_0x224c05),
      _0x26f5ea = _0x3caa57 ?? _0x57a8a6;
    if ((_0x26f5ea == null ? undefined : _0x26f5ea.startOffset) != null)
      return {
        offset: _0x26f5ea.startOffset,
        position: "offset",
        segmentId: _0xf1555a ?? _0x26f5ea.segmentId,
      };
  }
  return { position: "documentEnd", segmentId: _0xf1555a };
}
function _i(_0x54c0b3) {
  try {
    var _0xca7bc, _0x19b2f0;
    let _0x4efb63 =
      (_0xca7bc = (_0x19b2f0 = _0x54c0b3.get(_0x10d55c)).getActiveTextRange) ==
      null
        ? undefined
        : _0xca7bc.call(_0x19b2f0);
    return _0x4efb63
      ? { startOffset: _0x4efb63.startOffset, segmentId: _0x4efb63.segmentId }
      : null;
  } catch {
    return null;
  }
}
const vi = {
    id: "docs-table.command.insert-title-row",
    type: _0x499278.COMMAND,
    handler: async (_0x35b683, _0x2b1908) => {
      let _0x1025ce = _0x35b683.get(_0x4b52ad),
        _0x486e78 = _0x35b683.get(_0x1bfcad),
        _0x13e372 = _0x35b683.get(q),
        _0x302361 = _0x35b683.get(J),
        _0x57476e = _0x1025ce.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x586a36 = _0x13e372.getCurrentSelection(),
        _0x3b4298 =
          (_0x2b1908 == null ? undefined : _0x2b1908.tableId) ??
          (_0x586a36 == null ? undefined : _0x586a36.tableId);
      if (!_0x57476e || !_0x3b4298) return false;
      let _0xa388ff = _0x57476e.getSnapshot(),
        _0x3d1b16 = L(_0x2b1908, _0x586a36),
        _0x5a79a2 = z(_0x57476e, _0x3d1b16);
      if (!_0x5a79a2) return false;
      let _0x211b15 = Zn(_0x5a79a2, _0x3b4298, W(_0xa388ff, _0x3d1b16));
      if (!_0x211b15) return false;
      let _0x154ed4 = U(
        _0x486e78,
        _0x57476e.getUnitId(),
        _0x5a79a2,
        _0x211b15.actions,
      );
      return (
        _0x154ed4 &&
          _0x302361.setTitleRow(_0x57476e.getUnitId(), _0x3b4298, true),
        _0x154ed4
      );
    },
  },
  yi = {
    id: "docs-table.command.merge-cells",
    type: _0x499278.COMMAND,
    handler: async (_0x12d8a2, _0x3551e5) => {
      let _0x5bb5ec = _0x12d8a2.get(_0x4b52ad),
        _0x3613d5 = _0x12d8a2.get(_0x1bfcad),
        _0x3db9d0 = _0x12d8a2.get(q),
        _0x16eafb = _0x5bb5ec.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x4dba24 = _0x3db9d0.getStableTableSelection(),
        _0xa0836 =
          (_0x3551e5 == null ? undefined : _0x3551e5.tableId) ??
          (_0x4dba24 == null ? undefined : _0x4dba24.tableId),
        _0x1225fd = R(_0x3551e5, _0x4dba24);
      if (!_0x16eafb || !_0xa0836 || !_0x1225fd) return false;
      let _0x1b97a3 = L(_0x3551e5, _0x4dba24),
        _0x6cdf64 = z(_0x16eafb, _0x1b97a3);
      if (!_0x6cdf64 || !je(_0x6cdf64, _0xa0836, _0x1225fd)) return false;
      let _0x4a41e8 = Pe({
        documentData: _0x6cdf64,
        tableId: _0xa0836,
        ..._0x1225fd,
      });
      if (!_0x4a41e8) return false;
      let _0xbe3249 = U(
        _0x3613d5,
        _0x16eafb.getUnitId(),
        _0x6cdf64,
        _0x4a41e8.actions,
        { tableId: _0xa0836, segmentId: _0x1b97a3, ..._0x4a41e8.range },
      );
      return (
        _0xbe3249 &&
          _0x3db9d0.setStructuralSelection({
            kind: "cell",
            tableId: _0xa0836,
            segmentId: _0x1b97a3,
            ..._0x4a41e8.range,
          }),
        _0xbe3249
      );
    },
  },
  bi = {
    id: "docs-table.command.move-columns",
    type: _0x499278.COMMAND,
    handler: async (_0x4c83b4, _0x156336) => {
      if (!_0x156336) return false;
      let _0x3aa8d9 = _0x4c83b4.get(_0x4b52ad),
        _0x537a4f = _0x4c83b4.get(_0x1bfcad),
        _0x4725ab = _0x4c83b4.get(q),
        _0x3cb72c = _0x3aa8d9.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0xc3fde4 = _0x4725ab.getCurrentSelection(),
        _0x3ee6b2 =
          _0x156336.tableId ??
          (_0xc3fde4 == null ? undefined : _0xc3fde4.tableId),
        _0x295072 =
          _0x156336.fromColumn ??
          (_0xc3fde4 == null ? undefined : _0xc3fde4.startColumn);
      if (!_0x3cb72c || _0x3ee6b2 == null || _0x295072 == null) return false;
      let _0x56ac5c = _0x3cb72c.getSnapshot(),
        _0x45a657 = L(_0x156336, _0xc3fde4),
        _0x34db0a = z(_0x3cb72c, _0x45a657);
      if (!_0x34db0a) return false;
      let _0x3563c8 =
          _0x156336.count ??
          (_0xc3fde4
            ? Math.max(1, _0xc3fde4.endColumn - _0xc3fde4.startColumn + 1)
            : 1),
        _0x298981 = Vn(
          _0x34db0a,
          _0x3ee6b2,
          _0x295072,
          _0x156336.toColumn,
          _0x3563c8,
          _0x156336.position,
          W(_0x56ac5c, _0x45a657),
        );
      if (!_0x298981) return false;
      let _0x373dd8 = U(
        _0x537a4f,
        _0x3cb72c.getUnitId(),
        _0x34db0a,
        _0x298981.actions,
      );
      return (
        _0x373dd8 &&
          _0xc3fde4 &&
          _0x4725ab.setStructuralSelection({
            ..._0xc3fde4,
            tableId: _0x3ee6b2,
            startColumn: _0x298981.cursorColumn,
            endColumn: _0x298981.cursorColumn + _0x3563c8 - 1,
          }),
        _0x373dd8
      );
    },
  },
  xi = {
    id: "docs-table.command.move-rows",
    type: _0x499278.COMMAND,
    handler: async (_0x51536a, _0x25dc1a) => {
      if (!_0x25dc1a) return false;
      let _0x162b89 = _0x51536a.get(_0x4b52ad),
        _0x4952c7 = _0x51536a.get(_0x1bfcad),
        _0x1d170c = _0x51536a.get(q),
        _0x14ba6f = _0x162b89.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x5254da = _0x1d170c.getCurrentSelection(),
        _0x25e6f8 =
          _0x25dc1a.tableId ??
          (_0x5254da == null ? undefined : _0x5254da.tableId),
        _0x1b3841 =
          _0x25dc1a.fromRow ??
          (_0x5254da == null ? undefined : _0x5254da.startRow);
      if (!_0x14ba6f || _0x25e6f8 == null || _0x1b3841 == null) return false;
      let _0x429956 = _0x14ba6f.getSnapshot(),
        _0xdb99d2 = L(_0x25dc1a, _0x5254da),
        _0x25f047 = z(_0x14ba6f, _0xdb99d2);
      if (!_0x25f047) return false;
      let _0x4a5fbd =
          _0x25dc1a.count ??
          (_0x5254da
            ? Math.max(1, _0x5254da.endRow - _0x5254da.startRow + 1)
            : 1),
        _0x1f488d = Bn(
          _0x25f047,
          _0x25e6f8,
          _0x1b3841,
          _0x25dc1a.toRow,
          _0x4a5fbd,
          _0x25dc1a.position,
          W(_0x429956, _0xdb99d2),
        );
      if (!_0x1f488d) return false;
      let _0x3c2aac = U(
        _0x4952c7,
        _0x14ba6f.getUnitId(),
        _0x25f047,
        _0x1f488d.actions,
      );
      return (
        _0x3c2aac &&
          _0x5254da &&
          _0x1d170c.setStructuralSelection({
            ..._0x5254da,
            tableId: _0x25e6f8,
            startRow: _0x1f488d.cursorRow,
            endRow: _0x1f488d.cursorRow + _0x4a5fbd - 1,
          }),
        _0x3c2aac
      );
    },
  },
  Si = {
    id: "docs-table.command.move-table",
    type: _0x499278.COMMAND,
    handler: async (_0x3d04f4, _0x5a4f7a) => {
      if (!_0x5a4f7a) return false;
      let _0xca0679 = _0x3d04f4.get(_0x4b52ad),
        _0x11d11b = _0x3d04f4.get(_0x1bfcad),
        _0x9bd6bc = _0x3d04f4.get(q),
        _0x16b293 = _0xca0679.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x2b509a = _0x9bd6bc.getCurrentSelection(),
        _0xa53942 =
          _0x5a4f7a.tableId ??
          (_0x2b509a == null ? undefined : _0x2b509a.tableId);
      if (!_0x16b293 || !_0xa53942) return false;
      let _0x543db2 = _0x16b293.getSnapshot(),
        _0x2118be = L(_0x5a4f7a, _0x2b509a),
        _0x566614 = z(_0x16b293, _0x2118be);
      if (!_0x566614) return false;
      if (_0x5a4f7a.targetOffset == null) {
        let _0x3ec03a = Dn(
          _0x566614,
          _0xa53942,
          _0x5a4f7a.deltaX ?? 0,
          _0x5a4f7a.deltaY ?? 0,
        );
        return U(_0x11d11b, _0x16b293.getUnitId(), _0x566614, _0x3ec03a);
      }
      let _0x4cf36f = On(
        _0x566614,
        _0xa53942,
        _0x5a4f7a.targetOffset,
        W(_0x543db2, _0x2118be),
      );
      return U(_0x11d11b, _0x16b293.getUnitId(), _0x566614, _0x4cf36f);
    },
  },
  Ci = {
    id: "docs-table.command.resize-column",
    type: _0x499278.COMMAND,
    handler: async (_0x2b34e1, _0x383091) => {
      var _0x231c76;
      if (!_0x383091) return false;
      let _0x565874 = _0x2b34e1.get(_0x4b52ad),
        _0xc70cff = _0x2b34e1.get(_0x1bfcad),
        _0x2429b6 = _0x2b34e1.get(q),
        _0x4e3d78 = _0x565874.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x4e9e98 = _0x2429b6.getCurrentSelection(),
        _0x3fe513 =
          _0x383091.tableId ??
          (_0x4e9e98 == null ? undefined : _0x4e9e98.tableId),
        _0x33458d =
          _0x383091.column ??
          (_0x4e9e98 == null ? undefined : _0x4e9e98.startColumn);
      if (!_0x4e3d78 || _0x3fe513 == null || _0x33458d == null) return false;
      let _0x333761 = z(_0x4e3d78, L(_0x383091, _0x4e9e98));
      return !_0x333761 ||
        !(
          (_0x231c76 = _0x333761.tableSource) != null &&
          (_0x231c76 = _0x231c76[_0x3fe513]) != null &&
          _0x231c76.tableColumns[_0x33458d]
        )
        ? false
        : U(
            _0xc70cff,
            _0x4e3d78.getUnitId(),
            _0x333761,
            En(_0x333761, _0x3fe513, _0x33458d, _0x383091.width),
          );
    },
  },
  wi = {
    id: "docs-table.command.resize-row",
    type: _0x499278.COMMAND,
    handler: async (_0x4891c4, _0x5a7514) => {
      var _0x108481;
      if (!_0x5a7514) return false;
      let _0x12541c = _0x4891c4.get(_0x4b52ad),
        _0x444437 = _0x4891c4.get(_0x1bfcad),
        _0x3caa40 = _0x4891c4.get(q),
        _0x22ed1a = _0x12541c.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x38a953 = _0x3caa40.getCurrentSelection(),
        _0x4288c7 =
          _0x5a7514.tableId ??
          (_0x38a953 == null ? undefined : _0x38a953.tableId),
        _0x3c23c2 =
          _0x5a7514.row ?? (_0x38a953 == null ? undefined : _0x38a953.startRow);
      if (!_0x22ed1a || _0x4288c7 == null || _0x3c23c2 == null) return false;
      let _0x491cc6 = z(_0x22ed1a, L(_0x5a7514, _0x38a953));
      return !_0x491cc6 ||
        !(
          (_0x108481 = _0x491cc6.tableSource) != null &&
          (_0x108481 = _0x108481[_0x4288c7]) != null &&
          _0x108481.tableRows[_0x3c23c2]
        )
        ? false
        : U(
            _0x444437,
            _0x22ed1a.getUnitId(),
            _0x491cc6,
            An(
              _0x491cc6,
              _0x4288c7,
              _0x3c23c2,
              _0x5a7514.height,
              _0x5a7514.hRule,
            ),
          );
    },
  },
  Ti = {
    id: "docs-table.command.set-column-type",
    type: _0x499278.COMMAND,
    handler: async (_0x3f9478, _0x31ad18) => {
      if (!_0x31ad18) return false;
      let _0x1d2d39 = _0x3f9478.get(_0x4b52ad),
        _0x4db71b = _0x3f9478.get(q),
        _0x16d609 = _0x3f9478.get(J),
        _0x3c1b38 = _0x1d2d39.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x106822 = _0x4db71b.getCurrentSelection(),
        _0x47a5cf =
          _0x31ad18.tableId ??
          (_0x106822 == null ? undefined : _0x106822.tableId),
        _0x505339 =
          _0x31ad18.column ??
          (_0x106822 == null ? undefined : _0x106822.startColumn);
      return !_0x3c1b38 || !_0x47a5cf || _0x505339 == null
        ? false
        : (_0x16d609.setColumnType(
            _0x3c1b38.getUnitId(),
            _0x47a5cf,
            _0x505339,
            _0x31ad18.config,
          ),
          true);
    },
  },
  Ei = {
    id: "docs-table.command.set-header-row-count",
    type: _0x499278.COMMAND,
    handler: async (_0x42f186, _0x964719) => {
      let _0x2bf96f = _0x42f186.get(_0x4b52ad),
        _0x73cfda = _0x42f186.get(_0x1bfcad),
        _0x5c9a09 = _0x42f186.get(q),
        _0x3d15cf = _0x42f186.get(J),
        _0x1fcba6 = _0x2bf96f.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x2c80d0 = _0x5c9a09.getCurrentSelection();
      if (!_0x1fcba6) return false;
      let _0x266b38 =
          (_0x964719 == null ? undefined : _0x964719.tableId) ??
          (_0x2c80d0 == null ? undefined : _0x2c80d0.tableId),
        _0x4c1c6d =
          (_0x964719 == null ? undefined : _0x964719.row) ??
          (_0x2c80d0 == null ? undefined : _0x2c80d0.endRow);
      if (
        _0x266b38 == null ||
        ((_0x964719 == null ? undefined : _0x964719.headerRowCount) == null &&
          _0x4c1c6d == null)
      )
        return false;
      let _0x213e3f =
          (_0x964719 == null ? undefined : _0x964719.headerRowCount) ??
          _0x4c1c6d + 1,
        _0x474711 = z(_0x1fcba6, L(_0x964719, _0x2c80d0));
      if (!_0x474711) return false;
      let _0x33c22b = Nn(_0x474711, _0x266b38, _0x213e3f);
      if (!_0x33c22b) return false;
      let _0x2d9c4e = U(
        _0x73cfda,
        _0x1fcba6.getUnitId(),
        _0x474711,
        _0x33c22b.actions,
      );
      return (
        _0x2d9c4e &&
          _0x3d15cf.setHeaderRowCount(
            _0x1fcba6.getUnitId(),
            _0x266b38,
            _0x33c22b.headerRowCount,
          ),
        _0x2d9c4e
      );
    },
  },
  Di = {
    id: "docs-table.command.set-table-background",
    type: _0x499278.COMMAND,
    handler: async (_0x37d697, _0x9e39b4) => {
      let _0x22e490 =
        (_0x9e39b4 == null ? undefined : _0x9e39b4.color) ??
        (_0x9e39b4 == null ? undefined : _0x9e39b4.value);
      if (_0x22e490 === undefined) return false;
      let _0x3dd962 = _0x37d697.get(_0x4b52ad),
        _0x3391e2 = _0x37d697.get(_0x1bfcad),
        _0x263e23 = _0x37d697.get(q),
        _0x5e865c = _0x3dd962.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x49e498 = Oi(_0x263e23),
        _0x4564a9 =
          (_0x9e39b4 == null ? undefined : _0x9e39b4.tableId) ??
          (_0x49e498 == null ? undefined : _0x49e498.tableId),
        _0x47baf4 = R(_0x9e39b4, _0x49e498);
      if (!_0x5e865c || !_0x4564a9 || !_0x47baf4) return false;
      let _0x12ba32 = L(_0x9e39b4, _0x49e498),
        _0x224a5f = z(_0x5e865c, _0x12ba32);
      if (!_0x224a5f || !Ai(_0x224a5f, _0x4564a9, _0x47baf4)) return false;
      let _0x8a4f23 = ki(_0x224a5f, {
          tableId: _0x4564a9,
          ..._0x47baf4,
          value: _0x22e490,
        }),
        _0x284ccb = U(_0x3391e2, _0x5e865c.getUnitId(), _0x224a5f, _0x8a4f23, {
          tableId: _0x4564a9,
          segmentId: _0x12ba32,
          ..._0x47baf4,
        });
      return (
        _0x284ccb &&
          _0x263e23.setStructuralSelection({
            kind: (_0x49e498 == null ? undefined : _0x49e498.kind) ?? "range",
            tableId: _0x4564a9,
            segmentId: _0x12ba32,
            ..._0x47baf4,
          }),
        _0x284ccb
      );
    },
  };
function Oi(_0x173558) {
  var _0x39d340;
  return (
    ((_0x39d340 = _0x173558.getStableTableSelection) == null
      ? undefined
      : _0x39d340.call(_0x173558)) ?? _0x173558.getCurrentSelection()
  );
}
function ki(_0x2dfc48, _0x48d547) {
  var _0x23add1;
  let _0x20b231 =
      (_0x23add1 = _0x2dfc48.tableSource) == null
        ? undefined
        : _0x23add1[_0x48d547.tableId],
    _0x46bc11 = R(_0x48d547);
  if (!_0x20b231 || !_0x46bc11) return null;
  let _0xebef61 = _0x33f29e.getInstance(),
    _0x34dc3f = [],
    _0x1808b6 = ji(_0x46bc11);
  for (
    let _0x1ec60c = _0x1808b6.startRow;
    _0x1ec60c <= _0x1808b6.endRow;
    _0x1ec60c++
  )
    for (
      let _0x569fc2 = _0x1808b6.startColumn;
      _0x569fc2 <= _0x1808b6.endColumn;
      _0x569fc2++
    ) {
      var _0xd8118f;
      let _0x2d9e9c =
        (_0xd8118f = _0x20b231.tableRows[_0x1ec60c]) == null
          ? undefined
          : _0xd8118f.tableCells[_0x569fc2];
      if (!_0x2d9e9c) return null;
      let _0x5a5016 = [
          "tableSource",
          _0x48d547.tableId,
          "tableRows",
          _0x1ec60c,
          "tableCells",
          _0x569fc2,
          "backgroundColor",
        ],
        _0x35c754 =
          _0x48d547.value == null ? undefined : { rgb: _0x48d547.value };
      JSON.stringify(_0x2d9e9c.backgroundColor) !== JSON.stringify(_0x35c754) &&
        (_0x2d9e9c.backgroundColor === undefined && _0x35c754 !== undefined
          ? _0x34dc3f.push(_0xebef61.insertOp([..._0x5a5016], _0x35c754))
          : _0x35c754 === undefined
            ? _0x34dc3f.push(
                _0xebef61.removeOp([..._0x5a5016], _0x2d9e9c.backgroundColor),
              )
            : _0x34dc3f.push(
                _0xebef61.replaceOp(
                  [..._0x5a5016],
                  _0x2d9e9c.backgroundColor,
                  _0x35c754,
                ),
              ));
    }
  return _0x34dc3f.reduce(
    (_0x2456b4, _0x1e3200) => _0x33f29e.compose(_0x2456b4, _0x1e3200),
    null,
  );
}
function Ai(_0x858de, _0x2d4248, _0x31d6e8) {
  var _0x1f0aef;
  let _0x11c9dc =
    (_0x1f0aef = _0x858de.tableSource) == null
      ? undefined
      : _0x1f0aef[_0x2d4248];
  if (!_0x11c9dc) return false;
  let _0x56079b = ji(_0x31d6e8);
  for (
    let _0x3e2f28 = _0x56079b.startRow;
    _0x3e2f28 <= _0x56079b.endRow;
    _0x3e2f28++
  )
    for (
      let _0x1b4f6f = _0x56079b.startColumn;
      _0x1b4f6f <= _0x56079b.endColumn;
      _0x1b4f6f++
    ) {
      var _0x41155f;
      if (!(
        (_0x41155f = _0x11c9dc.tableRows[_0x3e2f28]) != null &&
        _0x41155f.tableCells[_0x1b4f6f]
      ))
        return false;
    }
  return true;
}
function ji(_0x2613bc) {
  return {
    startRow: Math.min(_0x2613bc.startRow, _0x2613bc.endRow),
    endRow: Math.max(_0x2613bc.startRow, _0x2613bc.endRow),
    startColumn: Math.min(_0x2613bc.startColumn, _0x2613bc.endColumn),
    endColumn: Math.max(_0x2613bc.startColumn, _0x2613bc.endColumn),
  };
}
let Mi = (function (_0x24314f) {
  return (
    (_0x24314f.All = "all"),
    (_0x24314f.Inner = "inner"),
    (_0x24314f.Outer = "outer"),
    (_0x24314f.Top = "top"),
    (_0x24314f.Bottom = "bottom"),
    (_0x24314f.Left = "left"),
    (_0x24314f.Right = "right"),
    (_0x24314f.None = "none"),
    (_0x24314f.InnerHorizontal = "innerHorizontal"),
    (_0x24314f.InnerVertical = "innerVertical"),
    _0x24314f
  );
})({});
const Ni = { color: { rgb: "#1f1f1f" }, width: { v: 1 } },
  Y = { color: { rgb: "transparent" }, width: { v: 0 } };
function Pi(_0x3cca2a) {
  var _0x5ea3bd;
  let _0x25bfff = E(_0x3cca2a.documentData, {
      cloneBody: false,
      tableIds: [_0x3cca2a.tableId],
    }),
    _0x4233a3 =
      (_0x5ea3bd = _0x25bfff.tableSource) == null
        ? undefined
        : _0x5ea3bd[_0x3cca2a.tableId];
  if (!_0x4233a3)
    throw Error(
      "[DocsTable]:\x20Table\x20" + _0x3cca2a.tableId + " is not found.",
    );
  let _0x32be7e = Gi(_0x3cca2a),
    _0x183527 = _0x3cca2a.border ?? Ni;
  for (
    let _0x160cee = _0x32be7e.startRow;
    _0x160cee <= _0x32be7e.endRow;
    _0x160cee++
  )
    for (
      let _0x399553 = _0x32be7e.startColumn;
      _0x399553 <= _0x32be7e.endColumn;
      _0x399553++
    ) {
      var _0x4ad788;
      let _0x30fa88 =
        (_0x4ad788 = _0x4233a3.tableRows[_0x160cee]) == null
          ? undefined
          : _0x4ad788.tableCells[_0x399553];
      if (!_0x30fa88) throw Error("[DocsTable]: Cell range is out of bounds.");
      ((_0x30fa88.borderTop = Vi(_0x3cca2a.preset, _0x160cee, _0x32be7e)
        ? _0x183527
        : Y),
        (_0x30fa88.borderBottom = Hi(_0x3cca2a.preset, _0x160cee, _0x32be7e)
          ? _0x183527
          : Y),
        (_0x30fa88.borderLeft = Ui(_0x3cca2a.preset, _0x399553, _0x32be7e)
          ? _0x183527
          : Y),
        (_0x30fa88.borderRight = Wi(_0x3cca2a.preset, _0x399553, _0x32be7e)
          ? _0x183527
          : Y));
    }
  return (
    qi(_0x4233a3, _0x32be7e, {
      top: Vi(_0x3cca2a.preset, _0x32be7e.startRow, _0x32be7e) ? _0x183527 : Y,
      left: Ui(_0x3cca2a.preset, _0x32be7e.startColumn, _0x32be7e)
        ? _0x183527
        : Y,
    }),
    { nextDocumentData: _0x25bfff }
  );
}
function Fi(_0x12ba36) {
  var _0x1fc1af;
  let _0x16eb55 =
    (_0x1fc1af = _0x12ba36.documentData["tableSource"]) == null
      ? undefined
      : _0x1fc1af[_0x12ba36.tableId];
  if (!_0x16eb55)
    throw Error(
      "[DocsTable]:\x20Table\x20" + _0x12ba36.tableId + " is not found.",
    );
  let _0x11a592 = Gi(_0x12ba36),
    _0xb17955 = _0x12ba36.border ?? Ni,
    _0x324a22 = [];
  for (
    let _0x54cc61 = _0x11a592.startRow;
    _0x54cc61 <= _0x11a592.endRow;
    _0x54cc61++
  )
    for (
      let _0x2f8caf = _0x11a592.startColumn;
      _0x2f8caf <= _0x11a592.endColumn;
      _0x2f8caf++
    ) {
      var _0x2cf216;
      let _0x4a2785 =
        (_0x2cf216 = _0x16eb55.tableRows[_0x54cc61]) == null
          ? undefined
          : _0x2cf216.tableCells[_0x2f8caf];
      if (!_0x4a2785) throw Error("[DocsTable]: Cell range is out of bounds.");
      (Z(
        _0x324a22,
        X(_0x12ba36.tableId, _0x54cc61, _0x2f8caf, "borderTop"),
        _0x4a2785.borderTop,
        Vi(_0x12ba36.preset, _0x54cc61, _0x11a592) ? _0xb17955 : Y,
      ),
        Z(
          _0x324a22,
          X(_0x12ba36.tableId, _0x54cc61, _0x2f8caf, "borderBottom"),
          _0x4a2785.borderBottom,
          Hi(_0x12ba36.preset, _0x54cc61, _0x11a592) ? _0xb17955 : Y,
        ),
        Z(
          _0x324a22,
          X(_0x12ba36.tableId, _0x54cc61, _0x2f8caf, "borderLeft"),
          _0x4a2785.borderLeft,
          Ui(_0x12ba36.preset, _0x2f8caf, _0x11a592) ? _0xb17955 : Y,
        ),
        Z(
          _0x324a22,
          X(_0x12ba36.tableId, _0x54cc61, _0x2f8caf, "borderRight"),
          _0x4a2785.borderRight,
          Wi(_0x12ba36.preset, _0x2f8caf, _0x11a592) ? _0xb17955 : Y,
        ));
    }
  return (
    Ri(_0x324a22, _0x16eb55, _0x12ba36.tableId, _0x11a592, {
      top: Vi(_0x12ba36.preset, _0x11a592.startRow, _0x11a592) ? _0xb17955 : Y,
      left: Ui(_0x12ba36.preset, _0x11a592.startColumn, _0x11a592)
        ? _0xb17955
        : Y,
    }),
    zi(_0x324a22)
  );
}
function Ii(_0x258128) {
  var _0x506eaa;
  let _0x2777ca = E(_0x258128.documentData, {
      cloneBody: false,
      tableIds: [_0x258128.tableId],
    }),
    _0x15e0cc =
      (_0x506eaa = _0x2777ca.tableSource) == null
        ? undefined
        : _0x506eaa[_0x258128.tableId];
  if (!_0x15e0cc)
    throw Error("[DocsTable]: Table " + _0x258128.tableId + " is not found.");
  return (
    Ki(_0x258128, (_0x52f87a, _0x48ac29) => {
      var _0x29cc8e;
      let _0x92f54e =
        (_0x29cc8e = _0x15e0cc.tableRows[_0x52f87a]) == null
          ? undefined
          : _0x29cc8e.tableCells[_0x48ac29];
      if (!_0x92f54e) throw Error("[DocsTable]: Cell range is out of bounds.");
      if (_0x258128.color == null) {
        delete _0x92f54e.backgroundColor;
        return;
      }
      _0x92f54e.backgroundColor = { rgb: _0x258128.color };
    }),
    { nextDocumentData: _0x2777ca }
  );
}
function Li(_0x5224b3) {
  var _0x4fdb4d;
  let _0x42b096 =
    (_0x4fdb4d = _0x5224b3.documentData["tableSource"]) == null
      ? undefined
      : _0x4fdb4d[_0x5224b3.tableId];
  if (!_0x42b096)
    throw Error("[DocsTable]: Table " + _0x5224b3.tableId + " is not found.");
  let _0x3ef902 = [];
  return (
    Ki(_0x5224b3, (_0x4aa52b, _0x4e6315) => {
      var _0x4385e6;
      let _0xeef1e0 =
        (_0x4385e6 = _0x42b096.tableRows[_0x4aa52b]) == null
          ? undefined
          : _0x4385e6.tableCells[_0x4e6315];
      if (!_0xeef1e0) throw Error("[DocsTable]: Cell range is out of bounds.");
      (Z(
        _0x3ef902,
        X(_0x5224b3.tableId, _0x4aa52b, _0x4e6315, "borderTop"),
        _0xeef1e0.borderTop,
        Q(_0xeef1e0.borderTop, _0x5224b3.border),
      ),
        Z(
          _0x3ef902,
          X(_0x5224b3.tableId, _0x4aa52b, _0x4e6315, "borderBottom"),
          _0xeef1e0.borderBottom,
          Q(_0xeef1e0.borderBottom, _0x5224b3.border),
        ),
        Z(
          _0x3ef902,
          X(_0x5224b3.tableId, _0x4aa52b, _0x4e6315, "borderLeft"),
          _0xeef1e0.borderLeft,
          Q(_0xeef1e0.borderLeft, _0x5224b3.border),
        ),
        Z(
          _0x3ef902,
          X(_0x5224b3.tableId, _0x4aa52b, _0x4e6315, "borderRight"),
          _0xeef1e0.borderRight,
          Q(_0xeef1e0.borderRight, _0x5224b3.border),
        ));
    }),
    Ri(_0x3ef902, _0x42b096, _0x5224b3.tableId, Gi(_0x5224b3), {
      top: _0x5224b3.border,
      left: _0x5224b3.border,
      merge: true,
    }),
    zi(_0x3ef902)
  );
}
function Ri(_0x19f719, _0x53b67f, _0x385205, _0x131fc9, _0x24fe7c) {
  if (_0x131fc9.startRow > 0) {
    let _0x52d5a7 = _0x53b67f.tableRows[_0x131fc9.startRow - 1];
    for (
      let _0x5aea3e = _0x131fc9.startColumn;
      _0x5aea3e <= _0x131fc9.endColumn;
      _0x5aea3e++
    ) {
      let _0x2b54b4 =
        _0x52d5a7 == null ? undefined : _0x52d5a7.tableCells[_0x5aea3e];
      if (!_0x2b54b4) throw Error("[DocsTable]: Cell range is out of bounds.");
      Z(
        _0x19f719,
        X(_0x385205, _0x131fc9.startRow - 1, _0x5aea3e, "borderBottom"),
        _0x2b54b4.borderBottom,
        _0x24fe7c.merge
          ? Q(_0x2b54b4.borderBottom, _0x24fe7c.top)
          : _0x24fe7c.top,
      );
    }
  }
  if (_0x131fc9.startColumn > 0)
    for (
      let _0x5dcd4d = _0x131fc9.startRow;
      _0x5dcd4d <= _0x131fc9.endRow;
      _0x5dcd4d++
    ) {
      var _0x7d4f5c;
      let _0x58d948 =
        (_0x7d4f5c = _0x53b67f.tableRows[_0x5dcd4d]) == null
          ? undefined
          : _0x7d4f5c.tableCells[_0x131fc9.startColumn - 1];
      if (!_0x58d948) throw Error("[DocsTable]: Cell range is out of bounds.");
      Z(
        _0x19f719,
        X(_0x385205, _0x5dcd4d, _0x131fc9.startColumn - 1, "borderRight"),
        _0x58d948.borderRight,
        _0x24fe7c.merge
          ? Q(_0x58d948.borderRight, _0x24fe7c.left)
          : _0x24fe7c.left,
      );
    }
}
function X(_0xcad62b, _0x2a4e5b, _0x44d186, _0x4679ad) {
  return [
    "tableSource",
    _0xcad62b,
    "tableRows",
    _0x2a4e5b,
    "tableCells",
    _0x44d186,
    _0x4679ad,
  ];
}
function Z(_0x36cfd7, _0x30b025, _0x3d70cb, _0xe4da23) {
  if (JSON.stringify(_0x3d70cb) === JSON.stringify(_0xe4da23)) return;
  let _0x2e2a11 = _0x33f29e.getInstance();
  if (_0x3d70cb === undefined) {
    _0x36cfd7.push(_0x2e2a11.insertOp(_0x30b025, Bi(_0xe4da23)));
    return;
  }
  if (_0xe4da23 === undefined) {
    _0x36cfd7.push(_0x2e2a11.removeOp(_0x30b025, _0x3d70cb));
    return;
  }
  _0x36cfd7.push(_0x2e2a11.replaceOp(_0x30b025, _0x3d70cb, Bi(_0xe4da23)));
}
function zi(_0x3291a9) {
  return _0x3291a9.reduce(
    (_0x4b1fc3, _0x144821) => _0x33f29e.compose(_0x4b1fc3, _0x144821),
    null,
  );
}
function Bi(_0x2d2c18) {
  return Array.isArray(_0x2d2c18)
    ? _0x2d2c18.map((_0x11779c) => Bi(_0x11779c))
    : !_0x2d2c18 || typeof _0x2d2c18 != "object"
      ? _0x2d2c18
      : Object.fromEntries(
          Object.entries(_0x2d2c18).map(([_0x3ac6ba, _0x266870]) => [
            _0x3ac6ba,
            Bi(_0x266870),
          ]),
        );
}
function Vi(_0x53e896, _0x39eb04, _0x15cd5f) {
  return (
    _0x53e896 === "all" ||
    _0x53e896 === "top" ||
    (_0x53e896 === "outer" && _0x39eb04 === _0x15cd5f.startRow) ||
    (_0x53e896 === "innerHorizontal" && _0x39eb04 > _0x15cd5f.startRow) ||
    (_0x53e896 === "inner" && _0x39eb04 > _0x15cd5f.startRow)
  );
}
function Hi(_0x25da2b, _0x5a0925, _0x59e9f5) {
  return (
    _0x25da2b === "all" ||
    _0x25da2b === "bottom" ||
    (_0x25da2b === "outer" && _0x5a0925 === _0x59e9f5.endRow)
  );
}
function Ui(_0x222307, _0x5e95ef, _0x41408a) {
  return (
    _0x222307 === "all" ||
    _0x222307 === "left" ||
    (_0x222307 === "outer" && _0x5e95ef === _0x41408a.startColumn) ||
    (_0x222307 === "innerVertical" && _0x5e95ef > _0x41408a.startColumn) ||
    (_0x222307 === "inner" && _0x5e95ef > _0x41408a.startColumn)
  );
}
function Wi(_0x1a7ee1, _0x36365d, _0x5d839d) {
  return (
    _0x1a7ee1 === "all" ||
    _0x1a7ee1 === "right" ||
    (_0x1a7ee1 === "outer" && _0x36365d === _0x5d839d.endColumn)
  );
}
function Gi(_0x43da8c) {
  return {
    startRow: Math.min(_0x43da8c.startRow, _0x43da8c.endRow),
    endRow: Math.max(_0x43da8c.startRow, _0x43da8c.endRow),
    startColumn: Math.min(_0x43da8c.startColumn, _0x43da8c.endColumn),
    endColumn: Math.max(_0x43da8c.startColumn, _0x43da8c.endColumn),
  };
}
function Ki(_0xdeaa85, _0x562c24) {
  let _0x2dad16 = Gi(_0xdeaa85);
  for (
    let _0x2e6233 = _0x2dad16.startRow;
    _0x2e6233 <= _0x2dad16.endRow;
    _0x2e6233++
  )
    for (
      let _0x3c34db = _0x2dad16.startColumn;
      _0x3c34db <= _0x2dad16.endColumn;
      _0x3c34db++
    )
      _0x562c24(_0x2e6233, _0x3c34db);
}
function Q(_0x11a495, _0x329854) {
  let _0x18b811 = {
    color: Object.prototype["hasOwnProperty"].call(_0x329854, "color")
      ? _0x329854.color
      : ((_0x11a495 == null ? undefined : _0x11a495.color) ?? Ni.color),
    width:
      _0x329854.width ??
      (_0x11a495 == null ? undefined : _0x11a495.width) ??
      Ni.width,
    dashStyle:
      _0x329854.dashStyle ??
      (_0x11a495 == null ? undefined : _0x11a495.dashStyle),
  };
  return (_0x329854.clearColor && delete _0x18b811.color, _0x18b811);
}
function qi(_0x43ab8a, _0x80dc1e, _0x4438e8) {
  if (_0x80dc1e.startRow > 0) {
    let _0x4f6f38 = _0x43ab8a.tableRows[_0x80dc1e.startRow - 1];
    for (
      let _0x7d8d86 = _0x80dc1e.startColumn;
      _0x7d8d86 <= _0x80dc1e.endColumn;
      _0x7d8d86++
    ) {
      let _0x1b93d9 =
        _0x4f6f38 == null ? undefined : _0x4f6f38.tableCells[_0x7d8d86];
      if (!_0x1b93d9) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x1b93d9.borderBottom = _0x4438e8.merge
        ? Q(_0x1b93d9.borderBottom, _0x4438e8.top)
        : _0x4438e8.top;
    }
  }
  if (_0x80dc1e.startColumn > 0)
    for (
      let _0x11c125 = _0x80dc1e.startRow;
      _0x11c125 <= _0x80dc1e.endRow;
      _0x11c125++
    ) {
      var _0x1d6f07;
      let _0x2f9df2 =
        (_0x1d6f07 = _0x43ab8a.tableRows[_0x11c125]) == null
          ? undefined
          : _0x1d6f07.tableCells[_0x80dc1e.startColumn - 1];
      if (!_0x2f9df2) throw Error("[DocsTable]: Cell range is out of bounds.");
      _0x2f9df2.borderRight = _0x4438e8.merge
        ? Q(_0x2f9df2.borderRight, _0x4438e8.left)
        : _0x4438e8.left;
    }
}
const Ji = {
  id: "docs-table.command.set-table-border-color",
  type: _0x499278.COMMAND,
  handler: async (_0x4474e7, _0x3343b5) => {
    let _0x379257 =
      (_0x3343b5 == null ? undefined : _0x3343b5.color) ??
      (_0x3343b5 == null ? undefined : _0x3343b5.value);
    return (
      _0x379257 !== undefined &&
      Yi(
        _0x4474e7,
        _0x3343b5,
        _0x379257 == null
          ? { clearColor: true }
          : { color: { rgb: _0x379257 } },
      )
    );
  },
};
async function Yi(_0x1a470c, _0x40bcf7, _0x336c61) {
  let _0x3776dd = _0x1a470c.get(_0x4b52ad),
    _0x2475b0 = _0x1a470c.get(_0x1bfcad),
    _0x290193 = _0x1a470c.get(q),
    _0x473363 = _0x3776dd.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
    _0x48ff5e = Oi(_0x290193),
    _0x392488 =
      (_0x40bcf7 == null ? undefined : _0x40bcf7.tableId) ??
      (_0x48ff5e == null ? undefined : _0x48ff5e.tableId),
    _0x20fbc1 = R(_0x40bcf7, _0x48ff5e);
  if (!_0x473363 || !_0x392488 || !_0x20fbc1) return false;
  let _0xc43642 = L(_0x40bcf7, _0x48ff5e),
    _0x482016 = z(_0x473363, _0xc43642);
  if (!_0x482016) return false;
  let _0x26b42d = Li({
      documentData: _0x482016,
      tableId: _0x392488,
      ..._0x20fbc1,
      border: _0x336c61,
    }),
    _0x27fb01 = U(_0x2475b0, _0x473363.getUnitId(), _0x482016, _0x26b42d, {
      tableId: _0x392488,
      segmentId: _0xc43642,
      ..._0x20fbc1,
    });
  return (
    _0x27fb01 &&
      _0x290193.setStructuralSelection({
        kind: (_0x48ff5e == null ? undefined : _0x48ff5e.kind) ?? "range",
        tableId: _0x392488,
        segmentId: _0xc43642,
        ..._0x20fbc1,
      }),
    _0x27fb01
  );
}
const Xi = {
  id: "docs-table.command.set-table-border-style",
  type: _0x499278.COMMAND,
  handler: async (_0x4764c8, _0x261928) => {
    let _0x5c356f =
      (_0x261928 == null ? undefined : _0x261928.dashStyle) ??
      (_0x261928 == null ? undefined : _0x261928.value);
    return (
      _0x5c356f != null &&
      Yi(_0x4764c8, _0x261928, { dashStyle: Zi(_0x5c356f) })
    );
  },
};
function Zi(_0x5c265a) {
  return typeof _0x5c265a == "number"
    ? _0x5c265a
    : _0x5c265a === "dot"
      ? _0x2b42bd.DOT
      : _0x5c265a === "dash"
        ? _0x2b42bd.DASH
        : _0x2b42bd.SOLID;
}
const Qi = {
    id: "docs-table.command.set-table-border-width",
    type: _0x499278.COMMAND,
    handler: async (_0x344d96, _0x1f1128) => {
      let _0x3d46a8 =
        (_0x1f1128 == null ? undefined : _0x1f1128.width) ??
        (_0x1f1128 == null ? undefined : _0x1f1128.value);
      return (
        _0x3d46a8 != null &&
        Yi(_0x344d96, _0x1f1128, { width: { v: _0x3d46a8 } })
      );
    },
  },
  $i = {
    id: "docs-table.command.set-table-border",
    type: _0x499278.COMMAND,
    handler: async (_0x1efc62, _0x56abb1) => {
      if (!_0x56abb1) return false;
      let _0x13ff0a = _0x1efc62.get(_0x4b52ad),
        _0xaacd22 = _0x1efc62.get(_0x1bfcad),
        _0x116ba2 = _0x1efc62.get(q),
        _0x1d7896 = _0x13ff0a.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x16480c = Oi(_0x116ba2),
        _0x2becfe =
          _0x56abb1.tableId ??
          (_0x16480c == null ? undefined : _0x16480c.tableId),
        _0x40d71b = R(_0x56abb1, _0x16480c);
      if (!_0x1d7896 || !_0x2becfe || !_0x40d71b) return false;
      let _0x1fa114 = L(_0x56abb1, _0x16480c),
        _0x5b6cc3 = z(_0x1d7896, _0x1fa114);
      if (!_0x5b6cc3) return false;
      let _0x1f53b9 = Fi({
          documentData: _0x5b6cc3,
          tableId: _0x2becfe,
          ..._0x40d71b,
          preset: _0x56abb1.preset,
          border: _0x56abb1.border,
        }),
        _0x667fa2 = U(_0xaacd22, _0x1d7896.getUnitId(), _0x5b6cc3, _0x1f53b9, {
          tableId: _0x2becfe,
          segmentId: _0x1fa114,
          ..._0x40d71b,
        });
      return (
        _0x667fa2 &&
          _0x116ba2.setStructuralSelection({
            kind: (_0x16480c == null ? undefined : _0x16480c.kind) ?? "range",
            tableId: _0x2becfe,
            segmentId: _0x1fa114,
            ..._0x40d71b,
          }),
        _0x667fa2
      );
    },
  },
  ea = {
    id: "docs-table.command.set-table-vertical-align",
    type: _0x499278.COMMAND,
    handler: async (_0x54656e, _0x1a860e) => {
      let _0x2e7f9d = _0x1a860e == null ? undefined : _0x1a860e.value;
      if (_0x2e7f9d == null) return false;
      let _0x1402d7 = _0x54656e.get(_0x4b52ad),
        _0x3fa9ae = _0x54656e.get(_0x1bfcad),
        _0x581a8d = _0x54656e.get(q),
        _0x5ad139 = _0x1402d7.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0xb4cd03 = ta(_0x581a8d),
        _0xdefc87 =
          (_0x1a860e == null ? undefined : _0x1a860e.tableId) ??
          (_0xb4cd03 == null ? undefined : _0xb4cd03.tableId),
        _0x2e338c = R(_0x1a860e, _0xb4cd03);
      if (!_0x5ad139 || !_0xdefc87 || !_0x2e338c) return false;
      let _0x5228c4 = L(_0x1a860e, _0xb4cd03),
        _0x39e7ec = z(_0x5ad139, _0x5228c4);
      if (!_0x39e7ec || !na(_0x39e7ec, _0xdefc87, _0x2e338c)) return false;
      let _0x18d7cb = ra(_0x39e7ec, {
          tableId: _0xdefc87,
          ..._0x2e338c,
          value: _0x2e7f9d,
        }),
        _0x3b8c2a = U(_0x3fa9ae, _0x5ad139.getUnitId(), _0x39e7ec, _0x18d7cb, {
          tableId: _0xdefc87,
          segmentId: _0x5228c4,
          ..._0x2e338c,
        });
      return (
        _0x3b8c2a &&
          _0x581a8d.setStructuralSelection({
            kind: (_0xb4cd03 == null ? undefined : _0xb4cd03.kind) ?? "range",
            tableId: _0xdefc87,
            segmentId: _0x5228c4,
            ..._0x2e338c,
          }),
        _0x3b8c2a
      );
    },
  };
function ta(_0x11bf49) {
  var _0x35b5e2;
  return (
    ((_0x35b5e2 = _0x11bf49.getStableTableSelection) == null
      ? undefined
      : _0x35b5e2.call(_0x11bf49)) ?? _0x11bf49.getCurrentSelection()
  );
}
function na(_0x5d003a, _0x373dc7, _0xb406dd) {
  var _0x428840;
  let _0x5473b3 =
    (_0x428840 = _0x5d003a.tableSource) == null
      ? undefined
      : _0x428840[_0x373dc7];
  if (!_0x5473b3) return false;
  let _0x4358c2 = ia(_0xb406dd);
  for (
    let _0x591b1e = _0x4358c2.startRow;
    _0x591b1e <= _0x4358c2.endRow;
    _0x591b1e++
  )
    for (
      let _0x465852 = _0x4358c2.startColumn;
      _0x465852 <= _0x4358c2.endColumn;
      _0x465852++
    ) {
      var _0x21dcf2;
      if (!(
        (_0x21dcf2 = _0x5473b3.tableRows[_0x591b1e]) != null &&
        _0x21dcf2.tableCells[_0x465852]
      ))
        return false;
    }
  return true;
}
function ra(_0x17ee8f, _0x53c53f) {
  var _0x2d3623;
  let _0x52132c =
    (_0x2d3623 = _0x17ee8f.tableSource) == null
      ? undefined
      : _0x2d3623[_0x53c53f.tableId];
  if (!_0x52132c) return null;
  let _0x2f1b71 = _0x33f29e.getInstance(),
    _0xf34798 = ia(_0x53c53f),
    _0x1b12b1 = [];
  for (
    let _0x14deed = _0xf34798.startRow;
    _0x14deed <= _0xf34798.endRow;
    _0x14deed++
  )
    for (
      let _0x1658c8 = _0xf34798.startColumn;
      _0x1658c8 <= _0xf34798.endColumn;
      _0x1658c8++
    ) {
      var _0x20fa61;
      let _0x42ddf3 =
        (_0x20fa61 = _0x52132c.tableRows[_0x14deed]) == null
          ? undefined
          : _0x20fa61.tableCells[_0x1658c8];
      if (!_0x42ddf3) return null;
      _0x42ddf3.vAlign !== _0x53c53f.value &&
        _0x1b12b1.push(
          _0x42ddf3.vAlign === undefined
            ? _0x2f1b71.insertOp(
                [
                  "tableSource",
                  _0x53c53f.tableId,
                  "tableRows",
                  _0x14deed,
                  "tableCells",
                  _0x1658c8,
                  "vAlign",
                ],
                _0x53c53f.value,
              )
            : _0x2f1b71.replaceOp(
                [
                  "tableSource",
                  _0x53c53f.tableId,
                  "tableRows",
                  _0x14deed,
                  "tableCells",
                  _0x1658c8,
                  "vAlign",
                ],
                _0x42ddf3.vAlign,
                _0x53c53f.value,
              ),
        );
    }
  return _0x1b12b1.reduce(
    (_0x4ff751, _0xa61c51) => _0x33f29e.compose(_0x4ff751, _0xa61c51),
    null,
  );
}
function ia(_0x11ae0c) {
  return {
    startRow: Math.min(_0x11ae0c.startRow, _0x11ae0c.endRow),
    endRow: Math.max(_0x11ae0c.startRow, _0x11ae0c.endRow),
    startColumn: Math.min(_0x11ae0c.startColumn, _0x11ae0c.endColumn),
    endColumn: Math.max(_0x11ae0c.startColumn, _0x11ae0c.endColumn),
  };
}
const aa = {
    id: "docs-table.command.sort-table",
    type: _0x499278.COMMAND,
    handler: async (_0x57f61d, _0x300d3b) => {
      if (!_0x300d3b) return false;
      let _0x32b2e5 = _0x57f61d.get(_0x4b52ad),
        _0xc74cf5 = _0x57f61d.get(_0x1bfcad),
        _0x479bc4 = _0x57f61d.get(q),
        _0x1a569e = _0x57f61d.get(J),
        _0x41d7f3 = _0x32b2e5.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x5b03cd = _0x479bc4.getCurrentSelection(),
        _0x4ddc53 =
          _0x300d3b.tableId ??
          (_0x5b03cd == null ? undefined : _0x5b03cd.tableId),
        _0x4b7a4a =
          _0x300d3b.column ??
          (_0x5b03cd == null ? undefined : _0x5b03cd.startColumn);
      if (!_0x41d7f3 || !_0x4ddc53 || _0x4b7a4a == null) return false;
      let _0x1a46ea = _0x41d7f3.getSnapshot(),
        _0x1b031c = L(_0x300d3b, _0x5b03cd),
        _0x35024b = z(_0x41d7f3, _0x1b031c);
      if (!_0x35024b) return false;
      let _0x5217ee = Hn(
        _0x35024b,
        _0x1a569e.serialize(_0x41d7f3.getUnitId()),
        _0x4ddc53,
        _0x4b7a4a,
        _0x300d3b.direction,
        W(_0x1a46ea, _0x1b031c),
      );
      return U(_0xc74cf5, _0x41d7f3.getUnitId(), _0x35024b, _0x5217ee);
    },
  },
  oa = {
    id: "docs-table.command.unmerge-cells",
    type: _0x499278.COMMAND,
    handler: async (_0x597e51, _0x140d49) => {
      let _0x184c05 = _0x597e51.get(_0x4b52ad),
        _0x498e0f = _0x597e51.get(_0x1bfcad),
        _0x580071 = _0x597e51.get(q),
        _0x3c8665 = _0x184c05.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x1121a1 = _0x580071.getStableTableSelection(),
        _0x42ee67 =
          (_0x140d49 == null ? undefined : _0x140d49.tableId) ??
          (_0x1121a1 == null ? undefined : _0x1121a1.tableId),
        _0x29e1ee = R(_0x140d49, _0x1121a1);
      if (!_0x3c8665 || !_0x42ee67 || !_0x29e1ee) return false;
      let _0x214c37 = L(_0x140d49, _0x1121a1),
        _0xc27443 = z(_0x3c8665, _0x214c37);
      if (!_0xc27443 || !Me(_0xc27443, _0x42ee67, _0x29e1ee)) return false;
      let _0x29e2a6 = Ie({
        documentData: _0xc27443,
        tableId: _0x42ee67,
        ..._0x29e1ee,
      });
      if (!_0x29e2a6) return false;
      let _0x578431 = U(
        _0x498e0f,
        _0x3c8665.getUnitId(),
        _0xc27443,
        _0x29e2a6.actions,
        { tableId: _0x42ee67, segmentId: _0x214c37, ..._0x29e2a6.range },
      );
      return (
        _0x578431 &&
          _0x580071.setStructuralSelection({
            kind: "range",
            tableId: _0x42ee67,
            segmentId: _0x214c37,
            ..._0x29e2a6.range,
          }),
        _0x578431
      );
    },
  };
function sa(_0x3e4084) {
  let _0x2d9408 = new DOMParser().parseFromString(_0x3e4084, "text/html");
  return Array.from(_0x2d9408.querySelectorAll("table")).map((_0x265d71) =>
    fa(_0x265d71),
  );
}
function ca(_0x2da5c8) {
  if (!_0x2da5c8.includes("\x09")) return null;
  let _0x2654a4 = _0x2da5c8.split(/\r\n|\r|\n/);
  return (
    _0x2654a4[_0x2654a4.length - 1] === "" && _0x2654a4.pop(),
    _0x2654a4.length === 0
      ? null
      : "<table><tbody>" +
        _0x2654a4
          .map(
            (_0x62e827) =>
              "<tr>" +
              _0x62e827
                .split("\x09")
                .map((_0x50c828) => "<td>" + Ca(_0x50c828) + "</td>")
                .join("") +
              "</tr>",
          )
          .join("") +
        "</tbody></table>"
  );
}
function la(_0x2611fa) {
  var _0x45b2c9;
  let _0x380ea6 = w(_0x2611fa.documentData, _0x2611fa.tableId),
    _0x509a93 =
      (_0x45b2c9 = _0x2611fa.documentData["body"]) == null
        ? undefined
        : _0x45b2c9.dataStream;
  if (!_0x380ea6 || !_0x509a93)
    throw Error(
      "[DocsTable]:\x20Table\x20" + _0x2611fa.tableId + " is not found.",
    );
  let _0x57d419 = pa(_0x2611fa),
    _0x89c256 = [];
  for (
    let _0x16ad10 = _0x57d419.startRow;
    _0x16ad10 <= _0x57d419.endRow;
    _0x16ad10++
  ) {
    let _0x315513 = [];
    for (
      let _0x3192ae = _0x57d419.startColumn;
      _0x3192ae <= _0x57d419.endColumn;
      _0x3192ae++
    ) {
      var _0x7cd04;
      let _0x19e6c2 =
        (_0x7cd04 = _0x380ea6.rows[_0x16ad10]) == null
          ? undefined
          : _0x7cd04.cells[_0x3192ae];
      _0x315513.push(
        _0x19e6c2
          ? ma(_0x509a93, _0x19e6c2.startOffset, _0x19e6c2.endOffset)
          : "",
      );
    }
    _0x89c256.push(_0x315513);
  }
  return _0x89c256.map((_0x27d0e4) => _0x27d0e4.join("\x09")).join("\x0a");
}
function ua(_0x38ca93, _0xc42b30 = ["body"]) {
  var _0x500db3;
  let _0x3901fe = w(_0x38ca93.documentData, _0x38ca93.tableId);
  if (
    !_0x3901fe ||
    !(
      (_0x500db3 = _0x38ca93.documentData["body"]) != null &&
      _0x500db3.dataStream
    )
  )
    throw Error("[DocsTable]: Table " + _0x38ca93.tableId + " is not found.");
  let _0x214eb5 = _0x38ca93.text["split"](/\r\n|\r|\n/).map((_0x181d3c) =>
      _0x181d3c.split("\x09"),
    ),
    _0x598b5d = [];
  for (let _0x42fd42 = 0; _0x42fd42 < _0x214eb5.length; _0x42fd42++)
    for (
      let _0x580a58 = 0;
      _0x580a58 < _0x214eb5[_0x42fd42].length;
      _0x580a58++
    ) {
      var _0x4ba936;
      let _0xf56c4c =
        (_0x4ba936 = _0x3901fe.rows[_0x38ca93.startRow + _0x42fd42]) == null
          ? undefined
          : _0x4ba936.cells[_0x38ca93.startColumn + _0x580a58];
      _0xf56c4c &&
        _0x598b5d.push({
          startOffset: _0xf56c4c.startOffset + 1,
          endOffset: _0xf56c4c.endOffset,
          text: _0x214eb5[_0x42fd42][_0x580a58] + "\x0d\x0a",
        });
    }
  return F(_0x38ca93.documentData, _0x598b5d, _0xc42b30);
}
function da(_0x1e289a) {
  let _0x40b154 = new DOMParser()
    .parseFromString(_0x1e289a, "text/html")
    .querySelector("table");
  return _0x40b154 ? fa(_0x40b154) : { rows: [], columnWidths: [] };
}
function fa(_0x49a9a8) {
  let _0x222bdd = Array.from(_0x49a9a8.querySelectorAll("col")).map(
      (_0x2b54dc) =>
        ga(
          _0x2b54dc.getAttribute("width"),
          _0x2b54dc.getAttribute("style"),
          "width",
        ),
    ),
    _0x4f6efd = [],
    _0x5a570f = new Map();
  Array.from(_0x49a9a8.querySelectorAll("tr")).forEach(
    (_0x501dca, _0x4c8560) => {
      let _0x4697c8 = {
          cells: [],
          height: ga(
            _0x501dca.getAttribute("height"),
            _0x501dca.getAttribute("style"),
            "height",
          ),
        },
        _0x1693b1 = 0;
      for (
        Array.from(_0x501dca.children)
          .filter(
            (_0x1cd673) =>
              _0x1cd673.tagName["toLowerCase"]() === "td" ||
              _0x1cd673.tagName["toLowerCase"]() === "th",
          )
          .forEach((_0x2e05a0) => {
            for (; _0x5a570f.has(_0x4c8560 + ":" + _0x1693b1);)
              ((_0x4697c8.cells[_0x1693b1] = null), _0x1693b1++);
            let _0x7d462e = Math.max(
                1,
                Number(_0x2e05a0.getAttribute("rowspan") ?? 1),
              ),
              _0x5a7a2b = Math.max(
                1,
                Number(_0x2e05a0.getAttribute("colspan") ?? 1),
              ),
              _0x2d6c35 = _0x2e05a0.getAttribute("style") ?? "";
            _0x4697c8.cells[_0x1693b1] = {
              html: _0x2e05a0.innerHTML,
              text: ha(_0x2e05a0.textContent ?? ""),
              rowSpan: _0x7d462e,
              colSpan: _0x5a7a2b,
              backgroundColor:
                _a(_0x2d6c35, "background-color") ??
                _a(_0x2d6c35, "background"),
              borderColor: ya(_0x2d6c35),
              borderWidth: ba(_0x2d6c35),
            };
            let _0xb4325e = ga(
              _0x2e05a0.getAttribute("width"),
              _0x2d6c35,
              "width",
            );
            _0xb4325e != null &&
              _0x222bdd[_0x1693b1] == null &&
              (_0x222bdd[_0x1693b1] = _0xb4325e);
            for (let _0x256097 = 0; _0x256097 < _0x7d462e; _0x256097++)
              for (let _0x5a3938 = 0; _0x5a3938 < _0x5a7a2b; _0x5a3938++)
                (_0x256097 !== 0 || _0x5a3938 !== 0) &&
                  _0x5a570f.set(
                    _0x4c8560 + _0x256097 + ":" + (_0x1693b1 + _0x5a3938),
                    true,
                  );
            for (let _0x27b2b1 = 1; _0x27b2b1 < _0x5a7a2b; _0x27b2b1++)
              _0x4697c8.cells[_0x1693b1 + _0x27b2b1] = null;
            _0x1693b1 += _0x5a7a2b;
          });
        _0x4697c8.cells["length"] < _0x222bdd.length;
      )
        _0x4697c8.cells["push"](null);
      _0x4f6efd.push(_0x4697c8);
    },
  );
  let _0x5f1fdc = Math.max(
    _0x222bdd.length,
    ..._0x4f6efd.map((_0x34ac00) => _0x34ac00.cells["length"]),
  );
  for (; _0x222bdd.length < _0x5f1fdc;) _0x222bdd.push(undefined);
  return (
    _0x4f6efd.forEach((_0x56663e) => {
      for (; _0x56663e.cells["length"] < _0x5f1fdc;)
        _0x56663e.cells["push"](null);
    }),
    { columnWidths: _0x222bdd, rows: _0x4f6efd }
  );
}
function pa(_0x4f152f) {
  return {
    startRow: Math.min(_0x4f152f.startRow, _0x4f152f.endRow),
    endRow: Math.max(_0x4f152f.startRow, _0x4f152f.endRow),
    startColumn: Math.min(_0x4f152f.startColumn, _0x4f152f.endColumn),
    endColumn: Math.max(_0x4f152f.startColumn, _0x4f152f.endColumn),
  };
}
function ma(_0x392333, _0x385745, _0x1becc6) {
  return _0x392333
    .slice(_0x385745 + 1, _0x1becc6)
    .replace(/\r/g, "\x0a")
    .replace(/[\x00-\x08\v\f\x0E-\x1F]/g, "")
    .replace(/\n+$/, "");
}
function ha(_0x1feae9) {
  return _0x1feae9
    .replace(/\u00A0/g, "\x20")
    .replace(/\s+/g, "\x20")
    .trim();
}
function ga(_0xd238fc, _0x56ad52, _0x2b1761) {
  let _0x1f3fef =
    _0x56ad52 == null
      ? undefined
      : _0x56ad52.match(
          RegExp(
            _0x2b1761 + "\x5cs*:\x5cs*([0-9.]+)\x5cs*(px|pt|in|cm|mm)?",
            "i",
          ),
        );
  if (_0x1f3fef) return xa(Number(_0x1f3fef[1]), _0x1f3fef[2]);
  if (!_0xd238fc) return;
  let _0x3cd29e = _0xd238fc.match(/([0-9.]+)\s*(px|pt|in|cm|mm)?/i);
  return _0x3cd29e ? xa(Number(_0x3cd29e[1]), _0x3cd29e[2]) : undefined;
}
function _a(_0x21c069, _0x3d929c) {
  var _0x3e8691;
  let _0x44c0a9 = _0x21c069.match(RegExp(_0x3d929c + "\\s*:\\s*([^;]+)", "i"));
  return _0x44c0a9 == null || (_0x3e8691 = _0x44c0a9[1]) == null
    ? undefined
    : _0x3e8691.trim();
}
function va(_0x2738bc) {
  var _0x1eb4fa;
  return (_0x1eb4fa = _0x2738bc
    .split(";")
    .map((_0x13cc04) => _0x13cc04.trim())
    .find((_0x556d48) => /^border(?:-[a-z]+)?\s*:/i.test(_0x556d48))) == null
    ? undefined
    : _0x1eb4fa.replace(/^border(?:-[a-z]+)?\s*:\s*/i, "").trim();
}
function ya(_0x57a5d2) {
  var _0x509099;
  let _0x16b1de = _a(_0x57a5d2, "border-color");
  if (_0x16b1de) return _0x16b1de;
  let _0x2fc603 = va(_0x57a5d2);
  return (
    (_0x2fc603 == null ||
    (_0x509099 = _0x2fc603.match(/#[0-9a-f]{3,8}|rgb\([^)]+\)/i)) == null
      ? undefined
      : _0x509099[0]) ||
    (_0x2fc603 == null
      ? undefined
      : _0x2fc603
          .split(/\s+/)
          .find(
            (_0x21b9b7) =>
              /^[a-z]+$/i.test(_0x21b9b7) &&
              !["solid", "dashed", "dotted", "double", "none"].includes(
                _0x21b9b7.toLowerCase(),
              ),
          ))
  );
}
function ba(_0x38ebe4) {
  var _0x535c6e;
  let _0x48ca42 = ga(null, _a(_0x38ebe4, "border-width") ?? null, "width");
  if (_0x48ca42 != null) return _0x48ca42;
  let _0xa3b31b =
    (_0x535c6e = va(_0x38ebe4)) == null
      ? undefined
      : _0x535c6e.match(/([0-9.]+)\s*(px|pt|in|cm|mm)/i);
  return _0xa3b31b ? xa(Number(_0xa3b31b[1]), _0xa3b31b[2]) : undefined;
}
function xa(_0x31964e, _0x160d29) {
  switch (_0x160d29 == null ? undefined : _0x160d29.toLowerCase()) {
    case "pt":
      return Sa((_0x31964e * 4) / 3);
    case "in":
      return Sa(_0x31964e * 96);
    case "cm":
      return Sa((_0x31964e * 96) / 2.54);
    case "mm":
      return Sa((_0x31964e * 96) / 25.4);
    default:
      return Sa(_0x31964e);
  }
}
function Sa(_0x59c4a7) {
  return Math.round(_0x59c4a7 * 100) / 100;
}
function Ca(_0x39cb49) {
  return _0x39cb49
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\r?\n/g, "<br>");
}
const wa = "DOC_TABLE_PLUGIN";
var Ta = "@univerjs-pro/docs-table",
  Ea = "1.0.0-insiders.20260907-70fc579";
const Da = {
    id: "docs-table.command.copy-selection",
    type: _0x499278.COMMAND,
    handler: async (_0x5c6564, _0x28eb81) => {
      let _0x184694 = _0x5c6564.get(_0x4b52ad),
        _0x456cb6 = _0x5c6564.get(q),
        _0x3f97b2 = _0x184694.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x2c11ff = _0x456cb6.getCurrentSelection(),
        _0x511644 =
          (_0x28eb81 == null ? undefined : _0x28eb81.tableId) ??
          (_0x2c11ff == null ? undefined : _0x2c11ff.tableId),
        _0x4e0cb5 = R(_0x28eb81, _0x2c11ff);
      if (!_0x3f97b2 || !_0x511644 || !_0x4e0cb5) return false;
      let _0x56295f = z(_0x3f97b2, L(_0x28eb81, _0x2c11ff));
      return _0x56295f
        ? la({ documentData: _0x56295f, tableId: _0x511644, ..._0x4e0cb5 })
        : false;
    },
  },
  Oa = {
    id: "docs-table.command.paste-without-formatting",
    type: _0x499278.COMMAND,
    handler: async (_0x1bff78, _0x8bc1c4) => {
      if (!_0x8bc1c4) return false;
      let _0x811b3e = _0x1bff78.get(_0x4b52ad),
        _0xe5a8f0 = _0x1bff78.get(_0x1bfcad),
        _0x14abd2 = _0x1bff78.get(q),
        _0x965b2b = _0x811b3e.getCurrentUnitOfType(_0xd44303.UNIVER_DOC),
        _0x1b51f9 = _0x14abd2.getCurrentSelection(),
        _0x1f19f3 =
          _0x8bc1c4.tableId ??
          (_0x1b51f9 == null ? undefined : _0x1b51f9.tableId),
        _0x4c9e24 = R(_0x8bc1c4, _0x1b51f9);
      if (!_0x965b2b || !_0x1f19f3 || !_0x4c9e24) return false;
      let _0x6b21c0 = _0x965b2b.getSnapshot(),
        _0x5bae12 = L(_0x8bc1c4, _0x1b51f9),
        _0x57356a = z(_0x965b2b, _0x5bae12);
      if (!_0x57356a) return false;
      let _0x3783c6 = ua(
        {
          documentData: _0x57356a,
          tableId: _0x1f19f3,
          ..._0x4c9e24,
          text: _0x8bc1c4.text,
        },
        W(_0x6b21c0, _0x5bae12),
      );
      return U(
        _0xe5a8f0,
        _0x965b2b.getUnitId(),
        _0x57356a,
        _0x3783c6,
        undefined,
        undefined,
        undefined,
        _0x336267.EditTableCell,
      );
    },
  },
  ka = {};
let Aa = class extends _0x3665ea {
  constructor(_0x1197c6, _0x2db686) {
    (super(),
      (this._resourceManagerService = _0x1197c6),
      (this._docsTableModel = _0x2db686),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: wa,
        businesses: [_0xd44303.UNIVER_DOC],
        toJson: (_0x4ca7a7) =>
          JSON.stringify(this._docsTableModel["serialize"](_0x4ca7a7)),
        parseJson: (_0x1bba7d) => N(JSON.parse(_0x1bba7d)),
        onLoad: (_0x305c47, _0x355bd7) =>
          this._docsTableModel["deserialize"](_0x305c47, _0x355bd7),
        onUnLoad: (_0x2afd3b) => this._docsTableModel["removeUnit"](_0x2afd3b),
      }),
    );
  }
};
Aa = vr([K(0, _0x440995), K(1, _0x84807d(J))], Aa);
let $ = class extends _0x30c7af {
  constructor(_0x5b85e6 = ka, _0x4dd227, _0x4acdfb, _0x31eef8) {
    (super(),
      (this._config = _0x5b85e6),
      (this._injector = _0x4dd227),
      (this._commandService = _0x4acdfb),
      (this._configService = _0x31eef8));
    let { ..._0x52d547 } = _0x62c47f({}, ka, this._config);
    this._configService["setConfig"]("docs-table.config", _0x52d547);
  }
  onStarting() {
    (this._injector["add"]([J]),
      this._injector["add"]([Aa]),
      this._injector["add"]([q]),
      this._injector["get"](J),
      this._injector["get"](Aa),
      this._injector["get"](q),
      this._initCommands());
  }
  _initCommands() {
    [
      Da,
      Or,
      kr,
      Ar,
      jr,
      Mr,
      Nr,
      Fr,
      hi,
      vi,
      yi,
      bi,
      xi,
      Si,
      Oa,
      Ci,
      wi,
      Ti,
      Ei,
      Di,
      $i,
      Ji,
      Xi,
      Qi,
      ea,
      aa,
      oa,
    ].forEach((_0x48471f) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x48471f)),
    );
  }
};
(G($, "pluginName", wa),
  G($, "packageName", Ta),
  G($, "version", Ea),
  G($, "type", _0xd44303.UNIVER_DOC),
  ($ = vr(
    [
      _0x40ea14(_0x5e8b08, _0x4f9831),
      K(1, _0x84807d(_0x451d5f)),
      K(2, _0x1bfcad),
      K(3, _0x333dfb),
    ],
    $,
  )));
export {
  Ir as DEFAULT_DOCS_TABLE_CELL_MARGIN,
  wa as DOCS_TABLE_PLUGIN,
  Mi as DocsTableBorderPreset,
  ot as DocsTableColumnInsertPosition,
  pn as DocsTableColumnType,
  Or as DocsTableDeleteColumnsCommand,
  kr as DocsTableDeleteRowsCommand,
  Ar as DocsTableDeleteTableCommand,
  jr as DocsTableDistributeColumnsCommand,
  Mr as DocsTableDistributeRowsCommand,
  Nr as DocsTableInsertColumnsCommand,
  it as DocsTableInsertPosition,
  Fr as DocsTableInsertRowsCommand,
  hi as DocsTableInsertTableCommand,
  Hr as DocsTableInsertTablePosition,
  vi as DocsTableInsertTitleRowCommand,
  yi as DocsTableMergeCellsCommand,
  J as DocsTableModel,
  bi as DocsTableMoveColumnsCommand,
  xi as DocsTableMoveRowsCommand,
  Si as DocsTableMoveTableCommand,
  Ci as DocsTableResizeColumnCommand,
  wi as DocsTableResizeRowCommand,
  at as DocsTableRowInsertPosition,
  mn as DocsTableSelectionKind,
  q as DocsTableSelectionService,
  hn as DocsTableSelectionSource,
  Ti as DocsTableSetColumnTypeCommand,
  Ei as DocsTableSetHeaderRowCountCommand,
  Di as DocsTableSetTableBackgroundCommand,
  Ji as DocsTableSetTableBorderColorCommand,
  $i as DocsTableSetTableBorderCommand,
  Xi as DocsTableSetTableBorderStyleCommand,
  Qi as DocsTableSetTableBorderWidthCommand,
  ea as DocsTableSetTableVerticalAlignCommand,
  gn as DocsTableSortDirection,
  aa as DocsTableSortTableCommand,
  oa as DocsTableUnmergeCellsCommand,
  $ as UniverDocsTablePlugin,
  ut as buildDeleteColumnsActions,
  lt as buildDeleteRowsActions,
  dt as buildDeleteTableActions,
  zn as buildDeleteTableColumnsMutationActions,
  $n as buildDeleteTableMutationActions,
  Qn as buildDeleteTableRowsMutationActions,
  $t as buildDistributeColumnsActions,
  Qt as buildDistributeRowsActions,
  Mn as buildDistributeTableColumnsMutationActions,
  jn as buildDistributeTableRowsMutationActions,
  ct as buildInsertColumnsActions,
  st as buildInsertRowsActions,
  Pn as buildInsertTableColumnsMutationActions,
  Xn as buildInsertTableRowsMutationActions,
  Zn as buildInsertTableTitleRowMutationActions,
  Xt as buildInsertTitleRowActions,
  Ne as buildMergeCellsActions,
  Pe as buildMergeCellsMutationActions,
  pt as buildMoveColumnsActions,
  Dn as buildMoveFloatingTableMutationActions,
  ft as buildMoveRowsActions,
  nn as buildMoveTableActions,
  Vn as buildMoveTableColumnsMutationActions,
  Bn as buildMoveTableRowsMutationActions,
  On as buildMoveTableToOffsetMutationActions,
  ua as buildPastePlainTextTableMutationActions,
  tn as buildResizeColumnActions,
  en as buildResizeRowActions,
  En as buildResizeTableColumnActionsFromWidth,
  An as buildResizeTableRowActionsFromHeight,
  Zt as buildSetHeaderRowCountActions,
  ki as buildSetTableBackgroundMutationActions,
  Pi as buildSetTableBorderActions,
  Fi as buildSetTableBorderMutationActions,
  Ii as buildSetTableCellBackgroundActions,
  Lr as buildSetTableCellMarginMutationActions,
  Vt as buildSetTableCellTextActions,
  Bt as buildSetTableCellTextMutationActions,
  Rr as buildSetTableDefaultCellMarginMutationActions,
  Nn as buildSetTableHeaderRowCountMutationActions,
  _n as buildSortTableActions,
  Hn as buildSortTableMutationActions,
  Fe as buildUnmergeCellsActions,
  Ie as buildUnmergeCellsMutationActions,
  je as canMergeCells,
  Me as canUnmergeCells,
  ca as convertPlainTextTableToHtml,
  U as executeRichTextTableActions,
  W as getTableActionBodyPath,
  w as getTableRangeById,
  da as parseHtmlTableClipboard,
  sa as parseHtmlTablesClipboard,
};
