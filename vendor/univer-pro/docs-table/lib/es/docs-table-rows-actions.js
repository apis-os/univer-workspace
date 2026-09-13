import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E, Ge, Je, N, Ot, P, T, Tt, k, kt, mt, tt } from "./internal-core-endo.js";
import { dt } from "./docs-table-table-actions.js";
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078)) {
  Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615);
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205,
      startRow: Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6),
      endRow: Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6)
    } : null;
  });
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242) {
  let {
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243,
      metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, {
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242.endRow),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242.endRow),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.tableRows["length"] ? {
    ...dt({
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243,
      metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245
    }),
    deleteTable: true
  } : (xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.tableRows["splice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66), Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246,
    nextMetadata: zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65),
    cursor: {
      row: Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247.tableRows["length"] - 1),
      column: 0
    }
  });
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.documentData, {
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.tableId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.tableId),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.count ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 = kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.fromRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282.tableRows["length"] - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 = kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.toRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282.tableRows["length"] - 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282.tableRows["length"] - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 - 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 + 1,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.position === "above" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 + 1;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 <= 0 || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 + 1) return {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281,
    nextMetadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.metadata ? N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.metadata) : undefined,
    cursor: {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284,
      column: 0
    }
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282.tableRows["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461282.tableRows["splice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79, 0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284).startOffset,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77).endOffset + 1,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB32 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 ? T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.rowCount - 1)).endOffset + 1 : T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285).startOffset;
  return Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB32), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281,
    nextMetadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.metadata ? N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.metadata) : undefined,
    cursor: {
      row: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79,
      column: 0
    }
  };
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354).startOffset;
  Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357, T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355).endOffset + 1);
}
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508.headerRowCount) ?? 0;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 - 1) - Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506, 0) + 1);
  return tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505, Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103));
}
export { lt as buildDeleteRowsActions, ft as buildMoveRowsActions };
