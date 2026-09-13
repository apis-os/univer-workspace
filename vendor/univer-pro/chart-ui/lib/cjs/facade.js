let e = require("@univerjs-pro/chart-ui"),
  t = require("@univerjs-pro/engine-chart/facade");
var n = class extends t.FChart {
  exportImage(var_core_value_sig7524) {
    return this._injector["get"](e.ChartImageExportService).exportImage(this, var_core_value_sig7524);
  }
};
t.FChart["extend"](n);
