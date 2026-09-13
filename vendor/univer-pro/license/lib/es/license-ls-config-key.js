import { etc, hashes, verify } from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";
import { Disposable, IConfigService, IUniverInstanceService, Inject, Injector, LifecycleService, Plugin, SHEET_EDITOR_UNITS, UniverInstanceType, merge } from "@univerjs/core";
import { IRenderManagerService } from "@univerjs/engine-render";
import { take } from "rxjs";
const k = {
    base64Parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = typeof atob == "function" ? atob(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) : Buffer.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, "base64").toString("binary"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5.length,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = new Uint8Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138);
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2++) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2] = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5.charCodeAt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2);
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1;
    },
    hexStringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = "";
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3++) var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3].toString(16).padStart(2, "0");
      return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7;
    }
  },
  A = "ls.config",
  j = {};
export { A as LS_CONFIG_KEY };
export { k, j };
