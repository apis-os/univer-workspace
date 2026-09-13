import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Yi } from "./internal-core-endo.js";
const Xi = {
  id: "docs-table.command.set-table-border-style",
  type: CommandType.COMMAND,
  handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437.dashStyle) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437.value);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438 != null && Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463437, {
      dashStyle: Zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438)
    });
  }
};
function Zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442 === "dot" ? DashStyleType.DOT : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442 === "dash" ? DashStyleType.DASH : DashStyleType.SOLID;
}
export { Xi as DocsTableSetTableBorderStyleCommand };
