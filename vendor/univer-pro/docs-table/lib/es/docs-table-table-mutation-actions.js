import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { w } from "./docs-table-table-range-by-id.js";
import { F, H, V, er } from "./internal-core-endo.js";
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, [{
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.startOffset,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.endOffset,
    text: ""
  }], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343 = er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, [{
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.startOffset,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.endOffset,
    collapsed: false
  }]);
  return {
    actions: H([JSONX.getInstance().removeOp(["tableSource", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337], V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340)), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342]),
    cursorRow: 0,
    deleteTable: true
  };
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC as buildDeleteTableMutationActions };
