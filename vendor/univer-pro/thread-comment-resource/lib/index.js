import { UniverLicensePlugin as _0x3e0396 } from "@univerjs-pro/license";
import {
  DependentOn as _0x6971b3,
  IConfigService as _0x4f0294,
  Inject as _0x211227,
  Injector as _0x58514a,
  Plugin as _0x1f1b46,
  merge as _0x2e2b25,
} from "@univerjs/core";
import {
  IThreadCommentDataSourceService as _0x517e9e,
  UniverThreadCommentPlugin as _0x39d1ae,
} from "@univerjs/thread-comment";
var l = "@univerjs-pro/thread-comment-resource",
  u = "1.0.0-insiders.20260907-70fc579";
const d = {};
var f = class {
  async addComment(_0x4e3dc7) {
    return _0x4e3dc7;
  }
  async updateComment(_0x19793f) {
    return true;
  }
  async resolveComment(_0x42f2e8) {
    return true;
  }
  async deleteComment(_0x2d21f6, _0x42ea3c, _0x49a93f, _0x15db2d) {
    return true;
  }
  async listComments(_0x4d6b5a, _0x29d3f9, _0x119b42) {
    return [];
  }
  saveCommentToSnapshot(_0x528c11) {
    return {
      id: _0x528c11.id,
      threadId: _0x528c11.threadId,
      ref: _0x528c11.ref,
    };
  }
};
function p(_0x1a64b5, _0x2d4dd6) {
  return function (_0x1670c1, _0x5d2386) {
    _0x2d4dd6(_0x1670c1, _0x5d2386, _0x1a64b5);
  };
}
function m(_0x3a7e86, _0x1af7bd, _0x2ef3d4, _0x10e5fe) {
  var _0x387e6d = _0x312324,
    _0x229ee5 = arguments.length,
    _0x4d0389 =
      _0x229ee5 < 3
        ? _0x1af7bd
        : _0x10e5fe === null
          ? (_0x10e5fe = Object[_0x387e6d(286)](_0x1af7bd, _0x2ef3d4))
          : _0x10e5fe,
    _0x33fac7;
  if (
    typeof Reflect == _0x387e6d(268) &&
    typeof Reflect[_0x387e6d(263)] == "function"
  )
    _0x4d0389 = Reflect[_0x387e6d(263)](
      _0x3a7e86,
      _0x1af7bd,
      _0x2ef3d4,
      _0x10e5fe,
    );
  else {
    for (
      var _0x593689 = _0x3a7e86[_0x387e6d(248)] - 1;
      _0x593689 >= 0;
      _0x593689--
    )
      (_0x33fac7 = _0x3a7e86[_0x593689]) &&
        (_0x4d0389 =
          (_0x229ee5 < 3
            ? _0x33fac7(_0x4d0389)
            : _0x229ee5 > 3
              ? _0x33fac7(_0x1af7bd, _0x2ef3d4, _0x4d0389)
              : _0x33fac7(_0x1af7bd, _0x2ef3d4)) || _0x4d0389);
  }
  return (
    _0x229ee5 > 3 &&
      _0x4d0389 &&
      Object[_0x387e6d(288)](_0x1af7bd, _0x2ef3d4, _0x4d0389),
    _0x4d0389
  );
}
let h = class {
  constructor(_0x34f974, _0x4348bb) {
    ((this._dataSource = _0x34f974),
      (this._threadCommentDataSourceService = _0x4348bb),
      this.init());
  }
  init() {
    this._threadCommentDataSourceService["dataSource"] = this._dataSource;
  }
};
h = m([p(0, _0x211227(f)), p(1, _0x517e9e)], h);
function g(_0x58dce9) {
  "@babel/helpers - typeof";
  return (
    (g =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x18943b) {
            return typeof _0x18943b;
          }
        : function (_0x89d51c) {
            return _0x89d51c &&
              typeof Symbol == "function" &&
              _0x89d51c.constructor === Symbol &&
              _0x89d51c !== Symbol.prototype
              ? "symbol"
              : typeof _0x89d51c;
          }),
    g(_0x58dce9)
  );
}
function _(_0x292f12, _0xd445f3) {
  if (g(_0x292f12) != "object" || !_0x292f12) return _0x292f12;
  var _0x1987f5 = _0x292f12[Symbol.toPrimitive];
  if (_0x1987f5 !== undefined) {
    var _0x990075 = _0x1987f5.call(_0x292f12, _0xd445f3 || "default");
    if (g(_0x990075) != "object") return _0x990075;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0xd445f3 === "string" ? String : Number)(_0x292f12);
}
function v(_0x415eae) {
  var _0x7d0b66 = _0x312324,
    _0x5a7717 = _(_0x415eae, _0x7d0b66(259));
  return g(_0x5a7717) == _0x7d0b66(271) ? _0x5a7717 : _0x5a7717 + "";
}
function y(_0x8e5bbc, _0x31d92e, _0xe422ff) {
  return (
    (_0x31d92e = v(_0x31d92e)) in _0x8e5bbc
      ? Object.defineProperty(_0x8e5bbc, _0x31d92e, {
          value: _0xe422ff,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x8e5bbc[_0x31d92e] = _0xe422ff),
    _0x8e5bbc
  );
}
let b = class extends _0x1f1b46 {
  constructor(_0x281fce = d, _0x3d09f5, _0x43d530) {
    (super(),
      (this._config = _0x281fce),
      (this._injector = _0x3d09f5),
      (this._configService = _0x43d530));
    let { ..._0x3dfe10 } = _0x2e2b25({}, d, this._config);
    this._configService["setConfig"](
      "thread-comment-resource.config",
      _0x3dfe10,
    );
  }
  onStarting() {
    ([[f], [h]].forEach((_0x206f04) => {
      this._injector["add"](_0x206f04);
    }),
      this._injector["get"](h));
  }
};
(y(b, "pluginName", "UniverThreadCommentResourcePlugin"),
  y(b, "packageName", l),
  y(b, "version", u),
  (b = m(
    [
      _0x6971b3(_0x3e0396, _0x39d1ae),
      p(1, _0x211227(_0x58514a)),
      p(2, _0x4f0294),
    ],
    b,
  )));
export { b as UniverThreadCommentResourcePlugin };
