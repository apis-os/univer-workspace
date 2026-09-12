let e = require("@univerjs-pro/exchange-client"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  downloadFile(_0x2e1404, _0x30d6e1, _0x106615) {
    this._injector["get"](e.IExchangeService).downloadFile(
      _0x2e1404,
      _0x30d6e1,
      _0x106615,
    );
  }
};
t.FUniver["extend"](n);
