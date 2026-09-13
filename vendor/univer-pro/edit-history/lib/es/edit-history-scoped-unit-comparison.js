import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.left["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697])),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.right["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698])),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set([...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.keys(), ...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599.keys()]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.items, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.references),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.items["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
        scope: {
          entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.entityType,
          stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101
        }
      };
    });
  return {
    items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470,
    scopes: De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.entityType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.right, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B599)
  };
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912 = new Map();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.stableId) ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.stableId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4);
  });
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996 = new Set(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.keys()),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.scope !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.scope["stableId"]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.scope["stableId"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.stableId) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.stableId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.parentStableId !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.parentStableId) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.parentStableId : undefined),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 === undefined ? [] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111]);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 of [...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.left) ?? []), ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.right) ?? [])]) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.stableId) && C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.stableId, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 !== undefined && C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.values, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22;
}
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915 = new Map();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.scope) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.stableId;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 !== undefined && (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) ?? 0) + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.entityType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113));
  }
  return ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 === undefined) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114);
    return [{
      entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480,
      stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
      displayName: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.displayName) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.displayName) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 === undefined ? "insert" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 === undefined ? "delete" : "update",
      changeCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115,
      moved: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.moved) ?? false,
      locations: {
        left: w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116),
        right: w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117)
      }
    }];
  });
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 of Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124) ?? []) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622] === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622));
}
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998 = new Set(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999 = new Set();
  for (; var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.length > 0;) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.pop();
    if (typeof var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 == "string") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.has(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.add(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1);
      continue;
    }
    typeof var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 != "object" || !var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.has(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92999.add(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.push(...(Array.isArray(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 : Object.values(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1))));
  }
  return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998;
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.stableId),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5918 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510) {
    if (!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.stableId)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.stableId);
      continue;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.length > 0 && (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5918.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.stableId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = []);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => [...(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5918.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127]).concat(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29);
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 === undefined ? null : {
    path: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515],
    stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.nativeStableId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515,
    position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.position,
    target: {
      kind: "entity",
      entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514,
      stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.nativeStableId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515,
      comparisonStableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515
    }
  };
}
export { S as buildScopedUnitComparison };
