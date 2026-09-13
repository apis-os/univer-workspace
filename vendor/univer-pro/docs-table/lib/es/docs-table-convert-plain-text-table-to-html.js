import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
function ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596.includes("\x09")) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596.split(/\r\n|\r|\n/);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597.length - 1] === "" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597.pop(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597.length === 0 ? null : "<table><tbody>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463597.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 => "<tr>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833.split("\x09").map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => "<td>" + Ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) + "</td>").join("") + "</tr>").join("") + "</tbody></table>";
}
function Ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463682.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, "<br>");
}
export { ca as convertPlainTextTableToHtml };
