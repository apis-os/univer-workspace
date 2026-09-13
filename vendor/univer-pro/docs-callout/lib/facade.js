import { DEFAULT_CALLOUT_CONFIG as var_core_value_sig2902, DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN as var_core_value_sig9989, DOCS_CALLOUT_BORDER_COLOR_TOKEN as var_core_value_sig698E, DocsCalloutDeleteCommand as var_core_value_sig2809, DocsCalloutInsertCommand as var_core_value_sig2DAB, DocsCalloutModel as var_core_value_sig877E, DocsCalloutSetTextColorCommand as var_core_value_sig20C8, DocsCalloutUnwrapCommand as var_core_value_sigE9A7, DocsCalloutUpdateCommand as var_core_value_sigBECE } from "@univerjs-pro/docs-callout";
import { DEFAULT_STYLES as var_core_value_sig1B22, DataStreamTreeTokenType as var_core_value_sig7F72, DocumentBlockRangeType as var_core_value_sig7B2A, ICommandService as var_core_value_sig06CD, Inject as var_core_value_sigA5F1, ThemeService as var_core_value_sig97A2, generateRandomId as var_core_value_sig07E9 } from "@univerjs/core";
import { FDocument as var_core_value_sig4F59, isParagraphFacade as var_core_value_sigF564 } from "@univerjs/docs/facade";
function v(var_core_value_sig5CEE) {
  "@babel/helpers - typeof";

  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig27E5) {
    return typeof var_core_value_sig27E5;
  } : function (var_core_value_sig8061) {
    return var_core_value_sig8061 && typeof Symbol == "function" && var_core_value_sig8061.constructor === Symbol && var_core_value_sig8061 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8061;
  }, v(var_core_value_sig5CEE);
}
function y(var_core_value_sigE92A, var_core_value_sig362B) {
  if (v(var_core_value_sigE92A) != "object" || !var_core_value_sigE92A) return var_core_value_sigE92A;
  var var_core_value_sig5CA5 = var_core_value_sigE92A[Symbol.toPrimitive];
  if (var_core_value_sig5CA5 !== undefined) {
    var var_core_value_sigE90F = var_core_value_sig5CA5.call(var_core_value_sigE92A, var_core_value_sig362B || "default");
    if (v(var_core_value_sigE90F) != "object") return var_core_value_sigE90F;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig362B === "string" ? String : Number)(var_core_value_sigE92A);
}
function b(var_core_value_sigEFD4) {
  var var_core_value_sig861B = ox13d0,
    var_core_value_sig5237 = y(var_core_value_sigEFD4, var_core_value_sig861B(269));
  return v(var_core_value_sig5237) == var_core_value_sig861B(286) ? var_core_value_sig5237 : var_core_value_sig5237 + "";
}
function x(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D) {
  return (var_core_value_sig7E54 = b(var_core_value_sig7E54)) in var_core_value_sigBB00 ? Object.defineProperty(var_core_value_sigBB00, var_core_value_sig7E54, {
    value: var_core_value_sig9A8D,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigBB00[var_core_value_sig7E54] = var_core_value_sig9A8D, var_core_value_sigBB00;
}
function S(var_core_value_sigC259, var_core_value_sig9C9F) {
  return function (var_core_value_sig4D4C, var_core_value_sigC9E0) {
    var_core_value_sig9C9F(var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sigC259);
  };
}
function C(var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA) {
  var var_core_value_sig50AF = ox13d0,
    var_core_value_sigA942 = arguments.length,
    var_core_value_sigA621 = var_core_value_sigA942 < 3 ? var_core_value_sig86D0 : var_core_value_sig48CA === null ? var_core_value_sig48CA = Object[var_core_value_sig50AF(270)](var_core_value_sig86D0, var_core_value_sig4CD2) : var_core_value_sig48CA,
    var_core_value_sigBBFF;
  if (typeof Reflect == var_core_value_sig50AF(244) && typeof Reflect[var_core_value_sig50AF(264)] == var_core_value_sig50AF(274)) var_core_value_sigA621 = Reflect[var_core_value_sig50AF(264)](var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA);else {
    for (var var_core_value_sig8889 = var_core_value_sigFDEA[var_core_value_sig50AF(295)] - 1; var_core_value_sig8889 >= 0; var_core_value_sig8889--) (var_core_value_sigBBFF = var_core_value_sigFDEA[var_core_value_sig8889]) && (var_core_value_sigA621 = (var_core_value_sigA942 < 3 ? var_core_value_sigBBFF(var_core_value_sigA621) : var_core_value_sigA942 > 3 ? var_core_value_sigBBFF(var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sigA621) : var_core_value_sigBBFF(var_core_value_sig86D0, var_core_value_sig4CD2)) || var_core_value_sigA621);
  }
  return var_core_value_sigA942 > 3 && var_core_value_sigA621 && Object[var_core_value_sig50AF(288)](var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sigA621), var_core_value_sigA621;
}
let w = class {
  constructor(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD, var_core_value_sigF704) {
    this._document = var_core_value_sig76BA, this._blockId = var_core_value_sigFBFA, this._commandService = var_core_value_sigF602, this._docsCalloutModel = var_core_value_sig1BBD, this._themeService = var_core_value_sigF704, x(this, "_unitId", undefined), this._unitId = this._document["getId"]();
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
  getConfig() {
    return this._getConfig();
  }
  getStyle() {
    return this._getStyle(this._getBlockRange());
  }
  describe() {
    let var_core_value_sig0D69 = this._getBlockRange();
    return var_core_value_sig0D69 ? {
      blockId: var_core_value_sig0D69.blockId,
      config: this._getConfig(),
      endIndex: var_core_value_sig0D69.endIndex,
      startIndex: var_core_value_sig0D69.startIndex,
      style: this._getStyle(var_core_value_sig0D69),
      text: this._getText(var_core_value_sig0D69),
      type: var_core_value_sig7B2A.CALLOUT
    } : null;
  }
  updateConfig(var_core_value_sig480E) {
    return this._updateConfig(var_core_value_sig480E);
  }
  setBackgroundColor(var_core_value_sig26DB) {
    return this._updateConfig({
      backgroundColor: var_core_value_sig26DB
    });
  }
  setBorder(var_core_value_sigF0F9) {
    if (var_core_value_sigF0F9.color == null && var_core_value_sigF0F9.opacity == null && var_core_value_sigF0F9.style == null && var_core_value_sigF0F9.width == null) return false;
    let var_core_value_sig1A0F = {};
    return var_core_value_sigF0F9.color != null && (var_core_value_sig1A0F.borderColor = var_core_value_sigF0F9.color), var_core_value_sigF0F9.style != null && (var_core_value_sig1A0F.borderStyle = var_core_value_sigF0F9.style), var_core_value_sigF0F9.opacity != null && (var_core_value_sig1A0F.borderOpacity = var_core_value_sigF0F9.opacity), var_core_value_sigF0F9.width != null && (var_core_value_sig1A0F.borderWidth = var_core_value_sigF0F9.width), this._updateConfig(var_core_value_sig1A0F);
  }
  setTextColor(var_core_value_sigFBA4) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig20C8.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: var_core_value_sigFBA4
    });
  }
  resetTextColor() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig20C8.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: null
    });
  }
  setIcon(var_core_value_sig4383) {
    return this._updateConfig({
      icon: var_core_value_sig4383,
      showIcon: true
    });
  }
  setIconVisible(var_core_value_sig186C) {
    return this._updateConfig({
      showIcon: var_core_value_sig186C
    });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](var_core_value_sigE9A7.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig2809.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_core_value_sigD955 = ox177107,
      var_core_value_sig48BD;
    return ((var_core_value_sig48BD = this._getDocumentData()[var_core_value_sigD955(297)]) == null || (var_core_value_sig48BD = var_core_value_sig48BD[var_core_value_sigD955(287)]) == null ? undefined : var_core_value_sig48BD[var_core_value_sigD955(254)](var_core_value_sig7524 => var_core_value_sig7524[var_core_value_sigD955(291)] === this[var_core_value_sigD955(275)] && var_core_value_sig7524.blockType === var_core_value_sig7B2A.CALLOUT)) ?? null;
  }
  _getConfig() {
    return this._docsCalloutModel["getCalloutConfig"](this._unitId, this._blockId) ?? var_core_value_sig2902;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(var_core_value_sig429F) {
    let var_core_value_sigF62A = this._getConfig();
    return {
      backgroundColor: var_core_value_sigF62A.backgroundColor || this._themeService["getColorFromTheme"](var_core_value_sig9989),
      border: {
        color: var_core_value_sigF62A.borderColor || this._themeService["getColorFromTheme"](var_core_value_sig698E),
        opacity: var_core_value_sigF62A.borderOpacity,
        style: var_core_value_sigF62A.borderStyle,
        width: var_core_value_sigF62A.borderWidth
      },
      textColor: var_core_value_sig429F ? T(this._getDocumentData(), var_core_value_sig429F) : var_core_value_sig1B22.cl["rgb"]
    };
  }
  _getText(var_core_value_sig8178) {
    var var_core_value_sigE9ED = ox177107,
      var_core_value_sigB577;
    let var_core_value_sig9572 = (var_core_value_sigB577 = this[var_core_value_sigE9ED(304)]()[var_core_value_sigE9ED(297)]) == null ? undefined : var_core_value_sigB577[var_core_value_sigE9ED(265)];
    return !var_core_value_sig8178 || !var_core_value_sig9572 ? "" : E(var_core_value_sig9572[var_core_value_sigE9ED(293)](var_core_value_sig8178[var_core_value_sigE9ED(246)] + 1, var_core_value_sig8178.endIndex));
  }
  _updateConfig(var_core_value_sigD873) {
    return this._commandService["syncExecuteCommand"](var_core_value_sigBECE.id, {
      blockId: this._blockId,
      config: var_core_value_sigD873,
      unitId: this._unitId
    });
  }
};
w = C([S(2, var_core_value_sig06CD), S(3, var_core_value_sigA5F1(var_core_value_sig877E)), S(4, var_core_value_sigA5F1(var_core_value_sig97A2))], w);
function T(var_core_value_sig32F8, var_core_value_sig5B67) {
  var var_core_value_sig1758 = ox177107,
    var_core_value_sig4805;
  return ((var_core_value_sig4805 = var_core_value_sig32F8[var_core_value_sig1758(297)]) == null || (var_core_value_sig4805 = var_core_value_sig4805.textRuns) == null || (var_core_value_sig4805 = var_core_value_sig4805[var_core_value_sig1758(254)](var_core_value_sigA12B => var_core_value_sigA12B.ed > var_core_value_sig5B67[var_core_value_sig1758(246)] + 1 && var_core_value_sigA12B.st < var_core_value_sig5B67[var_core_value_sig1758(231)])) == null || (var_core_value_sig4805 = var_core_value_sig4805.ts) == null || (var_core_value_sig4805 = var_core_value_sig4805.cl) == null ? undefined : var_core_value_sig4805[var_core_value_sig1758(271)]) ?? var_core_value_sig1B22.cl[var_core_value_sig1758(271)];
}
function E(var_core_value_sigE67E) {
  return Array.from(var_core_value_sigE67E).map(var_core_value_sigF230 => var_core_value_sigF230 === var_core_value_sig7F72.PARAGRAPH ? "\x0a" : var_core_value_sigF230).filter(var_core_value_sig09B8 => var_core_value_sig09B8 !== var_core_value_sig7F72.BLOCK_START && var_core_value_sig09B8 !== var_core_value_sig7F72.BLOCK_END && var_core_value_sig09B8 !== var_core_value_sig7F72.SECTION_BREAK).join("").replace(/\n$/, "");
}
var D = class extends var_core_value_sig4F59 {
  getCallouts() {
    return this._getBlockRanges().filter(var_core_value_sig2AD8 => var_core_value_sig2AD8.blockType === var_core_value_sig7B2A.CALLOUT).map(var_core_value_sig2AD0 => this._createFDocumentCallout(var_core_value_sig2AD0.blockId));
  }
  getCallout(var_core_value_sig6F91) {
    return this._getBlockRanges().some(var_core_value_sig3EEE => var_core_value_sig3EEE.blockId === var_core_value_sig6F91 && var_core_value_sig3EEE.blockType === var_core_value_sig7B2A.CALLOUT) ? this._createFDocumentCallout(var_core_value_sig6F91) : null;
  }
  getCalloutAt(var_core_value_sigF9C7) {
    let var_core_value_sig8895 = this._getBlockRanges().find(var_core_value_sigBC46 => var_core_value_sigBC46.blockType === var_core_value_sig7B2A.CALLOUT && var_core_value_sigBC46.startIndex <= var_core_value_sigF9C7 && var_core_value_sigF9C7 <= var_core_value_sigBC46.endIndex);
    return var_core_value_sig8895 ? this._createFDocumentCallout(var_core_value_sig8895.blockId) : null;
  }
  findCalloutByText(var_core_value_sigC80B) {
    return this.findCallouts(var_core_value_sigC80B)[0] ?? null;
  }
  findCallouts(var_core_value_sig284F) {
    let var_core_value_sigE154 = typeof var_core_value_sig284F == "string" ? {
      text: var_core_value_sig284F
    } : var_core_value_sig284F;
    return this.getCallouts().filter(var_core_value_sig3D7D => !(var_core_value_sigE154.blockId && var_core_value_sig3D7D.getId() !== var_core_value_sigE154.blockId || var_core_value_sigE154.text && !var_core_value_sig3D7D.getText().includes(var_core_value_sigE154.text)));
  }
  insertCallout(var_core_value_sig4632 = {}, var_core_value_sig12F2 = {}) {
    let var_core_value_sig2259 = this._injector["get"](var_core_value_sig06CD),
      var_core_value_sig9E2F = var_core_value_sigF564(var_core_value_sig4632) ? {
        ...var_core_value_sig12F2,
        ...var_core_value_sig4632.getRange()
      } : var_core_value_sig4632,
      var_core_value_sigD082 = var_core_value_sig9E2F.blockId ?? var_core_value_sig07E9(6);
    return var_core_value_sig2259.syncExecuteCommand(var_core_value_sig2DAB.id, {
      ...var_core_value_sig9E2F,
      blockId: var_core_value_sigD082,
      unitId: this.getId()
    }) ? this.getCallout(var_core_value_sigD082) : null;
  }
  _getBlockRanges() {
    var var_core_value_sigDBB7 = ox177107,
      var_core_value_sigD0A8;
    return ((var_core_value_sigD0A8 = this[var_core_value_sigDBB7(240)]()[var_core_value_sigDBB7(297)]) == null ? undefined : var_core_value_sigD0A8.blockRanges) ?? [];
  }
  _createFDocumentCallout(var_core_value_sigF4B9) {
    return this._injector["createInstance"](w, this, var_core_value_sigF4B9);
  }
};
var_core_value_sig4F59.extend(D);
export { w as FDocumentCallout };
