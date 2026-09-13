import { DocsListDemoteCommand, DocsListInsertCommand, DocsListPromoteCommand, DocsListSelectCommand, DocsListSelectionMode, DocsListSetGlyphSymbolCommand, DocsListSetGlyphTypeCommand, DocsListSetPrefixSuffixCommand, DocsListSetStartNumberCommand } from "@univerjs-pro/docs-list";
import { DataStreamTreeTokenType, ICommandService, ListGlyphType, PRESET_LIST_TYPE, PresetListType, generateRandomId, getParagraphContentStartOffset, getParagraphContentStartOffsets } from "@univerjs/core";
import { FEnum } from "@univerjs/core/facade";
import { FDocument, isParagraphFacade } from "@univerjs/docs/facade";
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.body,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.paragraphs) ?? [],
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.dataStream) ?? "",
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 ? getParagraphContentStartOffsets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) : new Map();
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.bullet).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59));
}
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = ox22162f,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168(317)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167]) ?? PRESET_LIST_TYPE[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167];
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = ox22162f,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176(260)];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176(339)])) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176(266)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176(266)]];
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.body,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.paragraphs) ?? [];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = getParagraphContentStartOffsets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.startIndex) ?? 0) <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.startIndex);
}
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.bullet,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.startIndex) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.body ? getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194) : 0);
  return {
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.startIndex,
    glyphFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.glyphFormat,
    glyphSymbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.glyphSymbol,
    glyphType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.glyphType,
    listId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.listId,
    listType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.listType,
    nestingLevel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.nestingLevel,
    ordered: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.glyphType !== ListGlyphType.BULLET && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.glyphSymbol),
    paragraphStartIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.startIndex,
    startNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.startNumber,
    startOffset: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
    text: E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.startIndex))
  };
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 !== DataStreamTreeTokenType.SECTION_BREAK).join("");
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) {
  "@babel/helpers - typeof";

  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620;
  }, D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206);
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
  if (D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 || "default");
    if (D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208);
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = ox22162f,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217(328));
  return D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217(272) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 + "";
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222;
}
var j = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
      this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, this._paragraphStartIndex = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, this._segmentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, A(this, "_unitId", undefined), this._unitId = this._document["getId"]();
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
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630(262)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630(255)]) ?? "";
    }
    isOrdered() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(262)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(338)]) ?? false;
    }
    isUnordered() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = this._info();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.ordered : false;
    }
    select(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = DocsListSelectionMode.Item) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListSelectCommand.id, {
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
        mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640
      });
    }
    setGlyphType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListSetGlyphTypeCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
        glyphType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setGlyphSymbol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListSetGlyphSymbolCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
        symbol: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setPrefixSuffix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListSetPrefixSuffixCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
        prefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
        suffix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    setStartNumber(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListSetStartNumberCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657,
        startNumber: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656,
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
    promote(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListPromoteCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    demote(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = {}) {
      return this._injector["get"](ICommandService).syncExecuteCommand(DocsListDemoteCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId
      });
    }
    _info() {
      return x(this._document["getDocumentDataModel"](this._segmentId).getSnapshot()).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.paragraphStartIndex === this._paragraphStartIndex) ?? null;
    }
  },
  M = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
      this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, this._listId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, this._segmentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
    }
    getId() {
      return this._listId;
    }
    getSegmentId() {
      return this._segmentId;
    }
    getItems() {
      return this._getListItemInfos().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => this._injector["createInstance"](j, this._document, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.paragraphStartIndex, this._segmentId, this._injector));
    }
    describe() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._getListItemInfos();
      return {
        itemCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.length,
        items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
        listId: this._listId
      };
    }
    hasOrderedItems() {
      return this._getListItemInfos().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.ordered);
    }
    hasUnorderedItems() {
      return this._getListItemInfos().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.ordered);
    }
    isMixed() {
      return this.hasOrderedItems() && this.hasUnorderedItems();
    }
    setGlyphType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(313)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(268)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, {
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(312)]
      })) ?? false;
    }
    setGlyphSymbol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681(313)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681(326)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, {
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681(312)]
      })) ?? false;
    }
    setPrefixSuffix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688(313)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.setPrefixSuffix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, {
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688(312)]
      })) ?? false;
    }
    setStartNumber(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695(313)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setStartNumber(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, {
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695(312)]
      })) ?? false;
    }
    promote() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100(313)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.promote({
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100(312)]
      })) ?? false;
    }
    demote() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = ox22162f,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = this._firstItem()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104(325)]({
        mode: DocsListSelectionMode[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104(312)]
      })) ?? false;
    }
    _getListItemInfos() {
      return x(this._document["getDocumentDataModel"](this._segmentId).getSnapshot()).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.listId === this._listId);
    }
    _firstItem() {
      return this.getItems()[0] ?? null;
    }
  },
  N = class extends FDocument {
    getLists(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = "") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = this.describeListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108);
      return Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.listId))).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => this._createFDocumentList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108));
    }
    getList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = "") {
      return this.describeListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.listId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) ? this._createFDocumentList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) : null;
    }
    getListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = "") {
      return this.describeListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => this._createFDocumentListItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.paragraphStartIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116));
    }
    getListItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = "") {
      return this.describeListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.paragraphStartIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) ? this._createFDocumentListItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119) : null;
    }
    getListItemAt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = "") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = w(this.getDocumentDataModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123).getSnapshot(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.bullet ? this._createFDocumentListItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) : null;
    }
    findListItemByText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = "") {
      return this.findListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129)[0] ?? null;
    }
    findListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = "") {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 == "string" ? {
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
      return this.getListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.describe();
        return !(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.listId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.listId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.listId || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.paragraphStartIndex != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.paragraphStartIndex !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.paragraphStartIndex || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.nestingLevel != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.nestingLevel !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.nestingLevel || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.text && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.text["includes"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.text));
      });
    }
    describeListItems(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = "") {
      return x(this.getDocumentDataModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136).getSnapshot());
    }
    insertList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = {}) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = this._injector["get"](ICommandService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = isParagraphFacade(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.getRange(),
          segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.getSegmentId()
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.listId ?? generateRandomId(6),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.segmentId ?? "";
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.syncExecuteCommand(DocsListInsertCommand.id, {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2,
        listType: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.listType ?? PresetListType.BULLET_LIST,
        listId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141,
        segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        unitId: this.getId()
      }) ? this.getList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB) : null;
    }
    setBullet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = {}) {
      return this.insertList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
        listType: PresetListType.BULLET_LIST
      });
    }
    setOrderedList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = {}) {
      return this.insertList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151,
        listType: PresetListType.ORDER_LIST
      });
    }
    _createFDocumentList(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = "") {
      return this._injector["createInstance"](M, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, this._injector);
    }
    _createFDocumentListItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = "") {
      return this._injector["createInstance"](j, this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, this._injector);
    }
  };
export { j as FDocumentListItem, M as FDocumentList };
export { N };
