import { ChartImageExportService } from "@univerjs-pro/chart-ui";
import { FChart } from "@univerjs-pro/engine-chart/facade";
var n = class extends FChart {
  exportImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    return this._injector["get"](ChartImageExportService).exportImage(this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
  }
};
FChart.extend(n);
export {};
