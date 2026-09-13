Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
let e = require("@univerjs-pro/slides"),
  t = require("@univerjs-pro/slides-table"),
  n = require("@univerjs-pro/slides/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs/core/facade");
function a(var_core_value_sig85B1) {
  "@babel/helpers - typeof";

  return a = typeof Symbol == "function" && typeof Symbol["iterator"] == "symbol" ? function (var_core_value_sig861B) {
    return typeof var_core_value_sig861B;
  } : function (var_core_value_sig5237) {
    return var_core_value_sig5237 && typeof Symbol == "function" && var_core_value_sig5237["constructor"] === Symbol && var_core_value_sig5237 !== Symbol["prototype"] ? "symbol" : typeof var_core_value_sig5237;
  }, a(var_core_value_sig85B1);
}
;
function o(var_core_value_sig3141, var_core_value_sig2162) {
  if (a(var_core_value_sig3141) != "object" || !var_core_value_sig3141) return var_core_value_sig3141;
  var var_core_value_sig2EAD = var_core_value_sig3141[Symbol["toPrimitive"]];
  if (var_core_value_sig2EAD !== void 0x0) {
    var var_core_value_sig6774 = var_core_value_sig2EAD["call"](var_core_value_sig3141, var_core_value_sig2162 || "default");
    if (a(var_core_value_sig6774) != "object") return var_core_value_sig6774;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig2162 === "string" ? String : Number)(var_core_value_sig3141);
}
;
function s(var_core_value_sig340D) {
  var var_core_value_sig82D4 = o(var_core_value_sig340D, "string");
  return a(var_core_value_sig82D4) == "symbol" ? var_core_value_sig82D4 : var_core_value_sig82D4 + "";
}
;
function c(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86) {
  return (var_core_value_sig7DF1 = s(var_core_value_sig7DF1)) in var_core_value_sigBDE4 ? Object["defineProperty"](var_core_value_sigBDE4, var_core_value_sig7DF1, {
    value: var_core_value_sigDC86,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sigBDE4[var_core_value_sig7DF1] = var_core_value_sigDC86, var_core_value_sigBDE4;
}
var l = class extends i["FBase"] {
    constructor(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) {
      var var_core_value_sig9C9F, var_core_value_sigFDEA;
      super(), this["unitId"] = var_core_value_sigBB00, this["subUnitId"] = var_core_value_sig7E54, this["_injector"] = var_core_value_sig9A8D, c(this, "table", {}), c(this, "element", {}), c(this, "_values", void 0x0), c(this, "_textData", void 0x0), c(this, "_rows", 0x0), c(this, "_columns", 0x0), c(this, "_rowHeight", void 0x0), c(this, "_columnWidth", void 0x0), c(this, "_cellStyles", []), var_core_value_sigC259 != null && var_core_value_sigC259["table"] && (this["table"] = r["Tools"]["deepClone"](var_core_value_sigC259["table"])), this["table"]["id"] || (this["table"]["id"] = (0x0, r["generateRandomId"])(0x6)), var_core_value_sigC259 != null && var_core_value_sigC259["element"] && (this["element"] = r["Tools"]["deepClone"](var_core_value_sigC259["element"])), this["element"]["id"] || (this["element"]["id"] = (0x0, r["generateRandomId"])(0x6)), this["element"]["type"] = e["PageElementTypeEnum"]["Table"], this["element"]["tableId"] = this["table"]["id"], this["_rows"] = ((var_core_value_sig9C9F = this["table"]["rows"]) == null ? void 0x0 : var_core_value_sig9C9F["length"]) ?? t["DEFAULT_SLIDE_TABLE_ROW_COUNT"], this["_columns"] = ((var_core_value_sigFDEA = this["table"]["columns"]) == null ? void 0x0 : var_core_value_sigFDEA["length"]) ?? t["DEFAULT_SLIDE_TABLE_COLUMN_COUNT"];
    }
    ["setValues"](var_core_value_sig86D0) {
      return this["_values"] = var_core_value_sig86D0["map"](var_core_value_sig0D69 => [...var_core_value_sig0D69]), this["_handleMaxRowsColumns"](this["_rows"], this["_columns"]), this;
    }
    ["setTextData"](var_core_value_sig4CD2) {
      return this["_textData"] = r["Tools"]["deepClone"](var_core_value_sig4CD2), this["_handleMaxRowsColumns"](this["_rows"], this["_columns"]), this;
    }
    ["setRichTextValues"](var_core_value_sig48CA) {
      return this["setTextData"](var_core_value_sig48CA["map"](var_core_value_sig480E => var_core_value_sig480E["map"](var_core_value_sig7524 => var_core_value_sig7524["getData"]())));
    }
    ["setRows"](var_core_value_sig50AF) {
      return this[ox317136(0x15e)](var_core_value_sig50AF, this["_columns"]), this;
    }
    ["setColumns"](var_core_value_sigA942) {
      return this[ox494632(0x15e)](this[ox494632(0xe8)], var_core_value_sigA942), this;
    }
    ["setAbsolutePosition"](var_core_value_sigA621, var_core_value_sigBBFF) {
      return this[ox480561(0x104)][ox480561(0xbb)] = {
        ...this["element"][ox480561(0xbb)],
        left: var_core_value_sigA621,
        top: var_core_value_sigBBFF
      }, this;
    }
    ["setSize"](var_core_value_sig8889, var_core_value_sig32F8) {
      return this[ox4af89a(0x104)][ox4af89a(0xbb)] = {
        ...this[ox4af89a(0x104)][ox4af89a(0xbb)],
        width: var_core_value_sig8889,
        height: var_core_value_sig32F8
      }, this;
    }
    ["setRotation"](var_core_value_sig5B67) {
      return this[ox285b3a(0x104)][ox285b3a(0xbb)] = {
        ...this[ox285b3a(0x104)]["transform"],
        rotation: var_core_value_sig5B67
      }, this;
    }
    ["setPlaceholder"](var_core_value_sig1758) {
      return this["element"][ox1f62ed(0xb3)] = {
        ...this[ox1f62ed(0x104)][ox1f62ed(0xb3)],
        ...var_core_value_sig1758
      }, this;
    }
    ["setRowHeight"](var_core_value_sig4805) {
      return this["_rowHeight"] = var_core_value_sig4805, this;
    }
    ["setColumnWidth"](var_core_value_sigE67E) {
      return this["_columnWidth"] = var_core_value_sigE67E, this;
    }
    ["setCellStyles"](var_core_value_sig2902) {
      return this["_cellStyles"] = var_core_value_sig2902, this;
    }
    ["setOptions"](var_core_value_sig9989) {
      return this[ox347d80(0x17b)][ox347d80(0x143)] = {
        ...this[ox347d80(0x17b)][ox347d80(0x143)],
        ...var_core_value_sig9989
      }, this;
    }
    ["setName"](var_core_value_sig698E) {
      return this[ox3dbd85(0x17b)][ox3dbd85(0xad)] = var_core_value_sig698E, this;
    }
    ["setDescription"](var_core_value_sig2809) {
      return this["table"][ox2fa4c2(0x16d)] = var_core_value_sig2809, this;
    }
    ["setStyleId"](var_core_value_sig2DAB) {
      return this[ox10f33a(0x17b)][ox10f33a(0xde)] = var_core_value_sig2DAB, this;
    }
    ["setCustom"](var_core_value_sig877E) {
      return this[ox189d08(0x17b)][ox189d08(0xd4)] = var_core_value_sig877E, this;
    }
    ["build"]() {
      let {
        rows: var_core_value_sig20C8,
        columns: var_core_value_sigE9A7,
        resolvedOptions: var_core_value_sigBECE
      } = (0x0, t["buildSlideTable"])({
        tableId: this[ox5cf559(0x17b)]["id"],
        values: this["_values"],
        textData: this["_textData"],
        rows: this["_rows"],
        columns: this[ox5cf559(0x109)],
        rowHeight: this[ox5cf559(0xb5)],
        columnWidth: this[ox5cf559(0xe5)],
        cellStyles: this[ox5cf559(0x159)]
      });
      return this[ox5cf559(0x17b)][ox5cf559(0x11a)] = var_core_value_sig20C8, this["table"]["columns"] = var_core_value_sigE9A7, this[ox5cf559(0x104)]["transform"] = this["_resolveElementTransform"](var_core_value_sigBECE), {
        unitId: this[ox5cf559(0xb4)],
        subUnitId: this[ox5cf559(0x116)],
        createOptions: {
          id: this[ox5cf559(0x17b)]["id"],
          rows: this[ox5cf559(0xe8)],
          columns: this[ox5cf559(0x109)],
          name: this[ox5cf559(0x17b)]["name"],
          description: this[ox5cf559(0x17b)]["description"],
          styleId: this[ox5cf559(0x17b)][ox5cf559(0xde)],
          columnWidth: var_core_value_sigBECE[ox5cf559(0x16b)],
          rowHeight: var_core_value_sigBECE["rowHeight"],
          options: this[ox5cf559(0x17b)][ox5cf559(0x143)]
        },
        table: this[ox5cf559(0x17b)],
        element: this[ox5cf559(0x104)]
      };
    }
    ["_resolveElementTransform"](var_core_value_sig1B22) {
      let var_core_value_sig7F72 = this[ox656d6c(0x104)][ox656d6c(0xbb)],
        var_core_value_sig7B2A = var_core_value_sig1B22[ox656d6c(0x155)] * var_core_value_sig1B22[ox656d6c(0x16b)],
        var_core_value_sig06CD = var_core_value_sig1B22[ox656d6c(0x11a)] * var_core_value_sig1B22[ox656d6c(0xce)];
      return {
        left: (var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72[ox656d6c(0x156)]) ?? t[ox656d6c(0xee)],
        top: (var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72[ox656d6c(0x13e)]) ?? t["DEFAULT_SLIDE_TABLE_ELEMENT_TOP"],
        width: Math[ox656d6c(0xe3)]((var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72[ox656d6c(0x12a)]) ?? 0x0, var_core_value_sig7B2A),
        height: Math[ox656d6c(0xe3)]((var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72[ox656d6c(0xe0)]) ?? 0x0, var_core_value_sig06CD),
        rotation: (var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72["rotation"]) ?? t["DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION"]
      };
    }
    ["_handleMaxRowsColumns"](var_core_value_sigA5F1, var_core_value_sig97A2) {
      var var_core_value_sig07E9, var_core_value_sig4F59;
      let var_core_value_sigF564 = ((var_core_value_sig07E9 = this[ox314a3c(0x174)]) == null ? void 0x0 : var_core_value_sig07E9[ox314a3c(0xb9)]) ?? 0x0,
        var_core_value_sig8CFA = 0x0;
      for (let var_core_value_sig26DB of this[ox314a3c(0x174)] ?? []) var_core_value_sig8CFA = Math[ox314a3c(0xe3)](var_core_value_sig8CFA, var_core_value_sig26DB[ox314a3c(0xb9)]);
      let var_core_value_sig2E11 = ((var_core_value_sig4F59 = this["_textData"]) == null ? void 0x0 : var_core_value_sig4F59[ox314a3c(0xb9)]) ?? 0x0,
        var_core_value_sig5B69 = 0x0;
      for (let var_core_value_sigF0F9 of this[ox314a3c(0xcb)] ?? []) var_core_value_sig5B69 = Math[ox314a3c(0xe3)](var_core_value_sig5B69, var_core_value_sigF0F9[ox314a3c(0xb9)]);
      this["_rows"] = Math[ox314a3c(0xe3)](var_core_value_sigA5F1, var_core_value_sigF564, var_core_value_sig2E11), this["_columns"] = Math[ox314a3c(0xe3)](var_core_value_sig97A2, var_core_value_sig8CFA, var_core_value_sig5B69);
    }
  },
  u = class {
    constructor(var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8) {
      this[ox453520(0x17e)] = var_core_value_sigB098, this[ox453520(0x118)] = var_core_value_sigCE71, this[ox453520(0x172)] = var_core_value_sig21D8;
    }
    ["getTable"]() {
      return this[ox2734c1(0x17e)];
    }
    ["getRowIndex"]() {
      return this["_row"];
    }
    ["getColumnIndex"]() {
      return this[ox9120c0(0x172)];
    }
    ["getData"]() {
      return this["_table"][ox348513(0xf7)](this[ox348513(0x118)], this[ox348513(0x172)]);
    }
    ["getText"]() {
      return this["_table"]["getCellText"](this[ox454de3(0x118)], this[ox454de3(0x172)]);
    }
    ["getTextData"]() {
      return this[ox4ff0cb(0x17e)][ox4ff0cb(0x15f)](this[ox4ff0cb(0x118)], this["_column"]);
    }
    ["getRichText"]() {
      return this[ox1517cb(0x17e)][ox1517cb(0xc9)](this[ox1517cb(0x118)], this[ox1517cb(0x172)]);
    }
    ["getStyle"]() {
      return this["_table"][ox1123ad(0x147)](this["_row"], this[ox1123ad(0x172)]);
    }
    ["setText"](var_core_value_sig2B65) {
      return this["_table"][oxb8121b(0xac)](this[oxb8121b(0x118)], this["_column"], var_core_value_sig2B65);
    }
    ["setTextData"](var_core_value_sigD7EA) {
      return this[ox21c823(0x17e)][ox21c823(0x182)](this[ox21c823(0x118)], this[ox21c823(0x172)], var_core_value_sigD7EA);
    }
    ["setRichText"](var_core_value_sigB33B) {
      return this[ox14f049(0x17e)][ox14f049(0xea)](this[ox14f049(0x118)], this["_column"], var_core_value_sigB33B);
    }
    ["setStyle"](var_core_value_sig24B9) {
      return this[ox5688bf(0x17e)][ox5688bf(0x129)](this["_table"][ox5688bf(0x177)](this[ox5688bf(0x118)], this[ox5688bf(0x172)]), var_core_value_sig24B9);
    }
    ["setFill"](var_core_value_sigE627) {
      return this[ox17f73e(0x17e)][ox17f73e(0xbd)](this["_table"][ox17f73e(0x177)](this[ox17f73e(0x118)], this[ox17f73e(0x172)]), var_core_value_sigE627);
    }
    ["setBackgroundColor"](var_core_value_sigEF3E) {
      return this[ox54d03f(0x17e)]["setCellBackground"](this[ox54d03f(0x17e)]["getCellRange"](this[ox54d03f(0x118)], this[ox54d03f(0x172)]), var_core_value_sigEF3E);
    }
    ["clearBackground"]() {
      return this["setFill"](void 0x0);
    }
    ["setBorder"](var_core_value_sig273D) {
      return this[ox48f9dd(0x17e)][ox48f9dd(0xa9)](this[ox48f9dd(0x17e)]["getCellRange"](this[ox48f9dd(0x118)], this[ox48f9dd(0x172)]), var_core_value_sig273D);
    }
    ["mergeTo"](var_core_value_sig9A0D, var_core_value_sigA319) {
      return this[ox30c149(0x17e)][ox30c149(0xab)]({
        startRow: this[ox30c149(0x118)],
        endRow: this["_row"] + var_core_value_sig9A0D - 0x1,
        startColumn: this["_column"],
        endColumn: this[ox30c149(0x172)] + var_core_value_sigA319 - 0x1
      });
    }
    ["unmerge"]() {
      return this[ox35d564(0x17e)]["unmergeCell"](this[ox35d564(0x118)], this["_column"]);
    }
  };
function d(var_core_value_sig0B0C, var_core_value_sigA39E) {
  return function (var_core_value_sig2D58, var_core_value_sig223F) {
    var_core_value_sigA39E(var_core_value_sig2D58, var_core_value_sig223F, var_core_value_sig0B0C);
  };
}
;
function f(var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1) {
  var var_core_value_sig7F19 = arguments[ox3e429f(0xb9)],
    var_core_value_sig7827 = var_core_value_sig7F19 < 0x3 ? var_core_value_sig011D : var_core_value_sig65A1 === null ? var_core_value_sig65A1 = Object[ox3e429f(0x16c)](var_core_value_sig011D, var_core_value_sig6167) : var_core_value_sig65A1,
    var_core_value_sig652C;
  if (typeof Reflect == ox3e429f(0x181) && typeof Reflect[ox3e429f(0x125)] == ox3e429f(0xaa)) var_core_value_sig7827 = Reflect["decorate"](var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1);else {
    for (var var_core_value_sig7E32 = var_core_value_sigBBEE["length"] - 0x1; var_core_value_sig7E32 >= 0x0; var_core_value_sig7E32--) (var_core_value_sig652C = var_core_value_sigBBEE[var_core_value_sig7E32]) && (var_core_value_sig7827 = (var_core_value_sig7F19 < 0x3 ? var_core_value_sig652C(var_core_value_sig7827) : var_core_value_sig7F19 > 0x3 ? var_core_value_sig652C(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig7827) : var_core_value_sig652C(var_core_value_sig011D, var_core_value_sig6167)) || var_core_value_sig7827);
  }
  return var_core_value_sig7F19 > 0x3 && var_core_value_sig7827 && Object["defineProperty"](var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig7827), var_core_value_sig7827;
}
let p = class extends n["FPageElement"] {
  constructor(var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A) {
    super(var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A), this[ox2a0f24(0x111)] = var_core_value_sig5090, this[ox2a0f24(0xc8)] = var_core_value_sigC368;
  }
  ["getTableId"]() {
    return this[ox477dc8(0xcd)]()[ox477dc8(0x157)];
  }
  ["getTableData"]() {
    let var_core_value_sig6418 = this[ox1a140e(0xd6)][ox1a140e(0xc5)](t["SlideTableResourceService"])[ox1a140e(0xed)](this["unitId"], this[ox1a140e(0x131)]());
    if (!var_core_value_sig6418) throw Error("Slide\x20table\x20resource\x20\x22" + this["getTableId"]() + ox1a140e(0x167));
    return var_core_value_sig6418;
  }
  ["describe"]() {
    let var_core_value_sig1896 = this[ox211e6d(0xca)]();
    return {
      id: var_core_value_sig1896["id"],
      elementId: this[ox211e6d(0x122)](),
      rowCount: var_core_value_sig1896[ox211e6d(0x11a)]["length"],
      columnCount: var_core_value_sig1896[ox211e6d(0x155)][ox211e6d(0xb9)],
      name: var_core_value_sig1896[ox211e6d(0xad)],
      description: var_core_value_sig1896["description"],
      styleId: var_core_value_sig1896["styleId"],
      options: {
        ...var_core_value_sig1896[ox211e6d(0x143)]
      },
      columns: var_core_value_sig1896[ox211e6d(0x155)][ox211e6d(0x14b)]((var_core_value_sig1A0F, var_core_value_sigFBA4) => ({
        index: var_core_value_sigFBA4,
        width: var_core_value_sig1A0F["width"]
      })),
      rows: var_core_value_sig1896["rows"][ox211e6d(0x14b)]((var_core_value_sig4383, var_core_value_sig186C) => ({
        index: var_core_value_sig186C,
        height: var_core_value_sig4383["height"]
      })),
      sampleRows: var_core_value_sig1896["rows"][ox211e6d(0x14b)]((var_core_value_sigD955, var_core_value_sig48BD) => var_core_value_sig1896["columns"][ox211e6d(0x14b)]((var_core_value_sig2AD8, var_core_value_sig2AD0) => this[ox211e6d(0x11b)](var_core_value_sig48BD, var_core_value_sig2AD0)))[ox211e6d(0xf2)](var_core_value_sig429F => var_core_value_sig429F[ox211e6d(0x180)](var_core_value_sig3EEE => var_core_value_sig3EEE[ox211e6d(0xb9)] > 0x0))[ox211e6d(0x10f)](0x0, 0x5)
    };
  }
  ["getRowCount"]() {
    return this[ox23ffda(0xca)]()["rows"]["length"];
  }
  ["getColumnCount"]() {
    return this["getTableData"]()[oxc9c937(0x155)]["length"];
  }
  ["getCell"](var_core_value_sig0285, var_core_value_sig777D) {
    var var_core_value_sig3F4C;
    return (var_core_value_sig3F4C = this[ox169bd3(0xca)]()[ox169bd3(0x11a)][var_core_value_sig0285]) != null && var_core_value_sig3F4C[ox169bd3(0xeb)][var_core_value_sig777D] ? this[ox169bd3(0xd6)][ox169bd3(0x100)](u, this, var_core_value_sig0285, var_core_value_sig777D) : null;
  }
  ["getCellData"](var_core_value_sigD65A, var_core_value_sig5A13) {
    var var_core_value_sigF593;
    let var_core_value_sig3607 = (var_core_value_sigF593 = this["getTableData"]()[ox52aa8c(0x11a)][var_core_value_sigD65A]) == null ? void 0x0 : var_core_value_sigF593[ox52aa8c(0xeb)][var_core_value_sig5A13];
    return var_core_value_sig3607 ? r["Tools"][ox52aa8c(0x11e)](var_core_value_sig3607) : null;
  }
  ["getCellText"](var_core_value_sigB512, var_core_value_sigF2E6) {
    var var_core_value_sig34C8;
    let var_core_value_sigB744 = (var_core_value_sig34C8 = this["getTableData"]()["rows"][var_core_value_sigB512]) == null || (var_core_value_sig34C8 = var_core_value_sig34C8[ox494ac0(0xeb)][var_core_value_sigF2E6]) == null ? void 0x0 : var_core_value_sig34C8["textData"];
    return var_core_value_sigB744 ? (0x0, e[ox494ac0(0x175)])(var_core_value_sigB744) : "";
  }
  ["getCellTextData"](var_core_value_sigEAE2, var_core_value_sigE68A) {
    var var_core_value_sig3E68;
    let var_core_value_sigF4C5 = (var_core_value_sig3E68 = this["getTableData"]()[ox33e651(0x11a)][var_core_value_sigEAE2]) == null || (var_core_value_sig3E68 = var_core_value_sig3E68["cells"][var_core_value_sigE68A]) == null ? void 0x0 : var_core_value_sig3E68[ox33e651(0x149)];
    return var_core_value_sigF4C5 ? r[ox33e651(0x165)][ox33e651(0x11e)](var_core_value_sigF4C5) : void 0x0;
  }
  ["getCellRichText"](var_core_value_sig5410, var_core_value_sig492F) {
    let var_core_value_sig8EA0 = this["getCellTextData"](var_core_value_sig5410, var_core_value_sig492F);
    return var_core_value_sig8EA0 ? r[ox51bf01(0x15b)][ox51bf01(0xda)](var_core_value_sig8EA0) : null;
  }
  ["getCellStyle"](var_core_value_sigA6F6, var_core_value_sigCDDA) {
    var var_core_value_sigE243;
    let var_core_value_sig74A8 = (var_core_value_sigE243 = this[ox1403cd(0xca)]()[ox1403cd(0x11a)][var_core_value_sigA6F6]) == null || (var_core_value_sigE243 = var_core_value_sigE243["cells"][var_core_value_sigCDDA]) == null ? void 0x0 : var_core_value_sigE243[ox1403cd(0xbe)];
    return var_core_value_sig74A8 ? r[ox1403cd(0x165)][ox1403cd(0x11e)](var_core_value_sig74A8) : void 0x0;
  }
  ["getTableRange"]() {
    return {
      startRow: 0x0,
      endRow: Math[ox276e4d(0xe3)](0x0, this[ox276e4d(0xc1)]() - 0x1),
      startColumn: 0x0,
      endColumn: Math[ox276e4d(0xe3)](0x0, this["getColumnCount"]() - 0x1)
    };
  }
  ["getCellRange"](var_core_value_sig21B2, var_core_value_sigDE08) {
    return {
      startRow: var_core_value_sig21B2,
      endRow: var_core_value_sig21B2,
      startColumn: var_core_value_sigDE08,
      endColumn: var_core_value_sigDE08
    };
  }
  ["getRowsRange"](var_core_value_sigACCB, var_core_value_sig7F33 = 0x1) {
    return {
      startRow: var_core_value_sigACCB,
      endRow: var_core_value_sigACCB + var_core_value_sig7F33 - 0x1,
      startColumn: 0x0,
      endColumn: Math[oxde4b24(0xe3)](0x0, this["getColumnCount"]() - 0x1)
    };
  }
  ["getColumnsRange"](var_core_value_sig0C53, var_core_value_sigEA04 = 0x1) {
    return {
      startRow: 0x0,
      endRow: Math[ox1bd123(0xe3)](0x0, this["getRowCount"]() - 0x1),
      startColumn: var_core_value_sig0C53,
      endColumn: var_core_value_sig0C53 + var_core_value_sigEA04 - 0x1
    };
  }
  ["toBuilder"]() {
    let var_core_value_sig7A62 = this[ox4809ba(0xca)](),
      var_core_value_sig8109 = this[ox4809ba(0xcd)]();
    return this[ox4809ba(0xd6)][ox4809ba(0x100)](l, this[ox4809ba(0xb4)], this[ox4809ba(0x116)], this[ox4809ba(0xd6)], {
      table: var_core_value_sig7A62,
      element: var_core_value_sig8109
    });
  }
  ["insertRowsBefore"](var_core_value_sig7565, var_core_value_sigD4FB = 0x1, var_core_value_sig3E71) {
    return this[ox186f8f(0xd6)][ox186f8f(0xc5)](r[ox186f8f(0x11f)])["syncExecuteCommand"](t["InsertSlideTableRowsCommand"]["id"], {
      unitId: this[ox186f8f(0xb4)],
      subUnitId: this[ox186f8f(0x116)],
      elementId: this[ox186f8f(0x108)],
      tableId: this["getTableId"](),
      rowIndex: var_core_value_sig7565,
      count: var_core_value_sigD4FB,
      height: var_core_value_sig3E71
    });
  }
  ["insertRowsAfter"](var_core_value_sig01B3, var_core_value_sig7442 = 0x1, var_core_value_sigDF87) {
    return this[ox372d74(0x15c)](var_core_value_sig01B3 + 0x1, var_core_value_sig7442, var_core_value_sigDF87);
  }
  ["appendRows"](var_core_value_sig9EE0 = 0x1, var_core_value_sigF051) {
    return this[ox11b1a7(0x15c)](this[ox11b1a7(0xc1)](), var_core_value_sig9EE0, var_core_value_sigF051);
  }
  ["deleteRows"](var_core_value_sig0B45, var_core_value_sig36F8 = 0x1) {
    return this["_injector"][ox6e602(0xc5)](r[ox6e602(0x11f)])[ox6e602(0x151)](t["DeleteSlideTableRowsCommand"]["id"], {
      unitId: this[ox6e602(0xb4)],
      tableId: this[ox6e602(0x131)](),
      startRow: var_core_value_sig0B45,
      endRow: var_core_value_sig0B45 + var_core_value_sig36F8 - 0x1
    });
  }
  ["insertColumnsBefore"](var_core_value_sig03E1, var_core_value_sigBB57 = 0x1, var_core_value_sig7C4A) {
    return this[ox38044e(0xd6)][ox38044e(0xc5)](r[ox38044e(0x11f)])[ox38044e(0x151)](t["InsertSlideTableColumnsCommand"]["id"], {
      unitId: this["unitId"],
      subUnitId: this[ox38044e(0x116)],
      elementId: this[ox38044e(0x108)],
      tableId: this[ox38044e(0x131)](),
      columnIndex: var_core_value_sig03E1,
      count: var_core_value_sigBB57,
      width: var_core_value_sig7C4A
    });
  }
  ["insertColumnsAfter"](var_core_value_sigE799, var_core_value_sigB601 = 0x1, var_core_value_sig8B71) {
    return this[ox21c650(0xc7)](var_core_value_sigE799 + 0x1, var_core_value_sigB601, var_core_value_sig8B71);
  }
  ["appendColumns"](var_core_value_sigAEFB = 0x1, var_core_value_sig826B) {
    return this[ox54113d(0xc7)](this[ox54113d(0x12d)](), var_core_value_sigAEFB, var_core_value_sig826B);
  }
  ["deleteColumns"](var_core_value_sigCF89, var_core_value_sig00CB = 0x1) {
    return this[ox19a74f(0xd6)]["get"](r[ox19a74f(0x11f)])[ox19a74f(0x151)](t[ox19a74f(0xf3)]["id"], {
      unitId: this[ox19a74f(0xb4)],
      tableId: this[ox19a74f(0x131)](),
      startColumn: var_core_value_sigCF89,
      endColumn: var_core_value_sigCF89 + var_core_value_sig00CB - 0x1
    });
  }
  ["mergeCells"](var_core_value_sig77EE) {
    return this["_injector"][ox516cf2(0xc5)](r["ICommandService"])[ox516cf2(0x151)](t["MergeSlideTableCellsCommand"]["id"], {
      unitId: this[ox516cf2(0xb4)],
      tableId: this[ox516cf2(0x131)](),
      range: (0x0, t["normalizeSlideTableCellRange"])(var_core_value_sig77EE)
    });
  }
  ["unmergeCell"](var_core_value_sig9F76, var_core_value_sigB008) {
    return this["_injector"]["get"](r[ox4d8883(0x11f)])[ox4d8883(0x151)](t[ox4d8883(0x16a)]["id"], {
      unitId: this[ox4d8883(0xb4)],
      tableId: this["getTableId"](),
      row: var_core_value_sig9F76,
      column: var_core_value_sigB008
    });
  }
  ["remove"]() {
    return this[ox547806(0xd6)]["get"](r[ox547806(0x11f)])[ox547806(0x151)](t[ox547806(0xd2)]["id"], {
      unitId: this["unitId"],
      subUnitId: this[ox547806(0x116)],
      tableId: this[ox547806(0x131)](),
      elementId: this[ox547806(0x122)]()
    });
  }
  ["setCellText"](var_core_value_sig8721, var_core_value_sig08BA, var_core_value_sigDBB5) {
    return this[ox722dab(0x182)](var_core_value_sig8721, var_core_value_sig08BA, (0x0, e["plainTextToSlideDocumentData"])(var_core_value_sigDBB5, {
      id: ox722dab(0xc3) + this[ox722dab(0x131)]() + "_" + var_core_value_sig8721 + "_" + var_core_value_sig08BA
    }));
  }
  ["setCellTextData"](var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB) {
    return this[oxc6a571(0x144)](var_core_value_sigF62A => {
      const var_core_value_sig8178 = oxc6a571;
      var var_core_value_sigE9ED;
      let var_core_value_sigB577 = (var_core_value_sigE9ED = var_core_value_sigF62A[var_core_value_sigCFAC]) == null ? void 0x0 : var_core_value_sigE9ED[var_core_value_sig8178(0xeb)][var_core_value_sig237B];
      return var_core_value_sigB577 ? (var_core_value_sigB577["textData"] = r[var_core_value_sig8178(0x165)][var_core_value_sig8178(0x11e)](var_core_value_sigFEAB), !0x0) : !0x1;
    });
  }
  ["setCellRichText"](var_core_value_sigE347, var_core_value_sig3C5B, var_core_value_sig200B) {
    return this[ox1f43f8(0x182)](var_core_value_sigE347, var_core_value_sig3C5B, var_core_value_sig200B[ox1f43f8(0xcd)]());
  }
  ["setCellStyle"](var_core_value_sig3863, var_core_value_sigC97C) {
    return this[ox29d496(0x144)](var_core_value_sig9572 => {
      const var_core_value_sigD873 = ox29d496;
      let var_core_value_sigA12B = !0x1;
      return (0x0, t[var_core_value_sigD873(0x117)])(var_core_value_sig9572, var_core_value_sig3863, var_core_value_sigBC46 => {
        const var_core_value_sig3D7D = var_core_value_sigD873;
        var_core_value_sigBC46["style"] = (0x0, t[var_core_value_sig3D7D(0x115)])(var_core_value_sigBC46["style"], var_core_value_sigC97C), var_core_value_sigA12B = !0x0;
      }), var_core_value_sigA12B;
    });
  }
  ["setCellFill"](var_core_value_sigC4B1, var_core_value_sig1BD9) {
    return this["setCellStyle"](var_core_value_sigC4B1, {
      fill: var_core_value_sig1BD9
    });
  }
  ["setCellBackground"](var_core_value_sigE43E, var_core_value_sigA937) {
    return this[ox40e7a2(0xbd)](var_core_value_sigE43E, {
      color: var_core_value_sigA937,
      alpha: 0x1
    });
  }
  ["clearCellBackground"](var_core_value_sigCAD5) {
    return this[ox23ab3e(0xbd)](var_core_value_sigCAD5, void 0x0);
  }
  ["setTableBackground"](var_core_value_sigE503) {
    return this[oxdda59f(0x16f)](this[oxdda59f(0x136)](), var_core_value_sigE503);
  }
  ["setBorder"](var_core_value_sig48DD, var_core_value_sig5E6A, var_core_value_sigB7FC = t["SlideTableBorderPresetEnum"]["All"]) {
    return this[ox5e4d80(0x144)](var_core_value_sigF230 => {
      let {
        changed: var_core_value_sig09B8
      } = (0x0, t["buildBorderPresetPatch"])(var_core_value_sigF230, var_core_value_sig48DD, var_core_value_sigB7FC, var_core_value_sig5E6A);
      return var_core_value_sig09B8;
    });
  }
  ["setTableBorder"](var_core_value_sig9CD9, var_core_value_sigFD0C = t["SlideTableBorderPresetEnum"]["All"]) {
    return this[ox1ef0a3(0xa9)](this["getTableRange"](), var_core_value_sig9CD9, var_core_value_sigFD0C);
  }
  ["setCellHorizontalAlign"](var_core_value_sig849B, var_core_value_sig5F1A) {
    return this[ox3e026c(0x144)](var_core_value_sig6F91 => {
      let var_core_value_sigF9C7 = !0x1;
      return (0x0, t["iterateSelectedSlideTableCells"])(var_core_value_sig6F91, var_core_value_sig849B, (var_core_value_sig27E5, var_core_value_sig8061, var_core_value_sig4D4C) => {
        var_core_value_sig27E5[ox3809af(0x149)] = m(var_core_value_sig27E5["textData"], var_core_value_sig5F1A, "SLIDE_TABLE_CELL_" + this[ox3809af(0x131)]() + "_" + var_core_value_sig8061 + "_" + var_core_value_sig4D4C), var_core_value_sigF9C7 = !0x0;
      }), var_core_value_sigF9C7;
    });
  }
  ["setCellVerticalAlign"](var_core_value_sigB455, var_core_value_sig5241) {
    return this["setCellStyle"](var_core_value_sigB455, {
      verticalAlign: var_core_value_sig5241
    });
  }
  ["setCellTextDirection"](var_core_value_sigC6E5, var_core_value_sigCEFB) {
    return this["setCellStyle"](var_core_value_sigC6E5, {
      textDirection: var_core_value_sigCEFB
    });
  }
  ["setCellTextStyle"](var_core_value_sig1537, var_core_value_sigE4C6) {
    return this[ox43b044(0x144)](var_core_value_sig8895 => {
      const var_core_value_sigC80B = ox43b044;
      let var_core_value_sig284F = !0x1;
      return (0x0, t[var_core_value_sigC80B(0x117)])(var_core_value_sig8895, var_core_value_sig1537, (var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA) => {
        const var_core_value_sigF602 = var_core_value_sigC80B;
        var_core_value_sigC9E0["textData"] = h(var_core_value_sigC9E0[var_core_value_sigF602(0x149)], var_core_value_sigE4C6, "SLIDE_TABLE_CELL_" + this[var_core_value_sigF602(0x131)]() + "_" + var_core_value_sig76BA + "_" + var_core_value_sigFBFA), var_core_value_sig284F = !0x0;
      }), var_core_value_sig284F;
    });
  }
  ["setCellTextColor"](var_core_value_sig4313, var_core_value_sigFC87) {
    return this[ox25b41a(0x166)](var_core_value_sig4313, {
      cl: {
        rgb: var_core_value_sigFC87
      }
    });
  }
  ["setCellTextFill"](var_core_value_sig156F, var_core_value_sigDD51) {
    return this[ox5e997b(0x144)](var_core_value_sigE154 => {
      let var_core_value_sig4632 = !0x1;
      return (0x0, t["iterateSelectedSlideTableCells"])(var_core_value_sigE154, var_core_value_sig156F, (var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF) => {
        var_core_value_sig1BBD[ox916144(0x149)] = g(var_core_value_sig1BBD[ox916144(0x149)], var_core_value_sigDD51, ox916144(0xc3) + this[ox916144(0x131)]() + "_" + var_core_value_sigF704 + "_" + var_core_value_sig2BCF), var_core_value_sig4632 = !0x0;
      }), var_core_value_sig4632;
    });
  }
  ["setRowHeight"](var_core_value_sigF057, var_core_value_sig72F6) {
    return this[ox133539(0x144)](var_core_value_sig12F2 => {
      let var_core_value_sig2259 = var_core_value_sig12F2[var_core_value_sigF057];
      return var_core_value_sig2259 ? (var_core_value_sig2259["height"] = var_core_value_sig72F6, !0x0) : !0x1;
    });
  }
  ["setColumnWidth"](var_core_value_sig9FBA, var_core_value_sigFE01) {
    let var_core_value_sigA2CE = r[ox5495be(0x165)][ox5495be(0x11e)](this["getTableData"]()[ox5495be(0x155)]);
    return var_core_value_sigA2CE[var_core_value_sig9FBA] ? (var_core_value_sigA2CE[var_core_value_sig9FBA][ox5495be(0x12a)] = var_core_value_sigFE01, this[ox5495be(0xaf)]({
      columns: var_core_value_sigA2CE
    })) : !0x1;
  }
  ["resize"](var_core_value_sig1975, var_core_value_sig6EA1) {
    let var_core_value_sig029F = (0x0, t["resizeSlideTableGrid"])(this["getTableData"](), var_core_value_sig1975, var_core_value_sig6EA1);
    return this[ox2f700c(0xaf)]({
      rows: var_core_value_sig029F["rows"],
      columns: var_core_value_sig029F[ox2f700c(0x155)]
    });
  }
  ["distributeRows"](var_core_value_sig3767 = 0x0, var_core_value_sig670B = this["getRowCount"]()) {
    let var_core_value_sig6912 = r[ox4c75c7(0x165)][ox4c75c7(0x11e)](this["getTableData"]()["rows"]),
      var_core_value_sigE235 = Math[ox4c75c7(0x121)](var_core_value_sig6912[ox4c75c7(0xb9)] - 0x1, var_core_value_sig3767 + var_core_value_sig670B - 0x1),
      var_core_value_sig7664 = var_core_value_sig6912[ox4c75c7(0x10f)](var_core_value_sig3767, var_core_value_sigE235 + 0x1);
    if (!var_core_value_sig7664[ox4c75c7(0xb9)]) return !0x1;
    let var_core_value_sig2281 = var_core_value_sig7664["reduce"]((var_core_value_sig9E2F, var_core_value_sigD082) => var_core_value_sig9E2F + (var_core_value_sigD082[ox4c75c7(0xe0)] ?? 0x18), 0x0) / var_core_value_sig7664["length"];
    for (let var_core_value_sigDBB7 = var_core_value_sig3767; var_core_value_sigDBB7 <= var_core_value_sigE235; var_core_value_sigDBB7 += 0x1) var_core_value_sig6912[var_core_value_sigDBB7][ox4c75c7(0xe0)] = var_core_value_sig2281;
    return this["_updateTable"]({
      rows: var_core_value_sig6912
    });
  }
  ["distributeColumns"](var_core_value_sig5E86 = 0x0, var_core_value_sig6998 = this["getColumnCount"]()) {
    let var_core_value_sigF639 = r["Tools"]["deepClone"](this[ox17dfdf(0xca)]()[ox17dfdf(0x155)]),
      var_core_value_sigEAE5 = Math[ox17dfdf(0x121)](var_core_value_sigF639[ox17dfdf(0xb9)] - 0x1, var_core_value_sig5E86 + var_core_value_sig6998 - 0x1),
      var_core_value_sigE94C = var_core_value_sigF639[ox17dfdf(0x10f)](var_core_value_sig5E86, var_core_value_sigEAE5 + 0x1);
    if (!var_core_value_sigE94C[ox17dfdf(0xb9)]) return !0x1;
    let var_core_value_sig6D47 = var_core_value_sigE94C[ox17dfdf(0x17f)]((var_core_value_sigD0A8, var_core_value_sigF4B9) => var_core_value_sigD0A8 + var_core_value_sigF4B9[ox17dfdf(0x12a)], 0x0) / var_core_value_sigE94C["length"];
    for (let var_core_value_sig5CEE = var_core_value_sig5E86; var_core_value_sig5CEE <= var_core_value_sigEAE5; var_core_value_sig5CEE += 0x1) var_core_value_sigF639[var_core_value_sig5CEE][ox17dfdf(0x12a)] = var_core_value_sig6D47;
    return this[ox17dfdf(0xaf)]({
      columns: var_core_value_sigF639
    });
  }
  ["setOptions"](var_core_value_sigCB82) {
    return this[ox56d649(0xaf)]({
      options: var_core_value_sigCB82
    });
  }
  ["setTableStyle"](var_core_value_sigCF4E) {
    let var_core_value_sig6CAD = !Object[oxb5e2f5(0xba)]["hasOwnProperty"]["call"](var_core_value_sigCF4E, oxb5e2f5(0x145)) || this["setCellFill"](this[oxb5e2f5(0x136)](), var_core_value_sigCF4E[oxb5e2f5(0x145)]),
      var_core_value_sig8CF5 = !var_core_value_sigCF4E[oxb5e2f5(0x114)] || this[oxb5e2f5(0x13f)](var_core_value_sigCF4E[oxb5e2f5(0x114)]),
      var_core_value_sigDDD7 = !var_core_value_sigCF4E[oxb5e2f5(0x143)] || this[oxb5e2f5(0xb2)](var_core_value_sigCF4E[oxb5e2f5(0x143)]);
    return var_core_value_sig6CAD && var_core_value_sig8CF5 && var_core_value_sigDDD7;
  }
  ["setTableName"](var_core_value_sigB2CE) {
    return this[ox23f9c1(0xaf)]({
      name: var_core_value_sigB2CE
    });
  }
  ["setTableDescription"](var_core_value_sig443C) {
    return this[ox1e6991(0xaf)]({
      description: var_core_value_sig443C
    });
  }
  ["setStyleId"](var_core_value_sig39B1) {
    return this["_updateTable"]({
      styleId: var_core_value_sig39B1
    });
  }
  ["setCustom"](var_core_value_sig210D) {
    return this[ox15863c(0xaf)]({
      custom: var_core_value_sig210D
    });
  }
  ["_updateTable"](var_core_value_sigB4B4) {
    return this[ox235755(0xd6)][ox235755(0xc5)](r[ox235755(0x11f)])[ox235755(0x151)](t[ox235755(0xd1)]["id"], {
      unitId: this[ox235755(0xb4)],
      tableId: this[ox235755(0x131)](),
      patch: var_core_value_sigB4B4
    });
  }
  ["_updateRows"](var_core_value_sigD407) {
    let var_core_value_sig63F3 = r[ox15d2a7(0x165)][ox15d2a7(0x11e)](this[ox15d2a7(0xca)]()[ox15d2a7(0x11a)]);
    return var_core_value_sigD407(var_core_value_sig63F3) ? this[ox15d2a7(0xaf)]({
      rows: var_core_value_sig63F3
    }) : !0x1;
  }
};
p = f([d(0x5, r["ICommandService"]), d(0x6, r["IPermissionService"])], p);
function m(var_core_value_sig4C07, var_core_value_sig79AB, var_core_value_sig8E74) {
  var var_core_value_sig104C, var_core_value_sig841D;
  let var_core_value_sig90CB = v(var_core_value_sig4C07, var_core_value_sig8E74),
    var_core_value_sigBDF5 = var_core_value_sig90CB[ox2df690(0x164)],
    var_core_value_sigACC6 = (var_core_value_sig104C = var_core_value_sigBDF5[ox2df690(0xfb)]) != null && var_core_value_sig104C[ox2df690(0xb9)] ? var_core_value_sigBDF5[ox2df690(0xfb)] : [y()];
  return {
    ...var_core_value_sig90CB,
    body: {
      ...var_core_value_sigBDF5,
      paragraphs: var_core_value_sigACC6[ox2df690(0x14b)](var_core_value_sig6A71 => ({
        ...var_core_value_sig6A71,
        paragraphStyle: {
          ...var_core_value_sig6A71[ox2df690(0xd9)],
          horizontalAlign: var_core_value_sig79AB
        }
      }))
    },
    documentStyle: {
      ...var_core_value_sig90CB[ox2df690(0x13b)],
      renderConfig: {
        ...((var_core_value_sig841D = var_core_value_sig90CB[ox2df690(0x13b)]) == null ? void 0x0 : var_core_value_sig841D[ox2df690(0x132)]),
        horizontalAlign: var_core_value_sig79AB
      }
    }
  };
}
;
function h(var_core_value_sig1614, var_core_value_sig85C3, var_core_value_sigB996) {
  var var_core_value_sig4BBA;
  let var_core_value_sig6201 = v(var_core_value_sig1614, var_core_value_sigB996),
    var_core_value_sig5151 = var_core_value_sig6201["body"],
    var_core_value_sigB542 = var_core_value_sig5151[ox4fc1a2(0x17c)] ?? "\x0d\x0a",
    var_core_value_sigBB6C = Math[ox4fc1a2(0xe3)](0x0, var_core_value_sigB542[ox4fc1a2(0xb9)] - 0x2),
    var_core_value_sigE2BF = (var_core_value_sig5151[ox4fc1a2(0x105)] ?? [])[ox4fc1a2(0x14b)](var_core_value_sig3BF6 => ({
      ...var_core_value_sig3BF6,
      ts: {
        ...var_core_value_sig3BF6["ts"],
        ...var_core_value_sig85C3
      }
    }));
  return var_core_value_sigBB6C > 0x0 && var_core_value_sigE2BF[ox4fc1a2(0xb9)] === 0x0 && var_core_value_sigE2BF[ox4fc1a2(0x152)]({
    st: 0x0,
    ed: var_core_value_sigBB6C,
    ts: var_core_value_sig85C3
  }), {
    ...var_core_value_sig6201,
    body: {
      ...var_core_value_sig5151,
      dataStream: var_core_value_sigB542,
      textRuns: var_core_value_sigE2BF
    },
    documentStyle: {
      ...var_core_value_sig6201[ox4fc1a2(0x13b)],
      textStyle: {
        ...((var_core_value_sig4BBA = var_core_value_sig6201[ox4fc1a2(0x13b)]) == null ? void 0x0 : var_core_value_sig4BBA[ox4fc1a2(0xd5)]),
        ...var_core_value_sig85C3
      }
    }
  };
}
;
function g(var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sig1998) {
  let var_core_value_sigFF19 = _(var_core_value_sigA56E);
  return h(var_core_value_sigB8C7, {
    ...(var_core_value_sigA56E ? {
      textFill: var_core_value_sigA56E
    } : {
      textFill: void 0x0
    }),
    ...(var_core_value_sigFF19 ? {
      cl: {
        rgb: var_core_value_sigFF19
      }
    } : {
      cl: void 0x0
    })
  }, var_core_value_sig1998);
}
;
function _(var_core_value_sig43B8) {
  if (!var_core_value_sig43B8 || var_core_value_sig43B8["type"] === ox59e6f3(0x12b)) return (var_core_value_sig43B8 == null ? void 0x0 : var_core_value_sig43B8[ox59e6f3(0x150)]) === ox59e6f3(0x12b) ? ox59e6f3(0xc6) : void 0x0;
  if (var_core_value_sig43B8[ox59e6f3(0x150)] === ox59e6f3(0xec)) {
    var var_core_value_sigD98F;
    return ((var_core_value_sigD98F = var_core_value_sig43B8["gradient"]) == null || (var_core_value_sigD98F = var_core_value_sigD98F["stops"]) == null || (var_core_value_sigD98F = var_core_value_sigD98F[0x0]) == null ? void 0x0 : var_core_value_sigD98F[ox59e6f3(0x142)]) ?? var_core_value_sig43B8[ox59e6f3(0x142)];
  }
  return var_core_value_sig43B8[ox59e6f3(0x142)];
}
;
function v(var_core_value_sig66C0, var_core_value_sig9D15) {
  var var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3;
  let var_core_value_sig52F7 = r[ox15f562(0x165)]["deepClone"](var_core_value_sig66C0 ?? {
    id: var_core_value_sig9D15,
    body: {
      dataStream: "\x0d\x0a",
      paragraphs: [y()],
      textRuns: []
    },
    documentStyle: {}
  });
  return {
    ...var_core_value_sig52F7,
    id: var_core_value_sig52F7["id"] ?? var_core_value_sig9D15,
    body: {
      dataStream: ((var_core_value_sigB785 = var_core_value_sig52F7[ox15f562(0x164)]) == null ? void 0x0 : var_core_value_sigB785[ox15f562(0x17c)]) ?? "\x0d\x0a",
      paragraphs: (var_core_value_sig130F = var_core_value_sig52F7["body"]) != null && (var_core_value_sig130F = var_core_value_sig130F[ox15f562(0xfb)]) != null && var_core_value_sig130F[ox15f562(0xb9)] ? var_core_value_sig52F7[ox15f562(0x164)][ox15f562(0xfb)] : [y()],
      textRuns: ((var_core_value_sigC0E3 = var_core_value_sig52F7[ox15f562(0x164)]) == null ? void 0x0 : var_core_value_sigC0E3[ox15f562(0x105)]) ?? [],
      ...var_core_value_sig52F7["body"]
    },
    documentStyle: var_core_value_sig52F7["documentStyle"] ?? {}
  };
}
;
function y() {
  return {
    startIndex: 0x0,
    paragraphId: (0x0, r[ox1ebaea(0x134)])(new Set())
  };
}
var b = class extends n["FSlide"] {
  ["newTable"](var_core_value_sig38CE) {
    let var_core_value_sig62B7 = this["_slideModel"][ox2f04a4(0xfa)](),
      var_core_value_sig37A8 = this[ox2f04a4(0x122)]();
    return var_core_value_sig38CE ? typeof var_core_value_sig38CE == "string" ? this[ox2f04a4(0xd6)]["createInstance"](l, var_core_value_sig62B7, var_core_value_sig37A8, this[ox2f04a4(0xd6)], {
      element: {
        id: var_core_value_sig38CE
      }
    }) : var_core_value_sig38CE[ox2f04a4(0xf5)]() : this["_injector"][ox2f04a4(0x100)](l, var_core_value_sig62B7, var_core_value_sig37A8, this[ox2f04a4(0xd6)]);
  }
  ["insertTable"](var_core_value_sigA90D, var_core_value_sig7A3C) {
    let var_core_value_sig0511 = this[ox9680ef(0xd6)][ox9680ef(0xc5)](r[ox9680ef(0x11f)]),
      var_core_value_sig1F44 = this[ox9680ef(0x106)]["getUnitId"](),
      var_core_value_sigCB04 = this[ox9680ef(0x122)](),
      {
        createOptions: var_core_value_sig947E,
        table: var_core_value_sig4545,
        element: var_core_value_sigF39A
      } = var_core_value_sigA90D,
      var_core_value_sigF79C = var_core_value_sig4545["id"] ?? (0x0, r["generateRandomId"])(0x6);
    return var_core_value_sig0511[ox9680ef(0x151)](t["InsertSlideTableCommand"]["id"], {
      unitId: var_core_value_sig1F44,
      subUnitId: var_core_value_sigCB04,
      createOptions: var_core_value_sig947E,
      table: {
        ...var_core_value_sig4545,
        id: var_core_value_sigF79C
      },
      element: var_core_value_sigF39A,
      insertIndex: var_core_value_sig7A3C
    }) ? this[ox9680ef(0x160)](var_core_value_sigF79C) : null;
  }
  ["insertTableFromData"](var_core_value_sig2E54, var_core_value_sig7658) {
    if (var_core_value_sig2E54[ox9f2d26(0xb9)] === 0x0 || var_core_value_sig2E54[ox9f2d26(0xf1)](var_core_value_sigE92A => var_core_value_sigE92A["length"] === 0x0)) throw Error(ox9f2d26(0x16e));
    let var_core_value_sigDCF5 = this["_injector"]["get"](r[ox9f2d26(0x11f)]),
      var_core_value_sigC786 = this[ox9f2d26(0x106)][ox9f2d26(0xfa)](),
      var_core_value_sigC0D9 = this["getId"](),
      var_core_value_sigF0511 = (var_core_value_sig7658 == null ? void 0x0 : var_core_value_sig7658["id"]) ?? (0x0, r[ox9f2d26(0x12e)])(0x6),
      var_core_value_sig5825 = (0x0, t["resolveSlideTableBuildOptions"])({
        ...var_core_value_sig7658,
        values: var_core_value_sig2E54
      }),
      var_core_value_sig4EB7 = {
        ...var_core_value_sig7658,
        id: var_core_value_sigF0511,
        ...var_core_value_sig5825
      },
      {
        rows: var_core_value_sig73AF,
        columns: var_core_value_sig548A
      } = (0x0, t[ox9f2d26(0x10b)])({
        tableId: var_core_value_sigF0511,
        values: var_core_value_sig2E54,
        ...var_core_value_sig4EB7
      });
    return var_core_value_sigDCF5[ox9f2d26(0x151)](t[ox9f2d26(0x120)]["id"], {
      unitId: var_core_value_sigC786,
      subUnitId: var_core_value_sigC0D9,
      createOptions: var_core_value_sig4EB7,
      table: {
        id: var_core_value_sigF0511,
        rows: var_core_value_sig73AF,
        columns: var_core_value_sig548A
      },
      element: {
        transform: {
          width: var_core_value_sig5825["columns"] * var_core_value_sig5825[ox9f2d26(0x16b)],
          height: var_core_value_sig5825["rows"] * var_core_value_sig5825[ox9f2d26(0xce)]
        }
      }
    }) ? this[ox9f2d26(0x160)](var_core_value_sigF0511) : null;
  }
  ["getTables"]() {
    let var_core_value_sigE026 = this[ox51bb61(0x106)][ox51bb61(0xfa)](),
      var_core_value_sig339E = this[ox51bb61(0x122)](),
      {
        elementOrder: var_core_value_sig7550,
        elements: var_core_value_sig2983
      } = this["getData"]();
    return var_core_value_sig7550[ox51bb61(0x14b)](var_core_value_sig362B => var_core_value_sig2983[var_core_value_sig362B])["filter"](var_core_value_sig5CA5 => (var_core_value_sig5CA5 == null ? void 0x0 : var_core_value_sig5CA5[ox51bb61(0x150)]) === e[ox51bb61(0x176)]["Table"])[ox51bb61(0x14b)](var_core_value_sigE90F => this[ox51bb61(0xd6)][ox51bb61(0x100)](p, var_core_value_sigE026, var_core_value_sig339E, var_core_value_sigE90F["id"], this[ox51bb61(0x106)], this[ox51bb61(0xd6)]));
  }
  ["getTableById"](var_core_value_sigE1B0) {
    return this[ox43ee02(0xcc)]()[ox43ee02(0xf8)](var_core_value_sigEFD4 => var_core_value_sigEFD4[ox43ee02(0x122)]() === var_core_value_sigE1B0 || var_core_value_sigEFD4["getTableId"]() === var_core_value_sigE1B0) ?? null;
  }
  ["getTableAt"](var_core_value_sigD4FF) {
    let var_core_value_sig1E5B = this[ox505cd1(0xcc)]();
    return var_core_value_sigD4FF >= 0x0 && var_core_value_sigD4FF < var_core_value_sig1E5B[ox505cd1(0xb9)] ? var_core_value_sig1E5B[var_core_value_sigD4FF] : null;
  }
  ["updateTable"](var_core_value_sigB680) {
    let var_core_value_sig1F64 = this[ox234560(0xd6)]["get"](r[ox234560(0x11f)]),
      var_core_value_sigDD1C = this[ox234560(0x106)][ox234560(0xfa)](),
      {
        table: var_core_value_sig2C39,
        element: var_core_value_sigB7D1
      } = var_core_value_sigB680;
    if (!var_core_value_sig2C39["id"]) throw Error("Table\x20id\x20is\x20required\x20for\x20updating\x20a\x20table.");
    if (!this[ox234560(0x178)](var_core_value_sigB7D1["id"])) throw Error(ox234560(0xfc) + var_core_value_sigB7D1["id"] + ox234560(0xff));
    if (!var_core_value_sig1F64[ox234560(0x151)](t[ox234560(0xd1)]["id"], {
      unitId: var_core_value_sigDD1C,
      tableId: var_core_value_sig2C39["id"],
      patch: {
        ...var_core_value_sig2C39
      }
    })) throw Error(ox234560(0xfe));
    return this[ox234560(0x160)](var_core_value_sig2C39["id"]);
  }
  ["removeTable"](var_core_value_sig64F0) {
    return var_core_value_sig64F0["remove"]() ?? !0x1;
  }
};
n["FSlide"]["extend"](b);
var x = class extends i["FEnum"] {
  get ["SlideTableFillTypeEnum"]() {
    return t[ox29b859(0x123)];
  }
  get ["SlideTableGradientFillTypeEnum"]() {
    return t[ox54b754(0x148)];
  }
  get ["SlideTablePictureFillModeEnum"]() {
    return t[ox337aa4(0x141)];
  }
  get ["SlideTableBorderDashEnum"]() {
    return t["SlideTableBorderDashEnum"];
  }
  get ["SlideTableBorderPresetEnum"]() {
    return t["SlideTableBorderPresetEnum"];
  }
  get ["SlideTableVerticalAlignEnum"]() {
    return t[ox414818(0x153)];
  }
  get ["SlideTableTextDirectionEnum"]() {
    return t[ox283993(0xdb)];
  }
};
i["FEnum"]["extend"](x), Object["defineProperty"](exports, "FSlideTable", {
  enumerable: !0x0,
  get: function () {
    return p;
  }
}), exports["FSlideTableBuilder"] = l, exports["FSlideTableCell"] = u;
