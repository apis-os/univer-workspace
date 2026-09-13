import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { T } from "./edit-history-as-record.js";
function Me(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 : Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146).filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624]) => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624)));
  };
}
export { Me as withoutComparisonKeys };
