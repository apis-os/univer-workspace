Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/license"),
  t = require("@univerjs-pro/slides"),
  n = require("@univerjs/core"),
  r = require("@univerjs/thread-comment");
const i = "slides-thread-comment.config",
  a = {};
var o = "@univerjs-pro/slides-thread-comment",
  s = "1.0.0-insiders.20260907-70fc579";
function c(_0x54c0de, _0x4e3dd9) {
  return function (_0x4c7f7b, _0x105fdb) {
    _0x4e3dd9(_0x4c7f7b, _0x105fdb, _0x54c0de);
  };
}
function l(_0x53659e, _0x5a64cb, _0x19e8d7, _0x22be9e) {
  var _0x59a7f9 = _0x39a0f3,
    _0x4db267 = arguments[_0x59a7f9(314)],
    _0x24daea =
      _0x4db267 < 3
        ? _0x5a64cb
        : _0x22be9e === null
          ? (_0x22be9e = Object.getOwnPropertyDescriptor(_0x5a64cb, _0x19e8d7))
          : _0x22be9e,
    _0x1d2340;
  if (
    typeof Reflect == _0x59a7f9(313) &&
    typeof Reflect[_0x59a7f9(295)] == _0x59a7f9(283)
  )
    _0x24daea = Reflect[_0x59a7f9(295)](
      _0x53659e,
      _0x5a64cb,
      _0x19e8d7,
      _0x22be9e,
    );
  else {
    for (
      var _0x2f4154 = _0x53659e[_0x59a7f9(314)] - 1;
      _0x2f4154 >= 0;
      _0x2f4154--
    )
      (_0x1d2340 = _0x53659e[_0x2f4154]) &&
        (_0x24daea =
          (_0x4db267 < 3
            ? _0x1d2340(_0x24daea)
            : _0x4db267 > 3
              ? _0x1d2340(_0x5a64cb, _0x19e8d7, _0x24daea)
              : _0x1d2340(_0x5a64cb, _0x19e8d7)) || _0x24daea);
  }
  return (
    _0x4db267 > 3 &&
      _0x24daea &&
      Object[_0x59a7f9(306)](_0x5a64cb, _0x19e8d7, _0x24daea),
    _0x24daea
  );
}
const u = "SLIDE_" + r.TC_PLUGIN_NAME;
let d = class extends n.Disposable {
  constructor(_0xb1f144, _0x42b926, _0x32f65e) {
    (super(),
      (this._resourceManagerService = _0xb1f144),
      (this._threadCommentModel = _0x42b926),
      (this._threadCommentDataSourceService = _0x32f65e),
      this.disposeWithMe(
        this._resourceManagerService["registerPluginResource"](
          (0, r.createThreadCommentResourceHook)(
            this._threadCommentModel,
            this._threadCommentDataSourceService,
            u,
            [n.UniverInstanceType["UNIVER_SLIDE"]],
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
function f(_0x5e538e) {
  "@babel/helpers - typeof";
  return (
    (f =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4c13c5) {
            return typeof _0x4c13c5;
          }
        : function (_0x37d3a4) {
            return _0x37d3a4 &&
              typeof Symbol == "function" &&
              _0x37d3a4.constructor === Symbol &&
              _0x37d3a4 !== Symbol.prototype
              ? "symbol"
              : typeof _0x37d3a4;
          }),
    f(_0x5e538e)
  );
}
function p(_0x588618, _0x1f520d) {
  if (f(_0x588618) != "object" || !_0x588618) return _0x588618;
  var _0x1c6edf = _0x588618[Symbol.toPrimitive];
  if (_0x1c6edf !== undefined) {
    var _0xfa636a = _0x1c6edf.call(_0x588618, _0x1f520d || "default");
    if (f(_0xfa636a) != "object") return _0xfa636a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1f520d === "string" ? String : Number)(_0x588618);
}
function m(_0x5723a4) {
  var _0x3b9e3a = _0x39a0f3,
    _0x540083 = p(_0x5723a4, _0x3b9e3a(263));
  return f(_0x540083) == "symbol" ? _0x540083 : _0x540083 + "";
}
function h(_0x4db37e, _0x3ebad2, _0x2d8ae5) {
  return (
    (_0x3ebad2 = m(_0x3ebad2)) in _0x4db37e
      ? Object.defineProperty(_0x4db37e, _0x3ebad2, {
          value: _0x2d8ae5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4db37e[_0x3ebad2] = _0x2d8ae5),
    _0x4db37e
  );
}
let g = class extends n.Plugin {
  constructor(_0xacff53 = a, _0x389e6e, _0x148ff5) {
    (super(),
      (this._config = _0xacff53),
      (this._injector = _0x389e6e),
      (this._configService = _0x148ff5));
    let { ..._0x509682 } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, _0x509682);
  }
  onStarting() {
    (this._injector["add"]([d]), this._injector["get"](d));
  }
};
(h(g, "pluginName", "UNIVER_SLIDES_THREAD_COMMENT_PLUGIN"),
  h(g, "packageName", o),
  h(g, "version", s),
  h(g, "type", n.UniverInstanceType["UNIVER_SLIDE"]),
  (g = l(
    [
      (0, n.DependentOn)(
        e.UniverLicensePlugin,
        r.UniverThreadCommentPlugin,
        t.UniverSlidesPlugin,
      ),
      c(1, (0, n.Inject)(n.Injector)),
      c(2, n.IConfigService),
    ],
    g,
  )),
  (exports.SLIDES_THREAD_COMMENT_PLUGIN_CONFIG_KEY = i),
  Object.defineProperty(exports, "UniverSlidesThreadCommentPlugin", {
    enumerable: true,
    get: function () {
      return g;
    },
  }));
