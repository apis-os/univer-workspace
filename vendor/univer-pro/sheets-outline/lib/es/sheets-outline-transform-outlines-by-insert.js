import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, w } from "./internal-glue.js";
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.count <= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 : A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.index <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.start ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656,
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.count,
    end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.end + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.count
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.start < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.index && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.index <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.end ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656,
    end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.end + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.count
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656));
}
export { D as transformOutlinesByInsert };
