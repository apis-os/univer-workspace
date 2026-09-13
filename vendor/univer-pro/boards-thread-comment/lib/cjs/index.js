Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/thread-comment");
const i = "boards-thread-comment.config",
  a = {};
var o = "@univerjs-pro/boards-thread-comment",
  s = "1.0.0-insiders.20260907-70fc579";
function c(var_core_value_sigFBFA, var_core_value_sigF602) {
  return function (var_core_value_sig7524, var_core_value_sig2AD8) {
    var_core_value_sigF602(var_core_value_sig7524, var_core_value_sig2AD8, var_core_value_sigFBFA);
  };
}
function l(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF, var_core_value_sig0D69) {
  var var_core_value_sig480E = ox46fbb8,
    var_core_value_sig26DB = arguments[var_core_value_sig480E(183)],
    var_core_value_sigF0F9 = var_core_value_sig26DB < 3 ? var_core_value_sigF704 : var_core_value_sig0D69 === null ? var_core_value_sig0D69 = Object[var_core_value_sig480E(140)](var_core_value_sigF704, var_core_value_sig2BCF) : var_core_value_sig0D69,
    var_core_value_sig1A0F;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigF0F9 = Reflect[var_core_value_sig480E(185)](var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF, var_core_value_sig0D69);else {
    for (var var_core_value_sigFBA4 = var_core_value_sig1BBD[var_core_value_sig480E(183)] - 1; var_core_value_sigFBA4 >= 0; var_core_value_sigFBA4--) (var_core_value_sig1A0F = var_core_value_sig1BBD[var_core_value_sigFBA4]) && (var_core_value_sigF0F9 = (var_core_value_sig26DB < 3 ? var_core_value_sig1A0F(var_core_value_sigF0F9) : var_core_value_sig26DB > 3 ? var_core_value_sig1A0F(var_core_value_sigF704, var_core_value_sig2BCF, var_core_value_sigF0F9) : var_core_value_sig1A0F(var_core_value_sigF704, var_core_value_sig2BCF)) || var_core_value_sigF0F9);
  }
  return var_core_value_sig26DB > 3 && var_core_value_sigF0F9 && Object[var_core_value_sig480E(187)](var_core_value_sigF704, var_core_value_sig2BCF, var_core_value_sigF0F9), var_core_value_sigF0F9;
}
const u = "BOARD_" + r.TC_PLUGIN_NAME;
let d = class extends n.Disposable {
  constructor(var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46) {
    super(), this._resourceManagerService = var_core_value_sig2AD0, this._threadCommentModel = var_core_value_sig3EEE, this._threadCommentDataSourceService = var_core_value_sigBC46, this.disposeWithMe(this._resourceManagerService["registerPluginResource"]((0, r.createThreadCommentResourceHook)(this._threadCommentModel, this._threadCommentDataSourceService, u, [n.UniverInstanceType["UNIVER_BOARD"]])));
  }
};
d = l([c(0, n.IResourceManagerService), c(1, (0, n.Inject)(r.ThreadCommentModel)), c(2, r.IThreadCommentDataSourceService)], d);
function f(var_core_value_sig4383) {
  "@babel/helpers - typeof";

  return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig3D7D) {
    return typeof var_core_value_sig3D7D;
  } : function (var_core_value_sig27E5) {
    return var_core_value_sig27E5 && typeof Symbol == "function" && var_core_value_sig27E5.constructor === Symbol && var_core_value_sig27E5 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig27E5;
  }, f(var_core_value_sig4383);
}
function p(var_core_value_sig186C, var_core_value_sigD955) {
  if (f(var_core_value_sig186C) != "object" || !var_core_value_sig186C) return var_core_value_sig186C;
  var var_core_value_sig48BD = var_core_value_sig186C[Symbol.toPrimitive];
  if (var_core_value_sig48BD !== undefined) {
    var var_core_value_sig429F = var_core_value_sig48BD.call(var_core_value_sig186C, var_core_value_sigD955 || "default");
    if (f(var_core_value_sig429F) != "object") return var_core_value_sig429F;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigD955 === "string" ? String : Number)(var_core_value_sig186C);
}
function m(var_core_value_sigF62A) {
  var var_core_value_sig8178 = ox46fbb8,
    var_core_value_sigE9ED = p(var_core_value_sigF62A, var_core_value_sig8178(181));
  return f(var_core_value_sigE9ED) == var_core_value_sig8178(155) ? var_core_value_sigE9ED : var_core_value_sigE9ED + "";
}
function h(var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigD873) {
  return (var_core_value_sig9572 = m(var_core_value_sig9572)) in var_core_value_sigB577 ? Object.defineProperty(var_core_value_sigB577, var_core_value_sig9572, {
    value: var_core_value_sigD873,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigB577[var_core_value_sig9572] = var_core_value_sigD873, var_core_value_sigB577;
}
let g = class extends n.Plugin {
  constructor(var_core_value_sig8061 = a, var_core_value_sig4D4C, var_core_value_sigC9E0) {
    super(), this._config = var_core_value_sig8061, this._injector = var_core_value_sig4D4C, this._configService = var_core_value_sigC9E0;
    let {
      ...var_core_value_sig76BA
    } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, var_core_value_sig76BA);
  }
  onStarting() {
    this._injector["add"]([d]), this._injector["get"](d);
  }
};
h(g, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_PLUGIN"), h(g, "packageName", o), h(g, "version", s), h(g, "type", n.UniverInstanceType["UNIVER_BOARD"]), g = l([(0, n.DependentOn)(t.UniverLicensePlugin, r.UniverThreadCommentPlugin, e.UniverBoardsPlugin), c(1, (0, n.Inject)(n.Injector)), c(2, n.IConfigService)], g), exports.BOARDS_THREAD_COMMENT_PLUGIN_CONFIG_KEY = i, Object.defineProperty(exports, "UniverBoardsThreadCommentPlugin", {
  enumerable: true,
  get: function () {
    return g;
  }
});
