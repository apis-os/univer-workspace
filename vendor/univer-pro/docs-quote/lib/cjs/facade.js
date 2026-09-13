Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/docs-quote"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(var_core_value_sig5CEE) {
  "@babel/helpers - typeof";

  return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8061) {
    return typeof var_core_value_sig8061;
  } : function (var_core_value_sig4D4C) {
    return var_core_value_sig4D4C && typeof Symbol == "function" && var_core_value_sig4D4C.constructor === Symbol && var_core_value_sig4D4C !== Symbol.prototype ? "symbol" : typeof var_core_value_sig4D4C;
  }, r(var_core_value_sig5CEE);
}
function i(var_core_value_sigE92A, var_core_value_sig362B) {
  if (r(var_core_value_sigE92A) != "object" || !var_core_value_sigE92A) return var_core_value_sigE92A;
  var var_core_value_sig5CA5 = var_core_value_sigE92A[Symbol.toPrimitive];
  if (var_core_value_sig5CA5 !== undefined) {
    var var_core_value_sigE90F = var_core_value_sig5CA5.call(var_core_value_sigE92A, var_core_value_sig362B || "default");
    if (r(var_core_value_sigE90F) != "object") return var_core_value_sigE90F;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig362B === "string" ? String : Number)(var_core_value_sigE92A);
}
function a(var_core_value_sigEFD4) {
  var var_core_value_sig861B = ox5943b6,
    var_core_value_sig5237 = i(var_core_value_sigEFD4, var_core_value_sig861B(271));
  return r(var_core_value_sig5237) == var_core_value_sig861B(318) ? var_core_value_sig5237 : var_core_value_sig5237 + "";
}
function o(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D) {
  return (var_core_value_sig7E54 = a(var_core_value_sig7E54)) in var_core_value_sigBB00 ? Object.defineProperty(var_core_value_sigBB00, var_core_value_sig7E54, {
    value: var_core_value_sig9A8D,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigBB00[var_core_value_sig7E54] = var_core_value_sig9A8D, var_core_value_sigBB00;
}
function s(var_core_value_sigC259, var_core_value_sig9C9F) {
  return function (var_core_value_sigC9E0, var_core_value_sig76BA) {
    var_core_value_sig9C9F(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigC259);
  };
}
function c(var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA) {
  var var_core_value_sig50AF = ox5943b6,
    var_core_value_sigA942 = arguments.length,
    var_core_value_sigA621 = var_core_value_sigA942 < 3 ? var_core_value_sig86D0 : var_core_value_sig48CA === null ? var_core_value_sig48CA = Object[var_core_value_sig50AF(298)](var_core_value_sig86D0, var_core_value_sig4CD2) : var_core_value_sig48CA,
    var_core_value_sigBBFF;
  if (typeof Reflect == "object" && typeof Reflect[var_core_value_sig50AF(276)] == "function") var_core_value_sigA621 = Reflect.decorate(var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA);else {
    for (var var_core_value_sig8889 = var_core_value_sigFDEA[var_core_value_sig50AF(322)] - 1; var_core_value_sig8889 >= 0; var_core_value_sig8889--) (var_core_value_sigBBFF = var_core_value_sigFDEA[var_core_value_sig8889]) && (var_core_value_sigA621 = (var_core_value_sigA942 < 3 ? var_core_value_sigBBFF(var_core_value_sigA621) : var_core_value_sigA942 > 3 ? var_core_value_sigBBFF(var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sigA621) : var_core_value_sigBBFF(var_core_value_sig86D0, var_core_value_sig4CD2)) || var_core_value_sigA621);
  }
  return var_core_value_sigA942 > 3 && var_core_value_sigA621 && Object[var_core_value_sig50AF(294)](var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sigA621), var_core_value_sigA621;
}
let l = class {
  constructor(var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD, var_core_value_sigF704) {
    this._document = var_core_value_sigFBFA, this._blockId = var_core_value_sigF602, this._commandService = var_core_value_sig1BBD, this._themeService = var_core_value_sigF704, o(this, "_unitId", undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let var_core_value_sig2BCF = this._getBlockRange();
    return var_core_value_sig2BCF ? {
      blockId: var_core_value_sig2BCF.blockId,
      endIndex: var_core_value_sig2BCF.endIndex,
      startIndex: var_core_value_sig2BCF.startIndex
    } : null;
  }
  getText() {
    return this._getText(this._getBlockRange());
  }
  getStyle() {
    return this._getStyle(this._getBlockRange());
  }
  describe() {
    let var_core_value_sig0D69 = this._getBlockRange();
    return var_core_value_sig0D69 ? {
      blockId: var_core_value_sig0D69.blockId,
      endIndex: var_core_value_sig0D69.endIndex,
      startIndex: var_core_value_sig0D69.startIndex,
      style: this._getStyle(var_core_value_sig0D69),
      text: this._getText(var_core_value_sig0D69),
      type: t.DocumentBlockRangeType["QUOTE"]
    } : null;
  }
  setStyle(var_core_value_sig480E) {
    return this._updateStyle(var_core_value_sig480E);
  }
  setLineColor(var_core_value_sig26DB) {
    return this._updateStyle({
      lineColor: var_core_value_sig26DB
    });
  }
  setTextColor(var_core_value_sigF0F9) {
    return this._updateStyle({
      textColor: var_core_value_sigF0F9
    });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](e.DocsQuoteUnwrapCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](e.DocsQuoteRemoveCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_core_value_sig1A0F = ox5943b6,
      var_core_value_sigFBA4;
    return (((var_core_value_sigFBA4 = this[var_core_value_sig1A0F(281)]()[var_core_value_sig1A0F(260)]) == null ? undefined : var_core_value_sigFBA4[var_core_value_sig1A0F(330)]) ?? []).find(var_core_value_sig7524 => var_core_value_sig7524[var_core_value_sig1A0F(314)] === this._blockId && var_core_value_sig7524.blockType === t[var_core_value_sig1A0F(295)][var_core_value_sig1A0F(321)]) ?? null;
  }
  _updateStyle(var_core_value_sig4383) {
    return this._commandService["syncExecuteCommand"](e.DocsQuoteUpdateStyleCommand["id"], {
      ...var_core_value_sig4383,
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(var_core_value_sig186C) {
    var var_core_value_sigD955 = ox5943b6,
      var_core_value_sig48BD,
      var_core_value_sig429F;
    if (!var_core_value_sig186C) return {
      lineColor: this[var_core_value_sigD955(268)][var_core_value_sigD955(300)](e[var_core_value_sigD955(282)]),
      textColor: t[var_core_value_sigD955(284)].cl[var_core_value_sigD955(253)]
    };
    let var_core_value_sigF62A = this[var_core_value_sigD955(281)](),
      var_core_value_sig8178 = (var_core_value_sig48BD = var_core_value_sigF62A[var_core_value_sigD955(260)]) == null || (var_core_value_sig48BD = var_core_value_sig48BD[var_core_value_sigD955(288)]) == null ? undefined : var_core_value_sig48BD.find(var_core_value_sig2AD8 => var_core_value_sig2AD8[var_core_value_sigD955(349)] > var_core_value_sig186C.startIndex && var_core_value_sig2AD8[var_core_value_sigD955(349)] < var_core_value_sig186C[var_core_value_sigD955(315)]);
    return {
      lineColor: (var_core_value_sig8178 == null || (var_core_value_sig429F = var_core_value_sig8178.paragraphStyle) == null || (var_core_value_sig429F = var_core_value_sig429F[var_core_value_sigD955(296)]) == null ? undefined : var_core_value_sig429F[var_core_value_sigD955(331)].rgb) ?? this._themeService[var_core_value_sigD955(300)](e.DOCS_QUOTE_LINE_COLOR_TOKEN),
      textColor: u(var_core_value_sigF62A, var_core_value_sig186C)
    };
  }
  _getText(var_core_value_sigE9ED) {
    var var_core_value_sigB577 = ox5943b6,
      var_core_value_sig9572;
    let var_core_value_sigD873 = (var_core_value_sig9572 = this._getDocumentData().body) == null ? undefined : var_core_value_sig9572[var_core_value_sigB577(320)];
    return !var_core_value_sigE9ED || !var_core_value_sigD873 ? "" : d(var_core_value_sigD873[var_core_value_sigB577(336)](var_core_value_sigE9ED.startIndex + 1, var_core_value_sigE9ED[var_core_value_sigB577(315)]));
  }
};
l = c([s(2, t.ICommandService), s(3, (0, t.Inject)(t.ThemeService))], l);
function u(var_core_value_sig32F8, var_core_value_sig5B67) {
  var var_core_value_sig1758 = ox5943b6,
    var_core_value_sig4805;
  return ((var_core_value_sig4805 = var_core_value_sig32F8[var_core_value_sig1758(260)]) == null || (var_core_value_sig4805 = var_core_value_sig4805[var_core_value_sig1758(261)]) == null || (var_core_value_sig4805 = var_core_value_sig4805[var_core_value_sig1758(272)](var_core_value_sigA12B => var_core_value_sigA12B.ed > var_core_value_sig5B67.startIndex + 1 && var_core_value_sigA12B.st < var_core_value_sig5B67.endIndex)) == null || (var_core_value_sig4805 = var_core_value_sig4805.ts) == null || (var_core_value_sig4805 = var_core_value_sig4805.cl) == null ? undefined : var_core_value_sig4805[var_core_value_sig1758(253)]) ?? t[var_core_value_sig1758(284)].cl["rgb"];
}
function d(var_core_value_sigE67E) {
  return Array.from(var_core_value_sigE67E).map(var_core_value_sigF230 => var_core_value_sigF230 === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : var_core_value_sigF230).filter(var_core_value_sig09B8 => var_core_value_sig09B8 !== t.DataStreamTreeTokenType["BLOCK_START"] && var_core_value_sig09B8 !== t.DataStreamTreeTokenType["BLOCK_END"] && var_core_value_sig09B8 !== t.DataStreamTreeTokenType["SECTION_BREAK"]).join("").replace(/\n$/, "");
}
var f = class extends n.FDocument {
  getQuotes() {
    return this._getBlockRanges().filter(var_core_value_sig2AD0 => var_core_value_sig2AD0.blockType === t.DocumentBlockRangeType["QUOTE"]).map(var_core_value_sig3EEE => this._createFDocumentQuote(var_core_value_sig3EEE.blockId));
  }
  getQuote(var_core_value_sig6F91) {
    return this._getBlockRanges().some(var_core_value_sigBC46 => var_core_value_sigBC46.blockId === var_core_value_sig6F91 && var_core_value_sigBC46.blockType === t.DocumentBlockRangeType["QUOTE"]) ? this._createFDocumentQuote(var_core_value_sig6F91) : null;
  }
  getQuoteAt(var_core_value_sigF9C7) {
    let var_core_value_sig8895 = this._getBlockRanges().find(var_core_value_sig3D7D => var_core_value_sig3D7D.blockType === t.DocumentBlockRangeType["QUOTE"] && var_core_value_sig3D7D.startIndex <= var_core_value_sigF9C7 && var_core_value_sigF9C7 <= var_core_value_sig3D7D.endIndex);
    return var_core_value_sig8895 ? this._createFDocumentQuote(var_core_value_sig8895.blockId) : null;
  }
  findQuoteByText(var_core_value_sigC80B) {
    return this.findQuotes(var_core_value_sigC80B)[0] ?? null;
  }
  findQuotes(var_core_value_sig284F) {
    let var_core_value_sigE154 = typeof var_core_value_sig284F == "string" ? {
      text: var_core_value_sig284F
    } : var_core_value_sig284F;
    return this.getQuotes().filter(var_core_value_sig27E5 => !(var_core_value_sigE154.blockId && var_core_value_sig27E5.getId() !== var_core_value_sigE154.blockId || var_core_value_sigE154.text && !var_core_value_sig27E5.getText().includes(var_core_value_sigE154.text)));
  }
  insertQuote(var_core_value_sig4632 = {}, var_core_value_sig12F2 = {}) {
    let var_core_value_sig2259 = this._injector["get"](t.ICommandService),
      var_core_value_sig9E2F = (0, n.isParagraphFacade)(var_core_value_sig4632) ? {
        ...var_core_value_sig12F2,
        ...var_core_value_sig4632.getRange()
      } : var_core_value_sig4632,
      var_core_value_sigD082 = var_core_value_sig9E2F.blockId ?? (0, t.generateRandomId)(6);
    return var_core_value_sig2259.syncExecuteCommand(e.DocsQuoteInsertCommand["id"], {
      ...var_core_value_sig9E2F,
      blockId: var_core_value_sigD082,
      unitId: this.getId()
    }) ? this.getQuote(var_core_value_sigD082) : null;
  }
  _getBlockRanges() {
    var var_core_value_sigDBB7 = ox5943b6,
      var_core_value_sigD0A8;
    return ((var_core_value_sigD0A8 = this[var_core_value_sigDBB7(302)]()[var_core_value_sigDBB7(260)]) == null ? undefined : var_core_value_sigD0A8[var_core_value_sigDBB7(330)]) ?? [];
  }
  _createFDocumentQuote(var_core_value_sigF4B9) {
    return this._injector["createInstance"](l, this, var_core_value_sigF4B9);
  }
};
n.FDocument["extend"](f), Object.defineProperty(exports, "FDocumentQuote", {
  enumerable: true,
  get: function () {
    return l;
  }
});
