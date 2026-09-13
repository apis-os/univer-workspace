import { DOCS_LATEX_CUSTOM_RANGE_KIND, DocsLatexModel, InsertDocsLatexFormulaCommand, RemoveDocsLatexFormulaCommand, ReplaceDocsLatexFormulaWithTextCommand, UpdateDocsLatexFormulaCommand, getFormulaLatexFromRange, isDocsLatexFormulaRange, normalizeDocsLatexFormulaConfig } from "@univerjs-pro/docs-latex";
import { CustomRangeType, ICommandService, Inject, RichTextBuilder, RichTextValue, generateRandomId, getParagraphContentStartOffset } from "@univerjs/core";
import { FDocument, FDocumentParagraph, FDocumentTextRange } from "@univerjs/docs/facade";
import { S, T } from "./facade-docs-latex-fdocument-latex.js";
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200);
  };
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
}
T = w([C(3, ICommandService), C(4, Inject(DocsLatexModel))], T);
var E = class extends FDocument {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654), S(this, "_docsLatexCommandService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    this._docsLatexCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.get(ICommandService);
  }
  getLatexFormulas(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = "") {
    return this._getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658));
  }
  getLatexFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = "") {
    return this._getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) ? this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) : null;
  }
  getLatexFormulaAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = "") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = this._getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.endIndex);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 ? this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) : null;
  }
  findLatexFormulaByText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = "") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => this._getLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 ? this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) : null;
  }
  findLatexFormulas(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = "") {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 == "string" ? {
      latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676;
    return this._getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => !(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.rangeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.rangeId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.rangeId || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.latex && !this._getLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677).includes(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.latex))).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677));
  }
  insertLatexAtOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = {}) {
    return this._insertLatexFormula({
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
      latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681,
      properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.properties,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.segmentId,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680,
      unitId: this.getId()
    });
  }
  insertLatexAtSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = {}) {
    return this._insertLatexFormula({
      latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
      properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.properties,
      unitId: this.getId()
    });
  }
  _insertLatexFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = this._docsLatexCommandService["syncExecuteCommand"](InsertDocsLatexFormulaCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 ? this._createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.segmentId) : null;
  }
  _getLatexRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = this.getBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694).customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.filter(isDocsLatexFormulaRange)) ?? [];
  }
  _createFDocumentLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) {
    return this._injector["createInstance"](T, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699);
  }
  _getLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
    return getFormulaLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, this.getBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103).dataStream);
  }
};
FDocument.extend(E);
var D = class extends FDocumentParagraph {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106), S(this, "_docsLatexCommandService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
    this._docsLatexCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.get(ICommandService);
  }
  appendLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = {}) {
    let {
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112
    } = this.getInfo();
    return this._insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
  }
  prependLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = {}) {
    let {
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118
    } = this.getInfo();
    return this._insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
  }
  _insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 = this.getSegmentId(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122,
        latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123,
        properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.properties,
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125,
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122,
        unitId: this._document["getId"]()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = this._docsLatexCommandService["syncExecuteCommand"](InsertDocsLatexFormulaCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 ? this._injector["createInstance"](T, this._document, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.segmentId) : null;
  }
};
FDocumentParagraph.extend(D);
var O = class extends FDocumentTextRange {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132), S(this, "_docsLatexCommandService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) {
    this._docsLatexCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.get(ICommandService);
  }
  replaceWithLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = {}) {
    let {
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = "",
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
    } = this.getRange();
    return this._insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137);
  }
  insertLatexBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = {}) {
    let {
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = "",
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148
    } = this.getRange();
    return this._insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147);
  }
  insertLatexAfter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = {}) {
    let {
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = ""
    } = this.getRange();
    return this._insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155);
  }
  _insertLatex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,
        latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165,
        properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.properties,
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164,
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162,
        unitId: this._document["getId"]()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = this._docsLatexCommandService["syncExecuteCommand"](InsertDocsLatexFormulaCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 ? this._injector["createInstance"](T, this._document, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.segmentId) : null;
  }
};
FDocumentTextRange.extend(O);
var k = class extends RichTextBuilder {
  latex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = {}) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.trim();
    if (!var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB) return this;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.rangeId) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.trim()) || generateRandomId();
    return this.insertRichText(RichTextValue.create({
      id: "d",
      documentStyle: {},
      body: {
        dataStream: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        customRanges: [{
          startIndex: 0,
          endIndex: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB.length - 1,
          rangeId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
          rangeType: CustomRangeType.CUSTOM,
          wholeEntity: true,
          properties: {
            kind: DOCS_LATEX_CUSTOM_RANGE_KIND
          }
        }]
      }
    }));
  }
};
RichTextBuilder.extend(k);
