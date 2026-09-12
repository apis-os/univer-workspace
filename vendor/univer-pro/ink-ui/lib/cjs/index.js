Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/ink"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/ui"),
  i = require("rxjs"),
  a = require("@univerjs-pro/shape-editor-ui"),
  o = require("@univerjs/design"),
  s = require("@univerjs/icons"),
  c = require("react"),
  l = require("react/jsx-runtime");
var u = "@univerjs-pro/ink-ui",
  d = "1.0.0-insiders.20260907-70fc579";
const f = {};
function p(_0x2e3ba2) {
  "@babel/helpers - typeof";
  return (
    (p =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5a0034) {
            return typeof _0x5a0034;
          }
        : function (_0x5e6166) {
            return _0x5e6166 &&
              typeof Symbol == "function" &&
              _0x5e6166.constructor === Symbol &&
              _0x5e6166 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5e6166;
          }),
    p(_0x2e3ba2)
  );
}
function m(_0x5f5a70, _0x153704) {
  if (p(_0x5f5a70) != "object" || !_0x5f5a70) return _0x5f5a70;
  var _0x46c6a8 = _0x5f5a70[Symbol.toPrimitive];
  if (_0x46c6a8 !== undefined) {
    var _0x2a9c4b = _0x46c6a8.call(_0x5f5a70, _0x153704 || "default");
    if (p(_0x2a9c4b) != "object") return _0x2a9c4b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x153704 === "string" ? String : Number)(_0x5f5a70);
}
function h(_0x42f1bf) {
  var _0x5b99de = m(_0x42f1bf, "string");
  return p(_0x5b99de) == "symbol" ? _0x5b99de : _0x5b99de + "";
}
function g(_0x3aa907, _0x54a04c, _0x3ec2cf) {
  return (
    (_0x54a04c = h(_0x54a04c)) in _0x3aa907
      ? Object.defineProperty(_0x3aa907, _0x54a04c, {
          value: _0x3ec2cf,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3aa907[_0x54a04c] = _0x3ec2cf),
    _0x3aa907
  );
}
const _ = (0, n.createIdentifier)("ink-ui.state.service"),
  v = {
    pen: { color: "#f54a45", width: 2, opacity: 1 },
    brush: { color: "#f54a45", width: 4, opacity: 1 },
    highlighter: { color: "#ffe928", width: 14, opacity: 0.45 },
    eraser: { color: "#ffffff", width: 24, opacity: 1 },
  };
function y(_0xe57ef6) {
  return _0xe57ef6 === "brush" ||
    _0xe57ef6 === "highlighter" ||
    _0xe57ef6 === "eraser"
    ? _0xe57ef6
    : "pen";
}
var b = class extends n.Disposable {
  constructor(..._0x22ed4f) {
    (super(..._0x22ed4f),
      g(
        this,
        "_state$",
        new i["BehaviorSubject"]({
          active: false,
          toolbarVisible: false,
          tool: "pen",
          ...v.pen,
          session: null,
        }),
      ),
      g(this, "state$", this._state$["asObservable"]()));
  }
  dispose() {
    (this._state$["complete"](), super.dispose());
  }
  getState() {
    return this._state$["getValue"]();
  }
  beginInkMode(_0xb47fc) {
    let _0x2b986e = y(_0xb47fc.tool);
    this._state$["next"]({
      ...this.getState(),
      ...v[_0x2b986e],
      active: true,
      toolbarVisible: true,
      tool: _0x2b986e,
      session: { unitId: _0xb47fc.unitId, subUnitId: _0xb47fc.subUnitId },
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
  selectTool(_0x227095) {
    this._state$["next"]({
      ...this.getState(),
      ...v[_0x227095],
      tool: _0x227095,
    });
  }
  setWidth(_0x53008c) {
    !Number.isFinite(_0x53008c) ||
      _0x53008c <= 0 ||
      this._state$["next"]({ ...this.getState(), width: _0x53008c });
  }
  setColor(_0x4b837d) {
    _0x4b837d && this._state$["next"]({ ...this.getState(), color: _0x4b837d });
  }
};
function x(_0x4efd34, _0x517d0f) {
  return function (_0x59f45b, _0x3b5c3d) {
    _0x517d0f(_0x59f45b, _0x3b5c3d, _0x4efd34);
  };
}
function S(_0x4ba95a, _0x48a9b1, _0x462ea3, _0x231675) {
  var _0x57cb44 = arguments.length,
    _0x367392 =
      _0x57cb44 < 3
        ? _0x48a9b1
        : _0x231675 === null
          ? (_0x231675 = Object.getOwnPropertyDescriptor(_0x48a9b1, _0x462ea3))
          : _0x231675,
    _0x2f62ca;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x367392 = Reflect.decorate(_0x4ba95a, _0x48a9b1, _0x462ea3, _0x231675);
  else {
    for (var _0x42c42e = _0x4ba95a.length - 1; _0x42c42e >= 0; _0x42c42e--)
      (_0x2f62ca = _0x4ba95a[_0x42c42e]) &&
        (_0x367392 =
          (_0x57cb44 < 3
            ? _0x2f62ca(_0x367392)
            : _0x57cb44 > 3
              ? _0x2f62ca(_0x48a9b1, _0x462ea3, _0x367392)
              : _0x2f62ca(_0x48a9b1, _0x462ea3)) || _0x367392);
  }
  return (
    _0x57cb44 > 3 &&
      _0x367392 &&
      Object.defineProperty(_0x48a9b1, _0x462ea3, _0x367392),
    _0x367392
  );
}
const C = (0, n.createIdentifier)("ink-ui.outside-interaction.service"),
  w = [
    '[data-ink-floating-toolbar="true"]',
    '[data-ink-floating-toolbar-popup="true"]',
    '[data-ink-interactive-region="true"]',
  ];
function T(_0x1d0dba, _0x228e77) {
  return _0x1d0dba.some(
    (_0xcf1047) =>
      _0xcf1047 === _0x228e77 ||
      (_0xcf1047 instanceof Node && _0x228e77.contains(_0xcf1047)),
  );
}
function E(_0xe5b0e2, _0x28dc1d) {
  return _0xe5b0e2.some(
    (_0x3b9caf) =>
      _0x3b9caf instanceof Element && !!_0x3b9caf.closest(_0x28dc1d),
  );
}
let D = class extends n.Disposable {
  constructor(_0x579525) {
    if (
      (super(),
      (this._stateService = _0x579525),
      g(this, "_interactiveRegions", new Set()),
      typeof window < "u")
    ) {
      let _0x346b33 = (_0x41004b) => this._handlePointerDown(_0x41004b);
      (window.addEventListener("pointerdown", _0x346b33, { capture: true }),
        this.disposeWithMe(
          (0, n.toDisposable)(() =>
            window.removeEventListener("pointerdown", _0x346b33, {
              capture: true,
            }),
          ),
        ));
    }
  }
  registerInteractiveRegion(_0x4f0cdf) {
    return (
      (_0x4f0cdf.dataset["inkInteractiveRegion"] = "true"),
      this._interactiveRegions["add"](_0x4f0cdf),
      (0, n.toDisposable)(() => {
        (this._interactiveRegions["delete"](_0x4f0cdf),
          _0x4f0cdf.dataset["inkInteractiveRegion"] === "true" &&
            delete _0x4f0cdf.dataset["inkInteractiveRegion"]);
      })
    );
  }
  _handlePointerDown(_0x2c0f54) {
    if (!this._stateService["getState"]().active) return;
    let _0x110364 =
      typeof _0x2c0f54.composedPath == "function"
        ? _0x2c0f54.composedPath()
        : _0x2c0f54.target
          ? [_0x2c0f54.target]
          : [];
    if (!w.some((_0x4e8281) => E(_0x110364, _0x4e8281))) {
      for (let _0x44883e of this._interactiveRegions)
        if (T(_0x110364, _0x44883e)) return;
      this._stateService["cancelInkMode"]();
    }
  }
};
D = S([x(0, _)], D);
let O = class {
  constructor(_0x150a04) {
    this._stateService = _0x150a04;
  }
  beginInkMode(_0xe52251) {
    return (this._stateService["beginInkMode"](_0xe52251), true);
  }
  cancelInkMode() {
    this._stateService["cancelInkMode"]();
  }
};
O = S([x(0, _)], O);
function k(_0x526c53) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x526c53,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_2_2784",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsx)("g", {
        mask: "url(#mask0_2_2784)",
        children: (0, l.jsxs)("g", {
          filter: "url(#filter0_d_2_2784)",
          children: [
            (0, l.jsx)("rect", {
              x: "5.5",
              y: "53",
              width: "19",
              height: "52",
              fill: "url(#paint0_linear_2_2784)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
              fill: "url(#paint1_linear_2_2784)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L24.2088 49.3199C24.4022 50.1037 24.5 50.9082 24.5 51.7155V54H5.5L5.5 51.7155C5.5 50.9082 5.59778 50.1037 5.7912 49.3199L14.0291 15.9346Z",
              fill: "url(#paint2_linear_2_2784)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.9701\x2015.8803C15.7177\x2014.8704\x2014.2823\x2014.8704\x2014.0299\x2015.8803L12\x2023.9998H18L15.9701\x2015.8803ZM24.5\x2053.9998H5.5V55.9998H24.5V53.9998Z",
              fill: "#E731AA",
            }),
            (0, l.jsx)("mask", {
              id: "mask1_2_2784",
              style: { maskType: "luminance" },
              maskUnits: "userSpaceOnUse",
              x: "5",
              y: "15",
              width: "20",
              height: "41",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.9701 15.8803C15.7177 14.8704 14.2823 14.8704 14.0299 15.8803L12 23.9998H18L15.9701 15.8803ZM24.5 53.9998H5.5V55.9998H24.5V53.9998Z",
                fill: "white",
              }),
            }),
            (0, l.jsxs)("g", {
              mask: "url(#mask1_2_2784)",
              children: [
                (0, l.jsx)("rect", {
                  y: "15",
                  width: "30",
                  height: "47",
                  fill: "black",
                }),
                (0, l.jsx)("rect", {
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
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_2_2784",
            x: "-2",
            y: "-2",
            width: "34",
            height: "109",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251939 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_2_2784",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_2_2784",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_2_2784",
            x1: "24.5",
            y1: "48.1683",
            x2: "5.5",
            y2: "48.1683",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_2_2784",
            x1: "24.5",
            y1: "8.09744",
            x2: "5.5",
            y2: "8.09744",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_2_2784",
            x1: "19.2128",
            y1: "43.4603",
            x2: "22.7082",
            y2: "43.2814",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", {
                stopColor: "white",
                stopOpacity: "0.119892",
              }),
              (0, l.jsx)("stop", { offset: "1", stopOpacity: "0.249891" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_2_2784",
            x1: "5.5",
            y1: "61.5",
            x2: "24.5",
            y2: "61.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopOpacity: "0.102218" }),
              (0, l.jsx)("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              (0, l.jsx)("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              (0, l.jsx)("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function A(_0x531c9a) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x531c9a,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1443",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsxs)("g", {
        mask: "url(#mask0_0_1443)",
        children: [
          (0, l.jsxs)("g", {
            filter: "url(#filter0_d_0_1443)",
            children: [
              (0, l.jsx)("rect", {
                x: "5.5",
                y: "52",
                width: "19",
                height: "53",
                fill: "url(#paint0_linear_0_1443)",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint1_linear_0_1443)",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint2_linear_0_1443)",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.0291 15.9346C14.2793 14.9207 15.7207 14.9207 15.9709 15.9346L23.9176 48.1397C24.3044 49.7075 24.5 51.3163 24.5 52.9311V54H5.5V52.9311C5.5 51.3163 5.69556 49.7075 6.08241 48.1397L14.0291 15.9346Z",
                fill: "url(#paint3_linear_0_1443)",
              }),
            ],
          }),
          (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.9701 15.8803C15.7177 14.8704 14.2823 14.8704 14.0299 15.8803L12 23.9998H18L15.9701 15.8803ZM24.5 53.9998H5.5V58.4998H24.5V53.9998Z",
            fill: "#E731AA",
          }),
          (0, l.jsx)("mask", {
            id: "mask1_0_1443",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "44",
            children: (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.9701 15.8803C15.7177 14.8704 14.2823 14.8704 14.0299 15.8803L12 23.9998H18L15.9701 15.8803ZM24.5 53.9998H5.5V58.4998H24.5V53.9998Z",
              fill: "white",
            }),
          }),
          (0, l.jsxs)("g", {
            mask: "url(#mask1_0_1443)",
            children: [
              (0, l.jsx)("rect", {
                y: "15",
                width: "30",
                height: "47",
                fill: "white",
              }),
              (0, l.jsx)("rect", {
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
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1443",
            x: "3.5",
            y: "13.1742",
            width: "23",
            height: "93.8258",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251939 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1443",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1443",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1443",
            x1: "5.76888",
            y1: "104.625",
            x2: "24.5",
            y2: "104.625",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1443",
            x1: "5.76888",
            y1: "53.7028",
            x2: "24.5",
            y2: "53.7028",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1443",
            x1: "2.8635",
            y1: "59.5457",
            x2: "21.6039",
            y2: "58.5702",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              (0, l.jsx)("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.171137",
              }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1443",
            x1: "8.95261",
            y1: "50.5317",
            x2: "23.3094",
            y2: "51.3388",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#2F3031",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1443",
            x1: "5.5",
            y1: "61.5",
            x2: "24.5",
            y2: "61.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopOpacity: "0.102218" }),
              (0, l.jsx)("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              (0, l.jsx)("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              (0, l.jsx)("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function j(_0x1dccdf) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "107",
    viewBox: "0 0 30 107",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x1dccdf,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1397",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsx)("g", { mask: "url(#mask0_0_1397)" }),
      (0, l.jsx)("g", {
        filter: "url(#filter0_d_0_1397)",
        children: (0, l.jsxs)("g", {
          clipPath: "url(#clip0_0_1397)",
          children: [
            (0, l.jsx)("rect", {
              x: "5.5",
              y: "33",
              width: "19",
              height: "72",
              fill: "url(#paint0_linear_0_1397)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint1_linear_0_1397)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint2_linear_0_1397)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22.5 35V47H7.5V35H22.5Z",
              fill: "url(#paint3_linear_0_1397)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22.5\x2035V47H7.5V35H22.5Z",
              fill: "url(#paint4_linear_0_1397)",
            }),
            (0, l.jsx)("g", {
              filter: "url(#filter1_d_0_1397)",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.5 33V49H5.5V33H24.5ZM18.7791 37.4645C18.4279 37.1132 17.8752 37.0862 17.493 37.3834L17.4012 37.4645L15.2617 39.6041L13.2129 37.5551C12.8224 37.1646 12.1892 37.1646 11.7987 37.5551C11.4382 37.9156 11.4105 38.4828 11.7155 38.8751L11.7987 38.9693L13.8477 41.0181L11.7081 43.1576C11.3275 43.5381 11.3275 44.155 11.7081 44.5355C12.0593 44.8868 12.612 44.9138 12.9942 44.6166L13.086 44.5355L15.2257 42.3961L17.2743 44.4449C17.6648 44.8354 18.2979 44.8354 18.6885 44.4449C19.049 44.0844 19.0767 43.5172 18.7717 43.1249L18.6885 43.0307L16.6397 40.9821L18.7791 38.8424C19.1596 38.4619 19.1596 37.845 18.7791 37.4645Z",
                fill: "url(#paint5_linear_0_1397)",
              }),
            }),
          ],
        }),
      }),
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1397",
            x: "3",
            y: "14",
            width: "24",
            height: "93",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1397",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1397",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter1_d_0_1397",
            x: "5.5",
            y: "33",
            width: "19",
            height: "16.2",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "0.2" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1397",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1397",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1397",
            x1: "5.76888",
            y1: "104.491",
            x2: "24.5",
            y2: "104.491",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1397",
            x1: "24.25",
            y1: "18.1711",
            x2: "5.75",
            y2: "18.1711",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D8918F" }),
              (0, l.jsx)("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1397",
            x1: "14.2826",
            y1: "16",
            x2: "14.2826",
            y2: "18.4818",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D27977" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1397",
            x1: "22.5",
            y1: "35.8142",
            x2: "7.5",
            y2: "35.8142",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D8918F" }),
              (0, l.jsx)("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1397",
            x1: "14.4183",
            y1: "35",
            x2: "14.4183",
            y2: "35.9307",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D27977" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint5_linear_0_1397",
            x1: "5.76888",
            y1: "48.8868",
            x2: "24.5",
            y2: "48.8868",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsx)("clipPath", {
            id: "clip0_0_1397",
            children: (0, l.jsx)("rect", {
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
function M(_0x3c41df) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x3c41df,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1425",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsxs)("g", {
        mask: "url(#mask0_0_1425)",
        children: [
          (0, l.jsxs)("g", {
            filter: "url(#filter0_d_0_1425)",
            children: [
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                fill: "url(#paint0_linear_0_1425)",
              }),
              (0, l.jsx)("mask", {
                id: "mask1_0_1425",
                style: { maskType: "luminance" },
                maskUnits: "userSpaceOnUse",
                x: "5",
                y: "26",
                width: "20",
                height: "80",
                children: (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                  fill: "white",
                }),
              }),
              (0, l.jsxs)("g", {
                mask: "url(#mask1_0_1425)",
                children: [
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9\x2042H21L24.5\x2052H5.5L9\x2042Z",
                    fill: "url(#paint1_linear_0_1425)",
                  }),
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "url(#paint2_linear_0_1425)",
                  }),
                  (0, l.jsx)("rect", {
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
          (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5 55V66H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
            fill: "#BD10E0",
          }),
          (0, l.jsx)("mask", {
            id: "mask2_0_1425",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "51",
            children: (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.5 55V66H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
              fill: "white",
            }),
          }),
          (0, l.jsxs)("g", {
            mask: "url(#mask2_0_1425)",
            children: [
              (0, l.jsx)("rect", {
                y: "12",
                width: "30",
                height: "62",
                fill: "#FED031",
              }),
              (0, l.jsx)("rect", {
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
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1425",
            x: "3.5",
            y: "24.5",
            width: "23",
            height: "83",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1425",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1425",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1425",
            x1: "5.76888",
            y1: "104.941",
            x2: "24.5",
            y2: "104.941",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1425",
            x1: "11.7063",
            y1: "55.3071",
            x2: "21.2245",
            y2: "45.6223",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              (0, l.jsx)("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.171137",
              }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1425",
            x1: "4.9106",
            y1: "49.089",
            x2: "10.9996",
            y2: "55.8091",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#2F3031",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1425",
            x1: "9.16982",
            y1: "41.8903",
            x2: "21",
            y2: "41.8903",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1425",
            x1: "5.5",
            y1: "71.5",
            x2: "24.5",
            y2: "71.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopOpacity: "0.102218" }),
              (0, l.jsx)("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              (0, l.jsx)("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              (0, l.jsx)("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function N(_0x56a6fd) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x56a6fd,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1451",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsxs)("g", {
        mask: "url(#mask0_0_1451)",
        children: [
          (0, l.jsx)("mask", {
            id: "mask1_0_1451",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "30",
            height: "105",
            children: (0, l.jsx)("rect", {
              width: "30",
              height: "105",
              fill: "white",
            }),
          }),
          (0, l.jsx)("g", {
            mask: "url(#mask1_0_1451)",
            children: (0, l.jsxs)("g", {
              filter: "url(#filter0_d_0_1451)",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
                  fill: "url(#paint0_linear_0_1451)",
                }),
                (0, l.jsxs)("g", {
                  filter: "url(#filter1_d_0_1451)",
                  children: [
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                      fill: "url(#paint1_linear_0_1451)",
                    }),
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                      fill: "url(#paint2_linear_0_1451)",
                    }),
                  ],
                }),
                (0, l.jsxs)("g", {
                  filter: "url(#filter2_d_0_1451)",
                  children: [
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
                      fill: "url(#paint3_linear_0_1451)",
                    }),
                    (0, l.jsx)("path", {
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
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1451",
            x: "4.5",
            y: "16",
            width: "20.8101",
            height: "89.78",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter1_d_0_1451",
            x: "7.3501",
            y: "22.41",
            width: "15.1101",
            height: "23.66",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "-1" }),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.747897\x200",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter2_d_0_1451",
            x: "4.5",
            y: "44.07",
            width: "20.8101",
            height: "60.71",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "-1" }),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.752404 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1451",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1451",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1451",
            x1: "12.3401",
            y1: "28.115",
            x2: "17.4701",
            y2: "28.115",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#353434" }),
              (0, l.jsx)("stop", { offset: "0.266834", stopColor: "#1E2023" }),
              (0, l.jsx)("stop", { offset: "0.640132", stopColor: "#6F6F6F" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#313131" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1451",
            x1: "7.99795",
            y1: "56.9",
            x2: "21.1319",
            y2: "57.327",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#323131" }),
              (0, l.jsx)("stop", { offset: "0.155077", stopColor: "#121213" }),
              (0, l.jsx)("stop", { offset: "0.584408", stopColor: "#6A6B6B" }),
              (0, l.jsx)("stop", { offset: "0.745733", stopColor: "#7A7A7A" }),
              (0, l.jsx)("stop", { offset: "0.999639", stopColor: "#4F4F4F" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1451",
            x1: "19.7616",
            y1: "29.1023",
            x2: "10.2276",
            y2: "29.4576",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#5B5B5B" }),
              (0, l.jsx)("stop", { offset: "0.0907455", stopColor: "#1B1C1E" }),
              (0, l.jsx)("stop", { offset: "0.210116", stopColor: "#787878" }),
              (0, l.jsx)("stop", {
                offset: "0.375877",
                stopColor: "#EFEFEF",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1451",
            x1: "5.7662",
            y1: "104.365",
            x2: "24.31",
            y2: "104.365",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#2F3132" }),
              (0, l.jsx)("stop", { offset: "0.0722478", stopColor: "#1C1D1E" }),
              (0, l.jsx)("stop", { offset: "0.195905", stopColor: "#181A1A" }),
              (0, l.jsx)("stop", { offset: "0.380181", stopColor: "#252627" }),
              (0, l.jsx)("stop", { offset: "0.575612", stopColor: "#38393A" }),
              (0, l.jsx)("stop", { offset: "0.805495", stopColor: "#3C3D3E" }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1451",
            x1: "6.14427",
            y1: "105.528",
            x2: "25.4602",
            y2: "105.286",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#181A1A", stopOpacity: "0.01" }),
              (0, l.jsx)("stop", {
                offset: "0.380181",
                stopColor: "#252627",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "0.575612",
                stopColor: "#38393A",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "0.805495",
                stopColor: "#3C3D3E",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", { offset: "0.920119", stopColor: "#232425" }),
              (0, l.jsx)("stop", { offset: "0.963934", stopColor: "#292A2B" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#2F3031" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function P(_0x224f23) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0\x200\x2030\x20105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x224f23,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1593",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsx)("g", {
        mask: "url(#mask0_0_1593)",
        children: (0, l.jsxs)("g", {
          filter: "url(#filter0_d_0_1593)",
          children: [
            (0, l.jsx)("rect", {
              x: "5.5",
              y: "33",
              width: "19",
              height: "72",
              fill: "url(#paint0_linear_0_1593)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 16C23.7632 16 24.25 22.0541 24.25 22.0541V48H5.75V22.0541C5.75 22.0541 6.23684 16 15 16Z",
              fill: "url(#paint1_linear_0_1593)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15\x2016C23.7632\x2016\x2024.25\x2022.0541\x2024.25\x2022.0541V48H5.75V22.0541C5.75\x2022.0541\x206.23684\x2016\x2015\x2016Z",
              fill: "url(#paint2_linear_0_1593)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.5 36V46H9.5V36H20.5Z",
              fill: "url(#paint3_linear_0_1593)",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.5\x2036V46H9.5V36H20.5Z",
              fill: "url(#paint4_linear_0_1593)",
            }),
            (0, l.jsx)("g", {
              filter: "url(#filter1_d_0_1593)",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.5 33H5.5V49H24.5V33ZM18.7791 37.4645C19.1596 37.845 19.1596 38.4619 18.7791 38.8424L16.6397 40.9819L18.6885 43.0307C19.079 43.4212 19.079 44.0544 18.6885 44.4449C18.2979 44.8354 17.6648 44.8354 17.2743 44.4449L15.2255 42.3961L13.086 44.5355C12.7055 44.916 12.0886 44.916 11.7081 44.5355C11.3275 44.155 11.3275 43.5381 11.7081 43.1576L13.8475 41.0181L11.7987 38.9693C11.4082 38.5788 11.4082 37.9456 11.7987 37.5551C12.1892 37.1646 12.8224 37.1646 13.2129 37.5551L15.2617 39.6039L17.4012 37.4645C17.7817 37.084 18.3986 37.084 18.7791 37.4645Z",
                fill: "url(#paint5_linear_0_1593)",
              }),
            }),
          ],
        }),
      }),
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1593",
            x: "3.5",
            y: "14",
            width: "23",
            height: "93",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.25\x200",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1593",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1593",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter1_d_0_1593",
            x: "5.5",
            y: "33",
            width: "19",
            height: "16.2",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "0.2" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1593",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1593",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1593",
            x1: "24.5",
            y1: "26.3099",
            x2: "5.5",
            y2: "26.3099",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1593",
            x1: "24.25",
            y1: "18.1711",
            x2: "5.75",
            y2: "18.1711",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D8918F" }),
              (0, l.jsx)("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1593",
            x1: "14.2826",
            y1: "16",
            x2: "14.2826",
            y2: "18.4818",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D27977" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1593",
            x1: "20.5",
            y1: "36.6785",
            x2: "9.5",
            y2: "36.6785",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D8918F" }),
              (0, l.jsx)("stop", { offset: "0.250256", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.486065", stopColor: "#F79E9D" }),
              (0, l.jsx)("stop", { offset: "0.837945", stopColor: "#D9807F" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#DB9191" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1593",
            x1: "14.5734",
            y1: "36",
            x2: "14.5734",
            y2: "36.7756",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#D27977" }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#525252",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint5_linear_0_1593",
            x1: "24.5",
            y1: "31.5133",
            x2: "5.5",
            y2: "31.5133",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function F(_0x296149) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x296149,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1646",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsx)("g", {
        mask: "url(#mask0_0_1646)",
        children: (0, l.jsxs)("g", {
          filter: "url(#filter0_d_0_1646)",
          children: [
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9991 18.6987C13.1108 17.7306 13.9305 17 14.9051 17C15.8796 17 16.6994 17.7306 16.8111 18.6987L17.4701 24.41H12.3401L12.9991 18.6987Z",
              fill: "url(#paint0_linear_0_1646)",
            }),
            (0, l.jsxs)("g", {
              filter: "url(#filter1_d_0_1646)",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.7701\x2024.41H18.0401L21.4601\x2046.07H8.3501L11.7701\x2024.41Z",
                  fill: "url(#paint1_linear_0_1646)",
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.7701 24.41H18.0401L21.4601 46.07H8.3501L11.7701 24.41Z",
                  fill: "url(#paint2_linear_0_1646)",
                }),
              ],
            }),
            (0, l.jsx)("g", {
              filter: "url(#filter2_d_0_1646)",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.35 46.07H21.46C22.6822 50.2254 23.874 59.5658 24.31 74.57V104.78H5.5L5.5 74.57C5.93601 59.5658 7.12783 50.2254 8.35 46.07Z",
                fill: "url(#paint3_linear_0_1646)",
              }),
            }),
          ],
        }),
      }),
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1646",
            x: "4.5",
            y: "16",
            width: "20.8101",
            height: "89.78",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.253333 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter1_d_0_1646",
            x: "7.3501",
            y: "22.41",
            width: "15.1101",
            height: "23.66",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "-1" }),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("filter", {
            id: "filter2_d_0_1646",
            x: "4.5",
            y: "44.07",
            width: "20.8101",
            height: "60.71",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", { dy: "-1" }),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200.5\x200",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1646",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1646",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1646",
            x1: "12.3401",
            y1: "28.115",
            x2: "17.4701",
            y2: "28.115",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#C5C4C3" }),
              (0, l.jsx)("stop", { offset: "0.218117", stopColor: "#767B7F" }),
              (0, l.jsx)("stop", { offset: "0.640132", stopColor: "#ECECED" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#BEBFC1" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1646",
            x1: "7.99795",
            y1: "56.9",
            x2: "21.1319",
            y2: "57.327",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#A6A29E" }),
              (0, l.jsx)("stop", { offset: "0.155077", stopColor: "#626567" }),
              (0, l.jsx)("stop", { offset: "0.584408", stopColor: "#DDDEDE" }),
              (0, l.jsx)("stop", { offset: "0.745733", stopColor: "#F0F0F0" }),
              (0, l.jsx)("stop", { offset: "0.999639", stopColor: "#E9E8E8" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1646",
            x1: "19.7616",
            y1: "29.1023",
            x2: "10.2276",
            y2: "29.4576",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", {
                stopColor: "#838383",
                stopOpacity: "0.309277",
              }),
              (0, l.jsx)("stop", { offset: "0.139436", stopColor: "#EDEDED" }),
              (0, l.jsx)("stop", {
                offset: "0.469628",
                stopColor: "#EFEFEF",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1646",
            x1: "24.31",
            y1: "40.6148",
            x2: "5.5",
            y2: "40.6148",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.157806", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.447724", stopColor: "white" }),
              (0, l.jsx)("stop", { offset: "0.802592", stopColor: "#DFE0DF" }),
              (0, l.jsx)("stop", { offset: "0.887284", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "white" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function I(_0x36c021) {
  return (0, l.jsxs)("svg", {
    width: "30",
    height: "105",
    viewBox: "0 0 30 105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ..._0x36c021,
    children: [
      (0, l.jsx)("mask", {
        id: "mask0_0_1618",
        style: { maskType: "luminance" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "30",
        height: "105",
        children: (0, l.jsx)("rect", {
          width: "30",
          height: "105",
          fill: "white",
        }),
      }),
      (0, l.jsxs)("g", {
        mask: "url(#mask0_0_1618)",
        children: [
          (0, l.jsxs)("g", {
            filter: "url(#filter0_d_0_1618)",
            children: [
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 27.5C9 26.9477 9.44772 26.5 10 26.5L20 26.5C20.5523 26.5 21 26.9477 21 27.5V42.0409C21 42.6475 21.1104 43.2489 21.3257 43.816L24.1743 51.3174C24.3896 51.8844 24.5 52.4859 24.5 53.0924V105.5H5.5V53.0924C5.5 52.4859 5.61036 51.8844 5.82569 51.3174L8.67431 43.816C8.88964 43.2489 9 42.6475 9 42.0409V27.5Z",
                fill: "url(#paint0_linear_0_1618)",
              }),
              (0, l.jsx)("mask", {
                id: "mask1_0_1618",
                style: { maskType: "luminance" },
                maskUnits: "userSpaceOnUse",
                x: "5",
                y: "26",
                width: "20",
                height: "80",
                children: (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9\x2027.5C9\x2026.9477\x209.44772\x2026.5\x2010\x2026.5L20\x2026.5C20.5523\x2026.5\x2021\x2026.9477\x2021\x2027.5V42.0409C21\x2042.6475\x2021.1104\x2043.2489\x2021.3257\x2043.816L24.1743\x2051.3174C24.3896\x2051.8844\x2024.5\x2052.4859\x2024.5\x2053.0924V105.5H5.5V53.0924C5.5\x2052.4859\x205.61036\x2051.8844\x205.82569\x2051.3174L8.67431\x2043.816C8.88964\x2043.2489\x209\x2042.6475\x209\x2042.0409V27.5Z",
                  fill: "white",
                }),
              }),
              (0, l.jsxs)("g", {
                mask: "url(#mask1_0_1618)",
                children: [
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "#E6E6E6",
                  }),
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "url(#paint1_linear_0_1618)",
                  }),
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 42H21L24.5 52H5.5L9 42Z",
                    fill: "url(#paint2_linear_0_1618)",
                  }),
                  (0, l.jsx)("rect", {
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
          (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24.5 55V60.5H5.5V55H24.5ZM19.9636 15.5522C19.9876 15.6117 20 15.6753 20 15.7394V26.5H10V20.9112C9.99998 20.8043 10.0342 20.7003 10.0976 20.6143C10.7888 19.6775 11.7563 18.8515 13 18.1364C14.2127 17.4391 16.3169 16.4855 19.3127 15.2758C19.5687 15.1723 19.8602 15.2961 19.9636 15.5522Z",
            fill: "#BD10E0",
          }),
          (0, l.jsx)("mask", {
            id: "mask2_0_1618",
            style: { maskType: "luminance" },
            maskUnits: "userSpaceOnUse",
            x: "5",
            y: "15",
            width: "20",
            height: "46",
            children: (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.5\x2055V60.5H5.5V55H24.5ZM19.9636\x2015.5522C19.9876\x2015.6117\x2020\x2015.6753\x2020\x2015.7394V26.5H10V20.9112C9.99998\x2020.8043\x2010.0342\x2020.7003\x2010.0976\x2020.6143C10.7888\x2019.6775\x2011.7563\x2018.8515\x2013\x2018.1364C14.2127\x2017.4391\x2016.3169\x2016.4855\x2019.3127\x2015.2758C19.5687\x2015.1723\x2019.8602\x2015.2961\x2019.9636\x2015.5522Z",
              fill: "white",
            }),
          }),
          (0, l.jsxs)("g", {
            mask: "url(#mask2_0_1618)",
            children: [
              (0, l.jsx)("rect", {
                y: "12",
                width: "30",
                height: "62",
                fill: "#FED031",
              }),
              (0, l.jsx)("rect", {
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
      (0, l.jsxs)("defs", {
        children: [
          (0, l.jsxs)("filter", {
            id: "filter0_d_0_1618",
            x: "3.5",
            y: "24.5",
            width: "23",
            height: "83",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, l.jsx)("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              (0, l.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values:
                  "0\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x200\x20127\x200",
                result: "hardAlpha",
              }),
              (0, l.jsx)("feOffset", {}),
              (0, l.jsx)("feGaussianBlur", { stdDeviation: "1" }),
              (0, l.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254261 0",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1618",
              }),
              (0, l.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1618",
                result: "shape",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint0_linear_0_1618",
            x1: "24.5",
            y1: "19.1595",
            x2: "5.5",
            y2: "19.1595",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint1_linear_0_1618",
            x1: "17.978",
            y1: "42.2475",
            x2: "9.24166",
            y2: "51.9337",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", {
                offset: "0.911778",
                stopColor: "#DCDDDC",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "0.973543",
                stopColor: "#E4E4E4",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "1",
                stopColor: "#E4E4E4",
                stopOpacity: "0.01",
              }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint2_linear_0_1618",
            x1: "30.295",
            y1: "48.3125",
            x2: "21.1391",
            y2: "36.3384",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA", stopOpacity: "0.01" }),
              (0, l.jsx)("stop", {
                offset: "0.169003",
                stopColor: "#F5F5F5",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", {
                offset: "0.548318",
                stopColor: "#FAF7F7",
                stopOpacity: "0.01",
              }),
              (0, l.jsx)("stop", { offset: "0.856298", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.964727", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint3_linear_0_1618",
            x1: "21",
            y1: "25.0598",
            x2: "9",
            y2: "25.0598",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopColor: "#DADADA" }),
              (0, l.jsx)("stop", { offset: "0.169003", stopColor: "#F5F5F5" }),
              (0, l.jsx)("stop", { offset: "0.445105", stopColor: "#FAF7F7" }),
              (0, l.jsx)("stop", { offset: "0.749878", stopColor: "#E1E1E1" }),
              (0, l.jsx)("stop", { offset: "0.911778", stopColor: "#DCDDDC" }),
              (0, l.jsx)("stop", { offset: "0.973543", stopColor: "#E4E4E4" }),
              (0, l.jsx)("stop", { offset: "1", stopColor: "#E4E4E4" }),
            ],
          }),
          (0, l.jsxs)("linearGradient", {
            id: "paint4_linear_0_1618",
            x1: "5.5",
            y1: "71.5",
            x2: "24.5",
            y2: "71.5",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, l.jsx)("stop", { stopOpacity: "0.102218" }),
              (0, l.jsx)("stop", {
                offset: "0.598084",
                stopColor: "white",
                stopOpacity: "0.249973",
              }),
              (0, l.jsx)("stop", {
                offset: "0.68608",
                stopColor: "white",
                stopOpacity: "0.247214",
              }),
              (0, l.jsx)("stop", { offset: "1", stopOpacity: "0.1" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const L = [
    { labelKey: "pen", tool: "pen", icon: F, darkIcon: N },
    { labelKey: "brush", tool: "brush", icon: k, darkIcon: A },
    { labelKey: "highlighter", tool: "highlighter", icon: I, darkIcon: M },
    { labelKey: "eraser", tool: "eraser", icon: P, darkIcon: j },
  ],
  R = {
    pen: "ink-ui.toolbar.pen",
    brush: "ink-ui.toolbar.brush",
    highlighter: "ink-ui.toolbar.highlighter",
    eraser: "ink-ui.toolbar.eraser",
  },
  z = [
    { value: 2, icon: s.StrokeSize1Icon },
    { value: 4, icon: s.StrokeSize2Icon },
    { value: 8, icon: s.StrokeSize3Icon },
    { value: 14, icon: s.StrokeSize4Icon },
    { value: 24, icon: s.StrokeSize5Icon },
  ];
function B(_0x126ccb) {
  return (0, o.clsx)(
    "univer-group\x20univer-relative\x20univer-h-24\x20univer-w-12\x20univer-appearance-none",
    "univer-border-0 univer-bg-transparent univer-p-0 univer-shadow-none univer-outline-none",
    _0x126ccb && "univer-z-10",
  );
}
function V(_0x37ffd5) {
  return z.find((_0x203534) => _0x203534.value === _0x37ffd5) ?? z[0];
}
function H(_0x9e201c) {
  let _0x2a2152 = _0x9e201c.icon;
  return (0, l.jsx)("span", {
    "aria-hidden": "true",
    className:
      "univer-flex\x20univer-h-8\x20univer-w-8\x20univer-items-center\x20univer-justify-center\x20univer-text-gray-900\x20dark:!univer-text-gray-100",
    children: (0, l.jsx)(_0x2a2152, {
      className: "univer-block univer-size-6",
    }),
  });
}
function U(_0x310ce1) {
  let _0x2dbf43 = _0x310ce1.control !== "close";
  return (0, l.jsx)(o.Tooltip, {
    title: _0x310ce1.label,
    placement: "top",
    visible: _0x310ce1.tooltipVisible,
    onVisibleChange: _0x310ce1.onTooltipVisibleChange,
    asChild: true,
    children: (0, l.jsx)("span", {
      className: (0, o.clsx)(
        "univer-flex univer-items-center univer-justify-center",
        _0x2dbf43 ? "univer-h-12 univer-w-[72px]" : "univer-h-12 univer-w-10",
      ),
      "data-ink-toolbar-control-tooltip-anchor": "true",
      children: (0, l.jsx)(o.Button, {
        "aria-label": _0x310ce1.label,
        className: (0, o.clsx)(
          "univer-relative univer-flex univer-items-center univer-justify-center univer-rounded-full univer-border-none univer-bg-transparent univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 hover:univer-text-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
          "univer-h-10",
          _0x2dbf43
            ? "!univer-w-[72px] !univer-min-w-[72px] !univer-pl-2.5 !univer-pr-2 rtl:!univer-pl-2 rtl:!univer-pr-2.5"
            : "!univer-w-10 !univer-min-w-10 !univer-p-0",
          _0x310ce1.active
            ? "univer-bg-gray-100 univer-text-gray-900 dark:!univer-bg-gray-800"
            : "",
        ),
        "data-ink-toolbar-control": _0x310ce1.control,
        size: "small",
        type: "button",
        variant: "ghost",
        onMouseDown: (_0x538c0b) => {
          (_0x538c0b.stopPropagation(), _0x538c0b.preventDefault());
        },
        onClick: _0x310ce1.onClick,
        children: _0x310ce1.children,
      }),
    }),
  });
}
function W(_0x5f047d) {
  let {
      tool: _0x3ffa45,
      color: _0x37ef2e,
      width: _0x1b1aa9,
      onSelectTool: _0x4a466e,
      onSetWidth: _0x44fe76,
      onSetColor: _0x10a2a7,
      onClose: _0x52085c,
    } = _0x5f047d,
    _0x1898f7 = V(_0x1b1aa9),
    [_0x16f582, _0x3088ef] = (0, c.useState)(null),
    [_0x482345, _0x15cd27] = (0, c.useState)(null),
    _0xa823f9 = (0, r.useDependency)(n.LocaleService),
    _0x12a116 = (0, r.useObservable)(
      _0xa823f9.direction$,
      _0xa823f9.getDirection(),
    );
  function _0x35c7bb(_0x11774b, _0x5ef23a) {
    (_0x15cd27(null),
      _0x3088ef((_0x51950d) =>
        _0x5ef23a ? _0x11774b : _0x51950d === _0x11774b ? null : _0x51950d,
      ));
  }
  function _0x1ef137(_0xc0d80d, _0x34ca67) {
    _0x15cd27((_0x13f9a0) =>
      _0x34ca67
        ? _0x16f582 === _0xc0d80d
          ? null
          : _0xc0d80d
        : _0x13f9a0 === _0xc0d80d
          ? null
          : _0x13f9a0,
    );
  }
  return (0, l.jsxs)("div", {
    dir: _0x12a116,
    className:
      "univer-fixed univer-bottom-5 univer-left-1/2 univer-z-[100000] univer-flex univer-h-12 univer--translate-x-1/2 univer-items-center univer-gap-3 univer-overflow-visible univer-rounded-full univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-5 univer-pb-0 univer-pt-0 univer-shadow-2xl dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    "data-ink-floating-toolbar": "true",
    children: [
      (0, l.jsx)("div", {
        className: "univer-w-[210px] univer-shrink-0",
        "aria-hidden": "true",
      }),
      (0, l.jsx)("div", {
        className:
          "univer-absolute univer-bottom-0 univer-left-5 univer-flex univer-h-24 univer-w-[210px] univer-gap-1.5 univer-overflow-hidden rtl:univer-left-auto rtl:univer-right-5",
        children: L.map((_0x5947f5) => {
          let _0x2b1a8a = _0x5947f5.icon,
            _0x4074ff = _0x5947f5.darkIcon,
            _0x4e622d = _0x3ffa45 === _0x5947f5.tool,
            _0x4ad5ad = _0xa823f9.t(R[_0x5947f5.labelKey]);
          return (0, l.jsx)(
            "div",
            {
              className: "univer-h-24 univer-w-12 univer-shrink-0",
              "data-ink-tool-tooltip-anchor": "true",
              children: (0, l.jsx)(o.Tooltip, {
                title: _0x4ad5ad,
                placement: "top",
                asChild: true,
                children: (0, l.jsx)("button", {
                  "aria-label": _0x4ad5ad,
                  "aria-pressed": _0x4e622d,
                  className: B(_0x4e622d),
                  type: "button",
                  onClick: () => _0x4a466e(_0x5947f5.tool),
                  children: (0, l.jsxs)("span", {
                    className: (0, o.clsx)(
                      "univer-pointer-events-none univer-absolute univer-bottom-0 univer-left-1/2 univer-block univer--translate-x-1/2 univer-transition-transform univer-duration-200 univer-ease-out",
                      _0x4e622d
                        ? "univer-translate-y-[15px]"
                        : "univer-translate-y-[35px] group-hover:univer-translate-y-[27px]",
                    ),
                    children: [
                      (0, l.jsx)(_0x2b1a8a, {
                        className:
                          "ink-tool-icon-light univer-block univer-w-auto univer-drop-shadow-lg dark:!univer-hidden",
                      }),
                      (0, l.jsx)(_0x4074ff, {
                        className:
                          "ink-tool-icon-dark univer-hidden univer-w-auto univer-drop-shadow-lg dark:!univer-block",
                      }),
                    ],
                  }),
                }),
              }),
            },
            _0x5947f5.tool,
          );
        }),
      }),
      (0, l.jsx)(o.Separator, { orientation: "vertical" }),
      (0, l.jsxs)("div", {
        className: "univer-flex univer-h-10 univer-items-center univer-gap-3",
        children: [
          (0, l.jsx)(o.Dropdown, {
            open: _0x16f582 === "width",
            className: "univer-z-[100001]",
            "data-ink-floating-toolbar-popup": "true",
            onOpenChange: (_0x4bd0cc) => _0x35c7bb("width", _0x4bd0cc),
            overlay: (0, l.jsx)(a.ShapeFloatingToolbarMenuPanel, {
              className: "univer-w-auto !univer-p-2",
              minWidthClassName: "univer-min-w-0",
              children: (0, l.jsx)("div", {
                className: "univer-flex univer-items-center univer-gap-2",
                children: z.map((_0x4d882d) => {
                  let _0x2d9de5 = _0x4d882d.icon,
                    _0x37905a = _0x4d882d.value === _0x1b1aa9;
                  return (0, l.jsx)(
                    o.Button,
                    {
                      "aria-label": _0xa823f9.t(
                        "ink-ui.toolbar.widthValue",
                        String(_0x4d882d.value),
                      ),
                      "aria-pressed": _0x37905a,
                      className: (0, o.clsx)(
                        "univer-rounded-md univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
                        _0x37905a
                          ? "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800"
                          : "",
                      ),
                      size: "icon",
                      type: "button",
                      variant: "ghost",
                      onClick: () => {
                        (_0x44fe76(_0x4d882d.value), _0x3088ef(null));
                      },
                      children: (0, l.jsx)(_0x2d9de5, {}),
                    },
                    _0x4d882d.value,
                  );
                }),
              }),
            }),
            children: (0, l.jsx)("span", {
              className: "univer-flex univer-h-12 univer-items-center",
              children: (0, l.jsxs)(U, {
                label: _0xa823f9.t("ink-ui.toolbar.widthSelector"),
                control: "width",
                tooltipVisible: _0x16f582 !== "width" && _0x482345 === "width",
                onTooltipVisibleChange: (_0x233b3c) =>
                  _0x1ef137("width", _0x233b3c),
                children: [
                  (0, l.jsx)(H, { icon: _0x1898f7.icon }),
                  (0, l.jsx)(s.MoreDownIcon, {}),
                ],
              }),
            }),
          }),
          (0, l.jsx)(o.Dropdown, {
            open: _0x16f582 === "color",
            className: (0, o.clsx)(
              "univer-rounded-lg univer-p-3 !univer-shadow-none",
              "univer-z-[100001]",
            ),
            "data-ink-floating-toolbar-popup": "true",
            onOpenChange: (_0x4b2aab) => _0x35c7bb("color", _0x4b2aab),
            overlay: (0, l.jsx)("div", {
              className: "univer-w-[244px]",
              dir: _0x12a116,
              children: (0, l.jsx)(o.ColorPicker, {
                value: _0x37ef2e,
                onChange: _0x10a2a7,
              }),
            }),
            children: (0, l.jsx)("span", {
              className: "univer-flex univer-h-12 univer-items-center",
              children: (0, l.jsxs)(U, {
                label: _0xa823f9.t("ink-ui.toolbar.colorPicker"),
                control: "color",
                tooltipVisible: _0x16f582 !== "color" && _0x482345 === "color",
                onTooltipVisibleChange: (_0x1a1b9b) =>
                  _0x1ef137("color", _0x1a1b9b),
                children: [
                  (0, l.jsx)(s.ColorWheelMultiIcon, {
                    className:
                      "univer-block univer-size-[30px] univer-rounded-full",
                  }),
                  (0, l.jsx)(s.MoreDownIcon, {}),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, l.jsx)("div", {
        className: "univer-flex univer-h-12 univer-items-center",
        children: (0, l.jsx)(U, {
          label: _0xa823f9.t("ink-ui.toolbar.exitInkMode"),
          control: "close",
          tooltipVisible: _0x482345 === "close",
          onTooltipVisibleChange: (_0x6137a2) => _0x1ef137("close", _0x6137a2),
          onClick: _0x52085c,
          children: (0, l.jsx)(s.CloseIcon, {
            className: "univer-size-5",
            "aria-hidden": "true",
          }),
        }),
      }),
    ],
  });
}
function G() {
  let _0x5b687b = (0, r.useDependency)(_),
    _0x33382a = (0, r.useObservable)(
      () => _0x5b687b.state$,
      _0x5b687b.getState(),
      false,
      [_0x5b687b],
    );
  return _0x33382a.toolbarVisible
    ? (0, l.jsx)(W, {
        color: _0x33382a.color,
        tool: _0x33382a.tool,
        width: _0x33382a.width,
        onClose: () => _0x5b687b.cancelInkMode(),
        onSetColor: (_0x3c9d91) => _0x5b687b.setColor(_0x3c9d91),
        onSetWidth: (_0x2ec408) => _0x5b687b.setWidth(_0x2ec408),
        onSelectTool: (_0x37d545) => _0x5b687b.selectTool(_0x37d545),
      })
    : null;
}
let K = class extends n.Plugin {
  constructor(_0x3a807f = f, _0x286b94, _0x55a556, _0x4fb504) {
    (super(),
      (this._config = _0x3a807f),
      (this._injector = _0x286b94),
      (this._uiPartsService = _0x55a556),
      (this._configService = _0x4fb504));
    let { ..._0x1623a5 } = (0, n.merge)({}, f, this._config);
    this._configService["setConfig"]("ink-ui.config", _0x1623a5);
  }
  onStarting() {
    ([[O], [_, { useClass: b }], [C, { useClass: D }]].forEach((_0x884715) =>
      this._injector["add"](_0x884715),
    ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](
          r.BuiltInUIPart["CONTENT"],
          () => (0, r.connectInjector)(G, this._injector),
        ),
      ));
  }
};
(g(K, "pluginName", "UNIVER_INK_UI_PLUGIN"),
  g(K, "packageName", u),
  g(K, "version", d),
  g(K, "type", n.UniverInstanceType["UNIVER_UNKNOWN"]),
  (K = S(
    [
      (0, n.DependentOn)(t.UniverLicensePlugin, e.UniverInkPlugin),
      x(1, (0, n.Inject)(n.Injector)),
      x(2, r.IUIPartsService),
      x(3, n.IConfigService),
    ],
    K,
  )),
  (exports.IInkOutsideInteractionService = C),
  (exports.IInkUIStateService = _),
  Object.defineProperty(exports, "InkUIService", {
    enumerable: true,
    get: function () {
      return O;
    },
  }),
  (exports.InkUIStateService = b),
  Object.defineProperty(exports, "UniverInkUIPlugin", {
    enumerable: true,
    get: function () {
      return K;
    },
  }));
