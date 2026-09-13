import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { E } from "./edit-history-stable-json.js";
import { T } from "./edit-history-as-record.js";
import { y } from "./internal-glue.js";
const v = new Set(["angle", "height", "left", "rotation", "top", "transform", "width", "x", "y"]),
  pe = new Set(["index", "order", "orderKey", "position", "zIndex"]),
  me = new Set(["background", "backgroundColor", "bold", "border", "fill", "fontFamily", "fontSize", "fontWeight", "italic", "lineHeight", "numberFormat", "opacity", "shadow", "stroke", "style", "textColor", "underline"]),
  he = new Set(["dataSourceId", "endId", "layoutId", "masterId", "parentId", "refId", "sourceId", "startId", "targetId"]);
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = "update") {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 !== "update") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 === "delete" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [];
    return b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3;
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [];
  D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, [], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18);
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set();
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = E([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.sourcePath ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.path, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.before, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.after]);
    return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) ? false : (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684), true);
  }).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) => E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.path).localeCompare(E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.path)));
}
function b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 !== undefined && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452).length > 0) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452).sort()) b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616], [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451);
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.push({
    path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453,
    ...(E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453) === E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) ? {} : {
      sourcePath: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449
    }),
    kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450,
    valueType: A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 === "delete" ? {
      before: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448
    } : {
      after: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448
    })
  });
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555) {
  if (y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553)) return;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553) && !O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552) && !O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553)) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.length); var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 += 1) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2)];
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.length && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.length) D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);else {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.length ? "delete" : "insert";
        b(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);
      }
    }
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 !== undefined) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = [...new Set([...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557)])].sort();
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
        D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625], [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555);
        continue;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = k([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625]),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? "delete" : "insert",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.push({
        path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463,
        ...(E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) === E([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625]) ? {} : {
          sourcePath: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625]
        }),
        kind: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
        valueType: A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? {
          before: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
        } : {
          after: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
        })
      });
    }
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.push({
    path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558,
    ...(E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558) === E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) ? {} : {
      sourcePath: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554
    }),
    kind: "update",
    valueType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559,
    before: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552,
    after: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553,
    ...Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559)
  });
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568) {
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 += 1) if (!Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9)) return true;
  return false;
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.length - 1] === "dataStream" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.includes("body")) return ["text"];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570[0] === "values" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.length === 2) return ["field", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570[1]];
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 => v.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151));
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 >= 0) return ["geometry", ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17)];
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 => me.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152));
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 >= 0 ? ["style", ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + +(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18] === "style"))] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570;
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.length - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574.toLocaleLowerCase()) ?? "";
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8.includes("formula") || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 === "f" ? "formula" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 === "geometry" || v.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153)) ? "geometry" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 === "position" || pe.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154)) ? "position" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.toLocaleLowerCase().includes("color")) ? "color" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 === "style" || me.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156)) ? "style" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 => he.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) || /(?:Id|Ref)$/u.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157)) ? "reference" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 === null ? "null" : Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573) ? "array" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 == "boolean" ? "boolean" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 == "number" ? "number" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 == "string" ? "text" : T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573) === undefined ? "unknown" : "object";
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 != "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 != "string" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 !== "text" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 !== "formula") return {};
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 === "text" ? Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581) : M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 === "text" ? Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582) : M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.length && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21];) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 += 1;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.length - 1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.length - 1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22];) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 += 1;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.length + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length > 800 ? {
      left: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.length ? [{
        kind: "delete",
        text: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.join("")
      }] : [],
      right: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length ? [{
        kind: "insert",
        text: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.join("")
      }] : []
    } : Pe(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
      left: j(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21).join(""), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22).join("")),
      right: j(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21).join(""), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22).join(""))
    };
  return {
    segments: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? {
      left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3.right["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158,
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.kind === "equal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.kind : "delete"
      })),
      right: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3.left["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159,
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.kind === "equal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.kind : "insert"
      }))
    } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3
  };
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = [];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 && N(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36, {
    kind: "equal",
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593
  });
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592) N(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 && N(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36, {
    kind: "equal",
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36;
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.match(/(\r?\n|\s+|\$?[A-Za-z]+\$?\d+|[A-Za-z_]+[A-Za-z0-9_]*|[0-9]+(?:\.\d+)?|[\u3400-\u9FFF]|.)/gu) ?? [];
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 = Array.from({
    length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.length + 1
  }, () => new Uint16Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.length + 1));
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 - 1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 - 1] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 - 1][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 - 1] + 1 : Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 - 1][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 - 1]);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.length;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 > 0;) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 - 1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 - 1] ? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.push({
    kind: "equal",
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 - 1]
  }), --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 - 1][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 - 1]) ? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.push({
    kind: "delete",
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 - 1]
  }), --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603) : (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.push({
    kind: "insert",
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 - 1]
  }), --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.reverse()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.kind !== "insert" && N(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.kind !== "delete" && N(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161);
  return {
    left: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39,
    right: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40
  };
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.length - 1];
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.kind) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.kind ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.text += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.text : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.push({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611
  });
}
export { we as buildSemanticLeafChanges };
