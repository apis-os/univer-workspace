Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/thread-comment");
const i = "bases-thread-comment.config",
  a = {};
var o = "@univerjs-pro/bases-thread-comment",
  s = "1.0.0-insiders.20260907-70fc579";
function c(_0x1b0e0b, _0x40eb61) {
  return function (_0xa495c5, _0x285de6) {
    _0x40eb61(_0xa495c5, _0x285de6, _0x1b0e0b);
  };
}
function l(_0x1da8e1, _0x31f142, _0x54292b, _0x23215e) {
  var _0x20f1d6 = _0x5828a6,
    _0x29bcf7 = arguments.length,
    _0x493f7c =
      _0x29bcf7 < 3
        ? _0x31f142
        : _0x23215e === null
          ? (_0x23215e = Object[_0x20f1d6(384)](_0x31f142, _0x54292b))
          : _0x23215e,
    _0x37e2de;
  if (
    typeof Reflect == _0x20f1d6(379) &&
    typeof Reflect[_0x20f1d6(387)] == _0x20f1d6(395)
  )
    _0x493f7c = Reflect[_0x20f1d6(387)](
      _0x1da8e1,
      _0x31f142,
      _0x54292b,
      _0x23215e,
    );
  else {
    for (
      var _0x1badb9 = _0x1da8e1[_0x20f1d6(396)] - 1;
      _0x1badb9 >= 0;
      _0x1badb9--
    )
      (_0x37e2de = _0x1da8e1[_0x1badb9]) &&
        (_0x493f7c =
          (_0x29bcf7 < 3
            ? _0x37e2de(_0x493f7c)
            : _0x29bcf7 > 3
              ? _0x37e2de(_0x31f142, _0x54292b, _0x493f7c)
              : _0x37e2de(_0x31f142, _0x54292b)) || _0x493f7c);
  }
  return (
    _0x29bcf7 > 3 &&
      _0x493f7c &&
      Object.defineProperty(_0x31f142, _0x54292b, _0x493f7c),
    _0x493f7c
  );
}
const u = "BASE_" + r.TC_PLUGIN_NAME;
let d = class extends n.Disposable {
  constructor(_0x1979de, _0x6285f6, _0x4bf323) {
    (super(),
      (this._resourceManagerService = _0x1979de),
      (this._threadCommentModel = _0x6285f6),
      (this._threadCommentDataSourceService = _0x4bf323),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          (0, r.createThreadCommentResourceHook)(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            u,
            [n.UniverInstanceType["UNIVER_BASE"]],
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
function f(_0x27d10f) {
  "@babel/helpers - typeof";
  return (
    (f =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x514478) {
            return typeof _0x514478;
          }
        : function (_0x5ab29a) {
            return _0x5ab29a &&
              typeof Symbol == "function" &&
              _0x5ab29a.constructor === Symbol &&
              _0x5ab29a !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ab29a;
          }),
    f(_0x27d10f)
  );
}
function p(_0x15653f, _0x2477c7) {
  if (f(_0x15653f) != "object" || !_0x15653f) return _0x15653f;
  var _0x552f7b = _0x15653f[Symbol.toPrimitive];
  if (_0x552f7b !== undefined) {
    var _0x298533 = _0x552f7b.call(_0x15653f, _0x2477c7 || "default");
    if (f(_0x298533) != "object") return _0x298533;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2477c7 === "string" ? String : Number)(_0x15653f);
}
function m(_0x175f88) {
  var _0x1e877e = _0x5828a6,
    _0x5edeee = p(_0x175f88, _0x1e877e(418));
  return f(_0x5edeee) == _0x1e877e(419) ? _0x5edeee : _0x5edeee + "";
}
function h(_0x2e9753, _0x110921, _0x378ec1) {
  return (
    (_0x110921 = m(_0x110921)) in _0x2e9753
      ? Object.defineProperty(_0x2e9753, _0x110921, {
          value: _0x378ec1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2e9753[_0x110921] = _0x378ec1),
    _0x2e9753
  );
}
let g = class extends n.Plugin {
  constructor(_0x961d17 = a, _0x174c31, _0x1ce616) {
    (super(),
      (this._config = _0x961d17),
      (this._injector = _0x174c31),
      (this._configService = _0x1ce616));
    let { ..._0x45d4ae } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, _0x45d4ae);
  }
  onStarting() {
    (this._injector["add"]([d]), this._injector["get"](d));
  }
};
(h(g, "pluginName", "UNIVER_BASES_THREAD_COMMENT_PLUGIN"),
  h(g, "packageName", o),
  h(g, "version", s),
  h(g, "type", n.UniverInstanceType["UNIVER_BASE"]),
  (g = l(
    [
      (0, n.DependentOn)(
        t.UniverLicensePlugin,
        r.UniverThreadCommentPlugin,
        e.UniverBasesPlugin,
      ),
      c(1, (0, n.Inject)(n.Injector)),
      c(2, n.IConfigService),
    ],
    g,
  )),
  (exports.BASES_THREAD_COMMENT_PLUGIN_CONFIG_KEY = i),
  Object.defineProperty(exports, "UniverBasesThreadCommentPlugin", {
    enumerable: true,
    get: function () {
      return g;
    },
  }));
