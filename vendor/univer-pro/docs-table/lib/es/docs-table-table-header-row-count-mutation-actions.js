import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, H } from "./internal-core-endo.js";
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148 = Math.min(Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.tableRows["length"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017 = JSONX.getInstance(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.tableRows["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148 ? BooleanNumber.TRUE : BooleanNumber.FALSE,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148 ? BooleanNumber.TRUE : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017, ["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013, "tableRows", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, "repeatHeaderRow"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.repeatHeaderRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017, ["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013, "tableRows", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, "isFirstRow"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.isFirstRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448);
  }), {
    actions: H(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48),
    headerRowCount: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148
  };
}
export { Nn as buildSetTableHeaderRowCountMutationActions };
