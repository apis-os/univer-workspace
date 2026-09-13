import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E, vn } from "./internal-core-endo.js";
import { w } from "./docs-table-table-range-by-id.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_Error_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.documentData, {
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.tableId],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.tableId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798.dataStream)) throw Error("[DocsTable]: Table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.tableId + " is not found.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.sortedRowIndexes["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402]);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.tableRows["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.sortStartRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803.length, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"].slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.endOffset),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB50 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.rows["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.sortStartRow).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"].slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.endOffset + 1)).join(""),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.sortedRowIndexes["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"].slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.endOffset + 1);
    }).join(""),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52 = "" + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44[0] + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB50 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.length - 1];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"] = "" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"].slice(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.startOffset) + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.body["dataStream"].slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.endOffset), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800
  };
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_throws_Error_sigD23F1 as buildSortTableActions };
