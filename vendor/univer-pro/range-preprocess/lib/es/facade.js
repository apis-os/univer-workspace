import { RangePreprocessController as _0x25e995 } from "@univerjs-pro/range-preprocess";
import { FWorkbook as _0x349f97 } from "@univerjs/sheets/facade";
var n = class extends _0x349f97 {
  getPreprocessRanges(_0x4bae79) {
    return this._injector["get"](_0x25e995).getAllTableJson(
      this._workbook,
      _0x4bae79,
    );
  }
};
_0x349f97.extend(n);
export {};
