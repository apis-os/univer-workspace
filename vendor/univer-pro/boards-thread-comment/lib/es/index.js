import { UniverBoardsPlugin as _0x148fc5 } from "@univerjs-pro/boards";
import { UniverLicensePlugin as _0x2e4296 } from "@univerjs-pro/license";
import {
  DependentOn as _0x3cb4ec,
  Disposable as _0x21a0c6,
  IConfigService as _0x376f90,
  IResourceManagerService as _0x1697fa,
  Inject as _0x368efc,
  Injector as _0x6528d4,
  Plugin as _0xf37fed,
  UniverInstanceType as _0x760336,
  merge as _0x4bf128,
} from "@univerjs/core";
import {
  IThreadCommentDataSourceService as _0x260d62,
  TC_PLUGIN_NAME as _0x51ca0a,
  ThreadCommentModel as _0x1c2f49,
  UniverThreadCommentPlugin as _0x3430b6,
  createThreadCommentResourceHook as _0x262ff6,
} from "@univerjs/thread-comment";
const g = "boards-thread-comment.config",
  _ = {};
var v = "@univerjs-pro/boards-thread-comment",
  y = "1.0.0-insiders.20260907-70fc579";
function b(_0x566977, _0x7b5505) {
  return function (_0x4f8198, _0x4f19eb) {
    _0x7b5505(_0x4f8198, _0x4f19eb, _0x566977);
  };
}
function x(_0x53c4f1, _0x457535, _0x524076, _0x29dfc0) {
  var _0x53cac7 = _0xe88a65,
    _0x1f0be2 = arguments[_0x53cac7(392)],
    _0x302560 =
      _0x1f0be2 < 3
        ? _0x457535
        : _0x29dfc0 === null
          ? (_0x29dfc0 = Object[_0x53cac7(421)](_0x457535, _0x524076))
          : _0x29dfc0,
    _0x41bbac;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x302560 = Reflect[_0x53cac7(417)](
      _0x53c4f1,
      _0x457535,
      _0x524076,
      _0x29dfc0,
    );
  else {
    for (
      var _0x5db98e = _0x53c4f1[_0x53cac7(392)] - 1;
      _0x5db98e >= 0;
      _0x5db98e--
    )
      (_0x41bbac = _0x53c4f1[_0x5db98e]) &&
        (_0x302560 =
          (_0x1f0be2 < 3
            ? _0x41bbac(_0x302560)
            : _0x1f0be2 > 3
              ? _0x41bbac(_0x457535, _0x524076, _0x302560)
              : _0x41bbac(_0x457535, _0x524076)) || _0x302560);
  }
  return (
    _0x1f0be2 > 3 &&
      _0x302560 &&
      Object.defineProperty(_0x457535, _0x524076, _0x302560),
    _0x302560
  );
}
const S = "BOARD_" + _0x51ca0a;
let C = class extends _0x21a0c6 {
  constructor(_0x45ff8e, _0x5d3914, _0x25f4a4) {
    (super(),
      (this._resourceManagerService = _0x45ff8e),
      (this._threadCommentModel = _0x5d3914),
      (this._threadCommentDataSourceService = _0x25f4a4),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          _0x262ff6(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            S,
            [_0x760336.UNIVER_BOARD],
          ),
        ),
      ));
  }
};
C = x([b(0, _0x1697fa), b(1, _0x368efc(_0x1c2f49)), b(2, _0x260d62)], C);
function w(_0x570b14) {
  "@babel/helpers - typeof";
  return (
    (w =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x105d8d) {
            return typeof _0x105d8d;
          }
        : function (_0x1ec009) {
            return _0x1ec009 &&
              typeof Symbol == "function" &&
              _0x1ec009.constructor === Symbol &&
              _0x1ec009 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1ec009;
          }),
    w(_0x570b14)
  );
}
function T(_0x5003a4, _0x5ab721) {
  if (w(_0x5003a4) != "object" || !_0x5003a4) return _0x5003a4;
  var _0x424631 = _0x5003a4[Symbol.toPrimitive];
  if (_0x424631 !== undefined) {
    var _0x401948 = _0x424631.call(_0x5003a4, _0x5ab721 || "default");
    if (w(_0x401948) != "object") return _0x401948;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x5ab721 === "string" ? String : Number)(_0x5003a4);
}
function E(_0xb8f094) {
  var _0x1e6417 = _0xe88a65,
    _0x5b6529 = T(_0xb8f094, _0x1e6417(409));
  return w(_0x5b6529) == _0x1e6417(385) ? _0x5b6529 : _0x5b6529 + "";
}
function D(_0x58bc58, _0x2af713, _0xb178fd) {
  return (
    (_0x2af713 = E(_0x2af713)) in _0x58bc58
      ? Object.defineProperty(_0x58bc58, _0x2af713, {
          value: _0xb178fd,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x58bc58[_0x2af713] = _0xb178fd),
    _0x58bc58
  );
}
let O = class extends _0xf37fed {
  constructor(_0x294921 = _, _0x3bcc80, _0x2b5c6a) {
    (super(),
      (this._config = _0x294921),
      (this._injector = _0x3bcc80),
      (this._configService = _0x2b5c6a));
    let { ..._0x307880 } = _0x4bf128({}, _, this._config);
    this._configService["setConfig"](g, _0x307880);
  }
  onStarting() {
    (this._injector["add"]([C]), this._injector["get"](C));
  }
};
(D(O, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_PLUGIN"),
  D(O, "packageName", v),
  D(O, "version", y),
  D(O, "type", _0x760336.UNIVER_BOARD),
  (O = x(
    [
      _0x3cb4ec(_0x2e4296, _0x3430b6, _0x148fc5),
      b(1, _0x368efc(_0x6528d4)),
      b(2, _0x376f90),
    ],
    O,
  )));
export {
  g as BOARDS_THREAD_COMMENT_PLUGIN_CONFIG_KEY,
  O as UniverBoardsThreadCommentPlugin,
};
