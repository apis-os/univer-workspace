import { ColumnLayoutType, ColumnResponsiveType, CommandType, DataStreamTreeTokenType, DependentOn, DocumentFlavor, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getColumnGroupRangeInterval, getTableRangeInterval, merge, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, consumeContentInsertRange } from "@univerjs/docs";
import { getDocsTableRenderViewport } from "@univerjs/engine-render";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, st } from "./internal-core-endo.js";
import { k } from "./docs-column-column-group-range-by-id.js";
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.documentData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.columnGroupId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.source;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.dataStream) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns)) throw Error("[DocsColumn]: Cannot insert a column into a missing column group.");
  lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.columns["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns["length"]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.columnId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.targetColumnId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 < 0 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806) throw Error("[DocsColumn]: Cannot insert a column next to an unknown target column.");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns["length"] >= 5) throw Error("[DocsColumn]: Cannot add more than five columns.");
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.position === "left" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 + 1,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.position === "left" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.startOffset : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.endOffset + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807 = st(ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.dataStream["length"];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.dataStream = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.dataStream["slice"](0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.dataStream + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.dataStream["slice"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.paragraphs = [...V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.paragraphs ?? [], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.paragraphs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.startIndex + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.startIndex), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.sectionBreaks = [...V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.sectionBreaks ?? [], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.sectionBreaks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191.startIndex + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40
  }))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.startIndex), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.textRuns = ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.textRuns ?? [], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customBlocks = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customBlocks ?? [], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.blockRanges = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.blockRanges ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customRanges = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customRanges ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customDecorations = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.customDecorations ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.tables = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.tables ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 => shiftExclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.columnGroups = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.columnGroups ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 => shiftInclusiveRangeOnInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 = ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.columnGroupId);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809.columns)) throw Error("[DocsColumn]: Cannot update a missing column group after insertion.");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809.columns = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns["slice"](0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39), {
    columnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.columnId,
    widthRatio: 1
  }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.columns["slice"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39)], {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801,
    inserted: {
      columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.columnGroupId,
      columnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800.columnId,
      column: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39
    }
  };
}
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.columnGroups) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.columnGroupId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821);
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828) {
  return new Set((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.paragraphs ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.paragraphId));
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831) throw Error("[DocsColumn]: Cannot edit a column group with mismatched source and stream columns.");
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.startIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.startIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201);
}
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.st >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.st + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.ed > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.ed + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202);
}
export { at as buildInsertColumnActions };
