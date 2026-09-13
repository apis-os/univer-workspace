import { UniverInkPlugin as var_core_value_sig2D58 } from "@univerjs-pro/ink";
import { UniverLicensePlugin as var_core_value_sig223F } from "@univerjs-pro/license";
import { DependentOn as var_core_value_sigD749, Disposable as var_core_value_sigCFFA, IConfigService as var_core_value_sig58C1, Inject as var_core_value_sig5090, Injector as var_core_value_sigC368, LocaleService as var_core_value_sigAD56, Plugin as var_core_value_sigDB4A, UniverInstanceType as var_core_value_sig6418, createIdentifier as var_core_value_sig1896, merge as var_core_value_sig0285, toDisposable as var_core_value_sig777D } from "@univerjs/core";
import { BuiltInUIPart as var_core_value_sig3F4C, IUIPartsService as var_core_value_sigD65A, connectInjector as var_core_value_sig5A13, useDependency as var_core_value_sigF593, useObservable as var_core_value_sig3607 } from "@univerjs/ui";
import { BehaviorSubject as var_core_value_sigB512 } from "rxjs";
import { ShapeFloatingToolbarMenuPanel as var_core_value_sigF2E6 } from "@univerjs-pro/shape-editor-ui";
import { Button as var_core_value_sig34C8, ColorPicker as var_core_value_sigB744, Dropdown as var_core_value_sigEAE2, Separator as var_core_value_sigE68A, Tooltip as var_core_value_sig3E68, clsx as var_core_value_sigF4C5 } from "@univerjs/design";
import { CloseIcon as var_core_value_sig5410, ColorWheelMultiIcon as var_core_value_sig492F, MoreDownIcon as var_core_value_sig8EA0, StrokeSize1Icon as var_core_value_sigA6F6, StrokeSize2Icon as var_core_value_sigCDDA, StrokeSize3Icon as var_core_value_sigE243, StrokeSize4Icon as var_core_value_sig74A8, StrokeSize5Icon as var_core_value_sig21B2 } from "@univerjs/icons";
import { useState as var_core_value_sigDE08 } from "react";
import { jsx as var_core_value_sigACCB, jsxs as var_core_value_sig7F33 } from "react/jsx-runtime";
var N = "@univerjs-pro/ink-ui",
  P = "1.0.0-insiders.20260907-70fc579";
const F = {};
function I(var_core_value_sig362B) {
  "@babel/helpers - typeof";

  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8061) {
    return typeof var_core_value_sig8061;
  } : function (var_core_value_sig4D4C) {
    return var_core_value_sig4D4C && typeof Symbol == "function" && var_core_value_sig4D4C.constructor === Symbol && var_core_value_sig4D4C !== Symbol.prototype ? "symbol" : typeof var_core_value_sig4D4C;
  }, I(var_core_value_sig362B);
}
function ie(var_core_value_sig5CA5, var_core_value_sigE90F) {
  if (I(var_core_value_sig5CA5) != "object" || !var_core_value_sig5CA5) return var_core_value_sig5CA5;
  var var_core_value_sigEFD4 = var_core_value_sig5CA5[Symbol.toPrimitive];
  if (var_core_value_sigEFD4 !== undefined) {
    var var_core_value_sig861B = var_core_value_sigEFD4.call(var_core_value_sig5CA5, var_core_value_sigE90F || "default");
    if (I(var_core_value_sig861B) != "object") return var_core_value_sig861B;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigE90F === "string" ? String : Number)(var_core_value_sig5CA5);
}
function ae(var_core_value_sig5237) {
  var var_core_value_sigBB00 = ie(var_core_value_sig5237, "string");
  return I(var_core_value_sigBB00) == "symbol" ? var_core_value_sigBB00 : var_core_value_sigBB00 + "";
}
function L(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) {
  return (var_core_value_sig9A8D = ae(var_core_value_sig9A8D)) in var_core_value_sig7E54 ? Object.defineProperty(var_core_value_sig7E54, var_core_value_sig9A8D, {
    value: var_core_value_sigC259,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7E54[var_core_value_sig9A8D] = var_core_value_sigC259, var_core_value_sig7E54;
}
const R = var_core_value_sig1896("ink-ui.state.service"),
  z = {
    pen: {
      color: "#f54a45",
      width: 2,
      opacity: 1
    },
    brush: {
      color: "#f54a45",
      width: 4,
      opacity: 1
    },
    highlighter: {
      color: "#ffe928",
      width: 14,
      opacity: 0.45
    },
    eraser: {
      color: "#ffffff",
      width: 24,
      opacity: 1
    }
  };
function B(var_core_value_sig9C9F) {
  return var_core_value_sig9C9F === "brush" || var_core_value_sig9C9F === "highlighter" || var_core_value_sig9C9F === "eraser" ? var_core_value_sig9C9F : "pen";
}
var V = class extends var_core_value_sigCFFA {
  constructor(...var_core_value_sigC9E0) {
    super(...var_core_value_sigC9E0), L(this, "_state$", new var_core_value_sigB512({
      active: false,
      toolbarVisible: false,
      tool: "pen",
      ...z.pen,
      session: null
    })), L(this, "state$", this._state$["asObservable"]());
  }
  dispose() {
    this._state$["complete"](), super.dispose();
  }
  getState() {
    return this._state$["getValue"]();
  }
  beginInkMode(var_core_value_sig76BA) {
    let var_core_value_sigFBFA = B(var_core_value_sig76BA.tool);
    this._state$["next"]({
      ...this.getState(),
      ...z[var_core_value_sigFBFA],
      active: true,
      toolbarVisible: true,
      tool: var_core_value_sigFBFA,
      session: {
        unitId: var_core_value_sig76BA.unitId,
        subUnitId: var_core_value_sig76BA.subUnitId
      }
    });
  }
  cancelInkMode() {
    this._state$["next"]({
      ...this.getState(),
      active: false,
      toolbarVisible: false,
      session: null
    });
  }
  selectTool(var_core_value_sigF602) {
    this._state$["next"]({
      ...this.getState(),
      ...z[var_core_value_sigF602],
      tool: var_core_value_sigF602
    });
  }
  setWidth(var_core_value_sig1BBD) {
    !Number.isFinite(var_core_value_sig1BBD) || var_core_value_sig1BBD <= 0 || this._state$["next"]({
      ...this.getState(),
      width: var_core_value_sig1BBD
    });
  }
  setColor(var_core_value_sigF704) {
    var_core_value_sigF704 && this._state$["next"]({
      ...this.getState(),
      color: var_core_value_sigF704
    });
  }
};
function H(var_core_value_sigFDEA, var_core_value_sig86D0) {
  return function (var_core_value_sig2BCF, var_core_value_sig0D69) {
    var_core_value_sig86D0(var_core_value_sig2BCF, var_core_value_sig0D69, var_core_value_sigFDEA);
  };
}
function U(var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942) {
  var var_core_value_sigA621 = arguments.length,
    var_core_value_sigBBFF = var_core_value_sigA621 < 3 ? var_core_value_sig48CA : var_core_value_sigA942 === null ? var_core_value_sigA942 = Object.getOwnPropertyDescriptor(var_core_value_sig48CA, var_core_value_sig50AF) : var_core_value_sigA942,
    var_core_value_sig8889;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigBBFF = Reflect.decorate(var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942);else {
    for (var var_core_value_sig32F8 = var_core_value_sig4CD2.length - 1; var_core_value_sig32F8 >= 0; var_core_value_sig32F8--) (var_core_value_sig8889 = var_core_value_sig4CD2[var_core_value_sig32F8]) && (var_core_value_sigBBFF = (var_core_value_sigA621 < 3 ? var_core_value_sig8889(var_core_value_sigBBFF) : var_core_value_sigA621 > 3 ? var_core_value_sig8889(var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigBBFF) : var_core_value_sig8889(var_core_value_sig48CA, var_core_value_sig50AF)) || var_core_value_sigBBFF);
  }
  return var_core_value_sigA621 > 3 && var_core_value_sigBBFF && Object.defineProperty(var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigBBFF), var_core_value_sigBBFF;
}
const W = var_core_value_sig1896("ink-ui.outside-interaction.service"),
  G = ["[data-ink-floating-toolbar=\x22true\x22]", '[data-ink-floating-toolbar-popup="true"]', '[data-ink-interactive-region="true"]'];
function K(var_core_value_sig5B67, var_core_value_sig1758) {
  return var_core_value_sig5B67.some(var_core_value_sig480E => var_core_value_sig480E === var_core_value_sig1758 || var_core_value_sig480E instanceof Node && var_core_value_sig1758.contains(var_core_value_sig480E));
}
function q(var_core_value_sig4805, var_core_value_sigE67E) {
  return var_core_value_sig4805.some(var_core_value_sig26DB => var_core_value_sig26DB instanceof Element && !!var_core_value_sig26DB.closest(var_core_value_sigE67E));
}
let J = class extends var_core_value_sigCFFA {
  constructor(var_core_value_sigF0F9) {
    if (super(), this._stateService = var_core_value_sigF0F9, L(this, "_interactiveRegions", new Set()), typeof window < "u") {
      let var_core_value_sig2AD0 = var_core_value_sig7524 => this._handlePointerDown(var_core_value_sig7524);
      window.addEventListener("pointerdown", var_core_value_sig2AD0, {
        capture: true
      }), this.disposeWithMe(var_core_value_sig777D(() => window.removeEventListener("pointerdown", var_core_value_sig2AD0, {
        capture: true
      })));
    }
  }
  registerInteractiveRegion(var_core_value_sig1A0F) {
    return var_core_value_sig1A0F.dataset["inkInteractiveRegion"] = "true", this._interactiveRegions["add"](var_core_value_sig1A0F), var_core_value_sig777D(() => {
      this._interactiveRegions["delete"](var_core_value_sig1A0F), var_core_value_sig1A0F.dataset["inkInteractiveRegion"] === "true" && delete var_core_value_sig1A0F.dataset["inkInteractiveRegion"];
    });
  }
  _handlePointerDown(var_core_value_sigFBA4) {
    if (!this._stateService["getState"]().active) return;
    let var_core_value_sig4383 = typeof var_core_value_sigFBA4.composedPath == "function" ? var_core_value_sigFBA4.composedPath() : var_core_value_sigFBA4.target ? [var_core_value_sigFBA4.target] : [];
    if (!G.some(var_core_value_sig3EEE => q(var_core_value_sig4383, var_core_value_sig3EEE))) {
      for (let var_core_value_sig2AD8 of this._interactiveRegions) if (K(var_core_value_sig4383, var_core_value_sig2AD8)) return;
      this._stateService["cancelInkMode"]();
    }
  }
};
J = U([H(0, R)], J);
let Y = class {
  constructor(var_core_value_sig186C) {
    this._stateService = var_core_value_sig186C;
  }
  beginInkMode(var_core_value_sigD955) {
    return this._stateService["beginInkMode"](var_core_value_sigD955), true;
  }
  cancelInkMode() {
    this._stateService["cancelInkMode"]();
  }
};
Y = U([H(0, R)], Y);
function oe(var_core_value_sig2902) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig2902,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_2_2784",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sigACCB("g", {
      mask: "url(#mask0_2_2784)",
      children: var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_2_2784)",
        children: [var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "53",
          width: "19",
          height: "52",
          fill: "url(#paint0_linear_2_2784)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
          fill: "url(#paint1_linear_2_2784)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
          fill: "url(#paint2_linear_2_2784)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.9701 15.8803C15.7177 14.8704 14.2823 14.8704 14.0299 15.8803L12 23.9998H18L15.9701 15.8803ZM24.5 53.9998H5.5V55.9998H24.5V53.9998Z",
          fill: "#E731AA"
        }), var_core_value_sigACCB("mask", {
          id: "mask1_2_2784",
          style: {
            maskType: "luminance"
          },
          maskUnits: "userSpaceOnUse",
          x: "5",
          y: "15",
          width: "20",
          height: "41",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V55.9998H24.5V53.9998Z",
            fill: "white"
          })
        }), var_core_value_sig7F33("g", {
          mask: "url(#mask1_2_2784)",
          children: [var_core_value_sigACCB("rect", {
            y: "15",
            width: "30",
            height: "47",
            fill: "black"
          }), var_core_value_sigACCB("rect", {
            x: "5.5",
            y: "14.5",
            width: "19",
            height: "47",
            fill: "url(#paint3_linear_2_2784)"
          })]
        })]
      })
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_2_2784",
        x: "-2",
        y: "-2",
        width: "34",
        height: "109",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.251939\x200"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_2_2784"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_2_2784",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_2_2784",
        x1: "24.5",
        y1: "48.1683",
        x2: "5.5",
        y2: "48.1683",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_2_2784",
        x1: "24.5",
        y1: "8.09744",
        x2: "5.5",
        y2: "8.09744",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_2_2784",
        x1: "19.2128",
        y1: "43.4603",
        x2: "22.7082",
        y2: "43.2814",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "white",
          stopOpacity: "0.119892"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopOpacity: "0.249891"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_2_2784",
        x1: "5.5",
        y1: "61.5",
        x2: "24.5",
        y2: "61.5",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopOpacity: "0.102218"
        }), var_core_value_sigACCB("stop", {
          offset: "0.598084",
          stopColor: "white",
          stopOpacity: "0.249973"
        }), var_core_value_sigACCB("stop", {
          offset: "0.68608",
          stopColor: "white",
          stopOpacity: "0.247214"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopOpacity: "0.1"
        })]
      })]
    })]
  });
}
function se(var_core_value_sig9989) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig9989,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1443",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sig7F33("g", {
      mask: "url(#mask0_0_1443)",
      children: [var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_0_1443)",
        children: [var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "52",
          width: "19",
          height: "53",
          fill: "url(#paint0_linear_0_1443)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
          fill: "url(#paint1_linear_0_1443)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
          fill: "url(#paint2_linear_0_1443)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
          fill: "url(#paint3_linear_0_1443)"
        })]
      }), var_core_value_sigACCB("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V58.4998H24.5V53.9998Z",
        fill: "#E731AA"
      }), var_core_value_sigACCB("mask", {
        id: "mask1_0_1443",
        style: {
          maskType: "luminance"
        },
        maskUnits: "userSpaceOnUse",
        x: "5",
        y: "15",
        width: "20",
        height: "44",
        children: var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V58.4998H24.5V53.9998Z",
          fill: "white"
        })
      }), var_core_value_sig7F33("g", {
        mask: "url(#mask1_0_1443)",
        children: [var_core_value_sigACCB("rect", {
          y: "15",
          width: "30",
          height: "47",
          fill: "white"
        }), var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "14.5",
          width: "19",
          height: "47",
          fill: "url(#paint4_linear_0_1443)"
        })]
      })]
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1443",
        x: "3.5",
        y: "13.1742",
        width: "23",
        height: "93.8258",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251939 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1443"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1443",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1443",
        x1: "5.76888",
        y1: "104.625",
        x2: "24.5",
        y2: "104.625",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1443",
        x1: "5.76888",
        y1: "53.7028",
        x2: "24.5",
        y2: "53.7028",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1443",
        x1: "2.8635",
        y1: "59.5457",
        x2: "21.6039",
        y2: "58.5702",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#181A1A",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E",
          stopOpacity: "0.171137"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1443",
        x1: "8.95261",
        y1: "50.5317",
        x2: "23.3094",
        y2: "51.3388",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1443",
        x1: "5.5",
        y1: "61.5",
        x2: "24.5",
        y2: "61.5",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopOpacity: "0.102218"
        }), var_core_value_sigACCB("stop", {
          offset: "0.598084",
          stopColor: "white",
          stopOpacity: "0.249973"
        }), var_core_value_sigACCB("stop", {
          offset: "0.68608",
          stopColor: "white",
          stopOpacity: "0.247214"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopOpacity: "0.1"
        })]
      })]
    })]
  });
}
function ce(var_core_value_sig698E) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "107",
    viewBox: "0 0 30 107",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig698E,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1397",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sigACCB("g", {
      mask: "url(#mask0_0_1397)"
    }), var_core_value_sigACCB("g", {
      filter: "url(#filter0_d_0_1397)",
      children: var_core_value_sig7F33("g", {
        clipPath: "url(#clip0_0_1397)",
        children: [var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "33",
          width: "19",
          height: "72",
          fill: "url(#paint0_linear_0_1397)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
          fill: "url(#paint1_linear_0_1397)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
          fill: "url(#paint2_linear_0_1397)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.5\x2035V47H7.5V35H22.5Z",
          fill: "url(#paint3_linear_0_1397)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.5 35V47H7.5V35H22.5Z",
          fill: "url(#paint4_linear_0_1397)"
        }), var_core_value_sigACCB("g", {
          filter: "url(#filter1_d_0_1397)",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5 33V49H5.5V33H24.5ZM18.7791 37.4645C18.4279 37.1132 17.8752 37.0862 17.493 37.3834L17.4012 37.4645L15.2617 39.6041L13.2129 37.5551C12.8224 37.1646 12.1892 37.1646 11.7987 37.5551C11.4382 37.9156 11.4105 38.4828 11.7155 38.8751L11.7987 38.9693L13.8477 41.0181L11.7081 43.1576C11.3275 43.5381 11.3275 44.155 11.7081 44.5355C12.0593 44.8868 12.612 44.9138 12.9942 44.6166L13.086 44.5355L15.2257 42.3961L17.2743 44.4449C17.6648 44.8354 18.2979 44.8354 18.6885 44.4449C19.049 44.0844 19.0767 43.5172 18.7717 43.1249L18.6885 43.0307L16.6397 40.9821L18.7791 38.8424C19.1596 38.4619 19.1596 37.845 18.7791 37.4645Z",
            fill: "url(#paint5_linear_0_1397)"
          })
        })]
      })
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1397",
        x: "3",
        y: "14",
        width: "24",
        height: "93",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1397"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1397",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter1_d_0_1397",
        x: "5.5",
        y: "33",
        width: "19",
        height: "16.2",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "0.2"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1397"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1397",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1397",
        x1: "5.76888",
        y1: "104.491",
        x2: "24.5",
        y2: "104.491",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1397",
        x1: "24.25",
        y1: "18.1711",
        x2: "5.75",
        y2: "18.1711",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D8918F"
        }), var_core_value_sigACCB("stop", {
          offset: "0.250256",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.486065",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.837945",
          stopColor: "#D9807F"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#DB9191"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1397",
        x1: "14.2826",
        y1: "16",
        x2: "14.2826",
        y2: "18.4818",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D27977"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#525252",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1397",
        x1: "22.5",
        y1: "35.8142",
        x2: "7.5",
        y2: "35.8142",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D8918F"
        }), var_core_value_sigACCB("stop", {
          offset: "0.250256",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.486065",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.837945",
          stopColor: "#D9807F"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#DB9191"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1397",
        x1: "14.4183",
        y1: "35",
        x2: "14.4183",
        y2: "35.9307",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D27977"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#525252",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint5_linear_0_1397",
        x1: "5.76888",
        y1: "48.8868",
        x2: "24.5",
        y2: "48.8868",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sigACCB("clipPath", {
        id: "clip0_0_1397",
        children: var_core_value_sigACCB("rect", {
          width: "20",
          height: "89",
          fill: "white",
          transform: "translate(5 16)"
        })
      })]
    })]
  });
}
function le(var_core_value_sig2809) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig2809,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1425",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sig7F33("g", {
      mask: "url(#mask0_0_1425)",
      children: [var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_0_1425)",
        children: [var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
          fill: "url(#paint0_linear_0_1425)"
        }), var_core_value_sigACCB("mask", {
          id: "mask1_0_1425",
          style: {
            maskType: "luminance"
          },
          maskUnits: "userSpaceOnUse",
          x: "5",
          y: "26",
          width: "20",
          height: "80",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
            fill: "white"
          })
        }), var_core_value_sig7F33("g", {
          mask: "url(#mask1_0_1425)",
          children: [var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9\x2042H21L24.5\x2052H5.5L9\x2042Z",
            fill: "url(#paint1_linear_0_1425)"
          }), var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 42H21L24.5 52H5.5L9 42Z",
            fill: "url(#paint2_linear_0_1425)"
          }), var_core_value_sigACCB("rect", {
            x: "9",
            y: "26.5",
            width: "12",
            height: "15.5",
            fill: "url(#paint3_linear_0_1425)"
          })]
        })]
      }), var_core_value_sigACCB("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.5\x2055V66H5.5V55H24.5ZM19.9636\x2015.5522C19.9876\x2015.6117\x2020\x2015.6753\x2020\x2015.7394V26.5H10V20.9112C9.99998\x2020.8043\x2010.0342\x2020.7003\x2010.0976\x2020.6143C10.7888\x2019.6775\x2011.7563\x2018.8515\x2013\x2018.1364C14.2127\x2017.4391\x2016.3169\x2016.4855\x2019.3127\x2015.2758C19.5687\x2015.1723\x2019.8602\x2015.2961\x2019.9636\x2015.5522Z",
        fill: "#BD10E0"
      }), var_core_value_sigACCB("mask", {
        id: "mask2_0_1425",
        style: {
          maskType: "luminance"
        },
        maskUnits: "userSpaceOnUse",
        x: "5",
        y: "15",
        width: "20",
        height: "51",
        children: var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.5\x2055V66H5.5V55H24.5ZM19.9636\x2015.5522C19.9876\x2015.6117\x2020\x2015.6753\x2020\x2015.7394V26.5H10V20.9112C9.99998\x2020.8043\x2010.0342\x2020.7003\x2010.0976\x2020.6143C10.7888\x2019.6775\x2011.7563\x2018.8515\x2013\x2018.1364C14.2127\x2017.4391\x2016.3169\x2016.4855\x2019.3127\x2015.2758C19.5687\x2015.1723\x2019.8602\x2015.2961\x2019.9636\x2015.5522Z",
          fill: "white"
        })
      }), var_core_value_sig7F33("g", {
        mask: "url(#mask2_0_1425)",
        children: [var_core_value_sigACCB("rect", {
          y: "12",
          width: "30",
          height: "62",
          fill: "#FED031"
        }), var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "14.5",
          width: "19",
          height: "57",
          fill: "url(#paint4_linear_0_1425)"
        })]
      })]
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1425",
        x: "3.5",
        y: "24.5",
        width: "23",
        height: "83",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1425"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1425",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1425",
        x1: "5.76888",
        y1: "104.941",
        x2: "24.5",
        y2: "104.941",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1425",
        x1: "11.7063",
        y1: "55.3071",
        x2: "21.2245",
        y2: "45.6223",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#181A1A",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E",
          stopOpacity: "0.171137"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1425",
        x1: "4.9106",
        y1: "49.089",
        x2: "10.9996",
        y2: "55.8091",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1425",
        x1: "9.16982",
        y1: "41.8903",
        x2: "21",
        y2: "41.8903",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1425",
        x1: "5.5",
        y1: "71.5",
        x2: "24.5",
        y2: "71.5",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopOpacity: "0.102218"
        }), var_core_value_sigACCB("stop", {
          offset: "0.598084",
          stopColor: "white",
          stopOpacity: "0.249973"
        }), var_core_value_sigACCB("stop", {
          offset: "0.68608",
          stopColor: "white",
          stopOpacity: "0.247214"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopOpacity: "0.1"
        })]
      })]
    })]
  });
}
function ue(var_core_value_sig2DAB) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig2DAB,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1451",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sig7F33("g", {
      mask: "url(#mask0_0_1451)",
      children: [var_core_value_sigACCB("mask", {
        id: "mask1_0_1451",
        style: {
          maskType: "luminance"
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: var_core_value_sigACCB("rect", {
          width: "30",
          height: "105",
          fill: "white"
        })
      }), var_core_value_sigACCB("g", {
        mask: "url(#mask1_0_1451)",
        children: var_core_value_sig7F33("g", {
          filter: "url(#filter0_d_0_1451)",
          children: [var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
            fill: "url(#paint0_linear_0_1451)"
          }), var_core_value_sig7F33("g", {
            filter: "url(#filter1_d_0_1451)",
            children: [var_core_value_sigACCB("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
              fill: "url(#paint1_linear_0_1451)"
            }), var_core_value_sigACCB("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.7701\x2024.41H18.0401L21.4601\x2046.07H8.3501L11.7701\x2024.41Z",
              fill: "url(#paint2_linear_0_1451)"
            })]
          }), var_core_value_sig7F33("g", {
            filter: "url(#filter2_d_0_1451)",
            children: [var_core_value_sigACCB("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
              fill: "url(#paint3_linear_0_1451)"
            }), var_core_value_sigACCB("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
              fill: "url(#paint4_linear_0_1451)"
            })]
          })]
        })
      })]
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1451",
        x: "4.5",
        y: "16",
        width: "20.8101",
        height: "89.78",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1451"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1451",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter1_d_0_1451",
        x: "7.3501",
        y: "22.41",
        width: "15.1101",
        height: "23.66",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "-1"
        }), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.747897 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1451"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1451",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter2_d_0_1451",
        x: "4.5",
        y: "44.07",
        width: "20.8101",
        height: "60.71",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "-1"
        }), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.752404 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1451"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1451",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1451",
        x1: "12.3401",
        y1: "28.115",
        x2: "17.4701",
        y2: "28.115",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#353434"
        }), var_core_value_sigACCB("stop", {
          offset: "0.266834",
          stopColor: "#1E2023"
        }), var_core_value_sigACCB("stop", {
          offset: "0.640132",
          stopColor: "#6F6F6F"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#313131"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1451",
        x1: "7.99795",
        y1: "56.9",
        x2: "21.1319",
        y2: "57.327",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#323131"
        }), var_core_value_sigACCB("stop", {
          offset: "0.155077",
          stopColor: "#121213"
        }), var_core_value_sigACCB("stop", {
          offset: "0.584408",
          stopColor: "#6A6B6B"
        }), var_core_value_sigACCB("stop", {
          offset: "0.745733",
          stopColor: "#7A7A7A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.999639",
          stopColor: "#4F4F4F"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1451",
        x1: "19.7616",
        y1: "29.1023",
        x2: "10.2276",
        y2: "29.4576",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#5B5B5B"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0907455",
          stopColor: "#1B1C1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.210116",
          stopColor: "#787878"
        }), var_core_value_sigACCB("stop", {
          offset: "0.375877",
          stopColor: "#EFEFEF",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1451",
        x1: "5.7662",
        y1: "104.365",
        x2: "24.31",
        y2: "104.365",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#2F3132"
        }), var_core_value_sigACCB("stop", {
          offset: "0.0722478",
          stopColor: "#1C1D1E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.195905",
          stopColor: "#181A1A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1451",
        x1: "6.14427",
        y1: "105.528",
        x2: "25.4602",
        y2: "105.286",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#181A1A",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.380181",
          stopColor: "#252627",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.575612",
          stopColor: "#38393A",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.805495",
          stopColor: "#3C3D3E",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.920119",
          stopColor: "#232425"
        }), var_core_value_sigACCB("stop", {
          offset: "0.963934",
          stopColor: "#292A2B"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#2F3031"
        })]
      })]
    })]
  });
}
function de(var_core_value_sig877E) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig877E,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1593",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sigACCB("g", {
      mask: "url(#mask0_0_1593)",
      children: var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_0_1593)",
        children: [var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "33",
          width: "19",
          height: "72",
          fill: "url(#paint0_linear_0_1593)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
          fill: "url(#paint1_linear_0_1593)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
          fill: "url(#paint2_linear_0_1593)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.5 36V46H9.5V36H20.5Z",
          fill: "url(#paint3_linear_0_1593)"
        }), var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.5 36V46H9.5V36H20.5Z",
          fill: "url(#paint4_linear_0_1593)"
        }), var_core_value_sigACCB("g", {
          filter: "url(#filter1_d_0_1593)",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5\x2033H5.5V49H24.5V33ZM18.7791\x2037.4645C19.1596\x2037.845\x2019.1596\x2038.4619\x2018.7791\x2038.8424L16.6397\x2040.9819L18.6885\x2043.0307C19.079\x2043.4212\x2019.079\x2044.0544\x2018.6885\x2044.4449C18.2979\x2044.8354\x2017.6648\x2044.8354\x2017.2743\x2044.4449L15.2255\x2042.3961L13.086\x2044.5355C12.7055\x2044.916\x2012.0886\x2044.916\x2011.7081\x2044.5355C11.3275\x2044.155\x2011.3275\x2043.5381\x2011.7081\x2043.1576L13.8475\x2041.0181L11.7987\x2038.9693C11.4082\x2038.5788\x2011.4082\x2037.9456\x2011.7987\x2037.5551C12.1892\x2037.1646\x2012.8224\x2037.1646\x2013.2129\x2037.5551L15.2617\x2039.6039L17.4012\x2037.4645C17.7817\x2037.084\x2018.3986\x2037.084\x2018.7791\x2037.4645Z",
            fill: "url(#paint5_linear_0_1593)"
          })
        })]
      })
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1593",
        x: "3.5",
        y: "14",
        width: "23",
        height: "93",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1593"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1593",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter1_d_0_1593",
        x: "5.5",
        y: "33",
        width: "19",
        height: "16.2",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "0.2"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1593"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1593",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1593",
        x1: "24.5",
        y1: "26.3099",
        x2: "5.5",
        y2: "26.3099",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1593",
        x1: "24.25",
        y1: "18.1711",
        x2: "5.75",
        y2: "18.1711",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D8918F"
        }), var_core_value_sigACCB("stop", {
          offset: "0.250256",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.486065",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.837945",
          stopColor: "#D9807F"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#DB9191"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1593",
        x1: "14.2826",
        y1: "16",
        x2: "14.2826",
        y2: "18.4818",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D27977"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#525252",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1593",
        x1: "20.5",
        y1: "36.6785",
        x2: "9.5",
        y2: "36.6785",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D8918F"
        }), var_core_value_sigACCB("stop", {
          offset: "0.250256",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.486065",
          stopColor: "#F79E9D"
        }), var_core_value_sigACCB("stop", {
          offset: "0.837945",
          stopColor: "#D9807F"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#DB9191"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1593",
        x1: "14.5734",
        y1: "36",
        x2: "14.5734",
        y2: "36.7756",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#D27977"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#525252",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint5_linear_0_1593",
        x1: "24.5",
        y1: "31.5133",
        x2: "5.5",
        y2: "31.5133",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      })]
    })]
  });
}
function fe(var_core_value_sig20C8) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sig20C8,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1646",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sigACCB("g", {
      mask: "url(#mask0_0_1646)",
      children: var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_0_1646)",
        children: [var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
          fill: "url(#paint0_linear_0_1646)"
        }), var_core_value_sig7F33("g", {
          filter: "url(#filter1_d_0_1646)",
          children: [var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
            fill: "url(#paint1_linear_0_1646)"
          }), var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
            fill: "url(#paint2_linear_0_1646)"
          })]
        }), var_core_value_sigACCB("g", {
          filter: "url(#filter2_d_0_1646)",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
            fill: "url(#paint3_linear_0_1646)"
          })
        })]
      })
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1646",
        x: "4.5",
        y: "16",
        width: "20.8101",
        height: "89.78",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1646"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1646",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter1_d_0_1646",
        x: "7.3501",
        y: "22.41",
        width: "15.1101",
        height: "23.66",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "-1"
        }), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1646"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1646",
          result: "shape"
        })]
      }), var_core_value_sig7F33("filter", {
        id: "filter2_d_0_1646",
        x: "4.5",
        y: "44.07",
        width: "20.8101",
        height: "60.71",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {
          dy: "-1"
        }), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "0.5"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.5\x200"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1646"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1646",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1646",
        x1: "12.3401",
        y1: "28.115",
        x2: "17.4701",
        y2: "28.115",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#C5C4C3"
        }), var_core_value_sigACCB("stop", {
          offset: "0.218117",
          stopColor: "#767B7F"
        }), var_core_value_sigACCB("stop", {
          offset: "0.640132",
          stopColor: "#ECECED"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#BEBFC1"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1646",
        x1: "7.99795",
        y1: "56.9",
        x2: "21.1319",
        y2: "57.327",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#A6A29E"
        }), var_core_value_sigACCB("stop", {
          offset: "0.155077",
          stopColor: "#626567"
        }), var_core_value_sigACCB("stop", {
          offset: "0.584408",
          stopColor: "#DDDEDE"
        }), var_core_value_sigACCB("stop", {
          offset: "0.745733",
          stopColor: "#F0F0F0"
        }), var_core_value_sigACCB("stop", {
          offset: "0.999639",
          stopColor: "#E9E8E8"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1646",
        x1: "19.7616",
        y1: "29.1023",
        x2: "10.2276",
        y2: "29.4576",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#838383",
          stopOpacity: "0.309277"
        }), var_core_value_sigACCB("stop", {
          offset: "0.139436",
          stopColor: "#EDEDED"
        }), var_core_value_sigACCB("stop", {
          offset: "0.469628",
          stopColor: "#EFEFEF",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1646",
        x1: "24.31",
        y1: "40.6148",
        x2: "5.5",
        y2: "40.6148",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.157806",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.447724",
          stopColor: "white"
        }), var_core_value_sigACCB("stop", {
          offset: "0.802592",
          stopColor: "#DFE0DF"
        }), var_core_value_sigACCB("stop", {
          offset: "0.887284",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "white"
        })]
      })]
    })]
  });
}
function pe(var_core_value_sigE9A7) {
  return var_core_value_sig7F33("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...var_core_value_sigE9A7,
    children: [var_core_value_sigACCB("mask", {
      id: "mask0_0_1618",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "30",
      height: "105",
      children: var_core_value_sigACCB("rect", {
        width: "30",
        height: "105",
        fill: "white"
      })
    }), var_core_value_sig7F33("g", {
      mask: "url(#mask0_0_1618)",
      children: [var_core_value_sig7F33("g", {
        filter: "url(#filter0_d_0_1618)",
        children: [var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
          fill: "url(#paint0_linear_0_1618)"
        }), var_core_value_sigACCB("mask", {
          id: "mask1_0_1618",
          style: {
            maskType: "luminance"
          },
          maskUnits: "userSpaceOnUse",
          x: "5",
          y: "26",
          width: "20",
          height: "80",
          children: var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
            fill: "white"
          })
        }), var_core_value_sig7F33("g", {
          mask: "url(#mask1_0_1618)",
          children: [var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 42H21L24.5 52H5.5L9 42Z",
            fill: "#E6E6E6"
          }), var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 42H21L24.5 52H5.5L9 42Z",
            fill: "url(#paint1_linear_0_1618)"
          }), var_core_value_sigACCB("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9\x2042H21L24.5\x2052H5.5L9\x2042Z",
            fill: "url(#paint2_linear_0_1618)"
          }), var_core_value_sigACCB("rect", {
            x: "9",
            y: "26.5",
            width: "12",
            height: "15.5",
            fill: "url(#paint3_linear_0_1618)"
          })]
        })]
      }), var_core_value_sigACCB("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.5 55V60.5H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
        fill: "#BD10E0"
      }), var_core_value_sigACCB("mask", {
        id: "mask2_0_1618",
        style: {
          maskType: "luminance"
        },
        maskUnits: "userSpaceOnUse",
        x: "5",
        y: "15",
        width: "20",
        height: "46",
        children: var_core_value_sigACCB("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.5 55V60.5H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
          fill: "white"
        })
      }), var_core_value_sig7F33("g", {
        mask: "url(#mask2_0_1618)",
        children: [var_core_value_sigACCB("rect", {
          y: "12",
          width: "30",
          height: "62",
          fill: "#FED031"
        }), var_core_value_sigACCB("rect", {
          x: "5.5",
          y: "14.5",
          width: "19",
          height: "57",
          fill: "url(#paint4_linear_0_1618)"
        })]
      })]
    }), var_core_value_sig7F33("defs", {
      children: [var_core_value_sig7F33("filter", {
        id: "filter0_d_0_1618",
        x: "3.5",
        y: "24.5",
        width: "23",
        height: "83",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [var_core_value_sigACCB("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), var_core_value_sigACCB("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), var_core_value_sigACCB("feOffset", {}), var_core_value_sigACCB("feGaussianBlur", {
          stdDeviation: "1"
        }), var_core_value_sigACCB("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_0_1618"
        }), var_core_value_sigACCB("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_0_1618",
          result: "shape"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint0_linear_0_1618",
        x1: "24.5",
        y1: "19.1595",
        x2: "5.5",
        y2: "19.1595",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint1_linear_0_1618",
        x1: "17.978",
        y1: "42.2475",
        x2: "9.24166",
        y2: "51.9337",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4",
          stopOpacity: "0.01"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint2_linear_0_1618",
        x1: "30.295",
        y1: "48.3125",
        x2: "21.1391",
        y2: "36.3384",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.548318",
          stopColor: "#FAF7F7",
          stopOpacity: "0.01"
        }), var_core_value_sigACCB("stop", {
          offset: "0.856298",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.964727",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint3_linear_0_1618",
        x1: "21",
        y1: "25.0598",
        x2: "9",
        y2: "25.0598",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopColor: "#DADADA"
        }), var_core_value_sigACCB("stop", {
          offset: "0.169003",
          stopColor: "#F5F5F5"
        }), var_core_value_sigACCB("stop", {
          offset: "0.445105",
          stopColor: "#FAF7F7"
        }), var_core_value_sigACCB("stop", {
          offset: "0.749878",
          stopColor: "#E1E1E1"
        }), var_core_value_sigACCB("stop", {
          offset: "0.911778",
          stopColor: "#DCDDDC"
        }), var_core_value_sigACCB("stop", {
          offset: "0.973543",
          stopColor: "#E4E4E4"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopColor: "#E4E4E4"
        })]
      }), var_core_value_sig7F33("linearGradient", {
        id: "paint4_linear_0_1618",
        x1: "5.5",
        y1: "71.5",
        x2: "24.5",
        y2: "71.5",
        gradientUnits: "userSpaceOnUse",
        children: [var_core_value_sigACCB("stop", {
          stopOpacity: "0.102218"
        }), var_core_value_sigACCB("stop", {
          offset: "0.598084",
          stopColor: "white",
          stopOpacity: "0.249973"
        }), var_core_value_sigACCB("stop", {
          offset: "0.68608",
          stopColor: "white",
          stopOpacity: "0.247214"
        }), var_core_value_sigACCB("stop", {
          offset: "1",
          stopOpacity: "0.1"
        })]
      })]
    })]
  });
}
const X = [{
    labelKey: "pen",
    tool: "pen",
    icon: fe,
    darkIcon: ue
  }, {
    labelKey: "brush",
    tool: "brush",
    icon: oe,
    darkIcon: se
  }, {
    labelKey: "highlighter",
    tool: "highlighter",
    icon: pe,
    darkIcon: le
  }, {
    labelKey: "eraser",
    tool: "eraser",
    icon: de,
    darkIcon: ce
  }],
  me = {
    pen: "ink-ui.toolbar.pen",
    brush: "ink-ui.toolbar.brush",
    highlighter: "ink-ui.toolbar.highlighter",
    eraser: "ink-ui.toolbar.eraser"
  },
  Z = [{
    value: 2,
    icon: var_core_value_sigA6F6
  }, {
    value: 4,
    icon: var_core_value_sigCDDA
  }, {
    value: 8,
    icon: var_core_value_sigE243
  }, {
    value: 14,
    icon: var_core_value_sig74A8
  }, {
    value: 24,
    icon: var_core_value_sig21B2
  }];
function he(var_core_value_sigBECE) {
  return var_core_value_sigF4C5("univer-group univer-relative univer-h-24 univer-w-12 univer-appearance-none", "univer-border-0 univer-bg-transparent univer-p-0 univer-shadow-none univer-outline-none", var_core_value_sigBECE && "univer-z-10");
}
function ge(var_core_value_sig1B22) {
  return Z.find(var_core_value_sig48BD => var_core_value_sig48BD.value === var_core_value_sig1B22) ?? Z[0];
}
function _e(var_core_value_sig7F72) {
  let var_core_value_sig7B2A = var_core_value_sig7F72.icon;
  return var_core_value_sigACCB("span", {
    "aria-hidden": "true",
    className: "univer-flex univer-h-8 univer-w-8 univer-items-center univer-justify-center univer-text-gray-900 dark:!univer-text-gray-100",
    children: var_core_value_sigACCB(var_core_value_sig7B2A, {
      className: "univer-block\x20univer-size-6"
    })
  });
}
function Q(var_core_value_sig06CD) {
  let var_core_value_sigA5F1 = var_core_value_sig06CD.control !== "close";
  return var_core_value_sigACCB(var_core_value_sig3E68, {
    title: var_core_value_sig06CD.label,
    placement: "top",
    visible: var_core_value_sig06CD.tooltipVisible,
    onVisibleChange: var_core_value_sig06CD.onTooltipVisibleChange,
    asChild: true,
    children: var_core_value_sigACCB("span", {
      className: var_core_value_sigF4C5("univer-flex univer-items-center univer-justify-center", var_core_value_sigA5F1 ? "univer-h-12 univer-w-[72px]" : "univer-h-12 univer-w-10"),
      "data-ink-toolbar-control-tooltip-anchor": "true",
      children: var_core_value_sigACCB(var_core_value_sig34C8, {
        "aria-label": var_core_value_sig06CD.label,
        className: var_core_value_sigF4C5("univer-relative univer-flex univer-items-center univer-justify-center univer-rounded-full univer-border-none univer-bg-transparent univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 hover:univer-text-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800", "univer-h-10", var_core_value_sigA5F1 ? "!univer-w-[72px] !univer-min-w-[72px] !univer-pl-2.5 !univer-pr-2 rtl:!univer-pl-2 rtl:!univer-pr-2.5" : "!univer-w-10\x20!univer-min-w-10\x20!univer-p-0", var_core_value_sig06CD.active ? "univer-bg-gray-100 univer-text-gray-900 dark:!univer-bg-gray-800" : ""),
        "data-ink-toolbar-control": var_core_value_sig06CD.control,
        size: "small",
        type: "button",
        variant: "ghost",
        onMouseDown: var_core_value_sig429F => {
          var_core_value_sig429F.stopPropagation(), var_core_value_sig429F.preventDefault();
        },
        onClick: var_core_value_sig06CD.onClick,
        children: var_core_value_sig06CD.children
      })
    })
  });
}
function ve(var_core_value_sig97A2) {
  let {
      tool: var_core_value_sig07E9,
      color: var_core_value_sig4F59,
      width: var_core_value_sigF564,
      onSelectTool: var_core_value_sig8CFA,
      onSetWidth: var_core_value_sig2E11,
      onSetColor: var_core_value_sig5B69,
      onClose: var_core_value_sigB098
    } = var_core_value_sig97A2,
    var_core_value_sigCE71 = ge(var_core_value_sigF564),
    [var_core_value_sig21D8, var_core_value_sig2B65] = var_core_value_sigDE08(null),
    [var_core_value_sigD7EA, var_core_value_sigB33B] = var_core_value_sigDE08(null),
    var_core_value_sig24B9 = var_core_value_sigF593(var_core_value_sigAD56),
    var_core_value_sigE627 = var_core_value_sig3607(var_core_value_sig24B9.direction$, var_core_value_sig24B9.getDirection());
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig92F5(var_core_value_sigF62A, var_core_value_sig8178) {
    var_core_value_sigB33B(null), var_core_value_sig2B65(var_core_value_sigBC46 => var_core_value_sig8178 ? var_core_value_sigF62A : var_core_value_sigBC46 === var_core_value_sigF62A ? null : var_core_value_sigBC46);
  }
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAD0C(var_core_value_sigE9ED, var_core_value_sigB577) {
    var_core_value_sigB33B(var_core_value_sig3D7D => var_core_value_sigB577 ? var_core_value_sig21D8 === var_core_value_sigE9ED ? null : var_core_value_sigE9ED : var_core_value_sig3D7D === var_core_value_sigE9ED ? null : var_core_value_sig3D7D);
  }
  return var_core_value_sig7F33("div", {
    dir: var_core_value_sigE627,
    className: "univer-fixed univer-bottom-5 univer-left-1/2 univer-z-[100000] univer-flex univer-h-12 univer--translate-x-1/2 univer-items-center univer-gap-3 univer-overflow-visible univer-rounded-full univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-5 univer-pb-0 univer-pt-0 univer-shadow-2xl dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    "data-ink-floating-toolbar": "true",
    children: [var_core_value_sigACCB("div", {
      className: "univer-w-[210px] univer-shrink-0",
      "aria-hidden": "true"
    }), var_core_value_sigACCB("div", {
      className: "univer-absolute univer-bottom-0 univer-left-5 univer-flex univer-h-24 univer-w-[210px] univer-gap-1.5 univer-overflow-hidden rtl:univer-left-auto rtl:univer-right-5",
      children: X.map(var_core_value_sig9572 => {
        let var_core_value_sigD873 = var_core_value_sig9572.icon,
          var_core_value_sigA12B = var_core_value_sig9572.darkIcon,
          var_core_value_sigF230 = var_core_value_sig07E9 === var_core_value_sig9572.tool,
          var_core_value_sig09B8 = var_core_value_sig24B9.t(me[var_core_value_sig9572.labelKey]);
        return var_core_value_sigACCB("div", {
          className: "univer-h-24\x20univer-w-12\x20univer-shrink-0",
          "data-ink-tool-tooltip-anchor": "true",
          children: var_core_value_sigACCB(var_core_value_sig3E68, {
            title: var_core_value_sig09B8,
            placement: "top",
            asChild: true,
            children: var_core_value_sigACCB("button", {
              "aria-label": var_core_value_sig09B8,
              "aria-pressed": var_core_value_sigF230,
              className: he(var_core_value_sigF230),
              type: "button",
              onClick: () => var_core_value_sig8CFA(var_core_value_sig9572.tool),
              children: var_core_value_sig7F33("span", {
                className: var_core_value_sigF4C5("univer-pointer-events-none univer-absolute univer-bottom-0 univer-left-1/2 univer-block univer--translate-x-1/2 univer-transition-transform univer-duration-200 univer-ease-out", var_core_value_sigF230 ? "univer-translate-y-[15px]" : "univer-translate-y-[35px] group-hover:univer-translate-y-[27px]"),
                children: [var_core_value_sigACCB(var_core_value_sigD873, {
                  className: "ink-tool-icon-light univer-block univer-w-auto univer-drop-shadow-lg dark:!univer-hidden"
                }), var_core_value_sigACCB(var_core_value_sigA12B, {
                  className: "ink-tool-icon-dark univer-hidden univer-w-auto univer-drop-shadow-lg dark:!univer-block"
                })]
              })
            })
          })
        }, var_core_value_sig9572.tool);
      })
    }), var_core_value_sigACCB(var_core_value_sigE68A, {
      orientation: "vertical"
    }), var_core_value_sig7F33("div", {
      className: "univer-flex univer-h-10 univer-items-center univer-gap-3",
      children: [var_core_value_sigACCB(var_core_value_sigEAE2, {
        open: var_core_value_sig21D8 === "width",
        className: "univer-z-[100001]",
        "data-ink-floating-toolbar-popup": "true",
        onOpenChange: var_core_value_sig6F91 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig92F5("width", var_core_value_sig6F91),
        overlay: var_core_value_sigACCB(var_core_value_sigF2E6, {
          className: "univer-w-auto\x20!univer-p-2",
          minWidthClassName: "univer-min-w-0",
          children: var_core_value_sigACCB("div", {
            className: "univer-flex univer-items-center univer-gap-2",
            children: Z.map(var_core_value_sigF9C7 => {
              let var_core_value_sig8895 = var_core_value_sigF9C7.icon,
                var_core_value_sigC80B = var_core_value_sigF9C7.value === var_core_value_sigF564;
              return var_core_value_sigACCB(var_core_value_sig34C8, {
                "aria-label": var_core_value_sig24B9.t("ink-ui.toolbar.widthValue", String(var_core_value_sigF9C7.value)),
                "aria-pressed": var_core_value_sigC80B,
                className: var_core_value_sigF4C5("univer-rounded-md univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800", var_core_value_sigC80B ? "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-800" : ""),
                size: "icon",
                type: "button",
                variant: "ghost",
                onClick: () => {
                  var_core_value_sig2E11(var_core_value_sigF9C7.value), var_core_value_sig2B65(null);
                },
                children: var_core_value_sigACCB(var_core_value_sig8895, {})
              }, var_core_value_sigF9C7.value);
            })
          })
        }),
        children: var_core_value_sigACCB("span", {
          className: "univer-flex\x20univer-h-12\x20univer-items-center",
          children: var_core_value_sig7F33(Q, {
            label: var_core_value_sig24B9.t("ink-ui.toolbar.widthSelector"),
            control: "width",
            tooltipVisible: var_core_value_sig21D8 !== "width" && var_core_value_sigD7EA === "width",
            onTooltipVisibleChange: var_core_value_sig284F => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAD0C("width", var_core_value_sig284F),
            children: [var_core_value_sigACCB(_e, {
              icon: var_core_value_sigCE71.icon
            }), var_core_value_sigACCB(var_core_value_sig8EA0, {})]
          })
        })
      }), var_core_value_sigACCB(var_core_value_sigEAE2, {
        open: var_core_value_sig21D8 === "color",
        className: var_core_value_sigF4C5("univer-rounded-lg univer-p-3 !univer-shadow-none", "univer-z-[100001]"),
        "data-ink-floating-toolbar-popup": "true",
        onOpenChange: var_core_value_sigE154 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig92F5("color", var_core_value_sigE154),
        overlay: var_core_value_sigACCB("div", {
          className: "univer-w-[244px]",
          dir: var_core_value_sigE627,
          children: var_core_value_sigACCB(var_core_value_sigB744, {
            value: var_core_value_sig4F59,
            onChange: var_core_value_sig5B69
          })
        }),
        children: var_core_value_sigACCB("span", {
          className: "univer-flex univer-h-12 univer-items-center",
          children: var_core_value_sig7F33(Q, {
            label: var_core_value_sig24B9.t("ink-ui.toolbar.colorPicker"),
            control: "color",
            tooltipVisible: var_core_value_sig21D8 !== "color" && var_core_value_sigD7EA === "color",
            onTooltipVisibleChange: var_core_value_sig4632 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAD0C("color", var_core_value_sig4632),
            children: [var_core_value_sigACCB(var_core_value_sig492F, {
              className: "univer-block univer-size-[30px] univer-rounded-full"
            }), var_core_value_sigACCB(var_core_value_sig8EA0, {})]
          })
        })
      })]
    }), var_core_value_sigACCB("div", {
      className: "univer-flex univer-h-12 univer-items-center",
      children: var_core_value_sigACCB(Q, {
        label: var_core_value_sig24B9.t("ink-ui.toolbar.exitInkMode"),
        control: "close",
        tooltipVisible: var_core_value_sigD7EA === "close",
        onTooltipVisibleChange: var_core_value_sig12F2 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAD0C("close", var_core_value_sig12F2),
        onClick: var_core_value_sigB098,
        children: var_core_value_sigACCB(var_core_value_sig5410, {
          className: "univer-size-5",
          "aria-hidden": "true"
        })
      })
    })]
  });
}
function ye() {
  let var_core_value_sig9A0D = var_core_value_sigF593(R),
    var_core_value_sigA319 = var_core_value_sig3607(() => var_core_value_sig9A0D.state$, var_core_value_sig9A0D.getState(), false, [var_core_value_sig9A0D]);
  return var_core_value_sigA319.toolbarVisible ? var_core_value_sigACCB(ve, {
    color: var_core_value_sigA319.color,
    tool: var_core_value_sigA319.tool,
    width: var_core_value_sigA319.width,
    onClose: () => var_core_value_sig9A0D.cancelInkMode(),
    onSetColor: var_core_value_sig2259 => var_core_value_sig9A0D.setColor(var_core_value_sig2259),
    onSetWidth: var_core_value_sig9E2F => var_core_value_sig9A0D.setWidth(var_core_value_sig9E2F),
    onSelectTool: var_core_value_sigD082 => var_core_value_sig9A0D.selectTool(var_core_value_sigD082)
  }) : null;
}
let $ = class extends var_core_value_sigDB4A {
  constructor(var_core_value_sigDBB7 = F, var_core_value_sigD0A8, var_core_value_sigF4B9, var_core_value_sig5CEE) {
    super(), this._config = var_core_value_sigDBB7, this._injector = var_core_value_sigD0A8, this._uiPartsService = var_core_value_sigF4B9, this._configService = var_core_value_sig5CEE;
    let {
      ...var_core_value_sigE92A
    } = var_core_value_sig0285({}, F, this._config);
    this._configService["setConfig"]("ink-ui.config", var_core_value_sigE92A);
  }
  onStarting() {
    [[Y], [R, {
      useClass: V
    }], [W, {
      useClass: J
    }]].forEach(var_core_value_sig27E5 => this._injector["add"](var_core_value_sig27E5)), this.disposeWithMe(this._uiPartsService["registerComponent"](var_core_value_sig3F4C.CONTENT, () => var_core_value_sig5A13(ye, this._injector)));
  }
};
L($, "pluginName", "UNIVER_INK_UI_PLUGIN"), L($, "packageName", N), L($, "version", P), L($, "type", var_core_value_sig6418.UNIVER_UNKNOWN), $ = U([var_core_value_sigD749(var_core_value_sig223F, var_core_value_sig2D58), H(1, var_core_value_sig5090(var_core_value_sigC368)), H(2, var_core_value_sigD65A), H(3, var_core_value_sig58C1)], $);
export { W as IInkOutsideInteractionService, R as IInkUIStateService, Y as InkUIService, V as InkUIStateService, $ as UniverInkUIPlugin };
