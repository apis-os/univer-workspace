import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.permissionCheckWithoutRange({
    workbookTypes: [WorkbookViewPermission],
    worksheetTypes: [WorksheetViewPermission]
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307);
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313);
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.permissionPointUpdate$) ?? of(null)).pipe(debounceTime(100), startWith(null), map(() => R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315)));
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.has == "function" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.has(SheetPermissionCheckController)) return null;
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.get(SheetPermissionCheckController);
  } catch {
    return null;
  }
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.has == "function" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.has(IPermissionService)) return null;
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.get(IPermissionService);
  } catch {
    return null;
  }
}
export { R as hasDimensionOutlineViewPermission, Ie as getDimensionOutlineViewPermission$ };
