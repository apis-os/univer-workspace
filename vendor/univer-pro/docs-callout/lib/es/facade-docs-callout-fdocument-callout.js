import { DEFAULT_CALLOUT_CONFIG, DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN, DOCS_CALLOUT_BORDER_COLOR_TOKEN, DocsCalloutDeleteCommand, DocsCalloutInsertCommand, DocsCalloutModel, DocsCalloutSetTextColorCommand, DocsCalloutUnwrapCommand, DocsCalloutUpdateCommand } from "@univerjs-pro/docs-callout";
import { DEFAULT_STYLES, DataStreamTreeTokenType, DocumentBlockRangeType, ICommandService, Inject, ThemeService, generateRandomId } from "@univerjs/core";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
  "@babel/helpers - typeof";

  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468;
  }, v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
}
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
  if (v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 || "default");
    if (v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687);
}
function b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = ox13d0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696(269));
  return v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696(286) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 + "";
}
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101;
}
let w = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, this._blockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, this._docsCalloutModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, x(this, "_unitId", undefined), this._unitId = this._document["getId"]();
  }
  getId() {
    return this._blockId;
  }
  getRange() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = this._getBlockRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 ? {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.blockId,
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.endIndex,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.startIndex
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
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = this._getBlockRange();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 ? {
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.blockId,
      config: this._getConfig(),
      endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.endIndex,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.startIndex,
      style: this._getStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626),
      text: this._getText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626),
      type: DocumentBlockRangeType.CALLOUT
    } : null;
  }
  updateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) {
    return this._updateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628);
  }
  setBackgroundColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) {
    return this._updateConfig({
      backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630
    });
  }
  setBorder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.color == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.opacity == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.style == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.width == null) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.color != null && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.borderColor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.color), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.style != null && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.borderStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.style), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.opacity != null && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.borderOpacity = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.opacity), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.width != null && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.borderWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.width), this._updateConfig(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
  }
  setTextColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
    return this._commandService["syncExecuteCommand"](DocsCalloutSetTextColorCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634
    });
  }
  resetTextColor() {
    return this._commandService["syncExecuteCommand"](DocsCalloutSetTextColorCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId,
      value: null
    });
  }
  setIcon(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    return this._updateConfig({
      icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      showIcon: true
    });
  }
  setIconVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) {
    return this._updateConfig({
      showIcon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638
    });
  }
  unwrap() {
    return this._commandService["syncExecuteCommand"](DocsCalloutUnwrapCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](DocsCalloutDeleteCommand.id, {
      blockId: this._blockId,
      unitId: this._unitId
    });
  }
  _getBlockRange() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = ox177107,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = this._getDocumentData()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(297)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(287)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(254)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(291)] === this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640(275)] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.blockType === DocumentBlockRangeType.CALLOUT)) ?? null;
  }
  _getConfig() {
    return this._docsCalloutModel["getCalloutConfig"](this._unitId, this._blockId) ?? DEFAULT_CALLOUT_CONFIG;
  }
  _getDocumentData() {
    return this._document["save"]();
  }
  _getStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = this._getConfig();
    return {
      backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.backgroundColor || this._themeService["getColorFromTheme"](DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN),
      border: {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.borderColor || this._themeService["getColorFromTheme"](DOCS_CALLOUT_BORDER_COLOR_TOKEN),
        opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.borderOpacity,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.borderStyle,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.borderWidth
      },
      textColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 ? T(this._getDocumentData(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) : DEFAULT_STYLES.cl["rgb"]
    };
  }
  _getText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = ox177107,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649(304)]()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649(297)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649(265)];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 ? "" : E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649(293)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649(246)] + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.endIndex));
  }
  _updateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    return this._commandService["syncExecuteCommand"](DocsCalloutUpdateCommand.id, {
      blockId: this._blockId,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656,
      unitId: this._unitId
    });
  }
};
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = ox177107,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(297)]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.textRuns) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(254)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(246)] + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.st < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(231)])) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.ts) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(271)]) ?? DEFAULT_STYLES.cl[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129(271)];
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 === DataStreamTreeTokenType.PARAGRAPH ? "\x0a" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 !== DataStreamTreeTokenType.BLOCK_END && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 !== DataStreamTreeTokenType.SECTION_BREAK).join("").replace(/\n$/, "");
}
export { w as FDocumentCallout };
