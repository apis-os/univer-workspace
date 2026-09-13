Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = function (var_core_value_sig3D7D) {
    return var_core_value_sig3D7D.Portrait = "Portrait", var_core_value_sig3D7D.Landscape = "Landscape", var_core_value_sig3D7D;
  }({}),
  n = function (var_core_value_sig27E5) {
    return var_core_value_sig27E5.Origin = "Origin", var_core_value_sig27E5.FitWidth = "FitWidth", var_core_value_sig27E5.FitHeight = "FitHeight", var_core_value_sig27E5.FitPage = "FitPage", var_core_value_sig27E5.Custom = "Custom", var_core_value_sig27E5;
  }({}),
  r = function (var_core_value_sig8061) {
    return var_core_value_sig8061.Start = "Start", var_core_value_sig8061.End = "End", var_core_value_sig8061.Middle = "Middle", var_core_value_sig8061;
  }({}),
  i = function (var_core_value_sig4D4C) {
    return var_core_value_sig4D4C.Normal = "Normal", var_core_value_sig4D4C.Narrow = "Narrow", var_core_value_sig4D4C.Wide = "Wide", var_core_value_sig4D4C.None = "None", var_core_value_sig4D4C.Custom = "Custom", var_core_value_sig4D4C;
  }({});
const a = {
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
  o = "printing-canvas-container",
  s = "printing-canvas";
function c(var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA) {
  let var_core_value_sigF602 = var_core_value_sigFBFA === "Portrait" ? var_core_value_sigC9E0 : var_core_value_sig76BA,
    var_core_value_sig1BBD = var_core_value_sigFBFA === "Portrait" ? var_core_value_sig76BA : var_core_value_sigC9E0,
    var_core_value_sigF704 = "\n ." + s + "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@media\x20print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20html\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size:\x20" + var_core_value_sigF602 + "px " + var_core_value_sig1BBD + "px; \n }\n @page {\n margin: 0;\n visibility: hidden;\n }\n body > * {\n display: none!important;\n }\n ." + o + " {\n display: block!important;\n height: fit-content;\n overflow: visible;\n top: 0;\n width: fit-content;\n }\n ." + o + "\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20." + s + " {\n page-break-after: always!important;\n height: " + var_core_value_sig1BBD + "px;\n width: " + var_core_value_sigF602 + "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}",
    var_core_value_sig2BCF = document.createElement("style");
  return var_core_value_sig2BCF.innerHTML = var_core_value_sigF704, var_core_value_sig2BCF.className = "offline-printing-css", var_core_value_sig2BCF;
}
function l(var_core_value_sig0D69) {
  "@babel/helpers - typeof";

  return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig2AD8) {
    return typeof var_core_value_sig2AD8;
  } : function (var_core_value_sig2AD0) {
    return var_core_value_sig2AD0 && typeof Symbol == "function" && var_core_value_sig2AD0.constructor === Symbol && var_core_value_sig2AD0 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig2AD0;
  }, l(var_core_value_sig0D69);
}
function u(var_core_value_sig480E, var_core_value_sig26DB) {
  if (l(var_core_value_sig480E) != "object" || !var_core_value_sig480E) return var_core_value_sig480E;
  var var_core_value_sigF0F9 = var_core_value_sig480E[Symbol.toPrimitive];
  if (var_core_value_sigF0F9 !== undefined) {
    var var_core_value_sig1A0F = var_core_value_sigF0F9.call(var_core_value_sig480E, var_core_value_sig26DB || "default");
    if (l(var_core_value_sig1A0F) != "object") return var_core_value_sig1A0F;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig26DB === "string" ? String : Number)(var_core_value_sig480E);
}
function d(var_core_value_sigFBA4) {
  var var_core_value_sig4383 = u(var_core_value_sigFBA4, "string");
  return l(var_core_value_sig4383) == "symbol" ? var_core_value_sig4383 : var_core_value_sig4383 + "";
}
function f(var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD) {
  return (var_core_value_sigD955 = d(var_core_value_sigD955)) in var_core_value_sig186C ? Object.defineProperty(var_core_value_sig186C, var_core_value_sigD955, {
    value: var_core_value_sig48BD,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig186C[var_core_value_sigD955] = var_core_value_sig48BD, var_core_value_sig186C;
}
const p = (0, e.createIdentifier)("pro.print-preparation.service");
var m = class {
  constructor() {
    f(this, "_contributions", new Set());
  }
  registerContribution(var_core_value_sig3EEE) {
    return this._contributions["add"](var_core_value_sig3EEE), (0, e.toDisposable)(() => this._contributions["delete"](var_core_value_sig3EEE));
  }
  async prepare(var_core_value_sigBC46) {
    await Promise.all(Array.from(this._contributions, var_core_value_sig7524 => var_core_value_sig7524.prepare(var_core_value_sigBC46)));
  }
};
exports.IPrintPreparationService = p, exports.PRINT_CANVAS_CLASS = s, exports.PRINT_CONTAINER_CLASS = o, exports.PaperMarginMap = a, exports.PrintAlign = r, exports.PrintDirection = t, exports.PrintPaperMargin = i, exports.PrintPreparationService = m, exports.PrintScale = n, exports.createPrintStyle = c;
