let e = require("@univerjs-pro/collaboration-client-ui"),
  t = require("@univerjs/core/facade");
var n = class extends t.FUniver {
  runOnServer(_0x30a987, _0x28d6d4, ..._0x5e8c2e) {
    return this._injector["get"](e.RemoteUniscriptService).runOnServer(
      _0x30a987,
      _0x28d6d4,
      {},
      ..._0x5e8c2e,
    );
  }
};
t.FUniver["extend"](n);
