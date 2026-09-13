let e = require("@univerjs-pro/slides-print"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  printSlidesAsync(var_core_value_sig7524) {
    return this._commandService["executeCommand"](e.SlidePrintOperation["id"], var_core_value_sig7524);
  }
  openSlidesPrintDialog(var_core_value_sig2AD8) {
    return this._commandService["syncExecuteCommand"](e.OpenSlidePrintDialogOperation["id"], var_core_value_sig2AD8);
  }
};
t.FUniver["extend"](n);
