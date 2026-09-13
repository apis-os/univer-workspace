import { DocsCodeInsertCommand, DocsCodeModel, DocsCodeRemoveCommand, DocsCodeUnwrapCommand, DocsCodeUpdateCommand, normalizeDocsCodeConfig } from "@univerjs-pro/docs-code";
import { DataStreamTreeTokenType, DocumentBlockRangeType, ICommandService, Inject, Injector, generateRandomId } from "@univerjs/core";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
function m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) {
  "@babel/helpers - typeof";

  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468;
  }, m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);
}
function h(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
  if (m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 || "default");
    if (m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
}
function g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = ox3804,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = h(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(365));
  return m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(414) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 + "";
}
function fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
}
let b = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, this._blockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F(this, "_unitId", undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = this._getBlockRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 ? {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.blockId,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.endIndex,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.startIndex
    } : null;
  }
  getText() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = ox4a008e,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(366)](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(385)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(426)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.dataStream;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 ? "" : x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(386)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(389)] + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622(397)]));
  }
  describe() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = this.getRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
      config: this.getConfig(),
      text: this.getText(),
      type: DocumentBlockRangeType.CODE
    } : null;
  }
  getConfig() {
    return normalizeDocsCodeConfig(this._injector["get"](DocsCodeModel).getCodeConfig(this._unitId, this._blockId));
  }
  updateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) {
    return this._injector["get"](ICommandService).syncExecuteCommand(DocsCodeUpdateCommand.id, {
      blockId: this._blockId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.config,
      unitId: this._unitId
    });
  }
  unwrap() {
    return this._injector["get"](ICommandService).syncExecuteCommand(DocsCodeUnwrapCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._injector["get"](ICommandService).syncExecuteCommand(DocsCodeRemoveCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = ox4a008e,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(385)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(426)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(399)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(372)] === this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(370)] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(378)] === DocumentBlockRangeType[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(429)])) ?? null;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
};
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 === DataStreamTreeTokenType.PARAGRAPH ? "\x0a" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 !== DataStreamTreeTokenType.BLOCK_END && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 !== DataStreamTreeTokenType.SECTION_BREAK).join("").replace(/\n$/, "");
}
export { b as FDocumentCode };
