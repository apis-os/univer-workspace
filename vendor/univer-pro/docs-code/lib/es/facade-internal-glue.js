import { DocsCodeInsertCommand, DocsCodeModel, DocsCodeRemoveCommand, DocsCodeUnwrapCommand, DocsCodeUpdateCommand, normalizeDocsCodeConfig } from "@univerjs-pro/docs-code";
import { DataStreamTreeTokenType, DocumentBlockRangeType, ICommandService, Inject, Injector, generateRandomId } from "@univerjs/core";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
import { b } from "./facade-docs-code-fdocument-code.js";
;
;
;
;
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);
  };
}
;
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = ox3804,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = arguments[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(392)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(420)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697;
  if (typeof Reflect == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(374) && typeof Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(364)] == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(387)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 && Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(404)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696;
}
b = y([v(2, Inject(Injector))], b);
var S = class extends FDocument {
  getCodes() {
    return this._getBlockRanges().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.blockType === DocumentBlockRangeType.CODE).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._createFDocumentCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.blockId));
  }
  getCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    return this._getBlockRanges().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockType === DocumentBlockRangeType.CODE) ? this._createFDocumentCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) : null;
  }
  getCodeAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = this._getBlockRanges().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.blockType === DocumentBlockRangeType.CODE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.endIndex);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 ? this._createFDocumentCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.blockId) : null;
  }
  findCodeByText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    return this.findCodes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646)[0] ?? null;
  }
  findCodes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 == "string" ? {
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
    return this.getCodes().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => !(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.blockId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.getId() !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.blockId || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.text && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.getText().includes(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.text)));
  }
  insertCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = this._injector["get"](ICommandService),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = isParagraphFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650) ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.getRange()
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.blockId ?? generateRandomId(6);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.syncExecuteCommand(DocsCodeInsertCommand.id, {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653,
      unitId: this.getId()
    }) ? this.getCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) : null;
  }
  _getBlockRanges() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = ox4a008e,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658(379)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658(426)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.blockRanges) ?? [];
  }
  _createFDocumentCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) {
    return this._injector["createInstance"](b, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662);
  }
};
FDocument.extend(S);
