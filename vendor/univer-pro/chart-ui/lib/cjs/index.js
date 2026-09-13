Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/design"),
  n = require("@univerjs/icons"),
  r = require("react"),
  i = require("react/jsx-runtime"),
  a = require("@univerjs/core"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/embed-unit-ui"),
  c = require("@univerjs-pro/embed"),
  l = require("@univerjs/engine-formula"),
  u = require("rxjs"),
  d = require("@univerjs-pro/license"),
  f = function (var_core_value_sig9B3D) {
    return var_core_value_sig9B3D.Inset = "inset", var_core_value_sig9B3D.Overlay = "overlay", var_core_value_sig9B3D;
  }({});
var p = class {
  static resolve(var_core_value_sig3C5B) {
    let var_core_value_sig200B = m(var_core_value_sig3C5B.logicalOuterRect["left"], var_core_value_sig3C5B.logicalOuterRect["top"], var_core_value_sig3C5B.logicalOuterRect["width"], var_core_value_sig3C5B.logicalOuterRect["height"]),
      var_core_value_sig3863 = var_core_value_sig200B;
    if (var_core_value_sig3C5B.contentMode === "inset" && (0, e.shouldComposeChartHostFrame)(var_core_value_sig3C5B.hostStyle)) {
      let var_core_value_sig26DB = (0, e.getChartHostFrameContentRect)(var_core_value_sig200B, var_core_value_sig3C5B.hostStyle);
      var_core_value_sig3863 = m(var_core_value_sig200B.left + var_core_value_sig26DB.left, var_core_value_sig200B.top + var_core_value_sig26DB.top, var_core_value_sig26DB.width, var_core_value_sig26DB.height);
    }
    return Object.freeze({
      logicalOuterRect: var_core_value_sig200B,
      logicalContentRect: var_core_value_sig3863,
      renderedOuterRect: h(var_core_value_sig200B, var_core_value_sig3C5B.scale["scaleX"], var_core_value_sig3C5B.scale["scaleY"]),
      renderedContentRect: h(var_core_value_sig3863, var_core_value_sig3C5B.scale["scaleX"], var_core_value_sig3C5B.scale["scaleY"]),
      contentMode: var_core_value_sig3C5B.contentMode
    });
  }
};
function m(var_core_value_sigC1CF, var_core_value_sigEE12, var_core_value_sigD70C, var_core_value_sigF047) {
  if (g(var_core_value_sigC1CF, "left"), g(var_core_value_sigEE12, "top"), g(var_core_value_sigD70C, "width"), g(var_core_value_sigF047, "height"), var_core_value_sigD70C < 0 || var_core_value_sigF047 < 0) throw RangeError("Chart frame dimensions cannot be negative.");
  return Object.freeze({
    left: var_core_value_sigC1CF,
    top: var_core_value_sigEE12,
    width: var_core_value_sigD70C,
    height: var_core_value_sigF047
  });
}
function h(var_core_value_sigC2F9, var_core_value_sig1F51, var_core_value_sig29F5) {
  if (g(var_core_value_sig1F51, "scaleX"), g(var_core_value_sig29F5, "scaleY"), var_core_value_sig1F51 < 0 || var_core_value_sig29F5 < 0) throw RangeError("Chart frame scales cannot be negative.");
  return m(var_core_value_sigC2F9.left * var_core_value_sig1F51, var_core_value_sigC2F9.top * var_core_value_sig29F5, var_core_value_sigC2F9.width * var_core_value_sig1F51, var_core_value_sigC2F9.height * var_core_value_sig29F5);
}
function g(var_core_value_sig5A51, var_core_value_sigF1D1) {
  if (!Number.isFinite(var_core_value_sig5A51)) throw TypeError(var_core_value_sigF1D1 + " must be finite.");
}
function _(var_core_value_sig370E) {
  "@babel/helpers - typeof";

  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigC97C) {
    return typeof var_core_value_sigC97C;
  } : function (var_core_value_sigC4B1) {
    return var_core_value_sigC4B1 && typeof Symbol == "function" && var_core_value_sigC4B1.constructor === Symbol && var_core_value_sigC4B1 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigC4B1;
  }, _(var_core_value_sig370E);
}
function v(var_core_value_sigDE14, var_core_value_sig02CB) {
  if (_(var_core_value_sigDE14) != "object" || !var_core_value_sigDE14) return var_core_value_sigDE14;
  var var_core_value_sig6CBB = var_core_value_sigDE14[Symbol.toPrimitive];
  if (var_core_value_sig6CBB !== undefined) {
    var var_core_value_sig68DA = var_core_value_sig6CBB.call(var_core_value_sigDE14, var_core_value_sig02CB || "default");
    if (_(var_core_value_sig68DA) != "object") return var_core_value_sig68DA;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig02CB === "string" ? String : Number)(var_core_value_sigDE14);
}
function y(var_core_value_sig64D8) {
  var var_core_value_sigD755 = v(var_core_value_sig64D8, "string");
  return _(var_core_value_sigD755) == "symbol" ? var_core_value_sigD755 : var_core_value_sigD755 + "";
}
function b(var_core_value_sigF897, var_core_value_sigA578, var_core_value_sig0260) {
  return (var_core_value_sigA578 = y(var_core_value_sigA578)) in var_core_value_sigF897 ? Object[ox452a16(1537)](var_core_value_sigF897, var_core_value_sigA578, {
    value: var_core_value_sig0260,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigF897[var_core_value_sigA578] = var_core_value_sig0260, var_core_value_sigF897;
}
function x(var_core_value_sig034D, var_core_value_sig89EC) {
  let var_core_value_sig9975 = (0, e[ox124bfb(876)])(var_core_value_sig89EC);
  return JSON[ox124bfb(991)]({
    outer: var_core_value_sig034D.logicalOuterRect,
    content: var_core_value_sig034D[ox124bfb(1291)],
    rendered: var_core_value_sig034D[ox124bfb(1005)],
    mode: var_core_value_sig034D[ox124bfb(511)],
    fill: var_core_value_sig89EC.fill ?? "",
    border: var_core_value_sig9975,
    radius: var_core_value_sig89EC[ox124bfb(494)] ?? 0
  });
}
var S = class {
  constructor(var_core_value_sig1BD9) {
    this[oxa8b37c(1299)] = var_core_value_sig1BD9, b(this, oxa8b37c(564), undefined), b(this, oxa8b37c(1297), undefined), b(this, oxa8b37c(1733), null), b(this, "_stateKey", ""), this[oxa8b37c(1297)] = document[oxa8b37c(1438)](oxa8b37c(1998)), this[oxa8b37c(1297)][oxa8b37c(994)] = oxa8b37c(857), this[oxa8b37c(564)] = document.createElement(oxa8b37c(1998)), this[oxa8b37c(564)].className = "chart-host", this[oxa8b37c(1297)][oxa8b37c(1595)](this.mountNode), this._root[oxa8b37c(1595)](this[oxa8b37c(1297)]);
  }
  update(var_core_value_sigE43E, var_core_value_sigA937) {
    let var_core_value_sigCAD5 = x(var_core_value_sigE43E, var_core_value_sigA937);
    if (var_core_value_sigCAD5 === this[ox50c4f6(1454)]) return;
    this[ox50c4f6(1454)] = var_core_value_sigCAD5;
    let var_core_value_sigE503 = var_core_value_sigE43E[ox50c4f6(567)],
      var_core_value_sig48DD = var_core_value_sigE43E.logicalContentRect,
      var_core_value_sig5E6A = var_core_value_sigE503[ox50c4f6(989)] === 0 ? 1 : var_core_value_sigE43E[ox50c4f6(1005)][ox50c4f6(989)] / var_core_value_sigE503[ox50c4f6(989)],
      var_core_value_sigB7FC = var_core_value_sigE503[ox50c4f6(787)] === 0 ? 1 : var_core_value_sigE43E.renderedOuterRect[ox50c4f6(787)] / var_core_value_sigE503.height,
      var_core_value_sig9CD9 = (0, e[ox50c4f6(876)])(var_core_value_sigA937),
      var_core_value_sigFD0C = var_core_value_sigE43E[ox50c4f6(511)] === ox50c4f6(1228) ? (var_core_value_sig9CD9 == null ? undefined : var_core_value_sig9CD9[ox50c4f6(989)]) ?? 0 : 0,
      var_core_value_sig849B = Math[ox50c4f6(628)](0, Number[ox50c4f6(1541)](var_core_value_sigA937[ox50c4f6(494)]) ? var_core_value_sigA937[ox50c4f6(494)] ?? 0 : 0);
    if (Object[ox50c4f6(732)](this._frameNode[ox50c4f6(1169)], {
      position: ox50c4f6(1038),
      left: var_core_value_sigE503.left + "px",
      top: var_core_value_sigE503[ox50c4f6(491)] + "px",
      width: var_core_value_sigE503[ox50c4f6(989)] + "px",
      height: var_core_value_sigE503[ox50c4f6(787)] + "px",
      transform: ox50c4f6(1870) + var_core_value_sig5E6A + ",\x20" + var_core_value_sigB7FC + ")",
      transformOrigin: ox50c4f6(865),
      boxSizing: ox50c4f6(1276),
      overflow: "hidden",
      borderRadius: var_core_value_sig849B + "px",
      backgroundColor: var_core_value_sigA937[ox50c4f6(1644)] ?? "",
      border: var_core_value_sigE43E[ox50c4f6(511)] === ox50c4f6(1228) && var_core_value_sig9CD9 ? var_core_value_sig9CD9.width + "px\x20solid\x20" + var_core_value_sig9CD9[ox50c4f6(1393)] : "0"
    }), Object.assign(this.mountNode[ox50c4f6(1169)], {
      position: ox50c4f6(1038),
      left: var_core_value_sig48DD[ox50c4f6(516)] - var_core_value_sigE503[ox50c4f6(516)] - var_core_value_sigFD0C + "px",
      top: var_core_value_sig48DD[ox50c4f6(491)] - var_core_value_sigE503[ox50c4f6(491)] - var_core_value_sigFD0C + "px",
      width: var_core_value_sig48DD[ox50c4f6(989)] + "px",
      height: var_core_value_sig48DD[ox50c4f6(787)] + "px",
      border: "0",
      boxSizing: ox50c4f6(1389),
      overflow: ox50c4f6(2020)
    }), var_core_value_sigE43E[ox50c4f6(511)] === ox50c4f6(481)) this[ox50c4f6(1733)] ??= this._createBorderNode(), this[ox50c4f6(1733)][ox50c4f6(1169)][ox50c4f6(1464)] = var_core_value_sig9CD9 ? var_core_value_sig9CD9[ox50c4f6(989)] + ox50c4f6(531) + var_core_value_sig9CD9.color : "0";else {
      var var_core_value_sig5F1A;
      (var_core_value_sig5F1A = this[ox50c4f6(1733)]) == null || var_core_value_sig5F1A[ox50c4f6(1225)](), this._borderNode = null;
    }
  }
  dispose() {
    this[ox419c6d(1297)][ox419c6d(1225)](), this._borderNode = null;
  }
  _createBorderNode() {
    let var_core_value_sigB455 = document[ox3eab21(1438)](ox3eab21(1998));
    return var_core_value_sigB455[ox3eab21(994)] = "chart-host-border", Object[ox3eab21(732)](var_core_value_sigB455[ox3eab21(1169)], {
      position: "absolute",
      left: "0",
      top: "0",
      width: ox3eab21(811),
      height: ox3eab21(811),
      boxSizing: "border-box",
      pointerEvents: ox3eab21(1325),
      borderRadius: ox3eab21(758)
    }), this._frameNode[ox3eab21(1595)](var_core_value_sigB455), var_core_value_sigB455;
  }
};
let C = function (var_core_value_sigD6D9) {
  return var_core_value_sigD6D9[ox5de4cd(1635)] = ox5de4cd(1713), var_core_value_sigD6D9[ox5de4cd(1748)] = ox5de4cd(1886), var_core_value_sigD6D9[ox5de4cd(1095)] = ox5de4cd(914), var_core_value_sigD6D9.BubbleSeriesIndex = "bubbleSeriesIndex", var_core_value_sigD6D9[ox5de4cd(1229)] = ox5de4cd(650), var_core_value_sigD6D9;
}({});
const w = ["A", "B", "C"],
  ee = [["US", "Software"], ["US", "Hardware"], ["UA", "Software"], ["UA", "Hardware"]];
function te(var_core_value_sig2637) {
  return var_core_value_sig2637 === e[ox47c64e(653)][ox47c64e(861)] ? 1 : 2;
}
function T(var_core_value_sigAF1D, var_core_value_sigC92D) {
  let var_core_value_sigEA3D = (0, e[ox4120d8(1793)])(var_core_value_sigAF1D);
  if (var_core_value_sigEA3D) switch (var_core_value_sigAF1D) {
    case e[ox4120d8(653)][ox4120d8(615)]:
      return [[var_core_value_sigC92D.category, var_core_value_sigC92D[ox4120d8(2008)], var_core_value_sigC92D[ox4120d8(1461)], var_core_value_sigC92D[ox4120d8(1306)], var_core_value_sigC92D[ox4120d8(1609)]], ...var_core_value_sigEA3D];
    case e[ox4120d8(653)].Histogram:
      return [[var_core_value_sigC92D[ox4120d8(838)]], ...var_core_value_sigEA3D];
    case e.ChartTypeBits[ox4120d8(1478)]:
      return [[...w], ...ee[ox4120d8(1285)](([var_core_value_sigF0F9, var_core_value_sig1A0F], var_core_value_sigFBA4) => {
        var var_core_value_sig4383;
        return [var_core_value_sigF0F9, var_core_value_sig1A0F, ((var_core_value_sig4383 = var_core_value_sigEA3D[var_core_value_sigFBA4]) == null ? undefined : var_core_value_sig4383[2]) ?? null];
      })];
    case e[ox4120d8(653)][ox4120d8(1220)]:
      return [[var_core_value_sigC92D[ox4120d8(1695)] + "\x201", var_core_value_sigC92D[ox4120d8(1695)] + "\x202", var_core_value_sigC92D[ox4120d8(1324)]], ...var_core_value_sigEA3D];
    case e[ox4120d8(653)][ox4120d8(746)]:
      return [[var_core_value_sigC92D.label, var_core_value_sigC92D[ox4120d8(1324)]], ...var_core_value_sigEA3D];
    case e[ox4120d8(653)].Chord:
      return [[var_core_value_sigC92D.chordSource, var_core_value_sigC92D[ox4120d8(669)], var_core_value_sigC92D[ox4120d8(1324)]], ...var_core_value_sigEA3D];
    default:
      return;
  }
}
function E(var_core_value_sig2841, var_core_value_sig9FE1) {
  return var_core_value_sig2841 ? var_core_value_sig9FE1 ? ox29ca39(1133) : "univer-text-primary-600" : ox29ca39(1456);
}
function ne(var_core_value_sig9DAA) {
  let var_core_value_sig1F8A = var_core_value_sig9DAA[ox4fa6b9(1897)] === ox4fa6b9(697);
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig536D(var_core_value_sig5241, var_core_value_sigC6E5) {
    const var_core_value_sigCEFB = ox4fa6b9;
    var var_core_value_sig1537;
    let var_core_value_sigE4C6 = var_core_value_sigC6E5;
    if (var_core_value_sig5241[var_core_value_sigCEFB(1198)] === var_core_value_sigCEFB(1334)) var_core_value_sigE4C6 = var_core_value_sigC6E5 === 0 ? var_core_value_sig9DAA[var_core_value_sigCEFB(1914)].length - 1 : var_core_value_sigC6E5 - 1;else {
      if (var_core_value_sig5241[var_core_value_sigCEFB(1198)] === var_core_value_sigCEFB(1581)) var_core_value_sigE4C6 = var_core_value_sigC6E5 === var_core_value_sig9DAA.items[var_core_value_sigCEFB(1579)] - 1 ? 0 : var_core_value_sigC6E5 + 1;else {
        if (var_core_value_sig5241[var_core_value_sigCEFB(1198)] === var_core_value_sigCEFB(1028)) var_core_value_sigE4C6 = 0;else {
          if (var_core_value_sig5241[var_core_value_sigCEFB(1198)] === var_core_value_sigCEFB(1270)) var_core_value_sigE4C6 = var_core_value_sig9DAA[var_core_value_sigCEFB(1914)][var_core_value_sigCEFB(1579)] - 1;else return;
        }
      }
    }
    var_core_value_sig5241[var_core_value_sigCEFB(1586)]();
    let var_core_value_sig4313 = var_core_value_sig9DAA[var_core_value_sigCEFB(1914)][var_core_value_sigE4C6];
    var_core_value_sig4313 && (var_core_value_sig9DAA[var_core_value_sigCEFB(507)](var_core_value_sig4313[var_core_value_sigCEFB(1324)]), (var_core_value_sig1537 = var_core_value_sig5241[var_core_value_sigCEFB(728)][var_core_value_sigCEFB(1941)](var_core_value_sigCEFB(1884))) == null || var_core_value_sig1537[var_core_value_sigCEFB(778)]("[role=\x22tab\x22]").item(var_core_value_sigE4C6).focus());
  }
  return (0, i[ox4fa6b9(922)])(ox4fa6b9(1998), {
    "aria-label": var_core_value_sig9DAA[ox4fa6b9(1698)],
    className: (0, t.clsx)(var_core_value_sig1F8A ? ox4fa6b9(1431) : ox4fa6b9(1967), var_core_value_sig9DAA[ox4fa6b9(994)]),
    role: ox4fa6b9(490),
    children: var_core_value_sig9DAA[ox4fa6b9(1914)][ox4fa6b9(1285)]((var_core_value_sigFC87, var_core_value_sig156F) => {
      const var_core_value_sigDD51 = ox4fa6b9;
      let var_core_value_sigF057 = var_core_value_sigFC87[var_core_value_sigDD51(1324)] === var_core_value_sig9DAA.value;
      return (0, i[var_core_value_sigDD51(1557)])(var_core_value_sigDD51(1204), {
        id: var_core_value_sigFC87[var_core_value_sigDD51(641)] + "-tab",
        "aria-controls": var_core_value_sigFC87[var_core_value_sigDD51(641)],
        "aria-selected": var_core_value_sigF057,
        className: (0, t[var_core_value_sigDD51(1916)])(var_core_value_sigDD51(1559), var_core_value_sig1F8A ? var_core_value_sigDD51(537) : "univer-mr-5\x20univer-bg-transparent\x20univer-py-4", E(var_core_value_sigF057, var_core_value_sig1F8A)),
        role: "tab",
        tabIndex: var_core_value_sigF057 ? 0 : -1,
        type: "button",
        onClick: () => var_core_value_sig9DAA[var_core_value_sigDD51(507)](var_core_value_sigFC87[var_core_value_sigDD51(1324)]),
        onKeyDown: var_core_value_sig186C => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig536D(var_core_value_sig186C, var_core_value_sig156F),
        children: [var_core_value_sigFC87[var_core_value_sigDD51(1614)], !var_core_value_sig1F8A && (0, i[var_core_value_sigDD51(922)])("span", {
          "aria-hidden": var_core_value_sigDD51(1582),
          className: (0, t[var_core_value_sigDD51(1916)])("univer-mx-auto\x20univer-mt-2\x20univer-block\x20univer-h-1\x20univer-w-1/2\x20univer-rounded-md", var_core_value_sigF057 ? "univer-bg-primary-600" : var_core_value_sigDD51(538))
        })]
      }, var_core_value_sigFC87[var_core_value_sigDD51(1324)]);
    })
  });
}
function re(var_core_value_sig2B74) {
  let var_core_value_sig0483 = var_core_value_sig2B74.id + ox3eeb37(1144);
  return (0, i[ox3eeb37(1557)])(ox3eeb37(1837), {
    id: var_core_value_sig2B74.id,
    "aria-labelledby": var_core_value_sig2B74.id + "-tab\x20" + var_core_value_sig0483,
    className: (0, t[ox3eeb37(1916)])("univer-min-h-0\x20univer-flex-1\x20univer-overflow-y-auto\x20univer-overscroll-contain", var_core_value_sig2B74[ox3eeb37(994)]),
    role: ox3eeb37(1697),
    children: [(0, i[ox3eeb37(922)])("h2", {
      id: var_core_value_sig0483,
      className: ox3eeb37(911),
      children: var_core_value_sig2B74.label
    }), var_core_value_sig2B74[ox3eeb37(1492)]]
  });
}
function ie(var_core_value_sig4A48) {
  return (0, i[ox48d70d(922)])("div", {
    className: ox48d70d(1424),
    children: var_core_value_sig4A48[ox48d70d(1703)]
  });
}
const ae = (0, r.createContext)(null),
  oe = (0, r.createContext)(null);
function se() {
  let var_core_value_sigD170 = (0, r[ox742e0a(1443)])(ae);
  if (!var_core_value_sigD170) throw Error(ox742e0a(1657));
  return var_core_value_sigD170;
}
function ce() {
  let var_core_value_sig90E5 = (0, r[ox26507a(1443)])(oe);
  if (!var_core_value_sig90E5) throw Error("ChartSectionAccordion\x20child\x20must\x20be\x20used\x20inside\x20ChartSectionAccordionItem");
  return var_core_value_sig90E5;
}
function le(var_core_value_sig7000) {
  return (0, i[ox309223(922)])(ae[ox309223(1838)], {
    value: {
      onChange: var_core_value_sig7000.onChange,
      value: var_core_value_sig7000[ox309223(1324)]
    },
    children: (0, i[ox309223(922)])(ox309223(1998), {
      className: var_core_value_sig7000[ox309223(994)],
      "data-chart-section-accordion": true,
      children: var_core_value_sig7000[ox309223(1492)]
    })
  });
}
function ue(var_core_value_sigD7C5) {
  let var_core_value_sig3633 = se(),
    var_core_value_sig1DF5 = (0, r[ox408ce6(1243)])(),
    var_core_value_sig90A3 = var_core_value_sig1DF5 + ox408ce6(1442),
    var_core_value_sig28BE = var_core_value_sig1DF5 + "-content";
  return (0, i[ox408ce6(922)])(oe[ox408ce6(1838)], {
    value: {
      contentId: var_core_value_sig28BE,
      id: var_core_value_sigD7C5.id,
      open: var_core_value_sig3633[ox408ce6(1324)] === var_core_value_sigD7C5.id,
      triggerId: var_core_value_sig90A3
    },
    children: (0, i[ox408ce6(922)])(ox408ce6(1998), {
      className: var_core_value_sigD7C5[ox408ce6(994)],
      "data-chart-section-item": var_core_value_sigD7C5.id,
      children: var_core_value_sigD7C5[ox408ce6(1492)]
    })
  });
}
function de(var_core_value_sig0224) {
  let var_core_value_sig854B = se(),
    var_core_value_sig1FF6 = ce();
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig13CF(var_core_value_sig72F6) {
    var var_core_value_sig9FBA;
    let var_core_value_sigFE01 = (var_core_value_sig9FBA = var_core_value_sig72F6[ox43f402(728)].closest(ox43f402(916))) == null ? undefined : var_core_value_sig9FBA[ox43f402(778)](ox43f402(1473));
    if (!(var_core_value_sigFE01 != null && var_core_value_sigFE01[ox43f402(1579)])) return;
    let var_core_value_sigA2CE = Array[ox43f402(2034)](var_core_value_sigFE01).indexOf(var_core_value_sig72F6[ox43f402(728)]),
      var_core_value_sig1975 = var_core_value_sigA2CE;
    if (var_core_value_sig72F6[ox43f402(1198)] === ox43f402(1630)) var_core_value_sig1975 = var_core_value_sigA2CE === 0 ? var_core_value_sigFE01[ox43f402(1579)] - 1 : var_core_value_sigA2CE - 1;else {
      if (var_core_value_sig72F6[ox43f402(1198)] === ox43f402(579)) var_core_value_sig1975 = var_core_value_sigA2CE === var_core_value_sigFE01[ox43f402(1579)] - 1 ? 0 : var_core_value_sigA2CE + 1;else {
        if (var_core_value_sig72F6[ox43f402(1198)] === ox43f402(1028)) var_core_value_sig1975 = 0;else {
          if (var_core_value_sig72F6.key === ox43f402(1270)) var_core_value_sig1975 = var_core_value_sigFE01.length - 1;else return;
        }
      }
    }
    var_core_value_sig72F6[ox43f402(1586)](), var_core_value_sigFE01[ox43f402(1720)](var_core_value_sig1975).focus();
  }
  return (0, i[ox2a6bf1(1557)])("button", {
    id: var_core_value_sig1FF6[ox2a6bf1(1027)],
    "aria-controls": var_core_value_sig1FF6[ox2a6bf1(512)],
    "aria-expanded": var_core_value_sig1FF6[ox2a6bf1(601)],
    className: (0, t[ox2a6bf1(1916)])(ox2a6bf1(1260), var_core_value_sig1FF6[ox2a6bf1(601)] ? ox2a6bf1(846) : ox2a6bf1(538), var_core_value_sig0224.className),
    "data-chart-section-trigger": true,
    type: ox2a6bf1(1204),
    onClick: () => var_core_value_sig854B.onChange(var_core_value_sig1FF6[ox2a6bf1(601)] ? null : var_core_value_sig1FF6.id),
    onKeyDown: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig13CF,
    children: [(0, i[ox2a6bf1(922)])(n.DownIcon, {
      "aria-hidden": ox2a6bf1(1582),
      className: (0, t[ox2a6bf1(1916)])(ox2a6bf1(961), var_core_value_sig1FF6.open ? "univer-rotate-0" : "-univer-rotate-90\x20rtl:univer-rotate-90")
    }), var_core_value_sig0224.children]
  });
}
function fe(var_core_value_sig3A41) {
  let var_core_value_sig269A = ce();
  return (0, i[ox49ba7d(922)])(ox49ba7d(1998), {
    id: var_core_value_sig269A[ox49ba7d(512)],
    "aria-labelledby": var_core_value_sig269A[ox49ba7d(1027)],
    className: (0, t.clsx)(ox49ba7d(1413), var_core_value_sig3A41[ox49ba7d(994)]),
    "data-chart-section-content": true,
    hidden: !var_core_value_sig269A[ox49ba7d(601)],
    role: ox49ba7d(493),
    children: var_core_value_sig3A41[ox49ba7d(1492)]
  });
}
function pe() {
  let var_core_value_sigBF53 = (0, o.useDependency)(a[ox5cb563(1954)]);
  return {
    onFocus: (0, r[ox5cb563(1365)])(() => var_core_value_sigBF53[ox5cb563(1841)](a[ox5cb563(551)], true), [var_core_value_sigBF53]),
    onBlur: (0, r[ox5cb563(1365)])(() => var_core_value_sigBF53[ox5cb563(1841)](a[ox5cb563(551)], false), [var_core_value_sigBF53])
  };
}
function me(var_core_value_sigD9BB) {
  return var_core_value_sigD9BB == null ? "" : String(var_core_value_sigD9BB);
}
function he(var_core_value_sigF549) {
  let var_core_value_sigC125 = var_core_value_sigF549[ox1ab6f3(1342)]();
  return var_core_value_sigC125 === "" ? null : /^(?:true|false)$/i[ox1ab6f3(1208)](var_core_value_sigC125) ? var_core_value_sigC125[ox1ab6f3(898)]() === ox1ab6f3(1582) : /^-?(?:\d+|\d*\.\d+)$/[ox1ab6f3(1208)](var_core_value_sigC125) ? Number(var_core_value_sigC125) : var_core_value_sigF549;
}
function ge(var_core_value_sigB63D, var_core_value_sig8255 = 1, var_core_value_sigBFC7 = 1) {
  let var_core_value_sig933F = Math[ox4c1839(628)](var_core_value_sigBFC7, 0, ...var_core_value_sigB63D[ox4c1839(1285)](var_core_value_sig6EA1 => var_core_value_sig6EA1.length)),
    var_core_value_sig29DE = Math.max(var_core_value_sig8255, var_core_value_sigB63D[ox4c1839(1579)]);
  return Array[ox4c1839(2034)]({
    length: var_core_value_sig29DE
  }, (var_core_value_sig029F, var_core_value_sig3767) => {
    let var_core_value_sig670B = var_core_value_sigB63D[var_core_value_sig3767] ?? [];
    return Array.from({
      length: var_core_value_sig933F
    }, (var_core_value_sigD955, var_core_value_sig48BD) => var_core_value_sig670B[var_core_value_sig48BD] ?? null);
  });
}
function _e(var_core_value_sig4AFB) {
  var var_core_value_sigC7EA;
  let var_core_value_sigDAB9 = ge(var_core_value_sig4AFB),
    var_core_value_sig9CF7 = ((var_core_value_sigC7EA = var_core_value_sigDAB9[0]) == null ? undefined : var_core_value_sigC7EA[ox18effa(1579)]) ?? 1;
  return [...var_core_value_sigDAB9, Array[ox18effa(2034)]({
    length: var_core_value_sig9CF7
  }, () => null)];
}
function ve(var_core_value_sigCCE5) {
  return ge(var_core_value_sigCCE5)[ox1e8eae(1285)](var_core_value_sig6912 => [...var_core_value_sig6912, null]);
}
function ye(var_core_value_sig5933) {
  return var_core_value_sig5933[ox546208(1399)](var_core_value_sigE235 => var_core_value_sigE235[ox546208(1399)](var_core_value_sig429F => var_core_value_sig429F != null && String(var_core_value_sig429F)[ox546208(1342)]() !== ""));
}
function be(var_core_value_sig884B) {
  var var_core_value_sig4E30;
  let var_core_value_sig9730 = ge(var_core_value_sig884B);
  if (!ye(var_core_value_sig9730)) return [];
  let var_core_value_sig8E4A = var_core_value_sig9730[ox245e20(1579)] - 1;
  for (; var_core_value_sig8E4A >= 0 && var_core_value_sig9730[var_core_value_sig8E4A][ox245e20(799)](var_core_value_sigF62A => var_core_value_sigF62A == null || String(var_core_value_sigF62A).trim() === "");) var_core_value_sig8E4A--;
  let var_core_value_sig300B = (((var_core_value_sig4E30 = var_core_value_sig9730[0]) == null ? undefined : var_core_value_sig4E30[ox245e20(1579)]) ?? 0) - 1;
  for (; var_core_value_sig300B >= 0 && var_core_value_sig9730[ox245e20(799)](var_core_value_sig8178 => var_core_value_sig8178[var_core_value_sig300B] == null || String(var_core_value_sig8178[var_core_value_sig300B]).trim() === "");) var_core_value_sig300B--;
  return var_core_value_sig9730[ox245e20(1980)](0, var_core_value_sig8E4A + 1).map(var_core_value_sig7664 => var_core_value_sig7664[ox245e20(1980)](0, var_core_value_sig300B + 1));
}
function xe(var_core_value_sig8457) {
  var var_core_value_sigB30D;
  return var_core_value_sig8457.length > 1 || (((var_core_value_sigB30D = var_core_value_sig8457[0]) == null ? undefined : var_core_value_sigB30D[oxd5ecfb(1579)]) ?? 0) > 1;
}
function Se(var_core_value_sigDB33) {
  if (!var_core_value_sigDB33 || typeof DOMParser > "u") return "";
  let var_core_value_sig6C8C = new DOMParser()[ox2889c8(1525)](var_core_value_sigDB33, "text/html");
  return Array[ox2889c8(2034)](var_core_value_sig6C8C.querySelectorAll("tr")).map(var_core_value_sig2281 => Array.from(var_core_value_sig2281[ox2889c8(778)](ox2889c8(1350)))[ox2889c8(1285)](var_core_value_sigE9ED => {
    const var_core_value_sigB577 = ox2889c8;
    var var_core_value_sig9572;
    return ((var_core_value_sig9572 = var_core_value_sigE9ED[var_core_value_sigB577(1079)]) == null ? undefined : var_core_value_sig9572[var_core_value_sigB577(1342)]()) ?? "";
  }))[ox2889c8(1573)](var_core_value_sig5E86 => var_core_value_sig5E86[ox2889c8(1579)] > 0)[ox2889c8(1285)](var_core_value_sig6998 => var_core_value_sig6998[ox2889c8(766)]("\x09"))[ox2889c8(766)]("\x0a");
}
function Ce(var_core_value_sig7A5E, var_core_value_sig838E, var_core_value_sig9A5B = 1, var_core_value_sigC860 = 1) {
  let var_core_value_sigE64C = be(var_core_value_sig838E(var_core_value_sig7A5E));
  return xe(var_core_value_sigE64C) ? ge(var_core_value_sigE64C, var_core_value_sig9A5B, var_core_value_sigC860) : null;
}
function we(var_core_value_sigF39B) {
  let {
      minColumns: var_core_value_sig9B01 = 2,
      minRows: var_core_value_sigA724 = 2,
      onChange: var_core_value_sig9B88,
      parsePastedText: var_core_value_sig992A,
      values: var_core_value_sig6281
    } = var_core_value_sigF39B,
    var_core_value_sig385E = (0, o[ox529659(858)])(a[ox529659(1419)]),
    var_core_value_sig10D3 = pe(),
    var_core_value_sig41F2 = var_core_value_sig385E.t(ox529659(682)),
    var_core_value_sig32DD = (0, r[ox529659(1687)])(() => ge(var_core_value_sig6281, var_core_value_sigA724, var_core_value_sig9B01), [var_core_value_sig9B01, var_core_value_sigA724, var_core_value_sig6281]),
    var_core_value_sig7A88 = (var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sigE94C) => {
      let var_core_value_sig6D47 = var_core_value_sig32DD.map(var_core_value_sigD873 => [...var_core_value_sigD873]);
      var_core_value_sig6D47[var_core_value_sigF639][var_core_value_sigEAE5] = he(var_core_value_sigE94C), var_core_value_sig9B88(var_core_value_sig6D47);
    };
  return (0, i[ox529659(1557)])(ox529659(1998), {
    className: ox529659(1556),
    onPaste: var_core_value_sigCB82 => {
      const var_core_value_sigCF4E = ox529659;
      let var_core_value_sig6CAD = Ce(var_core_value_sigCB82[var_core_value_sigCF4E(1817)][var_core_value_sigCF4E(836)](var_core_value_sigCF4E(610)) || Se(var_core_value_sigCB82[var_core_value_sigCF4E(1817)].getData("text/html")), var_core_value_sig992A, var_core_value_sigA724, var_core_value_sig9B01);
      var_core_value_sig6CAD && (var_core_value_sigCB82.preventDefault(), var_core_value_sig9B88(var_core_value_sig6CAD));
    },
    children: [var_core_value_sig41F2 && (0, i.jsx)(ox529659(1998), {
      className: ox529659(619),
      children: var_core_value_sig41F2
    }), (0, i[ox529659(922)])("div", {
      className: ox529659(1589),
      children: (0, i[ox529659(922)])(ox529659(698), {
        className: "univer-w-full\x20univer-border-collapse\x20univer-text-sm",
        children: (0, i[ox529659(922)])(ox529659(1384), {
          children: var_core_value_sig32DD.map((var_core_value_sig8CF5, var_core_value_sigDDD7) => (0, i[ox529659(922)])("tr", {
            children: var_core_value_sig8CF5[ox529659(1285)]((var_core_value_sigA12B, var_core_value_sigF230) => (0, i[ox529659(922)])("td", {
              className: ox529659(1068),
              children: (0, i[ox529659(922)])(ox529659(1267), {
                value: me(var_core_value_sigA12B),
                ...var_core_value_sig10D3,
                onChange: var_core_value_sig2AD8 => var_core_value_sig7A88(var_core_value_sigDDD7, var_core_value_sigF230, var_core_value_sig2AD8[ox529659(2036)].value),
                className: "univer-box-border\x20univer-h-9\x20univer-w-full\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20univer-text-sm\x20univer-text-gray-900\x20univer-outline-none\x20focus:univer-bg-primary-50\x20dark:!univer-text-gray-0\x20dark:focus:!univer-bg-gray-800"
              })
            }, var_core_value_sigDDD7 + "-" + var_core_value_sigF230))
          }, var_core_value_sigDDD7))
        })
      })
    }), (0, i.jsxs)(ox529659(1998), {
      className: ox529659(1230),
      children: [(0, i[ox529659(922)])(t[ox529659(1420)], {
        type: "button",
        size: ox529659(1499),
        variant: "default",
        onClick: () => var_core_value_sig9B88(_e(var_core_value_sig32DD)),
        children: var_core_value_sig385E.t("chart-ui.inlineTable.addRow")
      }), (0, i[ox529659(922)])(t.Button, {
        type: "button",
        size: ox529659(1499),
        variant: ox529659(1113),
        onClick: () => var_core_value_sig9B88(ve(var_core_value_sig32DD)),
        children: var_core_value_sig385E.t(ox529659(1536))
      })]
    })]
  });
}
function Te(var_core_value_sig6CFC, var_core_value_sig3EC0) {
  return function (var_core_value_sigB2CE, var_core_value_sig443C) {
    var_core_value_sig3EC0(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig6CFC);
  };
}
function Ee(var_core_value_sigEA69, var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sigC481) {
  var var_core_value_sig27B7 = arguments[ox4921f5(1579)],
    var_core_value_sig2DAD = var_core_value_sig27B7 < 3 ? var_core_value_sigF42A : var_core_value_sigC481 === null ? var_core_value_sigC481 = Object[ox4921f5(591)](var_core_value_sigF42A, var_core_value_sig898E) : var_core_value_sigC481,
    var_core_value_sig00DE;
  if (typeof Reflect == "object" && typeof Reflect.decorate == ox4921f5(1182)) var_core_value_sig2DAD = Reflect.decorate(var_core_value_sigEA69, var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sigC481);else {
    for (var var_core_value_sigEF7C = var_core_value_sigEA69[ox4921f5(1579)] - 1; var_core_value_sigEF7C >= 0; var_core_value_sigEF7C--) (var_core_value_sig00DE = var_core_value_sigEA69[var_core_value_sigEF7C]) && (var_core_value_sig2DAD = (var_core_value_sig27B7 < 3 ? var_core_value_sig00DE(var_core_value_sig2DAD) : var_core_value_sig27B7 > 3 ? var_core_value_sig00DE(var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sig2DAD) : var_core_value_sig00DE(var_core_value_sigF42A, var_core_value_sig898E)) || var_core_value_sig2DAD);
  }
  return var_core_value_sig27B7 > 3 && var_core_value_sig2DAD && Object[ox4921f5(1537)](var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sig2DAD), var_core_value_sig2DAD;
}
let De = class {
  constructor(var_core_value_sig39B1) {
    this[ox455a33(1140)] = var_core_value_sig39B1;
  }
  bind(var_core_value_sig210D, var_core_value_sigB4B4) {
    return new Oe(var_core_value_sig210D, var_core_value_sigB4B4, this[ox43f9ca(1140)]);
  }
};
De = Ee([Te(0, (0, a.Inject)(c.IReferencedUnitCatalogService))], De);
var Oe = class extends a.Disposable {
  constructor(var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71) {
    super(), this[ox3528f0(1282)] = var_core_value_sig63F3, this[ox3528f0(1140)] = var_core_value_sig6A71, b(this, ox3528f0(1677), 0), b(this, ox3528f0(535), 0), this[ox3528f0(774)](var_core_value_sigD407[ox3528f0(1820)][ox3528f0(689)](var_core_value_sig09B8 => {
      const var_core_value_sig6F91 = ox3528f0;
      let var_core_value_sigF9C7 = ++this[var_core_value_sig6F91(535)];
      this[var_core_value_sig6F91(1666)](var_core_value_sig09B8, var_core_value_sigF9C7).catch(() => undefined);
    })), this[ox3528f0(774)](var_core_value_sigD407[ox3528f0(1819)][ox3528f0(689)](var_core_value_sig8895 => {
      const var_core_value_sigC80B = ox3528f0;
      let var_core_value_sig284F = var_core_value_sig8895[var_core_value_sigC80B(1660)];
      if (!var_core_value_sig284F || !this[var_core_value_sigC80B(1282)][var_core_value_sigC80B(1227)]) {
        var_core_value_sigD407[var_core_value_sigC80B(1202)](null);
        return;
      }
      this[var_core_value_sigC80B(816)](var_core_value_sigD407, var_core_value_sig284F)[var_core_value_sigC80B(1716)](() => undefined);
    }));
  }
  async _consumeSelection(var_core_value_sig3BF6, var_core_value_sig38CE) {
    let var_core_value_sig62B7 = var_core_value_sig3BF6[ox37f51d(1201)] === s[ox37f51d(1751)][ox37f51d(670)] ? (await this[ox37f51d(1140)][ox37f51d(1460)](var_core_value_sig3BF6[ox37f51d(1234)]))[ox37f51d(1704)][var_core_value_sig3BF6[ox37f51d(1250)]] : undefined;
    if (this._disposed || var_core_value_sig38CE !== this[ox37f51d(535)]) return;
    let var_core_value_sig37A8 = ke(var_core_value_sig3BF6, this[ox37f51d(1282)][ox37f51d(1227)], var_core_value_sig62B7 ? {
      tableId: var_core_value_sig62B7.id,
      tableName: var_core_value_sig62B7[ox37f51d(1391)]
    } : undefined);
    var_core_value_sig37A8 && this[ox37f51d(1282)][ox37f51d(901)](var_core_value_sig37A8);
  }
  async _restoreDecoration(var_core_value_sigA90D, var_core_value_sig7A3C) {
    let var_core_value_sig0511 = ++this[ox4114ce(1677)],
      var_core_value_sig1F44 = this[ox4114ce(1282)][ox4114ce(1227)],
      var_core_value_sigCB04 = var_core_value_sig1F44 == null ? undefined : var_core_value_sig1F44[ox4114ce(1795)][ox4114ce(520)];
    if (!var_core_value_sig1F44 || !je(var_core_value_sig1F44.ref, var_core_value_sig7A3C[ox4114ce(1795)])) {
      var_core_value_sigA90D[ox4114ce(1202)](null);
      return;
    }
    if ((var_core_value_sigCB04 == null ? undefined : var_core_value_sigCB04.kind) === ox4114ce(1921) && typeof var_core_value_sigCB04[ox4114ce(1795)] == "string") {
      this._restoreSheetDecoration(var_core_value_sigA90D, var_core_value_sig7A3C, {
        ref: var_core_value_sigCB04[ox4114ce(1795)],
        sheetId: typeof var_core_value_sigCB04[ox4114ce(1862)] == ox4114ce(2002) ? var_core_value_sigCB04[ox4114ce(1862)] : undefined,
        sheetName: typeof var_core_value_sigCB04.sheetName == "string" ? var_core_value_sigCB04.sheetName : undefined
      });
      return;
    }
    if ((var_core_value_sigCB04 == null ? undefined : var_core_value_sigCB04.kind) !== ox4114ce(698) || typeof var_core_value_sigCB04[ox4114ce(1724)] != ox4114ce(2002)) {
      var_core_value_sigA90D[ox4114ce(1202)](null);
      return;
    }
    await this[ox4114ce(1408)](var_core_value_sigA90D, var_core_value_sig7A3C, {
      tableId: typeof var_core_value_sigCB04[ox4114ce(1250)] == "string" ? var_core_value_sigCB04[ox4114ce(1250)] : undefined,
      tableName: var_core_value_sigCB04.tableName
    }, var_core_value_sig0511);
  }
  _restoreSheetDecoration(var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A) {
    let var_core_value_sigF79C = (0, l[ox3abbf2(1335)])(var_core_value_sigF39A[ox3abbf2(1795)]);
    var_core_value_sig947E.setDecoration({
      kind: s[ox3abbf2(1751)].SheetRange,
      unit: var_core_value_sig4545,
      selections: [{
        primary: null,
        range: var_core_value_sigF79C[ox3abbf2(1921)]
      }],
      sheetId: var_core_value_sigF39A[ox3abbf2(1862)] ?? "",
      sheetName: var_core_value_sigF39A[ox3abbf2(1171)] ?? var_core_value_sigF79C[ox3abbf2(1171)]
    });
  }
  async _restoreBaseDecoration(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786) {
    var var_core_value_sigC0D9;
    let var_core_value_sigF051 = await this[ox2fb825(1140)][ox2fb825(1460)](var_core_value_sig7658);
    if (this[ox2fb825(659)] || var_core_value_sigC786 !== this[ox2fb825(1677)]) return;
    let var_core_value_sig5825 = var_core_value_sigDCF5.tableId ? var_core_value_sigF051[ox2fb825(1704)][var_core_value_sigDCF5[ox2fb825(1250)]] : Object[ox2fb825(1596)](var_core_value_sigF051.tables)[ox2fb825(1507)](var_core_value_sigE154 => var_core_value_sigE154[ox2fb825(1391)] === var_core_value_sigDCF5[ox2fb825(1724)]),
      var_core_value_sig4EB7 = (var_core_value_sig5825 == null ? undefined : var_core_value_sig5825[ox2fb825(1189)][0]) ?? Object[ox2fb825(1994)]((var_core_value_sig5825 == null ? undefined : var_core_value_sig5825[ox2fb825(1893)]) ?? {})[0],
      var_core_value_sig73AF = var_core_value_sig5825 == null || (var_core_value_sigC0D9 = var_core_value_sig5825[ox2fb825(742)]) == null ? undefined : var_core_value_sigC0D9[0],
      var_core_value_sig548A = var_core_value_sig5825 == null ? undefined : var_core_value_sig5825.fieldOrder[0];
    if (!var_core_value_sig5825 || !var_core_value_sig4EB7 || !var_core_value_sig73AF || !var_core_value_sig548A) {
      var_core_value_sig2E54[ox2fb825(1202)](null);
      return;
    }
    var_core_value_sig2E54[ox2fb825(1202)]({
      kind: s[ox2fb825(1751)][ox2fb825(670)],
      unit: var_core_value_sig7658,
      selection: {
        fieldId: var_core_value_sig548A,
        recordId: var_core_value_sig73AF,
        tableId: var_core_value_sig5825.id,
        type: "grid-cell",
        viewId: var_core_value_sig4EB7
      }
    });
  }
};
function ke(var_core_value_sig07E7, var_core_value_sig6005, var_core_value_sig25A4) {
  let var_core_value_sigB591 = var_core_value_sig07E7[ox239b7c(1201)] === s[ox239b7c(1751)][ox239b7c(747)] ? Ae(var_core_value_sig07E7) : var_core_value_sig25A4 ? {
    kind: ox239b7c(698),
    tableId: var_core_value_sig25A4.tableId,
    tableName: var_core_value_sig25A4[ox239b7c(1724)]
  } : null;
  if (!var_core_value_sigB591) return null;
  let var_core_value_sigB272 = var_core_value_sig6005 && je(var_core_value_sig6005[ox239b7c(1795)], var_core_value_sig07E7[ox239b7c(1234)][ox239b7c(1795)]) ? var_core_value_sig6005 == null ? undefined : var_core_value_sig6005[ox239b7c(1795)][ox239b7c(1009)] : var_core_value_sig07E7.unit[ox239b7c(1795)][ox239b7c(1009)];
  return e[ox239b7c(738)][ox239b7c(1452)]({
    file: var_core_value_sig07E7[ox239b7c(1234)][ox239b7c(1795)][ox239b7c(1701)],
    part: var_core_value_sigB591,
    unit: {
      ...var_core_value_sig07E7[ox239b7c(1234)].ref[ox239b7c(1234)]
    },
    ...(var_core_value_sigB272 ? {
      extensions: var_core_value_sigB272
    } : {})
  });
}
function Ae(var_core_value_sig6F52) {
  let var_core_value_sig09C4 = var_core_value_sig6F52.ranges[0];
  return var_core_value_sig09C4 ? {
    kind: ox5820c8(1921),
    range: (0, l[ox5820c8(1607)])(var_core_value_sig09C4),
    ref: (0, l[ox5820c8(1392)])(var_core_value_sig6F52[ox5820c8(1171)], var_core_value_sig09C4),
    sheetId: var_core_value_sig6F52[ox5820c8(1862)],
    sheetName: var_core_value_sig6F52[ox5820c8(1171)]
  } : null;
}
function je(var_core_value_sig8E3E, var_core_value_sigC3D3) {
  return (0, c[ox1d46ea(1620)])(var_core_value_sig8E3E) === (0, c[ox1d46ea(1620)])(var_core_value_sigC3D3);
}
const Me = {
  status: e.ChartDataSourceRuntimeStatus["UNAVAILABLE"]
};
function Ne(var_core_value_sig1451) {
  let {
      mode: var_core_value_sigAD57,
      onModeChange: var_core_value_sig58A8,
      onPreviewChange: var_core_value_sigEC1A
    } = var_core_value_sig1451,
    var_core_value_sigBDED = (0, o[ox5580aa(858)])(a[ox5580aa(1419)]),
    var_core_value_sig4BFF = (0, o[ox5580aa(858)])(e[ox5580aa(1597)]),
    [var_core_value_sig40E7, var_core_value_sigEDBA] = (0, r[ox5580aa(1825)])(Fe(var_core_value_sig1451[ox5580aa(1227)])),
    var_core_value_sigE863 = (0, r[ox5580aa(684)])(var_core_value_sigEC1A),
    var_core_value_sig04B4 = (0, r[ox5580aa(1243)])(),
    var_core_value_sig1C07 = var_core_value_sig04B4 + "-inline-panel",
    var_core_value_sig93D6 = var_core_value_sig04B4 + "-referenced-panel";
  return var_core_value_sigE863[ox5580aa(1185)] = var_core_value_sigEC1A, (0, r[ox5580aa(1989)])(() => {
    const var_core_value_sigE026 = ox5580aa;
    if (var_core_value_sigAD57 !== var_core_value_sigE026(1599) || !var_core_value_sig40E7) {
      var_core_value_sigE863[var_core_value_sigE026(1185)](null, Me);
      return;
    }
    let var_core_value_sig339E = var_core_value_sig4BFF[var_core_value_sigE026(1676)](var_core_value_sig40E7),
      var_core_value_sig7550 = var_core_value_sig339E[var_core_value_sigE026(1819)][var_core_value_sigE026(689)](var_core_value_sig4632 => {
        const var_core_value_sig12F2 = var_core_value_sigE026;
        var_core_value_sigE863[var_core_value_sig12F2(1185)](var_core_value_sig40E7, var_core_value_sig4632);
      });
    return () => {
      const var_core_value_sig2259 = var_core_value_sigE026;
      var_core_value_sig7550[var_core_value_sig2259(1715)](), var_core_value_sig339E[var_core_value_sig2259(1706)]();
    };
  }, [var_core_value_sigAD57, var_core_value_sig4BFF, var_core_value_sig40E7]), (0, i[ox5580aa(1557)])("div", {
    className: "univer-flex\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i[ox5580aa(922)])(ne, {
      ariaLabel: var_core_value_sigBDED.t(ox5580aa(2006)),
      className: ox5580aa(1637),
      items: [{
        label: var_core_value_sigBDED.t(ox5580aa(1890)),
        panelId: var_core_value_sig1C07,
        value: ox5580aa(1294)
      }, {
        label: var_core_value_sigBDED.t(ox5580aa(1396)),
        panelId: var_core_value_sig93D6,
        value: ox5580aa(1599)
      }],
      value: var_core_value_sigAD57,
      variant: "segmented",
      onChange: var_core_value_sig58A8
    }), (0, i[ox5580aa(922)])(ox5580aa(1998), {
      "aria-labelledby": (var_core_value_sigAD57 === ox5580aa(1294) ? var_core_value_sig1C07 : var_core_value_sig93D6) + ox5580aa(1083),
      className: "univer-flex\x20univer-min-h-0\x20univer-flex-1\x20univer-flex-col",
      id: var_core_value_sigAD57 === ox5580aa(1294) ? var_core_value_sig1C07 : var_core_value_sig93D6,
      role: ox5580aa(1697),
      children: var_core_value_sigAD57 === "inline" ? var_core_value_sig1451[ox5580aa(1149)] : (0, i[ox5580aa(922)])(Pe, {
        initialSource: var_core_value_sig40E7,
        onDataSourceChange: var_core_value_sigEDBA
      })
    })]
  });
}
function Pe(var_core_value_sigDD05) {
  let var_core_value_sig3932 = (0, o.useDependency)(s[ox4c918f(1063)]),
    var_core_value_sig48B2 = (0, o[ox4c918f(858)])(De),
    [var_core_value_sig57DF] = (0, r[ox4c918f(1825)])(() => var_core_value_sig3932[ox4c918f(1022)]({
      ...(var_core_value_sigDD05[ox4c918f(1227)] ? {
        initialRef: var_core_value_sigDD05[ox4c918f(1227)].ref
      } : {})
    }));
  return (0, r.useEffect)(() => {
    const var_core_value_sig2983 = ox4c918f;
    let var_core_value_sigE1B0 = var_core_value_sig48B2[var_core_value_sig2983(918)](var_core_value_sig57DF, {
      ...(var_core_value_sigDD05[var_core_value_sig2983(1227)] ? {
        initialSource: var_core_value_sigDD05[var_core_value_sig2983(1227)]
      } : {}),
      onDataSourceChange: var_core_value_sigDD05.onDataSourceChange
    });
    return () => var_core_value_sigE1B0.dispose();
  }, [var_core_value_sig48B2, var_core_value_sigDD05[ox4c918f(1227)], var_core_value_sigDD05[ox4c918f(901)], var_core_value_sig57DF]), (0, i.jsx)(s[ox4c918f(1966)][ox4c918f(1838)], {
    session: var_core_value_sig57DF,
    children: (0, i.jsxs)(s.ReferencedUnitViewer["Frame"], {
      className: ox4c918f(657),
      style: {
        height: ox4c918f(1592)
      },
      children: [(0, i[ox4c918f(922)])(s[ox4c918f(1966)][ox4c918f(548)], {}), (0, i[ox4c918f(922)])(s[ox4c918f(1966)][ox4c918f(1699)], {})]
    })
  });
}
function Fe(var_core_value_sigC985) {
  return var_core_value_sigC985 ? e[ox1d9d3b(738)].toReference(e[ox1d9d3b(738)].fromReference(var_core_value_sigC985)) : null;
}
const Ie = {
    PieOfPie: "pieOfPie",
    BarOfPie: "barOfPie"
  },
  Le = {
    AreaChartIcon: (0, i.jsx)(n.AreaChartIcon, {}),
    BarChartIcon: (0, i.jsx)(n.BarChartIcon, {}),
    BoxplotIcon: (0, i.jsx)(n.BoxplotIcon, {}),
    BubbleIcon: (0, i.jsx)(n.BubbleIcon, {}),
    CandlestickChartIcon: (0, i.jsx)(n.CandlestickChartIcon, {}),
    ChordChartIcon: (0, i.jsx)(n.ChordChartIcon, {}),
    CloudOutlineIcon: (0, i.jsx)(n.CloudOutlineIcon, {}),
    ColumnChartIcon: (0, i.jsx)(n.ColumnChartIcon, {}),
    ComboChartIcon: (0, i.jsx)(n.ComboChartIcon, {}),
    FunnelIcon: (0, i.jsx)(n.FunnelIcon, {}),
    GaugeChartIcon: (0, i.jsx)(n.GaugeChartIcon, {}),
    HeatmapIcon: (0, i.jsx)(n.HeatmapIcon, {}),
    HistogramChartIcon: (0, i.jsx)(n.HistogramChartIcon, {}),
    LineChartIcon: (0, i.jsx)(n.LineChartIcon, {}),
    PieChartIcon: (0, i.jsx)(n.PieChartIcon, {}),
    RadarChartIcon: (0, i.jsx)(n.RadarChartIcon, {}),
    RelationshipIcon: (0, i.jsx)(n.RelationshipIcon, {}),
    SankeyIcon: (0, i.jsx)(n.SankeyIcon, {}),
    ScatterChartIcon: (0, i.jsx)(n.ScatterChartIcon, {}),
    SunburstChartIcon: (0, i.jsx)(n.SunburstChartIcon, {}),
    TreemapChartIcon: (0, i.jsx)(n.TreemapChartIcon, {}),
    WaterfallChartIcon: (0, i.jsx)(n.WaterfallChartIcon, {})
  },
  Re = [{
    labelId: "line",
    value: e.ChartTypeBits["Line"],
    iconName: "LineChartIcon"
  }, {
    labelId: "column",
    value: e.ChartTypeBits["Column"],
    iconName: "ColumnChartIcon"
  }, {
    labelId: "columnStacked",
    value: e.ChartTypeBits["ColumnStacked"],
    iconName: "ColumnChartIcon"
  }, {
    labelId: "columnPercentStacked",
    value: e.ChartTypeBits["ColumnPercentStacked"],
    iconName: "ColumnChartIcon"
  }, {
    labelId: "bar",
    value: e.ChartTypeBits["Bar"],
    iconName: "BarChartIcon"
  }, {
    labelId: "barStacked",
    value: e.ChartTypeBits["BarStacked"],
    iconName: "BarChartIcon"
  }, {
    labelId: "barPercentStacked",
    value: e.ChartTypeBits["BarPercentStacked"],
    iconName: "BarChartIcon"
  }, {
    labelId: "pie",
    value: e.ChartTypeBits["Pie"],
    iconName: "PieChartIcon"
  }, {
    labelId: "donut",
    value: e.ChartTypeBits["Doughnut"],
    iconName: "PieChartIcon"
  }, {
    id: Ie.PieOfPie,
    labelId: "pieOfPie",
    value: e.ChartTypeBits["Pie"],
    pieSecondaryPlotType: e.PieSecondaryPlotType["Pie"],
    iconName: "PieChartIcon"
  }, {
    id: Ie.BarOfPie,
    labelId: "barOfPie",
    value: e.ChartTypeBits["Pie"],
    pieSecondaryPlotType: e.PieSecondaryPlotType["Bar"],
    iconName: "PieChartIcon"
  }, {
    labelId: "area",
    value: e.ChartTypeBits["Area"],
    iconName: "AreaChartIcon"
  }, {
    labelId: "areaStacked",
    value: e.ChartTypeBits["AreaStacked"],
    iconName: "AreaChartIcon"
  }, {
    labelId: "areaPercentStacked",
    value: e.ChartTypeBits["AreaPercentStacked"],
    iconName: "AreaChartIcon"
  }, {
    labelId: "radar",
    value: e.ChartTypeBits["Radar"],
    iconName: "RadarChartIcon"
  }, {
    labelId: "scatter",
    value: e.ChartTypeBits["Scatter"],
    iconName: "ScatterChartIcon"
  }, {
    labelId: "combination",
    value: e.ChartTypeBits["Combination"],
    iconName: "ComboChartIcon"
  }, {
    labelId: "wordCloud",
    value: e.ChartTypeBits["WordCloud"],
    iconName: "CloudOutlineIcon"
  }, {
    labelId: "funnel",
    value: e.ChartTypeBits["Funnel"],
    iconName: "FunnelIcon"
  }, {
    labelId: "bubble",
    value: e.ChartTypeBits["Bubble"],
    iconName: "BubbleIcon"
  }, {
    labelId: "relation",
    value: e.ChartTypeBits["Relation"],
    iconName: "RelationshipIcon"
  }, {
    labelId: "waterfall",
    value: e.ChartTypeBits["Waterfall"],
    iconName: "WaterfallChartIcon"
  }, {
    labelId: "pareto",
    value: e.ChartTypeBits["Pareto"],
    iconName: "ComboChartIcon"
  }, {
    labelId: "sankey",
    value: e.ChartTypeBits["Sankey"],
    iconName: "SankeyIcon"
  }, {
    labelId: "heatmap",
    value: e.ChartTypeBits["Heatmap"],
    iconName: "HeatmapIcon"
  }, {
    labelId: "boxplot",
    value: e.ChartTypeBits["Boxplot"],
    iconName: "BoxplotIcon"
  }, {
    labelId: "candlestick",
    value: e.ChartTypeBits["Candlestick"],
    iconName: "CandlestickChartIcon"
  }, {
    labelId: "histogram",
    value: e.ChartTypeBits["Histogram"],
    iconName: "HistogramChartIcon"
  }, {
    labelId: "treemap",
    value: e.ChartTypeBits["Treemap"],
    iconName: "TreemapChartIcon"
  }, {
    labelId: "sunburst",
    value: e.ChartTypeBits["Sunburst"],
    iconName: "SunburstChartIcon"
  }, {
    labelId: "gauge",
    value: e.ChartTypeBits["Gauge"],
    iconName: "GaugeChartIcon"
  }, {
    labelId: "chord",
    value: e.ChartTypeBits["Chord"],
    iconName: "ChordChartIcon"
  }],
  ze = Object.fromEntries(Re.map(({
    iconName: var_core_value_sig8DA6,
    value: var_core_value_sigCA69
  }) => [var_core_value_sigCA69, Le[var_core_value_sig8DA6]]));
function Be(var_core_value_sigB77C, var_core_value_sig9AFF) {
  return (0, i[ox299ea9(1557)])(ox299ea9(1998), {
    className: ox299ea9(510),
    children: [(0, i.jsx)(ox299ea9(1998), {
      className: "univer-flex\x20univer-items-center\x20univer-text-base",
      children: var_core_value_sig9AFF
    }), (0, i[ox299ea9(922)])("div", {
      className: ox299ea9(1197),
      children: var_core_value_sigB77C
    })]
  });
}
function Ve(var_core_value_sig3545, var_core_value_sig5EE4 = var_core_value_sig9E2F => var_core_value_sig9E2F) {
  return var_core_value_sig3545[ox591794(1285)](var_core_value_sigD4FF => ({
    value: var_core_value_sigD4FF.id ?? String(var_core_value_sigD4FF[ox591794(1324)]),
    chartType: var_core_value_sigD4FF[ox591794(1324)],
    pieSecondaryPlotType: var_core_value_sigD4FF[ox591794(1978)],
    label: Be(var_core_value_sig5EE4(var_core_value_sigD4FF.label), var_core_value_sigD4FF[ox591794(534)] ?? ze[var_core_value_sigD4FF[ox591794(1324)]])
  }));
}
function He(var_core_value_sig7EAB) {
  return (0, i[ox3410bb(922)])(ox3410bb(1998), {
    className: ox3410bb(1510),
    children: var_core_value_sig7EAB[ox3410bb(1285)]((var_core_value_sig1E5B, var_core_value_sigB680) => (0, i[ox3410bb(922)])("div", {
      className: "univer-flex\x20univer-h-4\x20univer-flex-1\x20univer-items-center",
      style: {
        backgroundColor: var_core_value_sig1E5B
      }
    }, var_core_value_sig1E5B + "-" + var_core_value_sigB680))
  });
}
function Ue(var_core_value_sig56B9, var_core_value_sig90CF) {
  return var_core_value_sig56B9[ox3888c4(1285)](var_core_value_sig1F64 => ({
    value: var_core_value_sig1F64,
    label: He(var_core_value_sig90CF(var_core_value_sig1F64))
  }));
}
const We = [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0],
  Ge = [0, 1, 2, 4, 8],
  Ke = [0, 2, 5, 7, 10, 14],
  qe = [6, 12, 18, 24],
  Je = [1, 2, 4, 8];
function Ye(var_core_value_sigA386 = We) {
  return var_core_value_sigA386[ox54f336(1285)](var_core_value_sigDD1C => ({
    label: var_core_value_sigDD1C * 100 + "%",
    value: String(var_core_value_sigDD1C)
  }));
}
function Xe(var_core_value_sigCD6E) {
  return var_core_value_sigCD6E.map(var_core_value_sig2C39 => ({
    label: var_core_value_sig2C39 + "px",
    value: String(var_core_value_sig2C39)
  }));
}
function Ze(var_core_value_sigFD9D) {
  var var_core_value_sigA2A4;
  let {
      ariaLabel: var_core_value_sigA1AC,
      color: var_core_value_sig6180,
      compact: var_core_value_sigB17C = false,
      onChange: var_core_value_sigB93D
    } = var_core_value_sigFD9D,
    [var_core_value_sig69B6, var_core_value_sig708D] = (0, r[ox5bc936(1825)])(false),
    var_core_value_sig1ED2 = (0, o[ox5bc936(858)])(a[ox5bc936(1419)]),
    var_core_value_sig94C1 = typeof var_core_value_sig6180 == ox5bc936(2002) ? var_core_value_sig6180 : var_core_value_sig6180 == null || (var_core_value_sigA2A4 = var_core_value_sig6180[ox5bc936(1244)][0]) == null ? undefined : var_core_value_sigA2A4[ox5bc936(1393)],
    var_core_value_sigABAC = var_core_value_sig94C1 === ox5bc936(1957) || var_core_value_sig94C1 == null,
    var_core_value_sigFAE6 = (0, r[ox5bc936(1365)])(var_core_value_sigB7D1 => {
      var_core_value_sigB93D == null || var_core_value_sigB93D(var_core_value_sigB7D1), var_core_value_sig708D(false);
    }, [var_core_value_sigB93D]),
    var_core_value_sig06AC = var_core_value_sigB17C ? (0, i[ox5bc936(922)])(t[ox5bc936(1420)], {
      asChild: true,
      className: ox5bc936(1048),
      children: (0, i[ox5bc936(922)])("button", {
        "aria-label": var_core_value_sigA1AC,
        type: "button",
        children: (0, i[ox5bc936(922)])(ox5bc936(1904), {
          className: (0, t[ox5bc936(1916)])(ox5bc936(1116), t[ox5bc936(1190)]),
          style: {
            backgroundColor: var_core_value_sigABAC ? ox5bc936(1081) : var_core_value_sig94C1,
            height: 20,
            width: 20
          }
        })
      })
    }) : (0, i[ox5bc936(1557)])(ox5bc936(1204), {
      "aria-label": var_core_value_sigA1AC,
      className: (0, t[ox5bc936(1916)])(t[ox5bc936(1348)], "univer-w-full\x20!univer-min-w-0\x20univer-text-gray-500\x20hover:univer-border-primary-600\x20dark:!univer-text-gray-0", {
        "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900": var_core_value_sig69B6,
        "univer-cursor-pointer": !var_core_value_sig69B6
      }),
      type: ox5bc936(1204),
      children: [var_core_value_sigABAC ? (0, i[ox5bc936(922)])("div", {
        className: "univer-flex-1\x20univer-truncate\x20univer-text-sm\x20univer-text-gray-500\x20dark:!univer-text-gray-0",
        children: var_core_value_sig1ED2.t(ox5bc936(1990))
      }) : (0, i[ox5bc936(922)])(ox5bc936(1998), {
        className: (0, t.clsx)(ox5bc936(1474), t.borderClassName),
        style: {
          backgroundColor: var_core_value_sig94C1
        }
      }), (0, i[ox5bc936(922)])(n[ox5bc936(781)], {
        className: ox5bc936(1123)
      })]
    });
  return (0, i.jsx)(t[ox5bc936(761)], {
    overlay: (0, i.jsxs)(ox5bc936(1998), {
      className: ox5bc936(527),
      children: [(0, i[ox5bc936(922)])(t[ox5bc936(1420)], {
        className: "univer-w-full",
        onClick: () => var_core_value_sigFAE6(null),
        children: var_core_value_sig1ED2.t(ox5bc936(1569))
      }), (0, i[ox5bc936(922)])(t[ox5bc936(882)], {
        value: var_core_value_sigABAC ? ox5bc936(1081) : var_core_value_sig94C1,
        onChange: var_core_value_sigFAE6
      })]
    }),
    open: var_core_value_sig69B6,
    onOpenChange: var_core_value_sig708D,
    children: var_core_value_sig06AC
  });
}
function Qe(var_core_value_sig57E2) {
  let {
      value: var_core_value_sig01FC,
      menus: var_core_value_sig10FC,
      onSelect: var_core_value_sig5374,
      children: var_core_value_sigB66D
    } = var_core_value_sig57E2,
    [var_core_value_sigD0F0, var_core_value_sig8E31] = (0, r[oxb80bf7(1825)])(false);
  return (0, i[oxb80bf7(922)])(t[oxb80bf7(744)], {
    items: [{
      type: "radio",
      value: var_core_value_sig01FC,
      options: var_core_value_sig10FC,
      onSelect: var_core_value_sig64F0 => var_core_value_sig5374 == null ? undefined : var_core_value_sig5374(var_core_value_sig64F0)
    }],
    open: var_core_value_sigD0F0,
    onOpenChange: var_core_value_sig8E31,
    children: typeof var_core_value_sigB66D == oxb80bf7(1182) ? var_core_value_sigB66D(var_core_value_sigD0F0) : var_core_value_sigB66D
  });
}
const $e = [10, 12, 14, 16, 18, 20, 24, 30, 36];
function et(var_core_value_sig8339) {
  let {
      emptyLabel: var_core_value_sigA01E,
      isDefault: var_core_value_sigA49E = false,
      options: var_core_value_sig6DEB = $e,
      value: var_core_value_sig2F0D = e[ox379e96(1790)].textStyle[ox379e96(1359)],
      onChange: var_core_value_sigA41E,
      onReset: var_core_value_sig939C
    } = var_core_value_sig8339,
    var_core_value_sig5141 = var_core_value_sig6DEB[ox379e96(1285)](var_core_value_sig85B1 => ({
      label: String(var_core_value_sig85B1),
      value: String(var_core_value_sig85B1)
    })),
    var_core_value_sigA9E0 = var_core_value_sigA01E === undefined ? var_core_value_sig5141 : [{
      label: var_core_value_sigA01E,
      value: ""
    }, ...var_core_value_sig5141];
  return (0, i[ox379e96(922)])(Qe, {
    value: var_core_value_sigA49E ? "" : var_core_value_sig2F0D[ox379e96(694)](),
    menus: var_core_value_sigA9E0,
    onSelect: var_core_value_sig3141 => {
      if (var_core_value_sig3141 === "") {
        var_core_value_sig939C == null || var_core_value_sig939C();
        return;
      }
      var_core_value_sigA41E == null || var_core_value_sigA41E(Number(var_core_value_sig3141));
    },
    children: var_core_value_sig2162 => (0, i[ox379e96(1557)])(t[ox379e96(1420)], {
      size: ox379e96(1499),
      variant: ox379e96(502),
      type: "button",
      children: [(0, i[ox379e96(922)])(ox379e96(1904), {
        children: var_core_value_sigA49E ? var_core_value_sigA01E : var_core_value_sig2F0D
      }), (0, i.jsx)(n[ox379e96(781)], {
        className: (0, t[ox379e96(1916)])(ox379e96(1256), {
          "univer-rotate-180": var_core_value_sig2162
        })
      })]
    })
  });
}
function tt(var_core_value_sig751D) {
  let {
      color: var_core_value_sig2E9A,
      resetLabel: var_core_value_sigE105,
      onChange: var_core_value_sig0BD6,
      onReset: var_core_value_sig3070
    } = var_core_value_sig751D,
    [var_core_value_sigC66D, var_core_value_sig8EC5] = (0, r[ox225936(1825)])(false);
  return (0, i[ox225936(922)])(t[ox225936(761)], {
    overlay: (0, i.jsxs)("div", {
      className: ox225936(533),
      children: [var_core_value_sigE105 !== undefined && (0, i[ox225936(922)])(t.Button, {
        onClick: () => {
          var_core_value_sig3070 == null || var_core_value_sig3070(), var_core_value_sig8EC5(false);
        },
        children: var_core_value_sigE105
      }), (0, i[ox225936(922)])(t[ox225936(882)], {
        value: var_core_value_sig2E9A,
        onChange: var_core_value_sig2EAD => var_core_value_sig0BD6 == null ? undefined : var_core_value_sig0BD6(var_core_value_sig2EAD)
      })]
    }),
    open: var_core_value_sigC66D,
    onOpenChange: var_core_value_sig8EC5,
    children: (0, i[ox225936(1557)])(t.Button, {
      size: "small",
      variant: ox225936(502),
      type: "button",
      children: [(0, i[ox225936(922)])(n.FontColorDoubleIcon, {
        className: ox225936(1799),
        extend: {
          colorChannel1: var_core_value_sig2E9A ?? e[ox225936(1790)][ox225936(508)][ox225936(1393)]
        }
      }), (0, i[ox225936(922)])(n[ox225936(781)], {
        className: (0, t[ox225936(1916)])("univer-ml-1\x20univer-transition-transform\x20univer-duration-300", {
          "univer-rotate-180": var_core_value_sigC66D
        })
      })]
    })
  });
}
function nt(var_core_value_sig1056) {
  let {
      active: var_core_value_sig6EE5,
      type: var_core_value_sig9DD9,
      onClick: var_core_value_sig09AC
    } = var_core_value_sig1056,
    var_core_value_sig1613 = var_core_value_sig9DD9 === ox5291e1(1642) ? n[ox5291e1(1194)] : n.ItalicIcon;
  return (0, i[ox5291e1(922)])(t.Button, {
    size: ox5291e1(1499),
    variant: "ghost",
    "aria-pressed": !!var_core_value_sig6EE5,
    className: (0, t.clsx)({
      "univer-bg-gray-50\x20univer-text-primary-600": var_core_value_sig6EE5
    }),
    onClick: var_core_value_sig09AC,
    type: ox5291e1(1204),
    children: (0, i[ox5291e1(922)])(var_core_value_sig1613, {})
  });
}
function rt(var_core_value_sigADC6) {
  let var_core_value_sig4620 = (0, o[ox50497a(858)])(a[ox50497a(1419)]),
    {
      options: var_core_value_sig07FB,
      value: var_core_value_sig617E,
      onChange: var_core_value_sigC85E
    } = var_core_value_sigADC6,
    var_core_value_sig8293 = [{
      label: var_core_value_sig4620.t("chart-ui.common.textAlign.left"),
      value: e[ox50497a(1781)][ox50497a(1672)]
    }, {
      label: var_core_value_sig4620.t(ox50497a(660)),
      value: e.TextAlign[ox50497a(820)]
    }, {
      label: var_core_value_sig4620.t(ox50497a(1161)),
      value: e[ox50497a(1781)][ox50497a(477)]
    }];
  return (0, i[ox50497a(922)])(Qe, {
    value: (var_core_value_sig617E == null ? undefined : var_core_value_sig617E[ox50497a(694)]()) ?? "",
    menus: (var_core_value_sig07FB ?? var_core_value_sig8293).map(var_core_value_sig6774 => ({
      ...var_core_value_sig6774
    })),
    onSelect: var_core_value_sig340D => var_core_value_sigC85E == null ? undefined : var_core_value_sigC85E(var_core_value_sig340D),
    children: (0, i.jsx)(t[ox50497a(1420)], {
      size: ox50497a(1499),
      variant: ox50497a(502),
      type: "button",
      children: (0, i[ox50497a(922)])(n[ox50497a(1845)], {})
    })
  });
}
function it(var_core_value_sig050D) {
  let {
    align: var_core_value_sig37AE,
    alignControl: var_core_value_sigC04C = false,
    alignOptions: var_core_value_sig5B51,
    bold: var_core_value_sig64FF,
    className: var_core_value_sig86F4,
    color: var_core_value_sig9E0F,
    colorResetLabel: var_core_value_sig3A42,
    fontSize: var_core_value_sig2069 = e.defaultChartConfig[ox5a00b5(508)][ox5a00b5(1359)],
    fontSizeEmptyLabel: var_core_value_sig8802,
    fontSizeIsDefault: var_core_value_sig95D5,
    fontSizeOptions: var_core_value_sigE027,
    italic: var_core_value_sigE537,
    onChange: var_core_value_sig5D84,
    onColorReset: var_core_value_sigD120,
    onFontSizeReset: var_core_value_sigAA05
  } = var_core_value_sig050D;
  return (0, i[ox5a00b5(1557)])(ox5a00b5(1998), {
    className: (0, t.clsx)("univer-box-border\x20univer-flex\x20univer-w-fit\x20univer-items-center\x20univer-gap-1.5\x20univer-rounded-md\x20univer-px-1\x20univer-py-0.5", t[ox5a00b5(1190)], var_core_value_sig86F4),
    children: [(0, i[ox5a00b5(922)])(et, {
      emptyLabel: var_core_value_sig8802,
      isDefault: var_core_value_sig95D5,
      options: var_core_value_sigE027,
      value: var_core_value_sig2069,
      onChange: var_core_value_sig82D4 => var_core_value_sig5D84 == null ? undefined : var_core_value_sig5D84(ox5a00b5(1003), var_core_value_sig82D4),
      onReset: var_core_value_sigAA05
    }), (0, i[ox5a00b5(922)])(tt, {
      color: var_core_value_sig9E0F,
      resetLabel: var_core_value_sig3A42,
      onChange: var_core_value_sigBDE4 => var_core_value_sig5D84 == null ? undefined : var_core_value_sig5D84("color", var_core_value_sigBDE4),
      onReset: var_core_value_sigD120
    }), var_core_value_sigC04C && (0, i[ox5a00b5(922)])(rt, {
      options: var_core_value_sig5B51,
      value: var_core_value_sig37AE,
      onChange: var_core_value_sig7DF1 => var_core_value_sig5D84 == null ? undefined : var_core_value_sig5D84("align", var_core_value_sig7DF1)
    }), (0, i[ox5a00b5(922)])(nt, {
      active: var_core_value_sig64FF,
      type: ox5a00b5(1642),
      onClick: () => var_core_value_sig5D84 == null ? undefined : var_core_value_sig5D84(ox5a00b5(1642), !var_core_value_sig64FF)
    }), (0, i[ox5a00b5(922)])(nt, {
      active: var_core_value_sigE537,
      type: ox5a00b5(1796),
      onClick: () => var_core_value_sig5D84 == null ? undefined : var_core_value_sig5D84("italic", !var_core_value_sigE537)
    })]
  });
}
const at = "chart-ui.config",
  ot = {};
function st(var_core_value_sig5176) {
  return var_core_value_sig5176 != null && typeof var_core_value_sig5176 != ox4fdcd0(1053);
}
function D(var_core_value_sig71A1) {
  let var_core_value_sig72AD = (0, r.useId)(),
    var_core_value_sig9ABE = var_core_value_sig72AD + ox2331ec(1915),
    var_core_value_sig8EF0 = st(var_core_value_sig71A1[ox2331ec(1899)]),
    var_core_value_sig234B = st(var_core_value_sig71A1[ox2331ec(764)]),
    var_core_value_sig8169 = var_core_value_sig8EF0 ? var_core_value_sig72AD + ox2331ec(1528) : undefined,
    var_core_value_sigC5FB = var_core_value_sig234B ? var_core_value_sig72AD + "-error" : undefined,
    var_core_value_sig5453 = [var_core_value_sig8169, var_core_value_sigC5FB][ox2331ec(1573)](Boolean)[ox2331ec(766)]("\x20") || undefined,
    var_core_value_sig8725 = {
      id: var_core_value_sig72AD + ox2331ec(644),
      "aria-labelledby": var_core_value_sig9ABE,
      "aria-describedby": var_core_value_sig5453,
      "aria-invalid": var_core_value_sig234B || undefined
    },
    var_core_value_sig513B = typeof var_core_value_sig71A1.children == ox2331ec(1182) ? var_core_value_sig71A1[ox2331ec(1492)](var_core_value_sig8725) : var_core_value_sig71A1[ox2331ec(1492)];
  return (0, i.jsxs)("div", {
    "aria-describedby": var_core_value_sig5453,
    "aria-disabled": var_core_value_sig71A1[ox2331ec(1937)] || undefined,
    "aria-invalid": var_core_value_sig234B || undefined,
    "aria-labelledby": var_core_value_sig9ABE,
    className: ox2331ec(2035),
    role: "group",
    children: [(0, i[ox2331ec(922)])(ox2331ec(1904), {
      id: var_core_value_sig9ABE,
      className: ox2331ec(547),
      children: var_core_value_sig71A1[ox2331ec(1614)]
    }), var_core_value_sig513B, var_core_value_sig8EF0 && (0, i[ox2331ec(922)])(ox2331ec(1904), {
      id: var_core_value_sig8169,
      className: ox2331ec(683),
      children: var_core_value_sig71A1[ox2331ec(1899)]
    }), var_core_value_sig234B && (0, i[ox2331ec(922)])("span", {
      id: var_core_value_sigC5FB,
      className: "univer-mt-1\x20univer-text-xs\x20univer-text-red-500",
      children: var_core_value_sig71A1[ox2331ec(764)]
    })]
  });
}
function O(var_core_value_sig5501) {
  return (0, i[ox35b2a1(922)])(ox35b2a1(1998), {
    className: ox35b2a1(561),
    children: var_core_value_sig5501[ox35b2a1(1492)]
  });
}
function ct(var_core_value_sig7784, var_core_value_sigB706) {
  if (var_core_value_sig7784) {
    var_core_value_sig7784.id = var_core_value_sigB706.id;
    for (let var_core_value_sigD082 of [ox142650(497), ox142650(937), "aria-invalid"]) {
      let var_core_value_sig2AD0 = var_core_value_sigB706[var_core_value_sigD082];
      var_core_value_sig2AD0 === undefined ? var_core_value_sig7784.removeAttribute(var_core_value_sigD082) : var_core_value_sig7784[ox142650(930)](var_core_value_sigD082, String(var_core_value_sig2AD0));
    }
  }
}
function k(var_core_value_sig5FD0) {
  let var_core_value_sig77E3 = pe();
  return (0, i[ox525a5a(922)])(D, {
    disabled: var_core_value_sig5FD0.disabled,
    error: var_core_value_sig5FD0[ox525a5a(764)],
    help: var_core_value_sig5FD0[ox525a5a(1899)],
    label: var_core_value_sig5FD0.label,
    children: var_core_value_sigDC86 => (0, i.jsxs)(ox525a5a(1998), {
      className: ox525a5a(933),
      children: [(0, i[ox525a5a(922)])(t[ox525a5a(586)], {
        ref: var_core_value_sigDBB7 => ct(var_core_value_sigDBB7, var_core_value_sigDC86),
        allowClear: var_core_value_sig5FD0[ox525a5a(2026)],
        allowEmpty: var_core_value_sig5FD0[ox525a5a(1531)],
        className: ox525a5a(1516),
        disabled: var_core_value_sig5FD0[ox525a5a(1937)],
        max: var_core_value_sig5FD0[ox525a5a(628)],
        min: var_core_value_sig5FD0[ox525a5a(1337)],
        placeholder: var_core_value_sig5FD0[ox525a5a(1769)],
        precision: var_core_value_sig5FD0.precision,
        step: var_core_value_sig5FD0[ox525a5a(1939)],
        value: var_core_value_sig5FD0[ox525a5a(1324)],
        ...var_core_value_sigDC86,
        ...var_core_value_sig77E3,
        onChange: var_core_value_sigD0A8 => var_core_value_sig5FD0[ox525a5a(507)](var_core_value_sigD0A8)
      }), var_core_value_sig5FD0[ox525a5a(1324)] === null && var_core_value_sig5FD0.emptyLabel !== undefined && (0, i[ox525a5a(922)])(ox525a5a(1904), {
        "aria-hidden": ox525a5a(1582),
        className: ox525a5a(988),
        children: var_core_value_sig5FD0[ox525a5a(1769)]
      })]
    })
  });
}
function lt(var_core_value_sigB071) {
  var var_core_value_sig15FE;
  let [var_core_value_sigCF47, var_core_value_sigB0F9] = (0, r[ox391955(1825)])(false),
    var_core_value_sigAF12 = ((var_core_value_sig15FE = var_core_value_sigB071[ox391955(1822)].find(var_core_value_sig0B0C => var_core_value_sig0B0C[ox391955(1324)] === var_core_value_sigB071[ox391955(1324)])) == null ? undefined : var_core_value_sig15FE[ox391955(1614)]) ?? var_core_value_sigB071[ox391955(1324)],
    var_core_value_sigC60C = var_core_value_sigB071[ox391955(2026)] && var_core_value_sigB071[ox391955(1774)] !== undefined && var_core_value_sigB071[ox391955(842)] !== undefined && var_core_value_sigB071[ox391955(1324)] !== "" && !var_core_value_sigB071.disabled,
    var_core_value_sig1C3C = [{
      type: "radio",
      hideIndicator: true,
      options: var_core_value_sigB071[ox391955(1822)][ox391955(1285)](var_core_value_sigA39E => ({
        disabled: var_core_value_sigA39E.disabled,
        label: var_core_value_sigA39E[ox391955(1614)],
        value: var_core_value_sigA39E[ox391955(1324)]
      })),
      value: var_core_value_sigB071[ox391955(1324)],
      onSelect: var_core_value_sigBBEE => var_core_value_sigB071.onChange(var_core_value_sigBBEE)
    }];
  return (0, i[ox391955(1557)])(ox391955(1998), {
    className: ox391955(1453),
    children: [(0, i.jsx)(t[ox391955(744)], {
      align: "start",
      className: "univer-max-h-80\x20univer-w-[--radix-popper-anchor-width]\x20univer-min-w-36\x20univer-overflow-auto",
      disabled: var_core_value_sigB071[ox391955(1937)],
      items: var_core_value_sig1C3C,
      open: var_core_value_sigCF47,
      onOpenChange: var_core_value_sigB0F9,
      children: (0, i[ox391955(1557)])(ox391955(1204), {
        "aria-expanded": var_core_value_sigCF47,
        "aria-haspopup": ox391955(1849),
        className: (0, t[ox391955(1916)])(t[ox391955(1348)], ox391955(950), {
          "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900": var_core_value_sigCF47,
          "univer-cursor-not-allowed": var_core_value_sigB071[ox391955(1937)],
          "univer-cursor-pointer\x20hover:univer-border-primary-600": !var_core_value_sigB071[ox391955(1937)] && !var_core_value_sigCF47
        }),
        "data-u-comp": ox391955(945),
        disabled: var_core_value_sigB071[ox391955(1937)],
        type: "button",
        ...var_core_value_sigB071[ox391955(913)],
        children: [(0, i[ox391955(922)])(ox391955(1904), {
          className: ox391955(1626),
          children: var_core_value_sigAF12
        }), (0, i[ox391955(922)])(n.MoreDownIcon, {
          "aria-hidden": "true",
          className: (0, t[ox391955(1916)])(ox391955(795), var_core_value_sigC60C && ox391955(1395))
        })]
      })
    }), var_core_value_sigC60C && (0, i[ox391955(922)])(ox391955(1204), {
      "aria-label": var_core_value_sigB071[ox391955(1774)],
      className: ox391955(1060),
      style: {
        insetInlineEnd: ox391955(1436)
      },
      type: "button",
      onClick: var_core_value_sigB071[ox391955(842)],
      children: (0, i[ox391955(922)])(n[ox391955(1378)], {
        "aria-hidden": "true",
        className: ox391955(1263)
      })
    })]
  });
}
function A(var_core_value_sig71CF) {
  return (0, i.jsx)(D, {
    disabled: var_core_value_sig71CF[ox130b68(1937)],
    error: var_core_value_sig71CF[ox130b68(764)],
    help: var_core_value_sig71CF[ox130b68(1899)],
    label: var_core_value_sig71CF[ox130b68(1614)],
    children: var_core_value_sig011D => (0, i[ox130b68(922)])(lt, {
      allowClear: var_core_value_sig71CF.allowClear,
      clearLabel: var_core_value_sig71CF[ox130b68(1774)],
      controlProps: var_core_value_sig011D,
      disabled: var_core_value_sig71CF.disabled,
      options: var_core_value_sig71CF[ox130b68(1822)],
      value: var_core_value_sig71CF.value,
      onChange: var_core_value_sig71CF.onChange,
      onClear: var_core_value_sig71CF[ox130b68(842)]
    })
  });
}
function j(var_core_value_sigC341) {
  let var_core_value_sigBA47 = pe(),
    [var_core_value_sig3DF7, var_core_value_sigD49F] = (0, r.useState)(var_core_value_sigC341[ox4ace52(1324)]),
    var_core_value_sigCECC = var_core_value_sigC341[ox4ace52(1486)] === ox4ace52(1309) ? var_core_value_sig3DF7 : var_core_value_sigC341.value;
  return (0, r[ox4ace52(1989)])(() => {
    const var_core_value_sig6167 = ox4ace52;
    var_core_value_sigD49F(var_core_value_sigC341[var_core_value_sig6167(1324)]);
  }, [var_core_value_sigC341[ox4ace52(1324)]]), (0, i[ox4ace52(922)])(D, {
    disabled: var_core_value_sigC341[ox4ace52(1937)],
    error: var_core_value_sigC341[ox4ace52(764)],
    help: var_core_value_sigC341[ox4ace52(1899)],
    label: var_core_value_sigC341.label,
    children: var_core_value_sig65A1 => (0, i.jsx)(t[ox4ace52(625)], {
      allowClear: var_core_value_sigC341.allowClear,
      disabled: var_core_value_sigC341[ox4ace52(1937)],
      placeholder: var_core_value_sigC341[ox4ace52(1571)],
      value: var_core_value_sigCECC,
      ...var_core_value_sig65A1,
      onBlur: () => {
        const var_core_value_sigF4B9 = ox4ace52;
        var_core_value_sigBA47[var_core_value_sigF4B9(717)](), var_core_value_sigC341[var_core_value_sigF4B9(1486)] === var_core_value_sigF4B9(1309) && var_core_value_sig3DF7 !== var_core_value_sigC341.value && var_core_value_sigC341[var_core_value_sigF4B9(507)](var_core_value_sig3DF7);
      },
      onChange: var_core_value_sig5CEE => {
        const var_core_value_sigE92A = ox4ace52;
        var_core_value_sigC341[var_core_value_sigE92A(1486)] === var_core_value_sigE92A(1309) ? var_core_value_sigD49F(var_core_value_sig5CEE) : var_core_value_sigC341[var_core_value_sigE92A(507)](var_core_value_sig5CEE);
      },
      onFocus: var_core_value_sigBA47[ox4ace52(542)]
    })
  });
}
const ut = -1234.56,
  dt = e.defaultChartConfig["formatStyle"].red["color"],
  ft = ["yyyy-MM-dd", "yyyy/MM/dd", 'yyyy"年"MM"月"dd"日"', "MM-dd", "M\x22月\x22d\x22日\x22", "h:mm:ss", "h:mm", "A/P hh:mm", "A/P h:mm", "A/P\x20h:mm:ss", "MM-dd\x20A/P\x20hh:mm"],
  pt = [{
    value: "#,##0_);(#,##0)"
  }, {
    value: "#,##0_);[Red](#,##0)",
    color: dt
  }, {
    value: "#,##0.00_);#,##0.00"
  }, {
    value: "#,##0.00_);[Red]#,##0.00",
    color: dt
  }, {
    value: "#,##0.00_);-#,##0.00"
  }, {
    value: "#,##0.00_);[Red]-#,##0.00",
    color: dt
  }],
  mt = [{
    value: var_core_value_sig0F47 => "\x22" + var_core_value_sig0F47 + "\x22#,##0.00_);\x22" + var_core_value_sig0F47 + '"#,##0.00'
  }, {
    value: var_core_value_sig6B29 => "\x22" + var_core_value_sig6B29 + '"#,##0.00_);[Red]"' + var_core_value_sig6B29 + "\x22#,##0.00",
    color: dt
  }, {
    value: var_core_value_sig28E2 => "\x22" + var_core_value_sig28E2 + '"#,##0.00_);("' + var_core_value_sig28E2 + "\x22#,##0.00)"
  }, {
    value: var_core_value_sig1578 => "\x22" + var_core_value_sig1578 + '"#,##0.00_);[Red]("' + var_core_value_sig1578 + '"#,##0.00)',
    color: dt
  }, {
    value: var_core_value_sig52ED => "\x22" + var_core_value_sig52ED + '"#,##0.00_);-"' + var_core_value_sig52ED + '"#,##0.00'
  }, {
    value: var_core_value_sig135F => "\x22" + var_core_value_sig135F + '"#,##0.00_);[Red]-"' + var_core_value_sig135F + '"#,##0.00',
    color: dt
  }];
function ht(var_core_value_sig416D, var_core_value_sigAD5D) {
  try {
    return a.numfmt[ox30f0fb(1875)](var_core_value_sig416D, var_core_value_sigAD5D);
  } catch {
    return var_core_value_sig416D;
  }
}
const gt = ft.map(var_core_value_sig1B8A => ({
    label: ht(var_core_value_sig1B8A, 11175.562847222222),
    value: var_core_value_sig1B8A
  })),
  _t = pt.map(var_core_value_sigFB18 => ({
    color: "color" in var_core_value_sigFB18 ? var_core_value_sigFB18.color : undefined,
    label: ht(var_core_value_sigFB18.value, ut),
    value: var_core_value_sigFB18.value
  }));
function vt(var_core_value_sig703C) {
  return mt[ox491e30(1285)](var_core_value_sig7F19 => {
    const var_core_value_sig7827 = ox491e30;
    let var_core_value_sig652C = var_core_value_sig7F19[var_core_value_sig7827(1324)](var_core_value_sig703C);
    return {
      color: var_core_value_sig7827(1393) in var_core_value_sig7F19 ? var_core_value_sig7F19.color : undefined,
      label: ht(var_core_value_sig652C, ut),
      value: var_core_value_sig652C
    };
  });
}
function yt(var_core_value_sig96CF) {
  return a.currencySymbols[ox540238(1507)](var_core_value_sig7E32 => var_core_value_sig96CF[ox540238(1868)](var_core_value_sig7E32)) ?? a[ox540238(1728)][0];
}
function bt(var_core_value_sig49F1, var_core_value_sig2F7B = 0) {
  if (!var_core_value_sig49F1) return var_core_value_sig2F7B;
  try {
    return a[ox3dbc29(1682)].getFormatInfo(var_core_value_sig49F1)[ox3dbc29(791)] ?? var_core_value_sig2F7B;
  } catch {
    return var_core_value_sig2F7B;
  }
}
function xt(var_core_value_sigB0DF, var_core_value_sig2E44) {
  let var_core_value_sig8560 = Math[ox8d69c6(1337)](Math[ox8d69c6(628)](0, Number(var_core_value_sig2E44)), 20),
    var_core_value_sig138D = Array(var_core_value_sig8560)[ox8d69c6(1644)]("0")[ox8d69c6(766)]("");
  return var_core_value_sigB0DF[ox8d69c6(757)](";")[ox8d69c6(1285)](var_core_value_sig4C07 => /\.0?/[ox8d69c6(1208)](var_core_value_sig4C07) ? var_core_value_sig4C07[ox8d69c6(1530)](/\.0*/g, "" + (var_core_value_sig8560 > 0 ? "." : "") + var_core_value_sig138D) : /0[^0]?/[ox8d69c6(1208)](var_core_value_sig4C07) ? var_core_value_sig4C07.replace(/0[^0]+|0$/, "0" + (var_core_value_sig8560 > 0 ? "." : "") + var_core_value_sig138D) : var_core_value_sig4C07).join(";");
}
function St(var_core_value_sig1E26, var_core_value_sig5C6C) {
  return xt(ox99536f(1165) + var_core_value_sig1E26 + ox99536f(637) + (var_core_value_sig5C6C > 0 ? ".0" : "") + "_)", var_core_value_sig5C6C);
}
function Ct(var_core_value_sigBE85) {
  if (!var_core_value_sigBE85) return ox3c376a(1109);
  if (a[ox3c376a(1728)][ox3c376a(1507)](var_core_value_sig79AB => var_core_value_sigBE85[ox3c376a(1868)](var_core_value_sig79AB))) return var_core_value_sigBE85[ox3c376a(1509)]("_(") ? "accounting" : ox3c376a(776);
  let var_core_value_sig56DE;
  try {
    var_core_value_sig56DE = a[ox3c376a(1682)][ox3c376a(1233)](var_core_value_sigBE85)[ox3c376a(483)];
  } catch {
    return ox3c376a(1109);
  }
  return gt[ox3c376a(1399)](var_core_value_sig8E74 => var_core_value_sig8E74[ox3c376a(1324)] === var_core_value_sigBE85) || ["date", ox3c376a(936), ox3c376a(1929)].includes(var_core_value_sig56DE) ? ox3c376a(1518) : _t[ox3c376a(1399)](var_core_value_sig104C => (0, a.isPatternEqualWithoutDecimal)(var_core_value_sig104C[ox3c376a(1324)], var_core_value_sigBE85)) ? "thousands" : "general";
}
const wt = "advanced",
  Tt = {
    currency: "chart-ui.common.currency",
    number: "chart-ui.numberFormat.number",
    percentage: "chart-ui.common.percentage",
    scientific: "chart-ui.numberFormat.scientific",
    source: "chart-ui.numberFormat.source"
  };
function Et(var_core_value_sig0278) {
  let var_core_value_sig08A6 = Object[oxf44f52(1421)](e[oxf44f52(1750)]).find(([, var_core_value_sig841D]) => var_core_value_sig841D === (var_core_value_sig0278 ?? null));
  return (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6[0]) ?? wt;
}
function Dt(var_core_value_sig04E1) {
  if (!var_core_value_sig04E1) return String(e[oxc5385a(768)]);
  try {
    return a[oxc5385a(1682)][oxc5385a(1875)](var_core_value_sig04E1, e[oxc5385a(768)]);
  } catch {
    return String(e[oxc5385a(768)]);
  }
}
function Ot(var_core_value_sigC504) {
  return (0, i[ox1cf811(922)])(D, {
    label: var_core_value_sigC504[ox1cf811(1614)],
    children: (0, i[ox1cf811(922)])(t[ox1cf811(647)], {
      className: ox1cf811(1809),
      options: [...var_core_value_sigC504[ox1cf811(1822)]],
      value: var_core_value_sigC504[ox1cf811(1324)],
      onChange: var_core_value_sig90CB => var_core_value_sigC504[ox1cf811(507)](var_core_value_sig90CB)
    })
  });
}
function kt(var_core_value_sig0515) {
  var var_core_value_sig9F34, var_core_value_sig0247;
  let var_core_value_sig6030 = (0, o.useDependency)(a[ox385953(1419)]),
    var_core_value_sig0137 = var_core_value_sig0515[ox385953(1324)] ?? "",
    [var_core_value_sig14F3, var_core_value_sig34E8] = (0, r.useState)(var_core_value_sig0137),
    [var_core_value_sigCFE7, var_core_value_sigECBC] = (0, r[ox385953(1825)])(() => Ct(var_core_value_sig0137)),
    [var_core_value_sig65D2, var_core_value_sig4306] = (0, r[ox385953(1825)])(() => bt(var_core_value_sig0137, 2)),
    [var_core_value_sigFCD3, var_core_value_sig147A] = (0, r.useState)(() => yt(var_core_value_sig0137)),
    var_core_value_sig829F = vt(var_core_value_sigFCD3),
    var_core_value_sig534C = ((var_core_value_sig9F34 = var_core_value_sig829F.find(var_core_value_sigBDF5 => (0, a[ox385953(573)])(var_core_value_sigBDF5[ox385953(1324)], var_core_value_sig14F3))) == null ? undefined : var_core_value_sig9F34[ox385953(1324)]) ?? var_core_value_sig829F[0][ox385953(1324)],
    var_core_value_sigABB7 = ((var_core_value_sig0247 = _t[ox385953(1507)](var_core_value_sigACC6 => (0, a.isPatternEqualWithoutDecimal)(var_core_value_sigACC6.value, var_core_value_sig14F3))) == null ? undefined : var_core_value_sig0247.value) ?? _t[0][ox385953(1324)],
    var_core_value_sig9071 = var_core_value_sig1614 => {
      const var_core_value_sig85C3 = ox385953;
      switch (var_core_value_sigECBC(var_core_value_sig1614), var_core_value_sig1614) {
        case "general":
          var_core_value_sig34E8("");
          break;
        case var_core_value_sig85C3(544):
          var_core_value_sig34E8(St(var_core_value_sigFCD3, var_core_value_sig65D2));
          break;
        case var_core_value_sig85C3(776):
          var_core_value_sig34E8(xt(var_core_value_sig829F[0][var_core_value_sig85C3(1324)], var_core_value_sig65D2));
          break;
        case var_core_value_sig85C3(1518):
          var_core_value_sig34E8(gt[0][var_core_value_sig85C3(1324)]);
          break;
        case var_core_value_sig85C3(651):
          var_core_value_sig34E8(xt(_t[0][var_core_value_sig85C3(1324)], var_core_value_sig65D2));
          break;
      }
    },
    var_core_value_sig01A9 = var_core_value_sigB996 => {
      const var_core_value_sig4BBA = ox385953;
      let var_core_value_sig6201 = var_core_value_sigB996 ?? 0;
      var_core_value_sig4306(var_core_value_sig6201), var_core_value_sig34E8(var_core_value_sigCFE7 === var_core_value_sig4BBA(544) ? St(var_core_value_sigFCD3, var_core_value_sig6201) : xt(var_core_value_sig14F3, var_core_value_sig6201));
    },
    var_core_value_sig9477 = var_core_value_sig5151 => {
      const var_core_value_sigB542 = ox385953;
      if (var_core_value_sig147A(var_core_value_sig5151), var_core_value_sigCFE7 === var_core_value_sigB542(544)) {
        var_core_value_sig34E8(St(var_core_value_sig5151, var_core_value_sig65D2));
        return;
      }
      var_core_value_sig34E8(xt(vt(var_core_value_sig5151)[0][var_core_value_sigB542(1324)], var_core_value_sig65D2));
    },
    var_core_value_sig917C = var_core_value_sigCFE7 === ox385953(651) ? ox385953(1898) : ox385953(1111) + var_core_value_sigCFE7 + ox385953(1520);
  return (0, i[ox385953(922)])(t.Dialog, {
    open: true,
    maskClosable: false,
    title: var_core_value_sig6030.t(ox385953(1997)),
    width: 600,
    footer: (0, i[ox385953(1557)])(ox385953(1998), {
      className: ox385953(1035),
      children: [(0, i.jsx)(t[ox385953(1420)], {
        onClick: var_core_value_sig0515[ox385953(1340)],
        children: var_core_value_sig6030.t("chart-ui.common.cancel")
      }), (0, i[ox385953(922)])(t[ox385953(1420)], {
        variant: ox385953(1148),
        onClick: () => var_core_value_sig0515[ox385953(1024)](var_core_value_sig14F3 || undefined),
        children: var_core_value_sig6030.t(ox385953(841))
      })]
    }),
    onClose: var_core_value_sig0515[ox385953(1340)],
    children: (0, i[ox385953(1557)])("div", {
      className: ox385953(1556),
      children: [(0, i[ox385953(922)])(A, {
        label: var_core_value_sig6030.t("chart-ui.numberFormat.formatTypes"),
        options: [{
          value: ox385953(1109),
          label: var_core_value_sig6030.t(ox385953(1098))
        }, {
          value: ox385953(544),
          label: var_core_value_sig6030.t("chart-ui.numberFormat.accountingType")
        }, {
          value: ox385953(776),
          label: var_core_value_sig6030.t(ox385953(1847))
        }, {
          value: ox385953(1518),
          label: var_core_value_sig6030.t(ox385953(1641))
        }, {
          value: ox385953(651),
          label: var_core_value_sig6030.t(ox385953(1293))
        }],
        value: var_core_value_sigCFE7,
        onChange: var_core_value_sig9071
      }), (var_core_value_sigCFE7 === ox385953(544) || var_core_value_sigCFE7 === "currency") && (0, i.jsxs)(O, {
        children: [(0, i[ox385953(922)])(k, {
          label: var_core_value_sig6030.t(ox385953(1078)),
          max: 20,
          min: 0,
          value: var_core_value_sig65D2,
          onChange: var_core_value_sig01A9
        }), (0, i.jsx)(A, {
          label: var_core_value_sig6030.t(ox385953(1471)),
          options: a.currencySymbols[ox385953(1285)](var_core_value_sigBB6C => ({
            label: var_core_value_sigBB6C,
            value: var_core_value_sigBB6C
          })),
          value: var_core_value_sigFCD3,
          onChange: var_core_value_sig9477
        })]
      }), var_core_value_sigCFE7 === ox385953(651) && (0, i.jsx)(k, {
        label: var_core_value_sig6030.t("chart-ui.numberFormat.decimalPlaces"),
        max: 20,
        min: 0,
        value: var_core_value_sig65D2,
        onChange: var_core_value_sig01A9
      }), var_core_value_sigCFE7 === ox385953(776) && (0, i.jsx)(Ot, {
        label: var_core_value_sig6030.t(ox385953(1130)),
        options: var_core_value_sig829F,
        value: var_core_value_sig534C,
        onChange: var_core_value_sigE2BF => var_core_value_sig34E8(xt(var_core_value_sigE2BF, var_core_value_sig65D2))
      }), var_core_value_sigCFE7 === ox385953(1518) && (0, i[ox385953(922)])(Ot, {
        label: var_core_value_sig6030.t(ox385953(735)),
        options: gt,
        value: var_core_value_sig14F3,
        onChange: var_core_value_sig34E8
      }), var_core_value_sigCFE7 === ox385953(651) && (0, i[ox385953(922)])(Ot, {
        label: var_core_value_sig6030.t("chart-ui.numberFormat.negativeNumberTypes"),
        options: _t,
        value: var_core_value_sigABB7,
        onChange: var_core_value_sigB8C7 => var_core_value_sig34E8(xt(var_core_value_sigB8C7, var_core_value_sig65D2))
      }), (0, i[ox385953(922)])(ox385953(1998), {
        className: ox385953(1812),
        children: var_core_value_sig6030.t(var_core_value_sig917C)
      })]
    })
  });
}
function At(var_core_value_sig27E2) {
  return (0, i[ox52298f(922)])(j, {
    commitMode: ox52298f(939),
    label: var_core_value_sig27E2[ox52298f(1614)],
    value: var_core_value_sig27E2[ox52298f(1324)] ?? "",
    onChange: var_core_value_sig27E2[ox52298f(507)]
  });
}
function jt(var_core_value_sig10D7) {
  let var_core_value_sig5A1A = (0, o[ox48ad05(858)])(a[ox48ad05(1419)]),
    [var_core_value_sig77D2, var_core_value_sig625E] = (0, r[ox48ad05(1825)])(false),
    var_core_value_sig6F04 = Et(var_core_value_sig10D7.value),
    var_core_value_sig48DA = Object[ox48ad05(1994)](e[ox48ad05(1750)])[ox48ad05(1285)](var_core_value_sigA56E => ({
      label: var_core_value_sig5A1A.t(Tt[var_core_value_sigA56E]),
      value: var_core_value_sigA56E
    }));
  return (0, i[ox48ad05(1557)])(ox48ad05(1998), {
    className: ox48ad05(1458),
    children: [(0, i[ox48ad05(922)])(A, {
      label: var_core_value_sig10D7[ox48ad05(1614)],
      options: [...var_core_value_sig48DA, {
        label: var_core_value_sig5A1A.t("chart-ui.numberFormat.setFormat"),
        value: wt
      }],
      value: var_core_value_sig6F04,
      onChange: var_core_value_sig1998 => {
        const var_core_value_sigFF19 = ox48ad05;
        if (var_core_value_sig1998 === wt) {
          var_core_value_sig625E(true);
          return;
        }
        var_core_value_sig10D7.onChange(e[var_core_value_sigFF19(1750)][var_core_value_sig1998]);
      }
    }), (0, i[ox48ad05(1557)])(ox48ad05(1904), {
      className: "univer-text-xs\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
      children: [var_core_value_sig5A1A.t(ox48ad05(1722)), ":\x20", Dt(var_core_value_sig10D7[ox48ad05(1324)])]
    }), var_core_value_sig77D2 && (0, i[ox48ad05(922)])(kt, {
      value: var_core_value_sig10D7[ox48ad05(1324)],
      onApply: var_core_value_sig43B8 => {
        const var_core_value_sigD98F = ox48ad05;
        var_core_value_sig10D7[var_core_value_sigD98F(507)](var_core_value_sig43B8), var_core_value_sig625E(false);
      },
      onCancel: () => var_core_value_sig625E(false)
    })]
  });
}
const Mt = (0, r.createContext)(null),
  Nt = (0, r.createContext)(null);
function Pt(var_core_value_sigD327) {
  return (0, i[ox143968(922)])(Nt[ox143968(1838)], {
    value: var_core_value_sigD327[ox143968(1621)] ?? null,
    children: (0, i[ox143968(922)])(Mt[ox143968(1838)], {
      value: var_core_value_sigD327[ox143968(926)],
      children: var_core_value_sigD327[ox143968(1492)]
    })
  });
}
function Ft() {
  let var_core_value_sig6694 = (0, r[ox51f8cf(1443)])(Mt);
  if (!var_core_value_sig6694) throw Error(ox51f8cf(1034));
  return var_core_value_sig6694;
}
function It() {
  return (0, r[ox20a76e(1443)])(Nt);
}
function M(var_core_value_sig2A21) {
  let [var_core_value_sig0836, var_core_value_sigD95C] = (0, r.useState)(false);
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8586(var_core_value_sig66C0) {
    var_core_value_sig2A21[ox52143e(1937)] || (var_core_value_sig2A21.onChange(var_core_value_sig66C0), var_core_value_sigD95C(false));
  }
  return (0, i[ox291d26(922)])(D, {
    disabled: var_core_value_sig2A21[ox291d26(1937)],
    error: var_core_value_sig2A21[ox291d26(764)],
    help: var_core_value_sig2A21[ox291d26(1899)],
    label: var_core_value_sig2A21[ox291d26(1614)],
    children: var_core_value_sig9D15 => (0, i.jsx)(t[ox291d26(761)], {
      disabled: var_core_value_sig2A21[ox291d26(1937)],
      open: !var_core_value_sig2A21.disabled && var_core_value_sig0836,
      overlay: (0, i[ox291d26(1557)])(ox291d26(1998), {
        className: ox291d26(788),
        children: [var_core_value_sig2A21[ox291d26(1000)] === undefined ? null : (0, i[ox291d26(922)])(t[ox291d26(1420)], {
          disabled: var_core_value_sig2A21[ox291d26(1937)],
          onClick: () => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8586(null),
          children: var_core_value_sig2A21.resetLabel
        }), var_core_value_sig2A21[ox291d26(1627)] === undefined ? null : (0, i[ox291d26(922)])(t[ox291d26(1420)], {
          disabled: var_core_value_sig2A21[ox291d26(1937)],
          onClick: () => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8586("transparent"),
          children: var_core_value_sig2A21[ox291d26(1627)]
        }), (0, i.jsx)(t.ColorPicker, {
          value: var_core_value_sig2A21.value && var_core_value_sig2A21[ox291d26(1324)] !== "transparent" ? var_core_value_sig2A21.value : var_core_value_sig2A21[ox291d26(984)],
          onChange: var_core_value_sig362B => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8586(var_core_value_sig362B)
        })]
      }),
      onOpenChange: var_core_value_sigD95C,
      children: (0, i.jsxs)(t[ox291d26(1420)], {
        size: ox291d26(1121),
        "aria-expanded": !var_core_value_sig2A21[ox291d26(1937)] && var_core_value_sig0836,
        "aria-haspopup": "dialog",
        className: (0, t[ox291d26(1916)])(ox291d26(2037), {
          "univer-bg-gray-100": var_core_value_sig0836
        }),
        disabled: var_core_value_sig2A21[ox291d26(1937)],
        type: ox291d26(1204),
        ...var_core_value_sig9D15,
        children: [var_core_value_sig2A21.value === ox291d26(1957) && var_core_value_sig2A21[ox291d26(1627)] ? (0, i.jsx)("span", {
          className: "univer-truncate",
          children: var_core_value_sig2A21[ox291d26(1627)]
        }) : var_core_value_sig2A21.value ? (0, i[ox291d26(922)])(ox291d26(1904), {
          className: "univer-size-5\x20univer-rounded-sm",
          style: {
            backgroundColor: var_core_value_sig2A21.value
          }
        }) : (0, i[ox291d26(922)])(ox291d26(1904), {
          className: ox291d26(929),
          children: var_core_value_sig2A21.emptyLabel
        }), (0, i.jsx)(n[ox291d26(781)], {
          "aria-hidden": ox291d26(1582),
          className: "univer-shrink-0"
        })]
      })
    })
  });
}
let Lt = function (var_core_value_sig3FAF) {
  return var_core_value_sig3FAF[ox2b9f78(562)] = "allSeriesStyle", var_core_value_sig3FAF[ox2b9f78(1118)] = ox2b9f78(1575), var_core_value_sig3FAF[ox2b9f78(1680)] = ox2b9f78(623), var_core_value_sig3FAF[ox2b9f78(999)] = ox2b9f78(891), var_core_value_sig3FAF[ox2b9f78(1163)] = ox2b9f78(1257), var_core_value_sig3FAF[ox2b9f78(1046)] = ox2b9f78(1851), var_core_value_sig3FAF.Axes = ox2b9f78(714), var_core_value_sig3FAF.AxisPointer = ox2b9f78(1661), var_core_value_sig3FAF[ox2b9f78(615)] = ox2b9f78(1345), var_core_value_sig3FAF[ox2b9f78(2028)] = "chartType", var_core_value_sig3FAF[ox2b9f78(2030)] = ox2b9f78(1931), var_core_value_sig3FAF.ChordMapping = ox2b9f78(1050), var_core_value_sig3FAF[ox2b9f78(1013)] = "chordStyle", var_core_value_sig3FAF[ox2b9f78(1944)] = ox2b9f78(1394), var_core_value_sig3FAF[ox2b9f78(1840)] = ox2b9f78(860), var_core_value_sig3FAF[ox2b9f78(1673)] = ox2b9f78(1786), var_core_value_sig3FAF[ox2b9f78(642)] = ox2b9f78(1598), var_core_value_sig3FAF[ox2b9f78(753)] = ox2b9f78(756), var_core_value_sig3FAF.Heatmap = ox2b9f78(1729), var_core_value_sig3FAF[ox2b9f78(861)] = ox2b9f78(1346), var_core_value_sig3FAF[ox2b9f78(524)] = "invalidValueStrategy", var_core_value_sig3FAF[ox2b9f78(1435)] = "legend", var_core_value_sig3FAF[ox2b9f78(1039)] = ox2b9f78(1653), var_core_value_sig3FAF[ox2b9f78(1011)] = ox2b9f78(954), var_core_value_sig3FAF[ox2b9f78(593)] = ox2b9f78(1434), var_core_value_sig3FAF[ox2b9f78(824)] = ox2b9f78(1930), var_core_value_sig3FAF[ox2b9f78(600)] = ox2b9f78(1252), var_core_value_sig3FAF[ox2b9f78(990)] = "plotArea", var_core_value_sig3FAF[ox2b9f78(479)] = "radar", var_core_value_sig3FAF.Relation = ox2b9f78(1656), var_core_value_sig3FAF[ox2b9f78(1470)] = ox2b9f78(837), var_core_value_sig3FAF.Subtitle = ox2b9f78(1247), var_core_value_sig3FAF[ox2b9f78(1219)] = ox2b9f78(727), var_core_value_sig3FAF.SunburstHierarchyIndexes = "sunburstHierarchyIndexes", var_core_value_sig3FAF.SunburstStyle = ox2b9f78(1889), var_core_value_sig3FAF[ox2b9f78(1449)] = ox2b9f78(934), var_core_value_sig3FAF.Theme = ox2b9f78(1162), var_core_value_sig3FAF[ox2b9f78(1907)] = "title", var_core_value_sig3FAF.Treemap = ox2b9f78(1136), var_core_value_sig3FAF[ox2b9f78(1354)] = ox2b9f78(1984), var_core_value_sig3FAF[ox2b9f78(1766)] = ox2b9f78(1624), var_core_value_sig3FAF[ox2b9f78(513)] = ox2b9f78(1092), var_core_value_sig3FAF;
}({});
const Rt = {
  rightY: "rightYAxis",
  x: "xAxis",
  y: "yAxis"
};
function zt(var_core_value_sig378B, var_core_value_sigDE50, var_core_value_sig3094) {
  return var_core_value_sig378B[ox1ee80d(1507)](var_core_value_sigB785 => (0, e[ox1ee80d(595)])(var_core_value_sigB785[ox1ee80d(1712)], var_core_value_sigDE50, var_core_value_sig378B) === Rt[var_core_value_sig3094]);
}
const Bt = var_core_value_sig86CC => 'Chart view state "' + var_core_value_sig86CC + "\x22\x20is\x20already\x20registered.",
  Vt = var_core_value_sig7868 => 'Chart view state "' + var_core_value_sig7868 + '" is not registered.';
var Ht = class {
  constructor() {
    b(this, ox19b281(927), new Map());
  }
  registerViewState(var_core_value_sig130F, var_core_value_sigC0E3) {
    if (this[ox1280a0(927)][ox1280a0(863)](var_core_value_sig130F)) throw Error(Bt(var_core_value_sig130F));
    return this[ox1280a0(927)][ox1280a0(1023)](var_core_value_sig130F, var_core_value_sigC0E3), (0, a[ox1280a0(1504)])(() => {
      const var_core_value_sig5CA5 = ox1280a0;
      this[var_core_value_sig5CA5(927)].get(var_core_value_sig130F) === var_core_value_sigC0E3 && this[var_core_value_sig5CA5(927)][var_core_value_sig5CA5(872)](var_core_value_sig130F);
    });
  }
  resolve(var_core_value_sig52F7) {
    let var_core_value_sig866F = this._definitions[ox287ce4(977)](var_core_value_sig52F7);
    if (!var_core_value_sig866F) throw Error(Vt(var_core_value_sig52F7));
    return var_core_value_sig866F;
  }
};
const Ut = (0, a.createIdentifier)("chart.ui.service");
let Wt = class extends a.Disposable {
  constructor(var_core_value_sigDE3D) {
    super(), b(this, oxdd0598(583), undefined), this[oxdd0598(583)] = var_core_value_sigDE3D;
  }
  registerViewState(var_core_value_sigF175, var_core_value_sig6A18) {
    return this[ox2fbb39(583)][ox2fbb39(1951)](var_core_value_sigF175, var_core_value_sig6A18);
  }
  getViewState(var_core_value_sig4E3D) {
    return this[ox25ffb8(583)][ox25ffb8(1710)](var_core_value_sig4E3D);
  }
};
Wt = Ee([Te(0, (0, a.Inject)(Ht))], Wt);
function N(var_core_value_sig9921, var_core_value_sig59BF) {
  let var_core_value_sigF001 = It() ?? (0, o.useDependency)(Ut),
    var_core_value_sigE511 = Ft(),
    var_core_value_sig1C81 = (0, r[ox548347(1687)])(() => var_core_value_sigF001.getViewState(var_core_value_sig9921), [var_core_value_sig9921, var_core_value_sigF001]);
  return [(0, o[ox548347(1451)])((0, r[ox548347(1687)])(() => var_core_value_sig1C81.get(var_core_value_sigE511), [var_core_value_sigE511, var_core_value_sig1C81]), var_core_value_sig59BF), (0, r[ox548347(1365)])(var_core_value_sig49B0 => {
    const var_core_value_sig2547 = ox548347;
    var var_core_value_sigBCA9;
    (var_core_value_sigBCA9 = var_core_value_sig1C81.set) == null || var_core_value_sigBCA9[var_core_value_sig2547(678)](var_core_value_sig1C81, var_core_value_sigE511, var_core_value_sig49B0);
  }, [var_core_value_sigE511, var_core_value_sig1C81])];
}
function Gt() {
  let var_core_value_sig2C6A = (0, o.useDependency)(a[oxe3063d(1419)]),
    var_core_value_sig7207 = Ft()[oxe3063d(1066)](),
    var_core_value_sig297F = (0, o.useObservable)(var_core_value_sig2C6A[oxe3063d(1091)], var_core_value_sig2C6A.getDirection());
  return {
    ...(0, o[oxe3063d(1451)])((0, r[oxe3063d(1687)])(() => (0, u[oxe3063d(952)])([var_core_value_sig7207[oxe3063d(1968)], var_core_value_sig7207.context$, var_core_value_sig7207[oxe3063d(1982)], var_core_value_sig7207[oxe3063d(688)]])[oxe3063d(505)]((0, u.map)(() => var_core_value_sig7207[oxe3063d(1463)](var_core_value_sig297F))), [var_core_value_sig297F, var_core_value_sig7207]), var_core_value_sig7207.getRuntimeContext(var_core_value_sig297F)),
    direction: var_core_value_sig297F
  };
}
function Kt() {
  return N(ox48e234(553), e[ox48e234(653)][ox48e234(1859)])[0];
}
function qt() {
  let var_core_value_sigA95A = Gt();
  return zt(var_core_value_sigA95A[ox2cf197(714)], var_core_value_sigA95A[ox2cf197(1922)], "rightY") !== undefined;
}
function Jt(var_core_value_sig94D6 = e.ChartTypeBits["Column"]) {
  return N("chartType", var_core_value_sig94D6);
}
function Yt(var_core_value_sigC22E, var_core_value_sig2321, var_core_value_sigFF33) {
  let var_core_value_sig16E0 = var_core_value_sig2321 == null ? undefined : var_core_value_sig2321[ox562e8f(2021)],
    var_core_value_sig213C = (var_core_value_sig16E0 == null ? undefined : var_core_value_sig16E0[ox562e8f(525)]) === true ? var_core_value_sigFF33[ox562e8f(1507)](var_core_value_sig4CDF => {
      const var_core_value_sig3F79 = ox562e8f;
      var var_core_value_sig880E;
      return var_core_value_sig4CDF[var_core_value_sig3F79(1978)] === ((var_core_value_sig880E = var_core_value_sig16E0[var_core_value_sig3F79(1437)]) == null ? undefined : var_core_value_sig880E[var_core_value_sig3F79(483)]);
    }) : undefined;
  return e[ox562e8f(1226)][ox562e8f(1429)](var_core_value_sigC22E, e[ox562e8f(653)][ox562e8f(600)]) && var_core_value_sig213C ? var_core_value_sig213C[ox562e8f(1324)] : String(var_core_value_sigC22E);
}
function Xt(var_core_value_sig31F8) {
  let [var_core_value_sig6905, var_core_value_sigC3C0] = Jt(),
    [var_core_value_sig1F39, var_core_value_sig9256] = N(oxb2afd3(1252)),
    var_core_value_sig98A0 = var_core_value_sig1F39 == null ? undefined : var_core_value_sig1F39[oxb2afd3(2021)],
    var_core_value_sig3EBD = (0, r.useMemo)(() => Yt(var_core_value_sig6905, var_core_value_sig1F39, var_core_value_sig31F8), [var_core_value_sig6905, var_core_value_sig31F8, var_core_value_sig1F39]);
  return {
    setValue: (0, r[oxb2afd3(1365)])(var_core_value_sigC9ED => {
      const var_core_value_sigB57B = oxb2afd3;
      let var_core_value_sig780B = var_core_value_sig31F8[var_core_value_sigB57B(1507)](var_core_value_sigE90F => var_core_value_sigE90F[var_core_value_sigB57B(1324)] === var_core_value_sigC9ED),
        var_core_value_sig7D1B = (var_core_value_sig780B == null ? undefined : var_core_value_sig780B[var_core_value_sigB57B(553)]) ?? Number(var_core_value_sigC9ED);
      if (var_core_value_sigC3C0(var_core_value_sig7D1B), e[var_core_value_sigB57B(1226)][var_core_value_sigB57B(1429)](var_core_value_sig7D1B, e[var_core_value_sigB57B(653)][var_core_value_sigB57B(600)])) {
        let var_core_value_sigEFD4 = var_core_value_sig780B == null ? undefined : var_core_value_sig780B[var_core_value_sigB57B(1978)];
        var_core_value_sigEFD4 ? var_core_value_sig9256({
          ...var_core_value_sig1F39,
          composite: {
            ...var_core_value_sig98A0,
            enabled: true,
            secondaryPlot: {
              ...(var_core_value_sig98A0 == null ? undefined : var_core_value_sig98A0.secondaryPlot),
              type: var_core_value_sigEFD4
            }
          }
        }) : var_core_value_sig98A0 && var_core_value_sig9256({
          ...var_core_value_sig1F39,
          composite: {
            ...var_core_value_sig98A0,
            enabled: false
          }
        });
      }
      return var_core_value_sig7D1B;
    }, [var_core_value_sig98A0, var_core_value_sig31F8, var_core_value_sig1F39, var_core_value_sigC3C0, var_core_value_sig9256]),
    value: var_core_value_sig3EBD
  };
}
let Zt = function (var_core_value_sig1AC3) {
    return var_core_value_sig1AC3.SeriesStyle = ox27081f(1645), var_core_value_sig1AC3[ox27081f(1538)] = ox27081f(905), var_core_value_sig1AC3[ox27081f(817)] = ox27081f(592), var_core_value_sig1AC3.PieAggregateStyle = "pieAggregateStyle", var_core_value_sig1AC3[ox27081f(1203)] = ox27081f(1648), var_core_value_sig1AC3[ox27081f(1302)] = ox27081f(920), var_core_value_sig1AC3.WaterfallStyle = ox27081f(710), var_core_value_sig1AC3;
  }({}),
  Qt = function (var_core_value_sig66B8) {
    return var_core_value_sig66B8.PieStyle = ox131096(905), var_core_value_sig66B8[ox131096(1232)] = ox131096(639), var_core_value_sig66B8.ParetoLineSeries = "paretoLineSeries", var_core_value_sig66B8[ox131096(1362)] = ox131096(741), var_core_value_sig66B8[ox131096(1757)] = ox131096(1656), var_core_value_sig66B8.WordCloud = ox131096(1092), var_core_value_sig66B8.Data = "data", var_core_value_sig66B8;
  }({}),
  $t = function (var_core_value_sig4C7F) {
    return var_core_value_sig4C7F[ox128582(2004)] = ox128582(1169), var_core_value_sig4C7F[ox128582(1568)] = ox128582(996), var_core_value_sig4C7F;
  }({}),
  en = function (var_core_value_sig2543) {
    return var_core_value_sig2543[ox1723eb(1015)] = "chartStyle", var_core_value_sig2543[ox1723eb(1406)] = ox1723eb(1765), var_core_value_sig2543.Legend = ox1723eb(1565), var_core_value_sig2543.HorizontalAxis = "horizontalAxis", var_core_value_sig2543.VerticalAxis = ox1723eb(1097), var_core_value_sig2543[ox1723eb(526)] = "rightVerticalAxis", var_core_value_sig2543.Series = "series", var_core_value_sig2543[ox1723eb(1538)] = ox1723eb(905), var_core_value_sig2543[ox1723eb(1232)] = ox1723eb(639), var_core_value_sig2543[ox1723eb(1696)] = "paretoLineSeries", var_core_value_sig2543.WaterfallSeries = "waterfallSeries", var_core_value_sig2543.Relation = "relation", var_core_value_sig2543[ox1723eb(513)] = ox1723eb(1092), var_core_value_sig2543[ox1723eb(479)] = ox1723eb(1317), var_core_value_sig2543[ox1723eb(1944)] = ox1723eb(1394), var_core_value_sig2543[ox1723eb(1654)] = ox1723eb(1729), var_core_value_sig2543[ox1723eb(1469)] = "lineAndArea", var_core_value_sig2543[ox1723eb(951)] = ox1723eb(1987), var_core_value_sig2543[ox1723eb(1506)] = ox1723eb(1080), var_core_value_sig2543[ox1723eb(839)] = "trendline", var_core_value_sig2543.Candlestick = ox1723eb(1345), var_core_value_sig2543.Histogram = "histogram", var_core_value_sig2543[ox1723eb(1478)] = ox1723eb(1136), var_core_value_sig2543[ox1723eb(1220)] = ox1723eb(1600), var_core_value_sig2543[ox1723eb(746)] = ox1723eb(1385), var_core_value_sig2543[ox1723eb(826)] = ox1723eb(712), var_core_value_sig2543;
  }({});
const P = {
    Title: "title",
    Subtitle: "subtitle",
    XAxisTitle: "xAxisTitle",
    YAxisTitle: "yAxisTitle",
    RightYAxisTitle: "rightYAxisTitle"
  },
  F = {
    XAxis: "xAxis",
    YAxis: "yAxis",
    RightYAxis: "rightYAxis"
  };
function tn(var_core_value_sigB230) {
  switch (var_core_value_sigB230[ox40126d(1201)]) {
    case "title":
      return {
        scope: "title",
        titleKey: P.Title
      };
    case ox40126d(1247):
      return {
        scope: "title",
        titleKey: P.Subtitle
      };
    case ox40126d(975):
      return {
        scope: ox40126d(1172),
        axisId: F[ox40126d(645)],
        titleKey: P[ox40126d(1056)]
      };
    case ox40126d(1125):
      return {
        scope: ox40126d(1172),
        axisId: F[ox40126d(2012)],
        titleKey: P[ox40126d(763)]
      };
    case ox40126d(1134):
      return {
        scope: "axisTitle",
        axisId: F[ox40126d(1366)],
        titleKey: P[ox40126d(1275)]
      };
    case "xAxisLabel":
    case ox40126d(1390):
      return {
        scope: ox40126d(708),
        axisId: F[ox40126d(645)]
      };
    case ox40126d(1900):
    case ox40126d(671):
      return {
        scope: "axis",
        axisId: F[ox40126d(2012)]
      };
    case ox40126d(1012):
    case ox40126d(1775):
      return {
        scope: ox40126d(708),
        axisId: F.RightYAxis
      };
    case ox40126d(1565):
      return {
        scope: "legend",
        legendIndex: var_core_value_sigB230[ox40126d(1613)],
        legendName: var_core_value_sigB230[ox40126d(675)]
      };
    case "mark":
      {
        let var_core_value_sig861B = {
          scope: ox40126d(1187)
        };
        return var_core_value_sigB230[ox40126d(805)] !== undefined && (var_core_value_sig861B.seriesId = var_core_value_sigB230.seriesId), var_core_value_sigB230[ox40126d(1912)] !== undefined && (var_core_value_sig861B[ox40126d(1912)] = var_core_value_sigB230[ox40126d(1912)]), var_core_value_sigB230[ox40126d(879)] !== undefined && (var_core_value_sig861B.dataIndex = var_core_value_sigB230.dataIndex), var_core_value_sig861B;
      }
    case ox40126d(837):
      return typeof var_core_value_sigB230[ox40126d(805)] == ox40126d(2002) && typeof var_core_value_sigB230[ox40126d(1912)] == "number" ? {
        scope: "series",
        seriesId: var_core_value_sigB230[ox40126d(805)],
        seriesIndex: var_core_value_sigB230.seriesIndex
      } : undefined;
  }
}
function nn(var_core_value_sig407E) {
  return var_core_value_sig407E === F[ox423b44(645)] ? {
    tab: "style",
    section: ox423b44(1952),
    axisId: var_core_value_sig407E
  } : var_core_value_sig407E === F[ox423b44(1366)] ? {
    tab: ox423b44(1169),
    section: ox423b44(638),
    axisId: var_core_value_sig407E
  } : {
    tab: ox423b44(1169),
    section: "verticalAxis",
    axisId: var_core_value_sig407E
  };
}
function rn(var_core_value_sig88CB) {
  switch (var_core_value_sig88CB) {
    case ox7463a9(905):
      return ox7463a9(905);
    case ox7463a9(639):
      return ox7463a9(639);
    case ox7463a9(687):
      return ox7463a9(687);
    case ox7463a9(741):
      return ox7463a9(741);
    case "relation":
      return "relation";
    case ox7463a9(1092):
      return ox7463a9(1092);
    default:
      return;
  }
}
function an(var_core_value_sigD615) {
  switch (var_core_value_sigD615.scope) {
    case "chartArea":
      return {
        tab: ox127980(1169),
        section: ox127980(998)
      };
    case ox127980(1703):
      return {
        tab: ox127980(1169),
        section: ox127980(1765),
        titleKey: var_core_value_sigD615[ox127980(1880)]
      };
    case ox127980(1172):
      return {
        tab: ox127980(1169),
        section: ox127980(1765),
        axisId: var_core_value_sigD615[ox127980(1422)],
        titleKey: var_core_value_sigD615[ox127980(1880)]
      };
    case ox127980(708):
    case ox127980(962):
    case ox127980(528):
      return nn(var_core_value_sigD615[ox127980(1422)]);
    case ox127980(1565):
      return {
        tab: ox127980(1169),
        section: ox127980(1565)
      };
    case ox127980(1187):
      {
        let var_core_value_sig5237 = var_core_value_sigD615[ox127980(1940)];
        if ((var_core_value_sig5237 == null ? undefined : var_core_value_sig5237[ox127980(1201)]) === ox127980(1645)) return {
          tab: ox127980(1169),
          section: "series",
          seriesId: var_core_value_sig5237.seriesId
        };
        if ((var_core_value_sig5237 == null ? undefined : var_core_value_sig5237[ox127980(1201)]) === ox127980(905)) return {
          tab: "style",
          section: "pieStyle"
        };
        if ((var_core_value_sig5237 == null ? undefined : var_core_value_sig5237[ox127980(1201)]) === ox127980(920)) return {
          tab: ox127980(1169),
          section: var_core_value_sig5237.part === e[ox127980(1501)][ox127980(1046)] ? ox127980(639) : "paretoLineSeries"
        };
        if ((var_core_value_sig5237 == null ? undefined : var_core_value_sig5237[ox127980(1201)]) === ox127980(710)) return {
          tab: "style",
          section: ox127980(741),
          seriesId: var_core_value_sig5237.seriesId
        };
        let var_core_value_sigBB00 = rn(var_core_value_sigD615[ox127980(1605)]);
        return var_core_value_sigBB00 ? {
          tab: ox127980(1169),
          section: var_core_value_sigBB00,
          ...(var_core_value_sigBB00 === "waterfallSeries" ? {
            seriesId: var_core_value_sigD615[ox127980(805)]
          } : {})
        } : var_core_value_sigD615[ox127980(1605)] === ox127980(996) ? {
          tab: ox127980(996)
        } : var_core_value_sigD615[ox127980(805)] ? {
          tab: ox127980(1169),
          section: ox127980(837),
          seriesId: var_core_value_sigD615[ox127980(805)]
        } : undefined;
      }
    case "series":
      return {
        tab: ox127980(1169),
        section: ox127980(837),
        seriesId: var_core_value_sigD615[ox127980(805)]
      };
    case ox127980(851):
    case "dataLabel":
      return var_core_value_sigD615[ox127980(805)] ? {
        tab: "style",
        section: ox127980(837),
        seriesId: var_core_value_sigD615[ox127980(805)]
      } : undefined;
  }
}
let on = function (var_core_value_sigB708) {
  return var_core_value_sigB708[var_core_value_sigB708[ox4cd59a(603)] = 1] = ox4cd59a(603), var_core_value_sigB708[var_core_value_sigB708[ox4cd59a(1468)] = 2] = ox4cd59a(1468), var_core_value_sigB708[var_core_value_sigB708[ox4cd59a(1506)] = 4] = "IndicatorLine", var_core_value_sigB708[var_core_value_sigB708[ox4cd59a(1435)] = 8] = ox4cd59a(1435), var_core_value_sigB708;
}({});
const sn = [[e.ChartTypeBits["Pie"], 7], [e.ChartTypeBits["Radar"], 1], [e.ChartTypeBits["WordCloud"], 15], [e.ChartTypeBits["Funnel"], 5], [e.ChartTypeBits["Relation"], 7], [e.ChartTypeBits["Waterfall"], 2], [e.ChartTypeBits["Sankey"], 15], [e.ChartTypeBits["Heatmap"], 3], [e.ChartTypeBits["Candlestick"], 6], [e.ChartTypeBits["Histogram"], 4], [e.ChartTypeBits["Treemap"], 15], [e.ChartTypeBits["Sunburst"], 15], [e.ChartTypeBits["Gauge"], 15], [e.ChartTypeBits["Chord"], 15]],
  cn = [e.ChartTypeBits["Line"], e.ChartTypeBits["Area"], e.ChartTypeBits["Scatter"], e.ChartTypeBits["Combination"]],
  ln = [e.ChartTypeBits["Column"], e.ChartTypeBits["Bar"], e.ChartTypeBits["Line"], e.ChartTypeBits["Area"], e.ChartTypeBits["Scatter"], e.ChartTypeBits["Bubble"], e.ChartTypeBits["Combination"], e.ChartTypeBits["Pie"], e.ChartTypeBits["Radar"]],
  un = new Set([e.ChartTypeBits["Line"], e.ChartTypeBits["Column"], e.ChartTypeBits["ColumnStacked"], e.ChartTypeBits["ColumnPercentStacked"], e.ChartTypeBits["Bar"], e.ChartTypeBits["BarStacked"], e.ChartTypeBits["BarPercentStacked"], e.ChartTypeBits["Area"], e.ChartTypeBits["AreaStacked"], e.ChartTypeBits["AreaPercentStacked"], e.ChartTypeBits["Pie"], e.ChartTypeBits["Doughnut"], e.ChartTypeBits["Combination"], e.ChartTypeBits["Funnel"], e.ChartTypeBits["Waterfall"], e.ChartTypeBits["Boxplot"], e.ChartTypeBits["Scatter"]]);
function dn(var_core_value_sig60EF) {
  return un[ox5dd8af(863)](var_core_value_sig60EF);
}
function fn(var_core_value_sigA6FB, var_core_value_sigD6EA) {
  return var_core_value_sigA6FB !== e[ox3092ae(653)].None && sn.every(([var_core_value_sig7BE0, var_core_value_sig7D40]) => !e[ox3092ae(1226)][ox3092ae(1429)](var_core_value_sigA6FB, var_core_value_sig7BE0) || e.chartBitsUtils[ox3092ae(1225)](var_core_value_sig7D40, var_core_value_sigD6EA) === var_core_value_sig7D40);
}
function pn(var_core_value_sigA2D3) {
  return var_core_value_sigA2D3 !== e[ox4b1715(653)].None && cn[ox4b1715(1399)](var_core_value_sig6C7E => e[ox4b1715(1226)][ox4b1715(1429)](var_core_value_sigA2D3, var_core_value_sig6C7E));
}
function mn(var_core_value_sig727A) {
  return var_core_value_sig727A !== e.ChartTypeBits[ox2d5f82(1859)] && ln[ox2d5f82(1399)](var_core_value_sig68BE => e[ox2d5f82(1226)].baseOn(var_core_value_sig727A, var_core_value_sig68BE));
}
function hn(var_core_value_sig6AF1) {
  return var_core_value_sig6AF1 != null && typeof var_core_value_sig6AF1 != ox51188d(1053);
}
function I(var_core_value_sig3F6A) {
  let var_core_value_sig23B4 = (0, r.useId)(),
    var_core_value_sig350C = hn(var_core_value_sig3F6A[ox58df23(1899)]),
    var_core_value_sig2335 = hn(var_core_value_sig3F6A[ox58df23(764)]),
    var_core_value_sig6233 = var_core_value_sig350C ? var_core_value_sig23B4 + ox58df23(1528) : undefined,
    var_core_value_sig4230 = var_core_value_sig2335 ? var_core_value_sig23B4 + ox58df23(1803) : undefined;
  return (0, i.jsxs)("fieldset", {
    "aria-describedby": [var_core_value_sig6233, var_core_value_sig4230][ox58df23(1573)](Boolean)[ox58df23(766)]("\x20") || undefined,
    "aria-invalid": var_core_value_sig2335 || undefined,
    className: "univer-m-0\x20univer-min-w-0\x20univer-border-0\x20univer-p-0",
    disabled: var_core_value_sig3F6A.disabled,
    children: [(0, i[ox58df23(922)])("legend", {
      className: ox58df23(1357),
      children: var_core_value_sig3F6A.label
    }), var_core_value_sig3F6A[ox58df23(1492)], var_core_value_sig350C && (0, i[ox58df23(922)])(ox58df23(1904), {
      id: var_core_value_sig6233,
      className: ox58df23(1523),
      children: var_core_value_sig3F6A[ox58df23(1899)]
    }), var_core_value_sig2335 && (0, i[ox58df23(922)])(ox58df23(1904), {
      id: var_core_value_sig4230,
      className: ox58df23(1224),
      children: var_core_value_sig3F6A[ox58df23(764)]
    })]
  });
}
function gn(var_core_value_sig6136) {
  let var_core_value_sigD25E = var_core_value_sig6136.alignLabel !== undefined && var_core_value_sig6136[ox361bb4(1996)] !== undefined && var_core_value_sig6136.value[ox361bb4(1358)] !== undefined;
  return (0, i[ox361bb4(922)])(I, {
    disabled: var_core_value_sig6136.disabled,
    error: var_core_value_sig6136[ox361bb4(764)],
    help: var_core_value_sig6136[ox361bb4(1899)],
    label: var_core_value_sig6136.label,
    children: (0, i[ox361bb4(922)])(it, {
      align: var_core_value_sig6136[ox361bb4(1324)][ox361bb4(1358)],
      alignControl: var_core_value_sigD25E,
      alignOptions: var_core_value_sig6136[ox361bb4(1996)],
      bold: var_core_value_sig6136.value["bold"],
      color: var_core_value_sig6136[ox361bb4(1324)][ox361bb4(1393)] ?? var_core_value_sig6136[ox361bb4(557)],
      colorResetLabel: var_core_value_sig6136[ox361bb4(1690)],
      fontSize: var_core_value_sig6136.value[ox361bb4(1003)] ?? undefined,
      fontSizeEmptyLabel: var_core_value_sig6136[ox361bb4(1088)],
      fontSizeIsDefault: var_core_value_sig6136[ox361bb4(1324)][ox361bb4(1003)] === null,
      fontSizeOptions: var_core_value_sig6136[ox361bb4(1008)],
      italic: var_core_value_sig6136.value[ox361bb4(1796)],
      onChange: (var_core_value_sig04C6, var_core_value_sigCA05) => {
        const var_core_value_sig2F2B = ox361bb4;
        var_core_value_sig04C6 === var_core_value_sig2F2B(1358) && var_core_value_sig6136.onChange(var_core_value_sig2F2B(1358), var_core_value_sigCA05), var_core_value_sig04C6 === var_core_value_sig2F2B(1642) && var_core_value_sig6136.onChange("bold", var_core_value_sigCA05), var_core_value_sig04C6 === "color" && var_core_value_sig6136[var_core_value_sig2F2B(507)](var_core_value_sig2F2B(1393), var_core_value_sigCA05), var_core_value_sig04C6 === "fontSize" && var_core_value_sig6136.onChange(var_core_value_sig2F2B(1003), var_core_value_sigCA05), var_core_value_sig04C6 === "italic" && var_core_value_sig6136[var_core_value_sig2F2B(507)](var_core_value_sig2F2B(1796), var_core_value_sigCA05);
      },
      onColorReset: () => var_core_value_sig6136.onChange(ox361bb4(1393), null),
      onFontSizeReset: () => var_core_value_sig6136.onChange("fontSize", null)
    })
  });
}
function L(var_core_value_sigE1BC) {
  let var_core_value_sigCF44 = Gt().adaptiveSize ?? (0, e.getChartRuntimeAdaptiveSize)(undefined);
  return (0, r[ox2292c5(1687)])(() => var_core_value_sigCF44[ox2292c5(1684)](var_core_value_sigE1BC), [var_core_value_sigCF44, var_core_value_sigE1BC]);
}
const R = {
  bold: e.defaultChartConfig["textStyle"].bold,
  color: e.defaultChartConfig["textStyle"].color,
  fontSize: null,
  italic: e.defaultChartConfig["textStyle"].italic
};
function z(var_core_value_sig3C97, var_core_value_sigA920) {
  return {
    bold: (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97.bold) ?? var_core_value_sigA920[ox14894b(1642)],
    color: (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97[ox14894b(1393)]) ?? var_core_value_sigA920[ox14894b(1393)],
    fontSize: (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97[ox14894b(1003)]) ?? null,
    italic: (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97.italic) ?? var_core_value_sigA920[ox14894b(1796)],
    ...(var_core_value_sigA920[ox14894b(1358)] === undefined ? {} : {
      align: (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97[ox14894b(1358)]) ?? var_core_value_sigA920[ox14894b(1358)]
    })
  };
}
function B(var_core_value_sigAD56) {
  let {
    align: var_core_value_sig0454,
    ...var_core_value_sigEE1A
  } = var_core_value_sigAD56;
  return var_core_value_sigEE1A;
}
function V(var_core_value_sig4107) {
  let var_core_value_sigF35C = (0, o[ox1858b4(858)])(a[ox1858b4(1419)]),
    var_core_value_sigEF8D = L($e);
  return (0, i[ox1858b4(922)])(gn, {
    alignLabel: var_core_value_sig4107[ox1858b4(1368)],
    alignOptions: var_core_value_sig4107[ox1858b4(1996)],
    boldLabel: var_core_value_sigF35C.t("chart-ui.common.bold"),
    colorEmptyLabel: var_core_value_sigF35C.t("chart-ui.editor.defaultColor"),
    colorLabel: var_core_value_sigF35C.t(ox1858b4(677)),
    colorPickerFallbackValue: var_core_value_sig4107[ox1858b4(557)],
    colorResetLabel: var_core_value_sigF35C.t(ox1858b4(819)),
    fontSizeEmptyLabel: var_core_value_sigF35C.t("chart-ui.common.default"),
    fontSizeLabel: var_core_value_sigF35C.t(ox1858b4(2018)),
    fontSizeOptions: var_core_value_sigEF8D,
    italicLabel: var_core_value_sigF35C.t(ox1858b4(1314)),
    label: var_core_value_sig4107[ox1858b4(1614)],
    value: var_core_value_sig4107.value,
    onChange: (var_core_value_sig70AF, var_core_value_sigD04E) => var_core_value_sig4107[ox1858b4(507)]({
      [var_core_value_sig70AF]: var_core_value_sigD04E
    })
  });
}
function H(var_core_value_sigE025) {
  let var_core_value_sigD549 = var_core_value_sigE025[ox150262(1467)] ? (0, i[ox150262(922)])(ox150262(1904), {
    className: ox150262(911),
    children: var_core_value_sigE025.label
  }) : var_core_value_sigE025.label;
  return (0, i[ox150262(922)])(I, {
    disabled: var_core_value_sigE025[ox150262(1937)],
    error: var_core_value_sigE025[ox150262(764)],
    help: var_core_value_sigE025.help,
    label: var_core_value_sigD549,
    children: (0, i[ox150262(922)])(t[ox150262(1138)], {
      checked: var_core_value_sigE025[ox150262(725)],
      disabled: var_core_value_sigE025[ox150262(1937)],
      onChange: var_core_value_sigB99B => var_core_value_sigE025.onChange(!!var_core_value_sigB99B),
      children: (0, i.jsx)(ox150262(1904), {
        className: var_core_value_sigE025.inlineLabel ? undefined : "univer-sr-only",
        children: var_core_value_sigE025.label
      })
    })
  });
}
const _n = [{
    value: e.ChartBorderDashType["Solid"],
    labelKey: "chart-ui.series.solid"
  }, {
    value: e.ChartBorderDashType["Dashed"],
    labelKey: "chart-ui.common.dashed"
  }, {
    value: e.ChartBorderDashType["Dotted"],
    labelKey: "chart-ui.common.dotted"
  }],
  vn = [{
    value: e.LinePointShape["Circle"],
    labelKey: "chart-ui.common.circle"
  }, {
    value: e.LinePointShape["Square"],
    labelKey: "chart-ui.series.square"
  }, {
    value: e.LinePointShape["Triangle"],
    labelKey: "chart-ui.common.triangle"
  }, {
    value: e.LinePointShape["Diamond"],
    labelKey: "chart-ui.common.diamond"
  }, {
    value: e.LinePointShape["Rect"],
    labelKey: "chart-ui.series.rect"
  }, {
    value: e.LinePointShape["RoundRect"],
    labelKey: "chart-ui.series.roundRect"
  }, {
    value: e.LinePointShape["Pin"],
    labelKey: "chart-ui.series.pin"
  }, {
    value: e.LinePointShape["Arrow"],
    labelKey: "chart-ui.common.arrow"
  }, {
    value: e.LinePointShape["None"],
    labelKey: "chart-ui.common.none"
  }, {
    value: e.LinePointShape["EmptyCircle"],
    labelKey: "chart-ui.series.emptyCircle"
  }, {
    value: e.LinePointShape["EmptySquare"],
    labelKey: "chart-ui.series.emptySquare"
  }, {
    value: e.LinePointShape["EmptyTriangle"],
    labelKey: "chart-ui.series.emptyTriangle"
  }, {
    value: e.LinePointShape["EmptyDiamond"],
    labelKey: "chart-ui.series.emptyDiamond"
  }, {
    value: e.LinePointShape["EmptyRect"],
    labelKey: "chart-ui.series.emptyRect"
  }, {
    value: e.LinePointShape["EmptyRoundRect"],
    labelKey: "chart-ui.series.emptyRoundRect"
  }, {
    value: e.LinePointShape["EmptyPin"],
    labelKey: "chart-ui.series.emptyPin"
  }, {
    value: e.LinePointShape["EmptyArrow"],
    labelKey: "chart-ui.series.emptyArrow"
  }],
  yn = [-90, -60, -45, -30, 0, 30, 45, 60, 90],
  bn = [1, 2, 3],
  xn = [2, 3, 4, 5, 6],
  Sn = "__default__",
  U = {
    max: 1,
    min: 0,
    step: 0.1
  },
  Cn = [0, 0.25, e.defaultChartConfig["pie"].doughnutHole, 0.75];
function W(var_core_value_sigC79E) {
  return String(var_core_value_sigC79E ?? ox2dccd4(1741));
}
function G(var_core_value_sig9221) {
  return var_core_value_sig9221 === ox153de1(1741) ? null : Number(var_core_value_sig9221);
}
function K(var_core_value_sig0351, var_core_value_sig4686) {
  return [{
    label: var_core_value_sig0351,
    value: Sn
  }, ...var_core_value_sig4686];
}
function wn(var_core_value_sig8E1C) {
  return K(var_core_value_sig8E1C, yn[ox410397(1285)](var_core_value_sig5A75 => ({
    label: var_core_value_sig5A75 + "°",
    value: String(var_core_value_sig5A75)
  })));
}
function Tn() {
  return xn.map(var_core_value_sig7BAF => ({
    label: String(var_core_value_sig7BAF),
    value: String(var_core_value_sig7BAF)
  }));
}
function En(var_core_value_sigD719 = bn) {
  return var_core_value_sigD719[ox3d2bc0(1285)](var_core_value_sig8F69 => ({
    label: var_core_value_sig8F69 + "px",
    value: String(var_core_value_sig8F69)
  }));
}
const Dn = {
  color: e.defaultChartConfig["textStyle"].color,
  dateAxisRotation: e.defaultChartConfig["axis"].dateAxisRotate,
  gridlineWidth: 1,
  labelFontSize: e.defaultChartConfig["textStyle"].fontSize,
  labelRotation: 0,
  labelVisible: e.defaultChartConfig["axis"].labelVisible,
  primaryGridLineVisible: false,
  reverse: e.defaultChartConfig["axis"].reverse,
  secondaryGridLineVisible: true,
  tickLength: Sn,
  tickPosition: e.ChartAxisTickPosition["Outside"],
  tickVisible: false,
  tickWidth: Sn
};
function q(var_core_value_sig323C) {
  let [var_core_value_sig015D, var_core_value_sigBF8B] = N("axes"),
    var_core_value_sigF7CE = (var_core_value_sig015D == null ? undefined : var_core_value_sig015D[var_core_value_sig323C]) ?? {},
    var_core_value_sig7CF1 = Gt();
  return {
    patch: var_core_value_sig6884 => var_core_value_sigBF8B({
      ...var_core_value_sig015D,
      [var_core_value_sig323C]: {
        ...var_core_value_sigF7CE,
        ...var_core_value_sig6884
      }
    }),
    runtimeAxis: zt(var_core_value_sig7CF1[ox2916df(714)], var_core_value_sig7CF1[ox2916df(1922)], var_core_value_sig323C),
    style: var_core_value_sigF7CE
  };
}
function On(var_core_value_sigA552) {
  let var_core_value_sigAE32 = (0, o[oxdff2cd(858)])(a.LocaleService),
    {
      patch: var_core_value_sig9B4D,
      runtimeAxis: var_core_value_sig2704,
      style: var_core_value_sigD0CC
    } = q(var_core_value_sigA552[oxdff2cd(708)]);
  if (!var_core_value_sig2704) return null;
  let var_core_value_sigF347 = var_core_value_sigD0CC[oxdff2cd(1180)] ?? {};
  return (0, i[oxdff2cd(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sigF347[oxdff2cd(1755)] ?? var_core_value_sig2704[oxdff2cd(1906)] === e[oxdff2cd(1483)][oxdff2cd(1543)],
    label: var_core_value_sigAE32.t(oxdff2cd(1459)),
    onChange: var_core_value_sig066E => var_core_value_sig9B4D({
      line: {
        ...var_core_value_sigF347,
        visible: var_core_value_sig066E
      }
    })
  });
}
function kn(var_core_value_sig80C6) {
  let var_core_value_sigEBFB = (0, o.useDependency)(a.LocaleService),
    {
      patch: var_core_value_sigF3BF,
      runtimeAxis: var_core_value_sigAE58,
      style: var_core_value_sig8E13
    } = q(var_core_value_sig80C6[ox350a78(708)]);
  if (!var_core_value_sigAE58) return null;
  let var_core_value_sig3AAF = var_core_value_sig8E13[ox350a78(1614)] ?? {};
  return (0, i[ox350a78(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sig3AAF[ox350a78(1755)] ?? var_core_value_sig80C6.defaultValues[ox350a78(979)],
    label: var_core_value_sigEBFB.t(ox350a78(498)),
    onChange: var_core_value_sig9B0D => var_core_value_sigF3BF({
      label: {
        ...var_core_value_sig3AAF,
        visible: var_core_value_sig9B0D
      }
    })
  });
}
function An(var_core_value_sig134E) {
  let var_core_value_sigA3C0 = (0, o.useDependency)(a[oxe3681c(1419)]),
    {
      patch: var_core_value_sig723F,
      runtimeAxis: var_core_value_sigD044,
      style: var_core_value_sig9797
    } = q(var_core_value_sig134E[oxe3681c(708)]);
  return !var_core_value_sigD044 || var_core_value_sig134E[oxe3681c(708)] === oxe3681c(1872) ? null : (0, i[oxe3681c(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sig9797.reverse ?? var_core_value_sig134E[oxe3681c(801)][oxe3681c(622)],
    label: var_core_value_sigA3C0.t("chart-ui.axis.reverse"),
    onChange: var_core_value_sig3D2C => var_core_value_sig723F({
      reverse: var_core_value_sig3D2C
    })
  });
}
function jn(var_core_value_sig8533) {
  let var_core_value_sig57C5 = (0, o[ox6203df(858)])(a[ox6203df(1419)]),
    {
      patch: var_core_value_sig0DE9,
      runtimeAxis: var_core_value_sigB00D,
      style: var_core_value_sig57C8
    } = q(var_core_value_sig8533[ox6203df(708)]);
  return var_core_value_sigB00D ? (0, i[ox6203df(1557)])(O, {
    children: [(0, i[ox6203df(922)])(k, {
      label: var_core_value_sig57C5.t(ox6203df(652)),
      value: var_core_value_sig57C8[ox6203df(1337)] ?? null,
      onChange: var_core_value_sigC56D => var_core_value_sig0DE9(var_core_value_sigC56D !== null && var_core_value_sig57C8.max != null && var_core_value_sigC56D >= var_core_value_sig57C8[ox6203df(628)] ? {
        min: var_core_value_sigC56D,
        max: null
      } : {
        min: var_core_value_sigC56D
      })
    }), (0, i[ox6203df(922)])(k, {
      label: var_core_value_sig57C5.t("chart-ui.common.maximum"),
      value: var_core_value_sig57C8[ox6203df(628)] ?? null,
      onChange: var_core_value_sig3A17 => var_core_value_sig0DE9(var_core_value_sig3A17 !== null && var_core_value_sig57C8[ox6203df(1337)] != null && var_core_value_sig3A17 <= var_core_value_sig57C8[ox6203df(1337)] ? {
        min: null,
        max: var_core_value_sig3A17
      } : {
        max: var_core_value_sig3A17
      })
    })]
  }) : null;
}
function Mn(var_core_value_sigC27D) {
  let var_core_value_sig7B95 = (0, o[ox2b64c1(858)])(a[ox2b64c1(1419)]),
    {
      patch: var_core_value_sig7D59,
      runtimeAxis: var_core_value_sig5863,
      style: var_core_value_sig5BE7
    } = q(var_core_value_sigC27D.axis);
  return var_core_value_sig5863 ? (0, i[ox2b64c1(922)])(j, {
    commitMode: ox2b64c1(939),
    label: var_core_value_sig7B95.t("chart-ui.common.numberFormat"),
    value: var_core_value_sig5BE7.format ?? "",
    onChange: var_core_value_sig938F => var_core_value_sig7D59({
      format: var_core_value_sig938F
    })
  }) : null;
}
function Nn(var_core_value_sigC74A) {
  let var_core_value_sig8F6A = (0, o[ox27885e(858)])(a[ox27885e(1419)]),
    {
      patch: var_core_value_sig46EA,
      runtimeAxis: var_core_value_sig626C,
      style: var_core_value_sig9077
    } = q(var_core_value_sigC74A[ox27885e(708)]);
  if (!var_core_value_sig626C) return null;
  let var_core_value_sigC76C = var_core_value_sig9077[ox27885e(1614)] ?? {};
  return (0, i[ox27885e(1557)])(O, {
    children: [(0, i[ox27885e(922)])(k, {
      allowClear: true,
      allowEmpty: true,
      label: var_core_value_sig8F6A.t(ox27885e(1686)),
      value: var_core_value_sigC76C[ox27885e(902)] ?? null,
      onChange: var_core_value_sigD948 => var_core_value_sig46EA({
        label: {
          ...var_core_value_sigC76C,
          rotate: var_core_value_sigD948
        }
      })
    }), (0, i[ox27885e(922)])(k, {
      allowClear: true,
      allowEmpty: true,
      emptyLabel: var_core_value_sig8F6A.t(ox27885e(1990)),
      label: var_core_value_sig8F6A.t("chart-ui.editor.fontSize"),
      min: 8,
      value: var_core_value_sigC76C[ox27885e(1003)] ?? null,
      onChange: var_core_value_sigBE5E => var_core_value_sig46EA({
        label: {
          ...var_core_value_sigC76C,
          fontSize: var_core_value_sigBE5E
        }
      })
    })]
  });
}
function Pn(var_core_value_sigB23A) {
  let var_core_value_sigBA66 = (0, o[ox5866ed(858)])(a[ox5866ed(1419)]),
    {
      patch: var_core_value_sig3DF0,
      runtimeAxis: var_core_value_sig0512,
      style: var_core_value_sig4B2B
    } = q(var_core_value_sigB23A.axis);
  if (!var_core_value_sig0512) return null;
  let var_core_value_sigDF88 = var_core_value_sig4B2B.tick ?? {};
  return (0, i[ox5866ed(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sigDF88[ox5866ed(1755)] ?? var_core_value_sigB23A[ox5866ed(801)].tickVisible,
    label: var_core_value_sigBA66.t(ox5866ed(1281)),
    onChange: var_core_value_sig0281 => var_core_value_sig3DF0({
      tick: {
        ...var_core_value_sigDF88,
        visible: var_core_value_sig0281
      }
    })
  });
}
function Fn(var_core_value_sigDB93) {
  let var_core_value_sig67CF = (0, o[ox160202(858)])(a[ox160202(1419)]),
    {
      patch: var_core_value_sigCA96,
      runtimeAxis: var_core_value_sig6C5E,
      style: var_core_value_sig4997
    } = q(var_core_value_sigDB93[ox160202(708)]);
  if (!var_core_value_sig6C5E) return null;
  let var_core_value_sig7290 = var_core_value_sig4997[ox160202(962)] ?? {};
  return (0, i[ox160202(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sig7290[ox160202(1755)] ?? (var_core_value_sig6C5E[ox160202(1906)] === e.IRuntimeAxisPriority[ox160202(993)] ? var_core_value_sigDB93[ox160202(801)][ox160202(1794)] : var_core_value_sigDB93[ox160202(801)][ox160202(854)]),
    label: var_core_value_sigDB93.label ?? var_core_value_sig67CF.t("chart-ui.axis.gridlineVisible"),
    onChange: var_core_value_sigED71 => var_core_value_sigCA96({
      gridLine: {
        ...var_core_value_sig7290,
        visible: var_core_value_sigED71
      }
    })
  });
}
function In(var_core_value_sigE835) {
  let var_core_value_sig4644 = (0, o[ox221a7d(858)])(a.LocaleService),
    {
      patch: var_core_value_sig9DED,
      runtimeAxis: var_core_value_sig7DE6,
      style: var_core_value_sig120E
    } = q(var_core_value_sigE835[ox221a7d(708)]);
  if (!var_core_value_sig7DE6) return null;
  let var_core_value_sigD79B = var_core_value_sig120E[ox221a7d(962)] ?? {},
    var_core_value_sig92A3 = var_core_value_sigE835[ox221a7d(1614)] ?? var_core_value_sig4644.t(ox221a7d(1405));
  return (0, i[ox221a7d(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    emptyLabel: var_core_value_sig4644.t(ox221a7d(1990)),
    label: var_core_value_sig92A3,
    min: 0,
    value: var_core_value_sigD79B[ox221a7d(989)] ?? null,
    onChange: var_core_value_sig281C => var_core_value_sig9DED({
      gridLine: {
        ...var_core_value_sigD79B,
        width: var_core_value_sig281C
      }
    })
  });
}
function Ln(var_core_value_sig8911) {
  let var_core_value_sig8D1B = (0, o[ox5ab3cb(858)])(a.LocaleService),
    [var_core_value_sigA915] = N("chartType", e[ox5ab3cb(653)][ox5ab3cb(1859)]),
    [var_core_value_sigE1F7, var_core_value_sig4BE7] = N(ox5ab3cb(1653)),
    [var_core_value_sigF9FF, var_core_value_sigE0E3] = N(ox5ab3cb(714)),
    var_core_value_sig3AB3 = (var_core_value_sigF9FF == null ? undefined : var_core_value_sigF9FF[var_core_value_sig8911[ox5ab3cb(708)]]) ?? {},
    var_core_value_sig816E = var_core_value_sig3AB3.line ?? {},
    var_core_value_sigE6F3 = var_core_value_sig3AB3[ox5ab3cb(1614)] ?? {},
    var_core_value_sig3EE1 = z(var_core_value_sigE6F3, R),
    var_core_value_sig9673 = Gt(),
    var_core_value_sig4917 = zt(var_core_value_sig9673[ox5ab3cb(714)], var_core_value_sig9673.direction, var_core_value_sig8911[ox5ab3cb(708)]),
    var_core_value_sig3BE6 = var_core_value_sig816E[ox5ab3cb(1755)] ?? (var_core_value_sig4917 == null ? undefined : var_core_value_sig4917.priority) === e.IRuntimeAxisPriority[ox5ab3cb(1543)],
    var_core_value_sigA1C9 = var_core_value_sigE6F3.visible ?? var_core_value_sig8911.defaultValues["labelVisible"],
    var_core_value_sig77D6 = (var_core_value_sig4917 == null ? undefined : var_core_value_sig4917[ox5ab3cb(483)]) === e[ox5ab3cb(514)].Numeric,
    var_core_value_sigE3CE = var_core_value_sig8911.axis === "x" && var_core_value_sigA915 !== e.ChartTypeBits[ox5ab3cb(1546)] && var_core_value_sigA915 !== e.ChartTypeBits[ox5ab3cb(1766)],
    var_core_value_sig219B = W(var_core_value_sigE6F3[ox5ab3cb(902)]),
    var_core_value_sig4493 = var_core_value_sig8911[ox5ab3cb(1902)] ?? At;
  if (!var_core_value_sig4917) return null;
  let var_core_value_sig8B9C = var_core_value_sig3C92 => var_core_value_sigE0E3({
    ...var_core_value_sigF9FF,
    [var_core_value_sig8911[ox5ab3cb(708)]]: {
      ...var_core_value_sig3AB3,
      ...var_core_value_sig3C92
    }
  });
  return (0, i[ox5ab3cb(1557)])("div", {
    className: ox5ab3cb(1556),
    children: [(0, i[ox5ab3cb(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sig3BE6,
      label: var_core_value_sig8D1B.t(ox5ab3cb(1459)),
      onChange: var_core_value_sigB16B => var_core_value_sig8B9C({
        line: {
          ...var_core_value_sig816E,
          visible: var_core_value_sigB16B
        }
      })
    }), var_core_value_sig3BE6 && (0, i[ox5ab3cb(1557)])(O, {
      children: [(0, i[ox5ab3cb(922)])(M, {
        emptyLabel: var_core_value_sig8D1B.t(ox5ab3cb(819)),
        label: var_core_value_sig8D1B.t(ox5ab3cb(1320)),
        pickerFallbackValue: var_core_value_sig8911[ox5ab3cb(801)][ox5ab3cb(1393)],
        resetLabel: var_core_value_sig8D1B.t(ox5ab3cb(819)),
        value: var_core_value_sig816E[ox5ab3cb(1393)] ?? null,
        onChange: var_core_value_sig585D => var_core_value_sig8B9C({
          line: {
            ...var_core_value_sig816E,
            color: var_core_value_sig585D
          }
        })
      }), (0, i[ox5ab3cb(922)])(k, {
        label: var_core_value_sig8D1B.t(ox5ab3cb(1927)),
        min: 0,
        value: var_core_value_sig816E[ox5ab3cb(989)] ?? null,
        onChange: var_core_value_sigE722 => var_core_value_sig8B9C({
          line: {
            ...var_core_value_sig816E,
            width: var_core_value_sigE722
          }
        })
      })]
    }), (0, i[ox5ab3cb(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sigA1C9,
      label: var_core_value_sig8D1B.t("chart-ui.common.axisLabels"),
      onChange: var_core_value_sig062A => var_core_value_sig8B9C({
        label: {
          ...var_core_value_sigE6F3,
          visible: var_core_value_sig062A
        }
      })
    }), (0, i.jsx)(A, {
      label: var_core_value_sig8D1B.t("chart-ui.axis.labelRotation"),
      options: wn(var_core_value_sig8D1B.t(ox5ab3cb(1990))),
      value: var_core_value_sig219B,
      onChange: var_core_value_sig050A => var_core_value_sig8B9C({
        label: {
          ...var_core_value_sigE6F3,
          rotate: G(var_core_value_sig050A)
        }
      })
    }), (0, i[ox5ab3cb(922)])(V, {
      colorPickerFallbackValue: var_core_value_sig8911.defaultValues[ox5ab3cb(1393)],
      label: var_core_value_sig8D1B.t(ox5ab3cb(852)),
      value: var_core_value_sig3EE1,
      onChange: var_core_value_sig8B32 => var_core_value_sig8B9C({
        label: {
          ...var_core_value_sigE6F3,
          ...B(var_core_value_sig8B32)
        }
      })
    }), var_core_value_sigE3CE && (0, i[ox5ab3cb(922)])(H, {
      inlineLabel: true,
      checked: !!(var_core_value_sigE1F7 != null && var_core_value_sigE1F7[ox5ab3cb(504)]),
      label: var_core_value_sig8D1B.t("chart-ui.axis.useDateAxis"),
      onChange: var_core_value_sig870F => var_core_value_sig4BE7({
        ...var_core_value_sigE1F7,
        useDateAxis: var_core_value_sig870F
      })
    }), var_core_value_sig8911[ox5ab3cb(708)] !== ox5ab3cb(1872) && !var_core_value_sig77D6 && (0, i[ox5ab3cb(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sig3AB3.reverse ?? var_core_value_sig8911[ox5ab3cb(801)].reverse,
      label: var_core_value_sig8D1B.t(ox5ab3cb(1726)),
      onChange: var_core_value_sigB683 => var_core_value_sig8B9C({
        reverse: var_core_value_sigB683
      })
    }), var_core_value_sig77D6 && (0, i[ox5ab3cb(1557)])(O, {
      children: [(0, i[ox5ab3cb(922)])(k, {
        label: var_core_value_sig8D1B.t(ox5ab3cb(652)),
        value: var_core_value_sig3AB3[ox5ab3cb(1337)] ?? null,
        onChange: var_core_value_sig26EC => var_core_value_sig8B9C(var_core_value_sig26EC !== null && var_core_value_sig3AB3[ox5ab3cb(628)] != null && var_core_value_sig26EC >= var_core_value_sig3AB3[ox5ab3cb(628)] ? {
          min: var_core_value_sig26EC,
          max: null
        } : {
          min: var_core_value_sig26EC
        })
      }), (0, i[ox5ab3cb(922)])(k, {
        label: var_core_value_sig8D1B.t(ox5ab3cb(536)),
        value: var_core_value_sig3AB3[ox5ab3cb(628)] ?? null,
        onChange: var_core_value_sigEEDB => var_core_value_sig8B9C(var_core_value_sigEEDB !== null && var_core_value_sig3AB3[ox5ab3cb(1337)] != null && var_core_value_sigEEDB <= var_core_value_sig3AB3[ox5ab3cb(1337)] ? {
          min: null,
          max: var_core_value_sigEEDB
        } : {
          max: var_core_value_sigEEDB
        })
      })]
    }), (0, i.jsx)(var_core_value_sig4493, {
      label: var_core_value_sig8D1B.t(ox5ab3cb(587)),
      value: var_core_value_sig3AB3[ox5ab3cb(1875)],
      onChange: var_core_value_sig36E7 => var_core_value_sig8B9C({
        format: var_core_value_sig36E7
      })
    })]
  });
}
function Rn(var_core_value_sigA35B) {
  let var_core_value_sig82DD = (0, o[ox28ab99(858)])(a.LocaleService),
    [var_core_value_sigAAC7, var_core_value_sig1999] = N("axes"),
    var_core_value_sigFB45 = (var_core_value_sigAAC7 == null ? undefined : var_core_value_sigAAC7[var_core_value_sigA35B[ox28ab99(708)]]) ?? {},
    var_core_value_sigB86C = var_core_value_sigFB45[ox28ab99(962)] ?? {},
    var_core_value_sigD892 = var_core_value_sigFB45[ox28ab99(528)] ?? {},
    var_core_value_sig6086 = Gt(),
    var_core_value_sigAED2 = zt(var_core_value_sig6086[ox28ab99(714)], var_core_value_sig6086[ox28ab99(1922)], var_core_value_sigA35B.axis),
    var_core_value_sig3516 = var_core_value_sigB86C[ox28ab99(1755)] ?? ((var_core_value_sigAED2 == null ? undefined : var_core_value_sigAED2[ox28ab99(1906)]) === e[ox28ab99(1483)][ox28ab99(993)] ? var_core_value_sigA35B[ox28ab99(801)][ox28ab99(1794)] : var_core_value_sigA35B[ox28ab99(801)][ox28ab99(854)]),
    var_core_value_sigCDCD = var_core_value_sigD892[ox28ab99(1755)] ?? var_core_value_sigA35B[ox28ab99(801)].tickVisible,
    var_core_value_sig206A = L(bn),
    var_core_value_sig1EFE = L(qe),
    var_core_value_sig9904 = L(Je),
    var_core_value_sig39C7 = var_core_value_sig6A78 => var_core_value_sig1999({
      ...var_core_value_sigAAC7,
      [var_core_value_sigA35B[ox28ab99(708)]]: {
        ...var_core_value_sigFB45,
        ...var_core_value_sig6A78
      }
    });
  return (0, i[ox28ab99(1557)])("div", {
    className: ox28ab99(1556),
    children: [(0, i[ox28ab99(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sig3516,
      label: var_core_value_sig82DD.t(ox28ab99(1545)),
      onChange: var_core_value_sigF7EF => var_core_value_sig39C7({
        gridLine: {
          ...var_core_value_sigB86C,
          visible: var_core_value_sigF7EF
        }
      })
    }), var_core_value_sig3516 && (0, i.jsxs)(O, {
      children: [(0, i.jsx)(M, {
        emptyLabel: var_core_value_sig82DD.t(ox28ab99(819)),
        label: var_core_value_sig82DD.t(ox28ab99(1457)),
        pickerFallbackValue: var_core_value_sigA35B[ox28ab99(801)][ox28ab99(1393)],
        resetLabel: var_core_value_sig82DD.t(ox28ab99(819)),
        value: var_core_value_sigB86C[ox28ab99(1393)] ?? null,
        onChange: var_core_value_sig27F9 => var_core_value_sig39C7({
          gridLine: {
            ...var_core_value_sigB86C,
            color: var_core_value_sig27F9
          }
        })
      }), (0, i[ox28ab99(922)])(A, {
        label: var_core_value_sig82DD.t(ox28ab99(1405)),
        options: K(var_core_value_sig82DD.t("chart-ui.common.default"), En(var_core_value_sig206A)),
        value: W(var_core_value_sigB86C[ox28ab99(989)]),
        onChange: var_core_value_sig393E => var_core_value_sig39C7({
          gridLine: {
            ...var_core_value_sigB86C,
            width: G(var_core_value_sig393E)
          }
        })
      })]
    }), (0, i[ox28ab99(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sigCDCD,
      label: var_core_value_sig82DD.t(ox28ab99(1281)),
      onChange: var_core_value_sigB609 => var_core_value_sig39C7({
        tick: {
          ...var_core_value_sigD892,
          visible: var_core_value_sigB609
        }
      })
    }), (0, i[ox28ab99(1557)])(O, {
      children: [(0, i.jsx)(A, {
        label: var_core_value_sig82DD.t(ox28ab99(1158)),
        options: [{
          value: e[ox28ab99(1037)].Inside,
          label: var_core_value_sig82DD.t(ox28ab99(2031))
        }, {
          value: e[ox28ab99(1037)][ox28ab99(1150)],
          label: var_core_value_sig82DD.t(ox28ab99(1643))
        }],
        value: var_core_value_sigD892[ox28ab99(1712)] ?? var_core_value_sigA35B[ox28ab99(801)][ox28ab99(554)],
        onChange: var_core_value_sig390D => var_core_value_sig39C7({
          tick: {
            ...var_core_value_sigD892,
            position: var_core_value_sig390D
          }
        })
      }), (0, i[ox28ab99(922)])(A, {
        label: var_core_value_sig82DD.t(ox28ab99(556)),
        options: K(var_core_value_sig82DD.t(ox28ab99(1990)), Xe(var_core_value_sig1EFE)),
        value: W(var_core_value_sigD892[ox28ab99(1579)]),
        onChange: var_core_value_sigC928 => var_core_value_sig39C7({
          tick: {
            ...var_core_value_sigD892,
            length: G(var_core_value_sigC928)
          }
        })
      })]
    }), (0, i[ox28ab99(1557)])(O, {
      children: [(0, i[ox28ab99(922)])(A, {
        label: var_core_value_sig82DD.t(ox28ab99(686)),
        options: K(var_core_value_sig82DD.t(ox28ab99(1990)), Xe(var_core_value_sig9904)),
        value: W(var_core_value_sigD892[ox28ab99(989)]),
        onChange: var_core_value_sig39B7 => var_core_value_sig39C7({
          tick: {
            ...var_core_value_sigD892,
            width: G(var_core_value_sig39B7)
          }
        })
      }), (0, i[ox28ab99(922)])(M, {
        emptyLabel: var_core_value_sig82DD.t("chart-ui.editor.defaultColor"),
        label: var_core_value_sig82DD.t(ox28ab99(1804)),
        pickerFallbackValue: var_core_value_sigA35B.defaultValues[ox28ab99(1393)],
        resetLabel: var_core_value_sig82DD.t("chart-ui.editor.defaultColor"),
        value: var_core_value_sigD892[ox28ab99(1393)] ?? null,
        onChange: var_core_value_sig18E0 => var_core_value_sig39C7({
          tick: {
            ...var_core_value_sigD892,
            color: var_core_value_sig18E0
          }
        })
      })]
    })]
  });
}
function zn(var_core_value_sigA022) {
  let var_core_value_sig913A = (0, o[ox40f57d(858)])(a[ox40f57d(1419)]),
    var_core_value_sig991D = Gt(),
    [var_core_value_sig3E9C, var_core_value_sig7835] = (0, r[ox40f57d(1825)])("x"),
    var_core_value_sig1257 = [{
      value: "x",
      label: var_core_value_sig913A.t("chart-ui.common.horizontalAxis")
    }, {
      value: "y",
      label: var_core_value_sig913A.t("chart-ui.common.verticalAxis")
    }, ...(zt(var_core_value_sig991D[ox40f57d(714)], var_core_value_sig991D[ox40f57d(1922)], ox40f57d(1872)) === undefined ? [] : [{
      value: ox40f57d(1872),
      label: var_core_value_sig913A.t(ox40f57d(1246))
    }])],
    var_core_value_sig97E2 = var_core_value_sig1257[ox40f57d(1399)](var_core_value_sigE161 => var_core_value_sigE161[ox40f57d(1324)] === var_core_value_sig3E9C) ? var_core_value_sig3E9C : "x";
  return (0, i[ox40f57d(1557)])(ox40f57d(1998), {
    className: ox40f57d(1556),
    children: [(0, i.jsx)(A, {
      label: var_core_value_sig913A.t(ox40f57d(1032)),
      options: var_core_value_sig1257,
      value: var_core_value_sig97E2,
      onChange: var_core_value_sig7835
    }), (0, i[ox40f57d(922)])(Rn, {
      axis: var_core_value_sig97E2,
      defaultValues: var_core_value_sigA022[ox40f57d(801)]
    })]
  });
}
const Bn = {
  indicatorLabelBackground: e.defaultChartConfig["tooltipAxisLabelBackground"],
  indicatorLabelTextColor: e.defaultChartConfig["tooltipAxisLabelColor"],
  indicatorLineColor: e.defaultChartConfig["textStyle"].color,
  indicatorLineType: e.defaultChartConfig["indicatorLineType"]
};
function Vn(var_core_value_sigBFA3) {
  let var_core_value_sig6663 = (0, o[ox3d4586(858)])(a[ox3d4586(1419)]),
    [var_core_value_sigB250, var_core_value_sig4EAB] = N(ox3d4586(1661));
  return (0, i[ox3d4586(922)])(M, {
    emptyLabel: var_core_value_sig6663.t(ox3d4586(819)),
    label: var_core_value_sig6663.t(ox3d4586(941)),
    pickerFallbackValue: var_core_value_sigBFA3[ox3d4586(801)].indicatorLineColor,
    resetLabel: var_core_value_sig6663.t("chart-ui.editor.defaultColor"),
    value: (var_core_value_sigB250 == null ? undefined : var_core_value_sigB250[ox3d4586(1071)]) ?? null,
    onChange: var_core_value_sigBDEE => var_core_value_sig4EAB({
      ...var_core_value_sigB250,
      indicatorLineColor: var_core_value_sigBDEE
    })
  });
}
function Hn(var_core_value_sig2FD0) {
  let var_core_value_sig035C = (0, o[ox1729a9(858)])(a.LocaleService),
    [var_core_value_sigA7F0, var_core_value_sig6AE2] = N(ox1729a9(1661));
  return (0, i[ox1729a9(922)])(A, {
    label: var_core_value_sig035C.t(ox1729a9(1811)),
    options: _n.map(({
      labelKey: var_core_value_sig1F40,
      value: var_core_value_sig3FC7
    }) => ({
      label: var_core_value_sig035C.t(var_core_value_sig1F40),
      value: var_core_value_sig3FC7
    })),
    value: (var_core_value_sigA7F0 == null ? undefined : var_core_value_sigA7F0[ox1729a9(1339)]) ?? var_core_value_sig2FD0[ox1729a9(801)][ox1729a9(1339)],
    onChange: var_core_value_sig1E1B => var_core_value_sig6AE2({
      ...var_core_value_sigA7F0,
      indicatorLineType: var_core_value_sig1E1B
    })
  });
}
function Un(var_core_value_sigFD17) {
  let var_core_value_sigA5E0 = (0, o[ox122b68(858)])(a[ox122b68(1419)]),
    [var_core_value_sigC38F, var_core_value_sigFAFE] = N(ox122b68(1661));
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(M, {
      emptyLabel: var_core_value_sigA5E0.t(ox122b68(819)),
      label: var_core_value_sigA5E0.t(ox122b68(1764)),
      pickerFallbackValue: var_core_value_sigFD17[ox122b68(801)].indicatorLabelBackground,
      resetLabel: var_core_value_sigA5E0.t("chart-ui.editor.defaultColor"),
      value: (var_core_value_sigC38F == null ? undefined : var_core_value_sigC38F[ox122b68(1423)]) ?? null,
      onChange: var_core_value_sig3B10 => var_core_value_sigFAFE({
        ...var_core_value_sigC38F,
        indicatorLabelColor: var_core_value_sig3B10
      })
    }), (0, i[ox122b68(922)])(M, {
      emptyLabel: var_core_value_sigA5E0.t(ox122b68(819)),
      label: var_core_value_sigA5E0.t(ox122b68(1792)),
      pickerFallbackValue: var_core_value_sigFD17[ox122b68(801)].indicatorLabelTextColor,
      resetLabel: var_core_value_sigA5E0.t(ox122b68(819)),
      value: (var_core_value_sigC38F == null ? undefined : var_core_value_sigC38F[ox122b68(1920)]) ?? null,
      onChange: var_core_value_sig89E6 => var_core_value_sigFAFE({
        ...var_core_value_sigC38F,
        indicatorLabelTextColor: var_core_value_sig89E6
      })
    })]
  });
}
function Wn(var_core_value_sig2B86) {
  return (0, i.jsxs)(ox2c99a8(1998), {
    className: ox2c99a8(1556),
    children: [(0, i[ox2c99a8(922)])(Vn, {
      defaultValues: var_core_value_sig2B86[ox2c99a8(801)]
    }), (0, i[ox2c99a8(922)])(Hn, {
      defaultValues: var_core_value_sig2B86.defaultValues
    }), (0, i[ox2c99a8(922)])(Un, {
      defaultValues: var_core_value_sig2B86.defaultValues
    })]
  });
}
const Gn = {
  font: {
    ...R,
    color: e.defaultChartConfig["textStyle"].color,
    fontSize: e.defaultChartConfig["textStyle"].fontSize
  },
  position: e.defaultChartConfig["legend"].position,
  selectMode: e.defaultChartConfig["legend"].selectMode,
  visualMapType: e.defaultChartConfig["heatmap"].visualMapType,
  wrap: false
};
function Kn(var_core_value_sig8873) {
  return var_core_value_sig8873 === true ? {
    visible: true
  } : var_core_value_sig8873 === false ? {
    visible: false
  } : var_core_value_sig8873 ?? {};
}
function qn(var_core_value_sigB9C5) {
  var var_core_value_sig511D, var_core_value_sig1610;
  let [var_core_value_sig23AB] = N(ox490543(553), e.ChartTypeBits[ox490543(1859)]),
    [var_core_value_sigA15D, var_core_value_sig7E90] = N(ox490543(1565)),
    [var_core_value_sig03F7, var_core_value_sig756F] = N(ox490543(1729)),
    [var_core_value_sig0DB1] = N("pie"),
    var_core_value_sig4950 = Kn(var_core_value_sigA15D),
    var_core_value_sig4424 = e[ox490543(1790)].legend[ox490543(1370)][ox490543(1868)](var_core_value_sig23AB),
    var_core_value_sig57E8 = var_core_value_sig4950[ox490543(1755)] === false ? e[ox490543(1331)][ox490543(1566)] : var_core_value_sig4950.position ?? (var_core_value_sig4424 ? e.LegendPositionEnum[ox490543(1566)] : var_core_value_sigB9C5[ox490543(1712)]),
    var_core_value_sig76B6 = var_core_value_sig4950[ox490543(729)] ?? var_core_value_sigB9C5.wrap,
    var_core_value_sig89BC = var_core_value_sig4950.selectMode ?? var_core_value_sigB9C5[ox490543(1353)],
    var_core_value_sig2191 = (var_core_value_sig03F7 == null ? undefined : var_core_value_sig03F7[ox490543(1482)]) ?? var_core_value_sigB9C5.visualMapType,
    var_core_value_sig3B2E = z(var_core_value_sig4950, var_core_value_sigB9C5[ox490543(1235)]),
    var_core_value_sig5A9A = var_core_value_sig57E8 === e.LegendPositionEnum["Top"] || var_core_value_sig57E8 === e[ox490543(1331)][ox490543(1831)],
    var_core_value_sigB524 = e.chartBitsUtils[ox490543(1429)](var_core_value_sig23AB, e[ox490543(653)][ox490543(1654)]),
    var_core_value_sig8CFB = var_core_value_sig0DB1 == null || (var_core_value_sig511D = var_core_value_sig0DB1.composite) == null || (var_core_value_sig511D = var_core_value_sig511D.secondaryPlot) == null ? undefined : var_core_value_sig511D[ox490543(483)];
  return {
    canWrap: var_core_value_sig5A9A,
    chartType: var_core_value_sig23AB,
    defaultValues: var_core_value_sigB9C5,
    font: var_core_value_sig3B2E,
    heatmap: var_core_value_sig03F7,
    isCompositePie: e[ox490543(1226)].baseOn(var_core_value_sig23AB, e[ox490543(653)][ox490543(600)]) && (var_core_value_sig0DB1 == null || (var_core_value_sig1610 = var_core_value_sig0DB1[ox490543(2021)]) == null ? undefined : var_core_value_sig1610[ox490543(525)]) === true && (var_core_value_sig8CFB === e[ox490543(503)][ox490543(600)] || var_core_value_sig8CFB === e.PieSecondaryPlotType[ox490543(1046)]),
    isHeatmap: var_core_value_sigB524,
    legend: var_core_value_sig4950,
    position: var_core_value_sig57E8,
    selectMode: var_core_value_sig89BC,
    setHeatmap: var_core_value_sig756F,
    setLegend: var_core_value_sig7E90,
    visualMapType: var_core_value_sig2191,
    wrap: var_core_value_sig76B6
  };
}
const Jn = (0, r.createContext)(null);
function Yn() {
  let var_core_value_sigB52C = (0, r[ox3940dd(1443)])(Jn);
  if (!var_core_value_sigB52C) throw Error(ox3940dd(1175));
  return var_core_value_sigB52C;
}
function Xn(var_core_value_sigA4B8) {
  let var_core_value_sigFF9C = qn(var_core_value_sigA4B8[ox19cf88(801)]);
  return (0, i[ox19cf88(922)])(Jn.Provider, {
    value: var_core_value_sigFF9C,
    children: (0, i[ox19cf88(922)])(ox19cf88(1998), {
      className: ox19cf88(1556),
      children: var_core_value_sigA4B8[ox19cf88(1492)]
    })
  });
}
function Zn() {
  let var_core_value_sig278D = (0, o.useDependency)(a.LocaleService),
    {
      legend: var_core_value_sigC0FE,
      position: var_core_value_sigDD22,
      setLegend: var_core_value_sig2D35
    } = Yn();
  return (0, i.jsx)(A, {
    label: var_core_value_sig278D.t("chart-ui.common.position.label"),
    options: [{
      value: e.LegendPositionEnum[ox45e081(1210)],
      label: var_core_value_sig278D.t(ox45e081(1935))
    }, {
      value: e[ox45e081(1331)][ox45e081(1831)],
      label: var_core_value_sig278D.t(ox45e081(1758))
    }, {
      value: e.LegendPositionEnum[ox45e081(1672)],
      label: var_core_value_sig278D.t(ox45e081(1892))
    }, {
      value: e[ox45e081(1331)][ox45e081(477)],
      label: var_core_value_sig278D.t(ox45e081(1560))
    }, {
      value: e.LegendPositionEnum["Hide"],
      label: var_core_value_sig278D.t(ox45e081(1351))
    }],
    value: var_core_value_sigDD22,
    onChange: var_core_value_sig4743 => var_core_value_sig2D35({
      ...var_core_value_sigC0FE,
      visible: var_core_value_sig4743 !== e[ox45e081(1331)][ox45e081(1566)],
      ...(var_core_value_sig4743 === e.LegendPositionEnum[ox45e081(1566)] ? {} : {
        position: var_core_value_sig4743
      })
    })
  });
}
function Qn() {
  let var_core_value_sig7A4B = (0, o.useDependency)(a[ox1ec756(1419)]),
    {
      canWrap: var_core_value_sigE50A,
      isHeatmap: var_core_value_sigC8AC,
      legend: var_core_value_sig8E63,
      setLegend: var_core_value_sig300D,
      wrap: var_core_value_sig520B
    } = Yn();
  return !var_core_value_sigE50A || var_core_value_sigC8AC ? null : (0, i[ox1ec756(1557)])(ox1ec756(1998), {
    className: ox1ec756(779),
    children: [(0, i[ox1ec756(922)])(ox1ec756(1904), {
      className: ox1ec756(973),
      children: var_core_value_sig7A4B.t(ox1ec756(721))
    }), (0, i[ox1ec756(922)])(t[ox1ec756(1271)], {
      defaultChecked: var_core_value_sig520B,
      onChange: var_core_value_sigEB6A => var_core_value_sig300D({
        ...var_core_value_sig8E63,
        wrap: var_core_value_sigEB6A
      })
    })]
  });
}
function $n() {
  let var_core_value_sigFE26 = (0, o.useDependency)(a[oxbd4fb6(1419)]),
    {
      heatmap: var_core_value_sig1019,
      isHeatmap: var_core_value_sig32AB,
      setHeatmap: var_core_value_sig72BE,
      visualMapType: var_core_value_sig3E4A
    } = Yn();
  return var_core_value_sig32AB ? (0, i[oxbd4fb6(922)])(A, {
    label: var_core_value_sigFE26.t(oxbd4fb6(1876)),
    options: [{
      value: e[oxbd4fb6(1632)][oxbd4fb6(1869)],
      label: var_core_value_sigFE26.t("chart-ui.common.visualMapType.continuous")
    }, {
      value: e[oxbd4fb6(1632)][oxbd4fb6(1808)],
      label: var_core_value_sigFE26.t(oxbd4fb6(523))
    }],
    value: var_core_value_sig3E4A,
    onChange: var_core_value_sig3D46 => var_core_value_sig72BE({
      ...var_core_value_sig1019,
      visualMapType: var_core_value_sig3D46
    })
  }) : null;
}
function er() {
  let var_core_value_sig3171 = (0, o.useDependency)(a.LocaleService),
    {
      isCompositePie: var_core_value_sigEBC4,
      isHeatmap: var_core_value_sig788B,
      legend: var_core_value_sig9A80,
      selectMode: var_core_value_sig7C69,
      setLegend: var_core_value_sig01EF
    } = Yn();
  return var_core_value_sig788B || var_core_value_sigEBC4 ? null : (0, i.jsx)(A, {
    label: var_core_value_sig3171.t(ox12e1d7(889)),
    options: [{
      value: e[ox12e1d7(594)].Single,
      label: var_core_value_sig3171.t(ox12e1d7(813))
    }, {
      value: e[ox12e1d7(594)][ox12e1d7(1183)],
      label: var_core_value_sig3171.t(ox12e1d7(1186))
    }, {
      value: e[ox12e1d7(594)].Close,
      label: var_core_value_sig3171.t("chart-ui.common.legendSelectMode.disabled")
    }],
    value: var_core_value_sig7C69,
    onChange: var_core_value_sigCC93 => var_core_value_sig01EF({
      ...var_core_value_sig9A80,
      selectMode: var_core_value_sigCC93
    })
  });
}
function tr() {
  let var_core_value_sig3603 = (0, o.useDependency)(a[ox40e5eb(1419)]),
    {
      defaultValues: var_core_value_sigC163,
      font: var_core_value_sigF5F3,
      isHeatmap: var_core_value_sig5E69,
      legend: var_core_value_sig7B39,
      setLegend: var_core_value_sigDCAB
    } = Yn();
  return var_core_value_sig5E69 ? null : (0, i[ox40e5eb(922)])(V, {
    colorPickerFallbackValue: var_core_value_sigC163[ox40e5eb(1235)][ox40e5eb(1393)],
    label: var_core_value_sig3603.t(ox40e5eb(852)),
    value: var_core_value_sigF5F3,
    onChange: var_core_value_sig5964 => var_core_value_sigDCAB({
      ...var_core_value_sig7B39,
      ...B(var_core_value_sig5964)
    })
  });
}
function nr() {
  let var_core_value_sigF569 = (0, o[ox46fadd(858)])(a[ox46fadd(1419)]),
    {
      isHeatmap: var_core_value_sig2A9F,
      legend: var_core_value_sigB14A,
      setLegend: var_core_value_sig4401
    } = Yn();
  return var_core_value_sig2A9F ? null : (0, i[ox46fadd(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    emptyLabel: var_core_value_sigF569.t("chart-ui.common.default"),
    label: var_core_value_sigF569.t(ox46fadd(2018)),
    min: 8,
    value: var_core_value_sigB14A[ox46fadd(1003)] ?? null,
    onChange: var_core_value_sig808B => var_core_value_sig4401({
      ...var_core_value_sigB14A,
      fontSize: var_core_value_sig808B
    })
  });
}
function rr(var_core_value_sig4D6A) {
  return (0, i[ox12e00d(922)])(Xn, {
    defaultValues: var_core_value_sig4D6A[ox12e00d(801)],
    children: (0, i[ox12e00d(922)])(ir, {})
  });
}
function ir() {
  let {
    isHeatmap: var_core_value_sigEF80
  } = Yn();
  return (0, i[ox48dd93(1557)])(i[ox48dd93(1762)], {
    children: [(0, i[ox48dd93(922)])(Zn, {}), (0, i[ox48dd93(922)])(Qn, {}), var_core_value_sigEF80 ? (0, i[ox48dd93(922)])($n, {}) : (0, i.jsxs)(i[ox48dd93(1762)], {
      children: [(0, i[ox48dd93(922)])(er, {}), (0, i[ox48dd93(922)])(tr, {})]
    })]
  });
}
const ar = {
  invalidValueStrategy: e.defaultChartConfig["invalidValueType"],
  lineStyle: e.defaultChartConfig["area"].lineStyle
};
function or(var_core_value_sig526D) {
  let var_core_value_sigD78B = (0, o[ox4882f8(858)])(a.LocaleService),
    [var_core_value_sigCB8C] = N(ox4882f8(553), e[ox4882f8(653)][ox4882f8(1859)]),
    [var_core_value_sigD217, var_core_value_sigEB0F] = N(ox4882f8(891)),
    [var_core_value_sigDC44, var_core_value_sigDEFC] = N(ox4882f8(1445));
  if (!(e[ox4882f8(1226)][ox4882f8(1429)](var_core_value_sigCB8C, e[ox4882f8(653)][ox4882f8(1152)]) || e[ox4882f8(1226)].baseOn(var_core_value_sigCB8C, e[ox4882f8(653)][ox4882f8(999)]))) return null;
  let var_core_value_sigE842 = [{
      value: e[ox4882f8(1401)][ox4882f8(1152)],
      label: var_core_value_sigD78B.t(ox4882f8(1052))
    }, {
      value: e.AreaLineStyle[ox4882f8(634)],
      label: var_core_value_sigD78B.t(ox4882f8(1810))
    }, {
      value: e[ox4882f8(1401)][ox4882f8(1321)],
      label: var_core_value_sigD78B.t("chart-ui.lineAndArea.step")
    }],
    var_core_value_sigA77A = (var_core_value_sigD217 == null ? undefined : var_core_value_sigD217[ox4882f8(1874)]) ?? var_core_value_sig526D[ox4882f8(801)][ox4882f8(1874)];
  return (0, i[ox4882f8(1557)])(ox4882f8(1998), {
    className: ox4882f8(1556),
    children: [var_core_value_sig526D[ox4882f8(1426)] === ox4882f8(697) ? (0, i[ox4882f8(922)])(D, {
      label: var_core_value_sigD78B.t("chart-ui.lineAndArea.lineStyle"),
      children: (0, i.jsx)(t[ox4882f8(1956)], {
        items: var_core_value_sigE842,
        value: var_core_value_sigA77A,
        onChange: var_core_value_sig2A26 => var_core_value_sigEB0F({
          ...var_core_value_sigD217,
          lineStyle: var_core_value_sig2A26
        })
      })
    }) : (0, i[ox4882f8(922)])(A, {
      label: var_core_value_sigD78B.t(ox4882f8(1428)),
      options: var_core_value_sigE842,
      value: var_core_value_sigA77A,
      onChange: var_core_value_sig1179 => var_core_value_sigEB0F({
        ...var_core_value_sigD217,
        lineStyle: var_core_value_sig1179
      })
    }), (0, i[ox4882f8(922)])(A, {
      label: var_core_value_sigD78B.t(ox4882f8(1512)),
      options: [{
        value: e[ox4882f8(1938)][ox4882f8(1076)],
        label: var_core_value_sigD78B.t(ox4882f8(873))
      }, {
        value: e[ox4882f8(1938)][ox4882f8(1679)],
        label: var_core_value_sigD78B.t("chart-ui.lineAndArea.connect")
      }, {
        value: e[ox4882f8(1938)].Zero,
        label: var_core_value_sigD78B.t(ox4882f8(1404))
      }],
      value: var_core_value_sigDC44 ?? var_core_value_sig526D[ox4882f8(801)][ox4882f8(1445)],
      onChange: var_core_value_sigDEFC
    })]
  });
}
function sr(var_core_value_sig0701) {
  let [var_core_value_sig5DCA, var_core_value_sigF1AB] = (0, r[ox3eb6b8(1825)])(false),
    var_core_value_sig902F = var_core_value_sig0701[ox3eb6b8(1822)].filter(var_core_value_sigEA92 => var_core_value_sig0701.value[ox3eb6b8(1868)](var_core_value_sigEA92[ox3eb6b8(1324)])),
    var_core_value_sig6BD7 = var_core_value_sig0701[ox3eb6b8(1822)].map(var_core_value_sig8FD9 => ({
      type: "checkbox",
      checked: var_core_value_sig0701.value[ox3eb6b8(1868)](var_core_value_sig8FD9.value),
      disabled: var_core_value_sig8FD9[ox3eb6b8(1937)],
      label: var_core_value_sig8FD9[ox3eb6b8(1614)],
      value: var_core_value_sig8FD9[ox3eb6b8(1324)],
      onSelect: var_core_value_sig7E54 => {
        const var_core_value_sig9A8D = ox3eb6b8;
        var_core_value_sig0701[var_core_value_sig9A8D(507)](var_core_value_sig0701[var_core_value_sig9A8D(1324)][var_core_value_sig9A8D(1868)](var_core_value_sig7E54) ? var_core_value_sig0701[var_core_value_sig9A8D(1324)][var_core_value_sig9A8D(1573)](var_core_value_sig3EEE => var_core_value_sig3EEE !== var_core_value_sig7E54) : [...var_core_value_sig0701[var_core_value_sig9A8D(1324)], var_core_value_sig7E54]);
      }
    }));
  return (0, i[ox3eb6b8(922)])(t[ox3eb6b8(744)], {
    align: ox3eb6b8(797),
    className: ox3eb6b8(1055),
    disabled: var_core_value_sig0701[ox3eb6b8(1937)],
    items: var_core_value_sig6BD7,
    open: var_core_value_sig5DCA,
    onOpenChange: var_core_value_sigF1AB,
    children: (0, i[ox3eb6b8(1557)])(ox3eb6b8(1204), {
      "aria-expanded": var_core_value_sig5DCA,
      "aria-haspopup": "menu",
      className: (0, t[ox3eb6b8(1916)])(t.selectClassName, ox3eb6b8(950), {
        "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900": var_core_value_sig5DCA,
        "univer-cursor-not-allowed": var_core_value_sig0701.disabled,
        "univer-cursor-pointer\x20hover:univer-border-primary-600": !var_core_value_sig0701[ox3eb6b8(1937)] && !var_core_value_sig5DCA
      }),
      "data-u-comp": ox3eb6b8(1124),
      disabled: var_core_value_sig0701[ox3eb6b8(1937)],
      type: "button",
      ...var_core_value_sig0701[ox3eb6b8(913)],
      children: [(0, i[ox3eb6b8(922)])(ox3eb6b8(1904), {
        className: ox3eb6b8(1017),
        children: var_core_value_sig902F[ox3eb6b8(1285)](var_core_value_sig1AE5 => (0, i[ox3eb6b8(922)])(t[ox3eb6b8(983)], {
          className: "univer-max-w-32",
          children: var_core_value_sig1AE5[ox3eb6b8(1614)]
        }, var_core_value_sig1AE5[ox3eb6b8(1324)]))
      }), (0, i[ox3eb6b8(922)])(n[ox3eb6b8(781)], {
        "aria-hidden": ox3eb6b8(1582),
        className: ox3eb6b8(1637)
      })]
    })
  });
}
function cr(var_core_value_sig63E0) {
  return (0, i[ox1c773b(922)])(D, {
    disabled: var_core_value_sig63E0.disabled,
    error: var_core_value_sig63E0[ox1c773b(764)],
    help: var_core_value_sig63E0[ox1c773b(1899)],
    label: var_core_value_sig63E0.label,
    children: var_core_value_sig7100 => (0, i[ox1c773b(922)])(sr, {
      controlProps: var_core_value_sig7100,
      disabled: var_core_value_sig63E0[ox1c773b(1937)],
      options: var_core_value_sig63E0[ox1c773b(1822)],
      value: var_core_value_sig63E0[ox1c773b(1324)],
      onChange: var_core_value_sig63E0[ox1c773b(507)]
    })
  });
}
const lr = [e.LabelContentType["CategoryName"], e.LabelContentType["SeriesName"], e.LabelContentType["Value"], e.LabelContentType["Percentage"]],
  ur = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    includeZeroValues: false,
    labelContentType: e.LabelContentType["Value"],
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    lineDashType: e.ChartBorderDashType["Solid"],
    lineOpacity: e.defaultChartConfig["borderStyle"].opacity,
    lineWidth: e.defaultChartConfig["borderStyle"].specialChartWidthMap["lineOrArea"],
    pointShape: e.defaultChartConfig["point"].shape,
    pointSize: e.defaultChartConfig["pareto"].symbolSize,
    textColor: e.defaultChartConfig["textStyle"].color
  };
function dr(var_core_value_sig1B87) {
  return typeof var_core_value_sig1B87 == ox4bc1fc(2002) ? var_core_value_sig1B87 : null;
}
function fr(var_core_value_sig580B) {
  let {
      target: var_core_value_sig4836
    } = var_core_value_sig580B,
    var_core_value_sig4C06 = (0, o.useDependency)(a[ox552e5b(1419)]),
    [var_core_value_sig4D56] = N(ox552e5b(553), e[ox552e5b(653)].None),
    [var_core_value_sig7C26, var_core_value_sigBC59] = N("pareto"),
    [var_core_value_sig544E] = N("paretoDataPointOptions"),
    [var_core_value_sigCE8A, var_core_value_sig0718] = (0, r.useState)(""),
    var_core_value_sig1B22 = var_core_value_sig7C26 ?? {},
    var_core_value_sig8854 = {
      ...var_core_value_sig1B22[var_core_value_sig4836]
    },
    var_core_value_sig5275 = var_core_value_sig8854[ox552e5b(1614)] ?? {},
    var_core_value_sig4F9D = var_core_value_sig8854[ox552e5b(1464)] ?? {},
    var_core_value_sig278E = var_core_value_sig8854[ox552e5b(1178)] ?? {},
    var_core_value_sig2921 = z(var_core_value_sig5275, R),
    var_core_value_sig3959 = var_core_value_sig4836 === ox552e5b(1801),
    var_core_value_sig926F = var_core_value_sig580B[ox552e5b(1902)] ?? At,
    var_core_value_sig9414 = var_core_value_sigA19A => var_core_value_sigBC59(var_core_value_sig4836 === ox552e5b(785) ? {
      ...var_core_value_sig1B22,
      barStyle: {
        color: var_core_value_sigA19A.color,
        opacity: var_core_value_sigA19A[ox552e5b(577)],
        border: var_core_value_sigA19A[ox552e5b(1464)],
        dataPoints: var_core_value_sigA19A[ox552e5b(1307)],
        label: var_core_value_sigA19A[ox552e5b(1614)]
      }
    } : {
      ...var_core_value_sig1B22,
      cumulativeLineStyle: {
        color: var_core_value_sigA19A[ox552e5b(1393)],
        opacity: var_core_value_sigA19A[ox552e5b(577)],
        width: var_core_value_sigA19A[ox552e5b(989)],
        dashType: var_core_value_sigA19A[ox552e5b(704)],
        dataPoints: var_core_value_sigA19A.dataPoints,
        point: var_core_value_sigA19A.point,
        label: var_core_value_sigA19A[ox552e5b(1614)] && {
          ...var_core_value_sigA19A[ox552e5b(1614)],
          position: var_core_value_sigA19A.label[ox552e5b(1712)] === e.SeriesLabelPosition[ox552e5b(1150)] ? undefined : var_core_value_sigA19A[ox552e5b(1614)].position
        }
      }
    });
  return var_core_value_sig4D56 === e[ox552e5b(653)][ox552e5b(593)] ? (0, i[ox552e5b(1557)])(ox552e5b(1998), {
    className: ox552e5b(1556),
    children: [(0, i[ox552e5b(1557)])(O, {
      children: [(0, i[ox552e5b(922)])(M, {
        emptyLabel: var_core_value_sig4C06.t("chart-ui.editor.defaultColor"),
        label: var_core_value_sig4C06.t("chart-ui.common.color"),
        pickerFallbackValue: var_core_value_sig580B[ox552e5b(801)][ox552e5b(1082)],
        resetLabel: var_core_value_sig4C06.t(ox552e5b(819)),
        value: dr(var_core_value_sig8854[ox552e5b(1393)]),
        onChange: var_core_value_sigD3F5 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          color: var_core_value_sigD3F5
        })
      }), (0, i[ox552e5b(922)])(k, {
        label: var_core_value_sig4C06.t(ox552e5b(693)),
        max: U[ox552e5b(628)],
        min: U[ox552e5b(1337)],
        step: U.step,
        value: var_core_value_sig8854[ox552e5b(577)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1936)],
        onChange: var_core_value_sig3082 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          opacity: var_core_value_sig3082 ?? undefined
        })
      })]
    }), var_core_value_sig3959 ? (0, i.jsxs)(i[ox552e5b(1762)], {
      children: [(0, i[ox552e5b(1557)])(O, {
        children: [(0, i[ox552e5b(922)])(k, {
          allowClear: true,
          allowEmpty: true,
          emptyLabel: var_core_value_sig4C06.t("chart-ui.common.default"),
          label: var_core_value_sig4C06.t(ox552e5b(827)),
          min: 0,
          value: var_core_value_sig8854[ox552e5b(989)] ?? null,
          onChange: var_core_value_sigF5D1 => var_core_value_sig9414({
            ...var_core_value_sig8854,
            width: var_core_value_sigF5D1
          })
        }), (0, i[ox552e5b(922)])(A, {
          label: var_core_value_sig4C06.t(ox552e5b(722)),
          options: _n[ox552e5b(1285)](({
            labelKey: var_core_value_sig8775,
            value: var_core_value_sig481B
          }) => ({
            label: var_core_value_sig4C06.t(var_core_value_sig8775),
            value: var_core_value_sig481B
          })),
          value: var_core_value_sig8854[ox552e5b(704)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1658)],
          onChange: var_core_value_sig13D7 => var_core_value_sig9414({
            ...var_core_value_sig8854,
            dashType: var_core_value_sig13D7
          })
        })]
      }), (0, i.jsxs)(O, {
        children: [(0, i.jsx)(A, {
          label: var_core_value_sig4C06.t("chart-ui.series.pointShape"),
          options: vn.map(({
            labelKey: var_core_value_sig90C0,
            value: var_core_value_sigF1B2
          }) => ({
            label: var_core_value_sig4C06.t(var_core_value_sig90C0),
            value: var_core_value_sigF1B2
          })),
          value: var_core_value_sig278E[ox552e5b(543)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1517)],
          onChange: var_core_value_sigC2BB => var_core_value_sig9414({
            ...var_core_value_sig8854,
            point: {
              ...var_core_value_sig278E,
              shape: var_core_value_sigC2BB
            }
          })
        }), (0, i[ox552e5b(922)])(k, {
          allowClear: true,
          allowEmpty: true,
          emptyLabel: var_core_value_sig4C06.t(ox552e5b(1990)),
          label: var_core_value_sig4C06.t(ox552e5b(1065)),
          min: 0,
          value: var_core_value_sig278E[ox552e5b(850)] ?? null,
          onChange: var_core_value_sigD9DB => var_core_value_sig9414({
            ...var_core_value_sig8854,
            point: {
              ...var_core_value_sig278E,
              size: var_core_value_sigD9DB
            }
          })
        })]
      }), (0, i.jsx)(M, {
        emptyLabel: var_core_value_sig4C06.t("chart-ui.editor.defaultColor"),
        label: var_core_value_sig4C06.t("chart-ui.series.pointColor"),
        pickerFallbackValue: var_core_value_sig580B[ox552e5b(801)][ox552e5b(1082)],
        resetLabel: var_core_value_sig4C06.t("chart-ui.editor.defaultColor"),
        value: dr(var_core_value_sig278E[ox552e5b(1393)]),
        onChange: var_core_value_sigA363 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          point: {
            ...var_core_value_sig278E,
            color: var_core_value_sigA363
          }
        })
      })]
    }) : (0, i[ox552e5b(1557)])(i.Fragment, {
      children: [(0, i[ox552e5b(922)])(M, {
        emptyLabel: var_core_value_sig4C06.t(ox552e5b(819)),
        label: var_core_value_sig4C06.t("chart-ui.common.borderColor"),
        pickerFallbackValue: var_core_value_sig580B[ox552e5b(801)][ox552e5b(1082)],
        resetLabel: var_core_value_sig4C06.t("chart-ui.editor.defaultColor"),
        value: var_core_value_sig4F9D.color ?? null,
        onChange: var_core_value_sigFBA5 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          border: {
            ...var_core_value_sig4F9D,
            color: var_core_value_sigFBA5 ?? undefined
          }
        })
      }), (0, i.jsx)(k, {
        label: var_core_value_sig4C06.t("chart-ui.series.borderOpacity"),
        max: U[ox552e5b(628)],
        min: U[ox552e5b(1337)],
        step: U.step,
        value: var_core_value_sig4F9D[ox552e5b(577)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1021)],
        onChange: var_core_value_sigAC47 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          border: {
            ...var_core_value_sig4F9D,
            opacity: var_core_value_sigAC47 ?? undefined
          }
        })
      }), (0, i[ox552e5b(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        emptyLabel: var_core_value_sig4C06.t("chart-ui.common.default"),
        label: var_core_value_sig4C06.t(ox552e5b(1128)),
        min: 0,
        value: var_core_value_sig4F9D[ox552e5b(989)] ?? null,
        onChange: var_core_value_sigA06F => var_core_value_sig9414({
          ...var_core_value_sig8854,
          border: {
            ...var_core_value_sig4F9D,
            width: var_core_value_sigA06F
          }
        })
      }), (0, i[ox552e5b(922)])(A, {
        label: var_core_value_sig4C06.t("chart-ui.common.borderType"),
        options: _n.map(({
          labelKey: var_core_value_sig770E,
          value: var_core_value_sig4654
        }) => ({
          label: var_core_value_sig4C06.t(var_core_value_sig770E),
          value: var_core_value_sig4654
        })),
        value: var_core_value_sig4F9D.dashType ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(917)],
        onChange: var_core_value_sigB26B => var_core_value_sig9414({
          ...var_core_value_sig8854,
          border: {
            ...var_core_value_sig4F9D,
            dashType: var_core_value_sigB26B
          }
        })
      })]
    }), (0, i.jsx)(H, {
      inlineLabel: true,
      checked: var_core_value_sig5275[ox552e5b(1755)] ?? var_core_value_sig580B[ox552e5b(801)].labelVisible,
      label: var_core_value_sig4C06.t(ox552e5b(1719)),
      onChange: var_core_value_sig019B => var_core_value_sig9414({
        ...var_core_value_sig8854,
        label: {
          ...var_core_value_sig5275,
          visible: var_core_value_sig019B
        }
      })
    }), var_core_value_sig5275[ox552e5b(1755)] && (0, i[ox552e5b(1557)])(i[ox552e5b(1762)], {
      children: [(0, i[ox552e5b(922)])(cr, {
        label: var_core_value_sig4C06.t("chart-ui.common.labelContent"),
        options: [{
          value: String(e[ox552e5b(1567)][ox552e5b(602)]),
          label: var_core_value_sig4C06.t(ox552e5b(925))
        }, {
          value: String(e[ox552e5b(1567)].SeriesName),
          label: var_core_value_sig4C06.t("chart-ui.common.seriesName")
        }, {
          value: String(e[ox552e5b(1567)][ox552e5b(624)]),
          label: var_core_value_sig4C06.t(ox552e5b(545))
        }, {
          value: String(e[ox552e5b(1567)][ox552e5b(754)]),
          label: var_core_value_sig4C06.t(ox552e5b(726))
        }],
        value: lr[ox552e5b(1573)](var_core_value_sigC6BC => e[ox552e5b(1226)][ox552e5b(863)](var_core_value_sig5275[ox552e5b(1108)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1655)], var_core_value_sigC6BC))[ox552e5b(1285)](String),
        onChange: var_core_value_sig8EC2 => {
          const var_core_value_sigA8C3 = ox552e5b;
          if (var_core_value_sig8EC2[var_core_value_sigA8C3(1579)] === 0) return;
          let var_core_value_sig5276 = lr[var_core_value_sigA8C3(1573)](var_core_value_sigC259 => var_core_value_sig8EC2[var_core_value_sigA8C3(1868)](String(var_core_value_sigC259)))[var_core_value_sigA8C3(900)]((var_core_value_sig9C9F, var_core_value_sigFDEA) => var_core_value_sig9C9F | var_core_value_sigFDEA, e.LabelContentType[var_core_value_sigA8C3(1549)]);
          var_core_value_sig9414({
            ...var_core_value_sig8854,
            label: {
              ...var_core_value_sig5275,
              contentType: var_core_value_sig5276
            }
          });
        }
      }), (0, i.jsx)(A, {
        label: var_core_value_sig4C06.t(ox552e5b(1668)),
        options: [{
          value: e.SeriesLabelPosition[ox552e5b(733)],
          label: var_core_value_sig4C06.t(ox552e5b(893))
        }, {
          value: e[ox552e5b(1727)][ox552e5b(1934)],
          label: var_core_value_sig4C06.t("chart-ui.common.position.inside")
        }, {
          value: e[ox552e5b(1727)][ox552e5b(1672)],
          label: var_core_value_sig4C06.t(ox552e5b(1892))
        }, {
          value: e[ox552e5b(1727)][ox552e5b(477)],
          label: var_core_value_sig4C06.t(ox552e5b(1560))
        }, {
          value: e[ox552e5b(1727)].Top,
          label: var_core_value_sig4C06.t(ox552e5b(1935))
        }, {
          value: e.SeriesLabelPosition["Bottom"],
          label: var_core_value_sig4C06.t(ox552e5b(1758))
        }],
        value: var_core_value_sig5275[ox552e5b(1712)] ?? var_core_value_sig580B[ox552e5b(801)][ox552e5b(1336)],
        onChange: var_core_value_sig031B => var_core_value_sig9414({
          ...var_core_value_sig8854,
          label: {
            ...var_core_value_sig5275,
            position: var_core_value_sig031B
          }
        })
      }), (0, i.jsx)(var_core_value_sig926F, {
        label: var_core_value_sig4C06.t("chart-ui.common.numberFormat"),
        value: var_core_value_sig5275[ox552e5b(1875)],
        onChange: var_core_value_sig9DC0 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          label: {
            ...var_core_value_sig5275,
            format: var_core_value_sig9DC0
          }
        })
      }), (0, i.jsx)(V, {
        colorPickerFallbackValue: var_core_value_sig580B[ox552e5b(801)][ox552e5b(1082)],
        label: var_core_value_sig4C06.t(ox552e5b(852)),
        value: var_core_value_sig2921,
        onChange: var_core_value_sig95F0 => var_core_value_sig9414({
          ...var_core_value_sig8854,
          label: {
            ...var_core_value_sig5275,
            ...B(var_core_value_sig95F0)
          }
        })
      })]
    }), !var_core_value_sig3959 && (0, i.jsx)(H, {
      inlineLabel: true,
      checked: var_core_value_sig1B22[ox552e5b(643)] ?? var_core_value_sig580B[ox552e5b(801)].includeZeroValues,
      label: var_core_value_sig4C06.t(ox552e5b(1047)),
      onChange: var_core_value_sig9CCB => var_core_value_sigBC59({
        ...var_core_value_sig1B22,
        includeZeroValues: var_core_value_sig9CCB
      })
    }), var_core_value_sig580B[ox552e5b(1416)] && ((var_core_value_sig544E == null ? undefined : var_core_value_sig544E.length) ?? 0) > 0 && (0, i[ox552e5b(1557)])(i[ox552e5b(1762)], {
      children: [(0, i[ox552e5b(922)])(A, {
        label: var_core_value_sig4C06.t(ox552e5b(806)),
        options: [{
          value: "",
          label: var_core_value_sig4C06.t("chart-ui.common.none")
        }, ...(var_core_value_sig544E ?? [])],
        value: var_core_value_sigCE8A,
        onChange: var_core_value_sig0718
      }), var_core_value_sigCE8A !== "" && (() => {
        const var_core_value_sigE718 = ox552e5b;
        var var_core_value_sigAEC8;
        let var_core_value_sigB977 = Number(var_core_value_sigCE8A),
          var_core_value_sig2949 = ((var_core_value_sigAEC8 = var_core_value_sig8854[var_core_value_sigE718(1307)]) == null ? undefined : var_core_value_sigAEC8[var_core_value_sigB977]) ?? {},
          var_core_value_sig308A = var_core_value_sig86D0 => var_core_value_sig9414({
            ...var_core_value_sig8854,
            dataPoints: {
              ...var_core_value_sig8854[var_core_value_sigE718(1307)],
              [var_core_value_sigB977]: {
                ...var_core_value_sig2949,
                ...var_core_value_sig86D0
              }
            }
          });
        return (0, i[var_core_value_sigE718(1557)])(i[var_core_value_sigE718(1762)], {
          children: [(0, i[var_core_value_sigE718(1557)])(O, {
            children: [(0, i[var_core_value_sigE718(922)])(M, {
              emptyLabel: var_core_value_sig4C06.t(var_core_value_sigE718(819)),
              label: var_core_value_sig4C06.t(var_core_value_sigE718(677)),
              pickerFallbackValue: var_core_value_sig580B[var_core_value_sigE718(801)][var_core_value_sigE718(1082)],
              resetLabel: var_core_value_sig4C06.t("chart-ui.editor.defaultColor"),
              value: dr(var_core_value_sig2949.color),
              onChange: var_core_value_sig4CD2 => var_core_value_sig308A({
                color: var_core_value_sig4CD2
              })
            }), (0, i.jsx)(t.Button, {
              "aria-label": var_core_value_sig4C06.t(var_core_value_sigE718(1450)),
              size: var_core_value_sigE718(534),
              variant: var_core_value_sigE718(1245),
              onClick: () => {
                const var_core_value_sig48CA = var_core_value_sigE718;
                var_core_value_sig9414({
                  ...var_core_value_sig8854,
                  dataPoints: {
                    ...var_core_value_sig8854[var_core_value_sig48CA(1307)],
                    [var_core_value_sigB977]: undefined
                  }
                }), var_core_value_sig0718("");
              },
              children: (0, i[var_core_value_sigE718(922)])(n[var_core_value_sigE718(1494)], {})
            })]
          }), var_core_value_sig3959 && (0, i[var_core_value_sigE718(1557)])(O, {
            children: [(0, i[var_core_value_sigE718(922)])(A, {
              label: var_core_value_sig4C06.t(var_core_value_sigE718(1913)),
              options: vn[var_core_value_sigE718(1285)](({
                labelKey: var_core_value_sig50AF,
                value: var_core_value_sigA942
              }) => ({
                label: var_core_value_sig4C06.t(var_core_value_sig50AF),
                value: var_core_value_sigA942
              })),
              value: var_core_value_sig2949.shape ?? var_core_value_sig580B[var_core_value_sigE718(801)].pointShape,
              onChange: var_core_value_sigA621 => var_core_value_sig308A({
                shape: var_core_value_sigA621
              })
            }), (0, i.jsx)(k, {
              allowClear: true,
              allowEmpty: true,
              emptyLabel: var_core_value_sig4C06.t(var_core_value_sigE718(1990)),
              label: var_core_value_sig4C06.t("chart-ui.series.pointSize"),
              min: 0,
              value: var_core_value_sig2949[var_core_value_sigE718(850)] ?? null,
              onChange: var_core_value_sigBBFF => var_core_value_sig308A({
                size: var_core_value_sigBBFF
              })
            })]
          })]
        });
      })()]
    })]
  }) : null;
}
const pr = [],
  mr = new Set([e.ChartTypeBits["AreaPercentStacked"], e.ChartTypeBits["BarPercentStacked"], e.ChartTypeBits["ColumnPercentStacked"]]),
  hr = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    color: e.defaultChartConfig["textStyle"].color,
    labelContentType: e.LabelContentType["Value"],
    labelFontSize: e.defaultChartConfig["textStyle"].fontSize,
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    lineOrAreaBorderWidth: e.defaultChartConfig["borderStyle"].specialChartWidthMap["lineOrArea"],
    pointShape: e.defaultChartConfig["point"].shape,
    pointSize: e.defaultChartConfig["point"].size,
    radarBorderWidth: e.defaultChartConfig["borderStyle"].specialChartWidthMap["radar"],
    radarFillOpacity: e.defaultChartConfig["borderStyle"].opacity,
    rightAxis: {
      ltr: false,
      rtl: false
    },
    scatterPointSize: e.defaultChartConfig["point"].scatterSymbolSize,
    seriesFillOpacity: e.defaultChartConfig["borderStyle"].opacity
  };
function gr(var_core_value_sig32E7) {
  return typeof var_core_value_sig32E7 == oxbd813f(2002) ? var_core_value_sig32E7 : null;
}
function _r(var_core_value_sigD8C3, var_core_value_sig3A44) {
  return {
    ...var_core_value_sigD8C3,
    ...var_core_value_sig3A44,
    ...(var_core_value_sigD8C3 != null && var_core_value_sigD8C3[ox2ca00e(1464)] || var_core_value_sig3A44 != null && var_core_value_sig3A44[ox2ca00e(1464)] ? {
      border: {
        ...(var_core_value_sigD8C3 == null ? undefined : var_core_value_sigD8C3[ox2ca00e(1464)]),
        ...(var_core_value_sig3A44 == null ? undefined : var_core_value_sig3A44.border)
      }
    } : {}),
    ...(var_core_value_sigD8C3 != null && var_core_value_sigD8C3[ox2ca00e(1614)] || var_core_value_sig3A44 != null && var_core_value_sig3A44.label ? {
      label: {
        ...(var_core_value_sigD8C3 == null ? undefined : var_core_value_sigD8C3.label),
        ...(var_core_value_sig3A44 == null ? undefined : var_core_value_sig3A44[ox2ca00e(1614)])
      }
    } : {}),
    ...(var_core_value_sigD8C3 != null && var_core_value_sigD8C3[ox2ca00e(1178)] || var_core_value_sig3A44 != null && var_core_value_sig3A44[ox2ca00e(1178)] ? {
      point: {
        ...(var_core_value_sigD8C3 == null ? undefined : var_core_value_sigD8C3[ox2ca00e(1178)]),
        ...(var_core_value_sig3A44 == null ? undefined : var_core_value_sig3A44.point)
      }
    } : {}),
    ...(var_core_value_sigD8C3 != null && var_core_value_sigD8C3[ox2ca00e(1307)] || var_core_value_sig3A44 != null && var_core_value_sig3A44[ox2ca00e(1307)] ? {
      dataPoints: {
        ...(var_core_value_sigD8C3 == null ? undefined : var_core_value_sigD8C3[ox2ca00e(1307)]),
        ...(var_core_value_sig3A44 == null ? undefined : var_core_value_sig3A44[ox2ca00e(1307)])
      }
    } : {}),
    ...(var_core_value_sigD8C3 != null && var_core_value_sigD8C3.waterfallStyles || var_core_value_sig3A44 != null && var_core_value_sig3A44[ox2ca00e(794)] ? {
      waterfallStyles: {
        ...(var_core_value_sigD8C3 == null ? undefined : var_core_value_sigD8C3[ox2ca00e(794)]),
        ...(var_core_value_sig3A44 == null ? undefined : var_core_value_sig3A44[ox2ca00e(794)])
      }
    } : {})
  };
}
function vr(var_core_value_sig0642, var_core_value_sig786E) {
  return var_core_value_sig0642 === e.ChartTypeBits[ox469089(1961)] ? var_core_value_sig786E[ox469089(483)] === e.ChartSeriesTypeString["Line"] ? e[ox469089(653)][ox469089(1152)] : var_core_value_sig786E[ox469089(483)] === e[ox469089(1475)][ox469089(541)] ? e[ox469089(653)].AreaStacked : var_core_value_sig786E.type === e[ox469089(1475)][ox469089(999)] ? e[ox469089(653)][ox469089(999)] : var_core_value_sig786E[ox469089(483)] === e.ChartSeriesTypeString[ox469089(636)] ? e[ox469089(653)].ColumnStacked : e[ox469089(653)].Column : e.chartBitsUtils[ox469089(1429)](var_core_value_sig0642, e[ox469089(653)][ox469089(999)]) ? e[ox469089(653)][ox469089(999)] : e[ox469089(1226)].baseOn(var_core_value_sig0642, e[ox469089(653)].Line) ? e[ox469089(653)][ox469089(1152)] : var_core_value_sig0642;
}
function yr(var_core_value_sigFC47) {
  switch (var_core_value_sigFC47 === 0 ? e[ox4f6626(1790)][ox4f6626(1300)][ox4f6626(1857)] : e[ox4f6626(1790)].combination[ox4f6626(855)]) {
    case e[ox4f6626(653)][ox4f6626(1152)]:
      return e[ox4f6626(1475)][ox4f6626(1152)];
    case e[ox4f6626(653)].Area:
      return e[ox4f6626(1475)][ox4f6626(999)];
    default:
      return e[ox4f6626(1475)][ox4f6626(1218)];
  }
}
function br(var_core_value_sig48E2) {
  switch (var_core_value_sig48E2) {
    case e.ChartSeriesTypeString[ox20d963(1152)]:
      return e[ox20d963(653)][ox20d963(1152)];
    case e[ox20d963(1475)][ox20d963(541)]:
      return e[ox20d963(653)][ox20d963(541)];
    case e[ox20d963(1475)][ox20d963(999)]:
      return e.ChartTypeBits[ox20d963(999)];
    case e[ox20d963(1475)].ColumnStacked:
      return e[ox20d963(653)][ox20d963(636)];
    case e[ox20d963(1475)][ox20d963(1218)]:
      return e[ox20d963(653)][ox20d963(1218)];
    default:
      return e[ox20d963(653)][ox20d963(1859)];
  }
}
function xr(var_core_value_sig2FCA, var_core_value_sig04F2) {
  if (var_core_value_sig04F2 !== null) {
    var var_core_value_sig2CFC;
    let var_core_value_sig528D = var_core_value_sig2FCA[ox54dad6(646)](var_core_value_sig8889 => var_core_value_sig8889[ox54dad6(1301)] === var_core_value_sig04F2);
    return var_core_value_sig528D < 0 ? "" : ((var_core_value_sig2CFC = var_core_value_sig2FCA[var_core_value_sig528D]) == null ? undefined : var_core_value_sig2CFC[ox54dad6(1169)].type) ?? yr(var_core_value_sig528D);
  }
  let var_core_value_sig5CEB = var_core_value_sig2FCA.map((var_core_value_sigA309, var_core_value_sig9E20) => var_core_value_sigA309[ox54dad6(1169)].type ?? yr(var_core_value_sig9E20)),
    var_core_value_sig4935 = var_core_value_sig5CEB[0];
  return var_core_value_sig4935 !== undefined && var_core_value_sig5CEB.every(var_core_value_sig26BB => var_core_value_sig26BB === var_core_value_sig4935) ? var_core_value_sig4935 : "";
}
function Sr(var_core_value_sig1832) {
  return [e[ox2a1615(1567)][ox2a1615(602)], e[ox2a1615(1567)][ox2a1615(1694)], e[ox2a1615(1567)].Value, e[ox2a1615(1567)][ox2a1615(754)]][ox2a1615(1573)](var_core_value_sig19B4 => e.chartBitsUtils["has"](var_core_value_sig1832, var_core_value_sig19B4)).map(String);
}
const Cr = (0, r.createContext)(null);
function J() {
  let var_core_value_sig79D7 = (0, r[ox1cb571(1443)])(Cr);
  if (!var_core_value_sig79D7) throw Error(ox1cb571(1771));
  return var_core_value_sig79D7;
}
function wr() {
  var var_core_value_sig5E01;
  let {
      dataPointOptions: var_core_value_sigBBE4,
      defaultValues: var_core_value_sig96B3,
      seriesType: var_core_value_sig9CF2,
      style: var_core_value_sig666D,
      patchStyle: var_core_value_sigBD53
    } = J(),
    var_core_value_sigD11F = (0, o.useDependency)(a[ox35b974(1419)]),
    [var_core_value_sig6223, var_core_value_sig7653] = (0, r[ox35b974(1825)])(""),
    var_core_value_sigF65B = var_core_value_sig6223 === "" ? null : Number(var_core_value_sig6223),
    var_core_value_sig4A94 = var_core_value_sigF65B === null ? {} : ((var_core_value_sig5E01 = var_core_value_sig666D[ox35b974(1307)]) == null ? undefined : var_core_value_sig5E01[var_core_value_sigF65B]) ?? {},
    var_core_value_sigEB59 = var_core_value_sig9CF2 === e[ox35b974(653)][ox35b974(1152)] || e[ox35b974(1226)][ox35b974(1429)](var_core_value_sig9CF2, e[ox35b974(653)][ox35b974(999)]),
    var_core_value_sigD9B0 = L(Ke);
  if (var_core_value_sigBBE4[ox35b974(1579)] === 0) return null;
  let var_core_value_sigB7D6 = var_core_value_sig218A => {
      var_core_value_sigF65B !== null && var_core_value_sigBD53({
        dataPoints: {
          ...var_core_value_sig666D.dataPoints,
          [var_core_value_sigF65B]: {
            ...var_core_value_sig4A94,
            ...var_core_value_sig218A
          }
        }
      });
    },
    var_core_value_sigCF1F = () => {
      const var_core_value_sig14CB = ox35b974;
      var_core_value_sigF65B !== null && (var_core_value_sigBD53({
        dataPoints: {
          ...var_core_value_sig666D[var_core_value_sig14CB(1307)],
          [var_core_value_sigF65B]: undefined
        }
      }), var_core_value_sig7653(""));
    };
  return (0, i.jsxs)(i[ox35b974(1762)], {
    children: [(0, i[ox35b974(922)])(A, {
      label: var_core_value_sigD11F.t(ox35b974(806)),
      options: [{
        value: "",
        label: var_core_value_sigD11F.t(ox35b974(1351))
      }, ...var_core_value_sigBBE4],
      value: var_core_value_sig6223,
      onChange: var_core_value_sigFDEE => {
        const var_core_value_sigA676 = ox35b974;
        var var_core_value_sigC27E;
        var_core_value_sig7653(var_core_value_sigFDEE);
        let var_core_value_sigA70D = var_core_value_sigFDEE === "" ? null : Number(var_core_value_sigFDEE);
        var_core_value_sigA70D !== null && !((var_core_value_sigC27E = var_core_value_sig666D[var_core_value_sigA676(1307)]) != null && var_core_value_sigC27E[var_core_value_sigA70D]) && var_core_value_sigBD53({
          dataPoints: {
            ...var_core_value_sig666D[var_core_value_sigA676(1307)],
            [var_core_value_sigA70D]: {}
          }
        });
      }
    }), var_core_value_sigF65B !== null && (0, i[ox35b974(1557)])(i[ox35b974(1762)], {
      children: [(0, i[ox35b974(1557)])(O, {
        children: [(0, i[ox35b974(922)])(M, {
          emptyLabel: var_core_value_sigD11F.t(ox35b974(819)),
          label: var_core_value_sigD11F.t(ox35b974(677)),
          pickerFallbackValue: var_core_value_sig96B3.color,
          resetLabel: var_core_value_sigD11F.t("chart-ui.editor.defaultColor"),
          value: gr(var_core_value_sig4A94[ox35b974(1393)]),
          onChange: var_core_value_sigCE10 => var_core_value_sigB7D6({
            color: var_core_value_sigCE10
          })
        }), (0, i[ox35b974(922)])(t[ox35b974(1420)], {
          "aria-label": var_core_value_sigD11F.t(ox35b974(1450)),
          size: ox35b974(534),
          variant: ox35b974(1245),
          onClick: var_core_value_sigCF1F,
          children: (0, i.jsx)(n.DeleteIcon, {})
        })]
      }), var_core_value_sigEB59 && (0, i[ox35b974(1557)])(O, {
        children: [(0, i[ox35b974(922)])(A, {
          label: var_core_value_sigD11F.t(ox35b974(1913)),
          options: vn.map(({
            labelKey: var_core_value_sigA3861,
            value: var_core_value_sigCD82
          }) => ({
            label: var_core_value_sigD11F.t(var_core_value_sigA3861),
            value: var_core_value_sigCD82
          })),
          value: var_core_value_sig4A94[ox35b974(543)] ?? var_core_value_sig96B3[ox35b974(1517)],
          onChange: var_core_value_sig44DD => var_core_value_sigB7D6({
            shape: var_core_value_sig44DD
          })
        }), (0, i[ox35b974(922)])(A, {
          label: var_core_value_sigD11F.t(ox35b974(1065)),
          options: K(var_core_value_sigD11F.t("chart-ui.common.default"), Xe(var_core_value_sigD9B0)),
          value: W(var_core_value_sig4A94[ox35b974(850)]),
          onChange: var_core_value_sig96FA => var_core_value_sigB7D6({
            size: G(var_core_value_sig96FA)
          })
        })]
      })]
    })]
  });
}
function Tr() {
  let {
      series: var_core_value_sig4DD1,
      selected: var_core_value_sig1293,
      setSelected: var_core_value_sigC999
    } = J(),
    var_core_value_sig9D8F = (0, o.useDependency)(a[ox512ec1(1419)]),
    var_core_value_sig8270 = [{
      value: "all",
      label: var_core_value_sig9D8F.t(ox512ec1(522))
    }, ...var_core_value_sig4DD1[ox512ec1(1285)](var_core_value_sigAB68 => ({
      value: String(var_core_value_sigAB68[ox512ec1(1301)]),
      label: var_core_value_sigAB68[ox512ec1(1391)]
    }))];
  return (0, i.jsx)(A, {
    label: var_core_value_sig9D8F.t("chart-ui.common.series"),
    options: var_core_value_sig8270,
    value: var_core_value_sig1293,
    onChange: var_core_value_sigC999
  });
}
function Er(var_core_value_sig95D9) {
  let {
      chartType: var_core_value_sig0E92,
      patchStyle: var_core_value_sig45CD,
      selector: var_core_value_sigAD84,
      series: var_core_value_sigD513,
      setSeries: var_core_value_sig36BD
    } = J(),
    var_core_value_sig0413 = (0, o.useDependency)(a[ox51fcef(1419)]);
  if (var_core_value_sig0E92 !== e[ox51fcef(653)].Combination || var_core_value_sig95D9[ox51fcef(829)] && var_core_value_sigAD84 === null) return null;
  let var_core_value_sig15B6 = xr(var_core_value_sigD513, var_core_value_sigAD84);
  return (0, i.jsx)(A, {
    label: var_core_value_sig0413.t("chart-ui.common.chartType"),
    options: [{
      value: "",
      label: var_core_value_sig0413.t(ox51fcef(1351))
    }, {
      value: e[ox51fcef(1475)][ox51fcef(1218)],
      label: var_core_value_sig0413.t(ox51fcef(1533))
    }, {
      value: e[ox51fcef(1475)].ColumnStacked,
      label: var_core_value_sig0413.t("chart-ui.chartTypes.columnStacked")
    }, {
      value: e[ox51fcef(1475)][ox51fcef(1152)],
      label: var_core_value_sig0413.t("chart-ui.chartTypes.line")
    }, {
      value: e.ChartSeriesTypeString[ox51fcef(999)],
      label: var_core_value_sig0413.t(ox51fcef(1681))
    }, {
      value: e[ox51fcef(1475)][ox51fcef(541)],
      label: var_core_value_sig0413.t(ox51fcef(1830))
    }],
    value: var_core_value_sig15B6,
    onChange: var_core_value_sig040A => {
      const var_core_value_sig2AE0 = ox51fcef;
      if (var_core_value_sig040A !== "") {
        if (var_core_value_sigAD84 === null) {
          var_core_value_sig36BD(var_core_value_sigD513[var_core_value_sig2AE0(1285)](var_core_value_sig7524 => ({
            ...var_core_value_sig7524,
            style: _r(var_core_value_sig7524[var_core_value_sig2AE0(1169)], {
              type: var_core_value_sig040A
            })
          })));
          return;
        }
        var_core_value_sig45CD({
          type: var_core_value_sig040A
        });
      }
    }
  });
}
function Dr() {
  let {
      defaultValues: var_core_value_sigFEBF,
      patchStyle: var_core_value_sigBBA2,
      style: var_core_value_sigC9A1
    } = J(),
    var_core_value_sigE469 = Gt().direction,
    var_core_value_sigA499 = (0, o[oxb54a7d(858)])(a[oxb54a7d(1419)]);
  return (0, i[oxb54a7d(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sigC9A1[oxb54a7d(1498)] ?? var_core_value_sigFEBF.rightAxis[var_core_value_sigE469],
    label: var_core_value_sigA499.t(oxb54a7d(1036)),
    onChange: var_core_value_sigC349 => var_core_value_sigBBA2({
      rightAxis: var_core_value_sigC349
    })
  });
}
function Or() {
  let {
      chartType: var_core_value_sig4CC3,
      defaultValues: var_core_value_sig70B3,
      patchStyle: var_core_value_sig422B,
      style: var_core_value_sig1038
    } = J(),
    var_core_value_sigC3E6 = (0, o[ox13ac5a(858)])(a.LocaleService),
    var_core_value_sig3710 = var_core_value_sig4CC3 === e[ox13ac5a(653)].Radar ? var_core_value_sig70B3[ox13ac5a(580)] : var_core_value_sig70B3.seriesFillOpacity;
  return (0, i.jsxs)(O, {
    children: [(0, i[ox13ac5a(922)])(M, {
      emptyLabel: var_core_value_sigC3E6.t(ox13ac5a(819)),
      label: var_core_value_sigC3E6.t(ox13ac5a(677)),
      pickerFallbackValue: var_core_value_sig70B3[ox13ac5a(1393)],
      resetLabel: var_core_value_sigC3E6.t(ox13ac5a(819)),
      value: gr(var_core_value_sig1038[ox13ac5a(1393)]),
      onChange: var_core_value_sig9D96 => var_core_value_sig422B({
        color: var_core_value_sig9D96
      })
    }), (0, i.jsx)(A, {
      label: var_core_value_sigC3E6.t(ox13ac5a(693)),
      options: Ye(),
      value: String(var_core_value_sig1038[ox13ac5a(944)] ?? var_core_value_sig3710),
      onChange: var_core_value_sig2776 => var_core_value_sig422B({
        fillOpacity: Number(var_core_value_sig2776)
      })
    })]
  });
}
function kr(var_core_value_sig9726) {
  let {
      defaultValues: var_core_value_sigFC9B,
      patchStyle: var_core_value_sig943E,
      style: var_core_value_sigEF36
    } = J(),
    var_core_value_sigD4B1 = (0, o[ox2db95b(858)])(a[ox2db95b(1419)]),
    var_core_value_sigE5D8 = var_core_value_sigEF36.border ?? {},
    var_core_value_sig74AF = L(Ge);
  return (0, i[ox2db95b(1557)])(i[ox2db95b(1762)], {
    children: [(var_core_value_sig9726[ox2db95b(1561)] !== false || var_core_value_sig9726[ox2db95b(1619)] !== false) && (0, i.jsxs)(O, {
      children: [var_core_value_sig9726[ox2db95b(1561)] !== false && (0, i[ox2db95b(922)])(M, {
        emptyLabel: var_core_value_sigD4B1.t("chart-ui.editor.defaultColor"),
        label: var_core_value_sigD4B1.t(ox2db95b(1196)),
        pickerFallbackValue: var_core_value_sigFC9B.color,
        resetLabel: var_core_value_sigD4B1.t(ox2db95b(819)),
        value: var_core_value_sigE5D8[ox2db95b(1393)] ?? null,
        onChange: var_core_value_sig6FB2 => var_core_value_sig943E({
          border: {
            ...var_core_value_sigE5D8,
            color: var_core_value_sig6FB2
          }
        })
      }), var_core_value_sig9726[ox2db95b(1619)] !== false && (0, i[ox2db95b(922)])(A, {
        label: var_core_value_sigD4B1.t("chart-ui.series.borderOpacity"),
        options: Ye(),
        value: String(var_core_value_sigE5D8[ox2db95b(577)] ?? var_core_value_sigFC9B[ox2db95b(1021)]),
        onChange: var_core_value_sigEB43 => var_core_value_sig943E({
          border: {
            ...var_core_value_sigE5D8,
            opacity: Number(var_core_value_sigEB43)
          }
        })
      })]
    }), (0, i[ox2db95b(1557)])(O, {
      children: [(0, i[ox2db95b(922)])(A, {
        label: var_core_value_sigD4B1.t(ox2db95b(1128)),
        options: K(var_core_value_sigD4B1.t(ox2db95b(1990)), Xe(var_core_value_sig74AF)),
        value: W(var_core_value_sigE5D8[ox2db95b(989)]),
        onChange: var_core_value_sig4186 => var_core_value_sig943E({
          border: {
            ...var_core_value_sigE5D8,
            width: G(var_core_value_sig4186)
          }
        })
      }), (0, i.jsx)(A, {
        label: var_core_value_sigD4B1.t(ox2db95b(844)),
        options: _n[ox2db95b(1285)](({
          labelKey: var_core_value_sigF963,
          value: var_core_value_sigB608
        }) => ({
          label: var_core_value_sigD4B1.t(var_core_value_sigF963),
          value: var_core_value_sigB608
        })),
        value: var_core_value_sigE5D8[ox2db95b(704)] ?? var_core_value_sigFC9B[ox2db95b(917)],
        onChange: var_core_value_sigF866 => var_core_value_sig943E({
          border: {
            ...var_core_value_sigE5D8,
            dashType: var_core_value_sigF866
          }
        })
      })]
    })]
  });
}
function Ar(var_core_value_sigBABA) {
  let {
      patchStyle: var_core_value_sigA723,
      defaultValues: var_core_value_sig991C,
      style: var_core_value_sigF909
    } = J(),
    var_core_value_sigDD0E = (0, o[ox9609bd(858)])(a[ox9609bd(1419)]),
    var_core_value_sigF2A0 = var_core_value_sigF909[ox9609bd(1178)] ?? {},
    var_core_value_sig116F = L(Ke);
  return (0, i[ox9609bd(1557)])(i.Fragment, {
    children: [var_core_value_sigBABA[ox9609bd(1561)] !== false && (0, i[ox9609bd(922)])(M, {
      emptyLabel: var_core_value_sigDD0E.t(ox9609bd(819)),
      label: var_core_value_sigDD0E.t(ox9609bd(1397)),
      pickerFallbackValue: var_core_value_sig991C[ox9609bd(1393)],
      resetLabel: var_core_value_sigDD0E.t(ox9609bd(819)),
      value: gr(var_core_value_sigF2A0[ox9609bd(1393)]),
      onChange: var_core_value_sig5EFB => var_core_value_sigA723({
        point: {
          ...var_core_value_sigF2A0,
          color: var_core_value_sig5EFB
        }
      })
    }), (0, i[ox9609bd(1557)])(O, {
      children: [(0, i[ox9609bd(922)])(A, {
        label: var_core_value_sigDD0E.t(ox9609bd(1913)),
        options: vn[ox9609bd(1285)](({
          labelKey: var_core_value_sig3A85,
          value: var_core_value_sig2682
        }) => ({
          label: var_core_value_sigDD0E.t(var_core_value_sig3A85),
          value: var_core_value_sig2682
        })),
        value: var_core_value_sigF2A0[ox9609bd(543)] ?? var_core_value_sig991C.pointShape,
        onChange: var_core_value_sig4BB5 => var_core_value_sigA723({
          point: {
            ...var_core_value_sigF2A0,
            shape: var_core_value_sig4BB5
          }
        })
      }), (0, i[ox9609bd(922)])(A, {
        label: var_core_value_sigDD0E.t("chart-ui.series.pointSize"),
        options: K(var_core_value_sigDD0E.t(ox9609bd(1990)), Xe(var_core_value_sig116F)),
        value: W(var_core_value_sigF2A0.size),
        onChange: var_core_value_sig6709 => var_core_value_sigA723({
          point: {
            ...var_core_value_sigF2A0,
            size: G(var_core_value_sig6709)
          }
        })
      })]
    })]
  });
}
function jr() {
  let var_core_value_sigA64C = J(),
    var_core_value_sigAF94 = var_core_value_sigA64C[ox544623(1169)][ox544623(1614)] ?? {},
    var_core_value_sig1E9F = var_core_value_sig52CA => var_core_value_sigA64C[ox544623(1925)]({
      label: {
        ...var_core_value_sigAF94,
        ...var_core_value_sig52CA
      }
    });
  return {
    ...var_core_value_sigA64C,
    label: var_core_value_sigAF94,
    patchLabel: var_core_value_sig1E9F
  };
}
function Mr() {
  let {
      defaultValues: var_core_value_sig3CC6,
      label: var_core_value_sig041B,
      patchLabel: var_core_value_sig3610
    } = jr(),
    var_core_value_sig62F3 = (0, o.useDependency)(a[ox902827(1419)]);
  return (0, i[ox902827(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sig041B[ox902827(1755)] ?? var_core_value_sig3CC6[ox902827(979)],
    label: var_core_value_sig62F3.t(ox902827(1719)),
    onChange: var_core_value_sigC030 => var_core_value_sig3610({
      visible: var_core_value_sigC030
    })
  });
}
function Nr() {
  let {
      chartType: var_core_value_sig8063,
      defaultValues: var_core_value_sig555A,
      label: var_core_value_sigF562,
      patchLabel: var_core_value_sig5913,
      seriesType: var_core_value_sigA1AF
    } = jr(),
    var_core_value_sig6324 = (0, o[ox5731a3(858)])(a.LocaleService),
    var_core_value_sig7EE4 = var_core_value_sigA1AF === e[ox5731a3(653)][ox5731a3(479)],
    var_core_value_sigE3D7 = [{
      value: String(e[ox5731a3(1567)][ox5731a3(602)]),
      label: var_core_value_sig6324.t(ox5731a3(925))
    }, {
      value: String(e.LabelContentType[ox5731a3(1694)]),
      label: var_core_value_sig6324.t(ox5731a3(1738))
    }, {
      value: String(e.LabelContentType[ox5731a3(624)]),
      label: var_core_value_sig6324.t(ox5731a3(545))
    }, ...(mr[ox5731a3(863)](var_core_value_sig8063) ? [{
      value: String(e[ox5731a3(1567)][ox5731a3(754)]),
      label: var_core_value_sig6324.t(ox5731a3(726))
    }] : [])][ox5731a3(1573)](var_core_value_sig88F6 => !var_core_value_sig7EE4 || var_core_value_sig88F6.value !== String(e[ox5731a3(1567)].SeriesName) && var_core_value_sig88F6[ox5731a3(1324)] !== String(e[ox5731a3(1567)].Percentage));
  return (0, i[ox5731a3(922)])(cr, {
    label: var_core_value_sig6324.t(ox5731a3(1466)),
    options: var_core_value_sigE3D7,
    value: Sr(var_core_value_sigF562[ox5731a3(1108)] ?? var_core_value_sig555A[ox5731a3(1655)]),
    onChange: var_core_value_sig37DB => {
      const var_core_value_sig5542 = ox5731a3;
      var_core_value_sig37DB.length !== 0 && var_core_value_sig5913({
        contentType: var_core_value_sig37DB.map(Number)[var_core_value_sig5542(900)]((var_core_value_sig32F8, var_core_value_sig5B67) => var_core_value_sig32F8 | var_core_value_sig5B67)
      });
    }
  });
}
function Pr() {
  let {
      defaultValues: var_core_value_sig54C6,
      label: var_core_value_sigE843,
      patchLabel: var_core_value_sig2EB2
    } = jr(),
    var_core_value_sig683A = (0, o[ox40dc55(858)])(a[ox40dc55(1419)]);
  return (0, i.jsx)(A, {
    label: var_core_value_sig683A.t(ox40dc55(1668)),
    options: [{
      value: e[ox40dc55(1727)][ox40dc55(733)],
      label: var_core_value_sig683A.t(ox40dc55(893))
    }, {
      value: e.SeriesLabelPosition[ox40dc55(1934)],
      label: var_core_value_sig683A.t(ox40dc55(2031))
    }, {
      value: e[ox40dc55(1727)][ox40dc55(1672)],
      label: var_core_value_sig683A.t(ox40dc55(1892))
    }, {
      value: e[ox40dc55(1727)][ox40dc55(477)],
      label: var_core_value_sig683A.t(ox40dc55(1560))
    }, {
      value: e[ox40dc55(1727)][ox40dc55(1210)],
      label: var_core_value_sig683A.t(ox40dc55(1935))
    }, {
      value: e[ox40dc55(1727)].Bottom,
      label: var_core_value_sig683A.t("chart-ui.common.position.bottom")
    }],
    value: var_core_value_sigE843[ox40dc55(1712)] ?? var_core_value_sig54C6[ox40dc55(1336)],
    onChange: var_core_value_sigE0A9 => var_core_value_sig2EB2({
      position: var_core_value_sigE0A9
    })
  });
}
function Fr() {
  let {
    label: var_core_value_sig109B,
    NumberFormatField: var_core_value_sig6DD0,
    patchLabel: var_core_value_sigB5D3
  } = jr();
  return (0, i.jsx)(var_core_value_sig6DD0, {
    label: (0, o[ox489a5c(858)])(a.LocaleService).t(ox489a5c(587)),
    value: var_core_value_sig109B.format,
    onChange: var_core_value_sigA73E => var_core_value_sigB5D3({
      format: var_core_value_sigA73E
    })
  });
}
function Ir() {
  let {
      defaultValues: var_core_value_sig6085,
      label: var_core_value_sig2507,
      patchLabel: var_core_value_sig5870
    } = jr(),
    var_core_value_sig827F = (0, o[ox501655(858)])(a.LocaleService),
    var_core_value_sig2452 = z(var_core_value_sig2507, R);
  return (0, i[ox501655(922)])(V, {
    colorPickerFallbackValue: var_core_value_sig6085[ox501655(1393)],
    label: var_core_value_sig827F.t("chart-ui.common.font"),
    value: var_core_value_sig2452,
    onChange: var_core_value_sig7620 => var_core_value_sig5870(B(var_core_value_sig7620))
  });
}
function Lr() {
  let {
      label: var_core_value_sig50D0,
      patchLabel: var_core_value_sig5EBB
    } = jr(),
    var_core_value_sig5E99 = (0, o[ox89d1a2(858)])(a[ox89d1a2(1419)]);
  return (0, i[ox89d1a2(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    emptyLabel: var_core_value_sig5E99.t(ox89d1a2(1990)),
    label: var_core_value_sig5E99.t(ox89d1a2(2018)),
    min: 8,
    value: var_core_value_sig50D0.fontSize ?? null,
    onChange: var_core_value_sigB9FC => var_core_value_sig5EBB({
      fontSize: var_core_value_sigB9FC
    })
  });
}
function Rr() {
  let {
    label: var_core_value_sig3FB3
  } = jr();
  return (0, i.jsxs)(i[ox1d252c(1762)], {
    children: [(0, i[ox1d252c(922)])(Mr, {}), var_core_value_sig3FB3[ox1d252c(1755)] && (0, i[ox1d252c(1557)])(i[ox1d252c(1762)], {
      children: [(0, i.jsx)(Nr, {}), (0, i[ox1d252c(922)])(Pr, {}), (0, i[ox1d252c(922)])(Fr, {}), (0, i[ox1d252c(922)])(Ir, {})]
    })]
  });
}
function zr(var_core_value_sig0214) {
  let [var_core_value_sig5153] = N("chartType", e[ox59e559(653)].None),
    [var_core_value_sigF323, var_core_value_sig0C32] = N(ox59e559(1364)),
    [var_core_value_sig1D89, var_core_value_sig2616] = N(ox59e559(837), []),
    [var_core_value_sig97EF, var_core_value_sigA0C0] = (0, r[ox59e559(1825)])({
      source: var_core_value_sig0214[ox59e559(1717)],
      value: var_core_value_sig0214[ox59e559(1717)] ?? ox59e559(1542)
    }),
    var_core_value_sigAD4B = var_core_value_sig97EF.source === var_core_value_sig0214[ox59e559(1717)] ? var_core_value_sig97EF[ox59e559(1324)] : var_core_value_sig0214.selectedSeriesId ?? "all",
    var_core_value_sig06EA = (0, r[ox59e559(1365)])(var_core_value_sig5055 => var_core_value_sigA0C0({
      source: var_core_value_sig0214[ox59e559(1717)],
      value: var_core_value_sig5055
    }), [var_core_value_sig0214[ox59e559(1717)]]),
    var_core_value_sigF3C7 = var_core_value_sigAD4B === ox59e559(1542) ? null : Number(var_core_value_sigAD4B),
    var_core_value_sig5633 = var_core_value_sigF3C7 === null ? undefined : var_core_value_sig1D89[ox59e559(1507)](var_core_value_sig3801 => var_core_value_sig3801[ox59e559(1301)] === var_core_value_sigF3C7),
    var_core_value_sig2492 = var_core_value_sigF3C7 === null ? var_core_value_sigF323 ?? {} : (var_core_value_sig5633 == null ? undefined : var_core_value_sig5633[ox59e559(1169)]) ?? {},
    var_core_value_sig39F2 = var_core_value_sigF3C7 === null ? var_core_value_sig2492 : _r(var_core_value_sigF323, var_core_value_sig2492),
    var_core_value_sigAD47 = (0, r.useCallback)(var_core_value_sig45F0 => {
      const var_core_value_sigBC91 = ox59e559;
      if (var_core_value_sigF3C7 === null) {
        var_core_value_sig0C32(_r(var_core_value_sigF323, var_core_value_sig45F0));
        return;
      }
      var_core_value_sig2616([{
        dataPointOptions: (var_core_value_sig5633 == null ? undefined : var_core_value_sig5633[var_core_value_sigBC91(1251)]) ?? [],
        name: (var_core_value_sig5633 == null ? undefined : var_core_value_sig5633[var_core_value_sigBC91(1391)]) ?? "",
        selector: var_core_value_sigF3C7,
        style: _r(var_core_value_sig5633 == null ? undefined : var_core_value_sig5633.style, var_core_value_sig45F0)
      }]);
    }, [var_core_value_sigF323, var_core_value_sig5633, var_core_value_sigF3C7, var_core_value_sig0C32, var_core_value_sig2616]),
    var_core_value_sig1722 = var_core_value_sig5153 === e[ox59e559(653)][ox59e559(1961)] ? xr(var_core_value_sig1D89, var_core_value_sigF3C7) : "",
    var_core_value_sig7F86 = var_core_value_sig5153 === e.ChartTypeBits[ox59e559(1961)] ? br(var_core_value_sig1722) : undefined,
    var_core_value_sigF69D = (0, r[ox59e559(1687)])(() => ({
      chartType: var_core_value_sig5153,
      dataPointOptions: (var_core_value_sig5633 == null ? undefined : var_core_value_sig5633[ox59e559(1251)]) ?? pr,
      defaultValues: var_core_value_sig0214[ox59e559(801)],
      isAllSeries: var_core_value_sigF3C7 === null,
      NumberFormatField: var_core_value_sig0214.NumberFormatField ?? At,
      patchStyle: var_core_value_sigAD47,
      selector: var_core_value_sigF3C7,
      selected: var_core_value_sigAD4B,
      series: var_core_value_sig1D89,
      seriesType: var_core_value_sig7F86 ?? vr(var_core_value_sig5153, var_core_value_sig39F2),
      setSelected: var_core_value_sig06EA,
      setSeries: var_core_value_sig2616,
      style: var_core_value_sig39F2
    }), [var_core_value_sig5153, var_core_value_sig5633 == null ? undefined : var_core_value_sig5633[ox59e559(1251)], var_core_value_sig39F2, var_core_value_sigAD47, var_core_value_sig0214[ox59e559(1902)], var_core_value_sig0214[ox59e559(801)], var_core_value_sig7F86, var_core_value_sigAD4B, var_core_value_sigF3C7, var_core_value_sig1D89, var_core_value_sig06EA, var_core_value_sig2616]);
  return (0, i[ox59e559(922)])(Cr.Provider, {
    value: var_core_value_sigF69D,
    children: (0, i[ox59e559(922)])(ox59e559(1998), {
      className: ox59e559(1556),
      children: var_core_value_sig0214[ox59e559(1492)]
    })
  });
}
function Br() {
  let {
      chartType: var_core_value_sig7CB9,
      isAllSeries: var_core_value_sigC1D8,
      seriesType: var_core_value_sigCF8B
    } = J(),
    var_core_value_sigCD15 = var_core_value_sigCF8B === e[ox507d0b(653)].Line,
    var_core_value_sig524D = e.chartBitsUtils[ox507d0b(1429)](var_core_value_sigCF8B, e[ox507d0b(653)].Area),
    var_core_value_sigD7F4 = var_core_value_sigCF8B === e.ChartTypeBits[ox507d0b(479)],
    var_core_value_sig7B87 = var_core_value_sigCF8B === e[ox507d0b(653)][ox507d0b(1546)],
    var_core_value_sig933D = !var_core_value_sig7B87 || !var_core_value_sigC1D8,
    var_core_value_sig6ACE = !var_core_value_sig7B87,
    var_core_value_sig7675 = var_core_value_sigCD15 || var_core_value_sig524D || var_core_value_sig7B87 || var_core_value_sigD7F4 && !var_core_value_sigC1D8;
  return (0, i[ox507d0b(1557)])(i[ox507d0b(1762)], {
    children: [!var_core_value_sigC1D8 && !e[ox507d0b(1226)][ox507d0b(1429)](var_core_value_sig7CB9, e[ox507d0b(653)].Bar) && var_core_value_sig7CB9 !== e.ChartTypeBits[ox507d0b(479)] && (0, i[ox507d0b(922)])(Dr, {}), var_core_value_sig933D && (0, i[ox507d0b(922)])(Or, {}), var_core_value_sig6ACE && (0, i[ox507d0b(922)])(kr, {
      showColor: !var_core_value_sigCD15,
      showOpacity: !var_core_value_sigCD15
    }), var_core_value_sig7675 && (0, i[ox507d0b(922)])(Ar, {
      showColor: !var_core_value_sigC1D8
    }), (0, i[ox507d0b(922)])(Rr, {}), !var_core_value_sigC1D8 && !var_core_value_sigD7F4 && (0, i.jsx)(wr, {})]
  });
}
function Vr(var_core_value_sig21B8) {
  return (0, i[ox52b52a(1557)])(zr, {
    ...var_core_value_sig21B8,
    children: [(0, i[ox52b52a(922)])(Tr, {}), (0, i[ox52b52a(922)])(Er, {}), (0, i[ox52b52a(922)])(Br, {})]
  });
}
const Hr = [e.ChartTypeBits["Area"], e.ChartTypeBits["Bar"], e.ChartTypeBits["Column"]];
function Ur(var_core_value_sigD545) {
  let var_core_value_sig91C9 = (0, o.useDependency)(a[ox34a174(1419)]),
    var_core_value_sig64BA = Xt(var_core_value_sigD545[ox34a174(1822)]);
  return (0, i[ox34a174(922)])(A, {
    label: var_core_value_sig91C9.t(ox34a174(1104)),
    options: var_core_value_sigD545[ox34a174(1822)],
    value: var_core_value_sig64BA.value,
    onChange: var_core_value_sigCB88 => {
      const var_core_value_sig8D65 = ox34a174;
      var var_core_value_sig8122;
      let var_core_value_sigEDC6 = var_core_value_sig64BA[var_core_value_sig8D65(734)](var_core_value_sigCB88);
      (var_core_value_sig8122 = var_core_value_sigD545[var_core_value_sig8D65(507)]) == null || var_core_value_sig8122[var_core_value_sig8D65(678)](var_core_value_sigD545, var_core_value_sigEDC6);
    }
  });
}
function Wr() {
  let var_core_value_sig3FD5 = (0, o[ox213a41(858)])(a[ox213a41(1419)]),
    var_core_value_sig1008 = (0, o[ox213a41(858)])(e[ox213a41(825)]),
    var_core_value_sigB9F4 = var_core_value_sig1008[ox213a41(969)](),
    var_core_value_sig2D23 = (0, r[ox213a41(1687)])(() => Ue(var_core_value_sigB9F4, var_core_value_sig1758 => var_core_value_sig1008[ox213a41(724)](var_core_value_sig1758)), [var_core_value_sig1008, var_core_value_sigB9F4]),
    [var_core_value_sigF2E0, var_core_value_sig9214] = N(ox213a41(1162));
  return (0, i[ox213a41(922)])(A, {
    label: var_core_value_sig3FD5.t("chart-ui.presentation.theme"),
    options: var_core_value_sig2D23,
    value: var_core_value_sigF2E0 ?? var_core_value_sigB9F4[0] ?? "",
    onChange: var_core_value_sig611A => var_core_value_sig9214(var_core_value_sig611A || undefined)
  });
}
function Gr(var_core_value_sigC8B1) {
  let var_core_value_sig35E2 = (0, o[ox173d8e(858)])(a.LocaleService),
    [var_core_value_sig9B13] = N("chartType", e[ox173d8e(653)][ox173d8e(1859)]),
    [var_core_value_sig60E6, var_core_value_sig1F6E] = N("autoGradientFill");
  return var_core_value_sigC8B1.visible ? (0, i[ox173d8e(922)])(H, {
    inlineLabel: true,
    checked: var_core_value_sig60E6 ?? e[ox173d8e(1226)][ox173d8e(1429)](var_core_value_sig9B13, e[ox173d8e(653)][ox173d8e(999)]),
    label: var_core_value_sig35E2.t(ox173d8e(633)),
    onChange: var_core_value_sig1F6E
  }) : null;
}
function Kr() {
  let var_core_value_sig7A6B = (0, o[ox1be701(858)])(a[ox1be701(1419)]),
    [var_core_value_sig20F6, var_core_value_sigAEE0] = N(ox1be701(553), e[ox1be701(653)].None);
  return Hr[ox1be701(1399)](var_core_value_sig6BD9 => e[ox1be701(1226)][ox1be701(1429)](var_core_value_sig20F6, var_core_value_sig6BD9)) ? (0, i[ox1be701(922)])(A, {
    label: var_core_value_sig7A6B.t(ox1be701(1763)),
    options: [{
      value: "",
      label: var_core_value_sig7A6B.t("chart-ui.common.none")
    }, {
      value: e.StackType[ox1be701(1747)],
      label: var_core_value_sig7A6B.t("chart-ui.common.stacked")
    }, {
      value: e[ox1be701(1610)].Percent,
      label: var_core_value_sig7A6B.t(ox1be701(680))
    }],
    value: (0, e[ox1be701(972)])(var_core_value_sig20F6) || "",
    onChange: var_core_value_sig7E56 => var_core_value_sigAEE0((0, e[ox1be701(1045)])(var_core_value_sig20F6, var_core_value_sig7E56))
  }) : null;
}
const qr = {
  stackType: e.WaterfallStackTypeEnum["Arrangement"],
  useSubtotal: true
};
function Jr(var_core_value_sig72B6) {
  let var_core_value_sig43E8 = (0, o[ox27ad32(858)])(a[ox27ad32(1419)]),
    [var_core_value_sigB1FB] = N(ox27ad32(553), e[ox27ad32(653)].None),
    [var_core_value_sig6876, var_core_value_sig55FB] = N("waterfall");
  return e[ox27ad32(1226)].baseOn(var_core_value_sigB1FB, e[ox27ad32(653)][ox27ad32(1766)]) ? (0, i[ox27ad32(1557)])(i.Fragment, {
    children: [(0, i[ox27ad32(922)])(A, {
      label: var_core_value_sig43E8.t(ox27ad32(1343)),
      options: [{
        value: e[ox27ad32(1195)][ox27ad32(2009)],
        label: var_core_value_sig43E8.t(ox27ad32(695))
      }, {
        value: e.WaterfallStackTypeEnum[ox27ad32(1747)],
        label: var_core_value_sig43E8.t("chart-ui.common.stacked")
      }],
      value: (var_core_value_sig6876 == null ? undefined : var_core_value_sig6876[ox27ad32(1824)]) ?? var_core_value_sig72B6[ox27ad32(801)].stackType,
      onChange: var_core_value_sig4161 => var_core_value_sig55FB({
        ...var_core_value_sig6876,
        stackType: var_core_value_sig4161
      })
    }), (0, i[ox27ad32(922)])(H, {
      inlineLabel: true,
      checked: (var_core_value_sig6876 == null ? undefined : var_core_value_sig6876[ox27ad32(2039)]) ?? var_core_value_sig72B6[ox27ad32(801)][ox27ad32(2039)],
      label: var_core_value_sig43E8.t(ox27ad32(986)),
      onChange: var_core_value_sig7580 => var_core_value_sig55FB({
        ...var_core_value_sig6876,
        useSubtotal: var_core_value_sig7580
      })
    })]
  }) : null;
}
const Yr = {
  backgroundColor: e.defaultChartConfig["backgroundColor"],
  borderColor: e.defaultChartConfig["textStyle"].color
};
function Xr(var_core_value_sig2870) {
  var var_core_value_sigC865, var_core_value_sig6788;
  let var_core_value_sig7B1F = (0, o.useDependency)(a.LocaleService),
    [var_core_value_sig7E51, var_core_value_sigAE87] = N(ox193064(1575)),
    var_core_value_sigFD51 = (var_core_value_sig7E51 == null || (var_core_value_sigC865 = var_core_value_sig7E51[ox193064(1417)]) == null ? undefined : var_core_value_sigC865[ox193064(1393)]) ?? null,
    var_core_value_sigF6D6 = (var_core_value_sig7E51 == null || (var_core_value_sig6788 = var_core_value_sig7E51[ox193064(1464)]) == null ? undefined : var_core_value_sig6788[ox193064(1393)]) ?? null;
  return (0, i[ox193064(1557)])(ox193064(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i[ox193064(922)])(M, {
      emptyLabel: var_core_value_sig7B1F.t(ox193064(819)),
      label: var_core_value_sig7B1F.t(ox193064(783)),
      pickerFallbackValue: var_core_value_sigFD51 ?? var_core_value_sig2870[ox193064(801)][ox193064(833)],
      resetLabel: var_core_value_sig7B1F.t(ox193064(819)),
      transparentLabel: var_core_value_sig7B1F.t(ox193064(1663)),
      value: var_core_value_sigFD51,
      onChange: var_core_value_sig1F18 => var_core_value_sigAE87({
        ...var_core_value_sig7E51,
        background: {
          ...(var_core_value_sig7E51 == null ? undefined : var_core_value_sig7E51[ox193064(1417)]),
          color: var_core_value_sig1F18
        }
      })
    }), var_core_value_sig2870.hostBorder ?? (0, i[ox193064(922)])(M, {
      emptyLabel: var_core_value_sig7B1F.t(ox193064(819)),
      label: var_core_value_sig7B1F.t("chart-ui.common.borderColor"),
      pickerFallbackValue: var_core_value_sigF6D6 ?? var_core_value_sig2870[ox193064(801)][ox193064(1881)],
      resetLabel: var_core_value_sig7B1F.t(ox193064(819)),
      value: var_core_value_sigF6D6,
      onChange: var_core_value_sigD5A0 => var_core_value_sigAE87({
        ...var_core_value_sig7E51,
        border: {
          ...(var_core_value_sig7E51 == null ? undefined : var_core_value_sig7E51.border),
          color: var_core_value_sigD5A0
        }
      })
    })]
  });
}
const Zr = [{
    value: e.LabelAlignEnum["Left"],
    labelKey: "chart-ui.common.textAlign.left"
  }, {
    value: e.LabelAlignEnum["Center"],
    labelKey: "chart-ui.common.textAlign.center"
  }, {
    value: e.LabelAlignEnum["Right"],
    labelKey: "chart-ui.common.textAlign.right"
  }],
  Qr = [{
    value: "title",
    labelKey: "chart-ui.common.chartTitle"
  }, {
    value: "subtitle",
    labelKey: "chart-ui.common.subtitle"
  }],
  $r = [{
    value: "horizontalAxis",
    labelKey: "chart-ui.presentation.horizontalAxisTitle"
  }, {
    value: "verticalAxis",
    labelKey: "chart-ui.presentation.verticalAxisTitle"
  }, {
    value: "rightVerticalAxis",
    labelKey: "chart-ui.presentation.rightVerticalAxisTitle"
  }];
function ei(var_core_value_sigCF95, var_core_value_sig8793) {
  if (var_core_value_sigCF95 === "x") return ox591f19(1547);
  let var_core_value_sig1BE7 = var_core_value_sig8793.find(var_core_value_sig81B2 => var_core_value_sig81B2[ox591f19(1712)] !== e[ox591f19(892)][ox591f19(1672)] && var_core_value_sig81B2[ox591f19(1712)] !== e.IRuntimeAxisPosition[ox591f19(477)] ? false : var_core_value_sigCF95 === ox591f19(1872) ? var_core_value_sig81B2[ox591f19(1906)] === e[ox591f19(1483)][ox591f19(1846)] : var_core_value_sig81B2.priority !== e.IRuntimeAxisPriority["Tertiary"]);
  return var_core_value_sig1BE7 ? var_core_value_sig1BE7[ox591f19(1712)] === e.IRuntimeAxisPosition[ox591f19(477)] ? ox591f19(1274) : "chart-ui.presentation.verticalAxisTitle" : var_core_value_sigCF95 === "rightY" ? ox591f19(1274) : ox591f19(1833);
}
const ti = {
  axisTitleAlignment: e.defaultChartConfig["axis"].titleAlign,
  axisTitleFont: R,
  mainTitleFont: {
    ...R,
    align: e.LabelAlignEnum["Center"],
    fontSize: e.defaultChartConfig["textStyle"].titleFontSize
  },
  position: e.defaultChartConfig["titlePosition"],
  subtitleFont: {
    ...R,
    align: e.defaultChartConfig["textStyle"].align,
    fontSize: e.defaultChartConfig["textStyle"].subTitleFontSize
  }
};
function ni(var_core_value_sig34F8) {
  return typeof var_core_value_sig34F8 == ox36cee0(2002) ? {
    text: var_core_value_sig34F8
  } : var_core_value_sig34F8 ?? {};
}
function ri(var_core_value_sig9F3D) {
  return typeof var_core_value_sig9F3D == ox422c60(2002) ? {
    text: var_core_value_sig9F3D
  } : var_core_value_sig9F3D ?? {};
}
function ii(var_core_value_sig785C) {
  let var_core_value_sig6537 = (0, o[ox264904(858)])(a[ox264904(1419)]),
    [var_core_value_sig72BB, var_core_value_sigC0DF] = N("title"),
    var_core_value_sig94B7 = ni(var_core_value_sig72BB),
    var_core_value_sig9865 = var_core_value_sig94B7[ox264904(1755)] === false ? e[ox264904(560)][ox264904(1566)] : var_core_value_sig94B7[ox264904(1712)] ?? var_core_value_sig785C[ox264904(801)][ox264904(1712)],
    var_core_value_sigA09D = z({
      ...var_core_value_sig94B7,
      align: var_core_value_sig94B7[ox264904(1157)]
    }, var_core_value_sig785C.defaultValues[ox264904(701)]),
    var_core_value_sig1429 = Zr.map(var_core_value_sigA0A5 => ({
      value: var_core_value_sigA0A5[ox264904(1324)],
      label: var_core_value_sig6537.t(var_core_value_sigA0A5[ox264904(1535)])
    }));
  return (0, i[ox264904(1557)])(i[ox264904(1762)], {
    children: [(0, i[ox264904(922)])(j, {
      allowClear: true,
      commitMode: var_core_value_sig785C[ox264904(1486)],
      label: var_core_value_sig6537.t(ox264904(718)),
      value: var_core_value_sig94B7[ox264904(1245)] ?? "",
      onChange: var_core_value_sig10AA => var_core_value_sigC0DF({
        ...var_core_value_sig94B7,
        text: var_core_value_sig10AA
      })
    }), (0, i[ox264904(922)])(A, {
      label: var_core_value_sig6537.t(ox264904(1273)),
      options: [{
        value: e[ox264904(560)].Top,
        label: var_core_value_sig6537.t(ox264904(1935))
      }, {
        value: e.TitlePositionEnum[ox264904(1831)],
        label: var_core_value_sig6537.t(ox264904(1758))
      }, {
        value: e[ox264904(560)].Left,
        label: var_core_value_sig6537.t("chart-ui.common.position.left")
      }, {
        value: e[ox264904(560)].Right,
        label: var_core_value_sig6537.t(ox264904(1560))
      }, {
        value: e[ox264904(560)][ox264904(1566)],
        label: var_core_value_sig6537.t(ox264904(1351))
      }],
      value: var_core_value_sig9865,
      onChange: var_core_value_sigE6D0 => var_core_value_sigC0DF({
        ...var_core_value_sig94B7,
        visible: var_core_value_sigE6D0 !== e.TitlePositionEnum[ox264904(1566)],
        ...(var_core_value_sigE6D0 === e.TitlePositionEnum["Hide"] ? {} : {
          position: var_core_value_sigE6D0
        })
      })
    }), var_core_value_sig785C[ox264904(1328)] && (0, i.jsx)(V, {
      alignLabel: var_core_value_sig6537.t(ox264904(1127)),
      alignOptions: var_core_value_sig1429,
      colorPickerFallbackValue: e[ox264904(1790)][ox264904(508)][ox264904(1393)],
      label: var_core_value_sig6537.t(ox264904(852)),
      value: var_core_value_sigA09D,
      onChange: var_core_value_sig8E91 => {
        let {
          align: var_core_value_sig00BE,
          ...var_core_value_sig7BB5
        } = var_core_value_sig8E91;
        var_core_value_sigC0DF({
          ...var_core_value_sig94B7,
          ...var_core_value_sig7BB5,
          ...(var_core_value_sig00BE === undefined ? {} : {
            alignment: var_core_value_sig00BE
          })
        });
      }
    })]
  });
}
function ai(var_core_value_sigA339) {
  let var_core_value_sig832A = (0, o.useDependency)(a[ox170c0c(1419)]),
    [var_core_value_sig7945, var_core_value_sig1166] = N(ox170c0c(1247)),
    var_core_value_sig7ABC = ri(var_core_value_sig7945),
    var_core_value_sigF686 = z({
      ...var_core_value_sig7ABC,
      align: var_core_value_sig7ABC.alignment
    }, var_core_value_sigA339[ox170c0c(801)].subtitleFont),
    var_core_value_sigDFF0 = Zr.map(var_core_value_sig6AAD => ({
      value: var_core_value_sig6AAD[ox170c0c(1324)],
      label: var_core_value_sig832A.t(var_core_value_sig6AAD.labelKey)
    }));
  return (0, i[ox170c0c(1557)])(i[ox170c0c(1762)], {
    children: [(0, i[ox170c0c(922)])(j, {
      allowClear: true,
      commitMode: var_core_value_sigA339[ox170c0c(1486)],
      label: var_core_value_sig832A.t(ox170c0c(1979)),
      value: var_core_value_sig7ABC[ox170c0c(1245)] ?? "",
      onChange: var_core_value_sig1157 => var_core_value_sig1166({
        ...var_core_value_sig7ABC,
        text: var_core_value_sig1157
      })
    }), var_core_value_sigA339.showFont && (0, i.jsx)(V, {
      alignLabel: var_core_value_sig832A.t(ox170c0c(1127)),
      alignOptions: var_core_value_sigDFF0,
      colorPickerFallbackValue: e[ox170c0c(1790)][ox170c0c(508)][ox170c0c(1393)],
      label: var_core_value_sig832A.t(ox170c0c(852)),
      value: var_core_value_sigF686,
      onChange: var_core_value_sigA694 => {
        let {
          align: var_core_value_sig18E01,
          ...var_core_value_sig0428
        } = var_core_value_sigA694;
        var_core_value_sig1166({
          ...var_core_value_sig7ABC,
          ...var_core_value_sig0428,
          ...(var_core_value_sig18E01 === undefined ? {} : {
            alignment: var_core_value_sig18E01
          })
        });
      }
    })]
  });
}
function oi(var_core_value_sig0130) {
  let var_core_value_sigFD90 = (0, o.useDependency)(a[ox5f9c2f(1419)]),
    var_core_value_sig702C = Gt()[ox5f9c2f(714)],
    [var_core_value_sig03A4, var_core_value_sigB6F5] = N(ox5f9c2f(714)),
    var_core_value_sig82931 = (var_core_value_sig03A4 == null ? undefined : var_core_value_sig03A4[var_core_value_sig0130[ox5f9c2f(708)]]) ?? {},
    var_core_value_sig43AE = z(var_core_value_sig82931.titleStyle, var_core_value_sig0130.defaultValues[ox5f9c2f(793)]),
    var_core_value_sigEF2E = var_core_value_sigFD90.t(ei(var_core_value_sig0130.axis, var_core_value_sig702C)),
    var_core_value_sigD83C = [{
      value: e[ox5f9c2f(1962)][ox5f9c2f(1329)],
      label: var_core_value_sigFD90.t(ox5f9c2f(1386))
    }, {
      value: e[ox5f9c2f(1962)][ox5f9c2f(820)],
      label: var_core_value_sigFD90.t(ox5f9c2f(1231))
    }, {
      value: e[ox5f9c2f(1962)][ox5f9c2f(1270)],
      label: var_core_value_sigFD90.t(ox5f9c2f(1153))
    }];
  return (0, i.jsxs)(i[ox5f9c2f(1762)], {
    children: [(0, i[ox5f9c2f(922)])(j, {
      allowClear: true,
      commitMode: var_core_value_sig0130[ox5f9c2f(1486)],
      label: var_core_value_sigEF2E,
      value: var_core_value_sig82931.title ?? "",
      onChange: var_core_value_sigBE07 => var_core_value_sigB6F5({
        ...var_core_value_sig03A4,
        [var_core_value_sig0130[ox5f9c2f(708)]]: {
          ...var_core_value_sig82931,
          title: var_core_value_sigBE07
        }
      })
    }), var_core_value_sig0130[ox5f9c2f(1993)] && (0, i[ox5f9c2f(922)])(A, {
      label: var_core_value_sigFD90.t(ox5f9c2f(1127)),
      options: var_core_value_sigD83C,
      value: var_core_value_sig82931[ox5f9c2f(1909)] ?? var_core_value_sig0130.defaultValues[ox5f9c2f(1292)],
      onChange: var_core_value_sig555F => var_core_value_sigB6F5({
        ...var_core_value_sig03A4,
        [var_core_value_sig0130[ox5f9c2f(708)]]: {
          ...var_core_value_sig82931,
          titleAlignment: var_core_value_sig555F
        }
      })
    }), var_core_value_sig0130[ox5f9c2f(1328)] && (0, i[ox5f9c2f(922)])(V, {
      colorPickerFallbackValue: e[ox5f9c2f(1790)][ox5f9c2f(508)][ox5f9c2f(1393)],
      label: var_core_value_sigFD90.t(ox5f9c2f(852)),
      value: var_core_value_sig43AE,
      onChange: var_core_value_sig3D6F => var_core_value_sigB6F5({
        ...var_core_value_sig03A4,
        [var_core_value_sig0130[ox5f9c2f(708)]]: {
          ...var_core_value_sig82931,
          titleStyle: {
            ...var_core_value_sig82931.titleStyle,
            ...B(var_core_value_sig3D6F)
          }
        }
      })
    })]
  });
}
function si(var_core_value_sigAC2B) {
  var var_core_value_sigFBBE;
  let var_core_value_sigC982 = (0, o[ox4fb14f(858)])(a.LocaleService),
    [var_core_value_sig59DA, var_core_value_sig3002] = N(ox4fb14f(1703)),
    [var_core_value_sig33D2, var_core_value_sig8D4A] = N("axes"),
    var_core_value_sigB5D7 = ni(var_core_value_sig59DA),
    var_core_value_sig797B = (var_core_value_sig33D2 == null ? undefined : var_core_value_sig33D2.x) ?? {},
    var_core_value_sig5094 = (var_core_value_sig33D2 == null ? undefined : var_core_value_sig33D2.y) ?? {},
    var_core_value_sig8883 = (var_core_value_sig33D2 == null ? undefined : var_core_value_sig33D2[ox4fb14f(1872)]) ?? {};
  return (0, i[ox4fb14f(1557)])(O, {
    children: [(0, i[ox4fb14f(922)])(k, {
      allowClear: true,
      allowEmpty: true,
      emptyLabel: var_core_value_sigC982.t(ox4fb14f(1990)),
      label: var_core_value_sigC982.t("chart-ui.common.chartTitle"),
      min: 8,
      value: var_core_value_sigB5D7[ox4fb14f(1003)] ?? null,
      onChange: var_core_value_sig336C => var_core_value_sig3002({
        ...var_core_value_sigB5D7,
        fontSize: var_core_value_sig336C
      })
    }), (0, i[ox4fb14f(922)])(k, {
      allowClear: true,
      allowEmpty: true,
      emptyLabel: var_core_value_sigC982.t(ox4fb14f(1990)),
      label: var_core_value_sigC982.t(ox4fb14f(1032)),
      min: 8,
      value: ((var_core_value_sigFBBE = var_core_value_sig797B[ox4fb14f(1735)]) == null ? undefined : var_core_value_sigFBBE[ox4fb14f(1003)]) ?? null,
      onChange: var_core_value_sig6E68 => var_core_value_sig8D4A({
        ...var_core_value_sig33D2,
        x: {
          ...var_core_value_sig797B,
          titleStyle: {
            ...var_core_value_sig797B.titleStyle,
            fontSize: var_core_value_sig6E68
          }
        },
        y: {
          ...var_core_value_sig5094,
          titleStyle: {
            ...var_core_value_sig5094.titleStyle,
            fontSize: var_core_value_sig6E68
          }
        },
        rightY: {
          ...var_core_value_sig8883,
          titleStyle: {
            ...var_core_value_sig8883[ox4fb14f(1735)],
            fontSize: var_core_value_sig6E68
          }
        }
      })
    })]
  });
}
function ci(var_core_value_sig488F) {
  switch (var_core_value_sig488F) {
    case P[ox417419(883)]:
      return "subtitle";
    case P[ox417419(1056)]:
      return ox417419(1952);
    case P.YAxisTitle:
      return ox417419(1097);
    case P.RightYAxisTitle:
      return ox417419(638);
    default:
      return ox417419(1703);
  }
}
const li = (0, r.createContext)(null);
function ui() {
  let var_core_value_sigB440 = (0, r[ox167eda(1443)])(li);
  if (!var_core_value_sigB440) throw Error(ox167eda(1975));
  return var_core_value_sigB440;
}
function di(var_core_value_sigF5CC) {
  let [var_core_value_sigA1B6] = N(ox1b4af7(553), e.ChartTypeBits[ox1b4af7(1859)]),
    var_core_value_sig66A0 = ci(var_core_value_sigF5CC[ox1b4af7(530)]),
    [var_core_value_sig7876, var_core_value_sig2C69] = (0, r[ox1b4af7(1825)])(() => ({
      selectedTitleKey: var_core_value_sigF5CC[ox1b4af7(530)],
      target: var_core_value_sig66A0
    })),
    var_core_value_sigAF19 = var_core_value_sig7876[ox1b4af7(530)] === var_core_value_sigF5CC[ox1b4af7(530)] ? var_core_value_sig7876[ox1b4af7(2036)] : var_core_value_sig66A0,
    var_core_value_sigCE75 = (0, r[ox1b4af7(1365)])(var_core_value_sig8DFE => {
      const var_core_value_sig48EA = ox1b4af7;
      var_core_value_sig2C69({
        selectedTitleKey: var_core_value_sigF5CC[var_core_value_sig48EA(530)],
        target: var_core_value_sig8DFE
      });
    }, [var_core_value_sigF5CC[ox1b4af7(530)]]),
    var_core_value_sigF27A = Gt()[ox1b4af7(714)],
    var_core_value_sig47B3 = fn(var_core_value_sigA1B6, 1),
    var_core_value_sig5E75 = (0, r[ox1b4af7(1687)])(() => var_core_value_sig47B3 ? [...Qr, ...$r.filter(var_core_value_sig4805 => var_core_value_sig4805[ox1b4af7(1324)] !== ox1b4af7(638) || var_core_value_sigF27A.some(var_core_value_sigBC46 => var_core_value_sigBC46[ox1b4af7(1906)] === e[ox1b4af7(1483)][ox1b4af7(1846)]))[ox1b4af7(1285)](var_core_value_sigE67E => var_core_value_sigE67E[ox1b4af7(1324)] === ox1b4af7(1097) ? {
      ...var_core_value_sigE67E,
      labelKey: ei("y", var_core_value_sigF27A)
    } : var_core_value_sigE67E.value === ox1b4af7(638) ? {
      ...var_core_value_sigE67E,
      labelKey: ei(ox1b4af7(1872), var_core_value_sigF27A)
    } : var_core_value_sigE67E)] : Qr, [var_core_value_sig47B3, var_core_value_sigF27A]),
    var_core_value_sigC266 = var_core_value_sig5E75.some(var_core_value_sig5E16 => var_core_value_sig5E16[ox1b4af7(1324)] === var_core_value_sigAF19) ? var_core_value_sigAF19 : ox1b4af7(1703),
    var_core_value_sig77A3 = (0, r[ox1b4af7(1687)])(() => ({
      defaultValues: var_core_value_sigF5CC[ox1b4af7(801)],
      effectiveTarget: var_core_value_sigC266,
      setSelectedTarget: var_core_value_sigCE75,
      targetOptions: var_core_value_sig5E75
    }), [var_core_value_sigC266, var_core_value_sigF5CC[ox1b4af7(801)], var_core_value_sigCE75, var_core_value_sig5E75]);
  return (0, i.jsx)(li[ox1b4af7(1838)], {
    value: var_core_value_sig77A3,
    children: (0, i[ox1b4af7(922)])(ox1b4af7(1998), {
      className: ox1b4af7(1556),
      children: var_core_value_sigF5CC[ox1b4af7(1492)]
    })
  });
}
function fi() {
  let var_core_value_sigD85C = (0, o[ox8a5151(858)])(a[ox8a5151(1419)]),
    {
      effectiveTarget: var_core_value_sig3957,
      setSelectedTarget: var_core_value_sigA101,
      targetOptions: var_core_value_sig2ADC
    } = ui();
  return (0, i[ox8a5151(922)])(A, {
    label: var_core_value_sigD85C.t(ox8a5151(1030)),
    options: var_core_value_sig2ADC.map(var_core_value_sig09F3 => ({
      value: var_core_value_sig09F3.value,
      label: var_core_value_sigD85C.t(var_core_value_sig09F3[ox8a5151(1535)])
    })),
    value: var_core_value_sig3957,
    onChange: var_core_value_sigA101
  });
}
function pi(var_core_value_sig1386) {
  let {
    defaultValues: var_core_value_sig96F5,
    effectiveTarget: var_core_value_sig7F54
  } = ui();
  switch (var_core_value_sig7F54) {
    case ox514338(1247):
      return (0, i[ox514338(922)])(ai, {
        commitMode: var_core_value_sig1386[ox514338(1486)],
        defaultValues: var_core_value_sig96F5,
        showFont: true
      });
    case "horizontalAxis":
      return (0, i[ox514338(922)])(oi, {
        axis: "x",
        commitMode: var_core_value_sig1386.commitMode,
        defaultValues: var_core_value_sig96F5,
        showAlignment: true,
        showFont: true
      });
    case ox514338(1097):
      return (0, i[ox514338(922)])(oi, {
        axis: "y",
        commitMode: var_core_value_sig1386.commitMode,
        defaultValues: var_core_value_sig96F5,
        showAlignment: true,
        showFont: true
      });
    case ox514338(638):
      return (0, i[ox514338(922)])(oi, {
        axis: "rightY",
        commitMode: var_core_value_sig1386[ox514338(1486)],
        defaultValues: var_core_value_sig96F5,
        showAlignment: true,
        showFont: true
      });
    default:
      return (0, i[ox514338(922)])(ii, {
        commitMode: var_core_value_sig1386[ox514338(1486)],
        defaultValues: var_core_value_sig96F5,
        showFont: true
      });
  }
}
function mi(var_core_value_sigEB45) {
  return (0, i[oxdb7274(1557)])(di, {
    defaultValues: var_core_value_sigEB45[oxdb7274(801)],
    selectedTitleKey: var_core_value_sigEB45[oxdb7274(530)],
    children: [(0, i[oxdb7274(922)])(fi, {}), (0, i[oxdb7274(922)])(pi, {
      commitMode: var_core_value_sigEB45[oxdb7274(1486)]
    })]
  });
}
const hi = [{
    icon: (0, i.jsx)(n.LinearIcon, {}),
    labelKey: "chart-ui.trendline.linear",
    value: e.ChartTrendlineType["linear"]
  }, {
    icon: (0, i.jsx)(n.ExponentialIcon, {}),
    labelKey: "chart-ui.trendline.exponential",
    value: e.ChartTrendlineType["exp"]
  }, {
    icon: (0, i.jsx)(n.LogarithmicIcon, {}),
    labelKey: "chart-ui.trendline.logarithmic",
    value: e.ChartTrendlineType["log"]
  }, {
    icon: (0, i.jsx)(n.PowerLineIcon, {}),
    labelKey: "chart-ui.trendline.power",
    value: e.ChartTrendlineType["pow"]
  }, {
    icon: (0, i.jsx)(n.MovingAverageIcon, {}),
    labelKey: "chart-ui.trendline.movingAverage",
    value: e.ChartTrendlineType["movingAvg"]
  }, {
    icon: (0, i.jsx)(n.PolynomialIcon, {}),
    labelKey: "chart-ui.trendline.polynomial",
    value: e.ChartTrendlineType["poly"]
  }],
  gi = {
    color: e.defaultChartConfig["trendline"].color,
    dashType: e.defaultChartConfig["trendline"].dashType,
    opacity: e.defaultChartConfig["trendline"].opacity,
    order: e.defaultChartConfig["trendline"].order,
    period: e.defaultChartConfig["trendline"].period,
    showFormula: e.defaultChartConfig["trendline"].showFormula,
    showR2: e.defaultChartConfig["trendline"].showR2,
    textColor: e.defaultChartConfig["textStyle"].color,
    type: e.ChartTrendlineType["linear"],
    width: e.defaultChartConfig["trendline"].width
  };
function _i(var_core_value_sig0623, var_core_value_sigBF43) {
  var var_core_value_sigBC08;
  return ox505394(1709) in var_core_value_sig0623 ? String(var_core_value_sig0623.index) : String(((var_core_value_sigBC08 = var_core_value_sigBF43[ox505394(1507)](var_core_value_sig4592 => var_core_value_sig4592[ox505394(1391)] === var_core_value_sig0623[ox505394(1391)])) == null ? undefined : var_core_value_sigBC08.selector) ?? "");
}
function vi(var_core_value_sig3F28) {
  var var_core_value_sig0A16;
  let var_core_value_sig0A96 = (0, o[ox541ecd(858)])(a[ox541ecd(1419)]),
    [var_core_value_sig72FE, var_core_value_sigE8ED] = N(ox541ecd(1984)),
    [var_core_value_sig6DD3] = N(ox541ecd(837), []),
    [var_core_value_sig8E87, var_core_value_sigCDF2] = (0, r.useState)(0),
    [var_core_value_sig1043, var_core_value_sig4289] = (0, r[ox541ecd(1825)])(""),
    var_core_value_sig2729 = L(Ge),
    var_core_value_sig5BB6 = var_core_value_sig72FE ?? [],
    var_core_value_sig5C75 = Math[ox541ecd(1337)](var_core_value_sig8E87, Math[ox541ecd(628)](var_core_value_sig5BB6.length - 1, 0)),
    var_core_value_sigCB46 = var_core_value_sig5BB6[var_core_value_sig5C75],
    var_core_value_sig0177 = var_core_value_sig1043 || String(((var_core_value_sig0A16 = var_core_value_sig6DD3[0]) == null ? undefined : var_core_value_sig0A16.selector) ?? ""),
    var_core_value_sigC674 = var_core_value_sigC5C4 => {
      if (!var_core_value_sigCB46) return;
      let var_core_value_sig1617 = [...var_core_value_sig5BB6];
      var_core_value_sig1617[var_core_value_sig5C75] = {
        ...var_core_value_sigCB46,
        ...var_core_value_sigC5C4
      }, var_core_value_sigE8ED(var_core_value_sig1617);
    },
    var_core_value_sigC11B = () => {
      if (!var_core_value_sigCB46) return;
      let {
          width: var_core_value_sig4169,
          ...var_core_value_sig6D19
        } = var_core_value_sigCB46,
        var_core_value_sig279C = [...var_core_value_sig5BB6];
      var_core_value_sig279C[var_core_value_sig5C75] = var_core_value_sig6D19, var_core_value_sigE8ED(var_core_value_sig279C);
    },
    var_core_value_sig5461 = var_core_value_sigAC51 => {
      let var_core_value_sig8986 = G(var_core_value_sigAC51);
      if (var_core_value_sig8986 === null) {
        var_core_value_sigC11B();
        return;
      }
      var_core_value_sigC674({
        width: var_core_value_sig8986
      });
    },
    var_core_value_sigBA12 = () => {
      const var_core_value_sigCAF7 = ox541ecd;
      var_core_value_sig0177 && (var_core_value_sigCDF2(var_core_value_sig5BB6[var_core_value_sigCAF7(1579)]), var_core_value_sigE8ED([...var_core_value_sig5BB6, {
        selector: {
          index: Number(var_core_value_sig0177)
        },
        type: var_core_value_sig3F28[var_core_value_sigCAF7(801)][var_core_value_sigCAF7(483)]
      }]));
    },
    var_core_value_sig65CB = () => {
      const var_core_value_sigED1C = ox541ecd;
      var_core_value_sigCB46 && (var_core_value_sigCDF2(Math.max(var_core_value_sig5C75 - 1, 0)), var_core_value_sigE8ED(var_core_value_sig5BB6[var_core_value_sigED1C(1573)]((var_core_value_sig2902, var_core_value_sig9989) => var_core_value_sig9989 !== var_core_value_sig5C75)));
    };
  return (0, i.jsxs)("div", {
    className: ox541ecd(1556),
    children: [(0, i[ox541ecd(1557)])(O, {
      children: [(0, i[ox541ecd(922)])(A, {
        label: var_core_value_sig0A96.t(ox541ecd(672)),
        options: var_core_value_sig6DD3[ox541ecd(1285)](var_core_value_sig726E => ({
          label: var_core_value_sig726E.name,
          value: String(var_core_value_sig726E.selector)
        })),
        value: var_core_value_sig0177,
        onChange: var_core_value_sig4289
      }), (0, i.jsxs)(t.Button, {
        "aria-label": var_core_value_sig0A96.t(ox541ecd(1173)),
        disabled: !var_core_value_sig0177,
        size: ox541ecd(1499),
        onClick: var_core_value_sigBA12,
        children: [(0, i[ox541ecd(922)])(n[ox541ecd(1181)], {}), var_core_value_sig0A96.t(ox541ecd(1173))]
      })]
    }), var_core_value_sigCB46 && (0, i[ox541ecd(1557)])(i[ox541ecd(1762)], {
      children: [(0, i.jsx)(D, {
        label: var_core_value_sig0A96.t(ox541ecd(871)),
        children: var_core_value_sig2CD3 => (0, i[ox541ecd(1557)])(ox541ecd(1998), {
          className: ox541ecd(1497),
          children: [(0, i[ox541ecd(922)])(ox541ecd(1998), {
            className: ox541ecd(1200),
            children: (0, i[ox541ecd(922)])(lt, {
              controlProps: var_core_value_sig2CD3,
              options: var_core_value_sig5BB6.map((var_core_value_sig698E, var_core_value_sig2809) => ({
                label: (var_core_value_sig698E == null ? undefined : var_core_value_sig698E.name) || var_core_value_sig0A96.t("chart-ui.common.trendline") + "\x20" + (var_core_value_sig2809 + 1),
                value: String(var_core_value_sig2809)
              })),
              value: String(var_core_value_sig5C75),
              onChange: var_core_value_sig2DAB => var_core_value_sigCDF2(Number(var_core_value_sig2DAB))
            })
          }), (0, i[ox541ecd(922)])(t[ox541ecd(1420)], {
            "aria-label": var_core_value_sig0A96.t(ox541ecd(1731)),
            className: "univer-shrink-0",
            size: ox541ecd(534),
            variant: ox541ecd(1245),
            onClick: var_core_value_sig65CB,
            children: (0, i.jsx)(n[ox541ecd(1494)], {
              "aria-hidden": ox541ecd(1582)
            })
          })]
        })
      }), (0, i[ox541ecd(922)])(j, {
        allowClear: true,
        commitMode: "change",
        label: var_core_value_sig0A96.t(ox541ecd(1844)),
        value: var_core_value_sigCB46[ox541ecd(1391)] ?? "",
        onChange: var_core_value_sig038E => var_core_value_sigC674({
          name: var_core_value_sig038E
        })
      }), (0, i[ox541ecd(922)])(A, {
        label: var_core_value_sig0A96.t("chart-ui.common.series"),
        options: var_core_value_sig6DD3.map(var_core_value_sigAA1E => ({
          label: var_core_value_sigAA1E[ox541ecd(1391)],
          value: String(var_core_value_sigAA1E[ox541ecd(1301)])
        })),
        value: _i(var_core_value_sigCB46.selector, var_core_value_sig6DD3),
        onChange: var_core_value_sigC9F5 => var_core_value_sigC674({
          selector: {
            index: Number(var_core_value_sigC9F5)
          }
        })
      }), (0, i[ox541ecd(922)])(A, {
        label: var_core_value_sig0A96.t("chart-ui.trendline.type"),
        options: hi.map(({
          icon: var_core_value_sig7EEA,
          labelKey: var_core_value_sig59CE,
          value: var_core_value_sig33C8
        }) => ({
          label: (0, i[ox541ecd(1557)])("div", {
            className: "univer-flex\x20univer-h-6\x20univer-items-center\x20univer-gap-1.5",
            children: [(0, i[ox541ecd(922)])(ox541ecd(1904), {
              className: ox541ecd(1800),
              children: var_core_value_sig7EEA
            }), (0, i[ox541ecd(922)])(ox541ecd(1904), {
              children: var_core_value_sig0A96.t(var_core_value_sig59CE)
            })]
          }),
          value: var_core_value_sig33C8
        })),
        value: var_core_value_sigCB46.type ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(483)],
        onChange: var_core_value_sig957F => var_core_value_sigC674({
          type: var_core_value_sig957F
        })
      }), (0, i.jsxs)(O, {
        children: [(0, i.jsx)(H, {
          inlineLabel: true,
          checked: var_core_value_sigCB46.showFormula ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1773)],
          label: var_core_value_sig0A96.t(ox541ecd(703)),
          onChange: var_core_value_sig803B => var_core_value_sigC674({
            showFormula: var_core_value_sig803B
          })
        }), (0, i.jsx)(H, {
          inlineLabel: true,
          checked: var_core_value_sigCB46[ox541ecd(1969)] ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1969)],
          label: var_core_value_sig0A96.t("chart-ui.trendline.showR2"),
          onChange: var_core_value_sig5830 => var_core_value_sigC674({
            showR2: var_core_value_sig5830
          })
        })]
      }), var_core_value_sigCB46[ox541ecd(483)] === e.ChartTrendlineType[ox541ecd(1137)] && (0, i[ox541ecd(922)])(A, {
        label: var_core_value_sig0A96.t(ox541ecd(495)),
        options: Tn(),
        value: String(var_core_value_sigCB46[ox541ecd(1312)] ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1312)]),
        onChange: var_core_value_sig4A7C => var_core_value_sigC674({
          order: Number(var_core_value_sig4A7C)
        })
      }), var_core_value_sigCB46[ox541ecd(483)] === e.ChartTrendlineType["movingAvg"] && (0, i.jsx)(k, {
        label: var_core_value_sig0A96.t(ox541ecd(1363)),
        min: 1,
        step: 1,
        value: var_core_value_sigCB46[ox541ecd(1155)] ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1155)],
        onChange: var_core_value_sigF975 => var_core_value_sigC674({
          period: var_core_value_sigF975 ?? var_core_value_sig3F28[ox541ecd(801)].period
        })
      }), (0, i[ox541ecd(1557)])(O, {
        children: [(0, i[ox541ecd(922)])(M, {
          emptyLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          label: var_core_value_sig0A96.t("chart-ui.common.lineColor"),
          pickerFallbackValue: var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1393)],
          resetLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          value: var_core_value_sigCB46[ox541ecd(1393)] ?? null,
          onChange: var_core_value_sigCDAF => var_core_value_sigC674({
            color: var_core_value_sigCDAF ?? var_core_value_sig3F28.defaultValues[ox541ecd(1393)]
          })
        }), (0, i[ox541ecd(922)])(A, {
          label: var_core_value_sig0A96.t(ox541ecd(693)),
          options: Ye(),
          value: String(var_core_value_sigCB46[ox541ecd(577)] ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(577)]),
          onChange: var_core_value_sigA298 => var_core_value_sigC674({
            opacity: Number(var_core_value_sigA298)
          })
        })]
      }), (0, i.jsxs)(O, {
        children: [(0, i[ox541ecd(922)])(A, {
          label: var_core_value_sig0A96.t("chart-ui.common.lineType"),
          options: _n[ox541ecd(1285)](({
            labelKey: var_core_value_sig0B40,
            value: var_core_value_sig330B
          }) => ({
            label: var_core_value_sig0A96.t(var_core_value_sig0B40),
            value: var_core_value_sig330B
          })),
          value: var_core_value_sigCB46[ox541ecd(704)] ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(704)],
          onChange: var_core_value_sig3625 => var_core_value_sigC674({
            dashType: var_core_value_sig3625
          })
        }), (0, i[ox541ecd(922)])(A, {
          label: var_core_value_sig0A96.t(ox541ecd(827)),
          options: K(var_core_value_sig0A96.t("chart-ui.common.default"), Xe(var_core_value_sig2729)),
          value: W(var_core_value_sigCB46[ox541ecd(989)]),
          onChange: var_core_value_sig5461
        })]
      }), var_core_value_sigCB46[ox541ecd(483)] !== e[ox541ecd(1143)][ox541ecd(1016)] && (0, i.jsxs)(i.Fragment, {
        children: [var_core_value_sigCB46.showFormula && (0, i[ox541ecd(922)])(M, {
          emptyLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          label: var_core_value_sig0A96.t(ox541ecd(730)),
          pickerFallbackValue: var_core_value_sig3F28[ox541ecd(801)].textColor,
          resetLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          value: var_core_value_sigCB46[ox541ecd(1806)] ?? null,
          onChange: var_core_value_sig0B4E => var_core_value_sigC674({
            formulaColor: var_core_value_sig0B4E ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1082)]
          })
        }), var_core_value_sigCB46[ox541ecd(1969)] && (0, i[ox541ecd(922)])(M, {
          emptyLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          label: var_core_value_sig0A96.t("chart-ui.trendline.r2Color"),
          pickerFallbackValue: var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1082)],
          resetLabel: var_core_value_sig0A96.t(ox541ecd(819)),
          value: var_core_value_sigCB46.r2Color ?? null,
          onChange: var_core_value_sig0E9F => var_core_value_sigC674({
            r2Color: var_core_value_sig0E9F ?? var_core_value_sig3F28[ox541ecd(801)][ox541ecd(1082)]
          })
        })]
      })]
    })]
  });
}
const yi = {
  gap: e.defaultChartConfig["funnel"].gap,
  useAbsoluteValue: false
};
function bi(var_core_value_sig8AF4) {
  let var_core_value_sig7C2D = (0, o[ox39fcae(858)])(a[ox39fcae(1419)]),
    [var_core_value_sig5F54] = N(ox39fcae(553), e[ox39fcae(653)][ox39fcae(1859)]),
    [var_core_value_sig668D, var_core_value_sig6883] = N(ox39fcae(1394)),
    var_core_value_sig2A05 = L(Ge);
  return var_core_value_sig5F54 === e.ChartTypeBits["Funnel"] ? (0, i.jsxs)("div", {
    className: ox39fcae(1556),
    children: [var_core_value_sig8AF4[ox39fcae(1500)] === ox39fcae(1953) ? (0, i.jsx)(A, {
      label: var_core_value_sig7C2D.t(ox39fcae(1777)),
      options: K(var_core_value_sig7C2D.t(ox39fcae(1990)), Xe(var_core_value_sig2A05)),
      value: W(var_core_value_sig668D == null ? undefined : var_core_value_sig668D[ox39fcae(1815)]),
      onChange: var_core_value_sigE5BA => var_core_value_sig6883({
        ...var_core_value_sig668D,
        gap: G(var_core_value_sigE5BA)
      })
    }) : (0, i.jsx)(k, {
      allowClear: true,
      allowEmpty: true,
      emptyLabel: var_core_value_sig7C2D.t(ox39fcae(1990)),
      label: var_core_value_sig7C2D.t(ox39fcae(1777)),
      min: 0,
      value: (var_core_value_sig668D == null ? undefined : var_core_value_sig668D[ox39fcae(1815)]) ?? null,
      onChange: var_core_value_sig4A83 => var_core_value_sig6883({
        ...var_core_value_sig668D,
        gap: var_core_value_sig4A83
      })
    }), (0, i[ox39fcae(922)])(H, {
      inlineLabel: true,
      checked: (var_core_value_sig668D == null ? undefined : var_core_value_sig668D.useAbsoluteValue) ?? var_core_value_sig8AF4[ox39fcae(801)][ox39fcae(1711)],
      label: var_core_value_sig7C2D.t(ox39fcae(571)),
      onChange: var_core_value_sig58AA => var_core_value_sig6883({
        ...var_core_value_sig668D,
        useAbsoluteValue: var_core_value_sig58AA
      })
    })]
  }) : null;
}
const xi = {
  labelPosition: e.SeriesLabelPosition["Inside"],
  labelVisible: false,
  textColor: e.defaultChartConfig["textStyle"].color
};
function Si(var_core_value_sig9CA8) {
  let var_core_value_sig3C9C = (0, o[ox403878(858)])(a.LocaleService),
    [var_core_value_sig7651] = N("chartType", e[ox403878(653)][ox403878(1859)]),
    [var_core_value_sig6E4E, var_core_value_sigC2E8] = N("heatmap"),
    var_core_value_sig3A04 = var_core_value_sig6E4E ?? {},
    var_core_value_sig935E = var_core_value_sig3A04[ox403878(1614)] ?? {},
    var_core_value_sigDC45 = z(var_core_value_sig935E, R);
  return var_core_value_sig7651 === e[ox403878(653)][ox403878(1654)] ? (0, i[ox403878(1557)])(ox403878(1998), {
    className: ox403878(1556),
    children: [(0, i[ox403878(1557)])(O, {
      children: [(0, i[ox403878(922)])(k, {
        label: var_core_value_sig3C9C.t(ox403878(652)),
        value: var_core_value_sig3A04[ox403878(1337)] ?? null,
        onChange: var_core_value_sig84C4 => var_core_value_sigC2E8({
          ...var_core_value_sig3A04,
          min: var_core_value_sig84C4
        })
      }), (0, i[ox403878(922)])(k, {
        label: var_core_value_sig3C9C.t("chart-ui.common.maximum"),
        value: var_core_value_sig3A04.max ?? null,
        onChange: var_core_value_sigB6F7 => var_core_value_sigC2E8({
          ...var_core_value_sig3A04,
          max: var_core_value_sigB6F7
        })
      })]
    }), (0, i.jsx)(j, {
      allowClear: true,
      commitMode: "change",
      label: var_core_value_sig3C9C.t(ox403878(1199)),
      value: var_core_value_sig3A04.unit ?? "",
      onChange: var_core_value_sigB495 => var_core_value_sigC2E8({
        ...var_core_value_sig3A04,
        unit: var_core_value_sigB495
      })
    }), (0, i[ox403878(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sig935E[ox403878(1755)] ?? var_core_value_sig9CA8[ox403878(801)][ox403878(979)],
      label: var_core_value_sig3C9C.t(ox403878(1410)),
      onChange: var_core_value_sig70D0 => var_core_value_sigC2E8({
        ...var_core_value_sig3A04,
        label: {
          ...var_core_value_sig935E,
          visible: var_core_value_sig70D0
        }
      })
    }), var_core_value_sig935E.visible && (0, i.jsxs)(i[ox403878(1762)], {
      children: [(0, i[ox403878(922)])(A, {
        label: var_core_value_sig3C9C.t("chart-ui.common.labelPosition"),
        options: [{
          value: e.SeriesLabelPosition[ox403878(1934)],
          label: var_core_value_sig3C9C.t(ox403878(2031))
        }, {
          value: e[ox403878(1727)][ox403878(1210)],
          label: var_core_value_sig3C9C.t(ox403878(1935))
        }, {
          value: e[ox403878(1727)].Bottom,
          label: var_core_value_sig3C9C.t("chart-ui.common.position.bottom")
        }],
        value: var_core_value_sig935E.position ?? var_core_value_sig9CA8[ox403878(801)][ox403878(1336)],
        onChange: var_core_value_sig2A8A => var_core_value_sigC2E8({
          ...var_core_value_sig3A04,
          label: {
            ...var_core_value_sig935E,
            position: var_core_value_sig2A8A
          }
        })
      }), (0, i[ox403878(922)])(V, {
        colorPickerFallbackValue: var_core_value_sig9CA8.defaultValues[ox403878(1082)],
        label: var_core_value_sig3C9C.t(ox403878(852)),
        value: var_core_value_sigDC45,
        onChange: var_core_value_sig3782 => var_core_value_sigC2E8({
          ...var_core_value_sig3A04,
          label: {
            ...var_core_value_sig935E,
            ...B(var_core_value_sig3782)
          }
        })
      })]
    })]
  }) : null;
}
function Ci(var_core_value_sig7C31) {
  return (0, i[ox1fc1ed(1557)])(ox1fc1ed(1904), {
    className: ox1fc1ed(629),
    children: [(0, i.jsx)(ox1fc1ed(1904), {
      className: ox1fc1ed(1248),
      children: var_core_value_sig7C31[ox1fc1ed(1492)]
    }), var_core_value_sig7C31[ox1fc1ed(1360)] !== undefined && var_core_value_sig7C31.endSlot !== null && (0, i[ox1fc1ed(922)])(ox1fc1ed(1904), {
      className: ox1fc1ed(1087),
      children: var_core_value_sig7C31[ox1fc1ed(1360)]
    })]
  });
}
const wi = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"], e.LabelContentType["Percentage"]],
  Ti = "normal";
function Ei(var_core_value_sig8B54) {
  switch (var_core_value_sig8B54) {
    case e[ox4278b1(1948)][ox4278b1(886)]:
      return {
        type: var_core_value_sig8B54,
        count: e[ox4278b1(1505)]
      };
    case e[ox4278b1(1948)][ox4278b1(624)]:
      return {
        type: var_core_value_sig8B54,
        lessThan: e[ox4278b1(1341)]
      };
    case e[ox4278b1(1948)].Percentage:
      return {
        type: var_core_value_sig8B54,
        lessThan: e[ox4278b1(2010)]
      };
    case e.PieSecondarySplitType[ox4278b1(731)]:
      return {
        type: var_core_value_sig8B54,
        pointIndexes: []
      };
    default:
      return {
        type: e.PieSecondarySplitType["Auto"]
      };
  }
}
const Di = {
  borderColor: e.defaultChartConfig["pie"].borderColor,
  doughnutHole: e.defaultChartConfig["pie"].doughnutHole,
  hasPaddingAngle: e.defaultChartConfig["pie"].hasPaddingAngle,
  isHalfPie: false,
  labelContentType: e.defaultChartConfig["pie"].labelContentType,
  labelPosition: e.PieLabelPosition["Outside"],
  labelVisible: true,
  pieHole: 0,
  rosePie: false,
  showLabelLine: e.defaultChartConfig["pie"].showLabelLine,
  textColor: e.defaultChartConfig["textStyle"].color,
  valueScale: e.defaultChartConfig["pie"].valueScale
};
function Oi(var_core_value_sigC19B) {
  var var_core_value_sigFB87;
  let var_core_value_sigA318 = (0, o[ox316303(858)])(a[ox316303(1419)]),
    [var_core_value_sig51A4, var_core_value_sig2966] = N(ox316303(553), e[ox316303(653)][ox316303(1859)]),
    [var_core_value_sigF4C4, var_core_value_sig5617] = N("pie"),
    var_core_value_sig450E = var_core_value_sigF4C4 ?? {},
    var_core_value_sig92A31 = var_core_value_sig450E[ox316303(2021)],
    var_core_value_sig61E5 = var_core_value_sig92A31 == null || (var_core_value_sigFB87 = var_core_value_sig92A31[ox316303(1437)]) == null ? undefined : var_core_value_sigFB87.type,
    var_core_value_sig9E17 = (var_core_value_sig92A31 == null ? undefined : var_core_value_sig92A31[ox316303(525)]) === true && (var_core_value_sig61E5 === e[ox316303(503)][ox316303(600)] || var_core_value_sig61E5 === e[ox316303(503)][ox316303(1046)]),
    var_core_value_sigB97D = var_core_value_sig9E17 ? var_core_value_sig61E5 : Ti,
    var_core_value_sigFE1E = (var_core_value_sig92A31 == null ? undefined : var_core_value_sig92A31[ox316303(1437)]) ?? {
      type: e[ox316303(503)][ox316303(600)]
    },
    var_core_value_sig5F541 = var_core_value_sigFE1E.split,
    var_core_value_sig84B9 = (var_core_value_sig5F541 == null ? undefined : var_core_value_sig5F541[ox316303(483)]) ?? e[ox316303(1948)][ox316303(733)],
    var_core_value_sig09DF = var_core_value_sigFE1E[ox316303(1487)] ?? {},
    var_core_value_sig3A25 = var_core_value_sig450E[ox316303(1614)] ?? {},
    var_core_value_sig5B2B = var_core_value_sig3A25[ox316303(1755)] ?? var_core_value_sigC19B.defaultValues[ox316303(979)],
    var_core_value_sigE5FE = z(var_core_value_sig3A25, R),
    var_core_value_sig78A5 = var_core_value_sig450E[ox316303(690)] ?? (var_core_value_sig51A4 === e.ChartTypeBits[ox316303(585)] ? var_core_value_sigC19B.defaultValues[ox316303(690)] : var_core_value_sigC19B[ox316303(801)][ox316303(1490)]),
    var_core_value_sig9A4C = wi[ox316303(1573)](var_core_value_sigD22E => e[ox316303(1226)][ox316303(863)](var_core_value_sig3A25[ox316303(1108)] ?? var_core_value_sigC19B[ox316303(801)][ox316303(1655)], var_core_value_sigD22E))[ox316303(1285)](String),
    var_core_value_sigC723 = var_core_value_sigC19B.NumberFormatField ?? At,
    var_core_value_sig1E32 = null;
  if ((var_core_value_sig5F541 == null ? undefined : var_core_value_sig5F541[ox316303(483)]) === e[ox316303(1948)][ox316303(731)]) {
    var var_core_value_sig22AF;
    var_core_value_sig1E32 = (0, i.jsx)(j, {
      commitMode: "change",
      disabled: true,
      label: var_core_value_sigA318.t(ox316303(1496)),
      value: var_core_value_sigA318.t("chart-ui.pie.customSelectedCountValue")[ox316303(1530)](ox316303(2017), String(((var_core_value_sig22AF = var_core_value_sig5F541[ox316303(549)]) == null ? undefined : var_core_value_sig22AF[ox316303(1579)]) ?? 0)),
      onChange: () => undefined
    });
  } else var_core_value_sig84B9 === e[ox316303(1948)][ox316303(886)] ? var_core_value_sig1E32 = (0, i.jsx)(k, {
    label: var_core_value_sigA318.t(ox316303(1409)),
    min: e[ox316303(1639)],
    precision: 0,
    value: (var_core_value_sig5F541 == null ? undefined : var_core_value_sig5F541[ox316303(483)]) === e[ox316303(1948)][ox316303(886)] ? var_core_value_sig5F541[ox316303(1602)] ?? e[ox316303(1505)] : e[ox316303(1505)],
    onChange: var_core_value_sig3455 => var_core_value_sig5617({
      ...var_core_value_sig450E,
      composite: {
        ...var_core_value_sig92A31,
        secondaryPlot: {
          ...var_core_value_sigFE1E,
          split: {
            type: e[ox316303(1948)][ox316303(886)],
            count: var_core_value_sig3455 ?? e[ox316303(1505)]
          }
        }
      }
    })
  }) : var_core_value_sig84B9 === e[ox316303(1948)][ox316303(624)] ? var_core_value_sig1E32 = (0, i.jsx)(k, {
    label: var_core_value_sigA318.t(ox316303(909)),
    value: (var_core_value_sig5F541 == null ? undefined : var_core_value_sig5F541.type) === e.PieSecondarySplitType[ox316303(624)] ? var_core_value_sig5F541[ox316303(2019)] ?? e[ox316303(1341)] : e.PIE_VALUE_SPLIT_LESS_THAN_DEFAULT,
    onChange: var_core_value_sig5CEF => var_core_value_sig5617({
      ...var_core_value_sig450E,
      composite: {
        ...var_core_value_sig92A31,
        secondaryPlot: {
          ...var_core_value_sigFE1E,
          split: {
            type: e[ox316303(1948)][ox316303(624)],
            lessThan: var_core_value_sig5CEF ?? e[ox316303(1341)]
          }
        }
      }
    })
  }) : var_core_value_sig84B9 === e[ox316303(1948)][ox316303(754)] && (var_core_value_sig1E32 = (0, i[ox316303(922)])(k, {
    label: var_core_value_sigA318.t("chart-ui.pie.percentageLessThan"),
    min: 0,
    value: (var_core_value_sig5F541 == null ? undefined : var_core_value_sig5F541[ox316303(483)]) === e[ox316303(1948)][ox316303(754)] ? var_core_value_sig5F541[ox316303(2019)] ?? e[ox316303(2010)] : e[ox316303(2010)],
    onChange: var_core_value_sig43D5 => var_core_value_sig5617({
      ...var_core_value_sig450E,
      composite: {
        ...var_core_value_sig92A31,
        secondaryPlot: {
          ...var_core_value_sigFE1E,
          split: {
            type: e[ox316303(1948)][ox316303(754)],
            lessThan: var_core_value_sig43D5 ?? e[ox316303(2010)]
          }
        }
      }
    })
  }));
  return e[ox316303(1226)].baseOn(var_core_value_sig51A4, e[ox316303(653)][ox316303(600)]) ? (0, i[ox316303(1557)])(ox316303(1998), {
    className: ox316303(1556),
    children: [(0, i[ox316303(922)])(I, {
      label: var_core_value_sigA318.t("chart-ui.common.layout"),
      children: (0, i[ox316303(1557)])(ox316303(1998), {
        className: ox316303(1556),
        children: [(0, i[ox316303(1557)])(O, {
          children: [(0, i[ox316303(922)])(A, {
            label: var_core_value_sigA318.t("chart-ui.pie.mode"),
            options: [{
              value: Ti,
              label: var_core_value_sigA318.t(ox316303(1816))
            }, {
              value: e[ox316303(503)].Pie,
              label: var_core_value_sigA318.t(ox316303(1439))
            }, {
              value: e[ox316303(503)][ox316303(1046)],
              label: var_core_value_sigA318.t(ox316303(1842))
            }],
            value: var_core_value_sigB97D,
            onChange: var_core_value_sig1395 => {
              const var_core_value_sig9FA0 = ox316303;
              if (var_core_value_sig1395 === Ti) {
                var_core_value_sig92A31 && var_core_value_sig5617({
                  ...var_core_value_sig450E,
                  composite: {
                    ...var_core_value_sig92A31,
                    enabled: false
                  }
                });
                return;
              }
              var_core_value_sig51A4 !== e[var_core_value_sig9FA0(653)][var_core_value_sig9FA0(600)] && var_core_value_sig2966(e[var_core_value_sig9FA0(653)][var_core_value_sig9FA0(600)]), var_core_value_sig5617({
                ...var_core_value_sig450E,
                composite: {
                  ...var_core_value_sig92A31,
                  enabled: true,
                  secondaryPlot: {
                    ...var_core_value_sigFE1E,
                    type: var_core_value_sig1395
                  }
                }
              });
            }
          }), var_core_value_sig9E17 && (0, i[ox316303(922)])(A, {
            label: var_core_value_sigA318.t(ox316303(1223)),
            options: [{
              value: e[ox316303(1948)][ox316303(733)],
              label: var_core_value_sigA318.t(ox316303(1829))
            }, {
              value: e.PieSecondarySplitType["Position"],
              label: var_core_value_sigA318.t(ox316303(1415))
            }, {
              value: e[ox316303(1948)][ox316303(624)],
              label: var_core_value_sigA318.t(ox316303(545))
            }, {
              value: e.PieSecondarySplitType[ox316303(754)],
              label: var_core_value_sigA318.t(ox316303(726))
            }, ...(var_core_value_sig84B9 === e[ox316303(1948)][ox316303(731)] ? [{
              value: e[ox316303(1948)].Custom,
              label: var_core_value_sigA318.t(ox316303(1534))
            }] : [])],
            value: var_core_value_sig84B9,
            onChange: var_core_value_sig055E => var_core_value_sig5617({
              ...var_core_value_sig450E,
              composite: {
                ...var_core_value_sig92A31,
                secondaryPlot: {
                  ...var_core_value_sigFE1E,
                  split: Ei(var_core_value_sig055E)
                }
              }
            })
          })]
        }), var_core_value_sig9E17 && (0, i[ox316303(1557)])(i[ox316303(1762)], {
          children: [var_core_value_sig1E32, (0, i.jsxs)(O, {
            children: [(0, i[ox316303(922)])(k, {
              label: var_core_value_sigA318.t(ox316303(1784)),
              min: e.PIE_SECONDARY_SIZE_MIN,
              max: e.PIE_SECONDARY_SIZE_MAX,
              value: var_core_value_sigFE1E[ox316303(850)] ?? e.PIE_SECONDARY_SIZE_DEFAULT,
              onChange: var_core_value_sig7C77 => var_core_value_sig5617({
                ...var_core_value_sig450E,
                composite: {
                  ...var_core_value_sig92A31,
                  secondaryPlot: {
                    ...var_core_value_sigFE1E,
                    size: var_core_value_sig7C77 ?? e[ox316303(985)]
                  }
                }
              })
            }), (0, i[ox316303(922)])(k, {
              allowClear: true,
              allowEmpty: true,
              emptyLabel: var_core_value_sigA318.t(ox316303(1990)),
              label: var_core_value_sigA318.t("chart-ui.pie.gapWidth"),
              min: e[ox316303(1168)],
              max: e[ox316303(1730)],
              value: var_core_value_sigFE1E.gapWidth ?? null,
              onChange: var_core_value_sig9578 => var_core_value_sig5617({
                ...var_core_value_sig450E,
                composite: {
                  ...var_core_value_sig92A31,
                  secondaryPlot: {
                    ...var_core_value_sigFE1E,
                    gapWidth: var_core_value_sig9578
                  }
                }
              })
            })]
          })]
        })]
      })
    }), var_core_value_sig9E17 && (0, i.jsx)(I, {
      label: (0, i[ox316303(922)])(Ci, {
        endSlot: (0, i[ox316303(922)])(t[ox316303(1138)], {
          checked: var_core_value_sig09DF[ox316303(1755)] ?? e.PIE_CONNECTOR_VISIBLE_DEFAULT,
          contentClassName: ox316303(911),
          onChange: var_core_value_sigA2D31 => var_core_value_sig5617({
            ...var_core_value_sig450E,
            composite: {
              ...var_core_value_sig92A31,
              secondaryPlot: {
                ...var_core_value_sigFE1E,
                connector: {
                  ...var_core_value_sig09DF,
                  visible: !!var_core_value_sigA2D31
                }
              }
            }
          }),
          children: var_core_value_sigA318.t("chart-ui.pie.connector")
        }),
        children: var_core_value_sigA318.t("chart-ui.pie.connector")
      }),
      children: (0, i[ox316303(922)])(ox316303(1998), {
        className: ox316303(1556),
        children: (var_core_value_sig09DF[ox316303(1755)] ?? e.PIE_CONNECTOR_VISIBLE_DEFAULT) && (0, i.jsxs)(i[ox316303(1762)], {
          children: [(0, i.jsxs)(O, {
            children: [(0, i[ox316303(922)])(M, {
              emptyLabel: var_core_value_sigA318.t(ox316303(819)),
              label: var_core_value_sigA318.t(ox316303(1895)),
              pickerFallbackValue: e[ox316303(1852)],
              resetLabel: var_core_value_sigA318.t(ox316303(819)),
              value: var_core_value_sig09DF[ox316303(1393)] ?? null,
              onChange: var_core_value_sigC218 => var_core_value_sig5617({
                ...var_core_value_sig450E,
                composite: {
                  ...var_core_value_sig92A31,
                  secondaryPlot: {
                    ...var_core_value_sigFE1E,
                    connector: {
                      ...var_core_value_sig09DF,
                      color: var_core_value_sigC218
                    }
                  }
                }
              })
            }), (0, i[ox316303(922)])(k, {
              allowClear: true,
              allowEmpty: true,
              emptyLabel: var_core_value_sigA318.t("chart-ui.common.default"),
              label: var_core_value_sigA318.t("chart-ui.pie.connectorWidth"),
              min: 0,
              value: var_core_value_sig09DF[ox316303(989)] ?? null,
              onChange: var_core_value_sigADEC => var_core_value_sig5617({
                ...var_core_value_sig450E,
                composite: {
                  ...var_core_value_sig92A31,
                  secondaryPlot: {
                    ...var_core_value_sigFE1E,
                    connector: {
                      ...var_core_value_sig09DF,
                      width: var_core_value_sigADEC
                    }
                  }
                }
              })
            })]
          }), (0, i[ox316303(922)])(A, {
            label: var_core_value_sigA318.t(ox316303(1616)),
            options: _n[ox316303(1285)](({
              labelKey: var_core_value_sig3D8E,
              value: var_core_value_sig37E5
            }) => ({
              label: var_core_value_sigA318.t(var_core_value_sig3D8E),
              value: var_core_value_sig37E5
            })),
            value: var_core_value_sig09DF[ox316303(704)] ?? e[ox316303(696)],
            onChange: var_core_value_sigF079 => var_core_value_sig5617({
              ...var_core_value_sig450E,
              composite: {
                ...var_core_value_sig92A31,
                secondaryPlot: {
                  ...var_core_value_sigFE1E,
                  connector: {
                    ...var_core_value_sig09DF,
                    dashType: var_core_value_sigF079
                  }
                }
              }
            })
          })]
        })
      })
    }), (0, i[ox316303(922)])(I, {
      label: var_core_value_sigA318.t(ox316303(1636)),
      children: (0, i[ox316303(1557)])(ox316303(1998), {
        className: ox316303(1556),
        children: [(0, i[ox316303(1557)])(O, {
          children: [!var_core_value_sig9E17 && (0, i[ox316303(922)])(A, {
            label: var_core_value_sigA318.t(ox316303(1723)),
            options: Ye([...Cn]),
            value: String(var_core_value_sig78A5),
            onChange: var_core_value_sigFCA0 => {
              let var_core_value_sigC84D = Number(var_core_value_sigFCA0);
              var_core_value_sig5617({
                ...var_core_value_sig450E,
                doughnutHole: var_core_value_sigC84D
              });
            }
          }), (0, i.jsx)(M, {
            emptyLabel: var_core_value_sigA318.t(ox316303(819)),
            label: var_core_value_sigA318.t(ox316303(1196)),
            pickerFallbackValue: var_core_value_sigC19B[ox316303(801)][ox316303(1881)],
            resetLabel: var_core_value_sigA318.t(ox316303(819)),
            value: var_core_value_sig450E[ox316303(1881)] ?? null,
            onChange: var_core_value_sigF2BC => var_core_value_sig5617({
              ...var_core_value_sig450E,
              borderColor: var_core_value_sigF2BC
            })
          })]
        }), !var_core_value_sig9E17 && (0, i[ox316303(1557)])(O, {
          children: [(0, i[ox316303(922)])(k, {
            label: var_core_value_sigA318.t(ox316303(1524)),
            max: 360,
            min: 0,
            precision: 0,
            value: var_core_value_sig450E.startAngle ?? 0,
            onChange: var_core_value_sigD37B => var_core_value_sig5617({
              ...var_core_value_sig450E,
              startAngle: var_core_value_sigD37B ?? 0
            })
          }), (0, i[ox316303(922)])(k, {
            label: var_core_value_sigA318.t("chart-ui.pie.explosion"),
            max: 100,
            min: 0,
            value: (var_core_value_sig450E[ox316303(884)] ?? 0) * 100,
            onChange: var_core_value_sigFA28 => var_core_value_sig5617({
              ...var_core_value_sig450E,
              explosion: (var_core_value_sigFA28 ?? 0) / 100
            })
          })]
        }), var_core_value_sig9E17 && (0, i[ox316303(922)])(O, {
          children: (0, i.jsx)(H, {
            inlineLabel: true,
            checked: var_core_value_sig450E[ox316303(711)] ?? var_core_value_sigC19B[ox316303(801)][ox316303(711)],
            label: var_core_value_sigA318.t(ox316303(878)),
            onChange: var_core_value_sig93BE => var_core_value_sig5617({
              ...var_core_value_sig450E,
              hasPaddingAngle: var_core_value_sig93BE
            })
          })
        }), !var_core_value_sig9E17 && (0, i.jsxs)(O, {
          children: [(0, i.jsx)(H, {
            inlineLabel: true,
            checked: var_core_value_sig450E[ox316303(711)] ?? var_core_value_sigC19B[ox316303(801)][ox316303(711)],
            label: var_core_value_sigA318.t(ox316303(878)),
            onChange: var_core_value_sigABEC => var_core_value_sig5617({
              ...var_core_value_sig450E,
              hasPaddingAngle: var_core_value_sigABEC
            })
          }), (0, i[ox316303(922)])(H, {
            inlineLabel: true,
            checked: var_core_value_sig450E[ox316303(1374)] ?? var_core_value_sigC19B.defaultValues[ox316303(1374)],
            label: var_core_value_sigA318.t(ox316303(1043)),
            onChange: var_core_value_sig2712 => var_core_value_sig5617({
              ...var_core_value_sig450E,
              isHalfPie: var_core_value_sig2712
            })
          })]
        }), !var_core_value_sig9E17 && (0, i[ox316303(922)])(H, {
          inlineLabel: true,
          checked: var_core_value_sig450E[ox316303(486)] ?? var_core_value_sigC19B[ox316303(801)][ox316303(486)],
          label: var_core_value_sigA318.t(ox316303(1277)),
          onChange: var_core_value_sig0B9E => var_core_value_sig5617({
            ...var_core_value_sig450E,
            rosePie: var_core_value_sig0B9E
          })
        })]
      })
    }), (0, i.jsx)(I, {
      label: (0, i[ox316303(922)])(Ci, {
        endSlot: (0, i[ox316303(922)])(t[ox316303(1138)], {
          checked: var_core_value_sig5B2B,
          contentClassName: ox316303(911),
          onChange: var_core_value_sigC545 => var_core_value_sig5617({
            ...var_core_value_sig450E,
            label: {
              ...var_core_value_sig3A25,
              visible: !!var_core_value_sigC545
            }
          }),
          children: var_core_value_sigA318.t(ox316303(1719))
        }),
        children: var_core_value_sigA318.t(ox316303(1719))
      }),
      children: (0, i[ox316303(922)])("div", {
        className: ox316303(1556),
        children: var_core_value_sig5B2B && (0, i[ox316303(1557)])(i[ox316303(1762)], {
          children: [!var_core_value_sig9E17 && (0, i[ox316303(922)])(H, {
            inlineLabel: true,
            checked: var_core_value_sig450E[ox316303(1322)] ?? var_core_value_sigC19B[ox316303(801)].showLabelLine,
            label: var_core_value_sigA318.t("chart-ui.pie.labelLine"),
            onChange: var_core_value_sig12A7 => var_core_value_sig5617({
              ...var_core_value_sig450E,
              showLabelLine: var_core_value_sig12A7
            })
          }), (0, i[ox316303(922)])(O, {
            children: (0, i[ox316303(922)])(cr, {
              label: var_core_value_sigA318.t(ox316303(1466)),
              options: [{
                value: String(e.LabelContentType[ox316303(602)]),
                label: var_core_value_sigA318.t("chart-ui.common.category")
              }, {
                value: String(e[ox316303(1567)].Value),
                label: var_core_value_sigA318.t(ox316303(545))
              }, {
                value: String(e[ox316303(1567)][ox316303(754)]),
                label: var_core_value_sigA318.t(ox316303(726))
              }],
              value: var_core_value_sig9A4C,
              onChange: var_core_value_sig6F4E => {
                const var_core_value_sigA021 = ox316303;
                if (var_core_value_sig6F4E[var_core_value_sigA021(1579)] === 0) return;
                let var_core_value_sig49D9 = wi.filter(var_core_value_sig877E => var_core_value_sig6F4E.includes(String(var_core_value_sig877E))).reduce((var_core_value_sig20C8, var_core_value_sigE9A7) => var_core_value_sig20C8 | var_core_value_sigE9A7, e[var_core_value_sigA021(1567)][var_core_value_sigA021(1549)]);
                var_core_value_sig5617({
                  ...var_core_value_sig450E,
                  label: {
                    ...var_core_value_sig3A25,
                    contentType: var_core_value_sig49D9
                  }
                });
              }
            })
          }), (0, i.jsxs)(O, {
            children: [!var_core_value_sig9E17 && (0, i[ox316303(1557)])(i.Fragment, {
              children: [(0, i.jsx)(A, {
                label: var_core_value_sigA318.t(ox316303(1668)),
                options: [{
                  value: e[ox316303(1287)][ox316303(1934)],
                  label: var_core_value_sigA318.t(ox316303(2031))
                }, {
                  value: e.PieLabelPosition[ox316303(1150)],
                  label: var_core_value_sigA318.t(ox316303(1643))
                }],
                value: var_core_value_sig3A25[ox316303(1712)] ?? var_core_value_sigC19B[ox316303(801)][ox316303(1336)],
                onChange: var_core_value_sig320C => var_core_value_sig5617({
                  ...var_core_value_sig450E,
                  label: {
                    ...var_core_value_sig3A25,
                    position: var_core_value_sig320C
                  }
                })
              }), (0, i[ox316303(922)])(k, {
                label: var_core_value_sigA318.t(ox316303(626)),
                value: var_core_value_sig450E.valueScale ?? var_core_value_sigC19B[ox316303(801)][ox316303(552)],
                onChange: var_core_value_sigE7F0 => var_core_value_sig5617({
                  ...var_core_value_sig450E,
                  valueScale: var_core_value_sigE7F0
                })
              })]
            }), var_core_value_sig9E17 && (0, i[ox316303(922)])(k, {
              label: var_core_value_sigA318.t("chart-ui.pie.valueScale"),
              value: var_core_value_sig450E.valueScale ?? var_core_value_sigC19B[ox316303(801)].valueScale,
              onChange: var_core_value_sigE837 => var_core_value_sig5617({
                ...var_core_value_sig450E,
                valueScale: var_core_value_sigE837
              })
            })]
          }), (0, i[ox316303(922)])(var_core_value_sigC723, {
            label: var_core_value_sigA318.t("chart-ui.common.numberFormat"),
            value: var_core_value_sig3A25[ox316303(1875)],
            onChange: var_core_value_sig34F4 => var_core_value_sig5617({
              ...var_core_value_sig450E,
              label: {
                ...var_core_value_sig3A25,
                format: var_core_value_sig34F4
              }
            })
          }), (0, i.jsx)(V, {
            colorPickerFallbackValue: var_core_value_sigC19B.defaultValues[ox316303(1082)],
            label: var_core_value_sigA318.t("chart-ui.common.font"),
            value: var_core_value_sigE5FE,
            onChange: var_core_value_sigA45D => var_core_value_sig5617({
              ...var_core_value_sig450E,
              label: {
                ...var_core_value_sig3A25,
                ...B(var_core_value_sigA45D)
              }
            })
          })]
        })
      })
    })]
  }) : null;
}
const ki = {
  fill: false,
  shape: e.defaultChartConfig["radar"].shape
};
function Ai(var_core_value_sig0F31) {
  let var_core_value_sig8F25 = (0, o[ox3c8d04(858)])(a[ox3c8d04(1419)]),
    [var_core_value_sigCBED] = N("chartType", e.ChartTypeBits[ox3c8d04(1859)]),
    [var_core_value_sig6224, var_core_value_sigFC3E] = N(ox3c8d04(1317));
  return var_core_value_sigCBED === e[ox3c8d04(653)][ox3c8d04(479)] ? (0, i.jsxs)(ox3c8d04(1998), {
    className: ox3c8d04(1556),
    children: [(0, i.jsx)(A, {
      label: var_core_value_sig8F25.t("chart-ui.radar.shape"),
      options: [{
        value: e[ox3c8d04(1106)].Polygon,
        label: var_core_value_sig8F25.t(ox3c8d04(1999))
      }, {
        value: e[ox3c8d04(1106)][ox3c8d04(978)],
        label: var_core_value_sig8F25.t(ox3c8d04(946))
      }],
      value: (var_core_value_sig6224 == null ? undefined : var_core_value_sig6224[ox3c8d04(543)]) ?? var_core_value_sig0F31.defaultValues[ox3c8d04(543)],
      onChange: var_core_value_sig1BC7 => var_core_value_sigFC3E({
        ...var_core_value_sig6224,
        shape: var_core_value_sig1BC7
      })
    }), (0, i.jsx)(H, {
      inlineLabel: true,
      checked: (var_core_value_sig6224 == null ? undefined : var_core_value_sig6224[ox3c8d04(1644)]) ?? var_core_value_sig0F31.defaultValues[ox3c8d04(1644)],
      label: var_core_value_sig8F25.t("chart-ui.radar.fill"),
      onChange: var_core_value_sig4956 => var_core_value_sigFC3E({
        ...var_core_value_sig6224,
        fill: var_core_value_sig4956
      })
    })]
  }) : null;
}
const ji = {
  circularLabelRotation: e.defaultChartConfig["relation"].circular["rotateLabel"],
  emphasisEnabled: e.defaultChartConfig["relation"].emphasis,
  force: {
    gravity: e.defaultChartConfig["relation"].force["gravity"],
    repulsion: e.defaultChartConfig["relation"].force["repulsion"]
  },
  layout: e.RelationChartLayoutEnum["None"],
  nodeShape: e.defaultChartConfig["relation"].nodeShape,
  useValueAsSymbolSize: e.defaultChartConfig["relation"].useValueAsSymbolSize
};
function Mi(var_core_value_sig4D33) {
  let var_core_value_sig08BF = (0, o[ox5e6732(858)])(a[ox5e6732(1419)]),
    [var_core_value_sig1814] = N(ox5e6732(553), e[ox5e6732(653)][ox5e6732(1859)]),
    [var_core_value_sig2B5D, var_core_value_sig9B0B] = N(ox5e6732(1656)),
    var_core_value_sigF21D = (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D[ox5e6732(1019)]) ?? {};
  return var_core_value_sig1814 === e.ChartTypeBits[ox5e6732(1757)] ? (0, i[ox5e6732(1557)])(ox5e6732(1998), {
    className: ox5e6732(1556),
    children: [(0, i.jsx)(I, {
      label: var_core_value_sig08BF.t(ox5e6732(1059)),
      children: (0, i.jsxs)(ox5e6732(1998), {
        className: ox5e6732(1556),
        children: [(0, i[ox5e6732(922)])(A, {
          label: var_core_value_sig08BF.t(ox5e6732(1059)),
          options: [{
            value: e[ox5e6732(1347)][ox5e6732(1859)],
            label: var_core_value_sig08BF.t(ox5e6732(893))
          }, {
            value: e.RelationChartLayoutEnum["Circular"],
            label: var_core_value_sig08BF.t(ox5e6732(1770))
          }, {
            value: e.RelationChartLayoutEnum[ox5e6732(608)],
            label: var_core_value_sig08BF.t(ox5e6732(631))
          }],
          value: (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D[ox5e6732(664)]) ?? var_core_value_sig4D33.defaultValues[ox5e6732(664)],
          onChange: var_core_value_sigCC9E => var_core_value_sig9B0B({
            ...var_core_value_sig2B5D,
            layout: var_core_value_sigCC9E
          })
        }), (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D[ox5e6732(664)]) === e.RelationChartLayoutEnum["Circular"] && (0, i[ox5e6732(922)])(H, {
          inlineLabel: true,
          checked: var_core_value_sig2B5D[ox5e6732(1493)] ?? var_core_value_sig4D33[ox5e6732(801)][ox5e6732(1493)],
          label: var_core_value_sig08BF.t(ox5e6732(1167)),
          onChange: var_core_value_sig444C => var_core_value_sig9B0B({
            ...var_core_value_sig2B5D,
            circularLabelRotation: var_core_value_sig444C
          })
        }), (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D.layout) === e[ox5e6732(1347)][ox5e6732(608)] && (0, i[ox5e6732(1557)])(i[ox5e6732(1762)], {
          children: [(0, i[ox5e6732(1557)])(O, {
            children: [(0, i.jsx)(k, {
              label: var_core_value_sig08BF.t("chart-ui.relation.gravity"),
              value: var_core_value_sigF21D.gravity ?? var_core_value_sig4D33[ox5e6732(801)].force["gravity"],
              onChange: var_core_value_sigE42E => var_core_value_sig9B0B({
                ...var_core_value_sig2B5D,
                force: {
                  ...var_core_value_sigF21D,
                  gravity: var_core_value_sigE42E
                }
              })
            }), (0, i[ox5e6732(922)])(k, {
              label: var_core_value_sig08BF.t(ox5e6732(2024)),
              value: var_core_value_sigF21D[ox5e6732(1754)] ?? var_core_value_sig4D33.defaultValues[ox5e6732(1019)][ox5e6732(1754)],
              onChange: var_core_value_sigF039 => var_core_value_sig9B0B({
                ...var_core_value_sig2B5D,
                force: {
                  ...var_core_value_sigF21D,
                  repulsion: var_core_value_sigF039
                }
              })
            })]
          }), (0, i.jsx)(k, {
            label: var_core_value_sig08BF.t(ox5e6732(1529)),
            min: 0,
            step: 10,
            value: var_core_value_sigF21D[ox5e6732(1923)] ?? null,
            onChange: var_core_value_sigA321 => var_core_value_sig9B0B({
              ...var_core_value_sig2B5D,
              force: {
                ...var_core_value_sigF21D,
                edgeLength: var_core_value_sigA321
              }
            })
          })]
        })]
      })
    }), (0, i[ox5e6732(1557)])(I, {
      label: var_core_value_sig08BF.t("chart-ui.relation.nodes"),
      children: [(0, i[ox5e6732(922)])(O, {
        children: (0, i[ox5e6732(922)])(A, {
          label: var_core_value_sig08BF.t(ox5e6732(1647)),
          options: vn.map(({
            labelKey: var_core_value_sigBF4C,
            value: var_core_value_sig3457
          }) => ({
            label: var_core_value_sig08BF.t(var_core_value_sigBF4C),
            value: var_core_value_sig3457
          })),
          value: (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D[ox5e6732(737)]) ?? var_core_value_sig4D33.defaultValues[ox5e6732(737)],
          onChange: var_core_value_sig4A08 => var_core_value_sig9B0B({
            ...var_core_value_sig2B5D,
            nodeShape: var_core_value_sig4A08
          })
        })
      }), (0, i[ox5e6732(922)])(O, {
        children: (0, i[ox5e6732(922)])(H, {
          inlineLabel: true,
          checked: (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D[ox5e6732(1262)]) ?? var_core_value_sig4D33[ox5e6732(801)][ox5e6732(1262)],
          label: var_core_value_sig08BF.t(ox5e6732(828)),
          onChange: var_core_value_sig1BC4 => var_core_value_sig9B0B({
            ...var_core_value_sig2B5D,
            useValueAsSymbolSize: var_core_value_sig1BC4
          })
        })
      })]
    }), (0, i[ox5e6732(922)])(I, {
      label: var_core_value_sig08BF.t(ox5e6732(835)),
      children: (0, i[ox5e6732(922)])(H, {
        inlineLabel: true,
        checked: (var_core_value_sig2B5D == null ? undefined : var_core_value_sig2B5D.emphasisEnabled) ?? var_core_value_sig4D33[ox5e6732(801)][ox5e6732(957)],
        label: var_core_value_sig08BF.t("chart-ui.common.emphasis"),
        onChange: var_core_value_sig9EAB => var_core_value_sig9B0B({
          ...var_core_value_sig2B5D,
          emphasisEnabled: var_core_value_sig9EAB
        })
      })
    })]
  }) : null;
}
function Ni(var_core_value_sig9B55) {
  return var_core_value_sig9B55 && e[ox4283ee(1226)][ox4283ee(1429)](var_core_value_sig9B55, e.ChartTypeBits[ox4283ee(615)]) ? ox4283ee(1345) : var_core_value_sig9B55 && e[ox4283ee(1226)].baseOn(var_core_value_sig9B55, e[ox4283ee(653)][ox4283ee(861)]) ? ox4283ee(1346) : var_core_value_sig9B55 && e[ox4283ee(1226)].baseOn(var_core_value_sig9B55, e[ox4283ee(653)][ox4283ee(1478)]) ? ox4283ee(1136) : "category-series";
}
const Pi = {
  closeIndex: 4,
  highIndex: 2,
  lowIndex: 3,
  openIndex: 1
};
function Fi(var_core_value_sigB8F4) {
  let var_core_value_sig5E41 = var_core_value_sigB8F4[ox1fdd4c(1285)](var_core_value_sigA5C3 => Number(var_core_value_sigA5C3[ox1fdd4c(1324)]));
  return {
    openIndex: var_core_value_sig5E41[1] ?? Pi[ox1fdd4c(723)],
    highIndex: var_core_value_sig5E41[2] ?? Pi[ox1fdd4c(1779)],
    lowIndex: var_core_value_sig5E41[3] ?? Pi.lowIndex,
    closeIndex: var_core_value_sig5E41[4] ?? Pi.closeIndex
  };
}
function Ii(var_core_value_sig310E) {
  var var_core_value_sig2E97;
  let var_core_value_sig4B00 = typeof var_core_value_sig310E[ox2f2ea7(1653)][ox2f2ea7(1780)] == ox2f2ea7(1577) ? var_core_value_sig310E[ox2f2ea7(1653)][ox2f2ea7(1780)] : Number(((var_core_value_sig2E97 = var_core_value_sig310E[ox2f2ea7(1361)][0]) == null ? undefined : var_core_value_sig2E97[ox2f2ea7(1324)]) ?? 0),
    var_core_value_sig9896 = Fi(var_core_value_sig310E[ox2f2ea7(1361)]),
    var_core_value_sigA725 = var_core_value_sig310E[ox2f2ea7(1653)].candlestick,
    var_core_value_sig9FB3 = {
      openIndex: typeof (var_core_value_sigA725 == null ? undefined : var_core_value_sigA725.openIndex) == "number" ? var_core_value_sigA725[ox2f2ea7(723)] : var_core_value_sig9896[ox2f2ea7(723)],
      highIndex: typeof (var_core_value_sigA725 == null ? undefined : var_core_value_sigA725.highIndex) == ox2f2ea7(1577) ? var_core_value_sigA725[ox2f2ea7(1779)] : var_core_value_sig9896[ox2f2ea7(1779)],
      lowIndex: typeof (var_core_value_sigA725 == null ? undefined : var_core_value_sigA725.lowIndex) == "number" ? var_core_value_sigA725[ox2f2ea7(550)] : var_core_value_sig9896[ox2f2ea7(550)],
      closeIndex: typeof (var_core_value_sigA725 == null ? undefined : var_core_value_sigA725.closeIndex) == "number" ? var_core_value_sigA725.closeIndex : var_core_value_sig9896[ox2f2ea7(1236)]
    },
    var_core_value_sig0E44 = [{
      key: ox2f2ea7(1780),
      label: var_core_value_sig310E.labels[ox2f2ea7(1345)][ox2f2ea7(1853)],
      value: var_core_value_sig4B00
    }, {
      key: ox2f2ea7(723),
      label: var_core_value_sig310E[ox2f2ea7(1110)][ox2f2ea7(1345)][ox2f2ea7(601)],
      value: var_core_value_sig9FB3[ox2f2ea7(723)]
    }, {
      key: ox2f2ea7(1779),
      label: var_core_value_sig310E[ox2f2ea7(1110)][ox2f2ea7(1345)].high,
      value: var_core_value_sig9FB3.highIndex
    }, {
      key: ox2f2ea7(550),
      label: var_core_value_sig310E[ox2f2ea7(1110)][ox2f2ea7(1345)][ox2f2ea7(1093)],
      value: var_core_value_sig9FB3.lowIndex
    }, {
      key: ox2f2ea7(1236),
      label: var_core_value_sig310E[ox2f2ea7(1110)][ox2f2ea7(1345)][ox2f2ea7(621)],
      value: var_core_value_sig9FB3[ox2f2ea7(1236)]
    }];
  return (0, i.jsx)(ox2f2ea7(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: var_core_value_sig0E44[ox2f2ea7(1285)](var_core_value_sig3A1E => {
      const var_core_value_sigDC92 = ox2f2ea7;
      let var_core_value_sig3515 = new Set(var_core_value_sig0E44.filter(var_core_value_sigBECE => var_core_value_sigBECE[var_core_value_sigDC92(1198)] !== var_core_value_sig3A1E[var_core_value_sigDC92(1198)])[var_core_value_sigDC92(1285)](var_core_value_sig1B221 => var_core_value_sig1B221[var_core_value_sigDC92(1324)]));
      return (0, i[var_core_value_sigDC92(922)])(A, {
        label: var_core_value_sig3A1E[var_core_value_sigDC92(1614)],
        value: String(var_core_value_sig3A1E[var_core_value_sigDC92(1324)]),
        options: var_core_value_sig310E[var_core_value_sigDC92(1361)][var_core_value_sigDC92(1285)](var_core_value_sig7F72 => ({
          ...var_core_value_sig7F72,
          disabled: var_core_value_sig3515[var_core_value_sigDC92(863)](Number(var_core_value_sig7F72[var_core_value_sigDC92(1324)]))
        })),
        onChange: var_core_value_sig7B2A => {
          const var_core_value_sig06CD = var_core_value_sigDC92;
          let var_core_value_sigA5F1 = Number(var_core_value_sig7B2A);
          var_core_value_sig3A1E[var_core_value_sig06CD(1198)] === var_core_value_sig06CD(1780) ? var_core_value_sig310E[var_core_value_sig06CD(507)]({
            candlestick: var_core_value_sig9FB3,
            categoryIndex: var_core_value_sigA5F1
          }) : var_core_value_sig310E[var_core_value_sig06CD(507)]({
            candlestick: {
              ...var_core_value_sig9FB3,
              [var_core_value_sig3A1E[var_core_value_sig06CD(1198)]]: var_core_value_sigA5F1
            },
            categoryIndex: var_core_value_sig4B00
          });
        }
      }, var_core_value_sig3A1E[var_core_value_sigDC92(1198)]);
    })
  });
}
function Li(var_core_value_sig243C) {
  var var_core_value_sigB3A4, var_core_value_sigAF1B;
  let var_core_value_sig906D = ((var_core_value_sigB3A4 = var_core_value_sig243C[oxdd3838(1653)].seriesIndexes) == null ? undefined : var_core_value_sigB3A4[0]) ?? Number(((var_core_value_sigAF1B = var_core_value_sig243C[oxdd3838(1361)][0]) == null ? undefined : var_core_value_sigAF1B[oxdd3838(1324)]) ?? 0);
  return (0, i.jsx)(A, {
    label: var_core_value_sig243C[oxdd3838(1110)].histogramValue,
    value: String(var_core_value_sig906D),
    options: var_core_value_sig243C[oxdd3838(1361)],
    onChange: var_core_value_sigC2A0 => var_core_value_sig243C[oxdd3838(507)]({
      seriesIndexes: [Number(var_core_value_sigC2A0)]
    })
  });
}
function Ri(var_core_value_sig6AFB) {
  var var_core_value_sig2830;
  let var_core_value_sig9C3A = var_core_value_sig6AFB.fields[ox2b5816(1285)](var_core_value_sig7C65 => Number(var_core_value_sig7C65[ox2b5816(1324)])),
    var_core_value_sig0321 = ((var_core_value_sig2830 = var_core_value_sig6AFB[ox2b5816(1653)][ox2b5816(1238)]) == null ? undefined : var_core_value_sig2830[0]) ?? var_core_value_sig9C3A[var_core_value_sig9C3A[ox2b5816(1579)] - 1] ?? 0,
    var_core_value_sig51CF = var_core_value_sig6AFB[ox2b5816(1653)][ox2b5816(1333)] ?? var_core_value_sig9C3A[ox2b5816(1573)](var_core_value_sig7F05 => var_core_value_sig7F05 !== var_core_value_sig0321),
    var_core_value_sig3C61 = new Set(var_core_value_sig51CF),
    var_core_value_sigDC70 = var_core_value_sig6AFB[ox2b5816(1361)][ox2b5816(1573)](var_core_value_sig41F3 => {
      const var_core_value_sigF455 = ox2b5816;
      let var_core_value_sig6E78 = Number(var_core_value_sig41F3[var_core_value_sigF455(1324)]);
      return var_core_value_sig6E78 !== var_core_value_sig0321 && !var_core_value_sig3C61[var_core_value_sigF455(863)](var_core_value_sig6E78);
    }),
    var_core_value_sigD10E = var_core_value_sig6AFB.fields["filter"](var_core_value_sigB3EE => !var_core_value_sig3C61[ox2b5816(863)](Number(var_core_value_sigB3EE[ox2b5816(1324)]))),
    var_core_value_sigBB93 = var_core_value_sigC50A => var_core_value_sig6AFB[ox2b5816(507)]({
      hierarchyIndexes: var_core_value_sigC50A,
      seriesIndexes: [var_core_value_sig0321]
    });
  return (0, i.jsxs)(ox2b5816(1998), {
    className: ox2b5816(1556),
    children: [(0, i[ox2b5816(1557)])(ox2b5816(1998), {
      children: [(0, i.jsx)(ie, {
        title: var_core_value_sig6AFB.labels["treemapHierarchy"]
      }), (0, i.jsxs)(ox2b5816(1998), {
        className: ox2b5816(612),
        children: [var_core_value_sig51CF[ox2b5816(1285)]((var_core_value_sig11D0, var_core_value_sigB8ED) => {
          const var_core_value_sig8EAE = ox2b5816;
          let var_core_value_sig1CDD = var_core_value_sig6AFB[var_core_value_sig8EAE(1361)][var_core_value_sig8EAE(1507)](var_core_value_sig97A2 => Number(var_core_value_sig97A2[var_core_value_sig8EAE(1324)]) === var_core_value_sig11D0);
          return (0, i[var_core_value_sig8EAE(1557)])(var_core_value_sig8EAE(1998), {
            className: var_core_value_sig8EAE(1919),
            children: [(0, i[var_core_value_sig8EAE(922)])(var_core_value_sig8EAE(1998), {
              className: var_core_value_sig8EAE(1379),
              children: (var_core_value_sig1CDD == null ? undefined : var_core_value_sig1CDD[var_core_value_sig8EAE(1614)]) ?? String(var_core_value_sig11D0)
            }), (0, i.jsx)(t[var_core_value_sig8EAE(1420)], {
              "aria-label": var_core_value_sig6AFB[var_core_value_sig8EAE(1110)][var_core_value_sig8EAE(1479)],
              className: "!univer-size-6",
              disabled: var_core_value_sigB8ED === 0,
              size: "icon",
              variant: var_core_value_sig8EAE(1245),
              onClick: () => {
                let var_core_value_sig07E9 = [...var_core_value_sig51CF];
                [var_core_value_sig07E9[var_core_value_sigB8ED - 1], var_core_value_sig07E9[var_core_value_sigB8ED]] = [var_core_value_sig07E9[var_core_value_sigB8ED], var_core_value_sig07E9[var_core_value_sigB8ED - 1]], var_core_value_sigBB93(var_core_value_sig07E9);
              },
              children: (0, i[var_core_value_sig8EAE(922)])(n[var_core_value_sig8EAE(1146)], {
                "aria-hidden": true
              })
            }), (0, i.jsx)(t[var_core_value_sig8EAE(1420)], {
              "aria-label": var_core_value_sig6AFB[var_core_value_sig8EAE(1110)][var_core_value_sig8EAE(1479)],
              className: var_core_value_sig8EAE(1440),
              disabled: var_core_value_sigB8ED === var_core_value_sig51CF[var_core_value_sig8EAE(1579)] - 1,
              size: var_core_value_sig8EAE(534),
              variant: var_core_value_sig8EAE(1245),
              onClick: () => {
                let var_core_value_sig4F59 = [...var_core_value_sig51CF];
                [var_core_value_sig4F59[var_core_value_sigB8ED], var_core_value_sig4F59[var_core_value_sigB8ED + 1]] = [var_core_value_sig4F59[var_core_value_sigB8ED + 1], var_core_value_sig4F59[var_core_value_sigB8ED]], var_core_value_sigBB93(var_core_value_sig4F59);
              },
              children: (0, i[var_core_value_sig8EAE(922)])(n[var_core_value_sig8EAE(1403)], {
                "aria-hidden": true
              })
            }), (0, i[var_core_value_sig8EAE(922)])(t[var_core_value_sig8EAE(1420)], {
              "aria-label": var_core_value_sig6AFB[var_core_value_sig8EAE(1110)][var_core_value_sig8EAE(1479)],
              className: var_core_value_sig8EAE(1440),
              disabled: var_core_value_sig51CF[var_core_value_sig8EAE(1579)] <= 1,
              size: var_core_value_sig8EAE(534),
              variant: "text",
              onClick: () => var_core_value_sigBB93(var_core_value_sig51CF.filter((var_core_value_sig3D7D, var_core_value_sig27E5) => var_core_value_sig27E5 !== var_core_value_sigB8ED)),
              children: (0, i.jsx)(n[var_core_value_sig8EAE(1494)], {
                "aria-hidden": true
              })
            })]
          }, var_core_value_sig11D0);
        }), var_core_value_sigDC70[ox2b5816(1579)] > 0 && (0, i[ox2b5816(922)])(t[ox2b5816(1259)], {
          "aria-label": var_core_value_sig6AFB.labels[ox2b5816(1479)],
          className: ox2b5816(808),
          value: var_core_value_sig6AFB[ox2b5816(1110)].treemapHierarchy,
          options: var_core_value_sigDC70,
          onChange: var_core_value_sig0DB11 => var_core_value_sigBB93([...var_core_value_sig51CF, Number(var_core_value_sig0DB11)])
        })]
      })]
    }), (0, i[ox2b5816(922)])(A, {
      label: var_core_value_sig6AFB.labels[ox2b5816(1855)],
      value: String(var_core_value_sig0321),
      options: var_core_value_sigD10E,
      onChange: var_core_value_sig68A2 => var_core_value_sig6AFB[ox2b5816(507)]({
        hierarchyIndexes: var_core_value_sig51CF,
        seriesIndexes: [Number(var_core_value_sig68A2)]
      })
    })]
  });
}
function zi(var_core_value_sig4F88) {
  switch (Ni(var_core_value_sig4F88[ox2bdbcf(553)])) {
    case ox2bdbcf(1345):
      return (0, i[ox2bdbcf(922)])(Ii, {
        ...var_core_value_sig4F88
      });
    case ox2bdbcf(1346):
      return (0, i[ox2bdbcf(922)])(Li, {
        ...var_core_value_sig4F88
      });
    case ox2bdbcf(1136):
      return (0, i.jsx)(Ri, {
        ...var_core_value_sig4F88
      });
    default:
      return null;
  }
}
function Bi(var_core_value_sig486C) {
  let var_core_value_sig717C = Ft()[ox1b3a11(1066)](),
    var_core_value_sig23AE = (0, o[ox1b3a11(1451)])(var_core_value_sig717C.context$, var_core_value_sig717C[ox1b3a11(1887)]);
  return (0, r[ox1b3a11(1687)])(() => {
    const var_core_value_sigCC17 = ox1b3a11;
    let var_core_value_sig32AE = new Set([...(var_core_value_sig23AE[var_core_value_sigCC17(1090)] ?? []), ...(var_core_value_sig23AE[var_core_value_sigCC17(1514)] ?? [])]),
      var_core_value_sigC753 = new Set(var_core_value_sig23AE[var_core_value_sigCC17(1514)] ?? []);
    return {
      categoryFields: var_core_value_sig486C.filter(var_core_value_sigF564 => var_core_value_sig32AE[var_core_value_sigCC17(863)](Number(var_core_value_sigF564.value))),
      seriesFields: var_core_value_sig486C.filter(var_core_value_sig8CFA => var_core_value_sigC753[var_core_value_sigCC17(863)](Number(var_core_value_sig8CFA[var_core_value_sigCC17(1324)])))
    };
  }, [var_core_value_sig23AE[ox1b3a11(1090)], var_core_value_sig23AE.seriesResourceIndexes, var_core_value_sig486C]);
}
function Vi() {
  let var_core_value_sigCB54 = (0, o[ox2e5ca5(858)])(a[ox2e5ca5(1419)]),
    [var_core_value_sigC7E1] = N("chartType", e[ox2e5ca5(653)][ox2e5ca5(1859)]),
    [var_core_value_sig6575, var_core_value_sigE901] = (0, r[ox2e5ca5(1825)])(e[ox2e5ca5(1749)][ox2e5ca5(1768)]),
    [var_core_value_sigB7EC, var_core_value_sigB018] = N(ox2e5ca5(1345)),
    var_core_value_sigE7BE = var_core_value_sigB7EC ?? {},
    var_core_value_sigC88E = var_core_value_sigE7BE[var_core_value_sig6575] ?? {},
    var_core_value_sigC4A6 = var_core_value_sigFFD1 => var_core_value_sigB018({
      ...var_core_value_sigE7BE,
      [var_core_value_sig6575]: var_core_value_sigFFD1
    }),
    var_core_value_sig1FE3 = e[ox2e5ca5(1790)].candlestick[var_core_value_sig6575],
    var_core_value_sigF003 = {
      ...var_core_value_sig1FE3[ox2e5ca5(1464)],
      ...var_core_value_sigC88E.border
    },
    var_core_value_sigE146 = var_core_value_sig6575 !== e[ox2e5ca5(1749)][ox2e5ca5(1040)];
  return var_core_value_sigC7E1 === e[ox2e5ca5(653)].Candlestick ? (0, i.jsxs)(ox2e5ca5(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i[ox2e5ca5(1557)])(O, {
      children: [(0, i[ox2e5ca5(922)])(A, {
        label: var_core_value_sigCB54.t(ox2e5ca5(1759)),
        options: Object.values(e[ox2e5ca5(1749)])[ox2e5ca5(1285)](var_core_value_sig81AE => ({
          value: var_core_value_sig81AE,
          label: var_core_value_sigCB54.t(ox2e5ca5(1631) + var_core_value_sig81AE)
        })),
        value: var_core_value_sig6575,
        onChange: var_core_value_sigE901
      }), (0, i[ox2e5ca5(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        label: var_core_value_sigCB54.t(ox2e5ca5(1239)),
        min: 1,
        value: var_core_value_sigE7BE[ox2e5ca5(1265)] ?? null,
        onChange: var_core_value_sigF79F => var_core_value_sigB018({
          ...var_core_value_sigE7BE,
          candleWidth: var_core_value_sigF79F
        })
      })]
    }), var_core_value_sigE146 && (0, i[ox2e5ca5(1557)])("div", {
      className: ox2e5ca5(1556),
      children: [(0, i[ox2e5ca5(1557)])(O, {
        children: [(0, i[ox2e5ca5(922)])(M, {
          emptyLabel: var_core_value_sigCB54.t(ox2e5ca5(819)),
          label: var_core_value_sigCB54.t(ox2e5ca5(1398)),
          pickerFallbackValue: var_core_value_sig1FE3[ox2e5ca5(1393)],
          resetLabel: var_core_value_sigCB54.t(ox2e5ca5(819)),
          value: var_core_value_sigC88E.color ?? var_core_value_sig1FE3[ox2e5ca5(1393)],
          onChange: var_core_value_sig0E54 => var_core_value_sigC4A6({
            ...var_core_value_sigC88E,
            color: var_core_value_sig0E54
          })
        }), (0, i[ox2e5ca5(922)])(k, {
          label: var_core_value_sigCB54.t(ox2e5ca5(1207)),
          max: U[ox2e5ca5(628)],
          min: U[ox2e5ca5(1337)],
          step: U.step,
          value: var_core_value_sigC88E[ox2e5ca5(944)] ?? var_core_value_sig1FE3[ox2e5ca5(944)],
          onChange: var_core_value_sig3B17 => var_core_value_sigC4A6({
            ...var_core_value_sigC88E,
            fillOpacity: var_core_value_sig3B17
          })
        })]
      }), (0, i.jsx)(H, {
        inlineLabel: true,
        checked: var_core_value_sigC88E[ox2e5ca5(904)] ?? var_core_value_sig1FE3[ox2e5ca5(904)],
        label: var_core_value_sigCB54.t(ox2e5ca5(867)),
        onChange: var_core_value_sig6C4A => var_core_value_sigC4A6({
          ...var_core_value_sigC88E,
          hollow: var_core_value_sig6C4A
        })
      })]
    }), (0, i[ox2e5ca5(1557)])(ox2e5ca5(1998), {
      className: ox2e5ca5(1556),
      children: [(0, i[ox2e5ca5(1557)])(O, {
        children: [(0, i[ox2e5ca5(922)])(M, {
          emptyLabel: var_core_value_sigCB54.t("chart-ui.editor.defaultColor"),
          label: var_core_value_sigCB54.t(ox2e5ca5(971)),
          pickerFallbackValue: var_core_value_sig1FE3[ox2e5ca5(1464)][ox2e5ca5(1393)],
          resetLabel: var_core_value_sigCB54.t(ox2e5ca5(819)),
          value: var_core_value_sigF003.color,
          onChange: var_core_value_sig73D9 => var_core_value_sigC4A6({
            ...var_core_value_sigC88E,
            border: {
              ...var_core_value_sigC88E.border,
              color: var_core_value_sig73D9
            }
          })
        }), (0, i[ox2e5ca5(922)])(k, {
          label: var_core_value_sigCB54.t(ox2e5ca5(856)),
          min: 0,
          value: var_core_value_sigF003.width,
          onChange: var_core_value_sigEAF8 => var_core_value_sigC4A6({
            ...var_core_value_sigC88E,
            border: {
              ...var_core_value_sigC88E.border,
              width: var_core_value_sigEAF8
            }
          })
        })]
      }), (0, i[ox2e5ca5(922)])(k, {
        label: var_core_value_sigCB54.t(ox2e5ca5(555)),
        max: U[ox2e5ca5(628)],
        min: U.min,
        step: U[ox2e5ca5(1939)],
        value: var_core_value_sigF003[ox2e5ca5(577)],
        onChange: var_core_value_sig0455 => var_core_value_sigC4A6({
          ...var_core_value_sigC88E,
          border: {
            ...var_core_value_sigC88E.border,
            opacity: var_core_value_sig0455
          }
        })
      })]
    })]
  }) : null;
}
function Hi() {
  let var_core_value_sigF6D5 = (0, o[ox1f9aa6(858)])(a[ox1f9aa6(1419)]),
    [var_core_value_sig3B2F] = N(ox1f9aa6(553), e[ox1f9aa6(653)][ox1f9aa6(1859)]),
    [var_core_value_sigE558, var_core_value_sigA99D] = N(ox1f9aa6(1346)),
    var_core_value_sigB23E = var_core_value_sigE558 ?? {};
  return var_core_value_sig3B2F === e[ox1f9aa6(653)][ox1f9aa6(861)] ? (0, i[ox1f9aa6(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    label: var_core_value_sigF6D5.t(ox1f9aa6(521)),
    max: e[ox1f9aa6(1791)],
    min: 0,
    step: 0.05,
    value: var_core_value_sigB23E.binGap ?? e[ox1f9aa6(1790)][ox1f9aa6(1346)][ox1f9aa6(1502)],
    onChange: var_core_value_sig737C => var_core_value_sigA99D({
      ...var_core_value_sigB23E,
      binGap: var_core_value_sig737C
    })
  }) : null;
}
const Ui = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"]],
  Wi = {
    [e.TreemapParentLabelLayout["Banner"]]: "chart-ui.treemap.banner",
    [e.TreemapParentLabelLayout["Overlapping"]]: "chart-ui.treemap.overlapping",
    [e.TreemapParentLabelLayout["None"]]: "chart-ui.common.none"
  };
function Gi() {
  let var_core_value_sigDA56 = (0, o.useDependency)(a[ox5b9f1c(1419)]),
    [var_core_value_sig8D74] = N(ox5b9f1c(553), e[ox5b9f1c(653)][ox5b9f1c(1859)]),
    [var_core_value_sigC3E8, var_core_value_sig3FAF1] = N("treemap"),
    var_core_value_sigC00C = var_core_value_sigC3E8 ?? {},
    var_core_value_sig080D = {
      ...e[ox5b9f1c(1790)][ox5b9f1c(1136)].label,
      ...var_core_value_sigC00C.label
    },
    var_core_value_sigCDBC = z(var_core_value_sigC00C[ox5b9f1c(1614)], R),
    var_core_value_sig0F75 = Ui[ox5b9f1c(1573)](var_core_value_sig5AF5 => e[ox5b9f1c(1226)][ox5b9f1c(863)](var_core_value_sig080D[ox5b9f1c(1108)] ?? e[ox5b9f1c(1567)][ox5b9f1c(1549)], var_core_value_sig5AF5))[ox5b9f1c(1285)](String);
  return var_core_value_sig8D74 === e.ChartTypeBits[ox5b9f1c(1478)] ? (0, i[ox5b9f1c(1557)])(ox5b9f1c(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i[ox5b9f1c(922)])(A, {
      label: var_core_value_sigDA56.t("chart-ui.treemap.parentLabelLayout"),
      options: Object[ox5b9f1c(1596)](e[ox5b9f1c(1854)]).map(var_core_value_sig9DE4 => ({
        value: var_core_value_sig9DE4,
        label: var_core_value_sigDA56.t(Wi[var_core_value_sig9DE4])
      })),
      value: var_core_value_sigC00C[ox5b9f1c(752)] ?? e.defaultChartConfig[ox5b9f1c(1136)].parentLabelLayout,
      onChange: var_core_value_sig77FA => var_core_value_sig3FAF1({
        ...var_core_value_sigC00C,
        parentLabelLayout: var_core_value_sig77FA
      })
    }), (0, i[ox5b9f1c(922)])(H, {
      inlineLabel: true,
      checked: var_core_value_sig080D[ox5b9f1c(1755)] ?? false,
      label: var_core_value_sigDA56.t(ox5b9f1c(546)),
      onChange: var_core_value_sigA4A7 => var_core_value_sig3FAF1({
        ...var_core_value_sigC00C,
        label: {
          ...var_core_value_sigC00C[ox5b9f1c(1614)],
          visible: var_core_value_sigA4A7
        }
      })
    }), var_core_value_sig080D[ox5b9f1c(1755)] && (0, i[ox5b9f1c(1557)])(i.Fragment, {
      children: [(0, i[ox5b9f1c(922)])(cr, {
        label: var_core_value_sigDA56.t(ox5b9f1c(1466)),
        options: [{
          value: String(e[ox5b9f1c(1567)].CategoryName),
          label: var_core_value_sigDA56.t(ox5b9f1c(1634))
        }, {
          value: String(e[ox5b9f1c(1567)][ox5b9f1c(624)]),
          label: var_core_value_sigDA56.t("chart-ui.common.value")
        }],
        value: var_core_value_sig0F75,
        onChange: var_core_value_sigA4DF => {
          const var_core_value_sigCC9D = ox5b9f1c;
          let var_core_value_sig90F5 = Ui[var_core_value_sigCC9D(1573)](var_core_value_sig2E11 => var_core_value_sigA4DF.includes(String(var_core_value_sig2E11)))[var_core_value_sigCC9D(900)]((var_core_value_sig5B69, var_core_value_sigB098) => var_core_value_sig5B69 | var_core_value_sigB098, e[var_core_value_sigCC9D(1567)][var_core_value_sigCC9D(1549)]);
          var_core_value_sig3FAF1({
            ...var_core_value_sigC00C,
            label: {
              ...var_core_value_sigC00C[var_core_value_sigCC9D(1614)],
              contentType: var_core_value_sig90F5
            }
          });
        }
      }), e[ox5b9f1c(1226)][ox5b9f1c(863)](var_core_value_sig080D[ox5b9f1c(1108)] ?? e.LabelContentType["Empty"], e.LabelContentType[ox5b9f1c(624)]) && (0, i[ox5b9f1c(922)])(jt, {
        label: var_core_value_sigDA56.t(ox5b9f1c(587)),
        value: var_core_value_sig080D[ox5b9f1c(1875)],
        onChange: var_core_value_sigD2BA => var_core_value_sig3FAF1({
          ...var_core_value_sigC00C,
          label: {
            ...var_core_value_sigC00C.label,
            format: var_core_value_sigD2BA
          }
        })
      }), (0, i[ox5b9f1c(922)])(V, {
        colorPickerFallbackValue: e[ox5b9f1c(1790)][ox5b9f1c(508)][ox5b9f1c(1393)],
        label: var_core_value_sigDA56.t(ox5b9f1c(852)),
        value: var_core_value_sigCDBC,
        onChange: var_core_value_sigCD3A => var_core_value_sig3FAF1({
          ...var_core_value_sigC00C,
          label: {
            ...var_core_value_sigC00C[ox5b9f1c(1614)],
            ...B(var_core_value_sigCD3A)
          }
        })
      })]
    })]
  }) : null;
}
function Ki(var_core_value_sig4B7F, var_core_value_sig17D6) {
  let var_core_value_sig8915 = new Set(var_core_value_sig17D6.map(String));
  return var_core_value_sig4B7F.filter(var_core_value_sig519D => !var_core_value_sig8915[ox1b525(863)](var_core_value_sig519D[ox1b525(1324)]));
}
function qi() {
  let var_core_value_sigC88F = (0, o[ox500cbd(858)])(a.LocaleService),
    [var_core_value_sig1AFA = {
      categoryFields: [],
      valueFields: []
    }] = N(ox500cbd(1931), {
      categoryFields: [],
      valueFields: []
    }),
    [var_core_value_sigBCF5, var_core_value_sig988A] = N("chordMapping"),
    var_core_value_sigFC02 = var_core_value_sigC88F.t(ox500cbd(1132)),
    var_core_value_sigF71C = var_core_value_sigC88F.t(ox500cbd(1432)),
    var_core_value_sigE634 = var_core_value_sigC88F.t(ox500cbd(545)),
    var_core_value_sigF74F = (var_core_value_sigBCF5 == null ? undefined : var_core_value_sigBCF5[ox500cbd(1086)]) ?? e[ox500cbd(1813)][ox500cbd(1086)],
    var_core_value_sig89D7 = (var_core_value_sigBCF5 == null ? undefined : var_core_value_sigBCF5[ox500cbd(1519)]) ?? e[ox500cbd(1813)][ox500cbd(1519)],
    var_core_value_sigF2B0 = var_core_value_sigBCF5 == null ? undefined : var_core_value_sigBCF5.valueIndex,
    var_core_value_sigD77A = var_core_value_sigF74F === var_core_value_sig89D7,
    var_core_value_sigF2C2 = var_core_value_sigC7E7 => ({
      ...var_core_value_sigC7E7,
      ...(var_core_value_sigF2B0 === undefined ? {} : {
        valueIndex: var_core_value_sigF2B0
      })
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(A, {
      label: var_core_value_sigFC02,
      options: var_core_value_sig1AFA.categoryFields,
      value: String(var_core_value_sigF74F),
      onChange: var_core_value_sig6E1C => {
        let var_core_value_sigFABC = Number(var_core_value_sig6E1C);
        var_core_value_sig988A(var_core_value_sigF2C2({
          sourceIndex: var_core_value_sigFABC,
          targetIndex: var_core_value_sig89D7
        }));
      }
    }), (0, i[ox500cbd(922)])(A, {
      error: var_core_value_sigD77A ? var_core_value_sigC88F.t(ox500cbd(487)) : undefined,
      label: var_core_value_sigF71C,
      options: var_core_value_sig1AFA.categoryFields,
      value: String(var_core_value_sig89D7),
      onChange: var_core_value_sig413D => {
        let var_core_value_sig5BCE = Number(var_core_value_sig413D);
        var_core_value_sig988A(var_core_value_sigF2C2({
          sourceIndex: var_core_value_sigF74F,
          targetIndex: var_core_value_sig5BCE
        }));
      }
    }), (0, i.jsx)(A, {
      label: var_core_value_sigE634,
      options: [{
        label: var_core_value_sigC88F.t(ox500cbd(1166)),
        value: ""
      }, ...Ki(var_core_value_sig1AFA[ox500cbd(1349)], [var_core_value_sigF74F, var_core_value_sig89D7])],
      value: var_core_value_sigF2B0 === undefined ? "" : String(var_core_value_sigF2B0),
      onChange: var_core_value_sig8EF01 => var_core_value_sig988A({
        sourceIndex: var_core_value_sigF74F,
        targetIndex: var_core_value_sig89D7,
        ...(var_core_value_sig8EF01 === "" ? {} : {
          valueIndex: Number(var_core_value_sig8EF01)
        })
      })
    })]
  });
}
const Ji = {
    min: 0,
    max: 1,
    precision: 2,
    step: 0.01
  },
  Yi = {
    min: 0,
    max: 1,
    precision: 2,
    step: 0.05
  };
function Xi(var_core_value_sig2990) {
  return (0, e[ox2c39c7(1099)])(var_core_value_sig2990);
}
function Zi(var_core_value_sigD300) {
  var var_core_value_sig6F77, var_core_value_sigFA4B;
  let var_core_value_sig2AB0 = Xi(var_core_value_sigD300),
    var_core_value_sig853D = ((var_core_value_sig6F77 = var_core_value_sig2AB0.layout) == null ? undefined : var_core_value_sig6F77[ox5221da(1120)]) ?? Ji[ox5221da(1337)],
    var_core_value_sigD1F0 = ((var_core_value_sigFA4B = var_core_value_sig2AB0[ox5221da(664)]) == null ? undefined : var_core_value_sigFA4B[ox5221da(1570)]) ?? Ji.max;
  return var_core_value_sig853D < Ji[ox5221da(1337)] || var_core_value_sigD1F0 > Ji[ox5221da(628)] || var_core_value_sig853D >= var_core_value_sigD1F0;
}
function Qi() {
  let [var_core_value_sig3D4E, var_core_value_sig79C0] = N(ox398ec2(1782)),
    var_core_value_sig173D = (0, o[ox398ec2(858)])(a.LocaleService),
    var_core_value_sig6F1A = Xi(var_core_value_sig3D4E)[ox398ec2(1614)],
    var_core_value_sig1802 = z(var_core_value_sig3D4E == null ? undefined : var_core_value_sig3D4E[ox398ec2(1614)], R),
    var_core_value_sigCFA7 = var_core_value_sig78AC => var_core_value_sig79C0({
      ...var_core_value_sig3D4E,
      label: {
        ...(var_core_value_sig3D4E == null ? undefined : var_core_value_sig3D4E[ox398ec2(1614)]),
        ...var_core_value_sig78AC
      }
    });
  return (0, i[ox398ec2(922)])(I, {
    label: (0, i.jsx)(Ci, {
      endSlot: (0, i[ox398ec2(922)])(t[ox398ec2(1138)], {
        checked: !!(var_core_value_sig6F1A != null && var_core_value_sig6F1A[ox398ec2(1755)]),
        contentClassName: "univer-sr-only",
        onChange: var_core_value_sig4CEF => var_core_value_sigCFA7({
          visible: !!var_core_value_sig4CEF
        }),
        children: var_core_value_sig173D.t("chart-ui.common.label")
      }),
      children: var_core_value_sig173D.t(ox398ec2(1705))
    }),
    children: (var_core_value_sig6F1A == null ? undefined : var_core_value_sig6F1A[ox398ec2(1755)]) && (0, i[ox398ec2(1557)])(ox398ec2(1998), {
      className: ox398ec2(1556),
      children: [(0, i[ox398ec2(922)])(A, {
        label: var_core_value_sig173D.t(ox398ec2(1273)),
        options: [{
          value: e[ox398ec2(897)].Inside,
          label: var_core_value_sig173D.t("chart-ui.common.position.inside")
        }, {
          value: e[ox398ec2(897)][ox398ec2(1150)],
          label: var_core_value_sig173D.t(ox398ec2(1643))
        }],
        value: var_core_value_sig6F1A.position ?? e[ox398ec2(897)][ox398ec2(1934)],
        onChange: var_core_value_sigD57D => var_core_value_sigCFA7({
          position: var_core_value_sigD57D
        })
      }), (0, i[ox398ec2(922)])(V, {
        colorPickerFallbackValue: var_core_value_sig6F1A[ox398ec2(1393)] ?? e[ox398ec2(1790)].textStyle[ox398ec2(1393)],
        label: var_core_value_sig173D.t("chart-ui.common.font"),
        value: var_core_value_sig1802,
        onChange: var_core_value_sig2CC7 => var_core_value_sigCFA7(B(var_core_value_sig2CC7))
      })]
    })
  });
}
function $i() {
  let [var_core_value_sig31C2, var_core_value_sigA677] = N(ox4686ec(1782)),
    var_core_value_sigC015 = (0, o.useDependency)(a[ox4686ec(1419)]),
    var_core_value_sigAEBC = Xi(var_core_value_sig31C2)[ox4686ec(664)];
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6949(var_core_value_sig4784) {
    const var_core_value_sigC39E = ox4686ec;
    var_core_value_sigA677({
      ...var_core_value_sig31C2,
      layout: {
        ...(var_core_value_sig31C2 == null ? undefined : var_core_value_sig31C2[var_core_value_sigC39E(664)]),
        ...var_core_value_sig4784
      }
    });
  }
  return (0, i[ox4686ec(1557)])(I, {
    label: var_core_value_sigC015.t(ox4686ec(1059)),
    children: [(0, i[ox4686ec(1557)])(O, {
      children: [(0, i[ox4686ec(922)])(k, {
        ...Ji,
        label: var_core_value_sigC015.t("chart-ui.chord.innerRadius"),
        value: (var_core_value_sigAEBC == null ? undefined : var_core_value_sigAEBC.innerRadiusRatio) ?? null,
        onChange: var_core_value_sig16C7 => var_core_value_sig16C7 !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6949({
          innerRadiusRatio: var_core_value_sig16C7
        })
      }), (0, i[ox4686ec(922)])(k, {
        ...Ji,
        label: var_core_value_sigC015.t(ox4686ec(1044)),
        value: (var_core_value_sigAEBC == null ? undefined : var_core_value_sigAEBC[ox4686ec(1570)]) ?? null,
        onChange: var_core_value_sig7481 => var_core_value_sig7481 !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6949({
          outerRadiusRatio: var_core_value_sig7481
        })
      })]
    }), (0, i[ox4686ec(922)])(k, {
      label: var_core_value_sigC015.t(ox4686ec(1652)),
      min: 0,
      value: (var_core_value_sigAEBC == null ? undefined : var_core_value_sigAEBC[ox4686ec(802)]) ?? null,
      onChange: var_core_value_sig08A3 => var_core_value_sig08A3 !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6949({
        padAngle: var_core_value_sig08A3
      })
    }), Zi(var_core_value_sig31C2) && (0, i.jsx)("p", {
      className: "univer-text-sm\x20univer-text-red-500",
      role: ox4686ec(762),
      children: var_core_value_sigC015.t("chart-ui.chord.invalidRadii")
    })]
  });
}
function ea() {
  let [var_core_value_sigA89C, var_core_value_sigDD3E] = N(ox18d033(1782)),
    var_core_value_sig182B = (0, o[ox18d033(858)])(a[ox18d033(1419)]),
    var_core_value_sig2A99 = Xi(var_core_value_sigA89C)[ox18d033(1367)],
    var_core_value_sig18A6 = var_core_value_sig77D8 => var_core_value_sigDD3E({
      ...var_core_value_sigA89C,
      ribbon: {
        ...(var_core_value_sigA89C == null ? undefined : var_core_value_sigA89C[ox18d033(1367)]),
        ...var_core_value_sig77D8
      }
    });
  return (0, i[ox18d033(922)])(I, {
    label: var_core_value_sig182B.t(ox18d033(1947)),
    children: (0, i.jsxs)(O, {
      children: [(0, i[ox18d033(922)])(A, {
        label: var_core_value_sig182B.t(ox18d033(677)),
        options: [{
          value: e.ChartChordRibbonColorMode[ox18d033(1618)],
          label: var_core_value_sig182B.t("chart-ui.chord.source")
        }, {
          value: e[ox18d033(992)][ox18d033(1611)],
          label: var_core_value_sig182B.t(ox18d033(1432))
        }, {
          value: e[ox18d033(992)][ox18d033(1117)],
          label: var_core_value_sig182B.t(ox18d033(1289))
        }],
        value: (var_core_value_sig2A99 == null ? undefined : var_core_value_sig2A99.color) ?? e[ox18d033(992)][ox18d033(1117)],
        onChange: var_core_value_sig78A3 => var_core_value_sig18A6({
          color: var_core_value_sig78A3
        })
      }), (0, i[ox18d033(922)])(k, {
        ...Yi,
        label: var_core_value_sig182B.t(ox18d033(693)),
        value: (var_core_value_sig2A99 == null ? undefined : var_core_value_sig2A99[ox18d033(577)]) ?? null,
        onChange: var_core_value_sig649B => var_core_value_sig649B !== null && var_core_value_sig18A6({
          opacity: var_core_value_sig649B
        })
      })]
    })
  });
}
function ta() {
  let var_core_value_sigA98B = (0, o[ox5bac48(858)])(a[ox5bac48(1419)]),
    [var_core_value_sig458C = []] = N(ox5bac48(860), []),
    [var_core_value_sig8DEC, var_core_value_sig522F] = N(ox5bac48(1786)),
    [var_core_value_sigD718, var_core_value_sig41CF] = N(ox5bac48(756)),
    var_core_value_sig1EFD = var_core_value_sigA98B.t(ox5bac48(1705)),
    var_core_value_sig38BB = var_core_value_sigA98B.t("chart-ui.common.value");
  return (0, i[ox5bac48(1557)])(i[ox5bac48(1762)], {
    children: [(0, i[ox5bac48(922)])(A, {
      label: var_core_value_sig1EFD,
      options: var_core_value_sig458C[ox5bac48(1573)](var_core_value_sig6256 => var_core_value_sig6256[ox5bac48(1324)] !== String(var_core_value_sigD718)),
      value: var_core_value_sig8DEC === undefined ? "" : String(var_core_value_sig8DEC),
      onChange: var_core_value_sigE7A6 => var_core_value_sig522F(Number(var_core_value_sigE7A6))
    }), (0, i[ox5bac48(922)])(A, {
      label: var_core_value_sig38BB,
      options: var_core_value_sig458C[ox5bac48(1573)](var_core_value_sigB505 => var_core_value_sigB505[ox5bac48(1324)] !== String(var_core_value_sig8DEC)),
      value: var_core_value_sigD718 === undefined ? "" : String(var_core_value_sigD718),
      onChange: var_core_value_sig7428 => var_core_value_sig41CF(Number(var_core_value_sig7428))
    })]
  });
}
function na(var_core_value_sig017C) {
  return (0, e[ox2d8175(1664)])(var_core_value_sig017C);
}
function ra(var_core_value_sig44BC, var_core_value_sigAB7B) {
  return {
    ...var_core_value_sig44BC,
    ...var_core_value_sigAB7B
  };
}
function ia(var_core_value_sig55EE) {
  let var_core_value_sigE9F6 = var_core_value_sig55EE == null ? undefined : var_core_value_sig55EE.min,
    var_core_value_sig3BA9 = var_core_value_sig55EE == null ? undefined : var_core_value_sig55EE.max;
  return var_core_value_sigE9F6 != null && var_core_value_sig3BA9 != null && Number[ox4b792a(1541)](var_core_value_sigE9F6) && Number[ox4b792a(1541)](var_core_value_sig3BA9) && var_core_value_sigE9F6 < var_core_value_sig3BA9;
}
function aa(var_core_value_sigE230, var_core_value_sig5AC8) {
  if (!ia(var_core_value_sig5AC8)) return false;
  let {
      min: var_core_value_sigE492,
      max: var_core_value_sig3465
    } = var_core_value_sig5AC8,
    var_core_value_sig38DD = var_core_value_sigE492;
  for (let var_core_value_sig1DCE of var_core_value_sigE230) {
    if (!Number[ox3678e6(1541)](var_core_value_sig1DCE[ox3678e6(2034)]) || !Number[ox3678e6(1541)](var_core_value_sig1DCE.to) || var_core_value_sig1DCE.from < var_core_value_sigE492 || var_core_value_sig1DCE[ox3678e6(2034)] < var_core_value_sig38DD || var_core_value_sig1DCE[ox3678e6(2034)] >= var_core_value_sig1DCE.to || var_core_value_sig1DCE.to > var_core_value_sig3465) return false;
    var_core_value_sig38DD = var_core_value_sig1DCE.to;
  }
  return true;
}
function oa(var_core_value_sig89AE) {
  var var_core_value_sig3A69, var_core_value_sigD64C, var_core_value_sig3B0B, var_core_value_sig1E7C;
  let var_core_value_sigD3C4 = na(var_core_value_sig89AE),
    var_core_value_sigBC8B = var_core_value_sigD3C4[ox4188c6(1662)] ?? [];
  if (!aa(var_core_value_sigBC8B, var_core_value_sigD3C4[ox4188c6(611)])) return;
  let var_core_value_sigEE2E = ((var_core_value_sig3A69 = var_core_value_sigBC8B[var_core_value_sigBC8B[ox4188c6(1579)] - 1]) == null ? undefined : var_core_value_sig3A69.to) ?? ((var_core_value_sigD64C = var_core_value_sigD3C4[ox4188c6(611)]) == null ? undefined : var_core_value_sigD64C[ox4188c6(1337)]),
    var_core_value_sigCF06 = (var_core_value_sig3B0B = var_core_value_sigD3C4[ox4188c6(611)]) == null ? undefined : var_core_value_sig3B0B[ox4188c6(628)],
    var_core_value_sig6BCD = (var_core_value_sig1E7C = var_core_value_sigD3C4[ox4188c6(1179)]) == null ? undefined : var_core_value_sig1E7C[ox4188c6(1393)];
  return var_core_value_sigEE2E !== undefined && var_core_value_sigCF06 !== undefined && var_core_value_sig6BCD !== undefined && var_core_value_sigEE2E < var_core_value_sigCF06 ? {
    from: var_core_value_sigEE2E,
    to: var_core_value_sigCF06,
    color: var_core_value_sig6BCD
  } : undefined;
}
function sa() {
  let [var_core_value_sigC664, var_core_value_sig1B7B] = N(ox52bed9(1598)),
    var_core_value_sig1F31 = (0, o[ox52bed9(858)])(a.LocaleService),
    var_core_value_sigEA82 = na(var_core_value_sigC664);
  return (0, i[ox52bed9(922)])(I, {
    label: var_core_value_sig1F31.t(ox52bed9(1606)),
    children: (0, i[ox52bed9(922)])(t[ox52bed9(1956)], {
      className: ox52bed9(1069),
      items: [{
        value: e[ox52bed9(1284)][ox52bed9(1901)],
        label: var_core_value_sig1F31.t(ox52bed9(1215))
      }, {
        value: e[ox52bed9(1284)][ox52bed9(1942)],
        label: var_core_value_sig1F31.t(ox52bed9(1188))
      }],
      value: var_core_value_sigEA82[ox52bed9(1122)] ?? e[ox52bed9(1284)][ox52bed9(1901)],
      onChange: var_core_value_sig0567 => var_core_value_sig1B7B(ra(var_core_value_sigC664, {
        mode: var_core_value_sig0567
      }))
    })
  });
}
function ca() {
  var var_core_value_sig65BB, var_core_value_sig69B1, var_core_value_sigAEDE, var_core_value_sig139C, var_core_value_sigF2D6, var_core_value_sig810E;
  let [var_core_value_sigABB1, var_core_value_sig3F70] = N(ox1a11a5(1598)),
    var_core_value_sig9F91 = (0, o[ox1a11a5(858)])(a.LocaleService),
    var_core_value_sigC9C8 = na(var_core_value_sigABB1),
    var_core_value_sigC444 = var_core_value_sigA7F3 => var_core_value_sig3F70(ra(var_core_value_sigABB1, {
      pointer: {
        ...(var_core_value_sigABB1 == null ? undefined : var_core_value_sigABB1[ox1a11a5(750)]),
        ...var_core_value_sigA7F3
      }
    }));
  return (0, i[ox1a11a5(922)])(I, {
    label: (0, i[ox1a11a5(922)])(Ci, {
      endSlot: (0, i[ox1a11a5(922)])(t.Checkbox, {
        checked: !!((var_core_value_sig65BB = var_core_value_sigC9C8[ox1a11a5(750)]) != null && var_core_value_sig65BB[ox1a11a5(1755)]),
        contentClassName: ox1a11a5(911),
        onChange: var_core_value_sigEACD => var_core_value_sigC444({
          visible: !!var_core_value_sigEACD
        }),
        children: var_core_value_sig9F91.t(ox1a11a5(1818))
      }),
      children: var_core_value_sig9F91.t(ox1a11a5(1818))
    }),
    children: (0, i[ox1a11a5(1557)])(O, {
      children: [(0, i[ox1a11a5(922)])(A, {
        disabled: !((var_core_value_sig69B1 = var_core_value_sigC9C8[ox1a11a5(750)]) != null && var_core_value_sig69B1[ox1a11a5(1755)]),
        label: var_core_value_sig9F91.t(ox1a11a5(1266)),
        options: [{
          value: e[ox1a11a5(1018)].Needle,
          label: var_core_value_sig9F91.t("chart-ui.gauge.pointerNeedle")
        }, {
          value: e[ox1a11a5(1018)][ox1a11a5(1007)],
          label: var_core_value_sig9F91.t(ox1a11a5(1141))
        }, {
          value: e[ox1a11a5(1018)][ox1a11a5(1623)],
          label: var_core_value_sig9F91.t(ox1a11a5(1006))
        }],
        value: ((var_core_value_sigAEDE = var_core_value_sigC9C8.pointer) == null ? undefined : var_core_value_sigAEDE.shape) ?? e[ox1a11a5(1018)][ox1a11a5(1540)],
        onChange: var_core_value_sig901E => var_core_value_sigC444({
          shape: var_core_value_sig901E
        })
      }), (0, i[ox1a11a5(922)])(M, {
        disabled: !((var_core_value_sig139C = var_core_value_sigC9C8[ox1a11a5(750)]) != null && var_core_value_sig139C[ox1a11a5(1755)]),
        emptyLabel: var_core_value_sig9F91.t(ox1a11a5(819)),
        label: var_core_value_sig9F91.t("chart-ui.common.color"),
        pickerFallbackValue: ((var_core_value_sigF2D6 = var_core_value_sigC9C8.pointer) == null ? undefined : var_core_value_sigF2D6[ox1a11a5(1393)]) ?? e[ox1a11a5(1790)].gauge[ox1a11a5(750)].color,
        resetLabel: var_core_value_sig9F91.t(ox1a11a5(819)),
        value: (var_core_value_sigABB1 == null || (var_core_value_sig810E = var_core_value_sigABB1[ox1a11a5(750)]) == null ? undefined : var_core_value_sig810E[ox1a11a5(1393)]) ?? null,
        onChange: var_core_value_sigF7BB => var_core_value_sigC444({
          color: var_core_value_sigF7BB
        })
      })]
    })
  });
}
function la() {
  var var_core_value_sig4B40, var_core_value_sig9F6D, var_core_value_sigE1A2, var_core_value_sig4767;
  let [var_core_value_sig2591, var_core_value_sig7C12] = N(ox174663(1598)),
    var_core_value_sig8EC51 = (0, o[ox174663(858)])(a[ox174663(1419)]),
    var_core_value_sig4B1B = na(var_core_value_sig2591),
    var_core_value_sig14C3 = var_core_value_sigFA38 => var_core_value_sig7C12(ra(var_core_value_sig2591, {
      progress: {
        ...(var_core_value_sig2591 == null ? undefined : var_core_value_sig2591.progress),
        ...var_core_value_sigFA38
      }
    }));
  return (0, i[ox174663(922)])(I, {
    label: (0, i[ox174663(922)])(Ci, {
      endSlot: (0, i.jsx)(t[ox174663(1138)], {
        checked: !!((var_core_value_sig4B40 = var_core_value_sig4B1B.progress) != null && var_core_value_sig4B40.visible),
        contentClassName: ox174663(911),
        onChange: var_core_value_sig102B => var_core_value_sig14C3({
          visible: !!var_core_value_sig102B
        }),
        children: var_core_value_sig8EC51.t("chart-ui.gauge.progress")
      }),
      children: var_core_value_sig8EC51.t("chart-ui.gauge.progress")
    }),
    children: (0, i.jsx)(M, {
      disabled: !((var_core_value_sig9F6D = var_core_value_sig4B1B[ox174663(1179)]) != null && var_core_value_sig9F6D[ox174663(1755)]),
      emptyLabel: var_core_value_sig8EC51.t(ox174663(819)),
      label: var_core_value_sig8EC51.t(ox174663(677)),
      pickerFallbackValue: ((var_core_value_sigE1A2 = var_core_value_sig4B1B[ox174663(1179)]) == null ? undefined : var_core_value_sigE1A2[ox174663(1393)]) ?? e[ox174663(1790)][ox174663(1385)][ox174663(1179)][ox174663(1393)],
      resetLabel: var_core_value_sig8EC51.t(ox174663(819)),
      value: (var_core_value_sig2591 == null || (var_core_value_sig4767 = var_core_value_sig2591[ox174663(1179)]) == null ? undefined : var_core_value_sig4767[ox174663(1393)]) ?? null,
      onChange: var_core_value_sigA7DB => var_core_value_sig14C3({
        color: var_core_value_sigA7DB
      })
    })
  });
}
function ua(var_core_value_sig95A8) {
  return (0, i[ox1db1f0(922)])(I, {
    disabled: var_core_value_sig95A8[ox1db1f0(1937)],
    error: var_core_value_sig95A8[ox1db1f0(764)],
    help: var_core_value_sig95A8[ox1db1f0(1899)],
    label: var_core_value_sig95A8[ox1db1f0(1614)],
    children: (0, i[ox1db1f0(1557)])(ox1db1f0(1998), {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      role: "list",
      children: [var_core_value_sig95A8[ox1db1f0(1914)][ox1db1f0(1285)]((var_core_value_sig5EEE, var_core_value_sig65B4) => (0, i[ox1db1f0(1557)])(ox1db1f0(1998), {
        className: ox1db1f0(1497),
        role: "listitem",
        children: [(0, i[ox1db1f0(922)])("div", {
          className: ox1db1f0(866),
          children: var_core_value_sig95A8[ox1db1f0(953)](var_core_value_sig5EEE, var_core_value_sig65B4)
        }), var_core_value_sig95A8[ox1db1f0(1888)] && var_core_value_sig95A8[ox1db1f0(597)] && var_core_value_sig95A8[ox1db1f0(1142)] && (0, i[ox1db1f0(1557)])(ox1db1f0(1998), {
          className: "univer-flex\x20univer-items-center",
          children: [(0, i[ox1db1f0(922)])(t.Button, {
            "aria-label": var_core_value_sig95A8[ox1db1f0(597)](var_core_value_sig65B4, var_core_value_sig5EEE),
            disabled: var_core_value_sig95A8[ox1db1f0(1937)] || var_core_value_sig65B4 === 0,
            size: ox1db1f0(534),
            variant: ox1db1f0(1245),
            onClick: () => {
              const var_core_value_sigCE71 = ox1db1f0;
              var var_core_value_sig21D8;
              return (var_core_value_sig21D8 = var_core_value_sig95A8[var_core_value_sigCE71(1888)]) == null ? undefined : var_core_value_sig21D8.call(var_core_value_sig95A8, var_core_value_sig65B4, var_core_value_sig65B4 - 1);
            },
            children: (0, i.jsx)(n[ox1db1f0(1146)], {})
          }), (0, i.jsx)(t[ox1db1f0(1420)], {
            "aria-label": var_core_value_sig95A8[ox1db1f0(1142)](var_core_value_sig65B4, var_core_value_sig5EEE),
            disabled: var_core_value_sig95A8[ox1db1f0(1937)] || var_core_value_sig65B4 === var_core_value_sig95A8[ox1db1f0(1914)][ox1db1f0(1579)] - 1,
            size: "icon",
            variant: ox1db1f0(1245),
            onClick: () => {
              const var_core_value_sig2B65 = ox1db1f0;
              var var_core_value_sigD7EA;
              return (var_core_value_sigD7EA = var_core_value_sig95A8[var_core_value_sig2B65(1888)]) == null ? undefined : var_core_value_sigD7EA[var_core_value_sig2B65(678)](var_core_value_sig95A8, var_core_value_sig65B4, var_core_value_sig65B4 + 1);
            },
            children: (0, i[ox1db1f0(922)])(n[ox1db1f0(1403)], {})
          })]
        }), (0, i[ox1db1f0(922)])(t[ox1db1f0(1420)], {
          "aria-label": var_core_value_sig95A8[ox1db1f0(1170)](var_core_value_sig65B4, var_core_value_sig5EEE),
          disabled: var_core_value_sig95A8.disabled,
          size: ox1db1f0(534),
          variant: ox1db1f0(1245),
          onClick: () => var_core_value_sig95A8[ox1db1f0(967)](var_core_value_sig65B4),
          children: (0, i.jsx)(n[ox1db1f0(1494)], {})
        })]
      }, var_core_value_sig95A8.getItemKey(var_core_value_sig5EEE, var_core_value_sig65B4))), var_core_value_sig95A8[ox1db1f0(1135)] && var_core_value_sig95A8.addLabel && (0, i[ox1db1f0(922)])(t.Button, {
        disabled: var_core_value_sig95A8[ox1db1f0(1937)],
        onClick: var_core_value_sig95A8.onAdd,
        children: var_core_value_sig95A8[ox1db1f0(1732)]
      })]
    })
  });
}
function da() {
  let [var_core_value_sig3F90, var_core_value_sigB489] = N(ox50afc6(1598)),
    var_core_value_sig76E7 = (0, o[ox50afc6(858)])(a[ox50afc6(1419)]),
    var_core_value_sig7E7F = na(var_core_value_sig3F90),
    var_core_value_sig7947 = (var_core_value_sig3F90 == null ? undefined : var_core_value_sig3F90[ox50afc6(1662)]) ?? var_core_value_sig7E7F[ox50afc6(1662)] ?? [],
    var_core_value_sig7FEC = oa(var_core_value_sig3F90),
    var_core_value_sig73D2 = aa(var_core_value_sig7947, var_core_value_sig7E7F[ox50afc6(611)]);
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig99DD(var_core_value_sigF98E) {
    const var_core_value_sigA470 = ox50afc6;
    aa(var_core_value_sigF98E, var_core_value_sig7E7F[var_core_value_sigA470(611)]) && var_core_value_sigB489(ra(var_core_value_sig3F90, {
      ranges: var_core_value_sigF98E
    }));
  }
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3F3B(var_core_value_sig19A1, var_core_value_sig81F7) {
    const var_core_value_sigBE51 = ox50afc6;
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig99DD(var_core_value_sig7947[var_core_value_sigBE51(1285)]((var_core_value_sigB33B, var_core_value_sig24B9) => var_core_value_sig24B9 === var_core_value_sig19A1 ? {
      ...var_core_value_sigB33B,
      ...var_core_value_sig81F7
    } : var_core_value_sigB33B));
  }
  return (0, i.jsx)(ua, {
    addLabel: var_core_value_sig76E7.t("chart-ui.gauge.addRange"),
    error: var_core_value_sig73D2 ? undefined : var_core_value_sig76E7.t("chart-ui.gauge.configDiagnostic"),
    getItemKey: (var_core_value_sigAAD1, var_core_value_sigBC1A) => var_core_value_sigBC1A,
    items: var_core_value_sig7947,
    label: var_core_value_sig76E7.t(ox50afc6(1740)),
    removeLabel: () => var_core_value_sig76E7.t(ox50afc6(1112)),
    renderItem: (var_core_value_sig3F3A, var_core_value_sigA984) => {
      const var_core_value_sigA504 = ox50afc6;
      var var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1;
      return (0, i.jsxs)(var_core_value_sigA504(1998), {
        className: var_core_value_sigA504(765),
        children: [(0, i[var_core_value_sigA504(922)])(M, {
          emptyLabel: var_core_value_sig76E7.t(var_core_value_sigA504(819)),
          label: var_core_value_sig76E7.t("chart-ui.common.color"),
          pickerFallbackValue: var_core_value_sig3F3A[var_core_value_sigA504(1393)],
          value: var_core_value_sig3F3A[var_core_value_sigA504(1393)],
          onChange: var_core_value_sigE627 => var_core_value_sigE627 !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3F3B(var_core_value_sigA984, {
            color: var_core_value_sigE627
          })
        }), (0, i.jsx)(k, {
          label: var_core_value_sig76E7.t(var_core_value_sigA504(1756)),
          max: var_core_value_sig3F3A.to,
          min: ((var_core_value_sig05FF = var_core_value_sig7947[var_core_value_sigA984 - 1]) == null ? undefined : var_core_value_sig05FF.to) ?? ((var_core_value_sigFBF0 = var_core_value_sig7E7F[var_core_value_sigA504(611)]) == null ? undefined : var_core_value_sigFBF0.min),
          value: var_core_value_sig3F3A.from,
          onChange: var_core_value_sigEF3E => var_core_value_sigEF3E !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3F3B(var_core_value_sigA984, {
            from: var_core_value_sigEF3E
          })
        }), (0, i[var_core_value_sigA504(922)])(k, {
          label: var_core_value_sig76E7.t(var_core_value_sigA504(870)),
          max: ((var_core_value_sig2F95 = var_core_value_sig7947[var_core_value_sigA984 + 1]) == null ? undefined : var_core_value_sig2F95.from) ?? ((var_core_value_sigF0E1 = var_core_value_sig7E7F.scale) == null ? undefined : var_core_value_sigF0E1[var_core_value_sigA504(628)]),
          min: var_core_value_sig3F3A[var_core_value_sigA504(2034)],
          value: var_core_value_sig3F3A.to,
          onChange: var_core_value_sig273D => var_core_value_sig273D !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3F3B(var_core_value_sigA984, {
            to: var_core_value_sig273D
          })
        })]
      });
    },
    onAdd: var_core_value_sig7FEC ? () => var_core_value_sigB489(ra(var_core_value_sig3F90, {
      ranges: [...var_core_value_sig7947, var_core_value_sig7FEC]
    })) : undefined,
    onRemove: var_core_value_sig2D8D => var_core_value_sigB489(ra(var_core_value_sig3F90, {
      ranges: var_core_value_sig7947[ox50afc6(1573)]((var_core_value_sig9A0D, var_core_value_sigA319) => var_core_value_sigA319 !== var_core_value_sig2D8D)
    }))
  });
}
function fa() {
  var var_core_value_sigCBAA, var_core_value_sigC096, var_core_value_sig6140, var_core_value_sigDD84;
  let [var_core_value_sig7BA5, var_core_value_sig543F] = N("gaugeStyle"),
    var_core_value_sigBF30 = (0, o[ox29d1df(858)])(a[ox29d1df(1419)]),
    var_core_value_sigAA0E = na(var_core_value_sig7BA5);
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig51E1(var_core_value_sigE5A6) {
    const var_core_value_sigF449 = ox29d1df;
    ia({
      ...var_core_value_sigAA0E[var_core_value_sigF449(611)],
      ...var_core_value_sigE5A6
    }) && var_core_value_sig543F(ra(var_core_value_sig7BA5, {
      scale: {
        ...(var_core_value_sig7BA5 == null ? undefined : var_core_value_sig7BA5[var_core_value_sigF449(611)]),
        ...var_core_value_sigE5A6
      }
    }));
  }
  return (0, i[ox29d1df(922)])(I, {
    label: var_core_value_sigBF30.t(ox29d1df(1700)),
    children: (0, i[ox29d1df(1557)])(O, {
      children: [(0, i[ox29d1df(922)])(k, {
        label: var_core_value_sigBF30.t(ox29d1df(1802)),
        max: (var_core_value_sigCBAA = var_core_value_sigAA0E[ox29d1df(611)]) == null ? undefined : var_core_value_sigCBAA.max,
        value: ((var_core_value_sigC096 = var_core_value_sigAA0E.scale) == null ? undefined : var_core_value_sigC096[ox29d1df(1337)]) ?? null,
        onChange: var_core_value_sig38C5 => var_core_value_sig38C5 !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig51E1({
          min: var_core_value_sig38C5
        })
      }), (0, i[ox29d1df(922)])(k, {
        label: var_core_value_sigBF30.t(ox29d1df(1539)),
        min: (var_core_value_sig6140 = var_core_value_sigAA0E.scale) == null ? undefined : var_core_value_sig6140[ox29d1df(1337)],
        value: ((var_core_value_sigDD84 = var_core_value_sigAA0E.scale) == null ? undefined : var_core_value_sigDD84.max) ?? null,
        onChange: var_core_value_sigC87D => var_core_value_sigC87D !== null && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig51E1({
          max: var_core_value_sigC87D
        })
      })]
    })
  });
}
const pa = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"]];
function ma(var_core_value_sig9B6A) {
  return (0, e[ox5f200d(574)])(var_core_value_sig9B6A);
}
function ha(var_core_value_sig7BFA) {
  return (0, e[ox121037(943)])(var_core_value_sig7BFA);
}
function ga(var_core_value_sig09FA) {
  let var_core_value_sig6881 = var_core_value_sig09FA ?? e[ox3ebdff(1790)][ox3ebdff(1600)].label[ox3ebdff(1108)];
  return pa[ox3ebdff(1573)](var_core_value_sigCCDC => var_core_value_sig6881 !== undefined && e[ox3ebdff(1226)][ox3ebdff(863)](var_core_value_sig6881, var_core_value_sigCCDC))[ox3ebdff(1285)](String);
}
function _a(var_core_value_sigAB94) {
  let var_core_value_sigEE05 = pa[ox200571(1573)](var_core_value_sigC310 => var_core_value_sigAB94.includes(String(var_core_value_sigC310)));
  return var_core_value_sigEE05[ox200571(1579)] ? var_core_value_sigEE05[ox200571(900)]((var_core_value_sigA4E8, var_core_value_sigDC07) => var_core_value_sigA4E8 | var_core_value_sigDC07, e[ox200571(1567)][ox200571(1549)]) : undefined;
}
const va = {
  bold: e.defaultChartConfig["sunburst"].centerLabel["bold"],
  color: e.defaultChartConfig["textStyle"].color,
  fontSize: e.defaultChartConfig["sunburst"].centerLabel["fontSize"],
  italic: e.defaultChartConfig["sunburst"].centerLabel["italic"]
};
function ya() {
  var var_core_value_sig0F0E;
  let [var_core_value_sig3A40, var_core_value_sig2377] = N("sunburstStyle"),
    var_core_value_sig4EEF = (0, o.useDependency)(a.LocaleService),
    var_core_value_sigC58E = ha(var_core_value_sig3A40),
    var_core_value_sig9063 = z(var_core_value_sig3A40 == null ? undefined : var_core_value_sig3A40.centerLabel, va);
  return (0, i[ox2c8e61(1557)])(i.Fragment, {
    children: [(0, i[ox2c8e61(922)])(H, {
      checked: !!var_core_value_sigC58E.visible,
      inlineLabel: true,
      label: var_core_value_sig4EEF.t("chart-ui.sunburst.centerLabel"),
      onChange: var_core_value_sig3474 => var_core_value_sig2377({
        ...var_core_value_sig3A40,
        centerLabel: {
          ...(var_core_value_sig3A40 == null ? undefined : var_core_value_sig3A40[ox2c8e61(1211)]),
          visible: var_core_value_sig3474
        }
      })
    }), var_core_value_sigC58E[ox2c8e61(1755)] && (0, i[ox2c8e61(1557)])(i[ox2c8e61(1762)], {
      children: [(0, i[ox2c8e61(922)])(jt, {
        label: var_core_value_sig4EEF.t(ox2c8e61(587)),
        value: var_core_value_sig3A40 == null || (var_core_value_sig0F0E = var_core_value_sig3A40.centerLabel) == null ? undefined : var_core_value_sig0F0E[ox2c8e61(1875)],
        onChange: var_core_value_sig4E80 => var_core_value_sig2377({
          ...var_core_value_sig3A40,
          centerLabel: {
            ...(var_core_value_sig3A40 == null ? undefined : var_core_value_sig3A40[ox2c8e61(1211)]),
            format: var_core_value_sig4E80
          }
        })
      }), (0, i[ox2c8e61(922)])(V, {
        colorPickerFallbackValue: e[ox2c8e61(1790)][ox2c8e61(508)][ox2c8e61(1393)],
        label: var_core_value_sig4EEF.t("chart-ui.sunburst.labelFormat"),
        value: var_core_value_sig9063,
        onChange: var_core_value_sigD23B => var_core_value_sig2377({
          ...var_core_value_sig3A40,
          centerLabel: {
            ...(var_core_value_sig3A40 == null ? undefined : var_core_value_sig3A40[ox2c8e61(1211)]),
            ...B(var_core_value_sigD23B)
          }
        })
      })]
    })]
  });
}
const ba = {
  add: "chart-ui.sunburst.addHierarchy",
  hierarchy: "chart-ui.sunburst.hierarchy",
  moveDown: "chart-ui.sunburst.moveDown",
  moveUp: "chart-ui.sunburst.moveUp",
  remove: "chart-ui.sunburst.removeHierarchy"
};
function xa() {
  let var_core_value_sig99CE = (0, o.useDependency)(a[ox4963d2(1419)]),
    [var_core_value_sigFB15 = []] = N(ox4963d2(727), []),
    [var_core_value_sigCD2E = [], var_core_value_sig9AF5] = N(ox4963d2(809), []),
    [var_core_value_sig60CE, var_core_value_sigFA1B] = N("sunburstValueIndex"),
    var_core_value_sig5FEF = new Set(var_core_value_sigCD2E),
    var_core_value_sigD48C = var_core_value_sig99CE.t(ba[ox4963d2(519)]),
    var_core_value_sig41E9 = var_core_value_sig99CE.t(ox4963d2(545));
  return (0, i.jsxs)(i[ox4963d2(1762)], {
    children: [(0, i[ox4963d2(922)])(ua, {
      getItemKey: (var_core_value_sig2B2A, var_core_value_sig0B5C) => var_core_value_sig0B5C + ":" + var_core_value_sig2B2A,
      items: var_core_value_sigCD2E,
      label: var_core_value_sig99CE.t(ba[ox4963d2(777)]),
      moveDownLabel: () => var_core_value_sig99CE.t(ba[ox4963d2(739)]),
      moveUpLabel: () => var_core_value_sig99CE.t(ba[ox4963d2(1675)]),
      removeLabel: () => var_core_value_sig99CE.t(ba.remove),
      renderItem: var_core_value_sig7D42 => {
        const var_core_value_sig8FDE = ox4963d2;
        var var_core_value_sig78E6;
        return ((var_core_value_sig78E6 = var_core_value_sigFB15[var_core_value_sig8FDE(1507)](var_core_value_sig2D58 => var_core_value_sig2D58.value === String(var_core_value_sig7D42))) == null ? undefined : var_core_value_sig78E6.label) ?? String(var_core_value_sig7D42);
      },
      onMove: (var_core_value_sig541F, var_core_value_sig417B) => {
        let var_core_value_sigAA90 = [...var_core_value_sigCD2E];
        [var_core_value_sigAA90[var_core_value_sig541F], var_core_value_sigAA90[var_core_value_sig417B]] = [var_core_value_sigAA90[var_core_value_sig417B], var_core_value_sigAA90[var_core_value_sig541F]], var_core_value_sig9AF5(var_core_value_sigAA90);
      },
      onRemove: var_core_value_sigE92D => {
        const var_core_value_sig9940 = ox4963d2;
        var_core_value_sigCD2E.length > 1 && var_core_value_sig9AF5(var_core_value_sigCD2E[var_core_value_sig9940(1573)]((var_core_value_sig223F, var_core_value_sigD749) => var_core_value_sigD749 !== var_core_value_sigE92D));
      }
    }), (0, i.jsx)(A, {
      label: var_core_value_sigD48C,
      options: var_core_value_sigFB15.filter(var_core_value_sig682D => var_core_value_sig682D[ox4963d2(1324)] !== String(var_core_value_sig60CE) && !var_core_value_sig5FEF.has(Number(var_core_value_sig682D[ox4963d2(1324)]))),
      value: "",
      onChange: var_core_value_sig1435 => var_core_value_sig9AF5([...var_core_value_sigCD2E, Number(var_core_value_sig1435)])
    }), (0, i.jsx)(A, {
      label: var_core_value_sig41E9,
      options: var_core_value_sigFB15.filter(var_core_value_sig4082 => !var_core_value_sig5FEF[ox4963d2(863)](Number(var_core_value_sig4082[ox4963d2(1324)]))),
      value: var_core_value_sig60CE === undefined ? "" : String(var_core_value_sig60CE),
      onChange: var_core_value_sigC049 => var_core_value_sigFA1B(Number(var_core_value_sigC049))
    })]
  });
}
const Sa = "auto";
function Ca() {
  var var_core_value_sig3807, var_core_value_sig5409;
  let [var_core_value_sig680F, var_core_value_sig2E36] = N(ox4c55ae(1889)),
    var_core_value_sigBA94 = (0, o.useDependency)(a.LocaleService),
    var_core_value_sigA847 = ma(var_core_value_sig680F),
    var_core_value_sig1AB4 = z(var_core_value_sig680F == null ? undefined : var_core_value_sig680F[ox4c55ae(1614)], R),
    var_core_value_sig7272 = var_core_value_sigBA94.t(ox4c55ae(1705));
  return (0, i[ox4c55ae(1557)])(i[ox4c55ae(1762)], {
    children: [(0, i.jsx)(H, {
      checked: !!var_core_value_sigA847[ox4c55ae(1755)],
      inlineLabel: true,
      label: var_core_value_sig7272,
      onChange: var_core_value_sigE5C3 => var_core_value_sig2E36({
        ...var_core_value_sig680F,
        label: {
          ...(var_core_value_sig680F == null ? undefined : var_core_value_sig680F[ox4c55ae(1614)]),
          visible: var_core_value_sigE5C3
        }
      })
    }), var_core_value_sigA847.visible && (0, i.jsxs)(i[ox4c55ae(1762)], {
      children: [(0, i[ox4c55ae(922)])(cr, {
        label: var_core_value_sigBA94.t(ox4c55ae(1466)),
        options: pa[ox4c55ae(1285)](var_core_value_sigCCAA => ({
          value: String(var_core_value_sigCCAA),
          label: var_core_value_sigBA94.t(var_core_value_sigCCAA === e[ox4c55ae(1567)][ox4c55ae(602)] ? ox4c55ae(1634) : ox4c55ae(545))
        })),
        value: ga(var_core_value_sigA847[ox4c55ae(1108)]),
        onChange: var_core_value_sigF32D => {
          const var_core_value_sig9427 = ox4c55ae;
          let var_core_value_sig21F4 = _a(var_core_value_sigF32D);
          var_core_value_sig21F4 !== undefined && var_core_value_sig2E36({
            ...var_core_value_sig680F,
            label: {
              ...(var_core_value_sig680F == null ? undefined : var_core_value_sig680F[var_core_value_sig9427(1614)]),
              contentType: var_core_value_sig21F4
            }
          });
        }
      }), (0, i[ox4c55ae(922)])(A, {
        label: var_core_value_sigBA94.t(ox4c55ae(1668)),
        options: [{
          value: Sa,
          label: var_core_value_sigBA94.t("chart-ui.common.auto")
        }, {
          value: e[ox4c55ae(964)].Inside,
          label: var_core_value_sigBA94.t(ox4c55ae(2031))
        }, {
          value: e[ox4c55ae(964)][ox4c55ae(1150)],
          label: var_core_value_sigBA94.t(ox4c55ae(1643))
        }],
        value: (var_core_value_sig680F == null || (var_core_value_sig3807 = var_core_value_sig680F[ox4c55ae(1614)]) == null ? undefined : var_core_value_sig3807[ox4c55ae(1712)]) ?? Sa,
        onChange: var_core_value_sigA345 => var_core_value_sig2E36({
          ...var_core_value_sig680F,
          label: {
            ...(var_core_value_sig680F == null ? undefined : var_core_value_sig680F.label),
            position: var_core_value_sigA345 === Sa ? null : var_core_value_sigA345
          }
        })
      }), e[ox4c55ae(1226)][ox4c55ae(863)](var_core_value_sigA847.contentType ?? e[ox4c55ae(1567)][ox4c55ae(1549)], e[ox4c55ae(1567)].Value) && (0, i[ox4c55ae(922)])(jt, {
        label: var_core_value_sigBA94.t("chart-ui.common.numberFormat"),
        value: var_core_value_sig680F == null || (var_core_value_sig5409 = var_core_value_sig680F.label) == null ? undefined : var_core_value_sig5409[ox4c55ae(1875)],
        onChange: var_core_value_sigA468 => var_core_value_sig2E36({
          ...var_core_value_sig680F,
          label: {
            ...(var_core_value_sig680F == null ? undefined : var_core_value_sig680F[ox4c55ae(1614)]),
            format: var_core_value_sigA468
          }
        })
      }), (0, i.jsx)(V, {
        colorPickerFallbackValue: e.defaultChartConfig["textStyle"][ox4c55ae(1393)],
        label: var_core_value_sigBA94.t(ox4c55ae(1033)),
        value: var_core_value_sig1AB4,
        onChange: var_core_value_sig1561 => var_core_value_sig2E36({
          ...var_core_value_sig680F,
          label: {
            ...(var_core_value_sig680F == null ? undefined : var_core_value_sig680F[ox4c55ae(1614)]),
            ...B(var_core_value_sig1561)
          }
        })
      })]
    })]
  });
}
const wa = new Set([e.ChartTypeBits["Heatmap"], e.ChartTypeBits["Boxplot"]]);
function Ta() {
  let [var_core_value_sig885F] = N(ox2ed087(553));
  return var_core_value_sig885F === e.ChartTypeBits[ox2ed087(615)] || var_core_value_sig885F === e[ox2ed087(653)][ox2ed087(861)] || var_core_value_sig885F === e.ChartTypeBits[ox2ed087(1478)] ? (0, i.jsx)(ka, {}) : var_core_value_sig885F === e[ox2ed087(653)][ox2ed087(746)] ? (0, i[ox2ed087(922)])(Na, {}) : var_core_value_sig885F === e[ox2ed087(653)][ox2ed087(1220)] ? (0, i[ox2ed087(922)])(Fa, {}) : var_core_value_sig885F === e.ChartTypeBits[ox2ed087(826)] ? (0, i[ox2ed087(922)])(La, {}) : null;
}
function Ea() {
  let [var_core_value_sigB7C7] = N(ox1eece3(553));
  return var_core_value_sigB7C7 === e[ox1eece3(653)][ox1eece3(746)] ? (0, i[ox1eece3(922)])(sa, {}) : null;
}
function Da(var_core_value_sig6934) {
  let var_core_value_sig2842 = var_core_value_sig6934[ox50dc5e(1361)][ox50dc5e(1579)] > 0 && (var_core_value_sig6934[ox50dc5e(1411)] === undefined || var_core_value_sig6934[ox50dc5e(1596)][ox50dc5e(1579)] < var_core_value_sig6934[ox50dc5e(1411)]),
    var_core_value_sigA5A3 = new Map(),
    var_core_value_sig590F = var_core_value_sig6934[ox50dc5e(1596)][ox50dc5e(1285)](var_core_value_sigDF14 => {
      const var_core_value_sig842F = ox50dc5e;
      let var_core_value_sigC4C0 = var_core_value_sigA5A3[var_core_value_sig842F(977)](var_core_value_sigDF14) ?? 0;
      return var_core_value_sigA5A3.set(var_core_value_sigDF14, var_core_value_sigC4C0 + 1), {
        key: var_core_value_sigDF14 + "-" + var_core_value_sigC4C0,
        value: var_core_value_sigDF14
      };
    });
  return (0, i[ox50dc5e(922)])(I, {
    label: var_core_value_sig6934[ox50dc5e(1614)],
    children: (0, i.jsxs)("div", {
      className: ox50dc5e(612),
      children: [var_core_value_sig590F.map((var_core_value_sig214A, var_core_value_sigCCC3) => (0, i[ox50dc5e(1557)])(ox50dc5e(1998), {
        className: ox50dc5e(1497),
        children: [(0, i[ox50dc5e(922)])(t.Select, {
          className: "univer-w-full\x20!univer-min-w-0",
          options: var_core_value_sig6934[ox50dc5e(1361)],
          value: String(var_core_value_sig214A[ox50dc5e(1324)]),
          onChange: var_core_value_sigCFFA => {
            const var_core_value_sig58C1 = ox50dc5e;
            let var_core_value_sig5090 = var_core_value_sig6934[var_core_value_sig58C1(1596)][var_core_value_sig58C1(1980)]();
            var_core_value_sig5090[var_core_value_sigCCC3] = Number(var_core_value_sigCFFA), var_core_value_sig6934[var_core_value_sig58C1(507)](var_core_value_sig5090);
          }
        }), (0, i[ox50dc5e(922)])(t[ox50dc5e(1420)], {
          "aria-label": var_core_value_sig6934[ox50dc5e(1170)],
          size: ox50dc5e(534),
          variant: ox50dc5e(1245),
          onClick: () => var_core_value_sig6934[ox50dc5e(507)](var_core_value_sig6934[ox50dc5e(1596)][ox50dc5e(1573)]((var_core_value_sig8061, var_core_value_sig4D4C) => var_core_value_sig4D4C !== var_core_value_sigCCC3)),
          children: (0, i[ox50dc5e(922)])(n[ox50dc5e(1494)], {})
        })]
      }, var_core_value_sig214A[ox50dc5e(1198)])), var_core_value_sig2842 && (0, i[ox50dc5e(922)])(t[ox50dc5e(744)], {
        items: var_core_value_sig6934.fields[ox50dc5e(1285)](var_core_value_sig986E => ({
          type: "item",
          children: var_core_value_sig986E[ox50dc5e(1614)],
          onSelect: () => var_core_value_sig6934[ox50dc5e(507)]([...var_core_value_sig6934[ox50dc5e(1596)], Number(var_core_value_sig986E.value)])
        })),
        children: (0, i[ox50dc5e(1557)])(t[ox50dc5e(1420)], {
          "aria-label": var_core_value_sig6934[ox50dc5e(1614)],
          size: ox50dc5e(1499),
          children: [(0, i[ox50dc5e(922)])(n.IncreaseIcon, {
            className: ox50dc5e(1986)
          }), (0, i.jsx)(ox50dc5e(1904), {
            className: ox50dc5e(627),
            children: var_core_value_sig6934[ox50dc5e(1614)]
          })]
        })
      })]
    })
  });
}
function Oa(var_core_value_sigECA2) {
  let var_core_value_sigCAC4 = (0, o.useDependency)(a[ox23c324(1419)]),
    [var_core_value_sig2017] = N(ox23c324(553)),
    [var_core_value_sig49A4, var_core_value_sigA166] = N(ox23c324(1653)),
    [var_core_value_sigEB84] = N(ox23c324(954)),
    [var_core_value_sig3B171, var_core_value_sig78681] = N(ox23c324(623)),
    var_core_value_sig9AFE = var_core_value_sigEB84 ?? [],
    {
      categoryFields: var_core_value_sig244E,
      seriesFields: var_core_value_sigD4E9
    } = Bi(var_core_value_sig9AFE);
  if (!var_core_value_sig2017 || [e[ox23c324(653)][ox23c324(615)], e.ChartTypeBits[ox23c324(861)], e[ox23c324(653)][ox23c324(1478)], e[ox23c324(653)][ox23c324(1220)], e[ox23c324(653)][ox23c324(746)], e.ChartTypeBits[ox23c324(826)]][ox23c324(1399)](var_core_value_sig537C => e[ox23c324(1226)].baseOn(var_core_value_sig2017, var_core_value_sig537C))) return null;
  if (var_core_value_sig2017 === e[ox23c324(653)][ox23c324(1757)] || var_core_value_sig2017 === e.ChartTypeBits[ox23c324(572)]) {
    var var_core_value_sig969F, var_core_value_sig6C52;
    let var_core_value_sigBBBC = var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4[ox23c324(630)],
      var_core_value_sig5440 = (var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC[ox23c324(1086)]) ?? Number(((var_core_value_sig969F = var_core_value_sig9AFE[0]) == null ? undefined : var_core_value_sig969F[ox23c324(1324)]) ?? 0),
      var_core_value_sigE28B = (var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC[ox23c324(1519)]) ?? Number(((var_core_value_sig6C52 = var_core_value_sig9AFE[1]) == null ? undefined : var_core_value_sig6C52[ox23c324(1324)]) ?? 1),
      var_core_value_sig0FD9 = var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC[ox23c324(759)],
      var_core_value_sig5649 = var_core_value_sigC368 => var_core_value_sigA166({
        ...var_core_value_sig49A4,
        edge: {
          sourceIndex: var_core_value_sig5440,
          targetIndex: var_core_value_sigE28B,
          ...var_core_value_sigBBBC,
          ...var_core_value_sigC368
        }
      });
    return (0, i[ox23c324(1557)])(ox23c324(1998), {
      className: ox23c324(1556),
      children: [(0, i[ox23c324(922)])(A, {
        label: var_core_value_sigCAC4.t("chart-ui.chord.source"),
        options: var_core_value_sig244E,
        value: String(var_core_value_sig5440),
        onChange: var_core_value_sigAD561 => var_core_value_sig5649({
          sourceIndex: Number(var_core_value_sigAD561)
        })
      }), (0, i[ox23c324(922)])(A, {
        label: var_core_value_sigCAC4.t(ox23c324(1432)),
        options: var_core_value_sig244E,
        value: String(var_core_value_sigE28B),
        onChange: var_core_value_sigDB4A => var_core_value_sig5649({
          targetIndex: Number(var_core_value_sigDB4A)
        })
      }), (0, i[ox23c324(922)])(A, {
        label: var_core_value_sigCAC4.t(ox23c324(545)),
        options: var_core_value_sigD4E9,
        value: var_core_value_sig0FD9 === undefined ? "" : String(var_core_value_sig0FD9),
        onChange: var_core_value_sig6418 => var_core_value_sig5649({
          valueIndex: var_core_value_sig6418 === "" ? undefined : Number(var_core_value_sig6418)
        })
      }), var_core_value_sigECA2[ox23c324(1974)]]
    });
  }
  if (e[ox23c324(1226)][ox23c324(1429)](var_core_value_sig2017, e[ox23c324(653)].Bubble)) {
    var var_core_value_sig3A441, var_core_value_sig9631;
    let var_core_value_sigAF82 = var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4[ox23c324(1491)],
      var_core_value_sig21A2 = (var_core_value_sigAF82 == null ? undefined : var_core_value_sigAF82[ox23c324(1702)]) ?? Number(((var_core_value_sig3A441 = var_core_value_sig9AFE[0]) == null ? undefined : var_core_value_sig3A441.value) ?? 0),
      var_core_value_sig5C1D = (var_core_value_sigAF82 == null ? undefined : var_core_value_sigAF82.yIndex) ?? Number(((var_core_value_sig9631 = var_core_value_sig9AFE[1]) == null ? undefined : var_core_value_sig9631[ox23c324(1324)]) ?? 1),
      var_core_value_sig4CBA = var_core_value_sigCAC4.t(ox23c324(1569));
    return (0, i[ox23c324(1557)])(ox23c324(1998), {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
      children: [(0, i[ox23c324(922)])(A, {
        allowClear: true,
        clearLabel: var_core_value_sig4CBA,
        label: var_core_value_sigCAC4.t("chart-ui.common.category"),
        options: var_core_value_sig244E,
        value: (var_core_value_sigAF82 == null ? undefined : var_core_value_sigAF82.labelIndex) === undefined ? "" : String(var_core_value_sigAF82[ox23c324(1798)]),
        onChange: var_core_value_sig1896 => var_core_value_sigA166({
          ...var_core_value_sig49A4,
          bubble: {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D,
            labelIndex: var_core_value_sig1896 === "" ? undefined : Number(var_core_value_sig1896)
          }
        }),
        onClear: () => {
          const var_core_value_sig0285 = ox23c324;
          let var_core_value_sig777D = {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D
          };
          delete var_core_value_sig777D[var_core_value_sig0285(1798)], delete var_core_value_sig777D.seriesIndex, var_core_value_sigA166({
            ...var_core_value_sig49A4,
            bubble: var_core_value_sig777D,
            categoryIndex: null,
            categoryIndexes: []
          });
        }
      }), (0, i[ox23c324(922)])(A, {
        allowClear: true,
        clearLabel: var_core_value_sig4CBA,
        label: var_core_value_sigCAC4.t(ox23c324(1738)),
        options: var_core_value_sig244E,
        value: (var_core_value_sigAF82 == null ? undefined : var_core_value_sigAF82[ox23c324(1912)]) === undefined ? "" : String(var_core_value_sigAF82[ox23c324(1912)]),
        onChange: var_core_value_sig3F4C => var_core_value_sigA166({
          ...var_core_value_sig49A4,
          bubble: {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D,
            seriesIndex: var_core_value_sig3F4C === "" ? undefined : Number(var_core_value_sig3F4C)
          }
        }),
        onClear: () => {
          const var_core_value_sigD65A = ox23c324;
          let var_core_value_sig5A13 = {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D
          };
          delete var_core_value_sig5A13[var_core_value_sigD65A(1912)];
          let var_core_value_sigF593 = typeof var_core_value_sig5A13.labelIndex == "number" ? var_core_value_sig5A13.labelIndex : undefined;
          var_core_value_sigF593 === undefined && delete var_core_value_sig5A13.labelIndex, var_core_value_sigA166({
            ...var_core_value_sig49A4,
            bubble: var_core_value_sig5A13,
            categoryIndex: var_core_value_sigF593 ?? null,
            categoryIndexes: var_core_value_sigF593 === undefined ? [] : [var_core_value_sigF593]
          });
        }
      }), (0, i.jsxs)(O, {
        children: [(0, i.jsx)(A, {
          label: var_core_value_sigCAC4.t("chart-ui.common.horizontalAxis"),
          options: var_core_value_sigD4E9,
          value: String(var_core_value_sig21A2),
          onChange: var_core_value_sig3607 => var_core_value_sigA166({
            ...var_core_value_sig49A4,
            bubble: {
              ...var_core_value_sigAF82,
              xIndex: Number(var_core_value_sig3607),
              yIndex: var_core_value_sig5C1D
            }
          })
        }), (0, i[ox23c324(922)])(A, {
          label: var_core_value_sigCAC4.t(ox23c324(1746)),
          options: var_core_value_sigD4E9,
          value: String(var_core_value_sig5C1D),
          onChange: var_core_value_sigB512 => var_core_value_sigA166({
            ...var_core_value_sig49A4,
            bubble: {
              ...var_core_value_sigAF82,
              xIndex: var_core_value_sig21A2,
              yIndex: Number(var_core_value_sigB512)
            }
          })
        })]
      }), (0, i.jsx)(A, {
        allowClear: true,
        clearLabel: var_core_value_sig4CBA,
        label: var_core_value_sigCAC4.t(ox23c324(1667)),
        options: var_core_value_sigD4E9,
        value: (var_core_value_sigAF82 == null ? undefined : var_core_value_sigAF82.sizeIndex) === undefined ? "" : String(var_core_value_sigAF82[ox23c324(1911)]),
        onChange: var_core_value_sigF2E6 => var_core_value_sigA166({
          ...var_core_value_sig49A4,
          bubble: {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D,
            sizeIndex: var_core_value_sigF2E6 === "" ? undefined : Number(var_core_value_sigF2E6)
          }
        }),
        onClear: () => {
          const var_core_value_sig34C8 = ox23c324;
          let var_core_value_sigB744 = {
            ...var_core_value_sigAF82,
            xIndex: var_core_value_sig21A2,
            yIndex: var_core_value_sig5C1D
          };
          delete var_core_value_sigB744[var_core_value_sig34C8(1911)], var_core_value_sigA166({
            ...var_core_value_sig49A4,
            bubble: var_core_value_sigB744,
            seriesIndexes: [var_core_value_sig21A2, var_core_value_sig5C1D]
          });
        }
      })]
    });
  }
  let var_core_value_sig8407 = var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4[ox23c324(1780)],
    var_core_value_sig635F = (var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4[ox23c324(1238)]) ?? [],
    var_core_value_sig79E0 = !wa[ox23c324(863)](var_core_value_sig2017),
    var_core_value_sig1E28 = var_core_value_sig2017 === e[ox23c324(653)][ox23c324(1546)] ? ox23c324(1323) : ox23c324(925);
  return (0, i[ox23c324(1557)])(ox23c324(1998), {
    className: ox23c324(1556),
    children: [(0, i[ox23c324(922)])(A, {
      allowClear: dn(var_core_value_sig2017),
      clearLabel: var_core_value_sigCAC4.t(ox23c324(1569)),
      label: var_core_value_sigCAC4.t(var_core_value_sig1E28),
      options: var_core_value_sig244E,
      value: typeof var_core_value_sig8407 == ox23c324(1577) ? String(var_core_value_sig8407) : "",
      onChange: var_core_value_sig8E65 => var_core_value_sigA166(var_core_value_sig2017 === e[ox23c324(653)][ox23c324(1546)] ? {
        categoryIndexes: [Number(var_core_value_sig8E65)]
      } : {
        ...var_core_value_sig49A4,
        categoryIndex: Number(var_core_value_sig8E65)
      }),
      onClear: () => var_core_value_sigA166(var_core_value_sig2017 === e[ox23c324(653)].Scatter ? {
        categoryIndexes: []
      } : {
        ...var_core_value_sig49A4,
        categoryIndex: null,
        categoryIndexes: []
      })
    }), var_core_value_sig79E0 && (0, i[ox23c324(922)])(H, {
      inlineLabel: true,
      checked: (var_core_value_sig3B171 == null ? undefined : var_core_value_sig3B171[ox23c324(924)]) === true,
      label: var_core_value_sigCAC4.t(ox23c324(915)),
      onChange: var_core_value_sig772C => var_core_value_sig78681({
        ...(var_core_value_sig3B171 ?? {}),
        aggregate: var_core_value_sig772C ? true : null
      })
    }), (0, i[ox23c324(922)])(Da, {
      fields: var_core_value_sigD4E9,
      label: var_core_value_sigCAC4.t("chart-ui.common.series"),
      maxValues: e[ox23c324(1226)][ox23c324(1429)](var_core_value_sig2017, e[ox23c324(653)][ox23c324(600)]) ? 1 : undefined,
      removeLabel: var_core_value_sigCAC4.t(ox23c324(1569)),
      values: var_core_value_sig635F,
      onChange: var_core_value_sigF309 => var_core_value_sigA166({
        ...var_core_value_sig49A4,
        seriesIndexes: var_core_value_sigF309
      })
    }), var_core_value_sigECA2[ox23c324(581)] && (0, i[ox23c324(922)])(H, {
      inlineLabel: true,
      checked: typeof var_core_value_sig8407 == ox23c324(1577),
      label: var_core_value_sigECA2[ox23c324(581)],
      onChange: var_core_value_sig44F9 => {
        const var_core_value_sigE532 = ox23c324;
        if (var_core_value_sig44F9) {
          let [var_core_value_sigEAE2, ...var_core_value_sigE68A] = var_core_value_sig635F;
          if (var_core_value_sigEAE2 === undefined) return;
          var_core_value_sigA166({
            ...var_core_value_sig49A4,
            categoryIndex: var_core_value_sigEAE2,
            seriesIndexes: var_core_value_sigE68A
          });
          return;
        }
        var_core_value_sigA166({
          ...var_core_value_sig49A4,
          categoryIndex: null,
          seriesIndexes: typeof var_core_value_sig8407 == var_core_value_sigE532(1577) && !var_core_value_sig635F[var_core_value_sigE532(1868)](var_core_value_sig8407) ? [var_core_value_sig8407, ...var_core_value_sig635F] : var_core_value_sig635F
        });
      }
    }), var_core_value_sigECA2[ox23c324(1974)]]
  });
}
function ka() {
  let var_core_value_sigEEC3 = (0, o[ox2db4c3(858)])(a[ox2db4c3(1419)]),
    [var_core_value_sigFAEC] = N(ox2db4c3(553)),
    [var_core_value_sig1282, var_core_value_sig80D0] = N(ox2db4c3(1653)),
    [var_core_value_sig6CEE] = N(ox2db4c3(954), []);
  return (0, i[ox2db4c3(1557)])(ox2db4c3(1998), {
    className: ox2db4c3(1556),
    children: [(0, i[ox2db4c3(922)])(zi, {
      chartType: var_core_value_sigFAEC,
      mapping: var_core_value_sig1282 ?? {},
      fields: var_core_value_sig6CEE,
      labels: {
        candlestick: {
          category: var_core_value_sigEEC3.t(ox2db4c3(925)),
          open: var_core_value_sigEEC3.t("chart-ui.candlestick.open"),
          high: var_core_value_sigEEC3.t(ox2db4c3(812)),
          low: var_core_value_sigEEC3.t(ox2db4c3(1587)),
          close: var_core_value_sigEEC3.t(ox2db4c3(995))
        },
        histogramValue: var_core_value_sigEEC3.t("chart-ui.common.valueField"),
        treemapHierarchy: var_core_value_sigEEC3.t(ox2db4c3(1670)),
        treemapValue: var_core_value_sigEEC3.t(ox2db4c3(749))
      },
      onChange: var_core_value_sigF381 => var_core_value_sig80D0({
        ...var_core_value_sig1282,
        ...var_core_value_sigF381
      })
    }), var_core_value_sigFAEC === e[ox2db4c3(653)][ox2db4c3(861)] && (0, i[ox2db4c3(922)])(ja, {})]
  });
}
const Aa = "auto";
function ja() {
  var var_core_value_sig4B27, var_core_value_sig153F, var_core_value_sigC847;
  let var_core_value_sig114E = (0, o.useDependency)(a[ox9ee8a9(1419)]),
    [var_core_value_sig88EA, var_core_value_sig4E97] = N(ox9ee8a9(1346)),
    var_core_value_sigBE44 = var_core_value_sig88EA ?? {},
    var_core_value_sigE675 = ((var_core_value_sig4B27 = var_core_value_sigBE44[ox9ee8a9(1308)]) == null ? undefined : var_core_value_sig4B27.mode) ?? Aa;
  return (0, i[ox9ee8a9(1557)])(i[ox9ee8a9(1762)], {
    children: [(0, i.jsx)(A, {
      label: var_core_value_sig114E.t(ox9ee8a9(976)),
      options: [{
        value: Aa,
        label: var_core_value_sig114E.t(ox9ee8a9(893))
      }, {
        value: e[ox9ee8a9(947)][ox9ee8a9(1002)],
        label: var_core_value_sig114E.t(ox9ee8a9(1298))
      }, {
        value: e[ox9ee8a9(947)].Width,
        label: var_core_value_sig114E.t("chart-ui.histogram.width")
      }],
      value: var_core_value_sigE675,
      onChange: var_core_value_sigCB92 => {
        const var_core_value_sigC844 = ox9ee8a9;
        let var_core_value_sig2ED4;
        switch (var_core_value_sigCB92) {
          case Aa:
            var_core_value_sig2ED4 = null;
            break;
          case e.HistogramBinningMode[var_core_value_sigC844(1002)]:
            var_core_value_sig2ED4 = {
              mode: e[var_core_value_sigC844(947)].Count,
              count: e.DEFAULT_HISTOGRAM_BIN_COUNT
            };
            break;
          default:
            var_core_value_sig2ED4 = {
              mode: e.HistogramBinningMode["Width"],
              width: e[var_core_value_sigC844(1665)]
            };
        }
        var_core_value_sig4E97({
          ...var_core_value_sigBE44,
          binning: var_core_value_sig2ED4
        });
      }
    }), ((var_core_value_sig153F = var_core_value_sigBE44[ox9ee8a9(1308)]) == null ? undefined : var_core_value_sig153F[ox9ee8a9(1122)]) === e[ox9ee8a9(947)][ox9ee8a9(1002)] && (0, i[ox9ee8a9(922)])(k, {
      label: var_core_value_sig114E.t(ox9ee8a9(903)),
      max: e[ox9ee8a9(1601)],
      min: 1,
      precision: 0,
      step: 1,
      value: var_core_value_sigBE44[ox9ee8a9(1308)][ox9ee8a9(1602)] ?? null,
      onChange: var_core_value_sig0477 => var_core_value_sig0477 !== null && var_core_value_sig4E97({
        ...var_core_value_sigBE44,
        binning: {
          mode: e.HistogramBinningMode["Count"],
          count: var_core_value_sig0477
        }
      })
    }), ((var_core_value_sigC847 = var_core_value_sigBE44[ox9ee8a9(1308)]) == null ? undefined : var_core_value_sigC847[ox9ee8a9(1122)]) === e[ox9ee8a9(947)][ox9ee8a9(771)] && (0, i[ox9ee8a9(922)])(k, {
      label: var_core_value_sig114E.t(ox9ee8a9(598)),
      min: 2 ** -52,
      value: var_core_value_sigBE44.binning[ox9ee8a9(989)] ?? null,
      onChange: var_core_value_sig6FDF => var_core_value_sig6FDF !== null && var_core_value_sig4E97({
        ...var_core_value_sigBE44,
        binning: {
          mode: e[ox9ee8a9(947)][ox9ee8a9(771)],
          width: var_core_value_sig6FDF
        }
      })
    }), (0, i[ox9ee8a9(1557)])(O, {
      children: [(0, i[ox9ee8a9(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        label: var_core_value_sig114E.t(ox9ee8a9(1151)),
        value: var_core_value_sigBE44[ox9ee8a9(789)] ?? null,
        onChange: var_core_value_sig27C4 => var_core_value_sig4E97({
          ...var_core_value_sigBE44,
          underflowThreshold: var_core_value_sig27C4
        })
      }), (0, i[ox9ee8a9(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        label: var_core_value_sig114E.t(ox9ee8a9(632)),
        value: var_core_value_sigBE44[ox9ee8a9(792)] ?? null,
        onChange: var_core_value_sig3E1A => var_core_value_sig4E97({
          ...var_core_value_sigBE44,
          overflowThreshold: var_core_value_sig3E1A
        })
      })]
    })]
  });
}
function Ma() {
  let [var_core_value_sig4346] = N("chartType");
  return var_core_value_sig4346 === e[ox32bdac(653)][ox32bdac(615)] ? (0, i[ox32bdac(922)])(Vi, {}) : var_core_value_sig4346 === e[ox32bdac(653)][ox32bdac(861)] ? (0, i[ox32bdac(922)])(Hi, {}) : var_core_value_sig4346 === e[ox32bdac(653)][ox32bdac(1478)] ? (0, i[ox32bdac(922)])(Gi, {}) : var_core_value_sig4346 === e[ox32bdac(653)][ox32bdac(746)] ? (0, i.jsx)(ox32bdac(1998), {
    className: ox32bdac(1945),
    children: (0, i.jsx)(Pa, {})
  }) : var_core_value_sig4346 === e.ChartTypeBits["Sunburst"] ? (0, i.jsx)(ox32bdac(1998), {
    className: ox32bdac(1945),
    children: (0, i[ox32bdac(922)])(Ia, {})
  }) : var_core_value_sig4346 === e[ox32bdac(653)][ox32bdac(826)] ? (0, i[ox32bdac(922)])(ox32bdac(1998), {
    className: ox32bdac(1945),
    children: (0, i[ox32bdac(922)])(Ra, {})
  }) : null;
}
function Na() {
  return (0, i[ox3e5f9c(922)])(ox3e5f9c(1998), {
    className: ox3e5f9c(1556),
    children: (0, i[ox3e5f9c(922)])(ta, {})
  });
}
function Pa() {
  return (0, i.jsxs)(ox4d5abf(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i.jsx)(fa, {}), (0, i.jsx)(da, {}), (0, i.jsx)(la, {}), (0, i.jsx)(ca, {})]
  });
}
function Fa() {
  return (0, i.jsx)(ox20b233(1998), {
    className: ox20b233(1556),
    children: (0, i.jsx)(xa, {})
  });
}
function Ia() {
  let var_core_value_sigB49C = (0, o.useDependency)(a[ox2dd235(1419)]),
    [var_core_value_sigA044, var_core_value_sigD2F3] = (0, r[ox2dd235(1825)])(ox2dd235(1614));
  return (0, i[ox2dd235(1557)])("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [(0, i[ox2dd235(922)])(A, {
      label: var_core_value_sigB49C.t(ox2dd235(1705)),
      options: [{
        value: ox2dd235(1211),
        label: var_core_value_sigB49C.t(ox2dd235(1472))
      }, {
        value: ox2dd235(1614),
        label: var_core_value_sigB49C.t("chart-ui.common.label")
      }],
      value: var_core_value_sigA044,
      onChange: var_core_value_sigD2F3
    }), var_core_value_sigA044 === ox2dd235(1211) ? (0, i[ox2dd235(922)])(ya, {}) : (0, i[ox2dd235(922)])(Ca, {})]
  });
}
function La() {
  return (0, i[ox5e24ed(922)])("div", {
    className: ox5e24ed(1556),
    children: (0, i[ox5e24ed(922)])(qi, {})
  });
}
function Ra() {
  return (0, i[ox516f61(1557)])(ox516f61(1998), {
    className: ox516f61(1556),
    children: [(0, i[ox516f61(922)])($i, {}), (0, i[ox516f61(922)])(Qi, {}), (0, i.jsx)(ea, {})]
  });
}
const za = [e.LabelContentType["CategoryName"], e.LabelContentType["SeriesName"], e.LabelContentType["Value"]],
  Ba = [e.ChartWaterfallStyleTarget["Positive"], e.ChartWaterfallStyleTarget["Negative"], e.ChartWaterfallStyleTarget["Subtotal"]],
  Va = {
    [e.ChartWaterfallStyleTarget["Positive"]]: "chart-ui.waterfall.positive",
    [e.ChartWaterfallStyleTarget["Negative"]]: "chart-ui.waterfall.negative",
    [e.ChartWaterfallStyleTarget["Subtotal"]]: "chart-ui.waterfall.subtotal"
  },
  Ha = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    connector: false,
    fillOpacity: e.defaultChartConfig["borderStyle"].opacity,
    labelContentType: e.LabelContentType["Value"],
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    textColor: e.defaultChartConfig["textStyle"].color
  };
function Ua(var_core_value_sig27CD, var_core_value_sig8977) {
  return {
    ...var_core_value_sig27CD,
    ...var_core_value_sig8977,
    ...(var_core_value_sig27CD != null && var_core_value_sig27CD.border || var_core_value_sig8977 != null && var_core_value_sig8977.border ? {
      border: {
        ...(var_core_value_sig27CD == null ? undefined : var_core_value_sig27CD[ox4b34f9(1464)]),
        ...(var_core_value_sig8977 == null ? undefined : var_core_value_sig8977.border)
      }
    } : {}),
    ...(var_core_value_sig27CD != null && var_core_value_sig27CD[ox4b34f9(1614)] || var_core_value_sig8977 != null && var_core_value_sig8977.label ? {
      label: {
        ...(var_core_value_sig27CD == null ? undefined : var_core_value_sig27CD[ox4b34f9(1614)]),
        ...(var_core_value_sig8977 == null ? undefined : var_core_value_sig8977.label)
      }
    } : {}),
    ...(var_core_value_sig27CD != null && var_core_value_sig27CD.point || var_core_value_sig8977 != null && var_core_value_sig8977[ox4b34f9(1178)] ? {
      point: {
        ...(var_core_value_sig27CD == null ? undefined : var_core_value_sig27CD[ox4b34f9(1178)]),
        ...(var_core_value_sig8977 == null ? undefined : var_core_value_sig8977[ox4b34f9(1178)])
      }
    } : {}),
    ...(var_core_value_sig27CD != null && var_core_value_sig27CD[ox4b34f9(1307)] || var_core_value_sig8977 != null && var_core_value_sig8977.dataPoints ? {
      dataPoints: {
        ...(var_core_value_sig27CD == null ? undefined : var_core_value_sig27CD[ox4b34f9(1307)]),
        ...(var_core_value_sig8977 == null ? undefined : var_core_value_sig8977.dataPoints)
      }
    } : {})
  };
}
function Wa(var_core_value_sigE931) {
  let var_core_value_sig9F9C = (0, o[ox23de6c(858)])(a[ox23de6c(1419)]),
    [var_core_value_sig0728] = N(ox23de6c(553), e[ox23de6c(653)][ox23de6c(1859)]),
    [var_core_value_sigDC83, var_core_value_sig56A8] = N(ox23de6c(1624)),
    [var_core_value_sigF487, var_core_value_sigC62E] = N("allSeriesStyle"),
    [var_core_value_sigCD50, var_core_value_sig51C4] = N(ox23de6c(837), []),
    [var_core_value_sigEECD, var_core_value_sigB655] = (0, r[ox23de6c(1825)])({
      source: var_core_value_sigE931.selectedSeriesId,
      value: var_core_value_sigE931[ox23de6c(1717)] ?? ox23de6c(1542)
    }),
    var_core_value_sigF30A = var_core_value_sigEECD[ox23de6c(1488)] === var_core_value_sigE931[ox23de6c(1717)] ? var_core_value_sigEECD[ox23de6c(1324)] : var_core_value_sigE931[ox23de6c(1717)] ?? ox23de6c(1542),
    var_core_value_sigD81A = var_core_value_sig7FB0 => var_core_value_sigB655({
      source: var_core_value_sigE931[ox23de6c(1717)],
      value: var_core_value_sig7FB0
    }),
    var_core_value_sigBE17 = var_core_value_sigE931[ox23de6c(1902)] ?? At;
  if (!e[ox23de6c(1226)].baseOn(var_core_value_sig0728, e[ox23de6c(653)][ox23de6c(1766)])) return null;
  let var_core_value_sigBB5E = var_core_value_sigF30A === "all" ? null : Number(var_core_value_sigF30A),
    var_core_value_sigB4401 = (var_core_value_sigDC83 == null ? undefined : var_core_value_sigDC83[ox23de6c(1824)]) === e[ox23de6c(1195)][ox23de6c(1747)] && var_core_value_sigBB5E !== null,
    var_core_value_sig9D0F = var_core_value_sigBB5E === null ? undefined : var_core_value_sigCD50[ox23de6c(1507)](var_core_value_sig5215 => var_core_value_sig5215[ox23de6c(1301)] === var_core_value_sigBB5E),
    var_core_value_sig0354 = (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[ox23de6c(1169)].label) ?? {},
    var_core_value_sig12F4 = var_core_value_sigBB5E === null ? (var_core_value_sigF487 == null ? undefined : var_core_value_sigF487[ox23de6c(1614)]) ?? {} : {
      ...(var_core_value_sigF487 == null ? undefined : var_core_value_sigF487[ox23de6c(1614)]),
      ...var_core_value_sig0354
    },
    var_core_value_sigDCEC = z(var_core_value_sig12F4, R),
    var_core_value_sigB5C8 = za[ox23de6c(1573)](var_core_value_sig5204 => e[ox23de6c(1226)][ox23de6c(863)](var_core_value_sig12F4[ox23de6c(1108)] ?? var_core_value_sigE931[ox23de6c(801)][ox23de6c(1655)], var_core_value_sig5204)).map(String),
    var_core_value_sig8320 = var_core_value_sig5E11 => {
      const var_core_value_sig4D58 = ox23de6c;
      var var_core_value_sig2DBD, var_core_value_sig424E;
      let var_core_value_sigF481 = (var_core_value_sigDC83 == null || (var_core_value_sig2DBD = var_core_value_sigDC83[var_core_value_sig4D58(1692)]) == null ? undefined : var_core_value_sig2DBD[var_core_value_sig5E11]) ?? {},
        var_core_value_sigD7F2 = var_core_value_sigBB5E === null ? var_core_value_sigF481 : (var_core_value_sig9D0F == null || (var_core_value_sig424E = var_core_value_sig9D0F[var_core_value_sig4D58(1169)][var_core_value_sig4D58(794)]) == null ? undefined : var_core_value_sig424E[var_core_value_sig5E11]) ?? {};
      return var_core_value_sigBB5E === null ? var_core_value_sigD7F2 : Ua(var_core_value_sigF481, var_core_value_sigD7F2);
    },
    var_core_value_sig1C1B = (var_core_value_sig7CF3, var_core_value_sig9DC6) => {
      const var_core_value_sig6643 = ox23de6c;
      var var_core_value_sig4124, var_core_value_sigBF1C;
      let var_core_value_sigEEEF = (var_core_value_sigDC83 == null || (var_core_value_sig4124 = var_core_value_sigDC83[var_core_value_sig6643(1692)]) == null ? undefined : var_core_value_sig4124[var_core_value_sig7CF3]) ?? {};
      if (var_core_value_sigBB5E === null) {
        var_core_value_sig56A8({
          ...var_core_value_sigDC83,
          styles: {
            ...(var_core_value_sigDC83 == null ? undefined : var_core_value_sigDC83[var_core_value_sig6643(1692)]),
            [var_core_value_sig7CF3]: Ua(var_core_value_sigEEEF, var_core_value_sig9DC6)
          }
        });
        return;
      }
      let var_core_value_sig9A01 = (var_core_value_sig9D0F == null || (var_core_value_sigBF1C = var_core_value_sig9D0F[var_core_value_sig6643(1169)][var_core_value_sig6643(794)]) == null ? undefined : var_core_value_sigBF1C[var_core_value_sig7CF3]) ?? {};
      var_core_value_sig51C4([{
        dataPointOptions: (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sig6643(1251)]) ?? [],
        name: (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sig6643(1391)]) ?? "",
        selector: var_core_value_sigBB5E,
        style: {
          ...(var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sig6643(1169)]),
          waterfallStyles: {
            ...(var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sig6643(1169)][var_core_value_sig6643(794)]),
            [var_core_value_sig7CF3]: Ua(var_core_value_sig9A01, var_core_value_sig9DC6)
          }
        }
      }]);
    },
    var_core_value_sig70FD = var_core_value_sig674F => {
      const var_core_value_sigC8F6 = ox23de6c;
      if (var_core_value_sigBB5E === null) {
        var_core_value_sigC62E({
          ...var_core_value_sigF487,
          label: {
            ...(var_core_value_sigF487 == null ? undefined : var_core_value_sigF487[var_core_value_sigC8F6(1614)]),
            ...var_core_value_sig674F
          }
        });
        return;
      }
      var_core_value_sig51C4([{
        dataPointOptions: (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sigC8F6(1251)]) ?? [],
        name: (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sigC8F6(1391)]) ?? "",
        selector: var_core_value_sigBB5E,
        style: {
          ...(var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sigC8F6(1169)]),
          label: {
            ...var_core_value_sig0354,
            ...var_core_value_sig674F
          }
        }
      }]);
    },
    var_core_value_sig988F = var_core_value_sig8A26 => {
      const var_core_value_sigD073 = ox23de6c;
      var var_core_value_sigF631, var_core_value_sig2278;
      let var_core_value_sig7053 = var_core_value_sig8320(var_core_value_sig8A26),
        var_core_value_sig52F1 = var_core_value_sig7053[var_core_value_sigD073(1464)] ?? {},
        var_core_value_sig1E74 = var_core_value_sig9F9C.t(Va[var_core_value_sig8A26]),
        var_core_value_sig1E84 = {
          isAllSeries: var_core_value_sigBB5E === null,
          seriesName: (var_core_value_sig9D0F == null ? undefined : var_core_value_sig9D0F[var_core_value_sigD073(1391)]) ?? "",
          target: var_core_value_sig8A26
        },
        var_core_value_sig133B = ((var_core_value_sigF631 = var_core_value_sigE931[var_core_value_sigD073(667)]) == null ? undefined : var_core_value_sigF631[var_core_value_sigD073(678)](var_core_value_sigE931, var_core_value_sig1E84)) ?? (var_core_value_sigBB5E !== null || var_core_value_sig8A26 === e[var_core_value_sigD073(706)][var_core_value_sigD073(617)]),
        var_core_value_sig69B8 = ((var_core_value_sig2278 = var_core_value_sigE931[var_core_value_sigD073(834)]) == null ? undefined : var_core_value_sig2278[var_core_value_sigD073(678)](var_core_value_sigE931, var_core_value_sig1E84)) ?? "",
        var_core_value_sig983D = var_core_value_sig7053.name ?? var_core_value_sig69B8;
      return (0, i[var_core_value_sigD073(922)])(I, {
        label: var_core_value_sig1E74,
        children: (0, i[var_core_value_sigD073(1557)])(var_core_value_sigD073(1998), {
          className: var_core_value_sigD073(1556),
          children: [var_core_value_sig133B && (0, i[var_core_value_sigD073(922)])(j, {
            allowClear: true,
            commitMode: var_core_value_sigD073(939),
            label: var_core_value_sig9F9C.t(var_core_value_sigD073(1844)),
            value: var_core_value_sig983D,
            onChange: var_core_value_sig3E68 => var_core_value_sig1C1B(var_core_value_sig8A26, {
              name: var_core_value_sig3E68
            })
          }), (0, i[var_core_value_sigD073(1557)])(O, {
            children: [(0, i.jsx)(M, {
              emptyLabel: var_core_value_sig9F9C.t(var_core_value_sigD073(819)),
              label: var_core_value_sig9F9C.t(var_core_value_sigD073(677)),
              pickerFallbackValue: var_core_value_sigE931[var_core_value_sigD073(801)][var_core_value_sigD073(1082)],
              resetLabel: var_core_value_sig9F9C.t(var_core_value_sigD073(819)),
              value: typeof var_core_value_sig7053[var_core_value_sigD073(1393)] == "string" ? var_core_value_sig7053[var_core_value_sigD073(1393)] : null,
              onChange: var_core_value_sigF4C5 => var_core_value_sig1C1B(var_core_value_sig8A26, {
                color: var_core_value_sigF4C5
              })
            }), (0, i[var_core_value_sigD073(922)])(k, {
              label: var_core_value_sig9F9C.t("chart-ui.common.opacity"),
              max: U.max,
              min: U[var_core_value_sigD073(1337)],
              step: U[var_core_value_sigD073(1939)],
              value: var_core_value_sig7053[var_core_value_sigD073(944)] ?? var_core_value_sigE931[var_core_value_sigD073(801)][var_core_value_sigD073(944)],
              onChange: var_core_value_sig5410 => var_core_value_sig1C1B(var_core_value_sig8A26, {
                fillOpacity: var_core_value_sig5410
              })
            })]
          }), (0, i[var_core_value_sigD073(1557)])(O, {
            children: [(0, i.jsx)(M, {
              emptyLabel: var_core_value_sig9F9C.t(var_core_value_sigD073(819)),
              label: var_core_value_sig9F9C.t(var_core_value_sigD073(1196)),
              pickerFallbackValue: var_core_value_sigE931[var_core_value_sigD073(801)][var_core_value_sigD073(1082)],
              resetLabel: var_core_value_sig9F9C.t("chart-ui.editor.defaultColor"),
              value: var_core_value_sig52F1.color ?? null,
              onChange: var_core_value_sig492F => var_core_value_sig1C1B(var_core_value_sig8A26, {
                border: {
                  ...var_core_value_sig52F1,
                  color: var_core_value_sig492F
                }
              })
            }), (0, i[var_core_value_sigD073(922)])(k, {
              allowClear: true,
              allowEmpty: true,
              emptyLabel: var_core_value_sig9F9C.t("chart-ui.common.default"),
              label: var_core_value_sig9F9C.t(var_core_value_sigD073(1128)),
              min: 0,
              value: var_core_value_sig52F1[var_core_value_sigD073(989)] ?? null,
              onChange: var_core_value_sig8EA0 => var_core_value_sig1C1B(var_core_value_sig8A26, {
                border: {
                  ...var_core_value_sig52F1,
                  width: var_core_value_sig8EA0
                }
              })
            })]
          }), (0, i.jsxs)(O, {
            children: [(0, i[var_core_value_sigD073(922)])(k, {
              label: var_core_value_sig9F9C.t(var_core_value_sigD073(1848)),
              max: U[var_core_value_sigD073(628)],
              min: U[var_core_value_sigD073(1337)],
              step: U[var_core_value_sigD073(1939)],
              value: var_core_value_sig52F1[var_core_value_sigD073(577)] ?? var_core_value_sigE931[var_core_value_sigD073(801)][var_core_value_sigD073(1021)],
              onChange: var_core_value_sigA6F6 => var_core_value_sig1C1B(var_core_value_sig8A26, {
                border: {
                  ...var_core_value_sig52F1,
                  opacity: var_core_value_sigA6F6
                }
              })
            }), (0, i.jsx)(A, {
              label: var_core_value_sig9F9C.t(var_core_value_sigD073(844)),
              options: _n[var_core_value_sigD073(1285)](({
                labelKey: var_core_value_sigCDDA,
                value: var_core_value_sigE243
              }) => ({
                label: var_core_value_sig9F9C.t(var_core_value_sigCDDA),
                value: var_core_value_sigE243
              })),
              value: var_core_value_sig52F1[var_core_value_sigD073(704)] ?? var_core_value_sigE931[var_core_value_sigD073(801)].borderDashType,
              onChange: var_core_value_sig74A8 => var_core_value_sig1C1B(var_core_value_sig8A26, {
                border: {
                  ...var_core_value_sig52F1,
                  dashType: var_core_value_sig74A8
                }
              })
            })]
          })]
        })
      }, var_core_value_sig8A26);
    };
  return (0, i[ox23de6c(1557)])(ox23de6c(1998), {
    className: ox23de6c(1556),
    children: [(0, i[ox23de6c(922)])(A, {
      label: var_core_value_sig9F9C.t(ox23de6c(672)),
      options: [{
        value: ox23de6c(1542),
        label: var_core_value_sig9F9C.t(ox23de6c(522))
      }, ...var_core_value_sigCD50[ox23de6c(1285)](var_core_value_sig9A03 => ({
        value: String(var_core_value_sig9A03[ox23de6c(1301)]),
        label: var_core_value_sig9A03.name
      }))],
      value: var_core_value_sigF30A,
      onChange: var_core_value_sigD81A
    }), Ba[ox23de6c(1573)](var_core_value_sig3363 => var_core_value_sig3363 !== e[ox23de6c(706)][ox23de6c(617)] || !var_core_value_sigB4401)[ox23de6c(1285)](var_core_value_sig988F), (0, i[ox23de6c(922)])(I, {
      label: (0, i.jsx)(Ci, {
        endSlot: (0, i.jsx)(t[ox23de6c(1138)], {
          checked: (var_core_value_sigDC83 == null ? undefined : var_core_value_sigDC83[ox23de6c(1487)]) === undefined ? var_core_value_sigE931[ox23de6c(801)].connector : !!var_core_value_sigDC83[ox23de6c(1487)],
          contentClassName: "univer-sr-only",
          onChange: var_core_value_sigF64A => var_core_value_sig56A8({
            ...var_core_value_sigDC83,
            connector: !!var_core_value_sigF64A
          }),
          children: var_core_value_sig9F9C.t(ox23de6c(1918))
        }),
        children: var_core_value_sig9F9C.t(ox23de6c(1918))
      }),
      children: null
    }), (0, i.jsx)(I, {
      label: (0, i[ox23de6c(922)])(Ci, {
        endSlot: (0, i[ox23de6c(922)])(t[ox23de6c(1138)], {
          checked: var_core_value_sig12F4[ox23de6c(1755)] ?? var_core_value_sigE931[ox23de6c(801)][ox23de6c(979)],
          contentClassName: "univer-sr-only",
          onChange: var_core_value_sig25EC => var_core_value_sig70FD({
            visible: !!var_core_value_sig25EC
          }),
          children: var_core_value_sig9F9C.t(ox23de6c(1719))
        }),
        children: var_core_value_sig9F9C.t(ox23de6c(1719))
      }),
      children: (0, i.jsx)(ox23de6c(1998), {
        className: ox23de6c(1556),
        children: var_core_value_sig12F4[ox23de6c(1755)] && (0, i[ox23de6c(1557)])(i[ox23de6c(1762)], {
          children: [(0, i[ox23de6c(1557)])(O, {
            children: [(0, i.jsx)(cr, {
              label: var_core_value_sig9F9C.t(ox23de6c(1466)),
              options: [{
                value: String(e[ox23de6c(1567)][ox23de6c(602)]),
                label: var_core_value_sig9F9C.t(ox23de6c(925))
              }, {
                value: String(e.LabelContentType[ox23de6c(1694)]),
                label: var_core_value_sig9F9C.t(ox23de6c(1738))
              }, {
                value: String(e[ox23de6c(1567)][ox23de6c(624)]),
                label: var_core_value_sig9F9C.t("chart-ui.common.value")
              }],
              value: var_core_value_sigB5C8,
              onChange: var_core_value_sigA790 => {
                const var_core_value_sig9A5E = ox23de6c;
                if (var_core_value_sigA790[var_core_value_sig9A5E(1579)] === 0) return;
                let var_core_value_sig01B9 = za[var_core_value_sig9A5E(1573)](var_core_value_sig21B2 => var_core_value_sigA790[var_core_value_sig9A5E(1868)](String(var_core_value_sig21B2))).reduce((var_core_value_sigDE08, var_core_value_sigACCB) => var_core_value_sigDE08 | var_core_value_sigACCB, e[var_core_value_sig9A5E(1567)].Empty);
                var_core_value_sig70FD({
                  contentType: var_core_value_sig01B9
                });
              }
            }), (0, i[ox23de6c(922)])(A, {
              label: var_core_value_sig9F9C.t(ox23de6c(1668)),
              options: [{
                value: e.SeriesLabelPosition[ox23de6c(733)],
                label: var_core_value_sig9F9C.t(ox23de6c(893))
              }, {
                value: e[ox23de6c(1727)][ox23de6c(1934)],
                label: var_core_value_sig9F9C.t(ox23de6c(2031))
              }, {
                value: e[ox23de6c(1727)][ox23de6c(1672)],
                label: var_core_value_sig9F9C.t("chart-ui.common.position.left")
              }, {
                value: e[ox23de6c(1727)][ox23de6c(477)],
                label: var_core_value_sig9F9C.t(ox23de6c(1560))
              }, {
                value: e[ox23de6c(1727)][ox23de6c(1210)],
                label: var_core_value_sig9F9C.t("chart-ui.common.position.top")
              }, {
                value: e[ox23de6c(1727)][ox23de6c(1831)],
                label: var_core_value_sig9F9C.t(ox23de6c(1758))
              }],
              value: var_core_value_sig12F4[ox23de6c(1712)] ?? var_core_value_sigE931[ox23de6c(801)][ox23de6c(1336)],
              onChange: var_core_value_sigD6A9 => var_core_value_sig70FD({
                position: var_core_value_sigD6A9
              })
            })]
          }), (0, i[ox23de6c(922)])(var_core_value_sigBE17, {
            label: var_core_value_sig9F9C.t("chart-ui.common.numberFormat"),
            value: var_core_value_sig12F4.format,
            onChange: var_core_value_sig0FCF => var_core_value_sig70FD({
              format: var_core_value_sig0FCF
            })
          }), (0, i[ox23de6c(922)])(V, {
            colorPickerFallbackValue: var_core_value_sigE931.defaultValues[ox23de6c(1082)],
            label: var_core_value_sig9F9C.t(ox23de6c(852)),
            value: var_core_value_sigDCEC,
            onChange: var_core_value_sigCF96 => var_core_value_sig70FD(B(var_core_value_sigCF96))
          })]
        })
      })
    })]
  });
}
function Ga(var_core_value_sig50A1) {
  let [var_core_value_sig71D2, var_core_value_sigC113] = (0, r.useState)(false),
    var_core_value_sig2326 = var_core_value_sig50A1.options["find"](var_core_value_sigC4E9 => var_core_value_sigC4E9[ox4f7571(1324)] === var_core_value_sig50A1.value) ?? var_core_value_sig50A1.options[0];
  return var_core_value_sig2326 ? (0, i[ox4f7571(922)])(D, {
    label: var_core_value_sig50A1.label,
    children: var_core_value_sigF612 => (0, i[ox4f7571(922)])(t[ox4f7571(761)], {
      open: var_core_value_sig71D2,
      overlay: (0, i[ox4f7571(922)])(ox4f7571(1998), {
        className: ox4f7571(1057),
        children: var_core_value_sig50A1[ox4f7571(1822)][ox4f7571(1285)](var_core_value_sig7F33 => (0, i[ox4f7571(922)])("button", {
          "aria-label": var_core_value_sig7F33[ox4f7571(1614)],
          "aria-pressed": var_core_value_sig7F33.value === var_core_value_sig2326[ox4f7571(1324)],
          className: ox4f7571(2038),
          type: ox4f7571(1204),
          onClick: () => {
            const var_core_value_sigC9E0 = ox4f7571;
            var_core_value_sig50A1[var_core_value_sigC9E0(507)](var_core_value_sig7F33.value), var_core_value_sigC113(false);
          },
          children: (0, i.jsx)(ox4f7571(661), {
            className: ox4f7571(1283),
            src: var_core_value_sig7F33.imageSrc,
            alt: ""
          })
        }, var_core_value_sig7F33.value))
      }),
      onOpenChange: var_core_value_sigC113,
      children: (0, i[ox4f7571(1557)])(t.Button, {
        size: ox4f7571(1121),
        "aria-expanded": var_core_value_sig71D2,
        "aria-haspopup": ox4f7571(1849),
        className: (0, t[ox4f7571(1916)])(ox4f7571(1070), {
          "univer-bg-gray-100": var_core_value_sig71D2
        }),
        type: ox4f7571(1204),
        ...var_core_value_sigF612,
        children: [(0, i.jsxs)("span", {
          className: ox4f7571(1497),
          children: [(0, i.jsx)(ox4f7571(661), {
            className: ox4f7571(1988),
            src: var_core_value_sig2326[ox4f7571(908)],
            alt: ""
          }), (0, i[ox4f7571(922)])(ox4f7571(1904), {
            className: ox4f7571(929),
            children: var_core_value_sig2326[ox4f7571(1614)]
          })]
        }), (0, i.jsx)(n[ox4f7571(781)], {
          "aria-hidden": ox4f7571(1582),
          className: ox4f7571(1637)
        })]
      })
    })
  }) : null;
}
function Ka() {
  let [var_core_value_sig9007] = N("chartType", e.ChartTypeBits[oxd8b83e(1859)]),
    [var_core_value_sig8726, var_core_value_sig4358] = N(oxd8b83e(1092));
  return {
    chartType: var_core_value_sig9007,
    setWordCloud: var_core_value_sig4358,
    wordCloud: var_core_value_sig8726
  };
}
function qa(var_core_value_sig9574) {
  let {
    chartType: var_core_value_sigD610
  } = Ka();
  return var_core_value_sigD610 === e[ox80abb0(653)][ox80abb0(513)] ? (0, i.jsx)(ox80abb0(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: var_core_value_sig9574.children
  }) : null;
}
const Ja = {
    repeat: e.defaultChartConfig["wordCloud"].repeat,
    shape: e.defaultChartConfig["wordCloud"].shape
  },
  Ya = {
    [e.WordCloudShapeEnum["Cardioid"]]: "chart-ui.wordCloud.cardioid",
    [e.WordCloudShapeEnum["Circle"]]: "chart-ui.common.circle",
    [e.WordCloudShapeEnum["Cloud"]]: "chart-ui.wordCloud.cloud",
    [e.WordCloudShapeEnum["Diamond"]]: "chart-ui.common.diamond",
    [e.WordCloudShapeEnum["Heart"]]: "chart-ui.wordCloud.heart",
    [e.WordCloudShapeEnum["Pentagon"]]: "chart-ui.wordCloud.pentagon",
    [e.WordCloudShapeEnum["Rect"]]: "chart-ui.wordCloud.rect",
    [e.WordCloudShapeEnum["Star"]]: "chart-ui.wordCloud.star",
    [e.WordCloudShapeEnum["Triangle"]]: "chart-ui.common.triangle",
    [e.WordCloudShapeEnum["TriangleForward"]]: "chart-ui.wordCloud.triangle-forward"
  };
function Xa(var_core_value_sigAF55) {
  let var_core_value_sig7409 = (0, o[ox4462cd(858)])(a[ox4462cd(1419)]),
    {
      setWordCloud: var_core_value_sigD106,
      wordCloud: var_core_value_sig7552
    } = Ka();
  return (0, i[ox4462cd(922)])(A, {
    label: var_core_value_sig7409.t(ox4462cd(1266)),
    options: Object[ox4462cd(1596)](e[ox4462cd(648)])[ox4462cd(1285)](var_core_value_sigAA6C => ({
      value: var_core_value_sigAA6C,
      label: var_core_value_sig7409.t(Ya[var_core_value_sigAA6C])
    })),
    value: (var_core_value_sig7552 == null ? undefined : var_core_value_sig7552[ox4462cd(543)]) ?? var_core_value_sigAF55[ox4462cd(801)][ox4462cd(543)],
    onChange: var_core_value_sig8BFA => var_core_value_sigD106({
      ...var_core_value_sig7552,
      shape: var_core_value_sig8BFA
    })
  });
}
function Za() {
  let var_core_value_sig56D1 = (0, o[ox52a5e5(858)])(a.LocaleService),
    {
      setWordCloud: var_core_value_sig3D12,
      wordCloud: var_core_value_sig8952
    } = Ka();
  return (0, i[ox52a5e5(922)])(Ga, {
    label: var_core_value_sig56D1.t(ox52a5e5(815)),
    options: e[ox52a5e5(568)],
    value: (var_core_value_sig8952 == null ? undefined : var_core_value_sig8952[ox52a5e5(540)]) ?? "",
    onChange: var_core_value_sig236B => var_core_value_sig3D12({
      ...var_core_value_sig8952,
      maskImageId: var_core_value_sig236B
    })
  });
}
function Qa() {
  let var_core_value_sigB409 = (0, o.useDependency)(a.LocaleService),
    {
      setWordCloud: var_core_value_sig3D2F,
      wordCloud: var_core_value_sigDBDA
    } = Ka();
  return (0, i[oxe5280a(922)])(j, {
    commitMode: oxe5280a(939),
    label: var_core_value_sigB409.t(oxe5280a(815)),
    value: (var_core_value_sigDBDA == null ? undefined : var_core_value_sigDBDA[oxe5280a(540)]) ?? "",
    onChange: var_core_value_sig1951 => var_core_value_sig3D2F({
      ...var_core_value_sigDBDA,
      maskImageId: var_core_value_sig1951 || undefined
    })
  });
}
function $a(var_core_value_sig1EFA) {
  let var_core_value_sig7CF4 = (0, o[ox1b1438(858)])(a[ox1b1438(1419)]),
    {
      setWordCloud: var_core_value_sigE956,
      wordCloud: var_core_value_sig189D
    } = Ka();
  return (0, i.jsx)(H, {
    inlineLabel: true,
    checked: (var_core_value_sig189D == null ? undefined : var_core_value_sig189D[ox1b1438(720)]) ?? var_core_value_sig1EFA.defaultValues[ox1b1438(720)],
    label: var_core_value_sig7CF4.t(ox1b1438(1788)),
    onChange: var_core_value_sigFEA0 => var_core_value_sigE956({
      ...var_core_value_sig189D,
      repeat: var_core_value_sigFEA0
    })
  });
}
function eo(var_core_value_sigE26F) {
  return (0, i[ox5604b6(1557)])(qa, {
    children: [(0, i.jsx)(Xa, {
      defaultValues: var_core_value_sigE26F.defaultValues
    }), (0, i.jsx)(Za, {}), (0, i[ox5604b6(922)])($a, {
      defaultValues: var_core_value_sigE26F[ox5604b6(801)]
    })]
  });
}
var to = class extends a.Disposable {
  constructor(...var_core_value_sig931A) {
    super(...var_core_value_sig931A), b(this, ox3d60dc(1640), new Map());
  }
  register(var_core_value_sigEE7D, var_core_value_sig3585) {
    return this[ox3e04e8(1640)][ox3e04e8(1023)](var_core_value_sigEE7D, var_core_value_sig3585), {
      dispose: () => {
        const var_core_value_sig0C53 = ox3e04e8;
        this[var_core_value_sig0C53(1640)][var_core_value_sig0C53(977)](var_core_value_sigEE7D) === var_core_value_sig3585 && this[var_core_value_sig0C53(1640)].delete(var_core_value_sigEE7D);
      }
    };
  }
  get(var_core_value_sig31A8) {
    return this[ox2b49f4(1640)][ox2b49f4(977)](var_core_value_sig31A8);
  }
  dispose() {
    this[ox2415f0(1640)][ox2415f0(959)](), super.dispose();
  }
};
function no(var_core_value_sig8212) {
  return var_core_value_sig8212 === e[ox2b5f56(653)][ox2b5f56(1961)] || var_core_value_sig8212 === e[ox2b5f56(653)][ox2b5f56(479)] || var_core_value_sig8212 === e.ChartTypeBits[ox2b5f56(1356)] || e.chartBitsUtils["baseOn"](var_core_value_sig8212, e[ox2b5f56(653)][ox2b5f56(1152)]) || e[ox2b5f56(1226)][ox2b5f56(1429)](var_core_value_sig8212, e[ox2b5f56(653)][ox2b5f56(1218)]) || e.chartBitsUtils[ox2b5f56(1429)](var_core_value_sig8212, e.ChartTypeBits[ox2b5f56(999)]) || e.chartBitsUtils["baseOn"](var_core_value_sig8212, e[ox2b5f56(653)][ox2b5f56(1546)]);
}
function ro(var_core_value_sig9A60) {
  switch (var_core_value_sig9A60) {
    case e[ox4461f2(692)][ox4461f2(831)]:
    case e[ox4461f2(692)][ox4461f2(1049)]:
    case e.WaterfallSeriesTypeEnum["subtotal"]:
      return e[ox4461f2(692)][var_core_value_sig9A60];
    default:
      return;
  }
}
function io(var_core_value_sig5EF5, var_core_value_sig5324) {
  var var_core_value_sig01301;
  if (typeof var_core_value_sig5324[ox1b2893(1912)] != "number") return;
  let var_core_value_sig5838 = (var_core_value_sig01301 = var_core_value_sig5EF5[ox1b2893(1887)]) == null || (var_core_value_sig01301 = var_core_value_sig01301[ox1b2893(1238)]) == null ? undefined : var_core_value_sig01301[var_core_value_sig5324[ox1b2893(1912)]],
    var_core_value_sigB9FE = var_core_value_sig5838 === undefined ? var_core_value_sig5324[ox1b2893(805)] : String(var_core_value_sig5838);
  if (typeof var_core_value_sigB9FE == "string") return {
    seriesId: var_core_value_sigB9FE,
    seriesIndex: var_core_value_sig5324[ox1b2893(1912)]
  };
}
function ao(var_core_value_sig41A5) {
  return var_core_value_sig41A5.pieCompositeRole === e[ox317862(1973)][ox317862(1618)] && var_core_value_sig41A5.pieSourcePointIndex !== undefined ? {
    kind: "pieSliceStyle",
    sourcePointIndex: var_core_value_sig41A5[ox317862(1885)]
  } : var_core_value_sig41A5[ox317862(1371)] === e[ox317862(1973)][ox317862(590)] ? {
    kind: ox317862(772)
  } : var_core_value_sig41A5.pieCompositeRole === e[ox317862(1973)].Connector ? {
    kind: ox317862(1648)
  } : {
    kind: ox317862(905)
  };
}
function oo(var_core_value_sig6D3D, var_core_value_sigB191) {
  let var_core_value_sig949D = var_core_value_sig6D3D[ox2d9f00(553)],
    var_core_value_sig4113 = {
      scope: ox2d9f00(1187)
    };
  if (var_core_value_sigB191[ox2d9f00(1828)] === undefined ? var_core_value_sigB191[ox2d9f00(805)] !== undefined && (var_core_value_sig4113.seriesId = var_core_value_sigB191.seriesId) : var_core_value_sig4113[ox2d9f00(805)] = var_core_value_sigB191[ox2d9f00(1828)], var_core_value_sigB191[ox2d9f00(1912)] !== undefined && (var_core_value_sig4113[ox2d9f00(1912)] = var_core_value_sigB191[ox2d9f00(1912)]), var_core_value_sigB191[ox2d9f00(1885)] === undefined ? var_core_value_sigB191[ox2d9f00(879)] !== undefined && (var_core_value_sig4113.dataIndex = var_core_value_sigB191.dataIndex) : var_core_value_sig4113[ox2d9f00(879)] = var_core_value_sigB191[ox2d9f00(1885)], e[ox2d9f00(1226)].baseOn(var_core_value_sig949D, e.ChartTypeBits[ox2d9f00(600)])) return {
    ...var_core_value_sig4113,
    directEdit: ao(var_core_value_sigB191),
    panel: ox2d9f00(905)
  };
  if (e[ox2d9f00(1226)][ox2d9f00(1429)](var_core_value_sig949D, e[ox2d9f00(653)].Pareto)) return var_core_value_sigB191[ox2d9f00(1912)] === e[ox2d9f00(869)][ox2d9f00(1046)] ? {
    ...var_core_value_sig4113,
    directEdit: {
      kind: ox2d9f00(920),
      part: e[ox2d9f00(1501)][ox2d9f00(1046)]
    },
    panel: ox2d9f00(639)
  } : var_core_value_sigB191.seriesIndex === e.ParetoSeriesIndex[ox2d9f00(1152)] ? {
    ...var_core_value_sig4113,
    directEdit: {
      kind: "paretoStyle",
      part: e[ox2d9f00(1501)][ox2d9f00(1152)]
    },
    panel: "paretoLineSeries"
  } : {
    ...var_core_value_sig4113,
    panel: ox2d9f00(639)
  };
  if (e[ox2d9f00(1226)].baseOn(var_core_value_sig949D, e[ox2d9f00(653)][ox2d9f00(1766)])) {
    let var_core_value_sigA4DA = ro(var_core_value_sigB191[ox2d9f00(1736)]),
      var_core_value_sig6FC0 = var_core_value_sigB191[ox2d9f00(1164)] ?? var_core_value_sigB191[ox2d9f00(805)];
    return var_core_value_sigA4DA && var_core_value_sig6FC0 ? {
      ...var_core_value_sig4113,
      seriesId: var_core_value_sig6FC0,
      directEdit: {
        kind: "waterfallStyle",
        seriesId: var_core_value_sig6FC0,
        seriesIndex: var_core_value_sigB191.seriesIndex,
        part: var_core_value_sigA4DA
      },
      panel: ox2d9f00(741)
    } : {
      ...var_core_value_sig4113,
      seriesId: var_core_value_sig6FC0,
      panel: ox2d9f00(741)
    };
  }
  if (no(var_core_value_sig949D)) {
    let var_core_value_sig6217 = io(var_core_value_sig6D3D, var_core_value_sigB191);
    return var_core_value_sig6217 ? {
      ...var_core_value_sig4113,
      ...var_core_value_sig6217,
      directEdit: {
        kind: "seriesStyle",
        ...var_core_value_sig6217
      }
    } : undefined;
  }
  return e[ox2d9f00(1226)].baseOn(var_core_value_sig949D, e.ChartTypeBits["Relation"]) ? {
    ...var_core_value_sig4113,
    panel: ox2d9f00(1656)
  } : e.chartBitsUtils["baseOn"](var_core_value_sig949D, e[ox2d9f00(653)][ox2d9f00(513)]) ? {
    ...var_core_value_sig4113,
    panel: ox2d9f00(1092)
  } : {
    ...var_core_value_sig4113,
    panel: ox2d9f00(996)
  };
}
function so(var_core_value_sigEC12, var_core_value_sigC932) {
  let var_core_value_sigDE39 = var_core_value_sigC932[ox28dddb(1201)] === "mark" ? oo(var_core_value_sigEC12, var_core_value_sigC932) : tn(var_core_value_sigC932);
  if (var_core_value_sigDE39) return {
    target: var_core_value_sigDE39,
    showFloatMenu: var_core_value_sigDE39[ox28dddb(1873)] !== ox28dddb(1187) || !!var_core_value_sigDE39[ox28dddb(1940)]
  };
}
const co = "chart.element.float-menu",
  lo = [0, 8],
  uo = [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0],
  fo = {
    CONTINUOUS: "continuous",
    PIECEWISE: "piecewise"
  },
  po = {
    TITLE: "title",
    SUBTITLE: "subtitle",
    LEGEND: "legend",
    PIE: "pie",
    SERIES: "series",
    PARETO: "pareto",
    AXES: "axes"
  },
  Y = {
    MENU_TITLE: {
      CHART: "chart-ui.floatMenu.menuTitle.chart",
      CHART_TITLE: "chart-ui.common.chartTitle",
      SUBTITLE: "chart-ui.common.subtitle",
      AXIS_TITLE: "chart-ui.floatMenu.menuTitle.axisTitle",
      LEGEND: "chart-ui.common.legend",
      HORIZONTAL_AXIS: "chart-ui.common.horizontalAxis",
      VERTICAL_AXIS: "chart-ui.common.verticalAxis",
      RIGHT_VERTICAL_AXIS: "chart-ui.common.rightVerticalAxis",
      GRIDLINE: "chart-ui.floatMenu.menuTitle.gridline",
      TICK: "chart-ui.floatMenu.menuTitle.tick",
      MARK: "chart-ui.floatMenu.menuTitle.mark",
      SERIES: "chart-ui.common.series",
      DATA_POINT: "chart-ui.common.dataPoint",
      DATA_LABEL: "chart-ui.floatMenu.menuTitle.dataLabel"
    },
    FIELD: {
      TITLE: "chart-ui.common.title",
      SUBTITLE: "chart-ui.common.subtitle",
      POSITION: "chart-ui.floatMenu.field.position",
      SIZE: "chart-ui.floatMenu.field.size",
      ALIGN: "chart-ui.floatMenu.field.align",
      MODE: "chart-ui.common.mode",
      MAP: "chart-ui.floatMenu.field.map",
      ROTATE: "chart-ui.floatMenu.field.rotate",
      MIN: "chart-ui.common.min",
      MAX: "chart-ui.common.max",
      COLOR: "chart-ui.common.color",
      BORDER_COLOR: "chart-ui.common.borderColor",
      OPACITY: "chart-ui.common.opacity",
      LABEL_POSITION: "chart-ui.common.labelPosition",
      LABEL_TEXT: "chart-ui.floatMenu.field.labelText",
      TITLE_TEXT: "chart-ui.floatMenu.field.titleText"
    },
    ACTION: {
      MORE: "chart-ui.floatMenu.action.more",
      BOLD: "chart-ui.common.bold",
      ITALIC: "chart-ui.common.italic"
    },
    CONTROL: {
      LABELS: "chart-ui.floatMenu.control.labels",
      LINE: "chart-ui.floatMenu.control.line",
      REVERSE: "chart-ui.floatMenu.control.reverse",
      DATE: "chart-ui.common.date"
    },
    OPTION: {
      TEXT_ALIGN: {
        LEFT: "chart-ui.common.textAlign.left",
        CENTER: "chart-ui.common.textAlign.center",
        RIGHT: "chart-ui.common.textAlign.right"
      },
      POSITION: {
        TOP: "chart-ui.common.position.top",
        BOTTOM: "chart-ui.common.position.bottom",
        LEFT: "chart-ui.common.position.left",
        RIGHT: "chart-ui.common.position.right",
        HIDE: "chart-ui.common.position.hide",
        INSIDE: "chart-ui.common.position.inside",
        OUTSIDE: "chart-ui.common.position.outside"
      },
      LABEL_TEXT: {
        CATEGORY: "chart-ui.common.category",
        VALUE: "chart-ui.common.value",
        PERCENTAGE: "chart-ui.common.percentage"
      },
      AXIS_ALIGN: {
        START: "chart-ui.common.axisAlign.start",
        CENTER: "chart-ui.common.axisAlign.center",
        END: "chart-ui.common.axisAlign.end"
      },
      LEGEND_SELECT_MODE: {
        SINGLE: "chart-ui.common.legendSelectMode.single",
        MULTIPLE: "chart-ui.common.legendSelectMode.multiple",
        CLOSE: "chart-ui.common.legendSelectMode.disabled"
      },
      VISUAL_MAP_TYPE: {
        CONTINUOUS: "chart-ui.common.visualMapType.continuous",
        PIECEWISE: "chart-ui.common.visualMapType.piecewise"
      }
    }
  },
  mo = [{
    labelKey: Y.OPTION["POSITION"].TOP,
    value: e.TitlePositionEnum["Top"]
  }, {
    labelKey: Y.OPTION["POSITION"].BOTTOM,
    value: e.TitlePositionEnum["Bottom"]
  }, {
    labelKey: Y.OPTION["POSITION"].LEFT,
    value: e.TitlePositionEnum["Left"]
  }, {
    labelKey: Y.OPTION["POSITION"].RIGHT,
    value: e.TitlePositionEnum["Right"]
  }, {
    labelKey: Y.OPTION["POSITION"].HIDE,
    value: e.TitlePositionEnum["Hide"]
  }],
  ho = [{
    labelKey: Y.OPTION["POSITION"].INSIDE,
    value: e.PieLabelPosition["Inside"]
  }, {
    labelKey: Y.OPTION["POSITION"].OUTSIDE,
    value: e.PieLabelPosition["Outside"]
  }],
  go = [{
    labelKey: Y.OPTION["LABEL_TEXT"].CATEGORY,
    value: String(e.LabelContentType["CategoryName"])
  }, {
    labelKey: Y.OPTION["LABEL_TEXT"].VALUE,
    value: String(e.LabelContentType["Value"])
  }, {
    labelKey: Y.OPTION["LABEL_TEXT"].PERCENTAGE,
    value: String(e.LabelContentType["Percentage"])
  }],
  _o = [{
    labelKey: Y.OPTION["AXIS_ALIGN"].START,
    value: e.AxisAlignEnum["Start"]
  }, {
    labelKey: Y.OPTION["AXIS_ALIGN"].CENTER,
    value: e.AxisAlignEnum["Center"]
  }, {
    labelKey: Y.OPTION["AXIS_ALIGN"].END,
    value: e.AxisAlignEnum["End"]
  }];
Y.OPTION["POSITION"].TOP, e.LegendPositionEnum["Top"], Y.OPTION["POSITION"].BOTTOM, e.LegendPositionEnum["Bottom"], Y.OPTION["POSITION"].LEFT, e.LegendPositionEnum["Left"], Y.OPTION["POSITION"].RIGHT, e.LegendPositionEnum["Right"], Y.OPTION["POSITION"].HIDE, e.LegendPositionEnum["Hide"], Y.OPTION["LEGEND_SELECT_MODE"].SINGLE, e.SelectModeEnum["Single"], Y.OPTION["LEGEND_SELECT_MODE"].MULTIPLE, e.SelectModeEnum["Multiple"], Y.OPTION["LEGEND_SELECT_MODE"].CLOSE, e.SelectModeEnum["Close"], Y.OPTION["VISUAL_MAP_TYPE"].CONTINUOUS, fo.CONTINUOUS, Y.OPTION["VISUAL_MAP_TYPE"].PIECEWISE, fo.PIECEWISE;
function vo(var_core_value_sig1529, var_core_value_sigAFD8, var_core_value_sig6017) {
  var var_core_value_sigC66C;
  if ((var_core_value_sigAFD8 == null ? undefined : var_core_value_sigAFD8[ox97b804(1201)]) === "pieSliceStyle") {
    var var_core_value_sigC5AC;
    let var_core_value_sigB805 = (var_core_value_sig1529 == null || (var_core_value_sigC5AC = var_core_value_sig1529[ox97b804(618)]) == null ? undefined : var_core_value_sigC5AC[var_core_value_sigAFD8[ox97b804(2016)]]) ?? {};
    return {
      ...var_core_value_sig1529,
      sliceStyles: {
        ...(var_core_value_sig1529 == null ? undefined : var_core_value_sig1529[ox97b804(618)]),
        [var_core_value_sigAFD8[ox97b804(2016)]]: {
          ...var_core_value_sigB805,
          ...var_core_value_sig6017
        }
      }
    };
  }
  if ((var_core_value_sigAFD8 == null ? undefined : var_core_value_sigAFD8[ox97b804(1201)]) !== ox97b804(772)) return;
  let var_core_value_sig5880 = var_core_value_sig1529 == null ? undefined : var_core_value_sig1529[ox97b804(2021)];
  return {
    ...var_core_value_sig1529,
    composite: {
      ...var_core_value_sig5880,
      aggregate: {
        ...(var_core_value_sig5880 == null ? undefined : var_core_value_sig5880[ox97b804(924)]),
        style: {
          ...(var_core_value_sig5880 == null || (var_core_value_sigC66C = var_core_value_sig5880[ox97b804(924)]) == null ? undefined : var_core_value_sigC66C[ox97b804(1169)]),
          ...var_core_value_sig6017
        }
      }
    }
  };
}
function yo(var_core_value_sigF7E2, var_core_value_sigDEEA) {
  let var_core_value_sig49D1 = var_core_value_sigF7E2 == null ? undefined : var_core_value_sigF7E2[ox556817(2021)],
    var_core_value_sigEDEC = var_core_value_sig49D1 == null ? undefined : var_core_value_sig49D1[ox556817(1437)];
  return {
    ...var_core_value_sigF7E2,
    composite: {
      ...var_core_value_sig49D1,
      secondaryPlot: {
        ...var_core_value_sigEDEC,
        connector: {
          ...(var_core_value_sigEDEC == null ? undefined : var_core_value_sigEDEC[ox556817(1487)]),
          ...var_core_value_sigDEEA
        }
      }
    }
  };
}
const X = Y,
  Z = po,
  bo = new Set(["pieStyle", "pieSliceStyle", "pieAggregateStyle", "pieConnectorStyle"]),
  xo = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"], e.LabelContentType["Percentage"]],
  So = uo.map(var_core_value_sig4F7B => ({
    label: Math.round(var_core_value_sig4F7B * 100) + "%",
    value: String(var_core_value_sig4F7B)
  }));
function Co(var_core_value_sig8269 = e.defaultChartConfig["pie"].labelContentType) {
  return xo[ox58fb10(1573)](var_core_value_sig4FAE => e.chartBitsUtils["has"](var_core_value_sig8269, var_core_value_sig4FAE))[ox58fb10(1285)](var_core_value_sig1FCC => String(var_core_value_sig1FCC));
}
function wo(var_core_value_sigB092) {
  if (!(var_core_value_sigB092[ox416bc4(1579)] <= 0)) return var_core_value_sigB092.map(var_core_value_sigB7F9 => Number(var_core_value_sigB7F9))[ox416bc4(900)]((var_core_value_sigB1A2, var_core_value_sig526D1) => var_core_value_sigB1A2 | var_core_value_sig526D1, e[ox416bc4(1567)][ox416bc4(1549)]);
}
function To(var_core_value_sigC04F) {
  switch (var_core_value_sigC04F[ox1ddaf4(2036)][ox1ddaf4(1873)]) {
    case ox1ddaf4(1703):
      return var_core_value_sigC04F[ox1ddaf4(2036)][ox1ddaf4(1880)] === ox1ddaf4(1247) ? X[ox1ddaf4(1316)][ox1ddaf4(740)] : X.MENU_TITLE["CHART_TITLE"];
    case ox1ddaf4(1172):
      return X[ox1ddaf4(1316)][ox1ddaf4(1241)];
    case "legend":
      return X.MENU_TITLE[ox1ddaf4(980)];
    case ox1ddaf4(708):
      return var_core_value_sigC04F[ox1ddaf4(2036)][ox1ddaf4(1422)] === ox1ddaf4(685) ? X[ox1ddaf4(1316)][ox1ddaf4(1242)] : var_core_value_sigC04F[ox1ddaf4(2036)][ox1ddaf4(1422)] === ox1ddaf4(1278) ? X[ox1ddaf4(1316)][ox1ddaf4(1585)] : X[ox1ddaf4(1316)].VERTICAL_AXIS;
    case ox1ddaf4(962):
      return X[ox1ddaf4(1316)].GRIDLINE;
    case ox1ddaf4(528):
      return X[ox1ddaf4(1316)][ox1ddaf4(488)];
    case ox1ddaf4(1187):
      var var_core_value_sig8B16;
      return ((var_core_value_sig8B16 = var_core_value_sigC04F.target[ox1ddaf4(1940)]) == null ? undefined : var_core_value_sig8B16.kind) === "pieStyle" ? X[ox1ddaf4(1316)][ox1ddaf4(1752)] : X[ox1ddaf4(1316)][ox1ddaf4(576)];
    case ox1ddaf4(837):
      return X[ox1ddaf4(1316)][ox1ddaf4(987)];
    case ox1ddaf4(851):
      return X[ox1ddaf4(1316)][ox1ddaf4(1387)];
    case ox1ddaf4(1418):
      return X[ox1ddaf4(1316)][ox1ddaf4(1752)];
    default:
      return X[ox1ddaf4(1316)][ox1ddaf4(1638)];
  }
}
function Eo(var_core_value_sig9640, var_core_value_sig34AB, var_core_value_sig0BE5, var_core_value_sig2F9D) {
  return (0, o[ox54895c(1451)])((0, r.useMemo)(() => var_core_value_sig9640 == null ? undefined : var_core_value_sig9640[ox54895c(1910)](var_core_value_sig34AB, var_core_value_sig0BE5), [var_core_value_sig9640, var_core_value_sig34AB, var_core_value_sig0BE5]), var_core_value_sig2F9D);
}
function Do(var_core_value_sig9511, var_core_value_sigAFDD) {
  return (0, r.useCallback)((var_core_value_sigBDB5, var_core_value_sig59CE1) => {
    var_core_value_sig9511 == null || var_core_value_sig9511.setState(var_core_value_sigAFDD, var_core_value_sigBDB5, var_core_value_sig59CE1);
  }, [var_core_value_sig9511, var_core_value_sigAFDD]);
}
function Oo(var_core_value_sig431B, var_core_value_sig3073, var_core_value_sig4C99) {
  return (0, o[oxe30975(1451)])((0, r[oxe30975(1687)])(() => {
    const var_core_value_sig3AD7 = oxe30975;
    var var_core_value_sig04E4;
    return var_core_value_sig431B == null || (var_core_value_sig04E4 = var_core_value_sig431B[var_core_value_sig3AD7(845)]) == null ? undefined : var_core_value_sig04E4[var_core_value_sig3AD7(678)](var_core_value_sig431B, var_core_value_sig3073, var_core_value_sig4C99);
  }, [var_core_value_sig431B, var_core_value_sig4C99, var_core_value_sig3073]), var_core_value_sig4C99) ?? var_core_value_sig4C99;
}
function ko(var_core_value_sigDDD2) {
  switch (var_core_value_sigDDD2) {
    case ox2a46a3(685):
      return "x";
    case ox2a46a3(1278):
      return ox2a46a3(1872);
    default:
      return "y";
  }
}
function Ao(var_core_value_sig6D5F) {
  return var_core_value_sig6D5F ?? "";
}
function jo(var_core_value_sigB80D) {
  return typeof var_core_value_sigB80D == ox50ad40(2002) ? {
    text: var_core_value_sigB80D
  } : var_core_value_sigB80D ?? {};
}
function Q(var_core_value_sigE0A2) {
  return (0, i[ox2c6610(922)])(ox2c6610(1998), {
    className: (0, t.clsx)("univer-w-36\x20univer-shrink-0", var_core_value_sigE0A2.className),
    children: var_core_value_sigE0A2[ox2c6610(1492)]
  });
}
function $(var_core_value_sig8F71) {
  return (0, i[ox38f82d(922)])(ox38f82d(1998), {
    className: (0, t[ox38f82d(1916)])(ox38f82d(1760), var_core_value_sig8F71[ox38f82d(994)]),
    children: var_core_value_sig8F71[ox38f82d(1492)]
  });
}
function Mo(var_core_value_sig9016) {
  return (0, i[ox576e32(922)])(ox576e32(1332), {
    className: (0, t[ox576e32(1916)])(ox576e32(1669), var_core_value_sig9016[ox576e32(994)]),
    disabled: var_core_value_sig9016.disabled,
    children: var_core_value_sig9016.children
  });
}
function No(var_core_value_sigB043) {
  let {
      adapter: var_core_value_sig554B,
      alignControl: var_core_value_sig5A0F = false,
      className: var_core_value_sig33F0,
      context: var_core_value_sigC9BF,
      defaultColor: var_core_value_sigE1AD,
      onChange: var_core_value_sig90FF,
      style: var_core_value_sigA7F6
    } = var_core_value_sigB043,
    var_core_value_sigCDF5 = (0, o.useDependency)(a[ox19b822(1419)]),
    var_core_value_sig3802 = Oo(var_core_value_sig554B, var_core_value_sigC9BF, $e);
  return (0, i[ox19b822(1557)])(ox19b822(1998), {
    className: (0, t[ox19b822(1916)])("univer-inline-flex\x20univer-w-max\x20univer-items-center\x20univer-gap-1.5", var_core_value_sig33F0),
    children: [(0, i[ox19b822(922)])(et, {
      emptyLabel: var_core_value_sigCDF5.t(ox19b822(1990)),
      isDefault: var_core_value_sigA7F6[ox19b822(1003)] == null,
      options: var_core_value_sig3802,
      value: var_core_value_sigA7F6[ox19b822(1003)] ?? undefined,
      onChange: var_core_value_sigD8F0 => var_core_value_sig90FF(ox19b822(1003), var_core_value_sigD8F0),
      onReset: () => var_core_value_sig90FF(ox19b822(1003), null)
    }), (0, i[ox19b822(922)])(tt, {
      color: var_core_value_sigA7F6.color ?? var_core_value_sigE1AD,
      onChange: var_core_value_sig1475 => var_core_value_sig90FF(ox19b822(1393), var_core_value_sig1475)
    }), var_core_value_sig5A0F && (0, i[ox19b822(922)])(rt, {
      value: var_core_value_sigA7F6[ox19b822(1358)],
      onChange: var_core_value_sig08B7 => var_core_value_sig90FF("align", var_core_value_sig08B7)
    }), (0, i[ox19b822(922)])(nt, {
      active: var_core_value_sigA7F6.bold,
      type: ox19b822(1642),
      onClick: () => var_core_value_sig90FF(ox19b822(1642), !var_core_value_sigA7F6[ox19b822(1642)])
    }), (0, i[ox19b822(922)])(nt, {
      active: var_core_value_sigA7F6[ox19b822(1796)],
      type: ox19b822(1796),
      onClick: () => var_core_value_sig90FF("italic", !var_core_value_sigA7F6[ox19b822(1796)])
    })]
  });
}
function Po(var_core_value_sigB642) {
  return (0, i[ox3cae3c(922)])(t[ox3cae3c(1259)], {
    className: ox3cae3c(1742),
    options: So,
    value: String(var_core_value_sigB642[ox3cae3c(1324)] ?? e[ox3cae3c(1790)][ox3cae3c(1983)].opacity),
    onChange: var_core_value_sig2008 => var_core_value_sigB642.onChange(Number(var_core_value_sig2008))
  });
}
function Fo(var_core_value_sig9026) {
  let {
      adapter: var_core_value_sigDCD6,
      context: var_core_value_sig048B
    } = var_core_value_sig9026,
    var_core_value_sig1334 = (0, o[ox210226(858)])(a.LocaleService),
    var_core_value_sig2605 = pe(),
    var_core_value_sig5F20 = Do(var_core_value_sigDCD6, var_core_value_sig048B),
    var_core_value_sig019C = var_core_value_sig048B[ox210226(2036)][ox210226(1873)] === "title" ? var_core_value_sig048B.target["titleKey"] : "title",
    var_core_value_sigB296 = var_core_value_sig019C === ox210226(1247) ? Z[ox210226(740)] : Z[ox210226(1216)],
    var_core_value_sig7949 = jo(Eo(var_core_value_sigDCD6, var_core_value_sig048B, var_core_value_sigB296)),
    var_core_value_sig2DD9 = (0, r[ox210226(1687)])(() => mo[ox210226(1285)](var_core_value_sigEA04 => ({
      label: var_core_value_sig1334.t(var_core_value_sigEA04[ox210226(1535)]),
      value: var_core_value_sigEA04.value
    })), [var_core_value_sig1334]),
    var_core_value_sigCD501 = {
      align: var_core_value_sig7949[ox210226(1157)],
      bold: var_core_value_sig7949[ox210226(1642)],
      color: var_core_value_sig7949[ox210226(1393)] ?? undefined,
      content: var_core_value_sig7949[ox210226(1245)],
      fontSize: var_core_value_sig7949[ox210226(1003)],
      italic: var_core_value_sig7949[ox210226(1796)]
    },
    var_core_value_sigD362 = (0, r[ox210226(1365)])(var_core_value_sig496B => {
      const var_core_value_sig7161 = ox210226;
      var_core_value_sig5F20(var_core_value_sigB296, {
        ...var_core_value_sig7949,
        ...(var_core_value_sig496B[var_core_value_sig7161(1576)] === undefined ? {} : {
          text: var_core_value_sig496B[var_core_value_sig7161(1576)]
        }),
        ...(var_core_value_sig496B[var_core_value_sig7161(1358)] === undefined ? {} : {
          alignment: var_core_value_sig496B[var_core_value_sig7161(1358)]
        }),
        ...(var_core_value_sig496B[var_core_value_sig7161(1642)] === undefined ? {} : {
          bold: var_core_value_sig496B.bold
        }),
        ...(var_core_value_sig496B[var_core_value_sig7161(1393)] === undefined ? {} : {
          color: var_core_value_sig496B.color
        }),
        ...(var_core_value_sig496B.fontSize === undefined ? {} : {
          fontSize: var_core_value_sig496B[var_core_value_sig7161(1003)]
        }),
        ...(var_core_value_sig496B[var_core_value_sig7161(1796)] === undefined ? {} : {
          italic: var_core_value_sig496B[var_core_value_sig7161(1796)]
        })
      });
    }, [var_core_value_sigB296, var_core_value_sig7949, var_core_value_sig5F20]),
    var_core_value_sigC433 = (0, r[ox210226(1365)])((var_core_value_sig2AB8, var_core_value_sig3FCF) => {
      var_core_value_sigD362({
        [var_core_value_sig2AB8]: var_core_value_sig3FCF
      });
    }, [var_core_value_sigD362]);
  return (0, i[ox210226(1557)])(i[ox210226(1762)], {
    children: [(0, i[ox210226(922)])($, {
      className: ox210226(1069),
      children: (0, i[ox210226(922)])(t[ox210226(625)], {
        className: "!univer-h-7\x20!univer-w-full",
        size: ox210226(1014),
        value: Ao(var_core_value_sigCD501.content),
        ...var_core_value_sig2605,
        onChange: var_core_value_sig675A => var_core_value_sigD362({
          content: var_core_value_sig675A
        })
      })
    }), (0, i[ox210226(1557)])($, {
      children: [var_core_value_sig019C === "title" && (0, i[ox210226(922)])(Q, {
        children: (0, i[ox210226(922)])(t[ox210226(1259)], {
          className: ox210226(1742),
          options: var_core_value_sig2DD9,
          value: var_core_value_sig7949.visible === false ? ox210226(1588) : var_core_value_sig7949[ox210226(1712)] ?? e[ox210226(1790)][ox210226(955)],
          onChange: var_core_value_sig837F => var_core_value_sig5F20(Z[ox210226(1216)], {
            ...var_core_value_sig7949,
            visible: var_core_value_sig837F !== ox210226(1588),
            ...(var_core_value_sig837F === ox210226(1588) ? {} : {
              position: var_core_value_sig837F
            })
          })
        })
      }), (0, i[ox210226(922)])(No, {
        adapter: var_core_value_sigDCD6,
        alignControl: var_core_value_sig019C === ox210226(1703),
        context: var_core_value_sig048B,
        defaultColor: e[ox210226(1790)][ox210226(508)].color,
        style: var_core_value_sigCD501,
        onChange: var_core_value_sigC433
      })]
    })]
  });
}
function Io(var_core_value_sigF543) {
  var var_core_value_sig0806, var_core_value_sigE224, var_core_value_sig773E, var_core_value_sig83A7;
  let {
      adapter: var_core_value_sigFE18,
      context: var_core_value_sig816B
    } = var_core_value_sigF543,
    var_core_value_sigA89B = (0, o.useDependency)(a[ox2b5a9f(1419)]),
    var_core_value_sig5020 = pe(),
    var_core_value_sig8FB1 = Do(var_core_value_sigFE18, var_core_value_sig816B),
    var_core_value_sig3D4B = var_core_value_sig816B[ox2b5a9f(2036)][ox2b5a9f(1873)] === ox2b5a9f(1172) ? var_core_value_sig816B[ox2b5a9f(2036)] : undefined,
    var_core_value_sigCD77 = ko((var_core_value_sig3D4B == null ? undefined : var_core_value_sig3D4B[ox2b5a9f(1422)]) ?? ox2b5a9f(685)),
    var_core_value_sig9F28 = Eo(var_core_value_sigFE18, var_core_value_sig816B, Z.AXES) ?? {},
    var_core_value_sig8A50 = var_core_value_sig9F28[var_core_value_sigCD77] ?? {},
    var_core_value_sig8AF9 = {
      bold: (var_core_value_sig0806 = var_core_value_sig8A50[ox2b5a9f(1735)]) == null ? undefined : var_core_value_sig0806[ox2b5a9f(1642)],
      color: ((var_core_value_sigE224 = var_core_value_sig8A50.titleStyle) == null ? undefined : var_core_value_sigE224[ox2b5a9f(1393)]) ?? undefined,
      content: var_core_value_sig8A50[ox2b5a9f(1703)],
      fontSize: (var_core_value_sig773E = var_core_value_sig8A50[ox2b5a9f(1735)]) == null ? undefined : var_core_value_sig773E[ox2b5a9f(1003)],
      italic: (var_core_value_sig83A7 = var_core_value_sig8A50[ox2b5a9f(1735)]) == null ? undefined : var_core_value_sig83A7[ox2b5a9f(1796)]
    },
    var_core_value_sigCF441 = (0, r.useMemo)(() => _o[ox2b5a9f(1285)](var_core_value_sig7A62 => ({
      label: var_core_value_sigA89B.t(var_core_value_sig7A62[ox2b5a9f(1535)]),
      value: var_core_value_sig7A62[ox2b5a9f(1324)]
    })), [var_core_value_sigA89B]),
    var_core_value_sig020B = (0, r.useCallback)(var_core_value_sig9D6E => {
      const var_core_value_sigB205 = ox2b5a9f;
      var_core_value_sig8FB1(Z[var_core_value_sigB205(1856)], {
        ...var_core_value_sig9F28,
        [var_core_value_sigCD77]: {
          ...var_core_value_sig8A50,
          ...(var_core_value_sig9D6E[var_core_value_sigB205(1576)] === undefined ? {} : {
            title: var_core_value_sig9D6E[var_core_value_sigB205(1576)]
          }),
          titleStyle: {
            ...var_core_value_sig8A50[var_core_value_sigB205(1735)],
            ...(var_core_value_sig9D6E.bold === undefined ? {} : {
              bold: var_core_value_sig9D6E[var_core_value_sigB205(1642)]
            }),
            ...(var_core_value_sig9D6E[var_core_value_sigB205(1393)] === undefined ? {} : {
              color: var_core_value_sig9D6E[var_core_value_sigB205(1393)]
            }),
            ...(var_core_value_sig9D6E[var_core_value_sigB205(1003)] === undefined ? {} : {
              fontSize: var_core_value_sig9D6E.fontSize
            }),
            ...(var_core_value_sig9D6E[var_core_value_sigB205(1796)] === undefined ? {} : {
              italic: var_core_value_sig9D6E.italic
            })
          }
        }
      });
    }, [var_core_value_sig9F28, var_core_value_sig8A50, var_core_value_sigCD77, var_core_value_sig8FB1]),
    var_core_value_sig091A = (0, r.useCallback)((var_core_value_sigBF78, var_core_value_sig8AF3) => {
      var_core_value_sig020B({
        [var_core_value_sigBF78]: var_core_value_sig8AF3
      });
    }, [var_core_value_sig020B]);
  return (0, i[ox2b5a9f(1557)])(i[ox2b5a9f(1762)], {
    children: [(0, i.jsx)($, {
      className: "univer-w-full",
      children: (0, i.jsx)(t[ox2b5a9f(625)], {
        className: ox2b5a9f(881),
        size: "mini",
        value: Ao(var_core_value_sig8AF9[ox2b5a9f(1576)]),
        ...var_core_value_sig5020,
        onChange: var_core_value_sigA0CC => var_core_value_sig020B({
          content: var_core_value_sigA0CC
        })
      })
    }), (0, i[ox2b5a9f(1557)])($, {
      children: [(0, i[ox2b5a9f(922)])(Q, {
        children: (0, i[ox2b5a9f(922)])(t.Select, {
          className: ox2b5a9f(1742),
          options: var_core_value_sigCF441,
          value: var_core_value_sig8A50[ox2b5a9f(1909)] ?? e[ox2b5a9f(1790)][ox2b5a9f(708)][ox2b5a9f(1891)],
          onChange: var_core_value_sigB3A1 => var_core_value_sig8FB1(Z.AXES, {
            ...var_core_value_sig9F28,
            [var_core_value_sigCD77]: {
              ...var_core_value_sig8A50,
              titleAlignment: var_core_value_sigB3A1
            }
          })
        })
      }), (0, i[ox2b5a9f(922)])(No, {
        adapter: var_core_value_sigFE18,
        context: var_core_value_sig816B,
        defaultColor: e[ox2b5a9f(1790)][ox2b5a9f(508)][ox2b5a9f(1393)],
        style: var_core_value_sig8AF9,
        onChange: var_core_value_sig091A
      })]
    })]
  });
}
function Lo(var_core_value_sigC45A) {
  let {
      adapter: var_core_value_sig8A05,
      context: var_core_value_sig431F
    } = var_core_value_sigC45A,
    var_core_value_sig855C = Do(var_core_value_sig8A05, var_core_value_sig431F),
    var_core_value_sig222E = Eo(var_core_value_sig8A05, var_core_value_sig431F, Z[ox48369e(980)]),
    var_core_value_sig3A07 = typeof var_core_value_sig222E == ox48369e(1053) ? {
      visible: var_core_value_sig222E
    } : var_core_value_sig222E ?? {},
    var_core_value_sigE7EB = (0, r[ox48369e(1365)])((var_core_value_sig1FB9, var_core_value_sig53A9) => {
      var_core_value_sig855C(Z.LEGEND, {
        ...var_core_value_sig3A07,
        [var_core_value_sig1FB9]: var_core_value_sig53A9
      });
    }, [var_core_value_sig3A07, var_core_value_sig855C]);
  return (0, i[ox48369e(922)])($, {
    children: (0, i[ox48369e(922)])(No, {
      adapter: var_core_value_sig8A05,
      context: var_core_value_sig431F,
      defaultColor: e[ox48369e(1790)][ox48369e(508)][ox48369e(1393)],
      style: var_core_value_sig3A07,
      onChange: var_core_value_sigE7EB
    })
  });
}
function Ro(var_core_value_sig6125) {
  let {
      adapter: var_core_value_sig5781,
      context: var_core_value_sig13AB
    } = var_core_value_sig6125,
    var_core_value_sig7A4A = Do(var_core_value_sig5781, var_core_value_sig13AB),
    var_core_value_sigB7E2 = var_core_value_sig13AB[ox317e3c(2036)][ox317e3c(1873)] === ox317e3c(708) ? var_core_value_sig13AB[ox317e3c(2036)] : undefined,
    var_core_value_sigD477 = ko((var_core_value_sigB7E2 == null ? undefined : var_core_value_sigB7E2[ox317e3c(1422)]) ?? ox317e3c(685)),
    var_core_value_sig6149 = Eo(var_core_value_sig5781, var_core_value_sig13AB, Z.AXES) ?? {},
    var_core_value_sigEB82 = var_core_value_sig6149[var_core_value_sigD477] ?? {},
    var_core_value_sig843F = var_core_value_sigEB82[ox317e3c(1614)] ?? {},
    var_core_value_sig9FB7 = (0, r[ox317e3c(1365)])((var_core_value_sigDACD, var_core_value_sig691E) => {
      const var_core_value_sigD6D6 = ox317e3c;
      var_core_value_sig7A4A(Z[var_core_value_sigD6D6(1856)], {
        ...var_core_value_sig6149,
        [var_core_value_sigD477]: {
          ...var_core_value_sigEB82,
          label: {
            ...var_core_value_sig843F,
            [var_core_value_sigDACD]: var_core_value_sig691E
          }
        }
      });
    }, [var_core_value_sig6149, var_core_value_sigEB82, var_core_value_sigD477, var_core_value_sig843F, var_core_value_sig7A4A]);
  return (0, i.jsx)($, {
    children: (0, i[ox317e3c(922)])(No, {
      adapter: var_core_value_sig5781,
      context: var_core_value_sig13AB,
      defaultColor: e[ox317e3c(1790)].textStyle[ox317e3c(1393)],
      style: var_core_value_sig843F,
      onChange: var_core_value_sig9FB7
    })
  });
}
function zo(var_core_value_sigB7A4) {
  var var_core_value_sig295F, var_core_value_sigE36B, var_core_value_sigDA3B;
  let {
      adapter: var_core_value_sig9E32,
      context: var_core_value_sig26EC1
    } = var_core_value_sigB7A4,
    var_core_value_sigF226 = (0, o.useDependency)(a[oxd8c697(1419)]),
    var_core_value_sig4773 = Do(var_core_value_sig9E32, var_core_value_sig26EC1),
    var_core_value_sigB643 = Eo(var_core_value_sig9E32, var_core_value_sig26EC1, Z.PIE),
    var_core_value_sigF92F = (0, r[oxd8c697(1687)])(() => var_core_value_sigB643 ?? {}, [var_core_value_sigB643]),
    var_core_value_sig2346 = var_core_value_sig26EC1[oxd8c697(2036)].scope === oxd8c697(1187) ? var_core_value_sig26EC1.target[oxd8c697(1940)] : undefined,
    var_core_value_sig579A = var_core_value_sigF92F[oxd8c697(2021)],
    var_core_value_sig7E16 = (0, r.useMemo)(() => var_core_value_sigF92F.label ?? {}, [var_core_value_sigF92F[oxd8c697(1614)]]),
    var_core_value_sigA691 = var_core_value_sig7E16[oxd8c697(1755)] !== false,
    var_core_value_sig3C23 = (var_core_value_sig2346 == null ? undefined : var_core_value_sig2346.kind) === oxd8c697(592) ? ((var_core_value_sig295F = var_core_value_sigF92F[oxd8c697(618)]) == null ? undefined : var_core_value_sig295F[var_core_value_sig2346[oxd8c697(2016)]]) ?? {} : {},
    var_core_value_sigDAE6 = (var_core_value_sig579A == null || (var_core_value_sigE36B = var_core_value_sig579A.aggregate) == null ? undefined : var_core_value_sigE36B[oxd8c697(1169)]) ?? {},
    var_core_value_sigDD81 = (var_core_value_sig579A == null || (var_core_value_sigDA3B = var_core_value_sig579A[oxd8c697(1437)]) == null ? undefined : var_core_value_sigDA3B[oxd8c697(1487)]) ?? {},
    var_core_value_sig3870 = (0, r[oxd8c697(1687)])(() => ho[oxd8c697(1285)](var_core_value_sig8109 => ({
      label: var_core_value_sigF226.t(var_core_value_sig8109[oxd8c697(1535)]),
      value: var_core_value_sig8109[oxd8c697(1324)]
    })), [var_core_value_sigF226]),
    var_core_value_sig13D1 = (0, r[oxd8c697(1687)])(() => go[oxd8c697(1285)](var_core_value_sig7565 => ({
      label: var_core_value_sigF226.t(var_core_value_sig7565[oxd8c697(1535)]),
      value: var_core_value_sig7565[oxd8c697(1324)]
    })), [var_core_value_sigF226]),
    var_core_value_sigECFC = (0, r[oxd8c697(1687)])(() => _n[oxd8c697(1285)](({
      labelKey: var_core_value_sigD4FB,
      value: var_core_value_sig3E71
    }) => ({
      label: var_core_value_sigF226.t(var_core_value_sigD4FB),
      value: var_core_value_sig3E71
    })), [var_core_value_sigF226]),
    var_core_value_sig5E62 = (0, r[oxd8c697(1687)])(() => Co(var_core_value_sig7E16[oxd8c697(1108)] ?? undefined), [var_core_value_sig7E16[oxd8c697(1108)]]),
    var_core_value_sig3B89 = (0, r.useCallback)(var_core_value_sig0347 => {
      const var_core_value_sig52A3 = oxd8c697;
      var_core_value_sig4773(Z[var_core_value_sig52A3(1629)], {
        ...var_core_value_sigF92F,
        label: {
          ...var_core_value_sig7E16,
          ...var_core_value_sig0347
        }
      });
    }, [var_core_value_sigF92F, var_core_value_sig7E16, var_core_value_sig4773]),
    var_core_value_sig4B55 = (0, r[oxd8c697(1365)])((var_core_value_sigAD91, var_core_value_sigF64E) => {
      var_core_value_sig3B89({
        [var_core_value_sigAD91]: var_core_value_sigF64E
      });
    }, [var_core_value_sig3B89]),
    var_core_value_sig9E69 = (0, r[oxd8c697(1365)])(var_core_value_sig9B3D1 => {
      let var_core_value_sigB217 = wo(var_core_value_sig9B3D1);
      var_core_value_sigB217 !== undefined && var_core_value_sig3B89({
        contentType: var_core_value_sigB217
      });
    }, [var_core_value_sig3B89]),
    var_core_value_sig432A = (0, r[oxd8c697(1365)])(var_core_value_sig1FE6 => {
      let var_core_value_sig2471 = vo(var_core_value_sigF92F, var_core_value_sig2346, var_core_value_sig1FE6);
      var_core_value_sig2471 && var_core_value_sig4773(Z.PIE, var_core_value_sig2471);
    }, [var_core_value_sig2346, var_core_value_sigF92F, var_core_value_sig4773]),
    var_core_value_sig3B51 = (0, r.useCallback)(var_core_value_sigD1FC => {
      const var_core_value_sigE2F9 = oxd8c697;
      var_core_value_sig4773(Z[var_core_value_sigE2F9(1629)], yo(var_core_value_sigF92F, var_core_value_sigD1FC));
    }, [var_core_value_sigF92F, var_core_value_sig4773]);
  if ((var_core_value_sig2346 == null ? undefined : var_core_value_sig2346[oxd8c697(1201)]) === "pieSliceStyle" || (var_core_value_sig2346 == null ? undefined : var_core_value_sig2346[oxd8c697(1201)]) === "pieAggregateStyle") {
    let var_core_value_sigD689 = var_core_value_sig2346[oxd8c697(1201)] === oxd8c697(592) ? var_core_value_sig3C23 : var_core_value_sigDAE6;
    return (0, i[oxd8c697(1557)])($, {
      children: [(0, i[oxd8c697(922)])(Q, {
        className: "univer-w-8",
        children: (0, i[oxd8c697(922)])(Ze, {
          compact: true,
          color: typeof var_core_value_sigD689[oxd8c697(1393)] == oxd8c697(2002) ? var_core_value_sigD689[oxd8c697(1393)] : null,
          onChange: var_core_value_sig01B3 => var_core_value_sig432A({
            color: var_core_value_sig01B3 ?? null
          })
        })
      }), (0, i[oxd8c697(922)])(Q, {
        children: (0, i[oxd8c697(922)])(Po, {
          value: var_core_value_sigD689[oxd8c697(944)] ?? undefined,
          onChange: var_core_value_sig7442 => var_core_value_sig432A({
            fillOpacity: var_core_value_sig7442
          })
        })
      })]
    });
  }
  return (var_core_value_sig2346 == null ? undefined : var_core_value_sig2346.kind) === "pieConnectorStyle" ? (0, i[oxd8c697(1557)])($, {
    children: [(0, i.jsx)(t[oxd8c697(1138)], {
      checked: var_core_value_sigDD81.visible ?? e.PIE_CONNECTOR_VISIBLE_DEFAULT,
      onChange: var_core_value_sig7AE3 => var_core_value_sig3B51({
        visible: !!var_core_value_sig7AE3
      }),
      children: var_core_value_sigF226.t(X[oxd8c697(932)][oxd8c697(1145)])
    }), (0, i[oxd8c697(922)])(Q, {
      className: "univer-w-8",
      children: (0, i[oxd8c697(922)])(Ze, {
        compact: true,
        color: var_core_value_sigDD81[oxd8c697(1393)] ?? e[oxd8c697(1852)],
        onChange: var_core_value_sig1EB3 => var_core_value_sig3B51({
          color: var_core_value_sig1EB3 ?? null
        })
      })
    }), (0, i[oxd8c697(1557)])(oxd8c697(1998), {
      className: oxd8c697(1433),
      children: [(0, i.jsx)(t.InputNumber, {
        ref: var_core_value_sigE120 => var_core_value_sigE120 == null ? undefined : var_core_value_sigE120[oxd8c697(930)](oxd8c697(702), var_core_value_sigF226.t("chart-ui.pie.connectorWidth")),
        allowClear: true,
        allowEmpty: true,
        className: "!univer-h-7\x20univer-w-full",
        min: 0,
        value: var_core_value_sigDD81[oxd8c697(989)] ?? null,
        onChange: var_core_value_sigD6E7 => var_core_value_sig3B51({
          width: var_core_value_sigD6E7
        })
      }), var_core_value_sigDD81[oxd8c697(989)] == null && (0, i[oxd8c697(922)])(oxd8c697(1904), {
        "aria-hidden": "true",
        className: oxd8c697(988),
        children: var_core_value_sigF226.t("chart-ui.common.default")
      })]
    }), (0, i[oxd8c697(922)])(Q, {
      children: (0, i[oxd8c697(922)])(t[oxd8c697(1259)], {
        className: oxd8c697(1742),
        options: var_core_value_sigECFC,
        value: var_core_value_sigDD81[oxd8c697(704)] ?? e[oxd8c697(696)],
        onChange: var_core_value_sig3669 => var_core_value_sig3B51({
          dashType: var_core_value_sig3669
        })
      })
    }), (0, i.jsx)(Q, {
      children: (0, i[oxd8c697(922)])(Po, {
        value: var_core_value_sigDD81[oxd8c697(577)] ?? e.PIE_CONNECTOR_OPACITY_DEFAULT,
        onChange: var_core_value_sig5CBC => var_core_value_sig3B51({
          opacity: var_core_value_sig5CBC
        })
      })
    })]
  }) : (0, i[oxd8c697(1557)])(i.Fragment, {
    children: [(0, i[oxd8c697(1557)])($, {
      children: [(0, i.jsx)(t[oxd8c697(1138)], {
        checked: var_core_value_sigA691,
        onChange: var_core_value_sig20BE => var_core_value_sig3B89({
          visible: !!var_core_value_sig20BE
        }),
        children: var_core_value_sigF226.t(X.CONTROL[oxd8c697(1303)])
      }), (0, i[oxd8c697(922)])(Mo, {
        disabled: !var_core_value_sigA691,
        children: (0, i.jsx)(No, {
          adapter: var_core_value_sig9E32,
          context: var_core_value_sig26EC1,
          defaultColor: e[oxd8c697(1790)][oxd8c697(508)].color,
          style: {
            bold: var_core_value_sig7E16.bold ?? undefined,
            color: var_core_value_sig7E16[oxd8c697(1393)] ?? undefined,
            fontSize: var_core_value_sig7E16[oxd8c697(1003)] ?? undefined,
            italic: var_core_value_sig7E16[oxd8c697(1796)] ?? undefined
          },
          onChange: var_core_value_sig4B55
        })
      })]
    }), (0, i[oxd8c697(922)])($, {
      children: (0, i[oxd8c697(1557)])(Mo, {
        className: oxd8c697(1760),
        disabled: !var_core_value_sigA691,
        children: [(0, i[oxd8c697(922)])(Q, {
          children: (0, i[oxd8c697(922)])(t[oxd8c697(1259)], {
            className: oxd8c697(1742),
            options: var_core_value_sig3870,
            value: var_core_value_sig7E16.position ?? e[oxd8c697(1790)][oxd8c697(1252)][oxd8c697(1336)],
            onChange: var_core_value_sig6BD0 => var_core_value_sig3B89({
              position: var_core_value_sig6BD0
            })
          })
        }), (0, i[oxd8c697(922)])(Q, {
          className: oxd8c697(1970),
          children: (0, i[oxd8c697(922)])(t[oxd8c697(1010)], {
            className: oxd8c697(1742),
            options: var_core_value_sig13D1,
            value: var_core_value_sig5E62,
            onChange: var_core_value_sig9E69
          })
        })]
      })
    })]
  });
}
function Bo(var_core_value_sig542D) {
  var var_core_value_sigB225;
  let {
      adapter: var_core_value_sig8AAB,
      context: var_core_value_sigE82A
    } = var_core_value_sig542D,
    var_core_value_sigB2CF = (0, o.useDependency)(a[ox5f3d95(1419)]),
    var_core_value_sig5955 = Do(var_core_value_sig8AAB, var_core_value_sigE82A),
    var_core_value_sigF829 = var_core_value_sigE82A[ox5f3d95(2036)][ox5f3d95(1873)] === ox5f3d95(1187) ? var_core_value_sigE82A[ox5f3d95(2036)] : undefined,
    var_core_value_sig2900 = var_core_value_sigF829 == null ? undefined : var_core_value_sigF829[ox5f3d95(1940)],
    var_core_value_sig51D8 = Eo(var_core_value_sig8AAB, var_core_value_sigE82A, Z.SERIES) ?? [],
    var_core_value_sig8693 = Eo(var_core_value_sig8AAB, var_core_value_sigE82A, Z.PARETO),
    var_core_value_sigAACD = (0, r[ox5f3d95(1687)])(() => {
      const var_core_value_sig8C15 = ox5f3d95;
      if ((var_core_value_sig2900 == null ? undefined : var_core_value_sig2900[var_core_value_sig8C15(1201)]) === var_core_value_sig8C15(1645)) {
        var var_core_value_sig6DF7;
        return ((var_core_value_sig6DF7 = var_core_value_sig51D8[var_core_value_sig8C15(1507)](var_core_value_sig76BA => var_core_value_sig76BA[var_core_value_sig8C15(1301)] === var_core_value_sig2900[var_core_value_sig8C15(1912)])) == null ? undefined : var_core_value_sig6DF7[var_core_value_sig8C15(1169)]) ?? {};
      }
      if ((var_core_value_sig2900 == null ? undefined : var_core_value_sig2900[var_core_value_sig8C15(1201)]) === "paretoStyle") return var_core_value_sig2900[var_core_value_sig8C15(520)] === var_core_value_sig8C15(1851) ? (var_core_value_sig8693 == null ? undefined : var_core_value_sig8693[var_core_value_sig8C15(785)]) ?? {} : (var_core_value_sig8693 == null ? undefined : var_core_value_sig8693[var_core_value_sig8C15(1801)]) ?? {};
      if ((var_core_value_sig2900 == null ? undefined : var_core_value_sig2900[var_core_value_sig8C15(1201)]) === var_core_value_sig8C15(710)) {
        var var_core_value_sigB411;
        return ((var_core_value_sigB411 = var_core_value_sig51D8[var_core_value_sig8C15(1507)](var_core_value_sigFBFA => var_core_value_sigFBFA.selector === var_core_value_sig2900[var_core_value_sig8C15(1912)])) == null || (var_core_value_sigB411 = var_core_value_sigB411[var_core_value_sig8C15(1169)].waterfallStyles) == null ? undefined : var_core_value_sigB411[var_core_value_sig2900[var_core_value_sig8C15(520)]]) ?? {};
      }
      return {};
    }, [var_core_value_sig2900, var_core_value_sig8693, var_core_value_sig51D8]),
    var_core_value_sig895A = (0, r[ox5f3d95(1365)])(var_core_value_sigA81B => {
      const var_core_value_sigFE8D = ox5f3d95;
      var var_core_value_sig8595;
      if (!var_core_value_sig2900) return;
      if (var_core_value_sig2900[var_core_value_sigFE8D(1201)] === var_core_value_sigFE8D(1645)) {
        let var_core_value_sigDF87 = var_core_value_sig51D8[var_core_value_sigFE8D(1507)](var_core_value_sigF602 => var_core_value_sigF602.selector === var_core_value_sig2900[var_core_value_sigFE8D(1912)]);
        var_core_value_sig5955(Z[var_core_value_sigFE8D(987)], [{
          name: (var_core_value_sigDF87 == null ? undefined : var_core_value_sigDF87.name) ?? "",
          selector: var_core_value_sig2900[var_core_value_sigFE8D(1912)],
          style: {
            ...(var_core_value_sigDF87 == null ? undefined : var_core_value_sigDF87[var_core_value_sigFE8D(1169)]),
            ...var_core_value_sigA81B
          }
        }]);
        return;
      }
      if (var_core_value_sig2900[var_core_value_sigFE8D(1201)] === var_core_value_sigFE8D(920)) {
        let var_core_value_sig9EE0 = var_core_value_sig2900[var_core_value_sigFE8D(520)] === "bar" ? var_core_value_sigFE8D(785) : var_core_value_sigFE8D(1801);
        var_core_value_sig5955(Z[var_core_value_sigFE8D(775)], {
          ...var_core_value_sig8693,
          [var_core_value_sig9EE0]: {
            ...(var_core_value_sig8693 == null ? undefined : var_core_value_sig8693[var_core_value_sig9EE0]),
            ...var_core_value_sigA81B
          }
        });
        return;
      }
      if (var_core_value_sig2900[var_core_value_sigFE8D(1201)] !== "waterfallStyle") return;
      let var_core_value_sigF8DE = var_core_value_sig51D8[var_core_value_sigFE8D(1507)](var_core_value_sigF0511 => var_core_value_sigF0511.selector === var_core_value_sig2900[var_core_value_sigFE8D(1912)]);
      var_core_value_sig5955(Z[var_core_value_sigFE8D(987)], [{
        name: (var_core_value_sigF8DE == null ? undefined : var_core_value_sigF8DE.name) ?? "",
        selector: var_core_value_sig2900[var_core_value_sigFE8D(1912)],
        style: {
          ...(var_core_value_sigF8DE == null ? undefined : var_core_value_sigF8DE[var_core_value_sigFE8D(1169)]),
          waterfallStyles: {
            ...(var_core_value_sigF8DE == null ? undefined : var_core_value_sigF8DE.style[var_core_value_sigFE8D(794)]),
            [var_core_value_sig2900.part]: {
              ...(var_core_value_sigF8DE == null || (var_core_value_sig8595 = var_core_value_sigF8DE.style[var_core_value_sigFE8D(794)]) == null ? undefined : var_core_value_sig8595[var_core_value_sig2900[var_core_value_sigFE8D(520)]]),
              ...var_core_value_sigA81B
            }
          }
        }
      }]);
    }, [var_core_value_sig2900, var_core_value_sig8693, var_core_value_sig51D8, var_core_value_sig5955]);
  return var_core_value_sig2900 ? (0, i[ox5f3d95(1557)])($, {
    children: [(0, i.jsx)(Q, {
      className: ox5f3d95(888),
      children: (0, i[ox5f3d95(922)])(Ze, {
        compact: true,
        color: typeof var_core_value_sigAACD.color == ox5f3d95(2002) ? var_core_value_sigAACD[ox5f3d95(1393)] : null,
        onChange: var_core_value_sigFE76 => var_core_value_sig895A({
          color: var_core_value_sigFE76 ?? null
        })
      })
    }), (0, i[ox5f3d95(922)])(Q, {
      children: (0, i[ox5f3d95(922)])(Po, {
        value: var_core_value_sigAACD[ox5f3d95(944)] ?? undefined,
        onChange: var_core_value_sig84C8 => var_core_value_sig895A({
          fillOpacity: var_core_value_sig84C8
        })
      })
    }), (0, i[ox5f3d95(922)])(t[ox5f3d95(1138)], {
      checked: ((var_core_value_sigB225 = var_core_value_sigAACD[ox5f3d95(1614)]) == null ? undefined : var_core_value_sigB225[ox5f3d95(1755)]) ?? false,
      onChange: var_core_value_sig80C0 => var_core_value_sig895A({
        label: {
          visible: !!var_core_value_sig80C0
        }
      }),
      children: var_core_value_sigB2CF.t(X[ox5f3d95(932)][ox5f3d95(1303)])
    })]
  }) : (0, i[ox5f3d95(922)])(i.Fragment, {});
}
function Vo(var_core_value_sigA764) {
  switch (var_core_value_sigA764[ox3ac36e(2036)][ox3ac36e(1873)]) {
    case ox3ac36e(1703):
      return Fo;
    case ox3ac36e(1172):
      return Io;
    case ox3ac36e(1565):
      return Lo;
    case ox3ac36e(708):
      return Ro;
    case "mark":
      var var_core_value_sigC3D9;
      return (var_core_value_sigC3D9 = var_core_value_sigA764[ox3ac36e(2036)].directEdit) != null && var_core_value_sigC3D9[ox3ac36e(1201)] && bo[ox3ac36e(863)](var_core_value_sigA764[ox3ac36e(2036)][ox3ac36e(1940)].kind) ? zo : Bo;
    default:
      return null;
  }
}
function Ho(var_core_value_sigA6C0) {
  let var_core_value_sigFF70 = var_core_value_sigA6C0.popup[ox16fc72(1139)],
    var_core_value_sigB469 = (0, o[ox16fc72(858)])(a[ox16fc72(1419)]),
    var_core_value_sig0276 = (0, o.useDependency)(to);
  if (!var_core_value_sigFF70) return null;
  let var_core_value_sigFA20 = var_core_value_sig0276[ox16fc72(977)](var_core_value_sigFF70[ox16fc72(1871)]),
    var_core_value_sig2752 = var_core_value_sigFF70,
    var_core_value_sig0E1A = Vo(var_core_value_sig2752);
  return (0, i.jsxs)(ox16fc72(1998), {
    className: (0, t[ox16fc72(1916)])(ox16fc72(699), t[ox16fc72(1190)]),
    "data-chart-element-float-menu": var_core_value_sigFF70.target["scope"],
    children: [(0, i[ox16fc72(922)])("div", {
      className: "univer-whitespace-nowrap\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-100",
      children: var_core_value_sigB469.t(To(var_core_value_sigFF70))
    }), (0, i[ox16fc72(922)])("div", {
      className: ox16fc72(1072),
      children: var_core_value_sig0E1A ? (0, i.jsx)(var_core_value_sig0E1A, {
        adapter: var_core_value_sigFA20,
        context: var_core_value_sig2752
      }) : null
    })]
  });
}
function Uo(var_core_value_sig6A48, var_core_value_sig2D2A) {
  return var_core_value_sig6A48[ox1f5a57(1579)] === var_core_value_sig2D2A[ox1f5a57(1579)] && var_core_value_sig6A48[ox1f5a57(799)]((var_core_value_sig22B4, var_core_value_sigBB37) => var_core_value_sig22B4 === var_core_value_sig2D2A[var_core_value_sigBB37]);
}
function Wo(var_core_value_sig1D22) {
  return {
    getState: (var_core_value_sig0C51, var_core_value_sigADA4) => {
      let var_core_value_sig0E48 = var_core_value_sig1D22[ox5a5d91(923)](var_core_value_sig0C51);
      if (var_core_value_sig0E48) return var_core_value_sig1D22[ox5a5d91(1621)].getViewState(var_core_value_sigADA4)[ox5a5d91(977)](var_core_value_sig0E48);
    },
    setState: (var_core_value_sig495B, var_core_value_sig310C, var_core_value_sig759E) => {
      var var_core_value_sig6C80;
      let var_core_value_sig6B99 = var_core_value_sig1D22.getHostAdapter(var_core_value_sig495B);
      if (!var_core_value_sig6B99) return;
      let var_core_value_sig6ADC = var_core_value_sig1D22[ox24b81c(1621)].getViewState(var_core_value_sig310C);
      (var_core_value_sig6C80 = var_core_value_sig6ADC[ox24b81c(1023)]) == null || var_core_value_sig6C80[ox24b81c(678)](var_core_value_sig6ADC, var_core_value_sig6B99, var_core_value_sig759E);
    },
    observeSizeOptions: (var_core_value_sig41AD, var_core_value_sigDBC2) => {
      var var_core_value_sig7739;
      let var_core_value_sig4040 = (var_core_value_sig7739 = var_core_value_sig1D22[ox58fb89(923)](var_core_value_sig41AD)) == null ? undefined : var_core_value_sig7739.getChartModel();
      return var_core_value_sig4040 ? var_core_value_sig4040[ox58fb89(688)].pipe((0, u.map)(var_core_value_sig0B45 => var_core_value_sig0B45[ox58fb89(1684)](var_core_value_sigDBC2)), (0, u.distinctUntilChanged)(Uo)) : (0, u.of)(var_core_value_sigDBC2);
    },
    close: var_core_value_sig1D22[ox4b0f8d(621)],
    openFullPanel: var_core_value_sig1D22.openFullPanel
  };
}
var Go = "@univerjs-pro/chart-ui",
  Ko = "1.0.0-insiders.20260907-70fc579";
let qo = class extends a.Disposable {
  constructor(var_core_value_sig1AAA, var_core_value_sig58DB) {
    super(), this[ox54d5fd(1896)] = var_core_value_sig1AAA, this[ox54d5fd(965)] = var_core_value_sig58DB, this[ox54d5fd(1255)](), this[ox54d5fd(1958)]();
  }
  _registerIcons() {
    this[ox3317f3(774)](this[ox3317f3(965)][ox3317f3(665)]({
      AreaChartIcon: n[ox3317f3(1094)],
      BarChartIcon: n[ox3317f3(482)],
      BoxplotIcon: n[ox3317f3(1400)],
      BubbleIcon: n.BubbleIcon,
      CandlestickChartIcon: n.CandlestickChartIcon,
      ChartIcon: n[ox3317f3(515)],
      ChordChartIcon: n[ox3317f3(745)],
      CloudOutlineIcon: n[ox3317f3(1708)],
      ColumnChartIcon: n[ox3317f3(1689)],
      ComboChartIcon: n.ComboChartIcon,
      FunnelIcon: n[ox3317f3(532)],
      GaugeChartIcon: n[ox3317f3(782)],
      HeatmapIcon: n.HeatmapIcon,
      HistogramChartIcon: n[ox3317f3(1714)],
      LineChartIcon: n.LineChartIcon,
      PieChartIcon: n[ox3317f3(1995)],
      RadarChartIcon: n[ox3317f3(1288)],
      RelationshipIcon: n[ox3317f3(1946)],
      SankeyIcon: n[ox3317f3(1455)],
      ScatterChartIcon: n[ox3317f3(1261)],
      SunburstChartIcon: n[ox3317f3(1850)],
      TreemapChartIcon: n.TreemapChartIcon,
      WaterfallChartIcon: n.WaterfallChartIcon
    }));
  }
  _registerComponents() {
    this[ox26692e(774)](this[ox26692e(1896)].register(co, Ho));
  }
};
qo = Ee([Te(0, (0, a.Inject)(o.ComponentManager)), Te(1, (0, a.Inject)(o.IconManager))], qo);
var Jo = class extends a.Disposable {
  constructor(...var_core_value_sig4840) {
    super(...var_core_value_sig4840), b(this, "_providers", []);
  }
  register(var_core_value_sigB76D) {
    return this._providers[ox110276(1447)](var_core_value_sigB76D), (0, a.toDisposable)(() => {
      const var_core_value_sig36F8 = ox110276;
      let var_core_value_sig03E1 = this._providers["indexOf"](var_core_value_sigB76D);
      var_core_value_sig03E1 >= 0 && this._providers[var_core_value_sig36F8(2032)](var_core_value_sig03E1, 1);
    });
  }
  exportImage(var_core_value_sig1015, var_core_value_sig62231) {
    var var_core_value_sigC6B6;
    return ((var_core_value_sigC6B6 = this._providers[ox4381a7(1507)](var_core_value_sigBB57 => var_core_value_sigBB57.supports(var_core_value_sig1015))) == null ? undefined : var_core_value_sigC6B6[ox4381a7(1330)](var_core_value_sig1015, var_core_value_sig62231)) ?? Promise[ox4381a7(1710)](undefined);
  }
  dispose() {
    this[ox3d0baa(1402)][ox3d0baa(1579)] = 0, super[ox3d0baa(1706)]();
  }
};
const Yo = new Set(["allSeriesStyle", "appearance", "area", "bar", "axes", "axisPointer", "candlestick", "funnel", "heatmap", "invalidValueStrategy", "legend", "pareto", "pie", "plotArea", "radar", "relation", "subtitle", "theme", "title", "treemap", "trendlines", "waterfall", "wordCloud"]),
  Xo = new Set(["mappingFields", "sunburstFields", "gaugeFields"]);
var Zo = class {
  constructor() {
    b(this, ox1ecbe0(1827), new WeakMap());
  }
  get(var_core_value_sig498A, var_core_value_sigEF45) {
    return this._project(var_core_value_sig498A, var_core_value_sigEF45);
  }
  observe(var_core_value_sig36FE, var_core_value_sig3AF5) {
    let var_core_value_sig14E6 = this[ox288d68(1827)][ox288d68(977)](var_core_value_sig36FE);
    var_core_value_sig14E6 || (var_core_value_sig14E6 = new Map(), this._observables[ox288d68(1023)](var_core_value_sig36FE, var_core_value_sig14E6));
    let var_core_value_sig8690 = var_core_value_sig14E6[ox288d68(977)](var_core_value_sig3AF5);
    if (var_core_value_sig8690) return var_core_value_sig8690;
    let var_core_value_sigDF29 = this._dependencies(var_core_value_sig36FE, var_core_value_sig3AF5)[ox288d68(505)]((0, u.map)(() => this[ox288d68(977)](var_core_value_sig36FE, var_core_value_sig3AF5)), (0, u.distinctUntilChanged)((var_core_value_sig7C4A, var_core_value_sigE799) => (0, a.deepCompare)(var_core_value_sig7C4A, var_core_value_sigE799)), (0, u.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    return var_core_value_sig14E6.set(var_core_value_sig3AF5, var_core_value_sigDF29), var_core_value_sigDF29;
  }
  _dependencies(var_core_value_sigC0F8, var_core_value_sig3C75) {
    if (var_core_value_sig3C75 === ox40e8a8(1257)) return (0, u[ox40e8a8(952)])([var_core_value_sigC0F8.chartType$, var_core_value_sigC0F8[ox40e8a8(1982)]]);
    if (var_core_value_sig3C75 === "histogram" || var_core_value_sig3C75 === ox40e8a8(1653)) return (0, u[ox40e8a8(952)])([var_core_value_sigC0F8.chartType$, var_core_value_sigC0F8[ox40e8a8(968)], var_core_value_sigC0F8.style$]);
    if (var_core_value_sig3C75 === ox40e8a8(837)) return (0, u.combineLatest)([var_core_value_sigC0F8.chartType$, var_core_value_sigC0F8[ox40e8a8(968)], var_core_value_sigC0F8.style$, var_core_value_sigC0F8.config$]);
    if (Yo[ox40e8a8(863)](var_core_value_sig3C75)) return var_core_value_sigC0F8[ox40e8a8(1982)];
    if (Xo.has(var_core_value_sig3C75) || var_core_value_sig3C75 === ox40e8a8(809) || var_core_value_sig3C75 === ox40e8a8(934) || var_core_value_sig3C75 === "gaugeLabelIndex" || var_core_value_sig3C75 === ox40e8a8(756) || var_core_value_sig3C75 === ox40e8a8(1931) || var_core_value_sig3C75 === "chordMapping") return var_core_value_sigC0F8[ox40e8a8(968)];
    switch (var_core_value_sig3C75) {
      case ox40e8a8(553):
        return var_core_value_sigC0F8[ox40e8a8(1968)];
      case ox40e8a8(623):
        return var_core_value_sigC0F8[ox40e8a8(1863)];
      case ox40e8a8(1930):
        return var_core_value_sigC0F8.config$;
      case ox40e8a8(1889):
      case ox40e8a8(1598):
      case ox40e8a8(1782):
        return var_core_value_sigC0F8[ox40e8a8(1982)];
      default:
        return (0, u.combineLatest)([var_core_value_sigC0F8[ox40e8a8(1968)], var_core_value_sigC0F8.context$, var_core_value_sigC0F8[ox40e8a8(1982)], var_core_value_sigC0F8.config$]);
    }
  }
  _project(var_core_value_sig992D, var_core_value_sigE4E4) {
    if (Yo[ox355b67(863)](var_core_value_sigE4E4) || var_core_value_sigE4E4 === ox355b67(623) || var_core_value_sigE4E4 === ox355b67(1257) || var_core_value_sigE4E4 === "histogram" || var_core_value_sigE4E4 === ox355b67(1653)) return (0, e[ox355b67(1908)])(var_core_value_sig992D, var_core_value_sigE4E4);
    if (Xo[ox355b67(863)](var_core_value_sigE4E4)) return Qo(var_core_value_sig992D, var_core_value_sig992D[ox355b67(1887)]);
    switch (var_core_value_sigE4E4) {
      case ox355b67(553):
        return var_core_value_sig992D[ox355b67(553)];
      case ox355b67(837):
        return es(var_core_value_sig992D);
      case ox355b67(1930):
        return ts(var_core_value_sig992D);
      case "sunburstHierarchyIndexes":
        return var_core_value_sig992D[ox355b67(1887)][ox355b67(1448)] ?? [];
      case "sunburstValueIndex":
      case "gaugeValueIndex":
        var var_core_value_sigA4B0;
        return (var_core_value_sigA4B0 = var_core_value_sig992D[ox355b67(1887)][ox355b67(1238)]) == null ? undefined : var_core_value_sigA4B0[0];
      case "gaugeLabelIndex":
        var var_core_value_sig5F50;
        return (var_core_value_sig5F50 = var_core_value_sig992D[ox355b67(1887)][ox355b67(1448)]) == null ? undefined : var_core_value_sig5F50[0];
      case "sunburstStyle":
        return var_core_value_sig992D.style[ox355b67(1600)];
      case ox355b67(1598):
        return var_core_value_sig992D[ox355b67(1169)][ox355b67(1385)];
      case "chordStyle":
        return var_core_value_sig992D.style[ox355b67(712)];
      case ox355b67(1931):
        return $o(var_core_value_sig992D);
      case ox355b67(1050):
        {
          let [var_core_value_sig1BBD, var_core_value_sigF704] = var_core_value_sig992D[ox355b67(1887)][ox355b67(1448)] ?? [],
            [var_core_value_sig2BCF] = var_core_value_sig992D.context[ox355b67(1238)] ?? [];
          return var_core_value_sig1BBD === undefined || var_core_value_sigF704 === undefined ? undefined : {
            sourceIndex: var_core_value_sig1BBD,
            targetIndex: var_core_value_sigF704,
            ...(var_core_value_sig2BCF === undefined ? {} : {
              valueIndex: var_core_value_sig2BCF
            })
          };
        }
      default:
        return;
    }
  }
};
function Qo(var_core_value_sig91FE, var_core_value_sig528C) {
  let {
    source: var_core_value_sig749D,
    sourceLabels: var_core_value_sig1FB8
  } = var_core_value_sig91FE.dataSource[ox46e5d9(1753)]();
  return var_core_value_sig749D.map((var_core_value_sig4494, var_core_value_sigFFAF) => {
    const var_core_value_sig478B = ox46e5d9;
    var var_core_value_sig1E21, var_core_value_sig9DBF;
    let var_core_value_sig36CC = (var_core_value_sig1E21 = var_core_value_sig528C[var_core_value_sig478B(760)]) == null ? undefined : var_core_value_sig1E21[var_core_value_sigFFAF];
    return {
      label: (var_core_value_sig36CC != null && var_core_value_sig36CC[var_core_value_sig478B(1342)]() ? var_core_value_sig36CC : undefined) ?? (var_core_value_sig1FB8 == null || (var_core_value_sig9DBF = var_core_value_sig1FB8[var_core_value_sigFFAF]) == null ? undefined : var_core_value_sig9DBF[var_core_value_sig478B(1507)](var_core_value_sigB601 => var_core_value_sigB601[var_core_value_sig478B(1342)]() !== "")) ?? "",
      value: String(var_core_value_sigFFAF)
    };
  });
}
function $o(var_core_value_sig032D) {
  let var_core_value_sig27FA = Qo(var_core_value_sig032D, var_core_value_sig032D.context),
    var_core_value_sig533B = new Set(var_core_value_sig032D[oxc30536(1887)].categoryResourceIndexes ?? []),
    var_core_value_sig6434 = new Set(var_core_value_sig032D[oxc30536(1887)].seriesResourceIndexes ?? []);
  return {
    categoryFields: var_core_value_sig27FA[oxc30536(1573)](var_core_value_sigA568 => var_core_value_sig533B.has(Number(var_core_value_sigA568.value))),
    valueFields: var_core_value_sig27FA.filter(var_core_value_sigD22D => var_core_value_sig6434[oxc30536(863)](Number(var_core_value_sigD22D[oxc30536(1324)])))
  };
}
function es(var_core_value_sig398A) {
  let var_core_value_sig1760 = (0, e[ox849714(1908)])(var_core_value_sig398A, ox849714(837));
  return Object[ox849714(1421)](var_core_value_sig1760).flatMap(([var_core_value_sig85D5, var_core_value_sig5D2E]) => {
    const var_core_value_sig7221 = ox849714;
    var var_core_value_sig0A5A;
    if (!var_core_value_sig5D2E) return [];
    let {
        name: var_core_value_sigE6D6,
        ...var_core_value_sig8507
      } = var_core_value_sig5D2E,
      var_core_value_sig8A7F = (var_core_value_sig0A5A = var_core_value_sig398A[var_core_value_sig7221(1737)]) == null || (var_core_value_sig0A5A = var_core_value_sig0A5A[var_core_value_sig7221(837)]) == null ? undefined : var_core_value_sig0A5A.find(var_core_value_sig8B71 => var_core_value_sig8B71[var_core_value_sig7221(1709)] === Number(var_core_value_sig85D5));
    return [{
      dataPointOptions: ((var_core_value_sig8A7F == null ? undefined : var_core_value_sig8A7F[var_core_value_sig7221(1914)]) ?? []).map((var_core_value_sigAEFB, var_core_value_sig826B) => {
        const var_core_value_sigCF89 = var_core_value_sig7221;
        var var_core_value_sig00CB;
        return {
          label: ((var_core_value_sig00CB = var_core_value_sig398A[var_core_value_sigCF89(1737)]) == null || (var_core_value_sig00CB = var_core_value_sig00CB.category) == null || (var_core_value_sig00CB = var_core_value_sig00CB[var_core_value_sigCF89(1914)][var_core_value_sig826B]) == null ? undefined : var_core_value_sig00CB[var_core_value_sigCF89(1614)]) ?? var_core_value_sigAEFB.label ?? String(var_core_value_sig826B + 1),
          value: String(var_core_value_sig826B)
        };
      }),
      name: var_core_value_sigE6D6,
      selector: Number(var_core_value_sig85D5),
      style: var_core_value_sig8507
    }];
  });
}
function ts(var_core_value_sig7C7A) {
  var var_core_value_sig78E8, var_core_value_sigF002;
  let var_core_value_sig715D = ((var_core_value_sig78E8 = var_core_value_sig7C7A[ox5859a0(1737)]) == null || (var_core_value_sig78E8 = var_core_value_sig78E8.category) == null ? undefined : var_core_value_sig78E8[ox5859a0(1914)]) ?? [],
    var_core_value_sigEB90 = new Map();
  return (var_core_value_sigF002 = var_core_value_sig7C7A[ox5859a0(1737)]) == null || (var_core_value_sigF002 = var_core_value_sigF002[ox5859a0(837)]) == null || (var_core_value_sigF002 = var_core_value_sigF002[0]) == null || var_core_value_sigF002[ox5859a0(1914)].forEach((var_core_value_sig9E81, var_core_value_sig8295) => {
    const var_core_value_sigA975 = ox5859a0;
    var var_core_value_sig1263;
    let var_core_value_sig457C = ((var_core_value_sig1263 = var_core_value_sig715D[var_core_value_sig8295]) == null ? undefined : var_core_value_sig1263.label) ?? var_core_value_sig9E81[var_core_value_sigA975(1614)] ?? String(var_core_value_sig8295 + 1),
      var_core_value_sigA4E6 = typeof var_core_value_sig9E81[var_core_value_sigA975(1324)] == var_core_value_sigA975(1577) ? var_core_value_sig9E81[var_core_value_sigA975(1324)] : 0;
    var_core_value_sigEB90[var_core_value_sigA975(1023)](var_core_value_sig457C, (var_core_value_sigEB90[var_core_value_sigA975(977)](var_core_value_sig457C) ?? 0) + var_core_value_sigA4E6);
  }), Array[ox5859a0(2034)](var_core_value_sigEB90.entries())[ox5859a0(1573)](([, var_core_value_sig934F]) => var_core_value_sig934F > 0)[ox5859a0(1352)]((var_core_value_sig74A7, var_core_value_sig3685) => var_core_value_sig3685[1] - var_core_value_sig74A7[1]).map(([var_core_value_sigC621], var_core_value_sig86D7) => ({
    label: var_core_value_sigC621,
    value: String(var_core_value_sig86D7)
  }));
}
function ns(var_core_value_sig9506, var_core_value_sigC460) {
  let var_core_value_sig00D0 = new a[ox36a8ff(1622)](),
    var_core_value_sig2880 = var_core_value_sig431B1 => var_core_value_sig77EE => var_core_value_sigC460[ox36a8ff(1156)](var_core_value_sig77EE.getChartModel(), var_core_value_sig431B1);
  return var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(553), {
    get: var_core_value_sig2880("chartType"),
    set: (var_core_value_sig5C7C, var_core_value_sig87E2) => var_core_value_sig5C7C[ox36a8ff(1254)]({
      type: (0, e[ox36a8ff(2005)])(var_core_value_sig87E2)
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(954), {
    get: var_core_value_sig2880(ox36a8ff(954))
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506.registerViewState(ox36a8ff(727), {
    get: var_core_value_sig2880(ox36a8ff(727))
  })), var_core_value_sig00D0.add(var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(809), {
    get: var_core_value_sig2880(ox36a8ff(809)),
    set: (var_core_value_sig2E04, var_core_value_sig2EDD) => var_core_value_sig2E04[ox36a8ff(1254)]({
      mapping: {
        hierarchyIndexes: var_core_value_sig2EDD
      }
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(934), {
    get: var_core_value_sig2880(ox36a8ff(934)),
    set: (var_core_value_sig27D2, var_core_value_sig355D) => var_core_value_sig27D2.commit({
      mapping: {
        seriesIndexes: var_core_value_sig355D === undefined ? null : [var_core_value_sig355D]
      }
    })
  })), var_core_value_sig00D0.add(var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(1889), {
    get: var_core_value_sig2880(ox36a8ff(1889)),
    set: (var_core_value_sig8B21, var_core_value_sigEB36) => var_core_value_sig8B21[ox36a8ff(1254)]({
      sunburst: var_core_value_sigEB36 ?? null
    })
  })), var_core_value_sig00D0.add(var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(860), {
    get: var_core_value_sig2880(ox36a8ff(860))
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506.registerViewState(ox36a8ff(1786), {
    get: var_core_value_sig2880(ox36a8ff(1786)),
    set: (var_core_value_sig5C27, var_core_value_sigD494) => var_core_value_sig5C27[ox36a8ff(1254)]({
      mapping: {
        categoryIndex: var_core_value_sigD494 ?? null
      }
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(756), {
    get: var_core_value_sig2880(ox36a8ff(756)),
    set: (var_core_value_sigBF6D, var_core_value_sigD051) => var_core_value_sigBF6D[ox36a8ff(1254)]({
      mapping: {
        seriesIndexes: var_core_value_sigD051 === undefined ? null : [var_core_value_sigD051]
      }
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506.registerViewState(ox36a8ff(1598), {
    get: var_core_value_sig2880("gaugeStyle"),
    set: (var_core_value_sig16D9, var_core_value_sigF378) => var_core_value_sig16D9[ox36a8ff(1254)]({
      gauge: var_core_value_sigF378 ?? null
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506[ox36a8ff(1951)](ox36a8ff(1931), {
    get: var_core_value_sig2880("chordFields")
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506.registerViewState(ox36a8ff(1050), {
    get: var_core_value_sig2880(ox36a8ff(1050)),
    set: (var_core_value_sig5F6C, var_core_value_sig7E85) => var_core_value_sig5F6C[ox36a8ff(1254)]({
      mapping: {
        chord: var_core_value_sig7E85 ?? null
      }
    })
  })), var_core_value_sig00D0[ox36a8ff(519)](var_core_value_sig9506.registerViewState(ox36a8ff(1782), {
    get: var_core_value_sig2880(ox36a8ff(1782)),
    set: (var_core_value_sigF204, var_core_value_sig7A15) => var_core_value_sigF204.commit({
      chord: var_core_value_sig7A15 ?? null
    })
  })), var_core_value_sig00D0;
}
const rs = ["allSeriesStyle", "appearance", "area", "bar", "autoGradientFill", "axes", "axisPointer", "candlestick", "funnel", "heatmap", "histogram", "invalidValueStrategy", "legend", "pareto", "pie", "plotArea", "radar", "relation", "subtitle", "theme", "title", "treemap", "trendlines", "waterfall", "wordCloud"];
function is(var_core_value_sig76AC, var_core_value_sigEA39, var_core_value_sig252C) {
  return var_core_value_sig76AC[ox21d7c3(1951)](var_core_value_sig252C, {
    get: var_core_value_sigEEA6 => var_core_value_sigEA39[ox21d7c3(1156)](var_core_value_sigEEA6[ox21d7c3(1066)](), var_core_value_sig252C),
    set: (var_core_value_sigEAE1, var_core_value_sigC69F) => var_core_value_sigEAE1[ox21d7c3(1254)]({
      [var_core_value_sig252C]: var_core_value_sigC69F
    })
  });
}
function as(var_core_value_sig87EA, var_core_value_sig4325) {
  let var_core_value_sigAB8D = new a[ox3bc72d(1622)]();
  for (let var_core_value_sig0442 of rs) var_core_value_sigAB8D[ox3bc72d(519)](is(var_core_value_sig87EA, var_core_value_sig4325, var_core_value_sig0442));
  return var_core_value_sigAB8D[ox3bc72d(519)](var_core_value_sig87EA[ox3bc72d(1951)](ox3bc72d(1653), {
    get: var_core_value_sig697A => var_core_value_sig4325.observe(var_core_value_sig697A[ox3bc72d(1066)](), ox3bc72d(1653)),
    set: (var_core_value_sigDB65, var_core_value_sig045E) => var_core_value_sigDB65[ox3bc72d(1254)]({
      mapping: var_core_value_sig045E
    })
  })), var_core_value_sigAB8D[ox3bc72d(519)](var_core_value_sig87EA[ox3bc72d(1951)]("aggregation", {
    get: var_core_value_sig4524 => var_core_value_sig4325[ox3bc72d(1156)](var_core_value_sig4524[ox3bc72d(1066)](), ox3bc72d(623)),
    set: (var_core_value_sig64D5, var_core_value_sig9678) => var_core_value_sig64D5[ox3bc72d(1254)]({
      aggregation: var_core_value_sig9678
    })
  })), var_core_value_sigAB8D[ox3bc72d(519)](var_core_value_sig87EA[ox3bc72d(1951)](ox3bc72d(837), {
    get: var_core_value_sig5E74 => var_core_value_sig4325[ox3bc72d(1156)](var_core_value_sig5E74[ox3bc72d(1066)](), ox3bc72d(837)),
    set: (var_core_value_sig75FC, var_core_value_sig639A) => var_core_value_sig75FC[ox3bc72d(1254)]({
      series: var_core_value_sig639A[ox3bc72d(1285)](({
        selector: var_core_value_sig9F76,
        style: var_core_value_sigB008
      }) => ({
        selector: {
          index: var_core_value_sig9F76
        },
        ...var_core_value_sigB008
      }))
    })
  })), var_core_value_sigAB8D[ox3bc72d(519)](var_core_value_sig87EA[ox3bc72d(1951)](ox3bc72d(1930), {
    get: var_core_value_sig567C => var_core_value_sig4325[ox3bc72d(1156)](var_core_value_sig567C.getChartModel(), ox3bc72d(1930))
  })), var_core_value_sigAB8D;
}
function os(var_core_value_sig4B86) {
  let var_core_value_sig240E = new a.DisposableCollection(),
    var_core_value_sigDE46 = new Zo();
  return var_core_value_sig240E.add(ns(var_core_value_sig4B86, var_core_value_sigDE46)), var_core_value_sig240E[ox53269e(519)](as(var_core_value_sig4B86, var_core_value_sigDE46)), var_core_value_sig240E;
}
let ss = class extends a.Plugin {
  constructor(var_core_value_sig825F = ot, var_core_value_sig546D, var_core_value_sig8078) {
    super(), this[ox20a247(1373)] = var_core_value_sig825F, this._injector = var_core_value_sig546D, this[ox20a247(1029)] = var_core_value_sig8078;
    let {
      ...var_core_value_sigDCED
    } = (0, a[ox20a247(810)])({}, ot, this._config);
    this[ox20a247(1029)].setConfig(at, var_core_value_sigDCED);
  }
  onStarting() {
    this._injector["add"]([to]), this[ox149e89(1061)][ox149e89(519)]([Jo]), this._injector[ox149e89(519)]([Ht]), this[ox149e89(1061)][ox149e89(519)]([De]), this._injector[ox149e89(519)]([qo]), this[ox149e89(774)](os(this._injector[ox149e89(977)](Ht))), this[ox149e89(1061)][ox149e89(977)](qo);
  }
};
b(ss, "type", a.UniverInstanceType["UNIVER_UNKNOWN"]), b(ss, "pluginName", "UNIVER_CHART_UI_PLUGIN"), b(ss, "packageName", Go), b(ss, "version", Ko), ss = Ee([(0, a.DependentOn)(d.UniverLicensePlugin, e.UniverChartPlugin, s.UniverEmbedUnitUIPlugin), Te(1, (0, a.Inject)(a.Injector)), Te(2, a.IConfigService)], ss);
var cs = class {},
  ls = class extends cs {
    constructor(var_core_value_sig2829, var_core_value_sig6EE2) {
      super(), this[ox4def5e(1279)] = var_core_value_sig2829, this[ox4def5e(1096)] = var_core_value_sig6EE2;
    }
    getChartModel() {
      return this[ox1be586(1279)];
    }
    commit(var_core_value_sig4CCC) {
      this[ox4b2084(1096)][ox4b2084(1254)](var_core_value_sig4CCC);
    }
  },
  us = class extends a.Disposable {
    constructor(var_core_value_sig6E47, var_core_value_sigB64D, var_core_value_sig2407) {
      super(), this[ox444de5(616)] = var_core_value_sig6E47, this[ox444de5(1077)] = var_core_value_sigB64D, this[ox444de5(1206)] = var_core_value_sig2407, b(this, ox444de5(1964), new u[ox444de5(1617)]()), b(this, ox444de5(1025), new u[ox444de5(1617)]()), b(this, ox444de5(2033), new Map()), b(this, ox444de5(1562), []), b(this, "_rendering", false), b(this, ox444de5(681), null), this[ox444de5(774)](this[ox444de5(616)][ox444de5(1091)][ox444de5(505)]((0, u[ox444de5(1778)])(1))[ox444de5(689)](() => {
        const var_core_value_sig8721 = ox444de5;
        this[var_core_value_sig8721(1105)]();
      }));
    }
    requestSnapshot(var_core_value_sigE4D0) {
      let var_core_value_sigD5F1 = this.getCacheKey(var_core_value_sigE4D0),
        var_core_value_sigBC19 = this[ox1dbaa6(2033)].get(var_core_value_sigD5F1);
      if (var_core_value_sigBC19 && var_core_value_sigBC19[ox1dbaa6(769)] !== "error") return var_core_value_sigBC19;
      let var_core_value_sig4F3C = {
        key: var_core_value_sigD5F1,
        status: ox1dbaa6(1580)
      };
      return this[ox1dbaa6(2033)].set(var_core_value_sigD5F1, var_core_value_sig4F3C), this[ox1dbaa6(1562)][ox1dbaa6(1447)](var_core_value_sigE4D0), this[ox1dbaa6(956)](), var_core_value_sig4F3C;
    }
    getSnapshot(var_core_value_sig8D44) {
      return this[ox32e0f6(2033)][ox32e0f6(977)](this.getCacheKey(var_core_value_sig8D44));
    }
    async exportImage(var_core_value_sig1660) {
      let var_core_value_sigEE7B = this[ox88e269(715)](var_core_value_sig1660);
      return await this._activeDrain, var_core_value_sigEE7B[ox88e269(769)] === "ready" ? var_core_value_sigEE7B[ox88e269(1326)] : undefined;
    }
    invalidateChart(var_core_value_sig44DF, var_core_value_sig7E48) {
      let var_core_value_sig7B9E = var_core_value_sig44DF + "::" + var_core_value_sig7E48 + "::";
      for (let var_core_value_sig08BA of this[ox1df3ff(2033)][ox1df3ff(1994)]()) var_core_value_sig08BA[ox1df3ff(1509)](var_core_value_sig7B9E) && this._cache[ox1df3ff(872)](var_core_value_sig08BA);
      this[ox1df3ff(1025)][ox1df3ff(1563)]({
        unitId: var_core_value_sig44DF,
        chartId: var_core_value_sig7E48
      });
    }
    getCacheKey(var_core_value_sig5C3B) {
      return [var_core_value_sig5C3B.unitId, var_core_value_sig5C3B[ox5b9fa3(1020)], Math.round(var_core_value_sig5C3B.width), Math[ox5b9fa3(2000)](var_core_value_sig5C3B[ox5b9fa3(787)]), var_core_value_sig5C3B[ox5b9fa3(1100)] ?? 1, this._localeService["getDirection"](), var_core_value_sig5C3B[ox5b9fa3(1122)] ?? ox5b9fa3(2025)][ox5b9fa3(766)]("::");
    }
    async flushForTests() {
      for (; this[ox30047f(1562)].length > 0 || this[ox30047f(843)] || this[ox30047f(681)];) await (this._activeDrain ?? Promise[ox30047f(1710)]()), await Promise[ox30047f(1710)]();
    }
    dispose() {
      this[ox136fe6(2033)][ox136fe6(959)](), this[ox136fe6(1562)][ox136fe6(1579)] = 0, this[ox136fe6(1964)][ox136fe6(963)](), this[ox136fe6(1025)][ox136fe6(963)](), super[ox136fe6(1706)]();
    }
    _drainQueue() {
      this[ox2f0dee(843)] || (this[ox2f0dee(681)] = this[ox2f0dee(1154)]()[ox2f0dee(1159)](() => {
        const var_core_value_sigDBB5 = ox2f0dee;
        this[var_core_value_sigDBB5(681)] = null;
      }));
    }
    _invalidateSnapshotsForDirectionChange() {
      let var_core_value_sig4002 = new Map();
      for (let var_core_value_sigCFAC of this[ox2d8a64(2033)][ox2d8a64(1994)]()) {
        let [var_core_value_sig0D69, var_core_value_sig480E] = var_core_value_sigCFAC[ox2d8a64(757)]("::");
        var_core_value_sig0D69 && var_core_value_sig480E && var_core_value_sig4002.set(var_core_value_sig0D69 + "::" + var_core_value_sig480E, {
          unitId: var_core_value_sig0D69,
          chartId: var_core_value_sig480E
        });
      }
      this._cache[ox2d8a64(959)](), var_core_value_sig4002[ox2d8a64(1785)](var_core_value_sig237B => this[ox2d8a64(1025)].next(var_core_value_sig237B));
    }
    async _runQueue() {
      if (!this[ox9b71b9(843)]) {
        this[ox9b71b9(843)] = true;
        try {
          for (; this[ox9b71b9(1562)][ox9b71b9(1579)] > 0;) await this[ox9b71b9(1843)](this._queue["shift"]());
        } finally {
          this[ox9b71b9(843)] = false;
        }
      }
    }
    async _renderOne(var_core_value_sig4153) {
      let var_core_value_sig2825 = this[ox4223bd(1253)](var_core_value_sig4153),
        var_core_value_sig5FD01 = this._cache[ox4223bd(977)](var_core_value_sig2825);
      if (!var_core_value_sig5FD01 || var_core_value_sig5FD01[ox4223bd(769)] !== "pending") return;
      let var_core_value_sigA7E3 = this[ox4223bd(1077)].ensureChartModel(var_core_value_sig4153[ox4223bd(1903)], var_core_value_sig4153[ox4223bd(1020)]);
      if (!var_core_value_sigA7E3) {
        var_core_value_sig5FD01[ox4223bd(769)] = ox4223bd(764), var_core_value_sig5FD01[ox4223bd(764)] = Error(ox4223bd(1425) + var_core_value_sig4153[ox4223bd(1903)] + "/" + var_core_value_sig4153.chartId), this.snapshotUpdated$[ox4223bd(1563)](var_core_value_sig5FD01);
        return;
      }
      try {
        if (await this[ox4223bd(1603)](var_core_value_sigA7E3), this[ox4223bd(2033)][ox4223bd(977)](var_core_value_sig2825) !== var_core_value_sig5FD01 || var_core_value_sig5FD01[ox4223bd(769)] !== "pending") return;
        var_core_value_sig5FD01.dataUrl = await this[ox4223bd(1206)].render(var_core_value_sig4153, var_core_value_sigA7E3), var_core_value_sig5FD01[ox4223bd(769)] = ox4223bd(847);
      } catch (var_core_value_sigFEAB) {
        var_core_value_sig5FD01.status = ox4223bd(764), var_core_value_sig5FD01[ox4223bd(764)] = var_core_value_sigFEAB;
      }
      this[ox4223bd(1964)][ox4223bd(1563)](var_core_value_sig5FD01);
    }
    async _waitForRuntimeConfig(var_core_value_sigA784) {
      let {
        model: var_core_value_sig4406
      } = var_core_value_sigA784;
      var_core_value_sig4406.config || (await (0, u.firstValueFrom)(var_core_value_sig4406[ox143db2(970)][ox143db2(505)]((0, u[ox143db2(1573)])(var_core_value_sigE347 => var_core_value_sigE347 != null), (0, u[ox143db2(676)])(1))));
    }
  };
let ds = function (var_core_value_sigF30E) {
  return var_core_value_sigF30E[ox1f364d(1552)] = ox1f364d(1381), var_core_value_sigF30E[ox1f364d(649)] = ox1f364d(966), var_core_value_sigF30E[ox1f364d(1926)] = ox1f364d(709), var_core_value_sigF30E;
}({});
const fs = var_core_value_sigA6B6 => {
    if (!var_core_value_sigA6B6.some(var_core_value_sig6806 => var_core_value_sig6806[ox759f95(1579)] < 5)) return var_core_value_sigA6B6.map(var_core_value_sigD4AA => var_core_value_sigD4AA[ox759f95(1980)](0, 5));
  },
  ps = {
    [e.ChartTypeBits["Candlestick"]]: fs
  };
function ms(var_core_value_sig1FDB) {
  let var_core_value_sig6B7D = Re[ox1667c0(1507)](var_core_value_sigDC41 => ("id" in var_core_value_sigDC41 ? var_core_value_sigDC41.id : String(var_core_value_sigDC41[ox1667c0(1324)])) === var_core_value_sig1FDB);
  if (var_core_value_sig6B7D) return {
    chartType: var_core_value_sig6B7D[ox1667c0(1324)],
    ...(ox1667c0(1978) in var_core_value_sig6B7D ? {
      pieSecondaryPlotType: var_core_value_sig6B7D[ox1667c0(1978)]
    } : {})
  };
}
function hs(var_core_value_sig0D1B, var_core_value_sigA5A1) {
  let var_core_value_sig0C3A = be(var_core_value_sigA5A1);
  if (var_core_value_sig0C3A[ox4b7a6c(1579)] === 0) return {
    ok: false,
    issue: {
      code: ox4b7a6c(966)
    }
  };
  let var_core_value_sig5A20 = ps[var_core_value_sig0D1B],
    var_core_value_sig4037 = var_core_value_sig5A20 ? var_core_value_sig5A20(var_core_value_sig0C3A) : var_core_value_sig0C3A[ox4b7a6c(1285)](var_core_value_sigFB47 => [...var_core_value_sigFB47]);
  return var_core_value_sig4037 ? {
    ok: true,
    values: var_core_value_sig4037
  } : {
    ok: false,
    issue: {
      code: "invalidCandlestickData"
    }
  };
}
function gs(var_core_value_sig5F5F) {
  let var_core_value_sig801E = ms(var_core_value_sig5F5F[ox21ee10(1550)]);
  if (!var_core_value_sig801E) return {
    ok: false,
    issue: {
      code: "unknownOption"
    }
  };
  let var_core_value_sigD8A7 = hs(var_core_value_sig801E.chartType, var_core_value_sig5F5F[ox21ee10(1596)]);
  return var_core_value_sigD8A7.ok ? {
    ok: true,
    plan: {
      chartType: var_core_value_sig801E[ox21ee10(553)],
      values: var_core_value_sigD8A7[ox21ee10(1596)],
      ...(var_core_value_sig801E[ox21ee10(1978)] ? {
        style: _s(var_core_value_sig801E[ox21ee10(1978)])
      } : {})
    }
  } : var_core_value_sigD8A7;
}
function _s(var_core_value_sig7D2D) {
  return {
    pie: {
      composite: {
        enabled: true,
        secondaryPlot: {
          type: var_core_value_sig7D2D
        }
      }
    }
  };
}
exports.CHART_DOM_HOST_Z_INDEX = 1000, exports.CHART_ELEMENT_FLOAT_MENU_COMPONENT = co, exports.CHART_ELEMENT_FLOAT_MENU_OFFSET = lo, exports.CHART_HOST_BORDER_RADIUS = 8, exports.CHART_TYPE_CATALOG = Re, exports.CHART_UI_PLUGIN_CONFIG_KEY = at, exports.ChartAxisBoundsFields = jn, exports.ChartAxisFormatTextField = Mn, exports.ChartAxisId = F, exports.ChartAxisLabelStyleFields = Nn, exports.ChartAxisLabelVisibilityField = kn, exports.ChartAxisLineVisibilityField = On, exports.ChartAxisReverseField = An, exports.ChartAxisSection = Ln, exports.ChartAxisTickVisibilityField = Pn, exports.ChartAxisTitleFields = oi, exports.ChartColorField = M, exports.ChartCommonDataMappingSection = Oa, exports.ChartDomFrame = S, exports.ChartEditBlockTitle = ie, exports.ChartEditPanel = re, exports.ChartEditPanelSection = en, exports.ChartEditPanelTab = $t, exports.ChartEditPanelTabs = ne, exports.ChartEditorCapability = on, exports.ChartEditorProvider = Pt, exports.ChartElementFloatMenu = Ho, exports.ChartElementFloatMenuAdapterRegistry = to, exports.ChartFrameContentMode = f, exports.ChartFrameLayout = p, exports.ChartFunnelStyleSection = bi, exports.ChartGradientFillField = Gr, exports.ChartGridlineVisibilityField = Fn, exports.ChartGridlineWidthField = In, exports.ChartGridlinesAndTicksSection = zn, exports.ChartHeatmapStyleSection = Si, exports.ChartHostAdapter = ls, exports.ChartImageExportService = Jo, exports.ChartIndicatorLineColorField = Vn, exports.ChartIndicatorLineSection = Wn, exports.ChartIndicatorLineTypeField = Hn, exports.ChartInlineTableEditor = we, exports.ChartLegendFontSizeField = nr, exports.ChartLegendPositionField = Zn, exports.ChartLegendRoot = Xn, exports.ChartLegendSection = rr, exports.ChartLegendSelectModeField = er, exports.ChartLegendWrapField = Qn, exports.ChartLineAndAreaSection = or, exports.ChartMainTitleFields = ii, exports.ChartMarkDirectEditKind = Zt, exports.ChartMarkPanel = Qt, exports.ChartNumberFormatAtom = jt, exports.ChartNumberFormatTextField = At, exports.ChartParetoSeriesSection = fr, exports.ChartPieStyleSection = Oi, exports.ChartPointMappingStateKey = C, exports.ChartRadarStyleSection = Ai, exports.ChartReferencedDataSourceEditor = Ne, exports.ChartRelationStyleSection = Mi, exports.ChartSectionAccordion = le, exports.ChartSectionAccordionContent = fe, exports.ChartSectionAccordionItem = ue, exports.ChartSectionAccordionTrigger = de, exports.ChartSeriesBorderFields = kr, exports.ChartSeriesDataLabelFields = Rr, exports.ChartSeriesDataPointFields = wr, exports.ChartSeriesFillFields = Or, exports.ChartSeriesLabelFontSizeField = Lr, exports.ChartSeriesLabelPositionField = Pr, exports.ChartSeriesLabelVisibilityField = Mr, exports.ChartSeriesPointFields = Ar, exports.ChartSeriesRightAxisField = Dr, exports.ChartSeriesRoot = zr, exports.ChartSeriesSection = Vr, exports.ChartSeriesSelector = Tr, exports.ChartSeriesTypeField = Er, exports.ChartSnapshotQueue = us, exports.ChartStackField = Kr, exports.ChartStyleSection = Xr, exports.ChartSubtitleFields = ai, exports.ChartThemeField = Wr, exports.ChartTitleFontSizeFields = si, exports.ChartTitleKey = P, exports.ChartTitlesSection = mi, exports.ChartTrendlineSection = vi, exports.ChartTypeField = Ur, exports.ChartTypeSpecificDataSection = Ta, exports.ChartTypeSpecificSetupSection = Ea, exports.ChartTypeSpecificStyleSection = Ma, Object.defineProperty(exports, "ChartUIService", {
  enumerable: true,
  get: function () {
    return Wt;
  }
}), exports.ChartViewStateKey = Lt, exports.ChartViewStateRegistry = Ht, exports.ChartWaterfallSetupFields = Jr, exports.ChartWaterfallStyleSection = Wa, exports.ChartWordCloudMaskImageIdField = Qa, exports.ChartWordCloudRepeatField = $a, exports.ChartWordCloudRoot = qa, exports.ChartWordCloudShapeField = Xa, exports.ChartWordCloudStyleSection = eo, exports.ColorPickerControl = Ze, exports.DEFAULT_CHART_AXIS_VALUES = Dn, exports.DEFAULT_CHART_FUNNEL_VALUES = yi, exports.DEFAULT_CHART_HEATMAP_VALUES = xi, exports.DEFAULT_CHART_INDICATOR_LINE_VALUES = Bn, exports.DEFAULT_CHART_LEGEND_VALUES = Gn, exports.DEFAULT_CHART_LINE_AND_AREA_VALUES = ar, exports.DEFAULT_CHART_PARETO_VALUES = ur, exports.DEFAULT_CHART_PIE_VALUES = Di, exports.DEFAULT_CHART_RADAR_VALUES = ki, exports.DEFAULT_CHART_RELATION_VALUES = ji, exports.DEFAULT_CHART_SERIES_VALUES = hr, exports.DEFAULT_CHART_STYLE_VALUES = Yr, exports.DEFAULT_CHART_TITLE_VALUES = ti, exports.DEFAULT_CHART_TRENDLINE_VALUES = gi, exports.DEFAULT_CHART_WATERFALL_SETUP_VALUES = qr, exports.DEFAULT_CHART_WATERFALL_STYLE_VALUES = Ha, exports.DEFAULT_CHART_WORD_CLOUD_VALUES = Ja, exports.DropdownSelector = Qe, exports.FontAlignSelector = rt, exports.FontColorSelector = tt, exports.FontFormatBar = it, exports.FontFormatToggle = nt, exports.FontSizeSelector = et, exports.IChartHostAdapter = cs, exports.IChartUIService = Ut, exports.InlineChartCreationIssueCode = ds, exports.MIN_CHART_HOST_DIMENSION = 1, Object.defineProperty(exports, "UniverChartUIPlugin", {
  enumerable: true,
  get: function () {
    return ss;
  }
}), exports.appendInlineTableColumn = ve, exports.appendInlineTableRow = _e, exports.applyInlineTablePaste = Ce, exports.buildChartThemeSelectOptions = Ue, exports.buildChartTypeSelectOptions = Ve, exports.chartBorderWidthValues = Ge, exports.chartLinePointSizeValues = Ke, exports.chartOpacityValues = We, exports.chartTickLengthValues = qe, exports.chartTickWidthValues = Je, exports.chartTypeSupportsCapability = fn, exports.chartTypeSupportsLineAndAreaStyle = pn, exports.chartTypeSupportsPlotArea = mn, exports.chartTypeToIcon = ze, exports.coerceInlineTableCell = he, exports.compactInlineTableValues = be, exports.createChartElementFloatMenuAdapter = Wo, exports.createChartInlineStarterData = T, exports.createPercentOptions = Ye, exports.createPxOptions = Xe, exports.getChartInlineTableMinColumns = te, exports.normalizeInlineTableValues = ge, exports.resolveChartCreationIntent = ms, exports.resolveChartEditPanelRoute = an, exports.resolveChartElementConfigTarget = tn, exports.resolveChartElementSelection = so, exports.resolveChartTypeFieldValue = Yt, exports.tryBuildInlineChartCreationPlan = gs, exports.tryPrepareInlineChartData = hs, exports.useChartEditorChartType = Kt, exports.useChartEditorHasRightAxis = qt, exports.useChartTypeFieldState = Xt, exports.useChartTypeState = Jt;
