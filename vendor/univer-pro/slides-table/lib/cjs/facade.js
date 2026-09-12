Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/slides"),
  t = require("@univerjs-pro/slides-table"),
  n = require("@univerjs-pro/slides/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs/core/facade");
function a(_0x412973) {
  "@babel/helpers - typeof";
  return (
    (a =
      typeof Symbol == "function" && typeof Symbol["iterator"] == "symbol"
        ? function (_0x388d86) {
            return typeof _0x388d86;
          }
        : function (_0x34dc8d) {
            return _0x34dc8d &&
              typeof Symbol == "function" &&
              _0x34dc8d["constructor"] === Symbol &&
              _0x34dc8d !== Symbol["prototype"]
              ? "symbol"
              : typeof _0x34dc8d;
          }),
    a(_0x412973)
  );
}
function o(_0x2327de, _0x495158) {
  if (a(_0x2327de) != "object" || !_0x2327de) return _0x2327de;
  var _0x63f970 = _0x2327de[Symbol["toPrimitive"]];
  if (_0x63f970 !== void 0x0) {
    var _0x5ee76a = _0x63f970["call"](_0x2327de, _0x495158 || "default");
    if (a(_0x5ee76a) != "object") return _0x5ee76a;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x495158 === "string" ? String : Number)(_0x2327de);
}
function s(_0xb1ab87) {
  var _0x4b67cb = o(_0xb1ab87, "string");
  return a(_0x4b67cb) == "symbol" ? _0x4b67cb : _0x4b67cb + "";
}
function c(_0x1df068, _0x51cff2, _0x59ca53) {
  return (
    (_0x51cff2 = s(_0x51cff2)) in _0x1df068
      ? Object["defineProperty"](_0x1df068, _0x51cff2, {
          value: _0x59ca53,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x1df068[_0x51cff2] = _0x59ca53),
    _0x1df068
  );
}
var l = class extends i["FBase"] {
    constructor(_0x785f54, _0x5fe8d9, _0x2fb243, _0x3eff59) {
      var _0x2267b6, _0x5e1ba6;
      (super(),
        (this["unitId"] = _0x785f54),
        (this["subUnitId"] = _0x5fe8d9),
        (this["_injector"] = _0x2fb243),
        c(this, "table", {}),
        c(this, "element", {}),
        c(this, "_values", void 0x0),
        c(this, "_textData", void 0x0),
        c(this, "_rows", 0x0),
        c(this, "_columns", 0x0),
        c(this, "_rowHeight", void 0x0),
        c(this, "_columnWidth", void 0x0),
        c(this, "_cellStyles", []),
        _0x3eff59 != null &&
          _0x3eff59["table"] &&
          (this["table"] = r["Tools"]["deepClone"](_0x3eff59["table"])),
        this["table"]["id"] ||
          (this["table"]["id"] = (0x0, r["generateRandomId"])(0x6)),
        _0x3eff59 != null &&
          _0x3eff59["element"] &&
          (this["element"] = r["Tools"]["deepClone"](_0x3eff59["element"])),
        this["element"]["id"] ||
          (this["element"]["id"] = (0x0, r["generateRandomId"])(0x6)),
        (this["element"]["type"] = e["PageElementTypeEnum"]["Table"]),
        (this["element"]["tableId"] = this["table"]["id"]),
        (this["_rows"] =
          ((_0x2267b6 = this["table"]["rows"]) == null
            ? void 0x0
            : _0x2267b6["length"]) ?? t["DEFAULT_SLIDE_TABLE_ROW_COUNT"]),
        (this["_columns"] =
          ((_0x5e1ba6 = this["table"]["columns"]) == null
            ? void 0x0
            : _0x5e1ba6["length"]) ?? t["DEFAULT_SLIDE_TABLE_COLUMN_COUNT"]));
    }
    ["setValues"](_0x44cf9f) {
      return (
        (this["_values"] = _0x44cf9f["map"]((_0x52263b) => [..._0x52263b])),
        this["_handleMaxRowsColumns"](this["_rows"], this["_columns"]),
        this
      );
    }
    ["setTextData"](_0x3b8517) {
      return (
        (this["_textData"] = r["Tools"]["deepClone"](_0x3b8517)),
        this["_handleMaxRowsColumns"](this["_rows"], this["_columns"]),
        this
      );
    }
    ["setRichTextValues"](_0x17da4e) {
      return this["setTextData"](
        _0x17da4e["map"]((_0x5c167c) =>
          _0x5c167c["map"]((_0x5a0832) => _0x5a0832["getData"]()),
        ),
      );
    }
    ["setRows"](_0x3178e2) {
      return (this[_0x317136(0x15e)](_0x3178e2, this["_columns"]), this);
    }
    ["setColumns"](_0xe68fa3) {
      return (this[_0x494632(0x15e)](this[_0x494632(0xe8)], _0xe68fa3), this);
    }
    ["setAbsolutePosition"](_0x3d3385, _0x468788) {
      return (
        (this[_0x480561(0x104)][_0x480561(0xbb)] = {
          ...this["element"][_0x480561(0xbb)],
          left: _0x3d3385,
          top: _0x468788,
        }),
        this
      );
    }
    ["setSize"](_0x10bb46, _0x1d1230) {
      return (
        (this[_0x4af89a(0x104)][_0x4af89a(0xbb)] = {
          ...this[_0x4af89a(0x104)][_0x4af89a(0xbb)],
          width: _0x10bb46,
          height: _0x1d1230,
        }),
        this
      );
    }
    ["setRotation"](_0x1167d6) {
      return (
        (this[_0x285b3a(0x104)][_0x285b3a(0xbb)] = {
          ...this[_0x285b3a(0x104)]["transform"],
          rotation: _0x1167d6,
        }),
        this
      );
    }
    ["setPlaceholder"](_0x1f60ca) {
      return (
        (this["element"][_0x1f62ed(0xb3)] = {
          ...this[_0x1f62ed(0x104)][_0x1f62ed(0xb3)],
          ..._0x1f60ca,
        }),
        this
      );
    }
    ["setRowHeight"](_0x242570) {
      return ((this["_rowHeight"] = _0x242570), this);
    }
    ["setColumnWidth"](_0xa2445a) {
      return ((this["_columnWidth"] = _0xa2445a), this);
    }
    ["setCellStyles"](_0x3fd5c4) {
      return ((this["_cellStyles"] = _0x3fd5c4), this);
    }
    ["setOptions"](_0x2f75ce) {
      return (
        (this[_0x347d80(0x17b)][_0x347d80(0x143)] = {
          ...this[_0x347d80(0x17b)][_0x347d80(0x143)],
          ..._0x2f75ce,
        }),
        this
      );
    }
    ["setName"](_0xe9ca83) {
      return ((this[_0x3dbd85(0x17b)][_0x3dbd85(0xad)] = _0xe9ca83), this);
    }
    ["setDescription"](_0x4d4dd7) {
      return ((this["table"][_0x2fa4c2(0x16d)] = _0x4d4dd7), this);
    }
    ["setStyleId"](_0x1d959e) {
      return ((this[_0x10f33a(0x17b)][_0x10f33a(0xde)] = _0x1d959e), this);
    }
    ["setCustom"](_0x121bf7) {
      return ((this[_0x189d08(0x17b)][_0x189d08(0xd4)] = _0x121bf7), this);
    }
    ["build"]() {
      let {
        rows: _0x2ce7e3,
        columns: _0x584e43,
        resolvedOptions: _0x307907,
      } = (0x0, t["buildSlideTable"])({
        tableId: this[_0x5cf559(0x17b)]["id"],
        values: this["_values"],
        textData: this["_textData"],
        rows: this["_rows"],
        columns: this[_0x5cf559(0x109)],
        rowHeight: this[_0x5cf559(0xb5)],
        columnWidth: this[_0x5cf559(0xe5)],
        cellStyles: this[_0x5cf559(0x159)],
      });
      return (
        (this[_0x5cf559(0x17b)][_0x5cf559(0x11a)] = _0x2ce7e3),
        (this["table"]["columns"] = _0x584e43),
        (this[_0x5cf559(0x104)]["transform"] =
          this["_resolveElementTransform"](_0x307907)),
        {
          unitId: this[_0x5cf559(0xb4)],
          subUnitId: this[_0x5cf559(0x116)],
          createOptions: {
            id: this[_0x5cf559(0x17b)]["id"],
            rows: this[_0x5cf559(0xe8)],
            columns: this[_0x5cf559(0x109)],
            name: this[_0x5cf559(0x17b)]["name"],
            description: this[_0x5cf559(0x17b)]["description"],
            styleId: this[_0x5cf559(0x17b)][_0x5cf559(0xde)],
            columnWidth: _0x307907[_0x5cf559(0x16b)],
            rowHeight: _0x307907["rowHeight"],
            options: this[_0x5cf559(0x17b)][_0x5cf559(0x143)],
          },
          table: this[_0x5cf559(0x17b)],
          element: this[_0x5cf559(0x104)],
        }
      );
    }
    ["_resolveElementTransform"](_0x14239d) {
      let _0x229a09 = this[_0x656d6c(0x104)][_0x656d6c(0xbb)],
        _0x5bd24f = _0x14239d[_0x656d6c(0x155)] * _0x14239d[_0x656d6c(0x16b)],
        _0x527994 = _0x14239d[_0x656d6c(0x11a)] * _0x14239d[_0x656d6c(0xce)];
      return {
        left:
          (_0x229a09 == null ? void 0x0 : _0x229a09[_0x656d6c(0x156)]) ??
          t[_0x656d6c(0xee)],
        top:
          (_0x229a09 == null ? void 0x0 : _0x229a09[_0x656d6c(0x13e)]) ??
          t["DEFAULT_SLIDE_TABLE_ELEMENT_TOP"],
        width: Math[_0x656d6c(0xe3)](
          (_0x229a09 == null ? void 0x0 : _0x229a09[_0x656d6c(0x12a)]) ?? 0x0,
          _0x5bd24f,
        ),
        height: Math[_0x656d6c(0xe3)](
          (_0x229a09 == null ? void 0x0 : _0x229a09[_0x656d6c(0xe0)]) ?? 0x0,
          _0x527994,
        ),
        rotation:
          (_0x229a09 == null ? void 0x0 : _0x229a09["rotation"]) ??
          t["DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION"],
      };
    }
    ["_handleMaxRowsColumns"](_0x3d820c, _0x532b28) {
      var _0x37c112, _0x4b19a1;
      let _0x149a97 =
          ((_0x37c112 = this[_0x314a3c(0x174)]) == null
            ? void 0x0
            : _0x37c112[_0x314a3c(0xb9)]) ?? 0x0,
        _0x140888 = 0x0;
      for (let _0x919a64 of this[_0x314a3c(0x174)] ?? [])
        _0x140888 = Math[_0x314a3c(0xe3)](
          _0x140888,
          _0x919a64[_0x314a3c(0xb9)],
        );
      let _0x93f4d5 =
          ((_0x4b19a1 = this["_textData"]) == null
            ? void 0x0
            : _0x4b19a1[_0x314a3c(0xb9)]) ?? 0x0,
        _0x50ed1e = 0x0;
      for (let _0x2b5952 of this[_0x314a3c(0xcb)] ?? [])
        _0x50ed1e = Math[_0x314a3c(0xe3)](
          _0x50ed1e,
          _0x2b5952[_0x314a3c(0xb9)],
        );
      ((this["_rows"] = Math[_0x314a3c(0xe3)](_0x3d820c, _0x149a97, _0x93f4d5)),
        (this["_columns"] = Math[_0x314a3c(0xe3)](
          _0x532b28,
          _0x140888,
          _0x50ed1e,
        )));
    }
  },
  u = class {
    constructor(_0x5e26d4, _0x472ee0, _0x12dbe7) {
      ((this[_0x453520(0x17e)] = _0x5e26d4),
        (this[_0x453520(0x118)] = _0x472ee0),
        (this[_0x453520(0x172)] = _0x12dbe7));
    }
    ["getTable"]() {
      return this[_0x2734c1(0x17e)];
    }
    ["getRowIndex"]() {
      return this["_row"];
    }
    ["getColumnIndex"]() {
      return this[_0x9120c0(0x172)];
    }
    ["getData"]() {
      return this["_table"][_0x348513(0xf7)](
        this[_0x348513(0x118)],
        this[_0x348513(0x172)],
      );
    }
    ["getText"]() {
      return this["_table"]["getCellText"](
        this[_0x454de3(0x118)],
        this[_0x454de3(0x172)],
      );
    }
    ["getTextData"]() {
      return this[_0x4ff0cb(0x17e)][_0x4ff0cb(0x15f)](
        this[_0x4ff0cb(0x118)],
        this["_column"],
      );
    }
    ["getRichText"]() {
      return this[_0x1517cb(0x17e)][_0x1517cb(0xc9)](
        this[_0x1517cb(0x118)],
        this[_0x1517cb(0x172)],
      );
    }
    ["getStyle"]() {
      return this["_table"][_0x1123ad(0x147)](
        this["_row"],
        this[_0x1123ad(0x172)],
      );
    }
    ["setText"](_0x52ef22) {
      return this["_table"][_0xb8121b(0xac)](
        this[_0xb8121b(0x118)],
        this["_column"],
        _0x52ef22,
      );
    }
    ["setTextData"](_0x2e6855) {
      return this[_0x21c823(0x17e)][_0x21c823(0x182)](
        this[_0x21c823(0x118)],
        this[_0x21c823(0x172)],
        _0x2e6855,
      );
    }
    ["setRichText"](_0x3151bb) {
      return this[_0x14f049(0x17e)][_0x14f049(0xea)](
        this[_0x14f049(0x118)],
        this["_column"],
        _0x3151bb,
      );
    }
    ["setStyle"](_0x3fa420) {
      return this[_0x5688bf(0x17e)][_0x5688bf(0x129)](
        this["_table"][_0x5688bf(0x177)](
          this[_0x5688bf(0x118)],
          this[_0x5688bf(0x172)],
        ),
        _0x3fa420,
      );
    }
    ["setFill"](_0x598da1) {
      return this[_0x17f73e(0x17e)][_0x17f73e(0xbd)](
        this["_table"][_0x17f73e(0x177)](
          this[_0x17f73e(0x118)],
          this[_0x17f73e(0x172)],
        ),
        _0x598da1,
      );
    }
    ["setBackgroundColor"](_0x83766) {
      return this[_0x54d03f(0x17e)]["setCellBackground"](
        this[_0x54d03f(0x17e)]["getCellRange"](
          this[_0x54d03f(0x118)],
          this[_0x54d03f(0x172)],
        ),
        _0x83766,
      );
    }
    ["clearBackground"]() {
      return this["setFill"](void 0x0);
    }
    ["setBorder"](_0x44341f) {
      return this[_0x48f9dd(0x17e)][_0x48f9dd(0xa9)](
        this[_0x48f9dd(0x17e)]["getCellRange"](
          this[_0x48f9dd(0x118)],
          this[_0x48f9dd(0x172)],
        ),
        _0x44341f,
      );
    }
    ["mergeTo"](_0x4525b7, _0x22d0b6) {
      return this[_0x30c149(0x17e)][_0x30c149(0xab)]({
        startRow: this[_0x30c149(0x118)],
        endRow: this["_row"] + _0x4525b7 - 0x1,
        startColumn: this["_column"],
        endColumn: this[_0x30c149(0x172)] + _0x22d0b6 - 0x1,
      });
    }
    ["unmerge"]() {
      return this[_0x35d564(0x17e)]["unmergeCell"](
        this[_0x35d564(0x118)],
        this["_column"],
      );
    }
  };
function d(_0x306b29, _0x136d0c) {
  return function (_0x5daa68, _0x4b0966) {
    _0x136d0c(_0x5daa68, _0x4b0966, _0x306b29);
  };
}
function f(_0x552687, _0x4558f9, _0x554903, _0x5bdb57) {
  var _0x41f377 = arguments[_0x3e429f(0xb9)],
    _0x40ac37 =
      _0x41f377 < 0x3
        ? _0x4558f9
        : _0x5bdb57 === null
          ? (_0x5bdb57 = Object[_0x3e429f(0x16c)](_0x4558f9, _0x554903))
          : _0x5bdb57,
    _0x5505b0;
  if (
    typeof Reflect == _0x3e429f(0x181) &&
    typeof Reflect[_0x3e429f(0x125)] == _0x3e429f(0xaa)
  )
    _0x40ac37 = Reflect["decorate"](_0x552687, _0x4558f9, _0x554903, _0x5bdb57);
  else {
    for (
      var _0x4719f8 = _0x552687["length"] - 0x1;
      _0x4719f8 >= 0x0;
      _0x4719f8--
    )
      (_0x5505b0 = _0x552687[_0x4719f8]) &&
        (_0x40ac37 =
          (_0x41f377 < 0x3
            ? _0x5505b0(_0x40ac37)
            : _0x41f377 > 0x3
              ? _0x5505b0(_0x4558f9, _0x554903, _0x40ac37)
              : _0x5505b0(_0x4558f9, _0x554903)) || _0x40ac37);
  }
  return (
    _0x41f377 > 0x3 &&
      _0x40ac37 &&
      Object["defineProperty"](_0x4558f9, _0x554903, _0x40ac37),
    _0x40ac37
  );
}
let p = class extends n["FPageElement"] {
  constructor(
    _0x12311c,
    _0x558c7e,
    _0x164bac,
    _0xfc4300,
    _0x2efd74,
    _0x48224b,
    _0x1e33ef,
  ) {
    (super(
      _0x12311c,
      _0x558c7e,
      _0x164bac,
      _0xfc4300,
      _0x2efd74,
      _0x48224b,
      _0x1e33ef,
    ),
      (this[_0x2a0f24(0x111)] = _0xfc4300),
      (this[_0x2a0f24(0xc8)] = _0x2efd74));
  }
  ["getTableId"]() {
    return this[_0x477dc8(0xcd)]()[_0x477dc8(0x157)];
  }
  ["getTableData"]() {
    let _0x3d9f4d = this[_0x1a140e(0xd6)]
      [_0x1a140e(0xc5)](t["SlideTableResourceService"])
      [_0x1a140e(0xed)](this["unitId"], this[_0x1a140e(0x131)]());
    if (!_0x3d9f4d)
      throw Error(
        "Slide\x20table\x20resource\x20\x22" +
          this["getTableId"]() +
          _0x1a140e(0x167),
      );
    return _0x3d9f4d;
  }
  ["describe"]() {
    let _0x37c003 = this[_0x211e6d(0xca)]();
    return {
      id: _0x37c003["id"],
      elementId: this[_0x211e6d(0x122)](),
      rowCount: _0x37c003[_0x211e6d(0x11a)]["length"],
      columnCount: _0x37c003[_0x211e6d(0x155)][_0x211e6d(0xb9)],
      name: _0x37c003[_0x211e6d(0xad)],
      description: _0x37c003["description"],
      styleId: _0x37c003["styleId"],
      options: { ..._0x37c003[_0x211e6d(0x143)] },
      columns: _0x37c003[_0x211e6d(0x155)][_0x211e6d(0x14b)](
        (_0x23803c, _0x3c60d9) => ({
          index: _0x3c60d9,
          width: _0x23803c["width"],
        }),
      ),
      rows: _0x37c003["rows"][_0x211e6d(0x14b)]((_0x464e50, _0x309cec) => ({
        index: _0x309cec,
        height: _0x464e50["height"],
      })),
      sampleRows: _0x37c003["rows"]
        [_0x211e6d(0x14b)]((_0x42c35f, _0x4891a0) =>
          _0x37c003["columns"][_0x211e6d(0x14b)]((_0x506f9, _0xa9230f) =>
            this[_0x211e6d(0x11b)](_0x4891a0, _0xa9230f),
          ),
        )
        [_0x211e6d(0xf2)]((_0xb87f96) =>
          _0xb87f96[_0x211e6d(0x180)](
            (_0x1e73c2) => _0x1e73c2[_0x211e6d(0xb9)] > 0x0,
          ),
        )
        [_0x211e6d(0x10f)](0x0, 0x5),
    };
  }
  ["getRowCount"]() {
    return this[_0x23ffda(0xca)]()["rows"]["length"];
  }
  ["getColumnCount"]() {
    return this["getTableData"]()[_0xc9c937(0x155)]["length"];
  }
  ["getCell"](_0x20849d, _0x30d452) {
    var _0x33b85b;
    return (_0x33b85b = this[_0x169bd3(0xca)]()[_0x169bd3(0x11a)][_0x20849d]) !=
      null && _0x33b85b[_0x169bd3(0xeb)][_0x30d452]
      ? this[_0x169bd3(0xd6)][_0x169bd3(0x100)](u, this, _0x20849d, _0x30d452)
      : null;
  }
  ["getCellData"](_0x29a53a, _0x3cc287) {
    var _0xd2e9c5;
    let _0x49c1aa =
      (_0xd2e9c5 = this["getTableData"]()[_0x52aa8c(0x11a)][_0x29a53a]) == null
        ? void 0x0
        : _0xd2e9c5[_0x52aa8c(0xeb)][_0x3cc287];
    return _0x49c1aa ? r["Tools"][_0x52aa8c(0x11e)](_0x49c1aa) : null;
  }
  ["getCellText"](_0x5afe7e, _0x3e30b2) {
    var _0x2156d9;
    let _0x541eb8 =
      (_0x2156d9 = this["getTableData"]()["rows"][_0x5afe7e]) == null ||
      (_0x2156d9 = _0x2156d9[_0x494ac0(0xeb)][_0x3e30b2]) == null
        ? void 0x0
        : _0x2156d9["textData"];
    return _0x541eb8 ? (0x0, e[_0x494ac0(0x175)])(_0x541eb8) : "";
  }
  ["getCellTextData"](_0x537e34, _0x4e32d0) {
    var _0x267d7c;
    let _0x53ac72 =
      (_0x267d7c = this["getTableData"]()[_0x33e651(0x11a)][_0x537e34]) ==
        null || (_0x267d7c = _0x267d7c["cells"][_0x4e32d0]) == null
        ? void 0x0
        : _0x267d7c[_0x33e651(0x149)];
    return _0x53ac72
      ? r[_0x33e651(0x165)][_0x33e651(0x11e)](_0x53ac72)
      : void 0x0;
  }
  ["getCellRichText"](_0x2c3cc7, _0x7d249a) {
    let _0x1fd031 = this["getCellTextData"](_0x2c3cc7, _0x7d249a);
    return _0x1fd031 ? r[_0x51bf01(0x15b)][_0x51bf01(0xda)](_0x1fd031) : null;
  }
  ["getCellStyle"](_0x2bbe35, _0x4d4867) {
    var _0x33c0f6;
    let _0x8e665f =
      (_0x33c0f6 = this[_0x1403cd(0xca)]()[_0x1403cd(0x11a)][_0x2bbe35]) ==
        null || (_0x33c0f6 = _0x33c0f6["cells"][_0x4d4867]) == null
        ? void 0x0
        : _0x33c0f6[_0x1403cd(0xbe)];
    return _0x8e665f
      ? r[_0x1403cd(0x165)][_0x1403cd(0x11e)](_0x8e665f)
      : void 0x0;
  }
  ["getTableRange"]() {
    return {
      startRow: 0x0,
      endRow: Math[_0x276e4d(0xe3)](0x0, this[_0x276e4d(0xc1)]() - 0x1),
      startColumn: 0x0,
      endColumn: Math[_0x276e4d(0xe3)](0x0, this["getColumnCount"]() - 0x1),
    };
  }
  ["getCellRange"](_0x466c96, _0x3a991f) {
    return {
      startRow: _0x466c96,
      endRow: _0x466c96,
      startColumn: _0x3a991f,
      endColumn: _0x3a991f,
    };
  }
  ["getRowsRange"](_0x54c891, _0x149fae = 0x1) {
    return {
      startRow: _0x54c891,
      endRow: _0x54c891 + _0x149fae - 0x1,
      startColumn: 0x0,
      endColumn: Math[_0xde4b24(0xe3)](0x0, this["getColumnCount"]() - 0x1),
    };
  }
  ["getColumnsRange"](_0x1e3bd3, _0x3ecf52 = 0x1) {
    return {
      startRow: 0x0,
      endRow: Math[_0x1bd123(0xe3)](0x0, this["getRowCount"]() - 0x1),
      startColumn: _0x1e3bd3,
      endColumn: _0x1e3bd3 + _0x3ecf52 - 0x1,
    };
  }
  ["toBuilder"]() {
    let _0xdb4b7c = this[_0x4809ba(0xca)](),
      _0x343515 = this[_0x4809ba(0xcd)]();
    return this[_0x4809ba(0xd6)][_0x4809ba(0x100)](
      l,
      this[_0x4809ba(0xb4)],
      this[_0x4809ba(0x116)],
      this[_0x4809ba(0xd6)],
      { table: _0xdb4b7c, element: _0x343515 },
    );
  }
  ["insertRowsBefore"](_0x267944, _0x4caff7 = 0x1, _0x3d9486) {
    return this[_0x186f8f(0xd6)]
      [_0x186f8f(0xc5)](r[_0x186f8f(0x11f)])
      ["syncExecuteCommand"](t["InsertSlideTableRowsCommand"]["id"], {
        unitId: this[_0x186f8f(0xb4)],
        subUnitId: this[_0x186f8f(0x116)],
        elementId: this[_0x186f8f(0x108)],
        tableId: this["getTableId"](),
        rowIndex: _0x267944,
        count: _0x4caff7,
        height: _0x3d9486,
      });
  }
  ["insertRowsAfter"](_0x5958fd, _0x21239a = 0x1, _0x3a3e55) {
    return this[_0x372d74(0x15c)](_0x5958fd + 0x1, _0x21239a, _0x3a3e55);
  }
  ["appendRows"](_0x2bd2ef = 0x1, _0x4a9417) {
    return this[_0x11b1a7(0x15c)](
      this[_0x11b1a7(0xc1)](),
      _0x2bd2ef,
      _0x4a9417,
    );
  }
  ["deleteRows"](_0x4a1763, _0x48f61d = 0x1) {
    return this["_injector"]
      [_0x6e602(0xc5)](r[_0x6e602(0x11f)])
      [_0x6e602(0x151)](t["DeleteSlideTableRowsCommand"]["id"], {
        unitId: this[_0x6e602(0xb4)],
        tableId: this[_0x6e602(0x131)](),
        startRow: _0x4a1763,
        endRow: _0x4a1763 + _0x48f61d - 0x1,
      });
  }
  ["insertColumnsBefore"](_0xb94290, _0x203fdd = 0x1, _0x1d6c9b) {
    return this[_0x38044e(0xd6)]
      [_0x38044e(0xc5)](r[_0x38044e(0x11f)])
      [_0x38044e(0x151)](t["InsertSlideTableColumnsCommand"]["id"], {
        unitId: this["unitId"],
        subUnitId: this[_0x38044e(0x116)],
        elementId: this[_0x38044e(0x108)],
        tableId: this[_0x38044e(0x131)](),
        columnIndex: _0xb94290,
        count: _0x203fdd,
        width: _0x1d6c9b,
      });
  }
  ["insertColumnsAfter"](_0x3fb2f7, _0x3e1953 = 0x1, _0x38dbb9) {
    return this[_0x21c650(0xc7)](_0x3fb2f7 + 0x1, _0x3e1953, _0x38dbb9);
  }
  ["appendColumns"](_0x1e0408 = 0x1, _0x39883d) {
    return this[_0x54113d(0xc7)](
      this[_0x54113d(0x12d)](),
      _0x1e0408,
      _0x39883d,
    );
  }
  ["deleteColumns"](_0x50c6c2, _0x852411 = 0x1) {
    return this[_0x19a74f(0xd6)]
      ["get"](r[_0x19a74f(0x11f)])
      [_0x19a74f(0x151)](t[_0x19a74f(0xf3)]["id"], {
        unitId: this[_0x19a74f(0xb4)],
        tableId: this[_0x19a74f(0x131)](),
        startColumn: _0x50c6c2,
        endColumn: _0x50c6c2 + _0x852411 - 0x1,
      });
  }
  ["mergeCells"](_0x102f32) {
    return this["_injector"]
      [_0x516cf2(0xc5)](r["ICommandService"])
      [_0x516cf2(0x151)](t["MergeSlideTableCellsCommand"]["id"], {
        unitId: this[_0x516cf2(0xb4)],
        tableId: this[_0x516cf2(0x131)](),
        range: (0x0, t["normalizeSlideTableCellRange"])(_0x102f32),
      });
  }
  ["unmergeCell"](_0x45f2c0, _0x4ab05b) {
    return this["_injector"]
      ["get"](r[_0x4d8883(0x11f)])
      [_0x4d8883(0x151)](t[_0x4d8883(0x16a)]["id"], {
        unitId: this[_0x4d8883(0xb4)],
        tableId: this["getTableId"](),
        row: _0x45f2c0,
        column: _0x4ab05b,
      });
  }
  ["remove"]() {
    return this[_0x547806(0xd6)]
      ["get"](r[_0x547806(0x11f)])
      [_0x547806(0x151)](t[_0x547806(0xd2)]["id"], {
        unitId: this["unitId"],
        subUnitId: this[_0x547806(0x116)],
        tableId: this[_0x547806(0x131)](),
        elementId: this[_0x547806(0x122)](),
      });
  }
  ["setCellText"](_0x5c4274, _0x3618c2, _0x9e750) {
    return this[_0x722dab(0x182)](
      _0x5c4274,
      _0x3618c2,
      (0x0, e["plainTextToSlideDocumentData"])(_0x9e750, {
        id:
          _0x722dab(0xc3) +
          this[_0x722dab(0x131)]() +
          "_" +
          _0x5c4274 +
          "_" +
          _0x3618c2,
      }),
    );
  }
  ["setCellTextData"](_0x4d0bcb, _0x520c81, _0x28ec46) {
    return this[_0xc6a571(0x144)]((_0x491c88) => {
      const _0x25a615 = _0xc6a571;
      var _0x5c083;
      let _0xd23b04 =
        (_0x5c083 = _0x491c88[_0x4d0bcb]) == null
          ? void 0x0
          : _0x5c083[_0x25a615(0xeb)][_0x520c81];
      return _0xd23b04
        ? ((_0xd23b04["textData"] =
            r[_0x25a615(0x165)][_0x25a615(0x11e)](_0x28ec46)),
          !0x0)
        : !0x1;
    });
  }
  ["setCellRichText"](_0x3d62f7, _0x3bcef9, _0x30ef1f) {
    return this[_0x1f43f8(0x182)](
      _0x3d62f7,
      _0x3bcef9,
      _0x30ef1f[_0x1f43f8(0xcd)](),
    );
  }
  ["setCellStyle"](_0x5a3b4e, _0xd71372) {
    return this[_0x29d496(0x144)]((_0x247078) => {
      const _0x2c7d10 = _0x29d496;
      let _0x5b2890 = !0x1;
      return (
        (0x0, t[_0x2c7d10(0x117)])(_0x247078, _0x5a3b4e, (_0x22142b) => {
          const _0x427c50 = _0x2c7d10;
          ((_0x22142b["style"] = (0x0, t[_0x427c50(0x115)])(
            _0x22142b["style"],
            _0xd71372,
          )),
            (_0x5b2890 = !0x0));
        }),
        _0x5b2890
      );
    });
  }
  ["setCellFill"](_0xbdc2c, _0xf0c89f) {
    return this["setCellStyle"](_0xbdc2c, { fill: _0xf0c89f });
  }
  ["setCellBackground"](_0x305fa7, _0x3db9aa) {
    return this[_0x40e7a2(0xbd)](_0x305fa7, { color: _0x3db9aa, alpha: 0x1 });
  }
  ["clearCellBackground"](_0x1a90e7) {
    return this[_0x23ab3e(0xbd)](_0x1a90e7, void 0x0);
  }
  ["setTableBackground"](_0x58ee46) {
    return this[_0xdda59f(0x16f)](this[_0xdda59f(0x136)](), _0x58ee46);
  }
  ["setBorder"](
    _0x4fab79,
    _0x3f96bb,
    _0xe5e1cc = t["SlideTableBorderPresetEnum"]["All"],
  ) {
    return this[_0x5e4d80(0x144)]((_0x1d21fb) => {
      let { changed: _0x2677f3 } = (0x0, t["buildBorderPresetPatch"])(
        _0x1d21fb,
        _0x4fab79,
        _0xe5e1cc,
        _0x3f96bb,
      );
      return _0x2677f3;
    });
  }
  ["setTableBorder"](
    _0x2e0c41,
    _0x17cbe2 = t["SlideTableBorderPresetEnum"]["All"],
  ) {
    return this[_0x1ef0a3(0xa9)](this["getTableRange"](), _0x2e0c41, _0x17cbe2);
  }
  ["setCellHorizontalAlign"](_0x7d4c8c, _0x5e48cf) {
    return this[_0x3e026c(0x144)]((_0x54cbca) => {
      let _0x584db1 = !0x1;
      return (
        (0x0, t["iterateSelectedSlideTableCells"])(
          _0x54cbca,
          _0x7d4c8c,
          (_0x471f30, _0x3fe5cb, _0x59b505) => {
            ((_0x471f30[_0x3809af(0x149)] = m(
              _0x471f30["textData"],
              _0x5e48cf,
              "SLIDE_TABLE_CELL_" +
                this[_0x3809af(0x131)]() +
                "_" +
                _0x3fe5cb +
                "_" +
                _0x59b505,
            )),
              (_0x584db1 = !0x0));
          },
        ),
        _0x584db1
      );
    });
  }
  ["setCellVerticalAlign"](_0x224f9d, _0x21cb5f) {
    return this["setCellStyle"](_0x224f9d, { verticalAlign: _0x21cb5f });
  }
  ["setCellTextDirection"](_0x331829, _0x4f7e7a) {
    return this["setCellStyle"](_0x331829, { textDirection: _0x4f7e7a });
  }
  ["setCellTextStyle"](_0x367f30, _0x2d58cb) {
    return this[_0x43b044(0x144)]((_0xe2c152) => {
      const _0x2892d9 = _0x43b044;
      let _0x5e2bdf = !0x1;
      return (
        (0x0, t[_0x2892d9(0x117)])(
          _0xe2c152,
          _0x367f30,
          (_0x310200, _0x5dc024, _0x13dc95) => {
            const _0x1a09f0 = _0x2892d9;
            ((_0x310200["textData"] = h(
              _0x310200[_0x1a09f0(0x149)],
              _0x2d58cb,
              "SLIDE_TABLE_CELL_" +
                this[_0x1a09f0(0x131)]() +
                "_" +
                _0x5dc024 +
                "_" +
                _0x13dc95,
            )),
              (_0x5e2bdf = !0x0));
          },
        ),
        _0x5e2bdf
      );
    });
  }
  ["setCellTextColor"](_0x457e0e, _0xb0b1cd) {
    return this[_0x25b41a(0x166)](_0x457e0e, { cl: { rgb: _0xb0b1cd } });
  }
  ["setCellTextFill"](_0x3f41c2, _0x5c2560) {
    return this[_0x5e997b(0x144)]((_0x58ee1c) => {
      let _0x362d08 = !0x1;
      return (
        (0x0, t["iterateSelectedSlideTableCells"])(
          _0x58ee1c,
          _0x3f41c2,
          (_0x2efc8f, _0x3d3ccc, _0x3dd423) => {
            ((_0x2efc8f[_0x916144(0x149)] = g(
              _0x2efc8f[_0x916144(0x149)],
              _0x5c2560,
              _0x916144(0xc3) +
                this[_0x916144(0x131)]() +
                "_" +
                _0x3d3ccc +
                "_" +
                _0x3dd423,
            )),
              (_0x362d08 = !0x0));
          },
        ),
        _0x362d08
      );
    });
  }
  ["setRowHeight"](_0x509107, _0x313507) {
    return this[_0x133539(0x144)]((_0x425942) => {
      let _0x39860a = _0x425942[_0x509107];
      return _0x39860a ? ((_0x39860a["height"] = _0x313507), !0x0) : !0x1;
    });
  }
  ["setColumnWidth"](_0x301575, _0x37af2e) {
    let _0xeaefbd = r[_0x5495be(0x165)][_0x5495be(0x11e)](
      this["getTableData"]()[_0x5495be(0x155)],
    );
    return _0xeaefbd[_0x301575]
      ? ((_0xeaefbd[_0x301575][_0x5495be(0x12a)] = _0x37af2e),
        this[_0x5495be(0xaf)]({ columns: _0xeaefbd }))
      : !0x1;
  }
  ["resize"](_0x3e280c, _0x16eac5) {
    let _0x361ae0 = (0x0, t["resizeSlideTableGrid"])(
      this["getTableData"](),
      _0x3e280c,
      _0x16eac5,
    );
    return this[_0x2f700c(0xaf)]({
      rows: _0x361ae0["rows"],
      columns: _0x361ae0[_0x2f700c(0x155)],
    });
  }
  ["distributeRows"](_0x553921 = 0x0, _0x393229 = this["getRowCount"]()) {
    let _0x1156e3 = r[_0x4c75c7(0x165)][_0x4c75c7(0x11e)](
        this["getTableData"]()["rows"],
      ),
      _0x2f10ca = Math[_0x4c75c7(0x121)](
        _0x1156e3[_0x4c75c7(0xb9)] - 0x1,
        _0x553921 + _0x393229 - 0x1,
      ),
      _0x24df45 = _0x1156e3[_0x4c75c7(0x10f)](_0x553921, _0x2f10ca + 0x1);
    if (!_0x24df45[_0x4c75c7(0xb9)]) return !0x1;
    let _0x4b78b1 =
      _0x24df45["reduce"](
        (_0x4ae080, _0x19ce2b) =>
          _0x4ae080 + (_0x19ce2b[_0x4c75c7(0xe0)] ?? 0x18),
        0x0,
      ) / _0x24df45["length"];
    for (let _0x12f085 = _0x553921; _0x12f085 <= _0x2f10ca; _0x12f085 += 0x1)
      _0x1156e3[_0x12f085][_0x4c75c7(0xe0)] = _0x4b78b1;
    return this["_updateTable"]({ rows: _0x1156e3 });
  }
  ["distributeColumns"](_0x3bc718 = 0x0, _0xb4ba35 = this["getColumnCount"]()) {
    let _0x38e3bc = r["Tools"]["deepClone"](
        this[_0x17dfdf(0xca)]()[_0x17dfdf(0x155)],
      ),
      _0x56eda8 = Math[_0x17dfdf(0x121)](
        _0x38e3bc[_0x17dfdf(0xb9)] - 0x1,
        _0x3bc718 + _0xb4ba35 - 0x1,
      ),
      _0x110610 = _0x38e3bc[_0x17dfdf(0x10f)](_0x3bc718, _0x56eda8 + 0x1);
    if (!_0x110610[_0x17dfdf(0xb9)]) return !0x1;
    let _0xeeac43 =
      _0x110610[_0x17dfdf(0x17f)](
        (_0x37a838, _0x3800ff) => _0x37a838 + _0x3800ff[_0x17dfdf(0x12a)],
        0x0,
      ) / _0x110610["length"];
    for (let _0x3bb2bc = _0x3bc718; _0x3bb2bc <= _0x56eda8; _0x3bb2bc += 0x1)
      _0x38e3bc[_0x3bb2bc][_0x17dfdf(0x12a)] = _0xeeac43;
    return this[_0x17dfdf(0xaf)]({ columns: _0x38e3bc });
  }
  ["setOptions"](_0x1a235e) {
    return this[_0x56d649(0xaf)]({ options: _0x1a235e });
  }
  ["setTableStyle"](_0x1a97d7) {
    let _0x4177ee =
        !Object[_0xb5e2f5(0xba)]["hasOwnProperty"]["call"](
          _0x1a97d7,
          _0xb5e2f5(0x145),
        ) ||
        this["setCellFill"](
          this[_0xb5e2f5(0x136)](),
          _0x1a97d7[_0xb5e2f5(0x145)],
        ),
      _0x53beb0 =
        !_0x1a97d7[_0xb5e2f5(0x114)] ||
        this[_0xb5e2f5(0x13f)](_0x1a97d7[_0xb5e2f5(0x114)]),
      _0x4caf1d =
        !_0x1a97d7[_0xb5e2f5(0x143)] ||
        this[_0xb5e2f5(0xb2)](_0x1a97d7[_0xb5e2f5(0x143)]);
    return _0x4177ee && _0x53beb0 && _0x4caf1d;
  }
  ["setTableName"](_0x484ce3) {
    return this[_0x23f9c1(0xaf)]({ name: _0x484ce3 });
  }
  ["setTableDescription"](_0x365a3d) {
    return this[_0x1e6991(0xaf)]({ description: _0x365a3d });
  }
  ["setStyleId"](_0x6c389a) {
    return this["_updateTable"]({ styleId: _0x6c389a });
  }
  ["setCustom"](_0x40e9c9) {
    return this[_0x15863c(0xaf)]({ custom: _0x40e9c9 });
  }
  ["_updateTable"](_0x2f272c) {
    return this[_0x235755(0xd6)]
      [_0x235755(0xc5)](r[_0x235755(0x11f)])
      [_0x235755(0x151)](t[_0x235755(0xd1)]["id"], {
        unitId: this[_0x235755(0xb4)],
        tableId: this[_0x235755(0x131)](),
        patch: _0x2f272c,
      });
  }
  ["_updateRows"](_0x7dac39) {
    let _0x4f1464 = r[_0x15d2a7(0x165)][_0x15d2a7(0x11e)](
      this[_0x15d2a7(0xca)]()[_0x15d2a7(0x11a)],
    );
    return _0x7dac39(_0x4f1464)
      ? this[_0x15d2a7(0xaf)]({ rows: _0x4f1464 })
      : !0x1;
  }
};
p = f([d(0x5, r["ICommandService"]), d(0x6, r["IPermissionService"])], p);
function m(_0x1d2050, _0x11d2e2, _0x25ce76) {
  var _0x3293c8, _0x4956ff;
  let _0x3f3795 = v(_0x1d2050, _0x25ce76),
    _0x2e0205 = _0x3f3795[_0x2df690(0x164)],
    _0x4f0a4d =
      (_0x3293c8 = _0x2e0205[_0x2df690(0xfb)]) != null &&
      _0x3293c8[_0x2df690(0xb9)]
        ? _0x2e0205[_0x2df690(0xfb)]
        : [y()];
  return {
    ..._0x3f3795,
    body: {
      ..._0x2e0205,
      paragraphs: _0x4f0a4d[_0x2df690(0x14b)]((_0x569e36) => ({
        ..._0x569e36,
        paragraphStyle: {
          ..._0x569e36[_0x2df690(0xd9)],
          horizontalAlign: _0x11d2e2,
        },
      })),
    },
    documentStyle: {
      ..._0x3f3795[_0x2df690(0x13b)],
      renderConfig: {
        ...((_0x4956ff = _0x3f3795[_0x2df690(0x13b)]) == null
          ? void 0x0
          : _0x4956ff[_0x2df690(0x132)]),
        horizontalAlign: _0x11d2e2,
      },
    },
  };
}
function h(_0x38ac45, _0x1e846b, _0x22a0af) {
  var _0x2bb3eb;
  let _0x168854 = v(_0x38ac45, _0x22a0af),
    _0x3a20e2 = _0x168854["body"],
    _0x28bb15 = _0x3a20e2[_0x4fc1a2(0x17c)] ?? "\x0d\x0a",
    _0x11696a = Math[_0x4fc1a2(0xe3)](0x0, _0x28bb15[_0x4fc1a2(0xb9)] - 0x2),
    _0x54fb2a = (_0x3a20e2[_0x4fc1a2(0x105)] ?? [])[_0x4fc1a2(0x14b)](
      (_0x1c167f) => ({
        ..._0x1c167f,
        ts: { ..._0x1c167f["ts"], ..._0x1e846b },
      }),
    );
  return (
    _0x11696a > 0x0 &&
      _0x54fb2a[_0x4fc1a2(0xb9)] === 0x0 &&
      _0x54fb2a[_0x4fc1a2(0x152)]({ st: 0x0, ed: _0x11696a, ts: _0x1e846b }),
    {
      ..._0x168854,
      body: { ..._0x3a20e2, dataStream: _0x28bb15, textRuns: _0x54fb2a },
      documentStyle: {
        ..._0x168854[_0x4fc1a2(0x13b)],
        textStyle: {
          ...((_0x2bb3eb = _0x168854[_0x4fc1a2(0x13b)]) == null
            ? void 0x0
            : _0x2bb3eb[_0x4fc1a2(0xd5)]),
          ..._0x1e846b,
        },
      },
    }
  );
}
function g(_0x5cb0ac, _0x2a3bf0, _0x12aa36) {
  let _0x339bda = _(_0x2a3bf0);
  return h(
    _0x5cb0ac,
    {
      ...(_0x2a3bf0 ? { textFill: _0x2a3bf0 } : { textFill: void 0x0 }),
      ...(_0x339bda ? { cl: { rgb: _0x339bda } } : { cl: void 0x0 }),
    },
    _0x12aa36,
  );
}
function _(_0x4c8593) {
  if (!_0x4c8593 || _0x4c8593["type"] === _0x59e6f3(0x12b))
    return (_0x4c8593 == null ? void 0x0 : _0x4c8593[_0x59e6f3(0x150)]) ===
      _0x59e6f3(0x12b)
      ? _0x59e6f3(0xc6)
      : void 0x0;
  if (_0x4c8593[_0x59e6f3(0x150)] === _0x59e6f3(0xec)) {
    var _0x27fb1d;
    return (
      ((_0x27fb1d = _0x4c8593["gradient"]) == null ||
      (_0x27fb1d = _0x27fb1d["stops"]) == null ||
      (_0x27fb1d = _0x27fb1d[0x0]) == null
        ? void 0x0
        : _0x27fb1d[_0x59e6f3(0x142)]) ?? _0x4c8593[_0x59e6f3(0x142)]
    );
  }
  return _0x4c8593[_0x59e6f3(0x142)];
}
function v(_0x268d30, _0x43a7d6) {
  var _0x24a984, _0x63cb78, _0x37ac8c;
  let _0x11a72b = r[_0x15f562(0x165)]["deepClone"](
    _0x268d30 ?? {
      id: _0x43a7d6,
      body: { dataStream: "\x0d\x0a", paragraphs: [y()], textRuns: [] },
      documentStyle: {},
    },
  );
  return {
    ..._0x11a72b,
    id: _0x11a72b["id"] ?? _0x43a7d6,
    body: {
      dataStream:
        ((_0x24a984 = _0x11a72b[_0x15f562(0x164)]) == null
          ? void 0x0
          : _0x24a984[_0x15f562(0x17c)]) ?? "\x0d\x0a",
      paragraphs:
        (_0x63cb78 = _0x11a72b["body"]) != null &&
        (_0x63cb78 = _0x63cb78[_0x15f562(0xfb)]) != null &&
        _0x63cb78[_0x15f562(0xb9)]
          ? _0x11a72b[_0x15f562(0x164)][_0x15f562(0xfb)]
          : [y()],
      textRuns:
        ((_0x37ac8c = _0x11a72b[_0x15f562(0x164)]) == null
          ? void 0x0
          : _0x37ac8c[_0x15f562(0x105)]) ?? [],
      ..._0x11a72b["body"],
    },
    documentStyle: _0x11a72b["documentStyle"] ?? {},
  };
}
function y() {
  return {
    startIndex: 0x0,
    paragraphId: (0x0, r[_0x1ebaea(0x134)])(new Set()),
  };
}
var b = class extends n["FSlide"] {
  ["newTable"](_0x747540) {
    let _0x261875 = this["_slideModel"][_0x2f04a4(0xfa)](),
      _0x44beed = this[_0x2f04a4(0x122)]();
    return _0x747540
      ? typeof _0x747540 == "string"
        ? this[_0x2f04a4(0xd6)]["createInstance"](
            l,
            _0x261875,
            _0x44beed,
            this[_0x2f04a4(0xd6)],
            { element: { id: _0x747540 } },
          )
        : _0x747540[_0x2f04a4(0xf5)]()
      : this["_injector"][_0x2f04a4(0x100)](
          l,
          _0x261875,
          _0x44beed,
          this[_0x2f04a4(0xd6)],
        );
  }
  ["insertTable"](_0x3a3a7f, _0x1f7546) {
    let _0x26e8bb = this[_0x9680ef(0xd6)][_0x9680ef(0xc5)](r[_0x9680ef(0x11f)]),
      _0x35c7cf = this[_0x9680ef(0x106)]["getUnitId"](),
      _0x349a41 = this[_0x9680ef(0x122)](),
      {
        createOptions: _0x3edeb5,
        table: _0x457a00,
        element: _0x24d346,
      } = _0x3a3a7f,
      _0x366512 = _0x457a00["id"] ?? (0x0, r["generateRandomId"])(0x6);
    return _0x26e8bb[_0x9680ef(0x151)](t["InsertSlideTableCommand"]["id"], {
      unitId: _0x35c7cf,
      subUnitId: _0x349a41,
      createOptions: _0x3edeb5,
      table: { ..._0x457a00, id: _0x366512 },
      element: _0x24d346,
      insertIndex: _0x1f7546,
    })
      ? this[_0x9680ef(0x160)](_0x366512)
      : null;
  }
  ["insertTableFromData"](_0x34edd3, _0x3f0d53) {
    if (
      _0x34edd3[_0x9f2d26(0xb9)] === 0x0 ||
      _0x34edd3[_0x9f2d26(0xf1)]((_0x207406) => _0x207406["length"] === 0x0)
    )
      throw Error(_0x9f2d26(0x16e));
    let _0x593020 = this["_injector"]["get"](r[_0x9f2d26(0x11f)]),
      _0x5cd3ec = this[_0x9f2d26(0x106)][_0x9f2d26(0xfa)](),
      _0x2847fb = this["getId"](),
      _0x400d67 =
        (_0x3f0d53 == null ? void 0x0 : _0x3f0d53["id"]) ??
        (0x0, r[_0x9f2d26(0x12e)])(0x6),
      _0x113397 = (0x0, t["resolveSlideTableBuildOptions"])({
        ..._0x3f0d53,
        values: _0x34edd3,
      }),
      _0x23c0e4 = { ..._0x3f0d53, id: _0x400d67, ..._0x113397 },
      { rows: _0x4225cd, columns: _0x329eb1 } = (0x0, t[_0x9f2d26(0x10b)])({
        tableId: _0x400d67,
        values: _0x34edd3,
        ..._0x23c0e4,
      });
    return _0x593020[_0x9f2d26(0x151)](t[_0x9f2d26(0x120)]["id"], {
      unitId: _0x5cd3ec,
      subUnitId: _0x2847fb,
      createOptions: _0x23c0e4,
      table: { id: _0x400d67, rows: _0x4225cd, columns: _0x329eb1 },
      element: {
        transform: {
          width: _0x113397["columns"] * _0x113397[_0x9f2d26(0x16b)],
          height: _0x113397["rows"] * _0x113397[_0x9f2d26(0xce)],
        },
      },
    })
      ? this[_0x9f2d26(0x160)](_0x400d67)
      : null;
  }
  ["getTables"]() {
    let _0x314525 = this[_0x51bb61(0x106)][_0x51bb61(0xfa)](),
      _0x55723f = this[_0x51bb61(0x122)](),
      { elementOrder: _0x3f7958, elements: _0x23e88b } = this["getData"]();
    return _0x3f7958[_0x51bb61(0x14b)]((_0x20cfda) => _0x23e88b[_0x20cfda])
      ["filter"](
        (_0x3df699) =>
          (_0x3df699 == null ? void 0x0 : _0x3df699[_0x51bb61(0x150)]) ===
          e[_0x51bb61(0x176)]["Table"],
      )
      [_0x51bb61(0x14b)]((_0x898c84) =>
        this[_0x51bb61(0xd6)][_0x51bb61(0x100)](
          p,
          _0x314525,
          _0x55723f,
          _0x898c84["id"],
          this[_0x51bb61(0x106)],
          this[_0x51bb61(0xd6)],
        ),
      );
  }
  ["getTableById"](_0x5749b8) {
    return (
      this[_0x43ee02(0xcc)]()[_0x43ee02(0xf8)](
        (_0x1910d7) =>
          _0x1910d7[_0x43ee02(0x122)]() === _0x5749b8 ||
          _0x1910d7["getTableId"]() === _0x5749b8,
      ) ?? null
    );
  }
  ["getTableAt"](_0x3132dd) {
    let _0x4c8562 = this[_0x505cd1(0xcc)]();
    return _0x3132dd >= 0x0 && _0x3132dd < _0x4c8562[_0x505cd1(0xb9)]
      ? _0x4c8562[_0x3132dd]
      : null;
  }
  ["updateTable"](_0xf4bf74) {
    let _0x46eae2 = this[_0x234560(0xd6)]["get"](r[_0x234560(0x11f)]),
      _0x393691 = this[_0x234560(0x106)][_0x234560(0xfa)](),
      { table: _0x1cb08e, element: _0x1965d1 } = _0xf4bf74;
    if (!_0x1cb08e["id"])
      throw Error(
        "Table\x20id\x20is\x20required\x20for\x20updating\x20a\x20table.",
      );
    if (!this[_0x234560(0x178)](_0x1965d1["id"]))
      throw Error(_0x234560(0xfc) + _0x1965d1["id"] + _0x234560(0xff));
    if (
      !_0x46eae2[_0x234560(0x151)](t[_0x234560(0xd1)]["id"], {
        unitId: _0x393691,
        tableId: _0x1cb08e["id"],
        patch: { ..._0x1cb08e },
      })
    )
      throw Error(_0x234560(0xfe));
    return this[_0x234560(0x160)](_0x1cb08e["id"]);
  }
  ["removeTable"](_0x535b70) {
    return _0x535b70["remove"]() ?? !0x1;
  }
};
n["FSlide"]["extend"](b);
var x = class extends i["FEnum"] {
  get ["SlideTableFillTypeEnum"]() {
    return t[_0x29b859(0x123)];
  }
  get ["SlideTableGradientFillTypeEnum"]() {
    return t[_0x54b754(0x148)];
  }
  get ["SlideTablePictureFillModeEnum"]() {
    return t[_0x337aa4(0x141)];
  }
  get ["SlideTableBorderDashEnum"]() {
    return t["SlideTableBorderDashEnum"];
  }
  get ["SlideTableBorderPresetEnum"]() {
    return t["SlideTableBorderPresetEnum"];
  }
  get ["SlideTableVerticalAlignEnum"]() {
    return t[_0x414818(0x153)];
  }
  get ["SlideTableTextDirectionEnum"]() {
    return t[_0x283993(0xdb)];
  }
};
(i["FEnum"]["extend"](x),
  Object["defineProperty"](exports, "FSlideTable", {
    enumerable: !0x0,
    get: function () {
      return p;
    },
  }),
  (exports["FSlideTableBuilder"] = l),
  (exports["FSlideTableCell"] = u));
