import { CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { InsertColCommand, InsertRowCommand, MoveColsCommand, MoveRowsCommand, RemoveColCommand, RemoveRowCommand, SetColHiddenMutation, SetColVisibleMutation, SetRowHiddenMutation, SetRowVisibleMutation, SheetInterceptorService, SheetPermissionCheckController, UniverSheetsPlugin, WorkbookViewPermission, WorksheetViewPermission, getSheetCommandTarget } from "@univerjs/sheets";
import { Subject, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { j, w, ye } from "./internal-glue.js";
import { T } from "./sheets-outline-dimension-outline-tree.js";
import { F, P } from "./sheets-outline-model.js";
import { R } from "./sheets-outline-dimension-outline-view-permission.js";
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = {}) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.start < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.start > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.end) return {
    valid: false,
    reason: "invalid-range"
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.maxIndex != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.end >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.maxIndex) return {
    valid: false,
    reason: "out-of-bounds"
  };
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172));
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3) if (Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172)) return {
    valid: false,
    reason: "crossing"
  };
  try {
    T([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173);
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = ye(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 === "max-depth" ? {
      valid: false,
      reason: "max-depth"
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 === "invalid-range" ? {
      valid: false,
      reason: "invalid-range"
    } : {
      valid: false,
      reason: "crossing"
    };
  }
  return {
    valid: true
  };
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.valid) throw Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.reason ?? "invalid-dimension-outline");
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178];
}
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.start,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.end,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) || !w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) || !Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.end, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.start), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.end), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true);
  }
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.length === 0) return null;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189] = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5].sort(j);
  return {
    mergedOutline: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189,
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187,
      end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188
    },
    mergedOutlines: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5
  };
}
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => !w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.start >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.end <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.end));
}
function Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 + 1 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 + 1 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245;
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.end && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.end,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.end <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.end,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.end <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.end;
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4;
}
const I = {
    id: "sheet.mutation.add-dimension-outline",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.subUnitId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.setOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.subUnitId, xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.outline)), true;
    }
  },
  L = {
    id: "sheet.mutation.remove-dimension-outline",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.subUnitId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.setOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.outlineId)), true;
    }
  };
const z = {
    id: "sheet.command.add-dimension-outline",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) return false;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
        worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327;
      if (!R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.get(P),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
          id: "dimension-outline-" + generateRandomId(6),
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
          axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.axis,
          start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.start,
          end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.end,
          collapsed: false
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.axis === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.getRowCount() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.getColumnCount(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.mergedOutlines) ?? [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.mergedOutline) ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.id)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, {
          maxIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.valid) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.get(F).emit({
        reason: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.reason ?? "unknown",
        commandId: z.id,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
        axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.axis,
        outlineId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.id
      }), false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => ({
          id: L.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
            outlineId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.id
          }
        })), {
          id: I.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
            outline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = [{
          id: L.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
            outlineId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.id
          }
        }, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => ({
          id: I.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329,
            outline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107
          }
        }))];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18
      }), true) : false;
    }
  },
  B = {
    id: "sheet.mutation.clear-dimension-outlines",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351.getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.subUnitId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351.setOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.subUnitId, Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350)), true;
    }
  },
  V = {
    id: "sheet.command.clear-dimension-outlines",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) return false;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359;
      if (!R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361)) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
          axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.axis,
          start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.start,
          end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.end
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.get(P).getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 => w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.start >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.end <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.end);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.length === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.get(F).emit({
        reason: "clear-range-not-contain-outline",
        commandId: V.id,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
        axis: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.axis
      }), false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [{
          id: B.id,
          params: {
            ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
            removedOutlineIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.id)
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 => ({
          id: I.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
            outline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110
          }
        }));
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24
      }), true) : false;
    }
  },
  ze = {
    id: "sheet.command.remove-dimension-outline",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) return false;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369;
      if (!R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(P).getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.outlineId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = [{
          id: L.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
            outlineId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.id,
            outline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = [{
          id: I.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
            outline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372
          }
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29
      }), true) : false;
    }
  },
  H = {
    id: "sheet.mutation.set-dimension-outline-collapsed",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.getOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.outlineId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.setOutlines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.subUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.axis !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.axis || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.start !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.start || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.end !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.end ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.collapsed
      })), true;
    }
  };
export { E as canAddDimensionOutline, I as AddDimensionOutlineMutation, L as RemoveDimensionOutlineMutation, z as AddDimensionOutlineCommand, B as ClearDimensionOutlinesMutation, V as ClearDimensionOutlinesCommand, ze as RemoveDimensionOutlineCommand, H as SetDimensionOutlineCollapsedMutation };
