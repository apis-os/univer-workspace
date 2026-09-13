import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { S, ye } from "./internal-glue.js";
import { U, qe } from "./sheets-outline-dimension-outline-collapsed.js";
import { D } from "./sheets-outline-transform-outlines-by-insert.js";
import { O, k } from "./sheets-outline-transform-outlines-by.js";
import { W } from "./sheets-outline-sheet-outline-plugin.js";
import { F, P } from "./sheets-outline-model.js";
import { B, H, I, L, V, z, ze } from "./sheets-outline-add-dimension-outline.js";
function be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 instanceof S ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.outlineId : undefined;
}
const Qe = {};
const q = {
  redos: [],
  undos: [],
  preRedos: [],
  preUndos: []
};
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, this._sheetsOutlineModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, this._sheetsOutlineErrorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, this._initCommandInterceptor();
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) => this._sheetsOutlineModel["getOutlines"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464), this._getCommandScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.params), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => this._sheetsOutlineErrorService["emit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465))
    }));
  }
  _getCommandScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.unitId ? this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.unitId, UniverInstanceType.UNIVER_SHEET) : this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.subUnitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.subUnitId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.getActiveSheet();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) return {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.getSheetId()
    };
  }
};
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) return Z();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.subUnitId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.axis === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.axis)) return Z();
  et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 = it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488);
  return {
    redos: [{
      id: U.id,
      params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487
    }],
    undos: [{
      id: U.id,
      params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489
    }],
    preRedos: [],
    preUndos: []
  };
}
function et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) {
  try {
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.type) {
      case "insert":
        D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498);
        break;
      case "delete":
        O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498);
        break;
      case "move":
        k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498);
        break;
    }
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
    throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500({
      reason: ye(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52),
      commandId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.subUnitId,
      axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.axis,
      outlineId: be(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52)
    }), new CustomCommandExecutionError(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52 instanceof Error ? var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52.message : "Invalid\x20dimension\x20outline\x20mutation");
  }
}
function tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.id) {
    case InsertRowCommand.id:
      return Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    case InsertColCommand.id:
      return Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    case RemoveRowCommand.id:
      return nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    case RemoveColCommand.id:
      return nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    case MoveRowsCommand.id:
      return rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    case MoveColsCommand.id:
      return rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.params, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506);
    default:
      return null;
  }
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.range) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.range["startRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.range["startColumn"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.range["endRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.range["endColumn"];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512,
    axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510,
    type: "insert",
    index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513,
    count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 + 1
  };
}
function nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.range) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.range["startRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.range["startColumn"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.range["endRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.range["endColumn"];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524,
    axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522,
    type: "delete",
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525,
    end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526
  };
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.fromRange) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.toRange || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.fromRange["startRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.fromRange["startColumn"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.fromRange["endRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.fromRange["endColumn"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.toRange["startRow"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.toRange["startColumn"];
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536,
    axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534,
    type: "move",
    sourceStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537,
    sourceEnd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538,
    destinationIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539
  };
}
function it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.type) {
    case "insert":
      return {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.subUnitId,
        axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.axis,
        type: "delete",
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.index,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.index + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.count - 1
      };
    case "delete":
      return {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.subUnitId,
        axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.axis,
        type: "insert",
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.start,
        count: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.end - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.start + 1,
        restoreOutlines: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.axis === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.axis)
      };
    case "move":
      return at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547);
  }
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceEnd - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceStart + 1;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceStart && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceEnd + 1 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceEnd + 1 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
    sourceStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16,
    sourceEnd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex - 1,
    destinationIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceStart
  } : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
    sourceStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex,
    sourceEnd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.destinationIndex + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 - 1,
    destinationIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.sourceEnd + 1
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.unitId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.unitId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.subUnitId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.subUnitId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 ? {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556
  } : null;
}
function Z() {
  return {
    redos: [...q.redos],
    undos: [...q.undos],
    preRedos: [...(q.preRedos ?? [])],
    preUndos: [...(q.preUndos ?? [])]
  };
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, this._sheetsOutlineModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: W,
      businesses: [UniverInstanceType.UNIVER_SHEET],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => JSON.stringify(this._sheetsOutlineModel["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629)),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) => this._sheetsOutlineModel["deserialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632),
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => this._sheetsOutlineModel["removeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633)
    }));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = Qe, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149
    } = merge({}, Qe, this._config);
    this._configService["setConfig"]("sheets-outline.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149);
  }
  onStarting() {
    this._injector["add"]([P]), this._injector["add"]([F]), this._injector["add"]([Q]), this._injector["add"]([J]), this._initRegisterCommand(), this._injector["get"](P), this._injector["get"](F), this._injector["get"](Q), this._injector["get"](J);
  }
  _initRegisterCommand() {
    [z, ze, qe, V].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634));
    }), [I, L, H, B, U].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636));
    });
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 as UniverSheetsOutlinePlugin };
export { J, Q };
