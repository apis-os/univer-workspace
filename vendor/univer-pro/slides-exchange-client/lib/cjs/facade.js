let e = require("@univerjs-pro/slides-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importSlideToUnitIdAsync(var_core_value_sig7524) {
    return this._injector["get"](e.ISlideExchangeService).importSlideToUnitId(var_core_value_sig7524);
  }
  importSlideToSnapshotAsync(var_core_value_sig2AD8) {
    return this._injector["get"](e.ISlideExchangeService).importSlideToSnapshot(var_core_value_sig2AD8);
  }
  exportSlideByUnitIdAsync(var_core_value_sig2AD0) {
    return this._injector["get"](e.ISlideExchangeService).exportSlideByUnitId(var_core_value_sig2AD0);
  }
  exportSlideBySnapshotAsync(var_core_value_sig3EEE) {
    return this._injector["get"](e.ISlideExchangeService).exportSlideBySnapshot(var_core_value_sig3EEE);
  }
  transformSnapshotJsonToSlideDataAsync(var_core_value_sigBC46) {
    return this._injector["get"](e.ISlideExchangeService).transformSnapshotJsonToSlideData(var_core_value_sigBC46);
  }
  transformSlideDataToSnapshotJsonAsync(var_core_value_sig3D7D) {
    return this._injector["get"](e.ISlideExchangeService).transformSlideDataToSnapshotJson(var_core_value_sig3D7D);
  }
};
t.FUniver["extend"](n);
