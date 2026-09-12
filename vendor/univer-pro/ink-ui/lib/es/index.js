import { UniverInkPlugin as _0x58a651 } from "@univerjs-pro/ink";
import { UniverLicensePlugin as _0x563a48 } from "@univerjs-pro/license";
import {
  DependentOn as _0x39c76f,
  Disposable as _0x3f6723,
  IConfigService as _0xa8c4c7,
  Inject as _0x311cd8,
  Injector as _0x462574,
  LocaleService as _0x16fd49,
  Plugin as _0x331b24,
  UniverInstanceType as _0x2f303f,
  createIdentifier as _0x3064eb,
  merge as _0x1ded76,
  toDisposable as _0x7acf46,
} from "@univerjs/core";
import {
  BuiltInUIPart as _0x182d9c,
  IUIPartsService as _0x10e1e3,
  connectInjector as _0x12b14d,
  useDependency as _0x59f693,
  useObservable as _0x595d16,
} from "@univerjs/ui";
import { BehaviorSubject as _0x29a1a1 } from "rxjs";
import { ShapeFloatingToolbarMenuPanel as _0x5b3a88 } from "@univerjs-pro/shape-editor-ui";
import {
  Button as _0x4fe125,
  ColorPicker as _0x47d5bd,
  Dropdown as _0x4ddbcd,
  Separator as _0x15b4d2,
  Tooltip as _0x336bf3,
  clsx as _0x130f86,
} from "@univerjs/design";
import {
  CloseIcon as _0x12fab0,
  ColorWheelMultiIcon as _0x2f2153,
  MoreDownIcon as _0x1868e7,
  StrokeSize1Icon as _0x487a5b,
  StrokeSize2Icon as _0x1cecc4,
  StrokeSize3Icon as _0x862e43,
  StrokeSize4Icon as _0x3d3294,
  StrokeSize5Icon as _0x211e29,
} from "@univerjs/icons";
import { useState as _0x188080 } from "react";
import { jsx as _0x40cf68, jsxs as _0x4a12e1 } from "react/jsx-runtime";
var N = "@univerjs-pro/ink-ui",
  P = "1.0.0-insiders.20260907-70fc579";
const F = {};
function I(_0x1078cc) {
  "@babel/helpers - typeof";
  return (
    (I =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x389634) {
            return typeof _0x389634;
          }
        : function (_0x3f3282) {
            return _0x3f3282 &&
              typeof Symbol == "function" &&
              _0x3f3282.constructor === Symbol &&
              _0x3f3282 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3f3282;
          }),
    I(_0x1078cc)
  );
}
function ie(_0x26d03e, _0x376e90) {
  if (I(_0x26d03e) != "object" || !_0x26d03e) return _0x26d03e;
  var _0x1b67ea = _0x26d03e[Symbol.toPrimitive];
  if (_0x1b67ea !== undefined) {
    var _0xae7340 = _0x1b67ea.call(_0x26d03e, _0x376e90 || "default");
    if (I(_0xae7340) != "object") return _0xae7340;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x376e90 === "string" ? String : Number)(_0x26d03e);
}
function ae(_0x54b4f6) {
  var _0x189ec2 = ie(_0x54b4f6, "string");
  return I(_0x189ec2) == "symbol" ? _0x189ec2 : _0x189ec2 + "";
}
function L(_0x9e2428, _0x3b0d7c, _0xf50ab8) {
  return (
    (_0x3b0d7c = ae(_0x3b0d7c)) in _0x9e2428
      ? Object.defineProperty(_0x9e2428, _0x3b0d7c, {
          value: _0xf50ab8,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x9e2428[_0x3b0d7c] = _0xf50ab8),
    _0x9e2428
  );
}
const R = _0x3064eb("ink-ui.state.service"),
  z = {
    pen: { color: "#f54a45", width: 2, opacity: 1 },
    brush: { color: "#f54a45", width: 4, opacity: 1 },
    highlighter: { color: "#ffe928", width: 14, opacity: 0.45 },
    eraser: { color: "#ffffff", width: 24, opacity: 1 },
  };
function B(_0x21ccea) {
  return _0x21ccea === "brush" ||
    _0x21ccea === "highlighter" ||
    _0x21ccea === "eraser"
    ? _0x21ccea
    : "pen";
}
var V = class extends _0x3f6723 {
  constructor(..._0x54938b) {
    (super(..._0x54938b),
      L(
        this,
        "_state$",
        new _0x29a1a1({
          active: false,
          toolbarVisible: false,
          tool: "pen",
          ...z.pen,
          session: null,
        }),
      ),
      L(this, "state$", this._state$["asObservable"]()));
  }
  dispose() {
    (this._state$["complete"](), super.dispose());
  }
  getState() {
    return this._state$["getValue"]();
  }
  beginInkMode(_0x5c8bf2) {
    let _0x2cddb1 = B(_0x5c8bf2.tool);
    this._state$["next"]({
      ...this.getState(),
      ...z[_0x2cddb1],
      active: true,
      toolbarVisible: true,
      tool: _0x2cddb1,
      session: { unitId: _0x5c8bf2.unitId, subUnitId: _0x5c8bf2.subUnitId },
    });
  }
  cancelInkMode() {
    this._state$["next"]({
      ...this.getState(),
      active: false,
      toolbarVisible: false,
      session: null,
    });
  }
  selectTool(_0x181ae5) {
    this._state$["next"]({
      ...this.getState(),
      ...z[_0x181ae5],
      tool: _0x181ae5,
    });
  }
  setWidth(_0x28cee1) {
    !Number.isFinite(_0x28cee1) ||
      _0x28cee1 <= 0 ||
      this._state$["next"]({ ...this.getState(), width: _0x28cee1 });
  }
  setColor(_0x1d2a07) {
    _0x1d2a07 && this._state$["next"]({ ...this.getState(), color: _0x1d2a07 });
  }
};
function H(_0xb464ca, _0x8794de) {
  return function (_0x506b1d, _0x163766) {
    _0x8794de(_0x506b1d, _0x163766, _0xb464ca);
  };
}
function U(_0xa4c799, _0x5a5bdd, _0x15940b, _0x89b6a4) {
  var _0xb2f80f = arguments.length,
    _0xb6503 =
      _0xb2f80f < 3
        ? _0x5a5bdd
        : _0x89b6a4 === null
          ? (_0x89b6a4 = Object.getOwnPropertyDescriptor(_0x5a5bdd, _0x15940b))
          : _0x89b6a4,
    _0x19c2e3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xb6503 = Reflect.decorate(_0xa4c799, _0x5a5bdd, _0x15940b, _0x89b6a4);
  else {
    for (var _0x4e86d7 = _0xa4c799.length - 1; _0x4e86d7 >= 0; _0x4e86d7--)
      (_0x19c2e3 = _0xa4c799[_0x4e86d7]) &&
        (_0xb6503 =
          (_0xb2f80f < 3
            ? _0x19c2e3(_0xb6503)
            : _0xb2f80f > 3
              ? _0x19c2e3(_0x5a5bdd, _0x15940b, _0xb6503)
              : _0x19c2e3(_0x5a5bdd, _0x15940b)) || _0xb6503);
  }
  return (
    _0xb2f80f > 3 &&
      _0xb6503 &&
      Object.defineProperty(_0x5a5bdd, _0x15940b, _0xb6503),
    _0xb6503
  );
}
const W = _0x3064eb("ink-ui.outside-interaction.service"),
  G = [
    "[data-ink-floating-toolbar=\x22true\x22]",
    '[data-ink-floating-toolbar-popup="true"]',
    '[data-ink-interactive-region="true"]',
  ];
function K(_0x32c9f5, _0x27f035) {
  return _0x32c9f5.some(
    (_0x163adf) =>
      _0x163adf === _0x27f035 ||
      (_0x163adf instanceof Node && _0x27f035.contains(_0x163adf)),
  );
}
function q(_0x211b26, _0x2878d1) {
  return _0x211b26.some(
    (_0x51a330) =>
      _0x51a330 instanceof Element && !!_0x51a330.closest(_0x2878d1),
  );
}
let J = class extends _0x3f6723 {
  constructor(_0x579f46) {
    if (
      (super(),
      (this._stateService = _0x579f46),
      L(this, "_interactiveRegions", new Set()),
      typeof window < "u")
    ) {
      let _0x21afc3 = (_0x634168) => this._handlePointerDown(_0x634168);
      (window.addEventListener("pointerdown", _0x21afc3, { capture: true }),
        this.disposeWithMe(
          _0x7acf46(() =>
            window.removeEventListener("pointerdown", _0x21afc3, {
              capture: true,
            }),
          ),
        ));
    }
  }
  registerInteractiveRegion(_0xdfe991) {
    return (
      (_0xdfe991.dataset["inkInteractiveRegion"] = "true"),
      this._interactiveRegions["add"](_0xdfe991),
      _0x7acf46(() => {
        (this._interactiveRegions["delete"](_0xdfe991),
          _0xdfe991.dataset["inkInteractiveRegion"] === "true" &&
            delete _0xdfe991.dataset["inkInteractiveRegion"]);
      })
    );
  }
  _handlePointerDown(_0x2b9cb2) {
    if (!this._stateService["getState"]().active) return;
    let _0x15714e =
      typeof _0x2b9cb2.composedPath == "function"
        ? _0x2b9cb2.composedPath()
        : _0x2b9cb2.target
          ? [_0x2b9cb2.target]
          : [];
    if (!G.some((_0x385143) => q(_0x15714e, _0x385143))) {
      for (let _0x2d6529 of this._interactiveRegions)
        if (K(_0x15714e, _0x2d6529)) return;
      this._stateService["cancelInkMode"]();
    }
  }
};
J = U([H(0, R)], J);
let Y = class {
  constructor(_0x56152a) {
    this._stateService = _0x56152a;
  }
  beginInkMode(_0xde31d8) {
    return (this._stateService["beginInkMode"](_0xde31d8), true);
  }
  cancelInkMode() {
    this._stateService["cancelInkMode"]();
  }
};
Y = U([H(0, R)], Y);
function oe(_0x1368c8) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x1368c8,
    children: [
      _0x40cf68("mask", {
        id: "mask0_2_2784",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x40cf68("g", {
        mask: "url(#mask0_2_2784)",
        children: _0x4a12e1("g", {
          filter: "url(#filter0_d_2_2784)",
          children: [
            _0x40cf68("rect", {
              x: "5.5",
              y: "53",
              width: "19",
              height: "52",
              fill: "url(#paint0_linear_2_2784)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
              fill: "url(#paint1_linear_2_2784)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
              fill: "url(#paint2_linear_2_2784)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.9701 15.8803C15.7177 14.8704 14.2823 14.8704 14.0299 15.8803L12 23.9998H18L15.9701 15.8803ZM24.5 53.9998H5.5V55.9998H24.5V53.9998Z",
              fill: "#E731AA",
            }),
            _0x40cf68("mask", {
              id: "mask1_2_2784",
              style: { maskType: "luminance" },
              maskUnits: "userSpaceOnUse",
              x: "5",
              y: "15",
              width: "20",
              height: "41",
              children: _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V55.9998H24.5V53.9998Z",
                fill: "white",
              }),
            }),
            _0x4a12e1("g", {
              mask: "url(#mask1_2_2784)",
              children: [
                _0x40cf68("rect", {
                  y: "15",
                  width: "30",
                  height: "47",
                  fill: "black",
                }),
                _0x40cf68("rect", {
                  x: "5.5",
                  y: "14.5",
                  width: "19",
                  height: "47",
                  fill: "url(#paint3_linear_2_2784)",
                }),
              ],
            }),
          ],
        }),
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_2_2784",
            x: "-2",
            y: "-2",
            width: "34",
            height: "109",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.251939\x200",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_2_2784",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_2_2784",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_2_2784",
            x1: "24.5",
            y1: "48.1683",
            x2: "5.5",
            y2: "48.1683",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_2_2784",
            x1: "24.5",
            y1: "8.09744",
            x2: "5.5",
            y2: "8.09744",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_2_2784",
            x1: "19.2128",
            y1: "43.4603",
            x2: "22.7082",
            y2: "43.2814",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", {
                stopColor: "white",
                stopOpacity: "0.119892",
              }),
              _0x40cf68("stop", { offset: "1", stopOpacity: "0.249891" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_2_2784",
            x1: "5.5",
            y1: "61.5",
            x2: "24.5",
            y2: "61.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopOpacity: "0.102218" }),
              _0x40cf68("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              _0x40cf68("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              _0x40cf68("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function se(_0x2b4ef4) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x2b4ef4,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1443",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x4a12e1("g", {
        mask: "url(#mask0_0_1443)",
        children: [
          _0x4a12e1("g", {
            filter: "url(#filter0_d_0_1443)",
            children: [
              _0x40cf68("rect", {
                x: "5.5",
                y: "52",
                width: "19",
                height: "53",
                fill: "url(#paint0_linear_0_1443)",
              }),
              _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint1_linear_0_1443)",
              }),
              _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint2_linear_0_1443)",
              }),
              _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint3_linear_0_1443)",
              }),
            ],
          }),
          _0x40cf68("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V58.4998H24.5V53.9998Z",
            fill: "#E731AA",
          }),
          _0x40cf68("mask", {
            id: "mask1_0_1443",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "44",
            children: _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V58.4998H24.5V53.9998Z",
              fill: "white",
            }),
          }),
          _0x4a12e1("g", {
            mask: "url(#mask1_0_1443)",
            children: [
              _0x40cf68("rect", {
                y: "15",
                width: "30",
                height: "47",
                fill: "white",
              }),
              _0x40cf68("rect", {
                x: "5.5",
                y: "14.5",
                width: "19",
                height: "47",
                fill: "url(#paint4_linear_0_1443)",
              }),
            ],
          }),
        ],
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1443",
            x: "3.5",
            y: "13.1742",
            width: "23",
            height: "93.8258",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251939 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1443",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1443",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1443",
            x1: "5.76888",
            y1: "104.625",
            x2: "24.5",
            y2: "104.625",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1443",
            x1: "5.76888",
            y1: "53.7028",
            x2: "24.5",
            y2: "53.7028",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1443",
            x1: "2.8635",
            y1: "59.5457",
            x2: "21.6039",
            y2: "58.5702",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              _0x40cf68("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.171137",
              }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1443",
            x1: "8.95261",
            y1: "50.5317",
            x2: "23.3094",
            y2: "51.3388",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#2F3031",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1443",
            x1: "5.5",
            y1: "61.5",
            x2: "24.5",
            y2: "61.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopOpacity: "0.102218" }),
              _0x40cf68("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              _0x40cf68("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              _0x40cf68("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ce(_0x23da33) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "107",
    viewBox: "0 0 30 107",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x23da33,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1397",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x40cf68("g", { mask: "url(#mask0_0_1397)" }),
      _0x40cf68("g", {
        filter: "url(#filter0_d_0_1397)",
        children: _0x4a12e1("g", {
          clipPath: "url(#clip0_0_1397)",
          children: [
            _0x40cf68("rect", {
              x: "5.5",
              y: "33",
              width: "19",
              height: "72",
              fill: "url(#paint0_linear_0_1397)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint1_linear_0_1397)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint2_linear_0_1397)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22.5\x2035V47H7.5V35H22.5Z",
              fill: "url(#paint3_linear_0_1397)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22.5 35V47H7.5V35H22.5Z",
              fill: "url(#paint4_linear_0_1397)",
            }),
            _0x40cf68("g", {
              filter: "url(#filter1_d_0_1397)",
              children: _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.5 33V49H5.5V33H24.5ZM18.7791 37.4645C18.4279 37.1132 17.8752 37.0862 17.493 37.3834L17.4012 37.4645L15.2617 39.6041L13.2129 37.5551C12.8224 37.1646 12.1892 37.1646 11.7987 37.5551C11.4382 37.9156 11.4105 38.4828 11.7155 38.8751L11.7987 38.9693L13.8477 41.0181L11.7081 43.1576C11.3275 43.5381 11.3275 44.155 11.7081 44.5355C12.0593 44.8868 12.612 44.9138 12.9942 44.6166L13.086 44.5355L15.2257 42.3961L17.2743 44.4449C17.6648 44.8354 18.2979 44.8354 18.6885 44.4449C19.049 44.0844 19.0767 43.5172 18.7717 43.1249L18.6885 43.0307L16.6397 40.9821L18.7791 38.8424C19.1596 38.4619 19.1596 37.845 18.7791 37.4645Z",
                fill: "url(#paint5_linear_0_1397)",
              }),
            }),
          ],
        }),
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1397",
            x: "3",
            y: "14",
            width: "24",
            height: "93",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1397",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1397",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter1_d_0_1397",
            x: "5.5",
            y: "33",
            width: "19",
            height: "16.2",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "0.2" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1397",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1397",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1397",
            x1: "5.76888",
            y1: "104.491",
            x2: "24.5",
            y2: "104.491",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1397",
            x1: "24.25",
            y1: "18.1711",
            x2: "5.75",
            y2: "18.1711",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D8918F" }),
              _0x40cf68("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1397",
            x1: "14.2826",
            y1: "16",
            x2: "14.2826",
            y2: "18.4818",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D27977" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1397",
            x1: "22.5",
            y1: "35.8142",
            x2: "7.5",
            y2: "35.8142",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D8918F" }),
              _0x40cf68("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1397",
            x1: "14.4183",
            y1: "35",
            x2: "14.4183",
            y2: "35.9307",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D27977" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint5_linear_0_1397",
            x1: "5.76888",
            y1: "48.8868",
            x2: "24.5",
            y2: "48.8868",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x40cf68("clipPath", {
            id: "clip0_0_1397",
            children: _0x40cf68("rect", {
              width: "20",
              height: "89",
              fill: "white",
              transform: "translate(5 16)",
            }),
          }),
        ],
      }),
    ],
  });
}
function le(_0x417114) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x417114,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1425",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x4a12e1("g", {
        mask: "url(#mask0_0_1425)",
        children: [
          _0x4a12e1("g", {
            filter: "url(#filter0_d_0_1425)",
            children: [
              _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                fill: "url(#paint0_linear_0_1425)",
              }),
              _0x40cf68("mask", {
                id: "mask1_0_1425",
                style: { maskType: "luminance" },
                maskUnits: "userSpaceOnUse",
                x: "5",
                y: "26",
                width: "20",
                height: "80",
                children: _0x40cf68("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                  fill: "white",
                }),
              }),
              _0x4a12e1("g", {
                mask: "url(#mask1_0_1425)",
                children: [
                  _0x40cf68("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9\x2042H21L24.5\x2052H5.5L9\x2042Z",
                    fill: "url(#paint1_linear_0_1425)",
                  }),
                  _0x40cf68("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "url(#paint2_linear_0_1425)",
                  }),
                  _0x40cf68("rect", {
                    x: "9",
                    y: "26.5",
                    width: "12",
                    height: "15.5",
                    fill: "url(#paint3_linear_0_1425)",
                  }),
                ],
              }),
            ],
          }),
          _0x40cf68("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5\x2055V66H5.5V55H24.5ZM19.9636\x2015.5522C19.9876\x2015.6117\x2020\x2015.6753\x2020\x2015.7394V26.5H10V20.9112C9.99998\x2020.8043\x2010.0342\x2020.7003\x2010.0976\x2020.6143C10.7888\x2019.6775\x2011.7563\x2018.8515\x2013\x2018.1364C14.2127\x2017.4391\x2016.3169\x2016.4855\x2019.3127\x2015.2758C19.5687\x2015.1723\x2019.8602\x2015.2961\x2019.9636\x2015.5522Z",
            fill: "#BD10E0",
          }),
          _0x40cf68("mask", {
            id: "mask2_0_1425",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "51",
            children: _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.5\x2055V66H5.5V55H24.5ZM19.9636\x2015.5522C19.9876\x2015.6117\x2020\x2015.6753\x2020\x2015.7394V26.5H10V20.9112C9.99998\x2020.8043\x2010.0342\x2020.7003\x2010.0976\x2020.6143C10.7888\x2019.6775\x2011.7563\x2018.8515\x2013\x2018.1364C14.2127\x2017.4391\x2016.3169\x2016.4855\x2019.3127\x2015.2758C19.5687\x2015.1723\x2019.8602\x2015.2961\x2019.9636\x2015.5522Z",
              fill: "white",
            }),
          }),
          _0x4a12e1("g", {
            mask: "url(#mask2_0_1425)",
            children: [
              _0x40cf68("rect", {
                y: "12",
                width: "30",
                height: "62",
                fill: "#FED031",
              }),
              _0x40cf68("rect", {
                x: "5.5",
                y: "14.5",
                width: "19",
                height: "57",
                fill: "url(#paint4_linear_0_1425)",
              }),
            ],
          }),
        ],
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1425",
            x: "3.5",
            y: "24.5",
            width: "23",
            height: "83",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1425",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1425",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1425",
            x1: "5.76888",
            y1: "104.941",
            x2: "24.5",
            y2: "104.941",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1425",
            x1: "11.7063",
            y1: "55.3071",
            x2: "21.2245",
            y2: "45.6223",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              _0x40cf68("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.171137",
              }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1425",
            x1: "4.9106",
            y1: "49.089",
            x2: "10.9996",
            y2: "55.8091",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#2F3031",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1425",
            x1: "9.16982",
            y1: "41.8903",
            x2: "21",
            y2: "41.8903",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1425",
            x1: "5.5",
            y1: "71.5",
            x2: "24.5",
            y2: "71.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopOpacity: "0.102218" }),
              _0x40cf68("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              _0x40cf68("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              _0x40cf68("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ue(_0x32f2a6) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x32f2a6,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1451",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x4a12e1("g", {
        mask: "url(#mask0_0_1451)",
        children: [
          _0x40cf68("mask", {
            id: "mask1_0_1451",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "30",
            height: "105",
            children: _0x40cf68("rect", {
              width: "30",
              height: "105",
              fill: "white",
            }),
          }),
          _0x40cf68("g", {
            mask: "url(#mask1_0_1451)",
            children: _0x4a12e1("g", {
              filter: "url(#filter0_d_0_1451)",
              children: [
                _0x40cf68("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
                  fill: "url(#paint0_linear_0_1451)",
                }),
                _0x4a12e1("g", {
                  filter: "url(#filter1_d_0_1451)",
                  children: [
                    _0x40cf68("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                      fill: "url(#paint1_linear_0_1451)",
                    }),
                    _0x40cf68("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.7701\x2024.41H18.0401L21.4601\x2046.07H8.3501L11.7701\x2024.41Z",
                      fill: "url(#paint2_linear_0_1451)",
                    }),
                  ],
                }),
                _0x4a12e1("g", {
                  filter: "url(#filter2_d_0_1451)",
                  children: [
                    _0x40cf68("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
                      fill: "url(#paint3_linear_0_1451)",
                    }),
                    _0x40cf68("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
                      fill: "url(#paint4_linear_0_1451)",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1451",
            x: "4.5",
            y: "16",
            width: "20.8101",
            height: "89.78",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter1_d_0_1451",
            x: "7.3501",
            y: "22.41",
            width: "15.1101",
            height: "23.66",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "-1" }),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.747897 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter2_d_0_1451",
            x: "4.5",
            y: "44.07",
            width: "20.8101",
            height: "60.71",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "-1" }),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.752404 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1451",
            x1: "12.3401",
            y1: "28.115",
            x2: "17.4701",
            y2: "28.115",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#353434" }),
              _0x40cf68("stop", { offset: "0.266834", stopColor: "#1E2023" }),
              _0x40cf68("stop", { offset: "0.640132", stopColor: "#6F6F6F" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#313131" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1451",
            x1: "7.99795",
            y1: "56.9",
            x2: "21.1319",
            y2: "57.327",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#323131" }),
              _0x40cf68("stop", { offset: "0.155077", stopColor: "#121213" }),
              _0x40cf68("stop", { offset: "0.584408", stopColor: "#6A6B6B" }),
              _0x40cf68("stop", { offset: "0.745733", stopColor: "#7A7A7A" }),
              _0x40cf68("stop", { offset: "0.999639", stopColor: "#4F4F4F" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1451",
            x1: "19.7616",
            y1: "29.1023",
            x2: "10.2276",
            y2: "29.4576",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#5B5B5B" }),
              _0x40cf68("stop", { offset: "0.0907455", stopColor: "#1B1C1E" }),
              _0x40cf68("stop", { offset: "0.210116", stopColor: "#787878" }),
              _0x40cf68("stop", {
                offset: "0.375877",
                stopColor: "#EFEFEF",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1451",
            x1: "5.7662",
            y1: "104.365",
            x2: "24.31",
            y2: "104.365",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#2F3132" }),
              _0x40cf68("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              _0x40cf68("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              _0x40cf68("stop", { offset: "0.380181", stopColor: "#252627" }),
              _0x40cf68("stop", { offset: "0.575612", stopColor: "#38393A" }),
              _0x40cf68("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1451",
            x1: "6.14427",
            y1: "105.528",
            x2: "25.4602",
            y2: "105.286",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              _0x40cf68("stop", {
                offset: "0.380181",
                stopColor: "#252627",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "0.575612",
                stopColor: "#38393A",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", { offset: "0.920119", stopColor: "#232425" }),
              _0x40cf68("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function de(_0x2c465d) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x2c465d,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1593",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x40cf68("g", {
        mask: "url(#mask0_0_1593)",
        children: _0x4a12e1("g", {
          filter: "url(#filter0_d_0_1593)",
          children: [
            _0x40cf68("rect", {
              x: "5.5",
              y: "33",
              width: "19",
              height: "72",
              fill: "url(#paint0_linear_0_1593)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint1_linear_0_1593)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint2_linear_0_1593)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.5 36V46H9.5V36H20.5Z",
              fill: "url(#paint3_linear_0_1593)",
            }),
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.5 36V46H9.5V36H20.5Z",
              fill: "url(#paint4_linear_0_1593)",
            }),
            _0x40cf68("g", {
              filter: "url(#filter1_d_0_1593)",
              children: _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.5\x2033H5.5V49H24.5V33ZM18.7791\x2037.4645C19.1596\x2037.845\x2019.1596\x2038.4619\x2018.7791\x2038.8424L16.6397\x2040.9819L18.6885\x2043.0307C19.079\x2043.4212\x2019.079\x2044.0544\x2018.6885\x2044.4449C18.2979\x2044.8354\x2017.6648\x2044.8354\x2017.2743\x2044.4449L15.2255\x2042.3961L13.086\x2044.5355C12.7055\x2044.916\x2012.0886\x2044.916\x2011.7081\x2044.5355C11.3275\x2044.155\x2011.3275\x2043.5381\x2011.7081\x2043.1576L13.8475\x2041.0181L11.7987\x2038.9693C11.4082\x2038.5788\x2011.4082\x2037.9456\x2011.7987\x2037.5551C12.1892\x2037.1646\x2012.8224\x2037.1646\x2013.2129\x2037.5551L15.2617\x2039.6039L17.4012\x2037.4645C17.7817\x2037.084\x2018.3986\x2037.084\x2018.7791\x2037.4645Z",
                fill: "url(#paint5_linear_0_1593)",
              }),
            }),
          ],
        }),
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1593",
            x: "3.5",
            y: "14",
            width: "23",
            height: "93",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1593",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1593",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter1_d_0_1593",
            x: "5.5",
            y: "33",
            width: "19",
            height: "16.2",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "0.2" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1593",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1593",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1593",
            x1: "24.5",
            y1: "26.3099",
            x2: "5.5",
            y2: "26.3099",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1593",
            x1: "24.25",
            y1: "18.1711",
            x2: "5.75",
            y2: "18.1711",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D8918F" }),
              _0x40cf68("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1593",
            x1: "14.2826",
            y1: "16",
            x2: "14.2826",
            y2: "18.4818",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D27977" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1593",
            x1: "20.5",
            y1: "36.6785",
            x2: "9.5",
            y2: "36.6785",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D8918F" }),
              _0x40cf68("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              _0x40cf68("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1593",
            x1: "14.5734",
            y1: "36",
            x2: "14.5734",
            y2: "36.7756",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#D27977" }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint5_linear_0_1593",
            x1: "24.5",
            y1: "31.5133",
            x2: "5.5",
            y2: "31.5133",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fe(_0x3ee4b3) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x3ee4b3,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1646",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x40cf68("g", {
        mask: "url(#mask0_0_1646)",
        children: _0x4a12e1("g", {
          filter: "url(#filter0_d_0_1646)",
          children: [
            _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
              fill: "url(#paint0_linear_0_1646)",
            }),
            _0x4a12e1("g", {
              filter: "url(#filter1_d_0_1646)",
              children: [
                _0x40cf68("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                  fill: "url(#paint1_linear_0_1646)",
                }),
                _0x40cf68("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                  fill: "url(#paint2_linear_0_1646)",
                }),
              ],
            }),
            _0x40cf68("g", {
              filter: "url(#filter2_d_0_1646)",
              children: _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
                fill: "url(#paint3_linear_0_1646)",
              }),
            }),
          ],
        }),
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1646",
            x: "4.5",
            y: "16",
            width: "20.8101",
            height: "89.78",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter1_d_0_1646",
            x: "7.3501",
            y: "22.41",
            width: "15.1101",
            height: "23.66",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "-1" }),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("filter", {
            id: "filter2_d_0_1646",
            x: "4.5",
            y: "44.07",
            width: "20.8101",
            height: "60.71",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", { dy: "-1" }),
              _0x40cf68("feGaussianBlur", { stdDeviation: "0.5" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.5\x200",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1646",
            x1: "12.3401",
            y1: "28.115",
            x2: "17.4701",
            y2: "28.115",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#C5C4C3" }),
              _0x40cf68("stop", { offset: "0.218117", stopColor: "#767B7F" }),
              _0x40cf68("stop", { offset: "0.640132", stopColor: "#ECECED" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#BEBFC1" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1646",
            x1: "7.99795",
            y1: "56.9",
            x2: "21.1319",
            y2: "57.327",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#A6A29E" }),
              _0x40cf68("stop", { offset: "0.155077", stopColor: "#626567" }),
              _0x40cf68("stop", { offset: "0.584408", stopColor: "#DDDEDE" }),
              _0x40cf68("stop", { offset: "0.745733", stopColor: "#F0F0F0" }),
              _0x40cf68("stop", { offset: "0.999639", stopColor: "#E9E8E8" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1646",
            x1: "19.7616",
            y1: "29.1023",
            x2: "10.2276",
            y2: "29.4576",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", {
                stopColor: "#838383",
                stopOpacity: "0.309277",
              }),
              _0x40cf68("stop", { offset: "0.139436", stopColor: "#EDEDED" }),
              _0x40cf68("stop", {
                offset: "0.469628",
                stopColor: "#EFEFEF",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1646",
            x1: "24.31",
            y1: "40.6148",
            x2: "5.5",
            y2: "40.6148",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.157806", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.447724", stopColor: "white" }),
              _0x40cf68("stop", { offset: "0.802592", stopColor: "#DFE0DF" }),
              _0x40cf68("stop", { offset: "0.887284", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "1", stopColor: "white" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function pe(_0x3d8995) {
  return _0x4a12e1("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x3d8995,
    children: [
      _0x40cf68("mask", {
        id: "mask0_0_1618",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: _0x40cf68("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      _0x4a12e1("g", {
        mask: "url(#mask0_0_1618)",
        children: [
          _0x4a12e1("g", {
            filter: "url(#filter0_d_0_1618)",
            children: [
              _0x40cf68("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                fill: "url(#paint0_linear_0_1618)",
              }),
              _0x40cf68("mask", {
                id: "mask1_0_1618",
                style: { maskType: "luminance" },
                maskUnits: "userSpaceOnUse",
                x: "5",
                y: "26",
                width: "20",
                height: "80",
                children: _0x40cf68("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                  fill: "white",
                }),
              }),
              _0x4a12e1("g", {
                mask: "url(#mask1_0_1618)",
                children: [
                  _0x40cf68("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "#E6E6E6",
                  }),
                  _0x40cf68("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "url(#paint1_linear_0_1618)",
                  }),
                  _0x40cf68("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9\x2042H21L24.5\x2052H5.5L9\x2042Z",
                    fill: "url(#paint2_linear_0_1618)",
                  }),
                  _0x40cf68("rect", {
                    x: "9",
                    y: "26.5",
                    width: "12",
                    height: "15.5",
                    fill: "url(#paint3_linear_0_1618)",
                  }),
                ],
              }),
            ],
          }),
          _0x40cf68("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5 55V60.5H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
            fill: "#BD10E0",
          }),
          _0x40cf68("mask", {
            id: "mask2_0_1618",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "46",
            children: _0x40cf68("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.5 55V60.5H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
              fill: "white",
            }),
          }),
          _0x4a12e1("g", {
            mask: "url(#mask2_0_1618)",
            children: [
              _0x40cf68("rect", {
                y: "12",
                width: "30",
                height: "62",
                fill: "#FED031",
              }),
              _0x40cf68("rect", {
                x: "5.5",
                y: "14.5",
                width: "19",
                height: "57",
                fill: "url(#paint4_linear_0_1618)",
              }),
            ],
          }),
        ],
      }),
      _0x4a12e1("defs", {
        children: [
          _0x4a12e1("filter", {
            id: "filter0_d_0_1618",
            x: "3.5",
            y: "24.5",
            width: "23",
            height: "83",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              _0x40cf68("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              _0x40cf68("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              _0x40cf68("feOffset", {}),
              _0x40cf68("feGaussianBlur", { stdDeviation: "1" }),
              _0x40cf68("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1618",
              }),
              _0x40cf68("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1618",
                result: "shape",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint0_linear_0_1618",
            x1: "24.5",
            y1: "19.1595",
            x2: "5.5",
            y2: "19.1595",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint1_linear_0_1618",
            x1: "17.978",
            y1: "42.2475",
            x2: "9.24166",
            y2: "51.9337",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", {
                offset: "0.911778",
                stopColor: "#DCDDDC",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "0.973543",
                stopColor: "#E4E4E4",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "1",
                stopColor: "#E4E4E4",
                stopOpacity: "0.01",
              }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint2_linear_0_1618",
            x1: "30.295",
            y1: "48.3125",
            x2: "21.1391",
            y2: "36.3384",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA", stopOpacity: "0.01" }),
              _0x40cf68("stop", {
                offset: "0.169003",
                stopColor: "#F5F5F5",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", {
                offset: "0.548318",
                stopColor: "#FAF7F7",
                stopOpacity: "0.01",
              }),
              _0x40cf68("stop", { offset: "0.856298", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.964727", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint3_linear_0_1618",
            x1: "21",
            y1: "25.0598",
            x2: "9",
            y2: "25.0598",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopColor: "#DADADA" }),
              _0x40cf68("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              _0x40cf68("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              _0x40cf68("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              _0x40cf68("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              _0x40cf68("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              _0x40cf68("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          _0x4a12e1("linearGradient", {
            id: "paint4_linear_0_1618",
            x1: "5.5",
            y1: "71.5",
            x2: "24.5",
            y2: "71.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              _0x40cf68("stop", { stopOpacity: "0.102218" }),
              _0x40cf68("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              _0x40cf68("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              _0x40cf68("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const X = [
    { labelKey: "pen", tool: "pen", icon: fe, darkIcon: ue },
    { labelKey: "brush", tool: "brush", icon: oe, darkIcon: se },
    { labelKey: "highlighter", tool: "highlighter", icon: pe, darkIcon: le },
    { labelKey: "eraser", tool: "eraser", icon: de, darkIcon: ce },
  ],
  me = {
    pen: "ink-ui.toolbar.pen",
    brush: "ink-ui.toolbar.brush",
    highlighter: "ink-ui.toolbar.highlighter",
    eraser: "ink-ui.toolbar.eraser",
  },
  Z = [
    { value: 2, icon: _0x487a5b },
    { value: 4, icon: _0x1cecc4 },
    { value: 8, icon: _0x862e43 },
    { value: 14, icon: _0x3d3294 },
    { value: 24, icon: _0x211e29 },
  ];
function he(_0x15f6c0) {
  return _0x130f86(
    "univer-group univer-relative univer-h-24 univer-w-12 univer-appearance-none",
    "univer-border-0 univer-bg-transparent univer-p-0 univer-shadow-none univer-outline-none",
    _0x15f6c0 && "univer-z-10",
  );
}
function ge(_0x592b25) {
  return Z.find((_0x30fe2b) => _0x30fe2b.value === _0x592b25) ?? Z[0];
}
function _e(_0x68d4e8) {
  let _0x345f22 = _0x68d4e8.icon;
  return _0x40cf68("span", {
    "aria-hidden": "true",
    className:
      "univer-flex univer-h-8 univer-w-8 univer-items-center univer-justify-center univer-text-gray-900 dark:!univer-text-gray-100",
    children: _0x40cf68(_0x345f22, {
      className: "univer-block\x20univer-size-6",
    }),
  });
}
function Q(_0x5bd417) {
  let _0x1c470c = _0x5bd417.control !== "close";
  return _0x40cf68(_0x336bf3, {
    title: _0x5bd417.label,
    placement: "top",
    visible: _0x5bd417.tooltipVisible,
    onVisibleChange: _0x5bd417.onTooltipVisibleChange,
    asChild: true,
    children: _0x40cf68("span", {
      className: _0x130f86(
        "univer-flex univer-items-center univer-justify-center",
        _0x1c470c ? "univer-h-12 univer-w-[72px]" : "univer-h-12 univer-w-10",
      ),
      "data-ink-toolbar-control-tooltip-anchor": "true",
      children: _0x40cf68(_0x4fe125, {
        "aria-label": _0x5bd417.label,
        className: _0x130f86(
          "univer-relative univer-flex univer-items-center univer-justify-center univer-rounded-full univer-border-none univer-bg-transparent univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 hover:univer-text-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
          "univer-h-10",
          _0x1c470c
            ? "!univer-w-[72px] !univer-min-w-[72px] !univer-pl-2.5 !univer-pr-2 rtl:!univer-pl-2 rtl:!univer-pr-2.5"
            : "!univer-w-10\x20!univer-min-w-10\x20!univer-p-0",
          _0x5bd417.active
            ? "univer-bg-gray-100 univer-text-gray-900 dark:!univer-bg-gray-800"
            : "",
        ),
        "data-ink-toolbar-control": _0x5bd417.control,
        size: "small",
        type: "button",
        variant: "ghost",
        onMouseDown: (_0x3ab9c0) => {
          (_0x3ab9c0.stopPropagation(), _0x3ab9c0.preventDefault());
        },
        onClick: _0x5bd417.onClick,
        children: _0x5bd417.children,
      }),
    }),
  });
}
function ve(_0x4c478e) {
  let {
      tool: _0x11d70e,
      color: _0x260549,
      width: _0x5b8594,
      onSelectTool: _0x4ab2cc,
      onSetWidth: _0x566299,
      onSetColor: _0x320bb3,
      onClose: _0x17e904,
    } = _0x4c478e,
    _0x83a5d9 = ge(_0x5b8594),
    [_0x20c4cc, _0x5f23e6] = _0x188080(null),
    [_0x4b90ea, _0x511f28] = _0x188080(null),
    _0x349000 = _0x59f693(_0x16fd49),
    _0x43bd53 = _0x595d16(_0x349000.direction$, _0x349000.getDirection());
  function _0x272b7b(_0x1ef674, _0x4f06d3) {
    (_0x511f28(null),
      _0x5f23e6((_0x242c9d) =>
        _0x4f06d3 ? _0x1ef674 : _0x242c9d === _0x1ef674 ? null : _0x242c9d,
      ));
  }
  function _0xb2c5e0(_0x471489, _0xf8d3f4) {
    _0x511f28((_0x3ae10c) =>
      _0xf8d3f4
        ? _0x20c4cc === _0x471489
          ? null
          : _0x471489
        : _0x3ae10c === _0x471489
          ? null
          : _0x3ae10c,
    );
  }
  return _0x4a12e1("div", {
    dir: _0x43bd53,
    className:
      "univer-fixed univer-bottom-5 univer-left-1/2 univer-z-[100000] univer-flex univer-h-12 univer--translate-x-1/2 univer-items-center univer-gap-3 univer-overflow-visible univer-rounded-full univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-5 univer-pb-0 univer-pt-0 univer-shadow-2xl dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    "data-ink-floating-toolbar": "true",
    children: [
      _0x40cf68("div", {
        className: "univer-w-[210px] univer-shrink-0",
        "aria-hidden": "true",
      }),
      _0x40cf68("div", {
        className:
          "univer-absolute univer-bottom-0 univer-left-5 univer-flex univer-h-24 univer-w-[210px] univer-gap-1.5 univer-overflow-hidden rtl:univer-left-auto rtl:univer-right-5",
        children: X.map((_0x491042) => {
          let _0x49d96c = _0x491042.icon,
            _0x134956 = _0x491042.darkIcon,
            _0x2867ac = _0x11d70e === _0x491042.tool,
            _0x5195ec = _0x349000.t(me[_0x491042.labelKey]);
          return _0x40cf68(
            "div",
            {
              className: "univer-h-24\x20univer-w-12\x20univer-shrink-0",
              "data-ink-tool-tooltip-anchor": "true",
              children: _0x40cf68(_0x336bf3, {
                title: _0x5195ec,
                placement: "top",
                asChild: true,
                children: _0x40cf68("button", {
                  "aria-label": _0x5195ec,
                  "aria-pressed": _0x2867ac,
                  className: he(_0x2867ac),
                  type: "button",
                  onClick: () => _0x4ab2cc(_0x491042.tool),
                  children: _0x4a12e1("span", {
                    className: _0x130f86(
                      "univer-pointer-events-none univer-absolute univer-bottom-0 univer-left-1/2 univer-block univer--translate-x-1/2 univer-transition-transform univer-duration-200 univer-ease-out",
                      _0x2867ac
                        ? "univer-translate-y-[15px]"
                        : "univer-translate-y-[35px] group-hover:univer-translate-y-[27px]",
                    ),
                    children: [
                      _0x40cf68(_0x49d96c, {
                        className:
                          "ink-tool-icon-light univer-block univer-w-auto univer-drop-shadow-lg dark:!univer-hidden",
                      }),
                      _0x40cf68(_0x134956, {
                        className:
                          "ink-tool-icon-dark univer-hidden univer-w-auto univer-drop-shadow-lg dark:!univer-block",
                      }),
                    ],
                  }),
                }),
              }),
            },
            _0x491042.tool,
          );
        }),
      }),
      _0x40cf68(_0x15b4d2, { orientation: "vertical" }),
      _0x4a12e1("div", {
        className: "univer-flex univer-h-10 univer-items-center univer-gap-3",
        children: [
          _0x40cf68(_0x4ddbcd, {
            open: _0x20c4cc === "width",
            className: "univer-z-[100001]",
            "data-ink-floating-toolbar-popup": "true",
            onOpenChange: (_0x3c8612) => _0x272b7b("width", _0x3c8612),
            overlay: _0x40cf68(_0x5b3a88, {
              className: "univer-w-auto\x20!univer-p-2",
              minWidthClassName: "univer-min-w-0",
              children: _0x40cf68("div", {
                className: "univer-flex univer-items-center univer-gap-2",
                children: Z.map((_0x41766b) => {
                  let _0x5ee373 = _0x41766b.icon,
                    _0x520d9b = _0x41766b.value === _0x5b8594;
                  return _0x40cf68(
                    _0x4fe125,
                    {
                      "aria-label": _0x349000.t(
                        "ink-ui.toolbar.widthValue",
                        String(_0x41766b.value),
                      ),
                      "aria-pressed": _0x520d9b,
                      className: _0x130f86(
                        "univer-rounded-md univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
                        _0x520d9b
                          ? "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-800"
                          : "",
                      ),
                      size: "icon",
                      type: "button",
                      variant: "ghost",
                      onClick: () => {
                        (_0x566299(_0x41766b.value), _0x5f23e6(null));
                      },
                      children: _0x40cf68(_0x5ee373, {}),
                    },
                    _0x41766b.value,
                  );
                }),
              }),
            }),
            children: _0x40cf68("span", {
              className: "univer-flex\x20univer-h-12\x20univer-items-center",
              children: _0x4a12e1(Q, {
                label: _0x349000.t("ink-ui.toolbar.widthSelector"),
                control: "width",
                tooltipVisible: _0x20c4cc !== "width" && _0x4b90ea === "width",
                onTooltipVisibleChange: (_0x3b123b) =>
                  _0xb2c5e0("width", _0x3b123b),
                children: [
                  _0x40cf68(_e, { icon: _0x83a5d9.icon }),
                  _0x40cf68(_0x1868e7, {}),
                ],
              }),
            }),
          }),
          _0x40cf68(_0x4ddbcd, {
            open: _0x20c4cc === "color",
            className: _0x130f86(
              "univer-rounded-lg univer-p-3 !univer-shadow-none",
              "univer-z-[100001]",
            ),
            "data-ink-floating-toolbar-popup": "true",
            onOpenChange: (_0x2f4284) => _0x272b7b("color", _0x2f4284),
            overlay: _0x40cf68("div", {
              className: "univer-w-[244px]",
              dir: _0x43bd53,
              children: _0x40cf68(_0x47d5bd, {
                value: _0x260549,
                onChange: _0x320bb3,
              }),
            }),
            children: _0x40cf68("span", {
              className: "univer-flex univer-h-12 univer-items-center",
              children: _0x4a12e1(Q, {
                label: _0x349000.t("ink-ui.toolbar.colorPicker"),
                control: "color",
                tooltipVisible: _0x20c4cc !== "color" && _0x4b90ea === "color",
                onTooltipVisibleChange: (_0x46e30f) =>
                  _0xb2c5e0("color", _0x46e30f),
                children: [
                  _0x40cf68(_0x2f2153, {
                    className:
                      "univer-block univer-size-[30px] univer-rounded-full",
                  }),
                  _0x40cf68(_0x1868e7, {}),
                ],
              }),
            }),
          }),
        ],
      }),
      _0x40cf68("div", {
        className: "univer-flex univer-h-12 univer-items-center",
        children: _0x40cf68(Q, {
          label: _0x349000.t("ink-ui.toolbar.exitInkMode"),
          control: "close",
          tooltipVisible: _0x4b90ea === "close",
          onTooltipVisibleChange: (_0x33743e) => _0xb2c5e0("close", _0x33743e),
          onClick: _0x17e904,
          children: _0x40cf68(_0x12fab0, {
            className: "univer-size-5",
            "aria-hidden": "true",
          }),
        }),
      }),
    ],
  });
}
function ye() {
  let _0x966717 = _0x59f693(R),
    _0x27a716 = _0x595d16(() => _0x966717.state$, _0x966717.getState(), false, [
      _0x966717,
    ]);
  return _0x27a716.toolbarVisible
    ? _0x40cf68(ve, {
        color: _0x27a716.color,
        tool: _0x27a716.tool,
        width: _0x27a716.width,
        onClose: () => _0x966717.cancelInkMode(),
        onSetColor: (_0x36c1aa) => _0x966717.setColor(_0x36c1aa),
        onSetWidth: (_0x1fae67) => _0x966717.setWidth(_0x1fae67),
        onSelectTool: (_0x4d054f) => _0x966717.selectTool(_0x4d054f),
      })
    : null;
}
let $ = class extends _0x331b24 {
  constructor(_0x172b22 = F, _0x547990, _0x3dcf50, _0xcebe79) {
    (super(),
      (this._config = _0x172b22),
      (this._injector = _0x547990),
      (this._uiPartsService = _0x3dcf50),
      (this._configService = _0xcebe79));
    let { ..._0x1af6bf } = _0x1ded76({}, F, this._config);
    this._configService["setConfig"]("ink-ui.config", _0x1af6bf);
  }
  onStarting() {
    ([[Y], [R, { useClass: V }], [W, { useClass: J }]].forEach((_0x1b3caa) =>
      this._injector["add"](_0x1b3caa),
    ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](_0x182d9c.CONTENT, () =>
          _0x12b14d(ye, this._injector),
        ),
      ));
  }
};
(L($, "pluginName", "UNIVER_INK_UI_PLUGIN"),
  L($, "packageName", N),
  L($, "version", P),
  L($, "type", _0x2f303f.UNIVER_UNKNOWN),
  ($ = U(
    [
      _0x39c76f(_0x563a48, _0x58a651),
      H(1, _0x311cd8(_0x462574)),
      H(2, _0x10e1e3),
      H(3, _0xa8c4c7),
    ],
    $,
  )));
export {
  W as IInkOutsideInteractionService,
  R as IInkUIStateService,
  Y as InkUIService,
  V as InkUIStateService,
  $ as UniverInkUIPlugin,
};
