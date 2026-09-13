import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E, Ki } from "./internal-core-endo.js";
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313) throw Error("[DocsTable]: Table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.tableId + " is not found.");
  return Ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805) throw Error("[DocsTable]: Cell range is out of bounds.");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.color == null) {
      delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.backgroundColor;
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.backgroundColor = {
      rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310.color
    };
  }), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463312
  };
}
export { Ii as buildSetTableCellBackgroundActions };
