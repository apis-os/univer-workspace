Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/license"),
  t = require("@univerjs/core"),
  n = require("@univerjs/thread-comment");
var r = "@univerjs-pro/thread-comment-resource",
  i = "1.0.0-insiders.20260907-70fc579";
const a = {};
var o = class {
  async addComment(_0x173d0a) {
    return _0x173d0a;
  }
  async updateComment(_0x40bc86) {
    return true;
  }
  async resolveComment(_0xfdbb79) {
    return true;
  }
  async deleteComment(_0x39e215, _0x405b09, _0x35cddb, _0x3acde6) {
    return true;
  }
  async listComments(_0x1c893f, _0x2f0293, _0x544442) {
    return [];
  }
  saveCommentToSnapshot(_0x5a4844) {
    return {
      id: _0x5a4844.id,
      threadId: _0x5a4844.threadId,
      ref: _0x5a4844.ref,
    };
  }
};
function s(_0x5d373b, _0x45926c) {
  return function (_0x493c4f, _0x15c536) {
    _0x45926c(_0x493c4f, _0x15c536, _0x5d373b);
  };
}
function c(_0x3dd171, _0xd8281, _0x5e1da1, _0x5c0a27) {
  var _0x4dbc21 = _0x856bdc,
    _0x44e0fa = arguments[_0x4dbc21(316)],
    _0x5acb93 =
      _0x44e0fa < 3
        ? _0xd8281
        : _0x5c0a27 === null
          ? (_0x5c0a27 = Object[_0x4dbc21(336)](_0xd8281, _0x5e1da1))
          : _0x5c0a27,
    _0x1e249e;
  if (
    typeof Reflect == "object" &&
    typeof Reflect[_0x4dbc21(286)] == _0x4dbc21(319)
  )
    _0x5acb93 = Reflect.decorate(_0x3dd171, _0xd8281, _0x5e1da1, _0x5c0a27);
  else {
    for (
      var _0x7ac6f7 = _0x3dd171[_0x4dbc21(316)] - 1;
      _0x7ac6f7 >= 0;
      _0x7ac6f7--
    )
      (_0x1e249e = _0x3dd171[_0x7ac6f7]) &&
        (_0x5acb93 =
          (_0x44e0fa < 3
            ? _0x1e249e(_0x5acb93)
            : _0x44e0fa > 3
              ? _0x1e249e(_0xd8281, _0x5e1da1, _0x5acb93)
              : _0x1e249e(_0xd8281, _0x5e1da1)) || _0x5acb93);
  }
  return (
    _0x44e0fa > 3 &&
      _0x5acb93 &&
      Object[_0x4dbc21(328)](_0xd8281, _0x5e1da1, _0x5acb93),
    _0x5acb93
  );
}
let l = class {
  constructor(_0x3367ed, _0x26092c) {
    ((this._dataSource = _0x3367ed),
      (this._threadCommentDataSourceService = _0x26092c),
      this.init());
  }
  init() {
    this._threadCommentDataSourceService["dataSource"] = this._dataSource;
  }
};
l = c([s(0, (0, t.Inject)(o)), s(1, n.IThreadCommentDataSourceService)], l);
function u(_0x37275e) {
  "@babel/helpers - typeof";
  return (
    (u =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5837ac) {
            return typeof _0x5837ac;
          }
        : function (_0x464f4e) {
            return _0x464f4e &&
              typeof Symbol == "function" &&
              _0x464f4e.constructor === Symbol &&
              _0x464f4e !== Symbol.prototype
              ? "symbol"
              : typeof _0x464f4e;
          }),
    u(_0x37275e)
  );
}
function d(_0x8d909e, _0x5d535a) {
  if (u(_0x8d909e) != "object" || !_0x8d909e) return _0x8d909e;
  var _0x292d66 = _0x8d909e[Symbol.toPrimitive];
  if (_0x292d66 !== undefined) {
    var _0x54470e = _0x292d66.call(_0x8d909e, _0x5d535a || "default");
    if (u(_0x54470e) != "object") return _0x54470e;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5d535a === "string" ? String : Number)(_0x8d909e);
}
function f(_0xc5c815) {
  var _0xa56ac = _0x856bdc,
    _0xdbde34 = d(_0xc5c815, _0xa56ac(285));
  return u(_0xdbde34) == "symbol" ? _0xdbde34 : _0xdbde34 + "";
}
function p(_0x4b2553, _0x4fd847, _0x5af63a) {
  return (
    (_0x4fd847 = f(_0x4fd847)) in _0x4b2553
      ? Object.defineProperty(_0x4b2553, _0x4fd847, {
          value: _0x5af63a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4b2553[_0x4fd847] = _0x5af63a),
    _0x4b2553
  );
}
let m = class extends t.Plugin {
  constructor(_0x184041 = a, _0x307707, _0x283b0d) {
    (super(),
      (this._config = _0x184041),
      (this._injector = _0x307707),
      (this._configService = _0x283b0d));
    let { ..._0x1d9924 } = (0, t.merge)({}, a, this._config);
    this._configService["setConfig"](
      "thread-comment-resource.config",
      _0x1d9924,
    );
  }
  onStarting() {
    ([[o], [l]].forEach((_0x58f146) => {
      this._injector["add"](_0x58f146);
    }),
      this._injector["get"](l));
  }
};
(p(m, "pluginName", "UniverThreadCommentResourcePlugin"),
  p(m, "packageName", r),
  p(m, "version", i),
  (m = c(
    [
      (0, t.DependentOn)(e.UniverLicensePlugin, n.UniverThreadCommentPlugin),
      s(1, (0, t.Inject)(t.Injector)),
      s(2, t.IConfigService),
    ],
    m,
  )),
  Object.defineProperty(exports, "UniverThreadCommentResourcePlugin", {
    enumerable: true,
    get: function () {
      return m;
    },
  }));
