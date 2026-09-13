import { ConvertDocFormulaToTextCommand, DocFormulaDisplayTextService, DocFormulaModel, DocFormulaService, InsertDocFormulaCommand, RemoveDocFormulaCommand, ReplaceDocFormulaWithTextCommand, SetDocFormulaNumberFormatCommand, UpdateDocFormulaCommand, isDocFormulaRange } from "@univerjs-pro/docs-formula";
import { ICommandService, IResourceLoaderService, IUniverInstanceService, Inject, UniverInstanceType } from "@univerjs/core";
import { FDocument, FDocumentParagraph, FDocumentTextRange } from "@univerjs/docs/facade";
import { b } from "./facade-docs-formula-fdocument-formula.js";
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121);
  };
}
;
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = ox509a,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = arguments[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(475)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(463)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
  if (typeof Reflect == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(457) && typeof Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(499)] == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(456)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(499)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(475)] - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 && Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(488)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131;
}
b = y([v(2, ICommandService), v(3, Inject(DocFormulaModel)), v(4, Inject(DocFormulaService)), v(5, IUniverInstanceService)], b);
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) {
  "@babel/helpers - typeof";

  return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647;
  }, x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141);
}
;
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) {
  if (x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 || "default");
    if (x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143);
}
;
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = oxa9c9de,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, "string");
  return x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152(491) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 + "";
}
;
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157;
}
var T = class extends FDocument {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649), w(this, "_docsFormulaCommandService", undefined), w(this, "_docsFormulaDisplayTextService", undefined), w(this, "_docsFormulaModel", undefined), w(this, "_docsFormulaResourceLoaderService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    this._docsFormulaCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.get(ICommandService), this._docsFormulaDisplayTextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.get(DocFormulaDisplayTextService), this._docsFormulaModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.get(DocFormulaModel), this._docsFormulaResourceLoaderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.get(IResourceLoaderService);
  }
  getFormulas() {
    return this._getCompleteRanges().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => this._createFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.rangeId));
  }
  getFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
    return this._getCompleteRanges().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) ? this._createFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) : null;
  }
  getFormulaAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = this._getCompleteRanges().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.endIndex);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 ? this._createFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.rangeId) : null;
  }
  saveFormulaDisplayTextSnapshot() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = this._docsFormulaResourceLoaderService["saveUnit"](this.id);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) throw Error("Document " + this.id + " could not be serialized.");
    return this._docsFormulaDisplayTextService["degradeDocumentData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659);
  }
  insertFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    return this._insert({
      externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.externalReferences,
      formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formula,
      numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.numberFormat,
      target: {
        type: "range",
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.startOffset,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.endOffset
      },
      unitId: this.getId()
    });
  }
  _insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = this._docsFormulaCommandService["syncExecuteCommand"](InsertDocFormulaCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 ? this._createFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.rangeId) : null;
  }
  _getCompleteRanges() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = oxa9c9de,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(477)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(525)](this.getId());
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(492)]("")[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(515)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(466)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667(516)]] != null)) ?? [];
  }
  _createFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    return this._injector["createInstance"](b, this.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673);
  }
};
FDocument.extend(T);
var E = class extends FDocumentParagraph {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675), w(this, "_docsFormulaCommandService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) {
    this._docsFormulaCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.get(ICommandService);
  }
  insertFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = {}) {
    return this._insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
  }
  appendFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = {}) {
    return this._insert("end", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);
  }
  _insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
    if (this.getSegmentId()) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.externalReferences,
        formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690,
        numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.numberFormat,
        target: {
          type: "paragraph",
          paragraphId: this.getId(),
          position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689
        },
        unitId: this._document["getId"]()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = this._docsFormulaCommandService["syncExecuteCommand"](InsertDocFormulaCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 ? this._injector["createInstance"](b, this._document["getId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.rangeId) : null;
  }
};
FDocumentParagraph.extend(E);
var D = class extends FDocumentTextRange {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697), w(this, "_docsFormulaCommandService", undefined);
  }
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) {
    this._docsFormulaCommandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.get(ICommandService);
  }
  replaceWithFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = {}) {
    let {
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105
    } = this.getRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 ? null : this._insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102);
  }
  _insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.externalReferences,
        formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.numberFormat,
        target: {
          type: "range",
          startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
          endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112
        },
        unitId: this._document["getId"]()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = this._docsFormulaCommandService["syncExecuteCommand"](InsertDocFormulaCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 ? this._injector["createInstance"](b, this._document["getId"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.rangeId) : null;
  }
};
FDocumentTextRange.extend(D);
