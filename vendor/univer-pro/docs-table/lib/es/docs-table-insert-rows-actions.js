import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { At, E, Et, Ge, N, Nt, P, T, gt, k, mt, vt, yt } from "./internal-core-endo.js";
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062)) {
  Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.startRow ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203,
    startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.startRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064,
    endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.endRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.endRow ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203,
    endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.endRow + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203);
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188) {
  let {
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, {
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 === "above" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.tableRows[Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.tableRows["length"] - 1)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461198 = Array.from({
      length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192
    }, () => ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461197)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 === "above" ? T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191).startOffset : T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191).endOffset + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200 = yt(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.tableColumns["length"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195.tableRows["splice"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24, 0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461198), Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461195, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199), wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194,
    nextMetadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188.metadata ? N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188.metadata) : undefined,
    cursor: {
      row: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24,
      column: 0
    }
  };
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325.tableCells = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324.tableCells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 => gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330) {
  return "" + DataStreamTreeTokenType.TABLE_ROW_START + yt(vt(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330) + DataStreamTreeTokenType.TABLE_ROW_END;
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385) {
  Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385), At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.length), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.body && Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385);
}
export { st as buildInsertRowsActions };
