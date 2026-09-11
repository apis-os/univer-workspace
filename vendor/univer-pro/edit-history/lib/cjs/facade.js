Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs/core/facade");
var n = class {
    constructor(_0x50f3e6, _0x49cd0d) {
      ((this._service = _0x50f3e6), (this._prepared = _0x49cd0d));
    }
    query(_0x43eb34) {
      return this._service["query"](this._prepared, _0x43eb34);
    }
  },
  r = class extends t.FUniver {
    compareUnitData(_0x2cf91e) {
      return this._injector["get"](e.UnitComparisonService).compare(_0x2cf91e);
    }
    prepareUnitComparison(_0x1a6b71) {
      let _0x32977f = this._injector["get"](e.UnitComparisonService);
      return new n(_0x32977f, _0x32977f.prepare(_0x1a6b71));
    }
  };
(t.FUniver["extend"](r), (exports.FUnitComparison = n));
