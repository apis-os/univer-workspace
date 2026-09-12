let e = require("@univerjs-pro/range-preprocess"),
  t = require("@univerjs/sheets/facade");
var n = class extends t.FWorkbook {
  getPreprocessRanges(_0x1298e8) {
    return this._injector["get"](e.RangePreprocessController).getAllTableJson(
      this._workbook,
      _0x1298e8,
    );
  }
};
t.FWorkbook["extend"](n);
