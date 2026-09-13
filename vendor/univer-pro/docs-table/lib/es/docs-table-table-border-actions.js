import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E, Gi, Hi, Ni, Q, Ui, Vi, Wi, Y } from "./internal-core-endo.js";
function Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463286 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.documentData, {
      cloneBody: false,
      tableIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.tableId]
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463286.tableSource) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463285[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287) throw Error("[DocsTable]:\x20Table\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.tableId + " is not found.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288 = Gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.border ?? Ni;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) throw Error("[DocsTable]: Cell range is out of bounds.");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.borderTop = Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.borderBottom = Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.borderLeft = Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.borderRight = Wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y;
  }
  return qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288, {
    top: Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y,
    left: Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463284.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289 : Y
  }), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463286
  };
}
function qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startRow > 0) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463394.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startRow - 1];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) throw Error("[DocsTable]: Cell range is out of bounds.");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.borderBottom = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.merge ? Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.borderBottom, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.top) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.top;
    }
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startColumn > 0) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463394.tableRows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397.tableCells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463395.startColumn - 1];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) throw Error("[DocsTable]: Cell range is out of bounds.");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.borderRight = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.merge ? Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.borderRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.left) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.left;
  }
}
export { Pi as buildSetTableBorderActions };
