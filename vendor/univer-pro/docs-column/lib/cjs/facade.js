Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/docs-column"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs/docs/facade");
var i = class extends t["FEnum"] {
  get ["DocsColumnPositionEnum"]() {
    return e["ColumnPosition"];
  }
};
t["FEnum"]["extend"](i);
var a = class extends Error {
    constructor() {
      (super(
        "ColumnGroup APIs are supported only in modern documents. Use section column APIs for traditional documents.",
      ),
        (this["name"] = "DocsColumnUnsupportedDocumentFlavorError"));
    }
  },
  o = class {
    constructor(_0x32bbd6, _0x1a4a4e, _0x652b81) {
      ((this["_document"] = _0x32bbd6),
        (this["_columnGroupId"] = _0x1a4a4e),
        (this["_columnId"] = _0x652b81));
    }
    ["getId"]() {
      return this["_columnId"];
    }
    ["getColumnGroupId"]() {
      return this["_columnGroupId"];
    }
    ["getIndex"]() {
      var _0x30e4b2;
      return (
        ((_0x30e4b2 = this["getRange"]()) == null
          ? void 0x0
          : _0x30e4b2["column"]) ?? -0x1
      );
    }
    ["getRange"]() {
      if (!this["_document"]["isModern"]()) return null;
      let _0x351ea6 = (0x0, e["getColumnGroupRangeById"])(
        this["_document"]["getDocumentDataModel"]()["getSnapshot"](),
        this["_columnGroupId"],
      );
      return (
        (_0x351ea6 == null
          ? void 0x0
          : _0x351ea6["columns"]["find"](
              (_0x5703e5) => _0x5703e5["columnId"] === this["_columnId"],
            )) ?? null
      );
    }
    ["getContentRange"]() {
      let _0x23b8af = this["getRange"](),
        { dataStream: _0xccbe66 } = this["_document"]["getBody"]();
      if (!_0x23b8af || !_0xccbe66) return null;
      let _0x5ce848 = _0x23b8af["startOffset"] + 0x1,
        _0x1f1648 = s(_0xccbe66, _0x23b8af);
      return {
        startOffset: _0x5ce848,
        endOffset: Math["max"](_0x5ce848, _0x1f1648),
        segmentId: "",
      };
    }
    ["getInsertOffset"]() {
      var _0x542c39;
      return (
        ((_0x542c39 = this[_0x369a2a(0x1b4)]()) == null
          ? void 0x0
          : _0x542c39[_0x369a2a(0x1be)]) ?? null
      );
    }
    ["getText"]() {
      let _0x3743ed = this[_0xbb1235(0x1b4)](),
        { dataStream: _0x35fb08 } = this[_0xbb1235(0x1e6)][_0xbb1235(0x191)]();
      return !_0x3743ed || !_0x35fb08
        ? ""
        : c(
            _0x35fb08["slice"](
              _0x3743ed["startOffset"],
              _0x3743ed[_0xbb1235(0x1be)],
            ),
          );
    }
    ["getParagraphs"]() {
      let _0x26ec18 = this[_0x263e2a(0x1cd)]();
      return _0x26ec18
        ? this[_0x263e2a(0x1e6)]
            [_0x263e2a(0x1bc)]()
            [_0x263e2a(0x19e)]((_0x33a518) => {
              const _0x8492a4 = _0x263e2a;
              let { endOffset: _0x599000 } = _0x33a518["getInfo"]();
              return (
                _0x599000 > _0x26ec18["startOffset"] &&
                _0x599000 < _0x26ec18[_0x8492a4(0x1be)]
              );
            })
        : [];
    }
    ["insertParagraph"](_0x3f966c, _0x1f007a = "") {
      this[_0x107507(0x1d6)]();
      let _0x126291 = this["getParagraphs"]();
      if (
        !Number[_0x107507(0x1d2)](_0x3f966c) ||
        _0x3f966c < 0x0 ||
        _0x3f966c > _0x126291["length"]
      )
        throw RangeError(_0x107507(0x1eb) + _0x3f966c + _0x107507(0x194));
      let _0x1b5be4 = this["getRange"]();
      if (!_0x1b5be4) throw Error(_0x107507(0x1b2));
      let _0x25a586 =
        _0x3f966c < _0x126291["length"]
          ? _0x126291[_0x3f966c]["getInfo"]()[_0x107507(0x1e3)]
          : _0x1b5be4["endOffset"];
      if (
        !this[_0x107507(0x1e6)][_0x107507(0x18a)](_0x25a586, _0x1f007a + "\x0d")
      )
        throw Error(_0x107507(0x1e2));
      let _0x572ca1 = this[_0x107507(0x1bc)]()[_0x3f966c];
      if (!_0x572ca1)
        throw Error(
          "Failed\x20to\x20resolve\x20the\x20inserted\x20column\x20paragraph.",
        );
      return _0x572ca1;
    }
    ["appendParagraph"](_0x4d0210 = "") {
      return this[_0x219c55(0x1aa)](
        this["getParagraphs"]()[_0x219c55(0x1ac)],
        _0x4d0210,
      );
    }
    ["getTextRange"]() {
      let _0x1bb9d4 = this["getContentRange"]();
      return _0x1bb9d4
        ? this[_0x1d7e0f(0x1e6)][_0x1d7e0f(0x1b7)](
            _0x1bb9d4["startOffset"],
            _0x1bb9d4[_0x1d7e0f(0x1be)],
            _0x1bb9d4[_0x1d7e0f(0x1ef)],
          )
        : null;
    }
    ["setText"](_0x311871) {
      var _0x28ef92;
      return (
        this[_0x2e1cc7(0x1d6)](),
        ((_0x28ef92 = this[_0x2e1cc7(0x1b7)]()) == null
          ? void 0x0
          : _0x28ef92[_0x2e1cc7(0x1c2)](_0x311871)) ?? !0x1
      );
    }
    ["setTextStyle"](_0x3bd4a8) {
      var _0x220c69;
      return (
        this[_0x3672e0(0x1d6)](),
        ((_0x220c69 = this["getTextRange"]()) == null
          ? void 0x0
          : _0x220c69[_0x3672e0(0x1a8)](_0x3bd4a8)) ?? !0x1
      );
    }
    ["_assertModernDocument"]() {
      if (!this[_0x36e310(0x1e6)][_0x36e310(0x1de)]()) throw new a();
    }
  };
function s(_0x59ee46, _0x25c8aa) {
  let _0x52fbb2 = _0x25c8aa[_0x919a43(0x1be)];
  for (
    ;
    _0x52fbb2 > _0x25c8aa[_0x919a43(0x1e3)] + 0x1 &&
    (_0x59ee46[_0x52fbb2 - 0x1] === n[_0x919a43(0x198)]["PARAGRAPH"] ||
      _0x59ee46[_0x52fbb2 - 0x1] ===
        n["DataStreamTreeTokenType"]["SECTION_BREAK"]);
  )
    --_0x52fbb2;
  return _0x52fbb2;
}
function c(_0x2d00e1) {
  return _0x2d00e1["replaceAll"](n[_0x5d9bd0(0x198)][_0x5d9bd0(0x1c0)], "")
    [_0x5d9bd0(0x18e)](n[_0x5d9bd0(0x198)][_0x5d9bd0(0x195)], "\x0a")
    ["replace"](/\n+$/u, "");
}
var l = class {
    constructor(_0x350cb6, _0x12dce2, _0x23713d) {
      ((this["_document"] = _0x350cb6),
        (this[_0x58c731(0x1cc)] = _0x12dce2),
        (this[_0x58c731(0x1a0)] = _0x23713d));
    }
    ["getId"]() {
      return this[_0x368b4a(0x1cc)];
    }
    ["getConfig"]() {
      if (!this[_0x510b06(0x1e6)]["isModern"]()) return;
      let { columnGroups: _0x51aade = [] } =
        this[_0x510b06(0x1e6)][_0x510b06(0x191)]();
      return _0x51aade[_0x510b06(0x1c4)](
        (_0xfe1eab) => _0xfe1eab["columnGroupId"] === this[_0x510b06(0x1cc)],
      );
    }
    ["getRange"]() {
      return this[_0x282732(0x1e6)][_0x282732(0x1de)]()
        ? (0x0, e[_0x282732(0x1ed)])(
            this[_0x282732(0x1e6)]["getDocumentDataModel"]()["getSnapshot"](),
            this[_0x282732(0x1cc)],
          )
        : null;
    }
    ["getColumnCount"]() {
      var _0x543233, _0x2758dc;
      return (
        ((_0x543233 = this[_0x4ca8e3(0x1cd)]()) == null
          ? void 0x0
          : _0x543233[_0x4ca8e3(0x1c3)][_0x4ca8e3(0x1ac)]) ??
        ((_0x2758dc = this[_0x4ca8e3(0x1a6)]()) == null ||
        (_0x2758dc = _0x2758dc[_0x4ca8e3(0x1c3)]) == null
          ? void 0x0
          : _0x2758dc[_0x4ca8e3(0x1ac)]) ??
        0x0
      );
    }
    ["getColumns"]() {
      let _0x3f4fa7 = this[_0x2214b9(0x1cd)]();
      if (!_0x3f4fa7) return [];
      let { columns: _0x4b299e } = _0x3f4fa7;
      return _0x4b299e[_0x2214b9(0x18f)]((_0x284e94) =>
        this[_0x2214b9(0x1e8)](_0x284e94[_0x2214b9(0x1e5)]),
      );
    }
    ["getParagraphs"]() {
      return this[_0x1b4072(0x1a5)]()[_0x1b4072(0x1a7)]((_0x9de612) =>
        _0x9de612[_0x1b4072(0x1bc)](),
      );
    }
    ["getColumn"](_0x138d77) {
      let _0x55ac41 = this[_0x5c2018(0x1cd)]();
      if (!_0x55ac41) return null;
      let { columns: _0x551e65 } = _0x55ac41,
        _0x227cd5 =
          typeof _0x138d77 == "number"
            ? _0x551e65[_0x138d77]
            : _0x551e65[_0x5c2018(0x1c4)](
                (_0x3ea902) => _0x3ea902["columnId"] === _0x138d77,
              );
      return _0x227cd5
        ? this["_createFDocumentColumn"](_0x227cd5[_0x5c2018(0x1e5)])
        : null;
    }
    ["getWidthRatios"]() {
      var _0x3bec66;
      return (
        ((_0x3bec66 = this[_0xaa18c4(0x1a6)]()) == null ||
        (_0x3bec66 = _0x3bec66["columns"]) == null
          ? void 0x0
          : _0x3bec66[_0xaa18c4(0x18f)](
              (_0x5db802) => _0x5db802[_0xaa18c4(0x1d8)] ?? 0x1,
            )) ?? []
      );
    }
    ["describe"]() {
      var _0x14b101;
      let _0x1609ce = this["getConfig"](),
        _0x23c4e3 = this[_0x40cba0(0x1a5)]();
      return {
        columnCount: _0x23c4e3[_0x40cba0(0x1ac)],
        columnGroupId: this["_columnGroupId"],
        columns: _0x23c4e3[_0x40cba0(0x18f)]((_0x42e6ef, _0xa36c9f) => {
          const _0x5c5edb = _0x40cba0;
          var _0x3777e0;
          return {
            columnId: _0x42e6ef[_0x5c5edb(0x19a)](),
            index: _0xa36c9f,
            text: _0x42e6ef[_0x5c5edb(0x1cf)](),
            widthRatio:
              _0x1609ce == null ||
              (_0x3777e0 = _0x1609ce[_0x5c5edb(0x1c3)]) == null ||
              (_0x3777e0 = _0x3777e0[_0xa36c9f]) == null
                ? void 0x0
                : _0x3777e0[_0x5c5edb(0x1d8)],
          };
        }),
        gap:
          _0x1609ce == null || (_0x14b101 = _0x1609ce[_0x40cba0(0x18d)]) == null
            ? void 0x0
            : _0x14b101["v"],
        layout: _0x1609ce == null ? void 0x0 : _0x1609ce[_0x40cba0(0x1bf)],
        responsive: _0x1609ce == null ? void 0x0 : _0x1609ce["responsive"],
        config: _0x1609ce,
      };
    }
    ["setWidthRatios"](_0x3a13cf) {
      return (
        this[_0x35e58c(0x1d6)](),
        this["_injector"]
          [_0x35e58c(0x197)](n[_0x35e58c(0x193)])
          ["syncExecuteCommand"](e[_0x35e58c(0x1b8)]["id"], {
            unitId: this[_0x35e58c(0x1e6)][_0x35e58c(0x19a)](),
            columnGroupId: this[_0x35e58c(0x1cc)],
            widthRatios: _0x3a13cf,
          })
      );
    }
    ["addColumn"](
      _0x378a44,
      _0x551903,
      _0x593352 = (0x0, n["generateRandomId"])(0x6),
    ) {
      return (
        this[_0x230bcf(0x1d6)](),
        this[_0x230bcf(0x1a0)]
          [_0x230bcf(0x197)](n["ICommandService"])
          ["syncExecuteCommand"](e[_0x230bcf(0x192)]["id"], {
            unitId: this[_0x230bcf(0x1e6)][_0x230bcf(0x19a)](),
            columnGroupId: this[_0x230bcf(0x1cc)],
            targetColumnId: _0x378a44,
            position: _0x551903,
            columnId: _0x593352,
          })
          ? this[_0x230bcf(0x1c7)](_0x593352)
          : null
      );
    }
    ["deleteColumn"](_0x5984ea) {
      return (
        this[_0x19dc86(0x1d6)](),
        this["_injector"]
          [_0x19dc86(0x197)](n[_0x19dc86(0x193)])
          [_0x19dc86(0x1ae)](e[_0x19dc86(0x1c6)]["id"], {
            unitId: this[_0x19dc86(0x1e6)][_0x19dc86(0x19a)](),
            columnGroupId: this[_0x19dc86(0x1cc)],
            columnId: _0x5984ea,
          })
      );
    }
    ["remove"]() {
      return (
        this[_0xe5565f(0x1d6)](),
        this["_injector"]
          [_0xe5565f(0x197)](n["ICommandService"])
          [_0xe5565f(0x1ae)](e[_0xe5565f(0x19f)]["id"], {
            unitId: this[_0xe5565f(0x1e6)][_0xe5565f(0x19a)](),
            columnGroupId: this[_0xe5565f(0x1cc)],
          })
      );
    }
    ["_createFDocumentColumn"](_0x27d759) {
      return this[_0x3e49e9(0x1a0)][_0x3e49e9(0x190)](
        o,
        this[_0x3e49e9(0x1e6)],
        this[_0x3e49e9(0x1cc)],
        _0x27d759,
      );
    }
    ["_assertModernDocument"]() {
      if (!this["_document"]["isModern"]()) throw new a();
    }
  },
  u = class extends r["FDocument"] {
    ["getColumnGroups"]() {
      return this[_0x3ff786(0x1a1)]()[_0x3ff786(0x18f)]((_0x53cafb) =>
        this[_0x3ff786(0x19b)](_0x53cafb[_0x3ff786(0x1a3)]),
      );
    }
    ["getColumnGroup"](_0x210077) {
      return this[_0x6d0630(0x1a1)]()[_0x6d0630(0x1c4)](
        (_0x2888dc) => _0x2888dc["columnGroupId"] === _0x210077,
      )
        ? this["_createFDocumentColumnGroup"](_0x210077)
        : null;
    }
    ["getColumnGroupAt"](_0x4f7f47) {
      let _0x424c20 = this[_0xa245d(0x1a1)]()[_0xa245d(0x1c4)]((_0xb4f31a) =>
        (0x0, n[_0xa245d(0x1bd)])(
          (0x0, n[_0xa245d(0x1a2)])(_0xb4f31a),
          _0x4f7f47,
        ),
      );
      return _0x424c20
        ? this["_createFDocumentColumnGroup"](_0x424c20["columnGroupId"])
        : null;
    }
    ["findColumnGroupByText"](_0x539bbe) {
      return this["findColumnGroups"]({ text: _0x539bbe })[0x0] ?? null;
    }
    ["findColumnGroups"](_0x539dcf) {
      let _0x5128cb =
        typeof _0x539dcf == "string" ? { text: _0x539dcf } : _0x539dcf;
      return this[_0x2986b5(0x1e7)]()["filter"](
        (_0x17ebda) =>
          !(
            (_0x5128cb[_0x2986b5(0x1a3)] &&
              _0x17ebda[_0x2986b5(0x19a)]() !== _0x5128cb[_0x2986b5(0x1a3)]) ||
            (_0x5128cb["text"] &&
              !_0x17ebda[_0x2986b5(0x1a5)]()[_0x2986b5(0x1d9)]((_0x1d08a7) =>
                _0x1d08a7[_0x2986b5(0x1cf)]()[_0x2986b5(0x1ce)](
                  _0x5128cb[_0x2986b5(0x1af)],
                ),
              ))
          ),
      );
    }
    ["insertColumnGroup"](_0x3de2ae, _0x2d5c0a = {}) {
      if (!this["isModern"]()) throw new a();
      let _0x52c297 = this["save"]()[_0x1a0948(0x189)];
      if (!(_0x52c297 != null && _0x52c297["dataStream"])) return null;
      let _0x135153 = this[_0x1a0948(0x1a0)][_0x1a0948(0x197)](
          n[_0x1a0948(0x193)],
        ),
        _0x112cb2 =
          _0x2d5c0a[_0x1a0948(0x1a3)] ?? (0x0, n[_0x1a0948(0x1e1)])(0x6),
        _0xbf05a4 = Array[_0x1a0948(0x1d0)](
          { length: Math["max"](0x2, _0x3de2ae) },
          (_0x49d4e6, _0x3c9a53) => {
            const _0x391b00 = _0x1a0948;
            var _0x47f1e;
            return (
              ((_0x47f1e = _0x2d5c0a["columnIds"]) == null
                ? void 0x0
                : _0x47f1e[_0x3c9a53]) ?? (0x0, n[_0x391b00(0x1e1)])(0x6)
            );
          },
        ),
        _0xff8524 =
          _0x2d5c0a[_0x1a0948(0x1b0)] ??
          Math[_0x1a0948(0x1ad)](
            0x0,
            _0x52c297[_0x1a0948(0x1b3)][_0x1a0948(0x1ac)] - 0x1,
          );
      return _0x135153["syncExecuteCommand"](e[_0x1a0948(0x1b9)]["id"], {
        unitId: this[_0x1a0948(0x19a)](),
        offset: _0xff8524,
        columnCount: _0x3de2ae,
        columnGroupId: _0x112cb2,
        columnIds: _0xbf05a4,
        gap: _0x2d5c0a["gap"],
        widthRatios: _0x2d5c0a[_0x1a0948(0x19d)],
      })
        ? this[_0x1a0948(0x1d1)](_0x112cb2)
        : null;
    }
    ["_getColumnGroups"]() {
      if (!this[_0x1da71e(0x1de)]()) return [];
      let { columnGroups: _0x1d67d9 = [] } = this[_0x1da71e(0x191)]();
      return _0x1d67d9;
    }
    ["_createFDocumentColumnGroup"](_0x106898) {
      return this[_0x10fe49(0x1a0)]["createInstance"](
        l,
        this,
        _0x106898,
        this["_injector"],
      );
    }
  };
(r["FDocument"]["extend"](u),
  (exports["DocsColumnUnsupportedDocumentFlavorError"] = a),
  (exports["FDocumentColumn"] = o),
  (exports["FDocumentColumnGroup"] = l));
