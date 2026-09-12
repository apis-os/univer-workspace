import { UniverLicensePlugin as _0xbadc4b } from "@univerjs-pro/license";
import { UniverSlidesPlugin as _0x38a3aa } from "@univerjs-pro/slides";
import {
  DependentOn as _0xfd9142,
  Disposable as _0x327a88,
  IConfigService as _0x5bbd26,
  IResourceManagerService as _0x33c975,
  Inject as _0x5e0e3b,
  Injector as _0x44f40a,
  Plugin as _0x27a590,
  UniverInstanceType as _0x39e32b,
  merge as _0x2afaf9,
} from "@univerjs/core";
import {
  IThreadCommentDataSourceService as _0x5bd8f3,
  TC_PLUGIN_NAME as _0x6b3a76,
  ThreadCommentModel as _0x4dffc9,
  UniverThreadCommentPlugin as _0x2cb67b,
  createThreadCommentResourceHook as _0x499693,
} from "@univerjs/thread-comment";
const g = "slides-thread-comment.config",
  _ = {};
var v = "@univerjs-pro/slides-thread-comment",
  y = "1.0.0-insiders.20260907-70fc579";
function b(_0x30bd8d, _0x35aa8e) {
  return function (_0x18ce48, _0x40b2c7) {
    _0x35aa8e(_0x18ce48, _0x40b2c7, _0x30bd8d);
  };
}
function x(_0x4740cc, _0x5cae77, _0x3aa681, _0x918b61) {
  var _0x497898 = _0x3561d6,
    _0x14b348 = arguments[_0x497898(502)],
    _0x31d1d2 =
      _0x14b348 < 3
        ? _0x5cae77
        : _0x918b61 === null
          ? (_0x918b61 = Object[_0x497898(491)](_0x5cae77, _0x3aa681))
          : _0x918b61,
    _0x16ee47;
  if (
    typeof Reflect == _0x497898(532) &&
    typeof Reflect[_0x497898(512)] == "function"
  )
    _0x31d1d2 = Reflect[_0x497898(512)](
      _0x4740cc,
      _0x5cae77,
      _0x3aa681,
      _0x918b61,
    );
  else {
    for (var _0x6a8455 = _0x4740cc.length - 1; _0x6a8455 >= 0; _0x6a8455--)
      (_0x16ee47 = _0x4740cc[_0x6a8455]) &&
        (_0x31d1d2 =
          (_0x14b348 < 3
            ? _0x16ee47(_0x31d1d2)
            : _0x14b348 > 3
              ? _0x16ee47(_0x5cae77, _0x3aa681, _0x31d1d2)
              : _0x16ee47(_0x5cae77, _0x3aa681)) || _0x31d1d2);
  }
  return (
    _0x14b348 > 3 &&
      _0x31d1d2 &&
      Object[_0x497898(510)](_0x5cae77, _0x3aa681, _0x31d1d2),
    _0x31d1d2
  );
}
const S = "SLIDE_" + _0x6b3a76;
let C = class extends _0x327a88 {
  constructor(_0xca39b2, _0x477194, _0x50585d) {
    (super(),
      (this._resourceManagerService = _0xca39b2),
      (this._threadCommentModel = _0x477194),
      (this._threadCommentDataSourceService = _0x50585d),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          _0x499693(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            S,
            [_0x39e32b.UNIVER_SLIDE],
          ),
        ),
      ));
  }
};
C = x([b(0, _0x33c975), b(1, _0x5e0e3b(_0x4dffc9)), b(2, _0x5bd8f3)], C);
function w(_0x431913) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1ca304) {
            return typeof _0x1ca304;
          }
        : function (_0x2a4e83) {
            return _0x2a4e83 &&
              typeof Symbol == "function" &&
              _0x2a4e83.constructor === Symbol &&
              _0x2a4e83 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2a4e83;
          }),
    w(_0x431913)
  );
}
function T(_0x138055, _0x14c1f5) {
  if (w(_0x138055) != "object" || !_0x138055) return _0x138055;
  var _0x4d70aa = _0x138055[Symbol.toPrimitive];
  if (_0x4d70aa !== undefined) {
    var _0x3fa003 = _0x4d70aa.call(_0x138055, _0x14c1f5 || "default");
    if (w(_0x3fa003) != "object") return _0x3fa003;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x14c1f5 === "string" ? String : Number)(_0x138055);
}
function E(_0x159692) {
  var _0x267dc = _0x3561d6,
    _0x263674 = T(_0x159692, _0x267dc(529));
  return w(_0x263674) == _0x267dc(504) ? _0x263674 : _0x263674 + "";
}
function D(_0x2cceb1, _0x1cc87c, _0x2849f9) {
  return (
    (_0x1cc87c = E(_0x1cc87c)) in _0x2cceb1
      ? Object.defineProperty(_0x2cceb1, _0x1cc87c, {
          value: _0x2849f9,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2cceb1[_0x1cc87c] = _0x2849f9),
    _0x2cceb1
  );
}
let O = class extends _0x27a590 {
  constructor(_0x10f6e7 = _, _0x28a18b, _0x169aeb) {
    (super(),
      (this._config = _0x10f6e7),
      (this._injector = _0x28a18b),
      (this._configService = _0x169aeb));
    let { ..._0x44f3be } = _0x2afaf9({}, _, this._config);
    this._configService["setConfig"](g, _0x44f3be);
  }
  onStarting() {
    (this._injector["add"]([C]), this._injector["get"](C));
  }
};
(D(O, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_PLUGIN"),
  D(O, "packageName", v),
  D(O, "version", y),
  D(O, "type", _0x39e32b.UNIVER_SLIDE),
  (O = x(
    [
      _0xfd9142(_0xbadc4b, _0x2cb67b, _0x38a3aa),
      b(1, _0x5e0e3b(_0x44f40a)),
      b(2, _0x5bbd26),
    ],
    O,
  )));
export {
  g as SLIDES_THREAD_COMMENT_PLUGIN_CONFIG_KEY,
  O as UniverSlidesThreadCommentPlugin,
};
