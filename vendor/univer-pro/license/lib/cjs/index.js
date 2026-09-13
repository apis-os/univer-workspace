Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@noble/ed25519"),
  t = require("@noble/hashes/sha2.js"),
  n = require("@univerjs/core"),
  r = require("@univerjs/engine-render"),
  i = require("rxjs");
function a() {
  return typeof globalThis < "u" && globalThis || typeof window < "u" && window || typeof global < "u" && global;
}
let o = function (var_core_value_sigE90F) {
  return var_core_value_sigE90F[var_core_value_sigE90F.DEV = 1] = "DEV", var_core_value_sigE90F[var_core_value_sigE90F.NO_COMMERCIAL = 2] = "NO_COMMERCIAL", var_core_value_sigE90F[var_core_value_sigE90F.COMMERCIAL = 3] = "COMMERCIAL", var_core_value_sigE90F;
}({});
const s = [[61, 62, 50, 48, 61, 57, 62, 34, 37], [96, 99, 102, 127, 97, 127, 97, 127, 96]];
function c(var_core_value_sigEFD4) {
  return String.fromCharCode(...var_core_value_sigEFD4.map(var_core_value_sig480E => var_core_value_sig480E ^ 81));
}
function l(var_core_value_sig861B) {
  return s.some(var_core_value_sig26DB => c(var_core_value_sig26DB) === var_core_value_sig861B);
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
    L: "\x20"
  },
  d = Number.parseInt(1788764280);
function f(var_core_value_sig5237, var_core_value_sigBB00) {
  return var_core_value_sig5237.split("").map(var_core_value_sigF0F9 => var_core_value_sigBB00[var_core_value_sigF0F9] || var_core_value_sigF0F9).join("");
}
function p(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) {
  var var_core_value_sig9C9F;
  if (!var_core_value_sig7E54) return false;
  let var_core_value_sigFDEA = Date.now() / 1000,
    var_core_value_sig86D0 = var_core_value_sig7E54.ft,
    var_core_value_sig4CD2 = var_core_value_sig86D0 == null || (var_core_value_sig9C9F = var_core_value_sig86D0[var_core_value_sig9A8D]) == null ? undefined : var_core_value_sig9C9F.et,
    var_core_value_sig48CA = var_core_value_sig4CD2 ? var_core_value_sigFDEA < var_core_value_sig4CD2 : false,
    var_core_value_sig50AF = var_core_value_sig7E54.ud;
  return var_core_value_sig48CA && (var_core_value_sig50AF ? var_core_value_sigC259 < var_core_value_sig50AF : false);
}
function m(var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF, var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig5B67) {
  var var_core_value_sig1758;
  let var_core_value_sig4805 = var_core_value_sig32F8,
    var_core_value_sigE67E = var_core_value_sigA942 == null || (var_core_value_sig1758 = var_core_value_sigA942.ft) == null ? undefined : var_core_value_sig1758.sf;
  return var_core_value_sigE67E ? (var_core_value_sig4805 = (var_core_value_sigA942 == null ? undefined : var_core_value_sigA942.rt) === 2 ? var_core_value_sigA621 ? var_core_value_sigE67E != null && var_core_value_sigE67E[var_core_value_sigBBFF] ? var_core_value_sigE67E[var_core_value_sigBBFF] : var_core_value_sig8889 : var_core_value_sig5B67 : var_core_value_sigA621 ? var_core_value_sigE67E != null && var_core_value_sigE67E[var_core_value_sigBBFF] ? var_core_value_sigE67E == null ? undefined : var_core_value_sigE67E[var_core_value_sigBBFF] : var_core_value_sig8889 : var_core_value_sig32F8, var_core_value_sig4805) : var_core_value_sig32F8;
}
function h(var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E) {
  var var_core_value_sig20C8;
  let var_core_value_sigE9A7 = var_core_value_sig2DAB,
    var_core_value_sigBECE = var_core_value_sig2902 == null || (var_core_value_sig20C8 = var_core_value_sig2902.ft) == null ? undefined : var_core_value_sig20C8.df;
  return var_core_value_sigBECE ? (var_core_value_sigE9A7 = (var_core_value_sig2902 == null ? undefined : var_core_value_sig2902.rt) === 2 ? var_core_value_sig9989 ? var_core_value_sigBECE != null && var_core_value_sigBECE[var_core_value_sig698E] ? var_core_value_sigBECE[var_core_value_sig698E] : var_core_value_sig2809 : var_core_value_sig877E : var_core_value_sig9989 ? var_core_value_sigBECE != null && var_core_value_sigBECE[var_core_value_sig698E] ? var_core_value_sigBECE == null ? undefined : var_core_value_sigBECE[var_core_value_sig698E] : var_core_value_sig2809 : var_core_value_sig2DAB, var_core_value_sigE9A7) : var_core_value_sig2DAB;
}
const g = () => l(location.hostname);
function _(var_core_value_sig1B22) {
  let var_core_value_sig7F72 = var_core_value_sig1B22.getContext();
  var_core_value_sig7F72.save(), var_core_value_sig7F72.font = "24px\x20Arial", var_core_value_sig7F72.globalAlpha = 0.2, var_core_value_sig7F72.fillStyle = "gray.500";
  let var_core_value_sig7B2A = var_core_value_sig1B22.getWidth(),
    var_core_value_sig06CD = var_core_value_sig1B22.getHeight();
  for (let var_core_value_sig1A0F = 80; var_core_value_sig1A0F < var_core_value_sig7B2A; var_core_value_sig1A0F += 260) for (let var_core_value_sig3D7D = 80; var_core_value_sig3D7D < var_core_value_sig06CD; var_core_value_sig3D7D += 180) var_core_value_sig7F72.save(), var_core_value_sig7F72.translate(var_core_value_sig1A0F, var_core_value_sig3D7D), var_core_value_sig7F72.rotate(-120), var_core_value_sig7F72.save(), var_core_value_sig7F72.fillStyle = "transparent", var_core_value_sig7F72.fillText("hidden text", 10, 10), var_core_value_sig7F72.restore(), var_core_value_sig7F72.fillText("", 0, 0), var_core_value_sig7F72.fillText(f("uavwFjLej7", u), 0, 0), var_core_value_sig7F72.fillText("support", 99999, 99999), Math.random() > 0.5 && var_core_value_sig7F72.fillRect(0, 0, 0, 0), var_core_value_sig7F72.restore();
  if (var_core_value_sig7B2A < 200 || var_core_value_sig06CD < 200) {
    var_core_value_sig7F72.restore();
    return;
  }
  let var_core_value_sigA5F1 = var_core_value_sig7B2A - 20,
    var_core_value_sig97A2 = var_core_value_sig06CD - 22;
  var_core_value_sig7F72.textAlign = "right", var_core_value_sig7F72.globalAlpha = 1, var_core_value_sig7F72.font = "12px Arial", [{
    label: "Contact Us: ",
    link: "https://pro.univer.ai"
  }, {
    label: "Get Trial License: ",
    link: "https://pro.univer.ai/license"
  }].forEach(({
    label: var_core_value_sigFBA4,
    link: var_core_value_sig4383
  }) => {
    var_core_value_sig7F72.fillStyle = "primary.600", var_core_value_sig7F72.fillText(var_core_value_sig4383, var_core_value_sigA5F1, var_core_value_sig97A2);
    let var_core_value_sig186C = var_core_value_sig7F72.measureText(var_core_value_sig4383).width;
    var_core_value_sig7F72.fillStyle = "gray.500", var_core_value_sig7F72.fillText(var_core_value_sigFBA4, var_core_value_sigA5F1 - var_core_value_sig186C, var_core_value_sig97A2), var_core_value_sig97A2 -= 20;
  }), var_core_value_sig7F72.fillStyle = "gray.700", var_core_value_sig7F72.font = "16px\x20Arial", var_core_value_sig7F72.fillText("Univer Pro License Required", var_core_value_sigA5F1, var_core_value_sig97A2), var_core_value_sig7F72.restore();
}
const v = {
    base64Parse(var_core_value_sig07E9) {
      let var_core_value_sig4F59 = typeof atob == "function" ? atob(var_core_value_sig07E9) : Buffer.from(var_core_value_sig07E9, "base64").toString("binary"),
        var_core_value_sigF564 = var_core_value_sig4F59.length,
        var_core_value_sig8CFA = new Uint8Array(var_core_value_sigF564);
      for (let var_core_value_sigD955 = 0; var_core_value_sigD955 < var_core_value_sigF564; var_core_value_sigD955++) var_core_value_sig8CFA[var_core_value_sigD955] = var_core_value_sig4F59.charCodeAt(var_core_value_sigD955);
      return var_core_value_sig8CFA;
    },
    hexStringify(var_core_value_sig2E11) {
      let var_core_value_sig5B69 = "";
      for (let var_core_value_sig48BD = 0; var_core_value_sig48BD < var_core_value_sig2E11.length; var_core_value_sig48BD++) var_core_value_sig5B69 += var_core_value_sig2E11[var_core_value_sig48BD].toString(16).padStart(2, "0");
      return var_core_value_sig5B69;
    }
  },
  y = "ls.config",
  b = {};
function x(var_core_value_sigB098, var_core_value_sigCE71) {
  if (var_core_value_sigB098 === var_core_value_sigCE71) return true;
  if (!var_core_value_sigB098.startsWith("*.")) return false;
  let var_core_value_sig21D8 = var_core_value_sigB098.slice(2);
  return var_core_value_sig21D8 && var_core_value_sig21D8 === var_core_value_sigCE71 ? true : !!(var_core_value_sig21D8 && !var_core_value_sigCE71.startsWith(".") && var_core_value_sigCE71.endsWith("." + var_core_value_sig21D8));
}
const S = (...var_core_value_sig2B65) => (0, t.sha512)(e.etc["concatBytes"](...var_core_value_sig2B65));
function C(var_core_value_sigD7EA) {
  return typeof atob == "function" ? atob(var_core_value_sigD7EA) : Buffer.from(var_core_value_sigD7EA, "base64").toString("binary");
}
function w() {
  var var_core_value_sigB33B;
  let var_core_value_sig24B9 = a();
  return typeof ((var_core_value_sigB33B = var_core_value_sig24B9.location) == null ? undefined : var_core_value_sigB33B.hostname) == "string" ? var_core_value_sig24B9.location["hostname"] : undefined;
}
function T() {
  e.hashes["sha512"] = S;
}
function E(var_core_value_sigE627) {
  if (!var_core_value_sigE627) return;
  let var_core_value_sigEF3E = var_core_value_sigE627.split("-"),
    var_core_value_sig273D = JSON.parse(C(var_core_value_sigEF3E[2])),
    var_core_value_sig9A0D = a();
  var_core_value_sig9A0D.__Key__ = var_core_value_sig273D.p ?? "";
}
function D(var_core_value_sigA319, var_core_value_sig2D58) {
  if (!var_core_value_sigA319 || !var_core_value_sig2D58) return {
    valid: false,
    message: {}
  };
  try {
    T();
    let var_core_value_sig429F = var_core_value_sigA319.split("-"),
      var_core_value_sigF62A = JSON.parse(C(var_core_value_sig429F[2]));
    var_core_value_sigF62A.ud ||= Number(var_core_value_sig429F[4]);
    let var_core_value_sig8178 = v.hexStringify(v.base64Parse(var_core_value_sig429F[2])),
      var_core_value_sigE9ED = v.hexStringify(v.base64Parse(var_core_value_sig429F[3])),
      var_core_value_sigB577 = (0, e.verify)(e.etc["hexToBytes"](var_core_value_sigE9ED), e.etc["hexToBytes"](var_core_value_sig8178), e.etc["hexToBytes"](var_core_value_sig2D58)),
      var_core_value_sig9572 = w(),
      var_core_value_sigD873 = Array.isArray(var_core_value_sigF62A.dm) ? var_core_value_sigF62A.dm["filter"](var_core_value_sig27E5 => typeof var_core_value_sig27E5 == "string") : [],
      var_core_value_sigA12B = true;
    return var_core_value_sig9572 && (var_core_value_sigA12B = !var_core_value_sigD873.length || var_core_value_sigD873.some(var_core_value_sig8061 => x(var_core_value_sig8061, var_core_value_sig9572)), l(var_core_value_sig9572) && (var_core_value_sigA12B = true)), {
      valid: var_core_value_sigB577 && var_core_value_sigA12B,
      message: var_core_value_sigF62A
    };
  } catch {
    return {
      valid: false,
      message: {}
    };
  }
}
var O = "@univerjs-pro/license",
  k = "1.0.0-insiders.20260907-70fc579";
function A(var_core_value_sig223F) {
  "@babel/helpers - typeof";

  return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF230) {
    return typeof var_core_value_sigF230;
  } : function (var_core_value_sig09B8) {
    return var_core_value_sig09B8 && typeof Symbol == "function" && var_core_value_sig09B8.constructor === Symbol && var_core_value_sig09B8 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig09B8;
  }, A(var_core_value_sig223F);
}
function j(var_core_value_sigD749, var_core_value_sigCFFA) {
  if (A(var_core_value_sigD749) != "object" || !var_core_value_sigD749) return var_core_value_sigD749;
  var var_core_value_sig58C1 = var_core_value_sigD749[Symbol.toPrimitive];
  if (var_core_value_sig58C1 !== undefined) {
    var var_core_value_sig5090 = var_core_value_sig58C1.call(var_core_value_sigD749, var_core_value_sigCFFA || "default");
    if (A(var_core_value_sig5090) != "object") return var_core_value_sig5090;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigCFFA === "string" ? String : Number)(var_core_value_sigD749);
}
function M(var_core_value_sigC368) {
  var var_core_value_sigAD56 = j(var_core_value_sigC368, "string");
  return A(var_core_value_sigAD56) == "symbol" ? var_core_value_sigAD56 : var_core_value_sigAD56 + "";
}
function N(var_core_value_sigDB4A, var_core_value_sig6418, var_core_value_sig1896) {
  return (var_core_value_sig6418 = M(var_core_value_sig6418)) in var_core_value_sigDB4A ? Object.defineProperty(var_core_value_sigDB4A, var_core_value_sig6418, {
    value: var_core_value_sig1896,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigDB4A[var_core_value_sig6418] = var_core_value_sig1896, var_core_value_sigDB4A;
}
function P(var_core_value_sig0285, var_core_value_sig777D) {
  return function (var_core_value_sig6F91, var_core_value_sigF9C7) {
    var_core_value_sig777D(var_core_value_sig6F91, var_core_value_sigF9C7, var_core_value_sig0285);
  };
}
function F(var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigF593) {
  var var_core_value_sig3607 = arguments.length,
    var_core_value_sigB512 = var_core_value_sig3607 < 3 ? var_core_value_sigD65A : var_core_value_sigF593 === null ? var_core_value_sigF593 = Object.getOwnPropertyDescriptor(var_core_value_sigD65A, var_core_value_sig5A13) : var_core_value_sigF593,
    var_core_value_sigF2E6;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigB512 = Reflect.decorate(var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigF593);else {
    for (var var_core_value_sig34C8 = var_core_value_sig3F4C.length - 1; var_core_value_sig34C8 >= 0; var_core_value_sig34C8--) (var_core_value_sigF2E6 = var_core_value_sig3F4C[var_core_value_sig34C8]) && (var_core_value_sigB512 = (var_core_value_sig3607 < 3 ? var_core_value_sigF2E6(var_core_value_sigB512) : var_core_value_sig3607 > 3 ? var_core_value_sigF2E6(var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigB512) : var_core_value_sigF2E6(var_core_value_sigD65A, var_core_value_sig5A13)) || var_core_value_sigB512);
  }
  return var_core_value_sig3607 > 3 && var_core_value_sigB512 && Object.defineProperty(var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigB512), var_core_value_sigB512;
}
let I = class extends n.Disposable {
  constructor(var_core_value_sig8895, var_core_value_sigC80B) {
    super(), this._context = var_core_value_sig8895, this._configService = var_core_value_sigC80B, N(this, "_valid", undefined), N(this, "_count", 0), this._initRender();
  }
  _initRender() {
    let {
      scene: var_core_value_sig284F,
      type: var_core_value_sigE154
    } = this._context;
    this.disposeWithMe(var_core_value_sig284F.afterRender$["subscribe"](var_core_value_sig4D4C => {
      if (var_core_value_sig4D4C) {
        if (var_core_value_sigE154 === n.UniverInstanceType["UNIVER_DOC"] && n.SHEET_EDITOR_UNITS["includes"](this._context["unitId"])) return;
        this._count++, this._count > 200 && (this._count = 0, this._valid = undefined);
        let {
          pbk: var_core_value_sig3EEE,
          ls: var_core_value_sigBC46
        } = this._configService["getConfig"]("ls.config") ?? {};
        if (this._valid === undefined) try {
          let var_core_value_sig2AD8 = D(var_core_value_sigBC46, var_core_value_sig3EEE),
            var_core_value_sig2AD0 = var_core_value_sig2AD8.message;
          if (var_core_value_sig2AD8.valid) {
            let var_core_value_sig7524 = var_core_value_sigE154 === n.UniverInstanceType["UNIVER_DOC"] ? "df" : var_core_value_sigE154 === n.UniverInstanceType["UNIVER_SHEET"] ? "sf" : "uf";
            this._valid = p(var_core_value_sig2AD0, var_core_value_sig7524, d);
          } else this._valid = false;
        } catch {
          this._valid = false;
        }
        if (this._valid) return;
        _(var_core_value_sig4D4C);
      }
    }));
  }
};
I = F([P(1, n.IConfigService)], I);
function L() {
  if (typeof process < "u" && process.versions && process.versions["node"]) try {
    return typeof global < "u" && (global.parentPort !== undefined || global.workerData !== undefined || global.process && global.process["env"] && global.process["env"].NODE_WORKER_ID) ? "node-worker" : "node-main";
  } catch {
    return "node-main";
  }
  if (typeof self < "u") {
    if (typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope) return "browser-worker";
    if (typeof window < "u" && typeof document < "u") return "browser-main";
  }
  return "unknown";
}
let R = class extends n.Plugin {
  constructor(var_core_value_sig4632 = b, var_core_value_sig12F2, var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082) {
    super(), this._config = var_core_value_sig4632, this._injector = var_core_value_sig12F2, this._configService = var_core_value_sig2259, this._lifecycleService = var_core_value_sig9E2F, this._univerInstanceService = var_core_value_sigD082, N(this, "_env", "unknown"), this._env = L();
    try {
      this._bindToGlobal(), this._initConfig();
    } catch {
      let {
          ...var_core_value_sigC9E0
        } = this._config,
        var_core_value_sig76BA = var_core_value_sigC9E0.license;
      this._configService["setConfig"](y, {
        ls: var_core_value_sig76BA,
        pbk: "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
        stv: false
      });
    }
  }
  onRendered() {
    if (this._env !== "browser-main") return;
    let var_core_value_sigDBB7 = this._injector["get"](r.IRenderManagerService);
    [[I]].forEach(var_core_value_sigFBFA => {
      this.disposeWithMe(var_core_value_sigDBB7.registerRenderModule(n.UniverInstanceType["UNIVER_SHEET"], var_core_value_sigFBFA)), this.disposeWithMe(var_core_value_sigDBB7.registerRenderModule(n.UniverInstanceType["UNIVER_DOC"], var_core_value_sigFBFA)), this.disposeWithMe(var_core_value_sigDBB7.registerRenderModule(n.UniverInstanceType["UNIVER_SLIDE"], var_core_value_sigFBFA)), this.disposeWithMe(var_core_value_sigDBB7.registerRenderModule(n.UniverInstanceType["UNIVER_BASE"], var_core_value_sigFBFA)), this.disposeWithMe(var_core_value_sigDBB7.registerRenderModule(n.UniverInstanceType["UNIVER_BOARD"], var_core_value_sigFBFA));
    });
  }
  _bindToGlobal() {
    var var_core_value_sigD0A8;
    T(), (var_core_value_sigD0A8 = this._config) != null && var_core_value_sigD0A8.license && E(this._config["license"]);
  }
  _initConfig() {
    let {
      ...var_core_value_sigF4B9
    } = (0, n.merge)({}, b, this._config);
    this._configService["setConfig"]("common.config", var_core_value_sigF4B9);
    let var_core_value_sig5CEE = var_core_value_sigF4B9.license;
    if (this._env === "browser-worker" && !var_core_value_sig5CEE) {
      let var_core_value_sigF602 = new URL();
      SearchParams(location.search);
      var_core_value_sig5CEE = decodeURIComponent(var_core_value_sigF602.get("worker_init_ls_key") ?? "");
    }
    let var_core_value_sigE92A = "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
      var_core_value_sig362B = D(var_core_value_sig5CEE, var_core_value_sigE92A).message,
      var_core_value_sig5CA5 = this._univerInstanceService["getFocusedUnit"]();
    if (this._configService["setConfig"](y, {
      ls: var_core_value_sig5CEE,
      pbk: var_core_value_sigE92A
    }), !var_core_value_sig5CA5) this._univerInstanceService["unitAdded$"].pipe((0, i.take)(1)).subscribe(var_core_value_sig1BBD => {
      let var_core_value_sigF704 = var_core_value_sig1BBD.unit["type"] === n.UniverInstanceType["UNIVER_DOC"] ? "df" : var_core_value_sig1BBD.unit["type"] === n.UniverInstanceType["UNIVER_SHEET"] ? "sf" : "uf",
        var_core_value_sig2BCF = p(var_core_value_sig362B, var_core_value_sigF704, d);
      this._configService["setConfig"](y, {
        ls: var_core_value_sig5CEE,
        pbk: var_core_value_sigE92A,
        stv: var_core_value_sig2BCF
      });
    });else {
      let var_core_value_sig0D69 = p(var_core_value_sig362B, var_core_value_sig5CA5.type === n.UniverInstanceType["UNIVER_DOC"] ? "df" : var_core_value_sig5CA5.type === n.UniverInstanceType["UNIVER_SHEET"] ? "sf" : "uf", d);
      this._configService["setConfig"](y, {
        ls: var_core_value_sig5CEE,
        pbk: var_core_value_sigE92A,
        stv: var_core_value_sig0D69
      });
    }
  }
};
N(R, "pluginName", "UNIVER_LICENSE_PLUGIN"), N(R, "packageName", O), N(R, "version", k), R = F([P(1, (0, n.Inject)(n.Injector)), P(2, n.IConfigService), P(3, (0, n.Inject)(n.LifecycleService)), P(4, (0, n.Inject)(n.IUniverInstanceService))], R), exports.LS_CONFIG_KEY = y, exports.ReleaseType = o, Object.defineProperty(exports, "UniverLicensePlugin", {
  enumerable: true,
  get: function () {
    return R;
  }
}), exports.WORKER_INIT_LICENSE = "worker_init_ls_key", exports.getDocFeatureLimit = h, exports.getGlobalObject = a, exports.getLicenseInfo = D, exports.getSheetFeatureLimit = m, exports.isFeatureAuthorizedWithinTime = p, exports.isLocalCheck = g;
