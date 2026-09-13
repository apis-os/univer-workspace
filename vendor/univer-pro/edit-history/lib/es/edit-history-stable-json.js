import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { T } from "./edit-history-as-record.js";
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548)) return "[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.map(E).join(",") + "]";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 === undefined ? JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) ?? "undefined" : "{" + Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549).sort().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 => JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) + ":" + E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149])).join(",") + "}";
}
export { E as stableJson };
