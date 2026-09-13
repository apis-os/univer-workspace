import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, E, O, Xe } from "./internal-core-endo.js";
import { je } from "./docs-table-merge-cells.js";
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990);
  if (!je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.tableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991)) throw Error("[DocsTable]: Cannot merge a non-rectangular or already merged selection.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993 = Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.tableId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startRow].tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startColumn];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.rowSpan = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startRow + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.columnSpan = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startColumn + 1, A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) => {
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startRow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.startColumn) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.rowSpan = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.columnSpan = 0);
  }), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992,
    range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991
  };
}
export { Ne as buildMergeCellsActions };
