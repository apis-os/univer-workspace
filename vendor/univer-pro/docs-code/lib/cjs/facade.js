Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/docs-code"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(var_core_value_sig8895) {
  "@babel/helpers - typeof";

  return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig27E5) {
    return typeof var_core_value_sig27E5;
  } : function (var_core_value_sig8061) {
    return var_core_value_sig8061 && typeof Symbol == "function" && var_core_value_sig8061.constructor === Symbol && var_core_value_sig8061 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8061;
  }, r(var_core_value_sig8895);
}
function i(var_core_value_sigC80B, var_core_value_sig284F) {
  if (r(var_core_value_sigC80B) != "object" || !var_core_value_sigC80B) return var_core_value_sigC80B;
  var var_core_value_sigE154 = var_core_value_sigC80B[Symbol.toPrimitive];
  if (var_core_value_sigE154 !== undefined) {
    var var_core_value_sig4632 = var_core_value_sigE154.call(var_core_value_sigC80B, var_core_value_sig284F || "default");
    if (r(var_core_value_sig4632) != "object") return var_core_value_sig4632;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig284F === "string" ? String : Number)(var_core_value_sigC80B);
}
function a(var_core_value_sig12F2) {
  var var_core_value_sig2259 = ox739a44,
    var_core_value_sig9E2F = i(var_core_value_sig12F2, "string");
  return r(var_core_value_sig9E2F) == var_core_value_sig2259(336) ? var_core_value_sig9E2F : var_core_value_sig9E2F + "";
}
function o(var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sigD0A8) {
  return (var_core_value_sigDBB7 = a(var_core_value_sigDBB7)) in var_core_value_sigD082 ? Object.defineProperty(var_core_value_sigD082, var_core_value_sigDBB7, {
    value: var_core_value_sigD0A8,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigD082[var_core_value_sigDBB7] = var_core_value_sigD0A8, var_core_value_sigD082;
}
function s(var_core_value_sigF4B9, var_core_value_sig5CEE) {
  return function (var_core_value_sig4D4C, var_core_value_sigC9E0) {
    var_core_value_sig5CEE(var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sigF4B9);
  };
}
function c(var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F) {
  var var_core_value_sigEFD4 = ox739a44,
    var_core_value_sig861B = arguments.length,
    var_core_value_sig5237 = var_core_value_sig861B < 3 ? var_core_value_sig362B : var_core_value_sigE90F === null ? var_core_value_sigE90F = Object[var_core_value_sigEFD4(394)](var_core_value_sig362B, var_core_value_sig5CA5) : var_core_value_sigE90F,
    var_core_value_sigBB00;
  if (typeof Reflect == var_core_value_sigEFD4(404) && typeof Reflect[var_core_value_sigEFD4(396)] == var_core_value_sigEFD4(335)) var_core_value_sig5237 = Reflect[var_core_value_sigEFD4(396)](var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F);else {
    for (var var_core_value_sig7E54 = var_core_value_sigE92A.length - 1; var_core_value_sig7E54 >= 0; var_core_value_sig7E54--) (var_core_value_sigBB00 = var_core_value_sigE92A[var_core_value_sig7E54]) && (var_core_value_sig5237 = (var_core_value_sig861B < 3 ? var_core_value_sigBB00(var_core_value_sig5237) : var_core_value_sig861B > 3 ? var_core_value_sigBB00(var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sig5237) : var_core_value_sigBB00(var_core_value_sig362B, var_core_value_sig5CA5)) || var_core_value_sig5237);
  }
  return var_core_value_sig861B > 3 && var_core_value_sig5237 && Object[var_core_value_sigEFD4(386)](var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sig5237), var_core_value_sig5237;
}
let l = class {
  constructor(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602) {
    this._document = var_core_value_sig76BA, this._blockId = var_core_value_sigFBFA, this._injector = var_core_value_sigF602, o(this, "_unitId", undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let var_core_value_sig1BBD = this._getBlockRange();
    return var_core_value_sig1BBD ? {
      blockId: var_core_value_sig1BBD.blockId,
      endIndex: var_core_value_sig1BBD.endIndex,
      startIndex: var_core_value_sig1BBD.startIndex
    } : null;
  }
  getText() {
    var var_core_value_sigF704 = ox739a44,
      var_core_value_sig2BCF;
    let var_core_value_sig0D69 = this[var_core_value_sigF704(367)](),
      var_core_value_sig480E = (var_core_value_sig2BCF = this[var_core_value_sigF704(330)]()[var_core_value_sigF704(392)]) == null ? undefined : var_core_value_sig2BCF.dataStream;
    return !var_core_value_sig0D69 || !var_core_value_sig480E ? "" : u(var_core_value_sig480E[var_core_value_sigF704(395)](var_core_value_sig0D69.startIndex + 1, var_core_value_sig0D69.endIndex));
  }
  describe() {
    let var_core_value_sig26DB = this.getRange();
    return var_core_value_sig26DB ? {
      ...var_core_value_sig26DB,
      config: this.getConfig(),
      text: this.getText(),
      type: t.DocumentBlockRangeType["CODE"]
    } : null;
  }
  getConfig() {
    return (0, e.normalizeDocsCodeConfig)(this._injector["get"](e.DocsCodeModel).getCodeConfig(this._unitId, this._blockId));
  }
  updateConfig(var_core_value_sigF0F9) {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(e.DocsCodeUpdateCommand["id"], {
      blockId: this._blockId,
      config: var_core_value_sigF0F9.config,
      unitId: this._unitId
    });
  }
  unwrap() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(e.DocsCodeUnwrapCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(e.DocsCodeRemoveCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_core_value_sig1A0F = ox739a44,
      var_core_value_sigFBA4;
    return ((var_core_value_sigFBA4 = this[var_core_value_sig1A0F(330)]()[var_core_value_sig1A0F(392)]) == null || (var_core_value_sigFBA4 = var_core_value_sigFBA4[var_core_value_sig1A0F(372)]) == null ? undefined : var_core_value_sigFBA4.find(var_core_value_sig7524 => var_core_value_sig7524[var_core_value_sig1A0F(358)] === this[var_core_value_sig1A0F(354)] && var_core_value_sig7524[var_core_value_sig1A0F(382)] === t[var_core_value_sig1A0F(377)].CODE)) ?? null;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
};
l = c([s(2, (0, t.Inject)(t.Injector))], l);
function u(var_core_value_sig9A8D) {
  return Array.from(var_core_value_sig9A8D).map(var_core_value_sig4383 => var_core_value_sig4383 === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : var_core_value_sig4383).filter(var_core_value_sig186C => var_core_value_sig186C !== t.DataStreamTreeTokenType["BLOCK_START"] && var_core_value_sig186C !== t.DataStreamTreeTokenType["BLOCK_END"] && var_core_value_sig186C !== t.DataStreamTreeTokenType["SECTION_BREAK"]).join("").replace(/\n$/, "");
}
var d = class extends n.FDocument {
  getCodes() {
    return this._getBlockRanges().filter(var_core_value_sig2AD8 => var_core_value_sig2AD8.blockType === t.DocumentBlockRangeType["CODE"]).map(var_core_value_sig2AD0 => this._createFDocumentCode(var_core_value_sig2AD0.blockId));
  }
  getCode(var_core_value_sigD955) {
    return this._getBlockRanges().some(var_core_value_sig3EEE => var_core_value_sig3EEE.blockId === var_core_value_sigD955 && var_core_value_sig3EEE.blockType === t.DocumentBlockRangeType["CODE"]) ? this._createFDocumentCode(var_core_value_sigD955) : null;
  }
  getCodeAt(var_core_value_sig48BD) {
    let var_core_value_sig429F = this._getBlockRanges().find(var_core_value_sigBC46 => var_core_value_sigBC46.blockType === t.DocumentBlockRangeType["CODE"] && var_core_value_sigBC46.startIndex <= var_core_value_sig48BD && var_core_value_sig48BD <= var_core_value_sigBC46.endIndex);
    return var_core_value_sig429F ? this._createFDocumentCode(var_core_value_sig429F.blockId) : null;
  }
  findCodeByText(var_core_value_sigF62A) {
    return this.findCodes(var_core_value_sigF62A)[0] ?? null;
  }
  findCodes(var_core_value_sig8178) {
    let var_core_value_sigE9ED = typeof var_core_value_sig8178 == "string" ? {
      text: var_core_value_sig8178
    } : var_core_value_sig8178;
    return this.getCodes().filter(var_core_value_sig3D7D => !(var_core_value_sigE9ED.blockId && var_core_value_sig3D7D.getId() !== var_core_value_sigE9ED.blockId || var_core_value_sigE9ED.text && !var_core_value_sig3D7D.getText().includes(var_core_value_sigE9ED.text)));
  }
  insertCode(var_core_value_sigB577 = {}, var_core_value_sig9572 = {}) {
    let var_core_value_sigD873 = this._injector["get"](t.ICommandService),
      var_core_value_sigA12B = (0, n.isParagraphFacade)(var_core_value_sigB577) ? {
        ...var_core_value_sig9572,
        ...var_core_value_sigB577.getRange()
      } : var_core_value_sigB577,
      var_core_value_sigF230 = var_core_value_sigA12B.blockId ?? (0, t.generateRandomId)(6);
    return var_core_value_sigD873.syncExecuteCommand(e.DocsCodeInsertCommand["id"], {
      ...var_core_value_sigA12B,
      blockId: var_core_value_sigF230,
      unitId: this.getId()
    }) ? this.getCode(var_core_value_sigF230) : null;
  }
  _getBlockRanges() {
    var var_core_value_sig09B8 = ox739a44,
      var_core_value_sig6F91;
    return ((var_core_value_sig6F91 = this[var_core_value_sig09B8(360)]()[var_core_value_sig09B8(392)]) == null ? undefined : var_core_value_sig6F91[var_core_value_sig09B8(372)]) ?? [];
  }
  _createFDocumentCode(var_core_value_sigF9C7) {
    return this._injector["createInstance"](l, this, var_core_value_sigF9C7);
  }
};
n.FDocument["extend"](d), Object.defineProperty(exports, "FDocumentCode", {
  enumerable: true,
  get: function () {
    return l;
  }
});
