let e = require("@univerjs-pro/live-share"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade");
function r(var_core_value_sigF0F9) {
  "@babel/helpers - typeof";

  return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig7524) {
    return typeof var_core_value_sig7524;
  } : function (var_core_value_sig2AD8) {
    return var_core_value_sig2AD8 && typeof Symbol == "function" && var_core_value_sig2AD8.constructor === Symbol && var_core_value_sig2AD8 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig2AD8;
  }, r(var_core_value_sigF0F9);
}
function i(var_core_value_sig1A0F, var_core_value_sigFBA4) {
  if (r(var_core_value_sig1A0F) != "object" || !var_core_value_sig1A0F) return var_core_value_sig1A0F;
  var var_core_value_sig4383 = var_core_value_sig1A0F[Symbol.toPrimitive];
  if (var_core_value_sig4383 !== undefined) {
    var var_core_value_sig186C = var_core_value_sig4383.call(var_core_value_sig1A0F, var_core_value_sigFBA4 || "default");
    if (r(var_core_value_sig186C) != "object") return var_core_value_sig186C;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigFBA4 === "string" ? String : Number)(var_core_value_sig1A0F);
}
function a(var_core_value_sigD955) {
  var var_core_value_sig48BD = i(var_core_value_sigD955, "string");
  return r(var_core_value_sig48BD) == "symbol" ? var_core_value_sig48BD : var_core_value_sig48BD + "";
}
function o(var_core_value_sig429F, var_core_value_sigF62A, var_core_value_sig8178) {
  return (var_core_value_sigF62A = a(var_core_value_sigF62A)) in var_core_value_sig429F ? Object.defineProperty(var_core_value_sig429F, var_core_value_sigF62A, {
    value: var_core_value_sig8178,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig429F[var_core_value_sigF62A] = var_core_value_sig8178, var_core_value_sig429F;
}
var s = class extends n.FUniver {
  constructor(...var_core_value_sig2AD0) {
    super(...var_core_value_sig2AD0), o(this, "_liveShareController", undefined);
  }
  _initialize(var_core_value_sig3EEE) {
    this._liveShareController = var_core_value_sig3EEE.get(e.LiveShareController);
  }
  getLiveShareStatus() {
    let var_core_value_sigBC46 = this._injector["get"](t.IUniverInstanceService).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sigBC46) throw Error("No active workbook found.");
    let var_core_value_sig3D7D = var_core_value_sigBC46.getUnitId(),
      var_core_value_sig27E5 = this._liveShareController["getLiveShareCoordinatorSync"](var_core_value_sig3D7D);
    return (var_core_value_sig27E5 == null ? undefined : var_core_value_sig27E5.getStatus()) ?? e.LiveShareStatus["IDLE"];
  }
  startFollowing() {
    let var_core_value_sig8061 = this._injector["get"](t.IUniverInstanceService).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sig8061) throw Error("No active workbook found.");
    let var_core_value_sig4D4C = var_core_value_sig8061.getUnitId(),
      var_core_value_sigC9E0 = this._liveShareController["getLiveShareCoordinatorSync"](var_core_value_sig4D4C);
    if (!var_core_value_sigC9E0) throw Error("No LiveShareCoordinator found for the active workbook.");
    var_core_value_sigC9E0.startFollowing();
  }
  stopFollowing() {
    let var_core_value_sig76BA = this._injector["get"](t.IUniverInstanceService).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sig76BA) throw Error("No active workbook found.");
    let var_core_value_sigFBFA = var_core_value_sig76BA.getUnitId(),
      var_core_value_sigF602 = this._liveShareController["getLiveShareCoordinatorSync"](var_core_value_sigFBFA);
    if (!var_core_value_sigF602) throw Error("No LiveShareCoordinator found for the active workbook.");
    var_core_value_sigF602.stopFollowing();
  }
  startPresenting() {
    let var_core_value_sig1BBD = this._injector["get"](t.IUniverInstanceService).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sig1BBD) throw Error("No active workbook found.");
    let var_core_value_sigF704 = var_core_value_sig1BBD.getUnitId(),
      var_core_value_sig2BCF = this._liveShareController["getLiveShareCoordinatorSync"](var_core_value_sigF704);
    if (!var_core_value_sig2BCF) throw Error("No LiveShareCoordinator found for the active workbook.");
    var_core_value_sig2BCF.tryStartPresenting();
  }
  stopPresenting() {
    let var_core_value_sig0D69 = this._injector["get"](t.IUniverInstanceService).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sig0D69) throw Error("No\x20active\x20workbook\x20found.");
    let var_core_value_sig480E = var_core_value_sig0D69.getUnitId(),
      var_core_value_sig26DB = this._liveShareController["getLiveShareCoordinatorSync"](var_core_value_sig480E);
    if (!var_core_value_sig26DB) throw Error("No\x20LiveShareCoordinator\x20found\x20for\x20the\x20active\x20workbook.");
    var_core_value_sig26DB.stopPresenting();
  }
};
n.FUniver["extend"](s);
var c = class extends n.FEnum {
  get LiveShareStatusEnum() {
    return e.LiveShareStatus;
  }
};
n.FEnum["extend"](c);
