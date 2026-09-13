import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Br, zr } from "./internal-core-endo.js";
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462780.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784) return null;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = [];
  return zr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72, ["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781, "cellMargin"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784.cellMargin, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782 ?? undefined, JSONX.getInstance()), Br(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72);
}
export { Rr as buildSetTableDefaultCellMarginMutationActions };
