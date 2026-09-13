import { ISlideExchangeService } from "@univerjs-pro/slides-exchange-client";
import { FUniver } from "@univerjs/core/facade";
var n = class extends FUniver {
  importSlideToUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    return this._injector["get"](ISlideExchangeService).importSlideToUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
  }
  importSlideToSnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
    return this._injector["get"](ISlideExchangeService).importSlideToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
  }
  exportSlideByUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
    return this._injector["get"](ISlideExchangeService).exportSlideByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464);
  }
  exportSlideBySnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    return this._injector["get"](ISlideExchangeService).exportSlideBySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
  }
  transformSnapshotJsonToSlideDataAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return this._injector["get"](ISlideExchangeService).transformSnapshotJsonToSlideData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
  }
  transformSlideDataToSnapshotJsonAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
    return this._injector["get"](ISlideExchangeService).transformSlideDataToSnapshotJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
  }
};
FUniver.extend(n);
export {};
