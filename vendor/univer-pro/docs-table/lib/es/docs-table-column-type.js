import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let pn = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.Text = "text", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.Number = "number", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.Date = "date", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.Checkbox = "checkbox", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.Dropdown = "dropdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788;
  }({}),
  mn = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Text = "text", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Cell = "cell", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Range = "range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Row = "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Column = "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.Table = "table", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790;
  }({}),
  hn = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.Rect = "rect", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.Structural = "structural", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.Text = "text", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792;
  }({}),
  gn = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.Asc = "asc", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.Desc = "desc", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794;
  }({});
export { pn as DocsTableColumnType, mn as DocsTableSelectionKind, hn as DocsTableSelectionSource, gn as DocsTableSortDirection };
