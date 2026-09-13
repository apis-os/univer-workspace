import { etc, hashes, verify } from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";
import { Disposable, IConfigService, IUniverInstanceService, Inject, Injector, LifecycleService, Plugin, SHEET_EDITOR_UNITS, UniverInstanceType, merge } from "@univerjs/core";
import { IRenderManagerService } from "@univerjs/engine-render";
import { take } from "rxjs";
import { J } from "./license-worker-init-license.js";
import { A, j, k } from "./license-ls-config-key.js";
import { g } from "./license-global-object.js";
import { F, I, M, N, P, b, v, y } from "./internal-glue.js";
import { D } from "./license-local-check.js";
import { w } from "./license-feature-authorized-within-time.js";
import { E } from "./license-doc-feature-limit.js";
import { T } from "./license-sheet-feature-limit.js";
import { R } from "./license-info.js";
const x = {
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
  S = Number.parseInt(1788764280);
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.split("").map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619).join("");
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.getContext();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.font = "24px Arial", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.globalAlpha = 0.2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillStyle = "gray.500";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.getWidth(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.getHeight();
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 80; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 += 260) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 80; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D += 180) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.translate(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.rotate(-120), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillStyle = "transparent", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText("hidden\x20text", 10, 10), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText("", 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText(C("uavwFjLej7", x), 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText("support", 99999, 99999), Math.random() > 0.5 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillRect(0, 0, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.restore();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 < 200 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 < 200) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.restore();
    return;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 - 20,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 - 22;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.textAlign = "right", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.globalAlpha = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.font = "12px Arial", [{
    label: "Contact Us: ",
    link: "https://pro.univer.ai"
  }, {
    label: "Get Trial License: ",
    link: "https://pro.univer.ai/license"
  }].forEach(({
    label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
    link: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621
  }) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillStyle = "primary.600", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621).width;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillStyle = "gray.500", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 -= 20;
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillStyle = "gray.700", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.font = "16px Arial", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.fillText("Univer Pro License Required", var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.restore();
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.split("-"),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = JSON.parse(P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155[2])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = g();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.__Key__ = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3.p ?? "";
}
var z = "@univerjs-pro/license",
  B = "1.0.0-insiders.20260907-70fc579";
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) {
  "@babel/helpers - typeof";

  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
  }, V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164);
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
  if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 || "default");
    if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166);
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, "string");
  return V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 + "";
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178;
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184);
  };
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193;
}
let q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, W(this, "_valid", undefined), W(this, "_count", 0), this._initRender();
  }
  _initRender() {
    let {
      scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644
    } = this._context;
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.afterRender$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 === UniverInstanceType.UNIVER_DOC && SHEET_EDITOR_UNITS.includes(this._context["unitId"])) return;
        this._count++, this._count > 200 && (this._count = 0, this._valid = undefined);
        let {
          pbk: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB,
          ls: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1
        } = this._configService["getConfig"]("ls.config") ?? {};
        if (this._valid === undefined) try {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = R(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.message;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.valid) {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 === UniverInstanceType.UNIVER_DOC ? "df" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 === UniverInstanceType.UNIVER_SHEET ? "sf" : "uf";
            this._valid = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, S);
          } else this._valid = false;
        } catch {
          this._valid = false;
        }
        if (this._valid) return;
        O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464);
      }
    }));
  }
};
function Y() {
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
let X = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = j, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, this._lifecycleService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, W(this, "_env", "unknown"), this._env = Y();
    try {
      this._bindToGlobal(), this._initConfig();
    } catch {
      let {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466
        } = this._config,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.license;
      this._configService["setConfig"](A, {
        ls: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
        pbk: "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
        stv: false
      });
    }
  }
  onRendered() {
    if (this._env !== "browser-main") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = this._injector["get"](IRenderManagerService);
    [[q]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => {
      this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.registerRenderModule(UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.registerRenderModule(UniverInstanceType.UNIVER_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.registerRenderModule(UniverInstanceType.UNIVER_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.registerRenderModule(UniverInstanceType.UNIVER_BASE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.registerRenderModule(UniverInstanceType.UNIVER_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610));
    });
  }
  _bindToGlobal() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
    I(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = this._config) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.license && L(this._config["license"]);
  }
  _initConfig() {
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661
    } = merge({}, j, this._config);
    this._configService["setConfig"]("common.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.license;
    if (this._env === "browser-worker" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) {
      let var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484 = new URL();
      SearchParams(location.search);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = decodeURIComponent(var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.get("worker_init_ls_key") ?? "");
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = "69c4eb31ba71e758e264f21fcda75473415c9a7f2fe08d1759bed38cd95120e6",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3).message,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = this._univerInstanceService["getFocusedUnit"]();
    if (this._configService["setConfig"](A, {
      ls: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
      pbk: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3
    }), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) this._univerInstanceService["unitAdded$"].pipe(take(1)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unit["type"] === UniverInstanceType.UNIVER_DOC ? "df" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unit["type"] === UniverInstanceType.UNIVER_SHEET ? "sf" : "uf",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1, S);
      this._configService["setConfig"](A, {
        ls: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
        pbk: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
        stv: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613
      });
    });else {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.type === UniverInstanceType.UNIVER_DOC ? "df" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.type === UniverInstanceType.UNIVER_SHEET ? "sf" : "uf", S);
      this._configService["setConfig"](A, {
        ls: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
        pbk: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
        stv: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616
      });
    }
  }
};
export { X as UniverLicensePlugin };
export { q, K, G, W, z, B };
