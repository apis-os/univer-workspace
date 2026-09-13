import { UniverBasesPlugin } from "@univerjs-pro/bases";
import { HistoryMutationService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, asRecord, buildScopedUnitComparison, buildSemanticComparisonItems, recordComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, IConfigService, Inject, Injector, JSON1, Plugin, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { S } from "./internal-glue.js";
import { R } from "./bases-history-history-diff.js";
import { K } from "./bases-history-unit-comparison-adapter.js";
let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = class extends Plugin {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = S, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
    super(), this._config = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4691, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4692, this._configService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
    let {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4694
    } = merge({}, S, this._config);
    this._configService["setConfig"]("bases-history.config", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4694);
  }
  onStarting() {
    registerDependencies(this._injector, [[R], [K]]), this.disposeWithMe(this._injector["get"](UnitComparisonAdapterRegistryService).register(this._injector["get"](K)));
  }
};
export { var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46281 as UniverBasesHistoryPlugin };
