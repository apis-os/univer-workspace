import { createIdentifier as var_core_value_sigF62A, toDisposable as var_core_value_sig8178 } from "@univerjs/core";
let n = function (var_core_value_sig3D7D) {
    return var_core_value_sig3D7D.Portrait = "Portrait", var_core_value_sig3D7D.Landscape = "Landscape", var_core_value_sig3D7D;
  }({}),
  r = function (var_core_value_sig27E5) {
    return var_core_value_sig27E5.Origin = "Origin", var_core_value_sig27E5.FitWidth = "FitWidth", var_core_value_sig27E5.FitHeight = "FitHeight", var_core_value_sig27E5.FitPage = "FitPage", var_core_value_sig27E5.Custom = "Custom", var_core_value_sig27E5;
  }({}),
  i = function (var_core_value_sig8061) {
    return var_core_value_sig8061.Start = "Start", var_core_value_sig8061.End = "End", var_core_value_sig8061.Middle = "Middle", var_core_value_sig8061;
  }({}),
  a = function (var_core_value_sig4D4C) {
    return var_core_value_sig4D4C.Normal = "Normal", var_core_value_sig4D4C.Narrow = "Narrow", var_core_value_sig4D4C.Wide = "Wide", var_core_value_sig4D4C.None = "None", var_core_value_sig4D4C.Custom = "Custom", var_core_value_sig4D4C;
  }({});
const o = {
    Normal: {
      left: 53,
      right: 53,
      top: 56,
      bottom: 56
    },
    Narrow: {
      left: 19,
      right: 19,
      top: 56,
      bottom: 56
    },
    Wide: {
      left: 75,
      right: 75,
      top: 75,
      bottom: 75
    },
    None: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    Custom: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  s = "printing-canvas-container",
  c = "printing-canvas";
function l(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA) {
  let var_core_value_sigF602 = var_core_value_sigFBFA === "Portrait" ? var_core_value_sigC9E0 : var_core_value_sig76BA,
    var_core_value_sig1BBD = var_core_value_sigFBFA === "Portrait" ? var_core_value_sig76BA : var_core_value_sigC9E0,
    var_core_value_sigF704 = "\n ." + c + "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@media\x20print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20html\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size:\x20" + var_core_value_sigF602 + "px " + var_core_value_sig1BBD + "px; \n }\n @page {\n margin: 0;\n visibility: hidden;\n }\n body > * {\n display: none!important;\n }\n ." + s + " {\n display: block!important;\n height: fit-content;\n overflow: visible;\n top: 0;\n width: fit-content;\n }\n ." + s + " * {\n display: block!important;\n }\n ." + c + "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-after:\x20always!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" + var_core_value_sig1BBD + "px;\n width: " + var_core_value_sigF602 + "px;\n position: relative;\n }\n }",
    var_core_value_sig2BCF = document.createElement("style");
  return var_core_value_sig2BCF.innerHTML = var_core_value_sigF704, var_core_value_sig2BCF.className = "offline-printing-css", var_core_value_sig2BCF;
}
function u(var_core_value_sig0D69) {
  "@babel/helpers - typeof";

  return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig2AD8) {
    return typeof var_core_value_sig2AD8;
  } : function (var_core_value_sig2AD0) {
    return var_core_value_sig2AD0 && typeof Symbol == "function" && var_core_value_sig2AD0.constructor === Symbol && var_core_value_sig2AD0 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig2AD0;
  }, u(var_core_value_sig0D69);
}
function d(var_core_value_sig480E, var_core_value_sig26DB) {
  if (u(var_core_value_sig480E) != "object" || !var_core_value_sig480E) return var_core_value_sig480E;
  var var_core_value_sigF0F9 = var_core_value_sig480E[Symbol.toPrimitive];
  if (var_core_value_sigF0F9 !== undefined) {
    var var_core_value_sig1A0F = var_core_value_sigF0F9.call(var_core_value_sig480E, var_core_value_sig26DB || "default");
    if (u(var_core_value_sig1A0F) != "object") return var_core_value_sig1A0F;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig26DB === "string" ? String : Number)(var_core_value_sig480E);
}
function f(var_core_value_sigFBA4) {
  var var_core_value_sig4383 = ox3ee768,
    var_core_value_sig186C = d(var_core_value_sigFBA4, var_core_value_sig4383(538));
  return u(var_core_value_sig186C) == "symbol" ? var_core_value_sig186C : var_core_value_sig186C + "";
}
function p(var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig429F) {
  return (var_core_value_sig48BD = f(var_core_value_sig48BD)) in var_core_value_sigD955 ? Object.defineProperty(var_core_value_sigD955, var_core_value_sig48BD, {
    value: var_core_value_sig429F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigD955[var_core_value_sig48BD] = var_core_value_sig429F, var_core_value_sigD955;
}
const m = var_core_value_sigF62A("pro.print-preparation.service");
var h = class {
  constructor() {
    p(this, "_contributions", new Set());
  }
  registerContribution(var_core_value_sig3EEE) {
    return this._contributions["add"](var_core_value_sig3EEE), var_core_value_sig8178(() => this._contributions["delete"](var_core_value_sig3EEE));
  }
  async prepare(var_core_value_sigBC46) {
    await Promise.all(Array.from(this._contributions, var_core_value_sig7524 => var_core_value_sig7524.prepare(var_core_value_sigBC46)));
  }
};
export { m as IPrintPreparationService, c as PRINT_CANVAS_CLASS, s as PRINT_CONTAINER_CLASS, o as PaperMarginMap, i as PrintAlign, n as PrintDirection, a as PrintPaperMargin, h as PrintPreparationService, r as PrintScale, l as createPrintStyle };
