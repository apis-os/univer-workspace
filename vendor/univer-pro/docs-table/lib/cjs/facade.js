Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
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
  constructor(var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD) {
    this["_table"] = var_core_value_sig186C, this["_row"] = var_core_value_sigD955, this["_column"] = var_core_value_sig48BD;
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
    return this["_table"]["getCellMarginOverride"](this["_row"], this["_column"]);
  }
  ["setMargin"](var_core_value_sig429F) {
    return this["_table"]["setCellMargin"](this["_table"]["getCellRange"](this["_row"], this["_column"]), var_core_value_sig429F);
  }
  ["clearMarginOverride"]() {
    return this["_table"]["setCellMargin"](this["_table"]["getCellRange"](this["_row"], this["_column"]), null);
  }
  ["setText"](var_core_value_sigF62A) {
    return this["_table"]["setCellText"](this["_row"], this["_column"], var_core_value_sigF62A);
  }
  ["setBackgroundColor"](var_core_value_sig8178) {
    return this["_table"]["setCellBackground"](this["_table"]["getCellRange"](this["_row"], this["_column"]), var_core_value_sig8178);
  }
  ["setBorder"](var_core_value_sigE9ED) {
    return this["_table"]["setBorder"](this["_table"]["getCellRange"](this["_row"], this["_column"]), var_core_value_sigE9ED);
  }
  ["mergeTo"](var_core_value_sigB577, var_core_value_sig9572) {
    return this["_table"]["mergeCells"]({
      startRow: this["_row"],
      startColumn: this["_column"],
      endRow: this["_row"] + var_core_value_sigB577 - 0x1,
      endColumn: this["_column"] + var_core_value_sig9572 - 0x1
    });
  }
  ["unmerge"]() {
    return this["_table"]["unmergeCells"](this["_table"]["getCellRange"](this["_row"], this["_column"]));
  }
};
function o(var_core_value_sig38CE) {
  "@babel/helpers - typeof";

  return o = typeof Symbol == "function" && typeof Symbol["iterator"] == "symbol" ? function (var_core_value_sigD873) {
    return typeof var_core_value_sigD873;
  } : function (var_core_value_sigA12B) {
    return var_core_value_sigA12B && typeof Symbol == ox470cb2(0xf1) && var_core_value_sigA12B[ox470cb2(0x17e)] === Symbol && var_core_value_sigA12B !== Symbol[ox470cb2(0xfc)] ? "symbol" : typeof var_core_value_sigA12B;
  }, o(var_core_value_sig38CE);
}
;
function s(var_core_value_sig62B7, var_core_value_sig37A8) {
  if (o(var_core_value_sig62B7) != "object" || !var_core_value_sig62B7) return var_core_value_sig62B7;
  var var_core_value_sigA90D = var_core_value_sig62B7[Symbol["toPrimitive"]];
  if (var_core_value_sigA90D !== void 0x0) {
    var var_core_value_sig7A3C = var_core_value_sigA90D[ox39f0e7(0xff)](var_core_value_sig62B7, var_core_value_sig37A8 || ox39f0e7(0xc5));
    if (o(var_core_value_sig7A3C) != ox39f0e7(0x184)) return var_core_value_sig7A3C;
    throw TypeError(ox39f0e7(0x11a));
  }
  return (var_core_value_sig37A8 === ox39f0e7(0x15f) ? String : Number)(var_core_value_sig62B7);
}
;
function c(var_core_value_sig0511) {
  var var_core_value_sig1F44 = s(var_core_value_sig0511, "string");
  return o(var_core_value_sig1F44) == ox763425(0x18e) ? var_core_value_sig1F44 : var_core_value_sig1F44 + "";
}
;
function l(var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545) {
  return (var_core_value_sig947E = c(var_core_value_sig947E)) in var_core_value_sigCB04 ? Object[ox2e6a3d(0x14c)](var_core_value_sigCB04, var_core_value_sig947E, {
    value: var_core_value_sig4545,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sigCB04[var_core_value_sig947E] = var_core_value_sig4545, var_core_value_sigCB04;
}
;
function u(var_core_value_sigF39A, var_core_value_sigF79C) {
  return function (var_core_value_sigF230, var_core_value_sig09B8) {
    var_core_value_sigF79C(var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sigF39A);
  };
}
;
function d(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786) {
  var var_core_value_sigC0D9 = arguments[ox49bfda(0xcc)],
    var_core_value_sigF051 = var_core_value_sigC0D9 < 0x3 ? var_core_value_sig7658 : var_core_value_sigC786 === null ? var_core_value_sigC786 = Object[ox49bfda(0x147)](var_core_value_sig7658, var_core_value_sigDCF5) : var_core_value_sigC786,
    var_core_value_sig5825;
  if (typeof Reflect == "object" && typeof Reflect[ox49bfda(0x185)] == ox49bfda(0xf1)) var_core_value_sigF051 = Reflect[ox49bfda(0x185)](var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786);else {
    for (var var_core_value_sig4EB7 = var_core_value_sig2E54[ox49bfda(0xcc)] - 0x1; var_core_value_sig4EB7 >= 0x0; var_core_value_sig4EB7--) (var_core_value_sig5825 = var_core_value_sig2E54[var_core_value_sig4EB7]) && (var_core_value_sigF051 = (var_core_value_sigC0D9 < 0x3 ? var_core_value_sig5825(var_core_value_sigF051) : var_core_value_sigC0D9 > 0x3 ? var_core_value_sig5825(var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigF051) : var_core_value_sig5825(var_core_value_sig7658, var_core_value_sigDCF5)) || var_core_value_sigF051);
  }
  return var_core_value_sigC0D9 > 0x3 && var_core_value_sigF051 && Object[ox49bfda(0x14c)](var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigF051), var_core_value_sigF051;
}
let f = class {
  constructor(var_core_value_sig6F91, var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sigC80B, var_core_value_sig284F) {
    this[ox55c485(0xf9)] = var_core_value_sig6F91, this[ox55c485(0x168)] = var_core_value_sigF9C7, this[ox55c485(0xf2)] = var_core_value_sig8895, this[ox55c485(0xe7)] = var_core_value_sigC80B, this[ox55c485(0xdb)] = var_core_value_sig284F, l(this, ox55c485(0x163), void 0x0), this[ox55c485(0x163)] = this[ox55c485(0xf9)][ox55c485(0x162)]();
  }
  ["getId"]() {
    return this[ox2469e9(0x168)];
  }
  ["getSegmentId"]() {
    return this["_segmentId"];
  }
  ["getInfo"]() {
    return {
      id: this[ox4c3898(0x168)],
      rowCount: this[ox4c3898(0x141)](),
      columnCount: this["getColumnCount"](),
      metadata: this[ox4c3898(0xb8)](),
      source: this[ox4c3898(0x108)]()
    };
  }
  ["describe"]() {
    let var_core_value_sigE154 = this[ox5b2da4(0xb8)](),
      var_core_value_sig4632 = this[ox5b2da4(0x108)](),
      var_core_value_sig12F2 = this[ox5b2da4(0x144)]();
    return {
      id: this[ox5b2da4(0x168)],
      rowCount: this[ox5b2da4(0x141)](),
      columnCount: var_core_value_sig12F2,
      headerRowCount: (var_core_value_sigE154 == null ? void 0x0 : var_core_value_sigE154[ox5b2da4(0xc3)]) ?? 0x0,
      titleRow: (var_core_value_sigE154 == null ? void 0x0 : var_core_value_sigE154[ox5b2da4(0x112)]) ?? !0x1,
      columns: Array[ox5b2da4(0x187)]({
        length: var_core_value_sig12F2
      }, (var_core_value_sig3EEE, var_core_value_sigBC46) => {
        const var_core_value_sig3D7D = ox5b2da4;
        var var_core_value_sig27E5, var_core_value_sig8061;
        return {
          index: var_core_value_sigBC46,
          type: var_core_value_sigE154 == null || (var_core_value_sig27E5 = var_core_value_sigE154[var_core_value_sig3D7D(0x146)]) == null || (var_core_value_sig27E5 = var_core_value_sig27E5[var_core_value_sigBC46]) == null ? void 0x0 : var_core_value_sig27E5[var_core_value_sig3D7D(0x183)],
          width: var_core_value_sig4632 == null || (var_core_value_sig8061 = var_core_value_sig4632[var_core_value_sig3D7D(0x174)][var_core_value_sigBC46]) == null ? void 0x0 : var_core_value_sig8061[var_core_value_sig3D7D(0x10e)][var_core_value_sig3D7D(0xcf)]["v"]
        };
      }),
      sampleRows: Array["from"]({
        length: this["getRowCount"]()
      }, (var_core_value_sig4D4C, var_core_value_sigC9E0) => Array[ox5b2da4(0x187)]({
        length: var_core_value_sig12F2
      }, (var_core_value_sig7524, var_core_value_sig2AD8) => this[ox5b2da4(0x136)](var_core_value_sigC9E0, var_core_value_sig2AD8)))[ox5b2da4(0x16e)](var_core_value_sig76BA => var_core_value_sig76BA[ox5b2da4(0x109)](var_core_value_sig2AD0 => var_core_value_sig2AD0[ox5b2da4(0xcc)] > 0x0))["slice"](0x0, 0x5)
    };
  }
  ["getRowCount"]() {
    var var_core_value_sig2259;
    return ((var_core_value_sig2259 = this["getSource"]()) == null ? void 0x0 : var_core_value_sig2259[ox5708ea(0x181)][ox5708ea(0xcc)]) ?? 0x0;
  }
  ["getColumnCount"]() {
    var var_core_value_sig9E2F;
    return ((var_core_value_sig9E2F = this[ox207c2d(0x108)]()) == null ? void 0x0 : var_core_value_sig9E2F[ox207c2d(0x174)][ox207c2d(0xcc)]) ?? 0x0;
  }
  ["getCell"](var_core_value_sigD082, var_core_value_sigDBB7) {
    var var_core_value_sigD0A8;
    return (var_core_value_sigD0A8 = this[ox445330(0x108)]()) != null && (var_core_value_sigD0A8 = var_core_value_sigD0A8[ox445330(0x181)][var_core_value_sigD082]) != null && var_core_value_sigD0A8[ox445330(0x156)][var_core_value_sigDBB7] ? this[ox445330(0xdb)][ox445330(0x132)](a, this, var_core_value_sigD082, var_core_value_sigDBB7) : null;
  }
  ["getCellText"](var_core_value_sigF4B9, var_core_value_sig5CEE) {
    var var_core_value_sigE92A, var_core_value_sig362B;
    let var_core_value_sig5CA5 = (var_core_value_sigE92A = (0x0, e["getTableRangeById"])(this["_getDocumentData"](), this[ox57f4f7(0x168)])) == null || (var_core_value_sigE92A = var_core_value_sigE92A[ox57f4f7(0x157)][var_core_value_sigF4B9]) == null ? void 0x0 : var_core_value_sigE92A[ox57f4f7(0x13b)][var_core_value_sig5CEE];
    return var_core_value_sig5CA5 ? ((var_core_value_sig362B = this["_getDocumentData"]()[ox57f4f7(0x133)]) == null ? void 0x0 : var_core_value_sig362B["dataStream"][ox57f4f7(0x12e)](var_core_value_sig5CA5[ox57f4f7(0x102)] + 0x1, var_core_value_sig5CA5[ox57f4f7(0x160)])["replace"](/\r\n$/, "")) ?? "" : "";
  }
  ["getCellMargin"](var_core_value_sigE90F, var_core_value_sigEFD4) {
    var var_core_value_sig861B;
    let var_core_value_sig5237 = this[ox3242b1(0x108)](),
      var_core_value_sigBB00 = var_core_value_sig5237 == null || (var_core_value_sig861B = var_core_value_sig5237["tableRows"][var_core_value_sigE90F]) == null ? void 0x0 : var_core_value_sig861B[ox3242b1(0x156)][var_core_value_sigEFD4];
    return var_core_value_sigBB00 ? t["Tools"][ox3242b1(0x130)](var_core_value_sigBB00["margin"] ?? var_core_value_sig5237[ox3242b1(0x113)] ?? e[ox3242b1(0x13e)]) : null;
  }
  ["getCellMarginOverride"](var_core_value_sig7E54, var_core_value_sig9A8D) {
    var var_core_value_sigC259;
    let var_core_value_sig9C9F = (var_core_value_sigC259 = this[ox1f8cac(0x108)]()) == null || (var_core_value_sigC259 = var_core_value_sigC259[ox1f8cac(0x181)][var_core_value_sig7E54]) == null ? void 0x0 : var_core_value_sigC259["tableCells"][var_core_value_sig9A8D];
    return var_core_value_sig9C9F != null && var_core_value_sig9C9F[ox1f8cac(0x107)] ? t[ox1f8cac(0xc6)][ox1f8cac(0x130)](var_core_value_sig9C9F["margin"]) : null;
  }
  ["getDefaultCellMargin"]() {
    var var_core_value_sigFDEA;
    return t["Tools"][ox48a8ff(0x130)](((var_core_value_sigFDEA = this[ox48a8ff(0x108)]()) == null ? void 0x0 : var_core_value_sigFDEA[ox48a8ff(0x113)]) ?? e[ox48a8ff(0x13e)]);
  }
  ["getDefaultCellMarginOverride"]() {
    var var_core_value_sig86D0;
    let var_core_value_sig4CD2 = (var_core_value_sig86D0 = this[ox2f8df8(0x108)]()) == null ? void 0x0 : var_core_value_sig86D0[ox2f8df8(0x113)];
    return var_core_value_sig4CD2 ? t[ox2f8df8(0xc6)][ox2f8df8(0x130)](var_core_value_sig4CD2) : null;
  }
  ["getMetadata"]() {
    return this[ox4b1061(0xdb)]["get"](e[ox4b1061(0x139)])[ox4b1061(0x110)](this[ox4b1061(0x163)], this[ox4b1061(0x168)]);
  }
  ["getSource"]() {
    var var_core_value_sig48CA;
    return (var_core_value_sig48CA = this[ox487922(0xd7)]()["tableSource"]) == null ? void 0x0 : var_core_value_sig48CA[this[ox487922(0x168)]];
  }
  ["getRange"]() {
    return (0x0, e["getTableRangeById"])(this[ox216bee(0xd7)](), this[ox216bee(0x168)]);
  }
  ["getTableRange"]() {
    return {
      startRow: 0x0,
      endRow: Math[ox4485de(0x129)](0x0, this["getRowCount"]() - 0x1),
      startColumn: 0x0,
      endColumn: Math[ox4485de(0x129)](0x0, this[ox4485de(0x144)]() - 0x1)
    };
  }
  ["getCellRange"](var_core_value_sig50AF, var_core_value_sigA942) {
    return {
      startRow: var_core_value_sig50AF,
      endRow: var_core_value_sig50AF,
      startColumn: var_core_value_sigA942,
      endColumn: var_core_value_sigA942
    };
  }
  ["getCellContentRange"](var_core_value_sigA621, var_core_value_sigBBFF) {
    var var_core_value_sig8889;
    let var_core_value_sig32F8 = (var_core_value_sig8889 = (0x0, e["getTableRangeById"])(this[ox300dd3(0xd7)](), this[ox300dd3(0x168)])) == null || (var_core_value_sig8889 = var_core_value_sig8889[ox300dd3(0x157)][var_core_value_sigA621]) == null ? void 0x0 : var_core_value_sig8889[ox300dd3(0x13b)][var_core_value_sigBBFF];
    if (!var_core_value_sig32F8) return null;
    let var_core_value_sig5B67 = var_core_value_sig32F8[ox300dd3(0x102)] + 0x1;
    return {
      startOffset: var_core_value_sig5B67,
      endOffset: Math[ox300dd3(0x129)](var_core_value_sig5B67, var_core_value_sig32F8["endOffset"] - 0x1),
      segmentId: this[ox300dd3(0xf2)]
    };
  }
  ["getCellInsertOffset"](var_core_value_sig1758, var_core_value_sig4805) {
    let var_core_value_sigE67E = this["getCellContentRange"](var_core_value_sig1758, var_core_value_sig4805);
    return var_core_value_sigE67E ? Math[ox30919c(0x129)](var_core_value_sigE67E[ox30919c(0x102)], var_core_value_sigE67E[ox30919c(0x160)] - 0x1) : null;
  }
  ["getRowRange"](var_core_value_sig2902) {
    return this["getRowsRange"](var_core_value_sig2902, 0x1);
  }
  ["getRowsRange"](var_core_value_sig9989, var_core_value_sig698E = 0x1) {
    return {
      startRow: var_core_value_sig9989,
      endRow: var_core_value_sig9989 + var_core_value_sig698E - 0x1,
      startColumn: 0x0,
      endColumn: Math["max"](0x0, this[ox3e9a2f(0x144)]() - 0x1)
    };
  }
  ["getColumnRange"](var_core_value_sig2809) {
    return this["getColumnsRange"](var_core_value_sig2809, 0x1);
  }
  ["getColumnsRange"](var_core_value_sig2DAB, var_core_value_sig877E = 0x1) {
    return {
      startRow: 0x0,
      endRow: Math[ox386d19(0x129)](0x0, this[ox386d19(0x141)]() - 0x1),
      startColumn: var_core_value_sig2DAB,
      endColumn: var_core_value_sig2DAB + var_core_value_sig877E - 0x1
    };
  }
  ["selectTable"]() {
    return this[ox3e8756(0x148)](this[ox3e8756(0x191)](), e[ox3e8756(0x10c)][ox3e8756(0xe8)]);
  }
  ["selectRow"](var_core_value_sig20C8) {
    return this["selectRows"](var_core_value_sig20C8, 0x1);
  }
  ["selectRows"](var_core_value_sigE9A7, var_core_value_sigBECE = 0x1) {
    return this[ox5147cb(0x148)](this["getRowsRange"](var_core_value_sigE9A7, var_core_value_sigBECE), e[ox5147cb(0x10c)][ox5147cb(0xe4)]);
  }
  ["selectColumn"](var_core_value_sig1B22) {
    return this["selectColumns"](var_core_value_sig1B22, 0x1);
  }
  ["selectColumns"](var_core_value_sig7F72, var_core_value_sig7B2A = 0x1) {
    return this[ox594e08(0x148)](this[ox594e08(0x18f)](var_core_value_sig7F72, var_core_value_sig7B2A), e[ox594e08(0x10c)][ox594e08(0xf4)]);
  }
  ["selectCell"](var_core_value_sig06CD, var_core_value_sigA5F1) {
    return this["selectRange"](this[ox507a27(0xc2)](var_core_value_sig06CD, var_core_value_sigA5F1), e[ox507a27(0x10c)][ox507a27(0x11e)]);
  }
  ["selectRange"](var_core_value_sig97A2, var_core_value_sig07E9 = e["DocsTableSelectionKind"]["Range"]) {
    return this[ox43af05(0xdb)][ox43af05(0x170)](e[ox43af05(0x188)])["setStructuralSelection"]({
      ...var_core_value_sig97A2,
      kind: var_core_value_sig07E9,
      segmentId: this["_segmentId"],
      tableId: this[ox43af05(0x168)]
    }), !0x0;
  }
  ["insertRowBefore"](var_core_value_sig4F59) {
    return this[ox14f36e(0x172)](var_core_value_sig4F59, 0x1);
  }
  ["insertRowAfter"](var_core_value_sigF564) {
    return this[ox4da199(0x115)](var_core_value_sigF564, 0x1);
  }
  ["insertRowsBefore"](var_core_value_sig8CFA, var_core_value_sig2E11) {
    let var_core_value_sig5B69 = this[ox227113(0xd7)](),
      var_core_value_sigB098 = (0x0, e["buildInsertTableRowsMutationActions"])(var_core_value_sig5B69, this[ox227113(0x168)], var_core_value_sig8CFA, var_core_value_sig2E11, e[ox227113(0xe3)][ox227113(0xe1)], this[ox227113(0xf0)]());
    return var_core_value_sigB098 ? this["_mutateActions"](var_core_value_sig5B69, var_core_value_sigB098[ox227113(0x16b)]) : !0x1;
  }
  ["insertRowsAfter"](var_core_value_sigCE71, var_core_value_sig21D8) {
    let var_core_value_sig2B65 = this[ox513581(0xd7)](),
      var_core_value_sigD7EA = (0x0, e[ox513581(0xe6)])(var_core_value_sig2B65, this[ox513581(0x168)], var_core_value_sigCE71, var_core_value_sig21D8, e[ox513581(0xe3)][ox513581(0x12c)], this[ox513581(0xf0)]());
    return var_core_value_sigD7EA ? this[ox513581(0x11c)](var_core_value_sig2B65, var_core_value_sigD7EA["actions"]) : !0x1;
  }
  ["appendRow"]() {
    return this[ox142dbe(0x115)](Math[ox142dbe(0x129)](0x0, this[ox142dbe(0x141)]() - 0x1), 0x1);
  }
  ["insertColumnBefore"](var_core_value_sigB33B) {
    return this["insertColumnsBefore"](var_core_value_sigB33B, 0x1);
  }
  ["insertColumnAfter"](var_core_value_sig24B9) {
    return this["insertColumnsAfter"](var_core_value_sig24B9, 0x1);
  }
  ["insertColumnsBefore"](var_core_value_sigE627, var_core_value_sigEF3E) {
    let var_core_value_sig273D = this["_getDocumentData"](),
      var_core_value_sig9A0D = (0x0, e["buildInsertTableColumnsMutationActions"])(var_core_value_sig273D, this[oxba47eb(0x168)], var_core_value_sigE627, var_core_value_sigEF3E, e["DocsTableInsertPosition"][oxba47eb(0xc7)], {
        bodyPath: this[oxba47eb(0xf0)]()
      });
    return var_core_value_sig9A0D ? this[oxba47eb(0x11c)](var_core_value_sig273D, var_core_value_sig9A0D["actions"]) : !0x1;
  }
  ["insertColumnsAfter"](var_core_value_sigA319, var_core_value_sig2D58) {
    let var_core_value_sig223F = this[ox4ace92(0xd7)](),
      var_core_value_sigD749 = (0x0, e[ox4ace92(0x18b)])(var_core_value_sig223F, this["_tableId"], var_core_value_sigA319, var_core_value_sig2D58, e[ox4ace92(0xe3)][ox4ace92(0x190)], {
        bodyPath: this[ox4ace92(0xf0)]()
      });
    return var_core_value_sigD749 ? this[ox4ace92(0x11c)](var_core_value_sig223F, var_core_value_sigD749["actions"]) : !0x1;
  }
  ["appendColumn"]() {
    return this["insertColumnsAfter"](Math[ox390574(0x129)](0x0, this[ox390574(0x144)]() - 0x1), 0x1);
  }
  ["deleteRow"](var_core_value_sigCFFA) {
    return this[oxaa50a7(0x12d)](var_core_value_sigCFFA, 0x1);
  }
  ["deleteRows"](var_core_value_sig58C1, var_core_value_sig5090 = 0x1) {
    return !!this["_commandService"][ox504494(0x175)](e[ox504494(0x14f)]["id"], {
      endRow: var_core_value_sig58C1 + var_core_value_sig5090 - 0x1,
      segmentId: this[ox504494(0xf2)],
      startRow: var_core_value_sig58C1,
      tableId: this[ox504494(0x168)],
      unitId: this["_unitId"]
    });
  }
  ["deleteColumn"](var_core_value_sigC368) {
    return this[ox528272(0x13d)](var_core_value_sigC368, 0x1);
  }
  ["deleteColumns"](var_core_value_sigAD56, var_core_value_sigDB4A = 0x1) {
    return !!this[ox1a0e58(0xe7)][ox1a0e58(0x175)](e["DocsTableDeleteColumnsCommand"]["id"], {
      endColumn: var_core_value_sigAD56 + var_core_value_sigDB4A - 0x1,
      segmentId: this[ox1a0e58(0xf2)],
      startColumn: var_core_value_sigAD56,
      tableId: this["_tableId"],
      unitId: this[ox1a0e58(0x163)]
    });
  }
  ["deleteTable"]() {
    return !!this[ox5e65fa(0xe7)][ox5e65fa(0x175)](e[ox5e65fa(0x152)]["id"], {
      segmentId: this[ox5e65fa(0xf2)],
      tableId: this["_tableId"],
      unitId: this[ox5e65fa(0x163)]
    });
  }
  ["moveTableBy"](var_core_value_sig6418, var_core_value_sig1896) {
    let var_core_value_sig0285 = this[ox5882bf(0xd7)]();
    return this[ox5882bf(0x11c)](var_core_value_sig0285, (0x0, e[ox5882bf(0x12a)])(var_core_value_sig0285, this[ox5882bf(0x168)], var_core_value_sig6418, var_core_value_sig1896));
  }
  ["moveTableToOffset"](var_core_value_sig777D) {
    let var_core_value_sig3F4C = this[ox51265d(0xd7)]();
    return this[ox51265d(0x11c)](var_core_value_sig3F4C, (0x0, e[ox51265d(0xef)])(var_core_value_sig3F4C, this[ox51265d(0x168)], var_core_value_sig777D, this[ox51265d(0xf0)]()));
  }
  ["moveRow"](var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigF593 = e["DocsTableInsertPosition"]["Above"]) {
    return this[ox266079(0x10b)](var_core_value_sigD65A, 0x1, var_core_value_sig5A13, var_core_value_sigF593);
  }
  ["moveRows"](var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8 = e["DocsTableInsertPosition"]["Above"]) {
    let var_core_value_sigB744 = this[ox4e09bd(0xd7)](),
      var_core_value_sigEAE2 = (0x0, e[ox4e09bd(0x167)])(var_core_value_sigB744, this[ox4e09bd(0x168)], var_core_value_sig3607, var_core_value_sigF2E6, var_core_value_sigB512, var_core_value_sig34C8, this[ox4e09bd(0xf0)]());
    return var_core_value_sigEAE2 ? this[ox4e09bd(0x11c)](var_core_value_sigB744, var_core_value_sigEAE2[ox4e09bd(0x16b)]) : !0x1;
  }
  ["moveColumn"](var_core_value_sigE68A, var_core_value_sig3E68, var_core_value_sigF4C5 = e["DocsTableInsertPosition"]["Left"]) {
    return this[ox5b3fea(0x16c)](var_core_value_sigE68A, 0x1, var_core_value_sig3E68, var_core_value_sigF4C5);
  }
  ["moveColumns"](var_core_value_sig5410, var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6 = e["DocsTableInsertPosition"]["Left"]) {
    let var_core_value_sigCDDA = this[ox3089f3(0xd7)](),
      var_core_value_sigE243 = (0x0, e["buildMoveTableColumnsMutationActions"])(var_core_value_sigCDDA, this[ox3089f3(0x168)], var_core_value_sig5410, var_core_value_sig8EA0, var_core_value_sig492F, var_core_value_sigA6F6, this[ox3089f3(0xf0)]());
    return var_core_value_sigE243 ? this[ox3089f3(0x11c)](var_core_value_sigCDDA, var_core_value_sigE243["actions"]) : !0x1;
  }
  ["mergeCells"](var_core_value_sig74A8) {
    try {
      let var_core_value_sigFBFA = this[oxde5c88(0xd7)](),
        var_core_value_sigF602 = (0x0, e[oxde5c88(0xe0)])({
          documentData: var_core_value_sigFBFA,
          tableId: this[oxde5c88(0x168)],
          ...var_core_value_sig74A8
        });
      return var_core_value_sigF602 ? this["_mutateActions"](var_core_value_sigFBFA, var_core_value_sigF602[oxde5c88(0x16b)], var_core_value_sig74A8) : !0x1;
    } catch {
      return !0x1;
    }
  }
  ["unmergeCells"](var_core_value_sig21B2) {
    try {
      let var_core_value_sig1BBD = this[ox40af6d(0xd7)](),
        var_core_value_sigF704 = (0x0, e[ox40af6d(0xfd)])({
          documentData: var_core_value_sig1BBD,
          tableId: this["_tableId"],
          ...var_core_value_sig21B2
        });
      return var_core_value_sigF704 ? this[ox40af6d(0x11c)](var_core_value_sig1BBD, var_core_value_sigF704["actions"], var_core_value_sig21B2) : !0x1;
    } catch {
      return !0x1;
    }
  }
  ["setCellText"](var_core_value_sigDE08, var_core_value_sigACCB, var_core_value_sig7F33) {
    let var_core_value_sig0C53 = this[ox321afd(0xd7)](),
      var_core_value_sigEA04 = (0x0, e[ox321afd(0xce)])(this["_document"][ox321afd(0x135)]()[ox321afd(0x142)](), this[ox321afd(0xf2)]);
    return this[ox321afd(0x11c)](var_core_value_sig0C53, (0x0, e[ox321afd(0xd2)])({
      documentData: var_core_value_sig0C53,
      tableId: this[ox321afd(0x168)],
      row: var_core_value_sigDE08,
      column: var_core_value_sigACCB,
      text: var_core_value_sig7F33
    }, var_core_value_sigEA04), this[ox321afd(0xc2)](var_core_value_sigDE08, var_core_value_sigACCB));
  }
  ["setCellBackground"](var_core_value_sig7A62, var_core_value_sig8109) {
    let var_core_value_sig7565 = this["_getDocumentData"]();
    return this[ox149b26(0x11c)](var_core_value_sig7565, (0x0, e[ox149b26(0x17b)])(var_core_value_sig7565, {
      tableId: this[ox149b26(0x168)],
      ...var_core_value_sig7A62,
      value: var_core_value_sig8109
    }), var_core_value_sig7A62);
  }
  ["setCellMargin"](var_core_value_sigD4FB, var_core_value_sig3E71) {
    let var_core_value_sig01B3 = this[ox1d17c4(0xd7)]();
    return this["_mutateActions"](var_core_value_sig01B3, (0x0, e["buildSetTableCellMarginMutationActions"])({
      documentData: var_core_value_sig01B3,
      tableId: this["_tableId"],
      ...var_core_value_sigD4FB,
      margin: var_core_value_sig3E71
    }), var_core_value_sigD4FB);
  }
  ["setDefaultCellMargin"](var_core_value_sig7442) {
    let var_core_value_sigDF87 = this[ox6c6f4d(0xd7)]();
    return this[ox6c6f4d(0x11c)](var_core_value_sigDF87, (0x0, e[ox6c6f4d(0xbb)])(var_core_value_sigDF87, this["_tableId"], var_core_value_sig7442));
  }
  ["setBorder"](var_core_value_sig9EE0, var_core_value_sigF0511) {
    let var_core_value_sig0B45 = this[ox13d43a(0xd7)]();
    return this[ox13d43a(0x11c)](var_core_value_sig0B45, (0x0, e["buildSetTableBorderMutationActions"])({
      documentData: var_core_value_sig0B45,
      tableId: this[ox13d43a(0x168)],
      ...var_core_value_sig9EE0,
      preset: var_core_value_sigF0511[ox13d43a(0x12b)] ?? e[ox13d43a(0x192)][ox13d43a(0x104)],
      border: var_core_value_sigF0511[ox13d43a(0x15c)] ?? {
        color: {
          rgb: var_core_value_sigF0511[ox13d43a(0x180)] ?? ox13d43a(0x127)
        },
        width: {
          v: var_core_value_sigF0511["width"] ?? 0x1
        },
        dashStyle: t[ox13d43a(0x159)][ox13d43a(0x124)]
      }
    }), var_core_value_sig9EE0);
  }
  ["setTableBackground"](var_core_value_sig36F8) {
    return this[ox35a393(0xbf)](this[ox35a393(0x191)](), var_core_value_sig36F8);
  }
  ["setTableBorder"](var_core_value_sig03E1) {
    return this[ox2ec417(0xd4)](this["getTableRange"](), var_core_value_sig03E1);
  }
  ["setTableStyle"](var_core_value_sigBB57) {
    let var_core_value_sig7C4A = !var_core_value_sigBB57[ox5cc591(0x17c)] || this[ox5cc591(0x16d)](var_core_value_sigBB57[ox5cc591(0x17c)]),
      var_core_value_sigE799 = !var_core_value_sigBB57[ox5cc591(0x15c)] || this["setTableBorder"](var_core_value_sigBB57["border"]);
    return var_core_value_sig7C4A && var_core_value_sigE799;
  }
  ["setRowHeight"](var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB = t["TableRowHeightRule"]["AT_LEAST"]) {
    var var_core_value_sig826B;
    let var_core_value_sigCF89 = this[ox490b61(0xd7)]();
    return (var_core_value_sig826B = var_core_value_sigCF89[ox490b61(0x125)]) != null && (var_core_value_sig826B = var_core_value_sig826B[this["_tableId"]]) != null && var_core_value_sig826B["tableRows"][var_core_value_sigB601] ? this[ox490b61(0x11c)](var_core_value_sigCF89, (0x0, e[ox490b61(0x106)])(var_core_value_sigCF89, this[ox490b61(0x168)], var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB)) : !0x1;
  }
  ["getRowHeight"](var_core_value_sig00CB) {
    var var_core_value_sig77EE;
    let var_core_value_sig9F76 = (var_core_value_sig77EE = this[ox5c044d(0x108)]()) == null || (var_core_value_sig77EE = var_core_value_sig77EE[ox5c044d(0x181)][var_core_value_sig00CB]) == null ? void 0x0 : var_core_value_sig77EE[ox5c044d(0x17a)];
    return var_core_value_sig9F76 ? t[ox5c044d(0xc6)][ox5c044d(0x130)](var_core_value_sig9F76) : null;
  }
  ["setColumnWidth"](var_core_value_sigB008, var_core_value_sig8721) {
    var var_core_value_sig08BA;
    let var_core_value_sigDBB5 = this["_getDocumentData"]();
    return (var_core_value_sig08BA = var_core_value_sigDBB5[oxfe384a(0x125)]) != null && (var_core_value_sig08BA = var_core_value_sig08BA[this["_tableId"]]) != null && var_core_value_sig08BA[oxfe384a(0x174)][var_core_value_sigB008] ? this[oxfe384a(0x11c)](var_core_value_sigDBB5, (0x0, e[oxfe384a(0x137)])(var_core_value_sigDBB5, this["_tableId"], var_core_value_sigB008, var_core_value_sig8721)) : !0x1;
  }
  ["distributeRows"](var_core_value_sigCFAC = 0x0, var_core_value_sig237B = this["getRowCount"]()) {
    let var_core_value_sigFEAB = this[ox2e67d7(0xd7)]();
    return this[ox2e67d7(0x11c)](var_core_value_sigFEAB, (0x0, e["buildDistributeTableRowsMutationActions"])(var_core_value_sigFEAB, this["_tableId"], var_core_value_sigCFAC, var_core_value_sigCFAC + var_core_value_sig237B - 0x1));
  }
  ["distributeColumns"](var_core_value_sigE347 = 0x0, var_core_value_sig3C5B = this["getColumnCount"]()) {
    let var_core_value_sig200B = this[oxe593eb(0xd7)]();
    return this[oxe593eb(0x11c)](var_core_value_sig200B, (0x0, e[oxe593eb(0x15a)])(var_core_value_sig200B, this[oxe593eb(0x168)], var_core_value_sigE347, var_core_value_sigE347 + var_core_value_sig3C5B - 0x1));
  }
  ["getHeaderRowCount"]() {
    var var_core_value_sig3863;
    return ((var_core_value_sig3863 = this["getMetadata"]()) == null ? void 0x0 : var_core_value_sig3863[ox4ced1e(0xc3)]) ?? 0x0;
  }
  ["setHeaderRowCount"](var_core_value_sigC97C) {
    let var_core_value_sigC4B1 = this[ox47a433(0xdb)]["get"](e["DocsTableModel"]),
      var_core_value_sig1BD9 = this[ox47a433(0xd7)](),
      var_core_value_sigE43E = (0x0, e["buildSetTableHeaderRowCountMutationActions"])(var_core_value_sig1BD9, this[ox47a433(0x168)], var_core_value_sigC97C);
    if (!var_core_value_sigE43E) return !0x1;
    let var_core_value_sigA937 = this[ox47a433(0x11c)](var_core_value_sig1BD9, var_core_value_sigE43E[ox47a433(0x16b)]);
    return var_core_value_sigA937 && var_core_value_sigC4B1[ox47a433(0xd1)](this["_unitId"], this[ox47a433(0x168)], var_core_value_sigE43E["headerRowCount"]), var_core_value_sigA937;
  }
  ["pinHeaderRows"](var_core_value_sigCAD5) {
    return this[ox525f8f(0xd1)](var_core_value_sigCAD5);
  }
  ["hasTitleRow"]() {
    var var_core_value_sigE503;
    return ((var_core_value_sigE503 = this[ox211ac7(0xb8)]()) == null ? void 0x0 : var_core_value_sigE503[ox211ac7(0x112)]) ?? !0x1;
  }
  ["insertTitleRow"]() {
    let var_core_value_sig48DD = this["_injector"]["get"](e["DocsTableModel"]),
      var_core_value_sig5E6A = this[ox15ad42(0xd7)](),
      var_core_value_sigB7FC = (0x0, e[ox15ad42(0x14d)])(var_core_value_sig5E6A, this["_tableId"], this["_getBodyPath"]());
    if (!var_core_value_sigB7FC) return !0x1;
    let var_core_value_sig9CD9 = this[ox15ad42(0x11c)](var_core_value_sig5E6A, var_core_value_sigB7FC[ox15ad42(0x16b)]);
    return var_core_value_sig9CD9 && var_core_value_sig48DD[ox15ad42(0x13c)](this[ox15ad42(0x163)], this[ox15ad42(0x168)], !0x0), var_core_value_sig9CD9;
  }
  ["setColumnType"](var_core_value_sigFD0C, var_core_value_sig849B) {
    return this[ox35d820(0xdb)][ox35d820(0x170)](e[ox35d820(0x139)])[ox35d820(0xc8)](this[ox35d820(0x163)], this[ox35d820(0x168)], var_core_value_sigFD0C, var_core_value_sig849B), !0x0;
  }
  ["sortByColumn"](var_core_value_sig5F1A, var_core_value_sigB455) {
    let var_core_value_sig5241 = this[ox41ab0c(0xd7)]();
    return this["_mutateActions"](var_core_value_sig5241, (0x0, e["buildSortTableMutationActions"])(var_core_value_sig5241, this[ox41ab0c(0x164)](), this[ox41ab0c(0x168)], var_core_value_sig5F1A, var_core_value_sigB455, this["_getBodyPath"]()));
  }
  ["_getDocumentData"]() {
    let var_core_value_sigC6E5 = this[oxe9f8d(0xf9)][oxe9f8d(0x135)]()[oxe9f8d(0x142)]();
    return this[oxe9f8d(0xf2)] ? {
      ...this[oxe9f8d(0xf9)][oxe9f8d(0x135)](this[oxe9f8d(0xf2)])["getSnapshot"](),
      documentStyle: var_core_value_sigC6E5[oxe9f8d(0x13f)],
      tableSource: var_core_value_sigC6E5["tableSource"]
    } : var_core_value_sigC6E5;
  }
  ["_serializeModel"]() {
    return this[oxcda5a2(0xdb)][oxcda5a2(0x170)](e[oxcda5a2(0x139)])[oxcda5a2(0x15e)](this[oxcda5a2(0x163)]);
  }
  ["_getBodyPath"]() {
    return (0x0, e[ox560a33(0xce)])(this[ox560a33(0xf9)][ox560a33(0x135)]()[ox560a33(0x142)](), this[ox560a33(0xf2)]);
  }
  ["_mutateActions"](var_core_value_sigCEFB, var_core_value_sig1537, var_core_value_sigE4C6) {
    return (0x0, e[ox415ec2(0x155)])(this["_commandService"], this[ox415ec2(0x163)], var_core_value_sigCEFB, var_core_value_sig1537, var_core_value_sigE4C6 ? {
      tableId: this["_tableId"],
      segmentId: this[ox415ec2(0xf2)],
      ...var_core_value_sigE4C6
    } : void 0x0);
  }
};
f = d([u(0x3, t["ICommandService"]), u(0x4, (0x0, t["Inject"])(t["Injector"]))], f);
var p = class extends r["FDocument"] {
  ["getTables"](var_core_value_sig4313 = "") {
    return this[ox2c35e0(0xe2)](var_core_value_sig4313)[ox2c35e0(0x123)](var_core_value_sig2BCF => this[ox2c35e0(0xee)](var_core_value_sig2BCF[ox2c35e0(0x11d)], var_core_value_sig4313));
  }
  ["getTable"](var_core_value_sigFC87, var_core_value_sig156F = "") {
    return this["_getTables"](var_core_value_sig156F)[ox48d3b5(0x109)](var_core_value_sig0D69 => var_core_value_sig0D69[ox48d3b5(0x11d)] === var_core_value_sigFC87) ? this[ox48d3b5(0xee)](var_core_value_sigFC87, var_core_value_sig156F) : null;
  }
  ["getTableAt"](var_core_value_sigDD51, var_core_value_sigF057 = "") {
    var var_core_value_sig72F6;
    let var_core_value_sig9FBA = (var_core_value_sig72F6 = this[ox11ec37(0xe2)](var_core_value_sigF057)[var_core_value_sigDD51]) == null ? void 0x0 : var_core_value_sig72F6["tableId"];
    return var_core_value_sig9FBA ? this[ox11ec37(0xee)](var_core_value_sig9FBA, var_core_value_sigF057) : null;
  }
  ["getTableAtSelection"]() {
    let var_core_value_sigFE01 = this["_injector"][ox1bafc1(0x170)](e[ox1bafc1(0x188)])[ox1bafc1(0xea)]();
    return var_core_value_sigFE01 != null && var_core_value_sigFE01[ox1bafc1(0x11d)] ? this[ox1bafc1(0xee)](var_core_value_sigFE01[ox1bafc1(0x11d)], var_core_value_sigFE01[ox1bafc1(0x177)]) : null;
  }
  ["findTableByText"](var_core_value_sigA2CE, var_core_value_sig1975 = "") {
    return this[ox1fc279(0x182)](var_core_value_sigA2CE, var_core_value_sig1975)[0x0] ?? null;
  }
  ["findTables"](var_core_value_sig6EA1, var_core_value_sig029F = "") {
    let var_core_value_sig3767 = this[ox4277b8(0xfa)](var_core_value_sig029F),
      var_core_value_sig670B = typeof var_core_value_sig6EA1 == ox4277b8(0x15f) ? {
        text: var_core_value_sig6EA1
      } : var_core_value_sig6EA1;
    return this[ox4277b8(0xd5)](var_core_value_sig029F)["filter"](var_core_value_sig480E => {
      const var_core_value_sig26DB = ox4277b8;
      let var_core_value_sigF0F9 = var_core_value_sig480E["getId"]();
      return !(var_core_value_sig670B["tableId"] && var_core_value_sigF0F9 !== var_core_value_sig670B[var_core_value_sig26DB(0x11d)] || var_core_value_sig670B["text"] && !this["_tableContainsText"](var_core_value_sig3767, var_core_value_sigF0F9, var_core_value_sig670B[var_core_value_sig26DB(0xdd)]) || var_core_value_sig670B[var_core_value_sig26DB(0x17d)] && !this[var_core_value_sig26DB(0xf7)](var_core_value_sig480E, 0x0, var_core_value_sig670B[var_core_value_sig26DB(0x17d)]) || var_core_value_sig670B[var_core_value_sig26DB(0x11b)] && !this["_rowContainsText"](var_core_value_sig480E, 0x0, var_core_value_sig670B["titleText"]));
    });
  }
  ["insertTable"](var_core_value_sig6912, var_core_value_sigE235, var_core_value_sig7664 = {}) {
    let var_core_value_sig2281 = this["_injector"][ox500fe8(0x170)](t[ox500fe8(0xf5)]),
      var_core_value_sig5E86 = var_core_value_sig7664["tableId"] ?? (0x0, t[ox500fe8(0x12f)])(0x6);
    return var_core_value_sig2281["syncExecuteCommand"](e[ox500fe8(0xda)]["id"], {
      ...var_core_value_sig7664,
      unitId: this["getId"](),
      rows: var_core_value_sig6912,
      columns: var_core_value_sigE235,
      tableId: var_core_value_sig5E86
    }) ? this["_createFDocumentTable"](var_core_value_sig5E86, var_core_value_sig7664[ox500fe8(0x177)] ?? "") : null;
  }
  ["insertTableFromData"](var_core_value_sig6998, var_core_value_sigF639 = {}) {
    let var_core_value_sigEAE5 = this[ox2d8829(0xdb)][ox2d8829(0x170)](t[ox2d8829(0xf5)]),
      var_core_value_sigE94C = var_core_value_sigF639["tableId"] ?? (0x0, t["generateRandomId"])(0x6);
    return var_core_value_sigEAE5[ox2d8829(0x175)](e["DocsTableInsertTableCommand"]["id"], {
      ...var_core_value_sigF639,
      unitId: this[ox2d8829(0x162)](),
      values: var_core_value_sig6998,
      tableId: var_core_value_sigE94C
    }) ? this[ox2d8829(0xee)](var_core_value_sigE94C, var_core_value_sigF639[ox2d8829(0x177)] ?? "") : null;
  }
  ["_getTables"](var_core_value_sig6D47 = "") {
    let {
      tables: var_core_value_sigCB82 = []
    } = this[ox2efa9b(0x154)](var_core_value_sig6D47);
    return var_core_value_sigCB82;
  }
  ["_getTableDocumentData"](var_core_value_sigCF4E = "") {
    let var_core_value_sig6CAD = this["getDocumentDataModel"]()["getSnapshot"]();
    return var_core_value_sigCF4E ? {
      ...this[ox48d113(0x135)](var_core_value_sigCF4E)[ox48d113(0x142)](),
      documentStyle: var_core_value_sig6CAD[ox48d113(0x13f)],
      tableSource: var_core_value_sig6CAD[ox48d113(0x125)]
    } : var_core_value_sig6CAD;
  }
  ["_createFDocumentTable"](var_core_value_sig8CF5, var_core_value_sigDDD7 = "") {
    return this[ox23afaf(0xdb)][ox23afaf(0x132)](f, this, var_core_value_sig8CF5, var_core_value_sigDDD7);
  }
  ["_tableContainsText"](var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1) {
    var var_core_value_sig210D;
    let var_core_value_sigB4B4 = (0x0, e[ox5d33a0(0x116)])(var_core_value_sigB2CE, var_core_value_sig443C);
    if (!var_core_value_sigB4B4) return !0x1;
    let var_core_value_sigD407 = (var_core_value_sig210D = var_core_value_sigB2CE[ox5d33a0(0x133)]) == null ? void 0x0 : var_core_value_sig210D[ox5d33a0(0x131)];
    return var_core_value_sigD407 ? var_core_value_sigD407[ox5d33a0(0x12e)](var_core_value_sigB4B4[ox5d33a0(0x102)], var_core_value_sigB4B4["endOffset"])["includes"](var_core_value_sig39B1) : !0x1;
  }
  ["_rowContainsText"](var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6) {
    return Array["from"]({
      length: var_core_value_sig63F3[ox5d1fc6(0x144)]()
    }, (var_core_value_sig1A0F, var_core_value_sigFBA4) => var_core_value_sig63F3["getCellText"](var_core_value_sig6A71, var_core_value_sigFBA4))[ox5d1fc6(0x109)](var_core_value_sig4383 => var_core_value_sig4383["includes"](var_core_value_sig3BF6));
  }
};
r["FDocument"]["extend"](p), Object["defineProperty"](exports, "FDocumentTable", {
  enumerable: !0x0,
  get: function () {
    return f;
  }
}), exports["FDocumentTableCell"] = a;
