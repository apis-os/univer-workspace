import { DOCS_QUOTE_LINE_COLOR_TOKEN, DocsQuoteInsertCommand, DocsQuoteRemoveCommand, DocsQuoteUnwrapCommand, DocsQuoteUpdateStyleCommand } from "@univerjs-pro/docs-quote";
import { DEFAULT_STYLES, DataStreamTreeTokenType, DocumentBlockRangeType, ICommandService, Inject, ThemeService, generateRandomId } from "@univerjs/core";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
function m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
  "@babel/helpers - typeof";

  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469;
  }, m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);
}
function h(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
  if (m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 || "default");
    if (m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
}
function g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = ox3175,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = h(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(461));
  return m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 + "";
}
function fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102;
}
let b = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, this._blockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F(this, "_unitId", undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = this._getBlockRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 ? {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.blockId,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.endIndex,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.startIndex
    } : null;
  }
  getText() {
    return this._getText(this._getBlockRange());
  }
  getStyle() {
    return this._getStyle(this._getBlockRange());
  }
  describe() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._getBlockRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 ? {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.blockId,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.endIndex,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.startIndex,
      style: this._getStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625),
      text: this._getText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625),
      type: DocumentBlockRangeType.QUOTE
    } : null;
  }
  setStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) {
    return this._updateStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627);
  }
  setLineColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) {
    return this._updateStyle({
      lineColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629
    });
  }
  setTextColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) {
    return this._updateStyle({
      textColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631
    });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](DocsQuoteUnwrapCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](DocsQuoteRemoveCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = ox3dbff8,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634;
    return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(467)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(490)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(478)]) ?? [])[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(507)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(512)] === this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(501)] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(520)] === DocumentBlockRangeType[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(516)]) ?? null;
  }
  _updateStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637) {
    return this._commandService["syncExecuteCommand"](DocsQuoteUpdateStyleCommand.id, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = ox3dbff8,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) return {
      lineColor: this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(491)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(479)](DOCS_QUOTE_LINE_COLOR_TOKEN),
      textColor: DEFAULT_STYLES.cl[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(503)]
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(467)](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(490)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(511)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(507)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(502)] > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(502)] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(502)] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.endIndex);
    return {
      lineColor: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(521)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(510)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(480)].rgb) ?? this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(491)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(479)](DOCS_QUOTE_LINE_COLOR_TOKEN),
      textColor: x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639)
    };
  }
  _getText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = ox3dbff8,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(467)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(490)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(500)];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 ? "" : S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(515)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.startIndex + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(449)]));
  }
};
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = ox3dbff8,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(490)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(457)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(507)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.startIndex + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.st < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(449)])) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.ts) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(503)]) ?? DEFAULT_STYLES.cl[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130(503)];
}
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 === DataStreamTreeTokenType.PARAGRAPH ? "\x0a" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 !== DataStreamTreeTokenType.BLOCK_END && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 !== DataStreamTreeTokenType.SECTION_BREAK).join("").replace(/\n$/, "");
}
export { b as FDocumentQuote };
