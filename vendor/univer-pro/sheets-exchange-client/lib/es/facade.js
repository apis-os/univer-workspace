import { ISheetExchangeService as _0x53a5ee } from "@univerjs-pro/sheets-exchange-client";
import { FUniver as _0x3696d2 } from "@univerjs/core/facade";
var n = class extends _0x3696d2 {
  importSheetToUnitIdAsync(_0x29e944) {
    return this._injector["get"](_0x53a5ee).importSheetToUnitId(_0x29e944);
  }
  importSheetToSnapshotAsync(_0x2c58d8) {
    return this._injector["get"](_0x53a5ee).importSheetToSnapshot(_0x2c58d8);
  }
  exportSheetByUnitIdAsync(_0x180847, _0x454ce9, _0x1191dc) {
    return this._injector["get"](_0x53a5ee).exportSheetByUnitId(
      _0x180847,
      _0x454ce9,
      _0x1191dc,
    );
  }
  exportSheetBySnapshotAsync(_0x40feed, _0x3a4f5e, _0x187216) {
    return this._injector["get"](_0x53a5ee).exportSheetBySnapshot(
      _0x40feed,
      _0x3a4f5e,
      _0x187216,
    );
  }
  transformSnapshotJsonToWorkbookDataAsync(_0x1502aa) {
    return this._injector["get"](_0x53a5ee).transformSnapshotJsonToWorkbookData(
      _0x1502aa,
    );
  }
  transformWorkbookDataToSnapshotJsonAsync(_0x4f1214) {
    return this._injector["get"](_0x53a5ee).transformWorkbookDataToSnapshotJson(
      _0x4f1214,
    );
  }
};
_0x3696d2.extend(n);
export {};
