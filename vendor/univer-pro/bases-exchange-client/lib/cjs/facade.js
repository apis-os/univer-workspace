let e = require("@univerjs-pro/bases-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importBaseToUnitIdAsync(var_core_value_sig7524) {
    return this._injector["get"](e.IBaseExchangeService).importBaseToUnitId(var_core_value_sig7524);
  }
  importBaseToSnapshotAsync(var_core_value_sig2AD8) {
    return this._injector["get"](e.IBaseExchangeService).importBaseToSnapshot(var_core_value_sig2AD8);
  }
  exportBaseByUnitIdAsync(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46) {
    return this._injector["get"](e.IBaseExchangeService).exportBaseByUnitId(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46);
  }
  exportBaseBySnapshotAsync(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061) {
    return this._injector["get"](e.IBaseExchangeService).exportBaseBySnapshot(var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061);
  }
  transformSnapshotJsonToBaseDataAsync(var_core_value_sig4D4C) {
    return this._injector["get"](e.IBaseExchangeService).transformSnapshotJsonToBaseData(var_core_value_sig4D4C);
  }
  transformBaseDataToSnapshotJsonAsync(var_core_value_sigC9E0) {
    return this._injector["get"](e.IBaseExchangeService).transformBaseDataToSnapshotJson(var_core_value_sigC9E0);
  }
};
t.FUniver["extend"](n);
