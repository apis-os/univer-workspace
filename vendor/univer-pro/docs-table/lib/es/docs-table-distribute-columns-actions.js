import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E } from "./internal-core-endo.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_Error_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657) throw Error("[DocsTable]: Table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.tableId + " is not found.");
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.endColumn),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.endColumn),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.tableColumns["slice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 + 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.size["width"].v, 0) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.length;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461658.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.size["width"].v = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120;
  }), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656
  };
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_throws_Error_sigD23F as buildDistributeColumnsActions };
