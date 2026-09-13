import { AddBoardElementMutation, RemoveBoardElementMutation, RemoveBoardElementOnlyMutation, UniverBoardsPlugin } from "@univerjs-pro/boards";
import { HistoryMutationService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { N, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 } from "./boards-history-plugin.js";
import { H } from "./boards-history-diff.js";
import { K } from "./boards-history-boards-unit-comparison-adapter.js";
var O = "@univerjs-pro/boards-history",
  k = "1.0.0-insiders.20260907-70fc579";
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);
  };
}
;
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = ox658695,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = arguments[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(335)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(408)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697;
  if (typeof Reflect == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(364) && typeof Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(351)] == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(346)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694(351)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696;
}
N = M([j(0, Inject(HistoryUnitAdapterRegistryService)), j(1, IAuthzIoService), j(2, IUniverInstanceService)], N);
;
;
;
;
;
;
;
H = M([j(0, Inject(HistoryMutationService))], H);
;
;
;
;
;
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, "pluginName", "UNIVER_BOARDS_HISTORY_PLUGIN"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, "packageName", O), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, "version", k), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, "type", UniverInstanceType.UNIVER_BOARD), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = M([DependentOn(UniverLicensePlugin, UniverEditHistoryPlugin, UniverBoardsPlugin), j(1, Inject(Injector)), j(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174);
