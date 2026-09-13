Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (var_core_value_sigFBFA, var_core_value_sigF602, var_core_value_sig1BBD, var_core_value_sigF704) => {
    if (var_core_value_sigF602 && typeof var_core_value_sigF602 == "object" || typeof var_core_value_sigF602 == "function") {
      for (var var_core_value_sig2BCF = r(var_core_value_sigF602), var_core_value_sig0D69 = 0, var_core_value_sig480E = var_core_value_sig2BCF.length, var_core_value_sig26DB; var_core_value_sig0D69 < var_core_value_sig480E; var_core_value_sig0D69++) var_core_value_sig26DB = var_core_value_sig2BCF[var_core_value_sig0D69], !a.call(var_core_value_sigFBFA, var_core_value_sig26DB) && var_core_value_sig26DB !== var_core_value_sig1BBD && t(var_core_value_sigFBFA, var_core_value_sig26DB, {
        get: (var_core_value_sig7524 => var_core_value_sigF602[var_core_value_sig7524]).bind(null, var_core_value_sig26DB),
        enumerable: !(var_core_value_sigF704 = n(var_core_value_sigF602, var_core_value_sig26DB)) || var_core_value_sigF704.enumerable
      });
    }
    return var_core_value_sigFBFA;
  },
  s = (var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4) => (var_core_value_sigFBA4 = var_core_value_sigF0F9 == null ? {} : e(i(var_core_value_sigF0F9)), o(var_core_value_sig1A0F || !var_core_value_sigF0F9 || !var_core_value_sigF0F9.__esModule ? t(var_core_value_sigFBA4, "default", {
    value: var_core_value_sigF0F9,
    enumerable: true
  }) : var_core_value_sigFBA4, var_core_value_sigF0F9));
let c = require("@univerjs-pro/bases/facade"),
  l = require("@univerjs/thread-comment");
l = s(l);
var u = class extends c.FBaseTableRecord {
  _initialize(var_core_value_sig8061) {
    let var_core_value_sig4D4C;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => var_core_value_sig4D4C ??= var_core_value_sig8061.get(l.ThreadCommentFacadeService)
    });
  }
  createCommentAsync(var_core_value_sigC9E0, var_core_value_sig76BA = {}) {
    return this._threadCommentService["createCommentAsync"]({
      ...var_core_value_sig76BA,
      unitId: this._baseUnitId,
      subUnitId: this._baseTableId,
      anchor: {
        kind: l.ThreadCommentAnchorKind["BASE_RECORD"],
        tableId: this._baseTableId,
        recordId: this._recordId
      },
      content: var_core_value_sigC9E0
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [l.ThreadCommentAnchorKind["BASE_RECORD"]]
    }).filter(var_core_value_sig2AD8 => {
      var var_core_value_sig2AD0 = ox54a505,
        var_core_value_sig3EEE;
      return ((var_core_value_sig3EEE = var_core_value_sig2AD8.anchor) == null ? undefined : var_core_value_sig3EEE[var_core_value_sig2AD0(224)]) === l[var_core_value_sig2AD0(223)].BASE_RECORD && var_core_value_sig2AD8[var_core_value_sig2AD0(230)][var_core_value_sig2AD0(238)] === this[var_core_value_sig2AD0(246)];
    });
  }
  async listCommentsAsync() {
    return (await this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [l.ThreadCommentAnchorKind["BASE_RECORD"]]
    })).filter(var_core_value_sigBC46 => {
      var var_core_value_sig3D7D = ox2b6766,
        var_core_value_sig27E5;
      return ((var_core_value_sig27E5 = var_core_value_sigBC46[var_core_value_sig3D7D(230)]) == null ? undefined : var_core_value_sig27E5.kind) === l[var_core_value_sig3D7D(223)].BASE_RECORD && var_core_value_sigBC46[var_core_value_sig3D7D(230)][var_core_value_sig3D7D(238)] === this[var_core_value_sig3D7D(246)];
    });
  }
};
c.FBaseTableRecord["extend"](u), exports.FBaseTableRecordThreadCommentMixin = u;
