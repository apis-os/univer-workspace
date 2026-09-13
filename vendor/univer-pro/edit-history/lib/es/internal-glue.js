import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { T } from "./edit-history-as-record.js";
import { E } from "./edit-history-stable-json.js";
import { K } from "./edit-history-unit-comparison.js";
import { R } from "./edit-history-unit-comparison-adapter-registry.js";
import { Ge, J, We } from "./edit-history-history-unit-adapter-registry.js";
import { Y } from "./edit-history-history-gateway.js";
import { X } from "./edit-history-history-mutation.js";
import { Z } from "./edit-history-history-restore.js";
import { Q } from "./edit-history-history-session-status.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 } from "./edit-history-plugin.js";
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 !== undefined) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418);
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419).length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) && y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615]));
  }
  return E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) === E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417);
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = 0) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 > 6) return;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 == "string") return F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 == "number" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 == "boolean") return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622)) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 < Math.min(8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.length); var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 + 1);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465;
    }
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 !== undefined) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 of ["title", "label", "text", "caption", "description", "dataStream", "formula", "code"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626];
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 == "string") {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
      }
    }
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 of ["textData", "body", "shapeData", "dataModel", "content", "props", "value", "values"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 + 1);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467;
    }
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.name == "string" ? F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.name) : undefined;
  }
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = "",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.charCodeAt(0);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 <= 32 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 >= 127 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 <= 159 || /\s/u.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163)) {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10.length > 0;
      continue;
    }
    if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 += var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10.length > 72) return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10.slice(0, 69).trimEnd() + "…";
  }
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 || undefined;
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630) {
  "@babel/helpers - typeof";

  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166;
  }, I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630);
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633) {
  if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 || "default");
    if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, "string");
  return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 + "";
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644;
}
const z = 1000;
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655.compare({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.unitId,
      leftData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.leftData,
      rightData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.rightData,
      leftChangesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.leftChangesets ?? [],
      rightChangesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.rightChangesets ?? []
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.scopes ?? [],
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922 = new Map(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186]));
  return {
    metadata: {
      comparisonId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.comparisonId,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.unitId,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.unitName === undefined ? {} : {
        unitName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.unitName
      }),
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.type,
      fidelity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.fidelity,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.commonBaseRevision === undefined ? {} : {
        commonBaseRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.commonBaseRevision
      }),
      stale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.stale ?? false
    },
    adapterResult: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657,
      items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.items["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.stableId),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.entityType) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.entityType ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.parentStableId === undefined ? undefined : var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.parentStableId);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 : {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187,
          scope: {
            entityType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.entityType,
            stableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.stableId
          }
        };
      })
    }
  };
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663 = {}) {
  let {
      adapterResult: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
      metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.items, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.offset, 0, 0, 2 ** 53 - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.limit, 100, 1, z),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.detail)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.unsupportedMutationIds ?? [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 = ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.productContext, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663);
  return H({
    schemaVersion: 1,
    comparisonId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.comparisonId,
    unit: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitId,
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.type,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitName === undefined ? {} : {
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitName
      })
    },
    fidelity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.fidelity,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.commonBaseRevision === undefined ? {} : {
      commonBaseRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.commonBaseRevision
    }),
    stale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.stale,
    detail: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.detail ?? "changes",
    summary: He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.items),
    coverage: {
      supportedEntityTypes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.supportedEntityTypes
    },
    scopes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.scopes ?? [],
    page: {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667,
      limit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668,
      matched: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.length,
      hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.length
    },
    items: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46,
    diagnostics: {
      readiness: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47.length || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.readiness === "degraded" ? "degraded" : "ready",
      unsupportedMutationIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47,
      codes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.diagnosticCodes ?? []
    },
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 === undefined ? {} : {
      productContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669
    })
  });
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) {
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 => H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194));
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = Object.getPrototypeOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 === Object.prototype || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 === null) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)]));
      return Object.setPrototypeOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195);
    }
  }
  return Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678);
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 === undefined || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681 : Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682, Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680)));
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689) {
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.type) !== UniverInstanceType.UNIVER_DOC) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.contextOffset, 0, 0, 2 ** 53 - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.contextLimit, z, 1, z),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.paragraphAlignment["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688,
    paragraphAlignment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692,
    paragraphAlignmentPage: {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690,
      limit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691,
      matched: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.paragraphAlignment["length"],
      hasMore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.paragraphAlignment["length"]
    }
  };
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.search) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700.trim().toLocaleLowerCase();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.kinds) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.length && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.kinds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.kind) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.entityTypes) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.length && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.entityTypes["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.entityType) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.parentStableId !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.parentStableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.parentStableId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.locations["left"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.parentStableId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.parentStableId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.locations["right"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.parentStableId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.parentStableId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.scope !== undefined && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.scope) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.entityType) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.scope["entityType"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.scope["stableId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.scope["stableId"]) ? false : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 || [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.displayName, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.stableId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.parentStableId, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.path, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.changes["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.path, E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.before), E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.after)])].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.toLocaleLowerCase().includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701));
  });
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 = "changes") {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 === "full") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707 === "summary") {
    let {
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209,
      changes: []
    };
  }
  let {
    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709;
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {},
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.kind === "insert" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 += 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.kind === "delete" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 += 1 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.moved && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 += 1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.entityType] = (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.entityType] ?? 0) + 1;
  return {
    total: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.length,
    insert: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25,
    delete: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26,
    update: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27,
    moved: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28,
    byEntityType: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
  };
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716);
  };
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725;
}
K = G([W(0, Inject(R))], K);
const Ke = {
  id: "edit-history.command.restore-history",
  type: CommandType.COMMAND,
  handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.get(J).get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.type);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736) throw Error("[RestoreHistoryCommand]: No history adapter is registered for unit type " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.type + ".");
    if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.canRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId))) throw Error("[RestoreHistoryCommand]: The current user cannot restore history for this unit.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.type);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) throw Error("[RestoreHistoryCommand]: Unit " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId + " is not available.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.getRev();
    return (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.get(ICommandService).executeCommand(RevertRevisionMutation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId,
      revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.revision
    })) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId,
      undoMutations: [{
        id: RevertRevisionMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId,
          revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738
        }
      }],
      redoMutations: [{
        id: RevertRevisionMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.unitId,
          revision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735.revision
        }
      }]
    }), true) : false;
  }
};
Y = G([W(0, IConfigService), W(1, Inject(HTTPService))], Y);
X = G([W(0, Inject(Y))], X);
Z = G([W(0, ICommandService)], Z);
Q = G([W(0, Inject(Y))], Q);
L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, "pluginName", "UNIVER_EDIT_HISTORY_PLUGIN"), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, "packageName", We), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, "version", Ge), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, "type", UniverInstanceType.UNIVER_UNKNOWN), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 = G([DependentOn(UniverLicensePlugin, UniverCollaborationPlugin), W(1, Inject(Injector)), W(2, IConfigService), W(3, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764);
export { y, P, L, V, B, Ke };
