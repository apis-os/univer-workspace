import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { w } from "./docs-table-table-range-by-id.js";
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431) return true;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433 != null && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = [{
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433,
    collapsed: true
  }]), !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428.syncExecuteCommand(RichTextEditingMutation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429,
    historyAction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435,
    actions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431,
    textRanges: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68,
    trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434
  });
}
function mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.tableId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461) return [];
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.endRow),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D189 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.endRow),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.endColumn),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.endColumn),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.rows[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462458.cells[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462463 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.rows[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D189]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459.cells[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462463) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.tableSource["tableRows"][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460.tableCells[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D192 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.rowSpan) ?? 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462464.columnSpan) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D192 > 1 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 > 1) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D192 - 1 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D189 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 - 1 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462463,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.columnCount - 1,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D189 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.rowCount - 1,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.startOffset + 1;
  return [{
    startOffset: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76,
    endOffset: Math.max(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462465.endOffset - 1),
    collapsed: false,
    rangeType: DOC_RANGE_TYPE.RECT,
    segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.segmentId ?? "",
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462457.tableId,
    startRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188,
    endRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D189,
    startColumn: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D190,
    endColumn: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191,
    spanEntireRow: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8,
    spanEntireColumn: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9,
    spanEntireTable: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9,
    isActive: true
  }];
}
export { U as executeRichTextTableActions };
