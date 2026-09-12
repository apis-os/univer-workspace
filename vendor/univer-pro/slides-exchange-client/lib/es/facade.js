import { ISlideExchangeService as _0x5ac374 } from "@univerjs-pro/slides-exchange-client";
import { FUniver as _0x62c4dd } from "@univerjs/core/facade";
var n = class extends _0x62c4dd {
  importSlideToUnitIdAsync(_0x309297) {
    return this._injector["get"](_0x5ac374).importSlideToUnitId(_0x309297);
  }
  importSlideToSnapshotAsync(_0x51270d) {
    return this._injector["get"](_0x5ac374).importSlideToSnapshot(_0x51270d);
  }
  exportSlideByUnitIdAsync(_0x528c02) {
    return this._injector["get"](_0x5ac374).exportSlideByUnitId(_0x528c02);
  }
  exportSlideBySnapshotAsync(_0x92b9b4) {
    return this._injector["get"](_0x5ac374).exportSlideBySnapshot(_0x92b9b4);
  }
  transformSnapshotJsonToSlideDataAsync(_0x2f5585) {
    return this._injector["get"](_0x5ac374).transformSnapshotJsonToSlideData(
      _0x2f5585,
    );
  }
  transformSlideDataToSnapshotJsonAsync(_0x2773d8) {
    return this._injector["get"](_0x5ac374).transformSlideDataToSnapshotJson(
      _0x2773d8,
    );
  }
};
_0x62c4dd.extend(n);
export {};
