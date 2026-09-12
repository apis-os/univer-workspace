let e = require("@univerjs-pro/sheets-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importSheetToUnitIdAsync(_0x1792de) {
    return this._injector["get"](e.ISheetExchangeService).importSheetToUnitId(
      _0x1792de,
    );
  }
  importSheetToSnapshotAsync(_0x2f29f8) {
    return this._injector["get"](e.ISheetExchangeService).importSheetToSnapshot(
      _0x2f29f8,
    );
  }
  exportSheetByUnitIdAsync(_0x39e366, _0x1ef00c, _0x4095bf) {
    return this._injector["get"](e.ISheetExchangeService).exportSheetByUnitId(
      _0x39e366,
      _0x1ef00c,
      _0x4095bf,
    );
  }
  exportSheetBySnapshotAsync(_0xcf4497, _0x2c8a46, _0x4ef39d) {
    return this._injector["get"](e.ISheetExchangeService).exportSheetBySnapshot(
      _0xcf4497,
      _0x2c8a46,
      _0x4ef39d,
    );
  }
  transformSnapshotJsonToWorkbookDataAsync(_0x14180b) {
    return this._injector["get"](
      e.ISheetExchangeService,
    ).transformSnapshotJsonToWorkbookData(_0x14180b);
  }
  transformWorkbookDataToSnapshotJsonAsync(_0x33e450) {
    return this._injector["get"](
      e.ISheetExchangeService,
    ).transformWorkbookDataToSnapshotJson(_0x33e450);
  }
};
t.FUniver["extend"](n);
