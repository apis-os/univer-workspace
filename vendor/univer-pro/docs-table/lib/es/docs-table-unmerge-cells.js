import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { O, Ye, ze } from "./internal-core-endo.js";
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 = null;
  try {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 = ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.startColumn);
  } catch {
    return false;
  }
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 && Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983);
}
export { Me as canUnmergeCells };
