import { RangePreprocessController as var_core_value_sig2AD8 } from "@univerjs-pro/range-preprocess";
import { FWorkbook as var_core_value_sig2AD0 } from "@univerjs/sheets/facade";
var n = class extends var_core_value_sig2AD0 {
  getPreprocessRanges(var_core_value_sig7524) {
    return this._injector["get"](var_core_value_sig2AD8).getAllTableJson(this._workbook, var_core_value_sig7524);
  }
};
var_core_value_sig2AD0.extend(n);
export {};
