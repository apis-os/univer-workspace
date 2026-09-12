import { UniverBasesPlugin as _0x417d46 } from "@univerjs-pro/bases";
import { UniverLicensePlugin as _0x39558c } from "@univerjs-pro/license";
import {
  DependentOn as _0x4748b4,
  Disposable as _0x4e9bdf,
  IConfigService as _0x44efb3,
  IResourceManagerService as _0x33cf5d,
  Inject as _0x117d62,
  Injector as _0x1d4450,
  Plugin as _0x3e2a91,
  UniverInstanceType as _0x122623,
  merge as _0x7b56d9,
} from "@univerjs/core";
import {
  IThreadCommentDataSourceService as _0x96ca4c,
  TC_PLUGIN_NAME as _0x219846,
  ThreadCommentModel as _0x26f411,
  UniverThreadCommentPlugin as _0x17e156,
  createThreadCommentResourceHook as _0x5196ad,
} from "@univerjs/thread-comment";
const g = "bases-thread-comment.config",
  _ = {};
var v = "@univerjs-pro/bases-thread-comment",
  y = "1.0.0-insiders.20260907-70fc579";
function b(_0x490c90, _0x40656a) {
  return function (_0x3ca938, _0x38b7ef) {
    _0x40656a(_0x3ca938, _0x38b7ef, _0x490c90);
  };
}
function x(_0xff379a, _0x5ade74, _0x4e77a6, _0x57fae1) {
  var _0x222428 = _0x5814ec,
    _0x69d3f2 = arguments.length,
    _0x14750b =
      _0x69d3f2 < 3
        ? _0x5ade74
        : _0x57fae1 === null
          ? (_0x57fae1 = Object[_0x222428(337)](_0x5ade74, _0x4e77a6))
          : _0x57fae1,
    _0x1f6499;
  if (
    typeof Reflect == _0x222428(306) &&
    typeof Reflect[_0x222428(327)] == _0x222428(319)
  )
    _0x14750b = Reflect.decorate(_0xff379a, _0x5ade74, _0x4e77a6, _0x57fae1);
  else {
    for (
      var _0x3ca57b = _0xff379a[_0x222428(320)] - 1;
      _0x3ca57b >= 0;
      _0x3ca57b--
    )
      (_0x1f6499 = _0xff379a[_0x3ca57b]) &&
        (_0x14750b =
          (_0x69d3f2 < 3
            ? _0x1f6499(_0x14750b)
            : _0x69d3f2 > 3
              ? _0x1f6499(_0x5ade74, _0x4e77a6, _0x14750b)
              : _0x1f6499(_0x5ade74, _0x4e77a6)) || _0x14750b);
  }
  return (
    _0x69d3f2 > 3 &&
      _0x14750b &&
      Object[_0x222428(313)](_0x5ade74, _0x4e77a6, _0x14750b),
    _0x14750b
  );
}
const S = "BASE_" + _0x219846;
let C = class extends _0x4e9bdf {
  constructor(_0x44b136, _0x53d69a, _0x288f6b) {
    (super(),
      (this._resourceManagerService = _0x44b136),
      (this._threadCommentModel = _0x53d69a),
      (this._threadCommentDataSourceService = _0x288f6b),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          _0x5196ad(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            S,
            [_0x122623.UNIVER_BASE],
          ),
        ),
      ));
  }
};
C = x([b(0, _0x33cf5d), b(1, _0x117d62(_0x26f411)), b(2, _0x96ca4c)], C);
function w(_0x18af7f) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4ba7c6) {
            return typeof _0x4ba7c6;
          }
        : function (_0x1ca094) {
            return _0x1ca094 &&
              typeof Symbol == "function" &&
              _0x1ca094.constructor === Symbol &&
              _0x1ca094 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1ca094;
          }),
    w(_0x18af7f)
  );
}
function T(_0x1419b1, _0x22b257) {
  if (w(_0x1419b1) != "object" || !_0x1419b1) return _0x1419b1;
  var _0x43ce64 = _0x1419b1[Symbol.toPrimitive];
  if (_0x43ce64 !== undefined) {
    var _0x13b0c2 = _0x43ce64.call(_0x1419b1, _0x22b257 || "default");
    if (w(_0x13b0c2) != "object") return _0x13b0c2;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x22b257 === "string" ? String : Number)(_0x1419b1);
}
function E(_0x3a61ac) {
  var _0x40cf8c = _0x5814ec,
    _0x37f13e = T(_0x3a61ac, _0x40cf8c(315));
  return w(_0x37f13e) == _0x40cf8c(333) ? _0x37f13e : _0x37f13e + "";
}
function D(_0x24e2d6, _0x4d9e04, _0x2ee320) {
  return (
    (_0x4d9e04 = E(_0x4d9e04)) in _0x24e2d6
      ? Object.defineProperty(_0x24e2d6, _0x4d9e04, {
          value: _0x2ee320,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x24e2d6[_0x4d9e04] = _0x2ee320),
    _0x24e2d6
  );
}
let O = class extends _0x3e2a91 {
  constructor(_0x26019a = _, _0x4c797d, _0x184b05) {
    (super(),
      (this._config = _0x26019a),
      (this._injector = _0x4c797d),
      (this._configService = _0x184b05));
    let { ..._0x22f6bd } = _0x7b56d9({}, _, this._config);
    this._configService["setConfig"](g, _0x22f6bd);
  }
  onStarting() {
    (this._injector["add"]([C]), this._injector["get"](C));
  }
};
(D(O, "pluginName", "UNIVER_BASES_THREAD_COMMENT_PLUGIN"),
  D(O, "packageName", v),
  D(O, "version", y),
  D(O, "type", _0x122623.UNIVER_BASE),
  (O = x(
    [
      _0x4748b4(_0x39558c, _0x17e156, _0x417d46),
      b(1, _0x117d62(_0x1d4450)),
      b(2, _0x44efb3),
    ],
    O,
  )));
export {
  g as BASES_THREAD_COMMENT_PLUGIN_CONFIG_KEY,
  O as UniverBasesThreadCommentPlugin,
};
