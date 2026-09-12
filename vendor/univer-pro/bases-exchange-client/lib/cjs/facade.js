let e = require("@univerjs-pro/bases-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importBaseToUnitIdAsync(_0x54eee4) {
    return this._injector["get"](e.IBaseExchangeService).importBaseToUnitId(
      _0x54eee4,
    );
  }
  importBaseToSnapshotAsync(_0x4ca721) {
    return this._injector["get"](e.IBaseExchangeService).importBaseToSnapshot(
      _0x4ca721,
    );
  }
  exportBaseByUnitIdAsync(_0x123aca, _0x7819b2, _0x1869ec) {
    return this._injector["get"](e.IBaseExchangeService).exportBaseByUnitId(
      _0x123aca,
      _0x7819b2,
      _0x1869ec,
    );
  }
  exportBaseBySnapshotAsync(_0x5ab9bd, _0x159b73, _0x3ed93a) {
    return this._injector["get"](e.IBaseExchangeService).exportBaseBySnapshot(
      _0x5ab9bd,
      _0x159b73,
      _0x3ed93a,
    );
  }
  transformSnapshotJsonToBaseDataAsync(_0x29ea64) {
    return this._injector["get"](
      e.IBaseExchangeService,
    ).transformSnapshotJsonToBaseData(_0x29ea64);
  }
  transformBaseDataToSnapshotJsonAsync(_0x1026b8) {
    return this._injector["get"](
      e.IBaseExchangeService,
    ).transformBaseDataToSnapshotJson(_0x1026b8);
  }
};
t.FUniver["extend"](n);
