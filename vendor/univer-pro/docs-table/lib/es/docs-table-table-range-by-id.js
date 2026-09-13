import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864.tables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.dataStream;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 = getTableRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.startOffset] !== DataStreamTreeTokenType.TABLE_START || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.endOffset - 1] !== DataStreamTreeTokenType.TABLE_END ? null : xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.endOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868);
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = [];
  for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 - 1;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = getTableRowTokenInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.endOffset > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
      row: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.length,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.startOffset,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.endOffset - 1,
      cells: []
    };
    for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.startOffset + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.endOffset - 1;) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = getTableCellTokenInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.endOffset > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.endOffset) return null;
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.cells["push"]({
        row: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.row,
        column: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.cells["length"],
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.startOffset,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.endOffset - 1
      }), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.endOffset;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.endOffset;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.tableRows["length"] || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.some((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.cells["length"] !== ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.tableCells["length"]);
  }) ? null : {
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893,
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892,
    rowCount: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.length,
    columnCount: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.cells["length"]) ?? 0,
    tableSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894,
    rows: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22
  };
}
export { w as getTableRangeById };
