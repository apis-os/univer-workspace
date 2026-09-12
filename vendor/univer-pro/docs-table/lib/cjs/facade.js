Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/docs-table"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade"),
  r = require("@univerjs/docs/facade");
var i = class extends n["FEnum"] {
  get ["DocsTableInsertTablePosition"]() {
    return e["DocsTableInsertTablePosition"];
  }
  get ["DocsTableColumnType"]() {
    return e["DocsTableColumnType"];
  }
  get ["DocsTableSelectionKind"]() {
    return e["DocsTableSelectionKind"];
  }
  get ["DocsTableRowInsertPosition"]() {
    return e["DocsTableRowInsertPosition"];
  }
  get ["DocsTableColumnInsertPosition"]() {
    return e["DocsTableColumnInsertPosition"];
  }
  get ["DocsTableBorderPreset"]() {
    return e["DocsTableBorderPreset"];
  }
  get ["DocsTableSortDirection"]() {
    return e["DocsTableSortDirection"];
  }
  get ["DashStyleType"]() {
    return t["DashStyleType"];
  }
};
n["FEnum"]["extend"](i);
var a = class {
  constructor(_0xef007, _0x17ef05, _0x168c5a) {
    ((this["_table"] = _0xef007),
      (this["_row"] = _0x17ef05),
      (this["_column"] = _0x168c5a));
  }
  ["getTable"]() {
    return this["_table"];
  }
  ["getRowIndex"]() {
    return this["_row"];
  }
  ["getColumnIndex"]() {
    return this["_column"];
  }
  ["getText"]() {
    return this["_table"]["getCellText"](this["_row"], this["_column"]);
  }
  ["getContentRange"]() {
    return this["_table"]["getCellContentRange"](this["_row"], this["_column"]);
  }
  ["getInsertOffset"]() {
    return this["_table"]["getCellInsertOffset"](this["_row"], this["_column"]);
  }
  ["getMargin"]() {
    return this["_table"]["getCellMargin"](this["_row"], this["_column"]);
  }
  ["getMarginOverride"]() {
    return this["_table"]["getCellMarginOverride"](
      this["_row"],
      this["_column"],
    );
  }
  ["setMargin"](_0x94c11e) {
    return this["_table"]["setCellMargin"](
      this["_table"]["getCellRange"](this["_row"], this["_column"]),
      _0x94c11e,
    );
  }
  ["clearMarginOverride"]() {
    return this["_table"]["setCellMargin"](
      this["_table"]["getCellRange"](this["_row"], this["_column"]),
      null,
    );
  }
  ["setText"](_0x3ecc49) {
    return this["_table"]["setCellText"](
      this["_row"],
      this["_column"],
      _0x3ecc49,
    );
  }
  ["setBackgroundColor"](_0x4f83db) {
    return this["_table"]["setCellBackground"](
      this["_table"]["getCellRange"](this["_row"], this["_column"]),
      _0x4f83db,
    );
  }
  ["setBorder"](_0x4243a1) {
    return this["_table"]["setBorder"](
      this["_table"]["getCellRange"](this["_row"], this["_column"]),
      _0x4243a1,
    );
  }
  ["mergeTo"](_0x54d925, _0x2608b1) {
    return this["_table"]["mergeCells"]({
      startRow: this["_row"],
      startColumn: this["_column"],
      endRow: this["_row"] + _0x54d925 - 0x1,
      endColumn: this["_column"] + _0x2608b1 - 0x1,
    });
  }
  ["unmerge"]() {
    return this["_table"]["unmergeCells"](
      this["_table"]["getCellRange"](this["_row"], this["_column"]),
    );
  }
};
function o(_0x43f09e) {
  "@babel/helpers - typeof";
  return (
    (o =
      typeof Symbol == "function" && typeof Symbol["iterator"] == "symbol"
        ? function (_0x4502d6) {
            return typeof _0x4502d6;
          }
        : function (_0x5b0a73) {
            return _0x5b0a73 &&
              typeof Symbol == _0x470cb2(0xf1) &&
              _0x5b0a73[_0x470cb2(0x17e)] === Symbol &&
              _0x5b0a73 !== Symbol[_0x470cb2(0xfc)]
              ? "symbol"
              : typeof _0x5b0a73;
          }),
    o(_0x43f09e)
  );
}
function s(_0x221543, _0x25e9dd) {
  if (o(_0x221543) != "object" || !_0x221543) return _0x221543;
  var _0xe8798b = _0x221543[Symbol["toPrimitive"]];
  if (_0xe8798b !== void 0x0) {
    var _0x53a686 = _0xe8798b[_0x39f0e7(0xff)](
      _0x221543,
      _0x25e9dd || _0x39f0e7(0xc5),
    );
    if (o(_0x53a686) != _0x39f0e7(0x184)) return _0x53a686;
    throw TypeError(_0x39f0e7(0x11a));
  }
  return (_0x25e9dd === _0x39f0e7(0x15f) ? String : Number)(_0x221543);
}
function c(_0x5b49d0) {
  var _0x463364 = s(_0x5b49d0, "string");
  return o(_0x463364) == _0x763425(0x18e) ? _0x463364 : _0x463364 + "";
}
function l(_0x2b00a2, _0x63fc60, _0xefff16) {
  return (
    (_0x63fc60 = c(_0x63fc60)) in _0x2b00a2
      ? Object[_0x2e6a3d(0x14c)](_0x2b00a2, _0x63fc60, {
          value: _0xefff16,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x2b00a2[_0x63fc60] = _0xefff16),
    _0x2b00a2
  );
}
function u(_0x5a183d, _0x3d78b8) {
  return function (_0x1377e5, _0x24f015) {
    _0x3d78b8(_0x1377e5, _0x24f015, _0x5a183d);
  };
}
function d(_0x3b7638, _0x335753, _0x32c82a, _0x3c0d25) {
  var _0x4764ee = arguments[_0x49bfda(0xcc)],
    _0x222b0d =
      _0x4764ee < 0x3
        ? _0x335753
        : _0x3c0d25 === null
          ? (_0x3c0d25 = Object[_0x49bfda(0x147)](_0x335753, _0x32c82a))
          : _0x3c0d25,
    _0x2bd187;
  if (
    typeof Reflect == "object" &&
    typeof Reflect[_0x49bfda(0x185)] == _0x49bfda(0xf1)
  )
    _0x222b0d = Reflect[_0x49bfda(0x185)](
      _0x3b7638,
      _0x335753,
      _0x32c82a,
      _0x3c0d25,
    );
  else {
    for (
      var _0x50a939 = _0x3b7638[_0x49bfda(0xcc)] - 0x1;
      _0x50a939 >= 0x0;
      _0x50a939--
    )
      (_0x2bd187 = _0x3b7638[_0x50a939]) &&
        (_0x222b0d =
          (_0x4764ee < 0x3
            ? _0x2bd187(_0x222b0d)
            : _0x4764ee > 0x3
              ? _0x2bd187(_0x335753, _0x32c82a, _0x222b0d)
              : _0x2bd187(_0x335753, _0x32c82a)) || _0x222b0d);
  }
  return (
    _0x4764ee > 0x3 &&
      _0x222b0d &&
      Object[_0x49bfda(0x14c)](_0x335753, _0x32c82a, _0x222b0d),
    _0x222b0d
  );
}
let f = class {
  constructor(_0x401adb, _0x3ff6fc, _0x3d3a65, _0x332aa3, _0x2c576) {
    ((this[_0x55c485(0xf9)] = _0x401adb),
      (this[_0x55c485(0x168)] = _0x3ff6fc),
      (this[_0x55c485(0xf2)] = _0x3d3a65),
      (this[_0x55c485(0xe7)] = _0x332aa3),
      (this[_0x55c485(0xdb)] = _0x2c576),
      l(this, _0x55c485(0x163), void 0x0),
      (this[_0x55c485(0x163)] = this[_0x55c485(0xf9)][_0x55c485(0x162)]()));
  }
  ["getId"]() {
    return this[_0x2469e9(0x168)];
  }
  ["getSegmentId"]() {
    return this["_segmentId"];
  }
  ["getInfo"]() {
    return {
      id: this[_0x4c3898(0x168)],
      rowCount: this[_0x4c3898(0x141)](),
      columnCount: this["getColumnCount"](),
      metadata: this[_0x4c3898(0xb8)](),
      source: this[_0x4c3898(0x108)](),
    };
  }
  ["describe"]() {
    let _0x50c72d = this[_0x5b2da4(0xb8)](),
      _0x590c84 = this[_0x5b2da4(0x108)](),
      _0x4d742c = this[_0x5b2da4(0x144)]();
    return {
      id: this[_0x5b2da4(0x168)],
      rowCount: this[_0x5b2da4(0x141)](),
      columnCount: _0x4d742c,
      headerRowCount:
        (_0x50c72d == null ? void 0x0 : _0x50c72d[_0x5b2da4(0xc3)]) ?? 0x0,
      titleRow:
        (_0x50c72d == null ? void 0x0 : _0x50c72d[_0x5b2da4(0x112)]) ?? !0x1,
      columns: Array[_0x5b2da4(0x187)](
        { length: _0x4d742c },
        (_0x4b0602, _0x505093) => {
          const _0x295b85 = _0x5b2da4;
          var _0x3310a9, _0x3c7158;
          return {
            index: _0x505093,
            type:
              _0x50c72d == null ||
              (_0x3310a9 = _0x50c72d[_0x295b85(0x146)]) == null ||
              (_0x3310a9 = _0x3310a9[_0x505093]) == null
                ? void 0x0
                : _0x3310a9[_0x295b85(0x183)],
            width:
              _0x590c84 == null ||
              (_0x3c7158 = _0x590c84[_0x295b85(0x174)][_0x505093]) == null
                ? void 0x0
                : _0x3c7158[_0x295b85(0x10e)][_0x295b85(0xcf)]["v"],
          };
        },
      ),
      sampleRows: Array["from"](
        { length: this["getRowCount"]() },
        (_0x26e73e, _0x50c75b) =>
          Array[_0x5b2da4(0x187)](
            { length: _0x4d742c },
            (_0xb0fe1a, _0x12f9e6) =>
              this[_0x5b2da4(0x136)](_0x50c75b, _0x12f9e6),
          ),
      )
        [_0x5b2da4(0x16e)]((_0x3c61ba) =>
          _0x3c61ba[_0x5b2da4(0x109)](
            (_0x51e5e1) => _0x51e5e1[_0x5b2da4(0xcc)] > 0x0,
          ),
        )
        ["slice"](0x0, 0x5),
    };
  }
  ["getRowCount"]() {
    var _0x1c0949;
    return (
      ((_0x1c0949 = this["getSource"]()) == null
        ? void 0x0
        : _0x1c0949[_0x5708ea(0x181)][_0x5708ea(0xcc)]) ?? 0x0
    );
  }
  ["getColumnCount"]() {
    var _0x57175e;
    return (
      ((_0x57175e = this[_0x207c2d(0x108)]()) == null
        ? void 0x0
        : _0x57175e[_0x207c2d(0x174)][_0x207c2d(0xcc)]) ?? 0x0
    );
  }
  ["getCell"](_0x17afb0, _0x14ea5c) {
    var _0xa0db4b;
    return (_0xa0db4b = this[_0x445330(0x108)]()) != null &&
      (_0xa0db4b = _0xa0db4b[_0x445330(0x181)][_0x17afb0]) != null &&
      _0xa0db4b[_0x445330(0x156)][_0x14ea5c]
      ? this[_0x445330(0xdb)][_0x445330(0x132)](a, this, _0x17afb0, _0x14ea5c)
      : null;
  }
  ["getCellText"](_0x336cd1, _0x36ebee) {
    var _0x48f28c, _0x10c34d;
    let _0x24228c =
      (_0x48f28c = (0x0, e["getTableRangeById"])(
        this["_getDocumentData"](),
        this[_0x57f4f7(0x168)],
      )) == null || (_0x48f28c = _0x48f28c[_0x57f4f7(0x157)][_0x336cd1]) == null
        ? void 0x0
        : _0x48f28c[_0x57f4f7(0x13b)][_0x36ebee];
    return _0x24228c
      ? (((_0x10c34d = this["_getDocumentData"]()[_0x57f4f7(0x133)]) == null
          ? void 0x0
          : _0x10c34d["dataStream"]
              [_0x57f4f7(0x12e)](
                _0x24228c[_0x57f4f7(0x102)] + 0x1,
                _0x24228c[_0x57f4f7(0x160)],
              )
              ["replace"](/\r\n$/, "")) ?? "")
      : "";
  }
  ["getCellMargin"](_0x445cd1, _0x2d255b) {
    var _0x3c0e8a;
    let _0x225bbb = this[_0x3242b1(0x108)](),
      _0x51b5ac =
        _0x225bbb == null ||
        (_0x3c0e8a = _0x225bbb["tableRows"][_0x445cd1]) == null
          ? void 0x0
          : _0x3c0e8a[_0x3242b1(0x156)][_0x2d255b];
    return _0x51b5ac
      ? t["Tools"][_0x3242b1(0x130)](
          _0x51b5ac["margin"] ??
            _0x225bbb[_0x3242b1(0x113)] ??
            e[_0x3242b1(0x13e)],
        )
      : null;
  }
  ["getCellMarginOverride"](_0x3be688, _0x3f16cd) {
    var _0x287597;
    let _0x5674ee =
      (_0x287597 = this[_0x1f8cac(0x108)]()) == null ||
      (_0x287597 = _0x287597[_0x1f8cac(0x181)][_0x3be688]) == null
        ? void 0x0
        : _0x287597["tableCells"][_0x3f16cd];
    return _0x5674ee != null && _0x5674ee[_0x1f8cac(0x107)]
      ? t[_0x1f8cac(0xc6)][_0x1f8cac(0x130)](_0x5674ee["margin"])
      : null;
  }
  ["getDefaultCellMargin"]() {
    var _0x38aad9;
    return t["Tools"][_0x48a8ff(0x130)](
      ((_0x38aad9 = this[_0x48a8ff(0x108)]()) == null
        ? void 0x0
        : _0x38aad9[_0x48a8ff(0x113)]) ?? e[_0x48a8ff(0x13e)],
    );
  }
  ["getDefaultCellMarginOverride"]() {
    var _0x4a422b;
    let _0x3c9c74 =
      (_0x4a422b = this[_0x2f8df8(0x108)]()) == null
        ? void 0x0
        : _0x4a422b[_0x2f8df8(0x113)];
    return _0x3c9c74 ? t[_0x2f8df8(0xc6)][_0x2f8df8(0x130)](_0x3c9c74) : null;
  }
  ["getMetadata"]() {
    return this[_0x4b1061(0xdb)]
      ["get"](e[_0x4b1061(0x139)])
      [_0x4b1061(0x110)](this[_0x4b1061(0x163)], this[_0x4b1061(0x168)]);
  }
  ["getSource"]() {
    var _0x23d980;
    return (_0x23d980 = this[_0x487922(0xd7)]()["tableSource"]) == null
      ? void 0x0
      : _0x23d980[this[_0x487922(0x168)]];
  }
  ["getRange"]() {
    return (0x0, e["getTableRangeById"])(
      this[_0x216bee(0xd7)](),
      this[_0x216bee(0x168)],
    );
  }
  ["getTableRange"]() {
    return {
      startRow: 0x0,
      endRow: Math[_0x4485de(0x129)](0x0, this["getRowCount"]() - 0x1),
      startColumn: 0x0,
      endColumn: Math[_0x4485de(0x129)](0x0, this[_0x4485de(0x144)]() - 0x1),
    };
  }
  ["getCellRange"](_0x581944, _0x2d2d35) {
    return {
      startRow: _0x581944,
      endRow: _0x581944,
      startColumn: _0x2d2d35,
      endColumn: _0x2d2d35,
    };
  }
  ["getCellContentRange"](_0x515615, _0xf009b2) {
    var _0x1868fe;
    let _0x55d160 =
      (_0x1868fe = (0x0, e["getTableRangeById"])(
        this[_0x300dd3(0xd7)](),
        this[_0x300dd3(0x168)],
      )) == null || (_0x1868fe = _0x1868fe[_0x300dd3(0x157)][_0x515615]) == null
        ? void 0x0
        : _0x1868fe[_0x300dd3(0x13b)][_0xf009b2];
    if (!_0x55d160) return null;
    let _0x15fa7e = _0x55d160[_0x300dd3(0x102)] + 0x1;
    return {
      startOffset: _0x15fa7e,
      endOffset: Math[_0x300dd3(0x129)](
        _0x15fa7e,
        _0x55d160["endOffset"] - 0x1,
      ),
      segmentId: this[_0x300dd3(0xf2)],
    };
  }
  ["getCellInsertOffset"](_0x5bfc2d, _0xaa66b0) {
    let _0x162db8 = this["getCellContentRange"](_0x5bfc2d, _0xaa66b0);
    return _0x162db8
      ? Math[_0x30919c(0x129)](
          _0x162db8[_0x30919c(0x102)],
          _0x162db8[_0x30919c(0x160)] - 0x1,
        )
      : null;
  }
  ["getRowRange"](_0x2c72cc) {
    return this["getRowsRange"](_0x2c72cc, 0x1);
  }
  ["getRowsRange"](_0x2b2974, _0x120032 = 0x1) {
    return {
      startRow: _0x2b2974,
      endRow: _0x2b2974 + _0x120032 - 0x1,
      startColumn: 0x0,
      endColumn: Math["max"](0x0, this[_0x3e9a2f(0x144)]() - 0x1),
    };
  }
  ["getColumnRange"](_0x33083d) {
    return this["getColumnsRange"](_0x33083d, 0x1);
  }
  ["getColumnsRange"](_0x5d0425, _0x3daf5b = 0x1) {
    return {
      startRow: 0x0,
      endRow: Math[_0x386d19(0x129)](0x0, this[_0x386d19(0x141)]() - 0x1),
      startColumn: _0x5d0425,
      endColumn: _0x5d0425 + _0x3daf5b - 0x1,
    };
  }
  ["selectTable"]() {
    return this[_0x3e8756(0x148)](
      this[_0x3e8756(0x191)](),
      e[_0x3e8756(0x10c)][_0x3e8756(0xe8)],
    );
  }
  ["selectRow"](_0x2dd97d) {
    return this["selectRows"](_0x2dd97d, 0x1);
  }
  ["selectRows"](_0x48dd2f, _0x5635d4 = 0x1) {
    return this[_0x5147cb(0x148)](
      this["getRowsRange"](_0x48dd2f, _0x5635d4),
      e[_0x5147cb(0x10c)][_0x5147cb(0xe4)],
    );
  }
  ["selectColumn"](_0x218730) {
    return this["selectColumns"](_0x218730, 0x1);
  }
  ["selectColumns"](_0x5e858a, _0x5648d0 = 0x1) {
    return this[_0x594e08(0x148)](
      this[_0x594e08(0x18f)](_0x5e858a, _0x5648d0),
      e[_0x594e08(0x10c)][_0x594e08(0xf4)],
    );
  }
  ["selectCell"](_0x4e4705, _0x9b2e5f) {
    return this["selectRange"](
      this[_0x507a27(0xc2)](_0x4e4705, _0x9b2e5f),
      e[_0x507a27(0x10c)][_0x507a27(0x11e)],
    );
  }
  ["selectRange"](_0x2416a9, _0x4143c4 = e["DocsTableSelectionKind"]["Range"]) {
    return (
      this[_0x43af05(0xdb)]
        [_0x43af05(0x170)](e[_0x43af05(0x188)])
        ["setStructuralSelection"]({
          ..._0x2416a9,
          kind: _0x4143c4,
          segmentId: this["_segmentId"],
          tableId: this[_0x43af05(0x168)],
        }),
      !0x0
    );
  }
  ["insertRowBefore"](_0x5e2639) {
    return this[_0x14f36e(0x172)](_0x5e2639, 0x1);
  }
  ["insertRowAfter"](_0x1465b6) {
    return this[_0x4da199(0x115)](_0x1465b6, 0x1);
  }
  ["insertRowsBefore"](_0x102fab, _0x563525) {
    let _0xc60dbe = this[_0x227113(0xd7)](),
      _0x4b44e7 = (0x0, e["buildInsertTableRowsMutationActions"])(
        _0xc60dbe,
        this[_0x227113(0x168)],
        _0x102fab,
        _0x563525,
        e[_0x227113(0xe3)][_0x227113(0xe1)],
        this[_0x227113(0xf0)](),
      );
    return _0x4b44e7
      ? this["_mutateActions"](_0xc60dbe, _0x4b44e7[_0x227113(0x16b)])
      : !0x1;
  }
  ["insertRowsAfter"](_0x3182c9, _0x58d19d) {
    let _0x1e8232 = this[_0x513581(0xd7)](),
      _0x49680a = (0x0, e[_0x513581(0xe6)])(
        _0x1e8232,
        this[_0x513581(0x168)],
        _0x3182c9,
        _0x58d19d,
        e[_0x513581(0xe3)][_0x513581(0x12c)],
        this[_0x513581(0xf0)](),
      );
    return _0x49680a
      ? this[_0x513581(0x11c)](_0x1e8232, _0x49680a["actions"])
      : !0x1;
  }
  ["appendRow"]() {
    return this[_0x142dbe(0x115)](
      Math[_0x142dbe(0x129)](0x0, this[_0x142dbe(0x141)]() - 0x1),
      0x1,
    );
  }
  ["insertColumnBefore"](_0x3cc6df) {
    return this["insertColumnsBefore"](_0x3cc6df, 0x1);
  }
  ["insertColumnAfter"](_0x23b44c) {
    return this["insertColumnsAfter"](_0x23b44c, 0x1);
  }
  ["insertColumnsBefore"](_0x9c37d2, _0x5d3685) {
    let _0x5003bc = this["_getDocumentData"](),
      _0x22aad2 = (0x0, e["buildInsertTableColumnsMutationActions"])(
        _0x5003bc,
        this[_0xba47eb(0x168)],
        _0x9c37d2,
        _0x5d3685,
        e["DocsTableInsertPosition"][_0xba47eb(0xc7)],
        { bodyPath: this[_0xba47eb(0xf0)]() },
      );
    return _0x22aad2
      ? this[_0xba47eb(0x11c)](_0x5003bc, _0x22aad2["actions"])
      : !0x1;
  }
  ["insertColumnsAfter"](_0x5a0c8c, _0x1cd580) {
    let _0x1f0b3d = this[_0x4ace92(0xd7)](),
      _0x233c39 = (0x0, e[_0x4ace92(0x18b)])(
        _0x1f0b3d,
        this["_tableId"],
        _0x5a0c8c,
        _0x1cd580,
        e[_0x4ace92(0xe3)][_0x4ace92(0x190)],
        { bodyPath: this[_0x4ace92(0xf0)]() },
      );
    return _0x233c39
      ? this[_0x4ace92(0x11c)](_0x1f0b3d, _0x233c39["actions"])
      : !0x1;
  }
  ["appendColumn"]() {
    return this["insertColumnsAfter"](
      Math[_0x390574(0x129)](0x0, this[_0x390574(0x144)]() - 0x1),
      0x1,
    );
  }
  ["deleteRow"](_0x35073e) {
    return this[_0xaa50a7(0x12d)](_0x35073e, 0x1);
  }
  ["deleteRows"](_0x175907, _0x262f5c = 0x1) {
    return !!this["_commandService"][_0x504494(0x175)](
      e[_0x504494(0x14f)]["id"],
      {
        endRow: _0x175907 + _0x262f5c - 0x1,
        segmentId: this[_0x504494(0xf2)],
        startRow: _0x175907,
        tableId: this[_0x504494(0x168)],
        unitId: this["_unitId"],
      },
    );
  }
  ["deleteColumn"](_0x465a61) {
    return this[_0x528272(0x13d)](_0x465a61, 0x1);
  }
  ["deleteColumns"](_0x522d3f, _0x2fef63 = 0x1) {
    return !!this[_0x1a0e58(0xe7)][_0x1a0e58(0x175)](
      e["DocsTableDeleteColumnsCommand"]["id"],
      {
        endColumn: _0x522d3f + _0x2fef63 - 0x1,
        segmentId: this[_0x1a0e58(0xf2)],
        startColumn: _0x522d3f,
        tableId: this["_tableId"],
        unitId: this[_0x1a0e58(0x163)],
      },
    );
  }
  ["deleteTable"]() {
    return !!this[_0x5e65fa(0xe7)][_0x5e65fa(0x175)](
      e[_0x5e65fa(0x152)]["id"],
      {
        segmentId: this[_0x5e65fa(0xf2)],
        tableId: this["_tableId"],
        unitId: this[_0x5e65fa(0x163)],
      },
    );
  }
  ["moveTableBy"](_0x166c6c, _0x21fb96) {
    let _0x4da38e = this[_0x5882bf(0xd7)]();
    return this[_0x5882bf(0x11c)](
      _0x4da38e,
      (0x0, e[_0x5882bf(0x12a)])(
        _0x4da38e,
        this[_0x5882bf(0x168)],
        _0x166c6c,
        _0x21fb96,
      ),
    );
  }
  ["moveTableToOffset"](_0x120c56) {
    let _0x4fae77 = this[_0x51265d(0xd7)]();
    return this[_0x51265d(0x11c)](
      _0x4fae77,
      (0x0, e[_0x51265d(0xef)])(
        _0x4fae77,
        this[_0x51265d(0x168)],
        _0x120c56,
        this[_0x51265d(0xf0)](),
      ),
    );
  }
  ["moveRow"](
    _0x32c28e,
    _0x1a1be1,
    _0x1f79b4 = e["DocsTableInsertPosition"]["Above"],
  ) {
    return this[_0x266079(0x10b)](_0x32c28e, 0x1, _0x1a1be1, _0x1f79b4);
  }
  ["moveRows"](
    _0x5661d3,
    _0x78f9e9,
    _0x437849,
    _0x2b30a2 = e["DocsTableInsertPosition"]["Above"],
  ) {
    let _0x37975b = this[_0x4e09bd(0xd7)](),
      _0x4b777d = (0x0, e[_0x4e09bd(0x167)])(
        _0x37975b,
        this[_0x4e09bd(0x168)],
        _0x5661d3,
        _0x437849,
        _0x78f9e9,
        _0x2b30a2,
        this[_0x4e09bd(0xf0)](),
      );
    return _0x4b777d
      ? this[_0x4e09bd(0x11c)](_0x37975b, _0x4b777d[_0x4e09bd(0x16b)])
      : !0x1;
  }
  ["moveColumn"](
    _0x2f57a8,
    _0x1214b7,
    _0x4a8427 = e["DocsTableInsertPosition"]["Left"],
  ) {
    return this[_0x5b3fea(0x16c)](_0x2f57a8, 0x1, _0x1214b7, _0x4a8427);
  }
  ["moveColumns"](
    _0x3b9fb2,
    _0xd855a1,
    _0x74a838,
    _0x4dcc0c = e["DocsTableInsertPosition"]["Left"],
  ) {
    let _0xa1ec95 = this[_0x3089f3(0xd7)](),
      _0x215aab = (0x0, e["buildMoveTableColumnsMutationActions"])(
        _0xa1ec95,
        this[_0x3089f3(0x168)],
        _0x3b9fb2,
        _0x74a838,
        _0xd855a1,
        _0x4dcc0c,
        this[_0x3089f3(0xf0)](),
      );
    return _0x215aab
      ? this[_0x3089f3(0x11c)](_0xa1ec95, _0x215aab["actions"])
      : !0x1;
  }
  ["mergeCells"](_0x2464fb) {
    try {
      let _0x42955b = this[_0xde5c88(0xd7)](),
        _0x3ecd50 = (0x0, e[_0xde5c88(0xe0)])({
          documentData: _0x42955b,
          tableId: this[_0xde5c88(0x168)],
          ..._0x2464fb,
        });
      return _0x3ecd50
        ? this["_mutateActions"](
            _0x42955b,
            _0x3ecd50[_0xde5c88(0x16b)],
            _0x2464fb,
          )
        : !0x1;
    } catch {
      return !0x1;
    }
  }
  ["unmergeCells"](_0x147a95) {
    try {
      let _0x28a69b = this[_0x40af6d(0xd7)](),
        _0x5b6cdf = (0x0, e[_0x40af6d(0xfd)])({
          documentData: _0x28a69b,
          tableId: this["_tableId"],
          ..._0x147a95,
        });
      return _0x5b6cdf
        ? this[_0x40af6d(0x11c)](_0x28a69b, _0x5b6cdf["actions"], _0x147a95)
        : !0x1;
    } catch {
      return !0x1;
    }
  }
  ["setCellText"](_0x3bf0d6, _0x3785fd, _0xe1cc37) {
    let _0x824eda = this[_0x321afd(0xd7)](),
      _0x1a7158 = (0x0, e[_0x321afd(0xce)])(
        this["_document"][_0x321afd(0x135)]()[_0x321afd(0x142)](),
        this[_0x321afd(0xf2)],
      );
    return this[_0x321afd(0x11c)](
      _0x824eda,
      (0x0, e[_0x321afd(0xd2)])(
        {
          documentData: _0x824eda,
          tableId: this[_0x321afd(0x168)],
          row: _0x3bf0d6,
          column: _0x3785fd,
          text: _0xe1cc37,
        },
        _0x1a7158,
      ),
      this[_0x321afd(0xc2)](_0x3bf0d6, _0x3785fd),
    );
  }
  ["setCellBackground"](_0x2e6b22, _0x19dc26) {
    let _0x33d326 = this["_getDocumentData"]();
    return this[_0x149b26(0x11c)](
      _0x33d326,
      (0x0, e[_0x149b26(0x17b)])(_0x33d326, {
        tableId: this[_0x149b26(0x168)],
        ..._0x2e6b22,
        value: _0x19dc26,
      }),
      _0x2e6b22,
    );
  }
  ["setCellMargin"](_0x18be92, _0x5bcbd3) {
    let _0x1ee3c1 = this[_0x1d17c4(0xd7)]();
    return this["_mutateActions"](
      _0x1ee3c1,
      (0x0, e["buildSetTableCellMarginMutationActions"])({
        documentData: _0x1ee3c1,
        tableId: this["_tableId"],
        ..._0x18be92,
        margin: _0x5bcbd3,
      }),
      _0x18be92,
    );
  }
  ["setDefaultCellMargin"](_0x25edc1) {
    let _0x547af2 = this[_0x6c6f4d(0xd7)]();
    return this[_0x6c6f4d(0x11c)](
      _0x547af2,
      (0x0, e[_0x6c6f4d(0xbb)])(_0x547af2, this["_tableId"], _0x25edc1),
    );
  }
  ["setBorder"](_0x4b7eae, _0x16e23d) {
    let _0x3d2fc9 = this[_0x13d43a(0xd7)]();
    return this[_0x13d43a(0x11c)](
      _0x3d2fc9,
      (0x0, e["buildSetTableBorderMutationActions"])({
        documentData: _0x3d2fc9,
        tableId: this[_0x13d43a(0x168)],
        ..._0x4b7eae,
        preset:
          _0x16e23d[_0x13d43a(0x12b)] ?? e[_0x13d43a(0x192)][_0x13d43a(0x104)],
        border: _0x16e23d[_0x13d43a(0x15c)] ?? {
          color: { rgb: _0x16e23d[_0x13d43a(0x180)] ?? _0x13d43a(0x127) },
          width: { v: _0x16e23d["width"] ?? 0x1 },
          dashStyle: t[_0x13d43a(0x159)][_0x13d43a(0x124)],
        },
      }),
      _0x4b7eae,
    );
  }
  ["setTableBackground"](_0x4d1284) {
    return this[_0x35a393(0xbf)](this[_0x35a393(0x191)](), _0x4d1284);
  }
  ["setTableBorder"](_0x18dcbb) {
    return this[_0x2ec417(0xd4)](this["getTableRange"](), _0x18dcbb);
  }
  ["setTableStyle"](_0x28b022) {
    let _0x279814 =
        !_0x28b022[_0x5cc591(0x17c)] ||
        this[_0x5cc591(0x16d)](_0x28b022[_0x5cc591(0x17c)]),
      _0x52a6e4 =
        !_0x28b022[_0x5cc591(0x15c)] ||
        this["setTableBorder"](_0x28b022["border"]);
    return _0x279814 && _0x52a6e4;
  }
  ["setRowHeight"](
    _0xc5c15f,
    _0x4fae5e,
    _0x3b2b84 = t["TableRowHeightRule"]["AT_LEAST"],
  ) {
    var _0x295651;
    let _0xc2e38c = this[_0x490b61(0xd7)]();
    return (_0x295651 = _0xc2e38c[_0x490b61(0x125)]) != null &&
      (_0x295651 = _0x295651[this["_tableId"]]) != null &&
      _0x295651["tableRows"][_0xc5c15f]
      ? this[_0x490b61(0x11c)](
          _0xc2e38c,
          (0x0, e[_0x490b61(0x106)])(
            _0xc2e38c,
            this[_0x490b61(0x168)],
            _0xc5c15f,
            _0x4fae5e,
            _0x3b2b84,
          ),
        )
      : !0x1;
  }
  ["getRowHeight"](_0x10d26a) {
    var _0x3d67a7;
    let _0x1a2671 =
      (_0x3d67a7 = this[_0x5c044d(0x108)]()) == null ||
      (_0x3d67a7 = _0x3d67a7[_0x5c044d(0x181)][_0x10d26a]) == null
        ? void 0x0
        : _0x3d67a7[_0x5c044d(0x17a)];
    return _0x1a2671 ? t[_0x5c044d(0xc6)][_0x5c044d(0x130)](_0x1a2671) : null;
  }
  ["setColumnWidth"](_0x437752, _0x6add11) {
    var _0x57b957;
    let _0x2ad1d9 = this["_getDocumentData"]();
    return (_0x57b957 = _0x2ad1d9[_0xfe384a(0x125)]) != null &&
      (_0x57b957 = _0x57b957[this["_tableId"]]) != null &&
      _0x57b957[_0xfe384a(0x174)][_0x437752]
      ? this[_0xfe384a(0x11c)](
          _0x2ad1d9,
          (0x0, e[_0xfe384a(0x137)])(
            _0x2ad1d9,
            this["_tableId"],
            _0x437752,
            _0x6add11,
          ),
        )
      : !0x1;
  }
  ["distributeRows"](_0x46a082 = 0x0, _0x44df03 = this["getRowCount"]()) {
    let _0x2c7f85 = this[_0x2e67d7(0xd7)]();
    return this[_0x2e67d7(0x11c)](
      _0x2c7f85,
      (0x0, e["buildDistributeTableRowsMutationActions"])(
        _0x2c7f85,
        this["_tableId"],
        _0x46a082,
        _0x46a082 + _0x44df03 - 0x1,
      ),
    );
  }
  ["distributeColumns"](_0x27b668 = 0x0, _0x12461c = this["getColumnCount"]()) {
    let _0x4a49d3 = this[_0xe593eb(0xd7)]();
    return this[_0xe593eb(0x11c)](
      _0x4a49d3,
      (0x0, e[_0xe593eb(0x15a)])(
        _0x4a49d3,
        this[_0xe593eb(0x168)],
        _0x27b668,
        _0x27b668 + _0x12461c - 0x1,
      ),
    );
  }
  ["getHeaderRowCount"]() {
    var _0x140d45;
    return (
      ((_0x140d45 = this["getMetadata"]()) == null
        ? void 0x0
        : _0x140d45[_0x4ced1e(0xc3)]) ?? 0x0
    );
  }
  ["setHeaderRowCount"](_0x300a18) {
    let _0xe34285 = this[_0x47a433(0xdb)]["get"](e["DocsTableModel"]),
      _0x3534a8 = this[_0x47a433(0xd7)](),
      _0x9c3084 = (0x0, e["buildSetTableHeaderRowCountMutationActions"])(
        _0x3534a8,
        this[_0x47a433(0x168)],
        _0x300a18,
      );
    if (!_0x9c3084) return !0x1;
    let _0x4c3a4e = this[_0x47a433(0x11c)](
      _0x3534a8,
      _0x9c3084[_0x47a433(0x16b)],
    );
    return (
      _0x4c3a4e &&
        _0xe34285[_0x47a433(0xd1)](
          this["_unitId"],
          this[_0x47a433(0x168)],
          _0x9c3084["headerRowCount"],
        ),
      _0x4c3a4e
    );
  }
  ["pinHeaderRows"](_0x41a743) {
    return this[_0x525f8f(0xd1)](_0x41a743);
  }
  ["hasTitleRow"]() {
    var _0x3d9f6b;
    return (
      ((_0x3d9f6b = this[_0x211ac7(0xb8)]()) == null
        ? void 0x0
        : _0x3d9f6b[_0x211ac7(0x112)]) ?? !0x1
    );
  }
  ["insertTitleRow"]() {
    let _0x151fec = this["_injector"]["get"](e["DocsTableModel"]),
      _0x346925 = this[_0x15ad42(0xd7)](),
      _0x20a06c = (0x0, e[_0x15ad42(0x14d)])(
        _0x346925,
        this["_tableId"],
        this["_getBodyPath"](),
      );
    if (!_0x20a06c) return !0x1;
    let _0x56bad2 = this[_0x15ad42(0x11c)](
      _0x346925,
      _0x20a06c[_0x15ad42(0x16b)],
    );
    return (
      _0x56bad2 &&
        _0x151fec[_0x15ad42(0x13c)](
          this[_0x15ad42(0x163)],
          this[_0x15ad42(0x168)],
          !0x0,
        ),
      _0x56bad2
    );
  }
  ["setColumnType"](_0x55c72f, _0x4d50da) {
    return (
      this[_0x35d820(0xdb)]
        [_0x35d820(0x170)](e[_0x35d820(0x139)])
        [_0x35d820(0xc8)](
          this[_0x35d820(0x163)],
          this[_0x35d820(0x168)],
          _0x55c72f,
          _0x4d50da,
        ),
      !0x0
    );
  }
  ["sortByColumn"](_0x46138f, _0x5a0654) {
    let _0x24e22c = this[_0x41ab0c(0xd7)]();
    return this["_mutateActions"](
      _0x24e22c,
      (0x0, e["buildSortTableMutationActions"])(
        _0x24e22c,
        this[_0x41ab0c(0x164)](),
        this[_0x41ab0c(0x168)],
        _0x46138f,
        _0x5a0654,
        this["_getBodyPath"](),
      ),
    );
  }
  ["_getDocumentData"]() {
    let _0x4a2155 = this[_0xe9f8d(0xf9)][_0xe9f8d(0x135)]()[_0xe9f8d(0x142)]();
    return this[_0xe9f8d(0xf2)]
      ? {
          ...this[_0xe9f8d(0xf9)]
            [_0xe9f8d(0x135)](this[_0xe9f8d(0xf2)])
            ["getSnapshot"](),
          documentStyle: _0x4a2155[_0xe9f8d(0x13f)],
          tableSource: _0x4a2155["tableSource"],
        }
      : _0x4a2155;
  }
  ["_serializeModel"]() {
    return this[_0xcda5a2(0xdb)]
      [_0xcda5a2(0x170)](e[_0xcda5a2(0x139)])
      [_0xcda5a2(0x15e)](this[_0xcda5a2(0x163)]);
  }
  ["_getBodyPath"]() {
    return (0x0, e[_0x560a33(0xce)])(
      this[_0x560a33(0xf9)][_0x560a33(0x135)]()[_0x560a33(0x142)](),
      this[_0x560a33(0xf2)],
    );
  }
  ["_mutateActions"](_0x3aec7b, _0x2d18f8, _0x6848a3) {
    return (0x0, e[_0x415ec2(0x155)])(
      this["_commandService"],
      this[_0x415ec2(0x163)],
      _0x3aec7b,
      _0x2d18f8,
      _0x6848a3
        ? {
            tableId: this["_tableId"],
            segmentId: this[_0x415ec2(0xf2)],
            ..._0x6848a3,
          }
        : void 0x0,
    );
  }
};
f = d(
  [u(0x3, t["ICommandService"]), u(0x4, (0x0, t["Inject"])(t["Injector"]))],
  f,
);
var p = class extends r["FDocument"] {
  ["getTables"](_0x98f913 = "") {
    return this[_0x2c35e0(0xe2)](_0x98f913)[_0x2c35e0(0x123)]((_0x1080f4) =>
      this[_0x2c35e0(0xee)](_0x1080f4[_0x2c35e0(0x11d)], _0x98f913),
    );
  }
  ["getTable"](_0x1c87dd, _0x290f66 = "") {
    return this["_getTables"](_0x290f66)[_0x48d3b5(0x109)](
      (_0x2237c0) => _0x2237c0[_0x48d3b5(0x11d)] === _0x1c87dd,
    )
      ? this[_0x48d3b5(0xee)](_0x1c87dd, _0x290f66)
      : null;
  }
  ["getTableAt"](_0x24bbde, _0x41d37c = "") {
    var _0x4581cd;
    let _0x3fac1c =
      (_0x4581cd = this[_0x11ec37(0xe2)](_0x41d37c)[_0x24bbde]) == null
        ? void 0x0
        : _0x4581cd["tableId"];
    return _0x3fac1c ? this[_0x11ec37(0xee)](_0x3fac1c, _0x41d37c) : null;
  }
  ["getTableAtSelection"]() {
    let _0x5a0e13 = this["_injector"]
      [_0x1bafc1(0x170)](e[_0x1bafc1(0x188)])
      [_0x1bafc1(0xea)]();
    return _0x5a0e13 != null && _0x5a0e13[_0x1bafc1(0x11d)]
      ? this[_0x1bafc1(0xee)](
          _0x5a0e13[_0x1bafc1(0x11d)],
          _0x5a0e13[_0x1bafc1(0x177)],
        )
      : null;
  }
  ["findTableByText"](_0x46eb7f, _0x2ba6cc = "") {
    return this[_0x1fc279(0x182)](_0x46eb7f, _0x2ba6cc)[0x0] ?? null;
  }
  ["findTables"](_0x2f1eb4, _0x479fd4 = "") {
    let _0x16507c = this[_0x4277b8(0xfa)](_0x479fd4),
      _0x5e86d1 =
        typeof _0x2f1eb4 == _0x4277b8(0x15f) ? { text: _0x2f1eb4 } : _0x2f1eb4;
    return this[_0x4277b8(0xd5)](_0x479fd4)["filter"]((_0x18a23f) => {
      const _0x2bd485 = _0x4277b8;
      let _0x5c80a9 = _0x18a23f["getId"]();
      return !(
        (_0x5e86d1["tableId"] && _0x5c80a9 !== _0x5e86d1[_0x2bd485(0x11d)]) ||
        (_0x5e86d1["text"] &&
          !this["_tableContainsText"](
            _0x16507c,
            _0x5c80a9,
            _0x5e86d1[_0x2bd485(0xdd)],
          )) ||
        (_0x5e86d1[_0x2bd485(0x17d)] &&
          !this[_0x2bd485(0xf7)](
            _0x18a23f,
            0x0,
            _0x5e86d1[_0x2bd485(0x17d)],
          )) ||
        (_0x5e86d1[_0x2bd485(0x11b)] &&
          !this["_rowContainsText"](_0x18a23f, 0x0, _0x5e86d1["titleText"]))
      );
    });
  }
  ["insertTable"](_0x5defa1, _0x4781a1, _0x12430a = {}) {
    let _0xa48a86 = this["_injector"][_0x500fe8(0x170)](t[_0x500fe8(0xf5)]),
      _0x418414 = _0x12430a["tableId"] ?? (0x0, t[_0x500fe8(0x12f)])(0x6);
    return _0xa48a86["syncExecuteCommand"](e[_0x500fe8(0xda)]["id"], {
      ..._0x12430a,
      unitId: this["getId"](),
      rows: _0x5defa1,
      columns: _0x4781a1,
      tableId: _0x418414,
    })
      ? this["_createFDocumentTable"](
          _0x418414,
          _0x12430a[_0x500fe8(0x177)] ?? "",
        )
      : null;
  }
  ["insertTableFromData"](_0x3aadc0, _0x2be3d6 = {}) {
    let _0xdcb70b = this[_0x2d8829(0xdb)][_0x2d8829(0x170)](t[_0x2d8829(0xf5)]),
      _0x5e6c79 = _0x2be3d6["tableId"] ?? (0x0, t["generateRandomId"])(0x6);
    return _0xdcb70b[_0x2d8829(0x175)](e["DocsTableInsertTableCommand"]["id"], {
      ..._0x2be3d6,
      unitId: this[_0x2d8829(0x162)](),
      values: _0x3aadc0,
      tableId: _0x5e6c79,
    })
      ? this[_0x2d8829(0xee)](_0x5e6c79, _0x2be3d6[_0x2d8829(0x177)] ?? "")
      : null;
  }
  ["_getTables"](_0x250279 = "") {
    let { tables: _0x295bc1 = [] } = this[_0x2efa9b(0x154)](_0x250279);
    return _0x295bc1;
  }
  ["_getTableDocumentData"](_0x142782 = "") {
    let _0x821c83 = this["getDocumentDataModel"]()["getSnapshot"]();
    return _0x142782
      ? {
          ...this[_0x48d113(0x135)](_0x142782)[_0x48d113(0x142)](),
          documentStyle: _0x821c83[_0x48d113(0x13f)],
          tableSource: _0x821c83[_0x48d113(0x125)],
        }
      : _0x821c83;
  }
  ["_createFDocumentTable"](_0x169a9e, _0x55de7c = "") {
    return this[_0x23afaf(0xdb)][_0x23afaf(0x132)](
      f,
      this,
      _0x169a9e,
      _0x55de7c,
    );
  }
  ["_tableContainsText"](_0x49ea83, _0x2f7221, _0x2a650d) {
    var _0x33de0a;
    let _0x5104b9 = (0x0, e[_0x5d33a0(0x116)])(_0x49ea83, _0x2f7221);
    if (!_0x5104b9) return !0x1;
    let _0x5ed0a9 =
      (_0x33de0a = _0x49ea83[_0x5d33a0(0x133)]) == null
        ? void 0x0
        : _0x33de0a[_0x5d33a0(0x131)];
    return _0x5ed0a9
      ? _0x5ed0a9[_0x5d33a0(0x12e)](
          _0x5104b9[_0x5d33a0(0x102)],
          _0x5104b9["endOffset"],
        )["includes"](_0x2a650d)
      : !0x1;
  }
  ["_rowContainsText"](_0xb79304, _0x173725, _0x405c52) {
    return Array["from"](
      { length: _0xb79304[_0x5d1fc6(0x144)]() },
      (_0x1a1325, _0x588910) => _0xb79304["getCellText"](_0x173725, _0x588910),
    )[_0x5d1fc6(0x109)]((_0x81a4ca) => _0x81a4ca["includes"](_0x405c52));
  }
};
(r["FDocument"]["extend"](p),
  Object["defineProperty"](exports, "FDocumentTable", {
    enumerable: !0x0,
    get: function () {
      return f;
    },
  }),
  (exports["FDocumentTableCell"] = a));
