let e = require("@univerjs-pro/chart-ui"),
  t = require("@univerjs-pro/engine-chart/facade");
var n = class extends t.FChart {
  exportImage(_0x4b83ec) {
    return this._injector["get"](e.ChartImageExportService).exportImage(
      this,
      _0x4b83ec,
    );
  }
};
t.FChart["extend"](n);
