Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = (function (_0x301663) {
    return (
      (_0x301663.Portrait = "Portrait"),
      (_0x301663.Landscape = "Landscape"),
      _0x301663
    );
  })({}),
  n = (function (_0x295318) {
    return (
      (_0x295318.Origin = "Origin"),
      (_0x295318.FitWidth = "FitWidth"),
      (_0x295318.FitHeight = "FitHeight"),
      (_0x295318.FitPage = "FitPage"),
      (_0x295318.Custom = "Custom"),
      _0x295318
    );
  })({}),
  r = (function (_0x54abce) {
    return (
      (_0x54abce.Start = "Start"),
      (_0x54abce.End = "End"),
      (_0x54abce.Middle = "Middle"),
      _0x54abce
    );
  })({}),
  i = (function (_0x5c98db) {
    return (
      (_0x5c98db.Normal = "Normal"),
      (_0x5c98db.Narrow = "Narrow"),
      (_0x5c98db.Wide = "Wide"),
      (_0x5c98db.None = "None"),
      (_0x5c98db.Custom = "Custom"),
      _0x5c98db
    );
  })({});
const a = {
    Normal: { left: 53, right: 53, top: 56, bottom: 56 },
    Narrow: { left: 19, right: 19, top: 56, bottom: 56 },
    Wide: { left: 75, right: 75, top: 75, bottom: 75 },
    None: { left: 0, right: 0, top: 0, bottom: 0 },
    Custom: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  o = "printing-canvas-container",
  s = "printing-canvas";
function c(_0x576c4e, _0xf47707, _0x3a76d6) {
  let _0x332abd = _0x3a76d6 === "Portrait" ? _0x576c4e : _0xf47707,
    _0x3ef81c = _0x3a76d6 === "Portrait" ? _0xf47707 : _0x576c4e,
    _0x4b163c =
      "\n ." +
      s +
      "\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@media\x20print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20html\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20fit-content;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size:\x20" +
      _0x332abd +
      "px " +
      _0x3ef81c +
      "px; \n }\n @page {\n margin: 0;\n visibility: hidden;\n }\n body > * {\n display: none!important;\n }\n ." +
      o +
      " {\n display: block!important;\n height: fit-content;\n overflow: visible;\n top: 0;\n width: fit-content;\n }\n ." +
      o +
      "\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20." +
      s +
      " {\n page-break-after: always!important;\n height: " +
      _0x3ef81c +
      "px;\n width: " +
      _0x332abd +
      "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}",
    _0x2929aa = document.createElement("style");
  return (
    (_0x2929aa.innerHTML = _0x4b163c),
    (_0x2929aa.className = "offline-printing-css"),
    _0x2929aa
  );
}
function l(_0x1d4b7a) {
  "@babel/helpers - typeof";
  return (
    (l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1364db) {
            return typeof _0x1364db;
          }
        : function (_0x3fd733) {
            return _0x3fd733 &&
              typeof Symbol == "function" &&
              _0x3fd733.constructor === Symbol &&
              _0x3fd733 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3fd733;
          }),
    l(_0x1d4b7a)
  );
}
function u(_0x26c51c, _0x51913c) {
  if (l(_0x26c51c) != "object" || !_0x26c51c) return _0x26c51c;
  var _0x3b06e9 = _0x26c51c[Symbol.toPrimitive];
  if (_0x3b06e9 !== undefined) {
    var _0x1ddeb9 = _0x3b06e9.call(_0x26c51c, _0x51913c || "default");
    if (l(_0x1ddeb9) != "object") return _0x1ddeb9;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x51913c === "string" ? String : Number)(_0x26c51c);
}
function d(_0x123b93) {
  var _0x4989b6 = u(_0x123b93, "string");
  return l(_0x4989b6) == "symbol" ? _0x4989b6 : _0x4989b6 + "";
}
function f(_0x3e5755, _0x1d024f, _0x3bb783) {
  return (
    (_0x1d024f = d(_0x1d024f)) in _0x3e5755
      ? Object.defineProperty(_0x3e5755, _0x1d024f, {
          value: _0x3bb783,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3e5755[_0x1d024f] = _0x3bb783),
    _0x3e5755
  );
}
const p = (0, e.createIdentifier)("pro.print-preparation.service");
var m = class {
  constructor() {
    f(this, "_contributions", new Set());
  }
  registerContribution(_0x54b836) {
    return (
      this._contributions["add"](_0x54b836),
      (0, e.toDisposable)(() => this._contributions["delete"](_0x54b836))
    );
  }
  async prepare(_0x4c5fa5) {
    await Promise.all(
      Array.from(this._contributions, (_0x59b837) =>
        _0x59b837.prepare(_0x4c5fa5),
      ),
    );
  }
};
((exports.IPrintPreparationService = p),
  (exports.PRINT_CANVAS_CLASS = s),
  (exports.PRINT_CONTAINER_CLASS = o),
  (exports.PaperMarginMap = a),
  (exports.PrintAlign = r),
  (exports.PrintDirection = t),
  (exports.PrintPaperMargin = i),
  (exports.PrintPreparationService = m),
  (exports.PrintScale = n),
  (exports.createPrintStyle = c));
