import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { S, j } from "./internal-glue.js";
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = {}) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.maxDepth ?? 8,
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.unitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.subUnitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.axis,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) : var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644]);
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 of var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.values()) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645].sort(j),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467) {
      for (Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461); var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.start > var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1].end;) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.pop();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.end > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.end) throw new S("crossing", "Crossing dimension outlines are not allowed", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.id);
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.depth + 1 : 1;
      if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4) throw new S("max-depth", "Dimension\x20outline\x20depth\x20cannot\x20exceed\x20" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.id);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
        depth: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.id,
        anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.end,
        children: []
      };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.children["push"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
    }
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1;
}
export { T as buildDimensionOutlineTree };
