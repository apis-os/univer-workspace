import { AddBoardElementMutation, RemoveBoardElementMutation, RemoveBoardElementOnlyMutation, UniverBoardsPlugin } from "@univerjs-pro/boards";
import { HistoryMutationService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { UnitAction, UnitObject } from "@univerjs/protocol";
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641) => I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.mutation["params"]).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.revision + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
    kind: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.mutation["id"]),
    label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.elementId ? "board:element" : "board:page",
    memberId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.memberId,
    pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.pageId,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.elementId
  })));
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 === AddBoardElementMutation.id ? "insert" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 === RemoveBoardElementMutation.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 === RemoveBoardElementOnlyMutation.id ? "delete" : "update";
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
  if (!V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110)) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "subUnitId") ?? L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "pageId");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) return [];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "elementId"), R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "element"), ...B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "elementIds"), ...z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, "elements")].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2)];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => ({
    pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643
  })) : [{
    pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111
  }];
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115] == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115] : undefined;
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119) {
  if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119])) return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119], "id") ?? L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119], "elementId");
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) ? [L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, "id") ?? L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, "elementId")].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) : []) : [];
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 == "string") : [];
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130;
}
let H = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    this._mutationService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646;
  }
  async compare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    return P(await this._mutationService["load"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649));
  }
};
export { H as BoardsHistoryDiffService };
