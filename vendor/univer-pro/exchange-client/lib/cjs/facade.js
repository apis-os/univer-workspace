let e = require("@univerjs-pro/exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  downloadFile(var_core_value_sig7524, var_core_value_sig2AD8, var_core_value_sig2AD0) {
    this._injector["get"](e.IExchangeService).downloadFile(var_core_value_sig7524, var_core_value_sig2AD8, var_core_value_sig2AD0);
  }
};
t.FUniver["extend"](n);
