import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { w } from "./docs-table-table-range-by-id.js";
import { F } from "./internal-core-endo.js";
function ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613 = ["body"]) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.tableId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.documentData["body"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614.dataStream)) throw Error("[DocsTable]: Table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.tableId + " is not found.");
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.text["split"](/\r\n|\r|\n/).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.split("\x09")),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53++) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53].length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463615.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.startRow + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463616.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.startColumn + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89.push({
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.startOffset + 1,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.endOffset,
      text: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30] + "\x0d\x0a"
    });
  }
  return F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.documentData, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613);
}
export { ua as buildPastePlainTextTableMutationActions };
