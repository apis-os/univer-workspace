let e = require("@univerjs-pro/live-share"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade");
function r(_0x518b10) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1c0c90) {
            return typeof _0x1c0c90;
          }
        : function (_0x50b50e) {
            return _0x50b50e &&
              typeof Symbol == "function" &&
              _0x50b50e.constructor === Symbol &&
              _0x50b50e !== Symbol.prototype
              ? "symbol"
              : typeof _0x50b50e;
          }),
    r(_0x518b10)
  );
}
function i(_0x58becf, _0x2cd6da) {
  if (r(_0x58becf) != "object" || !_0x58becf) return _0x58becf;
  var _0x3f946b = _0x58becf[Symbol.toPrimitive];
  if (_0x3f946b !== undefined) {
    var _0x897aad = _0x3f946b.call(_0x58becf, _0x2cd6da || "default");
    if (r(_0x897aad) != "object") return _0x897aad;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2cd6da === "string" ? String : Number)(_0x58becf);
}
function a(_0xfc2ff1) {
  var _0x268332 = i(_0xfc2ff1, "string");
  return r(_0x268332) == "symbol" ? _0x268332 : _0x268332 + "";
}
function o(_0x5bf566, _0x80fedb, _0x4f2e55) {
  return (
    (_0x80fedb = a(_0x80fedb)) in _0x5bf566
      ? Object.defineProperty(_0x5bf566, _0x80fedb, {
          value: _0x4f2e55,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5bf566[_0x80fedb] = _0x4f2e55),
    _0x5bf566
  );
}
var s = class extends n.FUniver {
  constructor(..._0x55de17) {
    (super(..._0x55de17), o(this, "_liveShareController", undefined));
  }
  _initialize(_0x574464) {
    this._liveShareController = _0x574464.get(e.LiveShareController);
  }
  getLiveShareStatus() {
    let _0x89c317 = this._injector["get"](
      t.IUniverInstanceService,
    ).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x89c317) throw Error("No active workbook found.");
    let _0x10505f = _0x89c317.getUnitId(),
      _0x6ffa61 =
        this._liveShareController["getLiveShareCoordinatorSync"](_0x10505f);
    return (
      (_0x6ffa61 == null ? undefined : _0x6ffa61.getStatus()) ??
      e.LiveShareStatus["IDLE"]
    );
  }
  startFollowing() {
    let _0x5e8b2e = this._injector["get"](
      t.IUniverInstanceService,
    ).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x5e8b2e) throw Error("No active workbook found.");
    let _0x56641c = _0x5e8b2e.getUnitId(),
      _0x1d2368 =
        this._liveShareController["getLiveShareCoordinatorSync"](_0x56641c);
    if (!_0x1d2368)
      throw Error("No LiveShareCoordinator found for the active workbook.");
    _0x1d2368.startFollowing();
  }
  stopFollowing() {
    let _0x38461f = this._injector["get"](
      t.IUniverInstanceService,
    ).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x38461f) throw Error("No active workbook found.");
    let _0x1fc837 = _0x38461f.getUnitId(),
      _0x54171d =
        this._liveShareController["getLiveShareCoordinatorSync"](_0x1fc837);
    if (!_0x54171d)
      throw Error("No LiveShareCoordinator found for the active workbook.");
    _0x54171d.stopFollowing();
  }
  startPresenting() {
    let _0x501683 = this._injector["get"](
      t.IUniverInstanceService,
    ).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x501683) throw Error("No active workbook found.");
    let _0x446b31 = _0x501683.getUnitId(),
      _0xe3f447 =
        this._liveShareController["getLiveShareCoordinatorSync"](_0x446b31);
    if (!_0xe3f447)
      throw Error("No LiveShareCoordinator found for the active workbook.");
    _0xe3f447.tryStartPresenting();
  }
  stopPresenting() {
    let _0x5e5d44 = this._injector["get"](
      t.IUniverInstanceService,
    ).getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x5e5d44) throw Error("No\x20active\x20workbook\x20found.");
    let _0x15b387 = _0x5e5d44.getUnitId(),
      _0x3f0dc9 =
        this._liveShareController["getLiveShareCoordinatorSync"](_0x15b387);
    if (!_0x3f0dc9)
      throw Error(
        "No\x20LiveShareCoordinator\x20found\x20for\x20the\x20active\x20workbook.",
      );
    _0x3f0dc9.stopPresenting();
  }
};
n.FUniver["extend"](s);
var c = class extends n.FEnum {
  get LiveShareStatusEnum() {
    return e.LiveShareStatus;
  }
};
n.FEnum["extend"](c);
