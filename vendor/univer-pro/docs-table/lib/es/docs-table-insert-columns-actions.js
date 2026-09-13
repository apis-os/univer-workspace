import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E, Et, Ge, Mt, N, Nt, P, gt, jt, k, mt, vt, yt } from "./internal-core-endo.js";
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070)) {
  Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.startColumn ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204,
    startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.startColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072,
    endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.endColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.endColumn ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204,
    endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.endColumn + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204);
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215;
  let {
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218,
      count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, {
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220 === "left" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.tableColumns[Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.tableColumns["length"] - 1)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.insertedColumnWidth ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224.size["width"].v,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226 = Array.from({
      length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219
    }, () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.size["width"].v = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231;
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.tableColumns["splice"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28, 0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.tableRows["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.tableCells[Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.tableCells["length"] - 1)],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = Array.from({
        length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219
      }, () => gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.tableCells["splice"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28, 0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235);
  }), He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227), bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.preserveTotalWidth ?? true ? Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.size) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.width && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.size["width"].v = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222.tableColumns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.size["width"].v, 0)), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221,
    nextMetadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.metadata ? N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.metadata) : undefined,
    cursor: {
      row: 0,
      column: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28
    }
  };
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342 = yt(vt(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461341 === "left" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.startOffset : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.endOffset + 1;
    }).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343) Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.body && (Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342.length), Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342));
  jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338.endOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461342.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343.length);
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.tableColumns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.size["width"].v, 0) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.tableColumns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.size["width"].v, 0);
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.tableColumns["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.size["width"].v = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.size["width"].v / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100;
  });
}
export { ct as buildInsertColumnsActions };
