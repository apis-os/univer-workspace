import { ColumnLayoutType, ColumnResponsiveType, CommandType, DataStreamTreeTokenType, DependentOn, DocumentFlavor, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getColumnGroupRangeInterval, getTableRangeInterval, merge, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, consumeContentInsertRange } from "@univerjs/docs";
import { getDocsTableRenderViewport } from "@univerjs/engine-render";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { O } from "./docs-column-column-data-stream-tree-token-type.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 } from "./docs-column-plugin.js";
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392,
    body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.body ? pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.body) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.body
  };
}
function pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394,
    paragraphs: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
      bullet: j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.bullet),
      paragraphStyle: j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.paragraphStyle)
    })),
    sectionBreaks: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.sectionBreaks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673
    })),
    textRuns: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.textRuns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674
    })),
    tables: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.tables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675
    })),
    columnGroups: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.columnGroups) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677;
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676,
        columns: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.columns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622))
      };
    }),
    blockRanges: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680
    })),
    customRanges: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681
    })),
    customDecorations: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.customDecorations) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682
    })),
    customBlocks: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.customBlocks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683
    }))
  };
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 => j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684)) : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 != "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 : Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686)]));
}
const me = new Set([DataStreamTreeTokenType.BLOCK_END, O.COLUMN_START, O.COLUMN_END, O.COLUMN_GROUP_END, DataStreamTreeTokenType.TABLE_ROW_START, DataStreamTreeTokenType.TABLE_CELL_START, DataStreamTreeTokenType.TABLE_CELL_END, DataStreamTreeTokenType.TABLE_ROW_END, DataStreamTreeTokenType.TABLE_END]);
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) {
  if (!Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416)) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.body;
  return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.dataStream) || Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417]) ? false : !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.columnGroups ?? []).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 => containsInteriorInsertionOffset(getColumnGroupRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417)) && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.tables ?? []).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 => containsInteriorInsertionOffset(getTableRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417)) && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.blockRanges ?? []).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => containsInteriorInsertionOffset(getBlockRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417));
}
function be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 === DataStreamTreeTokenType.SECTION_BREAK || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 === undefined;
}
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 != null && me.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458);
}
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.documentFlavor) === DocumentFlavor.MODERN;
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826) {
  return {
    dataStream: "" + O.COLUMN_START + DataStreamTreeTokenType.PARAGRAPH + DataStreamTreeTokenType.SECTION_BREAK + O.COLUMN_END,
    paragraphs: [{
      startIndex: 1,
      paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826)
    }],
    sectionBreaks: [{
      sectionId: createSectionId(new Set()),
      startIndex: 2
    }]
  };
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968;
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.skeColumnGroups) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.columns["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = Math.max(0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.width ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page["pageWidth"] ?? 0) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page["marginLeft"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page["marginRight"]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page["marginLeft"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.page["marginTop"], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36);
    });
  });
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.leadingInsetLeft ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.contentWidth + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.trailingInsetRight ?? 0);
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986 != null && bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986.viewportWidth;
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.viewportLeft;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991;
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.includes("#-#") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.split("#-#")[0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998;
}
var gn = "@univerjs-pro/docs-column",
  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65 = "1.0.0-insiders.20260907-70fc579";
function yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288);
  };
}
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297;
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352;
  }, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306);
}
function xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309) {
  if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 || "default");
    if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308);
}
function Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 = xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316, "string");
  return Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 + "";
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 = Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320;
}
Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, "pluginName", "DOCS_COLUMN_PLUGIN"), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, "packageName", gn), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, "version", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB65), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = bn([DependentOn(UniverLicensePlugin, UniverDocsPlugin), yn(1, Inject(Injector)), yn(2, IConfigService), yn(3, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326);
export { A, Ce, M, be, st, vt, Ct, xt, St };
