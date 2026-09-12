Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/license"),
  t = require("@univerjs-pro/slides"),
  n = require("@univerjs-pro/slides-table"),
  r = require("@univerjs-pro/slides-ui"),
  i = require("@univerjs/core"),
  a = require("@univerjs/engine-render"),
  o = require("@univerjs/ui"),
  s = require("rxjs"),
  c = require("@univerjs/icons"),
  l = require("@univerjs-pro/shape-editor-ui"),
  u = require("@univerjs/design"),
  d = require("@univerjs/docs-ui"),
  f = require("react"),
  p = require("@univerjs/drawing"),
  m = require("react/jsx-runtime"),
  h = require("@univerjs/drawing-ui"),
  g = require("@univerjs/protocol"),
  _ = require("@univerjs-pro/docs-table");
const v = "slides-table-ui.config",
  y = { floatingToolbar: false };
var b = "@univerjs-pro/slides-table-ui",
  x = "1.0.0-insiders.20260907-70fc579";
function S(_0x5e4e71) {
  "@babel/helpers - typeof";
  return (
    (S =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4f9c53) {
            return typeof _0x4f9c53;
          }
        : function (_0x5c0ae8) {
            return _0x5c0ae8 &&
              typeof Symbol == "function" &&
              _0x5c0ae8.constructor === Symbol &&
              _0x5c0ae8 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5c0ae8;
          }),
    S(_0x5e4e71)
  );
}
function C(_0x1e4c2c, _0x62a8b1) {
  if (S(_0x1e4c2c) != "object" || !_0x1e4c2c) return _0x1e4c2c;
  var _0x3fc414 = _0x1e4c2c[Symbol.toPrimitive];
  if (_0x3fc414 !== undefined) {
    var _0x4beacb = _0x3fc414.call(_0x1e4c2c, _0x62a8b1 || "default");
    if (S(_0x4beacb) != "object") return _0x4beacb;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x62a8b1 === "string" ? String : Number)(_0x1e4c2c);
}
function w(_0x4da6bb) {
  var _0x227d43 = C(_0x4da6bb, "string");
  return S(_0x227d43) == "symbol" ? _0x227d43 : _0x227d43 + "";
}
function T(_0x4d93c4, _0x26da8f, _0x59323e) {
  return (
    (_0x26da8f = w(_0x26da8f)) in _0x4d93c4
      ? Object.defineProperty(_0x4d93c4, _0x26da8f, {
          value: _0x59323e,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4d93c4[_0x26da8f] = _0x59323e),
    _0x4d93c4
  );
}
var E = class extends i.Disposable {
  constructor(..._0x177ab0) {
    (super(..._0x177ab0),
      T(this, "_selection$", new s.BehaviorSubject(null)),
      T(this, "selection$", this._selection$["asObservable"]()),
      T(this, "_selection", null),
      T(this, "_tableInternalInteractionUntil", 0));
  }
  markTableInternalInteraction(_0x5e62a5 = 500, _0xb7dee2 = Date.now()) {
    this._tableInternalInteractionUntil = Math.max(
      this._tableInternalInteractionUntil,
      _0xb7dee2 + _0x5e62a5,
    );
  }
  isTableInternalInteractionActive(_0x18aa27 = Date.now()) {
    return _0x18aa27 <= this._tableInternalInteractionUntil;
  }
  getSelection() {
    return this._selection ? O(this._selection) : null;
  }
  clear() {
    ((this._selection = null), this._selection$["next"](null));
  }
  selectCell(_0x2942b7) {
    let _0x2aa4ba = this._buildSelection(
      _0x2942b7,
      "cell",
      {
        startRow: _0x2942b7.row,
        endRow: _0x2942b7.row,
        startColumn: _0x2942b7.column,
        endColumn: _0x2942b7.column,
      },
      { row: _0x2942b7.row, column: _0x2942b7.column },
      { row: _0x2942b7.row, column: _0x2942b7.column },
    );
    return (
      (this._selection = _0x2aa4ba),
      this._selection$["next"](O(_0x2aa4ba)),
      O(_0x2aa4ba)
    );
  }
  selectRange(_0x194c87) {
    let _0x548a12 = D(_0x194c87),
      _0x56a083 = this._buildSelection(
        _0x194c87,
        "range",
        _0x548a12,
        { row: _0x548a12.startRow, column: _0x548a12.startColumn },
        { row: _0x548a12.endRow, column: _0x548a12.endColumn },
      );
    return (
      (this._selection = _0x56a083),
      this._selection$["next"](O(_0x56a083)),
      O(_0x56a083)
    );
  }
  selectRows(_0x2b5145) {
    let _0x58cc8d = Math.min(_0x2b5145.startRow, _0x2b5145.endRow),
      _0x2729b7 = Math.max(_0x2b5145.startRow, _0x2b5145.endRow),
      _0x1a466b = this._buildSelection(_0x2b5145, "row", {
        startRow: _0x58cc8d,
        endRow: _0x2729b7,
        startColumn: 0,
        endColumn: Math.max(0, _0x2b5145.columnCount - 1),
      });
    return (
      (this._selection = _0x1a466b),
      this._selection$["next"](O(_0x1a466b)),
      O(_0x1a466b)
    );
  }
  selectColumns(_0x169d02) {
    let _0x55f086 = Math.min(_0x169d02.startColumn, _0x169d02.endColumn),
      _0xcc9d6a = Math.max(_0x169d02.startColumn, _0x169d02.endColumn),
      _0x48298b = this._buildSelection(_0x169d02, "column", {
        startRow: 0,
        endRow: Math.max(0, _0x169d02.rowCount - 1),
        startColumn: _0x55f086,
        endColumn: _0xcc9d6a,
      });
    return (
      (this._selection = _0x48298b),
      this._selection$["next"](O(_0x48298b)),
      O(_0x48298b)
    );
  }
  selectTable(_0x3d34a0) {
    let _0x296ee9 = this._buildSelection(_0x3d34a0, "table", {
      startRow: 0,
      endRow: Math.max(0, _0x3d34a0.rowCount - 1),
      startColumn: 0,
      endColumn: Math.max(0, _0x3d34a0.columnCount - 1),
    });
    return (
      (this._selection = _0x296ee9),
      this._selection$["next"](O(_0x296ee9)),
      O(_0x296ee9)
    );
  }
  enterTextMode(_0x1d6d34) {
    let _0x57b7da = this._buildSelection(
      _0x1d6d34,
      "text",
      {
        startRow: _0x1d6d34.row,
        endRow: _0x1d6d34.row,
        startColumn: _0x1d6d34.column,
        endColumn: _0x1d6d34.column,
      },
      { row: _0x1d6d34.row, column: _0x1d6d34.column },
      { row: _0x1d6d34.row, column: _0x1d6d34.column },
    );
    return (
      (this._selection = _0x57b7da),
      this._selection$["next"](O(_0x57b7da)),
      O(_0x57b7da)
    );
  }
  dispose() {
    ((this._tableInternalInteractionUntil = 0),
      this._selection$["complete"](),
      super.dispose());
  }
  _buildSelection(_0x53293a, _0x171c1e, _0x3d2fe6, _0x49b9db, _0x1b1ce0) {
    let _0x5305b5 = {
      unitId: _0x53293a.unitId,
      subUnitId: _0x53293a.subUnitId,
      elementId: _0x53293a.elementId,
      tableId: _0x53293a.tableId,
      kind: _0x171c1e,
      ranges: [_0x3d2fe6],
    };
    return (
      _0x49b9db && (_0x5305b5.anchor = _0x49b9db),
      _0x1b1ce0 && (_0x5305b5.focus = _0x1b1ce0),
      _0x5305b5
    );
  }
};
function D(_0x57c3ce) {
  return {
    startRow: Math.min(_0x57c3ce.startRow, _0x57c3ce.endRow),
    endRow: Math.max(_0x57c3ce.startRow, _0x57c3ce.endRow),
    startColumn: Math.min(_0x57c3ce.startColumn, _0x57c3ce.endColumn),
    endColumn: Math.max(_0x57c3ce.startColumn, _0x57c3ce.endColumn),
  };
}
function O(_0x10e9d4) {
  let _0x3e8c83 = {
    ..._0x10e9d4,
    ranges: _0x10e9d4.ranges["map"]((_0x24df6d) => ({ ..._0x24df6d })),
  };
  return (
    _0x10e9d4.anchor && (_0x3e8c83.anchor = { ..._0x10e9d4.anchor }),
    _0x10e9d4.focus && (_0x3e8c83.focus = { ..._0x10e9d4.focus }),
    _0x3e8c83
  );
}
const k = {
  InsertRowAbove: "insert-row-above",
  InsertRowBelow: "insert-row-below",
  InsertColumnLeft: "insert-column-left",
  InsertColumnRight: "insert-column-right",
  DeleteRows: "delete-rows",
  DeleteColumns: "delete-columns",
  MergeCells: "merge-cells",
  UnmergeCells: "unmerge-cells",
  DistributeRows: "distribute-rows",
  DistributeColumns: "distribute-columns",
};
function A(_0x40aaed) {
  let _0xef0480 = _0x40aaed == null ? undefined : _0x40aaed.ranges[0];
  return !_0x40aaed || !_0xef0480
    ? null
    : {
        unitId: _0x40aaed.unitId,
        subUnitId: _0x40aaed.subUnitId,
        elementId: _0x40aaed.elementId,
        tableId: _0x40aaed.tableId,
        range: (0, n.normalizeSlideTableCellRange)(_0xef0480),
      };
}
function ee(_0x570581, _0x16bd54, _0xd4bdd2) {
  let _0x2d4e9a = !!A(_0x16bd54);
  return [
    I(k.InsertRowAbove, _0xd4bdd2.insertRows, _0x2d4e9a),
    I(k.InsertRowBelow, _0xd4bdd2.insertRows, _0x2d4e9a),
    I(k.InsertColumnLeft, _0xd4bdd2.insertColumns, _0x2d4e9a),
    I(k.InsertColumnRight, _0xd4bdd2.insertColumns, _0x2d4e9a),
    I(k.DeleteRows, _0xd4bdd2.deleteRows, me(_0x570581, _0x16bd54)),
    I(k.DeleteColumns, _0xd4bdd2.deleteColumns, he(_0x570581, _0x16bd54)),
    I(k.MergeCells, _0xd4bdd2.mergeCells, fe(_0x16bd54, _0x570581)),
    I(k.UnmergeCells, _0xd4bdd2.unmergeCells, pe(_0x570581, _0x16bd54)),
    I(k.DistributeRows, _0xd4bdd2.updateTable, P(_0x570581, _0x16bd54)),
    I(k.DistributeColumns, _0xd4bdd2.updateTable, F(_0x570581, _0x16bd54)),
  ];
}
function te(_0x57ffec, _0x38b2a1, _0x3f2cae, _0x10a00d) {
  let _0x35fb77 = A(_0x38b2a1);
  if (!_0x35fb77 || !_0x38b2a1) return null;
  let {
    unitId: _0x293a91,
    subUnitId: _0x53eb60,
    elementId: _0xa234f6,
    tableId: _0x269d88,
    range: _0x2c0367,
  } = _0x35fb77;
  switch (_0x3f2cae) {
    case k.InsertRowAbove:
      return {
        commandId: _0x10a00d.insertRows,
        params: {
          unitId: _0x293a91,
          subUnitId: _0x53eb60,
          elementId: _0xa234f6,
          tableId: _0x269d88,
          rowIndex: _0x2c0367.startRow,
          count: _e(_0x2c0367),
        },
      };
    case k.InsertRowBelow:
      return {
        commandId: _0x10a00d.insertRows,
        params: {
          unitId: _0x293a91,
          subUnitId: _0x53eb60,
          elementId: _0xa234f6,
          tableId: _0x269d88,
          rowIndex: _0x2c0367.endRow + 1,
          count: _e(_0x2c0367),
        },
      };
    case k.InsertColumnLeft:
      return {
        commandId: _0x10a00d.insertColumns,
        params: {
          unitId: _0x293a91,
          subUnitId: _0x53eb60,
          elementId: _0xa234f6,
          tableId: _0x269d88,
          columnIndex: _0x2c0367.startColumn,
          count: ve(_0x2c0367),
        },
      };
    case k.InsertColumnRight:
      return {
        commandId: _0x10a00d.insertColumns,
        params: {
          unitId: _0x293a91,
          subUnitId: _0x53eb60,
          elementId: _0xa234f6,
          tableId: _0x269d88,
          columnIndex: _0x2c0367.endColumn + 1,
          count: ve(_0x2c0367),
        },
      };
    case k.DeleteRows:
      return me(_0x57ffec, _0x38b2a1)
        ? {
            commandId: _0x10a00d.deleteRows,
            params: {
              unitId: _0x293a91,
              tableId: _0x269d88,
              startRow: _0x2c0367.startRow,
              endRow: _0x2c0367.endRow,
            },
          }
        : null;
    case k.DeleteColumns:
      return he(_0x57ffec, _0x38b2a1)
        ? {
            commandId: _0x10a00d.deleteColumns,
            params: {
              unitId: _0x293a91,
              tableId: _0x269d88,
              startColumn: _0x2c0367.startColumn,
              endColumn: _0x2c0367.endColumn,
            },
          }
        : null;
    case k.MergeCells:
      return fe(_0x38b2a1, _0x57ffec)
        ? {
            commandId: _0x10a00d.mergeCells,
            params: { unitId: _0x293a91, tableId: _0x269d88, range: _0x2c0367 },
          }
        : null;
    case k.UnmergeCells:
      return pe(_0x57ffec, _0x38b2a1)
        ? {
            commandId: _0x10a00d.unmergeCells,
            params: { unitId: _0x293a91, tableId: _0x269d88, range: _0x2c0367 },
          }
        : null;
    case k.DistributeRows:
      return ge(
        _0x57ffec,
        _0x38b2a1,
        _0x10a00d.updateTable,
        _0x293a91,
        _0x269d88,
        _0x2c0367,
        "row",
      );
    case k.DistributeColumns:
      return ge(
        _0x57ffec,
        _0x38b2a1,
        _0x10a00d.updateTable,
        _0x293a91,
        _0x269d88,
        _0x2c0367,
        "column",
      );
  }
}
function j(_0x3521aa, _0x1976ac, _0x2bda50) {
  let _0x44dbc6 = _0x2bda50
    ? (0, n.normalizeSlideTableCellRange)(_0x2bda50)
    : {
        startRow: 0,
        endRow: _0x3521aa.rows["length"] - 1,
        startColumn: 0,
        endColumn: _0x3521aa.columns["length"] - 1,
      };
  if (_0x1976ac === "row") {
    let _0x3f5e7d = i.Tools["deepClone"](_0x3521aa.rows),
      _0x1846ad = Math.max(
        0,
        Math.min(_0x44dbc6.startRow, _0x3f5e7d.length - 1),
      ),
      _0x46f032 = Math.max(
        _0x1846ad,
        Math.min(_0x44dbc6.endRow, _0x3f5e7d.length - 1),
      ),
      _0x1fa207 = _0x3f5e7d.slice(_0x1846ad, _0x46f032 + 1),
      _0x3c02f1 =
        _0x1fa207.reduce(
          (_0x193a6d, _0x26f540) => _0x193a6d + (_0x26f540.height ?? 24),
          0,
        ) / Math.max(1, _0x1fa207.length);
    for (let _0x4bb073 = _0x1846ad; _0x4bb073 <= _0x46f032; _0x4bb073 += 1)
      _0x3f5e7d[_0x4bb073].height = _0x3c02f1;
    return { rows: _0x3f5e7d };
  }
  let _0x6ccd7e = i.Tools["deepClone"](_0x3521aa.columns),
    _0x82b2cb = Math.max(
      0,
      Math.min(_0x44dbc6.startColumn, _0x6ccd7e.length - 1),
    ),
    _0x295dc0 = Math.max(
      _0x82b2cb,
      Math.min(_0x44dbc6.endColumn, _0x6ccd7e.length - 1),
    ),
    _0x53b999 = _0x6ccd7e.slice(_0x82b2cb, _0x295dc0 + 1),
    _0x17aca6 =
      _0x53b999.reduce(
        (_0x33d8b9, _0xbd610f) => _0x33d8b9 + _0xbd610f.width,
        0,
      ) / Math.max(1, _0x53b999.length);
  for (let _0x400cf7 = _0x82b2cb; _0x400cf7 <= _0x295dc0; _0x400cf7 += 1)
    _0x6ccd7e[_0x400cf7].width = _0x17aca6;
  return { columns: _0x6ccd7e };
}
function ne(_0x10d319, _0x2e3155, _0x42438e) {
  let _0x498636 = i.Tools["deepClone"](_0x10d319.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x498636,
      (0, n.normalizeSlideTableCellRange)(_0x2e3155),
      (_0x4379e7, _0x262583, _0x2238aa) => {
        if (_0x42438e.axis === "vertical") {
          _0x4379e7.style = (0, n.mergeSlideTableCellStyle)(_0x4379e7.style, {
            verticalAlign: Te(_0x42438e.value),
          });
          return;
        }
        let _0x49fe5e =
          "SLIDE_TABLE_CELL_" +
          _0x10d319.id +
          "_" +
          _0x262583 +
          "_" +
          _0x2238aa;
        _0x4379e7.textData = ye(_0x4379e7.textData, _0x42438e.value, _0x49fe5e);
      },
    ),
    { rows: _0x498636 }
  );
}
function M(_0x522ae9, _0x21c6b2, _0x53f66d) {
  let _0x22a4bc = i.Tools["deepClone"](_0x522ae9.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x22a4bc,
      (0, n.normalizeSlideTableCellRange)(_0x21c6b2),
      (_0x2832df, _0x2efcdf, _0x3226e3) => {
        var _0x56d001;
        let _0xfd1142 =
            "SLIDE_TABLE_CELL_" +
            _0x522ae9.id +
            "_" +
            _0x2efcdf +
            "_" +
            _0x3226e3,
          _0x4c7ba1 = i.Tools["deepClone"](_0x2832df.textData ?? we(_0xfd1142)),
          _0xce33e7 = _0x4c7ba1.body ?? {
            dataStream: "\x0d\x0a",
            paragraphs: [R()],
            textRuns: [],
          },
          _0x11e223 = (0, i.generateRandomId)(6);
        _0x2832df.textData = {
          ..._0x4c7ba1,
          id: _0x4c7ba1.id ?? _0xfd1142,
          body: {
            ..._0xce33e7,
            paragraphs: ((_0x56d001 = _0xce33e7.paragraphs) != null &&
            _0x56d001.length
              ? _0xce33e7.paragraphs
              : [R()]
            ).map((_0x109c17) => {
              var _0x1a5c9f, _0x41d064;
              if (_0x53f66d === null) {
                let _0x551e5f = { ..._0x109c17 };
                return (delete _0x551e5f.bullet, _0x551e5f);
              }
              return {
                ..._0x109c17,
                bullet: {
                  nestingLevel:
                    ((_0x1a5c9f = _0x109c17.bullet) == null
                      ? undefined
                      : _0x1a5c9f.nestingLevel) ?? 0,
                  textStyle:
                    ((_0x41d064 = _0x109c17.bullet) == null
                      ? undefined
                      : _0x41d064.listType) === _0x53f66d
                      ? _0x109c17.bullet["textStyle"]
                      : { fs: 20 },
                  listId: _0x11e223,
                  listType: _0x53f66d,
                },
              };
            }),
          },
        };
      },
    ),
    { rows: _0x22a4bc }
  );
}
function re(_0x28f6b5, _0x44e5ed, _0x3f39b5) {
  if (!_0x28f6b5 || !_0x44e5ed) return { active: false, mixed: false };
  let _0x45eedd = (0, n.normalizeSlideTableCellRange)(_0x44e5ed),
    _0x7dfa15 = [];
  for (
    let _0x44ea61 = _0x45eedd.startRow;
    _0x44ea61 <= _0x45eedd.endRow;
    _0x44ea61 += 1
  )
    for (
      let _0x2984f5 = _0x45eedd.startColumn;
      _0x2984f5 <= _0x45eedd.endColumn;
      _0x2984f5 += 1
    ) {
      var _0xffe44e;
      let _0x3c616f =
        ((_0xffe44e = _0x28f6b5.rows[_0x44ea61]) == null ||
        (_0xffe44e = _0xffe44e.cells[_0x2984f5]) == null ||
        (_0xffe44e = _0xffe44e.textData) == null ||
        (_0xffe44e = _0xffe44e.body) == null
          ? undefined
          : _0xffe44e.paragraphs) ?? [];
      _0x7dfa15.push(
        ...(_0x3c616f.length
          ? _0x3c616f.map((_0x1079b3) => {
              var _0x5018d7;
              let _0x20bc46 =
                (_0x5018d7 = _0x1079b3.bullet) == null
                  ? undefined
                  : _0x5018d7.listType;
              return ie(_0x20bc46) ? _0x20bc46 : undefined;
            })
          : [undefined]),
      );
    }
  let _0x1383d2 = _0x7dfa15.filter(
      (_0x40962d) => !!(_0x40962d != null && _0x40962d.startsWith(_0x3f39b5)),
    ),
    _0x1854cb = _0x7dfa15.length > 0 && _0x1383d2.length === _0x7dfa15.length;
  return {
    active: _0x1854cb,
    mixed: _0x1383d2.length > 0 && !_0x1854cb,
    value:
      _0x1854cb && _0x1383d2.every((_0x106689) => _0x106689 === _0x1383d2[0])
        ? _0x1383d2[0]
        : undefined,
  };
}
function ie(_0x33a666) {
  return (
    _0x33a666 !== undefined &&
    Object.values(i.PresetListType).some((_0x22f14a) => _0x22f14a === _0x33a666)
  );
}
function N(_0x5334cd, _0x3daa15, _0x109f71) {
  return ae(
    _0x5334cd,
    _0x3daa15,
    _0x109f71
      ? { type: n.SlideTableFillTypeEnum["Solid"], color: _0x109f71, alpha: 1 }
      : undefined,
  );
}
function ae(_0xa914b1, _0x4499e3, _0x32c51b) {
  let _0x1361af = i.Tools["deepClone"](_0xa914b1.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x1361af,
      (0, n.normalizeSlideTableCellRange)(_0x4499e3),
      (_0x517152) => {
        _0x517152.style = (0, n.mergeSlideTableCellStyle)(_0x517152.style, {
          fill: _0x32c51b,
        });
      },
    ),
    { rows: _0x1361af }
  );
}
function oe(_0x5bd2b6, _0x12a5a4, _0x3ae9a0) {
  return se(
    _0x5bd2b6,
    _0x12a5a4,
    _0x3ae9a0 ? { type: "solid", color: _0x3ae9a0, opacity: 1 } : undefined,
  );
}
function se(_0xe24277, _0x510dfc, _0x36c0b6) {
  let _0x256462 = i.Tools["deepClone"](_0xe24277.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x256462,
      (0, n.normalizeSlideTableCellRange)(_0x510dfc),
      (_0x5786c5, _0x47b442, _0x52e67d) => {
        let _0x29e9fc =
          "SLIDE_TABLE_CELL_" +
          _0xe24277.id +
          "_" +
          _0x47b442 +
          "_" +
          _0x52e67d;
        _0x5786c5.textData = be(_0x5786c5.textData, _0x36c0b6, _0x29e9fc);
      },
    ),
    { rows: _0x256462 }
  );
}
function ce(_0x46a704, _0x47a4f7, _0x155aff) {
  let _0x1402af = i.Tools["deepClone"](_0x46a704.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x1402af,
      (0, n.normalizeSlideTableCellRange)(_0x47a4f7),
      (_0x551e66) => {
        var _0x3af42e;
        let _0x4bc129 =
            ((_0x3af42e = _0x551e66.style) == null
              ? undefined
              : _0x3af42e.borders) ?? {},
          _0x2e7e88 = (_0x593405) => ({
            ...(0, n.getDefaultSlideTableBorder)(),
            ..._0x593405,
            ..._0x155aff,
          });
        _0x551e66.style = (0, n.mergeSlideTableCellStyle)(_0x551e66.style, {
          borders: {
            top: _0x2e7e88(_0x4bc129.top),
            right: _0x2e7e88(_0x4bc129.right),
            bottom: _0x2e7e88(_0x4bc129.bottom),
            left: _0x2e7e88(_0x4bc129.left),
          },
        });
      },
    ),
    { rows: _0x1402af }
  );
}
function le(_0x7cf322, _0x49486d, _0x263460, _0x4d5837) {
  return {
    rows: (0, n.buildBorderPresetPatch)(
      i.Tools["deepClone"](_0x7cf322.rows),
      _0x49486d,
      _0x263460,
      _0x4d5837,
    ).rows,
  };
}
function ue(_0x2ee1fa, _0x40b48c, _0x5a72de) {
  return L(_0x2ee1fa, _0x40b48c, { ff: _0x5a72de });
}
function de(_0x5d2616, _0xc760b4, _0x22c9ce) {
  return L(_0x5d2616, _0xc760b4, { fs: _0x22c9ce });
}
function fe(_0x1178d5, _0x171146) {
  let _0xbeaf48 = A(_0x1178d5);
  return (
    !!_0xbeaf48 &&
    (0, n.isSlideTableMultiCellRange)(_0xbeaf48.range) &&
    (!_0x171146 || !pe(_0x171146, _0x1178d5))
  );
}
function pe(_0x2bedfc, _0x4fb987) {
  let _0x1ac760 = A(_0x4fb987);
  if (!_0x1ac760 || !_0x2bedfc) return false;
  let _0x3920d8 = (0, n.normalizeSlideTableCellRange)(_0x1ac760.range);
  for (
    let _0x2246a8 = _0x3920d8.startRow;
    _0x2246a8 <= _0x3920d8.endRow;
    _0x2246a8 += 1
  )
    for (
      let _0x24cbbe = _0x3920d8.startColumn;
      _0x24cbbe <= _0x3920d8.endColumn;
      _0x24cbbe += 1
    ) {
      let _0xadaf5e = (0, n.findSlideTableMergeRange)(
        _0x2bedfc,
        _0x2246a8,
        _0x24cbbe,
      );
      if (_0xadaf5e && (0, n.isSlideTableMultiCellRange)(_0xadaf5e))
        return true;
    }
  return false;
}
function me(_0x2fdcac, _0x16cc60) {
  let _0x30327 = A(_0x16cc60);
  return !_0x30327 || !_0x2fdcac
    ? false
    : _0x2fdcac.rows["length"] >
        _0x30327.range["endRow"] - _0x30327.range["startRow"] + 1;
}
function he(_0x41225f, _0x2b111a) {
  let _0x579a06 = A(_0x2b111a);
  return !_0x579a06 || !_0x41225f
    ? false
    : _0x41225f.columns["length"] >
        _0x579a06.range["endColumn"] - _0x579a06.range["startColumn"] + 1;
}
function P(_0x1b5363, _0xb0c43b) {
  let _0x3e2215 = A(_0xb0c43b);
  return !_0x3e2215 || !_0x1b5363
    ? false
    : _0x3e2215.range["endRow"] - _0x3e2215.range["startRow"] + 1 > 1;
}
function F(_0x5c2bec, _0x16fa6c) {
  let _0x15ea8b = A(_0x16fa6c);
  return !_0x15ea8b || !_0x5c2bec
    ? false
    : _0x15ea8b.range["endColumn"] - _0x15ea8b.range["startColumn"] + 1 > 1;
}
function I(_0x6ec5ec, _0x2351ed, _0x330a5f) {
  return { id: _0x6ec5ec, commandId: _0x2351ed, enabled: _0x330a5f };
}
function ge(
  _0x264d0e,
  _0xf6b58c,
  _0x19902a,
  _0x3cd6a5,
  _0x40c779,
  _0x2d1eae,
  _0x3b21ac,
) {
  return !_0x264d0e ||
    !(_0x3b21ac === "row" ? P(_0x264d0e, _0xf6b58c) : F(_0x264d0e, _0xf6b58c))
    ? null
    : {
        commandId: _0x19902a,
        params: {
          unitId: _0x3cd6a5,
          tableId: _0x40c779,
          patch: j(_0x264d0e, _0x3b21ac, _0x2d1eae),
        },
      };
}
function _e(_0x32508e) {
  return _0x32508e.endRow - _0x32508e.startRow + 1;
}
function ve(_0x133ddc) {
  return _0x133ddc.endColumn - _0x133ddc.startColumn + 1;
}
function ye(_0x147a1c, _0x59cef7, _0x2861c4) {
  var _0x2f69d3;
  let _0x58d7c2 = i.Tools["deepClone"](_0x147a1c ?? we(_0x2861c4)),
    _0x458a18 = _0x58d7c2.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [R()],
      textRuns: [],
    },
    _0x4ded59 =
      (_0x2f69d3 = _0x458a18.paragraphs) != null && _0x2f69d3.length
        ? _0x458a18.paragraphs
        : [R()],
    _0x730bc8 = _0x58d7c2.documentStyle ?? {};
  return {
    ..._0x58d7c2,
    id: _0x58d7c2.id ?? _0x2861c4,
    body: {
      ..._0x458a18,
      dataStream: _0x458a18.dataStream ?? "\x0d\x0a",
      paragraphs: _0x4ded59.map((_0x3e08ba) => ({
        ..._0x3e08ba,
        paragraphStyle: {
          ..._0x3e08ba.paragraphStyle,
          horizontalAlign: _0x59cef7,
        },
      })),
    },
    documentStyle: {
      ..._0x730bc8,
      renderConfig: { ..._0x730bc8.renderConfig, horizontalAlign: _0x59cef7 },
    },
  };
}
function be(_0x2e1ae1, _0x2be295, _0x2bbeed) {
  var _0x1e8446, _0x192efd;
  let _0xe6898e = i.Tools["deepClone"](_0x2e1ae1 ?? we(_0x2bbeed)),
    _0x41e3d1 = _0xe6898e.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [R()],
      textRuns: [],
    },
    _0x134387 = _0x41e3d1.dataStream ?? "\x0d\x0a",
    _0x3d96df = Math.max(0, _0x134387.length - 2),
    _0x3a2fc6 = Se(_0x2be295),
    _0x53f98d = xe(
      {
        ...((_0x1e8446 = _0xe6898e.documentStyle) == null
          ? undefined
          : _0x1e8446.textStyle),
      },
      _0x2be295,
      _0x3a2fc6,
    ),
    _0x332d49 = (_0x41e3d1.textRuns ?? []).map((_0x5fb31c) => {
      let _0x1e8009 = xe({ ..._0x5fb31c.ts }, _0x2be295, _0x3a2fc6);
      return { ..._0x5fb31c, ts: _0x1e8009 };
    });
  return (
    _0x2be295 &&
      _0x3d96df > 0 &&
      _0x332d49.length === 0 &&
      _0x332d49.push({
        st: 0,
        ed: _0x3d96df,
        ts: {
          ...(_0x3a2fc6 ? { cl: { rgb: _0x3a2fc6 } } : {}),
          textFill: _0x2be295,
        },
      }),
    {
      ..._0xe6898e,
      id: _0xe6898e.id ?? _0x2bbeed,
      body: {
        ..._0x41e3d1,
        dataStream: _0x134387,
        paragraphs:
          (_0x192efd = _0x41e3d1.paragraphs) != null && _0x192efd.length
            ? _0x41e3d1.paragraphs
            : [R()],
        textRuns: _0x332d49,
      },
      documentStyle: { ..._0xe6898e.documentStyle, textStyle: _0x53f98d },
    }
  );
}
function xe(_0x279e33, _0x4b140a, _0x1e51c5) {
  return (
    _0x4b140a ? (_0x279e33.textFill = _0x4b140a) : delete _0x279e33.textFill,
    _0x1e51c5 ? (_0x279e33.cl = { rgb: _0x1e51c5 }) : delete _0x279e33.cl,
    _0x279e33
  );
}
function Se(_0x5211ad) {
  if (!_0x5211ad || _0x5211ad.type === "none")
    return (_0x5211ad == null ? undefined : _0x5211ad.type) === "none"
      ? "rgba(0, 0, 0, 0)"
      : undefined;
  if (_0x5211ad.type === "gradient") {
    var _0x4a32a1;
    return (
      ((_0x4a32a1 = _0x5211ad.gradient) == null ||
      (_0x4a32a1 = _0x4a32a1.stops) == null ||
      (_0x4a32a1 = _0x4a32a1[0]) == null
        ? undefined
        : _0x4a32a1.color) ?? _0x5211ad.color
    );
  }
  return _0x5211ad.color;
}
function L(_0x59beda, _0x378afc, _0x4fc6a1) {
  let _0x1d4dfe = i.Tools["deepClone"](_0x59beda.rows);
  return (
    (0, n.iterateSelectedSlideTableCells)(
      _0x1d4dfe,
      (0, n.normalizeSlideTableCellRange)(_0x378afc),
      (_0x2e47d9, _0x4e5f5d, _0x26ca30) => {
        let _0x5f3872 =
          "SLIDE_TABLE_CELL_" +
          _0x59beda.id +
          "_" +
          _0x4e5f5d +
          "_" +
          _0x26ca30;
        _0x2e47d9.textData = Ce(_0x2e47d9.textData, _0x4fc6a1, _0x5f3872);
      },
    ),
    { rows: _0x1d4dfe }
  );
}
function Ce(_0x51d483, _0xa917b, _0x3ab1da) {
  var _0x24f7fc, _0x42053f;
  let _0x435ce6 = i.Tools["deepClone"](_0x51d483 ?? we(_0x3ab1da)),
    _0x3ca646 = _0x435ce6.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [R()],
      textRuns: [],
    },
    _0x2cb67b = _0x3ca646.dataStream ?? "\x0d\x0a",
    _0x4b3184 = Math.max(0, _0x2cb67b.length - 2),
    _0x82ace4 = (_0x3ca646.textRuns ?? []).map((_0x310444) => ({
      ..._0x310444,
      ts: { ..._0x310444.ts, ..._0xa917b },
    }));
  return (
    _0x4b3184 > 0 &&
      _0x82ace4.length === 0 &&
      _0x82ace4.push({ st: 0, ed: _0x4b3184, ts: _0xa917b }),
    {
      ..._0x435ce6,
      id: _0x435ce6.id ?? _0x3ab1da,
      body: {
        ..._0x3ca646,
        dataStream: _0x2cb67b,
        paragraphs:
          (_0x24f7fc = _0x3ca646.paragraphs) != null && _0x24f7fc.length
            ? _0x3ca646.paragraphs
            : [R()],
        textRuns: _0x82ace4,
      },
      documentStyle: {
        ..._0x435ce6.documentStyle,
        textStyle: {
          ...((_0x42053f = _0x435ce6.documentStyle) == null
            ? undefined
            : _0x42053f.textStyle),
          ..._0xa917b,
        },
      },
    }
  );
}
function we(_0x2e1588) {
  return {
    id: _0x2e1588,
    body: { dataStream: "\x0d\x0a", paragraphs: [R()], textRuns: [] },
    documentStyle: {},
  };
}
function R() {
  return { startIndex: 0, paragraphId: (0, i.createParagraphId)(new Set()) };
}
function Te(_0x55263d) {
  return _0x55263d === i.VerticalAlign["MIDDLE"]
    ? n.SlideTableVerticalAlignEnum["Middle"]
    : _0x55263d === i.VerticalAlign["BOTTOM"]
      ? n.SlideTableVerticalAlignEnum["Bottom"]
      : n.SlideTableVerticalAlignEnum["Top"];
}
const Ee = {
    insertRows: n.InsertSlideTableRowsCommand["id"],
    insertColumns: n.InsertSlideTableColumnsCommand["id"],
    deleteRows: n.DeleteSlideTableRowsCommand["id"],
    deleteColumns: n.DeleteSlideTableColumnsCommand["id"],
    mergeCells: n.MergeSlideTableCellsCommand["id"],
    unmergeCells: n.UnmergeSlideTableCellsCommand["id"],
    updateTable: n.UpdateSlideTableCommand["id"],
  },
  De = [
    { title: "slides-table-ui.contextMenu.resetColor" },
    { title: "white", color: "white" },
    { title: "gray.100", color: "gray.100" },
    { title: "primary.100", color: "primary.100" },
    { title: "blue.100", color: "blue.100" },
    { title: "green.100", color: "green.100" },
    { title: "yellow.100", color: "yellow.100" },
    { title: "red.100", color: "red.100" },
  ],
  Oe = [
    { title: "slides-table-ui.contextMenu.resetColor" },
    { title: "gray.900", color: "gray.900" },
    { title: "gray.500", color: "gray.500" },
    { title: "red.600", color: "red.600" },
    { title: "orange.600", color: "orange.600" },
    { title: "yellow.700", color: "yellow.700" },
    { title: "green.600", color: "green.600" },
    { title: "blue.600", color: "blue.600" },
    { title: "purple.600", color: "purple.600" },
  ],
  ke = z("slide.operation.slide-table-insert-row-above", k.InsertRowAbove),
  Ae = z("slide.operation.slide-table-insert-row-below", k.InsertRowBelow),
  je = z("slide.operation.slide-table-insert-column-left", k.InsertColumnLeft),
  Me = z(
    "slide.operation.slide-table-insert-column-right",
    k.InsertColumnRight,
  ),
  Ne = z("slide.operation.slide-table-delete-rows", k.DeleteRows),
  Pe = z("slide.operation.slide-table-delete-columns", k.DeleteColumns),
  Fe = z("slide.operation.slide-table-merge-cells", k.MergeCells),
  Ie = z("slide.operation.slide-table-unmerge-cells", k.UnmergeCells),
  Le = z("slide.operation.slide-table-distribute-rows", k.DistributeRows),
  Re = z("slide.operation.slide-table-distribute-columns", k.DistributeColumns),
  ze = {
    id: "slide.operation.slide-table-copy-table",
    type: i.CommandType["OPERATION"],
    handler: (_0x37c329) =>
      _0x37c329
        .get(i.ICommandService)
        .executeCommand("slide.operation.copy-selection"),
  },
  Be = {
    id: "slide.operation.slide-table-cut-table",
    type: i.CommandType["OPERATION"],
    handler: (_0x319e9c) =>
      _0x319e9c
        .get(i.ICommandService)
        .executeCommand("slide.operation.cut-selection"),
  },
  Ve = {
    id: "slide.operation.slide-table-delete-table",
    type: i.CommandType["OPERATION"],
    handler: (_0x406b69) => {
      let _0x3b5625 = _0x406b69.get(i.ICommandService),
        _0x1ee6d6 = _0x406b69.get(t.ISlideDrawingService),
        _0xe9267 = _0x406b69.get(r.ISlideDrawingStateService),
        _0xd7dda1 = _0x406b69.get(E),
        _0x1b2f5d = _0xd7dda1.getSelection(),
        _0xaf9cc6 = A(_0x1b2f5d),
        _0x55fd14 =
          _0x1b2f5d && _0xaf9cc6
            ? {
                unitId: _0xaf9cc6.unitId,
                subUnitId: _0x1b2f5d.subUnitId,
                tableId: _0xaf9cc6.tableId,
                elementId: _0xaf9cc6.elementId,
              }
            : null;
      if (!_0x55fd14) {
        let _0x5c29a3 = _0xe9267.getSnapshot(),
          _0x2c3a33 =
            _0x5c29a3.selectedIds["length"] === 1
              ? _0x5c29a3.selectedIds[0]
              : undefined,
          _0xd953df =
            _0x5c29a3.context && _0x2c3a33
              ? _0x1ee6d6.getDrawingByParam({
                  ..._0x5c29a3.context,
                  drawingId: _0x2c3a33,
                })
              : null;
        _0x5c29a3.context &&
          _0x2c3a33 &&
          (_0xd953df == null ? undefined : _0xd953df.element["type"]) ===
            t.PageElementTypeEnum["Table"] &&
          (_0x55fd14 = {
            unitId: _0x5c29a3.context["unitId"],
            subUnitId: _0x5c29a3.context["subUnitId"],
            tableId: _0xd953df.element["tableId"],
            elementId: _0x2c3a33,
          });
      }
      if (!_0x55fd14) return false;
      let _0x2487b4 = _0x3b5625.syncExecuteCommand(
        n.RemoveSlideTableCommand["id"],
        _0x55fd14,
      );
      return (
        _0x2487b4 && (_0xd7dda1.clear(), _0xe9267.clearSelection()),
        _0x2487b4
      );
    },
  };
function He(_0x34c634, _0x1deb4a) {
  return {
    id: _0x34c634,
    type: i.CommandType["OPERATION"],
    handler: (_0x2d1848) => {
      let _0x5952d4 = _0x2d1848.get(t.ISlideDrawingService),
        _0x5bcfa9 = _0x2d1848.get(r.ISlideDrawingStateService).getSnapshot(),
        _0x41e58d =
          _0x5bcfa9.selectedIds["length"] === 1
            ? _0x5bcfa9.selectedIds[0]
            : undefined;
      if (!_0x5bcfa9.context || !_0x41e58d) return false;
      let _0x1c6ed7 = _0x5952d4.getDrawingByParam({
        ..._0x5bcfa9.context,
        drawingId: _0x41e58d,
      });
      if (
        (_0x1c6ed7 == null ? undefined : _0x1c6ed7.element["type"]) !==
        t.PageElementTypeEnum["Table"]
      )
        return false;
      let _0x34eb57 = _0x5952d4.getDrawingOrder(
          _0x5bcfa9.context["unitId"],
          _0x5bcfa9.context["subUnitId"],
        ),
        _0xc48ba8 = _0x34eb57.indexOf(_0x41e58d);
      if (_0xc48ba8 < 0) return false;
      let _0x36ca70 = [..._0x34eb57];
      if (
        _0x1deb4a === i.ArrangeTypeEnum["forward"] &&
        _0xc48ba8 < _0x36ca70.length - 1
      )
        [_0x36ca70[_0xc48ba8], _0x36ca70[_0xc48ba8 + 1]] = [
          _0x36ca70[_0xc48ba8 + 1],
          _0x36ca70[_0xc48ba8],
        ];
      else {
        if (_0x1deb4a === i.ArrangeTypeEnum["backward"] && _0xc48ba8 > 0)
          [_0x36ca70[_0xc48ba8], _0x36ca70[_0xc48ba8 - 1]] = [
            _0x36ca70[_0xc48ba8 - 1],
            _0x36ca70[_0xc48ba8],
          ];
        else {
          if (
            _0x1deb4a === i.ArrangeTypeEnum["front"] &&
            _0xc48ba8 < _0x36ca70.length - 1
          )
            (_0x36ca70.splice(_0xc48ba8, 1), _0x36ca70.push(_0x41e58d));
          else {
            if (_0x1deb4a === i.ArrangeTypeEnum["back"] && _0xc48ba8 > 0)
              (_0x36ca70.splice(_0xc48ba8, 1), _0x36ca70.unshift(_0x41e58d));
            else return false;
          }
        }
      }
      return _0x2d1848
        .get(i.ICommandService)
        .executeCommand(t.ReorderSlideElementsCommand["id"], {
          unitId: _0x5bcfa9.context["unitId"],
          subUnitId: _0x5bcfa9.context["subUnitId"],
          drawingIds: _0x36ca70,
        });
    },
  };
}
const Ue = He(
    "slide-table.operation.arrange-forward",
    i.ArrangeTypeEnum["forward"],
  ),
  We = He(
    "slide-table.operation.arrange-backward",
    i.ArrangeTypeEnum["backward"],
  ),
  Ge = He("slide-table.operation.arrange-front", i.ArrangeTypeEnum["front"]),
  Ke = He("slide-table.operation.arrange-back", i.ArrangeTypeEnum["back"]),
  qe = ct(
    "slide-table.operation.border-all",
    n.SlideTableBorderPresetEnum["All"],
  ),
  Je = ct(
    "slide-table.operation.border-outer",
    n.SlideTableBorderPresetEnum["Outer"],
  ),
  Ye = ct(
    "slide-table.operation.border-inner",
    n.SlideTableBorderPresetEnum["Inner"],
  ),
  Xe = ct(
    "slide-table.operation.border-none",
    n.SlideTableBorderPresetEnum["None"],
  ),
  Ze = lt("slide-table.operation.align-left", {
    axis: "horizontal",
    value: i.HorizontalAlign["LEFT"],
  }),
  Qe = lt("slide-table.operation.align-center", {
    axis: "horizontal",
    value: i.HorizontalAlign["CENTER"],
  }),
  $e = lt("slide-table.operation.align-right", {
    axis: "horizontal",
    value: i.HorizontalAlign["RIGHT"],
  }),
  et = lt("slide-table.operation.align-top", {
    axis: "vertical",
    value: i.VerticalAlign["TOP"],
  }),
  tt = lt("slide-table.operation.align-middle", {
    axis: "vertical",
    value: i.VerticalAlign["MIDDLE"],
  }),
  nt = lt("slide-table.operation.align-bottom", {
    axis: "vertical",
    value: i.VerticalAlign["BOTTOM"],
  }),
  rt = De.map((_0x40f2f1, _0x17e42e) =>
    ut("slide-table.operation.background-color-" + _0x17e42e, _0x40f2f1),
  ),
  it = Oe.map((_0x3878be, _0x3da068) =>
    dt("slide-table.operation.text-color-" + _0x3da068, _0x3878be),
  ),
  at = [
    ke,
    Ae,
    je,
    Me,
    Ne,
    Pe,
    Fe,
    Ie,
    Le,
    Re,
    ze,
    Be,
    Ve,
    Ue,
    We,
    Ge,
    Ke,
    qe,
    Je,
    Ye,
    Xe,
    Ze,
    Qe,
    $e,
    et,
    tt,
    nt,
    ...rt,
    ...it,
  ];
function ot(_0x42e4c1) {
  return A(_0x42e4c1.getSelection());
}
function st(_0x15680c, _0x223d67, _0xb27053) {
  return te(_0x15680c, _0x223d67, _0xb27053, Ee);
}
function z(_0x386ae2, _0x40f810) {
  return {
    id: _0x386ae2,
    type: i.CommandType["OPERATION"],
    handler(_0xd7ee22) {
      let _0x64cefe = _0xd7ee22.get(E).getSelection(),
        _0x3ffe56 = A(_0x64cefe);
      if (!_0x3ffe56) return false;
      let _0x2e906a = st(
        _0xd7ee22
          .get(n.SlideTableResourceService)
          .getTable(_0x3ffe56.unitId, _0x3ffe56.tableId),
        _0x64cefe,
        _0x40f810,
      );
      return _0x2e906a
        ? _0xd7ee22
            .get(i.ICommandService)
            .executeCommand(_0x2e906a.commandId, _0x2e906a.params)
        : false;
    },
  };
}
function ct(_0x95ef46, _0x44908f) {
  return {
    id: _0x95ef46,
    type: i.CommandType["OPERATION"],
    handler: (_0x53871c) => {
      let _0x5a5a6 = ot(_0x53871c.get(E));
      if (!_0x5a5a6) return false;
      let _0x3a0de4 = _0x53871c
        .get(n.SlideTableResourceService)
        .getTable(_0x5a5a6.unitId, _0x5a5a6.tableId);
      return _0x3a0de4
        ? _0x53871c
            .get(i.ICommandService)
            .executeCommand(n.UpdateSlideTableCommand["id"], {
              unitId: _0x5a5a6.unitId,
              tableId: _0x5a5a6.tableId,
              patch: le(_0x3a0de4, _0x5a5a6.range, _0x44908f),
            })
        : false;
    },
  };
}
function lt(_0x5675e3, _0x57779a) {
  return {
    id: _0x5675e3,
    type: i.CommandType["OPERATION"],
    handler: (_0x1fdd02) => {
      let _0x2d9b16 = ot(_0x1fdd02.get(E));
      if (!_0x2d9b16) return false;
      let _0x4deccd = _0x1fdd02
        .get(n.SlideTableResourceService)
        .getTable(_0x2d9b16.unitId, _0x2d9b16.tableId);
      return _0x4deccd
        ? _0x1fdd02
            .get(i.ICommandService)
            .executeCommand(n.UpdateSlideTableCommand["id"], {
              unitId: _0x2d9b16.unitId,
              tableId: _0x2d9b16.tableId,
              patch: ne(_0x4deccd, _0x2d9b16.range, _0x57779a),
            })
        : false;
    },
  };
}
function ut(_0x22b147, _0x2a7abc) {
  return {
    id: _0x22b147,
    title: _0x2a7abc.title,
    type: i.CommandType["OPERATION"],
    handler: (_0x4dd446) => {
      let _0x4d2d8b = ot(_0x4dd446.get(E));
      if (!_0x4d2d8b) return false;
      let _0x205ecf = _0x4dd446
        .get(n.SlideTableResourceService)
        .getTable(_0x4d2d8b.unitId, _0x4d2d8b.tableId);
      return _0x205ecf
        ? _0x4dd446
            .get(i.ICommandService)
            .executeCommand(n.UpdateSlideTableCommand["id"], {
              unitId: _0x4d2d8b.unitId,
              tableId: _0x4d2d8b.tableId,
              patch: N(
                _0x205ecf,
                _0x4d2d8b.range,
                ft(_0x4dd446, _0x2a7abc.color),
              ),
            })
        : false;
    },
  };
}
function dt(_0x537382, _0x41a978) {
  return {
    id: _0x537382,
    title: _0x41a978.title,
    type: i.CommandType["OPERATION"],
    handler: (_0x3ce0f1) => {
      let _0x4ce650 = ot(_0x3ce0f1.get(E));
      if (!_0x4ce650) return false;
      let _0x2cbaf7 = _0x3ce0f1
        .get(n.SlideTableResourceService)
        .getTable(_0x4ce650.unitId, _0x4ce650.tableId);
      return _0x2cbaf7
        ? _0x3ce0f1
            .get(i.ICommandService)
            .executeCommand(n.UpdateSlideTableCommand["id"], {
              unitId: _0x4ce650.unitId,
              tableId: _0x4ce650.tableId,
              patch: oe(
                _0x2cbaf7,
                _0x4ce650.range,
                ft(_0x3ce0f1, _0x41a978.color),
              ),
            })
        : false;
    },
  };
}
function ft(_0x3be09b, _0x4140a2) {
  if (!_0x4140a2) return;
  let _0x5f5aa4 = _0x3be09b.get(i.ThemeService);
  return _0x5f5aa4.isValidThemeColor(_0x4140a2)
    ? _0x5f5aa4.getColorFromTheme(_0x4140a2)
    : _0x4140a2;
}
function pt(_0x35f1fd) {
  let _0x3e503d = _0x35f1fd.get(E).getSelection(),
    _0x1038ea = A(_0x3e503d);
  return fe(
    _0x3e503d,
    _0x1038ea
      ? _0x35f1fd
          .get(n.SlideTableResourceService)
          .getTable(_0x1038ea.unitId, _0x1038ea.tableId)
      : null,
  );
}
function mt(_0xb32fff) {
  let _0x490706 = _0xb32fff.get(E).getSelection(),
    _0x2dc2ff = A(_0x490706);
  return pe(
    _0x2dc2ff
      ? _0xb32fff
          .get(n.SlideTableResourceService)
          .getTable(_0x2dc2ff.unitId, _0x2dc2ff.tableId)
      : null,
    _0x490706,
  );
}
function ht(_0xf616e8) {
  let _0x39b342 = _0xf616e8.get(E).getSelection(),
    _0xb4a2e9 = A(_0x39b342);
  return me(
    _0xb4a2e9
      ? _0xf616e8
          .get(n.SlideTableResourceService)
          .getTable(_0xb4a2e9.unitId, _0xb4a2e9.tableId)
      : null,
    _0x39b342,
  );
}
function gt(_0x5d50fb) {
  let _0x838417 = _0x5d50fb.get(E).getSelection(),
    _0x50bbe0 = A(_0x838417);
  return he(
    _0x50bbe0
      ? _0x5d50fb
          .get(n.SlideTableResourceService)
          .getTable(_0x50bbe0.unitId, _0x50bbe0.tableId)
      : null,
    _0x838417,
  );
}
function _t(_0xf7d76d) {
  let _0x446993 = _0xf7d76d.get(E).getSelection(),
    _0x58504a = A(_0x446993);
  return P(
    _0x58504a
      ? _0xf7d76d
          .get(n.SlideTableResourceService)
          .getTable(_0x58504a.unitId, _0x58504a.tableId)
      : null,
    _0x446993,
  );
}
function vt(_0x5433a1) {
  let _0x2f4de1 = _0x5433a1.get(E).getSelection(),
    _0x2ffbda = A(_0x2f4de1);
  return F(
    _0x2ffbda
      ? _0x5433a1
          .get(n.SlideTableResourceService)
          .getTable(_0x2ffbda.unitId, _0x2ffbda.tableId)
      : null,
    _0x2f4de1,
  );
}
function yt(_0x3693a7) {
  return (
    _0x3693a7.key["length"] === 1 &&
    !_0x3693a7.altKey &&
    !_0x3693a7.ctrlKey &&
    !_0x3693a7.metaKey
  );
}
function bt(_0x3cbabe) {
  return _0x3cbabe === "insertText" || _0x3cbabe === "insertCompositionText";
}
function xt(_0x4573f) {
  if (typeof HTMLElement > "u" || !(_0x4573f instanceof HTMLElement))
    return false;
  let _0x36a63c = _0x4573f.tagName["toLowerCase"]();
  return (
    _0x36a63c === "input" ||
    _0x36a63c === "textarea" ||
    _0x36a63c === "select" ||
    Ct(_0x4573f)
  );
}
function St(_0x3ae317) {
  return typeof HTMLElement > "u" ||
    !(_0x3ae317 instanceof HTMLElement) ||
    !Ct(_0x3ae317)
    ? false
    : _0x3ae317.dataset["uComp"] === "editor" ||
        _0x3ae317.id["startsWith"]("__editor_");
}
function Ct(_0x40da95) {
  return (
    _0x40da95.isContentEditable ||
    _0x40da95.getAttribute("contenteditable") === "true"
  );
}
var wt = class extends i.Disposable {
  constructor() {
    (super(),
      T(this, "_handler", null),
      T(this, "_inputHandler", null),
      this._initNativeInputListeners());
  }
  setHandler(_0x467fb9) {
    return (
      (this._handler = _0x467fb9),
      (0, i.toDisposable)(() => {
        this._handler === _0x467fb9 && (this._handler = null);
      })
    );
  }
  setInputHandler(_0x9b020d) {
    return (
      (this._inputHandler = _0x9b020d),
      (0, i.toDisposable)(() => {
        this._inputHandler === _0x9b020d && (this._inputHandler = null);
      })
    );
  }
  handle(_0x542250) {
    var _0x1f7290;
    return (
      ((_0x1f7290 = this._handler) == null
        ? undefined
        : _0x1f7290.call(this, _0x542250)) ?? false
    );
  }
  handleInput(_0x494a4f) {
    var _0x1a6124;
    return (
      ((_0x1a6124 = this._inputHandler) == null
        ? undefined
        : _0x1a6124.call(this, _0x494a4f)) ?? false
    );
  }
  _initNativeInputListeners() {
    if (typeof document > "u") return;
    let _0x44629e = (_0xcfd671) => {
        !this.canHandleNativeInput(_0xcfd671) ||
          _0xcfd671.isComposing ||
          !yt(_0xcfd671) ||
          (this.handleInput({ kind: "text", text: _0xcfd671.key }) &&
            (_0xcfd671.preventDefault(), _0xcfd671.stopPropagation()));
      },
      _0x1cc629 = (_0xa2c28) => {
        !this.canHandleNativeInput(_0xa2c28) ||
          !_0xa2c28.data ||
          !bt(_0xa2c28.inputType) ||
          (this.handleInput({ kind: "text", text: _0xa2c28.data }) &&
            (_0xa2c28.preventDefault(), _0xa2c28.stopPropagation()));
      },
      _0x1f8f22 = (_0x5bfd44) => {
        this.canHandleNativeInput(_0x5bfd44, { allowDocsEditor: true }) &&
          this.handleInput({ kind: "composition-start" });
      },
      _0x3b73b2 = (_0x491ca2) => {
        !this.canHandleNativeInput(_0x491ca2) ||
          !_0x491ca2.data ||
          (this.handleInput({ kind: "composition", text: _0x491ca2.data }) &&
            (_0x491ca2.preventDefault(), _0x491ca2.stopPropagation()));
      };
    (document.addEventListener("keydown", _0x44629e, true),
      document.addEventListener("beforeinput", _0x1cc629, true),
      document.addEventListener("compositionstart", _0x1f8f22, true),
      document.addEventListener("compositionend", _0x3b73b2, true),
      this.disposeWithMe(
        (0, i.toDisposable)(() => {
          (document.removeEventListener("keydown", _0x44629e, true),
            document.removeEventListener("beforeinput", _0x1cc629, true),
            document.removeEventListener("compositionstart", _0x1f8f22, true),
            document.removeEventListener("compositionend", _0x3b73b2, true));
        }),
      ));
  }
};
function B(_0x1e0438, _0xea5cd3) {
  return function (_0x16d1c0, _0x5bef0b) {
    _0xea5cd3(_0x16d1c0, _0x5bef0b, _0x1e0438);
  };
}
function V(_0x502312, _0x10aa29, _0x9395b3, _0x1e3624) {
  var _0x1c1cde = arguments.length,
    _0x1e0bc2 =
      _0x1c1cde < 3
        ? _0x10aa29
        : _0x1e3624 === null
          ? (_0x1e3624 = Object.getOwnPropertyDescriptor(_0x10aa29, _0x9395b3))
          : _0x1e3624,
    _0x151b45;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1e0bc2 = Reflect.decorate(_0x502312, _0x10aa29, _0x9395b3, _0x1e3624);
  else {
    for (var _0xe46925 = _0x502312.length - 1; _0xe46925 >= 0; _0xe46925--)
      (_0x151b45 = _0x502312[_0xe46925]) &&
        (_0x1e0bc2 =
          (_0x1c1cde < 3
            ? _0x151b45(_0x1e0bc2)
            : _0x1c1cde > 3
              ? _0x151b45(_0x10aa29, _0x9395b3, _0x1e0bc2)
              : _0x151b45(_0x10aa29, _0x9395b3)) || _0x1e0bc2);
  }
  return (
    _0x1c1cde > 3 &&
      _0x1e0bc2 &&
      Object.defineProperty(_0x10aa29, _0x9395b3, _0x1e0bc2),
    _0x1e0bc2
  );
}
let Tt = class extends wt {
  constructor(_0x4617f4) {
    (super(), (this._contextService = _0x4617f4));
  }
  canHandleNativeInput(_0x5b8727, _0x3d7470) {
    return !this._contextService["getContextValue"](i.FOCUSING_SLIDE) ||
      !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE")
      ? false
      : _0x3d7470 != null && _0x3d7470.allowDocsEditor && St(_0x5b8727.target)
        ? true
        : !xt(_0x5b8727.target);
  }
};
Tt = V([B(0, i.IContextService)], Tt);
const Et = [
  { key: "arrow-left", action: "move-left" },
  { key: "arrow-right", action: "move-right" },
  { key: "arrow-up", action: "move-up" },
  { key: "arrow-down", action: "move-down" },
  { key: "shift-arrow-left", action: "extend-left" },
  { key: "shift-arrow-right", action: "extend-right" },
  { key: "shift-arrow-up", action: "extend-up" },
  { key: "shift-arrow-down", action: "extend-down" },
  { key: "tab", action: "tab-forward" },
  { key: "shift-tab", action: "tab-backward" },
  { key: "enter", action: "edit-cell" },
  { key: "f2", action: "edit-cell" },
  { key: "delete", action: "clear-cells" },
  { key: "backspace", action: "clear-cells" },
];
function Dt(_0x56e305) {
  return Et.map((_0x598903) => ({
    action: _0x598903.action,
    binding: _0x56e305[_0x598903.key],
  }));
}
function Ot(_0x323af9) {
  switch (_0x323af9) {
    case "move-left":
      return { rowDelta: 0, columnDelta: -1, extend: false };
    case "move-right":
      return { rowDelta: 0, columnDelta: 1, extend: false };
    case "move-up":
      return { rowDelta: -1, columnDelta: 0, extend: false };
    case "move-down":
      return { rowDelta: 1, columnDelta: 0, extend: false };
    case "extend-left":
      return { rowDelta: 0, columnDelta: -1, extend: true };
    case "extend-right":
      return { rowDelta: 0, columnDelta: 1, extend: true };
    case "extend-up":
      return { rowDelta: -1, columnDelta: 0, extend: true };
    case "extend-down":
      return { rowDelta: 1, columnDelta: 0, extend: true };
    case "tab-forward":
      return { rowDelta: 0, columnDelta: 1, extend: false, wrap: true };
    case "tab-backward":
      return { rowDelta: 0, columnDelta: -1, extend: false, wrap: true };
    default:
      return null;
  }
}
function kt(_0x200288, _0x48ec15, _0x35862b, _0x19a3b8) {
  return _0x48ec15.wrap
    ? jt(_0x200288, _0x48ec15, _0x35862b, _0x19a3b8)
    : {
        row: Math.min(
          Math.max(0, _0x200288.row + _0x48ec15.rowDelta),
          Math.max(0, _0x35862b - 1),
        ),
        column: Math.min(
          Math.max(0, _0x200288.column + _0x48ec15.columnDelta),
          Math.max(0, _0x19a3b8 - 1),
        ),
      };
}
function At(_0x43fbf7, _0x142786, _0xf7c995) {
  let _0x192ea0 = Math.max(1, _0x142786),
    _0x1dba26 = Math.max(1, _0xf7c995),
    _0x4af775 = _0x43fbf7.row * _0x1dba26 + _0x43fbf7.column,
    _0x5d78e3 = _0x192ea0 * _0x1dba26 - 1,
    _0x3f33f7 = Math.min(_0x5d78e3, Math.max(0, _0x4af775));
  return {
    row: Math.floor(_0x3f33f7 / _0x1dba26),
    column: _0x3f33f7 % _0x1dba26,
  };
}
function jt(_0x348a99, _0xe7fa04, _0x35d440, _0x32cb45) {
  let _0x23fd7a = Math.max(1, _0x35d440),
    _0x28bf6f = Math.max(1, _0x32cb45);
  if (_0xe7fa04.columnDelta !== 0 && _0xe7fa04.rowDelta === 0) {
    let _0x192dbd = _0x23fd7a * _0x28bf6f,
      _0xce01ba = At(_0x348a99, _0x23fd7a, _0x28bf6f),
      _0x1afd7f = Mt(
        _0xce01ba.row * _0x28bf6f + _0xce01ba.column + _0xe7fa04.columnDelta,
        _0x192dbd,
      );
    return {
      row: Math.floor(_0x1afd7f / _0x28bf6f),
      column: _0x1afd7f % _0x28bf6f,
    };
  }
  return {
    row: Mt(_0x348a99.row + _0xe7fa04.rowDelta, _0x23fd7a),
    column: Mt(_0x348a99.column + _0xe7fa04.columnDelta, _0x28bf6f),
  };
}
function Mt(_0x223acc, _0x21c6c2) {
  return ((_0x223acc % _0x21c6c2) + _0x21c6c2) % _0x21c6c2;
}
const Nt = {
    id: "slide-table.operation.keyboard",
    type: i.CommandType["OPERATION"],
    handler: (_0x2d0784, _0x286648) =>
      _0x286648 != null && _0x286648.action
        ? _0x2d0784.get(Tt).handle(_0x286648.action)
        : false,
  },
  Pt = [Nt],
  Ft = Dt({
    "arrow-left": o.KeyCode["ARROW_LEFT"],
    "arrow-right": o.KeyCode["ARROW_RIGHT"],
    "arrow-up": o.KeyCode["ARROW_UP"],
    "arrow-down": o.KeyCode["ARROW_DOWN"],
    "shift-arrow-left": o.KeyCode["ARROW_LEFT"] | o.MetaKeys["SHIFT"],
    "shift-arrow-right": o.KeyCode["ARROW_RIGHT"] | o.MetaKeys["SHIFT"],
    "shift-arrow-up": o.KeyCode["ARROW_UP"] | o.MetaKeys["SHIFT"],
    "shift-arrow-down": o.KeyCode["ARROW_DOWN"] | o.MetaKeys["SHIFT"],
    tab: o.KeyCode["TAB"],
    "shift-tab": o.KeyCode["TAB"] | o.MetaKeys["SHIFT"],
    enter: o.KeyCode["ENTER"],
    f2: o.KeyCode["F2"],
    delete: o.KeyCode["DELETE"],
    backspace: o.KeyCode["BACKSPACE"],
  }).map(({ binding: _0x22e675, action: _0xc596a1 }) =>
    Lt(_0x22e675, _0xc596a1),
  ),
  It = [o.KeyCode["DELETE"], o.KeyCode["BACKSPACE"]].map((_0x33bbcf) => ({
    id: Ve.id,
    binding: _0x33bbcf,
    priority: 130,
    preconditions: zt,
  }));
function Lt(_0x1f6e35, _0x2cb118) {
  return {
    id: Nt.id,
    binding: _0x1f6e35,
    priority: 130,
    preconditions: Rt,
    staticParameters: { action: _0x2cb118 },
  };
}
function Rt(_0x26e622) {
  return !!(
    _0x26e622.getContextValue(i.FOCUSING_SLIDE) &&
    _0x26e622.getContextValue("FOCUSING_SLIDE_TABLE")
  );
}
function zt(_0x63c0b) {
  return !!(
    _0x63c0b.getContextValue(i.FOCUSING_SLIDE) &&
    _0x63c0b.getContextValue(i.FOCUSING_COMMON_DRAWINGS) &&
    _0x63c0b.getContextValue("FOCUSING_SLIDE_TABLE_OBJECT") &&
    !_0x63c0b.getContextValue(i.EDITOR_ACTIVATED)
  );
}
let H = class extends i.Disposable {
  constructor(_0x14d35d) {
    (super(),
      T(this, "_enabled$", undefined),
      T(this, "_fallbackVisible$", new s["BehaviorSubject"](false)),
      T(this, "_fallbackVisibleSources", new Set()),
      T(this, "enabled$", undefined),
      T(this, "visible$", undefined));
    let _0x537de8 = _0x14d35d.getConfig(v);
    ((this._enabled$ = new s["BehaviorSubject"](
      (_0x537de8 == null ? undefined : _0x537de8.floatingToolbar) ?? false,
    )),
      (this.enabled$ = this._enabled$["asObservable"]()),
      (this.visible$ = (0, s.combineLatest)([
        this._enabled$,
        this._fallbackVisible$,
      ]).pipe((0, s.map)(([_0x1c8500, _0x4ea3c0]) => _0x1c8500 || _0x4ea3c0))));
  }
  getEnabled() {
    return this._enabled$["getValue"]();
  }
  setEnabled(_0x2209d6) {
    this.getEnabled() !== _0x2209d6 && this._enabled$["next"](_0x2209d6);
  }
  getVisible() {
    return this.getEnabled() || this._fallbackVisible$["getValue"]();
  }
  setFallbackVisible(_0x2494d6, _0x40b8af = "default") {
    _0x2494d6
      ? this._fallbackVisibleSources["add"](_0x40b8af)
      : this._fallbackVisibleSources["delete"](_0x40b8af);
    let _0x2cd9d0 = this._fallbackVisibleSources["size"] > 0;
    this._fallbackVisible$["getValue"]() !== _0x2cd9d0 &&
      this._fallbackVisible$["next"](_0x2cd9d0);
  }
  toggle() {
    this.setEnabled(!this.getEnabled());
  }
  dispose() {
    (this._enabled$["complete"](),
      this._fallbackVisibleSources["clear"](),
      this._fallbackVisible$["complete"](),
      super.dispose());
  }
};
H = V([B(0, i.IConfigService)], H);
const Bt = {
    id: "slides-table-ui.operation.toggle-floating-toolbar",
    type: i.CommandType["OPERATION"],
    handler: (_0x28602f) => (_0x28602f.get(H).toggle(), true),
  },
  Vt = "#FFFFFF",
  Ht = "#111827",
  Ut = [
    "backgroundColor",
    "backgroundFill",
    "borderColor",
    "borderDash",
    "borderWidth",
    "bold",
    "fontFamily",
    "fontSize",
    "horizontalAlign",
    "italic",
    "strike",
    "textBackgroundColor",
    "textColor",
    "textFill",
    "underline",
    "verticalAlign",
  ];
function Wt() {
  return {
    backgroundColor: Vt,
    backgroundFill: {
      type: n.SlideTableFillTypeEnum["Solid"],
      color: Vt,
      alpha: 1,
    },
    borderColor: "#1F1F1F",
    borderDash: n.SlideTableBorderDashEnum["Solid"],
    borderWidth: 1,
    bold: false,
    fontFamily: i.DEFAULT_STYLES["ff"],
    fontSize: i.DEFAULT_STYLES["fs"],
    horizontalAlign: i.HorizontalAlign["LEFT"],
    italic: false,
    strike: false,
    textBackgroundColor: i.DEFAULT_STYLES["bg"].rgb,
    textColor: Ht,
    textFill: { type: "solid", color: Ht, opacity: 1 },
    underline: false,
    verticalAlign: i.VerticalAlign["MIDDLE"],
    mixed: {},
  };
}
function Gt(_0x206e1c, _0x39de43) {
  let _0x5a2d2d = Wt();
  if (!_0x206e1c || !_0x39de43) return _0x5a2d2d;
  let _0x5acade = Math.min(_0x39de43.startRow, _0x39de43.endRow),
    _0x563ea6 = Math.max(_0x39de43.startRow, _0x39de43.endRow),
    _0x2cee6e = Math.min(_0x39de43.startColumn, _0x39de43.endColumn),
    _0x432060 = Math.max(_0x39de43.startColumn, _0x39de43.endColumn),
    _0x5d6e5e = Kt(_0x206e1c, _0x5acade, _0x2cee6e, _0x5a2d2d);
  for (let _0x4f46c1 = _0x5acade; _0x4f46c1 <= _0x563ea6; _0x4f46c1++)
    for (let _0xb680e8 = _0x2cee6e; _0xb680e8 <= _0x432060; _0xb680e8++) {
      let _0x5a12be = Kt(_0x206e1c, _0x4f46c1, _0xb680e8, _0x5a2d2d);
      for (let _0x27427a of Ut)
        Xt(_0x5d6e5e[_0x27427a], _0x5a12be[_0x27427a]) ||
          (_0x5d6e5e.mixed[_0x27427a] = true);
    }
  return _0x5d6e5e;
}
function Kt(_0x19af12, _0x54c0b2, _0x41032c, _0x2fed65) {
  var _0x528e28;
  let _0x500db5 =
    (_0x528e28 = _0x19af12.rows[_0x54c0b2]) == null
      ? undefined
      : _0x528e28.cells[_0x41032c];
  return {
    ...qt(_0x500db5, _0x2fed65),
    ...Yt(_0x500db5 == null ? undefined : _0x500db5.textData, _0x2fed65),
    mixed: {},
  };
}
function qt(_0x121335, _0x26b859) {
  let _0x7abec7 = _0x121335 == null ? undefined : _0x121335.style,
    _0x395e5c = Jt(_0x7abec7 == null ? undefined : _0x7abec7.borders);
  return {
    backgroundColor: en(
      _0x7abec7 == null ? undefined : _0x7abec7.fill,
      _0x26b859.backgroundColor,
    ),
    backgroundFill:
      (_0x7abec7 == null ? undefined : _0x7abec7.fill) ??
      _0x26b859.backgroundFill,
    borderColor:
      (_0x395e5c == null ? undefined : _0x395e5c.color) ??
      _0x26b859.borderColor,
    borderDash:
      (_0x395e5c == null ? undefined : _0x395e5c.dash) ?? _0x26b859.borderDash,
    borderWidth:
      (_0x395e5c == null ? undefined : _0x395e5c.width) ??
      _0x26b859.borderWidth,
    verticalAlign:
      nn(_0x7abec7 == null ? undefined : _0x7abec7.verticalAlign) ??
      _0x26b859.verticalAlign,
  };
}
function Jt(_0x36fc20) {
  return (
    (_0x36fc20 == null ? undefined : _0x36fc20.top) ??
    (_0x36fc20 == null ? undefined : _0x36fc20.left) ??
    (_0x36fc20 == null ? undefined : _0x36fc20.right) ??
    (_0x36fc20 == null ? undefined : _0x36fc20.bottom)
  );
}
function Yt(_0x182672, _0x571ee1) {
  let _0x42693d = Zt(_0x182672);
  return {
    bold: _0x42693d.bold ?? _0x571ee1.bold,
    fontFamily: _0x42693d.fontFamily ?? _0x571ee1.fontFamily,
    fontSize: _0x42693d.fontSize ?? _0x571ee1.fontSize,
    horizontalAlign: Qt(_0x182672) ?? _0x571ee1.horizontalAlign,
    italic: _0x42693d.italic ?? _0x571ee1.italic,
    strike: _0x42693d.strike ?? _0x571ee1.strike,
    textBackgroundColor:
      _0x42693d.textBackgroundColor ?? _0x571ee1.textBackgroundColor,
    textColor:
      _0x42693d.textColor ?? tn(_0x42693d.textFill, _0x571ee1.textColor),
    textFill: _0x42693d.textFill ?? _0x571ee1.textFill,
    underline: _0x42693d.underline ?? _0x571ee1.underline,
  };
}
function Xt(_0x4528be, _0x2ec4a3) {
  return typeof _0x4528be == "object" || typeof _0x2ec4a3 == "object"
    ? JSON.stringify(_0x4528be) === JSON.stringify(_0x2ec4a3)
    : _0x4528be === _0x2ec4a3;
}
function Zt(_0x4dea5f) {
  var _0x3bff8a, _0x59ed72, _0x3f07d9, _0x399597, _0xf5497f, _0x5608b5;
  let _0x256780 =
      _0x4dea5f == null || (_0x3bff8a = _0x4dea5f.documentStyle) == null
        ? undefined
        : _0x3bff8a.textStyle,
    _0x2e78f8 =
      _0x4dea5f == null ||
      (_0x59ed72 = _0x4dea5f.body) == null ||
      (_0x59ed72 = _0x59ed72.textRuns) == null ||
      (_0x59ed72 = _0x59ed72.find((_0x31659c) => _0x31659c.ts)) == null
        ? undefined
        : _0x59ed72.ts,
    _0x22683b = { ..._0x256780, ..._0x2e78f8 };
  return {
    bold: _0x22683b.bl === i.BooleanNumber["TRUE"],
    fontFamily: typeof _0x22683b.ff == "string" ? _0x22683b.ff : undefined,
    fontSize: typeof _0x22683b.fs == "number" ? _0x22683b.fs : undefined,
    italic: _0x22683b.it === i.BooleanNumber["TRUE"],
    strike:
      ((_0x3f07d9 = _0x22683b.st) == null ? undefined : _0x3f07d9.s) ===
      i.BooleanNumber["TRUE"],
    textBackgroundColor:
      typeof ((_0x399597 = _0x22683b.bg) == null ? undefined : _0x399597.rgb) ==
      "string"
        ? _0x22683b.bg["rgb"]
        : undefined,
    textColor:
      ((_0xf5497f = _0x22683b.cl) == null ? undefined : _0xf5497f.rgb) ??
      tn(_0x22683b.textFill, undefined),
    textFill: _0x22683b.textFill,
    underline:
      ((_0x5608b5 = _0x22683b.ul) == null ? undefined : _0x5608b5.s) ===
      i.BooleanNumber["TRUE"],
  };
}
function Qt(_0x4a9e12) {
  var _0x177b80, _0x4a36ad;
  let _0x51d1fa =
    _0x4a9e12 == null ||
    (_0x177b80 = _0x4a9e12.documentStyle) == null ||
    (_0x177b80 = _0x177b80.renderConfig) == null
      ? undefined
      : _0x177b80.horizontalAlign;
  return _0x51d1fa === undefined
    ? _0x4a9e12 == null ||
      (_0x4a36ad = _0x4a9e12.body) == null ||
      (_0x4a36ad = _0x4a36ad.paragraphs) == null ||
      (_0x4a36ad = _0x4a36ad.find((_0x3af38c) => {
        var _0x56b968;
        return (
          ((_0x56b968 = _0x3af38c.paragraphStyle) == null
            ? undefined
            : _0x56b968.horizontalAlign) !== undefined
        );
      })) == null ||
      (_0x4a36ad = _0x4a36ad.paragraphStyle) == null
      ? undefined
      : _0x4a36ad.horizontalAlign
    : _0x51d1fa;
}
function $t(_0x37f1e2) {
  var _0x3f301e, _0x173e2f;
  return !_0x37f1e2 || _0x37f1e2.type === n.SlideTableFillTypeEnum["None"]
    ? "none"
    : _0x37f1e2.type === n.SlideTableFillTypeEnum["Picture"] ||
        ((_0x3f301e = _0x37f1e2.picture) != null && _0x3f301e.source) ||
        _0x37f1e2.picture
      ? "picture"
      : _0x37f1e2.type === n.SlideTableFillTypeEnum["Gradient"] ||
          ((_0x173e2f = _0x37f1e2.gradient) != null &&
            (_0x173e2f = _0x173e2f.stops) != null &&
            _0x173e2f.length)
        ? "gradient"
        : "solid";
}
function en(_0x501fcb, _0x828bbb) {
  var _0x1af335;
  return (_0x501fcb == null ? undefined : _0x501fcb.type) ===
    n.SlideTableFillTypeEnum["None"]
    ? _0x828bbb
    : ((_0x501fcb == null ||
      (_0x1af335 = _0x501fcb.gradient) == null ||
      (_0x1af335 = _0x1af335.stops) == null ||
      (_0x1af335 = _0x1af335[0]) == null
        ? undefined
        : _0x1af335.color) ??
        (_0x501fcb == null ? undefined : _0x501fcb.color) ??
        _0x828bbb);
}
function tn(_0x213703, _0x44802d) {
  var _0x4a707e;
  return (_0x213703 == null ? undefined : _0x213703.type) === "none"
    ? "rgba(0, 0, 0, 0)"
    : ((_0x213703 == null ||
      (_0x4a707e = _0x213703.gradient) == null ||
      (_0x4a707e = _0x4a707e.stops) == null ||
      (_0x4a707e = _0x4a707e[0]) == null
        ? undefined
        : _0x4a707e.color) ??
        (_0x213703 == null ? undefined : _0x213703.color) ??
        _0x44802d ??
        "#111827");
}
function nn(_0x36acb0) {
  if (_0x36acb0 === n.SlideTableVerticalAlignEnum["Top"])
    return i.VerticalAlign["TOP"];
  if (_0x36acb0 === n.SlideTableVerticalAlignEnum["Bottom"])
    return i.VerticalAlign["BOTTOM"];
  if (_0x36acb0 === n.SlideTableVerticalAlignEnum["Middle"])
    return i.VerticalAlign["MIDDLE"];
}
function rn(_0x2eb5e9, _0x464c5f) {
  var _0x4c284d, _0x32d81a, _0x2bf4d9;
  return {
    type:
      (_0x2eb5e9 == null || (_0x4c284d = _0x2eb5e9.gradient) == null
        ? undefined
        : _0x4c284d.type) ?? "linear",
    angle:
      (_0x2eb5e9 == null || (_0x32d81a = _0x2eb5e9.gradient) == null
        ? undefined
        : _0x32d81a.angle) ?? 0,
    stops:
      _0x2eb5e9 != null &&
      (_0x2bf4d9 = _0x2eb5e9.gradient) != null &&
      (_0x2bf4d9 = _0x2bf4d9.stops) != null &&
      _0x2bf4d9.length
        ? _0x2eb5e9.gradient["stops"].map((_0xbef206) => ({
            color: _0xbef206.color,
            offset: _0xbef206.offset,
            opacity: _0xbef206.opacity,
          }))
        : [
            {
              color:
                (_0x2eb5e9 == null ? undefined : _0x2eb5e9.color) ?? _0x464c5f,
              offset: 0,
              opacity: (_0x2eb5e9 == null ? undefined : _0x2eb5e9.alpha) ?? 1,
            },
            { color: "#000000", offset: 100, opacity: 1 },
          ],
  };
}
function an(_0x2a88e0) {
  let _0x3af94e = _0x2a88e0.stops[0];
  return {
    type: n.SlideTableFillTypeEnum["Gradient"],
    color: (_0x3af94e == null ? undefined : _0x3af94e.color) ?? "#FFFFFF",
    alpha: (_0x3af94e == null ? undefined : _0x3af94e.opacity) ?? 1,
    picture: undefined,
    gradient: {
      type: _0x2a88e0.type,
      angle: _0x2a88e0.angle,
      stops: _0x2a88e0.stops["map"]((_0x4ec630) => ({
        color: _0x4ec630.color,
        offset: _0x4ec630.offset,
        opacity: _0x4ec630.opacity,
      })),
    },
  };
}
function on(_0x1f51ed, _0x29cd07) {
  var _0x142f69, _0x37da6f;
  if ((_0x1f51ed == null ? undefined : _0x1f51ed.type) === "none")
    return {
      backgroundColor: "transparent",
      backgroundImage:
        "linear-gradient(135deg, transparent 45%, #ef4444 45%, #ef4444 55%, transparent 55%)",
    };
  let _0xacbe18 =
    _0x1f51ed == null || (_0x142f69 = _0x1f51ed.picture) == null
      ? undefined
      : _0x142f69.source;
  return _0xacbe18 && /^(?:data:|https?:)/["test"](_0xacbe18)
    ? {
        backgroundImage: 'url("' + _0xacbe18 + "\x22)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : _0x1f51ed != null &&
        (_0x37da6f = _0x1f51ed.gradient) != null &&
        (_0x37da6f = _0x37da6f.stops) != null &&
        _0x37da6f.length
      ? { backgroundImage: sn(rn(_0x1f51ed, _0x29cd07)) }
      : {
          backgroundColor:
            (_0x1f51ed == null ? undefined : _0x1f51ed.color) ?? _0x29cd07,
        };
}
function sn(_0x2a2184) {
  let _0x2e829e = _0x2a2184.stops["map"](
    (_0x314288) =>
      cn(_0x314288.color, _0x314288.opacity ?? 1) +
      "\x20" +
      _0x314288.offset +
      "%",
  ).join(",\x20");
  return _0x2a2184.type === "radial" || _0x2a2184.type === "diamond"
    ? "radial-gradient(circle, " + _0x2e829e + ")"
    : "linear-gradient(" +
        (((_0x2a2184.angle ?? 0) + 90) % 360) +
        "deg, " +
        _0x2e829e +
        ")";
}
function cn(_0x2320be, _0x55484b) {
  if (_0x55484b >= 1) return _0x2320be;
  let _0x2416e5 = new i.ColorKit(_0x2320be);
  return _0x2416e5.isValid
    ? _0x2416e5.setAlpha(_0x55484b).toRgbString()
    : _0x2320be;
}
function ln(_0x13f5f9, _0x211931) {
  return _0x13f5f9.some((_0xaf5808) => _0xaf5808.value === _0x211931)
    ? _0x13f5f9
    : [{ label: _0x211931, value: _0x211931 }, ..._0x13f5f9];
}
const un = {
  MergeCells: "merge-cells",
  UnmergeCells: "unmerge-cells",
  SetCellStyle: "set-cell-style",
  SetBorderPreset: "set-border-preset",
};
function dn(_0x3485cb, _0x3424f5) {
  return [
    {
      id: un.MergeCells,
      commandId: _0x3424f5.mergeCells,
      enabled: xn(_0x3485cb),
    },
    {
      id: un.UnmergeCells,
      commandId: _0x3424f5.unmergeCells,
      enabled: bn(_0x3485cb),
    },
    {
      id: un.SetCellStyle,
      commandId: _0x3424f5.setCellStyle,
      enabled: bn(_0x3485cb),
    },
    {
      id: un.SetBorderPreset,
      commandId: _0x3424f5.setBorderPreset,
      enabled: bn(_0x3485cb),
    },
  ];
}
function fn(_0x374a9d) {
  let _0x2fa1fd = U(_0x374a9d);
  return !_0x374a9d || !_0x2fa1fd
    ? null
    : {
        unitId: _0x374a9d.unitId,
        tableId: _0x374a9d.tableId,
        range: _0x2fa1fd,
      };
}
function pn(_0x1f825a) {
  let _0xddf0e0 = U(_0x1f825a);
  return !_0x1f825a || !_0xddf0e0
    ? null
    : {
        unitId: _0x1f825a.unitId,
        tableId: _0x1f825a.tableId,
        range: _0xddf0e0,
      };
}
function mn(_0x38a82e, _0x3612b1, _0x440de1) {
  if (!_0x38a82e || !_0x3612b1) return null;
  if (_0x3612b1.action === "unmerge") {
    let _0x93a536 = pn({
      ..._0x38a82e,
      ranges: [_0x3612b1.range],
      anchor: {
        row: _0x3612b1.range["startRow"],
        column: _0x3612b1.range["startColumn"],
      },
      focus: {
        row: _0x3612b1.range["startRow"],
        column: _0x3612b1.range["startColumn"],
      },
    });
    return _0x93a536
      ? { commandId: _0x440de1.unmergeCells, params: _0x93a536 }
      : null;
  }
  let _0x3e77fe = fn({ ..._0x38a82e, ranges: [_0x3612b1.range] });
  return _0x3e77fe
    ? { commandId: _0x440de1.mergeCells, params: _0x3e77fe }
    : null;
}
function hn(_0xf903e8, _0x4aa52a, _0x2ac507) {
  let _0x1416c0 = U(_0x4aa52a);
  return !_0x4aa52a || !_0x1416c0 || !_0xf903e8
    ? null
    : _0x4aa52a.kind === "row"
      ? _0xf903e8.rows["length"] <= _0x1416c0.endRow - _0x1416c0.startRow + 1
        ? null
        : {
            commandId: _0x2ac507.deleteRows,
            params: {
              unitId: _0x4aa52a.unitId,
              tableId: _0x4aa52a.tableId,
              startRow: _0x1416c0.startRow,
              endRow: _0x1416c0.endRow,
            },
            kind: "row",
          }
      : _0x4aa52a.kind === "column"
        ? _0xf903e8.columns["length"] <=
          _0x1416c0.endColumn - _0x1416c0.startColumn + 1
          ? null
          : {
              commandId: _0x2ac507.deleteColumns,
              params: {
                unitId: _0x4aa52a.unitId,
                tableId: _0x4aa52a.tableId,
                startColumn: _0x1416c0.startColumn,
                endColumn: _0x1416c0.endColumn,
              },
              kind: "column",
            }
        : null;
}
function gn(_0x328696, _0x385344) {
  let _0x54eb2a = U(_0x328696);
  return !_0x328696 || !_0x54eb2a
    ? null
    : {
        unitId: _0x328696.unitId,
        tableId: _0x328696.tableId,
        range: _0x54eb2a,
        style: _0x385344,
      };
}
function _n(_0x5df39b, _0x5aa980, _0x4478df) {
  let _0x4d1f34 = U(_0x5df39b);
  return !_0x5df39b || !_0x4d1f34
    ? null
    : {
        unitId: _0x5df39b.unitId,
        tableId: _0x5df39b.tableId,
        range: _0x4d1f34,
        preset: _0x5aa980,
        ...(_0x4478df ? { border: _0x4478df } : {}),
      };
}
function vn(_0x55b3c4, _0x1cc7ff) {
  let _0x5a4d1e = U(_0x1cc7ff);
  if (!_0x5a4d1e) return null;
  let _0x2a1d51 = _0x55b3c4 ? yn(_0x55b3c4, _0x5a4d1e) : null;
  return _0x2a1d51
    ? { action: "unmerge", range: _0x2a1d51 }
    : (0, n.isSlideTableMultiCellRange)(_0x5a4d1e)
      ? { action: "merge", range: _0x5a4d1e }
      : null;
}
function yn(_0x41249a, _0x86ac4b) {
  let _0xad7b9d = (0, n.normalizeSlideTableCellRange)(_0x86ac4b);
  for (
    let _0x3738a5 = _0xad7b9d.startRow;
    _0x3738a5 <= _0xad7b9d.endRow;
    _0x3738a5 += 1
  )
    for (
      let _0x4ad311 = _0xad7b9d.startColumn;
      _0x4ad311 <= _0xad7b9d.endColumn;
      _0x4ad311 += 1
    ) {
      let _0x575073 = (0, n.findSlideTableMergeRange)(
        _0x41249a,
        _0x3738a5,
        _0x4ad311,
      );
      if (_0x575073 && (0, n.isSlideTableMultiCellRange)(_0x575073))
        return _0x575073;
    }
  return null;
}
function bn(_0x2ab82e) {
  return !!U(_0x2ab82e);
}
function xn(_0x1bded2) {
  let _0x584e14 = U(_0x1bded2);
  return _0x584e14
    ? _0x584e14.startRow !== _0x584e14.endRow ||
        _0x584e14.startColumn !== _0x584e14.endColumn
    : false;
}
function U(_0x4cff8e) {
  return (_0x4cff8e == null ? undefined : _0x4cff8e.ranges[0]) ?? null;
}
function Sn(_0xeb3f8e) {
  return dn(_0xeb3f8e, {
    mergeCells: n.MergeSlideTableCellsCommand["id"],
    unmergeCells: n.UnmergeSlideTableCellsCommand["id"],
    setCellStyle: n.UpdateSlideTableCommand["id"],
    setBorderPreset: n.UpdateSlideTableCommand["id"],
  });
}
function Cn(_0x5ae73d, _0x46e0c5) {
  return {
    actions: Sn(_0x46e0c5),
    mergeState: vn(_0x5ae73d, _0x46e0c5),
    values: Gt(_0x5ae73d, _0x46e0c5 == null ? undefined : _0x46e0c5.ranges[0]),
  };
}
function wn(_0x53fabd, _0x3bba1f, _0x142d85) {
  return !_0x53fabd || !_0x3bba1f || !_0x142d85
    ? null
    : mn(
        _0x53fabd,
        { action: _0x3bba1f, range: _0x142d85 },
        {
          mergeCells: n.MergeSlideTableCellsCommand["id"],
          unmergeCells: n.UnmergeSlideTableCellsCommand["id"],
        },
      );
}
function Tn(_0x70bef, _0x30002c) {
  return hn(_0x70bef, _0x30002c, {
    deleteRows: n.DeleteSlideTableRowsCommand["id"],
    deleteColumns: n.DeleteSlideTableColumnsCommand["id"],
  });
}
function W(_0x5d27eb) {
  let _0x2a5970 = (0, f.useRef)(false),
    _0x3490da = (0, f.useRef)(null),
    _0x15f3f9 = (0, o.useDependency)(E);
  return (
    (0, f.useEffect)(
      () => () => {
        _0x3490da.current && clearTimeout(_0x3490da.current);
      },
      [],
    ),
    _0x5d27eb.children({
      handleOpenChange: (_0x195d90) => {
        (!_0x195d90 && _0x2a5970.current) || _0x5d27eb.onOpenChange(_0x195d90);
      },
      markInternalInteraction: () => {
        (_0x15f3f9.markTableInternalInteraction(),
          (_0x2a5970.current = true),
          _0x3490da.current && clearTimeout(_0x3490da.current),
          (_0x3490da.current = setTimeout(() => {
            ((_0x2a5970.current = false), (_0x3490da.current = null));
          }, 500)));
      },
    })
  );
}
const En = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture",
};
function Dn(_0x23b17d) {
  var _0x639436, _0x1e7881;
  let {
      children: _0x1c79ec,
      color: _0x21ee82,
      gradientValue: _0x4dc227,
      previewStyle: _0x357195,
      showPreview: _0x8d6204 = true,
      tableFill: _0x20314c,
      textFill: _0x4eeca7,
      open: _0x46c7f0,
      value: _0x20ca9d,
      onOpenChange: _0x2cc63b,
      onTableFillChange: _0x2b7b76,
      onTextFillChange: _0x452909,
    } = _0x23b17d,
    _0x286061 = (0, o.useDependency)(i.LocaleService),
    _0x523988 = {
      noFill: _0x286061.t("slides-table-ui.shapePanel.fill.noFill"),
      solidFill: _0x286061.t("slides-table-ui.shapePanel.fill.solidFill"),
      gradientFill: _0x286061.t("slides-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: _0x286061.t("slides-table-ui.shapePanel.fill.pictureFill"),
      color: _0x286061.t("slides-table-ui.shapePanel.fill.color"),
      transparency: _0x286061.t("slides-table-ui.shapePanel.fill.transparency"),
      pictureSource: _0x286061.t(
        "slides-table-ui.shapePanel.fill.picture.source",
      ),
      pictureInsert: _0x286061.t(
        "slides-table-ui.shapePanel.fill.picture.insert",
      ),
    },
    _0x571bb3 =
      (_0x20314c == null || (_0x639436 = _0x20314c.picture) == null
        ? undefined
        : _0x639436.opacity) ??
      (_0x20314c == null ? undefined : _0x20314c.alpha) ??
      (_0x4eeca7 == null || (_0x1e7881 = _0x4eeca7.picture) == null
        ? undefined
        : _0x1e7881.opacity) ??
      (_0x4eeca7 == null ? undefined : _0x4eeca7.opacity) ??
      1,
    _0x5bbdcd = (_0x47eb48) =>
      _0x2b7b76 == null ? undefined : _0x2b7b76(_0x47eb48),
    _0x5f557d = (_0x2a8e36) =>
      _0x452909 == null ? undefined : _0x452909(_0x2a8e36);
  return (0, m.jsx)(W, {
    onOpenChange: _0x2cc63b,
    children: ({
      handleOpenChange: _0x32e63e,
      markInternalInteraction: _0x3c6f34,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        overlay: (0, m.jsx)("div", {
          className: (0, u.clsx)(
            "\n univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-shadow-lg\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n",
            "univer-w-[280px] univer-p-3",
            u.borderClassName,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x4911e2) => {
            (_0x3c6f34(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x4911e2));
          },
          onPointerDown: (_0x3ce251) => {
            (_0x3c6f34(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x3ce251));
          },
          children: (0, m.jsx)(l.FillStyleTabsEditor, {
            compact: true,
            direction: _0x286061.getDirection(),
            keepColorPickerOpenOnChange: true,
            value: _0x20ca9d,
            typeValues: En,
            color: _0x21ee82,
            transparency: Math.round((1 - _0x571bb3) * 100),
            gradientValue: _0x4dc227,
            labels: _0x523988,
            tabLabels: _0x523988,
            onChange: (_0x4865e1) => {
              if (_0x4865e1 === "none")
                (_0x5bbdcd({
                  ..._0x20314c,
                  type: n.SlideTableFillTypeEnum["None"],
                  gradient: undefined,
                  picture: undefined,
                }),
                  _0x5f557d({ ..._0x4eeca7, type: "none" }));
              else {
                if (_0x4865e1 === "solid")
                  (_0x5bbdcd({
                    ..._0x20314c,
                    type: n.SlideTableFillTypeEnum["Solid"],
                    color: _0x21ee82,
                    alpha: _0x571bb3,
                    gradient: undefined,
                    picture: undefined,
                  }),
                    _0x5f557d({
                      ..._0x4eeca7,
                      type: "solid",
                      color: _0x21ee82,
                      opacity: _0x571bb3,
                    }));
                else {
                  if (_0x4865e1 === "gradient")
                    (_0x5bbdcd(an(_0x4dc227)), _0x5f557d(jn(_0x4dc227)));
                  else {
                    if (_0x4865e1 === "picture") {
                      var _0x5df55d, _0x2273c8;
                      (_0x5bbdcd({
                        ..._0x20314c,
                        type: n.SlideTableFillTypeEnum["Picture"],
                        color: _0x21ee82,
                        alpha: _0x571bb3,
                        gradient: undefined,
                        picture: {
                          ...(_0x20314c == null
                            ? undefined
                            : _0x20314c.picture),
                          opacity: _0x571bb3,
                          mode:
                            (_0x20314c == null ||
                            (_0x5df55d = _0x20314c.picture) == null
                              ? undefined
                              : _0x5df55d.mode) ??
                            n.SlideTablePictureFillModeEnum["Stretch"],
                        },
                      }),
                        _0x5f557d({
                          ..._0x4eeca7,
                          type: "picture",
                          color: _0x21ee82,
                          opacity: _0x571bb3,
                          picture: {
                            ...(_0x4eeca7 == null
                              ? undefined
                              : _0x4eeca7.picture),
                            opacity: _0x571bb3,
                            mode:
                              (_0x4eeca7 == null ||
                              (_0x2273c8 = _0x4eeca7.picture) == null
                                ? undefined
                                : _0x2273c8.mode) ??
                              n.SlideTablePictureFillModeEnum["Stretch"],
                          },
                        }));
                    }
                  }
                }
              }
            },
            onColorChange: (_0x1dcc6d) => {
              (_0x5bbdcd({
                ..._0x20314c,
                type: n.SlideTableFillTypeEnum["Solid"],
                color: _0x1dcc6d,
                alpha: _0x571bb3,
                gradient: undefined,
                picture: undefined,
              }),
                _0x5f557d({
                  ..._0x4eeca7,
                  type: "solid",
                  color: _0x1dcc6d,
                  opacity: _0x571bb3,
                }));
            },
            onTransparencyChange: (_0x3d54e0) => {
              let _0x1fe56d =
                (100 - Math.max(0, Math.min(100, _0x3d54e0))) / 100;
              if (_0x20ca9d === "picture") {
                var _0xba40d8, _0xd6d0e2;
                (_0x5bbdcd({
                  ..._0x20314c,
                  type: n.SlideTableFillTypeEnum["Picture"],
                  picture: {
                    ...(_0x20314c == null ? undefined : _0x20314c.picture),
                    opacity: _0x1fe56d,
                    mode:
                      (_0x20314c == null ||
                      (_0xba40d8 = _0x20314c.picture) == null
                        ? undefined
                        : _0xba40d8.mode) ??
                      n.SlideTablePictureFillModeEnum["Stretch"],
                  },
                }),
                  _0x5f557d({
                    ..._0x4eeca7,
                    type: "picture",
                    picture: {
                      ...(_0x4eeca7 == null ? undefined : _0x4eeca7.picture),
                      opacity: _0x1fe56d,
                      mode:
                        (_0x4eeca7 == null ||
                        (_0xd6d0e2 = _0x4eeca7.picture) == null
                          ? undefined
                          : _0xd6d0e2.mode) ?? "stretch",
                    },
                  }));
                return;
              }
              (_0x5bbdcd({
                ..._0x20314c,
                type: n.SlideTableFillTypeEnum["Solid"],
                color: _0x21ee82,
                alpha: _0x1fe56d,
                gradient: undefined,
                picture: undefined,
              }),
                _0x5f557d({
                  ..._0x4eeca7,
                  type: "solid",
                  color: _0x21ee82,
                  opacity: _0x1fe56d,
                }));
            },
            onGradientChange: (_0x5e0435) => {
              (_0x5bbdcd(an(_0x5e0435)), _0x5f557d(jn(_0x5e0435)));
            },
            pictureFillEditor: _0x2b7b76
              ? (0, m.jsx)(On, {
                  fill: _0x20314c,
                  labels: _0x523988,
                  onChange: _0x5bbdcd,
                })
              : (0, m.jsx)(kn, {
                  fallbackColor: _0x21ee82,
                  fill: _0x4eeca7,
                  labels: _0x523988,
                  onChange: _0x5f557d,
                }),
          }),
        }),
        open: _0x46c7f0,
        onOpenChange: _0x32e63e,
        children: (0, m.jsx)("span", {
          children: (0, m.jsx)(u.Tooltip, {
            title:
              _0x23b17d.label ??
              _0x286061.t("slides-table-ui.editorToolbar.tableBackgroundColor"),
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0x46c7f0,
              "aria-label":
                _0x23b17d.label ??
                _0x286061.t(
                  "slides-table-ui.editorToolbar.tableBackgroundColor",
                ),
              className: (0, u.clsx)({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x46c7f0,
              }),
              title:
                _0x23b17d.label ??
                _0x286061.t(
                  "slides-table-ui.editorToolbar.tableBackgroundColor",
                ),
              type: "button",
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                _0x23b17d.mixed
                  ? (0, m.jsx)("span", { "aria-hidden": "true", children: "—" })
                  : _0x1c79ec,
                _0x23b17d.label &&
                  (0, m.jsx)("span", {
                    className:
                      "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-left\x20rtl:univer-text-right",
                    children: _0x23b17d.label,
                  }),
                _0x8d6204 && !_0x23b17d.mixed
                  ? (0, m.jsx)("span", {
                      className:
                        "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                      style: _0x357195,
                    })
                  : null,
                (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function On(_0x3d4026) {
  let { fill: _0x370241, labels: _0x269f0d, onChange: _0x480d1f } = _0x3d4026,
    _0x3419ac = (0, o.useDependency)(i.IImageIoService),
    _0x13e7f4 = (0, f.useRef)(null),
    _0x52a9c2 = _0x370241 == null ? undefined : _0x370241.picture,
    _0x6776a5 =
      (_0x52a9c2 == null ? undefined : _0x52a9c2.opacity) ??
      (_0x370241 == null ? undefined : _0x370241.alpha) ??
      1,
    _0x2ae2f5 =
      _0x52a9c2 != null &&
      _0x52a9c2.source &&
      /^(?:data:|https?:)/["test"](_0x52a9c2.source)
        ? _0x52a9c2.source
        : undefined;
  return (0, m.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      (0, m.jsxs)("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-3",
        children: [
          (0, m.jsx)("span", {
            className:
              "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
            children: _0x269f0d.pictureSource,
          }),
          (0, m.jsx)("input", {
            ref: _0x13e7f4,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x3788e5) => {
              var _0xc70be5;
              let _0x56c5e0 =
                (_0xc70be5 = _0x3788e5.target["files"]) == null
                  ? undefined
                  : _0xc70be5[0];
              if (!_0x56c5e0) return;
              _0x3788e5.target["value"] = "";
              let _0x353055 = await _0x3419ac.saveImage(_0x56c5e0);
              if (_0x353055 == null) return;
              let {
                imageSourceType: _0x1b714a,
                source: _0x3960fb,
                base64Cache: _0x23c380,
              } = _0x353055;
              if (_0x23c380) {
                let { image: _0x21cfd2 } = await (0, p.getImageSize)(_0x23c380);
                _0x3419ac.addImageSourceCache(_0x3960fb, _0x1b714a, _0x21cfd2);
              }
              _0x480d1f({
                ..._0x370241,
                type: n.SlideTableFillTypeEnum["Picture"],
                gradient: undefined,
                picture: {
                  ..._0x52a9c2,
                  source: _0x3960fb,
                  sourceType: _0x1b714a,
                  opacity: _0x6776a5,
                  mode:
                    (_0x52a9c2 == null ? undefined : _0x52a9c2.mode) ??
                    n.SlideTablePictureFillModeEnum["Stretch"],
                },
              });
            },
          }),
          (0, m.jsx)(u.Button, {
            size: "small",
            type: "button",
            onClick: () => {
              var _0x187acb;
              return (_0x187acb = _0x13e7f4.current) == null
                ? undefined
                : _0x187acb.click();
            },
            children: _0x269f0d.pictureInsert,
          }),
        ],
      }),
      _0x2ae2f5 &&
        (0, m.jsx)("img", {
          src: _0x2ae2f5,
          alt: "",
          className:
            "univer-h-14 univer-w-full univer-rounded univer-object-cover",
        }),
      (0, m.jsx)(An, {
        label: _0x269f0d.transparency,
        opacity: _0x6776a5,
        onChange: (_0x2d393a) =>
          _0x480d1f({
            ..._0x370241,
            picture: {
              ..._0x52a9c2,
              opacity: _0x2d393a,
              mode:
                (_0x52a9c2 == null ? undefined : _0x52a9c2.mode) ??
                n.SlideTablePictureFillModeEnum["Stretch"],
            },
          }),
      }),
    ],
  });
}
function kn(_0x3f8dd1) {
  let {
      fallbackColor: _0x23d78c,
      fill: _0x2dd637,
      labels: _0x3ef362,
      onChange: _0x37678c,
    } = _0x3f8dd1,
    _0x2746ba = (0, o.useDependency)(i.IImageIoService),
    _0x49e703 = (0, f.useRef)(null),
    _0x5d8831 = _0x2dd637 == null ? undefined : _0x2dd637.picture,
    _0x4d64f9 =
      (_0x5d8831 == null ? undefined : _0x5d8831.opacity) ??
      (_0x2dd637 == null ? undefined : _0x2dd637.opacity) ??
      1,
    _0x12e089 =
      _0x5d8831 != null &&
      _0x5d8831.source &&
      /^(?:data:|https?:)/["test"](_0x5d8831.source)
        ? _0x5d8831.source
        : undefined;
  return (0, m.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      (0, m.jsxs)("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-3",
        children: [
          (0, m.jsx)("span", {
            className:
              "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x3ef362.pictureSource,
          }),
          (0, m.jsx)("input", {
            ref: _0x49e703,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x36f824) => {
              var _0x240f47;
              let _0x470055 =
                (_0x240f47 = _0x36f824.target["files"]) == null
                  ? undefined
                  : _0x240f47[0];
              if (!_0x470055) return;
              _0x36f824.target["value"] = "";
              let _0x1ad4d7 = await _0x2746ba.saveImage(_0x470055);
              if (_0x1ad4d7 == null) return;
              let {
                imageSourceType: _0x15e1b3,
                source: _0x3fcb08,
                base64Cache: _0x2ff999,
              } = _0x1ad4d7;
              _0x37678c({
                ..._0x2dd637,
                type: "picture",
                color:
                  (_0x2dd637 == null ? undefined : _0x2dd637.color) ??
                  _0x23d78c,
                picture: {
                  ..._0x5d8831,
                  source: _0x2ff999 || _0x3fcb08,
                  sourceType: _0x15e1b3,
                  opacity: _0x4d64f9,
                  mode:
                    (_0x5d8831 == null ? undefined : _0x5d8831.mode) ??
                    "stretch",
                },
              });
            },
          }),
          (0, m.jsx)(u.Button, {
            size: "small",
            type: "button",
            onClick: () => {
              var _0x34689c;
              return (_0x34689c = _0x49e703.current) == null
                ? undefined
                : _0x34689c.click();
            },
            children: _0x3ef362.pictureInsert,
          }),
        ],
      }),
      _0x12e089 &&
        (0, m.jsx)("img", {
          src: _0x12e089,
          alt: "",
          className:
            "univer-h-14 univer-w-full univer-rounded univer-object-cover",
        }),
      (0, m.jsx)(An, {
        label: _0x3ef362.transparency,
        opacity: _0x4d64f9,
        onChange: (_0x7e563b) =>
          _0x37678c({
            ..._0x2dd637,
            type: "picture",
            color:
              (_0x2dd637 == null ? undefined : _0x2dd637.color) ?? _0x23d78c,
            picture: {
              ..._0x5d8831,
              opacity: _0x7e563b,
              mode:
                (_0x5d8831 == null ? undefined : _0x5d8831.mode) ?? "stretch",
            },
          }),
      }),
    ],
  });
}
function An(_0x470086) {
  return (0, m.jsxs)("div", {
    className:
      "univer-flex univer-items-center univer-justify-between univer-gap-3",
    children: [
      (0, m.jsx)("span", {
        className:
          "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
        children: _0x470086.label,
      }),
      (0, m.jsx)("div", {
        className: "univer-w-20",
        children: (0, m.jsx)(u.InputNumber, {
          className: "univer-w-full",
          value: Math.round((1 - _0x470086.opacity) * 100),
          min: 0,
          max: 100,
          step: 10,
          formatter: (_0x138fe3) => _0x138fe3 + "%",
          parser: (_0x2f3b5c) =>
            (_0x2f3b5c == null ? undefined : _0x2f3b5c.replace("%", "")) || "",
          onChange: (_0x7f5824) => {
            let _0x378b19 = Math.max(0, Math.min(100, _0x7f5824 ?? 0));
            _0x470086.onChange((100 - _0x378b19) / 100);
          },
        }),
      }),
    ],
  });
}
function jn(_0x2afe56) {
  var _0x3d8d7f;
  return {
    type: "gradient",
    color:
      ((_0x3d8d7f = _0x2afe56.stops[0]) == null
        ? undefined
        : _0x3d8d7f.color) ?? "#111827",
    gradient: {
      type: _0x2afe56.type,
      angle: _0x2afe56.angle,
      stops: _0x2afe56.stops["map"]((_0x56a640) => ({
        offset: _0x56a640.offset,
        color: _0x56a640.color,
        opacity: _0x56a640.opacity,
      })),
    },
  };
}
const Mn = o.FONT_SIZE_LIST["map"]((_0x4fa9b0) => ({
    label: _0x4fa9b0.label,
    value: String(_0x4fa9b0.value),
  })),
  Nn = [0, 1, 2, 3, 4, 6],
  Pn = [
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleSolid",
      value: n.SlideTableBorderDashEnum["Solid"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDash",
      value: n.SlideTableBorderDashEnum["Dash"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDot",
      value: n.SlideTableBorderDashEnum["Dot"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDashDot",
      value: n.SlideTableBorderDashEnum["DashDot"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.noBorder",
      value: n.SlideTableBorderDashEnum["None"],
    },
  ],
  Fn = [
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetAll",
      preset: n.SlideTableBorderPresetEnum["All"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInner",
      preset: n.SlideTableBorderPresetEnum["Inner"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetOuter",
      preset: n.SlideTableBorderPresetEnum["Outer"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetTop",
      preset: n.SlideTableBorderPresetEnum["Top"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetBottom",
      preset: n.SlideTableBorderPresetEnum["Bottom"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetLeft",
      preset: n.SlideTableBorderPresetEnum["Left"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetRight",
      preset: n.SlideTableBorderPresetEnum["Right"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInnerHorizontal",
      preset: n.SlideTableBorderPresetEnum["InnerHorizontal"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInnerVertical",
      preset: n.SlideTableBorderPresetEnum["InnerVertical"],
    },
    {
      labelKey: "slides-table-ui.editorToolbar.noBorder",
      preset: n.SlideTableBorderPresetEnum["None"],
    },
  ],
  In = {
    [n.SlideTableBorderPresetEnum["All"]]: c.AllBorderIcon,
    [n.SlideTableBorderPresetEnum["Inner"]]: c.InnerBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["Outer"]]: c.OuterBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["Top"]]: c.UpBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["Bottom"]]: c.DownBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["Left"]]: c.LeftBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["Right"]]: c.RightBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["InnerHorizontal"]]:
      c.HorizontalBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["InnerVertical"]]: c.VerticalBorderDoubleIcon,
    [n.SlideTableBorderPresetEnum["None"]]: c.NoBorderIcon,
  },
  Ln = { colorChannel1: "#9ca3af" },
  Rn =
    "\n univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-shadow-lg\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n";
function zn(_0x3a88d5) {
  return (0, m.jsx)("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0x3a88d5.children,
  });
}
function Bn(_0x2ffd44) {
  return (0, m.jsx)(u.Tooltip, {
    title: _0x2ffd44.title,
    placement: "bottom",
    children: (0, m.jsx)("span", {
      children: (0, m.jsx)(u.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": _0x2ffd44["data-toolbar-item"],
        "aria-label": _0x2ffd44.title,
        title: _0x2ffd44.title,
        onClick: (_0x17c746) => {
          (_0x17c746.preventDefault(), _0x2ffd44.onClick());
        },
        onMouseDown: l.keepFloatingToolbarPanelInteraction,
        onPointerDown: l.keepFloatingToolbarPanelInteraction,
        children: _0x2ffd44.children,
      }),
    }),
  });
}
function Vn(_0x1614c3) {
  return (0, m.jsx)(u.Tooltip, {
    title: _0x1614c3.title,
    placement: "bottom",
    children: (0, m.jsx)(u.Button, {
      size: "small",
      variant: "ghost",
      type: "button",
      "aria-label": _0x1614c3.title,
      className: (0, u.clsx)({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0x1614c3.active,
      }),
      onClick: (_0x124fc2) => {
        (_0x124fc2.preventDefault(), _0x1614c3.onClick());
      },
      onMouseDown: l.keepFloatingToolbarPanelInteraction,
      onPointerDown: l.keepFloatingToolbarPanelInteraction,
      children: _0x1614c3.children,
    }),
  });
}
function Hn(_0x37eb5a) {
  let _0x33d2b1 = (0, o.useDependency)(i.LocaleService);
  return (0, m.jsx)(W, {
    onOpenChange: _0x37eb5a.onOpenChange,
    children: ({
      handleOpenChange: _0x873ef5,
      markInternalInteraction: _0x357999,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        open: _0x37eb5a.open,
        onOpenChange: _0x873ef5,
        overlay: (0, m.jsxs)("section", {
          className: (0, u.clsx)(
            Rn,
            "univer-grid\x20univer-gap-2\x20univer-p-2",
            u.borderClassName,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x436fe1) => {
            (_0x357999(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x436fe1));
          },
          onPointerDown: (_0x136a65) => {
            (_0x357999(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x136a65));
          },
          children: [
            (0, m.jsxs)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                (0, m.jsx)(Vn, {
                  active:
                    !_0x37eb5a.values["mixed"].bold && _0x37eb5a.values["bold"],
                  title: _0x33d2b1.t("slides-table-ui.editorToolbar.bold"),
                  onClick: () =>
                    _0x37eb5a.onToggleStyle({
                      bl:
                        _0x37eb5a.values["mixed"].bold ||
                        !_0x37eb5a.values["bold"]
                          ? i.BooleanNumber["TRUE"]
                          : i.BooleanNumber["FALSE"],
                    }),
                  children: (0, m.jsx)(c.BoldIcon, {}),
                }),
                (0, m.jsx)(Vn, {
                  active:
                    !_0x37eb5a.values["mixed"].italic &&
                    _0x37eb5a.values["italic"],
                  title: _0x33d2b1.t("slides-table-ui.editorToolbar.italic"),
                  onClick: () =>
                    _0x37eb5a.onToggleStyle({
                      it:
                        _0x37eb5a.values["mixed"].italic ||
                        !_0x37eb5a.values["italic"]
                          ? i.BooleanNumber["TRUE"]
                          : i.BooleanNumber["FALSE"],
                    }),
                  children: (0, m.jsx)(c.ItalicIcon, {}),
                }),
                (0, m.jsx)(Vn, {
                  active:
                    !_0x37eb5a.values["mixed"].underline &&
                    _0x37eb5a.values["underline"],
                  title: _0x33d2b1.t("slides-table-ui.editorToolbar.underline"),
                  onClick: () =>
                    _0x37eb5a.onToggleStyle({
                      ul: {
                        s:
                          _0x37eb5a.values["mixed"].underline ||
                          !_0x37eb5a.values["underline"]
                            ? i.BooleanNumber["TRUE"]
                            : i.BooleanNumber["FALSE"],
                      },
                    }),
                  children: (0, m.jsx)(c.UnderlineIcon, {}),
                }),
                (0, m.jsx)(Vn, {
                  active:
                    !_0x37eb5a.values["mixed"].strike &&
                    _0x37eb5a.values["strike"],
                  title: _0x33d2b1.t(
                    "slides-table-ui.editorToolbar.strikethrough",
                  ),
                  onClick: () =>
                    _0x37eb5a.onToggleStyle({
                      st: {
                        s:
                          _0x37eb5a.values["mixed"].strike ||
                          !_0x37eb5a.values["strike"]
                            ? i.BooleanNumber["TRUE"]
                            : i.BooleanNumber["FALSE"],
                      },
                    }),
                  children: (0, m.jsx)(c.StrikethroughIcon, {}),
                }),
              ],
            }),
            (0, m.jsx)(u.Separator, {}),
            (0, m.jsx)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: _0x37eb5a.horizontalAlignOptions["map"]((_0x1a8d7c) =>
                (0, m.jsx)(
                  Vn,
                  {
                    active:
                      !_0x37eb5a.values["mixed"].horizontalAlign &&
                      _0x37eb5a.values["horizontalAlign"] === _0x1a8d7c.value,
                    title: _0x33d2b1.t(_0x1a8d7c.labelKey),
                    onClick: () => _0x37eb5a.onHorizontalAlign(_0x1a8d7c.value),
                    children: _0x1a8d7c.icon,
                  },
                  _0x1a8d7c.value,
                ),
              ),
            }),
            (0, m.jsx)(u.Separator, {}),
            (0, m.jsx)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: _0x37eb5a.verticalAlignOptions["map"]((_0x59e0a1) =>
                (0, m.jsx)(
                  Vn,
                  {
                    active:
                      !_0x37eb5a.values["mixed"].verticalAlign &&
                      _0x37eb5a.values["verticalAlign"] === _0x59e0a1.value,
                    title: _0x33d2b1.t(_0x59e0a1.labelKey),
                    onClick: () => _0x37eb5a.onVerticalAlign(_0x59e0a1.value),
                    children: _0x59e0a1.icon,
                  },
                  _0x59e0a1.value,
                ),
              ),
            }),
          ],
        }),
        children: (0, m.jsx)("span", {
          children: (0, m.jsx)(u.Tooltip, {
            title: _0x33d2b1.t("slides-table-ui.editorToolbar.textFormat"),
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              type: "button",
              "aria-expanded": _0x37eb5a.open,
              "aria-label": _0x33d2b1.t(
                "slides-table-ui.editorToolbar.textFormat",
              ),
              className: (0, u.clsx)({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x37eb5a.open,
              }),
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                (0, m.jsx)(c.TextIcon, {}),
                (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Un(_0x3a5b66) {
  let _0x162e83 = (0, o.useDependency)(i.LocaleService);
  return (0, m.jsx)(W, {
    onOpenChange: _0x3a5b66.onOpenChange,
    children: ({
      handleOpenChange: _0x5207bf,
      markInternalInteraction: _0x16f252,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        open: _0x3a5b66.open,
        onOpenChange: _0x5207bf,
        overlay: (0, m.jsx)("section", {
          className: (0, u.clsx)(Rn, u.borderClassName),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x13abfc) => {
            (_0x16f252(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x13abfc));
          },
          onPointerDown: (_0x30ee7c) => {
            (_0x16f252(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x30ee7c));
          },
          children: _0x3a5b66.children,
        }),
        children: (0, m.jsx)("span", {
          className: (0, u.clsx)({
            "[&>span]:univer-h-full\x20[&>span]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full":
              _0x3a5b66.ribbon,
          }),
          children: (0, m.jsx)(u.Tooltip, {
            title:
              _0x3a5b66.label ??
              _0x162e83.t("slides-table-ui.editorToolbar.tableTheme"),
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              type: "button",
              "data-toolbar-item": "table-theme",
              "aria-expanded": _0x3a5b66.open,
              "aria-label":
                _0x3a5b66.label ??
                _0x162e83.t("slides-table-ui.editorToolbar.tableTheme"),
              title:
                _0x3a5b66.label ??
                _0x162e83.t("slides-table-ui.editorToolbar.tableTheme"),
              className: (0, u.clsx)({
                "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-min-w-28\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-col\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-1\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-px-1.5\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-py-1":
                  _0x3a5b66.ribbon,
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x3a5b66.open,
              }),
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                (0, m.jsx)("span", {
                  className: (0, u.clsx)(
                    "univer-flex univer-items-center univer-justify-center",
                    {
                      "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-3xl":
                        _0x3a5b66.ribbon,
                    },
                  ),
                  children:
                    _0x3a5b66.icon ?? (0, m.jsx)(c.PaintBucketDoubleIcon, {}),
                }),
                (0, m.jsxs)("span", {
                  className: (0, u.clsx)(
                    "univer-flex univer-min-w-0 univer-items-center univer-gap-0.5",
                    {
                      "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-justify-center":
                        _0x3a5b66.ribbon,
                    },
                  ),
                  children: [
                    _0x3a5b66.label &&
                      (0, m.jsx)("span", {
                        className: (0, u.clsx)(
                          "univer-min-w-0 univer-flex-1 univer-truncate univer-text-left rtl:univer-text-right",
                          {
                            "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-none\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-xs":
                              _0x3a5b66.ribbon,
                          },
                        ),
                        children: _0x3a5b66.label,
                      }),
                    (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Wn(_0x25a632) {
  let _0x103147 = (0, o.useDependency)(i.LocaleService),
    _0x441fc8 =
      Pn.find((_0x45bb7f) => _0x45bb7f.value === _0x25a632.dash) ?? Pn[0];
  return (0, m.jsx)(W, {
    onOpenChange: _0x25a632.onOpenChange,
    children: ({
      handleOpenChange: _0x46d05b,
      markInternalInteraction: _0x1c0318,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        open: _0x25a632.open,
        onOpenChange: _0x46d05b,
        overlay: (0, m.jsxs)("section", {
          className: (0, u.clsx)(
            Rn,
            "univer-grid univer-gap-2 univer-p-2",
            u.borderClassName,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          dir: _0x25a632.direction,
          onMouseDown: (_0x1be621) => {
            (_0x1c0318(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x1be621));
          },
          onPointerDown: (_0x5ede3b) => {
            (_0x1c0318(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x5ede3b));
          },
          children: [
            (0, m.jsx)("div", {
              className: "univer-grid\x20univer-grid-cols-5\x20univer-gap-1",
              children: _0x25a632.presets["map"](
                ({ labelKey: _0x1b8ab5, preset: _0x27fca5 }) => {
                  let _0x3451d0 = In[_0x27fca5];
                  return (0, m.jsx)(
                    u.Tooltip,
                    {
                      title: _0x103147.t(_0x1b8ab5),
                      placement: "bottom",
                      children: (0, m.jsx)(u.Button, {
                        size: "icon",
                        variant: "ghost",
                        type: "button",
                        "aria-label": _0x103147.t(_0x1b8ab5),
                        onClick: () => {
                          (_0x25a632.onSelectPreset(_0x27fca5),
                            _0x25a632.onOpenChange(false));
                        },
                        onMouseDown: l.keepFloatingToolbarPanelInteraction,
                        onPointerDown: l.keepFloatingToolbarPanelInteraction,
                        children: (0, m.jsx)(_0x3451d0, {
                          className: "univer-size-4 univer-text-current",
                          extend: Ln,
                        }),
                      }),
                    },
                    _0x27fca5,
                  );
                },
              ),
            }),
            (0, m.jsx)(u.Separator, {}),
            (0, m.jsxs)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                (0, m.jsx)(Gn, {
                  title: _0x103147.t(
                    "slides-table-ui.editorToolbar.tableBorderColor",
                  ),
                  direction: _0x25a632.direction,
                  color: _0x25a632.color,
                  onChange: _0x25a632.onChangeColor,
                  children: (0, m.jsx)(c.PaintBucketDoubleIcon, {
                    extend: { colorChannel1: _0x25a632.color },
                  }),
                }),
                (0, m.jsx)(qn, {
                  title: _0x103147.t(
                    "slides-table-ui.editorToolbar.borderWidth",
                  ),
                  direction: _0x25a632.direction,
                  value: String(_0x25a632.width),
                  options: Nn.map((_0x5f17b4) => ({
                    label:
                      _0x5f17b4 === 0
                        ? _0x103147.t("slides-table-ui.editorToolbar.noBorder")
                        : _0x5f17b4 + "px",
                    value: String(_0x5f17b4),
                    icon: (0, m.jsx)("span", {
                      className:
                        "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                      style: { height: Math.max(1, _0x5f17b4 || 1) },
                    }),
                  })),
                  onChange: (_0x173964) =>
                    _0x25a632.onChangeWidth(Number(_0x173964)),
                  children: (0, m.jsxs)("span", {
                    className: "univer-text-xs",
                    children: [_0x25a632.width, "px"],
                  }),
                }),
                (0, m.jsx)(qn, {
                  title: _0x103147.t(
                    "slides-table-ui.editorToolbar.borderStyle",
                  ),
                  direction: _0x25a632.direction,
                  value: _0x25a632.dash,
                  options: Pn.map((_0x45d177) => ({
                    label: _0x103147.t(_0x45d177.labelKey),
                    value: _0x45d177.value,
                    icon: (0, m.jsx)(Yn, { dash: _0x45d177.value }),
                  })),
                  onChange: _0x25a632.onChangeDash,
                  children: _0x441fc8
                    ? (0, m.jsx)(Yn, { dash: _0x441fc8.value })
                    : (0, m.jsx)(c.AllBorderIcon, {}),
                }),
              ],
            }),
          ],
        }),
        children: (0, m.jsx)("span", {
          children: (0, m.jsx)(u.Tooltip, {
            title:
              _0x25a632.label ??
              _0x103147.t("slides-table-ui.editorToolbar.border"),
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              type: "button",
              "aria-expanded": _0x25a632.open,
              "aria-label":
                _0x25a632.label ??
                _0x103147.t("slides-table-ui.editorToolbar.border"),
              title:
                _0x25a632.label ??
                _0x103147.t("slides-table-ui.editorToolbar.border"),
              className: (0, u.clsx)({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x25a632.open,
              }),
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                _0x25a632.mixed
                  ? (0, m.jsx)("span", { "aria-hidden": "true", children: "—" })
                  : (0, m.jsx)(c.AllBorderIcon, {}),
                _0x25a632.label &&
                  (0, m.jsx)("span", {
                    className:
                      "univer-min-w-0 univer-flex-1 univer-truncate univer-text-left rtl:univer-text-right",
                    children: _0x25a632.label,
                  }),
                (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Gn(_0x49eac1) {
  let {
      children: _0x4892ed,
      color: _0x36021e,
      onChange: _0x3f4248,
    } = _0x49eac1,
    [_0x442c87, _0x592c87] = (0, f.useState)(false),
    _0x218bdf = _0x49eac1.open ?? _0x442c87;
  return (0, m.jsx)(W, {
    onOpenChange: _0x49eac1.onOpenChange ?? _0x592c87,
    children: ({
      handleOpenChange: _0x5c9c87,
      markInternalInteraction: _0x45a4c,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        overlay: (0, m.jsx)("div", {
          className: (0, u.clsx)(Rn, "univer-p-3", u.borderClassName),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          dir: _0x49eac1.direction,
          onMouseDown: (_0x5c5e1e) => {
            (_0x45a4c(), (0, l.keepFloatingToolbarPanelInteraction)(_0x5c5e1e));
          },
          onPointerDown: (_0x426183) => {
            (_0x45a4c(), (0, l.keepFloatingToolbarPanelInteraction)(_0x426183));
          },
          children: (0, m.jsx)(u.ColorPicker, {
            value: _0x36021e,
            onChange: _0x3f4248,
          }),
        }),
        open: _0x218bdf,
        onOpenChange: _0x5c9c87,
        children: (0, m.jsx)("span", {
          children: (0, m.jsx)(u.Tooltip, {
            title: _0x49eac1.title,
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0x218bdf,
              "aria-label": _0x49eac1.title,
              className: (0, u.clsx)({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x218bdf,
              }),
              title: _0x49eac1.title,
              type: "button",
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                _0x4892ed,
                (0, m.jsx)("span", {
                  className:
                    "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                  style: { backgroundColor: _0x36021e },
                }),
                (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Kn(_0x2e4bee) {
  return (0, m.jsx)(W, {
    onOpenChange: _0x2e4bee.onOpenChange,
    children: ({
      handleOpenChange: _0x4e5e06,
      markInternalInteraction: _0x592e6b,
    }) =>
      (0, m.jsx)(u.Dropdown, {
        open: _0x2e4bee.open,
        onOpenChange: _0x4e5e06,
        overlay: (0, m.jsx)("div", {
          className: (0, u.clsx)(Rn, "univer-p-3", u.borderClassName),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x11a5c3) => {
            (_0x592e6b(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x11a5c3));
          },
          onPointerDown: (_0x43e4b6) => {
            (_0x592e6b(),
              (0, l.keepFloatingToolbarPanelInteraction)(_0x43e4b6));
          },
          children: (0, m.jsx)(u.ColorPicker, {
            value: _0x2e4bee.color,
            onChange: _0x2e4bee.onChange,
          }),
        }),
        children: (0, m.jsx)("span", {
          children: (0, m.jsx)(u.Tooltip, {
            title: _0x2e4bee.title,
            placement: "bottom",
            children: (0, m.jsxs)(u.Button, {
              size: "small",
              variant: "ghost",
              type: "button",
              "data-toolbar-item": _0x2e4bee["data-toolbar-item"],
              "aria-expanded": _0x2e4bee.open,
              "aria-label": _0x2e4bee.title,
              className: (0, u.clsx)({
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0x2e4bee.open,
              }),
              onMouseDown: l.keepFloatingToolbarPanelInteraction,
              onPointerDown: l.keepFloatingToolbarPanelInteraction,
              children: [
                _0x2e4bee.mixed
                  ? (0, m.jsx)("span", { "aria-hidden": "true", children: "—" })
                  : _0x2e4bee.icon === "font"
                    ? (0, m.jsx)(c.FontColorDoubleIcon, {
                        className: "univer-fill-primary-600",
                        extend: { colorChannel1: _0x2e4bee.color },
                      })
                    : (0, m.jsx)(c.PaintBucketDoubleIcon, {
                        className: "univer-fill-primary-600",
                        extend: { colorChannel1: "var(--univer-primary-600)" },
                      }),
                (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function qn(_0x3dd8cb) {
  let {
      children: _0xcd8294,
      direction: _0x4da7f8,
      title: _0x435bc4,
      value: _0x4bb3b3,
      open: _0x5cf673,
      options: _0x2b75be,
      onChange: _0x256e5c,
      onOpenChange: _0x46a840,
    } = _0x3dd8cb,
    [_0x2d67a5, _0x35e714] = (0, f.useState)(false),
    _0x2b4a30 = _0x5cf673 ?? _0x2d67a5,
    _0xe89746 = _0x46a840 ?? _0x35e714,
    _0x14d5f7 =
      _0x2b75be.find((_0x2150cb) => _0x2150cb.value === _0x4bb3b3) ??
      _0x2b75be[0];
  return _0x14d5f7
    ? (0, m.jsx)(W, {
        onOpenChange: _0xe89746,
        children: ({
          handleOpenChange: _0xa660b,
          markInternalInteraction: _0xe44065,
        }) =>
          (0, m.jsx)(u.Dropdown, {
            open: _0x2b4a30,
            onOpenChange: _0xa660b,
            overlay: (0, m.jsx)("div", {
              className: (0, u.clsx)(
                Rn,
                "univer-min-w-32\x20univer-p-1",
                u.borderClassName,
              ),
              dir: _0x4da7f8,
              onMouseDown: (_0x19bae7) => {
                (_0xe44065(),
                  (0, l.keepFloatingToolbarPanelInteraction)(_0x19bae7));
              },
              onPointerDown: (_0x12b375) => {
                (_0xe44065(),
                  (0, l.keepFloatingToolbarPanelInteraction)(_0x12b375));
              },
              children: _0x2b75be.map((_0x5855e1) =>
                (0, m.jsxs)(
                  u.Button,
                  {
                    size: "middle",
                    variant: "ghost",
                    type: "button",
                    onClick: () => {
                      (_0x256e5c(_0x5855e1.value), _0xe89746(false));
                    },
                    onMouseDown: l.keepFloatingToolbarPanelInteraction,
                    onPointerDown: l.keepFloatingToolbarPanelInteraction,
                    className: (0, u.clsx)(
                      "univer-w-full univer-justify-start rtl:univer-justify-end",
                      {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x5855e1.value === _0x4bb3b3,
                      },
                    ),
                    children: [
                      (0, m.jsx)("span", {
                        className:
                          "univer-flex univer-size-4 univer-items-center univer-justify-center",
                        children: _0x5855e1.icon,
                      }),
                      (0, m.jsx)("span", {
                        className: "univer-flex-1",
                        children: _0x5855e1.label,
                      }),
                    ],
                  },
                  _0x5855e1.value,
                ),
              ),
            }),
            children: (0, m.jsx)("span", {
              children: (0, m.jsx)(u.Tooltip, {
                title: _0x435bc4,
                placement: "bottom",
                children: (0, m.jsxs)(u.Button, {
                  size: "small",
                  variant: "ghost",
                  type: "button",
                  "aria-expanded": _0x2b4a30,
                  "aria-label": _0x435bc4,
                  title: _0x435bc4,
                  className: (0, u.clsx)({
                    "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                      _0x2b4a30,
                  }),
                  onMouseDown: l.keepFloatingToolbarPanelInteraction,
                  onPointerDown: l.keepFloatingToolbarPanelInteraction,
                  children: [
                    _0xcd8294 ?? _0x14d5f7.icon,
                    (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
                  ],
                }),
              }),
            }),
          }),
      })
    : null;
}
function Jn(_0x37eed1) {
  return (0, m.jsx)(u.Tooltip, {
    title: _0x37eed1.title,
    placement: "bottom",
    children: (0, m.jsx)("span", {
      onMouseDown: l.keepFloatingToolbarPanelInteraction,
      onPointerDown: l.keepFloatingToolbarPanelInteraction,
      children: (0, m.jsx)(u.Select, {
        borderless: true,
        className: (0, u.clsx)(
          "!univer-h-6 !univer-min-w-0 !univer-rounded-md !univer-border-transparent !univer-bg-transparent !univer-px-1.5",
          _0x37eed1.widthClassName,
        ),
        value: _0x37eed1.value,
        options: _0x37eed1.options,
        onChange: _0x37eed1.onChange,
      }),
    }),
  });
}
function Yn(_0x34abd6) {
  let _0x74dbf3 = (0, o.useDependency)(i.LocaleService),
    _0x5c3d8b =
      _0x34abd6.dash === "dot"
        ? "1 3"
        : _0x34abd6.dash === "dash"
          ? "4 3"
          : _0x34abd6.dash === "dashDot"
            ? "4 2 1 2"
            : undefined;
  return _0x34abd6.dash === "none"
    ? (0, m.jsx)("span", {
        className: "univer-text-xs",
        children: _0x74dbf3.t("slides-table-ui.editorToolbar.none"),
      })
    : (0, m.jsx)("svg", {
        "aria-hidden": "true",
        height: "16",
        viewBox: "0 0 24 16",
        width: "24",
        children: (0, m.jsx)("path", {
          d: "M3 8H21",
          stroke: "currentColor",
          strokeDasharray: _0x5c3d8b,
          strokeLinecap: "round",
          strokeWidth: "2",
        }),
      });
}
const Xn = ["bestMatch", "light", "medium", "minimal"],
  Zn = {
    bestMatch: "slides-table-ui.editorToolbar.bestMatch",
    light: "slides-table-ui.editorToolbar.light",
    medium: "slides-table-ui.editorToolbar.medium",
    minimal: "slides-table-ui.editorToolbar.minimal",
  },
  Qn = [
    { key: "firstRow", labelKey: "slides-table-ui.editorToolbar.headerRow" },
    { key: "lastRow", labelKey: "slides-table-ui.editorToolbar.footerRow" },
    { key: "bandRow", labelKey: "slides-table-ui.editorToolbar.bandedRows" },
    { key: "firstCol", labelKey: "slides-table-ui.editorToolbar.firstColumn" },
    { key: "lastCol", labelKey: "slides-table-ui.editorToolbar.lastColumn" },
    { key: "bandCol", labelKey: "slides-table-ui.editorToolbar.bandedColumns" },
  ];
function $n(_0x3cab4d) {
  let {
      currentOptions: _0xf4e670,
      currentStyleId: _0x93b7ef,
      direction: _0x5a6579 = "ltr",
      palette: _0x16ea5a,
      showOptions: _0x3d2f15 = true,
      showThemes: _0x45b467 = true,
      onApplyTheme: _0x15261c,
      onChangeOptions: _0x2a4154,
    } = _0x3cab4d,
    _0x2e3bff = (0, o.useDependency)(i.LocaleService),
    _0x3b0118 = (0, n.buildDefaultSlideTableThemes)(_0x16ea5a),
    _0x276bef = (_0x1f605f) => {
      _0x2a4154({ ..._0xf4e670, [_0x1f605f]: !_0xf4e670[_0x1f605f] });
    };
  return (0, m.jsxs)("div", {
    className:
      "univer-flex univer-max-h-[420px] univer-w-[420px] univer-flex-col univer-text-gray-900 dark:!univer-text-gray-100",
    "data-u-comp": "slide-table-theme-gallery",
    dir: _0x5a6579,
    style: { direction: _0x5a6579 },
    children: [
      _0x3d2f15 &&
        (0, m.jsxs)("div", {
          className:
            "univer-sticky\x20univer-top-0\x20univer-z-10\x20univer-bg-gray-0\x20univer-p-2\x20dark:!univer-bg-gray-900",
          children: [
            (0, m.jsxs)("div", {
              className:
                "univer-mb-2\x20univer-flex\x20univer-items-center\x20univer-justify-between",
              children: [
                (0, m.jsx)("div", {
                  className: "univer-text-sm univer-font-medium",
                  children: _0x2e3bff.t(
                    "slides-table-ui.editorToolbar.tableTheme",
                  ),
                }),
                (0, m.jsx)("div", {
                  className:
                    "univer-text-xs\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
                  children: _0x2e3bff.t(
                    "slides-table-ui.editorToolbar.tableLook",
                  ),
                }),
              ],
            }),
            (0, m.jsx)("div", {
              className: "univer-grid univer-grid-cols-3 univer-gap-1",
              children: Qn.map((_0x8c5622) =>
                (0, m.jsx)(
                  er,
                  {
                    active: !!_0xf4e670[_0x8c5622.key],
                    label: _0x2e3bff.t(_0x8c5622.labelKey),
                    onClick: () => _0x276bef(_0x8c5622.key),
                  },
                  _0x8c5622.key,
                ),
              ),
            }),
          ],
        }),
      _0x45b467 &&
        (0, m.jsx)("div", {
          className: "univer-overflow-y-auto univer-p-2 univer-pt-1",
          children: Xn.map((_0x20d48f) => {
            let _0x1b28f2 = n.DEFAULT_SLIDE_TABLE_THEME_PRESETS["filter"](
              (_0x32f52a) => _0x32f52a.group === _0x20d48f,
            );
            return _0x1b28f2.length
              ? (0, m.jsxs)(
                  "div",
                  {
                    className: "univer-mb-3 last:univer-mb-0",
                    children: [
                      (0, m.jsx)("div", {
                        className:
                          "univer-mb-1 univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-400",
                        children: _0x2e3bff.t(Zn[_0x20d48f]),
                      }),
                      (0, m.jsx)("div", {
                        className:
                          "univer-grid univer-grid-cols-4 univer-gap-2",
                        children: _0x1b28f2.map((_0x169e9a, _0x184774) => {
                          if (!_0x3b0118[_0x169e9a.id]) return null;
                          let _0x3cb501 = _0xf4e670,
                            _0x4d5628 = _0x93b7ef === _0x169e9a.id,
                            _0x4617db =
                              _0x2e3bff.t(Zn[_0x20d48f]) +
                              "\x20" +
                              (_0x184774 + 1);
                          return (0, m.jsxs)(
                            "button",
                            {
                              type: "button",
                              "aria-label": _0x4617db,
                              title: _0x4617db,
                              className: (0, u.clsx)(
                                "univer-relative univer-rounded-md univer-border univer-border-solid univer-border-transparent univer-bg-transparent univer-p-1 univer-transition-colors hover:univer-border-primary-300 hover:univer-bg-primary-50 dark:hover:!univer-bg-gray-800",
                                {
                                  "univer-border-primary-600\x20univer-bg-primary-50\x20univer-shadow-sm\x20dark:!univer-bg-gray-800":
                                    _0x4d5628,
                                },
                              ),
                              onClick: () => _0x15261c(_0x169e9a.id),
                              children: [
                                _0x4d5628 &&
                                  (0, m.jsx)("span", {
                                    className:
                                      "univer-absolute\x20univer-right-0.5\x20univer-top-0.5\x20univer-flex\x20univer-size-4\x20univer-items-center\x20univer-justify-center\x20univer-rounded-full\x20univer-bg-primary-600\x20univer-text-gray-0\x20univer-shadow-sm\x20rtl:univer-left-0.5\x20rtl:univer-right-auto",
                                    children: (0, m.jsx)(c.CheckMarkIcon, {
                                      className: "univer-size-3",
                                    }),
                                  }),
                                (0, m.jsx)(tr, {
                                  styleId: _0x169e9a.id,
                                  options: _0x3cb501,
                                  direction: _0x5a6579,
                                  palette: _0x16ea5a,
                                }),
                              ],
                            },
                            _0x169e9a.id,
                          );
                        }),
                      }),
                    ],
                  },
                  _0x20d48f,
                )
              : null;
          }),
        }),
    ],
  });
}
function er(_0x5bfc01) {
  return (0, m.jsx)("div", {
    "aria-pressed": _0x5bfc01.active,
    role: "button",
    tabIndex: 0,
    className: (0, u.clsx)(
      "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-rounded-md\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-px-2\x20univer-py-1.5\x20univer-text-xs\x20univer-transition-colors\x20hover:univer-border-primary-300\x20hover:univer-bg-primary-50\x20focus-visible:univer-outline\x20focus-visible:univer-outline-2\x20focus-visible:univer-outline-offset-1\x20focus-visible:univer-outline-primary-500\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900\x20dark:hover:!univer-bg-gray-800",
      {
        "univer-border-primary-600\x20univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-border-primary-500\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0x5bfc01.active,
      },
    ),
    onClick: _0x5bfc01.onClick,
    onKeyDown: (_0x24009d) => {
      (_0x24009d.key === "Enter" || _0x24009d.key === "\x20") &&
        (_0x24009d.preventDefault(), _0x5bfc01.onClick());
    },
    children: (0, m.jsx)(u.Checkbox, {
      checked: _0x5bfc01.active,
      className:
        "univer-pointer-events-none\x20univer-w-full\x20univer-min-w-0\x20univer-text-xs",
      contentClassName: (0, u.clsx)(
        "univer-truncate",
        _0x5bfc01.active &&
          "!univer-text-primary-600 dark:!univer-text-primary-300",
      ),
      onChange: () => undefined,
      children: _0x5bfc01.label,
    }),
  });
}
function tr(_0x1a0bba) {
  return (0, m.jsx)("span", {
    className:
      "univer-grid univer-h-11 univer-w-20 univer-grid-cols-5 univer-overflow-hidden univer-rounded-sm",
    children: (0, n.resolveSlideTableRenderModel)(
      {
        id: "theme-preview",
        rev: 0,
        styleId: _0x1a0bba.styleId,
        options: _0x1a0bba.options,
        columns: Array.from({ length: 5 }, () => ({ width: 1 })),
        rows: Array.from({ length: 4 }, () => ({
          height: 1,
          cells: Array.from({ length: 5 }, () => ({})),
        })),
      },
      { themes: (0, n.buildDefaultSlideTableThemes)(_0x1a0bba.palette) },
    ).cells["map"]((_0x5df0ed) => {
      var _0x3b07c6,
        _0x981e64,
        _0x3cd2b5,
        _0x10b277,
        _0x38ea5f,
        _0xb70dbd,
        _0x39c526,
        _0x12ec6d,
        _0x1bdbbe,
        _0x2caafa;
      let _0x3f6cfa =
          ((_0x3b07c6 = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x3b07c6.right) ??
          ((_0x981e64 = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x981e64.bottom) ??
          ((_0x3cd2b5 = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x3cd2b5.top) ??
          ((_0x10b277 = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x10b277.left),
        _0x79449b =
          (_0x38ea5f = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x38ea5f.top,
        _0x2b8ad3 =
          (_0xb70dbd = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0xb70dbd.right,
        _0x34e2a9 =
          (_0x39c526 = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x39c526.bottom,
        _0x530090 =
          (_0x12ec6d = _0x5df0ed.style["borders"]) == null
            ? undefined
            : _0x12ec6d.left,
        _0x51fbf6 = _0x1a0bba.direction === "rtl";
      return (0, m.jsx)(
        "span",
        {
          style: {
            background:
              ((_0x1bdbbe = _0x5df0ed.style["fill"]) == null
                ? undefined
                : _0x1bdbbe.type) === n.SlideTableFillTypeEnum["None"]
                ? "transparent"
                : (((_0x2caafa = _0x5df0ed.style["fill"]) == null
                    ? undefined
                    : _0x2caafa.color) ?? "transparent"),
            borderTop:
              _0x5df0ed.row === 0
                ? "1px solid " +
                  ((_0x79449b == null ? undefined : _0x79449b.color) ??
                    (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                    "transparent")
                : undefined,
            borderRight: _0x51fbf6
              ? _0x5df0ed.column === 0
                ? "1px solid " +
                  ((_0x530090 == null ? undefined : _0x530090.color) ??
                    (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                    "transparent")
                : undefined
              : "1px\x20solid\x20" +
                ((_0x2b8ad3 == null ? undefined : _0x2b8ad3.color) ??
                  (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                  "transparent"),
            borderBottom:
              "1px solid " +
              ((_0x34e2a9 == null ? undefined : _0x34e2a9.color) ??
                (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                "transparent"),
            borderLeft: _0x51fbf6
              ? "1px solid " +
                ((_0x2b8ad3 == null ? undefined : _0x2b8ad3.color) ??
                  (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                  "transparent")
              : _0x5df0ed.column === 0
                ? "1px solid " +
                  ((_0x530090 == null ? undefined : _0x530090.color) ??
                    (_0x3f6cfa == null ? undefined : _0x3f6cfa.color) ??
                    "transparent")
                : undefined,
          },
        },
        _0x5df0ed.row + ":" + _0x5df0ed.column,
      );
    }),
  });
}
const nr = "slides-table-ui.table-design.styles-control",
  rr = "slides-table-ui.table-design.cell-style-control",
  ir = "slides-table-ui.table-design.text-control";
function ar(_0x52ddeb) {
  return _0x52ddeb.element["type"] === t.PageElementTypeEnum["Table"];
}
function or() {
  let _0x1a69f8 = (0, o.useDependency)(i.IConfigService),
    _0x5a0302 = (0, o.useDependency)(t.ISlideDrawingService),
    _0x4fa9a4 = (0, o.useDependency)(r.ISlideDrawingStateService),
    _0x14fe61 = (0, o.useDependency)(n.SlideTableModelService),
    _0x44701b = (0, o.useDependency)(n.SlideTableResourceService),
    _0x2fbf6b = (0, o.useDependency)(E),
    _0x46eece = () => {
      var _0x23e84b;
      let _0x474c90 = _0x4fa9a4.getSnapshot(),
        _0x312fad = _0x474c90.context;
      if (!_0x312fad || _0x474c90.selectedIds["length"] !== 1) return null;
      let _0x1f2c33 = _0x5a0302.getDrawingByParam({
        unitId: _0x312fad.unitId,
        subUnitId: _0x312fad.subUnitId,
        drawingId: _0x474c90.selectedIds[0],
      });
      if (!_0x1f2c33 || !ar(_0x1f2c33)) return null;
      let _0x5033e9 = _0x44701b.getTable(
        _0x1f2c33.unitId,
        _0x1f2c33.element["tableId"],
      );
      if (!_0x5033e9) return null;
      let _0x2c5e28 = _0x2fbf6b.getSelection(),
        _0x3fc5dd =
          (_0x2c5e28 == null ? undefined : _0x2c5e28.unitId) ===
            _0x1f2c33.unitId &&
          _0x2c5e28.subUnitId === _0x1f2c33.subUnitId &&
          _0x2c5e28.elementId === _0x1f2c33.drawingId &&
          _0x2c5e28.tableId === _0x1f2c33.element["tableId"]
            ? _0x2c5e28
            : null,
        _0x294495 = _0x1a69f8.getConfig(r.SLIDES_UI_PLUGIN_CONFIG_KEY);
      return {
        drawing: _0x1f2c33,
        editable:
          (_0x294495 == null || (_0x23e84b = _0x294495.editor) == null
            ? undefined
            : _0x23e84b.enabled) !== false,
        selection: _0x3fc5dd,
        table: _0x5033e9,
      };
    };
  return (0, o.useObservable)(
    () =>
      (0, s.merge)(
        _0x4fa9a4.state$,
        _0x2fbf6b.selection$,
        _0x14fe61.tableChange$,
      ).pipe((0, s.startWith)(undefined), (0, s.map)(_0x46eece)),
    _0x46eece(),
    false,
    [_0x5a0302, _0x4fa9a4, _0x14fe61, _0x44701b, _0x2fbf6b],
  );
}
function sr(_0x258f45) {
  let _0xf24f3e = (0, o.useDependency)(E);
  return (0, m.jsx)("fieldset", {
    disabled: _0x258f45.disabled,
    className:
      "univer-m-0 univer-flex univer-h-full univer-items-center univer-gap-1 univer-border-none univer-p-0 disabled:univer-cursor-not-allowed disabled:univer-opacity-50",
    onMouseDownCapture: () => _0xf24f3e.markTableInternalInteraction(),
    onPointerDownCapture: () => _0xf24f3e.markTableInternalInteraction(),
    onMouseDown: l.keepFloatingToolbarPanelInteraction,
    onPointerDown: l.keepFloatingToolbarPanelInteraction,
    children: _0x258f45.children,
  });
}
function cr() {
  var _0x12918;
  let _0x2194e0 = (0, o.useDependency)(i.ICommandService),
    _0x461191 = (0, o.useDependency)(i.LocaleService),
    _0x1f34d4 = (0, o.useDependency)(i.ThemeService),
    _0x453c54 = or(),
    [_0x4532b9, _0x1f3cf4] = (0, f.useState)(false),
    _0x4c19a6 = (0, f.useMemo)(
      () =>
        (0, n.resolveSlideTableThemePalette)((_0x2891de) =>
          _0x1f34d4.getColorFromTheme(_0x2891de),
        ),
      [_0x1f34d4],
    ),
    _0x451d12 =
      !(_0x453c54 != null && _0x453c54.editable) ||
      ((_0x12918 = _0x453c54.selection) == null ? undefined : _0x12918.kind) ===
        "text",
    _0x1bf729 = (_0x394633) => {
      !_0x453c54 ||
        _0x451d12 ||
        _0x2194e0.executeCommand(n.UpdateSlideTableCommand["id"], {
          unitId: _0x453c54.drawing["unitId"],
          tableId: _0x453c54.table["id"],
          patch: { styleId: _0x394633 },
        });
    };
  return (0, m.jsx)(sr, {
    disabled: _0x451d12,
    children: (0, m.jsx)(Un, {
      icon: (0, m.jsx)(c.PaintIcon, {
        className: "[[data-u-comp='ribbon-grid-toolbar']_&]:!univer-size-8",
      }),
      label: _0x461191.t("slides-table-ui.editorToolbar.tableTheme"),
      ribbon: true,
      open: _0x4532b9,
      onOpenChange: _0x1f3cf4,
      children: _0x453c54
        ? (0, m.jsx)($n, {
            currentStyleId: _0x453c54.table["styleId"],
            currentOptions: _0x453c54.table["options"] ?? {},
            direction: _0x461191.getDirection(),
            palette: _0x4c19a6,
            onApplyTheme: (_0x33ade7) => {
              (_0x1bf729(_0x33ade7), _0x1f3cf4(false));
            },
            onChangeOptions: (_0x435604) => {
              !_0x453c54 ||
                _0x451d12 ||
                _0x2194e0.executeCommand(n.UpdateSlideTableCommand["id"], {
                  unitId: _0x453c54.drawing["unitId"],
                  tableId: _0x453c54.table["id"],
                  patch: { options: _0x435604 },
                });
            },
          })
        : null,
    }),
  });
}
function lr(_0x4954b0) {
  let _0x49c45e = (0, o.useDependency)(i.ICommandService),
    _0x293ebe = (0, o.useDependency)(n.SlideTableResourceService);
  return (_0x2c5c29) => {
    var _0x1ac5c1;
    let _0x3b11f9 =
      _0x4954b0 == null || (_0x1ac5c1 = _0x4954b0.selection) == null
        ? undefined
        : _0x1ac5c1.ranges[0];
    if (!_0x4954b0 || !_0x3b11f9) return;
    let _0x71283f = _0x293ebe.getTable(
      _0x4954b0.drawing["unitId"],
      _0x4954b0.table["id"],
    );
    _0x71283f &&
      _0x49c45e.executeCommand(n.UpdateSlideTableCommand["id"], {
        unitId: _0x4954b0.drawing["unitId"],
        tableId: _0x4954b0.table["id"],
        patch: _0x2c5c29(_0x71283f, _0x3b11f9),
      });
  };
}
function ur() {
  let _0x1ff446 = (0, o.useDependency)(i.LocaleService),
    _0x2b55dc = (0, o.useObservable)(
      _0x1ff446.direction$,
      _0x1ff446.getDirection(),
    ),
    _0x3a1ab8 = or(),
    _0x3a4e39 = lr(_0x3a1ab8),
    [_0x220b43, _0x40a686] = (0, f.useState)(null),
    _0x2c9a0f = Cn(
      _0x3a1ab8 == null ? undefined : _0x3a1ab8.table,
      (_0x3a1ab8 == null ? undefined : _0x3a1ab8.selection) ?? null,
    ).values;
  return (0, m.jsx)(sr, {
    disabled:
      !(_0x3a1ab8 != null && _0x3a1ab8.editable) ||
      !_0x3a1ab8.selection ||
      _0x3a1ab8.selection["kind"] === "text",
    children: (0, m.jsxs)("div", {
      className:
        "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-content-center [[data-u-comp='ribbon-grid-toolbar']_&]:univer-justify-items-stretch [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
      children: [
        (0, m.jsx)(Dn, {
          color: _0x2c9a0f.backgroundColor,
          value: $t(_0x2c9a0f.backgroundFill),
          gradientValue: rn(
            _0x2c9a0f.backgroundFill,
            _0x2c9a0f.backgroundColor,
          ),
          previewStyle: on(_0x2c9a0f.backgroundFill, _0x2c9a0f.backgroundColor),
          showPreview: false,
          tableFill: _0x2c9a0f.backgroundFill,
          mixed: !!_0x2c9a0f.mixed["backgroundFill"],
          open: _0x220b43 === "background",
          onOpenChange: (_0x23de82) =>
            _0x40a686(_0x23de82 ? "background" : null),
          onTableFillChange: (_0xb51bd8) =>
            _0x3a4e39((_0x1a97c8, _0x5b5319) =>
              ae(_0x1a97c8, _0x5b5319, _0xb51bd8),
            ),
          children: (0, m.jsx)(c.ShapeBackgroundColorDoubleIcon, {
            extend: { colorChannel1: _0x2c9a0f.backgroundColor },
          }),
        }),
        (0, m.jsx)(Wn, {
          direction: _0x2b55dc,
          color: _0x2c9a0f.borderColor,
          width: _0x2c9a0f.borderWidth,
          dash: _0x2c9a0f.borderDash ?? n.SlideTableBorderDashEnum["Solid"],
          presets: Fn,
          open: _0x220b43 === "border",
          mixed: !!(
            _0x2c9a0f.mixed["borderColor"] ||
            _0x2c9a0f.mixed["borderWidth"] ||
            _0x2c9a0f.mixed["borderDash"]
          ),
          onOpenChange: (_0x21531a) => _0x40a686(_0x21531a ? "border" : null),
          onSelectPreset: (_0x2c6746) =>
            _0x3a4e39((_0x2f0198, _0x2b6705) =>
              le(_0x2f0198, _0x2b6705, _0x2c6746),
            ),
          onChangeColor: (_0x5344b1) =>
            _0x3a4e39((_0x2d7ab0, _0x296b2d) =>
              ce(_0x2d7ab0, _0x296b2d, { color: _0x5344b1 }),
            ),
          onChangeWidth: (_0x2487f4) =>
            _0x3a4e39((_0x4f91ec, _0xd59926) =>
              ce(_0x4f91ec, _0xd59926, {
                width: _0x2487f4,
                dash:
                  _0x2487f4 === 0
                    ? n.SlideTableBorderDashEnum["None"]
                    : undefined,
              }),
            ),
          onChangeDash: (_0x2d6e84) =>
            _0x3a4e39((_0x5a6aa7, _0x1cc441) =>
              ce(_0x5a6aa7, _0x1cc441, { dash: _0x2d6e84 }),
            ),
        }),
      ],
    }),
  });
}
function dr(_0x1beafe) {
  return (0, m.jsx)(u.Tooltip, {
    title: _0x1beafe.title,
    placement: "bottom",
    children: (0, m.jsx)("button", {
      type: "button",
      "aria-label": _0x1beafe.title,
      "aria-pressed": _0x1beafe.mixed ? "mixed" : _0x1beafe.active,
      onClick: _0x1beafe.onClick,
      onMouseDown: (_0x2a627d) => _0x2a627d.preventDefault(),
      className: (0, u.clsx)(
        "univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-sm\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20hover:univer-text-primary-600\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-700",
        (_0x1beafe.active || _0x1beafe.mixed) &&
          "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
      ),
      children: _0x1beafe.children,
    }),
  });
}
function fr(_0x143d29) {
  let [_0x54ad8e, _0xc3b09f] = (0, f.useState)(false),
    _0x216c5e =
      _0x143d29.options["find"](
        (_0x3fdfb8) => _0x3fdfb8.value === _0x143d29.value,
      ) ?? _0x143d29.options[0];
  return (0, m.jsx)(u.Dropdown, {
    open: _0x54ad8e,
    onOpenChange: _0xc3b09f,
    side: "bottom",
    avoidCollisions: true,
    overlay: (0, m.jsx)("div", {
      className:
        "univer-flex univer-flex-col univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-white univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: _0x143d29.options["map"]((_0x75bff) =>
        (0, m.jsxs)(
          "button",
          {
            type: "button",
            "aria-label": _0x75bff.label,
            "aria-pressed": _0x75bff.value === _0x143d29.value,
            className: (0, u.clsx)(
              "univer-flex univer-h-8 univer-w-32 univer-items-center univer-justify-start univer-gap-2 univer-rounded-md univer-border-0 univer-bg-transparent univer-px-2 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
              _0x75bff.value === _0x143d29.value &&
                "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
            ),
            onClick: () => {
              (_0x143d29.onChange(_0x75bff.value), _0xc3b09f(false));
            },
            onMouseDown: (_0x57c85f) => _0x57c85f.preventDefault(),
            children: [
              (0, m.jsx)("span", {
                className:
                  "univer-flex univer-size-5 univer-items-center univer-justify-center univer-text-lg",
                children: _0x75bff.icon,
              }),
              (0, m.jsx)("span", { children: _0x75bff.label }),
            ],
          },
          _0x75bff.value,
        ),
      ),
    }),
    children: (0, m.jsx)("span", {
      children: (0, m.jsx)(u.Tooltip, {
        title: _0x216c5e == null ? undefined : _0x216c5e.label,
        placement: "bottom",
        children: (0, m.jsxs)("button", {
          type: "button",
          "aria-expanded": _0x54ad8e,
          "aria-label": _0x216c5e == null ? undefined : _0x216c5e.label,
          className: (0, u.clsx)(
            "univer-flex univer-h-6 univer-w-10 univer-items-center univer-justify-center univer-gap-0.5 univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-lg univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
            (_0x54ad8e || _0x143d29.mixed) &&
              "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
          ),
          onMouseDown: (_0x448f69) => _0x448f69.preventDefault(),
          children: [
            _0x143d29.mixed
              ? (0, m.jsx)("span", { "aria-hidden": "true", children: "—" })
              : _0x216c5e == null
                ? undefined
                : _0x216c5e.icon,
            (0, m.jsx)(c.MoreDownIcon, { className: "univer-text-xs" }),
          ],
        }),
      }),
    }),
  });
}
function pr(_0x3187e8) {
  let [_0x3264cd, _0x2bb7de] = (0, f.useState)(false);
  return (0, m.jsxs)("div", {
    className:
      "univer-flex\x20univer-h-6\x20univer-w-10\x20univer-items-center",
    children: [
      (0, m.jsx)(dr, {
        active: _0x3187e8.active,
        mixed: _0x3187e8.mixed,
        title: _0x3187e8.title,
        onClick: _0x3187e8.onToggle,
        children: _0x3187e8.icon,
      }),
      (0, m.jsx)(u.Dropdown, {
        open: _0x3264cd,
        onOpenChange: _0x2bb7de,
        side: "bottom",
        avoidCollisions: true,
        overlay: _0x3187e8.picker(() => _0x2bb7de(false)),
        children: (0, m.jsx)("button", {
          type: "button",
          "aria-expanded": _0x3264cd,
          "aria-label": _0x3187e8.title,
          className: (0, u.clsx)(
            "univer-flex univer-h-6 univer-w-4 univer-items-center univer-justify-center univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-xs univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
            _0x3264cd &&
              "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300",
          ),
          onMouseDown: (_0x282a38) => _0x282a38.preventDefault(),
          children: (0, m.jsx)(c.MoreDownIcon, {}),
        }),
      }),
    ],
  });
}
function mr(_0xbe59a2, _0x2d1dc0) {
  let _0x425de9 = o.FONT_SIZE_LIST["map"]((_0x46b0d2) => _0x46b0d2.value);
  return _0x2d1dc0 > 0
    ? (_0x425de9.find((_0x5b2a08) => _0x5b2a08 > _0xbe59a2) ??
        _0x425de9[_0x425de9.length - 1] ??
        _0xbe59a2)
    : ([..._0x425de9].reverse().find((_0x2a3fd9) => _0x2a3fd9 < _0xbe59a2) ??
        _0x425de9[0] ??
        _0xbe59a2);
}
function hr() {
  var _0xed039c;
  let _0x4257aa = (0, o.useDependency)(i.LocaleService),
    _0x56bbe6 = or(),
    _0x2c1a79 = lr(_0x56bbe6),
    [_0x52a3f2, _0x2ed62e] = (0, f.useState)(null),
    _0x2403c9 = Cn(
      _0x56bbe6 == null ? undefined : _0x56bbe6.table,
      (_0x56bbe6 == null ? undefined : _0x56bbe6.selection) ?? null,
    ).values,
    _0x2e278d =
      !(_0x56bbe6 != null && _0x56bbe6.editable) || !_0x56bbe6.selection,
    _0x54d743 = [
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignLeft"),
        value: i.HorizontalAlign["LEFT"],
        icon: (0, m.jsx)(c.LeftJustifyingIcon, {}),
      },
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignCenter"),
        value: i.HorizontalAlign["CENTER"],
        icon: (0, m.jsx)(c.HorizontallyIcon, {}),
      },
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignRight"),
        value: i.HorizontalAlign["RIGHT"],
        icon: (0, m.jsx)(c.RightJustifyingIcon, {}),
      },
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignJustify"),
        value: i.HorizontalAlign["JUSTIFIED"],
        icon: (0, m.jsx)(c.AlignTextBothIcon, {}),
      },
    ],
    _0x7d38d8 = [
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignTop"),
        value: i.VerticalAlign["TOP"],
        icon: (0, m.jsx)(c.AlignTopIcon, {}),
      },
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignMiddle"),
        value: i.VerticalAlign["MIDDLE"],
        icon: (0, m.jsx)(c.VerticalCenterIcon, {}),
      },
      {
        label: _0x4257aa.t("slides-table-ui.editorToolbar.alignBottom"),
        value: i.VerticalAlign["BOTTOM"],
        icon: (0, m.jsx)(c.AlignBottomIcon, {}),
      },
    ],
    _0x4af490 =
      _0x56bbe6 == null || (_0xed039c = _0x56bbe6.selection) == null
        ? undefined
        : _0xed039c.ranges[0],
    _0x3b1959 = re(
      _0x56bbe6 == null ? undefined : _0x56bbe6.table,
      _0x4af490,
      i.PresetListType["ORDER_LIST"],
    ),
    _0x53ea54 = re(
      _0x56bbe6 == null ? undefined : _0x56bbe6.table,
      _0x4af490,
      i.PresetListType["BULLET_LIST"],
    ),
    _0x110480 = [
      {
        key: "bold",
        title: _0x4257aa.t("slides-table-ui.editorToolbar.bold"),
        active: _0x2403c9.bold,
        mixed: !!_0x2403c9.mixed["bold"],
        icon: (0, m.jsx)(c.BoldIcon, {}),
        patch: {
          bl:
            _0x2403c9.mixed["bold"] || !_0x2403c9.bold
              ? i.BooleanNumber["TRUE"]
              : i.BooleanNumber["FALSE"],
        },
      },
      {
        key: "italic",
        title: _0x4257aa.t("slides-table-ui.editorToolbar.italic"),
        active: _0x2403c9.italic,
        mixed: !!_0x2403c9.mixed["italic"],
        icon: (0, m.jsx)(c.ItalicIcon, {}),
        patch: {
          it:
            _0x2403c9.mixed["italic"] || !_0x2403c9.italic
              ? i.BooleanNumber["TRUE"]
              : i.BooleanNumber["FALSE"],
        },
      },
      {
        key: "underline",
        title: _0x4257aa.t("slides-table-ui.editorToolbar.underline"),
        active: _0x2403c9.underline,
        mixed: !!_0x2403c9.mixed["underline"],
        icon: (0, m.jsx)(c.UnderlineIcon, {}),
        patch: {
          ul: {
            s:
              _0x2403c9.mixed["underline"] || !_0x2403c9.underline
                ? i.BooleanNumber["TRUE"]
                : i.BooleanNumber["FALSE"],
          },
        },
      },
      {
        key: "strikethrough",
        title: _0x4257aa.t("slides-table-ui.editorToolbar.strikethrough"),
        active: _0x2403c9.strike,
        mixed: !!_0x2403c9.mixed["strike"],
        icon: (0, m.jsx)(c.StrikethroughIcon, {}),
        patch: {
          st: {
            s:
              _0x2403c9.mixed["strike"] || !_0x2403c9.strike
                ? i.BooleanNumber["TRUE"]
                : i.BooleanNumber["FALSE"],
          },
        },
      },
    ];
  return (0, m.jsx)(sr, {
    disabled: _0x2e278d,
    children: (0, m.jsxs)("div", {
      className:
        "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2",
      children: [
        (0, m.jsxs)("div", {
          className:
            "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-w-[120px] [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
          children: [
            (0, m.jsx)(o.FontFamilyDropdown, {
              ariaLabel: _0x4257aa.t(
                "slides-table-ui.editorToolbar.fontFamily",
              ),
              className:
                "!univer-h-6 univer-w-[120px] [[data-u-comp='ribbon-grid-toolbar']_&]:univer-w-full",
              inputClassName: "univer-w-auto",
              value: _0x2403c9.mixed["fontFamily"] ? "" : _0x2403c9.fontFamily,
              onChange: (_0x58ae99) =>
                _0x2c1a79((_0x27d3f6, _0x5d1783) =>
                  ue(_0x27d3f6, _0x5d1783, _0x58ae99),
                ),
            }),
            (0, m.jsxs)("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-1",
              children: [
                (0, m.jsx)(Jn, {
                  title: _0x4257aa.t("slides-table-ui.editorToolbar.fontSize"),
                  widthClassName: "univer-w-14",
                  value: _0x2403c9.mixed["fontSize"]
                    ? ""
                    : String(_0x2403c9.fontSize),
                  options: _0x2403c9.mixed["fontSize"]
                    ? [{ label: "—", value: "" }, ...Mn]
                    : ln(Mn, String(_0x2403c9.fontSize)),
                  onChange: (_0x148940) => {
                    let _0x3a330a = Number(_0x148940);
                    _0x148940 &&
                      !Number.isNaN(_0x3a330a) &&
                      _0x2c1a79((_0xe752ac, _0x4735bf) =>
                        de(_0xe752ac, _0x4735bf, _0x3a330a),
                      );
                  },
                }),
                (0, m.jsx)(dr, {
                  title: _0x4257aa.t(
                    "slides-table-ui.editorToolbar.increaseFontSize",
                  ),
                  onClick: () =>
                    _0x2c1a79((_0x449d6e, _0x506e29) =>
                      de(_0x449d6e, _0x506e29, mr(_0x2403c9.fontSize, 1)),
                    ),
                  children: (0, m.jsx)(c.FontSizeIncreaseIcon, {}),
                }),
                (0, m.jsx)(dr, {
                  title: _0x4257aa.t(
                    "slides-table-ui.editorToolbar.decreaseFontSize",
                  ),
                  onClick: () =>
                    _0x2c1a79((_0x26abe8, _0x304e37) =>
                      de(_0x26abe8, _0x304e37, mr(_0x2403c9.fontSize, -1)),
                    ),
                  children: (0, m.jsx)(c.FontSizeReduceIcon, {}),
                }),
              ],
            }),
          ],
        }),
        (0, m.jsx)("div", {
          className:
            "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-cols-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2",
          children: _0x110480.map((_0x14cd6a) =>
            (0, m.jsx)(
              dr,
              {
                title: _0x14cd6a.title,
                active: _0x14cd6a.active,
                mixed: _0x14cd6a.mixed,
                onClick: () =>
                  _0x2c1a79((_0x2ac106, _0x1328d7) =>
                    L(_0x2ac106, _0x1328d7, _0x14cd6a.patch),
                  ),
                children: _0x14cd6a.icon,
              },
              _0x14cd6a.key,
            ),
          ),
        }),
        (0, m.jsxs)("div", {
          className:
            "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-w-11 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
          children: [
            (0, m.jsx)(Kn, {
              "data-toolbar-item": "ribbon-text-color",
              title: _0x4257aa.t("slides-table-ui.editorToolbar.textColor"),
              color: _0x2403c9.textColor,
              mixed: !!(
                _0x2403c9.mixed["textColor"] || _0x2403c9.mixed["textFill"]
              ),
              icon: "font",
              open: _0x52a3f2 === "textColor",
              onOpenChange: (_0x1c74bd) =>
                _0x2ed62e(_0x1c74bd ? "textColor" : null),
              onChange: (_0x109f2a) =>
                _0x2c1a79((_0x2ffc2f, _0x1c59a4) =>
                  se(_0x2ffc2f, _0x1c59a4, {
                    type: "solid",
                    color: _0x109f2a,
                    opacity: 1,
                  }),
                ),
            }),
            (0, m.jsx)(Kn, {
              "data-toolbar-item": "ribbon-text-background",
              title: _0x4257aa.t(
                "slides-table-ui.editorToolbar.textBackgroundColor",
              ),
              color: _0x2403c9.textBackgroundColor,
              mixed: !!_0x2403c9.mixed["textBackgroundColor"],
              icon: "bucket",
              open: _0x52a3f2 === "textBackground",
              onOpenChange: (_0x518d97) =>
                _0x2ed62e(_0x518d97 ? "textBackground" : null),
              onChange: (_0x1d3478) =>
                _0x2c1a79((_0x44e1fb, _0x50950d) =>
                  L(_0x44e1fb, _0x50950d, { bg: { rgb: _0x1d3478 } }),
                ),
            }),
          ],
        }),
        (0, m.jsxs)("div", {
          className:
            "univer-flex\x20univer-items-center\x20univer-gap-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid-cols-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid-rows-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-x-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-y-2",
          children: [
            (0, m.jsx)(fr, {
              options: _0x54d743,
              value: _0x2403c9.horizontalAlign,
              mixed: !!_0x2403c9.mixed["horizontalAlign"],
              onChange: (_0x230cef) =>
                _0x2c1a79((_0x357aa6, _0x3768f2) =>
                  ne(_0x357aa6, _0x3768f2, {
                    axis: "horizontal",
                    value: _0x230cef,
                  }),
                ),
            }),
            (0, m.jsx)(pr, {
              title: _0x4257aa.t("slides-table-ui.editorToolbar.orderedList"),
              icon: (0, m.jsx)(c.OrderIcon, {}),
              active: _0x3b1959.active,
              mixed: _0x3b1959.mixed,
              onToggle: () =>
                _0x2c1a79((_0x2138df, _0x287620) =>
                  M(
                    _0x2138df,
                    _0x287620,
                    _0x3b1959.active ? null : i.PresetListType["ORDER_LIST"],
                  ),
                ),
              picker: (_0x9dd14b) =>
                (0, m.jsx)(d.OrderListTypePicker, {
                  value: _0x3b1959.value,
                  onChange: (_0x321493) => {
                    _0x321493 &&
                      (_0x2c1a79((_0x97ae47, _0x1ea9c3) =>
                        M(_0x97ae47, _0x1ea9c3, _0x321493),
                      ),
                      _0x9dd14b());
                  },
                }),
            }),
            (0, m.jsx)(fr, {
              options: _0x7d38d8,
              value: _0x2403c9.verticalAlign,
              mixed: !!_0x2403c9.mixed["verticalAlign"],
              onChange: (_0x165d72) =>
                _0x2c1a79((_0x22ac32, _0x5bffc6) =>
                  ne(_0x22ac32, _0x5bffc6, {
                    axis: "vertical",
                    value: _0x165d72,
                  }),
                ),
            }),
            (0, m.jsx)(pr, {
              title: _0x4257aa.t("slides-table-ui.editorToolbar.bulletList"),
              icon: (0, m.jsx)(c.UnorderIcon, {}),
              active: _0x53ea54.active,
              mixed: _0x53ea54.mixed,
              onToggle: () =>
                _0x2c1a79((_0x236f5b, _0x5222f8) =>
                  M(
                    _0x236f5b,
                    _0x5222f8,
                    _0x53ea54.active ? null : i.PresetListType["BULLET_LIST"],
                  ),
                ),
              picker: (_0x22bbdd) =>
                (0, m.jsx)(d.BulletListTypePicker, {
                  value: _0x53ea54.value,
                  onChange: (_0x2bb0e8) => {
                    _0x2bb0e8 &&
                      (_0x2c1a79((_0x36a3b3, _0x1b6ad9) =>
                        M(_0x36a3b3, _0x1b6ad9, _0x2bb0e8),
                      ),
                      _0x22bbdd());
                  },
                }),
            }),
          ],
        }),
      ],
    }),
  });
}
let gr = class extends i.Disposable {
  constructor(_0x3c6c11, _0x115efc) {
    (super(),
      (this._componentManager = _0x3c6c11),
      (this._iconManager = _0x115efc),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        AdjustHeightDoubleIcon: c.AdjustHeightDoubleIcon,
        AdjustWidthDoubleIcon: c.AdjustWidthDoubleIcon,
        CancelMergeIcon: c.CancelMergeIcon,
        DeleteColumnDoubleIcon: c.DeleteColumnDoubleIcon,
        DeleteRowDoubleIcon: c.DeleteRowDoubleIcon,
        InsertRowAboveDoubleIcon: c.InsertRowAboveDoubleIcon,
        InsertRowBelowDoubleIcon: c.InsertRowBelowDoubleIcon,
        LeftInsertColumnDoubleIcon: c.LeftInsertColumnDoubleIcon,
        MergeAllIcon: c.MergeAllIcon,
        RightInsertColumnDoubleIcon: c.RightInsertColumnDoubleIcon,
      }),
    );
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](nr, cr)),
      this.disposeWithMe(this._componentManager["register"](rr, ur)),
      this.disposeWithMe(this._componentManager["register"](ir, hr)));
  }
};
gr = V(
  [B(0, (0, i.Inject)(o.ComponentManager)), B(1, (0, i.Inject)(o.IconManager))],
  gr,
);
const _r = "slides-table-ui.ribbon.tableDesign",
  vr = "slides-table-ui.ribbon.styles-control",
  yr = "slides-table-ui.ribbon.cell-style-control",
  br = "slides-table-ui.ribbon.text-control";
function xr(_0x1f4a1e, _0x59a4db) {
  return {
    id: _0x1f4a1e,
    type: o.MenuItemType["BUTTON"],
    label: { name: _0x59a4db, hoverable: false, selectable: false },
  };
}
function Sr() {
  return xr(vr, nr);
}
function Cr() {
  return xr(yr, rr);
}
function wr() {
  return xr(br, ir);
}
function Tr(_0xa3b098) {
  var _0x343fb2;
  let _0x3936ce = _0xa3b098.get(H),
    _0x211416 =
      ((_0x343fb2 = _0xa3b098
        .get(i.IConfigService)
        .getConfig(r.SLIDES_UI_PLUGIN_CONFIG_KEY)) == null ||
      (_0x343fb2 = _0x343fb2.editor) == null
        ? undefined
        : _0x343fb2.enabled) !== false;
  return {
    id: Bt.id,
    type: o.MenuItemType["BUTTON"],
    icon: "ShowToolbarIcon",
    title: "slides-table-ui.ribbon.floatingToolbar",
    tooltip: "slides-table-ui.ribbon.floatingToolbar",
    activated$: _0x3936ce.enabled$,
    disabled$: _0x211416 ? undefined : (0, s.of)(true),
  };
}
const Er = {
  forward: {
    id: Ue.id,
    icon: "MoveUpIcon",
    title: "slides-table-ui.ribbon.arrangeForward",
  },
  backward: {
    id: We.id,
    icon: "MoveDownIcon",
    title: "slides-table-ui.ribbon.arrangeBackward",
  },
  front: {
    id: Ge.id,
    icon: "TopmostIcon",
    title: "slides-table-ui.ribbon.bringToFront",
  },
  back: {
    id: Ke.id,
    icon: "BottomIcon",
    title: "slides-table-ui.ribbon.sendToBack",
  },
};
function Dr(_0x4cfca5, _0x557f77) {
  let _0x952c60 = _0x4cfca5.get(i.IConfigService),
    _0x2c09d8 = _0x4cfca5.get(t.ISlideDrawingService),
    _0x129c68 = _0x4cfca5.get(r.ISlideDrawingStateService),
    _0x3ea675 = _0x4cfca5.get(E);
  return (0, s.combineLatest)([
    _0x129c68.state$,
    _0x2c09d8.order$["pipe"]((0, s.startWith)(undefined)),
    _0x3ea675.selection$["pipe"]((0, s.startWith)(null)),
  ]).pipe(
    (0, s.map)(([_0x4a3f57, , _0x1c9988]) => {
      var _0x35c1af;
      if (
        ((_0x35c1af = _0x952c60.getConfig(r.SLIDES_UI_PLUGIN_CONFIG_KEY)) ==
          null || (_0x35c1af = _0x35c1af.editor) == null
          ? undefined
          : _0x35c1af.enabled) === false ||
        (_0x1c9988 == null ? undefined : _0x1c9988.kind) === "text"
      )
        return true;
      let _0x3e7f1c = _0x4a3f57.context;
      if (!_0x3e7f1c || _0x4a3f57.selectedIds["length"] !== 1) return true;
      let _0x33fe5f = _0x4a3f57.selectedIds[0],
        _0x4f2ccd = _0x2c09d8.getDrawingByParam({
          unitId: _0x3e7f1c.unitId,
          subUnitId: _0x3e7f1c.subUnitId,
          drawingId: _0x33fe5f,
        });
      if (
        (_0x4f2ccd == null ? undefined : _0x4f2ccd.element["type"]) !==
        t.PageElementTypeEnum["Table"]
      )
        return true;
      let _0x37a8d1 = _0x2c09d8.getDrawingOrder(
          _0x3e7f1c.unitId,
          _0x3e7f1c.subUnitId,
        ),
        _0x3c281a = _0x37a8d1.indexOf(_0x33fe5f);
      return (
        _0x3c281a < 0 ||
        (_0x557f77 === "forward" || _0x557f77 === "front"
          ? _0x3c281a === _0x37a8d1.length - 1
          : _0x3c281a === 0)
      );
    }),
  );
}
function Or(_0x14bba3, _0x2bfd4f) {
  let _0x5eae08 = Er[_0x2bfd4f];
  return {
    id: _0x5eae08.id,
    type: o.MenuItemType["BUTTON"],
    icon: _0x5eae08.icon,
    title: _0x5eae08.title,
    tooltip: _0x5eae08.title,
    disabled$: Dr(_0x14bba3, _0x2bfd4f),
  };
}
const kr = (_0x154a96) => Or(_0x154a96, "forward"),
  Ar = (_0x28f3a4) => Or(_0x28f3a4, "backward"),
  jr = (_0x21dc26) => Or(_0x21dc26, "front"),
  Mr = (_0x3414c7) => Or(_0x3414c7, "back");
function G(_0x5b77fa, _0x3898b2) {
  let _0x4f8221 = _0x5b77fa.get(i.IConfigService),
    _0x54ac66 = _0x5b77fa.get(n.SlideTableModelService);
  return (0, s.combineLatest)([
    _0x5b77fa.get(E).selection$,
    _0x54ac66.tableChange$["pipe"]((0, s.startWith)(undefined)),
  ]).pipe(
    (0, s.map)(([_0x41971c]) => {
      var _0x351577;
      return (
        ((_0x351577 = _0x4f8221.getConfig(r.SLIDES_UI_PLUGIN_CONFIG_KEY)) ==
          null || (_0x351577 = _0x351577.editor) == null
          ? undefined
          : _0x351577.enabled) === false ||
        (_0x41971c == null ? undefined : _0x41971c.kind) === "text" ||
        !_0x3898b2(_0x5b77fa)
      );
    }),
  );
}
const Nr = "slide-table.menu.insert",
  Pr = "slide-table.menu.delete",
  Fr = "slide-table.menu.distribute";
function Ir(_0x10219e) {
  return {
    id: Nr,
    type: o.MenuItemType["SUBITEMS"],
    title: "slides-table-ui.contextMenu.insert",
    hidden$: Lr(_0x10219e),
  };
}
function Lr(_0x504ca5) {
  if (!_0x504ca5) return (0, s.of)(true);
  let _0x57b03f = _0x504ca5.get(E),
    _0x476ff4 = _0x504ca5.get(n.SlideTableResourceService);
  return _0x57b03f.selection$["pipe"](
    (0, s.map)((_0x496d33) => {
      let _0x320664 = A(_0x496d33);
      return (
        !_0x320664 || !_0x476ff4.getTable(_0x320664.unitId, _0x320664.tableId)
      );
    }),
  );
}
function Rr() {
  return {
    id: Pr,
    type: o.MenuItemType["SUBITEMS"],
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.delete",
    tooltip: "slides-table-ui.contextMenu.delete",
  };
}
function zr(_0x49ba0c) {
  let _0x2fcb5d = (0, s.combineLatest)([
    G(_0x49ba0c, ht),
    G(_0x49ba0c, gt),
  ]).pipe(
    (0, s.map)(([_0x589cd1, _0x538a95]) => [
      {
        id: Ne.id,
        value: Ne.id,
        icon: "DeleteRowDoubleIcon",
        label: {
          name: "slides-table-ui.contextMenu.deleteRow",
          selectable: false,
        },
        params: {},
        disabled: _0x589cd1,
      },
      {
        id: Pe.id,
        value: Pe.id,
        icon: "DeleteColumnDoubleIcon",
        label: {
          name: "slides-table-ui.contextMenu.deleteColumn",
          selectable: false,
        },
        params: {},
        disabled: _0x538a95,
      },
    ]),
  );
  return { ...Rr(), selections: _0x2fcb5d };
}
function Br() {
  return {
    id: Fr,
    type: o.MenuItemType["SUBITEMS"],
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distribute",
  };
}
function Vr(_0x8966c0) {
  var _0x51d38a;
  let _0x16a338 =
      ((_0x51d38a = _0x8966c0
        .get(i.IConfigService)
        .getConfig(r.SLIDES_UI_PLUGIN_CONFIG_KEY)) == null ||
      (_0x51d38a = _0x51d38a.editor) == null
        ? undefined
        : _0x51d38a.enabled) === false,
    _0x4ee49a = _0x8966c0.get(E).selection$["pipe"](
      (0, s.startWith)(null),
      (0, s.map)(
        (_0x3c7443) =>
          _0x16a338 ||
          (_0x3c7443 == null ? undefined : _0x3c7443.kind) === "text",
      ),
    );
  return {
    id: Ve.id,
    type: o.MenuItemType["BUTTON"],
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.deleteTable",
    tooltip: "slides-table-ui.contextMenu.deleteTable",
    disabled$: _0x4ee49a,
  };
}
function Hr(_0x3c6437) {
  return {
    id: ke.id,
    type: o.MenuItemType["BUTTON"],
    icon: "InsertRowAboveDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowAbove",
    tooltip: "slides-table-ui.contextMenu.insertRowAbove",
    disabled$: _0x3c6437 ? G(_0x3c6437, Qr) : undefined,
  };
}
function Ur(_0x489d69) {
  return {
    id: Ae.id,
    type: o.MenuItemType["BUTTON"],
    icon: "InsertRowBelowDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowBelow",
    tooltip: "slides-table-ui.contextMenu.insertRowBelow",
    disabled$: _0x489d69 ? G(_0x489d69, Qr) : undefined,
  };
}
function Wr(_0x144f75) {
  return {
    id: je.id,
    type: o.MenuItemType["BUTTON"],
    icon: "LeftInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnLeft",
    tooltip: "slides-table-ui.contextMenu.insertColumnLeft",
    disabled$: _0x144f75 ? G(_0x144f75, Qr) : undefined,
  };
}
function Gr(_0x289624) {
  return {
    id: Me.id,
    type: o.MenuItemType["BUTTON"],
    icon: "RightInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnRight",
    tooltip: "slides-table-ui.contextMenu.insertColumnRight",
    disabled$: _0x289624 ? G(_0x289624, Qr) : undefined,
  };
}
function Kr(_0x2b528e) {
  return {
    id: Ne.id,
    type: o.MenuItemType["BUTTON"],
    icon: "DeleteRowDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteRow",
    tooltip: "slides-table-ui.contextMenu.deleteRow",
    disabled$: _0x2b528e ? G(_0x2b528e, ht) : undefined,
  };
}
function qr(_0x354eed) {
  return {
    id: Pe.id,
    type: o.MenuItemType["BUTTON"],
    icon: "DeleteColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteColumn",
    tooltip: "slides-table-ui.contextMenu.deleteColumn",
    disabled$: _0x354eed ? G(_0x354eed, gt) : undefined,
  };
}
function Jr(_0x317293) {
  return {
    id: Fe.id,
    type: o.MenuItemType["BUTTON"],
    icon: "MergeAllIcon",
    title: "slides-table-ui.editorToolbar.mergeCells",
    tooltip: "slides-table-ui.editorToolbar.mergeCells",
    disabled$: _0x317293 ? G(_0x317293, pt) : undefined,
  };
}
function Yr(_0x589e66) {
  return {
    id: Ie.id,
    type: o.MenuItemType["BUTTON"],
    icon: "CancelMergeIcon",
    title: "slides-table-ui.editorToolbar.unmergeCells",
    tooltip: "slides-table-ui.editorToolbar.unmergeCells",
    disabled$: _0x589e66 ? G(_0x589e66, mt) : undefined,
  };
}
function Xr(_0x17b4f9) {
  return {
    id: Le.id,
    type: o.MenuItemType["BUTTON"],
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeRows",
    tooltip: "slides-table-ui.contextMenu.distributeRows",
    disabled$: _0x17b4f9 ? G(_0x17b4f9, _t) : undefined,
  };
}
function Zr(_0x9f40f3) {
  return {
    id: Re.id,
    type: o.MenuItemType["BUTTON"],
    icon: "AdjustWidthDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeColumns",
    tooltip: "slides-table-ui.contextMenu.distributeColumns",
    disabled$: _0x9f40f3 ? G(_0x9f40f3, vt) : undefined,
  };
}
function Qr(_0x5694f6) {
  let _0x439d93 = _0x5694f6.get(E).getSelection();
  return (
    !!_0x439d93 && _0x439d93.kind !== "text" && _0x439d93.ranges["length"] > 0
  );
}
const $r = {
    [o.MenuManagerPosition["CONTEXT_MENU"]]: {
      "slide-table.contextMenu.cell": {
        order: 23,
        [o.ContextMenuGroup["LAYOUT"]]: {
          order: 0,
          [Nr]: {
            order: 0,
            menuItemFactory: (0, r.withSlideEditPermission)(Ir),
            "slide-table.menu.insert-row-above": {
              order: 0,
              menuItemFactory: (0, r.withSlideEditPermission)(Hr),
            },
            "slide-table.menu.insert-row-below": {
              order: 1,
              menuItemFactory: (0, r.withSlideEditPermission)(Ur),
            },
            "slide-table.menu.insert-column-left": {
              order: 2,
              menuItemFactory: (0, r.withSlideEditPermission)(Wr),
            },
            "slide-table.menu.insert-column-right": {
              order: 3,
              menuItemFactory: (0, r.withSlideEditPermission)(Gr),
            },
          },
          [Pr]: {
            order: 1,
            menuItemFactory: (0, r.withSlideEditPermission)(Rr),
            "slide-table.menu.delete-rows": {
              order: 0,
              menuItemFactory: (0, r.withSlideEditPermission)(Kr),
            },
            "slide-table.menu.delete-columns": {
              order: 1,
              menuItemFactory: (0, r.withSlideEditPermission)(qr),
            },
          },
          "slide-table.menu.merge-cells": {
            order: 2,
            menuItemFactory: (0, r.withSlideEditPermission)(Jr),
          },
          "slide-table.menu.unmerge-cells": {
            order: 3,
            menuItemFactory: (0, r.withSlideEditPermission)(Yr),
          },
          [Fr]: {
            order: 4,
            menuItemFactory: (0, r.withSlideEditPermission)(Br),
            "slide-table.menu.distribute-rows": {
              order: 0,
              menuItemFactory: (0, r.withSlideEditPermission)(Xr),
            },
            "slide-table.menu.distribute-columns": {
              order: 1,
              menuItemFactory: (0, r.withSlideEditPermission)(Zr),
            },
          },
        },
        [o.ContextMenuGroup["OTHERS"]]: {
          order: 1,
          [Ve.id]: {
            order: 0,
            menuItemFactory: (0, r.withSlideEditPermission)(Vr),
          },
        },
      },
    },
  },
  ei = {
    [o.MenuManagerPosition["RIBBON"]]: {
      [_r]: {
        order: 101,
        contextual: true,
        "slides-table-ui.ribbon.styles": {
          order: 0,
          [vr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              width: 112,
            },
            menuItemFactory: (0, r.withSlideEditPermission)(Sr),
          },
        },
        "slides-table-ui.ribbon.cellStyle": {
          order: 1,
          [yr]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 56 },
            menuItemFactory: (0, r.withSlideEditPermission)(Cr),
          },
        },
        "slides-table-ui.ribbon.text": {
          order: 2,
          [br]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: (0, r.withSlideEditPermission)(wr),
          },
        },
        "slides-table-ui.ribbon.layout": {
          order: 3,
          "slide-table.ribbon.insert-row-above": {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: (0, r.withSlideEditPermission)(Hr),
          },
          "slide-table.ribbon.insert-row-below": {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: (0, r.withSlideEditPermission)(Ur),
          },
          "slide-table.ribbon.insert-column-left": {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: (0, r.withSlideEditPermission)(Wr),
          },
          "slide-table.ribbon.insert-column-right": {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: (0, r.withSlideEditPermission)(Gr),
          },
          "slide-table.ribbon.merge-cells": {
            order: 4,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: (0, r.withSlideEditPermission)(Jr),
          },
          "slide-table.ribbon.unmerge-cells": {
            order: 5,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: (0, r.withSlideEditPermission)(Yr),
          },
          "slide-table.ribbon.distribute-rows": {
            order: 6,
            gridLayout: { row: 1, column: 4 },
            menuItemFactory: (0, r.withSlideEditPermission)(Xr),
          },
          "slide-table.ribbon.distribute-columns": {
            order: 7,
            gridLayout: { row: 2, column: 4 },
            menuItemFactory: (0, r.withSlideEditPermission)(Zr),
          },
        },
        "slides-table-ui.ribbon.arrange": {
          order: 4,
          "slide-table.ribbon.arrange-forward": {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: (0, r.withSlideEditPermission)(kr),
          },
          "slide-table.ribbon.arrange-backward": {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: (0, r.withSlideEditPermission)(Ar),
          },
          "slide-table.ribbon.arrange-front": {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: (0, r.withSlideEditPermission)(jr),
          },
          "slide-table.ribbon.arrange-back": {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: (0, r.withSlideEditPermission)(Mr),
          },
        },
        "slides-table-ui.ribbon.panel": {
          order: 5,
          [Pr]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: (0, r.withSlideEditPermission)(zr),
            [Ve.id]: {
              order: 0,
              menuItemFactory: (0, r.withSlideEditPermission)(Vr),
            },
          },
          [Bt.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: Tr,
          },
        },
      },
    },
  },
  ti = "slides-table-ui.contextual-ribbon";
let ni = class extends i.Disposable {
  constructor(
    _0x55cd26,
    _0x4d42e6,
    _0x182fb4,
    _0x4b8194,
    _0x2c9ea9,
    _0x17b4dc,
    _0x70eae3,
    _0x405ab0,
  ) {
    (super(),
      (this._menuManagerService = _0x55cd26),
      (this._ribbonService = _0x4d42e6),
      (this._slideDrawingStateService = _0x182fb4),
      (this._slideDrawingService = _0x4b8194),
      (this._floatingToolbarService = _0x2c9ea9),
      (this._embedFocusOwnerService = _0x17b4dc),
      (this._embedFloatingActiveService = _0x70eae3),
      (this._embedMountService = _0x405ab0),
      T(this, "_tableDesignVisible", false),
      this._menuManagerService["mergeMenu"](ei),
      this._listenSelection());
  }
  dispose() {
    (this._floatingToolbarService["setFallbackVisible"](false, ti),
      this._hideTableDesignTab(),
      super.dispose());
  }
  _listenSelection() {
    this.disposeWithMe(
      (0, i.toDisposable)(
        this._slideDrawingStateService["state$"].subscribe((_0x14805e) => {
          var _0x937447;
          if (
            !this._isSingleTableSelection(_0x14805e) ||
            this._isActiveFloatingEmbedHostSelection(_0x14805e)
          ) {
            (this._floatingToolbarService["setFallbackVisible"](false, ti),
              this._hideTableDesignTab());
            return;
          }
          let _0x145bb1 =
            (_0x937447 = _0x14805e.context) == null
              ? undefined
              : _0x937447.unitId;
          if (_0x145bb1 && this._isIsolatedEmbedChildSelection(_0x145bb1)) {
            (this._floatingToolbarService["setFallbackVisible"](true, ti),
              this._hideTableDesignTab());
            return;
          }
          (this._floatingToolbarService["setFallbackVisible"](false, ti),
            this._tableDesignVisible ||
              ((this._tableDesignVisible = true),
              this._ribbonService["showContextualTab"](_r, {
                activate: true,
              })));
        }),
      ),
    );
  }
  _isSingleTableSelection(_0x797187) {
    var _0x45eb1b;
    let _0x590461 = _0x797187.context;
    return !_0x590461 || _0x797187.selectedIds["length"] !== 1
      ? false
      : ((_0x45eb1b = this._slideDrawingService["getDrawingByParam"]({
          unitId: _0x590461.unitId,
          subUnitId: _0x590461.subUnitId,
          drawingId: _0x797187.selectedIds[0],
        })) == null
          ? undefined
          : _0x45eb1b.element["type"]) === t.PageElementTypeEnum["Table"];
  }
  _isNonFullscreenFloatingEmbedChildSelection(_0x25b39c) {
    var _0x232d18, _0x1157bb;
    let _0x572570 =
        (_0x232d18 = this._embedFocusOwnerService) == null
          ? undefined
          : _0x232d18.getFocusOwner(),
      _0x47da37 =
        (_0x1157bb = this._embedFloatingActiveService) == null
          ? undefined
          : _0x1157bb.getActive();
    return (
      (_0x572570 == null ? undefined : _0x572570.childUnitId) === _0x25b39c &&
      (_0x47da37 == null ? undefined : _0x47da37.childUnitId) === _0x25b39c &&
      _0x47da37.stage === "stage2"
    );
  }
  _isIsolatedEmbedChildSelection(_0x4c6419) {
    var _0xea6a27;
    return this._isNonFullscreenFloatingEmbedChildSelection(_0x4c6419)
      ? true
      : (((_0xea6a27 = this._embedMountService) == null
          ? undefined
          : _0xea6a27
              .listSessions()
              .some(
                (_0x5041db) =>
                  _0x5041db.childUnitId === _0x4c6419 &&
                  _0x5041db.layout !== "tab-peer",
              )) ?? false);
  }
  _isActiveFloatingEmbedHostSelection(_0x47219b) {
    var _0x3c7b4c, _0x2e3adf, _0x14d81d, _0x2145ea;
    let _0x125b6f =
      (_0x3c7b4c = this._embedFloatingActiveService) == null
        ? undefined
        : _0x3c7b4c.getActive();
    if (
      !_0x125b6f ||
      _0x125b6f.stage === "inactive" ||
      ((_0x2e3adf = _0x47219b.context) == null
        ? undefined
        : _0x2e3adf.unitId) !== _0x125b6f.hostUnitId ||
      _0x47219b.selectedIds["length"] !== 1
    )
      return false;
    let _0x192ff1 =
        (_0x14d81d = this._embedMountService) == null
          ? undefined
          : _0x14d81d
              .listSessions()
              .find(
                (_0x1e22c0) =>
                  _0x1e22c0.hostUnitId === _0x125b6f.hostUnitId &&
                  _0x1e22c0.embedId === _0x125b6f.embedId &&
                  _0x1e22c0.childUnitId === _0x125b6f.childUnitId,
              ),
      _0x4128d2 =
        _0x192ff1 == null || (_0x2145ea = _0x192ff1.context) == null
          ? undefined
          : _0x2145ea.descriptor["hostAnchorId"];
    return !!_0x4128d2 && _0x47219b.selectedIds[0] === _0x4128d2;
  }
  _hideTableDesignTab() {
    this._tableDesignVisible &&
      ((this._tableDesignVisible = false),
      this._ribbonService["hideContextualTab"](_r),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
ni = V(
  [
    B(0, o.IMenuManagerService),
    B(1, o.IRibbonService),
    B(2, (0, i.Inject)(r.ISlideDrawingStateService)),
    B(3, (0, i.Inject)(t.ISlideDrawingService)),
    B(4, (0, i.Inject)(H)),
    B(5, (0, i.Optional)(r.ISlideEmbedFocusOwnerService)),
    B(6, (0, i.Optional)(r.ISlideEmbedFloatingActiveService)),
    B(7, (0, i.Optional)(r.ISlideEmbedMountService)),
  ],
  ni,
);
function ri(_0x34da6d) {
  var _0x3182af;
  let {
      selection: _0x4c2e07,
      table: _0x28562a,
      tableHeight: _0xdfb776,
      tableWidth: _0x3aaa47,
    } = _0x34da6d,
    _0x341bf6 = _0x4c2e07 == null ? undefined : _0x4c2e07.ranges[0];
  if (!_0x4c2e07 || !_0x28562a || !_0x341bf6) return null;
  let _0x136235 = _0x4c2e07.focus ?? _0x4c2e07.anchor ?? gi(_0x341bf6);
  if (!_0x136235) return null;
  let _0x259c5e = (0, n.resolveSlideTableRenderModel)(_0x28562a),
    _0x1f6525 =
      _0x259c5e.cells["find"](
        (_0x39fa6f) =>
          !_0x39fa6f.hidden &&
          _0x39fa6f.row === _0x136235.row &&
          _0x39fa6f.column === _0x136235.column,
      ) ??
      _0x259c5e.cells["find"](
        (_0x3dbe38) =>
          !_0x3dbe38.hidden &&
          _0x136235.row >= _0x3dbe38.row &&
          _0x136235.row < _0x3dbe38.row + _0x3dbe38.rowSpan &&
          _0x136235.column >= _0x3dbe38.column &&
          _0x136235.column < _0x3dbe38.column + _0x3dbe38.columnSpan,
      );
  if (!_0x1f6525) return null;
  let _0x5c5a8e = q(_0x3aaa47 / _0x259c5e.width, 1),
    _0x213226 = q(_0xdfb776 / _0x259c5e.height, 1),
    _0x53561a =
      (_0x3182af = _0x28562a.rows[_0x1f6525.row]) == null
        ? undefined
        : _0x3182af.cells[_0x1f6525.column];
  return {
    row: _0x1f6525.row,
    column: _0x1f6525.column,
    cellStyle: _0x1f6525.style,
    rect: _i(
      {
        left: _0x1f6525.bounds["left"] * _0x5c5a8e,
        top: _0x1f6525.bounds["top"] * _0x213226,
        width: _0x1f6525.bounds["width"] * _0x5c5a8e,
        height: _0x1f6525.bounds["height"] * _0x213226,
      },
      _0x1f6525.style["margins"],
    ),
    documentData: ci(
      _0x53561a == null ? undefined : _0x53561a.textData,
      hi(_0x28562a.id, _0x1f6525.row, _0x1f6525.column),
    ),
  };
}
function ii(_0x38af5b, _0x475eaf, _0x2bdd0b, _0x2ad7a6 = "") {
  return ci(
    {
      id: hi(_0x38af5b, _0x475eaf, _0x2bdd0b),
      body: {
        dataStream: _0x2ad7a6 + "\x0d\x0a",
        paragraphs: [mi()],
        textRuns: [],
      },
      documentStyle: {},
    },
    hi(_0x38af5b, _0x475eaf, _0x2bdd0b),
  );
}
function ai(_0x355512, _0x230d8c) {
  var _0x29fe25;
  let _0xdd4ccd =
      _0x230d8c.replace(/\r\n/g, "\x0d").replace(/\n/g, "\x0d") + "\x0d\x0a",
    _0x40cc03 = Math.max(0, _0xdd4ccd.length - 2),
    _0x2861f8 =
      (_0x29fe25 = _0x355512.body) == null ||
      (_0x29fe25 = _0x29fe25.textRuns) == null ||
      (_0x29fe25 = _0x29fe25.find((_0x4c1cdc) => _0x4c1cdc.ts)) == null
        ? undefined
        : _0x29fe25.ts;
  return ci(
    {
      ...i.Tools["deepClone"](_0x355512),
      body: {
        ..._0x355512.body,
        dataStream: _0xdd4ccd,
        paragraphs: ui(_0xdd4ccd),
        textRuns:
          _0x2861f8 && _0x40cc03 > 0
            ? [{ st: 0, ed: _0x40cc03, ts: { ..._0x2861f8 } }]
            : [],
      },
    },
    _0x355512.id ?? "SLIDE_TABLE_CELL",
  );
}
function oi(_0x33834c) {
  var _0x55db5e, _0x5a1dfd;
  let {
      rect: _0x2f3030,
      scenePointToViewportPoint: _0x109351,
      tableTransform: _0x560b90,
    } = _0x33834c,
    _0x1b494f = K(_0x560b90.left, 0),
    _0x1350c0 = K(_0x560b90.top, 0),
    _0x1f5ab7 = q(_0x560b90.width, 1),
    _0x1f01e2 = q(_0x560b90.height, 1),
    _0x203cba = q(_0x2f3030.width, 1),
    _0x594128 = q(_0x2f3030.height, 1),
    _0x1c179c = _0x2f3030.left + _0x203cba / 2 - _0x1f5ab7 / 2,
    _0x3a33a2 = _0x2f3030.top + _0x594128 / 2 - _0x1f01e2 / 2,
    _0x41e880 = (K(_0x560b90.angle, 0) * Math.PI) / 180,
    _0x3cb291 =
      _0x1c179c * Math.cos(_0x41e880) - _0x3a33a2 * Math.sin(_0x41e880),
    _0x333e31 =
      _0x1c179c * Math.sin(_0x41e880) + _0x3a33a2 * Math.cos(_0x41e880),
    _0x4b72d2 = _0x109351({
      x: _0x1b494f + _0x1f5ab7 / 2 + _0x3cb291,
      y: _0x1350c0 + _0x1f01e2 / 2 + _0x333e31,
    });
  return {
    rect: {
      left: _0x4b72d2.x - _0x203cba / 2,
      top: _0x4b72d2.y - _0x594128 / 2,
      width: _0x203cba,
      height: _0x594128,
    },
    scale: {
      scaleX: q(
        (_0x55db5e = _0x33834c.scale) == null ? undefined : _0x55db5e.scaleX,
        1,
      ),
      scaleY: q(
        (_0x5a1dfd = _0x33834c.scale) == null ? undefined : _0x5a1dfd.scaleY,
        1,
      ),
    },
    transform: { angle: 0, flipX: false, flipY: _0x560b90.flipY },
  };
}
function si(_0x5868ca, _0x5794b7, _0x4d3077) {
  return _0x5868ca
    ? {
        commandId: _0x4d3077,
        params: {
          unitId: _0x5868ca.unitId,
          tableId: _0x5868ca.tableId,
          row: _0x5868ca.row,
          column: _0x5868ca.column,
          textData: _0x5794b7,
        },
      }
    : null;
}
function ci(_0x29888e, _0x2e8cb9) {
  var _0x2dec66, _0x2525b5, _0x262195, _0x1bbebf, _0x182255;
  let _0x1b226a = i.Tools["deepClone"](
      _0x29888e ?? {
        id: _0x2e8cb9,
        body: { dataStream: "\x0d\x0a", paragraphs: [mi()], textRuns: [] },
        documentStyle: {},
      },
    ),
    _0x62c592 = li(
      (_0x2dec66 = _0x1b226a.body) == null ? undefined : _0x2dec66.dataStream,
    ),
    _0x1d434d =
      (_0x2525b5 = _0x1b226a.documentStyle) == null ||
      (_0x2525b5 = _0x2525b5.renderConfig) == null
        ? undefined
        : _0x2525b5.horizontalAlign,
    _0x2a068d = {
      ..._0x1b226a.body,
      dataStream: _0x62c592,
      paragraphs: di(
        pi(
          (_0x262195 = _0x1b226a.body) != null &&
            (_0x262195 = _0x262195.paragraphs) != null &&
            _0x262195.length
            ? _0x1b226a.body["paragraphs"]
            : ui(_0x62c592),
        ),
        _0x1d434d,
      ),
      textRuns: fi(
        ((_0x1bbebf = _0x1b226a.body) == null
          ? undefined
          : _0x1bbebf.textRuns) ?? [],
      ),
    },
    _0x11a72d = _0x1b226a.documentStyle ? { ..._0x1b226a.documentStyle } : {};
  return (
    (_0x182255 = _0x11a72d.textStyle) != null &&
      _0x182255.bg &&
      ((_0x11a72d.textStyle = { ..._0x11a72d.textStyle }),
      delete _0x11a72d.textStyle["bg"]),
    {
      ..._0x1b226a,
      id: _0x1b226a.id ?? _0x2e8cb9,
      body: _0x2a068d,
      documentStyle: {
        ..._0x11a72d,
        documentFlavor: i.DocumentFlavor["UNSPECIFIED"],
      },
    }
  );
}
function li(_0x217317) {
  if (!_0x217317) return "\x0d\x0a";
  let _0x4ffced = _0x217317.replace(/\r\n/g, "\x0d").replace(/\n/g, "\x0d");
  return _0x4ffced.endsWith("\x0d")
    ? _0x4ffced + "\x0a"
    : _0x4ffced + "\x0d\x0a";
}
function ui(_0x3d015e) {
  let _0x4b0a6e = Math.max(1, _0x3d015e.split("\x0d").length - 1),
    _0x41fa27 = 0;
  return Array.from({ length: _0x4b0a6e }, () => {
    let _0x110fb7 = mi(_0x41fa27),
      _0x2d3f02 = _0x3d015e.indexOf("\x0d", _0x41fa27);
    return (
      (_0x41fa27 = _0x2d3f02 >= 0 ? _0x2d3f02 + 1 : _0x3d015e.length),
      _0x110fb7
    );
  });
}
function di(_0x4b944a, _0x25a1b2) {
  return _0x25a1b2 === undefined
    ? _0x4b944a
    : _0x4b944a.map((_0x4a9c34) => ({
        ..._0x4a9c34,
        paragraphStyle: {
          ..._0x4a9c34.paragraphStyle,
          horizontalAlign: _0x25a1b2,
        },
      }));
}
function fi(_0x21c5ba) {
  return _0x21c5ba.map((_0x4a10af) => {
    var _0x39023e;
    if (!((_0x39023e = _0x4a10af.ts) != null && _0x39023e.bg)) return _0x4a10af;
    let _0x1a5842 = { ..._0x4a10af.ts };
    return (delete _0x1a5842.bg, { ..._0x4a10af, ts: _0x1a5842 });
  });
}
function pi(_0x355b12) {
  return _0x355b12 != null && _0x355b12.length
    ? _0x355b12.map((_0x187e15, _0x277840) => ({
        ..._0x187e15,
        startIndex:
          typeof _0x187e15.startIndex == "number"
            ? _0x187e15.startIndex
            : _0x277840,
        paragraphId:
          _0x187e15.paragraphId ?? (0, i.createParagraphId)(new Set()),
      }))
    : [mi()];
}
function mi(_0x438d25 = 0) {
  return {
    startIndex: _0x438d25,
    paragraphId: (0, i.createParagraphId)(new Set()),
  };
}
function hi(_0x3769d0, _0x149136, _0x17b8a8) {
  return "SLIDE_TABLE_CELL_" + _0x3769d0 + "_" + _0x149136 + "_" + _0x17b8a8;
}
function gi(_0x528970) {
  let _0x39b837 = (0, n.normalizeSlideTableCellRange)(_0x528970);
  return { row: _0x39b837.startRow, column: _0x39b837.startColumn };
}
function _i(_0x581c8e, _0x5df26f) {
  let _0x492117 = K(_0x5df26f == null ? undefined : _0x5df26f.left, 4),
    _0x32b136 = K(_0x5df26f == null ? undefined : _0x5df26f.right, 4),
    _0x2de5a5 = K(_0x5df26f == null ? undefined : _0x5df26f.top, 4),
    _0x1801ba = K(_0x5df26f == null ? undefined : _0x5df26f.bottom, 4);
  return {
    left: _0x581c8e.left + _0x492117,
    top: _0x581c8e.top + _0x2de5a5,
    width: Math.max(1, _0x581c8e.width - _0x492117 - _0x32b136),
    height: Math.max(1, _0x581c8e.height - _0x2de5a5 - _0x1801ba),
  };
}
function K(_0x5b85ca, _0x352f80) {
  return typeof _0x5b85ca == "number" && Number.isFinite(_0x5b85ca)
    ? _0x5b85ca
    : _0x352f80;
}
function q(_0x1b3e8d, _0x254d4c) {
  let _0x18c5b3 = K(_0x1b3e8d, _0x254d4c);
  return _0x18c5b3 > 0 ? _0x18c5b3 : Math.max(1, _0x254d4c);
}
function vi(_0x13d482, _0x1b802e) {
  let _0x11d29d = Ti(_0x13d482, _0x1b802e);
  if (!_0x13d482 || !_0x11d29d) return "";
  let _0x45afc1 = [];
  for (
    let _0x58cc1 = _0x11d29d.startRow;
    _0x58cc1 <= _0x11d29d.endRow;
    _0x58cc1 += 1
  ) {
    let _0x4e13fb = [];
    for (
      let _0x2daeae = _0x11d29d.startColumn;
      _0x2daeae <= _0x11d29d.endColumn;
      _0x2daeae += 1
    ) {
      var _0x80aeaa;
      let _0x2f359f =
        (_0x80aeaa = _0x13d482.rows[_0x58cc1]) == null
          ? undefined
          : _0x80aeaa.cells[_0x2daeae];
      if (
        (_0x2f359f != null && _0x2f359f.hMerge) ||
        (_0x2f359f != null && _0x2f359f.vMerge)
      ) {
        _0x4e13fb.push("");
        continue;
      }
      _0x4e13fb.push(
        ki(wi(_0x2f359f == null ? undefined : _0x2f359f.textData)),
      );
    }
    _0x45afc1.push(_0x4e13fb.join("\x09"));
  }
  return _0x45afc1.join("\x0a");
}
function yi(_0x139207, _0x3ccee4) {
  let _0xbe4513 = Ti(_0x139207, _0x3ccee4);
  if (!_0x139207 || !_0xbe4513) return "";
  let _0x478042 = _0x139207.columns["slice"](
      _0xbe4513.startColumn,
      _0xbe4513.endColumn + 1,
    )
      .map((_0x3be8e2) => '<col style="width: ' + _0x3be8e2.width + 'px">')
      .join(""),
    _0x1c6cde = [];
  for (
    let _0x3c5fac = _0xbe4513.startRow;
    _0x3c5fac <= _0xbe4513.endRow;
    _0x3c5fac += 1
  ) {
    let _0x367d2e = _0x139207.rows[_0x3c5fac];
    if (!_0x367d2e) continue;
    let _0x18c9ef = [];
    for (
      let _0x449d39 = _0xbe4513.startColumn;
      _0x449d39 <= _0xbe4513.endColumn;
      _0x449d39 += 1
    ) {
      let _0x1688c4 = _0x367d2e.cells[_0x449d39];
      if (!_0x1688c4 || _0x1688c4.hMerge || _0x1688c4.vMerge) continue;
      let _0x4a4a7b = Math.min(
          _0x1688c4.rowSpan ?? 1,
          _0xbe4513.endRow - _0x3c5fac + 1,
        ),
        _0x29a995 = Math.min(
          _0x1688c4.columnSpan ?? 1,
          _0xbe4513.endColumn - _0x449d39 + 1,
        ),
        _0x6f30d8 = [
          _0x4a4a7b > 1 ? "rowspan=\x22" + _0x4a4a7b + "\x22" : "",
          _0x29a995 > 1 ? 'colspan="' + _0x29a995 + "\x22" : "",
          bi(_0x1688c4),
        ]
          .filter(Boolean)
          .join("\x20"),
        _0x41fd1e = _0x1688c4.textData
          ? (0, d.convertBodyToHtml)(i.Tools["deepClone"](_0x1688c4.textData))
          : "";
      _0x18c9ef.push(
        "<td" +
          (_0x6f30d8 ? "\x20" + _0x6f30d8 : "") +
          ">" +
          _0x41fd1e +
          "</td>",
      );
    }
    _0x1c6cde.push(
      "<tr" +
        (_0x367d2e.height
          ? ' style="height: ' + _0x367d2e.height + 'px"'
          : "") +
        ">" +
        _0x18c9ef.join("") +
        "</tr>",
    );
  }
  return (
    "<table><colgroup>" +
    _0x478042 +
    "</colgroup><tbody>" +
    _0x1c6cde.join("") +
    "</tbody></table>"
  );
}
function bi(_0x81a4da) {
  var _0x1cf36d, _0x17e761;
  let _0x3d3c86 = [];
  ((_0x1cf36d = _0x81a4da.style) == null || (_0x1cf36d = _0x1cf36d.fill) == null
    ? undefined
    : _0x1cf36d.type) === n.SlideTableFillTypeEnum["Solid"] &&
    _0x81a4da.style["fill"].color &&
    _0x3d3c86.push("background-color:\x20" + _0x81a4da.style["fill"].color);
  let _0x22de04 =
    (_0x17e761 = _0x81a4da.style) == null ? undefined : _0x17e761.borders;
  return (
    _0x22de04 &&
      ["top", "right", "bottom", "left"].forEach((_0xedfb5d) => {
        let _0x1717ff = _0x22de04[_0xedfb5d];
        _0x1717ff != null &&
          _0x1717ff.color &&
          _0x1717ff.width !== undefined &&
          _0x3d3c86.push(
            "border-" +
              _0xedfb5d +
              ":\x20" +
              _0x1717ff.width +
              "px solid " +
              _0x1717ff.color,
          );
      }),
    _0x3d3c86.length > 0 ? 'style="' + Mi(_0x3d3c86.join(";\x20")) + "\x22" : ""
  );
}
function xi(_0xa44ef9, _0x3153f2, _0x4dcd24) {
  if (!_0xa44ef9 || !_0x3153f2 || _0x4dcd24.length === 0) return null;
  let _0x45a8af = Di(_0xa44ef9, _0x3153f2);
  if (!_0x45a8af) return null;
  let _0x3fbb64 = Oi(_0x4dcd24);
  if (_0x3fbb64.length === 0) return null;
  let _0x476485 = i.Tools["deepClone"](_0xa44ef9.rows),
    _0x4fda41 = false;
  return (
    _0x3fbb64.forEach((_0x29285a, _0x2d83d7) => {
      let _0x5abf3c = _0x45a8af.row + _0x2d83d7;
      _0x5abf3c < 0 ||
        _0x5abf3c >= _0x476485.length ||
        _0x29285a.forEach((_0x5b7a96, _0x184b2c) => {
          let _0x441dca = _0x45a8af.column + _0x184b2c;
          if (_0x441dca < 0 || _0x441dca >= _0xa44ef9.columns["length"]) return;
          let _0x5d9e3d = _0x476485[_0x5abf3c],
            _0x36df68 =
              _0x5d9e3d == null ? undefined : _0x5d9e3d.cells[_0x441dca];
          !_0x5d9e3d ||
            !_0x36df68 ||
            _0x36df68.hMerge ||
            _0x36df68.vMerge ||
            ((_0x5d9e3d.cells[_0x441dca] = {
              ..._0x36df68,
              textData: _0x36df68.textData
                ? ai(_0x36df68.textData, _0x5b7a96)
                : ii(_0xa44ef9.id, _0x5abf3c, _0x441dca, _0x5b7a96),
            }),
            (_0x4fda41 = true));
        });
    }),
    _0x4fda41 ? { rows: _0x476485 } : null
  );
}
function Si(_0x5bc22f, _0x498d0e, _0x3f7363) {
  if (!_0x5bc22f || !_0x498d0e || !_0x3f7363) return null;
  let _0x3ce5de = Di(_0x5bc22f, _0x498d0e);
  if (!_0x3ce5de) return null;
  let _0x51f0c9 = (0, _.parseHtmlTableClipboard)(_0x3f7363),
    _0x4e09ff =
      _0x51f0c9.rows["length"] > 0
        ? _0x51f0c9.rows["map"]((_0x2e8dac) => _0x2e8dac.cells)
        : [[{ html: _0x3f7363, text: "", rowSpan: 1, colSpan: 1 }]];
  if (
    !_0x4e09ff.some((_0x5558e7) =>
      _0x5558e7.some((_0x1401e7) => _0x1401e7 !== null),
    )
  )
    return null;
  let _0xf696ae = Math.max(
      1,
      ..._0x4e09ff.map((_0x37f0c0) => _0x37f0c0.length),
    ),
    _0x10ddfd = {
      startRow: _0x3ce5de.row,
      endRow: Math.min(
        _0x5bc22f.rows["length"] - 1,
        _0x3ce5de.row + _0x4e09ff.length - 1,
      ),
      startColumn: _0x3ce5de.column,
      endColumn: Math.min(
        _0x5bc22f.columns["length"] - 1,
        _0x3ce5de.column + _0xf696ae - 1,
      ),
    },
    _0x1ef33f = (0, n.collectSlideTableMergeRanges)(_0x5bc22f)
      .filter((_0x40dd62) => Ni(_0x40dd62, _0x10ddfd))
      .reduce(
        (_0x31d986, _0x2a7e47) =>
          (0, n.unmergeSlideTableCells)(
            _0x31d986,
            _0x2a7e47.startRow,
            _0x2a7e47.startColumn,
          ),
        i.Tools["deepClone"](_0x5bc22f),
      ),
    _0x24567b = [],
    _0x9b4f8 = false;
  return (
    _0x4e09ff.forEach((_0x378a7d, _0x11e46f) => {
      _0x378a7d.forEach((_0x47a58d, _0x52faba) => {
        var _0xaf9a51;
        let _0x36168d = _0x3ce5de.row + _0x11e46f,
          _0x4ea0c1 = _0x3ce5de.column + _0x52faba,
          _0x7c3d6b =
            (_0xaf9a51 = _0x1ef33f.rows[_0x36168d]) == null
              ? undefined
              : _0xaf9a51.cells[_0x4ea0c1];
        if (!_0x47a58d || !_0x7c3d6b) return;
        let _0x18978e =
          Ai((0, d.removeClipboardHtmlImages)(_0x47a58d.html)) ??
          ii(_0x5bc22f.id, _0x36168d, _0x4ea0c1, _0x47a58d.text);
        _0x1ef33f.rows[_0x36168d].cells[_0x4ea0c1] = {
          ..._0x7c3d6b,
          textData: ci(
            _0x18978e,
            _0x5bc22f.id + "-" + _0x36168d + "-" + _0x4ea0c1,
          ),
          style: ji(_0x7c3d6b.style, _0x47a58d),
        };
        let _0x338ee0 = Math.min(
            _0x47a58d.rowSpan,
            _0x5bc22f.rows["length"] - _0x36168d,
          ),
          _0x5ab7b5 = Math.min(
            _0x47a58d.colSpan,
            _0x5bc22f.columns["length"] - _0x4ea0c1,
          );
        ((_0x338ee0 > 1 || _0x5ab7b5 > 1) &&
          _0x24567b.push({
            startRow: _0x36168d,
            endRow: _0x36168d + _0x338ee0 - 1,
            startColumn: _0x4ea0c1,
            endColumn: _0x4ea0c1 + _0x5ab7b5 - 1,
          }),
          (_0x9b4f8 = true));
      });
    }),
    _0x24567b.forEach((_0x4f0a47) => {
      _0x1ef33f = (0, n.mergeSlideTableCells)(_0x1ef33f, _0x4f0a47);
    }),
    _0x9b4f8 ? { rows: _0x1ef33f.rows } : null
  );
}
function Ci(_0x5c13e0, _0x3d6dba) {
  let _0xcc0787 = Ei(_0x5c13e0, _0x3d6dba);
  if (!_0x5c13e0 || _0xcc0787.length === 0) return null;
  let _0x68d61d = i.Tools["deepClone"](_0x5c13e0.rows),
    _0x35d4b0 = false;
  return (
    _0xcc0787.forEach((_0x33412f) => {
      for (
        let _0x20ec82 = _0x33412f.startRow;
        _0x20ec82 <= _0x33412f.endRow;
        _0x20ec82 += 1
      ) {
        let _0x60eb30 = _0x68d61d[_0x20ec82];
        if (_0x60eb30)
          for (
            let _0x2b238c = _0x33412f.startColumn;
            _0x2b238c <= _0x33412f.endColumn;
            _0x2b238c += 1
          ) {
            let _0x19d1e8 = _0x60eb30.cells[_0x2b238c];
            if (!(_0x19d1e8 != null && _0x19d1e8.textData)) continue;
            let _0x1fffd = { ..._0x19d1e8 };
            (delete _0x1fffd.textData,
              (_0x60eb30.cells[_0x2b238c] = _0x1fffd),
              (_0x35d4b0 = true));
          }
      }
    }),
    _0x35d4b0 ? { rows: _0x68d61d } : null
  );
}
function wi(_0x25b7c0) {
  var _0x1cb06f;
  let _0x491fd2 =
    _0x25b7c0 == null || (_0x1cb06f = _0x25b7c0.body) == null
      ? undefined
      : _0x1cb06f.dataStream;
  return _0x491fd2
    ? _0x491fd2
        .replace(/\r\n/g, "\x0a")
        .replace(/\r/g, "\x0a")
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
        .replace(/\n+$/g, "")
    : "";
}
function Ti(_0x5c72f0, _0x45bf01) {
  return Ei(_0x5c72f0, _0x45bf01)[0] ?? null;
}
function Ei(_0x3c8856, _0x44e39e) {
  if (!_0x3c8856 || !(_0x44e39e != null && _0x44e39e.ranges["length"]))
    return [];
  let _0x118c36 = _0x3c8856.rows["length"] - 1,
    _0x1c2f56 = _0x3c8856.columns["length"] - 1;
  return _0x118c36 < 0 || _0x1c2f56 < 0
    ? []
    : _0x44e39e.ranges["map"]((_0x392129) => {
        let _0x1d5439 = (0, n.normalizeSlideTableCellRange)(_0x392129);
        return {
          startRow: Math.max(0, Math.min(_0x1d5439.startRow, _0x118c36)),
          endRow: Math.max(0, Math.min(_0x1d5439.endRow, _0x118c36)),
          startColumn: Math.max(0, Math.min(_0x1d5439.startColumn, _0x1c2f56)),
          endColumn: Math.max(0, Math.min(_0x1d5439.endColumn, _0x1c2f56)),
        };
      });
}
function Di(_0x5a9f04, _0x219c21) {
  let _0x420c4a = Ti(_0x5a9f04, _0x219c21);
  if (!_0x420c4a) return null;
  let _0x26010f = _0x219c21.focus ?? _0x219c21.anchor;
  return _0x26010f
    ? {
        row: Math.max(
          _0x420c4a.startRow,
          Math.min(_0x26010f.row, _0x420c4a.endRow),
        ),
        column: Math.max(
          _0x420c4a.startColumn,
          Math.min(_0x26010f.column, _0x420c4a.endColumn),
        ),
      }
    : { row: _0x420c4a.startRow, column: _0x420c4a.startColumn };
}
function Oi(_0x1651a7) {
  let _0x4a508a = _0x1651a7
    .replace(/\r\n/g, "\x0a")
    .replace(/\r/g, "\x0a")
    .replace(/\n$/g, "");
  return _0x4a508a
    ? _0x4a508a.split("\x0a").map((_0x11c3b5) => _0x11c3b5.split("\x09"))
    : [];
}
function ki(_0x100ea7) {
  return _0x100ea7.replace(/\t/g, "\x20").replace(/\n/g, "\x20");
}
function Ai(_0x3b659e) {
  try {
    var _0x51a89e;
    let _0x46b7e8 = (0, d.convertClipboardHtmlToDocumentData)(_0x3b659e);
    return (_0x51a89e = _0x46b7e8.body) != null && _0x51a89e.dataStream
      ? {
          ..._0x46b7e8,
          id: _0x46b7e8.id || (0, i.generateRandomId)(6),
          body: _0x46b7e8.body,
          documentStyle: _0x46b7e8.documentStyle ?? {},
        }
      : null;
  } catch {
    return null;
  }
}
function ji(_0x5afaf7, _0x23022d) {
  let _0x233202 =
    _0x23022d.borderColor || _0x23022d.borderWidth
      ? {
          color: _0x23022d.borderColor,
          width: _0x23022d.borderWidth,
          dash: n.SlideTableBorderDashEnum["Solid"],
        }
      : undefined;
  return !_0x23022d.backgroundColor && !_0x233202
    ? _0x5afaf7
    : {
        ..._0x5afaf7,
        fill: _0x23022d.backgroundColor
          ? {
              type: n.SlideTableFillTypeEnum["Solid"],
              color: _0x23022d.backgroundColor,
            }
          : _0x5afaf7 == null
            ? undefined
            : _0x5afaf7.fill,
        borders: _0x233202
          ? {
              top: _0x233202,
              right: _0x233202,
              bottom: _0x233202,
              left: _0x233202,
            }
          : _0x5afaf7 == null
            ? undefined
            : _0x5afaf7.borders,
      };
}
function Mi(_0x5c1a3e) {
  return _0x5c1a3e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Ni(_0x15e378, _0x5797ec) {
  return (
    _0x15e378.startRow <= _0x5797ec.endRow &&
    _0x15e378.endRow >= _0x5797ec.startRow &&
    _0x15e378.startColumn <= _0x5797ec.endColumn &&
    _0x15e378.endColumn >= _0x5797ec.startColumn
  );
}
function Pi(_0x111d7a, _0x58ce6e, _0x20675b) {
  if (
    _0x58ce6e < 0 ||
    _0x20675b < 0 ||
    _0x58ce6e > _0x111d7a.width ||
    _0x20675b > _0x111d7a.height
  )
    return null;
  let _0x3109d3 = _0x111d7a.cells["find"](
    (_0x1e71db) => !_0x1e71db.hidden && Fi(_0x1e71db, _0x58ce6e, _0x20675b),
  );
  return _0x3109d3
    ? { kind: "cell", row: _0x3109d3.row, column: _0x3109d3.column }
    : null;
}
function Fi(_0x1f7bab, _0x3061df, _0x16f69e) {
  return (
    _0x3061df >= _0x1f7bab.bounds["left"] &&
    _0x3061df <= _0x1f7bab.bounds["left"] + _0x1f7bab.bounds["width"] &&
    _0x16f69e >= _0x1f7bab.bounds["top"] &&
    _0x16f69e <= _0x1f7bab.bounds["top"] + _0x1f7bab.bounds["height"]
  );
}
function Ii(_0x2001f8) {
  return (
    ((_0x2001f8 == null ? undefined : _0x2001f8.kind) === "row-insert-dot" &&
      _0x2001f8.row !== undefined) ||
    ((_0x2001f8 == null ? undefined : _0x2001f8.kind) === "column-insert-dot" &&
      _0x2001f8.column !== undefined)
  );
}
function Li(_0x595fb4) {
  return _0x595fb4.kind === "row-insert-dot"
    ? {
        visible: true,
        hoveredTrigger: _0x595fb4,
        insertGuide: { kind: "row", index: _0x595fb4.row + 1 },
      }
    : {
        visible: true,
        hoveredTrigger: _0x595fb4,
        insertGuide: { kind: "column", index: _0x595fb4.column + 1 },
      };
}
const Ri = "SLIDE_TABLE_EDITOR_UNIT_ID",
  zi = -10000;
function Bi(_0x16da3a) {
  if (
    typeof _0x16da3a.insertIndex == "number" &&
    Number.isInteger(_0x16da3a.insertIndex)
  )
    return _0x16da3a.insertIndex;
  let _0x398967 =
    _0x16da3a.kind === "row-insert-dot" ? _0x16da3a.row : _0x16da3a.column;
  return typeof _0x398967 == "number" && Number.isInteger(_0x398967)
    ? _0x398967 + 1
    : null;
}
function Vi(
  _0x5d0138,
  _0x1fa01e,
  _0x852496,
  _0x1c4e17,
  _0x29017b,
  _0x2766ce = 6,
) {
  if (
    _0x1c4e17 < 0 ||
    _0x29017b < 0 ||
    _0x1c4e17 > _0x1fa01e ||
    _0x29017b > _0x852496
  )
    return null;
  let _0x1e2c71 = X(
      _0x5d0138.columns["map"]((_0x23f589) => _0x23f589.width),
      _0x1fa01e,
    ),
    _0x8a183a = X(
      _0x5d0138.rows["map"]((_0x34378b) => _0x34378b.height ?? 24),
      _0x852496,
    ),
    _0x56ba43 = Zi(_0x1e2c71, _0x1c4e17, _0x2766ce),
    _0x415766 = Zi(_0x8a183a, _0x29017b, _0x2766ce);
  return !_0x56ba43 && !_0x415766
    ? null
    : _0x56ba43 && (!_0x415766 || _0x56ba43.distance <= _0x415766.distance)
      ? { axis: "column", boundaryIndex: _0x56ba43.boundaryIndex }
      : { axis: "row", boundaryIndex: _0x415766.boundaryIndex };
}
function Hi(_0x483e7c, _0x5a4ae6, _0x495dc6, _0x123c69) {
  let _0x2c2b8d = i.Tools["deepClone"](_0x483e7c),
    _0x2b8f91 = Math.max(1, _0x123c69.minSize ?? 12);
  if (_0x123c69.axis === "column")
    _0x2c2b8d.columns = Qi(
      X(
        _0x483e7c.columns["map"]((_0x38e4af) => _0x38e4af.width),
        _0x5a4ae6,
      ),
      _0x123c69.boundaryIndex,
      _0x123c69.delta,
      _0x2b8f91,
    ).map((_0x7b987) => ({ width: _0x7b987 }));
  else {
    let _0x244772 = Qi(
      X(
        _0x483e7c.rows["map"]((_0x45fcee) => _0x45fcee.height ?? 24),
        _0x495dc6,
      ),
      _0x123c69.boundaryIndex,
      _0x123c69.delta,
      _0x2b8f91,
    );
    _0x2c2b8d.rows = _0x2c2b8d.rows["map"]((_0x13abd9, _0x5a3dc4) => ({
      ..._0x13abd9,
      height: _0x244772[_0x5a3dc4] ?? _0x13abd9.height ?? 24,
    }));
  }
  return _0x2c2b8d;
}
let Ui = class extends i.RxDisposable {
  constructor(
    _0x42f060,
    _0x26ff6f,
    _0x199e99,
    _0x549be9,
    _0x4b8d51,
    _0x226d1f,
    _0x107c9b,
    _0x227717,
    _0x496b54,
    _0x27aede,
    _0x4f38f6,
    _0x1847b6,
    _0x42dcd9,
    _0x50119f,
    _0x99eab8,
    _0x200a2d,
  ) {
    (super(),
      (this._renderContext = _0x42f060),
      (this._hitTestService = _0x26ff6f),
      (this._tableResourceService = _0x199e99),
      (this._tableSelectionService = _0x549be9),
      (this._editorUIService = _0x4b8d51),
      (this._drawingStateService = _0x226d1f),
      (this._contextMenuService = _0x107c9b),
      (this._commandService = _0x227717),
      (this._keyboardService = _0x496b54),
      (this._contextService = _0x27aede),
      (this._univerInstanceService = _0x4f38f6),
      (this._slideDrawingService = _0x1847b6),
      (this._transformerVisibilityService = _0x42dcd9),
      (this._permissionService = _0x50119f),
      (this._alignmentGuideService = _0x99eab8),
      (this._slideInsertService = _0x200a2d),
      T(this, "_editorDisposable", null),
      T(this, "_resizeDragContext", null),
      T(this, "_rangeDragContext", null),
      T(this, "_rangeDragWindowCleanup", null),
      T(this, "_tableMoveDragContext", null),
      T(this, "_editorSessionId", 0),
      T(this, "_activeEditorContextKey", null),
      T(this, "_lastActiveTableContext", null),
      T(this, "_tableActivationStage", null),
      T(this, "_pendingStage1TableDragContext", null),
      T(this, "_hoveredTrigger", null),
      T(this, "_headerSelectionDragState", null),
      T(this, "_pendingHeaderSelection", null),
      T(this, "_rowColumnMoveState", null),
      T(this, "_rowColumnMoveTarget", null),
      T(this, "_headerSelectionDragCleanup", null),
      T(this, "_resizeHoverActive", false),
      T(this, "_ownsStructuralCursor", false),
      T(this, "_resizeWireScheduled", false),
      T(this, "_editorLayoutSyncScheduled", false),
      T(this, "_structuralInsertHoverObject", null),
      T(this, "_wiredResizeObjectRefs", new Map()),
      T(this, "_handleClipboardCopy", (_0x369619) => {
        let _0x1bb24a = this._resolveTableClipboardTarget(_0x369619);
        !_0x1bb24a ||
          !_0x369619.clipboardData ||
          !this._canCopyTable(_0x1bb24a.selection) ||
          (_0x369619.clipboardData["setData"](
            "text/plain",
            vi(_0x1bb24a.table, _0x1bb24a.selection),
          ),
          _0x369619.clipboardData["setData"](
            "text/html",
            yi(_0x1bb24a.table, _0x1bb24a.selection),
          ),
          _0x369619.preventDefault(),
          _0x369619.stopPropagation());
      }),
      T(this, "_handleClipboardCut", async (_0x135101) => {
        let _0x292e8d = this._resolveTableClipboardTarget(_0x135101);
        if (
          !_0x292e8d ||
          !_0x135101.clipboardData ||
          !this._canCopyTable(_0x292e8d.selection)
        )
          return;
        let _0x3bfdff = Ci(_0x292e8d.table, _0x292e8d.selection);
        _0x3bfdff &&
          (_0x135101.clipboardData["setData"](
            "text/plain",
            vi(_0x292e8d.table, _0x292e8d.selection),
          ),
          _0x135101.clipboardData["setData"](
            "text/html",
            yi(_0x292e8d.table, _0x292e8d.selection),
          ),
          _0x135101.preventDefault(),
          _0x135101.stopPropagation(),
          await this._commitClipboardPatch(_0x292e8d, _0x3bfdff));
      }),
      T(this, "_handleClipboardPaste", async (_0x56fe70) => {
        let _0x5552eb = this._resolveTableClipboardTarget(_0x56fe70);
        if (!_0x5552eb || !_0x56fe70.clipboardData) return;
        let _0x5a5cf3 = _0x56fe70.clipboardData["getData"]("text/html"),
          _0x1ee3ee = _0x56fe70.clipboardData["getData"]("text/plain"),
          _0x47e895 = (0, h.isClipboardTextImage)(_0x1ee3ee)
            ? await (0, h.extractClipboardTextImageFile)(_0x1ee3ee)
            : null,
          _0x4631c0 = _0x47e895
            ? null
            : ((_0x5a5cf3
                ? Si(_0x5552eb.table, _0x5552eb.selection, _0x5a5cf3)
                : null) ?? xi(_0x5552eb.table, _0x5552eb.selection, _0x1ee3ee)),
          _0x5e5302 = _0x47e895
            ? [_0x47e895]
            : await ga(_0x56fe70.clipboardData, _0x5a5cf3);
        (!_0x4631c0 && _0x5e5302.length === 0) ||
          (_0x56fe70.preventDefault(),
          _0x56fe70.stopPropagation(),
          !(
            _0x4631c0 &&
            !(await this._commitClipboardPatch(_0x5552eb, _0x4631c0))
          ) && (await this._insertClipboardImages(_0x5e5302, +!!_0x4631c0)));
      }),
      this._init());
  }
  dispose() {
    ((this._editorLayoutSyncScheduled = false),
      this._resetTableInteraction(),
      super.dispose());
  }
  _init() {
    var _0x4befc3, _0xbb9b91;
    (document.addEventListener("copy", this._handleClipboardCopy, true),
      document.addEventListener("cut", this._handleClipboardCut, true),
      document.addEventListener("paste", this._handleClipboardPaste, true),
      this.disposeWithMe(
        (0, i.toDisposable)(() => {
          (document.removeEventListener(
            "copy",
            this._handleClipboardCopy,
            true,
          ),
            document.removeEventListener("cut", this._handleClipboardCut, true),
            document.removeEventListener(
              "paste",
              this._handleClipboardPaste,
              true,
            ));
        }),
      ),
      this.disposeWithMe(
        this._keyboardService["setHandler"]((_0x1ca424) =>
          this._handleKeyboardAction(_0x1ca424),
        ),
      ),
      this.disposeWithMe(
        this._keyboardService["setInputHandler"]((_0x2aa0b5) =>
          this._handleKeyboardInput(_0x2aa0b5),
        ),
      ));
    let _0x5652b2 =
      (_0x4befc3 = (_0xbb9b91 = this._transformerVisibilityService)
        .registerGuard) == null
        ? undefined
        : _0x4befc3.call(_0xbb9b91, (_0xe85bf2) =>
            this._shouldShowTransformerForDrawing(_0xe85bf2),
          );
    (_0x5652b2 && this.disposeWithMe(_0x5652b2),
      this.disposeWithMe(
        this._keyboardService["setHandler"]((_0x2c0af7) =>
          this._handleKeyboardAction(_0x2c0af7),
        ),
      ),
      this.disposeWithMe(
        this._renderContext["scene"].onDblclick$["subscribeEvent"](
          (_0x212716) => {
            this._handleSceneDoubleClick(_0x212716);
          },
        ),
      ),
      this.disposeWithMe(
        this._renderContext["engine"].onTransformChange$["subscribeEvent"](
          () => {
            this._scheduleActiveEditorLayoutSync();
          },
        ),
      ));
    let _0x59b49f = this._drawingStateService["state$"];
    if (_0x59b49f) {
      let _0x892f06 = _0x59b49f.subscribe((_0x7b0d45) => {
        var _0x1ac76a;
        this._syncActiveTableFromDrawingState(_0x7b0d45);
        let _0x3d9109 = this._tableSelectionService["getSelection"]();
        if (!_0x3d9109) {
          var _0x350f8c, _0x3b3e5e;
          let _0x5e5718 =
            ((_0x350f8c = (_0x3b3e5e = this._tableSelectionService)
              .isTableInternalInteractionActive) == null
              ? undefined
              : _0x350f8c.call(_0x3b3e5e)) ?? false;
          this._lastActiveTableContext &&
            this._tableActivationStage &&
            !this._isLastActiveTableSelected(_0x7b0d45) &&
            !_0x5e5718 &&
            this._resetTableInteraction();
          return;
        }
        if (!(
          ((_0x1ac76a = _0x7b0d45.context) == null
            ? undefined
            : _0x1ac76a.unitId) === _0x3d9109.unitId &&
          _0x7b0d45.context["subUnitId"] === _0x3d9109.subUnitId &&
          _0x7b0d45.selectedIds["includes"](_0x3d9109.elementId)
        )) {
          if (
            !this._isExternalDrawingSelection(_0x7b0d45, _0x3d9109) &&
            this._isTableInteractionInProgress(_0x3d9109)
          )
            return;
          this._resetTableInteraction();
        }
      });
      this.disposeWithMe({ dispose: () => _0x892f06.unsubscribe() });
    }
    (this._initResizeInteraction(), this._initPointerDownContextMenu());
  }
  _scheduleActiveEditorLayoutSync() {
    this._editorLayoutSyncScheduled ||
      ((this._editorLayoutSyncScheduled = true),
      Promise.resolve().then(() => {
        this._editorLayoutSyncScheduled &&
          ((this._editorLayoutSyncScheduled = false),
          this._syncActiveEditorLayout());
      }));
  }
  _syncActiveEditorLayout() {
    let _0x510274 = this._editorUIService["getSession"](),
      _0x2d18e8 = _0x510274 == null ? undefined : _0x510274.context;
    if (!_0x510274 || !_0x2d18e8 || !this._isCurrentEditorSession(_0x2d18e8))
      return;
    let _0x356d7e = this._resolveTableObjectFromContext(_0x2d18e8);
    if (!_0x356d7e) return;
    let { object: _0x45a28c, table: _0x2a9af2 } = _0x356d7e,
      _0x2f4180 = (0, n.resolveSlideTableRenderModel)(_0x2a9af2),
      _0x21b718 = _0x2f4180.cells["find"](
        (_0xb19871) =>
          _0xb19871.row === _0x2d18e8.row &&
          _0xb19871.column === _0x2d18e8.column &&
          !_0xb19871.hidden,
      );
    if (!_0x21b718) return;
    let _0x54a803 = this._resolveEditorLayout(
      _0x45a28c,
      _0x2f4180,
      _0x21b718,
      _0x510274.documentData,
    );
    _0x54a803 && this._editorUIService["update"]({ layout: _0x54a803 });
  }
  _syncActiveTableFromDrawingState(_0x379023) {
    if (!_0x379023.context || _0x379023.selectedIds["length"] !== 1) return;
    let [_0x45ff3c] = _0x379023.selectedIds,
      _0x2de067 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x379023.context["unitId"],
          _0x379023.context["subUnitId"],
          _0x45ff3c,
        ),
      );
    if (!_0x2de067) return;
    let _0x5589ff = this._resolveSelectedTableDrawing(
      _0x379023.context["unitId"],
      _0x379023.context["subUnitId"],
      _0x45ff3c,
    );
    if (
      !_0x5589ff ||
      _0x5589ff.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return;
    let _0x36f138 = this._tableSelectionService["getSelection"]();
    if (
      (_0x36f138 == null ? undefined : _0x36f138.unitId) === _0x5589ff.unitId &&
      _0x36f138.subUnitId === _0x5589ff.subUnitId &&
      _0x36f138.elementId === _0x5589ff.drawingId
    ) {
      (this._syncTableSelectionToObject(_0x5589ff, _0x2de067, _0x36f138),
        this._syncActivationStageFromSelection(_0x36f138));
      return;
    }
    ((_0x36f138 == null ? undefined : _0x36f138.kind) === "table" &&
      this._tableSelectionService["clear"](),
      (this._lastActiveTableContext = {
        unitId: _0x5589ff.unitId,
        subUnitId: _0x5589ff.subUnitId,
        elementId: _0x5589ff.drawingId,
      }),
      this._activateTableObject(_0x2de067));
  }
  _isLastActiveTableSelected(_0x5e109d) {
    var _0x1bb9b6;
    let _0x539c82 = this._lastActiveTableContext;
    return (
      !!_0x539c82 &&
      ((_0x1bb9b6 = _0x5e109d.context) == null
        ? undefined
        : _0x1bb9b6.unitId) === _0x539c82.unitId &&
      _0x5e109d.context["subUnitId"] === _0x539c82.subUnitId &&
      _0x5e109d.selectedIds["includes"](_0x539c82.elementId)
    );
  }
  _isExternalDrawingSelection(_0x5382d8, _0x552ea5) {
    if (_0x5382d8.selectedIds["length"] === 0) return true;
    if (!_0x5382d8.context) return false;
    let _0x3098d4 = this._renderContext["scene"].getObject(
      (0, r.buildDrawingOKey)(
        _0x552ea5.unitId,
        _0x552ea5.subUnitId,
        _0x552ea5.elementId,
      ),
    );
    return _0x5382d8.selectedIds["some"]((_0x3f38dc) => {
      if (_0x3f38dc === _0x552ea5.elementId) return false;
      let _0x5229b1 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x5382d8.context["unitId"],
          _0x5382d8.context["subUnitId"],
          _0x3f38dc,
        ),
      );
      return !!_0x5229b1 && _0x5229b1 !== _0x3098d4;
    });
  }
  _resolveSelectedTableDrawing(_0x36b10d, _0xbaaacc, _0x5196d1) {
    var _0xdae863, _0x4eda4d;
    let _0x2e51ba =
      (_0xdae863 = this._hitTestService) == null
        ? undefined
        : _0xdae863.getOrderedTopLevelDrawings;
    return (
      (_0x2e51ba == null ||
      (_0x4eda4d = _0x2e51ba.call(this._hitTestService)) == null
        ? undefined
        : _0x4eda4d.find(
            (_0x4dd7cf) =>
              _0x4dd7cf.unitId === _0x36b10d &&
              _0x4dd7cf.subUnitId === _0xbaaacc &&
              _0x4dd7cf.drawingId === _0x5196d1,
          )) ?? null
    );
  }
  _resolveInsertDotAtScenePoint(_0x263c06) {
    var _0x43ea59;
    let _0xfc1d54 =
        (_0x43ea59 = this._hitTestService) == null
          ? undefined
          : _0x43ea59.getOrderedTopLevelDrawings,
      _0x15adda =
        (_0xfc1d54 == null
          ? undefined
          : _0xfc1d54.call(this._hitTestService)) ?? [],
      _0x28fa58 = new a["Vector2"](_0x263c06.x, _0x263c06.y);
    for (let _0x242fe6 = _0x15adda.length - 1; _0x242fe6 >= 0; _0x242fe6--) {
      let _0x36d6cc = _0x15adda[_0x242fe6];
      if (
        !_0x36d6cc ||
        _0x36d6cc.unitId !== this._renderContext["unitId"] ||
        _0x36d6cc.element["type"] !== t.PageElementTypeEnum["Table"] ||
        _0x36d6cc.groupId ||
        !this._tableResourceService["getTable"](
          _0x36d6cc.unitId,
          _0x36d6cc.element["tableId"],
        )
      )
        continue;
      let _0x42b440 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x36d6cc.unitId,
          _0x36d6cc.subUnitId,
          _0x36d6cc.drawingId,
        ),
      );
      if (!_0x42b440 || _0x42b440.isInGroup) continue;
      let _0x15fbeb = this._resolveInsertDotTriggerForObject(
        _0x42b440,
        _0x28fa58,
      );
      if (_0x15fbeb)
        return { drawing: _0x36d6cc, object: _0x42b440, trigger: _0x15fbeb };
    }
    return null;
  }
  _resolveInsertDotTriggerForObject(_0x45bc3c, _0x22acca) {
    var _0xe6207e;
    let _0x2392c3 =
      (_0xe6207e = _0x45bc3c.hitTestStructuralTriggerAtScenePoint) == null
        ? undefined
        : _0xe6207e.call(_0x45bc3c, _0x22acca);
    return Ii(_0x2392c3) ? _0x2392c3 : null;
  }
  _initPointerDownContextMenu() {
    let _0x5bb2b4 = this._renderContext["scene"];
    _0x5bb2b4.onPointerDown$ &&
      this.disposeWithMe(
        _0x5bb2b4.onPointerDown$["subscribeEvent"]({
          priority: zi,
          next: ([_0x5a8330, _0x50672c]) => {
            this._handleActiveTableControlPointerDown(_0x5a8330, _0x50672c);
          },
        }),
      );
    let _0x2674da = this._hitTestService["onPointerDown$"];
    if (!_0x2674da) return;
    let _0x361ecc = _0x2674da.subscribe((_0x539bb7) =>
      this._handleHitTestPointerDown(_0x539bb7),
    );
    this.disposeWithMe({ dispose: () => _0x361ecc.unsubscribe() });
  }
  _handleActiveTableControlPointerDown(_0x35b1ba, _0x3ac6ac) {
    let _0x1fb2f4 = _0x35b1ba.button ?? 0;
    if (_0x1fb2f4 !== 0 && _0x1fb2f4 !== 2) return false;
    let _0x5431fd = this._resolvePointerViewportPoint(_0x35b1ba),
      _0x2ddc49 = this._resolveScenePoint(_0x5431fd.x, _0x5431fd.y);
    if (_0x1fb2f4 === 0 && !this._isTableTextEditing()) {
      let _0x1fffec = this._resolveInsertDotAtScenePoint(_0x2ddc49);
      if (_0x1fffec) {
        var _0x11ffbd, _0x2797ac;
        return (
          _0x3ac6ac.stopPropagation(),
          (_0x3ac6ac.skipNextObservers = true),
          (_0x11ffbd = _0x35b1ba.stopPropagation) == null ||
            _0x11ffbd.call(_0x35b1ba),
          (_0x2797ac = _0x35b1ba.preventDefault) == null ||
            _0x2797ac.call(_0x35b1ba),
          this._hideContextMenu(),
          this._editorUIService["complete"](),
          (this._lastActiveTableContext = {
            unitId: _0x1fffec.drawing["unitId"],
            subUnitId: _0x1fffec.drawing["subUnitId"],
            elementId: _0x1fffec.drawing["drawingId"],
          }),
          this._handleStructuralInsertTrigger(
            _0x1fffec.drawing,
            _0x1fffec.object,
            _0x1fffec.trigger,
            _0x2ddc49,
          ),
          true
        );
      }
    }
    let _0x323f22 = this._resolveActiveTableObject();
    if (
      !_0x323f22 ||
      _0x323f22.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let { drawing: _0x944138, object: _0x450816 } = _0x323f22,
      _0x57f3eb = (0, r.buildDrawingOKey)(
        _0x944138.unitId,
        _0x944138.subUnitId,
        _0x944138.drawingId,
      ),
      _0x443e63 = this._resolveTableControlHit(
        _0x944138,
        _0x450816,
        _0x2ddc49.x,
        _0x2ddc49.y,
      ),
      _0x497be1 = _0x443e63
        ? null
        : this._resolveCellHit(_0x944138, _0x57f3eb, _0x2ddc49.x, _0x2ddc49.y);
    if (!_0x443e63 && !_0x497be1) return false;
    if (!this._isTableDrawingActive(_0x944138)) {
      var _0x292001, _0x431efa;
      return (
        this._drawingStateService["selectDrawings"](
          { unitId: _0x944138.unitId, subUnitId: _0x944138.subUnitId },
          [_0x944138.drawingId],
          _0x944138.drawingId,
        ),
        _0x3ac6ac.stopPropagation(),
        (_0x3ac6ac.skipNextObservers = true),
        (_0x292001 = _0x35b1ba.stopPropagation) == null ||
          _0x292001.call(_0x35b1ba),
        (_0x431efa = _0x35b1ba.preventDefault) == null ||
          _0x431efa.call(_0x35b1ba),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        (this._lastActiveTableContext = {
          unitId: _0x944138.unitId,
          subUnitId: _0x944138.subUnitId,
          elementId: _0x944138.drawingId,
        }),
        this._activateTableObject(_0x450816),
        true
      );
    }
    return (
      this._handleTablePointerDown(
        _0x944138,
        _0x57f3eb,
        _0x450816,
        this._createViewportPointerEvent(_0x35b1ba, _0x5431fd),
        _0x3ac6ac,
        _0x443e63,
      ),
      true
    );
  }
  _handleHitTestPointerDown(_0x5199ae) {
    let _0x542f5e = _0x5199ae.nativeEvent["button"] ?? 0;
    if (_0x542f5e !== 0 && _0x542f5e !== 2) return;
    let _0x4d276c = _0x5199ae.nativeEvent;
    (_0x4d276c.offsetX === undefined && (_0x4d276c.offsetX = _0x5199ae.offsetX),
      _0x4d276c.offsetY === undefined &&
        (_0x4d276c.offsetY = _0x5199ae.offsetY));
    let _0xbe0d19 = this._renderContext["scene"].getObject(_0x5199ae.oKey);
    _0xbe0d19 &&
      (_0x542f5e !== 2 ||
        _0x5199ae.drawing["element"].type !== t.PageElementTypeEnum["Table"] ||
        this._isTableTextEditing() ||
        this._handleCellContextMenuPointerDown(
          _0x5199ae.drawing,
          _0x5199ae.oKey,
          _0xbe0d19,
          _0x4d276c,
          {
            stopPropagation: () => {
              var _0x4f2c7b;
              return (_0x4f2c7b = _0x4d276c.stopPropagation) == null
                ? undefined
                : _0x4f2c7b.call(_0x4d276c);
            },
            skipNextObservers: false,
          },
        ));
  }
  _initResizeInteraction() {
    let _0xcb6561 = this._renderContext["scene"];
    if (
      (_0xcb6561.onPointerMove$ &&
        this.disposeWithMe(
          _0xcb6561.onPointerMove$["subscribeEvent"]({
            priority: zi,
            next: ([_0x19252b]) => {
              (this._handleResizeHover(_0x19252b),
                this._updateTableControlHover(_0x19252b));
            },
          }),
        ),
      _0xcb6561.addObject$)
    ) {
      let _0x4c9e1a = _0xcb6561.addObject$["subscribe"](() =>
        this._scheduleWireResizeObjects(),
      );
      this.disposeWithMe({ dispose: () => _0x4c9e1a.unsubscribe() });
    }
    this._scheduleWireResizeObjects();
  }
  _scheduleWireResizeObjects() {
    this._resizeWireScheduled ||
      ((this._resizeWireScheduled = true),
      Promise.resolve().then(() => {
        ((this._resizeWireScheduled = false), this._wireResizeObjects());
      }));
  }
  _wireResizeObjects() {
    let _0x4eafe6 = this._hitTestService["getOrderedTopLevelDrawings"];
    (
      (_0x4eafe6 == null ? undefined : _0x4eafe6.call(this._hitTestService)) ??
      []
    ).forEach((_0x2a87ef) => {
      if (_0x2a87ef.element["type"] !== t.PageElementTypeEnum["Table"]) return;
      let _0x5b4f75 = (0, r.buildDrawingOKey)(
          _0x2a87ef.unitId,
          _0x2a87ef.subUnitId,
          _0x2a87ef.drawingId,
        ),
        _0x29a58c = this._renderContext["scene"].getObject(_0x5b4f75);
      if (
        !_0x29a58c ||
        _0x29a58c.isInGroup ||
        (this._syncTableSelectionToObject(_0x2a87ef, _0x29a58c),
        this._wiredResizeObjectRefs["get"](_0x5b4f75) === _0x29a58c)
      )
        return;
      let _0x1f922a = _0x29a58c.onPointerDown$["subscribeEvent"]({
        priority: zi,
        next: ([_0x246003, _0x38f8cb]) => {
          this._handleTablePointerDown(
            _0x2a87ef,
            _0x5b4f75,
            _0x29a58c,
            _0x246003,
            _0x38f8cb,
          );
        },
      });
      (this.disposeWithMe(_0x1f922a),
        this._wiredResizeObjectRefs["set"](_0x5b4f75, _0x29a58c));
    });
  }
  _handleSceneDoubleClick(_0x470080) {
    let _0xb5ee94 = this._hitTestService["hitTest"](
      _0x470080.offsetX,
      _0x470080.offsetY,
    );
    if (!_0xb5ee94) return;
    let _0x5c16cb = this._resolveScenePoint(
      _0x470080.offsetX,
      _0x470080.offsetY,
    );
    this._handleDoubleClick({
      drawing: _0xb5ee94.drawing,
      oKey: _0xb5ee94.oKey,
      offsetX: _0x5c16cb.x,
      offsetY: _0x5c16cb.y,
      nativeEvent: _0x470080,
    });
  }
  _resolveScenePoint(_0x8b011, _0x20aadf) {
    var _0x392d8e, _0x42167f, _0x4a1111;
    let _0x40c9db = new a.Vector2(_0x8b011, _0x20aadf),
      _0x18549b = this._renderContext["scene"],
      _0x158d9d =
        ((_0x392d8e = _0x18549b.getActiveViewportByCoord) == null
          ? undefined
          : _0x392d8e.call(_0x18549b, _0x40c9db)) ??
        ((_0x42167f = _0x18549b.getViewports) == null
          ? undefined
          : _0x42167f.call(_0x18549b)[0]),
      _0x47b9b5 =
        (_0x158d9d == null ||
        (_0x4a1111 = _0x158d9d.transformVector2SceneCoord) == null
          ? undefined
          : _0x4a1111.call(_0x158d9d, _0x40c9db)) ?? _0x40c9db;
    return { x: _0x47b9b5.x, y: _0x47b9b5.y };
  }
  _handleResizeHover(_0x1cb484) {
    if (this._resizeDragContext) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    let _0x33f837 = this._hitTestService["hitTest"](
      _0x1cb484.offsetX,
      _0x1cb484.offsetY,
    );
    if (
      !_0x33f837 ||
      _0x33f837.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    ) {
      this._resetResizeCursor();
      return;
    }
    if (!this._isTableDrawingActive(_0x33f837.drawing)) {
      this._resetResizeCursor();
      return;
    }
    let _0x5a6bd2 = this._renderContext["scene"].getObject(_0x33f837.oKey);
    if (!_0x5a6bd2) {
      this._resetResizeCursor();
      return;
    }
    let _0x3eafc1 = this._resolveScenePoint(
        _0x1cb484.offsetX,
        _0x1cb484.offsetY,
      ),
      _0x2012b4 = this._resolveResizeHit(
        _0x33f837.drawing,
        _0x5a6bd2,
        _0x3eafc1.x,
        _0x3eafc1.y,
      );
    if (!_0x2012b4) {
      this._resetResizeCursor();
      return;
    }
    this._setResizeCursor(_0x2012b4.handle["axis"]);
  }
  _handleTablePointerDown(
    _0x4ad214,
    _0x24bc71,
    _0x4adc84,
    _0x2b2151,
    _0xde9da6,
    _0x71a4f5,
  ) {
    var _0x35474f, _0x3799e6;
    let _0x34d76d = _0x2b2151.button ?? 0;
    if (
      this._handleTableControlPointerDown(
        _0x4ad214,
        _0x24bc71,
        _0x4adc84,
        _0x2b2151,
        _0xde9da6,
        _0x71a4f5,
      ) ||
      this._handleTextEditingCellPointerDown(
        _0x4ad214,
        _0x24bc71,
        _0x4adc84,
        _0x2b2151,
        _0xde9da6,
      ) ||
      (_0x34d76d === 2 &&
        this._handleCellContextMenuPointerDown(
          _0x4ad214,
          _0x24bc71,
          _0x4adc84,
          _0x2b2151,
          _0xde9da6,
        )) ||
      this._handleResizePointerDown(
        _0x4ad214,
        _0x24bc71,
        _0x4adc84,
        _0x2b2151,
        _0xde9da6,
      ) ||
      _0x34d76d !== 0 ||
      this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x4ad214)
    )
      return;
    let _0x3279c0 = this._resolveScenePoint(
        _0x2b2151.offsetX,
        _0x2b2151.offsetY,
      ),
      _0x46245a = this._resolveCellHit(
        _0x4ad214,
        _0x24bc71,
        _0x3279c0.x,
        _0x3279c0.y,
      );
    if (_0x46245a) {
      if (this._tableActivationStage === "table") {
        this._startStage1TableBodyPointer(
          _0x4ad214,
          _0x4adc84,
          _0x2b2151,
          _0xde9da6,
          _0x46245a,
        );
        return;
      }
      (_0xde9da6.stopPropagation(),
        (_0xde9da6.skipNextObservers = true),
        (_0x35474f = _0x2b2151.stopPropagation) == null ||
          _0x35474f.call(_0x2b2151),
        (_0x3799e6 = _0x2b2151.preventDefault) == null ||
          _0x3799e6.call(_0x2b2151),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        this._selectResolvedCell(_0x4ad214, _0x4adc84, _0x46245a),
        (this._rangeDragContext = {
          drawing: _0x4ad214,
          objectKey: _0x24bc71,
          object: _0x4adc84,
          table: _0x46245a.table,
          anchor: { row: _0x46245a.row, column: _0x46245a.column },
          current: { row: _0x46245a.row, column: _0x46245a.column },
        }),
        this._bindRangeDragWindowEvents());
    }
  }
  _handleTextEditingCellPointerDown(
    _0x506809,
    _0xe135c3,
    _0x53388e,
    _0x19f344,
    _0x38629a,
  ) {
    var _0x3ad0fa, _0x2b142b;
    if (
      (_0x19f344.button ?? 0) !== 0 ||
      !this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x506809) ||
      _0x506809.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x16d61e = this._resolveScenePoint(
        _0x19f344.offsetX,
        _0x19f344.offsetY,
      ),
      _0x5bff10 = this._resolveCellHit(
        _0x506809,
        _0xe135c3,
        _0x16d61e.x,
        _0x16d61e.y,
      );
    if (!_0x5bff10) return false;
    (_0x38629a.stopPropagation(),
      (_0x38629a.skipNextObservers = true),
      this._hideContextMenu());
    let _0x20d793 = this._tableSelectionService["getSelection"]();
    return (_0x20d793 == null ? undefined : _0x20d793.kind) === "text" &&
      ((_0x3ad0fa = _0x20d793.focus) == null ? undefined : _0x3ad0fa.row) ===
        _0x5bff10.row &&
      _0x20d793.focus["column"] === _0x5bff10.column
      ? true
      : ((_0x2b142b = _0x53388e.setEditingCell) == null ||
          _0x2b142b.call(_0x53388e, null),
        this._openCellEditor(_0x506809, _0x5bff10, { handoffCurrent: true }),
        true);
  }
  _handleTableControlPointerDown(
    _0x33532e,
    _0x190fcb,
    _0xfc2dee,
    _0x392510,
    _0x2ca69b,
    _0x20b88c,
  ) {
    var _0x3b11be, _0x366bda;
    if (
      (_0x392510.button ?? 0) !== 0 ||
      this._isTableTextEditing() ||
      _0x33532e.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x1d860f = this._resolvePointerScenePoint(_0x392510),
      _0x2238f6 =
        _0x20b88c ??
        this._resolveTableControlHit(
          _0x33532e,
          _0xfc2dee,
          _0x1d860f.x,
          _0x1d860f.y,
        );
    if (!_0x2238f6) return false;
    if (Ii(_0x2238f6)) {
      var _0x1b7c3f, _0x431eca;
      return (
        _0x2ca69b.stopPropagation(),
        (_0x2ca69b.skipNextObservers = true),
        (_0x1b7c3f = _0x392510.stopPropagation) == null ||
          _0x1b7c3f.call(_0x392510),
        (_0x431eca = _0x392510.preventDefault) == null ||
          _0x431eca.call(_0x392510),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        (this._lastActiveTableContext = {
          unitId: _0x33532e.unitId,
          subUnitId: _0x33532e.subUnitId,
          elementId: _0x33532e.drawingId,
        }),
        this._handleStructuralInsertTrigger(
          _0x33532e,
          _0xfc2dee,
          _0x2238f6,
          _0x1d860f,
        )
      );
    }
    return this._isTableDrawingActive(_0x33532e)
      ? (_0x2ca69b.stopPropagation(),
        (_0x2ca69b.skipNextObservers = true),
        (_0x3b11be = _0x392510.stopPropagation) == null ||
          _0x3b11be.call(_0x392510),
        (_0x366bda = _0x392510.preventDefault) == null ||
          _0x366bda.call(_0x392510),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        _0x2238f6.kind === "row-header" || _0x2238f6.kind === "column-header"
          ? (this._handleStructuralHeaderPointerDown(
              _0x33532e,
              _0xfc2dee,
              _0x2238f6,
              _0x1d860f,
            ),
            true)
          : _0x2238f6.kind === "table-handle"
            ? (this._startTableMoveDrag(_0x33532e, _0xfc2dee, _0x392510), true)
            : false)
      : false;
  }
  _handleCellContextMenuPointerDown(
    _0x1b31ed,
    _0x4be944,
    _0x29c54b,
    _0x4d0461,
    _0x51fb2c,
  ) {
    if (
      !this._isTableDrawingActive(_0x1b31ed) ||
      _0x1b31ed.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x2e785c = this._resolvePointerScenePoint(_0x4d0461),
      _0x13eb7a = this._resolveCellHit(
        _0x1b31ed,
        _0x4be944,
        _0x2e785c.x,
        _0x2e785c.y,
      );
    return _0x13eb7a
      ? (_0x51fb2c.stopPropagation(),
        (_0x51fb2c.skipNextObservers = true),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        this._selectResolvedCell(_0x1b31ed, _0x29c54b, _0x13eb7a),
        this._openContextMenu(_0x4d0461, "slide-table.contextMenu.cell"),
        true)
      : false;
  }
  _handleResizePointerDown(
    _0x41bb1a,
    _0x40d0d2,
    _0x17b7b3,
    _0x251053,
    _0xb1e97,
  ) {
    var _0x5ada3d, _0x1b1744;
    if (
      (_0x251053.button ?? 0) !== 0 ||
      this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x41bb1a)
    )
      return false;
    let _0x261eda = this._resolveScenePoint(
        _0x251053.offsetX,
        _0x251053.offsetY,
      ),
      _0x251cf6 = this._resolveResizeHit(
        _0x41bb1a,
        _0x17b7b3,
        _0x261eda.x,
        _0x261eda.y,
      );
    if (
      !_0x251cf6 ||
      _0x41bb1a.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    (_0xb1e97.stopPropagation(),
      (_0xb1e97.skipNextObservers = true),
      this._hideContextMenu(),
      this._editorUIService["complete"](),
      this._tableSelectionService["clear"](),
      (_0x5ada3d = _0x17b7b3.setTableSelection) == null ||
        _0x5ada3d.call(_0x17b7b3, null),
      (this._resizeDragContext = {
        unitId: _0x41bb1a.unitId,
        tableId: _0x41bb1a.element["tableId"],
        object: _0x17b7b3,
        table: _0x251cf6.table,
        handle: _0x251cf6.handle,
        startPoint: _0x251cf6.point,
        pendingTable: _0x251cf6.table,
      }),
      this._setResizeCursor(_0x251cf6.handle["axis"]));
    let _0x509951 = this._renderContext["scene"];
    (_0x1b1744 = _0x509951.disableObjectsEvent) == null ||
      _0x1b1744.call(_0x509951);
    let _0x5cb25e = _0x509951.onPointerMove$["subscribeEvent"]((_0x5a3c43) =>
        this._updateResizeDrag(_0x5a3c43),
      ),
      _0x51a086 = _0x509951.onPointerUp$["subscribeEvent"]((_0x20f047) => {
        var _0x4de2a5;
        (_0x5cb25e == null || _0x5cb25e.unsubscribe(),
          _0x51a086 == null || _0x51a086.unsubscribe(),
          (_0x4de2a5 = _0x509951.enableObjectsEvent) == null ||
            _0x4de2a5.call(_0x509951),
          this._finishResizeDrag(_0x20f047));
      });
    return (
      this.disposeWithMe({ dispose: () => _0x5cb25e.unsubscribe() }),
      this.disposeWithMe({ dispose: () => _0x51a086.unsubscribe() }),
      true
    );
  }
  _resolveResizeHit(_0x307245, _0x48bff8, _0x55130e, _0x49b1dc) {
    if (
      _0x307245.unitId !== this._renderContext["unitId"] ||
      _0x307245.element["type"] !== t.PageElementTypeEnum["Table"] ||
      !this._isTableDrawingActive(_0x307245) ||
      _0x307245.groupId ||
      _0x48bff8.isInGroup
    )
      return null;
    let _0x3df8a4 = this._tableResourceService["getTable"](
      _0x307245.unitId,
      _0x307245.element["tableId"],
    );
    if (!_0x3df8a4) return null;
    let _0x29ed08 = this._resolveObjectPoint(_0x48bff8, _0x55130e, _0x49b1dc),
      _0x4f1405 = Vi(
        _0x3df8a4,
        _0x48bff8.width,
        _0x48bff8.height,
        _0x29ed08.x,
        _0x29ed08.y,
        6,
      );
    return _0x4f1405
      ? { table: _0x3df8a4, handle: _0x4f1405, point: _0x29ed08 }
      : null;
  }
  _resolveObjectPoint(_0x55fa7a, _0x3ad18c, _0x476694) {
    let _0x164e5e = _0x55fa7a.getInverseCoord(
      new a["Vector2"](_0x3ad18c, _0x476694),
    );
    return {
      x: _0x164e5e.x + _0x55fa7a.width / 2,
      y: _0x164e5e.y + _0x55fa7a.height / 2,
    };
  }
  _resolveTableControlHit(_0x5a7297, _0x17de13, _0x4d78eb, _0x4efea2) {
    if (_0x5a7297.element["type"] !== t.PageElementTypeEnum["Table"])
      return null;
    let _0x52dd3a = this._tableResourceService["getTable"](
      _0x5a7297.unitId,
      _0x5a7297.element["tableId"],
    );
    if (!_0x52dd3a) return null;
    let _0x1c5c97 = this._resolveObjectPoint(_0x17de13, _0x4d78eb, _0x4efea2),
      _0x1993b7 = this._resolveTableTriggerHit(
        _0x52dd3a,
        _0x17de13,
        _0x1c5c97.x,
        _0x1c5c97.y,
      );
    return _0x1993b7 &&
      (_0x1993b7.kind === "table-handle" ||
        _0x1993b7.kind === "row-header" ||
        _0x1993b7.kind === "column-header" ||
        _0x1993b7.kind === "row-insert-dot" ||
        _0x1993b7.kind === "column-insert-dot")
      ? _0x1993b7
      : (0, n.hitTestSlideTableControl)(
          (0, n.buildSlideTableControls)(
            (0, n.resolveSlideTableRenderModel)(_0x52dd3a),
            _0x17de13.width,
            _0x17de13.height,
          ).filter((_0x2f7652) => _0x2f7652.kind === "table-handle"),
          _0x1c5c97.x,
          _0x1c5c97.y,
        );
  }
  _updateTableControlHover(_0x3d03a0) {
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let _0x119076 = this._resolvePointerScenePoint(_0x3d03a0),
      _0x412d16 = this._resolveInsertDotAtScenePoint(_0x119076);
    if (_0x412d16) {
      (this._clearStructuralInsertHoverObject(_0x412d16.object),
        (this._structuralInsertHoverObject = _0x412d16.object),
        this._updateStructuralControlHover(_0x412d16.object, _0x412d16.trigger),
        this._setTableControlHover(_0x412d16.object, null),
        this._setTableCellHover(_0x412d16.object, null));
      return;
    }
    let _0x4aad4c = this._resolveActiveTableObject();
    if (!_0x4aad4c) {
      this._clearTableControlHover();
      return;
    }
    this._clearStructuralInsertHoverObject(_0x4aad4c.object);
    let _0x351543 = this._resolveTableControlHit(
        _0x4aad4c.drawing,
        _0x4aad4c.object,
        _0x119076.x,
        _0x119076.y,
      ),
      _0x1dde1c =
        _0x351543 &&
        (_0x351543.kind === "row-header" ||
          _0x351543.kind === "column-header" ||
          _0x351543.kind === "row-insert-dot" ||
          _0x351543.kind === "column-insert-dot")
          ? _0x351543
          : null;
    (this._updateStructuralControlHover(_0x4aad4c.object, _0x1dde1c),
      this._setTableControlHover(
        _0x4aad4c.object,
        (_0x351543 == null ? undefined : _0x351543.kind) === "table-handle"
          ? { kind: "table-handle" }
          : null,
      ),
      this._updateCellHover(
        _0x4aad4c.drawing,
        _0x4aad4c.object,
        _0x119076.x,
        _0x119076.y,
        !!_0x351543,
      ));
  }
  _clearTableControlHover() {
    this._setStructuralCursor(false);
    let _0x451dd3 = this._resolveActiveTableObject();
    (this._clearStructuralInsertHoverObject(
      (_0x451dd3 == null ? undefined : _0x451dd3.object) ?? null,
    ),
      _0x451dd3 &&
        ((this._hoveredTrigger = null),
        this._setTableControlState(_0x451dd3.object, null),
        this._setTableControlHover(_0x451dd3.object, null),
        this._setTableCellHover(_0x451dd3.object, null)));
  }
  _clearStructuralInsertHoverObject(_0xfd9ed7 = null) {
    let _0x3c101e = this._structuralInsertHoverObject;
    _0x3c101e &&
      ((this._structuralInsertHoverObject = null),
      _0x3c101e !== _0xfd9ed7 &&
        ((this._hoveredTrigger = null),
        this._setTableControlState(_0x3c101e, null),
        this._setTableControlHover(_0x3c101e, null),
        this._setTableCellHover(_0x3c101e, null)));
  }
  _setTableControlHover(_0x167b47, _0xf06201) {
    var _0x46ad81;
    if (
      (_0x46ad81 = _0x167b47.setTableControlHover) != null &&
      _0x46ad81.call(_0x167b47, _0xf06201)
    ) {
      var _0x2e6346, _0x4efb21;
      (_0x2e6346 = (_0x4efb21 = this._renderContext["scene"]).makeDirty) ==
        null || _0x2e6346.call(_0x4efb21, true);
    }
  }
  _updateCellHover(_0x4495f6, _0xb582d5, _0x372664, _0x2a8020, _0x426c7b) {
    if (_0x426c7b || !this._tableActivationStage) {
      this._setTableCellHover(_0xb582d5, null);
      return;
    }
    let _0x414bd7 = this._resolveCellHit(
      _0x4495f6,
      (0, r.buildDrawingOKey)(
        _0x4495f6.unitId,
        _0x4495f6.subUnitId,
        _0x4495f6.drawingId,
      ),
      _0x372664,
      _0x2a8020,
    );
    this._setTableCellHover(
      (_0x414bd7 == null ? undefined : _0x414bd7.object) ?? _0xb582d5,
      _0x414bd7
        ? { row: _0x414bd7.cell["row"], column: _0x414bd7.cell["column"] }
        : null,
    );
  }
  _setTableCellHover(_0x1ef7a2, _0x5514ee) {
    var _0x172d2a;
    if (
      (_0x172d2a = _0x1ef7a2.setTableCellHover) != null &&
      _0x172d2a.call(_0x1ef7a2, _0x5514ee)
    ) {
      var _0x3cf960, _0x43a10d;
      (_0x3cf960 = (_0x43a10d = this._renderContext["scene"]).makeDirty) ==
        null || _0x3cf960.call(_0x43a10d, true);
    }
  }
  _buildActiveTableTriggers(_0x556dd6, _0xbb4edc) {
    var _0x1d7871, _0x5ed0ce;
    let _0x2fbe9e = (0, n.resolveSlideTableRenderModel)(_0x556dd6),
      _0x4c4c8e =
        (_0x1d7871 = (_0x5ed0ce = this._renderContext["scene"])
          .getAncestorScale) == null
          ? undefined
          : _0x1d7871.call(_0x5ed0ce),
      _0x2da029 = J(
        (_0x4c4c8e == null ? undefined : _0x4c4c8e.scaleX) ??
          (_0x4c4c8e == null ? undefined : _0x4c4c8e.scaleY),
        1,
      );
    return (0, n.buildSlideTableTriggers)({
      tableId: _0x556dd6.id,
      tableWidth: _0xbb4edc.width,
      tableHeight: _0xbb4edc.height,
      rowHeights: X(
        _0x556dd6.rows["map"]((_0x51b407) => _0x51b407.height ?? 24),
        _0xbb4edc.height,
      ),
      columnWidths: X(
        _0x556dd6.columns["map"]((_0x4a30d9) => _0x4a30d9.width),
        _0xbb4edc.width,
      ),
      mergedCells: _0x2fbe9e.cells["filter"](
        (_0x3b41ae) =>
          !_0x3b41ae.hidden &&
          (_0x3b41ae.rowSpan > 1 || _0x3b41ae.columnSpan > 1),
      ).map((_0x4d0679) => ({
        startRow: _0x4d0679.row,
        endRow: _0x4d0679.row + _0x4d0679.rowSpan - 1,
        startColumn: _0x4d0679.column,
        endColumn: _0x4d0679.column + _0x4d0679.columnSpan - 1,
      })),
      zoom: _0x2da029,
    });
  }
  _resolveTableTriggerHit(_0x2fe689, _0x42cd7b, _0x9987e7, _0x9c2b70) {
    return (0, n.hitTestSlideTableTrigger)(
      this._buildActiveTableTriggers(_0x2fe689, _0x42cd7b),
      _0x9987e7,
      _0x9c2b70,
    );
  }
  _updateStructuralControlHover(_0x288f11, _0x51be94) {
    let _0x143979 =
      _0x51be94 &&
      (_0x51be94.kind === "row-header" ||
        _0x51be94.kind === "column-header" ||
        _0x51be94.kind === "row-insert-dot" ||
        _0x51be94.kind === "column-insert-dot")
        ? _0x51be94
        : null;
    this._hoveredTrigger = _0x143979;
    let _0x445aad = _0x143979 ? Bi(_0x143979) : null,
      _0x5cf69f =
        (_0x143979 == null ? undefined : _0x143979.kind) === "row-insert-dot" &&
        _0x445aad !== null
          ? { kind: "row", index: _0x445aad }
          : (_0x143979 == null ? undefined : _0x143979.kind) ===
                "column-insert-dot" && _0x445aad !== null
            ? { kind: "column", index: _0x445aad }
            : null,
      _0x4ea442 = this._headerSelectionDragState
        ? {
            kind: this._headerSelectionDragState["kind"],
            start: Math.min(
              this._headerSelectionDragState["anchor"],
              this._headerSelectionDragState["current"],
            ),
            end: Math.max(
              this._headerSelectionDragState["anchor"],
              this._headerSelectionDragState["current"],
            ),
          }
        : null,
      _0x3be7e6 = this._rowColumnMoveTarget
        ? {
            kind: this._rowColumnMoveTarget["kind"],
            index: this._rowColumnMoveTarget["guideIndex"],
          }
        : null,
      _0x367022 = !!_0x143979 || !!_0x4ea442 || !!_0x5cf69f || !!_0x3be7e6;
    (this._setTableControlState(
      _0x288f11,
      _0x367022
        ? {
            visible: true,
            hoveredTrigger: _0x143979,
            selectedStructuralRange: _0x4ea442,
            insertGuide: _0x5cf69f,
            reorderGuide: _0x3be7e6,
          }
        : null,
    ),
      this._setStructuralCursor(!!_0x143979));
  }
  _setStructuralCursor(_0x4f3861) {
    let _0x209ae1 = this._renderContext["scene"];
    if (_0x4f3861) {
      ((this._ownsStructuralCursor = true),
        _0x209ae1.setCursor(a.CURSOR_TYPE["POINTER"]));
      return;
    }
    this._ownsStructuralCursor &&
      ((this._ownsStructuralCursor = false),
      !this._resizeHoverActive &&
        _0x209ae1.getCursor() === a.CURSOR_TYPE["POINTER"] &&
        _0x209ae1.resetCursor());
  }
  _setTableControlState(_0x567c80, _0x2538af) {
    var _0x24d128;
    if (
      (_0x24d128 = _0x567c80.setTableControlState) != null &&
      _0x24d128.call(_0x567c80, _0x2538af)
    ) {
      var _0x36120a, _0x4302c5;
      (_0x36120a = (_0x4302c5 = this._renderContext["scene"]).makeDirty) ==
        null || _0x36120a.call(_0x4302c5, true);
    }
  }
  _handleStructuralHeaderPointerDown(
    _0x4582ab,
    _0xccd636,
    _0x1c0982,
    _0x243d18,
  ) {
    var _0x3ffb4c;
    if (
      (this._finishHeaderSelectionDrag(),
      _0x1c0982.kind === "row-header" && _0x1c0982.row !== undefined)
    ) {
      let _0x5d079d = this._getSelectedHeaderRange(
        _0x4582ab,
        "row",
        _0x1c0982.row,
      );
      _0x5d079d
        ? (this._pendingHeaderSelection = {
            drawing: _0x4582ab,
            object: _0xccd636,
            kind: "row",
            start: _0x5d079d.start,
            end: _0x5d079d.end,
            startPoint: _0x243d18,
          })
        : (this._selectRows(_0x4582ab, _0xccd636, _0x1c0982.row, _0x1c0982.row),
          (this._headerSelectionDragState = {
            drawing: _0x4582ab,
            object: _0xccd636,
            kind: "row",
            anchor: _0x1c0982.row,
            current: _0x1c0982.row,
          }));
    } else {
      if (
        _0x1c0982.kind === "column-header" &&
        _0x1c0982.column !== undefined
      ) {
        let _0x2a766b = this._getSelectedHeaderRange(
          _0x4582ab,
          "column",
          _0x1c0982.column,
        );
        _0x2a766b
          ? (this._pendingHeaderSelection = {
              drawing: _0x4582ab,
              object: _0xccd636,
              kind: "column",
              start: _0x2a766b.start,
              end: _0x2a766b.end,
              startPoint: _0x243d18,
            })
          : (this._selectColumns(
              _0x4582ab,
              _0xccd636,
              _0x1c0982.column,
              _0x1c0982.column,
            ),
            (this._headerSelectionDragState = {
              drawing: _0x4582ab,
              object: _0xccd636,
              kind: "column",
              anchor: _0x1c0982.column,
              current: _0x1c0982.column,
            }));
      } else return;
    }
    this._setTableControlState(_0xccd636, {
      visible: true,
      hoveredTrigger: _0x1c0982,
      selectedStructuralRange: this._headerSelectionDragState
        ? {
            kind: this._headerSelectionDragState["kind"],
            start: this._headerSelectionDragState["anchor"],
            end: this._headerSelectionDragState["current"],
          }
        : this._pendingHeaderSelection
          ? {
              kind: this._pendingHeaderSelection["kind"],
              start: this._pendingHeaderSelection["start"],
              end: this._pendingHeaderSelection["end"],
            }
          : null,
    });
    let _0x225858 = this._renderContext["scene"];
    if (!_0x225858.onPointerMove$ || !_0x225858.onPointerUp$) return;
    (_0x3ffb4c = _0x225858.disableObjectsEvent) == null ||
      _0x3ffb4c.call(_0x225858);
    let _0x16b4a1 = _0x225858.onPointerMove$["subscribeEvent"]((_0x7b735b) =>
        this._updateHeaderSelectionDrag(_0x7b735b),
      ),
      _0x3ae650 = _0x225858.onPointerUp$["subscribeEvent"](() =>
        this._finishHeaderSelectionDrag(_0xccd636),
      );
    ((this._headerSelectionDragCleanup = () => {
      var _0x29c119;
      (_0x16b4a1 == null || _0x16b4a1.unsubscribe(),
        _0x3ae650 == null || _0x3ae650.unsubscribe(),
        (_0x29c119 = _0x225858.enableObjectsEvent) == null ||
          _0x29c119.call(_0x225858));
    }),
      this.disposeWithMe({ dispose: () => _0x16b4a1.unsubscribe() }),
      this.disposeWithMe({ dispose: () => _0x3ae650.unsubscribe() }));
  }
  _finishHeaderSelectionDrag(_0x45bec4, _0x6e6dd3) {
    var _0x12d0b0, _0x1ddbb6, _0x293d07;
    let _0x35ffac = this._headerSelectionDragCleanup;
    ((this._headerSelectionDragCleanup = null),
      _0x35ffac == null || _0x35ffac());
    let _0x1b4232 =
      _0x45bec4 ??
      ((_0x12d0b0 = this._rowColumnMoveState) == null
        ? undefined
        : _0x12d0b0.object) ??
      ((_0x1ddbb6 = this._pendingHeaderSelection) == null
        ? undefined
        : _0x1ddbb6.object) ??
      ((_0x293d07 = this._headerSelectionDragState) == null
        ? undefined
        : _0x293d07.object);
    ((_0x6e6dd3 == null ? undefined : _0x6e6dd3.commitMove) !== false &&
      this._executeRowColumnMove(),
      (this._headerSelectionDragState = null),
      (this._pendingHeaderSelection = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      _0x1b4232 &&
        this._updateStructuralControlHover(_0x1b4232, this._hoveredTrigger));
  }
  _updateHeaderSelectionDrag(_0x2206dc) {
    let _0x42ebb7 = this._pendingHeaderSelection,
      _0x10dd50 = this._rowColumnMoveState;
    if (_0x42ebb7 || _0x10dd50) {
      this._updateRowColumnMoveDrag(_0x2206dc);
      return;
    }
    let _0x2cb8f0 = this._headerSelectionDragState;
    if (
      !_0x2cb8f0 ||
      _0x2cb8f0.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return;
    if (
      "buttons" in _0x2206dc &&
      _0x2206dc.buttons !== undefined &&
      (_0x2206dc.buttons & 1) != 1
    ) {
      this._finishHeaderSelectionDrag(_0x2cb8f0.object);
      return;
    }
    let _0x2efc13 = this._tableResourceService["getTable"](
      _0x2cb8f0.drawing["unitId"],
      _0x2cb8f0.drawing["element"].tableId,
    );
    if (!_0x2efc13) return;
    let _0x3def6a = this._resolvePointerScenePoint(_0x2206dc),
      _0x41cfc3 = this._resolveObjectPoint(
        _0x2cb8f0.object,
        _0x3def6a.x,
        _0x3def6a.y,
      ),
      _0x29d59c = (0, n.hitTestSlideTableFloatingControl)(
        this._buildActiveTableTriggers(_0x2efc13, _0x2cb8f0.object),
        _0x41cfc3.x,
        _0x41cfc3.y,
      );
    if (_0x29d59c) {
      if (
        _0x2cb8f0.kind === "row" &&
        _0x29d59c.kind === "row-header" &&
        _0x29d59c.row !== undefined
      )
        ((_0x2cb8f0.current = _0x29d59c.row),
          this._selectRows(
            _0x2cb8f0.drawing,
            _0x2cb8f0.object,
            _0x2cb8f0.anchor,
            _0x29d59c.row,
          ));
      else {
        if (
          _0x2cb8f0.kind === "column" &&
          _0x29d59c.kind === "column-header" &&
          _0x29d59c.column !== undefined
        )
          ((_0x2cb8f0.current = _0x29d59c.column),
            this._selectColumns(
              _0x2cb8f0.drawing,
              _0x2cb8f0.object,
              _0x2cb8f0.anchor,
              _0x29d59c.column,
            ));
        else return;
      }
      this._setTableControlState(_0x2cb8f0.object, {
        visible: true,
        hoveredTrigger: _0x29d59c,
        selectedStructuralRange: {
          kind: _0x2cb8f0.kind,
          start: Math.min(_0x2cb8f0.anchor, _0x2cb8f0.current),
          end: Math.max(_0x2cb8f0.anchor, _0x2cb8f0.current),
        },
      });
    }
  }
  _updateRowColumnMoveDrag(_0x44e7a3) {
    let _0x59d799 = this._pendingHeaderSelection,
      _0x1a9ddb = this._rowColumnMoveState,
      _0x2aaebd = _0x1a9ddb ?? _0x59d799;
    if (
      !_0x2aaebd ||
      _0x2aaebd.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return;
    if (
      "buttons" in _0x44e7a3 &&
      _0x44e7a3.buttons !== undefined &&
      (_0x44e7a3.buttons & 1) != 1
    ) {
      this._finishHeaderSelectionDrag(_0x2aaebd.object, { commitMove: false });
      return;
    }
    let _0x4ba180 = this._resolvePointerScenePoint(_0x44e7a3);
    if (!_0x1a9ddb && _0x59d799) {
      let _0x1acc2f = _0x4ba180.x - _0x59d799.startPoint["x"],
        _0x32cd8f = _0x4ba180.y - _0x59d799.startPoint["y"];
      if (Math.hypot(_0x1acc2f, _0x32cd8f) < 8) return;
      ((this._rowColumnMoveState = {
        drawing: _0x59d799.drawing,
        object: _0x59d799.object,
        kind: _0x59d799.kind,
        start: _0x59d799.start,
        end: _0x59d799.end,
      }),
        (this._pendingHeaderSelection = null));
    }
    let _0x1cc8a3 = this._rowColumnMoveState;
    if (
      !_0x1cc8a3 ||
      _0x1cc8a3.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return;
    let _0x267be4 = this._tableResourceService["getTable"](
      _0x1cc8a3.drawing["unitId"],
      _0x1cc8a3.drawing["element"].tableId,
    );
    if (!_0x267be4) {
      ((this._rowColumnMoveTarget = null),
        this._setTableControlState(_0x1cc8a3.object, null));
      return;
    }
    let _0x120c09 = this._resolveRowColumnMoveTarget(
        _0x267be4,
        _0x1cc8a3.object,
        _0x1cc8a3.kind,
        _0x4ba180,
      ),
      _0x201e76 =
        !!_0x120c09 &&
        (_0x120c09.kind === "row"
          ? (0, n.canMoveSlideTableRows)(
              _0x267be4,
              { startRow: _0x1cc8a3.start, endRow: _0x1cc8a3.end },
              { row: _0x120c09.targetRow, position: _0x120c09.position },
            )
          : (0, n.canMoveSlideTableColumns)(
              _0x267be4,
              { startColumn: _0x1cc8a3.start, endColumn: _0x1cc8a3.end },
              { column: _0x120c09.targetColumn, position: _0x120c09.position },
            ));
    ((this._rowColumnMoveTarget = _0x201e76 ? _0x120c09 : null),
      this._setTableControlState(
        _0x1cc8a3.object,
        _0x201e76 && _0x120c09
          ? {
              visible: true,
              selectedStructuralRange: {
                kind: _0x1cc8a3.kind,
                start: _0x1cc8a3.start,
                end: _0x1cc8a3.end,
              },
              reorderGuide: {
                kind: _0x120c09.kind,
                index: _0x120c09.guideIndex,
              },
            }
          : null,
      ));
  }
  _executeRowColumnMove() {
    let _0x29adcf = this._rowColumnMoveState,
      _0x1c1310 = this._rowColumnMoveTarget;
    !_0x29adcf ||
      !_0x1c1310 ||
      _0x29adcf.drawing["element"].type !== t.PageElementTypeEnum["Table"] ||
      (_0x29adcf.kind === "row" && _0x1c1310.kind === "row"
        ? this._commandService["executeCommand"](
            n.MoveSlideTableRowsCommand["id"],
            {
              unitId: _0x29adcf.drawing["unitId"],
              tableId: _0x29adcf.drawing["element"].tableId,
              startRow: _0x29adcf.start,
              endRow: _0x29adcf.end,
              targetRow: _0x1c1310.targetRow,
              position: _0x1c1310.position,
            },
          )
        : _0x29adcf.kind === "column" &&
          _0x1c1310.kind === "column" &&
          this._commandService["executeCommand"](
            n.MoveSlideTableColumnsCommand["id"],
            {
              unitId: _0x29adcf.drawing["unitId"],
              tableId: _0x29adcf.drawing["element"].tableId,
              startColumn: _0x29adcf.start,
              endColumn: _0x29adcf.end,
              targetColumn: _0x1c1310.targetColumn,
              position: _0x1c1310.position,
            },
          ));
  }
  _getSelectedHeaderRange(_0x1a6278, _0x22169c, _0x1b3229) {
    if (_0x1a6278.element["type"] !== t.PageElementTypeEnum["Table"])
      return null;
    let _0x2e8824 = this._tableSelectionService["getSelection"]();
    if (
      !_0x2e8824 ||
      _0x2e8824.kind !== _0x22169c ||
      _0x2e8824.unitId !== _0x1a6278.unitId ||
      _0x2e8824.subUnitId !== _0x1a6278.subUnitId ||
      _0x2e8824.elementId !== _0x1a6278.drawingId ||
      _0x2e8824.tableId !== _0x1a6278.element["tableId"]
    )
      return null;
    for (let _0x1ebae7 of _0x2e8824.ranges) {
      let _0x8d3a3b =
          _0x22169c === "row"
            ? Math.min(_0x1ebae7.startRow, _0x1ebae7.endRow)
            : Math.min(_0x1ebae7.startColumn, _0x1ebae7.endColumn),
        _0x55f125 =
          _0x22169c === "row"
            ? Math.max(_0x1ebae7.startRow, _0x1ebae7.endRow)
            : Math.max(_0x1ebae7.startColumn, _0x1ebae7.endColumn);
      if (_0x1b3229 >= _0x8d3a3b && _0x1b3229 <= _0x55f125)
        return { start: _0x8d3a3b, end: _0x55f125 };
    }
    return null;
  }
  _resolveRowColumnMoveTarget(_0x47d8cb, _0x2e6712, _0x23a5cd, _0x551cb3) {
    let _0x33c69b = this._resolveObjectPoint(
        _0x2e6712,
        _0x551cb3.x,
        _0x551cb3.y,
      ),
      _0x2667f2 =
        _0x23a5cd === "row"
          ? X(
              _0x47d8cb.rows["map"]((_0x2ab70f) => _0x2ab70f.height ?? 24),
              _0x2e6712.height,
            )
          : X(
              _0x47d8cb.columns["map"]((_0x276783) => _0x276783.width),
              _0x2e6712.width,
            );
    if (_0x2667f2.length === 0) return null;
    let _0x4a5ef3 = Yi(
        _0x2667f2,
        _0x23a5cd === "row" ? _0x33c69b.y : _0x33c69b.x,
      ),
      _0x3086c3 =
        _0x4a5ef3 <= 0
          ? 0
          : _0x4a5ef3 >= _0x2667f2.length
            ? _0x2667f2.length - 1
            : _0x4a5ef3,
      _0x57567d =
        _0x4a5ef3 <= 0
          ? "before"
          : _0x4a5ef3 >= _0x2667f2.length
            ? "after"
            : "before";
    return _0x23a5cd === "row"
      ? {
          kind: _0x23a5cd,
          targetRow: _0x3086c3,
          position: _0x57567d,
          guideIndex: _0x4a5ef3,
        }
      : {
          kind: _0x23a5cd,
          targetColumn: _0x3086c3,
          position: _0x57567d,
          guideIndex: _0x4a5ef3,
        };
  }
  _handleStructuralInsertTrigger(_0x3617ee, _0xb75f07, _0x5b504d, _0x1bf9ff) {
    var _0x2e3047;
    if (_0x3617ee.element["type"] !== t.PageElementTypeEnum["Table"])
      return false;
    let _0x11bcbf = Bi(_0x5b504d),
      _0x4b728a = false;
    if (
      (_0x5b504d.kind === "row-insert-dot" && _0x11bcbf !== null
        ? (_0x4b728a = !!this._commandService["executeCommand"](
            n.InsertSlideTableRowsCommand["id"],
            {
              unitId: _0x3617ee.unitId,
              subUnitId: _0x3617ee.subUnitId,
              elementId: _0x3617ee.drawingId,
              tableId: _0x3617ee.element["tableId"],
              rowIndex: _0x11bcbf,
              count: 1,
            },
          ))
        : _0x5b504d.kind === "column-insert-dot" &&
          _0x11bcbf !== null &&
          (_0x4b728a = !!this._commandService["executeCommand"](
            n.InsertSlideTableColumnsCommand["id"],
            {
              unitId: _0x3617ee.unitId,
              subUnitId: _0x3617ee.subUnitId,
              elementId: _0x3617ee.drawingId,
              tableId: _0x3617ee.element["tableId"],
              columnIndex: _0x11bcbf,
              count: 1,
            },
          )),
      !_0x4b728a)
    )
      return false;
    let _0x3a028f = this._tableResourceService["getTable"](
      _0x3617ee.unitId,
      _0x3617ee.element["tableId"],
    );
    (_0x2e3047 = _0xb75f07.setTable) == null ||
      _0x2e3047.call(_0xb75f07, _0x3a028f);
    let _0xe6a318 = Li(
      (_0x1bf9ff
        ? this._resolveInsertDotTriggerForObject(
            _0xb75f07,
            new a["Vector2"](_0x1bf9ff.x, _0x1bf9ff.y),
          )
        : null) ?? _0x5b504d,
    );
    return (
      (this._structuralInsertHoverObject = _0xb75f07),
      this._setTableControlState(_0xb75f07, _0xe6a318),
      this._setTableControlHover(_0xb75f07, null),
      this._setTableCellHover(_0xb75f07, null),
      true
    );
  }
  _resolveActiveTableObject() {
    var _0x194258, _0x3eadf3;
    let _0x2d1087 =
        (_0x194258 = (_0x3eadf3 = this._drawingStateService).getSnapshot) ==
        null
          ? undefined
          : _0x194258.call(_0x3eadf3),
      _0x42bbd7 = this._tableSelectionService["getSelection"](),
      _0x4b7633 =
        (_0x2d1087 == null ? undefined : _0x2d1087.context) ??
        (_0x42bbd7
          ? { unitId: _0x42bbd7.unitId, subUnitId: _0x42bbd7.subUnitId }
          : null),
      _0x10cdf4 =
        (_0x2d1087 == null ? undefined : _0x2d1087.selectedIds["length"]) === 1
          ? _0x2d1087.selectedIds[0]
          : _0x42bbd7 == null
            ? undefined
            : _0x42bbd7.elementId;
    return !_0x4b7633 || !_0x10cdf4
      ? this._resolveTableObjectFromContext(this._lastActiveTableContext)
      : (this._resolveTableObjectFromContext({
          ..._0x4b7633,
          elementId: _0x10cdf4,
        }) ??
          this._resolveTableObjectFromContext(this._lastActiveTableContext));
  }
  _resolveTableObjectFromContext(_0x467947) {
    if (!_0x467947) return null;
    let _0x40001d = this._resolveSelectedTableDrawing(
      _0x467947.unitId,
      _0x467947.subUnitId,
      _0x467947.elementId,
    );
    if (
      !_0x40001d ||
      _0x40001d.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return null;
    let _0x42652b = this._tableResourceService["getTable"](
      _0x40001d.unitId,
      _0x40001d.element["tableId"],
    );
    if (!_0x42652b) return null;
    let _0x3dce6e = this._renderContext["scene"].getObject(
      (0, r.buildDrawingOKey)(
        _0x467947.unitId,
        _0x467947.subUnitId,
        _0x467947.elementId,
      ),
    );
    return _0x3dce6e
      ? { drawing: _0x40001d, object: _0x3dce6e, table: _0x42652b }
      : null;
  }
  _openContextMenu(_0x1f2f7e, _0x376dc5) {
    var _0x242b80;
    let _0x20654c = this._createContextMenuEvent(_0x1f2f7e);
    ((_0x242b80 = _0x20654c.preventDefault) == null ||
      _0x242b80.call(_0x20654c),
      this._contextMenuService["triggerContextMenu"](_0x20654c, _0x376dc5));
  }
  _createContextMenuEvent(_0x5694ee) {
    var _0x47834d, _0x46c2f8, _0x4a9d17;
    let _0x4142d6 = _0x5694ee;
    if (Z(_0x4142d6.clientX) && Z(_0x4142d6.clientY))
      return {
        ..._0x4142d6,
        clientX: _0x4142d6.clientX,
        clientY: _0x4142d6.clientY,
        preventDefault: () => {
          var _0xb50914;
          return (_0xb50914 = _0x4142d6.preventDefault) == null
            ? undefined
            : _0xb50914.call(_0x4142d6);
        },
        stopPropagation: () => {
          var _0x19fd2f;
          return (_0x19fd2f = _0x4142d6.stopPropagation) == null
            ? undefined
            : _0x19fd2f.call(_0x4142d6);
        },
      };
    let _0x598ee3 =
        (_0x47834d = this._renderContext["engine"]) == null ||
        (_0x46c2f8 = _0x47834d.getCanvasElement) == null ||
        (_0x46c2f8 = _0x46c2f8.call(_0x47834d)) == null ||
        (_0x4a9d17 = _0x46c2f8.getBoundingClientRect) == null
          ? undefined
          : _0x4a9d17.call(_0x46c2f8),
      _0x1874d7 =
        ((_0x598ee3 == null ? undefined : _0x598ee3.left) ?? 0) +
        (_0x5694ee.offsetX ?? 0),
      _0x1390ed =
        ((_0x598ee3 == null ? undefined : _0x598ee3.top) ?? 0) +
        (_0x5694ee.offsetY ?? 0);
    return {
      ..._0x4142d6,
      clientX: _0x1874d7,
      clientY: _0x1390ed,
      preventDefault: () => {
        var _0x1c598c;
        return (_0x1c598c = _0x4142d6.preventDefault) == null
          ? undefined
          : _0x1c598c.call(_0x4142d6);
      },
      stopPropagation: () => {
        var _0x270063;
        return (_0x270063 = _0x4142d6.stopPropagation) == null
          ? undefined
          : _0x270063.call(_0x4142d6);
      },
    };
  }
  _hideContextMenu() {
    var _0x2f93c0, _0x9ff160;
    (_0x2f93c0 = this._contextMenuService) == null ||
      (_0x9ff160 = _0x2f93c0.hideContextMenu) == null ||
      _0x9ff160.call(_0x2f93c0);
  }
  _startStage1TableBodyPointer(
    _0x5529a1,
    _0x41c6c0,
    _0xb9d48d,
    _0x2d7e50,
    _0x4ad258,
  ) {
    var _0x1cc2bd, _0x3d47ea;
    (this._finishPendingStage1TableDrag({ focusCell: false }),
      _0x2d7e50.stopPropagation(),
      (_0x2d7e50.skipNextObservers = true),
      (_0x1cc2bd = _0xb9d48d.stopPropagation) == null ||
        _0x1cc2bd.call(_0xb9d48d),
      (_0x3d47ea = _0xb9d48d.preventDefault) == null ||
        _0x3d47ea.call(_0xb9d48d),
      this._hideContextMenu(),
      this._editorUIService["complete"]());
    let _0x20b364 = this._renderContext["scene"],
      _0x1a3c5f = null,
      _0xeb28ed = null,
      _0x2733c9 = typeof window > "u" ? null : window,
      _0x3fd85e = () => {
        (_0x1a3c5f == null || _0x1a3c5f.unsubscribe(),
          _0xeb28ed == null || _0xeb28ed.unsubscribe(),
          _0x2733c9 == null ||
            _0x2733c9.removeEventListener("pointerup", _0x9b75d8));
      },
      _0x3b03a5 = (_0x3a1907) => this._updatePendingStage1TableDrag(_0x3a1907),
      _0x9b75d8 = () => this._finishPendingStage1TableDrag({ focusCell: true });
    ((this._pendingStage1TableDragContext = {
      drawing: _0x5529a1,
      object: _0x41c6c0,
      resolved: _0x4ad258,
      startEvent: _0xb9d48d,
      startPoint: this._resolvePointerScenePoint(_0xb9d48d),
      cleanup: _0x3fd85e,
    }),
      (_0x1a3c5f = _0x20b364.onPointerMove$["subscribeEvent"](_0x3b03a5)),
      (_0xeb28ed = _0x20b364.onPointerUp$["subscribeEvent"](_0x9b75d8)),
      _0x2733c9 == null ||
        _0x2733c9.addEventListener("pointerup", _0x9b75d8, { once: true }),
      this.disposeWithMe({ dispose: _0x3fd85e }));
  }
  _updatePendingStage1TableDrag(_0x3c2fb7) {
    let _0x12af87 = this._pendingStage1TableDragContext;
    if (!_0x12af87) return;
    if (
      "buttons" in _0x3c2fb7 &&
      _0x3c2fb7.buttons !== undefined &&
      (_0x3c2fb7.buttons & 1) != 1
    ) {
      this._finishPendingStage1TableDrag({ focusCell: true });
      return;
    }
    let _0x4b2522 = this._resolvePointerScenePoint(_0x3c2fb7),
      _0x242e5c = _0x4b2522.x - _0x12af87.startPoint["x"],
      _0x660226 = _0x4b2522.y - _0x12af87.startPoint["y"];
    Math.hypot(_0x242e5c, _0x660226) < 8 ||
      (this._finishPendingStage1TableDrag({ focusCell: false }),
      this._startTableMoveDrag(
        _0x12af87.drawing,
        _0x12af87.object,
        _0x12af87.startEvent,
      ),
      this._updateTableMoveDrag(_0x3c2fb7));
  }
  _finishPendingStage1TableDrag(_0xf08b2a) {
    let _0x593590 = this._pendingStage1TableDragContext;
    _0x593590 &&
      ((this._pendingStage1TableDragContext = null),
      _0x593590.cleanup(),
      _0xf08b2a.focusCell &&
        this._selectResolvedCell(
          _0x593590.drawing,
          _0x593590.object,
          _0x593590.resolved,
        ));
  }
  _startTableMoveDrag(_0x2a16fe, _0x82fbed, _0x5e577e) {
    var _0xb696f7;
    let _0x5f390d = this._resolvePointerScenePoint(_0x5e577e),
      _0x4e2cd0 = Ki(this._resolveCurrentTableDrawing(_0x2a16fe), _0x82fbed);
    ((this._tableMoveDragContext = {
      drawing: _0x2a16fe,
      object: _0x82fbed,
      activationStage: this._tableActivationStage,
      startEvent: _0x5e577e,
      startPoint: _0x5f390d,
      lastPoint: _0x5f390d,
      startObjectLeft: _0x82fbed.left,
      startObjectTop: _0x82fbed.top,
      startTransform: _0x4e2cd0,
      moved: false,
      clickFallbackTimer: null,
    }),
      this._alignmentGuideService["start"](
        this._renderContext["unitId"],
        new Map([[_0x82fbed.oKey, _0x82fbed]]),
      ));
    let _0x6c9afa = this._renderContext["scene"];
    (_0xb696f7 = _0x6c9afa.disableObjectsEvent) == null ||
      _0xb696f7.call(_0x6c9afa);
    let _0x2c195b = false,
      _0x42cf0b = null,
      _0x2ed25c = null,
      _0x5939cb = typeof window > "u" ? null : window,
      _0x307069 = (_0x1badc5) => {
        var _0x3ff635;
        _0x2c195b ||
          ((_0x2c195b = true),
          _0x42cf0b == null || _0x42cf0b.unsubscribe(),
          _0x2ed25c == null || _0x2ed25c.unsubscribe(),
          _0x5939cb == null ||
            _0x5939cb.removeEventListener("pointerup", _0x307069),
          (_0x3ff635 = _0x6c9afa.enableObjectsEvent) == null ||
            _0x3ff635.call(_0x6c9afa),
          this._finishTableMoveDrag(_0x1badc5));
      };
    ((_0x42cf0b = _0x6c9afa.onPointerMove$["subscribeEvent"]((_0x52e57f) =>
      this._updateTableMoveDrag(_0x52e57f),
    )),
      (_0x2ed25c = _0x6c9afa.onPointerUp$["subscribeEvent"](_0x307069)),
      _0x5939cb == null ||
        _0x5939cb.addEventListener("pointerup", _0x307069, { once: true }),
      (this._tableMoveDragContext["clickFallbackTimer"] = setTimeout(
        _0x307069,
        180,
      )),
      this.disposeWithMe({
        dispose: () =>
          _0x42cf0b == null ? undefined : _0x42cf0b.unsubscribe(),
      }),
      this.disposeWithMe({
        dispose: () =>
          _0x2ed25c == null ? undefined : _0x2ed25c.unsubscribe(),
      }),
      this.disposeWithMe({
        dispose: () =>
          _0x5939cb == null
            ? undefined
            : _0x5939cb.removeEventListener("pointerup", _0x307069),
      }));
  }
  _resolveCurrentTableDrawing(_0x3b491c) {
    return (
      this._slideDrawingService["getDrawingByParam"]({
        unitId: _0x3b491c.unitId,
        subUnitId: _0x3b491c.subUnitId,
        drawingId: _0x3b491c.drawingId,
      }) ?? _0x3b491c
    );
  }
  _updateTableMoveDrag(_0x53cf09) {
    var _0x4c9ecf, _0x494b5d;
    let _0x3bdba8 = this._tableMoveDragContext;
    if (!_0x3bdba8) return;
    let _0x488d20 = this._resolvePointerScenePoint(_0x53cf09),
      _0x5721ac = _0x488d20.x - _0x3bdba8.startPoint["x"],
      _0x5d950f = _0x488d20.y - _0x3bdba8.startPoint["y"];
    if (!_0x3bdba8.moved && Math.hypot(_0x5721ac, _0x5d950f) < 8) return;
    _0x3bdba8.moved ||
      ((_0x3bdba8.clickFallbackTimer &&=
        (clearTimeout(_0x3bdba8.clickFallbackTimer), null)),
      this._hideContextMenu());
    let _0x1b88fe = _0x488d20.x - _0x3bdba8.lastPoint["x"],
      _0x467bff = _0x488d20.y - _0x3bdba8.lastPoint["y"],
      _0x34dbe0 = _0x3bdba8.object;
    ((_0x34dbe0.left += _0x1b88fe),
      (_0x34dbe0.top += _0x467bff),
      _0x34dbe0.makeDirty(true),
      _0x3bdba8.activationStage === "table" &&
        this._syncTableMoveTransformerControls(_0x3bdba8.object),
      (_0x3bdba8.moved = true),
      (_0x3bdba8.lastPoint = _0x488d20),
      this._alignmentGuideService["move"](
        this._renderContext["unitId"],
        new Map([[_0x3bdba8.object["oKey"], _0x3bdba8.object]]),
      ),
      this._slideDrawingService["refreshTransformNotification"]([
        {
          ...this._resolveCurrentTableDrawing(_0x3bdba8.drawing),
          transform: {
            ..._0x3bdba8.startTransform,
            left:
              (_0x3bdba8.startTransform["left"] ?? 0) +
              _0x34dbe0.left -
              _0x3bdba8.startObjectLeft,
            top:
              (_0x3bdba8.startTransform["top"] ?? 0) +
              _0x34dbe0.top -
              _0x3bdba8.startObjectTop,
          },
        },
      ]),
      (_0x4c9ecf = (_0x494b5d = this._renderContext["scene"]).makeDirty) ==
        null || _0x4c9ecf.call(_0x494b5d, true));
  }
  _syncTableMoveTransformerControls(_0x4c51b0) {
    var _0x47aea8, _0x26d3be, _0x173db9, _0xf7e1ae;
    let _0x5ea7de =
      (_0x47aea8 = (_0x26d3be = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x47aea8.call(_0x26d3be);
    if (!_0x5ea7de || _0x4c51b0.isInGroup) return;
    let _0x388c8f = _0x5ea7de,
      _0x1806ef =
        (_0x173db9 = _0x388c8f.getSelectedObjectMap) == null
          ? undefined
          : _0x173db9.call(_0x388c8f);
    if (_0x1806ef && !_0x1806ef.has(_0x4c51b0.oKey)) {
      var _0x5149a8;
      (_0x5149a8 = _0x388c8f.setSelectedControl) == null ||
        _0x5149a8.call(_0x388c8f, _0x4c51b0);
    }
    (_0xf7e1ae = _0x388c8f.updateControl) == null || _0xf7e1ae.call(_0x388c8f);
  }
  _finishTableMoveDrag(_0x190a2e) {
    _0x190a2e && this._updateTableMoveDrag(_0x190a2e);
    let _0x2ac779 = this._tableMoveDragContext;
    if (!_0x2ac779) return;
    if (
      ((this._tableMoveDragContext = null),
      (_0x2ac779.clickFallbackTimer &&=
        (clearTimeout(_0x2ac779.clickFallbackTimer), null)),
      !_0x2ac779.moved)
    ) {
      (this._alignmentGuideService["end"](
        this._renderContext["unitId"],
        new Map([[_0x2ac779.object["oKey"], _0x2ac779.object]]),
      ),
        this._selectTable(_0x2ac779.drawing, _0x2ac779.object));
      return;
    }
    let _0x15d7b1 = _0x2ac779.startTransform["left"] ?? 0,
      _0x33985a = _0x2ac779.startTransform["top"] ?? 0,
      _0x12a48f = _0x2ac779.object,
      _0x4ac2bf = _0x12a48f.left - _0x2ac779.startObjectLeft,
      _0x5a0310 = _0x12a48f.top - _0x2ac779.startObjectTop;
    this._alignmentGuideService["end"](
      this._renderContext["unitId"],
      new Map([[_0x2ac779.object["oKey"], _0x2ac779.object]]),
    );
    let _0x21dada = this._resolveCurrentTableDrawing(_0x2ac779.drawing),
      _0x2a5ae6 = {
        ..._0x2ac779.startTransform,
        left: _0x15d7b1 + _0x4ac2bf,
        top: _0x33985a + _0x5a0310,
      };
    this._commandService["executeCommand"](t.UpdateSlideDrawingCommand["id"], {
      patches: [
        {
          unitId: _0x2ac779.drawing["unitId"],
          subUnitId: _0x2ac779.drawing["subUnitId"],
          drawingId: _0x2ac779.drawing["drawingId"],
          element: {
            ..._0x21dada.element,
            transform: {
              ..._0x21dada.element["transform"],
              left: _0x2a5ae6.left,
              top: _0x2a5ae6.top,
            },
          },
          transform: _0x2a5ae6,
        },
      ],
    });
  }
  _resolvePointerScenePoint(_0xf69d8f, _0x5a1da) {
    let _0x85663b = _0xf69d8f;
    if (
      _0x5a1da != null &&
      _0x5a1da.preferOffset &&
      Z(_0x85663b.offsetX) &&
      Z(_0x85663b.offsetY)
    )
      return this._resolveScenePoint(_0x85663b.offsetX, _0x85663b.offsetY);
    if (Z(_0x85663b.clientX) && Z(_0x85663b.clientY)) {
      var _0x2df904, _0x45d3fe, _0x27f696;
      let _0x56b2c7 =
        (_0x2df904 = this._renderContext["engine"]) == null ||
        (_0x45d3fe = _0x2df904.getCanvasElement) == null ||
        (_0x45d3fe = _0x45d3fe.call(_0x2df904)) == null ||
        (_0x27f696 = _0x45d3fe.getBoundingClientRect) == null
          ? undefined
          : _0x27f696.call(_0x45d3fe);
      if (_0x56b2c7)
        return this._resolveScenePoint(
          _0x85663b.clientX - _0x56b2c7.left,
          _0x85663b.clientY - _0x56b2c7.top,
        );
    }
    return this._resolveScenePoint(
      _0x85663b.offsetX ?? 0,
      _0x85663b.offsetY ?? 0,
    );
  }
  _resolvePointerViewportPoint(_0x1e718c) {
    let _0x3dd778 = _0x1e718c;
    if (Z(_0x3dd778.clientX) && Z(_0x3dd778.clientY)) {
      var _0x4402ed, _0x2f5f00, _0x4a6640;
      let _0x470cbd =
        (_0x4402ed = this._renderContext["engine"]) == null ||
        (_0x2f5f00 = _0x4402ed.getCanvasElement) == null ||
        (_0x2f5f00 = _0x2f5f00.call(_0x4402ed)) == null ||
        (_0x4a6640 = _0x2f5f00.getBoundingClientRect) == null
          ? undefined
          : _0x4a6640.call(_0x2f5f00);
      return {
        x:
          _0x3dd778.clientX -
          ((_0x470cbd == null ? undefined : _0x470cbd.left) ?? 0),
        y:
          _0x3dd778.clientY -
          ((_0x470cbd == null ? undefined : _0x470cbd.top) ?? 0),
      };
    }
    return { x: _0x3dd778.offsetX ?? 0, y: _0x3dd778.offsetY ?? 0 };
  }
  _createViewportPointerEvent(_0x3606bb, _0x3d5d23) {
    let _0x4c5494 = _0x3606bb;
    return {
      ..._0x4c5494,
      button: _0x4c5494.button,
      buttons: _0x4c5494.buttons,
      offsetX: _0x3d5d23.x,
      offsetY: _0x3d5d23.y,
      clientX: undefined,
      clientY: undefined,
      preventDefault: () => {
        var _0x14e291;
        return (_0x14e291 = _0x4c5494.preventDefault) == null
          ? undefined
          : _0x14e291.call(_0x4c5494);
      },
      stopPropagation: () => {
        var _0x5a61b5;
        return (_0x5a61b5 = _0x4c5494.stopPropagation) == null
          ? undefined
          : _0x5a61b5.call(_0x4c5494);
      },
    };
  }
  _updateResizeDrag(_0x53740f) {
    var _0x226695, _0x3d440f, _0x58db2a, _0x20b317;
    let _0x361dd1 = this._resizeDragContext;
    if (!_0x361dd1) return;
    let _0x2bd913 = this._resolveScenePoint(
        _0x53740f.offsetX,
        _0x53740f.offsetY,
      ),
      _0x3b2e04 = this._resolveObjectPoint(
        _0x361dd1.object,
        _0x2bd913.x,
        _0x2bd913.y,
      ),
      _0x20f5bc =
        _0x361dd1.handle["axis"] === "column"
          ? _0x3b2e04.x - _0x361dd1.startPoint["x"]
          : _0x3b2e04.y - _0x361dd1.startPoint["y"],
      _0x19b350 = Hi(
        _0x361dd1.table,
        _0x361dd1.object["width"],
        _0x361dd1.object["height"],
        { ..._0x361dd1.handle, delta: _0x20f5bc, minSize: 12 },
      );
    ((_0x361dd1.pendingTable = _0x19b350),
      (_0x226695 = (_0x3d440f = _0x361dd1.object).setPreviewTable) == null ||
        _0x226695.call(_0x3d440f, _0x19b350),
      this._setResizeCursor(_0x361dd1.handle["axis"]),
      (_0x58db2a = (_0x20b317 = this._renderContext["scene"]).makeDirty) ==
        null || _0x58db2a.call(_0x20b317, true));
  }
  _finishResizeDrag(_0x2acdf2) {
    var _0x38138f, _0x376038;
    let _0x15f230 = this._resizeDragContext;
    if (!_0x15f230) return;
    this._updateResizeDrag(_0x2acdf2);
    let _0x466bbb = _0x15f230.pendingTable;
    ((_0x38138f = (_0x376038 = _0x15f230.object).setPreviewTable) == null ||
      _0x38138f.call(_0x376038, null),
      (this._resizeDragContext = null),
      this._resetResizeCursor(),
      $i(_0x15f230.table, _0x466bbb, _0x15f230.handle["axis"]) &&
        this._commandService["executeCommand"](
          n.UpdateSlideTableCommand["id"],
          {
            unitId: _0x15f230.unitId,
            tableId: _0x15f230.tableId,
            patch:
              _0x15f230.handle["axis"] === "column"
                ? { columns: _0x466bbb.columns }
                : { rows: _0x466bbb.rows },
          },
        ));
  }
  _setResizeCursor(_0xfd0c77) {
    ((this._resizeHoverActive = true),
      this._renderContext["scene"].setCursor(
        _0xfd0c77 === "column"
          ? a.CURSOR_TYPE["COLUMN_RESIZE"]
          : a.CURSOR_TYPE["ROW_RESIZE"],
      ));
  }
  _resetResizeCursor() {
    this._resizeHoverActive &&
      ((this._resizeHoverActive = false),
      this._renderContext["scene"].resetCursor());
  }
  _isTableTextEditing() {
    var _0x1c62f2;
    return (
      ((_0x1c62f2 = this._tableSelectionService["getSelection"]()) == null
        ? undefined
        : _0x1c62f2.kind) === "text"
    );
  }
  _isTableDrawingActive(_0xfc981e) {
    var _0x3fc737, _0x1527a, _0x555847, _0x39f010, _0x57c658;
    let _0x814067 =
      (_0x3fc737 = this._tableSelectionService) == null ||
      (_0x1527a = _0x3fc737.getSelection) == null
        ? undefined
        : _0x1527a.call(_0x3fc737);
    if (
      (_0x814067 == null ? undefined : _0x814067.kind) === "text" &&
      _0x814067.unitId === _0xfc981e.unitId &&
      _0x814067.subUnitId === _0xfc981e.subUnitId &&
      _0x814067.elementId === _0xfc981e.drawingId &&
      _0xfc981e.element["type"] === t.PageElementTypeEnum["Table"] &&
      _0x814067.tableId === _0xfc981e.element["tableId"]
    )
      return true;
    let _0x5360b6 =
      (_0x555847 = this._drawingStateService) == null ||
      (_0x39f010 = _0x555847.getSnapshot) == null
        ? undefined
        : _0x39f010.call(_0x555847);
    return (
      !_0x5360b6 ||
      (((_0x57c658 = _0x5360b6.context) == null
        ? undefined
        : _0x57c658.unitId) === _0xfc981e.unitId &&
        _0x5360b6.context["subUnitId"] === _0xfc981e.subUnitId &&
        _0x5360b6.selectedIds["includes"](_0xfc981e.drawingId))
    );
  }
  _isTableInteractionInProgress(_0xf2391d) {
    var _0x381e56, _0x4b0adc;
    let _0x42bfe5 = (_0x3db3b0) =>
        _0x3db3b0
          ? _0x3db3b0.drawing
            ? _0x3db3b0.drawing["unitId"] === _0xf2391d.unitId &&
              _0x3db3b0.drawing["subUnitId"] === _0xf2391d.subUnitId &&
              _0x3db3b0.drawing["drawingId"] === _0xf2391d.elementId
            : _0x3db3b0.unitId === _0xf2391d.unitId &&
              _0x3db3b0.tableId === _0xf2391d.tableId
          : false,
      _0xc67bd2 =
        ((_0x381e56 = (_0x4b0adc = this._tableSelectionService)
          .isTableInternalInteractionActive) == null
          ? undefined
          : _0x381e56.call(_0x4b0adc)) ?? false;
    return (
      _0xf2391d.kind === "text" ||
      _0xc67bd2 ||
      _0x42bfe5(this._rangeDragContext) ||
      _0x42bfe5(this._pendingStage1TableDragContext) ||
      _0x42bfe5(this._tableMoveDragContext) ||
      _0x42bfe5(this._resizeDragContext) ||
      _0x42bfe5(this._pendingHeaderSelection) ||
      _0x42bfe5(this._rowColumnMoveState)
    );
  }
  _selectResolvedCell(_0xc9c7d2, _0x6f0a79, _0x18da37) {
    var _0x2ad43e, _0x349fd9, _0x49acf8;
    if (_0xc9c7d2.element["type"] !== t.PageElementTypeEnum["Table"]) return;
    this._enterCellStage();
    let _0x4f2a7d = this._tableSelectionService["selectCell"]({
      unitId: _0xc9c7d2.unitId,
      subUnitId: _0xc9c7d2.subUnitId,
      elementId: _0xc9c7d2.drawingId,
      tableId: _0xc9c7d2.element["tableId"],
      row: _0x18da37.row,
      column: _0x18da37.column,
    });
    ((_0x2ad43e = _0x6f0a79.setTableSelection) == null ||
      _0x2ad43e.call(_0x6f0a79, {
        kind: Y(_0x4f2a7d.kind),
        ranges: _0x4f2a7d.ranges,
        active: { row: _0x18da37.row, column: _0x18da37.column },
      }),
      this._setTableKeyboardFocus(true),
      (_0x349fd9 = (_0x49acf8 = this._renderContext["scene"]).makeDirty) ==
        null || _0x349fd9.call(_0x49acf8, true));
  }
  _syncTableSelectionToObject(
    _0x1c7e4f,
    _0x1fc7c9,
    _0x46bc5c = this._tableSelectionService["getSelection"](),
  ) {
    var _0x2adfa8, _0x5f5121;
    if (
      !_0x46bc5c ||
      _0x1c7e4f.element["type"] !== t.PageElementTypeEnum["Table"] ||
      _0x46bc5c.unitId !== _0x1c7e4f.unitId ||
      _0x46bc5c.subUnitId !== _0x1c7e4f.subUnitId ||
      _0x46bc5c.elementId !== _0x1c7e4f.drawingId ||
      _0x46bc5c.tableId !== _0x1c7e4f.element["tableId"]
    )
      return;
    let _0x4f0525 = _0x46bc5c.focus ?? _0x46bc5c.anchor ?? Ji(_0x46bc5c.ranges);
    ((_0x2adfa8 = _0x1fc7c9.setTableSelection) == null ||
      _0x2adfa8.call(_0x1fc7c9, {
        kind: Y(_0x46bc5c.kind),
        ranges: _0x46bc5c.ranges,
        active: _0x4f0525,
      }),
      (_0x5f5121 = _0x1fc7c9.setEditingCell) == null ||
        _0x5f5121.call(
          _0x1fc7c9,
          _0x46bc5c.kind === "text" ? (_0x4f0525 ?? null) : null,
        ));
  }
  _selectRows(_0x155194, _0x19a9ea, _0x4d461a, _0x6391eb) {
    var _0x2ab4a3, _0x456a2e, _0x330921;
    if (_0x155194.element["type"] !== t.PageElementTypeEnum["Table"]) return;
    let _0x2e59db = this._tableResourceService["getTable"](
      _0x155194.unitId,
      _0x155194.element["tableId"],
    );
    if (!_0x2e59db) return;
    this._enterCellStage();
    let _0x5c13cf = (0, n.expandSlideTableRangeToMergedCells)(_0x2e59db, {
        startRow: _0x4d461a,
        endRow: _0x6391eb,
        startColumn: 0,
        endColumn: Math.max(0, _0x2e59db.columns["length"] - 1),
      }),
      _0x254a0f = this._tableSelectionService["selectRows"]({
        unitId: _0x155194.unitId,
        subUnitId: _0x155194.subUnitId,
        elementId: _0x155194.drawingId,
        tableId: _0x155194.element["tableId"],
        startRow: _0x5c13cf.startRow,
        endRow: _0x5c13cf.endRow,
        columnCount: _0x2e59db.columns["length"],
      });
    ((_0x2ab4a3 = _0x19a9ea.setTableSelection) == null ||
      _0x2ab4a3.call(_0x19a9ea, {
        kind: Y(_0x254a0f.kind),
        ranges: _0x254a0f.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x456a2e = (_0x330921 = this._renderContext["scene"]).makeDirty) ==
        null || _0x456a2e.call(_0x330921, true));
  }
  _selectColumns(_0x2511fb, _0x19908a, _0x1cd955, _0xeef09) {
    var _0x2f9c43, _0x55ae14, _0xb1441d;
    if (_0x2511fb.element["type"] !== t.PageElementTypeEnum["Table"]) return;
    let _0x5e0ecc = this._tableResourceService["getTable"](
      _0x2511fb.unitId,
      _0x2511fb.element["tableId"],
    );
    if (!_0x5e0ecc) return;
    this._enterCellStage();
    let _0x417eb9 = (0, n.expandSlideTableRangeToMergedCells)(_0x5e0ecc, {
        startRow: 0,
        endRow: Math.max(0, _0x5e0ecc.rows["length"] - 1),
        startColumn: _0x1cd955,
        endColumn: _0xeef09,
      }),
      _0x189261 = this._tableSelectionService["selectColumns"]({
        unitId: _0x2511fb.unitId,
        subUnitId: _0x2511fb.subUnitId,
        elementId: _0x2511fb.drawingId,
        tableId: _0x2511fb.element["tableId"],
        startColumn: _0x417eb9.startColumn,
        endColumn: _0x417eb9.endColumn,
        rowCount: _0x5e0ecc.rows["length"],
      });
    ((_0x2f9c43 = _0x19908a.setTableSelection) == null ||
      _0x2f9c43.call(_0x19908a, {
        kind: Y(_0x189261.kind),
        ranges: _0x189261.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x55ae14 = (_0xb1441d = this._renderContext["scene"]).makeDirty) ==
        null || _0x55ae14.call(_0xb1441d, true));
  }
  _selectTable(_0x382060, _0x263281) {
    var _0x4d0d17, _0x14c94f, _0x5da0f9;
    if (_0x382060.element["type"] !== t.PageElementTypeEnum["Table"]) return;
    let _0x41211f = this._tableResourceService["getTable"](
      _0x382060.unitId,
      _0x382060.element["tableId"],
    );
    if (!_0x41211f) return;
    this._enterCellStage();
    let _0x24a65a = this._tableSelectionService["selectTable"]({
      unitId: _0x382060.unitId,
      subUnitId: _0x382060.subUnitId,
      elementId: _0x382060.drawingId,
      tableId: _0x382060.element["tableId"],
      rowCount: _0x41211f.rows["length"],
      columnCount: _0x41211f.columns["length"],
    });
    ((_0x4d0d17 = _0x263281.setTableSelection) == null ||
      _0x4d0d17.call(_0x263281, {
        kind: Y(_0x24a65a.kind),
        ranges: _0x24a65a.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x14c94f = (_0x5da0f9 = this._renderContext["scene"]).makeDirty) ==
        null || _0x14c94f.call(_0x5da0f9, true));
  }
  _activateTableObject(_0x2b4d42) {
    var _0x30b014, _0x5f40c5, _0xee1412;
    ((this._tableActivationStage = "table"),
      (_0x30b014 = _0x2b4d42.setTableSelection) == null ||
        _0x30b014.call(_0x2b4d42, { ranges: [] }),
      this._setTableKeyboardFocus(false),
      this._setTableObjectKeyboardFocus(true),
      (_0x5f40c5 = (_0xee1412 = this._renderContext["scene"]).makeDirty) ==
        null || _0x5f40c5.call(_0xee1412, true));
  }
  _enterCellStage() {
    (this._tableActivationStage !== "cell" &&
      (this._tableActivationStage = "cell"),
      this._setTableObjectKeyboardFocus(false),
      this._hideTableTransformerControls());
  }
  _syncActivationStageFromSelection(_0x4a9663) {
    var _0xf5dee1;
    let _0x1b9167 = !!(
      (_0xf5dee1 = _0x4a9663.ranges) != null && _0xf5dee1.length
    );
    ((this._tableActivationStage = _0x1b9167 ? "cell" : "table"),
      this._setTableKeyboardFocus(_0x1b9167 && _0x4a9663.kind !== "text"),
      this._setTableObjectKeyboardFocus(!_0x1b9167),
      _0x1b9167 && this._hideTableTransformerControls());
  }
  _shouldShowTransformerForDrawing(_0x6e4f84) {
    var _0x32e0a4, _0x2c1e2b;
    if (_0x6e4f84.element["type"] !== t.PageElementTypeEnum["Table"])
      return true;
    let _0x57a95b = this._tableSelectionService["getSelection"]();
    return !(
      (_0x57a95b &&
        _0x57a95b.unitId === _0x6e4f84.unitId &&
        _0x57a95b.subUnitId === _0x6e4f84.subUnitId &&
        _0x57a95b.elementId === _0x6e4f84.drawingId &&
        (_0x57a95b.kind === "text" ||
          ((_0x32e0a4 = _0x57a95b.ranges) != null && _0x32e0a4.length))) ||
      (((_0x2c1e2b = this._lastActiveTableContext) == null
        ? undefined
        : _0x2c1e2b.unitId) === _0x6e4f84.unitId &&
        this._lastActiveTableContext["subUnitId"] === _0x6e4f84.subUnitId &&
        this._lastActiveTableContext["elementId"] === _0x6e4f84.drawingId &&
        this._tableActivationStage === "cell")
    );
  }
  _hideTableTransformerControls() {
    var _0x53e5fb, _0x38be64, _0x104635, _0x4cb63a, _0x1cf78b;
    let _0x116631 =
      (_0x53e5fb = (_0x38be64 = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x53e5fb.call(_0x38be64);
    (_0x116631 == null ||
      (_0x104635 = _0x116631.clearSelectedObjects) == null ||
      _0x104635.call(_0x116631),
      (_0x4cb63a = (_0x1cf78b = this._renderContext["scene"]).makeDirty) ==
        null || _0x4cb63a.call(_0x1cf78b, true));
  }
  _handleKeyboardAction(_0x438d05) {
    var _0x1a1fce, _0x4dfd72;
    if (this._isTableTextEditing()) {
      let _0x389ee5 = this._editorUIService["getSession"](),
        _0x23ca0b = Gi(_0x438d05);
      return !_0x389ee5 || !_0x23ca0b
        ? false
        : this._handleCellEditorKeyDown(
            _0x23ca0b,
            _0x389ee5.context,
            this._editorSessionId,
          );
    }
    if (_0x438d05 === "edit-cell") return this._openSelectionEditor();
    let _0x2eb7f8 = this._resolveActiveSelectionForKeyboard();
    if (
      !_0x2eb7f8 ||
      _0x2eb7f8.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return false;
    if (_0x438d05 === "clear-cells")
      return this._clearSelectedCellContents(_0x2eb7f8);
    let _0xee532f = Ot(_0x438d05);
    if (!_0xee532f) return false;
    if (_0xee532f.extend) {
      var _0x2fddbe, _0x583d1f;
      let _0x5bb9cb = _0x2eb7f8.selection["anchor"] ?? _0x2eb7f8.focus,
        _0x5fca66 = kt(
          _0x2eb7f8.focus,
          _0xee532f,
          _0x2eb7f8.table["rows"].length,
          _0x2eb7f8.table["columns"].length,
        ),
        _0x443c46 = (0, n.expandSlideTableRangeToMergedCells)(_0x2eb7f8.table, {
          startRow: _0x5bb9cb.row,
          startColumn: _0x5bb9cb.column,
          endRow: _0x5fca66.row,
          endColumn: _0x5fca66.column,
        }),
        _0xac6207 = this._tableSelectionService["selectRange"]({
          unitId: _0x2eb7f8.drawing["unitId"],
          subUnitId: _0x2eb7f8.drawing["subUnitId"],
          elementId: _0x2eb7f8.drawing["drawingId"],
          tableId: _0x2eb7f8.drawing["element"].tableId,
          ..._0x443c46,
        });
      (_0x2fddbe = (_0x583d1f = _0x2eb7f8.object).setTableSelection) == null ||
        _0x2fddbe.call(_0x583d1f, {
          kind: Y(_0xac6207.kind),
          ranges: _0xac6207.ranges,
          active: _0x5fca66,
        });
    } else {
      var _0xa82be5, _0x24ac6f;
      let _0x16e0dd = kt(
          _0x2eb7f8.focus,
          _0xee532f,
          _0x2eb7f8.table["rows"].length,
          _0x2eb7f8.table["columns"].length,
        ),
        _0x3d4cc7 = this._tableSelectionService["selectCell"]({
          unitId: _0x2eb7f8.drawing["unitId"],
          subUnitId: _0x2eb7f8.drawing["subUnitId"],
          elementId: _0x2eb7f8.drawing["drawingId"],
          tableId: _0x2eb7f8.drawing["element"].tableId,
          row: _0x16e0dd.row,
          column: _0x16e0dd.column,
        });
      (_0xa82be5 = (_0x24ac6f = _0x2eb7f8.object).setTableSelection) == null ||
        _0xa82be5.call(_0x24ac6f, {
          kind: Y(_0x3d4cc7.kind),
          ranges: _0x3d4cc7.ranges,
          active: _0x16e0dd,
        });
    }
    return (
      this._setTableKeyboardFocus(true),
      (_0x1a1fce = (_0x4dfd72 = this._renderContext["scene"]).makeDirty) ==
        null || _0x1a1fce.call(_0x4dfd72, true),
      true
    );
  }
  _resolveTableClipboardTarget(_0x122649) {
    if (
      _0x122649.defaultPrevented ||
      !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE") ||
      this._isTableTextEditing()
    )
      return null;
    let _0x266f54 = this._resolveActiveSelectionForKeyboard();
    return (_0x266f54 == null ? undefined : _0x266f54.selection["unitId"]) ===
      this._renderContext["unitId"]
      ? _0x266f54
      : null;
  }
  _canCopyTable(_0x28912e) {
    return (0, t.getSlidePermissionValue)(
      this._permissionService,
      _0x28912e.unitId,
      _0x28912e.unitId,
      g.UnitAction["Copy"],
    );
  }
  async _commitClipboardPatch(_0x470f29, _0x5236d3) {
    var _0x2f0b6c, _0x2c54ee, _0x1d217d, _0x21ab92;
    return (await this._commandService["executeCommand"](
      n.UpdateSlideTableCommand["id"],
      {
        unitId: _0x470f29.selection["unitId"],
        tableId: _0x470f29.selection["tableId"],
        patch: _0x5236d3,
      },
    ))
      ? ((_0x2f0b6c = (_0x2c54ee = _0x470f29.object).setTableSelection) ==
          null ||
          _0x2f0b6c.call(_0x2c54ee, {
            kind: Y(_0x470f29.selection["kind"]),
            ranges: _0x470f29.selection["ranges"],
            active: _0x470f29.selection["focus"],
          }),
        this._setTableKeyboardFocus(true),
        (_0x1d217d = (_0x21ab92 = this._renderContext["scene"]).makeDirty) ==
          null || _0x1d217d.call(_0x21ab92, true),
        true)
      : false;
  }
  async _insertClipboardImages(_0x274b7d, _0x2b189c = 0) {
    for (let _0x1e1f50 = 0; _0x1e1f50 < _0x274b7d.length; _0x1e1f50++) {
      let _0x4db2a1 = _0x274b7d[_0x1e1f50],
        _0x15dd86 = await (0, h.normalizeClipboardImageFile)(_0x4db2a1);
      if (_0x15dd86) {
        let _0xbfd22d = (_0x2b189c + _0x1e1f50) * 32;
        _0xbfd22d === 0
          ? await this._slideInsertService["insertImage"](_0x15dd86)
          : await this._slideInsertService["insertImage"](_0x15dd86, {
              offset: { x: _0xbfd22d, y: _0xbfd22d },
            });
      }
    }
  }
  _handleKeyboardInput(_0x3a77a9) {
    return _0x3a77a9.kind === "composition-start"
      ? this._openSelectionEditor()
      : this._isTableTextEditing() || !_0x3a77a9.text
        ? false
        : this._openSelectionEditor({ initialText: _0x3a77a9.text });
  }
  _clearSelectedCellContents(_0x5a3271) {
    var _0x453a93, _0x7f1bfc, _0x18370e, _0x25692e;
    let _0x5894ee = Ci(_0x5a3271.table, _0x5a3271.selection);
    return (
      _0x5894ee &&
        this._commandService["executeCommand"](
          n.UpdateSlideTableCommand["id"],
          {
            unitId: _0x5a3271.selection["unitId"],
            tableId: _0x5a3271.selection["tableId"],
            patch: _0x5894ee,
          },
        ),
      (_0x453a93 = (_0x7f1bfc = _0x5a3271.object).setTableSelection) == null ||
        _0x453a93.call(_0x7f1bfc, {
          kind: Y(_0x5a3271.selection["kind"]),
          ranges: _0x5a3271.selection["ranges"],
          active: _0x5a3271.selection["focus"],
        }),
      this._setTableKeyboardFocus(true),
      (_0x18370e = (_0x25692e = this._renderContext["scene"]).makeDirty) ==
        null || _0x18370e.call(_0x25692e, true),
      true
    );
  }
  _openSelectionEditor(_0xde2a9c) {
    let _0x177261 = this._resolveActiveSelectionForKeyboard();
    if (
      !_0x177261 ||
      _0x177261.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x45a488 = (0, n.resolveSlideTableRenderModel)(_0x177261.table),
      _0x6fa8b9 =
        _0x45a488.cells["find"](
          (_0x5b9724) =>
            _0x5b9724.row === _0x177261.focus["row"] &&
            _0x5b9724.column === _0x177261.focus["column"] &&
            !_0x5b9724.hidden,
        ) ??
        _0x45a488.cells["find"](
          (_0x590ef8) =>
            !_0x590ef8.hidden &&
            _0x177261.focus["row"] >= _0x590ef8.row &&
            _0x177261.focus["row"] < _0x590ef8.row + _0x590ef8.rowSpan &&
            _0x177261.focus["column"] >= _0x590ef8.column &&
            _0x177261.focus["column"] < _0x590ef8.column + _0x590ef8.columnSpan,
        );
    return _0x6fa8b9
      ? (this._openCellEditor(
          _0x177261.drawing,
          {
            table: _0x177261.table,
            model: _0x45a488,
            cell: _0x6fa8b9,
            row: _0x6fa8b9.row,
            column: _0x6fa8b9.column,
            object: _0x177261.object,
          },
          _0xde2a9c,
        ),
        true)
      : false;
  }
  _resolveActiveSelectionForKeyboard() {
    let _0x425c1f = this._tableSelectionService["getSelection"](),
      _0x35ef37 = _0x425c1f == null ? undefined : _0x425c1f.ranges[0];
    if (!_0x425c1f || !_0x35ef37 || _0x425c1f.kind === "text") return null;
    let _0x4a79c9 = this._resolveSelectedTableDrawing(
      _0x425c1f.unitId,
      _0x425c1f.subUnitId,
      _0x425c1f.elementId,
    );
    if (
      !_0x4a79c9 ||
      _0x4a79c9.element["type"] !== t.PageElementTypeEnum["Table"] ||
      !this._isTableDrawingActive(_0x4a79c9)
    )
      return null;
    let _0x414eaf = this._tableResourceService["getTable"](
        _0x425c1f.unitId,
        _0x425c1f.tableId,
      ),
      _0x1c8ca3 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x425c1f.unitId,
          _0x425c1f.subUnitId,
          _0x425c1f.elementId,
        ),
      );
    return !_0x414eaf || !_0x1c8ca3
      ? null
      : {
          drawing: _0x4a79c9,
          object: _0x1c8ca3,
          table: _0x414eaf,
          selection: _0x425c1f,
          focus: At(
            _0x425c1f.focus ?? {
              row: Math.min(_0x35ef37.startRow, _0x35ef37.endRow),
              column: Math.min(_0x35ef37.startColumn, _0x35ef37.endColumn),
            },
            _0x414eaf.rows["length"],
            _0x414eaf.columns["length"],
          ),
        };
  }
  _setTableKeyboardFocus(_0x26b74e) {
    this._contextService["setContextValue"]("FOCUSING_SLIDE_TABLE", _0x26b74e);
  }
  _setTableObjectKeyboardFocus(_0x106bf0) {
    this._contextService["setContextValue"](
      "FOCUSING_SLIDE_TABLE_OBJECT",
      _0x106bf0,
    );
  }
  _updateRangeDrag(_0x471d36) {
    let _0x5d2bd7 = this._rangeDragContext;
    if (
      !_0x5d2bd7 ||
      _0x5d2bd7.drawing["element"].type !== t.PageElementTypeEnum["Table"]
    )
      return;
    if (
      "buttons" in _0x471d36 &&
      _0x471d36.buttons !== undefined &&
      (_0x471d36.buttons & 1) != 1
    ) {
      this._finishRangeDrag();
      return;
    }
    let _0x2c01b8 = this._resolvePointerScenePoint(_0x471d36),
      _0x2891f7 = this._resolveCellHit(
        _0x5d2bd7.drawing,
        _0x5d2bd7.objectKey,
        _0x2c01b8.x,
        _0x2c01b8.y,
      );
    _0x2891f7 &&
      this._applyRangeDragSelection(_0x5d2bd7, {
        row: _0x2891f7.row,
        column: _0x2891f7.column,
      });
  }
  _applyRangeDragSelection(_0x4035f3, _0x3845ad) {
    var _0xd97a20, _0x212d00, _0x210a95, _0x4453bd, _0x5599f5;
    if (
      _0x4035f3.drawing["element"].type !== t.PageElementTypeEnum["Table"] ||
      (_0x4035f3.current["row"] === _0x3845ad.row &&
        _0x4035f3.current["column"] === _0x3845ad.column &&
        ((_0xd97a20 = this._tableSelectionService["getSelection"]()) == null
          ? undefined
          : _0xd97a20.kind) === "range")
    )
      return;
    _0x4035f3.current = _0x3845ad;
    let _0x50f8df = (0, n.expandSlideTableRangeToMergedCells)(_0x4035f3.table, {
        startRow: _0x4035f3.anchor["row"],
        startColumn: _0x4035f3.anchor["column"],
        endRow: _0x3845ad.row,
        endColumn: _0x3845ad.column,
      }),
      _0x248566 = this._tableSelectionService["selectRange"]({
        unitId: _0x4035f3.drawing["unitId"],
        subUnitId: _0x4035f3.drawing["subUnitId"],
        elementId: _0x4035f3.drawing["drawingId"],
        tableId: _0x4035f3.drawing["element"].tableId,
        ..._0x50f8df,
      });
    ((_0x212d00 = (_0x210a95 = _0x4035f3.object).setTableSelection) == null ||
      _0x212d00.call(_0x210a95, {
        kind: Y(_0x248566.kind),
        ranges: _0x248566.ranges,
        active: _0x3845ad,
      }),
      this._setTableKeyboardFocus(true),
      (_0x4453bd = (_0x5599f5 = this._renderContext["scene"]).makeDirty) ==
        null || _0x4453bd.call(_0x5599f5, true));
  }
  _resetTableInteraction() {
    var _0x3736ad,
      _0xbce035,
      _0x26da6f,
      _0x3ab23c,
      _0x41e7de,
      _0x133244,
      _0x11c22b;
    let _0x15ea05 = this._tableSelectionService["getSelection"](),
      _0x3e76b6 = [
        _0x15ea05
          ? {
              unitId: _0x15ea05.unitId,
              subUnitId: _0x15ea05.subUnitId,
              elementId: _0x15ea05.elementId,
            }
          : null,
        this._lastActiveTableContext,
      ].filter((_0x579d33) => !!_0x579d33),
      _0x239397 = _0x3e76b6.filter(
        (_0x54760c, _0x564918) =>
          _0x3e76b6.findIndex(
            (_0x31f831) =>
              _0x31f831.unitId === _0x54760c.unitId &&
              _0x31f831.subUnitId === _0x54760c.subUnitId &&
              _0x31f831.elementId === _0x54760c.elementId,
          ) === _0x564918,
      );
    ((_0x3736ad = this._editorDisposable) == null || _0x3736ad.dispose(),
      (this._editorDisposable = null),
      (this._editorSessionId += 1),
      (this._activeEditorContextKey = null),
      this._finishRangeDrag(),
      (this._rangeDragContext = null),
      this._finishPendingStage1TableDrag({ focusCell: false }),
      (this._hoveredTrigger = null),
      this._finishHeaderSelectionDrag(undefined, { commitMove: false }),
      (this._tableActivationStage = null),
      (this._lastActiveTableContext = null),
      (_0xbce035 = this._tableMoveDragContext) != null &&
        _0xbce035.clickFallbackTimer &&
        clearTimeout(this._tableMoveDragContext["clickFallbackTimer"]),
      this._tableMoveDragContext &&
        this._alignmentGuideService["end"](
          this._renderContext["unitId"],
          new Map([
            [
              this._tableMoveDragContext["object"].oKey,
              this._tableMoveDragContext["object"],
            ],
          ]),
        ),
      (this._tableMoveDragContext = null),
      (_0x26da6f = this._resizeDragContext) == null ||
        (_0x41e7de = (_0x3ab23c = _0x26da6f.object).setPreviewTable) == null ||
        _0x41e7de.call(_0x3ab23c, null),
      (this._resizeDragContext = null),
      this._resetResizeCursor(),
      this._setStructuralCursor(false),
      this._setTableKeyboardFocus(false),
      this._setTableObjectKeyboardFocus(false),
      _0x239397.forEach((_0x2dcf61) => {
        var _0x1bd632, _0x2e8ad2, _0x3e5743, _0x27afdc, _0x45e9d3, _0x3e9e5d;
        let _0xa98e17 = this._renderContext["scene"].getObject(
          (0, r.buildDrawingOKey)(
            _0x2dcf61.unitId,
            _0x2dcf61.subUnitId,
            _0x2dcf61.elementId,
          ),
        );
        (_0xa98e17 == null ||
          (_0x1bd632 = _0xa98e17.setEditingCell) == null ||
          _0x1bd632.call(_0xa98e17, null),
          _0xa98e17 == null ||
            (_0x2e8ad2 = _0xa98e17.setPreviewTable) == null ||
            _0x2e8ad2.call(_0xa98e17, null),
          _0xa98e17 == null ||
            (_0x3e5743 = _0xa98e17.setTableSelection) == null ||
            _0x3e5743.call(_0xa98e17, null),
          _0xa98e17 == null ||
            (_0x27afdc = _0xa98e17.setTableCellHover) == null ||
            _0x27afdc.call(_0xa98e17, null),
          _0xa98e17 == null ||
            (_0x45e9d3 = _0xa98e17.setTableControlState) == null ||
            _0x45e9d3.call(_0xa98e17, null),
          _0xa98e17 == null ||
            (_0x3e9e5d = _0xa98e17.setTableControlHover) == null ||
            _0x3e9e5d.call(_0xa98e17, null));
      }),
      this._tableSelectionService["clear"](),
      (_0x133244 = (_0x11c22b = this._renderContext["scene"]).makeDirty) ==
        null || _0x133244.call(_0x11c22b, true));
  }
  _handleDoubleClick(_0x243f96) {
    if (
      _0x243f96.drawing["unitId"] !== this._renderContext["unitId"] ||
      _0x243f96.drawing["element"].type !== t.PageElementTypeEnum["Table"] ||
      !this._isTableDrawingActive(_0x243f96.drawing)
    )
      return;
    let _0x4b9a6b = this._resolveCellHit(
      _0x243f96.drawing,
      _0x243f96.oKey,
      _0x243f96.offsetX,
      _0x243f96.offsetY,
    );
    _0x4b9a6b && this._openCellEditor(_0x243f96.drawing, _0x4b9a6b);
  }
  _openCellEditor(_0x2bfe5b, _0x6f19e, _0x36a502) {
    var _0x139ccd, _0xf5cccc, _0x459ab4, _0x1485cf;
    if (_0x2bfe5b.element["type"] !== t.PageElementTypeEnum["Table"]) return;
    let _0x9e17a8 = _0x2bfe5b.element,
      _0x56aac8 = {
        unitId: _0x2bfe5b.unitId,
        subUnitId: _0x2bfe5b.subUnitId,
        elementId: _0x2bfe5b.drawingId,
        tableId: _0x9e17a8.tableId,
        row: _0x6f19e.row,
        column: _0x6f19e.column,
        drawingTransform: _0x2bfe5b.transform,
      },
      _0x29d4f6 =
        (_0x36a502 == null ? undefined : _0x36a502.initialText) === undefined
          ? this._resolveCellDocumentData(
              _0x6f19e.table,
              _0x6f19e.row,
              _0x6f19e.column,
            )
          : ai(
              this._resolveCellDocumentData(
                _0x6f19e.table,
                _0x6f19e.row,
                _0x6f19e.column,
              ),
              _0x36a502.initialText,
            ),
      _0x58df94 = this._resolveEditorLayout(
        _0x6f19e.object,
        _0x6f19e.model,
        _0x6f19e.cell,
        _0x29d4f6,
      );
    if (!_0x58df94) return;
    this._enterCellStage();
    let _0x35439e = ea(_0x56aac8);
    this._hideContextMenu();
    let _0x403ca4 = (this._editorSessionId ?? 0) + 1;
    if (
      ((this._editorSessionId = _0x403ca4),
      (this._activeEditorContextKey = _0x35439e),
      _0x36a502 != null && _0x36a502.handoffCurrent)
    ) {
      var _0x17eac1, _0x278653;
      let _0xad8de1 =
        (_0x17eac1 = (_0x278653 = this._editorUIService).getSession) == null
          ? undefined
          : _0x17eac1.call(_0x278653);
      this._editorUIService["complete"](
        _0xad8de1 == null ? undefined : _0xad8de1.documentData,
        _0xad8de1 == null ? undefined : _0xad8de1.measurement,
        _0xad8de1 == null ? undefined : _0xad8de1.sessionId,
      );
    } else this._editorUIService["complete"]();
    (_0x139ccd = (_0xf5cccc = _0x6f19e.object).setEditingCell) == null ||
      _0x139ccd.call(_0xf5cccc, {
        row: _0x6f19e.cell["row"],
        column: _0x6f19e.cell["column"],
      });
    let _0x2644b9 = this._tableSelectionService["enterTextMode"](_0x56aac8);
    ((_0x459ab4 = (_0x1485cf = _0x6f19e.object).setTableSelection) == null ||
      _0x459ab4.call(_0x1485cf, {
        kind: Y(_0x2644b9.kind),
        ranges: _0x2644b9.ranges,
        active: { row: _0x6f19e.row, column: _0x6f19e.column },
      }),
      this._makeSceneDirty(),
      this._setTableKeyboardFocus(false),
      (this._editorDisposable = this._editorUIService["open"]({
        editorId: Ri,
        documentData: _0x29d4f6,
        layout: _0x58df94,
        context: _0x56aac8,
        appearance: "table-cell",
        autoFocus: true,
        hideFloatingToolbarAlignment: true,
        cellFillColor: oa(_0x6f19e.table, _0x6f19e.cell),
        isSingle: false,
        onCellFillColorChange: (_0x6cd5c2, _0x247da2) => {
          this._commitCellStyle(_0x247da2, { fill: aa(_0x6cd5c2) });
        },
        onChange: (_0x5e1510, _0x7d8d7c, _0x2f4774) => {
          this._autoGrowCellEditorRowHeight(_0x7d8d7c, _0x2f4774, _0x403ca4);
        },
        onComplete: (_0x50bfc1, _0x5b9dfd, _0x317c0f) => {
          this._commitCellDocument(_0x50bfc1, _0x5b9dfd, _0x317c0f, _0x403ca4);
        },
        onCancel: (_0x5d3f10) => {
          this._finishCellEditing(_0x5d3f10, _0x403ca4);
        },
        onPointerDown: (_0x486456, _0x24d551) =>
          this._handleCellEditorPointerDown(_0x486456, _0x24d551, _0x403ca4),
        onKeyDown: (_0x4b5f1d, _0xd44b0d) =>
          this._handleCellEditorKeyDown(_0x4b5f1d, _0xd44b0d, _0x403ca4),
      })));
  }
  _handleCellEditorPointerDown(_0x26d167, _0x4a23c2, _0x238e38) {
    var _0x28fd87;
    if (!_0x4a23c2 || !this._isCurrentEditorSession(_0x4a23c2, _0x238e38))
      return false;
    let _0x558719 = this._tableResourceService["getTable"](
        _0x4a23c2.unitId,
        _0x4a23c2.tableId,
      ),
      _0x391b17 = this._resolveSelectedTableDrawing(
        _0x4a23c2.unitId,
        _0x4a23c2.subUnitId,
        _0x4a23c2.elementId,
      );
    if (
      !_0x558719 ||
      !_0x391b17 ||
      _0x391b17.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x4ab4b0 = (0, r.buildDrawingOKey)(
        _0x4a23c2.unitId,
        _0x4a23c2.subUnitId,
        _0x4a23c2.elementId,
      ),
      _0x1bd499 = this._renderContext["scene"].getObject(_0x4ab4b0);
    if (!_0x1bd499) return false;
    let _0x201bcd = this._resolvePointerScenePoint(_0x26d167),
      _0x15d952 = this._resolveCellHit(
        _0x391b17,
        _0x4ab4b0,
        _0x201bcd.x,
        _0x201bcd.y,
      );
    return !_0x15d952 ||
      (_0x15d952.row === _0x4a23c2.row && _0x15d952.column === _0x4a23c2.column)
      ? false
      : ((_0x28fd87 = _0x26d167.stopTextSelectionDrag) == null ||
          _0x28fd87.call(_0x26d167),
        this._openCellEditor(
          _0x391b17,
          {
            table: _0x558719,
            model: _0x15d952.model,
            cell: _0x15d952.cell,
            row: _0x15d952.row,
            column: _0x15d952.column,
            object: _0x1bd499,
          },
          { handoffCurrent: true },
        ),
        true);
  }
  _handleCellEditorKeyDown(_0x38b56a, _0x2ed4de, _0x50a370) {
    var _0x52183b;
    if (!_0x2ed4de || !this._isCurrentEditorSession(_0x2ed4de, _0x50a370))
      return false;
    let _0x124c64 = Wi(_0x38b56a);
    if (!_0x124c64) return false;
    let _0x27cee9 = this._tableResourceService["getTable"](
        _0x2ed4de.unitId,
        _0x2ed4de.tableId,
      ),
      _0x47d696 = this._resolveSelectedTableDrawing(
        _0x2ed4de.unitId,
        _0x2ed4de.subUnitId,
        _0x2ed4de.elementId,
      );
    if (
      !_0x27cee9 ||
      !_0x47d696 ||
      _0x47d696.element["type"] !== t.PageElementTypeEnum["Table"]
    )
      return false;
    let _0x4120ad = kt(
      { row: _0x2ed4de.row, column: _0x2ed4de.column },
      {
        rowDelta: _0x124c64.rowDelta,
        columnDelta: _0x124c64.columnDelta,
        wrap: _0x124c64.wrap,
      },
      _0x27cee9.rows["length"],
      _0x27cee9.columns["length"],
    );
    if (
      _0x4120ad.row === _0x2ed4de.row &&
      _0x4120ad.column === _0x2ed4de.column
    )
      return false;
    let _0x223940 = (0, r.buildDrawingOKey)(
        _0x2ed4de.unitId,
        _0x2ed4de.subUnitId,
        _0x2ed4de.elementId,
      ),
      _0x155129 = this._renderContext["scene"].getObject(_0x223940);
    if (!_0x155129) return false;
    let _0x5d9b8d = (0, n.resolveSlideTableRenderModel)(_0x27cee9),
      _0x5d438f =
        _0x5d9b8d.cells["find"](
          (_0x8465a8) =>
            _0x8465a8.row === _0x4120ad.row &&
            _0x8465a8.column === _0x4120ad.column &&
            !_0x8465a8.hidden,
        ) ??
        _0x5d9b8d.cells["find"](
          (_0x5ddcad) =>
            !_0x5ddcad.hidden &&
            _0x4120ad.row >= _0x5ddcad.row &&
            _0x4120ad.row < _0x5ddcad.row + _0x5ddcad.rowSpan &&
            _0x4120ad.column >= _0x5ddcad.column &&
            _0x4120ad.column < _0x5ddcad.column + _0x5ddcad.columnSpan,
        );
    if (!_0x5d438f) return false;
    let _0x69144a = this._editorUIService["getSession"]();
    if (!_0x69144a) return false;
    (_0x38b56a.preventDefault(),
      _0x38b56a.stopPropagation(),
      this._editorUIService["complete"](
        _0x69144a.documentData,
        _0x69144a.measurement,
        _0x69144a.sessionId,
      ));
    let _0x2934e3 = this._tableSelectionService["selectCell"]({
      unitId: _0x47d696.unitId,
      subUnitId: _0x47d696.subUnitId,
      elementId: _0x47d696.drawingId,
      tableId: _0x47d696.element["tableId"],
      row: _0x5d438f.row,
      column: _0x5d438f.column,
    });
    return (
      (_0x52183b = _0x155129.setTableSelection) == null ||
        _0x52183b.call(_0x155129, {
          kind: Y(_0x2934e3.kind),
          ranges: _0x2934e3.ranges,
          active: { row: _0x5d438f.row, column: _0x5d438f.column },
        }),
      this._enterCellStage(),
      this._setTableKeyboardFocus(true),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveCellHit(_0x1b8e61, _0x2e2306, _0x463112, _0x579e72) {
    if (
      _0x1b8e61.element["type"] !== t.PageElementTypeEnum["Table"] ||
      _0x1b8e61.groupId
    )
      return null;
    let _0x3cb268 = this._tableResourceService["getTable"](
      _0x1b8e61.unitId,
      _0x1b8e61.element["tableId"],
    );
    if (!_0x3cb268) return null;
    let _0x531266 = this._renderContext["scene"].getObject(_0x2e2306);
    if (!_0x531266 || _0x531266.isInGroup) return null;
    let _0x365ddd = (0, n.resolveSlideTableRenderModel)(_0x3cb268),
      _0x3dff95 = this._resolveTablePoint(
        _0x531266,
        _0x365ddd,
        _0x463112,
        _0x579e72,
      ),
      _0x677f6e = Pi(_0x365ddd, _0x3dff95.x, _0x3dff95.y);
    if (!_0x677f6e) return null;
    let _0x3e3121 = _0x365ddd.cells["find"](
      (_0x32edbd) =>
        _0x32edbd.row === _0x677f6e.row &&
        _0x32edbd.column === _0x677f6e.column &&
        !_0x32edbd.hidden,
    );
    return _0x3e3121
      ? {
          table: _0x3cb268,
          model: _0x365ddd,
          cell: _0x3e3121,
          row: _0x677f6e.row,
          column: _0x677f6e.column,
          object: _0x531266,
        }
      : null;
  }
  _resolveTablePoint(_0x543719, _0x994791, _0x410db2, _0x34e84e) {
    let _0x5d995a = _0x543719.getInverseCoord(
        new a["Vector2"](_0x410db2, _0x34e84e),
      ),
      _0x17ade6 = _0x5d995a.x + _0x543719.width / 2,
      _0x54e0be = _0x5d995a.y + _0x543719.height / 2,
      _0x238e0c = J(_0x994791.width / _0x543719.width, 1),
      _0x5234ae = J(_0x994791.height / _0x543719.height, 1);
    return { x: _0x17ade6 * _0x238e0c, y: _0x54e0be * _0x5234ae };
  }
  _resolveEditorLayout(_0x8f1f8b, _0x2399ea, _0x142311, _0x31e0b4) {
    var _0x45d68f, _0x22c33e;
    if (!this._renderContext["engine"].getCanvasElement()) return null;
    let _0x1f6643 = this._renderContext["scene"].getAncestorScale(),
      _0x3006e5 = J(_0x1f6643.scaleX, 1),
      _0x2c141c = J(_0x1f6643.scaleY, 1),
      _0x5d6582 = oi({
        rect:
          ((_0x45d68f = _0x8f1f8b.getCellTextRect) == null
            ? undefined
            : _0x45d68f.call(
                _0x8f1f8b,
                _0x142311.row,
                _0x142311.column,
                _0x8f1f8b.width,
                _0x8f1f8b.height,
              )) ??
          (0, n.resolveSlideTableCellRect)({
            cell: _0x142311,
            tableWidth: _0x2399ea.width,
            tableHeight: _0x2399ea.height,
            targetWidth: _0x8f1f8b.width,
            targetHeight: _0x8f1f8b.height,
            includeMargins: true,
          }),
        tableTransform: {
          left: _0x8f1f8b.left,
          top: _0x8f1f8b.top,
          width: _0x8f1f8b.width,
          height: _0x8f1f8b.height,
          angle: _0x8f1f8b.angle,
          flipX: _0x8f1f8b.flipX,
          flipY: _0x8f1f8b.flipY,
        },
        scale: { scaleX: _0x3006e5, scaleY: _0x2c141c },
        scenePointToViewportPoint: (_0x2665e5) =>
          this._resolveScenePointToEditorPoint(_0x2665e5),
      }),
      _0x2f4d82 = _0x142311.style["textDirection"],
      _0x1c2b50 =
        (_0x22c33e = _0x31e0b4.documentStyle) == null
          ? undefined
          : _0x22c33e.renderConfig;
    return {
      ..._0x5d6582,
      horizontalAlign:
        _0x1c2b50 == null ? undefined : _0x1c2b50.horizontalAlign,
      isHorizontal: _0x2f4d82 !== "vertical" && _0x2f4d82 !== "vertical270",
      verticalAlign:
        ta(_0x142311.style["verticalAlign"]) ??
        (_0x1c2b50 == null ? undefined : _0x1c2b50.verticalAlign),
    };
  }
  _resolveScenePointToEditorPoint(_0xbf92e8) {
    var _0x1ed708, _0x409448, _0x451dd2;
    let _0x2522c0 = this._renderContext["scene"],
      _0x5006be =
        (_0x1ed708 = _0x2522c0.getViewports) == null
          ? undefined
          : _0x1ed708.call(_0x2522c0)[0],
      _0x4e0862 =
        _0x5006be == null || (_0x409448 = _0x5006be.getAbsoluteVector) == null
          ? undefined
          : _0x409448.call(_0x5006be, new a.Vector2(_0xbf92e8.x, _0xbf92e8.y));
    if (_0x4e0862) return { x: _0x4e0862.x, y: _0x4e0862.y };
    let _0x530fa3 = this._renderContext["engine"].getCanvasElement(),
      _0x34dc04 = (_0x530fa3 == null ||
      (_0x451dd2 = _0x530fa3.getBoundingClientRect) == null
        ? undefined
        : _0x451dd2.call(_0x530fa3)) ?? { left: 0, top: 0 },
      _0x23d3c0 = _0x2522c0.getAncestorScale(),
      _0x1bdf5 = J(_0x23d3c0.scaleX, 1),
      _0x5e9fb3 = J(_0x23d3c0.scaleY, 1);
    return {
      x: _0x34dc04.left + _0xbf92e8.x * _0x1bdf5,
      y: _0x34dc04.top + _0xbf92e8.y * _0x5e9fb3,
    };
  }
  _resolveCellDocumentData(_0x5be348, _0x36ec6c, _0x141f27) {
    var _0x374afb;
    let _0x56fd60 = Ri + "_" + _0x5be348.id + "_" + _0x36ec6c + "_" + _0x141f27;
    return ci(
      ((_0x374afb = _0x5be348.rows[_0x36ec6c]) == null ||
      (_0x374afb = _0x374afb.cells[_0x141f27]) == null
        ? undefined
        : _0x374afb.textData) || {
        id: _0x56fd60,
        body: { dataStream: "\x0d\x0a" },
        documentStyle: {},
      },
      _0x56fd60,
    );
  }
  _commitCellDocument(_0x33c074, _0x2a8b56, _0x206148, _0x218828) {
    var _0x244951;
    if (!_0x2a8b56) return;
    let _0x502c25 = this._tableResourceService["getTable"](
      _0x2a8b56.unitId,
      _0x2a8b56.tableId,
    );
    if (!_0x502c25) {
      this._isCurrentEditorSession(_0x2a8b56, _0x218828) &&
        this._tableSelectionService["clear"]();
      return;
    }
    let _0x22ed65 =
        Ri + "_" + _0x502c25.id + "_" + _0x2a8b56.row + "_" + _0x2a8b56.column,
      _0x593dd6 = ci((0, r.stripEditorUIDocumentData)(_0x33c074), _0x22ed65),
      _0x236fab = na(
        (_0x244951 = _0x593dd6.documentStyle) == null ||
          (_0x244951 = _0x244951.renderConfig) == null
          ? undefined
          : _0x244951.verticalAlign,
      ),
      _0x8c26c1 = (0, n.buildSlideTableCellTextDataPatch)(
        _0x502c25,
        _0x2a8b56.row,
        _0x2a8b56.column,
        _0x593dd6,
        { verticalAlign: _0x236fab },
      );
    if (!_0x8c26c1) {
      this._isCurrentEditorSession(_0x2a8b56, _0x218828) &&
        this._tableSelectionService["clear"]();
      return;
    }
    let _0x33bb91 = _0x8c26c1.rows,
      _0x2e8556 = this._applyAutoGrowRowHeight(
        _0x502c25,
        _0x33bb91,
        _0x2a8b56,
        _0x206148,
      );
    (this._commandService["executeCommand"](n.UpdateSlideTableCommand["id"], {
      unitId: _0x2a8b56.unitId,
      tableId: _0x2a8b56.tableId,
      patch: { rows: _0x33bb91 },
    }),
      _0x2e8556 > 0 && this._growTableDrawingHeight(_0x2a8b56, _0x2e8556),
      this._finishCellEditing(_0x2a8b56, _0x218828));
  }
  _autoGrowCellEditorRowHeight(_0x19d03c, _0x5c8fff, _0x3443bb) {
    var _0x837a82;
    if (!_0x19d03c || !this._isCurrentEditorSession(_0x19d03c, _0x3443bb))
      return;
    let _0x1fde1d = this._tableResourceService["getTable"](
      _0x19d03c.unitId,
      _0x19d03c.tableId,
    );
    if (!_0x1fde1d) return;
    let _0x209306 = i.Tools["deepClone"](_0x1fde1d.rows),
      _0x793946 = this._applyAutoGrowRowHeight(
        _0x1fde1d,
        _0x209306,
        _0x19d03c,
        _0x5c8fff,
      );
    if (_0x793946 <= 0) return;
    this._commandService["executeCommand"](n.UpdateSlideTableCommand["id"], {
      unitId: _0x19d03c.unitId,
      tableId: _0x19d03c.tableId,
      patch: { rows: _0x209306 },
    });
    let _0x241836 = this._renderContext["scene"].getObject(
      (0, r.buildDrawingOKey)(
        _0x19d03c.unitId,
        _0x19d03c.subUnitId,
        _0x19d03c.elementId,
      ),
    );
    (_0x241836 == null ||
      (_0x837a82 = _0x241836.setPreviewTable) == null ||
      _0x837a82.call(_0x241836, { ..._0x1fde1d, rows: _0x209306 }),
      this._growTableDrawingHeight(_0x19d03c, _0x793946),
      this._makeSceneDirty());
  }
  _handleCellEditorPointerMove(_0x38decb, _0x242287, _0x3de3b4) {}
  _handoffCellEditorToRangeSelection(
    _0x23a10f,
    _0x246b21,
    _0x3e68f9,
    _0x568407,
    _0x400813,
    _0x53d88d,
    _0x217c33,
    _0x4801de,
  ) {
    var _0x1121a0;
    let _0x5e04d3 = this._editorUIService["getSession"]();
    !_0x5e04d3 ||
      !this._isCurrentEditorSession(_0x5e04d3.context, _0x3e68f9) ||
      ((_0x1121a0 = _0x23a10f.stopTextSelectionDrag) == null ||
        _0x1121a0.call(_0x23a10f),
      this._editorUIService["complete"](
        _0x5e04d3.documentData,
        _0x5e04d3.measurement,
      ),
      (this._rangeDragContext = {
        drawing: _0x568407,
        objectKey: _0x400813,
        object: _0x53d88d,
        table: _0x217c33,
        anchor: { row: _0x246b21.row, column: _0x246b21.column },
        current: { row: _0x246b21.row, column: _0x246b21.column },
      }),
      this._bindRangeDragWindowEvents(),
      this._applyRangeDragSelection(this._rangeDragContext, {
        row: _0x4801de.row,
        column: _0x4801de.column,
      }));
  }
  _bindRangeDragWindowEvents() {
    if (this._rangeDragWindowCleanup || typeof window > "u") return;
    let _0x589d1d = (_0x2f38c0) => {
        this._updateRangeDrag({
          buttons: _0x2f38c0.buttons,
          clientX: _0x2f38c0.clientX,
          clientY: _0x2f38c0.clientY,
        });
      },
      _0x468fba = () => {
        this._finishRangeDrag();
      };
    (window.addEventListener("pointermove", _0x589d1d),
      window.addEventListener("pointerup", _0x468fba),
      (this._rangeDragWindowCleanup = () => {
        (window.removeEventListener("pointermove", _0x589d1d),
          window.removeEventListener("pointerup", _0x468fba),
          (this._rangeDragWindowCleanup = null));
      }));
  }
  _finishRangeDrag() {
    let _0x5e722b = this._rangeDragWindowCleanup;
    (_0x5e722b && _0x5e722b(), (this._rangeDragContext = null));
  }
  _handleCellEditorPointerUp(_0x29fe8d, _0x42abe6) {
    var _0x14aa81;
    _0x29fe8d &&
      ((_0x14aa81 = this._rangeDragContext) == null
        ? undefined
        : _0x14aa81.drawing["unitId"]) === _0x29fe8d.unitId &&
      this._rangeDragContext["drawing"].drawingId === _0x29fe8d.elementId &&
      this._finishRangeDrag();
  }
  _applyAutoGrowRowHeight(_0x557c17, _0xccab0, _0x349806, _0x36e6d3) {
    if (!_0x36e6d3) return 0;
    let _0x496347 = this._renderContext["scene"].getObject(
      (0, r.buildDrawingOKey)(
        _0x349806.unitId,
        _0x349806.subUnitId,
        _0x349806.elementId,
      ),
    );
    if (!_0x496347) return 0;
    let _0x403c8f = (0, n.resolveSlideTableRenderModel)(_0x557c17),
      _0x2ae94d = _0x403c8f.cells["find"](
        (_0x148060) =>
          _0x148060.row === _0x349806.row &&
          _0x148060.column === _0x349806.column &&
          !_0x148060.hidden,
      );
    if (!_0x2ae94d) return 0;
    let _0x4ce6da = J(_0x496347.height, _0x403c8f.height),
      _0x5edb7d = Xi(_0x2ae94d, _0x403c8f, _0x4ce6da),
      _0x15c804 = J(_0x36e6d3.contentHeight, _0x5edb7d),
      _0x455ee4 = Math.ceil(_0x15c804 - _0x5edb7d);
    if (_0x455ee4 <= 0) return 0;
    let _0x47dd6a = _0x455ee4 * (J(_0x403c8f.height, _0x4ce6da) / _0x4ce6da),
      _0x30d86c =
        _0xccab0[
          Math.min(
            _0xccab0.length - 1,
            _0x2ae94d.row + Math.max(1, _0x2ae94d.rowSpan) - 1,
          )
        ];
    return _0x30d86c
      ? ((_0x30d86c.height = J(_0x30d86c.height, 24) + _0x47dd6a), _0x455ee4)
      : 0;
  }
  _growTableDrawingHeight(_0x22e552, _0x1b1ddc) {
    let _0x4ac4b1 = _0x22e552.drawingTransform;
    if (!_0x4ac4b1) return;
    let _0x414e87 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x22e552.unitId,
          _0x22e552.subUnitId,
          _0x22e552.elementId,
        ),
      ),
      _0x12c207 = Math.max(
        J(_0x4ac4b1.height, 0),
        J(_0x414e87 == null ? undefined : _0x414e87.height, 0),
      ),
      _0x23e0fc = { ..._0x4ac4b1, height: _0x12c207 + _0x1b1ddc };
    ((_0x22e552.drawingTransform = _0x23e0fc),
      this._commandService["executeCommand"](
        t.UpdateSlideDrawingCommand["id"],
        {
          patches: [
            {
              unitId: _0x22e552.unitId,
              subUnitId: _0x22e552.subUnitId,
              drawingId: _0x22e552.elementId,
              transform: _0x23e0fc,
            },
          ],
        },
      ));
  }
  _commitCellStyle(_0x1ee401, _0x2f2ddb) {
    if (!_0x1ee401) return;
    let _0x367c8d = this._tableResourceService["getTable"](
      _0x1ee401.unitId,
      _0x1ee401.tableId,
    );
    if (!_0x367c8d) {
      this._tableSelectionService["clear"]();
      return;
    }
    let _0x4ef338 = i.Tools["deepClone"](_0x367c8d.rows),
      _0x98446 = _0x4ef338[_0x1ee401.row],
      _0xb94729 =
        _0x98446 == null ? undefined : _0x98446.cells[_0x1ee401.column];
    !_0x98446 ||
      !_0xb94729 ||
      ((_0x98446.cells[_0x1ee401.column] = {
        ..._0xb94729,
        style: ra(_0xb94729.style, _0x2f2ddb),
      }),
      this._commandService["executeCommand"](n.UpdateSlideTableCommand["id"], {
        unitId: _0x1ee401.unitId,
        tableId: _0x1ee401.tableId,
        patch: { rows: _0x4ef338 },
      }));
  }
  _finishCellEditing(_0x1f9cbc, _0x3a4c30) {
    var _0x25ed6a, _0x59a824, _0x307193, _0x4c6284;
    if (
      !this._isCurrentEditorSession(_0x1f9cbc, _0x3a4c30) ||
      (this._tableSelectionService["clear"](),
      (this._editorDisposable = null),
      (this._activeEditorContextKey = null),
      this._setTableKeyboardFocus(false),
      !_0x1f9cbc)
    )
      return;
    this._univerInstanceService["focusUnit"](_0x1f9cbc.unitId);
    let _0x4af4d7 = this._renderContext["scene"].getObject(
      (0, r.buildDrawingOKey)(
        _0x1f9cbc.unitId,
        _0x1f9cbc.subUnitId,
        _0x1f9cbc.elementId,
      ),
    );
    (_0x4af4d7 == null ||
      (_0x25ed6a = _0x4af4d7.setEditingCell) == null ||
      _0x25ed6a.call(_0x4af4d7, null),
      _0x4af4d7 == null ||
        (_0x59a824 = _0x4af4d7.setTableSelection) == null ||
        _0x59a824.call(_0x4af4d7, null),
      _0x4af4d7 == null ||
        (_0x307193 = _0x4af4d7.setTableControlHover) == null ||
        _0x307193.call(_0x4af4d7, null),
      _0x4af4d7 == null ||
        (_0x4c6284 = _0x4af4d7.setPreviewTable) == null ||
        _0x4c6284.call(_0x4af4d7, null),
      this._restoreTableDrawingSelection(_0x1f9cbc),
      this._makeSceneDirty());
  }
  _isCurrentEditorSession(_0x41c00b, _0x1272de) {
    return _0x41c00b
      ? _0x1272de !== undefined && _0x1272de !== this._editorSessionId
        ? false
        : this._activeEditorContextKey === ea(_0x41c00b)
      : _0x1272de === undefined || _0x1272de === this._editorSessionId;
  }
  _restoreTableDrawingSelection(_0x15361e) {
    var _0x3dd8dd;
    this._drawingStateService["selectDrawings"](
      { unitId: _0x15361e.unitId, subUnitId: _0x15361e.subUnitId },
      [_0x15361e.elementId],
      _0x15361e.elementId,
    );
    let _0x46996e = this._renderContext["scene"].getTransformer(),
      _0x518405 = this._renderContext["scene"].getObject(
        (0, r.buildDrawingOKey)(
          _0x15361e.unitId,
          _0x15361e.subUnitId,
          _0x15361e.elementId,
        ),
      );
    !_0x46996e ||
      !_0x518405 ||
      _0x518405.isInGroup ||
      (_0x3dd8dd = _0x46996e.setSelectedControl) == null ||
      _0x3dd8dd.call(_0x46996e, _0x518405);
  }
  _makeSceneDirty() {
    var _0x5000cb, _0x3c8a74;
    (_0x5000cb = (_0x3c8a74 = this._renderContext["scene"]).makeDirty) ==
      null || _0x5000cb.call(_0x3c8a74, true);
  }
};
Ui = V(
  [
    B(1, (0, i.Inject)(r.SlideHitTestService)),
    B(2, (0, i.Inject)(n.SlideTableResourceService)),
    B(3, (0, i.Inject)(E)),
    B(4, r.IEditorUIService),
    B(5, (0, i.Inject)(r.ISlideDrawingStateService)),
    B(6, o.IContextMenuService),
    B(7, i.ICommandService),
    B(8, (0, i.Inject)(Tt)),
    B(9, i.IContextService),
    B(10, i.IUniverInstanceService),
    B(11, (0, i.Inject)(t.ISlideDrawingService)),
    B(12, r.ISlideTransformerVisibilityService),
    B(13, i.IPermissionService),
    B(14, r.ISlideAlignmentGuideService),
    B(15, (0, i.Inject)(r.SlideInsertService)),
  ],
  Ui,
);
function Wi(_0x5e2875) {
  if (_0x5e2875.altKey || _0x5e2875.ctrlKey || _0x5e2875.metaKey) return null;
  switch (_0x5e2875.key) {
    case "Tab":
      return {
        rowDelta: 0,
        columnDelta: _0x5e2875.shiftKey ? -1 : 1,
        wrap: true,
      };
    default:
      return null;
  }
}
function Gi(_0x12dd76) {
  let _0x56520f = { preventDefault: () => {}, stopPropagation: () => {} };
  switch (_0x12dd76) {
    case "move-left":
    case "extend-left":
      return { ..._0x56520f, key: "ArrowLeft" };
    case "move-right":
    case "extend-right":
      return { ..._0x56520f, key: "ArrowRight" };
    case "move-up":
    case "extend-up":
      return { ..._0x56520f, key: "ArrowUp" };
    case "move-down":
    case "extend-down":
      return { ..._0x56520f, key: "ArrowDown" };
    case "tab-forward":
      return { ..._0x56520f, key: "Tab" };
    case "tab-backward":
      return { ..._0x56520f, key: "Tab", shiftKey: true };
    case "edit-cell":
      return { ..._0x56520f, key: "Enter" };
    default:
      return null;
  }
}
function Ki(_0x7f4828, _0xa654b) {
  let _0x3e9e01 = _0x7f4828.element["transform"],
    _0x4e2601 = _0x7f4828.transform;
  return {
    left:
      _0x3e9e01.left ?? (_0x4e2601 == null ? undefined : _0x4e2601.left) ?? 0,
    top: _0x3e9e01.top ?? (_0x4e2601 == null ? undefined : _0x4e2601.top) ?? 0,
    width:
      _0x3e9e01.width ??
      (_0x4e2601 == null ? undefined : _0x4e2601.width) ??
      (_0xa654b == null ? undefined : _0xa654b.width),
    height:
      _0x3e9e01.height ??
      (_0x4e2601 == null ? undefined : _0x4e2601.height) ??
      (_0xa654b == null ? undefined : _0xa654b.height),
    angle:
      _0x3e9e01.rotation ??
      (_0x4e2601 == null ? undefined : _0x4e2601.angle) ??
      0,
    flipX: _0x3e9e01.flipX ?? (_0x4e2601 == null ? undefined : _0x4e2601.flipX),
    flipY: _0x3e9e01.flipY ?? (_0x4e2601 == null ? undefined : _0x4e2601.flipY),
  };
}
function qi(_0xc071b9, _0x282626 = 0) {
  return typeof _0xc071b9 == "number" && Number.isFinite(_0xc071b9)
    ? _0xc071b9
    : _0x282626;
}
function J(_0x7a23b3, _0x4fa158) {
  let _0x203ca1 = qi(_0x7a23b3, _0x4fa158);
  return _0x203ca1 > 0 ? _0x203ca1 : _0x4fa158;
}
function Y(_0x43ba76) {
  return _0x43ba76 === "none" ? undefined : _0x43ba76;
}
function Ji(_0xa43164) {
  let _0x52afd6 = _0xa43164[0];
  if (_0x52afd6)
    return {
      row: Math.min(_0x52afd6.startRow, _0x52afd6.endRow),
      column: Math.min(_0x52afd6.startColumn, _0x52afd6.endColumn),
    };
}
function X(_0x329c4d, _0x482c7e) {
  let _0xcd1895 = J(_0x482c7e, 1),
    _0x159585 = _0x329c4d.map((_0x4486c0) => J(_0x4486c0, 1)),
    _0x14b407 = _0x159585.reduce(
      (_0x536747, _0x59436e) => _0x536747 + _0x59436e,
      0,
    );
  return _0x159585.map((_0x31a714) => (_0x31a714 / _0x14b407) * _0xcd1895);
}
function Yi(_0xa9041b, _0x100000) {
  let _0x1ecfda = 0,
    _0x20660c = { index: 0, distance: Math.abs(_0x100000) };
  for (let _0x5d767c = 0; _0x5d767c < _0xa9041b.length; _0x5d767c += 1) {
    _0x1ecfda += _0xa9041b[_0x5d767c];
    let _0x15cc74 = Math.abs(_0x100000 - _0x1ecfda);
    _0x15cc74 < _0x20660c.distance &&
      (_0x20660c = { index: _0x5d767c + 1, distance: _0x15cc74 });
  }
  return _0x20660c.index;
}
function Xi(_0x316d14, _0x535b6d, _0x56c33d) {
  let _0x5034f6 = J(_0x56c33d / _0x535b6d.height, 1),
    _0x57a5ba = (0, n.resolveSlideTableCellTextMargins)(
      _0x316d14.style["margins"],
    ),
    _0x388b68 = _0x57a5ba.top,
    _0x1c4fb4 = _0x57a5ba.bottom;
  return Math.max(
    1,
    _0x316d14.bounds["height"] * _0x5034f6 - _0x388b68 - _0x1c4fb4,
  );
}
function Zi(_0x25a119, _0x5f1c9b, _0x3d5125) {
  let _0x49823f = 0,
    _0x4d2f3c = null;
  for (let _0x2de5fd = 0; _0x2de5fd < _0x25a119.length - 1; _0x2de5fd += 1) {
    _0x49823f += _0x25a119[_0x2de5fd];
    let _0x2dc9db = Math.abs(_0x5f1c9b - _0x49823f);
    _0x2dc9db > _0x3d5125 ||
      ((!_0x4d2f3c || _0x2dc9db < _0x4d2f3c.distance) &&
        (_0x4d2f3c = { boundaryIndex: _0x2de5fd + 1, distance: _0x2dc9db }));
  }
  return _0x4d2f3c;
}
function Qi(_0x31fde7, _0x38237e, _0x355988, _0x525f7f) {
  let _0x4cde45 = _0x38237e - 1,
    _0x16b64e = _0x38237e;
  if (_0x4cde45 < 0 || _0x16b64e >= _0x31fde7.length) return _0x31fde7;
  let _0x3c1a1c = _0x31fde7[_0x4cde45],
    _0x26c815 = _0x31fde7[_0x16b64e],
    _0xc69e3c = _0x525f7f - _0x3c1a1c,
    _0x34a22b = _0x26c815 - _0x525f7f,
    _0x2c7be3 = Math.min(Math.max(_0x355988, _0xc69e3c), _0x34a22b),
    _0xdb53ab = _0x31fde7.slice();
  return (
    (_0xdb53ab[_0x4cde45] = _0x3c1a1c + _0x2c7be3),
    (_0xdb53ab[_0x16b64e] = _0x26c815 - _0x2c7be3),
    _0xdb53ab
  );
}
function $i(_0xdc9ba5, _0x28b2f3, _0x1b4d19) {
  return _0x1b4d19 === "column"
    ? _0xdc9ba5.columns["some"]((_0x25f4f3, _0x2ede50) => {
        var _0x3cfff5;
        return (
          _0x25f4f3.width !==
          ((_0x3cfff5 = _0x28b2f3.columns[_0x2ede50]) == null
            ? undefined
            : _0x3cfff5.width)
        );
      })
    : _0xdc9ba5.rows["some"]((_0x34d55f, _0x3b1387) => {
        var _0x50a4e8;
        return (
          (_0x34d55f.height ?? 24) !==
          (((_0x50a4e8 = _0x28b2f3.rows[_0x3b1387]) == null
            ? undefined
            : _0x50a4e8.height) ?? 24)
        );
      });
}
function ea(_0x55d711) {
  return (
    _0x55d711.unitId +
    ":" +
    _0x55d711.subUnitId +
    ":" +
    _0x55d711.elementId +
    ":" +
    _0x55d711.tableId +
    ":" +
    _0x55d711.row +
    ":" +
    _0x55d711.column
  );
}
function ta(_0x4e4fed) {
  if (_0x4e4fed === "middle") return i.VerticalAlign["MIDDLE"];
  if (_0x4e4fed === "bottom") return i.VerticalAlign["BOTTOM"];
  if (_0x4e4fed === "top") return i.VerticalAlign["TOP"];
}
function na(_0x1bb2f0) {
  if (_0x1bb2f0 === i.VerticalAlign["MIDDLE"])
    return n.SlideTableVerticalAlignEnum["Middle"];
  if (_0x1bb2f0 === i.VerticalAlign["BOTTOM"])
    return n.SlideTableVerticalAlignEnum["Bottom"];
  if (_0x1bb2f0 === i.VerticalAlign["TOP"])
    return n.SlideTableVerticalAlignEnum["Top"];
}
function ra(_0x5e395e, _0xfc6ea1) {
  return {
    ..._0x5e395e,
    ..._0xfc6ea1,
    ...(_0xfc6ea1.fill
      ? {
          fill: {
            ...(_0x5e395e == null ? undefined : _0x5e395e.fill),
            ..._0xfc6ea1.fill,
          },
        }
      : {}),
    ...(_0xfc6ea1.borders
      ? {
          borders: {
            ...(_0x5e395e == null ? undefined : _0x5e395e.borders),
            ..._0xfc6ea1.borders,
          },
        }
      : {}),
    ...(_0xfc6ea1.margins
      ? {
          margins: {
            ...(_0x5e395e == null ? undefined : _0x5e395e.margins),
            ..._0xfc6ea1.margins,
          },
        }
      : {}),
  };
}
function ia(_0x1b29df) {
  if ((_0x1b29df == null ? undefined : _0x1b29df.type) === "none")
    return "transparent";
  let _0xac1b41 = _0x1b29df == null ? undefined : _0x1b29df.color;
  if (!_0xac1b41) return;
  let _0x2e1edc = ca(_0xac1b41);
  if (_0x2e1edc) {
    let _0x102f85 = fa(_0x2e1edc.a) ?? 1;
    return (
      "rgba(" +
      _0x2e1edc.r +
      ",\x20" +
      _0x2e1edc.g +
      ",\x20" +
      _0x2e1edc.b +
      ",\x20" +
      ma(_0x102f85) +
      ")"
    );
  }
  let _0x9f382 = la(_0xac1b41);
  if (!_0x9f382) return _0xac1b41;
  let _0x4ca997 = fa(_0x1b29df.alpha) ?? 1;
  return (
    "rgba(" +
    _0x9f382.r +
    ",\x20" +
    _0x9f382.g +
    ",\x20" +
    _0x9f382.b +
    ",\x20" +
    ma(_0x4ca997) +
    ")"
  );
}
function aa(_0x49da02) {
  let _0x41c4f4 = ca(_0x49da02);
  if (_0x41c4f4)
    return {
      color: ua(_0x41c4f4.r, _0x41c4f4.g, _0x41c4f4.b),
      alpha: fa(_0x41c4f4.a) ?? 1,
    };
  let _0x31e087 = la(_0x49da02);
  return _0x31e087
    ? { color: ua(_0x31e087.r, _0x31e087.g, _0x31e087.b) }
    : { color: _0x49da02 };
}
function oa(_0x15b990, _0x1bf2ed) {
  return ia(_0x1bf2ed.style["fill"]) ?? sa(_0x15b990, _0x1bf2ed.row);
}
function sa(_0x519472, _0x1bb71f) {
  return _0x519472.options["firstRow"] && _0x1bb71f === 0
    ? "#E8F1FF"
    : _0x519472.options["bandRow"] && _0x1bb71f % 2 == 0
      ? "#F7FAFF"
      : "#FFFFFF";
}
function Z(_0x3d937d) {
  return typeof _0x3d937d == "number" && Number.isFinite(_0x3d937d);
}
function ca(_0x3d9352) {
  let _0x31ee6c =
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d+(?:\.\d+)?|\.\d+))?\s*\)$/i.exec(
      _0x3d9352.trim(),
    );
  if (_0x31ee6c)
    return {
      r: da(Number.parseInt(_0x31ee6c[1], 10)),
      g: da(Number.parseInt(_0x31ee6c[2], 10)),
      b: da(Number.parseInt(_0x31ee6c[3], 10)),
      a: _0x31ee6c[4] === undefined ? 1 : Number.parseFloat(_0x31ee6c[4]),
    };
}
function la(_0x442a52) {
  let _0x38a2bf = _0x442a52.trim(),
    _0x42b499 = /^#([0-9a-f]{3})$/i.exec(_0x38a2bf);
  if (_0x42b499) {
    let [_0x5012f1, _0x321cd8, _0x50dac3] = _0x42b499[1]
      .split("")
      .map((_0x41b46a) => Number.parseInt("" + _0x41b46a + _0x41b46a, 16));
    return { r: _0x5012f1, g: _0x321cd8, b: _0x50dac3 };
  }
  let _0x4155d7 = /^#([0-9a-f]{6})$/i.exec(_0x38a2bf);
  if (_0x4155d7)
    return {
      r: Number.parseInt(_0x4155d7[1].slice(0, 2), 16),
      g: Number.parseInt(_0x4155d7[1].slice(2, 4), 16),
      b: Number.parseInt(_0x4155d7[1].slice(4, 6), 16),
    };
}
function ua(_0x524594, _0x317993, _0x4a069e) {
  return (
    "#" +
    [_0x524594, _0x317993, _0x4a069e]
      .map((_0x10e37b) => da(_0x10e37b).toString(16).padStart(2, "0"))
      .join("")
  ).toUpperCase();
}
function da(_0x5cc7e8) {
  return Number.isFinite(_0x5cc7e8)
    ? Math.min(255, Math.max(0, Math.round(_0x5cc7e8)))
    : 0;
}
function fa(_0x268e59) {
  if (!(typeof _0x268e59 != "number" || !Number.isFinite(_0x268e59)))
    return pa(
      _0x268e59 <= 1
        ? _0x268e59
        : _0x268e59 <= 100
          ? _0x268e59 / 100
          : _0x268e59 / 100000,
    );
}
function pa(_0x25caed) {
  return Math.min(1, Math.max(0, _0x25caed));
}
function ma(_0x11c87c) {
  return Number(_0x11c87c.toFixed(4)).toString();
}
function ha(_0xe38ee3) {
  return (
    new DOMParser()
      .parseFromString(_0xe38ee3, "text/html")
      .querySelector("img") !== null
  );
}
async function ga(_0x36a8f0, _0x273a05) {
  let _0x38f6da = (0, h.extractClipboardImageFiles)(_0x36a8f0);
  return _0x273a05
    ? ha(_0x273a05)
      ? _0x38f6da.length > 0
        ? _0x38f6da
        : (0, h.extractClipboardHtmlImageFiles)(_0x273a05)
      : []
    : _0x38f6da;
}
function _a(_0x11e143) {
  return _0x11e143.type === t.PageElementTypeEnum["Table"];
}
let va = class {
  constructor(_0x238402) {
    ((this._resourceService = _0x238402), T(this, "key", "slide-table"));
  }
  collect(_0x4f0097) {
    let _0x1b6335 = {},
      _0x3d3e42 = {},
      _0x142aa1 = {};
    return (
      _0x4f0097.elements["forEach"]((_0x3c6a7d) => {
        if (!_a(_0x3c6a7d)) return;
        let _0x4ecd2b = this._resourceService["getTable"](
          _0x4f0097.unitId,
          _0x3c6a7d.tableId,
        );
        if (
          _0x4ecd2b &&
          ((_0x1b6335[_0x4ecd2b.id] = i.Tools["deepClone"](_0x4ecd2b)),
          (_0x142aa1[_0x3c6a7d.id] = _0x4ecd2b.id),
          _0x4ecd2b.themeId)
        ) {
          let _0x1ada49 = this._resourceService["getTheme"](
            _0x4f0097.unitId,
            _0x4ecd2b.themeId,
          );
          _0x1ada49 &&
            (_0x3d3e42[_0x1ada49.id] = i.Tools["deepClone"](_0x1ada49));
        }
      }),
      Object.keys(_0x1b6335).length === 0
        ? null
        : {
            tables: _0x1b6335,
            themes: _0x3d3e42,
            tableIdByElementId: _0x142aa1,
          }
    );
  }
  serialize(_0x309f8c) {
    let _0xd0374e = _0x309f8c.elements["filter"](_a)
      .map((_0x19ca6f) =>
        this._resourceService["getTable"](_0x309f8c.unitId, _0x19ca6f.tableId),
      )
      .filter((_0x47054e) => _0x47054e !== undefined);
    return _0xd0374e.length > 0
      ? {
          html: _0xd0374e.map(Sa).join("<br>"),
          plainText: _0xd0374e.map(xa).join("\x0a"),
        }
      : null;
  }
  preparePaste(_0x47b60d) {
    if (!ya(_0x47b60d.payload)) return null;
    let _0x3b0731 = _0x47b60d.payload,
      _0x58530a = new Map();
    _0x47b60d.elementIdMap["forEach"]((_0x151ef6, _0x5127b0) =>
      _0x58530a.set(_0x151ef6, _0x5127b0),
    );
    let _0x45a860 = new Map(),
      _0x3298a3 = new Map(),
      _0x5b4bd3 = _0x47b60d.elements["map"]((_0x7fe536) => {
        if (!_a(_0x7fe536)) return _0x7fe536;
        let _0x448cf7 = _0x58530a.get(_0x7fe536.id),
          _0x523f26 = _0x448cf7
            ? _0x3b0731.tableIdByElementId[_0x448cf7]
            : undefined;
        if (!_0x523f26 || !_0x3b0731.tables[_0x523f26]) return _0x7fe536;
        let _0x314d8e = _0x45a860.get(_0x523f26);
        return (
          _0x314d8e ||
            ((_0x314d8e = (0, i.generateRandomId)(6)),
            _0x45a860.set(_0x523f26, _0x314d8e)),
          { ..._0x7fe536, tableId: _0x314d8e }
        );
      }),
      _0x2a4056 = [];
    return (
      _0x45a860.forEach((_0x55ffa3, _0xee19e) => {
        let _0x8f1db8 = _0x3b0731.tables[_0xee19e];
        if (!_0x8f1db8) return;
        let _0x45d98b = i.Tools["deepClone"](_0x8f1db8);
        _0x45d98b.id = _0x55ffa3;
        let _0x20ff2e;
        if (_0x8f1db8.themeId) {
          let _0x4620d6 = _0x3b0731.themes[_0x8f1db8.themeId];
          if (_0x4620d6) {
            let _0x31e8dc = _0x3298a3.get(_0x4620d6.id);
            (_0x31e8dc ||
              ((_0x31e8dc = (0, n.freezeSlideTableTheme)(
                (0, i.generateRandomId)(6),
                _0x4620d6,
              ).id),
              _0x3298a3.set(_0x4620d6.id, _0x31e8dc)),
              (_0x20ff2e = {
                ...i.Tools["deepClone"](_0x4620d6),
                id: _0x31e8dc,
              }),
              (_0x45d98b.themeId = _0x31e8dc));
          } else delete _0x45d98b.themeId;
        }
        _0x2a4056.push({ table: _0x45d98b, theme: _0x20ff2e });
      }),
      _0x2a4056.length === 0
        ? null
        : {
            elements: _0x5b4bd3,
            redoMutations: _0x2a4056.map(
              ({ table: _0x4f6981, theme: _0x30d672 }) => ({
                id: n.SetSlideTableMutation["id"],
                params: {
                  unitId: _0x47b60d.targetUnitId,
                  table: _0x4f6981,
                  theme: _0x30d672,
                },
              }),
            ),
            undoMutations: [..._0x2a4056]
              .reverse()
              .map(({ table: _0x10767a }) => ({
                id: n.RemoveSlideTableMutation["id"],
                params: {
                  unitId: _0x47b60d.targetUnitId,
                  tableId: _0x10767a.id,
                },
              })),
          }
    );
  }
};
va = V([B(0, (0, i.Inject)(n.SlideTableResourceService))], va);
function ya(_0x3169df) {
  return !_0x3169df || typeof _0x3169df != "object"
    ? false
    : "tables" in _0x3169df &&
        ba(_0x3169df.tables) &&
        "themes" in _0x3169df &&
        ba(_0x3169df.themes) &&
        "tableIdByElementId" in _0x3169df &&
        ba(_0x3169df.tableIdByElementId);
}
function ba(_0x217f55) {
  return (
    typeof _0x217f55 == "object" && !!_0x217f55 && !Array.isArray(_0x217f55)
  );
}
function xa(_0x547b2c) {
  return _0x547b2c.rows["map"]((_0x21803e) =>
    _0x21803e.cells["map"]((_0x13dfd4) =>
      _0x13dfd4.hMerge || _0x13dfd4.vMerge
        ? ""
        : _0x13dfd4.textData
          ? (0, t.slideDocumentDataToPlainText)(_0x13dfd4.textData).replace(
              /[\t\r\n]+/g,
              "\x20",
            )
          : "",
    ).join("\x09"),
  ).join("\x0a");
}
function Sa(_0x19ea5f) {
  return (
    "<table><colgroup>" +
    _0x19ea5f.columns["map"](
      (_0x37ed6e) => '<col style="width: ' + _0x37ed6e.width + 'px">',
    ).join("") +
    "</colgroup><tbody>" +
    _0x19ea5f.rows["map"]((_0x472706) => {
      let _0x2fdd87 = _0x472706.cells["map"]((_0x3d241d) => {
        if (_0x3d241d.hMerge || _0x3d241d.vMerge) return "";
        let _0x1cc133 = [
            _0x3d241d.rowSpan && _0x3d241d.rowSpan > 1
              ? "rowspan=\x22" + _0x3d241d.rowSpan + "\x22"
              : "",
            _0x3d241d.columnSpan && _0x3d241d.columnSpan > 1
              ? 'colspan="' + _0x3d241d.columnSpan + "\x22"
              : "",
            bi(_0x3d241d),
          ]
            .filter(Boolean)
            .join("\x20"),
          _0x1c1a5a = _0x3d241d.textData
            ? (0, d.convertBodyToHtml)(i.Tools["deepClone"](_0x3d241d.textData))
            : "";
        return (
          "<td" +
          (_0x1cc133 ? "\x20" + _0x1cc133 : "") +
          ">" +
          _0x1c1a5a +
          "</td>"
        );
      }).join("");
      return (
        "<tr" +
        (_0x472706.height
          ? ' style="height: ' + _0x472706.height + 'px"'
          : "") +
        ">" +
        _0x2fdd87 +
        "</tr>"
      );
    }).join("") +
    "</tbody></table>"
  );
}
function Ca(_0x3896a4, _0x45b8dc, _0x42ef03) {
  let _0x1e6986 = _0x45b8dc.flatMap((_0x47ee2f) =>
      _0x47ee2f ? [_0x47ee2f.subscribeEvent(_0x3896a4)] : [],
    ),
    _0x55f202 =
      _0x42ef03 && typeof ResizeObserver < "u"
        ? new ResizeObserver(_0x3896a4)
        : null;
  return (
    _0x42ef03 && (_0x55f202 == null || _0x55f202.observe(_0x42ef03)),
    () => {
      (_0x1e6986.forEach((_0x29e917) => _0x29e917.unsubscribe()),
        _0x55f202 == null || _0x55f202.disconnect());
    }
  );
}
function wa(_0x2a6d23) {
  let _0x2e51e1 = Ta(_0x2a6d23.object, _0x2a6d23.table, _0x2a6d23.selection),
    _0x1ba268 = _0x2a6d23.scale["scaleX"] * _0x2a6d23.canvasScale,
    _0x204185 = _0x2a6d23.scale["scaleY"] * _0x2a6d23.canvasScale,
    _0x29ad7c =
      _0x2a6d23.canvasRect["left"] +
      (_0x2e51e1.centerX - _0x2a6d23.scroll["x"]) * _0x1ba268,
    _0x3133dd =
      _0x2a6d23.canvasRect["top"] +
      (_0x2e51e1.top - _0x2a6d23.scroll["y"] - n.SLIDE_TABLE_CONTROL_GUTTER) *
        _0x204185 -
      42 -
      5,
    _0xa57bb = Math.max(352, _0x2a6d23.viewportWidth - 340 - 12);
  return {
    left: Math.min(Math.max(352, _0x29ad7c), _0xa57bb),
    top: Math.max(12, _0x3133dd),
  };
}
function Ta(_0x38ee14, _0x51e6f4, _0x4d6d8b) {
  if (!_0x51e6f4 || (_0x4d6d8b.kind !== "row" && _0x4d6d8b.kind !== "column"))
    return {
      centerX: _0x38ee14.left + _0x38ee14.width / 2,
      top: _0x38ee14.top,
    };
  let _0x39e511 = _0x4d6d8b.ranges[0];
  if (!_0x39e511)
    return {
      centerX: _0x38ee14.left + _0x38ee14.width / 2,
      top: _0x38ee14.top,
    };
  let _0x1e9b5f = (0, n.normalizeSlideTableCellRange)(_0x39e511),
    _0x4bdb75 = Ea(
      _0x51e6f4.columns["map"]((_0x47488d) => _0x47488d.width),
      _0x38ee14.width,
      _0x1e9b5f.startColumn,
      _0x1e9b5f.endColumn,
    ),
    _0x4afb54 = Ea(
      _0x51e6f4.rows["map"]((_0x20e121) => _0x20e121.height ?? 24),
      _0x38ee14.height,
      _0x1e9b5f.startRow,
      _0x1e9b5f.endRow,
    );
  return {
    centerX: _0x38ee14.left + _0x4bdb75.start + _0x4bdb75.size / 2,
    top: _0x38ee14.top + _0x4afb54.start,
  };
}
function Ea(_0x3ce69c, _0x427237, _0x3c07a3, _0xc3decb) {
  let _0x1fa271 = _0x3ce69c.reduce(
    (_0x2831a3, _0x44905a) => _0x2831a3 + _0x44905a,
    0,
  );
  if (_0x1fa271 <= 0 || _0x3ce69c.length === 0)
    return { start: 0, size: _0x427237 };
  let _0x32f8a1 = Math.max(0, Math.min(_0x3c07a3, _0x3ce69c.length - 1)),
    _0x32a028 = Math.max(_0x32f8a1, Math.min(_0xc3decb, _0x3ce69c.length - 1)),
    _0x522082 = _0x3ce69c
      .slice(0, _0x32f8a1)
      .reduce((_0x51a2a0, _0x72b853) => _0x51a2a0 + _0x72b853, 0),
    _0x2ae9d1 = _0x3ce69c
      .slice(_0x32f8a1, _0x32a028 + 1)
      .reduce((_0x4eb77f, _0x36ed42) => _0x4eb77f + _0x36ed42, 0);
  return {
    start: (_0x522082 / _0x1fa271) * _0x427237,
    size: (_0x2ae9d1 / _0x1fa271) * _0x427237,
  };
}
function Da() {
  let _0x2cf6bc = (0, o.useDependency)(H),
    _0x246bbb = (0, o.useDependency)(E),
    _0x5ba0b2 = (0, o.useDependency)(n.SlideTableResourceService),
    _0x30ee22 = (0, o.useDependency)(i.ICommandService),
    _0xda9a4c = (0, o.useDependency)(a.IRenderManagerService),
    _0x2b9a59 = (0, o.useDependency)(i.LocaleService),
    _0x10b356 = (0, o.useObservable)(
      _0x2b9a59.direction$,
      _0x2b9a59.getDirection(),
    ),
    _0x52caf3 = (0, o.useDependency)(i.ThemeService),
    _0x17cd36 = (0, o.useDependency)(n.SlideTableModelService),
    _0x25fee1 = (0, o.useObservable)(_0x246bbb.selection$),
    _0x11ecd6 = (0, o.useObservable)(
      _0x2cf6bc.visible$,
      _0x2cf6bc.getVisible(),
    );
  (0, o.useObservable)(_0x17cd36.tableChange$);
  let [_0x3b4e6f, _0x26c0bf] = (0, f.useState)(null),
    [_0x214adf, _0x3004a8] = (0, f.useState)({
      selectionKey: null,
      value: null,
    }),
    _0x14c719 = (0, f.useCallback)(() => {
      _0x246bbb.markTableInternalInteraction();
    }, [_0x246bbb]),
    _0x356621 =
      !_0x11ecd6 ||
      !_0x25fee1 ||
      _0x25fee1.kind === "text" ||
      !_0x25fee1.ranges["length"]
        ? null
        : _0x25fee1,
    _0x54ff94 = _0x356621
      ? [
          _0x356621.unitId,
          _0x356621.subUnitId,
          _0x356621.elementId,
          _0x356621.tableId,
          ...Object.values(_0x356621.ranges[0] ?? {}),
        ].join("|")
      : null,
    _0x5c2525 = _0x214adf.selectionKey === _0x54ff94 ? _0x214adf.value : null,
    _0x453201 = (0, f.useCallback)(() => {
      var _0xc3906d, _0x554be4, _0x1d7eea, _0x596240, _0x408249, _0x2b59b6;
      if (!_0x356621) {
        _0x26c0bf(null);
        return;
      }
      let _0x22844a = _0xda9a4c.getRenderUnitById(_0x356621.unitId),
        _0x1f5cfd = _0x22844a == null ? undefined : _0x22844a.scene,
        _0x49668a =
          _0x1f5cfd == null || (_0xc3906d = _0x1f5cfd.getObject) == null
            ? undefined
            : _0xc3906d.call(
                _0x1f5cfd,
                (0, r.buildDrawingOKey)(
                  _0x356621.unitId,
                  _0x356621.subUnitId,
                  _0x356621.elementId,
                ),
              );
      if (!_0x1f5cfd || !_0x49668a) {
        _0x26c0bf(null);
        return;
      }
      let _0x5b66f9 =
          _0x22844a == null ||
          (_0x554be4 = _0x22844a.engine) == null ||
          (_0x1d7eea = _0x554be4.getCanvasElement) == null
            ? undefined
            : _0x1d7eea.call(_0x554be4),
        _0x5bd3c5 = (_0x5b66f9 == null ||
        (_0x596240 = _0x5b66f9.getBoundingClientRect) == null
          ? undefined
          : _0x596240.call(_0x5b66f9)) ?? { left: 0, top: 0, width: 0 },
        _0x4c10e7 = (0, a.pxToNum)(
          (_0x5b66f9 == null ? undefined : _0x5b66f9.style["width"]) ?? "",
        ),
        _0x410252 = _0x4c10e7 > 0 ? _0x5bd3c5.width / _0x4c10e7 : 1,
        _0x339fb2 = ((_0x408249 = _0x1f5cfd.getAncestorScale) == null
          ? undefined
          : _0x408249.call(_0x1f5cfd)) ?? { scaleX: 1, scaleY: 1 },
        _0x3f88be =
          (_0x2b59b6 = _0x1f5cfd.getViewport) == null
            ? undefined
            : _0x2b59b6.call(_0x1f5cfd, r.SLIDE_MAIN_VIEWPORT_KEY),
        _0xbc29df = _0x5ba0b2.getTable(_0x356621.unitId, _0x356621.tableId);
      _0x26c0bf(
        wa({
          canvasRect: _0x5bd3c5,
          canvasScale: _0x410252,
          object: _0x49668a,
          scale: _0x339fb2,
          scroll: {
            x: (_0x3f88be == null ? undefined : _0x3f88be.viewportScrollX) ?? 0,
            y: (_0x3f88be == null ? undefined : _0x3f88be.viewportScrollY) ?? 0,
          },
          selection: _0x356621,
          table: _0xbc29df,
          viewportWidth: window.innerWidth,
        }),
      );
    }, [_0xda9a4c, _0x5ba0b2, _0x356621]);
  (0, f.useEffect)(() => {
    var _0x52dc0a;
    let _0x3c3161 = requestAnimationFrame(_0x453201);
    if (!_0x356621) return () => cancelAnimationFrame(_0x3c3161);
    let _0x3aa696 = _0xda9a4c.getRenderUnitById(_0x356621.unitId),
      _0x5995a7 = _0x3aa696 == null ? undefined : _0x3aa696.scene,
      _0x4573d1 =
        _0x5995a7 == null
          ? undefined
          : _0x5995a7.getObject(
              (0, r.buildDrawingOKey)(
                _0x356621.unitId,
                _0x356621.subUnitId,
                _0x356621.elementId,
              ),
            ),
      _0x4f602a = Ca(
        _0x453201,
        [
          _0x3aa696 == null
            ? undefined
            : _0x3aa696.engine["onTransformChange$"],
          _0x5995a7 == null ? undefined : _0x5995a7.onTransformChange$,
          _0x4573d1 == null ? undefined : _0x4573d1.onTransformChange$,
          _0x5995a7 == null ||
          (_0x52dc0a = _0x5995a7.getViewport(r.SLIDE_MAIN_VIEWPORT_KEY)) == null
            ? undefined
            : _0x52dc0a.onScrollAfter$,
        ],
        _0x3aa696 == null ? undefined : _0x3aa696.engine["getCanvasElement"](),
      );
    return (
      window.addEventListener("resize", _0x453201),
      () => {
        (cancelAnimationFrame(_0x3c3161),
          _0x4f602a(),
          window.removeEventListener("resize", _0x453201));
      }
    );
  }, [_0x453201, _0xda9a4c, _0x356621]);
  let _0x4dc13b = _0x356621
      ? _0x5ba0b2.getTable(_0x356621.unitId, _0x356621.tableId)
      : null,
    _0x498994 = Cn(_0x4dc13b, _0x356621),
    _0x18cd7e = _0x498994.values,
    _0x586877 = (0, f.useCallback)(
      (_0x27beb7) => {
        if (!_0x356621) return;
        let _0x2e0df9 = _0x356621.ranges[0],
          _0x1247c2 = _0x5ba0b2.getTable(_0x356621.unitId, _0x356621.tableId);
        !_0x2e0df9 ||
          !_0x1247c2 ||
          _0x30ee22.executeCommand(n.UpdateSlideTableCommand["id"], {
            unitId: _0x356621.unitId,
            tableId: _0x356621.tableId,
            patch: _0x27beb7(_0x1247c2, _0x2e0df9),
          });
      },
      [_0x30ee22, _0x5ba0b2, _0x356621],
    ),
    _0x3fe96f = (0, f.useCallback)(
      (_0x55a681) => {
        _0x356621 &&
          _0x30ee22.executeCommand(n.UpdateSlideTableCommand["id"], {
            unitId: _0x356621.unitId,
            tableId: _0x356621.tableId,
            patch: { styleId: _0x55a681 },
          });
      },
      [_0x30ee22, _0x356621],
    ),
    _0x312c45 = (0, f.useCallback)(
      (_0xba8d54) => {
        _0x356621 &&
          _0x30ee22.executeCommand(n.UpdateSlideTableCommand["id"], {
            unitId: _0x356621.unitId,
            tableId: _0x356621.tableId,
            patch: { options: _0xba8d54 },
          });
      },
      [_0x30ee22, _0x356621],
    ),
    _0x3fbd80 = (0, f.useCallback)(
      (_0x3284ec, _0x211b2d) => {
        _0x3004a8({
          selectionKey: _0x54ff94,
          value: _0x211b2d ? _0x3284ec : null,
        });
      },
      [_0x54ff94],
    ),
    _0x763fd6 = (0, f.useMemo)(
      () =>
        (0, n.resolveSlideTableThemePalette)((_0x1ccc24) =>
          _0x52caf3.getColorFromTheme(_0x1ccc24),
        ),
      [_0x52caf3],
    );
  if (!_0x356621 || !_0x3b4e6f || !_0x4dc13b) return null;
  let _0x1bd69d = {
      left: _0x3b4e6f.left,
      top: _0x3b4e6f.top,
      width: "max-content",
      maxWidth: "min(760px,\x20calc(100vw\x20-\x2024px))",
      minHeight: 42,
      transform: "translateX(-50%)",
      zIndex: 10050,
    },
    _0x1dcb14 = [
      {
        labelKey: "slides-table-ui.editorToolbar.alignLeft",
        value: i.HorizontalAlign["LEFT"],
        icon: (0, m.jsx)(c.LeftJustifyingIcon, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignCenter",
        value: i.HorizontalAlign["CENTER"],
        icon: (0, m.jsx)(c.HorizontallyIcon, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignRight",
        value: i.HorizontalAlign["RIGHT"],
        icon: (0, m.jsx)(c.RightJustifyingIcon, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignJustify",
        value: i.HorizontalAlign["JUSTIFIED"],
        icon: (0, m.jsx)(c.AlignTextBothIcon, {}),
      },
    ],
    _0x1acceb = [
      {
        labelKey: "slides-table-ui.editorToolbar.alignTop",
        value: i.VerticalAlign["TOP"],
        icon: (0, m.jsx)(c.AlignTopIcon, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignMiddle",
        value: i.VerticalAlign["MIDDLE"],
        icon: (0, m.jsx)(c.VerticalCenterIcon, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignBottom",
        value: i.VerticalAlign["BOTTOM"],
        icon: (0, m.jsx)(c.AlignBottomIcon, {}),
      },
    ],
    _0x3b49d3 = _0x356621.ranges[0],
    _0x27927c = _0x498994.mergeState,
    _0x37791f = Tn(_0x4dc13b, _0x356621),
    _0x5724d1 =
      (_0x37791f == null ? undefined : _0x37791f.kind) === "row"
        ? _0x2b9a59.t("slides-table-ui.contextMenu.deleteRow")
        : (_0x37791f == null ? undefined : _0x37791f.kind) === "column"
          ? _0x2b9a59.t("slides-table-ui.contextMenu.deleteColumn")
          : null,
    _0x723a1d = () => {
      _0x37791f &&
        _0x30ee22.executeCommand(_0x37791f.commandId, _0x37791f.params);
    },
    _0x3b7286 =
      (_0x27927c == null ? undefined : _0x27927c.action) === "unmerge"
        ? _0x2b9a59.t("slides-table-ui.editorToolbar.unmergeCells")
        : (_0x27927c == null ? undefined : _0x27927c.action) === "merge"
          ? _0x2b9a59.t("slides-table-ui.editorToolbar.mergeCells")
          : null,
    _0x3d15c9 = () => {
      let _0x1a7ce1 = wn(
        _0x356621,
        (_0x27927c == null ? undefined : _0x27927c.action) ?? null,
        (_0x27927c == null ? undefined : _0x27927c.range) ?? _0x3b49d3 ?? null,
      );
      _0x1a7ce1 &&
        _0x30ee22.executeCommand(_0x1a7ce1.commandId, _0x1a7ce1.params);
    };
  return (0, m.jsxs)("div", {
    "data-u-comp": "slide-table-floating-toolbar",
    role: "toolbar",
    className: (0, u.clsx)(
      "univer-fixed univer-box-border univer-flex univer-max-w-[760px] univer-flex-nowrap univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      u.borderClassName,
    ),
    dir: _0x10b356,
    style: { ..._0x1bd69d, direction: _0x10b356 },
    onMouseDownCapture: _0x14c719,
    onPointerDownCapture: _0x14c719,
    onMouseDown: l.keepFloatingToolbarPanelInteraction,
    onPointerDown: l.keepFloatingToolbarPanelInteraction,
    children: [
      _0x37791f && _0x5724d1
        ? (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(zn, {
                children: (0, m.jsx)(Bn, {
                  "data-toolbar-item":
                    _0x37791f.kind === "row" ? "delete-row" : "delete-column",
                  title: _0x5724d1,
                  onClick: _0x723a1d,
                  children: (0, m.jsx)(c.DeleteIcon, {}),
                }),
              }),
              (0, m.jsx)(u.Separator, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x3b7286
        ? (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(zn, {
                children: (0, m.jsx)(Bn, {
                  "data-toolbar-item": "merge-cells",
                  title: _0x3b7286,
                  onClick: _0x3d15c9,
                  children:
                    (_0x27927c == null ? undefined : _0x27927c.action) ===
                    "unmerge"
                      ? (0, m.jsx)(c.CancelMergeIcon, {})
                      : (0, m.jsx)(c.MergeAllIcon, {}),
                }),
              }),
              (0, m.jsx)(u.Separator, { orientation: "vertical" }),
            ],
          })
        : null,
      (0, m.jsxs)(zn, {
        children: [
          (0, m.jsx)(Dn, {
            color: _0x18cd7e.backgroundColor,
            value: $t(_0x18cd7e.backgroundFill),
            gradientValue: rn(
              _0x18cd7e.backgroundFill,
              _0x18cd7e.backgroundColor,
            ),
            previewStyle: on(
              _0x18cd7e.backgroundFill,
              _0x18cd7e.backgroundColor,
            ),
            showPreview: false,
            tableFill: _0x18cd7e.backgroundFill,
            mixed: !!_0x18cd7e.mixed["backgroundFill"],
            open: _0x5c2525 === "background",
            onOpenChange: (_0x5d85a6) => _0x3fbd80("background", _0x5d85a6),
            onTableFillChange: (_0x38bf15) =>
              _0x586877((_0x5df93a, _0x1fff21) =>
                ae(_0x5df93a, _0x1fff21, _0x38bf15),
              ),
            children: (0, m.jsx)(c.ShapeBackgroundColorDoubleIcon, {
              extend: { colorChannel1: _0x18cd7e.backgroundColor },
            }),
          }),
          (0, m.jsx)(Wn, {
            direction: _0x10b356,
            color: _0x18cd7e.borderColor,
            width: _0x18cd7e.borderWidth,
            dash: _0x18cd7e.borderDash,
            presets: Fn,
            open: _0x5c2525 === "border",
            mixed: !!(
              _0x18cd7e.mixed["borderColor"] ||
              _0x18cd7e.mixed["borderWidth"] ||
              _0x18cd7e.mixed["borderDash"]
            ),
            onOpenChange: (_0x2b6beb) => _0x3fbd80("border", _0x2b6beb),
            onSelectPreset: (_0xe0fd80) =>
              _0x586877((_0x241258, _0x3b0592) =>
                le(_0x241258, _0x3b0592, _0xe0fd80),
              ),
            onChangeColor: (_0x47bf79) =>
              _0x586877((_0x563227, _0x4a30cc) =>
                ce(_0x563227, _0x4a30cc, { color: _0x47bf79 }),
              ),
            onChangeWidth: (_0x34a13a) =>
              _0x586877((_0x21027b, _0xd39b35) =>
                ce(_0x21027b, _0xd39b35, {
                  width: _0x34a13a,
                  dash:
                    _0x34a13a === 0
                      ? n.SlideTableBorderDashEnum["None"]
                      : undefined,
                }),
              ),
            onChangeDash: (_0x42e708) =>
              _0x586877((_0x5690e4, _0x467fce) =>
                ce(_0x5690e4, _0x467fce, { dash: _0x42e708 }),
              ),
          }),
        ],
      }),
      (0, m.jsx)(u.Separator, { orientation: "vertical" }),
      (0, m.jsxs)(zn, {
        children: [
          (0, m.jsx)(o.FontFamilyDropdown, {
            ariaLabel: _0x2b9a59.t("slides-table-ui.editorToolbar.fontFamily"),
            className: "univer-w-28",
            inputClassName: "univer-w-auto",
            value: _0x18cd7e.mixed["fontFamily"] ? "" : _0x18cd7e.fontFamily,
            onChange: (_0x3061de) =>
              _0x586877((_0x110ffe, _0x21c37a) =>
                ue(_0x110ffe, _0x21c37a, _0x3061de),
              ),
            onMouseDown: l.keepFloatingToolbarPanelInteraction,
            onPointerDown: l.keepFloatingToolbarPanelInteraction,
          }),
          (0, m.jsx)(Jn, {
            title: _0x2b9a59.t("slides-table-ui.editorToolbar.fontSize"),
            widthClassName: "univer-w-14",
            value: _0x18cd7e.mixed["fontSize"]
              ? ""
              : String(_0x18cd7e.fontSize),
            options: _0x18cd7e.mixed["fontSize"]
              ? [{ label: "—", value: "" }, ...Mn]
              : ln(Mn, String(_0x18cd7e.fontSize)),
            onChange: (_0x4daa40) => {
              let _0xb48536 = Number(_0x4daa40);
              _0x4daa40 &&
                !Number.isNaN(_0xb48536) &&
                _0x586877((_0x6f25fc, _0x1ebada) =>
                  de(_0x6f25fc, _0x1ebada, _0xb48536),
                );
            },
          }),
          (0, m.jsx)(Hn, {
            open: _0x5c2525 === "textFormat",
            values: _0x18cd7e,
            horizontalAlignOptions: _0x1dcb14,
            verticalAlignOptions: _0x1acceb,
            onOpenChange: (_0x3ad142) => _0x3fbd80("textFormat", _0x3ad142),
            onToggleStyle: (_0x534ba1) =>
              _0x586877((_0x3cd524, _0x4506a6) =>
                L(_0x3cd524, _0x4506a6, _0x534ba1),
              ),
            onHorizontalAlign: (_0x502b77) =>
              _0x586877((_0x350e05, _0x460d3f) =>
                ne(_0x350e05, _0x460d3f, {
                  axis: "horizontal",
                  value: _0x502b77,
                }),
              ),
            onVerticalAlign: (_0x19d45a) =>
              _0x586877((_0x45d511, _0x3d39a1) =>
                ne(_0x45d511, _0x3d39a1, {
                  axis: "vertical",
                  value: _0x19d45a,
                }),
              ),
          }),
        ],
      }),
      (0, m.jsx)(u.Separator, { orientation: "vertical" }),
      (0, m.jsxs)(zn, {
        children: [
          (0, m.jsx)(Kn, {
            "data-toolbar-item": "text-color",
            title: _0x2b9a59.t("slides-table-ui.editorToolbar.textColor"),
            color: _0x18cd7e.textColor,
            mixed: !!(
              _0x18cd7e.mixed["textColor"] || _0x18cd7e.mixed["textFill"]
            ),
            icon: "font",
            open: _0x5c2525 === "textColor",
            onOpenChange: (_0x588aa3) => _0x3fbd80("textColor", _0x588aa3),
            onChange: (_0x296bbe) =>
              _0x586877((_0x5bfbda, _0x4737c5) =>
                se(_0x5bfbda, _0x4737c5, {
                  type: "solid",
                  color: _0x296bbe,
                  opacity: 1,
                }),
              ),
          }),
          (0, m.jsx)(Kn, {
            "data-toolbar-item": "text-background",
            title: _0x2b9a59.t(
              "slides-table-ui.editorToolbar.textBackgroundColor",
            ),
            color: _0x18cd7e.textBackgroundColor,
            mixed: !!_0x18cd7e.mixed["textBackgroundColor"],
            icon: "bucket",
            open: _0x5c2525 === "textBackground",
            onOpenChange: (_0x22b61d) => _0x3fbd80("textBackground", _0x22b61d),
            onChange: (_0x357aae) =>
              _0x586877((_0x47e8c1, _0x145d5a) =>
                L(_0x47e8c1, _0x145d5a, { bg: { rgb: _0x357aae } }),
              ),
          }),
        ],
      }),
      (0, m.jsx)(u.Separator, { orientation: "vertical" }),
      (0, m.jsx)(zn, {
        children: (0, m.jsx)(Un, {
          open: _0x5c2525 === "theme",
          onOpenChange: (_0x539df6) => _0x3fbd80("theme", _0x539df6),
          children: (0, m.jsx)($n, {
            currentStyleId: _0x4dc13b.styleId,
            currentOptions: _0x4dc13b.options ?? {},
            direction: _0x10b356,
            palette: _0x763fd6,
            onApplyTheme: (_0x3bd51b) => {
              (_0x3fe96f(_0x3bd51b), _0x3fbd80("theme", false));
            },
            onChangeOptions: _0x312c45,
          }),
        }),
      }),
      (0, m.jsx)(u.Separator, { orientation: "vertical" }),
      (0, m.jsx)(zn, {
        children: (0, m.jsx)(Bn, {
          "data-toolbar-item": "delete-table",
          title: _0x2b9a59.t("slides-table-ui.contextMenu.deleteTable"),
          onClick: () => _0x30ee22.executeCommand(Ve.id),
          children: (0, m.jsx)(c.DeleteIcon, {}),
        }),
      }),
    ],
  });
}
let Oa = class extends i.Plugin {
  constructor(
    _0x319a75 = y,
    _0x3461ac,
    _0x1f6861,
    _0x1b36c7,
    _0x4189f8,
    _0x1e29dc,
    _0x2dd4fd,
    _0x2c9a54,
  ) {
    (super(),
      (this._config = _0x319a75),
      (this._injector = _0x3461ac),
      (this._configService = _0x1f6861),
      (this._renderManagerService = _0x1b36c7),
      (this._commandService = _0x4189f8),
      (this._menuManagerService = _0x1e29dc),
      (this._shortcutService = _0x2dd4fd),
      (this._uiPartsService = _0x2c9a54));
    let { ..._0x23d541 } = (0, i.merge)({}, y, this._config);
    (this._configService["setConfig"](v, _0x23d541),
      this._initCommands(),
      this._initShortcuts());
  }
  onStarting() {
    let _0x2b088d = this._injector;
    (_0x2b088d.has(H) || _0x2b088d.add([H]),
      _0x2b088d.add([gr]),
      _0x2b088d.add([ni]),
      _0x2b088d.has(E) || _0x2b088d.add([E]),
      _0x2b088d.has(Tt) || _0x2b088d.add([Tt]),
      _0x2b088d.has(va) || _0x2b088d.add([va]),
      (0, i.touchDependencies)(_0x2b088d, [[gr], [E], [Tt], [H], [va]]),
      this.disposeWithMe(
        _0x2b088d
          .get(r.ISlideClipboardResourceAdapterService)
          .registerAdapter(_0x2b088d.get(va)),
      ));
  }
  onReady() {
    (this._menuManagerService["mergeMenu"]($r),
      this._injector["get"](ni),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          i.UniverInstanceType["UNIVER_SLIDE"],
          Ui,
        ),
      ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](
          o.BuiltInUIPart["CONTENT"],
          () => (0, o.connectInjector)(Da, this._injector),
        ),
      ));
  }
  _initCommands() {
    [...at, ...Pt, Bt].forEach((_0x20aaeb) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x20aaeb));
    });
  }
  _initShortcuts() {
    [...Ft, ...It].forEach((_0x540ed7) => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](_0x540ed7));
    });
  }
};
(T(Oa, "type", i.UniverInstanceType["UNIVER_SLIDE"]),
  T(Oa, "pluginName", "UniverSlidesTableUIPlugin"),
  T(Oa, "packageName", b),
  T(Oa, "version", x),
  (Oa = V(
    [
      (0, i.DependentOn)(
        e.UniverLicensePlugin,
        a.UniverRenderEnginePlugin,
        n.UniverSlidesTablePlugin,
        t.UniverSlidesPlugin,
        r.UniverSlidesUIPlugin,
      ),
      B(1, (0, i.Inject)(i.Injector)),
      B(2, i.IConfigService),
      B(3, a.IRenderManagerService),
      B(4, i.ICommandService),
      B(5, o.IMenuManagerService),
      B(6, o.IShortcutService),
      B(7, o.IUIPartsService),
    ],
    Oa,
  )));
function ka(_0x35fea6) {
  return _0x35fea6 === true || _0x35fea6 === 1;
}
function Aa(_0x57a630) {
  return (
    typeof (_0x57a630 == null ? undefined : _0x57a630.content) == "string" &&
    _0x57a630.content["trim"]().length > 0
  );
}
function ja(_0x5978e7, _0x45a541) {
  let _0x342511 = _0x5978e7 == null ? undefined : _0x5978e7.bBox,
    _0x11eebd =
      (_0x342511 == null ? undefined : _0x342511.aba) ||
      (_0x342511 == null ? undefined : _0x342511.ba) ||
      _0x45a541.asc ||
      0,
    _0x10c4eb =
      (_0x342511 == null ? undefined : _0x342511.abd) ||
      (_0x342511 == null ? undefined : _0x342511.bd) ||
      _0x45a541.dsc ||
      0;
  return _0x11eebd === 0 && _0x10c4eb === 0
    ? null
    : { ascent: _0x11eebd, descent: _0x10c4eb };
}
function Ma(_0x265356, _0x11c0f1, _0x535be0) {
  var _0x2616cd;
  if (_0x535be0 === undefined || _0x535be0 === i.VerticalAlign["UNSPECIFIED"])
    return 0;
  let _0x4c5042 = _0x265356.getSkeletonData();
  if (!(
    _0x4c5042 != null &&
    (_0x2616cd = _0x4c5042.pages) != null &&
    _0x2616cd.length
  ))
    return 0;
  let _0x57554a = 1 / 0,
    _0x415529 = -1 / 0,
    _0xa544da = 0;
  for (let _0x4c9e01 of _0x4c5042.pages) {
    let _0x2b782b = _0x4c9e01.marginTop ?? 0;
    for (let _0x53c332 of _0x4c9e01.sections ?? []) {
      let _0x26133c = _0x53c332.top ?? 0;
      for (let _0x438d75 of _0x53c332.columns ?? [])
        for (let _0x107894 of _0x438d75.lines ?? []) {
          let _0x16bb8f =
            _0xa544da +
            _0x2b782b +
            _0x26133c +
            (_0x107894.top ?? 0) +
            (_0x107894.marginTop ?? 0) +
            (_0x107894.paddingTop ?? 0) +
            (_0x107894.asc ?? 0);
          for (let _0x2aa0b3 of _0x107894.divides ?? [])
            for (let _0x30f3b2 of _0x2aa0b3.glyphGroup ?? []) {
              if (!Aa(_0x30f3b2)) continue;
              let _0x43c6e7 = ja(_0x30f3b2, _0x107894);
              _0x43c6e7 &&
                ((_0x57554a = Math.min(
                  _0x57554a,
                  _0x16bb8f - _0x43c6e7.ascent,
                )),
                (_0x415529 = Math.max(
                  _0x415529,
                  _0x16bb8f + _0x43c6e7.descent,
                )));
            }
        }
    }
    let _0x52f7b1 = Number.isFinite(_0x4c9e01.pageHeight)
      ? _0x4c9e01.pageHeight
      : _0x4c9e01.height;
    _0xa544da += _0x52f7b1 ?? 0;
  }
  return !Number.isFinite(_0x57554a) || !Number.isFinite(_0x415529)
    ? 0
    : _0x535be0 === i.VerticalAlign["BOTTOM"]
      ? _0x11c0f1 - _0x415529
      : _0x535be0 === i.VerticalAlign["MIDDLE"]
        ? _0x11c0f1 / 2 - (_0x57554a + _0x415529) / 2
        : _0x535be0 === i.VerticalAlign["TOP"]
          ? -_0x57554a
          : 0;
}
function Na(_0x4aa790, _0x6e975f) {
  let _0x38cd50 = i.Tools["deepClone"](_0x4aa790),
    _0x3ab0ce = _0x38cd50.documentStyle ?? {},
    _0x59fbc7 = { ..._0x3ab0ce.renderConfig };
  if (_0x6e975f.horizontalAlign !== undefined) {
    _0x59fbc7.horizontalAlign = _0x6e975f.horizontalAlign;
    let _0x4c2097 = _0x38cd50.body,
      _0x2c8963 = _0x4c2097 == null ? undefined : _0x4c2097.paragraphs;
    _0x2c8963 &&
      (_0x4c2097.paragraphs = _0x2c8963.map((_0x59901a) => {
        var _0x2e8ef0;
        return ((_0x2e8ef0 = _0x59901a.paragraphStyle) == null
          ? undefined
          : _0x2e8ef0.horizontalAlign) === undefined
          ? {
              ..._0x59901a,
              paragraphStyle: {
                ..._0x59901a.paragraphStyle,
                horizontalAlign: _0x6e975f.horizontalAlign,
              },
            }
          : _0x59901a;
      }));
  }
  return (
    _0x6e975f.verticalAlign !== undefined &&
      (_0x59fbc7.verticalAlign = _0x6e975f.verticalAlign),
    (_0x38cd50.documentStyle = {
      ..._0x3ab0ce,
      renderConfig: Object.keys(_0x59fbc7).length > 0 ? _0x59fbc7 : undefined,
    }),
    _0x38cd50
  );
}
function Pa(_0x355e71) {
  let _0x3d1936 = _0x355e71.body,
    _0x5af5dd = _0x3d1936 == null ? undefined : _0x3d1936.paragraphs,
    _0x1d472d = _0x3d1936 == null ? undefined : _0x3d1936.dataStream;
  if (!_0x3d1936 || !_0x1d472d) return;
  let _0x5c4ab2 = [];
  for (let _0xbd3cfc = 0; _0xbd3cfc < _0x1d472d.length; _0xbd3cfc++)
    _0x1d472d[_0xbd3cfc] === "\x0d" && _0x5c4ab2.push(_0xbd3cfc);
  let _0x205bd2 = new Set(
    (_0x5af5dd ?? [])
      .map((_0x3038ee) => _0x3038ee.paragraphId)
      .filter((_0x292d84) => !!_0x292d84),
  );
  _0x3d1936.paragraphs = _0x5c4ab2.map((_0x4c2ea1, _0x3fb2e5) => {
    var _0x155dc9;
    return {
      ...(_0x5af5dd == null ? undefined : _0x5af5dd[_0x3fb2e5]),
      startIndex: _0x4c2ea1,
      paragraphId:
        (_0x5af5dd == null || (_0x155dc9 = _0x5af5dd[_0x3fb2e5]) == null
          ? undefined
          : _0x155dc9.paragraphId) ?? (0, i.createParagraphId)(_0x205bd2),
    };
  });
}
function Fa(_0x44684f, _0x29f747) {
  var _0x12cb6f, _0x11987b;
  let _0x5c1eff =
      (_0x12cb6f = _0x44684f.documentStyle) == null
        ? undefined
        : _0x12cb6f.renderConfig,
    _0xc679ff = Na(_0x44684f, {
      horizontalAlign:
        _0x29f747.horizontalAlign ??
        (_0x5c1eff == null ? undefined : _0x5c1eff.horizontalAlign),
      verticalAlign: _0x29f747.verticalAlign,
    });
  Pa(_0xc679ff);
  let _0x1e3cd7 = _0xc679ff.documentStyle ?? {},
    _0x32d4e3 = _0x29f747.isHorizontal !== false,
    _0x10395a = {
      ..._0x1e3cd7.renderConfig,
      wrapStrategy:
        _0x29f747.wrapStrategy ??
        ((_0x11987b = _0x1e3cd7.renderConfig) == null
          ? undefined
          : _0x11987b.wrapStrategy) ??
        i.WrapStrategy["WRAP"],
    };
  return (
    delete _0x10395a.horizontalAlign,
    _0x32d4e3
      ? (delete _0x10395a.centerAngle, delete _0x10395a.vertexAngle)
      : ((_0x10395a.centerAngle = a.VERTICAL_ROTATE_ANGLE),
        (_0x10395a.vertexAngle = a.VERTICAL_ROTATE_ANGLE)),
    (_0xc679ff.documentStyle = {
      ..._0x1e3cd7,
      documentFlavor: i.DocumentFlavor["UNSPECIFIED"],
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pageSize: {
        width: _0x32d4e3 ? _0x29f747.width : _0x29f747.height,
        height: 1 / 0,
      },
      renderConfig: _0x10395a,
    }),
    _0xc679ff
  );
}
function Ia(_0x2ddcab) {
  var _0x5605e0;
  let {
      documentData: _0x359280,
      id: _0x421a86 = "slide-table-document-renderer",
      isHorizontal: _0x1cfc00,
      localeService: _0x41d759,
      horizontalAlign: _0x49c3b7,
      verticalAlign: _0x1a95a8,
      size: _0x2aec39,
    } = _0x2ddcab,
    _0x789285 = { width: _0x2aec39.width, height: _0x2aec39.height },
    _0x21a65a =
      (_0x5605e0 = _0x359280.documentStyle) == null
        ? undefined
        : _0x5605e0.renderConfig,
    _0x59221a =
      _0x1a95a8 ?? (_0x21a65a == null ? undefined : _0x21a65a.verticalAlign),
    _0x5d3b3c = ka(
      _0x2ddcab.shapeTextOpticalVerticalAlign ??
        (_0x21a65a == null
          ? undefined
          : _0x21a65a.shapeTextOpticalVerticalAlign),
    ),
    _0x2fd87f = new i["DocumentDataModel"](
      Fa(_0x359280, {
        width: _0x789285.width,
        height: _0x789285.height,
        verticalAlign: _0x5d3b3c ? i.VerticalAlign["TOP"] : _0x59221a,
        horizontalAlign: _0x49c3b7,
        isHorizontal: _0x1cfc00,
        wrapStrategy: _0x2ddcab.wrapStrategy,
      }),
    ),
    _0xe5c9cf = new a["DocumentViewModel"](_0x2fd87f),
    _0x48d02 = a.DocumentSkeleton["create"](_0xe5c9cf, _0x41d759);
  _0x48d02.calculate();
  let _0x3c542b = _0x48d02.getActualSize().actualHeight,
    _0x15bce7 = Math.max(_0x789285.height, _0x3c542b),
    _0x21b3be = 0;
  (!_0x5d3b3c &&
    _0x3c542b < _0x789285.height &&
    (_0x59221a === i.VerticalAlign["MIDDLE"]
      ? (_0x21b3be = (_0x789285.height - _0x3c542b) / 2)
      : _0x59221a === i.VerticalAlign["BOTTOM"] &&
        (_0x21b3be = _0x789285.height - _0x3c542b)),
    _0x2fd87f.updateDocumentStyle({
      pageSize: {
        width: _0x1cfc00 === false ? _0x789285.height : _0x789285.width,
        height: _0x15bce7,
      },
    }),
    _0x2fd87f.updateDocumentDataMargin({ t: _0x21b3be }),
    _0x48d02.calculate());
  let _0x2761fe = new a["Documents"](_0x421a86, _0x48d02, {
    pageMarginLeft: 0,
    pageMarginTop: 0,
  });
  _0x2761fe.resize(_0x789285.width, _0x15bce7);
  let _0x13475d = _0x5d3b3c ? Ma(_0x48d02, _0x789285.height, _0x59221a) : 0;
  return {
    documents: _0x2761fe,
    skeleton: _0x48d02,
    docViewModel: _0xe5c9cf,
    docModel: _0x2fd87f,
    width: _0x789285.width,
    minHeight: _0x789285.height,
    actualHeight: _0x3c542b,
    contentHeight: _0x15bce7,
    marginTop: _0x21b3be,
    opticalVerticalOffset: _0x13475d,
    dispose: () => {
      (_0x2761fe.dispose(),
        _0x48d02.dispose(),
        _0xe5c9cf.dispose(),
        _0x2fd87f.dispose());
    },
  };
}
function La(_0x512b8b, _0x208feb) {
  if (_0x208feb !== undefined) return { top: 0, height: _0x208feb };
  let _0x5a1427 =
    _0x512b8b.actualHeight > _0x512b8b.minHeight &&
    _0x512b8b.opticalVerticalOffset < 0
      ? _0x512b8b.opticalVerticalOffset
      : 0;
  return { top: _0x5a1427, height: _0x512b8b.contentHeight - _0x5a1427 };
}
function Ra(_0x35da1e, _0x46e1cb, _0x3b30f7, _0x609067, _0x5781cb, _0x5adf95) {
  if (
    (_0x35da1e.save(),
    _0x35da1e.translateWithPrecision(_0x3b30f7, _0x609067),
    _0x5781cb)
  ) {
    let _0x9dfbe1 = La(_0x46e1cb, _0x5adf95);
    (_0x35da1e.beginPath(),
      _0x35da1e.rect(0, _0x9dfbe1.top, _0x46e1cb.width, _0x9dfbe1.height),
      _0x35da1e.clip());
  }
  (_0x46e1cb.opticalVerticalOffset &&
    _0x35da1e.translateWithPrecision(0, _0x46e1cb.opticalVerticalOffset),
    _0x46e1cb.documents["draw"](_0x35da1e),
    _0x35da1e.restore());
}
function za(_0x25a3c1) {
  try {
    return JSON.stringify(_0x25a3c1);
  } catch {
    return String(_0x25a3c1);
  }
}
function Ba(_0x587917) {
  let _0x588d7c = _0x587917;
  return typeof _0x588d7c.getCurrentLocale == "function"
    ? _0x588d7c.getCurrentLocale()
    : "";
}
function Va(_0x5325bc, _0x28704d, _0x10ecb3) {
  var _0x2cacd0;
  let _0x1e4132 =
    (_0x2cacd0 = _0x28704d.documentStyle) == null
      ? undefined
      : _0x2cacd0.renderConfig;
  return za({
    cacheKey: _0x5325bc.cacheKey,
    key: _0x5325bc.key,
    text: _0x5325bc.text,
    documentData: _0x5325bc.cacheKey === undefined ? _0x28704d : undefined,
    left: _0x5325bc.left,
    top: _0x5325bc.top,
    width: _0x5325bc.width,
    height: _0x5325bc.height,
    horizontalAlign:
      _0x5325bc.horizontalAlign ??
      (_0x1e4132 == null ? undefined : _0x1e4132.horizontalAlign),
    verticalAlign:
      _0x5325bc.verticalAlign ??
      (_0x1e4132 == null ? undefined : _0x1e4132.verticalAlign),
    isHorizontal: _0x5325bc.isHorizontal,
    wrapStrategy: _0x5325bc.wrapStrategy,
    clip: _0x5325bc.clip,
    viewportHeight: _0x5325bc.viewportHeight,
    shapeTextOpticalVerticalAlign:
      _0x5325bc.shapeTextOpticalVerticalAlign ??
      (_0x1e4132 == null ? undefined : _0x1e4132.shapeTextOpticalVerticalAlign),
    locale: Ba(_0x10ecb3),
  });
}
function Ha(_0x22020c, _0x14fa71) {
  var _0x17e7bd;
  if (_0x22020c.clip !== undefined) return _0x22020c.clip;
  let _0x1d9b0b =
    (_0x17e7bd = _0x14fa71.documentStyle) == null
      ? undefined
      : _0x17e7bd.renderConfig;
  return (
    (_0x22020c.wrapStrategy ??
      (_0x1d9b0b == null ? undefined : _0x1d9b0b.wrapStrategy)) !==
    i.WrapStrategy["OVERFLOW"]
  );
}
function Ua(_0x3deb64) {
  var _0x35322e;
  (_0x3deb64 == null ||
    (_0x35322e = _0x3deb64.resources) == null ||
    _0x35322e.dispose(),
    _0x3deb64 &&
      ((_0x3deb64.signature = undefined), (_0x3deb64.resources = undefined)));
}
function Wa(_0x428dc1, _0x35addf, _0x2490c9) {
  var _0x3b7d26;
  let {
    documentData: _0x61c1fa,
    height: _0x22ef83,
    horizontalAlign: _0x2af096,
    isHorizontal: _0x3320a9,
    key: _0xe9db06,
    left: _0x5639ff,
    localeService: _0x3bc6c3,
    text: _0x6c6d66,
    top: _0x432cf2,
    verticalAlign: _0x29b52d,
    width: _0x9da782,
  } = _0x35addf;
  if (
    !_0x3bc6c3 ||
    _0x9da782 <= 0 ||
    _0x22ef83 <= 0 ||
    (!_0x61c1fa && !_0x6c6d66)
  )
    return false;
  let _0x46016a = (0, t.normalizeSlideDocumentDataStream)(
      _0x61c1fa ?? ii(_0xe9db06, 0, 0, _0x6c6d66 ?? ""),
    ),
    _0x44461e =
      (_0x3b7d26 = _0x46016a.documentStyle) == null
        ? undefined
        : _0x3b7d26.renderConfig,
    _0x3b622e =
      _0x2af096 ?? (_0x44461e == null ? undefined : _0x44461e.horizontalAlign),
    _0x5d4349 =
      _0x29b52d ?? (_0x44461e == null ? undefined : _0x44461e.verticalAlign),
    _0x29efdb = _0x2490c9 ? Va(_0x35addf, _0x46016a, _0x3bc6c3) : undefined,
    _0x18f3ae = Ha(_0x35addf, _0x46016a);
  if (
    _0x2490c9 != null &&
    _0x2490c9.resources &&
    _0x2490c9.signature === _0x29efdb
  )
    return (
      Ra(
        _0x428dc1,
        _0x2490c9.resources,
        _0x5639ff,
        _0x432cf2,
        _0x18f3ae,
        _0x35addf.viewportHeight,
      ),
      true
    );
  _0x2490c9 != null && _0x2490c9.resources && Ua(_0x2490c9);
  let _0x1f4c4b = Ia({
    id: "slide-table-text-" + _0xe9db06,
    documentData: _0x46016a,
    size: { width: _0x9da782, height: _0x22ef83 },
    localeService: _0x3bc6c3,
    horizontalAlign: _0x3b622e,
    verticalAlign: _0x5d4349,
    isHorizontal: _0x3320a9,
    wrapStrategy: _0x35addf.wrapStrategy,
    shapeTextOpticalVerticalAlign:
      _0x35addf.shapeTextOpticalVerticalAlign ??
      (_0x44461e == null ? undefined : _0x44461e.shapeTextOpticalVerticalAlign),
  });
  return (
    Ra(
      _0x428dc1,
      _0x1f4c4b,
      _0x5639ff,
      _0x432cf2,
      _0x18f3ae,
      _0x35addf.viewportHeight,
    ),
    _0x2490c9
      ? ((_0x2490c9.signature = _0x29efdb), (_0x2490c9.resources = _0x1f4c4b))
      : _0x1f4c4b.dispose(),
    true
  );
}
const Ga = "#7f8ea3",
  Ka = "#c7d2e3",
  qa = "#ffffff",
  Ja = "#1a73e8",
  Ya = "#ffffff",
  Xa = "#e8f1ff",
  Za = "#9fb2cc",
  Qa = "#3f8cff",
  $a = "#5f6368",
  eo = "#ffffff";
function to(_0x51d6c0, _0x5f3280) {
  let _0x1065cf = _0x51d6c0.row + Math.max(1, _0x51d6c0.rowSpan) - 1,
    _0x338fec = _0x51d6c0.column + Math.max(1, _0x51d6c0.columnSpan) - 1;
  return _0x5f3280.some((_0x4323b5) => {
    let _0x4ca2dc = Math.min(_0x4323b5.startRow, _0x4323b5.endRow),
      _0x2b53aa = Math.max(_0x4323b5.startRow, _0x4323b5.endRow),
      _0x4a3444 = Math.min(_0x4323b5.startColumn, _0x4323b5.endColumn),
      _0x560090 = Math.max(_0x4323b5.startColumn, _0x4323b5.endColumn);
    return (
      _0x51d6c0.row <= _0x2b53aa &&
      _0x1065cf >= _0x4ca2dc &&
      _0x51d6c0.column <= _0x560090 &&
      _0x338fec >= _0x4a3444
    );
  });
}
var no = class extends a.Rect {
  constructor(_0x1250cc, _0x35604b) {
    (super(_0x1250cc, {
      ..._0x35604b,
      fill: qa,
      stroke: Ga,
      strokeWidth: 1,
      evented: true,
    }),
      T(this, "isDrawingObject", true),
      T(this, "_controlButtonMode", undefined),
      T(this, "_table", undefined),
      T(this, "_previewTable", null),
      T(this, "_selection", null),
      T(this, "_cellHover", null),
      T(this, "_editingCell", null),
      T(this, "_controlHover", null),
      T(this, "_controlState", null),
      T(this, "_localeService", undefined),
      T(this, "_tableThemePalette", undefined),
      T(this, "_tableThemes", undefined),
      T(this, "_themeService", undefined),
      T(this, "_renderModelCache", null),
      T(this, "_visibleCellCache", null),
      T(this, "_textRenderCaches", new Map()),
      (this._controlButtonMode = _0x35604b.controlButtonMode ?? "all"),
      (this._table = _0x35604b.table ?? null),
      (this._localeService = _0x35604b.localeService),
      (this._tableThemePalette = _0x35604b.tableThemePalette),
      (this._tableThemes = _0x35604b.tableThemes),
      (this._themeService = _0x35604b.themeService));
  }
  setTable(_0x4ece9a) {
    ((this._table = _0x4ece9a ?? null), this.makeDirty(true));
  }
  setTableThemes(_0x50f24f) {
    ((this._tableThemes = _0x50f24f), this.makeDirty(true));
  }
  getTable() {
    return this._table;
  }
  setPreviewTable(_0x2f0c8c) {
    ((this._previewTable = _0x2f0c8c), this.makeDirty(true));
  }
  setLocaleService(_0x5eb6fb) {
    this._localeService !== _0x5eb6fb &&
      ((this._localeService = _0x5eb6fb),
      this._disposeTextRenderCaches(),
      this.makeDirty(true));
  }
  setTableThemePalette(_0x3e4d67) {
    ((this._tableThemePalette = _0x3e4d67), this.makeDirty(true));
  }
  setTableSelection(_0x119894) {
    ((this._selection = _0x119894
      ? {
          kind: _0x119894.kind,
          ranges: _0x119894.ranges["map"]((_0x4274e3) => ({ ..._0x4274e3 })),
          active: _0x119894.active ? { ..._0x119894.active } : undefined,
        }
      : null),
      _0x119894 || ((this._cellHover = null), (this._controlState = null)),
      this.makeDirty(true));
  }
  getTableSelection() {
    return this._selection
      ? {
          kind: this._selection["kind"],
          ranges: this._selection["ranges"].map((_0x32828d) => ({
            ..._0x32828d,
          })),
          active: this._selection["active"]
            ? { ...this._selection["active"] }
            : undefined,
        }
      : null;
  }
  setEditingCell(_0x51f196) {
    var _0xc6fc5f, _0x25039b;
    let _0x5ef840 = (_0x51f196 == null ? undefined : _0x51f196.row) ?? null,
      _0x245595 = (_0x51f196 == null ? undefined : _0x51f196.column) ?? null,
      _0x20cc7a =
        ((_0xc6fc5f = this._editingCell) == null ? undefined : _0xc6fc5f.row) ??
        null,
      _0x27093b =
        ((_0x25039b = this._editingCell) == null
          ? undefined
          : _0x25039b.column) ?? null;
    (_0x5ef840 !== _0x20cc7a || _0x245595 !== _0x27093b) &&
      ((this._editingCell = _0x51f196
        ? { row: _0x51f196.row, column: _0x51f196.column }
        : null),
      this.makeDirty(true));
  }
  getEditingCell() {
    return this._editingCell ? { ...this._editingCell } : null;
  }
  setTableControlHover(_0x3efc33) {
    var _0x1ab07d, _0x296947, _0x1a653a;
    let _0x397ad8 = (_0x3efc33 == null ? undefined : _0x3efc33.kind) ?? null,
      _0x3aab92 = (_0x3efc33 == null ? undefined : _0x3efc33.row) ?? null,
      _0x4bffd7 = (_0x3efc33 == null ? undefined : _0x3efc33.column) ?? null,
      _0x305b9b =
        ((_0x1ab07d = this._controlHover) == null
          ? undefined
          : _0x1ab07d.kind) ?? null,
      _0x148d05 =
        ((_0x296947 = this._controlHover) == null
          ? undefined
          : _0x296947.row) ?? null,
      _0x4018db =
        ((_0x1a653a = this._controlHover) == null
          ? undefined
          : _0x1a653a.column) ?? null;
    return _0x397ad8 === _0x305b9b &&
      _0x3aab92 === _0x148d05 &&
      _0x4bffd7 === _0x4018db
      ? false
      : ((this._controlHover =
          _0x397ad8 === null && _0x3aab92 === null && _0x4bffd7 === null
            ? null
            : {
                kind: _0x3efc33 == null ? undefined : _0x3efc33.kind,
                row: _0x3aab92,
                column: _0x4bffd7,
              }),
        this.makeDirty(true),
        true);
  }
  setTableCellHover(_0x55e208) {
    var _0x3a81b4, _0x44c7b4;
    let _0x579822 =
        ((_0x3a81b4 = this._cellHover) == null ? undefined : _0x3a81b4.row) ??
        null,
      _0x5638da =
        ((_0x44c7b4 = this._cellHover) == null
          ? undefined
          : _0x44c7b4.column) ?? null,
      _0x24e849 = (_0x55e208 == null ? undefined : _0x55e208.row) ?? null,
      _0x564b3e = (_0x55e208 == null ? undefined : _0x55e208.column) ?? null;
    return _0x579822 === _0x24e849 && _0x5638da === _0x564b3e
      ? false
      : ((this._cellHover = _0x55e208
          ? { row: _0x55e208.row, column: _0x55e208.column }
          : null),
        this.makeDirty(true),
        true);
  }
  setTableControlState(_0x569dd1) {
    let _0x4732eb = ko(_0x569dd1);
    return Ao(this._controlState, _0x4732eb)
      ? false
      : ((this._controlState = _0x4732eb), this.makeDirty(true), true);
  }
  getInverseCoord(_0x4d316c) {
    let _0x5bd227 = this.getRealBound(),
      _0x3be903 = _0x5bd227.left + _0x5bd227.width / 2,
      _0x4827c1 = _0x5bd227.top + _0x5bd227.height / 2,
      _0x47cb6e = this.transform["getMatrix"](),
      _0x454e6b = new a.Transform([
        _0x47cb6e[0],
        _0x47cb6e[1],
        _0x47cb6e[2],
        _0x47cb6e[3],
        _0x3be903,
        _0x4827c1,
      ]),
      _0x491a51 = this.getParent();
    return (
      this.isInGroup &&
      (_0x491a51 == null ? undefined : _0x491a51.classType) ===
        a.RENDER_CLASS_TYPE["GROUP"]
        ? _0x491a51.ancestorTransform["multiply"](_0x454e6b)
        : _0x454e6b
    )
      .invert()
      .applyPoint(_0x4d316c);
  }
  isHit(_0x10a450) {
    let _0x1c8688 = this.getInverseCoord(_0x10a450),
      _0x2ffd2c = this.width / 2,
      _0x4b4884 = this.height / 2;
    return (
      (_0x1c8688.x >= -_0x2ffd2c - this.strokeWidth / 2 &&
        _0x1c8688.x <= _0x2ffd2c + this.strokeWidth / 2 &&
        _0x1c8688.y >= -_0x4b4884 - this.strokeWidth / 2 &&
        _0x1c8688.y <= _0x4b4884 + this.strokeWidth / 2) ||
      this._isActiveOuterChromeHit(_0x1c8688)
    );
  }
  getCellTextRect(
    _0x2cdc74,
    _0x73aee6,
    _0xeb496e = this.width,
    _0x2c9795 = this.height,
  ) {
    var _0x2c0862;
    let _0x28e28c = this._getRenderTable();
    if (!_0x28e28c) return null;
    let _0x319cbb = this._resolveRenderModel(_0x28e28c),
      _0x38bb4e =
        (_0x2c0862 =
          this._resolveVisibleCellCache(_0x319cbb).cellByOrigin[_0x2cdc74]) ==
        null
          ? undefined
          : _0x2c0862[_0x73aee6];
    return _0x38bb4e ? Eo(_0x38bb4e, _0x319cbb, _0xeb496e, _0x2c9795) : null;
  }
  dispose() {
    (this._disposeTextRenderCaches(), super.dispose());
  }
  _resolveVisibleCellCache(_0x4cff43) {
    var _0x51699f;
    if (
      ((_0x51699f = this._visibleCellCache) == null
        ? undefined
        : _0x51699f.model) === _0x4cff43
    )
      return this._visibleCellCache;
    let _0x18d66f = _0x4cff43.cells["filter"]((_0x5f0afc) => !_0x5f0afc.hidden),
      _0x53555a = [],
      _0x517f05 = [];
    return (
      _0x18d66f.forEach((_0x1c1f73) => {
        (_0x517f05[_0x1c1f73.row] ??= [])[_0x1c1f73.column] = _0x1c1f73;
        let _0x2ceb04 = _0x1c1f73.row + Math.max(1, _0x1c1f73.rowSpan),
          _0x53d735 = _0x1c1f73.column + Math.max(1, _0x1c1f73.columnSpan);
        for (
          let _0x3b5638 = _0x1c1f73.row;
          _0x3b5638 < _0x2ceb04;
          _0x3b5638 += 1
        ) {
          let _0x1c28f3 = (_0x53555a[_0x3b5638] ??= []);
          for (
            let _0x42ba7f = _0x1c1f73.column;
            _0x42ba7f < _0x53d735;
            _0x42ba7f += 1
          )
            _0x1c28f3[_0x42ba7f] = _0x1c1f73;
        }
      }),
      (this._visibleCellCache = {
        cells: _0x18d66f,
        cellAtPosition: _0x53555a,
        cellByOrigin: _0x517f05,
        model: _0x4cff43,
      }),
      this._visibleCellCache
    );
  }
  hitTestCellAtScenePoint(
    _0x30ab3f,
    _0x673a93 = this.width,
    _0x24d3fa = this.height,
  ) {
    let _0x11507c = this._getRenderTable();
    if (!_0x11507c) return null;
    let _0x2b20ac = this._resolveRenderModel(_0x11507c),
      _0x34807c = this.getInverseCoord(_0x30ab3f);
    return Pi(
      _0x2b20ac,
      (_0x34807c.x + _0x673a93 / 2) * Q(_0x2b20ac.width / _0x673a93, 1),
      (_0x34807c.y + _0x24d3fa / 2) * Q(_0x2b20ac.height / _0x24d3fa, 1),
    );
  }
  hitTestControlAtScenePoint(
    _0x35dd2a,
    _0x19b2db = this.width,
    _0x24698b = this.height,
  ) {
    let _0x1203c5 = this._getRenderTable();
    if (!_0x1203c5) return null;
    let _0x493a95 = this._resolveRenderModel(_0x1203c5),
      _0x152fc1 = this.getInverseCoord(_0x35dd2a);
    return (0, n.hitTestSlideTableControl)(
      this._buildControlButtons(_0x493a95, _0x19b2db, _0x24698b, {
        showAll: true,
      }),
      _0x152fc1.x + _0x19b2db / 2,
      _0x152fc1.y + _0x24698b / 2,
    );
  }
  hitTestStructuralTriggerAtScenePoint(
    _0x4cd61b,
    _0x43e93b = this.width,
    _0x5568db = this.height,
  ) {
    let _0x37ade4 = this._getRenderTable();
    if (!_0x37ade4) return null;
    let _0x4c857e = this._resolveRenderModel(_0x37ade4),
      _0x3cfe69 = this.getInverseCoord(_0x4cd61b);
    return (0, n.hitTestSlideTableTrigger)(
      this._buildStructuralTriggers(
        _0x4c857e,
        _0x43e93b,
        _0x5568db,
        ro(_0x37ade4, _0x43e93b),
        io(_0x37ade4, _0x5568db),
      ),
      _0x3cfe69.x + _0x43e93b / 2,
      _0x3cfe69.y + _0x5568db / 2,
    );
  }
  hitTestFloatingStructuralTriggerAtScenePoint(
    _0x2e204e,
    _0x33b2da = this.width,
    _0x415ee2 = this.height,
  ) {
    let _0x51420a = this._getRenderTable();
    if (!_0x51420a) return null;
    let _0x2f5a12 = this._resolveRenderModel(_0x51420a),
      _0x57d518 = this.getInverseCoord(_0x2e204e);
    return (0, n.hitTestSlideTableFloatingControl)(
      this._buildStructuralTriggers(
        _0x2f5a12,
        _0x33b2da,
        _0x415ee2,
        ro(_0x51420a, _0x33b2da),
        io(_0x51420a, _0x415ee2),
      ),
      _0x57d518.x + _0x33b2da / 2,
      _0x57d518.y + _0x415ee2 / 2,
    );
  }
  render(_0x51c456, _0x4ba1a4) {
    if (!this.visible) return (this.makeDirty(false), this);
    let _0x39e92c = this.getRealBound();
    if (this.isRender(_0x4ba1a4)) {
      let {
        top: _0x2f8c99,
        left: _0x398edb,
        bottom: _0x163280,
        right: _0x26aa36,
      } = _0x4ba1a4.viewBound;
      if (
        _0x39e92c.left + _0x39e92c.width + this.strokeWidth < _0x398edb ||
        _0x26aa36 < _0x39e92c.left - this.strokeWidth ||
        _0x39e92c.top + _0x39e92c.height + this.strokeWidth < _0x2f8c99 ||
        _0x163280 < _0x39e92c.top - this.strokeWidth
      )
        return this;
    }
    let _0xc3f52 = this.transform["getMatrix"](),
      _0x36f0b1 = _0x39e92c.left + _0x39e92c.width / 2,
      _0x1173e2 = _0x39e92c.top + _0x39e92c.height / 2;
    return (
      _0x51c456.save(),
      _0x51c456.transform(
        _0xc3f52[0],
        _0xc3f52[1],
        _0xc3f52[2],
        _0xc3f52[3],
        _0x36f0b1,
        _0x1173e2,
      ),
      this._draw(_0x51c456, _0x4ba1a4, _0x39e92c.width, _0x39e92c.height),
      _0x51c456.restore(),
      this.makeDirty(false),
      this
    );
  }
  _draw(_0x2129ce, _0xeb48af, _0x1d9202, _0xb69779) {
    let _0x42ec56 = _0x1d9202 ?? this.width,
      _0x1aa077 = _0xb69779 ?? this.height,
      _0x39be77 = this._getRenderTable(),
      _0x392b78 = _0x39be77 ? this._resolveRenderModel(_0x39be77) : null,
      _0x442878 = ro(_0x39be77, _0x42ec56),
      _0x62048b = io(_0x39be77, _0x1aa077),
      _0x39b2b6 = co(_0x39be77),
      _0x4d47d1 = lo(_0x39be77);
    (_0x2129ce.save(),
      _0x2129ce.beginPath(),
      _o(
        _0x2129ce,
        -_0x42ec56 / 2,
        -_0x1aa077 / 2,
        _0x42ec56,
        _0x1aa077,
        (_0x39b2b6 == null ? undefined : _0x39b2b6.borderRadius) ?? 0,
      ),
      _0x2129ce.clip(),
      _0x392b78
        ? (this._drawCellFills(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077),
          this._drawCellTexts(
            _0x2129ce,
            _0x39be77,
            _0x392b78,
            _0x42ec56,
            _0x1aa077,
          ),
          this._drawCellBorders(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077),
          this._drawSelection(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077),
          this._drawCellHover(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077))
        : (this._drawRowFills(_0x2129ce, null, _0x62048b, _0x42ec56, _0x1aa077),
          this._drawGrid(
            _0x2129ce,
            _0x442878,
            _0x62048b,
            _0x42ec56,
            _0x1aa077,
          )),
      _0x2129ce.restore(),
      _0x39b2b6 && ho(_0x2129ce, _0x42ec56, _0x1aa077, _0x39b2b6),
      _0x4d47d1 &&
        go(_0x2129ce, _0x42ec56, _0x1aa077, _0x442878, _0x62048b, _0x4d47d1),
      _0x392b78 &&
        (this._drawStructuralHeaders(
          _0x2129ce,
          _0x42ec56,
          _0x1aa077,
          _0x442878,
          _0x62048b,
        ),
        this._drawInsertDots(
          _0x2129ce,
          _0x392b78,
          _0x42ec56,
          _0x1aa077,
          _0x442878,
          _0x62048b,
        ),
        this._drawInsertGuide(
          _0x2129ce,
          _0x42ec56,
          _0x1aa077,
          _0x442878,
          _0x62048b,
        ),
        this._drawReorderGuide(
          _0x2129ce,
          _0x42ec56,
          _0x1aa077,
          _0x442878,
          _0x62048b,
        ),
        this._drawTableHandle(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077),
        this._drawControls(_0x2129ce, _0x392b78, _0x42ec56, _0x1aa077)));
  }
  _getRenderTable() {
    return this._previewTable ?? this._table;
  }
  _resolveRenderModel(_0x4e37b2) {
    let _0x45b7ce = this._renderModelCache;
    if (
      (_0x45b7ce == null ? undefined : _0x45b7ce.table) === _0x4e37b2 &&
      _0x45b7ce.revision === _0x4e37b2.rev &&
      _0x45b7ce.palette === this._tableThemePalette &&
      _0x45b7ce.themes === this._tableThemes
    )
      return _0x45b7ce.model;
    let _0xf3a624 = (0, n.resolveSlideTableRenderModel)(_0x4e37b2, {
      themes: {
        ...(0, n.buildDefaultSlideTableThemes)(this._tableThemePalette),
        ...this._tableThemes,
      },
    });
    return (
      (this._renderModelCache = {
        model: _0xf3a624,
        palette: this._tableThemePalette,
        revision: _0x4e37b2.rev,
        table: _0x4e37b2,
        themes: this._tableThemes,
      }),
      _0xf3a624
    );
  }
  _drawRowFills(_0x104aae, _0x4b901d, _0x52f3ba, _0x3397c2, _0x1df6ef) {
    let _0xe1e308 = -_0x1df6ef / 2;
    _0x52f3ba.forEach((_0x3fc7b4, _0x209adf) => {
      (_0x104aae.beginPath(),
        _0x104aae.rect(-_0x3397c2 / 2, _0xe1e308, _0x3397c2, _0x3fc7b4),
        (_0x104aae.fillStyle = vo(_0x4b901d, _0x209adf)),
        _0x104aae.fill(),
        (_0xe1e308 += _0x3fc7b4));
    });
  }
  _drawCellFills(_0x4a73d4, _0x35e27e, _0x439c66, _0xadf6b) {
    let _0x13d33d = this._getRenderTable(),
      _0x4dd58c = Q(_0x439c66 / _0x35e27e.width, 1),
      _0x248065 = Q(_0xadf6b / _0x35e27e.height, 1);
    _0x35e27e.cells["forEach"]((_0x225a0a) => {
      if (_0x225a0a.hidden) return;
      let _0x4f501a = -_0x439c66 / 2 + _0x225a0a.bounds["left"] * _0x4dd58c,
        _0x7871bf = -_0xadf6b / 2 + _0x225a0a.bounds["top"] * _0x248065,
        _0x9769cd = _0x225a0a.bounds["width"] * _0x4dd58c,
        _0x3bd12f = _0x225a0a.bounds["height"] * _0x248065,
        _0x165f47 = _0x225a0a.style["fill"]
          ? yo(_0x225a0a.style["fill"])
          : vo(_0x13d33d, _0x225a0a.row);
      _0x165f47 &&
        (_0x4a73d4.beginPath(),
        _0x4a73d4.rect(_0x4f501a, _0x7871bf, _0x9769cd, _0x3bd12f),
        (_0x4a73d4.fillStyle = _0x165f47),
        _0x4a73d4.fill());
    });
  }
  _drawCellTexts(_0xd0cd33, _0x291922, _0x288a21, _0x584637, _0x8f6e36) {
    _0x288a21.cells["forEach"]((_0x69d335) => {
      var _0x3412d9, _0x281b2c;
      if (
        _0x69d335.hidden ||
        this._isEditingCell(_0x69d335.row, _0x69d335.column)
      )
        return;
      let _0x1156ed = Eo(_0x69d335, _0x288a21, _0x584637, _0x8f6e36),
        _0x366b0a =
          (_0x3412d9 = _0x291922.rows[_0x69d335.row]) == null ||
          (_0x3412d9 = _0x3412d9.cells[_0x69d335.column]) == null
            ? undefined
            : _0x3412d9.textData;
      !_0x366b0a ||
        !this._localeService ||
        Wa(
          _0xd0cd33,
          {
            key: this.oKey + "-cell-" + _0x69d335.row + "-" + _0x69d335.column,
            documentData: _0x366b0a,
            left: -_0x584637 / 2 + _0x1156ed.left,
            top: -_0x8f6e36 / 2 + _0x1156ed.top,
            width: _0x1156ed.width,
            height: _0x1156ed.height,
            localeService: this._localeService,
            horizontalAlign: Qt(_0x366b0a),
            verticalAlign:
              nn(_0x69d335.style["verticalAlign"]) ??
              ((_0x281b2c = _0x366b0a.documentStyle) == null ||
              (_0x281b2c = _0x281b2c.renderConfig) == null
                ? undefined
                : _0x281b2c.verticalAlign),
            isHorizontal:
              _0x69d335.style["textDirection"] !==
                n.SlideTableTextDirectionEnum["Vertical"] &&
              _0x69d335.style["textDirection"] !==
                n.SlideTableTextDirectionEnum["Vertical270"],
            wrapStrategy: i.WrapStrategy["WRAP"],
            clip: true,
            cacheKey: _0x291922.rev,
            viewportHeight: _0x1156ed.height,
          },
          this._getTextRenderCache(_0x69d335.row, _0x69d335.column),
        );
    });
  }
  _isEditingCell(_0x192a6b, _0x5a7cb5) {
    var _0x73a464;
    return (
      ((_0x73a464 = this._editingCell) == null ? undefined : _0x73a464.row) ===
        _0x192a6b && this._editingCell["column"] === _0x5a7cb5
    );
  }
  _getTextRenderCache(_0x2d65aa, _0x2ff5e0) {
    let _0x1b6a2c = _0x2d65aa + ":" + _0x2ff5e0,
      _0x6f9e8f = this._textRenderCaches["get"](_0x1b6a2c);
    if (_0x6f9e8f) return _0x6f9e8f;
    let _0x4effd1 = {};
    return (this._textRenderCaches["set"](_0x1b6a2c, _0x4effd1), _0x4effd1);
  }
  _disposeTextRenderCaches() {
    (this._textRenderCaches["forEach"]((_0x10755b) => Ua(_0x10755b)),
      this._textRenderCaches["clear"]());
  }
  _drawCellBorders(_0x4afc8b, _0x174833, _0x1a5b4d, _0x1755a3) {
    let _0x25a781 = Q(_0x1a5b4d / _0x174833.width, 1),
      _0x19e721 = Q(_0x1755a3 / _0x174833.height, 1),
      { cells: _0x235f10, cellAtPosition: _0x2b2214 } =
        this._resolveVisibleCellCache(_0x174833);
    _0x235f10.forEach((_0x2cf029) => {
      var _0x11f207, _0xf7b370, _0x5a8309, _0x57f44e;
      let _0x553f43 = -_0x1a5b4d / 2 + _0x2cf029.bounds["left"] * _0x25a781,
        _0x3b6273 = -_0x1755a3 / 2 + _0x2cf029.bounds["top"] * _0x19e721,
        _0x575e98 = _0x553f43 + _0x2cf029.bounds["width"] * _0x25a781,
        _0x18b117 = _0x3b6273 + _0x2cf029.bounds["height"] * _0x19e721,
        _0x1e0e59 = _0x2cf029.style["borders"],
        _0xa30ab6 =
          (_0x11f207 = _0x2b2214[_0x2cf029.row]) == null
            ? undefined
            : _0x11f207[_0x2cf029.column + _0x2cf029.columnSpan],
        _0xa73ac8 =
          (_0xf7b370 = _0x2b2214[_0x2cf029.row + _0x2cf029.rowSpan]) == null
            ? undefined
            : _0xf7b370[_0x2cf029.column],
        _0x1d59a3 = _0x1e0e59 == null ? undefined : _0x1e0e59.top,
        _0x30a9b5 = (0, n.resolveSlideTableCellBoundaryBorder)(
          _0x1e0e59 == null ? undefined : _0x1e0e59.right,
          _0xa30ab6 == null || (_0x5a8309 = _0xa30ab6.style["borders"]) == null
            ? undefined
            : _0x5a8309.left,
        ),
        _0x580d84 = (0, n.resolveSlideTableCellBoundaryBorder)(
          _0x1e0e59 == null ? undefined : _0x1e0e59.bottom,
          _0xa73ac8 == null || (_0x57f44e = _0xa73ac8.style["borders"]) == null
            ? undefined
            : _0x57f44e.top,
        ),
        _0x3ba39b = _0x1e0e59 == null ? undefined : _0x1e0e59.left;
      if (_0x2cf029.row === 0) {
        let _0x8d378d = _0x3b6273 + xo(_0x1d59a3);
        bo(_0x4afc8b, _0x1d59a3, _0x553f43, _0x8d378d, _0x575e98, _0x8d378d);
      }
      {
        let _0x530d7f = _0xa30ab6 ? _0x575e98 : _0x575e98 - xo(_0x30a9b5);
        bo(_0x4afc8b, _0x30a9b5, _0x530d7f, _0x3b6273, _0x530d7f, _0x18b117);
      }
      {
        let _0x526beb = _0xa73ac8 ? _0x18b117 : _0x18b117 - xo(_0x580d84);
        bo(_0x4afc8b, _0x580d84, _0x553f43, _0x526beb, _0x575e98, _0x526beb);
      }
      if (_0x2cf029.column === 0) {
        let _0x17c73b = _0x553f43 + xo(_0x3ba39b);
        bo(_0x4afc8b, _0x3ba39b, _0x17c73b, _0x3b6273, _0x17c73b, _0x18b117);
      }
    });
  }
  _drawGrid(_0x45d241, _0x152508, _0x3eb908, _0x7f46ca, _0x392b84) {
    let _0x2329cb = -_0x7f46ca / 2,
      _0x442a90 = -_0x392b84 / 2,
      _0x28ed24 = _0x7f46ca / 2,
      _0x46495c = _0x392b84 / 2;
    (_0x45d241.beginPath(),
      _0x45d241.setLineDash([]),
      (_0x45d241.strokeStyle = Ka),
      (_0x45d241.lineWidth = 1));
    let _0x4b7d6a = _0x2329cb;
    _0x152508.slice(0, -1).forEach((_0x4819fe) => {
      ((_0x4b7d6a += _0x4819fe),
        _0x45d241.moveTo(_0x4b7d6a, _0x442a90),
        _0x45d241.lineTo(_0x4b7d6a, _0x46495c));
    });
    let _0x244ebf = _0x442a90;
    (_0x3eb908.slice(0, -1).forEach((_0x2e2d25) => {
      ((_0x244ebf += _0x2e2d25),
        _0x45d241.moveTo(_0x2329cb, _0x244ebf),
        _0x45d241.lineTo(_0x28ed24, _0x244ebf));
    }),
      _0x45d241.stroke(),
      this._drawTableOutline(
        _0x45d241,
        _0x2329cb,
        _0x442a90,
        _0x7f46ca,
        _0x392b84,
      ));
  }
  _drawTableOutline(_0x3c557a, _0x767072, _0x332ae8, _0x2f9733, _0x478077) {
    (_0x3c557a.beginPath(),
      (_0x3c557a.strokeStyle = Ga),
      (_0x3c557a.lineWidth = 1.5),
      _0x3c557a.rect(_0x767072, _0x332ae8, _0x2f9733, _0x478077),
      _0x3c557a.stroke());
  }
  _drawSelection(_0xe5192a, _0x454bcd, _0x6209b7, _0x4dac13) {
    var _0x4bcd92, _0x46969d;
    if (
      !((_0x4bcd92 = this._selection) != null && _0x4bcd92.ranges["length"]) ||
      this._selection["kind"] === "text"
    )
      return;
    let _0x18ae04 =
        ((_0x46969d = this._themeService) == null
          ? undefined
          : _0x46969d.getColorFromTheme("primary.600")) ?? "#409cff",
      _0x2d1db8 = new i["ColorKit"](_0x18ae04).setAlpha(0.07).toRgbString(),
      _0x1daef5 = Q(_0x6209b7 / _0x454bcd.width, 1),
      _0x37d473 = Q(_0x4dac13 / _0x454bcd.height, 1);
    if (this._selection["kind"] === "table") {
      (_0xe5192a.beginPath(),
        _0xe5192a.rect(-_0x6209b7 / 2, -_0x4dac13 / 2, _0x6209b7, _0x4dac13),
        (_0xe5192a.fillStyle = _0x2d1db8),
        _0xe5192a.fill(),
        wo(
          _0xe5192a,
          -_0x6209b7 / 2,
          -_0x4dac13 / 2,
          _0x6209b7,
          _0x4dac13,
          _0x18ae04,
          _0x6209b7,
          _0x4dac13,
        ));
      return;
    }
    let _0x167090 = _0x454bcd.cells["filter"]((_0x4a7420) => !_0x4a7420.hidden);
    (_0x167090
      .filter((_0x2eb2e6) => {
        var _0x5834ea;
        return to(
          _0x2eb2e6,
          ((_0x5834ea = this._selection) == null
            ? undefined
            : _0x5834ea.ranges) ?? [],
        );
      })
      .forEach((_0x3a7625) => {
        (_0xe5192a.beginPath(),
          _0xe5192a.rect(
            -_0x6209b7 / 2 + _0x3a7625.bounds["left"] * _0x1daef5,
            -_0x4dac13 / 2 + _0x3a7625.bounds["top"] * _0x37d473,
            _0x3a7625.bounds["width"] * _0x1daef5,
            _0x3a7625.bounds["height"] * _0x37d473,
          ),
          (_0xe5192a.fillStyle = _0x2d1db8),
          _0xe5192a.fill());
      }),
      this._selection["ranges"].forEach((_0x272565) => {
        let _0x1dfb72 = _0x167090.filter((_0x1eafad) =>
          to(_0x1eafad, [_0x272565]),
        );
        if (!_0x1dfb72.length) return;
        let _0x5ace3f =
            -_0x6209b7 / 2 +
            Math.min(
              ..._0x1dfb72.map((_0x3d642e) => _0x3d642e.bounds["left"]),
            ) *
              _0x1daef5,
          _0x4263e3 =
            -_0x4dac13 / 2 +
            Math.min(..._0x1dfb72.map((_0x31cc1e) => _0x31cc1e.bounds["top"])) *
              _0x37d473,
          _0x2003ab =
            -_0x6209b7 / 2 +
            Math.max(
              ..._0x1dfb72.map(
                (_0x49ecec) =>
                  _0x49ecec.bounds["left"] + _0x49ecec.bounds["width"],
              ),
            ) *
              _0x1daef5,
          _0x6377b9 =
            -_0x4dac13 / 2 +
            Math.max(
              ..._0x1dfb72.map(
                (_0x715569) =>
                  _0x715569.bounds["top"] + _0x715569.bounds["height"],
              ),
            ) *
              _0x37d473;
        wo(
          _0xe5192a,
          _0x5ace3f,
          _0x4263e3,
          _0x2003ab - _0x5ace3f,
          _0x6377b9 - _0x4263e3,
          _0x18ae04,
          _0x6209b7,
          _0x4dac13,
        );
      }));
  }
  _drawCellHover(_0x19cdf6, _0x2e90d0, _0x31a15c, _0x387bd8) {
    var _0x51c01f;
    if (!this._cellHover) return;
    let _0x98c6c2 =
      (_0x51c01f =
        this._resolveVisibleCellCache(_0x2e90d0).cellAtPosition[
          this._cellHover["row"]
        ]) == null
        ? undefined
        : _0x51c01f[this._cellHover["column"]];
    if (!_0x98c6c2) return;
    let _0x5dca34 = Q(_0x31a15c / _0x2e90d0.width, 1),
      _0x5b0345 = Q(_0x387bd8 / _0x2e90d0.height, 1);
    (_0x19cdf6.beginPath(),
      _0x19cdf6.rect(
        -_0x31a15c / 2 + _0x98c6c2.bounds["left"] * _0x5dca34,
        -_0x387bd8 / 2 + _0x98c6c2.bounds["top"] * _0x5b0345,
        _0x98c6c2.bounds["width"] * _0x5dca34,
        _0x98c6c2.bounds["height"] * _0x5b0345,
      ),
      (_0x19cdf6.strokeStyle = "rgba(64, 156, 255, 0.42)"),
      (_0x19cdf6.lineWidth = 1),
      _0x19cdf6.stroke());
  }
  _drawControls(_0x1ecd07, _0x372185, _0x4c0396, _0x3debde) {
    this._shouldDrawControls() &&
      this._buildControlButtons(_0x372185, _0x4c0396, _0x3debde, {
        showAll: true,
      })
        .filter((_0x61b21d) => _0x61b21d.kind !== "table-handle")
        .forEach((_0x4b8612) => {
          let _0x4bd470 = -_0x4c0396 / 2 + _0x4b8612.rect["x"],
            _0x4c8784 = -_0x3debde / 2 + _0x4b8612.rect["y"],
            _0x478d32 = this._isControlHovered(_0x4b8612),
            _0x48f16c = this._isControlSelected(_0x4b8612);
          (_0x1ecd07.beginPath(),
            _0x1ecd07.rect(
              _0x4bd470,
              _0x4c8784,
              _0x4b8612.rect["width"],
              _0x4b8612.rect["height"],
            ),
            (_0x1ecd07.fillStyle = _0x48f16c ? "#d8e8ff" : _0x478d32 ? Xa : Ya),
            _0x1ecd07.fill(),
            (_0x1ecd07.strokeStyle = _0x478d32 || _0x48f16c ? Qa : Za),
            (_0x1ecd07.lineWidth = 1),
            _0x1ecd07.stroke());
        });
  }
  _drawStructuralHeaders(
    _0x2945f7,
    _0xbde8a8,
    _0x3aebd7,
    _0x152f2a,
    _0x538cd9,
  ) {
    if (!this._shouldDrawStructuralHeaders()) return;
    let _0x486057 = uo(this._getRenderTable());
    if (_0x486057.rows) {
      let _0x58f5b3 = -_0x3aebd7 / 2;
      _0x538cd9.forEach((_0x90e672, _0x23104e) => {
        (this._drawStructuralHeaderRect(_0x2945f7, {
          kind: "row",
          index: _0x23104e,
          x: -_0xbde8a8 / 2 - 10,
          y: _0x58f5b3,
          width: 10,
          height: _0x90e672,
        }),
          (_0x58f5b3 += _0x90e672));
      });
    }
    if (_0x486057.columns) {
      let _0x2b6c3c = -_0xbde8a8 / 2;
      _0x152f2a.forEach((_0x4d732b, _0x126c0c) => {
        (this._drawStructuralHeaderRect(_0x2945f7, {
          kind: "column",
          index: _0x126c0c,
          x: _0x2b6c3c,
          y: -_0x3aebd7 / 2 - 10,
          width: _0x4d732b,
          height: 10,
        }),
          (_0x2b6c3c += _0x4d732b));
      });
    }
  }
  _drawStructuralHeaderRect(_0x2b3ebf, _0x2b901c) {
    (_0x2b3ebf.beginPath(),
      _0x2b3ebf.rect(
        _0x2b901c.x,
        _0x2b901c.y,
        _0x2b901c.width,
        _0x2b901c.height,
      ),
      (_0x2b3ebf.fillStyle = this._isStructuralRangeSelected(
        _0x2b901c.kind,
        _0x2b901c.index,
      )
        ? "#1a73e8"
        : this._isStructuralHeaderHovered(_0x2b901c.kind, _0x2b901c.index)
          ? "#d2e3fc"
          : "#f1f3f4"),
      _0x2b3ebf.fill());
  }
  _drawInsertDots(
    _0x4e8025,
    _0x318016,
    _0x118dc4,
    _0x1cfadd,
    _0x10fa59,
    _0x4d634b,
  ) {
    if (!this._shouldDrawInsertDots()) return;
    let _0x57b949 = this._getStructuralControlZoom();
    this._buildStructuralTriggers(
      _0x318016,
      _0x118dc4,
      _0x1cfadd,
      _0x10fa59,
      _0x4d634b,
    )
      .filter(
        (_0x4785fc) =>
          _0x4785fc.kind === "row-insert-dot" ||
          _0x4785fc.kind === "column-insert-dot",
      )
      .forEach((_0x566c32) => {
        let _0x656477 =
            -_0x118dc4 / 2 + _0x566c32.rect["x"] + _0x566c32.rect["width"] / 2,
          _0x6fba54 =
            -_0x1cfadd / 2 + _0x566c32.rect["y"] + _0x566c32.rect["height"] / 2,
          _0x9fd16f = this._isHoveredStructuralTrigger(_0x566c32),
          _0x36257d = _0x9fd16f
            ? Math.min(_0x566c32.rect["width"], _0x566c32.rect["height"]) / 2
            : 2 / _0x57b949;
        if (
          (_0x4e8025.beginPath(),
          _0x4e8025.arc(_0x656477, _0x6fba54, _0x36257d, 0, Math.PI * 2),
          (_0x4e8025.fillStyle = _0x9fd16f ? Ja : "rgba(95, 99, 104, 0.45)"),
          _0x4e8025.fill(),
          !_0x9fd16f)
        )
          return;
        (_0x4e8025.beginPath(),
          (_0x4e8025.strokeStyle = eo),
          (_0x4e8025.lineWidth = 1.5 / _0x57b949));
        let _0x18b962 = 3 / _0x57b949;
        (_0x4e8025.moveTo(_0x656477 - _0x18b962, _0x6fba54),
          _0x4e8025.lineTo(_0x656477 + _0x18b962, _0x6fba54),
          _0x4e8025.moveTo(_0x656477, _0x6fba54 - _0x18b962),
          _0x4e8025.lineTo(_0x656477, _0x6fba54 + _0x18b962),
          _0x4e8025.stroke());
      });
  }
  _drawInsertGuide(_0x15c093, _0x9929b6, _0x596f9c, _0x2daf46, _0x5240da) {
    var _0x1784e4;
    !((_0x1784e4 = this._controlState) != null && _0x1784e4.visible) ||
      !this._controlState["insertGuide"] ||
      (mo(this._controlState["insertGuide"], uo(this._getRenderTable())) &&
        this._drawGuideLine(
          _0x15c093,
          this._controlState["insertGuide"],
          _0x9929b6,
          _0x596f9c,
          _0x2daf46,
          _0x5240da,
        ));
  }
  _drawReorderGuide(_0x441a94, _0x23ebfc, _0x278223, _0x5ad7ce, _0x1b2f82) {
    var _0xbc6b8d;
    !((_0xbc6b8d = this._controlState) != null && _0xbc6b8d.visible) ||
      !this._controlState["reorderGuide"] ||
      (mo(this._controlState["reorderGuide"], uo(this._getRenderTable())) &&
        this._drawGuideLine(
          _0x441a94,
          this._controlState["reorderGuide"],
          _0x23ebfc,
          _0x278223,
          _0x5ad7ce,
          _0x1b2f82,
        ));
  }
  _drawGuideLine(
    _0x1c9032,
    _0x189b41,
    _0x6427b9,
    _0x418842,
    _0x26d3a4,
    _0x92b890,
  ) {
    let _0x359b1b = -_0x6427b9 / 2,
      _0x512f59 = -_0x418842 / 2;
    if (
      (_0x1c9032.beginPath(),
      _0x1c9032.setLineDash([]),
      (_0x1c9032.strokeStyle = Ja),
      (_0x1c9032.lineWidth = 2),
      _0x189b41.kind === "row")
    ) {
      let _0x397931 = _0x512f59 + Co(_0x92b890, _0x189b41.index);
      (_0x1c9032.moveTo(_0x359b1b, _0x397931),
        _0x1c9032.lineTo(_0x359b1b + _0x6427b9, _0x397931));
    } else {
      let _0x1e5067 = _0x359b1b + Co(_0x26d3a4, _0x189b41.index);
      (_0x1c9032.moveTo(_0x1e5067, _0x512f59),
        _0x1c9032.lineTo(_0x1e5067, _0x512f59 + _0x418842));
    }
    _0x1c9032.stroke();
  }
  _drawTableHandle(_0x1deaf5, _0x4fe891, _0x469799, _0x162616) {
    var _0x24aa68;
    if (!this._selection) return;
    let _0x441b55 = this._buildControlButtons(
      _0x4fe891,
      _0x469799,
      _0x162616,
    ).find((_0x22e3d5) => _0x22e3d5.kind === "table-handle");
    if (!_0x441b55) return;
    let { rect: _0x4b58f4 } = _0x441b55,
      _0x3aebd2 = -_0x469799 / 2 + _0x4b58f4.x,
      _0x196723 = -_0x162616 / 2 + _0x4b58f4.y,
      _0x356ffd =
        ((_0x24aa68 = this._controlHover) == null
          ? undefined
          : _0x24aa68.kind) === "table-handle";
    (Oo(
      _0x1deaf5,
      _0x3aebd2,
      _0x196723,
      _0x4b58f4.width,
      _0x4b58f4.height,
      _0x356ffd,
    ),
      Do(
        _0x1deaf5,
        _0x3aebd2,
        _0x196723,
        _0x4b58f4.width,
        _0x4b58f4.height,
        _0x356ffd ? eo : $a,
      ));
  }
  _shouldDrawControls() {
    var _0x35897c, _0x3a3a1e;
    return (
      !!((_0x35897c = this._selection) != null && _0x35897c.ranges["length"]) ||
      !!this._controlHover ||
      !!((_0x3a3a1e = this._controlState) != null && _0x3a3a1e.visible)
    );
  }
  _shouldDrawStructuralHeaders() {
    var _0x1e9e2e, _0x5abf4b, _0x299a71;
    return (
      !!this._selection ||
      !!((_0x1e9e2e = this._controlState) != null && _0x1e9e2e.visible) ||
      !!(
        (_0x5abf4b = this._controlState) != null && _0x5abf4b.hoveredTrigger
      ) ||
      !!(
        (_0x299a71 = this._controlState) != null &&
        _0x299a71.selectedStructuralRange
      )
    );
  }
  _shouldDrawInsertDots() {
    var _0x245864;
    return (
      !!this._selection ||
      !!((_0x245864 = this._controlState) != null && _0x245864.visible)
    );
  }
  _isActiveOuterChromeHit(_0x3819a1) {
    var _0x2a4934;
    if (
      !this._selection &&
      !((_0x2a4934 = this._controlState) != null && _0x2a4934.visible)
    )
      return false;
    let _0x107f89 = this.width,
      _0x3cfaec = this.height,
      _0x18e128 = this._getRenderTable();
    if (!_0x18e128) return false;
    let _0x24f2a4 = {
        x: _0x3819a1.x + _0x107f89 / 2,
        y: _0x3819a1.y + _0x3cfaec / 2,
      },
      _0x502474 = this._resolveRenderModel(_0x18e128),
      _0x25430b = this._buildStructuralTriggers(
        _0x502474,
        _0x107f89,
        _0x3cfaec,
        ro(_0x18e128, _0x107f89),
        io(_0x18e128, _0x3cfaec),
      ),
      _0x389ddd = (0, n.hitTestSlideTableTrigger)(
        _0x25430b,
        _0x24f2a4.x,
        _0x24f2a4.y,
      );
    return (_0x389ddd && jo(_0x389ddd)) ||
      _0x25430b.some((_0x4139fc) =>
        this._isPointInStructuralTriggerEnvelope(
          _0x4139fc,
          _0x24f2a4.x,
          _0x24f2a4.y,
        ),
      )
      ? true
      : !!(0, n.hitTestSlideTableControl)(
          this._buildControlButtons(_0x502474, _0x107f89, _0x3cfaec).filter(
            (_0x9eb53) => _0x9eb53.kind === "table-handle",
          ),
          _0x24f2a4.x,
          _0x24f2a4.y,
        );
  }
  _buildControlButtons(_0x3246e0, _0x32a343, _0x296ab1, _0x4ee674) {
    let _0x8531ab = uo(this._getRenderTable()),
      _0x526b2e = (0, n.buildSlideTableControls)(
        _0x3246e0,
        _0x32a343,
        _0x296ab1,
        _0x4ee674,
      ).filter((_0x3eddb2) => fo(_0x3eddb2, _0x8531ab));
    return this._controlButtonMode === "all"
      ? _0x526b2e
      : _0x526b2e.filter((_0x4a5190) => _0x4a5190.kind === "table-handle");
  }
  _isPointInStructuralTriggerEnvelope(_0x2ae2f2, _0x54a638, _0x3a2c52) {
    return jo(_0x2ae2f2)
      ? (0, n.isPointInRect)(_0x54a638, _0x3a2c52, _0x2ae2f2.rect)
      : false;
  }
  _isControlHovered(_0x3cfe0d) {
    return !this._controlHover || _0x3cfe0d.kind !== this._controlHover["kind"]
      ? false
      : _0x3cfe0d.kind === "row-select"
        ? _0x3cfe0d.row === this._controlHover["row"]
        : _0x3cfe0d.kind !== "column-select" ||
          _0x3cfe0d.column === this._controlHover["column"];
  }
  _isControlSelected(_0x10095c) {
    return this._selection
      ? _0x10095c.kind === "table-handle"
        ? this._selection["kind"] === "table"
        : _0x10095c.kind === "row-select"
          ? this._selection["kind"] === "row" &&
            _0x10095c.row !== undefined &&
            this._selection["ranges"].some(
              (_0x2e1554) =>
                _0x10095c.row >=
                  Math.min(_0x2e1554.startRow, _0x2e1554.endRow) &&
                _0x10095c.row <= Math.max(_0x2e1554.startRow, _0x2e1554.endRow),
            )
          : _0x10095c.kind === "column-select" &&
            this._selection["kind"] === "column" &&
            _0x10095c.column !== undefined &&
            this._selection["ranges"].some(
              (_0x3d9084) =>
                _0x10095c.column >=
                  Math.min(_0x3d9084.startColumn, _0x3d9084.endColumn) &&
                _0x10095c.column <=
                  Math.max(_0x3d9084.startColumn, _0x3d9084.endColumn),
            )
      : false;
  }
  _isStructuralHeaderHovered(_0x55289b, _0xc69a31) {
    var _0x4ec81b;
    let _0x2b53bd =
      (_0x4ec81b = this._controlState) == null
        ? undefined
        : _0x4ec81b.hoveredTrigger;
    return _0x55289b === "row"
      ? (_0x2b53bd == null ? undefined : _0x2b53bd.kind) === "row-header" &&
          _0x2b53bd.row === _0xc69a31
      : (_0x2b53bd == null ? undefined : _0x2b53bd.kind) === "column-header" &&
          _0x2b53bd.column === _0xc69a31;
  }
  _isHoveredStructuralTrigger(_0x914eb1) {
    var _0x2bf4f7;
    let _0x54318b =
      (_0x2bf4f7 = this._controlState) == null
        ? undefined
        : _0x2bf4f7.hoveredTrigger;
    return !_0x54318b || _0x54318b.kind !== _0x914eb1.kind
      ? false
      : _0x914eb1.kind === "row-header" || _0x914eb1.kind === "row-insert-dot"
        ? _0x54318b.row !== undefined && _0x54318b.row === _0x914eb1.row
        : _0x914eb1.kind === "column-header" ||
            _0x914eb1.kind === "column-insert-dot"
          ? _0x54318b.column !== undefined &&
            _0x54318b.column === _0x914eb1.column
          : false;
  }
  _isStructuralRangeSelected(_0x4d16b1, _0x1697f3) {
    var _0x16a611;
    let _0xc4b8ce =
      (_0x16a611 = this._controlState) == null
        ? undefined
        : _0x16a611.selectedStructuralRange;
    return !_0xc4b8ce || _0xc4b8ce.kind !== _0x4d16b1
      ? false
      : _0x1697f3 >= Math.min(_0xc4b8ce.start, _0xc4b8ce.end) &&
          _0x1697f3 <= Math.max(_0xc4b8ce.start, _0xc4b8ce.end);
  }
  _buildStructuralTriggers(
    _0x2254b2,
    _0x4b20d4,
    _0x3d2127,
    _0x443a30,
    _0x36067a,
  ) {
    var _0x2a8ede;
    let _0x3c6770 = uo(this._getRenderTable());
    return (0, n.buildSlideTableTriggers)({
      tableId:
        (_0x2a8ede = this._getRenderTable()) == null ? undefined : _0x2a8ede.id,
      tableWidth: _0x4b20d4,
      tableHeight: _0x3d2127,
      rowHeights: _0x36067a,
      columnWidths: _0x443a30,
      mergedCells: _0x2254b2.cells["filter"](
        (_0x15e1a6) =>
          !_0x15e1a6.hidden &&
          (_0x15e1a6.rowSpan > 1 || _0x15e1a6.columnSpan > 1),
      ).map((_0x5eff2b) => ({
        startRow: _0x5eff2b.row,
        endRow: _0x5eff2b.row + _0x5eff2b.rowSpan - 1,
        startColumn: _0x5eff2b.column,
        endColumn: _0x5eff2b.column + _0x5eff2b.columnSpan - 1,
      })),
      zoom: this._getStructuralControlZoom(),
    }).filter((_0x33b30a) => po(_0x33b30a, _0x3c6770));
  }
  _getStructuralControlZoom() {
    var _0xc9c0e0, _0x3349e7;
    let _0x45b6c7 =
      (_0xc9c0e0 = this.getScene()) == null ||
      (_0x3349e7 = _0xc9c0e0.getAncestorScale) == null
        ? undefined
        : _0x3349e7.call(_0xc9c0e0);
    return Q(
      (_0x45b6c7 == null ? undefined : _0x45b6c7.scaleX) ??
        (_0x45b6c7 == null ? undefined : _0x45b6c7.scaleY),
      1,
    );
  }
};
function ro(_0x295a42, _0x3523a9) {
  let _0x263483 =
    _0x295a42 == null
      ? undefined
      : _0x295a42.columns["map"]((_0x538f53) => _0x538f53.width).filter(
          (_0x284744) => _0x284744 > 0,
        );
  return ao(
    _0x263483 != null && _0x263483.length ? _0x263483 : [1, 1, 1],
    _0x3523a9,
  );
}
function io(_0x3d29fa, _0x4591e6) {
  let _0x4bf557 =
    _0x3d29fa == null
      ? undefined
      : _0x3d29fa.rows["map"]((_0x18b57d) => _0x18b57d.height ?? 24).filter(
          (_0xbacf2c) => _0xbacf2c > 0,
        );
  return ao(
    _0x4bf557 != null && _0x4bf557.length ? _0x4bf557 : [1, 1, 1],
    _0x4591e6,
  );
}
function ao(_0xcc462f, _0x37e3f6) {
  let _0xa72757 = _0xcc462f.reduce(
    (_0x49a54f, _0x396d02) => _0x49a54f + _0x396d02,
    0,
  );
  return _0xa72757 <= 0
    ? [_0x37e3f6]
    : _0xcc462f.map((_0x40eb86) => (_0x40eb86 / _0xa72757) * _0x37e3f6);
}
function oo(_0x58f6ef, _0x3d648b = 0) {
  return typeof _0x58f6ef == "number" && Number.isFinite(_0x58f6ef)
    ? _0x58f6ef
    : _0x3d648b;
}
function Q(_0xa7ba28, _0xd5ef49) {
  let _0x4b3704 = oo(_0xa7ba28, _0xd5ef49);
  return _0x4b3704 > 0 ? _0x4b3704 : _0xd5ef49;
}
function so(_0x4f0538) {
  return _0x4f0538 && typeof _0x4f0538 == "object" ? _0x4f0538 : null;
}
function co(_0x1512ef) {
  let _0x462ed3 = so(_0x1512ef == null ? undefined : _0x1512ef.custom);
  if (!_0x462ed3) return null;
  let _0x113a56 = oo(_0x462ed3.outerBorderRadius, 0);
  return _0x113a56 > 0 ||
    typeof _0x462ed3.outerBorderWidth == "number" ||
    typeof _0x462ed3.outerBorderColor == "string"
    ? {
        borderRadius: Math.max(0, _0x113a56),
        borderWidth: Q(_0x462ed3.outerBorderWidth, 1.5),
        borderColor:
          typeof _0x462ed3.outerBorderColor == "string"
            ? _0x462ed3.outerBorderColor
            : Ga,
      }
    : null;
}
function lo(_0x19eccd) {
  let _0x11d034 = so(_0x19eccd == null ? undefined : _0x19eccd.custom);
  if (!_0x11d034) return null;
  let _0x43c689 = so(_0x11d034.sequenceFrame);
  return _0x43c689
    ? {
        titleRow: Math.max(0, Math.floor(oo(_0x43c689.titleRow, 0))),
        titleColumn: Math.max(0, Math.floor(oo(_0x43c689.titleColumn, 0))),
        notchWidth: Q(_0x43c689.notchWidth, 24),
        borderWidth: Q(_0x11d034.outerBorderWidth, 1.5),
        borderColor:
          typeof _0x11d034.outerBorderColor == "string"
            ? _0x11d034.outerBorderColor
            : Ga,
      }
    : null;
}
function uo(_0x230d66) {
  let _0x3225f5 = so(_0x230d66 == null ? undefined : _0x230d66.custom);
  if (!_0x3225f5) return { rows: true, columns: true };
  let _0x4f5bf2 = so(_0x3225f5.structuralControls);
  return _0x4f5bf2
    ? { rows: _0x4f5bf2.rows !== false, columns: _0x4f5bf2.columns !== false }
    : { rows: true, columns: true };
}
function fo(_0x51624b, _0x2eff1d) {
  return _0x51624b.kind === "row-select"
    ? _0x2eff1d.rows
    : _0x51624b.kind !== "column-select" || _0x2eff1d.columns;
}
function po(_0x4184ed, _0x5a40fa) {
  return _0x4184ed.kind === "row-header" ||
    _0x4184ed.kind === "row-insert-dot" ||
    _0x4184ed.kind === "resize-row"
    ? _0x5a40fa.rows
    : _0x4184ed.kind === "column-header" ||
        _0x4184ed.kind === "column-insert-dot" ||
        _0x4184ed.kind === "resize-column"
      ? _0x5a40fa.columns
      : true;
}
function mo(_0x394973, _0x2f4c37) {
  return _0x394973.kind === "row" ? _0x2f4c37.rows : _0x2f4c37.columns;
}
function ho(_0x355921, _0x5aa79e, _0x19a749, _0x3090bf) {
  (_0x355921.beginPath(),
    _o(
      _0x355921,
      -_0x5aa79e / 2,
      -_0x19a749 / 2,
      _0x5aa79e,
      _0x19a749,
      _0x3090bf.borderRadius,
    ),
    _0x355921.setLineDash([]),
    (_0x355921.strokeStyle = _0x3090bf.borderColor),
    (_0x355921.lineWidth = _0x3090bf.borderWidth),
    _0x355921.stroke());
}
function go(_0x5a69c7, _0x43e822, _0x3e01ff, _0x2dd8b2, _0x2bd90b, _0x12a5c5) {
  let _0x3173fa = -_0x43e822 / 2 + Co(_0x2dd8b2, _0x12a5c5.titleColumn),
    _0x2456c8 = -_0x3e01ff / 2 + Co(_0x2bd90b, _0x12a5c5.titleRow),
    _0x797ba1 = _0x2dd8b2[_0x12a5c5.titleColumn],
    _0x35e86f = _0x2bd90b[_0x12a5c5.titleRow];
  if (!_0x797ba1 || !_0x35e86f) return;
  let _0x2ef9f7 = _0x3173fa + _0x797ba1,
    _0x49fe87 = _0x2456c8 + _0x35e86f,
    _0x2eab81 = Math.min(
      _0x12a5c5.notchWidth,
      Math.max(0, _0x797ba1 - 1),
      Math.max(0, _0x35e86f - 1),
    );
  (_0x5a69c7.beginPath(),
    _0x5a69c7.setLineDash([]),
    (_0x5a69c7.strokeStyle = _0x12a5c5.borderColor),
    (_0x5a69c7.lineWidth = _0x12a5c5.borderWidth),
    _0x5a69c7.moveTo(_0x3173fa, _0x2456c8),
    _0x5a69c7.lineTo(_0x2ef9f7, _0x2456c8),
    _0x5a69c7.lineTo(_0x2ef9f7, _0x49fe87 - _0x2eab81),
    _0x5a69c7.lineTo(_0x2ef9f7 - _0x2eab81, _0x49fe87),
    _0x5a69c7.lineTo(_0x3173fa, _0x49fe87),
    _0x5a69c7.lineTo(_0x3173fa, _0x2456c8),
    _0x5a69c7.stroke());
}
function _o(_0x2c6a23, _0xcd5db4, _0x43cce9, _0x41eb6d, _0x995c33, _0x3e41e6) {
  let _0x414179 = _0xcd5db4 + _0x41eb6d,
    _0x3af33c = _0x43cce9 + _0x995c33,
    _0x5c0ce = Math.min(Math.max(0, _0x3e41e6), _0x41eb6d / 2, _0x995c33 / 2);
  if (_0x5c0ce <= 0) {
    _0x2c6a23.rect(_0xcd5db4, _0x43cce9, _0x41eb6d, _0x995c33);
    return;
  }
  (_0x2c6a23.moveTo(_0xcd5db4 + _0x5c0ce, _0x43cce9),
    _0x2c6a23.lineTo(_0x414179 - _0x5c0ce, _0x43cce9),
    _0x2c6a23.quadraticCurveTo(
      _0x414179,
      _0x43cce9,
      _0x414179,
      _0x43cce9 + _0x5c0ce,
    ),
    _0x2c6a23.lineTo(_0x414179, _0x3af33c - _0x5c0ce),
    _0x2c6a23.quadraticCurveTo(
      _0x414179,
      _0x3af33c,
      _0x414179 - _0x5c0ce,
      _0x3af33c,
    ),
    _0x2c6a23.lineTo(_0xcd5db4 + _0x5c0ce, _0x3af33c),
    _0x2c6a23.quadraticCurveTo(
      _0xcd5db4,
      _0x3af33c,
      _0xcd5db4,
      _0x3af33c - _0x5c0ce,
    ),
    _0x2c6a23.lineTo(_0xcd5db4, _0x43cce9 + _0x5c0ce),
    _0x2c6a23.quadraticCurveTo(
      _0xcd5db4,
      _0x43cce9,
      _0xcd5db4 + _0x5c0ce,
      _0x43cce9,
    ));
}
function vo(_0x277858, _0x3978f7) {
  return _0x277858 != null && _0x277858.options["firstRow"] && _0x3978f7 === 0
    ? "#e8f1ff"
    : _0x277858 != null && _0x277858.options["bandRow"] && _0x3978f7 % 2 == 1
      ? "#f7faff"
      : qa;
}
function yo(_0x270c4f) {
  return _0x270c4f.type === n.SlideTableFillTypeEnum["None"]
    ? null
    : (_0x270c4f.color ?? qa);
}
function bo(_0x2c460, _0x183fbd, _0xfe8c67, _0x38a981, _0x5c4be4, _0x306711) {
  !_0x183fbd ||
    _0x183fbd.dash === "none" ||
    (_0x2c460.beginPath(),
    _0x2c460.setLineDash(So(_0x183fbd.dash)),
    (_0x2c460.strokeStyle = _0x183fbd.color || Ka),
    (_0x2c460.lineWidth = Q(_0x183fbd.width, 1)),
    _0x2c460.moveTo(_0xfe8c67, _0x38a981),
    _0x2c460.lineTo(_0x5c4be4, _0x306711),
    _0x2c460.stroke(),
    _0x2c460.setLineDash([]));
}
function xo(_0x249c75) {
  return !_0x249c75 || _0x249c75.dash === "none"
    ? 0
    : Q(_0x249c75.width, 1) / 2;
}
function So(_0xc82f17) {
  return _0xc82f17 === "dash"
    ? [6, 3]
    : _0xc82f17 === "dot"
      ? [1, 3]
      : _0xc82f17 === "dashDot"
        ? [6, 3, 1, 3]
        : [];
}
function Co(_0x18c4c9, _0x3662c3) {
  let _0x33788a = Math.min(_0x18c4c9.length, Math.max(0, _0x3662c3));
  return _0x18c4c9
    .slice(0, _0x33788a)
    .reduce((_0x9c1e50, _0x322888) => _0x9c1e50 + _0x322888, 0);
}
function wo(
  _0xa92738,
  _0x48fcf7,
  _0x3bcae9,
  _0xc1be3d,
  _0x146dfe,
  _0x48f35e,
  _0x35d77b,
  _0x3e01a1,
) {
  let _0x4eba83 = 0.5,
    _0x511501 = Math.max(_0x48fcf7, -_0x35d77b / 2 + _0x4eba83),
    _0x378804 = Math.max(_0x3bcae9, -_0x3e01a1 / 2 + _0x4eba83),
    _0x3c15f2 = Math.min(_0x48fcf7 + _0xc1be3d, _0x35d77b / 2 - _0x4eba83),
    _0x101cc9 = Math.min(_0x3bcae9 + _0x146dfe, _0x3e01a1 / 2 - _0x4eba83);
  _0x3c15f2 <= _0x511501 ||
    _0x101cc9 <= _0x378804 ||
    (_0xa92738.beginPath(),
    _0xa92738.setLineDash([]),
    _0xa92738.rect(
      _0x511501,
      _0x378804,
      _0x3c15f2 - _0x511501,
      _0x101cc9 - _0x378804,
    ),
    (_0xa92738.strokeStyle = _0x48f35e),
    (_0xa92738.lineWidth = 1),
    _0xa92738.stroke());
}
function To(_0x5942ee, _0x2ab89a) {
  let {
    bottom: _0x361140,
    left: _0x578a01,
    right: _0x2ebe39,
    top: _0x1f6dea,
  } = (0, n.resolveSlideTableCellTextMargins)(_0x2ab89a);
  return {
    left: _0x5942ee.left + _0x578a01,
    top: _0x5942ee.top + _0x1f6dea,
    width: Math.max(1, _0x5942ee.width - _0x578a01 - _0x2ebe39),
    height: Math.max(1, _0x5942ee.height - _0x1f6dea - _0x361140),
  };
}
function Eo(_0x4a3978, _0x528521, _0x5cc07a, _0x298e66) {
  let _0x1741ba = Q(_0x5cc07a / _0x528521.width, 1),
    _0x27f84e = Q(_0x298e66 / _0x528521.height, 1);
  return {
    ...To(
      {
        left: _0x4a3978.bounds["left"] * _0x1741ba,
        top: _0x4a3978.bounds["top"] * _0x27f84e,
        width: _0x4a3978.bounds["width"] * _0x1741ba,
        height: _0x4a3978.bounds["height"] * _0x27f84e,
      },
      _0x4a3978.style["margins"],
    ),
    row: _0x4a3978.row,
    column: _0x4a3978.column,
  };
}
function Do(
  _0x4df517,
  _0x5338b1,
  _0x1ac674,
  _0x28348b,
  _0x449025,
  _0x1d1054 = $a,
) {
  let _0x192a1e = _0x5338b1 + _0x28348b / 2 - 3,
    _0x32a470 = _0x1ac674 + _0x449025 / 2 - 3;
  _0x4df517.fillStyle = _0x1d1054;
  for (let _0xd4b752 = 0; _0xd4b752 < 2; _0xd4b752 += 1)
    for (let _0x59f0de = 0; _0x59f0de < 2; _0x59f0de += 1)
      (_0x4df517.beginPath(),
        _0x4df517.arc(
          _0x192a1e + _0x59f0de * 6,
          _0x32a470 + _0xd4b752 * 6,
          1.5,
          0,
          Math.PI * 2,
        ),
        _0x4df517.fill());
}
function Oo(
  _0x2654f7,
  _0x54e55a,
  _0x26de5e,
  _0x4a9b43,
  _0x1f1c03,
  _0x9c6516 = false,
) {
  var _0x51317f;
  (_0x2654f7.save(),
    (_0x2654f7.shadowColor = _0x9c6516
      ? "rgba(26, 115, 232, 0.22)"
      : "rgba(60, 64, 67, 0.16)"),
    (_0x2654f7.shadowBlur = _0x9c6516 ? 10 : 8),
    (_0x2654f7.shadowOffsetY = 2),
    _0x2654f7.beginPath(),
    (_0x51317f = _0x2654f7.roundRect) == null ||
      _0x51317f.call(_0x2654f7, _0x54e55a, _0x26de5e, _0x4a9b43, _0x1f1c03, 6),
    _0x2654f7.roundRect ||
      _0x2654f7.rect(_0x54e55a, _0x26de5e, _0x4a9b43, _0x1f1c03),
    (_0x2654f7.fillStyle = _0x9c6516 ? Xa : Ya),
    _0x2654f7.fill(),
    (_0x2654f7.shadowBlur = 0),
    (_0x2654f7.shadowOffsetY = 0),
    (_0x2654f7.strokeStyle = _0x9c6516 ? Qa : Za),
    (_0x2654f7.lineWidth = 1),
    _0x2654f7.stroke(),
    _0x2654f7.restore());
}
function ko(_0x418bce) {
  return _0x418bce
    ? {
        visible: _0x418bce.visible,
        hoveredTrigger: _0x418bce.hoveredTrigger
          ? {
              ..._0x418bce.hoveredTrigger,
              rect: { ..._0x418bce.hoveredTrigger["rect"] },
            }
          : null,
        selectedStructuralRange: _0x418bce.selectedStructuralRange
          ? { ..._0x418bce.selectedStructuralRange }
          : null,
        insertGuide: _0x418bce.insertGuide
          ? { ..._0x418bce.insertGuide }
          : null,
        reorderGuide: _0x418bce.reorderGuide
          ? { ..._0x418bce.reorderGuide }
          : null,
      }
    : null;
}
function Ao(_0x287463, _0x175a73) {
  return JSON.stringify(_0x287463) === JSON.stringify(_0x175a73);
}
function jo(_0x170517) {
  return (
    _0x170517.kind === "row-header" ||
    _0x170517.kind === "column-header" ||
    _0x170517.kind === "row-insert-dot" ||
    _0x170517.kind === "column-insert-dot"
  );
}
var Mo = class extends i.Disposable {
  constructor(..._0x6a9563) {
    (super(..._0x6a9563),
      T(this, "_session$", new s["BehaviorSubject"](null)),
      T(this, "session$", this._session$["asObservable"]()));
  }
  open(_0x163277) {
    let _0x41e8e4 = $(_0x163277);
    return (
      this._session$["next"](_0x41e8e4),
      (0, i.toDisposable)(() => {
        this._session$["getValue"]() === _0x41e8e4 && this.close();
      })
    );
  }
  update(_0x3ba3cc) {
    var _0x23b358;
    let _0x3fefe0 = this._session$["getValue"]();
    if (!_0x3fefe0) return;
    let _0x3aad31 = $({
      ..._0x3fefe0,
      ..._0x3ba3cc,
      documentData: _0x3ba3cc.documentData ?? _0x3fefe0.documentData,
      measurement: _0x3ba3cc.measurement ?? _0x3fefe0.measurement,
      rect: _0x3ba3cc.rect ?? _0x3fefe0.rect,
      tableTransform: _0x3ba3cc.tableTransform ?? _0x3fefe0.tableTransform,
    });
    (this._session$["next"](_0x3aad31),
      (_0x23b358 = _0x3fefe0.onChange) == null ||
        _0x23b358.call(_0x3fefe0, $(_0x3aad31)));
  }
  complete(_0x1989b5) {
    var _0x477495;
    let _0x1e2049 = this._session$["getValue"]();
    if (!_0x1e2049) return;
    let _0x53967a = $({
      ..._0x1e2049,
      documentData: _0x1989b5 ?? _0x1e2049.documentData,
    });
    ((_0x477495 = _0x1e2049.onComplete) == null ||
      _0x477495.call(_0x1e2049, _0x53967a),
      this.close());
  }
  cancel() {
    var _0x19ab87;
    let _0x39cd36 = this._session$["getValue"]();
    _0x39cd36 &&
      ((_0x19ab87 = _0x39cd36.onCancel) == null ||
        _0x19ab87.call(_0x39cd36, $(_0x39cd36)),
      this.close());
  }
  close() {
    this._session$["next"](null);
  }
  getSession() {
    let _0x3db580 = this._session$["getValue"]();
    return _0x3db580 ? $(_0x3db580) : null;
  }
  subscribe(_0x2d536a) {
    let _0x41a13d = this.session$["subscribe"]((_0x7f4b14) => {
      _0x2d536a(_0x7f4b14 ? $(_0x7f4b14) : null);
    });
    return (0, i.toDisposable)(() => _0x41a13d.unsubscribe());
  }
  dispose() {
    (this.close(), this._session$["complete"](), super.dispose());
  }
};
function $(_0x3de709) {
  return {
    ..._0x3de709,
    measurement: _0x3de709.measurement
      ? { ..._0x3de709.measurement }
      : undefined,
    rect: { ..._0x3de709.rect },
    tableTransform: { ..._0x3de709.tableTransform },
    documentData: i.Tools["deepClone"](_0x3de709.documentData),
  };
}
function No(_0x21640d) {
  return !_0x21640d || _0x21640d.kind === "none" || !_0x21640d.ranges["length"]
    ? null
    : {
        kind: _0x21640d.kind,
        ranges: _0x21640d.ranges["map"]((_0x47ed5) => ({ ..._0x47ed5 })),
        active:
          _0x21640d.focus ??
          _0x21640d.anchor ??
          (Fo(_0x21640d.kind) ? Po(_0x21640d) : undefined),
      };
}
function Po(_0x5045b6) {
  let _0x23b5c0 = _0x5045b6.ranges[0];
  if (_0x23b5c0)
    return {
      row: Math.min(_0x23b5c0.startRow, _0x23b5c0.endRow),
      column: Math.min(_0x23b5c0.startColumn, _0x23b5c0.endColumn),
    };
}
function Fo(_0x52121e) {
  return _0x52121e === "cell" || _0x52121e === "range" || _0x52121e === "text";
}
((exports.SLIDES_TABLE_UI_PLUGIN_CONFIG_KEY = v),
  (exports.SLIDE_TABLE_CONTEXT_MENU_ACTIONS = k),
  (exports.SLIDE_TABLE_DEFAULT_BACKGROUND_COLOR = Vt),
  (exports.SLIDE_TABLE_KEYBOARD_SHORTCUT_DESCRIPTORS = Et),
  (exports.SLIDE_TABLE_TOOLBAR_ACTIONS = un),
  (exports.SlideTableCellEditorService = Mo),
  (exports.SlideTableObject = no),
  (exports.SlideTableSelectionService = E),
  (exports.TableKeyboardServiceBase = wt),
  (exports.TableThemeGallery = $n),
  (exports.TableToolbarDropdownInteractionGuard = W),
  Object.defineProperty(exports, "UniverSlidesTableUIPlugin", {
    enumerable: true,
    get: function () {
      return Oa;
    },
  }),
  (exports.buildSlideTableBackgroundColorPatch = N),
  (exports.buildSlideTableBackgroundFillPatch = ae),
  (exports.buildSlideTableBorderPresetCommandParams = _n),
  (exports.buildSlideTableBorderPresetPatch = le),
  (exports.buildSlideTableBorderStylePatch = ce),
  (exports.buildSlideTableCellEditorCommitCommand = si),
  (exports.buildSlideTableCellStyleCommandParams = gn),
  (exports.buildSlideTableClearTextPatch = Ci),
  (exports.buildSlideTableContextMenuCommand = te),
  (exports.buildSlideTableDeleteToolbarCommand = hn),
  (exports.buildSlideTableFontFamilyPatch = ue),
  (exports.buildSlideTableFontSizePatch = de),
  (exports.buildSlideTableInsertDotControlState = Li),
  (exports.buildSlideTableKeyboardShortcutBindings = Dt),
  (exports.buildSlideTableMergeCellsCommandParams = fn),
  (exports.buildSlideTableMergeToolbarCommand = mn),
  (exports.buildSlideTablePasteHtmlPatch = Si),
  (exports.buildSlideTablePasteTextPatch = xi),
  (exports.buildSlideTableTextAlignPatch = ne),
  (exports.buildSlideTableTextColorPatch = oe),
  (exports.buildSlideTableTextFillPatch = se),
  (exports.buildSlideTableTextStylePatch = L),
  (exports.buildSlideTableUnmergeCellsCommandParams = pn),
  (exports.defaultPluginConfig = y),
  (exports.ensureOption = ln),
  (exports.getSlideTableFillPreviewStyle = on),
  (exports.getSlideTableFillType = $t),
  (exports.getSlideTableGradientValue = rn),
  (exports.getSlideTableSelectionContext = A),
  (exports.gradientValueToSlideTableFill = an),
  (exports.isSlideTableDocumentEditorTarget = St),
  (exports.isSlideTableEditableTarget = xt),
  (exports.isSlideTableInsertDotTrigger = Ii),
  (exports.normalizeSlideTableCellDocumentData = ci),
  (exports.replaceSlideTableCellDocumentText = ai),
  (exports.resolveFirstSlideTableSelectionCell = Po),
  (exports.resolveNextSlideTableKeyboardCell = kt),
  (exports.resolveSlideTableCellEditorLayout = oi),
  (exports.resolveSlideTableCellEditorTarget = ri),
  (exports.resolveSlideTableContextMenuActions = ee),
  (exports.resolveSlideTableDocumentHorizontalAlign = Qt),
  (exports.resolveSlideTableKeyboardMovement = Ot),
  (exports.resolveSlideTableMergeToolbarAction = vn),
  (exports.resolveSlideTableObjectSelection = No),
  (exports.resolveSlideTableSelectionValues = Gt),
  (exports.resolveSlideTableToolbarActions = dn),
  (exports.serializeSlideTableCellStyleAttribute = bi),
  (exports.serializeSlideTableSelectionToHtml = yi),
  (exports.serializeSlideTableSelectionToText = vi),
  (exports.toCoreVerticalAlign = nn));
