import { DocsCodeInsertCommand as var_core_value_sigC259, DocsCodeModel as var_core_value_sig9C9F, DocsCodeRemoveCommand as var_core_value_sigFDEA, DocsCodeUnwrapCommand as var_core_value_sig86D0, DocsCodeUpdateCommand as var_core_value_sig4CD2, normalizeDocsCodeConfig as var_core_value_sig48CA } from "@univerjs-pro/docs-code";
import { DataStreamTreeTokenType as var_core_value_sig50AF, DocumentBlockRangeType as var_core_value_sigA942, ICommandService as var_core_value_sigA621, Inject as var_core_value_sigBBFF, Injector as var_core_value_sig8889, generateRandomId as var_core_value_sig32F8 } from "@univerjs/core";
import { FDocument as var_core_value_sig5B67, isParagraphFacade as var_core_value_sig1758 } from "@univerjs/docs/facade";
function m(var_core_value_sig8895) {
  "@babel/helpers - typeof";

  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig27E5) {
    return typeof var_core_value_sig27E5;
  } : function (var_core_value_sig8061) {
    return var_core_value_sig8061 && typeof Symbol == "function" && var_core_value_sig8061.constructor === Symbol && var_core_value_sig8061 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8061;
  }, m(var_core_value_sig8895);
}
function h(var_core_value_sigC80B, var_core_value_sig284F) {
  if (m(var_core_value_sigC80B) != "object" || !var_core_value_sigC80B) return var_core_value_sigC80B;
  var var_core_value_sigE154 = var_core_value_sigC80B[Symbol.toPrimitive];
  if (var_core_value_sigE154 !== undefined) {
    var var_core_value_sig4632 = var_core_value_sigE154.call(var_core_value_sigC80B, var_core_value_sig284F || "default");
    if (m(var_core_value_sig4632) != "object") return var_core_value_sig4632;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig284F === "string" ? String : Number)(var_core_value_sigC80B);
}
function g(var_core_value_sig12F2) {
  var var_core_value_sig2259 = ox3804,
    var_core_value_sig9E2F = h(var_core_value_sig12F2, var_core_value_sig2259(365));
  return m(var_core_value_sig9E2F) == var_core_value_sig2259(414) ? var_core_value_sig9E2F : var_core_value_sig9E2F + "";
}
function _(var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sigD0A8) {
  return (var_core_value_sigDBB7 = g(var_core_value_sigDBB7)) in var_core_value_sigD082 ? Object.defineProperty(var_core_value_sigD082, var_core_value_sigDBB7, {
    value: var_core_value_sigD0A8,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigD082[var_core_value_sigDBB7] = var_core_value_sigD0A8, var_core_value_sigD082;
}
function v(var_core_value_sigF4B9, var_core_value_sig5CEE) {
  return function (var_core_value_sig4D4C, var_core_value_sigC9E0) {
    var_core_value_sig5CEE(var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sigF4B9);
  };
}
function y(var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F) {
  var var_core_value_sigEFD4 = ox3804,
    var_core_value_sig861B = arguments[var_core_value_sigEFD4(392)],
    var_core_value_sig5237 = var_core_value_sig861B < 3 ? var_core_value_sig362B : var_core_value_sigE90F === null ? var_core_value_sigE90F = Object[var_core_value_sigEFD4(420)](var_core_value_sig362B, var_core_value_sig5CA5) : var_core_value_sigE90F,
    var_core_value_sigBB00;
  if (typeof Reflect == var_core_value_sigEFD4(374) && typeof Reflect[var_core_value_sigEFD4(364)] == var_core_value_sigEFD4(387)) var_core_value_sig5237 = Reflect.decorate(var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F);else {
    for (var var_core_value_sig7E54 = var_core_value_sigE92A.length - 1; var_core_value_sig7E54 >= 0; var_core_value_sig7E54--) (var_core_value_sigBB00 = var_core_value_sigE92A[var_core_value_sig7E54]) && (var_core_value_sig5237 = (var_core_value_sig861B < 3 ? var_core_value_sigBB00(var_core_value_sig5237) : var_core_value_sig861B > 3 ? var_core_value_sigBB00(var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sig5237) : var_core_value_sigBB00(var_core_value_sig362B, var_core_value_sig5CA5)) || var_core_value_sig5237);
  }
  return var_core_value_sig861B > 3 && var_core_value_sig5237 && Object[var_core_value_sigEFD4(404)](var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sig5237), var_core_value_sig5237;
}
let b = class {
  constructor(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602) {
    this._document = var_core_value_sig76BA, this._blockId = var_core_value_sigFBFA, this._injector = var_core_value_sigF602, _(this, "_unitId", undefined), this._unitId = this._document["getId"]();
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
    var var_core_value_sigF704 = ox4a008e,
      var_core_value_sig2BCF;
    let var_core_value_sig0D69 = this[var_core_value_sigF704(366)](),
      var_core_value_sig480E = (var_core_value_sig2BCF = this[var_core_value_sigF704(385)]()[var_core_value_sigF704(426)]) == null ? undefined : var_core_value_sig2BCF.dataStream;
    return !var_core_value_sig0D69 || !var_core_value_sig480E ? "" : x(var_core_value_sig480E[var_core_value_sigF704(386)](var_core_value_sig0D69[var_core_value_sigF704(389)] + 1, var_core_value_sig0D69[var_core_value_sigF704(397)]));
  }
  describe() {
    let var_core_value_sig26DB = this.getRange();
    return var_core_value_sig26DB ? {
      ...var_core_value_sig26DB,
      config: this.getConfig(),
      text: this.getText(),
      type: var_core_value_sigA942.CODE
    } : null;
  }
  getConfig() {
    return var_core_value_sig48CA(this._injector["get"](var_core_value_sig9C9F).getCodeConfig(this._unitId, this._blockId));
  }
  updateConfig(var_core_value_sigF0F9) {
    return this._injector["get"](var_core_value_sigA621).syncExecuteCommand(var_core_value_sig4CD2.id, {
      blockId: this._blockId,
      config: var_core_value_sigF0F9.config,
      unitId: this._unitId
    });
  }
  unwrap() {
    return this._injector["get"](var_core_value_sigA621).syncExecuteCommand(var_core_value_sig86D0.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._injector["get"](var_core_value_sigA621).syncExecuteCommand(var_core_value_sigFDEA.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_core_value_sig1A0F = ox4a008e,
      var_core_value_sigFBA4;
    return ((var_core_value_sigFBA4 = this[var_core_value_sig1A0F(385)]()[var_core_value_sig1A0F(426)]) == null || (var_core_value_sigFBA4 = var_core_value_sigFBA4[var_core_value_sig1A0F(399)]) == null ? undefined : var_core_value_sigFBA4.find(var_core_value_sig7524 => var_core_value_sig7524[var_core_value_sig1A0F(372)] === this[var_core_value_sig1A0F(370)] && var_core_value_sig7524[var_core_value_sig1A0F(378)] === var_core_value_sigA942[var_core_value_sig1A0F(429)])) ?? null;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
};
b = y([v(2, var_core_value_sigBBFF(var_core_value_sig8889))], b);
function x(var_core_value_sig9A8D) {
  return Array.from(var_core_value_sig9A8D).map(var_core_value_sig4383 => var_core_value_sig4383 === var_core_value_sig50AF.PARAGRAPH ? "\x0a" : var_core_value_sig4383).filter(var_core_value_sig186C => var_core_value_sig186C !== var_core_value_sig50AF.BLOCK_START && var_core_value_sig186C !== var_core_value_sig50AF.BLOCK_END && var_core_value_sig186C !== var_core_value_sig50AF.SECTION_BREAK).join("").replace(/\n$/, "");
}
var S = class extends var_core_value_sig5B67 {
  getCodes() {
    return this._getBlockRanges().filter(var_core_value_sig2AD8 => var_core_value_sig2AD8.blockType === var_core_value_sigA942.CODE).map(var_core_value_sig2AD0 => this._createFDocumentCode(var_core_value_sig2AD0.blockId));
  }
  getCode(var_core_value_sigD955) {
    return this._getBlockRanges().some(var_core_value_sig3EEE => var_core_value_sig3EEE.blockId === var_core_value_sigD955 && var_core_value_sig3EEE.blockType === var_core_value_sigA942.CODE) ? this._createFDocumentCode(var_core_value_sigD955) : null;
  }
  getCodeAt(var_core_value_sig48BD) {
    let var_core_value_sig429F = this._getBlockRanges().find(var_core_value_sigBC46 => var_core_value_sigBC46.blockType === var_core_value_sigA942.CODE && var_core_value_sigBC46.startIndex <= var_core_value_sig48BD && var_core_value_sig48BD <= var_core_value_sigBC46.endIndex);
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
    let var_core_value_sigD873 = this._injector["get"](var_core_value_sigA621),
      var_core_value_sigA12B = var_core_value_sig1758(var_core_value_sigB577) ? {
        ...var_core_value_sig9572,
        ...var_core_value_sigB577.getRange()
      } : var_core_value_sigB577,
      var_core_value_sigF230 = var_core_value_sigA12B.blockId ?? var_core_value_sig32F8(6);
    return var_core_value_sigD873.syncExecuteCommand(var_core_value_sigC259.id, {
      ...var_core_value_sigA12B,
      blockId: var_core_value_sigF230,
      unitId: this.getId()
    }) ? this.getCode(var_core_value_sigF230) : null;
  }
  _getBlockRanges() {
    var var_core_value_sig09B8 = ox4a008e,
      var_core_value_sig6F91;
    return ((var_core_value_sig6F91 = this[var_core_value_sig09B8(379)]()[var_core_value_sig09B8(426)]) == null ? undefined : var_core_value_sig6F91.blockRanges) ?? [];
  }
  _createFDocumentCode(var_core_value_sigF9C7) {
    return this._injector["createInstance"](b, this, var_core_value_sigF9C7);
  }
};
var_core_value_sig5B67.extend(S);
export { b as FDocumentCode };
