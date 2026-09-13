import { OpenSlidePrintDialogOperation as var_core_value_sig2AD0, SlidePrintOperation as var_core_value_sig3EEE } from "@univerjs-pro/slides-print";
import { FUniver as var_core_value_sigBC46 } from "@univerjs/core/facade";
var r = class extends var_core_value_sigBC46 {
  printSlidesAsync(var_core_value_sig7524) {
    return this._commandService["executeCommand"](var_core_value_sig3EEE.id, var_core_value_sig7524);
  }
  openSlidesPrintDialog(var_core_value_sig2AD8) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig2AD0.id, var_core_value_sig2AD8);
  }
};
var_core_value_sigBC46.extend(r);
export {};
