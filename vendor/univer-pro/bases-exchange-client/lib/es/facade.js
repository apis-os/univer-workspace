import { IBaseExchangeService as _0x5251f6 } from "@univerjs-pro/bases-exchange-client";
import { FUniver as _0x45b4a3 } from "@univerjs/core/facade";
var n = class extends _0x45b4a3 {
  importBaseToUnitIdAsync(_0x2d181a) {
    return this._injector["get"](_0x5251f6).importBaseToUnitId(_0x2d181a);
  }
  importBaseToSnapshotAsync(_0x258b0b) {
    return this._injector["get"](_0x5251f6).importBaseToSnapshot(_0x258b0b);
  }
  exportBaseByUnitIdAsync(_0x404d57, _0x11882e, _0x2b345b) {
    return this._injector["get"](_0x5251f6).exportBaseByUnitId(
      _0x404d57,
      _0x11882e,
      _0x2b345b,
    );
  }
  exportBaseBySnapshotAsync(_0x30fe66, _0x4d1889, _0x4910a7) {
    return this._injector["get"](_0x5251f6).exportBaseBySnapshot(
      _0x30fe66,
      _0x4d1889,
      _0x4910a7,
    );
  }
  transformSnapshotJsonToBaseDataAsync(_0x57194f) {
    return this._injector["get"](_0x5251f6).transformSnapshotJsonToBaseData(
      _0x57194f,
    );
  }
  transformBaseDataToSnapshotJsonAsync(_0x569c6a) {
    return this._injector["get"](_0x5251f6).transformBaseDataToSnapshotJson(
      _0x569c6a,
    );
  }
};
_0x45b4a3.extend(n);
export {};
