Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@noble/ed25519"),
  t = require("@noble/hashes/sha2.js"),
  n = require("@univerjs/core"),
  r = require("@univerjs/engine-render"),
  i = require("rxjs");
function a() {
  return (
    (typeof globalThis < "u" && globalThis) ||
    (typeof window < "u" && window) ||
    (typeof global < "u" && global)
  );
}
let o = (function (_0x53cad3) {
  return (
    (_0x53cad3[(_0x53cad3.DEV = 1)] = "DEV"),
    (_0x53cad3[(_0x53cad3.NO_COMMERCIAL = 2)] = "NO_COMMERCIAL"),
    (_0x53cad3[(_0x53cad3.COMMERCIAL = 3)] = "COMMERCIAL"),
    _0x53cad3
  );
})({});
const s = [
  [61, 62, 50, 48, 61, 57, 62, 34, 37],
  [96, 99, 102, 127, 97, 127, 97, 127, 96],
];
function c(_0x358449) {
  return String.fromCharCode(..._0x358449.map((_0xf05127) => _0xf05127 ^ 81));
}
function l(_0x25118b) {
  return s.some((_0x5e194c) => c(_0x5e194c) === _0x25118b);
}
const u = {
    0: "j",
    1: "3",
    2: "g",
    3: "N",
    4: "5",
    5: "y",
    6: "V",
    7: "o",
    8: "O",
    9: "t",
    J: "0",
    Z: "1",
    l: "2",
    A: "4",
    r: "6",
    V: "7",
    m: "8",
    p: "9",
    g: "a",
    O: "b",
    n: "c",
    B: "d",
    F: "e",
    I: "f",
    Y: "h",
    v: "i",
    t: "k",
    d: "l",
    k: "m",
    a: "n",
    b: "p",
    D: "q",
    j: "r",
    M: "s",
    X: "u",
    w: "v",
    "\x20": "w",
    N: "x",
    E: "z",
    G: "A",
    Q: "B",
    o: "C",
    U: "D",
    h: "E",
    s: "F",
    i: "G",
    S: "H",
    y: "I",
    x: "J",
    f: "K",
    W: "L",
    P: "M",
    e: "P",
    q: "Q",
    T: "R",
    R: "S",
    z: "T",
    u: "U",
    H: "W",
    K: "X",
    C: "Y",
    c: "Z",
    L: "\x20",
  },
  d = Number.parseInt(1788764280);
function f(_0x4bde38, _0x421335) {
  return _0x4bde38
    .split("")
    .map((_0x1b0392) => _0x421335[_0x1b0392] || _0x1b0392)
    .join("");
}
function p(_0x50efe4, _0x44e58c, _0x1fa018) {
  var _0x5686db;
  if (!_0x50efe4) return false;
  let _0x3ef43b = Date.now() / 1000,
    _0x4ac3dc = _0x50efe4.ft,
    _0x579c1b =
      _0x4ac3dc == null || (_0x5686db = _0x4ac3dc[_0x44e58c]) == null
        ? undefined
        : _0x5686db.et,
    _0x3063b7 = _0x579c1b ? _0x3ef43b < _0x579c1b : false,
    _0x10be35 = _0x50efe4.ud;
  return _0x3063b7 && (_0x10be35 ? _0x1fa018 < _0x10be35 : false);
}
function m(_0x3cb226, _0x356ad6, _0x41ec47, _0x2242c3, _0x613286, _0x7e1ec2) {
  var _0x4a8b8a;
  let _0x27d7e4 = _0x613286,
    _0x17b099 =
      _0x3cb226 == null || (_0x4a8b8a = _0x3cb226.ft) == null
        ? undefined
        : _0x4a8b8a.sf;
  return _0x17b099
    ? ((_0x27d7e4 =
        (_0x3cb226 == null ? undefined : _0x3cb226.rt) === 2
          ? _0x356ad6
            ? _0x17b099 != null && _0x17b099[_0x41ec47]
              ? _0x17b099[_0x41ec47]
              : _0x2242c3
            : _0x7e1ec2
          : _0x356ad6
            ? _0x17b099 != null && _0x17b099[_0x41ec47]
              ? _0x17b099 == null
                ? undefined
                : _0x17b099[_0x41ec47]
              : _0x2242c3
            : _0x613286),
      _0x27d7e4)
    : _0x613286;
}
function h(_0x1f099d, _0x39a87b, _0x25c651, _0xa048d3, _0x55898a, _0x31c2af) {
  var _0x468422;
  let _0x4d2338 = _0x55898a,
    _0x3d5ef5 =
      _0x1f099d == null || (_0x468422 = _0x1f099d.ft) == null
        ? undefined
        : _0x468422.df;
  return _0x3d5ef5
    ? ((_0x4d2338 =
        (_0x1f099d == null ? undefined : _0x1f099d.rt) === 2
          ? _0x39a87b
            ? _0x3d5ef5 != null && _0x3d5ef5[_0x25c651]
              ? _0x3d5ef5[_0x25c651]
              : _0xa048d3
            : _0x31c2af
          : _0x39a87b
            ? _0x3d5ef5 != null && _0x3d5ef5[_0x25c651]
              ? _0x3d5ef5 == null
                ? undefined
                : _0x3d5ef5[_0x25c651]
              : _0xa048d3
            : _0x55898a),
      _0x4d2338)
    : _0x55898a;
}
const g = () => l(location.hostname);
function _(_0x6e684b) {
  let _0x3becce = _0x6e684b.getContext();
  (_0x3becce.save(),
    (_0x3becce.font = "24px\x20Arial"),
    (_0x3becce.globalAlpha = 0.2),
    (_0x3becce.fillStyle = "gray.500"));
  let _0x3e34af = _0x6e684b.getWidth(),
    _0x16e1cf = _0x6e684b.getHeight();
  for (let _0x1711bd = 80; _0x1711bd < _0x3e34af; _0x1711bd += 260)
    for (let _0x1e71cc = 80; _0x1e71cc < _0x16e1cf; _0x1e71cc += 180)
      (_0x3becce.save(),
        _0x3becce.translate(_0x1711bd, _0x1e71cc),
        _0x3becce.rotate(-120),
        _0x3becce.save(),
        (_0x3becce.fillStyle = "transparent"),
        _0x3becce.fillText("hidden text", 10, 10),
        _0x3becce.restore(),
        _0x3becce.fillText("", 0, 0),
        _0x3becce.fillText(f("uavwFjLej7", u), 0, 0),
        _0x3becce.fillText("support", 99999, 99999),
        Math.random() > 0.5 && _0x3becce.fillRect(0, 0, 0, 0),
        _0x3becce.restore());
  if (_0x3e34af < 200 || _0x16e1cf < 200) {
    _0x3becce.restore();
    return;
  }
  let _0x3aa5b6 = _0x3e34af - 20,
    _0x1aaef9 = _0x16e1cf - 22;
  ((_0x3becce.textAlign = "right"),
    (_0x3becce.globalAlpha = 1),
    (_0x3becce.font = "12px Arial"),
    [
      { label: "Contact Us: ", link: "https://pro.univer.ai" },
      { label: "Get Trial License: ", link: "https://pro.univer.ai/license" },
    ].forEach(({ label: _0x14a738, link: _0x159402 }) => {
      ((_0x3becce.fillStyle = "primary.600"),
        _0x3becce.fillText(_0x159402, _0x3aa5b6, _0x1aaef9));
      let _0x442d68 = _0x3becce.measureText(_0x159402).width;
      ((_0x3becce.fillStyle = "gray.500"),
        _0x3becce.fillText(_0x14a738, _0x3aa5b6 - _0x442d68, _0x1aaef9),
        (_0x1aaef9 -= 20));
    }),
    (_0x3becce.fillStyle = "gray.700"),
    (_0x3becce.font = "16px\x20Arial"),
    _0x3becce.fillText("Univer Pro License Required", _0x3aa5b6, _0x1aaef9),
    _0x3becce.restore());
}
const v = {
    base64Parse(_0x34bd48) {
      let _0x354ada =
          typeof atob == "function"
            ? atob(_0x34bd48)
            : Buffer.from(_0x34bd48, "base64").toString("binary"),
        _0x19e927 = _0x354ada.length,
        _0x377dc1 = new Uint8Array(_0x19e927);
      for (let _0x17596a = 0; _0x17596a < _0x19e927; _0x17596a++)
        _0x377dc1[_0x17596a] = _0x354ada.charCodeAt(_0x17596a);
      return _0x377dc1;
    },
    hexStringify(_0x10fdcb) {
      let _0x2780e5 = "";
      for (let _0x25a6b9 = 0; _0x25a6b9 < _0x10fdcb.length; _0x25a6b9++)
        _0x2780e5 += _0x10fdcb[_0x25a6b9].toString(16).padStart(2, "0");
      return _0x2780e5;
    },
  },
  y = "ls.config",
  b = {};
function x(_0x3ebabe, _0x26882e) {
  if (_0x3ebabe === _0x26882e) return true;
  if (!_0x3ebabe.startsWith("*.")) return false;
  let _0xa118bc = _0x3ebabe.slice(2);
  return _0xa118bc && _0xa118bc === _0x26882e
    ? true
    : !!(
        _0xa118bc &&
        !_0x26882e.startsWith(".") &&
        _0x26882e.endsWith("." + _0xa118bc)
      );
}
const S = (..._0x4af267) => (0, t.sha512)(e.etc["concatBytes"](..._0x4af267));
function C(_0x44819b) {
  return typeof atob == "function"
    ? atob(_0x44819b)
    : Buffer.from(_0x44819b, "base64").toString("binary");
}
function w() {
  var _0x43864a;
  let _0x57225a = a();
  return typeof ((_0x43864a = _0x57225a.location) == null
    ? undefined
    : _0x43864a.hostname) == "string"
    ? _0x57225a.location["hostname"]
    : undefined;
}
function T() {
  e.hashes["sha512"] = S;
}
function E(_0x562e70) {
  if (!_0x562e70) return;
  let _0x16fbba = _0x562e70.split("-"),
    _0x326626 = JSON.parse(C(_0x16fbba[2])),
    _0x1fa8cb = a();
  _0x1fa8cb.__Key__ = _0x326626.p ?? "";
}
function D(_0x35a714, _0x133061) {
  if (!_0x35a714 || !_0x133061) return { valid: false, message: {} };
  try {
    T();
    let _0x5abe0b = _0x35a714.split("-"),
      _0x5960c9 = JSON.parse(C(_0x5abe0b[2]));
    _0x5960c9.ud ||= Number(_0x5abe0b[4]);
    let _0x56ed4f = v.hexStringify(v.base64Parse(_0x5abe0b[2])),
      _0x2723d3 = v.hexStringify(v.base64Parse(_0x5abe0b[3])),
      _0xe2a08b = (0, e.verify)(
        e.etc["hexToBytes"](_0x2723d3),
        e.etc["hexToBytes"](_0x56ed4f),
        e.etc["hexToBytes"](_0x133061),
      ),
      _0x3ac614 = w(),
      _0x34e028 = Array.isArray(_0x5960c9.dm)
        ? _0x5960c9.dm["filter"]((_0x1a86a) => typeof _0x1a86a == "string")
        : [],
      _0x53e752 = true;
    return (
      _0x3ac614 &&
        ((_0x53e752 =
          !_0x34e028.length ||
          _0x34e028.some((_0xf00e81) => x(_0xf00e81, _0x3ac614))),
        l(_0x3ac614) && (_0x53e752 = true)),
      { valid: _0xe2a08b && _0x53e752, message: _0x5960c9 }
    );
  } catch {
    return { valid: false, message: {} };
  }
}
var O = "@univerjs-pro/license",
  k = "1.0.0-insiders.20260907-70fc579";
function A(_0xe36267) {
  "@babel/helpers - typeof";
  return (
    (A =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0xc53199) {
            return typeof _0xc53199;
          }
        : function (_0x41292f) {
            return _0x41292f &&
              typeof Symbol == "function" &&
              _0x41292f.constructor === Symbol &&
              _0x41292f !== Symbol.prototype
              ? "symbol"
              : typeof _0x41292f;
          }),
    A(_0xe36267)
  );
}
function j(_0x330836, _0x3432f6) {
  if (A(_0x330836) != "object" || !_0x330836) return _0x330836;
  var _0x52c981 = _0x330836[Symbol.toPrimitive];
  if (_0x52c981 !== undefined) {
    var _0x4e6c87 = _0x52c981.call(_0x330836, _0x3432f6 || "default");
    if (A(_0x4e6c87) != "object") return _0x4e6c87;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3432f6 === "string" ? String : Number)(_0x330836);
}
function M(_0xbc3012) {
  var _0x425727 = j(_0xbc3012, "string");
  return A(_0x425727) == "symbol" ? _0x425727 : _0x425727 + "";
}
function N(_0xaa48c1, _0x12077f, _0x3cf168) {
  return (
    (_0x12077f = M(_0x12077f)) in _0xaa48c1
      ? Object.defineProperty(_0xaa48c1, _0x12077f, {
          value: _0x3cf168,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xaa48c1[_0x12077f] = _0x3cf168),
    _0xaa48c1
  );
}
function P(_0x507031, _0x5eb033) {
  return function (_0xb53ac4, _0x7e7656) {
    _0x5eb033(_0xb53ac4, _0x7e7656, _0x507031);
  };
}
function F(_0x452f4f, _0x48526d, _0x4f20a0, _0x15a77e) {
  var _0x65a7a6 = arguments.length,
    _0x4e88b8 =
      _0x65a7a6 < 3
        ? _0x48526d
        : _0x15a77e === null
          ? (_0x15a77e = Object.getOwnPropertyDescriptor(_0x48526d, _0x4f20a0))
          : _0x15a77e,
    _0x1e5ea0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4e88b8 = Reflect.decorate(_0x452f4f, _0x48526d, _0x4f20a0, _0x15a77e);
  else {
    for (var _0x29ca4e = _0x452f4f.length - 1; _0x29ca4e >= 0; _0x29ca4e--)
      (_0x1e5ea0 = _0x452f4f[_0x29ca4e]) &&
        (_0x4e88b8 =
          (_0x65a7a6 < 3
            ? _0x1e5ea0(_0x4e88b8)
            : _0x65a7a6 > 3
              ? _0x1e5ea0(_0x48526d, _0x4f20a0, _0x4e88b8)
              : _0x1e5ea0(_0x48526d, _0x4f20a0)) || _0x4e88b8);
  }
  return (
    _0x65a7a6 > 3 &&
      _0x4e88b8 &&
      Object.defineProperty(_0x48526d, _0x4f20a0, _0x4e88b8),
    _0x4e88b8
  );
}
let I = class extends n.Disposable {
  constructor(_0x158777, _0x420326) {
    (super(),
      (this._context = _0x158777),
      (this._configService = _0x420326),
      N(this, "_valid", undefined),
      N(this, "_count", 0),
      this._initRender());
  }
  _initRender() {
    let { scene: _0x5c0f1e, type: _0x7509ca } = this._context;
    this.disposeWithMe(
      _0x5c0f1e.afterRender$["subscribe"]((_0x77a39e) => {
        if (_0x77a39e) {
          if (
            _0x7509ca === n.UniverInstanceType["UNIVER_DOC"] &&
            n.SHEET_EDITOR_UNITS["includes"](this._context["unitId"])
          )
            return;
          (this._count++,
            this._count > 200 &&
              ((this._count = 0), (this._valid = undefined)));
          let { pbk: _0x44d1f4, ls: _0x13bbf1 } =
            this._configService["getConfig"]("ls.config") ?? {};
          if (this._valid === undefined)
            try {
              let _0x5f43e3 = D(_0x13bbf1, _0x44d1f4),
                _0x1bfc5f = _0x5f43e3.message;
              if (_0x5f43e3.valid) {
                let _0x10a3dc =
                  _0x7509ca === n.UniverInstanceType["UNIVER_DOC"]
                    ? "df"
                    : _0x7509ca === n.UniverInstanceType["UNIVER_SHEET"]
                      ? "sf"
                      : "uf";
                this._valid = p(_0x1bfc5f, _0x10a3dc, d);
              } else this._valid = false;
            } catch {
              this._valid = false;
            }
          if (this._valid) return;
          _(_0x77a39e);
        }
      }),
    );
  }
};
I = F([P(1, n.IConfigService)], I);
function L() {
  if (typeof process < "u" && process.versions && process.versions["node"])
    try {
      return typeof global < "u" &&
        (global.parentPort !== undefined ||
          global.workerData !== undefined ||
          (global.process &&
            global.process["env"] &&
            global.process["env"].NODE_WORKER_ID))
        ? "node-worker"
        : "node-main";
    } catch {
      return "node-main";
    }
  if (typeof self < "u") {
    if (typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope)
      return "browser-worker";
    if (typeof window < "u" && typeof document < "u") return "browser-main";
  }
  return "unknown";
}
let R = class extends n.Plugin {
  constructor(_0x38df14 = b, _0x65cd34, _0x19c5dd, _0x177384, _0x37ad12) {
    (super(),
      (this._config = _0x38df14),
      (this._injector = _0x65cd34),
      (this._configService = _0x19c5dd),
      (this._lifecycleService = _0x177384),
      (this._univerInstanceService = _0x37ad12),
      N(this, "_env", "unknown"),
      (this._env = L()));
    try {
      (this._bindToGlobal(), this._initConfig());
    } catch {
      let { ..._0x43f0be } = this._config,
        _0x117a59 = _0x43f0be.license;
      this._configService["setConfig"](y, {
        ls: _0x117a59,
        pbk: "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
        stv: false,
      });
    }
  }
  onRendered() {
    if (this._env !== "browser-main") return;
    let _0x3e3fd0 = this._injector["get"](r.IRenderManagerService);
    [[I]].forEach((_0x277eab) => {
      (this.disposeWithMe(
        _0x3e3fd0.registerRenderModule(
          n.UniverInstanceType["UNIVER_SHEET"],
          _0x277eab,
        ),
      ),
        this.disposeWithMe(
          _0x3e3fd0.registerRenderModule(
            n.UniverInstanceType["UNIVER_DOC"],
            _0x277eab,
          ),
        ),
        this.disposeWithMe(
          _0x3e3fd0.registerRenderModule(
            n.UniverInstanceType["UNIVER_SLIDE"],
            _0x277eab,
          ),
        ),
        this.disposeWithMe(
          _0x3e3fd0.registerRenderModule(
            n.UniverInstanceType["UNIVER_BASE"],
            _0x277eab,
          ),
        ),
        this.disposeWithMe(
          _0x3e3fd0.registerRenderModule(
            n.UniverInstanceType["UNIVER_BOARD"],
            _0x277eab,
          ),
        ));
    });
  }
  _bindToGlobal() {
    var _0x1f3633;
    (T(),
      (_0x1f3633 = this._config) != null &&
        _0x1f3633.license &&
        E(this._config["license"]));
  }
  _initConfig() {
    let { ..._0x5d6064 } = (0, n.merge)({}, b, this._config);
    this._configService["setConfig"]("common.config", _0x5d6064);
    let _0x1f45d4 = _0x5d6064.license;
    if (this._env === "browser-worker" && !_0x1f45d4) {
      let _0x4bbd1e = new URL();
      SearchParams(location.search);
      _0x1f45d4 = decodeURIComponent(_0x4bbd1e.get("worker_init_ls_key") ?? "");
    }
    let _0x5eb58f =
        "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
      _0x123500 = D(_0x1f45d4, _0x5eb58f).message,
      _0x2ad3ac = this._univerInstanceService["getFocusedUnit"]();
    if (
      (this._configService["setConfig"](y, { ls: _0x1f45d4, pbk: _0x5eb58f }),
      !_0x2ad3ac)
    )
      this._univerInstanceService["unitAdded$"]
        .pipe((0, i.take)(1))
        .subscribe((_0x5be8c6) => {
          let _0x2b4576 =
              _0x5be8c6.unit["type"] === n.UniverInstanceType["UNIVER_DOC"]
                ? "df"
                : _0x5be8c6.unit["type"] ===
                    n.UniverInstanceType["UNIVER_SHEET"]
                  ? "sf"
                  : "uf",
            _0x312658 = p(_0x123500, _0x2b4576, d);
          this._configService["setConfig"](y, {
            ls: _0x1f45d4,
            pbk: _0x5eb58f,
            stv: _0x312658,
          });
        });
    else {
      let _0xdf9d01 = p(
        _0x123500,
        _0x2ad3ac.type === n.UniverInstanceType["UNIVER_DOC"]
          ? "df"
          : _0x2ad3ac.type === n.UniverInstanceType["UNIVER_SHEET"]
            ? "sf"
            : "uf",
        d,
      );
      this._configService["setConfig"](y, {
        ls: _0x1f45d4,
        pbk: _0x5eb58f,
        stv: _0xdf9d01,
      });
    }
  }
};
(N(R, "pluginName", "UNIVER_LICENSE_PLUGIN"),
  N(R, "packageName", O),
  N(R, "version", k),
  (R = F(
    [
      P(1, (0, n.Inject)(n.Injector)),
      P(2, n.IConfigService),
      P(3, (0, n.Inject)(n.LifecycleService)),
      P(4, (0, n.Inject)(n.IUniverInstanceService)),
    ],
    R,
  )),
  (exports.LS_CONFIG_KEY = y),
  (exports.ReleaseType = o),
  Object.defineProperty(exports, "UniverLicensePlugin", {
    enumerable: true,
    get: function () {
      return R;
    },
  }),
  (exports.WORKER_INIT_LICENSE = "worker_init_ls_key"),
  (exports.getDocFeatureLimit = h),
  (exports.getGlobalObject = a),
  (exports.getLicenseInfo = D),
  (exports.getSheetFeatureLimit = m),
  (exports.isFeatureAuthorizedWithinTime = p),
  (exports.isLocalCheck = g));
