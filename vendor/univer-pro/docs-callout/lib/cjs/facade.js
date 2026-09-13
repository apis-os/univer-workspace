Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/docs-callout"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs/facade");
function r(var_core_value_sigDBB7) {
  "@babel/helpers - typeof";

  return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig27E5) {
    return typeof var_core_value_sig27E5;
  } : function (var_core_value_sig8061) {
    return var_core_value_sig8061 && typeof Symbol == "function" && var_core_value_sig8061.constructor === Symbol && var_core_value_sig8061 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8061;
  }, r(var_core_value_sigDBB7);
}
function i(var_core_value_sigD0A8, var_core_value_sigF4B9) {
  if (r(var_core_value_sigD0A8) != "object" || !var_core_value_sigD0A8) return var_core_value_sigD0A8;
  var var_core_value_sig5CEE = var_core_value_sigD0A8[Symbol.toPrimitive];
  if (var_core_value_sig5CEE !== undefined) {
    var var_core_value_sigE92A = var_core_value_sig5CEE.call(var_core_value_sigD0A8, var_core_value_sigF4B9 || "default");
    if (r(var_core_value_sigE92A) != "object") return var_core_value_sigE92A;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigF4B9 === "string" ? String : Number)(var_core_value_sigD0A8);
}
function a(var_core_value_sig362B) {
  var var_core_value_sig5CA5 = i(var_core_value_sig362B, "string");
  return r(var_core_value_sig5CA5) == "symbol" ? var_core_value_sig5CA5 : var_core_value_sig5CA5 + "";
}
function o(var_core_value_sigE90F, var_core_value_sigEFD4, var_core_value_sig861B) {
  return (var_core_value_sigEFD4 = a(var_core_value_sigEFD4)) in var_core_value_sigE90F ? Object.defineProperty(var_core_value_sigE90F, var_core_value_sigEFD4, {
    value: var_core_value_sig861B,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigE90F[var_core_value_sigEFD4] = var_core_value_sig861B, var_core_value_sigE90F;
}
function s(var_core_value_sig5237, var_core_value_sigBB00) {
  return function (var_core_value_sig4D4C, var_core_value_sigC9E0) {
    var_core_value_sigBB00(var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sig5237);
  };
}
function c(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F) {
  var var_core_value_sigFDEA = arguments.length,
    var_core_value_sig86D0 = var_core_value_sigFDEA < 3 ? var_core_value_sig9A8D : var_core_value_sig9C9F === null ? var_core_value_sig9C9F = Object.getOwnPropertyDescriptor(var_core_value_sig9A8D, var_core_value_sigC259) : var_core_value_sig9C9F,
    var_core_value_sig4CD2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig86D0 = Reflect.decorate(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F);else {
    for (var var_core_value_sig48CA = var_core_value_sig7E54.length - 1; var_core_value_sig48CA >= 0; var_core_value_sig48CA--) (var_core_value_sig4CD2 = var_core_value_sig7E54[var_core_value_sig48CA]) && (var_core_value_sig86D0 = (var_core_value_sigFDEA < 3 ? var_core_value_sig4CD2(var_core_value_sig86D0) : var_core_value_sigFDEA > 3 ? var_core_value_sig4CD2(var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig86D0) : var_core_value_sig4CD2(var_core_value_sig9A8D, var_core_value_sigC259)) || var_core_value_sig86D0);
  }
  return var_core_value_sigFDEA > 3 && var_core_value_sig86D0 && Object.defineProperty(var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig86D0), var_core_value_sig86D0;
}
let l = class {
  constructor(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD, var_core_value_sigF704) {
    this._document = var_core_value_sig76BA, this._blockId = var_core_value_sigFBFA, this._commandService = var_core_value_sigF602, this._docsCalloutModel = var_core_value_sig1BBD, this._themeService = var_core_value_sigF704, o(this, "_unitId", undefined), this._unitId = this._document["getId"]();
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
      type: t.DocumentBlockRangeType["CALLOUT"]
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
    return this._commandService["syncExecuteCommand"](e.DocsCalloutSetTextColorCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId,
      value: var_core_value_sigFBA4
    });
  }
  resetTextColor() {
    return this._commandService["syncExecuteCommand"](e.DocsCalloutSetTextColorCommand["id"], {
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
    return this._commandService["syncExecuteCommand"](e.DocsCalloutUnwrapCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](e.DocsCalloutDeleteCommand["id"], {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_core_value_sigD955;
    return ((var_core_value_sigD955 = this._getDocumentData().body) == null || (var_core_value_sigD955 = var_core_value_sigD955.blockRanges) == null ? undefined : var_core_value_sigD955.find(var_core_value_sig7524 => var_core_value_sig7524.blockId === this._blockId && var_core_value_sig7524.blockType === t.DocumentBlockRangeType["CALLOUT"])) ?? null;
  }
  _getConfig() {
    return this._docsCalloutModel["getCalloutConfig"](this._unitId, this._blockId) ?? e.DEFAULT_CALLOUT_CONFIG;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(var_core_value_sig48BD) {
    let var_core_value_sig429F = this._getConfig();
    return {
      backgroundColor: var_core_value_sig429F.backgroundColor || this._themeService["getColorFromTheme"](e.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN),
      border: {
        color: var_core_value_sig429F.borderColor || this._themeService["getColorFromTheme"](e.DOCS_CALLOUT_BORDER_COLOR_TOKEN),
        opacity: var_core_value_sig429F.borderOpacity,
        style: var_core_value_sig429F.borderStyle,
        width: var_core_value_sig429F.borderWidth
      },
      textColor: var_core_value_sig48BD ? u(this._getDocumentData(), var_core_value_sig48BD) : t.DEFAULT_STYLES["cl"].rgb
    };
  }
  _getText(var_core_value_sigF62A) {
    var var_core_value_sig8178;
    let var_core_value_sigE9ED = (var_core_value_sig8178 = this._getDocumentData().body) == null ? undefined : var_core_value_sig8178.dataStream;
    return !var_core_value_sigF62A || !var_core_value_sigE9ED ? "" : d(var_core_value_sigE9ED.slice(var_core_value_sigF62A.startIndex + 1, var_core_value_sigF62A.endIndex));
  }
  _updateConfig(var_core_value_sigB577) {
    return this._commandService["syncExecuteCommand"](e.DocsCalloutUpdateCommand["id"], {
      blockId: this._blockId,
      config: var_core_value_sigB577,
      unitId: this._unitId
    });
  }
};
l = c([s(2, t.ICommandService), s(3, (0, t.Inject)(e.DocsCalloutModel)), s(4, (0, t.Inject)(t.ThemeService))], l);
function u(var_core_value_sig50AF, var_core_value_sigA942) {
  var var_core_value_sigA621;
  return ((var_core_value_sigA621 = var_core_value_sig50AF.body) == null || (var_core_value_sigA621 = var_core_value_sigA621.textRuns) == null || (var_core_value_sigA621 = var_core_value_sigA621.find(var_core_value_sig9572 => var_core_value_sig9572.ed > var_core_value_sigA942.startIndex + 1 && var_core_value_sig9572.st < var_core_value_sigA942.endIndex)) == null || (var_core_value_sigA621 = var_core_value_sigA621.ts) == null || (var_core_value_sigA621 = var_core_value_sigA621.cl) == null ? undefined : var_core_value_sigA621.rgb) ?? t.DEFAULT_STYLES["cl"].rgb;
}
function d(var_core_value_sigBBFF) {
  return Array.from(var_core_value_sigBBFF).map(var_core_value_sigD873 => var_core_value_sigD873 === t.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : var_core_value_sigD873).filter(var_core_value_sigA12B => var_core_value_sigA12B !== t.DataStreamTreeTokenType["BLOCK_START"] && var_core_value_sigA12B !== t.DataStreamTreeTokenType["BLOCK_END"] && var_core_value_sigA12B !== t.DataStreamTreeTokenType["SECTION_BREAK"]).join("").replace(/\n$/, "");
}
var f = class extends n.FDocument {
  getCallouts() {
    return this._getBlockRanges().filter(var_core_value_sig2AD8 => var_core_value_sig2AD8.blockType === t.DocumentBlockRangeType["CALLOUT"]).map(var_core_value_sig2AD0 => this._createFDocumentCallout(var_core_value_sig2AD0.blockId));
  }
  getCallout(var_core_value_sigF230) {
    return this._getBlockRanges().some(var_core_value_sig3EEE => var_core_value_sig3EEE.blockId === var_core_value_sigF230 && var_core_value_sig3EEE.blockType === t.DocumentBlockRangeType["CALLOUT"]) ? this._createFDocumentCallout(var_core_value_sigF230) : null;
  }
  getCalloutAt(var_core_value_sig09B8) {
    let var_core_value_sig6F91 = this._getBlockRanges().find(var_core_value_sigBC46 => var_core_value_sigBC46.blockType === t.DocumentBlockRangeType["CALLOUT"] && var_core_value_sigBC46.startIndex <= var_core_value_sig09B8 && var_core_value_sig09B8 <= var_core_value_sigBC46.endIndex);
    return var_core_value_sig6F91 ? this._createFDocumentCallout(var_core_value_sig6F91.blockId) : null;
  }
  findCalloutByText(var_core_value_sigF9C7) {
    return this.findCallouts(var_core_value_sigF9C7)[0] ?? null;
  }
  findCallouts(var_core_value_sig8895) {
    let var_core_value_sigC80B = typeof var_core_value_sig8895 == "string" ? {
      text: var_core_value_sig8895
    } : var_core_value_sig8895;
    return this.getCallouts().filter(var_core_value_sig3D7D => !(var_core_value_sigC80B.blockId && var_core_value_sig3D7D.getId() !== var_core_value_sigC80B.blockId || var_core_value_sigC80B.text && !var_core_value_sig3D7D.getText().includes(var_core_value_sigC80B.text)));
  }
  insertCallout(var_core_value_sig284F = {}, var_core_value_sigE154 = {}) {
    let var_core_value_sig4632 = this._injector["get"](t.ICommandService),
      var_core_value_sig12F2 = (0, n.isParagraphFacade)(var_core_value_sig284F) ? {
        ...var_core_value_sigE154,
        ...var_core_value_sig284F.getRange()
      } : var_core_value_sig284F,
      var_core_value_sig2259 = var_core_value_sig12F2.blockId ?? (0, t.generateRandomId)(6);
    return var_core_value_sig4632.syncExecuteCommand(e.DocsCalloutInsertCommand["id"], {
      ...var_core_value_sig12F2,
      blockId: var_core_value_sig2259,
      unitId: this.getId()
    }) ? this.getCallout(var_core_value_sig2259) : null;
  }
  _getBlockRanges() {
    var var_core_value_sig9E2F;
    return ((var_core_value_sig9E2F = this.save().body) == null ? undefined : var_core_value_sig9E2F.blockRanges) ?? [];
  }
  _createFDocumentCallout(var_core_value_sigD082) {
    return this._injector["createInstance"](l, this, var_core_value_sigD082);
  }
};
n.FDocument["extend"](f), Object.defineProperty(exports, "FDocumentCallout", {
  enumerable: true,
  get: function () {
    return l;
  }
});
