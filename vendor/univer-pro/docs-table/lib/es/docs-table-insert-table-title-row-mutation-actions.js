import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Xn } from "./docs-table-insert-table-rows-mutation-actions.js";
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304 = ["body"]) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462302.tableSource) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305.tableColumns["length"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306 ? Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303, 0, 1, "above", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.tableCells["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 === 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.columnSpan = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306, delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.rowSpan) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.rowSpan = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.columnSpan = 0);
    });
  }) : null;
}
export { Zn as buildInsertTableTitleRowMutationActions };
