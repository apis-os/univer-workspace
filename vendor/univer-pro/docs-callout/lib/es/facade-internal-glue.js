import { DEFAULT_CALLOUT_CONFIG, DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN, DOCS_CALLOUT_BORDER_COLOR_TOKEN, DocsCalloutDeleteCommand, DocsCalloutInsertCommand, DocsCalloutModel, DocsCalloutSetTextColorCommand, DocsCalloutUnwrapCommand, DocsCalloutUpdateCommand } from "@univerjs-pro/docs-callout";
import { DEFAULT_STYLES, DataStreamTreeTokenType, DocumentBlockRangeType, ICommandService, Inject, ThemeService, generateRandomId } from "@univerjs/core";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
import { w } from "./facade-docs-callout-fdocument-callout.js";
;
;
;
;
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107);
  };
}
;
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = ox13d0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(270)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118;
  if (typeof Reflect == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(244) && typeof Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(264)] == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(274)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(264)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(295)] - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 && Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115(288)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117;
}
w = C([S(2, ICommandService), S(3, Inject(DocsCalloutModel)), S(4, Inject(ThemeService))], w);
;
var D = class extends FDocument {
  getCallouts() {
    return this._getBlockRanges().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.blockType === DocumentBlockRangeType.CALLOUT).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._createFDocumentCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.blockId));
  }
  getCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    return this._getBlockRanges().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.blockType === DocumentBlockRangeType.CALLOUT) ? this._createFDocumentCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) : null;
  }
  getCalloutAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = this._getBlockRanges().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.blockType === DocumentBlockRangeType.CALLOUT && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.startIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.endIndex);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 ? this._createFDocumentCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.blockId) : null;
  }
  findCalloutByText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    return this.findCallouts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667)[0] ?? null;
  }
  findCallouts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 == "string" ? {
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
    return this.getCallouts().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => !(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.blockId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.getId() !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.blockId || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.text && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.getText().includes(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.text)));
  }
  insertCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = this._injector["get"](ICommandService),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = isParagraphFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.getRange()
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.blockId ?? generateRandomId(6);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.syncExecuteCommand(DocsCalloutInsertCommand.id, {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674,
      unitId: this.getId()
    }) ? this.getCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) : null;
  }
  _getBlockRanges() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = ox177107,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679(240)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679(297)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.blockRanges) ?? [];
  }
  _createFDocumentCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) {
    return this._injector["createInstance"](w, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683);
  }
};
FDocument.extend(D);
