import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Br, zr } from "./internal-core-endo.js";
function Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.documentData["tableSource"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462771 = Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462772 = JSONX.getInstance();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462771.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462771.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462771.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462771.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462773;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462773 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462773.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) return null;
    zr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70, ["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.tableId, "tableRows", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711, "tableCells", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, "margin"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.margin, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.margin ?? undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462772);
  }
  return Br(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70);
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802) {
  return {
    startRow: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.endRow),
    endRow: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.endRow),
    startColumn: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.endColumn),
    endColumn: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.endColumn)
  };
}
export { Lr as buildSetTableCellMarginMutationActions };
