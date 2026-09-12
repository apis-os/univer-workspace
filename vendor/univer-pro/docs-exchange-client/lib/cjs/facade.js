let e = require("@univerjs-pro/docs-exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  importDocToUnitIdAsync(_0x8ffb62, _0x46d1b1) {
    return this._injector["get"](e.IDocExchangeService).importDocToUnitId(
      _0x8ffb62,
      _0x46d1b1,
    );
  }
  importDocToSnapshotAsync(_0x472fe1, _0x5a5d24) {
    return this._injector["get"](e.IDocExchangeService).importDocToSnapshot(
      _0x472fe1,
      _0x5a5d24,
    );
  }
  exportDocByUnitIdAsync(_0x53cb0c) {
    return this._injector["get"](e.IDocExchangeService).exportDocByUnitId(
      _0x53cb0c,
    );
  }
  exportDocBySnapshotAsync(_0xb4ae5) {
    return this._injector["get"](e.IDocExchangeService).exportDocBySnapshot(
      _0xb4ae5,
    );
  }
  transformSnapshotJsonToDocumentDataAsync(_0x31f05d) {
    return this._injector["get"](
      e.IDocExchangeService,
    ).transformSnapshotJsonToDocumentData(_0x31f05d);
  }
  transformDocumentDataToSnapshotJsonAsync(_0x264923) {
    return this._injector["get"](
      e.IDocExchangeService,
    ).transformDocumentDataToSnapshotJson(_0x264923);
  }
};
t.FUniver["extend"](n);
