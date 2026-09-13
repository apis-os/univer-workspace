import { ISheetExchangeService } from "@univerjs-pro/sheets-exchange-client";
import { FUniver } from "@univerjs/core/facade";
var n = class extends FUniver {
  importSheetToUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    return this._injector["get"](ISheetExchangeService).importSheetToUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
  }
  importSheetToSnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
    return this._injector["get"](ISheetExchangeService).importSheetToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
  }
  exportSheetByUnitIdAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    return this._injector["get"](ISheetExchangeService).exportSheetByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
  }
  exportSheetBySnapshotAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
    return this._injector["get"](ISheetExchangeService).exportSheetBySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
  }
  transformSnapshotJsonToWorkbookDataAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    return this._injector["get"](ISheetExchangeService).transformSnapshotJsonToWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
  }
  transformWorkbookDataToSnapshotJsonAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    return this._injector["get"](ISheetExchangeService).transformWorkbookDataToSnapshotJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618);
  }
};
FUniver.extend(n);
export {};
