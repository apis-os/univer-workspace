import { etc, hashes, verify } from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";
import { Disposable, IConfigService, IUniverInstanceService, Inject, Injector, LifecycleService, Plugin, SHEET_EDITOR_UNITS, UniverInstanceType, merge } from "@univerjs/core";
import { IRenderManagerService } from "@univerjs/engine-render";
import { take } from "rxjs";
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) return false;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = Date.now() / 1000,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.ft,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.et,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 : false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.ud;
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 : false);
}
export { w as isFeatureAuthorizedWithinTime };
