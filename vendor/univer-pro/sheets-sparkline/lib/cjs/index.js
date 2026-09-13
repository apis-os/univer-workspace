Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs/sheets"),
  n = require("rxjs"),
  r = require("@univerjs-pro/license");
function i(var_core_value_sig0B5C, var_core_value_sig7D42) {
  let var_core_value_sig8FDE = new e["ObjectMatrix"](),
    var_core_value_sig78E6 = [],
    var_core_value_sig541F = var_core_value_sig0B5C["length"] > 0x1,
    var_core_value_sig417B = 0x0,
    var_core_value_sigAA90 = 0x0;
  for (let var_core_value_sigD5A0 of var_core_value_sig0B5C) var_core_value_sig417B += var_core_value_sigD5A0["endRow"] - var_core_value_sigD5A0["startRow"] + 0x1, var_core_value_sigAA90 += var_core_value_sigD5A0["endColumn"] - var_core_value_sigD5A0["startColumn"] + 0x1;
  for (let var_core_value_sig81B2 of var_core_value_sig7D42) for (let var_core_value_sigB683 = var_core_value_sig81B2["startRow"]; var_core_value_sigB683 <= var_core_value_sig81B2["endRow"]; var_core_value_sigB683++) for (let var_core_value_sigBBEE = var_core_value_sig81B2["startColumn"]; var_core_value_sigBBEE <= var_core_value_sig81B2["endColumn"]; var_core_value_sigBBEE++) var_core_value_sig78E6["push"]({
    row: var_core_value_sigB683,
    column: var_core_value_sigBBEE
  });
  if (var_core_value_sig78E6["length"] === var_core_value_sig417B) var_core_value_sig541F ? var_core_value_sig78E6["forEach"]((var_core_value_sigA0A5, var_core_value_sig10AA) => {
    let var_core_value_sigE6D0 = var_core_value_sig0B5C[var_core_value_sig10AA],
      var_core_value_sig8E91 = {
        startRow: var_core_value_sigE6D0["startRow"],
        startColumn: var_core_value_sigE6D0["startColumn"],
        endRow: var_core_value_sigE6D0["startRow"],
        endColumn: var_core_value_sigE6D0["endColumn"]
      };
    var_core_value_sig8FDE["setValue"](var_core_value_sigA0A5["row"], var_core_value_sigA0A5["column"], var_core_value_sig8E91);
  }) : var_core_value_sig78E6["forEach"]((var_core_value_sig00BE, var_core_value_sig7BB5) => {
    let var_core_value_sig6AAD = var_core_value_sig0B5C[0x0],
      var_core_value_sig1157 = {
        startRow: var_core_value_sig6AAD["startRow"] + var_core_value_sig7BB5,
        startColumn: var_core_value_sig6AAD["startColumn"],
        endRow: var_core_value_sig6AAD["startRow"] + var_core_value_sig7BB5,
        endColumn: var_core_value_sig6AAD["endColumn"]
      };
    var_core_value_sig8FDE["setValue"](var_core_value_sig00BE["row"], var_core_value_sig00BE["column"], var_core_value_sig1157);
  });else {
    if (var_core_value_sig78E6["length"] === var_core_value_sigAA90) var_core_value_sig541F ? var_core_value_sig78E6["forEach"]((var_core_value_sig26EC, var_core_value_sigEEDB) => {
      let var_core_value_sig36E7 = var_core_value_sig0B5C[var_core_value_sigEEDB],
        var_core_value_sig6A78 = {
          startRow: var_core_value_sig36E7["startRow"],
          startColumn: var_core_value_sig36E7["startColumn"],
          endRow: var_core_value_sig36E7["endRow"],
          endColumn: var_core_value_sig36E7["startColumn"]
        };
      var_core_value_sig8FDE["setValue"](var_core_value_sig26EC["row"], var_core_value_sig26EC["column"], var_core_value_sig6A78);
    }) : var_core_value_sig78E6["forEach"]((var_core_value_sigF7EF, var_core_value_sig27F9) => {
      let var_core_value_sig393E = var_core_value_sig0B5C[0x0],
        var_core_value_sigB609 = {
          startRow: var_core_value_sig393E["startRow"],
          startColumn: var_core_value_sig393E["startColumn"] + var_core_value_sig27F9,
          endRow: var_core_value_sig393E["endRow"],
          endColumn: var_core_value_sig393E["startColumn"] + var_core_value_sig27F9
        };
      var_core_value_sig8FDE["setValue"](var_core_value_sigF7EF["row"], var_core_value_sigF7EF["column"], var_core_value_sigB609);
    });else {
      if (var_core_value_sig78E6["length"] === var_core_value_sig0B5C["length"]) var_core_value_sig0B5C["every"](var_core_value_sig011D => var_core_value_sig011D["startRow"] === var_core_value_sig011D["endRow"] || var_core_value_sig011D["startColumn"] === var_core_value_sig011D["endColumn"]) && var_core_value_sig78E6["forEach"]((var_core_value_sig6167, var_core_value_sig65A1) => {
        let var_core_value_sig7F19 = var_core_value_sig0B5C[var_core_value_sig65A1];
        var_core_value_sig8FDE["setValue"](var_core_value_sig6167["row"], var_core_value_sig6167["column"], var_core_value_sig7F19);
      });else throw Error("Mismatch between the number of target cells and the source range dimensions.");
    }
  }
  return var_core_value_sig8FDE;
}
const a = "SHEET_SPARKLINE_PLUGIN",
  o = {
    standard: ["rgb(54,78,244)", "rgb(236,100,169)"],
    specialty: ["rgb(49,106,246)", "rgb(30,177,189)"],
    distinctive: ["rgb(124,66,147)", "rgb(252,117,60)"],
    soft: ["rgb(80,102,248)", "rgb(244,104,249)"],
    fresh: ["rgb(46,187,122)", "rgb(248,190,21)"]
  },
  s = ["highPoint", "firstPoint", "lastPoint", "lowPoint", "negativePoint", "markersPoint"];
let c = function (var_core_value_sigE92D) {
    return var_core_value_sigE92D["STANDARD"] = "standard", var_core_value_sigE92D["SPECIALTY"] = "specialty", var_core_value_sigE92D["DISTINCTIVE"] = "distinctive", var_core_value_sigE92D["SOFT"] = "soft", var_core_value_sigE92D["FRESH"] = "fresh", var_core_value_sigE92D["CUSTOM"] = "custom", var_core_value_sigE92D;
  }({}),
  l = function (var_core_value_sig9940) {
    return var_core_value_sig9940[var_core_value_sig9940["LINE_CHART"] = 0x1] = ox5eb85c(0x96), var_core_value_sig9940[var_core_value_sig9940[ox5eb85c(0xe8)] = 0x2] = "BAR_CHART", var_core_value_sig9940[var_core_value_sig9940[ox5eb85c(0x120)] = 0x3] = ox5eb85c(0x120), var_core_value_sig9940[var_core_value_sig9940[ox5eb85c(0xe0)] = 0x4] = ox5eb85c(0xe0), var_core_value_sig9940;
  }({}),
  u = function (var_core_value_sig682D) {
    return var_core_value_sig682D[ox3e01af(0xb4)] = ox3e01af(0x95), var_core_value_sig682D["ZERO_VALUE"] = ox3e01af(0x149), var_core_value_sig682D[ox3e01af(0x137)] = "connect_with_line", var_core_value_sig682D;
  }({}),
  d = function (var_core_value_sig1435) {
    return var_core_value_sig1435[var_core_value_sig1435[ox1a2bd9(0xe9)] = 0x1] = ox1a2bd9(0xe9), var_core_value_sig1435[var_core_value_sig1435[ox1a2bd9(0x180)] = 0x2] = ox1a2bd9(0x180), var_core_value_sig1435[var_core_value_sig1435["CUSTOM_EXTREMUM"] = 0x3] = ox1a2bd9(0xec), var_core_value_sig1435;
  }({});
function f(var_core_value_sig4082) {
  "@babel/helpers - typeof";

  return f = typeof Symbol == "function" && typeof Symbol["iterator"] == ox3854b7(0x169) ? function (var_core_value_sigA694) {
    return typeof var_core_value_sigA694;
  } : function (var_core_value_sig18E0) {
    const var_core_value_sig0428 = ox3854b7;
    return var_core_value_sig18E0 && typeof Symbol == var_core_value_sig0428(0x12c) && var_core_value_sig18E0[var_core_value_sig0428(0x152)] === Symbol && var_core_value_sig18E0 !== Symbol[var_core_value_sig0428(0x198)] ? var_core_value_sig0428(0x169) : typeof var_core_value_sig18E0;
  }, f(var_core_value_sig4082);
}
;
function p(var_core_value_sigC049, var_core_value_sigE5C3) {
  if (f(var_core_value_sigC049) != ox55f7eb(0x163) || !var_core_value_sigC049) return var_core_value_sigC049;
  var var_core_value_sigCCAA = var_core_value_sigC049[Symbol[ox55f7eb(0xe4)]];
  if (var_core_value_sigCCAA !== void 0x0) {
    var var_core_value_sigF32D = var_core_value_sigCCAA["call"](var_core_value_sigC049, var_core_value_sigE5C3 || ox55f7eb(0xb9));
    if (f(var_core_value_sigF32D) != "object") return var_core_value_sigF32D;
    throw TypeError(ox55f7eb(0xb1));
  }
  return (var_core_value_sigE5C3 === ox55f7eb(0x10d) ? String : Number)(var_core_value_sigC049);
}
;
function m(var_core_value_sig9427) {
  var var_core_value_sig21F4 = p(var_core_value_sig9427, ox21be03(0x10d));
  return f(var_core_value_sig21F4) == ox21be03(0x169) ? var_core_value_sig21F4 : var_core_value_sig21F4 + "";
}
;
function h(var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561) {
  return (var_core_value_sigA468 = m(var_core_value_sigA468)) in var_core_value_sigA345 ? Object[ox41efca(0x123)](var_core_value_sigA345, var_core_value_sigA468, {
    value: var_core_value_sig1561,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sigA345[var_core_value_sigA468] = var_core_value_sig1561, var_core_value_sigA345;
}
;
function g(var_core_value_sigDF14, var_core_value_sig842F) {
  return function (var_core_value_sigBE07, var_core_value_sig555F) {
    var_core_value_sig842F(var_core_value_sigBE07, var_core_value_sig555F, var_core_value_sigDF14);
  };
}
;
function _(var_core_value_sigC4C0, var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sig986E) {
  var var_core_value_sig537C = arguments["length"],
    var_core_value_sigBBBC = var_core_value_sig537C < 0x3 ? var_core_value_sig214A : var_core_value_sig986E === null ? var_core_value_sig986E = Object[ox8481ce(0x11e)](var_core_value_sig214A, var_core_value_sigCCC3) : var_core_value_sig986E,
    var_core_value_sig5440;
  if (typeof Reflect == ox8481ce(0x163) && typeof Reflect[ox8481ce(0xdc)] == ox8481ce(0x12c)) var_core_value_sigBBBC = Reflect[ox8481ce(0xdc)](var_core_value_sigC4C0, var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sig986E);else {
    for (var var_core_value_sigE28B = var_core_value_sigC4C0[ox8481ce(0x196)] - 0x1; var_core_value_sigE28B >= 0x0; var_core_value_sigE28B--) (var_core_value_sig5440 = var_core_value_sigC4C0[var_core_value_sigE28B]) && (var_core_value_sigBBBC = (var_core_value_sig537C < 0x3 ? var_core_value_sig5440(var_core_value_sigBBBC) : var_core_value_sig537C > 0x3 ? var_core_value_sig5440(var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sigBBBC) : var_core_value_sig5440(var_core_value_sig214A, var_core_value_sigCCC3)) || var_core_value_sigBBBC);
  }
  return var_core_value_sig537C > 0x3 && var_core_value_sigBBBC && Object[ox8481ce(0x123)](var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sigBBBC), var_core_value_sigBBBC;
}
let v = class extends e["Disposable"] {
  constructor(var_core_value_sig3D6F) {
    super(), this[ox238cfa(0xdf)] = var_core_value_sig3D6F, h(this, "_sparklineModel", new Map()), h(this, ox238cfa(0x9f), new Map()), h(this, ox238cfa(0xad), new n[ox238cfa(0x151)]()), h(this, ox238cfa(0x19d), this[ox238cfa(0xad)][ox238cfa(0x187)]());
  }
  ["_ensureConfigMap"](var_core_value_sig336C, var_core_value_sig6E68) {
    let var_core_value_sig8DFE = this["_sparklineModel"][ox59efaa(0xc9)](var_core_value_sig336C);
    var_core_value_sig8DFE || (var_core_value_sig8DFE = new Map(), this[ox59efaa(0x14e)][ox59efaa(0x166)](var_core_value_sig336C, var_core_value_sig8DFE));
    let var_core_value_sig48EA = var_core_value_sig8DFE[ox59efaa(0xc9)](var_core_value_sig6E68);
    return var_core_value_sig48EA || (var_core_value_sig48EA = new Map(), var_core_value_sig8DFE[ox59efaa(0x166)](var_core_value_sig6E68, var_core_value_sig48EA)), var_core_value_sig48EA;
  }
  ["_ensureAnchorMatrix"](var_core_value_sig5E16, var_core_value_sig09F3) {
    let var_core_value_sig4592 = this["_sparklineAnchorMap"][ox4d6eba(0xc9)](var_core_value_sig5E16);
    var_core_value_sig4592 || (var_core_value_sig4592 = new Map(), this[ox4d6eba(0x9f)]["set"](var_core_value_sig5E16, var_core_value_sig4592));
    let var_core_value_sigC5C4 = var_core_value_sig4592[ox4d6eba(0xc9)](var_core_value_sig09F3);
    return var_core_value_sigC5C4 || (var_core_value_sigC5C4 = {
      matrix: new e[ox4d6eba(0x122)](),
      extra: {}
    }, var_core_value_sig4592[ox4d6eba(0x166)](var_core_value_sig09F3, var_core_value_sigC5C4)), var_core_value_sigC5C4;
  }
  ["updateSparklineExtraNum"](var_core_value_sig1617, var_core_value_sig4169, var_core_value_sig6D19, var_core_value_sig279C = "set") {
    var var_core_value_sigAC51, var_core_value_sig8986, var_core_value_sigCAF7, var_core_value_sigED1C;
    let var_core_value_sig726E = (var_core_value_sigAC51 = this["_sparklineModel"][ox44f64d(0xc9)](var_core_value_sig1617)) == null || (var_core_value_sigAC51 = var_core_value_sigAC51[ox44f64d(0xc9)](var_core_value_sig4169)) == null ? void 0x0 : var_core_value_sigAC51[ox44f64d(0xc9)](var_core_value_sig6D19);
    if (!var_core_value_sig726E) return;
    let var_core_value_sig2CD3 = (0x0, t[ox44f64d(0x129)])(this["_univerInstanceService"], {
      unitId: var_core_value_sig1617,
      subUnitId: var_core_value_sig4169
    });
    if (!var_core_value_sig2CD3) return;
    let {
        extra: var_core_value_sig038E,
        matrix: var_core_value_sigAA1E
      } = this["_ensureAnchorMatrix"](var_core_value_sig1617, var_core_value_sig4169),
      {
        worksheet: var_core_value_sigC9F5
      } = var_core_value_sig2CD3,
      var_core_value_sig7EEA = -(0x2 ** 0x35 - 0x1),
      var_core_value_sig59CE = 0x2 ** 0x35 - 0x1,
      var_core_value_sig33C8 = var_core_value_sig726E["config"][ox44f64d(0x17a)] ?? !0x1;
    var_core_value_sig726E[ox44f64d(0x161)]["forValue"]((var_core_value_sig390D, var_core_value_sigC928, var_core_value_sig39B7) => {
      const var_core_value_sig18E01 = ox44f64d;
      let var_core_value_sigE161 = var_core_value_sig39B7,
        var_core_value_sigBDEE = -(0x2 ** 0x35 - 0x1),
        var_core_value_sig1F40 = 0x2 ** 0x35 - 0x1,
        var_core_value_sig3FC7 = 0x0,
        var_core_value_sig1E1B = 0x0,
        var_core_value_sig3B10 = [];
      if (!(0x0, e[var_core_value_sig18E01(0x132)])(var_core_value_sigE161)) var_core_value_sigAA1E[var_core_value_sig18E01(0x173)](var_core_value_sig390D, var_core_value_sigC928, {
        groupId: var_core_value_sig6D19,
        data: [],
        max: var_core_value_sigBDEE,
        min: var_core_value_sig1F40,
        highIndex: var_core_value_sig3FC7,
        lowIndex: var_core_value_sig1E1B,
        negativeIndexes: var_core_value_sig3B10
      });else {
        let var_core_value_sig7827 = [];
        for (let var_core_value_sigFC87 = var_core_value_sigE161[var_core_value_sig18E01(0x16b)]; var_core_value_sigFC87 <= var_core_value_sigE161[var_core_value_sig18E01(0x16c)]; var_core_value_sigFC87++) {
          for (let var_core_value_sigCFFA = var_core_value_sigE161[var_core_value_sig18E01(0xa7)]; var_core_value_sigCFFA <= var_core_value_sigE161[var_core_value_sig18E01(0xf3)]; var_core_value_sigCFFA++) {
            var var_core_value_sig89E6;
            let var_core_value_sig32F8 = var_core_value_sigC9F5[var_core_value_sig18E01(0xfe)](var_core_value_sigFC87),
              var_core_value_sig5B67 = var_core_value_sigC9F5[var_core_value_sig18E01(0x106)](var_core_value_sigCFFA);
            if (!var_core_value_sig33C8 && (!var_core_value_sig32F8 || !var_core_value_sig5B67)) continue;
            let var_core_value_sig1758 = 0x0,
              var_core_value_sig4805 = ((var_core_value_sig89E6 = var_core_value_sigC9F5[var_core_value_sig18E01(0xba)](var_core_value_sigFC87, var_core_value_sigCFFA)) == null ? void 0x0 : var_core_value_sig89E6["v"]) === void 0x0 ? var_core_value_sigC9F5[var_core_value_sig18E01(0x11c)](var_core_value_sigFC87, var_core_value_sigCFFA) : var_core_value_sigC9F5[var_core_value_sig18E01(0xba)](var_core_value_sigFC87, var_core_value_sigCFFA);
            if (!var_core_value_sig4805 || var_core_value_sig4805["v"] === void 0x0 || var_core_value_sig4805["v"] === null) {
              let var_core_value_sigF4B9 = var_core_value_sig726E[var_core_value_sig18E01(0xa9)][var_core_value_sig18E01(0x182)] ?? var_core_value_sig18E01(0x95);
              var_core_value_sigF4B9 === var_core_value_sig18E01(0x149) ? var_core_value_sig1758 = 0x0 : var_core_value_sigF4B9 === "spacing" ? var_core_value_sig1758 = var_core_value_sig18E01(0x108) : var_core_value_sigF4B9 === var_core_value_sig18E01(0x107) && (var_core_value_sig1758 = var_core_value_sig18E01(0xf8));
            } else {
              if (var_core_value_sig4805["t"] === e[var_core_value_sig18E01(0x14b)][var_core_value_sig18E01(0xb2)] || var_core_value_sig4805["t"] === e[var_core_value_sig18E01(0x14b)][var_core_value_sig18E01(0x14a)]) {
                let var_core_value_sigD955 = var_core_value_sig726E[var_core_value_sig18E01(0xa9)]["nonNumShowAs"] ?? var_core_value_sig18E01(0x95);
                var_core_value_sigD955 === var_core_value_sig18E01(0x149) ? var_core_value_sig1758 = 0x0 : var_core_value_sigD955 === var_core_value_sig18E01(0x95) ? var_core_value_sig1758 = "u-spacing" : var_core_value_sigD955 === var_core_value_sig18E01(0x107) && (var_core_value_sig1758 = var_core_value_sig18E01(0xf8));
              } else var_core_value_sig1758 = var_core_value_sig4805["t"] === e[var_core_value_sig18E01(0x14b)]["BOOLEAN"] ? +!!var_core_value_sig4805["v"] : var_core_value_sig4805["t"] === e["CellValueType"][var_core_value_sig18E01(0xcd)] ? Number(var_core_value_sig4805["v"]) : var_core_value_sig4805["v"];
            }
            if (var_core_value_sig7827[var_core_value_sig18E01(0x13d)](var_core_value_sig1758), typeof var_core_value_sig1758 == "number") {
              var_core_value_sigBDEE = Math["max"](var_core_value_sigBDEE, var_core_value_sig1758), var_core_value_sig7EEA = Math[var_core_value_sig18E01(0x126)](var_core_value_sig7EEA, var_core_value_sig1758), var_core_value_sig59CE = Math["min"](var_core_value_sig59CE, var_core_value_sig1758), var_core_value_sig1F40 = Math[var_core_value_sig18E01(0x177)](var_core_value_sig1F40, var_core_value_sig1758);
              let var_core_value_sig5CEE = typeof var_core_value_sig7827[var_core_value_sig3FC7] == "number" ? Number(var_core_value_sig7827[var_core_value_sig3FC7]) : -(0x2 ** 0x35 - 0x1);
              var_core_value_sig1758 > var_core_value_sig5CEE && (var_core_value_sig3FC7 = var_core_value_sig7827[var_core_value_sig18E01(0x196)] - 0x1);
              let var_core_value_sigE92A = typeof var_core_value_sig7827[var_core_value_sig1E1B] == var_core_value_sig18E01(0x160) ? Number(var_core_value_sig7827[var_core_value_sig1E1B]) : 0x2 ** 0x35 - 0x1;
              var_core_value_sig1758 < var_core_value_sigE92A && (var_core_value_sig1E1B = var_core_value_sig7827["length"] - 0x1), var_core_value_sig1758 < 0x0 && var_core_value_sig3B10[var_core_value_sig18E01(0x13d)](var_core_value_sig7827[var_core_value_sig18E01(0x196)] - 0x1);
            }
          }
          var_core_value_sigAA1E[var_core_value_sig18E01(0x173)](var_core_value_sig390D, var_core_value_sigC928, {
            groupId: var_core_value_sig6D19,
            data: var_core_value_sig7827,
            max: var_core_value_sigBDEE,
            min: var_core_value_sig1F40,
            highIndex: var_core_value_sig3FC7,
            lowIndex: var_core_value_sig1E1B,
            negativeIndexes: var_core_value_sig3B10
          });
        }
      }
    });
    let var_core_value_sig957F = var_core_value_sig7EEA;
    if (((var_core_value_sig8986 = var_core_value_sig726E[ox44f64d(0xa9)]["extremumMax"]) == null ? void 0x0 : var_core_value_sig8986["type"]) === 0x3) {
      var var_core_value_sig803B;
      var_core_value_sig957F = ((var_core_value_sig803B = var_core_value_sig726E[ox44f64d(0xa9)][ox44f64d(0x167)]) == null ? void 0x0 : var_core_value_sig803B["value"]) ?? var_core_value_sig7EEA;
    }
    let var_core_value_sig5830 = var_core_value_sig59CE;
    if (((var_core_value_sigCAF7 = var_core_value_sig726E[ox44f64d(0xa9)][ox44f64d(0x197)]) == null ? void 0x0 : var_core_value_sigCAF7[ox44f64d(0x195)]) === 0x3) {
      var var_core_value_sig4A7C;
      var_core_value_sig5830 = ((var_core_value_sig4A7C = var_core_value_sig726E["config"][ox44f64d(0x197)]) == null ? void 0x0 : var_core_value_sig4A7C[ox44f64d(0x110)]) ?? var_core_value_sig59CE;
    }
    let var_core_value_sigF975 = var_core_value_sig726E[ox44f64d(0xa9)][ox44f64d(0x171)] ?? "standard",
      var_core_value_sigCDAF = new e[ox44f64d(0x128)](var_core_value_sig726E[ox44f64d(0xa9)][ox44f64d(0x13b)] ?? ((var_core_value_sigED1C = o[var_core_value_sigF975]) == null ? void 0x0 : var_core_value_sigED1C[0x0]) ?? o["standard"][0x0]),
      var_core_value_sigA298 = var_core_value_sigCDAF[ox44f64d(0xfa)](0.2)["toRgbString"](),
      var_core_value_sig0B40 = var_core_value_sigCDAF[ox44f64d(0xfa)](0.05)["toRgbString"]();
    var_core_value_sig038E[var_core_value_sig6D19] = {
      groupMax: var_core_value_sig7EEA,
      groupMin: var_core_value_sig59CE,
      showMax: var_core_value_sig957F,
      showMin: var_core_value_sig5830,
      startGradient: var_core_value_sigA298,
      endGradient: var_core_value_sig0B40
    }, this[ox44f64d(0xad)][ox44f64d(0x17e)]({
      unitId: var_core_value_sig1617,
      subUnitId: var_core_value_sig4169,
      groupId: var_core_value_sig6D19,
      config: var_core_value_sig726E,
      type: var_core_value_sig279C
    });
  }
  ["addSparkline"](var_core_value_sig330B, var_core_value_sig3625, var_core_value_sig0B4E, var_core_value_sig0E9F) {
    this[ox3be424(0x12b)](var_core_value_sig330B, var_core_value_sig3625)["set"](var_core_value_sig0B4E, var_core_value_sig0E9F), this["updateSparklineExtraNum"](var_core_value_sig330B, var_core_value_sig3625, var_core_value_sig0B4E, "add");
  }
  ["setSparkline"](var_core_value_sigE5BA, var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4) {
    var var_core_value_sigB6F7;
    let var_core_value_sigB495 = (var_core_value_sigB6F7 = this[ox3181f7(0x14e)][ox3181f7(0xc9)](var_core_value_sigE5BA)) == null ? void 0x0 : var_core_value_sigB6F7["get"](var_core_value_sig4A83);
    var_core_value_sig58AA[ox3181f7(0xca)](var_core_value_sig4743 => {
      const var_core_value_sigEB6A = ox3181f7;
      var_core_value_sigB495 != null && var_core_value_sigB495[var_core_value_sigEB6A(0xce)](var_core_value_sig4743) && (var_core_value_sigB495[var_core_value_sigEB6A(0x166)](var_core_value_sig4743, var_core_value_sig84C4), this[var_core_value_sigEB6A(0x9a)](var_core_value_sigE5BA, var_core_value_sig4A83, var_core_value_sig4743));
    });
  }
  ["removeSparkline"](var_core_value_sig70D0, var_core_value_sig2A8A, var_core_value_sig3782) {
    let var_core_value_sigD22E = this[ox4bf6a3(0x14e)]["get"](var_core_value_sig70D0);
    if (var_core_value_sigD22E) {
      let var_core_value_sig3D46 = var_core_value_sigD22E[ox4bf6a3(0xc9)](var_core_value_sig2A8A);
      if (var_core_value_sig3D46) {
        var var_core_value_sig3455, var_core_value_sig5CEF;
        var_core_value_sig3D46[ox4bf6a3(0x170)](var_core_value_sig3782);
        let var_core_value_sig652C = (var_core_value_sig3455 = this[ox4bf6a3(0x9f)][ox4bf6a3(0xc9)](var_core_value_sig70D0)) == null ? void 0x0 : var_core_value_sig3455["get"](var_core_value_sig2A8A);
        var_core_value_sig652C == null || (var_core_value_sig5CEF = var_core_value_sig652C[ox4bf6a3(0xb0)]) == null || var_core_value_sig5CEF["forValue"]((var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057) => {
          const var_core_value_sig72F6 = ox4bf6a3;
          (var_core_value_sigF057 == null ? void 0x0 : var_core_value_sigF057["groupId"]) === var_core_value_sig3782 && (var_core_value_sig652C == null || var_core_value_sig652C[var_core_value_sig72F6(0xb0)][var_core_value_sig72F6(0xd2)](var_core_value_sig156F, var_core_value_sigDD51));
        }), this[ox4bf6a3(0xad)][ox4bf6a3(0x17e)]({
          unitId: var_core_value_sig70D0,
          subUnitId: var_core_value_sig2A8A,
          groupId: var_core_value_sig3782,
          type: ox4bf6a3(0x172)
        }), var_core_value_sig3D46[ox4bf6a3(0xa5)] === 0x0 && var_core_value_sigD22E[ox4bf6a3(0x170)](var_core_value_sig2A8A);
      }
    }
  }
  ["removePartSparkline"](var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0, var_core_value_sig055E) {
    var var_core_value_sig7C77;
    let var_core_value_sig9578 = (var_core_value_sig7C77 = this[ox106e29(0x9f)][ox106e29(0xc9)](var_core_value_sig43D5)) == null ? void 0x0 : var_core_value_sig7C77[ox106e29(0xc9)](var_core_value_sig1395),
      var_core_value_sigA2D3 = var_core_value_sig9578 == null ? void 0x0 : var_core_value_sig9578["matrix"][ox106e29(0x17b)](var_core_value_sig9FA0, var_core_value_sig055E);
    if (var_core_value_sigA2D3) {
      var var_core_value_sigC218, var_core_value_sigADEC, var_core_value_sig3D8E;
      let {
          groupId: var_core_value_sigCC93
        } = var_core_value_sigA2D3,
        var_core_value_sig5964 = (var_core_value_sigC218 = this["_sparklineModel"][ox106e29(0xc9)](var_core_value_sig43D5)) == null ? void 0x0 : var_core_value_sigC218["get"](var_core_value_sig1395);
      var_core_value_sig5964 == null || (var_core_value_sigADEC = var_core_value_sig5964[ox106e29(0xc9)](var_core_value_sigCC93)) == null || var_core_value_sigADEC[ox106e29(0x161)]["realDeleteValue"](var_core_value_sig9FA0, var_core_value_sig055E), var_core_value_sig5964 != null && (var_core_value_sig3D8E = var_core_value_sig5964[ox106e29(0xc9)](var_core_value_sigCC93)) != null && var_core_value_sig3D8E[ox106e29(0x161)][ox106e29(0xda)]() || var_core_value_sig5964 == null || var_core_value_sig5964[ox106e29(0x170)](var_core_value_sigCC93), var_core_value_sig9578 == null || var_core_value_sig9578[ox106e29(0xb0)][ox106e29(0xd2)](var_core_value_sig9FA0, var_core_value_sig055E), this[ox106e29(0xad)][ox106e29(0x17e)]({
        unitId: var_core_value_sig43D5,
        subUnitId: var_core_value_sig1395,
        groupId: var_core_value_sigCC93,
        type: ox106e29(0x172)
      });
    }
  }
  ["clearSparklineCache"](var_core_value_sig37E5, var_core_value_sigF079, var_core_value_sigFCA0) {
    var var_core_value_sigC84D, var_core_value_sigF2BC;
    let var_core_value_sigD37B = (var_core_value_sigC84D = this[ox3810f8(0x14e)]["get"](var_core_value_sig37E5)) == null || (var_core_value_sigC84D = var_core_value_sigC84D[ox3810f8(0xc9)](var_core_value_sigF079)) == null || (var_core_value_sigC84D = var_core_value_sigC84D[ox3810f8(0xc9)](var_core_value_sigFCA0)) == null ? void 0x0 : var_core_value_sigC84D[ox3810f8(0x161)],
      var_core_value_sigFA28 = (var_core_value_sigF2BC = this[ox3810f8(0x9f)][ox3810f8(0xc9)](var_core_value_sig37E5)) == null ? void 0x0 : var_core_value_sigF2BC[ox3810f8(0xc9)](var_core_value_sigF079);
    if (var_core_value_sigD37B && var_core_value_sigFA28) {
      let {
        matrix: var_core_value_sig808B,
        extra: var_core_value_sig2A26
      } = var_core_value_sigFA28;
      var_core_value_sigD37B[ox3810f8(0xae)]((var_core_value_sig7E32, var_core_value_sig4C07, var_core_value_sig79AB) => {
        const var_core_value_sig8E74 = ox3810f8;
        var_core_value_sig808B[var_core_value_sig8E74(0xd2)](var_core_value_sig7E32, var_core_value_sig4C07);
      }), delete var_core_value_sig2A26[var_core_value_sigFCA0];
    }
  }
  ["getSubUnitSparkline"](var_core_value_sig93BE, var_core_value_sigABEC) {
    var var_core_value_sig2712;
    return (var_core_value_sig2712 = this[oxd3d827(0x14e)][oxd3d827(0xc9)](var_core_value_sig93BE)) == null ? void 0x0 : var_core_value_sig2712[oxd3d827(0xc9)](var_core_value_sigABEC);
  }
  ["getSparklineById"](var_core_value_sig0B9E, var_core_value_sigC545, var_core_value_sig12A7) {
    var var_core_value_sig6F4E;
    return (var_core_value_sig6F4E = this[ox1ffbcf(0x14e)][ox1ffbcf(0xc9)](var_core_value_sig0B9E)) == null || (var_core_value_sig6F4E = var_core_value_sig6F4E["get"](var_core_value_sigC545)) == null ? void 0x0 : var_core_value_sig6F4E[ox1ffbcf(0xc9)](var_core_value_sig12A7);
  }
  ["getSparkline"](var_core_value_sigA021, var_core_value_sig49D9, var_core_value_sig320C, var_core_value_sigE7F0) {
    var var_core_value_sigE837;
    return (var_core_value_sigE837 = this[ox295bde(0x9f)]["get"](var_core_value_sigA021)) == null || (var_core_value_sigE837 = var_core_value_sigE837[ox295bde(0xc9)](var_core_value_sig49D9)) == null || (var_core_value_sigE837 = var_core_value_sigE837["matrix"]["getValue"](var_core_value_sig320C, var_core_value_sigE7F0)) == null ? void 0x0 : var_core_value_sigE837[ox295bde(0xfc)];
  }
  ["reBuildAnchorCache"](var_core_value_sig34F4, var_core_value_sigA45D) {
    var var_core_value_sig1BC7;
    let var_core_value_sig4956 = this[ox4719f9(0xd3)](var_core_value_sig34F4, var_core_value_sigA45D);
    var_core_value_sig4956[ox4719f9(0xb0)][ox4719f9(0xae)]((var_core_value_sig1179, var_core_value_sigEA92) => {
      const var_core_value_sig8FD9 = ox4719f9;
      var_core_value_sig4956[var_core_value_sig8FD9(0xb0)]["realDeleteValue"](var_core_value_sig1179, var_core_value_sigEA92);
    });
    let var_core_value_sigCC9E = (var_core_value_sig1BC7 = this[ox4719f9(0x14e)][ox4719f9(0xc9)](var_core_value_sig34F4)) == null ? void 0x0 : var_core_value_sig1BC7["get"](var_core_value_sigA45D);
    if (var_core_value_sigCC9E) {
      for (let [var_core_value_sig104C] of var_core_value_sigCC9E) this[ox4719f9(0x9a)](var_core_value_sig34F4, var_core_value_sigA45D, var_core_value_sig104C);
    }
  }
  ["getSparklineCache"]() {
    return {
      sparklineModel: this[ox3f7358(0x14e)],
      sparklineAnchorMap: this["_sparklineAnchorMap"]
    };
  }
  ["toJSON"](var_core_value_sig444C) {
    let var_core_value_sigE42E = {};
    if (this[ox1d42a8(0x14e)][ox1d42a8(0xce)](var_core_value_sig444C)) {
      var_core_value_sigE42E[var_core_value_sig444C] = {};
      let var_core_value_sig1AE5 = this[ox1d42a8(0x14e)][ox1d42a8(0xc9)](var_core_value_sig444C);
      var_core_value_sig1AE5 != null && var_core_value_sig1AE5[ox1d42a8(0xa5)] && Array[ox1d42a8(0x11f)](var_core_value_sig1AE5[ox1d42a8(0xa1)]())[ox1d42a8(0xca)](var_core_value_sig841D => {
        const var_core_value_sig90CB = ox1d42a8;
        var_core_value_sigE42E[var_core_value_sig444C][var_core_value_sig841D] = {};
        let var_core_value_sigBDF5 = var_core_value_sig1AE5["get"](var_core_value_sig841D);
        var_core_value_sigBDF5 != null && var_core_value_sigBDF5[var_core_value_sig90CB(0xa5)] && Array[var_core_value_sig90CB(0x11f)](var_core_value_sigBDF5[var_core_value_sig90CB(0xa1)]())[var_core_value_sig90CB(0xca)](var_core_value_sig9FBA => {
          const var_core_value_sigFE01 = var_core_value_sig90CB;
          let var_core_value_sigA2CE = var_core_value_sigBDF5[var_core_value_sigFE01(0xc9)](var_core_value_sig9FBA);
          var_core_value_sigA2CE && (var_core_value_sigE42E[var_core_value_sig444C][var_core_value_sig841D][var_core_value_sig9FBA] = {
            config: var_core_value_sigA2CE[var_core_value_sigFE01(0xa9)],
            sparklines: var_core_value_sigA2CE[var_core_value_sigFE01(0x161)][var_core_value_sigFE01(0x186)]()
          });
        });
      });
    }
    return var_core_value_sigE42E;
  }
  ["fromJSON"](var_core_value_sigF039) {
    var_core_value_sigF039 && Object["keys"](var_core_value_sigF039)[ox50b03e(0xca)](var_core_value_sig7100 => {
      const var_core_value_sigA19A = ox50b03e;
      let var_core_value_sigD3F5 = var_core_value_sigF039[var_core_value_sig7100];
      var_core_value_sigD3F5 && Object[var_core_value_sigA19A(0xa1)](var_core_value_sigD3F5)[var_core_value_sigA19A(0xca)](var_core_value_sigACC6 => {
        const var_core_value_sig1614 = var_core_value_sigA19A;
        let var_core_value_sig85C3 = var_core_value_sigD3F5[var_core_value_sigACC6];
        var_core_value_sig85C3 && Object["keys"](var_core_value_sig85C3)[var_core_value_sig1614(0xca)](var_core_value_sig1975 => {
          const var_core_value_sig6EA1 = var_core_value_sig1614;
          let var_core_value_sig029F = var_core_value_sig85C3[var_core_value_sig1975];
          if (var_core_value_sig029F) {
            let var_core_value_sig8109 = {
              config: var_core_value_sig029F[var_core_value_sig6EA1(0xa9)],
              sparklines: new e[var_core_value_sig6EA1(0x122)](var_core_value_sig029F[var_core_value_sig6EA1(0x161)])
            };
            this[var_core_value_sig6EA1(0x16a)](var_core_value_sig7100, var_core_value_sigACC6, var_core_value_sig1975, var_core_value_sig8109);
          }
        });
      });
    });
  }
  ["deleteUnit"](var_core_value_sigA321) {
    let var_core_value_sigBF4C = this[ox3bac67(0x14e)][ox3bac67(0xc9)](var_core_value_sigA321);
    if (var_core_value_sigBF4C) {
      for (let [var_core_value_sigB996] of var_core_value_sigBF4C) {
        let var_core_value_sig3767 = var_core_value_sigBF4C["get"](var_core_value_sigB996);
        if (var_core_value_sig3767) {
          for (let [var_core_value_sig58C1] of var_core_value_sig3767) this[ox3bac67(0x124)](var_core_value_sigA321, var_core_value_sigB996, var_core_value_sig58C1);
        }
      }
      this[ox3bac67(0x14e)]["delete"](var_core_value_sigA321);
    }
  }
};
v = _([g(0x0, (0x0, e["Inject"])(e["IUniverInstanceService"]))], v);
const y = {
    id: "sheet.mutation.add-sparkline",
    type: e["CommandType"]["MUTATION"],
    handler: (var_core_value_sig0FD9, var_core_value_sig5649) => {
      if (!var_core_value_sig5649) return !0x1;
      let {
          sparklineConfigMap: var_core_value_sigAF82,
          unitId: var_core_value_sig21A2,
          subUnitId: var_core_value_sig5C1D
        } = var_core_value_sig5649,
        var_core_value_sig4CBA = var_core_value_sig0FD9[ox269b6f(0xc9)](v);
      return Object[ox269b6f(0x165)](var_core_value_sigAF82)[ox269b6f(0xca)](([var_core_value_sig3457, var_core_value_sig4A08]) => {
        const var_core_value_sig1BC4 = ox269b6f;
        let var_core_value_sig9EAB = {
          config: var_core_value_sig4A08[var_core_value_sig1BC4(0xa9)],
          sparklines: new e["ObjectMatrix"](var_core_value_sig4A08[var_core_value_sig1BC4(0x161)])
        };
        var_core_value_sig4CBA[var_core_value_sig1BC4(0x16a)](var_core_value_sig21A2, var_core_value_sig5C1D, var_core_value_sig3457, var_core_value_sig9EAB);
      }), !0x0;
    }
  },
  b = {
    id: "sheet.mutation.remove-sparkline",
    type: e["CommandType"]["MUTATION"],
    handler: (var_core_value_sig8E65, var_core_value_sig772C) => {
      if (!var_core_value_sig772C) return !0x1;
      let {
          unitId: var_core_value_sigF309,
          subUnitId: var_core_value_sig44F9,
          ranges: var_core_value_sigE532,
          isSingle: var_core_value_sigF381,
          groupIds: var_core_value_sigCB92
        } = var_core_value_sig772C,
        var_core_value_sigC844 = var_core_value_sig8E65["get"](v);
      return var_core_value_sigCB92 ? (var_core_value_sigCB92[ox3bd782(0xca)](var_core_value_sigA5C3 => {
        const var_core_value_sig3A1E = ox3bd782;
        var_core_value_sigC844[var_core_value_sig3A1E(0x18e)](var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigA5C3);
      }), !0x0) : var_core_value_sigE532 ? (var_core_value_sigE532["forEach"](var_core_value_sigDC92 => {
        const var_core_value_sig3515 = ox3bd782;
        e[var_core_value_sig3515(0x131)][var_core_value_sig3515(0x156)](var_core_value_sigDC92, (var_core_value_sig3082, var_core_value_sigF5D1) => {
          const var_core_value_sig8775 = var_core_value_sig3515;
          let var_core_value_sig481B = var_core_value_sigC844[var_core_value_sig8775(0xc5)](var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sig3082, var_core_value_sigF5D1);
          var_core_value_sig481B && (var_core_value_sigF381 ? var_core_value_sigC844[var_core_value_sig8775(0x19b)](var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sig3082, var_core_value_sigF5D1) : var_core_value_sigC844[var_core_value_sig8775(0x18e)](var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sig481B));
        });
      }), !0x0) : !0x1;
    }
  },
  x = {
    id: "sheet.command.add-sparkline",
    type: e["CommandType"]["COMMAND"],
    handler: (var_core_value_sig2ED4, var_core_value_sig0477) => {
      if (!var_core_value_sig0477) return !0x1;
      let {
          sourceRanges: var_core_value_sig6FDF,
          targetRanges: var_core_value_sig27C4,
          config: var_core_value_sig3E1A
        } = var_core_value_sig0477,
        var_core_value_sig7FB0 = var_core_value_sig2ED4[ox34e060(0xc9)](e[ox34e060(0x11b)]),
        var_core_value_sig5215 = "g_" + (0x0, e["generateRandomId"])(0x6),
        var_core_value_sig5204 = i(var_core_value_sig6FDF, var_core_value_sig27C4),
        var_core_value_sig5E11 = {
          config: var_core_value_sig3E1A ?? {},
          sparklines: var_core_value_sig5204["getMatrix"]()
        },
        var_core_value_sig4D58 = var_core_value_sig2ED4[ox34e060(0xc9)](e[ox34e060(0x188)]),
        var_core_value_sig2DBD = var_core_value_sig2ED4[ox34e060(0xc9)](v),
        var_core_value_sig424E = (0x0, t[ox34e060(0x129)])(var_core_value_sig4D58);
      if (!var_core_value_sig424E) return !0x1;
      let {
          unitId: var_core_value_sigF481,
          subUnitId: var_core_value_sigD7F2
        } = var_core_value_sig424E,
        var_core_value_sig7CF3 = var_core_value_sig2ED4[ox34e060(0xc9)](e[ox34e060(0x184)]),
        var_core_value_sig9DC6 = [],
        var_core_value_sig6643 = [],
        var_core_value_sig4124 = {},
        var_core_value_sigBF1C = {},
        var_core_value_sigEEEF = new Set([var_core_value_sig5215]);
      var_core_value_sig5204[ox34e060(0xae)]((var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05) => {
        const var_core_value_sig41F3 = ox34e060;
        let var_core_value_sigF455 = var_core_value_sig2DBD[var_core_value_sig41F3(0xc5)](var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sigC2A0, var_core_value_sig7C65);
        if (var_core_value_sigF455) {
          let var_core_value_sig13D7 = var_core_value_sig2DBD[var_core_value_sig41F3(0xf0)](var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sigF455);
          if (var_core_value_sig13D7) {
            var_core_value_sigEEEF[var_core_value_sig41F3(0x168)](var_core_value_sigF455);
            let var_core_value_sig4BBA = var_core_value_sig4124[var_core_value_sigF455],
              var_core_value_sig6201 = var_core_value_sigBF1C[var_core_value_sigF455];
            var_core_value_sig6201 || (var_core_value_sig6201 = {
              config: e[var_core_value_sig41F3(0xed)][var_core_value_sig41F3(0xc8)](var_core_value_sig13D7[var_core_value_sig41F3(0xa9)]),
              sparklines: new e["ObjectMatrix"](var_core_value_sig13D7[var_core_value_sig41F3(0x161)][var_core_value_sig41F3(0xd5)]())
            }, var_core_value_sigBF1C[var_core_value_sigF455] = var_core_value_sig6201), var_core_value_sig4BBA || (var_core_value_sig4BBA = {
              config: e["Tools"][var_core_value_sig41F3(0xc8)](var_core_value_sig13D7[var_core_value_sig41F3(0xa9)]),
              sparklines: var_core_value_sig13D7[var_core_value_sig41F3(0x161)][var_core_value_sig41F3(0xd5)]()
            }, var_core_value_sig4124[var_core_value_sigF455] = var_core_value_sig4BBA), var_core_value_sig6201[var_core_value_sig41F3(0x161)][var_core_value_sig41F3(0xd2)](var_core_value_sigC2A0, var_core_value_sig7C65);
          }
        }
      });
      let var_core_value_sig9A01 = {};
      return Object[ox34e060(0x165)](var_core_value_sigBF1C)["forEach"](([var_core_value_sig6E78, var_core_value_sigB3EE]) => {
        const var_core_value_sigC50A = ox34e060;
        var_core_value_sigB3EE[var_core_value_sigC50A(0x161)][var_core_value_sigC50A(0x138)]() && (var_core_value_sig9A01[var_core_value_sig6E78] = {
          config: var_core_value_sigB3EE["config"],
          sparklines: var_core_value_sigB3EE[var_core_value_sigC50A(0x161)]["clone"]()
        });
      }), var_core_value_sig9A01[var_core_value_sig5215] = var_core_value_sig5E11, var_core_value_sig9DC6[ox34e060(0x13d)]({
        id: b["id"],
        params: {
          unitId: var_core_value_sigF481,
          subUnitId: var_core_value_sigD7F2,
          groupIds: Array["from"](var_core_value_sigEEEF),
          isSingle: !0x1
        }
      }), var_core_value_sigEEEF[ox34e060(0xa5)] > 0x1 && (var_core_value_sig6643["push"]({
        id: b["id"],
        params: {
          unitId: var_core_value_sigF481,
          subUnitId: var_core_value_sigD7F2,
          groupIds: Array[ox34e060(0x11f)](var_core_value_sigEEEF),
          isSingle: !0x1
        }
      }), var_core_value_sig9DC6["push"]({
        id: y["id"],
        params: {
          unitId: var_core_value_sigF481,
          subUnitId: var_core_value_sigD7F2,
          sparklineConfigMap: var_core_value_sig4124
        }
      })), var_core_value_sig6643["push"]({
        id: y["id"],
        params: {
          unitId: var_core_value_sigF481,
          subUnitId: var_core_value_sigD7F2,
          sparklineConfigMap: var_core_value_sig9A01
        }
      }), (0x0, e["sequenceExecute"])(var_core_value_sig6643, var_core_value_sig7CF3)[ox34e060(0x13f)] ? (var_core_value_sig7FB0[ox34e060(0x194)]({
        unitID: var_core_value_sigF481,
        undoMutations: var_core_value_sig9DC6,
        redoMutations: var_core_value_sig6643
      }), !0x0) : !0x1;
    }
  },
  S = {
    id: "sheet.command.remove-sparkline",
    type: e["CommandType"]["COMMAND"],
    handler: (var_core_value_sig674F, var_core_value_sigC8F6) => {
      let {
          isSingle: var_core_value_sig8A26 = !0x0
        } = var_core_value_sigC8F6 || {},
        var_core_value_sigD073 = var_core_value_sig674F[ox34eb03(0xc9)](e[ox34eb03(0x184)]),
        var_core_value_sigF631 = var_core_value_sig674F[ox34eb03(0xc9)](e["IUniverInstanceService"]),
        var_core_value_sig2278 = var_core_value_sig674F["get"](v),
        var_core_value_sig7053 = var_core_value_sig674F[ox34eb03(0xc9)](e[ox34eb03(0x11b)]),
        var_core_value_sig52F1 = (0x0, t[ox34eb03(0x129)])(var_core_value_sigF631);
      if (!var_core_value_sig52F1) return !0x1;
      let var_core_value_sig1E74 = var_core_value_sig674F[ox34eb03(0xc9)](t[ox34eb03(0xc1)]),
        var_core_value_sig1E84 = (var_core_value_sigC8F6 == null ? void 0x0 : var_core_value_sigC8F6[ox34eb03(0xf6)]) ?? var_core_value_sig1E74[ox34eb03(0xe5)]()[ox34eb03(0xab)](var_core_value_sig11D0 => var_core_value_sig11D0["range"]),
        {
          unitId: var_core_value_sig133B,
          subUnitId: var_core_value_sig69B8
        } = var_core_value_sig52F1,
        var_core_value_sig983D = [],
        var_core_value_sig9A03 = [];
      var_core_value_sig983D["push"]({
        id: b["id"],
        params: {
          unitId: var_core_value_sig133B,
          subUnitId: var_core_value_sig69B8,
          ranges: var_core_value_sig1E84,
          isSingle: var_core_value_sig8A26
        }
      });
      let var_core_value_sig3363 = [],
        var_core_value_sigF64A = {};
      return var_core_value_sig1E84[ox34eb03(0xca)](var_core_value_sigB8ED => {
        const var_core_value_sig8EAE = ox34eb03;
        e[var_core_value_sig8EAE(0x131)]["foreach"](var_core_value_sigB8ED, (var_core_value_sig90C0, var_core_value_sigF1B2) => {
          const var_core_value_sigC2BB = var_core_value_sig8EAE;
          let var_core_value_sigD9DB = var_core_value_sig2278[var_core_value_sigC2BB(0xc5)](var_core_value_sig133B, var_core_value_sig69B8, var_core_value_sig90C0, var_core_value_sigF1B2);
          if (var_core_value_sigD9DB) {
            let var_core_value_sig5151 = var_core_value_sig2278[var_core_value_sigC2BB(0xf0)](var_core_value_sig133B, var_core_value_sig69B8, var_core_value_sigD9DB);
            var_core_value_sig5151 && (var_core_value_sig3363[var_core_value_sigC2BB(0x13d)](var_core_value_sigD9DB), var_core_value_sigF64A[var_core_value_sigD9DB] = {
              config: e[var_core_value_sigC2BB(0xed)][var_core_value_sigC2BB(0xc8)](var_core_value_sig5151[var_core_value_sigC2BB(0xa9)]),
              sparklines: e[var_core_value_sigC2BB(0xed)][var_core_value_sigC2BB(0xc8)](var_core_value_sig5151["sparklines"][var_core_value_sigC2BB(0xd5)]())
            });
          }
        });
      }), var_core_value_sig9A03[ox34eb03(0x13d)]({
        id: b["id"],
        params: {
          unitId: var_core_value_sig133B,
          subUnitId: var_core_value_sig69B8,
          groupIds: var_core_value_sig3363,
          isSingle: !0x1
        }
      }), var_core_value_sig9A03[ox34eb03(0x13d)]({
        id: y["id"],
        params: {
          unitId: var_core_value_sig133B,
          subUnitId: var_core_value_sig69B8,
          sparklineConfigMap: var_core_value_sigF64A
        }
      }), (0x0, e[ox34eb03(0xe3)])(var_core_value_sig983D, var_core_value_sigD073)["result"] ? (var_core_value_sig7053[ox34eb03(0x194)]({
        unitID: var_core_value_sig133B,
        undoMutations: var_core_value_sig9A03,
        redoMutations: var_core_value_sig983D
      }), !0x0) : !0x1;
    }
  },
  C = {
    id: "sheet.mutation.set-sparkline",
    type: e["CommandType"]["MUTATION"],
    handler: (var_core_value_sig25EC, var_core_value_sigA790) => {
      if (!var_core_value_sigA790) return !0x1;
      let {
          unitId: var_core_value_sig9A5E,
          subUnitId: var_core_value_sig01B9,
          groupIds: var_core_value_sigD6A9,
          config: var_core_value_sig0FCF
        } = var_core_value_sigA790,
        var_core_value_sigCF96 = var_core_value_sig25EC["get"](v);
      return var_core_value_sigD6A9[ox30e92d(0xca)](var_core_value_sig1CDD => {
        const var_core_value_sig0DB1 = ox30e92d;
        let var_core_value_sig68A2 = var_core_value_sigCF96["getSparklineById"](var_core_value_sig9A5E, var_core_value_sig01B9, var_core_value_sig1CDD);
        if (var_core_value_sig68A2) {
          let var_core_value_sigA363 = {
            config: Object[var_core_value_sig0DB1(0x141)]({}, var_core_value_sig68A2[var_core_value_sig0DB1(0xa9)], var_core_value_sig0FCF["config"]),
            sparklines: new e["ObjectMatrix"](var_core_value_sig68A2[var_core_value_sig0DB1(0x161)][var_core_value_sig0DB1(0xd5)]())
          };
          var_core_value_sigCF96[var_core_value_sig0DB1(0x175)](var_core_value_sig9A5E, var_core_value_sig01B9, [var_core_value_sig1CDD], var_core_value_sigA363);
        }
      }), !0x0;
    }
  },
  w = {
    id: "sheet.command.set-sparkline",
    type: e["CommandType"]["COMMAND"],
    handler: (var_core_value_sigC4E9, var_core_value_sigF612) => {
      var var_core_value_sigAA6C;
      if (!var_core_value_sigF612) return !0x1;
      let var_core_value_sig8BFA = var_core_value_sigC4E9["get"](e[ox2a4f92(0x184)]),
        var_core_value_sig236B = var_core_value_sigC4E9[ox2a4f92(0xc9)](t[ox2a4f92(0xc1)]),
        var_core_value_sig1951 = var_core_value_sigC4E9["get"](v),
        var_core_value_sigFEA0 = var_core_value_sigC4E9[ox2a4f92(0xc9)](e[ox2a4f92(0x188)]),
        var_core_value_sig931A = var_core_value_sigC4E9[ox2a4f92(0xc9)](e[ox2a4f92(0x11b)]),
        var_core_value_sigEE7D = (0x0, t[ox2a4f92(0x129)])(var_core_value_sigFEA0);
      if (!var_core_value_sigEE7D) return !0x1;
      let {
          unitId: var_core_value_sig3585,
          subUnitId: var_core_value_sig31A8
        } = var_core_value_sigEE7D,
        var_core_value_sigA4DA = (var_core_value_sigF612 == null ? void 0x0 : var_core_value_sigF612[ox2a4f92(0xf6)]) ?? var_core_value_sig236B[ox2a4f92(0xe5)]()[ox2a4f92(0xab)](var_core_value_sigCC17 => var_core_value_sigCC17["range"]),
        var_core_value_sig6FC0 = (var_core_value_sigAA6C = var_core_value_sig1951[ox2a4f92(0xfb)]()["sparklineAnchorMap"]["get"](var_core_value_sig3585)) == null ? void 0x0 : var_core_value_sigAA6C[ox2a4f92(0xc9)](var_core_value_sig31A8),
        {
          isChangeDataSource: var_core_value_sig6217,
          config: var_core_value_sigB805,
          combine: var_core_value_sig4FAE,
          unCombine: var_core_value_sig1FCC
        } = var_core_value_sigF612;
      if (var_core_value_sig4FAE) {
        var var_core_value_sigB7F9;
        let var_core_value_sig32AE = [],
          var_core_value_sigC753 = [];
        var_core_value_sig32AE["push"]({
          id: b["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            ranges: var_core_value_sigA4DA,
            isSingle: !0x0
          }
        });
        let var_core_value_sigFFD1 = "g_" + (0x0, e[ox2a4f92(0xd8)])(0x6),
          var_core_value_sig81AE = new e["ObjectMatrix"](),
          var_core_value_sigF79F = (var_core_value_sigB7F9 = var_core_value_sig1951[ox2a4f92(0xfb)]()["sparklineModel"]["get"](var_core_value_sig3585)) == null ? void 0x0 : var_core_value_sigB7F9[ox2a4f92(0xc9)](var_core_value_sig31A8),
          var_core_value_sig0E54 = new Set([var_core_value_sigFFD1]),
          var_core_value_sig3B17 = {};
        return var_core_value_sigA4DA["forEach"](var_core_value_sigFBA5 => {
          const var_core_value_sigAC47 = ox2a4f92;
          let {
            startRow: var_core_value_sigA06F,
            endRow: var_core_value_sig770E,
            startColumn: var_core_value_sig4654,
            endColumn: var_core_value_sigB26B
          } = var_core_value_sigFBA5;
          for (let var_core_value_sigB542 = var_core_value_sigA06F; var_core_value_sigB542 <= var_core_value_sig770E; var_core_value_sigB542++) for (let var_core_value_sig670B = var_core_value_sig4654; var_core_value_sig670B <= var_core_value_sigB26B; var_core_value_sig670B++) {
            var var_core_value_sig019B;
            let var_core_value_sig7565 = var_core_value_sig6FC0 == null || (var_core_value_sig019B = var_core_value_sig6FC0[var_core_value_sigAC47(0xb0)][var_core_value_sigAC47(0x17b)](var_core_value_sigB542, var_core_value_sig670B)) == null ? void 0x0 : var_core_value_sig019B["groupId"];
            if (var_core_value_sig7565) {
              var var_core_value_sigC6BC;
              var_core_value_sig0E54["add"](var_core_value_sig7565);
              let var_core_value_sig5090 = var_core_value_sig1951["getSparklineById"](var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sig7565);
              var_core_value_sig5090 && (var_core_value_sig3B17[var_core_value_sig7565] = {
                config: e[var_core_value_sigAC47(0xed)][var_core_value_sigAC47(0xc8)](var_core_value_sig5090[var_core_value_sigAC47(0xa9)]),
                sparklines: e[var_core_value_sigAC47(0xed)][var_core_value_sigAC47(0xc8)](var_core_value_sig5090["sparklines"]["clone"]())
              });
              let var_core_value_sigC368 = var_core_value_sigF79F == null || (var_core_value_sigC6BC = var_core_value_sigF79F["get"](var_core_value_sig7565)) == null ? void 0x0 : var_core_value_sigC6BC[var_core_value_sigAC47(0x161)][var_core_value_sigAC47(0x17b)](var_core_value_sigB542, var_core_value_sig670B);
              var_core_value_sigC368 && var_core_value_sig81AE[var_core_value_sigAC47(0x173)](var_core_value_sigB542, var_core_value_sig670B, var_core_value_sigC368);
            }
          }
        }), var_core_value_sig32AE["push"]({
          id: y["id"],
          params: {
            sparklineConfigMap: {
              [var_core_value_sigFFD1]: {
                config: e[ox2a4f92(0xed)][ox2a4f92(0xc8)](var_core_value_sigB805[ox2a4f92(0xa9)]),
                sparklines: var_core_value_sig81AE[ox2a4f92(0x186)]()
              }
            },
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8
          }
        }), var_core_value_sigC753[ox2a4f92(0x13d)]({
          id: b["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            isSingle: !0x1,
            groupIds: Array[ox2a4f92(0x11f)](var_core_value_sig0E54)
          }
        }), var_core_value_sigC753["push"]({
          id: y["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            sparklineConfigMap: var_core_value_sig3B17
          }
        }), (0x0, e[ox2a4f92(0xe3)])(var_core_value_sig32AE, var_core_value_sig8BFA)["result"] ? (var_core_value_sig931A[ox2a4f92(0x194)]({
          unitID: var_core_value_sig3585,
          undoMutations: var_core_value_sigC753,
          redoMutations: var_core_value_sig32AE
        }), !0x0) : !0x1;
      } else {
        if (var_core_value_sig1FCC) {
          var var_core_value_sigB1A2;
          let var_core_value_sig8EC2 = [],
            var_core_value_sigA8C3 = [];
          var_core_value_sig8EC2[ox2a4f92(0x13d)]({
            id: b["id"],
            params: {
              unitId: var_core_value_sig3585,
              subUnitId: var_core_value_sig31A8,
              ranges: var_core_value_sigA4DA,
              isSingle: !0x0
            }
          });
          let var_core_value_sig5276 = (var_core_value_sigB1A2 = var_core_value_sig1951[ox2a4f92(0xfb)]()[ox2a4f92(0x164)][ox2a4f92(0xc9)](var_core_value_sig3585)) == null ? void 0x0 : var_core_value_sigB1A2[ox2a4f92(0xc9)](var_core_value_sig31A8),
            var_core_value_sig031B = {},
            var_core_value_sig9DC0 = new Set(),
            var_core_value_sig95F0 = {};
          return var_core_value_sigA4DA["forEach"](var_core_value_sigBB6C => {
            const var_core_value_sigE2BF = ox2a4f92;
            let {
              startRow: var_core_value_sigB8C7,
              endRow: var_core_value_sigA56E,
              startColumn: var_core_value_sig1998,
              endColumn: var_core_value_sigFF19
            } = var_core_value_sigBB6C;
            for (let var_core_value_sig6912 = var_core_value_sigB8C7; var_core_value_sig6912 <= var_core_value_sigA56E; var_core_value_sig6912++) for (let var_core_value_sigD4FB = var_core_value_sig1998; var_core_value_sigD4FB <= var_core_value_sigFF19; var_core_value_sigD4FB++) {
              var var_core_value_sig43B8;
              let var_core_value_sigAD56 = var_core_value_sig6FC0 == null || (var_core_value_sig43B8 = var_core_value_sig6FC0["matrix"][var_core_value_sigE2BF(0x17b)](var_core_value_sig6912, var_core_value_sigD4FB)) == null ? void 0x0 : var_core_value_sig43B8[var_core_value_sigE2BF(0xfc)];
              if (var_core_value_sigAD56) {
                var var_core_value_sigD98F;
                let var_core_value_sigE67E = new e[var_core_value_sigE2BF(0x122)](),
                  var_core_value_sig2902 = "g_" + (0x0, e[var_core_value_sigE2BF(0xd8)])(0x6);
                var_core_value_sig9DC0["add"](var_core_value_sigAD56), var_core_value_sig9DC0[var_core_value_sigE2BF(0x168)](var_core_value_sig2902);
                let var_core_value_sig9989 = var_core_value_sig1951[var_core_value_sigE2BF(0xf0)](var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sigAD56);
                var_core_value_sig9989 && (var_core_value_sig95F0[var_core_value_sigAD56] = {
                  config: e[var_core_value_sigE2BF(0xed)][var_core_value_sigE2BF(0xc8)](var_core_value_sig9989["config"]),
                  sparklines: e[var_core_value_sigE2BF(0xed)][var_core_value_sigE2BF(0xc8)](var_core_value_sig9989[var_core_value_sigE2BF(0x161)][var_core_value_sigE2BF(0xd5)]())
                });
                let var_core_value_sig698E = var_core_value_sig5276 == null || (var_core_value_sigD98F = var_core_value_sig5276[var_core_value_sigE2BF(0xc9)](var_core_value_sigAD56)) == null ? void 0x0 : var_core_value_sigD98F[var_core_value_sigE2BF(0x161)]["getValue"](var_core_value_sig6912, var_core_value_sigD4FB);
                var_core_value_sig698E && var_core_value_sigE67E[var_core_value_sigE2BF(0x173)](var_core_value_sig6912, var_core_value_sigD4FB, var_core_value_sig698E), var_core_value_sig031B[var_core_value_sig2902] = {
                  sparklines: var_core_value_sigE67E["getMatrix"](),
                  config: e[var_core_value_sigE2BF(0xed)][var_core_value_sigE2BF(0xc8)](var_core_value_sigB805[var_core_value_sigE2BF(0xa9)])
                };
              }
            }
          }), var_core_value_sig8EC2[ox2a4f92(0x13d)]({
            id: y["id"],
            params: {
              unitId: var_core_value_sig3585,
              subUnitId: var_core_value_sig31A8,
              sparklineConfigMap: var_core_value_sig031B
            }
          }), var_core_value_sigA8C3[ox2a4f92(0x13d)]({
            id: b["id"],
            params: {
              unitId: var_core_value_sig3585,
              subUnitId: var_core_value_sig31A8,
              isSingle: !0x1,
              groupIds: Array[ox2a4f92(0x11f)](var_core_value_sig9DC0)
            }
          }), var_core_value_sigA8C3[ox2a4f92(0x13d)]({
            id: y["id"],
            params: {
              unitId: var_core_value_sig3585,
              subUnitId: var_core_value_sig31A8,
              sparklineConfigMap: var_core_value_sig95F0
            }
          }), (0x0, e["sequenceExecute"])(var_core_value_sig8EC2, var_core_value_sig8BFA)[ox2a4f92(0x13f)] ? (var_core_value_sig931A[ox2a4f92(0x194)]({
            unitID: var_core_value_sig3585,
            undoMutations: var_core_value_sigA8C3,
            redoMutations: var_core_value_sig8EC2
          }), !0x0) : !0x1;
        }
      }
      if (var_core_value_sig6217) {
        let var_core_value_sig6C4A = var_core_value_sigF612[ox2a4f92(0x140)];
        if (!var_core_value_sig6C4A) return !0x1;
        let {
            groupId: var_core_value_sig73D9,
            sourceRanges: var_core_value_sigEAF8,
            targetRanges: var_core_value_sig0455,
            resetType: var_core_value_sig737C,
            primary: var_core_value_sig5AF5
          } = var_core_value_sig6C4A,
          var_core_value_sig9DE4 = [],
          var_core_value_sig77FA = [];
        var_core_value_sig9DE4[ox2a4f92(0x13d)]({
          id: b["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            ranges: var_core_value_sigA4DA,
            isSingle: !0x1,
            groupIds: [var_core_value_sig73D9]
          }
        }), var_core_value_sig77FA[ox2a4f92(0x13d)]({
          id: b["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            ranges: var_core_value_sigA4DA,
            isSingle: !0x1,
            groupIds: [var_core_value_sig73D9]
          }
        });
        let var_core_value_sigA4A7;
        var_core_value_sig737C === ox2a4f92(0x10b) ? (var_core_value_sigA4A7 = new e[ox2a4f92(0x122)](var_core_value_sigB805[ox2a4f92(0x161)]["clone"]()), var_core_value_sigA4A7[ox2a4f92(0xd2)](var_core_value_sig5AF5[ox2a4f92(0xbb)], var_core_value_sig5AF5[ox2a4f92(0xa0)]), var_core_value_sigA4A7[ox2a4f92(0x173)](var_core_value_sig0455[0x0][ox2a4f92(0x16b)], var_core_value_sig0455[0x0][ox2a4f92(0xa7)], var_core_value_sigEAF8[0x0])) : var_core_value_sigA4A7 = i(var_core_value_sigEAF8, var_core_value_sig0455);
        let var_core_value_sigA4DF = {
            config: e[ox2a4f92(0xed)][ox2a4f92(0xc8)](var_core_value_sigB805[ox2a4f92(0xa9)]),
            sparklines: var_core_value_sigA4A7[ox2a4f92(0x186)]()
          },
          var_core_value_sigCC9D = {
            config: e[ox2a4f92(0xed)][ox2a4f92(0xc8)](var_core_value_sigB805["config"]),
            sparklines: e["Tools"]["deepClone"](var_core_value_sigB805[ox2a4f92(0x161)][ox2a4f92(0xd5)]())
          };
        return var_core_value_sig9DE4[ox2a4f92(0x13d)]({
          id: y["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            sparklineConfigMap: {
              [var_core_value_sig73D9]: var_core_value_sigA4DF
            }
          }
        }), var_core_value_sig77FA["push"]({
          id: y["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            sparklineConfigMap: {
              [var_core_value_sig73D9]: var_core_value_sigCC9D
            }
          }
        }), (0x0, e["sequenceExecute"])(var_core_value_sig9DE4, var_core_value_sig8BFA)["result"] ? (var_core_value_sig931A["pushUndoRedo"]({
          unitID: var_core_value_sig3585,
          undoMutations: var_core_value_sig77FA,
          redoMutations: var_core_value_sig9DE4
        }), !0x0) : !0x1;
      } else {
        let var_core_value_sig90F5 = [],
          var_core_value_sigD2BA = [],
          var_core_value_sigCD3A = new Set(),
          var_core_value_sig519D = {};
        return var_core_value_sigA4DA[ox2a4f92(0xca)](var_core_value_sig9CCB => {
          const var_core_value_sigE718 = ox2a4f92;
          let {
            startRow: var_core_value_sigAEC8,
            endRow: var_core_value_sigB977,
            startColumn: var_core_value_sig2949,
            endColumn: var_core_value_sig308A
          } = var_core_value_sig9CCB;
          for (let var_core_value_sig66C0 = var_core_value_sigAEC8; var_core_value_sig66C0 <= var_core_value_sigB977; var_core_value_sig66C0++) for (let var_core_value_sigE235 = var_core_value_sig2949; var_core_value_sigE235 <= var_core_value_sig308A; var_core_value_sigE235++) {
            var var_core_value_sig528D;
            let var_core_value_sig3E71 = var_core_value_sig6FC0 == null || (var_core_value_sig528D = var_core_value_sig6FC0[var_core_value_sigE718(0xb0)][var_core_value_sigE718(0x17b)](var_core_value_sig66C0, var_core_value_sigE235)) == null ? void 0x0 : var_core_value_sig528D[var_core_value_sigE718(0xfc)];
            if (var_core_value_sig3E71) {
              var_core_value_sigCD3A[var_core_value_sigE718(0x168)](var_core_value_sig3E71);
              let var_core_value_sigDB4A = var_core_value_sig1951["getSparklineById"](var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sig3E71);
              var_core_value_sigDB4A && (var_core_value_sig519D[var_core_value_sig3E71] = {
                config: e[var_core_value_sigE718(0xed)][var_core_value_sigE718(0xc8)](var_core_value_sigDB4A[var_core_value_sigE718(0xa9)]),
                sparklines: e[var_core_value_sigE718(0xed)][var_core_value_sigE718(0xc8)](var_core_value_sigDB4A["sparklines"][var_core_value_sigE718(0xd5)]())
              });
            }
          }
        }), var_core_value_sigD2BA[ox2a4f92(0x13d)]({
          id: C["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            groupIds: Array["from"](var_core_value_sigCD3A),
            config: {
              config: e["Tools"][ox2a4f92(0xc8)](var_core_value_sigB805[ox2a4f92(0xa9)]),
              sparklines: var_core_value_sigB805[ox2a4f92(0x161)][ox2a4f92(0x186)]()
            }
          }
        }), var_core_value_sig90F5[ox2a4f92(0x13d)]({
          id: b["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            isSingle: !0x1,
            groupIds: Array[ox2a4f92(0x11f)](var_core_value_sigCD3A)
          }
        }), var_core_value_sig90F5[ox2a4f92(0x13d)]({
          id: y["id"],
          params: {
            unitId: var_core_value_sig3585,
            subUnitId: var_core_value_sig31A8,
            sparklineConfigMap: var_core_value_sig519D
          }
        }), (0x0, e[ox2a4f92(0xe3)])(var_core_value_sigD2BA, var_core_value_sig8BFA)[ox2a4f92(0x13f)] ? (var_core_value_sig931A["pushUndoRedo"]({
          unitID: var_core_value_sig3585,
          undoMutations: var_core_value_sig90F5,
          redoMutations: var_core_value_sigD2BA
        }), !0x0) : !0x1;
      }
    }
  };
var T = "@univerjs-pro/sheets-sparkline",
  E = "1.0.0-insiders.20260907-70fc579";
const D = {};
let O = class extends e["Disposable"] {
  constructor(var_core_value_sigC7E7, var_core_value_sig6E1C, var_core_value_sigFABC, var_core_value_sig413D) {
    super(), this["_sparklineDataSourceModel"] = var_core_value_sigC7E7, this[ox2a0f5f(0xf9)] = var_core_value_sig6E1C, this[ox2a0f5f(0xdf)] = var_core_value_sigFABC, this[ox2a0f5f(0x98)] = var_core_value_sig413D, this[ox2a0f5f(0x119)]();
  }
  ["_initClearWithSparkline"]() {
    this[ox1e8260(0x99)](this["_sheetInterceptorService"][ox1e8260(0x144)]({
      getMutations: var_core_value_sigA309 => {
        const var_core_value_sig9E20 = ox1e8260;
        let var_core_value_sig26BB = [],
          var_core_value_sig19B4 = [];
        if (var_core_value_sigA309["id"] === t[var_core_value_sig9E20(0x93)]["id"]) {
          let var_core_value_sig9D15 = (0x0, t[var_core_value_sig9E20(0x129)])(this[var_core_value_sig9E20(0xdf)], var_core_value_sigA309[var_core_value_sig9E20(0x14f)]);
          if (!var_core_value_sig9D15) return {
            redos: var_core_value_sig26BB,
            undos: var_core_value_sig19B4
          };
          let {
              unitId: var_core_value_sigB785,
              subUnitId: var_core_value_sig130F
            } = var_core_value_sig9D15,
            var_core_value_sigC0E3 = this["_sheetSelectionService"][var_core_value_sig9E20(0xe5)]()[var_core_value_sig9E20(0xab)](var_core_value_sig7664 => var_core_value_sig7664["range"]),
            var_core_value_sig52F7 = new Set(),
            var_core_value_sig866F = {},
            var_core_value_sigDE3D = {};
          var_core_value_sigC0E3[var_core_value_sig9E20(0xca)](var_core_value_sig2281 => {
            const var_core_value_sig5E86 = var_core_value_sig9E20;
            e[var_core_value_sig5E86(0x131)]["foreach"](var_core_value_sig2281, (var_core_value_sig01B3, var_core_value_sig7442) => {
              const var_core_value_sigDF87 = var_core_value_sig5E86;
              let var_core_value_sig9EE0 = this["_sparklineDataSourceModel"][var_core_value_sigDF87(0xc5)](var_core_value_sigB785, var_core_value_sig130F, var_core_value_sig01B3, var_core_value_sig7442);
              if (var_core_value_sig9EE0 && !var_core_value_sig52F7["has"](var_core_value_sig9EE0)) {
                let var_core_value_sig6418 = this[var_core_value_sigDF87(0x15d)][var_core_value_sigDF87(0xf0)](var_core_value_sigB785, var_core_value_sig130F, var_core_value_sig9EE0);
                var_core_value_sig6418 && (var_core_value_sig52F7[var_core_value_sigDF87(0x168)](var_core_value_sig9EE0), var_core_value_sig866F[var_core_value_sig9EE0] = {
                  config: e[var_core_value_sigDF87(0xed)][var_core_value_sigDF87(0xc8)](var_core_value_sig6418["config"]),
                  sparklines: e[var_core_value_sigDF87(0xed)][var_core_value_sigDF87(0xc8)](var_core_value_sig6418["sparklines"]["clone"]())
                }, var_core_value_sigDE3D[var_core_value_sig9EE0] = {
                  config: e[var_core_value_sigDF87(0xed)][var_core_value_sigDF87(0xc8)](var_core_value_sig6418[var_core_value_sigDF87(0xa9)]),
                  sparklines: e["Tools"]["deepClone"](var_core_value_sig6418["sparklines"][var_core_value_sigDF87(0xd5)]())
                });
              }
            });
          }), Object[var_core_value_sig9E20(0xf1)](var_core_value_sigDE3D)[var_core_value_sig9E20(0xca)](var_core_value_sig6998 => {
            const var_core_value_sigF639 = var_core_value_sig9E20;
            let var_core_value_sigEAE5 = var_core_value_sig6998[var_core_value_sigF639(0x161)];
            new e[var_core_value_sigF639(0x122)](var_core_value_sigEAE5)[var_core_value_sigF639(0xae)]((var_core_value_sigF051, var_core_value_sig0B45, var_core_value_sig36F8) => {
              const var_core_value_sig03E1 = var_core_value_sigF639;
              var_core_value_sigC0E3[var_core_value_sig03E1(0x18f)](var_core_value_sig1896 => e[var_core_value_sig03E1(0x191)][var_core_value_sig03E1(0xa6)](var_core_value_sig1896, (0x0, e[var_core_value_sig03E1(0x19c)])(var_core_value_sigF051, var_core_value_sig0B45))) && delete var_core_value_sigEAE5[var_core_value_sigF051][var_core_value_sig0B45];
            });
          }), var_core_value_sig52F7[var_core_value_sig9E20(0xa5)] > 0x0 && (var_core_value_sig26BB[var_core_value_sig9E20(0x13d)]({
            id: b["id"],
            params: {
              unitId: var_core_value_sigB785,
              subUnitId: var_core_value_sig130F,
              groupIds: Array["from"](var_core_value_sig52F7),
              isSingle: !0x1
            }
          }), var_core_value_sig19B4["push"]({
            id: b["id"],
            params: {
              unitId: var_core_value_sigB785,
              subUnitId: var_core_value_sig130F,
              groupIds: Array[var_core_value_sig9E20(0x11f)](var_core_value_sig52F7),
              isSingle: !0x1
            }
          })), Object[var_core_value_sig9E20(0xa1)](var_core_value_sigDE3D)[var_core_value_sig9E20(0x196)] > 0x0 && var_core_value_sig26BB[var_core_value_sig9E20(0x13d)]({
            id: y["id"],
            params: {
              unitId: var_core_value_sigB785,
              subUnitId: var_core_value_sig130F,
              sparklineConfigMap: var_core_value_sigDE3D
            }
          }), Object[var_core_value_sig9E20(0xa1)](var_core_value_sig866F)[var_core_value_sig9E20(0x196)] > 0x0 && var_core_value_sig19B4[var_core_value_sig9E20(0x13d)]({
            id: y["id"],
            params: {
              unitId: var_core_value_sigB785,
              subUnitId: var_core_value_sig130F,
              sparklineConfigMap: var_core_value_sig866F
            }
          });
        }
        return {
          redos: var_core_value_sig26BB,
          undos: var_core_value_sig19B4
        };
      }
    }));
  }
};
O = _([g(0x0, (0x0, e["Inject"])(v)), g(0x1, (0x0, e["Inject"])(t["SheetInterceptorService"])), g(0x2, (0x0, e["Inject"])(e["IUniverInstanceService"])), g(0x3, (0x0, e["Inject"])(t["SheetsSelectionsService"]))], O);
let k = class extends e["Disposable"] {
  constructor(var_core_value_sig5BCE, var_core_value_sig8EF0, var_core_value_sig78AC) {
    super(), this[ox3242ba(0x189)] = var_core_value_sig5BCE, this[ox3242ba(0x15d)] = var_core_value_sig8EF0, this[ox3242ba(0x158)] = var_core_value_sig78AC, this["_initDataChangeListener"](), this[ox3242ba(0xac)]();
  }
  ["_initDataChangeListener"]() {
    this[ox3bcfa9(0x99)](this[ox3bcfa9(0x189)][ox3bcfa9(0xcb)](var_core_value_sig218A => {
      const var_core_value_sig14CB = ox3bcfa9;
      if (var_core_value_sig218A["id"] === t[var_core_value_sig14CB(0xb5)]["id"]) {
        let {
            cellValue: var_core_value_sigF175,
            unitId: var_core_value_sig6A18,
            subUnitId: var_core_value_sig4E3D
          } = var_core_value_sig218A["params"],
          var_core_value_sig49B0 = new e[var_core_value_sig14CB(0x122)](var_core_value_sigF175),
          var_core_value_sig2547 = new Set(),
          var_core_value_sigBCA9 = this[var_core_value_sig14CB(0x15d)][var_core_value_sig14CB(0xea)](var_core_value_sig6A18, var_core_value_sig4E3D);
        if (!var_core_value_sigBCA9) return;
        let var_core_value_sig4CDF = Array[var_core_value_sig14CB(0x11f)](var_core_value_sigBCA9);
        var_core_value_sig49B0["forValue"]((var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82) => {
          const var_core_value_sigCF4E = var_core_value_sig14CB;
          let var_core_value_sig6CAD = (0x0, e[var_core_value_sigCF4E(0x19c)])(var_core_value_sigE94C, var_core_value_sig6D47);
          for (let var_core_value_sigBB57 = 0x0; var_core_value_sigBB57 < var_core_value_sig4CDF[var_core_value_sigCF4E(0x196)]; var_core_value_sigBB57++) {
            let [var_core_value_sig0285, var_core_value_sig777D] = var_core_value_sig4CDF[var_core_value_sigBB57],
              var_core_value_sig3F4C = var_core_value_sig2547[var_core_value_sigCF4E(0xce)](var_core_value_sig0285);
            var_core_value_sig3F4C || var_core_value_sig777D[var_core_value_sigCF4E(0x161)][var_core_value_sigCF4E(0xae)]((var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E) => {
              const var_core_value_sig20C8 = var_core_value_sigCF4E;
              let var_core_value_sigE9A7 = var_core_value_sig877E;
              if (var_core_value_sigE9A7 && !var_core_value_sig3F4C && e[var_core_value_sig20C8(0x191)]["intersects"](var_core_value_sig6CAD, var_core_value_sigE9A7)) return var_core_value_sig2547[var_core_value_sig20C8(0x168)](var_core_value_sig0285), !0x0;
            });
          }
        }), var_core_value_sig2547[var_core_value_sig14CB(0xca)](var_core_value_sig8CF5 => {
          const var_core_value_sigDDD7 = var_core_value_sig14CB;
          this[var_core_value_sigDDD7(0x15d)]["clearSparklineCache"](var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig8CF5), this[var_core_value_sigDDD7(0x15d)]["updateSparklineExtraNum"](var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig8CF5);
        });
      } else {
        if (var_core_value_sig218A["id"] === t["ReorderRangeMutation"]["id"]) {
          let {
              range: var_core_value_sigB2CE,
              unitId: var_core_value_sig443C,
              subUnitId: var_core_value_sig39B1
            } = var_core_value_sig218A[var_core_value_sig14CB(0x14f)],
            var_core_value_sig210D = new Set(),
            var_core_value_sigB4B4 = this[var_core_value_sig14CB(0x15d)][var_core_value_sig14CB(0xea)](var_core_value_sig443C, var_core_value_sig39B1);
          if (!var_core_value_sigB4B4) return;
          let var_core_value_sigD407 = Array[var_core_value_sig14CB(0x11f)](var_core_value_sigB4B4);
          for (let var_core_value_sig7C4A = 0x0; var_core_value_sig7C4A < var_core_value_sigD407[var_core_value_sig14CB(0x196)]; var_core_value_sig7C4A++) {
            let [var_core_value_sigD65A, var_core_value_sig5A13] = var_core_value_sigD407[var_core_value_sig7C4A],
              var_core_value_sigF593 = var_core_value_sig210D["has"](var_core_value_sigD65A);
            var_core_value_sigF593 || var_core_value_sig5A13[var_core_value_sig14CB(0x161)][var_core_value_sig14CB(0xae)]((var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) => {
              const var_core_value_sig7B2A = var_core_value_sig14CB;
              let var_core_value_sig06CD = var_core_value_sig7F72;
              if (var_core_value_sig06CD && !var_core_value_sigF593 && e[var_core_value_sig7B2A(0x191)][var_core_value_sig7B2A(0xa6)](var_core_value_sigB2CE, var_core_value_sig06CD)) return var_core_value_sig210D[var_core_value_sig7B2A(0x168)](var_core_value_sigD65A), !0x0;
            });
          }
          var_core_value_sig210D[var_core_value_sig14CB(0xca)](var_core_value_sigE799 => {
            const var_core_value_sigB601 = var_core_value_sig14CB;
            this[var_core_value_sigB601(0x15d)][var_core_value_sigB601(0x124)](var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sigE799), this["_sparklineDataSourceModel"][var_core_value_sigB601(0x9a)](var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sigE799);
          });
        }
      }
    }));
  }
  ["_initExclusiveRangeChange"]() {
    this["disposeWithMe"](this[ox44d87d(0x158)][ox44d87d(0x145)][ox44d87d(0xe7)](var_core_value_sigFDEE => {
      const var_core_value_sigA676 = ox44d87d;
      let {
          unitId: var_core_value_sigC27E,
          subUnitId: var_core_value_sigA70D,
          ranges: var_core_value_sigCE10
        } = var_core_value_sigFDEE,
        var_core_value_sigA386 = this[var_core_value_sigA676(0x15d)][var_core_value_sigA676(0xea)](var_core_value_sigC27E, var_core_value_sigA70D);
      if (!var_core_value_sigA386) return;
      let var_core_value_sigCD82 = Array[var_core_value_sigA676(0x11f)](var_core_value_sigA386),
        var_core_value_sig44DD = new Set();
      for (let var_core_value_sig3F79 = 0x0; var_core_value_sig3F79 < var_core_value_sigCD82[var_core_value_sigA676(0x196)]; var_core_value_sig3F79++) {
        let [var_core_value_sig63F3, var_core_value_sig6A71] = var_core_value_sigCD82[var_core_value_sig3F79],
          var_core_value_sig3BF6 = var_core_value_sig44DD[var_core_value_sigA676(0xce)](var_core_value_sig63F3);
        var_core_value_sig3BF6 || var_core_value_sig6A71[var_core_value_sigA676(0x161)][var_core_value_sigA676(0xae)]((var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B) => {
          const var_core_value_sigCF89 = var_core_value_sigA676;
          let var_core_value_sig00CB = var_core_value_sig826B;
          if (var_core_value_sig00CB && !var_core_value_sig3BF6) {
            for (let var_core_value_sigA5F1 of var_core_value_sigCE10) if (e[var_core_value_sigCF89(0x191)][var_core_value_sigCF89(0xa6)](var_core_value_sigA5F1, var_core_value_sig00CB)) {
              var_core_value_sig44DD[var_core_value_sigCF89(0x168)](var_core_value_sig63F3);
              break;
            }
          }
        });
      }
      var_core_value_sig44DD["forEach"](var_core_value_sig880E => {
        const var_core_value_sigC9ED = var_core_value_sigA676;
        this[var_core_value_sigC9ED(0x15d)][var_core_value_sigC9ED(0x124)](var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sig880E), this["_sparklineDataSourceModel"]["updateSparklineExtraNum"](var_core_value_sigC27E, var_core_value_sigA70D, var_core_value_sig880E);
      });
    }));
  }
};
k = _([g(0x0, (0x0, e["Inject"])(e["ICommandService"])), g(0x1, (0x0, e["Inject"])(v)), g(0x2, (0x0, e["Inject"])(t["IExclusiveRangeService"]))], k);
let A = class extends e["Disposable"] {
  constructor(var_core_value_sig4CEF, var_core_value_sigD57D) {
    super(), this["_commandService"] = var_core_value_sig4CEF, this[ox2e4791(0x15d)] = var_core_value_sigD57D, this["_initHideRowColWithSparkline"]();
  }
  ["_initHideRowColWithSparkline"]() {
    this[ox1910ef(0x189)][ox1910ef(0xcb)](var_core_value_sig96FA => {
      const var_core_value_sigAB68 = ox1910ef;
      if (var_core_value_sig96FA["id"] === t[var_core_value_sigAB68(0x15e)]["id"] || var_core_value_sig96FA["id"] === t[var_core_value_sigAB68(0xbf)]["id"] || var_core_value_sig96FA["id"] === t["SetRowVisibleMutation"]["id"] || var_core_value_sig96FA["id"] === t[var_core_value_sigAB68(0x142)]["id"]) {
        let {
            ranges: var_core_value_sigB57B,
            unitId: var_core_value_sig780B,
            subUnitId: var_core_value_sig7D1B
          } = var_core_value_sig96FA[var_core_value_sigAB68(0x14f)],
          var_core_value_sig7BE0 = new Set(),
          var_core_value_sig7D40 = this["_sparklineDataSourceModel"]["getSubUnitSparkline"](var_core_value_sig780B, var_core_value_sig7D1B);
        if (!var_core_value_sig7D40) return;
        let var_core_value_sig6C7E = Array[var_core_value_sigAB68(0x11f)](var_core_value_sig7D40);
        var_core_value_sigB57B[var_core_value_sigAB68(0xca)](var_core_value_sig38CE => {
          const var_core_value_sig62B7 = var_core_value_sigAB68;
          e["Range"][var_core_value_sig62B7(0x156)](var_core_value_sig38CE, (var_core_value_sig77EE, var_core_value_sig9F76) => {
            const var_core_value_sigB008 = var_core_value_sig62B7;
            let var_core_value_sig8721 = (0x0, e[var_core_value_sigB008(0x19c)])(var_core_value_sig77EE, var_core_value_sig9F76);
            for (let var_core_value_sig3607 = 0x0; var_core_value_sig3607 < var_core_value_sig6C7E[var_core_value_sigB008(0x196)]; var_core_value_sig3607++) {
              let [var_core_value_sig97A2, var_core_value_sig07E9] = var_core_value_sig6C7E[var_core_value_sig3607],
                var_core_value_sig4F59 = var_core_value_sig7BE0[var_core_value_sigB008(0xce)](var_core_value_sig97A2);
              var_core_value_sig4F59 || var_core_value_sig07E9["sparklines"]["forValue"]((var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F) => {
                const var_core_value_sigEFD4 = var_core_value_sigB008;
                let var_core_value_sig861B = var_core_value_sigE90F;
                if (var_core_value_sig861B && !var_core_value_sig4F59 && e["Rectangle"][var_core_value_sigEFD4(0xa6)](var_core_value_sig8721, var_core_value_sig861B)) return var_core_value_sig7BE0[var_core_value_sigEFD4(0x168)](var_core_value_sig97A2), !0x0;
              });
            }
          });
        }), var_core_value_sig7BE0["forEach"](var_core_value_sig37A8 => {
          const var_core_value_sigA90D = var_core_value_sigAB68;
          this["_sparklineDataSourceModel"]["clearSparklineCache"](var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig37A8), this[var_core_value_sigA90D(0x15d)][var_core_value_sigA90D(0x9a)](var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig37A8);
        });
      }
    });
  }
};
A = _([g(0x0, (0x0, e["Inject"])(e["ICommandService"])), g(0x1, (0x0, e["Inject"])(v))], A);
let j = class extends e["Disposable"] {
  constructor(var_core_value_sig2CC7, var_core_value_sig4784, var_core_value_sigC39E) {
    super(), this["_commandService"] = var_core_value_sig2CC7, this["_sheetInterceptorService"] = var_core_value_sig4784, this[ox26fd22(0x15d)] = var_core_value_sigC39E, this[ox26fd22(0xf5)]();
  }
  ["_initMergeWithSparkline"]() {
    this[ox411dd4(0x99)](this[ox411dd4(0xf9)][ox411dd4(0x144)]({
      getMutations: var_core_value_sig040A => {
        const var_core_value_sig2AE0 = ox411dd4;
        let var_core_value_sigC349 = [],
          var_core_value_sig9D96 = [];
        if (var_core_value_sig040A["id"] === t[var_core_value_sig2AE0(0xb7)]["id"]) {
          let var_core_value_sig68BE = var_core_value_sig040A["params"];
          if (!var_core_value_sig68BE) return {
            redos: var_core_value_sigC349,
            undos: var_core_value_sig9D96
          };
          let {
              unitId: var_core_value_sig04C6,
              subUnitId: var_core_value_sigCA05,
              ranges: var_core_value_sig2F2B
            } = var_core_value_sig68BE,
            var_core_value_sig70AF = this[var_core_value_sig2AE0(0x15d)]["getSubUnitSparkline"](var_core_value_sig04C6, var_core_value_sigCA05);
          if (!var_core_value_sig70AF) return {
            redos: var_core_value_sigC349,
            undos: var_core_value_sig9D96
          };
          let var_core_value_sigD04E = {},
            var_core_value_sigB99B = {},
            var_core_value_sig5A75 = new Set();
          var_core_value_sig2F2B[var_core_value_sig2AE0(0xca)](var_core_value_sig7A3C => {
            const var_core_value_sig0511 = var_core_value_sig2AE0;
            let var_core_value_sig1F44 = var_core_value_sig7A3C[var_core_value_sig0511(0x16b)],
              var_core_value_sigCB04 = var_core_value_sig7A3C[var_core_value_sig0511(0xa7)];
            e["Range"][var_core_value_sig0511(0x156)](var_core_value_sig7A3C, (var_core_value_sig08BA, var_core_value_sigDBB5) => {
              const var_core_value_sigCFAC = var_core_value_sig0511;
              let var_core_value_sig237B = this[var_core_value_sigCFAC(0x15d)][var_core_value_sigCFAC(0xc5)](var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sig08BA, var_core_value_sigDBB5);
              if (var_core_value_sig237B && (var_core_value_sig08BA !== var_core_value_sig1F44 || var_core_value_sigDBB5 !== var_core_value_sigCB04)) {
                let var_core_value_sigB512 = this[var_core_value_sigCFAC(0x15d)][var_core_value_sigCFAC(0xf0)](var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sig237B);
                if (var_core_value_sigB512) {
                  var_core_value_sig5A75[var_core_value_sigCFAC(0x168)](var_core_value_sig237B);
                  let var_core_value_sigF564 = var_core_value_sigD04E[var_core_value_sig237B];
                  var_core_value_sigF564 || (var_core_value_sigF564 = {
                    config: e[var_core_value_sigCFAC(0xed)][var_core_value_sigCFAC(0xc8)](var_core_value_sigB512[var_core_value_sigCFAC(0xa9)]),
                    sparklines: new e["ObjectMatrix"](var_core_value_sigB512[var_core_value_sigCFAC(0x161)][var_core_value_sigCFAC(0xd5)]())
                  }, var_core_value_sigD04E[var_core_value_sig237B] = var_core_value_sigF564), var_core_value_sigF564[var_core_value_sigCFAC(0x161)]["realDeleteValue"](var_core_value_sig08BA, var_core_value_sigDBB5), var_core_value_sigB99B[var_core_value_sig237B] = {
                    config: e[var_core_value_sigCFAC(0xed)]["deepClone"](var_core_value_sigB512[var_core_value_sigCFAC(0xa9)]),
                    sparklines: e[var_core_value_sigCFAC(0xed)]["deepClone"](var_core_value_sigB512[var_core_value_sigCFAC(0x161)][var_core_value_sigCFAC(0xd5)]())
                  };
                }
              }
            });
          });
          for (let [var_core_value_sig947E, var_core_value_sig4545] of var_core_value_sig70AF) {
            let var_core_value_sigFEAB = var_core_value_sig4545["sparklines"];
            var_core_value_sigFEAB["forValue"]((var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744) => {
              const var_core_value_sigEAE2 = var_core_value_sig2AE0;
              for (let var_core_value_sig8CFA = 0x0; var_core_value_sig8CFA < var_core_value_sig2F2B[var_core_value_sigEAE2(0x196)]; var_core_value_sig8CFA++) {
                let var_core_value_sig5237 = var_core_value_sig2F2B[var_core_value_sig8CFA];
                if (e[var_core_value_sigEAE2(0x191)][var_core_value_sigEAE2(0x100)](var_core_value_sig5237, var_core_value_sigB744)) {
                  var_core_value_sig5A75["add"](var_core_value_sig947E);
                  let var_core_value_sig48BD = var_core_value_sigD04E[var_core_value_sig947E];
                  var_core_value_sig48BD || (var_core_value_sig48BD = {
                    config: e[var_core_value_sigEAE2(0xed)]["deepClone"](var_core_value_sig4545[var_core_value_sigEAE2(0xa9)]),
                    sparklines: new e[var_core_value_sigEAE2(0x122)](var_core_value_sigFEAB["clone"]())
                  }, var_core_value_sigD04E[var_core_value_sig947E] = var_core_value_sig48BD), var_core_value_sig48BD[var_core_value_sigEAE2(0x161)][var_core_value_sigEAE2(0xd2)](var_core_value_sigF2E6, var_core_value_sig34C8), var_core_value_sigB99B[var_core_value_sig947E] || (var_core_value_sigB99B[var_core_value_sig947E] = {
                    config: e[var_core_value_sigEAE2(0xed)][var_core_value_sigEAE2(0xc8)](var_core_value_sig4545[var_core_value_sigEAE2(0xa9)]),
                    sparklines: e[var_core_value_sigEAE2(0xed)][var_core_value_sigEAE2(0xc8)](var_core_value_sigFEAB[var_core_value_sigEAE2(0xd5)]())
                  });
                }
              }
            });
          }
          let var_core_value_sig7BAF = {};
          Object[var_core_value_sig2AE0(0x165)](var_core_value_sigD04E)[var_core_value_sig2AE0(0xca)](([var_core_value_sigF39A, var_core_value_sigF79C]) => {
            const var_core_value_sig2E54 = var_core_value_sig2AE0;
            var_core_value_sigF79C["sparklines"][var_core_value_sig2E54(0x138)]() && (var_core_value_sig7BAF[var_core_value_sigF39A] = {
              config: var_core_value_sigF79C[var_core_value_sig2E54(0xa9)],
              sparklines: var_core_value_sigF79C[var_core_value_sig2E54(0x161)][var_core_value_sig2E54(0xd5)]()
            });
          }), var_core_value_sig5A75[var_core_value_sig2AE0(0xa5)] && (var_core_value_sigC349["push"]({
            id: b["id"],
            params: {
              unitId: var_core_value_sig04C6,
              subUnitId: var_core_value_sigCA05,
              groupIds: Array[var_core_value_sig2AE0(0x11f)](var_core_value_sig5A75),
              isSingle: !0x1
            }
          }), var_core_value_sig9D96[var_core_value_sig2AE0(0x13d)]({
            id: b["id"],
            params: {
              unitId: var_core_value_sig04C6,
              subUnitId: var_core_value_sigCA05,
              groupIds: Array[var_core_value_sig2AE0(0x11f)](var_core_value_sig5A75),
              isSingle: !0x1
            }
          }), var_core_value_sigC349[var_core_value_sig2AE0(0x13d)]({
            id: y["id"],
            params: {
              unitId: var_core_value_sig04C6,
              subUnitId: var_core_value_sigCA05,
              sparklineConfigMap: var_core_value_sig7BAF
            }
          }), var_core_value_sig9D96["push"]({
            id: y["id"],
            params: {
              unitId: var_core_value_sig04C6,
              subUnitId: var_core_value_sigCA05,
              sparklineConfigMap: var_core_value_sigB99B
            }
          }));
        }
        return {
          redos: var_core_value_sigC349,
          undos: var_core_value_sig9D96
        };
      }
    }));
  }
};
j = _([g(0x0, (0x0, e["Inject"])(e["ICommandService"])), g(0x1, (0x0, e["Inject"])(t["SheetInterceptorService"])), g(0x2, (0x0, e["Inject"])(v))], j);
let M = class extends e["Disposable"] {
  constructor(var_core_value_sig16C7, var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8) {
    super(), this[ox289eca(0x189)] = var_core_value_sig16C7, this[ox289eca(0xcf)] = var_core_value_sig7481, this[ox289eca(0xdf)] = var_core_value_sig08A3, this[ox289eca(0x15d)] = var_core_value_sig77D8, h(this, ox289eca(0x127), new e[ox289eca(0x102)]()), this[ox289eca(0xdb)](), this["_initCorrectRangeWithSparkline"]();
  }
  ["_onRefRangeChange"]() {
    let var_core_value_sig78A3 = (var_core_value_sig2776, var_core_value_sig6FB2) => {
      let var_core_value_sigEB43 = this[ox12f2cb(0xdf)][ox12f2cb(0xd7)](e[ox12f2cb(0x185)][ox12f2cb(0xa8)]);
      if (!var_core_value_sigEB43 || !(var_core_value_sigEB43 != null && var_core_value_sigEB43["getSheetBySheetId"](var_core_value_sig6FB2))) return;
      this[ox12f2cb(0x127)][ox12f2cb(0xeb)]();
      let var_core_value_sig4186 = var_core_value_sig8F69 => this[ox12f2cb(0x111)](var_core_value_sig8F69, var_core_value_sig2776, var_core_value_sig6FB2),
        var_core_value_sigF963 = [],
        var_core_value_sigB608 = this[ox12f2cb(0x15d)][ox12f2cb(0xea)](var_core_value_sig2776, var_core_value_sig6FB2);
      if (var_core_value_sigB608) {
        for (let [var_core_value_sig7658, var_core_value_sigDCF5] of var_core_value_sigB608) var_core_value_sigDCF5["sparklines"][ox12f2cb(0xae)]((var_core_value_sigE347, var_core_value_sig3C5B, var_core_value_sig200B) => {
          const var_core_value_sig3863 = ox12f2cb;
          let var_core_value_sigC97C = (0x0, e["cellToRange"])(var_core_value_sigE347, var_core_value_sig3C5B);
          var_core_value_sigF963[var_core_value_sig3863(0x13d)](var_core_value_sigC97C);
        });
        var_core_value_sigF963[ox12f2cb(0xca)](var_core_value_sigC786 => {
          const var_core_value_sigC0D9 = ox12f2cb;
          this[var_core_value_sigC0D9(0x127)][var_core_value_sigC0D9(0x168)](this["_refRangeService"][var_core_value_sigC0D9(0xf2)](var_core_value_sigC786, var_core_value_sig4186, var_core_value_sig2776, var_core_value_sig6FB2));
        });
      }
    };
    this[ox35175e(0x99)](this["_commandService"][ox35175e(0xcb)](var_core_value_sigF866 => {
      const var_core_value_sig5EFB = ox35175e;
      if (var_core_value_sigF866["id"] === t[var_core_value_sig5EFB(0xa2)]["id"]) {
        let var_core_value_sig6884 = var_core_value_sigF866["params"],
          var_core_value_sig066E = var_core_value_sig6884[var_core_value_sig5EFB(0xc7)],
          var_core_value_sig9B0D = var_core_value_sig6884[var_core_value_sig5EFB(0x133)];
        if (!var_core_value_sig066E || !var_core_value_sig9B0D) return;
        var_core_value_sig78A3(var_core_value_sig9B0D, var_core_value_sig066E);
      }
      if (var_core_value_sigF866["id"] === C["id"] || var_core_value_sigF866["id"] === y["id"]) {
        let var_core_value_sig3D2C = var_core_value_sigF866[var_core_value_sig5EFB(0x14f)],
          var_core_value_sigC56D = var_core_value_sig3D2C[var_core_value_sig5EFB(0xc7)],
          var_core_value_sig3A17 = var_core_value_sig3D2C["unitId"];
        if (!var_core_value_sigC56D || !var_core_value_sig3A17) return;
        var_core_value_sig78A3(var_core_value_sig3A17, var_core_value_sigC56D);
      }
    }));
  }
  ["refRangeHandle"](var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6) {
    switch (var_core_value_sig649B["id"]) {
      case t[ox27ce17(0x199)]["id"]:
        return this["_getRefRangeMutationsByDeleteCols"](var_core_value_sig649B[ox27ce17(0x14f)], var_core_value_sig6256, var_core_value_sigE7A6);
      case t["RemoveRowCommand"]["id"]:
        return this[ox27ce17(0xde)](var_core_value_sig649B["params"], var_core_value_sig6256, var_core_value_sigE7A6);
      default:
        break;
    }
    return {
      redos: [],
      undos: []
    };
  }
  ["_getRefRangeMutationsByDeleteRows"](var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE) {
    var var_core_value_sig0567;
    let {
        range: var_core_value_sigA7F3
      } = var_core_value_sigB505,
      var_core_value_sigEACD = new Set(),
      var_core_value_sig901E = {},
      var_core_value_sigF7BB = {},
      var_core_value_sigFA38 = [],
      var_core_value_sig102B = [],
      var_core_value_sigA7DB = [],
      var_core_value_sig5EEE = [];
    if (!(0x0, t[ox27ad05(0x129)])(this[ox27ad05(0xdf)], {
      unitId: var_core_value_sig7428,
      subUnitId: var_core_value_sig1DCE
    })) return {
      redos: var_core_value_sig102B,
      undos: var_core_value_sigFA38
    };
    let var_core_value_sig65B4 = this["_sparklineDataSourceModel"][ox27ad05(0xea)](var_core_value_sig7428, var_core_value_sig1DCE);
    if (!var_core_value_sig65B4 || !((var_core_value_sig0567 = this[ox27ad05(0x15d)][ox27ad05(0xfb)]()[ox27ad05(0x17c)][ox27ad05(0xc9)](var_core_value_sig7428)) != null && (var_core_value_sig0567 = var_core_value_sig0567[ox27ad05(0xc9)](var_core_value_sig1DCE)) != null && var_core_value_sig0567[ox27ad05(0xb0)])) return {
      redos: var_core_value_sig102B,
      undos: var_core_value_sigFA38
    };
    for (let [var_core_value_sig3A85, var_core_value_sig2682] of var_core_value_sig65B4) {
      let var_core_value_sig938F = var_core_value_sig2682[ox27ad05(0x161)];
      var_core_value_sig938F[ox27ad05(0xae)]((var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sig4EB7) => {
        const var_core_value_sig73AF = ox27ad05;
        if (e["Rectangle"][var_core_value_sig73AF(0xa6)](var_core_value_sigA7F3, var_core_value_sig4EB7)) {
          var_core_value_sigEACD["add"](var_core_value_sig3A85);
          let var_core_value_sigC4B1 = var_core_value_sigF7BB[var_core_value_sig3A85];
          var_core_value_sigC4B1 || (var_core_value_sigC4B1 = {
            config: var_core_value_sig2682[var_core_value_sig73AF(0xa9)],
            sparklines: var_core_value_sig2682[var_core_value_sig73AF(0x161)][var_core_value_sig73AF(0xd5)]()
          }, var_core_value_sigF7BB[var_core_value_sig3A85] = var_core_value_sigC4B1);
          let var_core_value_sig1BD9 = var_core_value_sig901E[var_core_value_sig3A85];
          var_core_value_sig1BD9 || (var_core_value_sig1BD9 = {
            config: var_core_value_sig2682[var_core_value_sig73AF(0xa9)],
            sparklines: new e[var_core_value_sig73AF(0x122)](var_core_value_sig2682[var_core_value_sig73AF(0x161)]["clone"]())
          }, var_core_value_sig901E[var_core_value_sig3A85] = var_core_value_sig1BD9);
          let var_core_value_sigE43E = (0x0, t[var_core_value_sig73AF(0x16e)])(var_core_value_sig4EB7, {
            id: t["RemoveRowMutation"]["id"],
            params: var_core_value_sigB505
          });
          var_core_value_sigE43E ? var_core_value_sig1BD9[var_core_value_sig73AF(0x161)][var_core_value_sig73AF(0x173)](var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sigE43E) : var_core_value_sig1BD9[var_core_value_sig73AF(0x161)][var_core_value_sig73AF(0x173)](var_core_value_sigF0511, var_core_value_sig5825, {
            startRow: -0x270f,
            endRow: -0x270f,
            startColumn: -0x270f,
            endColumn: -0x270f,
            rangeType: e["RANGE_TYPE"][var_core_value_sig73AF(0xaf)]
          });
        }
      }), var_core_value_sig938F[ox27ad05(0xae)](var_core_value_sig548A => {
        const var_core_value_sigE026 = ox27ad05;
        if (var_core_value_sig548A <= var_core_value_sigA7F3[var_core_value_sigE026(0x16c)] && var_core_value_sig548A >= var_core_value_sigA7F3[var_core_value_sigE026(0x16b)]) {
          var_core_value_sigEACD[var_core_value_sigE026(0x168)](var_core_value_sig3A85);
          let var_core_value_sigA937 = var_core_value_sigF7BB[var_core_value_sig3A85];
          var_core_value_sigA937 || (var_core_value_sigA937 = {
            config: var_core_value_sig2682[var_core_value_sigE026(0xa9)],
            sparklines: var_core_value_sig2682[var_core_value_sigE026(0x161)][var_core_value_sigE026(0xd5)]()
          }, var_core_value_sigF7BB[var_core_value_sig3A85] = var_core_value_sigA937);
          let var_core_value_sigCAD5 = var_core_value_sig901E[var_core_value_sig3A85];
          var_core_value_sigCAD5 || (var_core_value_sigCAD5 = {
            config: var_core_value_sig2682[var_core_value_sigE026(0xa9)],
            sparklines: new e[var_core_value_sigE026(0x122)](var_core_value_sig2682[var_core_value_sigE026(0x161)][var_core_value_sigE026(0xd5)]())
          }, var_core_value_sig901E[var_core_value_sig3A85] = var_core_value_sigCAD5);
        }
      });
    }
    var_core_value_sigEACD["size"] > 0x0 && (var_core_value_sig5EEE[ox27ad05(0x13d)]({
      id: b["id"],
      params: {
        unitId: var_core_value_sig7428,
        subUnitId: var_core_value_sig1DCE,
        groupIds: Array[ox27ad05(0x11f)](var_core_value_sigEACD),
        isSingle: !0x1
      }
    }), var_core_value_sigA7DB[ox27ad05(0x13d)]({
      id: b["id"],
      params: {
        unitId: var_core_value_sig7428,
        subUnitId: var_core_value_sig1DCE,
        groupIds: Array["from"](var_core_value_sigEACD),
        isSingle: !0x1
      }
    }));
    let var_core_value_sigF98E = {},
      var_core_value_sigA470 = !0x1;
    return Object[ox27ad05(0x165)](var_core_value_sig901E)[ox27ad05(0xca)](([var_core_value_sig4BB5, var_core_value_sig6709]) => {
      const var_core_value_sig52CA = ox27ad05;
      var_core_value_sig6709["sparklines"][var_core_value_sig52CA(0x138)]() && (var_core_value_sigA470 = !0x0, var_core_value_sig6709[var_core_value_sig52CA(0x161)][var_core_value_sig52CA(0xc4)](var_core_value_sigA7F3[var_core_value_sig52CA(0x16b)], var_core_value_sigA7F3[var_core_value_sig52CA(0x16c)] - var_core_value_sigA7F3[var_core_value_sig52CA(0x16b)] + 0x1), var_core_value_sigF98E[var_core_value_sig4BB5] = {
        config: var_core_value_sig6709[var_core_value_sig52CA(0xa9)],
        sparklines: var_core_value_sig6709[var_core_value_sig52CA(0x161)][var_core_value_sig52CA(0xd5)]()
      });
    }), var_core_value_sigA470 && var_core_value_sig102B[ox27ad05(0x13d)]({
      id: y["id"],
      params: {
        unitId: var_core_value_sig7428,
        subUnitId: var_core_value_sig1DCE,
        sparklineConfigMap: var_core_value_sigF98E
      }
    }), Object[ox27ad05(0xa1)](var_core_value_sigF7BB)[ox27ad05(0x196)] > 0x0 && var_core_value_sigFA38[ox27ad05(0x13d)]({
      id: y["id"],
      params: {
        unitId: var_core_value_sig7428,
        subUnitId: var_core_value_sig1DCE,
        sparklineConfigMap: var_core_value_sigF7BB
      }
    }), {
      redos: var_core_value_sig102B,
      undos: var_core_value_sigFA38,
      preRedos: var_core_value_sigA7DB,
      preUndos: var_core_value_sig5EEE
    };
  }
  ["_getRefRangeMutationsByDeleteCols"](var_core_value_sig19A1, var_core_value_sig81F7, var_core_value_sigBE51) {
    var var_core_value_sigAAD1;
    let {
        range: var_core_value_sigBC1A
      } = var_core_value_sig19A1,
      var_core_value_sig3F3A = new Set(),
      var_core_value_sigA984 = {},
      var_core_value_sigA504 = {},
      var_core_value_sig05FF = [],
      var_core_value_sigFBF0 = [],
      var_core_value_sig2F95 = [],
      var_core_value_sigF0E1 = [];
    if (!(0x0, t[ox572d7b(0x129)])(this[ox572d7b(0xdf)], {
      unitId: var_core_value_sig81F7,
      subUnitId: var_core_value_sigBE51
    })) return {
      redos: var_core_value_sigFBF0,
      undos: var_core_value_sig05FF
    };
    let var_core_value_sig2D8D = this["_sparklineDataSourceModel"][ox572d7b(0xea)](var_core_value_sig81F7, var_core_value_sigBE51);
    if (!var_core_value_sig2D8D || !((var_core_value_sigAAD1 = this[ox572d7b(0x15d)][ox572d7b(0xfb)]()[ox572d7b(0x17c)]["get"](var_core_value_sig81F7)) != null && (var_core_value_sigAAD1 = var_core_value_sigAAD1[ox572d7b(0xc9)](var_core_value_sigBE51)) != null && var_core_value_sigAAD1[ox572d7b(0xb0)])) return {
      redos: var_core_value_sigFBF0,
      undos: var_core_value_sig05FF
    };
    for (let [var_core_value_sigC030, var_core_value_sig88F6] of var_core_value_sig2D8D) {
      let var_core_value_sigD948 = var_core_value_sig88F6[ox572d7b(0x161)];
      var_core_value_sigD948[ox572d7b(0xae)]((var_core_value_sig339E, var_core_value_sig7550, var_core_value_sig2983) => {
        const var_core_value_sigE1B0 = ox572d7b;
        if (e["Rectangle"][var_core_value_sigE1B0(0xa6)](var_core_value_sigBC1A, var_core_value_sig2983)) {
          var_core_value_sig3F3A["add"](var_core_value_sigC030);
          let var_core_value_sigE503 = var_core_value_sigA504[var_core_value_sigC030];
          var_core_value_sigE503 || (var_core_value_sigE503 = {
            config: var_core_value_sig88F6[var_core_value_sigE1B0(0xa9)],
            sparklines: var_core_value_sig88F6[var_core_value_sigE1B0(0x161)][var_core_value_sigE1B0(0xd5)]()
          }, var_core_value_sigA504[var_core_value_sigC030] = var_core_value_sigE503);
          let var_core_value_sig48DD = var_core_value_sigA984[var_core_value_sigC030];
          var_core_value_sig48DD || (var_core_value_sig48DD = {
            config: var_core_value_sig88F6["config"],
            sparklines: new e[var_core_value_sigE1B0(0x122)](var_core_value_sig88F6[var_core_value_sigE1B0(0x161)][var_core_value_sigE1B0(0xd5)]())
          }, var_core_value_sigA984[var_core_value_sigC030] = var_core_value_sig48DD);
          let var_core_value_sig5E6A = (0x0, t[var_core_value_sigE1B0(0x16e)])(var_core_value_sig2983, {
            id: t[var_core_value_sigE1B0(0x97)]["id"],
            params: var_core_value_sig19A1
          });
          var_core_value_sig5E6A ? var_core_value_sig48DD[var_core_value_sigE1B0(0x161)]["setValue"](var_core_value_sig339E, var_core_value_sig7550, var_core_value_sig5E6A) : var_core_value_sig48DD[var_core_value_sigE1B0(0x161)][var_core_value_sigE1B0(0x173)](var_core_value_sig339E, var_core_value_sig7550, {
            startRow: -0x270f,
            endRow: -0x270f,
            startColumn: -0x270f,
            endColumn: -0x270f,
            rangeType: e[var_core_value_sigE1B0(0x17d)][var_core_value_sigE1B0(0xaf)]
          });
        }
      }), var_core_value_sigD948[ox572d7b(0xae)]((var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sigB680) => {
        const var_core_value_sig1F64 = ox572d7b;
        if (var_core_value_sig1E5B <= var_core_value_sigBC1A[var_core_value_sig1F64(0xf3)] && var_core_value_sig1E5B >= var_core_value_sigBC1A[var_core_value_sig1F64(0xa7)]) {
          var_core_value_sig3F3A["add"](var_core_value_sigC030);
          let var_core_value_sigB7FC = var_core_value_sigA504[var_core_value_sigC030];
          var_core_value_sigB7FC || (var_core_value_sigB7FC = {
            config: var_core_value_sig88F6[var_core_value_sig1F64(0xa9)],
            sparklines: var_core_value_sig88F6[var_core_value_sig1F64(0x161)][var_core_value_sig1F64(0xd5)]()
          }, var_core_value_sigA504[var_core_value_sigC030] = var_core_value_sigB7FC);
          let var_core_value_sig9CD9 = var_core_value_sigA984[var_core_value_sigC030];
          var_core_value_sig9CD9 || (var_core_value_sig9CD9 = {
            config: var_core_value_sig88F6[var_core_value_sig1F64(0xa9)],
            sparklines: new e[var_core_value_sig1F64(0x122)](var_core_value_sig88F6["sparklines"][var_core_value_sig1F64(0xd5)]())
          }, var_core_value_sigA984[var_core_value_sigC030] = var_core_value_sig9CD9);
        }
      });
    }
    var_core_value_sig3F3A["size"] > 0x0 && (var_core_value_sigF0E1[ox572d7b(0x13d)]({
      id: b["id"],
      params: {
        unitId: var_core_value_sig81F7,
        subUnitId: var_core_value_sigBE51,
        groupIds: Array[ox572d7b(0x11f)](var_core_value_sig3F3A),
        isSingle: !0x1
      }
    }), var_core_value_sig2F95[ox572d7b(0x13d)]({
      id: b["id"],
      params: {
        unitId: var_core_value_sig81F7,
        subUnitId: var_core_value_sigBE51,
        groupIds: Array["from"](var_core_value_sig3F3A),
        isSingle: !0x1
      }
    }));
    let var_core_value_sigE5A6 = {},
      var_core_value_sigF449 = !0x1;
    return Object[ox572d7b(0x165)](var_core_value_sigA984)[ox572d7b(0xca)](([var_core_value_sig37DB, var_core_value_sig5542]) => {
      const var_core_value_sigE0A9 = ox572d7b;
      var_core_value_sig5542[var_core_value_sigE0A9(0x161)][var_core_value_sigE0A9(0x138)]() && (var_core_value_sigF449 = !0x0, var_core_value_sig5542[var_core_value_sigE0A9(0x161)][var_core_value_sigE0A9(0x9c)](var_core_value_sigBC1A[var_core_value_sigE0A9(0xa7)], var_core_value_sigBC1A[var_core_value_sigE0A9(0xf3)] - var_core_value_sigBC1A[var_core_value_sigE0A9(0xa7)] + 0x1), var_core_value_sigE5A6[var_core_value_sig37DB] = {
        config: var_core_value_sig5542[var_core_value_sigE0A9(0xa9)],
        sparklines: var_core_value_sig5542[var_core_value_sigE0A9(0x161)][var_core_value_sigE0A9(0xd5)]()
      });
    }), var_core_value_sigF449 && var_core_value_sigFBF0[ox572d7b(0x13d)]({
      id: y["id"],
      params: {
        unitId: var_core_value_sig81F7,
        subUnitId: var_core_value_sigBE51,
        sparklineConfigMap: var_core_value_sigE5A6
      }
    }), Object[ox572d7b(0xa1)](var_core_value_sigA504)[ox572d7b(0x196)] > 0x0 && var_core_value_sig05FF[ox572d7b(0x13d)]({
      id: y["id"],
      params: {
        unitId: var_core_value_sig81F7,
        subUnitId: var_core_value_sigBE51,
        sparklineConfigMap: var_core_value_sigA504
      }
    }), {
      redos: var_core_value_sigFBF0,
      undos: var_core_value_sig05FF,
      preRedos: var_core_value_sig2F95,
      preUndos: var_core_value_sigF0E1
    };
  }
  ["_initCorrectRangeWithSparkline"]() {
    this[ox2944bf(0x99)](this[ox2944bf(0x189)][ox2944bf(0xcb)](var_core_value_sigA73E => {
      const var_core_value_sig7620 = ox2944bf;
      if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0x117)]["id"]) {
        let {
            unitId: var_core_value_sigBE5E,
            subUnitId: var_core_value_sig0281,
            range: var_core_value_sigED71
          } = var_core_value_sigA73E[var_core_value_sig7620(0x14f)],
          var_core_value_sig281C = var_core_value_sigED71["startColumn"],
          var_core_value_sig3C92 = var_core_value_sigED71["endColumn"] - var_core_value_sigED71[var_core_value_sig7620(0xa7)] + 0x1,
          var_core_value_sigB16B = this[var_core_value_sig7620(0x15d)]["getSubUnitSparkline"](var_core_value_sigBE5E, var_core_value_sig0281);
        if (!var_core_value_sigB16B) return;
        for (let [var_core_value_sigDD1C, var_core_value_sig2C39] of var_core_value_sigB16B) {
          this["_sparklineDataSourceModel"][var_core_value_sig7620(0x124)](var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigDD1C);
          let var_core_value_sigFD0C = var_core_value_sig2C39[var_core_value_sig7620(0x161)];
          var_core_value_sigFD0C[var_core_value_sig7620(0xae)]((var_core_value_sigE68A, var_core_value_sig3E68, var_core_value_sigF4C5) => {
            const var_core_value_sig5410 = var_core_value_sig7620;
            let var_core_value_sig492F = {
              ...var_core_value_sigF4C5
            };
            var_core_value_sig281C <= var_core_value_sig492F[var_core_value_sig5410(0xa7)] ? (var_core_value_sig492F[var_core_value_sig5410(0xa7)] += var_core_value_sig3C92, var_core_value_sig492F[var_core_value_sig5410(0xf3)] += var_core_value_sig3C92) : var_core_value_sig281C > var_core_value_sig492F[var_core_value_sig5410(0xf3)] || (var_core_value_sig492F[var_core_value_sig5410(0xf3)] += var_core_value_sig3C92), var_core_value_sigFD0C[var_core_value_sig5410(0x173)](var_core_value_sigE68A, var_core_value_sig3E68, var_core_value_sig492F);
          });
          let var_core_value_sig849B = var_core_value_sigFD0C[var_core_value_sig7620(0x186)]();
          for (let var_core_value_sig8EA0 in var_core_value_sig849B) {
            let var_core_value_sig2E11 = var_core_value_sig849B[Number(var_core_value_sig8EA0)];
            if (!var_core_value_sig2E11) continue;
            let var_core_value_sig5B69 = Object[var_core_value_sig7620(0xa1)](var_core_value_sig2E11)[var_core_value_sig7620(0xab)](Number),
              var_core_value_sigB098 = Math[var_core_value_sig7620(0x126)](...var_core_value_sig5B69);
            for (let var_core_value_sigBB00 = var_core_value_sigB098; var_core_value_sigBB00 >= var_core_value_sig281C; var_core_value_sigBB00--) var_core_value_sigBB00 >= var_core_value_sig281C && var_core_value_sig2E11[var_core_value_sigBB00] && (var_core_value_sig2E11[var_core_value_sigBB00 + var_core_value_sig3C92] = var_core_value_sig2E11[var_core_value_sigBB00], delete var_core_value_sig2E11[var_core_value_sigBB00]);
          }
          this["_sparklineDataSourceModel"][var_core_value_sig7620(0x9a)](var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigDD1C);
        }
      } else {
        if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0x176)]["id"]) {
          let {
              unitId: var_core_value_sigB7D1,
              subUnitId: var_core_value_sig64F0,
              range: var_core_value_sig85B1
            } = var_core_value_sigA73E["params"],
            var_core_value_sig3141 = var_core_value_sig85B1[var_core_value_sig7620(0x16b)],
            var_core_value_sig2162 = var_core_value_sig85B1["endRow"] - var_core_value_sig85B1[var_core_value_sig7620(0x16b)] + 0x1,
            var_core_value_sig2EAD = this[var_core_value_sig7620(0x15d)]["getSubUnitSparkline"](var_core_value_sigB7D1, var_core_value_sig64F0);
          if (!var_core_value_sig2EAD) return;
          for (let [var_core_value_sig5F1A, var_core_value_sigB455] of var_core_value_sig2EAD) {
            this[var_core_value_sig7620(0x15d)]["clearSparklineCache"](var_core_value_sigB7D1, var_core_value_sig64F0, var_core_value_sig5F1A);
            let var_core_value_sigA6F6 = var_core_value_sigB455["sparklines"];
            var_core_value_sigA6F6[var_core_value_sig7620(0xae)]((var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig2B65) => {
              const var_core_value_sigD7EA = var_core_value_sig7620;
              let var_core_value_sigB33B = {
                ...var_core_value_sig2B65
              };
              var_core_value_sig3141 <= var_core_value_sigB33B[var_core_value_sigD7EA(0x16b)] ? (var_core_value_sigB33B[var_core_value_sigD7EA(0x16b)] += var_core_value_sig2162, var_core_value_sigB33B[var_core_value_sigD7EA(0x16c)] += var_core_value_sig2162) : var_core_value_sig3141 > var_core_value_sigB33B[var_core_value_sigD7EA(0x16c)] || (var_core_value_sigB33B[var_core_value_sigD7EA(0x16c)] += var_core_value_sig2162), var_core_value_sigA6F6[var_core_value_sigD7EA(0x173)](var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sigB33B);
            });
            let var_core_value_sigCDDA = var_core_value_sigA6F6[var_core_value_sig7620(0x186)](),
              var_core_value_sigE243 = Object["keys"](var_core_value_sigCDDA)[var_core_value_sig7620(0xab)](Number),
              var_core_value_sig74A8 = Math["max"](...var_core_value_sigE243);
            for (let var_core_value_sig24B9 = var_core_value_sig74A8; var_core_value_sig24B9 >= var_core_value_sig3141; var_core_value_sig24B9--) var_core_value_sig24B9 >= var_core_value_sig3141 && var_core_value_sigCDDA[var_core_value_sig24B9] && (var_core_value_sigCDDA[var_core_value_sig24B9 + var_core_value_sig2162] = var_core_value_sigCDDA[var_core_value_sig24B9], delete var_core_value_sigCDDA[var_core_value_sig24B9]);
            this[var_core_value_sig7620(0x15d)][var_core_value_sig7620(0x9a)](var_core_value_sigB7D1, var_core_value_sig64F0, var_core_value_sig5F1A);
          }
        } else {
          if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0x97)]["id"]) {
            let {
                range: var_core_value_sig5241,
                unitId: var_core_value_sigC6E5,
                subUnitId: var_core_value_sigCEFB
              } = var_core_value_sigA73E["params"],
              var_core_value_sig1537 = this[var_core_value_sig7620(0x15d)][var_core_value_sig7620(0xea)](var_core_value_sigC6E5, var_core_value_sigCEFB);
            if (!var_core_value_sig1537) return;
            for (let [var_core_value_sig21B2, var_core_value_sigDE08] of var_core_value_sig1537) {
              let var_core_value_sigE627 = var_core_value_sigDE08[var_core_value_sig7620(0x161)];
              var_core_value_sigE627[var_core_value_sig7620(0xae)]((var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259) => {
                const var_core_value_sig9C9F = var_core_value_sig7620;
                let var_core_value_sigFDEA = (0x0, t[var_core_value_sig9C9F(0x16e)])(var_core_value_sigC259, var_core_value_sigA73E);
                var_core_value_sigFDEA ? var_core_value_sigE627[var_core_value_sig9C9F(0x173)](var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigFDEA) : var_core_value_sigE627[var_core_value_sig9C9F(0x173)](var_core_value_sig7E54, var_core_value_sig9A8D, {
                  startRow: -0x270f,
                  endRow: -0x270f,
                  startColumn: -0x270f,
                  endColumn: -0x270f,
                  rangeType: e[var_core_value_sig9C9F(0x17d)][var_core_value_sig9C9F(0xaf)]
                });
              }), var_core_value_sigE627[var_core_value_sig7620(0x9c)](var_core_value_sig5241[var_core_value_sig7620(0xa7)], var_core_value_sig5241["endColumn"] - var_core_value_sig5241[var_core_value_sig7620(0xa7)] + 0x1);
            }
            this["_sparklineDataSourceModel"]["reBuildAnchorCache"](var_core_value_sigC6E5, var_core_value_sigCEFB);
          } else {
            if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0x153)]["id"]) {
              let {
                  range: var_core_value_sigACCB,
                  unitId: var_core_value_sig7F33,
                  subUnitId: var_core_value_sig0C53
                } = var_core_value_sigA73E[var_core_value_sig7620(0x14f)],
                var_core_value_sigEA04 = this[var_core_value_sig7620(0x15d)][var_core_value_sig7620(0xea)](var_core_value_sig7F33, var_core_value_sig0C53);
              if (!var_core_value_sigEA04) return;
              for (let [var_core_value_sigEF3E, var_core_value_sig273D] of var_core_value_sigEA04) {
                let var_core_value_sig86D0 = var_core_value_sig273D[var_core_value_sig7620(0x161)];
                var_core_value_sig86D0[var_core_value_sig7620(0xae)]((var_core_value_sig429F, var_core_value_sigF62A, var_core_value_sig8178) => {
                  const var_core_value_sigE9ED = var_core_value_sig7620;
                  let var_core_value_sigB577 = (0x0, t[var_core_value_sigE9ED(0x16e)])(var_core_value_sig8178, var_core_value_sigA73E);
                  var_core_value_sigB577 ? var_core_value_sig86D0["setValue"](var_core_value_sig429F, var_core_value_sigF62A, var_core_value_sigB577) : var_core_value_sig86D0[var_core_value_sigE9ED(0x173)](var_core_value_sig429F, var_core_value_sigF62A, {
                    startRow: -0x270f,
                    endRow: -0x270f,
                    startColumn: -0x270f,
                    endColumn: -0x270f,
                    rangeType: e[var_core_value_sigE9ED(0x17d)][var_core_value_sigE9ED(0xaf)]
                  });
                }), var_core_value_sig86D0[var_core_value_sig7620(0xc4)](var_core_value_sigACCB["startRow"], var_core_value_sigACCB[var_core_value_sig7620(0x16c)] - var_core_value_sigACCB["startRow"] + 0x1);
              }
              this[var_core_value_sig7620(0x15d)]["reBuildAnchorCache"](var_core_value_sig7F33, var_core_value_sig0C53);
            } else {
              if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0x130)]["id"]) {
                let {
                    unitId: var_core_value_sig9A0D,
                    subUnitId: var_core_value_sigA319,
                    sourceRange: var_core_value_sig2D58,
                    targetRange: var_core_value_sig223F
                  } = var_core_value_sigA73E[var_core_value_sig7620(0x14f)],
                  var_core_value_sigD749 = this["_sparklineDataSourceModel"]["getSubUnitSparkline"](var_core_value_sig9A0D, var_core_value_sigA319);
                if (!var_core_value_sigD749) return;
                for (let [var_core_value_sig4CD2, var_core_value_sig48CA] of var_core_value_sigD749) {
                  let var_core_value_sig9572 = var_core_value_sig48CA["sparklines"];
                  var_core_value_sig9572[var_core_value_sig7620(0xae)]((var_core_value_sig2BCF, var_core_value_sig0D69, var_core_value_sig480E) => {
                    const var_core_value_sig26DB = var_core_value_sig7620;
                    let var_core_value_sigF0F9 = (0x0, t["adjustRangeOnMutation"])(var_core_value_sig480E, var_core_value_sigA73E);
                    var_core_value_sigF0F9 ? var_core_value_sig9572[var_core_value_sig26DB(0x173)](var_core_value_sig2BCF, var_core_value_sig0D69, var_core_value_sigF0F9) : var_core_value_sig9572[var_core_value_sig26DB(0x173)](var_core_value_sig2BCF, var_core_value_sig0D69, {
                      startRow: -0x270f,
                      endRow: -0x270f,
                      startColumn: -0x270f,
                      endColumn: -0x270f,
                      rangeType: e[var_core_value_sig26DB(0x17d)]["NORMAL"]
                    });
                  }), var_core_value_sig9572[var_core_value_sig7620(0x9e)](var_core_value_sig2D58[var_core_value_sig7620(0xa7)], var_core_value_sig2D58["endColumn"] - var_core_value_sig2D58[var_core_value_sig7620(0xa7)] + 0x1, var_core_value_sig223F[var_core_value_sig7620(0xa7)]);
                }
                this[var_core_value_sig7620(0x15d)]["reBuildAnchorCache"](var_core_value_sig9A0D, var_core_value_sigA319);
              } else {
                if (var_core_value_sigA73E["id"] === t[var_core_value_sig7620(0xc0)]["id"]) {
                  let {
                      unitId: var_core_value_sig50AF,
                      subUnitId: var_core_value_sigA942,
                      sourceRange: var_core_value_sigA621,
                      targetRange: var_core_value_sigBBFF
                    } = var_core_value_sigA73E["params"],
                    var_core_value_sig8889 = this[var_core_value_sig7620(0x15d)][var_core_value_sig7620(0xea)](var_core_value_sig50AF, var_core_value_sigA942);
                  if (!var_core_value_sig8889) return;
                  for (let [var_core_value_sigD873, var_core_value_sigA12B] of var_core_value_sig8889) {
                    let var_core_value_sig1A0F = var_core_value_sigA12B[var_core_value_sig7620(0x161)];
                    var_core_value_sig1A0F[var_core_value_sig7620(0xae)]((var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sig76BA) => {
                      const var_core_value_sigFBFA = var_core_value_sig7620;
                      let var_core_value_sigF602 = (0x0, t[var_core_value_sigFBFA(0x16e)])(var_core_value_sig76BA, var_core_value_sigA73E);
                      var_core_value_sigF602 ? var_core_value_sig1A0F[var_core_value_sigFBFA(0x173)](var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sigF602) : var_core_value_sig1A0F[var_core_value_sigFBFA(0x173)](var_core_value_sig4D4C, var_core_value_sigC9E0, {
                        startRow: -0x270f,
                        endRow: -0x270f,
                        startColumn: -0x270f,
                        endColumn: -0x270f,
                        rangeType: e["RANGE_TYPE"]["NORMAL"]
                      });
                    }), var_core_value_sig1A0F[var_core_value_sig7620(0x10a)](var_core_value_sigA621["startRow"], var_core_value_sigA621[var_core_value_sig7620(0x16c)] - var_core_value_sigA621[var_core_value_sig7620(0x16b)] + 0x1, var_core_value_sigBBFF[var_core_value_sig7620(0x16b)]);
                  }
                  this["_sparklineDataSourceModel"][var_core_value_sig7620(0x154)](var_core_value_sig50AF, var_core_value_sigA942);
                } else {
                  if (var_core_value_sigA73E["id"] === t["MoveRangeMutation"]["id"]) {
                    let {
                      fromRange: var_core_value_sigF230,
                      toRange: var_core_value_sig09B8,
                      unitId: var_core_value_sig6F91,
                      from: var_core_value_sigF9C7,
                      to: var_core_value_sig8895
                    } = var_core_value_sigA73E[var_core_value_sig7620(0x14f)];
                    if (var_core_value_sigF9C7[var_core_value_sig7620(0xc7)] !== var_core_value_sig8895["subUnitId"]) return;
                    let var_core_value_sigC80B = var_core_value_sigF9C7[var_core_value_sig7620(0xc7)],
                      {
                        startRow: var_core_value_sig284F,
                        endRow: var_core_value_sigE154,
                        startColumn: var_core_value_sig4632,
                        endColumn: var_core_value_sig12F2
                      } = var_core_value_sigF230,
                      {
                        startRow: var_core_value_sig2259,
                        startColumn: var_core_value_sig9E2F
                      } = var_core_value_sig09B8,
                      var_core_value_sigD082 = var_core_value_sig2259 - var_core_value_sig284F,
                      var_core_value_sigDBB7 = var_core_value_sig9E2F - var_core_value_sig4632,
                      var_core_value_sigD0A8 = this[var_core_value_sig7620(0x15d)][var_core_value_sig7620(0xea)](var_core_value_sig6F91, var_core_value_sigC80B);
                    if (!(var_core_value_sigD0A8 != null && var_core_value_sigD0A8["size"])) return;
                    for (let var_core_value_sigFBA4 = var_core_value_sig284F; var_core_value_sigFBA4 <= var_core_value_sigE154; var_core_value_sigFBA4++) for (let var_core_value_sig1BBD = var_core_value_sig4632; var_core_value_sig1BBD <= var_core_value_sig12F2; var_core_value_sig1BBD++) {
                      let var_core_value_sig2AD0 = this[var_core_value_sig7620(0x15d)]["getSparkline"](var_core_value_sig6F91, var_core_value_sigC80B, var_core_value_sigFBA4, var_core_value_sig1BBD);
                      if (var_core_value_sig2AD0) {
                        let var_core_value_sig2AD8 = this["_sparklineDataSourceModel"][var_core_value_sig7620(0xf0)](var_core_value_sig6F91, var_core_value_sigC80B, var_core_value_sig2AD0);
                        if (var_core_value_sig2AD8) {
                          let var_core_value_sig7524 = var_core_value_sig2AD8[var_core_value_sig7620(0x161)][var_core_value_sig7620(0x17b)](var_core_value_sigFBA4, var_core_value_sig1BBD);
                          var_core_value_sig7524 && (var_core_value_sig2AD8["sparklines"][var_core_value_sig7620(0x173)](var_core_value_sigFBA4 + var_core_value_sigD082, var_core_value_sig1BBD + var_core_value_sigDBB7, var_core_value_sig7524), var_core_value_sig2AD8[var_core_value_sig7620(0x161)][var_core_value_sig7620(0xd2)](var_core_value_sigFBA4, var_core_value_sig1BBD));
                        }
                      }
                    }
                    for (let [var_core_value_sig4383, var_core_value_sig186C] of var_core_value_sigD0A8) {
                      let var_core_value_sigF704 = var_core_value_sig186C[var_core_value_sig7620(0x161)];
                      var_core_value_sigF704[var_core_value_sig7620(0xae)]((var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig3D7D) => {
                        const var_core_value_sig27E5 = var_core_value_sig7620;
                        let var_core_value_sig8061 = {
                          ...var_core_value_sig3D7D
                        };
                        e[var_core_value_sig27E5(0x191)][var_core_value_sig27E5(0x100)](var_core_value_sigF230, var_core_value_sig3D7D) && (var_core_value_sig8061[var_core_value_sig27E5(0x16b)] += var_core_value_sigD082, var_core_value_sig8061[var_core_value_sig27E5(0x16c)] += var_core_value_sigD082, var_core_value_sig8061[var_core_value_sig27E5(0xa7)] += var_core_value_sigDBB7, var_core_value_sig8061["endColumn"] += var_core_value_sigDBB7), var_core_value_sigF704["setValue"](var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig8061);
                      });
                    }
                    this[var_core_value_sig7620(0x15d)]["reBuildAnchorCache"](var_core_value_sig6F91, var_core_value_sigC80B);
                  }
                }
              }
            }
          }
        }
      }
    }));
  }
};
M = _([g(0x0, (0x0, e["Inject"])(e["ICommandService"])), g(0x1, (0x0, e["Inject"])(t["RefRangeService"])), g(0x2, e["IUniverInstanceService"]), g(0x3, (0x0, e["Inject"])(v))], M);
let N = class extends e["Disposable"] {
  constructor(var_core_value_sig38C5, var_core_value_sigC87D, var_core_value_sigCCDC) {
    super(), this[ox192177(0xdf)] = var_core_value_sig38C5, this[ox192177(0xf9)] = var_core_value_sigC87D, this["_sparklineDataSourceModel"] = var_core_value_sigCCDC, this[ox192177(0xb3)]();
  }
  ["_initSheetChange"]() {
    this["disposeWithMe"](this[oxa40e55(0xf9)][oxa40e55(0x144)]({
      getMutations: var_core_value_sigB9FC => {
        const var_core_value_sig5055 = oxa40e55;
        if (var_core_value_sigB9FC["id"] === t[var_core_value_sig5055(0x18c)]["id"]) {
          var var_core_value_sig3801;
          let var_core_value_sig585D = var_core_value_sigB9FC[var_core_value_sig5055(0x14f)],
            var_core_value_sigE722 = var_core_value_sig585D[var_core_value_sig5055(0x133)] || this[var_core_value_sig5055(0xdf)][var_core_value_sig5055(0xd7)](e["UniverInstanceType"]["UNIVER_SHEET"])["getUnitId"](),
            var_core_value_sig062A = var_core_value_sig585D[var_core_value_sig5055(0xc7)] || ((var_core_value_sig3801 = this[var_core_value_sig5055(0xdf)][var_core_value_sig5055(0xd7)](e[var_core_value_sig5055(0x185)][var_core_value_sig5055(0xa8)])[var_core_value_sig5055(0x109)]()) == null ? void 0x0 : var_core_value_sig3801[var_core_value_sig5055(0x118)]());
          if (!var_core_value_sigE722 || !var_core_value_sig062A) return {
            redos: [],
            undos: []
          };
          let var_core_value_sig050A = this["_sparklineDataSourceModel"][var_core_value_sig5055(0xea)](var_core_value_sigE722, var_core_value_sig062A);
          if (!var_core_value_sig050A) return {
            redos: [],
            undos: []
          };
          let var_core_value_sig8B32 = new Set(),
            var_core_value_sig870F = {};
          for (let [var_core_value_sig6774, var_core_value_sig340D] of var_core_value_sig050A) var_core_value_sig8B32[var_core_value_sig5055(0x168)](var_core_value_sig6774), var_core_value_sig870F[var_core_value_sig6774] = {
            config: e[var_core_value_sig5055(0xed)][var_core_value_sig5055(0xc8)](var_core_value_sig340D["config"]),
            sparklines: e[var_core_value_sig5055(0xed)][var_core_value_sig5055(0xc8)](var_core_value_sig340D[var_core_value_sig5055(0x161)][var_core_value_sig5055(0xd5)]())
          };
          if (var_core_value_sig8B32["size"]) return {
            redos: [{
              id: b["id"],
              params: {
                unitId: var_core_value_sigE722,
                subUnitId: var_core_value_sig062A,
                groupIds: Array[var_core_value_sig5055(0x11f)](var_core_value_sig8B32),
                isSingle: !0x1
              }
            }],
            undos: [{
              id: y["id"],
              params: {
                unitId: var_core_value_sigE722,
                subUnitId: var_core_value_sig062A,
                sparklineConfigMap: var_core_value_sig870F
              }
            }]
          };
        } else {
          if (var_core_value_sigB9FC["id"] === t[var_core_value_sig5055(0x125)]["id"]) {
            let {
              unitId: var_core_value_sig82D4,
              subUnitId: var_core_value_sigBDE4,
              targetSubUnitId: var_core_value_sig7DF1
            } = var_core_value_sigB9FC[var_core_value_sig5055(0x14f)];
            if (!var_core_value_sig82D4 || !var_core_value_sigBDE4 || !var_core_value_sig7DF1) return {
              redos: [],
              undos: []
            };
            let var_core_value_sigDC86 = this[var_core_value_sig5055(0x15d)][var_core_value_sig5055(0xea)](var_core_value_sig82D4, var_core_value_sigBDE4);
            if (!var_core_value_sigDC86) return {
              redos: [],
              undos: []
            };
            let var_core_value_sig0B0C = new Set(),
              var_core_value_sigA39E = {};
            for (let [var_core_value_sigE4C6, var_core_value_sig4313] of var_core_value_sigDC86) {
              let var_core_value_sig7A62 = "g_" + (0x0, e[var_core_value_sig5055(0xd8)])(0x6);
              var_core_value_sig0B0C[var_core_value_sig5055(0x168)](var_core_value_sigE4C6), var_core_value_sigA39E[var_core_value_sig7A62] = {
                config: e["Tools"][var_core_value_sig5055(0xc8)](var_core_value_sig4313[var_core_value_sig5055(0xa9)]),
                sparklines: e[var_core_value_sig5055(0xed)][var_core_value_sig5055(0xc8)](var_core_value_sig4313[var_core_value_sig5055(0x161)][var_core_value_sig5055(0xd5)]())
              };
            }
            if (var_core_value_sig0B0C["size"]) return {
              redos: [{
                id: y["id"],
                params: {
                  unitId: var_core_value_sig82D4,
                  subUnitId: var_core_value_sig7DF1,
                  sparklineConfigMap: var_core_value_sigA39E
                }
              }],
              undos: [{
                id: b["id"],
                params: {
                  unitId: var_core_value_sig82D4,
                  subUnitId: var_core_value_sig7DF1,
                  groupIds: Array[var_core_value_sig5055(0x11f)](var_core_value_sig0B0C),
                  isSingle: !0x1
                }
              }]
            };
          }
        }
        return {
          redos: [],
          undos: []
        };
      }
    }));
  }
};
N = _([g(0x0, (0x0, e["Inject"])(e["IUniverInstanceService"])), g(0x1, (0x0, e["Inject"])(t["SheetInterceptorService"])), g(0x2, (0x0, e["Inject"])(v))], N);
let P = class extends e["Disposable"] {
  constructor(var_core_value_sigC310, var_core_value_sigA4E8) {
    super(), this["_resourceManagerService"] = var_core_value_sigC310, this[ox453373(0x15d)] = var_core_value_sigA4E8, this["_initSnapshot"]();
  }
  ["_initSnapshot"]() {
    this[ox1b9cf4(0x99)](this[ox1b9cf4(0xbc)][ox1b9cf4(0x18b)]({
      toJson: var_core_value_sig45F0 => {
        const var_core_value_sigBC91 = ox1b9cf4;
        let var_core_value_sigCB88 = this[var_core_value_sigBC91(0x15d)][var_core_value_sigBC91(0x104)](var_core_value_sig45F0);
        return var_core_value_sigCB88 ? JSON[var_core_value_sigBC91(0x115)](var_core_value_sigCB88) : "";
      },
      parseJson: var_core_value_sig8D65 => var_core_value_sig8D65 ? JSON[ox1b9cf4(0xef)](var_core_value_sig8D65) : {},
      pluginName: a,
      businesses: [e["UniverInstanceType"][ox1b9cf4(0xa8)]],
      onLoad: (var_core_value_sig8122, var_core_value_sigEDC6) => {
        const var_core_value_sig611A = ox1b9cf4;
        this[var_core_value_sig611A(0x15d)][var_core_value_sig611A(0xfd)](var_core_value_sigEDC6);
      },
      onUnLoad: var_core_value_sig6BD9 => {
        const var_core_value_sig7E56 = ox1b9cf4;
        this[var_core_value_sig7E56(0x15d)][var_core_value_sig7E56(0x14d)](var_core_value_sig6BD9);
      }
    }));
  }
};
P = _([g(0x0, (0x0, e["Inject"])(e["IResourceManagerService"])), g(0x1, (0x0, e["Inject"])(v))], P);
let F = class extends e["Plugin"] {
  constructor(var_core_value_sigDC07 = D, var_core_value_sig3474, var_core_value_sig4E80, var_core_value_sigD23B) {
    super(), this[ox242915(0x13a)] = var_core_value_sigDC07, this[ox242915(0x101)] = var_core_value_sig3474, this[ox242915(0xb8)] = var_core_value_sig4E80, this["_commandService"] = var_core_value_sigD23B;
    let {
      ...var_core_value_sig2B2A
    } = (0x0, e[ox242915(0x190)])({}, D, this[ox242915(0x13a)]);
    this[ox242915(0xb8)]["setConfig"]("sheets-sparkline.config", var_core_value_sig2B2A), this["_initDependencies"](), this[ox242915(0x15c)]();
  }
  ["_initDependencies"]() {
    [[v], [k], [j], [O], [M], [A], [N], [P]][ox5b07a0(0xca)](var_core_value_sig4161 => {
      const var_core_value_sig7580 = ox5b07a0;
      this[var_core_value_sig7580(0x101)][var_core_value_sig7580(0x168)](var_core_value_sig4161);
    }), (0x0, e[ox5b07a0(0x143)])(this[ox5b07a0(0x101)], [[P]]);
  }
  ["onReady"]() {
    (0x0, e[ox41c2e6(0x143)])(this[ox41c2e6(0x101)], [[k], [j], [O], [M], [A], [N]]);
  }
  ["_initRegisterCommand"]() {
    [x, y, S, b, w, C][ox3736ee(0xca)](var_core_value_sig1F18 => this[ox3736ee(0x189)][ox3736ee(0x13e)](var_core_value_sig1F18));
  }
};
h(F, "pluginName", a), h(F, "packageName", T), h(F, "version", E), h(F, "type", e["UniverInstanceType"]["UNIVER_SHEET"]), F = _([(0x0, e["DependentOn"])(r["UniverLicensePlugin"], t["UniverSheetsPlugin"]), g(0x1, (0x0, e["Inject"])(e["Injector"])), g(0x2, e["IConfigService"]), g(0x3, (0x0, e["Inject"])(e["ICommandService"]))], F), exports["AddSheetSparklineCommand"] = x, exports["AddSheetSparklineMutation"] = y, exports["PLUGIN_NAME"] = a, exports["RemoveSheetSparklineCommand"] = S, exports["RemoveSheetSparklineMutation"] = b, exports["SetSheetSparklineCommand"] = w, exports["SetSheetSparklineMutation"] = C, exports["SpacialShowAsEnum"] = u, Object["defineProperty"](exports, "SparklineDataSourceModel", {
  enumerable: !0x0,
  get: function () {
    return v;
  }
}), exports["SparklineExtremumTypeEnum"] = d, exports["SparklinePointsNames"] = s, exports["SparklineThemeMapping"] = o, exports["SparklineThemeTypeEnum"] = c, exports["SparklineTypeEnum"] = l, Object["defineProperty"](exports, "UniverSheetSparklinePlugin", {
  enumerable: !0x0,
  get: function () {
    return F;
  }
});
