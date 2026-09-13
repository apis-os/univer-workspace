import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { fa } from "./internal-core-endo.js";
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463622) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623 = new DOMParser().parseFromString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463622, "text/html").querySelector("table");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623 ? fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623) : {
    rows: [],
    columnWidths: []
  };
}
export { da as parseHtmlTableClipboard };
