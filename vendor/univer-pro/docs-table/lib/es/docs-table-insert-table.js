import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { N, z } from "./internal-core-endo.js";
import { Ir } from "./docs-table-insert-rows.js";
import { J } from "./docs-table-model.js";
import { W } from "./docs-table-table-action-body-path.js";
import { U } from "./docs-table-execute-rich-text-table-actions.js";
var Ur = class extends Error {
  constructor() {
    super("Table\x20can\x20only\x20be\x20inserted\x20in\x20a\x20normal\x20paragraph\x20area");
  }
};
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807 = ["body"]) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.documentData["body"] ?? qr(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811 = Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811.length,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D212 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808.length) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813 = Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806);
  Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814 = Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.documentData["body"] ? Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807) : JSONX.getInstance().insertOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807, Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 = li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462812, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D212),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817 = JSONX.getInstance().insertOp(["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.tableId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.metadata),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819 = mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.tableId] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819), {
    actions: JSONX.compose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817),
    cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462813 + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462814.tables) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.tableId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809.startIndex) ?? 0) + 3,
    nextMetadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818,
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806.tableId
  };
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838 = si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839 = oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838, ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834)),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837) ? DataStreamTreeTokenType.PARAGRAPH : "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462840 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84 ? ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837) : undefined,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 = ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462837) ? DataStreamTreeTokenType.PARAGRAPH : "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84.length,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839.dataStream["length"];
  return {
    dataStream: [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839.dataStream, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85].join(""),
    paragraphs: [...ii(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB84, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462840), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839.paragraphs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841
    })), ...ai(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462838)],
    sectionBreaks: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839.sectionBreaks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841
    })),
    tables: [{
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841,
      endIndex: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835.tableId
    }]
  };
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853 = new TextX();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853.retain(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853.insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850.dataStream["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850), JSONX.getInstance().editOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462853.serialize(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852);
}
function qr() {
  return {
    dataStream: DataStreamTreeTokenType.SECTION_BREAK,
    paragraphs: [],
    sectionBreaks: [{
      sectionId: createSectionId(new Set()),
      startIndex: 0
    }],
    tables: []
  };
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462860 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858.dataStream["length"];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858,
    dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858.dataStream + DataStreamTreeTokenType.SECTION_BREAK,
    sectionBreaks: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858.sectionBreaks ?? []), {
      sectionId: createSectionId(new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462858.sectionBreaks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717.sectionId))),
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462860
    }]
  };
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864.rows ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864.values) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865.length) ?? 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864.values ?? []) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718.length);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D216 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864.columns ?? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215 || 1));
  return Array.from({
    length: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720) => Array.from({
    length: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D216
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462864.values) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125]) ?? "";
  }));
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869.offset == "number" ? Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869.offset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.dataStream["length"])) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.dataStream["endsWith"](DataStreamTreeTokenType.SECTION_BREAK) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.dataStream["length"] - 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.dataStream["length"];
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873) {
  if (Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872.tables, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873) || fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872.blockRanges, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873) || ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872.customBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873)) throw new Ur();
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462877) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 => containsInteriorInsertionOffset(getTableRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462877)));
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462880.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722 => containsInteriorInsertionOffset(getBlockRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462881)));
}
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462885) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462884 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462884.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723.startIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462885));
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462888, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462888.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889 - 1] !== DataStreamTreeTokenType.PARAGRAPH;
}
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462893) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462892.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462893] !== DataStreamTreeTokenType.PARAGRAPH;
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 => getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724) < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724.startIndex);
}
function ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462903) return [];
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462902,
    paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462904)
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905.bullet && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.bullet = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905.bullet)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905.paragraphStyle && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.paragraphStyle = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905.paragraphStyle), delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.paragraphStyle["borderBottom"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905.paragraphStyle["headingId"] && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.paragraphStyle["headingId"] = generateRandomId(6))), [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21];
}
function ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911 ? [{
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462910,
    paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912)
  }] : [];
}
function oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462918) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 = DataStreamTreeTokenType.TABLE_START,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462916.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 += DataStreamTreeTokenType.TABLE_ROW_START, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 += "" + DataStreamTreeTokenType.TABLE_CELL_START + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 + DataStreamTreeTokenType.PARAGRAPH + DataStreamTreeTokenType.SECTION_BREAK + DataStreamTreeTokenType.TABLE_CELL_END, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74.push({
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919.length - 3,
        paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917)
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75.push({
        sectionId: createSectionId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462918),
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919.length - 2
      });
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 += DataStreamTreeTokenType.TABLE_ROW_END;
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 += DataStreamTreeTokenType.TABLE_END, {
    dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919,
    paragraphs: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74,
    sectionBreaks: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75
  };
}
function si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462924) {
  return new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462924.paragraphs ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.paragraphId));
}
function ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926) {
  return new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926.sectionBreaks ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.sectionId));
}
function li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462930) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462930);
  return {
    tableRows: Array.from({
      length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462929
    }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730) => ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462930)),
    tableColumns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 => fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731)),
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928.tableId,
    align: TableAlignmentType.START,
    indent: {
      v: 0
    },
    textWrap: TableTextWrapType.NONE,
    position: {
      positionH: {
        relativeFrom: ObjectRelativeFromH.PAGE,
        posOffset: 0
      },
      positionV: {
        relativeFrom: ObjectRelativeFromV.PAGE,
        posOffset: 0
      }
    },
    dist: {
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    },
    size: {
      type: TableSizeType.SPECIFIED,
      width: {
        v: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928.width ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733, 0)
      }
    },
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928.cellMargin == null ? {} : {
      cellMargin: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462928.cellMargin)
    })
  };
}
function ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939;
  return {
    tableCells: Array.from({
      length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938
    }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735) => di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462938)),
    trHeight: {
      val: {
        v: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462936.rowHeights) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937]) ?? 30
      },
      hRule: TableRowHeightRule.AT_LEAST
    },
    repeatHeaderRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462937 < (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462936.headerRowCount ?? 0) ? BooleanNumber.TRUE : BooleanNumber.FALSE
  };
}
function di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462944.titleRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945 === 0;
  return {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462944.cellMargin == null ? {
      margin: Tools.deepClone(Ir)
    } : {}),
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946 === 0 ? {
      columnSpan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947
    } : {}),
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946 > 0 ? {
      rowSpan: 0,
      columnSpan: 0
    } : {})
  };
}
function fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462952) {
  return {
    size: {
      type: TableSizeType.SPECIFIED,
      width: {
        v: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462952
      }
    }
  };
}
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462954.width ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462954.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955 : 100;
  return Array.from({
    length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462954.columnWidths) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737]) ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220;
  });
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.titleRow != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.headerRowCount != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.columnTypes != null) return {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.titleRow == null ? {} : {
      titleRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.titleRow
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.headerRowCount == null ? {} : {
      headerRowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.headerRowCount
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.columnTypes == null ? {} : {
      columnTypes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462958.columnTypes
    })
  };
}
const hi = {
  id: "docs-table.command.insert-table",
  type: CommandType.COMMAND,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462962 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462960.get(IUniverInstanceService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462960.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462960.get(J),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961.unitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462962.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961.unitId, UniverInstanceType.UNIVER_DOC) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462962.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462966 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965.getSnapshot(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462967 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961.tableId) ?? generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968 = gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968.segmentId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786) return false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969 = Wr({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968,
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786,
        metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964.serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965.getUnitId()),
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462967
      }, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968.segmentId));
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      if (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 instanceof Ur) return false;
      throw var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462968.segmentId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.actions, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.cursorOffset, hi.id);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964.deserialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.nextMetadata), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971;
  }
};
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462986) {
  let {
    offset: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23,
    position: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24,
    segmentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462986 ?? {};
  if (typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 == "number") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 = fn_L0_core_endo_routine_pure_O1_zalloc_orNull_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984);
    return {
      offset: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23,
      position: "offset",
      segmentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.segmentId)
    };
  }
  if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 === "selection") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 = getContentInsertRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 = fn_L0_core_endo_routine_pure_O1_zalloc_orNull_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.segmentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.startOffset) != null) return {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.startOffset,
      position: "offset",
      segmentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.segmentId
    };
  }
  if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 === "offset") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 = getContentInsertRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 = fn_L0_core_endo_routine_pure_O1_zalloc_orNull_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462984),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.startOffset) != null) return {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.startOffset,
      position: "offset",
      segmentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.segmentId
    };
  }
  return {
    position: "documentEnd",
    segmentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_orNull_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462990) {
  try {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462992;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462991 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462990.get(DocSelectionManagerService)).getActiveTextRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462991.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462992);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 ? {
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.startOffset,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.segmentId
    } : null;
  } catch {
    return null;
  }
}
export { hi as DocsTableInsertTableCommand };
