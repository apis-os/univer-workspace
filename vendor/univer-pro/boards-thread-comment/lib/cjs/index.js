Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/thread-comment");
const i = "boards-thread-comment.config",
  a = {};
var o = "@univerjs-pro/boards-thread-comment",
  s = "1.0.0-insiders.20260907-70fc579";
function c(_0xb9fb7e, _0x4a7534) {
  return function (_0x11d19a, _0x311c0f) {
    _0x4a7534(_0x11d19a, _0x311c0f, _0xb9fb7e);
  };
}
function l(_0x248c9d, _0x519f31, _0x9614e1, _0x1914e0) {
  var _0x4a2d00 = _0x46fbb8,
    _0x27344a = arguments[_0x4a2d00(183)],
    _0x1576e1 =
      _0x27344a < 3
        ? _0x519f31
        : _0x1914e0 === null
          ? (_0x1914e0 = Object[_0x4a2d00(140)](_0x519f31, _0x9614e1))
          : _0x1914e0,
    _0x4f8713;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1576e1 = Reflect[_0x4a2d00(185)](
      _0x248c9d,
      _0x519f31,
      _0x9614e1,
      _0x1914e0,
    );
  else {
    for (
      var _0xd294ba = _0x248c9d[_0x4a2d00(183)] - 1;
      _0xd294ba >= 0;
      _0xd294ba--
    )
      (_0x4f8713 = _0x248c9d[_0xd294ba]) &&
        (_0x1576e1 =
          (_0x27344a < 3
            ? _0x4f8713(_0x1576e1)
            : _0x27344a > 3
              ? _0x4f8713(_0x519f31, _0x9614e1, _0x1576e1)
              : _0x4f8713(_0x519f31, _0x9614e1)) || _0x1576e1);
  }
  return (
    _0x27344a > 3 &&
      _0x1576e1 &&
      Object[_0x4a2d00(187)](_0x519f31, _0x9614e1, _0x1576e1),
    _0x1576e1
  );
}
const u = "BOARD_" + r.TC_PLUGIN_NAME;
let d = class extends n.Disposable {
  constructor(_0x1c87b6, _0x3a88cf, _0x1d8818) {
    (super(),
      (this._resourceManagerService = _0x1c87b6),
      (this._threadCommentModel = _0x3a88cf),
      (this._threadCommentDataSourceService = _0x1d8818),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          (0, r.createThreadCommentResourceHook)(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            u,
            [n.UniverInstanceType["UNIVER_BOARD"]],
          ),
        ),
      ));
  }
};
d = l(
  [
    c(0, n.IResourceManagerService),
    c(1, (0, n.Inject)(r.ThreadCommentModel)),
    c(2, r.IThreadCommentDataSourceService),
  ],
  d,
);
function f(_0x1f3c37) {
  "@babel/helpers - typeof";
  return (
    (f =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x13b436) {
            return typeof _0x13b436;
          }
        : function (_0x287e34) {
            return _0x287e34 &&
              typeof Symbol == "function" &&
              _0x287e34.constructor === Symbol &&
              _0x287e34 !== Symbol.prototype
              ? "symbol"
              : typeof _0x287e34;
          }),
    f(_0x1f3c37)
  );
}
function p(_0x2ab5ac, _0x544e87) {
  if (f(_0x2ab5ac) != "object" || !_0x2ab5ac) return _0x2ab5ac;
  var _0x5a1e97 = _0x2ab5ac[Symbol.toPrimitive];
  if (_0x5a1e97 !== undefined) {
    var _0x41dea3 = _0x5a1e97.call(_0x2ab5ac, _0x544e87 || "default");
    if (f(_0x41dea3) != "object") return _0x41dea3;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x544e87 === "string" ? String : Number)(_0x2ab5ac);
}
function m(_0x108885) {
  var _0x3075aa = _0x46fbb8,
    _0x105465 = p(_0x108885, _0x3075aa(181));
  return f(_0x105465) == _0x3075aa(155) ? _0x105465 : _0x105465 + "";
}
function h(_0x15662e, _0x42f6fc, _0x129ec8) {
  return (
    (_0x42f6fc = m(_0x42f6fc)) in _0x15662e
      ? Object.defineProperty(_0x15662e, _0x42f6fc, {
          value: _0x129ec8,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x15662e[_0x42f6fc] = _0x129ec8),
    _0x15662e
  );
}
let g = class extends n.Plugin {
  constructor(_0x43dad0 = a, _0x3b1aa2, _0x2fe968) {
    (super(),
      (this._config = _0x43dad0),
      (this._injector = _0x3b1aa2),
      (this._configService = _0x2fe968));
    let { ..._0x18dc21 } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, _0x18dc21);
  }
  onStarting() {
    (this._injector["add"]([d]), this._injector["get"](d));
  }
};
(h(g, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_PLUGIN"),
  h(g, "packageName", o),
  h(g, "version", s),
  h(g, "type", n.UniverInstanceType["UNIVER_BOARD"]),
  (g = l(
    [
      (0, n.DependentOn)(
        t.UniverLicensePlugin,
        r.UniverThreadCommentPlugin,
        e.UniverBoardsPlugin,
      ),
      c(1, (0, n.Inject)(n.Injector)),
      c(2, n.IConfigService),
    ],
    g,
  )),
  (exports.BOARDS_THREAD_COMMENT_PLUGIN_CONFIG_KEY = i),
  Object.defineProperty(exports, "UniverBoardsThreadCommentPlugin", {
    enumerable: true,
    get: function () {
      return g;
    },
  }));
