import { UnitComparisonService } from "@univerjs-pro/edit-history";
import { FUniver } from "@univerjs/core/facade";
var n = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) {
      this._service = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, this._prepared = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461;
    }
    query(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
      return this._service["query"](this._prepared, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464);
    }
  },
  r = class extends FUniver {
    compareUnitData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
      return this._injector["get"](UnitComparisonService).compare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
    }
    prepareUnitComparison(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = this._injector["get"](UnitComparisonService);
      return new n(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.prepare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468));
    }
  };
export { n as FUnitComparison };
export { r };
