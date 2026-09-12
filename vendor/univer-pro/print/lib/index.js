import {
  createIdentifier as _0x521e54,
  toDisposable as _0x2e64db,
} from "@univerjs/core";
let n = (function (_0x221798) {
    return (
      (_0x221798.Portrait = "Portrait"),
      (_0x221798.Landscape = "Landscape"),
      _0x221798
    );
  })({}),
  r = (function (_0x36c062) {
    return (
      (_0x36c062.Origin = "Origin"),
      (_0x36c062.FitWidth = "FitWidth"),
      (_0x36c062.FitHeight = "FitHeight"),
      (_0x36c062.FitPage = "FitPage"),
      (_0x36c062.Custom = "Custom"),
      _0x36c062
    );
  })({}),
  i = (function (_0x284927) {
    return (
      (_0x284927.Start = "Start"),
      (_0x284927.End = "End"),
      (_0x284927.Middle = "Middle"),
      _0x284927
    );
  })({}),
  a = (function (_0x2ed37d) {
    return (
      (_0x2ed37d.Normal = "Normal"),
      (_0x2ed37d.Narrow = "Narrow"),
      (_0x2ed37d.Wide = "Wide"),
      (_0x2ed37d.None = "None"),
      (_0x2ed37d.Custom = "Custom"),
      _0x2ed37d
    );
  })({});
const o = {
    Normal: { left: 53, right: 53, top: 56, bottom: 56 },
    Narrow: { left: 19, right: 19, top: 56, bottom: 56 },
    Wide: { left: 75, right: 75, top: 75, bottom: 75 },
    None: { left: 0, right: 0, top: 0, bottom: 0 },
    Custom: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  s = "printing-canvas-container",
  c = "printing-canvas";
function l(_0xe2d9a2, _0x5a539b, _0x2af406) {
  let _0x381843 = _0x2af406 === "Portrait" ? _0xe2d9a2 : _0x5a539b,
    _0x297b40 = _0x2af406 === "Portrait" ? _0x5a539b : _0xe2d9a2,
    _0x41b8c4 =
      "\n ." +
      c +
      "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@media\x20print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20html\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size:\x20" +
      _0x381843 +
      "px " +
      _0x297b40 +
      "px; \n }\n @page {\n margin: 0;\n visibility: hidden;\n }\n body > * {\n display: none!important;\n }\n ." +
      s +
      " {\n display: block!important;\n height: fit-content;\n overflow: visible;\n top: 0;\n width: fit-content;\n }\n ." +
      s +
      " * {\n display: block!important;\n }\n ." +
      c +
      "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-after:\x20always!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" +
      _0x297b40 +
      "px;\n width: " +
      _0x381843 +
      "px;\n position: relative;\n }\n }",
    _0x2d2063 = document.createElement("style");
  return (
    (_0x2d2063.innerHTML = _0x41b8c4),
    (_0x2d2063.className = "offline-printing-css"),
    _0x2d2063
  );
}
function u(_0x166d1c) {
  "@babel/helpers - typeof";
  return (
    (u =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5680d6) {
            return typeof _0x5680d6;
          }
        : function (_0x5e18ea) {
            return _0x5e18ea &&
              typeof Symbol == "function" &&
              _0x5e18ea.constructor === Symbol &&
              _0x5e18ea !== Symbol.prototype
              ? "symbol"
              : typeof _0x5e18ea;
          }),
    u(_0x166d1c)
  );
}
function d(_0x19dfb9, _0x5f40f) {
  if (u(_0x19dfb9) != "object" || !_0x19dfb9) return _0x19dfb9;
  var _0x411875 = _0x19dfb9[Symbol.toPrimitive];
  if (_0x411875 !== undefined) {
    var _0x6f0ea3 = _0x411875.call(_0x19dfb9, _0x5f40f || "default");
    if (u(_0x6f0ea3) != "object") return _0x6f0ea3;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5f40f === "string" ? String : Number)(_0x19dfb9);
}
function f(_0x589d1b) {
  var _0x4db31c = _0x3ee768,
    _0x4244e5 = d(_0x589d1b, _0x4db31c(538));
  return u(_0x4244e5) == "symbol" ? _0x4244e5 : _0x4244e5 + "";
}
function p(_0xab8cc8, _0x320cb4, _0x2edba0) {
  return (
    (_0x320cb4 = f(_0x320cb4)) in _0xab8cc8
      ? Object.defineProperty(_0xab8cc8, _0x320cb4, {
          value: _0x2edba0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xab8cc8[_0x320cb4] = _0x2edba0),
    _0xab8cc8
  );
}
const m = _0x521e54("pro.print-preparation.service");
var h = class {
  constructor() {
    p(this, "_contributions", new Set());
  }
  registerContribution(_0x54cbb9) {
    return (
      this._contributions["add"](_0x54cbb9),
      _0x2e64db(() => this._contributions["delete"](_0x54cbb9))
    );
  }
  async prepare(_0x1a62af) {
    await Promise.all(
      Array.from(this._contributions, (_0x44f7e7) =>
        _0x44f7e7.prepare(_0x1a62af),
      ),
    );
  }
};
export {
  m as IPrintPreparationService,
  c as PRINT_CANVAS_CLASS,
  s as PRINT_CONTAINER_CLASS,
  o as PaperMarginMap,
  i as PrintAlign,
  n as PrintDirection,
  a as PrintPaperMargin,
  h as PrintPreparationService,
  r as PrintScale,
  l as createPrintStyle,
};
