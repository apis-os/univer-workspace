import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { S } from "./edit-history-scoped-unit-comparison.js";
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466) {
  return S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466).scopes;
}
export { Te as buildUnitComparisonScopes };
