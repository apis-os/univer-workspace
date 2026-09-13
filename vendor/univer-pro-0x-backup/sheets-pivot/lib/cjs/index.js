Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/engine-pivot"),
  t = require("@univerjs/core"),
  n = require("@univerjs/engine-formula"),
  r = require("@univerjs/sheets"),
  i = require("rxjs"),
  a = require("@univerjs-pro/license"),
  o = require("@univerjs/engine-render"),
  s = require("@univerjs/sheets-filter"),
  c = require("@univerjs/rpc");
const l = /[\u0590-\u08FF\uFB1D-\uFEFC]/;
function u(_0x306e24) {
  return l["test"](String(_0x306e24 ?? ""));
}
function d(_0x28be1a) {
  let _0x2247ec = String(_0x28be1a ?? "");
  return !_0x2247ec ||
    (_0x2247ec["startsWith"]("⁨") && _0x2247ec["endsWith"]("⁩"))
    ? _0x2247ec
    : "⁨" + _0x2247ec + "⁩";
}
function f(_0x3f9ff5, ..._0x8afd0d) {
  let _0x100b7a = String(_0x3f9ff5 ?? "");
  return !u(_0x100b7a) && !_0x8afd0d["some"](u) ? _0x100b7a : d(_0x100b7a);
}
function p(_0x37100c, _0x363705, _0x3d3428) {
  let _0x42110d = _0x37100c["pageView"]["getLastCol"]() + 0x1,
    _0x5936d3 =
      _0x37100c["cornerView"]["getColCount"]() +
      Math["max"](
        _0x37100c["colView"]["getColCount"](),
        _0x37100c["dataView"]["getColCount"](),
      );
  return {
    startColumn: _0x363705,
    endColumn: _0x363705 + Math["max"](_0x42110d, _0x5936d3, 0x1) - 0x1,
    direction: _0x3d3428,
  };
}
function m(_0xf9b04e, _0xeacae2) {
  return _0xf9b04e["direction"] === "rtl"
    ? _0xf9b04e["startColumn"] + _0xf9b04e["endColumn"] - _0xeacae2
    : _0xeacae2;
}
function h(_0x96ee0a, _0x47e2c4) {
  let _0x48e31a = m(_0x96ee0a, _0x47e2c4["startColumn"]),
    _0x10e109 = m(_0x96ee0a, _0x47e2c4["endColumn"]);
  return {
    ..._0x47e2c4,
    startColumn: Math["min"](_0x48e31a, _0x10e109),
    endColumn: Math["max"](_0x48e31a, _0x10e109),
  };
}
const g = Number["parseInt"](0x6a9e6078),
  _ = "SHEET_PIVOT_TABLE_PLUGIN",
  v = "#b2b2b2";
let y = (function (_0x1ab6ee) {
  return (
    (_0x1ab6ee["Existing"] = "existing"),
    (_0x1ab6ee["New"] = "new"),
    _0x1ab6ee
  );
})({});
const b = {
    "sheets-pivot": {
      sheet: "",
      blankValue: "",
      otherValue: "",
      columnName: "",
      subTotalText: "",
      grandTotalText: "",
      valueText: "",
      rowLabels: "",
      columnLabels: "",
      averageName: "",
      countName: "",
      countNumsName: "",
      maxName: "",
      minName: "",
      productName: "",
      stdDevName: "",
      stdDevpName: "",
      sumName: "",
      varName: "",
      varpName: "",
      value: "",
      blank: "",
      other: "",
      subTotal: "",
      grandTotal: "",
      renderText: {
        valueField: "",
        subtotal: "",
        grandTotal: "",
        multipleGrandTotal: "",
        subtotalWithValue: "",
      },
      emptyPivot: { filter: "", row: "", column: "", values: "" },
      dateGroup: {
        year: "",
        month: "",
        day: "",
        date: "",
        hour: "",
        minute: "",
        hourMinute: "",
        quarter: "",
        monthDate: "",
        yearQuarter: "",
        yearMonth: "",
        yearMonthDate: "",
      },
      cellDateGroupDisplay: {
        minute: "",
        hour: "",
        hourMinute: "",
        date: "",
        month: "",
        monthDate: "",
        quarter: "",
        year: "",
        yearMonth: "",
        yearMonthDate: "",
        yearQuarter: "",
      },
    },
  },
  x = {
    b: { s: 0x1, cl: { rgb: v } },
    l: { s: 0x1, cl: { rgb: v } },
    r: { s: 0x1, cl: { rgb: v } },
    t: { s: 0x1, cl: { rgb: v } },
  },
  S = { bg: { rgb: "rgb(240,241,243)" }, ht: 0x2, vt: 0x2, tb: 0x1 },
  C = { bg: { rgb: "rgb(255,255,255)" }, ht: 0x2, vt: 0x2, tb: 0x1 },
  w = {
    rowStyle: { bg: { rgb: "#e6ebfb" }, bd: x, bl: 0x1, vt: 0x2 },
    colStyle: {
      bg: { rgb: "#1d32e9" },
      bd: null,
      cl: { rgb: "#FFFFFF" },
      bl: 0x1,
      vt: 0x2,
    },
    subTotalStyle: { bd: x, bg: { rgb: "#e6ebfa" }, vt: 0x2 },
    cornerStyle: { bd: x, bg: { rgb: "#eceeff" }, bl: 0x1, vt: 0x2 },
    pageStyle: { bd: x, bg: { rgb: "#f4f4f5" }, vt: 0x2 },
    leafStyle: { bd: x, bg: { rgb: "#f4f4f5" }, vt: 0x2 },
    grandTotal: {
      bd: null,
      bg: { rgb: "#1d32e9" },
      cl: { rgb: "#FFFFFF" },
      bl: 0x1,
      vt: 0x2,
    },
    dataStyle: { bd: x, vt: 0x2 },
  },
  T = {
    [e["PivotDateGroupFieldDateTypeEnum"]["Minute"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["Hour"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["HourMinute"]]: 0x2,
    [e["PivotDateGroupFieldDateTypeEnum"]["Date"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["Month"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["MonthDate"]]: 0x2,
    [e["PivotDateGroupFieldDateTypeEnum"]["Quarter"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["Year"]]: 0x1,
    [e["PivotDateGroupFieldDateTypeEnum"]["YearMonth"]]: 0x2,
    [e["PivotDateGroupFieldDateTypeEnum"]["YearMonthDate"]]: 0x3,
    [e["PivotDateGroupFieldDateTypeEnum"]["YearQuarter"]]: 0x2,
  };
function E(_0x2a123f) {
  return /^\d$/[_0x4f734c(0x198)](_0x2a123f) ? "0" + _0x2a123f : _0x2a123f;
}
function D(_0x2094ae, _0x380fdb) {
  let _0x2216c2 = _0x380fdb[_0x159baf(0x14f)]("_"),
    _0x57e569 = T[_0x2094ae];
  if (!(_0x57e569 === void 0x0 || _0x2216c2[_0x159baf(0x2b6)] < _0x57e569))
    switch (_0x2094ae) {
      case e[_0x159baf(0x1ad)][_0x159baf(0x433)]:
        return [_0x2216c2[0x0], E(_0x2216c2[0x1])];
      case e["PivotDateGroupFieldDateTypeEnum"][_0x159baf(0x37b)]:
        return [E(_0x2216c2[0x0]), E(_0x2216c2[0x1])];
      case e[_0x159baf(0x1ad)][_0x159baf(0x2ba)]:
        return [_0x2216c2[0x0], E(_0x2216c2[0x1])];
      case e[_0x159baf(0x1ad)]["YearMonthDate"]:
        return [_0x2216c2[0x0], E(_0x2216c2[0x1]), E(_0x2216c2[0x2])];
      case e[_0x159baf(0x1ad)][_0x159baf(0x283)]:
        return [_0x2216c2[0x0], _0x2216c2[0x1]];
      default:
        return _0x2216c2[_0x159baf(0x3ab)](0x0, _0x57e569);
    }
}
function O(_0x405ecc, _0x45b1d6, _0x148ebe) {
  let _0x559679 = _0x405ecc["get"](t["LocaleService"]),
    _0x28f306 = D(_0x45b1d6, _0x148ebe);
  if (!_0x28f306) return _0x148ebe;
  switch (_0x45b1d6) {
    case e[_0x512931(0x1ad)][_0x512931(0x4ba)]:
      return _0x559679["t"](_0x512931(0x347), ..._0x28f306);
    case e[_0x512931(0x1ad)][_0x512931(0x130)]:
      return _0x559679["t"](
        "sheets-pivot.cellDateGroupDisplay.minute",
        ..._0x28f306,
      );
    case e[_0x512931(0x1ad)][_0x512931(0x282)]:
      return _0x559679["t"](_0x512931(0x278), ..._0x28f306);
    case e[_0x512931(0x1ad)][_0x512931(0x433)]:
      return _0x559679["t"](
        "sheets-pivot.cellDateGroupDisplay.hourMinute",
        ..._0x28f306,
      );
    case e["PivotDateGroupFieldDateTypeEnum"][_0x512931(0x1e2)]:
      return _0x559679["t"](_0x512931(0x3b4), ..._0x28f306);
    case e[_0x512931(0x1ad)][_0x512931(0x34c)]:
      return _0x559679["t"](_0x512931(0x297), ..._0x28f306);
    case e[_0x512931(0x1ad)][_0x512931(0x37b)]:
      return _0x559679["t"](_0x512931(0x23a), ..._0x28f306);
    case e["PivotDateGroupFieldDateTypeEnum"][_0x512931(0x2ae)]:
      return _0x559679["t"](
        "sheets-pivot.cellDateGroupDisplay.quarter",
        ..._0x28f306,
      );
    case e[_0x512931(0x1ad)]["YearMonth"]:
      return _0x559679["t"](_0x512931(0x2c8), ..._0x28f306);
    case e[_0x512931(0x1ad)][_0x512931(0x258)]:
      return _0x559679["t"](
        "sheets-pivot.cellDateGroupDisplay.yearMonthDate",
        ..._0x28f306,
      );
    case e[_0x512931(0x1ad)][_0x512931(0x283)]:
      return _0x559679["t"](_0x512931(0x39c), ..._0x28f306);
  }
  return "";
}
const k = (_0x4e5de2, _0xd1faf2, _0x524b2d, _0x359b98) => {
    let _0xa986e5,
      _0x43fc76 = _0x4e5de2["get"](t[_0x26fad6(0x1ba)])[_0x26fad6(0x4a0)](
        t[_0x26fad6(0x2b3)][_0x26fad6(0x333)],
      );
    if (!_0x43fc76) return null;
    let _0x5b4558 = _0x43fc76[_0x26fad6(0x439)](),
      _0x48e4f5;
    if (
      (_0x524b2d && (_0x48e4f5 = _0x5b4558[_0x26fad6(0x300)](_0x524b2d)),
      (_0xd1faf2 != null && _0xd1faf2["v"]) ||
        (_0xd1faf2 == null ? void 0x0 : _0xd1faf2["v"]) === 0x0)
    ) {
      _0xa986e5 ||= {};
      let _0x31fbdd = P(_0xd1faf2["v"]);
      (typeof _0x31fbdd == _0x26fad6(0x3ea)
        ? (_0xa986e5["t"] = t[_0x26fad6(0x137)][_0x26fad6(0x35e)])
        : typeof _0x31fbdd == _0x26fad6(0x458) &&
          (_0xa986e5["t"] = t[_0x26fad6(0x137)][_0x26fad6(0x1c1)]),
        (_0xa986e5["v"] = _0x31fbdd));
    }
    if (
      (((_0xd1faf2 != null && _0xd1faf2["i"]) ||
        (_0xd1faf2 == null ? void 0x0 : _0xd1faf2["i"]) === 0x0) &&
        ((_0xa986e5 ||= {}), (_0xa986e5["fi"] = _0xd1faf2["i"])),
      _0xd1faf2 != null &&
        _0xd1faf2["s"] &&
        ((_0xa986e5 ||= {}), (_0xa986e5[_0x26fad6(0x424)] = _0xd1faf2["s"])),
      _0x524b2d && ((_0xa986e5 ||= {}), (_0xa986e5["s"] = _0x48e4f5)),
      _0x359b98 &&
        _0xa986e5 != null &&
        _0xa986e5["v"] &&
        _0xa986e5[_0x26fad6(0x424)] !== e[_0x26fad6(0x2e2)]["GrandTotal"] &&
        _0xa986e5["pbt"] !== e[_0x26fad6(0x2e2)][_0x26fad6(0x157)])
    ) {
      let _0x3c0a74 = String(_0xa986e5["v"]),
        { dateType: _0x53054c } = _0x359b98;
      ((_0xa986e5["v"] = O(_0x4e5de2, _0x53054c, _0x3c0a74)),
        (_0xa986e5["t"] = t[_0x26fad6(0x137)][_0x26fad6(0x1c1)]));
    }
    return _0xa986e5;
  },
  A = (
    _0x574f80,
    _0x25703d,
    _0x49ae4b,
    _0x64d853,
    _0x5af444 = "ltr",
    _0x1cdec5 = t["DateSystem"]["Date1900"],
  ) => {
    let _0x44c4e1 = _0x49ae4b[_0x62ceee(0x376)],
      {
        cornerView: _0x3984ce,
        rowView: _0x2ba943,
        colView: _0xd29931,
        dataView: _0x5e5703,
        pageView: _0x3f5bd4,
        formatMap: _0x44d7fd,
        groupInfo: _0x1d761e,
      } = _0x25703d,
      { row: _0x342ec3, col: _0x3254cb } = _0x44c4e1,
      _0x11924c = new t["ObjectMatrix"](),
      _0x116825 = p(_0x25703d, _0x3254cb, _0x5af444),
      _0x3ee41d = {},
      _0x42433b = {},
      _0x4c0320 = {},
      _0x39c65f = {},
      _0x3e6407 = {},
      _0x563247 = _0x342ec3,
      _0x2b158a = _0x3254cb;
    Object[_0x62ceee(0x2a8)](_0x3f5bd4[_0x62ceee(0x16a)])[_0x62ceee(0x231)](
      (_0x5f3f27) => {
        const _0x5d8c3c = _0x62ceee;
        Object[_0x5d8c3c(0x2a8)](_0x3f5bd4["data"][Number(_0x5f3f27)])[
          _0x5d8c3c(0x231)
        ]((_0x234d3a) => {
          const _0x44fdb4 = _0x5d8c3c;
          let _0x114c84 = {
            ..._0x3f5bd4[_0x44fdb4(0x16a)][Number(_0x5f3f27)][
              Number(_0x234d3a)
            ],
          };
          _0x11924c[_0x44fdb4(0x300)](
            Number(_0x5f3f27) + _0x563247,
            m(_0x116825, Number(_0x234d3a) + _0x2b158a),
            k(_0x574f80, _0x114c84, w["pageStyle"]),
          );
        });
      },
    );
    let _0x59ccd3 = Object[_0x62ceee(0x2a8)](_0x3f5bd4[_0x62ceee(0x16a)])[
      _0x62ceee(0x2b6)
    ];
    _0x563247 += _0x59ccd3 + +!!_0x59ccd3;
    let _0x533028 = _0x3984ce[_0x62ceee(0x172)](),
      _0x594a9e = _0x3984ce[_0x62ceee(0x2f0)]();
    for (let _0x1ea7cd = 0x0; _0x1ea7cd < _0x533028; _0x1ea7cd++)
      for (let _0x833c13 = 0x0; _0x833c13 < _0x594a9e; _0x833c13++) {
        var _0x3ca800;
        let _0x37ceb9 = {
          ...((_0x3ca800 = _0x3984ce[_0x62ceee(0x16a)]) == null ||
          (_0x3ca800 = _0x3ca800[_0x1ea7cd]) == null
            ? void 0x0
            : _0x3ca800[_0x833c13]),
        };
        if (_0x37ceb9) {
          var _0x5437c7, _0x530df6;
          ((_0x5437c7 = _0x2ba943[_0x62ceee(0x4a3)][_0x833c13]) != null &&
            _0x5437c7[_0x62ceee(0x47a)] &&
            _0x833c13 === _0x594a9e - 0x1 &&
            _0x1ea7cd === _0x533028 - 0x1 &&
            (_0x37ceb9["v"] = "" + _0x64d853[_0x62ceee(0x1fe)]),
            (_0x530df6 = _0x3984ce[_0x62ceee(0x1e3)][_0x833c13]) != null &&
              _0x530df6[_0x62ceee(0x45b)] &&
              (_0x37ceb9["v"] =
                "" + (_0x64d853[_0x62ceee(0x418)] || "Row\x20Labels")));
        }
        _0x11924c[_0x62ceee(0x300)](
          _0x1ea7cd + _0x563247,
          m(_0x116825, _0x833c13 + _0x2b158a),
          k(_0x574f80, _0x37ceb9, w[_0x62ceee(0x486)]),
        );
      }
    for (
      let _0xd1429 = 0x0;
      _0xd1429 < _0x3984ce[_0x62ceee(0x1e3)]["length"];
      _0xd1429++
    )
      _0x3984ce["info"][_0xd1429] &&
        (_0x4c0320["" + m(_0x116825, _0xd1429 + _0x2b158a)] =
          _0x3984ce[_0x62ceee(0x1e3)][_0xd1429]);
    _0x2b158a += _0x594a9e;
    let _0x11c0dd = _0xd29931[_0x62ceee(0x4a3)],
      _0x5f34e4 =
        _0xd29931[_0x62ceee(0x42b)]() >= 0x0
          ? _0xd29931[_0x62ceee(0x42b)]() + 0x1
          : 0x0,
      _0x4c6009 =
        _0xd29931["getLastCol"]() >= 0x0
          ? _0xd29931[_0x62ceee(0x266)]() + 0x1
          : 0x0;
    for (let _0x435949 = 0x0; _0x435949 < _0x4c6009; _0x435949++) {
      for (let _0x40db4f = 0x0; _0x40db4f < _0x5f34e4; _0x40db4f++) {
        var _0x1ea45c, _0x50cdd9;
        let _0x1b425c = {
            ...((_0x1ea45c = _0xd29931[_0x62ceee(0x16a)]) == null ||
            (_0x1ea45c = _0x1ea45c[_0x40db4f]) == null
              ? void 0x0
              : _0x1ea45c[_0x435949]),
          },
          _0x15ebc5 =
            (_0x50cdd9 = _0x11c0dd[_0x40db4f]) == null
              ? void 0x0
              : _0x50cdd9[_0x62ceee(0x30c)],
          _0x175835 = _0x44d7fd[_0x15ebc5],
          _0x249fb6 = _0x1d761e[_0x15ebc5];
        if (_0x1b425c) {
          let _0xf32db6 = _0xd29931[_0x62ceee(0x18f)](_0x40db4f + 0x1);
          _0xf32db6 != null && _0xf32db6["isColumnLabel"]
            ? (_0x1b425c["v"] =
                "" + (_0x64d853[_0x62ceee(0x384)] || _0x62ceee(0x40a)))
            : (_0x1b425c["v"] = j(
                _0x1b425c,
                _0x40db4f === 0x0 &&
                  (_0xf32db6 == null ? void 0x0 : _0xf32db6[_0x62ceee(0x47a)]),
                _0x175835,
                _0x64d853,
                _0x64d853[_0x62ceee(0x3f8)],
                void 0x0,
                _0x1cdec5,
              ));
        }
        let _0x3e95a9;
        ((_0x3e95a9 = _0x175835
          ? { ...w[_0x62ceee(0x24e)], n: { pattern: _0x175835 } }
          : { ...w[_0x62ceee(0x24e)] }),
          _0x11924c["setValue"](
            _0x40db4f + _0x563247,
            m(_0x116825, _0x435949 + _0x2b158a),
            k(_0x574f80, _0x1b425c, _0x3e95a9, _0x249fb6),
          ));
      }
      (_0xd29931[_0x62ceee(0x1e3)][_0x435949] &&
        (_0x42433b["" + m(_0x116825, _0x435949 + _0x2b158a)] =
          _0xd29931["info"][_0x435949]),
        _0xd29931[_0x62ceee(0x4a3)][_0x435949 + 0x1] &&
          (_0x3e6407["" + (_0x435949 + _0x563247 + 0x1)] =
            _0xd29931[_0x62ceee(0x4a3)][_0x435949 + 0x1]));
    }
    _0x563247 += _0x533028;
    let _0x1ad367 = _0x2ba943[_0x62ceee(0x4a3)],
      _0x530902 =
        _0x2ba943[_0x62ceee(0x42b)]() >= 0x0
          ? _0x2ba943[_0x62ceee(0x42b)]() + 0x1
          : 0x0,
      _0x3fa7eb =
        _0x2ba943[_0x62ceee(0x266)]() >= 0x0
          ? _0x2ba943[_0x62ceee(0x266)]() + 0x1
          : 0x0;
    for (let _0x28a55d = 0x0; _0x28a55d < _0x530902; _0x28a55d++) {
      for (let _0x116901 = 0x0; _0x116901 < _0x3fa7eb; _0x116901++) {
        var _0x311a90, _0x318d83;
        let _0x21297d = {
            ...((_0x311a90 = _0x2ba943[_0x62ceee(0x16a)]) == null ||
            (_0x311a90 = _0x311a90[_0x28a55d]) == null
              ? void 0x0
              : _0x311a90[_0x116901]),
          },
          _0x46fa20 =
            (_0x318d83 = _0x1ad367[_0x116901]) == null
              ? void 0x0
              : _0x318d83[_0x62ceee(0x30c)],
          _0x47e141 = _0x44d7fd[_0x46fa20],
          _0x432d7e = _0x1d761e[_0x46fa20];
        _0x21297d &&
          (_0x21297d["v"] = j(
            _0x21297d,
            !0x1,
            _0x47e141,
            _0x64d853,
            void 0x0,
            void 0x0,
            _0x1cdec5,
          ));
        let _0x207e7c;
        ((_0x207e7c = _0x2ba943["info"][_0x28a55d][_0x62ceee(0x3ef)]
          ? _0x2ba943["info"][_0x28a55d][_0x62ceee(0x3e7)] === 0x0
            ? w[_0x62ceee(0x421)]
            : w["subTotalStyle"]
          : _0x2ba943[_0x62ceee(0x1e3)][_0x28a55d][_0x62ceee(0x377)] ||
              _0x2ba943[_0x62ceee(0x1e3)][_0x28a55d]["level"] ===
                _0x2ba943[_0x62ceee(0x2f0)]()
            ? w[_0x62ceee(0x4a2)]
            : w[_0x62ceee(0x215)]),
          _0x47e141 &&
            (_0x207e7c = { ..._0x207e7c, n: { pattern: _0x47e141 } }),
          _0x11924c[_0x62ceee(0x300)](
            _0x28a55d + _0x563247,
            m(_0x116825, _0x116901 + _0x3254cb),
            k(_0x574f80, _0x21297d, _0x207e7c, _0x432d7e),
          ));
      }
      _0x2ba943["info"][_0x28a55d] &&
        (_0x3ee41d["" + (_0x28a55d + _0x563247)] =
          _0x2ba943[_0x62ceee(0x1e3)][_0x28a55d]);
    }
    _0x2ba943[_0x62ceee(0x4a3)]["forEach"]((_0x4b7e7a, _0x36546c) => {
      _0x4b7e7a &&
        (_0x39c65f["" + m(_0x116825, _0x36546c + _0x3254cb)] = _0x4b7e7a);
    });
    let _0x41e9a6 = _0x5e5703["getRowCount"](),
      _0x12040f = _0x5e5703[_0x62ceee(0x2f0)]();
    for (let _0x12d9be = 0x0; _0x12d9be < _0x41e9a6; _0x12d9be++)
      for (let _0x665615 = 0x0; _0x665615 < _0x12040f; _0x665615++) {
        var _0xea0a24;
        let _0x3bd585 = {
            ...((_0xea0a24 = _0x5e5703[_0x62ceee(0x16a)]) == null ||
            (_0xea0a24 = _0xea0a24[_0x12d9be]) == null
              ? void 0x0
              : _0xea0a24[_0x665615]),
          },
          _0x1b01d5;
        _0x1b01d5 = _0x2ba943[_0x62ceee(0x1e3)][_0x12d9be][_0x62ceee(0x3ef)]
          ? _0x2ba943[_0x62ceee(0x1e3)][_0x12d9be][_0x62ceee(0x3e7)] === 0x0
            ? w[_0x62ceee(0x421)]
            : w[_0x62ceee(0x1c5)]
          : w[_0x62ceee(0x270)];
        let _0x2e446c = _0x2ba943[_0x62ceee(0x1e3)][_0x12d9be]["valueIndex"],
          _0x1fbc3e = _0xd29931[_0x62ceee(0x1e3)][_0x665615][_0x62ceee(0x3bd)],
          _0x519688 = Math[_0x62ceee(0x13b)](_0x2e446c, _0x1fbc3e),
          _0x4b6790 =
            _0x49ae4b["fieldsConfig"][_0x62ceee(0x185)][_0x62ceee(0x3a3)](),
          _0x3f342c = "";
        _0x3f342c =
          _0x519688 < 0x0
            ? (_0x4b6790[0x0] ?? "")
            : (_0x4b6790[_0x519688] ?? "");
        let _0x497db7 = _0x44d7fd[_0x3f342c];
        (_0x497db7 && (_0x1b01d5 = { ..._0x1b01d5, n: { pattern: _0x497db7 } }),
          _0x11924c[_0x62ceee(0x300)](
            _0x12d9be + _0x563247,
            m(_0x116825, _0x665615 + _0x2b158a),
            k(_0x574f80, _0x3bd585, _0x1b01d5),
          ));
      }
    return {
      valueMatrix: _0x11924c,
      rowInfo: _0x3ee41d,
      colInfo: _0x42433b,
      cornerInfo: _0x4c0320,
      rowHeaderMap: _0x39c65f,
      colHeaderMap: _0x3e6407,
    };
  };
function j(
  _0x3f12f8,
  _0x4beac4,
  _0x1d11dc,
  _0x58abaf,
  _0x40bf16,
  _0x50fb32,
  _0xb75cc = t["DateSystem"]["Date1900"],
) {
  let _0x28a965 = _0x3f12f8["v"];
  _0x4beac4 && (_0x28a965 = "" + _0x58abaf[_0x2d0091(0x1fe)]);
  let _0x54ce6b =
    _0x3f12f8["t"] &&
    (_0x3f12f8["t"] & e["PivotViewCellValueTypeEnum"]["blank"]) > 0x0;
  _0x54ce6b && (_0x28a965 = "" + _0x58abaf["sheets-pivot.blank"]);
  let _0x1995b2 =
    _0x3f12f8["t"] &&
    (_0x3f12f8["t"] & e[_0x2d0091(0x360)][_0x2d0091(0x346)]) > 0x0;
  if (
    (_0x1995b2 && (_0x28a965 = "" + _0x58abaf["sheets-pivot.other"]),
    _0x3f12f8["s"] === e[_0x2d0091(0x2e2)][_0x2d0091(0x157)])
  ) {
    let _0xda8e94 = _0x28a965,
      _0x164b05 = "";
    (0x0, e[_0x2d0091(0x3d4)])(_0x28a965) &&
      ((_0xda8e94 = _0x28a965[_0x2d0091(0x158)]),
      (_0x164b05 = _0x28a965[_0x2d0091(0x388)]));
    let _0x3c54b9 =
      _0x1d11dc && !_0x54ce6b && !_0x1995b2
        ? t[_0x2d0091(0x22f)][_0x2d0091(0x1a6)](_0x1d11dc, Number(_0xda8e94), {
            dateSystem: _0xb75cc,
          })
        : _0xda8e94;
    if (_0x164b05)
      _0x28a965 = M(
        _0x58abaf,
        "sheets-pivot.renderText.subtotalWithValue",
        _0x2d0091(0x211),
        f(_0x3c54b9, _0x164b05),
        f(_0x164b05, _0x3c54b9),
      );
    else {
      let _0x118b43 = _0x50fb32 || _0x58abaf[_0x2d0091(0x332)];
      _0x28a965 = M(
        _0x58abaf,
        "sheets-pivot.renderText.subtotal",
        "{0}\x20{1}",
        f(_0x3c54b9, _0x118b43),
        _0x118b43,
      );
    }
  } else {
    if (_0x3f12f8["s"] === e[_0x2d0091(0x2e2)]["GrandTotal"]) {
      let _0x3406b4 = _0x58abaf[_0x2d0091(0x47e)];
      _0x28a965 = M(
        _0x58abaf,
        _0x2d0091(0x3eb),
        _0x2d0091(0x211),
        f(_0x28a965, _0x3406b4),
        _0x3406b4,
      );
    } else
      _0x3f12f8["s"] === e[_0x2d0091(0x2e2)]["MultipleGrandTotal"] &&
        _0x40bf16 &&
        (_0x28a965 = M(
          _0x58abaf,
          _0x2d0091(0x24a),
          "{0}",
          f(_0x28a965, _0x40bf16),
          _0x40bf16,
        ));
  }
  return _0x28a965;
}
function M(_0x5937e1, _0x5ea3ab, _0x100be6, ..._0x3cc543) {
  let _0x3aed95 = _0x5937e1[_0x5ea3ab] || _0x100be6;
  return (
    _0x3cc543[_0x33fe7b(0x231)]((_0x1628a4, _0xd89ec6) => {
      const _0x796d81 = _0x33fe7b;
      _0x3aed95 = _0x3aed95[_0x796d81(0x48c)](
        "{" + _0xd89ec6 + "}",
        _0x1628a4 == null ? "" : String(_0x1628a4),
      );
    }),
    N(_0x3aed95)[_0x33fe7b(0x13d)]()
  );
}
function N(_0x38bd76) {
  let _0x9754b3 = "",
    _0x2e163f = !0x1;
  for (let _0x588df8 of _0x38bd76) {
    let _0x8a8244 = _0x588df8 === "\x20";
    ((!_0x8a8244 || !_0x2e163f) && (_0x9754b3 += _0x588df8),
      (_0x2e163f = _0x8a8244));
  }
  return _0x9754b3;
}
function P(_0x5d891e) {
  if ((0x0, e[_0x3c6188(0x1b8)])(_0x5d891e)) {
    let { errorType: _0x12af00 } = _0x5d891e;
    switch (_0x12af00) {
      case e["PivotErrorTypeEnum"]["Div0"]:
        return n["ErrorType"][_0x3c6188(0x443)];
      case e[_0x3c6188(0x492)][_0x3c6188(0x31e)]:
        return n["ErrorType"][_0x3c6188(0x249)];
      case e["PivotErrorTypeEnum"][_0x3c6188(0x452)]:
        return n["ErrorType"][_0x3c6188(0x4b8)];
      case e["PivotErrorTypeEnum"][_0x3c6188(0x210)]:
        return n[_0x3c6188(0x2b7)][_0x3c6188(0x4b8)];
      case e[_0x3c6188(0x492)]["BadReference"]:
        return n["ErrorType"][_0x3c6188(0x361)];
    }
  }
  return _0x5d891e;
}
function F(_0x1b0bd4, _0x4ff621, _0x42bd1e = !0x1, _0x1a9cc4 = !0x1) {
  let { data: _0x3208f9 } = _0x4ff621,
    _0xf2531f = _0x4ff621[_0xe2a21b(0x172)](),
    _0x83772b = _0x4ff621[_0xe2a21b(0x2f0)]();
  if (_0xf2531f <= 0x0 || _0x83772b <= 0x0) return [];
  let _0x5ad1d5 = _0x4ff621["getLastCol"](),
    _0x3c356d = _0x4ff621[_0xe2a21b(0x42b)](),
    _0x51ce72 = _0x1a9cc4
      ? _0x3c356d >= 0x0
        ? _0x3c356d + 0x1
        : 0x0
      : _0xf2531f,
    _0x724fc3 = _0x1a9cc4
      ? _0x5ad1d5 >= 0x0
        ? _0x5ad1d5 + 0x1
        : 0x0
      : _0x83772b,
    { row: _0x4c96f4, col: _0xb768c7 } = _0x1b0bd4,
    _0x25a7c6 = _0x4c96f4,
    _0x20aa71 = _0xb768c7;
  if (_0x42bd1e) {
    let _0x4b0b0c = [];
    for (let [_0x2f10b6, _0x422d79] of Object[_0xe2a21b(0x1c4)](_0x3208f9))
      for (let [_0x2b54df, _0xe636ea] of Object[_0xe2a21b(0x1c4)](_0x422d79))
        _0x4b0b0c[_0xe2a21b(0x19f)](
          (0x0, t[_0xe2a21b(0x29c)])(
            _0x25a7c6 + Number(_0x2f10b6),
            _0x20aa71 + Number(_0x2b54df),
          ),
        );
    return _0x4b0b0c;
  } else {
    let _0x2d15a5 = _0x1a9cc4 ? +(_0x51ce72 > 0x0) : 0x1,
      _0xe64d72 = _0x1a9cc4 ? +(_0x724fc3 > 0x0) : 0x1;
    return [
      {
        startRow: _0x25a7c6,
        startColumn: _0x20aa71,
        endRow: _0x4c96f4 + _0x51ce72 - _0x2d15a5,
        endColumn: _0xb768c7 + _0x724fc3 - _0xe64d72,
      },
    ];
  }
}
const I = "SHEET_PIVOT_EXCLUSIVE_ID";
let ee = (function (_0x3e137a) {
  return (
    (_0x3e137a[_0x2624ed(0x3e1)] = _0x2624ed(0x43e)),
    (_0x3e137a[_0x2624ed(0x3f0)] = _0x2624ed(0x314)),
    (_0x3e137a[_0x2624ed(0x41c)] = _0x2624ed(0x410)),
    (_0x3e137a[_0x2624ed(0x1a5)] = _0x2624ed(0x1a5)),
    (_0x3e137a[_0x2624ed(0x467)] = _0x2624ed(0x357)),
    (_0x3e137a[_0x2624ed(0x422)] = _0x2624ed(0x465)),
    (_0x3e137a[_0x2624ed(0x3d2)] = _0x2624ed(0x401)),
    (_0x3e137a["SetPivotCollapse"] = _0x2624ed(0x19c)),
    (_0x3e137a["SetPivotFilter"] = "setPivotFilter"),
    (_0x3e137a[_0x2624ed(0x1ae)] = _0x2624ed(0x2a0)),
    (_0x3e137a[_0x2624ed(0x264)] = _0x2624ed(0x42e)),
    (_0x3e137a[_0x2624ed(0x1f9)] = _0x2624ed(0x310)),
    (_0x3e137a[_0x2624ed(0x164)] = _0x2624ed(0x2e8)),
    (_0x3e137a[_0x2624ed(0x2ed)] = _0x2624ed(0x33f)),
    (_0x3e137a["SetValuePivotFilter"] = "setValuePivotFilter"),
    (_0x3e137a[_0x2624ed(0x2e4)] = _0x2624ed(0x47f)),
    (_0x3e137a[_0x2624ed(0x301)] = "resetPivotTable"),
    (_0x3e137a[_0x2624ed(0x2f4)] = _0x2624ed(0x235)),
    (_0x3e137a["SetPivotLayout"] = "setPivotLayout"),
    (_0x3e137a["SetPivotDateGroup"] = _0x2624ed(0x320)),
    _0x3e137a
  );
})({});
const te = {
    "sheets-pivot.blankValue": "(Blank)",
    "sheets-pivot.columnName": "Column ",
    "sheets-pivot.subTotalText": "Total",
    "sheets-pivot.grandTotalText": "Grand Total",
    "sheets-pivot.valueText": "Value",
    "sheets-pivot.rowLabels": "Row\x20Labels",
    "sheets-pivot.columnLabels": "Column Labels",
    "sheets-pivot.averageName": "Average of ",
    "sheets-pivot.countName": "Count of ",
    "sheets-pivot.countNumsName": "Count of ",
    "sheets-pivot.maxName": "Max of ",
    "sheets-pivot.minName": "Min of ",
    "sheets-pivot.productName": "Product of ",
    "sheets-pivot.stdDevName": "StdDev\x20of\x20",
    "sheets-pivot.stdDevpName": "StdDevp\x20of\x20",
    "sheets-pivot.sumName": "Sum\x20of\x20",
    "sheets-pivot.varName": "Var of ",
    "sheets-pivot.varpName": "Varp\x20of\x20",
    "sheets-pivot.subTotal": "Subtotal",
    "sheets-pivot.grandTotal": "Grand Total",
    "sheets-pivot.value": "value",
    "sheets-pivot.blank": "blank",
    "sheets-pivot.other": "other",
    "sheets-pivot.renderText.valueField": "{0}{1}",
    "sheets-pivot.renderText.subtotal": "{0}\x20{1}",
    "sheets-pivot.renderText.grandTotal": "{0} {1}",
    "sheets-pivot.renderText.multipleGrandTotal": "{0}",
    "sheets-pivot.renderText.subtotalWithValue": "{0} {1}",
    "sheets-pivot.emptyPivot.filter": "Filter",
    "sheets-pivot.emptyPivot.row": "Row",
    "sheets-pivot.emptyPivot.column": "Column",
    "sheets-pivot.emptyPivot.values": "Values",
    "sheets-pivot.dateGroup.year": "Year",
    "sheets-pivot.dateGroup.month": "Month",
    "sheets-pivot.dateGroup.day": "Day",
    "sheets-pivot.dateGroup.date": "Day",
    "sheets-pivot.dateGroup.hour": "Hour",
    "sheets-pivot.dateGroup.minute": "Minute",
    "sheets-pivot.dateGroup.hourMinute": "Hour-Minute",
    "sheets-pivot.dateGroup.quarter": "Quarter",
    "sheets-pivot.dateGroup.monthDate": "Month-Day",
    "sheets-pivot.dateGroup.yearQuarter": "Year-Quarter",
    "sheets-pivot.dateGroup.yearMonth": "Year-Month",
    "sheets-pivot.dateGroup.yearMonthDate": "Year-Month-Day",
  },
  L = { undos: [], redos: [], preUndos: [], preRedos: [] },
  R = (0x0, t["createAsyncInterceptorKey"])("pivotPerformCheck"),
  ne = (0x0, t["createInterceptorKey"])("pivotMutationGenerate"),
  re = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.get-pivot-data-local",
    handler: () => !0x0,
  },
  ie = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-data-local",
    handler: () => !0x0,
  },
  z = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-view-local",
    handler: () => !0x0,
  },
  B = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-config-local",
    handler: () => !0x0,
  },
  ae = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-init-pivot-text-local",
    handler: () => !0x0,
  };
function oe(_0x5bfe54) {
  "@babel/helpers - typeof";
  return (
    (oe =
      typeof Symbol == _0xf5b302(0x254) &&
      typeof Symbol[_0xf5b302(0x32a)] == _0xf5b302(0x3b6)
        ? function (_0x5043eb) {
            return typeof _0x5043eb;
          }
        : function (_0x165f40) {
            const _0x47d124 = _0xf5b302;
            return _0x165f40 &&
              typeof Symbol == _0x47d124(0x254) &&
              _0x165f40[_0x47d124(0x358)] === Symbol &&
              _0x165f40 !== Symbol[_0x47d124(0x262)]
              ? _0x47d124(0x3b6)
              : typeof _0x165f40;
          }),
    oe(_0x5bfe54)
  );
}
function se(_0x4e1fbd, _0x277578) {
  if (oe(_0x4e1fbd) != _0x4caea1(0x153) || !_0x4e1fbd) return _0x4e1fbd;
  var _0x1cda41 = _0x4e1fbd[Symbol["toPrimitive"]];
  if (_0x1cda41 !== void 0x0) {
    var _0xfc08d7 = _0x1cda41[_0x4caea1(0x390)](
      _0x4e1fbd,
      _0x277578 || _0x4caea1(0x2ce),
    );
    if (oe(_0xfc08d7) != _0x4caea1(0x153)) return _0xfc08d7;
    throw TypeError(_0x4caea1(0x24b));
  }
  return (_0x277578 === _0x4caea1(0x458) ? String : Number)(_0x4e1fbd);
}
function ce(_0xa8f772) {
  var _0x510fd6 = se(_0xa8f772, _0x3d65b5(0x458));
  return oe(_0x510fd6) == _0x3d65b5(0x3b6) ? _0x510fd6 : _0x510fd6 + "";
}
function V(_0x5b57dd, _0x312958, _0x3582d4) {
  return (
    (_0x312958 = ce(_0x312958)) in _0x5b57dd
      ? Object[_0x199e99(0x168)](_0x5b57dd, _0x312958, {
          value: _0x3582d4,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x5b57dd[_0x312958] = _0x3582d4),
    _0x5b57dd
  );
}
function H(_0x499a2e, _0x3630e3) {
  return function (_0x2be6c3, _0x5b4af5) {
    _0x3630e3(_0x2be6c3, _0x5b4af5, _0x499a2e);
  };
}
function U(_0x4a63bc, _0x3b3dd6, _0x34b96d, _0x45feda) {
  var _0x151c0a = arguments[_0x502417(0x2b6)],
    _0x103a4f =
      _0x151c0a < 0x3
        ? _0x3b3dd6
        : _0x45feda === null
          ? (_0x45feda = Object[_0x502417(0x228)](_0x3b3dd6, _0x34b96d))
          : _0x45feda,
    _0x46427f;
  if (
    typeof Reflect == _0x502417(0x153) &&
    typeof Reflect[_0x502417(0x2ec)] == _0x502417(0x254)
  )
    _0x103a4f = Reflect["decorate"](_0x4a63bc, _0x3b3dd6, _0x34b96d, _0x45feda);
  else {
    for (
      var _0x2503a9 = _0x4a63bc[_0x502417(0x2b6)] - 0x1;
      _0x2503a9 >= 0x0;
      _0x2503a9--
    )
      (_0x46427f = _0x4a63bc[_0x2503a9]) &&
        (_0x103a4f =
          (_0x151c0a < 0x3
            ? _0x46427f(_0x103a4f)
            : _0x151c0a > 0x3
              ? _0x46427f(_0x3b3dd6, _0x34b96d, _0x103a4f)
              : _0x46427f(_0x3b3dd6, _0x34b96d)) || _0x103a4f);
  }
  return (
    _0x151c0a > 0x3 &&
      _0x103a4f &&
      Object["defineProperty"](_0x3b3dd6, _0x34b96d, _0x103a4f),
    _0x103a4f
  );
}
let W = class extends t["Disposable"] {
  constructor(_0x4aa17c) {
    (super(),
      (this["_commandService"] = _0x4aa17c),
      V(this, _0x2ecfb4(0x132), new Map()));
  }
  ["handleAsyncResponse"](_0xd1e1a7) {
    let { version: _0x3d3d2a } = _0xd1e1a7,
      _0x1fe91d = this[_0x197969(0x132)][_0x197969(0x345)](_0x3d3d2a);
    _0x1fe91d &&
      (this[_0x197969(0x132)][_0x197969(0x216)](_0x3d3d2a),
      _0xd1e1a7[_0x197969(0x186)] === void 0x0
        ? _0x1fe91d[_0x197969(0x2bb)](_0xd1e1a7)
        : _0x1fe91d["reject"](Error(_0xd1e1a7[_0x197969(0x186)])));
  }
  async ["getPivotDisplayConfig"](_0x3f1ba6) {
    let _0x4288f9 = this[_0x231fb5(0x1fa)](),
      _0x1cf66b = new Promise((_0x4748ac, _0x4d9fdb) => {
        const _0x5f3534 = _0x231fb5;
        this["_requestResolvers"][_0x5f3534(0x2d0)](_0x4288f9, {
          resolve: _0x4748ac,
          reject: _0x4d9fdb,
        });
      });
    try {
      (await this[_0x231fb5(0x1db)][_0x231fb5(0x323)](
        re["id"],
        { version: _0x4288f9, ..._0x3f1ba6 },
        { onlyLocal: !0x0 },
      )) || this[_0x231fb5(0x176)](_0x4288f9, Error(_0x231fb5(0x3cc)));
    } catch (_0x357063) {
      this[_0x231fb5(0x176)](_0x4288f9, _0x357063);
    }
    return _0x1cf66b;
  }
  ["dispose"]() {
    super[_0xd8dc78(0x367)]();
    let _0x5263ab = Error(_0xd8dc78(0x251));
    (this[_0xd8dc78(0x132)][_0xd8dc78(0x231)](({ reject: _0x4f4784 }) =>
      _0x4f4784(_0x5263ab),
    ),
      this["_requestResolvers"][_0xd8dc78(0x3c1)]());
  }
  ["_rejectRequest"](_0x393cbb, _0x3916f5) {
    let _0x729fc = this["_requestResolvers"][_0x38f644(0x345)](_0x393cbb);
    _0x729fc &&
      (this[_0x38f644(0x132)]["delete"](_0x393cbb),
      _0x729fc[_0x38f644(0x28a)](_0x3916f5));
  }
  ["_generateUniqueVersion"]() {
    return Math[_0x27cabc(0x3da)]()
      [_0x27cabc(0x2dc)](0x24)
      [_0x27cabc(0x4b4)](0x2, 0x10);
  }
};
W = U([H(0x0, (0x0, t["Inject"])(t["ICommandService"]))], W);
const le = (_0x8ce806) => {
  var _0x17b189;
  return (
    ((_0x17b189 = _0x8ce806[_0x264610(0x1f5)]) == null
      ? void 0x0
      : _0x17b189[_0x264610(0x42a)]["replace"](/\r\n$/, "")) || ""
  );
};
var G = class extends e["DataFieldManager"] {
  constructor(_0xdd9068, _0x36b711) {
    (super(),
      V(this, _0x1a1d94(0x160), {}),
      V(this, _0x1a1d94(0x1ec), void 0x0),
      V(this, _0x1a1d94(0x382), void 0x0),
      (this[_0x1a1d94(0x1ec)] = _0x36b711),
      (this[_0x1a1d94(0x382)] = _0xdd9068));
  }
  ["initDataRanges"]() {
    for (let _0x40f211 in this[_0x4527a6(0x1bb)]) {
      let _0x491221 = this[_0x4527a6(0x1bb)][_0x40f211],
        _0x3e4a35 = _0x491221["getRangeKey"]();
      this[_0x4527a6(0x160)][_0x3e4a35] = _0x491221[_0x4527a6(0x1b6)]();
    }
  }
  ["getAutoDisplayNameFunction"]() {
    let _0x61f0fa = this[_0x1a0c9a(0x382)];
    return ge["bind"](_0x61f0fa);
  }
  ["deleteDataField"](_0x4670c6) {
    let _0x59e046 = this["dataFields"][_0x4670c6][_0x427ce2(0x33e)];
    (delete this[_0x427ce2(0x1bb)][_0x4670c6],
      delete this["rangeKeyMap"][_0x59e046]);
  }
  ["addDataFieldWithoutUnitInfo"](_0x540d52) {
    this[_0xf66b88(0x1bb)][_0x540d52["getId"]()] = _0x540d52;
  }
  ["removeCollectionImp"](_0x30cb0f) {
    var _0x5c6409;
    let _0x11c206 = this[_0x2a2580(0x382)][_0x2a2580(0x16f)](_0x30cb0f);
    if (_0x11c206) {
      var _0x3f90c1;
      let { unitId: _0x3458b3, subUnitId: _0x1dd787 } = _0x11c206,
        _0x1a00b5 =
          (_0x3f90c1 = this["_host"][_0x2a2580(0x2e6)](
            _0x3458b3,
            _0x1dd787,
            _0x30cb0f,
          )) == null
            ? void 0x0
            : _0x3f90c1[_0x2a2580(0x33d)];
      this["_host"][_0x2a2580(0x148)]({
        token: _0x30cb0f,
        type: "delete",
        dataRangeInfo: _0x1a00b5,
      });
    }
    ((_0x5c6409 = this[_0x2a2580(0x3f3)](_0x30cb0f)) == null ||
      _0x5c6409["dispose"](),
      delete this[_0x2a2580(0x1b9)][_0x30cb0f]);
  }
  ["getRangeKey"](_0x218db5, _0x3f0242) {
    let {
        sheetName: _0x557b8e,
        unitId: _0x3dbab1,
        range: _0x360b31,
      } = _0x218db5,
      { startRow: _0x702c38, endRow: _0x5792dc } = _0x360b31;
    return (0x0, n[_0x28117f(0x220)])(_0x3dbab1, _0x557b8e, {
      startRow: _0x702c38,
      endRow: _0x5792dc,
      startColumn: _0x3f0242,
      endColumn: _0x3f0242,
    });
  }
  ["getDataFieldByRangeKey"](_0x15b79c) {
    return this["dataFields"][this[_0x353180(0x160)][_0x15b79c]];
  }
  ["setRangeKeyMap"](_0x48f7ce, _0x3bcacc) {
    this[_0x5f38c0(0x160)][_0x48f7ce] = _0x3bcacc;
  }
  ["updateRangeKeyMap"](_0x4df160, _0x4ede07) {
    ((this[_0x3f8e1d(0x160)][_0x4ede07] = this[_0x3f8e1d(0x160)][_0x4df160]),
      delete this[_0x3f8e1d(0x160)][_0x4df160]);
  }
  ["addCollectionByJSON"](_0xc567f1, _0x4e0cc9, _0x1a158f, _0x3fcdfb) {
    let _0x389f22 = new e["FieldsCollection"](this);
    _0x389f22[_0x583175(0x329)](_0x4e0cc9);
    let _0x2499d1 = [],
      _0x75f3be = 0x0;
    for (let _0x2896b9 of _0x389f22[_0x583175(0x2e1)]) {
      let _0x190fc1 = this["getRangeKey"](_0x1a158f, _0x75f3be),
        _0x10502d = this[_0x583175(0x1bb)][_0x2896b9];
      (_0x10502d &&
        ((_0x10502d["rangeKey"] = _0x190fc1),
        this["setRangeKeyMap"](_0x190fc1, _0x2896b9),
        _0x2499d1[_0x583175(0x19f)]({
          index: _0x75f3be,
          dataField: _0x10502d,
        })),
        _0x75f3be++);
    }
    return (
      this[_0x583175(0x3b8)](_0xc567f1, _0x389f22, _0x1a158f, _0x3fcdfb),
      { collection: _0x389f22, updateDataFieldList: _0x2499d1 }
    );
  }
  ["getRangeStartEndInfo"](_0x460b0c, _0x226966) {
    return _0x460b0c[_0x145940(0x468)] === t["RANGE_TYPE"]["COLUMN"]
      ? {
          startRow: 0x0,
          startColumn: _0x460b0c[_0x145940(0x205)],
          endRow: _0x226966[_0x145940(0x172)]() - 0x1,
          endColumn: _0x460b0c[_0x145940(0x2bc)],
        }
      : {
          startRow: _0x460b0c[_0x145940(0x3f1)],
          startColumn: _0x460b0c["startColumn"],
          endRow: _0x460b0c[_0x145940(0x150)],
          endColumn: _0x460b0c[_0x145940(0x2bc)],
        };
  }
  ["createCollectionWithDataRange"](_0x139fca) {
    let { sheetName: _0x343bfd, range: _0xc1e85f } = _0x139fca,
      _0x3e30ef = this[_0x4b32ae(0x1ec)][_0x4b32ae(0x4a0)](
        t[_0x4b32ae(0x2b3)]["UNIVER_SHEET"],
      ),
      _0x36c66a = _0x3e30ef["getSheetBySheetName"](_0x343bfd),
      _0x387f35 = _0x36c66a["getCellMatrix"](),
      {
        startColumn: _0x3e2585,
        startRow: _0x5ddb7c,
        endColumn: _0x4df2c4,
      } = this[_0x4b32ae(0x356)](_0xc1e85f, _0x36c66a),
      _0x228ffb = _0x3e30ef[_0x4b32ae(0x439)](),
      _0x32d25b = new e["FieldsCollection"](this);
    _0x32d25b[_0x4b32ae(0x1d2)](_0x139fca);
    let _0x394f8c = [],
      _0x29a901 = {};
    for (let _0x13c50d = _0x3e2585; _0x13c50d <= _0x4df2c4; _0x13c50d++) {
      let _0x14afba = _0x387f35[_0x4b32ae(0x197)](_0x5ddb7c, _0x13c50d),
        _0x51e0f0 = this[_0x4b32ae(0x145)](_0x139fca, _0x13c50d),
        _0x2ee788 = this[_0x4b32ae(0x14a)](_0x51e0f0);
      if (_0x2ee788)
        _0x32d25b[_0x4b32ae(0x4bf)](
          _0x2ee788[_0x4b32ae(0x1b6)](),
          _0x2ee788["getName"](),
        );
      else {
        let _0x40ab22 = this[_0x4b32ae(0x263)](),
          _0x182f6c = this["adjustSheetCellData"](
            _0x14afba,
            _0x228ffb,
            _0x29a901,
          );
        (0x0, e[_0x4b32ae(0x179)])(_0x182f6c) &&
          (_0x182f6c = t["numfmt"][_0x4b32ae(0x1a6)](
            _0x182f6c["f"],
            Number(_0x182f6c["v"]),
          ));
        let _0x19eef8 = this[_0x4b32ae(0x136)](_0x182f6c, _0x13c50d),
          _0x5c6095 = new e["DataField"](
            _0x40ab22,
            _0x19eef8,
            (0x0, e[_0x4b32ae(0x1b4)])(0x3),
          );
        ((_0x5c6095["rangeKey"] = _0x51e0f0),
          (this[_0x4b32ae(0x1bb)][_0x40ab22] = _0x5c6095),
          _0x32d25b["addField"](_0x40ab22, _0x19eef8),
          _0x394f8c[_0x4b32ae(0x19f)]({
            index: _0x13c50d,
            dataField: _0x5c6095,
          }));
      }
    }
    return { updateDataFieldList: _0x394f8c, collection: _0x32d25b };
  }
  ["_getAutoName"](_0x34abfb) {
    return (
      this[_0x1f35c4(0x382)][_0x1f35c4(0x46a)]()["sheets-pivot.columnName"] +
      "\x20" +
      (0x0, t[_0x1f35c4(0x165)])(_0x34abfb)
    );
  }
  ["uniqueDataFieldName"](_0x37714a, _0x350a87) {
    return _0x37714a == null || _0x37714a === ""
      ? this[_0x4d3feb(0x15a)](_0x350a87)
      : String(_0x37714a);
  }
  ["getCollection"](_0x5c6671) {
    return this[_0x4195bd(0x1b9)][_0x5c6671];
  }
  ["addCollection"](_0x3abd2c, _0x182a0c, _0x2dbb93, _0x4dbbc4) {
    ((this[_0x4b4f5b(0x1b9)][_0x3abd2c] = _0x182a0c),
      _0x182a0c[_0x4b4f5b(0x1d2)](_0x2dbb93),
      this[_0x4b4f5b(0x382)][_0x4b4f5b(0x148)]({
        token: _0x3abd2c,
        type: _0x4b4f5b(0x3db),
        dataRangeInfo: _0x2dbb93,
        targetCellInfo: _0x4dbbc4,
      }));
  }
  ["handleMoveRange"](_0x202395, _0x2c8a51) {
    let _0x361eb2 = this[_0x55ba6e(0x3f3)](_0x202395),
      _0x3f6d06 = _0x361eb2[_0x55ba6e(0x296)](),
      _0x57da9e = 0x0;
    for (let _0xde98aa of _0x3f6d06) {
      let _0x4e6c6d = _0x361eb2[_0x55ba6e(0x1f8)](_0xde98aa),
        _0x5ae2ad = this[_0x55ba6e(0x145)](_0x2c8a51, _0x57da9e);
      (this[_0x55ba6e(0x1fb)](_0x4e6c6d[_0x55ba6e(0x33e)], _0x5ae2ad),
        _0x57da9e++);
    }
  }
  ["getPivotDirtyViewInfo"]() {
    return { runtimeCellData: {}, dirtyRanges: {} };
  }
  ["getUpdateRangeDeleteIds"](_0x31424d, _0x28e282) {
    if (this[_0x2ced5e(0x3f3)](_0x31424d)) {
      let _0x181195 = this[_0x2ced5e(0x3e5)](_0x28e282),
        _0x3fbfa4 = [];
      for (let _0x19cba9 of _0x181195)
        this[_0x2ced5e(0x160)][_0x19cba9] !== void 0x0 &&
          _0x3fbfa4["push"](this[_0x2ced5e(0x160)][_0x19cba9]);
      let _0x588478 = this[_0x2ced5e(0x34d)](_0x31424d),
        _0x31f7d9 = [],
        _0xe4cefe = new Set(_0x3fbfa4);
      for (let _0x2a8034 of _0x588478)
        _0xe4cefe[_0x2ced5e(0x442)](_0x2a8034) ||
          _0x31f7d9[_0x2ced5e(0x19f)](_0x2a8034);
      return _0x31f7d9;
    }
  }
  ["getMatrixValue"](_0x1f0857, _0x18344b, _0x2abe0a, _0x3f3b52, _0x59f01c) {
    return _0x18344b && _0x18344b[_0x277f2f(0x197)](_0x3f3b52, _0x59f01c)
      ? _0x18344b[_0x277f2f(0x197)](_0x3f3b52, _0x59f01c)
      : _0x2abe0a && _0x2abe0a[_0x277f2f(0x197)](_0x3f3b52, _0x59f01c)
        ? _0x2abe0a[_0x277f2f(0x197)](_0x3f3b52, _0x59f01c)
        : _0x1f0857["getValue"](_0x3f3b52, _0x59f01c);
  }
  ["refreshDataField"](_0x7f5ab8, _0x210e14, _0x29ba6a, _0x4b4247) {
    let _0x426d6f = this[_0x1dfbec(0x1bb)][_0x7f5ab8];
    if (!_0x426d6f) return;
    let {
        subUnitId: _0x804833,
        range: _0x5423f8,
        unitId: _0x55b2d7,
      } = _0x210e14,
      _0xee41f = this["_univerInstanceService"][_0x1dfbec(0x2a4)](_0x55b2d7);
    if (!_0xee41f) {
      console[_0x1dfbec(0x186)](_0x1dfbec(0x1cc));
      return;
    }
    let _0x301b25 = _0xee41f[_0x1dfbec(0x16b)](_0x804833),
      _0x2a7272 = _0x301b25[_0x1dfbec(0x1dd)](),
      { arrayFormulaCellDataMatrix: _0x396b54, unitDataMatrix: _0x462d09 } =
        _0x4b4247 || {},
      {
        startRow: _0x42be56,
        startColumn: _0x5f13a7,
        endRow: _0x10346d,
      } = this[_0x1dfbec(0x356)](_0x5423f8, _0x301b25);
    _0x426d6f[_0x1dfbec(0x497)]();
    let _0x2e9efa = _0xee41f[_0x1dfbec(0x439)](),
      _0x52b45c = {},
      _0x3e6b8c = this[_0x1dfbec(0x20d)](
        _0x2a7272,
        _0x396b54,
        _0x462d09,
        _0x42be56,
        _0x5f13a7 + _0x29ba6a,
      ),
      _0x123562 = this["adjustSheetCellData"](_0x3e6b8c, _0x2e9efa, _0x52b45c);
    (0x0, e[_0x1dfbec(0x179)])(_0x123562) &&
      (_0x123562 = t[_0x1dfbec(0x22f)][_0x1dfbec(0x1a6)](
        _0x123562["f"],
        Number(_0x123562["v"]),
      ));
    let _0x272c42 = this[_0x1dfbec(0x136)](_0x123562, _0x5f13a7 + _0x29ba6a);
    _0x426d6f[_0x1dfbec(0x267)](_0x272c42);
    for (let _0x132192 = _0x42be56 + 0x1; _0x132192 <= _0x10346d; _0x132192++) {
      let _0x20497f = this[_0x1dfbec(0x20d)](
        _0x2a7272,
        _0x396b54,
        _0x462d09,
        _0x132192,
        _0x5f13a7 + _0x29ba6a,
      );
      _0x426d6f["addRecord"](
        this["adjustSheetCellData"](_0x20497f, _0x2e9efa, _0x52b45c),
        _0x132192 - 0x1 - _0x42be56,
      );
    }
  }
  ["refreshData"](_0x2bbb9e, _0x1bd861, _0x15f8ca) {
    let {
        subUnitId: _0x2442c0,
        range: _0x915709,
        unitId: _0x2c95ad,
      } = _0x15f8ca,
      _0x1705cf = this[_0x5a23a0(0x1ec)][_0x5a23a0(0x2a4)](_0x2c95ad);
    if (!_0x1705cf) {
      console[_0x5a23a0(0x186)](_0x5a23a0(0x1cc));
      return;
    }
    let _0x18b31c = _0x1705cf["getSheetBySheetId"](_0x2442c0),
      _0x399cf2 = _0x18b31c["getCellMatrix"](),
      {
        startRow: _0x4106a3,
        startColumn: _0x4b74fb,
        endRow: _0x3a5da8,
      } = this["getRangeStartEndInfo"](_0x915709, _0x18b31c),
      _0x4fa64 = _0x1705cf[_0x5a23a0(0x439)](),
      _0x4ab217 = {};
    for (let { dataField: _0x2ad89c, index: _0x185a5b } of _0x1bd861) {
      _0x2ad89c["reset"]();
      let _0x51e3f3 = this[_0x5a23a0(0x20d)](
          _0x399cf2,
          void 0x0,
          void 0x0,
          _0x4106a3,
          _0x4b74fb + _0x185a5b,
        ),
        _0x51094c = this[_0x5a23a0(0x21e)](_0x51e3f3, _0x4fa64, _0x4ab217);
      (0x0, e[_0x5a23a0(0x179)])(_0x51094c) &&
        (_0x51094c = t[_0x5a23a0(0x22f)]["format"](
          _0x51094c["f"],
          Number(_0x51094c["v"]),
        ));
      let _0x4a9cd0 = this[_0x5a23a0(0x136)](_0x51094c, _0x4b74fb + _0x185a5b);
      _0x2ad89c[_0x5a23a0(0x267)](_0x4a9cd0);
    }
    _0x2bbb9e[_0x5a23a0(0x272)]();
    for (let _0x25b814 = _0x4106a3 + 0x1; _0x25b814 <= _0x3a5da8; _0x25b814++)
      for (let { index: _0x8c8e9c, dataField: _0x3168d9 } of _0x1bd861) {
        let _0x3aa584 = _0x399cf2[_0x5a23a0(0x197)](
          _0x25b814,
          _0x4b74fb + _0x8c8e9c,
        );
        _0x3168d9[_0x5a23a0(0x2d7)](
          this[_0x5a23a0(0x21e)](_0x3aa584, _0x4fa64, _0x4ab217),
          _0x25b814 - 0x1 - _0x4106a3,
        );
      }
    _0x2bbb9e[_0x5a23a0(0x212)](_0x3a5da8 - _0x4106a3);
  }
  ["getRangeKeyList"](_0x5844f1) {
    let { range: _0x5d9e9f } = _0x5844f1,
      { startColumn: _0x163248, endColumn: _0x5040d4 } = _0x5d9e9f,
      _0x593e92 = [];
    for (let _0x114620 = _0x163248; _0x114620 <= _0x5040d4; _0x114620++)
      _0x593e92[_0xf02cfa(0x19f)](this[_0xf02cfa(0x145)](_0x5844f1, _0x114620));
    return _0x593e92;
  }
  ["adjustSheetCellData"](_0x33bf6a, _0x30108b, _0x276ce2) {
    if (_0x33bf6a) {
      let {
        s: _0x3b48e9,
        v: _0xded147,
        t: _0x4533eb,
        p: _0x12930d,
      } = _0x33bf6a;
      if (_0x12930d) return le(_0x12930d);
      let _0x22a953 = _0x30108b["get"](_0x3b48e9);
      if (
        _0x22a953 &&
        _0x4533eb === t[_0x1f0497(0x137)]["NUMBER"] &&
        _0x22a953["n"]
      ) {
        let { pattern: _0x223c23 } = _0x22a953["n"];
        _0x276ce2[_0x223c23] ||
          (_0x276ce2[_0x223c23] =
            t[_0x1f0497(0x22f)][_0x1f0497(0x1ce)](_0x223c23));
        let _0x4e6707 = _0x276ce2[_0x223c23],
          _0x24b47f = _0x4e6707[_0x1f0497(0x412)];
        if (_0x4e6707["isText"]) return String(_0xded147);
        if (_0x24b47f) return { v: _0xded147, f: _0x223c23 };
      }
      if (_0x4533eb === t[_0x1f0497(0x137)][_0x1f0497(0x35e)])
        return Number(_0xded147);
      if (
        _0x4533eb === t[_0x1f0497(0x137)]["STRING"] ||
        _0x4533eb === t[_0x1f0497(0x137)][_0x1f0497(0x37e)]
      )
        return String(_0xded147);
      if (_0x4533eb === void 0x0) {
        let _0x1da1fe = Number(_0xded147);
        if (
          !Number[_0x1f0497(0x45e)](_0x1da1fe) &&
          String(_0x1da1fe) === _0xded147
        )
          return _0x1da1fe;
      }
      return _0xded147 ?? null;
    } else return null;
  }
  ["getRangeData"](_0x3aebba) {
    let {
        sheetName: _0x49f203,
        range: _0x389529,
        unitId: _0x2c4f2e,
      } = _0x3aebba,
      _0x8e96ba = this[_0x2a9e34(0x1ec)]["getUnit"](_0x2c4f2e);
    if (!_0x8e96ba)
      return (
        console[_0x2a9e34(0x186)](_0x2a9e34(0x1cc)),
        { header: [], data: [] }
      );
    let _0x3bb6a1 = _0x8e96ba[_0x2a9e34(0x38a)](_0x49f203),
      _0x51da2c = _0x3bb6a1[_0x2a9e34(0x1dd)](),
      {
        startRow: _0x158f82,
        startColumn: _0x32a8a2,
        endRow: _0x4551ae,
        endColumn: _0x2f2e19,
      } = this[_0x2a9e34(0x356)](_0x389529, _0x3bb6a1),
      _0xce4701 = _0x8e96ba["getStyles"](),
      _0xfaf10b = [],
      _0x58851e = [],
      _0x1d68a1 = {};
    for (let _0x1acf66 = _0x158f82; _0x1acf66 <= _0x4551ae; _0x1acf66++) {
      let _0x3b6e24 = [];
      for (let _0x111f72 = _0x32a8a2; _0x111f72 <= _0x2f2e19; _0x111f72++) {
        let _0x258fe9 = _0x51da2c[_0x2a9e34(0x197)](_0x1acf66, _0x111f72);
        _0x1acf66 === _0x158f82
          ? _0xfaf10b["push"](_0x258fe9 == null ? null : String(_0x258fe9["v"]))
          : _0x3b6e24[_0x2a9e34(0x19f)](
              this[_0x2a9e34(0x21e)](_0x258fe9, _0xce4701, _0x1d68a1),
            );
      }
      _0x58851e[_0x2a9e34(0x19f)](_0x3b6e24);
    }
    return { header: _0xfaf10b, data: _0x58851e };
  }
  ["toJSON"]() {
    return super["toJSON"]();
  }
  ["fromJSON"](_0x3b5820) {
    (super["fromJSON"](_0x3b5820), this[_0x5d9334(0x438)]());
  }
  ["dispose"]() {
    (super[_0xa0dc0a(0x367)](),
      (this[_0xa0dc0a(0x160)] = {}),
      (this["_host"] = null));
  }
};
const ue = (_0x102c16) => {
    let { targetCellInfo: _0x21daeb, direction: _0x2e68f0 = _0x3a2f6d(0x3fa) } =
        _0x102c16,
      { matrixCache: _0xd3e4e6, rangesCache: _0x4029bf } = q(
        {
          filter: "Filter",
          row: _0x3a2f6d(0x289),
          column: _0x3a2f6d(0x374),
          values: _0x3a2f6d(0x2cc),
        },
        _0x21daeb,
        _0x2e68f0,
      ),
      _0x58053d = new t[_0x3a2f6d(0x38b)]();
    return (
      _0xd3e4e6["forValue"]((_0x4aaeb2, _0x2e777c, _0x45f9e2) => {
        _0x58053d["setValue"](_0x4aaeb2, _0x2e777c, _0x45f9e2);
      }),
      { matrix: _0x58053d, rangesCache: _0x4029bf }
    );
  },
  de = (_0x27b1a3) => {
    let _0x22c178;
    if (
      (_0x27b1a3 != null && _0x27b1a3["v"]) ||
      (_0x27b1a3 == null ? void 0x0 : _0x27b1a3["v"]) === 0x0
    ) {
      _0x22c178 ||= {};
      let _0x553e88 = P(_0x27b1a3["v"]);
      (typeof _0x553e88 == _0x54c2c0(0x3ea)
        ? (_0x22c178["t"] = t[_0x54c2c0(0x137)][_0x54c2c0(0x35e)])
        : typeof _0x553e88 == _0x54c2c0(0x458) &&
          (_0x22c178["t"] = t[_0x54c2c0(0x137)][_0x54c2c0(0x1c1)]),
        (_0x22c178["v"] = _0x553e88));
    }
    return _0x22c178;
  },
  fe = (_0x448157, _0x19fc6e, _0x284754, _0x4c398f, _0x53efee) => {
    let {
        cornerView: _0x3f786d,
        rowView: _0x1dd680,
        colView: _0x9676a5,
        dataView: _0x57f4c4,
        pageView: _0x523263,
        formatMap: _0x5d23a7,
      } = _0x448157,
      { row: _0x3bbfd3, col: _0x1bf872 } = _0x19fc6e,
      _0x447183 = new t[_0x2e746b(0x38b)](),
      _0x2a9fb2 = p(_0x448157, _0x1bf872, _0x4c398f),
      _0x41b691 = _0x3bbfd3,
      _0x1e656a = _0x1bf872;
    Object[_0x2e746b(0x2a8)](_0x523263[_0x2e746b(0x16a)])[_0x2e746b(0x231)](
      (_0x204e9e) => {
        Object["keys"](_0x523263["data"][Number(_0x204e9e)])["forEach"](
          (_0xaf4545) => {
            let _0x33d4fe = {
              ..._0x523263[_0x1ef2f0(0x16a)][Number(_0x204e9e)][
                Number(_0xaf4545)
              ],
            };
            _0x447183[_0x1ef2f0(0x300)](
              Number(_0x204e9e) + _0x41b691,
              m(_0x2a9fb2, Number(_0xaf4545) + _0x1e656a),
              de(_0x33d4fe),
            );
          },
        );
      },
    );
    let _0x537911 = Object[_0x2e746b(0x2a8)](_0x523263[_0x2e746b(0x16a)])[
      _0x2e746b(0x2b6)
    ];
    _0x41b691 += _0x537911 + +!!_0x537911;
    let _0x3de883 = _0x3f786d["getRowCount"](),
      _0x2b954c = _0x3f786d["getColCount"]();
    for (let _0xf6bfa5 = 0x0; _0xf6bfa5 < _0x3de883; _0xf6bfa5++)
      for (let _0x1fb0f0 = 0x0; _0x1fb0f0 < _0x2b954c; _0x1fb0f0++) {
        var _0x1eca14;
        let _0x412d75 = {
          ...((_0x1eca14 = _0x3f786d[_0x2e746b(0x16a)]) == null ||
          (_0x1eca14 = _0x1eca14[_0xf6bfa5]) == null
            ? void 0x0
            : _0x1eca14[_0x1fb0f0]),
        };
        if (_0x412d75) {
          var _0x2c6fa6, _0x1cfae9;
          ((_0x2c6fa6 = _0x1dd680[_0x2e746b(0x4a3)][_0x1fb0f0]) != null &&
            _0x2c6fa6[_0x2e746b(0x47a)] &&
            _0x1fb0f0 === _0x2b954c - 0x1 &&
            _0xf6bfa5 === _0x3de883 - 0x1 &&
            (_0x412d75["v"] = "" + _0x284754[_0x2e746b(0x1fe)]),
            _0xf6bfa5 === _0x3de883 - 0x1 &&
              (_0x1cfae9 = _0x3f786d[_0x2e746b(0x1e3)][_0x1fb0f0]) != null &&
              _0x1cfae9[_0x2e746b(0x45b)] &&
              (_0x412d75["v"] =
                "" + (_0x284754[_0x2e746b(0x418)] || _0x2e746b(0x441))));
        }
        _0x447183["setValue"](
          _0xf6bfa5 + _0x41b691,
          m(_0x2a9fb2, _0x1fb0f0 + _0x1e656a),
          de(_0x412d75),
        );
      }
    _0x1e656a += _0x2b954c;
    let _0x53362d = _0x9676a5[_0x2e746b(0x4a3)],
      _0x4f9f35 =
        _0x9676a5[_0x2e746b(0x42b)]() >= 0x0
          ? _0x9676a5[_0x2e746b(0x42b)]() + 0x1
          : 0x0,
      _0x348d53 =
        _0x9676a5[_0x2e746b(0x266)]() >= 0x0
          ? _0x9676a5["getLastCol"]() + 0x1
          : 0x0;
    for (let _0x504da4 = 0x0; _0x504da4 < _0x4f9f35; _0x504da4++)
      for (let _0x3643d2 = 0x0; _0x3643d2 < _0x348d53; _0x3643d2++) {
        var _0x5ceef3, _0x1f88c2;
        let _0x49fcdc = {
            ...((_0x5ceef3 = _0x9676a5[_0x2e746b(0x16a)]) == null ||
            (_0x5ceef3 = _0x5ceef3[_0x504da4]) == null
              ? void 0x0
              : _0x5ceef3[_0x3643d2]),
          },
          _0x319d2c =
            _0x5d23a7[
              (_0x1f88c2 = _0x53362d[_0x3643d2]) == null
                ? void 0x0
                : _0x1f88c2[_0x2e746b(0x30c)]
            ];
        if (_0x49fcdc) {
          let _0x47bf73 = _0x9676a5[_0x2e746b(0x18f)](_0x3643d2 + 0x1);
          _0x504da4 === 0x0 && _0x47bf73 != null && _0x47bf73["isColumnLabel"]
            ? (_0x49fcdc["v"] =
                "" + (_0x284754[_0x2e746b(0x384)] || "Column\x20Labels"))
            : (_0x49fcdc["v"] = j(
                _0x49fcdc,
                _0x504da4 === 0x0 &&
                  (_0x47bf73 == null ? void 0x0 : _0x47bf73[_0x2e746b(0x47a)]),
                _0x319d2c,
                _0x284754,
                _0x284754["sheets-pivot.subTotalText"],
                void 0x0,
                _0x53efee,
              ));
        }
        _0x447183[_0x2e746b(0x300)](
          _0x504da4 + _0x41b691,
          m(_0x2a9fb2, _0x3643d2 + _0x1e656a),
          de(_0x49fcdc),
        );
      }
    _0x41b691 += _0x3de883;
    let _0x3b4dc5 = _0x1dd680[_0x2e746b(0x4a3)],
      _0x35f75e =
        _0x1dd680[_0x2e746b(0x42b)]() >= 0x0
          ? _0x1dd680["getLastRow"]() + 0x1
          : 0x0,
      _0x478bed =
        _0x1dd680["getLastCol"]() >= 0x0
          ? _0x1dd680[_0x2e746b(0x266)]() + 0x1
          : 0x0;
    for (let _0x334d2e = 0x0; _0x334d2e < _0x35f75e; _0x334d2e++)
      for (let _0x334922 = 0x0; _0x334922 < _0x478bed; _0x334922++) {
        var _0x2cb5c4, _0x58fa9f;
        let _0x578b9d = {
            ...((_0x2cb5c4 = _0x1dd680[_0x2e746b(0x16a)]) == null ||
            (_0x2cb5c4 = _0x2cb5c4[_0x334d2e]) == null
              ? void 0x0
              : _0x2cb5c4[_0x334922]),
          },
          _0x1f3432 =
            _0x5d23a7[
              (_0x58fa9f = _0x3b4dc5[_0x334922]) == null
                ? void 0x0
                : _0x58fa9f["tableFieldId"]
            ];
        (_0x578b9d &&
          (_0x578b9d["v"] = j(
            _0x578b9d,
            !0x1,
            _0x1f3432,
            _0x284754,
            void 0x0,
            _0x284754[_0x2e746b(0x3f8)],
            _0x53efee,
          )),
          _0x447183[_0x2e746b(0x300)](
            _0x334d2e + _0x41b691,
            m(_0x2a9fb2, _0x334922 + _0x1bf872),
            de(_0x578b9d),
          ));
      }
    let _0xe467c8 = _0x57f4c4[_0x2e746b(0x172)](),
      _0x52fbb6 = _0x57f4c4["getColCount"]();
    for (let _0x44a9fd = 0x0; _0x44a9fd < _0xe467c8; _0x44a9fd++)
      for (let _0x16d9c0 = 0x0; _0x16d9c0 < _0x52fbb6; _0x16d9c0++) {
        var _0x363d50;
        let _0x1a067f = {
          ...((_0x363d50 = _0x57f4c4["data"]) == null ||
          (_0x363d50 = _0x363d50[_0x44a9fd]) == null
            ? void 0x0
            : _0x363d50[_0x16d9c0]),
        };
        _0x447183[_0x2e746b(0x300)](
          _0x44a9fd + _0x41b691,
          m(_0x2a9fb2, _0x16d9c0 + _0x1e656a),
          de(_0x1a067f),
        );
      }
    return _0x447183;
  },
  pe = (_0x2c8815) => {
    let {
      view: _0x5c21e7,
      targetCellInfo: _0xd87e35,
      isEmpty: _0x569898,
      textInfo: _0x373ba9,
      direction: _0x507bcc = _0x50734b(0x3fa),
      dateSystem: _0x2e5f8b = t["DateSystem"]["Date1900"],
    } = _0x2c8815;
    if (_0x569898) return ue(_0x2c8815);
    let {
        pageView: _0x3a858b,
        cornerView: _0xce9d4,
        rowView: _0x271b24,
        colView: _0x23a598,
        dataView: _0x540feb,
      } = _0x5c21e7,
      _0xff5d3b = p(_0x5c21e7, _0xd87e35[_0x50734b(0x1a4)], _0x507bcc),
      _0x418ff6 = F(_0xd87e35, _0x3a858b, !0x0),
      _0x2b6195 =
        _0x3a858b[_0x50734b(0x15d)] >= 0x0 ? _0x3a858b["lastRow"] + 0x1 : 0x0,
      _0x5e2690 = _0xce9d4[_0x50734b(0x172)](),
      _0x1962a9 = _0xce9d4[_0x50734b(0x2f0)](),
      _0x39d80d = +(_0x418ff6[_0x50734b(0x2b6)] > 0x0),
      _0x1d21c3 = F(
        {
          row: _0xd87e35["row"] + _0x2b6195 + _0x39d80d,
          col: _0xd87e35["col"],
        },
        _0xce9d4,
        !0x1,
        !0x1,
      ),
      _0x5a0be7 = F(
        {
          row: _0xd87e35[_0x50734b(0x292)] + _0x2b6195 + _0x39d80d + _0x5e2690,
          col: _0xd87e35[_0x50734b(0x1a4)],
        },
        _0x271b24,
        !0x1,
        !0x0,
      ),
      _0xaa47a7 = F(
        {
          row: _0xd87e35[_0x50734b(0x292)] + _0x2b6195 + _0x39d80d,
          col: _0xd87e35[_0x50734b(0x1a4)] + _0x1962a9,
        },
        _0x23a598,
        !0x1,
        !0x0,
      ),
      _0x32b54b = F(
        {
          row: _0xd87e35[_0x50734b(0x292)] + _0x2b6195 + _0x39d80d + _0x5e2690,
          col: _0xd87e35["col"] + _0x1962a9,
        },
        _0x540feb,
        !0x1,
        !0x1,
      ),
      _0xc46227 = {
        rowRanges: _0x5a0be7[_0x50734b(0x15f)]((_0x46fedd) =>
          h(_0xff5d3b, _0x46fedd),
        ),
        colRanges: _0xaa47a7[_0x50734b(0x15f)]((_0x436a03) =>
          h(_0xff5d3b, _0x436a03),
        ),
        cornerRanges: _0x1d21c3[_0x50734b(0x15f)]((_0x2178ca) =>
          h(_0xff5d3b, _0x2178ca),
        ),
        dataRanges: _0x32b54b["map"]((_0x26c482) => h(_0xff5d3b, _0x26c482)),
        pageRanges: _0x418ff6["map"]((_0x43943b) => h(_0xff5d3b, _0x43943b)),
      };
    return {
      matrix: fe(_0x5c21e7, _0xd87e35, _0x373ba9, _0x507bcc, _0x2e5f8b),
      rangesCache: _0xc46227,
    };
  };
let K = class extends t["Disposable"] {
  constructor(_0x34b759, _0x557feb, _0x65bf6, _0x1f5ec5, _0x1b7025) {
    (super(),
      (this[_0x37d135(0x483)] = _0x34b759),
      (this["_univerInstanceService"] = _0x557feb),
      (this[_0x37d135(0x342)] = _0x65bf6),
      (this["_commandService"] = _0x1f5ec5),
      (this[_0x37d135(0x31d)] = _0x1b7025),
      V(this, "_model", new Map()),
      V(this, _0x37d135(0x451), new Map()),
      V(this, _0x37d135(0x33b), new Map()),
      V(this, _0x37d135(0x3ae), new Map()),
      V(this, _0x37d135(0x32d), void 0x0),
      V(this, _0x37d135(0x34e), "ltr"),
      V(this, _0x37d135(0x403), new i[_0x37d135(0x218)]()),
      V(this, _0x37d135(0x305), this[_0x37d135(0x403)]["asObservable"]()),
      V(this, _0x37d135(0x2d1), new i[_0x37d135(0x218)]()),
      V(this, "viewData$", this[_0x37d135(0x2d1)]["asObservable"]()),
      V(this, _0x37d135(0x1ac), new i[_0x37d135(0x218)]()),
      V(this, _0x37d135(0x3bf), this[_0x37d135(0x1ac)]["asObservable"]()),
      V(this, _0x37d135(0x274), new Map()),
      V(this, "needSameDeleteModel", []),
      V(this, _0x37d135(0x25d), new Map()),
      this[_0x37d135(0x3ad)]());
  }
  ["getTextInfo"]() {
    return this[_0x482fb7(0x32d)] ? this[_0x482fb7(0x32d)] : te;
  }
  ["setTextInfo"](_0xb9f2b3, _0x2a1e02) {
    if (
      ((this[_0x5a5c6e(0x32d)] = _0xb9f2b3),
      this[_0x5a5c6e(0x34e)] === _0x2a1e02)
    )
      return;
    this[_0x5a5c6e(0x34e)] = _0x2a1e02;
    let _0xc5db39 = [];
    (this[_0x5a5c6e(0x2e7)][_0x5a5c6e(0x231)]((_0x57580a) => {
      _0x57580a["forEach"]((_0x236f05) => {
        _0x236f05[_0x27bfb8(0x231)]((_0x341ff2, _0x15bd99) => {
          const _0x3e5db1 = _0x27bfb8;
          let _0xaec3a2 = this[_0x3e5db1(0x3ae)]["get"](_0x15bd99);
          _0xaec3a2 &&
            _0xc5db39[_0x3e5db1(0x19f)]({
              ..._0xaec3a2,
              pivotTableId: _0x15bd99,
              isEmpty: _0x341ff2[_0x3e5db1(0x208)],
              targetCellInfo: _0x341ff2[_0x3e5db1(0x376)],
              textInfo: _0xb9f2b3,
            });
        });
      });
    }),
      _0xc5db39["forEach"]((_0x4fe410) =>
        this[_0x5a5c6e(0x338)](_0x4fe410, !0x0),
      ),
      _0xc5db39[_0x5a5c6e(0x231)](
        ({ targetCellInfo: _0x5ac606, pivotTableId: _0x3b4aae }) => {
          const _0x6c18eb = _0x5a5c6e;
          this[_0x6c18eb(0x2d1)][_0x6c18eb(0x37c)]({
            unitId: _0x5ac606[_0x6c18eb(0x386)],
            subUnitId: _0x5ac606[_0x6c18eb(0x1bf)],
            pivotTableId: _0x3b4aae,
          });
        },
      ));
  }
  ["handleMoveRange"](_0x27d3fe) {
    let {
      from: _0x4b057b,
      to: _0x1c0376,
      unitId: _0x129f18,
      fromRange: _0x18d4f1,
      toRange: _0x2b35cf,
    } = _0x27d3fe;
    if (_0x4b057b && _0x1c0376) {
      var _0x56c078;
      let _0x2d6a46 = this[_0x249133(0x430)](_0x129f18),
        _0x48e900 = this[_0x249133(0x2e7)][_0x249133(0x345)](_0x129f18),
        _0x14c655 =
          (_0x56c078 = this[_0x249133(0x1ec)][_0x249133(0x2a4)](_0x129f18)) ==
          null
            ? void 0x0
            : _0x56c078[_0x249133(0x16b)](_0x1c0376[_0x249133(0x1bf)]);
      if (!_0x48e900 || !_0x14c655) return;
      let _0x18c081 =
        _0x14c655 == null ? void 0x0 : _0x14c655[_0x249133(0x1f7)]();
      for (let [_0x5cb1ad, _0x2f0fdb] of _0x48e900[_0x249133(0x1c4)]())
        for (let [_0x79b0e3, _0x16a812] of _0x2f0fdb[_0x249133(0x1c4)]()) {
          let { sourceRangeInfo: _0x248e32 } = _0x16a812;
          if (
            _0x248e32[_0x249133(0x386)] === _0x129f18 &&
            _0x248e32["subUnitId"] === _0x4b057b[_0x249133(0x1bf)] &&
            t[_0x249133(0x3e8)][_0x249133(0x2e3)](
              _0x18d4f1,
              _0x248e32[_0x249133(0x26a)],
            )
          ) {
            let _0xd1581e = {
                row:
                  _0x248e32[_0x249133(0x26a)]["startRow"] -
                  _0x18d4f1[_0x249133(0x3f1)],
                col:
                  _0x248e32[_0x249133(0x26a)][_0x249133(0x205)] -
                  _0x18d4f1[_0x249133(0x205)],
              },
              _0xd41371 = {
                unitId: _0x129f18,
                subUnitId: _0x1c0376[_0x249133(0x1bf)],
                sheetName: _0x18c081,
                range: {
                  startRow: _0x2b35cf["startRow"] + _0xd1581e[_0x249133(0x292)],
                  endRow:
                    _0x2b35cf[_0x249133(0x3f1)] +
                    _0xd1581e["row"] +
                    _0x248e32[_0x249133(0x26a)]["endRow"] -
                    _0x248e32["range"][_0x249133(0x3f1)],
                  startColumn:
                    _0x2b35cf[_0x249133(0x205)] + _0xd1581e[_0x249133(0x1a4)],
                  endColumn:
                    _0x2b35cf[_0x249133(0x205)] +
                    _0xd1581e[_0x249133(0x1a4)] +
                    _0x248e32["range"][_0x249133(0x2bc)] -
                    _0x248e32["range"][_0x249133(0x205)],
                },
              };
            _0x2d6a46[_0x249133(0x2cb)](_0x79b0e3, _0xd41371);
            let _0xdd8ff9 = { ..._0x16a812, sourceRangeInfo: _0xd41371 };
            (this[_0x249133(0x316)](
              _0x129f18,
              _0x1c0376[_0x249133(0x1bf)],
              _0x79b0e3,
              _0xdd8ff9,
            ),
              this[_0x249133(0x148)]({
                unitId: _0x129f18,
                token: _0x79b0e3,
                type: _0x249133(0x420),
                oldSourceRangeInfo: _0x248e32,
                dataRangeInfo: _0xd41371,
                targetCellInfo: _0x16a812[_0x249133(0x376)],
              }),
              this[_0x249133(0x17e)]({
                unitId: _0x129f18,
                subUnitId: _0x1c0376[_0x249133(0x1bf)],
                oldSubUnitId: _0x5cb1ad,
                pivotTableId: _0x79b0e3,
                pivotTableConfig: _0xdd8ff9,
                collectionConfig: _0x2d6a46[_0x249133(0x1c6)](),
              }));
          }
        }
    }
  }
  ["broadcastCollectionChange"](_0x50f3db) {
    this["_collectionChange$"][_0x97a658(0x37c)](_0x50f3db);
  }
  ["getDataFieldManager"](_0x4dd185) {
    let _0x43ca27 = this[_0x390757(0x274)][_0x390757(0x345)](_0x4dd185);
    return (
      _0x43ca27 ||
        ((_0x43ca27 = new G(this, this[_0x390757(0x1ec)])),
        this[_0x390757(0x274)][_0x390757(0x2d0)](_0x4dd185, _0x43ca27)),
      _0x43ca27
    );
  }
  ["getCollection"](_0x1df7b0, _0x2e445c) {
    return this["getDataFieldManager"](_0x1df7b0)[_0xe4b7b9(0x1b9)][_0x2e445c];
  }
  ["getUpdateRangeDeleteIds"](_0x267a8c, _0x53ac08, _0x5359ee) {
    return this[_0xbed584(0x430)](_0x267a8c)[_0xbed584(0x250)](
      _0x53ac08,
      _0x5359ee,
    );
  }
  ["_ensurePivotMap"](_0x31ec2a, _0x332d3c) {
    let _0x560421 = this["_model"][_0x12bc21(0x345)](_0x31ec2a);
    _0x560421 ||
      ((_0x560421 = new Map()),
      this[_0x12bc21(0x2e7)][_0x12bc21(0x2d0)](_0x31ec2a, _0x560421));
    let _0x5798a5 = _0x560421["get"](_0x332d3c);
    return (
      _0x5798a5 ||
        ((_0x5798a5 = new Map()),
        _0x560421[_0x12bc21(0x2d0)](_0x332d3c, _0x5798a5)),
      _0x5798a5
    );
  }
  ["_updateModelCache"](_0x319229, _0x5bb4e3, _0xe77ed, _0xc974a9) {
    this["_ensurePivotMap"](_0x319229, _0x5bb4e3)["set"](_0xe77ed, _0xc974a9);
  }
  ["_deleteModelCache"](_0x296632, _0x1a81cd, _0x701a00) {
    var _0x43456c;
    if (
      (_0x43456c = this["_model"][_0x3ecd69(0x345)](_0x296632)) != null &&
      (_0x43456c = _0x43456c[_0x3ecd69(0x345)](_0x1a81cd)) != null &&
      _0x43456c[_0x3ecd69(0x345)](_0x701a00)
    ) {
      var _0x542d3b;
      (_0x542d3b = this["_model"][_0x3ecd69(0x345)](_0x296632)) == null ||
        (_0x542d3b = _0x542d3b[_0x3ecd69(0x345)](_0x1a81cd)) == null ||
        _0x542d3b[_0x3ecd69(0x216)](_0x701a00);
    }
  }
  ["_updatePivotTableInstanceCache"](_0x32f034, _0x2e34de) {
    this[_0x2c63f3(0x451)][_0x2c63f3(0x2d0)](_0x32f034, _0x2e34de);
  }
  ["_deletePivotTableInstanceCache"](_0x180d8c) {
    this[_0x3d08c6(0x451)][_0x3d08c6(0x216)](_0x180d8c);
  }
  ["_ensureViewDataMap"](_0x3f651e, _0x5521ce) {
    let _0x274979 = this[_0x77f009(0x33b)][_0x77f009(0x345)](_0x3f651e);
    _0x274979 ||
      ((_0x274979 = new Map()),
      this[_0x77f009(0x33b)][_0x77f009(0x2d0)](_0x3f651e, _0x274979));
    let _0x1d6684 = _0x274979[_0x77f009(0x345)](_0x5521ce);
    return (
      _0x1d6684 ||
        ((_0x1d6684 = new Map()),
        _0x274979[_0x77f009(0x2d0)](_0x5521ce, _0x1d6684)),
      _0x1d6684
    );
  }
  ["updateConfig"](_0x496455) {
    let {
        unitId: _0x2a12a4,
        subUnitId: _0x112d0c,
        pivotTableId: _0x224987,
        pivotTableConfig: _0xc265da,
        collectionConfig: _0x1a0569,
      } = _0x496455,
      _0x21a6bb = {
        unitId: _0x2a12a4,
        subUnitId: _0x112d0c,
        oldSubUnitId: _0x112d0c,
        pivotTableId: _0x224987,
        pivotTableConfig: _0xc265da,
        collectionConfig: _0x1a0569,
      };
    this[_0x1f66d6(0x1db)][_0x1f66d6(0x323)](B["id"], _0x21a6bb, {
      onlyLocal: !0x0,
    });
  }
  ["updateView"](
    _0x18a382,
    _0x481fbd,
    _0xfc6220,
    _0x14291a,
    _0x815ced,
    _0xf28ab9,
    _0x4aff46,
    _0x35bd33 = !0x1,
  ) {
    var _0x4cdb59;
    this[_0x4f9cde(0x1db)]["executeCommand"](
      z["id"],
      {
        single: {
          unitId: _0x18a382,
          subUnitId: _0x481fbd,
          type: _0xfc6220,
          pivotTableId: _0x14291a,
          view: _0x815ced,
          pivotConfig: _0xf28ab9,
        },
        collectionConfig: { [_0x18a382]: _0x4aff46 },
      },
      { onlyLocal: !0x0 },
    );
    let _0x2e9659 = !!(
        (_0x4cdb59 = this["getPivotTableInstance"](_0x14291a)) != null &&
        _0x4cdb59[_0x4f9cde(0x208)]()
      ),
      _0x4f18fe = this[_0x4f9cde(0x2e6)](_0x18a382, _0x481fbd, _0x14291a);
    _0x4f18fe &&
      this[_0x4f9cde(0x338)](
        {
          view: _0x815ced,
          pivotTableId: _0x14291a,
          textInfo: this["getTextInfo"](),
          isEmpty: _0x2e9659,
          targetCellInfo: _0x4f18fe["targetCellInfo"],
        },
        _0x35bd33,
      );
  }
  ["updateViewData"](_0x3cab39, _0x599b86) {
    var _0x40092c, _0x1c4770;
    let { targetCellInfo: _0x4a3946, pivotTableId: _0x56bf9b } = _0x3cab39,
      { unitId: _0x1bd742, subUnitId: _0x1a8690 } = _0x4a3946,
      _0x4cbaea = this[_0x493fb7(0x397)](_0x1bd742, _0x1a8690),
      _0x2c3967 = _0x4cbaea[_0x493fb7(0x345)](_0x56bf9b),
      _0x7f84aa,
      _0x2f6348;
    _0x2c3967 &&
      ((_0x7f84aa = _0x2c3967["rangeCache"]),
      (_0x2f6348 = _0x2c3967["matrix"]));
    let { rangesCache: _0x2316dd, matrix: _0x3883d4 } = pe({
      ..._0x3cab39,
      direction: this[_0x493fb7(0x34e)],
      dateSystem:
        (_0x40092c = (_0x1c4770 = this[_0x493fb7(0x1ec)])[_0x493fb7(0x2a4)]) ==
          null ||
        (_0x40092c = _0x40092c["call"](
          _0x1c4770,
          _0x4a3946["unitId"],
          t[_0x493fb7(0x2b3)]["UNIVER_SHEET"],
        )) == null
          ? void 0x0
          : _0x40092c[_0x493fb7(0x475)](),
    });
    (_0x4cbaea[_0x493fb7(0x2d0)](_0x56bf9b, {
      rangeCache: _0x2316dd,
      matrix: _0x3883d4,
      oldMatrix: _0x2f6348,
      oldRangeCache: _0x7f84aa,
    }),
      this[_0x493fb7(0x3ae)]["set"](_0x56bf9b, _0x3cab39),
      _0x599b86 ||
        this["_viewData$"][_0x493fb7(0x37c)]({
          unitId: _0x1bd742,
          subUnitId: _0x1a8690,
          pivotTableId: _0x56bf9b,
        }));
  }
  ["addPivotTable"](_0x798193, _0x270a6e, _0x264fa8, _0x232b87, _0x4b9a0e) {
    var _0x1a9e8c, _0x39d27b;
    let _0xfb1f1e =
      (_0x1a9e8c =
        this["_univerInstanceService"][_0x447609(0x2a4)](_0x798193)) == null
        ? void 0x0
        : _0x1a9e8c[_0x447609(0x391)]()[_0x447609(0x29f)];
    (_0x232b87["setDefaultSortLocale"](
      _0xfb1f1e === void 0x0 ||
        (_0x39d27b = t["LOCALE_META"][_0xfb1f1e]) == null
        ? void 0x0
        : _0x39d27b[_0x447609(0x44e)],
    ),
      this[_0x447609(0x316)](_0x798193, _0x270a6e, _0x264fa8, _0x4b9a0e),
      this[_0x447609(0x3d0)](_0x264fa8, _0x232b87));
  }
  ["removePivotTable"](_0x461a76, _0x26ab6f, _0x315d77) {
    let _0x1d7cb3 = this[_0x168384(0x430)](_0x461a76);
    (_0x1d7cb3[_0x168384(0x34d)](_0x315d77)[_0x168384(0x231)]((_0x1e6c33) => {
      _0x1d7cb3["deleteDataField"](_0x1e6c33);
    }),
      this[_0x168384(0x2fc)](_0x461a76, _0x315d77),
      this[_0x168384(0x2d8)](_0x461a76, _0x26ab6f, _0x315d77),
      this[_0x168384(0x1e8)](_0x315d77),
      this[_0x168384(0x3ae)]["delete"](_0x315d77));
  }
  ["setPivotTable"](_0x211938, _0x28e74d, _0x1410ac, _0x59f0b4) {
    this["_updateModelCache"](_0x211938, _0x28e74d, _0x1410ac, _0x59f0b4);
  }
  ["getPivotTableConfig"](_0x11722b, _0x19a203, _0x16818b) {
    var _0x2c1dd2;
    let _0x32c4cb =
      (_0x2c1dd2 = this[_0x18759c(0x2e7)][_0x18759c(0x345)](_0x11722b)) ==
        null || (_0x2c1dd2 = _0x2c1dd2[_0x18759c(0x345)](_0x19a203)) == null
        ? void 0x0
        : _0x2c1dd2[_0x18759c(0x345)](_0x16818b);
    if (_0x32c4cb) return _0x32c4cb;
  }
  ["getPivotTableModelConfig"](_0x3c7d4c, _0x4768d6, _0x2a9454) {
    var _0x4b0538;
    let _0x205e7c =
      (_0x4b0538 = this["_model"][_0x1ea8b3(0x345)](_0x3c7d4c)) == null ||
      (_0x4b0538 = _0x4b0538[_0x1ea8b3(0x345)](_0x4768d6)) == null
        ? void 0x0
        : _0x4b0538[_0x1ea8b3(0x345)](_0x2a9454);
    if (_0x205e7c) return _0x205e7c[_0x1ea8b3(0x2a9)];
  }
  ["getPivotTableInstance"](_0x4ebc12) {
    return this[_0x353935(0x451)][_0x353935(0x345)](_0x4ebc12);
  }
  ["deleteUnitId"](_0x57f056) {
    var _0x5a1ce2;
    ((_0x5a1ce2 = this["_model"][_0x4a149c(0x345)](_0x57f056)) == null ||
      _0x5a1ce2[_0x4a149c(0x231)]((_0x45db6f) => {
        const _0x56a648 = _0x4a149c;
        _0x45db6f[_0x56a648(0x231)]((_0x7a55d4, _0x20b4f2) =>
          this[_0x56a648(0x3ae)][_0x56a648(0x216)](_0x20b4f2),
        );
      }),
      this[_0x4a149c(0x2e7)][_0x4a149c(0x216)](_0x57f056));
    let _0x2fba39 = this["_dataFieldManagerCollection"]["get"](_0x57f056);
    (_0x2fba39 &&
      (_0x2fba39[_0x4a149c(0x367)](),
      this["_dataFieldManagerCollection"][_0x4a149c(0x216)](_0x57f056)),
      this["_viewData"][_0x4a149c(0x216)](_0x57f056),
      this["needSameDeleteModel"]["forEach"]((_0x41606f) => {
        const _0x185ef4 = _0x4a149c;
        _0x41606f[_0x185ef4(0x470)](_0x57f056);
      }));
  }
  ["addCollectionByJSON"](_0xdfb425, _0x2c7331, _0x2a00b3, _0x4864f) {
    return this[_0x358f0d(0x430)](_0x2a00b3[_0x358f0d(0x386)])[
      _0x358f0d(0x387)
    ](_0xdfb425, _0x2c7331, _0x2a00b3, _0x4864f);
  }
  ["createCollectionWithDataRange"](_0x2d72c0) {
    return this["getDataFieldManager"](_0x2d72c0[_0x1d6cf5(0x386)])[
      _0x1d6cf5(0x419)
    ](_0x2d72c0);
  }
  ["refreshData"](_0x31fce1, _0x4c4d7a, _0x294ca8) {
    this[_0x5cfe72(0x430)](_0x294ca8["unitId"])[_0x5cfe72(0x1a0)](
      _0x31fce1,
      _0x4c4d7a,
      _0x294ca8,
    );
  }
  ["removeDataField"](_0x54d380, _0x283a3f) {
    this[_0x62b320(0x430)](_0x54d380)[_0x62b320(0x1ff)](_0x283a3f);
  }
  ["removeCollections"](_0x272b0f, _0x5ead7f) {
    this["getDataFieldManager"](_0x272b0f)[_0x45c9fc(0x37a)](_0x5ead7f);
  }
  ["getSubUnitPivotConfigs"](_0xd483f, _0x934704) {
    var _0x2d2add;
    return (_0x2d2add = this[_0x1ebf64(0x2e7)][_0x1ebf64(0x345)](_0xd483f)) ==
      null
      ? void 0x0
      : _0x2d2add[_0x1ebf64(0x345)](_0x934704);
  }
  ["getTargetByPivotId"](_0xf7f869) {
    for (let [_0x282f04, _0x574cba] of this[_0x37c1c0(0x2e7)][
      _0x37c1c0(0x1c4)
    ]())
      for (let [_0x52ec93, _0x12e34b] of _0x574cba[_0x37c1c0(0x1c4)]())
        if (_0x12e34b["has"](_0xf7f869))
          return { unitId: _0x282f04, subUnitId: _0x52ec93 };
    return null;
  }
  ["sideEffectUpdateWorkerCache"](_0xd30d35, _0x4a0f6f, _0x5e8a69, _0x2a3f93) {
    let _0x421da9 = this["_ensureViewDataMap"](_0xd30d35, _0x4a0f6f);
    (_0x2a3f93
      ? _0x421da9[_0x14cce6(0x2d0)](_0x5e8a69, _0x2a3f93)
      : _0x421da9[_0x14cce6(0x216)](_0x5e8a69),
      this["_viewData$"][_0x14cce6(0x37c)]({
        unitId: _0xd30d35,
        subUnitId: _0x4a0f6f,
        pivotTableId: _0x5e8a69,
      }));
  }
  ["dispose"]() {
    (super[_0x1941d4(0x367)](),
      this[_0x1941d4(0x2e7)]["clear"](),
      this[_0x1941d4(0x451)][_0x1941d4(0x3c1)](),
      this["_viewData"][_0x1941d4(0x3c1)](),
      this[_0x1941d4(0x3ae)][_0x1941d4(0x3c1)](),
      this[_0x1941d4(0x25d)][_0x1941d4(0x231)]((_0x3cf38f) =>
        clearTimeout(_0x3cf38f),
      ),
      this["_queryingMap"]["clear"](),
      this["_collectionChange$"]["complete"](),
      this["_viewData$"][_0x1941d4(0x224)](),
      this[_0x1941d4(0x1ac)][_0x1941d4(0x224)](),
      this[_0x1941d4(0x274)][_0x1941d4(0x231)]((_0x32364a) =>
        _0x32364a[_0x1941d4(0x367)](),
      ),
      this["_dataFieldManagerCollection"][_0x1941d4(0x3c1)]());
  }
  ["getViewData"](_0x231623, _0x76ca83, _0x473681) {
    var _0x138fee;
    return (
      ((_0x138fee = this[_0x965cea(0x33b)][_0x965cea(0x345)](_0x231623)) ==
        null || (_0x138fee = _0x138fee["get"](_0x76ca83)) == null
        ? void 0x0
        : _0x138fee[_0x965cea(0x345)](_0x473681)) || null
    );
  }
  ["addDirtyPivotTable"](_0x16e7ab) {
    this[_0x354e83(0x209)](_0x16e7ab);
  }
  ["updateDirtyPivotTable"](_0x1eef07) {
    let {
        token: _0x137521,
        unitId: _0x31cba6,
        subUnitId: _0x42a0de,
      } = _0x1eef07,
      _0x58e8fb = _0x31cba6 + "-" + _0x42a0de + "-" + _0x137521;
    this[_0x5a8e34(0x25d)][_0x5a8e34(0x345)](_0x58e8fb) &&
      clearTimeout(this[_0x5a8e34(0x25d)][_0x5a8e34(0x345)](_0x58e8fb));
    let _0x2b2931 = setTimeout(() => {
      const _0x38e78a = _0x5a8e34;
      try {
        this[_0x38e78a(0x43f)](_0x1eef07);
      } catch (_0x101a98) {
        this[_0x38e78a(0x483)]
          [_0x38e78a(0x345)](t[_0x38e78a(0x4bd)])
          [_0x38e78a(0x186)]("[SheetsPivotDataSourceModel]", {
            unitId: _0x31cba6,
            subUnitId: _0x42a0de,
            pivotTableId: _0x137521,
            error: _0x101a98,
          });
      } finally {
        this[_0x38e78a(0x25d)][_0x38e78a(0x216)](_0x58e8fb);
      }
    }, 0x1e);
    this["_queryingMap"][_0x5a8e34(0x2d0)](_0x58e8fb, _0x2b2931);
  }
  ["queryDirtyPivotTable"](_0x341bdb) {
    let {
        unitId: _0x323022,
        subUnitId: _0x3d880f,
        token: _0x38a31f,
        type: _0x2ea3db,
        pivotConfig: _0x426a29,
      } = _0x341bdb,
      _0x43b0a7 = this[_0x50ff1d(0x2fb)](_0x38a31f),
      _0x357bcc = _0x43b0a7 == null ? void 0x0 : _0x43b0a7["query"](),
      _0x3d1c1f =
        _0x426a29 ??
        this["getPivotTableConfig"](_0x323022, _0x3d880f, _0x38a31f);
    (_0x3d1c1f &&
      (_0x3d1c1f[_0x50ff1d(0x208)] = !!(
        _0x43b0a7 != null && _0x43b0a7[_0x50ff1d(0x208)]()
      )),
      (_0x357bcc || _0x2ea3db === _0x50ff1d(0x216)) &&
        this[_0x50ff1d(0x370)](
          _0x323022,
          _0x3d880f,
          _0x2ea3db,
          _0x38a31f,
          _0x357bcc,
          _0x3d1c1f,
          this["getDataFieldManager"](_0x323022)["toJSON"](),
        ));
  }
  ["toJSON"](_0x2c50fd) {
    let _0x5ac0a8 = { dataFieldManagerConfig: {}, pivotTableConfigs: {} };
    if (
      (this[_0x349f22(0x430)](_0x2c50fd) &&
        (_0x5ac0a8["dataFieldManagerConfig"][_0x2c50fd] =
          this[_0x349f22(0x430)](_0x2c50fd)[_0x349f22(0x1c6)]()),
      this[_0x349f22(0x2e7)][_0x349f22(0x345)](_0x2c50fd))
    ) {
      _0x5ac0a8[_0x349f22(0x162)][_0x2c50fd] = {};
      let _0x26935d = this[_0x349f22(0x2e7)]["get"](_0x2c50fd);
      _0x26935d != null &&
        _0x26935d[_0x349f22(0x189)] &&
        [..._0x26935d[_0x349f22(0x2a8)]()][_0x349f22(0x231)]((_0x2373bd) => {
          const _0x58587d = _0x349f22;
          let _0x111c16 = _0x26935d[_0x58587d(0x345)](_0x2373bd);
          _0x111c16 != null &&
            _0x111c16[_0x58587d(0x189)] &&
            ((_0x5ac0a8["pivotTableConfigs"][_0x2c50fd][_0x2373bd] = {}),
            [..._0x111c16[_0x58587d(0x2a8)]()]["forEach"]((_0x510eda) => {
              const _0x4c0f65 = _0x58587d;
              let _0x24caf5 = _0x111c16["get"](_0x510eda);
              _0x24caf5 &&
                (_0x5ac0a8[_0x4c0f65(0x162)][_0x2c50fd][_0x2373bd][_0x510eda] =
                  _0x24caf5);
            }));
        });
    }
    return _0x5ac0a8;
  }
  ["fromJSON"](_0x3d8c11) {
    let { dataFieldManagerConfig: _0x29d23e, pivotTableConfigs: _0x535d2f } =
      _0x3d8c11;
    _0x29d23e &&
      Object[_0x539da5(0x2a8)](_0x29d23e)[_0x539da5(0x231)]((_0x4a10ba) => {
        const _0x174769 = _0x539da5;
        this["getDataFieldManager"](_0x4a10ba)[_0x174769(0x329)](
          _0x29d23e[_0x4a10ba],
        );
      });
    let _0x9f5bd5 = [];
    if (_0x535d2f) {
      let { ls: _0x5829e7, pbk: _0x5f4b41 } =
          this[_0x539da5(0x483)]
            [_0x539da5(0x345)](t[_0x539da5(0x174)])
            [_0x539da5(0x3c0)](a[_0x539da5(0x457)]) ?? {},
        _0x2dabf2 = Ee(0x1, _0x5829e7, _0x5f4b41)[_0x539da5(0x466)];
      Object["keys"](_0x535d2f)["forEach"]((_0x392d83) => {
        const _0x5afcb2 = _0x539da5;
        let _0x2d4286 = 0x0,
          _0x7da91d = _0x535d2f[_0x392d83];
        Object[_0x5afcb2(0x2a8)](_0x7da91d)["forEach"]((_0x3670d2) => {
          let _0x57a7ac = _0x7da91d[_0x3670d2];
          Object["keys"](_0x57a7ac)["forEach"]((_0x541e75) => {
            let _0x3e0231 = _0x57a7ac[_0x541e75];
            if (_0x3e0231) {
              if (_0x2d4286 >= _0x2dabf2) return;
              _0x2d4286++;
              let _0x531d6c = this[_0x968893(0x430)](_0x392d83),
                _0x184e41 = _0x531d6c[_0x968893(0x1b9)][_0x541e75],
                _0x2e59e9 = _0x184e41["getFieldIds"](),
                _0x5478fd = 0x0,
                _0xdcb858 = [];
              for (let _0x36bc4c of _0x2e59e9) {
                let _0x227378 = _0x184e41["getFieldById"](_0x36bc4c);
                if ((0x0, e[_0x968893(0x2a6)])(_0x227378)) {
                  let _0x581b0e = _0x227378[_0x968893(0x415)](),
                    _0x1c1020 = _0x184e41["getFieldById"](_0x581b0e);
                  _0x1c1020 &&
                    _0xdcb858[_0x968893(0x19f)]([_0x227378, _0x1c1020]);
                  continue;
                }
                (_0x531d6c[_0x968893(0x21b)](
                  _0x36bc4c,
                  _0x3e0231[_0x968893(0x33d)],
                  _0x5478fd,
                ),
                  _0x5478fd++);
              }
              _0xdcb858[_0x968893(0x231)](([_0x368a7b, _0x17ef58]) => {
                const _0x4cfb7f = _0x968893;
                var _0x47096f;
                (Ge(
                  (_0x47096f = this["_univerInstanceService"][_0x4cfb7f(0x2a4)](
                    _0x392d83,
                    t["UniverInstanceType"]["UNIVER_SHEET"],
                  )) == null
                    ? void 0x0
                    : _0x47096f["getDateSystem"](),
                ),
                  _0x368a7b[_0x4cfb7f(0x4b1)](_0x17ef58));
              });
              let _0x175d5b = new e[_0x968893(0x21f)](_0x184e41);
              (_0x175d5b["fromJSON"](_0x3e0231[_0x968893(0x2a9)]),
                (_0x3e0231["isEmpty"] = _0x175d5b[_0x968893(0x208)]()),
                this[_0x968893(0x357)](
                  _0x392d83,
                  _0x3670d2,
                  _0x541e75,
                  _0x175d5b,
                  _0x3e0231,
                ));
              let _0x3844eb = _0x175d5b[_0x968893(0x268)]();
              _0x9f5bd5[_0x968893(0x19f)]({
                unitId: _0x392d83,
                subUnitId: _0x3670d2,
                pivotTableId: _0x541e75,
                view: _0x3844eb[_0x968893(0x1c6)](),
                pivotConfig: _0x3e0231,
                type: _0x968893(0x3db),
              });
              let _0x1fb50a = _0x3e0231[_0x968893(0x208)],
                _0x4a439e = {
                  view: _0x3844eb,
                  pivotTableId: _0x541e75,
                  textInfo: this["getTextInfo"](),
                  isEmpty: _0x1fb50a,
                  targetCellInfo: _0x3e0231[_0x968893(0x376)],
                };
              this[_0x968893(0x338)](_0x4a439e, !0x1);
            }
          });
        });
      });
    }
    (_0x29d23e &&
      Object["keys"](_0x29d23e)[_0x539da5(0x231)]((_0x523f4f) => {
        const _0x2b60e4 = _0x539da5;
        let _0x4126a9 = this[_0x2b60e4(0x430)](_0x523f4f);
        this["_fieldsCollectionChange$"][_0x2b60e4(0x37c)](
          _0x4126a9[_0x2b60e4(0x1b9)],
        );
      }),
      this[_0x539da5(0x1db)][_0x539da5(0x323)](
        z["id"],
        { batch: _0x9f5bd5, collectionConfig: _0x29d23e },
        { onlyLocal: !0x0 },
      ));
  }
  ["_initSnapshot"]() {
    this[_0x556d35(0x1e7)](
      this["_resourceManagerService"][_0x556d35(0x2cd)]({
        toJson: (_0x3df7dd) =>
          JSON[_0x556d35(0x184)](this["toJSON"](_0x3df7dd)),
        parseJson: (_0x364ae3) => {
          if (!_0x364ae3) return {};
          try {
            return JSON["parse"](_0x364ae3);
          } catch {
            return {};
          }
        },
        businesses: [t[_0x556d35(0x2b3)][_0x556d35(0x333)]],
        pluginName: _,
        onLoad: (_0x4d8659, _0x32d236) => {
          this["fromJSON"](_0x32d236);
        },
        onUnLoad: (_0x6cc8b3) => {
          const _0x563f07 = _0x556d35;
          this[_0x563f07(0x470)](_0x6cc8b3);
        },
      }),
    );
  }
};
K = U(
  [
    H(0x0, (0x0, t["Inject"])(t["Injector"])),
    H(0x1, t["IUniverInstanceService"]),
    H(0x2, (0x0, t["Inject"])(t["LifecycleService"])),
    H(0x3, t["ICommandService"]),
    H(0x4, (0x0, t["Inject"])(t["IResourceManagerService"])),
  ],
  K,
);
const me = {
    0x0: { 0x0: { v: "filter", s: S } },
    0x2: {
      0x1: { v: "", s: S },
      0x2: { v: "", s: S },
      0x3: { v: "column", s: S },
      0x4: { v: "", s: S },
      0x5: { v: "", s: S },
    },
    0x3: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x4: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x5: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x6: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x7: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x8: {
      0x0: { v: "row", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "values", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0x9: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0xa: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0xb: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0xc: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
    0xd: {
      0x0: { v: "", s: S },
      0x1: { v: "", s: C },
      0x2: { v: "", s: C },
      0x3: { v: "", s: C },
      0x4: { v: "", s: C },
      0x5: { v: "", s: C },
    },
  },
  he = {
    rowRanges: [
      { startRow: 0x3, endRow: 0xd, startColumn: 0x0, endColumn: 0x0 },
    ],
    colRanges: [
      { startRow: 0x2, endRow: 0x2, startColumn: 0x1, endColumn: 0x5 },
    ],
    dataRanges: [
      { startRow: 0x3, endRow: 0xd, startColumn: 0x1, endColumn: 0x5 },
    ],
    pageRanges: [
      { startRow: 0x0, endRow: 0x0, startColumn: 0x0, endColumn: 0x0 },
    ],
    cornerRanges: [],
  },
  q = (_0x4f4cbd, _0x57c15a, _0x3d817d = "ltr") => {
    let _0x2ac870 = new t[_0x35ca34(0x38b)](),
      _0x11ae82 = new t[_0x35ca34(0x38b)](me),
      { row: _0x42dde6, col: _0x170139 } = _0x57c15a,
      _0x108984 = {
        startColumn: _0x170139,
        endColumn: _0x170139 + 0x6 - 0x1,
        direction: _0x3d817d,
      };
    _0x11ae82[_0x35ca34(0x1e5)]((_0x8c01d4, _0x5a9683, _0x274463) => {
      const _0x5dda7d = _0x35ca34;
      let _0x1420bd = "";
      _0x274463["v"] === _0x5dda7d(0x43e)
        ? (_0x1420bd = _0x4f4cbd["filter"])
        : _0x274463["v"] === _0x5dda7d(0x292)
          ? (_0x1420bd = _0x4f4cbd[_0x5dda7d(0x292)])
          : _0x274463["v"] === _0x5dda7d(0x359)
            ? (_0x1420bd = _0x4f4cbd[_0x5dda7d(0x359)])
            : _0x274463["v"] === _0x5dda7d(0x2b9) &&
              (_0x1420bd = _0x4f4cbd["values"]);
      let _0x480277 = m(_0x108984, _0x5a9683 + _0x170139);
      _0x2ac870[_0x5dda7d(0x300)](_0x8c01d4 + _0x42dde6, _0x480277, {
        ..._0x274463,
        v: _0x1420bd,
      });
    });
    let _0x1a22f8 = t[_0x35ca34(0x23b)][_0x35ca34(0x196)](he);
    return (
      Object[_0x35ca34(0x2a8)](he)[_0x35ca34(0x231)]((_0xafde4e) => {
        const _0x46a0af = _0x35ca34;
        _0x1a22f8[_0xafde4e] = he[_0xafde4e][_0x46a0af(0x15f)]((_0xb26705) =>
          h(_0x108984, {
            ..._0xb26705,
            startRow: _0xb26705[_0x46a0af(0x3f1)] + _0x42dde6,
            endRow: _0xb26705[_0x46a0af(0x150)] + _0x42dde6,
            startColumn: _0xb26705[_0x46a0af(0x205)] + _0x170139,
            endColumn: _0xb26705[_0x46a0af(0x2bc)] + _0x170139,
          }),
        );
      }),
      { matrixCache: _0x2ac870, rangesCache: _0x1a22f8 }
    );
  };
function ge(_0x31ccba, _0x1f51a4) {
  let _0x1fe850 = "",
    _0x2fc746 = this[_0x2c9159(0x46a)]();
  switch (_0x1f51a4) {
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x478)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x432)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x466)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x141)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x1fc)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x1bc)];
      break;
    case e["PivotSubtotalTypeEnum"]["max"]:
      _0x1fe850 = _0x2fc746["sheets-pivot.maxName"];
      break;
    case e["PivotSubtotalTypeEnum"][_0x2c9159(0x312)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x3fb)];
      break;
    case e["PivotSubtotalTypeEnum"]["product"]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x20b)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x25e)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x2ca)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x1e1)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x32e)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x169)]:
      _0x1fe850 = _0x2fc746["sheets-pivot.sumName"];
      break;
    case e[_0x2c9159(0x3cd)]["var"]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x280)];
      break;
    case e[_0x2c9159(0x3cd)][_0x2c9159(0x221)]:
      _0x1fe850 = _0x2fc746[_0x2c9159(0x392)];
      break;
    default:
      return _0x31ccba;
  }
  return M(
    _0x2fc746,
    _0x2c9159(0x1d3),
    _0x2c9159(0x22b),
    _0x1fe850,
    f(_0x31ccba, _0x1fe850),
  );
}
function _e(_0x502f74, _0x15baad, _0x59e39e, _0x37d732, _0x2d88a0) {
  let _0x236d1c = ve(_0x502f74, _0x15baad, _0x59e39e, _0x2d88a0);
  if (!_0x236d1c) return;
  let {
      area: _0x4991f5,
      info: _0x2fd5ce,
      headerInfo: _0x3536d7,
      data: _0x1451b7,
      tableFieldId: _0x4d8319,
    } = _0x236d1c,
    _0x16f343 = _0x4d8319;
  if (_0x4991f5 === _0x553dc3(0x381)) {
    let _0x5aae55 = _0x1451b7 == null ? void 0x0 : _0x1451b7["fi"];
    _0x5aae55 !== void 0x0 &&
      (_0x16f343 = _0x37d732[_0x553dc3(0x239)](_0x5aae55));
  }
  return {
    filterId: _0x16f343,
    info: _0x2fd5ce,
    data: _0x1451b7,
    headerInfo: _0x3536d7,
  };
}
function ve(_0x34f27f, _0x49f36c, _0x1a8daf, _0x6b7bfe) {
  let _0x14f4d7 = (0x0, t["cellToRange"])(_0x34f27f, _0x49f36c),
    {
      rangesInfo: _0x21ed56,
      areaInfo: _0x5c4925,
      headerMap: _0xd7f457,
      projection: _0x2b7ca4,
    } = _0x6b7bfe;
  if (!_0x21ed56 || !_0x5c4925 || !_0xd7f457) return;
  let _0x5c34be,
    _0x1fa54c = Object[_0x414d40(0x2a8)](_0x21ed56)["find"](
      (_0x2938a8) => (
        (_0x5c34be = _0x21ed56[_0x2938a8][_0x414d40(0x372)]((_0x5785be) =>
          t[_0x414d40(0x3e8)][_0x414d40(0x2e3)](_0x5785be, _0x14f4d7),
        )),
        !!_0x5c34be
      ),
    ),
    _0x17df19 = _0x5c4925[_0x414d40(0x3a4)][_0x34f27f],
    _0x421703 = _0x5c4925[_0x414d40(0x1da)][_0x49f36c],
    _0x39a7d1,
    _0x93aab9;
  if (_0x1fa54c === "rowRanges")
    ((_0x39a7d1 = _0x17df19),
      (_0x93aab9 = _0xd7f457[_0x414d40(0x2de)][_0x49f36c]));
  else {
    if (_0x1fa54c === _0x414d40(0x15e) && _0x5c34be) {
      if (
        ((_0x39a7d1 = _0x421703),
        (_0x1a8daf == null ? void 0x0 : _0x1a8daf[_0x414d40(0x424)]) ===
          e[_0x414d40(0x2e2)]["Collapse"] ||
          (_0x1a8daf == null ? void 0x0 : _0x1a8daf[_0x414d40(0x424)]) ===
            e[_0x414d40(0x2e2)][_0x414d40(0x334)])
      )
        _0x93aab9 = _0xd7f457[_0x414d40(0x488)][_0x34f27f];
      else {
        let _0x28c851 = _0x2b7ca4 ? m(_0x2b7ca4, _0x49f36c) : _0x49f36c,
          _0x372b0a = _0x2b7ca4
            ? Math["min"](
                m(_0x2b7ca4, _0x5c34be["startColumn"]),
                m(_0x2b7ca4, _0x5c34be[_0x414d40(0x2bc)]),
              )
            : _0x5c34be[_0x414d40(0x205)];
        _0x93aab9 =
          _0xd7f457["colHeaderMap"][_0x34f27f + 0x1 + _0x28c851 - _0x372b0a];
      }
    } else
      _0x1fa54c === "cornerRanges" &&
        (_0x39a7d1 = _0x5c4925[_0x414d40(0x3a9)][_0x49f36c]);
  }
  if (!_0x1fa54c) return;
  let _0xca4cd6 =
    (_0x1a8daf == null ? void 0x0 : _0x1a8daf["pbt"]) ===
      e["PivotCellStyleTypeEnum"]["Collapse"] ||
    (_0x1a8daf == null ? void 0x0 : _0x1a8daf[_0x414d40(0x424)]) ===
      e[_0x414d40(0x2e2)][_0x414d40(0x334)]
      ? ((_0x93aab9 == null ? void 0x0 : _0x93aab9[_0x414d40(0x30c)]) ??
        (_0x39a7d1 == null ? void 0x0 : _0x39a7d1[_0x414d40(0x30c)]))
      : ((_0x39a7d1 == null ? void 0x0 : _0x39a7d1["tableFieldId"]) ??
        (_0x93aab9 == null ? void 0x0 : _0x93aab9["tableFieldId"]));
  return {
    area: _0x1fa54c,
    info: _0x39a7d1,
    rowInfo: _0x17df19,
    columnInfo: _0x421703,
    data: _0x1a8daf,
    headerInfo: _0x93aab9,
    tableFieldId: _0xca4cd6,
  };
}
function ye(_0xe56910, _0x51ddeb) {
  var _0x217255, _0x1bd4e1, _0x5b856e, _0x369769;
  if (_0x51ddeb[_0x847a4a(0x2b6)] === 0x0) return;
  let _0x1e4196 = (_0x3d4d47) =>
      Number[_0x847a4a(0x1ca)](_0x3d4d47) && _0x3d4d47 >= 0x0
        ? _0x51ddeb[_0x3d4d47]
        : void 0x0,
    _0x2d8ad0 =
      ((_0x217255 = _0xe56910["rowInfo"]) == null
        ? void 0x0
        : _0x217255[_0x847a4a(0x3bd)]) ?? -0x1,
    _0x192ffd =
      ((_0x1bd4e1 = _0xe56910[_0x847a4a(0x290)]) == null
        ? void 0x0
        : _0x1bd4e1[_0x847a4a(0x3bd)]) ?? -0x1,
    _0x5cb860 =
      Number["isInteger"](_0x2d8ad0) &&
      _0x2d8ad0 >= -0x1 &&
      Number[_0x847a4a(0x1ca)](_0x192ffd) &&
      _0x192ffd >= -0x1;
  if (_0xe56910["area"] === _0x847a4a(0x355)) {
    if (!_0xe56910["rowInfo"] || !_0xe56910["columnInfo"] || !_0x5cb860) return;
    let _0x12f626 = Math[_0x847a4a(0x13b)](_0x2d8ad0, _0x192ffd);
    return _0x12f626 === -0x1 && _0x51ddeb["length"] === 0x1
      ? _0x51ddeb[0x0]
      : _0x1e4196(_0x12f626);
  }
  if (
    _0xe56910[_0x847a4a(0x29d)] !== _0x847a4a(0x44a) &&
    _0xe56910["area"] !== "colRanges"
  )
    return;
  if (
    _0xe56910[_0x847a4a(0x30c)] &&
    _0x51ddeb[_0x847a4a(0x238)](_0xe56910[_0x847a4a(0x30c)])
  )
    return _0xe56910["tableFieldId"];
  if (
    (!(
      (_0x5b856e = _0xe56910[_0x847a4a(0x1e3)]) != null &&
      _0x5b856e[_0x847a4a(0x47a)]
    ) &&
      !(
        (_0x369769 = _0xe56910[_0x847a4a(0x156)]) != null &&
        _0x369769[_0x847a4a(0x47a)]
      )) ||
    !_0x5cb860
  )
    return;
  let _0x30497b = Math[_0x847a4a(0x13b)](_0x2d8ad0, _0x192ffd);
  return _0x30497b === -0x1 && _0x51ddeb[_0x847a4a(0x2b6)] === 0x1
    ? _0x51ddeb[0x0]
    : _0x1e4196(_0x30497b);
}
function be(_0x37cce1, _0x5468d5) {
  var _0xacb303, _0x165f12;
  let _0x2b0078 = _0x37cce1["tableFieldId"],
    _0x4c629b,
    _0x264118;
  if (_0x37cce1[_0x471389(0x29d)] === _0x471389(0x44a))
    ((_0x4c629b = e[_0x471389(0x200)][_0x471389(0x289)]),
      (_0x264118 = _0x5468d5[_0x471389(0x39f)]));
  else {
    if (_0x37cce1[_0x471389(0x29d)] === _0x471389(0x15e))
      ((_0x4c629b = e["PivotTableFiledAreaEnum"]["Column"]),
        (_0x264118 = _0x5468d5[_0x471389(0x1de)]));
    else {
      if (_0x37cce1[_0x471389(0x29d)] === _0x471389(0x33c) && _0x2b0078) {
        let _0x2df9c2 =
          _0x5468d5[_0x471389(0x39f)][_0x471389(0x238)](_0x2b0078);
        if (
          _0x2df9c2 === _0x5468d5[_0x471389(0x1de)][_0x471389(0x238)](_0x2b0078)
        )
          return;
        ((_0x4c629b = _0x2df9c2
          ? e[_0x471389(0x200)][_0x471389(0x289)]
          : e[_0x471389(0x200)][_0x471389(0x374)]),
          (_0x264118 = _0x2df9c2
            ? _0x5468d5[_0x471389(0x39f)]
            : _0x5468d5["columnFields"]));
      } else return;
    }
  }
  let _0x4070c5 = _0x37cce1[_0x471389(0x1e3)];
  if (
    (_0x4070c5 == null ? void 0x0 : _0x4070c5["rowType"]) ===
      _0x471389(0x421) ||
    (_0x4070c5 == null ? void 0x0 : _0x4070c5[_0x471389(0x35f)]) ===
      _0x471389(0x388) ||
    (_0x4070c5 != null && _0x4070c5[_0x471389(0x47a)]) ||
    ((_0xacb303 = _0x37cce1["headerInfo"]) != null &&
      _0xacb303[_0x471389(0x47a)]) ||
    !_0x2b0078 ||
    !_0x264118["includes"](_0x2b0078) ||
    !_0x5468d5[_0x471389(0x230)][_0x2b0078]
  )
    return;
  let _0x15902e = _0x5468d5[_0x471389(0x185)][_0x471389(0x43e)](
      (_0x56555a) => !!_0x5468d5["measure"][_0x56555a],
    ),
    _0x2e017d =
      (_0x165f12 = _0x5468d5[_0x471389(0x36a)]) == null ||
      (_0x165f12 = _0x165f12[_0x471389(0x372)](
        (_0x51ba5d) => _0x51ba5d["fieldId"] === _0x2b0078,
      )) == null
        ? void 0x0
        : _0x165f12[_0x471389(0x49c)][_0x471389(0x171)],
    _0x222f43 =
      _0x2e017d && _0x15902e[_0x471389(0x238)](_0x2e017d)
        ? _0x2e017d
        : _0x15902e[_0x471389(0x2b6)] === 0x1
          ? _0x15902e[0x0]
          : void 0x0;
  return {
    axis: _0x4c629b,
    targetFieldId: _0x2b0078,
    ...(_0x222f43 ? { defaultValueFieldId: _0x222f43 } : {}),
  };
}
function xe(_0x41f93a, _0xe41cea, _0x79be97) {
  let _0x4f6682 = _0x41f93a["dataFieldsCollection"],
    _0x5d59b8 = _0x4f6682["getFieldIds"](),
    _0x2f7446 = new Set();
  _0x41f93a["iterateField"]((_0x384baf) => {
    _0x2f7446["add"](_0x384baf[_0x4a0633(0x1cb)]);
  });
  let _0x16aa0e = _0x5d59b8["map"]((_0x21c167) => {
      let _0x54896b = _0x4f6682[_0x53f541(0x1f8)](_0x21c167);
      return {
        checked: _0x2f7446[_0x53f541(0x442)](_0x21c167),
        dataFieldId: _0x54896b["id"],
        id: _0x54896b["id"],
        name: _0x4f6682["getDisplayName"](_0x54896b["id"]),
        type: _0x54896b[_0x53f541(0x4c2)](),
        pivotTableId: _0xe41cea,
      };
    }),
    _0x568d31 = [];
  _0x41f93a[_0x433b0c(0x46e)](
    e[_0x433b0c(0x200)][_0x433b0c(0x289)],
    (_0x1712bc) => {
      const _0x2d9369 = _0x433b0c;
      _0x568d31[_0x2d9369(0x19f)]({
        dataFieldId: _0x1712bc["dataFieldId"],
        tableFieldId: _0x1712bc[_0x2d9369(0x1b6)](),
        displayName: _0x1712bc[_0x2d9369(0x340)](),
      });
    },
  );
  let _0x5b8771 = [];
  _0x41f93a[_0x433b0c(0x46e)](
    e[_0x433b0c(0x200)][_0x433b0c(0x374)],
    (_0x575392) => {
      const _0x29862a = _0x433b0c;
      _0x5b8771[_0x29862a(0x19f)]({
        dataFieldId: _0x575392[_0x29862a(0x1cb)],
        tableFieldId: _0x575392[_0x29862a(0x1b6)](),
        displayName: _0x575392["getDisplayName"](),
      });
    },
  );
  let _0x48697b = [];
  if (
    (_0x41f93a[_0x433b0c(0x46e)](
      e[_0x433b0c(0x200)][_0x433b0c(0x1df)],
      (_0x43f848) => {
        const _0x278d64 = _0x433b0c;
        _0x48697b[_0x278d64(0x19f)]({
          dataFieldId: _0x43f848["dataFieldId"],
          tableFieldId: _0x43f848[_0x278d64(0x1b6)](),
          displayName: _0x43f848[_0x278d64(0x340)](),
          format: _0x43f848[_0x278d64(0x252)](),
          subTotalType: _0x43f848[_0x278d64(0x455)](),
          showDataAs: _0x43f848["getShowDataAs"](),
        });
      },
    ),
    _0x48697b[_0x433b0c(0x2b6)] > 0x1)
  ) {
    let _0x199f3a = _0x41f93a[_0x433b0c(0x3d8)]();
    (_0x41f93a["isColMultiMeasure"]() ? _0x5b8771 : _0x568d31)[
      _0x433b0c(0x3f6)
    ](_0x199f3a, 0x0, {
      dataFieldId: "",
      tableFieldId: _0x433b0c(0x43c),
      displayName: _0x433b0c(0x20c),
    });
  }
  let _0x781c03 = [];
  return (
    _0x41f93a[_0x433b0c(0x46e)](
      e["PivotTableFiledAreaEnum"][_0x433b0c(0x3e1)],
      (_0x3a9e88) => {
        const _0x44cc20 = _0x433b0c;
        _0x781c03[_0x44cc20(0x19f)]({
          dataFieldId: _0x3a9e88[_0x44cc20(0x1cb)],
          tableFieldId: _0x3a9e88[_0x44cc20(0x1b6)](),
          displayName: _0x3a9e88["getDisplayName"](),
        });
      },
    ),
    {
      sourceList: _0x16aa0e,
      sourceRange: _0x79be97[_0x433b0c(0x33d)],
      rowFields: _0x568d31,
      columnFields: _0x5b8771,
      valueFields: _0x48697b,
      filterFields: _0x781c03,
      positionInfo: _0x79be97["targetCellInfo"],
    }
  );
}
function Se(_0x5154e9, _0x39a079, _0x47b8d2 = "", _0x32edd4 = {}) {
  let _0x42a88b = _0x5154e9[_0x2be89c(0x345)](t[_0x2be89c(0x1b3)]);
  for (let _0x12b244 in _0x39a079)
    if (
      Object[_0x2be89c(0x262)][_0x2be89c(0x291)][_0x2be89c(0x390)](
        _0x39a079,
        _0x12b244,
      )
    ) {
      let _0x5e5495 = _0x47b8d2 ? _0x47b8d2 + "." + _0x12b244 : _0x12b244;
      typeof _0x39a079[_0x12b244] == _0x2be89c(0x153) &&
      _0x39a079[_0x12b244] !== null &&
      !Array["isArray"](_0x39a079[_0x12b244])
        ? Se(_0x5154e9, _0x39a079[_0x12b244], _0x5e5495, _0x32edd4)
        : (_0x32edd4[_0x5e5495] = _0x42a88b["t"](_0x5e5495));
    }
  return _0x32edd4;
}
const Ce = (_0x3ba86d) => {
  if (!_0x3ba86d) return [];
  let {
      rowRanges: _0x4db97d,
      colRanges: _0x22f919,
      cornerRanges: _0x51e127,
      dataRanges: _0xa6e3a2,
      pageRanges: _0x43e2e1,
    } = _0x3ba86d,
    _0x5c9310 = [..._0x22f919, ..._0x4db97d, ..._0xa6e3a2, ..._0x51e127][
      "filter"
    ](
      (_0x37674b) =>
        _0x37674b["startRow"] >= 0x0 &&
        _0x37674b["startColumn"] >= 0x0 &&
        _0x37674b[_0x58973f(0x150)] >= 0x0 &&
        _0x37674b[_0x58973f(0x2bc)] >= 0x0,
    );
  if (_0x5c9310[_0x58973f(0x2b6)] === 0x0) return [..._0x43e2e1];
  let _0x321195 = _0x5c9310[0x0][_0x58973f(0x3f1)],
    _0x1e8318 = _0x5c9310[0x0]["endRow"],
    _0x1bcb3d = _0x5c9310[0x0][_0x58973f(0x205)],
    _0x1e0be6 = _0x5c9310[0x0][_0x58973f(0x2bc)];
  for (let _0x2c90b5 = 0x1; _0x2c90b5 < _0x5c9310["length"]; _0x2c90b5++)
    ((_0x321195 = Math[_0x58973f(0x312)](
      _0x321195,
      _0x5c9310[_0x2c90b5][_0x58973f(0x3f1)],
    )),
      (_0x1e8318 = Math[_0x58973f(0x13b)](
        _0x1e8318,
        _0x5c9310[_0x2c90b5]["endRow"],
      )),
      (_0x1bcb3d = Math[_0x58973f(0x312)](
        _0x1bcb3d,
        _0x5c9310[_0x2c90b5][_0x58973f(0x205)],
      )),
      (_0x1e0be6 = Math["max"](
        _0x1e0be6,
        _0x5c9310[_0x2c90b5][_0x58973f(0x2bc)],
      )));
  return [
    ..._0x43e2e1,
    {
      startRow: _0x321195,
      endRow: _0x1e8318,
      startColumn: _0x1bcb3d,
      endColumn: _0x1e0be6,
    },
  ];
};
function we(_0x241986, _0x40adf5) {
  let _0x46e597 = _0x40adf5[_0x5767b1(0x43b)]["drillDown"],
    {
      pivotTableId: _0x428ec0,
      unitId: _0x18171f,
      subUnitId: _0x5e3960,
    } = _0x40adf5;
  if (!_0x46e597) return;
  let _0x48a22f = _0x241986[_0x5767b1(0x345)](K),
    _0x2a426d = _0x48a22f[_0x5767b1(0x2fb)](_0x428ec0),
    _0x20002c = _0x48a22f[_0x5767b1(0x2e6)](_0x18171f, _0x5e3960, _0x428ec0);
  if (!_0x2a426d || !_0x20002c) return;
  let _0x29520e = _0x2a426d[_0x5767b1(0x493)](_0x46e597[_0x5767b1(0x445)]);
  if (!(_0x29520e != null && _0x29520e[_0x5767b1(0x2b6)])) return;
  let {
      unitId: _0x15e2a3,
      subUnitId: _0x16ea41,
      range: _0x4474e8,
    } = _0x20002c["sourceRangeInfo"],
    _0x248a92 = 0x0;
  return {
    indexes: _0x29520e,
    range: _0x4474e8,
    sourceUnitId: _0x15e2a3,
    sourceSubUnitId: _0x16ea41,
    formatMap: _0x2a426d[_0x5767b1(0x2c5)]
      [_0x5767b1(0x296)]()
      ["reduce"]((_0x4c6407, _0x51ab62) => {
        const _0xf1dc88 = _0x5767b1;
        var _0x4cff10;
        let _0x444396 =
          (_0x4cff10 = _0x2a426d["getDataFieldByDataFieldId"](_0x51ab62)) ==
          null
            ? void 0x0
            : _0x4cff10[_0xf1dc88(0x487)]();
        return (
          _0x444396 && (_0x4c6407[String(_0x248a92)] = _0x444396),
          _0x248a92++,
          _0x4c6407
        );
      }, {}),
  };
}
function Te(_0x58ce6e, _0x290dfd) {
  if (!_0x58ce6e || !_0x290dfd) return !0x0;
  let _0x388630 = (0x0, a[_0x24f464(0x351)])(_0x58ce6e, _0x290dfd)["message"],
    _0x15044b = (0x0, a[_0x24f464(0x4b9)])(_0x388630, "sf", g);
  return !(
    (_0x388630 == null ? void 0x0 : _0x388630["rt"]) ===
      a["ReleaseType"][_0x24f464(0x1bd)] && !_0x15044b
  );
}
function Ee(_0x309a43, _0x2fd039, _0xedcf0) {
  let _0x2dadf7 = { count: _0x309a43, timeValid: !0x1 };
  if (!_0x2fd039 || !_0xedcf0) return _0x2dadf7;
  let _0x39953f = (0x0, a[_0x88092d(0x351)])(_0x2fd039, _0xedcf0);
  if (_0x39953f != null && _0x39953f[_0x88092d(0x236)]) {
    let _0x203db5 = _0x39953f[_0x88092d(0x2f1)],
      _0x53ee70 = (0x0, a[_0x88092d(0x4b9)])(_0x203db5, "sf", g);
    return {
      count: (0x0, a[_0x88092d(0x1f2)])(
        _0x203db5,
        _0x53ee70,
        "ptn",
        _0x309a43,
        _0x309a43,
        0x0,
      ),
      timeValid: _0x53ee70,
    };
  }
  return _0x2dadf7;
}
function De(_0x4182c3, _0x343c56, _0x21f367, _0x36b9b9) {
  let _0x3a688d = {
      subUnitId: _0x21f367,
      unitId: _0x343c56,
      cellValue: (0x0, r[_0xac276(0x255)])(_0x36b9b9),
    },
    _0x159c66 = (0x0, r[_0xac276(0x436)])(_0x4182c3, _0x3a688d),
    _0x22e1d6 = !0x1;
  return (
    new t[_0xac276(0x38b)](_0x159c66[_0xac276(0x1e4)])[_0xac276(0x1e5)](
      (_0x3ad1e8, _0xcbf356, _0x425c48) => {
        const _0x25feea = _0xac276;
        if (
          !_0x22e1d6 &&
          _0x425c48 &&
          (_0x425c48[_0x25feea(0x13c)] ||
            _0x425c48["f"] ||
            _0x425c48["p"] ||
            _0x425c48["s"] ||
            _0x425c48["si"] ||
            _0x425c48["t"] ||
            _0x425c48["v"])
        )
          return ((_0x22e1d6 = !0x0), !0x1);
      },
    ),
    {
      setRangeValueUndoMutation: {
        id: r[_0xac276(0x3e6)]["id"],
        params: _0x159c66,
      },
      setRangeValueRedoMutation: {
        id: r[_0xac276(0x3e6)]["id"],
        params: _0x3a688d,
      },
      shouldClear: _0x22e1d6,
    }
  );
}
function Oe(_0x18e54a, _0x18acfa = "ltr") {
  let { row: _0x4efaa6, col: _0x5f4eac } = _0x18e54a,
    _0x57a7c2 = _0x5f4eac + 0x6 - 0x1;
  return [
    {
      startRow: _0x4efaa6,
      endRow: _0x4efaa6,
      startColumn: _0x18acfa === _0x452644(0x30b) ? _0x57a7c2 : _0x5f4eac,
      endColumn: _0x18acfa === _0x452644(0x30b) ? _0x57a7c2 : _0x5f4eac,
    },
    {
      startRow: _0x4efaa6 + 0x2,
      endRow: _0x4efaa6 + 0xe - 0x1,
      startColumn: _0x5f4eac,
      endColumn: _0x57a7c2,
    },
  ];
}
function ke(_0x1bfed5, _0x59235e, _0x45812b, _0x5ac66e) {
  if (_0x45812b) return Oe(_0x1bfed5, _0x5ac66e);
  let {
      pageView: _0xee7b1e,
      cornerView: _0x23390f,
      rowView: _0x502463,
      colView: _0x187cf6,
      dataView: _0x2c2c74,
    } = _0x59235e,
    _0x4eeeae = F(_0x1bfed5, _0xee7b1e, !0x0),
    _0x2dfdd6 =
      _0xee7b1e[_0x50e9a5(0x15d)] >= 0x0 ? _0xee7b1e["lastRow"] + 0x1 : 0x0,
    _0x110c31 = _0x23390f["rowCount"],
    _0x7aa88f = _0x23390f[_0x50e9a5(0x471)],
    _0x5ee47b = +(_0x4eeeae[_0x50e9a5(0x2b6)] > 0x0),
    _0x3d1b0b = F(
      {
        row: _0x1bfed5[_0x50e9a5(0x292)] + _0x2dfdd6 + _0x5ee47b,
        col: _0x1bfed5[_0x50e9a5(0x1a4)],
      },
      _0x23390f,
      !0x1,
      !0x1,
    ),
    _0x12b34b = F(
      {
        row: _0x1bfed5[_0x50e9a5(0x292)] + _0x2dfdd6 + _0x5ee47b + _0x110c31,
        col: _0x1bfed5[_0x50e9a5(0x1a4)],
      },
      _0x502463,
      !0x1,
      !0x0,
    ),
    _0x4e943d = F(
      {
        row: _0x1bfed5[_0x50e9a5(0x292)] + _0x2dfdd6 + _0x5ee47b,
        col: _0x1bfed5[_0x50e9a5(0x1a4)] + _0x7aa88f,
      },
      _0x187cf6,
      !0x1,
      !0x0,
    ),
    _0x277276 = F(
      {
        row: _0x1bfed5[_0x50e9a5(0x292)] + _0x2dfdd6 + _0x5ee47b + _0x110c31,
        col: _0x1bfed5[_0x50e9a5(0x1a4)] + _0x7aa88f,
      },
      _0x2c2c74,
      !0x1,
      !0x0,
    ),
    _0xc227bc = p(_0x59235e, _0x1bfed5[_0x50e9a5(0x1a4)], _0x5ac66e);
  return [..._0x4eeeae, ..._0x3d1b0b, ..._0x12b34b, ..._0x4e943d, ..._0x277276][
    _0x50e9a5(0x15f)
  ]((_0x568906) => h(_0xc227bc, _0x568906));
}
function Ae(_0x22115f, _0x271f6a, _0xf8ce34) {
  let {
      cornerView: _0x5c7097,
      rowView: _0x406bbb,
      colView: _0x425001,
      pageView: _0x3c8190,
    } = _0x22115f,
    { row: _0x40f212, col: _0x5796ca } = _0x271f6a;
  if (_0xf8ce34)
    return { rowCount: 0xe + _0x40f212, colCount: 0x6 + _0x5796ca };
  let _0xc6fc86 =
      _0x3c8190[_0x511ab3(0x15d)] > -0x1 ? _0x3c8190["lastRow"] + 0x1 : 0x0,
    _0x23d9e9 =
      _0x3c8190[_0x511ab3(0x36b)] > -0x1 ? _0x3c8190[_0x511ab3(0x36b)] : 0x0,
    _0x50263d =
      _0x40f212 +
      _0xc6fc86 +
      +!!_0xc6fc86 +
      _0x5c7097[_0x511ab3(0x371)] +
      _0x406bbb[_0x511ab3(0x371)],
    _0x125969 = _0x5796ca + _0x23d9e9,
    _0x3c9296 =
      _0x5796ca + _0x5c7097[_0x511ab3(0x471)] + _0x425001[_0x511ab3(0x471)];
  return {
    rowCount: _0x50263d,
    colCount: Math[_0x511ab3(0x13b)](_0x125969, _0x3c9296),
  };
}
function J(_0x33c280, _0x490cf8, _0x216693, _0x52d29a) {
  let {
      row: _0x323d1f,
      col: _0x30f04c,
      unitId: _0xe8a1c9,
      subUnitId: _0x9fe82d,
    } = _0x216693,
    _0x2fe508 = Ae(_0x490cf8, { row: _0x323d1f, col: _0x30f04c }, _0x52d29a),
    _0x56b67e = (0x0, r[_0x262586(0x1b5)])(
      _0x33c280["get"](t[_0x262586(0x1ba)]),
      { unitId: _0xe8a1c9, subUnitId: _0x9fe82d },
    ),
    _0x2db8ee = [],
    _0x34cf55 = [];
  if (!_0x56b67e) return { undos: _0x34cf55, redos: _0x2db8ee };
  let { worksheet: _0xd3691f } = _0x56b67e,
    _0x535cb5 = _0xd3691f["getRowCount"](),
    _0x395181 = _0xd3691f[_0x262586(0x13e)]();
  return (
    _0x535cb5 < _0x2fe508[_0x262586(0x371)] &&
      (_0x2db8ee[_0x262586(0x19f)]({
        id: r[_0x262586(0x2ff)]["id"],
        params: {
          unitId: _0xe8a1c9,
          subUnitId: _0x9fe82d,
          range: {
            startRow: _0x535cb5,
            endRow: _0x2fe508[_0x262586(0x371)] - 0x1,
            startColumn: 0x0,
            endColumn: _0x395181 - 0x1,
          },
        },
      }),
      _0x34cf55[_0x262586(0x19f)]({
        id: r[_0x262586(0x28b)]["id"],
        params: {
          unitId: _0xe8a1c9,
          subUnitId: _0x9fe82d,
          range: {
            startRow: _0x535cb5,
            endRow: _0x2fe508[_0x262586(0x371)] - 0x1,
            startColumn: 0x0,
            endColumn: _0x395181 - 0x1,
          },
        },
      })),
    _0x395181 < _0x2fe508[_0x262586(0x471)] &&
      (_0x2db8ee[_0x262586(0x19f)]({
        id: r[_0x262586(0x207)]["id"],
        params: {
          unitId: _0xe8a1c9,
          subUnitId: _0x9fe82d,
          range: {
            startRow: 0x0,
            endRow: _0x535cb5 - 0x1,
            startColumn: _0x395181,
            endColumn: _0x2fe508[_0x262586(0x471)] - 0x1,
          },
        },
      }),
      _0x34cf55[_0x262586(0x19f)]({
        id: r[_0x262586(0x339)]["id"],
        params: {
          unitId: _0xe8a1c9,
          subUnitId: _0x9fe82d,
          range: {
            startRow: 0x0,
            endRow: _0x535cb5 - 0x1,
            startColumn: _0x395181,
            endColumn: _0x2fe508[_0x262586(0x471)] - 0x1,
          },
        },
      })),
    { undos: _0x34cf55, redos: _0x2db8ee }
  );
}
function je(_0x9bd910) {
  let _0x5f58ba = 0x0;
  for (let _0x1d5139 of _0x9bd910)
    o[_0x2a2f15(0x142)][_0x2a2f15(0x1b1)](_0x1d5139)
      ? (_0x5f58ba += 0x2)
      : (_0x5f58ba += 0x1);
  return _0x5f58ba;
}
const Me = new Set([
  e["PivotCellStyleTypeEnum"]["FilterAll"],
  e["PivotCellStyleTypeEnum"]["FilterPartial"],
  e["PivotCellStyleTypeEnum"]["FilterSingle"],
  e["PivotCellStyleTypeEnum"]["FilteredSortNone"],
  e["PivotCellStyleTypeEnum"]["FilteredSortAsc"],
  e["PivotCellStyleTypeEnum"]["FilteredSortDesc"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortNone"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortAsc"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortDesc"],
  e["PivotCellStyleTypeEnum"]["Collapse"],
  e["PivotCellStyleTypeEnum"]["Expand"],
]);
function Ne(_0x3654bd) {
  if (_0x3654bd <= 0x20)
    return Array["from"](
      { length: _0x3654bd },
      (_0x95d9bf, _0x154371) => _0x154371,
    );
  let _0x5b81fa = new Set();
  for (let _0x546664 = 0x0; _0x546664 < 0x20; _0x546664++)
    _0x5b81fa[_0x5f36d9(0x3db)](
      Math[_0x5f36d9(0x1d6)]((_0x546664 * (_0x3654bd - 0x1)) / 0x1f),
    );
  return Array[_0x5f36d9(0x144)](_0x5b81fa);
}
function Pe(_0x199388) {
  let _0x455876 = P(_0x199388);
  return typeof _0x455876 == "string" || typeof _0x455876 == "number"
    ? String(_0x455876)
    : void 0x0;
}
function Fe(_0x4ba9f0, _0x877fe4, _0x1f4cc9, _0x31fcab, _0xf9663d) {
  _0x877fe4[_0x27ffb2(0x3db)](_0x1f4cc9);
  let _0x143a53 = Pe(_0x31fcab);
  if (!_0x143a53) return;
  let _0x37e093 = _0xf9663d && Me[_0x27ffb2(0x442)](_0xf9663d) ? 0x10 : 0x0,
    _0x3a0699 = {
      text: _0x143a53,
      buttonOffset: _0x37e093,
      score: je(_0x143a53) * 0x8 + _0x37e093,
    },
    _0x4b3ae0 = _0x4ba9f0[_0x1f4cc9];
  _0x4b3ae0[_0x27ffb2(0x22a)](
    (_0x349b60) =>
      _0x349b60[_0x27ffb2(0x21d)] === _0x143a53 &&
      _0x349b60["buttonOffset"] === _0x37e093,
  ) >= 0x0 ||
    (_0x4b3ae0[_0x27ffb2(0x19f)](_0x3a0699),
    _0x4b3ae0[_0x27ffb2(0x1e6)](
      (_0x707791, _0x5c4135) =>
        _0x5c4135[_0x27ffb2(0x188)] - _0x707791[_0x27ffb2(0x188)],
    ),
    _0x4b3ae0[_0x27ffb2(0x2b6)] > 0x4 && (_0x4b3ae0[_0x27ffb2(0x2b6)] = 0x4));
}
function Ie(_0x207dbb, _0x86f479, _0x3f5a6c) {
  let {
    pageView: _0x392dd3,
    cornerView: _0x4e9203,
    rowView: _0x36e4d7,
  } = _0x207dbb;
  Object["keys"](_0x392dd3[_0x4c05a4(0x16a)])[_0x4c05a4(0x231)]((_0x593c4f) => {
    const _0xda08d1 = _0x4c05a4;
    let _0x23e395 = Number(_0x593c4f);
    Object[_0xda08d1(0x2a8)](_0x392dd3[_0xda08d1(0x16a)][_0x23e395])[
      _0xda08d1(0x231)
    ]((_0x3f9524) => {
      const _0x1afda3 = _0xda08d1;
      let _0x53aa75 = Number(_0x3f9524),
        _0x1ae7be = _0x392dd3["data"][_0x23e395][_0x53aa75];
      Fe(
        _0x3f5a6c[_0x1afda3(0x2c7)],
        _0x3f5a6c[_0x1afda3(0x383)],
        _0x53aa75,
        _0x1ae7be["v"],
        _0x1ae7be["s"],
      );
    });
  });
  for (
    let _0x3a4385 = 0x0;
    _0x3a4385 < _0x4e9203[_0x4c05a4(0x471)];
    _0x3a4385++
  ) {
    _0x3f5a6c[_0x4c05a4(0x383)][_0x4c05a4(0x3db)](_0x3a4385);
    for (
      let _0xc9fb5 = 0x0;
      _0xc9fb5 < _0x4e9203[_0x4c05a4(0x371)];
      _0xc9fb5++
    ) {
      var _0x36ec99, _0x4cb143, _0x57a351;
      let _0x2159fb =
        (_0x36ec99 = _0x4e9203[_0x4c05a4(0x16a)][_0xc9fb5]) == null
          ? void 0x0
          : _0x36ec99[_0x3a4385];
      if (!_0x2159fb) continue;
      let _0x237621 = _0x2159fb["v"];
      ((_0x4cb143 = _0x36e4d7[_0x4c05a4(0x4a3)][_0x3a4385]) != null &&
        _0x4cb143[_0x4c05a4(0x47a)] &&
        _0x3a4385 === _0x4e9203[_0x4c05a4(0x471)] - 0x1 &&
        _0xc9fb5 === _0x4e9203[_0x4c05a4(0x371)] - 0x1 &&
        (_0x237621 = _0x86f479["sheets-pivot.value"]),
        (_0x57a351 = _0x4e9203["info"][_0x3a4385]) != null &&
          _0x57a351[_0x4c05a4(0x45b)] &&
          (_0x237621 = _0x86f479[_0x4c05a4(0x418)] || _0x4c05a4(0x441)),
        Fe(
          _0x3f5a6c["candidates"],
          _0x3f5a6c["occupiedColumns"],
          _0x3a4385,
          _0x237621,
          _0x2159fb["s"],
        ));
    }
  }
}
function Le(_0x4c6aa0, _0x1a199c, _0x3443b3, _0x2b2473) {
  let { rowView: _0x298256, formatMap: _0x25d023 } = _0x4c6aa0,
    _0x9e6a0c = Ne(_0x298256[_0x1ea4d2(0x371)]);
  for (
    let _0x33197c = 0x0;
    _0x33197c < _0x298256[_0x1ea4d2(0x471)];
    _0x33197c++
  ) {
    var _0x514472;
    _0x3443b3[_0x1ea4d2(0x383)][_0x1ea4d2(0x3db)](_0x33197c);
    let _0x20e78f =
      _0x25d023[
        (_0x514472 = _0x298256[_0x1ea4d2(0x4a3)][_0x33197c]) == null
          ? void 0x0
          : _0x514472[_0x1ea4d2(0x30c)]
      ];
    _0x9e6a0c["forEach"]((_0x3a29af) => {
      const _0x2f51e5 = _0x1ea4d2;
      var _0xabf67c;
      let _0x20aaab =
        (_0xabf67c = _0x298256[_0x2f51e5(0x16a)][_0x3a29af]) == null
          ? void 0x0
          : _0xabf67c[_0x33197c];
      if (!_0x20aaab) return;
      let _0x13c1a8 = j(
        _0x20aaab,
        !0x1,
        _0x20e78f,
        _0x1a199c,
        void 0x0,
        void 0x0,
        _0x2b2473,
      );
      Fe(
        _0x3443b3["candidates"],
        _0x3443b3[_0x2f51e5(0x383)],
        _0x33197c,
        _0x13c1a8,
        _0x20aaab["s"],
      );
    });
  }
}
function Re(_0x40b8a, _0x6f981e, _0x1ecf8d, _0x2c6ef0) {
  let {
      cornerView: _0x50936d,
      colView: _0x38694a,
      formatMap: _0x546617,
    } = _0x40b8a,
    _0x309302 = Ne(_0x38694a[_0x2474ce(0x371)]);
  for (
    let _0x4eecce = 0x0;
    _0x4eecce < _0x38694a[_0x2474ce(0x471)];
    _0x4eecce++
  ) {
    let _0xd57ae3 = _0x50936d[_0x2474ce(0x471)] + _0x4eecce;
    (_0x1ecf8d[_0x2474ce(0x383)][_0x2474ce(0x3db)](_0xd57ae3),
      _0x309302["forEach"]((_0x4779cc) => {
        const _0x39e460 = _0x2474ce;
        var _0xde5ea, _0x4908c7;
        let _0x480a13 =
          (_0xde5ea = _0x38694a[_0x39e460(0x16a)][_0x4779cc]) == null
            ? void 0x0
            : _0xde5ea[_0x4eecce];
        if (!_0x480a13) return;
        let _0x521b65 = _0x38694a[_0x39e460(0x18f)](_0x4779cc + 0x1),
          _0x5b0ee8 =
            (_0x4908c7 = _0x38694a[_0x39e460(0x4a3)][_0x4779cc]) == null
              ? void 0x0
              : _0x4908c7[_0x39e460(0x30c)],
          _0x102976 = _0x546617[_0x5b0ee8],
          _0x292ef4 =
            _0x521b65 != null && _0x521b65[_0x39e460(0x461)]
              ? _0x6f981e[_0x39e460(0x384)] || "Column\x20Labels"
              : j(
                  _0x480a13,
                  _0x4779cc === 0x0 &&
                    (_0x521b65 == null
                      ? void 0x0
                      : _0x521b65[_0x39e460(0x47a)]),
                  _0x102976,
                  _0x6f981e,
                  _0x6f981e["sheets-pivot.subTotalText"],
                  void 0x0,
                  _0x2c6ef0,
                );
        Fe(
          _0x1ecf8d[_0x39e460(0x2c7)],
          _0x1ecf8d[_0x39e460(0x383)],
          _0xd57ae3,
          _0x292ef4,
          _0x480a13["s"],
        );
      }));
  }
}
function ze(_0x35a27f, _0x97b9f5, _0x3bd799, _0x2c13c9) {
  let {
      cornerView: _0x52cd0b,
      rowView: _0x46a74c,
      colView: _0x46bf99,
      dataView: _0x177a23,
      formatMap: _0xdca854,
    } = _0x35a27f,
    _0x512987 = Ne(_0x177a23["rowCount"]);
  for (let _0xa146c7 = 0x0; _0xa146c7 < _0x177a23["colCount"]; _0xa146c7++) {
    let _0xb9813 = _0x52cd0b[_0x32b984(0x471)] + _0xa146c7;
    (_0x3bd799["occupiedColumns"][_0x32b984(0x3db)](_0xb9813),
      _0x512987["forEach"]((_0x107eba) => {
        const _0x3d5910 = _0x32b984;
        var _0x3d9f3b, _0x35b610, _0x4dfb60;
        let _0x1691ee =
          (_0x3d9f3b = _0x177a23[_0x3d5910(0x16a)][_0x107eba]) == null
            ? void 0x0
            : _0x3d9f3b[_0xa146c7];
        if (!_0x1691ee) return;
        let _0x432621 = Math["max"](
            ((_0x35b610 = _0x46a74c["info"][_0x107eba]) == null
              ? void 0x0
              : _0x35b610[_0x3d5910(0x3bd)]) ?? -0x1,
            ((_0x4dfb60 = _0x46bf99["info"][_0xa146c7]) == null
              ? void 0x0
              : _0x4dfb60[_0x3d5910(0x3bd)]) ?? -0x1,
          ),
          _0x6ccd9d = _0xdca854[_0x97b9f5[_0x432621 < 0x0 ? 0x0 : _0x432621]],
          _0x4d0386 =
            _0x6ccd9d && typeof _0x1691ee["v"] == "number"
              ? t[_0x3d5910(0x22f)][_0x3d5910(0x1a6)](
                  _0x6ccd9d,
                  _0x1691ee["v"],
                  { dateSystem: _0x2c13c9 },
                )
              : _0x1691ee["v"];
        Fe(
          _0x3bd799[_0x3d5910(0x2c7)],
          _0x3bd799["occupiedColumns"],
          _0xb9813,
          _0x4d0386,
          _0x1691ee["s"],
        );
      }));
  }
}
function Be(_0x14361a, _0x36464d, _0x100d71, _0x1f440a) {
  let _0x2adc64 = {};
  return (
    _0x14361a["candidates"][_0x56a3f5(0x231)]((_0x1f91b3, _0x42f47b) => {
      const _0x3d0216 = _0x56a3f5;
      let _0x4f4187 = m(_0x100d71, _0x36464d + _0x42f47b);
      if (!_0x14361a[_0x3d0216(0x383)]["has"](_0x42f47b)) {
        _0x2adc64[_0x4f4187] = 0x10;
        return;
      }
      let _0x39cca9 = 0x28;
      (_0x1f91b3["forEach"](({ text: _0x494443, buttonOffset: _0x4db8c8 }) => {
        const _0xb914b = _0x3d0216;
        _0x39cca9 = Math[_0xb914b(0x13b)](
          _0x39cca9,
          Math[_0xb914b(0x26c)](_0x1f440a(_0x494443) + 0xc + _0x4db8c8),
        );
      }),
        (_0x2adc64[_0x4f4187] = Math[_0x3d0216(0x312)](_0x39cca9, 0x190)));
    }),
    _0x2adc64
  );
}
function Ve(
  _0x147f05,
  _0x4ba447,
  _0x5ac314,
  _0x2c995f,
  _0x524894,
  _0x520b76 = [],
  _0x41a081 = t["DateSystem"]["Date1900"],
) {
  let _0x4443d4 = p(_0x147f05, _0x4ba447, _0x5ac314),
    _0x25f5de = _0x4443d4[_0xec67fd(0x2bc)] - _0x4443d4["startColumn"] + 0x1,
    _0x21a02a = {
      candidates: Array[_0xec67fd(0x144)]({ length: _0x25f5de }, () => []),
      occupiedColumns: new Set(),
    };
  return (
    Ie(_0x147f05, _0x2c995f, _0x21a02a),
    Le(_0x147f05, _0x2c995f, _0x21a02a, _0x41a081),
    Re(_0x147f05, _0x2c995f, _0x21a02a, _0x41a081),
    ze(_0x147f05, _0x520b76, _0x21a02a, _0x41a081),
    Be(_0x21a02a, _0x4ba447, _0x4443d4, _0x524894)
  );
}
function He(_0x538749, _0x376e85) {
  let {
    rowFields: _0x46760d,
    columnFields: _0x30a396,
    valueFields: _0x3e0ba3,
    filterFields: _0x4fc4a5,
    dimension: _0x55ce84,
    measure: _0x41a890,
  } = _0x376e85;
  for (let _0x4bf987 of _0x46760d) {
    let _0x33684a = _0x55ce84[_0x4bf987];
    _0x33684a &&
      _0x538749["getDataFieldByDataFieldId"](_0x33684a[_0xd04bdc(0x1cb)]) &&
      (_0x538749[_0xd04bdc(0x4c0)](
        _0x33684a[_0xd04bdc(0x1cb)],
        e["PivotTableFiledAreaEnum"][_0xd04bdc(0x289)],
        void 0x0,
        _0x4bf987,
      ),
      _0x33684a[_0xd04bdc(0x37f)] &&
        _0x538749["renameField"](_0x33684a["id"], _0x33684a[_0xd04bdc(0x37f)]),
      _0x33684a[_0xd04bdc(0x42f)] &&
        _0x538749["setSortInfo"](_0x33684a["id"], _0x33684a["sortInfo"]),
      _0x33684a[_0xd04bdc(0x49c)] &&
        _0x538749["setLabelFilterInfo"](
          _0x33684a["id"],
          _0x33684a[_0xd04bdc(0x49c)],
        ));
  }
  for (let _0x22801e of _0x30a396) {
    let _0x5b74db = _0x55ce84[_0x22801e];
    _0x5b74db &&
      _0x538749["getDataFieldByDataFieldId"](_0x5b74db[_0xd04bdc(0x1cb)]) &&
      (_0x538749["addFieldWithSourceId"](
        _0x5b74db[_0xd04bdc(0x1cb)],
        e[_0xd04bdc(0x200)][_0xd04bdc(0x374)],
        void 0x0,
        _0x22801e,
      ),
      _0x5b74db[_0xd04bdc(0x42f)] &&
        _0x538749[_0xd04bdc(0x1a2)](
          _0x5b74db["id"],
          _0x5b74db[_0xd04bdc(0x42f)],
        ),
      _0x5b74db["filterInfo"] &&
        _0x538749[_0xd04bdc(0x3b9)](_0x5b74db["id"], _0x5b74db["filterInfo"]),
      _0x5b74db["displayName"] &&
        _0x538749[_0xd04bdc(0x15c)](
          _0x5b74db["id"],
          _0x5b74db[_0xd04bdc(0x37f)],
        ));
  }
  for (let _0x3b24f9 of _0x4fc4a5) {
    let _0x179089 = _0x55ce84[_0x3b24f9];
    _0x179089 &&
      _0x538749[_0xd04bdc(0x28f)](_0x179089[_0xd04bdc(0x1cb)]) &&
      (_0x538749["addFieldWithSourceId"](
        _0x179089[_0xd04bdc(0x1cb)],
        e["PivotTableFiledAreaEnum"][_0xd04bdc(0x3e1)],
        void 0x0,
        _0x3b24f9,
      ),
      _0x179089[_0xd04bdc(0x42f)] &&
        _0x538749[_0xd04bdc(0x1a2)](_0x179089["id"], _0x179089["sortInfo"]),
      _0x179089[_0xd04bdc(0x49c)] &&
        _0x538749[_0xd04bdc(0x3b9)](
          _0x179089["id"],
          _0x179089[_0xd04bdc(0x49c)],
        ),
      _0x179089[_0xd04bdc(0x37f)] &&
        _0x538749[_0xd04bdc(0x15c)](
          _0x179089["id"],
          _0x179089[_0xd04bdc(0x37f)],
        ));
  }
  for (let _0x3798a1 of _0x3e0ba3) {
    let _0x1c9002 = _0x41a890[_0x3798a1];
    _0x1c9002 &&
      _0x538749[_0xd04bdc(0x28f)](_0x1c9002["dataFieldId"]) &&
      (_0x538749[_0xd04bdc(0x4c0)](
        _0x1c9002[_0xd04bdc(0x1cb)],
        e[_0xd04bdc(0x200)][_0xd04bdc(0x1df)],
        void 0x0,
        _0x3798a1,
      ),
      _0x1c9002[_0xd04bdc(0x41a)] !== void 0x0 &&
        _0x538749[_0xd04bdc(0x19d)](_0x3798a1, _0x1c9002[_0xd04bdc(0x41a)]),
      _0x1c9002[_0xd04bdc(0x1a6)] &&
        _0x538749[_0xd04bdc(0x311)](_0x3798a1, _0x1c9002[_0xd04bdc(0x1a6)]),
      _0x1c9002[_0xd04bdc(0x37f)] &&
        _0x538749[_0xd04bdc(0x15c)](
          _0x1c9002["id"],
          _0x1c9002[_0xd04bdc(0x37f)],
        ));
  }
  let _0x5b718f = _0x376e85[_0xd04bdc(0x36a)];
  for (let { fieldId: _0x51d000, filterInfo: _0x397388 } of _0x5b718f)
    _0x538749[_0xd04bdc(0x453)](_0x51d000, _0x397388);
}
function Ue(_0x2e5f27, _0x3998ab) {
  let _0x3924d1 = [];
  (_0x3998ab === e[_0x397ca5(0x200)][_0x397ca5(0x289)] &&
    _0x2e5f27[_0x397ca5(0x46e)](
      e[_0x397ca5(0x200)][_0x397ca5(0x289)],
      (_0x127035) => {
        const _0x5457a5 = _0x397ca5;
        _0x3924d1[_0x5457a5(0x19f)](_0x127035[_0x5457a5(0x1b6)]());
      },
    ),
    _0x3998ab === e[_0x397ca5(0x200)][_0x397ca5(0x374)] &&
      _0x2e5f27[_0x397ca5(0x46e)](
        e["PivotTableFiledAreaEnum"][_0x397ca5(0x374)],
        (_0x1d31b3) => {
          const _0x54fc94 = _0x397ca5;
          _0x3924d1[_0x54fc94(0x19f)](_0x1d31b3["getId"]());
        },
      ),
    _0x3998ab === e[_0x397ca5(0x200)]["Filter"] &&
      _0x2e5f27[_0x397ca5(0x46e)](
        e[_0x397ca5(0x200)][_0x397ca5(0x3e1)],
        (_0x5ca1e0) => {
          const _0x7b5e32 = _0x397ca5;
          _0x3924d1[_0x7b5e32(0x19f)](_0x5ca1e0["getId"]());
        },
      ),
    _0x3998ab === e[_0x397ca5(0x200)][_0x397ca5(0x1df)] &&
      _0x2e5f27[_0x397ca5(0x46e)](e[_0x397ca5(0x200)]["Value"], (_0x4392c1) => {
        const _0x33301d = _0x397ca5;
        _0x3924d1[_0x33301d(0x19f)](_0x4392c1[_0x33301d(0x1b6)]());
      }),
    _0x3998ab === void 0x0 &&
      _0x2e5f27[_0x397ca5(0x3a7)]((_0x20e175) => {
        const _0x19bf40 = _0x397ca5;
        _0x3924d1[_0x19bf40(0x19f)](_0x20e175[_0x19bf40(0x1b6)]());
      }));
  let _0x2695d3 = _0x3924d1[_0x397ca5(0x2b6)];
  for (let _0x10b0bd = _0x2695d3 - 0x1; _0x10b0bd >= 0x0; _0x10b0bd--)
    _0x2e5f27[_0x397ca5(0x177)](_0x3924d1[_0x10b0bd]);
  let _0x1e845 = _0x2e5f27["getValueFilterInfos"]();
  for (let _0x4dd2f6 in _0x1e845) _0x2e5f27[_0x397ca5(0x366)](_0x4dd2f6);
}
function We(_0x4924c5, _0x1dbdb3) {
  let _0x49c5e6 =
      e[_0x17d736(0x2ad)]["dateSystem"] ===
      e[_0x17d736(0x469)][_0x17d736(0x1a1)],
    _0x95bb24 = new Date((0x0, e[_0x17d736(0x40e)])(_0x1dbdb3, _0x49c5e6)),
    _0x53dcea = new Date((0x0, e[_0x17d736(0x40e)])(_0x4924c5, _0x49c5e6)),
    _0x178195 = _0x95bb24[_0x17d736(0x4b7)]() === _0x53dcea[_0x17d736(0x4b7)](),
    _0x1080bd =
      _0x178195 &&
      _0x95bb24[_0x17d736(0x2d9)]() === _0x53dcea[_0x17d736(0x2d9)](),
    _0x4c86b0 =
      _0x1080bd && _0x95bb24["getDate"]() === _0x53dcea[_0x17d736(0x287)]();
  return _0x178195 && _0x1080bd && !_0x4c86b0
    ? e[_0x17d736(0x1ad)]["YearMonthDate"]
    : _0x178195 && !_0x1080bd
      ? e[_0x17d736(0x1ad)][_0x17d736(0x2ba)]
      : e[_0x17d736(0x1ad)][_0x17d736(0x4ba)];
}
function Ge(_0x348e86) {
  _0x348e86 != null &&
    (0x0, e[_0x141fe9(0x3ac)])(
      _0x348e86 === t[_0x141fe9(0x473)][_0x141fe9(0x26f)]
        ? e[_0x141fe9(0x469)]["Date1904"]
        : e[_0x141fe9(0x469)][_0x141fe9(0x1a1)],
    );
}
function Ke(_0x27a59a, _0x299d53) {
  let _0x2ca131 = _0x27a59a[_0x4a85ce(0x345)](K)["getTextInfo"](),
    _0x3810b5 = "";
  switch (_0x299d53) {
    case e["PivotDateGroupFieldDateTypeEnum"][_0x4a85ce(0x258)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x3cf)];
      break;
    case e[_0x4a85ce(0x1ad)][_0x4a85ce(0x2ba)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x240)];
      break;
    case e[_0x4a85ce(0x1ad)]["Year"]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x1d0)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][_0x4a85ce(0x34c)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x1f4)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"]["Quarter"]:
      _0x3810b5 = _0x2ca131["sheets-pivot.dateGroup.quarter"];
      break;
    case e[_0x4a85ce(0x1ad)][_0x4a85ce(0x1e2)]:
      _0x3810b5 = _0x2ca131["sheets-pivot.dateGroup.date"];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][_0x4a85ce(0x433)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x20e)];
      break;
    case e[_0x4a85ce(0x1ad)][_0x4a85ce(0x282)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x19b)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][_0x4a85ce(0x130)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x229)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][_0x4a85ce(0x37b)]:
      _0x3810b5 = _0x2ca131[_0x4a85ce(0x2b8)];
      break;
    case e[_0x4a85ce(0x1ad)][_0x4a85ce(0x283)]:
      _0x3810b5 = _0x2ca131["sheets-pivot.dateGroup.yearQuarter"];
      break;
    default:
      _0x3810b5 = "";
      break;
  }
  return _0x3810b5;
}
const qe = "sheets-pivot.config",
  Je = {
    autoDateGroup: !0x0,
    dateSystem: e["PivotDateGroupFieldDateSystemEnum"]["Date1900"],
  };
let Y = class extends t["Disposable"] {
  constructor(
    _0x491235,
    _0x134069,
    _0x4a5b28,
    _0x2079cd,
    _0x1ecbb1,
    _0xa26a09,
  ) {
    (super(),
      (this[_0x289647(0x483)] = _0x491235),
      (this["_commandService"] = _0x134069),
      (this[_0x289647(0x1ec)] = _0x4a5b28),
      (this[_0x289647(0x31d)] = _0x2079cd),
      (this[_0x289647(0x259)] = _0x1ecbb1),
      (this[_0x289647(0x2b0)] = _0xa26a09),
      V(this, "_model", new Map()),
      V(this, _0x289647(0x48e), new Map()),
      V(this, "_pivotTableRangeInfo", new Map()),
      V(this, _0x289647(0x2c3), new Map()),
      V(this, _0x289647(0x472), new i[_0x289647(0x218)]()),
      V(this, _0x289647(0x4c3), new i[_0x289647(0x218)]()),
      V(this, "pivotInitCompleted$", this[_0x289647(0x4c3)]["asObservable"]()),
      V(this, _0x289647(0x324), new i[_0x289647(0x218)]()),
      V(this, _0x289647(0x331), this[_0x289647(0x324)][_0x289647(0x1c2)]()),
      V(this, _0x289647(0x32d), {}),
      V(this, _0x289647(0x35c), this[_0x289647(0x472)][_0x289647(0x1c2)]()),
      this[_0x289647(0x178)](),
      this["_initUnitDisposed"]());
    let _0xfd66fb = this[_0x289647(0x259)]["getConfig"](qe);
    (_0xfd66fb == null ? void 0x0 : _0xfd66fb[_0x289647(0x2ef)]) === !0x0 &&
      this[_0x289647(0x3ad)]();
  }
  ["_initUnitDisposed"]() {
    this[_0xc5ba25(0x1e7)](
      this[_0xc5ba25(0x1ec)]
        [_0xc5ba25(0x354)](t[_0xc5ba25(0x2b3)][_0xc5ba25(0x333)])
        [_0xc5ba25(0x131)]((_0x1ee91f) => {
          const _0x177a63 = _0xc5ba25;
          this[_0x177a63(0x470)](_0x1ee91f[_0x177a63(0x261)]());
        }),
    );
  }
  ["setPivotInitCompleted"]() {
    this[_0x3c5c79(0x4c3)][_0x3c5c79(0x37c)](!0x0);
  }
  ["_initLocale"]() {
    let _0x5a741a = Se(this[_0x3b2653(0x483)], b, "", {});
    ((this[_0x3b2653(0x32d)] = _0x5a741a),
      this[_0x3b2653(0x1e7)](
        this["_localeService"]["direction$"]
          [_0x3b2653(0x306)]((0x0, i["distinctUntilChanged"])())
          [_0x3b2653(0x131)]((_0x29ccaf) => {
            const _0x1c1959 = _0x3b2653;
            this[_0x1c1959(0x1db)]["executeCommand"](
              ae["id"],
              { textInfo: _0x5a741a, direction: _0x29ccaf },
              { onlyLocal: !0x0 },
            );
          }),
      ));
  }
  ["getTextInfo"]() {
    return this[_0x3e72ea(0x32d)];
  }
  ["updateViewInfo"](_0x3ba1da, _0x5a806d, _0x5ef574, _0x2c7b09, _0x177f16) {
    (this[_0x1c73fe(0x3e3)](_0x3ba1da, _0x5a806d, _0x5ef574, _0x2c7b09),
      this[_0x1c73fe(0x17a)](_0x3ba1da, _0x5a806d, _0x5ef574, _0x177f16));
  }
  ["getPivotTableConfig"](_0x2b3d2c, _0x31020e, _0x4f2470) {
    var _0x117eb7;
    let _0x2d78aa =
      (_0x117eb7 = this[_0x29b1b3(0x2e7)][_0x29b1b3(0x345)](_0x2b3d2c)) == null
        ? void 0x0
        : _0x117eb7["get"](_0x31020e);
    if (_0x2d78aa) return _0x2d78aa["get"](_0x4f2470);
  }
  ["getTargetByPivotTableId"](_0x15a69a, _0x25752e) {
    let _0x212938 = this[_0x37a613(0x2e7)][_0x37a613(0x345)](_0x15a69a);
    if (_0x212938) {
      for (let [_0x3c5457, _0x56803a] of _0x212938[_0x37a613(0x1c4)]())
        for (let [_0x3fead4, _0x2c0330] of _0x56803a["entries"]())
          if (_0x3fead4 === _0x25752e) return _0x2c0330[_0x37a613(0x376)];
    }
  }
  ["getTargetByPivotId"](_0x211093, _0xc8d643, _0x992c22) {
    let _0x50ff71 = this["getPivotTableConfig"](
      _0x211093,
      _0xc8d643,
      _0x992c22,
    );
    return _0x50ff71 == null ? void 0x0 : _0x50ff71["targetCellInfo"];
  }
  ["getSubUnitPivotConfigs"](_0x115d14, _0x2bcfe8) {
    var _0x36886f;
    return (_0x36886f = this[_0x1764e7(0x2e7)][_0x1764e7(0x345)](_0x115d14)) ==
      null
      ? void 0x0
      : _0x36886f[_0x1764e7(0x345)](_0x2bcfe8);
  }
  ["updateConfigCache"](_0x2ad6dd, _0x3eabcd, _0x387cf8, _0x4c41ca) {
    let _0xd6898f = this[_0x59e572(0x39a)](_0x2ad6dd, _0x3eabcd);
    (_0x4c41ca
      ? _0xd6898f[_0x59e572(0x2d0)](_0x387cf8, _0x4c41ca)
      : _0xd6898f[_0x59e572(0x216)](_0x387cf8),
      this["_pivotConfigChange$"][_0x59e572(0x37c)]({
        unitId: _0x2ad6dd,
        subUnitId: _0x3eabcd,
        pivotTableId: _0x387cf8,
        pivotTableConfig: _0x4c41ca,
      }));
  }
  ["getCollection"](_0x2acfdd, _0x4be038) {
    var _0x395426;
    return (_0x395426 = this[_0x56a4d8(0x48e)][_0x56a4d8(0x345)](_0x2acfdd)) ==
      null
      ? void 0x0
      : _0x395426[_0x56a4d8(0x1b9)][_0x4be038];
  }
  ["updateCollectionConfig"](_0x3c5ab6, _0x1f8424) {
    (this[_0x72369d(0x48e)]["set"](_0x3c5ab6, _0x1f8424),
      this[_0x72369d(0x472)]["next"](Math[_0x72369d(0x3da)]()));
  }
  ["_ensurePivotMap"](_0x419f2c, _0x548843) {
    let _0x3f4dae = this[_0x36f366(0x2e7)][_0x36f366(0x345)](_0x419f2c);
    _0x3f4dae ||
      ((_0x3f4dae = new Map()),
      this[_0x36f366(0x2e7)][_0x36f366(0x2d0)](_0x419f2c, _0x3f4dae));
    let _0x377409 = _0x3f4dae["get"](_0x548843);
    return (
      _0x377409 ||
        ((_0x377409 = new Map()),
        _0x3f4dae[_0x36f366(0x2d0)](_0x548843, _0x377409)),
      _0x377409
    );
  }
  ["_ensurePivotTableRangeInfo"](_0x15e409, _0x25e84d) {
    let _0x5ad18a = this[_0x2790c5(0x42c)][_0x2790c5(0x345)](_0x15e409);
    _0x5ad18a ||
      ((_0x5ad18a = new Map()),
      this[_0x2790c5(0x42c)][_0x2790c5(0x2d0)](_0x15e409, _0x5ad18a));
    let _0x5566c7 = _0x5ad18a[_0x2790c5(0x345)](_0x25e84d);
    return (
      _0x5566c7 ||
        ((_0x5566c7 = new Map()),
        _0x5ad18a[_0x2790c5(0x2d0)](_0x25e84d, _0x5566c7)),
      _0x5566c7
    );
  }
  ["_ensurePivotTableMatrixInfo"](_0x5581ec, _0x4215e1) {
    let _0x50a7b8 = this[_0x2af246(0x2c3)][_0x2af246(0x345)](_0x5581ec);
    _0x50a7b8 ||
      ((_0x50a7b8 = new Map()),
      this["_pivotTableMatrixInfo"][_0x2af246(0x2d0)](_0x5581ec, _0x50a7b8));
    let _0x4d41ea = _0x50a7b8[_0x2af246(0x345)](_0x4215e1);
    return (
      _0x4d41ea ||
        ((_0x4d41ea = new Map()), _0x50a7b8["set"](_0x4215e1, _0x4d41ea)),
      _0x4d41ea
    );
  }
  ["updatePivotTableRangeInfo"](_0x373fbc, _0x478bb5, _0xa96656, _0x43ac6e) {
    var _0x1b0438;
    let _0x3b85c6 = this[_0x16f71d(0x29b)](_0x373fbc, _0x478bb5),
      _0x16a68d =
        (_0x1b0438 = _0x3b85c6[_0x16f71d(0x345)](_0xa96656)) == null
          ? void 0x0
          : _0x1b0438["oldRangeInfo"];
    _0x3b85c6["set"](_0xa96656, {
      oldRangeInfo: _0x16a68d,
      rangeInfo: _0x43ac6e,
    });
  }
  ["updatePivotTableMatrixInfo"](_0x1319ba, _0xa58b18, _0xc01c00, _0x4aa5d9) {
    var _0x407335;
    let _0xa2d589 = this[_0x872fdd(0x17d)](_0x1319ba, _0xa58b18),
      _0x4c17b6 =
        (_0x407335 = _0xa2d589[_0x872fdd(0x345)](_0xc01c00)) == null
          ? void 0x0
          : _0x407335[_0x872fdd(0x2c0)];
    _0xa2d589[_0x872fdd(0x2d0)](_0xc01c00, {
      oldMatrix: _0x4c17b6,
      matrix: _0x4aa5d9,
    });
  }
  ["getPivotTableRangeInfo"](_0x17c5de, _0x5c7d6c, _0x4ea99c) {
    var _0x3f2f0f;
    return (_0x3f2f0f = this[_0x1a1406(0x42c)][_0x1a1406(0x345)](_0x17c5de)) ==
      null || (_0x3f2f0f = _0x3f2f0f[_0x1a1406(0x345)](_0x5c7d6c)) == null
      ? void 0x0
      : _0x3f2f0f[_0x1a1406(0x345)](_0x4ea99c);
  }
  ["getPivotTableMatrixInfo"](_0x3d990e, _0x4955ad, _0x11e249) {
    var _0x2e47bb;
    return (_0x2e47bb = this[_0x43033d(0x2c3)][_0x43033d(0x345)](_0x3d990e)) ==
      null || (_0x2e47bb = _0x2e47bb[_0x43033d(0x345)](_0x4955ad)) == null
      ? void 0x0
      : _0x2e47bb[_0x43033d(0x345)](_0x11e249);
  }
  ["deleteUnitId"](_0x46e96e) {
    (this[_0x531ae6(0x2e7)][_0x531ae6(0x216)](_0x46e96e),
      this["_collectionConfigModel"][_0x531ae6(0x216)](_0x46e96e));
  }
  ["_toJSON"](_0x31582f) {
    let _0x256f9e = { dataFieldManagerConfig: {}, pivotTableConfigs: {} };
    if (
      (this[_0x2deb57(0x48e)][_0x2deb57(0x345)](_0x31582f) &&
        (_0x256f9e[_0x2deb57(0x32c)][_0x31582f] =
          this["_collectionConfigModel"][_0x2deb57(0x345)](_0x31582f)),
      this[_0x2deb57(0x2e7)][_0x2deb57(0x345)](_0x31582f))
    ) {
      _0x256f9e[_0x2deb57(0x162)][_0x31582f] = {};
      let _0x38ec09 = this[_0x2deb57(0x2e7)][_0x2deb57(0x345)](_0x31582f);
      _0x38ec09 != null &&
        _0x38ec09[_0x2deb57(0x189)] &&
        [..._0x38ec09[_0x2deb57(0x2a8)]()][_0x2deb57(0x231)]((_0x433eaf) => {
          const _0x2201b7 = _0x2deb57;
          let _0x1c9b07 = _0x38ec09[_0x2201b7(0x345)](_0x433eaf);
          _0x1c9b07 != null &&
            _0x1c9b07[_0x2201b7(0x189)] &&
            ((_0x256f9e[_0x2201b7(0x162)][_0x31582f][_0x433eaf] = {}),
            [..._0x1c9b07["keys"]()][_0x2201b7(0x231)]((_0x42d50a) => {
              const _0x266ced = _0x2201b7;
              let _0x597c6c = _0x1c9b07[_0x266ced(0x345)](_0x42d50a);
              _0x597c6c &&
                (_0x256f9e[_0x266ced(0x162)][_0x31582f][_0x433eaf][_0x42d50a] =
                  _0x597c6c);
            }));
        });
    }
    return _0x256f9e;
  }
  ["_initSnapshot"]() {
    this[_0x247596(0x1e7)](
      this[_0x247596(0x31d)][_0x247596(0x2cd)]({
        toJson: (_0xd9477b) =>
          JSON[_0x247596(0x184)](this["_toJSON"](_0xd9477b)),
        parseJson: (_0xb15cb3) => ({}),
        businesses: [t[_0x247596(0x2b3)][_0x247596(0x333)]],
        pluginName: _,
        onLoad: (_0x54119e, _0x286939) => {},
        onUnLoad: (_0x3026be) => {
          const _0x234776 = _0x247596;
          this[_0x234776(0x470)](_0x3026be);
        },
      }),
    );
  }
};
Y = U(
  [
    H(0x0, (0x0, t["Inject"])(t["Injector"])),
    H(0x1, (0x0, t["Inject"])(t["ICommandService"])),
    H(0x2, (0x0, t["Inject"])(t["IUniverInstanceService"])),
    H(0x3, (0x0, t["Inject"])(t["IResourceManagerService"])),
    H(0x4, (0x0, t["Inject"])(t["IConfigService"])),
    H(0x5, (0x0, t["Inject"])(t["LocaleService"])),
  ],
  Y,
);
let X = class extends t["Disposable"] {
  constructor(_0x6d267d, _0x5a11a2, _0x1edcc8, _0x200799, _0x374ebe) {
    (super(),
      (this[_0xf8f217(0x2b0)] = _0x6d267d),
      (this[_0xf8f217(0x483)] = _0x5a11a2),
      (this[_0xf8f217(0x26e)] = _0x1edcc8),
      (this[_0xf8f217(0x1ec)] = _0x200799),
      (this[_0xf8f217(0x3a5)] = _0x374ebe),
      V(this, _0xf8f217(0x1c8), new Map()),
      V(this, _0xf8f217(0x140), new Map()),
      V(this, "_pivotViewCache", new Map()),
      V(this, "_markDirty$", new i[_0xf8f217(0x218)]()),
      V(this, _0xf8f217(0x27c), this[_0xf8f217(0x406)]["asObservable"]()),
      V(this, _0xf8f217(0x34b), new i[_0xf8f217(0x218)]()),
      V(this, _0xf8f217(0x20a), this["_viewUpdate$"]["asObservable"]()),
      V(this, _0xf8f217(0x32d), void 0x0),
      this[_0xf8f217(0x178)](),
      this[_0xf8f217(0x327)](),
      this[_0xf8f217(0x1eb)]());
  }
  ["_initDirectionChange"]() {
    this[_0x5426af(0x1e7)](
      this["_localeService"][_0x5426af(0x3c4)]
        [_0x5426af(0x306)](
          (0x0, i["distinctUntilChanged"])(),
          (0x0, i[_0x5426af(0x1a9)])(0x1),
        )
        [_0x5426af(0x131)](() => {
          const _0x46efda = _0x5426af;
          let _0x5b1d64 = [];
          this[_0x46efda(0x1c8)][_0x46efda(0x231)]((_0x39ee56, _0x5d8ba0) => {
            const _0x1f359d = _0x46efda;
            _0x39ee56[_0x1f359d(0x231)]((_0x1f5c52, _0x788cbf) => {
              const _0x4cf719 = _0x1f359d;
              _0x1f5c52[_0x4cf719(0x231)]((_0x184564, _0x4e75c4) => {
                const _0x39a30b = _0x4cf719;
                var _0x202a84;
                let _0x384379 =
                  (_0x202a84 =
                    this[_0x39a30b(0x227)][_0x39a30b(0x345)](_0x5d8ba0)) ==
                    null ||
                  (_0x202a84 = _0x202a84[_0x39a30b(0x345)](_0x788cbf)) == null
                    ? void 0x0
                    : _0x202a84["get"](_0x4e75c4);
                _0x384379 &&
                  _0x5b1d64[_0x39a30b(0x19f)]({
                    unitId: _0x5d8ba0,
                    subUnitId: _0x788cbf,
                    pivotTableId: _0x4e75c4,
                    type: "set",
                    view: _0x384379,
                  });
              });
            });
          });
          let _0x2ab5e8 = new Set(),
            _0xa65b6a = [];
          (_0x5b1d64[_0x46efda(0x231)]((_0x2ff757) => {
            const _0x70d001 = _0x46efda;
            this["_clearRenderCacheData"](_0x2ff757);
            let _0xc0902f = this[_0x70d001(0x191)](_0x2ff757, !0x1);
            if (_0xc0902f) {
              var _0x529d69;
              _0xa65b6a["push"]({
                unitId: _0x2ff757["unitId"],
                subUnitId: _0x2ff757[_0x70d001(0x1bf)],
                pivotTableId: _0x2ff757[_0x70d001(0x4a4)],
                type: _0x2ff757[_0x70d001(0x3dd)],
                valueMatrix: _0xc0902f["matrix"],
                rangesCache: _0xc0902f[_0x70d001(0x1a8)],
                isEmpty:
                  (_0x529d69 = this[_0x70d001(0x26e)][_0x70d001(0x2e6)](
                    _0x2ff757["unitId"],
                    _0x2ff757[_0x70d001(0x1bf)],
                    _0x2ff757["pivotTableId"],
                  )) == null
                    ? void 0x0
                    : _0x529d69[_0x70d001(0x208)],
              });
            }
            _0x2ab5e8[_0x70d001(0x3db)](
              _0x2ff757[_0x70d001(0x386)] + "\x0a" + _0x2ff757["subUnitId"],
            );
          }),
            _0xa65b6a[_0x46efda(0x231)]((_0x11a87c) =>
              this[_0x46efda(0x34b)][_0x46efda(0x37c)](_0x11a87c),
            ),
            _0x2ab5e8[_0x46efda(0x231)]((_0x2117f3) => {
              const _0x2f0da4 = _0x46efda;
              let [_0x9f0001, _0x1ffa7d] = _0x2117f3[_0x2f0da4(0x14f)]("\x0a");
              this["markDirty"](_0x9f0001, _0x1ffa7d);
            }));
        }),
    );
  }
  ["_initUnitDisposed"]() {
    this[_0x4d8681(0x1e7)](
      this[_0x4d8681(0x1ec)]
        [_0x4d8681(0x354)](t[_0x4d8681(0x2b3)][_0x4d8681(0x333)])
        [_0x4d8681(0x131)]((_0xdc61f7) => {
          const _0xfac159 = _0x4d8681;
          this[_0xfac159(0x470)](_0xdc61f7[_0xfac159(0x261)]());
        }),
    );
  }
  ["_initLocale"]() {
    this["_textInfo"] = Se(this[_0x3dd84e(0x483)], b, "", {});
  }
  ["updateRenderCache"](_0x371b0a, _0x4c0673 = !0x0) {
    let {
        view: _0x1eda8e,
        unitId: _0x3c66d8,
        subUnitId: _0x33004f,
        pivotTableId: _0xf28535,
        type: _0x19613e,
      } = _0x371b0a,
      _0x1d3f92 = this[_0x3ab108(0x26e)][_0x3ab108(0x2e6)](
        _0x3c66d8,
        _0x33004f,
        _0xf28535,
      );
    if (!_0x1eda8e || !_0x1d3f92 || _0x19613e === _0x3ab108(0x216)) return;
    let {
        pageView: _0x7cbbd,
        cornerView: _0x1d694a,
        rowView: _0x2594d1,
        colView: _0x7a4ac7,
        dataView: _0x2e9c30,
      } = _0x1eda8e,
      _0x346abe = _0x1d3f92[_0x3ab108(0x376)],
      _0x1d5a44 = _0x1d3f92[_0x3ab108(0x208)],
      _0x4fdce5 = this[_0x3ab108(0x3d5)](_0x3c66d8, _0x33004f),
      _0x3d2819 = this["_ensurePivotItemRenderInfoCache"](
        _0x3c66d8,
        _0x33004f,
        _0xf28535,
      ),
      _0xadc646 = this["_localeService"][_0x3ab108(0x47c)]();
    if (
      (this[_0x3ab108(0x39b)](_0x3c66d8, _0x33004f)[_0x3ab108(0x2d0)](
        _0xf28535,
        _0x1eda8e,
      ),
      _0x1d5a44)
    )
      return this["_updateRenderEmptyCache"](
        _0x371b0a,
        _0x4fdce5,
        _0x346abe,
        _0x3d2819,
        _0x4c0673,
      );
    {
      var _0x119708;
      let _0x5dde7e = p(_0x1eda8e, _0x346abe[_0x3ab108(0x1a4)], _0xadc646),
        _0x17eafd = (_0x11ad73) =>
          _0x11ad73[_0x3ab108(0x15f)]((_0x4c0c96) => h(_0x5dde7e, _0x4c0c96)),
        _0x17d70b = F(_0x346abe, _0x7cbbd, !0x0),
        _0x301e61 =
          _0x7cbbd[_0x3ab108(0x15d)] >= 0x0
            ? _0x7cbbd[_0x3ab108(0x15d)] + 0x1
            : 0x0,
        _0x3c09e1 = _0x1d694a[_0x3ab108(0x172)](),
        _0x2bcebc = _0x1d694a[_0x3ab108(0x2f0)](),
        _0x5f4c25 = +(_0x17d70b[_0x3ab108(0x2b6)] > 0x0),
        _0x5931b5 = F(
          {
            row: _0x346abe[_0x3ab108(0x292)] + _0x301e61 + _0x5f4c25,
            col: _0x346abe[_0x3ab108(0x1a4)],
          },
          _0x1d694a,
          !0x1,
          !0x1,
        ),
        _0x5dec3b = F(
          {
            row:
              _0x346abe[_0x3ab108(0x292)] + _0x301e61 + _0x5f4c25 + _0x3c09e1,
            col: _0x346abe[_0x3ab108(0x1a4)],
          },
          _0x2594d1,
          !0x1,
          !0x0,
        ),
        _0x2a111f = F(
          {
            row: _0x346abe[_0x3ab108(0x292)] + _0x301e61 + _0x5f4c25,
            col: _0x346abe[_0x3ab108(0x1a4)] + _0x2bcebc,
          },
          _0x7a4ac7,
          !0x1,
          !0x0,
        ),
        _0x5379fd = F(
          {
            row:
              _0x346abe[_0x3ab108(0x292)] + _0x301e61 + _0x5f4c25 + _0x3c09e1,
            col: _0x346abe[_0x3ab108(0x1a4)] + _0x2bcebc,
          },
          _0x2e9c30,
          !0x1,
          !0x1,
        );
      ((_0x3d2819[_0x3ab108(0x4ac)] = {
        rowRanges: _0x17eafd(_0x5dec3b),
        colRanges: _0x17eafd(_0x2a111f),
        cornerRanges: _0x17eafd(_0x5931b5),
        dataRanges: _0x17eafd(_0x5379fd),
        pageRanges: _0x17eafd(_0x17d70b),
      }),
        (_0x3d2819[_0x3ab108(0x23e)] = _0x5dde7e));
      let _0x4df405 =
          (_0x119708 = this[_0x3ab108(0x1ec)][_0x3ab108(0x2a4)](
            _0x3c66d8,
            t[_0x3ab108(0x2b3)][_0x3ab108(0x333)],
          )) == null
            ? void 0x0
            : _0x119708["getDateSystem"](),
        {
          valueMatrix: _0x5087ee,
          rowInfo: _0x1fc4a2,
          colInfo: _0x2ae298,
          cornerInfo: _0x2fc35d,
          rowHeaderMap: _0x5dcb39,
          colHeaderMap: _0x5521f3,
        } = A(
          this[_0x3ab108(0x483)],
          _0x1eda8e,
          _0x1d3f92,
          this[_0x3ab108(0x32d)],
          _0xadc646,
          _0x4df405,
        );
      return (
        (_0x3d2819[_0x3ab108(0x440)] = {
          rowInfo: _0x1fc4a2,
          colInfo: _0x2ae298,
          cornerInfo: _0x2fc35d,
        }),
        (_0x3d2819[_0x3ab108(0x4a3)] = {
          rowHeaderMap: _0x5dcb39,
          colHeaderMap: _0x5521f3,
        }),
        _0x5087ee[_0x3ab108(0x231)]((_0x491e66, _0x29b59b) => {
          const _0x4d6b7d = _0x3ab108;
          Object[_0x4d6b7d(0x2a8)](_0x29b59b)[_0x4d6b7d(0x231)]((_0x337f07) => {
            const _0x39ca81 = _0x4d6b7d;
            let _0x5c6ec6 = +_0x337f07,
              _0x478add = _0x5087ee[_0x39ca81(0x197)](_0x491e66, _0x5c6ec6);
            _0x4fdce5[_0x39ca81(0x300)](_0x491e66, _0x5c6ec6, _0x478add);
          });
        }),
        _0x4c0673 &&
          this[_0x3ab108(0x34b)][_0x3ab108(0x37c)]({
            unitId: _0x3c66d8,
            subUnitId: _0x33004f,
            valueMatrix: _0x4fdce5,
            rangesCache: _0x3d2819[_0x3ab108(0x4ac)],
            pivotTableId: _0xf28535,
            type: _0x371b0a["type"],
          }),
        this[_0x3ab108(0x26e)][_0x3ab108(0x34a)](
          _0x3c66d8,
          _0x33004f,
          _0xf28535,
          _0x4fdce5,
          _0x3d2819[_0x3ab108(0x4ac)],
        ),
        this[_0x3ab108(0x3a5)][_0x3ab108(0x365)](
          _0x3c66d8,
          _0x33004f,
          I,
          this[_0x3ab108(0x393)](_0x3d2819[_0x3ab108(0x4ac)], _0xf28535),
        ),
        { rangeCache: _0x3d2819[_0x3ab108(0x4ac)], matrix: _0x4fdce5 }
      );
    }
  }
  ["_updateRenderEmptyCache"](
    _0x191cf0,
    _0x18a9ae,
    _0x2899d9,
    _0x9a593b,
    _0x4c35e9,
  ) {
    let {
        unitId: _0x5f3b80,
        subUnitId: _0x42c543,
        pivotTableId: _0x19ddb6,
      } = _0x191cf0,
      _0x1f195a = {
        filter: this["_localeService"]["t"](_0xb29fa0(0x299)),
        row: this[_0xb29fa0(0x2b0)]["t"](_0xb29fa0(0x243)),
        column: this["_localeService"]["t"]("sheets-pivot.emptyPivot.column"),
        values: this[_0xb29fa0(0x2b0)]["t"](_0xb29fa0(0x45c)),
      },
      _0x3a47b5 = this["_localeService"]["getDirection"](),
      { matrixCache: _0x2fbd09, rangesCache: _0x94ef54 } = q(
        _0x1f195a,
        _0x2899d9,
        _0x3a47b5,
      );
    return (
      _0x2fbd09[_0xb29fa0(0x1e5)]((_0x37299a, _0x3b2a41, _0x44542a) => {
        const _0x582ef8 = _0xb29fa0;
        _0x18a9ae[_0x582ef8(0x300)](_0x37299a, _0x3b2a41, _0x44542a);
      }),
      (_0x9a593b[_0xb29fa0(0x4ac)] = _0x94ef54),
      (_0x9a593b[_0xb29fa0(0x23e)] = {
        startColumn: _0x2899d9[_0xb29fa0(0x1a4)],
        endColumn: _0x2899d9[_0xb29fa0(0x1a4)] + 0x6 - 0x1,
        direction: _0x3a47b5,
      }),
      _0x4c35e9 &&
        this[_0xb29fa0(0x34b)][_0xb29fa0(0x37c)]({
          unitId: _0x5f3b80,
          subUnitId: _0x42c543,
          valueMatrix: _0x18a9ae,
          rangesCache: _0x94ef54,
          pivotTableId: _0x19ddb6,
          type: _0x191cf0["type"],
          isEmpty: !0x0,
        }),
      this[_0xb29fa0(0x26e)]["updateViewInfo"](
        _0x5f3b80,
        _0x42c543,
        _0x19ddb6,
        _0x18a9ae,
        _0x94ef54,
      ),
      this[_0xb29fa0(0x3a5)][_0xb29fa0(0x365)](
        _0x5f3b80,
        _0x42c543,
        I,
        this[_0xb29fa0(0x393)](_0x94ef54, _0x19ddb6),
      ),
      { rangeCache: _0x9a593b["rangesInfo"], matrix: _0x18a9ae }
    );
  }
  ["_createExclusiveRange"](_0x1d0763, _0x1b4686) {
    let _0x1b0137 = [],
      _0x47307e = Ce(_0x1d0763);
    for (let _0x57666d of _0x47307e)
      _0x1b0137[_0x3854a7(0x19f)]({ groupId: _0x1b4686, range: _0x57666d });
    return _0x1b0137;
  }
  ["clearRenderCache"](_0x244622) {
    this["_clearRenderCacheData"](_0x244622);
    let {
      pivotTableId: _0x42905c,
      unitId: _0x2e9503,
      subUnitId: _0x341b1f,
    } = _0x244622;
    if (!_0x42905c || !_0x2e9503 || !_0x341b1f) return;
    let _0x240c2b = this[_0x3fd51d(0x3d5)](_0x2e9503, _0x341b1f);
    this[_0x3fd51d(0x34b)]["next"]({
      unitId: _0x2e9503,
      subUnitId: _0x341b1f,
      valueMatrix: _0x240c2b,
      pivotTableId: _0x42905c,
      rangesCache: void 0x0,
      type: _0x244622[_0x3fd51d(0x3dd)],
    });
  }
  ["_clearRenderCacheData"](_0x49865e) {
    var _0x276f1a, _0x420b7f;
    let {
      pivotTableId: _0x38608e,
      unitId: _0x34e37b,
      subUnitId: _0x34e528,
    } = _0x49865e;
    if (!_0x38608e || !_0x34e37b || !_0x34e528) return;
    let _0x277e0f = this[_0x959035(0x3d5)](_0x34e37b, _0x34e528),
      _0x259dbd =
        (_0x276f1a =
          this["_pivotRenderInfoCache"][_0x959035(0x345)](_0x34e37b)) == null ||
        (_0x276f1a = _0x276f1a["get"](_0x34e528)) == null
          ? void 0x0
          : _0x276f1a["get"](_0x38608e);
    if (_0x259dbd != null && _0x259dbd[_0x959035(0x4ac)]) {
      for (let _0x2d2dd4 of Object[_0x959035(0x2a8)](_0x259dbd["rangesInfo"]))
        _0x259dbd[_0x959035(0x4ac)][_0x2d2dd4][_0x959035(0x231)](
          (_0x856f7e) => {
            const _0x43ac16 = _0x959035;
            for (
              let _0x45cb91 = _0x856f7e[_0x43ac16(0x3f1)];
              _0x45cb91 <= _0x856f7e[_0x43ac16(0x150)];
              _0x45cb91++
            )
              for (
                let _0x58d0c6 = _0x856f7e["startColumn"];
                _0x58d0c6 <= _0x856f7e[_0x43ac16(0x2bc)];
                _0x58d0c6++
              )
                _0x277e0f["realDeleteValue"](_0x45cb91, _0x58d0c6);
          },
        );
    }
    if (_0x259dbd) {
      var _0x197b53;
      (_0x197b53 = this[_0x959035(0x1c8)][_0x959035(0x345)](_0x34e37b)) ==
        null ||
        (_0x197b53 = _0x197b53[_0x959035(0x345)](_0x34e528)) == null ||
        _0x197b53[_0x959035(0x216)](_0x38608e);
    }
    ((_0x420b7f = this[_0x959035(0x227)][_0x959035(0x345)](_0x34e37b)) ==
      null ||
      (_0x420b7f = _0x420b7f[_0x959035(0x345)](_0x34e528)) == null ||
      _0x420b7f[_0x959035(0x216)](_0x38608e),
      this[_0x959035(0x3a5)]["clearExclusiveRangesByGroupId"](
        _0x34e37b,
        _0x34e528,
        I,
        _0x38608e,
      ));
  }
  ["_ensurePivotItemRenderInfoCache"](_0x1329ba, _0x424d07, _0x2a5228) {
    var _0x4a3601, _0x4fa6b2;
    if (
      (this[_0x2849b7(0x1c8)][_0x2849b7(0x442)](_0x1329ba) ||
        this[_0x2849b7(0x1c8)][_0x2849b7(0x2d0)](_0x1329ba, new Map()),
      !(
        (_0x4a3601 =
          this["_pivotRenderInfoCache"][_0x2849b7(0x345)](_0x1329ba)) != null &&
        _0x4a3601[_0x2849b7(0x442)](_0x424d07)
      ))
    ) {
      var _0x2f7c92;
      (_0x2f7c92 =
        this["_pivotRenderInfoCache"][_0x2849b7(0x345)](_0x1329ba)) == null ||
        _0x2f7c92[_0x2849b7(0x2d0)](_0x424d07, new Map());
    }
    if (!(
      (_0x4fa6b2 = this[_0x2849b7(0x1c8)][_0x2849b7(0x345)](_0x1329ba)) !=
        null &&
      (_0x4fa6b2 = _0x4fa6b2[_0x2849b7(0x345)](_0x424d07)) != null &&
      _0x4fa6b2["has"](_0x2a5228)
    )) {
      var _0x4b072a;
      (_0x4b072a = this[_0x2849b7(0x1c8)][_0x2849b7(0x345)](_0x1329ba)) ==
        null ||
        (_0x4b072a = _0x4b072a[_0x2849b7(0x345)](_0x424d07)) == null ||
        _0x4b072a[_0x2849b7(0x2d0)](_0x2a5228, {});
    }
    return this["_pivotRenderInfoCache"]
      ["get"](_0x1329ba)
      [_0x2849b7(0x345)](_0x424d07)
      [_0x2849b7(0x345)](_0x2a5228);
  }
  ["_ensurePivotItemRenderValueMatrixCache"](_0x432648, _0x277dba) {
    var _0x4db02c;
    if (
      (this[_0x349a68(0x140)][_0x349a68(0x442)](_0x432648) ||
        this[_0x349a68(0x140)][_0x349a68(0x2d0)](_0x432648, new Map()),
      !(
        (_0x4db02c = this[_0x349a68(0x140)][_0x349a68(0x345)](_0x432648)) !=
          null && _0x4db02c[_0x349a68(0x442)](_0x277dba)
      ))
    ) {
      var _0xca4492;
      (_0xca4492 = this[_0x349a68(0x140)][_0x349a68(0x345)](_0x432648)) ==
        null ||
        _0xca4492[_0x349a68(0x2d0)](_0x277dba, new t[_0x349a68(0x38b)]());
    }
    return this[_0x349a68(0x140)]
      [_0x349a68(0x345)](_0x432648)
      [_0x349a68(0x345)](_0x277dba);
  }
  ["_ensurePivotViewCache"](_0x521270, _0x233ea3) {
    let _0x55c687 = this[_0x243331(0x227)]["get"](_0x521270);
    _0x55c687 ||
      ((_0x55c687 = new Map()),
      this["_pivotViewCache"]["set"](_0x521270, _0x55c687));
    let _0x42d5e4 = _0x55c687[_0x243331(0x345)](_0x233ea3);
    return (
      _0x42d5e4 ||
        ((_0x42d5e4 = new Map()),
        _0x55c687[_0x243331(0x2d0)](_0x233ea3, _0x42d5e4)),
      _0x42d5e4
    );
  }
  ["getPivotTableCellData"](_0x463c2d, _0xf32ef5, _0x354ba3, _0x1226b2) {
    var _0x15af2b;
    let _0xb03604 =
      (_0x15af2b =
        this["_pivotRenderValueMatrixCache"][_0x167dd3(0x345)](_0x463c2d)) ==
        null || (_0x15af2b = _0x15af2b["get"](_0xf32ef5)) == null
        ? void 0x0
        : _0x15af2b[_0x167dd3(0x197)](_0x354ba3, _0x1226b2);
    if (_0xb03604 != null) return _0xb03604;
  }
  ["getPivotTableIdByCell"](_0x4e7cc7, _0x46735a, _0x460829, _0x11dd00) {
    var _0x5babd4;
    let _0x2421a6 = (0x0, t["cellToRange"])(_0x460829, _0x11dd00),
      _0x155043 =
        (_0x5babd4 = this[_0x309729(0x1c8)]["get"](_0x4e7cc7)) == null
          ? void 0x0
          : _0x5babd4[_0x309729(0x345)](_0x46735a);
    if (_0x155043)
      return Array["from"](_0x155043[_0x309729(0x2a8)]())[_0x309729(0x372)](
        (_0x3d61b2) => {
          const _0x24b07f = _0x309729;
          let _0x1048dc = _0x155043[_0x24b07f(0x345)](_0x3d61b2),
            _0x4c54e1 =
              _0x1048dc == null ? void 0x0 : _0x1048dc[_0x24b07f(0x4ac)];
          return _0x4c54e1
            ? Object[_0x24b07f(0x2a8)](_0x4c54e1)[_0x24b07f(0x26b)](
                (_0x2fa8c2) =>
                  _0x4c54e1[_0x2fa8c2][_0x24b07f(0x26b)]((_0x52226e) =>
                    t["Rectangle"][_0x24b07f(0x2e3)](_0x52226e, _0x2421a6),
                  ),
              )
            : !0x1;
        },
      );
  }
  ["getIntersectsPivotTable"](_0x5ead39, _0x368c59, _0x420d52) {
    var _0x197812;
    let _0x37feb9 =
        (_0x197812 = this[_0xde5d0f(0x1c8)][_0xde5d0f(0x345)](_0x5ead39)) ==
        null
          ? void 0x0
          : _0x197812[_0xde5d0f(0x345)](_0x368c59),
      _0x185dfc = [];
    return (
      _0x37feb9 &&
        Array[_0xde5d0f(0x144)](_0x37feb9["keys"]())[_0xde5d0f(0x231)](
          (_0x1a6fb8) => {
            const _0x36d75d = _0xde5d0f;
            let _0x37d7c = _0x37feb9[_0x36d75d(0x345)](_0x1a6fb8),
              _0x4106f8 =
                _0x37d7c == null ? void 0x0 : _0x37d7c[_0x36d75d(0x4ac)];
            if (_0x4106f8)
              for (let _0x4c888b of Object["values"](_0x4106f8)) {
                let _0x5bfe97 = !0x1;
                for (let _0x1dc010 of _0x4c888b)
                  if (
                    t[_0x36d75d(0x3e8)][_0x36d75d(0x1a3)](_0x1dc010, _0x420d52)
                  ) {
                    (_0x185dfc[_0x36d75d(0x19f)](_0x1a6fb8),
                      (_0x5bfe97 = !0x0));
                    break;
                  }
                if (_0x5bfe97) break;
              }
          },
        ),
      _0x185dfc
    );
  }
  ["getSubUnitPivotMatrix"](_0x1c9bd6, _0x45d177) {
    var _0x3b7b5e;
    return (
      ((_0x3b7b5e = this[_0x11a357(0x140)][_0x11a357(0x345)](_0x1c9bd6)) == null
        ? void 0x0
        : _0x3b7b5e[_0x11a357(0x345)](_0x45d177)) ?? new t["ObjectMatrix"]()
    );
  }
  ["getSubUnitPivotRenderCache"](_0x2afa7c, _0x530127) {
    var _0x2ec646;
    return (_0x2ec646 =
      this["_pivotRenderInfoCache"][_0x11e053(0x345)](_0x2afa7c)) == null
      ? void 0x0
      : _0x2ec646["get"](_0x530127);
  }
  ["getPivotItemRenderInfoCache"](_0x4e3614, _0x1c4683, _0x5684e2) {
    var _0x16710d;
    return (_0x16710d = this[_0x374d0a(0x1c8)][_0x374d0a(0x345)](_0x4e3614)) ==
      null || (_0x16710d = _0x16710d[_0x374d0a(0x345)](_0x1c4683)) == null
      ? void 0x0
      : _0x16710d["get"](_0x5684e2);
  }
  ["deleteUnitId"](_0x16cfc5) {
    (this[_0x58b09c(0x1c8)][_0x58b09c(0x216)](_0x16cfc5),
      this[_0x58b09c(0x140)][_0x58b09c(0x216)](_0x16cfc5),
      this[_0x58b09c(0x227)][_0x58b09c(0x216)](_0x16cfc5));
  }
  ["markDirty"](_0x1fca90, _0x5cf8fc) {
    this[_0xc35bc7(0x406)][_0xc35bc7(0x37c)]({
      unitId: _0x1fca90,
      subUnitId: _0x5cf8fc,
    });
  }
};
X = U(
  [
    H(0x0, (0x0, t["Inject"])(t["LocaleService"])),
    H(0x1, (0x0, t["Inject"])(t["Injector"])),
    H(0x2, (0x0, t["Inject"])(Y)),
    H(0x3, (0x0, t["Inject"])(t["IUniverInstanceService"])),
    H(0x4, (0x0, t["Inject"])(r["IExclusiveRangeService"])),
  ],
  X,
);
const Ye = new Set([
  e["PivotCellStyleTypeEnum"]["FilterAll"],
  e["PivotCellStyleTypeEnum"]["FilterPartial"],
  e["PivotCellStyleTypeEnum"]["FilterSingle"],
  e["PivotCellStyleTypeEnum"]["FilteredSortNone"],
  e["PivotCellStyleTypeEnum"]["FilteredSortAsc"],
  e["PivotCellStyleTypeEnum"]["FilteredSortDesc"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortNone"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortAsc"],
  e["PivotCellStyleTypeEnum"]["FilterNoneSortDesc"],
]);
let Z = class extends t["Disposable"] {
  constructor(_0x1fffdd, _0x2557e7, _0x3051d8) {
    (super(),
      (this[_0x578eee(0x17f)] = _0x1fffdd),
      (this[_0x578eee(0x307)] = _0x2557e7),
      (this["_localeService"] = _0x3051d8),
      V(
        this,
        _0x578eee(0x49b),
        new t[_0x578eee(0x193)]({ PIVOT_PERFORM_CHECK: R }),
      ),
      V(
        this,
        "interceptor",
        new t[_0x578eee(0x3bb)]({ PIVOT_MUTATION_GENERATE: ne }),
      ),
      this[_0x578eee(0x48b)]());
  }
  ["_init"]() {
    this["_initViewModelBySheetInterceptor"]();
  }
  ["getPivotPerformCheck"](_0x514330) {
    return this[_0x55ec7a(0x49b)]["fetchThroughAsyncInterceptors"](R)(
      !0x1,
      _0x514330,
    );
  }
  ["_initViewModelBySheetInterceptor"]() {
    this[_0x2d075a(0x1e7)](
      this[_0x2d075a(0x17f)][_0x2d075a(0x260)](
        r[_0x2d075a(0x3a8)][_0x2d075a(0x447)],
        {
          priority: 0xc8,
          effect:
            t[_0x2d075a(0x40c)][_0x2d075a(0x1df)] |
            t["InterceptorEffectEnum"][_0x2d075a(0x4ad)],
          handler: (_0x3f908a, _0x265c85, _0x39dfdb) => {
            const _0x3c4f31 = _0x2d075a;
            let {
                row: _0x2186ad,
                col: _0x15e189,
                unitId: _0x4208b2,
                subUnitId: _0x466759,
                workbook: _0x4d1320,
              } = _0x265c85,
              _0x57ede6 = this[_0x3c4f31(0x307)][_0x3c4f31(0x1dc)](
                _0x4208b2,
                _0x466759,
                _0x2186ad,
                _0x15e189,
              );
            if (!_0x57ede6) return _0x39dfdb(_0x3f908a);
            let _0x19ba4a = { ..._0x3f908a };
            ((_0x57ede6["v"] || _0x57ede6["v"] === 0x0) &&
              (_0x19ba4a["v"] = _0x57ede6["v"]),
              _0x57ede6["t"] && (_0x19ba4a["t"] = _0x57ede6["t"]));
            let _0x237be8 =
                (typeof (_0x3f908a == null ? void 0x0 : _0x3f908a["s"]) ==
                _0x3c4f31(0x458)
                  ? _0x4d1320[_0x3c4f31(0x439)]()[_0x3c4f31(0x345)](
                      _0x3f908a == null ? void 0x0 : _0x3f908a["s"],
                    )
                  : _0x3f908a == null
                    ? void 0x0
                    : _0x3f908a["s"]) || {},
              _0x35830b = _0x4d1320[_0x3c4f31(0x439)]()[_0x3c4f31(0x345)](
                _0x57ede6["s"],
              ),
              _0x4a7be4 = { ..._0x35830b, ..._0x237be8 };
            _0x35830b != null &&
              _0x35830b["n"] &&
              (_0x4a7be4["n"] = _0x35830b["n"]);
            let _0x4d17d8 = this[_0x3c4f31(0x2b0)]["getDirection"]();
            return (
              _0x4d17d8 === _0x3c4f31(0x30b) &&
                _0x57ede6[_0x3c4f31(0x424)] &&
                Ye[_0x3c4f31(0x442)](_0x57ede6[_0x3c4f31(0x424)]) &&
                ((_0x4a7be4["ht"] = t[_0x3c4f31(0x1d1)]["RIGHT"]),
                (_0x19ba4a[_0x3c4f31(0x27a)] = {
                  ..._0x19ba4a[_0x3c4f31(0x27a)],
                  leftOffset: 0x10,
                })),
              (_0x19ba4a["s"] =
                _0x4d1320[_0x3c4f31(0x439)]()[_0x3c4f31(0x300)](_0x4a7be4)),
              (_0x57ede6[_0x3c4f31(0x424)] ===
                e[_0x3c4f31(0x2e2)][_0x3c4f31(0x245)] ||
                _0x57ede6[_0x3c4f31(0x424)] ===
                  e[_0x3c4f31(0x2e2)][_0x3c4f31(0x334)]) &&
                ((_0x19ba4a["fontRenderExtension"] = {}),
                _0x4d17d8 === _0x3c4f31(0x30b)
                  ? (_0x19ba4a[_0x3c4f31(0x27a)][_0x3c4f31(0x181)] = 0x10)
                  : (_0x19ba4a[_0x3c4f31(0x27a)]["leftOffset"] = 0x10)),
              _0x39dfdb(_0x19ba4a)
            );
          },
        },
      ),
    );
  }
};
Z = U(
  [
    H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])),
    H(0x1, (0x0, t["Inject"])(X)),
    H(0x2, (0x0, t["Inject"])(t["LocaleService"])),
  ],
  Z,
);
const Xe = {
    id: "sheet.mutation.add-group-collection",
    type: t["CommandType"]["MUTATION"],
    handler: (_0x2f1bea, _0x586e43) => {
      if (!_0x586e43) return !0x1;
      if (
        _0x2f1bea[_0x52ebfa(0x345)](t["IConfigService"])[_0x52ebfa(0x3c0)](
          _0x52ebfa(0x285),
        )
      )
        return !0x0;
      let {
          pivotTableId: _0x5ce2c8,
          fieldJSON: _0x2c9960,
          unitId: _0x1b6da3,
          subUnitId: _0xc20fdd,
        } = _0x586e43,
        _0x131e92,
        {
          dataFieldType: _0x32cfc4,
          id: _0x5afc4c,
          name: _0x3b2b30,
          hexCode: _0x464aa5,
          originalFieldId: _0x243327,
        } = _0x2c9960;
      if (
        (_0x32cfc4 === e[_0x52ebfa(0x1f3)][_0x52ebfa(0x380)] &&
          (_0x131e92 = new e[_0x52ebfa(0x257)](
            _0x5afc4c,
            _0x3b2b30,
            _0x464aa5,
            _0x243327,
            _0x52ebfa(0x40b) in _0x2c9960
              ? _0x2c9960[_0x52ebfa(0x40b)]
              : void 0x0,
          )),
        !_0x131e92)
      )
        return !0x1;
      let _0x4da15a = _0x2f1bea["get"](K),
        _0x4f474d = _0x4da15a[_0x52ebfa(0x430)](_0x1b6da3),
        _0x20a5fa = _0x4f474d["getCollection"](_0x5ce2c8);
      (_0x4f474d["addDataFieldWithoutUnitInfo"](_0x131e92),
        _0x20a5fa[_0x52ebfa(0x4bf)](
          _0x131e92[_0x52ebfa(0x1b6)](),
          _0x131e92[_0x52ebfa(0x1f7)](),
        ));
      let _0xe67579 = _0x20a5fa[_0x52ebfa(0x1f8)](
        _0x131e92[_0x52ebfa(0x415)](),
      );
      if (_0xe67579) {
        let _0x939668 = _0x2f1bea[_0x52ebfa(0x345)](
          t["IUniverInstanceService"],
        )[_0x52ebfa(0x2a4)](_0x1b6da3, t[_0x52ebfa(0x2b3)]["UNIVER_SHEET"]);
        (Ge(_0x939668 == null ? void 0x0 : _0x939668[_0x52ebfa(0x475)]()),
          _0x131e92[_0x52ebfa(0x4b1)](_0xe67579));
      }
      let _0x4c4c3c = _0x4da15a[_0x52ebfa(0x2e6)](
        _0x1b6da3,
        _0xc20fdd,
        _0x5ce2c8,
      );
      return (
        _0x4da15a["addDirtyPivotTable"]({
          unitId: _0x1b6da3,
          subUnitId: _0xc20fdd,
          token: _0x5ce2c8,
          type: "set",
          pivotConfig: _0x4c4c3c,
        }),
        !0x0
      );
    },
  },
  Ze = {
    id: "sheet.mutation.remove-group-collection",
    type: t["CommandType"]["MUTATION"],
    handler: (_0xb8f839, _0x4845ca) => {
      if (!_0x4845ca) return !0x1;
      if (
        _0xb8f839[_0x5c335a(0x345)](t["IConfigService"])[_0x5c335a(0x3c0)](
          _0x5c335a(0x285),
        )
      )
        return !0x0;
      let {
          pivotTableId: _0x5e76fa,
          dataFieldId: _0x53385f,
          unitId: _0x1118c0,
          subUnitId: _0x4d93e3,
        } = _0x4845ca,
        _0x118224 = _0xb8f839[_0x5c335a(0x345)](K),
        _0x3f43a1 = _0x118224[_0x5c335a(0x430)](_0x1118c0);
      _0x3f43a1[_0x5c335a(0x3f3)](_0x5e76fa)[_0x5c335a(0x18e)](_0x53385f);
      let _0xc0a533 = !0x0;
      for (let _0x3e85cb in _0x3f43a1["collections"])
        if (
          _0x3f43a1[_0x5c335a(0x1b9)][_0x3e85cb]["getFieldIds"]()[
            _0x5c335a(0x238)
          ](_0x53385f)
        ) {
          _0xc0a533 = !0x1;
          break;
        }
      _0xc0a533 && _0x3f43a1[_0x5c335a(0x1ff)](_0x53385f);
      let _0x6f3ee2 = _0x118224[_0x5c335a(0x2e6)](
        _0x1118c0,
        _0x4d93e3,
        _0x5e76fa,
      );
      return (
        _0x118224[_0x5c335a(0x3b0)]({
          unitId: _0x1118c0,
          subUnitId: _0x4d93e3,
          token: _0x5e76fa,
          type: "set",
          pivotConfig: _0x6f3ee2,
        }),
        !0x0
      );
    },
  };
function Qe(_0x2c6a77, _0x5e3acd) {
  switch (_0x5e3acd) {
    case e["PivotTableFiledAreaEnum"][_0x1533b4(0x1df)]:
      return _0x2c6a77[_0x1533b4(0x185)];
    case e[_0x1533b4(0x200)]["Filter"]:
      return _0x2c6a77["filterFields"];
    case e[_0x1533b4(0x200)][_0x1533b4(0x289)]:
      return _0x2c6a77[_0x1533b4(0x39f)];
    case e[_0x1533b4(0x200)][_0x1533b4(0x374)]:
      return _0x2c6a77["columnFields"];
    default:
      return [];
  }
}
function $e(_0x2eff17, _0x132255) {
  return (
    _0x2eff17[_0x503f79(0x336)][_0x132255] || _0x2eff17["dimension"][_0x132255]
  );
}
function et(_0x2583f, _0x3056db) {
  let { area: _0x23b86c, fieldJson: _0x4ed648, index: _0x5e5ee8 } = _0x3056db;
  (_0x23b86c === e[_0x46f491(0x200)][_0x46f491(0x1df)]
    ? (_0x2583f[_0x46f491(0x336)][_0x4ed648["id"]] = _0x4ed648)
    : (_0x2583f[_0x46f491(0x230)][_0x4ed648["id"]] = _0x4ed648),
    Qe(_0x2583f, _0x23b86c)[_0x46f491(0x3f6)](_0x5e5ee8, 0x0, _0x4ed648["id"]));
}
function tt(_0x4f5157, _0xfe630b) {
  let { area: _0x3fd600, fieldId: _0x1785f8, index: _0xdab25b } = _0xfe630b;
  (_0x3fd600 === e[_0x2f7136(0x200)][_0x2f7136(0x1df)]
    ? delete _0x4f5157[_0x2f7136(0x336)][_0x1785f8]
    : delete _0x4f5157[_0x2f7136(0x230)][_0x1785f8],
    Qe(_0x4f5157, _0x3fd600)["splice"](_0xdab25b, 0x1));
}
function nt(_0x5c6147, _0x4d3d67) {
  let { fieldId: _0x4c8e52, name: _0x23c0d9 } = _0x4d3d67,
    _0xac0453 = $e(_0x5c6147, _0x4c8e52);
  _0xac0453 && (_0xac0453[_0x1063f0(0x37f)] = _0x23c0d9);
}
function rt(_0x5345c3, _0x46a270) {
  let { fieldId: _0xdc23c2, collapse: _0x4cb67b, item: _0x596895 } = _0x46a270;
  _0x596895 === void 0x0
    ? (_0x5345c3[_0x5d526e(0x1ea)][_0xdc23c2] = _0x4cb67b)
    : ((_0x5345c3["collapseInfo"][_0xdc23c2] =
        _0x5345c3[_0x5d526e(0x1ea)][_0xdc23c2] || {}),
      (_0x5345c3[_0x5d526e(0x1ea)][_0xdc23c2][_0x596895] = _0x4cb67b));
}
function it(_0x25f264, _0x394f63) {
  let { fieldId: _0x20491d, format: _0x316bba } = _0x394f63,
    _0x4851c1 = $e(_0x25f264, _0x20491d);
  _0x4851c1 && (_0x4851c1[_0x4dd23c(0x1a6)] = _0x316bba);
}
function at(_0x819ee0, _0x22c3b8) {
  let { fieldId: _0x23ff39, filterInfo: _0x58c8af } = _0x22c3b8,
    _0x5e70ca = $e(_0x819ee0, _0x23ff39);
  _0x5e70ca && (_0x5e70ca[_0x46daf5(0x49c)] = _0x58c8af);
}
function ot(_0x5693b1, _0x5783a9) {
  let {
      fieldId: _0x5646f0,
      filterInfo: _0x388961,
      index: _0xb2573f,
    } = _0x5783a9,
    _0x3e1f62 = _0x5693b1[_0x5912cc(0x36a)],
    _0x580986 = _0x3e1f62[_0x5912cc(0x22a)](
      (_0x4d79a4) => _0x4d79a4["fieldId"] === _0x5646f0,
    );
  if (
    (_0x580986 !== -0x1 && _0x3e1f62[_0x5912cc(0x3f6)](_0x580986, 0x1),
    _0x388961)
  ) {
    let _0x6f71f6 = Math[_0x5912cc(0x312)](
      Math[_0x5912cc(0x13b)](
        _0xb2573f !== void 0x0 && _0xb2573f >= 0x0
          ? _0xb2573f
          : _0x580986 === -0x1
            ? _0x3e1f62["length"]
            : _0x580986,
        0x0,
      ),
      _0x3e1f62["length"],
    );
    _0x3e1f62[_0x5912cc(0x3f6)](_0x6f71f6, 0x0, {
      fieldId: _0x5646f0,
      filterInfo: {
        ..._0x388961,
        expected: Array["isArray"](_0x388961[_0x5912cc(0x19e)])
          ? _0x388961[_0x5912cc(0x19e)][_0x5912cc(0x3a3)]()
          : _0x388961["expected"],
      },
    });
  }
}
function st(_0x8323e, _0xe17314) {
  let { fieldId: _0x5ae0c8, subtotalType: _0xf951a8 } = _0xe17314,
    _0x40e858 = $e(_0x8323e, _0x5ae0c8);
  _0x40e858 && (_0x40e858[_0xededc0(0x41a)] = _0xf951a8);
}
function ct(_0x3b3f23, _0x344ac4) {
  let {
      fieldId: _0x20067a,
      oldArea: _0x92d3bb,
      area: _0x56a7f2,
      oldIndex: _0x26cf23,
      index: _0x54a92c,
    } = _0x344ac4,
    _0xd01393 =
      _0x92d3bb !== e["PivotTableFiledAreaEnum"]["Value"] &&
      _0x56a7f2 === e[_0x17dfdd(0x200)][_0x17dfdd(0x1df)],
    _0x55dc1c =
      _0x92d3bb === e["PivotTableFiledAreaEnum"][_0x17dfdd(0x1df)] &&
      _0x56a7f2 !== e["PivotTableFiledAreaEnum"][_0x17dfdd(0x1df)];
  if (_0xd01393 || _0x55dc1c) {
    let _0x1f2d69 = $e(_0x3b3f23, _0x20067a);
    _0x1f2d69 &&
      (_0xd01393
        ? (delete _0x3b3f23["dimension"][_0x20067a],
          (_0x3b3f23[_0x17dfdd(0x336)][_0x20067a] = _0x1f2d69))
        : (delete _0x3b3f23[_0x17dfdd(0x336)][_0x20067a],
          (_0x3b3f23[_0x17dfdd(0x230)][_0x20067a] = _0x1f2d69)));
  }
  let _0x5aace6 = Qe(_0x3b3f23, _0x92d3bb),
    _0xcad7f6 = Qe(_0x3b3f23, _0x56a7f2);
  (_0x5aace6[_0x17dfdd(0x3f6)](_0x26cf23, 0x1),
    _0xcad7f6["splice"](_0x54a92c, 0x0, _0x20067a));
}
function lt(_0x32b6b6, _0x3c8904) {
  let { valuePosition: _0x1e304c, index: _0x5c78eb } = _0x3c8904;
  ((_0x32b6b6[_0x186944(0x313)] = _0x1e304c),
    (_0x32b6b6[_0x186944(0x3bd)] = _0x5c78eb));
}
function ut(_0x468e7f, _0xe7c9c8) {
  let {
      tableFieldId: _0x330e8d,
      sourceName: _0x4773ba,
      dataFieldId: _0x595868,
    } = _0xe7c9c8,
    _0x1aea43 = $e(_0x468e7f, _0x330e8d);
  _0x1aea43 &&
    ((_0x1aea43[_0x5e6dfd(0x2cf)] = _0x4773ba),
    (_0x1aea43["dataFieldId"] = _0x595868));
}
function dt(_0x3b3858, _0x53d5bd) {
  let { fieldId: _0x584f6c, sortInfo: _0x5ce6dc } = _0x53d5bd,
    _0x5558c4 = $e(_0x3b3858, _0x584f6c);
  _0x5558c4 && (_0x5558c4[_0x584238(0x42f)] = _0x5ce6dc);
}
function ft(_0xdfa15, _0x4e6c2f) {
  let { fieldId: _0x72e0dc, showDataAs: _0x3eade5 } = _0x4e6c2f,
    _0x57304d = _0xdfa15[_0x52429c(0x336)][_0x72e0dc];
  _0x57304d && (_0x57304d[_0x52429c(0x4a1)] = { ..._0x3eade5 });
}
function pt(_0x353a36, _0x942bdd) {
  let { options: _0x30284d } = _0x942bdd;
  _0x353a36[_0x52ad1d(0x1ab)] = { ..._0x353a36["options"], ..._0x30284d };
}
function mt(_0x5e4f19, _0x3a3aa7) {
  let { layout: _0x1aa5e6 } = _0x3a3aa7;
  _0x5e4f19[_0x74b00a(0x18d)] = _0x1aa5e6;
}
const ht = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.add-pivot-field",
    handler(_0x53e706, _0x3fe294) {
      if (!_0x3fe294) return !0x1;
      if (
        _0x53e706["get"](t[_0x26edac(0x174)])[_0x26edac(0x3c0)](
          _0x26edac(0x285),
        )
      )
        return !0x0;
      let _0x39a712 = _0x53e706[_0x26edac(0x345)](K),
        {
          pivotTableId: _0xfb8497,
          fieldJson: _0x55c5fb,
          area: _0x22ff86,
          index: _0x45dd4d,
          unitId: _0x457a1e,
          subUnitId: _0x611c3f,
        } = _0x3fe294,
        _0x217b78 = _0x39a712[_0x26edac(0x2fb)](_0xfb8497);
      if (!_0x217b78) return !0x1;
      let _0x106575;
      ((_0x106575 =
        _0x22ff86 === e[_0x26edac(0x200)][_0x26edac(0x1df)]
          ? (0x0, e[_0x26edac(0x3ed)])(_0x55c5fb)
          : (0x0, e[_0x26edac(0x29a)])(_0x55c5fb)),
        _0x217b78["addField"](_0x106575, _0x22ff86, _0x45dd4d),
        et(
          _0x39a712[_0x26edac(0x31f)](_0x457a1e, _0x611c3f, _0xfb8497),
          _0x3fe294,
        ));
      let _0xc67382 = _0x39a712[_0x26edac(0x2e6)](
        _0x457a1e,
        _0x611c3f,
        _0xfb8497,
      );
      return (
        _0x39a712[_0x26edac(0x3b0)]({
          unitId: _0x457a1e,
          subUnitId: _0x611c3f,
          token: _0xfb8497,
          type: _0x26edac(0x2d0),
          pivotConfig: _0xc67382,
        }),
        !0x0
      );
    },
  },
  gt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.remove-pivot-field",
    handler(_0x4f6f52, _0x344570) {
      if (!_0x344570) return !0x1;
      if (
        _0x4f6f52[_0x476114(0x345)](t[_0x476114(0x174)])["getConfig"](
          _0x476114(0x285),
        )
      )
        return !0x0;
      let _0x599111 = _0x4f6f52[_0x476114(0x345)](K),
        {
          pivotTableId: _0x5be3a3,
          fieldId: _0x5dab21,
          unitId: _0x36d097,
          subUnitId: _0x5a4caf,
        } = _0x344570,
        _0x22e877 = _0x599111["getPivotTableInstance"](_0x5be3a3);
      if (!_0x22e877) return !0x1;
      (_0x22e877[_0x476114(0x177)](_0x5dab21),
        tt(
          _0x599111["getPivotTableModelConfig"](
            _0x36d097,
            _0x5a4caf,
            _0x5be3a3,
          ),
          _0x344570,
        ));
      let _0x4163e8 = _0x599111[_0x476114(0x2e6)](
        _0x36d097,
        _0x5a4caf,
        _0x5be3a3,
      );
      return (
        _0x599111["addDirtyPivotTable"]({
          unitId: _0x36d097,
          subUnitId: _0x5a4caf,
          token: _0x5be3a3,
          type: _0x476114(0x2d0),
          pivotConfig: _0x4163e8,
        }),
        !0x0
      );
    },
  },
  _t = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.rename-pivot-field",
    handler(_0x146b97, _0x2cf835) {
      if (!_0x2cf835) return !0x1;
      if (
        _0x146b97[_0x173ff0(0x345)](t[_0x173ff0(0x174)])[_0x173ff0(0x3c0)](
          _0x173ff0(0x285),
        )
      )
        return !0x0;
      let _0x5d4cdb = _0x146b97[_0x173ff0(0x345)](K),
        {
          unitId: _0x425625,
          subUnitId: _0x444490,
          pivotTableId: _0x8518db,
          fieldId: _0x3bbab1,
          name: _0x3eae70,
        } = _0x2cf835,
        _0x1b4c7b = _0x5d4cdb["getPivotTableInstance"](_0x8518db);
      return _0x1b4c7b
        ? (_0x1b4c7b["renameField"](_0x3bbab1, _0x3eae70),
          nt(
            _0x5d4cdb[_0x173ff0(0x31f)](_0x425625, _0x444490, _0x8518db),
            _0x2cf835,
          ),
          _0x5d4cdb["addDirtyPivotTable"]({
            unitId: _0x425625,
            subUnitId: _0x444490,
            token: _0x8518db,
            type: _0x173ff0(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  vt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-collapse",
    handler(_0x2133dc, _0x47964d) {
      if (!_0x47964d) return !0x1;
      if (
        _0x2133dc["get"](t[_0xb40728(0x174)])[_0xb40728(0x3c0)](
          _0xb40728(0x285),
        )
      )
        return !0x0;
      let _0x49867a = _0x2133dc[_0xb40728(0x345)](K),
        {
          unitId: _0x264aa1,
          subUnitId: _0x82eb18,
          pivotTableId: _0x44a242,
          fieldId: _0x538bcd,
          collapse: _0x4b1aa4,
          item: _0x4c58f9,
        } = _0x47964d,
        _0x275dd4 = _0x49867a["getPivotTableInstance"](_0x44a242);
      return _0x275dd4
        ? (_0x275dd4[_0xb40728(0x18c)](_0x538bcd, _0x4b1aa4, _0x4c58f9),
          rt(
            _0x49867a[_0xb40728(0x31f)](_0x264aa1, _0x82eb18, _0x44a242),
            _0x47964d,
          ),
          _0x49867a[_0xb40728(0x3b0)]({
            unitId: _0x264aa1,
            subUnitId: _0x82eb18,
            token: _0x44a242,
            type: _0xb40728(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  yt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-format",
    handler(_0x51fadb, _0x59e514) {
      if (!_0x59e514) return !0x1;
      if (
        _0x51fadb[_0x350b85(0x345)](t[_0x350b85(0x174)])[_0x350b85(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0xfbe0d9 = _0x51fadb[_0x350b85(0x345)](K),
        {
          unitId: _0x56bde9,
          subUnitId: _0x4eeaf5,
          pivotTableId: _0x44da95,
          fieldId: _0x5065f2,
          format: _0x3c9bf3,
        } = _0x59e514,
        _0x45887e = _0xfbe0d9[_0x350b85(0x2fb)](_0x44da95);
      return _0x45887e
        ? (_0x45887e[_0x350b85(0x311)](_0x5065f2, _0x3c9bf3),
          it(
            _0xfbe0d9["getPivotTableModelConfig"](
              _0x56bde9,
              _0x4eeaf5,
              _0x44da95,
            ),
            _0x59e514,
          ),
          _0xfbe0d9[_0x350b85(0x3b0)]({
            unitId: _0x56bde9,
            subUnitId: _0x4eeaf5,
            token: _0x44da95,
            type: "set",
          }),
          !0x0)
        : !0x1;
    },
  },
  bt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-filter",
    handler(_0x4acbc0, _0x5997c3) {
      if (!_0x5997c3) return !0x1;
      if (
        _0x4acbc0[_0x44b49f(0x345)](t["IConfigService"])[_0x44b49f(0x3c0)](
          _0x44b49f(0x285),
        )
      )
        return !0x0;
      let _0x136592 = _0x4acbc0[_0x44b49f(0x345)](K),
        {
          unitId: _0xe3c284,
          subUnitId: _0x33742a,
          pivotTableId: _0x199068,
          fieldId: _0x19e76e,
          filterInfo: _0x4169a3,
        } = _0x5997c3,
        _0x42d893 = _0x136592[_0x44b49f(0x2fb)](_0x199068);
      return _0x42d893
        ? (_0x42d893["setLabelFilterInfo"](_0x19e76e, _0x4169a3),
          at(
            _0x136592[_0x44b49f(0x31f)](_0xe3c284, _0x33742a, _0x199068),
            _0x5997c3,
          ),
          _0x136592[_0x44b49f(0x3b0)]({
            unitId: _0xe3c284,
            subUnitId: _0x33742a,
            token: _0x199068,
            type: "set",
          }),
          !0x0)
        : !0x1;
    },
  },
  xt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-layout",
    handler(_0x44bb09, _0xef5266) {
      if (!_0xef5266) return !0x1;
      if (
        _0x44bb09[_0x3655ea(0x345)](t[_0x3655ea(0x174)])[_0x3655ea(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0x2ffef0 = _0x44bb09[_0x3655ea(0x345)](K),
        {
          unitId: _0xac4927,
          subUnitId: _0x1f029d,
          pivotTableId: _0x673aae,
          layout: _0x51adda,
        } = _0xef5266,
        _0x22b83f = _0x2ffef0[_0x3655ea(0x2fb)](_0x673aae);
      return _0x22b83f
        ? (_0x22b83f[_0x3655ea(0x1e0)](_0x51adda),
          mt(
            _0x2ffef0[_0x3655ea(0x31f)](_0xac4927, _0x1f029d, _0x673aae),
            _0xef5266,
          ),
          _0x2ffef0[_0x3655ea(0x3b0)]({
            unitId: _0xac4927,
            subUnitId: _0x1f029d,
            token: _0x673aae,
            type: _0x3655ea(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  St = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-option",
    handler(_0x207991, _0xc569d3) {
      if (!_0xc569d3) return !0x1;
      if (
        _0x207991[_0x209ced(0x345)](t[_0x209ced(0x174)])[_0x209ced(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0x353134 = _0x207991["get"](K),
        {
          unitId: _0x2fb70c,
          subUnitId: _0x43b322,
          pivotTableId: _0x4707b0,
          options: _0x131f40,
        } = _0xc569d3,
        _0x2e6b79 = _0x353134[_0x209ced(0x2fb)](_0x4707b0);
      return _0x2e6b79
        ? (_0x2e6b79[_0x209ced(0x476)](_0x131f40),
          pt(
            _0x353134["getPivotTableModelConfig"](
              _0x2fb70c,
              _0x43b322,
              _0x4707b0,
            ),
            _0xc569d3,
          ),
          _0x353134[_0x209ced(0x3b0)]({
            unitId: _0x2fb70c,
            subUnitId: _0x43b322,
            token: _0x4707b0,
            type: "set",
          }),
          !0x0)
        : !0x1;
    },
  },
  Ct = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-show-data-as",
    handler(_0x2a7a9e, _0x201a58) {
      if (!_0x201a58) return !0x1;
      if (
        _0x2a7a9e[_0x5a080e(0x345)](t["IConfigService"])[_0x5a080e(0x3c0)](
          _0x5a080e(0x285),
        )
      )
        return !0x0;
      let _0x1e66b4 = _0x2a7a9e["get"](K),
        {
          unitId: _0x9857f9,
          subUnitId: _0x1355bc,
          pivotTableId: _0x3f1851,
          fieldId: _0x3cf7af,
          showDataAs: _0x1fd578,
        } = _0x201a58,
        _0x10df4b = _0x1e66b4[_0x5a080e(0x2fb)](_0x3f1851),
        _0x5c5dbc = _0x1e66b4["getPivotTableModelConfig"](
          _0x9857f9,
          _0x1355bc,
          _0x3f1851,
        );
      return !_0x10df4b ||
        !(_0x5c5dbc != null && _0x5c5dbc[_0x5a080e(0x336)][_0x3cf7af])
        ? !0x1
        : (_0x10df4b["setShowDataAs"](_0x3cf7af, _0x1fd578),
          ft(_0x5c5dbc, _0x201a58),
          _0x1e66b4[_0x5a080e(0x3b0)]({
            unitId: _0x9857f9,
            subUnitId: _0x1355bc,
            token: _0x3f1851,
            type: _0x5a080e(0x2d0),
          }),
          !0x0);
    },
  },
  wt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-sort-info",
    handler(_0xa61640, _0x3955b7) {
      if (!_0x3955b7) return !0x1;
      if (
        _0xa61640[_0x5d7648(0x345)](t["IConfigService"])[_0x5d7648(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0x1bbbb4 = _0xa61640[_0x5d7648(0x345)](K),
        {
          unitId: _0x55b38a,
          subUnitId: _0x88c607,
          pivotTableId: _0x139683,
          sortInfo: _0x1ad4e6,
          fieldId: _0x14d489,
        } = _0x3955b7,
        _0xdd2376 = _0x1bbbb4[_0x5d7648(0x2fb)](_0x139683);
      return _0xdd2376
        ? (_0xdd2376[_0x5d7648(0x1a2)](_0x14d489, _0x1ad4e6),
          dt(
            _0x1bbbb4[_0x5d7648(0x31f)](_0x55b38a, _0x88c607, _0x139683),
            _0x3955b7,
          ),
          _0x1bbbb4["addDirtyPivotTable"]({
            unitId: _0x55b38a,
            subUnitId: _0x88c607,
            token: _0x139683,
            type: _0x5d7648(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  Tt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-field-subtotal-type",
    handler(_0x3a7a71, _0x142717) {
      if (!_0x142717) return !0x1;
      if (
        _0x3a7a71["get"](t[_0x4fad93(0x174)])[_0x4fad93(0x3c0)](
          _0x4fad93(0x285),
        )
      )
        return !0x0;
      let _0x111555 = _0x3a7a71["get"](K),
        {
          unitId: _0x3aa374,
          subUnitId: _0x257dff,
          pivotTableId: _0x4477e5,
          fieldId: _0x5d627c,
          subtotalType: _0x127450,
        } = _0x142717,
        _0x19a7a6 = _0x111555[_0x4fad93(0x2fb)](_0x4477e5);
      return _0x19a7a6
        ? (_0x19a7a6[_0x4fad93(0x19d)](_0x5d627c, _0x127450),
          st(
            _0x111555[_0x4fad93(0x31f)](_0x3aa374, _0x257dff, _0x4477e5),
            _0x142717,
          ),
          _0x111555[_0x4fad93(0x3b0)]({
            unitId: _0x3aa374,
            subUnitId: _0x257dff,
            token: _0x4477e5,
            type: "set",
          }),
          !0x0)
        : !0x1;
    },
  },
  Et = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-value-filter",
    handler(_0x5064bd, _0x3fb562) {
      if (!_0x3fb562) return !0x1;
      if (
        _0x5064bd[_0x1d8f1a(0x345)](t[_0x1d8f1a(0x174)])[_0x1d8f1a(0x3c0)](
          _0x1d8f1a(0x285),
        )
      )
        return !0x0;
      let _0x58446d = _0x5064bd[_0x1d8f1a(0x345)](K),
        {
          unitId: _0x4efb16,
          subUnitId: _0x40f902,
          pivotTableId: _0x40d0b8,
          fieldId: _0x3555db,
          filterInfo: _0x1d1c25,
          index: _0x747cef,
        } = _0x3fb562,
        _0x2691d0 = _0x58446d[_0x1d8f1a(0x2fb)](_0x40d0b8),
        _0x53c59b = _0x58446d[_0x1d8f1a(0x31f)](
          _0x4efb16,
          _0x40f902,
          _0x40d0b8,
        ),
        _0x373d97 = !!(
          _0x53c59b &&
          (_0x53c59b[_0x1d8f1a(0x39f)][_0x1d8f1a(0x238)](_0x3555db) ||
            _0x53c59b[_0x1d8f1a(0x1de)][_0x1d8f1a(0x238)](_0x3555db))
        );
      return !_0x2691d0 ||
        !_0x53c59b ||
        !_0x373d97 ||
        (_0x1d1c25 !== void 0x0 &&
          (_0x1d1c25[_0x1d8f1a(0x3dd)] !==
            e[_0x1d8f1a(0x362)][_0x1d8f1a(0x3df)] ||
            !_0x53c59b["measure"][_0x1d1c25[_0x1d8f1a(0x171)]] ||
            !(0x0, e[_0x1d8f1a(0x3fe)])(_0x1d1c25["operator"])))
        ? !0x1
        : (_0x2691d0["setValueFilterInfo"](_0x3555db, _0x1d1c25, _0x747cef),
          ot(_0x53c59b, _0x3fb562),
          _0x58446d[_0x1d8f1a(0x3b0)]({
            unitId: _0x4efb16,
            subUnitId: _0x40f902,
            token: _0x40d0b8,
            type: "set",
          }),
          !0x0);
    },
  },
  Dt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-field-position",
    handler(_0x429752, _0x4213e1) {
      if (!_0x4213e1) return !0x1;
      if (
        _0x429752[_0x1ea0d8(0x345)](t[_0x1ea0d8(0x174)])[_0x1ea0d8(0x3c0)](
          _0x1ea0d8(0x285),
        )
      )
        return !0x0;
      let _0x68313 = _0x429752[_0x1ea0d8(0x345)](K),
        {
          unitId: _0x16117a,
          subUnitId: _0x50a60c,
          pivotTableId: _0x17b4ce,
          area: _0x17b51c,
          index: _0x1f3e7d,
          fieldId: _0x8123a9,
        } = _0x4213e1,
        _0xe3a5d3 = _0x68313[_0x1ea0d8(0x2fb)](_0x17b4ce);
      return _0xe3a5d3
        ? (_0xe3a5d3[_0x1ea0d8(0x35d)](_0x8123a9, _0x17b51c, _0x1f3e7d),
          ct(
            _0x68313[_0x1ea0d8(0x31f)](_0x16117a, _0x50a60c, _0x17b4ce),
            _0x4213e1,
          ),
          _0x68313[_0x1ea0d8(0x3b0)]({
            unitId: _0x16117a,
            subUnitId: _0x50a60c,
            token: _0x17b4ce,
            type: _0x1ea0d8(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  Ot = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-field-source-info",
    handler(_0x181ff9, _0x44e09d) {
      if (!_0x44e09d) return !0x1;
      if (
        _0x181ff9[_0x22b2d9(0x345)](t[_0x22b2d9(0x174)])[_0x22b2d9(0x3c0)](
          _0x22b2d9(0x285),
        )
      )
        return !0x0;
      let _0x20f24e = _0x181ff9[_0x22b2d9(0x345)](K),
        {
          unitId: _0x1805bf,
          subUnitId: _0x402354,
          pivotTableId: _0x38733b,
          sourceName: _0xdcf93a,
          dataFieldId: _0x5cd028,
          tableFieldId: _0x585698,
        } = _0x44e09d,
        _0x3fe398 = _0x20f24e[_0x22b2d9(0x2fb)](_0x38733b);
      return _0x3fe398
        ? (_0x3fe398["updateFieldSourceInfo"](_0x585698, _0xdcf93a, _0x5cd028),
          ut(
            _0x20f24e[_0x22b2d9(0x31f)](_0x1805bf, _0x402354, _0x38733b),
            _0x44e09d,
          ),
          _0x20f24e["addDirtyPivotTable"]({
            unitId: _0x1805bf,
            subUnitId: _0x402354,
            token: _0x38733b,
            type: _0x22b2d9(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  },
  kt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-value-position",
    handler(_0x58cd4e, _0x5c4bfb) {
      if (!_0x5c4bfb) return !0x1;
      if (
        _0x58cd4e[_0x32d1a7(0x345)](t[_0x32d1a7(0x174)])[_0x32d1a7(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0x431ca9 = _0x58cd4e[_0x32d1a7(0x345)](K),
        {
          unitId: _0x268ea3,
          subUnitId: _0x4c644c,
          pivotTableId: _0x1aa019,
          valuePosition: _0x59fe33,
          index: _0x40d5d2,
        } = _0x5c4bfb,
        _0x120710 = _0x431ca9[_0x32d1a7(0x2fb)](_0x1aa019);
      return _0x120710
        ? (_0x120710[_0x32d1a7(0x2e8)](_0x59fe33, _0x40d5d2),
          lt(
            _0x431ca9[_0x32d1a7(0x31f)](_0x268ea3, _0x4c644c, _0x1aa019),
            _0x5c4bfb,
          ),
          _0x431ca9[_0x32d1a7(0x3b0)]({
            unitId: _0x268ea3,
            subUnitId: _0x4c644c,
            token: _0x1aa019,
            type: _0x32d1a7(0x2d0),
          }),
          !0x0)
        : !0x1;
    },
  };
function Q(_0x471aed, _0x213633, _0x19a172) {
  let {
      pivotTableId: _0x1447b2,
      unitId: _0x433233,
      subUnitId: _0x4e12dd,
    } = _0x213633,
    _0x1d5aea = [],
    _0x5eed34 = [];
  for (let _0x2e8bed of _0x19a172)
    switch (_0x2e8bed[_0x5e55b5(0x3dd)]) {
      case e["PivotTableChangeTypeEnum"][_0x5e55b5(0x498)]:
        {
          let {
              fieldJson: _0x431f1b,
              area: _0x571124,
              index: _0x285d74,
            } = _0x2e8bed,
            _0x6ef27c = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldJson: _0x431f1b,
              area: _0x571124,
              index: _0x285d74,
            },
            _0x53afd1 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x431f1b["id"],
              area: _0x571124,
              index: _0x285d74,
            };
          (_0x1d5aea[_0x5e55b5(0x19f)]({ id: ht["id"], params: _0x6ef27c }),
            _0x5eed34[_0x5e55b5(0x38e)]({ id: gt["id"], params: _0x53afd1 }));
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x28e)]:
        {
          let {
              fieldId: _0x363fa9,
              newSubtotalType: _0x48824b,
              oldSubtotalType: _0x5b6d3a,
            } = _0x2e8bed,
            _0x4c4b38 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x363fa9,
              subtotalType: _0x48824b,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: Tt["id"], params: _0x4c4b38 });
          let _0x3be360 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x363fa9,
            subtotalType: _0x5b6d3a,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: Tt["id"], params: _0x3be360 });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x4bb)]:
        {
          let {
              fieldId: _0x52757b,
              fieldJson: _0x69e346,
              area: _0x53268d,
              index: _0x4cda4f,
            } = _0x2e8bed,
            _0x4a57fd = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x52757b,
              index: _0x4cda4f,
              area: _0x53268d,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: gt["id"], params: _0x4a57fd });
          let _0x62f7fb = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldJson: _0x69e346,
            area: _0x53268d,
            index: _0x4cda4f,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: ht["id"], params: _0x62f7fb });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x3ca)]:
        {
          let {
              fieldId: _0x376759,
              oldName: _0x892e09,
              newName: _0x4f1510,
            } = _0x2e8bed,
            _0x24df39 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x376759,
              name: _0x4f1510,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: _t["id"], params: _0x24df39 });
          let _0x2bddfd = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x376759,
            name: _0x892e09,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: _t["id"], params: _0x2bddfd });
        }
        break;
      case e[_0x5e55b5(0x368)]["SetFilterInfo"]:
        {
          let {
              fieldId: _0x2f3be2,
              oldFilterInfo: _0x58b5e8,
              newFilterInfo: _0x35bf15,
            } = _0x2e8bed,
            _0x1cb7c1 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x2f3be2,
              filterInfo: _0x35bf15,
            };
          _0x1d5aea["push"]({ id: bt["id"], params: _0x1cb7c1 });
          let _0x54b027 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x2f3be2,
            filterInfo: _0x58b5e8,
          };
          _0x5eed34["unshift"]({ id: bt["id"], params: _0x54b027 });
        }
        break;
      case e["PivotTableChangeTypeEnum"]["SetSortInfo"]:
        {
          let {
              fieldId: _0x5e9fde,
              oldSortInfo: _0x6671c3,
              newSortInfo: _0x1799d8,
            } = _0x2e8bed,
            _0x2a258c = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x5e9fde,
              sortInfo: _0x1799d8,
            };
          _0x1d5aea["push"]({ id: wt["id"], params: _0x2a258c });
          let _0x1ed765 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x5e9fde,
            sortInfo: _0x6671c3,
          };
          _0x5eed34["unshift"]({ id: wt["id"], params: _0x1ed765 });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x321)]:
        {
          let {
              fieldId: _0x5430fc,
              oldShowDataAs: _0x432563,
              newShowDataAs: _0x51a2b2,
            } = _0x2e8bed,
            _0x29570b = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x5430fc,
              showDataAs: { ..._0x51a2b2 },
            };
          _0x1d5aea["push"]({ id: Ct["id"], params: _0x29570b });
          let _0x204ea1 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x5430fc,
            showDataAs: { ..._0x432563 },
          };
          _0x5eed34["unshift"]({ id: Ct["id"], params: _0x204ea1 });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x413)]:
        {
          let { oldOptions: _0x33ce30, newOptions: _0x38ddd3 } = _0x2e8bed,
            _0xb0e777 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              options: _0x38ddd3,
            };
          _0x1d5aea["push"]({ id: St["id"], params: _0xb0e777 });
          let _0x4e67d6 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            options: _0x33ce30,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: St["id"], params: _0x4e67d6 });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x30e)]:
        {
          let { oldLayout: _0x3e2187, newLayout: _0x41fe93 } = _0x2e8bed,
            _0x2e84f4 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              layout: _0x41fe93,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: xt["id"], params: _0x2e84f4 });
          let _0x4a19e6 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            layout: _0x3e2187,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: xt["id"], params: _0x4a19e6 });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x407)]:
        {
          let {
              oldArea: _0xefbaad,
              newArea: _0x153fb8,
              oldIndex: _0x23907e,
              newIndex: _0x12baf2,
              fieldId: _0x590ff0,
            } = _0x2e8bed,
            _0x26a5fa = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x590ff0,
              area: _0x153fb8,
              index: _0x12baf2,
              oldArea: _0xefbaad,
              oldIndex: _0x23907e,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: Dt["id"], params: _0x26a5fa });
          let _0x59f247 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x590ff0,
            area: _0xefbaad,
            index: _0x23907e,
            oldArea: _0x153fb8,
            oldIndex: _0x12baf2,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: Dt["id"], params: _0x59f247 });
        }
        break;
      case e["PivotTableChangeTypeEnum"][_0x5e55b5(0x164)]:
        {
          let {
              oldValuePosition: _0x38fc9c,
              newValuePosition: _0x476b08,
              oldIndex: _0x40a03f,
              newIndex: _0xf05ece,
            } = _0x2e8bed,
            _0x26465e = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              valuePosition: _0x476b08,
              index: _0xf05ece,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: kt["id"], params: _0x26465e });
          let _0x200e8a = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            valuePosition: _0x38fc9c,
            index: _0x40a03f,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: kt["id"], params: _0x200e8a });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x3b5)]:
        {
          let {
              fieldId: _0xa14fd,
              collapse: _0x2deeac,
              item: _0x334969,
            } = _0x2e8bed,
            _0x7cf58b = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0xa14fd,
              collapse: _0x2deeac,
              item: _0x334969,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: vt["id"], params: _0x7cf58b });
          let _0x12084f = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0xa14fd,
            collapse: !_0x2deeac,
            item: _0x334969,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: vt["id"], params: _0x12084f });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x4b5)]:
        {
          let {
              newFormat: _0x37bdd6,
              oldFormat: _0xc13f47,
              fieldId: _0x23ebfb,
            } = _0x2e8bed,
            _0x5052f1 = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              fieldId: _0x23ebfb,
              format: _0x37bdd6,
            };
          _0x1d5aea["push"]({ id: yt["id"], params: _0x5052f1 });
          let _0x39c232 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x23ebfb,
            format: _0xc13f47,
          };
          _0x5eed34[_0x5e55b5(0x38e)]({ id: yt["id"], params: _0x39c232 });
        }
        break;
      case e[_0x5e55b5(0x368)]["UpdateSource"]:
        {
          let {
              tableFieldId: _0x520683,
              oldSourceName: _0x4817a9,
              newSourceName: _0x5f21ae,
              oldDataFieldId: _0x2f1c57,
              newDataFieldId: _0x361c73,
            } = _0x2e8bed,
            _0x5c42fc = {
              unitId: _0x433233,
              subUnitId: _0x4e12dd,
              pivotTableId: _0x1447b2,
              tableFieldId: _0x520683,
              sourceName: _0x5f21ae,
              dataFieldId: _0x361c73,
            };
          _0x1d5aea[_0x5e55b5(0x19f)]({ id: Ot["id"], params: _0x5c42fc });
          let _0x38ec3e = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            tableFieldId: _0x520683,
            sourceName: _0x4817a9,
            dataFieldId: _0x2f1c57,
          };
          _0x5eed34["unshift"]({ id: Ot["id"], params: _0x38ec3e });
        }
        break;
      case e[_0x5e55b5(0x368)][_0x5e55b5(0x15b)]: {
        let {
            fieldId: _0x31306c,
            filterInfo: _0x158d71,
            oldFilterInfo: _0x666dd1,
            newIndex: _0x269376,
            oldIndex: _0x3c56ad,
          } = _0x2e8bed,
          _0x22e746 = {
            unitId: _0x433233,
            subUnitId: _0x4e12dd,
            pivotTableId: _0x1447b2,
            fieldId: _0x31306c,
            filterInfo: _0x158d71,
            index: _0x269376,
          };
        _0x1d5aea["push"]({ id: Et["id"], params: _0x22e746 });
        let _0x1b2f35 = {
          unitId: _0x433233,
          subUnitId: _0x4e12dd,
          pivotTableId: _0x1447b2,
          fieldId: _0x31306c,
          filterInfo: _0x666dd1,
          index: _0x3c56ad,
        };
        _0x5eed34[_0x5e55b5(0x38e)]({ id: Et["id"], params: _0x1b2f35 });
      }
    }
  return { redos: _0x1d5aea, undos: _0x5eed34 };
}
function $(_0x4b4aec, _0x335fc7) {
  let _0x129094 = _0x4b4aec[_0x35d8b3(0x345)](Z),
    { cellInfo: _0x44e4b3, view: _0xff1d76, isEmpty: _0x160702 } = _0x335fc7;
  return (
    _0x129094["interceptor"][_0x35d8b3(0x434)](ne)(L, {
      cellInfo: _0x44e4b3,
      view: _0xff1d76,
      isEmpty: _0x160702,
    }) ?? L
  );
}
const At = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-field",
    async handler(_0xa8b30e, _0x5b25e6) {
      if (!_0x5b25e6) return !0x1;
      let _0x4f1091 = _0xa8b30e[_0x47abea(0x345)](t[_0x47abea(0x1b2)]),
        _0xed4c0f = _0xa8b30e[_0x47abea(0x345)](W),
        _0x3c70bb = _0xa8b30e["get"](t[_0x47abea(0x256)]),
        {
          pivotTableId: _0x1aaaed,
          dataFieldId: _0x5b9344,
          fieldArea: _0x568177,
          index: _0x198b47,
          unitId: _0x4b3b96,
          subUnitId: _0x4f8003,
        } = _0x5b25e6,
        _0x5548c3 = (
          await _0xed4c0f["getPivotDisplayConfig"]({
            unitId: _0x4b3b96,
            subUnitId: _0x4f8003,
            pivotTableId: _0x1aaaed,
            params: {
              type: _0x47abea(0x410),
              addPivotField: {
                dataFieldId: _0x5b9344,
                fieldArea: _0x568177,
                index: _0x198b47,
              },
            },
          })
        )[_0x47abea(0x409)][_0x47abea(0x410)];
      if (!_0x5548c3) return !0x1;
      let {
          view: _0xb839a3,
          changesets: _0x41542c,
          isEmpty: _0x1e5fc1,
          pivotTableConfig: _0x28c824,
          shouldBeAddedGroupJSON: _0x4f5d52,
        } = _0x5548c3,
        _0x3559fa = _0x28c824[_0x47abea(0x376)],
        _0x1b30ec = new e[_0x47abea(0x18a)]();
      _0x1b30ec[_0x47abea(0x3cb)](_0xb839a3);
      let _0x5d2b13 = {
        cellInfo: _0x3559fa,
        view: _0x1b30ec,
        isEmpty: _0x1e5fc1,
      };
      if (
        !(await _0xa8b30e["get"](Z)[_0x47abea(0x49b)][
          "fetchThroughAsyncInterceptors"
        ](R)(!0x0, _0x5d2b13))
      )
        return !0x1;
      let _0x24968c = J(_0xa8b30e, _0x1b30ec, _0x3559fa, _0x1e5fc1),
        _0x398b2f = $(_0xa8b30e, _0x5d2b13),
        { undos: _0x218e2d, redos: _0x34aa9d } = Q(
          _0x4f1091,
          { pivotTableId: _0x1aaaed, unitId: _0x4b3b96, subUnitId: _0x4f8003 },
          _0x41542c,
        );
      return (
        _0x4f5d52 &&
          (_0x34aa9d["unshift"]({
            id: Xe["id"],
            params: {
              pivotTableId: _0x1aaaed,
              fieldJSON: _0x4f5d52,
              unitId: _0x4b3b96,
              subUnitId: _0x4f8003,
            },
          }),
          _0x218e2d[_0x47abea(0x19f)]({
            id: Ze["id"],
            params: {
              pivotTableId: _0x1aaaed,
              dataFieldId: _0x4f5d52["id"],
              unitId: _0x4b3b96,
              subUnitId: _0x4f8003,
            },
          })),
        (0x0, t["sequenceExecute"])(
          [..._0x24968c[_0x47abea(0x214)], ..._0x398b2f["redos"], ..._0x34aa9d],
          _0x4f1091,
        )[_0x47abea(0x409)]
          ? (_0x3c70bb["pushUndoRedo"]({
              unitID: _0x4b3b96,
              redoMutations: [
                ..._0x24968c["redos"],
                ..._0x398b2f["redos"],
                ..._0x34aa9d,
              ],
              undoMutations: [
                ..._0x24968c[_0x47abea(0x49e)],
                ..._0x398b2f[_0x47abea(0x49e)],
                ..._0x218e2d,
              ],
            }),
            !0x0)
          : !0x1
      );
    },
  },
  jt = () =>
    typeof process < "u" &&
    process["versions"] != null &&
    process["versions"]["node"] != null,
  Mt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.add-pivot-table",
    handler(_0x253a48, _0x1a917a) {
      if (!_0x1a917a) return !0x1;
      let _0x149a9a = _0x253a48[_0x1aaefd(0x345)](t["IConfigService"]);
      if (_0x149a9a[_0x1aaefd(0x3c0)](_0x1aaefd(0x285))) return !0x0;
      let _0x2fe6e3 = _0x253a48[_0x1aaefd(0x345)](t[_0x1aaefd(0x1ba)]),
        _0xd719e0 = _0x253a48[_0x1aaefd(0x345)](K),
        {
          pivotTableId: _0x144604,
          pivotTableConfig: _0x4f2446,
          collectionConfig: _0x132c76,
          unitId: _0x57c14b,
          subUnitId: _0x2455ac,
        } = _0x1a917a,
        {
          sourceRangeInfo: _0x249754,
          fieldsConfig: _0x18792b,
          targetCellInfo: _0x5d975f,
        } = _0x4f2446,
        _0x1c9973 = _0x2fe6e3[_0x1aaefd(0x2a4)](_0x57c14b);
      if (!_0x1c9973 || !_0x1c9973[_0x1aaefd(0x16b)](_0x2455ac)) return !0x1;
      if (!jt()) {
        let _0x4e964c = 0x0;
        _0x1c9973[_0x1aaefd(0x17c)]()[_0x1aaefd(0x231)]((_0x83d53c) => {
          const _0x4ca483 = _0x1aaefd;
          var _0x5d74ed;
          _0x4e964c +=
            ((_0x5d74ed = _0xd719e0["getSubUnitPivotConfigs"](
              _0x57c14b,
              _0x83d53c[_0x4ca483(0x325)](),
            )) == null
              ? void 0x0
              : _0x5d74ed[_0x4ca483(0x189)]) ?? 0x0;
        });
        let { ls: _0x5905bd, pbk: _0x57b314 } =
          _0x149a9a[_0x1aaefd(0x3c0)](a["LS_CONFIG_KEY"]) ?? {};
        if (!Te(_0x5905bd, _0x57b314))
          throw new t[_0x1aaefd(0x276)](_0x1aaefd(0x265));
        let _0x362a63 = Ee(0x1, _0x5905bd, _0x57b314)["count"];
        if (_0x4e964c >= _0x362a63)
          throw new t[_0x1aaefd(0x276)]("limit\x20pivot");
      }
      if (!_0x132c76 || !_0x18792b) return !0x1;
      let { collection: _0x10d29e, updateDataFieldList: _0x1b7467 } = _0xd719e0[
        _0x1aaefd(0x387)
      ](_0x144604, _0x132c76, _0x249754, _0x5d975f);
      _0xd719e0["refreshData"](_0x10d29e, _0x1b7467, _0x249754);
      let _0x20fbe4 = new e[_0x1aaefd(0x21f)](_0x10d29e, void 0x0, _0x144604);
      _0x20fbe4[_0x1aaefd(0x329)](_0x18792b);
      let _0x33b135 = JSON["parse"](JSON[_0x1aaefd(0x184)](_0x4f2446));
      return (
        _0xd719e0[_0x1aaefd(0x357)](
          _0x57c14b,
          _0x2455ac,
          _0x144604,
          _0x20fbe4,
          _0x33b135,
        ),
        _0xd719e0[_0x1aaefd(0x3b0)]({
          unitId: _0x57c14b,
          subUnitId: _0x2455ac,
          token: _0x144604,
          type: _0x1aaefd(0x3db),
          pivotConfig: _0x33b135,
        }),
        !0x0
      );
    },
  },
  Nt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-table-with-config",
    async handler(_0x3221e2, _0x15017e) {
      if (!_0x15017e) return !0x1;
      let { sourceDataInfo: _0x4b6454, pivotTableConfig: _0x5a2ac2 } =
        _0x15017e;
      if (!_0x4b6454 || !_0x5a2ac2) return !0x1;
      let {
          unitId: _0x3ae08c,
          subUnitId: _0x5b19c4,
          range: _0x340fbf,
        } = _0x4b6454,
        _0x4bd875 = _0x3221e2[_0x13a343(0x345)](t[_0x13a343(0x1ba)]),
        _0x1db230 = _0x3221e2["get"](W),
        _0x4454cb = _0x3221e2[_0x13a343(0x345)](t["LocaleService"]),
        _0x4dd83f = _0x3221e2["get"](t[_0x13a343(0x1b2)]),
        _0x5227fd = _0x4bd875[_0x13a343(0x2a4)](_0x3ae08c);
      if (!_0x5227fd) return !0x1;
      let _0x4b46f1 = _0x5227fd[_0x13a343(0x16b)](_0x5b19c4);
      if (!_0x4b46f1) return !0x1;
      let _0x435d4e = (0x0, e[_0x13a343(0x1b4)])(0x8),
        _0xb2cf9b = _0x340fbf || {
          startRow: 0x0,
          startColumn: 0x0,
          endRow: _0x4b46f1["getRowCount"]() - 0x1,
          endColumn: _0x4b46f1[_0x13a343(0x13e)]() - 0x1,
        };
      _0xb2cf9b[_0x13a343(0x468)] = t[_0x13a343(0x2e5)][_0x13a343(0x446)];
      let _0x1ce490 = (
        await _0x1db230[_0x13a343(0x49f)]({
          unitId: _0x3ae08c,
          subUnitId: _0x5b19c4,
          pivotTableId: _0x435d4e,
          params: {
            type: _0x13a343(0x1a5),
            addPivotTableWithConfig: {
              sourceRangeInfo: {
                unitId: _0x3ae08c,
                sheetName: _0x4b46f1[_0x13a343(0x1f7)](),
                subUnitId: _0x5b19c4,
                range: _0xb2cf9b,
              },
              pivotTableId: _0x435d4e,
              pivotTableIndexConfig: _0x5a2ac2,
            },
          },
        })
      )["result"][_0x13a343(0x326)];
      if (!_0x1ce490) return !0x1;
      let {
          isEmpty: _0x36900a,
          fieldsConfig: _0x244621,
          collectionConfig: _0x6f33fc,
          changesets: _0x30b825,
        } = _0x1ce490,
        _0x410612 = _0x5227fd["getSheets"]()[_0x13a343(0x2b6)],
        _0x39c2e7 = (0x0, t["mergeWorksheetSnapshotWithDefault"])({
          rowCount: _0x4b46f1[_0x13a343(0x172)]() - 0x1,
          columnCount: _0x4b46f1[_0x13a343(0x13e)]() - 0x1,
        });
      ((_0x39c2e7["id"] = (0x0, t[_0x13a343(0x2fe)])()),
        (_0x39c2e7["name"] = _0x5227fd["generateNewSheetName"](
          "" + _0x4454cb["t"](_0x13a343(0x400)),
        )));
      let _0x33aa0d = { index: _0x410612, sheet: _0x39c2e7, unitId: _0x3ae08c },
        { redos: _0xbbe6e2 } = Q(
          _0x4dd83f,
          {
            pivotTableId: _0x435d4e,
            unitId: _0x3ae08c,
            subUnitId: _0x39c2e7["id"],
          },
          _0x30b825,
        );
      return (0x0, t[_0x13a343(0x135)])(
        [
          { id: r["InsertSheetCommand"]["id"], params: _0x33aa0d },
          {
            id: Mt["id"],
            params: {
              unitId: _0x3ae08c,
              subUnitId: _0x39c2e7["id"],
              pivotTableId: _0x435d4e,
              pivotTableConfig: {
                isEmpty: _0x36900a,
                fieldsConfig: _0x244621,
                targetCellInfo: {
                  row: 0x0,
                  col: 0x0,
                  unitId: _0x3ae08c,
                  subUnitId: _0x39c2e7["id"],
                },
                sourceRangeInfo: {
                  subUnitId: _0x5b19c4,
                  unitId: _0x3ae08c,
                  range: _0xb2cf9b,
                  sheetName: _0x4b46f1[_0x13a343(0x1f7)](),
                },
              },
              collectionConfig: _0x6f33fc,
            },
          },
          ..._0xbbe6e2,
        ],
        _0x4dd83f,
      )[_0x13a343(0x409)];
    },
  },
  Pt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.remove-pivot-table",
    handler(_0x6f34fe, _0x209fc0) {
      if (!_0x209fc0) return !0x1;
      if (
        _0x6f34fe["get"](t["IConfigService"])[_0x38ee6b(0x3c0)](
          _0x38ee6b(0x285),
        )
      )
        return !0x0;
      let {
          pivotTableId: _0x2e94ef,
          unitId: _0x4aaec6,
          subUnitId: _0x242de2,
        } = _0x209fc0,
        _0x5dcb93 = _0x6f34fe[_0x38ee6b(0x345)](K);
      return _0x5dcb93[_0x38ee6b(0x2e6)](_0x4aaec6, _0x242de2, _0x2e94ef)
        ? (_0x5dcb93[_0x38ee6b(0x3b0)]({
            unitId: _0x4aaec6,
            subUnitId: _0x242de2,
            token: _0x2e94ef,
            type: "delete",
          }),
          _0x5dcb93[_0x38ee6b(0x2aa)](_0x4aaec6, _0x242de2, _0x2e94ef),
          !0x0)
        : !0x1;
    },
  },
  Ft = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-table",
    async handler(_0x5e1fc0, _0x394749) {
      let _0x3c5794 = _0x5e1fc0[_0x5c2bd7(0x345)](t[_0x5c2bd7(0x1b2)]),
        _0x258701 = _0x5e1fc0[_0x5c2bd7(0x345)](t["IUniverInstanceService"]),
        _0xc4a169 = _0x5e1fc0[_0x5c2bd7(0x345)](t[_0x5c2bd7(0x1b3)]),
        _0x3ad2c0 = _0x5e1fc0["get"](W),
        _0x3966d7 = _0x5e1fc0[_0x5c2bd7(0x345)](t["IUndoRedoService"]),
        _0x97b99 = _0x5e1fc0["get"](Y),
        _0x277f58 = _0x5e1fc0["get"](t[_0x5c2bd7(0x174)]);
      if (!_0x394749) return !0x1;
      let { pivotTableConfig: _0x2b754e, positionType: _0x1ca9fb } = _0x394749,
        { targetCellInfo: _0xdb40ab, sourceRangeInfo: _0x22b01e } = _0x2b754e,
        { unitId: _0x7f7be8, subUnitId: _0x37b1da } = _0xdb40ab,
        _0x34f838 = _0x258701["getUnit"](_0x7f7be8);
      if (!_0x34f838) return !0x1;
      let _0x438756 = 0x0;
      _0x34f838[_0x5c2bd7(0x17c)]()[_0x5c2bd7(0x231)]((_0xc347ec) => {
        const _0x38f2cc = _0x5c2bd7;
        var _0x3ffe79;
        _0x438756 +=
          ((_0x3ffe79 = _0x97b99[_0x38f2cc(0x477)](
            _0x7f7be8,
            _0xc347ec[_0x38f2cc(0x325)](),
          )) == null
            ? void 0x0
            : _0x3ffe79[_0x38f2cc(0x189)]) ?? 0x0;
      });
      let { ls: _0x1500fb, pbk: _0x27893e } =
        _0x277f58[_0x5c2bd7(0x3c0)](a[_0x5c2bd7(0x457)]) ?? {};
      if (!Te(_0x1500fb, _0x27893e)) return !0x1;
      let _0x277312 = Ee(0x1, _0x1500fb, _0x27893e)[_0x5c2bd7(0x466)];
      if (_0x438756 >= _0x277312) return !0x1;
      let _0x42e415 =
          _0x394749["pivotTableId"] || (0x0, e[_0x5c2bd7(0x1b4)])(0x8),
        _0x14267f = (
          await _0x3ad2c0[_0x5c2bd7(0x49f)]({
            unitId: _0x7f7be8,
            subUnitId: _0x37b1da,
            pivotTableId: _0x42e415,
            params: {
              type: "addPivotTable",
              addPivotTable: {
                sourceRangeInfo: _0x22b01e,
                pivotTableId: _0x42e415,
              },
            },
          })
        )[_0x5c2bd7(0x409)][_0x5c2bd7(0x357)];
      if (!_0x14267f) return !0x1;
      let {
          view: _0x23431d,
          isEmpty: _0x678588,
          fieldsConfig: _0xfb5ec,
          collectionConfig: _0x5346bd,
        } = _0x14267f,
        _0x14c49c = [],
        _0x365e79 = [];
      if (_0x1ca9fb === "new") {
        let _0x598505 = _0x34f838[_0x5c2bd7(0x17c)]()[_0x5c2bd7(0x2b6)],
          _0xf63078 = (0x0, t[_0x5c2bd7(0x444)])({});
        ((_0xf63078["id"] = _0x2b754e[_0x5c2bd7(0x376)][_0x5c2bd7(0x1bf)]),
          (_0xf63078["name"] =
            _0x2b754e["targetCellInfo"][_0x5c2bd7(0x2f5)] ??
            _0x34f838[_0x5c2bd7(0x426)](
              "" + _0xc4a169["t"]("sheets-pivot.sheet"),
            )));
        let _0x1de7dd = {
            index: _0x598505,
            sheet: _0xf63078,
            unitId: _0x7f7be8,
          },
          _0x23107c = (0x0, r[_0x5c2bd7(0x4a7)])(_0x5e1fc0, _0x1de7dd);
        (_0x14c49c[_0x5c2bd7(0x19f)]({
          id: r[_0x5c2bd7(0x163)]["id"],
          params: _0x23107c,
        }),
          _0x365e79[_0x5c2bd7(0x19f)]({
            id: r["InsertSheetMutation"]["id"],
            params: _0x1de7dd,
          }));
      } else {
        if (!_0x34f838[_0x5c2bd7(0x16b)](_0x37b1da)) return !0x1;
        let _0x3419ab = new e["PivotView"]();
        _0x3419ab[_0x5c2bd7(0x3cb)](_0x23431d);
        let _0x36268d = J(
          _0x5e1fc0,
          new e[_0x5c2bd7(0x18a)](),
          _0xdb40ab,
          !0x0,
        );
        (_0x365e79[_0x5c2bd7(0x19f)](..._0x36268d[_0x5c2bd7(0x214)]),
          _0x14c49c[_0x5c2bd7(0x19f)](..._0x36268d["undos"]));
        let _0x45374d = {
          cellInfo: _0xdb40ab,
          view: _0x3419ab,
          isEmpty: _0x678588,
        };
        if (
          !(await _0x5e1fc0["get"](Z)[_0x5c2bd7(0x49b)][
            "fetchThroughAsyncInterceptors"
          ](R)(!0x0, _0x45374d))
        )
          return !0x1;
        let _0xcddff = $(_0x5e1fc0, _0x45374d);
        (_0x365e79[_0x5c2bd7(0x19f)](..._0xcddff[_0x5c2bd7(0x214)]),
          _0x14c49c[_0x5c2bd7(0x19f)](..._0xcddff[_0x5c2bd7(0x49e)]));
      }
      return (
        _0x365e79["push"]({
          id: Mt["id"],
          params: {
            unitId: _0xdb40ab[_0x5c2bd7(0x386)],
            subUnitId: _0xdb40ab[_0x5c2bd7(0x1bf)],
            pivotTableId: _0x42e415,
            pivotTableConfig: {
              targetCellInfo: _0xdb40ab,
              sourceRangeInfo: _0x22b01e,
              fieldsConfig: _0xfb5ec,
              isEmpty: _0x678588,
            },
            collectionConfig: _0x5346bd,
          },
        }),
        _0x14c49c[_0x5c2bd7(0x38e)]({
          id: Pt["id"],
          params: {
            unitId: _0x7f7be8,
            subUnitId: _0x37b1da,
            pivotTableId: _0x42e415,
          },
        }),
        (0x0, t[_0x5c2bd7(0x135)])(_0x365e79, _0x3c5794)[_0x5c2bd7(0x409)]
          ? (_0x3966d7[_0x5c2bd7(0x462)]({
              unitID: _0x7f7be8,
              undoMutations: _0x14c49c,
              redoMutations: _0x365e79,
            }),
            !0x0)
          : !0x1
      );
    },
  },
  It = [
    e["PivotDateGroupFieldDateTypeEnum"]["Year"],
    e["PivotDateGroupFieldDateTypeEnum"]["YearQuarter"],
    e["PivotDateGroupFieldDateTypeEnum"]["Quarter"],
    e["PivotDateGroupFieldDateTypeEnum"]["YearMonth"],
    e["PivotDateGroupFieldDateTypeEnum"]["Month"],
    e["PivotDateGroupFieldDateTypeEnum"]["MonthDate"],
    e["PivotDateGroupFieldDateTypeEnum"]["YearMonthDate"],
    e["PivotDateGroupFieldDateTypeEnum"]["Date"],
    e["PivotDateGroupFieldDateTypeEnum"]["Hour"],
    e["PivotDateGroupFieldDateTypeEnum"]["Minute"],
    e["PivotDateGroupFieldDateTypeEnum"]["HourMinute"],
  ];
function Lt(_0x434808, _0x320fe1, _0x1260f8) {
  if (
    !(_0x434808 != null && _0x434808["dimension"]) ||
    !(_0x320fe1 != null && _0x320fe1["fields"])
  )
    return;
  let _0x56901f = _0x434808[_0x501e3e(0x230)][_0x1260f8];
  if (!_0x56901f) return;
  let _0x536198 = zt(_0x434808, _0x1260f8);
  if (!_0x536198) return;
  let _0x280513 = _0x320fe1["fields"][_0x56901f["dataFieldId"]];
  if (!_0x280513) return;
  let _0x3c762a = (0x0, e[_0x501e3e(0x4b6)])(_0x280513);
  if (
    !_0x3c762a &&
    _0x280513[_0x501e3e(0x45a)] !== e[_0x501e3e(0x428)][_0x501e3e(0x303)]
  )
    return;
  let _0x28de09 = _0x3c762a ? _0x280513[_0x501e3e(0x19a)] : _0x280513["id"],
    _0x3cf4c9 = Bt(_0x434808, _0x536198)[_0x501e3e(0x1aa)](
      (_0x2a71cd, _0x12a5ee) => {
        const _0x585e79 = _0x501e3e;
        if (_0x12a5ee === _0x1260f8) return _0x2a71cd;
        let _0x538f76 = _0x434808[_0x585e79(0x230)][_0x12a5ee],
          _0x15e34b = _0x538f76
            ? _0x320fe1[_0x585e79(0x1ee)][_0x538f76[_0x585e79(0x1cb)]]
            : void 0x0;
        return (
          _0x15e34b &&
            (0x0, e["isDateGroupFieldJSON"])(_0x15e34b) &&
            _0x15e34b[_0x585e79(0x19a)] === _0x28de09 &&
            _0x15e34b["dateType"] &&
            _0x2a71cd[_0x585e79(0x19f)](_0x15e34b["dateType"]),
          _0x2a71cd
        );
      },
      [],
    );
  return {
    kind: _0x3c762a ? _0x501e3e(0x435) : _0x501e3e(0x2c6),
    area: _0x536198,
    tableFieldId: _0x1260f8,
    dataFieldId: _0x280513["id"],
    originalDataFieldId: _0x28de09,
    currentDateType: _0x3c762a
      ? (_0x280513["dateType"] ??
        e["PivotDateGroupFieldDateTypeEnum"][_0x501e3e(0x4ba)])
      : void 0x0,
    siblingDateTypes: _0x3cf4c9,
    insertIndex: Vt(_0x434808, _0x320fe1, _0x536198, _0x1260f8, _0x28de09),
  };
}
function Rt(_0x1a774d, _0x48d1fe) {
  return (
    !It[_0x4ca061(0x238)](_0x48d1fe) ||
    _0x1a774d[_0x4ca061(0x206)] === _0x48d1fe ||
    _0x1a774d[_0x4ca061(0x489)][_0x4ca061(0x238)](_0x48d1fe)
  );
}
function zt(_0x3c5c26, _0x5749d5) {
  if (_0x3c5c26[_0x3ebce6(0x39f)]["includes"](_0x5749d5))
    return e[_0x3ebce6(0x200)]["Row"];
  if (_0x3c5c26[_0x3ebce6(0x1de)][_0x3ebce6(0x238)](_0x5749d5))
    return e[_0x3ebce6(0x200)][_0x3ebce6(0x374)];
}
function Bt(_0x24832d, _0x757d73) {
  return _0x757d73 === e[_0x25b265(0x200)][_0x25b265(0x289)]
    ? _0x24832d[_0x25b265(0x39f)]
    : _0x24832d[_0x25b265(0x1de)];
}
function Vt(_0x359511, _0x4ddce3, _0x30169e, _0x59f5b0, _0x3b4472) {
  let _0x2c59e5 = Bt(_0x359511, _0x30169e),
    _0x56ca8b = _0x2c59e5["indexOf"](_0x59f5b0);
  if (_0x56ca8b === -0x1) return _0x2c59e5[_0x1fbe6c(0x2b6)];
  let _0x2ff43a = _0x56ca8b;
  for (let _0x2d78db = 0x0; _0x2d78db < _0x56ca8b; _0x2d78db++) {
    let _0x3e22af = _0x359511[_0x1fbe6c(0x230)][_0x2c59e5[_0x2d78db]],
      _0x277444 = _0x3e22af
        ? _0x4ddce3[_0x1fbe6c(0x1ee)][_0x3e22af[_0x1fbe6c(0x1cb)]]
        : void 0x0;
    _0x277444 &&
      (0x0, e[_0x1fbe6c(0x4b6)])(_0x277444) &&
      _0x277444[_0x1fbe6c(0x19a)] === _0x3b4472 &&
      (_0x2ff43a = _0x2d78db + 0x1);
  }
  return _0x2ff43a;
}
const Ht = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.move-pivot-field",
    async handler(_0x247609, _0x180e17) {
      if (!_0x180e17) return !0x1;
      let _0x546c5d = _0x247609[_0x94f36c(0x345)](t[_0x94f36c(0x1b2)]),
        _0x262559 = _0x247609[_0x94f36c(0x345)](W),
        _0x31d217 = _0x247609[_0x94f36c(0x345)](t[_0x94f36c(0x256)]),
        {
          pivotTableId: _0x42794a,
          fieldId: _0x47fe90,
          area: _0x1b1703,
          index: _0x32f9e9,
          unitId: _0x2bbebe,
          subUnitId: _0x5e7ea9,
        } = _0x180e17,
        _0x5b2faa = (
          await _0x262559[_0x94f36c(0x49f)]({
            unitId: _0x2bbebe,
            subUnitId: _0x5e7ea9,
            pivotTableId: _0x42794a,
            params: {
              type: _0x94f36c(0x465),
              movePivotField: {
                fieldId: _0x47fe90,
                area: _0x1b1703,
                index: _0x32f9e9,
              },
            },
          })
        )[_0x94f36c(0x409)][_0x94f36c(0x465)];
      if (!_0x5b2faa) return !0x1;
      let {
          changesets: _0x61f0e9,
          view: _0x105799,
          isEmpty: _0x24eaaa,
          pivotTableConfig: _0x527cec,
        } = _0x5b2faa,
        _0x49aad6 = _0x527cec[_0x94f36c(0x376)],
        _0x2c2ceb = new e[_0x94f36c(0x18a)]();
      _0x2c2ceb[_0x94f36c(0x3cb)](_0x105799);
      let _0x389641 = {
        cellInfo: _0x49aad6,
        view: _0x2c2ceb,
        isEmpty: _0x24eaaa,
      };
      if (
        !(await _0x247609[_0x94f36c(0x345)](Z)[_0x94f36c(0x49b)][
          _0x94f36c(0x226)
        ](R)(!0x0, _0x389641))
      )
        return !0x1;
      let _0x4ac80f = J(_0x247609, _0x2c2ceb, _0x49aad6, _0x24eaaa),
        _0x5d531c = $(_0x247609, _0x389641),
        { redos: _0xdfcc16, undos: _0x322767 } = Q(
          _0x546c5d,
          { pivotTableId: _0x42794a, unitId: _0x2bbebe, subUnitId: _0x5e7ea9 },
          _0x61f0e9,
        );
      return (0x0, t["sequenceExecute"])(
        [
          ..._0x4ac80f[_0x94f36c(0x214)],
          ..._0x5d531c[_0x94f36c(0x214)],
          ..._0xdfcc16,
        ],
        _0x546c5d,
      )["result"]
        ? (_0x31d217["pushUndoRedo"]({
            unitID: _0x2bbebe,
            redoMutations: [
              ..._0x4ac80f["redos"],
              ..._0x5d531c[_0x94f36c(0x214)],
              ..._0xdfcc16,
            ],
            undoMutations: [
              ..._0x4ac80f["undos"],
              ..._0x5d531c[_0x94f36c(0x49e)],
              ..._0x322767,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  Ut = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-position",
    handler(_0x112421, _0x14a6e4) {
      if (!_0x14a6e4) return !0x1;
      if (
        _0x112421["get"](t["IConfigService"])[_0x2df7fb(0x3c0)](
          _0x2df7fb(0x285),
        )
      )
        return !0x0;
      let {
          pivotTableId: _0x556d6c,
          targetCellPosition: _0x2b6a37,
          unitId: _0x904403,
          subUnitId: _0x3b259d,
        } = _0x14a6e4,
        _0x33cd81 = _0x112421["get"](K);
      if (!_0x33cd81[_0x2df7fb(0x2fb)](_0x14a6e4[_0x2df7fb(0x4a4)]))
        return !0x1;
      let _0x5c524b = _0x33cd81["getTargetByPivotId"](_0x556d6c);
      if (!_0x5c524b) return !0x1;
      let _0x5a2ceb = _0x33cd81["getCollection"](
        _0x5c524b["unitId"],
        _0x14a6e4[_0x2df7fb(0x4a4)],
      );
      if (!_0x5a2ceb) return !0x1;
      let _0x246d6a = _0x33cd81[_0x2df7fb(0x2e6)](
        _0x5c524b[_0x2df7fb(0x386)],
        _0x5c524b[_0x2df7fb(0x1bf)],
        _0x556d6c,
      );
      if (!_0x246d6a) return !0x1;
      let _0x3c8e9c = t[_0x2df7fb(0x23b)]["deepClone"](_0x246d6a);
      _0x3c8e9c[_0x2df7fb(0x376)] = {
        unitId: _0x904403,
        subUnitId: _0x3b259d,
        row: _0x2b6a37[_0x2df7fb(0x292)],
        col: _0x2b6a37["col"],
      };
      let _0x378c6c = _0x5a2ceb[_0x2df7fb(0x1c6)]();
      if (
        _0x5c524b[_0x2df7fb(0x1bf)] === _0x3b259d &&
        _0x5c524b["unitId"] === _0x904403
      )
        (_0x33cd81[_0x2df7fb(0x302)](
          _0x904403,
          _0x3b259d,
          _0x556d6c,
          _0x3c8e9c,
        ),
          _0x33cd81[_0x2df7fb(0x3b0)]({
            unitId: _0x904403,
            subUnitId: _0x3b259d,
            token: _0x556d6c,
            type: _0x2df7fb(0x2d0),
          }));
      else {
        (_0x33cd81[_0x2df7fb(0x3b0)]({
          unitId: _0x5c524b[_0x2df7fb(0x386)],
          subUnitId: _0x5c524b[_0x2df7fb(0x1bf)],
          token: _0x556d6c,
          type: "delete",
        }),
          _0x33cd81["removePivotTable"](
            _0x5c524b[_0x2df7fb(0x386)],
            _0x5c524b["subUnitId"],
            _0x556d6c,
          ));
        let _0x4d0780 = new e["PivotTable"](
          _0x33cd81["addCollectionByJSON"](
            _0x556d6c,
            _0x378c6c,
            _0x246d6a["sourceRangeInfo"],
            _0x3c8e9c[_0x2df7fb(0x376)],
          )[_0x2df7fb(0x349)],
          void 0x0,
          _0x556d6c,
        );
        (_0x4d0780[_0x2df7fb(0x329)](_0x3c8e9c[_0x2df7fb(0x2a9)]),
          _0x33cd81[_0x2df7fb(0x357)](
            _0x904403,
            _0x3b259d,
            _0x556d6c,
            _0x4d0780,
            _0x3c8e9c,
          ),
          _0x33cd81["addDirtyPivotTable"]({
            unitId: _0x904403,
            subUnitId: _0x3b259d,
            token: _0x556d6c,
            type: _0x2df7fb(0x3db),
            pivotConfig: _0x3c8e9c,
          }));
      }
      return !0x0;
    },
  },
  Wt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.move-pivot-table",
    handler: (_0x2ae6e8, _0x521622) => {
      if (!_0x521622) return !0x1;
      let _0x4072fd = (0x0, r["getSheetCommandTarget"])(
        _0x2ae6e8[_0x19587b(0x345)](t[_0x19587b(0x1ba)]),
        {
          unitId: _0x521622[_0x19587b(0x376)][_0x19587b(0x386)],
          subUnitId: _0x521622["targetCellInfo"][_0x19587b(0x1bf)],
        },
      );
      if (!_0x4072fd) throw Error(_0x19587b(0x24c));
      let _0x2172fe = _0x2ae6e8[_0x19587b(0x345)](Y)["getPivotTableConfig"](
        _0x521622[_0x19587b(0x4bc)][_0x19587b(0x386)],
        _0x521622["originTargetInfo"]["subUnitId"],
        _0x521622[_0x19587b(0x4a4)],
      );
      if (!_0x2172fe) return !0x1;
      let _0x1b1d94 = _0x2ae6e8[_0x19587b(0x345)](t[_0x19587b(0x1b2)]),
        _0x5d50ef = _0x2ae6e8[_0x19587b(0x345)](t[_0x19587b(0x256)]),
        {
          unitId: _0x1bdaa9,
          subUnitId: _0x4da2f2,
          worksheet: _0x23c518,
        } = _0x4072fd,
        _0x476a27 = _0x23c518["getRowCount"](),
        _0x3576fa = _0x23c518[_0x19587b(0x13e)]();
      if (
        _0x521622[_0x19587b(0x376)]["row"] > _0x476a27 ||
        _0x521622[_0x19587b(0x376)][_0x19587b(0x1a4)] > _0x3576fa
      )
        throw Error(_0x19587b(0x1f0));
      let _0x38204c = [
          {
            id: Ut["id"],
            params: {
              unitId: _0x1bdaa9,
              subUnitId: _0x521622[_0x19587b(0x376)][_0x19587b(0x1bf)],
              pivotTableId: _0x521622[_0x19587b(0x4a4)],
              targetCellPosition: {
                row: _0x521622[_0x19587b(0x376)][_0x19587b(0x292)],
                col: _0x521622[_0x19587b(0x376)]["col"],
              },
            },
          },
        ],
        _0x34838d = [
          {
            id: Ut["id"],
            params: {
              unitId: _0x1bdaa9,
              subUnitId: _0x4da2f2,
              pivotTableId: _0x521622["pivotTableId"],
              targetCellPosition: {
                row: _0x2172fe[_0x19587b(0x376)][_0x19587b(0x292)],
                col: _0x2172fe["targetCellInfo"][_0x19587b(0x1a4)],
              },
            },
          },
        ];
      return (0x0, t[_0x19587b(0x135)])(_0x38204c, _0x1b1d94)[_0x19587b(0x409)]
        ? (_0x5d50ef[_0x19587b(0x462)]({
            unitID: _0x1bdaa9,
            undoMutations: _0x34838d,
            redoMutations: _0x38204c,
          }),
          !0x0)
        : !0x1;
    },
  },
  Gt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.pivot-drill-down",
    async handler(_0x5c1d38, _0x49b222) {
      var _0x49c769;
      if (!_0x49b222) return !0x1;
      let _0xf04cec = _0x5c1d38[_0x37dc49(0x345)](t[_0x37dc49(0x1ba)]),
        _0x11e15f = (0x0, r[_0x37dc49(0x1b5)])(_0xf04cec);
      if (!_0x11e15f) return !0x1;
      let {
          unitId: _0x1aa8ed,
          subUnitId: _0x13e969,
          workbook: _0xcf9aa4,
        } = _0x11e15f,
        { row: _0x31e99f, col: _0x5b4919 } = _0x49b222,
        _0x2f49f0 = _0x5c1d38[_0x37dc49(0x345)](X),
        _0x16fce3 = _0x2f49f0[_0x37dc49(0x152)](
          _0x1aa8ed,
          _0x13e969,
          _0x31e99f,
          _0x5b4919,
        );
      if (!_0x16fce3) return !0x1;
      let _0x3e146c =
        (_0x49c769 = _0x2f49f0[_0x37dc49(0x233)](
          _0x1aa8ed,
          _0x13e969,
          _0x16fce3,
        )) == null
          ? void 0x0
          : _0x49c769[_0x37dc49(0x440)];
      if (!_0x3e146c) return !0x1;
      let _0x5829b3 = _0x5c1d38[_0x37dc49(0x345)](Y)[_0x37dc49(0x2e6)](
        _0x1aa8ed,
        _0x13e969,
        _0x16fce3,
      );
      if (!_0x5829b3) return !0x1;
      let { rowInfo: _0x49b35d, colInfo: _0x457696 } = _0x3e146c,
        _0x2a20b4 = _0x49b35d[_0x31e99f],
        _0x2e1b42 = _0x457696[_0x5b4919];
      if (!_0x2a20b4 || !_0x2e1b42) return !0x1;
      let _0x4df701 = _0x2a20b4[_0x37dc49(0x253)],
        _0x44cea1 = _0x2e1b42[_0x37dc49(0x253)],
        _0x2116b1 = _0x2a20b4["level"],
        _0x577ae0 = _0x2e1b42["level"],
        _0x3b60be = _0x4df701[_0x37dc49(0x3a3)](_0x44cea1),
        _0x1c7b62 = _0x5829b3["fieldsConfig"][_0x37dc49(0x39f)]["slice"](
          0x0,
          _0x2116b1,
        ),
        _0x12a3ee = _0x5829b3["fieldsConfig"][_0x37dc49(0x1de)][
          _0x37dc49(0x3ab)
        ](0x0, _0x577ae0),
        _0x513c67 = _0x1c7b62[_0x37dc49(0x3a3)](_0x12a3ee),
        _0x4b84f1 = _0x3b60be[_0x37dc49(0x15f)]((_0x34c21a, _0x2ff07f) => [
          _0x34c21a,
          _0x513c67[_0x2ff07f],
        ]),
        _0x3b8270 = (
          await _0x5c1d38[_0x37dc49(0x345)](W)[_0x37dc49(0x49f)]({
            unitId: _0x1aa8ed,
            subUnitId: _0x13e969,
            pivotTableId: _0x16fce3,
            params: { type: _0x37dc49(0x33f), drillDown: { tuple: _0x4b84f1 } },
          })
        )[_0x37dc49(0x409)][_0x37dc49(0x33f)];
      if (!_0x3b8270) return !0x1;
      let {
          indexes: _0x24b480,
          range: _0x4b58fa,
          sourceUnitId: _0x17ad25,
          sourceSubUnitId: _0x16c008,
          formatMap: _0x1983a9,
        } = _0x3b8270,
        {
          startRow: _0x554d25,
          endRow: _0xc6459c,
          startColumn: _0x4aab51,
          endColumn: _0x49401e,
        } = _0x4b58fa,
        _0x2f2170 = new t[_0x37dc49(0x38b)](),
        _0x2d3f02 = _0xc6459c - _0x554d25,
        _0x4817dc = _0x49401e - _0x4aab51,
        _0x260c7d = {},
        _0xd54e9d = (0x0, r[_0x37dc49(0x1b5)])(_0xf04cec, {
          unitId: _0x17ad25,
          subUnitId: _0x16c008,
        });
      if (!_0xd54e9d) return !0x1;
      let _0x2735d3 = w[_0x37dc49(0x24e)],
        _0x31a0a4 = w[_0x37dc49(0x1c5)],
        _0x61b840 = w["subTotalStyle"],
        _0x3cef79 = _0xcf9aa4[_0x37dc49(0x439)]()[_0x37dc49(0x300)](_0x2735d3),
        _0x1aa7b0 = _0xcf9aa4["getStyles"]()[_0x37dc49(0x300)](_0x31a0a4),
        _0x5fde3a = _0xcf9aa4[_0x37dc49(0x439)]()[_0x37dc49(0x300)](_0x61b840),
        { worksheet: _0x25fc01 } = _0xd54e9d,
        _0x4d8d1b = 0x0;
      _0x24b480[_0x37dc49(0x231)]((_0x24f988) => {
        const _0x357afc = _0x37dc49;
        for (
          let _0x5728b9 = 0x0;
          _0x5728b9 <= _0x49401e - _0x4aab51;
          _0x5728b9++
        )
          _0x2f2170[_0x357afc(0x300)](
            _0x4d8d1b,
            _0x5728b9,
            _0x25fc01[_0x357afc(0x1d8)](
              _0x24f988 + _0x4b58fa[_0x357afc(0x3f1)] + 0x1,
              _0x5728b9,
            ),
          );
        _0x4d8d1b++;
      });
      for (let _0x346503 = _0x4aab51; _0x346503 <= _0x49401e; _0x346503++) {
        let _0x43ec88 = _0x25fc01[_0x37dc49(0x1d8)](_0x554d25, _0x346503);
        (_0x260c7d[_0x554d25] || (_0x260c7d[_0x554d25] = {}),
          (_0x260c7d[_0x554d25][_0x346503] = { ..._0x43ec88, s: _0x3cef79 }));
      }
      let _0x1fdb42 = 0x1,
        _0xf12e58 = {},
        _0xa8c677 = {};
      _0x2f2170[_0x37dc49(0x2df)]((_0x4020fd, _0x4c7034) => {
        const _0x143e64 = _0x37dc49;
        (_0x4c7034[_0x143e64(0x231)]((_0x29a093) => {
          const _0x3e25dc = _0x143e64;
          let _0xdbbbb2 = _0x2f2170[_0x3e25dc(0x197)](_0x4020fd, _0x29a093);
          if (
            (_0x260c7d[_0x1fdb42] || (_0x260c7d[_0x1fdb42] = {}),
            (_0x260c7d[_0x1fdb42][_0x29a093] = {
              ..._0xdbbbb2,
              s: _0x1fdb42 % 0x2 == 0x0 ? _0x5fde3a : _0x1aa7b0,
            }),
            _0x1983a9[_0x29a093] && _0x4020fd >= 0x0)
          ) {
            let _0x385d7b = _0x1fdb42 % 0x2 == 0x0,
              _0x2a315f = _0x385d7b
                ? _0xa8c677[_0x29a093]
                : _0xf12e58[_0x29a093];
            (_0x2a315f ||
              ((_0x2a315f = _0xcf9aa4[_0x3e25dc(0x439)]()[_0x3e25dc(0x300)]({
                ...(_0x385d7b ? _0x61b840 : _0x31a0a4),
                n: { pattern: _0x1983a9[_0x29a093] },
              })),
              _0x385d7b
                ? (_0xa8c677[_0x29a093] = _0x2a315f)
                : (_0xf12e58[_0x29a093] = _0x2a315f)),
              (_0x260c7d[_0x1fdb42][_0x29a093]["s"] = _0x2a315f));
          }
        }),
          _0x1fdb42++);
      });
      let _0x368db0 = new t[_0x37dc49(0x38b)](_0x260c7d),
        _0xba13 = {};
      _0x368db0[_0x37dc49(0x1e5)]((_0x5d1e0a, _0x4895f7, _0x55d15c) => {
        (_0xba13[_0x5d1e0a] || (_0xba13[_0x5d1e0a] = {}),
          (_0xba13[_0x5d1e0a][_0x4895f7] = {
            s: null,
            f: null,
            si: null,
            p: null,
            v: null,
            t: null,
            custom: null,
          }));
      });
      let _0x14a344 = [],
        _0x45109e = [],
        _0x17b050 = _0xcf9aa4[_0x37dc49(0x17c)]()["length"],
        _0xdd0771 = (0x0, t[_0x37dc49(0x444)])({
          rowCount: Math[_0x37dc49(0x13b)](
            t["DEFAULT_WORKSHEET_ROW_COUNT"],
            _0x2d3f02 + 0xa,
          ),
          columnCount: Math[_0x37dc49(0x13b)](
            t["DEFAULT_WORKSHEET_COLUMN_COUNT"],
            _0x4817dc + 0x5,
          ),
        }),
        _0x32c935 = _0x5c1d38[_0x37dc49(0x345)](t["LocaleService"]);
      ((_0xdd0771["id"] = (0x0, t[_0x37dc49(0x2fe)])()),
        (_0xdd0771[_0x37dc49(0x194)] = _0xcf9aa4[_0x37dc49(0x426)](
          "" + _0x32c935["t"](_0x37dc49(0x400)),
        )));
      let _0x3028c6 = { index: _0x17b050, sheet: _0xdd0771, unitId: _0x1aa8ed },
        _0x452c51 = (0x0, r[_0x37dc49(0x4a7)])(_0x5c1d38, _0x3028c6);
      (_0x45109e[_0x37dc49(0x19f)]({
        id: r[_0x37dc49(0x463)]["id"],
        params: _0x3028c6,
      }),
        _0x14a344[_0x37dc49(0x19f)]({
          id: r[_0x37dc49(0x163)]["id"],
          params: _0x452c51,
        }),
        _0x45109e["push"]({
          id: r[_0x37dc49(0x3e6)]["id"],
          params: {
            unitId: _0x1aa8ed,
            subUnitId: _0xdd0771["id"],
            cellValue: _0x260c7d,
          },
        }),
        _0x14a344[_0x37dc49(0x38e)]({
          id: r[_0x37dc49(0x3e6)]["id"],
          params: {
            unitId: _0x1aa8ed,
            subUnitId: _0xdd0771["id"],
            cellValue: _0xba13,
          },
        }));
      let _0xe4a9ac = {
        startRow: 0x0,
        startColumn: 0x0,
        endRow: _0x1fdb42 - 0x1,
        endColumn: _0x49401e,
      };
      return (
        _0x45109e[_0x37dc49(0x19f)]({
          id: s["SetSheetsFilterRangeMutation"]["id"],
          params: {
            unitId: _0x1aa8ed,
            subUnitId: _0xdd0771["id"],
            range: _0xe4a9ac,
          },
        }),
        _0x14a344[_0x37dc49(0x38e)]({
          id: s["RemoveSheetsFilterMutation"]["id"],
          params: { unitId: _0x1aa8ed, subUnitId: _0xdd0771["id"] },
        }),
        (0x0, t[_0x37dc49(0x135)])(
          _0x45109e,
          _0x5c1d38[_0x37dc49(0x345)](t["ICommandService"]),
        )["result"]
          ? (_0x5c1d38[_0x37dc49(0x345)](t[_0x37dc49(0x256)])[_0x37dc49(0x462)](
              {
                unitID: _0x1aa8ed,
                undoMutations: _0x14a344,
                redoMutations: _0x45109e,
              },
            ),
            !0x0)
          : !0x1
      );
    },
  },
  Kt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.remove-pivot-field",
    async handler(_0xdd6af8, _0x58792e) {
      if (!_0x58792e) return !0x1;
      let _0x467743 = _0xdd6af8["get"](t[_0x467fce(0x1b2)]),
        _0x34751e = _0xdd6af8[_0x467fce(0x345)](W),
        _0x260898 = _0xdd6af8[_0x467fce(0x345)](t["IUndoRedoService"]),
        {
          pivotTableId: _0x15bc2d,
          fieldIds: _0x4920ec,
          unitId: _0x3d3024,
          subUnitId: _0x27fad8,
        } = _0x58792e,
        _0x3d0508 = (
          await _0x34751e["getPivotDisplayConfig"]({
            unitId: _0x3d3024,
            subUnitId: _0x27fad8,
            pivotTableId: _0x15bc2d,
            params: {
              type: _0x467fce(0x401),
              removePivotField: { fieldIds: _0x4920ec },
            },
          })
        )[_0x467fce(0x409)][_0x467fce(0x401)];
      if (!_0x3d0508) return !0x1;
      let {
          view: _0xe9b61d,
          changesets: _0xa44663,
          isEmpty: _0x97b5f4,
          pivotTableConfig: _0x3cc428,
        } = _0x3d0508,
        _0x29d8e3 = _0x3cc428[_0x467fce(0x376)],
        _0x243e6d = new e[_0x467fce(0x18a)]();
      _0x243e6d[_0x467fce(0x3cb)](_0xe9b61d);
      let _0x1968b7 = {
        cellInfo: _0x29d8e3,
        view: _0x243e6d,
        isEmpty: _0x97b5f4,
      };
      if (
        !(await _0xdd6af8[_0x467fce(0x345)](Z)["asyncInterceptor"][
          "fetchThroughAsyncInterceptors"
        ](R)(!0x0, _0x1968b7))
      )
        return !0x1;
      let _0x4755b = J(_0xdd6af8, _0x243e6d, _0x29d8e3, _0x97b5f4),
        _0x29c704 = $(_0xdd6af8, _0x1968b7),
        { redos: _0x28f6ac, undos: _0x5d9767 } = Q(
          _0x467743,
          { pivotTableId: _0x15bc2d, unitId: _0x3d3024, subUnitId: _0x27fad8 },
          _0xa44663,
        );
      return (0x0, t[_0x467fce(0x135)])(
        [..._0x4755b[_0x467fce(0x214)], ..._0x29c704["redos"], ..._0x28f6ac],
        _0x467743,
      )["result"]
        ? (_0x260898["pushUndoRedo"]({
            unitID: _0x3d3024,
            redoMutations: [
              ..._0x4755b[_0x467fce(0x214)],
              ..._0x29c704[_0x467fce(0x214)],
              ..._0x28f6ac,
            ],
            undoMutations: [
              ..._0x4755b[_0x467fce(0x49e)],
              ..._0x29c704[_0x467fce(0x49e)],
              ..._0x5d9767,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  qt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.remove-pivot-table",
    handler(_0x273d5f, _0x13cbbe) {
      if (!_0x13cbbe) return !0x1;
      let _0x1912e4 = _0x273d5f[_0x42bbf4(0x345)](t["ICommandService"]),
        _0xd5bc2d = _0x273d5f[_0x42bbf4(0x345)](t[_0x42bbf4(0x256)]),
        _0x2eb4fb = _0x273d5f["get"](Y),
        {
          unitId: _0x4fb5a7,
          subUnitId: _0x3989ac,
          pivotTableId: _0x4f4de7,
        } = _0x13cbbe,
        _0x3430f7 = _0x2eb4fb[_0x42bbf4(0x2e6)](
          _0x4fb5a7,
          _0x3989ac,
          _0x4f4de7,
        ),
        _0x377f32 = _0x2eb4fb[_0x42bbf4(0x3f3)](_0x4fb5a7, _0x4f4de7);
      if (!_0x3430f7 || !_0x377f32) return !0x1;
      let _0x125352 = [{ id: Pt["id"], params: _0x13cbbe }],
        _0x29e922 = [
          {
            id: Mt["id"],
            params: {
              unitId: _0x4fb5a7,
              subUnitId: _0x3989ac,
              pivotTableId: _0x4f4de7,
              pivotTableConfig: t["Tools"][_0x42bbf4(0x196)](_0x3430f7),
              collectionConfig:
                t[_0x42bbf4(0x23b)][_0x42bbf4(0x196)](_0x377f32),
            },
          },
        ];
      return (0x0, t[_0x42bbf4(0x135)])(_0x125352, _0x1912e4)[_0x42bbf4(0x409)]
        ? (_0xd5bc2d[_0x42bbf4(0x462)]({
            unitID: _0x4fb5a7,
            redoMutations: _0x125352,
            undoMutations: _0x29e922,
          }),
          !0x0)
        : !0x1;
    },
  },
  Jt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.reset-pivot-fields-config",
    async handler(_0x463661, _0x27929f) {
      if (!_0x27929f) return !0x1;
      let _0x50ae1f = _0x463661["get"](t[_0x183373(0x1b2)]),
        _0x4a59a5 = _0x463661[_0x183373(0x345)](t[_0x183373(0x256)]),
        _0xce6720 = _0x463661[_0x183373(0x345)](W),
        {
          resetArea: _0x4c7aa4,
          pivotTableId: _0x34c8ad,
          unitId: _0x1086c9,
          subUnitId: _0x3a9399,
        } = _0x27929f,
        _0x421bd6 = (
          await _0xce6720["getPivotDisplayConfig"]({
            unitId: _0x1086c9,
            subUnitId: _0x3a9399,
            pivotTableId: _0x34c8ad,
            params: {
              type: _0x183373(0x3c8),
              resetPivotTable: {
                pivotTableId: _0x34c8ad,
                resetArea: _0x4c7aa4,
              },
            },
          })
        )[_0x183373(0x409)][_0x183373(0x3c8)];
      if (!_0x421bd6) return !0x1;
      let { changesets: _0x56dd98 } = _0x421bd6,
        { redos: _0x532263, undos: _0x536a50 } = Q(
          _0x50ae1f,
          { pivotTableId: _0x34c8ad, unitId: _0x1086c9, subUnitId: _0x3a9399 },
          _0x56dd98,
        );
      return (0x0, t[_0x183373(0x135)])(_0x532263, _0x50ae1f)["result"]
        ? (_0x4a59a5[_0x183373(0x462)]({
            unitID: _0x1086c9,
            redoMutations: _0x532263,
            undoMutations: _0x536a50,
          }),
          !0x0)
        : !0x1;
    },
  },
  Yt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-collapse",
    async handler(_0x6836f3, _0x3f3633) {
      let _0x15f158 = _0x6836f3[_0x5c3be5(0x345)](t[_0x5c3be5(0x1b2)]),
        _0x24bcb7 = _0x6836f3[_0x5c3be5(0x345)](W),
        _0x26e2fc = _0x6836f3["get"](X),
        _0x1b7c47 = _0x6836f3[_0x5c3be5(0x345)](t[_0x5c3be5(0x1ba)]),
        _0x5c3d24 = _0x6836f3[_0x5c3be5(0x345)](t[_0x5c3be5(0x1b3)]),
        _0x304be3 = _0x6836f3["get"](t[_0x5c3be5(0x256)]);
      if (!_0x3f3633) return !0x1;
      let {
          unitId: _0x483b70,
          subUnitId: _0x433c0a,
          row: _0x410f75,
          col: _0x3e6702,
          collapse: _0x44522b,
        } = _0x3f3633,
        _0xc651c8 = _0x1b7c47[_0x5c3be5(0x2a4)](_0x483b70);
      if (!_0xc651c8 || !_0xc651c8[_0x5c3be5(0x16b)](_0x433c0a)) return !0x1;
      let _0x34a83e = _0x26e2fc[_0x5c3be5(0x152)](
        _0x483b70,
        _0x433c0a,
        _0x410f75,
        _0x3e6702,
      );
      if (!_0x34a83e) return !0x1;
      let _0x102150 = _0x26e2fc[_0x5c3be5(0x233)](
        _0x483b70,
        _0x433c0a,
        _0x34a83e,
      );
      if (!_0x102150) return !0x1;
      let _0xe881af = _0x26e2fc[_0x5c3be5(0x1dc)](
          _0x483b70,
          _0x433c0a,
          _0x410f75,
          _0x3e6702,
        ),
        _0x2f71ba = ve(_0x410f75, _0x3e6702, _0xe881af, _0x102150),
        _0x4f85d3 = _0x2f71ba == null ? void 0x0 : _0x2f71ba[_0x5c3be5(0x30c)],
        _0x5b4c5e = _0xe881af == null ? void 0x0 : _0xe881af["v"];
      if (
        (_0x5b4c5e === _0x5c3d24["t"](_0x5c3be5(0x241)) &&
          (_0x5b4c5e = e[_0x5c3be5(0x2ad)][_0x5c3be5(0x3e4)]),
        _0x5b4c5e == null || !_0x34a83e || !_0x4f85d3)
      )
        return !0x1;
      let _0x1eba49 = await _0x24bcb7[_0x5c3be5(0x49f)]({
          unitId: _0x483b70,
          subUnitId: _0x433c0a,
          pivotTableId: _0x34a83e,
          params: {
            type: _0x5c3be5(0x19c),
            setPivotCollapse: {
              tableFieldId: _0x4f85d3,
              collapse: _0x44522b,
              item: _0x5b4c5e,
            },
          },
        }),
        _0x10ec54 =
          _0x1eba49 == null
            ? void 0x0
            : _0x1eba49[_0x5c3be5(0x409)]["setPivotCollapse"];
      if (!_0x10ec54) return !0x1;
      let {
          view: _0x2645aa,
          pivotTableConfig: _0x4b26e6,
          isEmpty: _0x405e3d,
          changesets: _0x3fce27,
        } = _0x10ec54,
        _0x48ba44 = new e[_0x5c3be5(0x18a)]();
      _0x48ba44[_0x5c3be5(0x3cb)](_0x2645aa);
      let _0x1f57a4 = _0x4b26e6[_0x5c3be5(0x376)],
        _0x4b08c0 = {
          cellInfo: _0x1f57a4,
          view: _0x48ba44,
          isEmpty: _0x405e3d,
        };
      if (
        !(await _0x6836f3["get"](Z)[_0x5c3be5(0x49b)][
          "fetchThroughAsyncInterceptors"
        ](R)(!0x0, _0x4b08c0))
      )
        return !0x1;
      let _0x2e6ce5 = J(_0x6836f3, _0x48ba44, _0x1f57a4, _0x405e3d),
        _0x33b8af = $(_0x6836f3, _0x4b08c0),
        { redos: _0x3295a4, undos: _0xe68d } = Q(
          _0x15f158,
          { pivotTableId: _0x34a83e, unitId: _0x483b70, subUnitId: _0x433c0a },
          _0x3fce27,
        );
      return (0x0, t["sequenceExecute"])(
        [..._0x2e6ce5["redos"], ..._0x33b8af[_0x5c3be5(0x214)], ..._0x3295a4],
        _0x15f158,
      )[_0x5c3be5(0x409)]
        ? (_0x304be3["pushUndoRedo"]({
            unitID: _0x483b70,
            redoMutations: [
              ..._0x2e6ce5[_0x5c3be5(0x214)],
              ..._0x33b8af[_0x5c3be5(0x214)],
              ..._0x3295a4,
            ],
            undoMutations: [
              ..._0x2e6ce5[_0x5c3be5(0x49e)],
              ..._0x33b8af["undos"],
              ..._0xe68d,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  Xt = {
    id: "sheet.mutation.update-date-group",
    type: t["CommandType"]["MUTATION"],
    handler: (_0x55b9c2, _0x27aa27) => {
      if (!_0x27aa27) return !0x1;
      if (
        _0x55b9c2[_0x3bf89a(0x345)](t[_0x3bf89a(0x174)])["getConfig"](
          _0x3bf89a(0x285),
        )
      )
        return !0x0;
      let {
          unitId: _0x55bbbd,
          subUnitId: _0x34b265,
          pivotTableId: _0xc73c26,
          tableFieldId: _0x170f98,
          dateType: _0x4e799d,
        } = _0x27aa27,
        _0x1655d3 = _0x55b9c2[_0x3bf89a(0x345)](K),
        _0x50f886 = _0x1655d3[_0x3bf89a(0x2fb)](_0xc73c26);
      if (!_0x50f886) return !0x1;
      let _0xb04b42 = _0x50f886[_0x3bf89a(0x25c)](_0x170f98);
      if (!_0xb04b42) return !0x1;
      let _0x40f4f5 = _0xb04b42[_0x3bf89a(0x415)](),
        _0x49d789 = _0x50f886[_0x3bf89a(0x28f)](_0x40f4f5),
        _0x1588e2 =
          (_0x49d789 == null ? void 0x0 : _0x49d789[_0x3bf89a(0x1f7)]()) +
          "\x20-\x20" +
          Ke(_0x55b9c2, _0x4e799d);
      _0x1655d3["getCollection"](_0x55bbbd, _0xc73c26)[_0x3bf89a(0x411)](
        _0xb04b42["id"],
        _0x1588e2,
      );
      let _0x45630d = _0x50f886["getTableFieldById"](_0x170f98);
      if (!_0x45630d) return !0x1;
      if (
        (_0x50f886["renameField"](_0x45630d[_0x3bf89a(0x1b6)](), _0x1588e2),
        _0xb04b42[_0x3bf89a(0x2d4)](_0x4e799d),
        _0x49d789)
      ) {
        let _0x2cf0d2 = _0x55b9c2[_0x3bf89a(0x345)](
          t["IUniverInstanceService"],
        )[_0x3bf89a(0x2a4)](_0x55bbbd, t[_0x3bf89a(0x2b3)][_0x3bf89a(0x333)]);
        (Ge(_0x2cf0d2 == null ? void 0x0 : _0x2cf0d2[_0x3bf89a(0x475)]()),
          _0xb04b42["refreshGroupField"](_0x49d789));
      }
      _0x50f886[_0x3bf89a(0x139)](!0x0);
      let _0x1da04c = _0x1655d3["getPivotTableConfig"](
        _0x55bbbd,
        _0x34b265,
        _0xc73c26,
      );
      return (
        _0x1655d3[_0x3bf89a(0x3b0)]({
          unitId: _0x55bbbd,
          subUnitId: _0x34b265,
          token: _0xc73c26,
          type: _0x3bf89a(0x2d0),
          pivotConfig: _0x1da04c,
        }),
        !0x0
      );
    },
  },
  Zt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-date-group",
    async handler(_0x4d67aa, _0x434c11) {
      if (!_0x434c11) return !0x1;
      let {
          unitId: _0x296ed4,
          subUnitId: _0x261e71,
          pivotTableId: _0x3c63bc,
          tableFieldId: _0x2bbe7c,
          dateType: _0x1d1ed3,
        } = _0x434c11,
        _0x14e300 = _0x4d67aa[_0x28be59(0x345)](t[_0x28be59(0x1b2)]),
        _0x4cd842 = _0x4d67aa[_0x28be59(0x345)](Y),
        _0x10646e = _0x4cd842[_0x28be59(0x2e6)](
          _0x296ed4,
          _0x261e71,
          _0x3c63bc,
        ),
        _0xa25805 = _0x4cd842["getCollection"](_0x296ed4, _0x3c63bc),
        _0x140f46 = Lt(
          _0x10646e == null ? void 0x0 : _0x10646e["fieldsConfig"],
          _0xa25805,
          _0x2bbe7c,
        );
      if (!_0x140f46 || Rt(_0x140f46, _0x1d1ed3)) return !0x1;
      let _0x4481e6 = _0x4d67aa[_0x28be59(0x345)](W),
        _0x367b48 = _0x4d67aa[_0x28be59(0x345)](t[_0x28be59(0x256)]),
        _0x514e27 = (
          await _0x4481e6[_0x28be59(0x49f)]({
            unitId: _0x296ed4,
            subUnitId: _0x261e71,
            pivotTableId: _0x3c63bc,
            params: {
              type: _0x28be59(0x320),
              setPivotDateGroup: {
                tableFieldId: _0x2bbe7c,
                dateType: _0x1d1ed3,
              },
            },
          })
        )[_0x28be59(0x409)][_0x28be59(0x320)];
      if (!_0x514e27) return !0x1;
      let {
          view: _0x6a94bb,
          changesets: _0x415948,
          isEmpty: _0x3c5359,
          pivotTableConfig: _0x2c7d25,
          shouldBeAddedGroupJSON: _0x50e19f,
        } = _0x514e27,
        _0x123c6c = _0x2c7d25[_0x28be59(0x376)],
        _0x2146ea = new e[_0x28be59(0x18a)]();
      _0x2146ea[_0x28be59(0x3cb)](_0x6a94bb);
      let _0x4dff1b = {
        cellInfo: _0x123c6c,
        view: _0x2146ea,
        isEmpty: _0x3c5359,
      };
      if (
        !(await _0x4d67aa["get"](Z)[_0x28be59(0x49b)][_0x28be59(0x226)](R)(
          !0x0,
          _0x4dff1b,
        ))
      )
        return !0x1;
      let _0x51c019 = J(_0x4d67aa, _0x2146ea, _0x123c6c, _0x3c5359),
        _0x1fa78b = $(_0x4d67aa, _0x4dff1b),
        { undos: _0x520431, redos: _0x35824c } = Q(
          _0x14e300,
          { pivotTableId: _0x3c63bc, unitId: _0x296ed4, subUnitId: _0x261e71 },
          _0x415948,
        );
      (_0x50e19f &&
        (_0x35824c[_0x28be59(0x38e)]({
          id: Xe["id"],
          params: {
            pivotTableId: _0x3c63bc,
            fieldJSON: _0x50e19f,
            unitId: _0x296ed4,
            subUnitId: _0x261e71,
          },
        }),
        _0x520431[_0x28be59(0x19f)]({
          id: Ze["id"],
          params: {
            pivotTableId: _0x3c63bc,
            dataFieldId: _0x50e19f["id"],
            unitId: _0x296ed4,
            subUnitId: _0x261e71,
          },
        })),
        _0x140f46[_0x28be59(0x3ce)] === "date-group" &&
          _0x140f46[_0x28be59(0x206)] &&
          (_0x35824c[_0x28be59(0x19f)]({ id: Xt["id"], params: _0x434c11 }),
          _0x520431[_0x28be59(0x19f)]({
            id: Xt["id"],
            params: { ..._0x434c11, dateType: _0x140f46[_0x28be59(0x206)] },
          })));
      let _0x43ba00 = [
          ..._0x51c019["redos"],
          ..._0x1fa78b[_0x28be59(0x214)],
          ..._0x35824c,
        ],
        _0x3df729 = [
          ..._0x51c019[_0x28be59(0x49e)],
          ..._0x1fa78b[_0x28be59(0x49e)],
          ..._0x520431,
        ];
      return (0x0, t[_0x28be59(0x135)])(_0x43ba00, _0x14e300)["result"]
        ? (_0x367b48["pushUndoRedo"]({
            unitID: _0x296ed4,
            redoMutations: _0x43ba00,
            undoMutations: _0x3df729,
          }),
          !0x0)
        : !0x1;
    },
  },
  Qt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-fields-config",
    async handler(_0x232703, _0x1d801b) {
      if (!_0x1d801b) return !0x1;
      let _0x421fad = _0x232703[_0x3608b5(0x345)](t[_0x3608b5(0x1b2)]),
        _0x378c10 = _0x232703["get"](t[_0x3608b5(0x256)]),
        _0x8a4827 = _0x232703[_0x3608b5(0x345)](W),
        {
          pivotTableConfig: _0x18ae2e,
          pivotTableId: _0x37a9b8,
          unitId: _0x563bbf,
          subUnitId: _0x515fd1,
        } = _0x1d801b,
        _0xa6199b = (
          await _0x8a4827[_0x3608b5(0x49f)]({
            unitId: _0x563bbf,
            subUnitId: _0x515fd1,
            pivotTableId: _0x37a9b8,
            params: {
              type: _0x3608b5(0x47f),
              setPivotTableConfig: {
                pivotTableId: _0x37a9b8,
                pivotTableConfig: _0x18ae2e,
              },
            },
          })
        )[_0x3608b5(0x409)][_0x3608b5(0x47f)];
      if (!_0xa6199b) return !0x1;
      let { changesets: _0x420601 } = _0xa6199b,
        { redos: _0x64954, undos: _0xd3c0e6 } = Q(
          _0x421fad,
          { pivotTableId: _0x37a9b8, unitId: _0x563bbf, subUnitId: _0x515fd1 },
          _0x420601,
        );
      return (0x0, t[_0x3608b5(0x135)])(_0x64954, _0x421fad)["result"]
        ? (_0x378c10["pushUndoRedo"]({
            unitID: _0x563bbf,
            redoMutations: _0x64954,
            undoMutations: _0xd3c0e6,
          }),
          !0x0)
        : !0x1;
    },
  },
  $t = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-filter",
    async handler(_0x257673, _0x3d3789) {
      if (!_0x3d3789) return !0x1;
      let _0x2627bb = _0x257673[_0x17cab2(0x345)](t["ICommandService"]),
        {
          pivotTableId: _0x30b8ab,
          tableFieldId: _0x5e1ba0,
          items: _0x272220,
          unitId: _0x4ca0bf,
          subUnitId: _0x2f5a62,
          isAll: _0x2f2837,
        } = _0x3d3789,
        _0x112ca3 = _0x257673["get"](W),
        _0x209eb4 = _0x257673["get"](t[_0x17cab2(0x256)]),
        _0x2b5fa7 = (
          await _0x112ca3[_0x17cab2(0x49f)]({
            unitId: _0x4ca0bf,
            subUnitId: _0x2f5a62,
            pivotTableId: _0x30b8ab,
            params: {
              type: _0x17cab2(0x2e0),
              setPivotFilter: {
                tableFieldId: _0x5e1ba0,
                items: _0x272220,
                isAll: _0x2f2837,
              },
            },
          })
        )[_0x17cab2(0x409)][_0x17cab2(0x2e0)];
      if (!_0x2b5fa7) return !0x1;
      let {
          changesets: _0x11b6e3,
          pivotTableConfig: _0x1d72d3,
          isEmpty: _0x55632a,
          view: _0x14c3f2,
        } = _0x2b5fa7,
        _0x253aab = _0x1d72d3["targetCellInfo"],
        _0x54045b = new e[_0x17cab2(0x18a)]();
      _0x54045b[_0x17cab2(0x3cb)](_0x14c3f2);
      let _0x214d86 = {
        cellInfo: _0x253aab,
        view: _0x54045b,
        isEmpty: _0x55632a,
      };
      if (
        !(await _0x257673[_0x17cab2(0x345)](Z)[_0x17cab2(0x49b)][
          _0x17cab2(0x226)
        ](R)(!0x0, _0x214d86))
      )
        return !0x1;
      let _0x1a4b2b = J(_0x257673, _0x54045b, _0x253aab, _0x55632a),
        _0x1b1e25 = $(_0x257673, _0x214d86),
        { undos: _0x11b475, redos: _0x44a02b } = Q(
          _0x2627bb,
          { pivotTableId: _0x30b8ab, unitId: _0x4ca0bf, subUnitId: _0x2f5a62 },
          _0x11b6e3,
        );
      return (0x0, t[_0x17cab2(0x135)])(
        [
          ..._0x1a4b2b[_0x17cab2(0x214)],
          ..._0x1b1e25[_0x17cab2(0x214)],
          ..._0x44a02b,
        ],
        _0x2627bb,
      )[_0x17cab2(0x409)]
        ? (_0x209eb4["pushUndoRedo"]({
            unitID: _0x4ca0bf,
            redoMutations: [
              ..._0x1a4b2b[_0x17cab2(0x214)],
              ..._0x1b1e25["redos"],
              ..._0x44a02b,
            ],
            undoMutations: [
              ..._0x1a4b2b["undos"],
              ..._0x1b1e25[_0x17cab2(0x49e)],
              ..._0x11b475,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  en = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-layout",
    async handler(_0x13bcf3, _0x30c42e) {
      if (!_0x30c42e) return !0x1;
      let _0x479bc5 = _0x13bcf3[_0x1c2066(0x345)](t[_0x1c2066(0x1b2)]),
        _0xc26300 = _0x13bcf3[_0x1c2066(0x345)](t[_0x1c2066(0x256)]),
        _0xee5c79 = _0x13bcf3[_0x1c2066(0x345)](W),
        {
          layout: _0x341778,
          pivotTableId: _0x34c3ea,
          unitId: _0xd788cc,
          subUnitId: _0x2af883,
        } = _0x30c42e,
        _0x4ed5b7 = (
          await _0xee5c79[_0x1c2066(0x49f)]({
            unitId: _0xd788cc,
            subUnitId: _0x2af883,
            pivotTableId: _0x34c3ea,
            params: {
              type: _0x1c2066(0x3c6),
              setPivotLayout: { pivotTableId: _0x34c3ea, layout: _0x341778 },
            },
          })
        )[_0x1c2066(0x409)][_0x1c2066(0x3c6)];
      if (!_0x4ed5b7) return !0x1;
      let { changesets: _0x345b8b } = _0x4ed5b7,
        { redos: _0x128446, undos: _0xf1e69a } = Q(
          _0x479bc5,
          { pivotTableId: _0x34c3ea, unitId: _0xd788cc, subUnitId: _0x2af883 },
          _0x345b8b,
        );
      return (0x0, t[_0x1c2066(0x135)])(_0x128446, _0x479bc5)[_0x1c2066(0x409)]
        ? (_0xc26300[_0x1c2066(0x462)]({
            unitID: _0xd788cc,
            redoMutations: _0x128446,
            undoMutations: _0xf1e69a,
          }),
          !0x0)
        : !0x1;
    },
  },
  tn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-table-options",
    async handler(_0x69ace0, _0x20915b) {
      if (!_0x20915b) return !0x1;
      let _0x3011e6 = _0x69ace0[_0x3698e3(0x345)](t[_0x3698e3(0x1b2)]),
        _0x37edd1 = _0x69ace0[_0x3698e3(0x345)](t[_0x3698e3(0x256)]),
        _0x34077b = _0x69ace0[_0x3698e3(0x345)](W),
        {
          options: _0x1f9f65,
          pivotTableId: _0x548f83,
          unitId: _0xd41f6e,
          subUnitId: _0x482036,
        } = _0x20915b,
        _0x52b289 = (
          await _0x34077b[_0x3698e3(0x49f)]({
            unitId: _0xd41f6e,
            subUnitId: _0x482036,
            pivotTableId: _0x548f83,
            params: {
              type: _0x3698e3(0x235),
              setOptions: { pivotTableId: _0x548f83, info: _0x1f9f65 },
            },
          })
        )["result"][_0x3698e3(0x3a0)];
      if (!_0x52b289) return !0x1;
      let { changesets: _0x21f2bf } = _0x52b289,
        { redos: _0x5e6525, undos: _0x49a56b } = Q(
          _0x3011e6,
          { pivotTableId: _0x548f83, unitId: _0xd41f6e, subUnitId: _0x482036 },
          _0x21f2bf,
        );
      return (
        (0x0, t["sequenceExecute"])(_0x5e6525, _0x3011e6),
        _0x37edd1[_0x3698e3(0x462)]({
          unitID: _0xd41f6e,
          redoMutations: _0x5e6525,
          undoMutations: _0x49a56b,
        }),
        !0x0
      );
    },
  },
  nn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-sort",
    async handler(_0x3d06b7, _0x84a41c) {
      if (!_0x84a41c) return !0x1;
      let _0x12b1d2 = _0x3d06b7[_0x45222b(0x345)](t["ICommandService"]),
        _0x11189e = _0x3d06b7[_0x45222b(0x345)](t["IUndoRedoService"]),
        _0x31b047 = _0x3d06b7[_0x45222b(0x345)](W),
        _0x425ec2 = _0x3d06b7[_0x45222b(0x345)](t[_0x45222b(0x1b3)]),
        {
          info: _0x46db9e,
          tableFieldId: _0x294d10,
          pivotTableId: _0x456149,
          unitId: _0x4759a4,
          subUnitId: _0x32650d,
        } = _0x84a41c,
        _0x44f664 =
          _0x46db9e === void 0x0 ||
          _0x46db9e[_0x45222b(0x3dd)] === e[_0x45222b(0x173)][_0x45222b(0x13c)]
            ? _0x46db9e
            : {
                ..._0x46db9e,
                sortLocale:
                  _0x46db9e[_0x45222b(0x21c)] ??
                  t[_0x45222b(0x481)][_0x425ec2[_0x45222b(0x44b)]()][
                    _0x45222b(0x44e)
                  ],
              },
        _0x2887b8 = (
          await _0x31b047[_0x45222b(0x49f)]({
            unitId: _0x4759a4,
            subUnitId: _0x32650d,
            pivotTableId: _0x456149,
            params: {
              type: _0x45222b(0x2a0),
              setPivotSort: { tableFieldId: _0x294d10, info: _0x44f664 },
            },
          })
        )[_0x45222b(0x409)]["setPivotSort"];
      if (!_0x2887b8) return !0x1;
      let { changesets: _0x404b6b } = _0x2887b8,
        { redos: _0x20b42c, undos: _0x46c05c } = Q(
          _0x12b1d2,
          { pivotTableId: _0x456149, unitId: _0x4759a4, subUnitId: _0x32650d },
          _0x404b6b,
        );
      return (0x0, t[_0x45222b(0x135)])(_0x20b42c, _0x12b1d2)[_0x45222b(0x409)]
        ? (_0x11189e[_0x45222b(0x462)]({
            unitID: _0x4759a4,
            redoMutations: _0x20b42c,
            undoMutations: _0x46c05c,
          }),
          !0x0)
        : !0x1;
    },
  },
  rn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-value-filter",
    async handler(_0x3f84be, _0x586a11) {
      if (!_0x586a11) return !0x1;
      let _0x28479d = _0x3f84be[_0x15c849(0x345)](t["ICommandService"]),
        {
          pivotTableId: _0x214584,
          fieldId: _0x464ba3,
          valueFilterInfo: _0x227f45,
          unitId: _0x57e401,
          subUnitId: _0x3676ce,
        } = _0x586a11,
        _0x5e7fd9 = _0x3f84be[_0x15c849(0x345)](K)[_0x15c849(0x31f)](
          _0x57e401,
          _0x3676ce,
          _0x214584,
        ),
        _0x12aa19 = !!(
          _0x5e7fd9 &&
          (_0x5e7fd9[_0x15c849(0x39f)][_0x15c849(0x238)](_0x464ba3) ||
            _0x5e7fd9[_0x15c849(0x1de)][_0x15c849(0x238)](_0x464ba3))
        );
      if (
        !_0x5e7fd9 ||
        !_0x12aa19 ||
        (_0x227f45 !== void 0x0 &&
          (_0x227f45[_0x15c849(0x3dd)] !==
            e[_0x15c849(0x362)][_0x15c849(0x3df)] ||
            !_0x5e7fd9["measure"][_0x227f45["valueFieldId"]] ||
            !(0x0, e[_0x15c849(0x3fe)])(_0x227f45[_0x15c849(0x385)])))
      )
        return !0x1;
      let _0x1aae84 = _0x227f45 && {
          ..._0x227f45,
          expected: Array[_0x15c849(0x31a)](_0x227f45[_0x15c849(0x19e)])
            ? _0x227f45[_0x15c849(0x19e)]["concat"]()
            : _0x227f45[_0x15c849(0x19e)],
        },
        _0x182b84 = _0x3f84be[_0x15c849(0x345)](W),
        _0x550d6a = _0x3f84be[_0x15c849(0x345)](t[_0x15c849(0x256)]),
        _0x23e7ed = (
          await _0x182b84["getPivotDisplayConfig"]({
            unitId: _0x57e401,
            subUnitId: _0x3676ce,
            pivotTableId: _0x214584,
            params: {
              type: _0x15c849(0x318),
              setValuePivotFilter: {
                tableFieldId: _0x464ba3,
                filterInfo: _0x1aae84,
              },
            },
          })
        )[_0x15c849(0x409)][_0x15c849(0x318)];
      if (!_0x23e7ed) return !0x1;
      let {
          changesets: _0x2a6dfa,
          pivotTableConfig: _0x20572c,
          isEmpty: _0x19a997,
          view: _0x9817be,
        } = _0x23e7ed,
        _0x5c9d0e = _0x20572c["targetCellInfo"],
        _0x486839 = new e[_0x15c849(0x18a)]();
      _0x486839[_0x15c849(0x3cb)](_0x9817be);
      let _0x263724 = {
        cellInfo: _0x5c9d0e,
        view: _0x486839,
        isEmpty: _0x19a997,
      };
      if (
        !(await _0x3f84be[_0x15c849(0x345)](Z)[_0x15c849(0x49b)][
          "fetchThroughAsyncInterceptors"
        ](R)(!0x0, _0x263724))
      )
        return !0x1;
      let _0x74a2f4 = J(_0x3f84be, _0x486839, _0x5c9d0e, _0x19a997),
        _0x102fa8 = $(_0x3f84be, _0x263724),
        { undos: _0x58b5f7, redos: _0x222f37 } = Q(
          _0x28479d,
          { pivotTableId: _0x214584, unitId: _0x57e401, subUnitId: _0x3676ce },
          _0x2a6dfa,
        );
      return (0x0, t[_0x15c849(0x135)])(
        [
          ..._0x74a2f4[_0x15c849(0x214)],
          ..._0x102fa8[_0x15c849(0x214)],
          ..._0x222f37,
        ],
        _0x28479d,
      )[_0x15c849(0x409)]
        ? (_0x550d6a["pushUndoRedo"]({
            unitID: _0x57e401,
            redoMutations: [
              ..._0x74a2f4[_0x15c849(0x214)],
              ..._0x102fa8["redos"],
              ..._0x222f37,
            ],
            undoMutations: [
              ..._0x74a2f4[_0x15c849(0x49e)],
              ..._0x102fa8[_0x15c849(0x49e)],
              ..._0x58b5f7,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  an = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-field-setting",
    async handler(_0x4e8eff, _0x442634) {
      if (!_0x442634) return !0x1;
      let _0x49d47e = _0x4e8eff[_0x272611(0x345)](t[_0x272611(0x1b2)]),
        _0x24337f = _0x4e8eff[_0x272611(0x345)](t[_0x272611(0x256)]),
        _0x569134 = _0x4e8eff[_0x272611(0x345)](W),
        {
          displayName: _0x39ac16,
          subtotalType: _0x1d6a36,
          format: _0x3ea739,
          showDataAs: _0x4f95c8,
          tableFieldId: _0x4e49ba,
          pivotTableId: _0xc2e991,
          unitId: _0x4de15b,
          subUnitId: _0x437723,
        } = _0x442634,
        _0x34a489 = (
          await _0x569134["getPivotDisplayConfig"]({
            unitId: _0x4de15b,
            subUnitId: _0x437723,
            pivotTableId: _0xc2e991,
            params: {
              type: _0x272611(0x42e),
              setPivotSetting: {
                tableFieldId: _0x4e49ba,
                displayName: _0x39ac16,
                subtotalType: _0x1d6a36,
                format: _0x3ea739,
                showDataAs:
                  _0x4f95c8 === void 0x0 ? void 0x0 : { ..._0x4f95c8 },
              },
            },
          })
        )[_0x272611(0x409)]["setPivotSetting"];
      if (!_0x34a489) return !0x1;
      let {
          changesets: _0xdd7f14,
          view: _0x54dc24,
          pivotTableConfig: _0x19df39,
          isEmpty: _0xcfc8bb,
        } = _0x34a489,
        _0x2715bf = _0x19df39[_0x272611(0x376)],
        _0x35e446 = new e[_0x272611(0x18a)]();
      _0x35e446["formJSON"](_0x54dc24);
      let _0x1de719 = {
        cellInfo: _0x2715bf,
        view: _0x35e446,
        isEmpty: _0xcfc8bb,
      };
      if (
        !(await _0x4e8eff[_0x272611(0x345)](Z)[_0x272611(0x49b)][
          _0x272611(0x226)
        ](R)(!0x0, _0x1de719))
      )
        return !0x1;
      let _0x22b29f = J(_0x4e8eff, _0x35e446, _0x2715bf, _0xcfc8bb),
        _0x3d7966 = $(_0x4e8eff, _0x1de719),
        { undos: _0x4fd972, redos: _0x5be62b } = Q(
          _0x49d47e,
          { pivotTableId: _0xc2e991, unitId: _0x4de15b, subUnitId: _0x437723 },
          _0xdd7f14,
        );
      return (0x0, t[_0x272611(0x135)])(
        [..._0x22b29f["redos"], ..._0x3d7966["redos"], ..._0x5be62b],
        _0x49d47e,
      )["result"]
        ? (_0x24337f[_0x272611(0x462)]({
            unitID: _0x4de15b,
            redoMutations: [
              ..._0x22b29f[_0x272611(0x214)],
              ..._0x3d7966[_0x272611(0x214)],
              ..._0x5be62b,
            ],
            undoMutations: [
              ..._0x22b29f[_0x272611(0x49e)],
              ..._0x3d7966[_0x272611(0x49e)],
              ..._0x4fd972,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  on = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.update-pivot-table-source-range",
    handler(_0x7f26b1, _0x1aacb2) {
      if (!_0x1aacb2) return !0x1;
      if (
        _0x7f26b1["get"](t["IConfigService"])[_0x3c43f2(0x3c0)](
          "SHEET_PIVOT_IN_MAIN_THREAD",
        )
      )
        return !0x0;
      let _0x197349 = _0x7f26b1[_0x3c43f2(0x345)](K),
        {
          pivotTableId: _0x433988,
          deleteIds: _0x3b2096,
          collectionJSON: _0x5ce3d1,
          dataRangeInfo: _0x562b3c,
          unitId: _0x15245f,
          subUnitId: _0xee57c7,
        } = _0x1aacb2,
        _0x2afc09 = _0x197349[_0x3c43f2(0x2fb)](_0x433988),
        _0x24070c = _0x197349[_0x3c43f2(0x2e6)](
          _0x15245f,
          _0xee57c7,
          _0x433988,
        );
      if (!_0x2afc09 || !_0x24070c) return !0x1;
      let { collection: _0x1313d8, updateDataFieldList: _0x4efc4f } = _0x197349[
        _0x3c43f2(0x387)
      ](_0x433988, _0x5ce3d1, _0x562b3c, _0x24070c[_0x3c43f2(0x376)]);
      (_0x197349[_0x3c43f2(0x1a0)](_0x1313d8, _0x4efc4f, _0x562b3c),
        _0x2afc09[_0x3c43f2(0x48f)](_0x1313d8));
      for (let _0x54a244 of _0x3b2096)
        _0x197349[_0x3c43f2(0x3a6)](_0x562b3c[_0x3c43f2(0x386)], _0x54a244);
      let _0x4a9fe5 = _0x197349[_0x3c43f2(0x2e6)](
        _0x15245f,
        _0xee57c7,
        _0x433988,
      );
      return (
        (_0x4a9fe5["sourceRangeInfo"] = JSON[_0x3c43f2(0x2ea)](
          JSON[_0x3c43f2(0x184)](_0x562b3c),
        )),
        _0x197349[_0x3c43f2(0x3b0)]({
          unitId: _0x15245f,
          subUnitId: _0xee57c7,
          token: _0x433988,
          type: _0x3c43f2(0x2d0),
        }),
        !0x0
      );
    },
  },
  sn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.update-pivot-table-source-range",
    async handler(_0x1fbe0a, _0x2aeebd) {
      let _0x2431ad = _0x1fbe0a[_0x12d8c3(0x345)](t["ICommandService"]),
        _0x34fd74 = _0x1fbe0a[_0x12d8c3(0x345)](W),
        _0x37e1ff = _0x1fbe0a[_0x12d8c3(0x345)](t["IUndoRedoService"]);
      if (!_0x2aeebd) return !0x1;
      let {
          token: _0x5d3df9,
          dataRangeInfo: _0x27c346,
          unitId: _0x314a0c,
          subUnitId: _0x5c6cd7,
        } = _0x2aeebd,
        _0x2d10e5 = [],
        _0x34a214 = [],
        _0x2393f6 = (
          await _0x34fd74["getPivotDisplayConfig"]({
            unitId: _0x314a0c,
            subUnitId: _0x5c6cd7,
            pivotTableId: _0x5d3df9,
            params: {
              type: _0x12d8c3(0x310),
              updatePivotSource: {
                dataRangeInfo: _0x27c346,
                unitId: _0x314a0c,
                subUnitId: _0x5c6cd7,
              },
            },
          })
        )[_0x12d8c3(0x409)]["updatePivotSource"];
      if (!_0x2393f6) return !0x1;
      let {
        changesets: _0x522e34,
        deleteIds: _0x22d6cb,
        collectionConfig: _0x2f592c,
        oldCollectionConfig: _0x4c185e,
        view: _0x54d8ae,
        isEmpty: _0x11dbd3,
        pivotTableConfig: _0x49f662,
      } = _0x2393f6;
      (_0x34a214["push"]({
        id: on["id"],
        params: {
          pivotTableId: _0x5d3df9,
          deleteIds: _0x22d6cb,
          collectionJSON: _0x2f592c,
          dataRangeInfo: _0x27c346,
          unitId: _0x314a0c,
          subUnitId: _0x5c6cd7,
        },
      }),
        _0x2d10e5["unshift"]({
          id: on["id"],
          params: {
            pivotTableId: _0x5d3df9,
            deleteIds: [],
            collectionJSON: _0x4c185e,
            dataRangeInfo: _0x49f662[_0x12d8c3(0x33d)],
            unitId: _0x314a0c,
            subUnitId: _0x5c6cd7,
          },
        }));
      let _0x3c99a2 = _0x49f662[_0x12d8c3(0x376)],
        _0x5124a1 = new e[_0x12d8c3(0x18a)]();
      _0x5124a1[_0x12d8c3(0x3cb)](_0x54d8ae);
      let _0x16b3f2 = {
        cellInfo: _0x3c99a2,
        view: _0x5124a1,
        isEmpty: _0x11dbd3,
      };
      if (
        !(await _0x1fbe0a[_0x12d8c3(0x345)](Z)[_0x12d8c3(0x49b)][
          "fetchThroughAsyncInterceptors"
        ](R)(!0x0, _0x16b3f2))
      )
        return !0x1;
      let _0x2c875a = J(_0x1fbe0a, _0x5124a1, _0x3c99a2, _0x11dbd3),
        _0x228fd = $(_0x1fbe0a, _0x16b3f2),
        { redos: _0x396365, undos: _0x14a2ba } = Q(
          _0x2431ad,
          { pivotTableId: _0x5d3df9, unitId: _0x314a0c, subUnitId: _0x5c6cd7 },
          _0x522e34,
        );
      return (0x0, t[_0x12d8c3(0x135)])(
        [
          ..._0x2c875a[_0x12d8c3(0x214)],
          ..._0x228fd["redos"],
          ..._0x34a214,
          ..._0x396365,
        ],
        _0x2431ad,
      )[_0x12d8c3(0x409)]
        ? (_0x37e1ff["pushUndoRedo"]({
            unitID: _0x314a0c,
            redoMutations: [
              ..._0x2c875a[_0x12d8c3(0x214)],
              ..._0x228fd[_0x12d8c3(0x214)],
              ..._0x34a214,
              ..._0x396365,
            ],
            undoMutations: [
              ..._0x2c875a[_0x12d8c3(0x49e)],
              ..._0x228fd[_0x12d8c3(0x49e)],
              ..._0x2d10e5,
              ..._0x14a2ba,
            ],
          }),
          !0x0)
        : !0x1;
    },
  },
  cn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.update-pivot-value-position",
    async handler(_0x9baa3e, _0x2ea635) {
      if (!_0x2ea635) return !0x1;
      let _0x3b72dd = _0x9baa3e[_0x1c6ce9(0x345)](t[_0x1c6ce9(0x1b2)]),
        _0x371cf8 = _0x9baa3e["get"](W),
        _0x3d13ab = _0x9baa3e[_0x1c6ce9(0x345)](t[_0x1c6ce9(0x1ba)]),
        _0x28f8d2 = _0x9baa3e[_0x1c6ce9(0x345)](t[_0x1c6ce9(0x256)]),
        {
          pivotTableId: _0x3ee74c,
          position: _0x109ae2,
          index: _0x2aab83,
        } = _0x2ea635,
        _0x48525f = (0x0, r[_0x1c6ce9(0x1b5)])(_0x3d13ab);
      if (!_0x48525f) return !0x1;
      let { unitId: _0x5eb6a3, subUnitId: _0x2cf465 } = _0x48525f,
        _0x3ffd3e = (
          await _0x371cf8[_0x1c6ce9(0x49f)]({
            unitId: _0x5eb6a3,
            subUnitId: _0x2cf465,
            pivotTableId: _0x3ee74c,
            params: {
              type: _0x1c6ce9(0x2e8),
              updateValuePosition: { position: _0x109ae2, index: _0x2aab83 },
            },
          })
        )[_0x1c6ce9(0x409)][_0x1c6ce9(0x2e8)];
      if (!_0x3ffd3e) return !0x1;
      let {
          changesets: _0x59d03c,
          view: _0x1f68e3,
          isEmpty: _0x38be21,
          pivotTableConfig: _0x41c90f,
        } = _0x3ffd3e,
        _0x21372f = _0x41c90f["targetCellInfo"],
        _0x35ae69 = new e[_0x1c6ce9(0x18a)]();
      _0x35ae69["formJSON"](_0x1f68e3);
      let _0x2ce417 = _0x9baa3e["get"](Z),
        _0x2dd5d6 = {
          cellInfo: _0x21372f,
          view: _0x35ae69,
          isEmpty: _0x38be21,
        };
      if (
        !(await _0x2ce417[_0x1c6ce9(0x49b)]["fetchThroughAsyncInterceptors"](R)(
          !0x0,
          _0x2dd5d6,
        ))
      )
        return !0x1;
      let _0x4b6e9f = J(_0x9baa3e, _0x35ae69, _0x21372f, _0x38be21),
        _0x1d7e31 = $(_0x9baa3e, _0x2dd5d6),
        { undos: _0x58db0e, redos: _0x221f47 } = Q(
          _0x3b72dd,
          { pivotTableId: _0x3ee74c, unitId: _0x5eb6a3, subUnitId: _0x2cf465 },
          _0x59d03c,
        );
      return (0x0, t["sequenceExecute"])(
        [
          ..._0x4b6e9f[_0x1c6ce9(0x214)],
          ..._0x1d7e31[_0x1c6ce9(0x214)],
          ..._0x221f47,
        ],
        _0x3b72dd,
      )["result"]
        ? (_0x28f8d2[_0x1c6ce9(0x462)]({
            unitID: _0x5eb6a3,
            redoMutations: [
              ..._0x4b6e9f["redos"],
              ..._0x1d7e31["redos"],
              ..._0x221f47,
            ],
            undoMutations: [
              ..._0x4b6e9f[_0x1c6ce9(0x49e)],
              ..._0x1d7e31[_0x1c6ce9(0x49e)],
              ..._0x58db0e,
            ],
          }),
          !0x0)
        : !0x1;
    },
  };
var ln = "@univerjs-pro/sheets-pivot",
  un = "1.0.0-insiders.20260907-70fc579";
const dn = {
    id: "sheet.command.update-date-group",
    type: t["CommandType"]["COMMAND"],
    handler: (_0x1bc58a, _0x57783c) => {
      if (!_0x57783c) return !0x1;
      let _0x2dc574 = _0x1bc58a[_0x18add1(0x345)](t["IUndoRedoService"]),
        {
          unitId: _0x3464c4,
          subUnitId: _0x30ac5b,
          pivotTableId: _0x3fa217,
          tableFieldId: _0x2ae6ea,
        } = _0x57783c,
        _0x2fe447 = [],
        _0x164e84 = [],
        _0x485d2d = _0x1bc58a[_0x18add1(0x345)](Y),
        _0x15e4d8 = _0x485d2d["getCollection"](_0x3464c4, _0x3fa217),
        _0x3c5ac0 = _0x485d2d["getPivotTableConfig"](
          _0x3464c4,
          _0x30ac5b,
          _0x3fa217,
        );
      if (!(_0x3c5ac0 != null && _0x3c5ac0[_0x18add1(0x2a9)][_0x18add1(0x230)]))
        return !0x1;
      let _0x1a9166 = Object[_0x18add1(0x2b9)](
        _0x3c5ac0[_0x18add1(0x2a9)][_0x18add1(0x230)],
      )[_0x18add1(0x372)]((_0x19b918) => _0x19b918["id"] === _0x2ae6ea);
      if (!_0x1a9166) return !0x1;
      let _0x3c37b6 = _0x1a9166[_0x18add1(0x1cb)];
      if (!(_0x15e4d8 != null && _0x15e4d8[_0x18add1(0x1ee)])) return !0x1;
      let _0x198606 = Object[_0x18add1(0x2b9)](
        _0x15e4d8 == null ? void 0x0 : _0x15e4d8[_0x18add1(0x1ee)],
      )[_0x18add1(0x372)]((_0x240e35) => _0x240e35["id"] === _0x3c37b6);
      return _0x198606
        ? ((0x0, e[_0x18add1(0x4b6)])(_0x198606) &&
            _0x2fe447[_0x18add1(0x19f)]({
              id: Xt["id"],
              params: { ..._0x57783c, dateType: _0x198606["dateType"] },
            }),
          _0x164e84[_0x18add1(0x19f)]({
            id: Xt["id"],
            params: { ..._0x57783c },
          }),
          (0x0, t["sequenceExecute"])(
            _0x164e84,
            _0x1bc58a[_0x18add1(0x345)](t["ICommandService"]),
          )["result"]
            ? (_0x2dc574[_0x18add1(0x462)]({
                unitID: _0x3464c4,
                undoMutations: _0x2fe447,
                redoMutations: _0x164e84,
              }),
              !0x0)
            : !0x1)
        : !0x1;
    },
  },
  fn = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.operation.pivot-table-view-formula-mark-dirty",
    handler() {
      return !0x0;
    },
  },
  pn = () => ({ runtimeCellData: {}, dirtyRanges: {} }),
  mn = (_0x57a2a0, _0x1312f8, _0x3f529d) => {
    let _0x4b5af5 = _0x57a2a0[_0x176a59(0x2c5)];
    (_0x57a2a0["iterateFieldDim"]((_0x46012a) => {
      const _0x1f2372 = _0x176a59;
      let _0x29fc02 = _0x46012a[_0x1f2372(0x1b6)](),
        _0x3bc7bd = _0x46012a[_0x1f2372(0x2f6)](),
        _0x56a331 = _0x46012a[_0x1f2372(0x1b0)](),
        _0x122fff = _0x46012a["getDisplayName"]();
      _0x1312f8[_0x3bc7bd] &&
        _0x1312f8[_0x3bc7bd] === _0x122fff &&
        _0x56a331 === _0x122fff &&
        (_0x57a2a0["renameField"](
          _0x29fc02,
          _0x4b5af5[_0x1f2372(0x340)](_0x3bc7bd),
        ),
        _0x46012a[_0x1f2372(0x3aa)](_0x4b5af5[_0x1f2372(0x340)](_0x3bc7bd)));
    }),
      _0x57a2a0[_0x176a59(0x46e)](
        e["PivotTableFiledAreaEnum"][_0x176a59(0x1df)],
        (_0x4496fb) => {
          const _0x3eccf0 = _0x176a59;
          let _0x101c6e = _0x4496fb["getId"](),
            _0x6096a5 = _0x4496fb[_0x3eccf0(0x2f6)](),
            _0x3635e5 = _0x4496fb[_0x3eccf0(0x1b0)](),
            _0x307e32 = _0x4496fb[_0x3eccf0(0x340)](),
            _0x1bcf8b = _0x4496fb[_0x3eccf0(0x455)](),
            _0x5ee554 = _0x3f529d(_0x3635e5, _0x1bcf8b);
          _0x1312f8[_0x6096a5] &&
            _0x1312f8[_0x6096a5] === _0x3635e5 &&
            _0x5ee554 === _0x307e32 &&
            (_0x57a2a0[_0x3eccf0(0x15c)](
              _0x101c6e,
              _0x3f529d(_0x4b5af5[_0x3eccf0(0x340)](_0x6096a5), _0x1bcf8b),
            ),
            _0x4496fb["setSourceName"](_0x4b5af5[_0x3eccf0(0x340)](_0x6096a5)));
        },
      ));
  },
  hn = (_0x1447ca, _0x36ed6b, _0x27da27) => {
    var _0x4dca3c, _0x3e5e29;
    let { arrayFormulaCellData: _0x23f513, unitData: _0x393672 } = _0x36ed6b,
      { unitId: _0x34d1c1, subUnitId: _0x4da6ba } = _0x27da27,
      _0x242e20 = _0x27da27["range"],
      { startColumn: _0x50a67e, endColumn: _0x295cfd } = _0x242e20,
      _0x56e416 =
        _0x23f513 == null || (_0x4dca3c = _0x23f513[_0x34d1c1]) == null
          ? void 0x0
          : _0x4dca3c[_0x4da6ba],
      _0x1050e2 =
        _0x393672 == null || (_0x3e5e29 = _0x393672[_0x34d1c1]) == null
          ? void 0x0
          : _0x3e5e29[_0x4da6ba],
      _0x4b8967 = new Set(),
      _0x3b9da1 = _0x295cfd - _0x50a67e + 0x1,
      { dirtyRanges: _0x3225f } = _0x1447ca;
    if (_0x3225f)
      for (let {
        range: _0x1a862,
        sheetId: _0x57e064,
        unitId: _0x1c3390,
      } of _0x3225f) {
        if (_0x57e064 !== _0x4da6ba || _0x34d1c1 !== _0x1c3390) continue;
        let _0x2dcb61 = (0x0, t[_0x4b6746(0x373)])(_0x1a862, _0x242e20);
        if (_0x2dcb61) {
          let { startColumn: _0x585af7, endColumn: _0x346a43 } = _0x2dcb61;
          for (let _0x215b7d = _0x585af7; _0x215b7d <= _0x346a43; _0x215b7d++)
            _0x4b8967[_0x4b6746(0x3db)](_0x215b7d);
        }
      }
    if (
      _0x4b8967[_0x4b6746(0x189)] === _0x3b9da1 ||
      _0x4b8967[_0x4b6746(0x189)] === _0x3b9da1
    )
      return Array[_0x4b6746(0x144)](_0x4b8967);
    if (_0x1050e2) {
      let _0xa91bc6 = _0x1050e2["getMatrix"](),
        _0x2d94e6 = Object[_0x4b6746(0x2a8)](_0xa91bc6);
      for (let _0x401062 of _0x2d94e6) {
        let _0x29f0d9 = _0xa91bc6[Number(_0x401062)];
        if (_0x4b8967["size"] === _0x3b9da1) break;
        for (let _0x1e5c96 in _0x29f0d9) {
          let _0x3fdb64 = Number(_0x1e5c96);
          _0x3fdb64 < _0x50a67e ||
            _0x3fdb64 > _0x295cfd ||
            _0x4b8967[_0x4b6746(0x3db)](_0x3fdb64);
        }
      }
    }
    if (_0x56e416) {
      let _0x1390be = _0x56e416[_0x4b6746(0x3b7)](),
        _0x58dfba = Object[_0x4b6746(0x2a8)](_0x1390be);
      for (let _0x3e2135 of _0x58dfba) {
        let _0x18906f = _0x1390be[Number(_0x3e2135)];
        if (_0x4b8967[_0x4b6746(0x189)] === _0x3b9da1) break;
        for (let _0x35a1a7 in _0x18906f) {
          let _0x33c5d0 = Number(_0x35a1a7);
          _0x33c5d0 < _0x50a67e ||
            _0x33c5d0 > _0x295cfd ||
            _0x4b8967[_0x4b6746(0x3db)](_0x33c5d0);
        }
      }
    }
    return Array[_0x4b6746(0x144)](_0x4b8967);
  },
  gn = (_0xbff194) => {
    let _0x5ddf25 = new Set(),
      _0x4082c3 = [];
    for (let _0x18ec1e of _0xbff194) {
      let _0x11de85 =
        _0x18ec1e["startRow"] +
        "," +
        _0x18ec1e["endRow"] +
        "," +
        _0x18ec1e[_0x2b0cd2(0x205)] +
        "," +
        _0x18ec1e[_0x2b0cd2(0x2bc)];
      _0x5ddf25[_0x2b0cd2(0x442)](_0x11de85) ||
        (_0x5ddf25[_0x2b0cd2(0x3db)](_0x11de85),
        _0x4082c3[_0x2b0cd2(0x19f)](_0x18ec1e));
    }
    return _0x4082c3;
  };
let _n = class extends t["Disposable"] {
  constructor(
    _0xb39f91,
    _0x2ccd63,
    _0xa8a08,
    _0x744305,
    _0x40f1ba,
    _0x3b9046,
    _0x3dabe9,
  ) {
    (super(),
      (this[_0x5e8eb3(0x480)] = _0xb39f91),
      (this["_featureCalculationManagerService"] = _0x2ccd63),
      (this[_0x5e8eb3(0x1db)] = _0xa8a08),
      (this[_0x5e8eb3(0x294)] = _0x744305),
      (this[_0x5e8eb3(0x483)] = _0x40f1ba),
      (this[_0x5e8eb3(0x1ec)] = _0x3b9046),
      (this[_0x5e8eb3(0x259)] = _0x3dabe9),
      V(this, _0x5e8eb3(0x295), new i[_0x5e8eb3(0x45d)](!0x0)),
      V(this, _0x5e8eb3(0x1fd), (_0x5b5bf8) => {
        const _0x3bd593 = _0x5e8eb3;
        this[_0x3bd593(0x295)][_0x3bd593(0x37c)](!0x1);
      }),
      V(this, _0x5e8eb3(0x244), (_0x454ff3) => {
        const _0x5b4c4c = _0x5e8eb3;
        this["_globalSubject"][_0x5b4c4c(0x37c)](!0x0);
      }),
      this["_init"](),
      this[_0x5e8eb3(0x343)]());
  }
  ["_isAutoDateGroupEnabled"]() {
    var _0x17cdf3;
    return (
      ((_0x17cdf3 = this[_0x2494f1(0x259)]["getConfig"](_0x2494f1(0x48d))) ==
      null
        ? void 0x0
        : _0x17cdf3[_0x2494f1(0x460)]) ?? !0x0
    );
  }
  ["_setDateSystem"](_0x292a45) {
    let _0x1b7b06 = this[_0x329bb9(0x1ec)]["getUnit"](
      _0x292a45,
      t[_0x329bb9(0x2b3)][_0x329bb9(0x333)],
    );
    Ge(_0x1b7b06 == null ? void 0x0 : _0x1b7b06["getDateSystem"]());
  }
  ["_init"]() {
    (this["_subjectCollectionChange"](),
      this[_0x1d5344(0x2da)](),
      this[_0x1d5344(0x39e)](),
      this[_0x1d5344(0x429)]());
  }
  ["_initGlobalComputed"]() {
    (this[_0x1b79c7(0x294)][_0x1b79c7(0x44d)](this[_0x1b79c7(0x295)]),
      e[_0x1b79c7(0x21f)][_0x1b79c7(0x398)](
        e[_0x1b79c7(0x1ed)][_0x1b79c7(0x1be)],
        this[_0x1b79c7(0x1fd)],
      ),
      e[_0x1b79c7(0x21f)][_0x1b79c7(0x398)](
        e[_0x1b79c7(0x1ed)]["onQueryEnd"],
        this[_0x1b79c7(0x244)],
      ));
  }
  ["_initPivotDataGetListener"]() {
    (this[_0x13c15d(0x1e7)](
      this[_0x13c15d(0x1db)][_0x13c15d(0x484)]((_0x271ab6) => {
        const _0x517b60 = _0x13c15d;
        _0x271ab6["id"] === r[_0x517b60(0x404)]["id"] &&
          this[_0x517b60(0x480)][_0x517b60(0x2cb)](_0x271ab6["params"]);
      }),
    ),
      this["disposeWithMe"](
        this[_0x13c15d(0x1db)]["onCommandExecuted"]((_0x440937) => {
          const _0x26e64d = _0x13c15d;
          if (_0x440937["id"] !== re["id"]) return;
          let _0x4f02a1 = _0x440937[_0x26e64d(0x43b)],
            {
              unitId: _0x118495,
              subUnitId: _0x57e923,
              pivotTableId: _0x38f3ee,
            } = _0x4f02a1,
            _0x56aaa2 = _0x4f02a1[_0x26e64d(0x43b)]["type"],
            _0x2cd81c = {},
            _0x34ff9c;
          switch (_0x56aaa2) {
            case _0x26e64d(0x43e):
              {
                let _0x43ff67 = _0x4f02a1["params"][_0x26e64d(0x43e)];
                if (!_0x43ff67) return;
                let {
                    row: _0x46e73b,
                    col: _0xe3baf5,
                    cellData: _0x4115a7,
                    pivotItemRenderInfoCache: _0x253192,
                    tableFieldId: _0x2fbe42,
                  } = _0x43ff67,
                  _0x3a00c3 = this["_sheetsPivotDataSourceModel"][
                    "getPivotTableInstance"
                  ](_0x4f02a1[_0x26e64d(0x4a4)]);
                if (!_0x3a00c3 || !_0x253192) return;
                if (_0x2fbe42) {
                  let _0x447534 = _0x3a00c3[_0x26e64d(0x25c)](_0x2fbe42);
                  if (!_0x447534) return;
                  _0x2cd81c[_0x26e64d(0x43e)] = {
                    ..._0x3a00c3[_0x26e64d(0x2c2)](_0x447534),
                    tableFieldId: _0x2fbe42,
                    pivotTableId: _0x4f02a1[_0x26e64d(0x4a4)],
                    filterInfo: _0x3a00c3["getFilterInfo"](_0x2fbe42),
                    sortInfo: _0x3a00c3[_0x26e64d(0x3ff)](_0x2fbe42),
                    format: _0x3a00c3[_0x26e64d(0x2a2)](_0x2fbe42),
                  };
                } else {
                  let _0x141356 = _e(
                      _0x46e73b,
                      _0xe3baf5,
                      _0x4115a7,
                      _0x3a00c3,
                      _0x253192,
                    ),
                    _0x228483 =
                      _0x141356 == null
                        ? void 0x0
                        : _0x141356[_0x26e64d(0x30f)];
                  if (!_0x228483) return;
                  let _0x436e35 = _0x3a00c3["getDataFieldByTableId"](_0x228483);
                  if (!_0x436e35) return;
                  _0x2cd81c[_0x26e64d(0x43e)] = {
                    ..._0x3a00c3[_0x26e64d(0x2c2)](_0x436e35),
                    tableFieldId: _0x228483,
                    pivotTableId: _0x4f02a1[_0x26e64d(0x4a4)],
                    filterInfo: _0x3a00c3[_0x26e64d(0x36e)](_0x228483),
                    sortInfo: _0x3a00c3[_0x26e64d(0x3ff)](_0x228483),
                    format: _0x3a00c3[_0x26e64d(0x2a2)](_0x228483),
                  };
                }
              }
              break;
            case _0x26e64d(0x314):
              {
                let _0x5898bf = _0x4f02a1[_0x26e64d(0x43b)]["panel"];
                if (!_0x5898bf) return;
                let { pivotTableId: _0xc1f81b } = _0x5898bf,
                  _0x3f773e =
                    this["_sheetsPivotDataSourceModel"][_0x26e64d(0x2fb)](
                      _0xc1f81b,
                    );
                if (!_0x3f773e) return;
                _0x2cd81c[_0x26e64d(0x314)] = xe(
                  _0x3f773e,
                  _0xc1f81b,
                  this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0xc1f81b,
                  ),
                );
              }
              break;
            case _0x26e64d(0x410):
              {
                let _0x54e7e4 =
                    this[_0x26e64d(0x480)]["getPivotTableInstance"](_0x38f3ee),
                  _0x199022 =
                    this["_sheetsPivotDataSourceModel"]["getDataFieldManager"](
                      _0x118495,
                    ),
                  _0x355bfc = _0x199022["getCollection"](_0x38f3ee),
                  _0x391ea2 = null,
                  _0x4db7a8 = this[_0x26e64d(0x480)]["getPivotTableConfig"](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  ),
                  _0x463797 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x410)];
                if (!_0x54e7e4 || !_0x4db7a8 || !_0x463797) return !0x1;
                let {
                  dataFieldId: _0x4498ab,
                  fieldArea: _0x34a00f,
                  index: _0x1f0e74,
                } = _0x463797;
                _0x54e7e4[_0x26e64d(0x44f)]();
                let _0x288c6a = _0x54e7e4[_0x26e64d(0x4c0)](
                  _0x4498ab,
                  _0x34a00f,
                  _0x1f0e74,
                );
                if (
                  _0x288c6a &&
                  _0x34a00f === e[_0x26e64d(0x200)][_0x26e64d(0x1df)]
                ) {
                  let _0x631e6d = _0x288c6a[_0x26e64d(0x1b6)](),
                    _0x33e6db = _0x54e7e4[_0x26e64d(0x25c)](_0x631e6d);
                  if (_0x33e6db) {
                    let _0x27c90d =
                      _0x33e6db == null
                        ? void 0x0
                        : _0x33e6db[_0x26e64d(0x4c2)]();
                    _0x54e7e4[_0x26e64d(0x19d)](
                      _0x288c6a["getId"](),
                      _0x27c90d ===
                        e["PivotDataFieldDataTypeEnum"][_0x26e64d(0x3ea)]
                        ? e[_0x26e64d(0x3cd)][_0x26e64d(0x169)]
                        : e[_0x26e64d(0x3cd)][_0x26e64d(0x466)],
                    );
                  }
                  let _0x5ae029 = _0x54e7e4[_0x26e64d(0x3d8)](),
                    _0x283847 = _0x54e7e4[_0x26e64d(0x199)](),
                    _0x335298 = _0x54e7e4[_0x26e64d(0x4b0)](
                      e[_0x26e64d(0x200)][_0x26e64d(0x1df)],
                    );
                  if (_0x5ae029 === -0x1 && _0x335298 > 0x1) {
                    let _0xb951f3 =
                        _0x283847 === e[_0x26e64d(0x402)]["None"]
                          ? e[_0x26e64d(0x402)][_0x26e64d(0x374)]
                          : _0x283847,
                      _0x4269c9 =
                        _0xb951f3 === e[_0x26e64d(0x402)][_0x26e64d(0x289)]
                          ? e[_0x26e64d(0x200)][_0x26e64d(0x289)]
                          : e[_0x26e64d(0x200)][_0x26e64d(0x374)];
                    _0x54e7e4[_0x26e64d(0x2e8)](
                      _0xb951f3,
                      _0x54e7e4["getFieldCountByArea"](_0x4269c9),
                    );
                  }
                } else {
                  if (
                    _0x288c6a &&
                    (_0x34a00f === e[_0x26e64d(0x200)][_0x26e64d(0x289)] ||
                      _0x34a00f === e[_0x26e64d(0x200)][_0x26e64d(0x374)])
                  ) {
                    let _0xa5d58c = _0x288c6a[_0x26e64d(0x1b6)](),
                      _0x18a993 = _0x54e7e4["getDataFieldByTableId"](_0xa5d58c);
                    if (
                      _0x18a993 &&
                      (_0x18a993 == null
                        ? void 0x0
                        : _0x18a993[_0x26e64d(0x4c2)]()) ===
                        e[_0x26e64d(0x428)][_0x26e64d(0x303)]
                    ) {
                      let _0xe194b2 = _0x18a993["getformat"]();
                      if (
                        (_0xe194b2 &&
                          _0x54e7e4["setFieldFormat"](
                            _0x288c6a[_0x26e64d(0x1b6)](),
                            _0xe194b2,
                          ),
                        this[_0x26e64d(0x2ab)]() &&
                          !_0x355bfc["getFieldIds"]()[_0x26e64d(0x26b)](
                            (_0x302792) => {
                              const _0x5470cc = _0x26e64d;
                              let _0x559316 =
                                _0x355bfc[_0x5470cc(0x1f8)](_0x302792);
                              return (0x0, e[_0x5470cc(0x159)])(_0x559316)
                                ? _0x559316[_0x5470cc(0x464)]()[
                                    _0x5470cc(0x19a)
                                  ] === _0x4498ab
                                : !0x1;
                            },
                          ))
                      ) {
                        let _0x46257e = _0x199022[_0x26e64d(0x263)]();
                        this[_0x26e64d(0x25b)](_0x118495);
                        let _0x523e10 = We(
                            _0x18a993[_0x26e64d(0x22d)],
                            _0x18a993[_0x26e64d(0x22c)],
                          ),
                          _0x1ac9d4 =
                            _0x18a993[_0x26e64d(0x1f7)]() +
                            _0x26e64d(0x328) +
                            Ke(this[_0x26e64d(0x483)], _0x523e10),
                          _0x50ba2a = new e[_0x26e64d(0x257)](
                            _0x46257e,
                            _0x1ac9d4,
                            (0x0, e["generateHexNumber"])(0x3),
                            _0x18a993["getId"](),
                            _0x523e10,
                          );
                        (_0x199022[_0x26e64d(0x30a)](_0x50ba2a),
                          _0x355bfc[_0x26e64d(0x4bf)](_0x46257e, _0x1ac9d4),
                          _0x54e7e4["addFieldWithSourceId"](
                            _0x46257e,
                            _0x34a00f,
                            (_0x1f0e74 ?? 0x0) + 0x1,
                          ),
                          (_0x391ea2 = _0x50ba2a));
                      }
                    }
                  }
                }
                let _0x514eec = _0x54e7e4[_0x26e64d(0x208)](),
                  _0x3bbfe8 = _0x54e7e4["query"]()[_0x26e64d(0x1c6)](),
                  _0x430bed;
                if (_0x391ea2) {
                  _0x430bed = _0x391ea2["toJSON"]();
                  let _0x2e43a7 = _0x391ea2["getId"]();
                  _0x355bfc["deleteField"](_0x2e43a7);
                  let _0x433076 = !0x0;
                  for (let _0x510919 in _0x199022[_0x26e64d(0x1b9)])
                    if (
                      _0x199022[_0x26e64d(0x1b9)][_0x510919][
                        _0x26e64d(0x296)
                      ]()[_0x26e64d(0x238)](_0x2e43a7)
                    ) {
                      _0x433076 = !0x1;
                      break;
                    }
                  _0x433076 && _0x199022[_0x26e64d(0x1ff)](_0x2e43a7);
                }
                _0x2cd81c[_0x26e64d(0x410)] = {
                  view: _0x3bbfe8,
                  changesets: _0x54e7e4["endCollectChangeset"](),
                  isEmpty: _0x514eec,
                  pivotTableConfig: _0x4db7a8,
                  shouldBeAddedGroupJSON: _0x430bed,
                };
              }
              break;
            case _0x26e64d(0x357):
              {
                let _0x5b3697 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x357)];
                if (!_0x5b3697) return;
                let _0x2e1bc0 = _0x5b3697[_0x26e64d(0x33d)],
                  _0x7e7513 = _0x5b3697[_0x26e64d(0x4a4)],
                  { collection: _0x30bc04 } = this[_0x26e64d(0x480)][
                    "createCollectionWithDataRange"
                  ]({
                    unitId: _0x2e1bc0[_0x26e64d(0x386)],
                    sheetName: _0x2e1bc0[_0x26e64d(0x2f5)],
                    subUnitId: _0x2e1bc0[_0x26e64d(0x1bf)],
                    range: _0x2e1bc0[_0x26e64d(0x26a)],
                  }),
                  _0x24aad6 = new e[_0x26e64d(0x21f)](
                    _0x30bc04,
                    void 0x0,
                    _0x7e7513,
                  );
                _0x2cd81c[_0x26e64d(0x357)] = {
                  view: _0x24aad6[_0x26e64d(0x268)](),
                  fieldsConfig: _0x24aad6[_0x26e64d(0x1c6)](),
                  collectionConfig: _0x30bc04[_0x26e64d(0x1c6)](),
                  isEmpty: _0x24aad6[_0x26e64d(0x208)](),
                };
              }
              break;
            case _0x26e64d(0x320):
              {
                let _0x195580 =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x37fc38 =
                    this["_sheetsPivotDataSourceModel"][_0x26e64d(0x430)](
                      _0x118495,
                    ),
                  _0x1db0af = _0x37fc38["getCollection"](_0x38f3ee),
                  _0x22b3d0 = this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  ),
                  _0x308be3 = _0x4f02a1["params"][_0x26e64d(0x320)];
                if (!_0x195580 || !_0x22b3d0 || !_0x308be3) return !0x1;
                let { tableFieldId: _0x4935b4, dateType: _0x453e35 } =
                    _0x308be3,
                  { area: _0x30f5fa, index: _0x5cbaff } =
                    _0x195580["getFieldPositionInfoById"](_0x4935b4);
                if (
                  _0x30f5fa !== e[_0x26e64d(0x200)][_0x26e64d(0x289)] &&
                  _0x30f5fa !== e[_0x26e64d(0x200)][_0x26e64d(0x374)]
                )
                  return !0x1;
                let _0x1d3e72 = _0x195580[_0x26e64d(0x25c)](_0x4935b4);
                if (!_0x1d3e72) return !0x1;
                let _0x19a2aa = _0x195580[_0x26e64d(0x1c6)](),
                  _0xa59283 =
                    _0x30f5fa === e[_0x26e64d(0x200)][_0x26e64d(0x289)]
                      ? _0x19a2aa[_0x26e64d(0x39f)]
                      : _0x19a2aa[_0x26e64d(0x1de)];
                if ((0x0, e["isDateGroupField"])(_0x1d3e72)) {
                  if (_0x1d3e72[_0x26e64d(0x3af)]() === _0x453e35) return !0x1;
                  let _0x28c0ae = _0x195580[_0x26e64d(0x28f)](
                      _0x1d3e72[_0x26e64d(0x415)](),
                    ),
                    _0x5bb7d2 = _0x195580[_0x26e64d(0x3b3)](_0x4935b4);
                  if (
                    !_0x28c0ae ||
                    !_0x5bb7d2 ||
                    _0xa59283["some"]((_0x352800) => {
                      const _0x210ea7 = _0x26e64d;
                      if (_0x352800 === _0x4935b4) return !0x1;
                      let _0x5ea540 = _0x19a2aa[_0x210ea7(0x230)][_0x352800],
                        _0x5c15ad = _0x5ea540
                          ? _0x1db0af[_0x210ea7(0x1f8)](
                              _0x5ea540[_0x210ea7(0x1cb)],
                            )
                          : void 0x0;
                      return _0x5c15ad
                        ? (0x0, e[_0x210ea7(0x159)])(_0x5c15ad) &&
                            _0x5c15ad["getOriginFieldId"]() ===
                              _0x1d3e72[_0x210ea7(0x415)]() &&
                            _0x5c15ad[_0x210ea7(0x3af)]() === _0x453e35
                        : !0x1;
                    })
                  )
                    return !0x1;
                  let _0x4b2acf = _0x1d3e72[_0x26e64d(0x3af)](),
                    _0x4b2171 = { ..._0x1db0af[_0x26e64d(0x1d4)] },
                    _0x4f5479 =
                      _0x28c0ae[_0x26e64d(0x1f7)]() +
                      _0x26e64d(0x328) +
                      Ke(this[_0x26e64d(0x483)], _0x453e35);
                  (_0x195580[_0x26e64d(0x44f)](),
                    _0x1db0af[_0x26e64d(0x411)](
                      _0x1d3e72[_0x26e64d(0x1b6)](),
                      _0x4f5479,
                    ),
                    _0x195580[_0x26e64d(0x15c)](
                      _0x5bb7d2[_0x26e64d(0x1b6)](),
                      _0x4f5479,
                    ),
                    _0x1d3e72[_0x26e64d(0x2d4)](_0x453e35),
                    this[_0x26e64d(0x25b)](_0x118495),
                    _0x1d3e72["refreshGroupField"](_0x28c0ae),
                    _0x195580["setDirty"](!0x0));
                  let _0x1a3581 = _0x195580[_0x26e64d(0x208)](),
                    _0x406972 = _0x195580["query"]()["toJSON"]();
                  (_0x195580[_0x26e64d(0x396)](),
                    _0x1d3e72[_0x26e64d(0x2d4)](_0x4b2acf),
                    this["_setDateSystem"](_0x118495),
                    _0x1d3e72[_0x26e64d(0x4b1)](_0x28c0ae),
                    (_0x1db0af[_0x26e64d(0x1d4)] = _0x4b2171),
                    (_0x2cd81c[_0x26e64d(0x320)] = {
                      view: _0x406972,
                      changesets: [],
                      isEmpty: _0x1a3581,
                      pivotTableConfig: _0x22b3d0,
                    }));
                  break;
                }
                if (
                  _0x1d3e72[_0x26e64d(0x4c2)]() !==
                  e[_0x26e64d(0x428)][_0x26e64d(0x303)]
                )
                  return !0x1;
                let _0x28a9b7 = _0xa59283[_0x26e64d(0x1e9)](_0x4935b4),
                  _0x51a55b = _0x28a9b7 === -0x1 ? _0x5cbaff : _0x28a9b7;
                if (
                  _0xa59283[_0x26e64d(0x26b)]((_0x1152b8, _0x1391bb) => {
                    const _0x564a0b = _0x26e64d;
                    let _0x3e0d0b = _0x19a2aa["dimension"][_0x1152b8];
                    if (!_0x3e0d0b) return !0x1;
                    let _0x4ccb19 = _0x1db0af[_0x564a0b(0x1f8)](
                      _0x3e0d0b["dataFieldId"],
                    );
                    if (
                      (0x0, e["isDateGroupField"])(_0x4ccb19) &&
                      _0x4ccb19[_0x564a0b(0x415)]() ===
                        _0x1d3e72[_0x564a0b(0x1b6)]()
                    ) {
                      if (_0x4ccb19[_0x564a0b(0x3af)]() === _0x453e35)
                        return !0x0;
                      _0x28a9b7 !== -0x1 &&
                        _0x1391bb < _0x28a9b7 &&
                        (_0x51a55b = _0x1391bb + 0x1);
                    }
                    return !0x1;
                  })
                )
                  return !0x1;
                _0x195580["startCollectChangeset"]();
                let _0x253c3d = _0x37fc38[_0x26e64d(0x263)](),
                  _0x43b8e4 =
                    _0x1d3e72[_0x26e64d(0x1f7)]() +
                    _0x26e64d(0x328) +
                    Ke(this[_0x26e64d(0x483)], _0x453e35),
                  _0x51acd8 = new e["DateGroupField"](
                    _0x253c3d,
                    _0x43b8e4,
                    (0x0, e["generateHexNumber"])(0x3),
                    _0x1d3e72[_0x26e64d(0x1b6)](),
                    _0x453e35,
                  );
                (this[_0x26e64d(0x25b)](_0x118495),
                  _0x37fc38[_0x26e64d(0x30a)](_0x51acd8),
                  _0x1db0af["addField"](_0x253c3d, _0x43b8e4),
                  _0x51acd8[_0x26e64d(0x4b1)](_0x1d3e72),
                  _0x195580[_0x26e64d(0x4c0)](_0x253c3d, _0x30f5fa, _0x51a55b),
                  _0x195580[_0x26e64d(0x18c)](_0x4935b4, !0x0));
                let _0x4a73fe = _0x195580[_0x26e64d(0x208)](),
                  _0x6e04b2 = _0x195580["query"]()[_0x26e64d(0x1c6)](),
                  _0x241c39 = _0x51acd8[_0x26e64d(0x1c6)]();
                _0x1db0af[_0x26e64d(0x18e)](_0x253c3d);
                let _0x468170 = !0x0;
                for (let _0x2ea25c in _0x37fc38["collections"])
                  if (
                    _0x37fc38["collections"][_0x2ea25c][_0x26e64d(0x296)]()[
                      _0x26e64d(0x238)
                    ](_0x253c3d)
                  ) {
                    _0x468170 = !0x1;
                    break;
                  }
                (_0x468170 && _0x37fc38[_0x26e64d(0x1ff)](_0x253c3d),
                  (_0x2cd81c["setPivotDateGroup"] = {
                    view: _0x6e04b2,
                    changesets: _0x195580["endCollectChangeset"](),
                    isEmpty: _0x4a73fe,
                    pivotTableConfig: _0x22b3d0,
                    shouldBeAddedGroupJSON: _0x241c39,
                  }));
              }
              break;
            case _0x26e64d(0x465):
              {
                let _0x14224f = _0x4f02a1["params"]["movePivotField"];
                if (!_0x14224f) return;
                let {
                    fieldId: _0x119289,
                    area: _0x16c5d5,
                    index: _0x2a05b9,
                  } = _0x14224f,
                  _0x108250 = this["_sheetsPivotDataSourceModel"][
                    "getPivotTableConfig"
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0x108250) return;
                let _0x369df5 =
                  this[_0x26e64d(0x480)]["getPivotTableInstance"](_0x38f3ee);
                if (!_0x369df5) return;
                _0x369df5["startCollectChangeset"]();
                let { area: _0x2097ec, index: _0x253686 } =
                  _0x369df5[_0x26e64d(0x248)](_0x119289);
                if (
                  (_0x369df5[_0x26e64d(0x35d)](_0x119289, _0x16c5d5, _0x2a05b9),
                  _0x16c5d5 === e[_0x26e64d(0x200)][_0x26e64d(0x1df)] &&
                    _0x369df5["getTableFieldById"](_0x119289)[
                      _0x26e64d(0x455)
                    ]() === void 0x0)
                ) {
                  let _0x4b0b10 = _0x369df5[_0x26e64d(0x3b3)](_0x119289);
                  if (_0x4b0b10 && _0x4b0b10[_0x26e64d(0x455)]() === void 0x0) {
                    let _0x378ba2 = _0x369df5[_0x26e64d(0x25c)](_0x119289);
                    if (_0x378ba2) {
                      let _0x5c12e4 =
                        _0x378ba2 == null
                          ? void 0x0
                          : _0x378ba2[_0x26e64d(0x4c2)]();
                      _0x369df5["setSubtotalType"](
                        _0x119289,
                        _0x5c12e4 === e[_0x26e64d(0x428)]["number"]
                          ? e["PivotSubtotalTypeEnum"][_0x26e64d(0x169)]
                          : e[_0x26e64d(0x3cd)]["count"],
                      );
                    }
                  }
                }
                let _0x48a27a = _0x369df5[_0x26e64d(0x199)](),
                  _0x1eed4b = _0x369df5[_0x26e64d(0x3d8)](),
                  _0x3f0e9b =
                    _0x369df5[_0x26e64d(0x4b0)](
                      e[_0x26e64d(0x200)][_0x26e64d(0x1df)],
                    ) > 0x1;
                if (
                  _0x3f0e9b &&
                  _0x2097ec === _0x16c5d5 &&
                  ((_0x16c5d5 ===
                    e["PivotTableFiledAreaEnum"][_0x26e64d(0x289)] &&
                    _0x48a27a === e[_0x26e64d(0x402)][_0x26e64d(0x289)]) ||
                    (_0x16c5d5 ===
                      e["PivotTableFiledAreaEnum"][_0x26e64d(0x374)] &&
                      _0x48a27a ===
                        e["PivotTableValuePositionEnum"][_0x26e64d(0x374)]))
                ) {
                  let _0x33400f = _0x1eed4b;
                  (_0x253686 <= _0x1eed4b && _0x33400f--,
                    _0x2a05b9 <= _0x1eed4b && _0x33400f++,
                    _0x369df5[_0x26e64d(0x2e8)](_0x48a27a, _0x33400f));
                } else
                  (_0x3f0e9b &&
                    ((_0x2097ec === e[_0x26e64d(0x200)][_0x26e64d(0x289)] &&
                      _0x48a27a === e[_0x26e64d(0x402)][_0x26e64d(0x289)]) ||
                      (_0x2097ec ===
                        e["PivotTableFiledAreaEnum"][_0x26e64d(0x374)] &&
                        _0x48a27a ===
                          e["PivotTableValuePositionEnum"]["Column"])) &&
                    _0x1eed4b >= _0x253686 &&
                    _0x369df5[_0x26e64d(0x2e8)](_0x48a27a, _0x1eed4b - 0x1),
                    _0x3f0e9b &&
                      ((_0x16c5d5 === e["PivotTableFiledAreaEnum"]["Row"] &&
                        _0x48a27a === e[_0x26e64d(0x402)]["Row"]) ||
                        (_0x16c5d5 === e[_0x26e64d(0x200)][_0x26e64d(0x374)] &&
                          _0x48a27a ===
                            e["PivotTableValuePositionEnum"][
                              _0x26e64d(0x374)
                            ])) &&
                      _0x1eed4b >= _0x2a05b9 &&
                      _0x369df5[_0x26e64d(0x2e8)](_0x48a27a, _0x1eed4b + 0x1));
                let _0x40559d = _0x369df5[_0x26e64d(0x268)](),
                  _0x2f8758 = _0x369df5[_0x26e64d(0x208)](),
                  _0x5d0634 = _0x369df5[_0x26e64d(0x396)]();
                _0x2cd81c["movePivotField"] = {
                  view: _0x40559d["toJSON"](),
                  changesets: _0x5d0634,
                  isEmpty: _0x2f8758,
                  pivotTableConfig: _0x108250,
                };
              }
              break;
            case _0x26e64d(0x401):
              {
                let _0x20024a = _0x4f02a1["params"][_0x26e64d(0x401)];
                if (!_0x20024a) return;
                let _0x7a458f = _0x20024a[_0x26e64d(0x2e1)],
                  _0x4c75b4 = this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  );
                if (!_0x4c75b4) return !0x1;
                let _0x528831 =
                  this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee);
                if (!_0x528831) return !0x1;
                _0x528831[_0x26e64d(0x44f)]();
                for (let _0x52742c of _0x7a458f) {
                  let { area: _0x3da1ee } =
                    _0x528831[_0x26e64d(0x248)](_0x52742c);
                  (_0x3da1ee === e[_0x26e64d(0x200)][_0x26e64d(0x1df)] &&
                    _0x528831["removeValueFilterInfoByValueFieldId"](_0x52742c),
                    (_0x3da1ee === e[_0x26e64d(0x200)]["Row"] ||
                      _0x3da1ee === e[_0x26e64d(0x200)]["Column"]) &&
                      _0x528831["removeValueFilterInfo"](_0x52742c),
                    _0x528831[_0x26e64d(0x177)](_0x52742c));
                }
                let _0x5dc94e = _0x528831[_0x26e64d(0x208)](),
                  _0x5bfa00 = _0x528831["query"]()[_0x26e64d(0x1c6)]();
                _0x2cd81c[_0x26e64d(0x401)] = {
                  changesets: _0x528831[_0x26e64d(0x396)](),
                  pivotTableConfig: _0x4c75b4,
                  isEmpty: _0x5dc94e,
                  view: _0x5bfa00,
                };
              }
              break;
            case _0x26e64d(0x2e0):
              {
                let _0x1e23a4 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x2e0)];
                if (!_0x1e23a4) return;
                let {
                    tableFieldId: _0x48dc05,
                    items: _0x156da2,
                    isAll: _0x95ac5d,
                  } = _0x1e23a4,
                  _0x1c1656 =
                    this["_sheetsPivotDataSourceModel"][
                      "getPivotTableInstance"
                    ](_0x38f3ee),
                  _0x125fa5 = this["_sheetsPivotDataSourceModel"][
                    _0x26e64d(0x2e6)
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0x1c1656 || !_0x125fa5) return;
                (_0x1c1656[_0x26e64d(0x44f)](),
                  _0x1c1656[_0x26e64d(0x3b9)](_0x48dc05, {
                    type: e[_0x26e64d(0x362)][_0x26e64d(0x43d)],
                    list: _0x156da2,
                    isAll: _0x95ac5d,
                  }));
                let _0x468eec = _0x1c1656[_0x26e64d(0x208)]();
                _0x2cd81c[_0x26e64d(0x2e0)] = {
                  view: _0x1c1656[_0x26e64d(0x268)]()[_0x26e64d(0x1c6)](),
                  changesets: _0x1c1656[_0x26e64d(0x396)](),
                  isEmpty: _0x468eec,
                  pivotTableConfig: _0x125fa5,
                };
              }
              break;
            case "setValuePivotFilter":
              {
                let _0x466370 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x318)];
                if (!_0x466370) break;
                let { tableFieldId: _0x4072be, filterInfo: _0x2b275b } =
                    _0x466370,
                  _0x4558c2 =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x4d30a5 = this["_sheetsPivotDataSourceModel"][
                    _0x26e64d(0x2e6)
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0x4558c2 || !_0x4d30a5) break;
                _0x4558c2[_0x26e64d(0x44f)]();
                try {
                  _0x4558c2[_0x26e64d(0x453)](_0x4072be, _0x2b275b);
                  let _0x48dd9f = _0x4558c2[_0x26e64d(0x208)](),
                    _0x4e2a53 = _0x4558c2[_0x26e64d(0x268)]()["toJSON"](),
                    _0x2bd0f7 = _0x4558c2["endCollectChangeset"]();
                  _0x2bd0f7[_0x26e64d(0x2b6)] > 0x0 &&
                    (_0x2cd81c["setValuePivotFilter"] = {
                      view: _0x4e2a53,
                      changesets: _0x2bd0f7,
                      isEmpty: _0x48dd9f,
                      pivotTableConfig: _0x4d30a5,
                    });
                } catch (_0x32138b) {
                  (_0x4558c2[_0x26e64d(0x27b)](),
                    (_0x34ff9c =
                      _0x32138b instanceof Error
                        ? _0x32138b[_0x26e64d(0x2f1)]
                        : String(_0x32138b)));
                }
              }
              break;
            case _0x26e64d(0x2a0):
              {
                let _0x3dde26 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x2a0)];
                if (!_0x3dde26) return;
                let { tableFieldId: _0x1ea770, info: _0x313c0e } = _0x3dde26,
                  _0x822ec0 =
                    this["_sheetsPivotDataSourceModel"][_0x26e64d(0x2fb)](
                      _0x38f3ee,
                    ),
                  _0x3db189 = this[_0x26e64d(0x480)]["getPivotTableConfig"](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  );
                if (!_0x822ec0 || !_0x3db189) return;
                (_0x822ec0[_0x26e64d(0x44f)](),
                  _0x822ec0["setSortInfo"](_0x1ea770, _0x313c0e));
                let _0x23822a = _0x822ec0[_0x26e64d(0x208)]();
                _0x2cd81c["setPivotSort"] = {
                  view: _0x822ec0[_0x26e64d(0x268)]()["toJSON"](),
                  changesets: _0x822ec0[_0x26e64d(0x396)](),
                  isEmpty: _0x23822a,
                  pivotTableConfig: _0x3db189,
                };
              }
              break;
            case _0x26e64d(0x42e):
              {
                let _0x4b3501 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x42e)];
                if (!_0x4b3501) break;
                let {
                    tableFieldId: _0x3a5a80,
                    displayName: _0x2cb319,
                    subtotalType: _0x1e6df0,
                    format: _0x173f3f,
                    showDataAs: _0x570714,
                  } = _0x4b3501,
                  _0x3585df =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x1e9d10 = this["_sheetsPivotDataSourceModel"][
                    _0x26e64d(0x2e6)
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (
                  !_0x3585df ||
                  !_0x1e9d10 ||
                  (_0x570714 !== void 0x0 &&
                    (!_0x3585df[_0x26e64d(0x18b)]()[_0x26e64d(0x238)](
                      _0x3a5a80,
                    ) ||
                      !_0x1e9d10[_0x26e64d(0x2a9)]["measure"][_0x3a5a80]))
                )
                  break;
                _0x3585df["startCollectChangeset"]();
                try {
                  (_0x2cb319 !== void 0x0 &&
                    _0x3585df[_0x26e64d(0x15c)](_0x3a5a80, _0x2cb319),
                    _0x1e6df0 !== void 0x0 &&
                      _0x3585df[_0x26e64d(0x19d)](_0x3a5a80, _0x1e6df0),
                    _0x173f3f !== void 0x0 &&
                      _0x3585df[_0x26e64d(0x311)](_0x3a5a80, _0x173f3f),
                    _0x570714 !== void 0x0 &&
                      _0x3585df[_0x26e64d(0x1f1)](_0x3a5a80, _0x570714));
                  let _0x55ef50 = _0x3585df["isEmpty"](),
                    _0x5229f8 =
                      _0x3585df[_0x26e64d(0x268)]()[_0x26e64d(0x1c6)]();
                  _0x2cd81c["setPivotSetting"] = {
                    changesets: _0x3585df[_0x26e64d(0x396)](),
                    pivotTableConfig: _0x1e9d10,
                    isEmpty: _0x55ef50,
                    view: _0x5229f8,
                  };
                } catch (_0x2a249e) {
                  (_0x3585df["cancelCollectChangeset"](),
                    (_0x34ff9c =
                      _0x2a249e instanceof Error
                        ? _0x2a249e[_0x26e64d(0x2f1)]
                        : String(_0x2a249e)));
                }
              }
              break;
            case _0x26e64d(0x310):
              {
                let _0x3debe6 = _0x4f02a1["params"][_0x26e64d(0x310)];
                if (!_0x3debe6) return;
                let {
                    dataRangeInfo: _0x5b3f46,
                    unitId: _0x3fbb35,
                    subUnitId: _0x98b70d,
                  } = _0x3debe6,
                  _0x5f0e4a = this["_sheetsPivotDataSourceModel"][
                    "getPivotTableConfig"
                  ](_0x3fbb35, _0x98b70d, _0x38f3ee),
                  _0x298a6b =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee);
                if (
                  !this["_sheetsPivotDataSourceModel"][_0x26e64d(0x3f3)](
                    _0x3fbb35,
                    _0x38f3ee,
                  ) ||
                  !_0x298a6b ||
                  !_0x5f0e4a
                )
                  return;
                let _0x4fbf9d = this[_0x26e64d(0x480)][_0x26e64d(0x250)](
                    _0x3fbb35,
                    _0x38f3ee,
                    _0x5b3f46,
                  ),
                  _0x2226e2 = this[_0x26e64d(0x480)]
                    ["getCollection"](_0x3fbb35, _0x38f3ee)
                    [_0x26e64d(0x1c6)](),
                  { collection: _0x2e297e } = this[_0x26e64d(0x480)][
                    _0x26e64d(0x419)
                  ]({
                    unitId: _0x5b3f46[_0x26e64d(0x386)],
                    sheetName: _0x5b3f46[_0x26e64d(0x2f5)],
                    subUnitId: _0x5b3f46["subUnitId"],
                    range: _0x5b3f46["range"],
                  }),
                  _0xb0e34e = _0x2e297e[_0x26e64d(0x1c6)]();
                _0x298a6b[_0x26e64d(0x44f)]();
                let _0x23039b =
                  this[_0x26e64d(0x480)]
                    [_0x26e64d(0x430)](_0x3fbb35)
                    [_0x26e64d(0x3f7)]() || e["getAutoDisplayName"];
                _0x298a6b[_0x26e64d(0x3a7)]((_0x42dd70) => {
                  const _0x87020b = _0x26e64d;
                  let _0x1aacb5 = _0x42dd70["getDataFieldId"]();
                  if (!_0x2e297e[_0x87020b(0x14d)](_0x1aacb5)) {
                    let _0xfa2e92 = _0x2e297e[_0x87020b(0x288)](
                      _0x42dd70[_0x87020b(0x1b0)](),
                    );
                    if (_0xfa2e92) {
                      _0x298a6b[_0x87020b(0x43a)](
                        _0x42dd70[_0x87020b(0x1b6)](),
                        _0xfa2e92[_0x87020b(0x1f7)](),
                        _0xfa2e92[_0x87020b(0x1b6)](),
                      );
                      let { area: _0x58e7ea } = _0x298a6b[_0x87020b(0x248)](
                          _0x42dd70[_0x87020b(0x1b6)](),
                        ),
                        _0x2f3d87 = _0x42dd70[_0x87020b(0x1b0)](),
                        _0xd76f3b = _0x42dd70[_0x87020b(0x340)]();
                      if (_0x58e7ea === e[_0x87020b(0x200)]["Value"]) {
                        let _0x5d3a7e = _0x42dd70[_0x87020b(0x455)]();
                        _0x2f3d87 = _0x23039b(
                          _0xfa2e92[_0x87020b(0x1f7)](),
                          _0x5d3a7e,
                        );
                      }
                      _0xd76f3b !== _0x2f3d87 &&
                        _0x298a6b[_0x87020b(0x15c)](
                          _0x42dd70["getId"](),
                          _0x2f3d87,
                        );
                    } else
                      _0x298a6b[_0x87020b(0x177)](
                        _0x42dd70[_0x87020b(0x1b6)](),
                      );
                  }
                });
                let _0x22d4bb = _0x298a6b[_0x26e64d(0x208)]();
                _0x2cd81c[_0x26e64d(0x310)] = {
                  view: _0x298a6b[_0x26e64d(0x268)]()["toJSON"](),
                  changesets: _0x298a6b["endCollectChangeset"](),
                  isEmpty: _0x22d4bb,
                  pivotTableConfig: _0x5f0e4a,
                  collectionConfig: _0xb0e34e,
                  oldCollectionConfig: _0x2226e2,
                  deleteIds: _0x4fbf9d,
                };
              }
              break;
            case _0x26e64d(0x2e8):
              {
                let _0x3842a6 =
                  _0x4f02a1[_0x26e64d(0x43b)]["updateValuePosition"];
                if (!_0x3842a6) return;
                let { position: _0x3bec73, index: _0x2a78cb } = _0x3842a6,
                  _0x3afcc7 = this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  );
                if (!_0x3afcc7) return !0x1;
                let _0x1788ac =
                  this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee);
                if (!_0x1788ac) return !0x1;
                (_0x1788ac[_0x26e64d(0x44f)](),
                  _0x1788ac[_0x26e64d(0x2e8)](_0x3bec73, _0x2a78cb));
                let _0x48ec7a = _0x1788ac[_0x26e64d(0x208)](),
                  _0x441493 = _0x1788ac[_0x26e64d(0x268)]()[_0x26e64d(0x1c6)]();
                _0x2cd81c["updateValuePosition"] = {
                  changesets: _0x1788ac[_0x26e64d(0x396)](),
                  pivotTableConfig: _0x3afcc7,
                  isEmpty: _0x48ec7a,
                  view: _0x441493,
                };
              }
              break;
            case _0x26e64d(0x19c):
              {
                let _0x3199f2 = _0x4f02a1["params"][_0x26e64d(0x19c)];
                if (!_0x3199f2) return;
                let {
                    tableFieldId: _0x55cae7,
                    collapse: _0x84a833,
                    item: _0x17964d,
                  } = _0x3199f2,
                  _0x4f5da2 =
                    this[_0x26e64d(0x480)]["getPivotTableInstance"](_0x38f3ee),
                  _0x3ebf0c = this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  );
                if (!_0x4f5da2 || !_0x3ebf0c) return;
                (_0x4f5da2[_0x26e64d(0x44f)](),
                  _0x4f5da2[_0x26e64d(0x18c)](_0x55cae7, _0x84a833, _0x17964d));
                let _0x9cc187 = _0x4f5da2[_0x26e64d(0x208)]();
                _0x2cd81c[_0x26e64d(0x19c)] = {
                  view: _0x4f5da2[_0x26e64d(0x268)]()["toJSON"](),
                  isEmpty: _0x9cc187,
                  pivotTableConfig: _0x3ebf0c,
                  changesets: _0x4f5da2[_0x26e64d(0x396)](),
                };
              }
              break;
            case _0x26e64d(0x47f):
              {
                let _0x1ca67a = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x47f)];
                if (!_0x1ca67a) return;
                let { pivotTableConfig: _0x479468 } = _0x1ca67a,
                  _0x534ed8 =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x1778ab = this[_0x26e64d(0x480)][_0x26e64d(0x2e6)](
                    _0x118495,
                    _0x57e923,
                    _0x38f3ee,
                  );
                if (!_0x534ed8 || !_0x1778ab) return;
                (_0x534ed8[_0x26e64d(0x44f)](), He(_0x534ed8, _0x479468));
                let _0x3c3125 = _0x534ed8[_0x26e64d(0x208)](),
                  _0x175570 = _0x534ed8["query"]()[_0x26e64d(0x1c6)](),
                  _0x44b9f9 = _0x534ed8["endCollectChangeset"]();
                _0x2cd81c[_0x26e64d(0x47f)] = {
                  view: _0x175570,
                  isEmpty: _0x3c3125,
                  pivotTableConfig: {
                    ..._0x1778ab,
                    fieldsConfig: _0x534ed8[_0x26e64d(0x1c6)](),
                  },
                  changesets: _0x44b9f9,
                };
              }
              break;
            case "resetPivotTable":
              {
                let _0x179eb6 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x3c8)];
                if (!_0x179eb6) return;
                let _0xbfe835 =
                    this["_sheetsPivotDataSourceModel"][
                      "getPivotTableInstance"
                    ](_0x38f3ee),
                  _0x4f9e12 = this["_sheetsPivotDataSourceModel"][
                    "getPivotTableConfig"
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0xbfe835 || !_0x4f9e12) return;
                (_0xbfe835[_0x26e64d(0x44f)](),
                  Ue(_0xbfe835, _0x179eb6[_0x26e64d(0x242)]));
                let _0x1d5d77 = _0xbfe835[_0x26e64d(0x268)]()["toJSON"](),
                  _0x51aa61 = _0xbfe835["endCollectChangeset"]();
                _0x2cd81c[_0x26e64d(0x3c8)] = {
                  view: _0x1d5d77,
                  isEmpty: !0x0,
                  pivotTableConfig: {
                    ..._0x4f9e12,
                    fieldsConfig: _0xbfe835[_0x26e64d(0x1c6)](),
                  },
                  changesets: _0x51aa61,
                };
              }
              break;
            case _0x26e64d(0x235):
              {
                let _0x14fc8a = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x476)];
                if (!_0x14fc8a) return;
                let { info: _0x3be82d } = _0x14fc8a,
                  _0x1408f3 =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x2e2fa9 = this["_sheetsPivotDataSourceModel"][
                    _0x26e64d(0x2e6)
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0x1408f3 || !_0x2e2fa9) return;
                (_0x1408f3[_0x26e64d(0x44f)](),
                  _0x1408f3[_0x26e64d(0x476)](_0x3be82d));
                let _0x1bb104 = _0x1408f3[_0x26e64d(0x208)]();
                _0x2cd81c["setPivotOption"] = {
                  view: _0x1408f3[_0x26e64d(0x268)]()[_0x26e64d(0x1c6)](),
                  isEmpty: _0x1bb104,
                  pivotTableConfig: _0x2e2fa9,
                  changesets: _0x1408f3["endCollectChangeset"](),
                };
              }
              break;
            case _0x26e64d(0x3c6):
              {
                let _0xa90594 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x3c6)];
                if (!_0xa90594) return;
                let { layout: _0x58b42f } = _0xa90594,
                  _0xeaa433 =
                    this[_0x26e64d(0x480)][_0x26e64d(0x2fb)](_0x38f3ee),
                  _0x23cce3 = this["_sheetsPivotDataSourceModel"][
                    _0x26e64d(0x2e6)
                  ](_0x118495, _0x57e923, _0x38f3ee);
                if (!_0xeaa433 || !_0x23cce3) return;
                (_0xeaa433[_0x26e64d(0x44f)](),
                  _0xeaa433["setLayout"](_0x58b42f));
                let _0x8f521c = _0xeaa433["isEmpty"]();
                _0x2cd81c[_0x26e64d(0x3c6)] = {
                  view: _0xeaa433["query"]()[_0x26e64d(0x1c6)](),
                  isEmpty: _0x8f521c,
                  pivotTableConfig: _0x23cce3,
                  changesets: _0xeaa433[_0x26e64d(0x396)](),
                };
              }
              break;
            case _0x26e64d(0x1a5):
              {
                let _0x3d0df7 = _0x4f02a1[_0x26e64d(0x43b)][_0x26e64d(0x326)];
                if (!_0x3d0df7) return;
                let _0xe560d9 = _0x3d0df7["sourceRangeInfo"],
                  _0x5e150c = _0x3d0df7[_0x26e64d(0x4a4)],
                  { collection: _0x4457e8 } = this[_0x26e64d(0x480)][
                    _0x26e64d(0x419)
                  ]({
                    unitId: _0xe560d9["unitId"],
                    sheetName: _0xe560d9["sheetName"],
                    subUnitId: _0xe560d9[_0x26e64d(0x1bf)],
                    range: _0xe560d9[_0x26e64d(0x26a)],
                  }),
                  _0x51bc3b = new e[_0x26e64d(0x21f)](
                    _0x4457e8,
                    void 0x0,
                    _0x5e150c,
                  ),
                  _0x31e17b = _0x4457e8[_0x26e64d(0x296)](),
                  {
                    rows: _0x5324f4,
                    columns: _0x4f9898,
                    filters: _0x1bcf57,
                    values: _0x1f05ac,
                  } = _0x3d0df7["pivotTableIndexConfig"];
                _0x51bc3b[_0x26e64d(0x44f)]();
                for (let {
                  field: _0x575469,
                  selectedItems: _0x2ad260,
                } of _0x5324f4 || []) {
                  let _0x306208 = _0x31e17b[_0x575469];
                  if (_0x306208) {
                    let _0x4f023b = _0x51bc3b[_0x26e64d(0x4c0)](
                      _0x306208,
                      e["PivotTableFiledAreaEnum"][_0x26e64d(0x289)],
                    );
                    _0x2ad260 &&
                      _0x4f023b &&
                      _0x51bc3b[_0x26e64d(0x3b9)](
                        _0x4f023b[_0x26e64d(0x1b6)](),
                        {
                          type: e[_0x26e64d(0x362)][_0x26e64d(0x43d)],
                          list: _0x2ad260,
                          isAll: !0x1,
                        },
                      );
                  }
                }
                for (let {
                  field: _0x57a0fb,
                  selectedItems: _0x629d4a,
                } of _0x4f9898 || []) {
                  let _0x5c5358 = _0x31e17b[_0x57a0fb];
                  if (_0x5c5358) {
                    let _0x7b23bf = _0x51bc3b["addFieldWithSourceId"](
                      _0x5c5358,
                      e[_0x26e64d(0x200)][_0x26e64d(0x374)],
                    );
                    _0x629d4a &&
                      _0x7b23bf &&
                      _0x51bc3b[_0x26e64d(0x3b9)](
                        _0x7b23bf[_0x26e64d(0x1b6)](),
                        {
                          type: e[_0x26e64d(0x362)][_0x26e64d(0x43d)],
                          list: _0x629d4a,
                          isAll: !0x1,
                        },
                      );
                  }
                }
                for (let {
                  field: _0x2b45cf,
                  selectedItems: _0x48df4f,
                } of _0x1bcf57 || []) {
                  let _0x29147f = _0x31e17b[_0x2b45cf];
                  if (_0x29147f) {
                    let _0x1e0387 = _0x51bc3b[_0x26e64d(0x4c0)](
                      _0x29147f,
                      e[_0x26e64d(0x200)]["Filter"],
                    );
                    _0x48df4f &&
                      _0x1e0387 &&
                      _0x51bc3b["setLabelFilterInfo"](
                        _0x1e0387[_0x26e64d(0x1b6)](),
                        {
                          type: e[_0x26e64d(0x362)]["ManualFilter"],
                          list: _0x48df4f,
                          isAll: !0x1,
                        },
                      );
                  }
                }
                for (let {
                  field: _0x3dabb7,
                  subTotalType: _0x35a2ea,
                  formatString: _0x301aaf,
                } of _0x1f05ac || []) {
                  let _0x40f5f9 = _0x4457e8["getFieldById"](
                    _0x31e17b[_0x3dabb7],
                  );
                  if (!_0x40f5f9) continue;
                  let _0x1f0ee4 = _0x31e17b[_0x3dabb7];
                  if (_0x1f0ee4) {
                    let _0x2272bf = _0x51bc3b[_0x26e64d(0x4c0)](
                      _0x1f0ee4,
                      e["PivotTableFiledAreaEnum"][_0x26e64d(0x1df)],
                    );
                    if (_0x2272bf) {
                      if (_0x35a2ea !== void 0x0) {
                        _0x51bc3b[_0x26e64d(0x19d)](
                          _0x2272bf["getId"](),
                          _0x35a2ea,
                        );
                        let _0x10e681 = (
                          this[_0x26e64d(0x480)]
                            ["getDataFieldManager"](_0xe560d9[_0x26e64d(0x386)])
                            [_0x26e64d(0x3f7)]() || e[_0x26e64d(0x423)]
                        )(_0x4457e8[_0x26e64d(0x340)](_0x1f0ee4), _0x35a2ea);
                        _0x51bc3b[_0x26e64d(0x15c)](
                          _0x2272bf[_0x26e64d(0x1b6)](),
                          _0x10e681,
                        );
                      } else {
                        if (_0x40f5f9) {
                          let _0x3ecae5 =
                            _0x40f5f9 == null
                              ? void 0x0
                              : _0x40f5f9[_0x26e64d(0x4c2)]();
                          _0x51bc3b[_0x26e64d(0x19d)](
                            _0x2272bf[_0x26e64d(0x1b6)](),
                            _0x3ecae5 === e[_0x26e64d(0x428)][_0x26e64d(0x3ea)]
                              ? e[_0x26e64d(0x3cd)][_0x26e64d(0x169)]
                              : e[_0x26e64d(0x3cd)]["count"],
                          );
                        }
                      }
                      _0x301aaf &&
                        _0x51bc3b[_0x26e64d(0x311)](
                          _0x2272bf[_0x26e64d(0x1b6)](),
                          _0x301aaf,
                        );
                    }
                  }
                }
                let _0x449a48 = _0x51bc3b[_0x26e64d(0x268)](),
                  _0x491673 = _0x51bc3b[_0x26e64d(0x1c6)](),
                  _0x593814 = _0x51bc3b["isEmpty"](),
                  _0x2dd1bf = _0x51bc3b[_0x26e64d(0x396)]();
                _0x2cd81c[_0x26e64d(0x326)] = {
                  view: _0x449a48,
                  fieldsConfig: _0x491673,
                  collectionConfig: _0x4457e8["toJSON"](),
                  isEmpty: _0x593814,
                  changesets: _0x2dd1bf,
                };
              }
              break;
            case _0x26e64d(0x33f):
              {
                let _0x4b1c43 = we(this["_injector"], _0x4f02a1);
                if (!_0x4b1c43) return;
                let {
                  range: _0x3ae80f,
                  sourceSubUnitId: _0x50a9e8,
                  sourceUnitId: _0x143e12,
                  formatMap: _0x357fd8,
                  indexes: _0x2cc0b4,
                } = _0x4b1c43;
                _0x2cd81c["drillDown"] = {
                  range: _0x3ae80f,
                  sourceSubUnitId: _0x50a9e8,
                  sourceUnitId: _0x143e12,
                  formatMap: _0x357fd8,
                  indexes: _0x2cc0b4,
                };
              }
              break;
          }
          this[_0x26e64d(0x1db)]["executeCommand"](
            ie["id"],
            {
              version: _0x4f02a1[_0x26e64d(0x490)],
              result: _0x2cd81c,
              error: _0x34ff9c,
            },
            { onlyLocal: !0x0 },
          );
        }),
      ));
  }
  ["_initPivotTextInfo"]() {
    this["disposeWithMe"](
      this[_0x12baea(0x1db)][_0x12baea(0x484)]((_0xdd2de0) => {
        const _0x25d6ef = _0x12baea;
        if (_0xdd2de0["id"] !== ae["id"]) return;
        let _0xed7930 = _0xdd2de0[_0x25d6ef(0x43b)];
        return (
          this["_sheetsPivotDataSourceModel"]["setTextInfo"](
            _0xed7930[_0x25d6ef(0x28d)],
            _0xed7930[_0x25d6ef(0x234)],
          ),
          !0x0
        );
      }),
    );
  }
  ["_subjectCollectionChange"]() {
    this[_0x18af4f(0x1e7)](
      this[_0x18af4f(0x480)][_0x18af4f(0x305)][_0x18af4f(0x131)](
        (_0x4b9ca7) => {
          const _0x385d95 = _0x18af4f;
          switch (_0x4b9ca7[_0x385d95(0x3dd)]) {
            case _0x385d95(0x3db):
              _0x4b9ca7[_0x385d95(0x38d)] &&
                _0x4b9ca7[_0x385d95(0x376)] &&
                this["handleSourceRangeChange"](
                  _0x4b9ca7[_0x385d95(0x27e)],
                  _0x4b9ca7["dataRangeInfo"],
                  _0x4b9ca7[_0x385d95(0x376)],
                );
              break;
            case "delete":
              {
                let {
                  unitId: _0x43bf70,
                  subUnitId: _0x391bae,
                  token: _0x54f879,
                } = _0x4b9ca7;
                _0x43bf70 &&
                  _0x391bae &&
                  _0x54f879 &&
                  this[_0x385d95(0x1b7)](_0x43bf70, _0x391bae, _0x54f879);
              }
              break;
            case _0x385d95(0x420):
              {
                let {
                    token: _0x116cd1,
                    oldSourceRangeInfo: _0x398e22,
                    dataRangeInfo: _0xc30c91,
                    targetCellInfo: _0xdbc3a8,
                  } = _0x4b9ca7,
                  { unitId: _0x5bc4e0, subUnitId: _0x31a2b3 } = _0x398e22 || {};
                (_0x5bc4e0 &&
                  _0x31a2b3 &&
                  _0x116cd1 &&
                  this[_0x385d95(0x1b7)](_0x5bc4e0, _0x31a2b3, _0x116cd1),
                  _0xc30c91 &&
                    _0xdbc3a8 &&
                    this[_0x385d95(0x36d)](_0x116cd1, _0xc30c91, _0xdbc3a8));
              }
              break;
          }
        },
      ),
    );
  }
  ["_subjectFieldsCollectionChange"]() {
    this[_0x1051e6(0x1e7)](
      this[_0x1051e6(0x480)]["fieldsCollectionChange$"][_0x1051e6(0x131)](
        (_0x2eb9e9) => {
          const _0x28e607 = _0x1051e6;
          Object[_0x28e607(0x2a8)](_0x2eb9e9)[_0x28e607(0x231)]((_0x446617) => {
            const _0x2c1652 = _0x28e607;
            let _0x55b16e =
              this[_0x2c1652(0x480)]["getTargetByPivotId"](_0x446617);
            if (_0x55b16e) {
              let _0x3e5e7e = this["_sheetsPivotDataSourceModel"][
                _0x2c1652(0x2e6)
              ](
                _0x55b16e == null ? void 0x0 : _0x55b16e[_0x2c1652(0x386)],
                _0x55b16e == null ? void 0x0 : _0x55b16e[_0x2c1652(0x1bf)],
                _0x446617,
              );
              _0x3e5e7e &&
                (this["handleSourceRangeChange"](
                  _0x446617,
                  _0x3e5e7e[_0x2c1652(0x33d)],
                  _0x3e5e7e[_0x2c1652(0x376)],
                ),
                this[_0x2c1652(0x40f)]([
                  {
                    unitId: _0x55b16e[_0x2c1652(0x386)],
                    subUnitId: _0x55b16e[_0x2c1652(0x1bf)],
                    token: _0x446617,
                  },
                ]));
            }
          });
        },
      ),
    );
  }
  ["_subjectViewChange"]() {
    this["disposeWithMe"](
      this[_0x4d9069(0x480)][_0x4d9069(0x286)]["subscribe"]((_0x5866cd) => {
        const _0x33ede0 = _0x4d9069;
        let {
          unitId: _0x970a02,
          subUnitId: _0x483321,
          pivotTableId: _0x51dceb,
        } = _0x5866cd;
        _0x970a02 &&
          _0x483321 &&
          _0x51dceb &&
          this[_0x33ede0(0x40f)]([
            { unitId: _0x970a02, subUnitId: _0x483321, token: _0x51dceb },
          ]);
      }),
    );
  }
  ["triggerDirtyFeature"](_0x4572fb) {
    let _0x475017 = {};
    (_0x4572fb["forEach"]((_0x1dbf03) => {
      let {
        unitId: _0x267fdc,
        subUnitId: _0x55ca52,
        token: _0x257150,
      } = _0x1dbf03;
      ((_0x475017[_0x267fdc] = _0x475017[_0x267fdc] ?? {}),
        (_0x475017[_0x267fdc][_0x55ca52] =
          _0x475017[_0x267fdc][_0x55ca52] ?? {}),
        (_0x475017[_0x267fdc][_0x55ca52][_0x257150] = !0x0));
    }),
      this[_0xeab09a(0x1db)]["executeCommand"](fn["id"], _0x475017));
  }
  ["removeSourceRangeChange"](_0x1a9e7b, _0x48eab8, _0x26afc9) {
    this[_0x246e51(0x23f)][_0x246e51(0x14b)](_0x1a9e7b, _0x48eab8, [_0x26afc9]);
  }
  ["handleSourceRangeChange"](_0xe9f379, _0x362279, _0x7162e1) {
    let { unitId: _0x3af8ef, subUnitId: _0x3c39f8 } = _0x362279;
    this[_0x165307(0x23f)][_0x165307(0x442)](
      _0x7162e1[_0x165307(0x386)],
      _0x7162e1[_0x165307(0x1bf)],
      _0xe9f379,
    ) && this[_0x165307(0x1b7)](_0x3af8ef, _0x3c39f8, _0xe9f379);
    let _0x3cbbc2 = { sheetId: _0x3c39f8, ..._0x362279 };
    this[_0x165307(0x23f)][_0x165307(0x2b2)](
      _0x7162e1[_0x165307(0x386)],
      _0x7162e1["subUnitId"],
      _0xe9f379,
      {
        unitId: _0x7162e1[_0x165307(0x386)],
        subUnitId: _0x7162e1[_0x165307(0x1bf)],
        dependencyRanges: [_0x3cbbc2],
        getDirtyData: (_0x2fd57a, _0x2516c9) => {
          const _0x4f8849 = _0x165307;
          let _0x3f3dce = this["_sheetsPivotDataSourceModel"],
            _0x2d9d31 = _0x3f3dce[_0x4f8849(0x16f)](_0xe9f379);
          if (!_0x2d9d31) return pn();
          let { unitId: _0x240ec7, subUnitId: _0x301a00 } = _0x2d9d31,
            _0x29042c = hn(_0x2fd57a, _0x2516c9, _0x362279);
          if (_0x29042c[_0x4f8849(0x2b6)] > 0x0) {
            let _0x4225fa = _0x3f3dce[_0x4f8849(0x3f3)](_0x3af8ef, _0xe9f379),
              _0x34c799 = _0x4225fa["getFieldIds"](),
              _0x32628f = this[_0x4f8849(0x20f)](
                _0x362279[_0x4f8849(0x386)],
                _0x362279["subUnitId"],
                _0x2516c9,
              ),
              _0x4289b9 = {},
              _0x5753fa =
                this[_0x4f8849(0x480)]
                  [_0x4f8849(0x430)](_0x240ec7)
                  [_0x4f8849(0x3f7)]() || e["getAutoDisplayName"],
              _0x177c8b = [];
            for (let _0x42b172 of _0x29042c) {
              let _0xc686ed =
                  _0x42b172 -
                  (_0x362279[_0x4f8849(0x26a)][_0x4f8849(0x205)] || 0x0),
                _0x57c990 = _0x34c799[_0xc686ed];
              (_0x177c8b["push"](_0x57c990),
                (_0x4289b9[_0x57c990] =
                  _0x4225fa[_0x4f8849(0x1f8)](_0x57c990)["getName"]()),
                _0x3f3dce[_0x4f8849(0x430)](_0x3af8ef)[_0x4f8849(0x21b)](
                  _0x57c990,
                  _0x362279,
                  _0xc686ed,
                  _0x32628f,
                ));
            }
            (_0x4225fa[_0x4f8849(0x47d)](_0x177c8b)["forEach"]((_0x24202f) => {
              const _0x3db294 = _0x4f8849;
              let [_0x13c793, _0x311ba5] = _0x24202f,
                _0x3951a5 = _0x4225fa[_0x3db294(0x1f8)](_0x13c793),
                _0x88408 = _0x4225fa[_0x3db294(0x1f8)](_0x311ba5);
              _0x3951a5 &&
                _0x88408 &&
                ((0x0, e["isDateGroupField"])(_0x3951a5) &&
                  this[_0x3db294(0x25b)](_0x3af8ef),
                _0x3951a5["refreshGroupField"](_0x88408));
            }),
              _0x4225fa[_0x4f8849(0x272)]());
            let _0x2fba1c = _0x3f3dce[_0x4f8849(0x2fb)](_0xe9f379);
            if (_0x2fba1c) {
              (mn(_0x2fba1c, _0x4289b9, _0x5753fa),
                _0x2fba1c[_0x4f8849(0x139)](!0x0));
              let _0x524c53 = _0x2fba1c[_0x4f8849(0x268)](),
                _0x3839c8 = _0x3f3dce[_0x4f8849(0x2e6)](
                  _0x240ec7,
                  _0x301a00,
                  _0xe9f379,
                ),
                _0x2e4d32 =
                  _0x3f3dce[_0x4f8849(0x430)](_0x3af8ef)[_0x4f8849(0x1c6)]();
              _0x3f3dce["updateView"](
                _0x240ec7,
                _0x301a00,
                _0x4f8849(0x2d0),
                _0xe9f379,
                _0x524c53,
                _0x3839c8,
                _0x2e4d32,
                !0x0,
              );
            }
          }
          return this[_0x4f8849(0x32f)](_0x240ec7, _0x301a00, _0xe9f379);
        },
      },
    );
  }
  ["getMatrixFromRunTimeData"](_0x52754c, _0x55e0a4, _0x392a25) {
    var _0x520be7, _0x59ff01;
    let { arrayFormulaCellData: _0x28f4cf, unitData: _0x234944 } = _0x392a25;
    return {
      arrayFormulaCellDataMatrix:
        _0x28f4cf == null || (_0x520be7 = _0x28f4cf[_0x52754c]) == null
          ? void 0x0
          : _0x520be7[_0x55e0a4],
      unitDataMatrix:
        _0x234944 == null || (_0x59ff01 = _0x234944[_0x52754c]) == null
          ? void 0x0
          : _0x59ff01[_0x55e0a4],
    };
  }
  ["getDirtyInfo"](_0x3ba13d, _0x543e1f, _0x2ad154) {
    let _0x2e44e1 = this[_0x5b1fbc(0x480)]["getViewData"](
        _0x3ba13d,
        _0x543e1f,
        _0x2ad154,
      ),
      _0x4a0473 = [],
      _0x68c5d = new t["ObjectMatrix"]();
    if (_0x2e44e1) {
      let {
          rangeCache: _0x3e7338,
          matrix: _0x2771e2,
          oldRangeCache: _0xf15db4,
          oldMatrix: _0x382d78,
        } = _0x2e44e1,
        _0x3efff3 = Ce(_0xf15db4),
        _0x22bd9f = Ce(_0x3e7338);
      (_0x4a0473["push"](..._0x22bd9f, ..._0x3efff3),
        _0x382d78 &&
          _0xf15db4 &&
          _0x3efff3[_0x5b1fbc(0x231)]((_0x751cde) => {
            const _0x370405 = _0x5b1fbc;
            for (
              let _0x289f26 = _0x751cde[_0x370405(0x3f1)];
              _0x289f26 <= _0x751cde[_0x370405(0x150)];
              _0x289f26++
            )
              for (
                let _0x66edab = _0x751cde["startColumn"];
                _0x66edab <= _0x751cde[_0x370405(0x2bc)];
                _0x66edab++
              )
                _0x68c5d[_0x370405(0x29e)](_0x289f26, _0x66edab);
          }),
        _0x2771e2 &&
          _0x22bd9f &&
          _0x22bd9f["forEach"]((_0x1d9a5f) => {
            const _0x6f22da = _0x5b1fbc;
            for (
              let _0x1e8fc6 = _0x1d9a5f[_0x6f22da(0x3f1)];
              _0x1e8fc6 <= _0x1d9a5f[_0x6f22da(0x150)];
              _0x1e8fc6++
            )
              for (
                let _0x1dfa41 = _0x1d9a5f[_0x6f22da(0x205)];
                _0x1dfa41 <= _0x1d9a5f[_0x6f22da(0x2bc)];
                _0x1dfa41++
              )
                _0x68c5d[_0x6f22da(0x300)](
                  _0x1e8fc6,
                  _0x1dfa41,
                  _0x2771e2[_0x6f22da(0x197)](_0x1e8fc6, _0x1dfa41),
                );
          }));
    }
    let _0x143954 = {};
    return (
      (_0x143954[_0x3ba13d] = { [_0x543e1f]: gn(_0x4a0473) }),
      {
        runtimeCellData: { [_0x3ba13d]: { [_0x543e1f]: _0x68c5d } },
        dirtyRanges: _0x143954,
      }
    );
  }
  ["dispose"]() {}
};
_n = U(
  [
    H(0x0, (0x0, t["Inject"])(K)),
    H(0x1, (0x0, t["Inject"])(n["IFeatureCalculationManagerService"])),
    H(0x2, (0x0, t["Inject"])(t["ICommandService"])),
    H(0x3, (0x0, t["Inject"])(n["GlobalComputingStatusService"])),
    H(0x4, (0x0, t["Inject"])(t["Injector"])),
    H(0x5, t["IUniverInstanceService"]),
    H(0x6, t["IConfigService"]),
  ],
  _n,
);
let vn = class extends t["Disposable"] {
  constructor(_0x5b087f, _0x21b0c6, _0x194b9c, _0x52bdcd) {
    (super(),
      (this["_univerInstanceService"] = _0x5b087f),
      (this[_0x1ef3ea(0x17f)] = _0x21b0c6),
      (this["_sheetsSelectionsService"] = _0x194b9c),
      (this[_0x1ef3ea(0x26e)] = _0x52bdcd),
      V(this, _0x1ef3ea(0x431), new t["DisposableCollection"]()),
      this[_0x1ef3ea(0x2c1)]());
  }
  ["_initClearSelectionCommandInterceptor"]() {
    this[_0x4be744(0x1e7)](
      this[_0x4be744(0x17f)]["interceptCommand"]({
        getMutations: (_0x49035d) => {
          const _0x48e894 = _0x4be744;
          if (
            _0x49035d["id"] === r[_0x48e894(0x225)]["id"] ||
            _0x49035d["id"] === r[_0x48e894(0x353)]["id"]
          ) {
            let _0x741ac8 = [],
              _0x20d4b0 = [],
              _0x3cc384 = this["_sheetsSelectionsService"]
                ["getCurrentSelections"]()
                ["map"]((_0x404d26) => _0x404d26[_0x48e894(0x26a)]),
              _0x4ba154 = (0x0, r[_0x48e894(0x1b5)])(
                this[_0x48e894(0x1ec)],
                _0x49035d[_0x48e894(0x43b)],
              );
            if (!_0x4ba154) return { redos: [], undos: [] };
            let { unitId: _0x49fd5e, subUnitId: _0x36b2ea } = _0x4ba154,
              _0x774334 = {},
              _0x3c08cd = this[_0x48e894(0x26e)][_0x48e894(0x477)](
                _0x49fd5e,
                _0x36b2ea,
              );
            if (_0x3c08cd != null && _0x3c08cd[_0x48e894(0x189)])
              for (let [_0x7a2fef, _0x5dc082] of _0x3c08cd) {
                let {
                  unitId: _0x2d8fbc,
                  subUnitId: _0x1a6a0c,
                  row: _0x2c0fe9,
                  col: _0x3d2eb4,
                } = _0x5dc082[_0x48e894(0x376)];
                _0x2d8fbc === _0x4ba154[_0x48e894(0x386)] &&
                  _0x1a6a0c === _0x4ba154[_0x48e894(0x1bf)] &&
                  (_0x774334[_0x2c0fe9 + "-" + _0x3d2eb4] = _0x7a2fef);
              }
            return (
              _0x3cc384 &&
                _0x4ba154 &&
                _0x3cc384["forEach"]((_0x3f1f7f) => {
                  const _0x20e289 = _0x48e894;
                  t[_0x20e289(0x4aa)][_0x20e289(0x166)](
                    _0x3f1f7f,
                    (_0x301ff6, _0x3fd804) => {
                      const _0xc5c00d = _0x20e289;
                      let _0xff0b31 = _0x301ff6 + "-" + _0x3fd804;
                      if (_0x774334[_0xff0b31]) {
                        let _0x38fb13 = _0x774334[_0xff0b31];
                        _0x741ac8[_0xc5c00d(0x19f)]({
                          id: Pt["id"],
                          params: {
                            unitId: _0x49fd5e,
                            subUnitId: _0x36b2ea,
                            pivotTableId: _0x38fb13,
                          },
                        });
                        let _0x4a3cfd = this[_0xc5c00d(0x26e)][
                            _0xc5c00d(0x3f3)
                          ](_0x49fd5e, _0x38fb13),
                          _0x5515b6 = this["_sheetsPivotTableConfigModel"][
                            "getPivotTableConfig"
                          ](_0x49fd5e, _0x36b2ea, _0x38fb13);
                        _0x20d4b0[_0xc5c00d(0x19f)]({
                          id: Mt["id"],
                          params: {
                            unitId: _0x49fd5e,
                            subUnitId: _0x36b2ea,
                            pivotTableId: _0x38fb13,
                            pivotTableConfig: _0x5515b6,
                            collectionConfig: _0x4a3cfd,
                          },
                        });
                      }
                    },
                  );
                }),
              { redos: _0x741ac8, undos: _0x20d4b0 }
            );
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
vn = U(
  [
    H(0x0, t["IUniverInstanceService"]),
    H(0x1, (0x0, t["Inject"])(r["SheetInterceptorService"])),
    H(0x2, (0x0, t["Inject"])(r["SheetsSelectionsService"])),
    H(0x3, (0x0, t["Inject"])(Y)),
  ],
  vn,
);
let yn = class extends t["Disposable"] {
  constructor(_0x324cb4, _0x5625f5, _0x3263a3, _0x2d668d, _0x138ad0) {
    (super(),
      (this[_0x530db1(0x17f)] = _0x324cb4),
      (this[_0x530db1(0x483)] = _0x5625f5),
      (this["_univerInstanceService"] = _0x3263a3),
      (this[_0x530db1(0x26e)] = _0x2d668d),
      (this[_0x530db1(0x309)] = _0x138ad0),
      this["_initCommandInterceptListener"]());
  }
  ["_getPivotAppliedRanges"](_0x444194, _0x5934dc, _0x51a08a) {
    return ke(
      _0x444194,
      _0x5934dc,
      _0x51a08a,
      this[_0x24ed7c(0x483)]
        [_0x24ed7c(0x345)](t[_0x24ed7c(0x1b3)])
        ["getDirection"](),
    );
  }
  ["_initCommandInterceptListener"]() {
    this[_0x3a20da(0x1e7)](
      this[_0x3a20da(0x309)][_0x3a20da(0x1c0)][_0x3a20da(0x260)](
        this[_0x3a20da(0x309)][_0x3a20da(0x1c0)][_0x3a20da(0x3b1)]()[
          "PIVOT_MUTATION_GENERATE"
        ],
        {
          handler: (_0x5c1672, _0x1ef19c) => {
            const _0x3e924d = _0x3a20da;
            let {
                cellInfo: _0x4fbaae,
                view: _0x251d7c,
                isEmpty: _0x354e69,
              } = _0x1ef19c,
              { unitId: _0x392deb, subUnitId: _0x35f15d } = _0x4fbaae,
              _0x134110 = this[_0x3e924d(0x133)](
                _0x4fbaae,
                _0x251d7c,
                _0x354e69,
              ),
              _0x429ec6 = this[_0x3e924d(0x17f)][_0x3e924d(0x408)]({
                unitId: _0x392deb,
                subUnitId: _0x35f15d,
                ranges: _0x134110,
              }),
              _0x882e65 = De(
                this[_0x3e924d(0x483)],
                _0x392deb,
                _0x35f15d,
                _0x134110,
              );
            if (
              (_0x882e65[_0x3e924d(0x4a8)] &&
                (_0x429ec6[_0x3e924d(0x214)][_0x3e924d(0x19f)](
                  _0x882e65[_0x3e924d(0x170)],
                ),
                _0x429ec6[_0x3e924d(0x49e)][_0x3e924d(0x19f)](
                  _0x882e65["setRangeValueUndoMutation"],
                )),
              !_0x354e69)
            ) {
              let _0x159174 = this[_0x3e924d(0x180)](_0x251d7c, _0x4fbaae);
              (_0x429ec6["redos"]["push"](..._0x159174[_0x3e924d(0x214)]),
                _0x429ec6[_0x3e924d(0x49e)]["push"](
                  ..._0x159174[_0x3e924d(0x49e)],
                ));
            }
            return {
              redos: _0x429ec6[_0x3e924d(0x214)],
              undos: _0x429ec6[_0x3e924d(0x49e)],
            };
          },
        },
      ),
    );
  }
  ["getAutoFitColumnsMutations"](_0x71822f, _0x3bc086) {
    var _0x1c1f4b;
    let { col: _0x1ac457, unitId: _0x48d3a4, subUnitId: _0x19056a } = _0x3bc086,
      _0x17bd15 = [],
      _0x5a8b7f = [],
      _0x21764b = (0x0, r[_0x3096e0(0x1b5)])(this[_0x3096e0(0x1ec)], {
        unitId: _0x48d3a4,
        subUnitId: _0x19056a,
      });
    if (!_0x3bc086 || !_0x71822f || !_0x21764b)
      return { undos: _0x5a8b7f, redos: _0x17bd15 };
    let _0x2a6f84 = this["_sheetsPivotTableConfigModel"][_0x3096e0(0x46a)](),
      _0x259904 = Array["from"](
        ((_0x1c1f4b = this[_0x3096e0(0x26e)][_0x3096e0(0x477)](
          _0x48d3a4,
          _0x19056a,
        )) == null
          ? void 0x0
          : _0x1c1f4b[_0x3096e0(0x2b9)]()) ?? [],
      )[_0x3096e0(0x372)](
        (_0x230514) =>
          _0x230514[_0x3096e0(0x376)][_0x3096e0(0x292)] ===
            _0x3bc086[_0x3096e0(0x292)] &&
          _0x230514["targetCellInfo"][_0x3096e0(0x1a4)] ===
            _0x3bc086[_0x3096e0(0x1a4)],
      ),
      { worksheet: _0x1bd9bf } = _0x21764b;
    if (typeof window < "u" && window["document"]) {
      var _0x2ba485;
      let _0x39cf85 = (0x0, o[_0x3096e0(0x146)])({ ...w[_0x3096e0(0x24e)] }),
        _0x276e04 = p(
          _0x71822f,
          _0x1ac457,
          this[_0x3096e0(0x483)]
            ["get"](t[_0x3096e0(0x1b3)])
            [_0x3096e0(0x47c)](),
        ),
        _0xf888e1 =
          _0x276e04[_0x3096e0(0x2bc)] - _0x276e04[_0x3096e0(0x205)] + 0x1,
        _0x289248 = {},
        _0x39c151 = Ve(
          _0x71822f,
          _0x1ac457,
          _0x276e04["direction"],
          _0x2a6f84,
          (_0x284b4d) =>
            o[_0x3096e0(0x3fd)][_0x3096e0(0x279)](_0x284b4d, _0x39cf85)[
              _0x3096e0(0x369)
            ],
          _0x259904 == null
            ? void 0x0
            : _0x259904[_0x3096e0(0x2a9)][_0x3096e0(0x185)],
          (_0x2ba485 = this[_0x3096e0(0x1ec)][_0x3096e0(0x2a4)](_0x48d3a4)) ==
            null
            ? void 0x0
            : _0x2ba485[_0x3096e0(0x475)](),
        );
      (Object[_0x3096e0(0x2a8)](_0x39c151)[_0x3096e0(0x231)]((_0x3e3dd8) => {
        const _0x54a107 = _0x3096e0;
        let _0xe7b09c = Number(_0x3e3dd8),
          _0x5aa0a9 = _0x1bd9bf[_0x54a107(0x405)](_0xe7b09c);
        _0x289248[_0xe7b09c] = _0x5aa0a9;
      }),
        _0x17bd15[_0x3096e0(0x19f)]({
          id: r[_0x3096e0(0x3d7)]["id"],
          params: {
            subUnitId: _0x19056a,
            unitId: _0x48d3a4,
            ranges: [
              {
                startColumn: _0x1ac457,
                endColumn: _0x1ac457 + _0xf888e1 - 0x1,
                startRow: 0x0,
                endRow: _0x1bd9bf[_0x3096e0(0x172)]() - 0x1,
              },
            ],
            colWidth: _0x39c151,
          },
        }),
        _0x5a8b7f["push"]({
          id: r[_0x3096e0(0x3d7)]["id"],
          params: {
            subUnitId: _0x19056a,
            unitId: _0x48d3a4,
            ranges: [
              {
                startColumn: _0x1ac457,
                endColumn: _0x1ac457 + _0xf888e1 - 0x1,
                startRow: 0x0,
                endRow: _0x1bd9bf["getRowCount"]() - 0x1,
              },
            ],
            colWidth: _0x289248,
          },
        }));
    }
    return { undos: _0x5a8b7f, redos: _0x17bd15 };
  }
};
yn = U(
  [
    H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])),
    H(0x1, (0x0, t["Inject"])(t["Injector"])),
    H(0x2, (0x0, t["Inject"])(t["IUniverInstanceService"])),
    H(0x3, (0x0, t["Inject"])(Y)),
    H(0x4, (0x0, t["Inject"])(Z)),
  ],
  yn,
);
let bn = class extends t["Disposable"] {
  constructor(
    _0xe5a7ba,
    _0x51dbf2,
    _0x274185,
    _0x1ed75a,
    _0x301029,
    _0x1dbfdb,
    _0x59dfd4,
  ) {
    (super(),
      (this[_0x40d306(0x483)] = _0xe5a7ba),
      (this[_0x40d306(0x3f4)] = _0x51dbf2),
      (this[_0x40d306(0x1db)] = _0x274185),
      (this[_0x40d306(0x1ec)] = _0x1ed75a),
      (this["_sheetsPivotTableConfigModel"] = _0x301029),
      (this[_0x40d306(0x307)] = _0x1dbfdb),
      (this[_0x40d306(0x17f)] = _0x59dfd4),
      V(this, _0x40d306(0x431), new t["DisposableCollection"]()),
      this[_0x40d306(0x308)]());
  }
  ["_onRefRangeChange"]() {
    let _0x9b38cc = (_0x49e489, _0x312eb0) => {
        let _0x910712 = this[_0x419586(0x1ec)][_0x419586(0x4a0)](
          t["UniverInstanceType"][_0x419586(0x333)],
        );
        if (
          !_0x910712 ||
          !(_0x910712 != null && _0x910712[_0x419586(0x16b)](_0x312eb0))
        )
          return;
        this["disposableCollection"]["dispose"]();
        let _0x24b506 = (_0x391df3) =>
            this[_0x419586(0x395)](_0x391df3, _0x49e489, _0x312eb0),
          _0x6d427a = this[_0x419586(0x26e)][_0x419586(0x477)](
            _0x49e489,
            _0x312eb0,
          );
        _0x6d427a != null &&
          _0x6d427a[_0x419586(0x189)] &&
          Array[_0x419586(0x144)](_0x6d427a["values"]())
            [_0x419586(0x15f)]((_0x19439c) => {
              const _0x56a747 = _0x419586;
              let { row: _0x269260, col: _0x31532a } =
                _0x19439c["targetCellInfo"];
              return (0x0, t[_0x56a747(0x29c)])(_0x269260, _0x31532a);
            })
            [_0x419586(0x231)]((_0x20b583) => {
              const _0x973d32 = _0x419586;
              this["disposableCollection"][_0x973d32(0x3db)](
                this[_0x973d32(0x3f4)]["registerRefRange"](
                  _0x20b583,
                  _0x24b506,
                  _0x49e489,
                  _0x312eb0,
                ),
              );
            });
      },
      _0x5c009e = () => {
        let _0x4b39a0 = this[_0x155eaa(0x1ec)][_0x155eaa(0x4a0)](
          t[_0x155eaa(0x2b3)][_0x155eaa(0x333)],
        );
        if (_0x4b39a0) {
          let _0x128bdf = _0x4b39a0["getActiveSheet"]();
          if (!_0x128bdf) return;
          _0x9b38cc(
            _0x4b39a0[_0x155eaa(0x261)](),
            _0x128bdf[_0x155eaa(0x325)](),
          );
        }
      };
    (this[_0x2fbc95(0x1e7)](
      this[_0x2fbc95(0x1db)]["onCommandExecuted"]((_0x3048a2) => {
        const _0x4d7908 = _0x2fbc95;
        if (_0x3048a2["id"] === r[_0x4d7908(0x479)]["id"]) {
          let _0x543b36 = _0x3048a2[_0x4d7908(0x43b)],
            _0x359999 = _0x543b36[_0x4d7908(0x1bf)],
            _0xaf16cc = _0x543b36[_0x4d7908(0x386)];
          if (!_0x359999 || !_0xaf16cc) return;
          _0x9b38cc(_0xaf16cc, _0x359999);
        }
      }),
    ),
      this[_0x2fbc95(0x1e7)](
        this[_0x2fbc95(0x26e)][_0x2fbc95(0x363)][_0x2fbc95(0x131)](
          (_0x1907ef) => {
            _0x1907ef && _0x5c009e();
          },
        ),
      ),
      this["disposeWithMe"](
        this["_sheetsPivotTableConfigModel"][_0x2fbc95(0x331)][
          _0x2fbc95(0x131)
        ]((_0x4629a4) => {
          const _0x9e8b28 = _0x2fbc95;
          let _0x3bd26b = (0x0, r[_0x9e8b28(0x1b5)])(this[_0x9e8b28(0x1ec)], {
            unitId: _0x4629a4[_0x9e8b28(0x386)],
            subUnitId: _0x4629a4["subUnitId"],
          });
          if (!_0x3bd26b) return;
          let { unitId: _0x492f03, subUnitId: _0x3f9ad7 } = _0x3bd26b,
            { unitId: _0x426cbe, subUnitId: _0x1cd83a } = _0x4629a4;
          _0x492f03 === _0x426cbe &&
            _0x3f9ad7 === _0x1cd83a &&
            _0x9b38cc(_0x492f03, _0x3f9ad7);
        }),
      ),
      _0x5c009e());
  }
  ["_refRangeHandle"](_0x43ada0, _0x5ab168, _0x18b52e) {
    switch (_0x43ada0["id"]) {
      case r[_0x28f874(0x1cd)]["id"]:
        return this[_0x28f874(0x3c5)](
          _0x43ada0[_0x28f874(0x43b)],
          _0x5ab168,
          _0x18b52e,
        );
      default:
        break;
    }
    return { redos: [], undos: [] };
  }
  ["getRefRangeMutationsByMoveRange"](_0x9e30e6, _0x19bba, _0x2d2e27) {
    let { fromRange: _0x5581ea, toRange: _0x612ced } = _0x9e30e6,
      _0x438ad3 = [],
      _0x1b1905 = [],
      _0x1bc994 = (0x0, r["getSheetCommandTarget"])(this[_0x1c5c6e(0x1ec)]);
    if (
      !_0x1bc994 ||
      _0x19bba !== _0x1bc994[_0x1c5c6e(0x386)] ||
      _0x2d2e27 !== _0x1bc994[_0x1c5c6e(0x1bf)]
    )
      return { undos: _0x1b1905, redos: _0x438ad3 };
    let _0x1ca4b5 = this["_sheetsPivotTableConfigModel"][_0x1c5c6e(0x477)](
      _0x19bba,
      _0x2d2e27,
    );
    if (_0x1ca4b5 != null && _0x1ca4b5["size"])
      for (let [_0x81b32e, _0x17c374] of _0x1ca4b5) {
        let {
          unitId: _0x10b97e,
          subUnitId: _0x50373a,
          row: _0x6354d8,
          col: _0x90d172,
        } = _0x17c374["targetCellInfo"];
        if (
          _0x10b97e === _0x1bc994[_0x1c5c6e(0x386)] &&
          _0x50373a === _0x1bc994[_0x1c5c6e(0x1bf)]
        ) {
          let _0x462ebb = (0x0, t[_0x1c5c6e(0x29c)])(_0x6354d8, _0x90d172);
          if (t["Rectangle"][_0x1c5c6e(0x1a3)](_0x462ebb, _0x5581ea)) {
            let _0x31d27b = _0x6354d8 - _0x5581ea["startRow"],
              _0x30e587 = _0x90d172 - _0x5581ea[_0x1c5c6e(0x205)],
              _0x354533 = {
                row: _0x612ced[_0x1c5c6e(0x3f1)] + _0x31d27b,
                col: _0x612ced["startColumn"] + _0x30e587,
              };
            (_0x438ad3[_0x1c5c6e(0x19f)]({
              id: Ut["id"],
              params: {
                unitId: _0x10b97e,
                subUnitId: _0x50373a,
                pivotTableId: _0x81b32e,
                targetCellPosition: _0x354533,
              },
            }),
              _0x1b1905[_0x1c5c6e(0x19f)]({
                id: Ut["id"],
                params: {
                  unitId: _0x10b97e,
                  subUnitId: _0x50373a,
                  pivotTableId: _0x81b32e,
                  targetCellPosition: { row: _0x6354d8, col: _0x90d172 },
                },
              }));
            let _0x44ddab = _0x354533[_0x1c5c6e(0x292)] - _0x6354d8,
              _0x1e7341 = _0x354533[_0x1c5c6e(0x1a4)] - _0x90d172,
              _0x5fde88 = [],
              _0x55d989 = this[_0x1c5c6e(0x307)][_0x1c5c6e(0x233)](
                _0x10b97e,
                _0x50373a,
                _0x81b32e,
              ),
              _0x105090 =
                _0x55d989 == null ? void 0x0 : _0x55d989["rangesInfo"];
            if (_0x105090) {
              Object[_0x1c5c6e(0x2a8)](_0x105090)[_0x1c5c6e(0x231)](
                (_0x6ec11e) => {
                  _0x105090[_0x6ec11e]["forEach"]((_0x3c4732) => {
                    let _0x50333e = { ..._0x3c4732 };
                    ((_0x50333e["startRow"] =
                      _0x3c4732["startRow"] + _0x44ddab),
                      (_0x50333e[_0x27cb4b(0x150)] =
                        _0x3c4732[_0x27cb4b(0x150)] + _0x44ddab),
                      (_0x50333e["startColumn"] =
                        _0x3c4732[_0x27cb4b(0x205)] + _0x1e7341),
                      (_0x50333e[_0x27cb4b(0x2bc)] =
                        _0x3c4732[_0x27cb4b(0x2bc)] + _0x1e7341),
                      _0x5fde88["push"](_0x50333e));
                  });
                },
              );
              let _0x21ca8b = this[_0x1c5c6e(0x17f)][_0x1c5c6e(0x408)]({
                unitId: _0x10b97e,
                subUnitId: _0x50373a,
                ranges: _0x5fde88,
              });
              (_0x438ad3[_0x1c5c6e(0x19f)](..._0x21ca8b[_0x1c5c6e(0x214)]),
                _0x1b1905["push"](..._0x21ca8b[_0x1c5c6e(0x49e)]));
              let _0x3a14a8 = De(
                this["_injector"],
                _0x10b97e,
                _0x50373a,
                _0x5fde88,
              );
              _0x3a14a8[_0x1c5c6e(0x4a8)] &&
                (_0x438ad3[_0x1c5c6e(0x19f)](_0x3a14a8[_0x1c5c6e(0x170)]),
                _0x1b1905[_0x1c5c6e(0x19f)](_0x3a14a8[_0x1c5c6e(0x14c)]));
            }
          }
        }
      }
    return { redos: _0x438ad3, undos: _0x1b1905 };
  }
};
bn = U(
  [
    H(0x0, (0x0, t["Inject"])(t["Injector"])),
    H(0x1, (0x0, t["Inject"])(r["RefRangeService"])),
    H(0x2, t["ICommandService"]),
    H(0x3, t["IUniverInstanceService"]),
    H(0x4, (0x0, t["Inject"])(Y)),
    H(0x5, (0x0, t["Inject"])(X)),
    H(0x6, (0x0, t["Inject"])(r["SheetInterceptorService"])),
  ],
  bn,
);
let xn = class extends t["Disposable"] {
  constructor(_0x46cbb7, _0x400621) {
    (super(),
      (this["_sheetInterceptorService"] = _0x46cbb7),
      (this[_0x4546cc(0x26e)] = _0x400621),
      this[_0x4546cc(0x2f3)]());
  }
  ["_initRemoveSheetCommandInterceptor"]() {
    this[_0x5e5d1a(0x1e7)](
      this[_0x5e5d1a(0x17f)][_0x5e5d1a(0x399)]({
        getMutations: (_0x27fffd) => {
          const _0x601cae = _0x5e5d1a;
          if (_0x27fffd["id"] === r["RemoveSheetCommand"]["id"]) {
            let _0x5d955a = [],
              _0x207080 = [],
              { unitId: _0x2c4274, subUnitId: _0x23db8e } =
                _0x27fffd[_0x601cae(0x43b)];
            if (!_0x2c4274 || !_0x23db8e)
              return { undos: _0x207080, redos: _0x5d955a };
            let _0x5827d0 = this[_0x601cae(0x26e)][_0x601cae(0x477)](
              _0x2c4274,
              _0x23db8e,
            );
            if (_0x5827d0 != null && _0x5827d0[_0x601cae(0x189)])
              for (let [_0x542223, _0x7238e0] of _0x5827d0) {
                _0x5d955a[_0x601cae(0x19f)]({
                  id: Pt["id"],
                  params: {
                    unitId: _0x2c4274,
                    subUnitId: _0x23db8e,
                    pivotTableId: _0x542223,
                  },
                });
                let _0xa0c54c = {
                  ...this[_0x601cae(0x26e)][_0x601cae(0x3f3)](
                    _0x2c4274,
                    _0x542223,
                  ),
                };
                _0x207080[_0x601cae(0x19f)]({
                  id: Mt["id"],
                  params: {
                    unitId: _0x2c4274,
                    subUnitId: _0x23db8e,
                    pivotTableId: _0x542223,
                    pivotTableConfig: _0x7238e0,
                    collectionConfig: _0xa0c54c,
                  },
                });
              }
            return { redos: _0x5d955a, undos: _0x207080 };
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
xn = U(
  [
    H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])),
    H(0x1, (0x0, t["Inject"])(Y)),
  ],
  xn,
);
let Sn = class extends t["Disposable"] {
  constructor(_0x1663d0, _0x5bcbb1, _0x12e43d, _0x1c80c8, _0x6b1da8) {
    (super(),
      (this[_0x44ab7f(0x1db)] = _0x1663d0),
      (this["_sheetsPivotRpcService"] = _0x5bcbb1),
      (this[_0x44ab7f(0x307)] = _0x12e43d),
      (this[_0x44ab7f(0x26e)] = _0x1c80c8),
      (this[_0x44ab7f(0x203)] = _0x6b1da8),
      this[_0x44ab7f(0x394)](),
      this[_0x44ab7f(0x2bf)]());
  }
  ["_initDataSendListener"]() {
    (this[_0x58f1bb(0x1e7)](
      this[_0x58f1bb(0x1db)][_0x58f1bb(0x484)]((_0x36a29f) => {
        const _0xe3a733 = _0x58f1bb;
        if (_0x36a29f["id"] !== ie["id"]) return;
        let _0x676215 = _0x36a29f[_0xe3a733(0x43b)];
        this[_0xe3a733(0x337)][_0xe3a733(0x187)](_0x676215);
      }),
    ),
      this[_0x58f1bb(0x1e7)](
        this[_0x58f1bb(0x1db)]["onCommandExecuted"]((_0x51a895) => {
          const _0x42b494 = _0x58f1bb;
          if (_0x51a895["id"] === B["id"]) {
            let _0x503059 = _0x51a895[_0x42b494(0x43b)];
            if (_0x503059) {
              let {
                unitId: _0xb854b4,
                subUnitId: _0xa9722,
                oldSubUnitId: _0x545e71,
                pivotTableId: _0x5082f2,
                pivotTableConfig: _0x32de82,
                collectionConfig: _0x503791,
              } = _0x503059;
              (this["_sheetsPivotTableConfigModel"]["updateConfigCache"](
                _0xb854b4,
                _0x545e71,
                _0x503059[_0x42b494(0x4a4)],
                null,
              ),
                this[_0x42b494(0x26e)]["updateConfigCache"](
                  _0xb854b4,
                  _0xa9722,
                  _0x5082f2,
                  _0x32de82,
                ),
                this[_0x42b494(0x26e)][_0x42b494(0x1ef)](_0xb854b4, _0x503791));
            }
          }
        }),
      ),
      this[_0x58f1bb(0x1e7)](
        this[_0x58f1bb(0x1db)]["onCommandExecuted"]((_0x3d936e) => {
          const _0x3bfb83 = _0x58f1bb;
          if (_0x3d936e["id"] !== z["id"]) return;
          let _0x558c32 = _0x3d936e["params"];
          if (
            (_0x558c32[_0x3bfb83(0x2d2)] &&
              Object[_0x3bfb83(0x2a8)](_0x558c32[_0x3bfb83(0x2d2)])["forEach"](
                (_0x8860dd) => {
                  const _0x51d4de = _0x3bfb83;
                  var _0x234bfa;
                  (_0x234bfa = _0x558c32[_0x51d4de(0x2d2)]) != null &&
                    _0x234bfa[_0x8860dd] &&
                    this["_sheetsPivotTableConfigModel"][
                      "updateCollectionConfig"
                    ](_0x8860dd, _0x558c32["collectionConfig"][_0x8860dd]);
                },
              ),
            _0x558c32[_0x3bfb83(0x38f)])
          ) {
            let {
              unitId: _0x49a6d4,
              subUnitId: _0x20b0f5,
              view: _0x368b40,
              pivotTableId: _0x1ff8f8,
              type: _0x1abf96,
              pivotConfig: _0x2966fc,
            } = _0x558c32[_0x3bfb83(0x38f)];
            if (_0x1abf96 === _0x3bfb83(0x216))
              (this[_0x3bfb83(0x307)][_0x3bfb83(0x3b2)]({
                unitId: _0x49a6d4,
                subUnitId: _0x20b0f5,
                pivotTableId: _0x1ff8f8,
                type: _0x1abf96,
              }),
                this[_0x3bfb83(0x26e)][_0x3bfb83(0x4ae)](
                  _0x49a6d4,
                  _0x20b0f5,
                  _0x1ff8f8,
                  null,
                ));
            else {
              let _0x12ead8 = new e[_0x3bfb83(0x18a)]();
              (_0x12ead8[_0x3bfb83(0x3cb)](_0x368b40),
                this["_sheetsPivotTableConfigModel"][_0x3bfb83(0x4ae)](
                  _0x49a6d4,
                  _0x20b0f5,
                  _0x1ff8f8,
                  _0x2966fc,
                ),
                this[_0x3bfb83(0x307)]["clearRenderCache"]({
                  unitId: _0x49a6d4,
                  subUnitId: _0x20b0f5,
                  pivotTableId: _0x1ff8f8,
                  type: _0x1abf96,
                  view: _0x12ead8,
                }),
                this[_0x3bfb83(0x307)]["updateRenderCache"]({
                  unitId: _0x49a6d4,
                  subUnitId: _0x20b0f5,
                  view: _0x12ead8,
                  pivotTableId: _0x1ff8f8,
                  type: _0x1abf96,
                }));
            }
            this[_0x3bfb83(0x307)][_0x3bfb83(0x2eb)](_0x49a6d4, _0x20b0f5);
          } else {
            if (_0x558c32[_0x3bfb83(0x27d)]) {
              let _0x5d2aab = _0x558c32[_0x3bfb83(0x27d)],
                _0x1cd330 = new Map();
              (_0x5d2aab[_0x3bfb83(0x231)]((_0x297ec8) => {
                const _0x5c3207 = _0x3bfb83;
                let {
                    unitId: _0x5a3315,
                    subUnitId: _0x2bc87c,
                    view: _0x65da39,
                    pivotTableId: _0x3c84b7,
                    type: _0x3a1e5b,
                    pivotConfig: _0x50aa5b,
                  } = _0x297ec8,
                  _0x397caf = new e[_0x5c3207(0x18a)]();
                (_0x397caf["formJSON"](_0x65da39),
                  this[_0x5c3207(0x26e)][_0x5c3207(0x4ae)](
                    _0x5a3315,
                    _0x2bc87c,
                    _0x3c84b7,
                    _0x50aa5b,
                  ),
                  this[_0x5c3207(0x307)]["updateRenderCache"]({
                    unitId: _0x5a3315,
                    subUnitId: _0x2bc87c,
                    view: _0x397caf,
                    pivotTableId: _0x3c84b7,
                    type: _0x3a1e5b,
                  }));
                let _0x548b2d =
                  _0x1cd330[_0x5c3207(0x345)](_0x5a3315) ?? new Set();
                (_0x548b2d[_0x5c3207(0x3db)](_0x2bc87c),
                  _0x1cd330["set"](_0x5a3315, _0x548b2d));
              }),
                _0x1cd330["forEach"]((_0x2e5aa7, _0x24d957) =>
                  _0x2e5aa7[_0x3bfb83(0x231)]((_0x99e619) => {
                    const _0x2faea2 = _0x3bfb83;
                    this[_0x2faea2(0x307)]["markDirty"](_0x24d957, _0x99e619);
                  }),
                ),
                this["_sheetsPivotTableConfigModel"][
                  "setPivotInitCompleted"
                ]());
            }
          }
        }),
      ));
  }
  ["registerDirtyService"]() {
    this["_activeDirtyManagerService"][_0x5855d2(0x2b2)](fn["id"], {
      commandId: fn["id"],
      getDirtyData(_0x25eb10) {
        const _0x1ef7c8 = _0x5855d2;
        return { dirtyUnitFeatureMap: _0x25eb10[_0x1ef7c8(0x43b)] };
      },
    });
  }
};
Sn = U(
  [
    H(0x0, (0x0, t["Inject"])(t["ICommandService"])),
    H(0x1, (0x0, t["Inject"])(W)),
    H(0x2, (0x0, t["Inject"])(X)),
    H(0x3, (0x0, t["Inject"])(Y)),
    H(0x4, n["IActiveDirtyManagerService"]),
  ],
  Sn,
);
let Cn = class extends t["Plugin"] {
  constructor(_0x295ffb = Je, _0x2ef085, _0x211194, _0x112e2d, _0x54d05f) {
    (super(),
      (this[_0x5e4c7b(0x352)] = _0x295ffb),
      (this[_0x5e4c7b(0x483)] = _0x2ef085),
      (this[_0x5e4c7b(0x1db)] = _0x211194),
      (this[_0x5e4c7b(0x259)] = _0x112e2d),
      (this[_0x5e4c7b(0x315)] = _0x54d05f));
    let { ..._0x410143 } = (0x0, t[_0x5e4c7b(0x2ac)])(
      {},
      Je,
      this[_0x5e4c7b(0x352)],
    );
    (this[_0x5e4c7b(0x259)][_0x5e4c7b(0x378)](qe, _0x410143),
      this[_0x5e4c7b(0x341)](),
      this["_initConfig"](_0x410143));
  }
  ["_initConfig"](_0x80fafc) {
    var _0x90655f;
    let _0x3878eb =
      (_0x90655f = this[_0x32dd69(0x352)]) == null
        ? void 0x0
        : _0x90655f[_0x32dd69(0x2ef)];
    (this[_0x32dd69(0x259)][_0x32dd69(0x378)](
      _0x32dd69(0x285),
      _0x3878eb === !0x0,
    ),
      _0x80fafc["maxLimitItemCount"] !== void 0x0 &&
        (0x0, e[_0x32dd69(0x14e)])(_0x80fafc[_0x32dd69(0x2c4)]),
      _0x80fafc[_0x32dd69(0x427)] !== void 0x0 &&
        (0x0, e["setDateSystem"])(_0x80fafc[_0x32dd69(0x427)]));
  }
  ["onStarting"]() {
    var _0x160c70;
    let _0x4e3597 = [],
      _0x3be72a =
        (_0x160c70 = this[_0xded3a8(0x352)]) == null
          ? void 0x0
          : _0x160c70[_0xded3a8(0x2ef)];
    (_0x3be72a === !0x0
      ? (_0x4e3597 = [[Z], [W], [Sn], [X], [Y], [xn], [vn], [bn], [yn]])
      : _0x3be72a === !0x1
        ? (_0x4e3597 = [[K], [_n]])
        : _0x3be72a === void 0x0 &&
          (_0x4e3597 = [
            [K],
            [_n],
            [Z],
            [W],
            [Sn],
            [X],
            [Y],
            [xn],
            [vn],
            [bn],
            [yn],
          ]),
      _0x4e3597["forEach"]((_0x2a3bed) =>
        this[_0xded3a8(0x483)][_0xded3a8(0x3db)](_0x2a3bed),
      ),
      [_n, Sn, Z, vn, xn, bn, yn]["forEach"]((_0x43e871) => {
        const _0x50535b = _0xded3a8;
        this[_0x50535b(0x483)][_0x50535b(0x442)](_0x43e871) &&
          this[_0x50535b(0x483)]["get"](_0x43e871);
      }));
  }
  ["_initRegisterCommand"]() {
    [
      Nt,
      Ft,
      At,
      Ht,
      Kt,
      qt,
      cn,
      Zt,
      dn,
      Yt,
      nn,
      $t,
      an,
      sn,
      Wt,
      Gt,
      Mt,
      Xt,
      Pt,
      ht,
      Xe,
      Ze,
      bt,
      gt,
      _t,
      vt,
      wt,
      Ct,
      xt,
      St,
      Ut,
      re,
      ie,
      z,
      Dt,
      kt,
      Tt,
      yt,
      ae,
      on,
      Ot,
      fn,
      B,
      rn,
      Et,
      Qt,
      Jt,
      en,
      tn,
    ][_0x1d2118(0x231)]((_0xe1da3b) => {
      const _0x134143 = _0x1d2118;
      var _0x4c68bf;
      ((_0x4c68bf = this[_0x134143(0x315)]) == null ||
        _0x4c68bf[_0x134143(0x2d3)](_0xe1da3b),
        this[_0x134143(0x1db)][_0x134143(0x3e2)](_0xe1da3b));
    });
  }
};
(V(Cn, "pluginName", _),
  V(Cn, "packageName", ln),
  V(Cn, "version", un),
  V(Cn, "type", t["UniverInstanceType"]["UNIVER_SHEET"]),
  (Cn = U(
    [
      (0x0, t["DependentOn"])(
        a["UniverLicensePlugin"],
        n["UniverFormulaEnginePlugin"],
        r["UniverSheetsPlugin"],
      ),
      H(0x1, (0x0, t["Inject"])(t["Injector"])),
      H(0x2, (0x0, t["Inject"])(t["ICommandService"])),
      H(0x3, t["IConfigService"]),
      H(0x4, (0x0, t["Optional"])(c["DataSyncPrimaryController"])),
    ],
    Cn,
  )),
  (exports["AddPivotFieldCommand"] = At),
  (exports["AddPivotFieldMutation"] = ht),
  (exports["AddPivotTableCommand"] = Ft),
  (exports["AddPivotTableMutation"] = Mt),
  (exports["AddPivotTableWithConfigCommand"] = Nt),
  (exports["BLANK_ROW_COUNT"] = 0x1),
  (exports["MovePivotFieldCommand"] = Ht),
  (exports["MovePivotTableCommand"] = Wt),
  (exports["PIVOT_DATE_GROUP_TYPES"] = It),
  (exports["PivotDisplayDataType"] = ee),
  (exports["PivotDrillDownCommand"] = Gt),
  (exports["PositionType"] = y),
  (exports["RemovePivotFieldCommand"] = Kt),
  (exports["RemovePivotFieldMutation"] = gt),
  (exports["RemovePivotTableCommand"] = qt),
  (exports["RemovePivotTableMutation"] = Pt),
  (exports["RenamePivotFieldMutation"] = _t),
  (exports["ResetPivotFieldsConfigCommand"] = Jt),
  (exports["SHEETS_PIVOT_PLUGIN_CONFIG_KEY"] = qe),
  (exports["SHEET_PIVOT_TABLE_PLUGIN"] = _),
  (exports["SetPivotCollapseCommand"] = Yt),
  (exports["SetPivotCollapseMutation"] = vt),
  (exports["SetPivotDateGroupCommand"] = Zt),
  (exports["SetPivotFieldFormatMutation"] = yt),
  (exports["SetPivotFieldsConfigCommand"] = Qt),
  (exports["SetPivotFilterCommand"] = $t),
  (exports["SetPivotFilterMutation"] = bt),
  (exports["SetPivotLayoutCommand"] = en),
  (exports["SetPivotOptionCommand"] = tn),
  (exports["SetPivotOptionMutation"] = St),
  (exports["SetPivotPositionMutation"] = Ut),
  (exports["SetPivotSortCommand"] = nn),
  (exports["SetPivotSortMutation"] = wt),
  (exports["SetPivotSubtotalTypeMutation"] = Tt),
  (exports["SetPivotValueFilterCommand"] = rn),
  (exports["SetPivotValueFilterMutation"] = Et),
  Object["defineProperty"](exports, "SheetsPivotRPCService", {
    enumerable: !0x0,
    get: function () {
      return W;
    },
  }),
  Object["defineProperty"](exports, "SheetsPivotTableAdaptorModel", {
    enumerable: !0x0,
    get: function () {
      return X;
    },
  }),
  Object["defineProperty"](exports, "SheetsPivotTableConfigModel", {
    enumerable: !0x0,
    get: function () {
      return Y;
    },
  }),
  Object["defineProperty"](exports, "SheetsPivotTableService", {
    enumerable: !0x0,
    get: function () {
      return Z;
    },
  }),
  Object["defineProperty"](exports, "UniverSheetsPivotTablePlugin", {
    enumerable: !0x0,
    get: function () {
      return Cn;
    },
  }),
  (exports["UpdateFieldPositionMutation"] = Dt),
  (exports["UpdatePivotFieldSettingCommand"] = an),
  (exports["UpdatePivotFieldSourceInfoMutation"] = Ot),
  (exports["UpdatePivotTableSourceRangeCommand"] = sn),
  (exports["UpdatePivotTableSourceRangeMutation"] = on),
  (exports["UpdatePivotValuePositionCommand"] = cn),
  (exports["UpdateValuePositionMutation"] = kt),
  (exports["generateSetRangeValueMutations"] = De),
  (exports["getAdjustRangesPosition"] = F),
  (exports["getEmptyPivotRanges"] = Oe),
  (exports["getPivotAppliedRanges"] = ke),
  (exports["getPivotDateGroupContext"] = Lt),
  (exports["isPivotDateGroupTypeDisabled"] = Rt),
  (exports["isolateTextForBidiContext"] = f),
  (exports["mapPivotSheetColumn"] = m),
  (exports["mapPivotSheetRange"] = h),
  (exports["resolvePivotSheetCell"] = ve),
  (exports["resolvePivotValueFieldId"] = ye),
  (exports["resolvePivotValueFilterTarget"] = be),
  (exports["unionPivotViewRange"] = Ce));
