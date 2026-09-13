import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.ROW = "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.COLUMN = "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155;
  }({}),
  ve = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.INVALID_RANGE = "invalid-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.OUT_OF_BOUNDS = "out-of-bounds", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.CROSSING = "crossing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.MAX_DEPTH = "max-depth", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.MOVE_SPLITS_OUTLINE = "move-splits-outline", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.CLEAR_RANGE_NOT_CONTAIN_OUTLINE = "clear-range-not-contain-outline", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.UNKNOWN = "unknown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157;
  }({});
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 as DimensionOutlineAxis, ve as DimensionOutlineErrorReason };
