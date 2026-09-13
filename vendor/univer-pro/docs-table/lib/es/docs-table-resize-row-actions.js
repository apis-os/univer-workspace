import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E } from "./internal-core-endo.js";
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666.tableSource) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.tableId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.row];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667) throw Error("[DocsTable]: Row " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.row + "\x20is\x20not\x20found.");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667.trHeight = {
    hRule: TableRowHeightRule.AT_LEAST,
    val: {
      v: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.height)
    }
  }, {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666
  };
}
export { en as buildResizeRowActions };
