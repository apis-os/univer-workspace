import { IDocExchangeService } from "@univerjs-pro/docs-exchange-client";
import { FUniver } from "@univerjs/core/facade";
var n = class extends FUniver {
  importDocToUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) {
    return this._injector["get"](IDocExchangeService).importDocToUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461);
  }
  importDocToSnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) {
    return this._injector["get"](IDocExchangeService).importDocToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465);
  }
  exportDocByUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return this._injector["get"](IDocExchangeService).exportDocByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
  }
  exportDocBySnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
    return this._injector["get"](IDocExchangeService).exportDocBySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
  }
  transformSnapshotJsonToDocumentDataAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
    return this._injector["get"](IDocExchangeService).transformSnapshotJsonToDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
  }
  transformDocumentDataToSnapshotJsonAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614) {
    return this._injector["get"](IDocExchangeService).transformDocumentDataToSnapshotJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
  }
};
FUniver.extend(n);
export {};
