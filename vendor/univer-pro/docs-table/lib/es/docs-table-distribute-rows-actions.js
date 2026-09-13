import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E } from "./internal-core-endo.js";
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647) throw Error("[DocsTable]: Table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.tableId + " is not found.");
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.endRow),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.endRow),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647.tableRows["slice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 + 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 + fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365), 0) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648.length;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.trHeight = {
      hRule: TableRowHeightRule.AT_LEAST,
      val: {
        v: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114
      }
    };
  }), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646
  };
}
function fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.trHeight) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.val) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785.v) ?? 0;
}
export { Qt as buildDistributeRowsActions };
