let e = require("@univerjs-pro/sheets-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importSheetToUnitIdAsync(var_core_value_sig7524) {
    return this._injector["get"](e.ISheetExchangeService).importSheetToUnitId(var_core_value_sig7524);
  }
  importSheetToSnapshotAsync(var_core_value_sig2AD8) {
    return this._injector["get"](e.ISheetExchangeService).importSheetToSnapshot(var_core_value_sig2AD8);
  }
  exportSheetByUnitIdAsync(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46) {
    return this._injector["get"](e.ISheetExchangeService).exportSheetByUnitId(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46);
  }
  exportSheetBySnapshotAsync(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061) {
    return this._injector["get"](e.ISheetExchangeService).exportSheetBySnapshot(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061);
  }
  transformSnapshotJsonToWorkbookDataAsync(var_core_value_sig4D4C) {
    return this._injector["get"](e.ISheetExchangeService).transformSnapshotJsonToWorkbookData(var_core_value_sig4D4C);
  }
  transformWorkbookDataToSnapshotJsonAsync(var_core_value_sigC9E0) {
    return this._injector["get"](e.ISheetExchangeService).transformWorkbookDataToSnapshotJson(var_core_value_sigC9E0);
  }
};
t.FUniver["extend"](n);
