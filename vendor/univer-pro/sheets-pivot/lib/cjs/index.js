Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
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
function u(var_core_value_sig9B13) {
  return l["test"](String(var_core_value_sig9B13 ?? ""));
}
function d(var_core_value_sig60E6) {
  let var_core_value_sig1F6E = String(var_core_value_sig60E6 ?? "");
  return !var_core_value_sig1F6E || var_core_value_sig1F6E["startsWith"]("⁨") && var_core_value_sig1F6E["endsWith"]("⁩") ? var_core_value_sig1F6E : "⁨" + var_core_value_sig1F6E + "⁩";
}
function f(var_core_value_sig7A6B, ...var_core_value_sig20F6) {
  let var_core_value_sigAEE0 = String(var_core_value_sig7A6B ?? "");
  return !u(var_core_value_sigAEE0) && !var_core_value_sig20F6["some"](u) ? var_core_value_sigAEE0 : d(var_core_value_sigAEE0);
}
function p(var_core_value_sig72B6, var_core_value_sig43E8, var_core_value_sigB1FB) {
  let var_core_value_sig6876 = var_core_value_sig72B6["pageView"]["getLastCol"]() + 0x1,
    var_core_value_sig55FB = var_core_value_sig72B6["cornerView"]["getColCount"]() + Math["max"](var_core_value_sig72B6["colView"]["getColCount"](), var_core_value_sig72B6["dataView"]["getColCount"]());
  return {
    startColumn: var_core_value_sig43E8,
    endColumn: var_core_value_sig43E8 + Math["max"](var_core_value_sig6876, var_core_value_sig55FB, 0x1) - 0x1,
    direction: var_core_value_sigB1FB
  };
}
function m(var_core_value_sig2870, var_core_value_sigC865) {
  return var_core_value_sig2870["direction"] === "rtl" ? var_core_value_sig2870["startColumn"] + var_core_value_sig2870["endColumn"] - var_core_value_sigC865 : var_core_value_sigC865;
}
function h(var_core_value_sig6788, var_core_value_sig7B1F) {
  let var_core_value_sig7E51 = m(var_core_value_sig6788, var_core_value_sig7B1F["startColumn"]),
    var_core_value_sigAE87 = m(var_core_value_sig6788, var_core_value_sig7B1F["endColumn"]);
  return {
    ...var_core_value_sig7B1F,
    startColumn: Math["min"](var_core_value_sig7E51, var_core_value_sigAE87),
    endColumn: Math["max"](var_core_value_sig7E51, var_core_value_sigAE87)
  };
}
const g = Number["parseInt"](0x6a9e6078),
  _ = "SHEET_PIVOT_TABLE_PLUGIN",
  v = "#b2b2b2";
let y = function (var_core_value_sigFD51) {
  return var_core_value_sigFD51["Existing"] = "existing", var_core_value_sigFD51["New"] = "new", var_core_value_sigFD51;
}({});
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
        subtotalWithValue: ""
      },
      emptyPivot: {
        filter: "",
        row: "",
        column: "",
        values: ""
      },
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
        yearMonthDate: ""
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
        yearQuarter: ""
      }
    }
  },
  x = {
    b: {
      s: 0x1,
      cl: {
        rgb: v
      }
    },
    l: {
      s: 0x1,
      cl: {
        rgb: v
      }
    },
    r: {
      s: 0x1,
      cl: {
        rgb: v
      }
    },
    t: {
      s: 0x1,
      cl: {
        rgb: v
      }
    }
  },
  S = {
    bg: {
      rgb: "rgb(240,241,243)"
    },
    ht: 0x2,
    vt: 0x2,
    tb: 0x1
  },
  C = {
    bg: {
      rgb: "rgb(255,255,255)"
    },
    ht: 0x2,
    vt: 0x2,
    tb: 0x1
  },
  w = {
    rowStyle: {
      bg: {
        rgb: "#e6ebfb"
      },
      bd: x,
      bl: 0x1,
      vt: 0x2
    },
    colStyle: {
      bg: {
        rgb: "#1d32e9"
      },
      bd: null,
      cl: {
        rgb: "#FFFFFF"
      },
      bl: 0x1,
      vt: 0x2
    },
    subTotalStyle: {
      bd: x,
      bg: {
        rgb: "#e6ebfa"
      },
      vt: 0x2
    },
    cornerStyle: {
      bd: x,
      bg: {
        rgb: "#eceeff"
      },
      bl: 0x1,
      vt: 0x2
    },
    pageStyle: {
      bd: x,
      bg: {
        rgb: "#f4f4f5"
      },
      vt: 0x2
    },
    leafStyle: {
      bd: x,
      bg: {
        rgb: "#f4f4f5"
      },
      vt: 0x2
    },
    grandTotal: {
      bd: null,
      bg: {
        rgb: "#1d32e9"
      },
      cl: {
        rgb: "#FFFFFF"
      },
      bl: 0x1,
      vt: 0x2
    },
    dataStyle: {
      bd: x,
      vt: 0x2
    }
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
    [e["PivotDateGroupFieldDateTypeEnum"]["YearQuarter"]]: 0x2
  };
function E(var_core_value_sigF6D6) {
  return /^\d$/[ox4f734c(0x198)](var_core_value_sigF6D6) ? "0" + var_core_value_sigF6D6 : var_core_value_sigF6D6;
}
function D(var_core_value_sigCF95, var_core_value_sig8793) {
  let var_core_value_sig1BE7 = var_core_value_sig8793[ox159baf(0x14f)]("_"),
    var_core_value_sig34F8 = T[var_core_value_sigCF95];
  if (!(var_core_value_sig34F8 === void 0x0 || var_core_value_sig1BE7[ox159baf(0x2b6)] < var_core_value_sig34F8)) switch (var_core_value_sigCF95) {
    case e[ox159baf(0x1ad)][ox159baf(0x433)]:
      return [var_core_value_sig1BE7[0x0], E(var_core_value_sig1BE7[0x1])];
    case e["PivotDateGroupFieldDateTypeEnum"][ox159baf(0x37b)]:
      return [E(var_core_value_sig1BE7[0x0]), E(var_core_value_sig1BE7[0x1])];
    case e[ox159baf(0x1ad)][ox159baf(0x2ba)]:
      return [var_core_value_sig1BE7[0x0], E(var_core_value_sig1BE7[0x1])];
    case e[ox159baf(0x1ad)]["YearMonthDate"]:
      return [var_core_value_sig1BE7[0x0], E(var_core_value_sig1BE7[0x1]), E(var_core_value_sig1BE7[0x2])];
    case e[ox159baf(0x1ad)][ox159baf(0x283)]:
      return [var_core_value_sig1BE7[0x0], var_core_value_sig1BE7[0x1]];
    default:
      return var_core_value_sig1BE7[ox159baf(0x3ab)](0x0, var_core_value_sig34F8);
  }
}
function O(var_core_value_sig9F3D, var_core_value_sig785C, var_core_value_sig6537) {
  let var_core_value_sig72BB = var_core_value_sig9F3D["get"](t["LocaleService"]),
    var_core_value_sigC0DF = D(var_core_value_sig785C, var_core_value_sig6537);
  if (!var_core_value_sigC0DF) return var_core_value_sig6537;
  switch (var_core_value_sig785C) {
    case e[ox512931(0x1ad)][ox512931(0x4ba)]:
      return var_core_value_sig72BB["t"](ox512931(0x347), ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x130)]:
      return var_core_value_sig72BB["t"]("sheets-pivot.cellDateGroupDisplay.minute", ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x282)]:
      return var_core_value_sig72BB["t"](ox512931(0x278), ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x433)]:
      return var_core_value_sig72BB["t"]("sheets-pivot.cellDateGroupDisplay.hourMinute", ...var_core_value_sigC0DF);
    case e["PivotDateGroupFieldDateTypeEnum"][ox512931(0x1e2)]:
      return var_core_value_sig72BB["t"](ox512931(0x3b4), ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x34c)]:
      return var_core_value_sig72BB["t"](ox512931(0x297), ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x37b)]:
      return var_core_value_sig72BB["t"](ox512931(0x23a), ...var_core_value_sigC0DF);
    case e["PivotDateGroupFieldDateTypeEnum"][ox512931(0x2ae)]:
      return var_core_value_sig72BB["t"]("sheets-pivot.cellDateGroupDisplay.quarter", ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)]["YearMonth"]:
      return var_core_value_sig72BB["t"](ox512931(0x2c8), ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x258)]:
      return var_core_value_sig72BB["t"]("sheets-pivot.cellDateGroupDisplay.yearMonthDate", ...var_core_value_sigC0DF);
    case e[ox512931(0x1ad)][ox512931(0x283)]:
      return var_core_value_sig72BB["t"](ox512931(0x39c), ...var_core_value_sigC0DF);
  }
  return "";
}
const k = (var_core_value_sig94B7, var_core_value_sig9865, var_core_value_sigA09D, var_core_value_sig1429) => {
    let var_core_value_sigA339,
      var_core_value_sig832A = var_core_value_sig94B7["get"](t[ox26fad6(0x1ba)])[ox26fad6(0x4a0)](t[ox26fad6(0x2b3)][ox26fad6(0x333)]);
    if (!var_core_value_sig832A) return null;
    let var_core_value_sig7945 = var_core_value_sig832A[ox26fad6(0x439)](),
      var_core_value_sig1166;
    if (var_core_value_sigA09D && (var_core_value_sig1166 = var_core_value_sig7945[ox26fad6(0x300)](var_core_value_sigA09D)), var_core_value_sig9865 != null && var_core_value_sig9865["v"] || (var_core_value_sig9865 == null ? void 0x0 : var_core_value_sig9865["v"]) === 0x0) {
      var_core_value_sigA339 ||= {};
      let var_core_value_sigBF6D = P(var_core_value_sig9865["v"]);
      typeof var_core_value_sigBF6D == ox26fad6(0x3ea) ? var_core_value_sigA339["t"] = t[ox26fad6(0x137)][ox26fad6(0x35e)] : typeof var_core_value_sigBF6D == ox26fad6(0x458) && (var_core_value_sigA339["t"] = t[ox26fad6(0x137)][ox26fad6(0x1c1)]), var_core_value_sigA339["v"] = var_core_value_sigBF6D;
    }
    if ((var_core_value_sig9865 != null && var_core_value_sig9865["i"] || (var_core_value_sig9865 == null ? void 0x0 : var_core_value_sig9865["i"]) === 0x0) && (var_core_value_sigA339 ||= {}, var_core_value_sigA339["fi"] = var_core_value_sig9865["i"]), var_core_value_sig9865 != null && var_core_value_sig9865["s"] && (var_core_value_sigA339 ||= {}, var_core_value_sigA339[ox26fad6(0x424)] = var_core_value_sig9865["s"]), var_core_value_sigA09D && (var_core_value_sigA339 ||= {}, var_core_value_sigA339["s"] = var_core_value_sig1166), var_core_value_sig1429 && var_core_value_sigA339 != null && var_core_value_sigA339["v"] && var_core_value_sigA339[ox26fad6(0x424)] !== e[ox26fad6(0x2e2)]["GrandTotal"] && var_core_value_sigA339["pbt"] !== e[ox26fad6(0x2e2)][ox26fad6(0x157)]) {
      let var_core_value_sigD051 = String(var_core_value_sigA339["v"]),
        {
          dateType: var_core_value_sig16D9
        } = var_core_value_sig1429;
      var_core_value_sigA339["v"] = O(var_core_value_sig94B7, var_core_value_sig16D9, var_core_value_sigD051), var_core_value_sigA339["t"] = t[ox26fad6(0x137)][ox26fad6(0x1c1)];
    }
    return var_core_value_sigA339;
  },
  A = (var_core_value_sig7ABC, var_core_value_sigF686, var_core_value_sigDFF0, var_core_value_sig0130, var_core_value_sigFD90 = "ltr", var_core_value_sig702C = t["DateSystem"]["Date1900"]) => {
    let var_core_value_sig03A4 = var_core_value_sigDFF0[ox62ceee(0x376)],
      {
        cornerView: var_core_value_sigB6F5,
        rowView: var_core_value_sig8293,
        colView: var_core_value_sig43AE,
        dataView: var_core_value_sigEF2E,
        pageView: var_core_value_sigD83C,
        formatMap: var_core_value_sigAC2B,
        groupInfo: var_core_value_sigFBBE
      } = var_core_value_sigF686,
      {
        row: var_core_value_sigC982,
        col: var_core_value_sig59DA
      } = var_core_value_sig03A4,
      var_core_value_sig3002 = new t["ObjectMatrix"](),
      var_core_value_sig33D2 = p(var_core_value_sigF686, var_core_value_sig59DA, var_core_value_sigFD90),
      var_core_value_sig8D4A = {},
      var_core_value_sigB5D7 = {},
      var_core_value_sig797B = {},
      var_core_value_sig5094 = {},
      var_core_value_sig8883 = {},
      var_core_value_sig488F = var_core_value_sigC982,
      var_core_value_sigB440 = var_core_value_sig59DA;
    Object[ox62ceee(0x2a8)](var_core_value_sigD83C[ox62ceee(0x16a)])[ox62ceee(0x231)](var_core_value_sigF378 => {
      const var_core_value_sig5F6C = ox62ceee;
      Object[var_core_value_sig5F6C(0x2a8)](var_core_value_sigD83C["data"][Number(var_core_value_sigF378)])[var_core_value_sig5F6C(0x231)](var_core_value_sig0567 => {
        const var_core_value_sigA7F3 = var_core_value_sig5F6C;
        let var_core_value_sigEACD = {
          ...var_core_value_sigD83C[var_core_value_sigA7F3(0x16a)][Number(var_core_value_sigF378)][Number(var_core_value_sig0567)]
        };
        var_core_value_sig3002[var_core_value_sigA7F3(0x300)](Number(var_core_value_sigF378) + var_core_value_sig488F, m(var_core_value_sig33D2, Number(var_core_value_sig0567) + var_core_value_sigB440), k(var_core_value_sig7ABC, var_core_value_sigEACD, w["pageStyle"]));
      });
    });
    let var_core_value_sigF5CC = Object[ox62ceee(0x2a8)](var_core_value_sigD83C[ox62ceee(0x16a)])[ox62ceee(0x2b6)];
    var_core_value_sig488F += var_core_value_sigF5CC + +!!var_core_value_sigF5CC;
    let var_core_value_sigA1B6 = var_core_value_sigB6F5[ox62ceee(0x172)](),
      var_core_value_sig66A0 = var_core_value_sigB6F5[ox62ceee(0x2f0)]();
    for (let var_core_value_sig7E85 = 0x0; var_core_value_sig7E85 < var_core_value_sigA1B6; var_core_value_sig7E85++) for (let var_core_value_sig901E = 0x0; var_core_value_sig901E < var_core_value_sig66A0; var_core_value_sig901E++) {
      var var_core_value_sig7876;
      let var_core_value_sig90C0 = {
        ...((var_core_value_sig7876 = var_core_value_sigB6F5[ox62ceee(0x16a)]) == null || (var_core_value_sig7876 = var_core_value_sig7876[var_core_value_sig7E85]) == null ? void 0x0 : var_core_value_sig7876[var_core_value_sig901E])
      };
      if (var_core_value_sig90C0) {
        var var_core_value_sig2C69, var_core_value_sigAF19;
        (var_core_value_sig2C69 = var_core_value_sig8293[ox62ceee(0x4a3)][var_core_value_sig901E]) != null && var_core_value_sig2C69[ox62ceee(0x47a)] && var_core_value_sig901E === var_core_value_sig66A0 - 0x1 && var_core_value_sig7E85 === var_core_value_sigA1B6 - 0x1 && (var_core_value_sig90C0["v"] = "" + var_core_value_sig0130[ox62ceee(0x1fe)]), (var_core_value_sigAF19 = var_core_value_sigB6F5[ox62ceee(0x1e3)][var_core_value_sig901E]) != null && var_core_value_sigAF19[ox62ceee(0x45b)] && (var_core_value_sig90C0["v"] = "" + (var_core_value_sig0130[ox62ceee(0x418)] || "Row\x20Labels"));
      }
      var_core_value_sig3002[ox62ceee(0x300)](var_core_value_sig7E85 + var_core_value_sig488F, m(var_core_value_sig33D2, var_core_value_sig901E + var_core_value_sigB440), k(var_core_value_sig7ABC, var_core_value_sig90C0, w[ox62ceee(0x486)]));
    }
    for (let var_core_value_sigF204 = 0x0; var_core_value_sigF204 < var_core_value_sigB6F5[ox62ceee(0x1e3)]["length"]; var_core_value_sigF204++) var_core_value_sigB6F5["info"][var_core_value_sigF204] && (var_core_value_sig797B["" + m(var_core_value_sig33D2, var_core_value_sigF204 + var_core_value_sigB440)] = var_core_value_sigB6F5[ox62ceee(0x1e3)][var_core_value_sigF204]);
    var_core_value_sigB440 += var_core_value_sig66A0;
    let var_core_value_sigCE75 = var_core_value_sig43AE[ox62ceee(0x4a3)],
      var_core_value_sigF27A = var_core_value_sig43AE[ox62ceee(0x42b)]() >= 0x0 ? var_core_value_sig43AE[ox62ceee(0x42b)]() + 0x1 : 0x0,
      var_core_value_sig47B3 = var_core_value_sig43AE["getLastCol"]() >= 0x0 ? var_core_value_sig43AE[ox62ceee(0x266)]() + 0x1 : 0x0;
    for (let var_core_value_sig7A15 = 0x0; var_core_value_sig7A15 < var_core_value_sig47B3; var_core_value_sig7A15++) {
      for (let var_core_value_sigF1B2 = 0x0; var_core_value_sigF1B2 < var_core_value_sigF27A; var_core_value_sigF1B2++) {
        var var_core_value_sig5E75, var_core_value_sigC266;
        let var_core_value_sig03E1 = {
            ...((var_core_value_sig5E75 = var_core_value_sig43AE[ox62ceee(0x16a)]) == null || (var_core_value_sig5E75 = var_core_value_sig5E75[var_core_value_sigF1B2]) == null ? void 0x0 : var_core_value_sig5E75[var_core_value_sig7A15])
          },
          var_core_value_sigBB57 = (var_core_value_sigC266 = var_core_value_sigCE75[var_core_value_sigF1B2]) == null ? void 0x0 : var_core_value_sigC266[ox62ceee(0x30c)],
          var_core_value_sig7C4A = var_core_value_sigAC2B[var_core_value_sigBB57],
          var_core_value_sigE799 = var_core_value_sigFBBE[var_core_value_sigBB57];
        if (var_core_value_sig03E1) {
          let var_core_value_sigA942 = var_core_value_sig43AE[ox62ceee(0x18f)](var_core_value_sigF1B2 + 0x1);
          var_core_value_sigA942 != null && var_core_value_sigA942["isColumnLabel"] ? var_core_value_sig03E1["v"] = "" + (var_core_value_sig0130[ox62ceee(0x384)] || ox62ceee(0x40a)) : var_core_value_sig03E1["v"] = j(var_core_value_sig03E1, var_core_value_sigF1B2 === 0x0 && (var_core_value_sigA942 == null ? void 0x0 : var_core_value_sigA942[ox62ceee(0x47a)]), var_core_value_sig7C4A, var_core_value_sig0130, var_core_value_sig0130[ox62ceee(0x3f8)], void 0x0, var_core_value_sig702C);
        }
        let var_core_value_sigB601;
        var_core_value_sigB601 = var_core_value_sig7C4A ? {
          ...w[ox62ceee(0x24e)],
          n: {
            pattern: var_core_value_sig7C4A
          }
        } : {
          ...w[ox62ceee(0x24e)]
        }, var_core_value_sig3002["setValue"](var_core_value_sigF1B2 + var_core_value_sig488F, m(var_core_value_sig33D2, var_core_value_sig7A15 + var_core_value_sigB440), k(var_core_value_sig7ABC, var_core_value_sig03E1, var_core_value_sigB601, var_core_value_sigE799));
      }
      var_core_value_sig43AE[ox62ceee(0x1e3)][var_core_value_sig7A15] && (var_core_value_sigB5D7["" + m(var_core_value_sig33D2, var_core_value_sig7A15 + var_core_value_sigB440)] = var_core_value_sig43AE["info"][var_core_value_sig7A15]), var_core_value_sig43AE[ox62ceee(0x4a3)][var_core_value_sig7A15 + 0x1] && (var_core_value_sig8883["" + (var_core_value_sig7A15 + var_core_value_sig488F + 0x1)] = var_core_value_sig43AE[ox62ceee(0x4a3)][var_core_value_sig7A15 + 0x1]);
    }
    var_core_value_sig488F += var_core_value_sigA1B6;
    let var_core_value_sig77A3 = var_core_value_sig8293[ox62ceee(0x4a3)],
      var_core_value_sigD85C = var_core_value_sig8293[ox62ceee(0x42b)]() >= 0x0 ? var_core_value_sig8293[ox62ceee(0x42b)]() + 0x1 : 0x0,
      var_core_value_sig3957 = var_core_value_sig8293[ox62ceee(0x266)]() >= 0x0 ? var_core_value_sig8293[ox62ceee(0x266)]() + 0x1 : 0x0;
    for (let var_core_value_sigEEA6 = 0x0; var_core_value_sigEEA6 < var_core_value_sigD85C; var_core_value_sigEEA6++) {
      for (let var_core_value_sigC2BB = 0x0; var_core_value_sigC2BB < var_core_value_sig3957; var_core_value_sigC2BB++) {
        var var_core_value_sigA101, var_core_value_sig2ADC;
        let var_core_value_sig8B71 = {
            ...((var_core_value_sigA101 = var_core_value_sig8293[ox62ceee(0x16a)]) == null || (var_core_value_sigA101 = var_core_value_sigA101[var_core_value_sigEEA6]) == null ? void 0x0 : var_core_value_sigA101[var_core_value_sigC2BB])
          },
          var_core_value_sigAEFB = (var_core_value_sig2ADC = var_core_value_sig77A3[var_core_value_sigC2BB]) == null ? void 0x0 : var_core_value_sig2ADC[ox62ceee(0x30c)],
          var_core_value_sig826B = var_core_value_sigAC2B[var_core_value_sigAEFB],
          var_core_value_sigCF89 = var_core_value_sigFBBE[var_core_value_sigAEFB];
        var_core_value_sig8B71 && (var_core_value_sig8B71["v"] = j(var_core_value_sig8B71, !0x1, var_core_value_sig826B, var_core_value_sig0130, void 0x0, void 0x0, var_core_value_sig702C));
        let var_core_value_sig00CB;
        var_core_value_sig00CB = var_core_value_sig8293["info"][var_core_value_sigEEA6][ox62ceee(0x3ef)] ? var_core_value_sig8293["info"][var_core_value_sigEEA6][ox62ceee(0x3e7)] === 0x0 ? w[ox62ceee(0x421)] : w["subTotalStyle"] : var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sigEEA6][ox62ceee(0x377)] || var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sigEEA6]["level"] === var_core_value_sig8293[ox62ceee(0x2f0)]() ? w[ox62ceee(0x4a2)] : w[ox62ceee(0x215)], var_core_value_sig826B && (var_core_value_sig00CB = {
          ...var_core_value_sig00CB,
          n: {
            pattern: var_core_value_sig826B
          }
        }), var_core_value_sig3002[ox62ceee(0x300)](var_core_value_sigEEA6 + var_core_value_sig488F, m(var_core_value_sig33D2, var_core_value_sigC2BB + var_core_value_sig59DA), k(var_core_value_sig7ABC, var_core_value_sig8B71, var_core_value_sig00CB, var_core_value_sigCF89));
      }
      var_core_value_sig8293["info"][var_core_value_sigEEA6] && (var_core_value_sig8D4A["" + (var_core_value_sigEEA6 + var_core_value_sig488F)] = var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sigEEA6]);
    }
    var_core_value_sig8293[ox62ceee(0x4a3)]["forEach"]((var_core_value_sigEAE1, var_core_value_sigC69F) => {
      var_core_value_sigEAE1 && (var_core_value_sig5094["" + m(var_core_value_sig33D2, var_core_value_sigC69F + var_core_value_sig59DA)] = var_core_value_sigEAE1);
    });
    let var_core_value_sig1386 = var_core_value_sigEF2E["getRowCount"](),
      var_core_value_sig96F5 = var_core_value_sigEF2E[ox62ceee(0x2f0)]();
    for (let var_core_value_sig0442 = 0x0; var_core_value_sig0442 < var_core_value_sig1386; var_core_value_sig0442++) for (let var_core_value_sigF7BB = 0x0; var_core_value_sigF7BB < var_core_value_sig96F5; var_core_value_sigF7BB++) {
      var var_core_value_sig7F54;
      let var_core_value_sigD9DB = {
          ...((var_core_value_sig7F54 = var_core_value_sigEF2E[ox62ceee(0x16a)]) == null || (var_core_value_sig7F54 = var_core_value_sig7F54[var_core_value_sig0442]) == null ? void 0x0 : var_core_value_sig7F54[var_core_value_sigF7BB])
        },
        var_core_value_sigA363;
      var_core_value_sigA363 = var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sig0442][ox62ceee(0x3ef)] ? var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sig0442][ox62ceee(0x3e7)] === 0x0 ? w[ox62ceee(0x421)] : w[ox62ceee(0x1c5)] : w[ox62ceee(0x270)];
      let var_core_value_sigFBA5 = var_core_value_sig8293[ox62ceee(0x1e3)][var_core_value_sig0442]["valueIndex"],
        var_core_value_sigAC47 = var_core_value_sig43AE[ox62ceee(0x1e3)][var_core_value_sigF7BB][ox62ceee(0x3bd)],
        var_core_value_sigA06F = Math[ox62ceee(0x13b)](var_core_value_sigFBA5, var_core_value_sigAC47),
        var_core_value_sig770E = var_core_value_sigDFF0["fieldsConfig"][ox62ceee(0x185)][ox62ceee(0x3a3)](),
        var_core_value_sig4654 = "";
      var_core_value_sig4654 = var_core_value_sigA06F < 0x0 ? var_core_value_sig770E[0x0] ?? "" : var_core_value_sig770E[var_core_value_sigA06F] ?? "";
      let var_core_value_sigB26B = var_core_value_sigAC2B[var_core_value_sig4654];
      var_core_value_sigB26B && (var_core_value_sigA363 = {
        ...var_core_value_sigA363,
        n: {
          pattern: var_core_value_sigB26B
        }
      }), var_core_value_sig3002[ox62ceee(0x300)](var_core_value_sig0442 + var_core_value_sig488F, m(var_core_value_sig33D2, var_core_value_sigF7BB + var_core_value_sigB440), k(var_core_value_sig7ABC, var_core_value_sigD9DB, var_core_value_sigA363));
    }
    return {
      valueMatrix: var_core_value_sig3002,
      rowInfo: var_core_value_sig8D4A,
      colInfo: var_core_value_sigB5D7,
      cornerInfo: var_core_value_sig797B,
      rowHeaderMap: var_core_value_sig5094,
      colHeaderMap: var_core_value_sig8883
    };
  };
function j(var_core_value_sigEB45, var_core_value_sig0623, var_core_value_sigBF43, var_core_value_sigBC08, var_core_value_sig3F28, var_core_value_sig0A16, var_core_value_sig0A96 = t["DateSystem"]["Date1900"]) {
  let var_core_value_sig72FE = var_core_value_sigEB45["v"];
  var_core_value_sig0623 && (var_core_value_sig72FE = "" + var_core_value_sigBC08[ox2d0091(0x1fe)]);
  let var_core_value_sigE8ED = var_core_value_sigEB45["t"] && (var_core_value_sigEB45["t"] & e["PivotViewCellValueTypeEnum"]["blank"]) > 0x0;
  var_core_value_sigE8ED && (var_core_value_sig72FE = "" + var_core_value_sigBC08["sheets-pivot.blank"]);
  let var_core_value_sig6DD3 = var_core_value_sigEB45["t"] && (var_core_value_sigEB45["t"] & e[ox2d0091(0x360)][ox2d0091(0x346)]) > 0x0;
  if (var_core_value_sig6DD3 && (var_core_value_sig72FE = "" + var_core_value_sigBC08["sheets-pivot.other"]), var_core_value_sigEB45["s"] === e[ox2d0091(0x2e2)][ox2d0091(0x157)]) {
    let var_core_value_sig697A = var_core_value_sig72FE,
      var_core_value_sigDB65 = "";
    (0x0, e[ox2d0091(0x3d4)])(var_core_value_sig72FE) && (var_core_value_sig697A = var_core_value_sig72FE[ox2d0091(0x158)], var_core_value_sigDB65 = var_core_value_sig72FE[ox2d0091(0x388)]);
    let var_core_value_sig045E = var_core_value_sigBF43 && !var_core_value_sigE8ED && !var_core_value_sig6DD3 ? t[ox2d0091(0x22f)][ox2d0091(0x1a6)](var_core_value_sigBF43, Number(var_core_value_sig697A), {
      dateSystem: var_core_value_sig0A96
    }) : var_core_value_sig697A;
    if (var_core_value_sigDB65) var_core_value_sig72FE = M(var_core_value_sigBC08, "sheets-pivot.renderText.subtotalWithValue", ox2d0091(0x211), f(var_core_value_sig045E, var_core_value_sigDB65), f(var_core_value_sigDB65, var_core_value_sig045E));else {
      let var_core_value_sigFA38 = var_core_value_sig0A16 || var_core_value_sigBC08[ox2d0091(0x332)];
      var_core_value_sig72FE = M(var_core_value_sigBC08, "sheets-pivot.renderText.subtotal", "{0}\x20{1}", f(var_core_value_sig045E, var_core_value_sigFA38), var_core_value_sigFA38);
    }
  } else {
    if (var_core_value_sigEB45["s"] === e[ox2d0091(0x2e2)]["GrandTotal"]) {
      let var_core_value_sig102B = var_core_value_sigBC08[ox2d0091(0x47e)];
      var_core_value_sig72FE = M(var_core_value_sigBC08, ox2d0091(0x3eb), ox2d0091(0x211), f(var_core_value_sig72FE, var_core_value_sig102B), var_core_value_sig102B);
    } else var_core_value_sigEB45["s"] === e[ox2d0091(0x2e2)]["MultipleGrandTotal"] && var_core_value_sig3F28 && (var_core_value_sig72FE = M(var_core_value_sigBC08, ox2d0091(0x24a), "{0}", f(var_core_value_sig72FE, var_core_value_sig3F28), var_core_value_sig3F28));
  }
  return var_core_value_sig72FE;
}
function M(var_core_value_sig8E87, var_core_value_sigCDF2, var_core_value_sig1043, ...var_core_value_sig4289) {
  let var_core_value_sig2729 = var_core_value_sig8E87[var_core_value_sigCDF2] || var_core_value_sig1043;
  return var_core_value_sig4289[ox33fe7b(0x231)]((var_core_value_sig4524, var_core_value_sig64D5) => {
    const var_core_value_sig9678 = ox33fe7b;
    var_core_value_sig2729 = var_core_value_sig2729[var_core_value_sig9678(0x48c)]("{" + var_core_value_sig64D5 + "}", var_core_value_sig4524 == null ? "" : String(var_core_value_sig4524));
  }), N(var_core_value_sig2729)[ox33fe7b(0x13d)]();
}
function N(var_core_value_sig5BB6) {
  let var_core_value_sig5C75 = "",
    var_core_value_sigCB46 = !0x1;
  for (let var_core_value_sig5E74 of var_core_value_sig5BB6) {
    let var_core_value_sigA7DB = var_core_value_sig5E74 === "\x20";
    (!var_core_value_sigA7DB || !var_core_value_sigCB46) && (var_core_value_sig5C75 += var_core_value_sig5E74), var_core_value_sigCB46 = var_core_value_sigA7DB;
  }
  return var_core_value_sig5C75;
}
function P(var_core_value_sig0177) {
  if ((0x0, e[ox3c6188(0x1b8)])(var_core_value_sig0177)) {
    let {
      errorType: var_core_value_sig75FC
    } = var_core_value_sig0177;
    switch (var_core_value_sig75FC) {
      case e["PivotErrorTypeEnum"]["Div0"]:
        return n["ErrorType"][ox3c6188(0x443)];
      case e[ox3c6188(0x492)][ox3c6188(0x31e)]:
        return n["ErrorType"][ox3c6188(0x249)];
      case e["PivotErrorTypeEnum"][ox3c6188(0x452)]:
        return n["ErrorType"][ox3c6188(0x4b8)];
      case e["PivotErrorTypeEnum"][ox3c6188(0x210)]:
        return n[ox3c6188(0x2b7)][ox3c6188(0x4b8)];
      case e[ox3c6188(0x492)]["BadReference"]:
        return n["ErrorType"][ox3c6188(0x361)];
    }
  }
  return var_core_value_sig0177;
}
function F(var_core_value_sigC674, var_core_value_sigC11B, var_core_value_sig5461 = !0x1, var_core_value_sigBA12 = !0x1) {
  let {
      data: var_core_value_sig65CB
    } = var_core_value_sigC11B,
    var_core_value_sig8AF4 = var_core_value_sigC11B[oxe2a21b(0x172)](),
    var_core_value_sig7C2D = var_core_value_sigC11B[oxe2a21b(0x2f0)]();
  if (var_core_value_sig8AF4 <= 0x0 || var_core_value_sig7C2D <= 0x0) return [];
  let var_core_value_sig5F54 = var_core_value_sigC11B["getLastCol"](),
    var_core_value_sig668D = var_core_value_sigC11B[oxe2a21b(0x42b)](),
    var_core_value_sig6883 = var_core_value_sigBA12 ? var_core_value_sig668D >= 0x0 ? var_core_value_sig668D + 0x1 : 0x0 : var_core_value_sig8AF4,
    var_core_value_sig2A05 = var_core_value_sigBA12 ? var_core_value_sig5F54 >= 0x0 ? var_core_value_sig5F54 + 0x1 : 0x0 : var_core_value_sig7C2D,
    {
      row: var_core_value_sig9CA8,
      col: var_core_value_sig3C9C
    } = var_core_value_sigC674,
    var_core_value_sig7651 = var_core_value_sig9CA8,
    var_core_value_sig6E4E = var_core_value_sig3C9C;
  if (var_core_value_sig5461) {
    let var_core_value_sig639A = [];
    for (let [var_core_value_sig5EEE, var_core_value_sig65B4] of Object[oxe2a21b(0x1c4)](var_core_value_sig65CB)) for (let [var_core_value_sig019B, var_core_value_sigC6BC] of Object[oxe2a21b(0x1c4)](var_core_value_sig65B4)) var_core_value_sig639A[oxe2a21b(0x19f)]((0x0, t[oxe2a21b(0x29c)])(var_core_value_sig7651 + Number(var_core_value_sig5EEE), var_core_value_sig6E4E + Number(var_core_value_sig019B)));
    return var_core_value_sig639A;
  } else {
    let var_core_value_sig567C = var_core_value_sigBA12 ? +(var_core_value_sig6883 > 0x0) : 0x1,
      var_core_value_sig825F = var_core_value_sigBA12 ? +(var_core_value_sig2A05 > 0x0) : 0x1;
    return [{
      startRow: var_core_value_sig7651,
      startColumn: var_core_value_sig6E4E,
      endRow: var_core_value_sig9CA8 + var_core_value_sig6883 - var_core_value_sig567C,
      endColumn: var_core_value_sig3C9C + var_core_value_sig2A05 - var_core_value_sig825F
    }];
  }
}
const I = "SHEET_PIVOT_EXCLUSIVE_ID";
let ee = function (var_core_value_sigC2E8) {
  return var_core_value_sigC2E8[ox2624ed(0x3e1)] = ox2624ed(0x43e), var_core_value_sigC2E8[ox2624ed(0x3f0)] = ox2624ed(0x314), var_core_value_sigC2E8[ox2624ed(0x41c)] = ox2624ed(0x410), var_core_value_sigC2E8[ox2624ed(0x1a5)] = ox2624ed(0x1a5), var_core_value_sigC2E8[ox2624ed(0x467)] = ox2624ed(0x357), var_core_value_sigC2E8[ox2624ed(0x422)] = ox2624ed(0x465), var_core_value_sigC2E8[ox2624ed(0x3d2)] = ox2624ed(0x401), var_core_value_sigC2E8["SetPivotCollapse"] = ox2624ed(0x19c), var_core_value_sigC2E8["SetPivotFilter"] = "setPivotFilter", var_core_value_sigC2E8[ox2624ed(0x1ae)] = ox2624ed(0x2a0), var_core_value_sigC2E8[ox2624ed(0x264)] = ox2624ed(0x42e), var_core_value_sigC2E8[ox2624ed(0x1f9)] = ox2624ed(0x310), var_core_value_sigC2E8[ox2624ed(0x164)] = ox2624ed(0x2e8), var_core_value_sigC2E8[ox2624ed(0x2ed)] = ox2624ed(0x33f), var_core_value_sigC2E8["SetValuePivotFilter"] = "setValuePivotFilter", var_core_value_sigC2E8[ox2624ed(0x2e4)] = ox2624ed(0x47f), var_core_value_sigC2E8[ox2624ed(0x301)] = "resetPivotTable", var_core_value_sigC2E8[ox2624ed(0x2f4)] = ox2624ed(0x235), var_core_value_sigC2E8["SetPivotLayout"] = "setPivotLayout", var_core_value_sigC2E8["SetPivotDateGroup"] = ox2624ed(0x320), var_core_value_sigC2E8;
}({});
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
    "sheets-pivot.dateGroup.yearMonthDate": "Year-Month-Day"
  },
  L = {
    undos: [],
    redos: [],
    preUndos: [],
    preRedos: []
  },
  R = (0x0, t["createAsyncInterceptorKey"])("pivotPerformCheck"),
  ne = (0x0, t["createInterceptorKey"])("pivotMutationGenerate"),
  re = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.get-pivot-data-local",
    handler: () => !0x0
  },
  ie = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-data-local",
    handler: () => !0x0
  },
  z = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-view-local",
    handler: () => !0x0
  },
  B = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-pivot-config-local",
    handler: () => !0x0
  },
  ae = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.send-init-pivot-text-local",
    handler: () => !0x0
  };
function oe(var_core_value_sig3A04) {
  "@babel/helpers - typeof";

  return oe = typeof Symbol == oxf5b302(0x254) && typeof Symbol[oxf5b302(0x32a)] == oxf5b302(0x3b6) ? function (var_core_value_sig546D) {
    return typeof var_core_value_sig546D;
  } : function (var_core_value_sig8078) {
    const var_core_value_sigDCED = oxf5b302;
    return var_core_value_sig8078 && typeof Symbol == var_core_value_sigDCED(0x254) && var_core_value_sig8078[var_core_value_sigDCED(0x358)] === Symbol && var_core_value_sig8078 !== Symbol[var_core_value_sigDCED(0x262)] ? var_core_value_sigDCED(0x3b6) : typeof var_core_value_sig8078;
  }, oe(var_core_value_sig3A04);
}
function se(var_core_value_sig935E, var_core_value_sigDC45) {
  if (oe(var_core_value_sig935E) != ox4caea1(0x153) || !var_core_value_sig935E) return var_core_value_sig935E;
  var var_core_value_sig7C31 = var_core_value_sig935E[Symbol["toPrimitive"]];
  if (var_core_value_sig7C31 !== void 0x0) {
    var var_core_value_sig8B54 = var_core_value_sig7C31[ox4caea1(0x390)](var_core_value_sig935E, var_core_value_sigDC45 || ox4caea1(0x2ce));
    if (oe(var_core_value_sig8B54) != ox4caea1(0x153)) return var_core_value_sig8B54;
    throw TypeError(ox4caea1(0x24b));
  }
  return (var_core_value_sigDC45 === ox4caea1(0x458) ? String : Number)(var_core_value_sig935E);
}
function ce(var_core_value_sigC19B) {
  var var_core_value_sigFB87 = se(var_core_value_sigC19B, ox3d65b5(0x458));
  return oe(var_core_value_sigFB87) == ox3d65b5(0x3b6) ? var_core_value_sigFB87 : var_core_value_sigFB87 + "";
}
function V(var_core_value_sigA318, var_core_value_sig51A4, var_core_value_sig2966) {
  return (var_core_value_sig51A4 = ce(var_core_value_sig51A4)) in var_core_value_sigA318 ? Object[ox199e99(0x168)](var_core_value_sigA318, var_core_value_sig51A4, {
    value: var_core_value_sig2966,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sigA318[var_core_value_sig51A4] = var_core_value_sig2966, var_core_value_sigA318;
}
function H(var_core_value_sigF4C4, var_core_value_sig5617) {
  return function (var_core_value_sig2829, var_core_value_sig6EE2) {
    var_core_value_sig5617(var_core_value_sig2829, var_core_value_sig6EE2, var_core_value_sigF4C4);
  };
}
function U(var_core_value_sig450E, var_core_value_sig92A3, var_core_value_sig61E5, var_core_value_sig9E17) {
  var var_core_value_sigB97D = arguments[ox502417(0x2b6)],
    var_core_value_sigFE1E = var_core_value_sigB97D < 0x3 ? var_core_value_sig92A3 : var_core_value_sig9E17 === null ? var_core_value_sig9E17 = Object[ox502417(0x228)](var_core_value_sig92A3, var_core_value_sig61E5) : var_core_value_sig9E17,
    var_core_value_sig5F541;
  if (typeof Reflect == ox502417(0x153) && typeof Reflect[ox502417(0x2ec)] == ox502417(0x254)) var_core_value_sigFE1E = Reflect["decorate"](var_core_value_sig450E, var_core_value_sig92A3, var_core_value_sig61E5, var_core_value_sig9E17);else {
    for (var var_core_value_sig84B9 = var_core_value_sig450E[ox502417(0x2b6)] - 0x1; var_core_value_sig84B9 >= 0x0; var_core_value_sig84B9--) (var_core_value_sig5F541 = var_core_value_sig450E[var_core_value_sig84B9]) && (var_core_value_sigFE1E = (var_core_value_sigB97D < 0x3 ? var_core_value_sig5F541(var_core_value_sigFE1E) : var_core_value_sigB97D > 0x3 ? var_core_value_sig5F541(var_core_value_sig92A3, var_core_value_sig61E5, var_core_value_sigFE1E) : var_core_value_sig5F541(var_core_value_sig92A3, var_core_value_sig61E5)) || var_core_value_sigFE1E);
  }
  return var_core_value_sigB97D > 0x3 && var_core_value_sigFE1E && Object["defineProperty"](var_core_value_sig92A3, var_core_value_sig61E5, var_core_value_sigFE1E), var_core_value_sigFE1E;
}
let W = class extends t["Disposable"] {
  constructor(var_core_value_sig4CCC) {
    super(), this["_commandService"] = var_core_value_sig4CCC, V(this, ox2ecfb4(0x132), new Map());
  }
  ["handleAsyncResponse"](var_core_value_sig6E47) {
    let {
        version: var_core_value_sigB64D
      } = var_core_value_sig6E47,
      var_core_value_sig2407 = this[ox197969(0x132)][ox197969(0x345)](var_core_value_sigB64D);
    var_core_value_sig2407 && (this[ox197969(0x132)][ox197969(0x216)](var_core_value_sigB64D), var_core_value_sig6E47[ox197969(0x186)] === void 0x0 ? var_core_value_sig2407[ox197969(0x2bb)](var_core_value_sig6E47) : var_core_value_sig2407["reject"](Error(var_core_value_sig6E47[ox197969(0x186)])));
  }
  async ["getPivotDisplayConfig"](var_core_value_sigE4D0) {
    let var_core_value_sigD5F1 = this[ox231fb5(0x1fa)](),
      var_core_value_sigBC19 = new Promise((var_core_value_sigF98E, var_core_value_sigA470) => {
        const var_core_value_sig19A1 = ox231fb5;
        this["_requestResolvers"][var_core_value_sig19A1(0x2d0)](var_core_value_sigD5F1, {
          resolve: var_core_value_sigF98E,
          reject: var_core_value_sigA470
        });
      });
    try {
      (await this[ox231fb5(0x1db)][ox231fb5(0x323)](re["id"], {
        version: var_core_value_sigD5F1,
        ...var_core_value_sigE4D0
      }, {
        onlyLocal: !0x0
      })) || this[ox231fb5(0x176)](var_core_value_sigD5F1, Error(ox231fb5(0x3cc)));
    } catch (var_core_value_sig81F7) {
      this[ox231fb5(0x176)](var_core_value_sigD5F1, var_core_value_sig81F7);
    }
    return var_core_value_sigBC19;
  }
  ["dispose"]() {
    super[oxd8dc78(0x367)]();
    let var_core_value_sig4F3C = Error(oxd8dc78(0x251));
    this[oxd8dc78(0x132)][oxd8dc78(0x231)](({
      reject: var_core_value_sigBE51
    }) => var_core_value_sigBE51(var_core_value_sig4F3C)), this["_requestResolvers"][oxd8dc78(0x3c1)]();
  }
  ["_rejectRequest"](var_core_value_sig8D44, var_core_value_sig1660) {
    let var_core_value_sigEE7B = this["_requestResolvers"][ox38f644(0x345)](var_core_value_sig8D44);
    var_core_value_sigEE7B && (this[ox38f644(0x132)]["delete"](var_core_value_sig8D44), var_core_value_sigEE7B[ox38f644(0x28a)](var_core_value_sig1660));
  }
  ["_generateUniqueVersion"]() {
    return Math[ox27cabc(0x3da)]()[ox27cabc(0x2dc)](0x24)[ox27cabc(0x4b4)](0x2, 0x10);
  }
};
W = U([H(0x0, (0x0, t["Inject"])(t["ICommandService"]))], W);
const le = var_core_value_sig09DF => {
  var var_core_value_sig3A25;
  return ((var_core_value_sig3A25 = var_core_value_sig09DF[ox264610(0x1f5)]) == null ? void 0x0 : var_core_value_sig3A25[ox264610(0x42a)]["replace"](/\r\n$/, "")) || "";
};
var G = class extends e["DataFieldManager"] {
  constructor(var_core_value_sig44DF, var_core_value_sig7E48) {
    super(), V(this, ox1a1d94(0x160), {}), V(this, ox1a1d94(0x1ec), void 0x0), V(this, ox1a1d94(0x382), void 0x0), this[ox1a1d94(0x1ec)] = var_core_value_sig7E48, this[ox1a1d94(0x382)] = var_core_value_sig44DF;
  }
  ["initDataRanges"]() {
    for (let var_core_value_sigAAD1 in this[ox4527a6(0x1bb)]) {
      let var_core_value_sig8EC2 = this[ox4527a6(0x1bb)][var_core_value_sigAAD1],
        var_core_value_sigA8C3 = var_core_value_sig8EC2["getRangeKey"]();
      this[ox4527a6(0x160)][var_core_value_sigA8C3] = var_core_value_sig8EC2[ox4527a6(0x1b6)]();
    }
  }
  ["getAutoDisplayNameFunction"]() {
    let var_core_value_sig7B9E = this[ox1a0c9a(0x382)];
    return ge["bind"](var_core_value_sig7B9E);
  }
  ["deleteDataField"](var_core_value_sig5C3B) {
    let var_core_value_sig4002 = this["dataFields"][var_core_value_sig5C3B][ox427ce2(0x33e)];
    delete this[ox427ce2(0x1bb)][var_core_value_sig5C3B], delete this["rangeKeyMap"][var_core_value_sig4002];
  }
  ["addDataFieldWithoutUnitInfo"](var_core_value_sig4153) {
    this[oxf66b88(0x1bb)][var_core_value_sig4153["getId"]()] = var_core_value_sig4153;
  }
  ["removeCollectionImp"](var_core_value_sig2825) {
    var var_core_value_sig5FD0;
    let var_core_value_sigA7E3 = this[ox2a2580(0x382)][ox2a2580(0x16f)](var_core_value_sig2825);
    if (var_core_value_sigA7E3) {
      var var_core_value_sigA784;
      let {
          unitId: var_core_value_sigBC1A,
          subUnitId: var_core_value_sig3F3A
        } = var_core_value_sigA7E3,
        var_core_value_sigA984 = (var_core_value_sigA784 = this["_host"][ox2a2580(0x2e6)](var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sig2825)) == null ? void 0x0 : var_core_value_sigA784[ox2a2580(0x33d)];
      this["_host"][ox2a2580(0x148)]({
        token: var_core_value_sig2825,
        type: "delete",
        dataRangeInfo: var_core_value_sigA984
      });
    }
    (var_core_value_sig5FD0 = this[ox2a2580(0x3f3)](var_core_value_sig2825)) == null || var_core_value_sig5FD0["dispose"](), delete this[ox2a2580(0x1b9)][var_core_value_sig2825];
  }
  ["getRangeKey"](var_core_value_sig4406, var_core_value_sig6806) {
    let {
        sheetName: var_core_value_sigD4AA,
        unitId: var_core_value_sigDC41,
        range: var_core_value_sigFB47
      } = var_core_value_sig4406,
      {
        startRow: var_core_value_sig9B3D,
        endRow: var_core_value_sigC1CF
      } = var_core_value_sigFB47;
    return (0x0, n[ox28117f(0x220)])(var_core_value_sigDC41, var_core_value_sigD4AA, {
      startRow: var_core_value_sig9B3D,
      endRow: var_core_value_sigC1CF,
      startColumn: var_core_value_sig6806,
      endColumn: var_core_value_sig6806
    });
  }
  ["getDataFieldByRangeKey"](var_core_value_sigEE12) {
    return this["dataFields"][this[ox353180(0x160)][var_core_value_sigEE12]];
  }
  ["setRangeKeyMap"](var_core_value_sigD70C, var_core_value_sigF047) {
    this[ox5f38c0(0x160)][var_core_value_sigD70C] = var_core_value_sigF047;
  }
  ["updateRangeKeyMap"](var_core_value_sigC2F9, var_core_value_sig1F51) {
    this[ox3f8e1d(0x160)][var_core_value_sig1F51] = this[ox3f8e1d(0x160)][var_core_value_sigC2F9], delete this[ox3f8e1d(0x160)][var_core_value_sigC2F9];
  }
  ["addCollectionByJSON"](var_core_value_sig29F5, var_core_value_sig5A51, var_core_value_sigF1D1, var_core_value_sig370E) {
    let var_core_value_sigDE14 = new e["FieldsCollection"](this);
    var_core_value_sigDE14[ox583175(0x329)](var_core_value_sig5A51);
    let var_core_value_sig02CB = [],
      var_core_value_sig6CBB = 0x0;
    for (let var_core_value_sigA504 of var_core_value_sigDE14[ox583175(0x2e1)]) {
      let var_core_value_sig5276 = this["getRangeKey"](var_core_value_sigF1D1, var_core_value_sig6CBB),
        var_core_value_sig031B = this[ox583175(0x1bb)][var_core_value_sigA504];
      var_core_value_sig031B && (var_core_value_sig031B["rangeKey"] = var_core_value_sig5276, this["setRangeKeyMap"](var_core_value_sig5276, var_core_value_sigA504), var_core_value_sig02CB[ox583175(0x19f)]({
        index: var_core_value_sig6CBB,
        dataField: var_core_value_sig031B
      })), var_core_value_sig6CBB++;
    }
    return this[ox583175(0x3b8)](var_core_value_sig29F5, var_core_value_sigDE14, var_core_value_sigF1D1, var_core_value_sig370E), {
      collection: var_core_value_sigDE14,
      updateDataFieldList: var_core_value_sig02CB
    };
  }
  ["getRangeStartEndInfo"](var_core_value_sig68DA, var_core_value_sig64D8) {
    return var_core_value_sig68DA[ox145940(0x468)] === t["RANGE_TYPE"]["COLUMN"] ? {
      startRow: 0x0,
      startColumn: var_core_value_sig68DA[ox145940(0x205)],
      endRow: var_core_value_sig64D8[ox145940(0x172)]() - 0x1,
      endColumn: var_core_value_sig68DA[ox145940(0x2bc)]
    } : {
      startRow: var_core_value_sig68DA[ox145940(0x3f1)],
      startColumn: var_core_value_sig68DA["startColumn"],
      endRow: var_core_value_sig68DA[ox145940(0x150)],
      endColumn: var_core_value_sig68DA[ox145940(0x2bc)]
    };
  }
  ["createCollectionWithDataRange"](var_core_value_sigD755) {
    let {
        sheetName: var_core_value_sigF897,
        range: var_core_value_sigA578
      } = var_core_value_sigD755,
      var_core_value_sig0260 = this[ox4b32ae(0x1ec)][ox4b32ae(0x4a0)](t[ox4b32ae(0x2b3)]["UNIVER_SHEET"]),
      var_core_value_sig034D = var_core_value_sig0260["getSheetBySheetName"](var_core_value_sigF897),
      var_core_value_sig89EC = var_core_value_sig034D["getCellMatrix"](),
      {
        startColumn: var_core_value_sig9975,
        startRow: var_core_value_sigD6D9,
        endColumn: var_core_value_sig2637
      } = this[ox4b32ae(0x356)](var_core_value_sigA578, var_core_value_sig034D),
      var_core_value_sigAF1D = var_core_value_sig0260[ox4b32ae(0x439)](),
      var_core_value_sigC92D = new e["FieldsCollection"](this);
    var_core_value_sigC92D[ox4b32ae(0x1d2)](var_core_value_sigD755);
    let var_core_value_sigEA3D = [],
      var_core_value_sig2841 = {};
    for (let var_core_value_sig05FF = var_core_value_sig9975; var_core_value_sig05FF <= var_core_value_sig2637; var_core_value_sig05FF++) {
      let var_core_value_sig9DC0 = var_core_value_sig89EC[ox4b32ae(0x197)](var_core_value_sigD6D9, var_core_value_sig05FF),
        var_core_value_sig95F0 = this[ox4b32ae(0x145)](var_core_value_sigD755, var_core_value_sig05FF),
        var_core_value_sig9CCB = this[ox4b32ae(0x14a)](var_core_value_sig95F0);
      if (var_core_value_sig9CCB) var_core_value_sigC92D[ox4b32ae(0x4bf)](var_core_value_sig9CCB[ox4b32ae(0x1b6)](), var_core_value_sig9CCB["getName"]());else {
        let var_core_value_sig77EE = this[ox4b32ae(0x263)](),
          var_core_value_sig9F76 = this["adjustSheetCellData"](var_core_value_sig9DC0, var_core_value_sigAF1D, var_core_value_sig2841);
        (0x0, e[ox4b32ae(0x179)])(var_core_value_sig9F76) && (var_core_value_sig9F76 = t["numfmt"][ox4b32ae(0x1a6)](var_core_value_sig9F76["f"], Number(var_core_value_sig9F76["v"])));
        let var_core_value_sigB008 = this[ox4b32ae(0x136)](var_core_value_sig9F76, var_core_value_sig05FF),
          var_core_value_sig8721 = new e["DataField"](var_core_value_sig77EE, var_core_value_sigB008, (0x0, e[ox4b32ae(0x1b4)])(0x3));
        var_core_value_sig8721["rangeKey"] = var_core_value_sig95F0, this[ox4b32ae(0x1bb)][var_core_value_sig77EE] = var_core_value_sig8721, var_core_value_sigC92D["addField"](var_core_value_sig77EE, var_core_value_sigB008), var_core_value_sigEA3D[ox4b32ae(0x19f)]({
          index: var_core_value_sig05FF,
          dataField: var_core_value_sig8721
        });
      }
    }
    return {
      updateDataFieldList: var_core_value_sigEA3D,
      collection: var_core_value_sigC92D
    };
  }
  ["_getAutoName"](var_core_value_sig9FE1) {
    return this[ox1f35c4(0x382)][ox1f35c4(0x46a)]()["sheets-pivot.columnName"] + "\x20" + (0x0, t[ox1f35c4(0x165)])(var_core_value_sig9FE1);
  }
  ["uniqueDataFieldName"](var_core_value_sig9DAA, var_core_value_sig1F8A) {
    return var_core_value_sig9DAA == null || var_core_value_sig9DAA === "" ? this[ox4d3feb(0x15a)](var_core_value_sig1F8A) : String(var_core_value_sig9DAA);
  }
  ["getCollection"](var_core_value_sigEBB4) {
    return this[ox4195bd(0x1b9)][var_core_value_sigEBB4];
  }
  ["addCollection"](var_core_value_sig2B74, var_core_value_sig0483, var_core_value_sig4A48, var_core_value_sigD170) {
    this[ox4b4f5b(0x1b9)][var_core_value_sig2B74] = var_core_value_sig0483, var_core_value_sig0483[ox4b4f5b(0x1d2)](var_core_value_sig4A48), this[ox4b4f5b(0x382)][ox4b4f5b(0x148)]({
      token: var_core_value_sig2B74,
      type: ox4b4f5b(0x3db),
      dataRangeInfo: var_core_value_sig4A48,
      targetCellInfo: var_core_value_sigD170
    });
  }
  ["handleMoveRange"](var_core_value_sig90E5, var_core_value_sig7000) {
    let var_core_value_sigD7C5 = this[ox55ba6e(0x3f3)](var_core_value_sig90E5),
      var_core_value_sig3633 = var_core_value_sigD7C5[ox55ba6e(0x296)](),
      var_core_value_sig1DF5 = 0x0;
    for (let var_core_value_sigFBF0 of var_core_value_sig3633) {
      let var_core_value_sigE718 = var_core_value_sigD7C5[ox55ba6e(0x1f8)](var_core_value_sigFBF0),
        var_core_value_sigAEC8 = this[ox55ba6e(0x145)](var_core_value_sig7000, var_core_value_sig1DF5);
      this[ox55ba6e(0x1fb)](var_core_value_sigE718[ox55ba6e(0x33e)], var_core_value_sigAEC8), var_core_value_sig1DF5++;
    }
  }
  ["getPivotDirtyViewInfo"]() {
    return {
      runtimeCellData: {},
      dirtyRanges: {}
    };
  }
  ["getUpdateRangeDeleteIds"](var_core_value_sig90A3, var_core_value_sig28BE) {
    if (this[ox2ced5e(0x3f3)](var_core_value_sig90A3)) {
      let var_core_value_sig2F95 = this[ox2ced5e(0x3e5)](var_core_value_sig28BE),
        var_core_value_sigF0E1 = [];
      for (let var_core_value_sigB977 of var_core_value_sig2F95) this[ox2ced5e(0x160)][var_core_value_sigB977] !== void 0x0 && var_core_value_sigF0E1["push"](this[ox2ced5e(0x160)][var_core_value_sigB977]);
      let var_core_value_sig2D8D = this[ox2ced5e(0x34d)](var_core_value_sig90A3),
        var_core_value_sigE5A6 = [],
        var_core_value_sigF449 = new Set(var_core_value_sigF0E1);
      for (let var_core_value_sig2949 of var_core_value_sig2D8D) var_core_value_sigF449[ox2ced5e(0x442)](var_core_value_sig2949) || var_core_value_sigE5A6[ox2ced5e(0x19f)](var_core_value_sig2949);
      return var_core_value_sigE5A6;
    }
  }
  ["getMatrixValue"](var_core_value_sig0224, var_core_value_sig854B, var_core_value_sig1FF6, var_core_value_sig4B27, var_core_value_sig3A41) {
    return var_core_value_sig854B && var_core_value_sig854B[ox277f2f(0x197)](var_core_value_sig4B27, var_core_value_sig3A41) ? var_core_value_sig854B[ox277f2f(0x197)](var_core_value_sig4B27, var_core_value_sig3A41) : var_core_value_sig1FF6 && var_core_value_sig1FF6[ox277f2f(0x197)](var_core_value_sig4B27, var_core_value_sig3A41) ? var_core_value_sig1FF6[ox277f2f(0x197)](var_core_value_sig4B27, var_core_value_sig3A41) : var_core_value_sig0224["getValue"](var_core_value_sig4B27, var_core_value_sig3A41);
  }
  ["refreshDataField"](var_core_value_sig269A, var_core_value_sigBF53, var_core_value_sigD9BB, var_core_value_sigF549) {
    let var_core_value_sigC125 = this[ox1dfbec(0x1bb)][var_core_value_sig269A];
    if (!var_core_value_sigC125) return;
    let {
        subUnitId: var_core_value_sigB63D,
        range: var_core_value_sig8255,
        unitId: var_core_value_sigBFC7
      } = var_core_value_sigBF53,
      var_core_value_sig933F = this["_univerInstanceService"][ox1dfbec(0x2a4)](var_core_value_sigBFC7);
    if (!var_core_value_sig933F) {
      console[ox1dfbec(0x186)](ox1dfbec(0x1cc));
      return;
    }
    let var_core_value_sig29DE = var_core_value_sig933F[ox1dfbec(0x16b)](var_core_value_sigB63D),
      var_core_value_sig4AFB = var_core_value_sig29DE[ox1dfbec(0x1dd)](),
      {
        arrayFormulaCellDataMatrix: var_core_value_sigC7EA,
        unitDataMatrix: var_core_value_sigDAB9
      } = var_core_value_sigF549 || {},
      {
        startRow: var_core_value_sig9CF7,
        startColumn: var_core_value_sigCCE5,
        endRow: var_core_value_sig5933
      } = this[ox1dfbec(0x356)](var_core_value_sig8255, var_core_value_sig29DE);
    var_core_value_sigC125[ox1dfbec(0x497)]();
    let var_core_value_sig884B = var_core_value_sig933F[ox1dfbec(0x439)](),
      var_core_value_sig4E30 = {},
      var_core_value_sig9730 = this[ox1dfbec(0x20d)](var_core_value_sig4AFB, var_core_value_sigC7EA, var_core_value_sigDAB9, var_core_value_sig9CF7, var_core_value_sigCCE5 + var_core_value_sigD9BB),
      var_core_value_sig8E4A = this["adjustSheetCellData"](var_core_value_sig9730, var_core_value_sig884B, var_core_value_sig4E30);
    (0x0, e[ox1dfbec(0x179)])(var_core_value_sig8E4A) && (var_core_value_sig8E4A = t[ox1dfbec(0x22f)][ox1dfbec(0x1a6)](var_core_value_sig8E4A["f"], Number(var_core_value_sig8E4A["v"])));
    let var_core_value_sig300B = this[ox1dfbec(0x136)](var_core_value_sig8E4A, var_core_value_sigCCE5 + var_core_value_sigD9BB);
    var_core_value_sigC125[ox1dfbec(0x267)](var_core_value_sig300B);
    for (let var_core_value_sig38C5 = var_core_value_sig9CF7 + 0x1; var_core_value_sig38C5 <= var_core_value_sig5933; var_core_value_sig38C5++) {
      let var_core_value_sig308A = this[ox1dfbec(0x20d)](var_core_value_sig4AFB, var_core_value_sigC7EA, var_core_value_sigDAB9, var_core_value_sig38C5, var_core_value_sigCCE5 + var_core_value_sigD9BB);
      var_core_value_sigC125["addRecord"](this["adjustSheetCellData"](var_core_value_sig308A, var_core_value_sig884B, var_core_value_sig4E30), var_core_value_sig38C5 - 0x1 - var_core_value_sig9CF7);
    }
  }
  ["refreshData"](var_core_value_sig8457, var_core_value_sigB30D, var_core_value_sigDB33) {
    let {
        subUnitId: var_core_value_sig6C8C,
        range: var_core_value_sig7A5E,
        unitId: var_core_value_sig838E
      } = var_core_value_sigDB33,
      var_core_value_sig9A5B = this[ox5a23a0(0x1ec)][ox5a23a0(0x2a4)](var_core_value_sig838E);
    if (!var_core_value_sig9A5B) {
      console[ox5a23a0(0x186)](ox5a23a0(0x1cc));
      return;
    }
    let var_core_value_sigC860 = var_core_value_sig9A5B["getSheetBySheetId"](var_core_value_sig6C8C),
      var_core_value_sigE64C = var_core_value_sigC860["getCellMatrix"](),
      {
        startRow: var_core_value_sigF39B,
        startColumn: var_core_value_sig9B88,
        endRow: var_core_value_sig992A
      } = this["getRangeStartEndInfo"](var_core_value_sig7A5E, var_core_value_sigC860),
      var_core_value_sig6281 = var_core_value_sig9A5B[ox5a23a0(0x439)](),
      var_core_value_sig9B01 = {};
    for (let {
      dataField: var_core_value_sigC87D,
      index: var_core_value_sigCCDC
    } of var_core_value_sigB30D) {
      var_core_value_sigC87D["reset"]();
      let var_core_value_sig528D = this[ox5a23a0(0x20d)](var_core_value_sigE64C, void 0x0, void 0x0, var_core_value_sigF39B, var_core_value_sig9B88 + var_core_value_sigCCDC),
        var_core_value_sigA309 = this[ox5a23a0(0x21e)](var_core_value_sig528D, var_core_value_sig6281, var_core_value_sig9B01);
      (0x0, e[ox5a23a0(0x179)])(var_core_value_sigA309) && (var_core_value_sigA309 = t[ox5a23a0(0x22f)]["format"](var_core_value_sigA309["f"], Number(var_core_value_sigA309["v"])));
      let var_core_value_sig9E20 = this[ox5a23a0(0x136)](var_core_value_sigA309, var_core_value_sig9B88 + var_core_value_sigCCDC);
      var_core_value_sigC87D[ox5a23a0(0x267)](var_core_value_sig9E20);
    }
    var_core_value_sig8457[ox5a23a0(0x272)]();
    for (let var_core_value_sigC310 = var_core_value_sigF39B + 0x1; var_core_value_sigC310 <= var_core_value_sig992A; var_core_value_sigC310++) for (let {
      index: var_core_value_sig26BB,
      dataField: var_core_value_sig19B4
    } of var_core_value_sigB30D) {
      let var_core_value_sig08BA = var_core_value_sigE64C[ox5a23a0(0x197)](var_core_value_sigC310, var_core_value_sig9B88 + var_core_value_sig26BB);
      var_core_value_sig19B4[ox5a23a0(0x2d7)](this[ox5a23a0(0x21e)](var_core_value_sig08BA, var_core_value_sig6281, var_core_value_sig9B01), var_core_value_sigC310 - 0x1 - var_core_value_sigF39B);
    }
    var_core_value_sig8457[ox5a23a0(0x212)](var_core_value_sig992A - var_core_value_sigF39B);
  }
  ["getRangeKeyList"](var_core_value_sigA724) {
    let {
        range: var_core_value_sig385E
      } = var_core_value_sigA724,
      {
        startColumn: var_core_value_sig10D3,
        endColumn: var_core_value_sig41F2
      } = var_core_value_sig385E,
      var_core_value_sig32DD = [];
    for (let var_core_value_sigA4E8 = var_core_value_sig10D3; var_core_value_sigA4E8 <= var_core_value_sig41F2; var_core_value_sigA4E8++) var_core_value_sig32DD[oxf02cfa(0x19f)](this[oxf02cfa(0x145)](var_core_value_sigA724, var_core_value_sigA4E8));
    return var_core_value_sig32DD;
  }
  ["adjustSheetCellData"](var_core_value_sig7A88, var_core_value_sig6CFC, var_core_value_sig3EC0) {
    if (var_core_value_sig7A88) {
      let {
        s: var_core_value_sigDC07,
        v: var_core_value_sig3474,
        t: var_core_value_sig4E80,
        p: var_core_value_sigD23B
      } = var_core_value_sig7A88;
      if (var_core_value_sigD23B) return le(var_core_value_sigD23B);
      let var_core_value_sig2B2A = var_core_value_sig6CFC["get"](var_core_value_sigDC07);
      if (var_core_value_sig2B2A && var_core_value_sig4E80 === t[ox1f0497(0x137)]["NUMBER"] && var_core_value_sig2B2A["n"]) {
        let {
          pattern: var_core_value_sig218A
        } = var_core_value_sig2B2A["n"];
        var_core_value_sig3EC0[var_core_value_sig218A] || (var_core_value_sig3EC0[var_core_value_sig218A] = t[ox1f0497(0x22f)][ox1f0497(0x1ce)](var_core_value_sig218A));
        let var_core_value_sig14CB = var_core_value_sig3EC0[var_core_value_sig218A],
          var_core_value_sigFDEE = var_core_value_sig14CB[ox1f0497(0x412)];
        if (var_core_value_sig14CB["isText"]) return String(var_core_value_sig3474);
        if (var_core_value_sigFDEE) return {
          v: var_core_value_sig3474,
          f: var_core_value_sig218A
        };
      }
      if (var_core_value_sig4E80 === t[ox1f0497(0x137)][ox1f0497(0x35e)]) return Number(var_core_value_sig3474);
      if (var_core_value_sig4E80 === t[ox1f0497(0x137)]["STRING"] || var_core_value_sig4E80 === t[ox1f0497(0x137)][ox1f0497(0x37e)]) return String(var_core_value_sig3474);
      if (var_core_value_sig4E80 === void 0x0) {
        let var_core_value_sigA676 = Number(var_core_value_sig3474);
        if (!Number[ox1f0497(0x45e)](var_core_value_sigA676) && String(var_core_value_sigA676) === var_core_value_sig3474) return var_core_value_sigA676;
      }
      return var_core_value_sig3474 ?? null;
    } else return null;
  }
  ["getRangeData"](var_core_value_sigEA69) {
    let {
        sheetName: var_core_value_sigF42A,
        range: var_core_value_sig898E,
        unitId: var_core_value_sigC481
      } = var_core_value_sigEA69,
      var_core_value_sig27B7 = this[ox2a9e34(0x1ec)]["getUnit"](var_core_value_sigC481);
    if (!var_core_value_sig27B7) return console[ox2a9e34(0x186)](ox2a9e34(0x1cc)), {
      header: [],
      data: []
    };
    let var_core_value_sig2DAD = var_core_value_sig27B7[ox2a9e34(0x38a)](var_core_value_sigF42A),
      var_core_value_sig00DE = var_core_value_sig2DAD[ox2a9e34(0x1dd)](),
      {
        startRow: var_core_value_sigEF7C,
        startColumn: var_core_value_sig07E7,
        endRow: var_core_value_sig6005,
        endColumn: var_core_value_sig25A4
      } = this[ox2a9e34(0x356)](var_core_value_sig898E, var_core_value_sig2DAD),
      var_core_value_sigB591 = var_core_value_sig27B7["getStyles"](),
      var_core_value_sigB272 = [],
      var_core_value_sig6F52 = [],
      var_core_value_sig09C4 = {};
    for (let var_core_value_sig0B5C = var_core_value_sigEF7C; var_core_value_sig0B5C <= var_core_value_sig6005; var_core_value_sig0B5C++) {
      let var_core_value_sigC27E = [];
      for (let var_core_value_sigDBB5 = var_core_value_sig07E7; var_core_value_sigDBB5 <= var_core_value_sig25A4; var_core_value_sigDBB5++) {
        let var_core_value_sigA621 = var_core_value_sig00DE[ox2a9e34(0x197)](var_core_value_sig0B5C, var_core_value_sigDBB5);
        var_core_value_sig0B5C === var_core_value_sigEF7C ? var_core_value_sigB272["push"](var_core_value_sigA621 == null ? null : String(var_core_value_sigA621["v"])) : var_core_value_sigC27E[ox2a9e34(0x19f)](this[ox2a9e34(0x21e)](var_core_value_sigA621, var_core_value_sigB591, var_core_value_sig09C4));
      }
      var_core_value_sig6F52[ox2a9e34(0x19f)](var_core_value_sigC27E);
    }
    return {
      header: var_core_value_sigB272,
      data: var_core_value_sig6F52
    };
  }
  ["toJSON"]() {
    return super["toJSON"]();
  }
  ["fromJSON"](var_core_value_sig8E3E) {
    super["fromJSON"](var_core_value_sig8E3E), this[ox5d9334(0x438)]();
  }
  ["dispose"]() {
    super[oxa0dc0a(0x367)](), this[oxa0dc0a(0x160)] = {}, this["_host"] = null;
  }
};
const ue = var_core_value_sig5B2B => {
    let {
        targetCellInfo: var_core_value_sigE5FE,
        direction: var_core_value_sig78A5 = ox3a2f6d(0x3fa)
      } = var_core_value_sig5B2B,
      {
        matrixCache: var_core_value_sig9A4C,
        rangesCache: var_core_value_sigC723
      } = q({
        filter: "Filter",
        row: ox3a2f6d(0x289),
        column: ox3a2f6d(0x374),
        values: ox3a2f6d(0x2cc)
      }, var_core_value_sigE5FE, var_core_value_sig78A5),
      var_core_value_sig1E32 = new t[ox3a2f6d(0x38b)]();
    return var_core_value_sig9A4C["forValue"]((var_core_value_sigC3D3, var_core_value_sig1451, var_core_value_sigAD57) => {
      var_core_value_sig1E32["setValue"](var_core_value_sigC3D3, var_core_value_sig1451, var_core_value_sigAD57);
    }), {
      matrix: var_core_value_sig1E32,
      rangesCache: var_core_value_sigC723
    };
  },
  de = var_core_value_sig22AF => {
    let var_core_value_sig0F31;
    if (var_core_value_sig22AF != null && var_core_value_sig22AF["v"] || (var_core_value_sig22AF == null ? void 0x0 : var_core_value_sig22AF["v"]) === 0x0) {
      var_core_value_sig0F31 ||= {};
      let var_core_value_sig58A8 = P(var_core_value_sig22AF["v"]);
      typeof var_core_value_sig58A8 == ox54c2c0(0x3ea) ? var_core_value_sig0F31["t"] = t[ox54c2c0(0x137)][ox54c2c0(0x35e)] : typeof var_core_value_sig58A8 == ox54c2c0(0x458) && (var_core_value_sig0F31["t"] = t[ox54c2c0(0x137)][ox54c2c0(0x1c1)]), var_core_value_sig0F31["v"] = var_core_value_sig58A8;
    }
    return var_core_value_sig0F31;
  },
  fe = (var_core_value_sig8F25, var_core_value_sigCBED, var_core_value_sig6224, var_core_value_sigFC3E, var_core_value_sig4D33) => {
    let {
        cornerView: var_core_value_sig08BF,
        rowView: var_core_value_sig1814,
        colView: var_core_value_sig2B5D,
        dataView: var_core_value_sig9B0B,
        pageView: var_core_value_sigF21D,
        formatMap: var_core_value_sig9B55
      } = var_core_value_sig8F25,
      {
        row: var_core_value_sigB8F4,
        col: var_core_value_sig5E41
      } = var_core_value_sigCBED,
      var_core_value_sig310E = new t[ox2e746b(0x38b)](),
      var_core_value_sig2E97 = p(var_core_value_sig8F25, var_core_value_sig5E41, var_core_value_sigFC3E),
      var_core_value_sig4B00 = var_core_value_sigB8F4,
      var_core_value_sig9896 = var_core_value_sig5E41;
    Object[ox2e746b(0x2a8)](var_core_value_sigF21D[ox2e746b(0x16a)])[ox2e746b(0x231)](var_core_value_sigEC1A => {
      Object["keys"](var_core_value_sigF21D["data"][Number(var_core_value_sigEC1A)])["forEach"](var_core_value_sig7D42 => {
        let var_core_value_sig8FDE = {
          ...var_core_value_sigF21D[ox1ef2f0(0x16a)][Number(var_core_value_sigEC1A)][Number(var_core_value_sig7D42)]
        };
        var_core_value_sig310E[ox1ef2f0(0x300)](Number(var_core_value_sigEC1A) + var_core_value_sig4B00, m(var_core_value_sig2E97, Number(var_core_value_sig7D42) + var_core_value_sig9896), de(var_core_value_sig8FDE));
      });
    });
    let var_core_value_sigA725 = Object[ox2e746b(0x2a8)](var_core_value_sigF21D[ox2e746b(0x16a)])[ox2e746b(0x2b6)];
    var_core_value_sig4B00 += var_core_value_sigA725 + +!!var_core_value_sigA725;
    let var_core_value_sig9FB3 = var_core_value_sig08BF["getRowCount"](),
      var_core_value_sig0E44 = var_core_value_sig08BF["getColCount"]();
    for (let var_core_value_sigBDED = 0x0; var_core_value_sigBDED < var_core_value_sig9FB3; var_core_value_sigBDED++) for (let var_core_value_sig78E6 = 0x0; var_core_value_sig78E6 < var_core_value_sig0E44; var_core_value_sig78E6++) {
      var var_core_value_sig243C;
      let var_core_value_sigA70D = {
        ...((var_core_value_sig243C = var_core_value_sig08BF[ox2e746b(0x16a)]) == null || (var_core_value_sig243C = var_core_value_sig243C[var_core_value_sigBDED]) == null ? void 0x0 : var_core_value_sig243C[var_core_value_sig78E6])
      };
      if (var_core_value_sigA70D) {
        var var_core_value_sigB3A4, var_core_value_sigAF1B;
        (var_core_value_sigB3A4 = var_core_value_sig1814[ox2e746b(0x4a3)][var_core_value_sig78E6]) != null && var_core_value_sigB3A4[ox2e746b(0x47a)] && var_core_value_sig78E6 === var_core_value_sig0E44 - 0x1 && var_core_value_sigBDED === var_core_value_sig9FB3 - 0x1 && (var_core_value_sigA70D["v"] = "" + var_core_value_sig6224[ox2e746b(0x1fe)]), var_core_value_sigBDED === var_core_value_sig9FB3 - 0x1 && (var_core_value_sigAF1B = var_core_value_sig08BF[ox2e746b(0x1e3)][var_core_value_sig78E6]) != null && var_core_value_sigAF1B[ox2e746b(0x45b)] && (var_core_value_sigA70D["v"] = "" + (var_core_value_sig6224[ox2e746b(0x418)] || ox2e746b(0x441)));
      }
      var_core_value_sig310E["setValue"](var_core_value_sigBDED + var_core_value_sig4B00, m(var_core_value_sig2E97, var_core_value_sig78E6 + var_core_value_sig9896), de(var_core_value_sigA70D));
    }
    var_core_value_sig9896 += var_core_value_sig0E44;
    let var_core_value_sig906D = var_core_value_sig2B5D[ox2e746b(0x4a3)],
      var_core_value_sig6AFB = var_core_value_sig2B5D[ox2e746b(0x42b)]() >= 0x0 ? var_core_value_sig2B5D[ox2e746b(0x42b)]() + 0x1 : 0x0,
      var_core_value_sig2830 = var_core_value_sig2B5D[ox2e746b(0x266)]() >= 0x0 ? var_core_value_sig2B5D["getLastCol"]() + 0x1 : 0x0;
    for (let var_core_value_sig4BFF = 0x0; var_core_value_sig4BFF < var_core_value_sig6AFB; var_core_value_sig4BFF++) for (let var_core_value_sig541F = 0x0; var_core_value_sig541F < var_core_value_sig2830; var_core_value_sig541F++) {
      var var_core_value_sig9C3A, var_core_value_sig0321;
      let var_core_value_sigCE10 = {
          ...((var_core_value_sig9C3A = var_core_value_sig2B5D[ox2e746b(0x16a)]) == null || (var_core_value_sig9C3A = var_core_value_sig9C3A[var_core_value_sig4BFF]) == null ? void 0x0 : var_core_value_sig9C3A[var_core_value_sig541F])
        },
        var_core_value_sigA386 = var_core_value_sig9B55[(var_core_value_sig0321 = var_core_value_sig906D[var_core_value_sig541F]) == null ? void 0x0 : var_core_value_sig0321[ox2e746b(0x30c)]];
      if (var_core_value_sigCE10) {
        let var_core_value_sigCFAC = var_core_value_sig2B5D[ox2e746b(0x18f)](var_core_value_sig541F + 0x1);
        var_core_value_sig4BFF === 0x0 && var_core_value_sigCFAC != null && var_core_value_sigCFAC["isColumnLabel"] ? var_core_value_sigCE10["v"] = "" + (var_core_value_sig6224[ox2e746b(0x384)] || "Column\x20Labels") : var_core_value_sigCE10["v"] = j(var_core_value_sigCE10, var_core_value_sig4BFF === 0x0 && (var_core_value_sigCFAC == null ? void 0x0 : var_core_value_sigCFAC[ox2e746b(0x47a)]), var_core_value_sigA386, var_core_value_sig6224, var_core_value_sig6224["sheets-pivot.subTotalText"], void 0x0, var_core_value_sig4D33);
      }
      var_core_value_sig310E[ox2e746b(0x300)](var_core_value_sig4BFF + var_core_value_sig4B00, m(var_core_value_sig2E97, var_core_value_sig541F + var_core_value_sig9896), de(var_core_value_sigCE10));
    }
    var_core_value_sig4B00 += var_core_value_sig9FB3;
    let var_core_value_sig51CF = var_core_value_sig1814[ox2e746b(0x4a3)],
      var_core_value_sig3C61 = var_core_value_sig1814[ox2e746b(0x42b)]() >= 0x0 ? var_core_value_sig1814["getLastRow"]() + 0x1 : 0x0,
      var_core_value_sigDC70 = var_core_value_sig1814["getLastCol"]() >= 0x0 ? var_core_value_sig1814[ox2e746b(0x266)]() + 0x1 : 0x0;
    for (let var_core_value_sig40E7 = 0x0; var_core_value_sig40E7 < var_core_value_sig3C61; var_core_value_sig40E7++) for (let var_core_value_sig417B = 0x0; var_core_value_sig417B < var_core_value_sigDC70; var_core_value_sig417B++) {
      var var_core_value_sigD10E, var_core_value_sigBB93;
      let var_core_value_sigCD82 = {
          ...((var_core_value_sigD10E = var_core_value_sig1814[ox2e746b(0x16a)]) == null || (var_core_value_sigD10E = var_core_value_sigD10E[var_core_value_sig40E7]) == null ? void 0x0 : var_core_value_sigD10E[var_core_value_sig417B])
        },
        var_core_value_sig44DD = var_core_value_sig9B55[(var_core_value_sigBB93 = var_core_value_sig51CF[var_core_value_sig417B]) == null ? void 0x0 : var_core_value_sigBB93["tableFieldId"]];
      var_core_value_sigCD82 && (var_core_value_sigCD82["v"] = j(var_core_value_sigCD82, !0x1, var_core_value_sig44DD, var_core_value_sig6224, void 0x0, var_core_value_sig6224[ox2e746b(0x3f8)], var_core_value_sig4D33)), var_core_value_sig310E[ox2e746b(0x300)](var_core_value_sig40E7 + var_core_value_sig4B00, m(var_core_value_sig2E97, var_core_value_sig417B + var_core_value_sig5E41), de(var_core_value_sigCD82));
    }
    let var_core_value_sig4F88 = var_core_value_sig9B0B[ox2e746b(0x172)](),
      var_core_value_sig486C = var_core_value_sig9B0B["getColCount"]();
    for (let var_core_value_sigEDBA = 0x0; var_core_value_sigEDBA < var_core_value_sig4F88; var_core_value_sigEDBA++) for (let var_core_value_sigAA90 = 0x0; var_core_value_sigAA90 < var_core_value_sig486C; var_core_value_sigAA90++) {
      var var_core_value_sig717C;
      let var_core_value_sig96FA = {
        ...((var_core_value_sig717C = var_core_value_sig9B0B["data"]) == null || (var_core_value_sig717C = var_core_value_sig717C[var_core_value_sigEDBA]) == null ? void 0x0 : var_core_value_sig717C[var_core_value_sigAA90])
      };
      var_core_value_sig310E[ox2e746b(0x300)](var_core_value_sigEDBA + var_core_value_sig4B00, m(var_core_value_sig2E97, var_core_value_sigAA90 + var_core_value_sig9896), de(var_core_value_sig96FA));
    }
    return var_core_value_sig310E;
  },
  pe = var_core_value_sig23AE => {
    let {
      view: var_core_value_sigCB54,
      targetCellInfo: var_core_value_sigC7E1,
      isEmpty: var_core_value_sig6575,
      textInfo: var_core_value_sigE901,
      direction: var_core_value_sigB7EC = ox50734b(0x3fa),
      dateSystem: var_core_value_sigB018 = t["DateSystem"]["Date1900"]
    } = var_core_value_sig23AE;
    if (var_core_value_sig6575) return ue(var_core_value_sig23AE);
    let {
        pageView: var_core_value_sigE7BE,
        cornerView: var_core_value_sigC88E,
        rowView: var_core_value_sigC4A6,
        colView: var_core_value_sig1FE3,
        dataView: var_core_value_sigF003
      } = var_core_value_sigCB54,
      var_core_value_sigE146 = p(var_core_value_sigCB54, var_core_value_sigC7E1[ox50734b(0x1a4)], var_core_value_sigB7EC),
      var_core_value_sigF6D5 = F(var_core_value_sigC7E1, var_core_value_sigE7BE, !0x0),
      var_core_value_sig3B2F = var_core_value_sigE7BE[ox50734b(0x15d)] >= 0x0 ? var_core_value_sigE7BE["lastRow"] + 0x1 : 0x0,
      var_core_value_sigE558 = var_core_value_sigC88E[ox50734b(0x172)](),
      var_core_value_sigA99D = var_core_value_sigC88E[ox50734b(0x2f0)](),
      var_core_value_sigB23E = +(var_core_value_sigF6D5[ox50734b(0x2b6)] > 0x0),
      var_core_value_sigDA56 = F({
        row: var_core_value_sigC7E1["row"] + var_core_value_sig3B2F + var_core_value_sigB23E,
        col: var_core_value_sigC7E1["col"]
      }, var_core_value_sigC88E, !0x1, !0x1),
      var_core_value_sig8D74 = F({
        row: var_core_value_sigC7E1[ox50734b(0x292)] + var_core_value_sig3B2F + var_core_value_sigB23E + var_core_value_sigE558,
        col: var_core_value_sigC7E1[ox50734b(0x1a4)]
      }, var_core_value_sigC4A6, !0x1, !0x0),
      var_core_value_sigC3E8 = F({
        row: var_core_value_sigC7E1[ox50734b(0x292)] + var_core_value_sig3B2F + var_core_value_sigB23E,
        col: var_core_value_sigC7E1[ox50734b(0x1a4)] + var_core_value_sigA99D
      }, var_core_value_sig1FE3, !0x1, !0x0),
      var_core_value_sig3FAF = F({
        row: var_core_value_sigC7E1[ox50734b(0x292)] + var_core_value_sig3B2F + var_core_value_sigB23E + var_core_value_sigE558,
        col: var_core_value_sigC7E1["col"] + var_core_value_sigA99D
      }, var_core_value_sigF003, !0x1, !0x1),
      var_core_value_sigC00C = {
        rowRanges: var_core_value_sig8D74[ox50734b(0x15f)](var_core_value_sigE863 => h(var_core_value_sigE146, var_core_value_sigE863)),
        colRanges: var_core_value_sigC3E8[ox50734b(0x15f)](var_core_value_sig04B4 => h(var_core_value_sigE146, var_core_value_sig04B4)),
        cornerRanges: var_core_value_sigDA56[ox50734b(0x15f)](var_core_value_sig1C07 => h(var_core_value_sigE146, var_core_value_sig1C07)),
        dataRanges: var_core_value_sig3FAF["map"](var_core_value_sig93D6 => h(var_core_value_sigE146, var_core_value_sig93D6)),
        pageRanges: var_core_value_sigF6D5["map"](var_core_value_sigDD05 => h(var_core_value_sigE146, var_core_value_sigDD05))
      };
    return {
      matrix: fe(var_core_value_sigCB54, var_core_value_sigC7E1, var_core_value_sigE901, var_core_value_sigB7EC, var_core_value_sigB018),
      rangesCache: var_core_value_sigC00C
    };
  };
let K = class extends t["Disposable"] {
  constructor(var_core_value_sig3932, var_core_value_sig48B2, var_core_value_sig57DF, var_core_value_sigC985, var_core_value_sig8DA6) {
    super(), this[ox37d135(0x483)] = var_core_value_sig3932, this["_univerInstanceService"] = var_core_value_sig48B2, this[ox37d135(0x342)] = var_core_value_sig57DF, this["_commandService"] = var_core_value_sigC985, this[ox37d135(0x31d)] = var_core_value_sig8DA6, V(this, "_model", new Map()), V(this, ox37d135(0x451), new Map()), V(this, ox37d135(0x33b), new Map()), V(this, ox37d135(0x3ae), new Map()), V(this, ox37d135(0x32d), void 0x0), V(this, ox37d135(0x34e), "ltr"), V(this, ox37d135(0x403), new i[ox37d135(0x218)]()), V(this, ox37d135(0x305), this[ox37d135(0x403)]["asObservable"]()), V(this, ox37d135(0x2d1), new i[ox37d135(0x218)]()), V(this, "viewData$", this[ox37d135(0x2d1)]["asObservable"]()), V(this, ox37d135(0x1ac), new i[ox37d135(0x218)]()), V(this, ox37d135(0x3bf), this[ox37d135(0x1ac)]["asObservable"]()), V(this, ox37d135(0x274), new Map()), V(this, "needSameDeleteModel", []), V(this, ox37d135(0x25d), new Map()), this[ox37d135(0x3ad)]();
  }
  ["getTextInfo"]() {
    return this[ox482fb7(0x32d)] ? this[ox482fb7(0x32d)] : te;
  }
  ["setTextInfo"](var_core_value_sigCA69, var_core_value_sigB77C) {
    if (this[ox5a5c6e(0x32d)] = var_core_value_sigCA69, this[ox5a5c6e(0x34e)] === var_core_value_sigB77C) return;
    this[ox5a5c6e(0x34e)] = var_core_value_sigB77C;
    let var_core_value_sig9AFF = [];
    this[ox5a5c6e(0x2e7)][ox5a5c6e(0x231)](var_core_value_sigE92D => {
      var_core_value_sigE92D["forEach"](var_core_value_sigAB68 => {
        var_core_value_sigAB68[ox27bfb8(0x231)]((var_core_value_sig237B, var_core_value_sigFEAB) => {
          const var_core_value_sigE347 = ox27bfb8;
          let var_core_value_sig3C5B = this[var_core_value_sigE347(0x3ae)]["get"](var_core_value_sigFEAB);
          var_core_value_sig3C5B && var_core_value_sig9AFF[var_core_value_sigE347(0x19f)]({
            ...var_core_value_sig3C5B,
            pivotTableId: var_core_value_sigFEAB,
            isEmpty: var_core_value_sig237B[var_core_value_sigE347(0x208)],
            targetCellInfo: var_core_value_sig237B[var_core_value_sigE347(0x376)],
            textInfo: var_core_value_sigCA69
          });
        });
      });
    }), var_core_value_sig9AFF["forEach"](var_core_value_sig9940 => this[ox5a5c6e(0x338)](var_core_value_sig9940, !0x0)), var_core_value_sig9AFF[ox5a5c6e(0x231)](({
      targetCellInfo: var_core_value_sig682D,
      pivotTableId: var_core_value_sig1435
    }) => {
      const var_core_value_sig4082 = ox5a5c6e;
      this[var_core_value_sig4082(0x2d1)][var_core_value_sig4082(0x37c)]({
        unitId: var_core_value_sig682D[var_core_value_sig4082(0x386)],
        subUnitId: var_core_value_sig682D[var_core_value_sig4082(0x1bf)],
        pivotTableId: var_core_value_sig1435
      });
    });
  }
  ["handleMoveRange"](var_core_value_sig3545) {
    let {
      from: var_core_value_sig5EE4,
      to: var_core_value_sig7EAB,
      unitId: var_core_value_sig56B9,
      fromRange: var_core_value_sig90CF,
      toRange: var_core_value_sigA3861
    } = var_core_value_sig3545;
    if (var_core_value_sig5EE4 && var_core_value_sig7EAB) {
      var var_core_value_sigCD6E;
      let var_core_value_sigC049 = this[ox249133(0x430)](var_core_value_sig56B9),
        var_core_value_sigE5C3 = this[ox249133(0x2e7)][ox249133(0x345)](var_core_value_sig56B9),
        var_core_value_sigCCAA = (var_core_value_sigCD6E = this[ox249133(0x1ec)][ox249133(0x2a4)](var_core_value_sig56B9)) == null ? void 0x0 : var_core_value_sigCD6E[ox249133(0x16b)](var_core_value_sig7EAB[ox249133(0x1bf)]);
      if (!var_core_value_sigE5C3 || !var_core_value_sigCCAA) return;
      let var_core_value_sigF32D = var_core_value_sigCCAA == null ? void 0x0 : var_core_value_sigCCAA[ox249133(0x1f7)]();
      for (let [var_core_value_sig040A, var_core_value_sig2AE0] of var_core_value_sigE5C3[ox249133(0x1c4)]()) for (let [var_core_value_sig200B, var_core_value_sig3863] of var_core_value_sig2AE0[ox249133(0x1c4)]()) {
        let {
          sourceRangeInfo: var_core_value_sigBBFF
        } = var_core_value_sig3863;
        if (var_core_value_sigBBFF[ox249133(0x386)] === var_core_value_sig56B9 && var_core_value_sigBBFF["subUnitId"] === var_core_value_sig5EE4[ox249133(0x1bf)] && t[ox249133(0x3e8)][ox249133(0x2e3)](var_core_value_sig90CF, var_core_value_sigBBFF[ox249133(0x26a)])) {
          let var_core_value_sigB577 = {
              row: var_core_value_sigBBFF[ox249133(0x26a)]["startRow"] - var_core_value_sig90CF[ox249133(0x3f1)],
              col: var_core_value_sigBBFF[ox249133(0x26a)][ox249133(0x205)] - var_core_value_sig90CF[ox249133(0x205)]
            },
            var_core_value_sig9572 = {
              unitId: var_core_value_sig56B9,
              subUnitId: var_core_value_sig7EAB[ox249133(0x1bf)],
              sheetName: var_core_value_sigF32D,
              range: {
                startRow: var_core_value_sigA3861["startRow"] + var_core_value_sigB577[ox249133(0x292)],
                endRow: var_core_value_sigA3861[ox249133(0x3f1)] + var_core_value_sigB577["row"] + var_core_value_sigBBFF[ox249133(0x26a)]["endRow"] - var_core_value_sigBBFF["range"][ox249133(0x3f1)],
                startColumn: var_core_value_sigA3861[ox249133(0x205)] + var_core_value_sigB577[ox249133(0x1a4)],
                endColumn: var_core_value_sigA3861[ox249133(0x205)] + var_core_value_sigB577[ox249133(0x1a4)] + var_core_value_sigBBFF["range"][ox249133(0x2bc)] - var_core_value_sigBBFF["range"][ox249133(0x205)]
              }
            };
          var_core_value_sigC049[ox249133(0x2cb)](var_core_value_sig200B, var_core_value_sig9572);
          let var_core_value_sigD873 = {
            ...var_core_value_sig3863,
            sourceRangeInfo: var_core_value_sig9572
          };
          this[ox249133(0x316)](var_core_value_sig56B9, var_core_value_sig7EAB[ox249133(0x1bf)], var_core_value_sig200B, var_core_value_sigD873), this[ox249133(0x148)]({
            unitId: var_core_value_sig56B9,
            token: var_core_value_sig200B,
            type: ox249133(0x420),
            oldSourceRangeInfo: var_core_value_sigBBFF,
            dataRangeInfo: var_core_value_sig9572,
            targetCellInfo: var_core_value_sig3863[ox249133(0x376)]
          }), this[ox249133(0x17e)]({
            unitId: var_core_value_sig56B9,
            subUnitId: var_core_value_sig7EAB[ox249133(0x1bf)],
            oldSubUnitId: var_core_value_sig040A,
            pivotTableId: var_core_value_sig200B,
            pivotTableConfig: var_core_value_sigD873,
            collectionConfig: var_core_value_sigC049[ox249133(0x1c6)]()
          });
        }
      }
    }
  }
  ["broadcastCollectionChange"](var_core_value_sigFD9D) {
    this["_collectionChange$"][ox97a658(0x37c)](var_core_value_sigFD9D);
  }
  ["getDataFieldManager"](var_core_value_sigA2A4) {
    let var_core_value_sigA1AC = this[ox390757(0x274)][ox390757(0x345)](var_core_value_sigA2A4);
    return var_core_value_sigA1AC || (var_core_value_sigA1AC = new G(this, this[ox390757(0x1ec)]), this[ox390757(0x274)][ox390757(0x2d0)](var_core_value_sigA2A4, var_core_value_sigA1AC)), var_core_value_sigA1AC;
  }
  ["getCollection"](var_core_value_sig6180, var_core_value_sigB93D) {
    return this["getDataFieldManager"](var_core_value_sig6180)[oxe4b7b9(0x1b9)][var_core_value_sigB93D];
  }
  ["getUpdateRangeDeleteIds"](var_core_value_sigB17C, var_core_value_sig69B6, var_core_value_sig708D) {
    return this[oxbed584(0x430)](var_core_value_sigB17C)[oxbed584(0x250)](var_core_value_sig69B6, var_core_value_sig708D);
  }
  ["_ensurePivotMap"](var_core_value_sig1ED2, var_core_value_sig94C1) {
    let var_core_value_sigABAC = this["_model"][ox12bc21(0x345)](var_core_value_sig1ED2);
    var_core_value_sigABAC || (var_core_value_sigABAC = new Map(), this[ox12bc21(0x2e7)][ox12bc21(0x2d0)](var_core_value_sig1ED2, var_core_value_sigABAC));
    let var_core_value_sigFAE6 = var_core_value_sigABAC["get"](var_core_value_sig94C1);
    return var_core_value_sigFAE6 || (var_core_value_sigFAE6 = new Map(), var_core_value_sigABAC[ox12bc21(0x2d0)](var_core_value_sig94C1, var_core_value_sigFAE6)), var_core_value_sigFAE6;
  }
  ["_updateModelCache"](var_core_value_sig06AC, var_core_value_sig57E2, var_core_value_sig01FC, var_core_value_sig10FC) {
    this["_ensurePivotMap"](var_core_value_sig06AC, var_core_value_sig57E2)["set"](var_core_value_sig01FC, var_core_value_sig10FC);
  }
  ["_deleteModelCache"](var_core_value_sig5374, var_core_value_sigB66D, var_core_value_sigD0F0) {
    var var_core_value_sig8E31;
    if ((var_core_value_sig8E31 = this["_model"][ox3ecd69(0x345)](var_core_value_sig5374)) != null && (var_core_value_sig8E31 = var_core_value_sig8E31[ox3ecd69(0x345)](var_core_value_sigB66D)) != null && var_core_value_sig8E31[ox3ecd69(0x345)](var_core_value_sigD0F0)) {
      var var_core_value_sig8339;
      (var_core_value_sig8339 = this["_model"][ox3ecd69(0x345)](var_core_value_sig5374)) == null || (var_core_value_sig8339 = var_core_value_sig8339[ox3ecd69(0x345)](var_core_value_sigB66D)) == null || var_core_value_sig8339[ox3ecd69(0x216)](var_core_value_sigD0F0);
    }
  }
  ["_updatePivotTableInstanceCache"](var_core_value_sigA01E, var_core_value_sigA41E) {
    this[ox2c63f3(0x451)][ox2c63f3(0x2d0)](var_core_value_sigA01E, var_core_value_sigA41E);
  }
  ["_deletePivotTableInstanceCache"](var_core_value_sig939C) {
    this[ox3d08c6(0x451)][ox3d08c6(0x216)](var_core_value_sig939C);
  }
  ["_ensureViewDataMap"](var_core_value_sigA49E, var_core_value_sig6DEB) {
    let var_core_value_sig2F0D = this[ox77f009(0x33b)][ox77f009(0x345)](var_core_value_sigA49E);
    var_core_value_sig2F0D || (var_core_value_sig2F0D = new Map(), this[ox77f009(0x33b)][ox77f009(0x2d0)](var_core_value_sigA49E, var_core_value_sig2F0D));
    let var_core_value_sig5141 = var_core_value_sig2F0D[ox77f009(0x345)](var_core_value_sig6DEB);
    return var_core_value_sig5141 || (var_core_value_sig5141 = new Map(), var_core_value_sig2F0D[ox77f009(0x2d0)](var_core_value_sig6DEB, var_core_value_sig5141)), var_core_value_sig5141;
  }
  ["updateConfig"](var_core_value_sigA9E0) {
    let {
        unitId: var_core_value_sig751D,
        subUnitId: var_core_value_sig2E9A,
        pivotTableId: var_core_value_sigE105,
        pivotTableConfig: var_core_value_sig0BD6,
        collectionConfig: var_core_value_sig3070
      } = var_core_value_sigA9E0,
      var_core_value_sigC66D = {
        unitId: var_core_value_sig751D,
        subUnitId: var_core_value_sig2E9A,
        oldSubUnitId: var_core_value_sig2E9A,
        pivotTableId: var_core_value_sigE105,
        pivotTableConfig: var_core_value_sig0BD6,
        collectionConfig: var_core_value_sig3070
      };
    this[ox1f66d6(0x1db)][ox1f66d6(0x323)](B["id"], var_core_value_sigC66D, {
      onlyLocal: !0x0
    });
  }
  ["updateView"](var_core_value_sig8EC5, var_core_value_sig1056, var_core_value_sig6EE5, var_core_value_sig9DD9, var_core_value_sig09AC, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620 = !0x1) {
    var var_core_value_sig07FB;
    this[ox4f9cde(0x1db)]["executeCommand"](z["id"], {
      single: {
        unitId: var_core_value_sig8EC5,
        subUnitId: var_core_value_sig1056,
        type: var_core_value_sig6EE5,
        pivotTableId: var_core_value_sig9DD9,
        view: var_core_value_sig09AC,
        pivotConfig: var_core_value_sig1613
      },
      collectionConfig: {
        [var_core_value_sig8EC5]: var_core_value_sigADC6
      }
    }, {
      onlyLocal: !0x0
    });
    let var_core_value_sig617E = !!((var_core_value_sig07FB = this["getPivotTableInstance"](var_core_value_sig9DD9)) != null && var_core_value_sig07FB[ox4f9cde(0x208)]()),
      var_core_value_sigC85E = this[ox4f9cde(0x2e6)](var_core_value_sig8EC5, var_core_value_sig1056, var_core_value_sig9DD9);
    var_core_value_sigC85E && this[ox4f9cde(0x338)]({
      view: var_core_value_sig09AC,
      pivotTableId: var_core_value_sig9DD9,
      textInfo: this["getTextInfo"](),
      isEmpty: var_core_value_sig617E,
      targetCellInfo: var_core_value_sigC85E["targetCellInfo"]
    }, var_core_value_sig4620);
  }
  ["updateViewData"](var_core_value_sig82931, var_core_value_sig050D) {
    var var_core_value_sig37AE, var_core_value_sig5B51;
    let {
        targetCellInfo: var_core_value_sig64FF,
        pivotTableId: var_core_value_sig86F4
      } = var_core_value_sig82931,
      {
        unitId: var_core_value_sig9E0F,
        subUnitId: var_core_value_sig3A42
      } = var_core_value_sig64FF,
      var_core_value_sig8802 = this[ox493fb7(0x397)](var_core_value_sig9E0F, var_core_value_sig3A42),
      var_core_value_sig95D5 = var_core_value_sig8802[ox493fb7(0x345)](var_core_value_sig86F4),
      var_core_value_sigE027,
      var_core_value_sigE537;
    var_core_value_sig95D5 && (var_core_value_sigE027 = var_core_value_sig95D5["rangeCache"], var_core_value_sigE537 = var_core_value_sig95D5["matrix"]);
    let {
      rangesCache: var_core_value_sig5D84,
      matrix: var_core_value_sigD120
    } = pe({
      ...var_core_value_sig82931,
      direction: this[ox493fb7(0x34e)],
      dateSystem: (var_core_value_sig37AE = (var_core_value_sig5B51 = this[ox493fb7(0x1ec)])[ox493fb7(0x2a4)]) == null || (var_core_value_sig37AE = var_core_value_sig37AE["call"](var_core_value_sig5B51, var_core_value_sig64FF["unitId"], t[ox493fb7(0x2b3)]["UNIVER_SHEET"])) == null ? void 0x0 : var_core_value_sig37AE[ox493fb7(0x475)]()
    });
    var_core_value_sig8802[ox493fb7(0x2d0)](var_core_value_sig86F4, {
      rangeCache: var_core_value_sig5D84,
      matrix: var_core_value_sigD120,
      oldMatrix: var_core_value_sigE537,
      oldRangeCache: var_core_value_sigE027
    }), this[ox493fb7(0x3ae)]["set"](var_core_value_sig86F4, var_core_value_sig82931), var_core_value_sig050D || this["_viewData$"][ox493fb7(0x37c)]({
      unitId: var_core_value_sig9E0F,
      subUnitId: var_core_value_sig3A42,
      pivotTableId: var_core_value_sig86F4
    });
  }
  ["addPivotTable"](var_core_value_sigAA05, var_core_value_sigC04C, var_core_value_sig2069, var_core_value_sig5176, var_core_value_sig71A1) {
    var var_core_value_sig72AD, var_core_value_sig9ABE;
    let var_core_value_sig8EF0 = (var_core_value_sig72AD = this["_univerInstanceService"][ox447609(0x2a4)](var_core_value_sigAA05)) == null ? void 0x0 : var_core_value_sig72AD[ox447609(0x391)]()[ox447609(0x29f)];
    var_core_value_sig5176["setDefaultSortLocale"](var_core_value_sig8EF0 === void 0x0 || (var_core_value_sig9ABE = t["LOCALE_META"][var_core_value_sig8EF0]) == null ? void 0x0 : var_core_value_sig9ABE[ox447609(0x44e)]), this[ox447609(0x316)](var_core_value_sigAA05, var_core_value_sigC04C, var_core_value_sig2069, var_core_value_sig71A1), this[ox447609(0x3d0)](var_core_value_sig2069, var_core_value_sig5176);
  }
  ["removePivotTable"](var_core_value_sig234B, var_core_value_sig8169, var_core_value_sigC5FB) {
    let var_core_value_sig5453 = this[ox168384(0x430)](var_core_value_sig234B);
    var_core_value_sig5453[ox168384(0x34d)](var_core_value_sigC5FB)[ox168384(0x231)](var_core_value_sig9427 => {
      var_core_value_sig5453["deleteDataField"](var_core_value_sig9427);
    }), this[ox168384(0x2fc)](var_core_value_sig234B, var_core_value_sigC5FB), this[ox168384(0x2d8)](var_core_value_sig234B, var_core_value_sig8169, var_core_value_sigC5FB), this[ox168384(0x1e8)](var_core_value_sigC5FB), this[ox168384(0x3ae)]["delete"](var_core_value_sigC5FB);
  }
  ["setPivotTable"](var_core_value_sig8725, var_core_value_sig513B, var_core_value_sig5501, var_core_value_sig7784) {
    this["_updateModelCache"](var_core_value_sig8725, var_core_value_sig513B, var_core_value_sig5501, var_core_value_sig7784);
  }
  ["getPivotTableConfig"](var_core_value_sigB706, var_core_value_sig5FD01, var_core_value_sig77E3) {
    var var_core_value_sigB071;
    let var_core_value_sig15FE = (var_core_value_sigB071 = this[ox18759c(0x2e7)][ox18759c(0x345)](var_core_value_sigB706)) == null || (var_core_value_sigB071 = var_core_value_sigB071[ox18759c(0x345)](var_core_value_sig5FD01)) == null ? void 0x0 : var_core_value_sigB071[ox18759c(0x345)](var_core_value_sig77E3);
    if (var_core_value_sig15FE) return var_core_value_sig15FE;
  }
  ["getPivotTableModelConfig"](var_core_value_sigCF47, var_core_value_sigB0F9, var_core_value_sigAF12) {
    var var_core_value_sigC60C;
    let var_core_value_sig1C3C = (var_core_value_sigC60C = this["_model"][ox1ea8b3(0x345)](var_core_value_sigCF47)) == null || (var_core_value_sigC60C = var_core_value_sigC60C[ox1ea8b3(0x345)](var_core_value_sigB0F9)) == null ? void 0x0 : var_core_value_sigC60C[ox1ea8b3(0x345)](var_core_value_sigAF12);
    if (var_core_value_sig1C3C) return var_core_value_sig1C3C[ox1ea8b3(0x2a9)];
  }
  ["getPivotTableInstance"](var_core_value_sig71CF) {
    return this[ox353935(0x451)][ox353935(0x345)](var_core_value_sig71CF);
  }
  ["deleteUnitId"](var_core_value_sigC341) {
    var var_core_value_sigBA47;
    (var_core_value_sigBA47 = this["_model"][ox4a149c(0x345)](var_core_value_sigC341)) == null || var_core_value_sigBA47[ox4a149c(0x231)](var_core_value_sig21F4 => {
      const var_core_value_sigA345 = ox4a149c;
      var_core_value_sig21F4[var_core_value_sigA345(0x231)]((var_core_value_sigC349, var_core_value_sig9D96) => this[var_core_value_sigA345(0x3ae)][var_core_value_sigA345(0x216)](var_core_value_sig9D96));
    }), this[ox4a149c(0x2e7)][ox4a149c(0x216)](var_core_value_sigC341);
    let var_core_value_sig3DF7 = this["_dataFieldManagerCollection"]["get"](var_core_value_sigC341);
    var_core_value_sig3DF7 && (var_core_value_sig3DF7[ox4a149c(0x367)](), this["_dataFieldManagerCollection"][ox4a149c(0x216)](var_core_value_sigC341)), this["_viewData"][ox4a149c(0x216)](var_core_value_sigC341), this["needSameDeleteModel"]["forEach"](var_core_value_sigA468 => {
      const var_core_value_sig1561 = ox4a149c;
      var_core_value_sigA468[var_core_value_sig1561(0x470)](var_core_value_sigC341);
    });
  }
  ["addCollectionByJSON"](var_core_value_sigD49F, var_core_value_sigCECC, var_core_value_sig0F47, var_core_value_sig6B29) {
    return this[ox358f0d(0x430)](var_core_value_sig0F47[ox358f0d(0x386)])[ox358f0d(0x387)](var_core_value_sigD49F, var_core_value_sigCECC, var_core_value_sig0F47, var_core_value_sig6B29);
  }
  ["createCollectionWithDataRange"](var_core_value_sig28E2) {
    return this["getDataFieldManager"](var_core_value_sig28E2[ox1d6cf5(0x386)])[ox1d6cf5(0x419)](var_core_value_sig28E2);
  }
  ["refreshData"](var_core_value_sig1578, var_core_value_sig52ED, var_core_value_sig135F) {
    this[ox5cfe72(0x430)](var_core_value_sig135F["unitId"])[ox5cfe72(0x1a0)](var_core_value_sig1578, var_core_value_sig52ED, var_core_value_sig135F);
  }
  ["removeDataField"](var_core_value_sig416D, var_core_value_sigAD5D) {
    this[ox62b320(0x430)](var_core_value_sig416D)[ox62b320(0x1ff)](var_core_value_sigAD5D);
  }
  ["removeCollections"](var_core_value_sig1B8A, var_core_value_sigFB18) {
    this["getDataFieldManager"](var_core_value_sig1B8A)[ox45c9fc(0x37a)](var_core_value_sigFB18);
  }
  ["getSubUnitPivotConfigs"](var_core_value_sig703C, var_core_value_sig96CF) {
    var var_core_value_sig49F1;
    return (var_core_value_sig49F1 = this[ox1ebf64(0x2e7)][ox1ebf64(0x345)](var_core_value_sig703C)) == null ? void 0x0 : var_core_value_sig49F1[ox1ebf64(0x345)](var_core_value_sig96CF);
  }
  ["getTargetByPivotId"](var_core_value_sig2F7B) {
    for (let [var_core_value_sigDF14, var_core_value_sig842F] of this[ox37c1c0(0x2e7)][ox37c1c0(0x1c4)]()) for (let [var_core_value_sig2776, var_core_value_sig6FB2] of var_core_value_sig842F[ox37c1c0(0x1c4)]()) if (var_core_value_sig6FB2["has"](var_core_value_sig2F7B)) return {
      unitId: var_core_value_sigDF14,
      subUnitId: var_core_value_sig2776
    };
    return null;
  }
  ["sideEffectUpdateWorkerCache"](var_core_value_sigB0DF, var_core_value_sig2E44, var_core_value_sig8560, var_core_value_sig138D) {
    let var_core_value_sig1E26 = this["_ensureViewDataMap"](var_core_value_sigB0DF, var_core_value_sig2E44);
    var_core_value_sig138D ? var_core_value_sig1E26[ox14cce6(0x2d0)](var_core_value_sig8560, var_core_value_sig138D) : var_core_value_sig1E26[ox14cce6(0x216)](var_core_value_sig8560), this["_viewData$"][ox14cce6(0x37c)]({
      unitId: var_core_value_sigB0DF,
      subUnitId: var_core_value_sig2E44,
      pivotTableId: var_core_value_sig8560
    });
  }
  ["dispose"]() {
    super[ox1941d4(0x367)](), this[ox1941d4(0x2e7)]["clear"](), this[ox1941d4(0x451)][ox1941d4(0x3c1)](), this["_viewData"][ox1941d4(0x3c1)](), this[ox1941d4(0x3ae)][ox1941d4(0x3c1)](), this[ox1941d4(0x25d)][ox1941d4(0x231)](var_core_value_sigC4C0 => clearTimeout(var_core_value_sigC4C0)), this["_queryingMap"]["clear"](), this["_collectionChange$"]["complete"](), this["_viewData$"][ox1941d4(0x224)](), this[ox1941d4(0x1ac)][ox1941d4(0x224)](), this[ox1941d4(0x274)][ox1941d4(0x231)](var_core_value_sig214A => var_core_value_sig214A[ox1941d4(0x367)]()), this["_dataFieldManagerCollection"][ox1941d4(0x3c1)]();
  }
  ["getViewData"](var_core_value_sig5C6C, var_core_value_sigBE85, var_core_value_sig56DE) {
    var var_core_value_sig0278;
    return ((var_core_value_sig0278 = this[ox965cea(0x33b)][ox965cea(0x345)](var_core_value_sig5C6C)) == null || (var_core_value_sig0278 = var_core_value_sig0278["get"](var_core_value_sigBE85)) == null ? void 0x0 : var_core_value_sig0278[ox965cea(0x345)](var_core_value_sig56DE)) || null;
  }
  ["addDirtyPivotTable"](var_core_value_sig08A6) {
    this[ox354e83(0x209)](var_core_value_sig08A6);
  }
  ["updateDirtyPivotTable"](var_core_value_sig04E1) {
    let {
        token: var_core_value_sigC504,
        unitId: var_core_value_sig0515,
        subUnitId: var_core_value_sig9F34
      } = var_core_value_sig04E1,
      var_core_value_sig0247 = var_core_value_sig0515 + "-" + var_core_value_sig9F34 + "-" + var_core_value_sigC504;
    this[ox5a8e34(0x25d)][ox5a8e34(0x345)](var_core_value_sig0247) && clearTimeout(this[ox5a8e34(0x25d)][ox5a8e34(0x345)](var_core_value_sig0247));
    let var_core_value_sig6030 = setTimeout(() => {
      const var_core_value_sigCCC3 = ox5a8e34;
      try {
        this[var_core_value_sigCCC3(0x43f)](var_core_value_sig04E1);
      } catch (var_core_value_sigEB43) {
        this[var_core_value_sigCCC3(0x483)][var_core_value_sigCCC3(0x345)](t[var_core_value_sigCCC3(0x4bd)])[var_core_value_sigCCC3(0x186)]("[SheetsPivotDataSourceModel]", {
          unitId: var_core_value_sig0515,
          subUnitId: var_core_value_sig9F34,
          pivotTableId: var_core_value_sigC504,
          error: var_core_value_sigEB43
        });
      } finally {
        this[var_core_value_sigCCC3(0x25d)][var_core_value_sigCCC3(0x216)](var_core_value_sig0247);
      }
    }, 0x1e);
    this["_queryingMap"][ox5a8e34(0x2d0)](var_core_value_sig0247, var_core_value_sig6030);
  }
  ["queryDirtyPivotTable"](var_core_value_sig0137) {
    let {
        unitId: var_core_value_sig14F3,
        subUnitId: var_core_value_sig34E8,
        token: var_core_value_sigCFE7,
        type: var_core_value_sigECBC,
        pivotConfig: var_core_value_sig65D2
      } = var_core_value_sig0137,
      var_core_value_sig4306 = this[ox50ff1d(0x2fb)](var_core_value_sigCFE7),
      var_core_value_sigFCD3 = var_core_value_sig4306 == null ? void 0x0 : var_core_value_sig4306["query"](),
      var_core_value_sig147A = var_core_value_sig65D2 ?? this["getPivotTableConfig"](var_core_value_sig14F3, var_core_value_sig34E8, var_core_value_sigCFE7);
    var_core_value_sig147A && (var_core_value_sig147A[ox50ff1d(0x208)] = !!(var_core_value_sig4306 != null && var_core_value_sig4306[ox50ff1d(0x208)]())), (var_core_value_sigFCD3 || var_core_value_sigECBC === ox50ff1d(0x216)) && this[ox50ff1d(0x370)](var_core_value_sig14F3, var_core_value_sig34E8, var_core_value_sigECBC, var_core_value_sigCFE7, var_core_value_sigFCD3, var_core_value_sig147A, this["getDataFieldManager"](var_core_value_sig14F3)["toJSON"]());
  }
  ["toJSON"](var_core_value_sig829F) {
    let var_core_value_sig534C = {
      dataFieldManagerConfig: {},
      pivotTableConfigs: {}
    };
    if (this[ox349f22(0x430)](var_core_value_sig829F) && (var_core_value_sig534C["dataFieldManagerConfig"][var_core_value_sig829F] = this[ox349f22(0x430)](var_core_value_sig829F)[ox349f22(0x1c6)]()), this[ox349f22(0x2e7)][ox349f22(0x345)](var_core_value_sig829F)) {
      var_core_value_sig534C[ox349f22(0x162)][var_core_value_sig829F] = {};
      let var_core_value_sig986E = this[ox349f22(0x2e7)]["get"](var_core_value_sig829F);
      var_core_value_sig986E != null && var_core_value_sig986E[ox349f22(0x189)] && [...var_core_value_sig986E[ox349f22(0x2a8)]()][ox349f22(0x231)](var_core_value_sig4186 => {
        const var_core_value_sigF963 = ox349f22;
        let var_core_value_sigB608 = var_core_value_sig986E[var_core_value_sigF963(0x345)](var_core_value_sig4186);
        var_core_value_sigB608 != null && var_core_value_sigB608[var_core_value_sigF963(0x189)] && (var_core_value_sig534C["pivotTableConfigs"][var_core_value_sig829F][var_core_value_sig4186] = {}, [...var_core_value_sigB608[var_core_value_sigF963(0x2a8)]()]["forEach"](var_core_value_sigC97C => {
          const var_core_value_sigC4B1 = var_core_value_sigF963;
          let var_core_value_sig1BD9 = var_core_value_sigB608["get"](var_core_value_sigC97C);
          var_core_value_sig1BD9 && (var_core_value_sig534C[var_core_value_sigC4B1(0x162)][var_core_value_sig829F][var_core_value_sig4186][var_core_value_sigC97C] = var_core_value_sig1BD9);
        }));
      });
    }
    return var_core_value_sig534C;
  }
  ["fromJSON"](var_core_value_sigABB7) {
    let {
      dataFieldManagerConfig: var_core_value_sig9071,
      pivotTableConfigs: var_core_value_sig01A9
    } = var_core_value_sigABB7;
    var_core_value_sig9071 && Object[ox539da5(0x2a8)](var_core_value_sig9071)[ox539da5(0x231)](var_core_value_sig537C => {
      const var_core_value_sigBBBC = ox539da5;
      this["getDataFieldManager"](var_core_value_sig537C)[var_core_value_sigBBBC(0x329)](var_core_value_sig9071[var_core_value_sig537C]);
    });
    let var_core_value_sig9477 = [];
    if (var_core_value_sig01A9) {
      let {
          ls: var_core_value_sig5440,
          pbk: var_core_value_sigE28B
        } = this[ox539da5(0x483)][ox539da5(0x345)](t[ox539da5(0x174)])[ox539da5(0x3c0)](a[ox539da5(0x457)]) ?? {},
        var_core_value_sig0FD9 = Ee(0x1, var_core_value_sig5440, var_core_value_sigE28B)[ox539da5(0x466)];
      Object["keys"](var_core_value_sig01A9)["forEach"](var_core_value_sigF866 => {
        const var_core_value_sig5EFB = ox539da5;
        let var_core_value_sig3A85 = 0x0,
          var_core_value_sig2682 = var_core_value_sig01A9[var_core_value_sigF866];
        Object[var_core_value_sig5EFB(0x2a8)](var_core_value_sig2682)["forEach"](var_core_value_sigE43E => {
          let var_core_value_sigA937 = var_core_value_sig2682[var_core_value_sigE43E];
          Object["keys"](var_core_value_sigA937)["forEach"](var_core_value_sig8889 => {
            let var_core_value_sig32F8 = var_core_value_sigA937[var_core_value_sig8889];
            if (var_core_value_sig32F8) {
              if (var_core_value_sig3A85 >= var_core_value_sig0FD9) return;
              var_core_value_sig3A85++;
              let var_core_value_sigA12B = this[ox968893(0x430)](var_core_value_sigF866),
                var_core_value_sigF230 = var_core_value_sigA12B[ox968893(0x1b9)][var_core_value_sig8889],
                var_core_value_sig09B8 = var_core_value_sigF230["getFieldIds"](),
                var_core_value_sig6F91 = 0x0,
                var_core_value_sigF9C7 = [];
              for (let var_core_value_sig2BCF of var_core_value_sig09B8) {
                let var_core_value_sigBC46 = var_core_value_sigF230["getFieldById"](var_core_value_sig2BCF);
                if ((0x0, e[ox968893(0x2a6)])(var_core_value_sigBC46)) {
                  let var_core_value_sig2AD8 = var_core_value_sigBC46[ox968893(0x415)](),
                    var_core_value_sig2AD0 = var_core_value_sigF230["getFieldById"](var_core_value_sig2AD8);
                  var_core_value_sig2AD0 && var_core_value_sigF9C7[ox968893(0x19f)]([var_core_value_sigBC46, var_core_value_sig2AD0]);
                  continue;
                }
                var_core_value_sigA12B[ox968893(0x21b)](var_core_value_sig2BCF, var_core_value_sig32F8[ox968893(0x33d)], var_core_value_sig6F91), var_core_value_sig6F91++;
              }
              var_core_value_sigF9C7[ox968893(0x231)](([var_core_value_sig0D69, var_core_value_sig480E]) => {
                const var_core_value_sig26DB = ox968893;
                var var_core_value_sigF0F9;
                Ge((var_core_value_sigF0F9 = this["_univerInstanceService"][var_core_value_sig26DB(0x2a4)](var_core_value_sigF866, t["UniverInstanceType"]["UNIVER_SHEET"])) == null ? void 0x0 : var_core_value_sigF0F9["getDateSystem"]()), var_core_value_sig0D69[var_core_value_sig26DB(0x4b1)](var_core_value_sig480E);
              });
              let var_core_value_sig8895 = new e[ox968893(0x21f)](var_core_value_sigF230);
              var_core_value_sig8895["fromJSON"](var_core_value_sig32F8[ox968893(0x2a9)]), var_core_value_sig32F8["isEmpty"] = var_core_value_sig8895[ox968893(0x208)](), this[ox968893(0x357)](var_core_value_sigF866, var_core_value_sigE43E, var_core_value_sig8889, var_core_value_sig8895, var_core_value_sig32F8);
              let var_core_value_sigC80B = var_core_value_sig8895[ox968893(0x268)]();
              var_core_value_sig9477[ox968893(0x19f)]({
                unitId: var_core_value_sigF866,
                subUnitId: var_core_value_sigE43E,
                pivotTableId: var_core_value_sig8889,
                view: var_core_value_sigC80B[ox968893(0x1c6)](),
                pivotConfig: var_core_value_sig32F8,
                type: ox968893(0x3db)
              });
              let var_core_value_sig284F = var_core_value_sig32F8[ox968893(0x208)],
                var_core_value_sigE154 = {
                  view: var_core_value_sigC80B,
                  pivotTableId: var_core_value_sig8889,
                  textInfo: this["getTextInfo"](),
                  isEmpty: var_core_value_sig284F,
                  targetCellInfo: var_core_value_sig32F8[ox968893(0x376)]
                };
              this[ox968893(0x338)](var_core_value_sigE154, !0x1);
            }
          });
        });
      });
    }
    var_core_value_sig9071 && Object["keys"](var_core_value_sig9071)[ox539da5(0x231)](var_core_value_sig5649 => {
      const var_core_value_sigAF82 = ox539da5;
      let var_core_value_sig21A2 = this[var_core_value_sigAF82(0x430)](var_core_value_sig5649);
      this["_fieldsCollectionChange$"][var_core_value_sigAF82(0x37c)](var_core_value_sig21A2[var_core_value_sigAF82(0x1b9)]);
    }), this[ox539da5(0x1db)][ox539da5(0x323)](z["id"], {
      batch: var_core_value_sig9477,
      collectionConfig: var_core_value_sig9071
    }, {
      onlyLocal: !0x0
    });
  }
  ["_initSnapshot"]() {
    this[ox556d35(0x1e7)](this["_resourceManagerService"][ox556d35(0x2cd)]({
      toJson: var_core_value_sig5C1D => JSON[ox556d35(0x184)](this["toJSON"](var_core_value_sig5C1D)),
      parseJson: var_core_value_sig4CBA => {
        if (!var_core_value_sig4CBA) return {};
        try {
          return JSON["parse"](var_core_value_sig4CBA);
        } catch {
          return {};
        }
      },
      businesses: [t[ox556d35(0x2b3)][ox556d35(0x333)]],
      pluginName: _,
      onLoad: (var_core_value_sig8E65, var_core_value_sig772C) => {
        this["fromJSON"](var_core_value_sig772C);
      },
      onUnLoad: var_core_value_sigF309 => {
        const var_core_value_sig44F9 = ox556d35;
        this[var_core_value_sig44F9(0x470)](var_core_value_sigF309);
      }
    }));
  }
};
K = U([H(0x0, (0x0, t["Inject"])(t["Injector"])), H(0x1, t["IUniverInstanceService"]), H(0x2, (0x0, t["Inject"])(t["LifecycleService"])), H(0x3, t["ICommandService"]), H(0x4, (0x0, t["Inject"])(t["IResourceManagerService"]))], K);
const me = {
    0x0: {
      0x0: {
        v: "filter",
        s: S
      }
    },
    0x2: {
      0x1: {
        v: "",
        s: S
      },
      0x2: {
        v: "",
        s: S
      },
      0x3: {
        v: "column",
        s: S
      },
      0x4: {
        v: "",
        s: S
      },
      0x5: {
        v: "",
        s: S
      }
    },
    0x3: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x4: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x5: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x6: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x7: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x8: {
      0x0: {
        v: "row",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "values",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0x9: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0xa: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0xb: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0xc: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    },
    0xd: {
      0x0: {
        v: "",
        s: S
      },
      0x1: {
        v: "",
        s: C
      },
      0x2: {
        v: "",
        s: C
      },
      0x3: {
        v: "",
        s: C
      },
      0x4: {
        v: "",
        s: C
      },
      0x5: {
        v: "",
        s: C
      }
    }
  },
  he = {
    rowRanges: [{
      startRow: 0x3,
      endRow: 0xd,
      startColumn: 0x0,
      endColumn: 0x0
    }],
    colRanges: [{
      startRow: 0x2,
      endRow: 0x2,
      startColumn: 0x1,
      endColumn: 0x5
    }],
    dataRanges: [{
      startRow: 0x3,
      endRow: 0xd,
      startColumn: 0x1,
      endColumn: 0x5
    }],
    pageRanges: [{
      startRow: 0x0,
      endRow: 0x0,
      startColumn: 0x0,
      endColumn: 0x0
    }],
    cornerRanges: []
  },
  q = (var_core_value_sig080D, var_core_value_sigCDBC, var_core_value_sig0F75 = "ltr") => {
    let var_core_value_sig4B7F = new t[ox35ca34(0x38b)](),
      var_core_value_sig17D6 = new t[ox35ca34(0x38b)](me),
      {
        row: var_core_value_sig8915,
        col: var_core_value_sigC88F
      } = var_core_value_sigCDBC,
      var_core_value_sig1AFA = {
        startColumn: var_core_value_sigC88F,
        endColumn: var_core_value_sigC88F + 0x6 - 0x1,
        direction: var_core_value_sig0F75
      };
    var_core_value_sig17D6[ox35ca34(0x1e5)]((var_core_value_sig917C, var_core_value_sig27E2, var_core_value_sig10D7) => {
      const var_core_value_sig5A1A = ox35ca34;
      let var_core_value_sig77D2 = "";
      var_core_value_sig10D7["v"] === var_core_value_sig5A1A(0x43e) ? var_core_value_sig77D2 = var_core_value_sig080D["filter"] : var_core_value_sig10D7["v"] === var_core_value_sig5A1A(0x292) ? var_core_value_sig77D2 = var_core_value_sig080D[var_core_value_sig5A1A(0x292)] : var_core_value_sig10D7["v"] === var_core_value_sig5A1A(0x359) ? var_core_value_sig77D2 = var_core_value_sig080D[var_core_value_sig5A1A(0x359)] : var_core_value_sig10D7["v"] === var_core_value_sig5A1A(0x2b9) && (var_core_value_sig77D2 = var_core_value_sig080D["values"]);
      let var_core_value_sig625E = m(var_core_value_sig1AFA, var_core_value_sig27E2 + var_core_value_sigC88F);
      var_core_value_sig4B7F[var_core_value_sig5A1A(0x300)](var_core_value_sig917C + var_core_value_sig8915, var_core_value_sig625E, {
        ...var_core_value_sig10D7,
        v: var_core_value_sig77D2
      });
    });
    let var_core_value_sigBCF5 = t[ox35ca34(0x23b)][ox35ca34(0x196)](he);
    return Object[ox35ca34(0x2a8)](he)[ox35ca34(0x231)](var_core_value_sig6F04 => {
      const var_core_value_sig48DA = ox35ca34;
      var_core_value_sigBCF5[var_core_value_sig6F04] = he[var_core_value_sig6F04][var_core_value_sig48DA(0x15f)](var_core_value_sigE532 => h(var_core_value_sig1AFA, {
        ...var_core_value_sigE532,
        startRow: var_core_value_sigE532[var_core_value_sig48DA(0x3f1)] + var_core_value_sig8915,
        endRow: var_core_value_sigE532[var_core_value_sig48DA(0x150)] + var_core_value_sig8915,
        startColumn: var_core_value_sigE532[var_core_value_sig48DA(0x205)] + var_core_value_sigC88F,
        endColumn: var_core_value_sigE532[var_core_value_sig48DA(0x2bc)] + var_core_value_sigC88F
      }));
    }), {
      matrixCache: var_core_value_sig4B7F,
      rangesCache: var_core_value_sigBCF5
    };
  };
function ge(var_core_value_sig988A, var_core_value_sigFC02) {
  let var_core_value_sigF71C = "",
    var_core_value_sigE634 = this[ox2c9159(0x46a)]();
  switch (var_core_value_sigFC02) {
    case e[ox2c9159(0x3cd)][ox2c9159(0x478)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x432)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x466)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x141)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x1fc)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x1bc)];
      break;
    case e["PivotSubtotalTypeEnum"]["max"]:
      var_core_value_sigF71C = var_core_value_sigE634["sheets-pivot.maxName"];
      break;
    case e["PivotSubtotalTypeEnum"][ox2c9159(0x312)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x3fb)];
      break;
    case e["PivotSubtotalTypeEnum"]["product"]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x20b)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x25e)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x2ca)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x1e1)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x32e)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x169)]:
      var_core_value_sigF71C = var_core_value_sigE634["sheets-pivot.sumName"];
      break;
    case e[ox2c9159(0x3cd)]["var"]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x280)];
      break;
    case e[ox2c9159(0x3cd)][ox2c9159(0x221)]:
      var_core_value_sigF71C = var_core_value_sigE634[ox2c9159(0x392)];
      break;
    default:
      return var_core_value_sig988A;
  }
  return M(var_core_value_sigE634, ox2c9159(0x1d3), ox2c9159(0x22b), var_core_value_sigF71C, f(var_core_value_sig988A, var_core_value_sigF71C));
}
function _e(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2B0, var_core_value_sigD77A, var_core_value_sigF2C2) {
  let var_core_value_sig2990 = ve(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2B0, var_core_value_sigF2C2);
  if (!var_core_value_sig2990) return;
  let {
      area: var_core_value_sigD300,
      info: var_core_value_sig6F77,
      headerInfo: var_core_value_sigFA4B,
      data: var_core_value_sig2AB0,
      tableFieldId: var_core_value_sig853D
    } = var_core_value_sig2990,
    var_core_value_sigD1F0 = var_core_value_sig853D;
  if (var_core_value_sigD300 === ox553dc3(0x381)) {
    let var_core_value_sigD327 = var_core_value_sig2AB0 == null ? void 0x0 : var_core_value_sig2AB0["fi"];
    var_core_value_sigD327 !== void 0x0 && (var_core_value_sigD1F0 = var_core_value_sigD77A[ox553dc3(0x239)](var_core_value_sigD327));
  }
  return {
    filterId: var_core_value_sigD1F0,
    info: var_core_value_sig6F77,
    data: var_core_value_sig2AB0,
    headerInfo: var_core_value_sigFA4B
  };
}
function ve(var_core_value_sig3D4E, var_core_value_sig79C0, var_core_value_sig173D, var_core_value_sig6F1A) {
  let var_core_value_sig1802 = (0x0, t["cellToRange"])(var_core_value_sig3D4E, var_core_value_sig79C0),
    {
      rangesInfo: var_core_value_sigCFA7,
      areaInfo: var_core_value_sig31C2,
      headerMap: var_core_value_sigA677,
      projection: var_core_value_sigC015
    } = var_core_value_sig6F1A;
  if (!var_core_value_sigCFA7 || !var_core_value_sig31C2 || !var_core_value_sigA677) return;
  let var_core_value_sigAEBC,
    var_core_value_sig366A = Object[ox414d40(0x2a8)](var_core_value_sigCFA7)["find"](var_core_value_sig6694 => (var_core_value_sigAEBC = var_core_value_sigCFA7[var_core_value_sig6694][ox414d40(0x372)](var_core_value_sigF381 => t[ox414d40(0x3e8)][ox414d40(0x2e3)](var_core_value_sigF381, var_core_value_sig1802)), !!var_core_value_sigAEBC)),
    var_core_value_sigA89C = var_core_value_sig31C2[ox414d40(0x3a4)][var_core_value_sig3D4E],
    var_core_value_sigDD3E = var_core_value_sig31C2[ox414d40(0x1da)][var_core_value_sig79C0],
    var_core_value_sig182B,
    var_core_value_sig2A99;
  if (var_core_value_sig366A === "rowRanges") var_core_value_sig182B = var_core_value_sigA89C, var_core_value_sig2A99 = var_core_value_sigA677[ox414d40(0x2de)][var_core_value_sig79C0];else {
    if (var_core_value_sig366A === ox414d40(0x15e) && var_core_value_sigAEBC) {
      if (var_core_value_sig182B = var_core_value_sigDD3E, (var_core_value_sig173D == null ? void 0x0 : var_core_value_sig173D[ox414d40(0x424)]) === e[ox414d40(0x2e2)]["Collapse"] || (var_core_value_sig173D == null ? void 0x0 : var_core_value_sig173D[ox414d40(0x424)]) === e[ox414d40(0x2e2)][ox414d40(0x334)]) var_core_value_sig2A99 = var_core_value_sigA677[ox414d40(0x488)][var_core_value_sig3D4E];else {
        let var_core_value_sig4BB5 = var_core_value_sigC015 ? m(var_core_value_sigC015, var_core_value_sig79C0) : var_core_value_sig79C0,
          var_core_value_sig6709 = var_core_value_sigC015 ? Math["min"](m(var_core_value_sigC015, var_core_value_sigAEBC["startColumn"]), m(var_core_value_sigC015, var_core_value_sigAEBC[ox414d40(0x2bc)])) : var_core_value_sigAEBC[ox414d40(0x205)];
        var_core_value_sig2A99 = var_core_value_sigA677["colHeaderMap"][var_core_value_sig3D4E + 0x1 + var_core_value_sig4BB5 - var_core_value_sig6709];
      }
    } else var_core_value_sig366A === "cornerRanges" && (var_core_value_sig182B = var_core_value_sig31C2[ox414d40(0x3a9)][var_core_value_sig79C0]);
  }
  if (!var_core_value_sig366A) return;
  let var_core_value_sig18A6 = (var_core_value_sig173D == null ? void 0x0 : var_core_value_sig173D["pbt"]) === e["PivotCellStyleTypeEnum"]["Collapse"] || (var_core_value_sig173D == null ? void 0x0 : var_core_value_sig173D[ox414d40(0x424)]) === e[ox414d40(0x2e2)][ox414d40(0x334)] ? (var_core_value_sig2A99 == null ? void 0x0 : var_core_value_sig2A99[ox414d40(0x30c)]) ?? (var_core_value_sig182B == null ? void 0x0 : var_core_value_sig182B[ox414d40(0x30c)]) : (var_core_value_sig182B == null ? void 0x0 : var_core_value_sig182B["tableFieldId"]) ?? (var_core_value_sig2A99 == null ? void 0x0 : var_core_value_sig2A99["tableFieldId"]);
  return {
    area: var_core_value_sig366A,
    info: var_core_value_sig182B,
    rowInfo: var_core_value_sigA89C,
    columnInfo: var_core_value_sigDD3E,
    data: var_core_value_sig173D,
    headerInfo: var_core_value_sig2A99,
    tableFieldId: var_core_value_sig18A6
  };
}
function ye(var_core_value_sigA98B, var_core_value_sig458C) {
  var var_core_value_sig8DEC, var_core_value_sig522F, var_core_value_sigD718, var_core_value_sig41CF;
  if (var_core_value_sig458C[ox847a4a(0x2b6)] === 0x0) return;
  let var_core_value_sig1EFD = var_core_value_sig2A21 => Number[ox847a4a(0x1ca)](var_core_value_sig2A21) && var_core_value_sig2A21 >= 0x0 ? var_core_value_sig458C[var_core_value_sig2A21] : void 0x0,
    var_core_value_sig38BB = ((var_core_value_sig8DEC = var_core_value_sigA98B["rowInfo"]) == null ? void 0x0 : var_core_value_sig8DEC[ox847a4a(0x3bd)]) ?? -0x1,
    var_core_value_sig017C = ((var_core_value_sig522F = var_core_value_sigA98B[ox847a4a(0x290)]) == null ? void 0x0 : var_core_value_sig522F[ox847a4a(0x3bd)]) ?? -0x1,
    var_core_value_sig44BC = Number["isInteger"](var_core_value_sig38BB) && var_core_value_sig38BB >= -0x1 && Number[ox847a4a(0x1ca)](var_core_value_sig017C) && var_core_value_sig017C >= -0x1;
  if (var_core_value_sigA98B["area"] === ox847a4a(0x355)) {
    if (!var_core_value_sigA98B["rowInfo"] || !var_core_value_sigA98B["columnInfo"] || !var_core_value_sig44BC) return;
    let var_core_value_sig0836 = Math[ox847a4a(0x13b)](var_core_value_sig38BB, var_core_value_sig017C);
    return var_core_value_sig0836 === -0x1 && var_core_value_sig458C["length"] === 0x1 ? var_core_value_sig458C[0x0] : var_core_value_sig1EFD(var_core_value_sig0836);
  }
  if (var_core_value_sigA98B[ox847a4a(0x29d)] !== ox847a4a(0x44a) && var_core_value_sigA98B["area"] !== "colRanges") return;
  if (var_core_value_sigA98B[ox847a4a(0x30c)] && var_core_value_sig458C[ox847a4a(0x238)](var_core_value_sigA98B[ox847a4a(0x30c)])) return var_core_value_sigA98B["tableFieldId"];
  if (!((var_core_value_sigD718 = var_core_value_sigA98B[ox847a4a(0x1e3)]) != null && var_core_value_sigD718[ox847a4a(0x47a)]) && !((var_core_value_sig41CF = var_core_value_sigA98B[ox847a4a(0x156)]) != null && var_core_value_sig41CF[ox847a4a(0x47a)]) || !var_core_value_sig44BC) return;
  let var_core_value_sigAB7B = Math[ox847a4a(0x13b)](var_core_value_sig38BB, var_core_value_sig017C);
  return var_core_value_sigAB7B === -0x1 && var_core_value_sig458C[ox847a4a(0x2b6)] === 0x1 ? var_core_value_sig458C[0x0] : var_core_value_sig1EFD(var_core_value_sigAB7B);
}
function be(var_core_value_sig55EE, var_core_value_sigE9F6) {
  var var_core_value_sig3BA9, var_core_value_sigE230;
  let var_core_value_sig5AC8 = var_core_value_sig55EE["tableFieldId"],
    var_core_value_sigE492,
    var_core_value_sig3465;
  if (var_core_value_sig55EE[ox471389(0x29d)] === ox471389(0x44a)) var_core_value_sigE492 = e[ox471389(0x200)][ox471389(0x289)], var_core_value_sig3465 = var_core_value_sigE9F6[ox471389(0x39f)];else {
    if (var_core_value_sig55EE[ox471389(0x29d)] === ox471389(0x15e)) var_core_value_sigE492 = e["PivotTableFiledAreaEnum"]["Column"], var_core_value_sig3465 = var_core_value_sigE9F6[ox471389(0x1de)];else {
      if (var_core_value_sig55EE[ox471389(0x29d)] === ox471389(0x33c) && var_core_value_sig5AC8) {
        let var_core_value_sig52CA = var_core_value_sigE9F6[ox471389(0x39f)][ox471389(0x238)](var_core_value_sig5AC8);
        if (var_core_value_sig52CA === var_core_value_sigE9F6[ox471389(0x1de)][ox471389(0x238)](var_core_value_sig5AC8)) return;
        var_core_value_sigE492 = var_core_value_sig52CA ? e[ox471389(0x200)][ox471389(0x289)] : e[ox471389(0x200)][ox471389(0x374)], var_core_value_sig3465 = var_core_value_sig52CA ? var_core_value_sigE9F6[ox471389(0x39f)] : var_core_value_sigE9F6["columnFields"];
      } else return;
    }
  }
  let var_core_value_sig38DD = var_core_value_sig55EE[ox471389(0x1e3)];
  if ((var_core_value_sig38DD == null ? void 0x0 : var_core_value_sig38DD["rowType"]) === ox471389(0x421) || (var_core_value_sig38DD == null ? void 0x0 : var_core_value_sig38DD[ox471389(0x35f)]) === ox471389(0x388) || var_core_value_sig38DD != null && var_core_value_sig38DD[ox471389(0x47a)] || (var_core_value_sig3BA9 = var_core_value_sig55EE["headerInfo"]) != null && var_core_value_sig3BA9[ox471389(0x47a)] || !var_core_value_sig5AC8 || !var_core_value_sig3465["includes"](var_core_value_sig5AC8) || !var_core_value_sigE9F6[ox471389(0x230)][var_core_value_sig5AC8]) return;
  let var_core_value_sig89AE = var_core_value_sigE9F6[ox471389(0x185)][ox471389(0x43e)](var_core_value_sigD95C => !!var_core_value_sigE9F6["measure"][var_core_value_sigD95C]),
    var_core_value_sig3A69 = (var_core_value_sigE230 = var_core_value_sigE9F6[ox471389(0x36a)]) == null || (var_core_value_sigE230 = var_core_value_sigE230[ox471389(0x372)](var_core_value_sig692E => var_core_value_sig692E["fieldId"] === var_core_value_sig5AC8)) == null ? void 0x0 : var_core_value_sigE230[ox471389(0x49c)][ox471389(0x171)],
    var_core_value_sigD64C = var_core_value_sig3A69 && var_core_value_sig89AE[ox471389(0x238)](var_core_value_sig3A69) ? var_core_value_sig3A69 : var_core_value_sig89AE[ox471389(0x2b6)] === 0x1 ? var_core_value_sig89AE[0x0] : void 0x0;
  return {
    axis: var_core_value_sigE492,
    targetFieldId: var_core_value_sig5AC8,
    ...(var_core_value_sigD64C ? {
      defaultValueFieldId: var_core_value_sigD64C
    } : {})
  };
}
function xe(var_core_value_sig3B0B, var_core_value_sig1E7C, var_core_value_sigD3C4) {
  let var_core_value_sigBC8B = var_core_value_sig3B0B["dataFieldsCollection"],
    var_core_value_sigEE2E = var_core_value_sigBC8B["getFieldIds"](),
    var_core_value_sigCF06 = new Set();
  var_core_value_sig3B0B["iterateField"](var_core_value_sig3FAF1 => {
    var_core_value_sigCF06["add"](var_core_value_sig3FAF1[ox4a0633(0x1cb)]);
  });
  let var_core_value_sig6BCD = var_core_value_sigEE2E["map"](var_core_value_sig378B => {
      let var_core_value_sigDE50 = var_core_value_sigBC8B[ox53f541(0x1f8)](var_core_value_sig378B);
      return {
        checked: var_core_value_sigCF06[ox53f541(0x442)](var_core_value_sig378B),
        dataFieldId: var_core_value_sigDE50["id"],
        id: var_core_value_sigDE50["id"],
        name: var_core_value_sigBC8B["getDisplayName"](var_core_value_sigDE50["id"]),
        type: var_core_value_sigDE50[ox53f541(0x4c2)](),
        pivotTableId: var_core_value_sig1E7C
      };
    }),
    var_core_value_sigC664 = [];
  var_core_value_sig3B0B[ox433b0c(0x46e)](e[ox433b0c(0x200)][ox433b0c(0x289)], var_core_value_sig3094 => {
    const var_core_value_sig86CC = ox433b0c;
    var_core_value_sigC664[var_core_value_sig86CC(0x19f)]({
      dataFieldId: var_core_value_sig3094["dataFieldId"],
      tableFieldId: var_core_value_sig3094[var_core_value_sig86CC(0x1b6)](),
      displayName: var_core_value_sig3094[var_core_value_sig86CC(0x340)]()
    });
  });
  let var_core_value_sig1B7B = [];
  var_core_value_sig3B0B[ox433b0c(0x46e)](e[ox433b0c(0x200)][ox433b0c(0x374)], var_core_value_sig7868 => {
    const var_core_value_sig9921 = ox433b0c;
    var_core_value_sig1B7B[var_core_value_sig9921(0x19f)]({
      dataFieldId: var_core_value_sig7868[var_core_value_sig9921(0x1cb)],
      tableFieldId: var_core_value_sig7868[var_core_value_sig9921(0x1b6)](),
      displayName: var_core_value_sig7868["getDisplayName"]()
    });
  });
  let var_core_value_sig1F31 = [];
  if (var_core_value_sig3B0B[ox433b0c(0x46e)](e[ox433b0c(0x200)][ox433b0c(0x1df)], var_core_value_sig59BF => {
    const var_core_value_sigF001 = ox433b0c;
    var_core_value_sig1F31[var_core_value_sigF001(0x19f)]({
      dataFieldId: var_core_value_sig59BF["dataFieldId"],
      tableFieldId: var_core_value_sig59BF[var_core_value_sigF001(0x1b6)](),
      displayName: var_core_value_sig59BF[var_core_value_sigF001(0x340)](),
      format: var_core_value_sig59BF[var_core_value_sigF001(0x252)](),
      subTotalType: var_core_value_sig59BF[var_core_value_sigF001(0x455)](),
      showDataAs: var_core_value_sig59BF["getShowDataAs"]()
    });
  }), var_core_value_sig1F31[ox433b0c(0x2b6)] > 0x1) {
    let var_core_value_sigE511 = var_core_value_sig3B0B[ox433b0c(0x3d8)]();
    (var_core_value_sig3B0B["isColMultiMeasure"]() ? var_core_value_sig1B7B : var_core_value_sigC664)[ox433b0c(0x3f6)](var_core_value_sigE511, 0x0, {
      dataFieldId: "",
      tableFieldId: ox433b0c(0x43c),
      displayName: ox433b0c(0x20c)
    });
  }
  let var_core_value_sigEA82 = [];
  return var_core_value_sig3B0B[ox433b0c(0x46e)](e["PivotTableFiledAreaEnum"][ox433b0c(0x3e1)], var_core_value_sig1C81 => {
    const var_core_value_sig2C6A = ox433b0c;
    var_core_value_sigEA82[var_core_value_sig2C6A(0x19f)]({
      dataFieldId: var_core_value_sig1C81[var_core_value_sig2C6A(0x1cb)],
      tableFieldId: var_core_value_sig1C81[var_core_value_sig2C6A(0x1b6)](),
      displayName: var_core_value_sig1C81["getDisplayName"]()
    });
  }), {
    sourceList: var_core_value_sig6BCD,
    sourceRange: var_core_value_sigD3C4[ox433b0c(0x33d)],
    rowFields: var_core_value_sigC664,
    columnFields: var_core_value_sig1B7B,
    valueFields: var_core_value_sig1F31,
    filterFields: var_core_value_sigEA82,
    positionInfo: var_core_value_sigD3C4["targetCellInfo"]
  };
}
function Se(var_core_value_sig65BB, var_core_value_sig69B1, var_core_value_sigAEDE = "", var_core_value_sig139C = {}) {
  let var_core_value_sigF2D6 = var_core_value_sig65BB[ox2be89c(0x345)](t[ox2be89c(0x1b3)]);
  for (let var_core_value_sig7207 in var_core_value_sig69B1) if (Object[ox2be89c(0x262)][ox2be89c(0x291)][ox2be89c(0x390)](var_core_value_sig69B1, var_core_value_sig7207)) {
    let var_core_value_sigCB92 = var_core_value_sigAEDE ? var_core_value_sigAEDE + "." + var_core_value_sig7207 : var_core_value_sig7207;
    typeof var_core_value_sig69B1[var_core_value_sig7207] == ox2be89c(0x153) && var_core_value_sig69B1[var_core_value_sig7207] !== null && !Array["isArray"](var_core_value_sig69B1[var_core_value_sig7207]) ? Se(var_core_value_sig65BB, var_core_value_sig69B1[var_core_value_sig7207], var_core_value_sigCB92, var_core_value_sig139C) : var_core_value_sig139C[var_core_value_sigCB92] = var_core_value_sigF2D6["t"](var_core_value_sigCB92);
  }
  return var_core_value_sig139C;
}
const Ce = var_core_value_sig810E => {
  if (!var_core_value_sig810E) return [];
  let {
      rowRanges: var_core_value_sigABB1,
      colRanges: var_core_value_sig3F70,
      cornerRanges: var_core_value_sig9F91,
      dataRanges: var_core_value_sigC9C8,
      pageRanges: var_core_value_sigC444
    } = var_core_value_sig810E,
    var_core_value_sig4B40 = [...var_core_value_sig3F70, ...var_core_value_sigABB1, ...var_core_value_sigC9C8, ...var_core_value_sig9F91]["filter"](var_core_value_sig297F => var_core_value_sig297F["startRow"] >= 0x0 && var_core_value_sig297F["startColumn"] >= 0x0 && var_core_value_sig297F[ox58973f(0x150)] >= 0x0 && var_core_value_sig297F[ox58973f(0x2bc)] >= 0x0);
  if (var_core_value_sig4B40[ox58973f(0x2b6)] === 0x0) return [...var_core_value_sigC444];
  let var_core_value_sig9F6D = var_core_value_sig4B40[0x0][ox58973f(0x3f1)],
    var_core_value_sigE1A2 = var_core_value_sig4B40[0x0]["endRow"],
    var_core_value_sig4767 = var_core_value_sig4B40[0x0][ox58973f(0x205)],
    var_core_value_sig2591 = var_core_value_sig4B40[0x0][ox58973f(0x2bc)];
  for (let var_core_value_sigA95A = 0x1; var_core_value_sigA95A < var_core_value_sig4B40["length"]; var_core_value_sigA95A++) var_core_value_sig9F6D = Math[ox58973f(0x312)](var_core_value_sig9F6D, var_core_value_sig4B40[var_core_value_sigA95A][ox58973f(0x3f1)]), var_core_value_sigE1A2 = Math[ox58973f(0x13b)](var_core_value_sigE1A2, var_core_value_sig4B40[var_core_value_sigA95A]["endRow"]), var_core_value_sig4767 = Math[ox58973f(0x312)](var_core_value_sig4767, var_core_value_sig4B40[var_core_value_sigA95A][ox58973f(0x205)]), var_core_value_sig2591 = Math["max"](var_core_value_sig2591, var_core_value_sig4B40[var_core_value_sigA95A][ox58973f(0x2bc)]);
  return [...var_core_value_sigC444, {
    startRow: var_core_value_sig9F6D,
    endRow: var_core_value_sigE1A2,
    startColumn: var_core_value_sig4767,
    endColumn: var_core_value_sig2591
  }];
};
function we(var_core_value_sig7C12, var_core_value_sig8EC51) {
  let var_core_value_sig4B1B = var_core_value_sig8EC51[ox5767b1(0x43b)]["drillDown"],
    {
      pivotTableId: var_core_value_sig14C3,
      unitId: var_core_value_sig95A8,
      subUnitId: var_core_value_sig3F90
    } = var_core_value_sig8EC51;
  if (!var_core_value_sig4B1B) return;
  let var_core_value_sigB489 = var_core_value_sig7C12[ox5767b1(0x345)](K),
    var_core_value_sig76E7 = var_core_value_sigB489[ox5767b1(0x2fb)](var_core_value_sig14C3),
    var_core_value_sig7E7F = var_core_value_sigB489[ox5767b1(0x2e6)](var_core_value_sig95A8, var_core_value_sig3F90, var_core_value_sig14C3);
  if (!var_core_value_sig76E7 || !var_core_value_sig7E7F) return;
  let var_core_value_sig7947 = var_core_value_sig76E7[ox5767b1(0x493)](var_core_value_sig4B1B[ox5767b1(0x445)]);
  if (!(var_core_value_sig7947 != null && var_core_value_sig7947[ox5767b1(0x2b6)])) return;
  let {
      unitId: var_core_value_sig7FEC,
      subUnitId: var_core_value_sig73D2,
      range: var_core_value_sig6BDA
    } = var_core_value_sig7E7F["sourceRangeInfo"],
    var_core_value_sig3A251 = 0x0;
  return {
    indexes: var_core_value_sig7947,
    range: var_core_value_sig6BDA,
    sourceUnitId: var_core_value_sig7FEC,
    sourceSubUnitId: var_core_value_sig73D2,
    formatMap: var_core_value_sig76E7[ox5767b1(0x2c5)][ox5767b1(0x296)]()["reduce"]((var_core_value_sig94D6, var_core_value_sigC22E) => {
      const var_core_value_sig2321 = ox5767b1;
      var var_core_value_sigFF33;
      let var_core_value_sig16E0 = (var_core_value_sigFF33 = var_core_value_sig76E7["getDataFieldByDataFieldId"](var_core_value_sigC22E)) == null ? void 0x0 : var_core_value_sigFF33[var_core_value_sig2321(0x487)]();
      return var_core_value_sig16E0 && (var_core_value_sig94D6[String(var_core_value_sig3A251)] = var_core_value_sig16E0), var_core_value_sig3A251++, var_core_value_sig94D6;
    }, {})
  };
}
function Te(var_core_value_sigCBAA, var_core_value_sigC096) {
  if (!var_core_value_sigCBAA || !var_core_value_sigC096) return !0x0;
  let var_core_value_sig6140 = (0x0, a[ox24f464(0x351)])(var_core_value_sigCBAA, var_core_value_sigC096)["message"],
    var_core_value_sigDD84 = (0x0, a[ox24f464(0x4b9)])(var_core_value_sig6140, "sf", g);
  return !((var_core_value_sig6140 == null ? void 0x0 : var_core_value_sig6140["rt"]) === a["ReleaseType"][ox24f464(0x1bd)] && !var_core_value_sigDD84);
}
function Ee(var_core_value_sig7BA5, var_core_value_sig543F, var_core_value_sigBF30) {
  let var_core_value_sigAA0E = {
    count: var_core_value_sig7BA5,
    timeValid: !0x1
  };
  if (!var_core_value_sig543F || !var_core_value_sigBF30) return var_core_value_sigAA0E;
  let var_core_value_sig3747 = (0x0, a[ox88092d(0x351)])(var_core_value_sig543F, var_core_value_sigBF30);
  if (var_core_value_sig3747 != null && var_core_value_sig3747[ox88092d(0x236)]) {
    let var_core_value_sig213C = var_core_value_sig3747[ox88092d(0x2f1)],
      var_core_value_sig31F8 = (0x0, a[ox88092d(0x4b9)])(var_core_value_sig213C, "sf", g);
    return {
      count: (0x0, a[ox88092d(0x1f2)])(var_core_value_sig213C, var_core_value_sig31F8, "ptn", var_core_value_sig7BA5, var_core_value_sig7BA5, 0x0),
      timeValid: var_core_value_sig31F8
    };
  }
  return var_core_value_sigAA0E;
}
function De(var_core_value_sig9B6A, var_core_value_sig7BFA, var_core_value_sig09FA, var_core_value_sig6881) {
  let var_core_value_sigAB94 = {
      subUnitId: var_core_value_sig09FA,
      unitId: var_core_value_sig7BFA,
      cellValue: (0x0, r[oxac276(0x255)])(var_core_value_sig6881)
    },
    var_core_value_sigEE05 = (0x0, r[oxac276(0x436)])(var_core_value_sig9B6A, var_core_value_sigAB94),
    var_core_value_sig0F0E = !0x1;
  return new t[oxac276(0x38b)](var_core_value_sigEE05[oxac276(0x1e4)])[oxac276(0x1e5)]((var_core_value_sig6905, var_core_value_sigC3C0, var_core_value_sig1F39) => {
    const var_core_value_sig9256 = oxac276;
    if (!var_core_value_sig0F0E && var_core_value_sig1F39 && (var_core_value_sig1F39[var_core_value_sig9256(0x13c)] || var_core_value_sig1F39["f"] || var_core_value_sig1F39["p"] || var_core_value_sig1F39["s"] || var_core_value_sig1F39["si"] || var_core_value_sig1F39["t"] || var_core_value_sig1F39["v"])) return var_core_value_sig0F0E = !0x0, !0x1;
  }), {
    setRangeValueUndoMutation: {
      id: r[oxac276(0x3e6)]["id"],
      params: var_core_value_sigEE05
    },
    setRangeValueRedoMutation: {
      id: r[oxac276(0x3e6)]["id"],
      params: var_core_value_sigAB94
    },
    shouldClear: var_core_value_sig0F0E
  };
}
function Oe(var_core_value_sig3A40, var_core_value_sig2377 = "ltr") {
  let {
      row: var_core_value_sig4EEF,
      col: var_core_value_sigC58E
    } = var_core_value_sig3A40,
    var_core_value_sig9063 = var_core_value_sigC58E + 0x6 - 0x1;
  return [{
    startRow: var_core_value_sig4EEF,
    endRow: var_core_value_sig4EEF,
    startColumn: var_core_value_sig2377 === ox452644(0x30b) ? var_core_value_sig9063 : var_core_value_sigC58E,
    endColumn: var_core_value_sig2377 === ox452644(0x30b) ? var_core_value_sig9063 : var_core_value_sigC58E
  }, {
    startRow: var_core_value_sig4EEF + 0x2,
    endRow: var_core_value_sig4EEF + 0xe - 0x1,
    startColumn: var_core_value_sigC58E,
    endColumn: var_core_value_sig9063
  }];
}
function ke(var_core_value_sig99CE, var_core_value_sigFB15, var_core_value_sig9AF5, var_core_value_sigCD2E) {
  if (var_core_value_sig9AF5) return Oe(var_core_value_sig99CE, var_core_value_sigCD2E);
  let {
      pageView: var_core_value_sig60CE,
      cornerView: var_core_value_sigFA1B,
      rowView: var_core_value_sig5FEF,
      colView: var_core_value_sigD48C,
      dataView: var_core_value_sig41E9
    } = var_core_value_sigFB15,
    var_core_value_sig3807 = F(var_core_value_sig99CE, var_core_value_sig60CE, !0x0),
    var_core_value_sig5409 = var_core_value_sig60CE[ox50e9a5(0x15d)] >= 0x0 ? var_core_value_sig60CE["lastRow"] + 0x1 : 0x0,
    var_core_value_sig680F = var_core_value_sigFA1B["rowCount"],
    var_core_value_sig2E36 = var_core_value_sigFA1B[ox50e9a5(0x471)],
    var_core_value_sigBA94 = +(var_core_value_sig3807[ox50e9a5(0x2b6)] > 0x0),
    var_core_value_sigA847 = F({
      row: var_core_value_sig99CE[ox50e9a5(0x292)] + var_core_value_sig5409 + var_core_value_sigBA94,
      col: var_core_value_sig99CE[ox50e9a5(0x1a4)]
    }, var_core_value_sigFA1B, !0x1, !0x1),
    var_core_value_sig1AB4 = F({
      row: var_core_value_sig99CE[ox50e9a5(0x292)] + var_core_value_sig5409 + var_core_value_sigBA94 + var_core_value_sig680F,
      col: var_core_value_sig99CE[ox50e9a5(0x1a4)]
    }, var_core_value_sig5FEF, !0x1, !0x0),
    var_core_value_sig7272 = F({
      row: var_core_value_sig99CE[ox50e9a5(0x292)] + var_core_value_sig5409 + var_core_value_sigBA94,
      col: var_core_value_sig99CE[ox50e9a5(0x1a4)] + var_core_value_sig2E36
    }, var_core_value_sigD48C, !0x1, !0x0),
    var_core_value_sig885F = F({
      row: var_core_value_sig99CE[ox50e9a5(0x292)] + var_core_value_sig5409 + var_core_value_sigBA94 + var_core_value_sig680F,
      col: var_core_value_sig99CE[ox50e9a5(0x1a4)] + var_core_value_sig2E36
    }, var_core_value_sig41E9, !0x1, !0x0),
    var_core_value_sigB7C7 = p(var_core_value_sigFB15, var_core_value_sig99CE[ox50e9a5(0x1a4)], var_core_value_sigCD2E);
  return [...var_core_value_sig3807, ...var_core_value_sigA847, ...var_core_value_sig1AB4, ...var_core_value_sig7272, ...var_core_value_sig885F][ox50e9a5(0x15f)](var_core_value_sig98A0 => h(var_core_value_sigB7C7, var_core_value_sig98A0));
}
function Ae(var_core_value_sig6934, var_core_value_sig2842, var_core_value_sigA5A3) {
  let {
      cornerView: var_core_value_sig590F,
      rowView: var_core_value_sigECA2,
      colView: var_core_value_sigCAC4,
      pageView: var_core_value_sig2017
    } = var_core_value_sig6934,
    {
      row: var_core_value_sig49A4,
      col: var_core_value_sigA166
    } = var_core_value_sig2842;
  if (var_core_value_sigA5A3) return {
    rowCount: 0xe + var_core_value_sig49A4,
    colCount: 0x6 + var_core_value_sigA166
  };
  let var_core_value_sigEB84 = var_core_value_sig2017[ox511ab3(0x15d)] > -0x1 ? var_core_value_sig2017["lastRow"] + 0x1 : 0x0,
    var_core_value_sig3B17 = var_core_value_sig2017[ox511ab3(0x36b)] > -0x1 ? var_core_value_sig2017[ox511ab3(0x36b)] : 0x0,
    var_core_value_sig78681 = var_core_value_sig49A4 + var_core_value_sigEB84 + +!!var_core_value_sigEB84 + var_core_value_sig590F[ox511ab3(0x371)] + var_core_value_sigECA2[ox511ab3(0x371)],
    var_core_value_sig9AFE = var_core_value_sigA166 + var_core_value_sig3B17,
    var_core_value_sig244E = var_core_value_sigA166 + var_core_value_sig590F[ox511ab3(0x471)] + var_core_value_sigCAC4[ox511ab3(0x471)];
  return {
    rowCount: var_core_value_sig78681,
    colCount: Math[ox511ab3(0x13b)](var_core_value_sig9AFE, var_core_value_sig244E)
  };
}
function J(var_core_value_sigD4E9, var_core_value_sig969F, var_core_value_sig6C52, var_core_value_sig3A44) {
  let {
      row: var_core_value_sig9631,
      col: var_core_value_sig8407,
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0
    } = var_core_value_sig6C52,
    var_core_value_sig1E28 = Ae(var_core_value_sig969F, {
      row: var_core_value_sig9631,
      col: var_core_value_sig8407
    }, var_core_value_sig3A44),
    var_core_value_sigEEC3 = (0x0, r[ox262586(0x1b5)])(var_core_value_sigD4E9["get"](t[ox262586(0x1ba)]), {
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0
    }),
    var_core_value_sigFAEC = [],
    var_core_value_sig1282 = [];
  if (!var_core_value_sigEEC3) return {
    undos: var_core_value_sig1282,
    redos: var_core_value_sigFAEC
  };
  let {
      worksheet: var_core_value_sig80D0
    } = var_core_value_sigEEC3,
    var_core_value_sig6CEE = var_core_value_sig80D0["getRowCount"](),
    var_core_value_sig4B271 = var_core_value_sig80D0[ox262586(0x13e)]();
  return var_core_value_sig6CEE < var_core_value_sig1E28[ox262586(0x371)] && (var_core_value_sigFAEC[ox262586(0x19f)]({
    id: r[ox262586(0x2ff)]["id"],
    params: {
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0,
      range: {
        startRow: var_core_value_sig6CEE,
        endRow: var_core_value_sig1E28[ox262586(0x371)] - 0x1,
        startColumn: 0x0,
        endColumn: var_core_value_sig4B271 - 0x1
      }
    }
  }), var_core_value_sig1282[ox262586(0x19f)]({
    id: r[ox262586(0x28b)]["id"],
    params: {
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0,
      range: {
        startRow: var_core_value_sig6CEE,
        endRow: var_core_value_sig1E28[ox262586(0x371)] - 0x1,
        startColumn: 0x0,
        endColumn: var_core_value_sig4B271 - 0x1
      }
    }
  })), var_core_value_sig4B271 < var_core_value_sig1E28[ox262586(0x471)] && (var_core_value_sigFAEC[ox262586(0x19f)]({
    id: r[ox262586(0x207)]["id"],
    params: {
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0,
      range: {
        startRow: 0x0,
        endRow: var_core_value_sig6CEE - 0x1,
        startColumn: var_core_value_sig4B271,
        endColumn: var_core_value_sig1E28[ox262586(0x471)] - 0x1
      }
    }
  }), var_core_value_sig1282[ox262586(0x19f)]({
    id: r[ox262586(0x339)]["id"],
    params: {
      unitId: var_core_value_sig635F,
      subUnitId: var_core_value_sig79E0,
      range: {
        startRow: 0x0,
        endRow: var_core_value_sig6CEE - 0x1,
        startColumn: var_core_value_sig4B271,
        endColumn: var_core_value_sig1E28[ox262586(0x471)] - 0x1
      }
    }
  })), {
    undos: var_core_value_sig1282,
    redos: var_core_value_sigFAEC
  };
}
function je(var_core_value_sig153F) {
  let var_core_value_sigC847 = 0x0;
  for (let var_core_value_sig3EBD of var_core_value_sig153F) o[ox2a2f15(0x142)][ox2a2f15(0x1b1)](var_core_value_sig3EBD) ? var_core_value_sigC847 += 0x2 : var_core_value_sigC847 += 0x1;
  return var_core_value_sigC847;
}
const Me = new Set([e["PivotCellStyleTypeEnum"]["FilterAll"], e["PivotCellStyleTypeEnum"]["FilterPartial"], e["PivotCellStyleTypeEnum"]["FilterSingle"], e["PivotCellStyleTypeEnum"]["FilteredSortNone"], e["PivotCellStyleTypeEnum"]["FilteredSortAsc"], e["PivotCellStyleTypeEnum"]["FilteredSortDesc"], e["PivotCellStyleTypeEnum"]["FilterNoneSortNone"], e["PivotCellStyleTypeEnum"]["FilterNoneSortAsc"], e["PivotCellStyleTypeEnum"]["FilterNoneSortDesc"], e["PivotCellStyleTypeEnum"]["Collapse"], e["PivotCellStyleTypeEnum"]["Expand"]]);
function Ne(var_core_value_sig114E) {
  if (var_core_value_sig114E <= 0x20) return Array["from"]({
    length: var_core_value_sig114E
  }, (var_core_value_sig1AC3, var_core_value_sig66B8) => var_core_value_sig66B8);
  let var_core_value_sig88EA = new Set();
  for (let var_core_value_sig4C7F = 0x0; var_core_value_sig4C7F < 0x20; var_core_value_sig4C7F++) var_core_value_sig88EA[ox5f36d9(0x3db)](Math[ox5f36d9(0x1d6)](var_core_value_sig4C7F * (var_core_value_sig114E - 0x1) / 0x1f));
  return Array[ox5f36d9(0x144)](var_core_value_sig88EA);
}
function Pe(var_core_value_sig4E97) {
  let var_core_value_sigBE44 = P(var_core_value_sig4E97);
  return typeof var_core_value_sigBE44 == "string" || typeof var_core_value_sigBE44 == "number" ? String(var_core_value_sigBE44) : void 0x0;
}
function Fe(var_core_value_sigE675, var_core_value_sig4346, var_core_value_sigB49C, var_core_value_sigA044, var_core_value_sigD2F3) {
  var_core_value_sig4346[ox27ffb2(0x3db)](var_core_value_sigB49C);
  let var_core_value_sig27CD = Pe(var_core_value_sigA044);
  if (!var_core_value_sig27CD) return;
  let var_core_value_sig8977 = var_core_value_sigD2F3 && Me[ox27ffb2(0x442)](var_core_value_sigD2F3) ? 0x10 : 0x0,
    var_core_value_sigE931 = {
      text: var_core_value_sig27CD,
      buttonOffset: var_core_value_sig8977,
      score: je(var_core_value_sig27CD) * 0x8 + var_core_value_sig8977
    },
    var_core_value_sig9F9C = var_core_value_sigE675[var_core_value_sigB49C];
  var_core_value_sig9F9C[ox27ffb2(0x22a)](var_core_value_sig2543 => var_core_value_sig2543[ox27ffb2(0x21d)] === var_core_value_sig27CD && var_core_value_sig2543["buttonOffset"] === var_core_value_sig8977) >= 0x0 || (var_core_value_sig9F9C[ox27ffb2(0x19f)](var_core_value_sigE931), var_core_value_sig9F9C[ox27ffb2(0x1e6)]((var_core_value_sigB230, var_core_value_sig407E) => var_core_value_sig407E[ox27ffb2(0x188)] - var_core_value_sigB230[ox27ffb2(0x188)]), var_core_value_sig9F9C[ox27ffb2(0x2b6)] > 0x4 && (var_core_value_sig9F9C[ox27ffb2(0x2b6)] = 0x4));
}
function Ie(var_core_value_sig0728, var_core_value_sigDC83, var_core_value_sig56A8) {
  let {
    pageView: var_core_value_sigF487,
    cornerView: var_core_value_sigC62E,
    rowView: var_core_value_sigCD50
  } = var_core_value_sig0728;
  Object["keys"](var_core_value_sigF487[ox4c05a4(0x16a)])[ox4c05a4(0x231)](var_core_value_sig88CB => {
    const var_core_value_sigD615 = ox4c05a4;
    let var_core_value_sigB708 = Number(var_core_value_sig88CB);
    Object[var_core_value_sigD615(0x2a8)](var_core_value_sigF487[var_core_value_sigD615(0x16a)][var_core_value_sigB708])[var_core_value_sigD615(0x231)](var_core_value_sigC844 => {
      const var_core_value_sig2ED4 = var_core_value_sigD615;
      let var_core_value_sig0477 = Number(var_core_value_sigC844),
        var_core_value_sig6FDF = var_core_value_sigF487["data"][var_core_value_sigB708][var_core_value_sig0477];
      Fe(var_core_value_sig56A8[var_core_value_sig2ED4(0x2c7)], var_core_value_sig56A8[var_core_value_sig2ED4(0x383)], var_core_value_sig0477, var_core_value_sig6FDF["v"], var_core_value_sig6FDF["s"]);
    });
  });
  for (let var_core_value_sig60EF = 0x0; var_core_value_sig60EF < var_core_value_sigC62E[ox4c05a4(0x471)]; var_core_value_sig60EF++) {
    var_core_value_sig56A8[ox4c05a4(0x383)][ox4c05a4(0x3db)](var_core_value_sig60EF);
    for (let var_core_value_sigC030 = 0x0; var_core_value_sigC030 < var_core_value_sigC62E[ox4c05a4(0x371)]; var_core_value_sigC030++) {
      var var_core_value_sig51C4, var_core_value_sigEECD, var_core_value_sigB655;
      let var_core_value_sigCAD5 = (var_core_value_sig51C4 = var_core_value_sigC62E[ox4c05a4(0x16a)][var_core_value_sigC030]) == null ? void 0x0 : var_core_value_sig51C4[var_core_value_sig60EF];
      if (!var_core_value_sigCAD5) continue;
      let var_core_value_sigE503 = var_core_value_sigCAD5["v"];
      (var_core_value_sigEECD = var_core_value_sigCD50[ox4c05a4(0x4a3)][var_core_value_sig60EF]) != null && var_core_value_sigEECD[ox4c05a4(0x47a)] && var_core_value_sig60EF === var_core_value_sigC62E[ox4c05a4(0x471)] - 0x1 && var_core_value_sigC030 === var_core_value_sigC62E[ox4c05a4(0x371)] - 0x1 && (var_core_value_sigE503 = var_core_value_sigDC83["sheets-pivot.value"]), (var_core_value_sigB655 = var_core_value_sigC62E["info"][var_core_value_sig60EF]) != null && var_core_value_sigB655[ox4c05a4(0x45b)] && (var_core_value_sigE503 = var_core_value_sigDC83[ox4c05a4(0x418)] || ox4c05a4(0x441)), Fe(var_core_value_sig56A8["candidates"], var_core_value_sig56A8["occupiedColumns"], var_core_value_sig60EF, var_core_value_sigE503, var_core_value_sigCAD5["s"]);
    }
  }
}
function Le(var_core_value_sigF30A, var_core_value_sigD81A, var_core_value_sigBE17, var_core_value_sigBB5E) {
  let {
      rowView: var_core_value_sigB4401,
      formatMap: var_core_value_sig9D0F
    } = var_core_value_sigF30A,
    var_core_value_sig0354 = Ne(var_core_value_sigB4401[ox1ea4d2(0x371)]);
  for (let var_core_value_sigA6FB = 0x0; var_core_value_sigA6FB < var_core_value_sigB4401[ox1ea4d2(0x471)]; var_core_value_sigA6FB++) {
    var var_core_value_sig12F4;
    var_core_value_sigBE17[ox1ea4d2(0x383)][ox1ea4d2(0x3db)](var_core_value_sigA6FB);
    let var_core_value_sig27C4 = var_core_value_sig9D0F[(var_core_value_sig12F4 = var_core_value_sigB4401[ox1ea4d2(0x4a3)][var_core_value_sigA6FB]) == null ? void 0x0 : var_core_value_sig12F4[ox1ea4d2(0x30c)]];
    var_core_value_sig0354["forEach"](var_core_value_sig88F6 => {
      const var_core_value_sig37DB = ox1ea4d2;
      var var_core_value_sig5542;
      let var_core_value_sigE0A9 = (var_core_value_sig5542 = var_core_value_sigB4401[var_core_value_sig37DB(0x16a)][var_core_value_sig88F6]) == null ? void 0x0 : var_core_value_sig5542[var_core_value_sigA6FB];
      if (!var_core_value_sigE0A9) return;
      let var_core_value_sigA73E = j(var_core_value_sigE0A9, !0x1, var_core_value_sig27C4, var_core_value_sigD81A, void 0x0, void 0x0, var_core_value_sigBB5E);
      Fe(var_core_value_sigBE17["candidates"], var_core_value_sigBE17[var_core_value_sig37DB(0x383)], var_core_value_sigA6FB, var_core_value_sigA73E, var_core_value_sigE0A9["s"]);
    });
  }
}
function Re(var_core_value_sigDCEC, var_core_value_sigB5C8, var_core_value_sig8320, var_core_value_sig1C1B) {
  let {
      cornerView: var_core_value_sig70FD,
      colView: var_core_value_sig988F,
      formatMap: var_core_value_sig50A1
    } = var_core_value_sigDCEC,
    var_core_value_sig71D2 = Ne(var_core_value_sig988F[ox2474ce(0x371)]);
  for (let var_core_value_sigD6EA = 0x0; var_core_value_sigD6EA < var_core_value_sig988F[ox2474ce(0x471)]; var_core_value_sigD6EA++) {
    let var_core_value_sig3E1A = var_core_value_sig70FD[ox2474ce(0x471)] + var_core_value_sigD6EA;
    var_core_value_sig8320[ox2474ce(0x383)][ox2474ce(0x3db)](var_core_value_sig3E1A), var_core_value_sig71D2["forEach"](var_core_value_sig7620 => {
      const var_core_value_sigB9FC = ox2474ce;
      var var_core_value_sig5055, var_core_value_sig3801;
      let var_core_value_sig45F0 = (var_core_value_sig5055 = var_core_value_sig988F[var_core_value_sigB9FC(0x16a)][var_core_value_sig7620]) == null ? void 0x0 : var_core_value_sig5055[var_core_value_sigD6EA];
      if (!var_core_value_sig45F0) return;
      let var_core_value_sigBC91 = var_core_value_sig988F[var_core_value_sigB9FC(0x18f)](var_core_value_sig7620 + 0x1),
        var_core_value_sigCB88 = (var_core_value_sig3801 = var_core_value_sig988F[var_core_value_sigB9FC(0x4a3)][var_core_value_sig7620]) == null ? void 0x0 : var_core_value_sig3801[var_core_value_sigB9FC(0x30c)],
        var_core_value_sig8D65 = var_core_value_sig50A1[var_core_value_sigCB88],
        var_core_value_sig8122 = var_core_value_sigBC91 != null && var_core_value_sigBC91[var_core_value_sigB9FC(0x461)] ? var_core_value_sigB5C8[var_core_value_sigB9FC(0x384)] || "Column\x20Labels" : j(var_core_value_sig45F0, var_core_value_sig7620 === 0x0 && (var_core_value_sigBC91 == null ? void 0x0 : var_core_value_sigBC91[var_core_value_sigB9FC(0x47a)]), var_core_value_sig8D65, var_core_value_sigB5C8, var_core_value_sigB5C8["sheets-pivot.subTotalText"], void 0x0, var_core_value_sig1C1B);
      Fe(var_core_value_sig8320[var_core_value_sigB9FC(0x2c7)], var_core_value_sig8320[var_core_value_sigB9FC(0x383)], var_core_value_sig3E1A, var_core_value_sig8122, var_core_value_sig45F0["s"]);
    });
  }
}
function ze(var_core_value_sigC113, var_core_value_sig2326, var_core_value_sig9007, var_core_value_sig8726) {
  let {
      cornerView: var_core_value_sig4358,
      rowView: var_core_value_sig9574,
      colView: var_core_value_sigD610,
      dataView: var_core_value_sigAF55,
      formatMap: var_core_value_sig7409
    } = var_core_value_sigC113,
    var_core_value_sigD106 = Ne(var_core_value_sigAF55["rowCount"]);
  for (let var_core_value_sigA2D3 = 0x0; var_core_value_sigA2D3 < var_core_value_sigAF55["colCount"]; var_core_value_sigA2D3++) {
    let var_core_value_sig7FB0 = var_core_value_sig4358[ox32b984(0x471)] + var_core_value_sigA2D3;
    var_core_value_sig9007["occupiedColumns"][ox32b984(0x3db)](var_core_value_sig7FB0), var_core_value_sigD106["forEach"](var_core_value_sigEDC6 => {
      const var_core_value_sig611A = ox32b984;
      var var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161;
      let var_core_value_sig7580 = (var_core_value_sig6BD9 = var_core_value_sigAF55[var_core_value_sig611A(0x16a)][var_core_value_sigEDC6]) == null ? void 0x0 : var_core_value_sig6BD9[var_core_value_sigA2D3];
      if (!var_core_value_sig7580) return;
      let var_core_value_sig1F18 = Math["max"](((var_core_value_sig7E56 = var_core_value_sig9574["info"][var_core_value_sigEDC6]) == null ? void 0x0 : var_core_value_sig7E56[var_core_value_sig611A(0x3bd)]) ?? -0x1, ((var_core_value_sig4161 = var_core_value_sigD610["info"][var_core_value_sigA2D3]) == null ? void 0x0 : var_core_value_sig4161[var_core_value_sig611A(0x3bd)]) ?? -0x1),
        var_core_value_sigD5A0 = var_core_value_sig7409[var_core_value_sig2326[var_core_value_sig1F18 < 0x0 ? 0x0 : var_core_value_sig1F18]],
        var_core_value_sig81B2 = var_core_value_sigD5A0 && typeof var_core_value_sig7580["v"] == "number" ? t[var_core_value_sig611A(0x22f)][var_core_value_sig611A(0x1a6)](var_core_value_sigD5A0, var_core_value_sig7580["v"], {
          dateSystem: var_core_value_sig8726
        }) : var_core_value_sig7580["v"];
      Fe(var_core_value_sig9007[var_core_value_sig611A(0x2c7)], var_core_value_sig9007["occupiedColumns"], var_core_value_sig7FB0, var_core_value_sig81B2, var_core_value_sig7580["s"]);
    });
  }
}
function Be(var_core_value_sig7552, var_core_value_sig56D1, var_core_value_sig3D12, var_core_value_sig8952) {
  let var_core_value_sigB409 = {};
  return var_core_value_sig7552["candidates"][ox56a3f5(0x231)]((var_core_value_sig727A, var_core_value_sig6AF1) => {
    const var_core_value_sig3F6A = ox56a3f5;
    let var_core_value_sig23B4 = m(var_core_value_sig3D12, var_core_value_sig56D1 + var_core_value_sig6AF1);
    if (!var_core_value_sig7552[var_core_value_sig3F6A(0x383)]["has"](var_core_value_sig6AF1)) {
      var_core_value_sigB409[var_core_value_sig23B4] = 0x10;
      return;
    }
    let var_core_value_sig350C = 0x28;
    var_core_value_sig727A["forEach"](({
      text: var_core_value_sig5215,
      buttonOffset: var_core_value_sig5204
    }) => {
      const var_core_value_sig5E11 = var_core_value_sig3F6A;
      var_core_value_sig350C = Math[var_core_value_sig5E11(0x13b)](var_core_value_sig350C, Math[var_core_value_sig5E11(0x26c)](var_core_value_sig8952(var_core_value_sig5215) + 0xc + var_core_value_sig5204));
    }), var_core_value_sigB409[var_core_value_sig23B4] = Math[var_core_value_sig3F6A(0x312)](var_core_value_sig350C, 0x190);
  }), var_core_value_sigB409;
}
function Ve(var_core_value_sig3D2F, var_core_value_sigDBDA, var_core_value_sig1EFA, var_core_value_sig7CF4, var_core_value_sigE956, var_core_value_sig189D = [], var_core_value_sigE26F = t["DateSystem"]["Date1900"]) {
  let var_core_value_sig8212 = p(var_core_value_sig3D2F, var_core_value_sigDBDA, var_core_value_sig1EFA),
    var_core_value_sig9A60 = var_core_value_sig8212[oxec67fd(0x2bc)] - var_core_value_sig8212["startColumn"] + 0x1,
    var_core_value_sig5EF5 = {
      candidates: Array[oxec67fd(0x144)]({
        length: var_core_value_sig9A60
      }, () => []),
      occupiedColumns: new Set()
    };
  return Ie(var_core_value_sig3D2F, var_core_value_sig7CF4, var_core_value_sig5EF5), Le(var_core_value_sig3D2F, var_core_value_sig7CF4, var_core_value_sig5EF5, var_core_value_sigE26F), Re(var_core_value_sig3D2F, var_core_value_sig7CF4, var_core_value_sig5EF5, var_core_value_sigE26F), ze(var_core_value_sig3D2F, var_core_value_sig189D, var_core_value_sig5EF5, var_core_value_sigE26F), Be(var_core_value_sig5EF5, var_core_value_sigDBDA, var_core_value_sig8212, var_core_value_sigE956);
}
function He(var_core_value_sig5324, var_core_value_sig01301) {
  let {
    rowFields: var_core_value_sig5838,
    columnFields: var_core_value_sigB9FE,
    valueFields: var_core_value_sig41A5,
    filterFields: var_core_value_sig6D3D,
    dimension: var_core_value_sigB191,
    measure: var_core_value_sig949D
  } = var_core_value_sig01301;
  for (let var_core_value_sig2335 of var_core_value_sig5838) {
    let var_core_value_sig4D58 = var_core_value_sigB191[var_core_value_sig2335];
    var_core_value_sig4D58 && var_core_value_sig5324["getDataFieldByDataFieldId"](var_core_value_sig4D58[oxd04bdc(0x1cb)]) && (var_core_value_sig5324[oxd04bdc(0x4c0)](var_core_value_sig4D58[oxd04bdc(0x1cb)], e["PivotTableFiledAreaEnum"][oxd04bdc(0x289)], void 0x0, var_core_value_sig2335), var_core_value_sig4D58[oxd04bdc(0x37f)] && var_core_value_sig5324["renameField"](var_core_value_sig4D58["id"], var_core_value_sig4D58[oxd04bdc(0x37f)]), var_core_value_sig4D58[oxd04bdc(0x42f)] && var_core_value_sig5324["setSortInfo"](var_core_value_sig4D58["id"], var_core_value_sig4D58["sortInfo"]), var_core_value_sig4D58[oxd04bdc(0x49c)] && var_core_value_sig5324["setLabelFilterInfo"](var_core_value_sig4D58["id"], var_core_value_sig4D58[oxd04bdc(0x49c)]));
  }
  for (let var_core_value_sig6233 of var_core_value_sigB9FE) {
    let var_core_value_sig2DBD = var_core_value_sigB191[var_core_value_sig6233];
    var_core_value_sig2DBD && var_core_value_sig5324["getDataFieldByDataFieldId"](var_core_value_sig2DBD[oxd04bdc(0x1cb)]) && (var_core_value_sig5324["addFieldWithSourceId"](var_core_value_sig2DBD[oxd04bdc(0x1cb)], e[oxd04bdc(0x200)][oxd04bdc(0x374)], void 0x0, var_core_value_sig6233), var_core_value_sig2DBD[oxd04bdc(0x42f)] && var_core_value_sig5324[oxd04bdc(0x1a2)](var_core_value_sig2DBD["id"], var_core_value_sig2DBD[oxd04bdc(0x42f)]), var_core_value_sig2DBD["filterInfo"] && var_core_value_sig5324[oxd04bdc(0x3b9)](var_core_value_sig2DBD["id"], var_core_value_sig2DBD["filterInfo"]), var_core_value_sig2DBD["displayName"] && var_core_value_sig5324[oxd04bdc(0x15c)](var_core_value_sig2DBD["id"], var_core_value_sig2DBD[oxd04bdc(0x37f)]));
  }
  for (let var_core_value_sig4230 of var_core_value_sig6D3D) {
    let var_core_value_sig424E = var_core_value_sigB191[var_core_value_sig4230];
    var_core_value_sig424E && var_core_value_sig5324[oxd04bdc(0x28f)](var_core_value_sig424E[oxd04bdc(0x1cb)]) && (var_core_value_sig5324["addFieldWithSourceId"](var_core_value_sig424E[oxd04bdc(0x1cb)], e["PivotTableFiledAreaEnum"][oxd04bdc(0x3e1)], void 0x0, var_core_value_sig4230), var_core_value_sig424E[oxd04bdc(0x42f)] && var_core_value_sig5324[oxd04bdc(0x1a2)](var_core_value_sig424E["id"], var_core_value_sig424E["sortInfo"]), var_core_value_sig424E[oxd04bdc(0x49c)] && var_core_value_sig5324[oxd04bdc(0x3b9)](var_core_value_sig424E["id"], var_core_value_sig424E[oxd04bdc(0x49c)]), var_core_value_sig424E[oxd04bdc(0x37f)] && var_core_value_sig5324[oxd04bdc(0x15c)](var_core_value_sig424E["id"], var_core_value_sig424E[oxd04bdc(0x37f)]));
  }
  for (let var_core_value_sig6136 of var_core_value_sig41A5) {
    let var_core_value_sigF481 = var_core_value_sig949D[var_core_value_sig6136];
    var_core_value_sigF481 && var_core_value_sig5324[oxd04bdc(0x28f)](var_core_value_sigF481["dataFieldId"]) && (var_core_value_sig5324[oxd04bdc(0x4c0)](var_core_value_sigF481[oxd04bdc(0x1cb)], e[oxd04bdc(0x200)][oxd04bdc(0x1df)], void 0x0, var_core_value_sig6136), var_core_value_sigF481[oxd04bdc(0x41a)] !== void 0x0 && var_core_value_sig5324[oxd04bdc(0x19d)](var_core_value_sig6136, var_core_value_sigF481[oxd04bdc(0x41a)]), var_core_value_sigF481[oxd04bdc(0x1a6)] && var_core_value_sig5324[oxd04bdc(0x311)](var_core_value_sig6136, var_core_value_sigF481[oxd04bdc(0x1a6)]), var_core_value_sigF481[oxd04bdc(0x37f)] && var_core_value_sig5324[oxd04bdc(0x15c)](var_core_value_sigF481["id"], var_core_value_sigF481[oxd04bdc(0x37f)]));
  }
  let var_core_value_sig4113 = var_core_value_sig01301[oxd04bdc(0x36a)];
  for (let {
    fieldId: var_core_value_sigD25E,
    filterInfo: var_core_value_sigE1BC
  } of var_core_value_sig4113) var_core_value_sig5324[oxd04bdc(0x453)](var_core_value_sigD25E, var_core_value_sigE1BC);
}
function Ue(var_core_value_sigEC12, var_core_value_sigC932) {
  let var_core_value_sigDE39 = [];
  var_core_value_sigC932 === e[ox397ca5(0x200)][ox397ca5(0x289)] && var_core_value_sigEC12[ox397ca5(0x46e)](e[ox397ca5(0x200)][ox397ca5(0x289)], var_core_value_sigCF44 => {
    const var_core_value_sig3C97 = ox397ca5;
    var_core_value_sigDE39[var_core_value_sig3C97(0x19f)](var_core_value_sigCF44[var_core_value_sig3C97(0x1b6)]());
  }), var_core_value_sigC932 === e[ox397ca5(0x200)][ox397ca5(0x374)] && var_core_value_sigEC12[ox397ca5(0x46e)](e["PivotTableFiledAreaEnum"][ox397ca5(0x374)], var_core_value_sigA920 => {
    const var_core_value_sigAD56 = ox397ca5;
    var_core_value_sigDE39[var_core_value_sigAD56(0x19f)](var_core_value_sigA920["getId"]());
  }), var_core_value_sigC932 === e[ox397ca5(0x200)]["Filter"] && var_core_value_sigEC12[ox397ca5(0x46e)](e[ox397ca5(0x200)][ox397ca5(0x3e1)], var_core_value_sig0454 => {
    const var_core_value_sigEE1A = ox397ca5;
    var_core_value_sigDE39[var_core_value_sigEE1A(0x19f)](var_core_value_sig0454["getId"]());
  }), var_core_value_sigC932 === e[ox397ca5(0x200)][ox397ca5(0x1df)] && var_core_value_sigEC12[ox397ca5(0x46e)](e[ox397ca5(0x200)]["Value"], var_core_value_sig4107 => {
    const var_core_value_sigF35C = ox397ca5;
    var_core_value_sigDE39[var_core_value_sigF35C(0x19f)](var_core_value_sig4107[var_core_value_sigF35C(0x1b6)]());
  }), var_core_value_sigC932 === void 0x0 && var_core_value_sigEC12[ox397ca5(0x3a7)](var_core_value_sigEF8D => {
    const var_core_value_sigE025 = ox397ca5;
    var_core_value_sigDE39[var_core_value_sigE025(0x19f)](var_core_value_sigEF8D[var_core_value_sigE025(0x1b6)]());
  });
  let var_core_value_sig1529 = var_core_value_sigDE39[ox397ca5(0x2b6)];
  for (let var_core_value_sigD549 = var_core_value_sig1529 - 0x1; var_core_value_sigD549 >= 0x0; var_core_value_sigD549--) var_core_value_sigEC12[ox397ca5(0x177)](var_core_value_sigDE39[var_core_value_sigD549]);
  let var_core_value_sigAFD8 = var_core_value_sigEC12["getValueFilterInfos"]();
  for (let var_core_value_sigC79E in var_core_value_sigAFD8) var_core_value_sigEC12[ox397ca5(0x366)](var_core_value_sigC79E);
}
function We(var_core_value_sig6017, var_core_value_sigC66C) {
  let var_core_value_sigC5AC = e[ox17d736(0x2ad)]["dateSystem"] === e[ox17d736(0x469)][ox17d736(0x1a1)],
    var_core_value_sig5880 = new Date((0x0, e[ox17d736(0x40e)])(var_core_value_sigC66C, var_core_value_sigC5AC)),
    var_core_value_sigF7E2 = new Date((0x0, e[ox17d736(0x40e)])(var_core_value_sig6017, var_core_value_sigC5AC)),
    var_core_value_sigDEEA = var_core_value_sig5880[ox17d736(0x4b7)]() === var_core_value_sigF7E2[ox17d736(0x4b7)](),
    var_core_value_sig49D1 = var_core_value_sigDEEA && var_core_value_sig5880[ox17d736(0x2d9)]() === var_core_value_sigF7E2[ox17d736(0x2d9)](),
    var_core_value_sigEDEC = var_core_value_sig49D1 && var_core_value_sig5880["getDate"]() === var_core_value_sigF7E2[ox17d736(0x287)]();
  return var_core_value_sigDEEA && var_core_value_sig49D1 && !var_core_value_sigEDEC ? e[ox17d736(0x1ad)]["YearMonthDate"] : var_core_value_sigDEEA && !var_core_value_sig49D1 ? e[ox17d736(0x1ad)][ox17d736(0x2ba)] : e[ox17d736(0x1ad)][ox17d736(0x4ba)];
}
function Ge(var_core_value_sig4F7B) {
  var_core_value_sig4F7B != null && (0x0, e[ox141fe9(0x3ac)])(var_core_value_sig4F7B === t[ox141fe9(0x473)][ox141fe9(0x26f)] ? e[ox141fe9(0x469)]["Date1904"] : e[ox141fe9(0x469)][ox141fe9(0x1a1)]);
}
function Ke(var_core_value_sig8269, var_core_value_sigB092) {
  let var_core_value_sigC04F = var_core_value_sig8269[ox4a85ce(0x345)](K)["getTextInfo"](),
    var_core_value_sig8B16 = "";
  switch (var_core_value_sigB092) {
    case e["PivotDateGroupFieldDateTypeEnum"][ox4a85ce(0x258)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x3cf)];
      break;
    case e[ox4a85ce(0x1ad)][ox4a85ce(0x2ba)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x240)];
      break;
    case e[ox4a85ce(0x1ad)]["Year"]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x1d0)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][ox4a85ce(0x34c)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x1f4)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"]["Quarter"]:
      var_core_value_sig8B16 = var_core_value_sigC04F["sheets-pivot.dateGroup.quarter"];
      break;
    case e[ox4a85ce(0x1ad)][ox4a85ce(0x1e2)]:
      var_core_value_sig8B16 = var_core_value_sigC04F["sheets-pivot.dateGroup.date"];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][ox4a85ce(0x433)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x20e)];
      break;
    case e[ox4a85ce(0x1ad)][ox4a85ce(0x282)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x19b)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][ox4a85ce(0x130)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x229)];
      break;
    case e["PivotDateGroupFieldDateTypeEnum"][ox4a85ce(0x37b)]:
      var_core_value_sig8B16 = var_core_value_sigC04F[ox4a85ce(0x2b8)];
      break;
    case e[ox4a85ce(0x1ad)][ox4a85ce(0x283)]:
      var_core_value_sig8B16 = var_core_value_sigC04F["sheets-pivot.dateGroup.yearQuarter"];
      break;
    default:
      var_core_value_sig8B16 = "";
      break;
  }
  return var_core_value_sig8B16;
}
const qe = "sheets-pivot.config",
  Je = {
    autoDateGroup: !0x0,
    dateSystem: e["PivotDateGroupFieldDateSystemEnum"]["Date1900"]
  };
let Y = class extends t["Disposable"] {
  constructor(var_core_value_sig9221, var_core_value_sig0351, var_core_value_sig4686, var_core_value_sig8E1C, var_core_value_sigD719, var_core_value_sig323C) {
    super(), this[ox289647(0x483)] = var_core_value_sig9221, this["_commandService"] = var_core_value_sig0351, this[ox289647(0x1ec)] = var_core_value_sig4686, this[ox289647(0x31d)] = var_core_value_sig8E1C, this[ox289647(0x259)] = var_core_value_sigD719, this[ox289647(0x2b0)] = var_core_value_sig323C, V(this, "_model", new Map()), V(this, ox289647(0x48e), new Map()), V(this, "_pivotTableRangeInfo", new Map()), V(this, ox289647(0x2c3), new Map()), V(this, ox289647(0x472), new i[ox289647(0x218)]()), V(this, ox289647(0x4c3), new i[ox289647(0x218)]()), V(this, "pivotInitCompleted$", this[ox289647(0x4c3)]["asObservable"]()), V(this, ox289647(0x324), new i[ox289647(0x218)]()), V(this, ox289647(0x331), this[ox289647(0x324)][ox289647(0x1c2)]()), V(this, ox289647(0x32d), {}), V(this, ox289647(0x35c), this[ox289647(0x472)][ox289647(0x1c2)]()), this[ox289647(0x178)](), this["_initUnitDisposed"]();
    let var_core_value_sig015D = this[ox289647(0x259)]["getConfig"](qe);
    (var_core_value_sig015D == null ? void 0x0 : var_core_value_sig015D[ox289647(0x2ef)]) === !0x0 && this[ox289647(0x3ad)]();
  }
  ["_initUnitDisposed"]() {
    this[oxc5ba25(0x1e7)](this[oxc5ba25(0x1ec)][oxc5ba25(0x354)](t[oxc5ba25(0x2b3)][oxc5ba25(0x333)])[oxc5ba25(0x131)](var_core_value_sigD7F2 => {
      const var_core_value_sig7CF3 = oxc5ba25;
      this[var_core_value_sig7CF3(0x470)](var_core_value_sigD7F2[var_core_value_sig7CF3(0x261)]());
    }));
  }
  ["setPivotInitCompleted"]() {
    this[ox3c5c79(0x4c3)][ox3c5c79(0x37c)](!0x0);
  }
  ["_initLocale"]() {
    let var_core_value_sigBF8B = Se(this[ox3b2653(0x483)], b, "", {});
    this[ox3b2653(0x32d)] = var_core_value_sigBF8B, this[ox3b2653(0x1e7)](this["_localeService"]["direction$"][ox3b2653(0x306)]((0x0, i["distinctUntilChanged"])())[ox3b2653(0x131)](var_core_value_sig9DC6 => {
      const var_core_value_sig6643 = ox3b2653;
      this[var_core_value_sig6643(0x1db)]["executeCommand"](ae["id"], {
        textInfo: var_core_value_sigBF8B,
        direction: var_core_value_sig9DC6
      }, {
        onlyLocal: !0x0
      });
    }));
  }
  ["getTextInfo"]() {
    return this[ox3e72ea(0x32d)];
  }
  ["updateViewInfo"](var_core_value_sigF7CE, var_core_value_sig7CF1, var_core_value_sigA552, var_core_value_sigAE32, var_core_value_sig9B4D) {
    this[ox1c73fe(0x3e3)](var_core_value_sigF7CE, var_core_value_sig7CF1, var_core_value_sigA552, var_core_value_sigAE32), this[ox1c73fe(0x17a)](var_core_value_sigF7CE, var_core_value_sig7CF1, var_core_value_sigA552, var_core_value_sig9B4D);
  }
  ["getPivotTableConfig"](var_core_value_sig2704, var_core_value_sigD0CC, var_core_value_sigF347) {
    var var_core_value_sig80C6;
    let var_core_value_sigEBFB = (var_core_value_sig80C6 = this[ox29b1b3(0x2e7)][ox29b1b3(0x345)](var_core_value_sig2704)) == null ? void 0x0 : var_core_value_sig80C6["get"](var_core_value_sigD0CC);
    if (var_core_value_sigEBFB) return var_core_value_sigEBFB["get"](var_core_value_sigF347);
  }
  ["getTargetByPivotTableId"](var_core_value_sigF3BF, var_core_value_sigAE58) {
    let var_core_value_sig8E13 = this[ox37a613(0x2e7)][ox37a613(0x345)](var_core_value_sigF3BF);
    if (var_core_value_sig8E13) {
      for (let [var_core_value_sigA0A5, var_core_value_sig10AA] of var_core_value_sig8E13[ox37a613(0x1c4)]()) for (let [var_core_value_sig48DD, var_core_value_sig5E6A] of var_core_value_sig10AA["entries"]()) if (var_core_value_sig48DD === var_core_value_sigAE58) return var_core_value_sig5E6A[ox37a613(0x376)];
    }
  }
  ["getTargetByPivotId"](var_core_value_sig3AAF, var_core_value_sig134E, var_core_value_sigA3C0) {
    let var_core_value_sig723F = this["getPivotTableConfig"](var_core_value_sig3AAF, var_core_value_sig134E, var_core_value_sigA3C0);
    return var_core_value_sig723F == null ? void 0x0 : var_core_value_sig723F["targetCellInfo"];
  }
  ["getSubUnitPivotConfigs"](var_core_value_sigD044, var_core_value_sig9797) {
    var var_core_value_sig8533;
    return (var_core_value_sig8533 = this[ox1764e7(0x2e7)][ox1764e7(0x345)](var_core_value_sigD044)) == null ? void 0x0 : var_core_value_sig8533[ox1764e7(0x345)](var_core_value_sig9797);
  }
  ["updateConfigCache"](var_core_value_sig57C5, var_core_value_sig0DE9, var_core_value_sigB00D, var_core_value_sig57C8) {
    let var_core_value_sigC27D = this[ox59e572(0x39a)](var_core_value_sig57C5, var_core_value_sig0DE9);
    var_core_value_sig57C8 ? var_core_value_sigC27D[ox59e572(0x2d0)](var_core_value_sigB00D, var_core_value_sig57C8) : var_core_value_sigC27D[ox59e572(0x216)](var_core_value_sigB00D), this["_pivotConfigChange$"][ox59e572(0x37c)]({
      unitId: var_core_value_sig57C5,
      subUnitId: var_core_value_sig0DE9,
      pivotTableId: var_core_value_sigB00D,
      pivotTableConfig: var_core_value_sig57C8
    });
  }
  ["getCollection"](var_core_value_sig7B95, var_core_value_sig7D59) {
    var var_core_value_sig5863;
    return (var_core_value_sig5863 = this[ox56a4d8(0x48e)][ox56a4d8(0x345)](var_core_value_sig7B95)) == null ? void 0x0 : var_core_value_sig5863[ox56a4d8(0x1b9)][var_core_value_sig7D59];
  }
  ["updateCollectionConfig"](var_core_value_sig5BE7, var_core_value_sigC74A) {
    this[ox72369d(0x48e)]["set"](var_core_value_sig5BE7, var_core_value_sigC74A), this[ox72369d(0x472)]["next"](Math[ox72369d(0x3da)]());
  }
  ["_ensurePivotMap"](var_core_value_sig8F6A, var_core_value_sig46EA) {
    let var_core_value_sig626C = this[ox36f366(0x2e7)][ox36f366(0x345)](var_core_value_sig8F6A);
    var_core_value_sig626C || (var_core_value_sig626C = new Map(), this[ox36f366(0x2e7)][ox36f366(0x2d0)](var_core_value_sig8F6A, var_core_value_sig626C));
    let var_core_value_sig9077 = var_core_value_sig626C["get"](var_core_value_sig46EA);
    return var_core_value_sig9077 || (var_core_value_sig9077 = new Map(), var_core_value_sig626C[ox36f366(0x2d0)](var_core_value_sig46EA, var_core_value_sig9077)), var_core_value_sig9077;
  }
  ["_ensurePivotTableRangeInfo"](var_core_value_sigC76C, var_core_value_sigB23A) {
    let var_core_value_sigBA66 = this[ox2790c5(0x42c)][ox2790c5(0x345)](var_core_value_sigC76C);
    var_core_value_sigBA66 || (var_core_value_sigBA66 = new Map(), this[ox2790c5(0x42c)][ox2790c5(0x2d0)](var_core_value_sigC76C, var_core_value_sigBA66));
    let var_core_value_sig3DF0 = var_core_value_sigBA66[ox2790c5(0x345)](var_core_value_sigB23A);
    return var_core_value_sig3DF0 || (var_core_value_sig3DF0 = new Map(), var_core_value_sigBA66[ox2790c5(0x2d0)](var_core_value_sigB23A, var_core_value_sig3DF0)), var_core_value_sig3DF0;
  }
  ["_ensurePivotTableMatrixInfo"](var_core_value_sig0512, var_core_value_sig4B2B) {
    let var_core_value_sigDF88 = this[ox2af246(0x2c3)][ox2af246(0x345)](var_core_value_sig0512);
    var_core_value_sigDF88 || (var_core_value_sigDF88 = new Map(), this["_pivotTableMatrixInfo"][ox2af246(0x2d0)](var_core_value_sig0512, var_core_value_sigDF88));
    let var_core_value_sigDB93 = var_core_value_sigDF88[ox2af246(0x345)](var_core_value_sig4B2B);
    return var_core_value_sigDB93 || (var_core_value_sigDB93 = new Map(), var_core_value_sigDF88["set"](var_core_value_sig4B2B, var_core_value_sigDB93)), var_core_value_sigDB93;
  }
  ["updatePivotTableRangeInfo"](var_core_value_sig67CF, var_core_value_sigCA96, var_core_value_sig6C5E, var_core_value_sig4997) {
    var var_core_value_sig7290;
    let var_core_value_sigE835 = this[ox16f71d(0x29b)](var_core_value_sig67CF, var_core_value_sigCA96),
      var_core_value_sig4644 = (var_core_value_sig7290 = var_core_value_sigE835[ox16f71d(0x345)](var_core_value_sig6C5E)) == null ? void 0x0 : var_core_value_sig7290["oldRangeInfo"];
    var_core_value_sigE835["set"](var_core_value_sig6C5E, {
      oldRangeInfo: var_core_value_sig4644,
      rangeInfo: var_core_value_sig4997
    });
  }
  ["updatePivotTableMatrixInfo"](var_core_value_sig9DED, var_core_value_sig7DE6, var_core_value_sig120E, var_core_value_sigD79B) {
    var var_core_value_sig92A31;
    let var_core_value_sig8911 = this[ox872fdd(0x17d)](var_core_value_sig9DED, var_core_value_sig7DE6),
      var_core_value_sig8D1B = (var_core_value_sig92A31 = var_core_value_sig8911[ox872fdd(0x345)](var_core_value_sig120E)) == null ? void 0x0 : var_core_value_sig92A31[ox872fdd(0x2c0)];
    var_core_value_sig8911[ox872fdd(0x2d0)](var_core_value_sig120E, {
      oldMatrix: var_core_value_sig8D1B,
      matrix: var_core_value_sigD79B
    });
  }
  ["getPivotTableRangeInfo"](var_core_value_sigA915, var_core_value_sigE1F7, var_core_value_sig4BE7) {
    var var_core_value_sigF9FF;
    return (var_core_value_sigF9FF = this[ox1a1406(0x42c)][ox1a1406(0x345)](var_core_value_sigA915)) == null || (var_core_value_sigF9FF = var_core_value_sigF9FF[ox1a1406(0x345)](var_core_value_sigE1F7)) == null ? void 0x0 : var_core_value_sigF9FF[ox1a1406(0x345)](var_core_value_sig4BE7);
  }
  ["getPivotTableMatrixInfo"](var_core_value_sigE0E3, var_core_value_sig3AB3, var_core_value_sig816E) {
    var var_core_value_sigE6F3;
    return (var_core_value_sigE6F3 = this[ox43033d(0x2c3)][ox43033d(0x345)](var_core_value_sigE0E3)) == null || (var_core_value_sigE6F3 = var_core_value_sigE6F3[ox43033d(0x345)](var_core_value_sig3AB3)) == null ? void 0x0 : var_core_value_sigE6F3[ox43033d(0x345)](var_core_value_sig816E);
  }
  ["deleteUnitId"](var_core_value_sig3EE1) {
    this[ox531ae6(0x2e7)][ox531ae6(0x216)](var_core_value_sig3EE1), this["_collectionConfigModel"][ox531ae6(0x216)](var_core_value_sig3EE1);
  }
  ["_toJSON"](var_core_value_sig9673) {
    let var_core_value_sig4917 = {
      dataFieldManagerConfig: {},
      pivotTableConfigs: {}
    };
    if (this[ox2deb57(0x48e)][ox2deb57(0x345)](var_core_value_sig9673) && (var_core_value_sig4917[ox2deb57(0x32c)][var_core_value_sig9673] = this["_collectionConfigModel"][ox2deb57(0x345)](var_core_value_sig9673)), this[ox2deb57(0x2e7)][ox2deb57(0x345)](var_core_value_sig9673)) {
      var_core_value_sig4917[ox2deb57(0x162)][var_core_value_sig9673] = {};
      let var_core_value_sig4124 = this[ox2deb57(0x2e7)][ox2deb57(0x345)](var_core_value_sig9673);
      var_core_value_sig4124 != null && var_core_value_sig4124[ox2deb57(0x189)] && [...var_core_value_sig4124[ox2deb57(0x2a8)]()][ox2deb57(0x231)](var_core_value_sigE6D0 => {
        const var_core_value_sig8E91 = ox2deb57;
        let var_core_value_sig00BE = var_core_value_sig4124[var_core_value_sig8E91(0x345)](var_core_value_sigE6D0);
        var_core_value_sig00BE != null && var_core_value_sig00BE[var_core_value_sig8E91(0x189)] && (var_core_value_sig4917[var_core_value_sig8E91(0x162)][var_core_value_sig9673][var_core_value_sigE6D0] = {}, [...var_core_value_sig00BE["keys"]()][var_core_value_sig8E91(0x231)](var_core_value_sigB7FC => {
          const var_core_value_sig9CD9 = var_core_value_sig8E91;
          let var_core_value_sigFD0C = var_core_value_sig00BE[var_core_value_sig9CD9(0x345)](var_core_value_sigB7FC);
          var_core_value_sigFD0C && (var_core_value_sig4917[var_core_value_sig9CD9(0x162)][var_core_value_sig9673][var_core_value_sigE6D0][var_core_value_sigB7FC] = var_core_value_sigFD0C);
        }));
      });
    }
    return var_core_value_sig4917;
  }
  ["_initSnapshot"]() {
    this[ox247596(0x1e7)](this[ox247596(0x31d)][ox247596(0x2cd)]({
      toJson: var_core_value_sigBF1C => JSON[ox247596(0x184)](this["_toJSON"](var_core_value_sigBF1C)),
      parseJson: var_core_value_sigEEEF => ({}),
      businesses: [t[ox247596(0x2b3)][ox247596(0x333)]],
      pluginName: _,
      onLoad: (var_core_value_sig9A01, var_core_value_sig674F) => {},
      onUnLoad: var_core_value_sigC8F6 => {
        const var_core_value_sig8A26 = ox247596;
        this[var_core_value_sig8A26(0x470)](var_core_value_sigC8F6);
      }
    }));
  }
};
Y = U([H(0x0, (0x0, t["Inject"])(t["Injector"])), H(0x1, (0x0, t["Inject"])(t["ICommandService"])), H(0x2, (0x0, t["Inject"])(t["IUniverInstanceService"])), H(0x3, (0x0, t["Inject"])(t["IResourceManagerService"])), H(0x4, (0x0, t["Inject"])(t["IConfigService"])), H(0x5, (0x0, t["Inject"])(t["LocaleService"]))], Y);
let X = class extends t["Disposable"] {
  constructor(var_core_value_sig3BE6, var_core_value_sigA1C9, var_core_value_sig77D6, var_core_value_sigE3CE, var_core_value_sig219B) {
    super(), this[oxf8f217(0x2b0)] = var_core_value_sig3BE6, this[oxf8f217(0x483)] = var_core_value_sigA1C9, this[oxf8f217(0x26e)] = var_core_value_sig77D6, this[oxf8f217(0x1ec)] = var_core_value_sigE3CE, this[oxf8f217(0x3a5)] = var_core_value_sig219B, V(this, oxf8f217(0x1c8), new Map()), V(this, oxf8f217(0x140), new Map()), V(this, "_pivotViewCache", new Map()), V(this, "_markDirty$", new i[oxf8f217(0x218)]()), V(this, oxf8f217(0x27c), this[oxf8f217(0x406)]["asObservable"]()), V(this, oxf8f217(0x34b), new i[oxf8f217(0x218)]()), V(this, oxf8f217(0x20a), this["_viewUpdate$"]["asObservable"]()), V(this, oxf8f217(0x32d), void 0x0), this[oxf8f217(0x178)](), this[oxf8f217(0x327)](), this[oxf8f217(0x1eb)]();
  }
  ["_initDirectionChange"]() {
    this[ox5426af(0x1e7)](this["_localeService"][ox5426af(0x3c4)][ox5426af(0x306)]((0x0, i["distinctUntilChanged"])(), (0x0, i[ox5426af(0x1a9)])(0x1))[ox5426af(0x131)](() => {
      const var_core_value_sigD073 = ox5426af;
      let var_core_value_sigF631 = [];
      this[var_core_value_sigD073(0x1c8)][var_core_value_sigD073(0x231)]((var_core_value_sig7BB5, var_core_value_sig6AAD) => {
        const var_core_value_sig1157 = var_core_value_sigD073;
        var_core_value_sig7BB5[var_core_value_sig1157(0x231)]((var_core_value_sig849B, var_core_value_sig5F1A) => {
          const var_core_value_sigB455 = var_core_value_sig1157;
          var_core_value_sig849B[var_core_value_sigB455(0x231)]((var_core_value_sig5B67, var_core_value_sig1758) => {
            const var_core_value_sig4805 = var_core_value_sigB455;
            var var_core_value_sigE67E;
            let var_core_value_sig2902 = (var_core_value_sigE67E = this[var_core_value_sig4805(0x227)][var_core_value_sig4805(0x345)](var_core_value_sig6AAD)) == null || (var_core_value_sigE67E = var_core_value_sigE67E[var_core_value_sig4805(0x345)](var_core_value_sig5F1A)) == null ? void 0x0 : var_core_value_sigE67E["get"](var_core_value_sig1758);
            var_core_value_sig2902 && var_core_value_sigF631[var_core_value_sig4805(0x19f)]({
              unitId: var_core_value_sig6AAD,
              subUnitId: var_core_value_sig5F1A,
              pivotTableId: var_core_value_sig1758,
              type: "set",
              view: var_core_value_sig2902
            });
          });
        });
      });
      let var_core_value_sig2278 = new Set(),
        var_core_value_sig7053 = [];
      var_core_value_sigF631[var_core_value_sigD073(0x231)](var_core_value_sigA694 => {
        const var_core_value_sig18E0 = var_core_value_sigD073;
        this["_clearRenderCacheData"](var_core_value_sigA694);
        let var_core_value_sig0428 = this[var_core_value_sig18E0(0x191)](var_core_value_sigA694, !0x1);
        if (var_core_value_sig0428) {
          var var_core_value_sigBE07;
          var_core_value_sig7053["push"]({
            unitId: var_core_value_sigA694["unitId"],
            subUnitId: var_core_value_sigA694[var_core_value_sig18E0(0x1bf)],
            pivotTableId: var_core_value_sigA694[var_core_value_sig18E0(0x4a4)],
            type: var_core_value_sigA694[var_core_value_sig18E0(0x3dd)],
            valueMatrix: var_core_value_sig0428["matrix"],
            rangesCache: var_core_value_sig0428[var_core_value_sig18E0(0x1a8)],
            isEmpty: (var_core_value_sigBE07 = this[var_core_value_sig18E0(0x26e)][var_core_value_sig18E0(0x2e6)](var_core_value_sigA694["unitId"], var_core_value_sigA694[var_core_value_sig18E0(0x1bf)], var_core_value_sigA694["pivotTableId"])) == null ? void 0x0 : var_core_value_sigBE07[var_core_value_sig18E0(0x208)]
          });
        }
        var_core_value_sig2278[var_core_value_sig18E0(0x3db)](var_core_value_sigA694[var_core_value_sig18E0(0x386)] + "\x0a" + var_core_value_sigA694["subUnitId"]);
      }), var_core_value_sig7053[var_core_value_sigD073(0x231)](var_core_value_sig555F => this[var_core_value_sigD073(0x34b)][var_core_value_sigD073(0x37c)](var_core_value_sig555F)), var_core_value_sig2278[var_core_value_sigD073(0x231)](var_core_value_sig3D6F => {
        const var_core_value_sig336C = var_core_value_sigD073;
        let [var_core_value_sig6E68, var_core_value_sig8DFE] = var_core_value_sig3D6F[var_core_value_sig336C(0x14f)]("\x0a");
        this["markDirty"](var_core_value_sig6E68, var_core_value_sig8DFE);
      });
    }));
  }
  ["_initUnitDisposed"]() {
    this[ox4d8681(0x1e7)](this[ox4d8681(0x1ec)][ox4d8681(0x354)](t[ox4d8681(0x2b3)][ox4d8681(0x333)])[ox4d8681(0x131)](var_core_value_sig52F1 => {
      const var_core_value_sig1E74 = ox4d8681;
      this[var_core_value_sig1E74(0x470)](var_core_value_sig52F1[var_core_value_sig1E74(0x261)]());
    }));
  }
  ["_initLocale"]() {
    this["_textInfo"] = Se(this[ox3dd84e(0x483)], b, "", {});
  }
  ["updateRenderCache"](var_core_value_sig4493, var_core_value_sig8B9C = !0x0) {
    let {
        view: var_core_value_sigA35B,
        unitId: var_core_value_sig82DD,
        subUnitId: var_core_value_sigAAC7,
        pivotTableId: var_core_value_sig1999,
        type: var_core_value_sigFB45
      } = var_core_value_sig4493,
      var_core_value_sigB86C = this[ox3ab108(0x26e)][ox3ab108(0x2e6)](var_core_value_sig82DD, var_core_value_sigAAC7, var_core_value_sig1999);
    if (!var_core_value_sigA35B || !var_core_value_sigB86C || var_core_value_sigFB45 === ox3ab108(0x216)) return;
    let {
        pageView: var_core_value_sigD892,
        cornerView: var_core_value_sig6086,
        rowView: var_core_value_sigAED2,
        colView: var_core_value_sig3516,
        dataView: var_core_value_sigCDCD
      } = var_core_value_sigA35B,
      var_core_value_sig206A = var_core_value_sigB86C[ox3ab108(0x376)],
      var_core_value_sig1EFE = var_core_value_sigB86C[ox3ab108(0x208)],
      var_core_value_sig9904 = this[ox3ab108(0x3d5)](var_core_value_sig82DD, var_core_value_sigAAC7),
      var_core_value_sig39C7 = this["_ensurePivotItemRenderInfoCache"](var_core_value_sig82DD, var_core_value_sigAAC7, var_core_value_sig1999),
      var_core_value_sigA022 = this["_localeService"][ox3ab108(0x47c)]();
    if (this[ox3ab108(0x39b)](var_core_value_sig82DD, var_core_value_sigAAC7)[ox3ab108(0x2d0)](var_core_value_sig1999, var_core_value_sigA35B), var_core_value_sig1EFE) return this["_updateRenderEmptyCache"](var_core_value_sig4493, var_core_value_sig9904, var_core_value_sig206A, var_core_value_sig39C7, var_core_value_sig8B9C);
    {
      var var_core_value_sig913A;
      let var_core_value_sig1E84 = p(var_core_value_sigA35B, var_core_value_sig206A[ox3ab108(0x1a4)], var_core_value_sigA022),
        var_core_value_sig133B = var_core_value_sig48EA => var_core_value_sig48EA[ox3ab108(0x15f)](var_core_value_sig5241 => h(var_core_value_sig1E84, var_core_value_sig5241)),
        var_core_value_sig69B8 = F(var_core_value_sig206A, var_core_value_sigD892, !0x0),
        var_core_value_sig983D = var_core_value_sigD892[ox3ab108(0x15d)] >= 0x0 ? var_core_value_sigD892[ox3ab108(0x15d)] + 0x1 : 0x0,
        var_core_value_sig9A03 = var_core_value_sig6086[ox3ab108(0x172)](),
        var_core_value_sig3363 = var_core_value_sig6086[ox3ab108(0x2f0)](),
        var_core_value_sigF64A = +(var_core_value_sig69B8[ox3ab108(0x2b6)] > 0x0),
        var_core_value_sig25EC = F({
          row: var_core_value_sig206A[ox3ab108(0x292)] + var_core_value_sig983D + var_core_value_sigF64A,
          col: var_core_value_sig206A[ox3ab108(0x1a4)]
        }, var_core_value_sig6086, !0x1, !0x1),
        var_core_value_sigA790 = F({
          row: var_core_value_sig206A[ox3ab108(0x292)] + var_core_value_sig983D + var_core_value_sigF64A + var_core_value_sig9A03,
          col: var_core_value_sig206A[ox3ab108(0x1a4)]
        }, var_core_value_sigAED2, !0x1, !0x0),
        var_core_value_sig9A5E = F({
          row: var_core_value_sig206A[ox3ab108(0x292)] + var_core_value_sig983D + var_core_value_sigF64A,
          col: var_core_value_sig206A[ox3ab108(0x1a4)] + var_core_value_sig3363
        }, var_core_value_sig3516, !0x1, !0x0),
        var_core_value_sig01B9 = F({
          row: var_core_value_sig206A[ox3ab108(0x292)] + var_core_value_sig983D + var_core_value_sigF64A + var_core_value_sig9A03,
          col: var_core_value_sig206A[ox3ab108(0x1a4)] + var_core_value_sig3363
        }, var_core_value_sigCDCD, !0x1, !0x1);
      var_core_value_sig39C7[ox3ab108(0x4ac)] = {
        rowRanges: var_core_value_sig133B(var_core_value_sigA790),
        colRanges: var_core_value_sig133B(var_core_value_sig9A5E),
        cornerRanges: var_core_value_sig133B(var_core_value_sig25EC),
        dataRanges: var_core_value_sig133B(var_core_value_sig01B9),
        pageRanges: var_core_value_sig133B(var_core_value_sig69B8)
      }, var_core_value_sig39C7[ox3ab108(0x23e)] = var_core_value_sig1E84;
      let var_core_value_sigD6A9 = (var_core_value_sig913A = this[ox3ab108(0x1ec)][ox3ab108(0x2a4)](var_core_value_sig82DD, t[ox3ab108(0x2b3)][ox3ab108(0x333)])) == null ? void 0x0 : var_core_value_sig913A["getDateSystem"](),
        {
          valueMatrix: var_core_value_sig0FCF,
          rowInfo: var_core_value_sigCF96,
          colInfo: var_core_value_sigC4E9,
          cornerInfo: var_core_value_sigF612,
          rowHeaderMap: var_core_value_sigAA6C,
          colHeaderMap: var_core_value_sig8BFA
        } = A(this[ox3ab108(0x483)], var_core_value_sigA35B, var_core_value_sigB86C, this[ox3ab108(0x32d)], var_core_value_sigA022, var_core_value_sigD6A9);
      return var_core_value_sig39C7[ox3ab108(0x440)] = {
        rowInfo: var_core_value_sigCF96,
        colInfo: var_core_value_sigC4E9,
        cornerInfo: var_core_value_sigF612
      }, var_core_value_sig39C7[ox3ab108(0x4a3)] = {
        rowHeaderMap: var_core_value_sigAA6C,
        colHeaderMap: var_core_value_sig8BFA
      }, var_core_value_sig0FCF[ox3ab108(0x231)]((var_core_value_sig5E16, var_core_value_sig09F3) => {
        const var_core_value_sig4592 = ox3ab108;
        Object[var_core_value_sig4592(0x2a8)](var_core_value_sig09F3)[var_core_value_sig4592(0x231)](var_core_value_sigC6E5 => {
          const var_core_value_sigCEFB = var_core_value_sig4592;
          let var_core_value_sig1537 = +var_core_value_sigC6E5,
            var_core_value_sigE4C6 = var_core_value_sig0FCF[var_core_value_sigCEFB(0x197)](var_core_value_sig5E16, var_core_value_sig1537);
          var_core_value_sig9904[var_core_value_sigCEFB(0x300)](var_core_value_sig5E16, var_core_value_sig1537, var_core_value_sigE4C6);
        });
      }), var_core_value_sig8B9C && this[ox3ab108(0x34b)][ox3ab108(0x37c)]({
        unitId: var_core_value_sig82DD,
        subUnitId: var_core_value_sigAAC7,
        valueMatrix: var_core_value_sig9904,
        rangesCache: var_core_value_sig39C7[ox3ab108(0x4ac)],
        pivotTableId: var_core_value_sig1999,
        type: var_core_value_sig4493["type"]
      }), this[ox3ab108(0x26e)][ox3ab108(0x34a)](var_core_value_sig82DD, var_core_value_sigAAC7, var_core_value_sig1999, var_core_value_sig9904, var_core_value_sig39C7[ox3ab108(0x4ac)]), this[ox3ab108(0x3a5)][ox3ab108(0x365)](var_core_value_sig82DD, var_core_value_sigAAC7, I, this[ox3ab108(0x393)](var_core_value_sig39C7[ox3ab108(0x4ac)], var_core_value_sig1999)), {
        rangeCache: var_core_value_sig39C7[ox3ab108(0x4ac)],
        matrix: var_core_value_sig9904
      };
    }
  }
  ["_updateRenderEmptyCache"](var_core_value_sig991D, var_core_value_sig3E9C, var_core_value_sig7835, var_core_value_sig1257, var_core_value_sig97E2) {
    let {
        unitId: var_core_value_sigBFA3,
        subUnitId: var_core_value_sig6663,
        pivotTableId: var_core_value_sigB250
      } = var_core_value_sig991D,
      var_core_value_sig4EAB = {
        filter: this["_localeService"]["t"](oxb29fa0(0x299)),
        row: this[oxb29fa0(0x2b0)]["t"](oxb29fa0(0x243)),
        column: this["_localeService"]["t"]("sheets-pivot.emptyPivot.column"),
        values: this[oxb29fa0(0x2b0)]["t"](oxb29fa0(0x45c))
      },
      var_core_value_sig2FD0 = this["_localeService"]["getDirection"](),
      {
        matrixCache: var_core_value_sig035C,
        rangesCache: var_core_value_sigA7F0
      } = q(var_core_value_sig4EAB, var_core_value_sig7835, var_core_value_sig2FD0);
    return var_core_value_sig035C[oxb29fa0(0x1e5)]((var_core_value_sig236B, var_core_value_sig1951, var_core_value_sigFEA0) => {
      const var_core_value_sig931A = oxb29fa0;
      var_core_value_sig3E9C[var_core_value_sig931A(0x300)](var_core_value_sig236B, var_core_value_sig1951, var_core_value_sigFEA0);
    }), var_core_value_sig1257[oxb29fa0(0x4ac)] = var_core_value_sigA7F0, var_core_value_sig1257[oxb29fa0(0x23e)] = {
      startColumn: var_core_value_sig7835[oxb29fa0(0x1a4)],
      endColumn: var_core_value_sig7835[oxb29fa0(0x1a4)] + 0x6 - 0x1,
      direction: var_core_value_sig2FD0
    }, var_core_value_sig97E2 && this[oxb29fa0(0x34b)][oxb29fa0(0x37c)]({
      unitId: var_core_value_sigBFA3,
      subUnitId: var_core_value_sig6663,
      valueMatrix: var_core_value_sig3E9C,
      rangesCache: var_core_value_sigA7F0,
      pivotTableId: var_core_value_sigB250,
      type: var_core_value_sig991D["type"],
      isEmpty: !0x0
    }), this[oxb29fa0(0x26e)]["updateViewInfo"](var_core_value_sigBFA3, var_core_value_sig6663, var_core_value_sigB250, var_core_value_sig3E9C, var_core_value_sigA7F0), this[oxb29fa0(0x3a5)][oxb29fa0(0x365)](var_core_value_sigBFA3, var_core_value_sig6663, I, this[oxb29fa0(0x393)](var_core_value_sigA7F0, var_core_value_sigB250)), {
      rangeCache: var_core_value_sig1257["rangesInfo"],
      matrix: var_core_value_sig3E9C
    };
  }
  ["_createExclusiveRange"](var_core_value_sig6AE2, var_core_value_sigFD17) {
    let var_core_value_sigA5E0 = [],
      var_core_value_sigC38F = Ce(var_core_value_sig6AE2);
    for (let var_core_value_sigEE7D of var_core_value_sigC38F) var_core_value_sigA5E0[ox3854a7(0x19f)]({
      groupId: var_core_value_sigFD17,
      range: var_core_value_sigEE7D
    });
    return var_core_value_sigA5E0;
  }
  ["clearRenderCache"](var_core_value_sigFAFE) {
    this["_clearRenderCacheData"](var_core_value_sigFAFE);
    let {
      pivotTableId: var_core_value_sig2B86,
      unitId: var_core_value_sig8873,
      subUnitId: var_core_value_sigB9C5
    } = var_core_value_sigFAFE;
    if (!var_core_value_sig2B86 || !var_core_value_sig8873 || !var_core_value_sigB9C5) return;
    let var_core_value_sig511D = this[ox3fd51d(0x3d5)](var_core_value_sig8873, var_core_value_sigB9C5);
    this[ox3fd51d(0x34b)]["next"]({
      unitId: var_core_value_sig8873,
      subUnitId: var_core_value_sigB9C5,
      valueMatrix: var_core_value_sig511D,
      pivotTableId: var_core_value_sig2B86,
      rangesCache: void 0x0,
      type: var_core_value_sigFAFE[ox3fd51d(0x3dd)]
    });
  }
  ["_clearRenderCacheData"](var_core_value_sig1610) {
    var var_core_value_sig23AB, var_core_value_sigA15D;
    let {
      pivotTableId: var_core_value_sig7E90,
      unitId: var_core_value_sig03F7,
      subUnitId: var_core_value_sig756F
    } = var_core_value_sig1610;
    if (!var_core_value_sig7E90 || !var_core_value_sig03F7 || !var_core_value_sig756F) return;
    let var_core_value_sig0DB1 = this[ox959035(0x3d5)](var_core_value_sig03F7, var_core_value_sig756F),
      var_core_value_sig4950 = (var_core_value_sig23AB = this["_pivotRenderInfoCache"][ox959035(0x345)](var_core_value_sig03F7)) == null || (var_core_value_sig23AB = var_core_value_sig23AB["get"](var_core_value_sig756F)) == null ? void 0x0 : var_core_value_sig23AB["get"](var_core_value_sig7E90);
    if (var_core_value_sig4950 != null && var_core_value_sig4950[ox959035(0x4ac)]) {
      for (let var_core_value_sigC5C4 of Object[ox959035(0x2a8)](var_core_value_sig4950["rangesInfo"])) var_core_value_sig4950[ox959035(0x4ac)][var_core_value_sigC5C4][ox959035(0x231)](var_core_value_sig4313 => {
        const var_core_value_sigFC87 = ox959035;
        for (let var_core_value_sig9989 = var_core_value_sig4313[var_core_value_sigFC87(0x3f1)]; var_core_value_sig9989 <= var_core_value_sig4313[var_core_value_sigFC87(0x150)]; var_core_value_sig9989++) for (let var_core_value_sig4632 = var_core_value_sig4313["startColumn"]; var_core_value_sig4632 <= var_core_value_sig4313[var_core_value_sigFC87(0x2bc)]; var_core_value_sig4632++) var_core_value_sig0DB1["realDeleteValue"](var_core_value_sig9989, var_core_value_sig4632);
      });
    }
    if (var_core_value_sig4950) {
      var var_core_value_sig4424;
      (var_core_value_sig4424 = this[ox959035(0x1c8)][ox959035(0x345)](var_core_value_sig03F7)) == null || (var_core_value_sig4424 = var_core_value_sig4424[ox959035(0x345)](var_core_value_sig756F)) == null || var_core_value_sig4424[ox959035(0x216)](var_core_value_sig7E90);
    }
    (var_core_value_sigA15D = this[ox959035(0x227)][ox959035(0x345)](var_core_value_sig03F7)) == null || (var_core_value_sigA15D = var_core_value_sigA15D[ox959035(0x345)](var_core_value_sig756F)) == null || var_core_value_sigA15D[ox959035(0x216)](var_core_value_sig7E90), this[ox959035(0x3a5)]["clearExclusiveRangesByGroupId"](var_core_value_sig03F7, var_core_value_sig756F, I, var_core_value_sig7E90);
  }
  ["_ensurePivotItemRenderInfoCache"](var_core_value_sig57E8, var_core_value_sig76B6, var_core_value_sig89BC) {
    var var_core_value_sig2191, var_core_value_sig3B2E;
    if (this[ox2849b7(0x1c8)][ox2849b7(0x442)](var_core_value_sig57E8) || this[ox2849b7(0x1c8)][ox2849b7(0x2d0)](var_core_value_sig57E8, new Map()), !((var_core_value_sig2191 = this["_pivotRenderInfoCache"][ox2849b7(0x345)](var_core_value_sig57E8)) != null && var_core_value_sig2191[ox2849b7(0x442)](var_core_value_sig76B6))) {
      var var_core_value_sig5A9A;
      (var_core_value_sig5A9A = this["_pivotRenderInfoCache"][ox2849b7(0x345)](var_core_value_sig57E8)) == null || var_core_value_sig5A9A[ox2849b7(0x2d0)](var_core_value_sig76B6, new Map());
    }
    if (!((var_core_value_sig3B2E = this[ox2849b7(0x1c8)][ox2849b7(0x345)](var_core_value_sig57E8)) != null && (var_core_value_sig3B2E = var_core_value_sig3B2E[ox2849b7(0x345)](var_core_value_sig76B6)) != null && var_core_value_sig3B2E["has"](var_core_value_sig89BC))) {
      var var_core_value_sigB524;
      (var_core_value_sigB524 = this[ox2849b7(0x1c8)][ox2849b7(0x345)](var_core_value_sig57E8)) == null || (var_core_value_sigB524 = var_core_value_sigB524[ox2849b7(0x345)](var_core_value_sig76B6)) == null || var_core_value_sigB524[ox2849b7(0x2d0)](var_core_value_sig89BC, {});
    }
    return this["_pivotRenderInfoCache"]["get"](var_core_value_sig57E8)[ox2849b7(0x345)](var_core_value_sig76B6)[ox2849b7(0x345)](var_core_value_sig89BC);
  }
  ["_ensurePivotItemRenderValueMatrixCache"](var_core_value_sig8CFB, var_core_value_sigB52C) {
    var var_core_value_sigA4B8;
    if (this[ox349a68(0x140)][ox349a68(0x442)](var_core_value_sig8CFB) || this[ox349a68(0x140)][ox349a68(0x2d0)](var_core_value_sig8CFB, new Map()), !((var_core_value_sigA4B8 = this[ox349a68(0x140)][ox349a68(0x345)](var_core_value_sig8CFB)) != null && var_core_value_sigA4B8[ox349a68(0x442)](var_core_value_sigB52C))) {
      var var_core_value_sigFF9C;
      (var_core_value_sigFF9C = this[ox349a68(0x140)][ox349a68(0x345)](var_core_value_sig8CFB)) == null || var_core_value_sigFF9C[ox349a68(0x2d0)](var_core_value_sigB52C, new t[ox349a68(0x38b)]());
    }
    return this[ox349a68(0x140)][ox349a68(0x345)](var_core_value_sig8CFB)[ox349a68(0x345)](var_core_value_sigB52C);
  }
  ["_ensurePivotViewCache"](var_core_value_sig278D, var_core_value_sigC0FE) {
    let var_core_value_sigDD22 = this[ox243331(0x227)]["get"](var_core_value_sig278D);
    var_core_value_sigDD22 || (var_core_value_sigDD22 = new Map(), this["_pivotViewCache"]["set"](var_core_value_sig278D, var_core_value_sigDD22));
    let var_core_value_sig2D35 = var_core_value_sigDD22[ox243331(0x345)](var_core_value_sigC0FE);
    return var_core_value_sig2D35 || (var_core_value_sig2D35 = new Map(), var_core_value_sigDD22[ox243331(0x2d0)](var_core_value_sigC0FE, var_core_value_sig2D35)), var_core_value_sig2D35;
  }
  ["getPivotTableCellData"](var_core_value_sig7A4B, var_core_value_sigE50A, var_core_value_sigC8AC, var_core_value_sig8E63) {
    var var_core_value_sig300D;
    let var_core_value_sig520B = (var_core_value_sig300D = this["_pivotRenderValueMatrixCache"][ox167dd3(0x345)](var_core_value_sig7A4B)) == null || (var_core_value_sig300D = var_core_value_sig300D["get"](var_core_value_sigE50A)) == null ? void 0x0 : var_core_value_sig300D[ox167dd3(0x197)](var_core_value_sigC8AC, var_core_value_sig8E63);
    if (var_core_value_sig520B != null) return var_core_value_sig520B;
  }
  ["getPivotTableIdByCell"](var_core_value_sigFE26, var_core_value_sig1019, var_core_value_sig32AB, var_core_value_sig72BE) {
    var var_core_value_sig3E4A;
    let var_core_value_sig3171 = (0x0, t["cellToRange"])(var_core_value_sig32AB, var_core_value_sig72BE),
      var_core_value_sigEBC4 = (var_core_value_sig3E4A = this[ox309729(0x1c8)]["get"](var_core_value_sigFE26)) == null ? void 0x0 : var_core_value_sig3E4A[ox309729(0x345)](var_core_value_sig1019);
    if (var_core_value_sigEBC4) return Array["from"](var_core_value_sigEBC4[ox309729(0x2a8)]())[ox309729(0x372)](var_core_value_sig3585 => {
      const var_core_value_sig31A8 = ox309729;
      let var_core_value_sigA4DA = var_core_value_sigEBC4[var_core_value_sig31A8(0x345)](var_core_value_sig3585),
        var_core_value_sig6FC0 = var_core_value_sigA4DA == null ? void 0x0 : var_core_value_sigA4DA[var_core_value_sig31A8(0x4ac)];
      return var_core_value_sig6FC0 ? Object[var_core_value_sig31A8(0x2a8)](var_core_value_sig6FC0)[var_core_value_sig31A8(0x26b)](var_core_value_sig1617 => var_core_value_sig6FC0[var_core_value_sig1617][var_core_value_sig31A8(0x26b)](var_core_value_sig156F => t["Rectangle"][var_core_value_sig31A8(0x2e3)](var_core_value_sig156F, var_core_value_sig3171))) : !0x1;
    });
  }
  ["getIntersectsPivotTable"](var_core_value_sig788B, var_core_value_sig9A80, var_core_value_sig7C69) {
    var var_core_value_sig01EF;
    let var_core_value_sig3603 = (var_core_value_sig01EF = this[oxde5d0f(0x1c8)][oxde5d0f(0x345)](var_core_value_sig788B)) == null ? void 0x0 : var_core_value_sig01EF[oxde5d0f(0x345)](var_core_value_sig9A80),
      var_core_value_sigC163 = [];
    return var_core_value_sig3603 && Array[oxde5d0f(0x144)](var_core_value_sig3603["keys"]())[oxde5d0f(0x231)](var_core_value_sig6217 => {
      const var_core_value_sigB805 = oxde5d0f;
      let var_core_value_sig4FAE = var_core_value_sig3603[var_core_value_sigB805(0x345)](var_core_value_sig6217),
        var_core_value_sig1FCC = var_core_value_sig4FAE == null ? void 0x0 : var_core_value_sig4FAE[var_core_value_sigB805(0x4ac)];
      if (var_core_value_sig1FCC) for (let var_core_value_sig4169 of Object["values"](var_core_value_sig1FCC)) {
        let var_core_value_sigDD51 = !0x1;
        for (let var_core_value_sig698E of var_core_value_sig4169) if (t[var_core_value_sigB805(0x3e8)][var_core_value_sigB805(0x1a3)](var_core_value_sig698E, var_core_value_sig7C69)) {
          var_core_value_sigC163[var_core_value_sigB805(0x19f)](var_core_value_sig6217), var_core_value_sigDD51 = !0x0;
          break;
        }
        if (var_core_value_sigDD51) break;
      }
    }), var_core_value_sigC163;
  }
  ["getSubUnitPivotMatrix"](var_core_value_sigF5F3, var_core_value_sig5E69) {
    var var_core_value_sig7B39;
    return ((var_core_value_sig7B39 = this[ox11a357(0x140)][ox11a357(0x345)](var_core_value_sigF5F3)) == null ? void 0x0 : var_core_value_sig7B39[ox11a357(0x345)](var_core_value_sig5E69)) ?? new t["ObjectMatrix"]();
  }
  ["getSubUnitPivotRenderCache"](var_core_value_sigDCAB, var_core_value_sigF569) {
    var var_core_value_sig2A9F;
    return (var_core_value_sig2A9F = this["_pivotRenderInfoCache"][ox11e053(0x345)](var_core_value_sigDCAB)) == null ? void 0x0 : var_core_value_sig2A9F["get"](var_core_value_sigF569);
  }
  ["getPivotItemRenderInfoCache"](var_core_value_sigB14A, var_core_value_sig4401, var_core_value_sig4D6A) {
    var var_core_value_sigEF80;
    return (var_core_value_sigEF80 = this[ox374d0a(0x1c8)][ox374d0a(0x345)](var_core_value_sigB14A)) == null || (var_core_value_sigEF80 = var_core_value_sigEF80[ox374d0a(0x345)](var_core_value_sig4401)) == null ? void 0x0 : var_core_value_sigEF80["get"](var_core_value_sig4D6A);
  }
  ["deleteUnitId"](var_core_value_sig526D) {
    this[ox58b09c(0x1c8)][ox58b09c(0x216)](var_core_value_sig526D), this[ox58b09c(0x140)][ox58b09c(0x216)](var_core_value_sig526D), this[ox58b09c(0x227)][ox58b09c(0x216)](var_core_value_sig526D);
  }
  ["markDirty"](var_core_value_sigD78B, var_core_value_sigCB8C) {
    this[oxc35bc7(0x406)][oxc35bc7(0x37c)]({
      unitId: var_core_value_sigD78B,
      subUnitId: var_core_value_sigCB8C
    });
  }
};
X = U([H(0x0, (0x0, t["Inject"])(t["LocaleService"])), H(0x1, (0x0, t["Inject"])(t["Injector"])), H(0x2, (0x0, t["Inject"])(Y)), H(0x3, (0x0, t["Inject"])(t["IUniverInstanceService"])), H(0x4, (0x0, t["Inject"])(r["IExclusiveRangeService"]))], X);
const Ye = new Set([e["PivotCellStyleTypeEnum"]["FilterAll"], e["PivotCellStyleTypeEnum"]["FilterPartial"], e["PivotCellStyleTypeEnum"]["FilterSingle"], e["PivotCellStyleTypeEnum"]["FilteredSortNone"], e["PivotCellStyleTypeEnum"]["FilteredSortAsc"], e["PivotCellStyleTypeEnum"]["FilteredSortDesc"], e["PivotCellStyleTypeEnum"]["FilterNoneSortNone"], e["PivotCellStyleTypeEnum"]["FilterNoneSortAsc"], e["PivotCellStyleTypeEnum"]["FilterNoneSortDesc"]]);
let Z = class extends t["Disposable"] {
  constructor(var_core_value_sigD217, var_core_value_sigEB0F, var_core_value_sigDC44) {
    super(), this[ox578eee(0x17f)] = var_core_value_sigD217, this[ox578eee(0x307)] = var_core_value_sigEB0F, this["_localeService"] = var_core_value_sigDC44, V(this, ox578eee(0x49b), new t[ox578eee(0x193)]({
      PIVOT_PERFORM_CHECK: R
    })), V(this, "interceptor", new t[ox578eee(0x3bb)]({
      PIVOT_MUTATION_GENERATE: ne
    })), this[ox578eee(0x48b)]();
  }
  ["_init"]() {
    this["_initViewModelBySheetInterceptor"]();
  }
  ["getPivotPerformCheck"](var_core_value_sigDEFC) {
    return this[ox55ec7a(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x1, var_core_value_sigDEFC);
  }
  ["_initViewModelBySheetInterceptor"]() {
    this[ox2d075a(0x1e7)](this[ox2d075a(0x17f)][ox2d075a(0x260)](r[ox2d075a(0x3a8)][ox2d075a(0x447)], {
      priority: 0xc8,
      effect: t[ox2d075a(0x40c)][ox2d075a(0x1df)] | t["InterceptorEffectEnum"][ox2d075a(0x4ad)],
      handler: (var_core_value_sigB7F9, var_core_value_sigB1A2, var_core_value_sig526D1) => {
        const var_core_value_sigBDB5 = ox2d075a;
        let {
            row: var_core_value_sig59CE,
            col: var_core_value_sig3AD7,
            unitId: var_core_value_sig04E4,
            subUnitId: var_core_value_sigD8F0,
            workbook: var_core_value_sig1475
          } = var_core_value_sigB1A2,
          var_core_value_sig08B7 = this[var_core_value_sigBDB5(0x307)][var_core_value_sigBDB5(0x1dc)](var_core_value_sig04E4, var_core_value_sigD8F0, var_core_value_sig59CE, var_core_value_sig3AD7);
        if (!var_core_value_sig08B7) return var_core_value_sig526D1(var_core_value_sigB7F9);
        let var_core_value_sig2008 = {
          ...var_core_value_sigB7F9
        };
        (var_core_value_sig08B7["v"] || var_core_value_sig08B7["v"] === 0x0) && (var_core_value_sig2008["v"] = var_core_value_sig08B7["v"]), var_core_value_sig08B7["t"] && (var_core_value_sig2008["t"] = var_core_value_sig08B7["t"]);
        let var_core_value_sig496B = (typeof (var_core_value_sigB7F9 == null ? void 0x0 : var_core_value_sigB7F9["s"]) == var_core_value_sigBDB5(0x458) ? var_core_value_sig1475[var_core_value_sigBDB5(0x439)]()[var_core_value_sigBDB5(0x345)](var_core_value_sigB7F9 == null ? void 0x0 : var_core_value_sigB7F9["s"]) : var_core_value_sigB7F9 == null ? void 0x0 : var_core_value_sigB7F9["s"]) || {},
          var_core_value_sig7161 = var_core_value_sig1475[var_core_value_sigBDB5(0x439)]()[var_core_value_sigBDB5(0x345)](var_core_value_sig08B7["s"]),
          var_core_value_sig2AB8 = {
            ...var_core_value_sig7161,
            ...var_core_value_sig496B
          };
        var_core_value_sig7161 != null && var_core_value_sig7161["n"] && (var_core_value_sig2AB8["n"] = var_core_value_sig7161["n"]);
        let var_core_value_sig3FCF = this[var_core_value_sigBDB5(0x2b0)]["getDirection"]();
        return var_core_value_sig3FCF === var_core_value_sigBDB5(0x30b) && var_core_value_sig08B7[var_core_value_sigBDB5(0x424)] && Ye[var_core_value_sigBDB5(0x442)](var_core_value_sig08B7[var_core_value_sigBDB5(0x424)]) && (var_core_value_sig2AB8["ht"] = t[var_core_value_sigBDB5(0x1d1)]["RIGHT"], var_core_value_sig2008[var_core_value_sigBDB5(0x27a)] = {
          ...var_core_value_sig2008[var_core_value_sigBDB5(0x27a)],
          leftOffset: 0x10
        }), var_core_value_sig2008["s"] = var_core_value_sig1475[var_core_value_sigBDB5(0x439)]()[var_core_value_sigBDB5(0x300)](var_core_value_sig2AB8), (var_core_value_sig08B7[var_core_value_sigBDB5(0x424)] === e[var_core_value_sigBDB5(0x2e2)][var_core_value_sigBDB5(0x245)] || var_core_value_sig08B7[var_core_value_sigBDB5(0x424)] === e[var_core_value_sigBDB5(0x2e2)][var_core_value_sigBDB5(0x334)]) && (var_core_value_sig2008["fontRenderExtension"] = {}, var_core_value_sig3FCF === var_core_value_sigBDB5(0x30b) ? var_core_value_sig2008[var_core_value_sigBDB5(0x27a)][var_core_value_sigBDB5(0x181)] = 0x10 : var_core_value_sig2008[var_core_value_sigBDB5(0x27a)]["leftOffset"] = 0x10), var_core_value_sig526D1(var_core_value_sig2008);
      }
    }));
  }
};
Z = U([H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])), H(0x1, (0x0, t["Inject"])(X)), H(0x2, (0x0, t["Inject"])(t["LocaleService"]))], Z);
const Xe = {
    id: "sheet.mutation.add-group-collection",
    type: t["CommandType"]["MUTATION"],
    handler: (var_core_value_sig9640, var_core_value_sig34AB) => {
      if (!var_core_value_sig34AB) return !0x1;
      if (var_core_value_sig9640[ox52ebfa(0x345)](t["IConfigService"])[ox52ebfa(0x3c0)](ox52ebfa(0x285))) return !0x0;
      let {
          pivotTableId: var_core_value_sig0BE5,
          fieldJSON: var_core_value_sig2F9D,
          unitId: var_core_value_sig9511,
          subUnitId: var_core_value_sigAFDD
        } = var_core_value_sig34AB,
        var_core_value_sig431B,
        {
          dataFieldType: var_core_value_sig3073,
          id: var_core_value_sig4C99,
          name: var_core_value_sigDDD2,
          hexCode: var_core_value_sig6D5F,
          originalFieldId: var_core_value_sigB80D
        } = var_core_value_sig2F9D;
      if (var_core_value_sig3073 === e[ox52ebfa(0x1f3)][ox52ebfa(0x380)] && (var_core_value_sig431B = new e[ox52ebfa(0x257)](var_core_value_sig4C99, var_core_value_sigDDD2, var_core_value_sig6D5F, var_core_value_sigB80D, ox52ebfa(0x40b) in var_core_value_sig2F9D ? var_core_value_sig2F9D[ox52ebfa(0x40b)] : void 0x0)), !var_core_value_sig431B) return !0x1;
      let var_core_value_sigE0A2 = var_core_value_sig9640["get"](K),
        var_core_value_sig8F71 = var_core_value_sigE0A2[ox52ebfa(0x430)](var_core_value_sig9511),
        var_core_value_sig9016 = var_core_value_sig8F71["getCollection"](var_core_value_sig0BE5);
      var_core_value_sig8F71["addDataFieldWithoutUnitInfo"](var_core_value_sig431B), var_core_value_sig9016[ox52ebfa(0x4bf)](var_core_value_sig431B[ox52ebfa(0x1b6)](), var_core_value_sig431B[ox52ebfa(0x1f7)]());
      let var_core_value_sigB043 = var_core_value_sig9016[ox52ebfa(0x1f8)](var_core_value_sig431B[ox52ebfa(0x415)]());
      if (var_core_value_sigB043) {
        let var_core_value_sigE842 = var_core_value_sig9640[ox52ebfa(0x345)](t["IUniverInstanceService"])[ox52ebfa(0x2a4)](var_core_value_sig9511, t[ox52ebfa(0x2b3)]["UNIVER_SHEET"]);
        Ge(var_core_value_sigE842 == null ? void 0x0 : var_core_value_sigE842[ox52ebfa(0x475)]()), var_core_value_sig431B[ox52ebfa(0x4b1)](var_core_value_sigB043);
      }
      let var_core_value_sig554B = var_core_value_sigE0A2[ox52ebfa(0x2e6)](var_core_value_sig9511, var_core_value_sigAFDD, var_core_value_sig0BE5);
      return var_core_value_sigE0A2["addDirtyPivotTable"]({
        unitId: var_core_value_sig9511,
        subUnitId: var_core_value_sigAFDD,
        token: var_core_value_sig0BE5,
        type: "set",
        pivotConfig: var_core_value_sig554B
      }), !0x0;
    }
  },
  Ze = {
    id: "sheet.mutation.remove-group-collection",
    type: t["CommandType"]["MUTATION"],
    handler: (var_core_value_sig33F0, var_core_value_sigC9BF) => {
      if (!var_core_value_sigC9BF) return !0x1;
      if (var_core_value_sig33F0[ox5c335a(0x345)](t["IConfigService"])[ox5c335a(0x3c0)](ox5c335a(0x285))) return !0x0;
      let {
          pivotTableId: var_core_value_sigE1AD,
          dataFieldId: var_core_value_sig90FF,
          unitId: var_core_value_sigA7F6,
          subUnitId: var_core_value_sig5A0F
        } = var_core_value_sigC9BF,
        var_core_value_sigCDF5 = var_core_value_sig33F0[ox5c335a(0x345)](K),
        var_core_value_sig3802 = var_core_value_sigCDF5[ox5c335a(0x430)](var_core_value_sigA7F6);
      var_core_value_sig3802[ox5c335a(0x3f3)](var_core_value_sigE1AD)[ox5c335a(0x18e)](var_core_value_sig90FF);
      let var_core_value_sigB642 = !0x0;
      for (let var_core_value_sigA77A in var_core_value_sig3802["collections"]) if (var_core_value_sig3802[ox5c335a(0x1b9)][var_core_value_sigA77A]["getFieldIds"]()[ox5c335a(0x238)](var_core_value_sig90FF)) {
        var_core_value_sigB642 = !0x1;
        break;
      }
      var_core_value_sigB642 && var_core_value_sig3802[ox5c335a(0x1ff)](var_core_value_sig90FF);
      let var_core_value_sig9026 = var_core_value_sigCDF5[ox5c335a(0x2e6)](var_core_value_sigA7F6, var_core_value_sig5A0F, var_core_value_sigE1AD);
      return var_core_value_sigCDF5[ox5c335a(0x3b0)]({
        unitId: var_core_value_sigA7F6,
        subUnitId: var_core_value_sig5A0F,
        token: var_core_value_sigE1AD,
        type: "set",
        pivotConfig: var_core_value_sig9026
      }), !0x0;
    }
  };
function Qe(var_core_value_sigDCD6, var_core_value_sig048B) {
  switch (var_core_value_sig048B) {
    case e["PivotTableFiledAreaEnum"][ox1533b4(0x1df)]:
      return var_core_value_sigDCD6[ox1533b4(0x185)];
    case e[ox1533b4(0x200)]["Filter"]:
      return var_core_value_sigDCD6["filterFields"];
    case e[ox1533b4(0x200)][ox1533b4(0x289)]:
      return var_core_value_sigDCD6[ox1533b4(0x39f)];
    case e[ox1533b4(0x200)][ox1533b4(0x374)]:
      return var_core_value_sigDCD6["columnFields"];
    default:
      return [];
  }
}
function $e(var_core_value_sig1334, var_core_value_sig2605) {
  return var_core_value_sig1334[ox503f79(0x336)][var_core_value_sig2605] || var_core_value_sig1334["dimension"][var_core_value_sig2605];
}
function et(var_core_value_sig5F20, var_core_value_sig019C) {
  let {
    area: var_core_value_sigB296,
    fieldJson: var_core_value_sig7949,
    index: var_core_value_sig2DD9
  } = var_core_value_sig019C;
  var_core_value_sigB296 === e[ox46f491(0x200)][ox46f491(0x1df)] ? var_core_value_sig5F20[ox46f491(0x336)][var_core_value_sig7949["id"]] = var_core_value_sig7949 : var_core_value_sig5F20[ox46f491(0x230)][var_core_value_sig7949["id"]] = var_core_value_sig7949, Qe(var_core_value_sig5F20, var_core_value_sigB296)[ox46f491(0x3f6)](var_core_value_sig2DD9, 0x0, var_core_value_sig7949["id"]);
}
function tt(var_core_value_sigCD501, var_core_value_sigD362) {
  let {
    area: var_core_value_sigC433,
    fieldId: var_core_value_sigF543,
    index: var_core_value_sig0806
  } = var_core_value_sigD362;
  var_core_value_sigC433 === e[ox2f7136(0x200)][ox2f7136(0x1df)] ? delete var_core_value_sigCD501[ox2f7136(0x336)][var_core_value_sigF543] : delete var_core_value_sigCD501[ox2f7136(0x230)][var_core_value_sigF543], Qe(var_core_value_sigCD501, var_core_value_sigC433)["splice"](var_core_value_sig0806, 0x1);
}
function nt(var_core_value_sigE224, var_core_value_sig773E) {
  let {
      fieldId: var_core_value_sig83A7,
      name: var_core_value_sigFE18
    } = var_core_value_sig773E,
    var_core_value_sig816B = $e(var_core_value_sigE224, var_core_value_sig83A7);
  var_core_value_sig816B && (var_core_value_sig816B[ox1063f0(0x37f)] = var_core_value_sigFE18);
}
function rt(var_core_value_sigA89B, var_core_value_sig5020) {
  let {
    fieldId: var_core_value_sig8FB1,
    collapse: var_core_value_sig3D4B,
    item: var_core_value_sigCD77
  } = var_core_value_sig5020;
  var_core_value_sigCD77 === void 0x0 ? var_core_value_sigA89B[ox5d526e(0x1ea)][var_core_value_sig8FB1] = var_core_value_sig3D4B : (var_core_value_sigA89B["collapseInfo"][var_core_value_sig8FB1] = var_core_value_sigA89B[ox5d526e(0x1ea)][var_core_value_sig8FB1] || {}, var_core_value_sigA89B[ox5d526e(0x1ea)][var_core_value_sig8FB1][var_core_value_sigCD77] = var_core_value_sig3D4B);
}
function it(var_core_value_sig9F28, var_core_value_sig8A50) {
  let {
      fieldId: var_core_value_sig8AF9,
      format: var_core_value_sigCF441
    } = var_core_value_sig8A50,
    var_core_value_sig020B = $e(var_core_value_sig9F28, var_core_value_sig8AF9);
  var_core_value_sig020B && (var_core_value_sig020B[ox4dd23c(0x1a6)] = var_core_value_sigCF441);
}
function at(var_core_value_sig091A, var_core_value_sigC45A) {
  let {
      fieldId: var_core_value_sig8A05,
      filterInfo: var_core_value_sig431F
    } = var_core_value_sigC45A,
    var_core_value_sig855C = $e(var_core_value_sig091A, var_core_value_sig8A05);
  var_core_value_sig855C && (var_core_value_sig855C[ox46daf5(0x49c)] = var_core_value_sig431F);
}
function ot(var_core_value_sig222E, var_core_value_sig3A07) {
  let {
      fieldId: var_core_value_sigE7EB,
      filterInfo: var_core_value_sig6125,
      index: var_core_value_sig5781
    } = var_core_value_sig3A07,
    var_core_value_sig13AB = var_core_value_sig222E[ox5912cc(0x36a)],
    var_core_value_sig7A4A = var_core_value_sig13AB[ox5912cc(0x22a)](var_core_value_sig0701 => var_core_value_sig0701["fieldId"] === var_core_value_sigE7EB);
  if (var_core_value_sig7A4A !== -0x1 && var_core_value_sig13AB[ox5912cc(0x3f6)](var_core_value_sig7A4A, 0x1), var_core_value_sig6125) {
    let var_core_value_sig5DCA = Math[ox5912cc(0x312)](Math[ox5912cc(0x13b)](var_core_value_sig5781 !== void 0x0 && var_core_value_sig5781 >= 0x0 ? var_core_value_sig5781 : var_core_value_sig7A4A === -0x1 ? var_core_value_sig13AB["length"] : var_core_value_sig7A4A, 0x0), var_core_value_sig13AB["length"]);
    var_core_value_sig13AB[ox5912cc(0x3f6)](var_core_value_sig5DCA, 0x0, {
      fieldId: var_core_value_sigE7EB,
      filterInfo: {
        ...var_core_value_sig6125,
        expected: Array["isArray"](var_core_value_sig6125[ox5912cc(0x19e)]) ? var_core_value_sig6125[ox5912cc(0x19e)][ox5912cc(0x3a3)]() : var_core_value_sig6125["expected"]
      }
    });
  }
}
function st(var_core_value_sigB7E2, var_core_value_sigD477) {
  let {
      fieldId: var_core_value_sig6149,
      subtotalType: var_core_value_sigEB82
    } = var_core_value_sigD477,
    var_core_value_sig843F = $e(var_core_value_sigB7E2, var_core_value_sig6149);
  var_core_value_sig843F && (var_core_value_sig843F[oxededc0(0x41a)] = var_core_value_sigEB82);
}
function ct(var_core_value_sig9FB7, var_core_value_sigB7A4) {
  let {
      fieldId: var_core_value_sig295F,
      oldArea: var_core_value_sigE36B,
      area: var_core_value_sigDA3B,
      oldIndex: var_core_value_sig9E32,
      index: var_core_value_sig26EC
    } = var_core_value_sigB7A4,
    var_core_value_sigF226 = var_core_value_sigE36B !== e["PivotTableFiledAreaEnum"]["Value"] && var_core_value_sigDA3B === e[ox17dfdd(0x200)][ox17dfdd(0x1df)],
    var_core_value_sig4773 = var_core_value_sigE36B === e["PivotTableFiledAreaEnum"][ox17dfdd(0x1df)] && var_core_value_sigDA3B !== e["PivotTableFiledAreaEnum"][ox17dfdd(0x1df)];
  if (var_core_value_sigF226 || var_core_value_sig4773) {
    let var_core_value_sigF1AB = $e(var_core_value_sig9FB7, var_core_value_sig295F);
    var_core_value_sigF1AB && (var_core_value_sigF226 ? (delete var_core_value_sig9FB7["dimension"][var_core_value_sig295F], var_core_value_sig9FB7[ox17dfdd(0x336)][var_core_value_sig295F] = var_core_value_sigF1AB) : (delete var_core_value_sig9FB7[ox17dfdd(0x336)][var_core_value_sig295F], var_core_value_sig9FB7[ox17dfdd(0x230)][var_core_value_sig295F] = var_core_value_sigF1AB));
  }
  let var_core_value_sigB643 = Qe(var_core_value_sig9FB7, var_core_value_sigE36B),
    var_core_value_sigF92F = Qe(var_core_value_sig9FB7, var_core_value_sigDA3B);
  var_core_value_sigB643[ox17dfdd(0x3f6)](var_core_value_sig9E32, 0x1), var_core_value_sigF92F["splice"](var_core_value_sig26EC, 0x0, var_core_value_sig295F);
}
function lt(var_core_value_sig2346, var_core_value_sig579A) {
  let {
    valuePosition: var_core_value_sig7E16,
    index: var_core_value_sigA691
  } = var_core_value_sig579A;
  var_core_value_sig2346[ox186944(0x313)] = var_core_value_sig7E16, var_core_value_sig2346[ox186944(0x3bd)] = var_core_value_sigA691;
}
function ut(var_core_value_sig3C23, var_core_value_sigDAE6) {
  let {
      tableFieldId: var_core_value_sigDD81,
      sourceName: var_core_value_sig3870,
      dataFieldId: var_core_value_sig13D1
    } = var_core_value_sigDAE6,
    var_core_value_sigECFC = $e(var_core_value_sig3C23, var_core_value_sigDD81);
  var_core_value_sigECFC && (var_core_value_sigECFC[ox5e6dfd(0x2cf)] = var_core_value_sig3870, var_core_value_sigECFC["dataFieldId"] = var_core_value_sig13D1);
}
function dt(var_core_value_sig5E62, var_core_value_sig3B89) {
  let {
      fieldId: var_core_value_sig4B55,
      sortInfo: var_core_value_sig9E69
    } = var_core_value_sig3B89,
    var_core_value_sig432A = $e(var_core_value_sig5E62, var_core_value_sig4B55);
  var_core_value_sig432A && (var_core_value_sig432A[ox584238(0x42f)] = var_core_value_sig9E69);
}
function ft(var_core_value_sig3B51, var_core_value_sig542D) {
  let {
      fieldId: var_core_value_sigB225,
      showDataAs: var_core_value_sig8AAB
    } = var_core_value_sig542D,
    var_core_value_sigE82A = var_core_value_sig3B51[ox52429c(0x336)][var_core_value_sigB225];
  var_core_value_sigE82A && (var_core_value_sigE82A[ox52429c(0x4a1)] = {
    ...var_core_value_sig8AAB
  });
}
function pt(var_core_value_sigB2CF, var_core_value_sig5955) {
  let {
    options: var_core_value_sigF829
  } = var_core_value_sig5955;
  var_core_value_sigB2CF[ox52ad1d(0x1ab)] = {
    ...var_core_value_sigB2CF["options"],
    ...var_core_value_sigF829
  };
}
function mt(var_core_value_sig2900, var_core_value_sig51D8) {
  let {
    layout: var_core_value_sig8693
  } = var_core_value_sig51D8;
  var_core_value_sig2900[ox74b00a(0x18d)] = var_core_value_sig8693;
}
const ht = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.add-pivot-field",
    handler(var_core_value_sigAACD, var_core_value_sig895A) {
      if (!var_core_value_sig895A) return !0x1;
      if (var_core_value_sigAACD["get"](t[ox26edac(0x174)])[ox26edac(0x3c0)](ox26edac(0x285))) return !0x0;
      let var_core_value_sigA764 = var_core_value_sigAACD[ox26edac(0x345)](K),
        {
          pivotTableId: var_core_value_sigC3D9,
          fieldJson: var_core_value_sigA6C0,
          area: var_core_value_sigFF70,
          index: var_core_value_sigB469,
          unitId: var_core_value_sig0276,
          subUnitId: var_core_value_sigFA20
        } = var_core_value_sig895A,
        var_core_value_sig2752 = var_core_value_sigA764[ox26edac(0x2fb)](var_core_value_sigC3D9);
      if (!var_core_value_sig2752) return !0x1;
      let var_core_value_sig0E1A;
      var_core_value_sig0E1A = var_core_value_sigFF70 === e[ox26edac(0x200)][ox26edac(0x1df)] ? (0x0, e[ox26edac(0x3ed)])(var_core_value_sigA6C0) : (0x0, e[ox26edac(0x29a)])(var_core_value_sigA6C0), var_core_value_sig2752["addField"](var_core_value_sig0E1A, var_core_value_sigFF70, var_core_value_sigB469), et(var_core_value_sigA764[ox26edac(0x31f)](var_core_value_sig0276, var_core_value_sigFA20, var_core_value_sigC3D9), var_core_value_sig895A);
      let var_core_value_sig6A48 = var_core_value_sigA764[ox26edac(0x2e6)](var_core_value_sig0276, var_core_value_sigFA20, var_core_value_sigC3D9);
      return var_core_value_sigA764[ox26edac(0x3b0)]({
        unitId: var_core_value_sig0276,
        subUnitId: var_core_value_sigFA20,
        token: var_core_value_sigC3D9,
        type: ox26edac(0x2d0),
        pivotConfig: var_core_value_sig6A48
      }), !0x0;
    }
  },
  gt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.remove-pivot-field",
    handler(var_core_value_sig2D2A, var_core_value_sig1D22) {
      if (!var_core_value_sig1D22) return !0x1;
      if (var_core_value_sig2D2A[ox476114(0x345)](t[ox476114(0x174)])["getConfig"](ox476114(0x285))) return !0x0;
      let var_core_value_sig91FE = var_core_value_sig2D2A[ox476114(0x345)](K),
        {
          pivotTableId: var_core_value_sig528C,
          fieldId: var_core_value_sig749D,
          unitId: var_core_value_sig1FB8,
          subUnitId: var_core_value_sig032D
        } = var_core_value_sig1D22,
        var_core_value_sig27FA = var_core_value_sig91FE["getPivotTableInstance"](var_core_value_sig528C);
      if (!var_core_value_sig27FA) return !0x1;
      var_core_value_sig27FA[ox476114(0x177)](var_core_value_sig749D), tt(var_core_value_sig91FE["getPivotTableModelConfig"](var_core_value_sig1FB8, var_core_value_sig032D, var_core_value_sig528C), var_core_value_sig1D22);
      let var_core_value_sig533B = var_core_value_sig91FE[ox476114(0x2e6)](var_core_value_sig1FB8, var_core_value_sig032D, var_core_value_sig528C);
      return var_core_value_sig91FE["addDirtyPivotTable"]({
        unitId: var_core_value_sig1FB8,
        subUnitId: var_core_value_sig032D,
        token: var_core_value_sig528C,
        type: ox476114(0x2d0),
        pivotConfig: var_core_value_sig533B
      }), !0x0;
    }
  },
  _t = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.rename-pivot-field",
    handler(var_core_value_sig6434, var_core_value_sig398A) {
      if (!var_core_value_sig398A) return !0x1;
      if (var_core_value_sig6434[ox173ff0(0x345)](t[ox173ff0(0x174)])[ox173ff0(0x3c0)](ox173ff0(0x285))) return !0x0;
      let var_core_value_sig1760 = var_core_value_sig6434[ox173ff0(0x345)](K),
        {
          unitId: var_core_value_sig7C7A,
          subUnitId: var_core_value_sig78E8,
          pivotTableId: var_core_value_sigF002,
          fieldId: var_core_value_sig715D,
          name: var_core_value_sigEB90
        } = var_core_value_sig398A,
        var_core_value_sig9506 = var_core_value_sig1760["getPivotTableInstance"](var_core_value_sigF002);
      return var_core_value_sig9506 ? (var_core_value_sig9506["renameField"](var_core_value_sig715D, var_core_value_sigEB90), nt(var_core_value_sig1760[ox173ff0(0x31f)](var_core_value_sig7C7A, var_core_value_sig78E8, var_core_value_sigF002), var_core_value_sig398A), var_core_value_sig1760["addDirtyPivotTable"]({
        unitId: var_core_value_sig7C7A,
        subUnitId: var_core_value_sig78E8,
        token: var_core_value_sigF002,
        type: ox173ff0(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  vt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-collapse",
    handler(var_core_value_sigC460, var_core_value_sig00D0) {
      if (!var_core_value_sig00D0) return !0x1;
      if (var_core_value_sigC460["get"](t[oxb40728(0x174)])[oxb40728(0x3c0)](oxb40728(0x285))) return !0x0;
      let var_core_value_sig2880 = var_core_value_sigC460[oxb40728(0x345)](K),
        {
          unitId: var_core_value_sig76AC,
          subUnitId: var_core_value_sigEA39,
          pivotTableId: var_core_value_sig252C,
          fieldId: var_core_value_sig87EA,
          collapse: var_core_value_sig4325,
          item: var_core_value_sigAB8D
        } = var_core_value_sig00D0,
        var_core_value_sig4B86 = var_core_value_sig2880["getPivotTableInstance"](var_core_value_sig252C);
      return var_core_value_sig4B86 ? (var_core_value_sig4B86[oxb40728(0x18c)](var_core_value_sig87EA, var_core_value_sig4325, var_core_value_sigAB8D), rt(var_core_value_sig2880[oxb40728(0x31f)](var_core_value_sig76AC, var_core_value_sigEA39, var_core_value_sig252C), var_core_value_sig00D0), var_core_value_sig2880[oxb40728(0x3b0)]({
        unitId: var_core_value_sig76AC,
        subUnitId: var_core_value_sigEA39,
        token: var_core_value_sig252C,
        type: oxb40728(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  yt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-format",
    handler(var_core_value_sig240E, var_core_value_sigDE46) {
      if (!var_core_value_sigDE46) return !0x1;
      if (var_core_value_sig240E[ox350b85(0x345)](t[ox350b85(0x174)])[ox350b85(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sigF30E = var_core_value_sig240E[ox350b85(0x345)](K),
        {
          unitId: var_core_value_sigA6B6,
          subUnitId: var_core_value_sig1FDB,
          pivotTableId: var_core_value_sig6B7D,
          fieldId: var_core_value_sig0D1B,
          format: var_core_value_sigA5A1
        } = var_core_value_sigDE46,
        var_core_value_sig0C3A = var_core_value_sigF30E[ox350b85(0x2fb)](var_core_value_sig6B7D);
      return var_core_value_sig0C3A ? (var_core_value_sig0C3A[ox350b85(0x311)](var_core_value_sig0D1B, var_core_value_sigA5A1), it(var_core_value_sigF30E["getPivotTableModelConfig"](var_core_value_sigA6B6, var_core_value_sig1FDB, var_core_value_sig6B7D), var_core_value_sigDE46), var_core_value_sigF30E[ox350b85(0x3b0)]({
        unitId: var_core_value_sigA6B6,
        subUnitId: var_core_value_sig1FDB,
        token: var_core_value_sig6B7D,
        type: "set"
      }), !0x0) : !0x1;
    }
  },
  bt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-filter",
    handler(var_core_value_sig5A20, var_core_value_sig4037) {
      if (!var_core_value_sig4037) return !0x1;
      if (var_core_value_sig5A20[ox44b49f(0x345)](t["IConfigService"])[ox44b49f(0x3c0)](ox44b49f(0x285))) return !0x0;
      let var_core_value_sig5F5F = var_core_value_sig5A20[ox44b49f(0x345)](K),
        {
          unitId: var_core_value_sig801E,
          subUnitId: var_core_value_sigD8A7,
          pivotTableId: var_core_value_sig7D2D,
          fieldId: var_core_value_sig5BC4,
          filterInfo: var_core_value_sigE445
        } = var_core_value_sig4037,
        var_core_value_sig5C54 = var_core_value_sig5F5F[ox44b49f(0x2fb)](var_core_value_sig7D2D);
      return var_core_value_sig5C54 ? (var_core_value_sig5C54["setLabelFilterInfo"](var_core_value_sig5BC4, var_core_value_sigE445), at(var_core_value_sig5F5F[ox44b49f(0x31f)](var_core_value_sig801E, var_core_value_sigD8A7, var_core_value_sig7D2D), var_core_value_sig4037), var_core_value_sig5F5F[ox44b49f(0x3b0)]({
        unitId: var_core_value_sig801E,
        subUnitId: var_core_value_sigD8A7,
        token: var_core_value_sig7D2D,
        type: "set"
      }), !0x0) : !0x1;
    }
  },
  xt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-layout",
    handler(var_core_value_sigD167, var_core_value_sig2DA0) {
      if (!var_core_value_sig2DA0) return !0x1;
      if (var_core_value_sigD167[ox3655ea(0x345)](t[ox3655ea(0x174)])[ox3655ea(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sig51DC = var_core_value_sigD167[ox3655ea(0x345)](K),
        {
          unitId: var_core_value_sigEE01,
          subUnitId: var_core_value_sig80BD,
          pivotTableId: var_core_value_sigF6A6,
          layout: var_core_value_sigE59D
        } = var_core_value_sig2DA0,
        var_core_value_sig3D65 = var_core_value_sig51DC[ox3655ea(0x2fb)](var_core_value_sigF6A6);
      return var_core_value_sig3D65 ? (var_core_value_sig3D65[ox3655ea(0x1e0)](var_core_value_sigE59D), mt(var_core_value_sig51DC[ox3655ea(0x31f)](var_core_value_sigEE01, var_core_value_sig80BD, var_core_value_sigF6A6), var_core_value_sig2DA0), var_core_value_sig51DC[ox3655ea(0x3b0)]({
        unitId: var_core_value_sigEE01,
        subUnitId: var_core_value_sig80BD,
        token: var_core_value_sigF6A6,
        type: ox3655ea(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  St = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-option",
    handler(var_core_value_sig4D17, var_core_value_sigE1B9) {
      if (!var_core_value_sigE1B9) return !0x1;
      if (var_core_value_sig4D17[ox209ced(0x345)](t[ox209ced(0x174)])[ox209ced(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sig21BB = var_core_value_sig4D17["get"](K),
        {
          unitId: var_core_value_sig64BA,
          subUnitId: var_core_value_sig975D,
          pivotTableId: var_core_value_sig3C3D,
          options: var_core_value_sigD33D
        } = var_core_value_sigE1B9,
        var_core_value_sig71B9 = var_core_value_sig21BB[ox209ced(0x2fb)](var_core_value_sig3C3D);
      return var_core_value_sig71B9 ? (var_core_value_sig71B9[ox209ced(0x476)](var_core_value_sigD33D), pt(var_core_value_sig21BB["getPivotTableModelConfig"](var_core_value_sig64BA, var_core_value_sig975D, var_core_value_sig3C3D), var_core_value_sigE1B9), var_core_value_sig21BB[ox209ced(0x3b0)]({
        unitId: var_core_value_sig64BA,
        subUnitId: var_core_value_sig975D,
        token: var_core_value_sig3C3D,
        type: "set"
      }), !0x0) : !0x1;
    }
  },
  Ct = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-show-data-as",
    handler(var_core_value_sig248C, var_core_value_sig8DE6) {
      if (!var_core_value_sig8DE6) return !0x1;
      if (var_core_value_sig248C[ox5a080e(0x345)](t["IConfigService"])[ox5a080e(0x3c0)](ox5a080e(0x285))) return !0x0;
      let var_core_value_sig55C6 = var_core_value_sig248C["get"](K),
        {
          unitId: var_core_value_sig2C60,
          subUnitId: var_core_value_sig2914,
          pivotTableId: var_core_value_sig7FD9,
          fieldId: var_core_value_sig7A3D,
          showDataAs: var_core_value_sig7325
        } = var_core_value_sig8DE6,
        var_core_value_sig4C4B = var_core_value_sig55C6[ox5a080e(0x2fb)](var_core_value_sig7FD9),
        var_core_value_sigB11B = var_core_value_sig55C6["getPivotTableModelConfig"](var_core_value_sig2C60, var_core_value_sig2914, var_core_value_sig7FD9);
      return !var_core_value_sig4C4B || !(var_core_value_sigB11B != null && var_core_value_sigB11B[ox5a080e(0x336)][var_core_value_sig7A3D]) ? !0x1 : (var_core_value_sig4C4B["setShowDataAs"](var_core_value_sig7A3D, var_core_value_sig7325), ft(var_core_value_sigB11B, var_core_value_sig8DE6), var_core_value_sig55C6[ox5a080e(0x3b0)]({
        unitId: var_core_value_sig2C60,
        subUnitId: var_core_value_sig2914,
        token: var_core_value_sig7FD9,
        type: ox5a080e(0x2d0)
      }), !0x0);
    }
  },
  wt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-sort-info",
    handler(var_core_value_sig826D, var_core_value_sig949F) {
      if (!var_core_value_sig949F) return !0x1;
      if (var_core_value_sig826D[ox5d7648(0x345)](t["IConfigService"])[ox5d7648(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sig77E0 = var_core_value_sig826D[ox5d7648(0x345)](K),
        {
          unitId: var_core_value_sigD177,
          subUnitId: var_core_value_sig26E6,
          pivotTableId: var_core_value_sig43D5,
          sortInfo: var_core_value_sig132C,
          fieldId: var_core_value_sig469E
        } = var_core_value_sig949F,
        var_core_value_sig3C91 = var_core_value_sig77E0[ox5d7648(0x2fb)](var_core_value_sig43D5);
      return var_core_value_sig3C91 ? (var_core_value_sig3C91[ox5d7648(0x1a2)](var_core_value_sig469E, var_core_value_sig132C), dt(var_core_value_sig77E0[ox5d7648(0x31f)](var_core_value_sigD177, var_core_value_sig26E6, var_core_value_sig43D5), var_core_value_sig949F), var_core_value_sig77E0["addDirtyPivotTable"]({
        unitId: var_core_value_sigD177,
        subUnitId: var_core_value_sig26E6,
        token: var_core_value_sig43D5,
        type: ox5d7648(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  Tt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-field-subtotal-type",
    handler(var_core_value_sig5A6B, var_core_value_sigD8F01) {
      if (!var_core_value_sigD8F01) return !0x1;
      if (var_core_value_sig5A6B["get"](t[ox4fad93(0x174)])[ox4fad93(0x3c0)](ox4fad93(0x285))) return !0x0;
      let var_core_value_sig534A = var_core_value_sig5A6B["get"](K),
        {
          unitId: var_core_value_sigB1E6,
          subUnitId: var_core_value_sig02FE,
          pivotTableId: var_core_value_sigD80D,
          fieldId: var_core_value_sig572B,
          subtotalType: var_core_value_sigB8EA
        } = var_core_value_sigD8F01,
        var_core_value_sig1494 = var_core_value_sig534A[ox4fad93(0x2fb)](var_core_value_sigD80D);
      return var_core_value_sig1494 ? (var_core_value_sig1494[ox4fad93(0x19d)](var_core_value_sig572B, var_core_value_sigB8EA), st(var_core_value_sig534A[ox4fad93(0x31f)](var_core_value_sigB1E6, var_core_value_sig02FE, var_core_value_sigD80D), var_core_value_sigD8F01), var_core_value_sig534A[ox4fad93(0x3b0)]({
        unitId: var_core_value_sigB1E6,
        subUnitId: var_core_value_sig02FE,
        token: var_core_value_sigD80D,
        type: "set"
      }), !0x0) : !0x1;
    }
  },
  Et = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-value-filter",
    handler(var_core_value_sigB5E9, var_core_value_sig0862) {
      if (!var_core_value_sig0862) return !0x1;
      if (var_core_value_sigB5E9[ox1d8f1a(0x345)](t[ox1d8f1a(0x174)])[ox1d8f1a(0x3c0)](ox1d8f1a(0x285))) return !0x0;
      let var_core_value_sig9099 = var_core_value_sigB5E9[ox1d8f1a(0x345)](K),
        {
          unitId: var_core_value_sigC317,
          subUnitId: var_core_value_sig2746,
          pivotTableId: var_core_value_sig71B8,
          fieldId: var_core_value_sigFD40,
          filterInfo: var_core_value_sig152B,
          index: var_core_value_sig0334
        } = var_core_value_sig0862,
        var_core_value_sigE424 = var_core_value_sig9099[ox1d8f1a(0x2fb)](var_core_value_sig71B8),
        var_core_value_sigCDE2 = var_core_value_sig9099[ox1d8f1a(0x31f)](var_core_value_sigC317, var_core_value_sig2746, var_core_value_sig71B8),
        var_core_value_sigD2B0 = !!(var_core_value_sigCDE2 && (var_core_value_sigCDE2[ox1d8f1a(0x39f)][ox1d8f1a(0x238)](var_core_value_sigFD40) || var_core_value_sigCDE2[ox1d8f1a(0x1de)][ox1d8f1a(0x238)](var_core_value_sigFD40)));
      return !var_core_value_sigE424 || !var_core_value_sigCDE2 || !var_core_value_sigD2B0 || var_core_value_sig152B !== void 0x0 && (var_core_value_sig152B[ox1d8f1a(0x3dd)] !== e[ox1d8f1a(0x362)][ox1d8f1a(0x3df)] || !var_core_value_sigCDE2["measure"][var_core_value_sig152B[ox1d8f1a(0x171)]] || !(0x0, e[ox1d8f1a(0x3fe)])(var_core_value_sig152B["operator"])) ? !0x1 : (var_core_value_sigE424["setValueFilterInfo"](var_core_value_sigFD40, var_core_value_sig152B, var_core_value_sig0334), ot(var_core_value_sigCDE2, var_core_value_sig0862), var_core_value_sig9099[ox1d8f1a(0x3b0)]({
        unitId: var_core_value_sigC317,
        subUnitId: var_core_value_sig2746,
        token: var_core_value_sig71B8,
        type: "set"
      }), !0x0);
    }
  },
  Dt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-field-position",
    handler(var_core_value_sig4E8D, var_core_value_sig9675) {
      if (!var_core_value_sig9675) return !0x1;
      if (var_core_value_sig4E8D[ox1ea0d8(0x345)](t[ox1ea0d8(0x174)])[ox1ea0d8(0x3c0)](ox1ea0d8(0x285))) return !0x0;
      let var_core_value_sig24B6 = var_core_value_sig4E8D[ox1ea0d8(0x345)](K),
        {
          unitId: var_core_value_sig283C,
          subUnitId: var_core_value_sig062F,
          pivotTableId: var_core_value_sig96C7,
          area: var_core_value_sig8D50,
          index: var_core_value_sigB5EA,
          fieldId: var_core_value_sigE952
        } = var_core_value_sig9675,
        var_core_value_sigE241 = var_core_value_sig24B6[ox1ea0d8(0x2fb)](var_core_value_sig96C7);
      return var_core_value_sigE241 ? (var_core_value_sigE241[ox1ea0d8(0x35d)](var_core_value_sigE952, var_core_value_sig8D50, var_core_value_sigB5EA), ct(var_core_value_sig24B6[ox1ea0d8(0x31f)](var_core_value_sig283C, var_core_value_sig062F, var_core_value_sig96C7), var_core_value_sig9675), var_core_value_sig24B6[ox1ea0d8(0x3b0)]({
        unitId: var_core_value_sig283C,
        subUnitId: var_core_value_sig062F,
        token: var_core_value_sig96C7,
        type: ox1ea0d8(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  Ot = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-field-source-info",
    handler(var_core_value_sig9C99, var_core_value_sigD135) {
      if (!var_core_value_sigD135) return !0x1;
      if (var_core_value_sig9C99[ox22b2d9(0x345)](t[ox22b2d9(0x174)])[ox22b2d9(0x3c0)](ox22b2d9(0x285))) return !0x0;
      let var_core_value_sig0891 = var_core_value_sig9C99[ox22b2d9(0x345)](K),
        {
          unitId: var_core_value_sigF788,
          subUnitId: var_core_value_sigE094,
          pivotTableId: var_core_value_sig0BC4,
          sourceName: var_core_value_sig8F20,
          dataFieldId: var_core_value_sigB8CA,
          tableFieldId: var_core_value_sig4663
        } = var_core_value_sigD135,
        var_core_value_sig5970 = var_core_value_sig0891[ox22b2d9(0x2fb)](var_core_value_sig0BC4);
      return var_core_value_sig5970 ? (var_core_value_sig5970["updateFieldSourceInfo"](var_core_value_sig4663, var_core_value_sig8F20, var_core_value_sigB8CA), ut(var_core_value_sig0891[ox22b2d9(0x31f)](var_core_value_sigF788, var_core_value_sigE094, var_core_value_sig0BC4), var_core_value_sigD135), var_core_value_sig0891["addDirtyPivotTable"]({
        unitId: var_core_value_sigF788,
        subUnitId: var_core_value_sigE094,
        token: var_core_value_sig0BC4,
        type: ox22b2d9(0x2d0)
      }), !0x0) : !0x1;
    }
  },
  kt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.pivot-update-value-position",
    handler(var_core_value_sig7D63, var_core_value_sig7713) {
      if (!var_core_value_sig7713) return !0x1;
      if (var_core_value_sig7D63[ox32d1a7(0x345)](t[ox32d1a7(0x174)])[ox32d1a7(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sigD598 = var_core_value_sig7D63[ox32d1a7(0x345)](K),
        {
          unitId: var_core_value_sig61E6,
          subUnitId: var_core_value_sig054F,
          pivotTableId: var_core_value_sig9047,
          valuePosition: var_core_value_sigB9FA,
          index: var_core_value_sigF8DB
        } = var_core_value_sig7713,
        var_core_value_sig6E53 = var_core_value_sigD598[ox32d1a7(0x2fb)](var_core_value_sig9047);
      return var_core_value_sig6E53 ? (var_core_value_sig6E53[ox32d1a7(0x2e8)](var_core_value_sigB9FA, var_core_value_sigF8DB), lt(var_core_value_sigD598[ox32d1a7(0x31f)](var_core_value_sig61E6, var_core_value_sig054F, var_core_value_sig9047), var_core_value_sig7713), var_core_value_sigD598[ox32d1a7(0x3b0)]({
        unitId: var_core_value_sig61E6,
        subUnitId: var_core_value_sig054F,
        token: var_core_value_sig9047,
        type: ox32d1a7(0x2d0)
      }), !0x0) : !0x1;
    }
  };
function Q(var_core_value_sig5812, var_core_value_sig343C, var_core_value_sigD924) {
  let {
      pivotTableId: var_core_value_sig02D4,
      unitId: var_core_value_sigEFE7,
      subUnitId: var_core_value_sig9277
    } = var_core_value_sig343C,
    var_core_value_sig2AE5 = [],
    var_core_value_sigE274 = [];
  for (let var_core_value_sig902F of var_core_value_sigD924) switch (var_core_value_sig902F[ox5e55b5(0x3dd)]) {
    case e["PivotTableChangeTypeEnum"][ox5e55b5(0x498)]:
      {
        let {
            fieldJson: var_core_value_sig6D19,
            area: var_core_value_sig279C,
            index: var_core_value_sigAC51
          } = var_core_value_sig902F,
          var_core_value_sig8986 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldJson: var_core_value_sig6D19,
            area: var_core_value_sig279C,
            index: var_core_value_sigAC51
          },
          var_core_value_sigCAF7 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig6D19["id"],
            area: var_core_value_sig279C,
            index: var_core_value_sigAC51
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: ht["id"],
          params: var_core_value_sig8986
        }), var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: gt["id"],
          params: var_core_value_sigCAF7
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x28e)]:
      {
        let {
            fieldId: var_core_value_sigED1C,
            newSubtotalType: var_core_value_sig726E,
            oldSubtotalType: var_core_value_sig2CD3
          } = var_core_value_sig902F,
          var_core_value_sig038E = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sigED1C,
            subtotalType: var_core_value_sig726E
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: Tt["id"],
          params: var_core_value_sig038E
        });
        let var_core_value_sigAA1E = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sigED1C,
          subtotalType: var_core_value_sig2CD3
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: Tt["id"],
          params: var_core_value_sigAA1E
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x4bb)]:
      {
        let {
            fieldId: var_core_value_sigC9F5,
            fieldJson: var_core_value_sig7EEA,
            area: var_core_value_sig59CE1,
            index: var_core_value_sig33C8
          } = var_core_value_sig902F,
          var_core_value_sig957F = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sigC9F5,
            index: var_core_value_sig33C8,
            area: var_core_value_sig59CE1
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: gt["id"],
          params: var_core_value_sig957F
        });
        let var_core_value_sig803B = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldJson: var_core_value_sig7EEA,
          area: var_core_value_sig59CE1,
          index: var_core_value_sig33C8
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: ht["id"],
          params: var_core_value_sig803B
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x3ca)]:
      {
        let {
            fieldId: var_core_value_sig5830,
            oldName: var_core_value_sig4A7C,
            newName: var_core_value_sigF975
          } = var_core_value_sig902F,
          var_core_value_sigCDAF = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig5830,
            name: var_core_value_sigF975
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: _t["id"],
          params: var_core_value_sigCDAF
        });
        let var_core_value_sigA298 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sig5830,
          name: var_core_value_sig4A7C
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: _t["id"],
          params: var_core_value_sigA298
        });
      }
      break;
    case e[ox5e55b5(0x368)]["SetFilterInfo"]:
      {
        let {
            fieldId: var_core_value_sig0B40,
            oldFilterInfo: var_core_value_sig330B,
            newFilterInfo: var_core_value_sig3625
          } = var_core_value_sig902F,
          var_core_value_sig0B4E = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig0B40,
            filterInfo: var_core_value_sig3625
          };
        var_core_value_sig2AE5["push"]({
          id: bt["id"],
          params: var_core_value_sig0B4E
        });
        let var_core_value_sig0E9F = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sig0B40,
          filterInfo: var_core_value_sig330B
        };
        var_core_value_sigE274["unshift"]({
          id: bt["id"],
          params: var_core_value_sig0E9F
        });
      }
      break;
    case e["PivotTableChangeTypeEnum"]["SetSortInfo"]:
      {
        let {
            fieldId: var_core_value_sigE5BA,
            oldSortInfo: var_core_value_sig4A83,
            newSortInfo: var_core_value_sig58AA
          } = var_core_value_sig902F,
          var_core_value_sig84C4 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sigE5BA,
            sortInfo: var_core_value_sig58AA
          };
        var_core_value_sig2AE5["push"]({
          id: wt["id"],
          params: var_core_value_sig84C4
        });
        let var_core_value_sigB6F7 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sigE5BA,
          sortInfo: var_core_value_sig4A83
        };
        var_core_value_sigE274["unshift"]({
          id: wt["id"],
          params: var_core_value_sigB6F7
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x321)]:
      {
        let {
            fieldId: var_core_value_sigB495,
            oldShowDataAs: var_core_value_sig70D0,
            newShowDataAs: var_core_value_sig2A8A
          } = var_core_value_sig902F,
          var_core_value_sig3782 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sigB495,
            showDataAs: {
              ...var_core_value_sig2A8A
            }
          };
        var_core_value_sig2AE5["push"]({
          id: Ct["id"],
          params: var_core_value_sig3782
        });
        let var_core_value_sigD22E = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sigB495,
          showDataAs: {
            ...var_core_value_sig70D0
          }
        };
        var_core_value_sigE274["unshift"]({
          id: Ct["id"],
          params: var_core_value_sigD22E
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x413)]:
      {
        let {
            oldOptions: var_core_value_sig3455,
            newOptions: var_core_value_sig5CEF
          } = var_core_value_sig902F,
          var_core_value_sig43D51 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            options: var_core_value_sig5CEF
          };
        var_core_value_sig2AE5["push"]({
          id: St["id"],
          params: var_core_value_sig43D51
        });
        let var_core_value_sig1395 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          options: var_core_value_sig3455
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: St["id"],
          params: var_core_value_sig1395
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x30e)]:
      {
        let {
            oldLayout: var_core_value_sig9FA0,
            newLayout: var_core_value_sig055E
          } = var_core_value_sig902F,
          var_core_value_sig7C77 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            layout: var_core_value_sig055E
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: xt["id"],
          params: var_core_value_sig7C77
        });
        let var_core_value_sig9578 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          layout: var_core_value_sig9FA0
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: xt["id"],
          params: var_core_value_sig9578
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x407)]:
      {
        let {
            oldArea: var_core_value_sigA2D31,
            newArea: var_core_value_sigC218,
            oldIndex: var_core_value_sigADEC,
            newIndex: var_core_value_sig3D8E,
            fieldId: var_core_value_sig37E5
          } = var_core_value_sig902F,
          var_core_value_sigF079 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig37E5,
            area: var_core_value_sigC218,
            index: var_core_value_sig3D8E,
            oldArea: var_core_value_sigA2D31,
            oldIndex: var_core_value_sigADEC
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: Dt["id"],
          params: var_core_value_sigF079
        });
        let var_core_value_sigFCA0 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sig37E5,
          area: var_core_value_sigA2D31,
          index: var_core_value_sigADEC,
          oldArea: var_core_value_sigC218,
          oldIndex: var_core_value_sig3D8E
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: Dt["id"],
          params: var_core_value_sigFCA0
        });
      }
      break;
    case e["PivotTableChangeTypeEnum"][ox5e55b5(0x164)]:
      {
        let {
            oldValuePosition: var_core_value_sigC84D,
            newValuePosition: var_core_value_sigF2BC,
            oldIndex: var_core_value_sigD37B,
            newIndex: var_core_value_sigFA28
          } = var_core_value_sig902F,
          var_core_value_sig93BE = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            valuePosition: var_core_value_sigF2BC,
            index: var_core_value_sigFA28
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: kt["id"],
          params: var_core_value_sig93BE
        });
        let var_core_value_sigABEC = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          valuePosition: var_core_value_sigC84D,
          index: var_core_value_sigD37B
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: kt["id"],
          params: var_core_value_sigABEC
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x3b5)]:
      {
        let {
            fieldId: var_core_value_sig2712,
            collapse: var_core_value_sig0B9E,
            item: var_core_value_sigC545
          } = var_core_value_sig902F,
          var_core_value_sig12A7 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig2712,
            collapse: var_core_value_sig0B9E,
            item: var_core_value_sigC545
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: vt["id"],
          params: var_core_value_sig12A7
        });
        let var_core_value_sig6F4E = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sig2712,
          collapse: !var_core_value_sig0B9E,
          item: var_core_value_sigC545
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: vt["id"],
          params: var_core_value_sig6F4E
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x4b5)]:
      {
        let {
            newFormat: var_core_value_sigA021,
            oldFormat: var_core_value_sig49D9,
            fieldId: var_core_value_sig320C
          } = var_core_value_sig902F,
          var_core_value_sigE7F0 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sig320C,
            format: var_core_value_sigA021
          };
        var_core_value_sig2AE5["push"]({
          id: yt["id"],
          params: var_core_value_sigE7F0
        });
        let var_core_value_sigE837 = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sig320C,
          format: var_core_value_sig49D9
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: yt["id"],
          params: var_core_value_sigE837
        });
      }
      break;
    case e[ox5e55b5(0x368)]["UpdateSource"]:
      {
        let {
            tableFieldId: var_core_value_sig34F4,
            oldSourceName: var_core_value_sigA45D,
            newSourceName: var_core_value_sig1BC7,
            oldDataFieldId: var_core_value_sig4956,
            newDataFieldId: var_core_value_sigCC9E
          } = var_core_value_sig902F,
          var_core_value_sig444C = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            tableFieldId: var_core_value_sig34F4,
            sourceName: var_core_value_sig1BC7,
            dataFieldId: var_core_value_sigCC9E
          };
        var_core_value_sig2AE5[ox5e55b5(0x19f)]({
          id: Ot["id"],
          params: var_core_value_sig444C
        });
        let var_core_value_sigE42E = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          tableFieldId: var_core_value_sig34F4,
          sourceName: var_core_value_sigA45D,
          dataFieldId: var_core_value_sig4956
        };
        var_core_value_sigE274["unshift"]({
          id: Ot["id"],
          params: var_core_value_sigE42E
        });
      }
      break;
    case e[ox5e55b5(0x368)][ox5e55b5(0x15b)]:
      {
        let {
            fieldId: var_core_value_sigF039,
            filterInfo: var_core_value_sigA321,
            oldFilterInfo: var_core_value_sigBF4C,
            newIndex: var_core_value_sig3457,
            oldIndex: var_core_value_sig4A08
          } = var_core_value_sig902F,
          var_core_value_sig1BC4 = {
            unitId: var_core_value_sigEFE7,
            subUnitId: var_core_value_sig9277,
            pivotTableId: var_core_value_sig02D4,
            fieldId: var_core_value_sigF039,
            filterInfo: var_core_value_sigA321,
            index: var_core_value_sig3457
          };
        var_core_value_sig2AE5["push"]({
          id: Et["id"],
          params: var_core_value_sig1BC4
        });
        let var_core_value_sig9EAB = {
          unitId: var_core_value_sigEFE7,
          subUnitId: var_core_value_sig9277,
          pivotTableId: var_core_value_sig02D4,
          fieldId: var_core_value_sigF039,
          filterInfo: var_core_value_sigBF4C,
          index: var_core_value_sig4A08
        };
        var_core_value_sigE274[ox5e55b5(0x38e)]({
          id: Et["id"],
          params: var_core_value_sig9EAB
        });
      }
  }
  return {
    redos: var_core_value_sig2AE5,
    undos: var_core_value_sigE274
  };
}
function $(var_core_value_sig305B, var_core_value_sigAE39) {
  let var_core_value_sigF21C = var_core_value_sig305B[ox35d8b3(0x345)](Z),
    {
      cellInfo: var_core_value_sig66D1,
      view: var_core_value_sig83A6,
      isEmpty: var_core_value_sig7D8E
    } = var_core_value_sigAE39;
  return var_core_value_sigF21C["interceptor"][ox35d8b3(0x434)](ne)(L, {
    cellInfo: var_core_value_sig66D1,
    view: var_core_value_sig83A6,
    isEmpty: var_core_value_sig7D8E
  }) ?? L;
}
const At = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-field",
    async handler(var_core_value_sigADFE, var_core_value_sigF11A) {
      if (!var_core_value_sigF11A) return !0x1;
      let var_core_value_sigF020 = var_core_value_sigADFE[ox47abea(0x345)](t[ox47abea(0x1b2)]),
        var_core_value_sigAECB = var_core_value_sigADFE[ox47abea(0x345)](W),
        var_core_value_sigF759 = var_core_value_sigADFE["get"](t[ox47abea(0x256)]),
        {
          pivotTableId: var_core_value_sig52AE,
          dataFieldId: var_core_value_sig35A1,
          fieldArea: var_core_value_sig5F74,
          index: var_core_value_sig72A2,
          unitId: var_core_value_sig956E,
          subUnitId: var_core_value_sig7B0C
        } = var_core_value_sigF11A,
        var_core_value_sig0616 = (await var_core_value_sigAECB["getPivotDisplayConfig"]({
          unitId: var_core_value_sig956E,
          subUnitId: var_core_value_sig7B0C,
          pivotTableId: var_core_value_sig52AE,
          params: {
            type: ox47abea(0x410),
            addPivotField: {
              dataFieldId: var_core_value_sig35A1,
              fieldArea: var_core_value_sig5F74,
              index: var_core_value_sig72A2
            }
          }
        }))[ox47abea(0x409)][ox47abea(0x410)];
      if (!var_core_value_sig0616) return !0x1;
      let {
          view: var_core_value_sigDA4C,
          changesets: var_core_value_sig5EDC,
          isEmpty: var_core_value_sig3956,
          pivotTableConfig: var_core_value_sig182F,
          shouldBeAddedGroupJSON: var_core_value_sig76FA
        } = var_core_value_sig0616,
        var_core_value_sig960A = var_core_value_sig182F[ox47abea(0x376)],
        var_core_value_sigBE8E = new e[ox47abea(0x18a)]();
      var_core_value_sigBE8E[ox47abea(0x3cb)](var_core_value_sigDA4C);
      let var_core_value_sig294A = {
        cellInfo: var_core_value_sig960A,
        view: var_core_value_sigBE8E,
        isEmpty: var_core_value_sig3956
      };
      if (!(await var_core_value_sigADFE["get"](Z)[ox47abea(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sig294A))) return !0x1;
      let var_core_value_sig31A6 = J(var_core_value_sigADFE, var_core_value_sigBE8E, var_core_value_sig960A, var_core_value_sig3956),
        var_core_value_sigAA4F = $(var_core_value_sigADFE, var_core_value_sig294A),
        {
          undos: var_core_value_sig672C,
          redos: var_core_value_sig7D0D
        } = Q(var_core_value_sigF020, {
          pivotTableId: var_core_value_sig52AE,
          unitId: var_core_value_sig956E,
          subUnitId: var_core_value_sig7B0C
        }, var_core_value_sig5EDC);
      return var_core_value_sig76FA && (var_core_value_sig7D0D["unshift"]({
        id: Xe["id"],
        params: {
          pivotTableId: var_core_value_sig52AE,
          fieldJSON: var_core_value_sig76FA,
          unitId: var_core_value_sig956E,
          subUnitId: var_core_value_sig7B0C
        }
      }), var_core_value_sig672C[ox47abea(0x19f)]({
        id: Ze["id"],
        params: {
          pivotTableId: var_core_value_sig52AE,
          dataFieldId: var_core_value_sig76FA["id"],
          unitId: var_core_value_sig956E,
          subUnitId: var_core_value_sig7B0C
        }
      })), (0x0, t["sequenceExecute"])([...var_core_value_sig31A6[ox47abea(0x214)], ...var_core_value_sigAA4F["redos"], ...var_core_value_sig7D0D], var_core_value_sigF020)[ox47abea(0x409)] ? (var_core_value_sigF759["pushUndoRedo"]({
        unitID: var_core_value_sig956E,
        redoMutations: [...var_core_value_sig31A6["redos"], ...var_core_value_sigAA4F["redos"], ...var_core_value_sig7D0D],
        undoMutations: [...var_core_value_sig31A6[ox47abea(0x49e)], ...var_core_value_sigAA4F[ox47abea(0x49e)], ...var_core_value_sig672C]
      }), !0x0) : !0x1;
    }
  },
  jt = () => typeof process < "u" && process["versions"] != null && process["versions"]["node"] != null,
  Mt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.add-pivot-table",
    handler(var_core_value_sigE30C, var_core_value_sigC06A) {
      if (!var_core_value_sigC06A) return !0x1;
      let var_core_value_sig3CF8 = var_core_value_sigE30C[ox1aaefd(0x345)](t["IConfigService"]);
      if (var_core_value_sig3CF8[ox1aaefd(0x3c0)](ox1aaefd(0x285))) return !0x0;
      let var_core_value_sig3EC3 = var_core_value_sigE30C[ox1aaefd(0x345)](t[ox1aaefd(0x1ba)]),
        var_core_value_sigBD61 = var_core_value_sigE30C[ox1aaefd(0x345)](K),
        {
          pivotTableId: var_core_value_sig445D,
          pivotTableConfig: var_core_value_sigC15F,
          collectionConfig: var_core_value_sig73A8,
          unitId: var_core_value_sigE227,
          subUnitId: var_core_value_sig6909
        } = var_core_value_sigC06A,
        {
          sourceRangeInfo: var_core_value_sigCFCC,
          fieldsConfig: var_core_value_sig0503,
          targetCellInfo: var_core_value_sigAA49
        } = var_core_value_sigC15F,
        var_core_value_sigAB24 = var_core_value_sig3EC3[ox1aaefd(0x2a4)](var_core_value_sigE227);
      if (!var_core_value_sigAB24 || !var_core_value_sigAB24[ox1aaefd(0x16b)](var_core_value_sig6909)) return !0x1;
      if (!jt()) {
        let var_core_value_sig6BD7 = 0x0;
        var_core_value_sigAB24[ox1aaefd(0x17c)]()[ox1aaefd(0x231)](var_core_value_sig675A => {
          const var_core_value_sig837F = ox1aaefd;
          var var_core_value_sig9D6E;
          var_core_value_sig6BD7 += ((var_core_value_sig9D6E = var_core_value_sigBD61["getSubUnitPivotConfigs"](var_core_value_sigE227, var_core_value_sig675A[var_core_value_sig837F(0x325)]())) == null ? void 0x0 : var_core_value_sig9D6E[var_core_value_sig837F(0x189)]) ?? 0x0;
        });
        let {
          ls: var_core_value_sig63E0,
          pbk: var_core_value_sig1B87
        } = var_core_value_sig3CF8[ox1aaefd(0x3c0)](a["LS_CONFIG_KEY"]) ?? {};
        if (!Te(var_core_value_sig63E0, var_core_value_sig1B87)) throw new t[ox1aaefd(0x276)](ox1aaefd(0x265));
        let var_core_value_sig580B = Ee(0x1, var_core_value_sig63E0, var_core_value_sig1B87)["count"];
        if (var_core_value_sig6BD7 >= var_core_value_sig580B) throw new t[ox1aaefd(0x276)]("limit\x20pivot");
      }
      if (!var_core_value_sig73A8 || !var_core_value_sig0503) return !0x1;
      let {
        collection: var_core_value_sig2F15,
        updateDataFieldList: var_core_value_sig316C
      } = var_core_value_sigBD61[ox1aaefd(0x387)](var_core_value_sig445D, var_core_value_sig73A8, var_core_value_sigCFCC, var_core_value_sigAA49);
      var_core_value_sigBD61["refreshData"](var_core_value_sig2F15, var_core_value_sig316C, var_core_value_sigCFCC);
      let var_core_value_sig75A2 = new e[ox1aaefd(0x21f)](var_core_value_sig2F15, void 0x0, var_core_value_sig445D);
      var_core_value_sig75A2[ox1aaefd(0x329)](var_core_value_sig0503);
      let var_core_value_sig95CE = JSON["parse"](JSON[ox1aaefd(0x184)](var_core_value_sigC15F));
      return var_core_value_sigBD61[ox1aaefd(0x357)](var_core_value_sigE227, var_core_value_sig6909, var_core_value_sig445D, var_core_value_sig75A2, var_core_value_sig95CE), var_core_value_sigBD61[ox1aaefd(0x3b0)]({
        unitId: var_core_value_sigE227,
        subUnitId: var_core_value_sig6909,
        token: var_core_value_sig445D,
        type: ox1aaefd(0x3db),
        pivotConfig: var_core_value_sig95CE
      }), !0x0;
    }
  },
  Nt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-table-with-config",
    async handler(var_core_value_sig41FA, var_core_value_sig73C4) {
      if (!var_core_value_sig73C4) return !0x1;
      let {
        sourceDataInfo: var_core_value_sig3216,
        pivotTableConfig: var_core_value_sigF636
      } = var_core_value_sig73C4;
      if (!var_core_value_sig3216 || !var_core_value_sigF636) return !0x1;
      let {
          unitId: var_core_value_sig2EE8,
          subUnitId: var_core_value_sig6177,
          range: var_core_value_sig723F1
        } = var_core_value_sig3216,
        var_core_value_sigADA0 = var_core_value_sig41FA[ox13a343(0x345)](t[ox13a343(0x1ba)]),
        var_core_value_sig2F52 = var_core_value_sig41FA["get"](W),
        var_core_value_sig8FC3 = var_core_value_sig41FA[ox13a343(0x345)](t["LocaleService"]),
        var_core_value_sigF5B3 = var_core_value_sig41FA["get"](t[ox13a343(0x1b2)]),
        var_core_value_sig074A = var_core_value_sigADA0[ox13a343(0x2a4)](var_core_value_sig2EE8);
      if (!var_core_value_sig074A) return !0x1;
      let var_core_value_sig5FBE = var_core_value_sig074A[ox13a343(0x16b)](var_core_value_sig6177);
      if (!var_core_value_sig5FBE) return !0x1;
      let var_core_value_sig9D61 = (0x0, e[ox13a343(0x1b4)])(0x8),
        var_core_value_sigF126 = var_core_value_sig723F1 || {
          startRow: 0x0,
          startColumn: 0x0,
          endRow: var_core_value_sig5FBE["getRowCount"]() - 0x1,
          endColumn: var_core_value_sig5FBE[ox13a343(0x13e)]() - 0x1
        };
      var_core_value_sigF126[ox13a343(0x468)] = t[ox13a343(0x2e5)][ox13a343(0x446)];
      let var_core_value_sig9AF8 = (await var_core_value_sig2F52[ox13a343(0x49f)]({
        unitId: var_core_value_sig2EE8,
        subUnitId: var_core_value_sig6177,
        pivotTableId: var_core_value_sig9D61,
        params: {
          type: ox13a343(0x1a5),
          addPivotTableWithConfig: {
            sourceRangeInfo: {
              unitId: var_core_value_sig2EE8,
              sheetName: var_core_value_sig5FBE[ox13a343(0x1f7)](),
              subUnitId: var_core_value_sig6177,
              range: var_core_value_sigF126
            },
            pivotTableId: var_core_value_sig9D61,
            pivotTableIndexConfig: var_core_value_sigF636
          }
        }
      }))["result"][ox13a343(0x326)];
      if (!var_core_value_sig9AF8) return !0x1;
      let {
          isEmpty: var_core_value_sig7537,
          fieldsConfig: var_core_value_sig50C7,
          collectionConfig: var_core_value_sig9B62,
          changesets: var_core_value_sig470B
        } = var_core_value_sig9AF8,
        var_core_value_sig7525 = var_core_value_sig074A["getSheets"]()[ox13a343(0x2b6)],
        var_core_value_sig95B5 = (0x0, t["mergeWorksheetSnapshotWithDefault"])({
          rowCount: var_core_value_sig5FBE[ox13a343(0x172)]() - 0x1,
          columnCount: var_core_value_sig5FBE[ox13a343(0x13e)]() - 0x1
        });
      var_core_value_sig95B5["id"] = (0x0, t[ox13a343(0x2fe)])(), var_core_value_sig95B5["name"] = var_core_value_sig074A["generateNewSheetName"]("" + var_core_value_sig8FC3["t"](ox13a343(0x400)));
      let var_core_value_sig2347 = {
          index: var_core_value_sig7525,
          sheet: var_core_value_sig95B5,
          unitId: var_core_value_sig2EE8
        },
        {
          redos: var_core_value_sigB20E
        } = Q(var_core_value_sigF5B3, {
          pivotTableId: var_core_value_sig9D61,
          unitId: var_core_value_sig2EE8,
          subUnitId: var_core_value_sig95B5["id"]
        }, var_core_value_sig470B);
      return (0x0, t[ox13a343(0x135)])([{
        id: r["InsertSheetCommand"]["id"],
        params: var_core_value_sig2347
      }, {
        id: Mt["id"],
        params: {
          unitId: var_core_value_sig2EE8,
          subUnitId: var_core_value_sig95B5["id"],
          pivotTableId: var_core_value_sig9D61,
          pivotTableConfig: {
            isEmpty: var_core_value_sig7537,
            fieldsConfig: var_core_value_sig50C7,
            targetCellInfo: {
              row: 0x0,
              col: 0x0,
              unitId: var_core_value_sig2EE8,
              subUnitId: var_core_value_sig95B5["id"]
            },
            sourceRangeInfo: {
              subUnitId: var_core_value_sig6177,
              unitId: var_core_value_sig2EE8,
              range: var_core_value_sigF126,
              sheetName: var_core_value_sig5FBE[ox13a343(0x1f7)]()
            }
          },
          collectionConfig: var_core_value_sig9B62
        }
      }, ...var_core_value_sigB20E], var_core_value_sigF5B3)[ox13a343(0x409)];
    }
  },
  Pt = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.remove-pivot-table",
    handler(var_core_value_sig8ADE, var_core_value_sig7F51) {
      if (!var_core_value_sig7F51) return !0x1;
      if (var_core_value_sig8ADE["get"](t["IConfigService"])[ox38ee6b(0x3c0)](ox38ee6b(0x285))) return !0x0;
      let {
          pivotTableId: var_core_value_sig622A,
          unitId: var_core_value_sig40EC,
          subUnitId: var_core_value_sig27C9
        } = var_core_value_sig7F51,
        var_core_value_sigF296 = var_core_value_sig8ADE[ox38ee6b(0x345)](K);
      return var_core_value_sigF296[ox38ee6b(0x2e6)](var_core_value_sig40EC, var_core_value_sig27C9, var_core_value_sig622A) ? (var_core_value_sigF296[ox38ee6b(0x3b0)]({
        unitId: var_core_value_sig40EC,
        subUnitId: var_core_value_sig27C9,
        token: var_core_value_sig622A,
        type: "delete"
      }), var_core_value_sigF296[ox38ee6b(0x2aa)](var_core_value_sig40EC, var_core_value_sig27C9, var_core_value_sig622A), !0x0) : !0x1;
    }
  },
  Ft = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.add-pivot-table",
    async handler(var_core_value_sigD001, var_core_value_sig4940) {
      let var_core_value_sig7E0F = var_core_value_sigD001[ox5c2bd7(0x345)](t[ox5c2bd7(0x1b2)]),
        var_core_value_sig9785 = var_core_value_sigD001[ox5c2bd7(0x345)](t["IUniverInstanceService"]),
        var_core_value_sig235B = var_core_value_sigD001[ox5c2bd7(0x345)](t[ox5c2bd7(0x1b3)]),
        var_core_value_sigBCA8 = var_core_value_sigD001["get"](W),
        var_core_value_sig0C8C = var_core_value_sigD001[ox5c2bd7(0x345)](t["IUndoRedoService"]),
        var_core_value_sig56FC = var_core_value_sigD001["get"](Y),
        var_core_value_sig7EC8 = var_core_value_sigD001["get"](t[ox5c2bd7(0x174)]);
      if (!var_core_value_sig4940) return !0x1;
      let {
          pivotTableConfig: var_core_value_sig04541,
          positionType: var_core_value_sig71F7
        } = var_core_value_sig4940,
        {
          targetCellInfo: var_core_value_sig8D12,
          sourceRangeInfo: var_core_value_sigEEC4
        } = var_core_value_sig04541,
        {
          unitId: var_core_value_sig0EDB,
          subUnitId: var_core_value_sig1C1B1
        } = var_core_value_sig8D12,
        var_core_value_sig083D = var_core_value_sig9785["getUnit"](var_core_value_sig0EDB);
      if (!var_core_value_sig083D) return !0x1;
      let var_core_value_sig70CE = 0x0;
      var_core_value_sig083D[ox5c2bd7(0x17c)]()[ox5c2bd7(0x231)](var_core_value_sig4836 => {
        const var_core_value_sig4C06 = ox5c2bd7;
        var var_core_value_sig4D56;
        var_core_value_sig70CE += ((var_core_value_sig4D56 = var_core_value_sig56FC[var_core_value_sig4C06(0x477)](var_core_value_sig0EDB, var_core_value_sig4836[var_core_value_sig4C06(0x325)]())) == null ? void 0x0 : var_core_value_sig4D56[var_core_value_sig4C06(0x189)]) ?? 0x0;
      });
      let {
        ls: var_core_value_sig4B4A,
        pbk: var_core_value_sig6585
      } = var_core_value_sig7EC8[ox5c2bd7(0x3c0)](a[ox5c2bd7(0x457)]) ?? {};
      if (!Te(var_core_value_sig4B4A, var_core_value_sig6585)) return !0x1;
      let var_core_value_sig743E = Ee(0x1, var_core_value_sig4B4A, var_core_value_sig6585)[ox5c2bd7(0x466)];
      if (var_core_value_sig70CE >= var_core_value_sig743E) return !0x1;
      let var_core_value_sig9872 = var_core_value_sig4940["pivotTableId"] || (0x0, e[ox5c2bd7(0x1b4)])(0x8),
        var_core_value_sig049A = (await var_core_value_sigBCA8[ox5c2bd7(0x49f)]({
          unitId: var_core_value_sig0EDB,
          subUnitId: var_core_value_sig1C1B1,
          pivotTableId: var_core_value_sig9872,
          params: {
            type: "addPivotTable",
            addPivotTable: {
              sourceRangeInfo: var_core_value_sigEEC4,
              pivotTableId: var_core_value_sig9872
            }
          }
        }))[ox5c2bd7(0x409)][ox5c2bd7(0x357)];
      if (!var_core_value_sig049A) return !0x1;
      let {
          view: var_core_value_sig58301,
          isEmpty: var_core_value_sig69CB,
          fieldsConfig: var_core_value_sigB5CC,
          collectionConfig: var_core_value_sig823B
        } = var_core_value_sig049A,
        var_core_value_sigC9B0 = [],
        var_core_value_sigAA99 = [];
      if (var_core_value_sig71F7 === "new") {
        let var_core_value_sig7C26 = var_core_value_sig083D[ox5c2bd7(0x17c)]()[ox5c2bd7(0x2b6)],
          var_core_value_sigBC59 = (0x0, t[ox5c2bd7(0x444)])({});
        var_core_value_sigBC59["id"] = var_core_value_sig04541[ox5c2bd7(0x376)][ox5c2bd7(0x1bf)], var_core_value_sigBC59["name"] = var_core_value_sig04541["targetCellInfo"][ox5c2bd7(0x2f5)] ?? var_core_value_sig083D[ox5c2bd7(0x426)]("" + var_core_value_sig235B["t"]("sheets-pivot.sheet"));
        let var_core_value_sig544E = {
            index: var_core_value_sig7C26,
            sheet: var_core_value_sigBC59,
            unitId: var_core_value_sig0EDB
          },
          var_core_value_sigCE8A = (0x0, r[ox5c2bd7(0x4a7)])(var_core_value_sigD001, var_core_value_sig544E);
        var_core_value_sigC9B0[ox5c2bd7(0x19f)]({
          id: r[ox5c2bd7(0x163)]["id"],
          params: var_core_value_sigCE8A
        }), var_core_value_sigAA99[ox5c2bd7(0x19f)]({
          id: r["InsertSheetMutation"]["id"],
          params: var_core_value_sig544E
        });
      } else {
        if (!var_core_value_sig083D[ox5c2bd7(0x16b)](var_core_value_sig1C1B1)) return !0x1;
        let var_core_value_sig0718 = new e["PivotView"]();
        var_core_value_sig0718[ox5c2bd7(0x3cb)](var_core_value_sig58301);
        let var_core_value_sig1B22 = J(var_core_value_sigD001, new e[ox5c2bd7(0x18a)](), var_core_value_sig8D12, !0x0);
        var_core_value_sigAA99[ox5c2bd7(0x19f)](...var_core_value_sig1B22[ox5c2bd7(0x214)]), var_core_value_sigC9B0[ox5c2bd7(0x19f)](...var_core_value_sig1B22["undos"]);
        let var_core_value_sig8854 = {
          cellInfo: var_core_value_sig8D12,
          view: var_core_value_sig0718,
          isEmpty: var_core_value_sig69CB
        };
        if (!(await var_core_value_sigD001["get"](Z)[ox5c2bd7(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sig8854))) return !0x1;
        let var_core_value_sig5275 = $(var_core_value_sigD001, var_core_value_sig8854);
        var_core_value_sigAA99[ox5c2bd7(0x19f)](...var_core_value_sig5275[ox5c2bd7(0x214)]), var_core_value_sigC9B0[ox5c2bd7(0x19f)](...var_core_value_sig5275[ox5c2bd7(0x49e)]);
      }
      return var_core_value_sigAA99["push"]({
        id: Mt["id"],
        params: {
          unitId: var_core_value_sig8D12[ox5c2bd7(0x386)],
          subUnitId: var_core_value_sig8D12[ox5c2bd7(0x1bf)],
          pivotTableId: var_core_value_sig9872,
          pivotTableConfig: {
            targetCellInfo: var_core_value_sig8D12,
            sourceRangeInfo: var_core_value_sigEEC4,
            fieldsConfig: var_core_value_sigB5CC,
            isEmpty: var_core_value_sig69CB
          },
          collectionConfig: var_core_value_sig823B
        }
      }), var_core_value_sigC9B0[ox5c2bd7(0x38e)]({
        id: Pt["id"],
        params: {
          unitId: var_core_value_sig0EDB,
          subUnitId: var_core_value_sig1C1B1,
          pivotTableId: var_core_value_sig9872
        }
      }), (0x0, t[ox5c2bd7(0x135)])(var_core_value_sigAA99, var_core_value_sig7E0F)[ox5c2bd7(0x409)] ? (var_core_value_sig0C8C[ox5c2bd7(0x462)]({
        unitID: var_core_value_sig0EDB,
        undoMutations: var_core_value_sigC9B0,
        redoMutations: var_core_value_sigAA99
      }), !0x0) : !0x1;
    }
  },
  It = [e["PivotDateGroupFieldDateTypeEnum"]["Year"], e["PivotDateGroupFieldDateTypeEnum"]["YearQuarter"], e["PivotDateGroupFieldDateTypeEnum"]["Quarter"], e["PivotDateGroupFieldDateTypeEnum"]["YearMonth"], e["PivotDateGroupFieldDateTypeEnum"]["Month"], e["PivotDateGroupFieldDateTypeEnum"]["MonthDate"], e["PivotDateGroupFieldDateTypeEnum"]["YearMonthDate"], e["PivotDateGroupFieldDateTypeEnum"]["Date"], e["PivotDateGroupFieldDateTypeEnum"]["Hour"], e["PivotDateGroupFieldDateTypeEnum"]["Minute"], e["PivotDateGroupFieldDateTypeEnum"]["HourMinute"]];
function Lt(var_core_value_sig1D86, var_core_value_sig1F4D, var_core_value_sig91D2) {
  if (!(var_core_value_sig1D86 != null && var_core_value_sig1D86["dimension"]) || !(var_core_value_sig1F4D != null && var_core_value_sig1F4D["fields"])) return;
  let var_core_value_sigBF6A = var_core_value_sig1D86[ox501e3e(0x230)][var_core_value_sig91D2];
  if (!var_core_value_sigBF6A) return;
  let var_core_value_sigC8CD = zt(var_core_value_sig1D86, var_core_value_sig91D2);
  if (!var_core_value_sigC8CD) return;
  let var_core_value_sig1D8D = var_core_value_sig1F4D["fields"][var_core_value_sigBF6A["dataFieldId"]];
  if (!var_core_value_sig1D8D) return;
  let var_core_value_sigFCDA = (0x0, e[ox501e3e(0x4b6)])(var_core_value_sig1D8D);
  if (!var_core_value_sigFCDA && var_core_value_sig1D8D[ox501e3e(0x45a)] !== e[ox501e3e(0x428)][ox501e3e(0x303)]) return;
  let var_core_value_sig4A8B = var_core_value_sigFCDA ? var_core_value_sig1D8D[ox501e3e(0x19a)] : var_core_value_sig1D8D["id"],
    var_core_value_sigE2301 = Bt(var_core_value_sig1D86, var_core_value_sigC8CD)[ox501e3e(0x1aa)]((var_core_value_sig4F9D, var_core_value_sig278E) => {
      const var_core_value_sig2921 = ox501e3e;
      if (var_core_value_sig278E === var_core_value_sig91D2) return var_core_value_sig4F9D;
      let var_core_value_sig3959 = var_core_value_sig1D86[var_core_value_sig2921(0x230)][var_core_value_sig278E],
        var_core_value_sig926F = var_core_value_sig3959 ? var_core_value_sig1F4D[var_core_value_sig2921(0x1ee)][var_core_value_sig3959[var_core_value_sig2921(0x1cb)]] : void 0x0;
      return var_core_value_sig926F && (0x0, e["isDateGroupFieldJSON"])(var_core_value_sig926F) && var_core_value_sig926F[var_core_value_sig2921(0x19a)] === var_core_value_sig4A8B && var_core_value_sig926F["dateType"] && var_core_value_sig4F9D[var_core_value_sig2921(0x19f)](var_core_value_sig926F["dateType"]), var_core_value_sig4F9D;
    }, []);
  return {
    kind: var_core_value_sigFCDA ? ox501e3e(0x435) : ox501e3e(0x2c6),
    area: var_core_value_sigC8CD,
    tableFieldId: var_core_value_sig91D2,
    dataFieldId: var_core_value_sig1D8D["id"],
    originalDataFieldId: var_core_value_sig4A8B,
    currentDateType: var_core_value_sigFCDA ? var_core_value_sig1D8D["dateType"] ?? e["PivotDateGroupFieldDateTypeEnum"][ox501e3e(0x4ba)] : void 0x0,
    siblingDateTypes: var_core_value_sigE2301,
    insertIndex: Vt(var_core_value_sig1D86, var_core_value_sig1F4D, var_core_value_sigC8CD, var_core_value_sig91D2, var_core_value_sig4A8B)
  };
}
function Rt(var_core_value_sigB8AF, var_core_value_sigD4B6) {
  return !It[ox4ca061(0x238)](var_core_value_sigD4B6) || var_core_value_sigB8AF[ox4ca061(0x206)] === var_core_value_sigD4B6 || var_core_value_sigB8AF[ox4ca061(0x489)][ox4ca061(0x238)](var_core_value_sigD4B6);
}
function zt(var_core_value_sigB90E, var_core_value_sigAEF2) {
  if (var_core_value_sigB90E[ox3ebce6(0x39f)]["includes"](var_core_value_sigAEF2)) return e[ox3ebce6(0x200)]["Row"];
  if (var_core_value_sigB90E[ox3ebce6(0x1de)][ox3ebce6(0x238)](var_core_value_sigAEF2)) return e[ox3ebce6(0x200)][ox3ebce6(0x374)];
}
function Bt(var_core_value_sig4453, var_core_value_sigFA8E) {
  return var_core_value_sigFA8E === e[ox25b265(0x200)][ox25b265(0x289)] ? var_core_value_sig4453[ox25b265(0x39f)] : var_core_value_sig4453[ox25b265(0x1de)];
}
function Vt(var_core_value_sig9D66, var_core_value_sig399F, var_core_value_sig57C2, var_core_value_sigA85E, var_core_value_sig65AA) {
  let var_core_value_sigC6DD = Bt(var_core_value_sig9D66, var_core_value_sig57C2),
    var_core_value_sig1300 = var_core_value_sigC6DD["indexOf"](var_core_value_sigA85E);
  if (var_core_value_sig1300 === -0x1) return var_core_value_sigC6DD[ox1fbe6c(0x2b6)];
  let var_core_value_sig05BB = var_core_value_sig1300;
  for (let var_core_value_sig9414 = 0x0; var_core_value_sig9414 < var_core_value_sig1300; var_core_value_sig9414++) {
    let var_core_value_sigB205 = var_core_value_sig9D66[ox1fbe6c(0x230)][var_core_value_sigC6DD[var_core_value_sig9414]],
      var_core_value_sigBF78 = var_core_value_sigB205 ? var_core_value_sig399F[ox1fbe6c(0x1ee)][var_core_value_sigB205[ox1fbe6c(0x1cb)]] : void 0x0;
    var_core_value_sigBF78 && (0x0, e[ox1fbe6c(0x4b6)])(var_core_value_sigBF78) && var_core_value_sigBF78[ox1fbe6c(0x19a)] === var_core_value_sig65AA && (var_core_value_sig05BB = var_core_value_sig9414 + 0x1);
  }
  return var_core_value_sig05BB;
}
const Ht = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.move-pivot-field",
    async handler(var_core_value_sig91CD, var_core_value_sig2AF0) {
      if (!var_core_value_sig2AF0) return !0x1;
      let var_core_value_sig796D = var_core_value_sig91CD[ox94f36c(0x345)](t[ox94f36c(0x1b2)]),
        var_core_value_sig7D2B = var_core_value_sig91CD[ox94f36c(0x345)](W),
        var_core_value_sigEA89 = var_core_value_sig91CD[ox94f36c(0x345)](t[ox94f36c(0x256)]),
        {
          pivotTableId: var_core_value_sig97B1,
          fieldId: var_core_value_sigD238,
          area: var_core_value_sigA1F8,
          index: var_core_value_sig71F3,
          unitId: var_core_value_sigD652,
          subUnitId: var_core_value_sig6289
        } = var_core_value_sig2AF0,
        var_core_value_sigB20A = (await var_core_value_sig7D2B[ox94f36c(0x49f)]({
          unitId: var_core_value_sigD652,
          subUnitId: var_core_value_sig6289,
          pivotTableId: var_core_value_sig97B1,
          params: {
            type: ox94f36c(0x465),
            movePivotField: {
              fieldId: var_core_value_sigD238,
              area: var_core_value_sigA1F8,
              index: var_core_value_sig71F3
            }
          }
        }))[ox94f36c(0x409)][ox94f36c(0x465)];
      if (!var_core_value_sigB20A) return !0x1;
      let {
          changesets: var_core_value_sig0591,
          view: var_core_value_sigDBF1,
          isEmpty: var_core_value_sig0358,
          pivotTableConfig: var_core_value_sigC4C9
        } = var_core_value_sigB20A,
        var_core_value_sig56ED = var_core_value_sigC4C9[ox94f36c(0x376)],
        var_core_value_sigFD401 = new e[ox94f36c(0x18a)]();
      var_core_value_sigFD401[ox94f36c(0x3cb)](var_core_value_sigDBF1);
      let var_core_value_sigD649 = {
        cellInfo: var_core_value_sig56ED,
        view: var_core_value_sigFD401,
        isEmpty: var_core_value_sig0358
      };
      if (!(await var_core_value_sig91CD[ox94f36c(0x345)](Z)[ox94f36c(0x49b)][ox94f36c(0x226)](R)(!0x0, var_core_value_sigD649))) return !0x1;
      let var_core_value_sig0E88 = J(var_core_value_sig91CD, var_core_value_sigFD401, var_core_value_sig56ED, var_core_value_sig0358),
        var_core_value_sig13C8 = $(var_core_value_sig91CD, var_core_value_sigD649),
        {
          redos: var_core_value_sigE521,
          undos: var_core_value_sig0571
        } = Q(var_core_value_sig796D, {
          pivotTableId: var_core_value_sig97B1,
          unitId: var_core_value_sigD652,
          subUnitId: var_core_value_sig6289
        }, var_core_value_sig0591);
      return (0x0, t["sequenceExecute"])([...var_core_value_sig0E88[ox94f36c(0x214)], ...var_core_value_sig13C8[ox94f36c(0x214)], ...var_core_value_sigE521], var_core_value_sig796D)["result"] ? (var_core_value_sigEA89["pushUndoRedo"]({
        unitID: var_core_value_sigD652,
        redoMutations: [...var_core_value_sig0E88["redos"], ...var_core_value_sig13C8[ox94f36c(0x214)], ...var_core_value_sigE521],
        undoMutations: [...var_core_value_sig0E88["undos"], ...var_core_value_sig13C8[ox94f36c(0x49e)], ...var_core_value_sig0571]
      }), !0x0) : !0x1;
    }
  },
  Ut = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.set-pivot-position",
    handler(var_core_value_sig43F4, var_core_value_sig37F8) {
      if (!var_core_value_sig37F8) return !0x1;
      if (var_core_value_sig43F4["get"](t["IConfigService"])[ox2df7fb(0x3c0)](ox2df7fb(0x285))) return !0x0;
      let {
          pivotTableId: var_core_value_sig45D3,
          targetCellPosition: var_core_value_sigE2F3,
          unitId: var_core_value_sig9CB1,
          subUnitId: var_core_value_sigFB76
        } = var_core_value_sig37F8,
        var_core_value_sig58A5 = var_core_value_sig43F4["get"](K);
      if (!var_core_value_sig58A5[ox2df7fb(0x2fb)](var_core_value_sig37F8[ox2df7fb(0x4a4)])) return !0x1;
      let var_core_value_sigA486 = var_core_value_sig58A5["getTargetByPivotId"](var_core_value_sig45D3);
      if (!var_core_value_sigA486) return !0x1;
      let var_core_value_sigB0DE = var_core_value_sig58A5["getCollection"](var_core_value_sigA486["unitId"], var_core_value_sig37F8[ox2df7fb(0x4a4)]);
      if (!var_core_value_sigB0DE) return !0x1;
      let var_core_value_sig6793 = var_core_value_sig58A5[ox2df7fb(0x2e6)](var_core_value_sigA486[ox2df7fb(0x386)], var_core_value_sigA486[ox2df7fb(0x1bf)], var_core_value_sig45D3);
      if (!var_core_value_sig6793) return !0x1;
      let var_core_value_sigECD2 = t[ox2df7fb(0x23b)]["deepClone"](var_core_value_sig6793);
      var_core_value_sigECD2[ox2df7fb(0x376)] = {
        unitId: var_core_value_sig9CB1,
        subUnitId: var_core_value_sigFB76,
        row: var_core_value_sigE2F3[ox2df7fb(0x292)],
        col: var_core_value_sigE2F3["col"]
      };
      let var_core_value_sigD28E = var_core_value_sigB0DE[ox2df7fb(0x1c6)]();
      if (var_core_value_sigA486[ox2df7fb(0x1bf)] === var_core_value_sigFB76 && var_core_value_sigA486["unitId"] === var_core_value_sig9CB1) var_core_value_sig58A5[ox2df7fb(0x302)](var_core_value_sig9CB1, var_core_value_sigFB76, var_core_value_sig45D3, var_core_value_sigECD2), var_core_value_sig58A5[ox2df7fb(0x3b0)]({
        unitId: var_core_value_sig9CB1,
        subUnitId: var_core_value_sigFB76,
        token: var_core_value_sig45D3,
        type: ox2df7fb(0x2d0)
      });else {
        var_core_value_sig58A5[ox2df7fb(0x3b0)]({
          unitId: var_core_value_sigA486[ox2df7fb(0x386)],
          subUnitId: var_core_value_sigA486[ox2df7fb(0x1bf)],
          token: var_core_value_sig45D3,
          type: "delete"
        }), var_core_value_sig58A5["removePivotTable"](var_core_value_sigA486[ox2df7fb(0x386)], var_core_value_sigA486["subUnitId"], var_core_value_sig45D3);
        let var_core_value_sig32E7 = new e["PivotTable"](var_core_value_sig58A5["addCollectionByJSON"](var_core_value_sig45D3, var_core_value_sigD28E, var_core_value_sig6793["sourceRangeInfo"], var_core_value_sigECD2[ox2df7fb(0x376)])[ox2df7fb(0x349)], void 0x0, var_core_value_sig45D3);
        var_core_value_sig32E7[ox2df7fb(0x329)](var_core_value_sigECD2[ox2df7fb(0x2a9)]), var_core_value_sig58A5[ox2df7fb(0x357)](var_core_value_sig9CB1, var_core_value_sigFB76, var_core_value_sig45D3, var_core_value_sig32E7, var_core_value_sigECD2), var_core_value_sig58A5["addDirtyPivotTable"]({
          unitId: var_core_value_sig9CB1,
          subUnitId: var_core_value_sigFB76,
          token: var_core_value_sig45D3,
          type: ox2df7fb(0x3db),
          pivotConfig: var_core_value_sigECD2
        });
      }
      return !0x0;
    }
  },
  Wt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.move-pivot-table",
    handler: (var_core_value_sigB896, var_core_value_sig22D9) => {
      if (!var_core_value_sig22D9) return !0x1;
      let var_core_value_sig7E70 = (0x0, r["getSheetCommandTarget"])(var_core_value_sigB896[ox19587b(0x345)](t[ox19587b(0x1ba)]), {
        unitId: var_core_value_sig22D9[ox19587b(0x376)][ox19587b(0x386)],
        subUnitId: var_core_value_sig22D9["targetCellInfo"][ox19587b(0x1bf)]
      });
      if (!var_core_value_sig7E70) throw Error(ox19587b(0x24c));
      let var_core_value_sig9CCC = var_core_value_sigB896[ox19587b(0x345)](Y)["getPivotTableConfig"](var_core_value_sig22D9[ox19587b(0x4bc)][ox19587b(0x386)], var_core_value_sig22D9["originTargetInfo"]["subUnitId"], var_core_value_sig22D9[ox19587b(0x4a4)]);
      if (!var_core_value_sig9CCC) return !0x1;
      let var_core_value_sigEB93 = var_core_value_sigB896[ox19587b(0x345)](t[ox19587b(0x1b2)]),
        var_core_value_sig8F13 = var_core_value_sigB896[ox19587b(0x345)](t[ox19587b(0x256)]),
        {
          unitId: var_core_value_sigAC84,
          subUnitId: var_core_value_sig1312,
          worksheet: var_core_value_sig18A9
        } = var_core_value_sig7E70,
        var_core_value_sigE028 = var_core_value_sig18A9["getRowCount"](),
        var_core_value_sig8FC31 = var_core_value_sig18A9[ox19587b(0x13e)]();
      if (var_core_value_sig22D9[ox19587b(0x376)]["row"] > var_core_value_sigE028 || var_core_value_sig22D9[ox19587b(0x376)][ox19587b(0x1a4)] > var_core_value_sig8FC31) throw Error(ox19587b(0x1f0));
      let var_core_value_sig76A1 = [{
          id: Ut["id"],
          params: {
            unitId: var_core_value_sigAC84,
            subUnitId: var_core_value_sig22D9[ox19587b(0x376)][ox19587b(0x1bf)],
            pivotTableId: var_core_value_sig22D9[ox19587b(0x4a4)],
            targetCellPosition: {
              row: var_core_value_sig22D9[ox19587b(0x376)][ox19587b(0x292)],
              col: var_core_value_sig22D9[ox19587b(0x376)]["col"]
            }
          }
        }],
        var_core_value_sig642F = [{
          id: Ut["id"],
          params: {
            unitId: var_core_value_sigAC84,
            subUnitId: var_core_value_sig1312,
            pivotTableId: var_core_value_sig22D9["pivotTableId"],
            targetCellPosition: {
              row: var_core_value_sig9CCC[ox19587b(0x376)][ox19587b(0x292)],
              col: var_core_value_sig9CCC["targetCellInfo"][ox19587b(0x1a4)]
            }
          }
        }];
      return (0x0, t[ox19587b(0x135)])(var_core_value_sig76A1, var_core_value_sigEB93)[ox19587b(0x409)] ? (var_core_value_sig8F13[ox19587b(0x462)]({
        unitID: var_core_value_sigAC84,
        undoMutations: var_core_value_sig642F,
        redoMutations: var_core_value_sig76A1
      }), !0x0) : !0x1;
    }
  },
  Gt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.pivot-drill-down",
    async handler(var_core_value_sigF190, var_core_value_sig5BF0) {
      var var_core_value_sig4144;
      if (!var_core_value_sig5BF0) return !0x1;
      let var_core_value_sig81CB = var_core_value_sigF190[ox37dc49(0x345)](t[ox37dc49(0x1ba)]),
        var_core_value_sig7C8C = (0x0, r[ox37dc49(0x1b5)])(var_core_value_sig81CB);
      if (!var_core_value_sig7C8C) return !0x1;
      let {
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sig018A,
          workbook: var_core_value_sigECD9
        } = var_core_value_sig7C8C,
        {
          row: var_core_value_sig900B,
          col: var_core_value_sig82F5
        } = var_core_value_sig5BF0,
        var_core_value_sigB2AC = var_core_value_sigF190[ox37dc49(0x345)](X),
        var_core_value_sigECB5 = var_core_value_sigB2AC[ox37dc49(0x152)](var_core_value_sigF533, var_core_value_sig018A, var_core_value_sig900B, var_core_value_sig82F5);
      if (!var_core_value_sigECB5) return !0x1;
      let var_core_value_sigA422 = (var_core_value_sig4144 = var_core_value_sigB2AC[ox37dc49(0x233)](var_core_value_sigF533, var_core_value_sig018A, var_core_value_sigECB5)) == null ? void 0x0 : var_core_value_sig4144[ox37dc49(0x440)];
      if (!var_core_value_sigA422) return !0x1;
      let var_core_value_sigDA36 = var_core_value_sigF190[ox37dc49(0x345)](Y)[ox37dc49(0x2e6)](var_core_value_sigF533, var_core_value_sig018A, var_core_value_sigECB5);
      if (!var_core_value_sigDA36) return !0x1;
      let {
          rowInfo: var_core_value_sig2A70,
          colInfo: var_core_value_sigA9DF
        } = var_core_value_sigA422,
        var_core_value_sigBC94 = var_core_value_sig2A70[var_core_value_sig900B],
        var_core_value_sig018B = var_core_value_sigA9DF[var_core_value_sig82F5];
      if (!var_core_value_sigBC94 || !var_core_value_sig018B) return !0x1;
      let var_core_value_sig6F36 = var_core_value_sigBC94[ox37dc49(0x253)],
        var_core_value_sigF1B5 = var_core_value_sig018B[ox37dc49(0x253)],
        var_core_value_sig51CE = var_core_value_sigBC94["level"],
        var_core_value_sigB5C9 = var_core_value_sig018B["level"],
        var_core_value_sigFEE6 = var_core_value_sig6F36[ox37dc49(0x3a3)](var_core_value_sigF1B5),
        var_core_value_sig8700 = var_core_value_sigDA36["fieldsConfig"][ox37dc49(0x39f)]["slice"](0x0, var_core_value_sig51CE),
        var_core_value_sig723F2 = var_core_value_sigDA36["fieldsConfig"][ox37dc49(0x1de)][ox37dc49(0x3ab)](0x0, var_core_value_sigB5C9),
        var_core_value_sig70D4 = var_core_value_sig8700[ox37dc49(0x3a3)](var_core_value_sig723F2),
        var_core_value_sig838B = var_core_value_sigFEE6[ox37dc49(0x15f)]((var_core_value_sigD8C3, var_core_value_sig3A441) => [var_core_value_sigD8C3, var_core_value_sig70D4[var_core_value_sig3A441]]),
        var_core_value_sigE6AD = (await var_core_value_sigF190[ox37dc49(0x345)](W)[ox37dc49(0x49f)]({
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sig018A,
          pivotTableId: var_core_value_sigECB5,
          params: {
            type: ox37dc49(0x33f),
            drillDown: {
              tuple: var_core_value_sig838B
            }
          }
        }))[ox37dc49(0x409)][ox37dc49(0x33f)];
      if (!var_core_value_sigE6AD) return !0x1;
      let {
          indexes: var_core_value_sigC4E91,
          range: var_core_value_sigE39E,
          sourceUnitId: var_core_value_sig6818,
          sourceSubUnitId: var_core_value_sig504F,
          formatMap: var_core_value_sigA21D
        } = var_core_value_sigE6AD,
        {
          startRow: var_core_value_sigB754,
          endRow: var_core_value_sig2B87,
          startColumn: var_core_value_sig2FFF,
          endColumn: var_core_value_sig82FF
        } = var_core_value_sigE39E,
        var_core_value_sig6C72 = new t[ox37dc49(0x38b)](),
        var_core_value_sig50E5 = var_core_value_sig2B87 - var_core_value_sigB754,
        var_core_value_sig6E14 = var_core_value_sig82FF - var_core_value_sig2FFF,
        var_core_value_sig4D3F = {},
        var_core_value_sigBE4F = (0x0, r[ox37dc49(0x1b5)])(var_core_value_sig81CB, {
          unitId: var_core_value_sig6818,
          subUnitId: var_core_value_sig504F
        });
      if (!var_core_value_sigBE4F) return !0x1;
      let var_core_value_sig8DF2 = w[ox37dc49(0x24e)],
        var_core_value_sig666F = w[ox37dc49(0x1c5)],
        var_core_value_sig2BE5 = w["subTotalStyle"],
        var_core_value_sig79D6 = var_core_value_sigECD9[ox37dc49(0x439)]()[ox37dc49(0x300)](var_core_value_sig8DF2),
        var_core_value_sig6476 = var_core_value_sigECD9["getStyles"]()[ox37dc49(0x300)](var_core_value_sig666F),
        var_core_value_sigAFF3 = var_core_value_sigECD9[ox37dc49(0x439)]()[ox37dc49(0x300)](var_core_value_sig2BE5),
        {
          worksheet: var_core_value_sig866B
        } = var_core_value_sigBE4F,
        var_core_value_sig40A0 = 0x0;
      var_core_value_sigC4E91[ox37dc49(0x231)](var_core_value_sig0642 => {
        const var_core_value_sig786E = ox37dc49;
        for (let var_core_value_sig8AF3 = 0x0; var_core_value_sig8AF3 <= var_core_value_sig82FF - var_core_value_sig2FFF; var_core_value_sig8AF3++) var_core_value_sig6C72[var_core_value_sig786E(0x300)](var_core_value_sig40A0, var_core_value_sig8AF3, var_core_value_sig866B[var_core_value_sig786E(0x1d8)](var_core_value_sig0642 + var_core_value_sigE39E[var_core_value_sig786E(0x3f1)] + 0x1, var_core_value_sig8AF3));
        var_core_value_sig40A0++;
      });
      for (let var_core_value_sigFC47 = var_core_value_sig2FFF; var_core_value_sigFC47 <= var_core_value_sig82FF; var_core_value_sigFC47++) {
        let var_core_value_sigA0CC = var_core_value_sig866B[ox37dc49(0x1d8)](var_core_value_sigB754, var_core_value_sigFC47);
        var_core_value_sig4D3F[var_core_value_sigB754] || (var_core_value_sig4D3F[var_core_value_sigB754] = {}), var_core_value_sig4D3F[var_core_value_sigB754][var_core_value_sigFC47] = {
          ...var_core_value_sigA0CC,
          s: var_core_value_sig79D6
        };
      }
      let var_core_value_sig86F0 = 0x1,
        var_core_value_sigE4B4 = {},
        var_core_value_sig1D8C = {};
      var_core_value_sig6C72[ox37dc49(0x2df)]((var_core_value_sig48E2, var_core_value_sig2FCA) => {
        const var_core_value_sig04F2 = ox37dc49;
        var_core_value_sig2FCA[var_core_value_sig04F2(0x231)](var_core_value_sigB3A1 => {
          const var_core_value_sig1FB9 = var_core_value_sig04F2;
          let var_core_value_sig53A9 = var_core_value_sig6C72[var_core_value_sig1FB9(0x197)](var_core_value_sig48E2, var_core_value_sigB3A1);
          if (var_core_value_sig4D3F[var_core_value_sig86F0] || (var_core_value_sig4D3F[var_core_value_sig86F0] = {}), var_core_value_sig4D3F[var_core_value_sig86F0][var_core_value_sigB3A1] = {
            ...var_core_value_sig53A9,
            s: var_core_value_sig86F0 % 0x2 == 0x0 ? var_core_value_sigAFF3 : var_core_value_sig6476
          }, var_core_value_sigA21D[var_core_value_sigB3A1] && var_core_value_sig48E2 >= 0x0) {
            let var_core_value_sigA5C3 = var_core_value_sig86F0 % 0x2 == 0x0,
              var_core_value_sig3A1E = var_core_value_sigA5C3 ? var_core_value_sig1D8C[var_core_value_sigB3A1] : var_core_value_sigE4B4[var_core_value_sigB3A1];
            var_core_value_sig3A1E || (var_core_value_sig3A1E = var_core_value_sigECD9[var_core_value_sig1FB9(0x439)]()[var_core_value_sig1FB9(0x300)]({
              ...(var_core_value_sigA5C3 ? var_core_value_sig2BE5 : var_core_value_sig666F),
              n: {
                pattern: var_core_value_sigA21D[var_core_value_sigB3A1]
              }
            }), var_core_value_sigA5C3 ? var_core_value_sig1D8C[var_core_value_sigB3A1] = var_core_value_sig3A1E : var_core_value_sigE4B4[var_core_value_sigB3A1] = var_core_value_sig3A1E), var_core_value_sig4D3F[var_core_value_sig86F0][var_core_value_sigB3A1]["s"] = var_core_value_sig3A1E;
          }
        }), var_core_value_sig86F0++;
      });
      let var_core_value_sigED34 = new t[ox37dc49(0x38b)](var_core_value_sig4D3F),
        var_core_value_sig74CE = {};
      var_core_value_sigED34[ox37dc49(0x1e5)]((var_core_value_sig2CFC, var_core_value_sig5CEB, var_core_value_sig4935) => {
        var_core_value_sig74CE[var_core_value_sig2CFC] || (var_core_value_sig74CE[var_core_value_sig2CFC] = {}), var_core_value_sig74CE[var_core_value_sig2CFC][var_core_value_sig5CEB] = {
          s: null,
          f: null,
          si: null,
          p: null,
          v: null,
          t: null,
          custom: null
        };
      });
      let var_core_value_sig7FB9 = [],
        var_core_value_sigAE9F = [],
        var_core_value_sigFF68 = var_core_value_sigECD9[ox37dc49(0x17c)]()["length"],
        var_core_value_sigC604 = (0x0, t[ox37dc49(0x444)])({
          rowCount: Math[ox37dc49(0x13b)](t["DEFAULT_WORKSHEET_ROW_COUNT"], var_core_value_sig50E5 + 0xa),
          columnCount: Math[ox37dc49(0x13b)](t["DEFAULT_WORKSHEET_COLUMN_COUNT"], var_core_value_sig6E14 + 0x5)
        }),
        var_core_value_sigE56F = var_core_value_sigF190[ox37dc49(0x345)](t["LocaleService"]);
      var_core_value_sigC604["id"] = (0x0, t[ox37dc49(0x2fe)])(), var_core_value_sigC604[ox37dc49(0x194)] = var_core_value_sigECD9[ox37dc49(0x426)]("" + var_core_value_sigE56F["t"](ox37dc49(0x400)));
      let var_core_value_sig6D7D = {
          index: var_core_value_sigFF68,
          sheet: var_core_value_sigC604,
          unitId: var_core_value_sigF533
        },
        var_core_value_sig335B = (0x0, r[ox37dc49(0x4a7)])(var_core_value_sigF190, var_core_value_sig6D7D);
      var_core_value_sigAE9F[ox37dc49(0x19f)]({
        id: r[ox37dc49(0x463)]["id"],
        params: var_core_value_sig6D7D
      }), var_core_value_sig7FB9[ox37dc49(0x19f)]({
        id: r[ox37dc49(0x163)]["id"],
        params: var_core_value_sig335B
      }), var_core_value_sigAE9F["push"]({
        id: r[ox37dc49(0x3e6)]["id"],
        params: {
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sigC604["id"],
          cellValue: var_core_value_sig4D3F
        }
      }), var_core_value_sig7FB9[ox37dc49(0x38e)]({
        id: r[ox37dc49(0x3e6)]["id"],
        params: {
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sigC604["id"],
          cellValue: var_core_value_sig74CE
        }
      });
      let var_core_value_sig61E2 = {
        startRow: 0x0,
        startColumn: 0x0,
        endRow: var_core_value_sig86F0 - 0x1,
        endColumn: var_core_value_sig82FF
      };
      return var_core_value_sigAE9F[ox37dc49(0x19f)]({
        id: s["SetSheetsFilterRangeMutation"]["id"],
        params: {
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sigC604["id"],
          range: var_core_value_sig61E2
        }
      }), var_core_value_sig7FB9[ox37dc49(0x38e)]({
        id: s["RemoveSheetsFilterMutation"]["id"],
        params: {
          unitId: var_core_value_sigF533,
          subUnitId: var_core_value_sigC604["id"]
        }
      }), (0x0, t[ox37dc49(0x135)])(var_core_value_sigAE9F, var_core_value_sigF190[ox37dc49(0x345)](t["ICommandService"]))["result"] ? (var_core_value_sigF190[ox37dc49(0x345)](t[ox37dc49(0x256)])[ox37dc49(0x462)]({
        unitID: var_core_value_sigF533,
        undoMutations: var_core_value_sig7FB9,
        redoMutations: var_core_value_sigAE9F
      }), !0x0) : !0x1;
    }
  },
  Kt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.remove-pivot-field",
    async handler(var_core_value_sig974B, var_core_value_sigB89A) {
      if (!var_core_value_sigB89A) return !0x1;
      let var_core_value_sig3B83 = var_core_value_sig974B["get"](t[ox467fce(0x1b2)]),
        var_core_value_sig3092 = var_core_value_sig974B[ox467fce(0x345)](W),
        var_core_value_sigBFDA = var_core_value_sig974B[ox467fce(0x345)](t["IUndoRedoService"]),
        {
          pivotTableId: var_core_value_sig995C,
          fieldIds: var_core_value_sig364B,
          unitId: var_core_value_sig2C9F,
          subUnitId: var_core_value_sig4133
        } = var_core_value_sigB89A,
        var_core_value_sig8333 = (await var_core_value_sig3092["getPivotDisplayConfig"]({
          unitId: var_core_value_sig2C9F,
          subUnitId: var_core_value_sig4133,
          pivotTableId: var_core_value_sig995C,
          params: {
            type: ox467fce(0x401),
            removePivotField: {
              fieldIds: var_core_value_sig364B
            }
          }
        }))[ox467fce(0x409)][ox467fce(0x401)];
      if (!var_core_value_sig8333) return !0x1;
      let {
          view: var_core_value_sigB171,
          changesets: var_core_value_sigA6AB,
          isEmpty: var_core_value_sigDC81,
          pivotTableConfig: var_core_value_sig6378
        } = var_core_value_sig8333,
        var_core_value_sig3C58 = var_core_value_sig6378[ox467fce(0x376)],
        var_core_value_sig1D57 = new e[ox467fce(0x18a)]();
      var_core_value_sig1D57[ox467fce(0x3cb)](var_core_value_sigB171);
      let var_core_value_sig45F01 = {
        cellInfo: var_core_value_sig3C58,
        view: var_core_value_sig1D57,
        isEmpty: var_core_value_sigDC81
      };
      if (!(await var_core_value_sig974B[ox467fce(0x345)](Z)["asyncInterceptor"]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sig45F01))) return !0x1;
      let var_core_value_sig7AFB = J(var_core_value_sig974B, var_core_value_sig1D57, var_core_value_sig3C58, var_core_value_sigDC81),
        var_core_value_sig54CD = $(var_core_value_sig974B, var_core_value_sig45F01),
        {
          redos: var_core_value_sigF4AD,
          undos: var_core_value_sigF802
        } = Q(var_core_value_sig3B83, {
          pivotTableId: var_core_value_sig995C,
          unitId: var_core_value_sig2C9F,
          subUnitId: var_core_value_sig4133
        }, var_core_value_sigA6AB);
      return (0x0, t[ox467fce(0x135)])([...var_core_value_sig7AFB[ox467fce(0x214)], ...var_core_value_sig54CD["redos"], ...var_core_value_sigF4AD], var_core_value_sig3B83)["result"] ? (var_core_value_sigBFDA["pushUndoRedo"]({
        unitID: var_core_value_sig2C9F,
        redoMutations: [...var_core_value_sig7AFB[ox467fce(0x214)], ...var_core_value_sig54CD[ox467fce(0x214)], ...var_core_value_sigF4AD],
        undoMutations: [...var_core_value_sig7AFB[ox467fce(0x49e)], ...var_core_value_sig54CD[ox467fce(0x49e)], ...var_core_value_sigF802]
      }), !0x0) : !0x1;
    }
  },
  qt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.remove-pivot-table",
    handler(var_core_value_sig90E4, var_core_value_sig23B5) {
      if (!var_core_value_sig23B5) return !0x1;
      let var_core_value_sigB560 = var_core_value_sig90E4[ox42bbf4(0x345)](t["ICommandService"]),
        var_core_value_sigB46F = var_core_value_sig90E4[ox42bbf4(0x345)](t[ox42bbf4(0x256)]),
        var_core_value_sig440F = var_core_value_sig90E4["get"](Y),
        {
          unitId: var_core_value_sigB857,
          subUnitId: var_core_value_sig0743,
          pivotTableId: var_core_value_sigFDAF
        } = var_core_value_sig23B5,
        var_core_value_sigFC34 = var_core_value_sig440F[ox42bbf4(0x2e6)](var_core_value_sigB857, var_core_value_sig0743, var_core_value_sigFDAF),
        var_core_value_sig162E = var_core_value_sig440F[ox42bbf4(0x3f3)](var_core_value_sigB857, var_core_value_sigFDAF);
      if (!var_core_value_sigFC34 || !var_core_value_sig162E) return !0x1;
      let var_core_value_sigB564 = [{
          id: Pt["id"],
          params: var_core_value_sig23B5
        }],
        var_core_value_sig5989 = [{
          id: Mt["id"],
          params: {
            unitId: var_core_value_sigB857,
            subUnitId: var_core_value_sig0743,
            pivotTableId: var_core_value_sigFDAF,
            pivotTableConfig: t["Tools"][ox42bbf4(0x196)](var_core_value_sigFC34),
            collectionConfig: t[ox42bbf4(0x23b)][ox42bbf4(0x196)](var_core_value_sig162E)
          }
        }];
      return (0x0, t[ox42bbf4(0x135)])(var_core_value_sigB564, var_core_value_sigB560)[ox42bbf4(0x409)] ? (var_core_value_sigB46F[ox42bbf4(0x462)]({
        unitID: var_core_value_sigB857,
        redoMutations: var_core_value_sigB564,
        undoMutations: var_core_value_sig5989
      }), !0x0) : !0x1;
    }
  },
  Jt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.reset-pivot-fields-config",
    async handler(var_core_value_sigC36D, var_core_value_sig580E) {
      if (!var_core_value_sig580E) return !0x1;
      let var_core_value_sigF338 = var_core_value_sigC36D["get"](t[ox183373(0x1b2)]),
        var_core_value_sig6EEE = var_core_value_sigC36D[ox183373(0x345)](t[ox183373(0x256)]),
        var_core_value_sigC0CF = var_core_value_sigC36D[ox183373(0x345)](W),
        {
          resetArea: var_core_value_sig10D4,
          pivotTableId: var_core_value_sigE597,
          unitId: var_core_value_sig4C3E,
          subUnitId: var_core_value_sig616D
        } = var_core_value_sig580E,
        var_core_value_sig0F8A = (await var_core_value_sigC0CF["getPivotDisplayConfig"]({
          unitId: var_core_value_sig4C3E,
          subUnitId: var_core_value_sig616D,
          pivotTableId: var_core_value_sigE597,
          params: {
            type: ox183373(0x3c8),
            resetPivotTable: {
              pivotTableId: var_core_value_sigE597,
              resetArea: var_core_value_sig10D4
            }
          }
        }))[ox183373(0x409)][ox183373(0x3c8)];
      if (!var_core_value_sig0F8A) return !0x1;
      let {
          changesets: var_core_value_sig2FD4
        } = var_core_value_sig0F8A,
        {
          redos: var_core_value_sig9AF9,
          undos: var_core_value_sig662D
        } = Q(var_core_value_sigF338, {
          pivotTableId: var_core_value_sigE597,
          unitId: var_core_value_sig4C3E,
          subUnitId: var_core_value_sig616D
        }, var_core_value_sig2FD4);
      return (0x0, t[ox183373(0x135)])(var_core_value_sig9AF9, var_core_value_sigF338)["result"] ? (var_core_value_sig6EEE[ox183373(0x462)]({
        unitID: var_core_value_sig4C3E,
        redoMutations: var_core_value_sig9AF9,
        undoMutations: var_core_value_sig662D
      }), !0x0) : !0x1;
    }
  },
  Yt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-collapse",
    async handler(var_core_value_sig1452, var_core_value_sig6050) {
      let var_core_value_sig896E = var_core_value_sig1452[ox5c3be5(0x345)](t[ox5c3be5(0x1b2)]),
        var_core_value_sig6D9B = var_core_value_sig1452[ox5c3be5(0x345)](W),
        var_core_value_sig9425 = var_core_value_sig1452["get"](X),
        var_core_value_sigCE16 = var_core_value_sig1452[ox5c3be5(0x345)](t[ox5c3be5(0x1ba)]),
        var_core_value_sig0207 = var_core_value_sig1452[ox5c3be5(0x345)](t[ox5c3be5(0x1b3)]),
        var_core_value_sig5FE7 = var_core_value_sig1452["get"](t[ox5c3be5(0x256)]);
      if (!var_core_value_sig6050) return !0x1;
      let {
          unitId: var_core_value_sig5BA5,
          subUnitId: var_core_value_sig4F79,
          row: var_core_value_sig2BD8,
          col: var_core_value_sigC182,
          collapse: var_core_value_sig1373
        } = var_core_value_sig6050,
        var_core_value_sig2D20 = var_core_value_sigCE16[ox5c3be5(0x2a4)](var_core_value_sig5BA5);
      if (!var_core_value_sig2D20 || !var_core_value_sig2D20[ox5c3be5(0x16b)](var_core_value_sig4F79)) return !0x1;
      let var_core_value_sigB4E5 = var_core_value_sig9425[ox5c3be5(0x152)](var_core_value_sig5BA5, var_core_value_sig4F79, var_core_value_sig2BD8, var_core_value_sigC182);
      if (!var_core_value_sigB4E5) return !0x1;
      let var_core_value_sigA9C9 = var_core_value_sig9425[ox5c3be5(0x233)](var_core_value_sig5BA5, var_core_value_sig4F79, var_core_value_sigB4E5);
      if (!var_core_value_sigA9C9) return !0x1;
      let var_core_value_sigDA64 = var_core_value_sig9425[ox5c3be5(0x1dc)](var_core_value_sig5BA5, var_core_value_sig4F79, var_core_value_sig2BD8, var_core_value_sigC182),
        var_core_value_sigBE3F = ve(var_core_value_sig2BD8, var_core_value_sigC182, var_core_value_sigDA64, var_core_value_sigA9C9),
        var_core_value_sig072F = var_core_value_sigBE3F == null ? void 0x0 : var_core_value_sigBE3F[ox5c3be5(0x30c)],
        var_core_value_sigD794 = var_core_value_sigDA64 == null ? void 0x0 : var_core_value_sigDA64["v"];
      if (var_core_value_sigD794 === var_core_value_sig0207["t"](ox5c3be5(0x241)) && (var_core_value_sigD794 = e[ox5c3be5(0x2ad)][ox5c3be5(0x3e4)]), var_core_value_sigD794 == null || !var_core_value_sigB4E5 || !var_core_value_sig072F) return !0x1;
      let var_core_value_sigCB82 = await var_core_value_sig6D9B[ox5c3be5(0x49f)]({
          unitId: var_core_value_sig5BA5,
          subUnitId: var_core_value_sig4F79,
          pivotTableId: var_core_value_sigB4E5,
          params: {
            type: ox5c3be5(0x19c),
            setPivotCollapse: {
              tableFieldId: var_core_value_sig072F,
              collapse: var_core_value_sig1373,
              item: var_core_value_sigD794
            }
          }
        }),
        var_core_value_sigB67E = var_core_value_sigCB82 == null ? void 0x0 : var_core_value_sigCB82[ox5c3be5(0x409)]["setPivotCollapse"];
      if (!var_core_value_sigB67E) return !0x1;
      let {
          view: var_core_value_sig7504,
          pivotTableConfig: var_core_value_sigC2EA,
          isEmpty: var_core_value_sigC733,
          changesets: var_core_value_sig9E26
        } = var_core_value_sigB67E,
        var_core_value_sig6B84 = new e[ox5c3be5(0x18a)]();
      var_core_value_sig6B84[ox5c3be5(0x3cb)](var_core_value_sig7504);
      let var_core_value_sig2D04 = var_core_value_sigC2EA[ox5c3be5(0x376)],
        var_core_value_sigD3D6 = {
          cellInfo: var_core_value_sig2D04,
          view: var_core_value_sig6B84,
          isEmpty: var_core_value_sigC733
        };
      if (!(await var_core_value_sig1452["get"](Z)[ox5c3be5(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sigD3D6))) return !0x1;
      let var_core_value_sig5BE71 = J(var_core_value_sig1452, var_core_value_sig6B84, var_core_value_sig2D04, var_core_value_sigC733),
        var_core_value_sigFD72 = $(var_core_value_sig1452, var_core_value_sigD3D6),
        {
          redos: var_core_value_sig3FA8,
          undos: var_core_value_sig4749
        } = Q(var_core_value_sig896E, {
          pivotTableId: var_core_value_sigB4E5,
          unitId: var_core_value_sig5BA5,
          subUnitId: var_core_value_sig4F79
        }, var_core_value_sig9E26);
      return (0x0, t["sequenceExecute"])([...var_core_value_sig5BE71["redos"], ...var_core_value_sigFD72[ox5c3be5(0x214)], ...var_core_value_sig3FA8], var_core_value_sig896E)[ox5c3be5(0x409)] ? (var_core_value_sig5FE7["pushUndoRedo"]({
        unitID: var_core_value_sig5BA5,
        redoMutations: [...var_core_value_sig5BE71[ox5c3be5(0x214)], ...var_core_value_sigFD72[ox5c3be5(0x214)], ...var_core_value_sig3FA8],
        undoMutations: [...var_core_value_sig5BE71[ox5c3be5(0x49e)], ...var_core_value_sigFD72["undos"], ...var_core_value_sig4749]
      }), !0x0) : !0x1;
    }
  },
  Xt = {
    id: "sheet.mutation.update-date-group",
    type: t["CommandType"]["MUTATION"],
    handler: (var_core_value_sig5D76, var_core_value_sigB8B6) => {
      if (!var_core_value_sigB8B6) return !0x1;
      if (var_core_value_sig5D76[ox3bf89a(0x345)](t[ox3bf89a(0x174)])["getConfig"](ox3bf89a(0x285))) return !0x0;
      let {
          unitId: var_core_value_sig93DE,
          subUnitId: var_core_value_sigA278,
          pivotTableId: var_core_value_sig4263,
          tableFieldId: var_core_value_sig5B46,
          dateType: var_core_value_sig1533
        } = var_core_value_sigB8B6,
        var_core_value_sig8C06 = var_core_value_sig5D76[ox3bf89a(0x345)](K),
        var_core_value_sig04F0 = var_core_value_sig8C06[ox3bf89a(0x2fb)](var_core_value_sig4263);
      if (!var_core_value_sig04F0) return !0x1;
      let var_core_value_sigCDD1 = var_core_value_sig04F0[ox3bf89a(0x25c)](var_core_value_sig5B46);
      if (!var_core_value_sigCDD1) return !0x1;
      let var_core_value_sig6C50 = var_core_value_sigCDD1[ox3bf89a(0x415)](),
        var_core_value_sig7926 = var_core_value_sig04F0[ox3bf89a(0x28f)](var_core_value_sig6C50),
        var_core_value_sig88B3 = (var_core_value_sig7926 == null ? void 0x0 : var_core_value_sig7926[ox3bf89a(0x1f7)]()) + "\x20-\x20" + Ke(var_core_value_sig5D76, var_core_value_sig1533);
      var_core_value_sig8C06["getCollection"](var_core_value_sig93DE, var_core_value_sig4263)[ox3bf89a(0x411)](var_core_value_sigCDD1["id"], var_core_value_sig88B3);
      let var_core_value_sig6044 = var_core_value_sig04F0["getTableFieldById"](var_core_value_sig5B46);
      if (!var_core_value_sig6044) return !0x1;
      if (var_core_value_sig04F0["renameField"](var_core_value_sig6044[ox3bf89a(0x1b6)](), var_core_value_sig88B3), var_core_value_sigCDD1[ox3bf89a(0x2d4)](var_core_value_sig1533), var_core_value_sig7926) {
        let var_core_value_sig1832 = var_core_value_sig5D76[ox3bf89a(0x345)](t["IUniverInstanceService"])[ox3bf89a(0x2a4)](var_core_value_sig93DE, t[ox3bf89a(0x2b3)][ox3bf89a(0x333)]);
        Ge(var_core_value_sig1832 == null ? void 0x0 : var_core_value_sig1832[ox3bf89a(0x475)]()), var_core_value_sigCDD1["refreshGroupField"](var_core_value_sig7926);
      }
      var_core_value_sig04F0[ox3bf89a(0x139)](!0x0);
      let var_core_value_sigEE54 = var_core_value_sig8C06["getPivotTableConfig"](var_core_value_sig93DE, var_core_value_sigA278, var_core_value_sig4263);
      return var_core_value_sig8C06[ox3bf89a(0x3b0)]({
        unitId: var_core_value_sig93DE,
        subUnitId: var_core_value_sigA278,
        token: var_core_value_sig4263,
        type: ox3bf89a(0x2d0),
        pivotConfig: var_core_value_sigEE54
      }), !0x0;
    }
  },
  Zt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-date-group",
    async handler(var_core_value_sigBC8E, var_core_value_sig65B41) {
      if (!var_core_value_sig65B41) return !0x1;
      let {
          unitId: var_core_value_sig38F9,
          subUnitId: var_core_value_sig4EFC,
          pivotTableId: var_core_value_sigB70F,
          tableFieldId: var_core_value_sig50E51,
          dateType: var_core_value_sig8AD2
        } = var_core_value_sig65B41,
        var_core_value_sigEF27 = var_core_value_sigBC8E[ox28be59(0x345)](t[ox28be59(0x1b2)]),
        var_core_value_sigD45F = var_core_value_sigBC8E[ox28be59(0x345)](Y),
        var_core_value_sig9764 = var_core_value_sigD45F[ox28be59(0x2e6)](var_core_value_sig38F9, var_core_value_sig4EFC, var_core_value_sigB70F),
        var_core_value_sig397B = var_core_value_sigD45F["getCollection"](var_core_value_sig38F9, var_core_value_sigB70F),
        var_core_value_sigC2FF = Lt(var_core_value_sig9764 == null ? void 0x0 : var_core_value_sig9764["fieldsConfig"], var_core_value_sig397B, var_core_value_sig50E51);
      if (!var_core_value_sigC2FF || Rt(var_core_value_sigC2FF, var_core_value_sig8AD2)) return !0x1;
      let var_core_value_sig8A75 = var_core_value_sigBC8E[ox28be59(0x345)](W),
        var_core_value_sigCA67 = var_core_value_sigBC8E[ox28be59(0x345)](t[ox28be59(0x256)]),
        var_core_value_sigDFDA = (await var_core_value_sig8A75[ox28be59(0x49f)]({
          unitId: var_core_value_sig38F9,
          subUnitId: var_core_value_sig4EFC,
          pivotTableId: var_core_value_sigB70F,
          params: {
            type: ox28be59(0x320),
            setPivotDateGroup: {
              tableFieldId: var_core_value_sig50E51,
              dateType: var_core_value_sig8AD2
            }
          }
        }))[ox28be59(0x409)][ox28be59(0x320)];
      if (!var_core_value_sigDFDA) return !0x1;
      let {
          view: var_core_value_sigEAA1,
          changesets: var_core_value_sig77BA,
          isEmpty: var_core_value_sig9ED0,
          pivotTableConfig: var_core_value_sigB650,
          shouldBeAddedGroupJSON: var_core_value_sig74A8
        } = var_core_value_sigDFDA,
        var_core_value_sigC129 = var_core_value_sigB650[ox28be59(0x376)],
        var_core_value_sig59D5 = new e[ox28be59(0x18a)]();
      var_core_value_sig59D5[ox28be59(0x3cb)](var_core_value_sigEAA1);
      let var_core_value_sig7A96 = {
        cellInfo: var_core_value_sigC129,
        view: var_core_value_sig59D5,
        isEmpty: var_core_value_sig9ED0
      };
      if (!(await var_core_value_sigBC8E["get"](Z)[ox28be59(0x49b)][ox28be59(0x226)](R)(!0x0, var_core_value_sig7A96))) return !0x1;
      let var_core_value_sigD72E = J(var_core_value_sigBC8E, var_core_value_sig59D5, var_core_value_sigC129, var_core_value_sig9ED0),
        var_core_value_sig3E1F = $(var_core_value_sigBC8E, var_core_value_sig7A96),
        {
          undos: var_core_value_sig7D3E,
          redos: var_core_value_sig9D1B
        } = Q(var_core_value_sigEF27, {
          pivotTableId: var_core_value_sigB70F,
          unitId: var_core_value_sig38F9,
          subUnitId: var_core_value_sig4EFC
        }, var_core_value_sig77BA);
      var_core_value_sig74A8 && (var_core_value_sig9D1B[ox28be59(0x38e)]({
        id: Xe["id"],
        params: {
          pivotTableId: var_core_value_sigB70F,
          fieldJSON: var_core_value_sig74A8,
          unitId: var_core_value_sig38F9,
          subUnitId: var_core_value_sig4EFC
        }
      }), var_core_value_sig7D3E[ox28be59(0x19f)]({
        id: Ze["id"],
        params: {
          pivotTableId: var_core_value_sigB70F,
          dataFieldId: var_core_value_sig74A8["id"],
          unitId: var_core_value_sig38F9,
          subUnitId: var_core_value_sig4EFC
        }
      })), var_core_value_sigC2FF[ox28be59(0x3ce)] === "date-group" && var_core_value_sigC2FF[ox28be59(0x206)] && (var_core_value_sig9D1B[ox28be59(0x19f)]({
        id: Xt["id"],
        params: var_core_value_sig65B41
      }), var_core_value_sig7D3E[ox28be59(0x19f)]({
        id: Xt["id"],
        params: {
          ...var_core_value_sig65B41,
          dateType: var_core_value_sigC2FF[ox28be59(0x206)]
        }
      }));
      let var_core_value_sigC043 = [...var_core_value_sigD72E["redos"], ...var_core_value_sig3E1F[ox28be59(0x214)], ...var_core_value_sig9D1B],
        var_core_value_sig12F2 = [...var_core_value_sigD72E[ox28be59(0x49e)], ...var_core_value_sig3E1F[ox28be59(0x49e)], ...var_core_value_sig7D3E];
      return (0x0, t[ox28be59(0x135)])(var_core_value_sigC043, var_core_value_sigEF27)["result"] ? (var_core_value_sigCA67["pushUndoRedo"]({
        unitID: var_core_value_sig38F9,
        redoMutations: var_core_value_sigC043,
        undoMutations: var_core_value_sig12F2
      }), !0x0) : !0x1;
    }
  },
  Qt = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-fields-config",
    async handler(var_core_value_sig3B28, var_core_value_sig9789) {
      if (!var_core_value_sig9789) return !0x1;
      let var_core_value_sig8475 = var_core_value_sig3B28[ox3608b5(0x345)](t[ox3608b5(0x1b2)]),
        var_core_value_sig88B7 = var_core_value_sig3B28["get"](t[ox3608b5(0x256)]),
        var_core_value_sigB177 = var_core_value_sig3B28[ox3608b5(0x345)](W),
        {
          pivotTableConfig: var_core_value_sig9946,
          pivotTableId: var_core_value_sig731A,
          unitId: var_core_value_sig8E75,
          subUnitId: var_core_value_sigF462
        } = var_core_value_sig9789,
        var_core_value_sigF519 = (await var_core_value_sigB177[ox3608b5(0x49f)]({
          unitId: var_core_value_sig8E75,
          subUnitId: var_core_value_sigF462,
          pivotTableId: var_core_value_sig731A,
          params: {
            type: ox3608b5(0x47f),
            setPivotTableConfig: {
              pivotTableId: var_core_value_sig731A,
              pivotTableConfig: var_core_value_sig9946
            }
          }
        }))[ox3608b5(0x409)][ox3608b5(0x47f)];
      if (!var_core_value_sigF519) return !0x1;
      let {
          changesets: var_core_value_sig80A1
        } = var_core_value_sigF519,
        {
          redos: var_core_value_sigA8D7,
          undos: var_core_value_sig5BB8
        } = Q(var_core_value_sig8475, {
          pivotTableId: var_core_value_sig731A,
          unitId: var_core_value_sig8E75,
          subUnitId: var_core_value_sigF462
        }, var_core_value_sig80A1);
      return (0x0, t[ox3608b5(0x135)])(var_core_value_sigA8D7, var_core_value_sig8475)["result"] ? (var_core_value_sig88B7["pushUndoRedo"]({
        unitID: var_core_value_sig8E75,
        redoMutations: var_core_value_sigA8D7,
        undoMutations: var_core_value_sig5BB8
      }), !0x0) : !0x1;
    }
  },
  $t = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-filter",
    async handler(var_core_value_sig784F, var_core_value_sig29001) {
      if (!var_core_value_sig29001) return !0x1;
      let var_core_value_sigF735 = var_core_value_sig784F[ox17cab2(0x345)](t["ICommandService"]),
        {
          pivotTableId: var_core_value_sig893C,
          tableFieldId: var_core_value_sigE82D,
          items: var_core_value_sig014E,
          unitId: var_core_value_sig57A3,
          subUnitId: var_core_value_sig4003,
          isAll: var_core_value_sig9454
        } = var_core_value_sig29001,
        var_core_value_sig9B63 = var_core_value_sig784F["get"](W),
        var_core_value_sigA86B = var_core_value_sig784F["get"](t[ox17cab2(0x256)]),
        var_core_value_sig8CE0 = (await var_core_value_sig9B63[ox17cab2(0x49f)]({
          unitId: var_core_value_sig57A3,
          subUnitId: var_core_value_sig4003,
          pivotTableId: var_core_value_sig893C,
          params: {
            type: ox17cab2(0x2e0),
            setPivotFilter: {
              tableFieldId: var_core_value_sigE82D,
              items: var_core_value_sig014E,
              isAll: var_core_value_sig9454
            }
          }
        }))[ox17cab2(0x409)][ox17cab2(0x2e0)];
      if (!var_core_value_sig8CE0) return !0x1;
      let {
          changesets: var_core_value_sig2D89,
          pivotTableConfig: var_core_value_sig08CE,
          isEmpty: var_core_value_sig5C06,
          view: var_core_value_sigA267
        } = var_core_value_sig8CE0,
        var_core_value_sig9E58 = var_core_value_sig08CE["targetCellInfo"],
        var_core_value_sigD105 = new e[ox17cab2(0x18a)]();
      var_core_value_sigD105[ox17cab2(0x3cb)](var_core_value_sigA267);
      let var_core_value_sig6F7E = {
        cellInfo: var_core_value_sig9E58,
        view: var_core_value_sigD105,
        isEmpty: var_core_value_sig5C06
      };
      if (!(await var_core_value_sig784F[ox17cab2(0x345)](Z)[ox17cab2(0x49b)][ox17cab2(0x226)](R)(!0x0, var_core_value_sig6F7E))) return !0x1;
      let var_core_value_sig3F21 = J(var_core_value_sig784F, var_core_value_sigD105, var_core_value_sig9E58, var_core_value_sig5C06),
        var_core_value_sig22FF = $(var_core_value_sig784F, var_core_value_sig6F7E),
        {
          undos: var_core_value_sig3189,
          redos: var_core_value_sigA5F8
        } = Q(var_core_value_sigF735, {
          pivotTableId: var_core_value_sig893C,
          unitId: var_core_value_sig57A3,
          subUnitId: var_core_value_sig4003
        }, var_core_value_sig2D89);
      return (0x0, t[ox17cab2(0x135)])([...var_core_value_sig3F21[ox17cab2(0x214)], ...var_core_value_sig22FF[ox17cab2(0x214)], ...var_core_value_sigA5F8], var_core_value_sigF735)[ox17cab2(0x409)] ? (var_core_value_sigA86B["pushUndoRedo"]({
        unitID: var_core_value_sig57A3,
        redoMutations: [...var_core_value_sig3F21[ox17cab2(0x214)], ...var_core_value_sig22FF["redos"], ...var_core_value_sigA5F8],
        undoMutations: [...var_core_value_sig3F21["undos"], ...var_core_value_sig22FF[ox17cab2(0x49e)], ...var_core_value_sig3189]
      }), !0x0) : !0x1;
    }
  },
  en = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-layout",
    async handler(var_core_value_sigA71A, var_core_value_sig11F1) {
      if (!var_core_value_sig11F1) return !0x1;
      let var_core_value_sigA71D = var_core_value_sigA71A[ox1c2066(0x345)](t[ox1c2066(0x1b2)]),
        var_core_value_sig669B = var_core_value_sigA71A[ox1c2066(0x345)](t[ox1c2066(0x256)]),
        var_core_value_sig0461 = var_core_value_sigA71A[ox1c2066(0x345)](W),
        {
          layout: var_core_value_sig4A6A,
          pivotTableId: var_core_value_sig52B7,
          unitId: var_core_value_sig5BA8,
          subUnitId: var_core_value_sig6CA3
        } = var_core_value_sig11F1,
        var_core_value_sig489C = (await var_core_value_sig0461[ox1c2066(0x49f)]({
          unitId: var_core_value_sig5BA8,
          subUnitId: var_core_value_sig6CA3,
          pivotTableId: var_core_value_sig52B7,
          params: {
            type: ox1c2066(0x3c6),
            setPivotLayout: {
              pivotTableId: var_core_value_sig52B7,
              layout: var_core_value_sig4A6A
            }
          }
        }))[ox1c2066(0x409)][ox1c2066(0x3c6)];
      if (!var_core_value_sig489C) return !0x1;
      let {
          changesets: var_core_value_sig9BF2
        } = var_core_value_sig489C,
        {
          redos: var_core_value_sigAD59,
          undos: var_core_value_sigD8D7
        } = Q(var_core_value_sigA71D, {
          pivotTableId: var_core_value_sig52B7,
          unitId: var_core_value_sig5BA8,
          subUnitId: var_core_value_sig6CA3
        }, var_core_value_sig9BF2);
      return (0x0, t[ox1c2066(0x135)])(var_core_value_sigAD59, var_core_value_sigA71D)[ox1c2066(0x409)] ? (var_core_value_sig669B[ox1c2066(0x462)]({
        unitID: var_core_value_sig5BA8,
        redoMutations: var_core_value_sigAD59,
        undoMutations: var_core_value_sigD8D7
      }), !0x0) : !0x1;
    }
  },
  tn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-table-options",
    async handler(var_core_value_sigDD66, var_core_value_sigDCB6) {
      if (!var_core_value_sigDCB6) return !0x1;
      let var_core_value_sigA346 = var_core_value_sigDD66[ox3698e3(0x345)](t[ox3698e3(0x1b2)]),
        var_core_value_sigDB37 = var_core_value_sigDD66[ox3698e3(0x345)](t[ox3698e3(0x256)]),
        var_core_value_sig2400 = var_core_value_sigDD66[ox3698e3(0x345)](W),
        {
          options: var_core_value_sig33E7,
          pivotTableId: var_core_value_sigCBAB,
          unitId: var_core_value_sigE3A5,
          subUnitId: var_core_value_sig500F
        } = var_core_value_sigDCB6,
        var_core_value_sig2D30 = (await var_core_value_sig2400[ox3698e3(0x49f)]({
          unitId: var_core_value_sigE3A5,
          subUnitId: var_core_value_sig500F,
          pivotTableId: var_core_value_sigCBAB,
          params: {
            type: ox3698e3(0x235),
            setOptions: {
              pivotTableId: var_core_value_sigCBAB,
              info: var_core_value_sig33E7
            }
          }
        }))["result"][ox3698e3(0x3a0)];
      if (!var_core_value_sig2D30) return !0x1;
      let {
          changesets: var_core_value_sig94E7
        } = var_core_value_sig2D30,
        {
          redos: var_core_value_sig7A7B,
          undos: var_core_value_sigA2D7
        } = Q(var_core_value_sigA346, {
          pivotTableId: var_core_value_sigCBAB,
          unitId: var_core_value_sigE3A5,
          subUnitId: var_core_value_sig500F
        }, var_core_value_sig94E7);
      return (0x0, t["sequenceExecute"])(var_core_value_sig7A7B, var_core_value_sigA346), var_core_value_sigDB37[ox3698e3(0x462)]({
        unitID: var_core_value_sigE3A5,
        redoMutations: var_core_value_sig7A7B,
        undoMutations: var_core_value_sigA2D7
      }), !0x0;
    }
  },
  nn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-sort",
    async handler(var_core_value_sig0A36, var_core_value_sig87E7) {
      if (!var_core_value_sig87E7) return !0x1;
      let var_core_value_sig52761 = var_core_value_sig0A36[ox45222b(0x345)](t["ICommandService"]),
        var_core_value_sig0B66 = var_core_value_sig0A36[ox45222b(0x345)](t["IUndoRedoService"]),
        var_core_value_sig8E9E = var_core_value_sig0A36[ox45222b(0x345)](W),
        var_core_value_sig9A69 = var_core_value_sig0A36[ox45222b(0x345)](t[ox45222b(0x1b3)]),
        {
          info: var_core_value_sig2A04,
          tableFieldId: var_core_value_sigA30D,
          pivotTableId: var_core_value_sig4F28,
          unitId: var_core_value_sigE7DA,
          subUnitId: var_core_value_sig56D11
        } = var_core_value_sig87E7,
        var_core_value_sig2EDE = var_core_value_sig2A04 === void 0x0 || var_core_value_sig2A04[ox45222b(0x3dd)] === e[ox45222b(0x173)][ox45222b(0x13c)] ? var_core_value_sig2A04 : {
          ...var_core_value_sig2A04,
          sortLocale: var_core_value_sig2A04[ox45222b(0x21c)] ?? t[ox45222b(0x481)][var_core_value_sig9A69[ox45222b(0x44b)]()][ox45222b(0x44e)]
        },
        var_core_value_sig70CD = (await var_core_value_sig8E9E[ox45222b(0x49f)]({
          unitId: var_core_value_sigE7DA,
          subUnitId: var_core_value_sig56D11,
          pivotTableId: var_core_value_sig4F28,
          params: {
            type: ox45222b(0x2a0),
            setPivotSort: {
              tableFieldId: var_core_value_sigA30D,
              info: var_core_value_sig2EDE
            }
          }
        }))[ox45222b(0x409)]["setPivotSort"];
      if (!var_core_value_sig70CD) return !0x1;
      let {
          changesets: var_core_value_sig60A5
        } = var_core_value_sig70CD,
        {
          redos: var_core_value_sig89B2,
          undos: var_core_value_sigE594
        } = Q(var_core_value_sig52761, {
          pivotTableId: var_core_value_sig4F28,
          unitId: var_core_value_sigE7DA,
          subUnitId: var_core_value_sig56D11
        }, var_core_value_sig60A5);
      return (0x0, t[ox45222b(0x135)])(var_core_value_sig89B2, var_core_value_sig52761)[ox45222b(0x409)] ? (var_core_value_sig0B66[ox45222b(0x462)]({
        unitID: var_core_value_sigE7DA,
        redoMutations: var_core_value_sig89B2,
        undoMutations: var_core_value_sigE594
      }), !0x0) : !0x1;
    }
  },
  rn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-value-filter",
    async handler(var_core_value_sig63D7, var_core_value_sig2E441) {
      if (!var_core_value_sig2E441) return !0x1;
      let var_core_value_sig6814 = var_core_value_sig63D7[ox15c849(0x345)](t["ICommandService"]),
        {
          pivotTableId: var_core_value_sig0A10,
          fieldId: var_core_value_sig9E19,
          valueFilterInfo: var_core_value_sigC832,
          unitId: var_core_value_sig9DD2,
          subUnitId: var_core_value_sigDB97
        } = var_core_value_sig2E441,
        var_core_value_sigD1A5 = var_core_value_sig63D7[ox15c849(0x345)](K)[ox15c849(0x31f)](var_core_value_sig9DD2, var_core_value_sigDB97, var_core_value_sig0A10),
        var_core_value_sigA91A = !!(var_core_value_sigD1A5 && (var_core_value_sigD1A5[ox15c849(0x39f)][ox15c849(0x238)](var_core_value_sig9E19) || var_core_value_sigD1A5[ox15c849(0x1de)][ox15c849(0x238)](var_core_value_sig9E19)));
      if (!var_core_value_sigD1A5 || !var_core_value_sigA91A || var_core_value_sigC832 !== void 0x0 && (var_core_value_sigC832[ox15c849(0x3dd)] !== e[ox15c849(0x362)][ox15c849(0x3df)] || !var_core_value_sigD1A5["measure"][var_core_value_sigC832["valueFieldId"]] || !(0x0, e[ox15c849(0x3fe)])(var_core_value_sigC832[ox15c849(0x385)]))) return !0x1;
      let var_core_value_sig2DE0 = var_core_value_sigC832 && {
          ...var_core_value_sigC832,
          expected: Array[ox15c849(0x31a)](var_core_value_sigC832[ox15c849(0x19e)]) ? var_core_value_sigC832[ox15c849(0x19e)]["concat"]() : var_core_value_sigC832[ox15c849(0x19e)]
        },
        var_core_value_sig0513 = var_core_value_sig63D7[ox15c849(0x345)](W),
        var_core_value_sig35D1 = var_core_value_sig63D7[ox15c849(0x345)](t[ox15c849(0x256)]),
        var_core_value_sig5CE7 = (await var_core_value_sig0513["getPivotDisplayConfig"]({
          unitId: var_core_value_sig9DD2,
          subUnitId: var_core_value_sigDB97,
          pivotTableId: var_core_value_sig0A10,
          params: {
            type: ox15c849(0x318),
            setValuePivotFilter: {
              tableFieldId: var_core_value_sig9E19,
              filterInfo: var_core_value_sig2DE0
            }
          }
        }))[ox15c849(0x409)][ox15c849(0x318)];
      if (!var_core_value_sig5CE7) return !0x1;
      let {
          changesets: var_core_value_sig3662,
          pivotTableConfig: var_core_value_sigABC5,
          isEmpty: var_core_value_sig033B,
          view: var_core_value_sig2BCC
        } = var_core_value_sig5CE7,
        var_core_value_sigC260 = var_core_value_sigABC5["targetCellInfo"],
        var_core_value_sig15611 = new e[ox15c849(0x18a)]();
      var_core_value_sig15611[ox15c849(0x3cb)](var_core_value_sig2BCC);
      let var_core_value_sigAAA8 = {
        cellInfo: var_core_value_sigC260,
        view: var_core_value_sig15611,
        isEmpty: var_core_value_sig033B
      };
      if (!(await var_core_value_sig63D7[ox15c849(0x345)](Z)[ox15c849(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sigAAA8))) return !0x1;
      let var_core_value_sigA0B9 = J(var_core_value_sig63D7, var_core_value_sig15611, var_core_value_sigC260, var_core_value_sig033B),
        var_core_value_sigB40F = $(var_core_value_sig63D7, var_core_value_sigAAA8),
        {
          undos: var_core_value_sig86F1,
          redos: var_core_value_sig078D
        } = Q(var_core_value_sig6814, {
          pivotTableId: var_core_value_sig0A10,
          unitId: var_core_value_sig9DD2,
          subUnitId: var_core_value_sigDB97
        }, var_core_value_sig3662);
      return (0x0, t[ox15c849(0x135)])([...var_core_value_sigA0B9[ox15c849(0x214)], ...var_core_value_sigB40F[ox15c849(0x214)], ...var_core_value_sig078D], var_core_value_sig6814)[ox15c849(0x409)] ? (var_core_value_sig35D1["pushUndoRedo"]({
        unitID: var_core_value_sig9DD2,
        redoMutations: [...var_core_value_sigA0B9[ox15c849(0x214)], ...var_core_value_sigB40F["redos"], ...var_core_value_sig078D],
        undoMutations: [...var_core_value_sigA0B9[ox15c849(0x49e)], ...var_core_value_sigB40F[ox15c849(0x49e)], ...var_core_value_sig86F1]
      }), !0x0) : !0x1;
    }
  },
  an = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.set-pivot-field-setting",
    async handler(var_core_value_sig60D5, var_core_value_sigD888) {
      if (!var_core_value_sigD888) return !0x1;
      let var_core_value_sig5337 = var_core_value_sig60D5[ox272611(0x345)](t[ox272611(0x1b2)]),
        var_core_value_sig2381 = var_core_value_sig60D5[ox272611(0x345)](t[ox272611(0x256)]),
        var_core_value_sig573D = var_core_value_sig60D5[ox272611(0x345)](W),
        {
          displayName: var_core_value_sigC09F,
          subtotalType: var_core_value_sig205A,
          format: var_core_value_sig16E2,
          showDataAs: var_core_value_sig8904,
          tableFieldId: var_core_value_sigBA69,
          pivotTableId: var_core_value_sig4AC2,
          unitId: var_core_value_sig08B2,
          subUnitId: var_core_value_sigDE7F
        } = var_core_value_sigD888,
        var_core_value_sigD898 = (await var_core_value_sig573D["getPivotDisplayConfig"]({
          unitId: var_core_value_sig08B2,
          subUnitId: var_core_value_sigDE7F,
          pivotTableId: var_core_value_sig4AC2,
          params: {
            type: ox272611(0x42e),
            setPivotSetting: {
              tableFieldId: var_core_value_sigBA69,
              displayName: var_core_value_sigC09F,
              subtotalType: var_core_value_sig205A,
              format: var_core_value_sig16E2,
              showDataAs: var_core_value_sig8904 === void 0x0 ? void 0x0 : {
                ...var_core_value_sig8904
              }
            }
          }
        }))[ox272611(0x409)]["setPivotSetting"];
      if (!var_core_value_sigD898) return !0x1;
      let {
          changesets: var_core_value_sig0386,
          view: var_core_value_sig577B,
          pivotTableConfig: var_core_value_sigF342,
          isEmpty: var_core_value_sig7871
        } = var_core_value_sigD898,
        var_core_value_sig7CBA = var_core_value_sigF342[ox272611(0x376)],
        var_core_value_sigC924 = new e[ox272611(0x18a)]();
      var_core_value_sigC924["formJSON"](var_core_value_sig577B);
      let var_core_value_sig718D = {
        cellInfo: var_core_value_sig7CBA,
        view: var_core_value_sigC924,
        isEmpty: var_core_value_sig7871
      };
      if (!(await var_core_value_sig60D5[ox272611(0x345)](Z)[ox272611(0x49b)][ox272611(0x226)](R)(!0x0, var_core_value_sig718D))) return !0x1;
      let var_core_value_sigCC47 = J(var_core_value_sig60D5, var_core_value_sigC924, var_core_value_sig7CBA, var_core_value_sig7871),
        var_core_value_sig12EE = $(var_core_value_sig60D5, var_core_value_sig718D),
        {
          undos: var_core_value_sigEB89,
          redos: var_core_value_sig405C
        } = Q(var_core_value_sig5337, {
          pivotTableId: var_core_value_sig4AC2,
          unitId: var_core_value_sig08B2,
          subUnitId: var_core_value_sigDE7F
        }, var_core_value_sig0386);
      return (0x0, t[ox272611(0x135)])([...var_core_value_sigCC47["redos"], ...var_core_value_sig12EE["redos"], ...var_core_value_sig405C], var_core_value_sig5337)["result"] ? (var_core_value_sig2381[ox272611(0x462)]({
        unitID: var_core_value_sig08B2,
        redoMutations: [...var_core_value_sigCC47[ox272611(0x214)], ...var_core_value_sig12EE[ox272611(0x214)], ...var_core_value_sig405C],
        undoMutations: [...var_core_value_sigCC47[ox272611(0x49e)], ...var_core_value_sig12EE[ox272611(0x49e)], ...var_core_value_sigEB89]
      }), !0x0) : !0x1;
    }
  },
  on = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.mutation.update-pivot-table-source-range",
    handler(var_core_value_sig820E, var_core_value_sigA753) {
      if (!var_core_value_sigA753) return !0x1;
      if (var_core_value_sig820E["get"](t["IConfigService"])[ox3c43f2(0x3c0)]("SHEET_PIVOT_IN_MAIN_THREAD")) return !0x0;
      let var_core_value_sigEF41 = var_core_value_sig820E[ox3c43f2(0x345)](K),
        {
          pivotTableId: var_core_value_sig9793,
          deleteIds: var_core_value_sigDB87,
          collectionJSON: var_core_value_sig2858,
          dataRangeInfo: var_core_value_sig2683,
          unitId: var_core_value_sigEA13,
          subUnitId: var_core_value_sig1699
        } = var_core_value_sigA753,
        var_core_value_sig42E9 = var_core_value_sigEF41[ox3c43f2(0x2fb)](var_core_value_sig9793),
        var_core_value_sig0B64 = var_core_value_sigEF41[ox3c43f2(0x2e6)](var_core_value_sigEA13, var_core_value_sig1699, var_core_value_sig9793);
      if (!var_core_value_sig42E9 || !var_core_value_sig0B64) return !0x1;
      let {
        collection: var_core_value_sig3BFC,
        updateDataFieldList: var_core_value_sig9CF5
      } = var_core_value_sigEF41[ox3c43f2(0x387)](var_core_value_sig9793, var_core_value_sig2858, var_core_value_sig2683, var_core_value_sig0B64[ox3c43f2(0x376)]);
      var_core_value_sigEF41[ox3c43f2(0x1a0)](var_core_value_sig3BFC, var_core_value_sig9CF5, var_core_value_sig2683), var_core_value_sig42E9[ox3c43f2(0x48f)](var_core_value_sig3BFC);
      for (let var_core_value_sig79D7 of var_core_value_sigDB87) var_core_value_sigEF41[ox3c43f2(0x3a6)](var_core_value_sig2683[ox3c43f2(0x386)], var_core_value_sig79D7);
      let var_core_value_sig5BFB = var_core_value_sigEF41[ox3c43f2(0x2e6)](var_core_value_sigEA13, var_core_value_sig1699, var_core_value_sig9793);
      return var_core_value_sig5BFB["sourceRangeInfo"] = JSON[ox3c43f2(0x2ea)](JSON[ox3c43f2(0x184)](var_core_value_sig2683)), var_core_value_sigEF41[ox3c43f2(0x3b0)]({
        unitId: var_core_value_sigEA13,
        subUnitId: var_core_value_sig1699,
        token: var_core_value_sig9793,
        type: ox3c43f2(0x2d0)
      }), !0x0;
    }
  },
  sn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.update-pivot-table-source-range",
    async handler(var_core_value_sig47A3, var_core_value_sig7CA8) {
      let var_core_value_sig1B33 = var_core_value_sig47A3[ox12d8c3(0x345)](t["ICommandService"]),
        var_core_value_sig041A = var_core_value_sig47A3[ox12d8c3(0x345)](W),
        var_core_value_sig7E4F = var_core_value_sig47A3[ox12d8c3(0x345)](t["IUndoRedoService"]);
      if (!var_core_value_sig7CA8) return !0x1;
      let {
          token: var_core_value_sig5A6A,
          dataRangeInfo: var_core_value_sig7E71,
          unitId: var_core_value_sig14B7,
          subUnitId: var_core_value_sig7D2C
        } = var_core_value_sig7CA8,
        var_core_value_sigE10A = [],
        var_core_value_sig0AE5 = [],
        var_core_value_sig57CC = (await var_core_value_sig041A["getPivotDisplayConfig"]({
          unitId: var_core_value_sig14B7,
          subUnitId: var_core_value_sig7D2C,
          pivotTableId: var_core_value_sig5A6A,
          params: {
            type: ox12d8c3(0x310),
            updatePivotSource: {
              dataRangeInfo: var_core_value_sig7E71,
              unitId: var_core_value_sig14B7,
              subUnitId: var_core_value_sig7D2C
            }
          }
        }))[ox12d8c3(0x409)]["updatePivotSource"];
      if (!var_core_value_sig57CC) return !0x1;
      let {
        changesets: var_core_value_sig2932,
        deleteIds: var_core_value_sigA067,
        collectionConfig: var_core_value_sig0CB3,
        oldCollectionConfig: var_core_value_sigE0F3,
        view: var_core_value_sig7330,
        isEmpty: var_core_value_sig2766,
        pivotTableConfig: var_core_value_sig1BD2
      } = var_core_value_sig57CC;
      var_core_value_sig0AE5["push"]({
        id: on["id"],
        params: {
          pivotTableId: var_core_value_sig5A6A,
          deleteIds: var_core_value_sigA067,
          collectionJSON: var_core_value_sig0CB3,
          dataRangeInfo: var_core_value_sig7E71,
          unitId: var_core_value_sig14B7,
          subUnitId: var_core_value_sig7D2C
        }
      }), var_core_value_sigE10A["unshift"]({
        id: on["id"],
        params: {
          pivotTableId: var_core_value_sig5A6A,
          deleteIds: [],
          collectionJSON: var_core_value_sigE0F3,
          dataRangeInfo: var_core_value_sig1BD2[ox12d8c3(0x33d)],
          unitId: var_core_value_sig14B7,
          subUnitId: var_core_value_sig7D2C
        }
      });
      let var_core_value_sig2CA0 = var_core_value_sig1BD2[ox12d8c3(0x376)],
        var_core_value_sigDD2D = new e[ox12d8c3(0x18a)]();
      var_core_value_sigDD2D[ox12d8c3(0x3cb)](var_core_value_sig7330);
      let var_core_value_sig8880 = {
        cellInfo: var_core_value_sig2CA0,
        view: var_core_value_sigDD2D,
        isEmpty: var_core_value_sig2766
      };
      if (!(await var_core_value_sig47A3[ox12d8c3(0x345)](Z)[ox12d8c3(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sig8880))) return !0x1;
      let var_core_value_sig005B = J(var_core_value_sig47A3, var_core_value_sigDD2D, var_core_value_sig2CA0, var_core_value_sig2766),
        var_core_value_sig6383 = $(var_core_value_sig47A3, var_core_value_sig8880),
        {
          redos: var_core_value_sigCDBE,
          undos: var_core_value_sig8589
        } = Q(var_core_value_sig1B33, {
          pivotTableId: var_core_value_sig5A6A,
          unitId: var_core_value_sig14B7,
          subUnitId: var_core_value_sig7D2C
        }, var_core_value_sig2932);
      return (0x0, t[ox12d8c3(0x135)])([...var_core_value_sig005B[ox12d8c3(0x214)], ...var_core_value_sig6383["redos"], ...var_core_value_sig0AE5, ...var_core_value_sigCDBE], var_core_value_sig1B33)[ox12d8c3(0x409)] ? (var_core_value_sig7E4F["pushUndoRedo"]({
        unitID: var_core_value_sig14B7,
        redoMutations: [...var_core_value_sig005B[ox12d8c3(0x214)], ...var_core_value_sig6383[ox12d8c3(0x214)], ...var_core_value_sig0AE5, ...var_core_value_sigCDBE],
        undoMutations: [...var_core_value_sig005B[ox12d8c3(0x49e)], ...var_core_value_sig6383[ox12d8c3(0x49e)], ...var_core_value_sigE10A, ...var_core_value_sig8589]
      }), !0x0) : !0x1;
    }
  },
  cn = {
    type: t["CommandType"]["COMMAND"],
    id: "sheet.command.update-pivot-value-position",
    async handler(var_core_value_sig2F83, var_core_value_sig4AD6) {
      if (!var_core_value_sig4AD6) return !0x1;
      let var_core_value_sig83CC = var_core_value_sig2F83[ox1c6ce9(0x345)](t[ox1c6ce9(0x1b2)]),
        var_core_value_sigECB51 = var_core_value_sig2F83["get"](W),
        var_core_value_sigEC7A = var_core_value_sig2F83[ox1c6ce9(0x345)](t[ox1c6ce9(0x1ba)]),
        var_core_value_sig3C20 = var_core_value_sig2F83[ox1c6ce9(0x345)](t[ox1c6ce9(0x256)]),
        {
          pivotTableId: var_core_value_sig55A0,
          position: var_core_value_sig6F0A,
          index: var_core_value_sig193F
        } = var_core_value_sig4AD6,
        var_core_value_sig5227 = (0x0, r[ox1c6ce9(0x1b5)])(var_core_value_sigEC7A);
      if (!var_core_value_sig5227) return !0x1;
      let {
          unitId: var_core_value_sig8CB8,
          subUnitId: var_core_value_sigBE77
        } = var_core_value_sig5227,
        var_core_value_sig9700 = (await var_core_value_sigECB51[ox1c6ce9(0x49f)]({
          unitId: var_core_value_sig8CB8,
          subUnitId: var_core_value_sigBE77,
          pivotTableId: var_core_value_sig55A0,
          params: {
            type: ox1c6ce9(0x2e8),
            updateValuePosition: {
              position: var_core_value_sig6F0A,
              index: var_core_value_sig193F
            }
          }
        }))[ox1c6ce9(0x409)][ox1c6ce9(0x2e8)];
      if (!var_core_value_sig9700) return !0x1;
      let {
          changesets: var_core_value_sigB461,
          view: var_core_value_sigDDFF,
          isEmpty: var_core_value_sig52C1,
          pivotTableConfig: var_core_value_sigFA8C
        } = var_core_value_sig9700,
        var_core_value_sig19C6 = var_core_value_sigFA8C["targetCellInfo"],
        var_core_value_sigDB89 = new e[ox1c6ce9(0x18a)]();
      var_core_value_sigDB89["formJSON"](var_core_value_sigDDFF);
      let var_core_value_sigCBF6 = var_core_value_sig2F83["get"](Z),
        var_core_value_sigE0DD = {
          cellInfo: var_core_value_sig19C6,
          view: var_core_value_sigDB89,
          isEmpty: var_core_value_sig52C1
        };
      if (!(await var_core_value_sigCBF6[ox1c6ce9(0x49b)]["fetchThroughAsyncInterceptors"](R)(!0x0, var_core_value_sigE0DD))) return !0x1;
      let var_core_value_sig9874 = J(var_core_value_sig2F83, var_core_value_sigDB89, var_core_value_sig19C6, var_core_value_sig52C1),
        var_core_value_sig61DE = $(var_core_value_sig2F83, var_core_value_sigE0DD),
        {
          undos: var_core_value_sig9717,
          redos: var_core_value_sig7C72
        } = Q(var_core_value_sig83CC, {
          pivotTableId: var_core_value_sig55A0,
          unitId: var_core_value_sig8CB8,
          subUnitId: var_core_value_sigBE77
        }, var_core_value_sigB461);
      return (0x0, t["sequenceExecute"])([...var_core_value_sig9874[ox1c6ce9(0x214)], ...var_core_value_sig61DE[ox1c6ce9(0x214)], ...var_core_value_sig7C72], var_core_value_sig83CC)["result"] ? (var_core_value_sig3C20[ox1c6ce9(0x462)]({
        unitID: var_core_value_sig8CB8,
        redoMutations: [...var_core_value_sig9874["redos"], ...var_core_value_sig61DE["redos"], ...var_core_value_sig7C72],
        undoMutations: [...var_core_value_sig9874[ox1c6ce9(0x49e)], ...var_core_value_sig61DE[ox1c6ce9(0x49e)], ...var_core_value_sig9717]
      }), !0x0) : !0x1;
    }
  };
var ln = "@univerjs-pro/sheets-pivot",
  un = "1.0.0-insiders.20260907-70fc579";
const dn = {
    id: "sheet.command.update-date-group",
    type: t["CommandType"]["COMMAND"],
    handler: (var_core_value_sigECAB, var_core_value_sigEB4B) => {
      if (!var_core_value_sigEB4B) return !0x1;
      let var_core_value_sigF741 = var_core_value_sigECAB[ox18add1(0x345)](t["IUndoRedoService"]),
        {
          unitId: var_core_value_sigB227,
          subUnitId: var_core_value_sigCFC5,
          pivotTableId: var_core_value_sigEC54,
          tableFieldId: var_core_value_sig9B6A1
        } = var_core_value_sigEB4B,
        var_core_value_sigEA29 = [],
        var_core_value_sig3851 = [],
        var_core_value_sigE1D0 = var_core_value_sigECAB[ox18add1(0x345)](Y),
        var_core_value_sig8AFC = var_core_value_sigE1D0["getCollection"](var_core_value_sigB227, var_core_value_sigEC54),
        var_core_value_sigA761 = var_core_value_sigE1D0["getPivotTableConfig"](var_core_value_sigB227, var_core_value_sigCFC5, var_core_value_sigEC54);
      if (!(var_core_value_sigA761 != null && var_core_value_sigA761[ox18add1(0x2a9)][ox18add1(0x230)])) return !0x1;
      let var_core_value_sig0996 = Object[ox18add1(0x2b9)](var_core_value_sigA761[ox18add1(0x2a9)][ox18add1(0x230)])[ox18add1(0x372)](var_core_value_sig5E01 => var_core_value_sig5E01["id"] === var_core_value_sig9B6A1);
      if (!var_core_value_sig0996) return !0x1;
      let var_core_value_sig09E0 = var_core_value_sig0996[ox18add1(0x1cb)];
      if (!(var_core_value_sig8AFC != null && var_core_value_sig8AFC[ox18add1(0x1ee)])) return !0x1;
      let var_core_value_sigB201 = Object[ox18add1(0x2b9)](var_core_value_sig8AFC == null ? void 0x0 : var_core_value_sig8AFC[ox18add1(0x1ee)])[ox18add1(0x372)](var_core_value_sigBBE4 => var_core_value_sigBBE4["id"] === var_core_value_sig09E0);
      return var_core_value_sigB201 ? ((0x0, e[ox18add1(0x4b6)])(var_core_value_sigB201) && var_core_value_sigEA29[ox18add1(0x19f)]({
        id: Xt["id"],
        params: {
          ...var_core_value_sigEB4B,
          dateType: var_core_value_sigB201["dateType"]
        }
      }), var_core_value_sig3851[ox18add1(0x19f)]({
        id: Xt["id"],
        params: {
          ...var_core_value_sigEB4B
        }
      }), (0x0, t["sequenceExecute"])(var_core_value_sig3851, var_core_value_sigECAB[ox18add1(0x345)](t["ICommandService"]))["result"] ? (var_core_value_sigF741[ox18add1(0x462)]({
        unitID: var_core_value_sigB227,
        undoMutations: var_core_value_sigEA29,
        redoMutations: var_core_value_sig3851
      }), !0x0) : !0x1) : !0x1;
    }
  },
  fn = {
    type: t["CommandType"]["MUTATION"],
    id: "sheet.operation.pivot-table-view-formula-mark-dirty",
    handler() {
      return !0x0;
    }
  },
  pn = () => ({
    runtimeCellData: {},
    dirtyRanges: {}
  }),
  mn = (var_core_value_sigFB17, var_core_value_sigCA91, var_core_value_sig372C) => {
    let var_core_value_sig98F9 = var_core_value_sigFB17[ox176a59(0x2c5)];
    var_core_value_sigFB17["iterateFieldDim"](var_core_value_sig96B3 => {
      const var_core_value_sig9CF2 = ox176a59;
      let var_core_value_sig666D = var_core_value_sig96B3[var_core_value_sig9CF2(0x1b6)](),
        var_core_value_sigBD53 = var_core_value_sig96B3[var_core_value_sig9CF2(0x2f6)](),
        var_core_value_sigD11F = var_core_value_sig96B3[var_core_value_sig9CF2(0x1b0)](),
        var_core_value_sig6223 = var_core_value_sig96B3["getDisplayName"]();
      var_core_value_sigCA91[var_core_value_sigBD53] && var_core_value_sigCA91[var_core_value_sigBD53] === var_core_value_sig6223 && var_core_value_sigD11F === var_core_value_sig6223 && (var_core_value_sigFB17["renameField"](var_core_value_sig666D, var_core_value_sig98F9[var_core_value_sig9CF2(0x340)](var_core_value_sigBD53)), var_core_value_sig96B3[var_core_value_sig9CF2(0x3aa)](var_core_value_sig98F9[var_core_value_sig9CF2(0x340)](var_core_value_sigBD53)));
    }), var_core_value_sigFB17[ox176a59(0x46e)](e["PivotTableFiledAreaEnum"][ox176a59(0x1df)], var_core_value_sig7653 => {
      const var_core_value_sigF65B = ox176a59;
      let var_core_value_sig4A94 = var_core_value_sig7653["getId"](),
        var_core_value_sigEB59 = var_core_value_sig7653[var_core_value_sigF65B(0x2f6)](),
        var_core_value_sigD9B0 = var_core_value_sig7653[var_core_value_sigF65B(0x1b0)](),
        var_core_value_sigB7D6 = var_core_value_sig7653[var_core_value_sigF65B(0x340)](),
        var_core_value_sigCF1F = var_core_value_sig7653[var_core_value_sigF65B(0x455)](),
        var_core_value_sig4DD1 = var_core_value_sig372C(var_core_value_sigD9B0, var_core_value_sigCF1F);
      var_core_value_sigCA91[var_core_value_sigEB59] && var_core_value_sigCA91[var_core_value_sigEB59] === var_core_value_sigD9B0 && var_core_value_sig4DD1 === var_core_value_sigB7D6 && (var_core_value_sigFB17[var_core_value_sigF65B(0x15c)](var_core_value_sig4A94, var_core_value_sig372C(var_core_value_sig98F9[var_core_value_sigF65B(0x340)](var_core_value_sigEB59), var_core_value_sigCF1F)), var_core_value_sig7653["setSourceName"](var_core_value_sig98F9[var_core_value_sigF65B(0x340)](var_core_value_sigEB59)));
    });
  },
  hn = (var_core_value_sig3F40, var_core_value_sig7A2F, var_core_value_sig3047) => {
    var var_core_value_sig19A5, var_core_value_sigC5EA;
    let {
        arrayFormulaCellData: var_core_value_sigC9A1,
        unitData: var_core_value_sigF92E
      } = var_core_value_sig7A2F,
      {
        unitId: var_core_value_sig70AE,
        subUnitId: var_core_value_sig57BC
      } = var_core_value_sig3047,
      var_core_value_sig41AB = var_core_value_sig3047["range"],
      {
        startColumn: var_core_value_sigCDAC,
        endColumn: var_core_value_sigDC24
      } = var_core_value_sig41AB,
      var_core_value_sig3875 = var_core_value_sigC9A1 == null || (var_core_value_sig19A5 = var_core_value_sigC9A1[var_core_value_sig70AE]) == null ? void 0x0 : var_core_value_sig19A5[var_core_value_sig57BC],
      var_core_value_sig5513 = var_core_value_sigF92E == null || (var_core_value_sigC5EA = var_core_value_sigF92E[var_core_value_sig70AE]) == null ? void 0x0 : var_core_value_sigC5EA[var_core_value_sig57BC],
      var_core_value_sig6048 = new Set(),
      var_core_value_sigE6C3 = var_core_value_sigDC24 - var_core_value_sigCDAC + 0x1,
      {
        dirtyRanges: var_core_value_sig6469
      } = var_core_value_sig3F40;
    if (var_core_value_sig6469) for (let {
      range: var_core_value_sig1293,
      sheetId: var_core_value_sigC999,
      unitId: var_core_value_sig9D8F
    } of var_core_value_sig6469) {
      if (var_core_value_sigC999 !== var_core_value_sig57BC || var_core_value_sig70AE !== var_core_value_sig9D8F) continue;
      let var_core_value_sigDACD = (0x0, t[ox4b6746(0x373)])(var_core_value_sig1293, var_core_value_sig41AB);
      if (var_core_value_sigDACD) {
        let {
          startColumn: var_core_value_sigDC92,
          endColumn: var_core_value_sig3515
        } = var_core_value_sigDACD;
        for (let var_core_value_sigF057 = var_core_value_sigDC92; var_core_value_sigF057 <= var_core_value_sig3515; var_core_value_sigF057++) var_core_value_sig6048[ox4b6746(0x3db)](var_core_value_sigF057);
      }
    }
    if (var_core_value_sig6048[ox4b6746(0x189)] === var_core_value_sigE6C3 || var_core_value_sig6048[ox4b6746(0x189)] === var_core_value_sigE6C3) return Array[ox4b6746(0x144)](var_core_value_sig6048);
    if (var_core_value_sig5513) {
      let var_core_value_sig8270 = var_core_value_sig5513["getMatrix"](),
        var_core_value_sig95D9 = Object[ox4b6746(0x2a8)](var_core_value_sig8270);
      for (let var_core_value_sig691E of var_core_value_sig95D9) {
        let var_core_value_sigC2A0 = var_core_value_sig8270[Number(var_core_value_sig691E)];
        if (var_core_value_sig6048["size"] === var_core_value_sigE6C3) break;
        for (let var_core_value_sig72F6 in var_core_value_sigC2A0) {
          let var_core_value_sig2809 = Number(var_core_value_sig72F6);
          var_core_value_sig2809 < var_core_value_sigCDAC || var_core_value_sig2809 > var_core_value_sigDC24 || var_core_value_sig6048[ox4b6746(0x3db)](var_core_value_sig2809);
        }
      }
    }
    if (var_core_value_sig3875) {
      let var_core_value_sig0E92 = var_core_value_sig3875[ox4b6746(0x3b7)](),
        var_core_value_sig45CD = Object[ox4b6746(0x2a8)](var_core_value_sig0E92);
      for (let var_core_value_sigD6D6 of var_core_value_sig45CD) {
        let var_core_value_sig7C65 = var_core_value_sig0E92[Number(var_core_value_sigD6D6)];
        if (var_core_value_sig6048[ox4b6746(0x189)] === var_core_value_sigE6C3) break;
        for (let var_core_value_sig9FBA in var_core_value_sig7C65) {
          let var_core_value_sig2DAB = Number(var_core_value_sig9FBA);
          var_core_value_sig2DAB < var_core_value_sigCDAC || var_core_value_sig2DAB > var_core_value_sigDC24 || var_core_value_sig6048[ox4b6746(0x3db)](var_core_value_sig2DAB);
        }
      }
    }
    return Array[ox4b6746(0x144)](var_core_value_sig6048);
  },
  gn = var_core_value_sig8BC7 => {
    let var_core_value_sig5939 = new Set(),
      var_core_value_sig7432 = [];
    for (let var_core_value_sigAD84 of var_core_value_sig8BC7) {
      let var_core_value_sig0347 = var_core_value_sigAD84["startRow"] + "," + var_core_value_sigAD84["endRow"] + "," + var_core_value_sigAD84[ox2b0cd2(0x205)] + "," + var_core_value_sigAD84[ox2b0cd2(0x2bc)];
      var_core_value_sig5939[ox2b0cd2(0x442)](var_core_value_sig0347) || (var_core_value_sig5939[ox2b0cd2(0x3db)](var_core_value_sig0347), var_core_value_sig7432[ox2b0cd2(0x19f)](var_core_value_sigAD84));
    }
    return var_core_value_sig7432;
  };
let _n = class extends t["Disposable"] {
  constructor(var_core_value_sigD513, var_core_value_sig36BD, var_core_value_sig0413, var_core_value_sig15B6, var_core_value_sigFEBF, var_core_value_sigBBA2, var_core_value_sigC9A11) {
    super(), this[ox5e8eb3(0x480)] = var_core_value_sigD513, this["_featureCalculationManagerService"] = var_core_value_sig36BD, this[ox5e8eb3(0x1db)] = var_core_value_sig0413, this[ox5e8eb3(0x294)] = var_core_value_sig15B6, this[ox5e8eb3(0x483)] = var_core_value_sigFEBF, this[ox5e8eb3(0x1ec)] = var_core_value_sigBBA2, this[ox5e8eb3(0x259)] = var_core_value_sigC9A11, V(this, ox5e8eb3(0x295), new i[ox5e8eb3(0x45d)](!0x0)), V(this, ox5e8eb3(0x1fd), var_core_value_sig52A3 => {
      const var_core_value_sigAD91 = ox5e8eb3;
      this[var_core_value_sigAD91(0x295)][var_core_value_sigAD91(0x37c)](!0x1);
    }), V(this, ox5e8eb3(0x244), var_core_value_sigF64E => {
      const var_core_value_sig9B3D1 = ox5e8eb3;
      this["_globalSubject"][var_core_value_sig9B3D1(0x37c)](!0x0);
    }), this["_init"](), this[ox5e8eb3(0x343)]();
  }
  ["_isAutoDateGroupEnabled"]() {
    var var_core_value_sigE469;
    return ((var_core_value_sigE469 = this[ox2494f1(0x259)]["getConfig"](ox2494f1(0x48d))) == null ? void 0x0 : var_core_value_sigE469[ox2494f1(0x460)]) ?? !0x0;
  }
  ["_setDateSystem"](var_core_value_sigA499) {
    let var_core_value_sig4CC3 = this[ox329bb9(0x1ec)]["getUnit"](var_core_value_sigA499, t[ox329bb9(0x2b3)][ox329bb9(0x333)]);
    Ge(var_core_value_sig4CC3 == null ? void 0x0 : var_core_value_sig4CC3["getDateSystem"]());
  }
  ["_init"]() {
    this["_subjectCollectionChange"](), this[ox1d5344(0x2da)](), this[ox1d5344(0x39e)](), this[ox1d5344(0x429)]();
  }
  ["_initGlobalComputed"]() {
    this[ox1b79c7(0x294)][ox1b79c7(0x44d)](this[ox1b79c7(0x295)]), e[ox1b79c7(0x21f)][ox1b79c7(0x398)](e[ox1b79c7(0x1ed)][ox1b79c7(0x1be)], this[ox1b79c7(0x1fd)]), e[ox1b79c7(0x21f)][ox1b79c7(0x398)](e[ox1b79c7(0x1ed)]["onQueryEnd"], this[ox1b79c7(0x244)]);
  }
  ["_initPivotDataGetListener"]() {
    this[ox13c15d(0x1e7)](this[ox13c15d(0x1db)][ox13c15d(0x484)](var_core_value_sigB217 => {
      const var_core_value_sig1FE6 = ox13c15d;
      var_core_value_sigB217["id"] === r[var_core_value_sig1FE6(0x404)]["id"] && this[var_core_value_sig1FE6(0x480)][var_core_value_sig1FE6(0x2cb)](var_core_value_sigB217["params"]);
    })), this["disposeWithMe"](this[ox13c15d(0x1db)]["onCommandExecuted"](var_core_value_sig2471 => {
      const var_core_value_sigD1FC = ox13c15d;
      if (var_core_value_sig2471["id"] !== re["id"]) return;
      let var_core_value_sigE2F9 = var_core_value_sig2471[var_core_value_sigD1FC(0x43b)],
        {
          unitId: var_core_value_sigD689,
          subUnitId: var_core_value_sig7AE3,
          pivotTableId: var_core_value_sig1EB3
        } = var_core_value_sigE2F9,
        var_core_value_sigE120 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)]["type"],
        var_core_value_sigD6E7 = {},
        var_core_value_sig3669;
      switch (var_core_value_sigE120) {
        case var_core_value_sigD1FC(0x43e):
          {
            let var_core_value_sigFE01 = var_core_value_sigE2F9["params"][var_core_value_sigD1FC(0x43e)];
            if (!var_core_value_sigFE01) return;
            let {
                row: var_core_value_sigA2CE,
                col: var_core_value_sig1975,
                cellData: var_core_value_sig6EA1,
                pivotItemRenderInfoCache: var_core_value_sig029F,
                tableFieldId: var_core_value_sig3767
              } = var_core_value_sigFE01,
              var_core_value_sig670B = this["_sheetsPivotDataSourceModel"]["getPivotTableInstance"](var_core_value_sigE2F9[var_core_value_sigD1FC(0x4a4)]);
            if (!var_core_value_sig670B || !var_core_value_sig029F) return;
            if (var_core_value_sig3767) {
              let var_core_value_sig877E = var_core_value_sig670B[var_core_value_sigD1FC(0x25c)](var_core_value_sig3767);
              if (!var_core_value_sig877E) return;
              var_core_value_sigD6E7[var_core_value_sigD1FC(0x43e)] = {
                ...var_core_value_sig670B[var_core_value_sigD1FC(0x2c2)](var_core_value_sig877E),
                tableFieldId: var_core_value_sig3767,
                pivotTableId: var_core_value_sigE2F9[var_core_value_sigD1FC(0x4a4)],
                filterInfo: var_core_value_sig670B["getFilterInfo"](var_core_value_sig3767),
                sortInfo: var_core_value_sig670B[var_core_value_sigD1FC(0x3ff)](var_core_value_sig3767),
                format: var_core_value_sig670B[var_core_value_sigD1FC(0x2a2)](var_core_value_sig3767)
              };
            } else {
              let var_core_value_sig20C8 = _e(var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig670B, var_core_value_sig029F),
                var_core_value_sigE9A7 = var_core_value_sig20C8 == null ? void 0x0 : var_core_value_sig20C8[var_core_value_sigD1FC(0x30f)];
              if (!var_core_value_sigE9A7) return;
              let var_core_value_sigBECE = var_core_value_sig670B["getDataFieldByTableId"](var_core_value_sigE9A7);
              if (!var_core_value_sigBECE) return;
              var_core_value_sigD6E7[var_core_value_sigD1FC(0x43e)] = {
                ...var_core_value_sig670B[var_core_value_sigD1FC(0x2c2)](var_core_value_sigBECE),
                tableFieldId: var_core_value_sigE9A7,
                pivotTableId: var_core_value_sigE2F9[var_core_value_sigD1FC(0x4a4)],
                filterInfo: var_core_value_sig670B[var_core_value_sigD1FC(0x36e)](var_core_value_sigE9A7),
                sortInfo: var_core_value_sig670B[var_core_value_sigD1FC(0x3ff)](var_core_value_sigE9A7),
                format: var_core_value_sig670B[var_core_value_sigD1FC(0x2a2)](var_core_value_sigE9A7)
              };
            }
          }
          break;
        case var_core_value_sigD1FC(0x314):
          {
            let var_core_value_sig6912 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)]["panel"];
            if (!var_core_value_sig6912) return;
            let {
                pivotTableId: var_core_value_sigE235
              } = var_core_value_sig6912,
              var_core_value_sig7664 = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2fb)](var_core_value_sigE235);
            if (!var_core_value_sig7664) return;
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x314)] = xe(var_core_value_sig7664, var_core_value_sigE235, this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sigE235));
          }
          break;
        case var_core_value_sigD1FC(0x410):
          {
            let var_core_value_sig2281 = this[var_core_value_sigD1FC(0x480)]["getPivotTableInstance"](var_core_value_sig1EB3),
              var_core_value_sig5E86 = this["_sheetsPivotDataSourceModel"]["getDataFieldManager"](var_core_value_sigD689),
              var_core_value_sig6998 = var_core_value_sig5E86["getCollection"](var_core_value_sig1EB3),
              var_core_value_sigF639 = null,
              var_core_value_sigEAE5 = this[var_core_value_sigD1FC(0x480)]["getPivotTableConfig"](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3),
              var_core_value_sigE94C = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x410)];
            if (!var_core_value_sig2281 || !var_core_value_sigEAE5 || !var_core_value_sigE94C) return !0x1;
            let {
              dataFieldId: var_core_value_sig6D47,
              fieldArea: var_core_value_sigCB821,
              index: var_core_value_sigCF4E
            } = var_core_value_sigE94C;
            var_core_value_sig2281[var_core_value_sigD1FC(0x44f)]();
            let var_core_value_sig6CAD = var_core_value_sig2281[var_core_value_sigD1FC(0x4c0)](var_core_value_sig6D47, var_core_value_sigCB821, var_core_value_sigCF4E);
            if (var_core_value_sig6CAD && var_core_value_sigCB821 === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x1df)]) {
              let var_core_value_sig1B221 = var_core_value_sig6CAD[var_core_value_sigD1FC(0x1b6)](),
                var_core_value_sig7F72 = var_core_value_sig2281[var_core_value_sigD1FC(0x25c)](var_core_value_sig1B221);
              if (var_core_value_sig7F72) {
                let var_core_value_sig12F21 = var_core_value_sig7F72 == null ? void 0x0 : var_core_value_sig7F72[var_core_value_sigD1FC(0x4c2)]();
                var_core_value_sig2281[var_core_value_sigD1FC(0x19d)](var_core_value_sig6CAD["getId"](), var_core_value_sig12F21 === e["PivotDataFieldDataTypeEnum"][var_core_value_sigD1FC(0x3ea)] ? e[var_core_value_sigD1FC(0x3cd)][var_core_value_sigD1FC(0x169)] : e[var_core_value_sigD1FC(0x3cd)][var_core_value_sigD1FC(0x466)]);
              }
              let var_core_value_sig7B2A = var_core_value_sig2281[var_core_value_sigD1FC(0x3d8)](),
                var_core_value_sig06CD = var_core_value_sig2281[var_core_value_sigD1FC(0x199)](),
                var_core_value_sigA5F1 = var_core_value_sig2281[var_core_value_sigD1FC(0x4b0)](e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x1df)]);
              if (var_core_value_sig7B2A === -0x1 && var_core_value_sigA5F1 > 0x1) {
                let var_core_value_sig2259 = var_core_value_sig06CD === e[var_core_value_sigD1FC(0x402)]["None"] ? e[var_core_value_sigD1FC(0x402)][var_core_value_sigD1FC(0x374)] : var_core_value_sig06CD,
                  var_core_value_sig9E2F = var_core_value_sig2259 === e[var_core_value_sigD1FC(0x402)][var_core_value_sigD1FC(0x289)] ? e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x289)] : e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x374)];
                var_core_value_sig2281[var_core_value_sigD1FC(0x2e8)](var_core_value_sig2259, var_core_value_sig2281["getFieldCountByArea"](var_core_value_sig9E2F));
              }
            } else {
              if (var_core_value_sig6CAD && (var_core_value_sigCB821 === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x289)] || var_core_value_sigCB821 === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x374)])) {
                let var_core_value_sigD082 = var_core_value_sig6CAD[var_core_value_sigD1FC(0x1b6)](),
                  var_core_value_sigDBB7 = var_core_value_sig2281["getDataFieldByTableId"](var_core_value_sigD082);
                if (var_core_value_sigDBB7 && (var_core_value_sigDBB7 == null ? void 0x0 : var_core_value_sigDBB7[var_core_value_sigD1FC(0x4c2)]()) === e[var_core_value_sigD1FC(0x428)][var_core_value_sigD1FC(0x303)]) {
                  let var_core_value_sig1A0F = var_core_value_sigDBB7["getformat"]();
                  if (var_core_value_sig1A0F && var_core_value_sig2281["setFieldFormat"](var_core_value_sig6CAD[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig1A0F), this[var_core_value_sigD1FC(0x2ab)]() && !var_core_value_sig6998["getFieldIds"]()[var_core_value_sigD1FC(0x26b)](var_core_value_sig3D7D => {
                    const var_core_value_sig27E5 = var_core_value_sigD1FC;
                    let var_core_value_sig8061 = var_core_value_sig6998[var_core_value_sig27E5(0x1f8)](var_core_value_sig3D7D);
                    return (0x0, e[var_core_value_sig27E5(0x159)])(var_core_value_sig8061) ? var_core_value_sig8061[var_core_value_sig27E5(0x464)]()[var_core_value_sig27E5(0x19a)] === var_core_value_sig6D47 : !0x1;
                  })) {
                    let var_core_value_sig4D4C = var_core_value_sig5E86[var_core_value_sigD1FC(0x263)]();
                    this[var_core_value_sigD1FC(0x25b)](var_core_value_sigD689);
                    let var_core_value_sigC9E0 = We(var_core_value_sigDBB7[var_core_value_sigD1FC(0x22d)], var_core_value_sigDBB7[var_core_value_sigD1FC(0x22c)]),
                      var_core_value_sig76BA = var_core_value_sigDBB7[var_core_value_sigD1FC(0x1f7)]() + var_core_value_sigD1FC(0x328) + Ke(this[var_core_value_sigD1FC(0x483)], var_core_value_sigC9E0),
                      var_core_value_sigFBFA = new e[var_core_value_sigD1FC(0x257)](var_core_value_sig4D4C, var_core_value_sig76BA, (0x0, e["generateHexNumber"])(0x3), var_core_value_sigDBB7["getId"](), var_core_value_sigC9E0);
                    var_core_value_sig5E86[var_core_value_sigD1FC(0x30a)](var_core_value_sigFBFA), var_core_value_sig6998[var_core_value_sigD1FC(0x4bf)](var_core_value_sig4D4C, var_core_value_sig76BA), var_core_value_sig2281["addFieldWithSourceId"](var_core_value_sig4D4C, var_core_value_sigCB821, (var_core_value_sigCF4E ?? 0x0) + 0x1), var_core_value_sigF639 = var_core_value_sigFBFA;
                  }
                }
              }
            }
            let var_core_value_sig8CF5 = var_core_value_sig2281[var_core_value_sigD1FC(0x208)](),
              var_core_value_sigDDD7 = var_core_value_sig2281["query"]()[var_core_value_sigD1FC(0x1c6)](),
              var_core_value_sigB2CE;
            if (var_core_value_sigF639) {
              var_core_value_sigB2CE = var_core_value_sigF639["toJSON"]();
              let var_core_value_sig97A2 = var_core_value_sigF639["getId"]();
              var_core_value_sig6998["deleteField"](var_core_value_sig97A2);
              let var_core_value_sig07E9 = !0x0;
              for (let var_core_value_sigD0A8 in var_core_value_sig5E86[var_core_value_sigD1FC(0x1b9)]) if (var_core_value_sig5E86[var_core_value_sigD1FC(0x1b9)][var_core_value_sigD0A8][var_core_value_sigD1FC(0x296)]()[var_core_value_sigD1FC(0x238)](var_core_value_sig97A2)) {
                var_core_value_sig07E9 = !0x1;
                break;
              }
              var_core_value_sig07E9 && var_core_value_sig5E86[var_core_value_sigD1FC(0x1ff)](var_core_value_sig97A2);
            }
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x410)] = {
              view: var_core_value_sigDDD7,
              changesets: var_core_value_sig2281["endCollectChangeset"](),
              isEmpty: var_core_value_sig8CF5,
              pivotTableConfig: var_core_value_sigEAE5,
              shouldBeAddedGroupJSON: var_core_value_sigB2CE
            };
          }
          break;
        case var_core_value_sigD1FC(0x357):
          {
            let var_core_value_sig443C = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x357)];
            if (!var_core_value_sig443C) return;
            let var_core_value_sig39B1 = var_core_value_sig443C[var_core_value_sigD1FC(0x33d)],
              var_core_value_sig210D = var_core_value_sig443C[var_core_value_sigD1FC(0x4a4)],
              {
                collection: var_core_value_sigB4B4
              } = this[var_core_value_sigD1FC(0x480)]["createCollectionWithDataRange"]({
                unitId: var_core_value_sig39B1[var_core_value_sigD1FC(0x386)],
                sheetName: var_core_value_sig39B1[var_core_value_sigD1FC(0x2f5)],
                subUnitId: var_core_value_sig39B1[var_core_value_sigD1FC(0x1bf)],
                range: var_core_value_sig39B1[var_core_value_sigD1FC(0x26a)]
              }),
              var_core_value_sigD407 = new e[var_core_value_sigD1FC(0x21f)](var_core_value_sigB4B4, void 0x0, var_core_value_sig210D);
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x357)] = {
              view: var_core_value_sigD407[var_core_value_sigD1FC(0x268)](),
              fieldsConfig: var_core_value_sigD407[var_core_value_sigD1FC(0x1c6)](),
              collectionConfig: var_core_value_sigB4B4[var_core_value_sigD1FC(0x1c6)](),
              isEmpty: var_core_value_sigD407[var_core_value_sigD1FC(0x208)]()
            };
          }
          break;
        case var_core_value_sigD1FC(0x320):
          {
            let var_core_value_sig63F3 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig6A71 = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x430)](var_core_value_sigD689),
              var_core_value_sig3BF6 = var_core_value_sig6A71["getCollection"](var_core_value_sig1EB3),
              var_core_value_sig38CE = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3),
              var_core_value_sig62B7 = var_core_value_sigE2F9["params"][var_core_value_sigD1FC(0x320)];
            if (!var_core_value_sig63F3 || !var_core_value_sig38CE || !var_core_value_sig62B7) return !0x1;
            let {
                tableFieldId: var_core_value_sig37A8,
                dateType: var_core_value_sigA90D
              } = var_core_value_sig62B7,
              {
                area: var_core_value_sig7A3C,
                index: var_core_value_sig0511
              } = var_core_value_sig63F3["getFieldPositionInfoById"](var_core_value_sig37A8);
            if (var_core_value_sig7A3C !== e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x289)] && var_core_value_sig7A3C !== e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x374)]) return !0x1;
            let var_core_value_sig1F44 = var_core_value_sig63F3[var_core_value_sigD1FC(0x25c)](var_core_value_sig37A8);
            if (!var_core_value_sig1F44) return !0x1;
            let var_core_value_sigCB04 = var_core_value_sig63F3[var_core_value_sigD1FC(0x1c6)](),
              var_core_value_sig947E = var_core_value_sig7A3C === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x289)] ? var_core_value_sigCB04[var_core_value_sigD1FC(0x39f)] : var_core_value_sigCB04[var_core_value_sigD1FC(0x1de)];
            if ((0x0, e["isDateGroupField"])(var_core_value_sig1F44)) {
              if (var_core_value_sig1F44[var_core_value_sigD1FC(0x3af)]() === var_core_value_sigA90D) return !0x1;
              let var_core_value_sig4F59 = var_core_value_sig63F3[var_core_value_sigD1FC(0x28f)](var_core_value_sig1F44[var_core_value_sigD1FC(0x415)]()),
                var_core_value_sigF564 = var_core_value_sig63F3[var_core_value_sigD1FC(0x3b3)](var_core_value_sig37A8);
              if (!var_core_value_sig4F59 || !var_core_value_sigF564 || var_core_value_sig947E["some"](var_core_value_sigF4B9 => {
                const var_core_value_sig5CEE = var_core_value_sigD1FC;
                if (var_core_value_sigF4B9 === var_core_value_sig37A8) return !0x1;
                let var_core_value_sigE92A = var_core_value_sigCB04[var_core_value_sig5CEE(0x230)][var_core_value_sigF4B9],
                  var_core_value_sig362B = var_core_value_sigE92A ? var_core_value_sig3BF6[var_core_value_sig5CEE(0x1f8)](var_core_value_sigE92A[var_core_value_sig5CEE(0x1cb)]) : void 0x0;
                return var_core_value_sig362B ? (0x0, e[var_core_value_sig5CEE(0x159)])(var_core_value_sig362B) && var_core_value_sig362B["getOriginFieldId"]() === var_core_value_sig1F44[var_core_value_sig5CEE(0x415)]() && var_core_value_sig362B[var_core_value_sig5CEE(0x3af)]() === var_core_value_sigA90D : !0x1;
              })) return !0x1;
              let var_core_value_sig8CFA = var_core_value_sig1F44[var_core_value_sigD1FC(0x3af)](),
                var_core_value_sig2E11 = {
                  ...var_core_value_sig3BF6[var_core_value_sigD1FC(0x1d4)]
                },
                var_core_value_sig5B69 = var_core_value_sig4F59[var_core_value_sigD1FC(0x1f7)]() + var_core_value_sigD1FC(0x328) + Ke(this[var_core_value_sigD1FC(0x483)], var_core_value_sigA90D);
              var_core_value_sig63F3[var_core_value_sigD1FC(0x44f)](), var_core_value_sig3BF6[var_core_value_sigD1FC(0x411)](var_core_value_sig1F44[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig5B69), var_core_value_sig63F3[var_core_value_sigD1FC(0x15c)](var_core_value_sigF564[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig5B69), var_core_value_sig1F44[var_core_value_sigD1FC(0x2d4)](var_core_value_sigA90D), this[var_core_value_sigD1FC(0x25b)](var_core_value_sigD689), var_core_value_sig1F44["refreshGroupField"](var_core_value_sig4F59), var_core_value_sig63F3["setDirty"](!0x0);
              let var_core_value_sigB098 = var_core_value_sig63F3[var_core_value_sigD1FC(0x208)](),
                var_core_value_sigCE71 = var_core_value_sig63F3["query"]()["toJSON"]();
              var_core_value_sig63F3[var_core_value_sigD1FC(0x396)](), var_core_value_sig1F44[var_core_value_sigD1FC(0x2d4)](var_core_value_sig8CFA), this["_setDateSystem"](var_core_value_sigD689), var_core_value_sig1F44[var_core_value_sigD1FC(0x4b1)](var_core_value_sig4F59), var_core_value_sig3BF6[var_core_value_sigD1FC(0x1d4)] = var_core_value_sig2E11, var_core_value_sigD6E7[var_core_value_sigD1FC(0x320)] = {
                view: var_core_value_sigCE71,
                changesets: [],
                isEmpty: var_core_value_sigB098,
                pivotTableConfig: var_core_value_sig38CE
              };
              break;
            }
            if (var_core_value_sig1F44[var_core_value_sigD1FC(0x4c2)]() !== e[var_core_value_sigD1FC(0x428)][var_core_value_sigD1FC(0x303)]) return !0x1;
            let var_core_value_sig4545 = var_core_value_sig947E[var_core_value_sigD1FC(0x1e9)](var_core_value_sig37A8),
              var_core_value_sigF39A = var_core_value_sig4545 === -0x1 ? var_core_value_sig0511 : var_core_value_sig4545;
            if (var_core_value_sig947E[var_core_value_sigD1FC(0x26b)]((var_core_value_sig21D8, var_core_value_sig2B65) => {
              const var_core_value_sigD7EA = var_core_value_sigD1FC;
              let var_core_value_sigB33B = var_core_value_sigCB04["dimension"][var_core_value_sig21D8];
              if (!var_core_value_sigB33B) return !0x1;
              let var_core_value_sig24B9 = var_core_value_sig3BF6[var_core_value_sigD7EA(0x1f8)](var_core_value_sigB33B["dataFieldId"]);
              if ((0x0, e["isDateGroupField"])(var_core_value_sig24B9) && var_core_value_sig24B9[var_core_value_sigD7EA(0x415)]() === var_core_value_sig1F44[var_core_value_sigD7EA(0x1b6)]()) {
                if (var_core_value_sig24B9[var_core_value_sigD7EA(0x3af)]() === var_core_value_sigA90D) return !0x0;
                var_core_value_sig4545 !== -0x1 && var_core_value_sig2B65 < var_core_value_sig4545 && (var_core_value_sigF39A = var_core_value_sig2B65 + 0x1);
              }
              return !0x1;
            })) return !0x1;
            var_core_value_sig63F3["startCollectChangeset"]();
            let var_core_value_sigF79C = var_core_value_sig6A71[var_core_value_sigD1FC(0x263)](),
              var_core_value_sig2E54 = var_core_value_sig1F44[var_core_value_sigD1FC(0x1f7)]() + var_core_value_sigD1FC(0x328) + Ke(this[var_core_value_sigD1FC(0x483)], var_core_value_sigA90D),
              var_core_value_sig7658 = new e["DateGroupField"](var_core_value_sigF79C, var_core_value_sig2E54, (0x0, e["generateHexNumber"])(0x3), var_core_value_sig1F44[var_core_value_sigD1FC(0x1b6)](), var_core_value_sigA90D);
            this[var_core_value_sigD1FC(0x25b)](var_core_value_sigD689), var_core_value_sig6A71[var_core_value_sigD1FC(0x30a)](var_core_value_sig7658), var_core_value_sig3BF6["addField"](var_core_value_sigF79C, var_core_value_sig2E54), var_core_value_sig7658[var_core_value_sigD1FC(0x4b1)](var_core_value_sig1F44), var_core_value_sig63F3[var_core_value_sigD1FC(0x4c0)](var_core_value_sigF79C, var_core_value_sig7A3C, var_core_value_sigF39A), var_core_value_sig63F3[var_core_value_sigD1FC(0x18c)](var_core_value_sig37A8, !0x0);
            let var_core_value_sigDCF5 = var_core_value_sig63F3[var_core_value_sigD1FC(0x208)](),
              var_core_value_sigC786 = var_core_value_sig63F3["query"]()[var_core_value_sigD1FC(0x1c6)](),
              var_core_value_sigC0D9 = var_core_value_sig7658[var_core_value_sigD1FC(0x1c6)]();
            var_core_value_sig3BF6[var_core_value_sigD1FC(0x18e)](var_core_value_sigF79C);
            let var_core_value_sigF051 = !0x0;
            for (let var_core_value_sigE627 in var_core_value_sig6A71["collections"]) if (var_core_value_sig6A71["collections"][var_core_value_sigE627][var_core_value_sigD1FC(0x296)]()[var_core_value_sigD1FC(0x238)](var_core_value_sigF79C)) {
              var_core_value_sigF051 = !0x1;
              break;
            }
            var_core_value_sigF051 && var_core_value_sig6A71[var_core_value_sigD1FC(0x1ff)](var_core_value_sigF79C), var_core_value_sigD6E7["setPivotDateGroup"] = {
              view: var_core_value_sigC786,
              changesets: var_core_value_sig63F3["endCollectChangeset"](),
              isEmpty: var_core_value_sigDCF5,
              pivotTableConfig: var_core_value_sig38CE,
              shouldBeAddedGroupJSON: var_core_value_sigC0D9
            };
          }
          break;
        case var_core_value_sigD1FC(0x465):
          {
            let var_core_value_sig5825 = var_core_value_sigE2F9["params"]["movePivotField"];
            if (!var_core_value_sig5825) return;
            let {
                fieldId: var_core_value_sig4EB7,
                area: var_core_value_sig73AF,
                index: var_core_value_sig548A
              } = var_core_value_sig5825,
              var_core_value_sigE026 = this["_sheetsPivotDataSourceModel"]["getPivotTableConfig"](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sigE026) return;
            let var_core_value_sig339E = this[var_core_value_sigD1FC(0x480)]["getPivotTableInstance"](var_core_value_sig1EB3);
            if (!var_core_value_sig339E) return;
            var_core_value_sig339E["startCollectChangeset"]();
            let {
              area: var_core_value_sig7550,
              index: var_core_value_sig2983
            } = var_core_value_sig339E[var_core_value_sigD1FC(0x248)](var_core_value_sig4EB7);
            if (var_core_value_sig339E[var_core_value_sigD1FC(0x35d)](var_core_value_sig4EB7, var_core_value_sig73AF, var_core_value_sig548A), var_core_value_sig73AF === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x1df)] && var_core_value_sig339E["getTableFieldById"](var_core_value_sig4EB7)[var_core_value_sigD1FC(0x455)]() === void 0x0) {
              let var_core_value_sigEF3E = var_core_value_sig339E[var_core_value_sigD1FC(0x3b3)](var_core_value_sig4EB7);
              if (var_core_value_sigEF3E && var_core_value_sigEF3E[var_core_value_sigD1FC(0x455)]() === void 0x0) {
                let var_core_value_sig5CA5 = var_core_value_sig339E[var_core_value_sigD1FC(0x25c)](var_core_value_sig4EB7);
                if (var_core_value_sig5CA5) {
                  let var_core_value_sigFBA4 = var_core_value_sig5CA5 == null ? void 0x0 : var_core_value_sig5CA5[var_core_value_sigD1FC(0x4c2)]();
                  var_core_value_sig339E["setSubtotalType"](var_core_value_sig4EB7, var_core_value_sigFBA4 === e[var_core_value_sigD1FC(0x428)]["number"] ? e["PivotSubtotalTypeEnum"][var_core_value_sigD1FC(0x169)] : e[var_core_value_sigD1FC(0x3cd)]["count"]);
                }
              }
            }
            let var_core_value_sigE1B0 = var_core_value_sig339E[var_core_value_sigD1FC(0x199)](),
              var_core_value_sigD4FF = var_core_value_sig339E[var_core_value_sigD1FC(0x3d8)](),
              var_core_value_sig1E5B = var_core_value_sig339E[var_core_value_sigD1FC(0x4b0)](e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x1df)]) > 0x1;
            if (var_core_value_sig1E5B && var_core_value_sig7550 === var_core_value_sig73AF && (var_core_value_sig73AF === e["PivotTableFiledAreaEnum"][var_core_value_sigD1FC(0x289)] && var_core_value_sigE1B0 === e[var_core_value_sigD1FC(0x402)][var_core_value_sigD1FC(0x289)] || var_core_value_sig73AF === e["PivotTableFiledAreaEnum"][var_core_value_sigD1FC(0x374)] && var_core_value_sigE1B0 === e["PivotTableValuePositionEnum"][var_core_value_sigD1FC(0x374)])) {
              let var_core_value_sig273D = var_core_value_sigD4FF;
              var_core_value_sig2983 <= var_core_value_sigD4FF && var_core_value_sig273D--, var_core_value_sig548A <= var_core_value_sigD4FF && var_core_value_sig273D++, var_core_value_sig339E[var_core_value_sigD1FC(0x2e8)](var_core_value_sigE1B0, var_core_value_sig273D);
            } else var_core_value_sig1E5B && (var_core_value_sig7550 === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x289)] && var_core_value_sigE1B0 === e[var_core_value_sigD1FC(0x402)][var_core_value_sigD1FC(0x289)] || var_core_value_sig7550 === e["PivotTableFiledAreaEnum"][var_core_value_sigD1FC(0x374)] && var_core_value_sigE1B0 === e["PivotTableValuePositionEnum"]["Column"]) && var_core_value_sigD4FF >= var_core_value_sig2983 && var_core_value_sig339E[var_core_value_sigD1FC(0x2e8)](var_core_value_sigE1B0, var_core_value_sigD4FF - 0x1), var_core_value_sig1E5B && (var_core_value_sig73AF === e["PivotTableFiledAreaEnum"]["Row"] && var_core_value_sigE1B0 === e[var_core_value_sigD1FC(0x402)]["Row"] || var_core_value_sig73AF === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x374)] && var_core_value_sigE1B0 === e["PivotTableValuePositionEnum"][var_core_value_sigD1FC(0x374)]) && var_core_value_sigD4FF >= var_core_value_sig548A && var_core_value_sig339E[var_core_value_sigD1FC(0x2e8)](var_core_value_sigE1B0, var_core_value_sigD4FF + 0x1);
            let var_core_value_sigB680 = var_core_value_sig339E[var_core_value_sigD1FC(0x268)](),
              var_core_value_sig1F64 = var_core_value_sig339E[var_core_value_sigD1FC(0x208)](),
              var_core_value_sigDD1C = var_core_value_sig339E[var_core_value_sigD1FC(0x396)]();
            var_core_value_sigD6E7["movePivotField"] = {
              view: var_core_value_sigB680["toJSON"](),
              changesets: var_core_value_sigDD1C,
              isEmpty: var_core_value_sig1F64,
              pivotTableConfig: var_core_value_sigE026
            };
          }
          break;
        case var_core_value_sigD1FC(0x401):
          {
            let var_core_value_sig2C39 = var_core_value_sigE2F9["params"][var_core_value_sigD1FC(0x401)];
            if (!var_core_value_sig2C39) return;
            let var_core_value_sigB7D1 = var_core_value_sig2C39[var_core_value_sigD1FC(0x2e1)],
              var_core_value_sig64F0 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig64F0) return !0x1;
            let var_core_value_sig85B1 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3);
            if (!var_core_value_sig85B1) return !0x1;
            var_core_value_sig85B1[var_core_value_sigD1FC(0x44f)]();
            for (let var_core_value_sig9A0D of var_core_value_sigB7D1) {
              let {
                area: var_core_value_sigE90F
              } = var_core_value_sig85B1[var_core_value_sigD1FC(0x248)](var_core_value_sig9A0D);
              var_core_value_sigE90F === e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x1df)] && var_core_value_sig85B1["removeValueFilterInfoByValueFieldId"](var_core_value_sig9A0D), (var_core_value_sigE90F === e[var_core_value_sigD1FC(0x200)]["Row"] || var_core_value_sigE90F === e[var_core_value_sigD1FC(0x200)]["Column"]) && var_core_value_sig85B1["removeValueFilterInfo"](var_core_value_sig9A0D), var_core_value_sig85B1[var_core_value_sigD1FC(0x177)](var_core_value_sig9A0D);
            }
            let var_core_value_sig3141 = var_core_value_sig85B1[var_core_value_sigD1FC(0x208)](),
              var_core_value_sig2162 = var_core_value_sig85B1["query"]()[var_core_value_sigD1FC(0x1c6)]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x401)] = {
              changesets: var_core_value_sig85B1[var_core_value_sigD1FC(0x396)](),
              pivotTableConfig: var_core_value_sig64F0,
              isEmpty: var_core_value_sig3141,
              view: var_core_value_sig2162
            };
          }
          break;
        case var_core_value_sigD1FC(0x2e0):
          {
            let var_core_value_sig2EAD = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x2e0)];
            if (!var_core_value_sig2EAD) return;
            let {
                tableFieldId: var_core_value_sig6774,
                items: var_core_value_sig340D,
                isAll: var_core_value_sig82D4
              } = var_core_value_sig2EAD,
              var_core_value_sigBDE4 = this["_sheetsPivotDataSourceModel"]["getPivotTableInstance"](var_core_value_sig1EB3),
              var_core_value_sig7DF1 = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sigBDE4 || !var_core_value_sig7DF1) return;
            var_core_value_sigBDE4[var_core_value_sigD1FC(0x44f)](), var_core_value_sigBDE4[var_core_value_sigD1FC(0x3b9)](var_core_value_sig6774, {
              type: e[var_core_value_sigD1FC(0x362)][var_core_value_sigD1FC(0x43d)],
              list: var_core_value_sig340D,
              isAll: var_core_value_sig82D4
            });
            let var_core_value_sigDC86 = var_core_value_sigBDE4[var_core_value_sigD1FC(0x208)]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x2e0)] = {
              view: var_core_value_sigBDE4[var_core_value_sigD1FC(0x268)]()[var_core_value_sigD1FC(0x1c6)](),
              changesets: var_core_value_sigBDE4[var_core_value_sigD1FC(0x396)](),
              isEmpty: var_core_value_sigDC86,
              pivotTableConfig: var_core_value_sig7DF1
            };
          }
          break;
        case "setValuePivotFilter":
          {
            let var_core_value_sig0B0C = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x318)];
            if (!var_core_value_sig0B0C) break;
            let {
                tableFieldId: var_core_value_sigA39E,
                filterInfo: var_core_value_sigBBEE
              } = var_core_value_sig0B0C,
              var_core_value_sig011D = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig6167 = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig011D || !var_core_value_sig6167) break;
            var_core_value_sig011D[var_core_value_sigD1FC(0x44f)]();
            try {
              var_core_value_sig011D[var_core_value_sigD1FC(0x453)](var_core_value_sigA39E, var_core_value_sigBBEE);
              let var_core_value_sigA319 = var_core_value_sig011D[var_core_value_sigD1FC(0x208)](),
                var_core_value_sig2D58 = var_core_value_sig011D[var_core_value_sigD1FC(0x268)]()["toJSON"](),
                var_core_value_sig223F = var_core_value_sig011D["endCollectChangeset"]();
              var_core_value_sig223F[var_core_value_sigD1FC(0x2b6)] > 0x0 && (var_core_value_sigD6E7["setValuePivotFilter"] = {
                view: var_core_value_sig2D58,
                changesets: var_core_value_sig223F,
                isEmpty: var_core_value_sigA319,
                pivotTableConfig: var_core_value_sig6167
              });
            } catch (var_core_value_sigD749) {
              var_core_value_sig011D[var_core_value_sigD1FC(0x27b)](), var_core_value_sig3669 = var_core_value_sigD749 instanceof Error ? var_core_value_sigD749[var_core_value_sigD1FC(0x2f1)] : String(var_core_value_sigD749);
            }
          }
          break;
        case var_core_value_sigD1FC(0x2a0):
          {
            let var_core_value_sig65A1 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x2a0)];
            if (!var_core_value_sig65A1) return;
            let {
                tableFieldId: var_core_value_sig7F19,
                info: var_core_value_sig7827
              } = var_core_value_sig65A1,
              var_core_value_sig652C = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig7E32 = this[var_core_value_sigD1FC(0x480)]["getPivotTableConfig"](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig652C || !var_core_value_sig7E32) return;
            var_core_value_sig652C[var_core_value_sigD1FC(0x44f)](), var_core_value_sig652C["setSortInfo"](var_core_value_sig7F19, var_core_value_sig7827);
            let var_core_value_sig4C07 = var_core_value_sig652C[var_core_value_sigD1FC(0x208)]();
            var_core_value_sigD6E7["setPivotSort"] = {
              view: var_core_value_sig652C[var_core_value_sigD1FC(0x268)]()["toJSON"](),
              changesets: var_core_value_sig652C[var_core_value_sigD1FC(0x396)](),
              isEmpty: var_core_value_sig4C07,
              pivotTableConfig: var_core_value_sig7E32
            };
          }
          break;
        case var_core_value_sigD1FC(0x42e):
          {
            let var_core_value_sig79AB = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x42e)];
            if (!var_core_value_sig79AB) break;
            let {
                tableFieldId: var_core_value_sig8E74,
                displayName: var_core_value_sig104C,
                subtotalType: var_core_value_sig841D,
                format: var_core_value_sig90CB,
                showDataAs: var_core_value_sigBDF5
              } = var_core_value_sig79AB,
              var_core_value_sigACC6 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig1614 = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sigACC6 || !var_core_value_sig1614 || var_core_value_sigBDF5 !== void 0x0 && (!var_core_value_sigACC6[var_core_value_sigD1FC(0x18b)]()[var_core_value_sigD1FC(0x238)](var_core_value_sig8E74) || !var_core_value_sig1614[var_core_value_sigD1FC(0x2a9)]["measure"][var_core_value_sig8E74])) break;
            var_core_value_sigACC6["startCollectChangeset"]();
            try {
              var_core_value_sig104C !== void 0x0 && var_core_value_sigACC6[var_core_value_sigD1FC(0x15c)](var_core_value_sig8E74, var_core_value_sig104C), var_core_value_sig841D !== void 0x0 && var_core_value_sigACC6[var_core_value_sigD1FC(0x19d)](var_core_value_sig8E74, var_core_value_sig841D), var_core_value_sig90CB !== void 0x0 && var_core_value_sigACC6[var_core_value_sigD1FC(0x311)](var_core_value_sig8E74, var_core_value_sig90CB), var_core_value_sigBDF5 !== void 0x0 && var_core_value_sigACC6[var_core_value_sigD1FC(0x1f1)](var_core_value_sig8E74, var_core_value_sigBDF5);
              let var_core_value_sigCFFA = var_core_value_sigACC6["isEmpty"](),
                var_core_value_sig58C1 = var_core_value_sigACC6[var_core_value_sigD1FC(0x268)]()[var_core_value_sigD1FC(0x1c6)]();
              var_core_value_sigD6E7["setPivotSetting"] = {
                changesets: var_core_value_sigACC6[var_core_value_sigD1FC(0x396)](),
                pivotTableConfig: var_core_value_sig1614,
                isEmpty: var_core_value_sigCFFA,
                view: var_core_value_sig58C1
              };
            } catch (var_core_value_sig5090) {
              var_core_value_sigACC6["cancelCollectChangeset"](), var_core_value_sig3669 = var_core_value_sig5090 instanceof Error ? var_core_value_sig5090[var_core_value_sigD1FC(0x2f1)] : String(var_core_value_sig5090);
            }
          }
          break;
        case var_core_value_sigD1FC(0x310):
          {
            let var_core_value_sig85C3 = var_core_value_sigE2F9["params"][var_core_value_sigD1FC(0x310)];
            if (!var_core_value_sig85C3) return;
            let {
                dataRangeInfo: var_core_value_sigB996,
                unitId: var_core_value_sig4BBA,
                subUnitId: var_core_value_sig6201
              } = var_core_value_sig85C3,
              var_core_value_sig5151 = this["_sheetsPivotDataSourceModel"]["getPivotTableConfig"](var_core_value_sig4BBA, var_core_value_sig6201, var_core_value_sig1EB3),
              var_core_value_sigB542 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3);
            if (!this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x3f3)](var_core_value_sig4BBA, var_core_value_sig1EB3) || !var_core_value_sigB542 || !var_core_value_sig5151) return;
            let var_core_value_sigBB6C = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x250)](var_core_value_sig4BBA, var_core_value_sig1EB3, var_core_value_sigB996),
              var_core_value_sigE2BF = this[var_core_value_sigD1FC(0x480)]["getCollection"](var_core_value_sig4BBA, var_core_value_sig1EB3)[var_core_value_sigD1FC(0x1c6)](),
              {
                collection: var_core_value_sigB8C7
              } = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x419)]({
                unitId: var_core_value_sigB996[var_core_value_sigD1FC(0x386)],
                sheetName: var_core_value_sigB996[var_core_value_sigD1FC(0x2f5)],
                subUnitId: var_core_value_sigB996["subUnitId"],
                range: var_core_value_sigB996["range"]
              }),
              var_core_value_sigA56E = var_core_value_sigB8C7[var_core_value_sigD1FC(0x1c6)]();
            var_core_value_sigB542[var_core_value_sigD1FC(0x44f)]();
            let var_core_value_sig1998 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x430)](var_core_value_sig4BBA)[var_core_value_sigD1FC(0x3f7)]() || e["getAutoDisplayName"];
            var_core_value_sigB542[var_core_value_sigD1FC(0x3a7)](var_core_value_sigC368 => {
              const var_core_value_sigAD561 = var_core_value_sigD1FC;
              let var_core_value_sigDB4A = var_core_value_sigC368["getDataFieldId"]();
              if (!var_core_value_sigB8C7[var_core_value_sigAD561(0x14d)](var_core_value_sigDB4A)) {
                let var_core_value_sigEFD4 = var_core_value_sigB8C7[var_core_value_sigAD561(0x288)](var_core_value_sigC368[var_core_value_sigAD561(0x1b0)]());
                if (var_core_value_sigEFD4) {
                  var_core_value_sigB542[var_core_value_sigAD561(0x43a)](var_core_value_sigC368[var_core_value_sigAD561(0x1b6)](), var_core_value_sigEFD4[var_core_value_sigAD561(0x1f7)](), var_core_value_sigEFD4[var_core_value_sigAD561(0x1b6)]());
                  let {
                      area: var_core_value_sig4383
                    } = var_core_value_sigB542[var_core_value_sigAD561(0x248)](var_core_value_sigC368[var_core_value_sigAD561(0x1b6)]()),
                    var_core_value_sig186C = var_core_value_sigC368[var_core_value_sigAD561(0x1b0)](),
                    var_core_value_sigD955 = var_core_value_sigC368[var_core_value_sigAD561(0x340)]();
                  if (var_core_value_sig4383 === e[var_core_value_sigAD561(0x200)]["Value"]) {
                    let var_core_value_sigF602 = var_core_value_sigC368[var_core_value_sigAD561(0x455)]();
                    var_core_value_sig186C = var_core_value_sig1998(var_core_value_sigEFD4[var_core_value_sigAD561(0x1f7)](), var_core_value_sigF602);
                  }
                  var_core_value_sigD955 !== var_core_value_sig186C && var_core_value_sigB542[var_core_value_sigAD561(0x15c)](var_core_value_sigC368["getId"](), var_core_value_sig186C);
                } else var_core_value_sigB542[var_core_value_sigAD561(0x177)](var_core_value_sigC368[var_core_value_sigAD561(0x1b6)]());
              }
            });
            let var_core_value_sigFF19 = var_core_value_sigB542[var_core_value_sigD1FC(0x208)]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x310)] = {
              view: var_core_value_sigB542[var_core_value_sigD1FC(0x268)]()["toJSON"](),
              changesets: var_core_value_sigB542["endCollectChangeset"](),
              isEmpty: var_core_value_sigFF19,
              pivotTableConfig: var_core_value_sig5151,
              collectionConfig: var_core_value_sigA56E,
              oldCollectionConfig: var_core_value_sigE2BF,
              deleteIds: var_core_value_sigBB6C
            };
          }
          break;
        case var_core_value_sigD1FC(0x2e8):
          {
            let var_core_value_sig43B8 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)]["updateValuePosition"];
            if (!var_core_value_sig43B8) return;
            let {
                position: var_core_value_sigD98F,
                index: var_core_value_sig66C0
              } = var_core_value_sig43B8,
              var_core_value_sig9D15 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig9D15) return !0x1;
            let var_core_value_sigB785 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3);
            if (!var_core_value_sigB785) return !0x1;
            var_core_value_sigB785[var_core_value_sigD1FC(0x44f)](), var_core_value_sigB785[var_core_value_sigD1FC(0x2e8)](var_core_value_sigD98F, var_core_value_sig66C0);
            let var_core_value_sig130F = var_core_value_sigB785[var_core_value_sigD1FC(0x208)](),
              var_core_value_sigC0E3 = var_core_value_sigB785[var_core_value_sigD1FC(0x268)]()[var_core_value_sigD1FC(0x1c6)]();
            var_core_value_sigD6E7["updateValuePosition"] = {
              changesets: var_core_value_sigB785[var_core_value_sigD1FC(0x396)](),
              pivotTableConfig: var_core_value_sig9D15,
              isEmpty: var_core_value_sig130F,
              view: var_core_value_sigC0E3
            };
          }
          break;
        case var_core_value_sigD1FC(0x19c):
          {
            let var_core_value_sig52F7 = var_core_value_sigE2F9["params"][var_core_value_sigD1FC(0x19c)];
            if (!var_core_value_sig52F7) return;
            let {
                tableFieldId: var_core_value_sig866F,
                collapse: var_core_value_sigDE3D,
                item: var_core_value_sigF175
              } = var_core_value_sig52F7,
              var_core_value_sig6A18 = this[var_core_value_sigD1FC(0x480)]["getPivotTableInstance"](var_core_value_sig1EB3),
              var_core_value_sig4E3D = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig6A18 || !var_core_value_sig4E3D) return;
            var_core_value_sig6A18[var_core_value_sigD1FC(0x44f)](), var_core_value_sig6A18[var_core_value_sigD1FC(0x18c)](var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175);
            let var_core_value_sig49B0 = var_core_value_sig6A18[var_core_value_sigD1FC(0x208)]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x19c)] = {
              view: var_core_value_sig6A18[var_core_value_sigD1FC(0x268)]()["toJSON"](),
              isEmpty: var_core_value_sig49B0,
              pivotTableConfig: var_core_value_sig4E3D,
              changesets: var_core_value_sig6A18[var_core_value_sigD1FC(0x396)]()
            };
          }
          break;
        case var_core_value_sigD1FC(0x47f):
          {
            let var_core_value_sig2547 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x47f)];
            if (!var_core_value_sig2547) return;
            let {
                pivotTableConfig: var_core_value_sigBCA9
              } = var_core_value_sig2547,
              var_core_value_sig4CDF = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig3F79 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig4CDF || !var_core_value_sig3F79) return;
            var_core_value_sig4CDF[var_core_value_sigD1FC(0x44f)](), He(var_core_value_sig4CDF, var_core_value_sigBCA9);
            let var_core_value_sig880E = var_core_value_sig4CDF[var_core_value_sigD1FC(0x208)](),
              var_core_value_sigC9ED = var_core_value_sig4CDF["query"]()[var_core_value_sigD1FC(0x1c6)](),
              var_core_value_sigB57B = var_core_value_sig4CDF["endCollectChangeset"]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x47f)] = {
              view: var_core_value_sigC9ED,
              isEmpty: var_core_value_sig880E,
              pivotTableConfig: {
                ...var_core_value_sig3F79,
                fieldsConfig: var_core_value_sig4CDF[var_core_value_sigD1FC(0x1c6)]()
              },
              changesets: var_core_value_sigB57B
            };
          }
          break;
        case "resetPivotTable":
          {
            let var_core_value_sig780B = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x3c8)];
            if (!var_core_value_sig780B) return;
            let var_core_value_sig7D1B = this["_sheetsPivotDataSourceModel"]["getPivotTableInstance"](var_core_value_sig1EB3),
              var_core_value_sig7BE0 = this["_sheetsPivotDataSourceModel"]["getPivotTableConfig"](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig7D1B || !var_core_value_sig7BE0) return;
            var_core_value_sig7D1B[var_core_value_sigD1FC(0x44f)](), Ue(var_core_value_sig7D1B, var_core_value_sig780B[var_core_value_sigD1FC(0x242)]);
            let var_core_value_sig7D40 = var_core_value_sig7D1B[var_core_value_sigD1FC(0x268)]()["toJSON"](),
              var_core_value_sig6C7E = var_core_value_sig7D1B["endCollectChangeset"]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x3c8)] = {
              view: var_core_value_sig7D40,
              isEmpty: !0x0,
              pivotTableConfig: {
                ...var_core_value_sig7BE0,
                fieldsConfig: var_core_value_sig7D1B[var_core_value_sigD1FC(0x1c6)]()
              },
              changesets: var_core_value_sig6C7E
            };
          }
          break;
        case var_core_value_sigD1FC(0x235):
          {
            let var_core_value_sig68BE = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x476)];
            if (!var_core_value_sig68BE) return;
            let {
                info: var_core_value_sig04C6
              } = var_core_value_sig68BE,
              var_core_value_sigCA05 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig2F2B = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sigCA05 || !var_core_value_sig2F2B) return;
            var_core_value_sigCA05[var_core_value_sigD1FC(0x44f)](), var_core_value_sigCA05[var_core_value_sigD1FC(0x476)](var_core_value_sig04C6);
            let var_core_value_sig70AF = var_core_value_sigCA05[var_core_value_sigD1FC(0x208)]();
            var_core_value_sigD6E7["setPivotOption"] = {
              view: var_core_value_sigCA05[var_core_value_sigD1FC(0x268)]()[var_core_value_sigD1FC(0x1c6)](),
              isEmpty: var_core_value_sig70AF,
              pivotTableConfig: var_core_value_sig2F2B,
              changesets: var_core_value_sigCA05["endCollectChangeset"]()
            };
          }
          break;
        case var_core_value_sigD1FC(0x3c6):
          {
            let var_core_value_sigD04E = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x3c6)];
            if (!var_core_value_sigD04E) return;
            let {
                layout: var_core_value_sigB99B
              } = var_core_value_sigD04E,
              var_core_value_sig5A75 = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x2fb)](var_core_value_sig1EB3),
              var_core_value_sig7BAF = this["_sheetsPivotDataSourceModel"][var_core_value_sigD1FC(0x2e6)](var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3);
            if (!var_core_value_sig5A75 || !var_core_value_sig7BAF) return;
            var_core_value_sig5A75[var_core_value_sigD1FC(0x44f)](), var_core_value_sig5A75["setLayout"](var_core_value_sigB99B);
            let var_core_value_sig8F69 = var_core_value_sig5A75["isEmpty"]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x3c6)] = {
              view: var_core_value_sig5A75["query"]()[var_core_value_sigD1FC(0x1c6)](),
              isEmpty: var_core_value_sig8F69,
              pivotTableConfig: var_core_value_sig7BAF,
              changesets: var_core_value_sig5A75[var_core_value_sigD1FC(0x396)]()
            };
          }
          break;
        case var_core_value_sigD1FC(0x1a5):
          {
            let var_core_value_sig6884 = var_core_value_sigE2F9[var_core_value_sigD1FC(0x43b)][var_core_value_sigD1FC(0x326)];
            if (!var_core_value_sig6884) return;
            let var_core_value_sig066E = var_core_value_sig6884["sourceRangeInfo"],
              var_core_value_sig9B0D = var_core_value_sig6884[var_core_value_sigD1FC(0x4a4)],
              {
                collection: var_core_value_sig3D2C
              } = this[var_core_value_sigD1FC(0x480)][var_core_value_sigD1FC(0x419)]({
                unitId: var_core_value_sig066E["unitId"],
                sheetName: var_core_value_sig066E["sheetName"],
                subUnitId: var_core_value_sig066E[var_core_value_sigD1FC(0x1bf)],
                range: var_core_value_sig066E[var_core_value_sigD1FC(0x26a)]
              }),
              var_core_value_sigC56D = new e[var_core_value_sigD1FC(0x21f)](var_core_value_sig3D2C, void 0x0, var_core_value_sig9B0D),
              var_core_value_sig3A17 = var_core_value_sig3D2C[var_core_value_sigD1FC(0x296)](),
              {
                rows: var_core_value_sig938F,
                columns: var_core_value_sigD948,
                filters: var_core_value_sigBE5E,
                values: var_core_value_sig0281
              } = var_core_value_sig6884["pivotTableIndexConfig"];
            var_core_value_sigC56D[var_core_value_sigD1FC(0x44f)]();
            for (let {
              field: var_core_value_sig6418,
              selectedItems: var_core_value_sig1896
            } of var_core_value_sig938F || []) {
              let var_core_value_sig861B = var_core_value_sig3A17[var_core_value_sig6418];
              if (var_core_value_sig861B) {
                let var_core_value_sig48BD = var_core_value_sigC56D[var_core_value_sigD1FC(0x4c0)](var_core_value_sig861B, e["PivotTableFiledAreaEnum"][var_core_value_sigD1FC(0x289)]);
                var_core_value_sig1896 && var_core_value_sig48BD && var_core_value_sigC56D[var_core_value_sigD1FC(0x3b9)](var_core_value_sig48BD[var_core_value_sigD1FC(0x1b6)](), {
                  type: e[var_core_value_sigD1FC(0x362)][var_core_value_sigD1FC(0x43d)],
                  list: var_core_value_sig1896,
                  isAll: !0x1
                });
              }
            }
            for (let {
              field: var_core_value_sig0285,
              selectedItems: var_core_value_sig777D
            } of var_core_value_sigD948 || []) {
              let var_core_value_sig5237 = var_core_value_sig3A17[var_core_value_sig0285];
              if (var_core_value_sig5237) {
                let var_core_value_sig429F = var_core_value_sigC56D["addFieldWithSourceId"](var_core_value_sig5237, e[var_core_value_sigD1FC(0x200)][var_core_value_sigD1FC(0x374)]);
                var_core_value_sig777D && var_core_value_sig429F && var_core_value_sigC56D[var_core_value_sigD1FC(0x3b9)](var_core_value_sig429F[var_core_value_sigD1FC(0x1b6)](), {
                  type: e[var_core_value_sigD1FC(0x362)][var_core_value_sigD1FC(0x43d)],
                  list: var_core_value_sig777D,
                  isAll: !0x1
                });
              }
            }
            for (let {
              field: var_core_value_sig3F4C,
              selectedItems: var_core_value_sigD65A
            } of var_core_value_sigBE5E || []) {
              let var_core_value_sigBB00 = var_core_value_sig3A17[var_core_value_sig3F4C];
              if (var_core_value_sigBB00) {
                let var_core_value_sigF62A = var_core_value_sigC56D[var_core_value_sigD1FC(0x4c0)](var_core_value_sigBB00, e[var_core_value_sigD1FC(0x200)]["Filter"]);
                var_core_value_sigD65A && var_core_value_sigF62A && var_core_value_sigC56D["setLabelFilterInfo"](var_core_value_sigF62A[var_core_value_sigD1FC(0x1b6)](), {
                  type: e[var_core_value_sigD1FC(0x362)]["ManualFilter"],
                  list: var_core_value_sigD65A,
                  isAll: !0x1
                });
              }
            }
            for (let {
              field: var_core_value_sig5A13,
              subTotalType: var_core_value_sigF593,
              formatString: var_core_value_sig3607
            } of var_core_value_sig0281 || []) {
              let var_core_value_sig7E54 = var_core_value_sig3D2C["getFieldById"](var_core_value_sig3A17[var_core_value_sig5A13]);
              if (!var_core_value_sig7E54) continue;
              let var_core_value_sig9A8D = var_core_value_sig3A17[var_core_value_sig5A13];
              if (var_core_value_sig9A8D) {
                let var_core_value_sig8178 = var_core_value_sigC56D[var_core_value_sigD1FC(0x4c0)](var_core_value_sig9A8D, e["PivotTableFiledAreaEnum"][var_core_value_sigD1FC(0x1df)]);
                if (var_core_value_sig8178) {
                  if (var_core_value_sigF593 !== void 0x0) {
                    var_core_value_sigC56D[var_core_value_sigD1FC(0x19d)](var_core_value_sig8178["getId"](), var_core_value_sigF593);
                    let var_core_value_sig3EEE = (this[var_core_value_sigD1FC(0x480)]["getDataFieldManager"](var_core_value_sig066E[var_core_value_sigD1FC(0x386)])[var_core_value_sigD1FC(0x3f7)]() || e[var_core_value_sigD1FC(0x423)])(var_core_value_sig3D2C[var_core_value_sigD1FC(0x340)](var_core_value_sig9A8D), var_core_value_sigF593);
                    var_core_value_sigC56D[var_core_value_sigD1FC(0x15c)](var_core_value_sig8178[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig3EEE);
                  } else {
                    if (var_core_value_sig7E54) {
                      let var_core_value_sig7524 = var_core_value_sig7E54 == null ? void 0x0 : var_core_value_sig7E54[var_core_value_sigD1FC(0x4c2)]();
                      var_core_value_sigC56D[var_core_value_sigD1FC(0x19d)](var_core_value_sig8178[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig7524 === e[var_core_value_sigD1FC(0x428)][var_core_value_sigD1FC(0x3ea)] ? e[var_core_value_sigD1FC(0x3cd)][var_core_value_sigD1FC(0x169)] : e[var_core_value_sigD1FC(0x3cd)]["count"]);
                    }
                  }
                  var_core_value_sig3607 && var_core_value_sigC56D[var_core_value_sigD1FC(0x311)](var_core_value_sig8178[var_core_value_sigD1FC(0x1b6)](), var_core_value_sig3607);
                }
              }
            }
            let var_core_value_sigED71 = var_core_value_sigC56D[var_core_value_sigD1FC(0x268)](),
              var_core_value_sig281C = var_core_value_sigC56D[var_core_value_sigD1FC(0x1c6)](),
              var_core_value_sig3C92 = var_core_value_sigC56D["isEmpty"](),
              var_core_value_sigB16B = var_core_value_sigC56D[var_core_value_sigD1FC(0x396)]();
            var_core_value_sigD6E7[var_core_value_sigD1FC(0x326)] = {
              view: var_core_value_sigED71,
              fieldsConfig: var_core_value_sig281C,
              collectionConfig: var_core_value_sig3D2C["toJSON"](),
              isEmpty: var_core_value_sig3C92,
              changesets: var_core_value_sigB16B
            };
          }
          break;
        case var_core_value_sigD1FC(0x33f):
          {
            let var_core_value_sig585D = we(this["_injector"], var_core_value_sigE2F9);
            if (!var_core_value_sig585D) return;
            let {
              range: var_core_value_sigE722,
              sourceSubUnitId: var_core_value_sig062A,
              sourceUnitId: var_core_value_sig050A,
              formatMap: var_core_value_sig8B32,
              indexes: var_core_value_sig870F
            } = var_core_value_sig585D;
            var_core_value_sigD6E7["drillDown"] = {
              range: var_core_value_sigE722,
              sourceSubUnitId: var_core_value_sig062A,
              sourceUnitId: var_core_value_sig050A,
              formatMap: var_core_value_sig8B32,
              indexes: var_core_value_sig870F
            };
          }
          break;
      }
      this[var_core_value_sigD1FC(0x1db)]["executeCommand"](ie["id"], {
        version: var_core_value_sigE2F9[var_core_value_sigD1FC(0x490)],
        result: var_core_value_sigD6E7,
        error: var_core_value_sig3669
      }, {
        onlyLocal: !0x0
      });
    }));
  }
  ["_initPivotTextInfo"]() {
    this["disposeWithMe"](this[ox12baea(0x1db)][ox12baea(0x484)](var_core_value_sig5CBC => {
      const var_core_value_sig20BE = ox12baea;
      if (var_core_value_sig5CBC["id"] !== ae["id"]) return;
      let var_core_value_sig6BD0 = var_core_value_sig5CBC[var_core_value_sig20BE(0x43b)];
      return this["_sheetsPivotDataSourceModel"]["setTextInfo"](var_core_value_sig6BD0[var_core_value_sig20BE(0x28d)], var_core_value_sig6BD0[var_core_value_sig20BE(0x234)]), !0x0;
    }));
  }
  ["_subjectCollectionChange"]() {
    this[ox18af4f(0x1e7)](this[ox18af4f(0x480)][ox18af4f(0x305)][ox18af4f(0x131)](var_core_value_sig8C15 => {
      const var_core_value_sig6DF7 = ox18af4f;
      switch (var_core_value_sig8C15[var_core_value_sig6DF7(0x3dd)]) {
        case var_core_value_sig6DF7(0x3db):
          var_core_value_sig8C15[var_core_value_sig6DF7(0x38d)] && var_core_value_sig8C15[var_core_value_sig6DF7(0x376)] && this["handleSourceRangeChange"](var_core_value_sig8C15[var_core_value_sig6DF7(0x27e)], var_core_value_sig8C15["dataRangeInfo"], var_core_value_sig8C15[var_core_value_sig6DF7(0x376)]);
          break;
        case "delete":
          {
            let {
              unitId: var_core_value_sigB683,
              subUnitId: var_core_value_sig26EC1,
              token: var_core_value_sigEEDB
            } = var_core_value_sig8C15;
            var_core_value_sigB683 && var_core_value_sig26EC1 && var_core_value_sigEEDB && this[var_core_value_sig6DF7(0x1b7)](var_core_value_sigB683, var_core_value_sig26EC1, var_core_value_sigEEDB);
          }
          break;
        case var_core_value_sig6DF7(0x420):
          {
            let {
                token: var_core_value_sig36E7,
                oldSourceRangeInfo: var_core_value_sig6A78,
                dataRangeInfo: var_core_value_sigF7EF,
                targetCellInfo: var_core_value_sig27F9
              } = var_core_value_sig8C15,
              {
                unitId: var_core_value_sig393E,
                subUnitId: var_core_value_sigB609
              } = var_core_value_sig6A78 || {};
            var_core_value_sig393E && var_core_value_sigB609 && var_core_value_sig36E7 && this[var_core_value_sig6DF7(0x1b7)](var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig36E7), var_core_value_sigF7EF && var_core_value_sig27F9 && this[var_core_value_sig6DF7(0x36d)](var_core_value_sig36E7, var_core_value_sigF7EF, var_core_value_sig27F9);
          }
          break;
      }
    }));
  }
  ["_subjectFieldsCollectionChange"]() {
    this[ox1051e6(0x1e7)](this[ox1051e6(0x480)]["fieldsCollectionChange$"][ox1051e6(0x131)](var_core_value_sigB411 => {
      const var_core_value_sigA81B = ox1051e6;
      Object[var_core_value_sigA81B(0x2a8)](var_core_value_sigB411)[var_core_value_sigA81B(0x231)](var_core_value_sig7F05 => {
        const var_core_value_sig41F3 = var_core_value_sigA81B;
        let var_core_value_sigF455 = this[var_core_value_sig41F3(0x480)]["getTargetByPivotId"](var_core_value_sig7F05);
        if (var_core_value_sigF455) {
          let var_core_value_sig390D = this["_sheetsPivotDataSourceModel"][var_core_value_sig41F3(0x2e6)](var_core_value_sigF455 == null ? void 0x0 : var_core_value_sigF455[var_core_value_sig41F3(0x386)], var_core_value_sigF455 == null ? void 0x0 : var_core_value_sigF455[var_core_value_sig41F3(0x1bf)], var_core_value_sig7F05);
          var_core_value_sig390D && (this["handleSourceRangeChange"](var_core_value_sig7F05, var_core_value_sig390D[var_core_value_sig41F3(0x33d)], var_core_value_sig390D[var_core_value_sig41F3(0x376)]), this[var_core_value_sig41F3(0x40f)]([{
            unitId: var_core_value_sigF455[var_core_value_sig41F3(0x386)],
            subUnitId: var_core_value_sigF455[var_core_value_sig41F3(0x1bf)],
            token: var_core_value_sig7F05
          }]));
        }
      });
    }));
  }
  ["_subjectViewChange"]() {
    this["disposeWithMe"](this[ox4d9069(0x480)][ox4d9069(0x286)]["subscribe"](var_core_value_sigFE8D => {
      const var_core_value_sig8595 = ox4d9069;
      let {
        unitId: var_core_value_sigF8DE,
        subUnitId: var_core_value_sigFE76,
        pivotTableId: var_core_value_sig84C8
      } = var_core_value_sigFE8D;
      var_core_value_sigF8DE && var_core_value_sigFE76 && var_core_value_sig84C8 && this[var_core_value_sig8595(0x40f)]([{
        unitId: var_core_value_sigF8DE,
        subUnitId: var_core_value_sigFE76,
        token: var_core_value_sig84C8
      }]);
    }));
  }
  ["triggerDirtyFeature"](var_core_value_sig70B3) {
    let var_core_value_sig422B = {};
    var_core_value_sig70B3["forEach"](var_core_value_sig80C0 => {
      let {
        unitId: var_core_value_sig22B4,
        subUnitId: var_core_value_sigBB37,
        token: var_core_value_sig0C51
      } = var_core_value_sig80C0;
      var_core_value_sig422B[var_core_value_sig22B4] = var_core_value_sig422B[var_core_value_sig22B4] ?? {}, var_core_value_sig422B[var_core_value_sig22B4][var_core_value_sigBB37] = var_core_value_sig422B[var_core_value_sig22B4][var_core_value_sigBB37] ?? {}, var_core_value_sig422B[var_core_value_sig22B4][var_core_value_sigBB37][var_core_value_sig0C51] = !0x0;
    }), this[oxeab09a(0x1db)]["executeCommand"](fn["id"], var_core_value_sig422B);
  }
  ["removeSourceRangeChange"](var_core_value_sig1038, var_core_value_sigC3E6, var_core_value_sig3710) {
    this[ox246e51(0x23f)][ox246e51(0x14b)](var_core_value_sig1038, var_core_value_sigC3E6, [var_core_value_sig3710]);
  }
  ["handleSourceRangeChange"](var_core_value_sig9726, var_core_value_sigFC9B, var_core_value_sig943E) {
    let {
      unitId: var_core_value_sigEF36,
      subUnitId: var_core_value_sigD4B1
    } = var_core_value_sigFC9B;
    this[ox165307(0x23f)][ox165307(0x442)](var_core_value_sig943E[ox165307(0x386)], var_core_value_sig943E[ox165307(0x1bf)], var_core_value_sig9726) && this[ox165307(0x1b7)](var_core_value_sigEF36, var_core_value_sigD4B1, var_core_value_sig9726);
    let var_core_value_sigE5D8 = {
      sheetId: var_core_value_sigD4B1,
      ...var_core_value_sigFC9B
    };
    this[ox165307(0x23f)][ox165307(0x2b2)](var_core_value_sig943E[ox165307(0x386)], var_core_value_sig943E["subUnitId"], var_core_value_sig9726, {
      unitId: var_core_value_sig943E[ox165307(0x386)],
      subUnitId: var_core_value_sig943E[ox165307(0x1bf)],
      dependencyRanges: [var_core_value_sigE5D8],
      getDirtyData: (var_core_value_sigADA4, var_core_value_sig0E48) => {
        const var_core_value_sig495B = ox165307;
        let var_core_value_sig310C = this["_sheetsPivotDataSourceModel"],
          var_core_value_sig759E = var_core_value_sig310C[var_core_value_sig495B(0x16f)](var_core_value_sig9726);
        if (!var_core_value_sig759E) return pn();
        let {
            unitId: var_core_value_sig6C80,
            subUnitId: var_core_value_sig6B99
          } = var_core_value_sig759E,
          var_core_value_sig6ADC = hn(var_core_value_sigADA4, var_core_value_sig0E48, var_core_value_sigFC9B);
        if (var_core_value_sig6ADC[var_core_value_sig495B(0x2b6)] > 0x0) {
          let var_core_value_sig6E78 = var_core_value_sig310C[var_core_value_sig495B(0x3f3)](var_core_value_sigEF36, var_core_value_sig9726),
            var_core_value_sigB3EE = var_core_value_sig6E78["getFieldIds"](),
            var_core_value_sigC50A = this[var_core_value_sig495B(0x20f)](var_core_value_sigFC9B[var_core_value_sig495B(0x386)], var_core_value_sigFC9B["subUnitId"], var_core_value_sig0E48),
            var_core_value_sig11D0 = {},
            var_core_value_sigB8ED = this[var_core_value_sig495B(0x480)][var_core_value_sig495B(0x430)](var_core_value_sig6C80)[var_core_value_sig495B(0x3f7)]() || e["getAutoDisplayName"],
            var_core_value_sig8EAE = [];
          for (let var_core_value_sigC928 of var_core_value_sig6ADC) {
            let var_core_value_sigB512 = var_core_value_sigC928 - (var_core_value_sigFC9B[var_core_value_sig495B(0x26a)][var_core_value_sig495B(0x205)] || 0x0),
              var_core_value_sigF2E6 = var_core_value_sigB3EE[var_core_value_sigB512];
            var_core_value_sig8EAE["push"](var_core_value_sigF2E6), var_core_value_sig11D0[var_core_value_sigF2E6] = var_core_value_sig6E78[var_core_value_sig495B(0x1f8)](var_core_value_sigF2E6)["getName"](), var_core_value_sig310C[var_core_value_sig495B(0x430)](var_core_value_sigEF36)[var_core_value_sig495B(0x21b)](var_core_value_sigF2E6, var_core_value_sigFC9B, var_core_value_sigB512, var_core_value_sigC50A);
          }
          var_core_value_sig6E78[var_core_value_sig495B(0x47d)](var_core_value_sig8EAE)["forEach"](var_core_value_sig39B7 => {
            const var_core_value_sig18E01 = var_core_value_sig495B;
            let [var_core_value_sigE161, var_core_value_sigBDEE] = var_core_value_sig39B7,
              var_core_value_sig1F40 = var_core_value_sig6E78[var_core_value_sig18E01(0x1f8)](var_core_value_sigE161),
              var_core_value_sig3FC7 = var_core_value_sig6E78[var_core_value_sig18E01(0x1f8)](var_core_value_sigBDEE);
            var_core_value_sig1F40 && var_core_value_sig3FC7 && ((0x0, e["isDateGroupField"])(var_core_value_sig1F40) && this[var_core_value_sig18E01(0x25b)](var_core_value_sigEF36), var_core_value_sig1F40["refreshGroupField"](var_core_value_sig3FC7));
          }), var_core_value_sig6E78[var_core_value_sig495B(0x272)]();
          let var_core_value_sig1CDD = var_core_value_sig310C[var_core_value_sig495B(0x2fb)](var_core_value_sig9726);
          if (var_core_value_sig1CDD) {
            mn(var_core_value_sig1CDD, var_core_value_sig11D0, var_core_value_sigB8ED), var_core_value_sig1CDD[var_core_value_sig495B(0x139)](!0x0);
            let var_core_value_sig1E1B = var_core_value_sig1CDD[var_core_value_sig495B(0x268)](),
              var_core_value_sig3B10 = var_core_value_sig310C[var_core_value_sig495B(0x2e6)](var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig9726),
              var_core_value_sig89E6 = var_core_value_sig310C[var_core_value_sig495B(0x430)](var_core_value_sigEF36)[var_core_value_sig495B(0x1c6)]();
            var_core_value_sig310C["updateView"](var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig495B(0x2d0), var_core_value_sig9726, var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sig89E6, !0x0);
          }
        }
        return this[var_core_value_sig495B(0x32f)](var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig9726);
      }
    });
  }
  ["getMatrixFromRunTimeData"](var_core_value_sig74AF, var_core_value_sigBABA, var_core_value_sigA723) {
    var var_core_value_sig991C, var_core_value_sigF909;
    let {
      arrayFormulaCellData: var_core_value_sigDD0E,
      unitData: var_core_value_sigF2A0
    } = var_core_value_sigA723;
    return {
      arrayFormulaCellDataMatrix: var_core_value_sigDD0E == null || (var_core_value_sig991C = var_core_value_sigDD0E[var_core_value_sig74AF]) == null ? void 0x0 : var_core_value_sig991C[var_core_value_sigBABA],
      unitDataMatrix: var_core_value_sigF2A0 == null || (var_core_value_sigF909 = var_core_value_sigF2A0[var_core_value_sig74AF]) == null ? void 0x0 : var_core_value_sigF909[var_core_value_sigBABA]
    };
  }
  ["getDirtyInfo"](var_core_value_sig116F, var_core_value_sigA64C, var_core_value_sigAF94) {
    let var_core_value_sig1E9F = this[ox5b1fbc(0x480)]["getViewData"](var_core_value_sig116F, var_core_value_sigA64C, var_core_value_sigAF94),
      var_core_value_sig3CC6 = [],
      var_core_value_sig041B = new t["ObjectMatrix"]();
    if (var_core_value_sig1E9F) {
      let {
          rangeCache: var_core_value_sig41AD,
          matrix: var_core_value_sigDBC2,
          oldRangeCache: var_core_value_sig7739,
          oldMatrix: var_core_value_sig4040
        } = var_core_value_sig1E9F,
        var_core_value_sig1AAA = Ce(var_core_value_sig7739),
        var_core_value_sig58DB = Ce(var_core_value_sig41AD);
      var_core_value_sig3CC6["push"](...var_core_value_sig58DB, ...var_core_value_sig1AAA), var_core_value_sig4040 && var_core_value_sig7739 && var_core_value_sig1AAA[ox5b1fbc(0x231)](var_core_value_sig0DB11 => {
        const var_core_value_sig68A2 = ox5b1fbc;
        for (let var_core_value_sig4743 = var_core_value_sig0DB11[var_core_value_sig68A2(0x3f1)]; var_core_value_sig4743 <= var_core_value_sig0DB11[var_core_value_sig68A2(0x150)]; var_core_value_sig4743++) for (let var_core_value_sig34C8 = var_core_value_sig0DB11["startColumn"]; var_core_value_sig34C8 <= var_core_value_sig0DB11[var_core_value_sig68A2(0x2bc)]; var_core_value_sig34C8++) var_core_value_sig041B[var_core_value_sig68A2(0x29e)](var_core_value_sig4743, var_core_value_sig34C8);
      }), var_core_value_sigDBC2 && var_core_value_sig58DB && var_core_value_sig58DB["forEach"](var_core_value_sigCC17 => {
        const var_core_value_sig32AE = ox5b1fbc;
        for (let var_core_value_sigEB6A = var_core_value_sigCC17[var_core_value_sig32AE(0x3f1)]; var_core_value_sigEB6A <= var_core_value_sigCC17[var_core_value_sig32AE(0x150)]; var_core_value_sigEB6A++) for (let var_core_value_sigB744 = var_core_value_sigCC17[var_core_value_sig32AE(0x205)]; var_core_value_sigB744 <= var_core_value_sigCC17[var_core_value_sig32AE(0x2bc)]; var_core_value_sigB744++) var_core_value_sig041B[var_core_value_sig32AE(0x300)](var_core_value_sigEB6A, var_core_value_sigB744, var_core_value_sigDBC2[var_core_value_sig32AE(0x197)](var_core_value_sigEB6A, var_core_value_sigB744));
      });
    }
    let var_core_value_sig3610 = {};
    return var_core_value_sig3610[var_core_value_sig116F] = {
      [var_core_value_sigA64C]: gn(var_core_value_sig3CC6)
    }, {
      runtimeCellData: {
        [var_core_value_sig116F]: {
          [var_core_value_sigA64C]: var_core_value_sig041B
        }
      },
      dirtyRanges: var_core_value_sig3610
    };
  }
  ["dispose"]() {}
};
_n = U([H(0x0, (0x0, t["Inject"])(K)), H(0x1, (0x0, t["Inject"])(n["IFeatureCalculationManagerService"])), H(0x2, (0x0, t["Inject"])(t["ICommandService"])), H(0x3, (0x0, t["Inject"])(n["GlobalComputingStatusService"])), H(0x4, (0x0, t["Inject"])(t["Injector"])), H(0x5, t["IUniverInstanceService"]), H(0x6, t["IConfigService"])], _n);
let vn = class extends t["Disposable"] {
  constructor(var_core_value_sig62F3, var_core_value_sig8063, var_core_value_sig555A, var_core_value_sigF562) {
    super(), this["_univerInstanceService"] = var_core_value_sig62F3, this[ox1ef3ea(0x17f)] = var_core_value_sig8063, this["_sheetsSelectionsService"] = var_core_value_sig555A, this[ox1ef3ea(0x26e)] = var_core_value_sigF562, V(this, ox1ef3ea(0x431), new t["DisposableCollection"]()), this[ox1ef3ea(0x2c1)]();
  }
  ["_initClearSelectionCommandInterceptor"]() {
    this[ox4be744(0x1e7)](this[ox4be744(0x17f)]["interceptCommand"]({
      getMutations: var_core_value_sig4840 => {
        const var_core_value_sigB76D = ox4be744;
        if (var_core_value_sig4840["id"] === r[var_core_value_sigB76D(0x225)]["id"] || var_core_value_sig4840["id"] === r[var_core_value_sigB76D(0x353)]["id"]) {
          let var_core_value_sigC753 = [],
            var_core_value_sigFFD1 = [],
            var_core_value_sig81AE = this["_sheetsSelectionsService"]["getCurrentSelections"]()["map"](var_core_value_sig3D46 => var_core_value_sig3D46[var_core_value_sigB76D(0x26a)]),
            var_core_value_sigF79F = (0x0, r[var_core_value_sigB76D(0x1b5)])(this[var_core_value_sigB76D(0x1ec)], var_core_value_sig4840[var_core_value_sigB76D(0x43b)]);
          if (!var_core_value_sigF79F) return {
            redos: [],
            undos: []
          };
          let {
              unitId: var_core_value_sig0E54,
              subUnitId: var_core_value_sig3B171
            } = var_core_value_sigF79F,
            var_core_value_sig6C4A = {},
            var_core_value_sig73D9 = this[var_core_value_sigB76D(0x26e)][var_core_value_sigB76D(0x477)](var_core_value_sig0E54, var_core_value_sig3B171);
          if (var_core_value_sig73D9 != null && var_core_value_sig73D9[var_core_value_sigB76D(0x189)]) for (let [var_core_value_sigCC93, var_core_value_sig5964] of var_core_value_sig73D9) {
            let {
              unitId: var_core_value_sigEAE2,
              subUnitId: var_core_value_sigE68A,
              row: var_core_value_sig3E68,
              col: var_core_value_sigF4C5
            } = var_core_value_sig5964[var_core_value_sigB76D(0x376)];
            var_core_value_sigEAE2 === var_core_value_sigF79F[var_core_value_sigB76D(0x386)] && var_core_value_sigE68A === var_core_value_sigF79F[var_core_value_sigB76D(0x1bf)] && (var_core_value_sig6C4A[var_core_value_sig3E68 + "-" + var_core_value_sigF4C5] = var_core_value_sigCC93);
          }
          return var_core_value_sig81AE && var_core_value_sigF79F && var_core_value_sig81AE["forEach"](var_core_value_sig808B => {
            const var_core_value_sig2A26 = var_core_value_sigB76D;
            t[var_core_value_sig2A26(0x4aa)][var_core_value_sig2A26(0x166)](var_core_value_sig808B, (var_core_value_sig5410, var_core_value_sig492F) => {
              const var_core_value_sig8EA0 = var_core_value_sig2A26;
              let var_core_value_sigA6F6 = var_core_value_sig5410 + "-" + var_core_value_sig492F;
              if (var_core_value_sig6C4A[var_core_value_sigA6F6]) {
                let var_core_value_sigC259 = var_core_value_sig6C4A[var_core_value_sigA6F6];
                var_core_value_sigC753[var_core_value_sig8EA0(0x19f)]({
                  id: Pt["id"],
                  params: {
                    unitId: var_core_value_sig0E54,
                    subUnitId: var_core_value_sig3B171,
                    pivotTableId: var_core_value_sigC259
                  }
                });
                let var_core_value_sig9C9F = this[var_core_value_sig8EA0(0x26e)][var_core_value_sig8EA0(0x3f3)](var_core_value_sig0E54, var_core_value_sigC259),
                  var_core_value_sigFDEA = this["_sheetsPivotTableConfigModel"]["getPivotTableConfig"](var_core_value_sig0E54, var_core_value_sig3B171, var_core_value_sigC259);
                var_core_value_sigFFD1[var_core_value_sig8EA0(0x19f)]({
                  id: Mt["id"],
                  params: {
                    unitId: var_core_value_sig0E54,
                    subUnitId: var_core_value_sig3B171,
                    pivotTableId: var_core_value_sigC259,
                    pivotTableConfig: var_core_value_sigFDEA,
                    collectionConfig: var_core_value_sig9C9F
                  }
                });
              }
            });
          }), {
            redos: var_core_value_sigC753,
            undos: var_core_value_sigFFD1
          };
        }
        return {
          redos: [],
          undos: []
        };
      }
    }));
  }
};
vn = U([H(0x0, t["IUniverInstanceService"]), H(0x1, (0x0, t["Inject"])(r["SheetInterceptorService"])), H(0x2, (0x0, t["Inject"])(r["SheetsSelectionsService"])), H(0x3, (0x0, t["Inject"])(Y))], vn);
let yn = class extends t["Disposable"] {
  constructor(var_core_value_sig5913, var_core_value_sigA1AF, var_core_value_sig6324, var_core_value_sig7EE4, var_core_value_sigE3D7) {
    super(), this[ox530db1(0x17f)] = var_core_value_sig5913, this[ox530db1(0x483)] = var_core_value_sigA1AF, this["_univerInstanceService"] = var_core_value_sig6324, this[ox530db1(0x26e)] = var_core_value_sig7EE4, this[ox530db1(0x309)] = var_core_value_sigE3D7, this["_initCommandInterceptListener"]();
  }
  ["_getPivotAppliedRanges"](var_core_value_sig54C6, var_core_value_sigE843, var_core_value_sig2EB2) {
    return ke(var_core_value_sig54C6, var_core_value_sigE843, var_core_value_sig2EB2, this[ox24ed7c(0x483)][ox24ed7c(0x345)](t[ox24ed7c(0x1b3)])["getDirection"]());
  }
  ["_initCommandInterceptListener"]() {
    this[ox3a20da(0x1e7)](this[ox3a20da(0x309)][ox3a20da(0x1c0)][ox3a20da(0x260)](this[ox3a20da(0x309)][ox3a20da(0x1c0)][ox3a20da(0x3b1)]()["PIVOT_MUTATION_GENERATE"], {
      handler: (var_core_value_sig1015, var_core_value_sig62231) => {
        const var_core_value_sigC6B6 = ox3a20da;
        let {
            cellInfo: var_core_value_sig498A,
            view: var_core_value_sigEF45,
            isEmpty: var_core_value_sig36FE
          } = var_core_value_sig62231,
          {
            unitId: var_core_value_sig3AF5,
            subUnitId: var_core_value_sig14E6
          } = var_core_value_sig498A,
          var_core_value_sig8690 = this[var_core_value_sigC6B6(0x133)](var_core_value_sig498A, var_core_value_sigEF45, var_core_value_sig36FE),
          var_core_value_sigDF29 = this[var_core_value_sigC6B6(0x17f)][var_core_value_sigC6B6(0x408)]({
            unitId: var_core_value_sig3AF5,
            subUnitId: var_core_value_sig14E6,
            ranges: var_core_value_sig8690
          }),
          var_core_value_sigC0F8 = De(this[var_core_value_sigC6B6(0x483)], var_core_value_sig3AF5, var_core_value_sig14E6, var_core_value_sig8690);
        if (var_core_value_sigC0F8[var_core_value_sigC6B6(0x4a8)] && (var_core_value_sigDF29[var_core_value_sigC6B6(0x214)][var_core_value_sigC6B6(0x19f)](var_core_value_sigC0F8[var_core_value_sigC6B6(0x170)]), var_core_value_sigDF29[var_core_value_sigC6B6(0x49e)][var_core_value_sigC6B6(0x19f)](var_core_value_sigC0F8["setRangeValueUndoMutation"])), !var_core_value_sig36FE) {
          let var_core_value_sigEAF8 = this[var_core_value_sigC6B6(0x180)](var_core_value_sigEF45, var_core_value_sig498A);
          var_core_value_sigDF29["redos"]["push"](...var_core_value_sigEAF8[var_core_value_sigC6B6(0x214)]), var_core_value_sigDF29[var_core_value_sigC6B6(0x49e)]["push"](...var_core_value_sigEAF8[var_core_value_sigC6B6(0x49e)]);
        }
        return {
          redos: var_core_value_sigDF29[var_core_value_sigC6B6(0x214)],
          undos: var_core_value_sigDF29[var_core_value_sigC6B6(0x49e)]
        };
      }
    }));
  }
  ["getAutoFitColumnsMutations"](var_core_value_sig683A, var_core_value_sig109B) {
    var var_core_value_sig6DD0;
    let {
        col: var_core_value_sigB5D3,
        unitId: var_core_value_sig6085,
        subUnitId: var_core_value_sig2507
      } = var_core_value_sig109B,
      var_core_value_sig5870 = [],
      var_core_value_sig827F = [],
      var_core_value_sig2452 = (0x0, r[ox3096e0(0x1b5)])(this[ox3096e0(0x1ec)], {
        unitId: var_core_value_sig6085,
        subUnitId: var_core_value_sig2507
      });
    if (!var_core_value_sig109B || !var_core_value_sig683A || !var_core_value_sig2452) return {
      undos: var_core_value_sig827F,
      redos: var_core_value_sig5870
    };
    let var_core_value_sig50D0 = this["_sheetsPivotTableConfigModel"][ox3096e0(0x46a)](),
      var_core_value_sig5EBB = Array["from"](((var_core_value_sig6DD0 = this[ox3096e0(0x26e)][ox3096e0(0x477)](var_core_value_sig6085, var_core_value_sig2507)) == null ? void 0x0 : var_core_value_sig6DD0[ox3096e0(0x2b9)]()) ?? [])[ox3096e0(0x372)](var_core_value_sig3C75 => var_core_value_sig3C75[ox3096e0(0x376)][ox3096e0(0x292)] === var_core_value_sig109B[ox3096e0(0x292)] && var_core_value_sig3C75["targetCellInfo"][ox3096e0(0x1a4)] === var_core_value_sig109B[ox3096e0(0x1a4)]),
      {
        worksheet: var_core_value_sig5E99
      } = var_core_value_sig2452;
    if (typeof window < "u" && window["document"]) {
      var var_core_value_sig3FB3;
      let var_core_value_sig992D = (0x0, o[ox3096e0(0x146)])({
          ...w[ox3096e0(0x24e)]
        }),
        var_core_value_sigE4E4 = p(var_core_value_sig683A, var_core_value_sigB5D3, this[ox3096e0(0x483)]["get"](t[ox3096e0(0x1b3)])[ox3096e0(0x47c)]()),
        var_core_value_sigA4B0 = var_core_value_sigE4E4[ox3096e0(0x2bc)] - var_core_value_sigE4E4[ox3096e0(0x205)] + 0x1,
        var_core_value_sig5F50 = {},
        var_core_value_sig4494 = Ve(var_core_value_sig683A, var_core_value_sigB5D3, var_core_value_sigE4E4["direction"], var_core_value_sig50D0, var_core_value_sig0455 => o[ox3096e0(0x3fd)][ox3096e0(0x279)](var_core_value_sig0455, var_core_value_sig992D)[ox3096e0(0x369)], var_core_value_sig5EBB == null ? void 0x0 : var_core_value_sig5EBB[ox3096e0(0x2a9)][ox3096e0(0x185)], (var_core_value_sig3FB3 = this[ox3096e0(0x1ec)][ox3096e0(0x2a4)](var_core_value_sig6085)) == null ? void 0x0 : var_core_value_sig3FB3[ox3096e0(0x475)]());
      Object[ox3096e0(0x2a8)](var_core_value_sig4494)[ox3096e0(0x231)](var_core_value_sig737C => {
        const var_core_value_sig5AF5 = ox3096e0;
        let var_core_value_sig9DE4 = Number(var_core_value_sig737C),
          var_core_value_sig77FA = var_core_value_sig5E99[var_core_value_sig5AF5(0x405)](var_core_value_sig9DE4);
        var_core_value_sig5F50[var_core_value_sig9DE4] = var_core_value_sig77FA;
      }), var_core_value_sig5870[ox3096e0(0x19f)]({
        id: r[ox3096e0(0x3d7)]["id"],
        params: {
          subUnitId: var_core_value_sig2507,
          unitId: var_core_value_sig6085,
          ranges: [{
            startColumn: var_core_value_sigB5D3,
            endColumn: var_core_value_sigB5D3 + var_core_value_sigA4B0 - 0x1,
            startRow: 0x0,
            endRow: var_core_value_sig5E99[ox3096e0(0x172)]() - 0x1
          }],
          colWidth: var_core_value_sig4494
        }
      }), var_core_value_sig827F["push"]({
        id: r[ox3096e0(0x3d7)]["id"],
        params: {
          subUnitId: var_core_value_sig2507,
          unitId: var_core_value_sig6085,
          ranges: [{
            startColumn: var_core_value_sigB5D3,
            endColumn: var_core_value_sigB5D3 + var_core_value_sigA4B0 - 0x1,
            startRow: 0x0,
            endRow: var_core_value_sig5E99["getRowCount"]() - 0x1
          }],
          colWidth: var_core_value_sig5F50
        }
      });
    }
    return {
      undos: var_core_value_sig827F,
      redos: var_core_value_sig5870
    };
  }
};
yn = U([H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])), H(0x1, (0x0, t["Inject"])(t["Injector"])), H(0x2, (0x0, t["Inject"])(t["IUniverInstanceService"])), H(0x3, (0x0, t["Inject"])(Y)), H(0x4, (0x0, t["Inject"])(Z))], yn);
let bn = class extends t["Disposable"] {
  constructor(var_core_value_sig0214, var_core_value_sig5153, var_core_value_sigF323, var_core_value_sig0C32, var_core_value_sig1D89, var_core_value_sig2616, var_core_value_sig97EF) {
    super(), this[ox40d306(0x483)] = var_core_value_sig0214, this[ox40d306(0x3f4)] = var_core_value_sig5153, this[ox40d306(0x1db)] = var_core_value_sigF323, this[ox40d306(0x1ec)] = var_core_value_sig0C32, this["_sheetsPivotTableConfigModel"] = var_core_value_sig1D89, this[ox40d306(0x307)] = var_core_value_sig2616, this[ox40d306(0x17f)] = var_core_value_sig97EF, V(this, ox40d306(0x431), new t["DisposableCollection"]()), this[ox40d306(0x308)]();
  }
  ["_onRefRangeChange"]() {
    let var_core_value_sigA0C0 = (var_core_value_sigFFAF, var_core_value_sig478B) => {
        let var_core_value_sig1E21 = this[ox419586(0x1ec)][ox419586(0x4a0)](t["UniverInstanceType"][ox419586(0x333)]);
        if (!var_core_value_sig1E21 || !(var_core_value_sig1E21 != null && var_core_value_sig1E21[ox419586(0x16b)](var_core_value_sig478B))) return;
        this["disposableCollection"]["dispose"]();
        let var_core_value_sig9DBF = var_core_value_sigA4A7 => this[ox419586(0x395)](var_core_value_sigA4A7, var_core_value_sigFFAF, var_core_value_sig478B),
          var_core_value_sig36CC = this[ox419586(0x26e)][ox419586(0x477)](var_core_value_sigFFAF, var_core_value_sig478B);
        var_core_value_sig36CC != null && var_core_value_sig36CC[ox419586(0x189)] && Array[ox419586(0x144)](var_core_value_sig36CC["values"]())[ox419586(0x15f)](var_core_value_sigA4DF => {
          const var_core_value_sigCC9D = ox419586;
          let {
            row: var_core_value_sig90F5,
            col: var_core_value_sigD2BA
          } = var_core_value_sigA4DF["targetCellInfo"];
          return (0x0, t[var_core_value_sigCC9D(0x29c)])(var_core_value_sig90F5, var_core_value_sigD2BA);
        })[ox419586(0x231)](var_core_value_sigCD3A => {
          const var_core_value_sig519D = ox419586;
          this["disposableCollection"][var_core_value_sig519D(0x3db)](this[var_core_value_sig519D(0x3f4)]["registerRefRange"](var_core_value_sigCD3A, var_core_value_sig9DBF, var_core_value_sigFFAF, var_core_value_sig478B));
        });
      },
      var_core_value_sigAD4B = () => {
        let var_core_value_sigA568 = this[ox155eaa(0x1ec)][ox155eaa(0x4a0)](t[ox155eaa(0x2b3)][ox155eaa(0x333)]);
        if (var_core_value_sigA568) {
          let var_core_value_sigC7E7 = var_core_value_sigA568["getActiveSheet"]();
          if (!var_core_value_sigC7E7) return;
          var_core_value_sigA0C0(var_core_value_sigA568[ox155eaa(0x261)](), var_core_value_sigC7E7[ox155eaa(0x325)]());
        }
      };
    this[ox2fbc95(0x1e7)](this[ox2fbc95(0x1db)]["onCommandExecuted"](var_core_value_sigD22D => {
      const var_core_value_sig85D5 = ox2fbc95;
      if (var_core_value_sigD22D["id"] === r[var_core_value_sig85D5(0x479)]["id"]) {
        let var_core_value_sig6E1C = var_core_value_sigD22D[var_core_value_sig85D5(0x43b)],
          var_core_value_sigFABC = var_core_value_sig6E1C[var_core_value_sig85D5(0x1bf)],
          var_core_value_sig413D = var_core_value_sig6E1C[var_core_value_sig85D5(0x386)];
        if (!var_core_value_sigFABC || !var_core_value_sig413D) return;
        var_core_value_sigA0C0(var_core_value_sig413D, var_core_value_sigFABC);
      }
    })), this[ox2fbc95(0x1e7)](this[ox2fbc95(0x26e)][ox2fbc95(0x363)][ox2fbc95(0x131)](var_core_value_sig5D2E => {
      var_core_value_sig5D2E && var_core_value_sigAD4B();
    })), this["disposeWithMe"](this["_sheetsPivotTableConfigModel"][ox2fbc95(0x331)][ox2fbc95(0x131)](var_core_value_sig7221 => {
      const var_core_value_sig0A5A = ox2fbc95;
      let var_core_value_sigE6D6 = (0x0, r[var_core_value_sig0A5A(0x1b5)])(this[var_core_value_sig0A5A(0x1ec)], {
        unitId: var_core_value_sig7221[var_core_value_sig0A5A(0x386)],
        subUnitId: var_core_value_sig7221["subUnitId"]
      });
      if (!var_core_value_sigE6D6) return;
      let {
          unitId: var_core_value_sig8507,
          subUnitId: var_core_value_sig8A7F
        } = var_core_value_sigE6D6,
        {
          unitId: var_core_value_sig9E81,
          subUnitId: var_core_value_sig8295
        } = var_core_value_sig7221;
      var_core_value_sig8507 === var_core_value_sig9E81 && var_core_value_sig8A7F === var_core_value_sig8295 && var_core_value_sigA0C0(var_core_value_sig8507, var_core_value_sig8A7F);
    })), var_core_value_sigAD4B();
  }
  ["_refRangeHandle"](var_core_value_sig06EA, var_core_value_sigF3C7, var_core_value_sig5633) {
    switch (var_core_value_sig06EA["id"]) {
      case r[ox28f874(0x1cd)]["id"]:
        return this[ox28f874(0x3c5)](var_core_value_sig06EA[ox28f874(0x43b)], var_core_value_sigF3C7, var_core_value_sig5633);
      default:
        break;
    }
    return {
      redos: [],
      undos: []
    };
  }
  ["getRefRangeMutationsByMoveRange"](var_core_value_sig2492, var_core_value_sig39F2, var_core_value_sigAD47) {
    let {
        fromRange: var_core_value_sig1722,
        toRange: var_core_value_sig7F86
      } = var_core_value_sig2492,
      var_core_value_sigF69D = [],
      var_core_value_sig7CB9 = [],
      var_core_value_sigC1D8 = (0x0, r["getSheetCommandTarget"])(this[ox1c5c6e(0x1ec)]);
    if (!var_core_value_sigC1D8 || var_core_value_sig39F2 !== var_core_value_sigC1D8[ox1c5c6e(0x386)] || var_core_value_sigAD47 !== var_core_value_sigC1D8[ox1c5c6e(0x1bf)]) return {
      undos: var_core_value_sig7CB9,
      redos: var_core_value_sigF69D
    };
    let var_core_value_sigCF8B = this["_sheetsPivotTableConfigModel"][ox1c5c6e(0x477)](var_core_value_sig39F2, var_core_value_sigAD47);
    if (var_core_value_sigCF8B != null && var_core_value_sigCF8B["size"]) for (let [var_core_value_sigA975, var_core_value_sig1263] of var_core_value_sigCF8B) {
      let {
        unitId: var_core_value_sig5BCE,
        subUnitId: var_core_value_sig8EF01,
        row: var_core_value_sig78AC,
        col: var_core_value_sig4CEF
      } = var_core_value_sig1263["targetCellInfo"];
      if (var_core_value_sig5BCE === var_core_value_sigC1D8[ox1c5c6e(0x386)] && var_core_value_sig8EF01 === var_core_value_sigC1D8[ox1c5c6e(0x1bf)]) {
        let var_core_value_sig1179 = (0x0, t[ox1c5c6e(0x29c)])(var_core_value_sig78AC, var_core_value_sig4CEF);
        if (t["Rectangle"][ox1c5c6e(0x1a3)](var_core_value_sig1179, var_core_value_sig1722)) {
          let var_core_value_sigCDDA = var_core_value_sig78AC - var_core_value_sig1722["startRow"],
            var_core_value_sigE243 = var_core_value_sig4CEF - var_core_value_sig1722[ox1c5c6e(0x205)],
            var_core_value_sig74A81 = {
              row: var_core_value_sig7F86[ox1c5c6e(0x3f1)] + var_core_value_sigCDDA,
              col: var_core_value_sig7F86["startColumn"] + var_core_value_sigE243
            };
          var_core_value_sigF69D[ox1c5c6e(0x19f)]({
            id: Ut["id"],
            params: {
              unitId: var_core_value_sig5BCE,
              subUnitId: var_core_value_sig8EF01,
              pivotTableId: var_core_value_sigA975,
              targetCellPosition: var_core_value_sig74A81
            }
          }), var_core_value_sig7CB9[ox1c5c6e(0x19f)]({
            id: Ut["id"],
            params: {
              unitId: var_core_value_sig5BCE,
              subUnitId: var_core_value_sig8EF01,
              pivotTableId: var_core_value_sigA975,
              targetCellPosition: {
                row: var_core_value_sig78AC,
                col: var_core_value_sig4CEF
              }
            }
          });
          let var_core_value_sig21B2 = var_core_value_sig74A81[ox1c5c6e(0x292)] - var_core_value_sig78AC,
            var_core_value_sigDE08 = var_core_value_sig74A81[ox1c5c6e(0x1a4)] - var_core_value_sig4CEF,
            var_core_value_sigACCB = [],
            var_core_value_sig7F33 = this[ox1c5c6e(0x307)][ox1c5c6e(0x233)](var_core_value_sig5BCE, var_core_value_sig8EF01, var_core_value_sigA975),
            var_core_value_sig0C53 = var_core_value_sig7F33 == null ? void 0x0 : var_core_value_sig7F33["rangesInfo"];
          if (var_core_value_sig0C53) {
            Object[ox1c5c6e(0x2a8)](var_core_value_sig0C53)[ox1c5c6e(0x231)](var_core_value_sigE9ED => {
              var_core_value_sig0C53[var_core_value_sigE9ED]["forEach"](var_core_value_sig1BBD => {
                let var_core_value_sigF704 = {
                  ...var_core_value_sig1BBD
                };
                var_core_value_sigF704["startRow"] = var_core_value_sig1BBD["startRow"] + var_core_value_sig21B2, var_core_value_sigF704[ox27cb4b(0x150)] = var_core_value_sig1BBD[ox27cb4b(0x150)] + var_core_value_sig21B2, var_core_value_sigF704["startColumn"] = var_core_value_sig1BBD[ox27cb4b(0x205)] + var_core_value_sigDE08, var_core_value_sigF704[ox27cb4b(0x2bc)] = var_core_value_sig1BBD[ox27cb4b(0x2bc)] + var_core_value_sigDE08, var_core_value_sigACCB["push"](var_core_value_sigF704);
              });
            });
            let var_core_value_sig86D0 = this[ox1c5c6e(0x17f)][ox1c5c6e(0x408)]({
              unitId: var_core_value_sig5BCE,
              subUnitId: var_core_value_sig8EF01,
              ranges: var_core_value_sigACCB
            });
            var_core_value_sigF69D[ox1c5c6e(0x19f)](...var_core_value_sig86D0[ox1c5c6e(0x214)]), var_core_value_sig7CB9["push"](...var_core_value_sig86D0[ox1c5c6e(0x49e)]);
            let var_core_value_sig4CD2 = De(this["_injector"], var_core_value_sig5BCE, var_core_value_sig8EF01, var_core_value_sigACCB);
            var_core_value_sig4CD2[ox1c5c6e(0x4a8)] && (var_core_value_sigF69D[ox1c5c6e(0x19f)](var_core_value_sig4CD2[ox1c5c6e(0x170)]), var_core_value_sig7CB9[ox1c5c6e(0x19f)](var_core_value_sig4CD2[ox1c5c6e(0x14c)]));
          }
        }
      }
    }
    return {
      redos: var_core_value_sigF69D,
      undos: var_core_value_sig7CB9
    };
  }
};
bn = U([H(0x0, (0x0, t["Inject"])(t["Injector"])), H(0x1, (0x0, t["Inject"])(r["RefRangeService"])), H(0x2, t["ICommandService"]), H(0x3, t["IUniverInstanceService"]), H(0x4, (0x0, t["Inject"])(Y)), H(0x5, (0x0, t["Inject"])(X)), H(0x6, (0x0, t["Inject"])(r["SheetInterceptorService"]))], bn);
let xn = class extends t["Disposable"] {
  constructor(var_core_value_sigCD15, var_core_value_sig524D) {
    super(), this["_sheetInterceptorService"] = var_core_value_sigCD15, this[ox4546cc(0x26e)] = var_core_value_sig524D, this[ox4546cc(0x2f3)]();
  }
  ["_initRemoveSheetCommandInterceptor"]() {
    this[ox5e5d1a(0x1e7)](this[ox5e5d1a(0x17f)][ox5e5d1a(0x399)]({
      getMutations: var_core_value_sig457C => {
        const var_core_value_sigA4E6 = ox5e5d1a;
        if (var_core_value_sig457C["id"] === r["RemoveSheetCommand"]["id"]) {
          let var_core_value_sigD57D = [],
            var_core_value_sig2CC7 = [],
            {
              unitId: var_core_value_sig4784,
              subUnitId: var_core_value_sigC39E
            } = var_core_value_sig457C[var_core_value_sigA4E6(0x43b)];
          if (!var_core_value_sig4784 || !var_core_value_sigC39E) return {
            undos: var_core_value_sig2CC7,
            redos: var_core_value_sigD57D
          };
          let var_core_value_sig16C7 = this[var_core_value_sigA4E6(0x26e)][var_core_value_sigA4E6(0x477)](var_core_value_sig4784, var_core_value_sigC39E);
          if (var_core_value_sig16C7 != null && var_core_value_sig16C7[var_core_value_sigA4E6(0x189)]) for (let [var_core_value_sigEA92, var_core_value_sig8FD9] of var_core_value_sig16C7) {
            var_core_value_sigD57D[var_core_value_sigA4E6(0x19f)]({
              id: Pt["id"],
              params: {
                unitId: var_core_value_sig4784,
                subUnitId: var_core_value_sigC39E,
                pivotTableId: var_core_value_sigEA92
              }
            });
            let var_core_value_sigEA04 = {
              ...this[var_core_value_sigA4E6(0x26e)][var_core_value_sigA4E6(0x3f3)](var_core_value_sig4784, var_core_value_sigEA92)
            };
            var_core_value_sig2CC7[var_core_value_sigA4E6(0x19f)]({
              id: Mt["id"],
              params: {
                unitId: var_core_value_sig4784,
                subUnitId: var_core_value_sigC39E,
                pivotTableId: var_core_value_sigEA92,
                pivotTableConfig: var_core_value_sig8FD9,
                collectionConfig: var_core_value_sigEA04
              }
            });
          }
          return {
            redos: var_core_value_sigD57D,
            undos: var_core_value_sig2CC7
          };
        }
        return {
          redos: [],
          undos: []
        };
      }
    }));
  }
};
xn = U([H(0x0, (0x0, t["Inject"])(r["SheetInterceptorService"])), H(0x1, (0x0, t["Inject"])(Y))], xn);
let Sn = class extends t["Disposable"] {
  constructor(var_core_value_sigD7F4, var_core_value_sig7B87, var_core_value_sig933D, var_core_value_sig6ACE, var_core_value_sig7675) {
    super(), this[ox44ab7f(0x1db)] = var_core_value_sigD7F4, this["_sheetsPivotRpcService"] = var_core_value_sig7B87, this[ox44ab7f(0x307)] = var_core_value_sig933D, this[ox44ab7f(0x26e)] = var_core_value_sig6ACE, this[ox44ab7f(0x203)] = var_core_value_sig7675, this[ox44ab7f(0x394)](), this[ox44ab7f(0x2bf)]();
  }
  ["_initDataSendListener"]() {
    this[ox58f1bb(0x1e7)](this[ox58f1bb(0x1db)][ox58f1bb(0x484)](var_core_value_sig934F => {
      const var_core_value_sig74A7 = ox58f1bb;
      if (var_core_value_sig934F["id"] !== ie["id"]) return;
      let var_core_value_sig3685 = var_core_value_sig934F[var_core_value_sig74A7(0x43b)];
      this[var_core_value_sig74A7(0x337)][var_core_value_sig74A7(0x187)](var_core_value_sig3685);
    })), this[ox58f1bb(0x1e7)](this[ox58f1bb(0x1db)]["onCommandExecuted"](var_core_value_sigC621 => {
      const var_core_value_sig86D7 = ox58f1bb;
      if (var_core_value_sigC621["id"] === B["id"]) {
        let var_core_value_sig7481 = var_core_value_sigC621[var_core_value_sig86D7(0x43b)];
        if (var_core_value_sig7481) {
          let {
            unitId: var_core_value_sig1AE5,
            subUnitId: var_core_value_sig7100,
            oldSubUnitId: var_core_value_sigA19A,
            pivotTableId: var_core_value_sigD3F5,
            pivotTableConfig: var_core_value_sig3082,
            collectionConfig: var_core_value_sigF5D1
          } = var_core_value_sig7481;
          this["_sheetsPivotTableConfigModel"]["updateConfigCache"](var_core_value_sig1AE5, var_core_value_sigA19A, var_core_value_sig7481[var_core_value_sig86D7(0x4a4)], null), this[var_core_value_sig86D7(0x26e)]["updateConfigCache"](var_core_value_sig1AE5, var_core_value_sig7100, var_core_value_sigD3F5, var_core_value_sig3082), this[var_core_value_sig86D7(0x26e)][var_core_value_sig86D7(0x1ef)](var_core_value_sig1AE5, var_core_value_sigF5D1);
        }
      }
    })), this[ox58f1bb(0x1e7)](this[ox58f1bb(0x1db)]["onCommandExecuted"](var_core_value_sig431B1 => {
      const var_core_value_sig5C7C = ox58f1bb;
      if (var_core_value_sig431B1["id"] !== z["id"]) return;
      let var_core_value_sig87E2 = var_core_value_sig431B1["params"];
      if (var_core_value_sig87E2[var_core_value_sig5C7C(0x2d2)] && Object[var_core_value_sig5C7C(0x2a8)](var_core_value_sig87E2[var_core_value_sig5C7C(0x2d2)])["forEach"](var_core_value_sig08A3 => {
        const var_core_value_sig77D8 = var_core_value_sig5C7C;
        var var_core_value_sig78A3;
        (var_core_value_sig78A3 = var_core_value_sig87E2[var_core_value_sig77D8(0x2d2)]) != null && var_core_value_sig78A3[var_core_value_sig08A3] && this["_sheetsPivotTableConfigModel"]["updateCollectionConfig"](var_core_value_sig08A3, var_core_value_sig87E2["collectionConfig"][var_core_value_sig08A3]);
      }), var_core_value_sig87E2[var_core_value_sig5C7C(0x38f)]) {
        let {
          unitId: var_core_value_sig649B,
          subUnitId: var_core_value_sig6256,
          view: var_core_value_sigE7A6,
          pivotTableId: var_core_value_sigB505,
          type: var_core_value_sig7428,
          pivotConfig: var_core_value_sig1DCE
        } = var_core_value_sig87E2[var_core_value_sig5C7C(0x38f)];
        if (var_core_value_sig7428 === var_core_value_sig5C7C(0x216)) this[var_core_value_sig5C7C(0x307)][var_core_value_sig5C7C(0x3b2)]({
          unitId: var_core_value_sig649B,
          subUnitId: var_core_value_sig6256,
          pivotTableId: var_core_value_sigB505,
          type: var_core_value_sig7428
        }), this[var_core_value_sig5C7C(0x26e)][var_core_value_sig5C7C(0x4ae)](var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigB505, null);else {
          let var_core_value_sig8775 = new e[var_core_value_sig5C7C(0x18a)]();
          var_core_value_sig8775[var_core_value_sig5C7C(0x3cb)](var_core_value_sigE7A6), this["_sheetsPivotTableConfigModel"][var_core_value_sig5C7C(0x4ae)](var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigB505, var_core_value_sig1DCE), this[var_core_value_sig5C7C(0x307)]["clearRenderCache"]({
            unitId: var_core_value_sig649B,
            subUnitId: var_core_value_sig6256,
            pivotTableId: var_core_value_sigB505,
            type: var_core_value_sig7428,
            view: var_core_value_sig8775
          }), this[var_core_value_sig5C7C(0x307)]["updateRenderCache"]({
            unitId: var_core_value_sig649B,
            subUnitId: var_core_value_sig6256,
            view: var_core_value_sig8775,
            pivotTableId: var_core_value_sigB505,
            type: var_core_value_sig7428
          });
        }
        this[var_core_value_sig5C7C(0x307)][var_core_value_sig5C7C(0x2eb)](var_core_value_sig649B, var_core_value_sig6256);
      } else {
        if (var_core_value_sig87E2[var_core_value_sig5C7C(0x27d)]) {
          let var_core_value_sig481B = var_core_value_sig87E2[var_core_value_sig5C7C(0x27d)],
            var_core_value_sig13D7 = new Map();
          var_core_value_sig481B[var_core_value_sig5C7C(0x231)](var_core_value_sig7A62 => {
            const var_core_value_sig8109 = var_core_value_sig5C7C;
            let {
                unitId: var_core_value_sig7565,
                subUnitId: var_core_value_sigD4FB,
                view: var_core_value_sig3E71,
                pivotTableId: var_core_value_sig01B3,
                type: var_core_value_sig7442,
                pivotConfig: var_core_value_sigDF87
              } = var_core_value_sig7A62,
              var_core_value_sig9EE0 = new e[var_core_value_sig8109(0x18a)]();
            var_core_value_sig9EE0["formJSON"](var_core_value_sig3E71), this[var_core_value_sig8109(0x26e)][var_core_value_sig8109(0x4ae)](var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig01B3, var_core_value_sigDF87), this[var_core_value_sig8109(0x307)]["updateRenderCache"]({
              unitId: var_core_value_sig7565,
              subUnitId: var_core_value_sigD4FB,
              view: var_core_value_sig9EE0,
              pivotTableId: var_core_value_sig01B3,
              type: var_core_value_sig7442
            });
            let var_core_value_sigF0511 = var_core_value_sig13D7[var_core_value_sig8109(0x345)](var_core_value_sig7565) ?? new Set();
            var_core_value_sigF0511[var_core_value_sig8109(0x3db)](var_core_value_sigD4FB), var_core_value_sig13D7["set"](var_core_value_sig7565, var_core_value_sigF0511);
          }), var_core_value_sig13D7["forEach"]((var_core_value_sig0B45, var_core_value_sig36F8) => var_core_value_sig0B45[var_core_value_sig5C7C(0x231)](var_core_value_sig48CA => {
            const var_core_value_sig50AF = var_core_value_sig5C7C;
            this[var_core_value_sig50AF(0x307)]["markDirty"](var_core_value_sig36F8, var_core_value_sig48CA);
          })), this["_sheetsPivotTableConfigModel"]["setPivotInitCompleted"]();
        }
      }
    }));
  }
  ["registerDirtyService"]() {
    this["_activeDirtyManagerService"][ox5855d2(0x2b2)](fn["id"], {
      commandId: fn["id"],
      getDirtyData(var_core_value_sig2E04) {
        const var_core_value_sig2EDD = ox5855d2;
        return {
          dirtyUnitFeatureMap: var_core_value_sig2E04[var_core_value_sig2EDD(0x43b)]
        };
      }
    });
  }
};
Sn = U([H(0x0, (0x0, t["Inject"])(t["ICommandService"])), H(0x1, (0x0, t["Inject"])(W)), H(0x2, (0x0, t["Inject"])(X)), H(0x3, (0x0, t["Inject"])(Y)), H(0x4, n["IActiveDirtyManagerService"])], Sn);
let Cn = class extends t["Plugin"] {
  constructor(var_core_value_sig21B8 = Je, var_core_value_sigD545, var_core_value_sig91C9, var_core_value_sig64BA1, var_core_value_sig3FD5) {
    super(), this[ox5e4c7b(0x352)] = var_core_value_sig21B8, this[ox5e4c7b(0x483)] = var_core_value_sigD545, this[ox5e4c7b(0x1db)] = var_core_value_sig91C9, this[ox5e4c7b(0x259)] = var_core_value_sig64BA1, this[ox5e4c7b(0x315)] = var_core_value_sig3FD5;
    let {
      ...var_core_value_sig1008
    } = (0x0, t[ox5e4c7b(0x2ac)])({}, Je, this[ox5e4c7b(0x352)]);
    this[ox5e4c7b(0x259)][ox5e4c7b(0x378)](qe, var_core_value_sig1008), this[ox5e4c7b(0x341)](), this["_initConfig"](var_core_value_sig1008);
  }
  ["_initConfig"](var_core_value_sigB9F4) {
    var var_core_value_sig2D23;
    let var_core_value_sigF2E0 = (var_core_value_sig2D23 = this[ox32dd69(0x352)]) == null ? void 0x0 : var_core_value_sig2D23[ox32dd69(0x2ef)];
    this[ox32dd69(0x259)][ox32dd69(0x378)](ox32dd69(0x285), var_core_value_sigF2E0 === !0x0), var_core_value_sigB9F4["maxLimitItemCount"] !== void 0x0 && (0x0, e[ox32dd69(0x14e)])(var_core_value_sigB9F4[ox32dd69(0x2c4)]), var_core_value_sigB9F4[ox32dd69(0x427)] !== void 0x0 && (0x0, e["setDateSystem"])(var_core_value_sigB9F4[ox32dd69(0x427)]);
  }
  ["onStarting"]() {
    var var_core_value_sig9214;
    let var_core_value_sigC8B1 = [],
      var_core_value_sig35E2 = (var_core_value_sig9214 = this[oxded3a8(0x352)]) == null ? void 0x0 : var_core_value_sig9214[oxded3a8(0x2ef)];
    var_core_value_sig35E2 === !0x0 ? var_core_value_sigC8B1 = [[Z], [W], [Sn], [X], [Y], [xn], [vn], [bn], [yn]] : var_core_value_sig35E2 === !0x1 ? var_core_value_sigC8B1 = [[K], [_n]] : var_core_value_sig35E2 === void 0x0 && (var_core_value_sigC8B1 = [[K], [_n], [Z], [W], [Sn], [X], [Y], [xn], [vn], [bn], [yn]]), var_core_value_sigC8B1["forEach"](var_core_value_sig27D2 => this[oxded3a8(0x483)][oxded3a8(0x3db)](var_core_value_sig27D2)), [_n, Sn, Z, vn, xn, bn, yn]["forEach"](var_core_value_sig355D => {
      const var_core_value_sig8B21 = oxded3a8;
      this[var_core_value_sig8B21(0x483)][var_core_value_sig8B21(0x442)](var_core_value_sig355D) && this[var_core_value_sig8B21(0x483)]["get"](var_core_value_sig355D);
    });
  }
  ["_initRegisterCommand"]() {
    [Nt, Ft, At, Ht, Kt, qt, cn, Zt, dn, Yt, nn, $t, an, sn, Wt, Gt, Mt, Xt, Pt, ht, Xe, Ze, bt, gt, _t, vt, wt, Ct, xt, St, Ut, re, ie, z, Dt, kt, Tt, yt, ae, on, Ot, fn, B, rn, Et, Qt, Jt, en, tn][ox1d2118(0x231)](var_core_value_sigEB36 => {
      const var_core_value_sig5C27 = ox1d2118;
      var var_core_value_sigD494;
      (var_core_value_sigD494 = this[var_core_value_sig5C27(0x315)]) == null || var_core_value_sigD494[var_core_value_sig5C27(0x2d3)](var_core_value_sigEB36), this[var_core_value_sig5C27(0x1db)][var_core_value_sig5C27(0x3e2)](var_core_value_sigEB36);
    });
  }
};
V(Cn, "pluginName", _), V(Cn, "packageName", ln), V(Cn, "version", un), V(Cn, "type", t["UniverInstanceType"]["UNIVER_SHEET"]), Cn = U([(0x0, t["DependentOn"])(a["UniverLicensePlugin"], n["UniverFormulaEnginePlugin"], r["UniverSheetsPlugin"]), H(0x1, (0x0, t["Inject"])(t["Injector"])), H(0x2, (0x0, t["Inject"])(t["ICommandService"])), H(0x3, t["IConfigService"]), H(0x4, (0x0, t["Optional"])(c["DataSyncPrimaryController"]))], Cn), exports["AddPivotFieldCommand"] = At, exports["AddPivotFieldMutation"] = ht, exports["AddPivotTableCommand"] = Ft, exports["AddPivotTableMutation"] = Mt, exports["AddPivotTableWithConfigCommand"] = Nt, exports["BLANK_ROW_COUNT"] = 0x1, exports["MovePivotFieldCommand"] = Ht, exports["MovePivotTableCommand"] = Wt, exports["PIVOT_DATE_GROUP_TYPES"] = It, exports["PivotDisplayDataType"] = ee, exports["PivotDrillDownCommand"] = Gt, exports["PositionType"] = y, exports["RemovePivotFieldCommand"] = Kt, exports["RemovePivotFieldMutation"] = gt, exports["RemovePivotTableCommand"] = qt, exports["RemovePivotTableMutation"] = Pt, exports["RenamePivotFieldMutation"] = _t, exports["ResetPivotFieldsConfigCommand"] = Jt, exports["SHEETS_PIVOT_PLUGIN_CONFIG_KEY"] = qe, exports["SHEET_PIVOT_TABLE_PLUGIN"] = _, exports["SetPivotCollapseCommand"] = Yt, exports["SetPivotCollapseMutation"] = vt, exports["SetPivotDateGroupCommand"] = Zt, exports["SetPivotFieldFormatMutation"] = yt, exports["SetPivotFieldsConfigCommand"] = Qt, exports["SetPivotFilterCommand"] = $t, exports["SetPivotFilterMutation"] = bt, exports["SetPivotLayoutCommand"] = en, exports["SetPivotOptionCommand"] = tn, exports["SetPivotOptionMutation"] = St, exports["SetPivotPositionMutation"] = Ut, exports["SetPivotSortCommand"] = nn, exports["SetPivotSortMutation"] = wt, exports["SetPivotSubtotalTypeMutation"] = Tt, exports["SetPivotValueFilterCommand"] = rn, exports["SetPivotValueFilterMutation"] = Et, Object["defineProperty"](exports, "SheetsPivotRPCService", {
  enumerable: !0x0,
  get: function () {
    return W;
  }
}), Object["defineProperty"](exports, "SheetsPivotTableAdaptorModel", {
  enumerable: !0x0,
  get: function () {
    return X;
  }
}), Object["defineProperty"](exports, "SheetsPivotTableConfigModel", {
  enumerable: !0x0,
  get: function () {
    return Y;
  }
}), Object["defineProperty"](exports, "SheetsPivotTableService", {
  enumerable: !0x0,
  get: function () {
    return Z;
  }
}), Object["defineProperty"](exports, "UniverSheetsPivotTablePlugin", {
  enumerable: !0x0,
  get: function () {
    return Cn;
  }
}), exports["UpdateFieldPositionMutation"] = Dt, exports["UpdatePivotFieldSettingCommand"] = an, exports["UpdatePivotFieldSourceInfoMutation"] = Ot, exports["UpdatePivotTableSourceRangeCommand"] = sn, exports["UpdatePivotTableSourceRangeMutation"] = on, exports["UpdatePivotValuePositionCommand"] = cn, exports["UpdateValuePositionMutation"] = kt, exports["generateSetRangeValueMutations"] = De, exports["getAdjustRangesPosition"] = F, exports["getEmptyPivotRanges"] = Oe, exports["getPivotAppliedRanges"] = ke, exports["getPivotDateGroupContext"] = Lt, exports["isPivotDateGroupTypeDisabled"] = Rt, exports["isolateTextForBidiContext"] = f, exports["mapPivotSheetColumn"] = m, exports["mapPivotSheetRange"] = h, exports["resolvePivotSheetCell"] = ve, exports["resolvePivotValueFieldId"] = ye, exports["resolvePivotValueFilterTarget"] = be, exports["unionPivotViewRange"] = Ce;
