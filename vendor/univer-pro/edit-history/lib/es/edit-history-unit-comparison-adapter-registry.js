import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { RevertRevisionMutation, UniverCollaborationPlugin, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { HTTPService } from "@univerjs/network";
import { ErrorCode } from "@univerjs/protocol";
import { BehaviorSubject } from "rxjs";
import { L } from "./internal-glue.js";
var R = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168), L(this, "_adapters", new Map());
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170) {
    if (this._adapters["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.type)) throw Error("[UnitComparisonAdapterRegistryService]: Adapter for unit type " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.type + " is registered.");
    return this._adapters["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170), toDisposable(() => {
      this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.type) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 && this._adapters["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.type);
    });
  }
  get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
    return this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
  }
  dispose() {
    this._adapters["clear"](), super.dispose();
  }
};
export { R as UnitComparisonAdapterRegistryService };
