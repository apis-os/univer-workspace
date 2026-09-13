import { ColumnLayoutType, ColumnResponsiveType, CommandType, DataStreamTreeTokenType, DependentOn, DocumentFlavor, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getColumnGroupRangeInterval, getTableRangeInterval, merge, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, consumeContentInsertRange } from "@univerjs/docs";
import { getDocsTableRenderViewport } from "@univerjs/engine-render";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, Ce, M, be, st } from "./internal-core-endo.js";
import { O } from "./docs-column-column-data-stream-tree-token-type.js";
function he(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.documentData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.offset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.dataStream["length"]));
  if (!Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423)) throw Error("[DocsColumn]: Column groups can only be inserted in modern documents.");
  if (!M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48)) throw Error("[DocsColumn]: Cannot insert a column group inside table, column group, or document block ranges.");
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = Math.max(2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.columnCount ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.columnIds["length"]);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 > 5) throw Error("[DocsColumn]: Cannot create more than five columns.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.columnIds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = ye(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49, xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424), be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.dataStream,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.columnGroupEndIndex;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.dataStream = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.dataStream["slice"](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.dataStream["slice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.paragraphs = [...N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.paragraphs ?? [], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.paragraphs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.startIndex + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.startIndex), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.sectionBreaks = [...N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.sectionBreaks ?? [], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.sectionBreaks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.startIndex + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.startIndex), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.textRuns = we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.textRuns ?? [], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customBlocks = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customBlocks ?? [], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.blockRanges = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.blockRanges ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customRanges = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customRanges ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customDecorations = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.customDecorations ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.tables = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.tables ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => shiftExclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.columnGroups = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.columnGroups ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.length)), {
    startIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48,
    endIndex: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29,
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.columnGroupId,
    columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 => ({
      columnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
      widthRatio: 1
    })),
    gap: {
      v: ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.gap)
    },
    layout: ColumnLayoutType.FIXED,
    responsive: ColumnResponsiveType.STACK
  }].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.startIndex), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423,
    inserted: {
      columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.columnGroupId,
      columnIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425
    }
  };
}
function ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body ??= {
    dataStream: DataStreamTreeTokenType.SECTION_BREAK,
    paragraphs: [],
    sectionBreaks: [{
      sectionId: createSectionId(new Set()),
      startIndex: 0
    }],
    columnGroups: []
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body["dataStream"] ??= DataStreamTreeTokenType.SECTION_BREAK, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body["paragraphs"] ??= [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body["sectionBreaks"] ??= [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body["columnGroups"] ??= [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.body;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) {
  return Array.from({
    length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105] ?? "column-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 + 1));
}
function ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 : 12;
}
function ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = O.COLUMN_GROUP_START,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 += "" + O.COLUMN_START + DataStreamTreeTokenType.PARAGRAPH + O.COLUMN_END, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.length - 2,
    paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443)
  });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 += O.COLUMN_GROUP_END;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.length - 1;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 += DataStreamTreeTokenType.PARAGRAPH, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.length - 1,
    paragraphId: createParagraphId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443)
  })), {
    columnGroupEndIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52,
    dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445,
    paragraphs: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4,
    sectionBreaks: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5
  };
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456) {
  return new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.paragraphs ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.paragraphId));
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107);
}
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.st >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.st + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108);
}
export { he as buildInsertColumnGroupActions };
