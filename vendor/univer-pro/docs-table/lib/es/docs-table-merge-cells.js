import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, M, Ye, j } from "./internal-core-endo.js";
function je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 || !Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970)) return false;
  try {
    return Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) === 1 && M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) === 1);
  } catch {
    return false;
  }
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = [];
  return A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32;
}
export { je as canMergeCells };
