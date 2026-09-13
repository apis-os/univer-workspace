import { DocsListDemoteCommand as var_core_value_sigF2E6, DocsListInsertCommand as var_core_value_sig34C8, DocsListPromoteCommand as var_core_value_sigB744, DocsListSelectCommand as var_core_value_sigEAE2, DocsListSelectionMode as var_core_value_sigE68A, DocsListSetGlyphSymbolCommand as var_core_value_sig3E68, DocsListSetGlyphTypeCommand as var_core_value_sigF4C5, DocsListSetPrefixSuffixCommand as var_core_value_sig5410, DocsListSetStartNumberCommand as var_core_value_sig492F } from "@univerjs-pro/docs-list";
import { DataStreamTreeTokenType as var_core_value_sig8EA0, ICommandService as var_core_value_sigA6F6, ListGlyphType as var_core_value_sigCDDA, PRESET_LIST_TYPE as var_core_value_sigE243, PresetListType as var_core_value_sig74A8, generateRandomId as var_core_value_sig21B2, getParagraphContentStartOffset as var_core_value_sigDE08, getParagraphContentStartOffsets as var_core_value_sigACCB } from "@univerjs/core";
import { FEnum as var_core_value_sig7F33 } from "@univerjs/core/facade";
import { FDocument as var_core_value_sig0C53, isParagraphFacade as var_core_value_sigEA04 } from "@univerjs/docs/facade";
var b = class extends var_core_value_sig7F33 {
  get DocsListSelectionMode() {
    return var_core_value_sigE68A;
  }
  get ListGlyphType() {
    return var_core_value_sigCDDA;
  }
};
var_core_value_sig7F33.extend(b);
function x(var_core_value_sig97A2) {
  let var_core_value_sig07E9 = var_core_value_sig97A2.body,
    var_core_value_sig4F59 = (var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.paragraphs) ?? [],
    var_core_value_sigF564 = (var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.dataStream) ?? "",
    var_core_value_sig8CFA = var_core_value_sig07E9 ? var_core_value_sigACCB(var_core_value_sig07E9) : new Map();
  return var_core_value_sig4F59.filter(var_core_value_sigF602 => !!var_core_value_sigF602.bullet).map(var_core_value_sig1BBD => T(var_core_value_sig97A2, var_core_value_sigF564, var_core_value_sig1BBD, var_core_value_sig8CFA));
}
function S(var_core_value_sig2E11, var_core_value_sig5B69) {
  var var_core_value_sigB098 = ox22162f,
    var_core_value_sigCE71;
  return ((var_core_value_sigCE71 = var_core_value_sig2E11[var_core_value_sigB098(317)]) == null ? undefined : var_core_value_sigCE71[var_core_value_sig5B69]) ?? var_core_value_sigE243[var_core_value_sig5B69];
}
function C(var_core_value_sig21D8, var_core_value_sig2B65) {
  var var_core_value_sigD7EA = ox22162f,
    var_core_value_sigB33B;
  let var_core_value_sig24B9 = var_core_value_sig2B65[var_core_value_sigD7EA(260)];
  if (var_core_value_sig24B9) return (var_core_value_sigB33B = S(var_core_value_sig21D8, var_core_value_sig24B9[var_core_value_sigD7EA(339)])) == null || (var_core_value_sigB33B = var_core_value_sigB33B[var_core_value_sigD7EA(266)]) == null ? undefined : var_core_value_sigB33B[var_core_value_sig24B9[var_core_value_sigD7EA(266)]];
}
function w(var_core_value_sigE627, var_core_value_sigEF3E) {
  let var_core_value_sig273D = var_core_value_sigE627.body,
    var_core_value_sig9A0D = (var_core_value_sig273D == null ? undefined : var_core_value_sig273D.paragraphs) ?? [];
  if (!var_core_value_sig273D) return;
  let var_core_value_sigA319 = var_core_value_sigACCB(var_core_value_sig273D);
  return var_core_value_sig9A0D.find(var_core_value_sigF704 => (var_core_value_sigA319.get(var_core_value_sigF704.startIndex) ?? 0) <= var_core_value_sigEF3E && var_core_value_sigEF3E <= var_core_value_sigF704.startIndex);
}
function T(var_core_value_sig2D58, var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA) {
  let var_core_value_sig58C1 = var_core_value_sigD749.bullet,
    var_core_value_sig5090 = C(var_core_value_sig2D58, var_core_value_sigD749),
    var_core_value_sigC368 = var_core_value_sigCFFA.get(var_core_value_sigD749.startIndex) ?? (var_core_value_sig2D58.body ? var_core_value_sigDE08(var_core_value_sig2D58.body, var_core_value_sigD749) : 0);
  return {
    endOffset: var_core_value_sigD749.startIndex,
    glyphFormat: var_core_value_sig5090 == null ? undefined : var_core_value_sig5090.glyphFormat,
    glyphSymbol: var_core_value_sig5090 == null ? undefined : var_core_value_sig5090.glyphSymbol,
    glyphType: var_core_value_sig5090 == null ? undefined : var_core_value_sig5090.glyphType,
    listId: var_core_value_sig58C1.listId,
    listType: var_core_value_sig58C1.listType,
    nestingLevel: var_core_value_sig58C1.nestingLevel,
    ordered: !!(var_core_value_sig5090 && var_core_value_sig5090.glyphType !== var_core_value_sigCDDA.BULLET && !var_core_value_sig5090.glyphSymbol),
    paragraphStartIndex: var_core_value_sigD749.startIndex,
    startNumber: var_core_value_sig5090 == null ? undefined : var_core_value_sig5090.startNumber,
    startOffset: var_core_value_sigC368,
    text: E(var_core_value_sig223F.slice(var_core_value_sigC368, var_core_value_sigD749.startIndex))
  };
}
function E(var_core_value_sigAD56) {
  return Array.from(var_core_value_sigAD56).filter(var_core_value_sig2BCF => var_core_value_sig2BCF !== var_core_value_sig8EA0.SECTION_BREAK).join("");
}
function D(var_core_value_sigDB4A) {
  "@babel/helpers - typeof";

  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig0D69) {
    return typeof var_core_value_sig0D69;
  } : function (var_core_value_sig480E) {
    return var_core_value_sig480E && typeof Symbol == "function" && var_core_value_sig480E.constructor === Symbol && var_core_value_sig480E !== Symbol.prototype ? "symbol" : typeof var_core_value_sig480E;
  }, D(var_core_value_sigDB4A);
}
function O(var_core_value_sig6418, var_core_value_sig1896) {
  if (D(var_core_value_sig6418) != "object" || !var_core_value_sig6418) return var_core_value_sig6418;
  var var_core_value_sig0285 = var_core_value_sig6418[Symbol.toPrimitive];
  if (var_core_value_sig0285 !== undefined) {
    var var_core_value_sig777D = var_core_value_sig0285.call(var_core_value_sig6418, var_core_value_sig1896 || "default");
    if (D(var_core_value_sig777D) != "object") return var_core_value_sig777D;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig1896 === "string" ? String : Number)(var_core_value_sig6418);
}
function k(var_core_value_sig3F4C) {
  var var_core_value_sigD65A = ox22162f,
    var_core_value_sig5A13 = O(var_core_value_sig3F4C, var_core_value_sigD65A(328));
  return D(var_core_value_sig5A13) == var_core_value_sigD65A(272) ? var_core_value_sig5A13 : var_core_value_sig5A13 + "";
}
function A(var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512) {
  return (var_core_value_sig3607 = k(var_core_value_sig3607)) in var_core_value_sigF593 ? Object.defineProperty(var_core_value_sigF593, var_core_value_sig3607, {
    value: var_core_value_sigB512,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigF593[var_core_value_sig3607] = var_core_value_sigB512, var_core_value_sigF593;
}
var j = class {
    constructor(var_core_value_sig26DB, var_core_value_sigF0F9, var_core_value_sig1A0F = "", var_core_value_sigFBA4) {
      this._document = var_core_value_sig26DB, this._paragraphStartIndex = var_core_value_sigF0F9, this._segmentId = var_core_value_sig1A0F, this._injector = var_core_value_sigFBA4, A(this, "_unitId", undefined), this._unitId = this._document["getId"]();
    }
    getParagraphStartIndex() {
      return this._paragraphStartIndex;
    }
    getSegmentId() {
      return this._segmentId;
    }
    describe() {
      return this._info();
    }
    getText() {
      var var_core_value_sig4383 = ox22162f,
        var_core_value_sig186C;
      return ((var_core_value_sig186C = this[var_core_value_sig4383(262)]()) == null ? undefined : var_core_value_sig186C[var_core_value_sig4383(255)]) ?? "";
    }
    isOrdered() {
      var var_core_value_sigD955 = ox22162f,
        var_core_value_sig48BD;
      return ((var_core_value_sig48BD = this[var_core_value_sigD955(262)]()) == null ? undefined : var_core_value_sig48BD[var_core_value_sigD955(338)]) ?? false;
    }
    isUnordered() {
      let var_core_value_sig429F = this._info();
      return var_core_value_sig429F ? !var_core_value_sig429F.ordered : false;
    }
    select(var_core_value_sigF62A = var_core_value_sigE68A.Item) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sigEAE2.id, {
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
        mode: var_core_value_sigF62A
      });
    }
    setGlyphType(var_core_value_sig8178, var_core_value_sigE9ED = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sigF4C5.id, {
        ...var_core_value_sigE9ED,
        glyphType: var_core_value_sig8178,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setGlyphSymbol(var_core_value_sigB577, var_core_value_sig9572 = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sig3E68.id, {
        ...var_core_value_sig9572,
        symbol: var_core_value_sigB577,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setPrefixSuffix(var_core_value_sigD873, var_core_value_sigA12B, var_core_value_sigF230 = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sig5410.id, {
        ...var_core_value_sigF230,
        prefix: var_core_value_sigD873,
        suffix: var_core_value_sigA12B,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setStartNumber(var_core_value_sig09B8, var_core_value_sig6F91 = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sig492F.id, {
        ...var_core_value_sig6F91,
        startNumber: var_core_value_sig09B8,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    continueNumbering() {
      return this.setStartNumber(1, {
        restartFromPrevious: true
      });
    }
    promote(var_core_value_sigF9C7 = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sigB744.id, {
        ...var_core_value_sigF9C7,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    demote(var_core_value_sig8895 = {}) {
      return this._injector["get"](var_core_value_sigA6F6).syncExecuteCommand(var_core_value_sigF2E6.id, {
        ...var_core_value_sig8895,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    _info() {
      return x(this._document["getDocumentDataModel"](this._segmentId).getSnapshot()).find(var_core_value_sig7524 => var_core_value_sig7524.paragraphStartIndex === this._paragraphStartIndex) ?? null;
    }
  },
  M = class {
    constructor(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154 = "", var_core_value_sig4632) {
      this._document = var_core_value_sigC80B, this._listId = var_core_value_sig284F, this._segmentId = var_core_value_sigE154, this._injector = var_core_value_sig4632;
    }
    getId() {
      return this._listId;
    }
    getSegmentId() {
      return this._segmentId;
    }
    getItems() {
      return this._getListItemInfos().map(var_core_value_sig2AD8 => this._injector["createInstance"](j, this._document, var_core_value_sig2AD8.paragraphStartIndex, this._segmentId, this._injector));
    }
    describe() {
      let var_core_value_sig12F2 = this._getListItemInfos();
      return {
        itemCount: var_core_value_sig12F2.length,
        items: var_core_value_sig12F2,
        listId: this._listId
      };
    }
    hasOrderedItems() {
      return this._getListItemInfos().some(var_core_value_sig2AD0 => var_core_value_sig2AD0.ordered);
    }
    hasUnorderedItems() {
      return this._getListItemInfos().some(var_core_value_sig3EEE => !var_core_value_sig3EEE.ordered);
    }
    isMixed() {
      return this.hasOrderedItems() && this.hasUnorderedItems();
    }
    setGlyphType(var_core_value_sig2259) {
      var var_core_value_sig9E2F = ox22162f,
        var_core_value_sigD082;
      return ((var_core_value_sigD082 = this[var_core_value_sig9E2F(313)]()) == null ? undefined : var_core_value_sigD082[var_core_value_sig9E2F(268)](var_core_value_sig2259, {
        mode: var_core_value_sigE68A[var_core_value_sig9E2F(312)]
      })) ?? false;
    }
    setGlyphSymbol(var_core_value_sigDBB7) {
      var var_core_value_sigD0A8 = ox22162f,
        var_core_value_sigF4B9;
      return ((var_core_value_sigF4B9 = this[var_core_value_sigD0A8(313)]()) == null ? undefined : var_core_value_sigF4B9[var_core_value_sigD0A8(326)](var_core_value_sigDBB7, {
        mode: var_core_value_sigE68A[var_core_value_sigD0A8(312)]
      })) ?? false;
    }
    setPrefixSuffix(var_core_value_sig5CEE, var_core_value_sigE92A) {
      var var_core_value_sig362B = ox22162f,
        var_core_value_sig5CA5;
      return ((var_core_value_sig5CA5 = this[var_core_value_sig362B(313)]()) == null ? undefined : var_core_value_sig5CA5.setPrefixSuffix(var_core_value_sig5CEE, var_core_value_sigE92A, {
        mode: var_core_value_sigE68A[var_core_value_sig362B(312)]
      })) ?? false;
    }
    setStartNumber(var_core_value_sigE90F) {
      var var_core_value_sigEFD4 = ox22162f,
        var_core_value_sig861B;
      return ((var_core_value_sig861B = this[var_core_value_sigEFD4(313)]()) == null ? undefined : var_core_value_sig861B.setStartNumber(var_core_value_sigE90F, {
        mode: var_core_value_sigE68A[var_core_value_sigEFD4(312)]
      })) ?? false;
    }
    promote() {
      var var_core_value_sig5237 = ox22162f,
        var_core_value_sigBB00;
      return ((var_core_value_sigBB00 = this[var_core_value_sig5237(313)]()) == null ? undefined : var_core_value_sigBB00.promote({
        mode: var_core_value_sigE68A[var_core_value_sig5237(312)]
      })) ?? false;
    }
    demote() {
      var var_core_value_sig7E54 = ox22162f,
        var_core_value_sig9A8D;
      return ((var_core_value_sig9A8D = this._firstItem()) == null ? undefined : var_core_value_sig9A8D[var_core_value_sig7E54(325)]({
        mode: var_core_value_sigE68A[var_core_value_sig7E54(312)]
      })) ?? false;
    }
    _getListItemInfos() {
      return x(this._document["getDocumentDataModel"](this._segmentId).getSnapshot()).filter(var_core_value_sigBC46 => var_core_value_sigBC46.listId === this._listId);
    }
    _firstItem() {
      return this.getItems()[0] ?? null;
    }
  },
  N = class extends var_core_value_sig0C53 {
    getLists(var_core_value_sigC259 = "") {
      let var_core_value_sig9C9F = this.describeListItems(var_core_value_sigC259);
      return Array.from(new Set(var_core_value_sig9C9F.map(var_core_value_sig3D7D => var_core_value_sig3D7D.listId))).map(var_core_value_sig27E5 => this._createFDocumentList(var_core_value_sig27E5, var_core_value_sigC259));
    }
    getList(var_core_value_sigFDEA, var_core_value_sig86D0 = "") {
      return this.describeListItems(var_core_value_sig86D0).some(var_core_value_sig8061 => var_core_value_sig8061.listId === var_core_value_sigFDEA) ? this._createFDocumentList(var_core_value_sigFDEA, var_core_value_sig86D0) : null;
    }
    getListItems(var_core_value_sig4CD2 = "") {
      return this.describeListItems(var_core_value_sig4CD2).map(var_core_value_sig4D4C => this._createFDocumentListItem(var_core_value_sig4D4C.paragraphStartIndex, var_core_value_sig4CD2));
    }
    getListItem(var_core_value_sig48CA, var_core_value_sig50AF = "") {
      return this.describeListItems(var_core_value_sig50AF).some(var_core_value_sigC9E0 => var_core_value_sigC9E0.paragraphStartIndex === var_core_value_sig48CA) ? this._createFDocumentListItem(var_core_value_sig48CA, var_core_value_sig50AF) : null;
    }
    getListItemAt(var_core_value_sigA942, var_core_value_sigA621 = "") {
      let var_core_value_sigBBFF = w(this.getDocumentDataModel(var_core_value_sigA621).getSnapshot(), var_core_value_sigA942);
      return var_core_value_sigBBFF != null && var_core_value_sigBBFF.bullet ? this._createFDocumentListItem(var_core_value_sigBBFF.startIndex, var_core_value_sigA621) : null;
    }
    findListItemByText(var_core_value_sig8889, var_core_value_sig32F8 = "") {
      return this.findListItems(var_core_value_sig8889, var_core_value_sig32F8)[0] ?? null;
    }
    findListItems(var_core_value_sig5B67, var_core_value_sig1758 = "") {
      let var_core_value_sig4805 = typeof var_core_value_sig5B67 == "string" ? {
        text: var_core_value_sig5B67
      } : var_core_value_sig5B67;
      return this.getListItems(var_core_value_sig1758).filter(var_core_value_sig76BA => {
        let var_core_value_sigFBFA = var_core_value_sig76BA.describe();
        return !(!var_core_value_sigFBFA || var_core_value_sig4805.listId && var_core_value_sigFBFA.listId !== var_core_value_sig4805.listId || var_core_value_sig4805.paragraphStartIndex != null && var_core_value_sigFBFA.paragraphStartIndex !== var_core_value_sig4805.paragraphStartIndex || var_core_value_sig4805.nestingLevel != null && var_core_value_sigFBFA.nestingLevel !== var_core_value_sig4805.nestingLevel || var_core_value_sig4805.text && !var_core_value_sigFBFA.text["includes"](var_core_value_sig4805.text));
      });
    }
    describeListItems(var_core_value_sigE67E = "") {
      return x(this.getDocumentDataModel(var_core_value_sigE67E).getSnapshot());
    }
    insertList(var_core_value_sig2902 = {}, var_core_value_sig9989 = {}) {
      let var_core_value_sig698E = this._injector["get"](var_core_value_sigA6F6),
        var_core_value_sig2809 = var_core_value_sigEA04(var_core_value_sig2902) ? {
          ...var_core_value_sig9989,
          ...var_core_value_sig2902.getRange(),
          segmentId: var_core_value_sig2902.getSegmentId()
        } : var_core_value_sig2902,
        var_core_value_sig2DAB = var_core_value_sig2809.listId ?? var_core_value_sig21B2(6),
        var_core_value_sig877E = var_core_value_sig2809.segmentId ?? "";
      return var_core_value_sig698E.syncExecuteCommand(var_core_value_sig34C8.id, {
        ...var_core_value_sig2809,
        listType: var_core_value_sig2809.listType ?? var_core_value_sig74A8.BULLET_LIST,
        listId: var_core_value_sig2DAB,
        segmentId: var_core_value_sig877E,
        unitId: this.getId()
      }) ? this.getList(var_core_value_sig2DAB, var_core_value_sig877E) : null;
    }
    setBullet(var_core_value_sig20C8, var_core_value_sigE9A7 = {}) {
      return this.insertList(var_core_value_sig20C8, {
        ...var_core_value_sigE9A7,
        listType: var_core_value_sig74A8.BULLET_LIST
      });
    }
    setOrderedList(var_core_value_sigBECE, var_core_value_sig1B22 = {}) {
      return this.insertList(var_core_value_sigBECE, {
        ...var_core_value_sig1B22,
        listType: var_core_value_sig74A8.ORDER_LIST
      });
    }
    _createFDocumentList(var_core_value_sig7F72, var_core_value_sig7B2A = "") {
      return this._injector["createInstance"](M, this, var_core_value_sig7F72, var_core_value_sig7B2A, this._injector);
    }
    _createFDocumentListItem(var_core_value_sig06CD, var_core_value_sigA5F1 = "") {
      return this._injector["createInstance"](j, this, var_core_value_sig06CD, var_core_value_sigA5F1, this._injector);
    }
  };
var_core_value_sig0C53.extend(N);
export { M as FDocumentList, j as FDocumentListItem };
