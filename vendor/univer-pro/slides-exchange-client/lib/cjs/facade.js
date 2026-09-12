let e = require("@univerjs-pro/slides-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importSlideToUnitIdAsync(_0x2280de) {
    return this._injector["get"](e.ISlideExchangeService).importSlideToUnitId(
      _0x2280de,
    );
  }
  importSlideToSnapshotAsync(_0x14223b) {
    return this._injector["get"](e.ISlideExchangeService).importSlideToSnapshot(
      _0x14223b,
    );
  }
  exportSlideByUnitIdAsync(_0x2ad696) {
    return this._injector["get"](e.ISlideExchangeService).exportSlideByUnitId(
      _0x2ad696,
    );
  }
  exportSlideBySnapshotAsync(_0x467fa4) {
    return this._injector["get"](e.ISlideExchangeService).exportSlideBySnapshot(
      _0x467fa4,
    );
  }
  transformSnapshotJsonToSlideDataAsync(_0x5898f8) {
    return this._injector["get"](
      e.ISlideExchangeService,
    ).transformSnapshotJsonToSlideData(_0x5898f8);
  }
  transformSlideDataToSnapshotJsonAsync(_0x219156) {
    return this._injector["get"](
      e.ISlideExchangeService,
    ).transformSlideDataToSnapshotJson(_0x219156);
  }
};
t.FUniver["extend"](n);
