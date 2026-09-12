let e = require("@univerjs-pro/slides-print"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  printSlidesAsync(_0x1451a9) {
    return this._commandService["executeCommand"](
      e.SlidePrintOperation["id"],
      _0x1451a9,
    );
  }
  openSlidesPrintDialog(_0x4362c9) {
    return this._commandService["syncExecuteCommand"](
      e.OpenSlidePrintDialogOperation["id"],
      _0x4362c9,
    );
  }
};
t.FUniver["extend"](n);
